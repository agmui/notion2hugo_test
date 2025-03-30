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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZOYA3B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFDC%2FfZJHVUcVPe%2BNITfXKjVAYCUfzvZsXObyiJAd3%2B4AiBGgltiMxhAXxMzXd2AGpNxl91ca3b%2BGFK%2B7OGkUtvwCyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt4TTsfefdAwc%2FFIBKtwDxminic3ZRx5Wsk%2BOY0y49JXy8iaCb%2FCAc55BLL%2B64sFRKJI8RLcUaUhd2%2FlFP8XDCy1jbWu9Vvu33L0Zn4ed6iMvgchwP4R3OeazybppaM%2FZDvtlN4EQEsit0Du1yRN3uIAgVK7WXFv02rx863HJG%2FGyWoijO4SHQDrwrJwvOOpqRv2Gwr9I250w2wuhIbJc8YanREHsp%2FtsU3GkL%2BOx7qeBspxeeazbZ2FOvwgvY%2Fj3HJ63oynedyDJOKgDSiZNba0vZsCNJivllIm6zj2E%2Bvf31IM8AKI%2BQduIlL1W%2FnS7%2BV214i2ob%2B03gvxJg0sd4B81ZmJ8SUwM3NKrKQrKXgpoFce%2FhcTwStlaLaNAeQlCP%2BA89Dm2dDdqXnBVeydQrv%2F%2BZfV6cHyBR%2BF3zUalDMWgDR6x6Ly0QlJPDz8sfitNTC3gI3gZ3HYVmUjFKg0gpMjIS9aWMQfVDYKgLWrZFV%2B3CcPNftCaadraqAv0aegTrVbYGZFs8Yyw%2FoOsasnpl1TF6WfdNe0PgdBLx3u7eGCg7vDQZyQ2isHGnxsiV%2BbELX3xALoOftbf8NiJcOx95sfCdS2bHjPSHyQxgfELdk%2B9axrlHVFfoJD1KF3w0F2NTpAyeh6tY%2BFi194w3O%2BjvwY6pgFPZF60ENoHyl%2Bv1%2FmSxiMXscX44iQiBdLI54oEJj65fgdxy%2Fh7ADVjKRzGiEXLBabvEcYzvD3o%2BJghbzwmXDMmNI3jfSQPrCjazMzWSrbfv0zREmc0mUHdgls3I2zP5YUnLibOZfjqNg4aJovCekM71QVFaUo9AwAdsMUQEQzJ9OTyfoTzlGAeQXI2hywd3I4Fjxy0umMerxNftbkQBM1u0GIhYL2V&X-Amz-Signature=a7f71e57cb975839653283cb719378aa29781d094ced936332718861e8dab70c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZOYA3B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFDC%2FfZJHVUcVPe%2BNITfXKjVAYCUfzvZsXObyiJAd3%2B4AiBGgltiMxhAXxMzXd2AGpNxl91ca3b%2BGFK%2B7OGkUtvwCyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt4TTsfefdAwc%2FFIBKtwDxminic3ZRx5Wsk%2BOY0y49JXy8iaCb%2FCAc55BLL%2B64sFRKJI8RLcUaUhd2%2FlFP8XDCy1jbWu9Vvu33L0Zn4ed6iMvgchwP4R3OeazybppaM%2FZDvtlN4EQEsit0Du1yRN3uIAgVK7WXFv02rx863HJG%2FGyWoijO4SHQDrwrJwvOOpqRv2Gwr9I250w2wuhIbJc8YanREHsp%2FtsU3GkL%2BOx7qeBspxeeazbZ2FOvwgvY%2Fj3HJ63oynedyDJOKgDSiZNba0vZsCNJivllIm6zj2E%2Bvf31IM8AKI%2BQduIlL1W%2FnS7%2BV214i2ob%2B03gvxJg0sd4B81ZmJ8SUwM3NKrKQrKXgpoFce%2FhcTwStlaLaNAeQlCP%2BA89Dm2dDdqXnBVeydQrv%2F%2BZfV6cHyBR%2BF3zUalDMWgDR6x6Ly0QlJPDz8sfitNTC3gI3gZ3HYVmUjFKg0gpMjIS9aWMQfVDYKgLWrZFV%2B3CcPNftCaadraqAv0aegTrVbYGZFs8Yyw%2FoOsasnpl1TF6WfdNe0PgdBLx3u7eGCg7vDQZyQ2isHGnxsiV%2BbELX3xALoOftbf8NiJcOx95sfCdS2bHjPSHyQxgfELdk%2B9axrlHVFfoJD1KF3w0F2NTpAyeh6tY%2BFi194w3O%2BjvwY6pgFPZF60ENoHyl%2Bv1%2FmSxiMXscX44iQiBdLI54oEJj65fgdxy%2Fh7ADVjKRzGiEXLBabvEcYzvD3o%2BJghbzwmXDMmNI3jfSQPrCjazMzWSrbfv0zREmc0mUHdgls3I2zP5YUnLibOZfjqNg4aJovCekM71QVFaUo9AwAdsMUQEQzJ9OTyfoTzlGAeQXI2hywd3I4Fjxy0umMerxNftbkQBM1u0GIhYL2V&X-Amz-Signature=c957dfed939b9e4c7b53404444c2abd285d64b3f21377654f6d57e39e87cf343&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ZOYA3B%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T090725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFDC%2FfZJHVUcVPe%2BNITfXKjVAYCUfzvZsXObyiJAd3%2B4AiBGgltiMxhAXxMzXd2AGpNxl91ca3b%2BGFK%2B7OGkUtvwCyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt4TTsfefdAwc%2FFIBKtwDxminic3ZRx5Wsk%2BOY0y49JXy8iaCb%2FCAc55BLL%2B64sFRKJI8RLcUaUhd2%2FlFP8XDCy1jbWu9Vvu33L0Zn4ed6iMvgchwP4R3OeazybppaM%2FZDvtlN4EQEsit0Du1yRN3uIAgVK7WXFv02rx863HJG%2FGyWoijO4SHQDrwrJwvOOpqRv2Gwr9I250w2wuhIbJc8YanREHsp%2FtsU3GkL%2BOx7qeBspxeeazbZ2FOvwgvY%2Fj3HJ63oynedyDJOKgDSiZNba0vZsCNJivllIm6zj2E%2Bvf31IM8AKI%2BQduIlL1W%2FnS7%2BV214i2ob%2B03gvxJg0sd4B81ZmJ8SUwM3NKrKQrKXgpoFce%2FhcTwStlaLaNAeQlCP%2BA89Dm2dDdqXnBVeydQrv%2F%2BZfV6cHyBR%2BF3zUalDMWgDR6x6Ly0QlJPDz8sfitNTC3gI3gZ3HYVmUjFKg0gpMjIS9aWMQfVDYKgLWrZFV%2B3CcPNftCaadraqAv0aegTrVbYGZFs8Yyw%2FoOsasnpl1TF6WfdNe0PgdBLx3u7eGCg7vDQZyQ2isHGnxsiV%2BbELX3xALoOftbf8NiJcOx95sfCdS2bHjPSHyQxgfELdk%2B9axrlHVFfoJD1KF3w0F2NTpAyeh6tY%2BFi194w3O%2BjvwY6pgFPZF60ENoHyl%2Bv1%2FmSxiMXscX44iQiBdLI54oEJj65fgdxy%2Fh7ADVjKRzGiEXLBabvEcYzvD3o%2BJghbzwmXDMmNI3jfSQPrCjazMzWSrbfv0zREmc0mUHdgls3I2zP5YUnLibOZfjqNg4aJovCekM71QVFaUo9AwAdsMUQEQzJ9OTyfoTzlGAeQXI2hywd3I4Fjxy0umMerxNftbkQBM1u0GIhYL2V&X-Amz-Signature=3dba29bea8255abc17c155e557e08c9c94f61619d9406bc56bb78668657ab306&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
