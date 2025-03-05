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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSWTC7A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa0uLWd%2FmeoXtPwsJ%2B6zhik3LwBdOcCjGxWJSCki0qEwIgJyqJAkHWXj1BDiyaxyaOCRTL%2BF7HvAOmJEg8EEtKPvEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHd7gLN1voL2vWXRircA5WyhCbQhY3T9bMIdcIeGbfNvx7BVT9UcGgN%2BUe3EGiU9AVxDWTVnxQhnJrHIeKHsayLDivte39YcYOkdzlAXrbUnyQ8raPl3CHf8q8O1tXfnjMNe7MlCLzR3E0BshozxQrEeELPEczguVT5oeWPgxPupMH3kvBDq5E1fKqXiI29IUTYE53Xkrlg%2BWaNdabg0zOU2TNyrrspn3%2BbSb38iSnqfWMREgE%2Fhdm2dn0NLVPbE9hp012neMnV%2F0vXI%2FXcTXIkZ%2B1l7EeUx1f2A9INujxDvOuCQrbpGNu6lm9WTtSESkkihqLh0a3UvTF3nL2z8lHj52oxZO%2BOedEUkKOSdLjFucW%2FmpMxmTPr54FRI4ubsbBiL3ZXGUfFd56FWqK5eEmYAYjwdETppkzZBIRtTIievVE4vDIQt%2BnPoOlWh6Dvu52Z6l0fKKHz06CSG3fi1kWhZYy0r43ZafAeY4mnbxN2%2F0D4j0BKlRxlUxW7wqi9XItg6Y87EuT%2Flimrzt600MD0UDChBoeY%2B%2FTtwT68uS%2BDcccHIUoCU4Z%2BgQJbI2vicbGmG2SWnSQxcdPniX%2FsgpSqjxejplp9xX%2FgK0%2FiCBnCX0hGiJFRyY48iuiJ%2Fn9FRi4maA30MDZavavVMNzEnr4GOqUBObKhEHSFRwFACqIHVRWr5k9pcjtk7MVFeZsFD5ZBPyxrJH5w6fKhCQnV7xdatKX5upcbfdAbodVt5tPehhcgBg8DESS4wX6xs86mOFztkSTnVniqhlLkgmPnKsmTEgRR6vPnNgcYXxG48vGgxDENkKTs%2BbDZXe9mQeMHuFsxpJ6yiYla4DkIoz22%2BBN0kEVSS9W1jmJ8SaCXuA1i7dxVWm2uf5mF&X-Amz-Signature=463f765b9edbf15cea1b81b29168fd610754617ce0c8e1a2a7556b0de0babf86&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSWTC7A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa0uLWd%2FmeoXtPwsJ%2B6zhik3LwBdOcCjGxWJSCki0qEwIgJyqJAkHWXj1BDiyaxyaOCRTL%2BF7HvAOmJEg8EEtKPvEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHd7gLN1voL2vWXRircA5WyhCbQhY3T9bMIdcIeGbfNvx7BVT9UcGgN%2BUe3EGiU9AVxDWTVnxQhnJrHIeKHsayLDivte39YcYOkdzlAXrbUnyQ8raPl3CHf8q8O1tXfnjMNe7MlCLzR3E0BshozxQrEeELPEczguVT5oeWPgxPupMH3kvBDq5E1fKqXiI29IUTYE53Xkrlg%2BWaNdabg0zOU2TNyrrspn3%2BbSb38iSnqfWMREgE%2Fhdm2dn0NLVPbE9hp012neMnV%2F0vXI%2FXcTXIkZ%2B1l7EeUx1f2A9INujxDvOuCQrbpGNu6lm9WTtSESkkihqLh0a3UvTF3nL2z8lHj52oxZO%2BOedEUkKOSdLjFucW%2FmpMxmTPr54FRI4ubsbBiL3ZXGUfFd56FWqK5eEmYAYjwdETppkzZBIRtTIievVE4vDIQt%2BnPoOlWh6Dvu52Z6l0fKKHz06CSG3fi1kWhZYy0r43ZafAeY4mnbxN2%2F0D4j0BKlRxlUxW7wqi9XItg6Y87EuT%2Flimrzt600MD0UDChBoeY%2B%2FTtwT68uS%2BDcccHIUoCU4Z%2BgQJbI2vicbGmG2SWnSQxcdPniX%2FsgpSqjxejplp9xX%2FgK0%2FiCBnCX0hGiJFRyY48iuiJ%2Fn9FRi4maA30MDZavavVMNzEnr4GOqUBObKhEHSFRwFACqIHVRWr5k9pcjtk7MVFeZsFD5ZBPyxrJH5w6fKhCQnV7xdatKX5upcbfdAbodVt5tPehhcgBg8DESS4wX6xs86mOFztkSTnVniqhlLkgmPnKsmTEgRR6vPnNgcYXxG48vGgxDENkKTs%2BbDZXe9mQeMHuFsxpJ6yiYla4DkIoz22%2BBN0kEVSS9W1jmJ8SaCXuA1i7dxVWm2uf5mF&X-Amz-Signature=fec5c227c24169d5d28b4579cb4223f0fc4d4e74c9353c07ebadc728b197c51a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRSWTC7A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa0uLWd%2FmeoXtPwsJ%2B6zhik3LwBdOcCjGxWJSCki0qEwIgJyqJAkHWXj1BDiyaxyaOCRTL%2BF7HvAOmJEg8EEtKPvEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPHd7gLN1voL2vWXRircA5WyhCbQhY3T9bMIdcIeGbfNvx7BVT9UcGgN%2BUe3EGiU9AVxDWTVnxQhnJrHIeKHsayLDivte39YcYOkdzlAXrbUnyQ8raPl3CHf8q8O1tXfnjMNe7MlCLzR3E0BshozxQrEeELPEczguVT5oeWPgxPupMH3kvBDq5E1fKqXiI29IUTYE53Xkrlg%2BWaNdabg0zOU2TNyrrspn3%2BbSb38iSnqfWMREgE%2Fhdm2dn0NLVPbE9hp012neMnV%2F0vXI%2FXcTXIkZ%2B1l7EeUx1f2A9INujxDvOuCQrbpGNu6lm9WTtSESkkihqLh0a3UvTF3nL2z8lHj52oxZO%2BOedEUkKOSdLjFucW%2FmpMxmTPr54FRI4ubsbBiL3ZXGUfFd56FWqK5eEmYAYjwdETppkzZBIRtTIievVE4vDIQt%2BnPoOlWh6Dvu52Z6l0fKKHz06CSG3fi1kWhZYy0r43ZafAeY4mnbxN2%2F0D4j0BKlRxlUxW7wqi9XItg6Y87EuT%2Flimrzt600MD0UDChBoeY%2B%2FTtwT68uS%2BDcccHIUoCU4Z%2BgQJbI2vicbGmG2SWnSQxcdPniX%2FsgpSqjxejplp9xX%2FgK0%2FiCBnCX0hGiJFRyY48iuiJ%2Fn9FRi4maA30MDZavavVMNzEnr4GOqUBObKhEHSFRwFACqIHVRWr5k9pcjtk7MVFeZsFD5ZBPyxrJH5w6fKhCQnV7xdatKX5upcbfdAbodVt5tPehhcgBg8DESS4wX6xs86mOFztkSTnVniqhlLkgmPnKsmTEgRR6vPnNgcYXxG48vGgxDENkKTs%2BbDZXe9mQeMHuFsxpJ6yiYla4DkIoz22%2BBN0kEVSS9W1jmJ8SaCXuA1i7dxVWm2uf5mF&X-Amz-Signature=744ed51518117215d731d627ff6522cdda1ae3bd5a73d0fc2a8391170e10a085&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
