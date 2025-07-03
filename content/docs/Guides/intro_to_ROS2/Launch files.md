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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJ6AWY6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCLjCuigOu0hEGXoBW1FpynVBLPoY7v5YkDu13I%2BKNyDwIhAKwGWippDZL5ZwteHj5AqKUOJrtIOaRTDZ7fS6VGBq2UKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXZwJD6qDgIeWWTkMq3AOdUvcbQpN95OPck%2BTIM%2FB9jIo%2Bb4mhox2Qmqrbxbrgm%2F3EpHRp%2B94FdCKFHJAlJ%2Bc0N8hj5gH6oHGKpS6kpRLhtiJsAPs2BQ5PIWgcBv%2FmBopNUaOjKLMYj%2FgdySYGKocNJmN2Dl%2FIS6MJ%2Bj8o4rnttcLhujcfnJ4jTJ5k2uwXltygIkahP3Aolb1%2BE3Pr8y8mB384gugqrwM2th0%2B1e9WIn6ISRizplLXnJHQciioMTIxPeBYDEUBheXOlu855TqzWIymn%2FGNNonBBXknetBPsqJNiVJ%2FYsOpqCm8YWDN1eyFyUZfGEZ1Ld4fF%2FN4MoZ1QF6TwOU2yBBOXZxJWi8Do6wlA%2FQbeipukwri0vHvJ2m%2FJyoFOGnE3c3ZWXbcFM6Jz1pBXJzylYfkY0SdO14PizLzLP1PGRNxdKoVC3Lw9QI4fTy6uYPQJ9fodbQzYD9nTRKLAO48SFQMR6x5Iozvm%2BpiwMG5nB%2FtH3j5PqqbMpRcM83xZo1GqMipL2FPK6rPnggpvVK%2FPb1e0RpkWGCoj8U2w9rBUxdluGZ0b3kZ4ythUCpzWSvtQFtC0qMJLBMTmmd%2FUeVQjuLQRaYYWX7zWvAEm0jiToj3muWbXJ1wXa94%2BhY%2F3xqs2HbmBjCouZrDBjqkAbpJzju8EQkbpsxXDQTiQA5xINrLJYvOjiilDq0pH0Rwo7SwI625iuYhZcG%2BAyKGchVyCjJLTIIgits%2Fc5EdimAip9yGLiNy18%2B%2BQRV4mnuO1RU%2Ffi8R%2FMbrTtCl8mzuqRDHaOxmqIjpRP0IUvxsE4QOAWpXz9HPoGlNH3X9X%2BcWSDTjADOm3%2BD%2BNFgq8eksEpUxBj1yhH9VgXfmrtgZbs6HwKnI&X-Amz-Signature=35014391f40901995a09e9cf2fbba85ea51823ca242f4f0af06ce0b87939db70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJ6AWY6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCLjCuigOu0hEGXoBW1FpynVBLPoY7v5YkDu13I%2BKNyDwIhAKwGWippDZL5ZwteHj5AqKUOJrtIOaRTDZ7fS6VGBq2UKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXZwJD6qDgIeWWTkMq3AOdUvcbQpN95OPck%2BTIM%2FB9jIo%2Bb4mhox2Qmqrbxbrgm%2F3EpHRp%2B94FdCKFHJAlJ%2Bc0N8hj5gH6oHGKpS6kpRLhtiJsAPs2BQ5PIWgcBv%2FmBopNUaOjKLMYj%2FgdySYGKocNJmN2Dl%2FIS6MJ%2Bj8o4rnttcLhujcfnJ4jTJ5k2uwXltygIkahP3Aolb1%2BE3Pr8y8mB384gugqrwM2th0%2B1e9WIn6ISRizplLXnJHQciioMTIxPeBYDEUBheXOlu855TqzWIymn%2FGNNonBBXknetBPsqJNiVJ%2FYsOpqCm8YWDN1eyFyUZfGEZ1Ld4fF%2FN4MoZ1QF6TwOU2yBBOXZxJWi8Do6wlA%2FQbeipukwri0vHvJ2m%2FJyoFOGnE3c3ZWXbcFM6Jz1pBXJzylYfkY0SdO14PizLzLP1PGRNxdKoVC3Lw9QI4fTy6uYPQJ9fodbQzYD9nTRKLAO48SFQMR6x5Iozvm%2BpiwMG5nB%2FtH3j5PqqbMpRcM83xZo1GqMipL2FPK6rPnggpvVK%2FPb1e0RpkWGCoj8U2w9rBUxdluGZ0b3kZ4ythUCpzWSvtQFtC0qMJLBMTmmd%2FUeVQjuLQRaYYWX7zWvAEm0jiToj3muWbXJ1wXa94%2BhY%2F3xqs2HbmBjCouZrDBjqkAbpJzju8EQkbpsxXDQTiQA5xINrLJYvOjiilDq0pH0Rwo7SwI625iuYhZcG%2BAyKGchVyCjJLTIIgits%2Fc5EdimAip9yGLiNy18%2B%2BQRV4mnuO1RU%2Ffi8R%2FMbrTtCl8mzuqRDHaOxmqIjpRP0IUvxsE4QOAWpXz9HPoGlNH3X9X%2BcWSDTjADOm3%2BD%2BNFgq8eksEpUxBj1yhH9VgXfmrtgZbs6HwKnI&X-Amz-Signature=43426d7d000881822d1fe34c295257e0874209f5cf1c2775627107bf0cec8baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLJ6AWY6%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQCLjCuigOu0hEGXoBW1FpynVBLPoY7v5YkDu13I%2BKNyDwIhAKwGWippDZL5ZwteHj5AqKUOJrtIOaRTDZ7fS6VGBq2UKv8DCBgQABoMNjM3NDIzMTgzODA1IgwXZwJD6qDgIeWWTkMq3AOdUvcbQpN95OPck%2BTIM%2FB9jIo%2Bb4mhox2Qmqrbxbrgm%2F3EpHRp%2B94FdCKFHJAlJ%2Bc0N8hj5gH6oHGKpS6kpRLhtiJsAPs2BQ5PIWgcBv%2FmBopNUaOjKLMYj%2FgdySYGKocNJmN2Dl%2FIS6MJ%2Bj8o4rnttcLhujcfnJ4jTJ5k2uwXltygIkahP3Aolb1%2BE3Pr8y8mB384gugqrwM2th0%2B1e9WIn6ISRizplLXnJHQciioMTIxPeBYDEUBheXOlu855TqzWIymn%2FGNNonBBXknetBPsqJNiVJ%2FYsOpqCm8YWDN1eyFyUZfGEZ1Ld4fF%2FN4MoZ1QF6TwOU2yBBOXZxJWi8Do6wlA%2FQbeipukwri0vHvJ2m%2FJyoFOGnE3c3ZWXbcFM6Jz1pBXJzylYfkY0SdO14PizLzLP1PGRNxdKoVC3Lw9QI4fTy6uYPQJ9fodbQzYD9nTRKLAO48SFQMR6x5Iozvm%2BpiwMG5nB%2FtH3j5PqqbMpRcM83xZo1GqMipL2FPK6rPnggpvVK%2FPb1e0RpkWGCoj8U2w9rBUxdluGZ0b3kZ4ythUCpzWSvtQFtC0qMJLBMTmmd%2FUeVQjuLQRaYYWX7zWvAEm0jiToj3muWbXJ1wXa94%2BhY%2F3xqs2HbmBjCouZrDBjqkAbpJzju8EQkbpsxXDQTiQA5xINrLJYvOjiilDq0pH0Rwo7SwI625iuYhZcG%2BAyKGchVyCjJLTIIgits%2Fc5EdimAip9yGLiNy18%2B%2BQRV4mnuO1RU%2Ffi8R%2FMbrTtCl8mzuqRDHaOxmqIjpRP0IUvxsE4QOAWpXz9HPoGlNH3X9X%2BcWSDTjADOm3%2BD%2BNFgq8eksEpUxBj1yhH9VgXfmrtgZbs6HwKnI&X-Amz-Signature=c318b6b83f16e3daebf4c524c885c18be7d27d34df057dac362d86c9260ee66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
