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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHKPTEF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQC2I6zYreotXARnNIgMSN1h6sXCU678Lg33nXXr8n8mNwIhAKF6TQISkcNM7O2%2F%2BdaW57%2B0Tv%2BxzX0HvjV%2FN4pZ0ChNKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXElleWOASTuMLnmIq3AOxs2fBk7gSSyyAmuo2Kxo6I28xOsI8nQShXxc2Rw4tM5%2BJUMDj0muisaRJxlGDYCyIj1wfbhlB42I0e%2B%2BPykBtfDvkmiQrXi0vvFwByRH4%2BPg8hqp1Yx29U9UgJbGgj3IGZHm7witHTsCFyBxLtlmJIyB5umIiKHLyfLq6blvohY94CWaRyo37w3Hk77SL9uMz%2F%2FVwkutzBnfNjF9V7%2F9%2Fji%2Fhi%2FfjUIP3Ri6h8OX%2BECxYAaF8A2HVu2BZD7R72pM0NqARXnb36VScuLhGjKOJdy8tdCsPHR8YBy85gLBYC%2BsKjEAe61wo7PDG4NsAJewkRhtCdkYBAn3CyCgrc9KSC1v6j%2BdbJ8zgH%2BgIj6ZHU9jqe0OxbrpAg2svwYUoB52fIjRo0Bb%2BScnf9KXjqZ60ACaOWI1dJSM08BUgrFTN%2F9JD%2B1NGucGO1ln1Ywx9nVn9b1b2l5%2FdxjLvy5tXbM%2BE4i0mhU1j0HqiNa3ERcFuPVzZx1H3TwwqSSzdIBbf3H5rxTfzUmbcr2zrmH1tsXTfhIrYYNlwtX%2Fb82dbiGAcNiThWISpwfwen9jcqIZQgC1Pt5V3NYReICn5dufKFPOdlF%2BpHuY5Li%2Bu%2FdHEhDlwpINDo5RGw7OHhwfeBzC8x%2B6%2BBjqkAQYXopPKkAFnPbPVt7cgRaFpmVgSHR3HBSRONr%2BgYIsLw6ddXIXPfPkhH3mzniTkR9Uzzo0M9kHCyG7Egx5AVag7J3V8sqTgpAxLxI9iOseV7TsVglmzQ8aDL2brSF%2BzgxX0JVtIK26cyJ4CwjdDC%2B%2FjP1DON63Bz6zGxDSex4AircQI5Nji0E2jmLXhSHj%2FREkTeLmzBBRQKkqDQiKo2hcsvI9a&X-Amz-Signature=673b320366ea6a568203a792b1ebf24bafd6191fb502a93688a96c076734a7a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHKPTEF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQC2I6zYreotXARnNIgMSN1h6sXCU678Lg33nXXr8n8mNwIhAKF6TQISkcNM7O2%2F%2BdaW57%2B0Tv%2BxzX0HvjV%2FN4pZ0ChNKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXElleWOASTuMLnmIq3AOxs2fBk7gSSyyAmuo2Kxo6I28xOsI8nQShXxc2Rw4tM5%2BJUMDj0muisaRJxlGDYCyIj1wfbhlB42I0e%2B%2BPykBtfDvkmiQrXi0vvFwByRH4%2BPg8hqp1Yx29U9UgJbGgj3IGZHm7witHTsCFyBxLtlmJIyB5umIiKHLyfLq6blvohY94CWaRyo37w3Hk77SL9uMz%2F%2FVwkutzBnfNjF9V7%2F9%2Fji%2Fhi%2FfjUIP3Ri6h8OX%2BECxYAaF8A2HVu2BZD7R72pM0NqARXnb36VScuLhGjKOJdy8tdCsPHR8YBy85gLBYC%2BsKjEAe61wo7PDG4NsAJewkRhtCdkYBAn3CyCgrc9KSC1v6j%2BdbJ8zgH%2BgIj6ZHU9jqe0OxbrpAg2svwYUoB52fIjRo0Bb%2BScnf9KXjqZ60ACaOWI1dJSM08BUgrFTN%2F9JD%2B1NGucGO1ln1Ywx9nVn9b1b2l5%2FdxjLvy5tXbM%2BE4i0mhU1j0HqiNa3ERcFuPVzZx1H3TwwqSSzdIBbf3H5rxTfzUmbcr2zrmH1tsXTfhIrYYNlwtX%2Fb82dbiGAcNiThWISpwfwen9jcqIZQgC1Pt5V3NYReICn5dufKFPOdlF%2BpHuY5Li%2Bu%2FdHEhDlwpINDo5RGw7OHhwfeBzC8x%2B6%2BBjqkAQYXopPKkAFnPbPVt7cgRaFpmVgSHR3HBSRONr%2BgYIsLw6ddXIXPfPkhH3mzniTkR9Uzzo0M9kHCyG7Egx5AVag7J3V8sqTgpAxLxI9iOseV7TsVglmzQ8aDL2brSF%2BzgxX0JVtIK26cyJ4CwjdDC%2B%2FjP1DON63Bz6zGxDSex4AircQI5Nji0E2jmLXhSHj%2FREkTeLmzBBRQKkqDQiKo2hcsvI9a&X-Amz-Signature=89861e323de608d58b25a4aa7fc0fb7c6cf2d8a00aa13501cf39ef5ae1428d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHKPTEF%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T061157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQC2I6zYreotXARnNIgMSN1h6sXCU678Lg33nXXr8n8mNwIhAKF6TQISkcNM7O2%2F%2BdaW57%2B0Tv%2BxzX0HvjV%2FN4pZ0ChNKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXElleWOASTuMLnmIq3AOxs2fBk7gSSyyAmuo2Kxo6I28xOsI8nQShXxc2Rw4tM5%2BJUMDj0muisaRJxlGDYCyIj1wfbhlB42I0e%2B%2BPykBtfDvkmiQrXi0vvFwByRH4%2BPg8hqp1Yx29U9UgJbGgj3IGZHm7witHTsCFyBxLtlmJIyB5umIiKHLyfLq6blvohY94CWaRyo37w3Hk77SL9uMz%2F%2FVwkutzBnfNjF9V7%2F9%2Fji%2Fhi%2FfjUIP3Ri6h8OX%2BECxYAaF8A2HVu2BZD7R72pM0NqARXnb36VScuLhGjKOJdy8tdCsPHR8YBy85gLBYC%2BsKjEAe61wo7PDG4NsAJewkRhtCdkYBAn3CyCgrc9KSC1v6j%2BdbJ8zgH%2BgIj6ZHU9jqe0OxbrpAg2svwYUoB52fIjRo0Bb%2BScnf9KXjqZ60ACaOWI1dJSM08BUgrFTN%2F9JD%2B1NGucGO1ln1Ywx9nVn9b1b2l5%2FdxjLvy5tXbM%2BE4i0mhU1j0HqiNa3ERcFuPVzZx1H3TwwqSSzdIBbf3H5rxTfzUmbcr2zrmH1tsXTfhIrYYNlwtX%2Fb82dbiGAcNiThWISpwfwen9jcqIZQgC1Pt5V3NYReICn5dufKFPOdlF%2BpHuY5Li%2Bu%2FdHEhDlwpINDo5RGw7OHhwfeBzC8x%2B6%2BBjqkAQYXopPKkAFnPbPVt7cgRaFpmVgSHR3HBSRONr%2BgYIsLw6ddXIXPfPkhH3mzniTkR9Uzzo0M9kHCyG7Egx5AVag7J3V8sqTgpAxLxI9iOseV7TsVglmzQ8aDL2brSF%2BzgxX0JVtIK26cyJ4CwjdDC%2B%2FjP1DON63Bz6zGxDSex4AircQI5Nji0E2jmLXhSHj%2FREkTeLmzBBRQKkqDQiKo2hcsvI9a&X-Amz-Signature=b07696864e56e7970bba6299292fa2d2dcede2e1f7b883b976874472aae2ea57&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
