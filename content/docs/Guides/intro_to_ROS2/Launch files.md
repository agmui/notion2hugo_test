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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW5JJRB3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIFtoffoSK%2Fhtvr7mCmg%2FfHBFam9IdxhN05%2F89W%2BUJFFkAiEAytqPpUexggUVX0i6wq%2FI%2BHIERATXlKFPHZbNn3lfi4gq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGRipoSTC9fxXZAuISrcA%2Fg5tv6GFxJvx9IvdZc4c4FAQHx8j1KeEytWH1Q4VpL%2FNkOfzUyAZy%2BIiYC2K7IiHIS3NijWKToGDkT7XJ8evgCP5%2BpbLlwTCMDZNyAtBZY9ghUNLRXU%2FkBD5phFGR%2FTqdunuCgiG7c6IWzb%2ByMcyQepWfUlHvJSheqBh%2F%2BPIrvyJVmQSeIv4H326YAsqGxMrUyzQcnJ15jEdnhZntmlewSuoQuyAgbGUe1IF%2FexjRKSe08rR%2BP85t7CnnpFjXx0qwa%2FAkMWKE9Iqp%2BNL56voniTgMFsz0l4X2BEGoPaAcl4h2ETHDu0A4t%2Bw9TrmDnEGEfv1QN1ZmrY0U1fVJo3Qe94h6xzq1lFhPZk73hRnLhqSAoeeWvcfUsEDH1GZ12D2hB%2BB6B%2FtZ21aLCosJvDgHahRNKNA4ZM%2BZmH1%2FX59r5UrOH1aRS63hLTXUbOWWeHUSgrV8eVniifwBk8aPOOCSW%2FI%2BNpmI2zHL1gi7LyWof1yrGjamIKWJQJI3Ia2agxWotezTVPDhP7ZNQA3pK7yBvJwhGsL%2FTSJxXUtSg64vUMWnFZSE7Lm7U%2FQ6T%2BFRNN%2BbWktIA3ije25uDkfw0AQoukVlejFCcu7sZBi0G4DD1N%2FaNfQLFoLXD3OCQ8MI2OwsIGOqUBBmJNobhmbbvl%2Bp1PBf%2F7IFgV1OyP3IhurGvHIJl%2FlsDuMgrTpVbSXOBjEhZAidU9HCobiIjFu09PBMdAlgjZGT0oMPLna6NLqQa%2F1VQxq%2BDObxL5P5Kp3cuJxMbn1uF61fJqvzOwWYce2rQpZEOL071%2B3pidShYDw02tkg5qPPjZ0wkHTJnokWM%2BDUXCN%2BmrgdKBk%2FIUDiKa9E5lrmj8DfkLAtH2&X-Amz-Signature=ac2264b00d54e606bad44fdae2f9a321b06d17d7c50245f6bae63110aa139830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW5JJRB3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIFtoffoSK%2Fhtvr7mCmg%2FfHBFam9IdxhN05%2F89W%2BUJFFkAiEAytqPpUexggUVX0i6wq%2FI%2BHIERATXlKFPHZbNn3lfi4gq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGRipoSTC9fxXZAuISrcA%2Fg5tv6GFxJvx9IvdZc4c4FAQHx8j1KeEytWH1Q4VpL%2FNkOfzUyAZy%2BIiYC2K7IiHIS3NijWKToGDkT7XJ8evgCP5%2BpbLlwTCMDZNyAtBZY9ghUNLRXU%2FkBD5phFGR%2FTqdunuCgiG7c6IWzb%2ByMcyQepWfUlHvJSheqBh%2F%2BPIrvyJVmQSeIv4H326YAsqGxMrUyzQcnJ15jEdnhZntmlewSuoQuyAgbGUe1IF%2FexjRKSe08rR%2BP85t7CnnpFjXx0qwa%2FAkMWKE9Iqp%2BNL56voniTgMFsz0l4X2BEGoPaAcl4h2ETHDu0A4t%2Bw9TrmDnEGEfv1QN1ZmrY0U1fVJo3Qe94h6xzq1lFhPZk73hRnLhqSAoeeWvcfUsEDH1GZ12D2hB%2BB6B%2FtZ21aLCosJvDgHahRNKNA4ZM%2BZmH1%2FX59r5UrOH1aRS63hLTXUbOWWeHUSgrV8eVniifwBk8aPOOCSW%2FI%2BNpmI2zHL1gi7LyWof1yrGjamIKWJQJI3Ia2agxWotezTVPDhP7ZNQA3pK7yBvJwhGsL%2FTSJxXUtSg64vUMWnFZSE7Lm7U%2FQ6T%2BFRNN%2BbWktIA3ije25uDkfw0AQoukVlejFCcu7sZBi0G4DD1N%2FaNfQLFoLXD3OCQ8MI2OwsIGOqUBBmJNobhmbbvl%2Bp1PBf%2F7IFgV1OyP3IhurGvHIJl%2FlsDuMgrTpVbSXOBjEhZAidU9HCobiIjFu09PBMdAlgjZGT0oMPLna6NLqQa%2F1VQxq%2BDObxL5P5Kp3cuJxMbn1uF61fJqvzOwWYce2rQpZEOL071%2B3pidShYDw02tkg5qPPjZ0wkHTJnokWM%2BDUXCN%2BmrgdKBk%2FIUDiKa9E5lrmj8DfkLAtH2&X-Amz-Signature=bfdb432a2ad08f30db064df84c9102b7f54c6e1d91faf2f0c700b07d1786f9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW5JJRB3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIFtoffoSK%2Fhtvr7mCmg%2FfHBFam9IdxhN05%2F89W%2BUJFFkAiEAytqPpUexggUVX0i6wq%2FI%2BHIERATXlKFPHZbNn3lfi4gq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDGRipoSTC9fxXZAuISrcA%2Fg5tv6GFxJvx9IvdZc4c4FAQHx8j1KeEytWH1Q4VpL%2FNkOfzUyAZy%2BIiYC2K7IiHIS3NijWKToGDkT7XJ8evgCP5%2BpbLlwTCMDZNyAtBZY9ghUNLRXU%2FkBD5phFGR%2FTqdunuCgiG7c6IWzb%2ByMcyQepWfUlHvJSheqBh%2F%2BPIrvyJVmQSeIv4H326YAsqGxMrUyzQcnJ15jEdnhZntmlewSuoQuyAgbGUe1IF%2FexjRKSe08rR%2BP85t7CnnpFjXx0qwa%2FAkMWKE9Iqp%2BNL56voniTgMFsz0l4X2BEGoPaAcl4h2ETHDu0A4t%2Bw9TrmDnEGEfv1QN1ZmrY0U1fVJo3Qe94h6xzq1lFhPZk73hRnLhqSAoeeWvcfUsEDH1GZ12D2hB%2BB6B%2FtZ21aLCosJvDgHahRNKNA4ZM%2BZmH1%2FX59r5UrOH1aRS63hLTXUbOWWeHUSgrV8eVniifwBk8aPOOCSW%2FI%2BNpmI2zHL1gi7LyWof1yrGjamIKWJQJI3Ia2agxWotezTVPDhP7ZNQA3pK7yBvJwhGsL%2FTSJxXUtSg64vUMWnFZSE7Lm7U%2FQ6T%2BFRNN%2BbWktIA3ije25uDkfw0AQoukVlejFCcu7sZBi0G4DD1N%2FaNfQLFoLXD3OCQ8MI2OwsIGOqUBBmJNobhmbbvl%2Bp1PBf%2F7IFgV1OyP3IhurGvHIJl%2FlsDuMgrTpVbSXOBjEhZAidU9HCobiIjFu09PBMdAlgjZGT0oMPLna6NLqQa%2F1VQxq%2BDObxL5P5Kp3cuJxMbn1uF61fJqvzOwWYce2rQpZEOL071%2B3pidShYDw02tkg5qPPjZ0wkHTJnokWM%2BDUXCN%2BmrgdKBk%2FIUDiKa9E5lrmj8DfkLAtH2&X-Amz-Signature=b7aaa022ab786e26842e02f2e18c9af649855953bf62e73f41016a4a16b48d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
