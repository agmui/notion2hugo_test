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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKU4RU2Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIAFReHuBK%2Bo69ni7SuixVRzhupLQy%2BbZ4WDlaiLLtLn3AiEApFPIAnNzi9gNNbFfZRhGE1iA8VE0B6wA6EzZbdYasAcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCb9%2F925XAR1ccCwnircA%2FjvydTPyewGVVEGp6ulIBevdK7gQFgQ6flrcicuwyaaeJuVBBi8hjuv361WfsaDetz1iEJGJ4hlx9qaqe%2BdtkVh3%2F7wBNbUZC3cWAFATr8mEP0IzskVrzDY7keDfef%2FS%2B80hNIyUVjChw68ONoTmXIOYzjtzS50u%2F7gGBTSz8Guw70SaWRQ8fwW5XKPDqVyNLF0%2BOftUDFIJDSotihP6J2h3cC9b0URwiNUDmz0xgYGB18GKvh2OQjFMmaVsDTc0CneZ1y3YmBHZSKzmH4IkYFX%2Fdqr8Y9u0X1Mt59UFhda9MGsHTrRhshmys3%2FeFCXM%2FVHHLpooKPX67kHkPSUAUhxcli5Sw%2B%2FVxwG2XmTC%2FvcaQwY7B4Nix6m7fbhgg9zVFZqxmaTxG7ggoGi5gElaTQ7VboNHcSTeAIfBq53S%2BQdV7iKWxE7SEVyN%2F4ZyfH3vq9Bv7FfrHRH3RlXZpAyxGytOkjwMTqBhhhpfiC0SWmfNs7DJIcndOnAAyzjocT7%2B4Fi3CjmjEyVukedsfNcPpCrGGOKAciIqfoz4B2f1jQ8BjQgVQyKP4jlgmMAlcZqZHknl6%2FHxnkfmM1f1PsrssWAcl05qy0EJeVRWLyZCvjt7YpQj9e5BRvxT%2FEUMKWY9L4GOqUBi4uO2ydkcqMX%2BIpyidLGoAsvy6gB3mZZLvqFEve5BUh40Sbtm3yDng%2Fqk88JK0ViElTkoakyzEUkl0W8lJ3fjwwxBouMUcZaOalE93%2B%2BPywgvIQsMwcU%2BYGEDZVlkyQnh%2FmYc52jVXmlHJAHO%2FbF1sreh3thGhlRu81c14V21mgYxiSJvzAgPlFKymTuofFjEY7TIEGf%2BVNaTP%2F7HQgQIBHFMCZT&X-Amz-Signature=04ec8c84e5b09d00b401c62c7a913f88df73fa2d8e4e266d9b1522ad0d587205&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKU4RU2Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIAFReHuBK%2Bo69ni7SuixVRzhupLQy%2BbZ4WDlaiLLtLn3AiEApFPIAnNzi9gNNbFfZRhGE1iA8VE0B6wA6EzZbdYasAcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCb9%2F925XAR1ccCwnircA%2FjvydTPyewGVVEGp6ulIBevdK7gQFgQ6flrcicuwyaaeJuVBBi8hjuv361WfsaDetz1iEJGJ4hlx9qaqe%2BdtkVh3%2F7wBNbUZC3cWAFATr8mEP0IzskVrzDY7keDfef%2FS%2B80hNIyUVjChw68ONoTmXIOYzjtzS50u%2F7gGBTSz8Guw70SaWRQ8fwW5XKPDqVyNLF0%2BOftUDFIJDSotihP6J2h3cC9b0URwiNUDmz0xgYGB18GKvh2OQjFMmaVsDTc0CneZ1y3YmBHZSKzmH4IkYFX%2Fdqr8Y9u0X1Mt59UFhda9MGsHTrRhshmys3%2FeFCXM%2FVHHLpooKPX67kHkPSUAUhxcli5Sw%2B%2FVxwG2XmTC%2FvcaQwY7B4Nix6m7fbhgg9zVFZqxmaTxG7ggoGi5gElaTQ7VboNHcSTeAIfBq53S%2BQdV7iKWxE7SEVyN%2F4ZyfH3vq9Bv7FfrHRH3RlXZpAyxGytOkjwMTqBhhhpfiC0SWmfNs7DJIcndOnAAyzjocT7%2B4Fi3CjmjEyVukedsfNcPpCrGGOKAciIqfoz4B2f1jQ8BjQgVQyKP4jlgmMAlcZqZHknl6%2FHxnkfmM1f1PsrssWAcl05qy0EJeVRWLyZCvjt7YpQj9e5BRvxT%2FEUMKWY9L4GOqUBi4uO2ydkcqMX%2BIpyidLGoAsvy6gB3mZZLvqFEve5BUh40Sbtm3yDng%2Fqk88JK0ViElTkoakyzEUkl0W8lJ3fjwwxBouMUcZaOalE93%2B%2BPywgvIQsMwcU%2BYGEDZVlkyQnh%2FmYc52jVXmlHJAHO%2FbF1sreh3thGhlRu81c14V21mgYxiSJvzAgPlFKymTuofFjEY7TIEGf%2BVNaTP%2F7HQgQIBHFMCZT&X-Amz-Signature=07c108f8c2683c41e9c7b68e08d0d6bb84b1941f70311862d71be3e5a2bb1dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKU4RU2Z%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIAFReHuBK%2Bo69ni7SuixVRzhupLQy%2BbZ4WDlaiLLtLn3AiEApFPIAnNzi9gNNbFfZRhGE1iA8VE0B6wA6EzZbdYasAcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCb9%2F925XAR1ccCwnircA%2FjvydTPyewGVVEGp6ulIBevdK7gQFgQ6flrcicuwyaaeJuVBBi8hjuv361WfsaDetz1iEJGJ4hlx9qaqe%2BdtkVh3%2F7wBNbUZC3cWAFATr8mEP0IzskVrzDY7keDfef%2FS%2B80hNIyUVjChw68ONoTmXIOYzjtzS50u%2F7gGBTSz8Guw70SaWRQ8fwW5XKPDqVyNLF0%2BOftUDFIJDSotihP6J2h3cC9b0URwiNUDmz0xgYGB18GKvh2OQjFMmaVsDTc0CneZ1y3YmBHZSKzmH4IkYFX%2Fdqr8Y9u0X1Mt59UFhda9MGsHTrRhshmys3%2FeFCXM%2FVHHLpooKPX67kHkPSUAUhxcli5Sw%2B%2FVxwG2XmTC%2FvcaQwY7B4Nix6m7fbhgg9zVFZqxmaTxG7ggoGi5gElaTQ7VboNHcSTeAIfBq53S%2BQdV7iKWxE7SEVyN%2F4ZyfH3vq9Bv7FfrHRH3RlXZpAyxGytOkjwMTqBhhhpfiC0SWmfNs7DJIcndOnAAyzjocT7%2B4Fi3CjmjEyVukedsfNcPpCrGGOKAciIqfoz4B2f1jQ8BjQgVQyKP4jlgmMAlcZqZHknl6%2FHxnkfmM1f1PsrssWAcl05qy0EJeVRWLyZCvjt7YpQj9e5BRvxT%2FEUMKWY9L4GOqUBi4uO2ydkcqMX%2BIpyidLGoAsvy6gB3mZZLvqFEve5BUh40Sbtm3yDng%2Fqk88JK0ViElTkoakyzEUkl0W8lJ3fjwwxBouMUcZaOalE93%2B%2BPywgvIQsMwcU%2BYGEDZVlkyQnh%2FmYc52jVXmlHJAHO%2FbF1sreh3thGhlRu81c14V21mgYxiSJvzAgPlFKymTuofFjEY7TIEGf%2BVNaTP%2F7HQgQIBHFMCZT&X-Amz-Signature=9f0f59b36f4739d9251fbbfd2f074e6bd81f23755263bee21608090b8e4f403b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
