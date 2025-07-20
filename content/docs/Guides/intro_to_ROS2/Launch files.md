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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JV3AIB3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5lgTlmPo1bdVxWUzWhukt4R5kqoMTNjDPI4Wk6m4d3AiEA3VIXdUQP1tLsyApVZGql2BHt8sH%2FyHVOt8Fs325dejQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzgKDzP%2FCuTl5XZxSrcAxzazznBTSW2fj8QNz9im%2B8UO0y2VVyW5GuQy%2Bb2cLW7y%2F0%2BVBipMky9OoqJ%2Fiey3Lu6X21k1jM1W1hrCRRR0FsDHUi6sGR%2BvN48IEowgNUzUKYscsck61Z9M82f3gCsr5i12GgeIA%2FF1rwv0Gy9w%2F%2Bb5dSKtwas9riPiA%2BzbRnCBWK8NYPoPFHt56Hi%2FvBJ%2BZs%2FmhVWeZ0V0r1gdVeKL%2F2HSiYfjl1x8pWL8MpsYe0jMJKn2InKN%2F%2BD%2BskbXSURjm%2BxcF6fdsncnV%2Fg7VT0zg3DZNSSaj4eFgHj84Z0annk%2BAD4h7WMByiJ6VGPanpDLQnPgkM8p55AnASEud9PQZ31h1lajvcByYzfqYrdGDmNSvWqQdta85hHHDnh%2Bp6V9pUJfJRl%2Fy%2F0BHjMklZegdPUmqpQL34stqDYgPmIpNBuMB5bVO2AwkW%2BR6c1%2BqVDXyc3hnJZh5KSObUWYNksm7yB07Pbl1t9PyP0ObFk7PQc0cY25rhChvP%2FznbZaDqR%2F%2FJqbevD9s4oZs39yNmZElxtmWxoH9jWdeu%2BmwzN7%2BB4JH1uTb%2BlqGTUt6m443tSiOXulnGecVWJem6FRM8R00DJdSfxcfB7%2BTuqx%2BRn%2FQzNpPYsrp7N5irXRkapMOr69MMGOqUBow3hASjCtjofASsEZsVVoggD8Wc7XO%2F3CffmO9ykMBSfaviSROi5gO3tRogof9Qd7pu0FeKaL%2BVvznL4yxcBTCdQi8E38DbnC385Gag52ALXn93LkaLHITLENLlsqq97TL6h6pPxwIzXl9TImd2%2Fl%2BlnY9qqNsNq0Fj8Z0iv%2BmqCj4DFcwqonQWCzlOYeqhe08vLw5QfMhUXQnlLtO56d0lEW11A&X-Amz-Signature=e8400804e7c9944a1d89c25210351545552b419234fa0699cc17065c6f867018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JV3AIB3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5lgTlmPo1bdVxWUzWhukt4R5kqoMTNjDPI4Wk6m4d3AiEA3VIXdUQP1tLsyApVZGql2BHt8sH%2FyHVOt8Fs325dejQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzgKDzP%2FCuTl5XZxSrcAxzazznBTSW2fj8QNz9im%2B8UO0y2VVyW5GuQy%2Bb2cLW7y%2F0%2BVBipMky9OoqJ%2Fiey3Lu6X21k1jM1W1hrCRRR0FsDHUi6sGR%2BvN48IEowgNUzUKYscsck61Z9M82f3gCsr5i12GgeIA%2FF1rwv0Gy9w%2F%2Bb5dSKtwas9riPiA%2BzbRnCBWK8NYPoPFHt56Hi%2FvBJ%2BZs%2FmhVWeZ0V0r1gdVeKL%2F2HSiYfjl1x8pWL8MpsYe0jMJKn2InKN%2F%2BD%2BskbXSURjm%2BxcF6fdsncnV%2Fg7VT0zg3DZNSSaj4eFgHj84Z0annk%2BAD4h7WMByiJ6VGPanpDLQnPgkM8p55AnASEud9PQZ31h1lajvcByYzfqYrdGDmNSvWqQdta85hHHDnh%2Bp6V9pUJfJRl%2Fy%2F0BHjMklZegdPUmqpQL34stqDYgPmIpNBuMB5bVO2AwkW%2BR6c1%2BqVDXyc3hnJZh5KSObUWYNksm7yB07Pbl1t9PyP0ObFk7PQc0cY25rhChvP%2FznbZaDqR%2F%2FJqbevD9s4oZs39yNmZElxtmWxoH9jWdeu%2BmwzN7%2BB4JH1uTb%2BlqGTUt6m443tSiOXulnGecVWJem6FRM8R00DJdSfxcfB7%2BTuqx%2BRn%2FQzNpPYsrp7N5irXRkapMOr69MMGOqUBow3hASjCtjofASsEZsVVoggD8Wc7XO%2F3CffmO9ykMBSfaviSROi5gO3tRogof9Qd7pu0FeKaL%2BVvznL4yxcBTCdQi8E38DbnC385Gag52ALXn93LkaLHITLENLlsqq97TL6h6pPxwIzXl9TImd2%2Fl%2BlnY9qqNsNq0Fj8Z0iv%2BmqCj4DFcwqonQWCzlOYeqhe08vLw5QfMhUXQnlLtO56d0lEW11A&X-Amz-Signature=3d61f7c0259193289787aa7fea279922c9e0f13296cbc2b9ccdf0656158e6fba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JV3AIB3%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB5lgTlmPo1bdVxWUzWhukt4R5kqoMTNjDPI4Wk6m4d3AiEA3VIXdUQP1tLsyApVZGql2BHt8sH%2FyHVOt8Fs325dejQqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzgKDzP%2FCuTl5XZxSrcAxzazznBTSW2fj8QNz9im%2B8UO0y2VVyW5GuQy%2Bb2cLW7y%2F0%2BVBipMky9OoqJ%2Fiey3Lu6X21k1jM1W1hrCRRR0FsDHUi6sGR%2BvN48IEowgNUzUKYscsck61Z9M82f3gCsr5i12GgeIA%2FF1rwv0Gy9w%2F%2Bb5dSKtwas9riPiA%2BzbRnCBWK8NYPoPFHt56Hi%2FvBJ%2BZs%2FmhVWeZ0V0r1gdVeKL%2F2HSiYfjl1x8pWL8MpsYe0jMJKn2InKN%2F%2BD%2BskbXSURjm%2BxcF6fdsncnV%2Fg7VT0zg3DZNSSaj4eFgHj84Z0annk%2BAD4h7WMByiJ6VGPanpDLQnPgkM8p55AnASEud9PQZ31h1lajvcByYzfqYrdGDmNSvWqQdta85hHHDnh%2Bp6V9pUJfJRl%2Fy%2F0BHjMklZegdPUmqpQL34stqDYgPmIpNBuMB5bVO2AwkW%2BR6c1%2BqVDXyc3hnJZh5KSObUWYNksm7yB07Pbl1t9PyP0ObFk7PQc0cY25rhChvP%2FznbZaDqR%2F%2FJqbevD9s4oZs39yNmZElxtmWxoH9jWdeu%2BmwzN7%2BB4JH1uTb%2BlqGTUt6m443tSiOXulnGecVWJem6FRM8R00DJdSfxcfB7%2BTuqx%2BRn%2FQzNpPYsrp7N5irXRkapMOr69MMGOqUBow3hASjCtjofASsEZsVVoggD8Wc7XO%2F3CffmO9ykMBSfaviSROi5gO3tRogof9Qd7pu0FeKaL%2BVvznL4yxcBTCdQi8E38DbnC385Gag52ALXn93LkaLHITLENLlsqq97TL6h6pPxwIzXl9TImd2%2Fl%2BlnY9qqNsNq0Fj8Z0iv%2BmqCj4DFcwqonQWCzlOYeqhe08vLw5QfMhUXQnlLtO56d0lEW11A&X-Amz-Signature=d71e0cf6b01379cf46dbc1edb5d82f41ffb56adb04cbebe74975b3906bc0e80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
