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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HVZNZR7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIAXmYya6k9E7fPSh9vCRe1eK8WAI22vpboJjLWk%2BkI20AiEAoXT4abHzhCfJaSZ%2FIAZl7HOKAOZIln29X5ZefIyV2zgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkgTzeKpThAaEjO2SrcAzNbgUZUrWjDh4US3N6x5ZpiF9E2ylpcZPGOj6rC6KHDyS3NdRSFNGxzr4iSN%2FltPnlOR6RxQLjwB8DKjjAnshbtbFvuGF4dbZZRraBQanHVgG8IcZ%2FAP1N%2Fze22kVir2HwU4eSz1h8LiWmBTdkFvuuiQ%2Fp7RkDGHyt1HX0h8%2FXI69XhYbRDJ5PtCcq5Ai0btO4Tfcj4wDLS96B8UHzD%2BrrE4%2FTeBegqBVmTU7ET8ZhcoMDFtS7d4kAKc7xx2WdHuOChnf%2Fsn%2BPA%2FEJtE%2FmexA0bJ%2FLIpHin2cFWxIW7%2FJr6JjMKQCJ%2BoL1dugZvzyp%2Batmm2GxpygCcq7tqyKh8MVcHGkpdvwljMbhts94jGCZID58bsrZLZBuQnVr%2F8TqM4oqbxTR2HIneABtItH1XNe5Q4spVksJm62JAewiUdwr1smFA7xYbHzm4y5FeTr9pP9UDbsmcc5aZjCk4QPfckBWTOP6QU35AljvqJnj7%2FF7K2lKCjr0YAMmwtcWPe0ihmYXUJI1%2B%2FYu5M7gaTn5HG27VBqkWd56RaMLf8IiEOK4t03JTXsxj4SBO4cbTOHSfk3Av3JSIjvol5MRSopQiG4eehrVSMBOIb4DbrHYtg%2BuzJu%2FaJ6%2B%2F9jr9%2FNNAMNSQir4GOqUBI9cdstMYVajMgt9WnIN0pEyVvbofsxc6a5z0KVnkHNkLjrTNyqNuIhAxje98R8PMVQN0BqhP9yMHaYEKYuVHDfG8csPVTMWvi6%2FDmdxFfAyffyKO8qsxH9zRxsiPRqRMPnfzCI4S12w4%2BcFqPKC9mPRVRRvWDlzDxYQ3uNHJJEkmOPMOrpv8IcJESy1sVp1AwtVfPcG21dn4j86L547SfxDjC%2BmS&X-Amz-Signature=4fcaac06a7896359e8fb4ae096873dcae88a0e06909804dcf670fb14ef7a8362&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HVZNZR7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIAXmYya6k9E7fPSh9vCRe1eK8WAI22vpboJjLWk%2BkI20AiEAoXT4abHzhCfJaSZ%2FIAZl7HOKAOZIln29X5ZefIyV2zgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkgTzeKpThAaEjO2SrcAzNbgUZUrWjDh4US3N6x5ZpiF9E2ylpcZPGOj6rC6KHDyS3NdRSFNGxzr4iSN%2FltPnlOR6RxQLjwB8DKjjAnshbtbFvuGF4dbZZRraBQanHVgG8IcZ%2FAP1N%2Fze22kVir2HwU4eSz1h8LiWmBTdkFvuuiQ%2Fp7RkDGHyt1HX0h8%2FXI69XhYbRDJ5PtCcq5Ai0btO4Tfcj4wDLS96B8UHzD%2BrrE4%2FTeBegqBVmTU7ET8ZhcoMDFtS7d4kAKc7xx2WdHuOChnf%2Fsn%2BPA%2FEJtE%2FmexA0bJ%2FLIpHin2cFWxIW7%2FJr6JjMKQCJ%2BoL1dugZvzyp%2Batmm2GxpygCcq7tqyKh8MVcHGkpdvwljMbhts94jGCZID58bsrZLZBuQnVr%2F8TqM4oqbxTR2HIneABtItH1XNe5Q4spVksJm62JAewiUdwr1smFA7xYbHzm4y5FeTr9pP9UDbsmcc5aZjCk4QPfckBWTOP6QU35AljvqJnj7%2FF7K2lKCjr0YAMmwtcWPe0ihmYXUJI1%2B%2FYu5M7gaTn5HG27VBqkWd56RaMLf8IiEOK4t03JTXsxj4SBO4cbTOHSfk3Av3JSIjvol5MRSopQiG4eehrVSMBOIb4DbrHYtg%2BuzJu%2FaJ6%2B%2F9jr9%2FNNAMNSQir4GOqUBI9cdstMYVajMgt9WnIN0pEyVvbofsxc6a5z0KVnkHNkLjrTNyqNuIhAxje98R8PMVQN0BqhP9yMHaYEKYuVHDfG8csPVTMWvi6%2FDmdxFfAyffyKO8qsxH9zRxsiPRqRMPnfzCI4S12w4%2BcFqPKC9mPRVRRvWDlzDxYQ3uNHJJEkmOPMOrpv8IcJESy1sVp1AwtVfPcG21dn4j86L547SfxDjC%2BmS&X-Amz-Signature=db269dc39d45b12e68b2d65eef3dcef95c050a3a6996440104582c67b5cadba8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HVZNZR7%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T090746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIAXmYya6k9E7fPSh9vCRe1eK8WAI22vpboJjLWk%2BkI20AiEAoXT4abHzhCfJaSZ%2FIAZl7HOKAOZIln29X5ZefIyV2zgqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkgTzeKpThAaEjO2SrcAzNbgUZUrWjDh4US3N6x5ZpiF9E2ylpcZPGOj6rC6KHDyS3NdRSFNGxzr4iSN%2FltPnlOR6RxQLjwB8DKjjAnshbtbFvuGF4dbZZRraBQanHVgG8IcZ%2FAP1N%2Fze22kVir2HwU4eSz1h8LiWmBTdkFvuuiQ%2Fp7RkDGHyt1HX0h8%2FXI69XhYbRDJ5PtCcq5Ai0btO4Tfcj4wDLS96B8UHzD%2BrrE4%2FTeBegqBVmTU7ET8ZhcoMDFtS7d4kAKc7xx2WdHuOChnf%2Fsn%2BPA%2FEJtE%2FmexA0bJ%2FLIpHin2cFWxIW7%2FJr6JjMKQCJ%2BoL1dugZvzyp%2Batmm2GxpygCcq7tqyKh8MVcHGkpdvwljMbhts94jGCZID58bsrZLZBuQnVr%2F8TqM4oqbxTR2HIneABtItH1XNe5Q4spVksJm62JAewiUdwr1smFA7xYbHzm4y5FeTr9pP9UDbsmcc5aZjCk4QPfckBWTOP6QU35AljvqJnj7%2FF7K2lKCjr0YAMmwtcWPe0ihmYXUJI1%2B%2FYu5M7gaTn5HG27VBqkWd56RaMLf8IiEOK4t03JTXsxj4SBO4cbTOHSfk3Av3JSIjvol5MRSopQiG4eehrVSMBOIb4DbrHYtg%2BuzJu%2FaJ6%2B%2F9jr9%2FNNAMNSQir4GOqUBI9cdstMYVajMgt9WnIN0pEyVvbofsxc6a5z0KVnkHNkLjrTNyqNuIhAxje98R8PMVQN0BqhP9yMHaYEKYuVHDfG8csPVTMWvi6%2FDmdxFfAyffyKO8qsxH9zRxsiPRqRMPnfzCI4S12w4%2BcFqPKC9mPRVRRvWDlzDxYQ3uNHJJEkmOPMOrpv8IcJESy1sVp1AwtVfPcG21dn4j86L547SfxDjC%2BmS&X-Amz-Signature=dc618095dd47cee0a1fe502bb4f8627aad8e5a3af3117ecf1aa52dfb55882fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
