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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBZEALU3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt0zGNbAs4oNXW3KJN3dUGuDbd5u2mzRf1Z8%2B0Wg9AAIhAI6Tbq7JIRrKaoMIyqAr%2FWgrTqedICfCEdy9%2F1ANid%2FjKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMhecu5TxUHhnuM5Iq3APwj%2FUf67mgq8HCsxsS3qebOmU9Iz5%2FH2UWxt3AqfvBduHWYaOTdGxZXiR4xREXs%2F8S4iodS%2BeN3nSAmwyg3YnVl9puLbw4u%2BxAFOC1uZMQ6XQYc1vtdA7YC%2BGYfIAyBVuByGjZYOTFxggAKA1ZyRJf6JCKFrObjKOOYyXLqE%2Fxwvz8uYzJn8MYCIM312onJLFwxMJMn5LUxPU3143SD%2BPNPGx8J2YI9dkNRTqIL2zEKXsWDYID0hzrRK4OR9QKcFR%2B5lDpHIMzH%2FINlVJXytJpIS%2FmYrofC%2BwhBT5uHskicfZpdVw14Zqni4BRRbTXI43xUbO7WmQbS7bKTSG8ZcNd1spRY6MtnYRmaJ8zs5u%2B3zH%2Fu2uBK%2BoNEtMAvApc45dpZx2CRNdl59FoOjPXKgS6KSm9UMWPViMUumYwXgqCa6xIjnSQy7NrQ9n%2FfxEQFtJLp%2BxbbsVqyDd99J%2BgvdM5cgjwVXMksY8VJAWfDOd3vHn3BbeLVzYNw9lv7fUi6Fx2J41eIOE3ENmovWb7f%2FsQxxLH%2BoC5eo4faS2c%2FwB%2FRbW4V59FA61IwMDfa98r8FefbnghTccHCOQIjVkm7lILNmSYjb8iZi2%2FzxbTP0jyOOvrlh9wRLz7CBVL3DCK3J2%2BBjqkAebc%2Bokc6U5%2BjvIHPkC781a6yvI9eIZq0hDPGlYVEQec5kgiJwN5WEY9XqATVREw62g5YNsDzDr%2BjeCuGYcFxsPOGn%2BUJQDsRaxZIU82%2FOJFYug9ZfCR22400PtfQcdfato32sN5aNx7%2B37whwIbkr9tLM2oDHYUXk3Ubm18Na32alg%2FElpkrBwmX0y2dqvCNhe7bpgF3mL%2B%2F7QsYsikyBQgHYwB&X-Amz-Signature=d20b3aa611ebe33f3e8d995d657359e9401a9436e9ea0b4de3bd2881e04b0698&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBZEALU3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt0zGNbAs4oNXW3KJN3dUGuDbd5u2mzRf1Z8%2B0Wg9AAIhAI6Tbq7JIRrKaoMIyqAr%2FWgrTqedICfCEdy9%2F1ANid%2FjKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMhecu5TxUHhnuM5Iq3APwj%2FUf67mgq8HCsxsS3qebOmU9Iz5%2FH2UWxt3AqfvBduHWYaOTdGxZXiR4xREXs%2F8S4iodS%2BeN3nSAmwyg3YnVl9puLbw4u%2BxAFOC1uZMQ6XQYc1vtdA7YC%2BGYfIAyBVuByGjZYOTFxggAKA1ZyRJf6JCKFrObjKOOYyXLqE%2Fxwvz8uYzJn8MYCIM312onJLFwxMJMn5LUxPU3143SD%2BPNPGx8J2YI9dkNRTqIL2zEKXsWDYID0hzrRK4OR9QKcFR%2B5lDpHIMzH%2FINlVJXytJpIS%2FmYrofC%2BwhBT5uHskicfZpdVw14Zqni4BRRbTXI43xUbO7WmQbS7bKTSG8ZcNd1spRY6MtnYRmaJ8zs5u%2B3zH%2Fu2uBK%2BoNEtMAvApc45dpZx2CRNdl59FoOjPXKgS6KSm9UMWPViMUumYwXgqCa6xIjnSQy7NrQ9n%2FfxEQFtJLp%2BxbbsVqyDd99J%2BgvdM5cgjwVXMksY8VJAWfDOd3vHn3BbeLVzYNw9lv7fUi6Fx2J41eIOE3ENmovWb7f%2FsQxxLH%2BoC5eo4faS2c%2FwB%2FRbW4V59FA61IwMDfa98r8FefbnghTccHCOQIjVkm7lILNmSYjb8iZi2%2FzxbTP0jyOOvrlh9wRLz7CBVL3DCK3J2%2BBjqkAebc%2Bokc6U5%2BjvIHPkC781a6yvI9eIZq0hDPGlYVEQec5kgiJwN5WEY9XqATVREw62g5YNsDzDr%2BjeCuGYcFxsPOGn%2BUJQDsRaxZIU82%2FOJFYug9ZfCR22400PtfQcdfato32sN5aNx7%2B37whwIbkr9tLM2oDHYUXk3Ubm18Na32alg%2FElpkrBwmX0y2dqvCNhe7bpgF3mL%2B%2F7QsYsikyBQgHYwB&X-Amz-Signature=71ac3c8ff1ac00690bc0b51843b2065408a3fa764467920ae8be07da5c24afc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBZEALU3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T220747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUt0zGNbAs4oNXW3KJN3dUGuDbd5u2mzRf1Z8%2B0Wg9AAIhAI6Tbq7JIRrKaoMIyqAr%2FWgrTqedICfCEdy9%2F1ANid%2FjKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMhecu5TxUHhnuM5Iq3APwj%2FUf67mgq8HCsxsS3qebOmU9Iz5%2FH2UWxt3AqfvBduHWYaOTdGxZXiR4xREXs%2F8S4iodS%2BeN3nSAmwyg3YnVl9puLbw4u%2BxAFOC1uZMQ6XQYc1vtdA7YC%2BGYfIAyBVuByGjZYOTFxggAKA1ZyRJf6JCKFrObjKOOYyXLqE%2Fxwvz8uYzJn8MYCIM312onJLFwxMJMn5LUxPU3143SD%2BPNPGx8J2YI9dkNRTqIL2zEKXsWDYID0hzrRK4OR9QKcFR%2B5lDpHIMzH%2FINlVJXytJpIS%2FmYrofC%2BwhBT5uHskicfZpdVw14Zqni4BRRbTXI43xUbO7WmQbS7bKTSG8ZcNd1spRY6MtnYRmaJ8zs5u%2B3zH%2Fu2uBK%2BoNEtMAvApc45dpZx2CRNdl59FoOjPXKgS6KSm9UMWPViMUumYwXgqCa6xIjnSQy7NrQ9n%2FfxEQFtJLp%2BxbbsVqyDd99J%2BgvdM5cgjwVXMksY8VJAWfDOd3vHn3BbeLVzYNw9lv7fUi6Fx2J41eIOE3ENmovWb7f%2FsQxxLH%2BoC5eo4faS2c%2FwB%2FRbW4V59FA61IwMDfa98r8FefbnghTccHCOQIjVkm7lILNmSYjb8iZi2%2FzxbTP0jyOOvrlh9wRLz7CBVL3DCK3J2%2BBjqkAebc%2Bokc6U5%2BjvIHPkC781a6yvI9eIZq0hDPGlYVEQec5kgiJwN5WEY9XqATVREw62g5YNsDzDr%2BjeCuGYcFxsPOGn%2BUJQDsRaxZIU82%2FOJFYug9ZfCR22400PtfQcdfato32sN5aNx7%2B37whwIbkr9tLM2oDHYUXk3Ubm18Na32alg%2FElpkrBwmX0y2dqvCNhe7bpgF3mL%2B%2F7QsYsikyBQgHYwB&X-Amz-Signature=f3e2fdb2af14186d920a6844c2a659bff0732ad600ef6fb0c5fdad92da0abe9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
