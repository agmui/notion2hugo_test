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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4N2HIL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Bj%2Be4Req8oiasFDyszQ7k8ZznnteO7h0NTlNeL9KqCAiEAwIwx%2FGyWjiJbPN8D0YtD5Wb0z6U%2B89Pibph7gNNxKFoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtrAUBTijgTZcsYoSrcA3yGGpXYdSKPYEX3%2FLYNr%2FDxitb4%2Boy052oWOqzwQkaD5pZvtApJkzVgUAea4kVVII3PLJiWaI916hGdco6RcWwyn%2FHnajrrPYzFP9CHcr%2F%2FB79t%2F%2F8RYAHve6SIiRjude3xOTeH4Z%2BboGgQE03KVCKZ5P51w504DnkU9XcmzN%2Fjn3%2BIvVxI0zj%2BVHgXf7Aq3B7eHfEv2JcA2DZYqzw0EINCn1zHzL3oiqQoQIdMscApFD5HBZW%2FzgqhqArKlojMVZl6vKOMhwqklyAevK60rD4MlJLAlfxhyZFWl5Ll%2BRiLhwjpqHz15mg%2F7M7Eqm5casmfNHWFkqVusIaBGM8I13O0nuA7pij%2B8UfUfkcio8fQBpocAW%2FfhAemYLqNRt2nLoDwkUNmENNAtFSpHvz6INxEQXV%2FaqGfW9yKMOnMYs4cTd2EdsVmbfEoPhAhIK2v5uAh9vAjl14m560olcNSytxMg1lyr5P2j5JeCIxnqqaRe9zvDdc%2BpiVABPFtygJMETvZ6x3jR5MTlxOmHVymTNy9GaooA9uaa8622abRjOV0FI%2FAaykddSKe8TCgi4luEQL3c3mDHD3iisVkXDXcYXUcmfiTcC4DkXEUrbuQVGX5cdNOZ7Fm1D%2Baovf5MJ%2BxlMIGOqUBS4I57Qhh9e25dgKzBejxsCl9R2cDqU7k9G8jOU2abNS7fIpjRuk9b%2BTFazn%2B6QRo2q2tTsx3echvfNHgxzLj%2F35RqN81NXKDNBQWhJ%2FBkg1%2BpVSUFJ04Euuv%2FX3H1YHVhqRcemJHRTJ1EG3oz7NZ%2FtmRYVFewrsQ0QlhdusBuSj87Q2hgQZN9tjMqL%2BpeNDIATGDB0oLgdQkjOYkNBuzst062lmp&X-Amz-Signature=6783821fd2c83ffad34463ca807c144f2402086cf7a39da8cb2e266c63484a83&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4N2HIL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Bj%2Be4Req8oiasFDyszQ7k8ZznnteO7h0NTlNeL9KqCAiEAwIwx%2FGyWjiJbPN8D0YtD5Wb0z6U%2B89Pibph7gNNxKFoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtrAUBTijgTZcsYoSrcA3yGGpXYdSKPYEX3%2FLYNr%2FDxitb4%2Boy052oWOqzwQkaD5pZvtApJkzVgUAea4kVVII3PLJiWaI916hGdco6RcWwyn%2FHnajrrPYzFP9CHcr%2F%2FB79t%2F%2F8RYAHve6SIiRjude3xOTeH4Z%2BboGgQE03KVCKZ5P51w504DnkU9XcmzN%2Fjn3%2BIvVxI0zj%2BVHgXf7Aq3B7eHfEv2JcA2DZYqzw0EINCn1zHzL3oiqQoQIdMscApFD5HBZW%2FzgqhqArKlojMVZl6vKOMhwqklyAevK60rD4MlJLAlfxhyZFWl5Ll%2BRiLhwjpqHz15mg%2F7M7Eqm5casmfNHWFkqVusIaBGM8I13O0nuA7pij%2B8UfUfkcio8fQBpocAW%2FfhAemYLqNRt2nLoDwkUNmENNAtFSpHvz6INxEQXV%2FaqGfW9yKMOnMYs4cTd2EdsVmbfEoPhAhIK2v5uAh9vAjl14m560olcNSytxMg1lyr5P2j5JeCIxnqqaRe9zvDdc%2BpiVABPFtygJMETvZ6x3jR5MTlxOmHVymTNy9GaooA9uaa8622abRjOV0FI%2FAaykddSKe8TCgi4luEQL3c3mDHD3iisVkXDXcYXUcmfiTcC4DkXEUrbuQVGX5cdNOZ7Fm1D%2Baovf5MJ%2BxlMIGOqUBS4I57Qhh9e25dgKzBejxsCl9R2cDqU7k9G8jOU2abNS7fIpjRuk9b%2BTFazn%2B6QRo2q2tTsx3echvfNHgxzLj%2F35RqN81NXKDNBQWhJ%2FBkg1%2BpVSUFJ04Euuv%2FX3H1YHVhqRcemJHRTJ1EG3oz7NZ%2FtmRYVFewrsQ0QlhdusBuSj87Q2hgQZN9tjMqL%2BpeNDIATGDB0oLgdQkjOYkNBuzst062lmp&X-Amz-Signature=7cf458be4a846e57f52250cdbade09096ebb6e6e8b7e23f1d20d4714e58b2866&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4N2HIL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Bj%2Be4Req8oiasFDyszQ7k8ZznnteO7h0NTlNeL9KqCAiEAwIwx%2FGyWjiJbPN8D0YtD5Wb0z6U%2B89Pibph7gNNxKFoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtrAUBTijgTZcsYoSrcA3yGGpXYdSKPYEX3%2FLYNr%2FDxitb4%2Boy052oWOqzwQkaD5pZvtApJkzVgUAea4kVVII3PLJiWaI916hGdco6RcWwyn%2FHnajrrPYzFP9CHcr%2F%2FB79t%2F%2F8RYAHve6SIiRjude3xOTeH4Z%2BboGgQE03KVCKZ5P51w504DnkU9XcmzN%2Fjn3%2BIvVxI0zj%2BVHgXf7Aq3B7eHfEv2JcA2DZYqzw0EINCn1zHzL3oiqQoQIdMscApFD5HBZW%2FzgqhqArKlojMVZl6vKOMhwqklyAevK60rD4MlJLAlfxhyZFWl5Ll%2BRiLhwjpqHz15mg%2F7M7Eqm5casmfNHWFkqVusIaBGM8I13O0nuA7pij%2B8UfUfkcio8fQBpocAW%2FfhAemYLqNRt2nLoDwkUNmENNAtFSpHvz6INxEQXV%2FaqGfW9yKMOnMYs4cTd2EdsVmbfEoPhAhIK2v5uAh9vAjl14m560olcNSytxMg1lyr5P2j5JeCIxnqqaRe9zvDdc%2BpiVABPFtygJMETvZ6x3jR5MTlxOmHVymTNy9GaooA9uaa8622abRjOV0FI%2FAaykddSKe8TCgi4luEQL3c3mDHD3iisVkXDXcYXUcmfiTcC4DkXEUrbuQVGX5cdNOZ7Fm1D%2Baovf5MJ%2BxlMIGOqUBS4I57Qhh9e25dgKzBejxsCl9R2cDqU7k9G8jOU2abNS7fIpjRuk9b%2BTFazn%2B6QRo2q2tTsx3echvfNHgxzLj%2F35RqN81NXKDNBQWhJ%2FBkg1%2BpVSUFJ04Euuv%2FX3H1YHVhqRcemJHRTJ1EG3oz7NZ%2FtmRYVFewrsQ0QlhdusBuSj87Q2hgQZN9tjMqL%2BpeNDIATGDB0oLgdQkjOYkNBuzst062lmp&X-Amz-Signature=c0a0dc8bbc2fdaa2cab41771ff50d8e02d410d2fcf61292af1b05ff476213d40&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
