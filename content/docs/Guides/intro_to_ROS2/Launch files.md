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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNDETYJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBjougwMlOqak9jBBJVkYUO%2FO53uPPsYMGWoMxlVmrc0AiASse2Tt%2BUiASrIus42TuMdYc3c2CwH6fndE85JcuofGSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeUQDHDh%2B6WtDibeKtwDHz%2FHv5W5TqnKyddzxdnpCcLyaBJxvPmryFRqWzbFZfszqE%2FPyFs4uVqCz9wbeEz9HcQbJCgauiwF0D9noajciRaERfJTa7NqZ2XqOtpvIEGEYbbDEvvI4Yn1%2BmeXIpdFDrbGcDqF7kWMJjsxkyDqFpPzVNJn9Kvda8%2FhZNconTu4Ef37XLcgrgtYTJ%2FDiH1pG7xqWSSt0nDEQkNuIOCWR8Yys15mPGmHQzS826LnEqWgr9oJX8Yz%2FREG46nLCHjcI88Ar75g5uposMa6yYn7%2BNPvz34TXazcZOiZofr6Ronu%2BPyiIH8vfyXQH8LIbHCPrWiKSjdOmmMIajHSB%2FBPoR8o16nmnHCJr68YxOXlOA511p%2BHoWCEvh36O5ycXJgfOa2mKZ43wCdYOIS4Nl9ArSkEpgNmU2ltKt4u8Yf0y%2BW1K5drYI7loNsnY6EigLv94K4XnqpKsWHqC4I2QvfQVMMbwxDO40yq%2FQL26ctlOOrhKIdpHJUSf%2Fvz2ELN%2Fr46QB0IItR%2BTykeZ98jf5cuEHjasYYiRoyVfgEBZ5TtGOey%2BLTXPYcoQGjn2NbEPtQ%2BdJNv61RUooSsoE32flK7hM6sV2VrQos7sLlIO4vWptRLscTb1IJKXUXcja4w2v%2BmwAY6pgEv1WE1jr4eCudBwLBAL20N8tagBo2jFy6PaxHge9ceSWqazvGLYpY%2FuTaRhWBt2MMMSf0TmoJE9yPoN5OOuTcK9oxbteDjfCAJWHn319sv%2BbNvcKo%2FgTGeyObRb0jgeB67hb9IN5MFUZItHZHOnz5WtvrL%2BJAmA6j%2FjTXXFVBeNm%2FXo%2BpY7%2FLbQtJJ0Szy2B8Gqie%2BUCdLdZEl0w4NK229iGbyemf0&X-Amz-Signature=1a97e378bd8ceae7e13b72bda5fba68b675520640094b84ffd98ed6ed5620727&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNDETYJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBjougwMlOqak9jBBJVkYUO%2FO53uPPsYMGWoMxlVmrc0AiASse2Tt%2BUiASrIus42TuMdYc3c2CwH6fndE85JcuofGSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeUQDHDh%2B6WtDibeKtwDHz%2FHv5W5TqnKyddzxdnpCcLyaBJxvPmryFRqWzbFZfszqE%2FPyFs4uVqCz9wbeEz9HcQbJCgauiwF0D9noajciRaERfJTa7NqZ2XqOtpvIEGEYbbDEvvI4Yn1%2BmeXIpdFDrbGcDqF7kWMJjsxkyDqFpPzVNJn9Kvda8%2FhZNconTu4Ef37XLcgrgtYTJ%2FDiH1pG7xqWSSt0nDEQkNuIOCWR8Yys15mPGmHQzS826LnEqWgr9oJX8Yz%2FREG46nLCHjcI88Ar75g5uposMa6yYn7%2BNPvz34TXazcZOiZofr6Ronu%2BPyiIH8vfyXQH8LIbHCPrWiKSjdOmmMIajHSB%2FBPoR8o16nmnHCJr68YxOXlOA511p%2BHoWCEvh36O5ycXJgfOa2mKZ43wCdYOIS4Nl9ArSkEpgNmU2ltKt4u8Yf0y%2BW1K5drYI7loNsnY6EigLv94K4XnqpKsWHqC4I2QvfQVMMbwxDO40yq%2FQL26ctlOOrhKIdpHJUSf%2Fvz2ELN%2Fr46QB0IItR%2BTykeZ98jf5cuEHjasYYiRoyVfgEBZ5TtGOey%2BLTXPYcoQGjn2NbEPtQ%2BdJNv61RUooSsoE32flK7hM6sV2VrQos7sLlIO4vWptRLscTb1IJKXUXcja4w2v%2BmwAY6pgEv1WE1jr4eCudBwLBAL20N8tagBo2jFy6PaxHge9ceSWqazvGLYpY%2FuTaRhWBt2MMMSf0TmoJE9yPoN5OOuTcK9oxbteDjfCAJWHn319sv%2BbNvcKo%2FgTGeyObRb0jgeB67hb9IN5MFUZItHZHOnz5WtvrL%2BJAmA6j%2FjTXXFVBeNm%2FXo%2BpY7%2FLbQtJJ0Szy2B8Gqie%2BUCdLdZEl0w4NK229iGbyemf0&X-Amz-Signature=1a2418c02f5a1ffa4f24e5f0286d75eb9f249230d5e01891e2d3e51ca41653ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WNDETYJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T050911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBjougwMlOqak9jBBJVkYUO%2FO53uPPsYMGWoMxlVmrc0AiASse2Tt%2BUiASrIus42TuMdYc3c2CwH6fndE85JcuofGSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeUQDHDh%2B6WtDibeKtwDHz%2FHv5W5TqnKyddzxdnpCcLyaBJxvPmryFRqWzbFZfszqE%2FPyFs4uVqCz9wbeEz9HcQbJCgauiwF0D9noajciRaERfJTa7NqZ2XqOtpvIEGEYbbDEvvI4Yn1%2BmeXIpdFDrbGcDqF7kWMJjsxkyDqFpPzVNJn9Kvda8%2FhZNconTu4Ef37XLcgrgtYTJ%2FDiH1pG7xqWSSt0nDEQkNuIOCWR8Yys15mPGmHQzS826LnEqWgr9oJX8Yz%2FREG46nLCHjcI88Ar75g5uposMa6yYn7%2BNPvz34TXazcZOiZofr6Ronu%2BPyiIH8vfyXQH8LIbHCPrWiKSjdOmmMIajHSB%2FBPoR8o16nmnHCJr68YxOXlOA511p%2BHoWCEvh36O5ycXJgfOa2mKZ43wCdYOIS4Nl9ArSkEpgNmU2ltKt4u8Yf0y%2BW1K5drYI7loNsnY6EigLv94K4XnqpKsWHqC4I2QvfQVMMbwxDO40yq%2FQL26ctlOOrhKIdpHJUSf%2Fvz2ELN%2Fr46QB0IItR%2BTykeZ98jf5cuEHjasYYiRoyVfgEBZ5TtGOey%2BLTXPYcoQGjn2NbEPtQ%2BdJNv61RUooSsoE32flK7hM6sV2VrQos7sLlIO4vWptRLscTb1IJKXUXcja4w2v%2BmwAY6pgEv1WE1jr4eCudBwLBAL20N8tagBo2jFy6PaxHge9ceSWqazvGLYpY%2FuTaRhWBt2MMMSf0TmoJE9yPoN5OOuTcK9oxbteDjfCAJWHn319sv%2BbNvcKo%2FgTGeyObRb0jgeB67hb9IN5MFUZItHZHOnz5WtvrL%2BJAmA6j%2FjTXXFVBeNm%2FXo%2BpY7%2FLbQtJJ0Szy2B8Gqie%2BUCdLdZEl0w4NK229iGbyemf0&X-Amz-Signature=51a4caf7b2dd23770567935288308edb6bad503b9004162400b1fd089fbbacc5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
