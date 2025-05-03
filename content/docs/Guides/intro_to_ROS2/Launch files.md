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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTOSYGX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIH6lbX3BlQ3fAW%2FJOySR9OmQPzqGPRr6mIiPh53l9L8PAiEA0V2H1y8VvJ%2F%2FN2PwBN2iNaxUc%2FsJhY%2B0dskI5pm92SQqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG0Xwq5UWEq9C0TyCrcAxZujWDmrDiQAUNnM5ZSflg4qIOt1N0Xo1EcM%2B8odWxXv%2BexbsEKp8wfByl9nTOIGDpBs3Yr5qEc3W%2BH2mRHAh9f5Ef40zDDdE6u2z1eX4W8EK6%2BZ76HU%2B5XUXdi8HQqKY4f7HAqdixiy4yhCVKc5KGalsAdXccKmTyNcqp909Q5AkPwbws4cZGfocESJddRJqKHzYAwfoiRg3UMhtguu%2FicxLrEHqB%2FM9K%2FJB3LDYQxlDnCPgyrZeQvCbkCdFDBhwUHpvKP8hOkvlS00phi%2FkCXGrktBs8k83CklSs5cbS%2FY5oBX%2FMy%2FUCnu81X5D0CIS%2F9ZudZQ8V%2FYTt%2BHSRttplj9OBumZo%2FcqxeOQ0dYLfKU%2Ff%2BT8%2FGI2BbU3SMNTN3NHalnaYgvQiRjlP9qNfXFxk7okcBLww7ORyKftbPiKUSWE2dO18aUlJjHU7Dzkh%2FaHJ415GbwkldIieQG1rkLMl9MiKCSaTGPPVwejlhTzn7%2BetJuLHLA%2FEt6YbqXhOeFrDFkumi%2Bz0WeAVbimU7igxwFiw4lb8Ku2OWvjj5pXa%2BgT%2BdmHU3vNNb8AdjGSqN1c%2BXp222qYAdAANPeTwcivwTGyhKhNB3AUJno5zCAecfJ0QcpdPszhRPk69EMKba2cAGOqUBZWudA4oewfsGBCABRR2Zx24il6Y4B40Xw1MA9X6rCOcYZcWd7W2AROOqiJ7pCXFmZth%2BGOMoWFAdsA81suHqqN2lE2jbh2tlKBZosQ5dphiNWT%2B4V6uadL6jr3TzWtj%2FWKXspZGp9OjVpyTVbDkS1qIpGKq5q0ncJEbnG8wfoMMnP89zBySNyrEfrPAtACVrCoNx5%2FgCqe6jPLCub9DoQUcLdbM1&X-Amz-Signature=042cd919829a466f135349ff1144a6a73813edbc2682a04290480249c6c4f7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTOSYGX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIH6lbX3BlQ3fAW%2FJOySR9OmQPzqGPRr6mIiPh53l9L8PAiEA0V2H1y8VvJ%2F%2FN2PwBN2iNaxUc%2FsJhY%2B0dskI5pm92SQqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG0Xwq5UWEq9C0TyCrcAxZujWDmrDiQAUNnM5ZSflg4qIOt1N0Xo1EcM%2B8odWxXv%2BexbsEKp8wfByl9nTOIGDpBs3Yr5qEc3W%2BH2mRHAh9f5Ef40zDDdE6u2z1eX4W8EK6%2BZ76HU%2B5XUXdi8HQqKY4f7HAqdixiy4yhCVKc5KGalsAdXccKmTyNcqp909Q5AkPwbws4cZGfocESJddRJqKHzYAwfoiRg3UMhtguu%2FicxLrEHqB%2FM9K%2FJB3LDYQxlDnCPgyrZeQvCbkCdFDBhwUHpvKP8hOkvlS00phi%2FkCXGrktBs8k83CklSs5cbS%2FY5oBX%2FMy%2FUCnu81X5D0CIS%2F9ZudZQ8V%2FYTt%2BHSRttplj9OBumZo%2FcqxeOQ0dYLfKU%2Ff%2BT8%2FGI2BbU3SMNTN3NHalnaYgvQiRjlP9qNfXFxk7okcBLww7ORyKftbPiKUSWE2dO18aUlJjHU7Dzkh%2FaHJ415GbwkldIieQG1rkLMl9MiKCSaTGPPVwejlhTzn7%2BetJuLHLA%2FEt6YbqXhOeFrDFkumi%2Bz0WeAVbimU7igxwFiw4lb8Ku2OWvjj5pXa%2BgT%2BdmHU3vNNb8AdjGSqN1c%2BXp222qYAdAANPeTwcivwTGyhKhNB3AUJno5zCAecfJ0QcpdPszhRPk69EMKba2cAGOqUBZWudA4oewfsGBCABRR2Zx24il6Y4B40Xw1MA9X6rCOcYZcWd7W2AROOqiJ7pCXFmZth%2BGOMoWFAdsA81suHqqN2lE2jbh2tlKBZosQ5dphiNWT%2B4V6uadL6jr3TzWtj%2FWKXspZGp9OjVpyTVbDkS1qIpGKq5q0ncJEbnG8wfoMMnP89zBySNyrEfrPAtACVrCoNx5%2FgCqe6jPLCub9DoQUcLdbM1&X-Amz-Signature=95b3b4df6b347ba96edb20880f4d03e04d9d4ddab5676739f38c747aea0cb8d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WTOSYGX%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIH6lbX3BlQ3fAW%2FJOySR9OmQPzqGPRr6mIiPh53l9L8PAiEA0V2H1y8VvJ%2F%2FN2PwBN2iNaxUc%2FsJhY%2B0dskI5pm92SQqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBG0Xwq5UWEq9C0TyCrcAxZujWDmrDiQAUNnM5ZSflg4qIOt1N0Xo1EcM%2B8odWxXv%2BexbsEKp8wfByl9nTOIGDpBs3Yr5qEc3W%2BH2mRHAh9f5Ef40zDDdE6u2z1eX4W8EK6%2BZ76HU%2B5XUXdi8HQqKY4f7HAqdixiy4yhCVKc5KGalsAdXccKmTyNcqp909Q5AkPwbws4cZGfocESJddRJqKHzYAwfoiRg3UMhtguu%2FicxLrEHqB%2FM9K%2FJB3LDYQxlDnCPgyrZeQvCbkCdFDBhwUHpvKP8hOkvlS00phi%2FkCXGrktBs8k83CklSs5cbS%2FY5oBX%2FMy%2FUCnu81X5D0CIS%2F9ZudZQ8V%2FYTt%2BHSRttplj9OBumZo%2FcqxeOQ0dYLfKU%2Ff%2BT8%2FGI2BbU3SMNTN3NHalnaYgvQiRjlP9qNfXFxk7okcBLww7ORyKftbPiKUSWE2dO18aUlJjHU7Dzkh%2FaHJ415GbwkldIieQG1rkLMl9MiKCSaTGPPVwejlhTzn7%2BetJuLHLA%2FEt6YbqXhOeFrDFkumi%2Bz0WeAVbimU7igxwFiw4lb8Ku2OWvjj5pXa%2BgT%2BdmHU3vNNb8AdjGSqN1c%2BXp222qYAdAANPeTwcivwTGyhKhNB3AUJno5zCAecfJ0QcpdPszhRPk69EMKba2cAGOqUBZWudA4oewfsGBCABRR2Zx24il6Y4B40Xw1MA9X6rCOcYZcWd7W2AROOqiJ7pCXFmZth%2BGOMoWFAdsA81suHqqN2lE2jbh2tlKBZosQ5dphiNWT%2B4V6uadL6jr3TzWtj%2FWKXspZGp9OjVpyTVbDkS1qIpGKq5q0ncJEbnG8wfoMMnP89zBySNyrEfrPAtACVrCoNx5%2FgCqe6jPLCub9DoQUcLdbM1&X-Amz-Signature=7e8a607362bb43abf48ad9da754430a766165803a5bf74ec54804787c25dc241&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
