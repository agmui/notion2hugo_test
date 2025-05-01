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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE7WY4L%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDquKJHiQ7WJ3JMxWKvlMGZiJTCpuVaudo3LBykvazaqwIgGWQ5b4OvgndHaI9ae4TdydI8FvzTVfzmINuEHUeFAAcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPysI6TC7iTSjqmjdCrcA7HVWe2vRU5Y1OKOQ82qFnhAIqlnvIf965dnMw4%2FUu9MY9A2EQZq9GNWmN9A0DpW3pJKjNpr2UIyhozhq0%2B%2FQ31hssfUdz314Ax3nEWQWr0t6aQcIyaJQfK5FUiUYychA3N4%2BTxFX0DGMVKmlk%2FA9dSk%2FsHI%2F85bQgdEk4t53Qgubo6a4SXpAizXnHzpf1vvcJTfah6kq1WIkwE3YT5xSrakZSzZ5J4oGPQPHbJMYTHyE%2Fyvl9rNN5ZZLPaLVPiXWYSLdmBShR80qsMs4cjNzbcf9Pil%2BS6y1n7GzwaSJbHldQgW%2BCDzWrltao%2B%2Frm9%2BniCe1pqQpKNbbJhZPot%2FvcwbfYk6czBSa5Y862wnfZnKPT0GyuR%2FMo0dw8BrsXfUPuttUDfOfIgq6SlxiyGh1Gy%2FTJBISt%2BCGi4pXp0HPCNvRjTsmCqYNFcB765OkSajmds8gXqW%2FY%2BEGdhT6NyBAvUzXuHdGjyhKyzyPBdaWW9AyVTOaHAW%2FSWOQ0Q%2B5Bv65EyzxQro%2BcwqLXptJ9wvEk7joelbLTXu1SsATo0nI1mI0mq%2Bw5fr3Hj6twWpExmwf8E02cOJ1K05MaY3bsEcp4nL6VrIwkVmF9mSMevreFIESiG1Ecpi04jktG73MJ%2BGzsAGOqUBYoD653Bsm7emHeKhXlhez6gsPVWWIRXwU6wD3vedww45TRA4nb38%2BhFQBRnOKzOghKTiVj%2Bo7v9Ytu44BdoTYSESU8NBZu%2Fv08JtVQ6dEGX2%2FazQ7da%2FZpqiB6NYDaZ9iPqoCiBLQxMm4K9BH7A0BO6CGQXIp9snh3FymtpLubBjQjaDyM5fhhwzoAqCNmg9Fd2mcO%2F5ob3RgjKpy6UuPeBb%2BwCG&X-Amz-Signature=de8c2db428a1ebd96e3314f157dc35a0ad6d2b6eefe7999e71ec225f2eb60fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE7WY4L%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDquKJHiQ7WJ3JMxWKvlMGZiJTCpuVaudo3LBykvazaqwIgGWQ5b4OvgndHaI9ae4TdydI8FvzTVfzmINuEHUeFAAcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPysI6TC7iTSjqmjdCrcA7HVWe2vRU5Y1OKOQ82qFnhAIqlnvIf965dnMw4%2FUu9MY9A2EQZq9GNWmN9A0DpW3pJKjNpr2UIyhozhq0%2B%2FQ31hssfUdz314Ax3nEWQWr0t6aQcIyaJQfK5FUiUYychA3N4%2BTxFX0DGMVKmlk%2FA9dSk%2FsHI%2F85bQgdEk4t53Qgubo6a4SXpAizXnHzpf1vvcJTfah6kq1WIkwE3YT5xSrakZSzZ5J4oGPQPHbJMYTHyE%2Fyvl9rNN5ZZLPaLVPiXWYSLdmBShR80qsMs4cjNzbcf9Pil%2BS6y1n7GzwaSJbHldQgW%2BCDzWrltao%2B%2Frm9%2BniCe1pqQpKNbbJhZPot%2FvcwbfYk6czBSa5Y862wnfZnKPT0GyuR%2FMo0dw8BrsXfUPuttUDfOfIgq6SlxiyGh1Gy%2FTJBISt%2BCGi4pXp0HPCNvRjTsmCqYNFcB765OkSajmds8gXqW%2FY%2BEGdhT6NyBAvUzXuHdGjyhKyzyPBdaWW9AyVTOaHAW%2FSWOQ0Q%2B5Bv65EyzxQro%2BcwqLXptJ9wvEk7joelbLTXu1SsATo0nI1mI0mq%2Bw5fr3Hj6twWpExmwf8E02cOJ1K05MaY3bsEcp4nL6VrIwkVmF9mSMevreFIESiG1Ecpi04jktG73MJ%2BGzsAGOqUBYoD653Bsm7emHeKhXlhez6gsPVWWIRXwU6wD3vedww45TRA4nb38%2BhFQBRnOKzOghKTiVj%2Bo7v9Ytu44BdoTYSESU8NBZu%2Fv08JtVQ6dEGX2%2FazQ7da%2FZpqiB6NYDaZ9iPqoCiBLQxMm4K9BH7A0BO6CGQXIp9snh3FymtpLubBjQjaDyM5fhhwzoAqCNmg9Fd2mcO%2F5ob3RgjKpy6UuPeBb%2BwCG&X-Amz-Signature=0e6d21e78ead201e0d9c79dd259bb3307e10c4cb657b2327dabbc6edce1495fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE7WY4L%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDquKJHiQ7WJ3JMxWKvlMGZiJTCpuVaudo3LBykvazaqwIgGWQ5b4OvgndHaI9ae4TdydI8FvzTVfzmINuEHUeFAAcqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPysI6TC7iTSjqmjdCrcA7HVWe2vRU5Y1OKOQ82qFnhAIqlnvIf965dnMw4%2FUu9MY9A2EQZq9GNWmN9A0DpW3pJKjNpr2UIyhozhq0%2B%2FQ31hssfUdz314Ax3nEWQWr0t6aQcIyaJQfK5FUiUYychA3N4%2BTxFX0DGMVKmlk%2FA9dSk%2FsHI%2F85bQgdEk4t53Qgubo6a4SXpAizXnHzpf1vvcJTfah6kq1WIkwE3YT5xSrakZSzZ5J4oGPQPHbJMYTHyE%2Fyvl9rNN5ZZLPaLVPiXWYSLdmBShR80qsMs4cjNzbcf9Pil%2BS6y1n7GzwaSJbHldQgW%2BCDzWrltao%2B%2Frm9%2BniCe1pqQpKNbbJhZPot%2FvcwbfYk6czBSa5Y862wnfZnKPT0GyuR%2FMo0dw8BrsXfUPuttUDfOfIgq6SlxiyGh1Gy%2FTJBISt%2BCGi4pXp0HPCNvRjTsmCqYNFcB765OkSajmds8gXqW%2FY%2BEGdhT6NyBAvUzXuHdGjyhKyzyPBdaWW9AyVTOaHAW%2FSWOQ0Q%2B5Bv65EyzxQro%2BcwqLXptJ9wvEk7joelbLTXu1SsATo0nI1mI0mq%2Bw5fr3Hj6twWpExmwf8E02cOJ1K05MaY3bsEcp4nL6VrIwkVmF9mSMevreFIESiG1Ecpi04jktG73MJ%2BGzsAGOqUBYoD653Bsm7emHeKhXlhez6gsPVWWIRXwU6wD3vedww45TRA4nb38%2BhFQBRnOKzOghKTiVj%2Bo7v9Ytu44BdoTYSESU8NBZu%2Fv08JtVQ6dEGX2%2FazQ7da%2FZpqiB6NYDaZ9iPqoCiBLQxMm4K9BH7A0BO6CGQXIp9snh3FymtpLubBjQjaDyM5fhhwzoAqCNmg9Fd2mcO%2F5ob3RgjKpy6UuPeBb%2BwCG&X-Amz-Signature=d17340a1794bf8712afd9e2ee541ea08434f54ab8484912774a2d3ca1978e192&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
