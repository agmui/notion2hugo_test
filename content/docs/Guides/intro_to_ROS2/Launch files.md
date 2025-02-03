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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYYFJL7J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEhHZXtnvCPV%2BHXsXJUqWAV26HdHk7A5rQ%2F1Bruikr%2F5AiEApQIcIKQ2qhrmh7dvEwjo1v0ViddQItmzkHaEHeheGaAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOGKfHI6CBfEjrHmDCrcA8CxYqoYzMCjEW6olMNSFWFtKkiexFU25kgzh4A5eShejfJo7iZz9LXbvDkqaWSSQvKmgl8uSDqN8Y4AwXjUY2xbdWiD5LlfZI2LubefqTMhwvzzDzKgFeSZxN0glCEGKtHz7aNMVP00mpLHot9kIjj7UHnodPr7YjSDTtfOIJuVNEhx41hhJgyDB3Cv%2Bo8KKw0kBsycF8u%2B9beH66iKkKWaWBuqGQuAIsch7pVOVzGNFBMy3GYo2MIy2z7tEX0%2FOvXpWJvUBswTxJ5B1ANPOQw0y5Nh1QNMaeYVSTYxK1%2FrqL4bQTIuaUdGLDrmPudbWLND4hnJVNFmhMXBdqMrxlgPEw33%2Fup4prk0ezCVecjDKbcjlt7IT1qXObIBJ7GwbFc60DFbW31scYp5MkyfaktQA%2BJZ%2BU4uXQuyy9IAVkNVuudtxO%2FcZN6c%2FZVqLpSLB6SFX1VFvAe6VqC4tSO0zEJFy7gqgi92Sbwj6zqOn%2B2EoGIrxe%2Bj4dFQguN5QYPzpZY5ZK93cft%2BF1X2WM41TU3sd70PgSmZCmn4tuIQtJjzl4FRKamJlQwC%2B%2F22cua%2BwFDHZt1cyY7V3Cpm%2FlIn9P11%2Brtf1CmYdEx94emZU9QPzswo2DyeEf8MQDU7MK6Vhb0GOqUBeYpVXjfRMDhBk3rwr6jGR5Pupgwrs9b%2F6VbORU5%2FSK42KsQj%2BI971aIrKJCp7%2Bz36uwi6SRVtBYlrGuEP1DsFvhRgNSxYnRAfCrY8ta9qGfH9hEvssCO%2FxgebeJcmoMomghPvh%2FX7rAnDxPJlM%2Fawi%2FoGWP2GavDpRKEquEBQihCF75S13XV5wxbP9mSHTVsVUqmItv%2Bf9UIZW02wkyaeV0hi2SO&X-Amz-Signature=492c969b083ba8f1634f8a2d4c26791b9e14eda6c87e051d36f8a77f5c2cf460&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYYFJL7J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEhHZXtnvCPV%2BHXsXJUqWAV26HdHk7A5rQ%2F1Bruikr%2F5AiEApQIcIKQ2qhrmh7dvEwjo1v0ViddQItmzkHaEHeheGaAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOGKfHI6CBfEjrHmDCrcA8CxYqoYzMCjEW6olMNSFWFtKkiexFU25kgzh4A5eShejfJo7iZz9LXbvDkqaWSSQvKmgl8uSDqN8Y4AwXjUY2xbdWiD5LlfZI2LubefqTMhwvzzDzKgFeSZxN0glCEGKtHz7aNMVP00mpLHot9kIjj7UHnodPr7YjSDTtfOIJuVNEhx41hhJgyDB3Cv%2Bo8KKw0kBsycF8u%2B9beH66iKkKWaWBuqGQuAIsch7pVOVzGNFBMy3GYo2MIy2z7tEX0%2FOvXpWJvUBswTxJ5B1ANPOQw0y5Nh1QNMaeYVSTYxK1%2FrqL4bQTIuaUdGLDrmPudbWLND4hnJVNFmhMXBdqMrxlgPEw33%2Fup4prk0ezCVecjDKbcjlt7IT1qXObIBJ7GwbFc60DFbW31scYp5MkyfaktQA%2BJZ%2BU4uXQuyy9IAVkNVuudtxO%2FcZN6c%2FZVqLpSLB6SFX1VFvAe6VqC4tSO0zEJFy7gqgi92Sbwj6zqOn%2B2EoGIrxe%2Bj4dFQguN5QYPzpZY5ZK93cft%2BF1X2WM41TU3sd70PgSmZCmn4tuIQtJjzl4FRKamJlQwC%2B%2F22cua%2BwFDHZt1cyY7V3Cpm%2FlIn9P11%2Brtf1CmYdEx94emZU9QPzswo2DyeEf8MQDU7MK6Vhb0GOqUBeYpVXjfRMDhBk3rwr6jGR5Pupgwrs9b%2F6VbORU5%2FSK42KsQj%2BI971aIrKJCp7%2Bz36uwi6SRVtBYlrGuEP1DsFvhRgNSxYnRAfCrY8ta9qGfH9hEvssCO%2FxgebeJcmoMomghPvh%2FX7rAnDxPJlM%2Fawi%2FoGWP2GavDpRKEquEBQihCF75S13XV5wxbP9mSHTVsVUqmItv%2Bf9UIZW02wkyaeV0hi2SO&X-Amz-Signature=75c82a30f8fdb16642f7b5a40d49ba9b3a1a927b83fe13afd5b90726be349281&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYYFJL7J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEhHZXtnvCPV%2BHXsXJUqWAV26HdHk7A5rQ%2F1Bruikr%2F5AiEApQIcIKQ2qhrmh7dvEwjo1v0ViddQItmzkHaEHeheGaAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOGKfHI6CBfEjrHmDCrcA8CxYqoYzMCjEW6olMNSFWFtKkiexFU25kgzh4A5eShejfJo7iZz9LXbvDkqaWSSQvKmgl8uSDqN8Y4AwXjUY2xbdWiD5LlfZI2LubefqTMhwvzzDzKgFeSZxN0glCEGKtHz7aNMVP00mpLHot9kIjj7UHnodPr7YjSDTtfOIJuVNEhx41hhJgyDB3Cv%2Bo8KKw0kBsycF8u%2B9beH66iKkKWaWBuqGQuAIsch7pVOVzGNFBMy3GYo2MIy2z7tEX0%2FOvXpWJvUBswTxJ5B1ANPOQw0y5Nh1QNMaeYVSTYxK1%2FrqL4bQTIuaUdGLDrmPudbWLND4hnJVNFmhMXBdqMrxlgPEw33%2Fup4prk0ezCVecjDKbcjlt7IT1qXObIBJ7GwbFc60DFbW31scYp5MkyfaktQA%2BJZ%2BU4uXQuyy9IAVkNVuudtxO%2FcZN6c%2FZVqLpSLB6SFX1VFvAe6VqC4tSO0zEJFy7gqgi92Sbwj6zqOn%2B2EoGIrxe%2Bj4dFQguN5QYPzpZY5ZK93cft%2BF1X2WM41TU3sd70PgSmZCmn4tuIQtJjzl4FRKamJlQwC%2B%2F22cua%2BwFDHZt1cyY7V3Cpm%2FlIn9P11%2Brtf1CmYdEx94emZU9QPzswo2DyeEf8MQDU7MK6Vhb0GOqUBeYpVXjfRMDhBk3rwr6jGR5Pupgwrs9b%2F6VbORU5%2FSK42KsQj%2BI971aIrKJCp7%2Bz36uwi6SRVtBYlrGuEP1DsFvhRgNSxYnRAfCrY8ta9qGfH9hEvssCO%2FxgebeJcmoMomghPvh%2FX7rAnDxPJlM%2Fawi%2FoGWP2GavDpRKEquEBQihCF75S13XV5wxbP9mSHTVsVUqmItv%2Bf9UIZW02wkyaeV0hi2SO&X-Amz-Signature=af7d871d167fb472c4d47c1a4be6256a12b857a092cf13a9020195e59756ccd7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
