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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO2DJ4LZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvVcoOi2ZvCTGHq4sd5HLmv%2BFEaGe%2B79LlC1avudkCNgIhAIrSQLJR5hASXtzrr4oz6MTSWobuN4DaPxAgWBF%2FdpVdKv8DCGoQABoMNjM3NDIzMTgzODA1Igw%2Fw9zWOxeGWM5nXrwq3APg92m420DdQ200CgXTJeHzNo2%2BWfMtLFiRiArvGWCtV5Ard6hp6PS7QisnT9TR91nDxP0KNpN4E4PCRaHQDO2JuX7xQqvAm62SctQvqS%2FW0S6JfFPXVR%2BEbccP%2BOtKzVh1hAZVo54jMD4npsWbfUisOJpPc4jjwJge76fKoi8lh9L494Rys%2BaJm9Bm1xBAeiaUZfVX1Xjt4WiqKARLyZbMlIuDbB7ugR0RBAsDaNe1vriquEpZYuj5wfEMuJBi5TgBBvx2211a8KPx8sSbklvC%2B59WsrYnytsykpzMaH2wMlVPDQYpOdXhEh0Jk0aKVKwFS%2BxNaJq5IPDVWj74WcObUUndSr6WRhGMTJgvZl3WUbi1G9sn1R8DRY5mB7UxkuN3DjU5gV21SAd%2FUa7WEip%2BXY%2FaQwS3yQKnaycPq%2BKN2w7GX9TF5OOmNDnyi4ME%2BsDx9hcDPPHjR6eDI%2FiaLte0IbH2RVWMoJfkO97IvDK7lKLANcpKY1MrTCg8mDnsu5VwYo31nTUyRVI%2FPVlFnMpcQqKYrEeheyUrrYM2pQTdTOXktHaBDg5mVcXIIJl%2FD9xbTEoa4ArPaeIeawXY%2F%2B0f6IjB2j%2B%2B%2BiPzoMVuKaZhNwQGYr%2BdO3DKeHjhdzCj16TBBjqkAUtERN29LjKE%2FTzLh%2F4oNrVkdE7VxatnYcDhfsrnD2zi%2FzmVhayggIOREyOuilEvvBBDqmyp2aXXr1eWVlMI8iBGOkpwfpVD%2F0ZxTlW6hpdjG4FC5nsAja1nJ%2FeEDZYyQn7ewUZzpDXN2hMsJSjnBJlUS09Zwqh%2BoqMP6Q96Llj%2F%2F%2FCtG4QwP2%2BZvrlUY0kwgzyU%2FObHEmtMC%2Bhj6OJ6WtInVZUp&X-Amz-Signature=b318b8bd8d6a816be6219e6aff657968a2d3db3483e08016edcb64ef11312be6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO2DJ4LZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvVcoOi2ZvCTGHq4sd5HLmv%2BFEaGe%2B79LlC1avudkCNgIhAIrSQLJR5hASXtzrr4oz6MTSWobuN4DaPxAgWBF%2FdpVdKv8DCGoQABoMNjM3NDIzMTgzODA1Igw%2Fw9zWOxeGWM5nXrwq3APg92m420DdQ200CgXTJeHzNo2%2BWfMtLFiRiArvGWCtV5Ard6hp6PS7QisnT9TR91nDxP0KNpN4E4PCRaHQDO2JuX7xQqvAm62SctQvqS%2FW0S6JfFPXVR%2BEbccP%2BOtKzVh1hAZVo54jMD4npsWbfUisOJpPc4jjwJge76fKoi8lh9L494Rys%2BaJm9Bm1xBAeiaUZfVX1Xjt4WiqKARLyZbMlIuDbB7ugR0RBAsDaNe1vriquEpZYuj5wfEMuJBi5TgBBvx2211a8KPx8sSbklvC%2B59WsrYnytsykpzMaH2wMlVPDQYpOdXhEh0Jk0aKVKwFS%2BxNaJq5IPDVWj74WcObUUndSr6WRhGMTJgvZl3WUbi1G9sn1R8DRY5mB7UxkuN3DjU5gV21SAd%2FUa7WEip%2BXY%2FaQwS3yQKnaycPq%2BKN2w7GX9TF5OOmNDnyi4ME%2BsDx9hcDPPHjR6eDI%2FiaLte0IbH2RVWMoJfkO97IvDK7lKLANcpKY1MrTCg8mDnsu5VwYo31nTUyRVI%2FPVlFnMpcQqKYrEeheyUrrYM2pQTdTOXktHaBDg5mVcXIIJl%2FD9xbTEoa4ArPaeIeawXY%2F%2B0f6IjB2j%2B%2B%2BiPzoMVuKaZhNwQGYr%2BdO3DKeHjhdzCj16TBBjqkAUtERN29LjKE%2FTzLh%2F4oNrVkdE7VxatnYcDhfsrnD2zi%2FzmVhayggIOREyOuilEvvBBDqmyp2aXXr1eWVlMI8iBGOkpwfpVD%2F0ZxTlW6hpdjG4FC5nsAja1nJ%2FeEDZYyQn7ewUZzpDXN2hMsJSjnBJlUS09Zwqh%2BoqMP6Q96Llj%2F%2F%2FCtG4QwP2%2BZvrlUY0kwgzyU%2FObHEmtMC%2Bhj6OJ6WtInVZUp&X-Amz-Signature=15799564c58b01a411d773fdd703b5caca33266d3cc2d63c77670650f35d31a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO2DJ4LZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvVcoOi2ZvCTGHq4sd5HLmv%2BFEaGe%2B79LlC1avudkCNgIhAIrSQLJR5hASXtzrr4oz6MTSWobuN4DaPxAgWBF%2FdpVdKv8DCGoQABoMNjM3NDIzMTgzODA1Igw%2Fw9zWOxeGWM5nXrwq3APg92m420DdQ200CgXTJeHzNo2%2BWfMtLFiRiArvGWCtV5Ard6hp6PS7QisnT9TR91nDxP0KNpN4E4PCRaHQDO2JuX7xQqvAm62SctQvqS%2FW0S6JfFPXVR%2BEbccP%2BOtKzVh1hAZVo54jMD4npsWbfUisOJpPc4jjwJge76fKoi8lh9L494Rys%2BaJm9Bm1xBAeiaUZfVX1Xjt4WiqKARLyZbMlIuDbB7ugR0RBAsDaNe1vriquEpZYuj5wfEMuJBi5TgBBvx2211a8KPx8sSbklvC%2B59WsrYnytsykpzMaH2wMlVPDQYpOdXhEh0Jk0aKVKwFS%2BxNaJq5IPDVWj74WcObUUndSr6WRhGMTJgvZl3WUbi1G9sn1R8DRY5mB7UxkuN3DjU5gV21SAd%2FUa7WEip%2BXY%2FaQwS3yQKnaycPq%2BKN2w7GX9TF5OOmNDnyi4ME%2BsDx9hcDPPHjR6eDI%2FiaLte0IbH2RVWMoJfkO97IvDK7lKLANcpKY1MrTCg8mDnsu5VwYo31nTUyRVI%2FPVlFnMpcQqKYrEeheyUrrYM2pQTdTOXktHaBDg5mVcXIIJl%2FD9xbTEoa4ArPaeIeawXY%2F%2B0f6IjB2j%2B%2B%2BiPzoMVuKaZhNwQGYr%2BdO3DKeHjhdzCj16TBBjqkAUtERN29LjKE%2FTzLh%2F4oNrVkdE7VxatnYcDhfsrnD2zi%2FzmVhayggIOREyOuilEvvBBDqmyp2aXXr1eWVlMI8iBGOkpwfpVD%2F0ZxTlW6hpdjG4FC5nsAja1nJ%2FeEDZYyQn7ewUZzpDXN2hMsJSjnBJlUS09Zwqh%2BoqMP6Q96Llj%2F%2F%2FCtG4QwP2%2BZvrlUY0kwgzyU%2FObHEmtMC%2Bhj6OJ6WtInVZUp&X-Amz-Signature=f040d6bba968b33bf28579e1030dccff16a2a3f7a3b22a6b00cceb11e60bd56f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
