---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUZFFVU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOjNRHHblKhJ%2FqD7uxg7N%2By0qBsIzmmWIo2J2MqB%2FZ0AiEA3dSrY%2BGtjVwdl3pQiCVtUSXaSrGzt5ptJ%2Fs7QQY7ISoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiDfuv%2F9EqCPDe%2F0SrcA3HbrBf8F0awj3HL1SAkDvNBY0tk%2BQpSKDhau7JLZS%2FKttCGLwUYTmWnkxAVneTL41bFtwxPPq2suXxsJx%2BwjVnnjwqzK%2BFUSEqFygMHVQn%2F%2BrnYCfphbE%2BC0m57ysUOVibeIrOwpc1kvTItP0bwC0XF%2BzG68Pun9Z2xXZxHms72blIq6AVpO4coxuY6%2FKGGInt3ukF8zQ%2FFxiX4xeNp2opVl%2Bf%2BvoYBxFz9HJsiY3KhnIL3lRRQKFDg8igwF%2BwcLBIsuLSq2A4hPAmUKiHzZzq8GhcMHYgJthO9bDrab%2BDGjxUDStk7ggUgK%2BuyIEQ2aCr0L9Nxqyx7pizQxRJP7RDe%2F72X53ldXEbTlVi7GzM78EvmEJhtl8DrNqWx%2Bdsgmqp3YqbozEHVtssCpuAdehzNx93bNflzhlrFzTuIOx8HN7sJtYWPXR%2FbdOLu7zS2vU68P0XZbioAPH2Kfo%2Bvfvme9J1XJclXFV2ft2PCaVvV%2BydVZSivlZpPEcYxdvu7jqw4yAOltymr0D8hc%2BJdgqeoY4k02kUf48TIdmA%2Bdi4fsXtZKblrPjOmg9X3twBDjPnaGGN0Wz6L8J58QfsbaBvGIgngUNiqOAOfxQRTup0JDGMgtU2b%2BI6MMcx3MJmW48QGOqUBRCxi7e5155CvcBXaFMMEV%2BmaQWrrVquXvN5TSAA6pxuG41%2F87%2FbS94ye%2F4IBanE1Et2cCUzLE%2FinHK3ipQkelz0Ib4JqFGoKjtT2BYZTUU7xOxDziqzzj%2BVg5m2XQgxm3ohRS%2FtbsjqyNaez3Eh7MAaDlEW0bTtnwNplhdK4bDVSB4QavUjTKkdWJQUgAigxmDwSBtPiOQHO33PM3gO4IvmrgVGu&X-Amz-Signature=08bdc716de76d407f06c537d1b18d0af91a649921207382bdb1b7817fe5a2283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUZFFVU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOjNRHHblKhJ%2FqD7uxg7N%2By0qBsIzmmWIo2J2MqB%2FZ0AiEA3dSrY%2BGtjVwdl3pQiCVtUSXaSrGzt5ptJ%2Fs7QQY7ISoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiDfuv%2F9EqCPDe%2F0SrcA3HbrBf8F0awj3HL1SAkDvNBY0tk%2BQpSKDhau7JLZS%2FKttCGLwUYTmWnkxAVneTL41bFtwxPPq2suXxsJx%2BwjVnnjwqzK%2BFUSEqFygMHVQn%2F%2BrnYCfphbE%2BC0m57ysUOVibeIrOwpc1kvTItP0bwC0XF%2BzG68Pun9Z2xXZxHms72blIq6AVpO4coxuY6%2FKGGInt3ukF8zQ%2FFxiX4xeNp2opVl%2Bf%2BvoYBxFz9HJsiY3KhnIL3lRRQKFDg8igwF%2BwcLBIsuLSq2A4hPAmUKiHzZzq8GhcMHYgJthO9bDrab%2BDGjxUDStk7ggUgK%2BuyIEQ2aCr0L9Nxqyx7pizQxRJP7RDe%2F72X53ldXEbTlVi7GzM78EvmEJhtl8DrNqWx%2Bdsgmqp3YqbozEHVtssCpuAdehzNx93bNflzhlrFzTuIOx8HN7sJtYWPXR%2FbdOLu7zS2vU68P0XZbioAPH2Kfo%2Bvfvme9J1XJclXFV2ft2PCaVvV%2BydVZSivlZpPEcYxdvu7jqw4yAOltymr0D8hc%2BJdgqeoY4k02kUf48TIdmA%2Bdi4fsXtZKblrPjOmg9X3twBDjPnaGGN0Wz6L8J58QfsbaBvGIgngUNiqOAOfxQRTup0JDGMgtU2b%2BI6MMcx3MJmW48QGOqUBRCxi7e5155CvcBXaFMMEV%2BmaQWrrVquXvN5TSAA6pxuG41%2F87%2FbS94ye%2F4IBanE1Et2cCUzLE%2FinHK3ipQkelz0Ib4JqFGoKjtT2BYZTUU7xOxDziqzzj%2BVg5m2XQgxm3ohRS%2FtbsjqyNaez3Eh7MAaDlEW0bTtnwNplhdK4bDVSB4QavUjTKkdWJQUgAigxmDwSBtPiOQHO33PM3gO4IvmrgVGu&X-Amz-Signature=d6262dd9d4eaa1b5d107a2b8e3c8fe35c4d9a602ecf7ca59867710bfca2df615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPUZFFVU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOjNRHHblKhJ%2FqD7uxg7N%2By0qBsIzmmWIo2J2MqB%2FZ0AiEA3dSrY%2BGtjVwdl3pQiCVtUSXaSrGzt5ptJ%2Fs7QQY7ISoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiDfuv%2F9EqCPDe%2F0SrcA3HbrBf8F0awj3HL1SAkDvNBY0tk%2BQpSKDhau7JLZS%2FKttCGLwUYTmWnkxAVneTL41bFtwxPPq2suXxsJx%2BwjVnnjwqzK%2BFUSEqFygMHVQn%2F%2BrnYCfphbE%2BC0m57ysUOVibeIrOwpc1kvTItP0bwC0XF%2BzG68Pun9Z2xXZxHms72blIq6AVpO4coxuY6%2FKGGInt3ukF8zQ%2FFxiX4xeNp2opVl%2Bf%2BvoYBxFz9HJsiY3KhnIL3lRRQKFDg8igwF%2BwcLBIsuLSq2A4hPAmUKiHzZzq8GhcMHYgJthO9bDrab%2BDGjxUDStk7ggUgK%2BuyIEQ2aCr0L9Nxqyx7pizQxRJP7RDe%2F72X53ldXEbTlVi7GzM78EvmEJhtl8DrNqWx%2Bdsgmqp3YqbozEHVtssCpuAdehzNx93bNflzhlrFzTuIOx8HN7sJtYWPXR%2FbdOLu7zS2vU68P0XZbioAPH2Kfo%2Bvfvme9J1XJclXFV2ft2PCaVvV%2BydVZSivlZpPEcYxdvu7jqw4yAOltymr0D8hc%2BJdgqeoY4k02kUf48TIdmA%2Bdi4fsXtZKblrPjOmg9X3twBDjPnaGGN0Wz6L8J58QfsbaBvGIgngUNiqOAOfxQRTup0JDGMgtU2b%2BI6MMcx3MJmW48QGOqUBRCxi7e5155CvcBXaFMMEV%2BmaQWrrVquXvN5TSAA6pxuG41%2F87%2FbS94ye%2F4IBanE1Et2cCUzLE%2FinHK3ipQkelz0Ib4JqFGoKjtT2BYZTUU7xOxDziqzzj%2BVg5m2XQgxm3ohRS%2FtbsjqyNaez3Eh7MAaDlEW0bTtnwNplhdK4bDVSB4QavUjTKkdWJQUgAigxmDwSBtPiOQHO33PM3gO4IvmrgVGu&X-Amz-Signature=680501f01efeda8ad63f027a56f2e464ffcc133bc84d8a3ff031210852b218a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
