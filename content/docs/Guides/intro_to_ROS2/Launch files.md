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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROR5D5ZJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAom1XjUfuDVqxXTBic%2FBx9N4CO%2BWplWJ7%2BJft1sdgWSAiEAyvrYuexur11hpyjTApoABhwmejdYdp3dcOCGbZ7kpDEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG52%2B4%2FyCJSubkMweSrcAwApe7y5iSWVis4YFP2mfW4wQufEORdVIY6o7LPhnrG4GLevuL7lXFSLmtLC3see%2BYmrzIqZn66H%2FHLE9oUKWFubHP%2BcAPiqiJHMxhW%2BTdO7oVbljbpDoJPWsKKx%2Fk6HKdt9kPvmhvgStSYuXKQfqMWokOlgZmcOedePNFxD31nRlkBTpYP6aGOGsRy3qLR46CbdZV0nMCdGGy7f%2FITrmLwwHptFN23ft13hYKg0TQMsVKf7jk8%2FFX%2Bjeog6Pmlt6QC64oh9h28KKnGrwz7R7OyrdmKPfb%2BN%2FiaLePX0xbjDdf7uqlvfgeXeCgiV%2BM2nzbQjOXF7tkt5ZLHk3PuxNR1D9QTneRGu%2FE5MH6z2Chk21ZVJ%2FgYjHRLEVvDKfRYdFYFNncBSnkn5Y5Oqi586LgX31TfnF6vWaNsTqPtsEHaaqDadylJSZae84S3g87KzV%2BtxKq1VKCuTbb%2B7hmUluiCl31KkZezVuzM%2Fhx01dK4m2SE%2FArpnM3Ac9wJwW9egirqv%2BNM1VvenYt1RB4qTcBi%2B6gvbPl%2FuK1zjQFSB22abAEsbXNLi2wQBtyMukgSWjNPu0oCOuGUX793GPlXuyF8PHC%2FoMUppGGQ7QKVoC%2FRlYEXPQZnqDLdx%2BUF0MOCAx74GOqUBsMhCh9ZC1%2FHEYr4Z1bGUZq48pEJMHjk7nh4ZmRMNs6wU%2F0%2FHFDLMK86eji%2FJagrt4ZYsyrKVYW%2BX5%2B9X9h5Cnxf3q5%2B9kpT%2FEOAp7Rf%2FJq7f7ITY7Y8nDWwt8lidXjd1%2FNhLbHayoWEYUgUSHRI27qa25e6V8yggnRMCQdmcPp74B595%2FMqH3hkQWUAkB1v7ff0OClPHmcOm6eaa%2F9npqwBjHYbd&X-Amz-Signature=ac209f416f6ced752787d386b33d8b1f2ea4201353d21aa792bcb7fd5a8e3e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROR5D5ZJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAom1XjUfuDVqxXTBic%2FBx9N4CO%2BWplWJ7%2BJft1sdgWSAiEAyvrYuexur11hpyjTApoABhwmejdYdp3dcOCGbZ7kpDEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG52%2B4%2FyCJSubkMweSrcAwApe7y5iSWVis4YFP2mfW4wQufEORdVIY6o7LPhnrG4GLevuL7lXFSLmtLC3see%2BYmrzIqZn66H%2FHLE9oUKWFubHP%2BcAPiqiJHMxhW%2BTdO7oVbljbpDoJPWsKKx%2Fk6HKdt9kPvmhvgStSYuXKQfqMWokOlgZmcOedePNFxD31nRlkBTpYP6aGOGsRy3qLR46CbdZV0nMCdGGy7f%2FITrmLwwHptFN23ft13hYKg0TQMsVKf7jk8%2FFX%2Bjeog6Pmlt6QC64oh9h28KKnGrwz7R7OyrdmKPfb%2BN%2FiaLePX0xbjDdf7uqlvfgeXeCgiV%2BM2nzbQjOXF7tkt5ZLHk3PuxNR1D9QTneRGu%2FE5MH6z2Chk21ZVJ%2FgYjHRLEVvDKfRYdFYFNncBSnkn5Y5Oqi586LgX31TfnF6vWaNsTqPtsEHaaqDadylJSZae84S3g87KzV%2BtxKq1VKCuTbb%2B7hmUluiCl31KkZezVuzM%2Fhx01dK4m2SE%2FArpnM3Ac9wJwW9egirqv%2BNM1VvenYt1RB4qTcBi%2B6gvbPl%2FuK1zjQFSB22abAEsbXNLi2wQBtyMukgSWjNPu0oCOuGUX793GPlXuyF8PHC%2FoMUppGGQ7QKVoC%2FRlYEXPQZnqDLdx%2BUF0MOCAx74GOqUBsMhCh9ZC1%2FHEYr4Z1bGUZq48pEJMHjk7nh4ZmRMNs6wU%2F0%2FHFDLMK86eji%2FJagrt4ZYsyrKVYW%2BX5%2B9X9h5Cnxf3q5%2B9kpT%2FEOAp7Rf%2FJq7f7ITY7Y8nDWwt8lidXjd1%2FNhLbHayoWEYUgUSHRI27qa25e6V8yggnRMCQdmcPp74B595%2FMqH3hkQWUAkB1v7ff0OClPHmcOm6eaa%2F9npqwBjHYbd&X-Amz-Signature=12f904783ec2dd6ce3be87b2d1ccb54f9331dc7c92e9a37861928e6f4fe1e7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROR5D5ZJ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIAom1XjUfuDVqxXTBic%2FBx9N4CO%2BWplWJ7%2BJft1sdgWSAiEAyvrYuexur11hpyjTApoABhwmejdYdp3dcOCGbZ7kpDEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG52%2B4%2FyCJSubkMweSrcAwApe7y5iSWVis4YFP2mfW4wQufEORdVIY6o7LPhnrG4GLevuL7lXFSLmtLC3see%2BYmrzIqZn66H%2FHLE9oUKWFubHP%2BcAPiqiJHMxhW%2BTdO7oVbljbpDoJPWsKKx%2Fk6HKdt9kPvmhvgStSYuXKQfqMWokOlgZmcOedePNFxD31nRlkBTpYP6aGOGsRy3qLR46CbdZV0nMCdGGy7f%2FITrmLwwHptFN23ft13hYKg0TQMsVKf7jk8%2FFX%2Bjeog6Pmlt6QC64oh9h28KKnGrwz7R7OyrdmKPfb%2BN%2FiaLePX0xbjDdf7uqlvfgeXeCgiV%2BM2nzbQjOXF7tkt5ZLHk3PuxNR1D9QTneRGu%2FE5MH6z2Chk21ZVJ%2FgYjHRLEVvDKfRYdFYFNncBSnkn5Y5Oqi586LgX31TfnF6vWaNsTqPtsEHaaqDadylJSZae84S3g87KzV%2BtxKq1VKCuTbb%2B7hmUluiCl31KkZezVuzM%2Fhx01dK4m2SE%2FArpnM3Ac9wJwW9egirqv%2BNM1VvenYt1RB4qTcBi%2B6gvbPl%2FuK1zjQFSB22abAEsbXNLi2wQBtyMukgSWjNPu0oCOuGUX793GPlXuyF8PHC%2FoMUppGGQ7QKVoC%2FRlYEXPQZnqDLdx%2BUF0MOCAx74GOqUBsMhCh9ZC1%2FHEYr4Z1bGUZq48pEJMHjk7nh4ZmRMNs6wU%2F0%2FHFDLMK86eji%2FJagrt4ZYsyrKVYW%2BX5%2B9X9h5Cnxf3q5%2B9kpT%2FEOAp7Rf%2FJq7f7ITY7Y8nDWwt8lidXjd1%2FNhLbHayoWEYUgUSHRI27qa25e6V8yggnRMCQdmcPp74B595%2FMqH3hkQWUAkB1v7ff0OClPHmcOm6eaa%2F9npqwBjHYbd&X-Amz-Signature=7a1dc36d0a8ebe4800e71524bb066afc1c266e4e546d8d64c6f515a6874bf60e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
