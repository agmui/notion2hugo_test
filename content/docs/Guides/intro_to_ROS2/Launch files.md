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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWFJHTO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGvmoa%2F0nB6JZSj20htzPVDV8Dvgz7jY5Dkvhy8w9j4oAiEAsRuwnDHZX1PUyuCowCneTwADLfA3sd%2FiP3leCDZoMiQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVCMRmaSUphXYT0ZSrcAybzDeTVwwtbmekWpYKgWFhMLjrS1Yq8mP0YNnsyuQJmcVhFn1zBD%2B%2FPQGW8Q06iBbOIA5PCBZMmWZPmaMkQlMBZkj9eIYD7Xb3nIIVe88%2Bt7FiCF6MbqFPIu7XEtHhipxwceDluz0EpCRd2q1JYaenQFeODQDlk0URAg7AgL%2BLp7kREp6CRLvvHIkofpqgxYFafbMIUmPFlPzCs1bRF1Uc06s9iyfvq2i9jt7FiYNf%2BtbgDKwhJNVz%2FEGVQwF0vkIhLIEdCSBpmW3m9hbG%2BNH%2FRdj9Ap8jOPfeHRdNzNGJSZKAd2KpxHG5H2WxM7ZgF2JmGVEjhJ%2B162waCGAgTKZ9kdWx5Jv7Xi0FQ0Ac83bOmkzNl1ZTKBC8ZIDvJvSnSKTvRcDWOgbE7AnhDrW6DO4VV3UvcG5DBufVX%2BiDzXaZGenIbd5X2GNu7fesG5o2aS%2BuUuiTZuuxI3Rh77tnTg3oJq8SaxTUVZlPizebzb8uCTCWbadM6hkoK7M4Wj%2BlyAOJIXgQ9jKQgvppq7f3Mddb%2FHf%2F3Yfy8qZTf%2FBgam%2FNb8nnKIFv9PGdzEeCUeshtqk0%2BXSqJZdafIa6EOp%2FuLIK0U2fWhaHNGxh0AxlxGmkDg5wQeuk1ZSVAgDbMMNrA8L4GOqUBIkimxFWl3fo8czWlEUuvRuWddL6EeREax4L8LuUT909WXb2iQ7SiaN7pcJCOu37px4SffFZCoiQ5mNDHZEEJPSQsw5W7%2F8uS40bADwHg3jQM%2BOVCh58Vfmmtvp03nr1Doqc90EQwQRTqoEcV2yBJtgwx2m6atsbRbDUD9zziqCEp0A6zXSH3oLtQZ5uAYriQxTgONPXlLYI6%2B%2Boz8pc%2Bui%2FO4T4H&X-Amz-Signature=353b8620f88d98eb9d60f0d8569169186e23f9cf65afb48be1a9c08905680445&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWFJHTO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGvmoa%2F0nB6JZSj20htzPVDV8Dvgz7jY5Dkvhy8w9j4oAiEAsRuwnDHZX1PUyuCowCneTwADLfA3sd%2FiP3leCDZoMiQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVCMRmaSUphXYT0ZSrcAybzDeTVwwtbmekWpYKgWFhMLjrS1Yq8mP0YNnsyuQJmcVhFn1zBD%2B%2FPQGW8Q06iBbOIA5PCBZMmWZPmaMkQlMBZkj9eIYD7Xb3nIIVe88%2Bt7FiCF6MbqFPIu7XEtHhipxwceDluz0EpCRd2q1JYaenQFeODQDlk0URAg7AgL%2BLp7kREp6CRLvvHIkofpqgxYFafbMIUmPFlPzCs1bRF1Uc06s9iyfvq2i9jt7FiYNf%2BtbgDKwhJNVz%2FEGVQwF0vkIhLIEdCSBpmW3m9hbG%2BNH%2FRdj9Ap8jOPfeHRdNzNGJSZKAd2KpxHG5H2WxM7ZgF2JmGVEjhJ%2B162waCGAgTKZ9kdWx5Jv7Xi0FQ0Ac83bOmkzNl1ZTKBC8ZIDvJvSnSKTvRcDWOgbE7AnhDrW6DO4VV3UvcG5DBufVX%2BiDzXaZGenIbd5X2GNu7fesG5o2aS%2BuUuiTZuuxI3Rh77tnTg3oJq8SaxTUVZlPizebzb8uCTCWbadM6hkoK7M4Wj%2BlyAOJIXgQ9jKQgvppq7f3Mddb%2FHf%2F3Yfy8qZTf%2FBgam%2FNb8nnKIFv9PGdzEeCUeshtqk0%2BXSqJZdafIa6EOp%2FuLIK0U2fWhaHNGxh0AxlxGmkDg5wQeuk1ZSVAgDbMMNrA8L4GOqUBIkimxFWl3fo8czWlEUuvRuWddL6EeREax4L8LuUT909WXb2iQ7SiaN7pcJCOu37px4SffFZCoiQ5mNDHZEEJPSQsw5W7%2F8uS40bADwHg3jQM%2BOVCh58Vfmmtvp03nr1Doqc90EQwQRTqoEcV2yBJtgwx2m6atsbRbDUD9zziqCEp0A6zXSH3oLtQZ5uAYriQxTgONPXlLYI6%2B%2Boz8pc%2Bui%2FO4T4H&X-Amz-Signature=2387aec2b006562d6bb8ec42aaacdb11de54a3b3c080c85e886e240bd971b239&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWFJHTO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T140828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGvmoa%2F0nB6JZSj20htzPVDV8Dvgz7jY5Dkvhy8w9j4oAiEAsRuwnDHZX1PUyuCowCneTwADLfA3sd%2FiP3leCDZoMiQqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVCMRmaSUphXYT0ZSrcAybzDeTVwwtbmekWpYKgWFhMLjrS1Yq8mP0YNnsyuQJmcVhFn1zBD%2B%2FPQGW8Q06iBbOIA5PCBZMmWZPmaMkQlMBZkj9eIYD7Xb3nIIVe88%2Bt7FiCF6MbqFPIu7XEtHhipxwceDluz0EpCRd2q1JYaenQFeODQDlk0URAg7AgL%2BLp7kREp6CRLvvHIkofpqgxYFafbMIUmPFlPzCs1bRF1Uc06s9iyfvq2i9jt7FiYNf%2BtbgDKwhJNVz%2FEGVQwF0vkIhLIEdCSBpmW3m9hbG%2BNH%2FRdj9Ap8jOPfeHRdNzNGJSZKAd2KpxHG5H2WxM7ZgF2JmGVEjhJ%2B162waCGAgTKZ9kdWx5Jv7Xi0FQ0Ac83bOmkzNl1ZTKBC8ZIDvJvSnSKTvRcDWOgbE7AnhDrW6DO4VV3UvcG5DBufVX%2BiDzXaZGenIbd5X2GNu7fesG5o2aS%2BuUuiTZuuxI3Rh77tnTg3oJq8SaxTUVZlPizebzb8uCTCWbadM6hkoK7M4Wj%2BlyAOJIXgQ9jKQgvppq7f3Mddb%2FHf%2F3Yfy8qZTf%2FBgam%2FNb8nnKIFv9PGdzEeCUeshtqk0%2BXSqJZdafIa6EOp%2FuLIK0U2fWhaHNGxh0AxlxGmkDg5wQeuk1ZSVAgDbMMNrA8L4GOqUBIkimxFWl3fo8czWlEUuvRuWddL6EeREax4L8LuUT909WXb2iQ7SiaN7pcJCOu37px4SffFZCoiQ5mNDHZEEJPSQsw5W7%2F8uS40bADwHg3jQM%2BOVCh58Vfmmtvp03nr1Doqc90EQwQRTqoEcV2yBJtgwx2m6atsbRbDUD9zziqCEp0A6zXSH3oLtQZ5uAYriQxTgONPXlLYI6%2B%2Boz8pc%2Bui%2FO4T4H&X-Amz-Signature=2f3e8363632d201edc415660de0f90e76686f157a31794377d54d74537875f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
