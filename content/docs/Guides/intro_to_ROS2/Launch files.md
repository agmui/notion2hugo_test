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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRS5UIVW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3l%2BWNdyQiYu3UhuQzb0B4OjBL0TX1FNi%2BUo%2BDdJM3rgIhAN6KnVdxLeJ0%2F1ZwsfJqYhlOUuRMXwNpnGACll3IdjquKv8DCGsQABoMNjM3NDIzMTgzODA1IgxgZeDoSuXEXgeiGcIq3APwZkrSvL%2BQgN8D37UbBDFj5pvVcUw6At47KFQARO%2FAejysv1Q0t6%2FfDzjETM%2BpG5SuymkLu%2BxZFuRwAOQGz0j0d5pqtq3lgB16pIXV%2FFaXIE6NOKy0S6FU6%2BS2EyU%2BNhYoWlG6h4oKgUs97f9K8wJp6oxHOgciJREzacB1TLJgIh1dx3YvwiikZW%2FUmukA8UG2WegvEKQOq1fWy074JRc5R19nKU%2FActHPvRldErdKkxZRaDgWzYWxnJBjk%2Fs7ean1elWeLcMhPf%2Fwtqcmq8n151UCS1VNhsRwJbgmhF3ymaeg%2Fk5nFDxgGNgvtIzKUpWg8bV026DAMOkNeA5rBdFbeCtVStVuMhFVG33L7dvNn6gho3G%2F53xQ%2BHx508nz6gKfP19tJDL9Q3%2BcvVcm5r9F0QNCuLJYzGHznKjNH1BK3XZ2lXGjxBReRSU%2BJg30uuR9hgmqzH3tTVUoC0j0ASsmdKXpGVp2YWGi4COPgHfDEnjETgp4n5wGoobLZSSuYbMjWQdu2XiGUdmGIcObk8nwWL1j8b88hlCqOG9eJ3ayHBQJQcN11psJd1eqt593mVCk2rmlxZQEAqMPEfy5nIzE7r8McOgTYu3n9Vyt2YMe7Z3IZMzhzSd7VgYohDCd9ffCBjqkAcaaXLUdJ3F4khBHfoxtK2pPT%2F4t3oIs2F6Fw3c0otZGiqRTjYWcFSP2QptkoFpNxzyzUIoNNfs7vqqJCNCY37IzQ4xg3iQa%2FshappEU8nnWlAUqQmA%2BzBC8zwY%2Fm5bJ4nxZZ8T9UMhorNYIyicnonN%2FeULW6aU9EcDF3iAlLFu5LiTaAc1%2B%2FDYXrUk4vI9E7Kda48CHjBBiECIlPXZ2z7q7BnMc&X-Amz-Signature=355c9a599a0eeda58e06868d9f65da3e9969f46d03f297484cc15a3cc5aa2320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRS5UIVW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3l%2BWNdyQiYu3UhuQzb0B4OjBL0TX1FNi%2BUo%2BDdJM3rgIhAN6KnVdxLeJ0%2F1ZwsfJqYhlOUuRMXwNpnGACll3IdjquKv8DCGsQABoMNjM3NDIzMTgzODA1IgxgZeDoSuXEXgeiGcIq3APwZkrSvL%2BQgN8D37UbBDFj5pvVcUw6At47KFQARO%2FAejysv1Q0t6%2FfDzjETM%2BpG5SuymkLu%2BxZFuRwAOQGz0j0d5pqtq3lgB16pIXV%2FFaXIE6NOKy0S6FU6%2BS2EyU%2BNhYoWlG6h4oKgUs97f9K8wJp6oxHOgciJREzacB1TLJgIh1dx3YvwiikZW%2FUmukA8UG2WegvEKQOq1fWy074JRc5R19nKU%2FActHPvRldErdKkxZRaDgWzYWxnJBjk%2Fs7ean1elWeLcMhPf%2Fwtqcmq8n151UCS1VNhsRwJbgmhF3ymaeg%2Fk5nFDxgGNgvtIzKUpWg8bV026DAMOkNeA5rBdFbeCtVStVuMhFVG33L7dvNn6gho3G%2F53xQ%2BHx508nz6gKfP19tJDL9Q3%2BcvVcm5r9F0QNCuLJYzGHznKjNH1BK3XZ2lXGjxBReRSU%2BJg30uuR9hgmqzH3tTVUoC0j0ASsmdKXpGVp2YWGi4COPgHfDEnjETgp4n5wGoobLZSSuYbMjWQdu2XiGUdmGIcObk8nwWL1j8b88hlCqOG9eJ3ayHBQJQcN11psJd1eqt593mVCk2rmlxZQEAqMPEfy5nIzE7r8McOgTYu3n9Vyt2YMe7Z3IZMzhzSd7VgYohDCd9ffCBjqkAcaaXLUdJ3F4khBHfoxtK2pPT%2F4t3oIs2F6Fw3c0otZGiqRTjYWcFSP2QptkoFpNxzyzUIoNNfs7vqqJCNCY37IzQ4xg3iQa%2FshappEU8nnWlAUqQmA%2BzBC8zwY%2Fm5bJ4nxZZ8T9UMhorNYIyicnonN%2FeULW6aU9EcDF3iAlLFu5LiTaAc1%2B%2FDYXrUk4vI9E7Kda48CHjBBiECIlPXZ2z7q7BnMc&X-Amz-Signature=54fed8faa405d13db848132dc110e3652080ddb1026e1f5dac9854769588ab62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRS5UIVW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC3l%2BWNdyQiYu3UhuQzb0B4OjBL0TX1FNi%2BUo%2BDdJM3rgIhAN6KnVdxLeJ0%2F1ZwsfJqYhlOUuRMXwNpnGACll3IdjquKv8DCGsQABoMNjM3NDIzMTgzODA1IgxgZeDoSuXEXgeiGcIq3APwZkrSvL%2BQgN8D37UbBDFj5pvVcUw6At47KFQARO%2FAejysv1Q0t6%2FfDzjETM%2BpG5SuymkLu%2BxZFuRwAOQGz0j0d5pqtq3lgB16pIXV%2FFaXIE6NOKy0S6FU6%2BS2EyU%2BNhYoWlG6h4oKgUs97f9K8wJp6oxHOgciJREzacB1TLJgIh1dx3YvwiikZW%2FUmukA8UG2WegvEKQOq1fWy074JRc5R19nKU%2FActHPvRldErdKkxZRaDgWzYWxnJBjk%2Fs7ean1elWeLcMhPf%2Fwtqcmq8n151UCS1VNhsRwJbgmhF3ymaeg%2Fk5nFDxgGNgvtIzKUpWg8bV026DAMOkNeA5rBdFbeCtVStVuMhFVG33L7dvNn6gho3G%2F53xQ%2BHx508nz6gKfP19tJDL9Q3%2BcvVcm5r9F0QNCuLJYzGHznKjNH1BK3XZ2lXGjxBReRSU%2BJg30uuR9hgmqzH3tTVUoC0j0ASsmdKXpGVp2YWGi4COPgHfDEnjETgp4n5wGoobLZSSuYbMjWQdu2XiGUdmGIcObk8nwWL1j8b88hlCqOG9eJ3ayHBQJQcN11psJd1eqt593mVCk2rmlxZQEAqMPEfy5nIzE7r8McOgTYu3n9Vyt2YMe7Z3IZMzhzSd7VgYohDCd9ffCBjqkAcaaXLUdJ3F4khBHfoxtK2pPT%2F4t3oIs2F6Fw3c0otZGiqRTjYWcFSP2QptkoFpNxzyzUIoNNfs7vqqJCNCY37IzQ4xg3iQa%2FshappEU8nnWlAUqQmA%2BzBC8zwY%2Fm5bJ4nxZZ8T9UMhorNYIyicnonN%2FeULW6aU9EcDF3iAlLFu5LiTaAc1%2B%2FDYXrUk4vI9E7Kda48CHjBBiECIlPXZ2z7q7BnMc&X-Amz-Signature=2b1c52cbd025dd9c965cadd36428b8a37af93533295bee7e40bc5e797f2a2047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
