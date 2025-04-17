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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYR6SCG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVtAg80vVvumDJZv7evK0ERqX1nM6NFUf9u%2F87eXRz3wIgEuvtTWnBcykci9zm%2BG2DvdY68bJPMbuUmHqQiwcq2AYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFZY7V9RZj1QF3CCrSrcA1UyQU7pv5TWuNuXKu8JnQq4H169LtzVDAjSbL6BffN1JW0eafkOjCHCTJKTl9DLPNNJtUo%2FvsLkmBl3HJjL3jpf5WO9enKYmA4DYxrPgjsIy2L9wpcijm6FakPO11MLNFYpDX1dpxwb2uEnFR55U0NPm6RCgjGk7HryoPPPzwcO93Qfcq6iVAUHSgyQeOXcYUiVMedsnlW0CgDQ%2BWUY8GSOIDRar8QEOF1vIkInnKvbn40phDUd27mdoockdCQyaawS3o95EHKbvC3L6NvpONsA1OjXamVz%2BY6lc56rSibNrHFe5%2B5CXfw7eizSfRYP42phb6GvPffhIWymbDEmQ6q9A0%2FyG71Po3Rpt8%2FB%2FfSQ%2FBuQ7kjvr%2B1plPpqzRxMaFmiO7mi5FN9JYjaWEU5uwDlao98aCa%2B0DsMc%2BnwUgB8HZ74BdG4jx1OrnnR5Xzg6jOQjxNHkbQ0VsCSkHfUws%2FQmPKG8qTTsgSbm6z17DePAopgut3KGzxcvoLIBTWpf9wJv%2Ftl2qTcuywSufMzTtbSJyhW1QgnQl6QrEWkwcfn16ZUWBMFWBNdu35oS1K23OFmBNdblI1jfSzvDC7QD8PjL6h76HhDZb2DyQZATnU0yaycNYFFNURii0n%2BMJv6gsAGOqUBLftaC9wEdXWMNM1lELgo9BZmpsQFMKhE6SRSwwJet1UpIYE5ioUao6IQGPK8KB56FeFwYNqDQFsVi8dnmyhHT%2BZ6PgnQbS%2B3SJghItkmq%2FRJZi42ot6SBNHsYQ1LKb7E3SBMQSwL6GdXYBhqvrp%2FUUfd8p2U%2FApeaFbDCp%2Br%2FzFPnCLgoK3p6%2BYYZldr2SxLPBTvUme3bP%2F3quNWSn2O4DhlOQEC&X-Amz-Signature=479865d199ccf233aef2860825c9820e3c984943eb023c541c14a88f086702c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYR6SCG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVtAg80vVvumDJZv7evK0ERqX1nM6NFUf9u%2F87eXRz3wIgEuvtTWnBcykci9zm%2BG2DvdY68bJPMbuUmHqQiwcq2AYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFZY7V9RZj1QF3CCrSrcA1UyQU7pv5TWuNuXKu8JnQq4H169LtzVDAjSbL6BffN1JW0eafkOjCHCTJKTl9DLPNNJtUo%2FvsLkmBl3HJjL3jpf5WO9enKYmA4DYxrPgjsIy2L9wpcijm6FakPO11MLNFYpDX1dpxwb2uEnFR55U0NPm6RCgjGk7HryoPPPzwcO93Qfcq6iVAUHSgyQeOXcYUiVMedsnlW0CgDQ%2BWUY8GSOIDRar8QEOF1vIkInnKvbn40phDUd27mdoockdCQyaawS3o95EHKbvC3L6NvpONsA1OjXamVz%2BY6lc56rSibNrHFe5%2B5CXfw7eizSfRYP42phb6GvPffhIWymbDEmQ6q9A0%2FyG71Po3Rpt8%2FB%2FfSQ%2FBuQ7kjvr%2B1plPpqzRxMaFmiO7mi5FN9JYjaWEU5uwDlao98aCa%2B0DsMc%2BnwUgB8HZ74BdG4jx1OrnnR5Xzg6jOQjxNHkbQ0VsCSkHfUws%2FQmPKG8qTTsgSbm6z17DePAopgut3KGzxcvoLIBTWpf9wJv%2Ftl2qTcuywSufMzTtbSJyhW1QgnQl6QrEWkwcfn16ZUWBMFWBNdu35oS1K23OFmBNdblI1jfSzvDC7QD8PjL6h76HhDZb2DyQZATnU0yaycNYFFNURii0n%2BMJv6gsAGOqUBLftaC9wEdXWMNM1lELgo9BZmpsQFMKhE6SRSwwJet1UpIYE5ioUao6IQGPK8KB56FeFwYNqDQFsVi8dnmyhHT%2BZ6PgnQbS%2B3SJghItkmq%2FRJZi42ot6SBNHsYQ1LKb7E3SBMQSwL6GdXYBhqvrp%2FUUfd8p2U%2FApeaFbDCp%2Br%2FzFPnCLgoK3p6%2BYYZldr2SxLPBTvUme3bP%2F3quNWSn2O4DhlOQEC&X-Amz-Signature=7c62ef440bdc3b4d0bf47b5c39ea4954323ee0312536147c85738df081e0285d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UYR6SCG%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVtAg80vVvumDJZv7evK0ERqX1nM6NFUf9u%2F87eXRz3wIgEuvtTWnBcykci9zm%2BG2DvdY68bJPMbuUmHqQiwcq2AYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFZY7V9RZj1QF3CCrSrcA1UyQU7pv5TWuNuXKu8JnQq4H169LtzVDAjSbL6BffN1JW0eafkOjCHCTJKTl9DLPNNJtUo%2FvsLkmBl3HJjL3jpf5WO9enKYmA4DYxrPgjsIy2L9wpcijm6FakPO11MLNFYpDX1dpxwb2uEnFR55U0NPm6RCgjGk7HryoPPPzwcO93Qfcq6iVAUHSgyQeOXcYUiVMedsnlW0CgDQ%2BWUY8GSOIDRar8QEOF1vIkInnKvbn40phDUd27mdoockdCQyaawS3o95EHKbvC3L6NvpONsA1OjXamVz%2BY6lc56rSibNrHFe5%2B5CXfw7eizSfRYP42phb6GvPffhIWymbDEmQ6q9A0%2FyG71Po3Rpt8%2FB%2FfSQ%2FBuQ7kjvr%2B1plPpqzRxMaFmiO7mi5FN9JYjaWEU5uwDlao98aCa%2B0DsMc%2BnwUgB8HZ74BdG4jx1OrnnR5Xzg6jOQjxNHkbQ0VsCSkHfUws%2FQmPKG8qTTsgSbm6z17DePAopgut3KGzxcvoLIBTWpf9wJv%2Ftl2qTcuywSufMzTtbSJyhW1QgnQl6QrEWkwcfn16ZUWBMFWBNdu35oS1K23OFmBNdblI1jfSzvDC7QD8PjL6h76HhDZb2DyQZATnU0yaycNYFFNURii0n%2BMJv6gsAGOqUBLftaC9wEdXWMNM1lELgo9BZmpsQFMKhE6SRSwwJet1UpIYE5ioUao6IQGPK8KB56FeFwYNqDQFsVi8dnmyhHT%2BZ6PgnQbS%2B3SJghItkmq%2FRJZi42ot6SBNHsYQ1LKb7E3SBMQSwL6GdXYBhqvrp%2FUUfd8p2U%2FApeaFbDCp%2Br%2FzFPnCLgoK3p6%2BYYZldr2SxLPBTvUme3bP%2F3quNWSn2O4DhlOQEC&X-Amz-Signature=376d5389f1eb34162636debafaf84a9b583a85eb248ec72b86f7b16f8899046b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
