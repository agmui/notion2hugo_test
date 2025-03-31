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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJB4UF3A%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIFW8L92m4Thf7xvAZ%2FbNpJMXxpRq6Z6S0ZkgHurdXXHnAiBNsaVGIzJWKQvSI3cJu%2Fas4qycx5Ydn9yma49A3JvESiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMBys%2BPoM7%2BvWKT4KtwDAZVVpBCh%2FE%2FD7N6K03gtXR9S%2FJr0T4F4qUz4N%2F7tdUgyamgIiuEisCm%2B%2BmqcweYlinjYrJLwqbSB6gr9yLQlbpEktnUhJT33eiIuniyF54%2FdX9%2FZQNUl%2FgoOu89aN8dgEcFvzEiQliuWiGj9FXDkY17AJ0%2FUxU%2BG5hM9n6h6fOMVjTC%2FZRS4bX5fHR2iPKjKrjPGg5ZrbLV6V8XAU9ABniXVSpvFfSOyjV%2Bdm%2FlhpWlKkH00M%2BTNfGNfr6veYIEHYmlI4gUqOquYyuRbyDOABIc%2FCN7GINGt3saw9BXRQY17M8tjegklwnvt15xgM5bwDiAQLdLTp6g44uHe3e%2B0m8P2FNgF3un6alX3o4eRe6hcR0yK6SVYqyj6DNP0g21fs5dGNLld6rKQ%2Br%2BmzK6jmhy3pIArObPOHA8Nlp%2FJklasMjwt7%2FjkXqd1BGg552BCI9GRT4OelHgKeUsw8vN%2BfqNz6o16uhYaWbfJZOY2S7VfiPyrsDzkW6eFxucRLJPlSJCTL%2FIi1bPwXVjexg4IdrmjNVzxviVeB4bS5XnGS4sgbZjlWB9cqNo8Ruudn%2FdwQdTm%2Bzug1olabqxxFzxrHYY8AfuUI9dwrzjeoi0L%2FWf%2F8i9GEiTAl8aZ8n8w3ueovwY6pgHBCfw9%2BdqxhlnC%2Bo82sPW53xXhAuGWhvRYHtl90zNrynMyIVWpoImgNcCpJsrc9AGArQPl17fmnNpkb50fKGcujyVwzkZaE83HfTTLoU69cRpnNQNluevfLCYvEjC%2FYyp2%2FpKN0J6sVUUgyIU7k9mz3jn8dYrxr5SOpeZxWuMdToddCYN5mqlQjfollhzTPsQasNfaBzkuB3lQl250aKBhVrRxkslQ&X-Amz-Signature=0026ae94f06f044c884306d7e2b920635e37a99eeb115af17c314945fa1770d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJB4UF3A%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIFW8L92m4Thf7xvAZ%2FbNpJMXxpRq6Z6S0ZkgHurdXXHnAiBNsaVGIzJWKQvSI3cJu%2Fas4qycx5Ydn9yma49A3JvESiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMBys%2BPoM7%2BvWKT4KtwDAZVVpBCh%2FE%2FD7N6K03gtXR9S%2FJr0T4F4qUz4N%2F7tdUgyamgIiuEisCm%2B%2BmqcweYlinjYrJLwqbSB6gr9yLQlbpEktnUhJT33eiIuniyF54%2FdX9%2FZQNUl%2FgoOu89aN8dgEcFvzEiQliuWiGj9FXDkY17AJ0%2FUxU%2BG5hM9n6h6fOMVjTC%2FZRS4bX5fHR2iPKjKrjPGg5ZrbLV6V8XAU9ABniXVSpvFfSOyjV%2Bdm%2FlhpWlKkH00M%2BTNfGNfr6veYIEHYmlI4gUqOquYyuRbyDOABIc%2FCN7GINGt3saw9BXRQY17M8tjegklwnvt15xgM5bwDiAQLdLTp6g44uHe3e%2B0m8P2FNgF3un6alX3o4eRe6hcR0yK6SVYqyj6DNP0g21fs5dGNLld6rKQ%2Br%2BmzK6jmhy3pIArObPOHA8Nlp%2FJklasMjwt7%2FjkXqd1BGg552BCI9GRT4OelHgKeUsw8vN%2BfqNz6o16uhYaWbfJZOY2S7VfiPyrsDzkW6eFxucRLJPlSJCTL%2FIi1bPwXVjexg4IdrmjNVzxviVeB4bS5XnGS4sgbZjlWB9cqNo8Ruudn%2FdwQdTm%2Bzug1olabqxxFzxrHYY8AfuUI9dwrzjeoi0L%2FWf%2F8i9GEiTAl8aZ8n8w3ueovwY6pgHBCfw9%2BdqxhlnC%2Bo82sPW53xXhAuGWhvRYHtl90zNrynMyIVWpoImgNcCpJsrc9AGArQPl17fmnNpkb50fKGcujyVwzkZaE83HfTTLoU69cRpnNQNluevfLCYvEjC%2FYyp2%2FpKN0J6sVUUgyIU7k9mz3jn8dYrxr5SOpeZxWuMdToddCYN5mqlQjfollhzTPsQasNfaBzkuB3lQl250aKBhVrRxkslQ&X-Amz-Signature=42351ec9749f2660e132dd2157df842ed1ae23ad91fba6cb315e42c5c0fc6007&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJB4UF3A%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIFW8L92m4Thf7xvAZ%2FbNpJMXxpRq6Z6S0ZkgHurdXXHnAiBNsaVGIzJWKQvSI3cJu%2Fas4qycx5Ydn9yma49A3JvESiqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMBys%2BPoM7%2BvWKT4KtwDAZVVpBCh%2FE%2FD7N6K03gtXR9S%2FJr0T4F4qUz4N%2F7tdUgyamgIiuEisCm%2B%2BmqcweYlinjYrJLwqbSB6gr9yLQlbpEktnUhJT33eiIuniyF54%2FdX9%2FZQNUl%2FgoOu89aN8dgEcFvzEiQliuWiGj9FXDkY17AJ0%2FUxU%2BG5hM9n6h6fOMVjTC%2FZRS4bX5fHR2iPKjKrjPGg5ZrbLV6V8XAU9ABniXVSpvFfSOyjV%2Bdm%2FlhpWlKkH00M%2BTNfGNfr6veYIEHYmlI4gUqOquYyuRbyDOABIc%2FCN7GINGt3saw9BXRQY17M8tjegklwnvt15xgM5bwDiAQLdLTp6g44uHe3e%2B0m8P2FNgF3un6alX3o4eRe6hcR0yK6SVYqyj6DNP0g21fs5dGNLld6rKQ%2Br%2BmzK6jmhy3pIArObPOHA8Nlp%2FJklasMjwt7%2FjkXqd1BGg552BCI9GRT4OelHgKeUsw8vN%2BfqNz6o16uhYaWbfJZOY2S7VfiPyrsDzkW6eFxucRLJPlSJCTL%2FIi1bPwXVjexg4IdrmjNVzxviVeB4bS5XnGS4sgbZjlWB9cqNo8Ruudn%2FdwQdTm%2Bzug1olabqxxFzxrHYY8AfuUI9dwrzjeoi0L%2FWf%2F8i9GEiTAl8aZ8n8w3ueovwY6pgHBCfw9%2BdqxhlnC%2Bo82sPW53xXhAuGWhvRYHtl90zNrynMyIVWpoImgNcCpJsrc9AGArQPl17fmnNpkb50fKGcujyVwzkZaE83HfTTLoU69cRpnNQNluevfLCYvEjC%2FYyp2%2FpKN0J6sVUUgyIU7k9mz3jn8dYrxr5SOpeZxWuMdToddCYN5mqlQjfollhzTPsQasNfaBzkuB3lQl250aKBhVrRxkslQ&X-Amz-Signature=f101bc638f418542f63a5c30c27900c75cc3ac4edbb30c429b369aa417fb4a00&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
