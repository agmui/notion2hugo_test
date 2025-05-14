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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LK47EF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDfL%2BNH0Xd8mx9tWWShKh1VAwaKrB9H5GRWaoKgrpKhFgIhALzlSvA9wg8q%2B7scyrYp8zk%2B2R7G0hj6YuNLZYRLEs%2FoKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7cFjT8ZQvKrRUJgQq3AM9BbVr8dW6g7l7UQnhyLs8e2yKY4loWq6CVGpoYBD2%2FLZpXpAcpb7jOlxlM8V0tY8xJ0c6xu2vpLvlPwWA7J%2Bfd6fZY%2F5wOtC%2BLtuXTr6Va3r6kwgUBhadIxuv%2F8fD2%2B%2BDgKCKRFp8aCgEZB4WWwFp7FohYzNZO%2BvGHyh%2Ffh%2BoznQFyKYKs1gjMS9Lyw2bwj3kq41uxGpyl8LLMDVVs6MOyai31P7P39j%2FOzmRIL0mhHou1TPFQNZzz128rcMO4tgLa6tzblDg7Md3PprU1Y7Wv79QILs%2Bn2NHxVL8QiSc6ppsJVwTCMU5MkTtbtEEuDqh2ZgdsKn%2FsrWJSOaNbitsHzILxiajmpsnu2Y5pNGJ0iy5k%2BONvgm43Iw%2Fd2WDGsrA6ljVb%2BJT91vJYFsT4oGCnOzBLGjGT0mpy8A0WLE0Q2Fwu5Wh0JAv57BvuOE5850R9Me3j9e7vm%2FvVq8ZO6j%2BdilzBuawZ1FNBm8BZUf8Wc1BD4QLnvVjFkSyHnCocMkFoKdf0hz18qRKGFTaKCpQPTQbVgEsw0dWlw6OVafuU29PXCSWkEquVCGXALtLVbM3UOOgENuWJaeCULUMfG08h3SVtyTCvr7g76s316%2B1GEOoTEV1BYmDiZ%2BLCzDN74%2FBBjqkAX9BArHYPWMx0fqb884LeXHyRPEwnwhY7yEqyVqY7o%2B3yQ%2F1mwfqh4heL0gNRXqO4HKEs1WE5bnN8n1B6JLXSueKX2STYU55TuAugYpax%2BPZD0pC57tLp7LasCcIXNSBF4ifvKDQ6mAzbaIfRiA4foZgDmYF8v7%2FpP3rVwwEtD9iHF%2F%2BcfAd5NSK3ssxugEbGKGdSXRYcG%2BeN4nsACh5SHoj9snM&X-Amz-Signature=63e1c79992259052c3eba37a7937e7fd6fb98fe3a1626d7b33644dc718300aa7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LK47EF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDfL%2BNH0Xd8mx9tWWShKh1VAwaKrB9H5GRWaoKgrpKhFgIhALzlSvA9wg8q%2B7scyrYp8zk%2B2R7G0hj6YuNLZYRLEs%2FoKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7cFjT8ZQvKrRUJgQq3AM9BbVr8dW6g7l7UQnhyLs8e2yKY4loWq6CVGpoYBD2%2FLZpXpAcpb7jOlxlM8V0tY8xJ0c6xu2vpLvlPwWA7J%2Bfd6fZY%2F5wOtC%2BLtuXTr6Va3r6kwgUBhadIxuv%2F8fD2%2B%2BDgKCKRFp8aCgEZB4WWwFp7FohYzNZO%2BvGHyh%2Ffh%2BoznQFyKYKs1gjMS9Lyw2bwj3kq41uxGpyl8LLMDVVs6MOyai31P7P39j%2FOzmRIL0mhHou1TPFQNZzz128rcMO4tgLa6tzblDg7Md3PprU1Y7Wv79QILs%2Bn2NHxVL8QiSc6ppsJVwTCMU5MkTtbtEEuDqh2ZgdsKn%2FsrWJSOaNbitsHzILxiajmpsnu2Y5pNGJ0iy5k%2BONvgm43Iw%2Fd2WDGsrA6ljVb%2BJT91vJYFsT4oGCnOzBLGjGT0mpy8A0WLE0Q2Fwu5Wh0JAv57BvuOE5850R9Me3j9e7vm%2FvVq8ZO6j%2BdilzBuawZ1FNBm8BZUf8Wc1BD4QLnvVjFkSyHnCocMkFoKdf0hz18qRKGFTaKCpQPTQbVgEsw0dWlw6OVafuU29PXCSWkEquVCGXALtLVbM3UOOgENuWJaeCULUMfG08h3SVtyTCvr7g76s316%2B1GEOoTEV1BYmDiZ%2BLCzDN74%2FBBjqkAX9BArHYPWMx0fqb884LeXHyRPEwnwhY7yEqyVqY7o%2B3yQ%2F1mwfqh4heL0gNRXqO4HKEs1WE5bnN8n1B6JLXSueKX2STYU55TuAugYpax%2BPZD0pC57tLp7LasCcIXNSBF4ifvKDQ6mAzbaIfRiA4foZgDmYF8v7%2FpP3rVwwEtD9iHF%2F%2BcfAd5NSK3ssxugEbGKGdSXRYcG%2BeN4nsACh5SHoj9snM&X-Amz-Signature=76db27d6b959ce07372f79aeafda21abfd85e6be6b3f09c2f1eec513813e7c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3LK47EF%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDfL%2BNH0Xd8mx9tWWShKh1VAwaKrB9H5GRWaoKgrpKhFgIhALzlSvA9wg8q%2B7scyrYp8zk%2B2R7G0hj6YuNLZYRLEs%2FoKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7cFjT8ZQvKrRUJgQq3AM9BbVr8dW6g7l7UQnhyLs8e2yKY4loWq6CVGpoYBD2%2FLZpXpAcpb7jOlxlM8V0tY8xJ0c6xu2vpLvlPwWA7J%2Bfd6fZY%2F5wOtC%2BLtuXTr6Va3r6kwgUBhadIxuv%2F8fD2%2B%2BDgKCKRFp8aCgEZB4WWwFp7FohYzNZO%2BvGHyh%2Ffh%2BoznQFyKYKs1gjMS9Lyw2bwj3kq41uxGpyl8LLMDVVs6MOyai31P7P39j%2FOzmRIL0mhHou1TPFQNZzz128rcMO4tgLa6tzblDg7Md3PprU1Y7Wv79QILs%2Bn2NHxVL8QiSc6ppsJVwTCMU5MkTtbtEEuDqh2ZgdsKn%2FsrWJSOaNbitsHzILxiajmpsnu2Y5pNGJ0iy5k%2BONvgm43Iw%2Fd2WDGsrA6ljVb%2BJT91vJYFsT4oGCnOzBLGjGT0mpy8A0WLE0Q2Fwu5Wh0JAv57BvuOE5850R9Me3j9e7vm%2FvVq8ZO6j%2BdilzBuawZ1FNBm8BZUf8Wc1BD4QLnvVjFkSyHnCocMkFoKdf0hz18qRKGFTaKCpQPTQbVgEsw0dWlw6OVafuU29PXCSWkEquVCGXALtLVbM3UOOgENuWJaeCULUMfG08h3SVtyTCvr7g76s316%2B1GEOoTEV1BYmDiZ%2BLCzDN74%2FBBjqkAX9BArHYPWMx0fqb884LeXHyRPEwnwhY7yEqyVqY7o%2B3yQ%2F1mwfqh4heL0gNRXqO4HKEs1WE5bnN8n1B6JLXSueKX2STYU55TuAugYpax%2BPZD0pC57tLp7LasCcIXNSBF4ifvKDQ6mAzbaIfRiA4foZgDmYF8v7%2FpP3rVwwEtD9iHF%2F%2BcfAd5NSK3ssxugEbGKGdSXRYcG%2BeN4nsACh5SHoj9snM&X-Amz-Signature=d442ecd7983178b60d5762d5d7f7bc85b07cfb178a5158c6932c4c86a076ec13&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
