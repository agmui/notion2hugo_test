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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU7V7F6J%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCgelSEepI46bdNMuLgOht50ECNJau4lvnBVFmpBxTCwQIhAJhJVE9enP0WPKL8j22aCbeNr8Yj0Pwzo02bOdg6LiagKv8DCDEQABoMNjM3NDIzMTgzODA1Igzmwa8%2BDP1FSylC8vgq3AOvoXSOtXfSlUDPb7aFyKtqjspAot6Fwtu3J3CqbiUYyuRPPq9BBjjSkuDabAgbpMJff%2Fh2geZD1f0OtW0HKLfaaDhXX59WpPM1xsLgqfYRBxwkQt%2F5mBXT%2FMo59Xxe87QWAGUGmcynm3KJve1mjNO9KOAvppVsJPVCPm0EXnb1kiOL%2B250k0bChy%2FHytyf917jqZRw01rOL2Il7cCuUdci5NQ004sPDr3th35Be%2BHk2y8%2F0bxIPZ7L6fIhKpAbw3FINvyY3izMol6yCqmyWAY6AL1asbBQF607zMu2rD59e30bBXh1xXJdVT7%2FiLlqmUbsLtuLRc0t%2BbL8%2BlluGOFR%2BLOtYuflzszjtJ%2FZ1C2XwYNJyBHOpHXyKLE19YZU5%2FzBudQ8KzrOMrOuEcDirri7R9WM5xl5H4jgpLnW%2Bk8RYTi7YVQQSJe08ESa%2FPuQV0jhhsxNs2GVfvWojHDcr0GGTUVkiQCid%2FS9SsMQ1EN%2BGdwR0cTJBGxMqtBCdb4vnpR0aAdBiA3XhJ%2B39Qt1IuCgi%2FLkNLtUJtIr3dKQkYTUMTp9PNbRmKtJ1Ulbc5klUR3kCcWd3TgtZvUm5PhzDAQsxX9vNEESMSaPvkvJErH9FocHV4ynI3vmi4sqEzCj%2F8zBBjqkATHkTtz19uhG486eVlTg9ZbOK4JNUk5s4yoY%2FQujCZ%2BfXqvCHmwi3wCsB7tGlttOGBe%2F8ah5BKXooHW59t6hiLTELfb03POigfuFvubSQQocZeDmBAIU6yhQN2naQGcbHzzQQIFbcj289dmYgVTppVUxVrjPfCczj6hK7KI2I%2F%2FUE6Z1mV%2FHS4fzzjgko54SsSngVrHklyJi5vXNswCagDab0QFu&X-Amz-Signature=da530975e4f2f60afb4d0cc341987240030251506cf914dd0a900b5bb9d11a74&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU7V7F6J%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCgelSEepI46bdNMuLgOht50ECNJau4lvnBVFmpBxTCwQIhAJhJVE9enP0WPKL8j22aCbeNr8Yj0Pwzo02bOdg6LiagKv8DCDEQABoMNjM3NDIzMTgzODA1Igzmwa8%2BDP1FSylC8vgq3AOvoXSOtXfSlUDPb7aFyKtqjspAot6Fwtu3J3CqbiUYyuRPPq9BBjjSkuDabAgbpMJff%2Fh2geZD1f0OtW0HKLfaaDhXX59WpPM1xsLgqfYRBxwkQt%2F5mBXT%2FMo59Xxe87QWAGUGmcynm3KJve1mjNO9KOAvppVsJPVCPm0EXnb1kiOL%2B250k0bChy%2FHytyf917jqZRw01rOL2Il7cCuUdci5NQ004sPDr3th35Be%2BHk2y8%2F0bxIPZ7L6fIhKpAbw3FINvyY3izMol6yCqmyWAY6AL1asbBQF607zMu2rD59e30bBXh1xXJdVT7%2FiLlqmUbsLtuLRc0t%2BbL8%2BlluGOFR%2BLOtYuflzszjtJ%2FZ1C2XwYNJyBHOpHXyKLE19YZU5%2FzBudQ8KzrOMrOuEcDirri7R9WM5xl5H4jgpLnW%2Bk8RYTi7YVQQSJe08ESa%2FPuQV0jhhsxNs2GVfvWojHDcr0GGTUVkiQCid%2FS9SsMQ1EN%2BGdwR0cTJBGxMqtBCdb4vnpR0aAdBiA3XhJ%2B39Qt1IuCgi%2FLkNLtUJtIr3dKQkYTUMTp9PNbRmKtJ1Ulbc5klUR3kCcWd3TgtZvUm5PhzDAQsxX9vNEESMSaPvkvJErH9FocHV4ynI3vmi4sqEzCj%2F8zBBjqkATHkTtz19uhG486eVlTg9ZbOK4JNUk5s4yoY%2FQujCZ%2BfXqvCHmwi3wCsB7tGlttOGBe%2F8ah5BKXooHW59t6hiLTELfb03POigfuFvubSQQocZeDmBAIU6yhQN2naQGcbHzzQQIFbcj289dmYgVTppVUxVrjPfCczj6hK7KI2I%2F%2FUE6Z1mV%2FHS4fzzjgko54SsSngVrHklyJi5vXNswCagDab0QFu&X-Amz-Signature=10be473784f5c9b5d2772fb9f9af3ec877eff6531f2ab3fc1bcfd0af58c3d4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU7V7F6J%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCgelSEepI46bdNMuLgOht50ECNJau4lvnBVFmpBxTCwQIhAJhJVE9enP0WPKL8j22aCbeNr8Yj0Pwzo02bOdg6LiagKv8DCDEQABoMNjM3NDIzMTgzODA1Igzmwa8%2BDP1FSylC8vgq3AOvoXSOtXfSlUDPb7aFyKtqjspAot6Fwtu3J3CqbiUYyuRPPq9BBjjSkuDabAgbpMJff%2Fh2geZD1f0OtW0HKLfaaDhXX59WpPM1xsLgqfYRBxwkQt%2F5mBXT%2FMo59Xxe87QWAGUGmcynm3KJve1mjNO9KOAvppVsJPVCPm0EXnb1kiOL%2B250k0bChy%2FHytyf917jqZRw01rOL2Il7cCuUdci5NQ004sPDr3th35Be%2BHk2y8%2F0bxIPZ7L6fIhKpAbw3FINvyY3izMol6yCqmyWAY6AL1asbBQF607zMu2rD59e30bBXh1xXJdVT7%2FiLlqmUbsLtuLRc0t%2BbL8%2BlluGOFR%2BLOtYuflzszjtJ%2FZ1C2XwYNJyBHOpHXyKLE19YZU5%2FzBudQ8KzrOMrOuEcDirri7R9WM5xl5H4jgpLnW%2Bk8RYTi7YVQQSJe08ESa%2FPuQV0jhhsxNs2GVfvWojHDcr0GGTUVkiQCid%2FS9SsMQ1EN%2BGdwR0cTJBGxMqtBCdb4vnpR0aAdBiA3XhJ%2B39Qt1IuCgi%2FLkNLtUJtIr3dKQkYTUMTp9PNbRmKtJ1Ulbc5klUR3kCcWd3TgtZvUm5PhzDAQsxX9vNEESMSaPvkvJErH9FocHV4ynI3vmi4sqEzCj%2F8zBBjqkATHkTtz19uhG486eVlTg9ZbOK4JNUk5s4yoY%2FQujCZ%2BfXqvCHmwi3wCsB7tGlttOGBe%2F8ah5BKXooHW59t6hiLTELfb03POigfuFvubSQQocZeDmBAIU6yhQN2naQGcbHzzQQIFbcj289dmYgVTppVUxVrjPfCczj6hK7KI2I%2F%2FUE6Z1mV%2FHS4fzzjgko54SsSngVrHklyJi5vXNswCagDab0QFu&X-Amz-Signature=cf4f4e43f7d5074ede001362efdcd7d81101bdc5758627183dcb50d9eee7e4ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
