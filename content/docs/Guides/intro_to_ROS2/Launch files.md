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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRKMFYP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6EZ7XXyndDRppXipXPpPMu%2FrVeB7XTWlGZMHXBln%2F5gIhAK58jJcNioGWNf2%2B%2FiLr6rhJewUlTkwaBrarwAKkgrlRKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaZzYYkVDPAzebSR0q3AP9z3Yvp7%2FjZLyQbX26twVahIFRnd8X48lfI3nKojKlGzPOBC6n6ir8eZhxI9oaceTn9fJyNEwe3MMZKyN3ou3iNlYuKen2Ss8QdMiwaXhcZOYTrM6PjdZ4cxhakOzSgv3JvB%2FUJ4m7bWQwyg79wi1ArIFnCR7pEtqI%2FvQvhskAP46QYH3mqW%2FPPfZ%2BwI3BmbTLjFdmntPoQ9lDA54TbyavOfuyCYXTTUy6yPpgXvN0XOGYCzOQpNB8t8eAzumH%2F6Qi4ORU6jYQ70xwmItHyS3cdJ3M5ouXhqimAuwX2%2BsrsemJ6WXpinALOxU6tdinJsQIGTbXMMpAYV5rIBdB%2FGcbRQwZDhWKZhEZ1IW1z4MDBoyS7w25FukoAMTD19rjtP7QJcXTPDa42hanh%2FRE1AaOlF1LkFM8RlRzQlcNXowTwrukQ7LvNMvT%2BaWu10%2B5znrm4pUQ4DkNan9JHKSQVlTb88lntLkpIuDXAfax1y0km9JyE1Za7kGt71%2BawiYIQf2BTOkyunUJ313m7icYxvRI00k5raMFNzJTXOb5IWSu8qbMmvI0RCvRhKTtj7a50NDzi3LEDbLqSENO42X6jHeF3JTHFo0TeEnELlk85Rh4dbcSk3Oxp8tDJwFD3TCG05y%2BBjqkAZCNtM3aNDmuZuK%2F5RE6DCyXj6vpkE0ZkFYMAMsaSbPnuP582nmkoB0sqC8EExkADrDIuxSZUNtOR9XOlhuj70n%2FiuiorpiV3thKBifxibNOwA%2BepZdLuhafNEoRbwZGD9d8jEMfqYOSVDyb4dH3mTjNZe4zwC3xhhYZ8wUfPvEOCF0floO1Bk3kc2X0qG3rs6DpByyjuaD1cw4v49dZwZ2GooPh&X-Amz-Signature=063dcbf803d127d98c952cc010d3af9132253070a8bf15c369cfb132b9327d69&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRKMFYP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6EZ7XXyndDRppXipXPpPMu%2FrVeB7XTWlGZMHXBln%2F5gIhAK58jJcNioGWNf2%2B%2FiLr6rhJewUlTkwaBrarwAKkgrlRKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaZzYYkVDPAzebSR0q3AP9z3Yvp7%2FjZLyQbX26twVahIFRnd8X48lfI3nKojKlGzPOBC6n6ir8eZhxI9oaceTn9fJyNEwe3MMZKyN3ou3iNlYuKen2Ss8QdMiwaXhcZOYTrM6PjdZ4cxhakOzSgv3JvB%2FUJ4m7bWQwyg79wi1ArIFnCR7pEtqI%2FvQvhskAP46QYH3mqW%2FPPfZ%2BwI3BmbTLjFdmntPoQ9lDA54TbyavOfuyCYXTTUy6yPpgXvN0XOGYCzOQpNB8t8eAzumH%2F6Qi4ORU6jYQ70xwmItHyS3cdJ3M5ouXhqimAuwX2%2BsrsemJ6WXpinALOxU6tdinJsQIGTbXMMpAYV5rIBdB%2FGcbRQwZDhWKZhEZ1IW1z4MDBoyS7w25FukoAMTD19rjtP7QJcXTPDa42hanh%2FRE1AaOlF1LkFM8RlRzQlcNXowTwrukQ7LvNMvT%2BaWu10%2B5znrm4pUQ4DkNan9JHKSQVlTb88lntLkpIuDXAfax1y0km9JyE1Za7kGt71%2BawiYIQf2BTOkyunUJ313m7icYxvRI00k5raMFNzJTXOb5IWSu8qbMmvI0RCvRhKTtj7a50NDzi3LEDbLqSENO42X6jHeF3JTHFo0TeEnELlk85Rh4dbcSk3Oxp8tDJwFD3TCG05y%2BBjqkAZCNtM3aNDmuZuK%2F5RE6DCyXj6vpkE0ZkFYMAMsaSbPnuP582nmkoB0sqC8EExkADrDIuxSZUNtOR9XOlhuj70n%2FiuiorpiV3thKBifxibNOwA%2BepZdLuhafNEoRbwZGD9d8jEMfqYOSVDyb4dH3mTjNZe4zwC3xhhYZ8wUfPvEOCF0floO1Bk3kc2X0qG3rs6DpByyjuaD1cw4v49dZwZ2GooPh&X-Amz-Signature=d45007664ac73216749f9e215453435e1b1ad0d03e55b6ad14c919c22fd2691d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRKMFYP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6EZ7XXyndDRppXipXPpPMu%2FrVeB7XTWlGZMHXBln%2F5gIhAK58jJcNioGWNf2%2B%2FiLr6rhJewUlTkwaBrarwAKkgrlRKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaZzYYkVDPAzebSR0q3AP9z3Yvp7%2FjZLyQbX26twVahIFRnd8X48lfI3nKojKlGzPOBC6n6ir8eZhxI9oaceTn9fJyNEwe3MMZKyN3ou3iNlYuKen2Ss8QdMiwaXhcZOYTrM6PjdZ4cxhakOzSgv3JvB%2FUJ4m7bWQwyg79wi1ArIFnCR7pEtqI%2FvQvhskAP46QYH3mqW%2FPPfZ%2BwI3BmbTLjFdmntPoQ9lDA54TbyavOfuyCYXTTUy6yPpgXvN0XOGYCzOQpNB8t8eAzumH%2F6Qi4ORU6jYQ70xwmItHyS3cdJ3M5ouXhqimAuwX2%2BsrsemJ6WXpinALOxU6tdinJsQIGTbXMMpAYV5rIBdB%2FGcbRQwZDhWKZhEZ1IW1z4MDBoyS7w25FukoAMTD19rjtP7QJcXTPDa42hanh%2FRE1AaOlF1LkFM8RlRzQlcNXowTwrukQ7LvNMvT%2BaWu10%2B5znrm4pUQ4DkNan9JHKSQVlTb88lntLkpIuDXAfax1y0km9JyE1Za7kGt71%2BawiYIQf2BTOkyunUJ313m7icYxvRI00k5raMFNzJTXOb5IWSu8qbMmvI0RCvRhKTtj7a50NDzi3LEDbLqSENO42X6jHeF3JTHFo0TeEnELlk85Rh4dbcSk3Oxp8tDJwFD3TCG05y%2BBjqkAZCNtM3aNDmuZuK%2F5RE6DCyXj6vpkE0ZkFYMAMsaSbPnuP582nmkoB0sqC8EExkADrDIuxSZUNtOR9XOlhuj70n%2FiuiorpiV3thKBifxibNOwA%2BepZdLuhafNEoRbwZGD9d8jEMfqYOSVDyb4dH3mTjNZe4zwC3xhhYZ8wUfPvEOCF0floO1Bk3kc2X0qG3rs6DpByyjuaD1cw4v49dZwZ2GooPh&X-Amz-Signature=44d9eb97d08d94346dc01b3aef125583f0ba9fcaea644f8947df007a4a13a235&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
