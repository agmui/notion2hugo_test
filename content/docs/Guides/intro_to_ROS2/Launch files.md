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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4K7HK2O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDVA1AR%2F9LqVHHcOVwQ3bdJ%2BzijHTokt6GwgdcP%2FcM%2BeQIgHiOxwwK%2B10nwR5dZ1xEniQgEUfevmJtlu634tXhfdAgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNBQLHIOeCiH0KNMSrcA7ckEZJdEXFyKVh4jmHljq4l76r3aldfjmyiZ58DMXzhhYSblmrHFGnIcWMfS5PcaX93HnLRunt4tNLqaaiKapADlWYmtk8968qon9MkIXYjwQJjv2scd9jOpS8l1udgTX0Ki1Rtl%2Bgid0HBOS14hSe1irZmkREFgf1NEb4rSe9KomdKM3zUbkKMBhTldnXrmDOx33Lvm92LO0ewXF6Rjnte3ccb5VHpo%2FbNpIkEETXfmE9XdnXTop9ik%2FSrgVnu2lX9DyyfRSGYxcad%2BsWWGEnHJGZ3gZa8xhTcCIrl9jIOzecgnYo93iCqn%2FcsblF%2FZRQtxXcpTNpZvbxOmfTdrj5fqv0KDh9ymHcseMEk0UOmqpMSktOceg8UzF37R%2FkNE4hsE5Tw1bIH%2FSwXABZqlXrq2B1GMOuHJcx0HLgn2otZZfHLy%2Bm3ICm9Fi4o%2FN7D%2Be0YWZXonDkuRWCcC9wYKT00B4D9jBuWGwJwsaottJ7HLM5FORT%2B7ivWVVoYm2VsZBpX53qVuJZgZo0GlkJzV1nUo%2BfVLG5hQ%2F1hQfbOxDQ%2FgFALl7%2BxOe2zt8rqvZ%2Bqs3OQ032aFhvjHf6HsmXBfXfzfy8H4jU4b9nKZJK%2BPkgqGJqa2RFjneApi6dvMOv50sQGOqUBlNWmg0C00%2Fm7sfdLL3bwC5%2Bq38%2FkXixd8ZqdJFFN8%2FnbitJTUKu%2FMRwepwP9ovY%2FnIzRO5T6y3JtMLNvmEUGdoTigGfmDFGZgqNAVYLIB6F0UfsZZZiP2du6y0mCl4tn7CD5WuBlPojHg7orNl3osBMHG0NGrhFpE1pWkxwj1c3xxpSiwPiZNEO2JNkucjsk4Q%2F5W2fC2Pqn8iZYGMydaQpBhqUn&X-Amz-Signature=c2be6a189be6df4d128e02d3f481719aff4554c855ec49297eb8a1f069be3513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4K7HK2O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDVA1AR%2F9LqVHHcOVwQ3bdJ%2BzijHTokt6GwgdcP%2FcM%2BeQIgHiOxwwK%2B10nwR5dZ1xEniQgEUfevmJtlu634tXhfdAgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNBQLHIOeCiH0KNMSrcA7ckEZJdEXFyKVh4jmHljq4l76r3aldfjmyiZ58DMXzhhYSblmrHFGnIcWMfS5PcaX93HnLRunt4tNLqaaiKapADlWYmtk8968qon9MkIXYjwQJjv2scd9jOpS8l1udgTX0Ki1Rtl%2Bgid0HBOS14hSe1irZmkREFgf1NEb4rSe9KomdKM3zUbkKMBhTldnXrmDOx33Lvm92LO0ewXF6Rjnte3ccb5VHpo%2FbNpIkEETXfmE9XdnXTop9ik%2FSrgVnu2lX9DyyfRSGYxcad%2BsWWGEnHJGZ3gZa8xhTcCIrl9jIOzecgnYo93iCqn%2FcsblF%2FZRQtxXcpTNpZvbxOmfTdrj5fqv0KDh9ymHcseMEk0UOmqpMSktOceg8UzF37R%2FkNE4hsE5Tw1bIH%2FSwXABZqlXrq2B1GMOuHJcx0HLgn2otZZfHLy%2Bm3ICm9Fi4o%2FN7D%2Be0YWZXonDkuRWCcC9wYKT00B4D9jBuWGwJwsaottJ7HLM5FORT%2B7ivWVVoYm2VsZBpX53qVuJZgZo0GlkJzV1nUo%2BfVLG5hQ%2F1hQfbOxDQ%2FgFALl7%2BxOe2zt8rqvZ%2Bqs3OQ032aFhvjHf6HsmXBfXfzfy8H4jU4b9nKZJK%2BPkgqGJqa2RFjneApi6dvMOv50sQGOqUBlNWmg0C00%2Fm7sfdLL3bwC5%2Bq38%2FkXixd8ZqdJFFN8%2FnbitJTUKu%2FMRwepwP9ovY%2FnIzRO5T6y3JtMLNvmEUGdoTigGfmDFGZgqNAVYLIB6F0UfsZZZiP2du6y0mCl4tn7CD5WuBlPojHg7orNl3osBMHG0NGrhFpE1pWkxwj1c3xxpSiwPiZNEO2JNkucjsk4Q%2F5W2fC2Pqn8iZYGMydaQpBhqUn&X-Amz-Signature=9bbb5b65575e3cd0c2501a9b8cb6a8dfd54fd088c817c5078898c851f7c6dda7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4K7HK2O%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDVA1AR%2F9LqVHHcOVwQ3bdJ%2BzijHTokt6GwgdcP%2FcM%2BeQIgHiOxwwK%2B10nwR5dZ1xEniQgEUfevmJtlu634tXhfdAgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNBQLHIOeCiH0KNMSrcA7ckEZJdEXFyKVh4jmHljq4l76r3aldfjmyiZ58DMXzhhYSblmrHFGnIcWMfS5PcaX93HnLRunt4tNLqaaiKapADlWYmtk8968qon9MkIXYjwQJjv2scd9jOpS8l1udgTX0Ki1Rtl%2Bgid0HBOS14hSe1irZmkREFgf1NEb4rSe9KomdKM3zUbkKMBhTldnXrmDOx33Lvm92LO0ewXF6Rjnte3ccb5VHpo%2FbNpIkEETXfmE9XdnXTop9ik%2FSrgVnu2lX9DyyfRSGYxcad%2BsWWGEnHJGZ3gZa8xhTcCIrl9jIOzecgnYo93iCqn%2FcsblF%2FZRQtxXcpTNpZvbxOmfTdrj5fqv0KDh9ymHcseMEk0UOmqpMSktOceg8UzF37R%2FkNE4hsE5Tw1bIH%2FSwXABZqlXrq2B1GMOuHJcx0HLgn2otZZfHLy%2Bm3ICm9Fi4o%2FN7D%2Be0YWZXonDkuRWCcC9wYKT00B4D9jBuWGwJwsaottJ7HLM5FORT%2B7ivWVVoYm2VsZBpX53qVuJZgZo0GlkJzV1nUo%2BfVLG5hQ%2F1hQfbOxDQ%2FgFALl7%2BxOe2zt8rqvZ%2Bqs3OQ032aFhvjHf6HsmXBfXfzfy8H4jU4b9nKZJK%2BPkgqGJqa2RFjneApi6dvMOv50sQGOqUBlNWmg0C00%2Fm7sfdLL3bwC5%2Bq38%2FkXixd8ZqdJFFN8%2FnbitJTUKu%2FMRwepwP9ovY%2FnIzRO5T6y3JtMLNvmEUGdoTigGfmDFGZgqNAVYLIB6F0UfsZZZiP2du6y0mCl4tn7CD5WuBlPojHg7orNl3osBMHG0NGrhFpE1pWkxwj1c3xxpSiwPiZNEO2JNkucjsk4Q%2F5W2fC2Pqn8iZYGMydaQpBhqUn&X-Amz-Signature=ce9d6c7ec9f745935c2c9e1b36c1fe1bd5d3d81e2e1088ff3180e91171658dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
