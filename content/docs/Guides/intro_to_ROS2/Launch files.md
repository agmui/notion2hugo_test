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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX5K6FHJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKsjTIpYTKhZQYx5c2p%2BmGCzP02%2Bu4FZih0bQqpwpMdQIhAP9d1z%2FEYaHu0ebBzTm%2FAkxkryn2HciPL7%2FnMJe49H8uKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb3rBbdegPahoxTbgq3ANwIjO62nyUE9wkZziiZILbJKQLJFQqwGenSbvjb%2FztjOVetnWOq%2BlhKlIumTlX4i0nkNhGQMWP56j5ypWHQA%2BUXHOomw46Bxwhjnpn%2B3csAvkm3UE0g4uaM6e56hy65lbRA3P2Z7c07MJqQ1L3AZAR3GCkb1F2FJVaqMJst6VMUCYADlFnWd%2Fe8a8pDMk8VB5CwEFS6%2Bk%2FIWNvDNj3eXBwpuP%2Bb6sOTQaAifNXNhPw6nZp0dwwEtuDWG%2F%2BgY76QYlq4LxBV51BAYnWB0U7mcSc%2B1CdRe6U7fN23uNwomLVkVPlsT%2BlAHqwJjwikxbGtl8hn3bRa8WTtp1Wb%2BNb9d9e9QvvAqkLkFLaHUliJzJpf%2BVHU%2FHoiX2xwpTrcxE%2Fa0nGvaY1c42KdDB2nuKMA3uOZ3BFjUVsNlgICsBLPbSKEcyFFleqq81Bw0H964xkKps160apa4BG06sM%2Bg33YvqB0X8dXIAesZTsW40ojseL4QFcB2VmYntXF3rJx39eA6BuE2ez81tNtqAQp2xX98jkJKvXkLqoJ7YbR08yHxS%2BdUrJgwFWDBharZy0ZTxmCd8NenOsyO%2F38eiWdGzos%2FpaCRO%2BYUowaT%2B%2Beyf%2BUGxRNjeTtnpnl9ltO5wIzjC1mLq%2FBjqkAXGLzHvTkovqYQ6zU4MOaF2BbydnQ8O1iNfnlXWmoxw1f3AS2h%2FQBbx%2FtUgO6a%2Fniy%2BV%2B3SmPcZeUijWNJtaIHwngCzGsupqFO4h3gn0W4yl%2FIjVFMTlOkdA6EEtZd%2B3fvlOkISdH2wwJbf6T16TLAGjLzqJ2Ue7D%2Boq1evPfSdpmNUkGeKwOlYXXWG6s3oJPI1FtWCc%2F4GS9F%2BUT%2Bb1VaO%2FwnJN&X-Amz-Signature=fc07d75f126810770a65c3d56e3c44083b1cf228c028b17df2d4bc751be170d6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX5K6FHJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKsjTIpYTKhZQYx5c2p%2BmGCzP02%2Bu4FZih0bQqpwpMdQIhAP9d1z%2FEYaHu0ebBzTm%2FAkxkryn2HciPL7%2FnMJe49H8uKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb3rBbdegPahoxTbgq3ANwIjO62nyUE9wkZziiZILbJKQLJFQqwGenSbvjb%2FztjOVetnWOq%2BlhKlIumTlX4i0nkNhGQMWP56j5ypWHQA%2BUXHOomw46Bxwhjnpn%2B3csAvkm3UE0g4uaM6e56hy65lbRA3P2Z7c07MJqQ1L3AZAR3GCkb1F2FJVaqMJst6VMUCYADlFnWd%2Fe8a8pDMk8VB5CwEFS6%2Bk%2FIWNvDNj3eXBwpuP%2Bb6sOTQaAifNXNhPw6nZp0dwwEtuDWG%2F%2BgY76QYlq4LxBV51BAYnWB0U7mcSc%2B1CdRe6U7fN23uNwomLVkVPlsT%2BlAHqwJjwikxbGtl8hn3bRa8WTtp1Wb%2BNb9d9e9QvvAqkLkFLaHUliJzJpf%2BVHU%2FHoiX2xwpTrcxE%2Fa0nGvaY1c42KdDB2nuKMA3uOZ3BFjUVsNlgICsBLPbSKEcyFFleqq81Bw0H964xkKps160apa4BG06sM%2Bg33YvqB0X8dXIAesZTsW40ojseL4QFcB2VmYntXF3rJx39eA6BuE2ez81tNtqAQp2xX98jkJKvXkLqoJ7YbR08yHxS%2BdUrJgwFWDBharZy0ZTxmCd8NenOsyO%2F38eiWdGzos%2FpaCRO%2BYUowaT%2B%2Beyf%2BUGxRNjeTtnpnl9ltO5wIzjC1mLq%2FBjqkAXGLzHvTkovqYQ6zU4MOaF2BbydnQ8O1iNfnlXWmoxw1f3AS2h%2FQBbx%2FtUgO6a%2Fniy%2BV%2B3SmPcZeUijWNJtaIHwngCzGsupqFO4h3gn0W4yl%2FIjVFMTlOkdA6EEtZd%2B3fvlOkISdH2wwJbf6T16TLAGjLzqJ2Ue7D%2Boq1evPfSdpmNUkGeKwOlYXXWG6s3oJPI1FtWCc%2F4GS9F%2BUT%2Bb1VaO%2FwnJN&X-Amz-Signature=a9d67fc513dc0fff168f5015b7547f5aa4f99c41544ae9a26c504350a29c0119&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX5K6FHJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKsjTIpYTKhZQYx5c2p%2BmGCzP02%2Bu4FZih0bQqpwpMdQIhAP9d1z%2FEYaHu0ebBzTm%2FAkxkryn2HciPL7%2FnMJe49H8uKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzb3rBbdegPahoxTbgq3ANwIjO62nyUE9wkZziiZILbJKQLJFQqwGenSbvjb%2FztjOVetnWOq%2BlhKlIumTlX4i0nkNhGQMWP56j5ypWHQA%2BUXHOomw46Bxwhjnpn%2B3csAvkm3UE0g4uaM6e56hy65lbRA3P2Z7c07MJqQ1L3AZAR3GCkb1F2FJVaqMJst6VMUCYADlFnWd%2Fe8a8pDMk8VB5CwEFS6%2Bk%2FIWNvDNj3eXBwpuP%2Bb6sOTQaAifNXNhPw6nZp0dwwEtuDWG%2F%2BgY76QYlq4LxBV51BAYnWB0U7mcSc%2B1CdRe6U7fN23uNwomLVkVPlsT%2BlAHqwJjwikxbGtl8hn3bRa8WTtp1Wb%2BNb9d9e9QvvAqkLkFLaHUliJzJpf%2BVHU%2FHoiX2xwpTrcxE%2Fa0nGvaY1c42KdDB2nuKMA3uOZ3BFjUVsNlgICsBLPbSKEcyFFleqq81Bw0H964xkKps160apa4BG06sM%2Bg33YvqB0X8dXIAesZTsW40ojseL4QFcB2VmYntXF3rJx39eA6BuE2ez81tNtqAQp2xX98jkJKvXkLqoJ7YbR08yHxS%2BdUrJgwFWDBharZy0ZTxmCd8NenOsyO%2F38eiWdGzos%2FpaCRO%2BYUowaT%2B%2Beyf%2BUGxRNjeTtnpnl9ltO5wIzjC1mLq%2FBjqkAXGLzHvTkovqYQ6zU4MOaF2BbydnQ8O1iNfnlXWmoxw1f3AS2h%2FQBbx%2FtUgO6a%2Fniy%2BV%2B3SmPcZeUijWNJtaIHwngCzGsupqFO4h3gn0W4yl%2FIjVFMTlOkdA6EEtZd%2B3fvlOkISdH2wwJbf6T16TLAGjLzqJ2Ue7D%2Boq1evPfSdpmNUkGeKwOlYXXWG6s3oJPI1FtWCc%2F4GS9F%2BUT%2Bb1VaO%2FwnJN&X-Amz-Signature=48a247384528957230aa5e73f60ef37ddb044a099eb3e7e4c98f45f28cd36520&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
