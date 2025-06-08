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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCYF7A3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH124fzMVkVLyKy7NQLugBcz8nNglA9Nr%2Fx%2FxAr05WlgIhAKPB7oWKESmIF07iAy59CNKawaIifsrTFC36WayUO9mlKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwBgt1hx4ZX%2FX2Z5Mq3AMgWjPDDUwhybIgYgqdOctUplO12An34cIO1FCDUmbXpt0aTnzSBko12ayFJdv0%2FGWuWxkwSGVhYJHrZwRXNi0Le%2BBU40ogMt4EXTCGA7TSiVSWm%2BroYC0xBmMYSz%2B0mYfJPsZ5%2F3p2nvgL6cR2WD5%2FCGSmYtI9TsYIvj2DMbXjzcd6mmRhmN4T3dJoKz8wOPiyNXfHzcZtV3XWU3%2Bm4hNTaTZFMmYDUv55HLI38n6P3eAZgKGXXORIpCxrvAaVD7Xw%2FkbQFr%2FSfFTTgoKvQE4dJahwyZac8BtpzUfgPI6pXpIRDsGq5Gqmeq3yTKeCS6fKSOgW8THoZXwbMdR4oKxlo85jTRxM6ry1PUu7nNrI46N4dgZYtSbVSrp5Jcq9oj5z4V%2F1IwSKeDVwJTw99I7wTT%2Be4zXd2JGAjbOtWPNXIQ3bHFlQJbM5KA9ZwhXnjmn94RHLHTU2Y0OweRin3Y6qQgn4kJIJ7o2WbBdD3bQPVSExotHuKPPOsGepATHa1LiVCae%2BJLixrDG%2B245HNmGuN%2BFVzf2R7fgD5bfPtoJfgJtCFOJfLMQzNgAtF1CweFif4wHAfTRQbHl7EHDB2ayDgLsTYPXfDd0m%2FrCN0FiczJdSVMD429YINxYWZTD3spbCBjqkAetzX%2FEqkZ2FWkx1grBr1jjFPB1pCsguPcsLZ%2FduNBKcHYiaqVPXWGwVSx1539sIJ7keoWu5%2BwRvb75Jb65ROiuhl%2FWljUxTSu5dwOR8ELXvG1W5S8QNN61grqet5Kn%2B1nTkWr8SOD0ub9ppVyfyL20Gm0VLO8KpL2R%2FY9ahq1nxZ6v3UEWE3f%2BNr%2FY6ZFfX%2F53zVR6pjQ2EltPMw2ymww79cYmF&X-Amz-Signature=4bdcc9f499d7165a81cb119ef77e447e39d8628a230a5975d313a25240727710&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCYF7A3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH124fzMVkVLyKy7NQLugBcz8nNglA9Nr%2Fx%2FxAr05WlgIhAKPB7oWKESmIF07iAy59CNKawaIifsrTFC36WayUO9mlKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwBgt1hx4ZX%2FX2Z5Mq3AMgWjPDDUwhybIgYgqdOctUplO12An34cIO1FCDUmbXpt0aTnzSBko12ayFJdv0%2FGWuWxkwSGVhYJHrZwRXNi0Le%2BBU40ogMt4EXTCGA7TSiVSWm%2BroYC0xBmMYSz%2B0mYfJPsZ5%2F3p2nvgL6cR2WD5%2FCGSmYtI9TsYIvj2DMbXjzcd6mmRhmN4T3dJoKz8wOPiyNXfHzcZtV3XWU3%2Bm4hNTaTZFMmYDUv55HLI38n6P3eAZgKGXXORIpCxrvAaVD7Xw%2FkbQFr%2FSfFTTgoKvQE4dJahwyZac8BtpzUfgPI6pXpIRDsGq5Gqmeq3yTKeCS6fKSOgW8THoZXwbMdR4oKxlo85jTRxM6ry1PUu7nNrI46N4dgZYtSbVSrp5Jcq9oj5z4V%2F1IwSKeDVwJTw99I7wTT%2Be4zXd2JGAjbOtWPNXIQ3bHFlQJbM5KA9ZwhXnjmn94RHLHTU2Y0OweRin3Y6qQgn4kJIJ7o2WbBdD3bQPVSExotHuKPPOsGepATHa1LiVCae%2BJLixrDG%2B245HNmGuN%2BFVzf2R7fgD5bfPtoJfgJtCFOJfLMQzNgAtF1CweFif4wHAfTRQbHl7EHDB2ayDgLsTYPXfDd0m%2FrCN0FiczJdSVMD429YINxYWZTD3spbCBjqkAetzX%2FEqkZ2FWkx1grBr1jjFPB1pCsguPcsLZ%2FduNBKcHYiaqVPXWGwVSx1539sIJ7keoWu5%2BwRvb75Jb65ROiuhl%2FWljUxTSu5dwOR8ELXvG1W5S8QNN61grqet5Kn%2B1nTkWr8SOD0ub9ppVyfyL20Gm0VLO8KpL2R%2FY9ahq1nxZ6v3UEWE3f%2BNr%2FY6ZFfX%2F53zVR6pjQ2EltPMw2ymww79cYmF&X-Amz-Signature=8ce82798b64c016f34fd2ac052a17ac7017770f4f80a3fa5665783cbe58487b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NCYF7A3%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH124fzMVkVLyKy7NQLugBcz8nNglA9Nr%2Fx%2FxAr05WlgIhAKPB7oWKESmIF07iAy59CNKawaIifsrTFC36WayUO9mlKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwBgt1hx4ZX%2FX2Z5Mq3AMgWjPDDUwhybIgYgqdOctUplO12An34cIO1FCDUmbXpt0aTnzSBko12ayFJdv0%2FGWuWxkwSGVhYJHrZwRXNi0Le%2BBU40ogMt4EXTCGA7TSiVSWm%2BroYC0xBmMYSz%2B0mYfJPsZ5%2F3p2nvgL6cR2WD5%2FCGSmYtI9TsYIvj2DMbXjzcd6mmRhmN4T3dJoKz8wOPiyNXfHzcZtV3XWU3%2Bm4hNTaTZFMmYDUv55HLI38n6P3eAZgKGXXORIpCxrvAaVD7Xw%2FkbQFr%2FSfFTTgoKvQE4dJahwyZac8BtpzUfgPI6pXpIRDsGq5Gqmeq3yTKeCS6fKSOgW8THoZXwbMdR4oKxlo85jTRxM6ry1PUu7nNrI46N4dgZYtSbVSrp5Jcq9oj5z4V%2F1IwSKeDVwJTw99I7wTT%2Be4zXd2JGAjbOtWPNXIQ3bHFlQJbM5KA9ZwhXnjmn94RHLHTU2Y0OweRin3Y6qQgn4kJIJ7o2WbBdD3bQPVSExotHuKPPOsGepATHa1LiVCae%2BJLixrDG%2B245HNmGuN%2BFVzf2R7fgD5bfPtoJfgJtCFOJfLMQzNgAtF1CweFif4wHAfTRQbHl7EHDB2ayDgLsTYPXfDd0m%2FrCN0FiczJdSVMD429YINxYWZTD3spbCBjqkAetzX%2FEqkZ2FWkx1grBr1jjFPB1pCsguPcsLZ%2FduNBKcHYiaqVPXWGwVSx1539sIJ7keoWu5%2BwRvb75Jb65ROiuhl%2FWljUxTSu5dwOR8ELXvG1W5S8QNN61grqet5Kn%2B1nTkWr8SOD0ub9ppVyfyL20Gm0VLO8KpL2R%2FY9ahq1nxZ6v3UEWE3f%2BNr%2FY6ZFfX%2F53zVR6pjQ2EltPMw2ymww79cYmF&X-Amz-Signature=4e9c0fb2c9938a9379cfdd07014fdce9d36bfe4130688437859d93372b245920&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
