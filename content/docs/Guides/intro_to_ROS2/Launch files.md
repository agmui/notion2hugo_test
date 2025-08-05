---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642XL626%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnd0LW0EJCAmja9xf9vfxnMDx3dB0JbnnPnkL3r346yAIgc91AjFAt0oX8MDxsTp43rU91Ar29vhfVR%2FdqsRKGy8oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDM%2FcOi%2FMLGXnQFZpKSrcA4V%2BE7a0KcGu1dd8qh1l9kDn%2BGHrO6LTpbUE1lT7MQsTL66nmX4YWAvQQnVw5TQApXZHaTW%2BBB0ZEuLQIJO9B%2BttJAoR83zSMlu2ASUbUI719Kbp3dtCicNqjknGTx0z8Dz%2FmKuOToWb37FU4wcRY9yWCLdYIdL0jNMM8XgZIU0JEdo8yA%2BXnYclc4biiUu7Hatr5z48k6%2Flsyz7tUIq3Byc9dvfWWfbqmYheU7GNY%2BP2u9mwkknaBPfWTLGtHzhacVXTK%2Bxnv6tXpeLk2gyzcIU5YDAJxZfdd3%2BKj9Si%2BFLu70LNmU9oT4lMQ2ps67KH3xRp6pUxY1J3B35tkF%2FzAcEN7rT5Sy7ZNzHVc1%2Ba8l612d%2BEjac9y%2FV6LynyK5FlMzhOfXEK%2B8jlu2sTUI%2B2pq9qauMREL47PFQmtHpM9MJD2Dll4%2Bv3QYVuJwL%2FubUG%2BpyZlD6uFhnsVSv0GAKsYCgJghK%2BmfOnA%2BqMLx%2FP07F2E%2FKTfT4hfC2e7U%2BAMMA5Mmjh7Smqbja08A9YzBA%2FqahL5bJjPViDBB5QGCu7ZSxKwAnq%2Fg41vGjuUjxbRaku7Ja2G6a04AFu4fVOtTsqT1w3fBiGsZw5yqy5YgHwTuwLdjGSabzzM2QA4xLMJSNxsQGOqUBAUfyMTKV4IL7ZpGtZWj%2BdI9pWeFpy763JdxJoW3GoCvHFLZTIoaUZbmU0ZxyE%2FmP2EgORAY6E9Tml4QALq5SiGmTpBK0W%2BuBnnH20ygYU9jKfAvqDu40BGJv4PVvmHCqyubB%2FnuBRFlwefrsOX4QX64y1OTQUj2DJqMYt9gdkbD4Do0DVbJxiuu0EqsDMcz67msT1h0kr6fe0Hizr6tFF%2Fqyp1Rz&X-Amz-Signature=5d0eb9b4cad5292edc2606c901921d8bf64b8aa58b3ec2bbd106afb60880c8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642XL626%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnd0LW0EJCAmja9xf9vfxnMDx3dB0JbnnPnkL3r346yAIgc91AjFAt0oX8MDxsTp43rU91Ar29vhfVR%2FdqsRKGy8oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDM%2FcOi%2FMLGXnQFZpKSrcA4V%2BE7a0KcGu1dd8qh1l9kDn%2BGHrO6LTpbUE1lT7MQsTL66nmX4YWAvQQnVw5TQApXZHaTW%2BBB0ZEuLQIJO9B%2BttJAoR83zSMlu2ASUbUI719Kbp3dtCicNqjknGTx0z8Dz%2FmKuOToWb37FU4wcRY9yWCLdYIdL0jNMM8XgZIU0JEdo8yA%2BXnYclc4biiUu7Hatr5z48k6%2Flsyz7tUIq3Byc9dvfWWfbqmYheU7GNY%2BP2u9mwkknaBPfWTLGtHzhacVXTK%2Bxnv6tXpeLk2gyzcIU5YDAJxZfdd3%2BKj9Si%2BFLu70LNmU9oT4lMQ2ps67KH3xRp6pUxY1J3B35tkF%2FzAcEN7rT5Sy7ZNzHVc1%2Ba8l612d%2BEjac9y%2FV6LynyK5FlMzhOfXEK%2B8jlu2sTUI%2B2pq9qauMREL47PFQmtHpM9MJD2Dll4%2Bv3QYVuJwL%2FubUG%2BpyZlD6uFhnsVSv0GAKsYCgJghK%2BmfOnA%2BqMLx%2FP07F2E%2FKTfT4hfC2e7U%2BAMMA5Mmjh7Smqbja08A9YzBA%2FqahL5bJjPViDBB5QGCu7ZSxKwAnq%2Fg41vGjuUjxbRaku7Ja2G6a04AFu4fVOtTsqT1w3fBiGsZw5yqy5YgHwTuwLdjGSabzzM2QA4xLMJSNxsQGOqUBAUfyMTKV4IL7ZpGtZWj%2BdI9pWeFpy763JdxJoW3GoCvHFLZTIoaUZbmU0ZxyE%2FmP2EgORAY6E9Tml4QALq5SiGmTpBK0W%2BuBnnH20ygYU9jKfAvqDu40BGJv4PVvmHCqyubB%2FnuBRFlwefrsOX4QX64y1OTQUj2DJqMYt9gdkbD4Do0DVbJxiuu0EqsDMcz67msT1h0kr6fe0Hizr6tFF%2Fqyp1Rz&X-Amz-Signature=6bd21eda682c33a7a576ba4f50a79c1591b2d823420a0917cf3b449d555f4aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466642XL626%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnd0LW0EJCAmja9xf9vfxnMDx3dB0JbnnPnkL3r346yAIgc91AjFAt0oX8MDxsTp43rU91Ar29vhfVR%2FdqsRKGy8oq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDM%2FcOi%2FMLGXnQFZpKSrcA4V%2BE7a0KcGu1dd8qh1l9kDn%2BGHrO6LTpbUE1lT7MQsTL66nmX4YWAvQQnVw5TQApXZHaTW%2BBB0ZEuLQIJO9B%2BttJAoR83zSMlu2ASUbUI719Kbp3dtCicNqjknGTx0z8Dz%2FmKuOToWb37FU4wcRY9yWCLdYIdL0jNMM8XgZIU0JEdo8yA%2BXnYclc4biiUu7Hatr5z48k6%2Flsyz7tUIq3Byc9dvfWWfbqmYheU7GNY%2BP2u9mwkknaBPfWTLGtHzhacVXTK%2Bxnv6tXpeLk2gyzcIU5YDAJxZfdd3%2BKj9Si%2BFLu70LNmU9oT4lMQ2ps67KH3xRp6pUxY1J3B35tkF%2FzAcEN7rT5Sy7ZNzHVc1%2Ba8l612d%2BEjac9y%2FV6LynyK5FlMzhOfXEK%2B8jlu2sTUI%2B2pq9qauMREL47PFQmtHpM9MJD2Dll4%2Bv3QYVuJwL%2FubUG%2BpyZlD6uFhnsVSv0GAKsYCgJghK%2BmfOnA%2BqMLx%2FP07F2E%2FKTfT4hfC2e7U%2BAMMA5Mmjh7Smqbja08A9YzBA%2FqahL5bJjPViDBB5QGCu7ZSxKwAnq%2Fg41vGjuUjxbRaku7Ja2G6a04AFu4fVOtTsqT1w3fBiGsZw5yqy5YgHwTuwLdjGSabzzM2QA4xLMJSNxsQGOqUBAUfyMTKV4IL7ZpGtZWj%2BdI9pWeFpy763JdxJoW3GoCvHFLZTIoaUZbmU0ZxyE%2FmP2EgORAY6E9Tml4QALq5SiGmTpBK0W%2BuBnnH20ygYU9jKfAvqDu40BGJv4PVvmHCqyubB%2FnuBRFlwefrsOX4QX64y1OTQUj2DJqMYt9gdkbD4Do0DVbJxiuu0EqsDMcz67msT1h0kr6fe0Hizr6tFF%2Fqyp1Rz&X-Amz-Signature=f99b44627b0e20e7c97d7fb070b781a6d2ed6f1fdef2cba2c892cb03b3738143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
