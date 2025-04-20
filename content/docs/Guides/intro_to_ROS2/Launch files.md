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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTYG56P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDh%2BzFltc29zNJgwAXwbb6Z98CuSISH3zdwZvSrPFPhQQIgWvZHuJv07h9RR3Tnbm7epczqwK0rXUHnLqdj0V2uoTMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkdtYa8Ob%2BKNOnpVCrcA6KZRV6iCTa3S82MsLCZA7f524Kgr4ZRr6DQ4at836LiMua97phE4A0wRvrHEtRsZ4Khfp1q%2BmPbCt0b%2BcxEUC%2Bpy2My%2BKcfWKdFsAzfdxW5n03PmTbL%2F%2BZb4HNaUGxp7yXo2H6jHB0H6%2FVyqWR4faSD3OAZr2TQdm9nblHv8hAaXOL8EKrZbC9tZOS4%2Bxlj2y8oR3UWJZSVBdbF3aUol9RUuehfQzOXf2U5bcU5Ti%2F7OwTtoFhclDAZg6jkYkqeYMmPhIiJ6TvWvSssaaW9JgFMtLOphLhvUHGZTOGEW6Flw399Jvto3icB2vLPRqk3odW4iCTe7SrCXxA%2FCRgb%2FrKn%2BVafN6e1bCr7xCLamAnouvRwHCecRLd3u1WJ6BSbFTY%2BgWE9AO5zntt5z72HUXuBIido2qcCKjPxhxdah2Su6scwzZsknHy0NdgutfkLRnYvvgO1PbIvB%2BlkBJi4xF1f%2B%2Bq8jO58Q1Lb5YeE%2BXTd0%2BCfZW3fMCtmYj5PbixSO3LNyWQJJeuAE1o37Lyn2ypmFg5PP6Du0NCUmCYfqt4QSr0gDCj8xPP2mKeOJhBYekpqGe1Ik79J7BbuzgJaiSCnksa9b9%2FLy46uuH%2B4%2Fq8%2B4VB1GwNHzgqsH7CKMKikksAGOqUBHHemBJFpW0aH6GGkL%2FplrunlqMRYZ09FKOynaX7rG80xY71ch0mBoUYQSYQO3Fak3sQdleWYyaWv58n3kkp3cZSAfA93cB8nfLa4UJ7FADk%2FVqqFnSyh1rZ1YNLIJY6yDkmp3mCDF850bd4NKyxNaRX8OIAFrqDceJoGHvrHE4cF77T2BYgDvLL%2Fu7VjC44f1UnLC5MZjpNZEee%2FjsheBqCMxZr9&X-Amz-Signature=fba4f05d8ff8db4e433e2cb97dc70c66b951b0a2d703047cec6772c4f866c384&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTYG56P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDh%2BzFltc29zNJgwAXwbb6Z98CuSISH3zdwZvSrPFPhQQIgWvZHuJv07h9RR3Tnbm7epczqwK0rXUHnLqdj0V2uoTMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkdtYa8Ob%2BKNOnpVCrcA6KZRV6iCTa3S82MsLCZA7f524Kgr4ZRr6DQ4at836LiMua97phE4A0wRvrHEtRsZ4Khfp1q%2BmPbCt0b%2BcxEUC%2Bpy2My%2BKcfWKdFsAzfdxW5n03PmTbL%2F%2BZb4HNaUGxp7yXo2H6jHB0H6%2FVyqWR4faSD3OAZr2TQdm9nblHv8hAaXOL8EKrZbC9tZOS4%2Bxlj2y8oR3UWJZSVBdbF3aUol9RUuehfQzOXf2U5bcU5Ti%2F7OwTtoFhclDAZg6jkYkqeYMmPhIiJ6TvWvSssaaW9JgFMtLOphLhvUHGZTOGEW6Flw399Jvto3icB2vLPRqk3odW4iCTe7SrCXxA%2FCRgb%2FrKn%2BVafN6e1bCr7xCLamAnouvRwHCecRLd3u1WJ6BSbFTY%2BgWE9AO5zntt5z72HUXuBIido2qcCKjPxhxdah2Su6scwzZsknHy0NdgutfkLRnYvvgO1PbIvB%2BlkBJi4xF1f%2B%2Bq8jO58Q1Lb5YeE%2BXTd0%2BCfZW3fMCtmYj5PbixSO3LNyWQJJeuAE1o37Lyn2ypmFg5PP6Du0NCUmCYfqt4QSr0gDCj8xPP2mKeOJhBYekpqGe1Ik79J7BbuzgJaiSCnksa9b9%2FLy46uuH%2B4%2Fq8%2B4VB1GwNHzgqsH7CKMKikksAGOqUBHHemBJFpW0aH6GGkL%2FplrunlqMRYZ09FKOynaX7rG80xY71ch0mBoUYQSYQO3Fak3sQdleWYyaWv58n3kkp3cZSAfA93cB8nfLa4UJ7FADk%2FVqqFnSyh1rZ1YNLIJY6yDkmp3mCDF850bd4NKyxNaRX8OIAFrqDceJoGHvrHE4cF77T2BYgDvLL%2Fu7VjC44f1UnLC5MZjpNZEee%2FjsheBqCMxZr9&X-Amz-Signature=2497c7071221a51d35efadbf5202a099c57acd27b943898d045f15c70a45e6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RTYG56P%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDh%2BzFltc29zNJgwAXwbb6Z98CuSISH3zdwZvSrPFPhQQIgWvZHuJv07h9RR3Tnbm7epczqwK0rXUHnLqdj0V2uoTMqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkdtYa8Ob%2BKNOnpVCrcA6KZRV6iCTa3S82MsLCZA7f524Kgr4ZRr6DQ4at836LiMua97phE4A0wRvrHEtRsZ4Khfp1q%2BmPbCt0b%2BcxEUC%2Bpy2My%2BKcfWKdFsAzfdxW5n03PmTbL%2F%2BZb4HNaUGxp7yXo2H6jHB0H6%2FVyqWR4faSD3OAZr2TQdm9nblHv8hAaXOL8EKrZbC9tZOS4%2Bxlj2y8oR3UWJZSVBdbF3aUol9RUuehfQzOXf2U5bcU5Ti%2F7OwTtoFhclDAZg6jkYkqeYMmPhIiJ6TvWvSssaaW9JgFMtLOphLhvUHGZTOGEW6Flw399Jvto3icB2vLPRqk3odW4iCTe7SrCXxA%2FCRgb%2FrKn%2BVafN6e1bCr7xCLamAnouvRwHCecRLd3u1WJ6BSbFTY%2BgWE9AO5zntt5z72HUXuBIido2qcCKjPxhxdah2Su6scwzZsknHy0NdgutfkLRnYvvgO1PbIvB%2BlkBJi4xF1f%2B%2Bq8jO58Q1Lb5YeE%2BXTd0%2BCfZW3fMCtmYj5PbixSO3LNyWQJJeuAE1o37Lyn2ypmFg5PP6Du0NCUmCYfqt4QSr0gDCj8xPP2mKeOJhBYekpqGe1Ik79J7BbuzgJaiSCnksa9b9%2FLy46uuH%2B4%2Fq8%2B4VB1GwNHzgqsH7CKMKikksAGOqUBHHemBJFpW0aH6GGkL%2FplrunlqMRYZ09FKOynaX7rG80xY71ch0mBoUYQSYQO3Fak3sQdleWYyaWv58n3kkp3cZSAfA93cB8nfLa4UJ7FADk%2FVqqFnSyh1rZ1YNLIJY6yDkmp3mCDF850bd4NKyxNaRX8OIAFrqDceJoGHvrHE4cF77T2BYgDvLL%2Fu7VjC44f1UnLC5MZjpNZEee%2FjsheBqCMxZr9&X-Amz-Signature=5c5d4bd5a936d92f3dcd16869edc655d051fcd5b0073548ada8f11e15029c1ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
