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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIQFQV6Q%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhGW7v3BUy6RLzgggPfbANWkp%2FLib24jjMlNw8ZyOvWAiAHBmg4nKLpPbIi1a0blFYc5Pi6OkXT2WB3WqwiJKgaiSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMAeRHfYGL%2Bag9Jqj2KtwDr8y8QjHp4vk85I0HlviJ38rYrGcm%2BJU4LvxCG%2Fw3vLY%2BxAzWkNguLncXpM9wzuGauVYqcrfCeu%2FS51VCDBw%2FXn1%2FiuBUocp4f4O2F8Z1XnpTAbOf6LZL6jj8znh5l79Wg68Ooi9P2XSPr9UWho9lc52am1nFOl77IDJ8ciH6zIVMfDzrcrkhqKhP5ZKhBClZxJ1vHLhY5VztW7DhuFuQADj%2FEdwn2pNkOmdTcVva1dYtQDE0RdvMtnwf3QyhVi%2FT3cxhviQnL%2FY3lMcgC2GgFJ7hPn%2FoGNY9a%2BW6mKsX0mznDzr0HZce%2BRhhwdGCJk6Nsfx2%2BkC%2FbHju0bFoZ%2BzZBcGPgOu3CH2XxQkgh%2B30FvksWzsW8XakSKNLDVxZTyPosDiektscMSiAcLXOChcY2FiXLvnGzQ86XKoqlPCJ9E7nKPqua%2FL16YdJBGgdsLoj%2BwEfwFEC9GhC8FsZsINVCcFLFSM%2FaC0OtK2tqvdOJNup4aP%2BlEI%2FtbJa3NreRSmESy4a4kAtcAbr3sU86I9e2wHAnaA6zSDNpTeAoIIwmzDRIN%2FTAqPnYk9VYiHD5EVaCc5CDB65cVpK6OaIf98oD691oQaBiCsVw4%2BRmEGA9jMqnY%2Bxsih5eg64rx4whPKRvwY6pgFX2rrRyHp1xLF%2B6HXuvkaM4mRoPcJ91LhkgrBftq1A8OCLguWopnRLupgjISvCMSm2hNUxxP7dQgw%2F6aFPE1jy8uQeFw9BOZ2YRhJJYdAgwfDrRGUGQwAVSLc%2FmhP0pRCaQ%2BmSOb%2B0JbCtjNHMiJCQdYj8%2FWJlcb7qguiLRs8FcZUJEm9amKEkaPvr2EJxZRxps0nCfXftF4Sw312SfMweVEkMWxlb&X-Amz-Signature=5f515db4281b78ed39bcc2fe32c87891eddcc27d8679fba8deee7c4a80783544&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIQFQV6Q%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhGW7v3BUy6RLzgggPfbANWkp%2FLib24jjMlNw8ZyOvWAiAHBmg4nKLpPbIi1a0blFYc5Pi6OkXT2WB3WqwiJKgaiSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMAeRHfYGL%2Bag9Jqj2KtwDr8y8QjHp4vk85I0HlviJ38rYrGcm%2BJU4LvxCG%2Fw3vLY%2BxAzWkNguLncXpM9wzuGauVYqcrfCeu%2FS51VCDBw%2FXn1%2FiuBUocp4f4O2F8Z1XnpTAbOf6LZL6jj8znh5l79Wg68Ooi9P2XSPr9UWho9lc52am1nFOl77IDJ8ciH6zIVMfDzrcrkhqKhP5ZKhBClZxJ1vHLhY5VztW7DhuFuQADj%2FEdwn2pNkOmdTcVva1dYtQDE0RdvMtnwf3QyhVi%2FT3cxhviQnL%2FY3lMcgC2GgFJ7hPn%2FoGNY9a%2BW6mKsX0mznDzr0HZce%2BRhhwdGCJk6Nsfx2%2BkC%2FbHju0bFoZ%2BzZBcGPgOu3CH2XxQkgh%2B30FvksWzsW8XakSKNLDVxZTyPosDiektscMSiAcLXOChcY2FiXLvnGzQ86XKoqlPCJ9E7nKPqua%2FL16YdJBGgdsLoj%2BwEfwFEC9GhC8FsZsINVCcFLFSM%2FaC0OtK2tqvdOJNup4aP%2BlEI%2FtbJa3NreRSmESy4a4kAtcAbr3sU86I9e2wHAnaA6zSDNpTeAoIIwmzDRIN%2FTAqPnYk9VYiHD5EVaCc5CDB65cVpK6OaIf98oD691oQaBiCsVw4%2BRmEGA9jMqnY%2Bxsih5eg64rx4whPKRvwY6pgFX2rrRyHp1xLF%2B6HXuvkaM4mRoPcJ91LhkgrBftq1A8OCLguWopnRLupgjISvCMSm2hNUxxP7dQgw%2F6aFPE1jy8uQeFw9BOZ2YRhJJYdAgwfDrRGUGQwAVSLc%2FmhP0pRCaQ%2BmSOb%2B0JbCtjNHMiJCQdYj8%2FWJlcb7qguiLRs8FcZUJEm9amKEkaPvr2EJxZRxps0nCfXftF4Sw312SfMweVEkMWxlb&X-Amz-Signature=0764cb0e4299300fb36c2a8df66c6b9620887ecf0e4fbd7792df3341b8339af2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIQFQV6Q%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhGW7v3BUy6RLzgggPfbANWkp%2FLib24jjMlNw8ZyOvWAiAHBmg4nKLpPbIi1a0blFYc5Pi6OkXT2WB3WqwiJKgaiSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMAeRHfYGL%2Bag9Jqj2KtwDr8y8QjHp4vk85I0HlviJ38rYrGcm%2BJU4LvxCG%2Fw3vLY%2BxAzWkNguLncXpM9wzuGauVYqcrfCeu%2FS51VCDBw%2FXn1%2FiuBUocp4f4O2F8Z1XnpTAbOf6LZL6jj8znh5l79Wg68Ooi9P2XSPr9UWho9lc52am1nFOl77IDJ8ciH6zIVMfDzrcrkhqKhP5ZKhBClZxJ1vHLhY5VztW7DhuFuQADj%2FEdwn2pNkOmdTcVva1dYtQDE0RdvMtnwf3QyhVi%2FT3cxhviQnL%2FY3lMcgC2GgFJ7hPn%2FoGNY9a%2BW6mKsX0mznDzr0HZce%2BRhhwdGCJk6Nsfx2%2BkC%2FbHju0bFoZ%2BzZBcGPgOu3CH2XxQkgh%2B30FvksWzsW8XakSKNLDVxZTyPosDiektscMSiAcLXOChcY2FiXLvnGzQ86XKoqlPCJ9E7nKPqua%2FL16YdJBGgdsLoj%2BwEfwFEC9GhC8FsZsINVCcFLFSM%2FaC0OtK2tqvdOJNup4aP%2BlEI%2FtbJa3NreRSmESy4a4kAtcAbr3sU86I9e2wHAnaA6zSDNpTeAoIIwmzDRIN%2FTAqPnYk9VYiHD5EVaCc5CDB65cVpK6OaIf98oD691oQaBiCsVw4%2BRmEGA9jMqnY%2Bxsih5eg64rx4whPKRvwY6pgFX2rrRyHp1xLF%2B6HXuvkaM4mRoPcJ91LhkgrBftq1A8OCLguWopnRLupgjISvCMSm2hNUxxP7dQgw%2F6aFPE1jy8uQeFw9BOZ2YRhJJYdAgwfDrRGUGQwAVSLc%2FmhP0pRCaQ%2BmSOb%2B0JbCtjNHMiJCQdYj8%2FWJlcb7qguiLRs8FcZUJEm9amKEkaPvr2EJxZRxps0nCfXftF4Sw312SfMweVEkMWxlb&X-Amz-Signature=e8ece5f6fb1632a4e616ab64a26bdffe180cff9ed9f17ce1860c66c5d2a33db3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
