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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJW6GYS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtGZmRpYBiIig4avEDf8%2BVJPk9db10HsqkfLJ9zXyDEAiEA06jiS5xvVg3cWaX2YRLPYC5k6XVU%2FKH%2B5wcfuZ7FWWMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8PCanSXOLhZbmyOCrcA2%2BeU4elheSGdy6ehAaNhF%2BdwrulupUaUh661FV4%2FkdVT4NDFEOGJ1zz7ccxg5EdWX1W4Z2OIacnRTkac1UojYnhFazUbe%2BGH4o4Zz2gXLwn5FQVU5M4KPa4AYsuFtQPitqxe1EscT5n0LeXE7RoVcTa1xFXsc1rOSHK6KIA7NXWIFEvcOUczXQyRPr5skfvZOXJEAT%2BYJ8LSqPKW4TOBhQdj5sKryKAZ24XTfkBA6xwTdGGzs6qI2k6xiCY9qzreWV2CNtrIdwsRrHBvIqjtdppIsQDcg890QhSGdcbyfHNo1Q7pZMPfYIb5lWig4T%2B5mDXcdXmHHjJnHwnZnw7CFYFT6NO3JE6oZI71xe%2BiqFOMAzuk1dR4lykEBGBsvkJlVYaOVNR%2FiH0TC%2BYUJfNoQXpRRAfJuRAzfKE4stRlEUdUTZhvUS2yGnHleGUI43fj%2FWARofmONk7lIwos70LALMdSgdIkMgBCt1%2FOUkLpn9h2e%2Bvf9UU37NmhFhkTDZYDZ94ehMWgOfLqGDcR1NThfnT5yaijYfl7333Y3svawWG0DIkCSVaqcG6BeDXQOrDbYWvWteUiHxAO3ONQH%2FcRDr%2FZSs0KI9OfdCqwg4aXJ4T70z1ssxPByWZa%2BO2MPef4r0GOqUBeaNreSgh%2BoktzAGKJO%2F1%2BpDJV1kYMw4gCCWp6QG1fUZoyOzkkvbBG9LHuGdwkN8UAlEwpOENvz26OYC%2Fgl%2BknD3RGMxYdM2mtvCZ3MwMlBxl3B05%2BpmfPigirnXgs3d1wGorUnl28%2BeneTOfbOqHQJfXxByG2ePiCV2nbh1GA3YrGTn5kPkBV7ODY6VAnEh5Q3z3vUGgXwveN7UyVi3D6%2B4RZ5f9&X-Amz-Signature=cbf700b1c3b5b91aae864f8040918c8c1608e6ccafeb01b96a353c4dadbb448c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJW6GYS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtGZmRpYBiIig4avEDf8%2BVJPk9db10HsqkfLJ9zXyDEAiEA06jiS5xvVg3cWaX2YRLPYC5k6XVU%2FKH%2B5wcfuZ7FWWMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8PCanSXOLhZbmyOCrcA2%2BeU4elheSGdy6ehAaNhF%2BdwrulupUaUh661FV4%2FkdVT4NDFEOGJ1zz7ccxg5EdWX1W4Z2OIacnRTkac1UojYnhFazUbe%2BGH4o4Zz2gXLwn5FQVU5M4KPa4AYsuFtQPitqxe1EscT5n0LeXE7RoVcTa1xFXsc1rOSHK6KIA7NXWIFEvcOUczXQyRPr5skfvZOXJEAT%2BYJ8LSqPKW4TOBhQdj5sKryKAZ24XTfkBA6xwTdGGzs6qI2k6xiCY9qzreWV2CNtrIdwsRrHBvIqjtdppIsQDcg890QhSGdcbyfHNo1Q7pZMPfYIb5lWig4T%2B5mDXcdXmHHjJnHwnZnw7CFYFT6NO3JE6oZI71xe%2BiqFOMAzuk1dR4lykEBGBsvkJlVYaOVNR%2FiH0TC%2BYUJfNoQXpRRAfJuRAzfKE4stRlEUdUTZhvUS2yGnHleGUI43fj%2FWARofmONk7lIwos70LALMdSgdIkMgBCt1%2FOUkLpn9h2e%2Bvf9UU37NmhFhkTDZYDZ94ehMWgOfLqGDcR1NThfnT5yaijYfl7333Y3svawWG0DIkCSVaqcG6BeDXQOrDbYWvWteUiHxAO3ONQH%2FcRDr%2FZSs0KI9OfdCqwg4aXJ4T70z1ssxPByWZa%2BO2MPef4r0GOqUBeaNreSgh%2BoktzAGKJO%2F1%2BpDJV1kYMw4gCCWp6QG1fUZoyOzkkvbBG9LHuGdwkN8UAlEwpOENvz26OYC%2Fgl%2BknD3RGMxYdM2mtvCZ3MwMlBxl3B05%2BpmfPigirnXgs3d1wGorUnl28%2BeneTOfbOqHQJfXxByG2ePiCV2nbh1GA3YrGTn5kPkBV7ODY6VAnEh5Q3z3vUGgXwveN7UyVi3D6%2B4RZ5f9&X-Amz-Signature=6234131523c48cb29fef0f58e9fc9182f3cd812bf40e987339a1b46ea2f91f14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJW6GYS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGtGZmRpYBiIig4avEDf8%2BVJPk9db10HsqkfLJ9zXyDEAiEA06jiS5xvVg3cWaX2YRLPYC5k6XVU%2FKH%2B5wcfuZ7FWWMqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8PCanSXOLhZbmyOCrcA2%2BeU4elheSGdy6ehAaNhF%2BdwrulupUaUh661FV4%2FkdVT4NDFEOGJ1zz7ccxg5EdWX1W4Z2OIacnRTkac1UojYnhFazUbe%2BGH4o4Zz2gXLwn5FQVU5M4KPa4AYsuFtQPitqxe1EscT5n0LeXE7RoVcTa1xFXsc1rOSHK6KIA7NXWIFEvcOUczXQyRPr5skfvZOXJEAT%2BYJ8LSqPKW4TOBhQdj5sKryKAZ24XTfkBA6xwTdGGzs6qI2k6xiCY9qzreWV2CNtrIdwsRrHBvIqjtdppIsQDcg890QhSGdcbyfHNo1Q7pZMPfYIb5lWig4T%2B5mDXcdXmHHjJnHwnZnw7CFYFT6NO3JE6oZI71xe%2BiqFOMAzuk1dR4lykEBGBsvkJlVYaOVNR%2FiH0TC%2BYUJfNoQXpRRAfJuRAzfKE4stRlEUdUTZhvUS2yGnHleGUI43fj%2FWARofmONk7lIwos70LALMdSgdIkMgBCt1%2FOUkLpn9h2e%2Bvf9UU37NmhFhkTDZYDZ94ehMWgOfLqGDcR1NThfnT5yaijYfl7333Y3svawWG0DIkCSVaqcG6BeDXQOrDbYWvWteUiHxAO3ONQH%2FcRDr%2FZSs0KI9OfdCqwg4aXJ4T70z1ssxPByWZa%2BO2MPef4r0GOqUBeaNreSgh%2BoktzAGKJO%2F1%2BpDJV1kYMw4gCCWp6QG1fUZoyOzkkvbBG9LHuGdwkN8UAlEwpOENvz26OYC%2Fgl%2BknD3RGMxYdM2mtvCZ3MwMlBxl3B05%2BpmfPigirnXgs3d1wGorUnl28%2BeneTOfbOqHQJfXxByG2ePiCV2nbh1GA3YrGTn5kPkBV7ODY6VAnEh5Q3z3vUGgXwveN7UyVi3D6%2B4RZ5f9&X-Amz-Signature=876849e718771c931e8fcbd1e079c10147202537377ebb00467bf7491cb36ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
