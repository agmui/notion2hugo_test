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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI64OAPG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICpYRh6LU1MZsVihkCnIH2YCgkFIxMDyOBOAEIo1kIM5AiEAoqNtY3ShI796AM4%2BderdQ1hFcZ6g2ek0lJP0%2FsQFgbQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId1af3BsyvvmAWZICrcA7wE%2BeQG5NeyngHtfwTWb661B4C%2BMaGTpxbJc2aJdlPmjCDCmWr9h6jDXdRxWIoYGhGPbcCE9teRFsxxF%2BQX09ZcLVabGbTqZ3Yi9Nj4bhh6sfBhmSbvsqUaBzyHemhJq19kzGl3RkeZLGLb%2FNGo32AoQnGAWeOY9nkD2gfzPxCrQDlARzSYLf4G5%2B9UqKoLogNK%2BOvbpmW3B8gtmaFZ5aBmipH9SmLs24ofRtzksfptR%2FXKfVaXDpFDIc6A8RsebVvtgAr%2Fg1zjdagPbUnX8Vswe0vO5I5q6ItrPhw9S3O6b081mAsB5Qkw1oh88FFG%2F%2FWVZi2Ti3NcKnePhp7RJPCtHZRLDHiNbDGhjLSVKUjyyEzVZ2joL%2FP8AbrRobUavG4VKmSWuPi4nTgC5iQ58VWu2COsyo9M0i311LBxvxZLOUr5P%2FFooSzd%2FcAObghMvqYTjoTw1xfkPkYB4Rg0mC92rYFWBLyY0RYbWmSytDiIS8X5YyZEFzmCtkHA0ONsoVaLnPMgzMQXV0irpKOA7uUy%2FQHM5FozZWTsjQEslZc2cjv2PGOLt8%2FL8N9qyEHy3Ozx3dZQkxgl4JASTVJ1tJ3SDLb6%2FUiNJoCjCyKVdeQCOsAjZU4CFfhItR6%2FMIvsh8EGOqUBcq8%2BK9l%2FstzzyqCIrwqeT2xTYKcai4gUBUwiipIjLa9KzfIcUjw8Zmx6bktNJeMxB49KsPz80wwFqZfFMd7imd5fPam4pIWg%2BL0Wlq87LfboKD9tHw3%2BUqWmu%2BJ%2FboFJxVRd6K1Bmh6EtGkL%2B9RRcy0IzsbD8DtCyueTX3KusFPJuenWlRF0hQt2saPps%2Be4097X7SAU7kv%2FNTZHKJNKMvMlfI3k&X-Amz-Signature=c8ee5284e2b79275f6d7553b13656602a979bab598d9f36dd42a0c16ac94210b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI64OAPG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICpYRh6LU1MZsVihkCnIH2YCgkFIxMDyOBOAEIo1kIM5AiEAoqNtY3ShI796AM4%2BderdQ1hFcZ6g2ek0lJP0%2FsQFgbQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId1af3BsyvvmAWZICrcA7wE%2BeQG5NeyngHtfwTWb661B4C%2BMaGTpxbJc2aJdlPmjCDCmWr9h6jDXdRxWIoYGhGPbcCE9teRFsxxF%2BQX09ZcLVabGbTqZ3Yi9Nj4bhh6sfBhmSbvsqUaBzyHemhJq19kzGl3RkeZLGLb%2FNGo32AoQnGAWeOY9nkD2gfzPxCrQDlARzSYLf4G5%2B9UqKoLogNK%2BOvbpmW3B8gtmaFZ5aBmipH9SmLs24ofRtzksfptR%2FXKfVaXDpFDIc6A8RsebVvtgAr%2Fg1zjdagPbUnX8Vswe0vO5I5q6ItrPhw9S3O6b081mAsB5Qkw1oh88FFG%2F%2FWVZi2Ti3NcKnePhp7RJPCtHZRLDHiNbDGhjLSVKUjyyEzVZ2joL%2FP8AbrRobUavG4VKmSWuPi4nTgC5iQ58VWu2COsyo9M0i311LBxvxZLOUr5P%2FFooSzd%2FcAObghMvqYTjoTw1xfkPkYB4Rg0mC92rYFWBLyY0RYbWmSytDiIS8X5YyZEFzmCtkHA0ONsoVaLnPMgzMQXV0irpKOA7uUy%2FQHM5FozZWTsjQEslZc2cjv2PGOLt8%2FL8N9qyEHy3Ozx3dZQkxgl4JASTVJ1tJ3SDLb6%2FUiNJoCjCyKVdeQCOsAjZU4CFfhItR6%2FMIvsh8EGOqUBcq8%2BK9l%2FstzzyqCIrwqeT2xTYKcai4gUBUwiipIjLa9KzfIcUjw8Zmx6bktNJeMxB49KsPz80wwFqZfFMd7imd5fPam4pIWg%2BL0Wlq87LfboKD9tHw3%2BUqWmu%2BJ%2FboFJxVRd6K1Bmh6EtGkL%2B9RRcy0IzsbD8DtCyueTX3KusFPJuenWlRF0hQt2saPps%2Be4097X7SAU7kv%2FNTZHKJNKMvMlfI3k&X-Amz-Signature=42f47353356db4ac8698836f91e2babe4316af116c1b17572b1810f4aa2dd836&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI64OAPG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T132448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICpYRh6LU1MZsVihkCnIH2YCgkFIxMDyOBOAEIo1kIM5AiEAoqNtY3ShI796AM4%2BderdQ1hFcZ6g2ek0lJP0%2FsQFgbQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDId1af3BsyvvmAWZICrcA7wE%2BeQG5NeyngHtfwTWb661B4C%2BMaGTpxbJc2aJdlPmjCDCmWr9h6jDXdRxWIoYGhGPbcCE9teRFsxxF%2BQX09ZcLVabGbTqZ3Yi9Nj4bhh6sfBhmSbvsqUaBzyHemhJq19kzGl3RkeZLGLb%2FNGo32AoQnGAWeOY9nkD2gfzPxCrQDlARzSYLf4G5%2B9UqKoLogNK%2BOvbpmW3B8gtmaFZ5aBmipH9SmLs24ofRtzksfptR%2FXKfVaXDpFDIc6A8RsebVvtgAr%2Fg1zjdagPbUnX8Vswe0vO5I5q6ItrPhw9S3O6b081mAsB5Qkw1oh88FFG%2F%2FWVZi2Ti3NcKnePhp7RJPCtHZRLDHiNbDGhjLSVKUjyyEzVZ2joL%2FP8AbrRobUavG4VKmSWuPi4nTgC5iQ58VWu2COsyo9M0i311LBxvxZLOUr5P%2FFooSzd%2FcAObghMvqYTjoTw1xfkPkYB4Rg0mC92rYFWBLyY0RYbWmSytDiIS8X5YyZEFzmCtkHA0ONsoVaLnPMgzMQXV0irpKOA7uUy%2FQHM5FozZWTsjQEslZc2cjv2PGOLt8%2FL8N9qyEHy3Ozx3dZQkxgl4JASTVJ1tJ3SDLb6%2FUiNJoCjCyKVdeQCOsAjZU4CFfhItR6%2FMIvsh8EGOqUBcq8%2BK9l%2FstzzyqCIrwqeT2xTYKcai4gUBUwiipIjLa9KzfIcUjw8Zmx6bktNJeMxB49KsPz80wwFqZfFMd7imd5fPam4pIWg%2BL0Wlq87LfboKD9tHw3%2BUqWmu%2BJ%2FboFJxVRd6K1Bmh6EtGkL%2B9RRcy0IzsbD8DtCyueTX3KusFPJuenWlRF0hQt2saPps%2Be4097X7SAU7kv%2FNTZHKJNKMvMlfI3k&X-Amz-Signature=b9935da45eecd46164213d72d12bb89f50759dafdca515a50a9c29611bdf6eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
