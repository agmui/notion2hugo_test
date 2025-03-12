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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJFAEKO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDrjPif7ND4pe7Dbx56RIyzUIcdlP%2FnorT1XWppD7%2BmFAIhAL1CRHKV6EHqR%2F4M%2Fcko7vw%2FhGFGIgEhjS0a%2BDCFOsL%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz3Tr24jf%2BnEmC0rkq3ANgm5ddGgWwwjKiodiWnUVc16kS6xYDLUAJSFza5XxNFsa2ZafbExnJVbLnHvyH47U2otO77jEp0bJo2%2Fo6yjjszNr5GgiuNKATL7dT2RksL01qW7RI%2F2r5I9zeeqNtrHqkeRQj9J5H4IKgypib1QPhMi9hykZdC%2F4884lZD63Ot%2BIsziysNDhqYE%2FUP4LlEZfa%2BibLp30B9p9zJFxMCsCscA%2F%2BQ0BHxVbo8tEXSo2NLqxg4V4%2Bfz7pQaNOJ%2BGPsCuYFPasqBzhbG3wmlgJgzhgkA8XT50QhmbuRumKShy8Ih7AsS%2B0pNgvJydW8Cle0xbZ%2BA1PEZb1I0W2TZeGByPIfZW%2BbIdmGCTSygPkA002ZQf9ywS3T7IXajbst%2B48DAh3KsuZYreN3j5sYZ8Oky%2FTrkOe9iYit4zrACNTPBqFZXx%2Fl%2B%2B1OoaH2TaKFcEYh6SkCKfSiqwMaPsvzo6D2CzkKCm%2Bh3%2FtdoS2EHykK9E1MmB9Pd%2BvpUMpcUs542fLeXBfijt1OJc9q5uUYEvHvKO%2BTk5pl7wQqoWSaUvRuW7E78RxXRVmogJbMbreDkLvj33gcsGwK4ScKGCNBPRbmfkC2ecRpDUE22gh2XzSqy0JGu8awc0zowXMl%2Fo82TC62sS%2BBjqkAfM%2BHqe4l76DMxsp%2Fbdi%2F15bxBmFgiyW25sLAYiVQJLbK171WJs6zNy%2Fj4yroZYieXDbFROBN%2F8%2Foo01E8HlUL1j7guYRmchtYyX2urdRugKlKnZuYAbbDN2U2NZTCTzGCtx3mijAaVlMbxO0uClXXIR3QvC0jJITQtMGqTOwHvqBy6yhrADYJCuEEYYhASWEE3KcpGwD8KFDJDaocpPWU8WBM14&X-Amz-Signature=c055ebca75e89a59228b265bfd43e533e4d5b5290879128d3e6a01fd15fab921&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJFAEKO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDrjPif7ND4pe7Dbx56RIyzUIcdlP%2FnorT1XWppD7%2BmFAIhAL1CRHKV6EHqR%2F4M%2Fcko7vw%2FhGFGIgEhjS0a%2BDCFOsL%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz3Tr24jf%2BnEmC0rkq3ANgm5ddGgWwwjKiodiWnUVc16kS6xYDLUAJSFza5XxNFsa2ZafbExnJVbLnHvyH47U2otO77jEp0bJo2%2Fo6yjjszNr5GgiuNKATL7dT2RksL01qW7RI%2F2r5I9zeeqNtrHqkeRQj9J5H4IKgypib1QPhMi9hykZdC%2F4884lZD63Ot%2BIsziysNDhqYE%2FUP4LlEZfa%2BibLp30B9p9zJFxMCsCscA%2F%2BQ0BHxVbo8tEXSo2NLqxg4V4%2Bfz7pQaNOJ%2BGPsCuYFPasqBzhbG3wmlgJgzhgkA8XT50QhmbuRumKShy8Ih7AsS%2B0pNgvJydW8Cle0xbZ%2BA1PEZb1I0W2TZeGByPIfZW%2BbIdmGCTSygPkA002ZQf9ywS3T7IXajbst%2B48DAh3KsuZYreN3j5sYZ8Oky%2FTrkOe9iYit4zrACNTPBqFZXx%2Fl%2B%2B1OoaH2TaKFcEYh6SkCKfSiqwMaPsvzo6D2CzkKCm%2Bh3%2FtdoS2EHykK9E1MmB9Pd%2BvpUMpcUs542fLeXBfijt1OJc9q5uUYEvHvKO%2BTk5pl7wQqoWSaUvRuW7E78RxXRVmogJbMbreDkLvj33gcsGwK4ScKGCNBPRbmfkC2ecRpDUE22gh2XzSqy0JGu8awc0zowXMl%2Fo82TC62sS%2BBjqkAfM%2BHqe4l76DMxsp%2Fbdi%2F15bxBmFgiyW25sLAYiVQJLbK171WJs6zNy%2Fj4yroZYieXDbFROBN%2F8%2Foo01E8HlUL1j7guYRmchtYyX2urdRugKlKnZuYAbbDN2U2NZTCTzGCtx3mijAaVlMbxO0uClXXIR3QvC0jJITQtMGqTOwHvqBy6yhrADYJCuEEYYhASWEE3KcpGwD8KFDJDaocpPWU8WBM14&X-Amz-Signature=617c5547fc36bd5e3f1edf22b4dc72144e1c09db16fe6d718c7a0380eb011f54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSJFAEKO%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDrjPif7ND4pe7Dbx56RIyzUIcdlP%2FnorT1XWppD7%2BmFAIhAL1CRHKV6EHqR%2F4M%2Fcko7vw%2FhGFGIgEhjS0a%2BDCFOsL%2BKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz3Tr24jf%2BnEmC0rkq3ANgm5ddGgWwwjKiodiWnUVc16kS6xYDLUAJSFza5XxNFsa2ZafbExnJVbLnHvyH47U2otO77jEp0bJo2%2Fo6yjjszNr5GgiuNKATL7dT2RksL01qW7RI%2F2r5I9zeeqNtrHqkeRQj9J5H4IKgypib1QPhMi9hykZdC%2F4884lZD63Ot%2BIsziysNDhqYE%2FUP4LlEZfa%2BibLp30B9p9zJFxMCsCscA%2F%2BQ0BHxVbo8tEXSo2NLqxg4V4%2Bfz7pQaNOJ%2BGPsCuYFPasqBzhbG3wmlgJgzhgkA8XT50QhmbuRumKShy8Ih7AsS%2B0pNgvJydW8Cle0xbZ%2BA1PEZb1I0W2TZeGByPIfZW%2BbIdmGCTSygPkA002ZQf9ywS3T7IXajbst%2B48DAh3KsuZYreN3j5sYZ8Oky%2FTrkOe9iYit4zrACNTPBqFZXx%2Fl%2B%2B1OoaH2TaKFcEYh6SkCKfSiqwMaPsvzo6D2CzkKCm%2Bh3%2FtdoS2EHykK9E1MmB9Pd%2BvpUMpcUs542fLeXBfijt1OJc9q5uUYEvHvKO%2BTk5pl7wQqoWSaUvRuW7E78RxXRVmogJbMbreDkLvj33gcsGwK4ScKGCNBPRbmfkC2ecRpDUE22gh2XzSqy0JGu8awc0zowXMl%2Fo82TC62sS%2BBjqkAfM%2BHqe4l76DMxsp%2Fbdi%2F15bxBmFgiyW25sLAYiVQJLbK171WJs6zNy%2Fj4yroZYieXDbFROBN%2F8%2Foo01E8HlUL1j7guYRmchtYyX2urdRugKlKnZuYAbbDN2U2NZTCTzGCtx3mijAaVlMbxO0uClXXIR3QvC0jJITQtMGqTOwHvqBy6yhrADYJCuEEYYhASWEE3KcpGwD8KFDJDaocpPWU8WBM14&X-Amz-Signature=90968399aedee7199cd7286969f2516d68f15115d1873f417b9893ce722893a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
