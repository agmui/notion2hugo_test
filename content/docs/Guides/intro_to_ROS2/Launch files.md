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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGOQ3OBQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC6nTaQOTI3bj%2BtgE9DvY%2FebeuEu%2FQZxTMhZ6TLvSMtTwIhAPOw5bmrcp2RTEkFJ5%2FdRCf78L2Wy5RvJ6GusaXtZ3YhKv8DCDsQABoMNjM3NDIzMTgzODA1IgzfHi%2FvPmErs7hu4hcq3APsjW3xdWjPs2fGZ0tRW3D7bu3W0dWdSNdbP%2Bru8oQVNtsxV7z6GaveDRX1OymJcUtq4TgV7Tu3qQplAO%2FU4vCKl%2B43yCIlinHIgPoMyq8kNexZcctkmc2ql3qvC6O%2BPNR4wNbAYsAAPmi72iAT%2BDAykcH6r8I7wp5%2BbBx7NoV3R1pz3TMOX%2F4W42zIwaix8Rk2pk7zjDOn3BC9rgNSBLoXe7l4ZUGyRqCaVFtBmHmXPF1R0Zo5SUOIDqcxIKa8AjFcTMiIRIQEmNInzNGUwsP20OmDWHcE8SXHWEIo0rpHsUubXD9VIhVjOsC7%2FY%2BU%2F2PAwURyfawlcO%2F1P6Tq96pq1YLYqxAMrByBMwiaPmAbvxL4wlse7t%2FKXFerfo05GjG%2BKol9N058pGuRa4klQDM4cGoEs0syCVFo8HjorCfZl8MGxQFBYH%2FIGau5tm3QDkFEH3ZC0tGkiBv8M5uwkwhCotWlxBeLDYS6sq6pAK0Prwpt5vYeEiUJ6olzlhT0dvKBsYL4Y8M1UBulbxxbzhjYZ8ZfJ2oqp7pPAfajaYY4SNu3ZkPohVlteZ%2FaNLTLlBFtGzQ6%2FaVoumfDjFH1JdDjxBqMFzrtOTeFRZmP0%2FNExEEvMfOlUrEOfZ4uzzD6nc%2FBBjqkAVxRx1DYxzSumI9wkTGLIyZCXXp402CxSKvQtKEx17cA4%2BdqT75EUhKwv4fGemBZhNyfOnBQzczQBb0MGwBhNpyuxpSwKpp4S0q9BlIaTQpjoNDI%2BtnsBaUOlPy5YmEBnEoq14owFuQWw6%2FfTEKB0O5r%2FQuGDR%2B74CfU5Qa2dk9ELHo1ueMXSsCLoXMITiPfqd7o2S4obQBcJrZBWcknuagt69Tb&X-Amz-Signature=c644be3c1dd6afc373da1d2ff17c79bca67533844fa072502619aa0c7de42833&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGOQ3OBQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC6nTaQOTI3bj%2BtgE9DvY%2FebeuEu%2FQZxTMhZ6TLvSMtTwIhAPOw5bmrcp2RTEkFJ5%2FdRCf78L2Wy5RvJ6GusaXtZ3YhKv8DCDsQABoMNjM3NDIzMTgzODA1IgzfHi%2FvPmErs7hu4hcq3APsjW3xdWjPs2fGZ0tRW3D7bu3W0dWdSNdbP%2Bru8oQVNtsxV7z6GaveDRX1OymJcUtq4TgV7Tu3qQplAO%2FU4vCKl%2B43yCIlinHIgPoMyq8kNexZcctkmc2ql3qvC6O%2BPNR4wNbAYsAAPmi72iAT%2BDAykcH6r8I7wp5%2BbBx7NoV3R1pz3TMOX%2F4W42zIwaix8Rk2pk7zjDOn3BC9rgNSBLoXe7l4ZUGyRqCaVFtBmHmXPF1R0Zo5SUOIDqcxIKa8AjFcTMiIRIQEmNInzNGUwsP20OmDWHcE8SXHWEIo0rpHsUubXD9VIhVjOsC7%2FY%2BU%2F2PAwURyfawlcO%2F1P6Tq96pq1YLYqxAMrByBMwiaPmAbvxL4wlse7t%2FKXFerfo05GjG%2BKol9N058pGuRa4klQDM4cGoEs0syCVFo8HjorCfZl8MGxQFBYH%2FIGau5tm3QDkFEH3ZC0tGkiBv8M5uwkwhCotWlxBeLDYS6sq6pAK0Prwpt5vYeEiUJ6olzlhT0dvKBsYL4Y8M1UBulbxxbzhjYZ8ZfJ2oqp7pPAfajaYY4SNu3ZkPohVlteZ%2FaNLTLlBFtGzQ6%2FaVoumfDjFH1JdDjxBqMFzrtOTeFRZmP0%2FNExEEvMfOlUrEOfZ4uzzD6nc%2FBBjqkAVxRx1DYxzSumI9wkTGLIyZCXXp402CxSKvQtKEx17cA4%2BdqT75EUhKwv4fGemBZhNyfOnBQzczQBb0MGwBhNpyuxpSwKpp4S0q9BlIaTQpjoNDI%2BtnsBaUOlPy5YmEBnEoq14owFuQWw6%2FfTEKB0O5r%2FQuGDR%2B74CfU5Qa2dk9ELHo1ueMXSsCLoXMITiPfqd7o2S4obQBcJrZBWcknuagt69Tb&X-Amz-Signature=1f15e681fa2c90c76b1761a86e0f60676e0eb3bb1d3eae2513ce7ebd4abdb23f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGOQ3OBQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC6nTaQOTI3bj%2BtgE9DvY%2FebeuEu%2FQZxTMhZ6TLvSMtTwIhAPOw5bmrcp2RTEkFJ5%2FdRCf78L2Wy5RvJ6GusaXtZ3YhKv8DCDsQABoMNjM3NDIzMTgzODA1IgzfHi%2FvPmErs7hu4hcq3APsjW3xdWjPs2fGZ0tRW3D7bu3W0dWdSNdbP%2Bru8oQVNtsxV7z6GaveDRX1OymJcUtq4TgV7Tu3qQplAO%2FU4vCKl%2B43yCIlinHIgPoMyq8kNexZcctkmc2ql3qvC6O%2BPNR4wNbAYsAAPmi72iAT%2BDAykcH6r8I7wp5%2BbBx7NoV3R1pz3TMOX%2F4W42zIwaix8Rk2pk7zjDOn3BC9rgNSBLoXe7l4ZUGyRqCaVFtBmHmXPF1R0Zo5SUOIDqcxIKa8AjFcTMiIRIQEmNInzNGUwsP20OmDWHcE8SXHWEIo0rpHsUubXD9VIhVjOsC7%2FY%2BU%2F2PAwURyfawlcO%2F1P6Tq96pq1YLYqxAMrByBMwiaPmAbvxL4wlse7t%2FKXFerfo05GjG%2BKol9N058pGuRa4klQDM4cGoEs0syCVFo8HjorCfZl8MGxQFBYH%2FIGau5tm3QDkFEH3ZC0tGkiBv8M5uwkwhCotWlxBeLDYS6sq6pAK0Prwpt5vYeEiUJ6olzlhT0dvKBsYL4Y8M1UBulbxxbzhjYZ8ZfJ2oqp7pPAfajaYY4SNu3ZkPohVlteZ%2FaNLTLlBFtGzQ6%2FaVoumfDjFH1JdDjxBqMFzrtOTeFRZmP0%2FNExEEvMfOlUrEOfZ4uzzD6nc%2FBBjqkAVxRx1DYxzSumI9wkTGLIyZCXXp402CxSKvQtKEx17cA4%2BdqT75EUhKwv4fGemBZhNyfOnBQzczQBb0MGwBhNpyuxpSwKpp4S0q9BlIaTQpjoNDI%2BtnsBaUOlPy5YmEBnEoq14owFuQWw6%2FfTEKB0O5r%2FQuGDR%2B74CfU5Qa2dk9ELHo1ueMXSsCLoXMITiPfqd7o2S4obQBcJrZBWcknuagt69Tb&X-Amz-Signature=683ffee6e6264442210e887d078a9cb403ca6c2cf97f4fa14707436bfdedc8be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
