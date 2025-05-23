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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655EDAXJF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD9%2FqjCNPbQ0yDx%2F86%2F57uH9XuKzhRcYteqP80g84%2FtqgIhAPuQDRx2h8pc9RAI1mHx7e8wymBBhlPnkmzdfLc3r6LJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzgW5r3mC70C%2FJ8SYq3ANlEaiabgUom7u%2FcGmuFo1VivvWeKjv9RQHksjx8WWXfUYAsnQmnz3w5XMLpfwbgRcz9cui398bGVkR4eg5jPO61miiWPLgfMs8SToAqvyfQsQzermdYhyYp2stw5mtGVxjNCogCiPR14f7g6suHFyV3irLPTXrW6%2FUIWWbnnkRUUMcxHwovURRbePbFhiYarz0YwlwHTtUvMr0SY9vKRf4yYEWGRw61Dz6Szn6GzlsmmYX1NhqsMnEelAURoOTKdBVQthBlGscHTn7elTDi1pXp0Jl2Fc7saDwgd4ZYClCx%2BRLvtxkVWod1P%2ByLkTntcqGZd9AHTngNPZ9WA%2BbrAiiu2rQhQdvcTscxdpSB7EhrQO6j4Uk0F6w2%2FUeh8JDtYazJqPXSx0pzeH3f3jlbLQO6zjz114JGHZi6YhwntI%2B4sPYJBd5E%2FzLersuARMj8zJD7LxbLpLWyqEgZB2ot6PRyZLWBpS0RrESlvHBQW2B9A01XKVjhCdX484SqANJ0p1Jqcmb6nCPkGtMZQrmfLZPwH6gSlfGRpl4tmLkqo0EGwWeVB1R9ZGHos7rlf905V2iF5WrfxtAAqDt8oUucspl1hMR0GaUCeQKg3qVaSCdlHHvnyZ2zF5etIbhZzC1p8LBBjqkAaV8AB690vhnX%2Bx8n1Jz6P0ecxPZEQCaS96AlTqRwd8FuJey%2FWzavqd5jc05sEDdrwtaGYZ07PF4YQeh7DDDLEP0Cw565bk0shDnAcT6hzAB2QkkwYpG5C1AIzN0UzxkNfn0U6yBvKP3b8CuFU2j5SPkBrq3vBmJGFQDH2VTjFGhw1Xg2pupyfsmBpFgtbQkeOhlE77r7xt5k75363c9s8phIxTk&X-Amz-Signature=9f7d313d1319b733f8fa7a0395b9491c60eca990c192ee1e091a5a3087c8eb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655EDAXJF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD9%2FqjCNPbQ0yDx%2F86%2F57uH9XuKzhRcYteqP80g84%2FtqgIhAPuQDRx2h8pc9RAI1mHx7e8wymBBhlPnkmzdfLc3r6LJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzgW5r3mC70C%2FJ8SYq3ANlEaiabgUom7u%2FcGmuFo1VivvWeKjv9RQHksjx8WWXfUYAsnQmnz3w5XMLpfwbgRcz9cui398bGVkR4eg5jPO61miiWPLgfMs8SToAqvyfQsQzermdYhyYp2stw5mtGVxjNCogCiPR14f7g6suHFyV3irLPTXrW6%2FUIWWbnnkRUUMcxHwovURRbePbFhiYarz0YwlwHTtUvMr0SY9vKRf4yYEWGRw61Dz6Szn6GzlsmmYX1NhqsMnEelAURoOTKdBVQthBlGscHTn7elTDi1pXp0Jl2Fc7saDwgd4ZYClCx%2BRLvtxkVWod1P%2ByLkTntcqGZd9AHTngNPZ9WA%2BbrAiiu2rQhQdvcTscxdpSB7EhrQO6j4Uk0F6w2%2FUeh8JDtYazJqPXSx0pzeH3f3jlbLQO6zjz114JGHZi6YhwntI%2B4sPYJBd5E%2FzLersuARMj8zJD7LxbLpLWyqEgZB2ot6PRyZLWBpS0RrESlvHBQW2B9A01XKVjhCdX484SqANJ0p1Jqcmb6nCPkGtMZQrmfLZPwH6gSlfGRpl4tmLkqo0EGwWeVB1R9ZGHos7rlf905V2iF5WrfxtAAqDt8oUucspl1hMR0GaUCeQKg3qVaSCdlHHvnyZ2zF5etIbhZzC1p8LBBjqkAaV8AB690vhnX%2Bx8n1Jz6P0ecxPZEQCaS96AlTqRwd8FuJey%2FWzavqd5jc05sEDdrwtaGYZ07PF4YQeh7DDDLEP0Cw565bk0shDnAcT6hzAB2QkkwYpG5C1AIzN0UzxkNfn0U6yBvKP3b8CuFU2j5SPkBrq3vBmJGFQDH2VTjFGhw1Xg2pupyfsmBpFgtbQkeOhlE77r7xt5k75363c9s8phIxTk&X-Amz-Signature=6610e40f8038c28dc0eafd01baeace1c286f08844236725ed09858833b5a501d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655EDAXJF%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD9%2FqjCNPbQ0yDx%2F86%2F57uH9XuKzhRcYteqP80g84%2FtqgIhAPuQDRx2h8pc9RAI1mHx7e8wymBBhlPnkmzdfLc3r6LJKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzgW5r3mC70C%2FJ8SYq3ANlEaiabgUom7u%2FcGmuFo1VivvWeKjv9RQHksjx8WWXfUYAsnQmnz3w5XMLpfwbgRcz9cui398bGVkR4eg5jPO61miiWPLgfMs8SToAqvyfQsQzermdYhyYp2stw5mtGVxjNCogCiPR14f7g6suHFyV3irLPTXrW6%2FUIWWbnnkRUUMcxHwovURRbePbFhiYarz0YwlwHTtUvMr0SY9vKRf4yYEWGRw61Dz6Szn6GzlsmmYX1NhqsMnEelAURoOTKdBVQthBlGscHTn7elTDi1pXp0Jl2Fc7saDwgd4ZYClCx%2BRLvtxkVWod1P%2ByLkTntcqGZd9AHTngNPZ9WA%2BbrAiiu2rQhQdvcTscxdpSB7EhrQO6j4Uk0F6w2%2FUeh8JDtYazJqPXSx0pzeH3f3jlbLQO6zjz114JGHZi6YhwntI%2B4sPYJBd5E%2FzLersuARMj8zJD7LxbLpLWyqEgZB2ot6PRyZLWBpS0RrESlvHBQW2B9A01XKVjhCdX484SqANJ0p1Jqcmb6nCPkGtMZQrmfLZPwH6gSlfGRpl4tmLkqo0EGwWeVB1R9ZGHos7rlf905V2iF5WrfxtAAqDt8oUucspl1hMR0GaUCeQKg3qVaSCdlHHvnyZ2zF5etIbhZzC1p8LBBjqkAaV8AB690vhnX%2Bx8n1Jz6P0ecxPZEQCaS96AlTqRwd8FuJey%2FWzavqd5jc05sEDdrwtaGYZ07PF4YQeh7DDDLEP0Cw565bk0shDnAcT6hzAB2QkkwYpG5C1AIzN0UzxkNfn0U6yBvKP3b8CuFU2j5SPkBrq3vBmJGFQDH2VTjFGhw1Xg2pupyfsmBpFgtbQkeOhlE77r7xt5k75363c9s8phIxTk&X-Amz-Signature=719e9a02a4d1359288387e44baa747ed1fb357457eda9fa36bfd2f2cf7777df2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
