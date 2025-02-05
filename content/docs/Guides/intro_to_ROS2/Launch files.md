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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSRZNM3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDIZKAtSjwHmOjpG3sTiBKxpaBzeHE%2FYeeQeI%2BJFKxmMAiATp8VhXq3vt2swi8ctY1H7AjXsgVHU8Zm0Enl2lNnE7ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMovkysZKArChqSYwAKtwD3V1rr6LAb3h%2BIptRnDzguXv4wvG2M0FRcFD5C6D8i4JXTz%2BjTF6oaFG1Urz9bdIb%2BLHWrIYbUV%2Bv28CYtvl%2FzkdGwHYrAGZHpVX622hTi8PgAX7qd92CX9OqjY58XjAcweaFIUYSPR%2F5SoUyEe1t9O1LY8K%2BhrWWWkhuZ66cfZM33ual7mLknx%2FRtN6hBZCui4hnIvQEdh5P3kGy2t6Y2jwV5M8D36sHXa31kDEqW7B%2BYnt9hkqEiDAg%2BLX86CICkzM5PQykozmSI8Cd1ukhQsMkzEc%2F7U0m9FQI4RDXp5CRNP%2FnR8tN3jKVpnEp2jdWSu7bw7wMUTnckKGajTwSsueaaxj0HHzdsvypxT%2FUfi6Ubr5FJUtH3Tl%2Fb8nxvHse8esvB2ecYmr%2By%2FMQ9WkTVz0D8NaupP2o6CDnG84FQokvlQiXysD%2FtvnLG%2BInQF5irYBunCKoCmvAb9D5BvpFSm4nC2qPwtjNlLE9PY%2FB36t1%2FtiD4JZsDxzh9cEkehheNmvxDCk%2FWErg8Qlq%2FstJc6Zfy4uAWBWz2gQQghQcbgAv0iPt8egqQP2pqcLQQmCdZp74cZwSR88gvYpJFBLv78n7IlzStqzv1%2BoXC4UtflYFWg4RgnAhbnvpJyswsdCMvQY6pgFVU2bVytcMJKYLVO971m1Yxw51fEyVvkRltDPGbLuEmd8AiRzX9Cinidv7%2BjdDo16stsnHCUOyrE3yxAFe9EqI69fMp45lBwyVtLA%2BhutYlylh1bhoyxKqnnwRjGgvI49uf0W1TXNrm%2B5ITULYUMa6F1WMYwyvySlZclIdB3gdG1qdGXRChyG4KA4BAIiTWzNveqQzaSMchh19DlAuOHOzHTdOBvNf&X-Amz-Signature=490baa266eaf96943d182b10fe47805d315fb213e250c97b44e6558f67d2b5ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSRZNM3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDIZKAtSjwHmOjpG3sTiBKxpaBzeHE%2FYeeQeI%2BJFKxmMAiATp8VhXq3vt2swi8ctY1H7AjXsgVHU8Zm0Enl2lNnE7ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMovkysZKArChqSYwAKtwD3V1rr6LAb3h%2BIptRnDzguXv4wvG2M0FRcFD5C6D8i4JXTz%2BjTF6oaFG1Urz9bdIb%2BLHWrIYbUV%2Bv28CYtvl%2FzkdGwHYrAGZHpVX622hTi8PgAX7qd92CX9OqjY58XjAcweaFIUYSPR%2F5SoUyEe1t9O1LY8K%2BhrWWWkhuZ66cfZM33ual7mLknx%2FRtN6hBZCui4hnIvQEdh5P3kGy2t6Y2jwV5M8D36sHXa31kDEqW7B%2BYnt9hkqEiDAg%2BLX86CICkzM5PQykozmSI8Cd1ukhQsMkzEc%2F7U0m9FQI4RDXp5CRNP%2FnR8tN3jKVpnEp2jdWSu7bw7wMUTnckKGajTwSsueaaxj0HHzdsvypxT%2FUfi6Ubr5FJUtH3Tl%2Fb8nxvHse8esvB2ecYmr%2By%2FMQ9WkTVz0D8NaupP2o6CDnG84FQokvlQiXysD%2FtvnLG%2BInQF5irYBunCKoCmvAb9D5BvpFSm4nC2qPwtjNlLE9PY%2FB36t1%2FtiD4JZsDxzh9cEkehheNmvxDCk%2FWErg8Qlq%2FstJc6Zfy4uAWBWz2gQQghQcbgAv0iPt8egqQP2pqcLQQmCdZp74cZwSR88gvYpJFBLv78n7IlzStqzv1%2BoXC4UtflYFWg4RgnAhbnvpJyswsdCMvQY6pgFVU2bVytcMJKYLVO971m1Yxw51fEyVvkRltDPGbLuEmd8AiRzX9Cinidv7%2BjdDo16stsnHCUOyrE3yxAFe9EqI69fMp45lBwyVtLA%2BhutYlylh1bhoyxKqnnwRjGgvI49uf0W1TXNrm%2B5ITULYUMa6F1WMYwyvySlZclIdB3gdG1qdGXRChyG4KA4BAIiTWzNveqQzaSMchh19DlAuOHOzHTdOBvNf&X-Amz-Signature=24b357de4800d94736bdb5e04c13a3d2c344b8944eb79a002d482345766616ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWSRZNM3%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDIZKAtSjwHmOjpG3sTiBKxpaBzeHE%2FYeeQeI%2BJFKxmMAiATp8VhXq3vt2swi8ctY1H7AjXsgVHU8Zm0Enl2lNnE7ir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMovkysZKArChqSYwAKtwD3V1rr6LAb3h%2BIptRnDzguXv4wvG2M0FRcFD5C6D8i4JXTz%2BjTF6oaFG1Urz9bdIb%2BLHWrIYbUV%2Bv28CYtvl%2FzkdGwHYrAGZHpVX622hTi8PgAX7qd92CX9OqjY58XjAcweaFIUYSPR%2F5SoUyEe1t9O1LY8K%2BhrWWWkhuZ66cfZM33ual7mLknx%2FRtN6hBZCui4hnIvQEdh5P3kGy2t6Y2jwV5M8D36sHXa31kDEqW7B%2BYnt9hkqEiDAg%2BLX86CICkzM5PQykozmSI8Cd1ukhQsMkzEc%2F7U0m9FQI4RDXp5CRNP%2FnR8tN3jKVpnEp2jdWSu7bw7wMUTnckKGajTwSsueaaxj0HHzdsvypxT%2FUfi6Ubr5FJUtH3Tl%2Fb8nxvHse8esvB2ecYmr%2By%2FMQ9WkTVz0D8NaupP2o6CDnG84FQokvlQiXysD%2FtvnLG%2BInQF5irYBunCKoCmvAb9D5BvpFSm4nC2qPwtjNlLE9PY%2FB36t1%2FtiD4JZsDxzh9cEkehheNmvxDCk%2FWErg8Qlq%2FstJc6Zfy4uAWBWz2gQQghQcbgAv0iPt8egqQP2pqcLQQmCdZp74cZwSR88gvYpJFBLv78n7IlzStqzv1%2BoXC4UtflYFWg4RgnAhbnvpJyswsdCMvQY6pgFVU2bVytcMJKYLVO971m1Yxw51fEyVvkRltDPGbLuEmd8AiRzX9Cinidv7%2BjdDo16stsnHCUOyrE3yxAFe9EqI69fMp45lBwyVtLA%2BhutYlylh1bhoyxKqnnwRjGgvI49uf0W1TXNrm%2B5ITULYUMa6F1WMYwyvySlZclIdB3gdG1qdGXRChyG4KA4BAIiTWzNveqQzaSMchh19DlAuOHOzHTdOBvNf&X-Amz-Signature=f21367787e3bc25bbfcf9f4b2a35fcfcd3f1ae4970ffeb2f3267537fbe68fe56&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
