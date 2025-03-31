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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IF2X5Y%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHS%2FTLGS0F%2BEW43Kee834izdqS%2FGsFT2pnf0TA8N1bO0AiBRuhAEkcUFXVkjE4RugToEJqrDQG8GaPgoKpURY95p6CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKwwx45EO%2FDPMyX4VKtwDuB9JvLcv%2FDs72OFq8fsZnUB1CYroqbisQyLr%2BEPgonNjtXg47CYhb8wrudtGr0V87mDlzhihEvlXbg%2FyZFQ0vUFjvwocqw5gm6WjQqmpRcM1oJoOdeQSBXQs0NJtT1daIS9d7%2BCV%2B9u5DxqVYfrCYVHI4UKSjdOp6mTLRJaPBLBGkwREDJvFeyNURpwkwuH37rB7NCY4f7k0IBSE8lk1TQ4FY6zKl28ya5DSywO0kQ5Voy2fvJB4%2Ff6FgP930UysEd3HxuB%2BadfzqfPOJzv6X83YrTCYVEeV%2BwMv68ut4pIe%2F0c56NpFBvnoC01%2F%2BInxbb21r3JHWM5mIeBS5LVDBpxsPGmuyVBte7d%2Blw3jN5caQeISde3Y%2FOD5HsMs5vwUlRboPNJna7Ubmf1HNP3fb1SAlCtxLsxT9ZxKtc%2BJFuk%2BdxkKVdnSkImoQ2D133o8%2BqrPyz0N%2B6xWNus97vP7kU%2B5nQxR0aqu2bmHrL6IQs4h3SKyes%2FEnoZOanpTERPKDFJPk7zywUjDpoI5oC73o7qrFXSgx2kXaIRBxdm8TtaLwfNgvA8kNrzOOJBNrMZgqIFXxJ%2BsqaPJ5XW65ICdVXgqdhmKMhE5QwTKWOudJbLZIfAb1UQiu2sgkFgw2M2qvwY6pgFuztjnDteMXoR1uGR3iUJ0EWI6f%2FRbQ4gWtxE3rSR1z%2BEPwdnTY%2FAO%2B0glEgjhVPcUE4I3yzE31OJZnweMpr%2BUyQL61mRf8on48Z6z4r1MDeisZdfEOM4ccuRIa4lv9HEBgcwB69AkAPUXH92erzsDndSwSHc%2Bq6mpubZ%2BDied2dRhPZdM95WYOcmpT0EWZMmLNFndfboBdZs6xCpIYpQk4OlYsayk&X-Amz-Signature=d584cdd164f19f434d526726964c699e3e840d4d649579cabb0c29e6cd7b42f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IF2X5Y%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHS%2FTLGS0F%2BEW43Kee834izdqS%2FGsFT2pnf0TA8N1bO0AiBRuhAEkcUFXVkjE4RugToEJqrDQG8GaPgoKpURY95p6CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKwwx45EO%2FDPMyX4VKtwDuB9JvLcv%2FDs72OFq8fsZnUB1CYroqbisQyLr%2BEPgonNjtXg47CYhb8wrudtGr0V87mDlzhihEvlXbg%2FyZFQ0vUFjvwocqw5gm6WjQqmpRcM1oJoOdeQSBXQs0NJtT1daIS9d7%2BCV%2B9u5DxqVYfrCYVHI4UKSjdOp6mTLRJaPBLBGkwREDJvFeyNURpwkwuH37rB7NCY4f7k0IBSE8lk1TQ4FY6zKl28ya5DSywO0kQ5Voy2fvJB4%2Ff6FgP930UysEd3HxuB%2BadfzqfPOJzv6X83YrTCYVEeV%2BwMv68ut4pIe%2F0c56NpFBvnoC01%2F%2BInxbb21r3JHWM5mIeBS5LVDBpxsPGmuyVBte7d%2Blw3jN5caQeISde3Y%2FOD5HsMs5vwUlRboPNJna7Ubmf1HNP3fb1SAlCtxLsxT9ZxKtc%2BJFuk%2BdxkKVdnSkImoQ2D133o8%2BqrPyz0N%2B6xWNus97vP7kU%2B5nQxR0aqu2bmHrL6IQs4h3SKyes%2FEnoZOanpTERPKDFJPk7zywUjDpoI5oC73o7qrFXSgx2kXaIRBxdm8TtaLwfNgvA8kNrzOOJBNrMZgqIFXxJ%2BsqaPJ5XW65ICdVXgqdhmKMhE5QwTKWOudJbLZIfAb1UQiu2sgkFgw2M2qvwY6pgFuztjnDteMXoR1uGR3iUJ0EWI6f%2FRbQ4gWtxE3rSR1z%2BEPwdnTY%2FAO%2B0glEgjhVPcUE4I3yzE31OJZnweMpr%2BUyQL61mRf8on48Z6z4r1MDeisZdfEOM4ccuRIa4lv9HEBgcwB69AkAPUXH92erzsDndSwSHc%2Bq6mpubZ%2BDied2dRhPZdM95WYOcmpT0EWZMmLNFndfboBdZs6xCpIYpQk4OlYsayk&X-Amz-Signature=382e8067e4af79ab52cb500a4bdd034c28f4025dcca0659d11841b735776f9a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IF2X5Y%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIHS%2FTLGS0F%2BEW43Kee834izdqS%2FGsFT2pnf0TA8N1bO0AiBRuhAEkcUFXVkjE4RugToEJqrDQG8GaPgoKpURY95p6CqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKwwx45EO%2FDPMyX4VKtwDuB9JvLcv%2FDs72OFq8fsZnUB1CYroqbisQyLr%2BEPgonNjtXg47CYhb8wrudtGr0V87mDlzhihEvlXbg%2FyZFQ0vUFjvwocqw5gm6WjQqmpRcM1oJoOdeQSBXQs0NJtT1daIS9d7%2BCV%2B9u5DxqVYfrCYVHI4UKSjdOp6mTLRJaPBLBGkwREDJvFeyNURpwkwuH37rB7NCY4f7k0IBSE8lk1TQ4FY6zKl28ya5DSywO0kQ5Voy2fvJB4%2Ff6FgP930UysEd3HxuB%2BadfzqfPOJzv6X83YrTCYVEeV%2BwMv68ut4pIe%2F0c56NpFBvnoC01%2F%2BInxbb21r3JHWM5mIeBS5LVDBpxsPGmuyVBte7d%2Blw3jN5caQeISde3Y%2FOD5HsMs5vwUlRboPNJna7Ubmf1HNP3fb1SAlCtxLsxT9ZxKtc%2BJFuk%2BdxkKVdnSkImoQ2D133o8%2BqrPyz0N%2B6xWNus97vP7kU%2B5nQxR0aqu2bmHrL6IQs4h3SKyes%2FEnoZOanpTERPKDFJPk7zywUjDpoI5oC73o7qrFXSgx2kXaIRBxdm8TtaLwfNgvA8kNrzOOJBNrMZgqIFXxJ%2BsqaPJ5XW65ICdVXgqdhmKMhE5QwTKWOudJbLZIfAb1UQiu2sgkFgw2M2qvwY6pgFuztjnDteMXoR1uGR3iUJ0EWI6f%2FRbQ4gWtxE3rSR1z%2BEPwdnTY%2FAO%2B0glEgjhVPcUE4I3yzE31OJZnweMpr%2BUyQL61mRf8on48Z6z4r1MDeisZdfEOM4ccuRIa4lv9HEBgcwB69AkAPUXH92erzsDndSwSHc%2Bq6mpubZ%2BDied2dRhPZdM95WYOcmpT0EWZMmLNFndfboBdZs6xCpIYpQk4OlYsayk&X-Amz-Signature=e54a9f9d6a4ebeb3a4ab896571da8bd49a4b6fbbd156abba321ead39f461db86&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
