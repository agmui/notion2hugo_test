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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LB36BFY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdZ2ODLAsXRVBy1SwNqZAtGX5Or%2BHaJLV2cfNfVwYSAIhAKzGwGvYTfjvH1sFjGP0hK%2FadVRJHq3P4adjwg%2FfSyc0KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWd4e8JRZYadWcm2gq3ANMKsKuxUwwSfvXM6SwBQsdGZS7H3Y5UZG6qLNuQiW0zNrGvAsa19l9xlqthUnve%2F30yK1%2Bn178s0Cfdu%2FjJx9IeajasNOD7rtAVPz5w%2Fv6afcu%2FrC%2Fn%2BBjc7Lu8WlrGm%2FsLpluiLnU6NH0REGQAHeLhL3NBQdKVh5yFpzFVwdtXqjluiHP8wONWLA7aZ5wkf%2B%2B6je5VJHz83f4SWCmRBAWU%2Bu3hA0URB%2BMvUphnInj6BPZXlKDbU7Zb8gOm8vYQPmWos7POzAvSX1Y8TH%2BybdVZqFqbzuMkSrVsWFnlMP0KNoJKCMg6kfA3GJ4pxsITM%2Bnp8BKZNmBc%2BFsfE57xP5kOz59nodZOACR83JpJVaktctHbQd5UN3Mcup6NVHup1lc9CbmikU7Q7IZpDXYNALsb1bvDWZxs2KXKsc%2BWtl4qHSnGyhoBmwANU%2Fa0MM0xztvNU5l148YOX6Oa8kRnfwiADV7KHomscK5h4n6aoDg1wt7gk2%2Fz9mfCpf3k41flP8fx2XFrH5%2BoJ5347GxXsCjpISLM12KvxH%2FMzsGqI4OlmgDuOz1ICub4vD4alAn86qjTa4HWA9ThcrxN1jIwHW24SZ7m04vsH2AUDUIzv9DwPMQr72QurnkN%2BsfujDx0dnCBjqkAYkVLznIuTXAeAxbZRPTyyH8KDcYIRCmEGcqgA4%2BjNkAOhfTnOj1mD3S7c0z4GUG1ABBmPTWe%2F0DVmcS7lvDnYm75%2F9XXfJemmSeiqGGXd17l2df15dx%2FHiWjo79d0Z7L7ygQMof7vDlt0kJCGJ%2F7ORrov06c6LqmO%2FtDllBkcuJq4gBqvnQxeS7wBh%2F9d5Y4kH3eKypruuFuvyWRsTE%2FgqQagg8&X-Amz-Signature=22f676cfefc97948e73e6cb8416f0658316e5b80b6f67a6793c6cca61b6a26ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LB36BFY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdZ2ODLAsXRVBy1SwNqZAtGX5Or%2BHaJLV2cfNfVwYSAIhAKzGwGvYTfjvH1sFjGP0hK%2FadVRJHq3P4adjwg%2FfSyc0KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWd4e8JRZYadWcm2gq3ANMKsKuxUwwSfvXM6SwBQsdGZS7H3Y5UZG6qLNuQiW0zNrGvAsa19l9xlqthUnve%2F30yK1%2Bn178s0Cfdu%2FjJx9IeajasNOD7rtAVPz5w%2Fv6afcu%2FrC%2Fn%2BBjc7Lu8WlrGm%2FsLpluiLnU6NH0REGQAHeLhL3NBQdKVh5yFpzFVwdtXqjluiHP8wONWLA7aZ5wkf%2B%2B6je5VJHz83f4SWCmRBAWU%2Bu3hA0URB%2BMvUphnInj6BPZXlKDbU7Zb8gOm8vYQPmWos7POzAvSX1Y8TH%2BybdVZqFqbzuMkSrVsWFnlMP0KNoJKCMg6kfA3GJ4pxsITM%2Bnp8BKZNmBc%2BFsfE57xP5kOz59nodZOACR83JpJVaktctHbQd5UN3Mcup6NVHup1lc9CbmikU7Q7IZpDXYNALsb1bvDWZxs2KXKsc%2BWtl4qHSnGyhoBmwANU%2Fa0MM0xztvNU5l148YOX6Oa8kRnfwiADV7KHomscK5h4n6aoDg1wt7gk2%2Fz9mfCpf3k41flP8fx2XFrH5%2BoJ5347GxXsCjpISLM12KvxH%2FMzsGqI4OlmgDuOz1ICub4vD4alAn86qjTa4HWA9ThcrxN1jIwHW24SZ7m04vsH2AUDUIzv9DwPMQr72QurnkN%2BsfujDx0dnCBjqkAYkVLznIuTXAeAxbZRPTyyH8KDcYIRCmEGcqgA4%2BjNkAOhfTnOj1mD3S7c0z4GUG1ABBmPTWe%2F0DVmcS7lvDnYm75%2F9XXfJemmSeiqGGXd17l2df15dx%2FHiWjo79d0Z7L7ygQMof7vDlt0kJCGJ%2F7ORrov06c6LqmO%2FtDllBkcuJq4gBqvnQxeS7wBh%2F9d5Y4kH3eKypruuFuvyWRsTE%2FgqQagg8&X-Amz-Signature=73538fdcbc5382f6c3e8a704dab71af9f69079674c67dc464a403664a3bbfc2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LB36BFY%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmdZ2ODLAsXRVBy1SwNqZAtGX5Or%2BHaJLV2cfNfVwYSAIhAKzGwGvYTfjvH1sFjGP0hK%2FadVRJHq3P4adjwg%2FfSyc0KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWd4e8JRZYadWcm2gq3ANMKsKuxUwwSfvXM6SwBQsdGZS7H3Y5UZG6qLNuQiW0zNrGvAsa19l9xlqthUnve%2F30yK1%2Bn178s0Cfdu%2FjJx9IeajasNOD7rtAVPz5w%2Fv6afcu%2FrC%2Fn%2BBjc7Lu8WlrGm%2FsLpluiLnU6NH0REGQAHeLhL3NBQdKVh5yFpzFVwdtXqjluiHP8wONWLA7aZ5wkf%2B%2B6je5VJHz83f4SWCmRBAWU%2Bu3hA0URB%2BMvUphnInj6BPZXlKDbU7Zb8gOm8vYQPmWos7POzAvSX1Y8TH%2BybdVZqFqbzuMkSrVsWFnlMP0KNoJKCMg6kfA3GJ4pxsITM%2Bnp8BKZNmBc%2BFsfE57xP5kOz59nodZOACR83JpJVaktctHbQd5UN3Mcup6NVHup1lc9CbmikU7Q7IZpDXYNALsb1bvDWZxs2KXKsc%2BWtl4qHSnGyhoBmwANU%2Fa0MM0xztvNU5l148YOX6Oa8kRnfwiADV7KHomscK5h4n6aoDg1wt7gk2%2Fz9mfCpf3k41flP8fx2XFrH5%2BoJ5347GxXsCjpISLM12KvxH%2FMzsGqI4OlmgDuOz1ICub4vD4alAn86qjTa4HWA9ThcrxN1jIwHW24SZ7m04vsH2AUDUIzv9DwPMQr72QurnkN%2BsfujDx0dnCBjqkAYkVLznIuTXAeAxbZRPTyyH8KDcYIRCmEGcqgA4%2BjNkAOhfTnOj1mD3S7c0z4GUG1ABBmPTWe%2F0DVmcS7lvDnYm75%2F9XXfJemmSeiqGGXd17l2df15dx%2FHiWjo79d0Z7L7ygQMof7vDlt0kJCGJ%2F7ORrov06c6LqmO%2FtDllBkcuJq4gBqvnQxeS7wBh%2F9d5Y4kH3eKypruuFuvyWRsTE%2FgqQagg8&X-Amz-Signature=8fa99b615603f79e59376082a93a503b68644cdf6c7487b6431aa4f9185d104f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
