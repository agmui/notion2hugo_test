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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4QXKHXW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZEqpomW8Udaem9KW%2B7u4PjCQpNwr2iLXCNtpluylrhAIgUMfOoFEA64CDv0jPZbFDOAHzsYq6qKyfll9elzo4Iikq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIcxNecA6DPqgR2I6ircA30IGAFkNCaHyVxQSmTfJ1j4eX3Vq6dbFe6u8SUZ8HCZ%2B0HYEKjPA0IbKQOwMc23SAewWc6EZb1A1Iw3dO5guuwrk0YuFxbbFN4AeUlhM97SgDmVqzPcwUNtYnnwFTsObEkDlSZNPUq86VswN%2B8OxUdSBDwiKlDUEsmYuq1t%2B3gYzTvmZJXo3oxwcVKjCJTp6Bd00dQ60ndPMlGlazsHCIO1S3svLoUX7p48qhhXZ8LI8DsTLQvWwCegKWzKE2Ilxg4b8sb1LS6xxkHOWO3DA1dd4D0%2BVu%2BaFKMt4msQ5VLCVQvnh3T4YzQvyTTOs6RLGOGiEdy1mzNZdwv0iLEUucnrzl4PKSfocC3s%2Bq6O5qaBmKCd7Qad01%2FYQEsQ5Hm7aXdJzolnJmoREqrRLx5gP17ReQQfqNnT5rryoXXnyLtEWZGD7Lx6uofNa%2FeepzpuwTJ9AFzPQ%2BnFVZfcRhOF7uVbES4w7Bct6ksjWnaKdn%2BLZ8tbB9%2BrcXrvAUYxyCK%2B4oP4jGTCpxHrtrdhSbCimiPt2tSNKCUpkZcMxabJZjVOj1KdrWhNAQGHbaEtqiDuL5W%2F1lDaxWA%2B3pOmqenTOQfpyYagWc0vYc0FzLhW1IxwevJV5pGnhO4DStzlMKOug8AGOqUBtvVctk10Dl2zz8eMKLa6D2m%2BKzFSqyhGgn3vNUdijG%2BzVyuI%2FKMSqK8vxb%2FiAHpHocAYQViUmaJQ51Hu4no1JkM%2BYVEs7D2XAcpB8hfBhDgGDtelpo9kBLJBOEeJ3evaU4nRUOYZ3CRrnkVEuBRd9%2BbOBn%2FQSzt%2FFBLrxxkRz0ah79yd4hrOgyqZgvhg83MFoeEhcHWmNmW4mQkQgRM9o5RJfcAr&X-Amz-Signature=80c3484899b801a813728b26e1ad157cbfc0057c2214a851a743e6b1fff95034&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4QXKHXW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZEqpomW8Udaem9KW%2B7u4PjCQpNwr2iLXCNtpluylrhAIgUMfOoFEA64CDv0jPZbFDOAHzsYq6qKyfll9elzo4Iikq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIcxNecA6DPqgR2I6ircA30IGAFkNCaHyVxQSmTfJ1j4eX3Vq6dbFe6u8SUZ8HCZ%2B0HYEKjPA0IbKQOwMc23SAewWc6EZb1A1Iw3dO5guuwrk0YuFxbbFN4AeUlhM97SgDmVqzPcwUNtYnnwFTsObEkDlSZNPUq86VswN%2B8OxUdSBDwiKlDUEsmYuq1t%2B3gYzTvmZJXo3oxwcVKjCJTp6Bd00dQ60ndPMlGlazsHCIO1S3svLoUX7p48qhhXZ8LI8DsTLQvWwCegKWzKE2Ilxg4b8sb1LS6xxkHOWO3DA1dd4D0%2BVu%2BaFKMt4msQ5VLCVQvnh3T4YzQvyTTOs6RLGOGiEdy1mzNZdwv0iLEUucnrzl4PKSfocC3s%2Bq6O5qaBmKCd7Qad01%2FYQEsQ5Hm7aXdJzolnJmoREqrRLx5gP17ReQQfqNnT5rryoXXnyLtEWZGD7Lx6uofNa%2FeepzpuwTJ9AFzPQ%2BnFVZfcRhOF7uVbES4w7Bct6ksjWnaKdn%2BLZ8tbB9%2BrcXrvAUYxyCK%2B4oP4jGTCpxHrtrdhSbCimiPt2tSNKCUpkZcMxabJZjVOj1KdrWhNAQGHbaEtqiDuL5W%2F1lDaxWA%2B3pOmqenTOQfpyYagWc0vYc0FzLhW1IxwevJV5pGnhO4DStzlMKOug8AGOqUBtvVctk10Dl2zz8eMKLa6D2m%2BKzFSqyhGgn3vNUdijG%2BzVyuI%2FKMSqK8vxb%2FiAHpHocAYQViUmaJQ51Hu4no1JkM%2BYVEs7D2XAcpB8hfBhDgGDtelpo9kBLJBOEeJ3evaU4nRUOYZ3CRrnkVEuBRd9%2BbOBn%2FQSzt%2FFBLrxxkRz0ah79yd4hrOgyqZgvhg83MFoeEhcHWmNmW4mQkQgRM9o5RJfcAr&X-Amz-Signature=4deedd7389a11c529c2a37bc2a8494efc16a85720e340156c6397404fa06ec2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4QXKHXW%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZEqpomW8Udaem9KW%2B7u4PjCQpNwr2iLXCNtpluylrhAIgUMfOoFEA64CDv0jPZbFDOAHzsYq6qKyfll9elzo4Iikq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIcxNecA6DPqgR2I6ircA30IGAFkNCaHyVxQSmTfJ1j4eX3Vq6dbFe6u8SUZ8HCZ%2B0HYEKjPA0IbKQOwMc23SAewWc6EZb1A1Iw3dO5guuwrk0YuFxbbFN4AeUlhM97SgDmVqzPcwUNtYnnwFTsObEkDlSZNPUq86VswN%2B8OxUdSBDwiKlDUEsmYuq1t%2B3gYzTvmZJXo3oxwcVKjCJTp6Bd00dQ60ndPMlGlazsHCIO1S3svLoUX7p48qhhXZ8LI8DsTLQvWwCegKWzKE2Ilxg4b8sb1LS6xxkHOWO3DA1dd4D0%2BVu%2BaFKMt4msQ5VLCVQvnh3T4YzQvyTTOs6RLGOGiEdy1mzNZdwv0iLEUucnrzl4PKSfocC3s%2Bq6O5qaBmKCd7Qad01%2FYQEsQ5Hm7aXdJzolnJmoREqrRLx5gP17ReQQfqNnT5rryoXXnyLtEWZGD7Lx6uofNa%2FeepzpuwTJ9AFzPQ%2BnFVZfcRhOF7uVbES4w7Bct6ksjWnaKdn%2BLZ8tbB9%2BrcXrvAUYxyCK%2B4oP4jGTCpxHrtrdhSbCimiPt2tSNKCUpkZcMxabJZjVOj1KdrWhNAQGHbaEtqiDuL5W%2F1lDaxWA%2B3pOmqenTOQfpyYagWc0vYc0FzLhW1IxwevJV5pGnhO4DStzlMKOug8AGOqUBtvVctk10Dl2zz8eMKLa6D2m%2BKzFSqyhGgn3vNUdijG%2BzVyuI%2FKMSqK8vxb%2FiAHpHocAYQViUmaJQ51Hu4no1JkM%2BYVEs7D2XAcpB8hfBhDgGDtelpo9kBLJBOEeJ3evaU4nRUOYZ3CRrnkVEuBRd9%2BbOBn%2FQSzt%2FFBLrxxkRz0ah79yd4hrOgyqZgvhg83MFoeEhcHWmNmW4mQkQgRM9o5RJfcAr&X-Amz-Signature=0b6a35598ae072d7b4d686866a42312169a8a997089382809b3a47530814fa26&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
