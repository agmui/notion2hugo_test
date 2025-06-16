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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFG7XIGX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB7IxNpXVt0VNDyjnn0A%2F1MlOU8EpHkbbFLH%2BPWkk%2BUVAiEAjElNJ9y2EfankWxWow0yJqzlLIs4r6iEys3%2FA6ENLo0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPki6KiIJ8UnogK9xCrcA1IZ6RE6%2Fa2PZoU37FQ1spSWDtju%2FZWXSWzfAtkKm4l6D%2B%2BD2Ds2MRFrqixO1t9dj%2Bhb1JqJKEyXlE1880kOjpQ0TDrGyLzZ9MLZgXkV9jRHFtwFL%2F3175ibvexASOY6c8eOd34n9s3f%2FGau3VVYzxd%2FBpElU2kLS%2FQOMWUn%2FmDrtkbxCSkWEiIZi8qYpHRihyOlVk7SSRmETTdOaTAeaQgqVM39oP3IDdJb64B8QyTDMSdpH7m6LymXmwIn%2FmKm1coE2du2wGBGOzTavtJ1ZAngQD%2BiRfqGUvkno3WZr2FwPx30n9rOmEo9a2Ra1DOTZfZ%2BDXtR7lPX87aB000MD5eDI9bxzepoSxzb19b5dt761gbcleBQ1dyarfVR4aX9PGp6H0LHbznrSMw6z%2FsHnEiNZUzgf%2F6eTT%2BIvEQW3fIdj%2FJd3yHgsNlxdXisHStR43WLgwq9KxoI7pzcluty3utTPhyT7vA2UfqlK9LmEVK%2Bvp9ANsjrdL1hmq4xuX4tLCvRql%2FHUoMvR7xaAow6TtBzcyqMrJjvhjQc4PakH%2B6HMS0iH3ljK16CK7WPtk9Z08zxQ%2BzbBjFntcK7TxuoDEkikKqLOWkvYR7Bd8acZ8BSRXJmvDR0XJUHNy%2BJMP%2BIv8IGOqUBDAma9Tsy3PkkrLPlG8YcKjI890jVedN9MlWplktslkBulQb3pn3d1r6tyJFEBhVNs2flXEbL2Bp4Qc3sSEeaYIf43IR2IMGYZz3xBVc6PiBaTH2wWo742MTmqfb%2FA0Bjz5tpQZbAtXO168lwapXfw%2BNM9hLUfkUAWu616FiKFJD%2B3AXuu%2B%2FPp1whKEhaByI8LpMgjrVfvVohW5tN6ZW2ciykSTII&X-Amz-Signature=453d21571eb7e2b1cdf6ea785861c64871845a71269ea56ab8bed1fd5d911ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFG7XIGX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB7IxNpXVt0VNDyjnn0A%2F1MlOU8EpHkbbFLH%2BPWkk%2BUVAiEAjElNJ9y2EfankWxWow0yJqzlLIs4r6iEys3%2FA6ENLo0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPki6KiIJ8UnogK9xCrcA1IZ6RE6%2Fa2PZoU37FQ1spSWDtju%2FZWXSWzfAtkKm4l6D%2B%2BD2Ds2MRFrqixO1t9dj%2Bhb1JqJKEyXlE1880kOjpQ0TDrGyLzZ9MLZgXkV9jRHFtwFL%2F3175ibvexASOY6c8eOd34n9s3f%2FGau3VVYzxd%2FBpElU2kLS%2FQOMWUn%2FmDrtkbxCSkWEiIZi8qYpHRihyOlVk7SSRmETTdOaTAeaQgqVM39oP3IDdJb64B8QyTDMSdpH7m6LymXmwIn%2FmKm1coE2du2wGBGOzTavtJ1ZAngQD%2BiRfqGUvkno3WZr2FwPx30n9rOmEo9a2Ra1DOTZfZ%2BDXtR7lPX87aB000MD5eDI9bxzepoSxzb19b5dt761gbcleBQ1dyarfVR4aX9PGp6H0LHbznrSMw6z%2FsHnEiNZUzgf%2F6eTT%2BIvEQW3fIdj%2FJd3yHgsNlxdXisHStR43WLgwq9KxoI7pzcluty3utTPhyT7vA2UfqlK9LmEVK%2Bvp9ANsjrdL1hmq4xuX4tLCvRql%2FHUoMvR7xaAow6TtBzcyqMrJjvhjQc4PakH%2B6HMS0iH3ljK16CK7WPtk9Z08zxQ%2BzbBjFntcK7TxuoDEkikKqLOWkvYR7Bd8acZ8BSRXJmvDR0XJUHNy%2BJMP%2BIv8IGOqUBDAma9Tsy3PkkrLPlG8YcKjI890jVedN9MlWplktslkBulQb3pn3d1r6tyJFEBhVNs2flXEbL2Bp4Qc3sSEeaYIf43IR2IMGYZz3xBVc6PiBaTH2wWo742MTmqfb%2FA0Bjz5tpQZbAtXO168lwapXfw%2BNM9hLUfkUAWu616FiKFJD%2B3AXuu%2B%2FPp1whKEhaByI8LpMgjrVfvVohW5tN6ZW2ciykSTII&X-Amz-Signature=51526345f8cfc4ff013d390ddfb039a26559c6e686ff21dfb5caa6f65ef9fbf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFG7XIGX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIB7IxNpXVt0VNDyjnn0A%2F1MlOU8EpHkbbFLH%2BPWkk%2BUVAiEAjElNJ9y2EfankWxWow0yJqzlLIs4r6iEys3%2FA6ENLo0q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDPki6KiIJ8UnogK9xCrcA1IZ6RE6%2Fa2PZoU37FQ1spSWDtju%2FZWXSWzfAtkKm4l6D%2B%2BD2Ds2MRFrqixO1t9dj%2Bhb1JqJKEyXlE1880kOjpQ0TDrGyLzZ9MLZgXkV9jRHFtwFL%2F3175ibvexASOY6c8eOd34n9s3f%2FGau3VVYzxd%2FBpElU2kLS%2FQOMWUn%2FmDrtkbxCSkWEiIZi8qYpHRihyOlVk7SSRmETTdOaTAeaQgqVM39oP3IDdJb64B8QyTDMSdpH7m6LymXmwIn%2FmKm1coE2du2wGBGOzTavtJ1ZAngQD%2BiRfqGUvkno3WZr2FwPx30n9rOmEo9a2Ra1DOTZfZ%2BDXtR7lPX87aB000MD5eDI9bxzepoSxzb19b5dt761gbcleBQ1dyarfVR4aX9PGp6H0LHbznrSMw6z%2FsHnEiNZUzgf%2F6eTT%2BIvEQW3fIdj%2FJd3yHgsNlxdXisHStR43WLgwq9KxoI7pzcluty3utTPhyT7vA2UfqlK9LmEVK%2Bvp9ANsjrdL1hmq4xuX4tLCvRql%2FHUoMvR7xaAow6TtBzcyqMrJjvhjQc4PakH%2B6HMS0iH3ljK16CK7WPtk9Z08zxQ%2BzbBjFntcK7TxuoDEkikKqLOWkvYR7Bd8acZ8BSRXJmvDR0XJUHNy%2BJMP%2BIv8IGOqUBDAma9Tsy3PkkrLPlG8YcKjI890jVedN9MlWplktslkBulQb3pn3d1r6tyJFEBhVNs2flXEbL2Bp4Qc3sSEeaYIf43IR2IMGYZz3xBVc6PiBaTH2wWo742MTmqfb%2FA0Bjz5tpQZbAtXO168lwapXfw%2BNM9hLUfkUAWu616FiKFJD%2B3AXuu%2B%2FPp1whKEhaByI8LpMgjrVfvVohW5tN6ZW2ciykSTII&X-Amz-Signature=03e286948ae05f7bf9ada585de547fdf652aa029374fd482fd3e5de8c076144f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
