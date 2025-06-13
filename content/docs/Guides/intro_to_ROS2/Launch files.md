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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4SK4TS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCQ8oRLUuKi6w2NloT7N1E%2BcvvJocU2v1%2BFJ8IW04x2rQIhAOaQstqEnApXVrh%2Fo6QXXl%2FXMolTDTXV%2FMBGx0HaMbOEKv8DCBMQABoMNjM3NDIzMTgzODA1IgzNpez7D9aw9o1EV5wq3ANp3bOEc5rLZxlq3v82vve5nVrOW7z7kNku2mEewRDB7zdsz1M3psOJpobtruYUlQaaCvCJhgYCadipZLoGQrvNta8mwlN8TUuJKMWhtwoFSl4rQAZuUk0NDjzBChOTzV8kxUtr7YT9N7ZfwOUdWYV35faTKzkUQ2fi7lSnoslIR0k83UDiZRs3%2BavMMeq6WO93QTypWxQ%2FhVYBRChhCGMJWthxHQOojJoK3Io4UAd8eDhXa4C3S8OQVIvAExV%2Bry%2BggQjus19j9T6Ro8%2BZLV6%2Fvq%2Fv4VCf8fK1MmJK03yMP7ZVfhb61wAPaPIASfhFPMTYs0LL9jxM0ySyiK2fDVNSMxynO%2FD2amjdd1ZHTD4xpW4TGCh4W9B34ET9F2yU7D0HQ%2FoZ6NpFkD%2Fmc1pXUzgiPDHcqNs8ohkaTsa6MgbCp07pccmOa8csJDQ5%2Bt84tRjci0JLMe4SeuXtCyTM7lD%2BRghhmRsZ%2BOpxMBxLUuDeTCNABgWb41U9zbwJAqBNzGoRL6CD3xfCcBgemxmxrknOQoVwjTw62DFaiXEdb%2BJsPVX8O5eS%2B5kDf5eIGfHO4OVhf9lc3gZqjZdavhCQNcXT25CWam5i0M4OL5sUZXXGGffNlnrqbKz5gtKJNjDw8a%2FCBjqkAT%2Bj%2BK8nGkAbEzhv0T7yBF9nZIH9jzBU5Hsm0If8ez726dA26pS20qoknsMiBB5C1wWeu4fXed0k42Plkf7ml6BaXBNAK%2BCWW%2BB34ENxKlztFNJ5cLRhqFNa%2F1SxILIsLh78gZtkk1%2BJPudn4dR7SsGpwMA4H8KxY3lr6JbqIIIvUbqWhGmKAxq5ZJm0i8pZ2F37dqEBbRhTHKnLOA%2BREc3Ek%2BRH&X-Amz-Signature=c4ac84f9d96a4768d5027370d185892576c25de8fd251a9e7b9db8d184f3f222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4SK4TS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCQ8oRLUuKi6w2NloT7N1E%2BcvvJocU2v1%2BFJ8IW04x2rQIhAOaQstqEnApXVrh%2Fo6QXXl%2FXMolTDTXV%2FMBGx0HaMbOEKv8DCBMQABoMNjM3NDIzMTgzODA1IgzNpez7D9aw9o1EV5wq3ANp3bOEc5rLZxlq3v82vve5nVrOW7z7kNku2mEewRDB7zdsz1M3psOJpobtruYUlQaaCvCJhgYCadipZLoGQrvNta8mwlN8TUuJKMWhtwoFSl4rQAZuUk0NDjzBChOTzV8kxUtr7YT9N7ZfwOUdWYV35faTKzkUQ2fi7lSnoslIR0k83UDiZRs3%2BavMMeq6WO93QTypWxQ%2FhVYBRChhCGMJWthxHQOojJoK3Io4UAd8eDhXa4C3S8OQVIvAExV%2Bry%2BggQjus19j9T6Ro8%2BZLV6%2Fvq%2Fv4VCf8fK1MmJK03yMP7ZVfhb61wAPaPIASfhFPMTYs0LL9jxM0ySyiK2fDVNSMxynO%2FD2amjdd1ZHTD4xpW4TGCh4W9B34ET9F2yU7D0HQ%2FoZ6NpFkD%2Fmc1pXUzgiPDHcqNs8ohkaTsa6MgbCp07pccmOa8csJDQ5%2Bt84tRjci0JLMe4SeuXtCyTM7lD%2BRghhmRsZ%2BOpxMBxLUuDeTCNABgWb41U9zbwJAqBNzGoRL6CD3xfCcBgemxmxrknOQoVwjTw62DFaiXEdb%2BJsPVX8O5eS%2B5kDf5eIGfHO4OVhf9lc3gZqjZdavhCQNcXT25CWam5i0M4OL5sUZXXGGffNlnrqbKz5gtKJNjDw8a%2FCBjqkAT%2Bj%2BK8nGkAbEzhv0T7yBF9nZIH9jzBU5Hsm0If8ez726dA26pS20qoknsMiBB5C1wWeu4fXed0k42Plkf7ml6BaXBNAK%2BCWW%2BB34ENxKlztFNJ5cLRhqFNa%2F1SxILIsLh78gZtkk1%2BJPudn4dR7SsGpwMA4H8KxY3lr6JbqIIIvUbqWhGmKAxq5ZJm0i8pZ2F37dqEBbRhTHKnLOA%2BREc3Ek%2BRH&X-Amz-Signature=6a3998940650c4d5fc8ad439fca088a2858ac47762149650eab24efef0c08ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4SK4TS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCQ8oRLUuKi6w2NloT7N1E%2BcvvJocU2v1%2BFJ8IW04x2rQIhAOaQstqEnApXVrh%2Fo6QXXl%2FXMolTDTXV%2FMBGx0HaMbOEKv8DCBMQABoMNjM3NDIzMTgzODA1IgzNpez7D9aw9o1EV5wq3ANp3bOEc5rLZxlq3v82vve5nVrOW7z7kNku2mEewRDB7zdsz1M3psOJpobtruYUlQaaCvCJhgYCadipZLoGQrvNta8mwlN8TUuJKMWhtwoFSl4rQAZuUk0NDjzBChOTzV8kxUtr7YT9N7ZfwOUdWYV35faTKzkUQ2fi7lSnoslIR0k83UDiZRs3%2BavMMeq6WO93QTypWxQ%2FhVYBRChhCGMJWthxHQOojJoK3Io4UAd8eDhXa4C3S8OQVIvAExV%2Bry%2BggQjus19j9T6Ro8%2BZLV6%2Fvq%2Fv4VCf8fK1MmJK03yMP7ZVfhb61wAPaPIASfhFPMTYs0LL9jxM0ySyiK2fDVNSMxynO%2FD2amjdd1ZHTD4xpW4TGCh4W9B34ET9F2yU7D0HQ%2FoZ6NpFkD%2Fmc1pXUzgiPDHcqNs8ohkaTsa6MgbCp07pccmOa8csJDQ5%2Bt84tRjci0JLMe4SeuXtCyTM7lD%2BRghhmRsZ%2BOpxMBxLUuDeTCNABgWb41U9zbwJAqBNzGoRL6CD3xfCcBgemxmxrknOQoVwjTw62DFaiXEdb%2BJsPVX8O5eS%2B5kDf5eIGfHO4OVhf9lc3gZqjZdavhCQNcXT25CWam5i0M4OL5sUZXXGGffNlnrqbKz5gtKJNjDw8a%2FCBjqkAT%2Bj%2BK8nGkAbEzhv0T7yBF9nZIH9jzBU5Hsm0If8ez726dA26pS20qoknsMiBB5C1wWeu4fXed0k42Plkf7ml6BaXBNAK%2BCWW%2BB34ENxKlztFNJ5cLRhqFNa%2F1SxILIsLh78gZtkk1%2BJPudn4dR7SsGpwMA4H8KxY3lr6JbqIIIvUbqWhGmKAxq5ZJm0i8pZ2F37dqEBbRhTHKnLOA%2BREc3Ek%2BRH&X-Amz-Signature=44eef49a56b6235d57db225e935f85682e065d65405e95588a117e4665a51083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
