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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQ5QLGH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe9oQZEYEY7HQhjawYjlOQrNApRyMoBRLidGAX7kLWbAiEA%2FA%2B24Itk8DDbxN4cEn4OljLO7zwcwnv24KzGY5H9Bh4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPVOWkKA8BaoUoqYircA6UqdZ8nd73tXjb2zTAenNQf9E0i9CoTY%2FhgVpJnRMQMEgGJ%2F1hNnKN8nH24RwJ7AVb8fiNKGwqnKb%2BaGA707l2VEF8zkWovsBMX%2BQHqQ1Jwi1Z4G31UbEmF7%2FaJqOKC0F7SBkLNb1xd%2B4RWeKGLQmr6%2B6ReTwNdPIBEI8egUzz%2FugKE4vZ5vP60S1AL9fgIFq75bOipUrOq9N4g9YHwxsL9yyCBnJ4I1qAAPdEbXKf19%2BWr2PzOjxUt3L6IcRAX5L8MqQcI0th5fBVTkAXRhC402OQWak8VNJHHTjl%2BKWDb9AhgwmGL9PZlmldmsFco7vCNgRVtunKbyBbuh%2BP%2BqBAs0HeY%2Fd4Ou7quGrrNt2T1nFk2lByX3Zm%2FdS7FWQSpEK%2FF6nrsHfHoc6egYjQ%2FQ5sc3I0Nb2nE6uY160Ir%2BwRuZ33A%2FmEpGh2EBSo%2FGkeeS0UavAqBnL9FWuzWgIDw58uQ%2BHUTqrd30fpCYl0r1XvZRZ0%2F%2FZ2%2BeYUM9aW8RRE4yvaTpXo3HclKd7Wa4dBBaf%2FDCREVPFNvGhGVtWK5IKGEIw7nQQzG3vq1ePcHHWwv%2BvDznLKnabCeO%2Fl88n0Q%2Bqp36GKjVt2%2FYqoMLncnSGktM0eHcHLqcBvGrSBXMOPR8LwGOqUBrkWEmg0m0CqS6GWGEsaaqoOqE8PzkkeFd8Xy0wfS6TIIV851BUDy73obx7HQ2%2ByJLuvG2HDyPfjVs%2BiKCML0ALNKLsFTPfCVV7qadgNN4GJ%2BTcZECt9oAKaOKEWMIiHQZ0P5tcL7gX%2BoznDA1XjM2pUKzk4j6tee74LCeW4W%2B9y1Hs%2BBTK7ITBtd43nLXiUXXGcK55iYScwzW7UaJqwD5OibC0HF&X-Amz-Signature=796d1140cb1bb24fae069b4354ee8bfac1a89fef77986698adf148ce2b6d3a56&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQ5QLGH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe9oQZEYEY7HQhjawYjlOQrNApRyMoBRLidGAX7kLWbAiEA%2FA%2B24Itk8DDbxN4cEn4OljLO7zwcwnv24KzGY5H9Bh4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPVOWkKA8BaoUoqYircA6UqdZ8nd73tXjb2zTAenNQf9E0i9CoTY%2FhgVpJnRMQMEgGJ%2F1hNnKN8nH24RwJ7AVb8fiNKGwqnKb%2BaGA707l2VEF8zkWovsBMX%2BQHqQ1Jwi1Z4G31UbEmF7%2FaJqOKC0F7SBkLNb1xd%2B4RWeKGLQmr6%2B6ReTwNdPIBEI8egUzz%2FugKE4vZ5vP60S1AL9fgIFq75bOipUrOq9N4g9YHwxsL9yyCBnJ4I1qAAPdEbXKf19%2BWr2PzOjxUt3L6IcRAX5L8MqQcI0th5fBVTkAXRhC402OQWak8VNJHHTjl%2BKWDb9AhgwmGL9PZlmldmsFco7vCNgRVtunKbyBbuh%2BP%2BqBAs0HeY%2Fd4Ou7quGrrNt2T1nFk2lByX3Zm%2FdS7FWQSpEK%2FF6nrsHfHoc6egYjQ%2FQ5sc3I0Nb2nE6uY160Ir%2BwRuZ33A%2FmEpGh2EBSo%2FGkeeS0UavAqBnL9FWuzWgIDw58uQ%2BHUTqrd30fpCYl0r1XvZRZ0%2F%2FZ2%2BeYUM9aW8RRE4yvaTpXo3HclKd7Wa4dBBaf%2FDCREVPFNvGhGVtWK5IKGEIw7nQQzG3vq1ePcHHWwv%2BvDznLKnabCeO%2Fl88n0Q%2Bqp36GKjVt2%2FYqoMLncnSGktM0eHcHLqcBvGrSBXMOPR8LwGOqUBrkWEmg0m0CqS6GWGEsaaqoOqE8PzkkeFd8Xy0wfS6TIIV851BUDy73obx7HQ2%2ByJLuvG2HDyPfjVs%2BiKCML0ALNKLsFTPfCVV7qadgNN4GJ%2BTcZECt9oAKaOKEWMIiHQZ0P5tcL7gX%2BoznDA1XjM2pUKzk4j6tee74LCeW4W%2B9y1Hs%2BBTK7ITBtd43nLXiUXXGcK55iYScwzW7UaJqwD5OibC0HF&X-Amz-Signature=2102bb17b1f15fb3c30175933dfbf2e3dbf779dc98c169207d51edebd0143a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQ5QLGH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe9oQZEYEY7HQhjawYjlOQrNApRyMoBRLidGAX7kLWbAiEA%2FA%2B24Itk8DDbxN4cEn4OljLO7zwcwnv24KzGY5H9Bh4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPVOWkKA8BaoUoqYircA6UqdZ8nd73tXjb2zTAenNQf9E0i9CoTY%2FhgVpJnRMQMEgGJ%2F1hNnKN8nH24RwJ7AVb8fiNKGwqnKb%2BaGA707l2VEF8zkWovsBMX%2BQHqQ1Jwi1Z4G31UbEmF7%2FaJqOKC0F7SBkLNb1xd%2B4RWeKGLQmr6%2B6ReTwNdPIBEI8egUzz%2FugKE4vZ5vP60S1AL9fgIFq75bOipUrOq9N4g9YHwxsL9yyCBnJ4I1qAAPdEbXKf19%2BWr2PzOjxUt3L6IcRAX5L8MqQcI0th5fBVTkAXRhC402OQWak8VNJHHTjl%2BKWDb9AhgwmGL9PZlmldmsFco7vCNgRVtunKbyBbuh%2BP%2BqBAs0HeY%2Fd4Ou7quGrrNt2T1nFk2lByX3Zm%2FdS7FWQSpEK%2FF6nrsHfHoc6egYjQ%2FQ5sc3I0Nb2nE6uY160Ir%2BwRuZ33A%2FmEpGh2EBSo%2FGkeeS0UavAqBnL9FWuzWgIDw58uQ%2BHUTqrd30fpCYl0r1XvZRZ0%2F%2FZ2%2BeYUM9aW8RRE4yvaTpXo3HclKd7Wa4dBBaf%2FDCREVPFNvGhGVtWK5IKGEIw7nQQzG3vq1ePcHHWwv%2BvDznLKnabCeO%2Fl88n0Q%2Bqp36GKjVt2%2FYqoMLncnSGktM0eHcHLqcBvGrSBXMOPR8LwGOqUBrkWEmg0m0CqS6GWGEsaaqoOqE8PzkkeFd8Xy0wfS6TIIV851BUDy73obx7HQ2%2ByJLuvG2HDyPfjVs%2BiKCML0ALNKLsFTPfCVV7qadgNN4GJ%2BTcZECt9oAKaOKEWMIiHQZ0P5tcL7gX%2BoznDA1XjM2pUKzk4j6tee74LCeW4W%2B9y1Hs%2BBTK7ITBtd43nLXiUXXGcK55iYScwzW7UaJqwD5OibC0HF&X-Amz-Signature=cfc6f09d8b393fcd3ff33e5c5b140b9d8980918bf9acc9e5bc264af5e4dc398a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
