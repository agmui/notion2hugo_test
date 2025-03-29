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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ICMIBK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGymD5EBtfoLAIdmM75%2FKpYwg9R51foPaUeDTPNlMjI%2FAiEAjAeXtib%2FbEmh3zpv2%2FyphxxXLcyedWwxHNsqlUx1Qe0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNncaoWXMvHoEG1foSrcA%2BANAIDW1Aoq3ZWoREKiodjtBCPyoJC4KxoQSx8cTU5TmQa%2B0g5ROu4OmYENLtOW3oXIpyzkjBpWqm0bIzgxVjErWGZqqOaqgbhnMA7UJB7fYutMpidjNnmC5kbUjzBz2EZmqmWhe%2FuFhutUEYFusfv7vulTZ%2B6qtyh3J7rV%2FsG%2FzAYehxjur4JHnzEsl9hIvQauakEHxLAFrCGBmsPWXGsrM8ujQEyTWG0En4y7AKeVbzlSI9KvX%2BMMHQTZ8HR08HViAH2O6dq8%2FPH7coySkrT7gGVgS4ai0nKPMKkEII9Z6WdkAsCe4zLrtTTolCwDFtHR9xtk66vm3iwKI7mkif%2FqdGffz500NhsNRpkb7jwlZ86P5%2B7S9d8oSo%2FHABsH1W3532ytmjiGP9uiyH34zJYpi09DWW5yCGGuX9hEHkLz4L5XdlqXreyEFvzec0nfWpvshCximJ3bjtBbi18RpsW1PBlkLC5RkTnlOpJL5T7DXRskU5sdZ48C8nyGlSimWY7Hfqi%2B2tsCzUYXVpoeYyQfjsEN3h0OZe%2BvZrmSFSw%2BO3I3OuJpjQne8X7iOSWaOCTnk%2FhwWwSGDo9hkcAr9RoOblCR0TaDfjLrxSyeFcwudag4dTYO7x5ufPWFMNi1n78GOqUB2NPydLoavsjd5ui%2FFcVPuoav9XwwtyEbjYg8%2BrzPurNIv4T7LqoOOgGVL46aK5IbXKaf%2BFJGBkaNrsFuTjQwpV1l8C93cfU1o9sjBJaJ%2Bsj05LPpZR8lj2Iosle7sHRCC%2BnaquLSpcWZ563pUbAoyT16uhtbksQvEpUPXX7%2B9AV%2BM9AwZhMW9PDAb8o7eRjK6%2FQxlcsJ1rSDOQ2TBEPXacRWHc9%2F&X-Amz-Signature=7013752e28fcf91676238794a27b819da87b336a4afe0c711ed8431a54268be9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ICMIBK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGymD5EBtfoLAIdmM75%2FKpYwg9R51foPaUeDTPNlMjI%2FAiEAjAeXtib%2FbEmh3zpv2%2FyphxxXLcyedWwxHNsqlUx1Qe0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNncaoWXMvHoEG1foSrcA%2BANAIDW1Aoq3ZWoREKiodjtBCPyoJC4KxoQSx8cTU5TmQa%2B0g5ROu4OmYENLtOW3oXIpyzkjBpWqm0bIzgxVjErWGZqqOaqgbhnMA7UJB7fYutMpidjNnmC5kbUjzBz2EZmqmWhe%2FuFhutUEYFusfv7vulTZ%2B6qtyh3J7rV%2FsG%2FzAYehxjur4JHnzEsl9hIvQauakEHxLAFrCGBmsPWXGsrM8ujQEyTWG0En4y7AKeVbzlSI9KvX%2BMMHQTZ8HR08HViAH2O6dq8%2FPH7coySkrT7gGVgS4ai0nKPMKkEII9Z6WdkAsCe4zLrtTTolCwDFtHR9xtk66vm3iwKI7mkif%2FqdGffz500NhsNRpkb7jwlZ86P5%2B7S9d8oSo%2FHABsH1W3532ytmjiGP9uiyH34zJYpi09DWW5yCGGuX9hEHkLz4L5XdlqXreyEFvzec0nfWpvshCximJ3bjtBbi18RpsW1PBlkLC5RkTnlOpJL5T7DXRskU5sdZ48C8nyGlSimWY7Hfqi%2B2tsCzUYXVpoeYyQfjsEN3h0OZe%2BvZrmSFSw%2BO3I3OuJpjQne8X7iOSWaOCTnk%2FhwWwSGDo9hkcAr9RoOblCR0TaDfjLrxSyeFcwudag4dTYO7x5ufPWFMNi1n78GOqUB2NPydLoavsjd5ui%2FFcVPuoav9XwwtyEbjYg8%2BrzPurNIv4T7LqoOOgGVL46aK5IbXKaf%2BFJGBkaNrsFuTjQwpV1l8C93cfU1o9sjBJaJ%2Bsj05LPpZR8lj2Iosle7sHRCC%2BnaquLSpcWZ563pUbAoyT16uhtbksQvEpUPXX7%2B9AV%2BM9AwZhMW9PDAb8o7eRjK6%2FQxlcsJ1rSDOQ2TBEPXacRWHc9%2F&X-Amz-Signature=25413a1ea1126f68250f3a78e62b106d4c5541e67363a5df745c1c3a2dc0408a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ICMIBK%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGymD5EBtfoLAIdmM75%2FKpYwg9R51foPaUeDTPNlMjI%2FAiEAjAeXtib%2FbEmh3zpv2%2FyphxxXLcyedWwxHNsqlUx1Qe0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNncaoWXMvHoEG1foSrcA%2BANAIDW1Aoq3ZWoREKiodjtBCPyoJC4KxoQSx8cTU5TmQa%2B0g5ROu4OmYENLtOW3oXIpyzkjBpWqm0bIzgxVjErWGZqqOaqgbhnMA7UJB7fYutMpidjNnmC5kbUjzBz2EZmqmWhe%2FuFhutUEYFusfv7vulTZ%2B6qtyh3J7rV%2FsG%2FzAYehxjur4JHnzEsl9hIvQauakEHxLAFrCGBmsPWXGsrM8ujQEyTWG0En4y7AKeVbzlSI9KvX%2BMMHQTZ8HR08HViAH2O6dq8%2FPH7coySkrT7gGVgS4ai0nKPMKkEII9Z6WdkAsCe4zLrtTTolCwDFtHR9xtk66vm3iwKI7mkif%2FqdGffz500NhsNRpkb7jwlZ86P5%2B7S9d8oSo%2FHABsH1W3532ytmjiGP9uiyH34zJYpi09DWW5yCGGuX9hEHkLz4L5XdlqXreyEFvzec0nfWpvshCximJ3bjtBbi18RpsW1PBlkLC5RkTnlOpJL5T7DXRskU5sdZ48C8nyGlSimWY7Hfqi%2B2tsCzUYXVpoeYyQfjsEN3h0OZe%2BvZrmSFSw%2BO3I3OuJpjQne8X7iOSWaOCTnk%2FhwWwSGDo9hkcAr9RoOblCR0TaDfjLrxSyeFcwudag4dTYO7x5ufPWFMNi1n78GOqUB2NPydLoavsjd5ui%2FFcVPuoav9XwwtyEbjYg8%2BrzPurNIv4T7LqoOOgGVL46aK5IbXKaf%2BFJGBkaNrsFuTjQwpV1l8C93cfU1o9sjBJaJ%2Bsj05LPpZR8lj2Iosle7sHRCC%2BnaquLSpcWZ563pUbAoyT16uhtbksQvEpUPXX7%2B9AV%2BM9AwZhMW9PDAb8o7eRjK6%2FQxlcsJ1rSDOQ2TBEPXacRWHc9%2F&X-Amz-Signature=52187f05988c6b830ddd7838f53c78db0db4acfa0e1c82c6fc84e2632821c10f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
