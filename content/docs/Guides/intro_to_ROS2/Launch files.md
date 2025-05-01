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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMHHNX4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHBZe5gBgT%2BwZudp7%2BqafmHm2ktRfu1bgeOPx4bWeLdNAiBkllWoxf2jI%2FagPQfLT0LHv8dqLL8zNi7JQb3sQghNsCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYUHEfPbTyGf3j%2BuKtwDn6HRxKNObAp8fVUJDLlFVGsuYNenzSpDCt41i6REUgNBBs0jGayh8XP7XOVrIP6Z3bYgWjeMjERegj4ty0I6XQZFQyDb6v%2BmtE6furNQCGD4buwM7kzv64GeMEbyDBj0ruqeNeFscr7rtXMod7%2BcBGthZ%2Bzn6AohAUqdlD0b0TOUGaLK71Pl%2F0DgaRHel1WXlOIR%2Fg10RMuNVJaGJdQGUgFGWXYUcdD4%2BO1ajNZTOTM9Wv87JJcYDkQqlKUiyAf7RC9XyX8tLWsR9Z9tsxGaQbWIsJfNvr22b1tJqGdbYZ3RNXaAAHIpZKZ%2BHhxDitN0f8gw5A%2BsjHDPCLLAkPolf9EmrE0J9iAekCQL5e2cgOkRhu6hZDfjZvzfQcHxNYFZr4KtfT6h6xChXi6FDIV9iHt4671Cv1BSRoQBsmJP0QQ1gfJ6G0Oo53KzMP4zXOQ1OjCSqHdIh3zcStNekrVg1hj%2FMoZWGQvr9sVm%2FoazaEUvHL8wX7n5voWsZeJHOf64sSY8EIIQVtHCc7bVmyfHW7Jq4LWCui2gpvrdalu31bguk%2FhLhXpw%2B%2Fd8iJDjypeU0U3pbg%2Fb0D9bWeIeQwzPHcfoCayr4tUfH6W7PCkGa8A8Odt2bB0r2DgwVwMw8unMwAY6pgGBf4e1Uam4zgLBa9m2toCyRKjGRwMtSkOWW4Wzs1G%2Bt22RGMUniIIfSbS5J2Q6P2eerE4FRRf4Xh%2FHOF8gThGYRQYZ8aCCUPHCDU9VydwZOvaPqqSe4rkAKJO%2Fo3cqvTij2rYaQNMakRSSrjzi%2F9L8y9xHUT%2B3KDyCle5okIn2CuwiwbChKXZ1JrDOg3qwm4vkJyzphj%2BTdDX%2F8eC%2FQo2tMKEOPjrd&X-Amz-Signature=bf544c2c842fbe621e87f476894596c1db7dd9e8ce92eadcd0eb9f5b788766b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMHHNX4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHBZe5gBgT%2BwZudp7%2BqafmHm2ktRfu1bgeOPx4bWeLdNAiBkllWoxf2jI%2FagPQfLT0LHv8dqLL8zNi7JQb3sQghNsCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYUHEfPbTyGf3j%2BuKtwDn6HRxKNObAp8fVUJDLlFVGsuYNenzSpDCt41i6REUgNBBs0jGayh8XP7XOVrIP6Z3bYgWjeMjERegj4ty0I6XQZFQyDb6v%2BmtE6furNQCGD4buwM7kzv64GeMEbyDBj0ruqeNeFscr7rtXMod7%2BcBGthZ%2Bzn6AohAUqdlD0b0TOUGaLK71Pl%2F0DgaRHel1WXlOIR%2Fg10RMuNVJaGJdQGUgFGWXYUcdD4%2BO1ajNZTOTM9Wv87JJcYDkQqlKUiyAf7RC9XyX8tLWsR9Z9tsxGaQbWIsJfNvr22b1tJqGdbYZ3RNXaAAHIpZKZ%2BHhxDitN0f8gw5A%2BsjHDPCLLAkPolf9EmrE0J9iAekCQL5e2cgOkRhu6hZDfjZvzfQcHxNYFZr4KtfT6h6xChXi6FDIV9iHt4671Cv1BSRoQBsmJP0QQ1gfJ6G0Oo53KzMP4zXOQ1OjCSqHdIh3zcStNekrVg1hj%2FMoZWGQvr9sVm%2FoazaEUvHL8wX7n5voWsZeJHOf64sSY8EIIQVtHCc7bVmyfHW7Jq4LWCui2gpvrdalu31bguk%2FhLhXpw%2B%2Fd8iJDjypeU0U3pbg%2Fb0D9bWeIeQwzPHcfoCayr4tUfH6W7PCkGa8A8Odt2bB0r2DgwVwMw8unMwAY6pgGBf4e1Uam4zgLBa9m2toCyRKjGRwMtSkOWW4Wzs1G%2Bt22RGMUniIIfSbS5J2Q6P2eerE4FRRf4Xh%2FHOF8gThGYRQYZ8aCCUPHCDU9VydwZOvaPqqSe4rkAKJO%2Fo3cqvTij2rYaQNMakRSSrjzi%2F9L8y9xHUT%2B3KDyCle5okIn2CuwiwbChKXZ1JrDOg3qwm4vkJyzphj%2BTdDX%2F8eC%2FQo2tMKEOPjrd&X-Amz-Signature=ddefd7e19fcc4d87ddb33d658377f3d89e5da88fbe14535402224278e9975fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMHHNX4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHBZe5gBgT%2BwZudp7%2BqafmHm2ktRfu1bgeOPx4bWeLdNAiBkllWoxf2jI%2FagPQfLT0LHv8dqLL8zNi7JQb3sQghNsCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGYUHEfPbTyGf3j%2BuKtwDn6HRxKNObAp8fVUJDLlFVGsuYNenzSpDCt41i6REUgNBBs0jGayh8XP7XOVrIP6Z3bYgWjeMjERegj4ty0I6XQZFQyDb6v%2BmtE6furNQCGD4buwM7kzv64GeMEbyDBj0ruqeNeFscr7rtXMod7%2BcBGthZ%2Bzn6AohAUqdlD0b0TOUGaLK71Pl%2F0DgaRHel1WXlOIR%2Fg10RMuNVJaGJdQGUgFGWXYUcdD4%2BO1ajNZTOTM9Wv87JJcYDkQqlKUiyAf7RC9XyX8tLWsR9Z9tsxGaQbWIsJfNvr22b1tJqGdbYZ3RNXaAAHIpZKZ%2BHhxDitN0f8gw5A%2BsjHDPCLLAkPolf9EmrE0J9iAekCQL5e2cgOkRhu6hZDfjZvzfQcHxNYFZr4KtfT6h6xChXi6FDIV9iHt4671Cv1BSRoQBsmJP0QQ1gfJ6G0Oo53KzMP4zXOQ1OjCSqHdIh3zcStNekrVg1hj%2FMoZWGQvr9sVm%2FoazaEUvHL8wX7n5voWsZeJHOf64sSY8EIIQVtHCc7bVmyfHW7Jq4LWCui2gpvrdalu31bguk%2FhLhXpw%2B%2Fd8iJDjypeU0U3pbg%2Fb0D9bWeIeQwzPHcfoCayr4tUfH6W7PCkGa8A8Odt2bB0r2DgwVwMw8unMwAY6pgGBf4e1Uam4zgLBa9m2toCyRKjGRwMtSkOWW4Wzs1G%2Bt22RGMUniIIfSbS5J2Q6P2eerE4FRRf4Xh%2FHOF8gThGYRQYZ8aCCUPHCDU9VydwZOvaPqqSe4rkAKJO%2Fo3cqvTij2rYaQNMakRSSrjzi%2F9L8y9xHUT%2B3KDyCle5okIn2CuwiwbChKXZ1JrDOg3qwm4vkJyzphj%2BTdDX%2F8eC%2FQo2tMKEOPjrd&X-Amz-Signature=1cb3c8e9f4493b5f5ab7d8870a1fcd8062ec10eef24261fe1feec6b0688a6ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
