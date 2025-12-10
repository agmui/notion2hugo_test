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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2QOXY5%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD66BzIQGaiQjacYSonqRGTilX0tblX83iN6sH2F2zY%2BwIgQhU%2F%2FV%2F2c9hgKu7lievUXj7RgvD4ug35j9JHAbNBWRoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B6WK%2F6onsPA4zlVircA%2B8icErea1Ob%2F%2Flqne%2BscmhNbxDJGtMgZasepQlpIqJM0kDM32oKPINHH8NenV30YswMEnHeKuRFxqn8ZWWSvDZhVfnZ77%2FrUawg85y%2BZA9O7tpMWiEbS8QFIZO8kPAJnK9Choydb9XVhwaZVz4WMc4m9WpEpxkb2ybkThjTRrAD%2FlS%2F97%2Flx5GerS7%2F5ilBLg8rbowcMDZy2HlPqiXoS91iuZxgcm8UURfG8wdUS6eRsfXSbeb7OFl6OWYB8N3EhNB5DjLDeNJa3gzrdVTRC%2FEu4kfXRoKPmhzFRcFdLFRNBvpXI%2F6e1573UpM3%2B3NohqWPwda2t4UXuWkdteLb9SVB37FCr2eCPqYLoOcquPeqMGyKMci5nDsA8jx%2FO2laGBBYFYXtZiJZAnofhTXPDR%2BhJYQ4WOdc8l1yztqeI%2B9Y%2By3xtCnCQeSatrQeNmgXbQj3jx2edwvtSOzdut2Mboj2Nu%2Bdg9aC5pZA88nmlufJfxmkee70AD3gxZUIXd4Rl2Ld%2FRxWhblS00S1p%2FxdY5KE0%2BQe5aMDV7%2FY%2B7VfsxoP1UZoMTUtcVKYQmW3M%2BOVwdfM80a8Iq4oPecp7ahSsd2dM%2BmyQCPlbvKUZW6yTMNOQH%2FkU2CQpNPr9aXzMI%2FD4skGOqUB0RrDzCWy6P79xr5aZCdBzbEVhRyTVpo8Z6p%2FLIeHcyqF%2B8XcaDBUaZ3GonwpAaCbRzaeFfoHhjTJbNLV0J1NkW7G9pr5PIoM38qDp3Y1I%2F1r8bGrfNE22e1fQzuoqjLF%2FtIcjI5ihvBjQWyRoaOaS3hyKCFUGKaexgSExgnJRnt2lfgy96WBa%2BmMMhI2%2ByqeKBirRDGI%2B%2BqanXF0aanq80J9t4pO&X-Amz-Signature=83520f5ec088a60538974c5ceeca1fbdca682f624b1f0770f5d65554b6a7168b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2QOXY5%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD66BzIQGaiQjacYSonqRGTilX0tblX83iN6sH2F2zY%2BwIgQhU%2F%2FV%2F2c9hgKu7lievUXj7RgvD4ug35j9JHAbNBWRoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B6WK%2F6onsPA4zlVircA%2B8icErea1Ob%2F%2Flqne%2BscmhNbxDJGtMgZasepQlpIqJM0kDM32oKPINHH8NenV30YswMEnHeKuRFxqn8ZWWSvDZhVfnZ77%2FrUawg85y%2BZA9O7tpMWiEbS8QFIZO8kPAJnK9Choydb9XVhwaZVz4WMc4m9WpEpxkb2ybkThjTRrAD%2FlS%2F97%2Flx5GerS7%2F5ilBLg8rbowcMDZy2HlPqiXoS91iuZxgcm8UURfG8wdUS6eRsfXSbeb7OFl6OWYB8N3EhNB5DjLDeNJa3gzrdVTRC%2FEu4kfXRoKPmhzFRcFdLFRNBvpXI%2F6e1573UpM3%2B3NohqWPwda2t4UXuWkdteLb9SVB37FCr2eCPqYLoOcquPeqMGyKMci5nDsA8jx%2FO2laGBBYFYXtZiJZAnofhTXPDR%2BhJYQ4WOdc8l1yztqeI%2B9Y%2By3xtCnCQeSatrQeNmgXbQj3jx2edwvtSOzdut2Mboj2Nu%2Bdg9aC5pZA88nmlufJfxmkee70AD3gxZUIXd4Rl2Ld%2FRxWhblS00S1p%2FxdY5KE0%2BQe5aMDV7%2FY%2B7VfsxoP1UZoMTUtcVKYQmW3M%2BOVwdfM80a8Iq4oPecp7ahSsd2dM%2BmyQCPlbvKUZW6yTMNOQH%2FkU2CQpNPr9aXzMI%2FD4skGOqUB0RrDzCWy6P79xr5aZCdBzbEVhRyTVpo8Z6p%2FLIeHcyqF%2B8XcaDBUaZ3GonwpAaCbRzaeFfoHhjTJbNLV0J1NkW7G9pr5PIoM38qDp3Y1I%2F1r8bGrfNE22e1fQzuoqjLF%2FtIcjI5ihvBjQWyRoaOaS3hyKCFUGKaexgSExgnJRnt2lfgy96WBa%2BmMMhI2%2ByqeKBirRDGI%2B%2BqanXF0aanq80J9t4pO&X-Amz-Signature=7586d56de55fe6906587c2901405915cb9229765c0479e9993867bd710f2efbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2QOXY5%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD66BzIQGaiQjacYSonqRGTilX0tblX83iN6sH2F2zY%2BwIgQhU%2F%2FV%2F2c9hgKu7lievUXj7RgvD4ug35j9JHAbNBWRoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2B6WK%2F6onsPA4zlVircA%2B8icErea1Ob%2F%2Flqne%2BscmhNbxDJGtMgZasepQlpIqJM0kDM32oKPINHH8NenV30YswMEnHeKuRFxqn8ZWWSvDZhVfnZ77%2FrUawg85y%2BZA9O7tpMWiEbS8QFIZO8kPAJnK9Choydb9XVhwaZVz4WMc4m9WpEpxkb2ybkThjTRrAD%2FlS%2F97%2Flx5GerS7%2F5ilBLg8rbowcMDZy2HlPqiXoS91iuZxgcm8UURfG8wdUS6eRsfXSbeb7OFl6OWYB8N3EhNB5DjLDeNJa3gzrdVTRC%2FEu4kfXRoKPmhzFRcFdLFRNBvpXI%2F6e1573UpM3%2B3NohqWPwda2t4UXuWkdteLb9SVB37FCr2eCPqYLoOcquPeqMGyKMci5nDsA8jx%2FO2laGBBYFYXtZiJZAnofhTXPDR%2BhJYQ4WOdc8l1yztqeI%2B9Y%2By3xtCnCQeSatrQeNmgXbQj3jx2edwvtSOzdut2Mboj2Nu%2Bdg9aC5pZA88nmlufJfxmkee70AD3gxZUIXd4Rl2Ld%2FRxWhblS00S1p%2FxdY5KE0%2BQe5aMDV7%2FY%2B7VfsxoP1UZoMTUtcVKYQmW3M%2BOVwdfM80a8Iq4oPecp7ahSsd2dM%2BmyQCPlbvKUZW6yTMNOQH%2FkU2CQpNPr9aXzMI%2FD4skGOqUB0RrDzCWy6P79xr5aZCdBzbEVhRyTVpo8Z6p%2FLIeHcyqF%2B8XcaDBUaZ3GonwpAaCbRzaeFfoHhjTJbNLV0J1NkW7G9pr5PIoM38qDp3Y1I%2F1r8bGrfNE22e1fQzuoqjLF%2FtIcjI5ihvBjQWyRoaOaS3hyKCFUGKaexgSExgnJRnt2lfgy96WBa%2BmMMhI2%2ByqeKBirRDGI%2B%2BqanXF0aanq80J9t4pO&X-Amz-Signature=93f949cd9d7b6982eb0cf3437c944a968a3cdfaf59ee507525a858ba41791eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
