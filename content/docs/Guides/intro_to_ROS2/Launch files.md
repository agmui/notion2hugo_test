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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MUFUSZ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmKS%2BCqjQlV2t9Jld4UKPHNM8Dh%2FUkrrsq9AMGn6NvRAiEAxBc2c8SeC%2FRstthfrjVZM4%2Fy5TWT5krZtjgj4ggdJ7oqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQzawlhOXYZXRC1mCrcAw70UmXcdhORg0oDjhZ4FfjNJPvxCj%2BSU0Gn03ZIJ%2Fi92OumBxejs3NAm1xOJPzh%2FhOKF%2Fvn3zyPYctF7ZCLu0crV5FPkKsVgRu1StUdHqo7PNbvpIJCCy%2F3nFqkPEsemfuVk3KSjr3QJAxpJvvyKkEvhLI1mutN2e1UzC%2FFAX7UFd%2FzSJuIf7uC4Ipdf7J%2BoZondfC1s737r4jLyT1kPZ5wIYpxD6BM9AHM8Ibl6nMRH9qjSDfyjGdGnaKbr8IFkocnbzb260NnhSg5hxuNcxUXrWjPKGidaH6LGtsiCODCEUIe1H9GKtA4UTXFSDMy%2FyfLiL3Mkm2eZZpilFha%2Fox04Gbjgc9CLAJvO21GCAcgOvd5Ggn6USuVkJAgjQS3OgepjmhyIsJfGXnBoH6HopcjSjQy1nKSOJE0Cu4W2e3f150PrI8sWJ2PxjIdlpd%2BDYPiQ9zrCPlPFDeArb1LtDSyGvg1dbb8cLdMHK69rKmsDV8CqwbS%2BOsEZRLZQVG74oS39BXRItUtvbqzbHm43wFAeS0IgE6AxFf3aj9S5UQI2tJGymY9JoBYGfx9YhQGmETHVSDOS0o1CDt%2BXs2KsbPF%2BexmkJudM%2F4R9tGqqapnWxPbjFHEzYazo4ysMKSZrMQGOqUBsDxC0AJ5X5FhzIJcAIroEgvBlwZ%2FdXgwePZRVcT1abpNon9tTF0qoI7juTUdAsUcSA4uDu4xCHkQI5Rheq1lYZinz69FsuSAfAk0ytHV%2BQANuSYgt%2Bux5zrCwIsIARZI6fobl1a7AGgw2aP7knmrvExqsIxjUBRB2%2BW%2BxBCny1PYDSA1LqjTNtw3ulSI3xnApuCdbdXsDZ75WcpNmokAs7Ix04u4&X-Amz-Signature=775ee83d513ac0406d94f31bcb8d0ed4ca860a618aac75878eb593d92675a65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MUFUSZ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmKS%2BCqjQlV2t9Jld4UKPHNM8Dh%2FUkrrsq9AMGn6NvRAiEAxBc2c8SeC%2FRstthfrjVZM4%2Fy5TWT5krZtjgj4ggdJ7oqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQzawlhOXYZXRC1mCrcAw70UmXcdhORg0oDjhZ4FfjNJPvxCj%2BSU0Gn03ZIJ%2Fi92OumBxejs3NAm1xOJPzh%2FhOKF%2Fvn3zyPYctF7ZCLu0crV5FPkKsVgRu1StUdHqo7PNbvpIJCCy%2F3nFqkPEsemfuVk3KSjr3QJAxpJvvyKkEvhLI1mutN2e1UzC%2FFAX7UFd%2FzSJuIf7uC4Ipdf7J%2BoZondfC1s737r4jLyT1kPZ5wIYpxD6BM9AHM8Ibl6nMRH9qjSDfyjGdGnaKbr8IFkocnbzb260NnhSg5hxuNcxUXrWjPKGidaH6LGtsiCODCEUIe1H9GKtA4UTXFSDMy%2FyfLiL3Mkm2eZZpilFha%2Fox04Gbjgc9CLAJvO21GCAcgOvd5Ggn6USuVkJAgjQS3OgepjmhyIsJfGXnBoH6HopcjSjQy1nKSOJE0Cu4W2e3f150PrI8sWJ2PxjIdlpd%2BDYPiQ9zrCPlPFDeArb1LtDSyGvg1dbb8cLdMHK69rKmsDV8CqwbS%2BOsEZRLZQVG74oS39BXRItUtvbqzbHm43wFAeS0IgE6AxFf3aj9S5UQI2tJGymY9JoBYGfx9YhQGmETHVSDOS0o1CDt%2BXs2KsbPF%2BexmkJudM%2F4R9tGqqapnWxPbjFHEzYazo4ysMKSZrMQGOqUBsDxC0AJ5X5FhzIJcAIroEgvBlwZ%2FdXgwePZRVcT1abpNon9tTF0qoI7juTUdAsUcSA4uDu4xCHkQI5Rheq1lYZinz69FsuSAfAk0ytHV%2BQANuSYgt%2Bux5zrCwIsIARZI6fobl1a7AGgw2aP7knmrvExqsIxjUBRB2%2BW%2BxBCny1PYDSA1LqjTNtw3ulSI3xnApuCdbdXsDZ75WcpNmokAs7Ix04u4&X-Amz-Signature=51cc5fb76531a51d9c24cf326398ca8a74e81b7790066b3ec8cd3aad5b1cb574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MUFUSZ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmKS%2BCqjQlV2t9Jld4UKPHNM8Dh%2FUkrrsq9AMGn6NvRAiEAxBc2c8SeC%2FRstthfrjVZM4%2Fy5TWT5krZtjgj4ggdJ7oqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQzawlhOXYZXRC1mCrcAw70UmXcdhORg0oDjhZ4FfjNJPvxCj%2BSU0Gn03ZIJ%2Fi92OumBxejs3NAm1xOJPzh%2FhOKF%2Fvn3zyPYctF7ZCLu0crV5FPkKsVgRu1StUdHqo7PNbvpIJCCy%2F3nFqkPEsemfuVk3KSjr3QJAxpJvvyKkEvhLI1mutN2e1UzC%2FFAX7UFd%2FzSJuIf7uC4Ipdf7J%2BoZondfC1s737r4jLyT1kPZ5wIYpxD6BM9AHM8Ibl6nMRH9qjSDfyjGdGnaKbr8IFkocnbzb260NnhSg5hxuNcxUXrWjPKGidaH6LGtsiCODCEUIe1H9GKtA4UTXFSDMy%2FyfLiL3Mkm2eZZpilFha%2Fox04Gbjgc9CLAJvO21GCAcgOvd5Ggn6USuVkJAgjQS3OgepjmhyIsJfGXnBoH6HopcjSjQy1nKSOJE0Cu4W2e3f150PrI8sWJ2PxjIdlpd%2BDYPiQ9zrCPlPFDeArb1LtDSyGvg1dbb8cLdMHK69rKmsDV8CqwbS%2BOsEZRLZQVG74oS39BXRItUtvbqzbHm43wFAeS0IgE6AxFf3aj9S5UQI2tJGymY9JoBYGfx9YhQGmETHVSDOS0o1CDt%2BXs2KsbPF%2BexmkJudM%2F4R9tGqqapnWxPbjFHEzYazo4ysMKSZrMQGOqUBsDxC0AJ5X5FhzIJcAIroEgvBlwZ%2FdXgwePZRVcT1abpNon9tTF0qoI7juTUdAsUcSA4uDu4xCHkQI5Rheq1lYZinz69FsuSAfAk0ytHV%2BQANuSYgt%2Bux5zrCwIsIARZI6fobl1a7AGgw2aP7knmrvExqsIxjUBRB2%2BW%2BxBCny1PYDSA1LqjTNtw3ulSI3xnApuCdbdXsDZ75WcpNmokAs7Ix04u4&X-Amz-Signature=ef3fa2be59f765e88f16d5838adc2b4f1c04a3c501154a4cc9533d4a024ad1aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
