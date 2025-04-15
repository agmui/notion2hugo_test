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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3IKMLJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDl6qvXX3tja%2FQcrHTvDXPHPGY9%2BLx%2FXwt0nI03FeXEiAiBFPBoKqvr0q8CrniIH9hy0eIpreX%2FARRY8nJbZbZCfiir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMEprtVJU2lAeSwi6AKtwD%2B%2BR2PS9YIgsdnz1TRDWLWm4%2F%2BmcMgCwNVj8h11QofXC9UbANLHuFLq7izTAsozH%2FOxT5QEskvDfxS7xky7MMILiiqxdAXOl%2BBIcB%2FjeTdxrRaqMoHKaN3WGSO9EzOY7oJND7NhI%2BcCXI4KszDp%2Bp6vdCw2WGEXApJGYTwjoHCkLVIkPYXXTC1Vlc0dXi8WZmpjYvGFQ0mrcY0F4ev8MWkV%2BvFWSjwCJdnQoJVm9NX4Hejqvs3pbKVKTtj%2BKPzU%2F8XNuCDpthXnU1N30MgGgYt9CBiLNoA0bC5ekFq3XdC%2B1kAlY1Cj85WmycTtmSDTzz%2FJoVI1o9sdESu6WSrdW8RJ%2Bqa0wJds6QkfIhzPWEU8OZB6ZRwbxeKfwHSOWdGFpTe12qpi0FCgqRpOqx5Ex%2FnIChVZcp9i0M7nTyYQAxZW9ZCbDqIBe92ti41hdPkva00lCASv8ViIp6HD%2BCtc5KOpMsHsEdypMajFdpnlmNnS%2B%2Fp5%2FCXcjgAOzou3dJ3Ga%2Bxt8%2FbDNKAID%2FCsS%2F0rh2GjtKU2P00qXIC0XSN9TiHAl3XoCXJ7NfNanJ0QJhXi250gqT1L0UuFUucP8ZDrkwC%2FYjpbRVeY6PORdJazJYU0nJPJJnWqx0rF42xgcw8db6vwY6pgEHvzThqls1CRiKDDYQc0Dj8Nk9TxSgtJEG3hnW3NOkNwXHniJJjbmlUHvg%2FN2PFZyZya5TIyZetY8zbT4a48zP%2FI0gx3SNd%2FijH3%2FitTCfbMWvaX15HJEtAODxJ9Dc1ZI2MFtex3MmDweo3ty4YDVCe6D7QisjGbNpZZKLJ19rjkhJAUYxNohlH9E%2FKzbJi3nSVFqIYvgbPOUzgT5wf3EBr0wOk6ql&X-Amz-Signature=f6e5d5f60de8c0583ebaad74b964561f337f5698044fbbe4a988cd1f5cbe4bea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3IKMLJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDl6qvXX3tja%2FQcrHTvDXPHPGY9%2BLx%2FXwt0nI03FeXEiAiBFPBoKqvr0q8CrniIH9hy0eIpreX%2FARRY8nJbZbZCfiir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMEprtVJU2lAeSwi6AKtwD%2B%2BR2PS9YIgsdnz1TRDWLWm4%2F%2BmcMgCwNVj8h11QofXC9UbANLHuFLq7izTAsozH%2FOxT5QEskvDfxS7xky7MMILiiqxdAXOl%2BBIcB%2FjeTdxrRaqMoHKaN3WGSO9EzOY7oJND7NhI%2BcCXI4KszDp%2Bp6vdCw2WGEXApJGYTwjoHCkLVIkPYXXTC1Vlc0dXi8WZmpjYvGFQ0mrcY0F4ev8MWkV%2BvFWSjwCJdnQoJVm9NX4Hejqvs3pbKVKTtj%2BKPzU%2F8XNuCDpthXnU1N30MgGgYt9CBiLNoA0bC5ekFq3XdC%2B1kAlY1Cj85WmycTtmSDTzz%2FJoVI1o9sdESu6WSrdW8RJ%2Bqa0wJds6QkfIhzPWEU8OZB6ZRwbxeKfwHSOWdGFpTe12qpi0FCgqRpOqx5Ex%2FnIChVZcp9i0M7nTyYQAxZW9ZCbDqIBe92ti41hdPkva00lCASv8ViIp6HD%2BCtc5KOpMsHsEdypMajFdpnlmNnS%2B%2Fp5%2FCXcjgAOzou3dJ3Ga%2Bxt8%2FbDNKAID%2FCsS%2F0rh2GjtKU2P00qXIC0XSN9TiHAl3XoCXJ7NfNanJ0QJhXi250gqT1L0UuFUucP8ZDrkwC%2FYjpbRVeY6PORdJazJYU0nJPJJnWqx0rF42xgcw8db6vwY6pgEHvzThqls1CRiKDDYQc0Dj8Nk9TxSgtJEG3hnW3NOkNwXHniJJjbmlUHvg%2FN2PFZyZya5TIyZetY8zbT4a48zP%2FI0gx3SNd%2FijH3%2FitTCfbMWvaX15HJEtAODxJ9Dc1ZI2MFtex3MmDweo3ty4YDVCe6D7QisjGbNpZZKLJ19rjkhJAUYxNohlH9E%2FKzbJi3nSVFqIYvgbPOUzgT5wf3EBr0wOk6ql&X-Amz-Signature=30d1011c69ed2550c4a733a0f48b51e803aa1ff749d7aec32644bbb83f73ec35&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D3IKMLJ%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDl6qvXX3tja%2FQcrHTvDXPHPGY9%2BLx%2FXwt0nI03FeXEiAiBFPBoKqvr0q8CrniIH9hy0eIpreX%2FARRY8nJbZbZCfiir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMEprtVJU2lAeSwi6AKtwD%2B%2BR2PS9YIgsdnz1TRDWLWm4%2F%2BmcMgCwNVj8h11QofXC9UbANLHuFLq7izTAsozH%2FOxT5QEskvDfxS7xky7MMILiiqxdAXOl%2BBIcB%2FjeTdxrRaqMoHKaN3WGSO9EzOY7oJND7NhI%2BcCXI4KszDp%2Bp6vdCw2WGEXApJGYTwjoHCkLVIkPYXXTC1Vlc0dXi8WZmpjYvGFQ0mrcY0F4ev8MWkV%2BvFWSjwCJdnQoJVm9NX4Hejqvs3pbKVKTtj%2BKPzU%2F8XNuCDpthXnU1N30MgGgYt9CBiLNoA0bC5ekFq3XdC%2B1kAlY1Cj85WmycTtmSDTzz%2FJoVI1o9sdESu6WSrdW8RJ%2Bqa0wJds6QkfIhzPWEU8OZB6ZRwbxeKfwHSOWdGFpTe12qpi0FCgqRpOqx5Ex%2FnIChVZcp9i0M7nTyYQAxZW9ZCbDqIBe92ti41hdPkva00lCASv8ViIp6HD%2BCtc5KOpMsHsEdypMajFdpnlmNnS%2B%2Fp5%2FCXcjgAOzou3dJ3Ga%2Bxt8%2FbDNKAID%2FCsS%2F0rh2GjtKU2P00qXIC0XSN9TiHAl3XoCXJ7NfNanJ0QJhXi250gqT1L0UuFUucP8ZDrkwC%2FYjpbRVeY6PORdJazJYU0nJPJJnWqx0rF42xgcw8db6vwY6pgEHvzThqls1CRiKDDYQc0Dj8Nk9TxSgtJEG3hnW3NOkNwXHniJJjbmlUHvg%2FN2PFZyZya5TIyZetY8zbT4a48zP%2FI0gx3SNd%2FijH3%2FitTCfbMWvaX15HJEtAODxJ9Dc1ZI2MFtex3MmDweo3ty4YDVCe6D7QisjGbNpZZKLJ19rjkhJAUYxNohlH9E%2FKzbJi3nSVFqIYvgbPOUzgT5wf3EBr0wOk6ql&X-Amz-Signature=b84343f62b00d779351bd88b505c52468389cd82e58646da75b8311382761e87&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
