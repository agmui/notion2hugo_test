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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P3TKI2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDbVI1FExqHazYRDj2Yu3QxFaVYRITg84y04Ef7xnkzsAiEAwWO2tiE83jUPK3LGgxc4td42vWfsPJQoILl5vyB8WLEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwI%2FnDlo%2BPaAVSc6yrcA%2BzuGkcalXkg3XyO%2FvoVS9ZSHO7TpuC2NtXi17aCUTPCFgowFSTGzT6PqtV029UTBe9%2BNSqw8iGSEZMMkmTWd91SH6tr6sBADKJBuiH20anr689EfILHGHeRin3Y2RSO0gfYN675SKBSYgW0RcotKcppL0W8BBdVJ2fJGsdxo9dCCLMcIJ978ynjrZSqa%2FhOZaDXvdEjyUGeEIUE%2FiRupdHl4ZWEca3hKSv0gc5fp9d1bqr0jj%2Fh9fr1R2V1QtuosG0EzlwH7eWV8gWn%2Fgsngwcqr4DnXPK0u8C686d2gEkxtWbvcxSNYCpjtxViliGd7oD2eor6f%2BpCzYhtHu7JQ8i30Jy7wZr1CmzKO0ZhKYDOGGeAmPD5JRNaGNdtRUDY7R5lKMDd5hpAYdbmi2T089l%2F5mDAy0nLcfVqWbuhVMI1I1MlZqvaiiBWUgtbrjrgdavTRINJgl5EImEWs2tk6s0GYW2xtJ5wQOudt49UFTQP5Sjz9szIep3YWD9Dd95u5CeAK8mt7n0ZkAyQJGVAQ1VyQkzhTYTPK0XQgxhsvupzsJQSPJb56dxDzCA0S3sCp7bp1gtNiTi84C6VwpC9M3U1hdD3KLQMmZi4c1psiX1eST%2BcMgX1X0WGPulDMPu6hMEGOqUBMiA7vKVr4%2FlAYA%2Fl%2FdzXzTXDDR3bfs%2Fc%2B%2Bf8bUsnjZZmNpfPq6aQ560bWc5PXa8bK9SQWPJpyZQAwAfflccJNFq9qxQADNySyy5HP%2BIeF7hMOZ1nkvxyk1%2F5VRwBgflU2xQE7SYDF8QwmEFOSMrgl7Q7Fs1n7v1lNa4l1ohmaNxzvA%2FRxoJXwKKMXHFaVXZImmOmyFgUDdoaY25UdUEhRW0lF6q3&X-Amz-Signature=bde5aab08ef32c1cb7a1366a668b935e352191050283caa7402c653fc92059b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P3TKI2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDbVI1FExqHazYRDj2Yu3QxFaVYRITg84y04Ef7xnkzsAiEAwWO2tiE83jUPK3LGgxc4td42vWfsPJQoILl5vyB8WLEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwI%2FnDlo%2BPaAVSc6yrcA%2BzuGkcalXkg3XyO%2FvoVS9ZSHO7TpuC2NtXi17aCUTPCFgowFSTGzT6PqtV029UTBe9%2BNSqw8iGSEZMMkmTWd91SH6tr6sBADKJBuiH20anr689EfILHGHeRin3Y2RSO0gfYN675SKBSYgW0RcotKcppL0W8BBdVJ2fJGsdxo9dCCLMcIJ978ynjrZSqa%2FhOZaDXvdEjyUGeEIUE%2FiRupdHl4ZWEca3hKSv0gc5fp9d1bqr0jj%2Fh9fr1R2V1QtuosG0EzlwH7eWV8gWn%2Fgsngwcqr4DnXPK0u8C686d2gEkxtWbvcxSNYCpjtxViliGd7oD2eor6f%2BpCzYhtHu7JQ8i30Jy7wZr1CmzKO0ZhKYDOGGeAmPD5JRNaGNdtRUDY7R5lKMDd5hpAYdbmi2T089l%2F5mDAy0nLcfVqWbuhVMI1I1MlZqvaiiBWUgtbrjrgdavTRINJgl5EImEWs2tk6s0GYW2xtJ5wQOudt49UFTQP5Sjz9szIep3YWD9Dd95u5CeAK8mt7n0ZkAyQJGVAQ1VyQkzhTYTPK0XQgxhsvupzsJQSPJb56dxDzCA0S3sCp7bp1gtNiTi84C6VwpC9M3U1hdD3KLQMmZi4c1psiX1eST%2BcMgX1X0WGPulDMPu6hMEGOqUBMiA7vKVr4%2FlAYA%2Fl%2FdzXzTXDDR3bfs%2Fc%2B%2Bf8bUsnjZZmNpfPq6aQ560bWc5PXa8bK9SQWPJpyZQAwAfflccJNFq9qxQADNySyy5HP%2BIeF7hMOZ1nkvxyk1%2F5VRwBgflU2xQE7SYDF8QwmEFOSMrgl7Q7Fs1n7v1lNa4l1ohmaNxzvA%2FRxoJXwKKMXHFaVXZImmOmyFgUDdoaY25UdUEhRW0lF6q3&X-Amz-Signature=9df9113bc23eb180529895cc95a537d76518eee0b2e9aa54cb9f6194b5048a67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3P3TKI2%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIDbVI1FExqHazYRDj2Yu3QxFaVYRITg84y04Ef7xnkzsAiEAwWO2tiE83jUPK3LGgxc4td42vWfsPJQoILl5vyB8WLEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwI%2FnDlo%2BPaAVSc6yrcA%2BzuGkcalXkg3XyO%2FvoVS9ZSHO7TpuC2NtXi17aCUTPCFgowFSTGzT6PqtV029UTBe9%2BNSqw8iGSEZMMkmTWd91SH6tr6sBADKJBuiH20anr689EfILHGHeRin3Y2RSO0gfYN675SKBSYgW0RcotKcppL0W8BBdVJ2fJGsdxo9dCCLMcIJ978ynjrZSqa%2FhOZaDXvdEjyUGeEIUE%2FiRupdHl4ZWEca3hKSv0gc5fp9d1bqr0jj%2Fh9fr1R2V1QtuosG0EzlwH7eWV8gWn%2Fgsngwcqr4DnXPK0u8C686d2gEkxtWbvcxSNYCpjtxViliGd7oD2eor6f%2BpCzYhtHu7JQ8i30Jy7wZr1CmzKO0ZhKYDOGGeAmPD5JRNaGNdtRUDY7R5lKMDd5hpAYdbmi2T089l%2F5mDAy0nLcfVqWbuhVMI1I1MlZqvaiiBWUgtbrjrgdavTRINJgl5EImEWs2tk6s0GYW2xtJ5wQOudt49UFTQP5Sjz9szIep3YWD9Dd95u5CeAK8mt7n0ZkAyQJGVAQ1VyQkzhTYTPK0XQgxhsvupzsJQSPJb56dxDzCA0S3sCp7bp1gtNiTi84C6VwpC9M3U1hdD3KLQMmZi4c1psiX1eST%2BcMgX1X0WGPulDMPu6hMEGOqUBMiA7vKVr4%2FlAYA%2Fl%2FdzXzTXDDR3bfs%2Fc%2B%2Bf8bUsnjZZmNpfPq6aQ560bWc5PXa8bK9SQWPJpyZQAwAfflccJNFq9qxQADNySyy5HP%2BIeF7hMOZ1nkvxyk1%2F5VRwBgflU2xQE7SYDF8QwmEFOSMrgl7Q7Fs1n7v1lNa4l1ohmaNxzvA%2FRxoJXwKKMXHFaVXZImmOmyFgUDdoaY25UdUEhRW0lF6q3&X-Amz-Signature=8529246d12540231269edf922c54fb941e2264f64d03bc59f1fa87b6515856cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
