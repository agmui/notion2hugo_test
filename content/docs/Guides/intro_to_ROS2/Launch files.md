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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVA6VCBU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXDvU4SAgXQpisV%2FRwG6OXzngJHbifuyufAD2r%2F1xj8AiBr30L8XF1CYltqj5TR4QqT9qvHtJhNGVcZ2upMi%2BedDir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM4yhHnUq4cx1g8nEuKtwDEcHkNnHClnItwrGzesYWc5H4VoFYxy%2BOP%2BMUjlFU1ZzVfMMr1o%2Fowxv5tkmqgf4O4sZZS%2FFHzXJH3bldQQYXje8%2FfZvg67b%2FXCTGix%2Fz6KiZ5%2FWlKzwJ7%2FcOvV97bOdwoz5%2Bu4%2F3G2Sgq3YRnrg1A72RPYjUfTRDT3UMiozH5lOvmm6A98498w2TFmrGapbF3yLVJEA6VNGZ1MZIzHCS3SCHmrwLhDf8fKrM0%2BpjlABZS6AOGbSdqpZYOt5mNRW%2BeD7yQ5tqeE2rmNgvmiRaP3GZ8tsYftq2eE%2FSMPRFG%2FbKfpC0voftx1w5lwqNnZgj8BMCJpI2pXw1dzlOAWtHbaCyYCpT19eIQQze%2BFfX%2BBj4zwi2gvVywoC6cU6uMLMWHd0OY55hjFQfHkdvkXUuzMaq1BlL%2FSn1L9pM9WSDFletDEpV3tf23aptsi3QRNPIl%2Fv%2BlTOOqQaEb5UtyuwrLNdtSpPXN0hA7W%2Fl7UNKPCU2MWwVggwAQUK2XqEc43V0pvk8CvoAqBzrZZ0sLQhl2FB6Vs%2FwqZtgO3brG3NdxE%2FZ9NqpT47wh6S5LNFIwEzs4dRXkuCPNRk0ExJTYqBijA5bNjc8MSlsSKPBr6YEdgszyPNMsemxEuApzzYw64OywAY6pgHKyuhI76AFh2cSWtcoa4nVhqe%2BZl50LaVVp88lOQa34u3tw8XEPX08dw3I9Qk6aP76KR1pSEv5%2Fhe2Tg05vvyaneB0XY6xWGrxSSPcX9yeSr7utvUEUct5wWJ9kh24WcC7opQskNMbqaCnu7l%2FQt81P07J6hFweDS7EuL7gwWJHV4QcciBdp8xTW4B%2F%2FmUninL3Rb8P4Eg%2BZTaLF3ut2xayUnit4j7&X-Amz-Signature=ab13c78e0229462217f095034e17d79b1b96d96473f320c2884d086d32993177&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVA6VCBU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXDvU4SAgXQpisV%2FRwG6OXzngJHbifuyufAD2r%2F1xj8AiBr30L8XF1CYltqj5TR4QqT9qvHtJhNGVcZ2upMi%2BedDir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM4yhHnUq4cx1g8nEuKtwDEcHkNnHClnItwrGzesYWc5H4VoFYxy%2BOP%2BMUjlFU1ZzVfMMr1o%2Fowxv5tkmqgf4O4sZZS%2FFHzXJH3bldQQYXje8%2FfZvg67b%2FXCTGix%2Fz6KiZ5%2FWlKzwJ7%2FcOvV97bOdwoz5%2Bu4%2F3G2Sgq3YRnrg1A72RPYjUfTRDT3UMiozH5lOvmm6A98498w2TFmrGapbF3yLVJEA6VNGZ1MZIzHCS3SCHmrwLhDf8fKrM0%2BpjlABZS6AOGbSdqpZYOt5mNRW%2BeD7yQ5tqeE2rmNgvmiRaP3GZ8tsYftq2eE%2FSMPRFG%2FbKfpC0voftx1w5lwqNnZgj8BMCJpI2pXw1dzlOAWtHbaCyYCpT19eIQQze%2BFfX%2BBj4zwi2gvVywoC6cU6uMLMWHd0OY55hjFQfHkdvkXUuzMaq1BlL%2FSn1L9pM9WSDFletDEpV3tf23aptsi3QRNPIl%2Fv%2BlTOOqQaEb5UtyuwrLNdtSpPXN0hA7W%2Fl7UNKPCU2MWwVggwAQUK2XqEc43V0pvk8CvoAqBzrZZ0sLQhl2FB6Vs%2FwqZtgO3brG3NdxE%2FZ9NqpT47wh6S5LNFIwEzs4dRXkuCPNRk0ExJTYqBijA5bNjc8MSlsSKPBr6YEdgszyPNMsemxEuApzzYw64OywAY6pgHKyuhI76AFh2cSWtcoa4nVhqe%2BZl50LaVVp88lOQa34u3tw8XEPX08dw3I9Qk6aP76KR1pSEv5%2Fhe2Tg05vvyaneB0XY6xWGrxSSPcX9yeSr7utvUEUct5wWJ9kh24WcC7opQskNMbqaCnu7l%2FQt81P07J6hFweDS7EuL7gwWJHV4QcciBdp8xTW4B%2F%2FmUninL3Rb8P4Eg%2BZTaLF3ut2xayUnit4j7&X-Amz-Signature=1075e403bceef4acde987a7f6320654181d44817e466e6c8fdb2a970d9f699af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVA6VCBU%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXDvU4SAgXQpisV%2FRwG6OXzngJHbifuyufAD2r%2F1xj8AiBr30L8XF1CYltqj5TR4QqT9qvHtJhNGVcZ2upMi%2BedDir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM4yhHnUq4cx1g8nEuKtwDEcHkNnHClnItwrGzesYWc5H4VoFYxy%2BOP%2BMUjlFU1ZzVfMMr1o%2Fowxv5tkmqgf4O4sZZS%2FFHzXJH3bldQQYXje8%2FfZvg67b%2FXCTGix%2Fz6KiZ5%2FWlKzwJ7%2FcOvV97bOdwoz5%2Bu4%2F3G2Sgq3YRnrg1A72RPYjUfTRDT3UMiozH5lOvmm6A98498w2TFmrGapbF3yLVJEA6VNGZ1MZIzHCS3SCHmrwLhDf8fKrM0%2BpjlABZS6AOGbSdqpZYOt5mNRW%2BeD7yQ5tqeE2rmNgvmiRaP3GZ8tsYftq2eE%2FSMPRFG%2FbKfpC0voftx1w5lwqNnZgj8BMCJpI2pXw1dzlOAWtHbaCyYCpT19eIQQze%2BFfX%2BBj4zwi2gvVywoC6cU6uMLMWHd0OY55hjFQfHkdvkXUuzMaq1BlL%2FSn1L9pM9WSDFletDEpV3tf23aptsi3QRNPIl%2Fv%2BlTOOqQaEb5UtyuwrLNdtSpPXN0hA7W%2Fl7UNKPCU2MWwVggwAQUK2XqEc43V0pvk8CvoAqBzrZZ0sLQhl2FB6Vs%2FwqZtgO3brG3NdxE%2FZ9NqpT47wh6S5LNFIwEzs4dRXkuCPNRk0ExJTYqBijA5bNjc8MSlsSKPBr6YEdgszyPNMsemxEuApzzYw64OywAY6pgHKyuhI76AFh2cSWtcoa4nVhqe%2BZl50LaVVp88lOQa34u3tw8XEPX08dw3I9Qk6aP76KR1pSEv5%2Fhe2Tg05vvyaneB0XY6xWGrxSSPcX9yeSr7utvUEUct5wWJ9kh24WcC7opQskNMbqaCnu7l%2FQt81P07J6hFweDS7EuL7gwWJHV4QcciBdp8xTW4B%2F%2FmUninL3Rb8P4Eg%2BZTaLF3ut2xayUnit4j7&X-Amz-Signature=fd91961776dc457bef1589ced7776d5dc036a3fd0b5e01d37bebd1bec995f7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
