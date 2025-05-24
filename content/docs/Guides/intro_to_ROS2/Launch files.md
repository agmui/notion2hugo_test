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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGEJSUKP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHDk9lzZshRteG220ACPhj8%2FaYpiS1Zq%2FrlTFBipF02DAiA%2BD8KEfsK%2BalmLNwW6GiJ7uRQ2NFy%2BiX721O%2FOfZWLqyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeNwJuUllVTV0ilEQKtwDxsqWh1D%2B%2Bx5NvNNvfL3BbhYg9NpPdAK0yw55xQUyQUXSf0yyu0GR6MNPmrYaRy95D1sumzLm%2Bdx1IYl88hOdp10I7vm1P%2FVPEopCjmIN1HBB8WSe05pxkVUvfH%2FZ%2BUIJVK%2Fdh4VDqZhyjbMP1SDnYsIrVJR8YklidQgtx8CCb9UnAl%2BfTC4LhOSAs3FXmVKPNT21HrKyFO4uo9ZnKf2FIuWoOf%2Busy5IIbdr2XBNPSFLZ%2FyfW4Idk%2F%2FUtD13Ys7ObuxIE4jylujLD22owfeuiWAncobj8QRZuKyiWz%2BmrLvPYnENmxf2OZegN5Na8QvKyfFTe%2FYPkxDJinLuFZgYmR3uLyiMkvcBJIswwZQwbz2f67Up3DILonfQADJjOMefSx9r%2B3uzLxCjSqbu%2FhlFYbB9maaRZwTDfvAQg7IizM95DI%2FVvubFKDVwEbUjcCWid8%2BFiLL7Idoq%2BE2xIekvc6%2FKlkY34kNxE7A4iIvaNdUXaf2okgf%2BDEdyBQBtVYKlMGrCp%2F9Fe9Ngss02BIueG8WM9QgA3AFGsgmP4k%2F5hDNVUfr5d4aRhxJ8x%2F5A1HYPAyLhhpbH%2BiRRBqtJSLKSlcwDpKlNuQM9IDH66qYtJ%2B1Byb6o9zp%2BZd2fNvIw2Z3FwQY6pgEk%2FTignAlGroAPDu3vHyE2l3buS44NLDFnJs48VwHzSUo80KCDldS5QRhTnVBScPPMY9tDCfy7CoZUR1EYOZfWkWZUI%2Fn29EhDmhksjiRSqG5m7BN9H%2FmS8yT1Sodl4q8LKo%2BCg7q%2Bnkwaw3urNduOOmy1QFduV9X6r2ow6G2GZ2%2BMV9cxhvyxucqWCMVtlNFsA2nlj%2BT%2FMSjldpPXembLlQMeGQHH&X-Amz-Signature=7c66b50bb9a48471c665bbd23223cbf77d552b856cb0c4ca3df6f2cff93dbd8d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGEJSUKP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHDk9lzZshRteG220ACPhj8%2FaYpiS1Zq%2FrlTFBipF02DAiA%2BD8KEfsK%2BalmLNwW6GiJ7uRQ2NFy%2BiX721O%2FOfZWLqyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeNwJuUllVTV0ilEQKtwDxsqWh1D%2B%2Bx5NvNNvfL3BbhYg9NpPdAK0yw55xQUyQUXSf0yyu0GR6MNPmrYaRy95D1sumzLm%2Bdx1IYl88hOdp10I7vm1P%2FVPEopCjmIN1HBB8WSe05pxkVUvfH%2FZ%2BUIJVK%2Fdh4VDqZhyjbMP1SDnYsIrVJR8YklidQgtx8CCb9UnAl%2BfTC4LhOSAs3FXmVKPNT21HrKyFO4uo9ZnKf2FIuWoOf%2Busy5IIbdr2XBNPSFLZ%2FyfW4Idk%2F%2FUtD13Ys7ObuxIE4jylujLD22owfeuiWAncobj8QRZuKyiWz%2BmrLvPYnENmxf2OZegN5Na8QvKyfFTe%2FYPkxDJinLuFZgYmR3uLyiMkvcBJIswwZQwbz2f67Up3DILonfQADJjOMefSx9r%2B3uzLxCjSqbu%2FhlFYbB9maaRZwTDfvAQg7IizM95DI%2FVvubFKDVwEbUjcCWid8%2BFiLL7Idoq%2BE2xIekvc6%2FKlkY34kNxE7A4iIvaNdUXaf2okgf%2BDEdyBQBtVYKlMGrCp%2F9Fe9Ngss02BIueG8WM9QgA3AFGsgmP4k%2F5hDNVUfr5d4aRhxJ8x%2F5A1HYPAyLhhpbH%2BiRRBqtJSLKSlcwDpKlNuQM9IDH66qYtJ%2B1Byb6o9zp%2BZd2fNvIw2Z3FwQY6pgEk%2FTignAlGroAPDu3vHyE2l3buS44NLDFnJs48VwHzSUo80KCDldS5QRhTnVBScPPMY9tDCfy7CoZUR1EYOZfWkWZUI%2Fn29EhDmhksjiRSqG5m7BN9H%2FmS8yT1Sodl4q8LKo%2BCg7q%2Bnkwaw3urNduOOmy1QFduV9X6r2ow6G2GZ2%2BMV9cxhvyxucqWCMVtlNFsA2nlj%2BT%2FMSjldpPXembLlQMeGQHH&X-Amz-Signature=146e595e744f10165b4679bc290cbf485cc0994ad267560aee22a26469da41ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGEJSUKP%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T050837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIHDk9lzZshRteG220ACPhj8%2FaYpiS1Zq%2FrlTFBipF02DAiA%2BD8KEfsK%2BalmLNwW6GiJ7uRQ2NFy%2BiX721O%2FOfZWLqyqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeNwJuUllVTV0ilEQKtwDxsqWh1D%2B%2Bx5NvNNvfL3BbhYg9NpPdAK0yw55xQUyQUXSf0yyu0GR6MNPmrYaRy95D1sumzLm%2Bdx1IYl88hOdp10I7vm1P%2FVPEopCjmIN1HBB8WSe05pxkVUvfH%2FZ%2BUIJVK%2Fdh4VDqZhyjbMP1SDnYsIrVJR8YklidQgtx8CCb9UnAl%2BfTC4LhOSAs3FXmVKPNT21HrKyFO4uo9ZnKf2FIuWoOf%2Busy5IIbdr2XBNPSFLZ%2FyfW4Idk%2F%2FUtD13Ys7ObuxIE4jylujLD22owfeuiWAncobj8QRZuKyiWz%2BmrLvPYnENmxf2OZegN5Na8QvKyfFTe%2FYPkxDJinLuFZgYmR3uLyiMkvcBJIswwZQwbz2f67Up3DILonfQADJjOMefSx9r%2B3uzLxCjSqbu%2FhlFYbB9maaRZwTDfvAQg7IizM95DI%2FVvubFKDVwEbUjcCWid8%2BFiLL7Idoq%2BE2xIekvc6%2FKlkY34kNxE7A4iIvaNdUXaf2okgf%2BDEdyBQBtVYKlMGrCp%2F9Fe9Ngss02BIueG8WM9QgA3AFGsgmP4k%2F5hDNVUfr5d4aRhxJ8x%2F5A1HYPAyLhhpbH%2BiRRBqtJSLKSlcwDpKlNuQM9IDH66qYtJ%2B1Byb6o9zp%2BZd2fNvIw2Z3FwQY6pgEk%2FTignAlGroAPDu3vHyE2l3buS44NLDFnJs48VwHzSUo80KCDldS5QRhTnVBScPPMY9tDCfy7CoZUR1EYOZfWkWZUI%2Fn29EhDmhksjiRSqG5m7BN9H%2FmS8yT1Sodl4q8LKo%2BCg7q%2Bnkwaw3urNduOOmy1QFduV9X6r2ow6G2GZ2%2BMV9cxhvyxucqWCMVtlNFsA2nlj%2BT%2FMSjldpPXembLlQMeGQHH&X-Amz-Signature=2ac4cd939919dc7849c189591b9bbf1172ac1836d55cd833c128edc61aaf9d00&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
