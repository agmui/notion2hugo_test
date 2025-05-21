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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5MC6VO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDQUmmqf5Zmy%2BSCNaP0phL456dteD%2BZKsb3IxCRoqYaQwIgJ%2Bl%2F0ZgqtjUZcC2cT4TCGDCX0SGVooBnRxuOPA%2B3IZgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIIXXl8o1CwphREmircA5C7thVoKXjfA83OZxnZ40a4VFqi7UZqx0X%2BL1EHGOxcmS2al5AEd66fEV%2BtTAU5UZp%2BSIRDS27TF%2BTT5MyQhpoFlqwlRVuAVH1kxsMGDkELerbRi19nMFuAshxlPz2oOyAwxpM42kWPV6MpruwL22oXprNCGmx9naWizXkZQYZwovhaQbEl6H1eW2VOPBUTNC%2Fo99KMuqDNb8HtdvS9D81xHiVwFtIvaGlr9BmfakpC%2FVeSfWjlauzqQ3PPbHlrQxuMjCHB%2FDdp4tdsOo%2BHLWaLWPaInW4oy3WP7p5ylnXea5ObLGDr5kXZymQF15e0eKaFF5tkCZGYhL20CkPne2dmHMj2al%2B32FTZDv6WCb0Fa7hu7DVBbh7y%2FQMwZ4UK9%2Bey6zM6UoZx%2Br5Yb9XT73VnPDshRAucti0UQ8K1RMs7Q68cZGxfbd5HS8ohhXJsCY9cCFFm1H2HfZKa1YrDFQnUixCdm6KjuA1UtXznG0z5mrGokdTpe522PwA1QWjhRVYA%2BhZZXBNECKYwzAehBnEwohk5%2BLsVGEdIrdfLbP0s3G5LGAeGC7XIXoawD66mtyD6771FVbvpiQxoDBrCnSdj8r9HrgN6NuKMNgy1Z9rbxBiqyqzRKtVHkeYDMNe3tsEGOqUB3wXMt7UZMaQnOmDZEMNGchif3le1U%2BxsRBgXffKYRnFEzA0CsfNCFnws82LePd8zLHlmFOUJ3zOzIElftZQPE9ZHJPy6UFbY4WKmvv8Wb9aAp257L9jV646fHObhYeJqL5TcP5qzED6lCXuxe5WrYIq3v5UPUk7HiohpOhlUxNq2dKtlWoYwcQP0%2BRHnMl%2B5FK9q9WtRF0O2pSmnOBUk3omrUWYn&X-Amz-Signature=d50dc38a2ea4b90cdd4343b86bbbc3b5e93ba1f652a237c2e93b5e8f36ea208c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5MC6VO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDQUmmqf5Zmy%2BSCNaP0phL456dteD%2BZKsb3IxCRoqYaQwIgJ%2Bl%2F0ZgqtjUZcC2cT4TCGDCX0SGVooBnRxuOPA%2B3IZgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIIXXl8o1CwphREmircA5C7thVoKXjfA83OZxnZ40a4VFqi7UZqx0X%2BL1EHGOxcmS2al5AEd66fEV%2BtTAU5UZp%2BSIRDS27TF%2BTT5MyQhpoFlqwlRVuAVH1kxsMGDkELerbRi19nMFuAshxlPz2oOyAwxpM42kWPV6MpruwL22oXprNCGmx9naWizXkZQYZwovhaQbEl6H1eW2VOPBUTNC%2Fo99KMuqDNb8HtdvS9D81xHiVwFtIvaGlr9BmfakpC%2FVeSfWjlauzqQ3PPbHlrQxuMjCHB%2FDdp4tdsOo%2BHLWaLWPaInW4oy3WP7p5ylnXea5ObLGDr5kXZymQF15e0eKaFF5tkCZGYhL20CkPne2dmHMj2al%2B32FTZDv6WCb0Fa7hu7DVBbh7y%2FQMwZ4UK9%2Bey6zM6UoZx%2Br5Yb9XT73VnPDshRAucti0UQ8K1RMs7Q68cZGxfbd5HS8ohhXJsCY9cCFFm1H2HfZKa1YrDFQnUixCdm6KjuA1UtXznG0z5mrGokdTpe522PwA1QWjhRVYA%2BhZZXBNECKYwzAehBnEwohk5%2BLsVGEdIrdfLbP0s3G5LGAeGC7XIXoawD66mtyD6771FVbvpiQxoDBrCnSdj8r9HrgN6NuKMNgy1Z9rbxBiqyqzRKtVHkeYDMNe3tsEGOqUB3wXMt7UZMaQnOmDZEMNGchif3le1U%2BxsRBgXffKYRnFEzA0CsfNCFnws82LePd8zLHlmFOUJ3zOzIElftZQPE9ZHJPy6UFbY4WKmvv8Wb9aAp257L9jV646fHObhYeJqL5TcP5qzED6lCXuxe5WrYIq3v5UPUk7HiohpOhlUxNq2dKtlWoYwcQP0%2BRHnMl%2B5FK9q9WtRF0O2pSmnOBUk3omrUWYn&X-Amz-Signature=9eb495ed3eca369cb3c82ddd6dc26341b85ddf70a596e8d0ce021bd9b9dfac65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV5MC6VO%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDQUmmqf5Zmy%2BSCNaP0phL456dteD%2BZKsb3IxCRoqYaQwIgJ%2Bl%2F0ZgqtjUZcC2cT4TCGDCX0SGVooBnRxuOPA%2B3IZgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIIIXXl8o1CwphREmircA5C7thVoKXjfA83OZxnZ40a4VFqi7UZqx0X%2BL1EHGOxcmS2al5AEd66fEV%2BtTAU5UZp%2BSIRDS27TF%2BTT5MyQhpoFlqwlRVuAVH1kxsMGDkELerbRi19nMFuAshxlPz2oOyAwxpM42kWPV6MpruwL22oXprNCGmx9naWizXkZQYZwovhaQbEl6H1eW2VOPBUTNC%2Fo99KMuqDNb8HtdvS9D81xHiVwFtIvaGlr9BmfakpC%2FVeSfWjlauzqQ3PPbHlrQxuMjCHB%2FDdp4tdsOo%2BHLWaLWPaInW4oy3WP7p5ylnXea5ObLGDr5kXZymQF15e0eKaFF5tkCZGYhL20CkPne2dmHMj2al%2B32FTZDv6WCb0Fa7hu7DVBbh7y%2FQMwZ4UK9%2Bey6zM6UoZx%2Br5Yb9XT73VnPDshRAucti0UQ8K1RMs7Q68cZGxfbd5HS8ohhXJsCY9cCFFm1H2HfZKa1YrDFQnUixCdm6KjuA1UtXznG0z5mrGokdTpe522PwA1QWjhRVYA%2BhZZXBNECKYwzAehBnEwohk5%2BLsVGEdIrdfLbP0s3G5LGAeGC7XIXoawD66mtyD6771FVbvpiQxoDBrCnSdj8r9HrgN6NuKMNgy1Z9rbxBiqyqzRKtVHkeYDMNe3tsEGOqUB3wXMt7UZMaQnOmDZEMNGchif3le1U%2BxsRBgXffKYRnFEzA0CsfNCFnws82LePd8zLHlmFOUJ3zOzIElftZQPE9ZHJPy6UFbY4WKmvv8Wb9aAp257L9jV646fHObhYeJqL5TcP5qzED6lCXuxe5WrYIq3v5UPUk7HiohpOhlUxNq2dKtlWoYwcQP0%2BRHnMl%2B5FK9q9WtRF0O2pSmnOBUk3omrUWYn&X-Amz-Signature=1a5734fd441f6a088f9701045a0e29ee8c27ade862bc254dff045aa9ecc8e41a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
