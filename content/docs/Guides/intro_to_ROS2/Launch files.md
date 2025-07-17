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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSTHDOC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCW%2FI9l7rBvv9lSUxwUi9c4jQXob0r64wJJRiebO8jBPgIhAIoVyZrJvnZNGq0NJVKw5nwBfTjGapcLhLxWz8mtJySsKv8DCHAQABoMNjM3NDIzMTgzODA1Igzf1z2afOohzf5fsL8q3APf%2FJrn0JB73EbgOpH0Qirl3VF4pULdgSeITO2GcrzKwkt6K%2BcOtKIgj%2F%2BS0%2FjZYT%2BdP6gP%2B8dXHN88OMU3YZ90vciSLR0HO5BsNW1zflG5UvOq2%2BhrN9EzAN2r3wLYsYVsCXQdq%2F1x9vdzcn8MzrvbgMQ2jq3iLXlhIUJqADBlFQVlcFRhqTA20Jh1Ts%2B8FfCKoLV%2BA%2F%2Bt9LZBOXaUviSsM%2BymfhQ%2Fpg6R%2BY2UgMs%2B%2BjpTwMKO3oy9ZeWrYv%2BIoSpnUKHRnbG9PnYdDp4AHCrmljzG7FpBJQR%2FPHnHX%2Ffz5sc4JjQbI%2FTsFDLAhs85MnFdstyO67eEDDaw0FQ3Sen9ppzbjn4VrXRv2y%2Fyh%2F40wqxvdiahmmlb3KlYkGyhwolFMgCNFHacY%2Bjw%2FkCtR74LFRS2jpUEcPj0dgUcQctia16N9ynrDie%2FYYB%2FDwSZIsp6YqmgI%2FnoyATAnz41BZRtsPBT0WmYoD%2Bqq2c8gLpOqkdPvWHheav3nKtUa2micID0eddG63iW%2FOuZd8i%2BmkNgTOtiTUqco6GY4kxt56te3w%2F2N3b5iHAmS5cRpIgUwtZiHipcGLCpcwzRbpBGLhQO13fw5sx%2B4Wcc24C53NcbwL7T9%2FSdXXaVtRk2STCDwOLDBjqkAZ0AFWuWZNm49KYuLAfFD5iVHbtgJ%2BTSyj7eLAly0smsEKvp%2BNPVdtBjT9gkR5Ofj%2BocPBqbaheRIvzAV1uHx6VdtFwU7%2F%2ByRiY8T8vORWNn0Z13O0ncSau1990jk34tarbctDjT2mEufuhcyczdjnvXVODAtmNV%2F4sFTnYMk%2FQ8W9v%2B5xjRJWMGl12Deh02ehNuy0pxDz3rGriDe2rZtYkfffEh&X-Amz-Signature=7e5c21ad4a7bb4df3cdd5711fcddc1098745c1286ceff2496e8909d380322b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSTHDOC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCW%2FI9l7rBvv9lSUxwUi9c4jQXob0r64wJJRiebO8jBPgIhAIoVyZrJvnZNGq0NJVKw5nwBfTjGapcLhLxWz8mtJySsKv8DCHAQABoMNjM3NDIzMTgzODA1Igzf1z2afOohzf5fsL8q3APf%2FJrn0JB73EbgOpH0Qirl3VF4pULdgSeITO2GcrzKwkt6K%2BcOtKIgj%2F%2BS0%2FjZYT%2BdP6gP%2B8dXHN88OMU3YZ90vciSLR0HO5BsNW1zflG5UvOq2%2BhrN9EzAN2r3wLYsYVsCXQdq%2F1x9vdzcn8MzrvbgMQ2jq3iLXlhIUJqADBlFQVlcFRhqTA20Jh1Ts%2B8FfCKoLV%2BA%2F%2Bt9LZBOXaUviSsM%2BymfhQ%2Fpg6R%2BY2UgMs%2B%2BjpTwMKO3oy9ZeWrYv%2BIoSpnUKHRnbG9PnYdDp4AHCrmljzG7FpBJQR%2FPHnHX%2Ffz5sc4JjQbI%2FTsFDLAhs85MnFdstyO67eEDDaw0FQ3Sen9ppzbjn4VrXRv2y%2Fyh%2F40wqxvdiahmmlb3KlYkGyhwolFMgCNFHacY%2Bjw%2FkCtR74LFRS2jpUEcPj0dgUcQctia16N9ynrDie%2FYYB%2FDwSZIsp6YqmgI%2FnoyATAnz41BZRtsPBT0WmYoD%2Bqq2c8gLpOqkdPvWHheav3nKtUa2micID0eddG63iW%2FOuZd8i%2BmkNgTOtiTUqco6GY4kxt56te3w%2F2N3b5iHAmS5cRpIgUwtZiHipcGLCpcwzRbpBGLhQO13fw5sx%2B4Wcc24C53NcbwL7T9%2FSdXXaVtRk2STCDwOLDBjqkAZ0AFWuWZNm49KYuLAfFD5iVHbtgJ%2BTSyj7eLAly0smsEKvp%2BNPVdtBjT9gkR5Ofj%2BocPBqbaheRIvzAV1uHx6VdtFwU7%2F%2ByRiY8T8vORWNn0Z13O0ncSau1990jk34tarbctDjT2mEufuhcyczdjnvXVODAtmNV%2F4sFTnYMk%2FQ8W9v%2B5xjRJWMGl12Deh02ehNuy0pxDz3rGriDe2rZtYkfffEh&X-Amz-Signature=31c8ee29f31d45498b4cb2ce22b9e189d012ccd6a240af517bfb67281ad25989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKSTHDOC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCW%2FI9l7rBvv9lSUxwUi9c4jQXob0r64wJJRiebO8jBPgIhAIoVyZrJvnZNGq0NJVKw5nwBfTjGapcLhLxWz8mtJySsKv8DCHAQABoMNjM3NDIzMTgzODA1Igzf1z2afOohzf5fsL8q3APf%2FJrn0JB73EbgOpH0Qirl3VF4pULdgSeITO2GcrzKwkt6K%2BcOtKIgj%2F%2BS0%2FjZYT%2BdP6gP%2B8dXHN88OMU3YZ90vciSLR0HO5BsNW1zflG5UvOq2%2BhrN9EzAN2r3wLYsYVsCXQdq%2F1x9vdzcn8MzrvbgMQ2jq3iLXlhIUJqADBlFQVlcFRhqTA20Jh1Ts%2B8FfCKoLV%2BA%2F%2Bt9LZBOXaUviSsM%2BymfhQ%2Fpg6R%2BY2UgMs%2B%2BjpTwMKO3oy9ZeWrYv%2BIoSpnUKHRnbG9PnYdDp4AHCrmljzG7FpBJQR%2FPHnHX%2Ffz5sc4JjQbI%2FTsFDLAhs85MnFdstyO67eEDDaw0FQ3Sen9ppzbjn4VrXRv2y%2Fyh%2F40wqxvdiahmmlb3KlYkGyhwolFMgCNFHacY%2Bjw%2FkCtR74LFRS2jpUEcPj0dgUcQctia16N9ynrDie%2FYYB%2FDwSZIsp6YqmgI%2FnoyATAnz41BZRtsPBT0WmYoD%2Bqq2c8gLpOqkdPvWHheav3nKtUa2micID0eddG63iW%2FOuZd8i%2BmkNgTOtiTUqco6GY4kxt56te3w%2F2N3b5iHAmS5cRpIgUwtZiHipcGLCpcwzRbpBGLhQO13fw5sx%2B4Wcc24C53NcbwL7T9%2FSdXXaVtRk2STCDwOLDBjqkAZ0AFWuWZNm49KYuLAfFD5iVHbtgJ%2BTSyj7eLAly0smsEKvp%2BNPVdtBjT9gkR5Ofj%2BocPBqbaheRIvzAV1uHx6VdtFwU7%2F%2ByRiY8T8vORWNn0Z13O0ncSau1990jk34tarbctDjT2mEufuhcyczdjnvXVODAtmNV%2F4sFTnYMk%2FQ8W9v%2B5xjRJWMGl12Deh02ehNuy0pxDz3rGriDe2rZtYkfffEh&X-Amz-Signature=9be0bc7503d92edc2374c4aac00fcfd1b8822b101dd181fdf004036f663d007c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
