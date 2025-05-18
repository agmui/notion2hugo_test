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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWZGH4EA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFes32pPnDdx8R1yRl1ln8Q5C5qFcjNbcIcOWp1Rj1qvAiBYJQNihGBerYs6sIwn9cZY1x8Q8yxO%2BErJyaqRFh100yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMfBnXjWVGtN5WT1qIKtwDTSkLocP9o%2BFNimiXOUNZE4Jqzbwkc7V2J8Fmpthn2f%2FkF3027I3L329Ra7oPP1LNRBOms78mxVuuisqAW0zhg5xpbkMRr%2BFEbMxb%2Bcp%2Bjc1Jp2fyY0uBWEKjNtWWfhXoGcelYqavwbKZrCa3MEX3CJx4vPhfnlMGtvMWFwyanJbyCjFVKxin3e7V8gJVcbzkvzHLH03g8gM5rReJRC3D6uRYAF35aYb4r27f1gLTSDg3cfxNhd99NLCEFPneCccF1i56W%2BkP2zmXmqjLTh6b7010nGjkkXdrFsJjQn1%2BZs2cc%2Bp6CiOO4BtdoZ5medZCqUI%2Fl63bvSSme4RYoxOOtpm9uaXWmdi8kFS5NB8WBhErzUBetmB3ggFXNt9l0zV5MuNRbyN94Vk8XbttfWX7oeH%2F0DzhSewURNkwtTKRawQ5vFStZLIbl5C%2BdCsTxXSVfh30fuxDUJVO3voLDewHHFaPeDCn3qtFZbjBK%2BJT%2FZuN%2F%2FDq3gygifEpBTX6HMJSOjWlLifux3UQJM7Wvyq2jhdWB3voiLA0XXn7lcKu%2B6A1OxmVSPRoLOOgGWkCdEwUglJNivthey6RyriDEWRENCYKJLWH6gTdTGoXlyPLMWHVGxJY0jk6hnqLjk8wl4KlwQY6pgFJiLXKfyQKqoQwAx1gCW5FrthQK2%2F3eK1TMjlj2Ad6PevqmC3W%2BbcZg%2BFuaVNMeGRVRPJFDXYLiiJkcHXTnQdC0G%2Bk4POLSrI1q1yeORRsTSY4hG%2BDpm9VFJOG7R232bZcUbIrXku83Y7t9gGRuqpJBJop9VUTxDZ%2BjMJ1hlKXVbgoKxG2NG9wyFySYlZh%2B2HpjVizUIR6atTpvtm5iOqNhlkb68SV&X-Amz-Signature=5c62e37df0546023919d831951db5e6187ec2fb076a00fa30c2aff011b2d6916&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWZGH4EA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFes32pPnDdx8R1yRl1ln8Q5C5qFcjNbcIcOWp1Rj1qvAiBYJQNihGBerYs6sIwn9cZY1x8Q8yxO%2BErJyaqRFh100yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMfBnXjWVGtN5WT1qIKtwDTSkLocP9o%2BFNimiXOUNZE4Jqzbwkc7V2J8Fmpthn2f%2FkF3027I3L329Ra7oPP1LNRBOms78mxVuuisqAW0zhg5xpbkMRr%2BFEbMxb%2Bcp%2Bjc1Jp2fyY0uBWEKjNtWWfhXoGcelYqavwbKZrCa3MEX3CJx4vPhfnlMGtvMWFwyanJbyCjFVKxin3e7V8gJVcbzkvzHLH03g8gM5rReJRC3D6uRYAF35aYb4r27f1gLTSDg3cfxNhd99NLCEFPneCccF1i56W%2BkP2zmXmqjLTh6b7010nGjkkXdrFsJjQn1%2BZs2cc%2Bp6CiOO4BtdoZ5medZCqUI%2Fl63bvSSme4RYoxOOtpm9uaXWmdi8kFS5NB8WBhErzUBetmB3ggFXNt9l0zV5MuNRbyN94Vk8XbttfWX7oeH%2F0DzhSewURNkwtTKRawQ5vFStZLIbl5C%2BdCsTxXSVfh30fuxDUJVO3voLDewHHFaPeDCn3qtFZbjBK%2BJT%2FZuN%2F%2FDq3gygifEpBTX6HMJSOjWlLifux3UQJM7Wvyq2jhdWB3voiLA0XXn7lcKu%2B6A1OxmVSPRoLOOgGWkCdEwUglJNivthey6RyriDEWRENCYKJLWH6gTdTGoXlyPLMWHVGxJY0jk6hnqLjk8wl4KlwQY6pgFJiLXKfyQKqoQwAx1gCW5FrthQK2%2F3eK1TMjlj2Ad6PevqmC3W%2BbcZg%2BFuaVNMeGRVRPJFDXYLiiJkcHXTnQdC0G%2Bk4POLSrI1q1yeORRsTSY4hG%2BDpm9VFJOG7R232bZcUbIrXku83Y7t9gGRuqpJBJop9VUTxDZ%2BjMJ1hlKXVbgoKxG2NG9wyFySYlZh%2B2HpjVizUIR6atTpvtm5iOqNhlkb68SV&X-Amz-Signature=b6870729cbdc423538f0f7777952334ce27c70a8f1b153400053b322c47af9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWZGH4EA%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFes32pPnDdx8R1yRl1ln8Q5C5qFcjNbcIcOWp1Rj1qvAiBYJQNihGBerYs6sIwn9cZY1x8Q8yxO%2BErJyaqRFh100yr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMfBnXjWVGtN5WT1qIKtwDTSkLocP9o%2BFNimiXOUNZE4Jqzbwkc7V2J8Fmpthn2f%2FkF3027I3L329Ra7oPP1LNRBOms78mxVuuisqAW0zhg5xpbkMRr%2BFEbMxb%2Bcp%2Bjc1Jp2fyY0uBWEKjNtWWfhXoGcelYqavwbKZrCa3MEX3CJx4vPhfnlMGtvMWFwyanJbyCjFVKxin3e7V8gJVcbzkvzHLH03g8gM5rReJRC3D6uRYAF35aYb4r27f1gLTSDg3cfxNhd99NLCEFPneCccF1i56W%2BkP2zmXmqjLTh6b7010nGjkkXdrFsJjQn1%2BZs2cc%2Bp6CiOO4BtdoZ5medZCqUI%2Fl63bvSSme4RYoxOOtpm9uaXWmdi8kFS5NB8WBhErzUBetmB3ggFXNt9l0zV5MuNRbyN94Vk8XbttfWX7oeH%2F0DzhSewURNkwtTKRawQ5vFStZLIbl5C%2BdCsTxXSVfh30fuxDUJVO3voLDewHHFaPeDCn3qtFZbjBK%2BJT%2FZuN%2F%2FDq3gygifEpBTX6HMJSOjWlLifux3UQJM7Wvyq2jhdWB3voiLA0XXn7lcKu%2B6A1OxmVSPRoLOOgGWkCdEwUglJNivthey6RyriDEWRENCYKJLWH6gTdTGoXlyPLMWHVGxJY0jk6hnqLjk8wl4KlwQY6pgFJiLXKfyQKqoQwAx1gCW5FrthQK2%2F3eK1TMjlj2Ad6PevqmC3W%2BbcZg%2BFuaVNMeGRVRPJFDXYLiiJkcHXTnQdC0G%2Bk4POLSrI1q1yeORRsTSY4hG%2BDpm9VFJOG7R232bZcUbIrXku83Y7t9gGRuqpJBJop9VUTxDZ%2BjMJ1hlKXVbgoKxG2NG9wyFySYlZh%2B2HpjVizUIR6atTpvtm5iOqNhlkb68SV&X-Amz-Signature=a2feaddd9925d3839d3121290cfb37c5b1c7bc400d61713d8e0fa0a6b661b54e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
