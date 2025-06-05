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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7AL5OD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDVOGzWvZRHIks7if%2FGWulOP8sx2iYsyTprMjg%2FNxNUUQIgGNmhfa2cNugrrijFEX389FDMASxZAT%2Fb1pscxSt2JY0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJquEXMO%2BXYn8lMkUSrcA6BkOzdTaigme37I78Uy9qybJvNT7DV7VoeB6Mmcz19gPKXG85voDoD38bupqrcxZJHurHtMj46ArpF8mEDcCKO282ObSnjTJV53cVDG6C4DGxFi0MkrunVJu90joKL9qLutlfZqL3qR2tJ6Chc%2FO6eKj8CmWrdz7aTaScbjdzc4CWu5TdvsOvdCe%2BLxQx%2FrKlMhGrhtSD48i%2B6Ba2ANFollxu4Ixys8gbOoQNfBLW%2BpZI6ApSpTNfzbBG8pY7GYyHYwEPgnVFWMf8BH5yXGj2GQT851ijk8YkK64K6p2LDoSZjMNmag7PHZWgcDyI8hnq5SNvEtJUDZuFy27smrzrOp0jHJ0429CXNGDS7O4siwKsn0RIwAR5%2FNTOSrZy4HCqZUxfjYjW68vaBEFRVYERUFzXsGOJTDqIOVzPlpKHRnH5yCD4JhETu2yXxlsbV5FwjY8HeG689pPqkJKhV89ZrBvDJfDPrcwPbJrqcrc1mCiHfK5D%2F8NE54qNd%2FXfvoslB4tGN1bN2PMgv85J4kDPS2TViPNvY72e0ILZTW0BcLaHpANyzxeJ3mon8ptluQ92sePeNe1ez%2F20V3YOoTVc8GrCaKgR3%2BFNvbXk7bLhozaCmOS7TFpkuZE%2FfqMK6LhcIGOqUBMhDXwQroOIPcoaD4TuIhQE9PhuPLwkdqFc9YKnFrUx2cLCTSQ38Qlt4Nd2ZTBifTIesvZaRKGye5pU%2BA61LIejnNGUk82sqh3dgFXphq3t0f5ik0bn1T7WYAcM7YStryY9yonVdp0Yo8KGSgi1PM%2FDPvd2ZtWSVmPMd9Fw68JuwogqGxdl5p8H58xi%2BuLQl%2FW5QQmnW7ZWnDTOxhUxgcEmKtw%2Boq&X-Amz-Signature=cab216da2fadd3b9f7b912d1de7878e8c8ac262fabf16354f38ea55a373145e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7AL5OD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDVOGzWvZRHIks7if%2FGWulOP8sx2iYsyTprMjg%2FNxNUUQIgGNmhfa2cNugrrijFEX389FDMASxZAT%2Fb1pscxSt2JY0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJquEXMO%2BXYn8lMkUSrcA6BkOzdTaigme37I78Uy9qybJvNT7DV7VoeB6Mmcz19gPKXG85voDoD38bupqrcxZJHurHtMj46ArpF8mEDcCKO282ObSnjTJV53cVDG6C4DGxFi0MkrunVJu90joKL9qLutlfZqL3qR2tJ6Chc%2FO6eKj8CmWrdz7aTaScbjdzc4CWu5TdvsOvdCe%2BLxQx%2FrKlMhGrhtSD48i%2B6Ba2ANFollxu4Ixys8gbOoQNfBLW%2BpZI6ApSpTNfzbBG8pY7GYyHYwEPgnVFWMf8BH5yXGj2GQT851ijk8YkK64K6p2LDoSZjMNmag7PHZWgcDyI8hnq5SNvEtJUDZuFy27smrzrOp0jHJ0429CXNGDS7O4siwKsn0RIwAR5%2FNTOSrZy4HCqZUxfjYjW68vaBEFRVYERUFzXsGOJTDqIOVzPlpKHRnH5yCD4JhETu2yXxlsbV5FwjY8HeG689pPqkJKhV89ZrBvDJfDPrcwPbJrqcrc1mCiHfK5D%2F8NE54qNd%2FXfvoslB4tGN1bN2PMgv85J4kDPS2TViPNvY72e0ILZTW0BcLaHpANyzxeJ3mon8ptluQ92sePeNe1ez%2F20V3YOoTVc8GrCaKgR3%2BFNvbXk7bLhozaCmOS7TFpkuZE%2FfqMK6LhcIGOqUBMhDXwQroOIPcoaD4TuIhQE9PhuPLwkdqFc9YKnFrUx2cLCTSQ38Qlt4Nd2ZTBifTIesvZaRKGye5pU%2BA61LIejnNGUk82sqh3dgFXphq3t0f5ik0bn1T7WYAcM7YStryY9yonVdp0Yo8KGSgi1PM%2FDPvd2ZtWSVmPMd9Fw68JuwogqGxdl5p8H58xi%2BuLQl%2FW5QQmnW7ZWnDTOxhUxgcEmKtw%2Boq&X-Amz-Signature=bf6405ca25420544e038a48945a72e7ef0a688cf1247036b8ae10df5708e36b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK7AL5OD%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDVOGzWvZRHIks7if%2FGWulOP8sx2iYsyTprMjg%2FNxNUUQIgGNmhfa2cNugrrijFEX389FDMASxZAT%2Fb1pscxSt2JY0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJquEXMO%2BXYn8lMkUSrcA6BkOzdTaigme37I78Uy9qybJvNT7DV7VoeB6Mmcz19gPKXG85voDoD38bupqrcxZJHurHtMj46ArpF8mEDcCKO282ObSnjTJV53cVDG6C4DGxFi0MkrunVJu90joKL9qLutlfZqL3qR2tJ6Chc%2FO6eKj8CmWrdz7aTaScbjdzc4CWu5TdvsOvdCe%2BLxQx%2FrKlMhGrhtSD48i%2B6Ba2ANFollxu4Ixys8gbOoQNfBLW%2BpZI6ApSpTNfzbBG8pY7GYyHYwEPgnVFWMf8BH5yXGj2GQT851ijk8YkK64K6p2LDoSZjMNmag7PHZWgcDyI8hnq5SNvEtJUDZuFy27smrzrOp0jHJ0429CXNGDS7O4siwKsn0RIwAR5%2FNTOSrZy4HCqZUxfjYjW68vaBEFRVYERUFzXsGOJTDqIOVzPlpKHRnH5yCD4JhETu2yXxlsbV5FwjY8HeG689pPqkJKhV89ZrBvDJfDPrcwPbJrqcrc1mCiHfK5D%2F8NE54qNd%2FXfvoslB4tGN1bN2PMgv85J4kDPS2TViPNvY72e0ILZTW0BcLaHpANyzxeJ3mon8ptluQ92sePeNe1ez%2F20V3YOoTVc8GrCaKgR3%2BFNvbXk7bLhozaCmOS7TFpkuZE%2FfqMK6LhcIGOqUBMhDXwQroOIPcoaD4TuIhQE9PhuPLwkdqFc9YKnFrUx2cLCTSQ38Qlt4Nd2ZTBifTIesvZaRKGye5pU%2BA61LIejnNGUk82sqh3dgFXphq3t0f5ik0bn1T7WYAcM7YStryY9yonVdp0Yo8KGSgi1PM%2FDPvd2ZtWSVmPMd9Fw68JuwogqGxdl5p8H58xi%2BuLQl%2FW5QQmnW7ZWnDTOxhUxgcEmKtw%2Boq&X-Amz-Signature=0ad801f6fd137d4a05d78f89c0f35f33605ddbce66d73676a384fb2a9eacc4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
