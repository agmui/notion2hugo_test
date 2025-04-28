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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILPWVTG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbAoOWDBLJer6fE3NH6SWNwqpmwCWV56103Hoyg7NPegIhAKPlyGnSdNq6yVDG5XXaHWlhc0TPMN%2F6AdZVqgFROrdYKv8DCGoQABoMNjM3NDIzMTgzODA1IgyThaQ%2BWPID7eKQDuAq3APgbiJ1tBq9S2ilv%2BlNWBe8uPdnTlE%2FfAI0Mjm3UjUpxrd%2F4wagUAMvNIfyXofOmBdzC18mW4sCONNHRxyFEkIaObMk39pZ76gulq8idV1MBNbI0gd2YhkJwyHsfr6OHAnhh8UGz4VMGSYw5hGSMcjmkG8FiJQ4zcs%2FXv1dTHkx9q8YI9wYO4WYDjPkB0VbbwPsh6b%2FfHQ7kWLAVdxwsxXtPtz5MLfYXtJ9vJ7%2FY9ey9ECl1LQjv70Lb3ahTqku0vD%2B3euuuJatro4syYwiKxX2J9hE7%2FynJFUEhnQ1dirzlXfDelnAupyC85OF6%2BlDFifQ8oWWD9FRBHaYZtjUXOc9Gx7l%2B8lG1MzEzyyML5jnhOK4gwmdCCN66pwW0nHUcIpW%2FhVGN1dIEkwwjLT0VQxvur6sEnXETJVNt%2FszM0D2d%2BtvP%2BiiHPOUyTEBYjaZ5wmQ9xZwL%2BMpjrC6wkjMZsNSJsiFo9%2By523LGXyGYGyAggpbKIFy958%2FG8Lkq0yL8nVfgMJ%2Fo162MiJxfaqazy8q8Jj84TcwuEFat2Qasqz18j2rfU1TSsKXEOkwXdXeV1p5SS7XPIloqJ3RSBEcar4pUE5qV4t81ydZPJsNYiCVPuiEa1iW8EhL19CCnDDporvABjqkAehCkHn0PmAVDgN3JvyiHrMrtwewjQJL81D9zlaPC2v%2BTP0P%2BIlyE935njHe%2BFTmm4DxOqyAIy18FPoO6X4afKHbuvIbQvCOUtcsbZFuEN12NDDYAJEFNxOla234%2BXXjpcFFNjdDRboxwALYZ7LlE9RH63pttjP3gD287%2FLe2MTKK2NBD5zQUOUuBP7YLWTu3eF%2F6f28rc5C%2BBeZLhgiSA3g7m2f&X-Amz-Signature=57c63d38a8762af91a8e2b1a9fdcb50fb1dfc24020839c918f78656bfe8da68f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILPWVTG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbAoOWDBLJer6fE3NH6SWNwqpmwCWV56103Hoyg7NPegIhAKPlyGnSdNq6yVDG5XXaHWlhc0TPMN%2F6AdZVqgFROrdYKv8DCGoQABoMNjM3NDIzMTgzODA1IgyThaQ%2BWPID7eKQDuAq3APgbiJ1tBq9S2ilv%2BlNWBe8uPdnTlE%2FfAI0Mjm3UjUpxrd%2F4wagUAMvNIfyXofOmBdzC18mW4sCONNHRxyFEkIaObMk39pZ76gulq8idV1MBNbI0gd2YhkJwyHsfr6OHAnhh8UGz4VMGSYw5hGSMcjmkG8FiJQ4zcs%2FXv1dTHkx9q8YI9wYO4WYDjPkB0VbbwPsh6b%2FfHQ7kWLAVdxwsxXtPtz5MLfYXtJ9vJ7%2FY9ey9ECl1LQjv70Lb3ahTqku0vD%2B3euuuJatro4syYwiKxX2J9hE7%2FynJFUEhnQ1dirzlXfDelnAupyC85OF6%2BlDFifQ8oWWD9FRBHaYZtjUXOc9Gx7l%2B8lG1MzEzyyML5jnhOK4gwmdCCN66pwW0nHUcIpW%2FhVGN1dIEkwwjLT0VQxvur6sEnXETJVNt%2FszM0D2d%2BtvP%2BiiHPOUyTEBYjaZ5wmQ9xZwL%2BMpjrC6wkjMZsNSJsiFo9%2By523LGXyGYGyAggpbKIFy958%2FG8Lkq0yL8nVfgMJ%2Fo162MiJxfaqazy8q8Jj84TcwuEFat2Qasqz18j2rfU1TSsKXEOkwXdXeV1p5SS7XPIloqJ3RSBEcar4pUE5qV4t81ydZPJsNYiCVPuiEa1iW8EhL19CCnDDporvABjqkAehCkHn0PmAVDgN3JvyiHrMrtwewjQJL81D9zlaPC2v%2BTP0P%2BIlyE935njHe%2BFTmm4DxOqyAIy18FPoO6X4afKHbuvIbQvCOUtcsbZFuEN12NDDYAJEFNxOla234%2BXXjpcFFNjdDRboxwALYZ7LlE9RH63pttjP3gD287%2FLe2MTKK2NBD5zQUOUuBP7YLWTu3eF%2F6f28rc5C%2BBeZLhgiSA3g7m2f&X-Amz-Signature=1e51724e05fe7257f7b6dfda237b69c8eb18ebec3a163cfdd6181824f2aa2039&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ILPWVTG%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbAoOWDBLJer6fE3NH6SWNwqpmwCWV56103Hoyg7NPegIhAKPlyGnSdNq6yVDG5XXaHWlhc0TPMN%2F6AdZVqgFROrdYKv8DCGoQABoMNjM3NDIzMTgzODA1IgyThaQ%2BWPID7eKQDuAq3APgbiJ1tBq9S2ilv%2BlNWBe8uPdnTlE%2FfAI0Mjm3UjUpxrd%2F4wagUAMvNIfyXofOmBdzC18mW4sCONNHRxyFEkIaObMk39pZ76gulq8idV1MBNbI0gd2YhkJwyHsfr6OHAnhh8UGz4VMGSYw5hGSMcjmkG8FiJQ4zcs%2FXv1dTHkx9q8YI9wYO4WYDjPkB0VbbwPsh6b%2FfHQ7kWLAVdxwsxXtPtz5MLfYXtJ9vJ7%2FY9ey9ECl1LQjv70Lb3ahTqku0vD%2B3euuuJatro4syYwiKxX2J9hE7%2FynJFUEhnQ1dirzlXfDelnAupyC85OF6%2BlDFifQ8oWWD9FRBHaYZtjUXOc9Gx7l%2B8lG1MzEzyyML5jnhOK4gwmdCCN66pwW0nHUcIpW%2FhVGN1dIEkwwjLT0VQxvur6sEnXETJVNt%2FszM0D2d%2BtvP%2BiiHPOUyTEBYjaZ5wmQ9xZwL%2BMpjrC6wkjMZsNSJsiFo9%2By523LGXyGYGyAggpbKIFy958%2FG8Lkq0yL8nVfgMJ%2Fo162MiJxfaqazy8q8Jj84TcwuEFat2Qasqz18j2rfU1TSsKXEOkwXdXeV1p5SS7XPIloqJ3RSBEcar4pUE5qV4t81ydZPJsNYiCVPuiEa1iW8EhL19CCnDDporvABjqkAehCkHn0PmAVDgN3JvyiHrMrtwewjQJL81D9zlaPC2v%2BTP0P%2BIlyE935njHe%2BFTmm4DxOqyAIy18FPoO6X4afKHbuvIbQvCOUtcsbZFuEN12NDDYAJEFNxOla234%2BXXjpcFFNjdDRboxwALYZ7LlE9RH63pttjP3gD287%2FLe2MTKK2NBD5zQUOUuBP7YLWTu3eF%2F6f28rc5C%2BBeZLhgiSA3g7m2f&X-Amz-Signature=9b005e5bca16586fc8e70341c102574ce69ea74207f9e679ac6ebf68ee7d0cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
