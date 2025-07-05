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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626F6EEPH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDtM5gecq4qgidMZiKjN8tPh2xto1jpGj0Af3jX7YFPSwIhAMLyDIXRVtEahmsxlZBKo%2Bu7C5WzTukMRRXQ1ceLuJkXKv8DCDsQABoMNjM3NDIzMTgzODA1Igw5iO%2BRIWS22fFbHdEq3AOWLhRp6ihFO%2B30NXjKb53g3m2V9Z4WFfjEOl1dL4b6RK875OQh0LDD%2BPqxJLOt%2B5gZsys3rotqur1XrQ%2FBFdhgNmktlOLwNowmvAFUv7xbqFNPRkKE57b4FdOwnvShVhOenbpLaAO%2FqnUxP6yjdGBmlGGF%2BOhy7PJOAilZJBnio149Dd32FareXC48F2CpeCqd8cinFomTP%2FKTciBxIJd8Yop1jWsqUMImmJo%2BA4%2BLOczhTS5uuCaWcopbyqgMWHU8744v6MCx4aVyXB8sB6QPfKF4qP7FV3XpFQX1VenlKgZ0Znx13zzkQAO6BWwzO0Zy1LlM6fJAI%2FZfF%2B6nw8u40yGIZNapXMGzQMdQkTs0An%2FvAUIDDy43umPpaDVxAXaD9hMAVa0asC%2BmG%2B5%2B5Libidsvy%2FK2g1dGK6zueMXVDgDyHXS63sVQnrehLJ%2BexDvTVjSz7%2F1Qeu%2FEdBtKoFk%2BLh4HmHwbnZS29Loz4W9WGN5fIMDsWI2wdVtiffmsQMR0LkgjBKyS%2BUoNj0MowwXVAKpjJ4j54H7duterpXuJcPxN6S2Yq2Cufiui%2BZmbnS5r%2BnyGj42WraV377X8hjoYZ0jqrPjwVLHo96ZPKE81SSyW12GLsnhf0ZowFTDpiKLDBjqkAUbdtTJ%2FgGuE5WpMWdRWnxrGu%2FD8fGIjl5tlaqxKYmp0%2BIhoEZjpFjN7li7MeKjRFHutiLUMPft5FrDl%2F9s15fwKJjnLkOjSbpXVP9FU00k3gJVafA35fIVuAVBh1Hs9K1ERIBRiek%2Bi%2FO%2B52iEzDZcPHH45w3CL4B6AHhe05lghhLxqDQDAdlx3wv78S2YegNwQgnikDLSlntEbEGWzI0DnQzCI&X-Amz-Signature=b576e0d4f9945cf5bb60ad428ff6ce90b243301feca1ce723c6ae9510601d6cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626F6EEPH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDtM5gecq4qgidMZiKjN8tPh2xto1jpGj0Af3jX7YFPSwIhAMLyDIXRVtEahmsxlZBKo%2Bu7C5WzTukMRRXQ1ceLuJkXKv8DCDsQABoMNjM3NDIzMTgzODA1Igw5iO%2BRIWS22fFbHdEq3AOWLhRp6ihFO%2B30NXjKb53g3m2V9Z4WFfjEOl1dL4b6RK875OQh0LDD%2BPqxJLOt%2B5gZsys3rotqur1XrQ%2FBFdhgNmktlOLwNowmvAFUv7xbqFNPRkKE57b4FdOwnvShVhOenbpLaAO%2FqnUxP6yjdGBmlGGF%2BOhy7PJOAilZJBnio149Dd32FareXC48F2CpeCqd8cinFomTP%2FKTciBxIJd8Yop1jWsqUMImmJo%2BA4%2BLOczhTS5uuCaWcopbyqgMWHU8744v6MCx4aVyXB8sB6QPfKF4qP7FV3XpFQX1VenlKgZ0Znx13zzkQAO6BWwzO0Zy1LlM6fJAI%2FZfF%2B6nw8u40yGIZNapXMGzQMdQkTs0An%2FvAUIDDy43umPpaDVxAXaD9hMAVa0asC%2BmG%2B5%2B5Libidsvy%2FK2g1dGK6zueMXVDgDyHXS63sVQnrehLJ%2BexDvTVjSz7%2F1Qeu%2FEdBtKoFk%2BLh4HmHwbnZS29Loz4W9WGN5fIMDsWI2wdVtiffmsQMR0LkgjBKyS%2BUoNj0MowwXVAKpjJ4j54H7duterpXuJcPxN6S2Yq2Cufiui%2BZmbnS5r%2BnyGj42WraV377X8hjoYZ0jqrPjwVLHo96ZPKE81SSyW12GLsnhf0ZowFTDpiKLDBjqkAUbdtTJ%2FgGuE5WpMWdRWnxrGu%2FD8fGIjl5tlaqxKYmp0%2BIhoEZjpFjN7li7MeKjRFHutiLUMPft5FrDl%2F9s15fwKJjnLkOjSbpXVP9FU00k3gJVafA35fIVuAVBh1Hs9K1ERIBRiek%2Bi%2FO%2B52iEzDZcPHH45w3CL4B6AHhe05lghhLxqDQDAdlx3wv78S2YegNwQgnikDLSlntEbEGWzI0DnQzCI&X-Amz-Signature=42f6dca82cc9ffac4bcfd4153e5c2fa1668ba98459c24ade9186a723b7c5e652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626F6EEPH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDtM5gecq4qgidMZiKjN8tPh2xto1jpGj0Af3jX7YFPSwIhAMLyDIXRVtEahmsxlZBKo%2Bu7C5WzTukMRRXQ1ceLuJkXKv8DCDsQABoMNjM3NDIzMTgzODA1Igw5iO%2BRIWS22fFbHdEq3AOWLhRp6ihFO%2B30NXjKb53g3m2V9Z4WFfjEOl1dL4b6RK875OQh0LDD%2BPqxJLOt%2B5gZsys3rotqur1XrQ%2FBFdhgNmktlOLwNowmvAFUv7xbqFNPRkKE57b4FdOwnvShVhOenbpLaAO%2FqnUxP6yjdGBmlGGF%2BOhy7PJOAilZJBnio149Dd32FareXC48F2CpeCqd8cinFomTP%2FKTciBxIJd8Yop1jWsqUMImmJo%2BA4%2BLOczhTS5uuCaWcopbyqgMWHU8744v6MCx4aVyXB8sB6QPfKF4qP7FV3XpFQX1VenlKgZ0Znx13zzkQAO6BWwzO0Zy1LlM6fJAI%2FZfF%2B6nw8u40yGIZNapXMGzQMdQkTs0An%2FvAUIDDy43umPpaDVxAXaD9hMAVa0asC%2BmG%2B5%2B5Libidsvy%2FK2g1dGK6zueMXVDgDyHXS63sVQnrehLJ%2BexDvTVjSz7%2F1Qeu%2FEdBtKoFk%2BLh4HmHwbnZS29Loz4W9WGN5fIMDsWI2wdVtiffmsQMR0LkgjBKyS%2BUoNj0MowwXVAKpjJ4j54H7duterpXuJcPxN6S2Yq2Cufiui%2BZmbnS5r%2BnyGj42WraV377X8hjoYZ0jqrPjwVLHo96ZPKE81SSyW12GLsnhf0ZowFTDpiKLDBjqkAUbdtTJ%2FgGuE5WpMWdRWnxrGu%2FD8fGIjl5tlaqxKYmp0%2BIhoEZjpFjN7li7MeKjRFHutiLUMPft5FrDl%2F9s15fwKJjnLkOjSbpXVP9FU00k3gJVafA35fIVuAVBh1Hs9K1ERIBRiek%2Bi%2FO%2B52iEzDZcPHH45w3CL4B6AHhe05lghhLxqDQDAdlx3wv78S2YegNwQgnikDLSlntEbEGWzI0DnQzCI&X-Amz-Signature=f34e092a91e3fc2d942fd75ecb9f27c23cf0d47c169b3819f80dc679a0f5be26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
