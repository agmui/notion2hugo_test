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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJPQFY3%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BjNiOZOEMRukVC%2BmsTn7II4m0hDu3y%2BxpZlem6%2FeJOAiEA10lRq0raObmcEwe0lbUL9mnJGmmgvE4orSSFwdTFOYMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgYGv01%2BhFQycY2qyrcA7%2F0%2FBSZ9CNHc0q64XWmNFRnNmOUA3EYFRlzCcWUnf4RLhODCmPdkbNEfnYYRLPbFo%2BieqFtYfoL38vMz8FPU16Y3Qtiw%2FWLbxn%2FppxSVL4shhEw%2FYpAgDG3R%2FMB6gcZ8WTz1eo7eMvQkwkjFmusVfkQ1gEIxMlJ8YzxFTuIqoNr%2Bhh1W32CO921zck1zsUe3ofxrD3NybEMHLvs6ApZNSrhDGB2iTw68tCE4kbx2FBg%2BbO9RLQvzr4XQKeRdjbjrAYNIRhdaW%2FVQVp%2F8xOF5T9%2FwfSq7ZFfuTGxwdLVgfcVJxWEGJVyq3%2FucEKqa4N8G%2BCvflvnk1n1dE%2FCs94%2BHnTFwM9GhaxL%2BHf6toiS2lSmg27BCbviYJzpmGzGcE35ALoQUjbFWntuUIthhavS%2BQUZ6piYbKv98H3e10raYcHG7WQaONVgIC8GZUZGPMYiqBariWrQqRBdfp%2F8V5pD5Lta8PvBMIxl7B%2FKYsB1z9yy60nQHTEHrcR5cAEhoaQVVDhbBgX6ZOUlWF1exRS2NRQxMwvs93zviJIAu5rK32NyZm74%2BwJgiZEQIPWKcrsNzqUKsLT8MyGdu8WPjjX1nA9vbEdLLO1Csok4YpBqLydgByxgdta1N9tM8ga6MMy5y8oGOqUB85PLTJfb8DWLh8PRBFLOK%2BCwDX%2FtRsiO%2B9ek4j5Bx6EYa9gYTPaTWWdEe%2B%2FvvtYloTpi9UPWYfFKT473GSGiCpU5wzu%2BeUeAO7pGms7nGDLZLaEjxkBtB9j0VGanilZGkEpbWCay39lngyMdou3JOnLaP4O8TZ%2BxjxvYmUhnHoWTwVPaSEf1fhWrW5oomG78XsHPZ5gu6nMH5XmHVED%2FscEPPXpZ&X-Amz-Signature=c80aa92c5c3af825fffd817f16466a2eaf41b426c5e97464796f2eaad7869d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJPQFY3%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BjNiOZOEMRukVC%2BmsTn7II4m0hDu3y%2BxpZlem6%2FeJOAiEA10lRq0raObmcEwe0lbUL9mnJGmmgvE4orSSFwdTFOYMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgYGv01%2BhFQycY2qyrcA7%2F0%2FBSZ9CNHc0q64XWmNFRnNmOUA3EYFRlzCcWUnf4RLhODCmPdkbNEfnYYRLPbFo%2BieqFtYfoL38vMz8FPU16Y3Qtiw%2FWLbxn%2FppxSVL4shhEw%2FYpAgDG3R%2FMB6gcZ8WTz1eo7eMvQkwkjFmusVfkQ1gEIxMlJ8YzxFTuIqoNr%2Bhh1W32CO921zck1zsUe3ofxrD3NybEMHLvs6ApZNSrhDGB2iTw68tCE4kbx2FBg%2BbO9RLQvzr4XQKeRdjbjrAYNIRhdaW%2FVQVp%2F8xOF5T9%2FwfSq7ZFfuTGxwdLVgfcVJxWEGJVyq3%2FucEKqa4N8G%2BCvflvnk1n1dE%2FCs94%2BHnTFwM9GhaxL%2BHf6toiS2lSmg27BCbviYJzpmGzGcE35ALoQUjbFWntuUIthhavS%2BQUZ6piYbKv98H3e10raYcHG7WQaONVgIC8GZUZGPMYiqBariWrQqRBdfp%2F8V5pD5Lta8PvBMIxl7B%2FKYsB1z9yy60nQHTEHrcR5cAEhoaQVVDhbBgX6ZOUlWF1exRS2NRQxMwvs93zviJIAu5rK32NyZm74%2BwJgiZEQIPWKcrsNzqUKsLT8MyGdu8WPjjX1nA9vbEdLLO1Csok4YpBqLydgByxgdta1N9tM8ga6MMy5y8oGOqUB85PLTJfb8DWLh8PRBFLOK%2BCwDX%2FtRsiO%2B9ek4j5Bx6EYa9gYTPaTWWdEe%2B%2FvvtYloTpi9UPWYfFKT473GSGiCpU5wzu%2BeUeAO7pGms7nGDLZLaEjxkBtB9j0VGanilZGkEpbWCay39lngyMdou3JOnLaP4O8TZ%2BxjxvYmUhnHoWTwVPaSEf1fhWrW5oomG78XsHPZ5gu6nMH5XmHVED%2FscEPPXpZ&X-Amz-Signature=dbf46a94dbb5beb4cc357f5ce5560833795704bfc0b13e02fad20c3a5189ba70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJPQFY3%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BjNiOZOEMRukVC%2BmsTn7II4m0hDu3y%2BxpZlem6%2FeJOAiEA10lRq0raObmcEwe0lbUL9mnJGmmgvE4orSSFwdTFOYMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgYGv01%2BhFQycY2qyrcA7%2F0%2FBSZ9CNHc0q64XWmNFRnNmOUA3EYFRlzCcWUnf4RLhODCmPdkbNEfnYYRLPbFo%2BieqFtYfoL38vMz8FPU16Y3Qtiw%2FWLbxn%2FppxSVL4shhEw%2FYpAgDG3R%2FMB6gcZ8WTz1eo7eMvQkwkjFmusVfkQ1gEIxMlJ8YzxFTuIqoNr%2Bhh1W32CO921zck1zsUe3ofxrD3NybEMHLvs6ApZNSrhDGB2iTw68tCE4kbx2FBg%2BbO9RLQvzr4XQKeRdjbjrAYNIRhdaW%2FVQVp%2F8xOF5T9%2FwfSq7ZFfuTGxwdLVgfcVJxWEGJVyq3%2FucEKqa4N8G%2BCvflvnk1n1dE%2FCs94%2BHnTFwM9GhaxL%2BHf6toiS2lSmg27BCbviYJzpmGzGcE35ALoQUjbFWntuUIthhavS%2BQUZ6piYbKv98H3e10raYcHG7WQaONVgIC8GZUZGPMYiqBariWrQqRBdfp%2F8V5pD5Lta8PvBMIxl7B%2FKYsB1z9yy60nQHTEHrcR5cAEhoaQVVDhbBgX6ZOUlWF1exRS2NRQxMwvs93zviJIAu5rK32NyZm74%2BwJgiZEQIPWKcrsNzqUKsLT8MyGdu8WPjjX1nA9vbEdLLO1Csok4YpBqLydgByxgdta1N9tM8ga6MMy5y8oGOqUB85PLTJfb8DWLh8PRBFLOK%2BCwDX%2FtRsiO%2B9ek4j5Bx6EYa9gYTPaTWWdEe%2B%2FvvtYloTpi9UPWYfFKT473GSGiCpU5wzu%2BeUeAO7pGms7nGDLZLaEjxkBtB9j0VGanilZGkEpbWCay39lngyMdou3JOnLaP4O8TZ%2BxjxvYmUhnHoWTwVPaSEf1fhWrW5oomG78XsHPZ5gu6nMH5XmHVED%2FscEPPXpZ&X-Amz-Signature=1a8e3153ea49a4cd15111e83b925bbb6bb6a41c7465492ca17adb54f33dc8174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
