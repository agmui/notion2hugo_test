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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIUBSDX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxa1VrLhS3cw9T2GRSBTT2BwpXTsT0SkEUv7ZSzCLnEQIgGcidyIbhK9Mvn8qOViFMJcHHRoSMCffO%2FrtDIykX360q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKWT2kZ6ZDTS7Ov0fCrcA33q15kCtwHNKkZbxklvrJCmumZcpswy2UZBIMlfnKH67RkJ%2BGCI%2FctFIhjNtcJ9TcjpTOZDmL7PGiZOG24%2Bz9eiCEULFqBtSvT0Wc%2BE0hvOWGhDFuLIvWD%2FJnqhcClCr6MZaGQtqX73J9yIsMDtTYg7AVoWAAB9fkHoRfpfrgmhGTEgPC7C6s%2B%2FgadenI5VVvr8ZBJDnT5uV%2BOsLOqL85oopP7BhEx8bOg426tKFuGAWtQf3AI6yOWNsiT7uPPSLl%2Bmjf6PbA5cEBsMZNpf%2FgNSqFEjzEEnAHTJAo9gu3YLT5fjsakaV8jjMlX18cqxMLmk02T8dXzXZsRSWz9B9yxV9LWmM%2FLy5HbIruxhD7OarRxZEicPVsk1RLiThg%2BE17nrconDXekbPKDGzbXhaT0qUd2nlpSNgBTO7YGxGN6t6VUyse4XM9rLmf5ShlL%2F10acI6HGiqZfzS%2BB13NIk6p5uhXaXwYqKxkwKMhJ3eXBTU5xCAbjsTxZ%2FYL925EMGj4J%2FEsr%2BB2pNgnkA5DRJFRu74%2B5%2FeztJvSTBqtReRLcgEj61XrMu9W03IzpKr%2FGm2RYqlKHcQpYnhDo%2BjIzRAUgIRxEq6CpxAwMPqStbAGkVfgANESKva6VA3paMKDrjr8GOqUBGruu3A6hJsQK6laJiJOzqo1d8DUzjPmCReXasWbJDPIiPRekXj3chr9p6UJyp1Rmp3THGu2FNJkYeRAMfqjqlZk8g7RNyHzT1jfvT%2BxX2XuZoiMtgHcee6Wdl0lxYF6X%2Fak3%2BBykszpcIcaGWjYyHXcve%2FQdVO4otkz2MOYkZgQHMUd8w9Y415lOW067D%2FAhvidIvRtXIJ6T%2FPsqhWFs7oSADKy8&X-Amz-Signature=c3b492e65229effe01ebb810dd47e635f0088adf214e19a0303f912b975c541a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIUBSDX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxa1VrLhS3cw9T2GRSBTT2BwpXTsT0SkEUv7ZSzCLnEQIgGcidyIbhK9Mvn8qOViFMJcHHRoSMCffO%2FrtDIykX360q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKWT2kZ6ZDTS7Ov0fCrcA33q15kCtwHNKkZbxklvrJCmumZcpswy2UZBIMlfnKH67RkJ%2BGCI%2FctFIhjNtcJ9TcjpTOZDmL7PGiZOG24%2Bz9eiCEULFqBtSvT0Wc%2BE0hvOWGhDFuLIvWD%2FJnqhcClCr6MZaGQtqX73J9yIsMDtTYg7AVoWAAB9fkHoRfpfrgmhGTEgPC7C6s%2B%2FgadenI5VVvr8ZBJDnT5uV%2BOsLOqL85oopP7BhEx8bOg426tKFuGAWtQf3AI6yOWNsiT7uPPSLl%2Bmjf6PbA5cEBsMZNpf%2FgNSqFEjzEEnAHTJAo9gu3YLT5fjsakaV8jjMlX18cqxMLmk02T8dXzXZsRSWz9B9yxV9LWmM%2FLy5HbIruxhD7OarRxZEicPVsk1RLiThg%2BE17nrconDXekbPKDGzbXhaT0qUd2nlpSNgBTO7YGxGN6t6VUyse4XM9rLmf5ShlL%2F10acI6HGiqZfzS%2BB13NIk6p5uhXaXwYqKxkwKMhJ3eXBTU5xCAbjsTxZ%2FYL925EMGj4J%2FEsr%2BB2pNgnkA5DRJFRu74%2B5%2FeztJvSTBqtReRLcgEj61XrMu9W03IzpKr%2FGm2RYqlKHcQpYnhDo%2BjIzRAUgIRxEq6CpxAwMPqStbAGkVfgANESKva6VA3paMKDrjr8GOqUBGruu3A6hJsQK6laJiJOzqo1d8DUzjPmCReXasWbJDPIiPRekXj3chr9p6UJyp1Rmp3THGu2FNJkYeRAMfqjqlZk8g7RNyHzT1jfvT%2BxX2XuZoiMtgHcee6Wdl0lxYF6X%2Fak3%2BBykszpcIcaGWjYyHXcve%2FQdVO4otkz2MOYkZgQHMUd8w9Y415lOW067D%2FAhvidIvRtXIJ6T%2FPsqhWFs7oSADKy8&X-Amz-Signature=aa58311836f672213260cac407e9092e8396be68f776800908183cc8fab66f81&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIUBSDX%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxa1VrLhS3cw9T2GRSBTT2BwpXTsT0SkEUv7ZSzCLnEQIgGcidyIbhK9Mvn8qOViFMJcHHRoSMCffO%2FrtDIykX360q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKWT2kZ6ZDTS7Ov0fCrcA33q15kCtwHNKkZbxklvrJCmumZcpswy2UZBIMlfnKH67RkJ%2BGCI%2FctFIhjNtcJ9TcjpTOZDmL7PGiZOG24%2Bz9eiCEULFqBtSvT0Wc%2BE0hvOWGhDFuLIvWD%2FJnqhcClCr6MZaGQtqX73J9yIsMDtTYg7AVoWAAB9fkHoRfpfrgmhGTEgPC7C6s%2B%2FgadenI5VVvr8ZBJDnT5uV%2BOsLOqL85oopP7BhEx8bOg426tKFuGAWtQf3AI6yOWNsiT7uPPSLl%2Bmjf6PbA5cEBsMZNpf%2FgNSqFEjzEEnAHTJAo9gu3YLT5fjsakaV8jjMlX18cqxMLmk02T8dXzXZsRSWz9B9yxV9LWmM%2FLy5HbIruxhD7OarRxZEicPVsk1RLiThg%2BE17nrconDXekbPKDGzbXhaT0qUd2nlpSNgBTO7YGxGN6t6VUyse4XM9rLmf5ShlL%2F10acI6HGiqZfzS%2BB13NIk6p5uhXaXwYqKxkwKMhJ3eXBTU5xCAbjsTxZ%2FYL925EMGj4J%2FEsr%2BB2pNgnkA5DRJFRu74%2B5%2FeztJvSTBqtReRLcgEj61XrMu9W03IzpKr%2FGm2RYqlKHcQpYnhDo%2BjIzRAUgIRxEq6CpxAwMPqStbAGkVfgANESKva6VA3paMKDrjr8GOqUBGruu3A6hJsQK6laJiJOzqo1d8DUzjPmCReXasWbJDPIiPRekXj3chr9p6UJyp1Rmp3THGu2FNJkYeRAMfqjqlZk8g7RNyHzT1jfvT%2BxX2XuZoiMtgHcee6Wdl0lxYF6X%2Fak3%2BBykszpcIcaGWjYyHXcve%2FQdVO4otkz2MOYkZgQHMUd8w9Y415lOW067D%2FAhvidIvRtXIJ6T%2FPsqhWFs7oSADKy8&X-Amz-Signature=509f850aa4555dccd2f5d8f383c44d34ae4beaa3fd9b294bab023d8215f426ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
