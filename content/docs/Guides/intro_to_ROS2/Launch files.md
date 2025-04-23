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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOUZSYB%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIG5%2F4oPp6lCXx5dGOnKJ1uiIgd5Upj8wPNj%2BmCzwQONkAiEA0L0g3F1fic6wJ7xO1CVVrkLlVmTL3HRVf03TWVVrcXAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfZjVy3Gjd8yRWiWCrcA4dg066nz761YyIYLlywWi4I60QnPfZIATfPj9sNko0%2BbI2xr%2BtXNRlfVu6Rzl8oQpv622M2NZo9Q2iEujaroIW5qnxKpnct7X3ILGg4Qexk2K0%2BfXJ5p0Nn6BFY437cH74vzyXyuVayqMn%2B4TAoKp2uzoMzM6CeFaLn9yMlEv88oiEiGpAyalh5rcIPld5uEY1g8Cwu0YugpyT44t3%2FbpoIdGH7CE8AiyLBYVe%2F7Om9O%2FQH740QWxkMXzGSwXd2pLZGySRWD%2Bf36oTEpgczz4XeTCV2rxwrqyiXkRHoIAfXtDLO0yTBHuX1eb30BTDHSu3dqtlknX7X12Ze8P2RoR%2B3OjTsyCDb1Tix0by%2BsDi8QR6WfRJ2Ie9tAZ%2FTiL2bRcW%2F7HRFRVXnfdgIo914xKC68avUOzD4m5aw0%2FS0Yo9sQ9CqNouMPUJ2xXiD2FWOjWYHiZ%2Ba%2FZuCAnHKUw%2BBUvjgv8cC%2B%2BfqZGLfJNonWXDbpCQfZj2zQL8aLzsUQ2M5AO%2FF6HiVYrMHAtulWFB4SwnHBHdiuoVEUqDSypp5VKE0QBuoAIdm3H3HK7ljdxTjWu9CaLqvh%2BSP8JV7ftTCyMJZYz7bQfHsnzedpa46Ug%2FHWLJIl6RPoRBnvbHWMIaUosAGOqUBFAaDmrONwGGlcomdITRDEWEvaslSfDhjX1ry8ncrk2NvFz00Qmln1FiUfLkph1P3xL8qRJwmfyHwQyMeinwalboAZRr1wL9neOA5ooyhxfuzq%2FAZ2HDkY20ZUe3DpW8h8EILN7%2BFkalBRkFl9P9LJ3NMvKkUL5f9eReyOPSAQhYuO326f3%2BqOZFEfApn4FtK4aILBurHgB3JXkEEQF6kq61rotbQ&X-Amz-Signature=ea9ad6f43b1cd2497c602a29a2ace924dbaf40df6b48862b51af22cb8a1dd8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOUZSYB%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIG5%2F4oPp6lCXx5dGOnKJ1uiIgd5Upj8wPNj%2BmCzwQONkAiEA0L0g3F1fic6wJ7xO1CVVrkLlVmTL3HRVf03TWVVrcXAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfZjVy3Gjd8yRWiWCrcA4dg066nz761YyIYLlywWi4I60QnPfZIATfPj9sNko0%2BbI2xr%2BtXNRlfVu6Rzl8oQpv622M2NZo9Q2iEujaroIW5qnxKpnct7X3ILGg4Qexk2K0%2BfXJ5p0Nn6BFY437cH74vzyXyuVayqMn%2B4TAoKp2uzoMzM6CeFaLn9yMlEv88oiEiGpAyalh5rcIPld5uEY1g8Cwu0YugpyT44t3%2FbpoIdGH7CE8AiyLBYVe%2F7Om9O%2FQH740QWxkMXzGSwXd2pLZGySRWD%2Bf36oTEpgczz4XeTCV2rxwrqyiXkRHoIAfXtDLO0yTBHuX1eb30BTDHSu3dqtlknX7X12Ze8P2RoR%2B3OjTsyCDb1Tix0by%2BsDi8QR6WfRJ2Ie9tAZ%2FTiL2bRcW%2F7HRFRVXnfdgIo914xKC68avUOzD4m5aw0%2FS0Yo9sQ9CqNouMPUJ2xXiD2FWOjWYHiZ%2Ba%2FZuCAnHKUw%2BBUvjgv8cC%2B%2BfqZGLfJNonWXDbpCQfZj2zQL8aLzsUQ2M5AO%2FF6HiVYrMHAtulWFB4SwnHBHdiuoVEUqDSypp5VKE0QBuoAIdm3H3HK7ljdxTjWu9CaLqvh%2BSP8JV7ftTCyMJZYz7bQfHsnzedpa46Ug%2FHWLJIl6RPoRBnvbHWMIaUosAGOqUBFAaDmrONwGGlcomdITRDEWEvaslSfDhjX1ry8ncrk2NvFz00Qmln1FiUfLkph1P3xL8qRJwmfyHwQyMeinwalboAZRr1wL9neOA5ooyhxfuzq%2FAZ2HDkY20ZUe3DpW8h8EILN7%2BFkalBRkFl9P9LJ3NMvKkUL5f9eReyOPSAQhYuO326f3%2BqOZFEfApn4FtK4aILBurHgB3JXkEEQF6kq61rotbQ&X-Amz-Signature=aee90caadbb5fd23bda81c95e553d141b66b18910845bee12d1b58276afb288c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOUZSYB%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIG5%2F4oPp6lCXx5dGOnKJ1uiIgd5Upj8wPNj%2BmCzwQONkAiEA0L0g3F1fic6wJ7xO1CVVrkLlVmTL3HRVf03TWVVrcXAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfZjVy3Gjd8yRWiWCrcA4dg066nz761YyIYLlywWi4I60QnPfZIATfPj9sNko0%2BbI2xr%2BtXNRlfVu6Rzl8oQpv622M2NZo9Q2iEujaroIW5qnxKpnct7X3ILGg4Qexk2K0%2BfXJ5p0Nn6BFY437cH74vzyXyuVayqMn%2B4TAoKp2uzoMzM6CeFaLn9yMlEv88oiEiGpAyalh5rcIPld5uEY1g8Cwu0YugpyT44t3%2FbpoIdGH7CE8AiyLBYVe%2F7Om9O%2FQH740QWxkMXzGSwXd2pLZGySRWD%2Bf36oTEpgczz4XeTCV2rxwrqyiXkRHoIAfXtDLO0yTBHuX1eb30BTDHSu3dqtlknX7X12Ze8P2RoR%2B3OjTsyCDb1Tix0by%2BsDi8QR6WfRJ2Ie9tAZ%2FTiL2bRcW%2F7HRFRVXnfdgIo914xKC68avUOzD4m5aw0%2FS0Yo9sQ9CqNouMPUJ2xXiD2FWOjWYHiZ%2Ba%2FZuCAnHKUw%2BBUvjgv8cC%2B%2BfqZGLfJNonWXDbpCQfZj2zQL8aLzsUQ2M5AO%2FF6HiVYrMHAtulWFB4SwnHBHdiuoVEUqDSypp5VKE0QBuoAIdm3H3HK7ljdxTjWu9CaLqvh%2BSP8JV7ftTCyMJZYz7bQfHsnzedpa46Ug%2FHWLJIl6RPoRBnvbHWMIaUosAGOqUBFAaDmrONwGGlcomdITRDEWEvaslSfDhjX1ry8ncrk2NvFz00Qmln1FiUfLkph1P3xL8qRJwmfyHwQyMeinwalboAZRr1wL9neOA5ooyhxfuzq%2FAZ2HDkY20ZUe3DpW8h8EILN7%2BFkalBRkFl9P9LJ3NMvKkUL5f9eReyOPSAQhYuO326f3%2BqOZFEfApn4FtK4aILBurHgB3JXkEEQF6kq61rotbQ&X-Amz-Signature=d22ce693f5570d221b286f0cc6a9337a19aa97a0cf41169122ae649c79a47af0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
