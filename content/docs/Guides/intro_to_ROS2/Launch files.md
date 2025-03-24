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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNWMN6V%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJOyF%2FqgfFL6U9igctrfumQ3YSnqywtPP4oXp3fyEfqAiBnj59pe5FhPJAn2Cx6iGOmYBDrFJp5WJI3BZCR4qXu9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92x6N319uouBc6dqKtwDE1sDJ%2F4ub77NL4G1pU2gg8U9LxeWIYu8mVRkT7wxesy2XfHyp45BMsUXrc8zsBZpO%2BOfX3S4jMUjC%2FQO3ex6j%2FqUq827IHB1%2B6efScN1Bf9vbcXBYkTWd2joEW2Mxf%2FOsVNF8TmF%2BL%2B0IHSATvI2xghNHY4zrWpVdNSM0NH8SjFIiTQmy0F7Xe6qfc0VuClpdIW9WT%2FD5ST7IC%2Bz9hQPL0LRbgIsux8L1eS6lfoROosGpW6NKCI%2FGG%2Bm7vcp7GF%2BthTLXBIc2me4WkxJRDPRafwL1ftHYCVY%2B2AB%2BHJgFZVCxhx3UdapVeWC1KVt7xy23%2B88j93UNOiRbbf2RwEXEtyWyTKxFLNlwnSF3JEAq9g7af%2F6jSdGJ5YpXFa5WwoKyqlQoEPZjrV1F%2F091130ZGdvmM83gXqS%2B7RKlvm0IPkuf6SySMQFKCxEnW0NF90fpIdFb2BDPpnuqOWjnFH%2BlMsxF%2BRI4hY2LDMHVuH2EsCk7XWoLwcpFiJHYt0lutUHA2PRuh2xw2eEaeKdLg6cv7hJpyfGc8LmJtwQDoZZPTVnOPo8mYR6vKnF%2FDm8zb0HHdQcKCg8oJS5Gzin1Wt6u4oI%2Bd6WjdHZtcb3g9o8iaROvpWQRZzMOxycLo0w1vCEvwY6pgFxmoqJYCDJU%2BVDqZwuD459OuppfLZCmH5Yk6byh4KrfutW4sSf57W6YEIQ5MwGgCcERoQvSN44xL358jKjfKi5cHFJF%2Bv91uOkhE2aiMm7R2B2aG59R4vOtHrtUbfOXyvM8U%2FGN2lloZd8m8Zim4J%2B1AU4%2BASmcp4Xxwk9VOBmje8RkvAMKOu06mVr08lVhSAPOMuHEUALMlh7ft37idg9qX%2BD7sKb&X-Amz-Signature=b2201fc1cd12545d518980828203d023956567ebe91dbf0ab3d9f948bac3638b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNWMN6V%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJOyF%2FqgfFL6U9igctrfumQ3YSnqywtPP4oXp3fyEfqAiBnj59pe5FhPJAn2Cx6iGOmYBDrFJp5WJI3BZCR4qXu9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92x6N319uouBc6dqKtwDE1sDJ%2F4ub77NL4G1pU2gg8U9LxeWIYu8mVRkT7wxesy2XfHyp45BMsUXrc8zsBZpO%2BOfX3S4jMUjC%2FQO3ex6j%2FqUq827IHB1%2B6efScN1Bf9vbcXBYkTWd2joEW2Mxf%2FOsVNF8TmF%2BL%2B0IHSATvI2xghNHY4zrWpVdNSM0NH8SjFIiTQmy0F7Xe6qfc0VuClpdIW9WT%2FD5ST7IC%2Bz9hQPL0LRbgIsux8L1eS6lfoROosGpW6NKCI%2FGG%2Bm7vcp7GF%2BthTLXBIc2me4WkxJRDPRafwL1ftHYCVY%2B2AB%2BHJgFZVCxhx3UdapVeWC1KVt7xy23%2B88j93UNOiRbbf2RwEXEtyWyTKxFLNlwnSF3JEAq9g7af%2F6jSdGJ5YpXFa5WwoKyqlQoEPZjrV1F%2F091130ZGdvmM83gXqS%2B7RKlvm0IPkuf6SySMQFKCxEnW0NF90fpIdFb2BDPpnuqOWjnFH%2BlMsxF%2BRI4hY2LDMHVuH2EsCk7XWoLwcpFiJHYt0lutUHA2PRuh2xw2eEaeKdLg6cv7hJpyfGc8LmJtwQDoZZPTVnOPo8mYR6vKnF%2FDm8zb0HHdQcKCg8oJS5Gzin1Wt6u4oI%2Bd6WjdHZtcb3g9o8iaROvpWQRZzMOxycLo0w1vCEvwY6pgFxmoqJYCDJU%2BVDqZwuD459OuppfLZCmH5Yk6byh4KrfutW4sSf57W6YEIQ5MwGgCcERoQvSN44xL358jKjfKi5cHFJF%2Bv91uOkhE2aiMm7R2B2aG59R4vOtHrtUbfOXyvM8U%2FGN2lloZd8m8Zim4J%2B1AU4%2BASmcp4Xxwk9VOBmje8RkvAMKOu06mVr08lVhSAPOMuHEUALMlh7ft37idg9qX%2BD7sKb&X-Amz-Signature=ae66acdd98e827b4b9960fbd5bb4a9ef8617ae0dff7f71773520c970b35ae246&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNWMN6V%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJOyF%2FqgfFL6U9igctrfumQ3YSnqywtPP4oXp3fyEfqAiBnj59pe5FhPJAn2Cx6iGOmYBDrFJp5WJI3BZCR4qXu9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM92x6N319uouBc6dqKtwDE1sDJ%2F4ub77NL4G1pU2gg8U9LxeWIYu8mVRkT7wxesy2XfHyp45BMsUXrc8zsBZpO%2BOfX3S4jMUjC%2FQO3ex6j%2FqUq827IHB1%2B6efScN1Bf9vbcXBYkTWd2joEW2Mxf%2FOsVNF8TmF%2BL%2B0IHSATvI2xghNHY4zrWpVdNSM0NH8SjFIiTQmy0F7Xe6qfc0VuClpdIW9WT%2FD5ST7IC%2Bz9hQPL0LRbgIsux8L1eS6lfoROosGpW6NKCI%2FGG%2Bm7vcp7GF%2BthTLXBIc2me4WkxJRDPRafwL1ftHYCVY%2B2AB%2BHJgFZVCxhx3UdapVeWC1KVt7xy23%2B88j93UNOiRbbf2RwEXEtyWyTKxFLNlwnSF3JEAq9g7af%2F6jSdGJ5YpXFa5WwoKyqlQoEPZjrV1F%2F091130ZGdvmM83gXqS%2B7RKlvm0IPkuf6SySMQFKCxEnW0NF90fpIdFb2BDPpnuqOWjnFH%2BlMsxF%2BRI4hY2LDMHVuH2EsCk7XWoLwcpFiJHYt0lutUHA2PRuh2xw2eEaeKdLg6cv7hJpyfGc8LmJtwQDoZZPTVnOPo8mYR6vKnF%2FDm8zb0HHdQcKCg8oJS5Gzin1Wt6u4oI%2Bd6WjdHZtcb3g9o8iaROvpWQRZzMOxycLo0w1vCEvwY6pgFxmoqJYCDJU%2BVDqZwuD459OuppfLZCmH5Yk6byh4KrfutW4sSf57W6YEIQ5MwGgCcERoQvSN44xL358jKjfKi5cHFJF%2Bv91uOkhE2aiMm7R2B2aG59R4vOtHrtUbfOXyvM8U%2FGN2lloZd8m8Zim4J%2B1AU4%2BASmcp4Xxwk9VOBmje8RkvAMKOu06mVr08lVhSAPOMuHEUALMlh7ft37idg9qX%2BD7sKb&X-Amz-Signature=ac1110d902446c7236af756fc7744ff1267057c230b59c52997f1d432e3d9e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
