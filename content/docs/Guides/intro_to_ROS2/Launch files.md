---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQW37ZJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFiGoDrnZNC%2FJUR5pKsEkwUnY9Deh4Ww8625Y2ZvJNuQAiAIoSEiGpl4wA%2FZ%2FALBLP6Yf%2FQ9UBES1PD%2BpWs8PQeaKSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLaSkSBnRv3wwNo5TKtwDJOjF%2FwCIYtUPeESFLTMoa%2Bkb%2Fb91W%2BLOV%2BJ4cNp3dQaZJXrRAkLjLhZk7SgfI8nZKUu9DiOz2WeMM7esLA3pictDCWiWTz9CSYyUg%2BphN4CerKkl5OruthQPrnnRhs2O5pUo4lIozuR3dIea952gv%2Bhyf4uvr6FH5a%2F2LIe18jeggSICtVK%2FK7qLsAL5a87X5HyiFdXeHWZFl80nL2US7VuWwnvs0z8BN8vRJRrUMpjSlPSaGsgLq924vkT7dVzlUMmq7gf5ve9277IJjoCUp8uWVhgN%2FFX8%2BkBHfiFES3IhJ343lKHabDBFbW%2BJpXSQT5HhjmSBC1ZLLczAH6seNCtJsu2U8yvPiSCwvymxPvEePtrg3Xc0OFqLAiKsuMQ%2FIxpej%2B6lhF77gTxYBmWMH7uz6WBzor9qstCQEsfb7%2F19cIYE8dNzh6pHeYo9KNVoVKBO%2BjAmOG1nSJP2Ee1BXMNkihNYQRKf3MKy23aGYpzMePwnVCg5TMdLdSO2VjzQ0JClDHJvztHZr9W3CrXKe4mcwwYW4sl79suy0%2BIHAlxMVPZllj3%2F19hCa1Vx5m2qdjyHmPi6Mb5YkY%2B4LRmpyVxtOwKbpzk3oGWlNpBWoXxk6G9AOv1squgLYT4wwbShxAY6pgHG3HdQJDdaPRzxtXWAs03pxqoC8nqsSuU9ispcNs7WybRANwX%2F8TqKD5qc2Qz%2FsyJpPGQfRKM9n%2FYV%2BY%2B%2Frf1Qo4%2BF4SyNnSBv2jtzsK%2ByjaK9saEnIJcHaXmfy%2Bn30UDVJgKdkynJBZavsdSaf1VIuFmo%2FaxpHLRSHj8tcA0R9owiGVj%2Fzmfv7PdN0pcALoX4v5DWKGXgykDWTzsu%2BgtKrxxZINvt&X-Amz-Signature=621df0800f80ebaf3d1b406afac4668f8de5bc6428a4d9157e070ca147189add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQW37ZJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFiGoDrnZNC%2FJUR5pKsEkwUnY9Deh4Ww8625Y2ZvJNuQAiAIoSEiGpl4wA%2FZ%2FALBLP6Yf%2FQ9UBES1PD%2BpWs8PQeaKSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLaSkSBnRv3wwNo5TKtwDJOjF%2FwCIYtUPeESFLTMoa%2Bkb%2Fb91W%2BLOV%2BJ4cNp3dQaZJXrRAkLjLhZk7SgfI8nZKUu9DiOz2WeMM7esLA3pictDCWiWTz9CSYyUg%2BphN4CerKkl5OruthQPrnnRhs2O5pUo4lIozuR3dIea952gv%2Bhyf4uvr6FH5a%2F2LIe18jeggSICtVK%2FK7qLsAL5a87X5HyiFdXeHWZFl80nL2US7VuWwnvs0z8BN8vRJRrUMpjSlPSaGsgLq924vkT7dVzlUMmq7gf5ve9277IJjoCUp8uWVhgN%2FFX8%2BkBHfiFES3IhJ343lKHabDBFbW%2BJpXSQT5HhjmSBC1ZLLczAH6seNCtJsu2U8yvPiSCwvymxPvEePtrg3Xc0OFqLAiKsuMQ%2FIxpej%2B6lhF77gTxYBmWMH7uz6WBzor9qstCQEsfb7%2F19cIYE8dNzh6pHeYo9KNVoVKBO%2BjAmOG1nSJP2Ee1BXMNkihNYQRKf3MKy23aGYpzMePwnVCg5TMdLdSO2VjzQ0JClDHJvztHZr9W3CrXKe4mcwwYW4sl79suy0%2BIHAlxMVPZllj3%2F19hCa1Vx5m2qdjyHmPi6Mb5YkY%2B4LRmpyVxtOwKbpzk3oGWlNpBWoXxk6G9AOv1squgLYT4wwbShxAY6pgHG3HdQJDdaPRzxtXWAs03pxqoC8nqsSuU9ispcNs7WybRANwX%2F8TqKD5qc2Qz%2FsyJpPGQfRKM9n%2FYV%2BY%2B%2Frf1Qo4%2BF4SyNnSBv2jtzsK%2ByjaK9saEnIJcHaXmfy%2Bn30UDVJgKdkynJBZavsdSaf1VIuFmo%2FaxpHLRSHj8tcA0R9owiGVj%2Fzmfv7PdN0pcALoX4v5DWKGXgykDWTzsu%2BgtKrxxZINvt&X-Amz-Signature=f8dd3faabb0dd58bab71de7b380cb19cd0aa9173842373a2ce561bd25bdd2e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSQW37ZJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIFiGoDrnZNC%2FJUR5pKsEkwUnY9Deh4Ww8625Y2ZvJNuQAiAIoSEiGpl4wA%2FZ%2FALBLP6Yf%2FQ9UBES1PD%2BpWs8PQeaKSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLaSkSBnRv3wwNo5TKtwDJOjF%2FwCIYtUPeESFLTMoa%2Bkb%2Fb91W%2BLOV%2BJ4cNp3dQaZJXrRAkLjLhZk7SgfI8nZKUu9DiOz2WeMM7esLA3pictDCWiWTz9CSYyUg%2BphN4CerKkl5OruthQPrnnRhs2O5pUo4lIozuR3dIea952gv%2Bhyf4uvr6FH5a%2F2LIe18jeggSICtVK%2FK7qLsAL5a87X5HyiFdXeHWZFl80nL2US7VuWwnvs0z8BN8vRJRrUMpjSlPSaGsgLq924vkT7dVzlUMmq7gf5ve9277IJjoCUp8uWVhgN%2FFX8%2BkBHfiFES3IhJ343lKHabDBFbW%2BJpXSQT5HhjmSBC1ZLLczAH6seNCtJsu2U8yvPiSCwvymxPvEePtrg3Xc0OFqLAiKsuMQ%2FIxpej%2B6lhF77gTxYBmWMH7uz6WBzor9qstCQEsfb7%2F19cIYE8dNzh6pHeYo9KNVoVKBO%2BjAmOG1nSJP2Ee1BXMNkihNYQRKf3MKy23aGYpzMePwnVCg5TMdLdSO2VjzQ0JClDHJvztHZr9W3CrXKe4mcwwYW4sl79suy0%2BIHAlxMVPZllj3%2F19hCa1Vx5m2qdjyHmPi6Mb5YkY%2B4LRmpyVxtOwKbpzk3oGWlNpBWoXxk6G9AOv1squgLYT4wwbShxAY6pgHG3HdQJDdaPRzxtXWAs03pxqoC8nqsSuU9ispcNs7WybRANwX%2F8TqKD5qc2Qz%2FsyJpPGQfRKM9n%2FYV%2BY%2B%2Frf1Qo4%2BF4SyNnSBv2jtzsK%2ByjaK9saEnIJcHaXmfy%2Bn30UDVJgKdkynJBZavsdSaf1VIuFmo%2FaxpHLRSHj8tcA0R9owiGVj%2Fzmfv7PdN0pcALoX4v5DWKGXgykDWTzsu%2BgtKrxxZINvt&X-Amz-Signature=c62fe6af65afac33ad1afe1e9277f2817cdae530521b6b8f39a863920b1a848d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
