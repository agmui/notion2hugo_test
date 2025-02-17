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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUBOKE6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICsnczhDRYobHn7AgImudEkzA3xrV6GJ0QgfNGGgrVOCAiAvShuPsR7uBfxJqFw74sNhbjPD%2FEU5Yzf7PEulAl3ktSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMZx5%2BQnfPG%2BigA5GjKtwDuA%2FlqZelPuqHaJK%2FuVwG0vsRDPJdCszOjntwiWju6vmM4h5FkK8VZnZPaFcNj4y5E19b6x08d5l7%2BrYmGdCbDGYyn7BL7aWay4ELmD2NDCCG2%2B9A5uTQb1UjHyUnxNJ1urM2un5bVvT79MgfJ2%2BjYs6ZaUwoHAKfIv2S6q7ebyWHZIJ6MtVmJ7KztOInvHwiRUBJYNdWujPFssljyzJxR1KGcuIRlLECnJ5EeeWcZNFd6UxaGBH3n69gcgupCiC1y51dtZqLt2Ia%2F4Gh6EpakEGWIrXjsW35Gz%2FLaJ2SJOHCvI27y9s8DbvsNJQ1ZgNcbSuyEUInUJWGpwQ0mSI822K7%2BnKJ9urPvZtR4wtsJGZD9wjGEBq82mj2UPBVaXbJIHX%2FiBSFcPG2ukV37TOdqFqaj3Eobb%2BjcGDDrikm33D1So7feoAmDzZ0F64bcVoYkV8YukhHrFNYNiMf5uWkuRuwI7utdpgkjBrvkuQKF4ZnXbrwlxt1roLvIgpE4TFI2sgOurhpIhdQDRUqoTiARyPNHry%2Fsy1PIvbbKRKuPBHpKyGbSKyeM8DIDIdlINdSLS0J7w46Mjq6ryL%2Ba2Nor91C1BuqcVPq2HTSKwqfRUohnmmRYYNX%2Bgq0Pt4wiNzMvQY6pgFoKYx8r6ILES2E0seLLM2ZX8DAabHgjQJ%2BIBT1q7n8pn199V0se1wgcbzVCH1a5PvbmY%2BVQLK%2BxaaS4nnP51EVeVrw2257KLHWhCn0FxaG6QDVFP08R6jd6jiKyRBYyDW%2BxnxK%2BYTMzvYOi04J%2BkNYk9GAmNGNaptDn5jzViT1v%2FDVr0HwjtFjOiYCQ1Q0HsRwUYnfNNeLCOjRyEKa4ITFxK3cHjn%2B&X-Amz-Signature=606e0cab69a615f8ba867de51b094e0861ae104a5d830d5a5cd21c5e5a9c6493&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUBOKE6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICsnczhDRYobHn7AgImudEkzA3xrV6GJ0QgfNGGgrVOCAiAvShuPsR7uBfxJqFw74sNhbjPD%2FEU5Yzf7PEulAl3ktSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMZx5%2BQnfPG%2BigA5GjKtwDuA%2FlqZelPuqHaJK%2FuVwG0vsRDPJdCszOjntwiWju6vmM4h5FkK8VZnZPaFcNj4y5E19b6x08d5l7%2BrYmGdCbDGYyn7BL7aWay4ELmD2NDCCG2%2B9A5uTQb1UjHyUnxNJ1urM2un5bVvT79MgfJ2%2BjYs6ZaUwoHAKfIv2S6q7ebyWHZIJ6MtVmJ7KztOInvHwiRUBJYNdWujPFssljyzJxR1KGcuIRlLECnJ5EeeWcZNFd6UxaGBH3n69gcgupCiC1y51dtZqLt2Ia%2F4Gh6EpakEGWIrXjsW35Gz%2FLaJ2SJOHCvI27y9s8DbvsNJQ1ZgNcbSuyEUInUJWGpwQ0mSI822K7%2BnKJ9urPvZtR4wtsJGZD9wjGEBq82mj2UPBVaXbJIHX%2FiBSFcPG2ukV37TOdqFqaj3Eobb%2BjcGDDrikm33D1So7feoAmDzZ0F64bcVoYkV8YukhHrFNYNiMf5uWkuRuwI7utdpgkjBrvkuQKF4ZnXbrwlxt1roLvIgpE4TFI2sgOurhpIhdQDRUqoTiARyPNHry%2Fsy1PIvbbKRKuPBHpKyGbSKyeM8DIDIdlINdSLS0J7w46Mjq6ryL%2Ba2Nor91C1BuqcVPq2HTSKwqfRUohnmmRYYNX%2Bgq0Pt4wiNzMvQY6pgFoKYx8r6ILES2E0seLLM2ZX8DAabHgjQJ%2BIBT1q7n8pn199V0se1wgcbzVCH1a5PvbmY%2BVQLK%2BxaaS4nnP51EVeVrw2257KLHWhCn0FxaG6QDVFP08R6jd6jiKyRBYyDW%2BxnxK%2BYTMzvYOi04J%2BkNYk9GAmNGNaptDn5jzViT1v%2FDVr0HwjtFjOiYCQ1Q0HsRwUYnfNNeLCOjRyEKa4ITFxK3cHjn%2B&X-Amz-Signature=71908747c7a36623669ee9fe7192057ac4c32857b4066800b756a7c185b00020&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDUBOKE6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T131639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCICsnczhDRYobHn7AgImudEkzA3xrV6GJ0QgfNGGgrVOCAiAvShuPsR7uBfxJqFw74sNhbjPD%2FEU5Yzf7PEulAl3ktSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMZx5%2BQnfPG%2BigA5GjKtwDuA%2FlqZelPuqHaJK%2FuVwG0vsRDPJdCszOjntwiWju6vmM4h5FkK8VZnZPaFcNj4y5E19b6x08d5l7%2BrYmGdCbDGYyn7BL7aWay4ELmD2NDCCG2%2B9A5uTQb1UjHyUnxNJ1urM2un5bVvT79MgfJ2%2BjYs6ZaUwoHAKfIv2S6q7ebyWHZIJ6MtVmJ7KztOInvHwiRUBJYNdWujPFssljyzJxR1KGcuIRlLECnJ5EeeWcZNFd6UxaGBH3n69gcgupCiC1y51dtZqLt2Ia%2F4Gh6EpakEGWIrXjsW35Gz%2FLaJ2SJOHCvI27y9s8DbvsNJQ1ZgNcbSuyEUInUJWGpwQ0mSI822K7%2BnKJ9urPvZtR4wtsJGZD9wjGEBq82mj2UPBVaXbJIHX%2FiBSFcPG2ukV37TOdqFqaj3Eobb%2BjcGDDrikm33D1So7feoAmDzZ0F64bcVoYkV8YukhHrFNYNiMf5uWkuRuwI7utdpgkjBrvkuQKF4ZnXbrwlxt1roLvIgpE4TFI2sgOurhpIhdQDRUqoTiARyPNHry%2Fsy1PIvbbKRKuPBHpKyGbSKyeM8DIDIdlINdSLS0J7w46Mjq6ryL%2Ba2Nor91C1BuqcVPq2HTSKwqfRUohnmmRYYNX%2Bgq0Pt4wiNzMvQY6pgFoKYx8r6ILES2E0seLLM2ZX8DAabHgjQJ%2BIBT1q7n8pn199V0se1wgcbzVCH1a5PvbmY%2BVQLK%2BxaaS4nnP51EVeVrw2257KLHWhCn0FxaG6QDVFP08R6jd6jiKyRBYyDW%2BxnxK%2BYTMzvYOi04J%2BkNYk9GAmNGNaptDn5jzViT1v%2FDVr0HwjtFjOiYCQ1Q0HsRwUYnfNNeLCOjRyEKa4ITFxK3cHjn%2B&X-Amz-Signature=220e3e00037949255ca8043c4f08d56a8233103656bc4d714094bf49f7b70ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
