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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OT4E27C%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAoO5PwBJRnEyZjuYFihgR2LQbRZqxO2G0Qbr6c5zCHsAiEAn9WSOImm32JBv64L8%2B8BctYAXM9IILthA3mBUJjFj%2FwqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCX%2BLcuKnijA%2BRGFircAwylHL3PXTeA%2BTsn9f5%2FlVVR95UbNSIk2iHl03JBOOG7Wzrp2rl%2FMbY9F%2B4nIDACTIAPuJyJ20cbbVE7GDZcylDwxn9CIcu8Lk6WWXswLohKvCI9FXEFuqB0Rp5%2FY8IQN79IUdKsnwISd65k2ZQD%2BYC5ihgfUJhwL0nkxsTDi4GdnxSLfy%2BSwQfowX8L05qO0f8aNHtm7h8UzwiAqYlsGooazn0s6r7FJNtunGRBCd38mZ%2BYQn2re2iAxGgIw1LuvoHq9oSpb%2FHEBWRalPVfVSFVMcIFTLRkvHiPV1RJBFKsHvRU6zUePsMGovPKlEHKmIxpnrHtiO5P3Z4GMv%2FR30JKubvWz%2F88J8VVwOiiAAtK50vVEB25esGdoMqv1Q9q8z6%2FoSwkSSHPH8uMmWziuEqb2muRGUxwgqvIFEwtCtiYs8HGS9%2BuHPbkbiSBRpNVrexB7qM7vCEvZW162Aw%2Fh09o2KrNMcY1RZQXJiKPD228QRmecFTjTTiBXmL6mjF1SNt6CiGbBN1fRVi4e4sFeRXe3WAR%2F3xcYPtQC5%2BznJne48%2BKPZ%2FL6tpk874pj4dHKcfhPrByYkewAfLezltdYwOp7%2BQWJilUx3cY9HT4UzNc7wFiVXSNqXC1xFR3MNay2L8GOqUBsQrLjUH5aSwYEXpxF8bhLaP3PJU4uA2oHH2QVJTyudvD%2FnW2fNs9LlmAHHrypvZZ8Qs7zQy6Bbs%2BukvTe6kNdbrK%2ByylfwB0A2SYGXD%2FaAy0NyVXGh%2B%2BuXEatjGA7VwbGffx8PHYH%2Bv9x5%2FhuME4hrPLoWBYPadF712Wh3tzDSWwXA6lil4Imyu5kSDtzieeylOwnb3QlZe9%2BXzICAV8NCm0Tujn&X-Amz-Signature=fcbf86ac6daa6a0aa883839e61ec7f7a8280594067fb0dd248d0575eb52db670&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OT4E27C%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAoO5PwBJRnEyZjuYFihgR2LQbRZqxO2G0Qbr6c5zCHsAiEAn9WSOImm32JBv64L8%2B8BctYAXM9IILthA3mBUJjFj%2FwqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCX%2BLcuKnijA%2BRGFircAwylHL3PXTeA%2BTsn9f5%2FlVVR95UbNSIk2iHl03JBOOG7Wzrp2rl%2FMbY9F%2B4nIDACTIAPuJyJ20cbbVE7GDZcylDwxn9CIcu8Lk6WWXswLohKvCI9FXEFuqB0Rp5%2FY8IQN79IUdKsnwISd65k2ZQD%2BYC5ihgfUJhwL0nkxsTDi4GdnxSLfy%2BSwQfowX8L05qO0f8aNHtm7h8UzwiAqYlsGooazn0s6r7FJNtunGRBCd38mZ%2BYQn2re2iAxGgIw1LuvoHq9oSpb%2FHEBWRalPVfVSFVMcIFTLRkvHiPV1RJBFKsHvRU6zUePsMGovPKlEHKmIxpnrHtiO5P3Z4GMv%2FR30JKubvWz%2F88J8VVwOiiAAtK50vVEB25esGdoMqv1Q9q8z6%2FoSwkSSHPH8uMmWziuEqb2muRGUxwgqvIFEwtCtiYs8HGS9%2BuHPbkbiSBRpNVrexB7qM7vCEvZW162Aw%2Fh09o2KrNMcY1RZQXJiKPD228QRmecFTjTTiBXmL6mjF1SNt6CiGbBN1fRVi4e4sFeRXe3WAR%2F3xcYPtQC5%2BznJne48%2BKPZ%2FL6tpk874pj4dHKcfhPrByYkewAfLezltdYwOp7%2BQWJilUx3cY9HT4UzNc7wFiVXSNqXC1xFR3MNay2L8GOqUBsQrLjUH5aSwYEXpxF8bhLaP3PJU4uA2oHH2QVJTyudvD%2FnW2fNs9LlmAHHrypvZZ8Qs7zQy6Bbs%2BukvTe6kNdbrK%2ByylfwB0A2SYGXD%2FaAy0NyVXGh%2B%2BuXEatjGA7VwbGffx8PHYH%2Bv9x5%2FhuME4hrPLoWBYPadF712Wh3tzDSWwXA6lil4Imyu5kSDtzieeylOwnb3QlZe9%2BXzICAV8NCm0Tujn&X-Amz-Signature=e18d07346e7fe8b1ffb0d4c53eb3cab6fa08b39ebc2dd21e957b7cdd4d2cf9eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OT4E27C%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIAoO5PwBJRnEyZjuYFihgR2LQbRZqxO2G0Qbr6c5zCHsAiEAn9WSOImm32JBv64L8%2B8BctYAXM9IILthA3mBUJjFj%2FwqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCX%2BLcuKnijA%2BRGFircAwylHL3PXTeA%2BTsn9f5%2FlVVR95UbNSIk2iHl03JBOOG7Wzrp2rl%2FMbY9F%2B4nIDACTIAPuJyJ20cbbVE7GDZcylDwxn9CIcu8Lk6WWXswLohKvCI9FXEFuqB0Rp5%2FY8IQN79IUdKsnwISd65k2ZQD%2BYC5ihgfUJhwL0nkxsTDi4GdnxSLfy%2BSwQfowX8L05qO0f8aNHtm7h8UzwiAqYlsGooazn0s6r7FJNtunGRBCd38mZ%2BYQn2re2iAxGgIw1LuvoHq9oSpb%2FHEBWRalPVfVSFVMcIFTLRkvHiPV1RJBFKsHvRU6zUePsMGovPKlEHKmIxpnrHtiO5P3Z4GMv%2FR30JKubvWz%2F88J8VVwOiiAAtK50vVEB25esGdoMqv1Q9q8z6%2FoSwkSSHPH8uMmWziuEqb2muRGUxwgqvIFEwtCtiYs8HGS9%2BuHPbkbiSBRpNVrexB7qM7vCEvZW162Aw%2Fh09o2KrNMcY1RZQXJiKPD228QRmecFTjTTiBXmL6mjF1SNt6CiGbBN1fRVi4e4sFeRXe3WAR%2F3xcYPtQC5%2BznJne48%2BKPZ%2FL6tpk874pj4dHKcfhPrByYkewAfLezltdYwOp7%2BQWJilUx3cY9HT4UzNc7wFiVXSNqXC1xFR3MNay2L8GOqUBsQrLjUH5aSwYEXpxF8bhLaP3PJU4uA2oHH2QVJTyudvD%2FnW2fNs9LlmAHHrypvZZ8Qs7zQy6Bbs%2BukvTe6kNdbrK%2ByylfwB0A2SYGXD%2FaAy0NyVXGh%2B%2BuXEatjGA7VwbGffx8PHYH%2Bv9x5%2FhuME4hrPLoWBYPadF712Wh3tzDSWwXA6lil4Imyu5kSDtzieeylOwnb3QlZe9%2BXzICAV8NCm0Tujn&X-Amz-Signature=504df402c7906f81d1e0f4392fed210b1207cfae8a10f5b87dbc5994fad41acb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
