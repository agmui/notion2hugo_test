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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466632DUE7Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDAUGfpQm2kcAa6FP0Od0mfcptAbSF8IobOqpQ6nupm6AIgY7DkinEhOg2LUWa%2Bg9moBJ%2FjTGTGKaXI49o3Lk5Wd10qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHSni%2BdDOArOjK2AircAwA%2FyrD%2FMdpCGKSQARhOFYLludyFn6JeiiomCq7GjuS9H%2FpkAG2aJCaG1rj5zcz00lFqVlgZ4bYL2Zf81aaVKs%2BRIS6oBJ6YUfX42rrhIhg8vN4pWpPj%2FHtAjLCd1TanRlp8LqqukfUWjXZW2KSjvfPzFuoySLm5Tl0gzC1S5mexRRIH5cHepHdHkxcKHeBDLxkMt9sYf9T%2BfIgTafJGDhUzytXeB4pJNAN3chcw5iZ4SBLvKc3OjRPH4DiJ4AQN0aIzliQTDAxTUKE8Hn99oUn%2Fsn0sLdHb4QE55YFpeuCXwosUJRi4MwalwbZFzXBfHj95ZgUcHy%2BzHxC3uI2Ydpiq9sHhEf5PQ%2BPfxqyeKeY7%2FEJRvycy3HCx8wswg904%2Bb9ZcsnwlS4lcUV6lPqUpxez7qFH0q7E8EMpNyIzBUaO9LfWUDZ3%2FzQqIXAdlfZfYGoPGe5xgKy4sb06XlfcjiCTH6zV7HFEejRwXKrjq4%2FKZr6oGGkI2uwzzteTINtACr10ZDosdvv6n9PHJ4HqydCSAo7wZemkWu34oTcmhjbRena5%2B8Y%2FVIml%2BpjOfBWB81sIcifXB%2Blwn0p%2BSSYh%2FFwC1c53MNBMiMUuX%2Faf3m61VVKLB9UHK2IzlI2wMIyc9r4GOqUBEZZ09n3FoVwd4L7ri3ryqWhKoVPVKsNe0wNjvxgpJxsDkUMlXCNP4Qh3Q9oRAwjwg2SCOUF3EtiI8xkwLojPqVEPPJQiLdtP%2BID1ORMi1MS6wOs3PE0mHUywAKe%2BV9ygq1UtEa6DEh7VppNdVm7yO6WQT%2FC5lExIG4jsixaOIadE9VynRT1RPsgAyDlOZzF6lPUn3NZzoRvK0U2ZGxvfCIujefQK&X-Amz-Signature=42f7901ba86413aad1c8cde409d609f4371c8c66db350a7ac9cc22a624fd1d35&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466632DUE7Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDAUGfpQm2kcAa6FP0Od0mfcptAbSF8IobOqpQ6nupm6AIgY7DkinEhOg2LUWa%2Bg9moBJ%2FjTGTGKaXI49o3Lk5Wd10qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHSni%2BdDOArOjK2AircAwA%2FyrD%2FMdpCGKSQARhOFYLludyFn6JeiiomCq7GjuS9H%2FpkAG2aJCaG1rj5zcz00lFqVlgZ4bYL2Zf81aaVKs%2BRIS6oBJ6YUfX42rrhIhg8vN4pWpPj%2FHtAjLCd1TanRlp8LqqukfUWjXZW2KSjvfPzFuoySLm5Tl0gzC1S5mexRRIH5cHepHdHkxcKHeBDLxkMt9sYf9T%2BfIgTafJGDhUzytXeB4pJNAN3chcw5iZ4SBLvKc3OjRPH4DiJ4AQN0aIzliQTDAxTUKE8Hn99oUn%2Fsn0sLdHb4QE55YFpeuCXwosUJRi4MwalwbZFzXBfHj95ZgUcHy%2BzHxC3uI2Ydpiq9sHhEf5PQ%2BPfxqyeKeY7%2FEJRvycy3HCx8wswg904%2Bb9ZcsnwlS4lcUV6lPqUpxez7qFH0q7E8EMpNyIzBUaO9LfWUDZ3%2FzQqIXAdlfZfYGoPGe5xgKy4sb06XlfcjiCTH6zV7HFEejRwXKrjq4%2FKZr6oGGkI2uwzzteTINtACr10ZDosdvv6n9PHJ4HqydCSAo7wZemkWu34oTcmhjbRena5%2B8Y%2FVIml%2BpjOfBWB81sIcifXB%2Blwn0p%2BSSYh%2FFwC1c53MNBMiMUuX%2Faf3m61VVKLB9UHK2IzlI2wMIyc9r4GOqUBEZZ09n3FoVwd4L7ri3ryqWhKoVPVKsNe0wNjvxgpJxsDkUMlXCNP4Qh3Q9oRAwjwg2SCOUF3EtiI8xkwLojPqVEPPJQiLdtP%2BID1ORMi1MS6wOs3PE0mHUywAKe%2BV9ygq1UtEa6DEh7VppNdVm7yO6WQT%2FC5lExIG4jsixaOIadE9VynRT1RPsgAyDlOZzF6lPUn3NZzoRvK0U2ZGxvfCIujefQK&X-Amz-Signature=bda91ca9ba78c34f71d7cbc4447192cd120de5e624e917fbe4a5a1d0e26bfad6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466632DUE7Q%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDAUGfpQm2kcAa6FP0Od0mfcptAbSF8IobOqpQ6nupm6AIgY7DkinEhOg2LUWa%2Bg9moBJ%2FjTGTGKaXI49o3Lk5Wd10qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHSni%2BdDOArOjK2AircAwA%2FyrD%2FMdpCGKSQARhOFYLludyFn6JeiiomCq7GjuS9H%2FpkAG2aJCaG1rj5zcz00lFqVlgZ4bYL2Zf81aaVKs%2BRIS6oBJ6YUfX42rrhIhg8vN4pWpPj%2FHtAjLCd1TanRlp8LqqukfUWjXZW2KSjvfPzFuoySLm5Tl0gzC1S5mexRRIH5cHepHdHkxcKHeBDLxkMt9sYf9T%2BfIgTafJGDhUzytXeB4pJNAN3chcw5iZ4SBLvKc3OjRPH4DiJ4AQN0aIzliQTDAxTUKE8Hn99oUn%2Fsn0sLdHb4QE55YFpeuCXwosUJRi4MwalwbZFzXBfHj95ZgUcHy%2BzHxC3uI2Ydpiq9sHhEf5PQ%2BPfxqyeKeY7%2FEJRvycy3HCx8wswg904%2Bb9ZcsnwlS4lcUV6lPqUpxez7qFH0q7E8EMpNyIzBUaO9LfWUDZ3%2FzQqIXAdlfZfYGoPGe5xgKy4sb06XlfcjiCTH6zV7HFEejRwXKrjq4%2FKZr6oGGkI2uwzzteTINtACr10ZDosdvv6n9PHJ4HqydCSAo7wZemkWu34oTcmhjbRena5%2B8Y%2FVIml%2BpjOfBWB81sIcifXB%2Blwn0p%2BSSYh%2FFwC1c53MNBMiMUuX%2Faf3m61VVKLB9UHK2IzlI2wMIyc9r4GOqUBEZZ09n3FoVwd4L7ri3ryqWhKoVPVKsNe0wNjvxgpJxsDkUMlXCNP4Qh3Q9oRAwjwg2SCOUF3EtiI8xkwLojPqVEPPJQiLdtP%2BID1ORMi1MS6wOs3PE0mHUywAKe%2BV9ygq1UtEa6DEh7VppNdVm7yO6WQT%2FC5lExIG4jsixaOIadE9VynRT1RPsgAyDlOZzF6lPUn3NZzoRvK0U2ZGxvfCIujefQK&X-Amz-Signature=f04f7b048f7c01ee3843b625fbe0ce407df20179014634bf50ba5442c3860038&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
