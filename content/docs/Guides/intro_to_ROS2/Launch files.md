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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62POSFY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCBB%2F9mhMxYUKZg0cZWEaFW5i%2F9ME6iy1%2BYNkqmrcX8YgIgCevb%2FIEiluY%2BV30YWLOt6lh%2B8BqXwyvn9OzhgT2cOb0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPNO%2FhP%2FuccDIu6KZircA3KYgWFeYlwCekEN00cwWHYJJRkijKEMGZFskLovqXLN%2FHgFZe0ZObYMLGp0D4lGLslzLMMtHZKO2Ke3b9PNVsnESNqpxxP0aIzVbpg%2FezTR96fMhgvH9zOKjWMBNhhAGta%2FYHKSR%2F5l3ur9sjnwoczE4jbUG726phn392NuwdB497Voe21hSw2nJwdzjOVrS%2F9KIoscVOqOj71aGOVjITJxlS9maLch6ihxdXjZtG%2BsWaZvrbTlapxryvQmqkywMPzwPiSM594QKHedpE4kt0Hqq%2FrdD%2BiXZrD6dNiww6DRcV08ayh064yHDyiz%2Bd5FTZlaRlVvRbkaoKBITDmwSg9MC4qVidNqtxCXECv%2FdDrQlhe2ZGs9a3LsplBT%2BOr7zCFWeDRUmTsYVn1vFcySf7r6sp8vByPb6CRsuD%2FY9pAECMxYyah52HcJMfUAbKcfDFff3GLDjSUtXcpvW14cILqPOaPNsJDWEw9%2BnY5fwwGDVFPjnrZtfAediB6lyCJsuR3lJkumskOr6xAiioz6opnZPJDEBrJY4y4dS8RYP3awLAWkbOnlrzYwYR5g%2BTHhw1mNVTzFsvduQNSny0q35A2KH6JgW1pOlVObd3BTrf84o4nnypzHL3aJoo99MOi8%2Bb0GOqUBVUDa%2FtoG3IhAL5Eu9K2RK%2BRb6NIRa2MeiNZDPrAk2CP6CLKeLL1EGXYZJ2D0UEL5pEyLqaNaf8zEmKL1swW9Gm6YaJ7fPrCdJEgq46zQ22VmCjT28HnZQjTwrPLOGVQkE5H8swF47SmFw3oVki0Z13uSDwXZIge6MeonzQmklj0ei9WZI4wZpB5JAyjXOpTHofBw7h33xKBiKiniaANnwPe1yn5D&X-Amz-Signature=ffb6a4856c8747bc59f4c78e7878f75509df24d559f5e7664262578b098ffe83&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62POSFY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCBB%2F9mhMxYUKZg0cZWEaFW5i%2F9ME6iy1%2BYNkqmrcX8YgIgCevb%2FIEiluY%2BV30YWLOt6lh%2B8BqXwyvn9OzhgT2cOb0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPNO%2FhP%2FuccDIu6KZircA3KYgWFeYlwCekEN00cwWHYJJRkijKEMGZFskLovqXLN%2FHgFZe0ZObYMLGp0D4lGLslzLMMtHZKO2Ke3b9PNVsnESNqpxxP0aIzVbpg%2FezTR96fMhgvH9zOKjWMBNhhAGta%2FYHKSR%2F5l3ur9sjnwoczE4jbUG726phn392NuwdB497Voe21hSw2nJwdzjOVrS%2F9KIoscVOqOj71aGOVjITJxlS9maLch6ihxdXjZtG%2BsWaZvrbTlapxryvQmqkywMPzwPiSM594QKHedpE4kt0Hqq%2FrdD%2BiXZrD6dNiww6DRcV08ayh064yHDyiz%2Bd5FTZlaRlVvRbkaoKBITDmwSg9MC4qVidNqtxCXECv%2FdDrQlhe2ZGs9a3LsplBT%2BOr7zCFWeDRUmTsYVn1vFcySf7r6sp8vByPb6CRsuD%2FY9pAECMxYyah52HcJMfUAbKcfDFff3GLDjSUtXcpvW14cILqPOaPNsJDWEw9%2BnY5fwwGDVFPjnrZtfAediB6lyCJsuR3lJkumskOr6xAiioz6opnZPJDEBrJY4y4dS8RYP3awLAWkbOnlrzYwYR5g%2BTHhw1mNVTzFsvduQNSny0q35A2KH6JgW1pOlVObd3BTrf84o4nnypzHL3aJoo99MOi8%2Bb0GOqUBVUDa%2FtoG3IhAL5Eu9K2RK%2BRb6NIRa2MeiNZDPrAk2CP6CLKeLL1EGXYZJ2D0UEL5pEyLqaNaf8zEmKL1swW9Gm6YaJ7fPrCdJEgq46zQ22VmCjT28HnZQjTwrPLOGVQkE5H8swF47SmFw3oVki0Z13uSDwXZIge6MeonzQmklj0ei9WZI4wZpB5JAyjXOpTHofBw7h33xKBiKiniaANnwPe1yn5D&X-Amz-Signature=653151b8d43691fc0f7383be621428ee5da4ad50d7c566c587e666ad2afa87ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V62POSFY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCBB%2F9mhMxYUKZg0cZWEaFW5i%2F9ME6iy1%2BYNkqmrcX8YgIgCevb%2FIEiluY%2BV30YWLOt6lh%2B8BqXwyvn9OzhgT2cOb0q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPNO%2FhP%2FuccDIu6KZircA3KYgWFeYlwCekEN00cwWHYJJRkijKEMGZFskLovqXLN%2FHgFZe0ZObYMLGp0D4lGLslzLMMtHZKO2Ke3b9PNVsnESNqpxxP0aIzVbpg%2FezTR96fMhgvH9zOKjWMBNhhAGta%2FYHKSR%2F5l3ur9sjnwoczE4jbUG726phn392NuwdB497Voe21hSw2nJwdzjOVrS%2F9KIoscVOqOj71aGOVjITJxlS9maLch6ihxdXjZtG%2BsWaZvrbTlapxryvQmqkywMPzwPiSM594QKHedpE4kt0Hqq%2FrdD%2BiXZrD6dNiww6DRcV08ayh064yHDyiz%2Bd5FTZlaRlVvRbkaoKBITDmwSg9MC4qVidNqtxCXECv%2FdDrQlhe2ZGs9a3LsplBT%2BOr7zCFWeDRUmTsYVn1vFcySf7r6sp8vByPb6CRsuD%2FY9pAECMxYyah52HcJMfUAbKcfDFff3GLDjSUtXcpvW14cILqPOaPNsJDWEw9%2BnY5fwwGDVFPjnrZtfAediB6lyCJsuR3lJkumskOr6xAiioz6opnZPJDEBrJY4y4dS8RYP3awLAWkbOnlrzYwYR5g%2BTHhw1mNVTzFsvduQNSny0q35A2KH6JgW1pOlVObd3BTrf84o4nnypzHL3aJoo99MOi8%2Bb0GOqUBVUDa%2FtoG3IhAL5Eu9K2RK%2BRb6NIRa2MeiNZDPrAk2CP6CLKeLL1EGXYZJ2D0UEL5pEyLqaNaf8zEmKL1swW9Gm6YaJ7fPrCdJEgq46zQ22VmCjT28HnZQjTwrPLOGVQkE5H8swF47SmFw3oVki0Z13uSDwXZIge6MeonzQmklj0ei9WZI4wZpB5JAyjXOpTHofBw7h33xKBiKiniaANnwPe1yn5D&X-Amz-Signature=170a2b024a25dc333fb6f8425a9326dbce20dce20e3b0829dc6802e2700bc91c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
