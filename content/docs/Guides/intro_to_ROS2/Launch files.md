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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN5DWO64%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDBax%2F%2B3PoqAtT8tKoKDkGnYPRgBoN%2BsQKO77LePk4xJAIgL019SZziZdoDOLM%2BynAHr9b5voNUa0yGMU4tWh40gRwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyS48N4waujG6N9LCrcA%2Fo4TNH1XWWPPK0ReoudtTbcBZ7x5OE6Zi0XTXWzospQsihsbyxbYb4pwxiadnG1Gq6DaEga4n9WH%2FOwCLYx5LXR%2B2XhlL2EZqNApiz4piMPBzrzQvdmdAQ2mlvZs%2BieLeCZzlkTrErDWbv1lyHWQwhHC7mrjU4jksPLFyDzNIiMlgMGk5ViDqKGRBl7GA2JQBokap5PHcGUoVxH7ScBxJ7Zldu37Pd4NVqZWqYoPbO4FDl4CbhELd3HHtkSruD3HRv7Uv5ION0Sq96yIgJWGQHlgS6MLBzZh6tMLeHe031aZkvfszPY4d1vlq0WolJ9G4PUgZ3qDaG3nCLUNQnp0obcIjEfuTqdUPhi8z8X13cKN1mM0CKPpWFiphAB2TuV4PQXKwLMiS%2BL8%2BByqoUk8VkCC1oe2FymFW9FzDIs9rK5Cpvc8fi3pPfFCZ7A8e2tpj1qcstOR0XcBcrFapueLc%2BfwcPb8xEXi6Qdqv%2BparXX9T70uwndGOMsBgpC3J7cxdIRbDzwiVc9f8oP79wnJnLxAQJqxulpGNbbZZq9lWCC50fCXSGrVJreWe1ZtxkmKwMcBkObmbQTKK8k3u6xGPgA%2FlLB3dinDp7%2BblBRZIe%2BsNO4JpuULKk1AUY5MKvLvb4GOqUBmChFdC6SwqgnEbytbjTlc3AckARPhRkgAtKQu5w1ACIWHhPfZVHXHSJhyCzgYzWYERRTvBOyfYZK10JY19gkHvv4Yt6nR9wc5tzf6kkIGH2Y4rO%2Fvhbp5wdh4ykczSfhNPS4X1uBrA3qKQDXGktg9mD4DeYxuM0YMSpsHtA8ssptPZi0bbv%2FV%2FScG06aNTn89r3gsgL15q69nzzXg15h1psQBaor&X-Amz-Signature=2284128e9778c764322259f71c254753ee3f5fd3ece5555289530bcd1a83dcbf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN5DWO64%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDBax%2F%2B3PoqAtT8tKoKDkGnYPRgBoN%2BsQKO77LePk4xJAIgL019SZziZdoDOLM%2BynAHr9b5voNUa0yGMU4tWh40gRwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyS48N4waujG6N9LCrcA%2Fo4TNH1XWWPPK0ReoudtTbcBZ7x5OE6Zi0XTXWzospQsihsbyxbYb4pwxiadnG1Gq6DaEga4n9WH%2FOwCLYx5LXR%2B2XhlL2EZqNApiz4piMPBzrzQvdmdAQ2mlvZs%2BieLeCZzlkTrErDWbv1lyHWQwhHC7mrjU4jksPLFyDzNIiMlgMGk5ViDqKGRBl7GA2JQBokap5PHcGUoVxH7ScBxJ7Zldu37Pd4NVqZWqYoPbO4FDl4CbhELd3HHtkSruD3HRv7Uv5ION0Sq96yIgJWGQHlgS6MLBzZh6tMLeHe031aZkvfszPY4d1vlq0WolJ9G4PUgZ3qDaG3nCLUNQnp0obcIjEfuTqdUPhi8z8X13cKN1mM0CKPpWFiphAB2TuV4PQXKwLMiS%2BL8%2BByqoUk8VkCC1oe2FymFW9FzDIs9rK5Cpvc8fi3pPfFCZ7A8e2tpj1qcstOR0XcBcrFapueLc%2BfwcPb8xEXi6Qdqv%2BparXX9T70uwndGOMsBgpC3J7cxdIRbDzwiVc9f8oP79wnJnLxAQJqxulpGNbbZZq9lWCC50fCXSGrVJreWe1ZtxkmKwMcBkObmbQTKK8k3u6xGPgA%2FlLB3dinDp7%2BblBRZIe%2BsNO4JpuULKk1AUY5MKvLvb4GOqUBmChFdC6SwqgnEbytbjTlc3AckARPhRkgAtKQu5w1ACIWHhPfZVHXHSJhyCzgYzWYERRTvBOyfYZK10JY19gkHvv4Yt6nR9wc5tzf6kkIGH2Y4rO%2Fvhbp5wdh4ykczSfhNPS4X1uBrA3qKQDXGktg9mD4DeYxuM0YMSpsHtA8ssptPZi0bbv%2FV%2FScG06aNTn89r3gsgL15q69nzzXg15h1psQBaor&X-Amz-Signature=104463b063a9d8753cceea65cb427e4b635cdfb333c143a49688e03699904269&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN5DWO64%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDBax%2F%2B3PoqAtT8tKoKDkGnYPRgBoN%2BsQKO77LePk4xJAIgL019SZziZdoDOLM%2BynAHr9b5voNUa0yGMU4tWh40gRwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCyS48N4waujG6N9LCrcA%2Fo4TNH1XWWPPK0ReoudtTbcBZ7x5OE6Zi0XTXWzospQsihsbyxbYb4pwxiadnG1Gq6DaEga4n9WH%2FOwCLYx5LXR%2B2XhlL2EZqNApiz4piMPBzrzQvdmdAQ2mlvZs%2BieLeCZzlkTrErDWbv1lyHWQwhHC7mrjU4jksPLFyDzNIiMlgMGk5ViDqKGRBl7GA2JQBokap5PHcGUoVxH7ScBxJ7Zldu37Pd4NVqZWqYoPbO4FDl4CbhELd3HHtkSruD3HRv7Uv5ION0Sq96yIgJWGQHlgS6MLBzZh6tMLeHe031aZkvfszPY4d1vlq0WolJ9G4PUgZ3qDaG3nCLUNQnp0obcIjEfuTqdUPhi8z8X13cKN1mM0CKPpWFiphAB2TuV4PQXKwLMiS%2BL8%2BByqoUk8VkCC1oe2FymFW9FzDIs9rK5Cpvc8fi3pPfFCZ7A8e2tpj1qcstOR0XcBcrFapueLc%2BfwcPb8xEXi6Qdqv%2BparXX9T70uwndGOMsBgpC3J7cxdIRbDzwiVc9f8oP79wnJnLxAQJqxulpGNbbZZq9lWCC50fCXSGrVJreWe1ZtxkmKwMcBkObmbQTKK8k3u6xGPgA%2FlLB3dinDp7%2BblBRZIe%2BsNO4JpuULKk1AUY5MKvLvb4GOqUBmChFdC6SwqgnEbytbjTlc3AckARPhRkgAtKQu5w1ACIWHhPfZVHXHSJhyCzgYzWYERRTvBOyfYZK10JY19gkHvv4Yt6nR9wc5tzf6kkIGH2Y4rO%2Fvhbp5wdh4ykczSfhNPS4X1uBrA3qKQDXGktg9mD4DeYxuM0YMSpsHtA8ssptPZi0bbv%2FV%2FScG06aNTn89r3gsgL15q69nzzXg15h1psQBaor&X-Amz-Signature=b3b0e22cbfe9c226f8bf63033b91399c5bfd97a688f7c2c5bd5688540798735f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
