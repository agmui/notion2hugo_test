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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCPBKM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGc3Pe6bkiAFWGZ23wiuqFnb6s3mpcM59pKFHCWNy4jTAiBubcm2B9fo67xFTo1KBJIYdbYLLDLVAKinXrtZnA7BgSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMUQntqtO%2BQJlW1qdXKtwD8Fc8%2FN26VZjBNEFQAuzf%2B7udgi9uDaZdWor5f1H0t4ux1S4dLLjdQ1usPeQCK17DaTy0ptA58%2Fp5%2F%2FijvTASm3ft7lFGK8O1%2FkJxhKPgCQ2fY6IFk0uRb%2Fm9dL7UKz1ChHG9JiWZgKQeFVi9CjT5z2VnMNzi6qFIXzrkDLStMuAgcWlWou%2FKbdfuH1uR6vvgovpIDBA1Ao6P3jsh%2BWBWzNZnoFBHCL6SDeZ60CkzKOkvvT4ExK3iRio5%2Fgyxm3DHt1E%2B6jKUFLHkHjixhYTYK6luw6dGGLhEdo6eO%2F3rGHF6TdE25RcowKIKrFOWR0IWe9Nx9SZBsHDjUuKePJMdcA%2BmWpIFaPz%2BiZLZ7WHIoqDpYvhpAzTaaqO0hB6PE4JPDzLYJ7EDnQQu0Jv6X9NtG2l4HGXIAgKJ94fRofBcvk1rEiHuKrdn333ptYvWmdQkSw98Q8wdqWRaALig1sGod4g9vqdb1uZOFfaJWJsOJQkzek12o3aiWclcj0qdsYmyN1pD5KANPoYRLJPROJfsMAvkV7KPcOMAnqEfPeoSVo4CVOJ5k8mpGYKPF2q5%2B4vQlVf3Yuf9cgZzkoNfejk61DCB8gEOxQSWyBIKoOt1evuSfnuTFDndiR02cvwwqemzvgY6pgFVGYiBL7%2BIgT%2Fsou%2FTKd0%2BbzjAKkiYQUo5kTs4%2FKbAfeGGEMxJwqlycO%2FZBGR%2FMHV9gLZycbyVFijLurIdXEaUzQQvVSRU61LtPBbFKhx4vDRoRmCNnXTolg%2FDYtugSPay4gionzsyLGTJ2b45V1DUkN0FRO3ul0FS3wviAzPu8SrtqUuPnyLkO3AILt464oqR3u4IpkJzgdtM25X1%2F6QcdwPmTBt0&X-Amz-Signature=2f673ac76e6a8197578d79fdec31f0671b5b52a9af53a9e9f053906672da4fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCPBKM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGc3Pe6bkiAFWGZ23wiuqFnb6s3mpcM59pKFHCWNy4jTAiBubcm2B9fo67xFTo1KBJIYdbYLLDLVAKinXrtZnA7BgSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMUQntqtO%2BQJlW1qdXKtwD8Fc8%2FN26VZjBNEFQAuzf%2B7udgi9uDaZdWor5f1H0t4ux1S4dLLjdQ1usPeQCK17DaTy0ptA58%2Fp5%2F%2FijvTASm3ft7lFGK8O1%2FkJxhKPgCQ2fY6IFk0uRb%2Fm9dL7UKz1ChHG9JiWZgKQeFVi9CjT5z2VnMNzi6qFIXzrkDLStMuAgcWlWou%2FKbdfuH1uR6vvgovpIDBA1Ao6P3jsh%2BWBWzNZnoFBHCL6SDeZ60CkzKOkvvT4ExK3iRio5%2Fgyxm3DHt1E%2B6jKUFLHkHjixhYTYK6luw6dGGLhEdo6eO%2F3rGHF6TdE25RcowKIKrFOWR0IWe9Nx9SZBsHDjUuKePJMdcA%2BmWpIFaPz%2BiZLZ7WHIoqDpYvhpAzTaaqO0hB6PE4JPDzLYJ7EDnQQu0Jv6X9NtG2l4HGXIAgKJ94fRofBcvk1rEiHuKrdn333ptYvWmdQkSw98Q8wdqWRaALig1sGod4g9vqdb1uZOFfaJWJsOJQkzek12o3aiWclcj0qdsYmyN1pD5KANPoYRLJPROJfsMAvkV7KPcOMAnqEfPeoSVo4CVOJ5k8mpGYKPF2q5%2B4vQlVf3Yuf9cgZzkoNfejk61DCB8gEOxQSWyBIKoOt1evuSfnuTFDndiR02cvwwqemzvgY6pgFVGYiBL7%2BIgT%2Fsou%2FTKd0%2BbzjAKkiYQUo5kTs4%2FKbAfeGGEMxJwqlycO%2FZBGR%2FMHV9gLZycbyVFijLurIdXEaUzQQvVSRU61LtPBbFKhx4vDRoRmCNnXTolg%2FDYtugSPay4gionzsyLGTJ2b45V1DUkN0FRO3ul0FS3wviAzPu8SrtqUuPnyLkO3AILt464oqR3u4IpkJzgdtM25X1%2F6QcdwPmTBt0&X-Amz-Signature=9978994754ddfa326a010cae9a4777738f72075cdbcf85627183406acceece3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GCPBKM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGc3Pe6bkiAFWGZ23wiuqFnb6s3mpcM59pKFHCWNy4jTAiBubcm2B9fo67xFTo1KBJIYdbYLLDLVAKinXrtZnA7BgSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMUQntqtO%2BQJlW1qdXKtwD8Fc8%2FN26VZjBNEFQAuzf%2B7udgi9uDaZdWor5f1H0t4ux1S4dLLjdQ1usPeQCK17DaTy0ptA58%2Fp5%2F%2FijvTASm3ft7lFGK8O1%2FkJxhKPgCQ2fY6IFk0uRb%2Fm9dL7UKz1ChHG9JiWZgKQeFVi9CjT5z2VnMNzi6qFIXzrkDLStMuAgcWlWou%2FKbdfuH1uR6vvgovpIDBA1Ao6P3jsh%2BWBWzNZnoFBHCL6SDeZ60CkzKOkvvT4ExK3iRio5%2Fgyxm3DHt1E%2B6jKUFLHkHjixhYTYK6luw6dGGLhEdo6eO%2F3rGHF6TdE25RcowKIKrFOWR0IWe9Nx9SZBsHDjUuKePJMdcA%2BmWpIFaPz%2BiZLZ7WHIoqDpYvhpAzTaaqO0hB6PE4JPDzLYJ7EDnQQu0Jv6X9NtG2l4HGXIAgKJ94fRofBcvk1rEiHuKrdn333ptYvWmdQkSw98Q8wdqWRaALig1sGod4g9vqdb1uZOFfaJWJsOJQkzek12o3aiWclcj0qdsYmyN1pD5KANPoYRLJPROJfsMAvkV7KPcOMAnqEfPeoSVo4CVOJ5k8mpGYKPF2q5%2B4vQlVf3Yuf9cgZzkoNfejk61DCB8gEOxQSWyBIKoOt1evuSfnuTFDndiR02cvwwqemzvgY6pgFVGYiBL7%2BIgT%2Fsou%2FTKd0%2BbzjAKkiYQUo5kTs4%2FKbAfeGGEMxJwqlycO%2FZBGR%2FMHV9gLZycbyVFijLurIdXEaUzQQvVSRU61LtPBbFKhx4vDRoRmCNnXTolg%2FDYtugSPay4gionzsyLGTJ2b45V1DUkN0FRO3ul0FS3wviAzPu8SrtqUuPnyLkO3AILt464oqR3u4IpkJzgdtM25X1%2F6QcdwPmTBt0&X-Amz-Signature=beec395ad249a15904a735f50fccc8f16509dcdf26b212dc91c96517e0714f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
