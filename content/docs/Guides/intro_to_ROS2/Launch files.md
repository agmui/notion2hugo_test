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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S53AD7HC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDoPqB7t6ae%2B51B7IN7teIswmhj9NYgkPlqHxhiAttGrQIgdmlxvwHTNEQmWK9pt2Ayu02RqWS1uoZbzMp5UTPew%2F0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2w5m50Mjd1BJiyLSrcAwnw1gNZURAO8MunMSYXlF%2BcImqGirpK1sa2E%2BahUbOLuweIx%2BKQx4L%2Fjf8gxpSfb3SPsNTWempG2zYtOtu9S5nWF0hRye41Sc5TE6SsVX6vKWVGFrEsKVGku3SldQIvDkxhysRe7wuxG%2B1XZ%2F5W8WruW72bO9ghOHTNQl%2BpDlppfDn7P5WenldzeKTh%2FN4wNdG8eVZPYi%2FNgKgUzhj4j4vF3IUWotrQt96uQL1x5sg1Mkak4MfiIvHxgPDtusJc2iLrOfIpRLXFFpO3P7EqpyOkctB9%2FCL0bs2aPMCPnYKq7la%2Bq6i4R60q4bWrkPeqrFXKc9iVmGI%2FMfmRDJWMiUDtyhZ0i6dL5wqdC5bHifUUDTwBizlFHpCLQwwNeCOpzXKkSzdQnnu4mfxOobMI6VFfTSKozStVLd%2FMHaKmbrULgbMdFasGkyJR4dur2vwvaauEVUWHR6%2BvWnvIXX3kbFzI6hmbZ6RvkTrMnXiIO7JRDFwxlkwoqySa3vY71XRfu5q%2B%2BToHgLiYBG2wGmmdQKdvyjy%2FDG%2F1K26z%2FTMFYKpME3377peieC7hoZGkJPnT3PmlNHTRCj1vhwad2Rr1Hgut4YJWlOx%2BaTgZTItlCzzEuKgppGyYBazqW6YFMIzrwL4GOqUBhknMSFurT9loE0Un4g1LyemCrdYfP0qX2ty3RUTRs%2FuD0gc%2BomCdx7QifuGq9p4CaiJHUUMxxAKul8ISE4wr2wt9J2bRSZCoo1Lca%2F%2Fxw%2Bn0m6vhkfhOhbgIWc4LS%2B2KUKbe2tfLDiRE1h1AxsGodJmePlnbmLlX2ROLPP5UUc1qb23iRzcBddEOK3Y4ldtdNoUMhUuo9gVPYVS4zy69dY41T8x1&X-Amz-Signature=8a8a6c8cb9397af5f11727b6c3d23ffc6c26f2863fd826bd0204edac417ef972&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S53AD7HC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDoPqB7t6ae%2B51B7IN7teIswmhj9NYgkPlqHxhiAttGrQIgdmlxvwHTNEQmWK9pt2Ayu02RqWS1uoZbzMp5UTPew%2F0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2w5m50Mjd1BJiyLSrcAwnw1gNZURAO8MunMSYXlF%2BcImqGirpK1sa2E%2BahUbOLuweIx%2BKQx4L%2Fjf8gxpSfb3SPsNTWempG2zYtOtu9S5nWF0hRye41Sc5TE6SsVX6vKWVGFrEsKVGku3SldQIvDkxhysRe7wuxG%2B1XZ%2F5W8WruW72bO9ghOHTNQl%2BpDlppfDn7P5WenldzeKTh%2FN4wNdG8eVZPYi%2FNgKgUzhj4j4vF3IUWotrQt96uQL1x5sg1Mkak4MfiIvHxgPDtusJc2iLrOfIpRLXFFpO3P7EqpyOkctB9%2FCL0bs2aPMCPnYKq7la%2Bq6i4R60q4bWrkPeqrFXKc9iVmGI%2FMfmRDJWMiUDtyhZ0i6dL5wqdC5bHifUUDTwBizlFHpCLQwwNeCOpzXKkSzdQnnu4mfxOobMI6VFfTSKozStVLd%2FMHaKmbrULgbMdFasGkyJR4dur2vwvaauEVUWHR6%2BvWnvIXX3kbFzI6hmbZ6RvkTrMnXiIO7JRDFwxlkwoqySa3vY71XRfu5q%2B%2BToHgLiYBG2wGmmdQKdvyjy%2FDG%2F1K26z%2FTMFYKpME3377peieC7hoZGkJPnT3PmlNHTRCj1vhwad2Rr1Hgut4YJWlOx%2BaTgZTItlCzzEuKgppGyYBazqW6YFMIzrwL4GOqUBhknMSFurT9loE0Un4g1LyemCrdYfP0qX2ty3RUTRs%2FuD0gc%2BomCdx7QifuGq9p4CaiJHUUMxxAKul8ISE4wr2wt9J2bRSZCoo1Lca%2F%2Fxw%2Bn0m6vhkfhOhbgIWc4LS%2B2KUKbe2tfLDiRE1h1AxsGodJmePlnbmLlX2ROLPP5UUc1qb23iRzcBddEOK3Y4ldtdNoUMhUuo9gVPYVS4zy69dY41T8x1&X-Amz-Signature=1793673c5d4733222baf9c2b9dc36ca19b5dada47cf1775d4cb5d645b7746383&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S53AD7HC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDoPqB7t6ae%2B51B7IN7teIswmhj9NYgkPlqHxhiAttGrQIgdmlxvwHTNEQmWK9pt2Ayu02RqWS1uoZbzMp5UTPew%2F0qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2w5m50Mjd1BJiyLSrcAwnw1gNZURAO8MunMSYXlF%2BcImqGirpK1sa2E%2BahUbOLuweIx%2BKQx4L%2Fjf8gxpSfb3SPsNTWempG2zYtOtu9S5nWF0hRye41Sc5TE6SsVX6vKWVGFrEsKVGku3SldQIvDkxhysRe7wuxG%2B1XZ%2F5W8WruW72bO9ghOHTNQl%2BpDlppfDn7P5WenldzeKTh%2FN4wNdG8eVZPYi%2FNgKgUzhj4j4vF3IUWotrQt96uQL1x5sg1Mkak4MfiIvHxgPDtusJc2iLrOfIpRLXFFpO3P7EqpyOkctB9%2FCL0bs2aPMCPnYKq7la%2Bq6i4R60q4bWrkPeqrFXKc9iVmGI%2FMfmRDJWMiUDtyhZ0i6dL5wqdC5bHifUUDTwBizlFHpCLQwwNeCOpzXKkSzdQnnu4mfxOobMI6VFfTSKozStVLd%2FMHaKmbrULgbMdFasGkyJR4dur2vwvaauEVUWHR6%2BvWnvIXX3kbFzI6hmbZ6RvkTrMnXiIO7JRDFwxlkwoqySa3vY71XRfu5q%2B%2BToHgLiYBG2wGmmdQKdvyjy%2FDG%2F1K26z%2FTMFYKpME3377peieC7hoZGkJPnT3PmlNHTRCj1vhwad2Rr1Hgut4YJWlOx%2BaTgZTItlCzzEuKgppGyYBazqW6YFMIzrwL4GOqUBhknMSFurT9loE0Un4g1LyemCrdYfP0qX2ty3RUTRs%2FuD0gc%2BomCdx7QifuGq9p4CaiJHUUMxxAKul8ISE4wr2wt9J2bRSZCoo1Lca%2F%2Fxw%2Bn0m6vhkfhOhbgIWc4LS%2B2KUKbe2tfLDiRE1h1AxsGodJmePlnbmLlX2ROLPP5UUc1qb23iRzcBddEOK3Y4ldtdNoUMhUuo9gVPYVS4zy69dY41T8x1&X-Amz-Signature=08b7671304d28486aec9f1b0d9adeab4228608cefc968e5344d5d4f40e7700ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
