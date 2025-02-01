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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LHRUA5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoNF1PHS2An7XT34obvkELB0azcfxAegM%2FxI0oVL6eBAiBYHSrX4it2RcZLemNtjilxjy4bxdFx8T5zzhiYvW5OpCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrs79kK7TQdNltmdHKtwDgb5yy%2BOclJG0lrK1SSN8FGlK7T9uUJtIGqU76WaQG8N%2FQNNlApLo%2BQag4FVGhI3EcXA2c7PUtvPvqFCPHvwKzUbiUBhsk4n93DId44PXIwG9JQ9p94JXv8HEyR0YJsRH1dOVKC3xF9mJLFIlQjkL9OineuFc7OQhIQnA2jRiZX0LnWoO7pMI5l7A5H4ZOVmCPtmmY4X8b6mXpACcmVVVMB1NIPqB1EzLRVyLgGqrH%2B87yvBSoc6vHXD8eFwuunieJxzfHmW9PbWG86%2FFaaMj0Sc6ZCcAlxWVyitWDOBwPDkxmWPncKu3mzO3nkF60wf7%2FrUI1Pwm7vh7lpHt6JVuLUUcu1sh4woM7COWbYz1MfhiOMJH9LR7xGa4nQ7mq8DGXIooHzLhi30RwDA1DA%2FEGjPV9gGjdxVCyFoeZdZ%2BipevNtin7gyN0yZPEKEtUjUV1VzVGpvFhilFFgMWNvEBJ%2BJ6iLidIiv10wi90TuBf8MtGx0cbQQ5aKWTj63jmqd4olExgIF030swva9uxBe3COAscikzNN%2BH9KGIhE0yFehDVt1lZwfSA2XpBdyinQbthYH4HDpZ0rRbMdHRO1Lsn%2B3H1geNbadGHGTTJkk8Xw5p3UzU%2FTnOLKu04cswhZb6vAY6pgG4iBNJcbmnuQ1EfUcTXKWsjMKHC%2F0k%2F1UyYBTF9EiBf%2BLCn9L8c7yudKBfmxQQVZq%2FkmXZjHQCREALbPc5oDdWVmUmfc6MX6IDdamNeNm1K76T0xqdT4z%2BgNsTro10ArrRJCYP5N%2B5yWyR%2FSZWutsU%2BDuPwLVI0%2FlPK0p9e7H9tsN5HHOKufbzmKLkvnHSRnCjNsu249mlWaQhr%2FEHV0HxCdlvlSWb&X-Amz-Signature=c1153532551ff6b9c22915114de308496a1992093005398045fdf1527bf57793&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LHRUA5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoNF1PHS2An7XT34obvkELB0azcfxAegM%2FxI0oVL6eBAiBYHSrX4it2RcZLemNtjilxjy4bxdFx8T5zzhiYvW5OpCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrs79kK7TQdNltmdHKtwDgb5yy%2BOclJG0lrK1SSN8FGlK7T9uUJtIGqU76WaQG8N%2FQNNlApLo%2BQag4FVGhI3EcXA2c7PUtvPvqFCPHvwKzUbiUBhsk4n93DId44PXIwG9JQ9p94JXv8HEyR0YJsRH1dOVKC3xF9mJLFIlQjkL9OineuFc7OQhIQnA2jRiZX0LnWoO7pMI5l7A5H4ZOVmCPtmmY4X8b6mXpACcmVVVMB1NIPqB1EzLRVyLgGqrH%2B87yvBSoc6vHXD8eFwuunieJxzfHmW9PbWG86%2FFaaMj0Sc6ZCcAlxWVyitWDOBwPDkxmWPncKu3mzO3nkF60wf7%2FrUI1Pwm7vh7lpHt6JVuLUUcu1sh4woM7COWbYz1MfhiOMJH9LR7xGa4nQ7mq8DGXIooHzLhi30RwDA1DA%2FEGjPV9gGjdxVCyFoeZdZ%2BipevNtin7gyN0yZPEKEtUjUV1VzVGpvFhilFFgMWNvEBJ%2BJ6iLidIiv10wi90TuBf8MtGx0cbQQ5aKWTj63jmqd4olExgIF030swva9uxBe3COAscikzNN%2BH9KGIhE0yFehDVt1lZwfSA2XpBdyinQbthYH4HDpZ0rRbMdHRO1Lsn%2B3H1geNbadGHGTTJkk8Xw5p3UzU%2FTnOLKu04cswhZb6vAY6pgG4iBNJcbmnuQ1EfUcTXKWsjMKHC%2F0k%2F1UyYBTF9EiBf%2BLCn9L8c7yudKBfmxQQVZq%2FkmXZjHQCREALbPc5oDdWVmUmfc6MX6IDdamNeNm1K76T0xqdT4z%2BgNsTro10ArrRJCYP5N%2B5yWyR%2FSZWutsU%2BDuPwLVI0%2FlPK0p9e7H9tsN5HHOKufbzmKLkvnHSRnCjNsu249mlWaQhr%2FEHV0HxCdlvlSWb&X-Amz-Signature=62d246b183cafb2453eceea4a4cb909b3ee7c14b486c6f71eef62e5931ac69cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3LHRUA5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoNF1PHS2An7XT34obvkELB0azcfxAegM%2FxI0oVL6eBAiBYHSrX4it2RcZLemNtjilxjy4bxdFx8T5zzhiYvW5OpCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrs79kK7TQdNltmdHKtwDgb5yy%2BOclJG0lrK1SSN8FGlK7T9uUJtIGqU76WaQG8N%2FQNNlApLo%2BQag4FVGhI3EcXA2c7PUtvPvqFCPHvwKzUbiUBhsk4n93DId44PXIwG9JQ9p94JXv8HEyR0YJsRH1dOVKC3xF9mJLFIlQjkL9OineuFc7OQhIQnA2jRiZX0LnWoO7pMI5l7A5H4ZOVmCPtmmY4X8b6mXpACcmVVVMB1NIPqB1EzLRVyLgGqrH%2B87yvBSoc6vHXD8eFwuunieJxzfHmW9PbWG86%2FFaaMj0Sc6ZCcAlxWVyitWDOBwPDkxmWPncKu3mzO3nkF60wf7%2FrUI1Pwm7vh7lpHt6JVuLUUcu1sh4woM7COWbYz1MfhiOMJH9LR7xGa4nQ7mq8DGXIooHzLhi30RwDA1DA%2FEGjPV9gGjdxVCyFoeZdZ%2BipevNtin7gyN0yZPEKEtUjUV1VzVGpvFhilFFgMWNvEBJ%2BJ6iLidIiv10wi90TuBf8MtGx0cbQQ5aKWTj63jmqd4olExgIF030swva9uxBe3COAscikzNN%2BH9KGIhE0yFehDVt1lZwfSA2XpBdyinQbthYH4HDpZ0rRbMdHRO1Lsn%2B3H1geNbadGHGTTJkk8Xw5p3UzU%2FTnOLKu04cswhZb6vAY6pgG4iBNJcbmnuQ1EfUcTXKWsjMKHC%2F0k%2F1UyYBTF9EiBf%2BLCn9L8c7yudKBfmxQQVZq%2FkmXZjHQCREALbPc5oDdWVmUmfc6MX6IDdamNeNm1K76T0xqdT4z%2BgNsTro10ArrRJCYP5N%2B5yWyR%2FSZWutsU%2BDuPwLVI0%2FlPK0p9e7H9tsN5HHOKufbzmKLkvnHSRnCjNsu249mlWaQhr%2FEHV0HxCdlvlSWb&X-Amz-Signature=5eca8f7c3e20383985b0f728b5323ae2a7507c3cd3a5d6321c34225b036bc815&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
