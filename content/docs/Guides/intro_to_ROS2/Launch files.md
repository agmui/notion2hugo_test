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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLOLS3QT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyNS9SjDKcQAx7D28gdplQp%2FqTZ03lC7u%2FZd47rjgMdQIhAL9xc%2BJl489y78ujt1G6nldjIw6xS8VXJBHzBS4O1DsRKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfE%2FM0toIThc4O1YQq3APNwYkcGc2TqyHSiBX8tgKzFXxvwvECH3xAvmHooy3JD%2B3u5os9Jq5DjHifKb3ca2VOd1KK6FTvhV9%2F8ilkRLr7ZsZH%2Fv2JPp9xbp1VwpICiJuTN%2BdoD4g4uvnkpAZ%2B6z6aPfvAjggWggw8hN72KJT7OA9N7LnzwOQMJ7dY40cRlc08BWIYqiNgNuDB4le4WAkcokCVKRF3awvoy02R%2FNZ7FZFD3K1wkRhzvvDnqf%2FfDRdwXYycRqIdyllz1sjRs5IEGnPWrRZgXsyoeweB7gUsBKQoyb%2FrqpFQ3CY1or6F5dnaEUfMS0VdfH8EIxFun7%2Fmh3LVzO0t6CxHg67yXdubLDeMs8Ht7J0sscqBQyQvmc5QAPQXrfdZ7fXSHRndoM0ubMtVWxlzDZ555cLcQAKVHNHrROyX5ynIr%2BzT%2FAYOII%2FR2WlQxyNXRszxnO%2FSXe4shGzT5JN5Y29zCxdzQxN4%2B8dJMw6JnbiP4pVQXPBrtQ9mbkXmKpaqGFWdrtl8k0w0FJS9W9DTKw1fckmjMzc1%2B%2BmN0cLhQMgMIl1kri7hSfoAwgUynWK4N32VdA6G6EE02S4FfRQj8aryS%2Fgdmdq1iRsq1fd1gYnouhOwx%2Fjfh7nIH1NUTyL3Z7l%2BXjCg29a9BjqkAX0klWzcoED%2Bc9qEPBXLGeUYvd5jme4PZVdUkkz4ti4awzN8ezTm2VDmsRLgeUS747%2By9OCnrPmLIk89CfTNpCRR2OC%2FuqP4qzTsBEIDlME8VmaVWtpTYA3xaPtK6%2FuIT1duCLQB9j%2Fq1RX83n75vDCJ1IwpJjf25blhpU2uf3g3zqwCoGoesCqEiD%2BF6zFNKckSwyY4pz7Ful%2Fou5erBj54ry69&X-Amz-Signature=2881b5d7857fd02311952ca75f10cbf3cd1984e1593c2b50a0c028586f4a361f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLOLS3QT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyNS9SjDKcQAx7D28gdplQp%2FqTZ03lC7u%2FZd47rjgMdQIhAL9xc%2BJl489y78ujt1G6nldjIw6xS8VXJBHzBS4O1DsRKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfE%2FM0toIThc4O1YQq3APNwYkcGc2TqyHSiBX8tgKzFXxvwvECH3xAvmHooy3JD%2B3u5os9Jq5DjHifKb3ca2VOd1KK6FTvhV9%2F8ilkRLr7ZsZH%2Fv2JPp9xbp1VwpICiJuTN%2BdoD4g4uvnkpAZ%2B6z6aPfvAjggWggw8hN72KJT7OA9N7LnzwOQMJ7dY40cRlc08BWIYqiNgNuDB4le4WAkcokCVKRF3awvoy02R%2FNZ7FZFD3K1wkRhzvvDnqf%2FfDRdwXYycRqIdyllz1sjRs5IEGnPWrRZgXsyoeweB7gUsBKQoyb%2FrqpFQ3CY1or6F5dnaEUfMS0VdfH8EIxFun7%2Fmh3LVzO0t6CxHg67yXdubLDeMs8Ht7J0sscqBQyQvmc5QAPQXrfdZ7fXSHRndoM0ubMtVWxlzDZ555cLcQAKVHNHrROyX5ynIr%2BzT%2FAYOII%2FR2WlQxyNXRszxnO%2FSXe4shGzT5JN5Y29zCxdzQxN4%2B8dJMw6JnbiP4pVQXPBrtQ9mbkXmKpaqGFWdrtl8k0w0FJS9W9DTKw1fckmjMzc1%2B%2BmN0cLhQMgMIl1kri7hSfoAwgUynWK4N32VdA6G6EE02S4FfRQj8aryS%2Fgdmdq1iRsq1fd1gYnouhOwx%2Fjfh7nIH1NUTyL3Z7l%2BXjCg29a9BjqkAX0klWzcoED%2Bc9qEPBXLGeUYvd5jme4PZVdUkkz4ti4awzN8ezTm2VDmsRLgeUS747%2By9OCnrPmLIk89CfTNpCRR2OC%2FuqP4qzTsBEIDlME8VmaVWtpTYA3xaPtK6%2FuIT1duCLQB9j%2Fq1RX83n75vDCJ1IwpJjf25blhpU2uf3g3zqwCoGoesCqEiD%2BF6zFNKckSwyY4pz7Ful%2Fou5erBj54ry69&X-Amz-Signature=a23d9a8415b89f001182a3dfdabd95ea143fbbfa5bc31b6bf87035006ff12e39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLOLS3QT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyNS9SjDKcQAx7D28gdplQp%2FqTZ03lC7u%2FZd47rjgMdQIhAL9xc%2BJl489y78ujt1G6nldjIw6xS8VXJBHzBS4O1DsRKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfE%2FM0toIThc4O1YQq3APNwYkcGc2TqyHSiBX8tgKzFXxvwvECH3xAvmHooy3JD%2B3u5os9Jq5DjHifKb3ca2VOd1KK6FTvhV9%2F8ilkRLr7ZsZH%2Fv2JPp9xbp1VwpICiJuTN%2BdoD4g4uvnkpAZ%2B6z6aPfvAjggWggw8hN72KJT7OA9N7LnzwOQMJ7dY40cRlc08BWIYqiNgNuDB4le4WAkcokCVKRF3awvoy02R%2FNZ7FZFD3K1wkRhzvvDnqf%2FfDRdwXYycRqIdyllz1sjRs5IEGnPWrRZgXsyoeweB7gUsBKQoyb%2FrqpFQ3CY1or6F5dnaEUfMS0VdfH8EIxFun7%2Fmh3LVzO0t6CxHg67yXdubLDeMs8Ht7J0sscqBQyQvmc5QAPQXrfdZ7fXSHRndoM0ubMtVWxlzDZ555cLcQAKVHNHrROyX5ynIr%2BzT%2FAYOII%2FR2WlQxyNXRszxnO%2FSXe4shGzT5JN5Y29zCxdzQxN4%2B8dJMw6JnbiP4pVQXPBrtQ9mbkXmKpaqGFWdrtl8k0w0FJS9W9DTKw1fckmjMzc1%2B%2BmN0cLhQMgMIl1kri7hSfoAwgUynWK4N32VdA6G6EE02S4FfRQj8aryS%2Fgdmdq1iRsq1fd1gYnouhOwx%2Fjfh7nIH1NUTyL3Z7l%2BXjCg29a9BjqkAX0klWzcoED%2Bc9qEPBXLGeUYvd5jme4PZVdUkkz4ti4awzN8ezTm2VDmsRLgeUS747%2By9OCnrPmLIk89CfTNpCRR2OC%2FuqP4qzTsBEIDlME8VmaVWtpTYA3xaPtK6%2FuIT1duCLQB9j%2Fq1RX83n75vDCJ1IwpJjf25blhpU2uf3g3zqwCoGoesCqEiD%2BF6zFNKckSwyY4pz7Ful%2Fou5erBj54ry69&X-Amz-Signature=63e904f036caf3989cb9bb0d3a70562f38b5b0332473894e6ca8beb0eacda66e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
