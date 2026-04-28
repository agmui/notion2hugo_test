---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4PDNAX%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBWYXZsj0lBW6JACEzsgp8S%2F3OBIWWNd8SQMkZ49rHihAiEA8DhjaUFFILk37chisjKtmeCmjKQra41CCN7lSzfjVyIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwE%2FP4BCgS8n%2FX4RircA3Y7BRRxAbogX26VoQpnFQbr1wSt6NrNRixntFZYHxxJlar54H496xU4hwqdIrtL%2Bws5BvAYt1y%2BiwxYF%2B4Hq3RTLOlte33sXqgatzhCGZV6zEmvhO3Tvsh4t2F834qC7EiGx2mIHVOTJEbo2hN0xN0e34IAyUi5O%2FohQsGZtOk02cH8dnXIFxTqZUjhJymVS7x8fUQ7pnYhqAGLNJ2q2mWY9g324MYfi%2Bed9%2F0uP2uuIOkJOR51hUU%2BYUjuIpXY9PxWWLE6YaiCrzKFwJhdrX%2Fc7W13fnjepxoL5dcuPasjo0jwaQ7W8OtQF5f7C5JMsHsQdMfOiIeHZ45kElrz0rZkngmMY2sR3%2B6qR%2FZcdhLmmBOv4pQ%2BSZurAK6XshM%2BdvV1%2BRQ4jsituyZGTNNPLz7NnoWYADm00nPbF26PnkE305EBSNaro77ZIOPukzB62NWfHX7tg1g7sVKTNpZNdZ1jiElWg3KD%2FtBLt5F6adPtxx8d%2B%2FfMYwV0NHBkENfep8fsgvbZDPpNFAm0V%2BeR6JXaUwFBU4FsyJxGokYPV4YGWsW6J%2BAT4EvDq40VktR7yMNG2GQQZUqEJU%2FrXg0eiOktu3NdP1owtyayrd8jpa8%2FfrJvSKgZJ1LbmOcEMOKlwM8GOqUBaFAW4I3JM%2FyQkezwAB0MCGkz3PDs6RN6p41fxlALAChuAK%2ByBhV%2BzJQxFDYZ7ckgPEeqmWOU%2Fbo8AVnGSAgHgHVND%2BMGn4j%2FFxjOxy7OF5IH9PIemscUdlU4Ove5PMIE4BblZ1gkVSz95u1c%2FnUk4Aiu%2FndmjQyCyVvsCwT21Z%2FDF06LBR4y3h%2FqnxzPqBaBzFktDrG6YHrpR1MvZDXMTyoLN97Q&X-Amz-Signature=0a06ce62aa47c3bb43e880b584f80f779ea433446ad111551fa4d1cff833ada6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4PDNAX%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBWYXZsj0lBW6JACEzsgp8S%2F3OBIWWNd8SQMkZ49rHihAiEA8DhjaUFFILk37chisjKtmeCmjKQra41CCN7lSzfjVyIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwE%2FP4BCgS8n%2FX4RircA3Y7BRRxAbogX26VoQpnFQbr1wSt6NrNRixntFZYHxxJlar54H496xU4hwqdIrtL%2Bws5BvAYt1y%2BiwxYF%2B4Hq3RTLOlte33sXqgatzhCGZV6zEmvhO3Tvsh4t2F834qC7EiGx2mIHVOTJEbo2hN0xN0e34IAyUi5O%2FohQsGZtOk02cH8dnXIFxTqZUjhJymVS7x8fUQ7pnYhqAGLNJ2q2mWY9g324MYfi%2Bed9%2F0uP2uuIOkJOR51hUU%2BYUjuIpXY9PxWWLE6YaiCrzKFwJhdrX%2Fc7W13fnjepxoL5dcuPasjo0jwaQ7W8OtQF5f7C5JMsHsQdMfOiIeHZ45kElrz0rZkngmMY2sR3%2B6qR%2FZcdhLmmBOv4pQ%2BSZurAK6XshM%2BdvV1%2BRQ4jsituyZGTNNPLz7NnoWYADm00nPbF26PnkE305EBSNaro77ZIOPukzB62NWfHX7tg1g7sVKTNpZNdZ1jiElWg3KD%2FtBLt5F6adPtxx8d%2B%2FfMYwV0NHBkENfep8fsgvbZDPpNFAm0V%2BeR6JXaUwFBU4FsyJxGokYPV4YGWsW6J%2BAT4EvDq40VktR7yMNG2GQQZUqEJU%2FrXg0eiOktu3NdP1owtyayrd8jpa8%2FfrJvSKgZJ1LbmOcEMOKlwM8GOqUBaFAW4I3JM%2FyQkezwAB0MCGkz3PDs6RN6p41fxlALAChuAK%2ByBhV%2BzJQxFDYZ7ckgPEeqmWOU%2Fbo8AVnGSAgHgHVND%2BMGn4j%2FFxjOxy7OF5IH9PIemscUdlU4Ove5PMIE4BblZ1gkVSz95u1c%2FnUk4Aiu%2FndmjQyCyVvsCwT21Z%2FDF06LBR4y3h%2FqnxzPqBaBzFktDrG6YHrpR1MvZDXMTyoLN97Q&X-Amz-Signature=69189ec8de7bf3ecb214bae05c98e20c330ac05fc42a6d6e20a6ee6aad836840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4PDNAX%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBWYXZsj0lBW6JACEzsgp8S%2F3OBIWWNd8SQMkZ49rHihAiEA8DhjaUFFILk37chisjKtmeCmjKQra41CCN7lSzfjVyIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwE%2FP4BCgS8n%2FX4RircA3Y7BRRxAbogX26VoQpnFQbr1wSt6NrNRixntFZYHxxJlar54H496xU4hwqdIrtL%2Bws5BvAYt1y%2BiwxYF%2B4Hq3RTLOlte33sXqgatzhCGZV6zEmvhO3Tvsh4t2F834qC7EiGx2mIHVOTJEbo2hN0xN0e34IAyUi5O%2FohQsGZtOk02cH8dnXIFxTqZUjhJymVS7x8fUQ7pnYhqAGLNJ2q2mWY9g324MYfi%2Bed9%2F0uP2uuIOkJOR51hUU%2BYUjuIpXY9PxWWLE6YaiCrzKFwJhdrX%2Fc7W13fnjepxoL5dcuPasjo0jwaQ7W8OtQF5f7C5JMsHsQdMfOiIeHZ45kElrz0rZkngmMY2sR3%2B6qR%2FZcdhLmmBOv4pQ%2BSZurAK6XshM%2BdvV1%2BRQ4jsituyZGTNNPLz7NnoWYADm00nPbF26PnkE305EBSNaro77ZIOPukzB62NWfHX7tg1g7sVKTNpZNdZ1jiElWg3KD%2FtBLt5F6adPtxx8d%2B%2FfMYwV0NHBkENfep8fsgvbZDPpNFAm0V%2BeR6JXaUwFBU4FsyJxGokYPV4YGWsW6J%2BAT4EvDq40VktR7yMNG2GQQZUqEJU%2FrXg0eiOktu3NdP1owtyayrd8jpa8%2FfrJvSKgZJ1LbmOcEMOKlwM8GOqUBaFAW4I3JM%2FyQkezwAB0MCGkz3PDs6RN6p41fxlALAChuAK%2ByBhV%2BzJQxFDYZ7ckgPEeqmWOU%2Fbo8AVnGSAgHgHVND%2BMGn4j%2FFxjOxy7OF5IH9PIemscUdlU4Ove5PMIE4BblZ1gkVSz95u1c%2FnUk4Aiu%2FndmjQyCyVvsCwT21Z%2FDF06LBR4y3h%2FqnxzPqBaBzFktDrG6YHrpR1MvZDXMTyoLN97Q&X-Amz-Signature=e270b2ed206118d781ef70ff915c5df4c8555bd09db28d4cf38169599ac5966a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
