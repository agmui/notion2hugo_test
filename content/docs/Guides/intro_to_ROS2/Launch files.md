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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYHXZ7M%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdDw4J4Q17DKb3c9YYmhoGftgha1zw86Q958IuzGG53gIhANbxk94eUFy8rdyV1W8NiigjRamb5ZXtotAXY73nw4I1KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUsNGYaHUE5Hfu1M8q3APNS%2B1OBTf0lVGiBHXEQLWOBqafNONW0N%2BSg%2BuCkeIlBbpAS2iHRhM9tCBB7k%2F0Lh%2F%2Bcu2JxVpnV4YUvBSyoRlq5Ne96LL3wI3726CwryJ3%2BdL6OsQZvAvNdbdX5GJ8raNtzVRqZWhr%2B%2B0XL%2FjpGYjrZu7N4NvYM8ixScqmf8iYoB4A9YLkmRyKxLlWmu%2B%2F%2BzfMrJINvluiYoOvtZNwigxGPeoxdWg%2FHsMDa9efBYndXS%2BFlegPNTtNi40P6PHZbcpnklnNnLJ6RDu%2FK%2FcQ8XmeRCLWLRXSGtPK%2B4PWMpf3W2Vp9U3CMclpI65KB5GMkiL9oM2A6fdYEpXGE1x4y8UCsbDKC7yVfbc89pXs%2F9tq4YQBhkKlqfCWhBFzsXHw3Xeb4qjng5iB0n%2BtmXizDPVus%2FOpkefrzmHR0X4QZp32qfPgEGK1xVov8Y4Fq2iZYTcbFpP0%2FR4NXJif5qXoNiECuUIz2vI7WeAoUVcTZSe4C6u2Kuvnezc9JyHMpjvrgCGVgOpGCNtRsA1oZo%2FZmdDGdGaivJqD2%2BqlzPjUm8Mw5Y46KAe%2BSLu3urBXMWSB9hl5hzY2WkWES5UCfhKz31772IHkBvytqJf6DMaGHGCV7MbDEVvaxrJePd4TQzD2jtvCBjqkAcrhGdcOo67nntq0N48douD%2BxOm9%2FgbePMdRc28C7dCcOdyyKNEOGGQBNn%2BPWCWx9LmIhuFjYTGFPvUYjHB6WgmbdhHwH6xfYuYVf55UfaxJ%2B5YtbzbBnrqht%2FnitDpdRMskxaR%2BgZAa%2BJamVuiyQFupUA84yOb39ggiyXEbVm82QpZRH6uhs0IObWvd3vljy5%2F2sh7xutBFV%2BuUD80DpxUbArZ6&X-Amz-Signature=91026b8f6e62c5bcfa68e7ac8d04c018ccc99661a633ac1d92e8d4014e8a73df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYHXZ7M%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdDw4J4Q17DKb3c9YYmhoGftgha1zw86Q958IuzGG53gIhANbxk94eUFy8rdyV1W8NiigjRamb5ZXtotAXY73nw4I1KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUsNGYaHUE5Hfu1M8q3APNS%2B1OBTf0lVGiBHXEQLWOBqafNONW0N%2BSg%2BuCkeIlBbpAS2iHRhM9tCBB7k%2F0Lh%2F%2Bcu2JxVpnV4YUvBSyoRlq5Ne96LL3wI3726CwryJ3%2BdL6OsQZvAvNdbdX5GJ8raNtzVRqZWhr%2B%2B0XL%2FjpGYjrZu7N4NvYM8ixScqmf8iYoB4A9YLkmRyKxLlWmu%2B%2F%2BzfMrJINvluiYoOvtZNwigxGPeoxdWg%2FHsMDa9efBYndXS%2BFlegPNTtNi40P6PHZbcpnklnNnLJ6RDu%2FK%2FcQ8XmeRCLWLRXSGtPK%2B4PWMpf3W2Vp9U3CMclpI65KB5GMkiL9oM2A6fdYEpXGE1x4y8UCsbDKC7yVfbc89pXs%2F9tq4YQBhkKlqfCWhBFzsXHw3Xeb4qjng5iB0n%2BtmXizDPVus%2FOpkefrzmHR0X4QZp32qfPgEGK1xVov8Y4Fq2iZYTcbFpP0%2FR4NXJif5qXoNiECuUIz2vI7WeAoUVcTZSe4C6u2Kuvnezc9JyHMpjvrgCGVgOpGCNtRsA1oZo%2FZmdDGdGaivJqD2%2BqlzPjUm8Mw5Y46KAe%2BSLu3urBXMWSB9hl5hzY2WkWES5UCfhKz31772IHkBvytqJf6DMaGHGCV7MbDEVvaxrJePd4TQzD2jtvCBjqkAcrhGdcOo67nntq0N48douD%2BxOm9%2FgbePMdRc28C7dCcOdyyKNEOGGQBNn%2BPWCWx9LmIhuFjYTGFPvUYjHB6WgmbdhHwH6xfYuYVf55UfaxJ%2B5YtbzbBnrqht%2FnitDpdRMskxaR%2BgZAa%2BJamVuiyQFupUA84yOb39ggiyXEbVm82QpZRH6uhs0IObWvd3vljy5%2F2sh7xutBFV%2BuUD80DpxUbArZ6&X-Amz-Signature=e73e274d0a335340664ee339de4c918ba274c231be72b81b29513b4cd4df6344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYHXZ7M%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdDw4J4Q17DKb3c9YYmhoGftgha1zw86Q958IuzGG53gIhANbxk94eUFy8rdyV1W8NiigjRamb5ZXtotAXY73nw4I1KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUsNGYaHUE5Hfu1M8q3APNS%2B1OBTf0lVGiBHXEQLWOBqafNONW0N%2BSg%2BuCkeIlBbpAS2iHRhM9tCBB7k%2F0Lh%2F%2Bcu2JxVpnV4YUvBSyoRlq5Ne96LL3wI3726CwryJ3%2BdL6OsQZvAvNdbdX5GJ8raNtzVRqZWhr%2B%2B0XL%2FjpGYjrZu7N4NvYM8ixScqmf8iYoB4A9YLkmRyKxLlWmu%2B%2F%2BzfMrJINvluiYoOvtZNwigxGPeoxdWg%2FHsMDa9efBYndXS%2BFlegPNTtNi40P6PHZbcpnklnNnLJ6RDu%2FK%2FcQ8XmeRCLWLRXSGtPK%2B4PWMpf3W2Vp9U3CMclpI65KB5GMkiL9oM2A6fdYEpXGE1x4y8UCsbDKC7yVfbc89pXs%2F9tq4YQBhkKlqfCWhBFzsXHw3Xeb4qjng5iB0n%2BtmXizDPVus%2FOpkefrzmHR0X4QZp32qfPgEGK1xVov8Y4Fq2iZYTcbFpP0%2FR4NXJif5qXoNiECuUIz2vI7WeAoUVcTZSe4C6u2Kuvnezc9JyHMpjvrgCGVgOpGCNtRsA1oZo%2FZmdDGdGaivJqD2%2BqlzPjUm8Mw5Y46KAe%2BSLu3urBXMWSB9hl5hzY2WkWES5UCfhKz31772IHkBvytqJf6DMaGHGCV7MbDEVvaxrJePd4TQzD2jtvCBjqkAcrhGdcOo67nntq0N48douD%2BxOm9%2FgbePMdRc28C7dCcOdyyKNEOGGQBNn%2BPWCWx9LmIhuFjYTGFPvUYjHB6WgmbdhHwH6xfYuYVf55UfaxJ%2B5YtbzbBnrqht%2FnitDpdRMskxaR%2BgZAa%2BJamVuiyQFupUA84yOb39ggiyXEbVm82QpZRH6uhs0IObWvd3vljy5%2F2sh7xutBFV%2BuUD80DpxUbArZ6&X-Amz-Signature=633e54fc12a29c1e54a7fb69e1b5c70f22442d7240ffb4a8dcb5fc70eca9f57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
