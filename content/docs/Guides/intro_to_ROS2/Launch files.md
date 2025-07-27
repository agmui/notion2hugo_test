---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNG7SQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEJ7fOvr31%2B78DILuyIrVx7q%2B3fzcEnu9RLRey11hwh0AiEAhQ8yqIzM0ntxnUQIA1z3ya8V6j1YSEK5eEt1jTh5bNUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMTyoXM9pcKqMfo5CrcA0sWBUvQwwxVfk2igc9MieTC4wT%2FX5g3yp%2BEP%2BCK0gr40LkqncuDh4YC%2BY0z3xWD0cS%2BrXx3o8ZJpyLxL3m3%2FjQocQTo2oVI1FXOALXvVRNEK8AklFlQw8kIXZjG%2BPAFEnGbJL7cMMAq1mUuWLqqIBec2UAxIf6FmbpzfFO%2BUW911sdvw0lMVskKEImHEI8awolEgff18A5w%2FFzizr8vfrnD3L0Tu1xq06HGnRDUqnzEv53Pac8gc7PKAaZuh0haPCrPIuEUz2r41NlHOgnMVygX%2BTJkMdpIKuiqQ8hqNmo0MOR2%2FyGSj2RrqD0eZP2RiIJ0yiRJTjaIhZhmNkf6JFDHMVeTjWwLriWwWqCd7ffWfzi%2Fefa7Y%2FJzm0WlY6%2BR49pSbpif6LXo3HAwHdKBa3NlxwoD%2B50JOzKH61Czp2NeDRtzGf9GbboVF36EroIVm%2FX9rlhq1J5HqsyvBXu%2FRh9Ij%2Fvl9rD9x6RhG%2FtJkkKzArLPDrB1JvzID%2BMy1gh8IJ8M330PgtXBXBCOUsRBIT0%2F0fU9SX%2Bt8v9%2B0OTrIJbl1FsCDDn7mH3%2BpcT%2FvifTCU%2BUg6j7XFQnb3IEiUm7yIDEvjCuw28272NalRxn6HyNlpnCA4czxH2mWTfYMJ6kmsQGOqUBgQQhZt3Zcy93yBeKJD0rycMBLwcdCI8Me47W5niph0GxLndytR8JBHQpXdzzaFTrA2EVRBX64N1UhdAWk28PHDyE6k92wpRP84tbZ25J6JPtk5N%2FuuwRxjDY1YaHpQM5Tl8VO4K8w%2BDapUEzD8emUTrVNUO7AxXIRE%2FR5aGBmz%2BYvLCZX2hdzJVkoBjxyqlJ5XA1ybVgn1PgU%2BHhyQ2SzBWuk78s&X-Amz-Signature=2891e7c845a211957952215fc9f52366d4898fcf3cea3f0ec1e2e7574336f0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNG7SQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEJ7fOvr31%2B78DILuyIrVx7q%2B3fzcEnu9RLRey11hwh0AiEAhQ8yqIzM0ntxnUQIA1z3ya8V6j1YSEK5eEt1jTh5bNUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMTyoXM9pcKqMfo5CrcA0sWBUvQwwxVfk2igc9MieTC4wT%2FX5g3yp%2BEP%2BCK0gr40LkqncuDh4YC%2BY0z3xWD0cS%2BrXx3o8ZJpyLxL3m3%2FjQocQTo2oVI1FXOALXvVRNEK8AklFlQw8kIXZjG%2BPAFEnGbJL7cMMAq1mUuWLqqIBec2UAxIf6FmbpzfFO%2BUW911sdvw0lMVskKEImHEI8awolEgff18A5w%2FFzizr8vfrnD3L0Tu1xq06HGnRDUqnzEv53Pac8gc7PKAaZuh0haPCrPIuEUz2r41NlHOgnMVygX%2BTJkMdpIKuiqQ8hqNmo0MOR2%2FyGSj2RrqD0eZP2RiIJ0yiRJTjaIhZhmNkf6JFDHMVeTjWwLriWwWqCd7ffWfzi%2Fefa7Y%2FJzm0WlY6%2BR49pSbpif6LXo3HAwHdKBa3NlxwoD%2B50JOzKH61Czp2NeDRtzGf9GbboVF36EroIVm%2FX9rlhq1J5HqsyvBXu%2FRh9Ij%2Fvl9rD9x6RhG%2FtJkkKzArLPDrB1JvzID%2BMy1gh8IJ8M330PgtXBXBCOUsRBIT0%2F0fU9SX%2Bt8v9%2B0OTrIJbl1FsCDDn7mH3%2BpcT%2FvifTCU%2BUg6j7XFQnb3IEiUm7yIDEvjCuw28272NalRxn6HyNlpnCA4czxH2mWTfYMJ6kmsQGOqUBgQQhZt3Zcy93yBeKJD0rycMBLwcdCI8Me47W5niph0GxLndytR8JBHQpXdzzaFTrA2EVRBX64N1UhdAWk28PHDyE6k92wpRP84tbZ25J6JPtk5N%2FuuwRxjDY1YaHpQM5Tl8VO4K8w%2BDapUEzD8emUTrVNUO7AxXIRE%2FR5aGBmz%2BYvLCZX2hdzJVkoBjxyqlJ5XA1ybVgn1PgU%2BHhyQ2SzBWuk78s&X-Amz-Signature=0db682fe32cc36303874a48da5ccc5b119c3fbb4caae76a372aebf5f663ff402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNG7SQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEJ7fOvr31%2B78DILuyIrVx7q%2B3fzcEnu9RLRey11hwh0AiEAhQ8yqIzM0ntxnUQIA1z3ya8V6j1YSEK5eEt1jTh5bNUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMTyoXM9pcKqMfo5CrcA0sWBUvQwwxVfk2igc9MieTC4wT%2FX5g3yp%2BEP%2BCK0gr40LkqncuDh4YC%2BY0z3xWD0cS%2BrXx3o8ZJpyLxL3m3%2FjQocQTo2oVI1FXOALXvVRNEK8AklFlQw8kIXZjG%2BPAFEnGbJL7cMMAq1mUuWLqqIBec2UAxIf6FmbpzfFO%2BUW911sdvw0lMVskKEImHEI8awolEgff18A5w%2FFzizr8vfrnD3L0Tu1xq06HGnRDUqnzEv53Pac8gc7PKAaZuh0haPCrPIuEUz2r41NlHOgnMVygX%2BTJkMdpIKuiqQ8hqNmo0MOR2%2FyGSj2RrqD0eZP2RiIJ0yiRJTjaIhZhmNkf6JFDHMVeTjWwLriWwWqCd7ffWfzi%2Fefa7Y%2FJzm0WlY6%2BR49pSbpif6LXo3HAwHdKBa3NlxwoD%2B50JOzKH61Czp2NeDRtzGf9GbboVF36EroIVm%2FX9rlhq1J5HqsyvBXu%2FRh9Ij%2Fvl9rD9x6RhG%2FtJkkKzArLPDrB1JvzID%2BMy1gh8IJ8M330PgtXBXBCOUsRBIT0%2F0fU9SX%2Bt8v9%2B0OTrIJbl1FsCDDn7mH3%2BpcT%2FvifTCU%2BUg6j7XFQnb3IEiUm7yIDEvjCuw28272NalRxn6HyNlpnCA4czxH2mWTfYMJ6kmsQGOqUBgQQhZt3Zcy93yBeKJD0rycMBLwcdCI8Me47W5niph0GxLndytR8JBHQpXdzzaFTrA2EVRBX64N1UhdAWk28PHDyE6k92wpRP84tbZ25J6JPtk5N%2FuuwRxjDY1YaHpQM5Tl8VO4K8w%2BDapUEzD8emUTrVNUO7AxXIRE%2FR5aGBmz%2BYvLCZX2hdzJVkoBjxyqlJ5XA1ybVgn1PgU%2BHhyQ2SzBWuk78s&X-Amz-Signature=fc46524988388e2b974c619473d66bf4e132eb685f8d248d0e81cf412fe36e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
