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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMKVYV3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxcY%2Ft7CdQ2I5r9sahhlWP41QLh2ag6kYIoZfUE3Q7AIgAXDx1vxovcd%2BBi0MXRUkWDHva%2BUoAjvAN8Bx7edS5ZoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVB8Z4WdN2r3yuW5SrcA2Z1wRmvFOjAXKV0A2mDGia1T3gDFwCjIHW%2BIah2S8jmhleKTW42WaQHrDXjCo%2Fk2flETIhgFI8c7RSxLnPZnlEwKBNRLLI%2FxgodLorGU4rvOYcNQQpCwcj5KNJksHdshNKHrYx8Npyb9ybZ7AGDY1zT3K0f8Zuf64X%2FSJhSTb9qBM6nQp8j8jHRl9cVdcm7SnfcmTgX5hu2eteSS1EBQV6x4nHQDayVuo0Ael13ZndpyV6kEKW3HoMBtn1p2d6MJFwARkBDngrtb0YHd6exeIN4EKOgV2SrqMqdQmDPCz23Vp2SPh1WwOqCi%2B1H%2BpJ08gnudcmpimsu2CkxNNbyKkZj%2By9ewxMMg2YGv3Th2Q0BwF79k9g6AG4qfSEYdSQ6x1sBGMEY%2FE4bHtUgMGvIWQSjy%2B7hMzjlmAthnJV2upQbKrYt3nlgzC5EqIA8MGsLDCAbJ6E8MkJgIfmEpdHl9paug5brICtbmansWJUEM3hjIHTy8PPQBqL2cDDOsoCVYkuQ23owgkSm8SlrmkS97iN14MF614HghgmNLUvvXv5NotBMozRBUKFiqCKxPgAXCRXpw0%2FQGSwjNG9lcFOKqN80WIZNg%2BQVwW63%2F%2BGvJDHILRSl2d8DvhislN05MNfLzcIGOqUBKgqA03s5Ch%2FH3S7VoRQN6BGKodWrrW6720KO%2FZPCNXI2TENETX67KDzj9C%2F886mO%2Bm9KXKRxhk9EzPUk9hWsWRnw%2BlcD6nFhocuIyKPqpNyveTvtV0w36c%2B2CT3TSeBhVx7iD%2FnpUyIX5sBDFJv8p0xCdzhJWa31iJta9cJE56BxiyrqPfCGEg3mp7bCIbPtKNJZKTSFbpgKaIsIZYvs6UjI2dvp&X-Amz-Signature=ce7646f85cc6e37dbcbc0155c4d659f01065e9b2a2bae770f1f6015e21da5ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMKVYV3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxcY%2Ft7CdQ2I5r9sahhlWP41QLh2ag6kYIoZfUE3Q7AIgAXDx1vxovcd%2BBi0MXRUkWDHva%2BUoAjvAN8Bx7edS5ZoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVB8Z4WdN2r3yuW5SrcA2Z1wRmvFOjAXKV0A2mDGia1T3gDFwCjIHW%2BIah2S8jmhleKTW42WaQHrDXjCo%2Fk2flETIhgFI8c7RSxLnPZnlEwKBNRLLI%2FxgodLorGU4rvOYcNQQpCwcj5KNJksHdshNKHrYx8Npyb9ybZ7AGDY1zT3K0f8Zuf64X%2FSJhSTb9qBM6nQp8j8jHRl9cVdcm7SnfcmTgX5hu2eteSS1EBQV6x4nHQDayVuo0Ael13ZndpyV6kEKW3HoMBtn1p2d6MJFwARkBDngrtb0YHd6exeIN4EKOgV2SrqMqdQmDPCz23Vp2SPh1WwOqCi%2B1H%2BpJ08gnudcmpimsu2CkxNNbyKkZj%2By9ewxMMg2YGv3Th2Q0BwF79k9g6AG4qfSEYdSQ6x1sBGMEY%2FE4bHtUgMGvIWQSjy%2B7hMzjlmAthnJV2upQbKrYt3nlgzC5EqIA8MGsLDCAbJ6E8MkJgIfmEpdHl9paug5brICtbmansWJUEM3hjIHTy8PPQBqL2cDDOsoCVYkuQ23owgkSm8SlrmkS97iN14MF614HghgmNLUvvXv5NotBMozRBUKFiqCKxPgAXCRXpw0%2FQGSwjNG9lcFOKqN80WIZNg%2BQVwW63%2F%2BGvJDHILRSl2d8DvhislN05MNfLzcIGOqUBKgqA03s5Ch%2FH3S7VoRQN6BGKodWrrW6720KO%2FZPCNXI2TENETX67KDzj9C%2F886mO%2Bm9KXKRxhk9EzPUk9hWsWRnw%2BlcD6nFhocuIyKPqpNyveTvtV0w36c%2B2CT3TSeBhVx7iD%2FnpUyIX5sBDFJv8p0xCdzhJWa31iJta9cJE56BxiyrqPfCGEg3mp7bCIbPtKNJZKTSFbpgKaIsIZYvs6UjI2dvp&X-Amz-Signature=7d186a446574f7d3b2f09aea23db59fb7124060671741d85886a8672b15bdb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMKVYV3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxcY%2Ft7CdQ2I5r9sahhlWP41QLh2ag6kYIoZfUE3Q7AIgAXDx1vxovcd%2BBi0MXRUkWDHva%2BUoAjvAN8Bx7edS5ZoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVB8Z4WdN2r3yuW5SrcA2Z1wRmvFOjAXKV0A2mDGia1T3gDFwCjIHW%2BIah2S8jmhleKTW42WaQHrDXjCo%2Fk2flETIhgFI8c7RSxLnPZnlEwKBNRLLI%2FxgodLorGU4rvOYcNQQpCwcj5KNJksHdshNKHrYx8Npyb9ybZ7AGDY1zT3K0f8Zuf64X%2FSJhSTb9qBM6nQp8j8jHRl9cVdcm7SnfcmTgX5hu2eteSS1EBQV6x4nHQDayVuo0Ael13ZndpyV6kEKW3HoMBtn1p2d6MJFwARkBDngrtb0YHd6exeIN4EKOgV2SrqMqdQmDPCz23Vp2SPh1WwOqCi%2B1H%2BpJ08gnudcmpimsu2CkxNNbyKkZj%2By9ewxMMg2YGv3Th2Q0BwF79k9g6AG4qfSEYdSQ6x1sBGMEY%2FE4bHtUgMGvIWQSjy%2B7hMzjlmAthnJV2upQbKrYt3nlgzC5EqIA8MGsLDCAbJ6E8MkJgIfmEpdHl9paug5brICtbmansWJUEM3hjIHTy8PPQBqL2cDDOsoCVYkuQ23owgkSm8SlrmkS97iN14MF614HghgmNLUvvXv5NotBMozRBUKFiqCKxPgAXCRXpw0%2FQGSwjNG9lcFOKqN80WIZNg%2BQVwW63%2F%2BGvJDHILRSl2d8DvhislN05MNfLzcIGOqUBKgqA03s5Ch%2FH3S7VoRQN6BGKodWrrW6720KO%2FZPCNXI2TENETX67KDzj9C%2F886mO%2Bm9KXKRxhk9EzPUk9hWsWRnw%2BlcD6nFhocuIyKPqpNyveTvtV0w36c%2B2CT3TSeBhVx7iD%2FnpUyIX5sBDFJv8p0xCdzhJWa31iJta9cJE56BxiyrqPfCGEg3mp7bCIbPtKNJZKTSFbpgKaIsIZYvs6UjI2dvp&X-Amz-Signature=4fb67cbe75d6cf8f5e36ae335e45e0ba162b23531a0eda3872e27e760785ec8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
