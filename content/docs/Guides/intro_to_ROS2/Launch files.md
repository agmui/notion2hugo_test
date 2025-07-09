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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFCMWP7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcLImqcmU35uhfgKfT%2FbsdZ5uVykKCVkNzJb8g3hy8WAIhAIe6ANNotR4qYoidHIvb93z19wVPTn5vQiU4DRPt81H2KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxr76f45rOlOIeSHoq3ANU58Ydno5N1oONd4Vx8nqetmzCpP4L1kNVwc2i78J%2Bk9jrDwvCOYF2rTFPCjUweh0EW8xr2Q8cdmm1Vuxx7IJvjcjTTCqoyWYFHnydDfPusfPRCiY%2FqZv77J2JuiVNvuLCHm84292q3wQ6AkHvPSWIjmSEXiTEbK8Bkg8oBf7mJj7Un%2Bn5dtSDKlPMupY%2Fbj7D8jy77l6JWkOEu1VgOcBAvBfe3Wd9ELFS9ttSy6kXHeP7ziaG8Wss3%2B%2Fjyr1WqvrVVbJILCeONZ0NEoq7niBpcJFBQNqmjY%2BQ0cwsoWMFcQCKx9yBUm%2BOWB%2FpWXW3zC5ZxyqW0P6oEWDb8NF9VQfyts6rMkQfPg%2FU4JbzwVjCDb%2BM7Jlyex48mP30Rp9ZARYYw2UibHmY8JgTFmDVE7UR2dYO%2Fyae3iyhzn7mgND57mipGgHeBF1qqwfOiAAFq3z1qgdN2lBDMXP0Q2ov2fnABnlT7RrEdYQz%2Faqx8WYD0nUj5zBdS5hjk9PCCkbPzM1N%2FldclDKYa%2F%2BAS3f7L%2BJmS9r9eSf3%2FXkybnWzFAhBOVn%2BSHLyGfChDcrT13HfxYL%2BL12iZii52aYtLePBoTgk9yRZhaddUJA8GMyHZBQ3YkybbSu8hDMaMm3VYjCTtLbDBjqkAQsoDAcRDxHYhcQExZTIyKdlOfb%2BM%2FaDcGUV1HMrnrzx2thAh6oQzDA2yZgTndGGC6sCNTpsjuoH3s%2BhhtvsKZCh95fegVDGcZ93V8nllCwdN%2Bi763Tx9OsLcWEz3Iu4lHom%2BkEeQs5i2OI5K1%2B2nOqfGGBJDuQPRQKtAcSGEhFcVGa2i82TRvUPsDUWW5nS7KQ%2Fs4kLnMzd8yOGeavJsArWSowt&X-Amz-Signature=a356d134de2d2b1258c00ae9ad1b12b2245c82655e5ce7bfc574c6a15ab39e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFCMWP7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcLImqcmU35uhfgKfT%2FbsdZ5uVykKCVkNzJb8g3hy8WAIhAIe6ANNotR4qYoidHIvb93z19wVPTn5vQiU4DRPt81H2KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxr76f45rOlOIeSHoq3ANU58Ydno5N1oONd4Vx8nqetmzCpP4L1kNVwc2i78J%2Bk9jrDwvCOYF2rTFPCjUweh0EW8xr2Q8cdmm1Vuxx7IJvjcjTTCqoyWYFHnydDfPusfPRCiY%2FqZv77J2JuiVNvuLCHm84292q3wQ6AkHvPSWIjmSEXiTEbK8Bkg8oBf7mJj7Un%2Bn5dtSDKlPMupY%2Fbj7D8jy77l6JWkOEu1VgOcBAvBfe3Wd9ELFS9ttSy6kXHeP7ziaG8Wss3%2B%2Fjyr1WqvrVVbJILCeONZ0NEoq7niBpcJFBQNqmjY%2BQ0cwsoWMFcQCKx9yBUm%2BOWB%2FpWXW3zC5ZxyqW0P6oEWDb8NF9VQfyts6rMkQfPg%2FU4JbzwVjCDb%2BM7Jlyex48mP30Rp9ZARYYw2UibHmY8JgTFmDVE7UR2dYO%2Fyae3iyhzn7mgND57mipGgHeBF1qqwfOiAAFq3z1qgdN2lBDMXP0Q2ov2fnABnlT7RrEdYQz%2Faqx8WYD0nUj5zBdS5hjk9PCCkbPzM1N%2FldclDKYa%2F%2BAS3f7L%2BJmS9r9eSf3%2FXkybnWzFAhBOVn%2BSHLyGfChDcrT13HfxYL%2BL12iZii52aYtLePBoTgk9yRZhaddUJA8GMyHZBQ3YkybbSu8hDMaMm3VYjCTtLbDBjqkAQsoDAcRDxHYhcQExZTIyKdlOfb%2BM%2FaDcGUV1HMrnrzx2thAh6oQzDA2yZgTndGGC6sCNTpsjuoH3s%2BhhtvsKZCh95fegVDGcZ93V8nllCwdN%2Bi763Tx9OsLcWEz3Iu4lHom%2BkEeQs5i2OI5K1%2B2nOqfGGBJDuQPRQKtAcSGEhFcVGa2i82TRvUPsDUWW5nS7KQ%2Fs4kLnMzd8yOGeavJsArWSowt&X-Amz-Signature=d5de1ed782a4b4fd037338dc4cfa6a16e50450969b793c33136b96ba0fe78e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFCMWP7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcLImqcmU35uhfgKfT%2FbsdZ5uVykKCVkNzJb8g3hy8WAIhAIe6ANNotR4qYoidHIvb93z19wVPTn5vQiU4DRPt81H2KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxr76f45rOlOIeSHoq3ANU58Ydno5N1oONd4Vx8nqetmzCpP4L1kNVwc2i78J%2Bk9jrDwvCOYF2rTFPCjUweh0EW8xr2Q8cdmm1Vuxx7IJvjcjTTCqoyWYFHnydDfPusfPRCiY%2FqZv77J2JuiVNvuLCHm84292q3wQ6AkHvPSWIjmSEXiTEbK8Bkg8oBf7mJj7Un%2Bn5dtSDKlPMupY%2Fbj7D8jy77l6JWkOEu1VgOcBAvBfe3Wd9ELFS9ttSy6kXHeP7ziaG8Wss3%2B%2Fjyr1WqvrVVbJILCeONZ0NEoq7niBpcJFBQNqmjY%2BQ0cwsoWMFcQCKx9yBUm%2BOWB%2FpWXW3zC5ZxyqW0P6oEWDb8NF9VQfyts6rMkQfPg%2FU4JbzwVjCDb%2BM7Jlyex48mP30Rp9ZARYYw2UibHmY8JgTFmDVE7UR2dYO%2Fyae3iyhzn7mgND57mipGgHeBF1qqwfOiAAFq3z1qgdN2lBDMXP0Q2ov2fnABnlT7RrEdYQz%2Faqx8WYD0nUj5zBdS5hjk9PCCkbPzM1N%2FldclDKYa%2F%2BAS3f7L%2BJmS9r9eSf3%2FXkybnWzFAhBOVn%2BSHLyGfChDcrT13HfxYL%2BL12iZii52aYtLePBoTgk9yRZhaddUJA8GMyHZBQ3YkybbSu8hDMaMm3VYjCTtLbDBjqkAQsoDAcRDxHYhcQExZTIyKdlOfb%2BM%2FaDcGUV1HMrnrzx2thAh6oQzDA2yZgTndGGC6sCNTpsjuoH3s%2BhhtvsKZCh95fegVDGcZ93V8nllCwdN%2Bi763Tx9OsLcWEz3Iu4lHom%2BkEeQs5i2OI5K1%2B2nOqfGGBJDuQPRQKtAcSGEhFcVGa2i82TRvUPsDUWW5nS7KQ%2Fs4kLnMzd8yOGeavJsArWSowt&X-Amz-Signature=1b5db7e4c3713c457c01378248f719195c501787cd953d864d919826417e9781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
