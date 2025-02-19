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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFBIFFN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCi7a5wPXdJgfEJLWdmxKyPotjHdeLZ3djg%2FR97xUAJzgIhAKug4K%2BytAnSeXqHh3eEpPJvKgbYoog3wnDVBjcYBR7KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyycaN9ZI%2F6hLZ7TyYq3ANbMmwH5RBlPOnRroUAQjgecCbHGs8A2XGYq3GUL4xK987341rbowiGnBBEXTV7Agpyb9iD%2FG7ym0Iw6VMBSom07bLIUusuc2e9OG1wYej467gDSYQxOwoaCoDCRg92qpz%2FSBeOGnU%2BMHbhmVJ5z9QRfwj2tAKlf4Hd3JEj9b9G7Y6VDy7vJzqx9jY8V%2FF5%2FDHG%2FMRUPJv9lvFc%2FG5VcHubp9tHat81MnSCNx4uJsR%2BHe3RY%2FL7FwIysQzl3jPPAP6Tbl8uNBtlS%2BFEhMBpm%2BU1KGZjH8zgbZefRw4pFpRnlDGwi4lo23N9faleA43JPGYepaN7IfmVvXRGo1LIpe4AqfUHRIuM8A%2FUs%2B%2Bg9FRn7e6%2FHVaymH8TNLv1Qfg%2BtxDLH2DE1M9E%2B2k0Pz0RNXeLdTJ291x95T0Ehozx9C2wOLNHknHttnbGGn%2FjuwjNRgkoGzQbkXA%2FiXujf2LZQ92ourDxUork%2FDVDg0hLxtLFqBRAo5ELAlSxs0tRIuU8q5dSGzLmbjBMun3O9PW5TOT%2FVRfTPlV%2F3Uyz0EJipI9btLS6Kltfn22JCFRXGjOo0YlfmkxU98AGqd65ECM%2FBkk7z4UIo4%2BVotTjAWgQD2MJ2SpybmsESYrJclapHzD3%2Bta9BjqkAXekKBQcD%2BdVanCV7c0cGeuu0olinUnkUKY6Ju4AvXui%2BMEv7FcYhE7uNOvEjteOcgEo1E%2BRShmHSv3wlKoVCasQh6hfE2RKS7R8rLzCpe7JRbzBtfLBAeKkz0q6Jvfrdt957AeaZS2OereSaQlX64pChIB96e80%2BUSl5aHR2XSOyq9MEiCUD9opLWASPwNS3HamIFjoqWaS3G7qdgolDqPX6QLI&X-Amz-Signature=700e805f8883121d190840ffc10c24f9b38dc7e190b37376309b8ec2eff73f73&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFBIFFN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCi7a5wPXdJgfEJLWdmxKyPotjHdeLZ3djg%2FR97xUAJzgIhAKug4K%2BytAnSeXqHh3eEpPJvKgbYoog3wnDVBjcYBR7KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyycaN9ZI%2F6hLZ7TyYq3ANbMmwH5RBlPOnRroUAQjgecCbHGs8A2XGYq3GUL4xK987341rbowiGnBBEXTV7Agpyb9iD%2FG7ym0Iw6VMBSom07bLIUusuc2e9OG1wYej467gDSYQxOwoaCoDCRg92qpz%2FSBeOGnU%2BMHbhmVJ5z9QRfwj2tAKlf4Hd3JEj9b9G7Y6VDy7vJzqx9jY8V%2FF5%2FDHG%2FMRUPJv9lvFc%2FG5VcHubp9tHat81MnSCNx4uJsR%2BHe3RY%2FL7FwIysQzl3jPPAP6Tbl8uNBtlS%2BFEhMBpm%2BU1KGZjH8zgbZefRw4pFpRnlDGwi4lo23N9faleA43JPGYepaN7IfmVvXRGo1LIpe4AqfUHRIuM8A%2FUs%2B%2Bg9FRn7e6%2FHVaymH8TNLv1Qfg%2BtxDLH2DE1M9E%2B2k0Pz0RNXeLdTJ291x95T0Ehozx9C2wOLNHknHttnbGGn%2FjuwjNRgkoGzQbkXA%2FiXujf2LZQ92ourDxUork%2FDVDg0hLxtLFqBRAo5ELAlSxs0tRIuU8q5dSGzLmbjBMun3O9PW5TOT%2FVRfTPlV%2F3Uyz0EJipI9btLS6Kltfn22JCFRXGjOo0YlfmkxU98AGqd65ECM%2FBkk7z4UIo4%2BVotTjAWgQD2MJ2SpybmsESYrJclapHzD3%2Bta9BjqkAXekKBQcD%2BdVanCV7c0cGeuu0olinUnkUKY6Ju4AvXui%2BMEv7FcYhE7uNOvEjteOcgEo1E%2BRShmHSv3wlKoVCasQh6hfE2RKS7R8rLzCpe7JRbzBtfLBAeKkz0q6Jvfrdt957AeaZS2OereSaQlX64pChIB96e80%2BUSl5aHR2XSOyq9MEiCUD9opLWASPwNS3HamIFjoqWaS3G7qdgolDqPX6QLI&X-Amz-Signature=abb0cce4c03c4dc465bef823de54f153b1e9a9b3c426e925f703e6124501a8bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFBIFFN%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCi7a5wPXdJgfEJLWdmxKyPotjHdeLZ3djg%2FR97xUAJzgIhAKug4K%2BytAnSeXqHh3eEpPJvKgbYoog3wnDVBjcYBR7KKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyycaN9ZI%2F6hLZ7TyYq3ANbMmwH5RBlPOnRroUAQjgecCbHGs8A2XGYq3GUL4xK987341rbowiGnBBEXTV7Agpyb9iD%2FG7ym0Iw6VMBSom07bLIUusuc2e9OG1wYej467gDSYQxOwoaCoDCRg92qpz%2FSBeOGnU%2BMHbhmVJ5z9QRfwj2tAKlf4Hd3JEj9b9G7Y6VDy7vJzqx9jY8V%2FF5%2FDHG%2FMRUPJv9lvFc%2FG5VcHubp9tHat81MnSCNx4uJsR%2BHe3RY%2FL7FwIysQzl3jPPAP6Tbl8uNBtlS%2BFEhMBpm%2BU1KGZjH8zgbZefRw4pFpRnlDGwi4lo23N9faleA43JPGYepaN7IfmVvXRGo1LIpe4AqfUHRIuM8A%2FUs%2B%2Bg9FRn7e6%2FHVaymH8TNLv1Qfg%2BtxDLH2DE1M9E%2B2k0Pz0RNXeLdTJ291x95T0Ehozx9C2wOLNHknHttnbGGn%2FjuwjNRgkoGzQbkXA%2FiXujf2LZQ92ourDxUork%2FDVDg0hLxtLFqBRAo5ELAlSxs0tRIuU8q5dSGzLmbjBMun3O9PW5TOT%2FVRfTPlV%2F3Uyz0EJipI9btLS6Kltfn22JCFRXGjOo0YlfmkxU98AGqd65ECM%2FBkk7z4UIo4%2BVotTjAWgQD2MJ2SpybmsESYrJclapHzD3%2Bta9BjqkAXekKBQcD%2BdVanCV7c0cGeuu0olinUnkUKY6Ju4AvXui%2BMEv7FcYhE7uNOvEjteOcgEo1E%2BRShmHSv3wlKoVCasQh6hfE2RKS7R8rLzCpe7JRbzBtfLBAeKkz0q6Jvfrdt957AeaZS2OereSaQlX64pChIB96e80%2BUSl5aHR2XSOyq9MEiCUD9opLWASPwNS3HamIFjoqWaS3G7qdgolDqPX6QLI&X-Amz-Signature=d4e2dc4e4888fff8608cec9679a64438074e66ddd38f0ecaf7df468a83d9a424&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
