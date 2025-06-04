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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMAPSOR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCLQ%2BpEnV7lZU4cNYSRCjbALymAlbeP5PnaXEV6NNzF3QIhANQCIdlYYRhnFN5cPLwKpj9zEoJbFHH7vrjV493tMDPDKv8DCCUQABoMNjM3NDIzMTgzODA1IgwL88lkusbVzmOwNE8q3AMGc3JZKMnbKzE%2BBe5iGyM2KQpxQGjHrHyjAI3LSv7FmQWdlsLjD7hLEGVoC5JyBEm7q0EZOu54BLQHnA0aduhFptjkesT3muZID6Dg51aG2P64A6zz06J51vRvJDQ3Jhgdf%2BCoscQ%2BXdyv%2FgqOq7wP3IyeqIzTqQqXmqO1P0vYmp6hbltdszZIloEHIV4J4%2BRSxFs0t0DwnGyTrTwzOt01AHAAyrmrAEiTRfqREgQyWGvBfuY5cxhc6zlCNq45qsSymyLhT6oEOEXgwHGqGFOK6RDM1Yhtzm4FnBJPtkIByjEMSE0lt42L5Qqhxtjlm2EPkxu62WHsohLao%2BUEWtWDpgyLFfPmaFb5TdhO3hH1mhs6%2FVQyG6xCsYpJ40KxySVSNANivichEHvMOwoNBhjl240E8Ot0pZtOj4f9ReENRdY8%2Bk0pUU9vBME57pVrpauRsl8x5bSfIQeIL6QA9ON%2BVIPunHV5V9gvZuhtzYqucUwamwXAQOrpXo1vGFxUm4lfyKmMITKUWtB%2B0OiuOOE%2B5BhUgJKRCa6k2Msq835Y3OdoFH8CuwxmJskwGxqZRmKfJp52l9aKYyYnF0UgLXecuSiDD%2FLjHDyH6qJ5pGM6rbMsFTUFkKobwxW%2BtzDliP%2FBBjqkAe9sv0jiIPxhOqgPUpJSkW0D%2F9Bmoj9JjfBjYn1lX5R3isPQN6%2BXFL7%2BkVf%2FkuhFfaBQVmLve%2FhuLGcJfMT%2Fa0YF2mrLWtezF6w1mAiAgk3vx675B9QBOSVCEG%2FZIoivFQwO3WzCAxb0CaEl%2FpU573VQF%2FJb%2FHlj4F70UJDeVAStgjzGnbmarY1CYkZZJhOenVktRWHmnx9LOMDOFPRpJ7GIski7&X-Amz-Signature=a53a9818eb3010235424fe3054b8549466e9771f0030bc4b3d08d93fbfd3fa81&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMAPSOR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCLQ%2BpEnV7lZU4cNYSRCjbALymAlbeP5PnaXEV6NNzF3QIhANQCIdlYYRhnFN5cPLwKpj9zEoJbFHH7vrjV493tMDPDKv8DCCUQABoMNjM3NDIzMTgzODA1IgwL88lkusbVzmOwNE8q3AMGc3JZKMnbKzE%2BBe5iGyM2KQpxQGjHrHyjAI3LSv7FmQWdlsLjD7hLEGVoC5JyBEm7q0EZOu54BLQHnA0aduhFptjkesT3muZID6Dg51aG2P64A6zz06J51vRvJDQ3Jhgdf%2BCoscQ%2BXdyv%2FgqOq7wP3IyeqIzTqQqXmqO1P0vYmp6hbltdszZIloEHIV4J4%2BRSxFs0t0DwnGyTrTwzOt01AHAAyrmrAEiTRfqREgQyWGvBfuY5cxhc6zlCNq45qsSymyLhT6oEOEXgwHGqGFOK6RDM1Yhtzm4FnBJPtkIByjEMSE0lt42L5Qqhxtjlm2EPkxu62WHsohLao%2BUEWtWDpgyLFfPmaFb5TdhO3hH1mhs6%2FVQyG6xCsYpJ40KxySVSNANivichEHvMOwoNBhjl240E8Ot0pZtOj4f9ReENRdY8%2Bk0pUU9vBME57pVrpauRsl8x5bSfIQeIL6QA9ON%2BVIPunHV5V9gvZuhtzYqucUwamwXAQOrpXo1vGFxUm4lfyKmMITKUWtB%2B0OiuOOE%2B5BhUgJKRCa6k2Msq835Y3OdoFH8CuwxmJskwGxqZRmKfJp52l9aKYyYnF0UgLXecuSiDD%2FLjHDyH6qJ5pGM6rbMsFTUFkKobwxW%2BtzDliP%2FBBjqkAe9sv0jiIPxhOqgPUpJSkW0D%2F9Bmoj9JjfBjYn1lX5R3isPQN6%2BXFL7%2BkVf%2FkuhFfaBQVmLve%2FhuLGcJfMT%2Fa0YF2mrLWtezF6w1mAiAgk3vx675B9QBOSVCEG%2FZIoivFQwO3WzCAxb0CaEl%2FpU573VQF%2FJb%2FHlj4F70UJDeVAStgjzGnbmarY1CYkZZJhOenVktRWHmnx9LOMDOFPRpJ7GIski7&X-Amz-Signature=34ddddd0e52391100f54829aae77ff6b4e794b2a1763f4335f4f8bd583ffe836&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMAPSOR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCLQ%2BpEnV7lZU4cNYSRCjbALymAlbeP5PnaXEV6NNzF3QIhANQCIdlYYRhnFN5cPLwKpj9zEoJbFHH7vrjV493tMDPDKv8DCCUQABoMNjM3NDIzMTgzODA1IgwL88lkusbVzmOwNE8q3AMGc3JZKMnbKzE%2BBe5iGyM2KQpxQGjHrHyjAI3LSv7FmQWdlsLjD7hLEGVoC5JyBEm7q0EZOu54BLQHnA0aduhFptjkesT3muZID6Dg51aG2P64A6zz06J51vRvJDQ3Jhgdf%2BCoscQ%2BXdyv%2FgqOq7wP3IyeqIzTqQqXmqO1P0vYmp6hbltdszZIloEHIV4J4%2BRSxFs0t0DwnGyTrTwzOt01AHAAyrmrAEiTRfqREgQyWGvBfuY5cxhc6zlCNq45qsSymyLhT6oEOEXgwHGqGFOK6RDM1Yhtzm4FnBJPtkIByjEMSE0lt42L5Qqhxtjlm2EPkxu62WHsohLao%2BUEWtWDpgyLFfPmaFb5TdhO3hH1mhs6%2FVQyG6xCsYpJ40KxySVSNANivichEHvMOwoNBhjl240E8Ot0pZtOj4f9ReENRdY8%2Bk0pUU9vBME57pVrpauRsl8x5bSfIQeIL6QA9ON%2BVIPunHV5V9gvZuhtzYqucUwamwXAQOrpXo1vGFxUm4lfyKmMITKUWtB%2B0OiuOOE%2B5BhUgJKRCa6k2Msq835Y3OdoFH8CuwxmJskwGxqZRmKfJp52l9aKYyYnF0UgLXecuSiDD%2FLjHDyH6qJ5pGM6rbMsFTUFkKobwxW%2BtzDliP%2FBBjqkAe9sv0jiIPxhOqgPUpJSkW0D%2F9Bmoj9JjfBjYn1lX5R3isPQN6%2BXFL7%2BkVf%2FkuhFfaBQVmLve%2FhuLGcJfMT%2Fa0YF2mrLWtezF6w1mAiAgk3vx675B9QBOSVCEG%2FZIoivFQwO3WzCAxb0CaEl%2FpU573VQF%2FJb%2FHlj4F70UJDeVAStgjzGnbmarY1CYkZZJhOenVktRWHmnx9LOMDOFPRpJ7GIski7&X-Amz-Signature=2bb05f5f3f184f217679ea4fe04dd018bde82e082a26ca1311a3a51a55266aad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
