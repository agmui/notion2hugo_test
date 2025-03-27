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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUJW43T%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwqbg2qEk4ykQ87YXwEtO4NZS3dzzshOXaXcpfiaaKSAiEA4CtmrXMxeW8KdXfPJX9H5sqro6t2J8r72HIQfFI2GaEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLJG3fOwwAntThYP5yrcA3h4DDSybXLHGPZeeWtaaUhgfaPu0YTaQXweKYswS0TiZHeXYiaUR7WFBqLIt%2F8uLPEyM%2B96PMcLL%2BrCuWNKY8Gik5oaDv%2BP1LXKr%2FV91KAqbAVh1ALmVxNZpHeYkWYvNMgJpOoAftiyERMkJtib37KmxW2u672YeJmokCq9LufPjuZybplPa1gfEwFVd03f5tDkDXpYjsDsEWyd6U9MI1S9Vhl2YKo9AC9tWGbriXDf%2FTamHsHNlW8et8vKIETZ4GE9eb9kA3LypLGwS%2Fv9zRhlbifB0nDY39g9zshe5RXNytSClgghV64b9QRbOyuwmEQzF%2B2V0xRJHbZIcs%2BNkB7RMHnTBdks7hdSpHdQkDGgFlgXqiZtc8rqiFcCsiN%2F%2FOpLvgrgFBCmU%2FQxE%2BXwS1nicmx1atp6DBpU8A9nnj4xDUS9AAbO3VhhMASb6U4aTmiugSOPMhae1FAQf3C7UEfs%2FAOpCHAQlISoB0eDmfjvv7zDxs6OuNxn4VTgL7akP9WKaa3I7hAN4yL2luMlpJyzGf%2FnfmQWx%2FW1kxH3ZAl2c23FeOT4FTXIXMVLdIzG1gl2T49mXGvuN6W6ea4sl8zIzUugr4wmH1ygj%2BnAmsINrB8%2BPw4G%2FJcPMWQYMNCjlr8GOqUBvsYOm%2BhxDeC85Dd30ZXoGSPSJ9cAM4L92gjFvAG5kQFPCtRnesin3%2FHZqdMExn%2BXOn1EMgNRnwTy4S%2BNzWLJOVNICdblQ0g1E5pWEHScCa6re%2BUYwDjdAD%2FDH2CcZKLBQzEMpQud4moepnRQGr9PmqgJHy2ovd9Fa%2FUD6jdhRmY%2Boal2FkLAwetJ2UZciTD%2FZqEldADQUfl9t2ekx0sB2%2FzaBxZ2&X-Amz-Signature=017b42b0077ed764fb2fa145117e3b93a5f154aa73749a8f6852f7941ded1418&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUJW43T%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwqbg2qEk4ykQ87YXwEtO4NZS3dzzshOXaXcpfiaaKSAiEA4CtmrXMxeW8KdXfPJX9H5sqro6t2J8r72HIQfFI2GaEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLJG3fOwwAntThYP5yrcA3h4DDSybXLHGPZeeWtaaUhgfaPu0YTaQXweKYswS0TiZHeXYiaUR7WFBqLIt%2F8uLPEyM%2B96PMcLL%2BrCuWNKY8Gik5oaDv%2BP1LXKr%2FV91KAqbAVh1ALmVxNZpHeYkWYvNMgJpOoAftiyERMkJtib37KmxW2u672YeJmokCq9LufPjuZybplPa1gfEwFVd03f5tDkDXpYjsDsEWyd6U9MI1S9Vhl2YKo9AC9tWGbriXDf%2FTamHsHNlW8et8vKIETZ4GE9eb9kA3LypLGwS%2Fv9zRhlbifB0nDY39g9zshe5RXNytSClgghV64b9QRbOyuwmEQzF%2B2V0xRJHbZIcs%2BNkB7RMHnTBdks7hdSpHdQkDGgFlgXqiZtc8rqiFcCsiN%2F%2FOpLvgrgFBCmU%2FQxE%2BXwS1nicmx1atp6DBpU8A9nnj4xDUS9AAbO3VhhMASb6U4aTmiugSOPMhae1FAQf3C7UEfs%2FAOpCHAQlISoB0eDmfjvv7zDxs6OuNxn4VTgL7akP9WKaa3I7hAN4yL2luMlpJyzGf%2FnfmQWx%2FW1kxH3ZAl2c23FeOT4FTXIXMVLdIzG1gl2T49mXGvuN6W6ea4sl8zIzUugr4wmH1ygj%2BnAmsINrB8%2BPw4G%2FJcPMWQYMNCjlr8GOqUBvsYOm%2BhxDeC85Dd30ZXoGSPSJ9cAM4L92gjFvAG5kQFPCtRnesin3%2FHZqdMExn%2BXOn1EMgNRnwTy4S%2BNzWLJOVNICdblQ0g1E5pWEHScCa6re%2BUYwDjdAD%2FDH2CcZKLBQzEMpQud4moepnRQGr9PmqgJHy2ovd9Fa%2FUD6jdhRmY%2Boal2FkLAwetJ2UZciTD%2FZqEldADQUfl9t2ekx0sB2%2FzaBxZ2&X-Amz-Signature=94b195069c06a25cbdf7661fd888252ad052e29294f6bc14f6864b653f1bd493&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUJW43T%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwqbg2qEk4ykQ87YXwEtO4NZS3dzzshOXaXcpfiaaKSAiEA4CtmrXMxeW8KdXfPJX9H5sqro6t2J8r72HIQfFI2GaEq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLJG3fOwwAntThYP5yrcA3h4DDSybXLHGPZeeWtaaUhgfaPu0YTaQXweKYswS0TiZHeXYiaUR7WFBqLIt%2F8uLPEyM%2B96PMcLL%2BrCuWNKY8Gik5oaDv%2BP1LXKr%2FV91KAqbAVh1ALmVxNZpHeYkWYvNMgJpOoAftiyERMkJtib37KmxW2u672YeJmokCq9LufPjuZybplPa1gfEwFVd03f5tDkDXpYjsDsEWyd6U9MI1S9Vhl2YKo9AC9tWGbriXDf%2FTamHsHNlW8et8vKIETZ4GE9eb9kA3LypLGwS%2Fv9zRhlbifB0nDY39g9zshe5RXNytSClgghV64b9QRbOyuwmEQzF%2B2V0xRJHbZIcs%2BNkB7RMHnTBdks7hdSpHdQkDGgFlgXqiZtc8rqiFcCsiN%2F%2FOpLvgrgFBCmU%2FQxE%2BXwS1nicmx1atp6DBpU8A9nnj4xDUS9AAbO3VhhMASb6U4aTmiugSOPMhae1FAQf3C7UEfs%2FAOpCHAQlISoB0eDmfjvv7zDxs6OuNxn4VTgL7akP9WKaa3I7hAN4yL2luMlpJyzGf%2FnfmQWx%2FW1kxH3ZAl2c23FeOT4FTXIXMVLdIzG1gl2T49mXGvuN6W6ea4sl8zIzUugr4wmH1ygj%2BnAmsINrB8%2BPw4G%2FJcPMWQYMNCjlr8GOqUBvsYOm%2BhxDeC85Dd30ZXoGSPSJ9cAM4L92gjFvAG5kQFPCtRnesin3%2FHZqdMExn%2BXOn1EMgNRnwTy4S%2BNzWLJOVNICdblQ0g1E5pWEHScCa6re%2BUYwDjdAD%2FDH2CcZKLBQzEMpQud4moepnRQGr9PmqgJHy2ovd9Fa%2FUD6jdhRmY%2Boal2FkLAwetJ2UZciTD%2FZqEldADQUfl9t2ekx0sB2%2FzaBxZ2&X-Amz-Signature=0c4a2d5f1fc3684a990ce408b10a34a23ddb310623085d88c6e43ab2bad49725&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
