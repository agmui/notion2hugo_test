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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BHN2XD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCkzdWwa8JJZQVFRX%2Bl1Qrvz0aO%2BNpimkC7gpGAfAO6kwIgCVRu7NS9bPGoALGN5MWWSo1GSRtWQVEv6oyA58Z7YtwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOmE%2F3ZEsfXAd2MNSrcA5T5fgOK4VLmhlp5htLnr2zsMl295lVtnrUNjYx%2B2RLKWiaatlKqDzBY8T%2FV6bekniIQ9d4nAFhe2oXqYEs6I0gNgtKyY18dptyzlNEoHOW6VdR8KRIX74Jy4Lf6wOOO5hKf04RfmShouBhJvxFseXEeSKfnglf52t5AtFzmVEbTCgG8e88eOIJE0npGZ1EHiK%2Fyg5X%2FZbD%2FMPFjusNwM7kx8%2FK3bmVHiloPMd684YGBxo5ebwKBjuX4RgxXZ0ppN2CBuQKsFfs5HTC4%2FGMAZVR36WSPk8mSS8NCz%2BT0JVRfsxqGdUdvsWQkjFaEQvjpQQ6Ba5u%2BlaXAKp5qjzrqjlUIGxM5KZ2RP%2F2YBQaB4sq6SEW2kO3Cpi90loSi5zrENofsf6BghmiPU%2FsOnBlznxkVkNffwfMtqEm8xejw7KNTFoJ3%2BEoF%2BHMB9gA5TZ7vqjB%2FmynM8nlDTRz5OvHcTUqAgYUk%2Buvt%2BRPzA8yFbDIuuA2HI8iqtqoWRIKTvrw5DyzK4wAAEsnggk8CDHKKGuocdYeA%2BMbZUAkR1k6fpfyDGi7q7ipcYCXkvuEg8bnFVpThO%2BodhkktK0BPHyjaLkq0TIKS1sMiDUBtPrKRA35ZLh6K%2FGECxryuQewCMLzF8L4GOqUBCdXCNmuzRqyoRsyP1sS5pAc2fVMsLLo%2BA7iooqW4TLfHScujO6%2BQkFGOaSO9q10POaNDFmmZ%2F2C%2BSqoryrO98Ada5zpGRDrGfdL6vpNhzVr0dlz%2Bw%2BY9m3YzENR2CxG98ES1zqlfPuJcgbBdLlh8csM3AyWf1%2B9GzXAViRIJroBKGfoz4MyWQgpZDVGAlHMimYL%2BMtht0oaoR3EzGs%2FqwYyTzIOe&X-Amz-Signature=d8cf4b7f700f37260fe304d2c1a3ee7259a8fe163263969f092ebce17639606a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BHN2XD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCkzdWwa8JJZQVFRX%2Bl1Qrvz0aO%2BNpimkC7gpGAfAO6kwIgCVRu7NS9bPGoALGN5MWWSo1GSRtWQVEv6oyA58Z7YtwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOmE%2F3ZEsfXAd2MNSrcA5T5fgOK4VLmhlp5htLnr2zsMl295lVtnrUNjYx%2B2RLKWiaatlKqDzBY8T%2FV6bekniIQ9d4nAFhe2oXqYEs6I0gNgtKyY18dptyzlNEoHOW6VdR8KRIX74Jy4Lf6wOOO5hKf04RfmShouBhJvxFseXEeSKfnglf52t5AtFzmVEbTCgG8e88eOIJE0npGZ1EHiK%2Fyg5X%2FZbD%2FMPFjusNwM7kx8%2FK3bmVHiloPMd684YGBxo5ebwKBjuX4RgxXZ0ppN2CBuQKsFfs5HTC4%2FGMAZVR36WSPk8mSS8NCz%2BT0JVRfsxqGdUdvsWQkjFaEQvjpQQ6Ba5u%2BlaXAKp5qjzrqjlUIGxM5KZ2RP%2F2YBQaB4sq6SEW2kO3Cpi90loSi5zrENofsf6BghmiPU%2FsOnBlznxkVkNffwfMtqEm8xejw7KNTFoJ3%2BEoF%2BHMB9gA5TZ7vqjB%2FmynM8nlDTRz5OvHcTUqAgYUk%2Buvt%2BRPzA8yFbDIuuA2HI8iqtqoWRIKTvrw5DyzK4wAAEsnggk8CDHKKGuocdYeA%2BMbZUAkR1k6fpfyDGi7q7ipcYCXkvuEg8bnFVpThO%2BodhkktK0BPHyjaLkq0TIKS1sMiDUBtPrKRA35ZLh6K%2FGECxryuQewCMLzF8L4GOqUBCdXCNmuzRqyoRsyP1sS5pAc2fVMsLLo%2BA7iooqW4TLfHScujO6%2BQkFGOaSO9q10POaNDFmmZ%2F2C%2BSqoryrO98Ada5zpGRDrGfdL6vpNhzVr0dlz%2Bw%2BY9m3YzENR2CxG98ES1zqlfPuJcgbBdLlh8csM3AyWf1%2B9GzXAViRIJroBKGfoz4MyWQgpZDVGAlHMimYL%2BMtht0oaoR3EzGs%2FqwYyTzIOe&X-Amz-Signature=c4483c77993d568600fc4d4425848f6e78b01d028a9510d789151709673bb8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BHN2XD%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCkzdWwa8JJZQVFRX%2Bl1Qrvz0aO%2BNpimkC7gpGAfAO6kwIgCVRu7NS9bPGoALGN5MWWSo1GSRtWQVEv6oyA58Z7YtwqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOmE%2F3ZEsfXAd2MNSrcA5T5fgOK4VLmhlp5htLnr2zsMl295lVtnrUNjYx%2B2RLKWiaatlKqDzBY8T%2FV6bekniIQ9d4nAFhe2oXqYEs6I0gNgtKyY18dptyzlNEoHOW6VdR8KRIX74Jy4Lf6wOOO5hKf04RfmShouBhJvxFseXEeSKfnglf52t5AtFzmVEbTCgG8e88eOIJE0npGZ1EHiK%2Fyg5X%2FZbD%2FMPFjusNwM7kx8%2FK3bmVHiloPMd684YGBxo5ebwKBjuX4RgxXZ0ppN2CBuQKsFfs5HTC4%2FGMAZVR36WSPk8mSS8NCz%2BT0JVRfsxqGdUdvsWQkjFaEQvjpQQ6Ba5u%2BlaXAKp5qjzrqjlUIGxM5KZ2RP%2F2YBQaB4sq6SEW2kO3Cpi90loSi5zrENofsf6BghmiPU%2FsOnBlznxkVkNffwfMtqEm8xejw7KNTFoJ3%2BEoF%2BHMB9gA5TZ7vqjB%2FmynM8nlDTRz5OvHcTUqAgYUk%2Buvt%2BRPzA8yFbDIuuA2HI8iqtqoWRIKTvrw5DyzK4wAAEsnggk8CDHKKGuocdYeA%2BMbZUAkR1k6fpfyDGi7q7ipcYCXkvuEg8bnFVpThO%2BodhkktK0BPHyjaLkq0TIKS1sMiDUBtPrKRA35ZLh6K%2FGECxryuQewCMLzF8L4GOqUBCdXCNmuzRqyoRsyP1sS5pAc2fVMsLLo%2BA7iooqW4TLfHScujO6%2BQkFGOaSO9q10POaNDFmmZ%2F2C%2BSqoryrO98Ada5zpGRDrGfdL6vpNhzVr0dlz%2Bw%2BY9m3YzENR2CxG98ES1zqlfPuJcgbBdLlh8csM3AyWf1%2B9GzXAViRIJroBKGfoz4MyWQgpZDVGAlHMimYL%2BMtht0oaoR3EzGs%2FqwYyTzIOe&X-Amz-Signature=bd93a141fbd3b984cdc7197f1c7812f72fd76dc4efaf66a41b6122f51128cf8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
