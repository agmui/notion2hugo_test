---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644I3IBYD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDogkkj4h7x9%2BEwJnfdjHAjLRZC6GejLlzBcPYScfjYtAiEAtqBmrpccx0F3p1R38v7Nngo3u%2BcOBCr6aisVZ4TJgk4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkVbWINfUViVig%2FkSrcAx8uqBJUTxIPh1kdBUB5SG1umnik5QdhFWi8EnqD0TnTfqxBb9aDgjzoDV2sDqRqaaONqcbAdrOy6%2BHLSVEZespXgLMD%2F0PTRu5FDNrNXFmcWoj5B7p3DzdoAzT20Ij2NRsdWHPncdRmN5n1R%2BeKPaCGv%2Budc3qQrE2g8RDuala7llyTbIJSVXkp%2BXH%2BRo6V%2FjwE%2BF1L1A%2BgPMAlNWJGYwRXWhJXJEhMBVC48eN7aVb20jlIM8njgNd1spdXJ7aOzGT%2B2C0P%2ByyzmUHXk6R3sCxHM9Fl6EJcuzkEBS0zk%2BOv5HsaYVhTlHk5NtguHeW%2FABwbV4YxzLkcr4ELmekHJvulIGWDDsdIXt0hg%2Fak5Eod4YxYosgfMyhfbVVtn1%2FDw39u2IQ1kn3AgpTPMUJlojo%2F5EOojihVUfiXlQv45S4m3oNSFRrkAkMajyVW1%2BaveKKCeLIFW3rAbIVl7zCKY2125c%2FBW1rxU3h6dvMM6tquKLIgAcghMkZTmcWN9ELeO2VnEfWlL6VPYLxE63yT%2Fd1JqclPcRewWk2pIDtbDI3nYTJr%2BBO8Kh3krm7BGhhNSDgvzVCUP2Pd2avwbzrgUXdoFPVA6jm%2Flum2g%2Bqo6hgCc779lwPM%2B5kargTsMLHqrcQGOqUBWqjB3hohik%2FCr7hBEBgVO9VZU0KnDRTyCsjpUbKQN8mLtTb25Tm%2BYJLuMAnsjRc5VGNO02WIigvyf3TJs1WcbIM9VDqIg5RG%2BaZJd89IcKz6vreuKcZ6EdyLsV%2Fj%2B53oE5jsaocvNjTV2cpORBZa%2FFr06cD69oWwa8V44DLA51TiAmkPFef8Sgw4KN5qiu3%2BbR94cuLHUm4mSkir48nSg%2FijxksQ&X-Amz-Signature=f9e780a5ee5db9864ca8f18ac472d70eb0b5d0a7ceb0fcd8fa8e285fadf2f5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644I3IBYD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDogkkj4h7x9%2BEwJnfdjHAjLRZC6GejLlzBcPYScfjYtAiEAtqBmrpccx0F3p1R38v7Nngo3u%2BcOBCr6aisVZ4TJgk4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkVbWINfUViVig%2FkSrcAx8uqBJUTxIPh1kdBUB5SG1umnik5QdhFWi8EnqD0TnTfqxBb9aDgjzoDV2sDqRqaaONqcbAdrOy6%2BHLSVEZespXgLMD%2F0PTRu5FDNrNXFmcWoj5B7p3DzdoAzT20Ij2NRsdWHPncdRmN5n1R%2BeKPaCGv%2Budc3qQrE2g8RDuala7llyTbIJSVXkp%2BXH%2BRo6V%2FjwE%2BF1L1A%2BgPMAlNWJGYwRXWhJXJEhMBVC48eN7aVb20jlIM8njgNd1spdXJ7aOzGT%2B2C0P%2ByyzmUHXk6R3sCxHM9Fl6EJcuzkEBS0zk%2BOv5HsaYVhTlHk5NtguHeW%2FABwbV4YxzLkcr4ELmekHJvulIGWDDsdIXt0hg%2Fak5Eod4YxYosgfMyhfbVVtn1%2FDw39u2IQ1kn3AgpTPMUJlojo%2F5EOojihVUfiXlQv45S4m3oNSFRrkAkMajyVW1%2BaveKKCeLIFW3rAbIVl7zCKY2125c%2FBW1rxU3h6dvMM6tquKLIgAcghMkZTmcWN9ELeO2VnEfWlL6VPYLxE63yT%2Fd1JqclPcRewWk2pIDtbDI3nYTJr%2BBO8Kh3krm7BGhhNSDgvzVCUP2Pd2avwbzrgUXdoFPVA6jm%2Flum2g%2Bqo6hgCc779lwPM%2B5kargTsMLHqrcQGOqUBWqjB3hohik%2FCr7hBEBgVO9VZU0KnDRTyCsjpUbKQN8mLtTb25Tm%2BYJLuMAnsjRc5VGNO02WIigvyf3TJs1WcbIM9VDqIg5RG%2BaZJd89IcKz6vreuKcZ6EdyLsV%2Fj%2B53oE5jsaocvNjTV2cpORBZa%2FFr06cD69oWwa8V44DLA51TiAmkPFef8Sgw4KN5qiu3%2BbR94cuLHUm4mSkir48nSg%2FijxksQ&X-Amz-Signature=3715f0b98497d0ae6f208fc8bb4f9ece00858c939bd1321c6a2623034a700923&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644I3IBYD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDogkkj4h7x9%2BEwJnfdjHAjLRZC6GejLlzBcPYScfjYtAiEAtqBmrpccx0F3p1R38v7Nngo3u%2BcOBCr6aisVZ4TJgk4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkVbWINfUViVig%2FkSrcAx8uqBJUTxIPh1kdBUB5SG1umnik5QdhFWi8EnqD0TnTfqxBb9aDgjzoDV2sDqRqaaONqcbAdrOy6%2BHLSVEZespXgLMD%2F0PTRu5FDNrNXFmcWoj5B7p3DzdoAzT20Ij2NRsdWHPncdRmN5n1R%2BeKPaCGv%2Budc3qQrE2g8RDuala7llyTbIJSVXkp%2BXH%2BRo6V%2FjwE%2BF1L1A%2BgPMAlNWJGYwRXWhJXJEhMBVC48eN7aVb20jlIM8njgNd1spdXJ7aOzGT%2B2C0P%2ByyzmUHXk6R3sCxHM9Fl6EJcuzkEBS0zk%2BOv5HsaYVhTlHk5NtguHeW%2FABwbV4YxzLkcr4ELmekHJvulIGWDDsdIXt0hg%2Fak5Eod4YxYosgfMyhfbVVtn1%2FDw39u2IQ1kn3AgpTPMUJlojo%2F5EOojihVUfiXlQv45S4m3oNSFRrkAkMajyVW1%2BaveKKCeLIFW3rAbIVl7zCKY2125c%2FBW1rxU3h6dvMM6tquKLIgAcghMkZTmcWN9ELeO2VnEfWlL6VPYLxE63yT%2Fd1JqclPcRewWk2pIDtbDI3nYTJr%2BBO8Kh3krm7BGhhNSDgvzVCUP2Pd2avwbzrgUXdoFPVA6jm%2Flum2g%2Bqo6hgCc779lwPM%2B5kargTsMLHqrcQGOqUBWqjB3hohik%2FCr7hBEBgVO9VZU0KnDRTyCsjpUbKQN8mLtTb25Tm%2BYJLuMAnsjRc5VGNO02WIigvyf3TJs1WcbIM9VDqIg5RG%2BaZJd89IcKz6vreuKcZ6EdyLsV%2Fj%2B53oE5jsaocvNjTV2cpORBZa%2FFr06cD69oWwa8V44DLA51TiAmkPFef8Sgw4KN5qiu3%2BbR94cuLHUm4mSkir48nSg%2FijxksQ&X-Amz-Signature=e987a3b6048f8d49920b5b5beef05c77dc169eeb8d8da5c6da5cda5cfc063691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
