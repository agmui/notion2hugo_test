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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AWODOG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9NLCMjB7vLcLZtvnjQDbjK1r6sxM0Y0fv%2BH8AaZwSMAiEAyGA2rTfpQ18EY0PxweEG7tMpYTp65y6cgoSR720aT%2FUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEB2NvPVsluyvizdyrcA9NMKOjiINLuMWCBIzFVI0EFP1F5uEt5nUFIsQ7rOkTahKRtzoWqP82EkgfuYEax2zI%2FrrEFKtUyp2wVOISeK%2F1bE0MxUdkfeS%2BY3KwZkxG8o4zHFUxeFE73O2PXI13fSg4gsATxolh61Kf6E45zDx6ZiD7WQAxzJ8%2FENz6icY3jU6uFs9cq8NJ1u9n2HaCG0cju9l602nJohOAAz4%2BVzdHG5OPedgTBnAlC2Rq1rVIWQ3i%2Fq67gwN8%2Fc08DrG4Oq%2FoIWJv2zJs%2BRvm%2BvSkD3VaHS5kc8Uw3l%2BbzY0qRj0UYL%2F8kybqq7qHs5zugiS6hMOgnIkHI7zfVME1KrCXel38NdcboH8Ou4zMgbS5BaS43nUS4Le3xdO7hgQ1YwrU3YhXgfC9vyLXoSYE6jZ6U5HOabcDl92OsFVDaH8j%2FhYHaAChRWYzZ42tSEKl5CaV%2BtBXaOjp0IgzOXHs7osrueNitdwHs1j0mlpI%2FGPtalZ66e90x4XOOD085Kksqo%2Fmp%2BmoeNJ1I3k6DYRfCHsUJhCApSqgJydkEt%2B2SqmHGcICylwSLW0HPHPD7tmBp63nxhO5zK3XTKhoRcWGRznt76j6GcygurFOjjp9F%2FgPqQ309NvG%2FuZC40Hew2VLkMO2pxMMGOqUBIXomEgVa3wbiGwSJI8jF8Jwk%2B%2BCcIH2mhY2uIzN4XywifNfoy%2F6ymLWYRYvZ3P7Cy1Tt%2F%2BGF5jlIeXBg%2Bneso7Z9YQ4OLAD6eiGkgI6Acx3yrypqnVsn4NSRDRkhqX4YRQoot7pOY8Y0MA9yXLLX0ODIwR9HypfvMuhWYdFItDDJiHk24sMiYP7N5EDABv4Rn1wi0%2BSYDdkx1FuAP%2FvzXpX%2FQnAK&X-Amz-Signature=3037c4235a7be38fc9320bbb96d2c64dbd6555b9a25fbd2cec1692be59da842e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AWODOG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9NLCMjB7vLcLZtvnjQDbjK1r6sxM0Y0fv%2BH8AaZwSMAiEAyGA2rTfpQ18EY0PxweEG7tMpYTp65y6cgoSR720aT%2FUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEB2NvPVsluyvizdyrcA9NMKOjiINLuMWCBIzFVI0EFP1F5uEt5nUFIsQ7rOkTahKRtzoWqP82EkgfuYEax2zI%2FrrEFKtUyp2wVOISeK%2F1bE0MxUdkfeS%2BY3KwZkxG8o4zHFUxeFE73O2PXI13fSg4gsATxolh61Kf6E45zDx6ZiD7WQAxzJ8%2FENz6icY3jU6uFs9cq8NJ1u9n2HaCG0cju9l602nJohOAAz4%2BVzdHG5OPedgTBnAlC2Rq1rVIWQ3i%2Fq67gwN8%2Fc08DrG4Oq%2FoIWJv2zJs%2BRvm%2BvSkD3VaHS5kc8Uw3l%2BbzY0qRj0UYL%2F8kybqq7qHs5zugiS6hMOgnIkHI7zfVME1KrCXel38NdcboH8Ou4zMgbS5BaS43nUS4Le3xdO7hgQ1YwrU3YhXgfC9vyLXoSYE6jZ6U5HOabcDl92OsFVDaH8j%2FhYHaAChRWYzZ42tSEKl5CaV%2BtBXaOjp0IgzOXHs7osrueNitdwHs1j0mlpI%2FGPtalZ66e90x4XOOD085Kksqo%2Fmp%2BmoeNJ1I3k6DYRfCHsUJhCApSqgJydkEt%2B2SqmHGcICylwSLW0HPHPD7tmBp63nxhO5zK3XTKhoRcWGRznt76j6GcygurFOjjp9F%2FgPqQ309NvG%2FuZC40Hew2VLkMO2pxMMGOqUBIXomEgVa3wbiGwSJI8jF8Jwk%2B%2BCcIH2mhY2uIzN4XywifNfoy%2F6ymLWYRYvZ3P7Cy1Tt%2F%2BGF5jlIeXBg%2Bneso7Z9YQ4OLAD6eiGkgI6Acx3yrypqnVsn4NSRDRkhqX4YRQoot7pOY8Y0MA9yXLLX0ODIwR9HypfvMuhWYdFItDDJiHk24sMiYP7N5EDABv4Rn1wi0%2BSYDdkx1FuAP%2FvzXpX%2FQnAK&X-Amz-Signature=564b9550bdf641186a56fee7b97b87ec7f991c338e134d92c6b3c72038b7f483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637AWODOG%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9NLCMjB7vLcLZtvnjQDbjK1r6sxM0Y0fv%2BH8AaZwSMAiEAyGA2rTfpQ18EY0PxweEG7tMpYTp65y6cgoSR720aT%2FUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCEB2NvPVsluyvizdyrcA9NMKOjiINLuMWCBIzFVI0EFP1F5uEt5nUFIsQ7rOkTahKRtzoWqP82EkgfuYEax2zI%2FrrEFKtUyp2wVOISeK%2F1bE0MxUdkfeS%2BY3KwZkxG8o4zHFUxeFE73O2PXI13fSg4gsATxolh61Kf6E45zDx6ZiD7WQAxzJ8%2FENz6icY3jU6uFs9cq8NJ1u9n2HaCG0cju9l602nJohOAAz4%2BVzdHG5OPedgTBnAlC2Rq1rVIWQ3i%2Fq67gwN8%2Fc08DrG4Oq%2FoIWJv2zJs%2BRvm%2BvSkD3VaHS5kc8Uw3l%2BbzY0qRj0UYL%2F8kybqq7qHs5zugiS6hMOgnIkHI7zfVME1KrCXel38NdcboH8Ou4zMgbS5BaS43nUS4Le3xdO7hgQ1YwrU3YhXgfC9vyLXoSYE6jZ6U5HOabcDl92OsFVDaH8j%2FhYHaAChRWYzZ42tSEKl5CaV%2BtBXaOjp0IgzOXHs7osrueNitdwHs1j0mlpI%2FGPtalZ66e90x4XOOD085Kksqo%2Fmp%2BmoeNJ1I3k6DYRfCHsUJhCApSqgJydkEt%2B2SqmHGcICylwSLW0HPHPD7tmBp63nxhO5zK3XTKhoRcWGRznt76j6GcygurFOjjp9F%2FgPqQ309NvG%2FuZC40Hew2VLkMO2pxMMGOqUBIXomEgVa3wbiGwSJI8jF8Jwk%2B%2BCcIH2mhY2uIzN4XywifNfoy%2F6ymLWYRYvZ3P7Cy1Tt%2F%2BGF5jlIeXBg%2Bneso7Z9YQ4OLAD6eiGkgI6Acx3yrypqnVsn4NSRDRkhqX4YRQoot7pOY8Y0MA9yXLLX0ODIwR9HypfvMuhWYdFItDDJiHk24sMiYP7N5EDABv4Rn1wi0%2BSYDdkx1FuAP%2FvzXpX%2FQnAK&X-Amz-Signature=956ca50d1c09aa4b0fe8329847566fdc801034945a364f79e9a70289a6a52280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
