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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PU2FLHF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDZH%2FLV%2BE2pHbtlD8CML4kkYDIyL94fTq2tHkFF0lllkAiEA7hNZBzHcAPXScawEDJrIIkNHcWswS9n%2FQmgqRdqOlJgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQx5yjSHjSWAYnkEircAyAlR8t1C8pAc22JN9n4440VjzVcMcR9NN10o1OsOolEbIl1UgomHGLx5TbodzG97P61tTO6Abf2oKHEZXQbjVRK%2FODP2pa47R0x38TEN8qvSpR87zxC9GwuTRCuRZ5NVc2AKoiDtUSFAgsZpln%2B18mI%2FtjxCBl4rdNUhFk45gLxu0u1i2zAXVaHFym9eF%2BVfH7d2oxUPhsqZl178isMZMbWWi6fW0mW%2FIGhLdtEVKrHaEwzBHV%2BAUs2CyN%2BmKaYmqDan%2BAOQrvwj8lPwHLtmtDENxVsYTHf0t2od1OqAYTegX9gODi1aacbeCdw3LUPO068QAFfnrSJHQRjw%2F6q6mzUFkeejBxQxtbQ7eyluUInFbeX%2Fy2SoQLaHCsipn2vtlSmbJD0krV4q6Pv%2F%2F%2FRMO%2FSFVd2Q9cNyog8XSQPbxjj%2BGhD9V5n2y4aZ5AInT%2BdGrvJwRJ%2BKSFOQu01NPehTaLgabcY4kkag9K%2FxVTbeSMgSpNv0HGwmhhsJZZgQbknCbprc3SKOEN5jfTjUTGr34opPvu8Q6C1nmXILymGYO%2F3blowHUDMB%2BMnBFl%2BYgkJg6d8OBn%2B4ei%2Fp7BLJ68SrX7WvOqi9pzQUNDtbL0Th%2FNf6upkhEZU8asse8D9MNjcrsIGOqUByH1XbGWz%2BacRpzfZHXGWeW7oqbXUwFj5qox8NDANmSIpWs2lsoVVuf9EnAYRvUOQ%2BUOnhJevGGZx1WDd%2B1arHnCdgwZnnGqSByM8JOC0v1%2F13egd2gkBpPWFwNHF5g9svlSFsTBtkejqAjmhSqHq4vfoy4vNd%2ByEha8N1v%2ByeMrEmydDIZgPgnj1cUZnu%2Fq5fOaoSY%2FMj0wW6lN5EESRvgTVrzdu&X-Amz-Signature=0439eebce9cabf5305463779f90ae74ef482f16f839fce6a58a84f08f7044ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PU2FLHF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDZH%2FLV%2BE2pHbtlD8CML4kkYDIyL94fTq2tHkFF0lllkAiEA7hNZBzHcAPXScawEDJrIIkNHcWswS9n%2FQmgqRdqOlJgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQx5yjSHjSWAYnkEircAyAlR8t1C8pAc22JN9n4440VjzVcMcR9NN10o1OsOolEbIl1UgomHGLx5TbodzG97P61tTO6Abf2oKHEZXQbjVRK%2FODP2pa47R0x38TEN8qvSpR87zxC9GwuTRCuRZ5NVc2AKoiDtUSFAgsZpln%2B18mI%2FtjxCBl4rdNUhFk45gLxu0u1i2zAXVaHFym9eF%2BVfH7d2oxUPhsqZl178isMZMbWWi6fW0mW%2FIGhLdtEVKrHaEwzBHV%2BAUs2CyN%2BmKaYmqDan%2BAOQrvwj8lPwHLtmtDENxVsYTHf0t2od1OqAYTegX9gODi1aacbeCdw3LUPO068QAFfnrSJHQRjw%2F6q6mzUFkeejBxQxtbQ7eyluUInFbeX%2Fy2SoQLaHCsipn2vtlSmbJD0krV4q6Pv%2F%2F%2FRMO%2FSFVd2Q9cNyog8XSQPbxjj%2BGhD9V5n2y4aZ5AInT%2BdGrvJwRJ%2BKSFOQu01NPehTaLgabcY4kkag9K%2FxVTbeSMgSpNv0HGwmhhsJZZgQbknCbprc3SKOEN5jfTjUTGr34opPvu8Q6C1nmXILymGYO%2F3blowHUDMB%2BMnBFl%2BYgkJg6d8OBn%2B4ei%2Fp7BLJ68SrX7WvOqi9pzQUNDtbL0Th%2FNf6upkhEZU8asse8D9MNjcrsIGOqUByH1XbGWz%2BacRpzfZHXGWeW7oqbXUwFj5qox8NDANmSIpWs2lsoVVuf9EnAYRvUOQ%2BUOnhJevGGZx1WDd%2B1arHnCdgwZnnGqSByM8JOC0v1%2F13egd2gkBpPWFwNHF5g9svlSFsTBtkejqAjmhSqHq4vfoy4vNd%2ByEha8N1v%2ByeMrEmydDIZgPgnj1cUZnu%2Fq5fOaoSY%2FMj0wW6lN5EESRvgTVrzdu&X-Amz-Signature=5568d01fad979fd3dd5f0614d3acee3a61948da787c68e49dd66069b6b2789d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PU2FLHF%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDZH%2FLV%2BE2pHbtlD8CML4kkYDIyL94fTq2tHkFF0lllkAiEA7hNZBzHcAPXScawEDJrIIkNHcWswS9n%2FQmgqRdqOlJgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQx5yjSHjSWAYnkEircAyAlR8t1C8pAc22JN9n4440VjzVcMcR9NN10o1OsOolEbIl1UgomHGLx5TbodzG97P61tTO6Abf2oKHEZXQbjVRK%2FODP2pa47R0x38TEN8qvSpR87zxC9GwuTRCuRZ5NVc2AKoiDtUSFAgsZpln%2B18mI%2FtjxCBl4rdNUhFk45gLxu0u1i2zAXVaHFym9eF%2BVfH7d2oxUPhsqZl178isMZMbWWi6fW0mW%2FIGhLdtEVKrHaEwzBHV%2BAUs2CyN%2BmKaYmqDan%2BAOQrvwj8lPwHLtmtDENxVsYTHf0t2od1OqAYTegX9gODi1aacbeCdw3LUPO068QAFfnrSJHQRjw%2F6q6mzUFkeejBxQxtbQ7eyluUInFbeX%2Fy2SoQLaHCsipn2vtlSmbJD0krV4q6Pv%2F%2F%2FRMO%2FSFVd2Q9cNyog8XSQPbxjj%2BGhD9V5n2y4aZ5AInT%2BdGrvJwRJ%2BKSFOQu01NPehTaLgabcY4kkag9K%2FxVTbeSMgSpNv0HGwmhhsJZZgQbknCbprc3SKOEN5jfTjUTGr34opPvu8Q6C1nmXILymGYO%2F3blowHUDMB%2BMnBFl%2BYgkJg6d8OBn%2B4ei%2Fp7BLJ68SrX7WvOqi9pzQUNDtbL0Th%2FNf6upkhEZU8asse8D9MNjcrsIGOqUByH1XbGWz%2BacRpzfZHXGWeW7oqbXUwFj5qox8NDANmSIpWs2lsoVVuf9EnAYRvUOQ%2BUOnhJevGGZx1WDd%2B1arHnCdgwZnnGqSByM8JOC0v1%2F13egd2gkBpPWFwNHF5g9svlSFsTBtkejqAjmhSqHq4vfoy4vNd%2ByEha8N1v%2ByeMrEmydDIZgPgnj1cUZnu%2Fq5fOaoSY%2FMj0wW6lN5EESRvgTVrzdu&X-Amz-Signature=a80fdc25a65c54190e2fb5435064d90a7216b8960867344776d79257aa78b9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
