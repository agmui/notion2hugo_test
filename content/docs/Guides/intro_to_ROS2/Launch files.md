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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXZEAW2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3KfWH%2FpPDkkrS2lev2R6MpxFbIhux1vsU%2FdoxBX2eZwIgHgQMtpEJtPGdTe2LGZfWNqOQDphJNG8hr%2BtfrMP1euAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFkimOAGrlZxGJ9JkircA7IqbIl5WsXF1Hx6idFGo5DnwZmloWU1p5fT3oz9JpUsv0TwVe62lWOPTi01Df46o2A5LjSLXvCYRKkr%2FslU7D5jMPp4CY7A3A3hUbygizz2QyU6qnxGt8tHhGjyg6A4EOzoZZ3CjvSC9XORXfwt0eM4xYhQZEU3DLPAe04ko220Dq92cZmv1mIsVZbE2DS8VXaTXxH82lmrQ5xM2EPThcDKvizBChboSNkeDZQQttPraRk6lGxcD5tf6DTLwNvsoynpVX7l2Yin%2Fa1QP2iSchD%2F6P1UQQMGzN39mOHmgR1499mrrKxLP1AEmx4wnY8kf%2BC6AR6ttgoaoQz%2FjejIPNTzUYCAwjTTfqNuVwNllHtS606EfO%2FMYKtuERATthK2F6N1LXFQ3uwuWAu2c%2FE9x9gr7KSgNcRLcpGfF10G%2Ff6qw5VATJHlBHnFpKnXJeAKcx%2BsQPT2%2F9T2WLMh%2BTpqXjzz7oHu6UPGIzYGerolACjIUZO3I2AjHX1FDqZhHeNQ7re5sNLsqfrSVWER420mk5ghnASctO7C0%2BbXx8bATCOnfs8Vvp%2F%2Bmzo6DVI3eDloQmUz58xym9u5b3qg1mxou9Sa8TCYJsmn%2FHoijpB2qK4sMXi%2BKhnGGT0Eb38nMJLkw78GOqUBbmL0L%2FoRr5y7sTBBooMjLtKHiz9CPeWfumY2%2FbtrY%2BoIzLVHfANJQ5VocxDiwhB6O7ybyGfS1A1i32mSnkzXgHvJPDqMfkruKBqrHK8TYd%2FL%2FV8aGDa6TXCOSvKD21dNo7FvVxPberi1f%2FkOuJfJIKOsvodDWkSDOLPN%2BSZWpsD970ZkhPE2DrwM78FmOil%2Bvr5heVoVie5JgFX1ld3SKXhZQh9T&X-Amz-Signature=3240647543a6140124ea9a11437e759f4f3a22f4e0b08213f725af39e56ea6fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXZEAW2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3KfWH%2FpPDkkrS2lev2R6MpxFbIhux1vsU%2FdoxBX2eZwIgHgQMtpEJtPGdTe2LGZfWNqOQDphJNG8hr%2BtfrMP1euAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFkimOAGrlZxGJ9JkircA7IqbIl5WsXF1Hx6idFGo5DnwZmloWU1p5fT3oz9JpUsv0TwVe62lWOPTi01Df46o2A5LjSLXvCYRKkr%2FslU7D5jMPp4CY7A3A3hUbygizz2QyU6qnxGt8tHhGjyg6A4EOzoZZ3CjvSC9XORXfwt0eM4xYhQZEU3DLPAe04ko220Dq92cZmv1mIsVZbE2DS8VXaTXxH82lmrQ5xM2EPThcDKvizBChboSNkeDZQQttPraRk6lGxcD5tf6DTLwNvsoynpVX7l2Yin%2Fa1QP2iSchD%2F6P1UQQMGzN39mOHmgR1499mrrKxLP1AEmx4wnY8kf%2BC6AR6ttgoaoQz%2FjejIPNTzUYCAwjTTfqNuVwNllHtS606EfO%2FMYKtuERATthK2F6N1LXFQ3uwuWAu2c%2FE9x9gr7KSgNcRLcpGfF10G%2Ff6qw5VATJHlBHnFpKnXJeAKcx%2BsQPT2%2F9T2WLMh%2BTpqXjzz7oHu6UPGIzYGerolACjIUZO3I2AjHX1FDqZhHeNQ7re5sNLsqfrSVWER420mk5ghnASctO7C0%2BbXx8bATCOnfs8Vvp%2F%2Bmzo6DVI3eDloQmUz58xym9u5b3qg1mxou9Sa8TCYJsmn%2FHoijpB2qK4sMXi%2BKhnGGT0Eb38nMJLkw78GOqUBbmL0L%2FoRr5y7sTBBooMjLtKHiz9CPeWfumY2%2FbtrY%2BoIzLVHfANJQ5VocxDiwhB6O7ybyGfS1A1i32mSnkzXgHvJPDqMfkruKBqrHK8TYd%2FL%2FV8aGDa6TXCOSvKD21dNo7FvVxPberi1f%2FkOuJfJIKOsvodDWkSDOLPN%2BSZWpsD970ZkhPE2DrwM78FmOil%2Bvr5heVoVie5JgFX1ld3SKXhZQh9T&X-Amz-Signature=4d953bb22a9be87cd018c719324d748ed282dbb9dfe01ce4af363f69f49df760&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XXZEAW2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3KfWH%2FpPDkkrS2lev2R6MpxFbIhux1vsU%2FdoxBX2eZwIgHgQMtpEJtPGdTe2LGZfWNqOQDphJNG8hr%2BtfrMP1euAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFkimOAGrlZxGJ9JkircA7IqbIl5WsXF1Hx6idFGo5DnwZmloWU1p5fT3oz9JpUsv0TwVe62lWOPTi01Df46o2A5LjSLXvCYRKkr%2FslU7D5jMPp4CY7A3A3hUbygizz2QyU6qnxGt8tHhGjyg6A4EOzoZZ3CjvSC9XORXfwt0eM4xYhQZEU3DLPAe04ko220Dq92cZmv1mIsVZbE2DS8VXaTXxH82lmrQ5xM2EPThcDKvizBChboSNkeDZQQttPraRk6lGxcD5tf6DTLwNvsoynpVX7l2Yin%2Fa1QP2iSchD%2F6P1UQQMGzN39mOHmgR1499mrrKxLP1AEmx4wnY8kf%2BC6AR6ttgoaoQz%2FjejIPNTzUYCAwjTTfqNuVwNllHtS606EfO%2FMYKtuERATthK2F6N1LXFQ3uwuWAu2c%2FE9x9gr7KSgNcRLcpGfF10G%2Ff6qw5VATJHlBHnFpKnXJeAKcx%2BsQPT2%2F9T2WLMh%2BTpqXjzz7oHu6UPGIzYGerolACjIUZO3I2AjHX1FDqZhHeNQ7re5sNLsqfrSVWER420mk5ghnASctO7C0%2BbXx8bATCOnfs8Vvp%2F%2Bmzo6DVI3eDloQmUz58xym9u5b3qg1mxou9Sa8TCYJsmn%2FHoijpB2qK4sMXi%2BKhnGGT0Eb38nMJLkw78GOqUBbmL0L%2FoRr5y7sTBBooMjLtKHiz9CPeWfumY2%2FbtrY%2BoIzLVHfANJQ5VocxDiwhB6O7ybyGfS1A1i32mSnkzXgHvJPDqMfkruKBqrHK8TYd%2FL%2FV8aGDa6TXCOSvKD21dNo7FvVxPberi1f%2FkOuJfJIKOsvodDWkSDOLPN%2BSZWpsD970ZkhPE2DrwM78FmOil%2Bvr5heVoVie5JgFX1ld3SKXhZQh9T&X-Amz-Signature=4f1a9c8e39582f71aad2201345d75ca27c945f1081f8c82c2d4eca3935057d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
