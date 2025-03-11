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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5M56RWW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDjPlJzBoyuic4fmSvGQoIOz4nRk4GCRJLtiWi2ZBRUewIgAT67rbkrroZa5nBRDusGzqexkv2%2BEpim%2FOZJ9q%2FEE8IqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQzjOX0m8k8xWv9vCrcA7sgN45JeVLyJTCaiQz5OB4NE2g3IlcukkAM0UQyHlsS22lb68Kyjf%2B0AwdkEU9Mmpkbvc7qZ7pb6JpeK9l9YY%2Fzxq31ouAbOrLa2DtZEBKYRQeUK88T5hiUynyoSbD6aA0E4cPcnSrkMcnEqNoBncgS1nnsbpFcB2XKZMdO0484LV6EAcAs53UOXQrKcfGL2et6yWtDafmlNXd0f6q8G1Zo9VRy%2FF2pF8s0dcx%2B8YHxEgH%2FWIr8MPGLIPwbq1CgLtuFLosBI8X5owoOmwwoy4UTe60tH6TkVTSN2Qi%2BHGOsg7LrCOZymU2pTR4GMXmbxVON68FZrCNkzXiQwqYWM9W%2FnCEEc814lP1m2bEJm70YBo2UjQV0T01o5%2FSYyM7R50FEt2VdBdwmcis2eskFpFrX%2FeQ2pnq%2FgyJqwDqxklxMyv4up2zioofGG65Gdz69lFkXYW683wT%2FESgaiXT3%2Faesos2GyJdFfEJ1BOH96WwXkkDVUbZeeu1MjRXFwZ3p7QovBUxYyiN%2F56elbOO09%2B8gwdRWq0wYdRctzF1CKtV8H97cXP%2F9wporbSEII540eD9AU%2FQK0fFJtiK7kXoJ0UiTJTiOCB0lUVFC4%2B%2BxGEaYOuz8pfPgpw%2FNJwVXMNixwr4GOqUB9sL0WPkt%2FtAXoqi%2BI2Hx2Ct1Z8xyfPSZIau5GUtxr395KwgilVbmC7DiBW45cEy6dqSNy1JmhCzHlSpfnh9neF5lNiqHzei%2B%2FtiRRwToR%2BiGkkLNiQTCq%2FcT4amm5hSDY%2Bo5Fjmfi9RuRVj086MM6BqnX2TFIZFH55S1SrkBI%2B1CCaBv9dX5EGMVFTNZEAzgmNvupbqvAljov6kyDNcM9MeX4aUL&X-Amz-Signature=b97921d24b94eae581954ccfc08422b57d23fdd7c9c3c00bffd29547dac88071&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5M56RWW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDjPlJzBoyuic4fmSvGQoIOz4nRk4GCRJLtiWi2ZBRUewIgAT67rbkrroZa5nBRDusGzqexkv2%2BEpim%2FOZJ9q%2FEE8IqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQzjOX0m8k8xWv9vCrcA7sgN45JeVLyJTCaiQz5OB4NE2g3IlcukkAM0UQyHlsS22lb68Kyjf%2B0AwdkEU9Mmpkbvc7qZ7pb6JpeK9l9YY%2Fzxq31ouAbOrLa2DtZEBKYRQeUK88T5hiUynyoSbD6aA0E4cPcnSrkMcnEqNoBncgS1nnsbpFcB2XKZMdO0484LV6EAcAs53UOXQrKcfGL2et6yWtDafmlNXd0f6q8G1Zo9VRy%2FF2pF8s0dcx%2B8YHxEgH%2FWIr8MPGLIPwbq1CgLtuFLosBI8X5owoOmwwoy4UTe60tH6TkVTSN2Qi%2BHGOsg7LrCOZymU2pTR4GMXmbxVON68FZrCNkzXiQwqYWM9W%2FnCEEc814lP1m2bEJm70YBo2UjQV0T01o5%2FSYyM7R50FEt2VdBdwmcis2eskFpFrX%2FeQ2pnq%2FgyJqwDqxklxMyv4up2zioofGG65Gdz69lFkXYW683wT%2FESgaiXT3%2Faesos2GyJdFfEJ1BOH96WwXkkDVUbZeeu1MjRXFwZ3p7QovBUxYyiN%2F56elbOO09%2B8gwdRWq0wYdRctzF1CKtV8H97cXP%2F9wporbSEII540eD9AU%2FQK0fFJtiK7kXoJ0UiTJTiOCB0lUVFC4%2B%2BxGEaYOuz8pfPgpw%2FNJwVXMNixwr4GOqUB9sL0WPkt%2FtAXoqi%2BI2Hx2Ct1Z8xyfPSZIau5GUtxr395KwgilVbmC7DiBW45cEy6dqSNy1JmhCzHlSpfnh9neF5lNiqHzei%2B%2FtiRRwToR%2BiGkkLNiQTCq%2FcT4amm5hSDY%2Bo5Fjmfi9RuRVj086MM6BqnX2TFIZFH55S1SrkBI%2B1CCaBv9dX5EGMVFTNZEAzgmNvupbqvAljov6kyDNcM9MeX4aUL&X-Amz-Signature=41352d927a393dc19214c14c862ba597376981f8a99838e775adaec5bed4a923&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5M56RWW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T210315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDjPlJzBoyuic4fmSvGQoIOz4nRk4GCRJLtiWi2ZBRUewIgAT67rbkrroZa5nBRDusGzqexkv2%2BEpim%2FOZJ9q%2FEE8IqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQzjOX0m8k8xWv9vCrcA7sgN45JeVLyJTCaiQz5OB4NE2g3IlcukkAM0UQyHlsS22lb68Kyjf%2B0AwdkEU9Mmpkbvc7qZ7pb6JpeK9l9YY%2Fzxq31ouAbOrLa2DtZEBKYRQeUK88T5hiUynyoSbD6aA0E4cPcnSrkMcnEqNoBncgS1nnsbpFcB2XKZMdO0484LV6EAcAs53UOXQrKcfGL2et6yWtDafmlNXd0f6q8G1Zo9VRy%2FF2pF8s0dcx%2B8YHxEgH%2FWIr8MPGLIPwbq1CgLtuFLosBI8X5owoOmwwoy4UTe60tH6TkVTSN2Qi%2BHGOsg7LrCOZymU2pTR4GMXmbxVON68FZrCNkzXiQwqYWM9W%2FnCEEc814lP1m2bEJm70YBo2UjQV0T01o5%2FSYyM7R50FEt2VdBdwmcis2eskFpFrX%2FeQ2pnq%2FgyJqwDqxklxMyv4up2zioofGG65Gdz69lFkXYW683wT%2FESgaiXT3%2Faesos2GyJdFfEJ1BOH96WwXkkDVUbZeeu1MjRXFwZ3p7QovBUxYyiN%2F56elbOO09%2B8gwdRWq0wYdRctzF1CKtV8H97cXP%2F9wporbSEII540eD9AU%2FQK0fFJtiK7kXoJ0UiTJTiOCB0lUVFC4%2B%2BxGEaYOuz8pfPgpw%2FNJwVXMNixwr4GOqUB9sL0WPkt%2FtAXoqi%2BI2Hx2Ct1Z8xyfPSZIau5GUtxr395KwgilVbmC7DiBW45cEy6dqSNy1JmhCzHlSpfnh9neF5lNiqHzei%2B%2FtiRRwToR%2BiGkkLNiQTCq%2FcT4amm5hSDY%2Bo5Fjmfi9RuRVj086MM6BqnX2TFIZFH55S1SrkBI%2B1CCaBv9dX5EGMVFTNZEAzgmNvupbqvAljov6kyDNcM9MeX4aUL&X-Amz-Signature=5b81cd6c15a5486b1d4a5aeedc6b98286d6aaa959e850007a769d89871c2c172&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
