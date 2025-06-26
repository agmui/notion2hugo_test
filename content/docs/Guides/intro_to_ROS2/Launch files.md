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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUR3OYR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHd0YmsQJ2uIyIDgOW7H%2Br3daJ6f1mE2PBbDmnNz8uN3AiEA09%2BXSgxUDvKWFS1yG700G4jrPRIqmMJiv8WHU%2FTNoFgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMwxz5Vfs9oMrFBBRircA8Xh%2Fpgnt%2FirU68ZEwt4rOWtyKDqB%2BbRMkOXDFyn%2B2oZ%2F5KlBIW4q9mMckt3d3WHTmVbC5zQKZCHqJ1Xp%2B9hBNfx5DDocYlRkDcIcLbg65fzNdeL08gsRDCulRY5z9lymC5US4f2PiAtH5%2Bz8Loz64OgDSF0Yo51XFS6i08YzEL5ykAtqSSfmj0Nd7ZpyREFPpzFgt3XQ6cxR39BWSAMVmVWeUZHXT1kYC1BgtVq6EHlnOdkXqqiFtEsG1Huz5yB2S2uFD3DUgUj0b7cZjdTiX%2F7%2FIuZp21DOY8AY%2BZwuDsdUc1fPQysk%2FgdAs9bNFdoMtYOlBU%2Fn9uEOa5QjXVzCuB81sn9B3SAvils4IW8iVquKZQKdStQJVUdB8X8sKcQr4WZEQHzBdtvzMrauRYqEytc95qqKJXP%2Fmct%2Ftat4XXl%2BHmGmSHRlgVrYIwcuHUc%2F6rR%2Bq%2BxNn%2FpGdd75SFctF3uVI0uCrPfaWv%2BZoiZx8G%2FQIolOpSSp35YNse2KsVdQS1J2yo%2B2Xn%2BWISgUWM7UIkVBScJE3LK9mcEbRr3itnj9M0%2Fsl23hKQECkAFQ49FLtjdCpWSZAMxEbGWM7n2ZptU7YLTELrUaXW0MN6r8EJGApi4J%2BXFcw4AgUARMJ7q88IGOqUBO283aSTPjFipJ7xj9NywQDXPEOm2BYNAhSKaltYBp8RiL%2B%2BItrjZY9F3zA1oA%2Bf9r6bAL0cIbNHKyZGpxH%2F3%2FNrOGTFPcNefMuDjZCn217PRCv6f137%2BN%2Bz7uVZL7HTSG8p%2BhkUxA3W8A4uJchRgm5HZVKYj4TmawL710Q4ZPun1ke8Nn69mdC68%2ByZkSo7TZSVGY8kb92sL05Iz8p%2FQyXOlWXmo&X-Amz-Signature=e32e5bf6bcbc26d6d93f8b295a01768b4bf32b4cfac6abea4df835c2f6251835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUR3OYR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHd0YmsQJ2uIyIDgOW7H%2Br3daJ6f1mE2PBbDmnNz8uN3AiEA09%2BXSgxUDvKWFS1yG700G4jrPRIqmMJiv8WHU%2FTNoFgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMwxz5Vfs9oMrFBBRircA8Xh%2Fpgnt%2FirU68ZEwt4rOWtyKDqB%2BbRMkOXDFyn%2B2oZ%2F5KlBIW4q9mMckt3d3WHTmVbC5zQKZCHqJ1Xp%2B9hBNfx5DDocYlRkDcIcLbg65fzNdeL08gsRDCulRY5z9lymC5US4f2PiAtH5%2Bz8Loz64OgDSF0Yo51XFS6i08YzEL5ykAtqSSfmj0Nd7ZpyREFPpzFgt3XQ6cxR39BWSAMVmVWeUZHXT1kYC1BgtVq6EHlnOdkXqqiFtEsG1Huz5yB2S2uFD3DUgUj0b7cZjdTiX%2F7%2FIuZp21DOY8AY%2BZwuDsdUc1fPQysk%2FgdAs9bNFdoMtYOlBU%2Fn9uEOa5QjXVzCuB81sn9B3SAvils4IW8iVquKZQKdStQJVUdB8X8sKcQr4WZEQHzBdtvzMrauRYqEytc95qqKJXP%2Fmct%2Ftat4XXl%2BHmGmSHRlgVrYIwcuHUc%2F6rR%2Bq%2BxNn%2FpGdd75SFctF3uVI0uCrPfaWv%2BZoiZx8G%2FQIolOpSSp35YNse2KsVdQS1J2yo%2B2Xn%2BWISgUWM7UIkVBScJE3LK9mcEbRr3itnj9M0%2Fsl23hKQECkAFQ49FLtjdCpWSZAMxEbGWM7n2ZptU7YLTELrUaXW0MN6r8EJGApi4J%2BXFcw4AgUARMJ7q88IGOqUBO283aSTPjFipJ7xj9NywQDXPEOm2BYNAhSKaltYBp8RiL%2B%2BItrjZY9F3zA1oA%2Bf9r6bAL0cIbNHKyZGpxH%2F3%2FNrOGTFPcNefMuDjZCn217PRCv6f137%2BN%2Bz7uVZL7HTSG8p%2BhkUxA3W8A4uJchRgm5HZVKYj4TmawL710Q4ZPun1ke8Nn69mdC68%2ByZkSo7TZSVGY8kb92sL05Iz8p%2FQyXOlWXmo&X-Amz-Signature=db7cd1784eb14b6b03e86f6f8cae446a67965a79a44845c0c8512fe32f04bce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUR3OYR%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHd0YmsQJ2uIyIDgOW7H%2Br3daJ6f1mE2PBbDmnNz8uN3AiEA09%2BXSgxUDvKWFS1yG700G4jrPRIqmMJiv8WHU%2FTNoFgq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMwxz5Vfs9oMrFBBRircA8Xh%2Fpgnt%2FirU68ZEwt4rOWtyKDqB%2BbRMkOXDFyn%2B2oZ%2F5KlBIW4q9mMckt3d3WHTmVbC5zQKZCHqJ1Xp%2B9hBNfx5DDocYlRkDcIcLbg65fzNdeL08gsRDCulRY5z9lymC5US4f2PiAtH5%2Bz8Loz64OgDSF0Yo51XFS6i08YzEL5ykAtqSSfmj0Nd7ZpyREFPpzFgt3XQ6cxR39BWSAMVmVWeUZHXT1kYC1BgtVq6EHlnOdkXqqiFtEsG1Huz5yB2S2uFD3DUgUj0b7cZjdTiX%2F7%2FIuZp21DOY8AY%2BZwuDsdUc1fPQysk%2FgdAs9bNFdoMtYOlBU%2Fn9uEOa5QjXVzCuB81sn9B3SAvils4IW8iVquKZQKdStQJVUdB8X8sKcQr4WZEQHzBdtvzMrauRYqEytc95qqKJXP%2Fmct%2Ftat4XXl%2BHmGmSHRlgVrYIwcuHUc%2F6rR%2Bq%2BxNn%2FpGdd75SFctF3uVI0uCrPfaWv%2BZoiZx8G%2FQIolOpSSp35YNse2KsVdQS1J2yo%2B2Xn%2BWISgUWM7UIkVBScJE3LK9mcEbRr3itnj9M0%2Fsl23hKQECkAFQ49FLtjdCpWSZAMxEbGWM7n2ZptU7YLTELrUaXW0MN6r8EJGApi4J%2BXFcw4AgUARMJ7q88IGOqUBO283aSTPjFipJ7xj9NywQDXPEOm2BYNAhSKaltYBp8RiL%2B%2BItrjZY9F3zA1oA%2Bf9r6bAL0cIbNHKyZGpxH%2F3%2FNrOGTFPcNefMuDjZCn217PRCv6f137%2BN%2Bz7uVZL7HTSG8p%2BhkUxA3W8A4uJchRgm5HZVKYj4TmawL710Q4ZPun1ke8Nn69mdC68%2ByZkSo7TZSVGY8kb92sL05Iz8p%2FQyXOlWXmo&X-Amz-Signature=5ee1d379ee9c440be843d4e3af95b4ff4310ad741de93012cba666a63462fdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
