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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XDYTVY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFEbqn3xPqIHuSekd3jmyzycISxgBP1Sfe6tn%2BGz%2FgMwAiEA3QJJ51YXQVf%2FXwdWdehm73jixPhNv0mr1ZNlGbJED30q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG5kPliB8iMQVTYHbircA5tqiODcQ83wsmjTzDVp1w5Cpw2cGChbkeKuCFDwSjkb7ANr4wORH0nfVq4CRTGmt4I8GWp%2FxbsRbfamZqjS4fTde3UcgGms1v2Zg3ZJCoBpLA5YHmWjhPVBINr9nvlm7cOlaTD3niXsrpcF7yU9wbOBl21ZfV28yKYe4LAg8G%2BIL9TwTUHNCezJXrpKaVpd5RgEJGCn9mdMA7KIQ%2BIEs5repKKBbfVdM21AE5ZM8P%2FL%2F74Tb7PHbPlKQBjqmoINhsp33PZUxrDr59nMiuMNloce8kzP9LbvSQzdPu2Cgf2u6oXrIZKrUEJH7zptzgRLJnmAZxuzrMCcvepCYV1dMWzxRwpmho5IW9mZQtlERddUFIiWP9dYbtT8ZakYkzg43vuaybjpP88EtiHuQVrjn9kFvekDNsJiB63kshaXLlOyQbK2VovbTDrEUiN2gIl2fbwIbHRq%2Fcni8GUYs1rJY4hMXwZ1UXBgn6cpgwfufoilBXAkpZA3SOPl22%2BKXomvgvkdztYySojDI4f3aBGhVxM78olc4oN%2B2X78cxI5AjGWER%2Fh1V%2Fm6EY6Wi20k6vjBYCL6VejITsqoSkG04Vhr0LOwYrY2twiqh0GJBdyiysP%2Bhb94WJPNDoRPZ6GMIG5lL0GOqUBpqo5TLmBP1G6QkpVGYVZ7c72dDjRV0DOneyuijdk0suxkWaJn9Oa0pTlimfJSDW4D%2BhgdNxAYRadI4%2BJBhMpjASLN%2F5WtbAyTDRpz0QTDt%2FZ3ghy1FhtPgVszhaUgaFfl1congMnyO0v2jesE2oLhSdm8PWWK%2B34NWCs6GQRpplQ9gOv4tRAGIV2Gg%2BLio6zyeM0SCSqLVNKSFCK2zpRUWlg8Qtu&X-Amz-Signature=93809e9df90eb9ed70331033cc094b124fcbc676af8299bd3634b7b21567595d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XDYTVY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFEbqn3xPqIHuSekd3jmyzycISxgBP1Sfe6tn%2BGz%2FgMwAiEA3QJJ51YXQVf%2FXwdWdehm73jixPhNv0mr1ZNlGbJED30q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG5kPliB8iMQVTYHbircA5tqiODcQ83wsmjTzDVp1w5Cpw2cGChbkeKuCFDwSjkb7ANr4wORH0nfVq4CRTGmt4I8GWp%2FxbsRbfamZqjS4fTde3UcgGms1v2Zg3ZJCoBpLA5YHmWjhPVBINr9nvlm7cOlaTD3niXsrpcF7yU9wbOBl21ZfV28yKYe4LAg8G%2BIL9TwTUHNCezJXrpKaVpd5RgEJGCn9mdMA7KIQ%2BIEs5repKKBbfVdM21AE5ZM8P%2FL%2F74Tb7PHbPlKQBjqmoINhsp33PZUxrDr59nMiuMNloce8kzP9LbvSQzdPu2Cgf2u6oXrIZKrUEJH7zptzgRLJnmAZxuzrMCcvepCYV1dMWzxRwpmho5IW9mZQtlERddUFIiWP9dYbtT8ZakYkzg43vuaybjpP88EtiHuQVrjn9kFvekDNsJiB63kshaXLlOyQbK2VovbTDrEUiN2gIl2fbwIbHRq%2Fcni8GUYs1rJY4hMXwZ1UXBgn6cpgwfufoilBXAkpZA3SOPl22%2BKXomvgvkdztYySojDI4f3aBGhVxM78olc4oN%2B2X78cxI5AjGWER%2Fh1V%2Fm6EY6Wi20k6vjBYCL6VejITsqoSkG04Vhr0LOwYrY2twiqh0GJBdyiysP%2Bhb94WJPNDoRPZ6GMIG5lL0GOqUBpqo5TLmBP1G6QkpVGYVZ7c72dDjRV0DOneyuijdk0suxkWaJn9Oa0pTlimfJSDW4D%2BhgdNxAYRadI4%2BJBhMpjASLN%2F5WtbAyTDRpz0QTDt%2FZ3ghy1FhtPgVszhaUgaFfl1congMnyO0v2jesE2oLhSdm8PWWK%2B34NWCs6GQRpplQ9gOv4tRAGIV2Gg%2BLio6zyeM0SCSqLVNKSFCK2zpRUWlg8Qtu&X-Amz-Signature=19ac9d98801eaade3ece58a65a6454a9bd8393f1cf074756c92cbc34863d56ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7XDYTVY%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFEbqn3xPqIHuSekd3jmyzycISxgBP1Sfe6tn%2BGz%2FgMwAiEA3QJJ51YXQVf%2FXwdWdehm73jixPhNv0mr1ZNlGbJED30q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDG5kPliB8iMQVTYHbircA5tqiODcQ83wsmjTzDVp1w5Cpw2cGChbkeKuCFDwSjkb7ANr4wORH0nfVq4CRTGmt4I8GWp%2FxbsRbfamZqjS4fTde3UcgGms1v2Zg3ZJCoBpLA5YHmWjhPVBINr9nvlm7cOlaTD3niXsrpcF7yU9wbOBl21ZfV28yKYe4LAg8G%2BIL9TwTUHNCezJXrpKaVpd5RgEJGCn9mdMA7KIQ%2BIEs5repKKBbfVdM21AE5ZM8P%2FL%2F74Tb7PHbPlKQBjqmoINhsp33PZUxrDr59nMiuMNloce8kzP9LbvSQzdPu2Cgf2u6oXrIZKrUEJH7zptzgRLJnmAZxuzrMCcvepCYV1dMWzxRwpmho5IW9mZQtlERddUFIiWP9dYbtT8ZakYkzg43vuaybjpP88EtiHuQVrjn9kFvekDNsJiB63kshaXLlOyQbK2VovbTDrEUiN2gIl2fbwIbHRq%2Fcni8GUYs1rJY4hMXwZ1UXBgn6cpgwfufoilBXAkpZA3SOPl22%2BKXomvgvkdztYySojDI4f3aBGhVxM78olc4oN%2B2X78cxI5AjGWER%2Fh1V%2Fm6EY6Wi20k6vjBYCL6VejITsqoSkG04Vhr0LOwYrY2twiqh0GJBdyiysP%2Bhb94WJPNDoRPZ6GMIG5lL0GOqUBpqo5TLmBP1G6QkpVGYVZ7c72dDjRV0DOneyuijdk0suxkWaJn9Oa0pTlimfJSDW4D%2BhgdNxAYRadI4%2BJBhMpjASLN%2F5WtbAyTDRpz0QTDt%2FZ3ghy1FhtPgVszhaUgaFfl1congMnyO0v2jesE2oLhSdm8PWWK%2B34NWCs6GQRpplQ9gOv4tRAGIV2Gg%2BLio6zyeM0SCSqLVNKSFCK2zpRUWlg8Qtu&X-Amz-Signature=8ebc47d09455e09a9889826ad77a3482f499a8e8a3a641e4c650143fd64c239d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
