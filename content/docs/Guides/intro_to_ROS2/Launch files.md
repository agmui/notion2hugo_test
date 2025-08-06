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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JA3EPVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDOc44gViMjTtfDkFcIFawhlyqvyDZKjGVQBuO7nr9TmAiAKyj1sWvsIearNL04XE7BfxW3kQK54JUrSYLQs%2BpkwSir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMX99Zpp0sLi3%2BlhfTKtwDnoV1RoPLlPB2M%2F%2BhbOiGI4tTA1oU5rsPMxCrLlMeEuG4Kn1BzG%2FVKTJZZcFa9inajpWZb%2BdoGkEP9KW922kj6zdetXdcfkxrat%2FrJe9n4z79%2Fn%2BD8aHpNEvmHKQfNJhGnSu85WfJqyo5JVARwaC7nIbJjodkj%2BNFqns1UuI7uOKzHFZplnfcGknMs5ykJn6Mwam0lAb8UvclEIRASi09sXvhGPTg7oSgBA0SjvpvRtJEFPmMc8gp7wjUWwi5hdWq7BQ0vCyNKsj6pDCvh2ujsGzZ5kpb%2FCMPFRx79KrHA2UV5Gg7G9zOu15AD0%2Bd7t80NFSXR4iCX4y2ebOSQSnoX8sEgjEjkkPtfbZJzCgs1mPn1UTfqggTKa3LBZ%2F0WslVX4jV%2B87WCDE4X2%2BZAZQZv7XewOwvhhj7bKCf7HcJly8Rgl6nLd5wkbxbBC8%2FLCmrfOdPJs%2FN7luLQ3PBj9tcX92AEn7ANp7iytkHH4pWl%2BajDDN9ZLsB1E%2FTcWB9SkbbDXCo2H%2BXz603mSfLoAvvCIa3C2%2Bs2fGZAGhViIeaeVB3bG62paEKlBfUqxrapJ1TxVo%2BwK%2BtP4pHFZSjyab89xCHFHDF8fYNfB3Xri4l7QgyoaX3DuVNrETMjmMw3%2FvNxAY6pgF5sBUkV%2FGK9erJ37EkKJO%2BcQqGnfGPi6%2FEOLV32KZzjj3GI7SVr5UrjtPOjQ0vL7B815t14O6gfSNhu0cDU6woPQR24M8Y5hrV7kWZwNy%2FauqsNtzMgHtfDM3fufQGsKAzf025NqxItbexeg4l9ahnEuEl%2FUQmw0N7%2BQKVvABoboTV5oqdTbCbIsd2ML0XYlqD2CWskjKPIwCErV5ZxD2rRL%2Ft1cwA&X-Amz-Signature=74aec8eb08c5b8cccba45e4cf4624b931192a9198ac29a97da563d8ea9e3f039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JA3EPVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDOc44gViMjTtfDkFcIFawhlyqvyDZKjGVQBuO7nr9TmAiAKyj1sWvsIearNL04XE7BfxW3kQK54JUrSYLQs%2BpkwSir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMX99Zpp0sLi3%2BlhfTKtwDnoV1RoPLlPB2M%2F%2BhbOiGI4tTA1oU5rsPMxCrLlMeEuG4Kn1BzG%2FVKTJZZcFa9inajpWZb%2BdoGkEP9KW922kj6zdetXdcfkxrat%2FrJe9n4z79%2Fn%2BD8aHpNEvmHKQfNJhGnSu85WfJqyo5JVARwaC7nIbJjodkj%2BNFqns1UuI7uOKzHFZplnfcGknMs5ykJn6Mwam0lAb8UvclEIRASi09sXvhGPTg7oSgBA0SjvpvRtJEFPmMc8gp7wjUWwi5hdWq7BQ0vCyNKsj6pDCvh2ujsGzZ5kpb%2FCMPFRx79KrHA2UV5Gg7G9zOu15AD0%2Bd7t80NFSXR4iCX4y2ebOSQSnoX8sEgjEjkkPtfbZJzCgs1mPn1UTfqggTKa3LBZ%2F0WslVX4jV%2B87WCDE4X2%2BZAZQZv7XewOwvhhj7bKCf7HcJly8Rgl6nLd5wkbxbBC8%2FLCmrfOdPJs%2FN7luLQ3PBj9tcX92AEn7ANp7iytkHH4pWl%2BajDDN9ZLsB1E%2FTcWB9SkbbDXCo2H%2BXz603mSfLoAvvCIa3C2%2Bs2fGZAGhViIeaeVB3bG62paEKlBfUqxrapJ1TxVo%2BwK%2BtP4pHFZSjyab89xCHFHDF8fYNfB3Xri4l7QgyoaX3DuVNrETMjmMw3%2FvNxAY6pgF5sBUkV%2FGK9erJ37EkKJO%2BcQqGnfGPi6%2FEOLV32KZzjj3GI7SVr5UrjtPOjQ0vL7B815t14O6gfSNhu0cDU6woPQR24M8Y5hrV7kWZwNy%2FauqsNtzMgHtfDM3fufQGsKAzf025NqxItbexeg4l9ahnEuEl%2FUQmw0N7%2BQKVvABoboTV5oqdTbCbIsd2ML0XYlqD2CWskjKPIwCErV5ZxD2rRL%2Ft1cwA&X-Amz-Signature=e9951f7334e57990f1ed7c9d3cf686e3725b78e068b2b693a37f1a27f5ea13f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JA3EPVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDOc44gViMjTtfDkFcIFawhlyqvyDZKjGVQBuO7nr9TmAiAKyj1sWvsIearNL04XE7BfxW3kQK54JUrSYLQs%2BpkwSir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMX99Zpp0sLi3%2BlhfTKtwDnoV1RoPLlPB2M%2F%2BhbOiGI4tTA1oU5rsPMxCrLlMeEuG4Kn1BzG%2FVKTJZZcFa9inajpWZb%2BdoGkEP9KW922kj6zdetXdcfkxrat%2FrJe9n4z79%2Fn%2BD8aHpNEvmHKQfNJhGnSu85WfJqyo5JVARwaC7nIbJjodkj%2BNFqns1UuI7uOKzHFZplnfcGknMs5ykJn6Mwam0lAb8UvclEIRASi09sXvhGPTg7oSgBA0SjvpvRtJEFPmMc8gp7wjUWwi5hdWq7BQ0vCyNKsj6pDCvh2ujsGzZ5kpb%2FCMPFRx79KrHA2UV5Gg7G9zOu15AD0%2Bd7t80NFSXR4iCX4y2ebOSQSnoX8sEgjEjkkPtfbZJzCgs1mPn1UTfqggTKa3LBZ%2F0WslVX4jV%2B87WCDE4X2%2BZAZQZv7XewOwvhhj7bKCf7HcJly8Rgl6nLd5wkbxbBC8%2FLCmrfOdPJs%2FN7luLQ3PBj9tcX92AEn7ANp7iytkHH4pWl%2BajDDN9ZLsB1E%2FTcWB9SkbbDXCo2H%2BXz603mSfLoAvvCIa3C2%2Bs2fGZAGhViIeaeVB3bG62paEKlBfUqxrapJ1TxVo%2BwK%2BtP4pHFZSjyab89xCHFHDF8fYNfB3Xri4l7QgyoaX3DuVNrETMjmMw3%2FvNxAY6pgF5sBUkV%2FGK9erJ37EkKJO%2BcQqGnfGPi6%2FEOLV32KZzjj3GI7SVr5UrjtPOjQ0vL7B815t14O6gfSNhu0cDU6woPQR24M8Y5hrV7kWZwNy%2FauqsNtzMgHtfDM3fufQGsKAzf025NqxItbexeg4l9ahnEuEl%2FUQmw0N7%2BQKVvABoboTV5oqdTbCbIsd2ML0XYlqD2CWskjKPIwCErV5ZxD2rRL%2Ft1cwA&X-Amz-Signature=f5c6082958de1e3b4e3047e9ff24190a34de386b5d6a755cd5f6c18b920015cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
