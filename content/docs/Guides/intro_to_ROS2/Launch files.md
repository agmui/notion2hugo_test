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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2RE2P2E%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDb%2F9JECu3PqBbvzN0QEeFWDFKneUZx5cSFW74Bj61tvgIgNkpfSY0%2BjdKLQzAPgPdNANmf4R1TeHihfpBR%2FdgVXKUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDj4jjuROm6SyQZ14CrcA5feR1b3DMuEGk4nuHdW012qSQtwxKUrW1EqNcqR8G0oTdTBbRdx75IqUB3%2FHY%2Bg45FKDU%2BBw5%2BoGLQ0KnZztoLlJW7%2Fh6qinZDyxnKYadbhx6TvsLUBXubFmPWy5VwgpwU8H8ExL8zHm133vE%2FDq6eid057Saoj66%2B1fvWY1Cz3ZmuBbV0pIKq%2BPh6QVB8XzKsBbeE%2F%2FBYob30s4T%2Fd0lB3NjqNj8U%2F2SIw3ZdoB0YhfawQ%2FF%2Bsl1eh%2FR9x3W92mkYXSdcrEnT%2BBRgWpGgwRN1T%2BXpf2anYdCFY%2FtsACC1qMP6vq6HtH0zowDkJvnKGgph%2FknNsGYUMbOiRXQUh9ErHiEfi%2Bj4CyVZtFRGuTP7WtWhgkCoHESnT2FTTu8rWKB5kcL%2BJ9zWeog%2FFzooaAiwfjD9zkI1rz9oWrGklE%2FhSAVVRbV78Pwvqbfut36NS49tbNll4cuBccccFkY0GNqxGwoj%2FXHHBY0ntn0nVwvUTpPDFndGkd2MGPuv%2FfnMQERA3Yhc0x3ofjLlmA3LExCYqg1rT%2BPQhVJpFeffXEn7lHmGOygOshHA86Kh%2Fs7oEx5ThFk6kX9G2h5%2BJ47igvPd38FSxrohoXkNKndesy%2Bj%2BOnSahL4KweZTW5%2BWMNDsj70GOqUBcRDqExnrEwyJ9rznv4cB752j%2FzGbAKX38UkP6ODxEhZpecncp5oAzIHRIIMigWTfeJtnai89pDAQ1NH9tghR7NzpKg1wwZok2mT7S9xmfm4QDmSZKW4K8ntJJhC67Nw2LzW4%2BII%2Fcxu02%2Bewno%2BsJcc4A5BpscxLgPHkPozDCeTyGimuZ5tYanxJYnDS9fpGTwuXqG1gthCSA0Gr%2FK9aderGWWZF&X-Amz-Signature=64ad6bb433084d82b4dcbcf18eb64ec44a75089ca3e6076a40a6847bb30020c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2RE2P2E%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDb%2F9JECu3PqBbvzN0QEeFWDFKneUZx5cSFW74Bj61tvgIgNkpfSY0%2BjdKLQzAPgPdNANmf4R1TeHihfpBR%2FdgVXKUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDj4jjuROm6SyQZ14CrcA5feR1b3DMuEGk4nuHdW012qSQtwxKUrW1EqNcqR8G0oTdTBbRdx75IqUB3%2FHY%2Bg45FKDU%2BBw5%2BoGLQ0KnZztoLlJW7%2Fh6qinZDyxnKYadbhx6TvsLUBXubFmPWy5VwgpwU8H8ExL8zHm133vE%2FDq6eid057Saoj66%2B1fvWY1Cz3ZmuBbV0pIKq%2BPh6QVB8XzKsBbeE%2F%2FBYob30s4T%2Fd0lB3NjqNj8U%2F2SIw3ZdoB0YhfawQ%2FF%2Bsl1eh%2FR9x3W92mkYXSdcrEnT%2BBRgWpGgwRN1T%2BXpf2anYdCFY%2FtsACC1qMP6vq6HtH0zowDkJvnKGgph%2FknNsGYUMbOiRXQUh9ErHiEfi%2Bj4CyVZtFRGuTP7WtWhgkCoHESnT2FTTu8rWKB5kcL%2BJ9zWeog%2FFzooaAiwfjD9zkI1rz9oWrGklE%2FhSAVVRbV78Pwvqbfut36NS49tbNll4cuBccccFkY0GNqxGwoj%2FXHHBY0ntn0nVwvUTpPDFndGkd2MGPuv%2FfnMQERA3Yhc0x3ofjLlmA3LExCYqg1rT%2BPQhVJpFeffXEn7lHmGOygOshHA86Kh%2Fs7oEx5ThFk6kX9G2h5%2BJ47igvPd38FSxrohoXkNKndesy%2Bj%2BOnSahL4KweZTW5%2BWMNDsj70GOqUBcRDqExnrEwyJ9rznv4cB752j%2FzGbAKX38UkP6ODxEhZpecncp5oAzIHRIIMigWTfeJtnai89pDAQ1NH9tghR7NzpKg1wwZok2mT7S9xmfm4QDmSZKW4K8ntJJhC67Nw2LzW4%2BII%2Fcxu02%2Bewno%2BsJcc4A5BpscxLgPHkPozDCeTyGimuZ5tYanxJYnDS9fpGTwuXqG1gthCSA0Gr%2FK9aderGWWZF&X-Amz-Signature=133249e5f55d630c5b4215857fd88a8181d9e9a92a6de646e9a2df0b0e698f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2RE2P2E%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDb%2F9JECu3PqBbvzN0QEeFWDFKneUZx5cSFW74Bj61tvgIgNkpfSY0%2BjdKLQzAPgPdNANmf4R1TeHihfpBR%2FdgVXKUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDj4jjuROm6SyQZ14CrcA5feR1b3DMuEGk4nuHdW012qSQtwxKUrW1EqNcqR8G0oTdTBbRdx75IqUB3%2FHY%2Bg45FKDU%2BBw5%2BoGLQ0KnZztoLlJW7%2Fh6qinZDyxnKYadbhx6TvsLUBXubFmPWy5VwgpwU8H8ExL8zHm133vE%2FDq6eid057Saoj66%2B1fvWY1Cz3ZmuBbV0pIKq%2BPh6QVB8XzKsBbeE%2F%2FBYob30s4T%2Fd0lB3NjqNj8U%2F2SIw3ZdoB0YhfawQ%2FF%2Bsl1eh%2FR9x3W92mkYXSdcrEnT%2BBRgWpGgwRN1T%2BXpf2anYdCFY%2FtsACC1qMP6vq6HtH0zowDkJvnKGgph%2FknNsGYUMbOiRXQUh9ErHiEfi%2Bj4CyVZtFRGuTP7WtWhgkCoHESnT2FTTu8rWKB5kcL%2BJ9zWeog%2FFzooaAiwfjD9zkI1rz9oWrGklE%2FhSAVVRbV78Pwvqbfut36NS49tbNll4cuBccccFkY0GNqxGwoj%2FXHHBY0ntn0nVwvUTpPDFndGkd2MGPuv%2FfnMQERA3Yhc0x3ofjLlmA3LExCYqg1rT%2BPQhVJpFeffXEn7lHmGOygOshHA86Kh%2Fs7oEx5ThFk6kX9G2h5%2BJ47igvPd38FSxrohoXkNKndesy%2Bj%2BOnSahL4KweZTW5%2BWMNDsj70GOqUBcRDqExnrEwyJ9rznv4cB752j%2FzGbAKX38UkP6ODxEhZpecncp5oAzIHRIIMigWTfeJtnai89pDAQ1NH9tghR7NzpKg1wwZok2mT7S9xmfm4QDmSZKW4K8ntJJhC67Nw2LzW4%2BII%2Fcxu02%2Bewno%2BsJcc4A5BpscxLgPHkPozDCeTyGimuZ5tYanxJYnDS9fpGTwuXqG1gthCSA0Gr%2FK9aderGWWZF&X-Amz-Signature=014222f34c0938e13e1af7bf70d0c0fa5ba651b0ccbc1da6d4338eb7e30461dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
