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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVNSZ3G%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFPay4ho%2FLUAtT1Cju%2FFkqGKRwZm7ejR%2BiuTm516I9ORAiEA4pS7HkZCft%2BCMpi4CGSsnAD6%2BEfwOrTD7QEDkYL5wE8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFl0G2mn8r%2F2cAj%2FICrcA7TGLFeS92M2YPSaP%2FywIrOsc3PkZ%2FkLfEGUBwibhYSLM9RJkAKkpyLm0pGTiXD8efZjiIfU%2BShgZtEKSh6vSX%2F2z2JBL5b72fWCU2d5VyzFN0ADXK0%2FwjowsOkg04RIrgf1XJ92RlupqHXLqx5wI5f%2BdXILijXquWenC%2FS4sdieK97BYaJZFVrwVLudWx1BJNlhk3IeW8V0dFwguOHGGU%2FFFjRUU50VrmBasxWArNhX8cAQa2MlB8%2Fqg89wTXottFTIR6cGrmyEf1GNnopSXwe73nWiXn2WpRlrG%2B4b1cQRDmj4KecbAlf%2BWWIF41mBDclZaBLFgXhKx9%2B4qI81w5Cd0WIyQVa%2B99Vf%2FR9CIZWf0WhN86pwkxB1058gImNabWfz%2BeE3gsN%2FvGZNNZjRfxL3Nn%2BbNbgp1Po2aVAkcZCakdtgBVODEAalw%2FU3JRGwvJmGM4ouyDard8edvxssrzk0wt%2FioSNXdY0qY9BHf69%2Fc%2FMrbZVvtNtyAuJ2jpL7u1qylKbc0YkMlWdyQBAaAwqXCMGJnc8LaOV%2FRTeoko2HhZ0O7%2BzHf3nyg8Aqb25zlSNlbRJZrBGxIli89LsAOSvKDxElYamQcq4Gu1JjKXgUtmQcNsXrNMRM5qF7MN74nMAGOqUBuIiRbLWuoibxsDymEnvauQbFhbVeeFBUdhRUlN85o8mz4ny705TpHN1XG3X7oyT6hu4CWKtuhG2z%2BoNKKEWJi008hJQonTWnmXUqlTv5LLBJpa3caWdqUZEU1BNckvxTDPsemPfp5j7uSh3wHTMoY6RwjmWqG8FluXY5OA5DgDBWL6Q6vJKMum1Ejy4eJFaJG53ySXAOBkRN9u1E1pDXYMO8L2RJ&X-Amz-Signature=8cdbe52532b9fb5c3dc9139aece6fcbddee455b81b77fe65d658dffe3f3cb981&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVNSZ3G%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFPay4ho%2FLUAtT1Cju%2FFkqGKRwZm7ejR%2BiuTm516I9ORAiEA4pS7HkZCft%2BCMpi4CGSsnAD6%2BEfwOrTD7QEDkYL5wE8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFl0G2mn8r%2F2cAj%2FICrcA7TGLFeS92M2YPSaP%2FywIrOsc3PkZ%2FkLfEGUBwibhYSLM9RJkAKkpyLm0pGTiXD8efZjiIfU%2BShgZtEKSh6vSX%2F2z2JBL5b72fWCU2d5VyzFN0ADXK0%2FwjowsOkg04RIrgf1XJ92RlupqHXLqx5wI5f%2BdXILijXquWenC%2FS4sdieK97BYaJZFVrwVLudWx1BJNlhk3IeW8V0dFwguOHGGU%2FFFjRUU50VrmBasxWArNhX8cAQa2MlB8%2Fqg89wTXottFTIR6cGrmyEf1GNnopSXwe73nWiXn2WpRlrG%2B4b1cQRDmj4KecbAlf%2BWWIF41mBDclZaBLFgXhKx9%2B4qI81w5Cd0WIyQVa%2B99Vf%2FR9CIZWf0WhN86pwkxB1058gImNabWfz%2BeE3gsN%2FvGZNNZjRfxL3Nn%2BbNbgp1Po2aVAkcZCakdtgBVODEAalw%2FU3JRGwvJmGM4ouyDard8edvxssrzk0wt%2FioSNXdY0qY9BHf69%2Fc%2FMrbZVvtNtyAuJ2jpL7u1qylKbc0YkMlWdyQBAaAwqXCMGJnc8LaOV%2FRTeoko2HhZ0O7%2BzHf3nyg8Aqb25zlSNlbRJZrBGxIli89LsAOSvKDxElYamQcq4Gu1JjKXgUtmQcNsXrNMRM5qF7MN74nMAGOqUBuIiRbLWuoibxsDymEnvauQbFhbVeeFBUdhRUlN85o8mz4ny705TpHN1XG3X7oyT6hu4CWKtuhG2z%2BoNKKEWJi008hJQonTWnmXUqlTv5LLBJpa3caWdqUZEU1BNckvxTDPsemPfp5j7uSh3wHTMoY6RwjmWqG8FluXY5OA5DgDBWL6Q6vJKMum1Ejy4eJFaJG53ySXAOBkRN9u1E1pDXYMO8L2RJ&X-Amz-Signature=90f7fe68d303819c33f266a943b2fa8884e339321c733e3e4b733a62b98aa993&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PVNSZ3G%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFPay4ho%2FLUAtT1Cju%2FFkqGKRwZm7ejR%2BiuTm516I9ORAiEA4pS7HkZCft%2BCMpi4CGSsnAD6%2BEfwOrTD7QEDkYL5wE8qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFl0G2mn8r%2F2cAj%2FICrcA7TGLFeS92M2YPSaP%2FywIrOsc3PkZ%2FkLfEGUBwibhYSLM9RJkAKkpyLm0pGTiXD8efZjiIfU%2BShgZtEKSh6vSX%2F2z2JBL5b72fWCU2d5VyzFN0ADXK0%2FwjowsOkg04RIrgf1XJ92RlupqHXLqx5wI5f%2BdXILijXquWenC%2FS4sdieK97BYaJZFVrwVLudWx1BJNlhk3IeW8V0dFwguOHGGU%2FFFjRUU50VrmBasxWArNhX8cAQa2MlB8%2Fqg89wTXottFTIR6cGrmyEf1GNnopSXwe73nWiXn2WpRlrG%2B4b1cQRDmj4KecbAlf%2BWWIF41mBDclZaBLFgXhKx9%2B4qI81w5Cd0WIyQVa%2B99Vf%2FR9CIZWf0WhN86pwkxB1058gImNabWfz%2BeE3gsN%2FvGZNNZjRfxL3Nn%2BbNbgp1Po2aVAkcZCakdtgBVODEAalw%2FU3JRGwvJmGM4ouyDard8edvxssrzk0wt%2FioSNXdY0qY9BHf69%2Fc%2FMrbZVvtNtyAuJ2jpL7u1qylKbc0YkMlWdyQBAaAwqXCMGJnc8LaOV%2FRTeoko2HhZ0O7%2BzHf3nyg8Aqb25zlSNlbRJZrBGxIli89LsAOSvKDxElYamQcq4Gu1JjKXgUtmQcNsXrNMRM5qF7MN74nMAGOqUBuIiRbLWuoibxsDymEnvauQbFhbVeeFBUdhRUlN85o8mz4ny705TpHN1XG3X7oyT6hu4CWKtuhG2z%2BoNKKEWJi008hJQonTWnmXUqlTv5LLBJpa3caWdqUZEU1BNckvxTDPsemPfp5j7uSh3wHTMoY6RwjmWqG8FluXY5OA5DgDBWL6Q6vJKMum1Ejy4eJFaJG53ySXAOBkRN9u1E1pDXYMO8L2RJ&X-Amz-Signature=3ebad3543b60406bbcdff7d4c00ce6b3f40e072426369f5fae7447f0b3cdfdb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
