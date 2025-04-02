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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5EGHEP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCT0dC%2BYzdnITgOrytrzwrO6X37fcG7I3YyF5tbTOkalgIgNpp9KJO9TnVv1m8mkTFMz1ayEdFSQ5OOXXkTkfsdC4AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLy5k1%2BErUcTXcnsNyrcA8VpwPs%2BgMInyxUwFhPXUZmJnPKxhJV22h6btqkFSe%2B1vi%2BDp9re3YxY02tgWdeIzsMDnJjmyhjdZO0XC%2BIhikdT5iPMdsYZIhkK1O%2FE2GLfMOA3fpo%2BPovO%2B8jqLHMcEbDLHAFVqx3QCGntKic95kAEddc1PiVo3El6j5iujPcz3CUcpeWo16Nhn6jzCVMVH2cI0V3%2FceOwLYoHKEhKzPUNVqDi0qjwpS1p7Y60B2ma%2FvhXst6U0aOJuv8joNiWd7%2FzZjyTKz%2BurLmqkcHLwyH9tTELKKgRaTn6LHa7P5a1jFJWgueFiQpGOfQE4BRK5MvTpzuX6QTB5vNqOtgCwS5nMv5NWGvUMSVZKaFzu8C1VqH2C%2FiCGaUrdHSQe07yUWo2xyZR3py37IzhZjyC23eaAwMvPxAxefRYA2NOV9tr0z49XkEsNbkLrZ%2BNpK7v9KeYBi%2FSQvhzt2q91580OubdhAo9qvERiUQ3DxorSFIsU5uIKpZivUA8hG5LwwV3hlQSvNNEdkj0KWV3VwmabJ6Ug1MOCqsfhrbsFLt2VCFJsS34JMoae66KRvXP8AkggShRzK8PuiD5Yh5rehK8xVl5tFkQ6RvvWr6JXv6Vpt4KVnDuNTA3rAI4BVu4MLODtL8GOqUBARJNRMwWTzOZlxX%2Br9acOnNd5bE%2B%2B9RRXLCGyY%2BQ%2BKQqpoYxJkuCaDMl6E7ROmDQnxLBSyXJjMuXF4KNXRhegrVH%2BcM%2FTo5Vk53amu8ugEO4FRhpVUbORcAEUcFZodw00D4ktGABopuhkXmqGjl4VfS6x%2BJzjesJH7i0EFQCz4Ei%2Fq0jYt7ndRHJ1dDIOMK4LjU9OInhbtYeKN7Y3iOL1uZpSSwh&X-Amz-Signature=dd6bd9601b2c1d8216f05ec39d1465302423054f10a9dc1361c22bdb2a5c5e52&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5EGHEP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCT0dC%2BYzdnITgOrytrzwrO6X37fcG7I3YyF5tbTOkalgIgNpp9KJO9TnVv1m8mkTFMz1ayEdFSQ5OOXXkTkfsdC4AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLy5k1%2BErUcTXcnsNyrcA8VpwPs%2BgMInyxUwFhPXUZmJnPKxhJV22h6btqkFSe%2B1vi%2BDp9re3YxY02tgWdeIzsMDnJjmyhjdZO0XC%2BIhikdT5iPMdsYZIhkK1O%2FE2GLfMOA3fpo%2BPovO%2B8jqLHMcEbDLHAFVqx3QCGntKic95kAEddc1PiVo3El6j5iujPcz3CUcpeWo16Nhn6jzCVMVH2cI0V3%2FceOwLYoHKEhKzPUNVqDi0qjwpS1p7Y60B2ma%2FvhXst6U0aOJuv8joNiWd7%2FzZjyTKz%2BurLmqkcHLwyH9tTELKKgRaTn6LHa7P5a1jFJWgueFiQpGOfQE4BRK5MvTpzuX6QTB5vNqOtgCwS5nMv5NWGvUMSVZKaFzu8C1VqH2C%2FiCGaUrdHSQe07yUWo2xyZR3py37IzhZjyC23eaAwMvPxAxefRYA2NOV9tr0z49XkEsNbkLrZ%2BNpK7v9KeYBi%2FSQvhzt2q91580OubdhAo9qvERiUQ3DxorSFIsU5uIKpZivUA8hG5LwwV3hlQSvNNEdkj0KWV3VwmabJ6Ug1MOCqsfhrbsFLt2VCFJsS34JMoae66KRvXP8AkggShRzK8PuiD5Yh5rehK8xVl5tFkQ6RvvWr6JXv6Vpt4KVnDuNTA3rAI4BVu4MLODtL8GOqUBARJNRMwWTzOZlxX%2Br9acOnNd5bE%2B%2B9RRXLCGyY%2BQ%2BKQqpoYxJkuCaDMl6E7ROmDQnxLBSyXJjMuXF4KNXRhegrVH%2BcM%2FTo5Vk53amu8ugEO4FRhpVUbORcAEUcFZodw00D4ktGABopuhkXmqGjl4VfS6x%2BJzjesJH7i0EFQCz4Ei%2Fq0jYt7ndRHJ1dDIOMK4LjU9OInhbtYeKN7Y3iOL1uZpSSwh&X-Amz-Signature=d46f1bc0aae02f15706f63adcd8954147ba1a4d80f5e246b5f85e3982da319a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH5EGHEP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCT0dC%2BYzdnITgOrytrzwrO6X37fcG7I3YyF5tbTOkalgIgNpp9KJO9TnVv1m8mkTFMz1ayEdFSQ5OOXXkTkfsdC4AqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLy5k1%2BErUcTXcnsNyrcA8VpwPs%2BgMInyxUwFhPXUZmJnPKxhJV22h6btqkFSe%2B1vi%2BDp9re3YxY02tgWdeIzsMDnJjmyhjdZO0XC%2BIhikdT5iPMdsYZIhkK1O%2FE2GLfMOA3fpo%2BPovO%2B8jqLHMcEbDLHAFVqx3QCGntKic95kAEddc1PiVo3El6j5iujPcz3CUcpeWo16Nhn6jzCVMVH2cI0V3%2FceOwLYoHKEhKzPUNVqDi0qjwpS1p7Y60B2ma%2FvhXst6U0aOJuv8joNiWd7%2FzZjyTKz%2BurLmqkcHLwyH9tTELKKgRaTn6LHa7P5a1jFJWgueFiQpGOfQE4BRK5MvTpzuX6QTB5vNqOtgCwS5nMv5NWGvUMSVZKaFzu8C1VqH2C%2FiCGaUrdHSQe07yUWo2xyZR3py37IzhZjyC23eaAwMvPxAxefRYA2NOV9tr0z49XkEsNbkLrZ%2BNpK7v9KeYBi%2FSQvhzt2q91580OubdhAo9qvERiUQ3DxorSFIsU5uIKpZivUA8hG5LwwV3hlQSvNNEdkj0KWV3VwmabJ6Ug1MOCqsfhrbsFLt2VCFJsS34JMoae66KRvXP8AkggShRzK8PuiD5Yh5rehK8xVl5tFkQ6RvvWr6JXv6Vpt4KVnDuNTA3rAI4BVu4MLODtL8GOqUBARJNRMwWTzOZlxX%2Br9acOnNd5bE%2B%2B9RRXLCGyY%2BQ%2BKQqpoYxJkuCaDMl6E7ROmDQnxLBSyXJjMuXF4KNXRhegrVH%2BcM%2FTo5Vk53amu8ugEO4FRhpVUbORcAEUcFZodw00D4ktGABopuhkXmqGjl4VfS6x%2BJzjesJH7i0EFQCz4Ei%2Fq0jYt7ndRHJ1dDIOMK4LjU9OInhbtYeKN7Y3iOL1uZpSSwh&X-Amz-Signature=21be959b4dc040e0c65f41e899327c0b7bd492fb1faaa1d2a5a65cd3524be350&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
