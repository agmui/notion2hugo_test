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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3ZVXQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi4HGi6mzAq8WrqbgTFwJkQ0EoJYg1Rug0PLGksL0N%2BAiEA%2F2WqEFeBoNyaCECc83xfk%2BG3PHisDQhdS8VM7SnRg8MqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp0USL5D0dQFIYwIircAxkU3f9yZWX%2ByMG9E0GKVKCGRifvU1CVpvCSJqc1xT%2FsAwqRuP8xPTt9Xqo%2FJIAjABetK7GtzIv3vcB%2BwaK3LrUDA25JBfK0R3uv5iwJnzpKokooo15xMiyAySiQ1%2BwD0eUgiu2UpyqI%2FNnfaNninHWhoUjAM%2B%2FbiP29u7Kjqpz0WHkU1JygR2ahy1zBeSj1t%2FiiCYmZHD8cuCK5xhVCEh%2FCgQcTIWN9%2FoeU8Fbvf1sIwCOEBHFjk5sCwXXzZMs7PBFMgdN0xrLuGh5x48kUA2X2Lzp3MDIWAG7LI8XBPEOejcq16JGUCn8vdksFhDX3EAw%2Fx%2BK%2BgM46VjceWbzEIBOiDASyyl0PeVz0APYgbfTphLUmLDfQCxjcIqWuoCtzvqaVz37AZJsD%2BnK52iXHTXQJvnZmT1a%2F9KVqJeXoNaU2NDkSpVjP2F2JacR%2B1%2F7tie4jUT8FuTPXd6bjOEGc3kVatlbFAawty18t0eLRzto%2FwZRMp8p%2BFqCyiZuVUHpfaBnRdvaS5LqvgDWI61riFRRybvkAnjcB7s%2BnPWZ3aJywjpXqXrme5hlOZMmloigqQf2kXM%2BJkiCggkOFirKa%2FD6y7qqh8wY%2FY%2BYFxz0h41ygJn7WLCw4PmlI5JX%2FMLzF6rwGOqUBFbh8HnfH%2Fk7YNBRr6NdqpOrb417nlmsA5LwPmDxvp%2F3u5OhA80uKRjTxy3S9bfTNyT%2FtAMVFV3OtmgMuNCHDK%2F7hwE4PstqNyzc891qNAmEERDpOmk7Ed32UHqQi7xJ4E9Me1AUTlV7SE9%2FyCATYFop4WTbf%2B4R55%2BhyrfApmjRzNEuipqtQurHtKqhSHG56QgR7vjWXQaWBqjwx21ZYV81aW1wZ&X-Amz-Signature=eb55f688b81bf4b3108323afe233fea3df8a72f636868599de5347e696cdb1c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3ZVXQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi4HGi6mzAq8WrqbgTFwJkQ0EoJYg1Rug0PLGksL0N%2BAiEA%2F2WqEFeBoNyaCECc83xfk%2BG3PHisDQhdS8VM7SnRg8MqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp0USL5D0dQFIYwIircAxkU3f9yZWX%2ByMG9E0GKVKCGRifvU1CVpvCSJqc1xT%2FsAwqRuP8xPTt9Xqo%2FJIAjABetK7GtzIv3vcB%2BwaK3LrUDA25JBfK0R3uv5iwJnzpKokooo15xMiyAySiQ1%2BwD0eUgiu2UpyqI%2FNnfaNninHWhoUjAM%2B%2FbiP29u7Kjqpz0WHkU1JygR2ahy1zBeSj1t%2FiiCYmZHD8cuCK5xhVCEh%2FCgQcTIWN9%2FoeU8Fbvf1sIwCOEBHFjk5sCwXXzZMs7PBFMgdN0xrLuGh5x48kUA2X2Lzp3MDIWAG7LI8XBPEOejcq16JGUCn8vdksFhDX3EAw%2Fx%2BK%2BgM46VjceWbzEIBOiDASyyl0PeVz0APYgbfTphLUmLDfQCxjcIqWuoCtzvqaVz37AZJsD%2BnK52iXHTXQJvnZmT1a%2F9KVqJeXoNaU2NDkSpVjP2F2JacR%2B1%2F7tie4jUT8FuTPXd6bjOEGc3kVatlbFAawty18t0eLRzto%2FwZRMp8p%2BFqCyiZuVUHpfaBnRdvaS5LqvgDWI61riFRRybvkAnjcB7s%2BnPWZ3aJywjpXqXrme5hlOZMmloigqQf2kXM%2BJkiCggkOFirKa%2FD6y7qqh8wY%2FY%2BYFxz0h41ygJn7WLCw4PmlI5JX%2FMLzF6rwGOqUBFbh8HnfH%2Fk7YNBRr6NdqpOrb417nlmsA5LwPmDxvp%2F3u5OhA80uKRjTxy3S9bfTNyT%2FtAMVFV3OtmgMuNCHDK%2F7hwE4PstqNyzc891qNAmEERDpOmk7Ed32UHqQi7xJ4E9Me1AUTlV7SE9%2FyCATYFop4WTbf%2B4R55%2BhyrfApmjRzNEuipqtQurHtKqhSHG56QgR7vjWXQaWBqjwx21ZYV81aW1wZ&X-Amz-Signature=c738c4f335361bb5074903025e29b51475665c977ff881adad97d755bcb1aca1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3ZVXQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAi4HGi6mzAq8WrqbgTFwJkQ0EoJYg1Rug0PLGksL0N%2BAiEA%2F2WqEFeBoNyaCECc83xfk%2BG3PHisDQhdS8VM7SnRg8MqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp0USL5D0dQFIYwIircAxkU3f9yZWX%2ByMG9E0GKVKCGRifvU1CVpvCSJqc1xT%2FsAwqRuP8xPTt9Xqo%2FJIAjABetK7GtzIv3vcB%2BwaK3LrUDA25JBfK0R3uv5iwJnzpKokooo15xMiyAySiQ1%2BwD0eUgiu2UpyqI%2FNnfaNninHWhoUjAM%2B%2FbiP29u7Kjqpz0WHkU1JygR2ahy1zBeSj1t%2FiiCYmZHD8cuCK5xhVCEh%2FCgQcTIWN9%2FoeU8Fbvf1sIwCOEBHFjk5sCwXXzZMs7PBFMgdN0xrLuGh5x48kUA2X2Lzp3MDIWAG7LI8XBPEOejcq16JGUCn8vdksFhDX3EAw%2Fx%2BK%2BgM46VjceWbzEIBOiDASyyl0PeVz0APYgbfTphLUmLDfQCxjcIqWuoCtzvqaVz37AZJsD%2BnK52iXHTXQJvnZmT1a%2F9KVqJeXoNaU2NDkSpVjP2F2JacR%2B1%2F7tie4jUT8FuTPXd6bjOEGc3kVatlbFAawty18t0eLRzto%2FwZRMp8p%2BFqCyiZuVUHpfaBnRdvaS5LqvgDWI61riFRRybvkAnjcB7s%2BnPWZ3aJywjpXqXrme5hlOZMmloigqQf2kXM%2BJkiCggkOFirKa%2FD6y7qqh8wY%2FY%2BYFxz0h41ygJn7WLCw4PmlI5JX%2FMLzF6rwGOqUBFbh8HnfH%2Fk7YNBRr6NdqpOrb417nlmsA5LwPmDxvp%2F3u5OhA80uKRjTxy3S9bfTNyT%2FtAMVFV3OtmgMuNCHDK%2F7hwE4PstqNyzc891qNAmEERDpOmk7Ed32UHqQi7xJ4E9Me1AUTlV7SE9%2FyCATYFop4WTbf%2B4R55%2BhyrfApmjRzNEuipqtQurHtKqhSHG56QgR7vjWXQaWBqjwx21ZYV81aW1wZ&X-Amz-Signature=caebb956173ae2a8204e766c79b1811d5f9637323c64d2103a026f6a7b809c89&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
