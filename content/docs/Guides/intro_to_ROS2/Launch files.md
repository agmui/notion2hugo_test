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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IEAZUFG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCedsuZIDxl65NgCN4brQtu%2BpM3hOm7k670kofwCTcVwgIhAIV8wFnRPoXTOncXp%2BkfDziivIaXQWfJpB1eOvAKH2KoKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUHrynxlGu1GvMfkgq3AMmuQwUdgrhbuj5RkBSnGjXtGVuDCTA1XNUBZwLlNyOu9BQdUbaBTGt9XNHUrWdcWn%2BH9O1Uc5%2BtRwp0AjOOKMueP5V%2FkQtLiYd62MHXesjj7SeUNOtVkvvtpM2eIbjlRVKdAjzAFTzXz5GZtaVP5paPuIYXtRS5R0LGDmL%2FkwpQNzCOsDnrHXUxAQ9dOTlieZ%2B1kd%2FUpLiW2pwsOz8S3aFZeJ8ehCvoFLd3NjnN2cXz7L3wMUuHe7YYTzp3fuVtc2sIlhEyTUx%2BjXezjEUpQFip6seSWoyBNJ21Uy568yIMuGzQpJz0zkQaZ84bBbPkT8nO8QL5W7c02u98JAId7y2Gbfbj6y7LW2Ng1gLFdBkjN2gJ6LrnOxcjG03wf2CunSu2BJ%2BnNvKJN72iwHpwM5S69GBl6eKaGpdYrme8P0wU4U3ozCIghyUVitG2er5G1Fd2xLNTPg2ZrAdGuO48gjH9Z0nDkvBQL%2BQ6pnRZnUL%2B6%2FW2T7ALhetNbj%2B69M4HeIOIX8f6ChGqhp7u7wCnhgiyDgtfc3IvKKubu1cSZTfkqFD9otDp%2B9%2F4%2FvVYeMUrbpzuRHwF7ao8MPRjrIeflHbaNK3U0YZWNLYVFXpEolQr03NPktaMP4tRK5IfTCK8bvDBjqkARVD%2FpR7rK4FYGWsVljGGUlqJ8Jbh2h2gIwKOyKVd7b2Lu5WslqfXd%2FRdJCATfWZejHASt4xXYfYJ3am1cXidargBgm%2BcIqz2DXRbImTEoq1R6sUYkffhVEFmO6%2BQjZ1s4lPIbXSWWnluS%2Bq63llrDZK3PWVPbLTJAa%2FyM8wf061Ngr%2BHWZiCNr1Tc34V9wFHuEuesrfDfeEeKq7iTy6pd3WJceG&X-Amz-Signature=04faa4b1c870d8923923c502abb8cb1b4bab1ea28773522dd1d57ea0d94d3de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IEAZUFG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCedsuZIDxl65NgCN4brQtu%2BpM3hOm7k670kofwCTcVwgIhAIV8wFnRPoXTOncXp%2BkfDziivIaXQWfJpB1eOvAKH2KoKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUHrynxlGu1GvMfkgq3AMmuQwUdgrhbuj5RkBSnGjXtGVuDCTA1XNUBZwLlNyOu9BQdUbaBTGt9XNHUrWdcWn%2BH9O1Uc5%2BtRwp0AjOOKMueP5V%2FkQtLiYd62MHXesjj7SeUNOtVkvvtpM2eIbjlRVKdAjzAFTzXz5GZtaVP5paPuIYXtRS5R0LGDmL%2FkwpQNzCOsDnrHXUxAQ9dOTlieZ%2B1kd%2FUpLiW2pwsOz8S3aFZeJ8ehCvoFLd3NjnN2cXz7L3wMUuHe7YYTzp3fuVtc2sIlhEyTUx%2BjXezjEUpQFip6seSWoyBNJ21Uy568yIMuGzQpJz0zkQaZ84bBbPkT8nO8QL5W7c02u98JAId7y2Gbfbj6y7LW2Ng1gLFdBkjN2gJ6LrnOxcjG03wf2CunSu2BJ%2BnNvKJN72iwHpwM5S69GBl6eKaGpdYrme8P0wU4U3ozCIghyUVitG2er5G1Fd2xLNTPg2ZrAdGuO48gjH9Z0nDkvBQL%2BQ6pnRZnUL%2B6%2FW2T7ALhetNbj%2B69M4HeIOIX8f6ChGqhp7u7wCnhgiyDgtfc3IvKKubu1cSZTfkqFD9otDp%2B9%2F4%2FvVYeMUrbpzuRHwF7ao8MPRjrIeflHbaNK3U0YZWNLYVFXpEolQr03NPktaMP4tRK5IfTCK8bvDBjqkARVD%2FpR7rK4FYGWsVljGGUlqJ8Jbh2h2gIwKOyKVd7b2Lu5WslqfXd%2FRdJCATfWZejHASt4xXYfYJ3am1cXidargBgm%2BcIqz2DXRbImTEoq1R6sUYkffhVEFmO6%2BQjZ1s4lPIbXSWWnluS%2Bq63llrDZK3PWVPbLTJAa%2FyM8wf061Ngr%2BHWZiCNr1Tc34V9wFHuEuesrfDfeEeKq7iTy6pd3WJceG&X-Amz-Signature=fa3ae5f965c5321195e175722bdd5b33958c60564a5731fc5c581864bf0820a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IEAZUFG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCedsuZIDxl65NgCN4brQtu%2BpM3hOm7k670kofwCTcVwgIhAIV8wFnRPoXTOncXp%2BkfDziivIaXQWfJpB1eOvAKH2KoKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUHrynxlGu1GvMfkgq3AMmuQwUdgrhbuj5RkBSnGjXtGVuDCTA1XNUBZwLlNyOu9BQdUbaBTGt9XNHUrWdcWn%2BH9O1Uc5%2BtRwp0AjOOKMueP5V%2FkQtLiYd62MHXesjj7SeUNOtVkvvtpM2eIbjlRVKdAjzAFTzXz5GZtaVP5paPuIYXtRS5R0LGDmL%2FkwpQNzCOsDnrHXUxAQ9dOTlieZ%2B1kd%2FUpLiW2pwsOz8S3aFZeJ8ehCvoFLd3NjnN2cXz7L3wMUuHe7YYTzp3fuVtc2sIlhEyTUx%2BjXezjEUpQFip6seSWoyBNJ21Uy568yIMuGzQpJz0zkQaZ84bBbPkT8nO8QL5W7c02u98JAId7y2Gbfbj6y7LW2Ng1gLFdBkjN2gJ6LrnOxcjG03wf2CunSu2BJ%2BnNvKJN72iwHpwM5S69GBl6eKaGpdYrme8P0wU4U3ozCIghyUVitG2er5G1Fd2xLNTPg2ZrAdGuO48gjH9Z0nDkvBQL%2BQ6pnRZnUL%2B6%2FW2T7ALhetNbj%2B69M4HeIOIX8f6ChGqhp7u7wCnhgiyDgtfc3IvKKubu1cSZTfkqFD9otDp%2B9%2F4%2FvVYeMUrbpzuRHwF7ao8MPRjrIeflHbaNK3U0YZWNLYVFXpEolQr03NPktaMP4tRK5IfTCK8bvDBjqkARVD%2FpR7rK4FYGWsVljGGUlqJ8Jbh2h2gIwKOyKVd7b2Lu5WslqfXd%2FRdJCATfWZejHASt4xXYfYJ3am1cXidargBgm%2BcIqz2DXRbImTEoq1R6sUYkffhVEFmO6%2BQjZ1s4lPIbXSWWnluS%2Bq63llrDZK3PWVPbLTJAa%2FyM8wf061Ngr%2BHWZiCNr1Tc34V9wFHuEuesrfDfeEeKq7iTy6pd3WJceG&X-Amz-Signature=aa0552aee312d94d2b9e93b012f296321a23edda5f635e66df25a485bcd2715e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
