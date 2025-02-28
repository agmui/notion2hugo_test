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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X32J75N%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGC1%2BRuR5wec7pVF6aHOQXxlBkt2pWY1DrkI%2FeUk7YqJAiEA%2FX47pp5%2BEBGildbBciOAjkE9Mn%2BtmrDJEX%2Fq3qM5Z2sqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuFpvkU%2BvNc1l%2BV%2BircA59B2hsojf4vUmJmhZ%2BvdYjLRn94TqrckTuZtN1MRQa9mXsJ14e1aL%2FQq9x9jC4ymIgTJD32yFmX7a%2FpgS%2BjZad%2FtE1CBmRzXowC4MLNGYj%2F%2FqRf1e6e3BW8tsjWdPG6UHOAxAqZIhdbOrnXwe7bZs7nsFdGdi7UjWvfM4JhvferqgidammLcqJKXjJ3qvza1eua1F5yTwEhhjpgR2OtANodeF3YSP0DsYjYbqMSbnoIFh9fB1cmlZ6uHjNsJ33GAsIGeh0egskkTpa55HbhUY4BIMeV2Aw2aT0rQsFlrtXbO9yzW92FO3xcT12%2F5O7f%2FBNx9LD5B6exnDQ9kM5j0pKHDBGbBxJn%2B7%2Fh60BkEe%2FuTO%2FGbDs%2FlzQ9LDVTucX1wQbcezxDImgug%2BoTbeHZoVBnSuvCfnKRroTBSkQQQHci1rJsMEOB4y7aYwmqCJCOX9Ua87cMNRTfDQOaVORGlqV%2Bkhu7YrWpY1yscfH2suRjDhE6pL9PdE5NMCB0yKyFShXUkbouDxyNMtkKJ7VZydl7l3TnxZPVCrmGTmHRqfBnkgjSv2amVCFSXYBAPOeUPkZeaqMuHBXfBb2oJUZ2YuUsSKjQcn9IDuXtqLaF%2Bieia2CH5cIcaLfklTGAMPCLiL4GOqUBxRJ1qwz7KqhC%2BlNtUvJ%2Bj9PTTnWCLaO9PLXdDpvunSTw%2BoQMiFPiiWhJmPalik60S5FOPIue3m2frrhxjLrH6Uvh0qCryznKUFU8jGmxTnk1lNKe%2BHbqSUbkSZxNDkikT%2FKT8V3rWGS8bNpj%2BedePj6F9teOVxh8Ao0NR0qA2MoBBm2%2BGKOdkekB%2ByBgemAuWL8PeR5SoW817Q%2BzqEvlfx7yDMyv&X-Amz-Signature=1f4da9abea8dd582b7d102db16267e2aa72ab5cd198f0b047ee69cf98ac320c3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X32J75N%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGC1%2BRuR5wec7pVF6aHOQXxlBkt2pWY1DrkI%2FeUk7YqJAiEA%2FX47pp5%2BEBGildbBciOAjkE9Mn%2BtmrDJEX%2Fq3qM5Z2sqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuFpvkU%2BvNc1l%2BV%2BircA59B2hsojf4vUmJmhZ%2BvdYjLRn94TqrckTuZtN1MRQa9mXsJ14e1aL%2FQq9x9jC4ymIgTJD32yFmX7a%2FpgS%2BjZad%2FtE1CBmRzXowC4MLNGYj%2F%2FqRf1e6e3BW8tsjWdPG6UHOAxAqZIhdbOrnXwe7bZs7nsFdGdi7UjWvfM4JhvferqgidammLcqJKXjJ3qvza1eua1F5yTwEhhjpgR2OtANodeF3YSP0DsYjYbqMSbnoIFh9fB1cmlZ6uHjNsJ33GAsIGeh0egskkTpa55HbhUY4BIMeV2Aw2aT0rQsFlrtXbO9yzW92FO3xcT12%2F5O7f%2FBNx9LD5B6exnDQ9kM5j0pKHDBGbBxJn%2B7%2Fh60BkEe%2FuTO%2FGbDs%2FlzQ9LDVTucX1wQbcezxDImgug%2BoTbeHZoVBnSuvCfnKRroTBSkQQQHci1rJsMEOB4y7aYwmqCJCOX9Ua87cMNRTfDQOaVORGlqV%2Bkhu7YrWpY1yscfH2suRjDhE6pL9PdE5NMCB0yKyFShXUkbouDxyNMtkKJ7VZydl7l3TnxZPVCrmGTmHRqfBnkgjSv2amVCFSXYBAPOeUPkZeaqMuHBXfBb2oJUZ2YuUsSKjQcn9IDuXtqLaF%2Bieia2CH5cIcaLfklTGAMPCLiL4GOqUBxRJ1qwz7KqhC%2BlNtUvJ%2Bj9PTTnWCLaO9PLXdDpvunSTw%2BoQMiFPiiWhJmPalik60S5FOPIue3m2frrhxjLrH6Uvh0qCryznKUFU8jGmxTnk1lNKe%2BHbqSUbkSZxNDkikT%2FKT8V3rWGS8bNpj%2BedePj6F9teOVxh8Ao0NR0qA2MoBBm2%2BGKOdkekB%2ByBgemAuWL8PeR5SoW817Q%2BzqEvlfx7yDMyv&X-Amz-Signature=1fa20b6c18f4173bf075391ef4e49fff9e5f80b60573a5aaf1c08b703b8f7220&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X32J75N%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGC1%2BRuR5wec7pVF6aHOQXxlBkt2pWY1DrkI%2FeUk7YqJAiEA%2FX47pp5%2BEBGildbBciOAjkE9Mn%2BtmrDJEX%2Fq3qM5Z2sqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuFpvkU%2BvNc1l%2BV%2BircA59B2hsojf4vUmJmhZ%2BvdYjLRn94TqrckTuZtN1MRQa9mXsJ14e1aL%2FQq9x9jC4ymIgTJD32yFmX7a%2FpgS%2BjZad%2FtE1CBmRzXowC4MLNGYj%2F%2FqRf1e6e3BW8tsjWdPG6UHOAxAqZIhdbOrnXwe7bZs7nsFdGdi7UjWvfM4JhvferqgidammLcqJKXjJ3qvza1eua1F5yTwEhhjpgR2OtANodeF3YSP0DsYjYbqMSbnoIFh9fB1cmlZ6uHjNsJ33GAsIGeh0egskkTpa55HbhUY4BIMeV2Aw2aT0rQsFlrtXbO9yzW92FO3xcT12%2F5O7f%2FBNx9LD5B6exnDQ9kM5j0pKHDBGbBxJn%2B7%2Fh60BkEe%2FuTO%2FGbDs%2FlzQ9LDVTucX1wQbcezxDImgug%2BoTbeHZoVBnSuvCfnKRroTBSkQQQHci1rJsMEOB4y7aYwmqCJCOX9Ua87cMNRTfDQOaVORGlqV%2Bkhu7YrWpY1yscfH2suRjDhE6pL9PdE5NMCB0yKyFShXUkbouDxyNMtkKJ7VZydl7l3TnxZPVCrmGTmHRqfBnkgjSv2amVCFSXYBAPOeUPkZeaqMuHBXfBb2oJUZ2YuUsSKjQcn9IDuXtqLaF%2Bieia2CH5cIcaLfklTGAMPCLiL4GOqUBxRJ1qwz7KqhC%2BlNtUvJ%2Bj9PTTnWCLaO9PLXdDpvunSTw%2BoQMiFPiiWhJmPalik60S5FOPIue3m2frrhxjLrH6Uvh0qCryznKUFU8jGmxTnk1lNKe%2BHbqSUbkSZxNDkikT%2FKT8V3rWGS8bNpj%2BedePj6F9teOVxh8Ao0NR0qA2MoBBm2%2BGKOdkekB%2ByBgemAuWL8PeR5SoW817Q%2BzqEvlfx7yDMyv&X-Amz-Signature=d3e6dcb0c353410e84e9cfb6c115676507284e38a29bf97ef6c41dd3a96ea7a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
