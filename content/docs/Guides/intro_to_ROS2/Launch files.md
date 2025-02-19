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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667JVK5IM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHTTFKAulpdkY99bAQewLP7cr04%2FLdWE32VAGJ%2BkAjylAiButSIrFRPSUHgreUkOPBEXUleXrm1b5inJjAz%2FtGHnWyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FmmkQIUVR%2Bo91%2BGIKtwDIkXHTOaSmWRYbKkMkq7tZ3LLAUXFp0TERxKHbYZH7oKJN6HlR6unKTHq0m1hfNy53rtU9aalvNaDZzGSsCFB77pYdVlt94TWovoBmnK5SjD6dJYOD4mVoTHKxJqo4x51xUW%2BYX%2FaObvnpdEVRVEHX6JRhpFRaHcR0QH10sszkPQpVHufVHI89%2BKBruOcvRpdeqgnIDvG%2FEt4Re6sGyi8w5McdTz2Ry0RxXNS9olWxtsKuC8yjsPgw0PdeiHd02m5qZkXpXRIZiuGUHR7%2FM3V0ltpq6%2FWDSMSejM%2BPpWpzAETuEK6GPrBP%2FcTLBJu26ku5MGN4bNjGgYbw8Zh542kBiFfQm6BpZ78NtEBAc69gof234iGZ5jev6J9xbnsK57TIte8GIB5Jo7qA411wiSsKdH6NGwBsTnAdFB%2FJbQmHlXALVsbBXkWjSzbZ8bmUZo8WT2amBDT8zKiwtBviJ9hI169gbgICbLuU6fHuUzPEkejBw%2Fs6DxbU6g%2BLgm0qNpRcnFWMMGMJMLeHZBhC%2FEL64h3ervjDo%2FIMSDmAyLw%2BU7XXOkgM7%2FafK5rrLPhrEgth9F42Lq%2BNbT0CI7erP8a%2F%2FeLy8tMVO3KMYhIKi%2BaAVF%2FMEbJgRO1Ww%2BchF4wkvvWvQY6pgGgRrawN8qwoOgy7HKkI7iWHiLMHw%2F8b27AT2SzHc1eA1o2c5XjSaiEe%2BWavoGdOgXrDertdc6Ig1Lx37w%2FLgBcQZa9L5XyddVF%2BH0ULiSCSiYzmW0W1IG53am6xuESEbhGxp6zw24G78uo%2BF%2FF%2FC6Qgz3q5DrMsvWWwAHHlZvASpuj%2F%2Bzutxk%2FDwrDjVQtiA6MKiUe79qi7MT2qATL0RDlG0kyR051&X-Amz-Signature=41485d8cf40af5f6ce7b11c6866823fe3dbfe6330bd86b7565c37b749c35d4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667JVK5IM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHTTFKAulpdkY99bAQewLP7cr04%2FLdWE32VAGJ%2BkAjylAiButSIrFRPSUHgreUkOPBEXUleXrm1b5inJjAz%2FtGHnWyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FmmkQIUVR%2Bo91%2BGIKtwDIkXHTOaSmWRYbKkMkq7tZ3LLAUXFp0TERxKHbYZH7oKJN6HlR6unKTHq0m1hfNy53rtU9aalvNaDZzGSsCFB77pYdVlt94TWovoBmnK5SjD6dJYOD4mVoTHKxJqo4x51xUW%2BYX%2FaObvnpdEVRVEHX6JRhpFRaHcR0QH10sszkPQpVHufVHI89%2BKBruOcvRpdeqgnIDvG%2FEt4Re6sGyi8w5McdTz2Ry0RxXNS9olWxtsKuC8yjsPgw0PdeiHd02m5qZkXpXRIZiuGUHR7%2FM3V0ltpq6%2FWDSMSejM%2BPpWpzAETuEK6GPrBP%2FcTLBJu26ku5MGN4bNjGgYbw8Zh542kBiFfQm6BpZ78NtEBAc69gof234iGZ5jev6J9xbnsK57TIte8GIB5Jo7qA411wiSsKdH6NGwBsTnAdFB%2FJbQmHlXALVsbBXkWjSzbZ8bmUZo8WT2amBDT8zKiwtBviJ9hI169gbgICbLuU6fHuUzPEkejBw%2Fs6DxbU6g%2BLgm0qNpRcnFWMMGMJMLeHZBhC%2FEL64h3ervjDo%2FIMSDmAyLw%2BU7XXOkgM7%2FafK5rrLPhrEgth9F42Lq%2BNbT0CI7erP8a%2F%2FeLy8tMVO3KMYhIKi%2BaAVF%2FMEbJgRO1Ww%2BchF4wkvvWvQY6pgGgRrawN8qwoOgy7HKkI7iWHiLMHw%2F8b27AT2SzHc1eA1o2c5XjSaiEe%2BWavoGdOgXrDertdc6Ig1Lx37w%2FLgBcQZa9L5XyddVF%2BH0ULiSCSiYzmW0W1IG53am6xuESEbhGxp6zw24G78uo%2BF%2FF%2FC6Qgz3q5DrMsvWWwAHHlZvASpuj%2F%2Bzutxk%2FDwrDjVQtiA6MKiUe79qi7MT2qATL0RDlG0kyR051&X-Amz-Signature=18a00f01a15c35128deb9275ceff0a4649a3a30ca1f7af75db755cf17ec12f70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667JVK5IM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHTTFKAulpdkY99bAQewLP7cr04%2FLdWE32VAGJ%2BkAjylAiButSIrFRPSUHgreUkOPBEXUleXrm1b5inJjAz%2FtGHnWyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FmmkQIUVR%2Bo91%2BGIKtwDIkXHTOaSmWRYbKkMkq7tZ3LLAUXFp0TERxKHbYZH7oKJN6HlR6unKTHq0m1hfNy53rtU9aalvNaDZzGSsCFB77pYdVlt94TWovoBmnK5SjD6dJYOD4mVoTHKxJqo4x51xUW%2BYX%2FaObvnpdEVRVEHX6JRhpFRaHcR0QH10sszkPQpVHufVHI89%2BKBruOcvRpdeqgnIDvG%2FEt4Re6sGyi8w5McdTz2Ry0RxXNS9olWxtsKuC8yjsPgw0PdeiHd02m5qZkXpXRIZiuGUHR7%2FM3V0ltpq6%2FWDSMSejM%2BPpWpzAETuEK6GPrBP%2FcTLBJu26ku5MGN4bNjGgYbw8Zh542kBiFfQm6BpZ78NtEBAc69gof234iGZ5jev6J9xbnsK57TIte8GIB5Jo7qA411wiSsKdH6NGwBsTnAdFB%2FJbQmHlXALVsbBXkWjSzbZ8bmUZo8WT2amBDT8zKiwtBviJ9hI169gbgICbLuU6fHuUzPEkejBw%2Fs6DxbU6g%2BLgm0qNpRcnFWMMGMJMLeHZBhC%2FEL64h3ervjDo%2FIMSDmAyLw%2BU7XXOkgM7%2FafK5rrLPhrEgth9F42Lq%2BNbT0CI7erP8a%2F%2FeLy8tMVO3KMYhIKi%2BaAVF%2FMEbJgRO1Ww%2BchF4wkvvWvQY6pgGgRrawN8qwoOgy7HKkI7iWHiLMHw%2F8b27AT2SzHc1eA1o2c5XjSaiEe%2BWavoGdOgXrDertdc6Ig1Lx37w%2FLgBcQZa9L5XyddVF%2BH0ULiSCSiYzmW0W1IG53am6xuESEbhGxp6zw24G78uo%2BF%2FF%2FC6Qgz3q5DrMsvWWwAHHlZvASpuj%2F%2Bzutxk%2FDwrDjVQtiA6MKiUe79qi7MT2qATL0RDlG0kyR051&X-Amz-Signature=42691358efd74e4531e6e6dc89f6466e9ea8102a771031cee444e2c5c1ea92db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
