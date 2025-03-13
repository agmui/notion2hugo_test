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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSLIQTS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCccwfTEtRgIbXHtn0VxG4%2Fdwc1xOvG3TFOIW6T7%2FH8MAIgVNX%2F9VZ2SkerOpo1wAdwP%2F8VYpJe0PAIQuFtKNXpj%2FoqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgshMntaEEaBIpjHCrcAzvd6xqPP2n1SfCyyQNamUm%2BY1NMhfrlhhu6mG12Xom4gtdnFCgGQWFNEySYwz2ZVydA7LbxFqh1bAScWFmDgEftfFZPTuW1ZayU8NZrMcqpwrUhvJoXGAIGE25Emgzej1vJputFNhkO27OXHaLNq0ou36fKSHX047Pz%2FEKsxCcw7SKS3AlgEr7IFeh9WdKnPZpG0EQX5q%2Feyh0e0jm0gJcbNiHlGYuP6Dez%2Blojrzc%2FJz6C3rBdsLfRgG6GepOLJdgy5Q4QQgCRTq31DyCZcRufwFK7SxNPEiRjQS6xuRzSbSyuE8tk0Gg9X7dSwB%2FQ%2BFSSOwH%2FpGl%2Bq6E2Vvq9g4gJZFK94na%2BS1mj4OePsev6Qxt8Omhg6etzjQvbHqZaqCalLcNhu4A6W78oJm3P%2FqH2q%2BepwCCUTq9JiujDKYX3tOccYnsxWokZad98TkY5v%2FiCDPimDpoU5eEwt9CzrfXjkhR16uQSXX1NYC1SMZtwAJ%2BVgCDHgYNzNbqLY3J1izN4vPuatxWc7VWSH338W0XM4hHFqvQNz%2BqQ0PLiTugxZPiwGv%2BKfhqy8bR1z01pXsgxKB6t%2BSzQbvXfqXON66wAFJSMv95nK49Lm0m7yuZxhN2O2s3FWympnF9wMOTgyL4GOqUBhgN4iYLtJm8jUFxJ61zd2nYSGVW5moppe7DemKaMRvcUsOBF2bpyHHtMuqRZJhoOZazdWXf6Q0cmhKN3AMclx6CJkLBmX2mM7IzoD%2BfLs6YJB%2FQIhN1C1N%2Flhcqzp%2BEDXTaETn%2B4bAND1XpFecTDkuycfDvh5bS38gsZZeyWbYFopyaN0ObBHmTlycVwz1L%2Faq%2Fe1QykovBYvPucTIw9%2F3cVC9N2&X-Amz-Signature=062ab9936b550e341f1226be107fd3e2410deecec64fe863e45ad86680489d13&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSLIQTS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCccwfTEtRgIbXHtn0VxG4%2Fdwc1xOvG3TFOIW6T7%2FH8MAIgVNX%2F9VZ2SkerOpo1wAdwP%2F8VYpJe0PAIQuFtKNXpj%2FoqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgshMntaEEaBIpjHCrcAzvd6xqPP2n1SfCyyQNamUm%2BY1NMhfrlhhu6mG12Xom4gtdnFCgGQWFNEySYwz2ZVydA7LbxFqh1bAScWFmDgEftfFZPTuW1ZayU8NZrMcqpwrUhvJoXGAIGE25Emgzej1vJputFNhkO27OXHaLNq0ou36fKSHX047Pz%2FEKsxCcw7SKS3AlgEr7IFeh9WdKnPZpG0EQX5q%2Feyh0e0jm0gJcbNiHlGYuP6Dez%2Blojrzc%2FJz6C3rBdsLfRgG6GepOLJdgy5Q4QQgCRTq31DyCZcRufwFK7SxNPEiRjQS6xuRzSbSyuE8tk0Gg9X7dSwB%2FQ%2BFSSOwH%2FpGl%2Bq6E2Vvq9g4gJZFK94na%2BS1mj4OePsev6Qxt8Omhg6etzjQvbHqZaqCalLcNhu4A6W78oJm3P%2FqH2q%2BepwCCUTq9JiujDKYX3tOccYnsxWokZad98TkY5v%2FiCDPimDpoU5eEwt9CzrfXjkhR16uQSXX1NYC1SMZtwAJ%2BVgCDHgYNzNbqLY3J1izN4vPuatxWc7VWSH338W0XM4hHFqvQNz%2BqQ0PLiTugxZPiwGv%2BKfhqy8bR1z01pXsgxKB6t%2BSzQbvXfqXON66wAFJSMv95nK49Lm0m7yuZxhN2O2s3FWympnF9wMOTgyL4GOqUBhgN4iYLtJm8jUFxJ61zd2nYSGVW5moppe7DemKaMRvcUsOBF2bpyHHtMuqRZJhoOZazdWXf6Q0cmhKN3AMclx6CJkLBmX2mM7IzoD%2BfLs6YJB%2FQIhN1C1N%2Flhcqzp%2BEDXTaETn%2B4bAND1XpFecTDkuycfDvh5bS38gsZZeyWbYFopyaN0ObBHmTlycVwz1L%2Faq%2Fe1QykovBYvPucTIw9%2F3cVC9N2&X-Amz-Signature=2bdd189a4f60ebfe5a8d789345c17d57d02c15f0410915fa6280598413d31aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSLIQTS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCccwfTEtRgIbXHtn0VxG4%2Fdwc1xOvG3TFOIW6T7%2FH8MAIgVNX%2F9VZ2SkerOpo1wAdwP%2F8VYpJe0PAIQuFtKNXpj%2FoqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgshMntaEEaBIpjHCrcAzvd6xqPP2n1SfCyyQNamUm%2BY1NMhfrlhhu6mG12Xom4gtdnFCgGQWFNEySYwz2ZVydA7LbxFqh1bAScWFmDgEftfFZPTuW1ZayU8NZrMcqpwrUhvJoXGAIGE25Emgzej1vJputFNhkO27OXHaLNq0ou36fKSHX047Pz%2FEKsxCcw7SKS3AlgEr7IFeh9WdKnPZpG0EQX5q%2Feyh0e0jm0gJcbNiHlGYuP6Dez%2Blojrzc%2FJz6C3rBdsLfRgG6GepOLJdgy5Q4QQgCRTq31DyCZcRufwFK7SxNPEiRjQS6xuRzSbSyuE8tk0Gg9X7dSwB%2FQ%2BFSSOwH%2FpGl%2Bq6E2Vvq9g4gJZFK94na%2BS1mj4OePsev6Qxt8Omhg6etzjQvbHqZaqCalLcNhu4A6W78oJm3P%2FqH2q%2BepwCCUTq9JiujDKYX3tOccYnsxWokZad98TkY5v%2FiCDPimDpoU5eEwt9CzrfXjkhR16uQSXX1NYC1SMZtwAJ%2BVgCDHgYNzNbqLY3J1izN4vPuatxWc7VWSH338W0XM4hHFqvQNz%2BqQ0PLiTugxZPiwGv%2BKfhqy8bR1z01pXsgxKB6t%2BSzQbvXfqXON66wAFJSMv95nK49Lm0m7yuZxhN2O2s3FWympnF9wMOTgyL4GOqUBhgN4iYLtJm8jUFxJ61zd2nYSGVW5moppe7DemKaMRvcUsOBF2bpyHHtMuqRZJhoOZazdWXf6Q0cmhKN3AMclx6CJkLBmX2mM7IzoD%2BfLs6YJB%2FQIhN1C1N%2Flhcqzp%2BEDXTaETn%2B4bAND1XpFecTDkuycfDvh5bS38gsZZeyWbYFopyaN0ObBHmTlycVwz1L%2Faq%2Fe1QykovBYvPucTIw9%2F3cVC9N2&X-Amz-Signature=f6a9ad0e299484e96d78f6b4c94fc73e6b70516889dc84adfb9076cbe4269ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
