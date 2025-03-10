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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X5NIHIG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIC94fbMXW%2FRbWv6xqqxzeltYrpoxETIEsbCfKgt5ccHwAiEA%2Fg%2FUxL1hOThGLTju2BASVXecVELElYA7frY%2Ba9PzLGoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQRq%2F8anKCf4093MCrcAzscy6OXRYkSQz6Dh1M%2FNN2UGYkAIxfVU2C9A18eYhoNzzDzrMV%2BxhJRrgCb%2FOM3I0xC36tM7Gloe0plJ7BOnE0zTM%2BPBm6nJpgaKER0YTz8YtBs%2FlFo4%2BoKIagtY65N9OJNr9KJuhq2AI9GmLJn8eSRZldPEcaFd%2FaDBSJVsyt4aH36Y6bjcSAVISLtBbInn5xjb%2BLqP1xoNuq%2FLbgTRH1PR67UgjOAJorzhJi5Y9EdbgsoOVL5vmPhk5Q9Z0dpG58NjV5oTIuLnyv50FtcDGF%2FXN74e4e6Ega5E3DLpDu5Pv6WbrDZC2CX8im2Jt7LQSQwn22Ag0E6s2b7yckL%2FmNqkIfMVJLtsP1hxl5ZhCL46Lg%2B5OhbVmjAtxf006xQXH63VZnr14RbYkFutqLgpVB0fUDfARbywB5M2LsOOu95yZxHePPcqexbNw6ZTY557Kyx7O22Z8AH4D4V6R1aq8aXOJ4f2hT9PycOn7RhOjXMigNnsdKTKiknxxwd2kDt5BnGAlxgEOpQ5G5rPkaVpKaXGmxaUz4mPV9KE8NXhg5VEQs8oau0QO8uYLpFNsWtlisy4odVUSZ9orODIiTuTDUnTBWzJjh7VboouLbi7b2pJm%2FTKLdtCr%2BVzKJJMMypur4GOqUB1AFDezVbbk%2BalhRjyL%2Fc2F4UxiN622FMkeyRUaBIXpo%2Boi8U5swFtQUit8hMovIu%2F3FEtMOq51OIKGmn1yyW5Zh%2F1J7QN7%2FZbUppjOKFEnl%2FrT00iqaEGykww0Y5IgA9dgDKM26d%2BjSAGyY9ixycqnefAlDS37eY28sXB9Q9xMFAnEXRgWT1u51bGZo3K4%2BAxamKrq3a0tVlJkvsDTyY52As%2F%2BBA&X-Amz-Signature=54f8e2a0398da78b037a72ffac394e1b26c8d4418671a47596b312259a7e7c10&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X5NIHIG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIC94fbMXW%2FRbWv6xqqxzeltYrpoxETIEsbCfKgt5ccHwAiEA%2Fg%2FUxL1hOThGLTju2BASVXecVELElYA7frY%2Ba9PzLGoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQRq%2F8anKCf4093MCrcAzscy6OXRYkSQz6Dh1M%2FNN2UGYkAIxfVU2C9A18eYhoNzzDzrMV%2BxhJRrgCb%2FOM3I0xC36tM7Gloe0plJ7BOnE0zTM%2BPBm6nJpgaKER0YTz8YtBs%2FlFo4%2BoKIagtY65N9OJNr9KJuhq2AI9GmLJn8eSRZldPEcaFd%2FaDBSJVsyt4aH36Y6bjcSAVISLtBbInn5xjb%2BLqP1xoNuq%2FLbgTRH1PR67UgjOAJorzhJi5Y9EdbgsoOVL5vmPhk5Q9Z0dpG58NjV5oTIuLnyv50FtcDGF%2FXN74e4e6Ega5E3DLpDu5Pv6WbrDZC2CX8im2Jt7LQSQwn22Ag0E6s2b7yckL%2FmNqkIfMVJLtsP1hxl5ZhCL46Lg%2B5OhbVmjAtxf006xQXH63VZnr14RbYkFutqLgpVB0fUDfARbywB5M2LsOOu95yZxHePPcqexbNw6ZTY557Kyx7O22Z8AH4D4V6R1aq8aXOJ4f2hT9PycOn7RhOjXMigNnsdKTKiknxxwd2kDt5BnGAlxgEOpQ5G5rPkaVpKaXGmxaUz4mPV9KE8NXhg5VEQs8oau0QO8uYLpFNsWtlisy4odVUSZ9orODIiTuTDUnTBWzJjh7VboouLbi7b2pJm%2FTKLdtCr%2BVzKJJMMypur4GOqUB1AFDezVbbk%2BalhRjyL%2Fc2F4UxiN622FMkeyRUaBIXpo%2Boi8U5swFtQUit8hMovIu%2F3FEtMOq51OIKGmn1yyW5Zh%2F1J7QN7%2FZbUppjOKFEnl%2FrT00iqaEGykww0Y5IgA9dgDKM26d%2BjSAGyY9ixycqnefAlDS37eY28sXB9Q9xMFAnEXRgWT1u51bGZo3K4%2BAxamKrq3a0tVlJkvsDTyY52As%2F%2BBA&X-Amz-Signature=734894129694612f825f1492621e021712d482b2f5e704697fe16c02a9e41c7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662X5NIHIG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIC94fbMXW%2FRbWv6xqqxzeltYrpoxETIEsbCfKgt5ccHwAiEA%2Fg%2FUxL1hOThGLTju2BASVXecVELElYA7frY%2Ba9PzLGoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQRq%2F8anKCf4093MCrcAzscy6OXRYkSQz6Dh1M%2FNN2UGYkAIxfVU2C9A18eYhoNzzDzrMV%2BxhJRrgCb%2FOM3I0xC36tM7Gloe0plJ7BOnE0zTM%2BPBm6nJpgaKER0YTz8YtBs%2FlFo4%2BoKIagtY65N9OJNr9KJuhq2AI9GmLJn8eSRZldPEcaFd%2FaDBSJVsyt4aH36Y6bjcSAVISLtBbInn5xjb%2BLqP1xoNuq%2FLbgTRH1PR67UgjOAJorzhJi5Y9EdbgsoOVL5vmPhk5Q9Z0dpG58NjV5oTIuLnyv50FtcDGF%2FXN74e4e6Ega5E3DLpDu5Pv6WbrDZC2CX8im2Jt7LQSQwn22Ag0E6s2b7yckL%2FmNqkIfMVJLtsP1hxl5ZhCL46Lg%2B5OhbVmjAtxf006xQXH63VZnr14RbYkFutqLgpVB0fUDfARbywB5M2LsOOu95yZxHePPcqexbNw6ZTY557Kyx7O22Z8AH4D4V6R1aq8aXOJ4f2hT9PycOn7RhOjXMigNnsdKTKiknxxwd2kDt5BnGAlxgEOpQ5G5rPkaVpKaXGmxaUz4mPV9KE8NXhg5VEQs8oau0QO8uYLpFNsWtlisy4odVUSZ9orODIiTuTDUnTBWzJjh7VboouLbi7b2pJm%2FTKLdtCr%2BVzKJJMMypur4GOqUB1AFDezVbbk%2BalhRjyL%2Fc2F4UxiN622FMkeyRUaBIXpo%2Boi8U5swFtQUit8hMovIu%2F3FEtMOq51OIKGmn1yyW5Zh%2F1J7QN7%2FZbUppjOKFEnl%2FrT00iqaEGykww0Y5IgA9dgDKM26d%2BjSAGyY9ixycqnefAlDS37eY28sXB9Q9xMFAnEXRgWT1u51bGZo3K4%2BAxamKrq3a0tVlJkvsDTyY52As%2F%2BBA&X-Amz-Signature=75f7296ba3c4c2a526b209467139bd75448f1180f511932ce577eaa68a1fc112&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
