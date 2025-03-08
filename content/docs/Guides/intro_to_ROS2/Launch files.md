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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIBTUQ7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFBXp2cxrhxObMDdPbvTw7H2MivR0dAZriySd9Ny6C3HAiAErJ2F4N%2BrE7vYlQq836GcBXGg4Mwr0vYtsNcjGWSVoSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMtlmCJYijXkm8Z73uKtwDnn7RDyXBlteRdMSejbL%2BNzhJSgHxZjZjSlWhPG2DiIIqn9g5HKliMk4upJcnGfaQD6l%2FskHmP7puZU%2BWjcF53PH5ulETj9FyBtii09aQLnTsXdUZOkOz2pYtgl21Rs7qE0ZyJPh1RFWDk7KFfjklzPLZij2N7do4o6GQzv9RcO5W%2Bv5xO9XUh4qryvu%2BOPj5mDG1xXiGjjR1zRZ6zJyKSaEDiEulpt8aFhSn6SXfRis%2Fdv6k7gkL6EBygILpj8dUxV8ggG1jjCoTlZrJtbbgr5CtY4YaKsBvQHzODqSDy283sOABNKDl1NWS6%2FxlyC9aG9Agm7ZpqCZdDAy2RtprdVWLjylGn3qamxK9F20q8%2FRCy9wbpKk2YwhNhQh73rVuig88vnzn1wbemSWX6K02Zz64YAvUiNZnB38ilIcTunPrRTOKUGfmb0q8veln6y%2B%2FFK75mMOpRtr4KAFaefW%2FAUW7pN5u9gXQt07dw7nZHOobCi9BijJRVsnvAlBb4mOLbf6yQUqTB57d2C8zraZt%2FxiQPygZYw1G3fbaKw9m60YHrggwG4bnwv8saxhxg5c%2FMHaOeP5RtKX1RtCekIOFKFAUMeDSMgppx7PPT68ikXgLDb24NYaABbsbE18w4aavvgY6pgFWd9IMyag853EStGjoqeHzLmgPNfM6O8svAlwgjd2XBAQgs9OuqKHMrXBlZ8E37vyfnevay8cPA7PBbsBxD5liV3FRVObvAfbEGDj52%2Ff4TUHnkMKtNOW%2FdoheKbXeUNjH0noS0i8%2B38OoooExiaSKetmuCcpCYAWN6kNnIYLuvUyDTErWcsHzNE3%2Fu9%2BPP2LWLmoih9rOifxZAYWhbVOrOdLdvTEL&X-Amz-Signature=28b21561bf83939e9e2b8b4d92304f779fb74bf11f38a15b4cf032a2e15f0c57&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIBTUQ7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFBXp2cxrhxObMDdPbvTw7H2MivR0dAZriySd9Ny6C3HAiAErJ2F4N%2BrE7vYlQq836GcBXGg4Mwr0vYtsNcjGWSVoSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMtlmCJYijXkm8Z73uKtwDnn7RDyXBlteRdMSejbL%2BNzhJSgHxZjZjSlWhPG2DiIIqn9g5HKliMk4upJcnGfaQD6l%2FskHmP7puZU%2BWjcF53PH5ulETj9FyBtii09aQLnTsXdUZOkOz2pYtgl21Rs7qE0ZyJPh1RFWDk7KFfjklzPLZij2N7do4o6GQzv9RcO5W%2Bv5xO9XUh4qryvu%2BOPj5mDG1xXiGjjR1zRZ6zJyKSaEDiEulpt8aFhSn6SXfRis%2Fdv6k7gkL6EBygILpj8dUxV8ggG1jjCoTlZrJtbbgr5CtY4YaKsBvQHzODqSDy283sOABNKDl1NWS6%2FxlyC9aG9Agm7ZpqCZdDAy2RtprdVWLjylGn3qamxK9F20q8%2FRCy9wbpKk2YwhNhQh73rVuig88vnzn1wbemSWX6K02Zz64YAvUiNZnB38ilIcTunPrRTOKUGfmb0q8veln6y%2B%2FFK75mMOpRtr4KAFaefW%2FAUW7pN5u9gXQt07dw7nZHOobCi9BijJRVsnvAlBb4mOLbf6yQUqTB57d2C8zraZt%2FxiQPygZYw1G3fbaKw9m60YHrggwG4bnwv8saxhxg5c%2FMHaOeP5RtKX1RtCekIOFKFAUMeDSMgppx7PPT68ikXgLDb24NYaABbsbE18w4aavvgY6pgFWd9IMyag853EStGjoqeHzLmgPNfM6O8svAlwgjd2XBAQgs9OuqKHMrXBlZ8E37vyfnevay8cPA7PBbsBxD5liV3FRVObvAfbEGDj52%2Ff4TUHnkMKtNOW%2FdoheKbXeUNjH0noS0i8%2B38OoooExiaSKetmuCcpCYAWN6kNnIYLuvUyDTErWcsHzNE3%2Fu9%2BPP2LWLmoih9rOifxZAYWhbVOrOdLdvTEL&X-Amz-Signature=9e8d568ea986550b182f13131454416745fb0daf67aa1d9eb9ff1149a95bca7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIBTUQ7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T060838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIFBXp2cxrhxObMDdPbvTw7H2MivR0dAZriySd9Ny6C3HAiAErJ2F4N%2BrE7vYlQq836GcBXGg4Mwr0vYtsNcjGWSVoSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMtlmCJYijXkm8Z73uKtwDnn7RDyXBlteRdMSejbL%2BNzhJSgHxZjZjSlWhPG2DiIIqn9g5HKliMk4upJcnGfaQD6l%2FskHmP7puZU%2BWjcF53PH5ulETj9FyBtii09aQLnTsXdUZOkOz2pYtgl21Rs7qE0ZyJPh1RFWDk7KFfjklzPLZij2N7do4o6GQzv9RcO5W%2Bv5xO9XUh4qryvu%2BOPj5mDG1xXiGjjR1zRZ6zJyKSaEDiEulpt8aFhSn6SXfRis%2Fdv6k7gkL6EBygILpj8dUxV8ggG1jjCoTlZrJtbbgr5CtY4YaKsBvQHzODqSDy283sOABNKDl1NWS6%2FxlyC9aG9Agm7ZpqCZdDAy2RtprdVWLjylGn3qamxK9F20q8%2FRCy9wbpKk2YwhNhQh73rVuig88vnzn1wbemSWX6K02Zz64YAvUiNZnB38ilIcTunPrRTOKUGfmb0q8veln6y%2B%2FFK75mMOpRtr4KAFaefW%2FAUW7pN5u9gXQt07dw7nZHOobCi9BijJRVsnvAlBb4mOLbf6yQUqTB57d2C8zraZt%2FxiQPygZYw1G3fbaKw9m60YHrggwG4bnwv8saxhxg5c%2FMHaOeP5RtKX1RtCekIOFKFAUMeDSMgppx7PPT68ikXgLDb24NYaABbsbE18w4aavvgY6pgFWd9IMyag853EStGjoqeHzLmgPNfM6O8svAlwgjd2XBAQgs9OuqKHMrXBlZ8E37vyfnevay8cPA7PBbsBxD5liV3FRVObvAfbEGDj52%2Ff4TUHnkMKtNOW%2FdoheKbXeUNjH0noS0i8%2B38OoooExiaSKetmuCcpCYAWN6kNnIYLuvUyDTErWcsHzNE3%2Fu9%2BPP2LWLmoih9rOifxZAYWhbVOrOdLdvTEL&X-Amz-Signature=2d0cd9f2829dd2800eda4ae57f4699db8637cb4252c6190122eded793c59a97e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
