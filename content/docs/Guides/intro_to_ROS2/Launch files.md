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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWIDDUSH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDG5YQw6RQWO4wdQy0aDdABUPD2r3PJcAmSof1vUgCuowIhAPAefT57uX7GQC2rKK04dYDig86EU01Ubh%2BFw3oktP3HKv8DCDUQABoMNjM3NDIzMTgzODA1IgzSK5soaMcnTDVJHM4q3AO5trSTF8CI6wR9IGlUYyRGjws3vNy%2FlcAAOWKKwFS2JIf7gdDyALyIyRvbbPOdnk%2BlblzlsNEx8Vxv40rw2b6OWedU07xSudG2aFbxHJjxRQ9eBQ8or%2F%2F1ks%2BogCq1QHfv%2BroRrzznNWdzSFWKMryQOnh7Z8Xv%2Bc4jUm5sFcFitxcLwv1IUwHlZYhCB6s469%2FEXe6Oj3TUEbx9hBdsKzC7sXV67EOaInNQa%2F%2FuF6ya5pZN11Y977afKVl%2FX%2BOLQLybtexHWjtAYLKIvThn5LvYPTLUS7GfVH0AWdk4N12xaSjmJ3EQL8ZBORKp98jT3wFn6f6DLJe02jpgtq4vkmkJE6bP1P2U27e2pC61K3wIH0J1aEIDaE83Aj0v8mhGuP%2FFrp8fDVmLH3TWBqz1yBqQTe7K31s2pgGOUJGlaTn3FfapmXBZ2DsNoipylC1QCHOcOJQq22benK8ymAp7GFXLkxJk2lUZVe37L9xecpZjr8uI58YDkrio9z6th%2FcVCfdSBMU%2F0dWEIllbEiYTyU384EEPRXMgoqu6cmx4i5tFlX3b7dcOxMRs2f2MsU7%2F%2FyRlOg6%2F3TCC%2FcqJEjY3DiEefwTA4wtlhOqhRR7%2Bn6vBqkKojKH%2FYI1PdQWkbDCa1YLCBjqkAW%2FNM9Rq%2B3WA3zUPeCY4xOmEpI0UnRI%2FSZrQK84YvvPXSkSvOQMQl3GIWmasc%2FZn2%2BmuqyQZ343Pj8hn8mDERPCSLcHYBp1qJrJriYC%2BE%2FC5M1CBil6gWjP%2FlyjBStng2u%2F2Fbdseqt52qA6%2FqVJhilgeRFYxCFQLDBWjQZS9k6E8ViSHAaDgPef8PbWF0F%2FRA15tOPrxlShwiDc9t851Q%2FtJcwK&X-Amz-Signature=d1a2f5b9e13e5cb2233aa780b764db5d5fef5796a7cba8d2baf9ab3e8d11f387&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWIDDUSH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDG5YQw6RQWO4wdQy0aDdABUPD2r3PJcAmSof1vUgCuowIhAPAefT57uX7GQC2rKK04dYDig86EU01Ubh%2BFw3oktP3HKv8DCDUQABoMNjM3NDIzMTgzODA1IgzSK5soaMcnTDVJHM4q3AO5trSTF8CI6wR9IGlUYyRGjws3vNy%2FlcAAOWKKwFS2JIf7gdDyALyIyRvbbPOdnk%2BlblzlsNEx8Vxv40rw2b6OWedU07xSudG2aFbxHJjxRQ9eBQ8or%2F%2F1ks%2BogCq1QHfv%2BroRrzznNWdzSFWKMryQOnh7Z8Xv%2Bc4jUm5sFcFitxcLwv1IUwHlZYhCB6s469%2FEXe6Oj3TUEbx9hBdsKzC7sXV67EOaInNQa%2F%2FuF6ya5pZN11Y977afKVl%2FX%2BOLQLybtexHWjtAYLKIvThn5LvYPTLUS7GfVH0AWdk4N12xaSjmJ3EQL8ZBORKp98jT3wFn6f6DLJe02jpgtq4vkmkJE6bP1P2U27e2pC61K3wIH0J1aEIDaE83Aj0v8mhGuP%2FFrp8fDVmLH3TWBqz1yBqQTe7K31s2pgGOUJGlaTn3FfapmXBZ2DsNoipylC1QCHOcOJQq22benK8ymAp7GFXLkxJk2lUZVe37L9xecpZjr8uI58YDkrio9z6th%2FcVCfdSBMU%2F0dWEIllbEiYTyU384EEPRXMgoqu6cmx4i5tFlX3b7dcOxMRs2f2MsU7%2F%2FyRlOg6%2F3TCC%2FcqJEjY3DiEefwTA4wtlhOqhRR7%2Bn6vBqkKojKH%2FYI1PdQWkbDCa1YLCBjqkAW%2FNM9Rq%2B3WA3zUPeCY4xOmEpI0UnRI%2FSZrQK84YvvPXSkSvOQMQl3GIWmasc%2FZn2%2BmuqyQZ343Pj8hn8mDERPCSLcHYBp1qJrJriYC%2BE%2FC5M1CBil6gWjP%2FlyjBStng2u%2F2Fbdseqt52qA6%2FqVJhilgeRFYxCFQLDBWjQZS9k6E8ViSHAaDgPef8PbWF0F%2FRA15tOPrxlShwiDc9t851Q%2FtJcwK&X-Amz-Signature=60b6089f428464cb4fb9f986c0816dc994276168f2fe591c45c27a099fadb250&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWIDDUSH%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDG5YQw6RQWO4wdQy0aDdABUPD2r3PJcAmSof1vUgCuowIhAPAefT57uX7GQC2rKK04dYDig86EU01Ubh%2BFw3oktP3HKv8DCDUQABoMNjM3NDIzMTgzODA1IgzSK5soaMcnTDVJHM4q3AO5trSTF8CI6wR9IGlUYyRGjws3vNy%2FlcAAOWKKwFS2JIf7gdDyALyIyRvbbPOdnk%2BlblzlsNEx8Vxv40rw2b6OWedU07xSudG2aFbxHJjxRQ9eBQ8or%2F%2F1ks%2BogCq1QHfv%2BroRrzznNWdzSFWKMryQOnh7Z8Xv%2Bc4jUm5sFcFitxcLwv1IUwHlZYhCB6s469%2FEXe6Oj3TUEbx9hBdsKzC7sXV67EOaInNQa%2F%2FuF6ya5pZN11Y977afKVl%2FX%2BOLQLybtexHWjtAYLKIvThn5LvYPTLUS7GfVH0AWdk4N12xaSjmJ3EQL8ZBORKp98jT3wFn6f6DLJe02jpgtq4vkmkJE6bP1P2U27e2pC61K3wIH0J1aEIDaE83Aj0v8mhGuP%2FFrp8fDVmLH3TWBqz1yBqQTe7K31s2pgGOUJGlaTn3FfapmXBZ2DsNoipylC1QCHOcOJQq22benK8ymAp7GFXLkxJk2lUZVe37L9xecpZjr8uI58YDkrio9z6th%2FcVCfdSBMU%2F0dWEIllbEiYTyU384EEPRXMgoqu6cmx4i5tFlX3b7dcOxMRs2f2MsU7%2F%2FyRlOg6%2F3TCC%2FcqJEjY3DiEefwTA4wtlhOqhRR7%2Bn6vBqkKojKH%2FYI1PdQWkbDCa1YLCBjqkAW%2FNM9Rq%2B3WA3zUPeCY4xOmEpI0UnRI%2FSZrQK84YvvPXSkSvOQMQl3GIWmasc%2FZn2%2BmuqyQZ343Pj8hn8mDERPCSLcHYBp1qJrJriYC%2BE%2FC5M1CBil6gWjP%2FlyjBStng2u%2F2Fbdseqt52qA6%2FqVJhilgeRFYxCFQLDBWjQZS9k6E8ViSHAaDgPef8PbWF0F%2FRA15tOPrxlShwiDc9t851Q%2FtJcwK&X-Amz-Signature=c0e5a0a295d9c2bd213bcb9b2c4fce60996502c2c66bd894cd4af1e3cdc5a5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
