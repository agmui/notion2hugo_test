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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HR47FO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGd6XChgPbnc6ggIn7Qnw0SswFsge7vGA3GXwPPDlnVoAiAtO6X4E%2B7aef8PaXTQhFgqakQkYak4Ez%2By8cBMbB3UdyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1B6dgwZiBy4AcBhTKtwDNiR7p8SFAHzBZZs3olAi83b%2FuhqUQ%2FsGKPXjjSE6KQEs5Vn9sVihj4lyCUfL%2FtyYv5oyJepfYkikM60v805OQmvPCcOY7uwqh5m2R0zE2TD8LoyRZeBdWpygHZ3989w9lRJvNtsqFuzZwkTFIpzA%2BGF3YAnuaRpONCdk9Tje63N8NScZ83B%2B135FIBQxsPJa77zI%2BP4t%2FSQLHsx4kEVvLaThMrJFeejRU0oFunf95pOtPftYxQ5SbBNMoaoEjWb75lJEXuTqV7uc3KyPhet5rB1PhjtuylXsSUcFzAOvamTya1kMJ%2B6hEXkHuzMyUEN2Yzf677oD2vpgYeVYTHmlTCcrdHyBLQjd1%2B94LGaSM7%2Fok6KH%2BNhboiL57nSn%2BfzsRCWIgZjWNrXuEPTtTHxj7ayZEKex1GwQddvDgpFGq9ZF8zdvJZ8QqwsPRK0aPpnI%2FBjJPkVJlrnsk6v6Cdyv%2FJ6SNgIDPa3s9km%2Fnn%2FYrUEqMRW06c%2FC%2FdcaJlWiztOEntYRGlra8VfzpObDMlA%2F2F4aYs3eG%2BqPPUs5oX2vx9GuWkjT5JhpJgMdO74U7Q58BeqzPggGjvne2imkN8owGMRKoNNLto0NXZqTVmRNrlHpVkc23RQnzHfj4L8w8ZOpwgY6pgG1wgNMRrN6Ydo7uD%2Ffoza30w3VZgxS4EbQGJLu%2FEjm7Ax7MPR7L7yEKft%2BDUFtVbEoHLOGXWMmyQVGbyL%2Fp1acSBm%2BUaRVrVCXhHDcvr5KwgWtOzmRUHaETeauGmRDdn0S0lM9Sjy%2BVU9nor8C9ogQAuw00scTjJ5TsE8b4dYCnInvUPfLtJgK5d2qAKj%2F36H1S3sx%2F7M6P%2BKKa4tlGJv%2FuBZlT69Y&X-Amz-Signature=2492a849d3a7a4224bc4b2679a96e52c28bad0beb127f000c7baa5f0f14f79a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HR47FO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGd6XChgPbnc6ggIn7Qnw0SswFsge7vGA3GXwPPDlnVoAiAtO6X4E%2B7aef8PaXTQhFgqakQkYak4Ez%2By8cBMbB3UdyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1B6dgwZiBy4AcBhTKtwDNiR7p8SFAHzBZZs3olAi83b%2FuhqUQ%2FsGKPXjjSE6KQEs5Vn9sVihj4lyCUfL%2FtyYv5oyJepfYkikM60v805OQmvPCcOY7uwqh5m2R0zE2TD8LoyRZeBdWpygHZ3989w9lRJvNtsqFuzZwkTFIpzA%2BGF3YAnuaRpONCdk9Tje63N8NScZ83B%2B135FIBQxsPJa77zI%2BP4t%2FSQLHsx4kEVvLaThMrJFeejRU0oFunf95pOtPftYxQ5SbBNMoaoEjWb75lJEXuTqV7uc3KyPhet5rB1PhjtuylXsSUcFzAOvamTya1kMJ%2B6hEXkHuzMyUEN2Yzf677oD2vpgYeVYTHmlTCcrdHyBLQjd1%2B94LGaSM7%2Fok6KH%2BNhboiL57nSn%2BfzsRCWIgZjWNrXuEPTtTHxj7ayZEKex1GwQddvDgpFGq9ZF8zdvJZ8QqwsPRK0aPpnI%2FBjJPkVJlrnsk6v6Cdyv%2FJ6SNgIDPa3s9km%2Fnn%2FYrUEqMRW06c%2FC%2FdcaJlWiztOEntYRGlra8VfzpObDMlA%2F2F4aYs3eG%2BqPPUs5oX2vx9GuWkjT5JhpJgMdO74U7Q58BeqzPggGjvne2imkN8owGMRKoNNLto0NXZqTVmRNrlHpVkc23RQnzHfj4L8w8ZOpwgY6pgG1wgNMRrN6Ydo7uD%2Ffoza30w3VZgxS4EbQGJLu%2FEjm7Ax7MPR7L7yEKft%2BDUFtVbEoHLOGXWMmyQVGbyL%2Fp1acSBm%2BUaRVrVCXhHDcvr5KwgWtOzmRUHaETeauGmRDdn0S0lM9Sjy%2BVU9nor8C9ogQAuw00scTjJ5TsE8b4dYCnInvUPfLtJgK5d2qAKj%2F36H1S3sx%2F7M6P%2BKKa4tlGJv%2FuBZlT69Y&X-Amz-Signature=4c1fba856fc18fefe2ead7b86ddeabb06b4347dc90d003379bc43b648358efb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3HR47FO%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIGd6XChgPbnc6ggIn7Qnw0SswFsge7vGA3GXwPPDlnVoAiAtO6X4E%2B7aef8PaXTQhFgqakQkYak4Ez%2By8cBMbB3UdyqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1B6dgwZiBy4AcBhTKtwDNiR7p8SFAHzBZZs3olAi83b%2FuhqUQ%2FsGKPXjjSE6KQEs5Vn9sVihj4lyCUfL%2FtyYv5oyJepfYkikM60v805OQmvPCcOY7uwqh5m2R0zE2TD8LoyRZeBdWpygHZ3989w9lRJvNtsqFuzZwkTFIpzA%2BGF3YAnuaRpONCdk9Tje63N8NScZ83B%2B135FIBQxsPJa77zI%2BP4t%2FSQLHsx4kEVvLaThMrJFeejRU0oFunf95pOtPftYxQ5SbBNMoaoEjWb75lJEXuTqV7uc3KyPhet5rB1PhjtuylXsSUcFzAOvamTya1kMJ%2B6hEXkHuzMyUEN2Yzf677oD2vpgYeVYTHmlTCcrdHyBLQjd1%2B94LGaSM7%2Fok6KH%2BNhboiL57nSn%2BfzsRCWIgZjWNrXuEPTtTHxj7ayZEKex1GwQddvDgpFGq9ZF8zdvJZ8QqwsPRK0aPpnI%2FBjJPkVJlrnsk6v6Cdyv%2FJ6SNgIDPa3s9km%2Fnn%2FYrUEqMRW06c%2FC%2FdcaJlWiztOEntYRGlra8VfzpObDMlA%2F2F4aYs3eG%2BqPPUs5oX2vx9GuWkjT5JhpJgMdO74U7Q58BeqzPggGjvne2imkN8owGMRKoNNLto0NXZqTVmRNrlHpVkc23RQnzHfj4L8w8ZOpwgY6pgG1wgNMRrN6Ydo7uD%2Ffoza30w3VZgxS4EbQGJLu%2FEjm7Ax7MPR7L7yEKft%2BDUFtVbEoHLOGXWMmyQVGbyL%2Fp1acSBm%2BUaRVrVCXhHDcvr5KwgWtOzmRUHaETeauGmRDdn0S0lM9Sjy%2BVU9nor8C9ogQAuw00scTjJ5TsE8b4dYCnInvUPfLtJgK5d2qAKj%2F36H1S3sx%2F7M6P%2BKKa4tlGJv%2FuBZlT69Y&X-Amz-Signature=c2a2492fe571e60740d8eab70b8923bc8b2438fc15a04027cca2f734f3fd7c21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
