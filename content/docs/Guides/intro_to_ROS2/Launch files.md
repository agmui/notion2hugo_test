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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFQBII7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIGuqwiE2J5eS9a73Jek%2BedZyAEkEyCk%2FGB%2BNAdkKpUg%2BAiB%2FdfGqspfPVPJ3T64JrlgL4X1xL58jb%2BUS87I4Sk9SKyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMck8zD6NHvFRo9iRyKtwDVQ5dBgMzMe9q8OA2Yl7OQC5%2BCFKIIzYTzEMR0HAXJxVGv2r21azQ3Wb3VbM7jvG5peyYRkKrtZImdDmhZ8vQJZ990qxLTjoloUO6gl5cdPpSNQAlqmu2lr1lO%2FHxrbRSLnY6eN8190C4PsMnPRXQF9%2FQgfGSvSBDuCTLHd7p04tarH4zJoLheBLj70SP36L2arKPmNSBrZrv1Qni7Xat8lGc9bLVsolluJkxeKc135dhItZzihy%2Bl1X9X5xmYGcHlUgGVBYEcdu9w%2BjyYS%2F8wTyereaeLjjnPFl6VKrjyvmDvtBTmUN99RmCur8hWZ%2FQBbU068iRl%2B57FzwLc%2B2qGohKWAYWIIYR7%2BMn63kvV42NukY9NtnMU39%2Bg5EDFwqEBEGey1myWLJkGmGVDrwQqOPZrnGO%2FqalIgMEHTr1zbSW3AcJhM12lMpij8S%2Fq2xo2ZbcpI%2BfQV9kpQNJXf67hN5ZosNA6xJ4Awtu2F4rp%2BFKLWUdhLb7ZOwK57p4fXRGEU9Zm15zVJJtCyv%2Bg9hLY%2FsFbdE73qgZK%2FPWwAfVaWPqMJ6e6mlkMlbRsZ6CaJalhp%2BAhn53nLPrGbXETa3i%2Buj0m9nAYTZ7mypUw3Z92FvSUiVo1vuuFwuov%2Bswof%2FMwQY6pgGR3U8abzkMs0t7UdzALoKk3Qehr5KFCindPvWQcQ0Fv0CqtvHuXGRM%2BknX5tO0zmwmFhWZVjb6z%2F%2B%2BRoBOoazcOBAjGhtjfAdac37x449lUMby3z1FBwiTgMnughp9L95K78GgCijAnaX0IP9jDdCzIDHbt8gIqJg8pmzasMY6ishUG9vfqAnsGk1K%2FW%2BTUKnRSps2USDJSaYtqTfY9L4paw89kZg1&X-Amz-Signature=f81a51a559fbf4cc9057977a8594ff973800571a5821f8b425d998504f5a7402&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFQBII7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIGuqwiE2J5eS9a73Jek%2BedZyAEkEyCk%2FGB%2BNAdkKpUg%2BAiB%2FdfGqspfPVPJ3T64JrlgL4X1xL58jb%2BUS87I4Sk9SKyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMck8zD6NHvFRo9iRyKtwDVQ5dBgMzMe9q8OA2Yl7OQC5%2BCFKIIzYTzEMR0HAXJxVGv2r21azQ3Wb3VbM7jvG5peyYRkKrtZImdDmhZ8vQJZ990qxLTjoloUO6gl5cdPpSNQAlqmu2lr1lO%2FHxrbRSLnY6eN8190C4PsMnPRXQF9%2FQgfGSvSBDuCTLHd7p04tarH4zJoLheBLj70SP36L2arKPmNSBrZrv1Qni7Xat8lGc9bLVsolluJkxeKc135dhItZzihy%2Bl1X9X5xmYGcHlUgGVBYEcdu9w%2BjyYS%2F8wTyereaeLjjnPFl6VKrjyvmDvtBTmUN99RmCur8hWZ%2FQBbU068iRl%2B57FzwLc%2B2qGohKWAYWIIYR7%2BMn63kvV42NukY9NtnMU39%2Bg5EDFwqEBEGey1myWLJkGmGVDrwQqOPZrnGO%2FqalIgMEHTr1zbSW3AcJhM12lMpij8S%2Fq2xo2ZbcpI%2BfQV9kpQNJXf67hN5ZosNA6xJ4Awtu2F4rp%2BFKLWUdhLb7ZOwK57p4fXRGEU9Zm15zVJJtCyv%2Bg9hLY%2FsFbdE73qgZK%2FPWwAfVaWPqMJ6e6mlkMlbRsZ6CaJalhp%2BAhn53nLPrGbXETa3i%2Buj0m9nAYTZ7mypUw3Z92FvSUiVo1vuuFwuov%2Bswof%2FMwQY6pgGR3U8abzkMs0t7UdzALoKk3Qehr5KFCindPvWQcQ0Fv0CqtvHuXGRM%2BknX5tO0zmwmFhWZVjb6z%2F%2B%2BRoBOoazcOBAjGhtjfAdac37x449lUMby3z1FBwiTgMnughp9L95K78GgCijAnaX0IP9jDdCzIDHbt8gIqJg8pmzasMY6ishUG9vfqAnsGk1K%2FW%2BTUKnRSps2USDJSaYtqTfY9L4paw89kZg1&X-Amz-Signature=fbea85708b0470c2519fc944ff41919ad07591abd607ec7ccde8584b30e98c37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFQBII7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIGuqwiE2J5eS9a73Jek%2BedZyAEkEyCk%2FGB%2BNAdkKpUg%2BAiB%2FdfGqspfPVPJ3T64JrlgL4X1xL58jb%2BUS87I4Sk9SKyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMck8zD6NHvFRo9iRyKtwDVQ5dBgMzMe9q8OA2Yl7OQC5%2BCFKIIzYTzEMR0HAXJxVGv2r21azQ3Wb3VbM7jvG5peyYRkKrtZImdDmhZ8vQJZ990qxLTjoloUO6gl5cdPpSNQAlqmu2lr1lO%2FHxrbRSLnY6eN8190C4PsMnPRXQF9%2FQgfGSvSBDuCTLHd7p04tarH4zJoLheBLj70SP36L2arKPmNSBrZrv1Qni7Xat8lGc9bLVsolluJkxeKc135dhItZzihy%2Bl1X9X5xmYGcHlUgGVBYEcdu9w%2BjyYS%2F8wTyereaeLjjnPFl6VKrjyvmDvtBTmUN99RmCur8hWZ%2FQBbU068iRl%2B57FzwLc%2B2qGohKWAYWIIYR7%2BMn63kvV42NukY9NtnMU39%2Bg5EDFwqEBEGey1myWLJkGmGVDrwQqOPZrnGO%2FqalIgMEHTr1zbSW3AcJhM12lMpij8S%2Fq2xo2ZbcpI%2BfQV9kpQNJXf67hN5ZosNA6xJ4Awtu2F4rp%2BFKLWUdhLb7ZOwK57p4fXRGEU9Zm15zVJJtCyv%2Bg9hLY%2FsFbdE73qgZK%2FPWwAfVaWPqMJ6e6mlkMlbRsZ6CaJalhp%2BAhn53nLPrGbXETa3i%2Buj0m9nAYTZ7mypUw3Z92FvSUiVo1vuuFwuov%2Bswof%2FMwQY6pgGR3U8abzkMs0t7UdzALoKk3Qehr5KFCindPvWQcQ0Fv0CqtvHuXGRM%2BknX5tO0zmwmFhWZVjb6z%2F%2B%2BRoBOoazcOBAjGhtjfAdac37x449lUMby3z1FBwiTgMnughp9L95K78GgCijAnaX0IP9jDdCzIDHbt8gIqJg8pmzasMY6ishUG9vfqAnsGk1K%2FW%2BTUKnRSps2USDJSaYtqTfY9L4paw89kZg1&X-Amz-Signature=4fd794fcb98c4d58ec0527bbd83719314e06c8e3cc15a4e76279f1b3e2cd2668&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
