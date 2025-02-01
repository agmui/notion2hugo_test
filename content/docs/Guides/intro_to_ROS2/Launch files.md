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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IG7VFZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxaNf7vWbHxMyi36TKgfZDw6F67yg7vfjvaKBci%2FDg9AIgGGsQe3URscJhmo1l6B5%2FnlakGzd%2FC62PCDPNcOeoOAQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo2bFqNIuq4z3B1GCrcA3HEoIQnST0nz4PmjG9vSPBOPckvPHZCIqw2tBp%2FgLN37zIbFKY6x%2Fq2Tpft2ftYyzf9GT7W0Ewsu47sv922fBmnLAhEKeGXaZVXi61m0zF8c%2FMGnEVxFxWtBvWEE1nhxHbxWGY5b4zg7OYqQEkki%2BxDu52kSiuxKU84JOS1IW%2BUCqs5mE%2FqvjRZQ3tqxaU6JFlHneCzVzzf5xfJdJ%2Fz4N1gfobtHru5KCtb6IXD1baekNudii4vkQrItc5YnUOJnX9d594Yy440VV1x1AlMhRCRFxjIobs61bkTvkymG6eqxflazPXxv%2BXN9CXb3ym6XaV%2BeFy61b3wDfp2S1mTujL5MZ4i%2BPNf8kJXb5kb7JG0TBFMkGKA%2BX036am1GrhSA%2F%2F4iEiAIlRbrpnsR7xjYlq3O5QU%2BH3wQTkoD4GiHMmm0hHRhfgMBx%2Bc%2Fb6NZJugjTHMJY68p74Y%2BGersoZ54Z3oqjGbRl1on6xhYdjhDsyDcmyFxLUS%2B3MjAcgtpkUVNSgKfM4KdRudds12IPF2e3wa0Utipngxw1VdFj5paPWWKZ2uogTL3ZoGbrba%2Fg3JE7UsRKLdSenj%2FET%2FH7rTbEDzW7blFmlHfxkW7FgpIovAdJhNn3QDg3317zSbMOel97wGOqUBuNMr4zgvTQ7woNfAgb%2FnF3imvHpVB7waTeFOj%2B%2BeOYmnjeBQrGL0Xy%2FS4f8ohe%2FKoI8gZsoWCc2DKr9A5trN1g3l1dhQP2YJsgI9UxW7cCCnKkEQjLkwWdTWhuVFDXB89aopKW%2FLi7UAidhayXjsu8nuedXvGYk2wFacnxcaFupHmfQEkEm%2FTyxBrJQ%2F3vahBko%2F0sEVKRSy9IcipuTG8ZdYNNOt&X-Amz-Signature=96593f77c40a676f7ffca237730b6e7c79e0b6efbc417148a1e07688d9edef45&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IG7VFZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxaNf7vWbHxMyi36TKgfZDw6F67yg7vfjvaKBci%2FDg9AIgGGsQe3URscJhmo1l6B5%2FnlakGzd%2FC62PCDPNcOeoOAQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo2bFqNIuq4z3B1GCrcA3HEoIQnST0nz4PmjG9vSPBOPckvPHZCIqw2tBp%2FgLN37zIbFKY6x%2Fq2Tpft2ftYyzf9GT7W0Ewsu47sv922fBmnLAhEKeGXaZVXi61m0zF8c%2FMGnEVxFxWtBvWEE1nhxHbxWGY5b4zg7OYqQEkki%2BxDu52kSiuxKU84JOS1IW%2BUCqs5mE%2FqvjRZQ3tqxaU6JFlHneCzVzzf5xfJdJ%2Fz4N1gfobtHru5KCtb6IXD1baekNudii4vkQrItc5YnUOJnX9d594Yy440VV1x1AlMhRCRFxjIobs61bkTvkymG6eqxflazPXxv%2BXN9CXb3ym6XaV%2BeFy61b3wDfp2S1mTujL5MZ4i%2BPNf8kJXb5kb7JG0TBFMkGKA%2BX036am1GrhSA%2F%2F4iEiAIlRbrpnsR7xjYlq3O5QU%2BH3wQTkoD4GiHMmm0hHRhfgMBx%2Bc%2Fb6NZJugjTHMJY68p74Y%2BGersoZ54Z3oqjGbRl1on6xhYdjhDsyDcmyFxLUS%2B3MjAcgtpkUVNSgKfM4KdRudds12IPF2e3wa0Utipngxw1VdFj5paPWWKZ2uogTL3ZoGbrba%2Fg3JE7UsRKLdSenj%2FET%2FH7rTbEDzW7blFmlHfxkW7FgpIovAdJhNn3QDg3317zSbMOel97wGOqUBuNMr4zgvTQ7woNfAgb%2FnF3imvHpVB7waTeFOj%2B%2BeOYmnjeBQrGL0Xy%2FS4f8ohe%2FKoI8gZsoWCc2DKr9A5trN1g3l1dhQP2YJsgI9UxW7cCCnKkEQjLkwWdTWhuVFDXB89aopKW%2FLi7UAidhayXjsu8nuedXvGYk2wFacnxcaFupHmfQEkEm%2FTyxBrJQ%2F3vahBko%2F0sEVKRSy9IcipuTG8ZdYNNOt&X-Amz-Signature=8f2f6cbbfc20805312e8e6e5de27b259b5bd15dcc4b95a28603dc44c014f3b33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IG7VFZ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T121151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxaNf7vWbHxMyi36TKgfZDw6F67yg7vfjvaKBci%2FDg9AIgGGsQe3URscJhmo1l6B5%2FnlakGzd%2FC62PCDPNcOeoOAQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFo2bFqNIuq4z3B1GCrcA3HEoIQnST0nz4PmjG9vSPBOPckvPHZCIqw2tBp%2FgLN37zIbFKY6x%2Fq2Tpft2ftYyzf9GT7W0Ewsu47sv922fBmnLAhEKeGXaZVXi61m0zF8c%2FMGnEVxFxWtBvWEE1nhxHbxWGY5b4zg7OYqQEkki%2BxDu52kSiuxKU84JOS1IW%2BUCqs5mE%2FqvjRZQ3tqxaU6JFlHneCzVzzf5xfJdJ%2Fz4N1gfobtHru5KCtb6IXD1baekNudii4vkQrItc5YnUOJnX9d594Yy440VV1x1AlMhRCRFxjIobs61bkTvkymG6eqxflazPXxv%2BXN9CXb3ym6XaV%2BeFy61b3wDfp2S1mTujL5MZ4i%2BPNf8kJXb5kb7JG0TBFMkGKA%2BX036am1GrhSA%2F%2F4iEiAIlRbrpnsR7xjYlq3O5QU%2BH3wQTkoD4GiHMmm0hHRhfgMBx%2Bc%2Fb6NZJugjTHMJY68p74Y%2BGersoZ54Z3oqjGbRl1on6xhYdjhDsyDcmyFxLUS%2B3MjAcgtpkUVNSgKfM4KdRudds12IPF2e3wa0Utipngxw1VdFj5paPWWKZ2uogTL3ZoGbrba%2Fg3JE7UsRKLdSenj%2FET%2FH7rTbEDzW7blFmlHfxkW7FgpIovAdJhNn3QDg3317zSbMOel97wGOqUBuNMr4zgvTQ7woNfAgb%2FnF3imvHpVB7waTeFOj%2B%2BeOYmnjeBQrGL0Xy%2FS4f8ohe%2FKoI8gZsoWCc2DKr9A5trN1g3l1dhQP2YJsgI9UxW7cCCnKkEQjLkwWdTWhuVFDXB89aopKW%2FLi7UAidhayXjsu8nuedXvGYk2wFacnxcaFupHmfQEkEm%2FTyxBrJQ%2F3vahBko%2F0sEVKRSy9IcipuTG8ZdYNNOt&X-Amz-Signature=af7d1857945b00152a4589c353eed203fe3dff07f88dc817024415a0c1ea0935&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
