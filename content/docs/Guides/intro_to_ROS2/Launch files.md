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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6RTOEA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDJeMTdr30OnozEFoDalLthTL8NrkyjgHNfWhm9X0uF8AIhAKXDgpq%2B30m7WoFTsbKQfNm0fyQgJvrGSJKD3yQ1YnqAKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzejVJJmJO233SoOqUq3AO3Xglc40gUIS6fWhKONsGS04mcqi9yQ3NyWRolivR4Lpwn445C4iPjKZzyEowdOJnIAaEdF1OMsqLekT1vXZfoqwKet47K0shrukCH1%2FU8cKEVNHv6YBTj9T%2Fba9RJ%2FI2FlBiS%2Bt7YEpm%2BCM1gLjZ9fEvd1IjqFylCSNl8Bhicifexz5ql2jw1BqmBVcKxdAXpjZ1i0ZMCgt1sNzfFeuG9E%2FMsMje8yzQU%2FNquf7MTIvQPEIC%2BKBlL0Ig7jvGKAphuh4CuvgVtV%2B2wJlHKCY1kcrIWyaJS5QrvCWGpvyH%2Bhl9c6ggjWH%2BZWJXqSy5DKcq1TZRg%2Fai3sgasXrsXNQoWnlroKuc8Maq2gdCG8WyjYM2J2uCBkN5ALOpBGe4zGZum7sAuCkXSBoIJ2Tln4%2Brv%2FCB3auUHzk9Th6dc8dgBCDkwbHge4vZQI1QRy3kdY0FLc8t3H%2F0k2LWjPMPUmiD%2BGJZyr4y77njpuykZ3imTmNjt7i6iy%2BfsQsfxxNwDWrLdZmzN4c%2B2ffIZTP6arrNC%2FWE7Y3PfJ3HDPAafkP6fz0%2FqIyEFEAfGaPIEdSkCKnso0MRDSoOyD3OPFyBZ7W3fsPSwHZ5Fb29L2JIxke2QljU0gJ8ElIWGJLl2wTDt6dW9BjqkAbO54ZhD7h2Q%2FBeJL6AAVLAhILi2Xu6Rw17O4jqGcdF1sNm0EJitDYlIYf7LLUEETnzxlth644VMYGlB3ZuEOd5pLhX0r2A9Nw0eBQ%2BhXoPKvIBpwjZcbD7xQP9BxLci%2Fovbnk%2FmYY0Et1CR%2BTqxBMtJjCOozm12zFcufqvI8JG2mKcLyTHNWzu7IlgQkquXBj%2B4hH%2BNXG7w32BOPxiNCnZ7dQtJ&X-Amz-Signature=17da8be77d588f3280ac924374ff483d4e2f948f5625e01650bd3ab33f588bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6RTOEA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDJeMTdr30OnozEFoDalLthTL8NrkyjgHNfWhm9X0uF8AIhAKXDgpq%2B30m7WoFTsbKQfNm0fyQgJvrGSJKD3yQ1YnqAKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzejVJJmJO233SoOqUq3AO3Xglc40gUIS6fWhKONsGS04mcqi9yQ3NyWRolivR4Lpwn445C4iPjKZzyEowdOJnIAaEdF1OMsqLekT1vXZfoqwKet47K0shrukCH1%2FU8cKEVNHv6YBTj9T%2Fba9RJ%2FI2FlBiS%2Bt7YEpm%2BCM1gLjZ9fEvd1IjqFylCSNl8Bhicifexz5ql2jw1BqmBVcKxdAXpjZ1i0ZMCgt1sNzfFeuG9E%2FMsMje8yzQU%2FNquf7MTIvQPEIC%2BKBlL0Ig7jvGKAphuh4CuvgVtV%2B2wJlHKCY1kcrIWyaJS5QrvCWGpvyH%2Bhl9c6ggjWH%2BZWJXqSy5DKcq1TZRg%2Fai3sgasXrsXNQoWnlroKuc8Maq2gdCG8WyjYM2J2uCBkN5ALOpBGe4zGZum7sAuCkXSBoIJ2Tln4%2Brv%2FCB3auUHzk9Th6dc8dgBCDkwbHge4vZQI1QRy3kdY0FLc8t3H%2F0k2LWjPMPUmiD%2BGJZyr4y77njpuykZ3imTmNjt7i6iy%2BfsQsfxxNwDWrLdZmzN4c%2B2ffIZTP6arrNC%2FWE7Y3PfJ3HDPAafkP6fz0%2FqIyEFEAfGaPIEdSkCKnso0MRDSoOyD3OPFyBZ7W3fsPSwHZ5Fb29L2JIxke2QljU0gJ8ElIWGJLl2wTDt6dW9BjqkAbO54ZhD7h2Q%2FBeJL6AAVLAhILi2Xu6Rw17O4jqGcdF1sNm0EJitDYlIYf7LLUEETnzxlth644VMYGlB3ZuEOd5pLhX0r2A9Nw0eBQ%2BhXoPKvIBpwjZcbD7xQP9BxLci%2Fovbnk%2FmYY0Et1CR%2BTqxBMtJjCOozm12zFcufqvI8JG2mKcLyTHNWzu7IlgQkquXBj%2B4hH%2BNXG7w32BOPxiNCnZ7dQtJ&X-Amz-Signature=318068970d946f0bbce25be43514bc6ef4c5ff349f4455780f099c9ebf1f1719&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6RTOEA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDJeMTdr30OnozEFoDalLthTL8NrkyjgHNfWhm9X0uF8AIhAKXDgpq%2B30m7WoFTsbKQfNm0fyQgJvrGSJKD3yQ1YnqAKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzejVJJmJO233SoOqUq3AO3Xglc40gUIS6fWhKONsGS04mcqi9yQ3NyWRolivR4Lpwn445C4iPjKZzyEowdOJnIAaEdF1OMsqLekT1vXZfoqwKet47K0shrukCH1%2FU8cKEVNHv6YBTj9T%2Fba9RJ%2FI2FlBiS%2Bt7YEpm%2BCM1gLjZ9fEvd1IjqFylCSNl8Bhicifexz5ql2jw1BqmBVcKxdAXpjZ1i0ZMCgt1sNzfFeuG9E%2FMsMje8yzQU%2FNquf7MTIvQPEIC%2BKBlL0Ig7jvGKAphuh4CuvgVtV%2B2wJlHKCY1kcrIWyaJS5QrvCWGpvyH%2Bhl9c6ggjWH%2BZWJXqSy5DKcq1TZRg%2Fai3sgasXrsXNQoWnlroKuc8Maq2gdCG8WyjYM2J2uCBkN5ALOpBGe4zGZum7sAuCkXSBoIJ2Tln4%2Brv%2FCB3auUHzk9Th6dc8dgBCDkwbHge4vZQI1QRy3kdY0FLc8t3H%2F0k2LWjPMPUmiD%2BGJZyr4y77njpuykZ3imTmNjt7i6iy%2BfsQsfxxNwDWrLdZmzN4c%2B2ffIZTP6arrNC%2FWE7Y3PfJ3HDPAafkP6fz0%2FqIyEFEAfGaPIEdSkCKnso0MRDSoOyD3OPFyBZ7W3fsPSwHZ5Fb29L2JIxke2QljU0gJ8ElIWGJLl2wTDt6dW9BjqkAbO54ZhD7h2Q%2FBeJL6AAVLAhILi2Xu6Rw17O4jqGcdF1sNm0EJitDYlIYf7LLUEETnzxlth644VMYGlB3ZuEOd5pLhX0r2A9Nw0eBQ%2BhXoPKvIBpwjZcbD7xQP9BxLci%2Fovbnk%2FmYY0Et1CR%2BTqxBMtJjCOozm12zFcufqvI8JG2mKcLyTHNWzu7IlgQkquXBj%2B4hH%2BNXG7w32BOPxiNCnZ7dQtJ&X-Amz-Signature=b02dfa000f4a0828da884d46e2b8a03b278e81e612ce353ad696da03542ba84e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
