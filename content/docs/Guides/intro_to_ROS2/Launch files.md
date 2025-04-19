---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QC6WAE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCbXFmVY%2B13PTB847EB%2FYgx7YoTWn7PDVg7w%2F%2B8D6owsAIgU0du1Rwwzn10EZF8Dhz1SzgnQbk2mcxSrasQGcfSPaAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC19NMDLLf46R8OXpSrcA%2Fj%2F5vLT9r%2Bezwr5vHJP6HV9ZXEVkbXfHm%2FHTaGwTAb9dt9tnKtRatnfI1kcCUAqFxrs46Ui8cyisquTbz2mfkGp9bjsUsgFKkRDv%2FqI9Z2sXODnaEZPzXRFEnntfTRQf%2BNRtEo%2Fcg1gw%2FDvfqtXGvJkyR48CJvahhoiTN85zzk%2BwQn7tcZ0NzMYLIWduRujMfYv7w6RBRhgXz0YmDZsWS4iwRp2ubhyAw86%2B11JNKG%2B%2B2yV2jasTSe5MvkHeKwET7JLmf6PZxNWVcQZcVDpCUS0ocdv%2BIfrq2ovNYv82RZQDWcWfIhM5siNO9HdMRzIg3TCQ6zemYwp4KEeWxymf7tKgiIp90D3UAybQyiwZMQgodMzSBE8ZADtTsdildaFhSowfGiXBUOLcdNTfaFBLwOQBckDdsDICgTUvJLTopmhoWL%2Bo3MlwqV9eGyh%2FOmjU5oqjLN6GLTOhNgFB%2FJ%2B9%2BPcsZ8dImAHOxHHjxlkFAyBWxKXCN07SyMp8AsumlYp2LKUQM5cozIiSydaa6%2F0R%2BwniyzVfBMIjx%2Ba9lwkwrLoJXcKRP88EDf%2B2BYLEASBHj1c%2FK6Tw%2FlJKAJbuS4PMS1%2BfapPYMNBUk7ZVAOKoASTaBm%2BMm%2FCfNLIu86mMLWCj8AGOqUBjbuOUVzrG9v73%2FN73uIRQLtLovBFZ4s4%2BR0rdGnVDWkHycxP2AjTz7AqeBQ1jN1m2DTRADTt24EztaIayK%2F2ARACbPrtn%2BPRC6NgG77aF%2By5gXLSC6iTUl4t81x8OJPfwHTe7oZGgKKcnE%2BKWA9UHo8QYrz8k1pQKK4LyBCbgbs2Og3O2S0J8s4%2Fuq%2BTKOUPDZuh9tq9JUDvWbUZN0oCrHZ4Y%2Fg0&X-Amz-Signature=3c8a3fa51cb7b53f48882dcf8bd5d76fd311e78f7ba9ce8ee2985e4c7525a977&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QC6WAE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCbXFmVY%2B13PTB847EB%2FYgx7YoTWn7PDVg7w%2F%2B8D6owsAIgU0du1Rwwzn10EZF8Dhz1SzgnQbk2mcxSrasQGcfSPaAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC19NMDLLf46R8OXpSrcA%2Fj%2F5vLT9r%2Bezwr5vHJP6HV9ZXEVkbXfHm%2FHTaGwTAb9dt9tnKtRatnfI1kcCUAqFxrs46Ui8cyisquTbz2mfkGp9bjsUsgFKkRDv%2FqI9Z2sXODnaEZPzXRFEnntfTRQf%2BNRtEo%2Fcg1gw%2FDvfqtXGvJkyR48CJvahhoiTN85zzk%2BwQn7tcZ0NzMYLIWduRujMfYv7w6RBRhgXz0YmDZsWS4iwRp2ubhyAw86%2B11JNKG%2B%2B2yV2jasTSe5MvkHeKwET7JLmf6PZxNWVcQZcVDpCUS0ocdv%2BIfrq2ovNYv82RZQDWcWfIhM5siNO9HdMRzIg3TCQ6zemYwp4KEeWxymf7tKgiIp90D3UAybQyiwZMQgodMzSBE8ZADtTsdildaFhSowfGiXBUOLcdNTfaFBLwOQBckDdsDICgTUvJLTopmhoWL%2Bo3MlwqV9eGyh%2FOmjU5oqjLN6GLTOhNgFB%2FJ%2B9%2BPcsZ8dImAHOxHHjxlkFAyBWxKXCN07SyMp8AsumlYp2LKUQM5cozIiSydaa6%2F0R%2BwniyzVfBMIjx%2Ba9lwkwrLoJXcKRP88EDf%2B2BYLEASBHj1c%2FK6Tw%2FlJKAJbuS4PMS1%2BfapPYMNBUk7ZVAOKoASTaBm%2BMm%2FCfNLIu86mMLWCj8AGOqUBjbuOUVzrG9v73%2FN73uIRQLtLovBFZ4s4%2BR0rdGnVDWkHycxP2AjTz7AqeBQ1jN1m2DTRADTt24EztaIayK%2F2ARACbPrtn%2BPRC6NgG77aF%2By5gXLSC6iTUl4t81x8OJPfwHTe7oZGgKKcnE%2BKWA9UHo8QYrz8k1pQKK4LyBCbgbs2Og3O2S0J8s4%2Fuq%2BTKOUPDZuh9tq9JUDvWbUZN0oCrHZ4Y%2Fg0&X-Amz-Signature=9b116352f0072a8c58c55ae65455b61897599a086fc2535d60d9beac189bc99e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634QC6WAE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCbXFmVY%2B13PTB847EB%2FYgx7YoTWn7PDVg7w%2F%2B8D6owsAIgU0du1Rwwzn10EZF8Dhz1SzgnQbk2mcxSrasQGcfSPaAqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC19NMDLLf46R8OXpSrcA%2Fj%2F5vLT9r%2Bezwr5vHJP6HV9ZXEVkbXfHm%2FHTaGwTAb9dt9tnKtRatnfI1kcCUAqFxrs46Ui8cyisquTbz2mfkGp9bjsUsgFKkRDv%2FqI9Z2sXODnaEZPzXRFEnntfTRQf%2BNRtEo%2Fcg1gw%2FDvfqtXGvJkyR48CJvahhoiTN85zzk%2BwQn7tcZ0NzMYLIWduRujMfYv7w6RBRhgXz0YmDZsWS4iwRp2ubhyAw86%2B11JNKG%2B%2B2yV2jasTSe5MvkHeKwET7JLmf6PZxNWVcQZcVDpCUS0ocdv%2BIfrq2ovNYv82RZQDWcWfIhM5siNO9HdMRzIg3TCQ6zemYwp4KEeWxymf7tKgiIp90D3UAybQyiwZMQgodMzSBE8ZADtTsdildaFhSowfGiXBUOLcdNTfaFBLwOQBckDdsDICgTUvJLTopmhoWL%2Bo3MlwqV9eGyh%2FOmjU5oqjLN6GLTOhNgFB%2FJ%2B9%2BPcsZ8dImAHOxHHjxlkFAyBWxKXCN07SyMp8AsumlYp2LKUQM5cozIiSydaa6%2F0R%2BwniyzVfBMIjx%2Ba9lwkwrLoJXcKRP88EDf%2B2BYLEASBHj1c%2FK6Tw%2FlJKAJbuS4PMS1%2BfapPYMNBUk7ZVAOKoASTaBm%2BMm%2FCfNLIu86mMLWCj8AGOqUBjbuOUVzrG9v73%2FN73uIRQLtLovBFZ4s4%2BR0rdGnVDWkHycxP2AjTz7AqeBQ1jN1m2DTRADTt24EztaIayK%2F2ARACbPrtn%2BPRC6NgG77aF%2By5gXLSC6iTUl4t81x8OJPfwHTe7oZGgKKcnE%2BKWA9UHo8QYrz8k1pQKK4LyBCbgbs2Og3O2S0J8s4%2Fuq%2BTKOUPDZuh9tq9JUDvWbUZN0oCrHZ4Y%2Fg0&X-Amz-Signature=ebe9a707b8321dfe73541b70f06c96904bd47fc5f483d61a8fe1933710f83276&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
