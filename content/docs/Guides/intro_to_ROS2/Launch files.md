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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHWEPL7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfe5EH8XHroA5SN3fVnQOFZXQHxBZk4e1PZwo3CVSY0AIhAM%2FzFqWI6peyZscZ%2FOGR1kRWap0D7js%2F6iYqQvipEuZnKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdGzH77lbp%2BjjOwigq3ANBmGzjAU5SO7GCO08g%2BlF8pqi1WIgeXrHPP9Gm6RrKLuGyvZ%2Bt6OEi2xF7N6ViV%2BaVa1IEi9jY69m%2FnL671vvdo71xmrxyj4RJpiXnIOusavMng77xpALQ7EEbGxSGU1gKf4awf0OG4k%2Fqba8irk0QNIzKiRCKo7aUrwL5tSEKtMFrpRzd39DbMoe9OYTXYCbIN3wWKV4VP8swuBMRDb0b6YhdggmHu1fo3a18YRRDUqRFaLrooNrNscL6JwbnhKDj22i7uMmO%2FmiB74eQ0dFeHx%2BsD%2BUKA8p065SAfYUiar2QZ7in2Vn7FUBQBe9%2BGpnKGH1c1tTcdS2UniDaE6z%2BLO%2BuCTg7u7CP8hXCr8bxwecYdZ8o5ujAm6RTuD56U9087QlX3UafpOn8lbOaXkSRgCXLxYyQH0KOiNFrtoE5TyYt0GFd8WafgOKNJVuOOWklkmKvKqBFkptZDlsUgSTAYQYwNqOko9nSUkCPc44Bbdh2mduyowE%2BPta8EejawmyhZVFP9GVHsPALy%2FS%2BpfZkGCkuBZWXDgM4yXfZpDXCyU00fxCxYNXEorZE%2BMRJ7Zmd%2FY1xdmenWIDq2nGUSa8NTTNuuW3MdqbECtyEGLh05me%2BEsZs6dodKDr7lTCHp5bFBjqkASji75B39YbSPINdCEB0LCTxcXUAzKiWt5HBRBOND1Wpmn7xtVc5dU56n1CSOa9V5AvI9Gq9tpO2sSi6vYJ5tuaOAQ7TROp%2F1m6MXFqS1c93IZhCbjGzoYfXzol%2BtqRBysiWbW4UsILXVuHkdKGzw9viUi6oQtbJvZiXY0OlRgS3EMhlCqm2pbjV9dGb73w8wa9yMk42fCpuZvxShir9wxBRKUao&X-Amz-Signature=81f27bc33a093ba0a274762eb95d73ee966c87cdd55e158cc4472a5eb41591d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHWEPL7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfe5EH8XHroA5SN3fVnQOFZXQHxBZk4e1PZwo3CVSY0AIhAM%2FzFqWI6peyZscZ%2FOGR1kRWap0D7js%2F6iYqQvipEuZnKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdGzH77lbp%2BjjOwigq3ANBmGzjAU5SO7GCO08g%2BlF8pqi1WIgeXrHPP9Gm6RrKLuGyvZ%2Bt6OEi2xF7N6ViV%2BaVa1IEi9jY69m%2FnL671vvdo71xmrxyj4RJpiXnIOusavMng77xpALQ7EEbGxSGU1gKf4awf0OG4k%2Fqba8irk0QNIzKiRCKo7aUrwL5tSEKtMFrpRzd39DbMoe9OYTXYCbIN3wWKV4VP8swuBMRDb0b6YhdggmHu1fo3a18YRRDUqRFaLrooNrNscL6JwbnhKDj22i7uMmO%2FmiB74eQ0dFeHx%2BsD%2BUKA8p065SAfYUiar2QZ7in2Vn7FUBQBe9%2BGpnKGH1c1tTcdS2UniDaE6z%2BLO%2BuCTg7u7CP8hXCr8bxwecYdZ8o5ujAm6RTuD56U9087QlX3UafpOn8lbOaXkSRgCXLxYyQH0KOiNFrtoE5TyYt0GFd8WafgOKNJVuOOWklkmKvKqBFkptZDlsUgSTAYQYwNqOko9nSUkCPc44Bbdh2mduyowE%2BPta8EejawmyhZVFP9GVHsPALy%2FS%2BpfZkGCkuBZWXDgM4yXfZpDXCyU00fxCxYNXEorZE%2BMRJ7Zmd%2FY1xdmenWIDq2nGUSa8NTTNuuW3MdqbECtyEGLh05me%2BEsZs6dodKDr7lTCHp5bFBjqkASji75B39YbSPINdCEB0LCTxcXUAzKiWt5HBRBOND1Wpmn7xtVc5dU56n1CSOa9V5AvI9Gq9tpO2sSi6vYJ5tuaOAQ7TROp%2F1m6MXFqS1c93IZhCbjGzoYfXzol%2BtqRBysiWbW4UsILXVuHkdKGzw9viUi6oQtbJvZiXY0OlRgS3EMhlCqm2pbjV9dGb73w8wa9yMk42fCpuZvxShir9wxBRKUao&X-Amz-Signature=9b956678030adc7baed8e9146dabc3a9e7ca1531a18a89cf9ddd8adbadde1ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHWEPL7%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfe5EH8XHroA5SN3fVnQOFZXQHxBZk4e1PZwo3CVSY0AIhAM%2FzFqWI6peyZscZ%2FOGR1kRWap0D7js%2F6iYqQvipEuZnKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdGzH77lbp%2BjjOwigq3ANBmGzjAU5SO7GCO08g%2BlF8pqi1WIgeXrHPP9Gm6RrKLuGyvZ%2Bt6OEi2xF7N6ViV%2BaVa1IEi9jY69m%2FnL671vvdo71xmrxyj4RJpiXnIOusavMng77xpALQ7EEbGxSGU1gKf4awf0OG4k%2Fqba8irk0QNIzKiRCKo7aUrwL5tSEKtMFrpRzd39DbMoe9OYTXYCbIN3wWKV4VP8swuBMRDb0b6YhdggmHu1fo3a18YRRDUqRFaLrooNrNscL6JwbnhKDj22i7uMmO%2FmiB74eQ0dFeHx%2BsD%2BUKA8p065SAfYUiar2QZ7in2Vn7FUBQBe9%2BGpnKGH1c1tTcdS2UniDaE6z%2BLO%2BuCTg7u7CP8hXCr8bxwecYdZ8o5ujAm6RTuD56U9087QlX3UafpOn8lbOaXkSRgCXLxYyQH0KOiNFrtoE5TyYt0GFd8WafgOKNJVuOOWklkmKvKqBFkptZDlsUgSTAYQYwNqOko9nSUkCPc44Bbdh2mduyowE%2BPta8EejawmyhZVFP9GVHsPALy%2FS%2BpfZkGCkuBZWXDgM4yXfZpDXCyU00fxCxYNXEorZE%2BMRJ7Zmd%2FY1xdmenWIDq2nGUSa8NTTNuuW3MdqbECtyEGLh05me%2BEsZs6dodKDr7lTCHp5bFBjqkASji75B39YbSPINdCEB0LCTxcXUAzKiWt5HBRBOND1Wpmn7xtVc5dU56n1CSOa9V5AvI9Gq9tpO2sSi6vYJ5tuaOAQ7TROp%2F1m6MXFqS1c93IZhCbjGzoYfXzol%2BtqRBysiWbW4UsILXVuHkdKGzw9viUi6oQtbJvZiXY0OlRgS3EMhlCqm2pbjV9dGb73w8wa9yMk42fCpuZvxShir9wxBRKUao&X-Amz-Signature=32136a69154356f7e16ba289659478f22b81ef9593b2ff4d7dd7296cbbf4a70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
