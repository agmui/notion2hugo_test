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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNI6EUXC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3LisRbJWwxzkbUVlhoWzuQDbDE7rvvOEvDsj8zc19GwIgZXkd8OMHFXf5kOIzt8w5H7JpaR6WWPnxr9KKsBRE0lAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDYvZdPiZ8sp9ph6kyrcA0GCehz8xkere39pju6A6prN%2FmOhYzF1qnoUz8TkLDvnx5MKqS9xqXG5IbRG8%2ByPgSAGwM%2F%2B1RK3C46gCbkjOq0xVhmpAUaix2KfgyVdX%2F9ClsN8MPg9JdFckLLqI3NbfWoCbGo0R3zFxqlGAEuIFEvMEVDMBh5tIgHZKU2MjeZtjpbK1F49e%2Bpy0QqPPsWx8Av2rfIXVfNMQaqkGe6YyneXKSxuCIi9aulp4pwIFpvgYNibZAWHrk5YIeGju5yxXaV2AbaSYrdYaIHSLoA12aLtqx1yWbe%2BdeJCoqTBfsbNDF1uUWfZvNxEBB7LnU4%2F5OD8gTisA1ZWWjOVBYcsVu2i6OpLVLPdzV8hGt4TJw931ZW4GjdPXJ3APoU0EP5e4SyTN6S7qwHIN5MnjwdlUOSoX0XEtH7qI5LPggqIkwrQyU3YN%2FbUMyF8uhSZmjCLuD64ahERzbe%2FUqced0vi%2ByCrYcOLuokF5Z7fbYz0yI5Pb%2BorQbWebKHMzZh5yQ%2BRqReDQsvUbrIv61ImArwdvfFeK9wnd4H0LO4YLiDDvQECc1l62cvri7HLtzfnnLaqk7n2vhE1sbWvqdGXrsMS2g4tgOC6faUfH1C067637EzUexdveD%2BCplvGi2ttMJnP1MEGOqUBdKbV5u8NSzQJIfw06adFvIoHkjBmdzSWszEHQMhtCc7gvxX3uYCo0gfXJGknqVBjqNBNvCvAx1599E4v4jmXgThK2cIJRcyKpf2CE8dKwpRkcGdTDhdlNAjyfj97V3fCRSa5W4efY420pUK2v8h7W%2FnHCYWz2la1WO23%2FCvO19BjTRQOaRqygYyyb46yiZcssI4cJGc4j5IPYuD4TafpkFLUYBMW&X-Amz-Signature=18b6e14950c1f7bee7916accaad5c2932cb3419731c63c86b1cc37696fec0fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNI6EUXC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3LisRbJWwxzkbUVlhoWzuQDbDE7rvvOEvDsj8zc19GwIgZXkd8OMHFXf5kOIzt8w5H7JpaR6WWPnxr9KKsBRE0lAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDYvZdPiZ8sp9ph6kyrcA0GCehz8xkere39pju6A6prN%2FmOhYzF1qnoUz8TkLDvnx5MKqS9xqXG5IbRG8%2ByPgSAGwM%2F%2B1RK3C46gCbkjOq0xVhmpAUaix2KfgyVdX%2F9ClsN8MPg9JdFckLLqI3NbfWoCbGo0R3zFxqlGAEuIFEvMEVDMBh5tIgHZKU2MjeZtjpbK1F49e%2Bpy0QqPPsWx8Av2rfIXVfNMQaqkGe6YyneXKSxuCIi9aulp4pwIFpvgYNibZAWHrk5YIeGju5yxXaV2AbaSYrdYaIHSLoA12aLtqx1yWbe%2BdeJCoqTBfsbNDF1uUWfZvNxEBB7LnU4%2F5OD8gTisA1ZWWjOVBYcsVu2i6OpLVLPdzV8hGt4TJw931ZW4GjdPXJ3APoU0EP5e4SyTN6S7qwHIN5MnjwdlUOSoX0XEtH7qI5LPggqIkwrQyU3YN%2FbUMyF8uhSZmjCLuD64ahERzbe%2FUqced0vi%2ByCrYcOLuokF5Z7fbYz0yI5Pb%2BorQbWebKHMzZh5yQ%2BRqReDQsvUbrIv61ImArwdvfFeK9wnd4H0LO4YLiDDvQECc1l62cvri7HLtzfnnLaqk7n2vhE1sbWvqdGXrsMS2g4tgOC6faUfH1C067637EzUexdveD%2BCplvGi2ttMJnP1MEGOqUBdKbV5u8NSzQJIfw06adFvIoHkjBmdzSWszEHQMhtCc7gvxX3uYCo0gfXJGknqVBjqNBNvCvAx1599E4v4jmXgThK2cIJRcyKpf2CE8dKwpRkcGdTDhdlNAjyfj97V3fCRSa5W4efY420pUK2v8h7W%2FnHCYWz2la1WO23%2FCvO19BjTRQOaRqygYyyb46yiZcssI4cJGc4j5IPYuD4TafpkFLUYBMW&X-Amz-Signature=f3818a15eb8240ca41c9bf660e0181436e976c81e34174c1f5b9fb3a23cfc1e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNI6EUXC%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T041523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3LisRbJWwxzkbUVlhoWzuQDbDE7rvvOEvDsj8zc19GwIgZXkd8OMHFXf5kOIzt8w5H7JpaR6WWPnxr9KKsBRE0lAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDYvZdPiZ8sp9ph6kyrcA0GCehz8xkere39pju6A6prN%2FmOhYzF1qnoUz8TkLDvnx5MKqS9xqXG5IbRG8%2ByPgSAGwM%2F%2B1RK3C46gCbkjOq0xVhmpAUaix2KfgyVdX%2F9ClsN8MPg9JdFckLLqI3NbfWoCbGo0R3zFxqlGAEuIFEvMEVDMBh5tIgHZKU2MjeZtjpbK1F49e%2Bpy0QqPPsWx8Av2rfIXVfNMQaqkGe6YyneXKSxuCIi9aulp4pwIFpvgYNibZAWHrk5YIeGju5yxXaV2AbaSYrdYaIHSLoA12aLtqx1yWbe%2BdeJCoqTBfsbNDF1uUWfZvNxEBB7LnU4%2F5OD8gTisA1ZWWjOVBYcsVu2i6OpLVLPdzV8hGt4TJw931ZW4GjdPXJ3APoU0EP5e4SyTN6S7qwHIN5MnjwdlUOSoX0XEtH7qI5LPggqIkwrQyU3YN%2FbUMyF8uhSZmjCLuD64ahERzbe%2FUqced0vi%2ByCrYcOLuokF5Z7fbYz0yI5Pb%2BorQbWebKHMzZh5yQ%2BRqReDQsvUbrIv61ImArwdvfFeK9wnd4H0LO4YLiDDvQECc1l62cvri7HLtzfnnLaqk7n2vhE1sbWvqdGXrsMS2g4tgOC6faUfH1C067637EzUexdveD%2BCplvGi2ttMJnP1MEGOqUBdKbV5u8NSzQJIfw06adFvIoHkjBmdzSWszEHQMhtCc7gvxX3uYCo0gfXJGknqVBjqNBNvCvAx1599E4v4jmXgThK2cIJRcyKpf2CE8dKwpRkcGdTDhdlNAjyfj97V3fCRSa5W4efY420pUK2v8h7W%2FnHCYWz2la1WO23%2FCvO19BjTRQOaRqygYyyb46yiZcssI4cJGc4j5IPYuD4TafpkFLUYBMW&X-Amz-Signature=cf4529ebeb3856e07c897a6b09fc3b958e24fd04b8a3a5eb280dbdf137ad0908&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
