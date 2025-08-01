---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5FPHL6A%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG44Hc3JscSC%2FpLXaYtfOrIn9Zthw2Ct1IywIbnL%2BLfOAiAzbSkB%2FXuSAXM2YeUWq%2BY1PVvuH5OUCNucjWpEpmcDbyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrSJm0z6hTWhZaKzFKtwD19j6nZHmM8sOE6PgGBBTiQG%2FSN7h9jDbeUCG8ZmUt78ZKCj0DrusI1sD5oTHuO9bNyxS14EGgC2WPtAdKUKS4u1Xbf2EC8CN2oPzEo1VpGTKWKC0LcId9IVDHNeYbjnxikIU0yxLb0Xx3DJ8t1rGlCt04b53AMdsVVr0YNoB5i9r4Rn72mbObX4dWieLI3PbInK3y5BO9xenddePxL%2BS3%2BA3XHbFoPrS5KY8Vn613FmeEDLxb1wQIM%2BC2mpaDga9Yhhb63eUln688GKVuNVYELwm5vhE%2BedaDjulGXTQiqLDmyxkthnv7%2BIYOcLVzjwZ3aBYAg5Xr1KIuLxtTi%2F4OVLTmijPrFQsxDxFzRridzW1u06yif22iy7qK2GrXcoy2Y2QKK1dEjvzYDqAxNy%2BZs9a9FXIwfKoomQZf68ohSw8TUy64Ln5B1lKgK9ip8yvJEODZe1CH7ZGrehSXnyTjaswPP86wgdQ9CmzooTbzhDoRX8aWnWaEw7USualg5uReSbsC55HbSl38Vqg2wi0Acon9CD0tscOCfIdnaetItm4nuOgbbp03T%2FL5SMO22birnWCEo6lX18q%2B2UVk2DgTlkzij2n0goRajTFX2AzpVKNyOMIyGBsUvG1PUcwhYuzxAY6pgF7jNb%2FvnfwcSBeQONvugGzhLUNmRXVTVZ8Odtn%2FVzk3jt2LJkbn5c%2B1rEF9FGG%2BGwxMYbWuofNEx2sGzGS7OjivV9n5TNO3tcVuyYBaR462C8R05SF069pw3CIQomq26KFClcZq3zZqMCph0RGDzBM8imnPqfHMr2ScweJXfAMtIpSWc9Fo34Bgxj%2BhGDpusEneZUu0Qyla1h0IQs6VIREF51sMQGP&X-Amz-Signature=5fabc2cb7bf73b0e03d9e8eb1dff0a624125fa744737d0a90a48418dbbe1c3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5FPHL6A%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG44Hc3JscSC%2FpLXaYtfOrIn9Zthw2Ct1IywIbnL%2BLfOAiAzbSkB%2FXuSAXM2YeUWq%2BY1PVvuH5OUCNucjWpEpmcDbyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrSJm0z6hTWhZaKzFKtwD19j6nZHmM8sOE6PgGBBTiQG%2FSN7h9jDbeUCG8ZmUt78ZKCj0DrusI1sD5oTHuO9bNyxS14EGgC2WPtAdKUKS4u1Xbf2EC8CN2oPzEo1VpGTKWKC0LcId9IVDHNeYbjnxikIU0yxLb0Xx3DJ8t1rGlCt04b53AMdsVVr0YNoB5i9r4Rn72mbObX4dWieLI3PbInK3y5BO9xenddePxL%2BS3%2BA3XHbFoPrS5KY8Vn613FmeEDLxb1wQIM%2BC2mpaDga9Yhhb63eUln688GKVuNVYELwm5vhE%2BedaDjulGXTQiqLDmyxkthnv7%2BIYOcLVzjwZ3aBYAg5Xr1KIuLxtTi%2F4OVLTmijPrFQsxDxFzRridzW1u06yif22iy7qK2GrXcoy2Y2QKK1dEjvzYDqAxNy%2BZs9a9FXIwfKoomQZf68ohSw8TUy64Ln5B1lKgK9ip8yvJEODZe1CH7ZGrehSXnyTjaswPP86wgdQ9CmzooTbzhDoRX8aWnWaEw7USualg5uReSbsC55HbSl38Vqg2wi0Acon9CD0tscOCfIdnaetItm4nuOgbbp03T%2FL5SMO22birnWCEo6lX18q%2B2UVk2DgTlkzij2n0goRajTFX2AzpVKNyOMIyGBsUvG1PUcwhYuzxAY6pgF7jNb%2FvnfwcSBeQONvugGzhLUNmRXVTVZ8Odtn%2FVzk3jt2LJkbn5c%2B1rEF9FGG%2BGwxMYbWuofNEx2sGzGS7OjivV9n5TNO3tcVuyYBaR462C8R05SF069pw3CIQomq26KFClcZq3zZqMCph0RGDzBM8imnPqfHMr2ScweJXfAMtIpSWc9Fo34Bgxj%2BhGDpusEneZUu0Qyla1h0IQs6VIREF51sMQGP&X-Amz-Signature=0707cb5be19f60a689b5ba1318c11bb545ed46f4257df83c26269ccb3622efa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5FPHL6A%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG44Hc3JscSC%2FpLXaYtfOrIn9Zthw2Ct1IywIbnL%2BLfOAiAzbSkB%2FXuSAXM2YeUWq%2BY1PVvuH5OUCNucjWpEpmcDbyqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrSJm0z6hTWhZaKzFKtwD19j6nZHmM8sOE6PgGBBTiQG%2FSN7h9jDbeUCG8ZmUt78ZKCj0DrusI1sD5oTHuO9bNyxS14EGgC2WPtAdKUKS4u1Xbf2EC8CN2oPzEo1VpGTKWKC0LcId9IVDHNeYbjnxikIU0yxLb0Xx3DJ8t1rGlCt04b53AMdsVVr0YNoB5i9r4Rn72mbObX4dWieLI3PbInK3y5BO9xenddePxL%2BS3%2BA3XHbFoPrS5KY8Vn613FmeEDLxb1wQIM%2BC2mpaDga9Yhhb63eUln688GKVuNVYELwm5vhE%2BedaDjulGXTQiqLDmyxkthnv7%2BIYOcLVzjwZ3aBYAg5Xr1KIuLxtTi%2F4OVLTmijPrFQsxDxFzRridzW1u06yif22iy7qK2GrXcoy2Y2QKK1dEjvzYDqAxNy%2BZs9a9FXIwfKoomQZf68ohSw8TUy64Ln5B1lKgK9ip8yvJEODZe1CH7ZGrehSXnyTjaswPP86wgdQ9CmzooTbzhDoRX8aWnWaEw7USualg5uReSbsC55HbSl38Vqg2wi0Acon9CD0tscOCfIdnaetItm4nuOgbbp03T%2FL5SMO22birnWCEo6lX18q%2B2UVk2DgTlkzij2n0goRajTFX2AzpVKNyOMIyGBsUvG1PUcwhYuzxAY6pgF7jNb%2FvnfwcSBeQONvugGzhLUNmRXVTVZ8Odtn%2FVzk3jt2LJkbn5c%2B1rEF9FGG%2BGwxMYbWuofNEx2sGzGS7OjivV9n5TNO3tcVuyYBaR462C8R05SF069pw3CIQomq26KFClcZq3zZqMCph0RGDzBM8imnPqfHMr2ScweJXfAMtIpSWc9Fo34Bgxj%2BhGDpusEneZUu0Qyla1h0IQs6VIREF51sMQGP&X-Amz-Signature=be9cfed41bc6ca44a30b2360c0bdf9136cdc8946187ba082b2f184149045c398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
