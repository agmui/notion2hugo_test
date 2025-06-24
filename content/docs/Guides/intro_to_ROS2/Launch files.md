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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSDO3LG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBMYm0BEsvD%2BMPYJmzwPZ1Jsaixl%2FimgCslel26KJBHgAiEA3FB%2BFGuXOmGPME%2BEpr1e0BxBrjbIp9EZd9pOeuGPL8kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCbg18WjvUKH3buxuircA1UdFBaKL%2B5%2F63z3c37LJA8JuSidQX7Q4gokoNeiO%2FY%2FjM0SMwJMRie%2FreRP7EAE0hgSyUQdifFt2jVwZ4G0CYoNSWXF6%2BMMm6XkyzzZtW59urpC3qlTalPVrXFSqYBOi1QcooJfBmF4%2BoMmhiclWMDRIaQv4CmkPVoUmBRRrAX5906TvXZyMSP7IRHFQ8xy2LM8j9cHGeS%2BwQYXlGWndQIcZQLSUR5viap4uh4cRZ%2BBCk9i13gy6qRxmlGzxupL45FNWscJuEkJiA1506ZULQlkube%2FAlEOfC5a%2BpT4vCHBBye8bBI4%2BEY7kRmjY841hX8gOhC9GW%2BnUQVZDuxr9WYRepx%2B%2F7av4fsknCB6WMsUrcxkMyHIvr4Oa6Bg6pt3GqwI0IB9s%2F4bilJk1eFpQQuhTDo5GWTN5A7qLgQ7fmkpB3Zvy1J4zmj319UqvnmUUjuphvkxeOhuwXRvF28sonyRDKj0vSolBAprkPonQvaNQhGkSoca%2BVtHxshFXfEfdwfIY7Rwc0is1N5WO7HYkg4RjTi1aEVD6F%2Fr7n7j%2BC7I6bWCfnBBMA7mAd0wyRGYhJKXHBgawZ55FDT5etCKDq7JNiHQF1ZzU8u8R0e4XclxVvA0RdIZbsyn0zBxMNWR68IGOqUBKn2Do9R4U9HiF4JcIR0uHJFWgk9UIifgP%2B4jwYpYVzKQeV%2BntioLKOSAbSVMnyBFrXL8PlmTA6Xq6%2BfCvagNL%2FzapkPKHV8hDoco4JDGUyWM3zNh38Mi4UMRMh0VzYJdgMOA9EOSJgWIDkM%2B2SuklAyXXzo4HPAwRBHXYQ2vrlmcF8FQScLAIQckZOt5vn8GRjlNn1MeQTJvjq%2BxZTokCrWA1AhB&X-Amz-Signature=775b8e4029ebc88603f2cf24811e80978c82ea060f77b2cb818e1eed77888e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSDO3LG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBMYm0BEsvD%2BMPYJmzwPZ1Jsaixl%2FimgCslel26KJBHgAiEA3FB%2BFGuXOmGPME%2BEpr1e0BxBrjbIp9EZd9pOeuGPL8kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCbg18WjvUKH3buxuircA1UdFBaKL%2B5%2F63z3c37LJA8JuSidQX7Q4gokoNeiO%2FY%2FjM0SMwJMRie%2FreRP7EAE0hgSyUQdifFt2jVwZ4G0CYoNSWXF6%2BMMm6XkyzzZtW59urpC3qlTalPVrXFSqYBOi1QcooJfBmF4%2BoMmhiclWMDRIaQv4CmkPVoUmBRRrAX5906TvXZyMSP7IRHFQ8xy2LM8j9cHGeS%2BwQYXlGWndQIcZQLSUR5viap4uh4cRZ%2BBCk9i13gy6qRxmlGzxupL45FNWscJuEkJiA1506ZULQlkube%2FAlEOfC5a%2BpT4vCHBBye8bBI4%2BEY7kRmjY841hX8gOhC9GW%2BnUQVZDuxr9WYRepx%2B%2F7av4fsknCB6WMsUrcxkMyHIvr4Oa6Bg6pt3GqwI0IB9s%2F4bilJk1eFpQQuhTDo5GWTN5A7qLgQ7fmkpB3Zvy1J4zmj319UqvnmUUjuphvkxeOhuwXRvF28sonyRDKj0vSolBAprkPonQvaNQhGkSoca%2BVtHxshFXfEfdwfIY7Rwc0is1N5WO7HYkg4RjTi1aEVD6F%2Fr7n7j%2BC7I6bWCfnBBMA7mAd0wyRGYhJKXHBgawZ55FDT5etCKDq7JNiHQF1ZzU8u8R0e4XclxVvA0RdIZbsyn0zBxMNWR68IGOqUBKn2Do9R4U9HiF4JcIR0uHJFWgk9UIifgP%2B4jwYpYVzKQeV%2BntioLKOSAbSVMnyBFrXL8PlmTA6Xq6%2BfCvagNL%2FzapkPKHV8hDoco4JDGUyWM3zNh38Mi4UMRMh0VzYJdgMOA9EOSJgWIDkM%2B2SuklAyXXzo4HPAwRBHXYQ2vrlmcF8FQScLAIQckZOt5vn8GRjlNn1MeQTJvjq%2BxZTokCrWA1AhB&X-Amz-Signature=d54a81d1f0430e1520087eaf884ace6dc3c0404a1bd53b39fabe7fc8c282db7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSDO3LG%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIBMYm0BEsvD%2BMPYJmzwPZ1Jsaixl%2FimgCslel26KJBHgAiEA3FB%2BFGuXOmGPME%2BEpr1e0BxBrjbIp9EZd9pOeuGPL8kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDCbg18WjvUKH3buxuircA1UdFBaKL%2B5%2F63z3c37LJA8JuSidQX7Q4gokoNeiO%2FY%2FjM0SMwJMRie%2FreRP7EAE0hgSyUQdifFt2jVwZ4G0CYoNSWXF6%2BMMm6XkyzzZtW59urpC3qlTalPVrXFSqYBOi1QcooJfBmF4%2BoMmhiclWMDRIaQv4CmkPVoUmBRRrAX5906TvXZyMSP7IRHFQ8xy2LM8j9cHGeS%2BwQYXlGWndQIcZQLSUR5viap4uh4cRZ%2BBCk9i13gy6qRxmlGzxupL45FNWscJuEkJiA1506ZULQlkube%2FAlEOfC5a%2BpT4vCHBBye8bBI4%2BEY7kRmjY841hX8gOhC9GW%2BnUQVZDuxr9WYRepx%2B%2F7av4fsknCB6WMsUrcxkMyHIvr4Oa6Bg6pt3GqwI0IB9s%2F4bilJk1eFpQQuhTDo5GWTN5A7qLgQ7fmkpB3Zvy1J4zmj319UqvnmUUjuphvkxeOhuwXRvF28sonyRDKj0vSolBAprkPonQvaNQhGkSoca%2BVtHxshFXfEfdwfIY7Rwc0is1N5WO7HYkg4RjTi1aEVD6F%2Fr7n7j%2BC7I6bWCfnBBMA7mAd0wyRGYhJKXHBgawZ55FDT5etCKDq7JNiHQF1ZzU8u8R0e4XclxVvA0RdIZbsyn0zBxMNWR68IGOqUBKn2Do9R4U9HiF4JcIR0uHJFWgk9UIifgP%2B4jwYpYVzKQeV%2BntioLKOSAbSVMnyBFrXL8PlmTA6Xq6%2BfCvagNL%2FzapkPKHV8hDoco4JDGUyWM3zNh38Mi4UMRMh0VzYJdgMOA9EOSJgWIDkM%2B2SuklAyXXzo4HPAwRBHXYQ2vrlmcF8FQScLAIQckZOt5vn8GRjlNn1MeQTJvjq%2BxZTokCrWA1AhB&X-Amz-Signature=1a9150a098100740ed4a41044ee19aad55d3d7b6e8c9121fc062ef9dee0e3443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
