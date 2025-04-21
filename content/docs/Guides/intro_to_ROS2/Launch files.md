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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLBJ6ATI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHHZ9t0kCEidFforzutkSEBrPLmqN4n2kBNGBD6QlbrQAiEAq0JxWt0IU9beDf1fg1KY5QH%2BYMMbS%2FKbaj6i2N8dMOAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgO5vzBhnn0j3X%2FpircA0WSyVx2oaR2q5XhFu0Rxj7tUygG3eAcfjFJTx0JPSYwztTYFQd8qs%2FUCAgdwPXT%2Fi%2B3TENuvFBYfRABFNNp9msQFfv3stO5m1GtbcDqsx%2FEhs7olhyRBSPefra6Ysc80HFtgWe359RG1W9T3wFNgvteDvMkUydwaiegrqczpcpkQkbrdSvaB6lI1clxa%2BlSnRRfcd4lIgfRGOoto%2BYu5yrKHl%2Bd%2FWMvR7fFVd8rzMgtPghBDcxBPIjNtvMM3gUk81du0wV0%2FnJ2jdsAUv8FHmk5ILutATjIhtFBRlVOPyrwITYdyA%2B2fNwPt21uoOT9heYCb5TaIaCPM95x4sublodxAQpmdibegexaCgiooRHIjkzFSwiKQZVBo9EM2QS8TnAzyYeUWYnmczakOZDp7%2FxtAH4Dvii4TUZL4jspJNc4lhBerJzBDWQzmoyj0LN9UE1q1zZXauPRNsAg3nEL7%2FLcJCjnLQ7zrNi9fFYHtQqU%2FGku2LOJFBOUuqaaI%2Bre%2BCsvSbAvqLJol6EhFGYaRGQjWgzl2Tu9Ox0u6N68NRMuACKPNy%2FzutaJo77LwFzqwh6zvsiBSiQqdOcZHMoaMA97%2BE0lPwZ%2FaJ4EPa2KQ9oYg4BtF31P6Uvu4t3%2BMO7klsAGOqUBpzly6guxYdKm65N6PjbqDtpXHnafWUygz9BtOwDhmFdZZSJPX8vol%2FbzV7cfDAqn9674LueUe5M2sARQZHT9kjKy5jb%2FxJqfnBKq2FX5C5WJ8NCCT0ZHOJ8jNkTXoOwN%2BnUGuedm67%2FLK9BJpNWGBGtEjpSxz3uyohgpWdqn202F7Rk2Yv4IZZwmkzyS2kwNuIvtrqwuvr5Ky0D9UKUQLV0TtefB&X-Amz-Signature=39dfb0f4e53431d25152138e01696406cd55653d217fe7afab3edcd3a9733603&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLBJ6ATI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHHZ9t0kCEidFforzutkSEBrPLmqN4n2kBNGBD6QlbrQAiEAq0JxWt0IU9beDf1fg1KY5QH%2BYMMbS%2FKbaj6i2N8dMOAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgO5vzBhnn0j3X%2FpircA0WSyVx2oaR2q5XhFu0Rxj7tUygG3eAcfjFJTx0JPSYwztTYFQd8qs%2FUCAgdwPXT%2Fi%2B3TENuvFBYfRABFNNp9msQFfv3stO5m1GtbcDqsx%2FEhs7olhyRBSPefra6Ysc80HFtgWe359RG1W9T3wFNgvteDvMkUydwaiegrqczpcpkQkbrdSvaB6lI1clxa%2BlSnRRfcd4lIgfRGOoto%2BYu5yrKHl%2Bd%2FWMvR7fFVd8rzMgtPghBDcxBPIjNtvMM3gUk81du0wV0%2FnJ2jdsAUv8FHmk5ILutATjIhtFBRlVOPyrwITYdyA%2B2fNwPt21uoOT9heYCb5TaIaCPM95x4sublodxAQpmdibegexaCgiooRHIjkzFSwiKQZVBo9EM2QS8TnAzyYeUWYnmczakOZDp7%2FxtAH4Dvii4TUZL4jspJNc4lhBerJzBDWQzmoyj0LN9UE1q1zZXauPRNsAg3nEL7%2FLcJCjnLQ7zrNi9fFYHtQqU%2FGku2LOJFBOUuqaaI%2Bre%2BCsvSbAvqLJol6EhFGYaRGQjWgzl2Tu9Ox0u6N68NRMuACKPNy%2FzutaJo77LwFzqwh6zvsiBSiQqdOcZHMoaMA97%2BE0lPwZ%2FaJ4EPa2KQ9oYg4BtF31P6Uvu4t3%2BMO7klsAGOqUBpzly6guxYdKm65N6PjbqDtpXHnafWUygz9BtOwDhmFdZZSJPX8vol%2FbzV7cfDAqn9674LueUe5M2sARQZHT9kjKy5jb%2FxJqfnBKq2FX5C5WJ8NCCT0ZHOJ8jNkTXoOwN%2BnUGuedm67%2FLK9BJpNWGBGtEjpSxz3uyohgpWdqn202F7Rk2Yv4IZZwmkzyS2kwNuIvtrqwuvr5Ky0D9UKUQLV0TtefB&X-Amz-Signature=674084d3951a1f532b4dd0a27a122b299146e0b46a8d72bc86110c8e7d507721&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLBJ6ATI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIHHZ9t0kCEidFforzutkSEBrPLmqN4n2kBNGBD6QlbrQAiEAq0JxWt0IU9beDf1fg1KY5QH%2BYMMbS%2FKbaj6i2N8dMOAqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgO5vzBhnn0j3X%2FpircA0WSyVx2oaR2q5XhFu0Rxj7tUygG3eAcfjFJTx0JPSYwztTYFQd8qs%2FUCAgdwPXT%2Fi%2B3TENuvFBYfRABFNNp9msQFfv3stO5m1GtbcDqsx%2FEhs7olhyRBSPefra6Ysc80HFtgWe359RG1W9T3wFNgvteDvMkUydwaiegrqczpcpkQkbrdSvaB6lI1clxa%2BlSnRRfcd4lIgfRGOoto%2BYu5yrKHl%2Bd%2FWMvR7fFVd8rzMgtPghBDcxBPIjNtvMM3gUk81du0wV0%2FnJ2jdsAUv8FHmk5ILutATjIhtFBRlVOPyrwITYdyA%2B2fNwPt21uoOT9heYCb5TaIaCPM95x4sublodxAQpmdibegexaCgiooRHIjkzFSwiKQZVBo9EM2QS8TnAzyYeUWYnmczakOZDp7%2FxtAH4Dvii4TUZL4jspJNc4lhBerJzBDWQzmoyj0LN9UE1q1zZXauPRNsAg3nEL7%2FLcJCjnLQ7zrNi9fFYHtQqU%2FGku2LOJFBOUuqaaI%2Bre%2BCsvSbAvqLJol6EhFGYaRGQjWgzl2Tu9Ox0u6N68NRMuACKPNy%2FzutaJo77LwFzqwh6zvsiBSiQqdOcZHMoaMA97%2BE0lPwZ%2FaJ4EPa2KQ9oYg4BtF31P6Uvu4t3%2BMO7klsAGOqUBpzly6guxYdKm65N6PjbqDtpXHnafWUygz9BtOwDhmFdZZSJPX8vol%2FbzV7cfDAqn9674LueUe5M2sARQZHT9kjKy5jb%2FxJqfnBKq2FX5C5WJ8NCCT0ZHOJ8jNkTXoOwN%2BnUGuedm67%2FLK9BJpNWGBGtEjpSxz3uyohgpWdqn202F7Rk2Yv4IZZwmkzyS2kwNuIvtrqwuvr5Ky0D9UKUQLV0TtefB&X-Amz-Signature=4e44ea8fff0bd8d8c5d14d700c9a6fcb84c222c7639a89b77ed66b9f1929ab4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
