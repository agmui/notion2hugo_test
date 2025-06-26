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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV4PIDB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAL6SUuZyaZ2jjdIqnDUMq8TPRI5Uj4SrOpBu7DeJJ9JAiEAjF%2BiZMN%2BiWUqlC5z3wubZRJH%2BnO79EbgQMN3Z2xb0ugq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCMxBoGFwoMWbIgtryrcA%2BlE7fSz80ctL3BVM6sjcIpyPXP7XgdXospcKSA1yE%2BtkqvwnPewx82sX2S4bl%2BE6XlGH1aqSjRbiB42rAFhzROJR%2B2SgHZ%2BId6uphp2JVcaPLaYh1yRNNG%2BVqEpgw7HSeJtMtT0rzPiY3PFKubw17DSgWfkf5%2F%2FGGYFCtg4GMDfn5G4AUse6c8jIWjGhHf%2BDB%2FI5pPM5Sir8WKhg5KdtFTEcTWgybSry8vLfARO%2BWKaAAF5yYYois%2BkL0fbVKPTrbU9389u%2BOPVGYLuvB0VJKYk%2FR6tGe2U5kUO1UMjy3EntU3W57KjzNCtPZtWBtNt9j0dPZDvzXY25scsMGI8LxOo2lfViCPWDGcx8neaHDkLC1VXNZQKD2HnOTYz9cHFD0DR%2FFpYo0JdOgtD9PF9BV%2FZBLHhRf6%2Ft2ZpaQHtxLFvrWuDJUgDXSViXzCFZ2PPddiwRg7r9a78mAi%2Fod8jSZcoKSH14o2B0ficEtAuMac7J3tbNzOxn1B%2Bzi%2BnpVI6w5LsJOTOh0f73wBtT7kLceFsAD0%2BG17hnJkDx%2B1vfMtN4Wil2ZRUZxNFJbg3u6gPsoQoE0b5vxYv2hWMw6txptl0EuKRwVBpmgikzzeFfxEsqTZ6c6pM9EV6aRjpMKWy88IGOqUBzv0m6%2FoSXDv5CfLv8%2Fh0l242b0d3fDgmVjuWZ42w%2BH5k5HvPOvI5nt4oNIlscWnotPtAvmgrV%2FZCNHZl%2FlmibVcpgdbNrdLg5KxKpg%2FMTBbRQIC2bFcWeBXSDc6hBy95brjByV3iSyKVt4Baj5mzniWhj1Ci08xt0vyMfSR9p6pbif3ATEVrsX%2BmKzWfM%2F1h%2FuQvNuIWygTJaBJSUEXqpNuRvfdA&X-Amz-Signature=503d8935fe705e306ad6ed3cd2b892337e5204716e45ccfd5917e55d481d92b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV4PIDB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAL6SUuZyaZ2jjdIqnDUMq8TPRI5Uj4SrOpBu7DeJJ9JAiEAjF%2BiZMN%2BiWUqlC5z3wubZRJH%2BnO79EbgQMN3Z2xb0ugq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCMxBoGFwoMWbIgtryrcA%2BlE7fSz80ctL3BVM6sjcIpyPXP7XgdXospcKSA1yE%2BtkqvwnPewx82sX2S4bl%2BE6XlGH1aqSjRbiB42rAFhzROJR%2B2SgHZ%2BId6uphp2JVcaPLaYh1yRNNG%2BVqEpgw7HSeJtMtT0rzPiY3PFKubw17DSgWfkf5%2F%2FGGYFCtg4GMDfn5G4AUse6c8jIWjGhHf%2BDB%2FI5pPM5Sir8WKhg5KdtFTEcTWgybSry8vLfARO%2BWKaAAF5yYYois%2BkL0fbVKPTrbU9389u%2BOPVGYLuvB0VJKYk%2FR6tGe2U5kUO1UMjy3EntU3W57KjzNCtPZtWBtNt9j0dPZDvzXY25scsMGI8LxOo2lfViCPWDGcx8neaHDkLC1VXNZQKD2HnOTYz9cHFD0DR%2FFpYo0JdOgtD9PF9BV%2FZBLHhRf6%2Ft2ZpaQHtxLFvrWuDJUgDXSViXzCFZ2PPddiwRg7r9a78mAi%2Fod8jSZcoKSH14o2B0ficEtAuMac7J3tbNzOxn1B%2Bzi%2BnpVI6w5LsJOTOh0f73wBtT7kLceFsAD0%2BG17hnJkDx%2B1vfMtN4Wil2ZRUZxNFJbg3u6gPsoQoE0b5vxYv2hWMw6txptl0EuKRwVBpmgikzzeFfxEsqTZ6c6pM9EV6aRjpMKWy88IGOqUBzv0m6%2FoSXDv5CfLv8%2Fh0l242b0d3fDgmVjuWZ42w%2BH5k5HvPOvI5nt4oNIlscWnotPtAvmgrV%2FZCNHZl%2FlmibVcpgdbNrdLg5KxKpg%2FMTBbRQIC2bFcWeBXSDc6hBy95brjByV3iSyKVt4Baj5mzniWhj1Ci08xt0vyMfSR9p6pbif3ATEVrsX%2BmKzWfM%2F1h%2FuQvNuIWygTJaBJSUEXqpNuRvfdA&X-Amz-Signature=1015acf09643ddbca7980e3333ef42030d59b966ff6d1495dd1806c707cfa4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KV4PIDB%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIAL6SUuZyaZ2jjdIqnDUMq8TPRI5Uj4SrOpBu7DeJJ9JAiEAjF%2BiZMN%2BiWUqlC5z3wubZRJH%2BnO79EbgQMN3Z2xb0ugq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCMxBoGFwoMWbIgtryrcA%2BlE7fSz80ctL3BVM6sjcIpyPXP7XgdXospcKSA1yE%2BtkqvwnPewx82sX2S4bl%2BE6XlGH1aqSjRbiB42rAFhzROJR%2B2SgHZ%2BId6uphp2JVcaPLaYh1yRNNG%2BVqEpgw7HSeJtMtT0rzPiY3PFKubw17DSgWfkf5%2F%2FGGYFCtg4GMDfn5G4AUse6c8jIWjGhHf%2BDB%2FI5pPM5Sir8WKhg5KdtFTEcTWgybSry8vLfARO%2BWKaAAF5yYYois%2BkL0fbVKPTrbU9389u%2BOPVGYLuvB0VJKYk%2FR6tGe2U5kUO1UMjy3EntU3W57KjzNCtPZtWBtNt9j0dPZDvzXY25scsMGI8LxOo2lfViCPWDGcx8neaHDkLC1VXNZQKD2HnOTYz9cHFD0DR%2FFpYo0JdOgtD9PF9BV%2FZBLHhRf6%2Ft2ZpaQHtxLFvrWuDJUgDXSViXzCFZ2PPddiwRg7r9a78mAi%2Fod8jSZcoKSH14o2B0ficEtAuMac7J3tbNzOxn1B%2Bzi%2BnpVI6w5LsJOTOh0f73wBtT7kLceFsAD0%2BG17hnJkDx%2B1vfMtN4Wil2ZRUZxNFJbg3u6gPsoQoE0b5vxYv2hWMw6txptl0EuKRwVBpmgikzzeFfxEsqTZ6c6pM9EV6aRjpMKWy88IGOqUBzv0m6%2FoSXDv5CfLv8%2Fh0l242b0d3fDgmVjuWZ42w%2BH5k5HvPOvI5nt4oNIlscWnotPtAvmgrV%2FZCNHZl%2FlmibVcpgdbNrdLg5KxKpg%2FMTBbRQIC2bFcWeBXSDc6hBy95brjByV3iSyKVt4Baj5mzniWhj1Ci08xt0vyMfSR9p6pbif3ATEVrsX%2BmKzWfM%2F1h%2FuQvNuIWygTJaBJSUEXqpNuRvfdA&X-Amz-Signature=a65e80153ec3727451ab124c484280e51df6dc29211fd418a2136853f238d82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
