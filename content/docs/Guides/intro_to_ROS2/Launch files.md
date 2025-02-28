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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJXGPM7%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDhB7iJBTU9erR3IGkb1WiejHYkfSVqDK5h7PWgeioEMgIhAPTQIq6iu3y5eAyPydm7JO7%2B5Ra803yKj75stN3EOpsSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ4FMFWSYkGOSJPi8q3AOEUvA6XdRl4lRuxJvorU6VC4BnRJcq0RECN%2BQlVn5uEfmN%2Bmo0raMtEsiH9fNMySZjGU5F%2F61iArdoh3OZHCW2pTniT4Qf5LigJY8Be4An7CjWnA2OKKnJvfB7PFqgjoXwUdzFXbm0wBFlibYM2%2FIj7DNOKWmBCY9SXisPeLbx6GSUEe%2BCkl8kLxYg4RIXOtRIKZmCGg8vuUP3v6w9wFK7G9ZZelfEwbwY1KX63O1cW3kk3BMDZgYrrLJ6Z05AXfd%2B0RcvG7DvDm0IGjZIxe2cynnGNgHTz6YB%2ByketwhtDLL7GtvNcfrNbo91hGsMWo7sBmKF%2Bg%2BeefYUp4PlpkvMhSqvqQCaWmryPxQutsnnqkFZN7uN24SH5AWE95X6CinsztHuZdEKUX8h23Sb0dvK7DQrxSYP4JrcvL00vza%2BCDtyJekKV33S2jw%2BKqgdDwCgb7%2BaXsiG9YLRJWIMQO0WUwvCZeteipxINA3Xbj7N2hXveEkQvK1%2F3u7CACc0jcNEdBQuQD9X0PgADfgL3AJujU5c57wNVoIEQhKIpVGD4%2BaJRB55sye3YNArJMIE0SQIUvkDMLA9PwsxC%2B2vCRn1cidVQkYzDamZH48q4wFI3bnNrGmj6CMHdoXJrzDK9oO%2BBjqkAdrIbIpEc6dajQyD9YHet4LvWsIKRzFRqHpcbCZzIVNJKgyw91dTrAQR4XnAjI2IY1d88J1jS41J3Qe3xGq8VQ2WObMWEizU3SljLERJFkoFLhl7OkJklOCu20v466NMSGjPk9sXEzm22e0AUg1I605T5Opj2ehUY%2Bmaj%2FrywEXkLxT8qdNxrZYqEe%2F%2BSPkHrJLRnT2maamSLs2gc%2BkVuubErcFX&X-Amz-Signature=2e2aa88fa6b4fc2dfcc040f796a5477e079a3111342d4ba49f8f54107398795a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJXGPM7%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDhB7iJBTU9erR3IGkb1WiejHYkfSVqDK5h7PWgeioEMgIhAPTQIq6iu3y5eAyPydm7JO7%2B5Ra803yKj75stN3EOpsSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ4FMFWSYkGOSJPi8q3AOEUvA6XdRl4lRuxJvorU6VC4BnRJcq0RECN%2BQlVn5uEfmN%2Bmo0raMtEsiH9fNMySZjGU5F%2F61iArdoh3OZHCW2pTniT4Qf5LigJY8Be4An7CjWnA2OKKnJvfB7PFqgjoXwUdzFXbm0wBFlibYM2%2FIj7DNOKWmBCY9SXisPeLbx6GSUEe%2BCkl8kLxYg4RIXOtRIKZmCGg8vuUP3v6w9wFK7G9ZZelfEwbwY1KX63O1cW3kk3BMDZgYrrLJ6Z05AXfd%2B0RcvG7DvDm0IGjZIxe2cynnGNgHTz6YB%2ByketwhtDLL7GtvNcfrNbo91hGsMWo7sBmKF%2Bg%2BeefYUp4PlpkvMhSqvqQCaWmryPxQutsnnqkFZN7uN24SH5AWE95X6CinsztHuZdEKUX8h23Sb0dvK7DQrxSYP4JrcvL00vza%2BCDtyJekKV33S2jw%2BKqgdDwCgb7%2BaXsiG9YLRJWIMQO0WUwvCZeteipxINA3Xbj7N2hXveEkQvK1%2F3u7CACc0jcNEdBQuQD9X0PgADfgL3AJujU5c57wNVoIEQhKIpVGD4%2BaJRB55sye3YNArJMIE0SQIUvkDMLA9PwsxC%2B2vCRn1cidVQkYzDamZH48q4wFI3bnNrGmj6CMHdoXJrzDK9oO%2BBjqkAdrIbIpEc6dajQyD9YHet4LvWsIKRzFRqHpcbCZzIVNJKgyw91dTrAQR4XnAjI2IY1d88J1jS41J3Qe3xGq8VQ2WObMWEizU3SljLERJFkoFLhl7OkJklOCu20v466NMSGjPk9sXEzm22e0AUg1I605T5Opj2ehUY%2Bmaj%2FrywEXkLxT8qdNxrZYqEe%2F%2BSPkHrJLRnT2maamSLs2gc%2BkVuubErcFX&X-Amz-Signature=aa612aef09f477fd3dd91dadd2ba6f95edec2acf15cfab3cc59e7160402536f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJXGPM7%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T003702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDhB7iJBTU9erR3IGkb1WiejHYkfSVqDK5h7PWgeioEMgIhAPTQIq6iu3y5eAyPydm7JO7%2B5Ra803yKj75stN3EOpsSKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ4FMFWSYkGOSJPi8q3AOEUvA6XdRl4lRuxJvorU6VC4BnRJcq0RECN%2BQlVn5uEfmN%2Bmo0raMtEsiH9fNMySZjGU5F%2F61iArdoh3OZHCW2pTniT4Qf5LigJY8Be4An7CjWnA2OKKnJvfB7PFqgjoXwUdzFXbm0wBFlibYM2%2FIj7DNOKWmBCY9SXisPeLbx6GSUEe%2BCkl8kLxYg4RIXOtRIKZmCGg8vuUP3v6w9wFK7G9ZZelfEwbwY1KX63O1cW3kk3BMDZgYrrLJ6Z05AXfd%2B0RcvG7DvDm0IGjZIxe2cynnGNgHTz6YB%2ByketwhtDLL7GtvNcfrNbo91hGsMWo7sBmKF%2Bg%2BeefYUp4PlpkvMhSqvqQCaWmryPxQutsnnqkFZN7uN24SH5AWE95X6CinsztHuZdEKUX8h23Sb0dvK7DQrxSYP4JrcvL00vza%2BCDtyJekKV33S2jw%2BKqgdDwCgb7%2BaXsiG9YLRJWIMQO0WUwvCZeteipxINA3Xbj7N2hXveEkQvK1%2F3u7CACc0jcNEdBQuQD9X0PgADfgL3AJujU5c57wNVoIEQhKIpVGD4%2BaJRB55sye3YNArJMIE0SQIUvkDMLA9PwsxC%2B2vCRn1cidVQkYzDamZH48q4wFI3bnNrGmj6CMHdoXJrzDK9oO%2BBjqkAdrIbIpEc6dajQyD9YHet4LvWsIKRzFRqHpcbCZzIVNJKgyw91dTrAQR4XnAjI2IY1d88J1jS41J3Qe3xGq8VQ2WObMWEizU3SljLERJFkoFLhl7OkJklOCu20v466NMSGjPk9sXEzm22e0AUg1I605T5Opj2ehUY%2Bmaj%2FrywEXkLxT8qdNxrZYqEe%2F%2BSPkHrJLRnT2maamSLs2gc%2BkVuubErcFX&X-Amz-Signature=acb2c9e0fbfa6807c25c1d6c8ef57dc4ded78c55f540795522f2178d943b5a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
