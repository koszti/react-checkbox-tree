import React from 'react';
import CheckboxTree from 'react-checkbox-tree';

const nodes = [
    {
        value: '/app',
        label: 'app',
        children: [
            {
                value: '/app/Http',
                label: 'Http',
                children: [
                    {
                        value: '/app/Http/Controllers',
                        label: 'Controllers',
                        children: [{
                            value: '/app/Http/Controllers/WelcomeController.js',
                            label: 'WelcomeController.js',
                        }],
                    },
                    {
                        value: '/app/Http/routes.js',
                        label: 'routes.js',
                    },
                ],
            },
            {
                value: '/app/Providers',
                label: 'Providers',
                children: [{
                    value: '/app/Http/Providers/EventServiceProvider.js',
                    label: 'EventServiceProvider.js',
                }],
            },
        ],
    },
    {
        value: '/config',
        label: 'config',
        children: [
            {
                value: '/config/app.js',
                label: 'app.js',
            },
            {
                value: '/config/database.js',
                label: 'database.js',
            },
        ],
    },
    {
        value: '/public',
        label: 'public',
        children: [
            {
                value: '/public/assets/',
                label: 'assets',
                children: [{
                    value: '/public/assets/style.css',
                    label: 'style.css',
                }],
            },
            {
                value: '/public/index.html',
                label: 'index.html',
            },
        ],
    },
    {
        value: '/.env',
        label: '.env',
    },
    {
        value: '/.gitignore',
        label: '.gitignore',
    },
    {
        value: '/README.md',
        label: 'README.md',
    },
];

class ClickExample extends React.Component {
    constructor() {
        super();

        this.state = {
            checked: [
                '/app/Http/Controllers/WelcomeController.js',
                '/app/Http/routes.js',
                '/public/assets/style.css',
                '/public/index.html',
                '/.gitignore',
            ],
            expanded: [
                '/app',
            ],
            clicked: {},
        };

        this.onCheck = this.onCheck.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onExpand = this.onExpand.bind(this);
    }

    onCheck(checked) {
        this.setState({ checked });
    }

    onClick(clicked) {
        this.setState({ clicked });
    }

    onExpand(expanded) {
        this.setState({ expanded });
    }

    render() {
        const { checked, expanded, clicked } = this.state;

        const notClickedText = 'Not Clicked';

        return (
            <div className="row">
                <div style={{ width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
                    <CheckboxTree
                        checked={checked}
                        expanded={expanded}
                        nodes={nodes}
                        expandOnClick
                        onCheck={this.onCheck}
                        onClick={this.onClick}
                        onExpand={this.onExpand}
                    />
                </div>
                <div style={{ width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
                    <b>Clicked Node</b>: {clicked.value || notClickedText} <br />
                </div>
            </div>
        );
    }
}

export default ClickExample;
