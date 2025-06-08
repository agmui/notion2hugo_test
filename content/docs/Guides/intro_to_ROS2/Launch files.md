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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSWCG6J%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBByoly%2FQMOh39Oz6Wul%2Bn96B88BUTuTFy4zaR2VyEA%2FAiEAmpTozI2c6ns%2BDTDnfLedyQQ%2BSFbltAT6PQtkyDPj3zYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeeDTkNGofjreFzryrcA1UhIgYzMo04t3EXcYCNwyKURtAtjaFLuU0QynyAQxn6cNFWruSEu8ohPBdjF3230ySNkgqJa5cyT74qppdRKKQZnyJsDPATLacMJarqkJ33zYEAFdGfNhAU9NyETV0Fi5jeEoq%2F2wz1%2FPq%2FFU0kxjsHgs2%2Bo3vg1caiTU%2Bup6I3HuYiOd3y4WuYr1BfWLOunYsTMCU%2Bv3URlMLyNq3VCkfqO0otUSTpep0Z5nQSb81yeGM8MFivcO94UepH9Zlga2S%2FVklVr60W%2Ffc0tuWszT4jys6eIckDBg6OaGRLwxK7lJeFXwGMkjRdCsuIZO97Z7fWBnywKH8zBPdyveHHPWmTIF96mKQ%2B7c%2BrpxMSQpiAV9GdtwzDKW211l9QstfBVDJnUzWB9viKH9GtycweBg8VpQe76638%2FA2gnfL3J6mN8Rv1yAt4I4euTliV61rGmDPu7vfn3qLrYlnkNc314B6Z5j4FjErnVaJaexSxhtGJ4rV3vYmAGNhYbavJT9lleNoBUQm4%2FxKT23muUJpQpgV%2FeBadHyQDW9ZdPPALQxBvT1FsjuD71yk5RX2DnD1cT5BnoEmFa1GAzjgkSNOZuH89%2B8KlLbgvhf8g%2BHHtPcqTyxYkROV4bisIBZ0LMKjil8IGOqUBBQNzYxtoQci0BX1gdFLbTVPJXKtwHHoiKFEFKLyrJZobeYEEYeD6jeLBo8DRWynvi4ff0IIwDJC3LzUugDJQn6LU4nQhdu4EyoCkak1sDopVcpX%2F0f3E9BOEbPJIV5pdann2%2FX1DnGbEu7EplHUKF1k76bPSD1aqxgUOXm5hLSZI4X0FNBocq8pLgZu4wmSRwb1i6VE9IpeJurMxYlfEg2MJCCIe&X-Amz-Signature=2714cf5dd4752dcc55ede13bb5a9a87f5e202300a779fce2974f9682ab3e3759&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSWCG6J%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBByoly%2FQMOh39Oz6Wul%2Bn96B88BUTuTFy4zaR2VyEA%2FAiEAmpTozI2c6ns%2BDTDnfLedyQQ%2BSFbltAT6PQtkyDPj3zYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeeDTkNGofjreFzryrcA1UhIgYzMo04t3EXcYCNwyKURtAtjaFLuU0QynyAQxn6cNFWruSEu8ohPBdjF3230ySNkgqJa5cyT74qppdRKKQZnyJsDPATLacMJarqkJ33zYEAFdGfNhAU9NyETV0Fi5jeEoq%2F2wz1%2FPq%2FFU0kxjsHgs2%2Bo3vg1caiTU%2Bup6I3HuYiOd3y4WuYr1BfWLOunYsTMCU%2Bv3URlMLyNq3VCkfqO0otUSTpep0Z5nQSb81yeGM8MFivcO94UepH9Zlga2S%2FVklVr60W%2Ffc0tuWszT4jys6eIckDBg6OaGRLwxK7lJeFXwGMkjRdCsuIZO97Z7fWBnywKH8zBPdyveHHPWmTIF96mKQ%2B7c%2BrpxMSQpiAV9GdtwzDKW211l9QstfBVDJnUzWB9viKH9GtycweBg8VpQe76638%2FA2gnfL3J6mN8Rv1yAt4I4euTliV61rGmDPu7vfn3qLrYlnkNc314B6Z5j4FjErnVaJaexSxhtGJ4rV3vYmAGNhYbavJT9lleNoBUQm4%2FxKT23muUJpQpgV%2FeBadHyQDW9ZdPPALQxBvT1FsjuD71yk5RX2DnD1cT5BnoEmFa1GAzjgkSNOZuH89%2B8KlLbgvhf8g%2BHHtPcqTyxYkROV4bisIBZ0LMKjil8IGOqUBBQNzYxtoQci0BX1gdFLbTVPJXKtwHHoiKFEFKLyrJZobeYEEYeD6jeLBo8DRWynvi4ff0IIwDJC3LzUugDJQn6LU4nQhdu4EyoCkak1sDopVcpX%2F0f3E9BOEbPJIV5pdann2%2FX1DnGbEu7EplHUKF1k76bPSD1aqxgUOXm5hLSZI4X0FNBocq8pLgZu4wmSRwb1i6VE9IpeJurMxYlfEg2MJCCIe&X-Amz-Signature=c1e37ff31f1a6e1199fae42e897bddf3f4fe5efd6f9c8487cbca5f3da4c70d47&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WSWCG6J%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBByoly%2FQMOh39Oz6Wul%2Bn96B88BUTuTFy4zaR2VyEA%2FAiEAmpTozI2c6ns%2BDTDnfLedyQQ%2BSFbltAT6PQtkyDPj3zYqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeeDTkNGofjreFzryrcA1UhIgYzMo04t3EXcYCNwyKURtAtjaFLuU0QynyAQxn6cNFWruSEu8ohPBdjF3230ySNkgqJa5cyT74qppdRKKQZnyJsDPATLacMJarqkJ33zYEAFdGfNhAU9NyETV0Fi5jeEoq%2F2wz1%2FPq%2FFU0kxjsHgs2%2Bo3vg1caiTU%2Bup6I3HuYiOd3y4WuYr1BfWLOunYsTMCU%2Bv3URlMLyNq3VCkfqO0otUSTpep0Z5nQSb81yeGM8MFivcO94UepH9Zlga2S%2FVklVr60W%2Ffc0tuWszT4jys6eIckDBg6OaGRLwxK7lJeFXwGMkjRdCsuIZO97Z7fWBnywKH8zBPdyveHHPWmTIF96mKQ%2B7c%2BrpxMSQpiAV9GdtwzDKW211l9QstfBVDJnUzWB9viKH9GtycweBg8VpQe76638%2FA2gnfL3J6mN8Rv1yAt4I4euTliV61rGmDPu7vfn3qLrYlnkNc314B6Z5j4FjErnVaJaexSxhtGJ4rV3vYmAGNhYbavJT9lleNoBUQm4%2FxKT23muUJpQpgV%2FeBadHyQDW9ZdPPALQxBvT1FsjuD71yk5RX2DnD1cT5BnoEmFa1GAzjgkSNOZuH89%2B8KlLbgvhf8g%2BHHtPcqTyxYkROV4bisIBZ0LMKjil8IGOqUBBQNzYxtoQci0BX1gdFLbTVPJXKtwHHoiKFEFKLyrJZobeYEEYeD6jeLBo8DRWynvi4ff0IIwDJC3LzUugDJQn6LU4nQhdu4EyoCkak1sDopVcpX%2F0f3E9BOEbPJIV5pdann2%2FX1DnGbEu7EplHUKF1k76bPSD1aqxgUOXm5hLSZI4X0FNBocq8pLgZu4wmSRwb1i6VE9IpeJurMxYlfEg2MJCCIe&X-Amz-Signature=21c503d82aba81d8244d12fa5b9b0393003d100b013a86b3f0a72a85124d31f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
