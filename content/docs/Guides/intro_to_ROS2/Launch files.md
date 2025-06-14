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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVGIGX7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCKGiA5ouecwCspGs8MuvyluZfvXrLHMzml%2FO%2B67LMzagIhAOIC6FXYq%2FcqbECS9n9R51QUivmYiF3Aem3ar%2BPFlXFUKv8DCDUQABoMNjM3NDIzMTgzODA1Igz%2FCiDeBfcZbHGgm9Iq3AMXqR4Bz0TrJNeQ%2FBFr9F3BQzOS8cHhJFFoEEVxsFdLK5StvM0ZlB65hJBvOkwTLaLzCQ2V%2FkOiuUG8Zojqqt6r98jlHAVxLxhDo2GJqnR9yROsKz%2BKLR3KPa4jCDklUv%2Fvg1b9Ipz5K1o57J8e45dWLxPkGW2S3KQUMp%2BP3wWrKd8YyhUkMJ5YgbELtjVzLuMWr75tOjKoFCpl94E5Qcs372UtqV4s3LGXIAsO1Z6xnBVToqvV3Wn92cx91E%2Br2w0uLaVd27cOnNlwSnqeF857Re0MYiXEnRowO37bfRzZ4exWEkxMmllt9fMhT8iOCzei6kxnonHFq%2FN0AIrMT0LcDSFC7UFdaCBwjSaS%2BKZLb6n5eQZ9mY9KjgZthxoTpr4T0FDuKbmImqH3Z3jKGm7WiCjlpXNe5gIeMzZpxoSs2zePMiI3iK%2BKU9PU%2FGwfYaQ%2BSOWU39PYDLFqClOPSN5YoiFm6S31sxfK%2BtX3wmzzP9A5Wh0CfG2OrMo%2BK4%2BXZFKr64pftmeVKEioJHWr03H0ziNDyIgXB3OdshBx%2FTeNKENzuVdDbdkjUMwPLdbYFvFzlvmTIku6VC%2BPiCUNuePoFdBzWUsMVHDrOcnNlHB%2FIpa8gvsSeVWppjd92jD1pLfCBjqkAQiE1NsHsb3AT3oKBGpu%2FDdzhnuUANJE%2Btt9VVRPNCqK%2BPLjs3ZGncK4jG6AufLtofpAMRCsKYcBdsZOlt3iE7GUhTaGqFbqaWrUhJpred%2FzESSDZDzfp5Xm181BtIQ21Lo9%2Fu14mpArA1qzsckVVpwbMEVpj1aNucv2sDSFuaWdbPwNSvmcCiCaEfuj9KzJnxhXhtWRj1IHv%2FQRmCbl15mQJaYC&X-Amz-Signature=78e9080dff36b3867ed5939bbb169a42d6c29825867dc0ca08dbd350cd2b0586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVGIGX7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCKGiA5ouecwCspGs8MuvyluZfvXrLHMzml%2FO%2B67LMzagIhAOIC6FXYq%2FcqbECS9n9R51QUivmYiF3Aem3ar%2BPFlXFUKv8DCDUQABoMNjM3NDIzMTgzODA1Igz%2FCiDeBfcZbHGgm9Iq3AMXqR4Bz0TrJNeQ%2FBFr9F3BQzOS8cHhJFFoEEVxsFdLK5StvM0ZlB65hJBvOkwTLaLzCQ2V%2FkOiuUG8Zojqqt6r98jlHAVxLxhDo2GJqnR9yROsKz%2BKLR3KPa4jCDklUv%2Fvg1b9Ipz5K1o57J8e45dWLxPkGW2S3KQUMp%2BP3wWrKd8YyhUkMJ5YgbELtjVzLuMWr75tOjKoFCpl94E5Qcs372UtqV4s3LGXIAsO1Z6xnBVToqvV3Wn92cx91E%2Br2w0uLaVd27cOnNlwSnqeF857Re0MYiXEnRowO37bfRzZ4exWEkxMmllt9fMhT8iOCzei6kxnonHFq%2FN0AIrMT0LcDSFC7UFdaCBwjSaS%2BKZLb6n5eQZ9mY9KjgZthxoTpr4T0FDuKbmImqH3Z3jKGm7WiCjlpXNe5gIeMzZpxoSs2zePMiI3iK%2BKU9PU%2FGwfYaQ%2BSOWU39PYDLFqClOPSN5YoiFm6S31sxfK%2BtX3wmzzP9A5Wh0CfG2OrMo%2BK4%2BXZFKr64pftmeVKEioJHWr03H0ziNDyIgXB3OdshBx%2FTeNKENzuVdDbdkjUMwPLdbYFvFzlvmTIku6VC%2BPiCUNuePoFdBzWUsMVHDrOcnNlHB%2FIpa8gvsSeVWppjd92jD1pLfCBjqkAQiE1NsHsb3AT3oKBGpu%2FDdzhnuUANJE%2Btt9VVRPNCqK%2BPLjs3ZGncK4jG6AufLtofpAMRCsKYcBdsZOlt3iE7GUhTaGqFbqaWrUhJpred%2FzESSDZDzfp5Xm181BtIQ21Lo9%2Fu14mpArA1qzsckVVpwbMEVpj1aNucv2sDSFuaWdbPwNSvmcCiCaEfuj9KzJnxhXhtWRj1IHv%2FQRmCbl15mQJaYC&X-Amz-Signature=306db1326ad4282d129194c94c0d2ca67563f3db649a57127e8282ff74c6f5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVGIGX7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCKGiA5ouecwCspGs8MuvyluZfvXrLHMzml%2FO%2B67LMzagIhAOIC6FXYq%2FcqbECS9n9R51QUivmYiF3Aem3ar%2BPFlXFUKv8DCDUQABoMNjM3NDIzMTgzODA1Igz%2FCiDeBfcZbHGgm9Iq3AMXqR4Bz0TrJNeQ%2FBFr9F3BQzOS8cHhJFFoEEVxsFdLK5StvM0ZlB65hJBvOkwTLaLzCQ2V%2FkOiuUG8Zojqqt6r98jlHAVxLxhDo2GJqnR9yROsKz%2BKLR3KPa4jCDklUv%2Fvg1b9Ipz5K1o57J8e45dWLxPkGW2S3KQUMp%2BP3wWrKd8YyhUkMJ5YgbELtjVzLuMWr75tOjKoFCpl94E5Qcs372UtqV4s3LGXIAsO1Z6xnBVToqvV3Wn92cx91E%2Br2w0uLaVd27cOnNlwSnqeF857Re0MYiXEnRowO37bfRzZ4exWEkxMmllt9fMhT8iOCzei6kxnonHFq%2FN0AIrMT0LcDSFC7UFdaCBwjSaS%2BKZLb6n5eQZ9mY9KjgZthxoTpr4T0FDuKbmImqH3Z3jKGm7WiCjlpXNe5gIeMzZpxoSs2zePMiI3iK%2BKU9PU%2FGwfYaQ%2BSOWU39PYDLFqClOPSN5YoiFm6S31sxfK%2BtX3wmzzP9A5Wh0CfG2OrMo%2BK4%2BXZFKr64pftmeVKEioJHWr03H0ziNDyIgXB3OdshBx%2FTeNKENzuVdDbdkjUMwPLdbYFvFzlvmTIku6VC%2BPiCUNuePoFdBzWUsMVHDrOcnNlHB%2FIpa8gvsSeVWppjd92jD1pLfCBjqkAQiE1NsHsb3AT3oKBGpu%2FDdzhnuUANJE%2Btt9VVRPNCqK%2BPLjs3ZGncK4jG6AufLtofpAMRCsKYcBdsZOlt3iE7GUhTaGqFbqaWrUhJpred%2FzESSDZDzfp5Xm181BtIQ21Lo9%2Fu14mpArA1qzsckVVpwbMEVpj1aNucv2sDSFuaWdbPwNSvmcCiCaEfuj9KzJnxhXhtWRj1IHv%2FQRmCbl15mQJaYC&X-Amz-Signature=754b6b0b0e1379f42f52cba765f080b95e7d972d12d6c3eba49c91fdf6fa79ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
