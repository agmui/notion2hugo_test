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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GJGC7I%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDqG%2F%2BHSSkCimwHEg0zYsfq0YIMRon0akFq7idugtaVSAIgabL9h3FEF5%2BgB%2Bjc%2BJNF1acM5VnutGpV%2F9FItWcx3zUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMBQB9r%2F95%2FKVRHsYSrcA%2BKC39tJVW1Q%2BhO23Rp94zOcLhP9VPEcSlC53pFyWodG0DHrp9jGGwrEzNf3PnIicaJ%2FNPUXqMG%2BrR1Mr5LWtkbOOt2pcYKrPCIVtmSIMVKUjp4YBJGThnCEyNAdp9H5AOz4uZAT8jt2U61Bzu48LX%2BXr%2F9Q2alUyrNxV95PTJ9e924r2Po4yCYL55XYgK6gyeM77%2BvRCZVI4XldS6uqT7g74xJeZt4JEwkRSmN%2BNdgiZV52v0B9vVFJH5qGERPbJ9QfZ5prXfvYBDkPF93dgIDoVkT%2Bxn3h2mM3IDVNPPe%2BK4gB1BtXL3U6H1xeQ1HjQYuJms%2FRpZyfDOHSUSarEJVRdIwMbG4t0KTCGFEHX9swyKX31%2BLc9qRYox8E7vWHHuxpbGKwl8hyzxAwbhSq9H9xa3Jxyv7FV1pttoXRcELm7bki6cjhf89TR9fJeV6z80s9ooCNelvGXmgWCrwZUSOi25HguBlGoo3PlnQab4fCgELb692few5TA1YkJUcUGmWmh7TOdTxDCZnIxQkB945Cja9Im3c3IdT1xYEnSDLvlSlnxLxUDtQlNQY6KVGQwwLJC2lH8TbIiGNf86GzPP5nm%2FmoS0PnarvnLQuKVCW9i%2FdZ%2BQg4tt7pFRX5MLjmhMIGOqUBrMYJwQSSAXmLK63Kf9qRbxumifjtw2HXiKJy8upCDRT5UuQXGlj%2BS9HsApAOv9sE7Yr7d2h1JfdqKlzjA5UxItWgVDr9lndsgH%2BiuJqAtsuZELTmZ0A9X7QJBDuyic8u%2BfptSqVYlJ3JPNa8BNo7Ef2qcaEd%2FQlVbeoU2EspX9TTkeJqv4QPwM02N%2Fod%2FkgBI53pHepCy16Jk4M%2FKooU%2Bjb6LlPZ&X-Amz-Signature=0f4baece7eb441fe75461ffbf65ffe5853223912796a5ee82e0c0b088b15aa58&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GJGC7I%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDqG%2F%2BHSSkCimwHEg0zYsfq0YIMRon0akFq7idugtaVSAIgabL9h3FEF5%2BgB%2Bjc%2BJNF1acM5VnutGpV%2F9FItWcx3zUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMBQB9r%2F95%2FKVRHsYSrcA%2BKC39tJVW1Q%2BhO23Rp94zOcLhP9VPEcSlC53pFyWodG0DHrp9jGGwrEzNf3PnIicaJ%2FNPUXqMG%2BrR1Mr5LWtkbOOt2pcYKrPCIVtmSIMVKUjp4YBJGThnCEyNAdp9H5AOz4uZAT8jt2U61Bzu48LX%2BXr%2F9Q2alUyrNxV95PTJ9e924r2Po4yCYL55XYgK6gyeM77%2BvRCZVI4XldS6uqT7g74xJeZt4JEwkRSmN%2BNdgiZV52v0B9vVFJH5qGERPbJ9QfZ5prXfvYBDkPF93dgIDoVkT%2Bxn3h2mM3IDVNPPe%2BK4gB1BtXL3U6H1xeQ1HjQYuJms%2FRpZyfDOHSUSarEJVRdIwMbG4t0KTCGFEHX9swyKX31%2BLc9qRYox8E7vWHHuxpbGKwl8hyzxAwbhSq9H9xa3Jxyv7FV1pttoXRcELm7bki6cjhf89TR9fJeV6z80s9ooCNelvGXmgWCrwZUSOi25HguBlGoo3PlnQab4fCgELb692few5TA1YkJUcUGmWmh7TOdTxDCZnIxQkB945Cja9Im3c3IdT1xYEnSDLvlSlnxLxUDtQlNQY6KVGQwwLJC2lH8TbIiGNf86GzPP5nm%2FmoS0PnarvnLQuKVCW9i%2FdZ%2BQg4tt7pFRX5MLjmhMIGOqUBrMYJwQSSAXmLK63Kf9qRbxumifjtw2HXiKJy8upCDRT5UuQXGlj%2BS9HsApAOv9sE7Yr7d2h1JfdqKlzjA5UxItWgVDr9lndsgH%2BiuJqAtsuZELTmZ0A9X7QJBDuyic8u%2BfptSqVYlJ3JPNa8BNo7Ef2qcaEd%2FQlVbeoU2EspX9TTkeJqv4QPwM02N%2Fod%2FkgBI53pHepCy16Jk4M%2FKooU%2Bjb6LlPZ&X-Amz-Signature=5991204e1a6a8724a8bc30c9ea3340bc71856e9cc2c2a4306e404bded25c834d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GJGC7I%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDqG%2F%2BHSSkCimwHEg0zYsfq0YIMRon0akFq7idugtaVSAIgabL9h3FEF5%2BgB%2Bjc%2BJNF1acM5VnutGpV%2F9FItWcx3zUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMBQB9r%2F95%2FKVRHsYSrcA%2BKC39tJVW1Q%2BhO23Rp94zOcLhP9VPEcSlC53pFyWodG0DHrp9jGGwrEzNf3PnIicaJ%2FNPUXqMG%2BrR1Mr5LWtkbOOt2pcYKrPCIVtmSIMVKUjp4YBJGThnCEyNAdp9H5AOz4uZAT8jt2U61Bzu48LX%2BXr%2F9Q2alUyrNxV95PTJ9e924r2Po4yCYL55XYgK6gyeM77%2BvRCZVI4XldS6uqT7g74xJeZt4JEwkRSmN%2BNdgiZV52v0B9vVFJH5qGERPbJ9QfZ5prXfvYBDkPF93dgIDoVkT%2Bxn3h2mM3IDVNPPe%2BK4gB1BtXL3U6H1xeQ1HjQYuJms%2FRpZyfDOHSUSarEJVRdIwMbG4t0KTCGFEHX9swyKX31%2BLc9qRYox8E7vWHHuxpbGKwl8hyzxAwbhSq9H9xa3Jxyv7FV1pttoXRcELm7bki6cjhf89TR9fJeV6z80s9ooCNelvGXmgWCrwZUSOi25HguBlGoo3PlnQab4fCgELb692few5TA1YkJUcUGmWmh7TOdTxDCZnIxQkB945Cja9Im3c3IdT1xYEnSDLvlSlnxLxUDtQlNQY6KVGQwwLJC2lH8TbIiGNf86GzPP5nm%2FmoS0PnarvnLQuKVCW9i%2FdZ%2BQg4tt7pFRX5MLjmhMIGOqUBrMYJwQSSAXmLK63Kf9qRbxumifjtw2HXiKJy8upCDRT5UuQXGlj%2BS9HsApAOv9sE7Yr7d2h1JfdqKlzjA5UxItWgVDr9lndsgH%2BiuJqAtsuZELTmZ0A9X7QJBDuyic8u%2BfptSqVYlJ3JPNa8BNo7Ef2qcaEd%2FQlVbeoU2EspX9TTkeJqv4QPwM02N%2Fod%2FkgBI53pHepCy16Jk4M%2FKooU%2Bjb6LlPZ&X-Amz-Signature=7b5fb78762b7d301eab23ad7657a93633aaee4be3876e9fe07478f9f62556038&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
