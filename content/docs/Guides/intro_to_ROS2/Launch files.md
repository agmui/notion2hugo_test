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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNAEEAO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCZDJFvAUEbibGAqwuQG%2FHfcw8tM%2FJ5bOaONhvP0eLx9gIhAOhh13%2BZ4Pxnv7ooEpTy%2BTrYDx%2FFygToVfotoQwjXnqgKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1Loziqd5oQtCT1wEq3AO4tHZNmfpUEId6FHPdXAs9GMPZK%2BE5hM77mC2Vj9rfzZ8YWYjUKX1ZAVZwbMJhiptEhPT5D6jSWik7rTaTEPMngbFMoeE63D5CvwtDWfhiEpqooEl4XDXNl9kpSlgvbOgWne6yyG08Bi5ndoP6Oao7kMhwJm6Noj6R1MdIytvZChS%2F9BeGPpOJwRCWRr%2FZcPlX8G493JLMLOeo4Hd6xrW2QOGSU4MWNqlcjz5EdwBjhN%2F10goA9TisQHmz5FQ3r4qrXU3pGVp50glhE3IKB22qRyZNq2da1lCJ%2BdoBF8axk0RpfGJcN5%2BRoVpF7sDTT2L8%2BxepsVFpUVD21JNDQNHDKOfzs14yt3fItgdA9mX8H8Zbirx2W7UlGmC3uKc5VRte7Ot1zhLcIxYFqbbJLKwQ3Uiw1xWjJvBIjSfpoK%2Bs0Fz9mGPByCvmRfzF7%2B5LEWSomhKb06LBFRNoHWk9p1yCjweO6bYsnO1vlhlOSJpwFjaNEOoXMnn7u33mTmozMcbz2FkqKInRjuuKyVbPmye4npCYuBugy5rKZGff9dYEYl6wJD5ClagbYyCKgXMTCjO%2B%2FUEeXShKYdv7%2FS0v%2B5qWRISJBI8IfKUJ0Zk92jK9xuwNFzrAahLypkhhCTD%2FqOHCBjqkAf%2Bu0tfo2R%2BBE1RYGp4nEG12ney2mcOk6Ay0r0LTVQ3bN%2BbEek5XyJcrJpEqgUJgOWpikLWl1tMXiKnhKh8aCTnDIkAne22BP%2F9FxF2N5PMMniYX6J1qYtvE1yntYF72bN4TYoXym99lUSTQEu%2FSxmF8FSzZn5QxCVhqfRWWbhickPhA2uID4%2FGGqt48feaUbNB2jChz7ueE5Yxv7eRC4D77H4D3&X-Amz-Signature=96aba3c18766149d56601aa82e73b914053f2647470704feb89821b8f9654faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNAEEAO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCZDJFvAUEbibGAqwuQG%2FHfcw8tM%2FJ5bOaONhvP0eLx9gIhAOhh13%2BZ4Pxnv7ooEpTy%2BTrYDx%2FFygToVfotoQwjXnqgKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1Loziqd5oQtCT1wEq3AO4tHZNmfpUEId6FHPdXAs9GMPZK%2BE5hM77mC2Vj9rfzZ8YWYjUKX1ZAVZwbMJhiptEhPT5D6jSWik7rTaTEPMngbFMoeE63D5CvwtDWfhiEpqooEl4XDXNl9kpSlgvbOgWne6yyG08Bi5ndoP6Oao7kMhwJm6Noj6R1MdIytvZChS%2F9BeGPpOJwRCWRr%2FZcPlX8G493JLMLOeo4Hd6xrW2QOGSU4MWNqlcjz5EdwBjhN%2F10goA9TisQHmz5FQ3r4qrXU3pGVp50glhE3IKB22qRyZNq2da1lCJ%2BdoBF8axk0RpfGJcN5%2BRoVpF7sDTT2L8%2BxepsVFpUVD21JNDQNHDKOfzs14yt3fItgdA9mX8H8Zbirx2W7UlGmC3uKc5VRte7Ot1zhLcIxYFqbbJLKwQ3Uiw1xWjJvBIjSfpoK%2Bs0Fz9mGPByCvmRfzF7%2B5LEWSomhKb06LBFRNoHWk9p1yCjweO6bYsnO1vlhlOSJpwFjaNEOoXMnn7u33mTmozMcbz2FkqKInRjuuKyVbPmye4npCYuBugy5rKZGff9dYEYl6wJD5ClagbYyCKgXMTCjO%2B%2FUEeXShKYdv7%2FS0v%2B5qWRISJBI8IfKUJ0Zk92jK9xuwNFzrAahLypkhhCTD%2FqOHCBjqkAf%2Bu0tfo2R%2BBE1RYGp4nEG12ney2mcOk6Ay0r0LTVQ3bN%2BbEek5XyJcrJpEqgUJgOWpikLWl1tMXiKnhKh8aCTnDIkAne22BP%2F9FxF2N5PMMniYX6J1qYtvE1yntYF72bN4TYoXym99lUSTQEu%2FSxmF8FSzZn5QxCVhqfRWWbhickPhA2uID4%2FGGqt48feaUbNB2jChz7ueE5Yxv7eRC4D77H4D3&X-Amz-Signature=ffd65ff65a6fae35a1807239f0145c45678cfc5a09e34bf25a5ec4b0158621f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPNAEEAO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCZDJFvAUEbibGAqwuQG%2FHfcw8tM%2FJ5bOaONhvP0eLx9gIhAOhh13%2BZ4Pxnv7ooEpTy%2BTrYDx%2FFygToVfotoQwjXnqgKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1Loziqd5oQtCT1wEq3AO4tHZNmfpUEId6FHPdXAs9GMPZK%2BE5hM77mC2Vj9rfzZ8YWYjUKX1ZAVZwbMJhiptEhPT5D6jSWik7rTaTEPMngbFMoeE63D5CvwtDWfhiEpqooEl4XDXNl9kpSlgvbOgWne6yyG08Bi5ndoP6Oao7kMhwJm6Noj6R1MdIytvZChS%2F9BeGPpOJwRCWRr%2FZcPlX8G493JLMLOeo4Hd6xrW2QOGSU4MWNqlcjz5EdwBjhN%2F10goA9TisQHmz5FQ3r4qrXU3pGVp50glhE3IKB22qRyZNq2da1lCJ%2BdoBF8axk0RpfGJcN5%2BRoVpF7sDTT2L8%2BxepsVFpUVD21JNDQNHDKOfzs14yt3fItgdA9mX8H8Zbirx2W7UlGmC3uKc5VRte7Ot1zhLcIxYFqbbJLKwQ3Uiw1xWjJvBIjSfpoK%2Bs0Fz9mGPByCvmRfzF7%2B5LEWSomhKb06LBFRNoHWk9p1yCjweO6bYsnO1vlhlOSJpwFjaNEOoXMnn7u33mTmozMcbz2FkqKInRjuuKyVbPmye4npCYuBugy5rKZGff9dYEYl6wJD5ClagbYyCKgXMTCjO%2B%2FUEeXShKYdv7%2FS0v%2B5qWRISJBI8IfKUJ0Zk92jK9xuwNFzrAahLypkhhCTD%2FqOHCBjqkAf%2Bu0tfo2R%2BBE1RYGp4nEG12ney2mcOk6Ay0r0LTVQ3bN%2BbEek5XyJcrJpEqgUJgOWpikLWl1tMXiKnhKh8aCTnDIkAne22BP%2F9FxF2N5PMMniYX6J1qYtvE1yntYF72bN4TYoXym99lUSTQEu%2FSxmF8FSzZn5QxCVhqfRWWbhickPhA2uID4%2FGGqt48feaUbNB2jChz7ueE5Yxv7eRC4D77H4D3&X-Amz-Signature=f6d685568d2d131791a9273d40e9344728dc4ad3a7c882d5b017d111735be076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
