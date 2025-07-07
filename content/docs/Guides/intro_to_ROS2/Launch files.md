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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEETOJD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFG2p82Ovorw9ZEYf1VyG8zt785GNXValCCYl6QX4rLMAiA3qf%2F%2Fl4ZMIKoOJKvdAr8zqbLVUKXpFeSAoZ8jWU0fXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2BCZ18aHcvCUl%2Fn6jKtwD52mckcgcwF6x152U9jRtKARVMpG4vZwpuiRCt%2F8%2F8embH3DvVopfOMGQe9JeTEu7RzkdJbD9QdtJjlDpYr0%2FyouVMfJZ8YaGh55HS4Cu83YqfDWziIipt%2Bie8fMK6GzbNSWon3G5QyCijevKGz0bejxxhZWkUc5lcim7pyfXg%2FNNOJL7t%2BFajyzWBO4fC61js7gvHIacgUyXNgQzo9tX61aKqK6Ky8vfNCGVUTmTfHZYqaA7icfEyLGSAKCywWk1lIAi%2BhfwX84frGAFdGYWzXH%2F6m%2FZmZqeIWAVVh8VN5vMgkhTbciIjdm2h%2BA6ACLlw5CVTkLC4fwWLOprufRxaRDIINFBlc8uR%2FonfsYzxGORSvbPm1Zd4dyh2bxz25X5vfwrg1gabqTm8j%2BCC8PlAtdqh674ASyArx1Q%2ByV8Hvik4ugTTOh1DLU7PphBlgrW3L39lbD6OQE4Bo8IKGUZz%2FM%2B7A14EGj7F5snN4kKjXLYNzUcyWVVZuMC1ltgA0yEKdSn2I4VglRM4RSFr1jTOn5svT5pc2iIRzdJWIeorEkHf43VaqbBVBnM9i7hF0pmdycaxIZOiNL3skmPYikfvazvD2VO%2Bdz%2BgcnV0C52A5jRigajBcD0iLsjYeAwkJawwwY6pgGzPpJWcaSnJS2dPR%2Bktlku%2BLHav73YhaTGuVW7ZMZU%2FIg74e3KNeu2p7vFUEw%2BmtYPXm43HinpbX9G9Ggssus5zeD0wBgtYNkeTanJFtwmDI4vlVQkjamN%2Bd4P1lrh%2BpYB8pk%2FzEb%2Fg9fsWCJWUCGsvvd4eaNcaH3srSJX2xjNRYOwNFxyxCbdcns9yQoNXsShDR6bJzno3jomANpykDSQAmj%2FKlxT&X-Amz-Signature=6084ec1056fe94a865b0ae3d404ca6749f07740c51720b913fbe756ffd3b15be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEETOJD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFG2p82Ovorw9ZEYf1VyG8zt785GNXValCCYl6QX4rLMAiA3qf%2F%2Fl4ZMIKoOJKvdAr8zqbLVUKXpFeSAoZ8jWU0fXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2BCZ18aHcvCUl%2Fn6jKtwD52mckcgcwF6x152U9jRtKARVMpG4vZwpuiRCt%2F8%2F8embH3DvVopfOMGQe9JeTEu7RzkdJbD9QdtJjlDpYr0%2FyouVMfJZ8YaGh55HS4Cu83YqfDWziIipt%2Bie8fMK6GzbNSWon3G5QyCijevKGz0bejxxhZWkUc5lcim7pyfXg%2FNNOJL7t%2BFajyzWBO4fC61js7gvHIacgUyXNgQzo9tX61aKqK6Ky8vfNCGVUTmTfHZYqaA7icfEyLGSAKCywWk1lIAi%2BhfwX84frGAFdGYWzXH%2F6m%2FZmZqeIWAVVh8VN5vMgkhTbciIjdm2h%2BA6ACLlw5CVTkLC4fwWLOprufRxaRDIINFBlc8uR%2FonfsYzxGORSvbPm1Zd4dyh2bxz25X5vfwrg1gabqTm8j%2BCC8PlAtdqh674ASyArx1Q%2ByV8Hvik4ugTTOh1DLU7PphBlgrW3L39lbD6OQE4Bo8IKGUZz%2FM%2B7A14EGj7F5snN4kKjXLYNzUcyWVVZuMC1ltgA0yEKdSn2I4VglRM4RSFr1jTOn5svT5pc2iIRzdJWIeorEkHf43VaqbBVBnM9i7hF0pmdycaxIZOiNL3skmPYikfvazvD2VO%2Bdz%2BgcnV0C52A5jRigajBcD0iLsjYeAwkJawwwY6pgGzPpJWcaSnJS2dPR%2Bktlku%2BLHav73YhaTGuVW7ZMZU%2FIg74e3KNeu2p7vFUEw%2BmtYPXm43HinpbX9G9Ggssus5zeD0wBgtYNkeTanJFtwmDI4vlVQkjamN%2Bd4P1lrh%2BpYB8pk%2FzEb%2Fg9fsWCJWUCGsvvd4eaNcaH3srSJX2xjNRYOwNFxyxCbdcns9yQoNXsShDR6bJzno3jomANpykDSQAmj%2FKlxT&X-Amz-Signature=018e68b099490ab651fc5a08d13b26a4f8d6c71a5e22abc5690550d59c72f15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLEETOJD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T190757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFG2p82Ovorw9ZEYf1VyG8zt785GNXValCCYl6QX4rLMAiA3qf%2F%2Fl4ZMIKoOJKvdAr8zqbLVUKXpFeSAoZ8jWU0fXir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2BCZ18aHcvCUl%2Fn6jKtwD52mckcgcwF6x152U9jRtKARVMpG4vZwpuiRCt%2F8%2F8embH3DvVopfOMGQe9JeTEu7RzkdJbD9QdtJjlDpYr0%2FyouVMfJZ8YaGh55HS4Cu83YqfDWziIipt%2Bie8fMK6GzbNSWon3G5QyCijevKGz0bejxxhZWkUc5lcim7pyfXg%2FNNOJL7t%2BFajyzWBO4fC61js7gvHIacgUyXNgQzo9tX61aKqK6Ky8vfNCGVUTmTfHZYqaA7icfEyLGSAKCywWk1lIAi%2BhfwX84frGAFdGYWzXH%2F6m%2FZmZqeIWAVVh8VN5vMgkhTbciIjdm2h%2BA6ACLlw5CVTkLC4fwWLOprufRxaRDIINFBlc8uR%2FonfsYzxGORSvbPm1Zd4dyh2bxz25X5vfwrg1gabqTm8j%2BCC8PlAtdqh674ASyArx1Q%2ByV8Hvik4ugTTOh1DLU7PphBlgrW3L39lbD6OQE4Bo8IKGUZz%2FM%2B7A14EGj7F5snN4kKjXLYNzUcyWVVZuMC1ltgA0yEKdSn2I4VglRM4RSFr1jTOn5svT5pc2iIRzdJWIeorEkHf43VaqbBVBnM9i7hF0pmdycaxIZOiNL3skmPYikfvazvD2VO%2Bdz%2BgcnV0C52A5jRigajBcD0iLsjYeAwkJawwwY6pgGzPpJWcaSnJS2dPR%2Bktlku%2BLHav73YhaTGuVW7ZMZU%2FIg74e3KNeu2p7vFUEw%2BmtYPXm43HinpbX9G9Ggssus5zeD0wBgtYNkeTanJFtwmDI4vlVQkjamN%2Bd4P1lrh%2BpYB8pk%2FzEb%2Fg9fsWCJWUCGsvvd4eaNcaH3srSJX2xjNRYOwNFxyxCbdcns9yQoNXsShDR6bJzno3jomANpykDSQAmj%2FKlxT&X-Amz-Signature=aa3667ca3c54a061d4d7133caadf73d64bb246ced5c1f8ceedd2f4885bb13e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
