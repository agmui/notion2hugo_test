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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2YPCT7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSIS%2BH%2Fy6%2BZP9nZwMzl3ybG1pRDSCggcJUe7PIAdcTwIhAJjk3BHLKiLrsjmAG3gnzJa0UsYAAvw%2BV8zDYJC9aZjnKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFeHvycSSynGJrkiwq3AO%2BwFmio30etgWWAGNGgiZ2C%2F3SlGCEJgqG6n6t%2F2eRS3KxyuH6L5KHZmkZYoQgkceTfasmShE9cX2COChGtOm6dJJpvlnRoMEHFIQsHeHJ6BnD9%2BXvmPuE2CSoT66I%2B6ChjjTNEn342bF3AexxWrzwa7LKYQRsqQ1Y4BBhuqBSwcqLVmlJJH7r5JMFlDUaXKB05x1ib3MUQrPJBIGU%2Bk96ckaAF%2F6GLKdfyKqR%2FmwU%2BbaWKGw5X9dbLML226DMlB0CR1nXpVLV9TO3cndVKfHwW4s3oCxq%2FPAjOIYdhQ9H071jHf%2F5jzBYAYF0infHkjuwdl09R%2BgWN0HPWOs3SSBW50kC%2FF1pefET0y8KXqobMcuESA6s9TSeURRIcUu0aaHZXDV7vYxh4yrFj0woKQgCpfDX%2FjewIc%2BDbYYZzC5hLaQcfbdUP2kqfUvMxga%2BY3niWJgEffWEvJhwmje5XwANzEpPlqaMlEShyngbQf%2FDBF4a9YzBO68Eaq9oEmaooPS6%2BO85GdoJQ1YpUPRRkAQFoO2nkwfpm66O4K5BnohhwkU42i7WId%2Bs0M2XgsO1K7pw9DOUe9%2BQcHaY9O2XU01K6qrqMah2OCjwskaTcPIYAlwl33J2WtmfDci%2BrDDQj%2FzABjqkAYHBqemGB38Ycg3hRijtBDtxS%2FHOtnhhSsh20JFpWs3swH6%2B1SGxdLwMEax6e5cCaxKKLWc8f1vnUNx70Ev4DjO3KAd9nrtbCoaDJqOBTvYh0pygaWfueXOBmLnSpUTr6QFWEpBKli2X6s6tkHTVZEwMrwtfSFHYRsKoNw8Jvn%2BsD2h%2FaUz5x%2F6GhDEZ7H5nAVQzo7ilEXLfUTFC3IYHtkVvgZ5%2F&X-Amz-Signature=6620780d8a2cd3830cb9561d8e8f119193222edfc45bead5b020a01dc733b71c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2YPCT7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSIS%2BH%2Fy6%2BZP9nZwMzl3ybG1pRDSCggcJUe7PIAdcTwIhAJjk3BHLKiLrsjmAG3gnzJa0UsYAAvw%2BV8zDYJC9aZjnKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFeHvycSSynGJrkiwq3AO%2BwFmio30etgWWAGNGgiZ2C%2F3SlGCEJgqG6n6t%2F2eRS3KxyuH6L5KHZmkZYoQgkceTfasmShE9cX2COChGtOm6dJJpvlnRoMEHFIQsHeHJ6BnD9%2BXvmPuE2CSoT66I%2B6ChjjTNEn342bF3AexxWrzwa7LKYQRsqQ1Y4BBhuqBSwcqLVmlJJH7r5JMFlDUaXKB05x1ib3MUQrPJBIGU%2Bk96ckaAF%2F6GLKdfyKqR%2FmwU%2BbaWKGw5X9dbLML226DMlB0CR1nXpVLV9TO3cndVKfHwW4s3oCxq%2FPAjOIYdhQ9H071jHf%2F5jzBYAYF0infHkjuwdl09R%2BgWN0HPWOs3SSBW50kC%2FF1pefET0y8KXqobMcuESA6s9TSeURRIcUu0aaHZXDV7vYxh4yrFj0woKQgCpfDX%2FjewIc%2BDbYYZzC5hLaQcfbdUP2kqfUvMxga%2BY3niWJgEffWEvJhwmje5XwANzEpPlqaMlEShyngbQf%2FDBF4a9YzBO68Eaq9oEmaooPS6%2BO85GdoJQ1YpUPRRkAQFoO2nkwfpm66O4K5BnohhwkU42i7WId%2Bs0M2XgsO1K7pw9DOUe9%2BQcHaY9O2XU01K6qrqMah2OCjwskaTcPIYAlwl33J2WtmfDci%2BrDDQj%2FzABjqkAYHBqemGB38Ycg3hRijtBDtxS%2FHOtnhhSsh20JFpWs3swH6%2B1SGxdLwMEax6e5cCaxKKLWc8f1vnUNx70Ev4DjO3KAd9nrtbCoaDJqOBTvYh0pygaWfueXOBmLnSpUTr6QFWEpBKli2X6s6tkHTVZEwMrwtfSFHYRsKoNw8Jvn%2BsD2h%2FaUz5x%2F6GhDEZ7H5nAVQzo7ilEXLfUTFC3IYHtkVvgZ5%2F&X-Amz-Signature=9a27b77beb8fdd76724e554fc946af314322f74f30c4c62858f49d43b932403d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2YPCT7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSIS%2BH%2Fy6%2BZP9nZwMzl3ybG1pRDSCggcJUe7PIAdcTwIhAJjk3BHLKiLrsjmAG3gnzJa0UsYAAvw%2BV8zDYJC9aZjnKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFeHvycSSynGJrkiwq3AO%2BwFmio30etgWWAGNGgiZ2C%2F3SlGCEJgqG6n6t%2F2eRS3KxyuH6L5KHZmkZYoQgkceTfasmShE9cX2COChGtOm6dJJpvlnRoMEHFIQsHeHJ6BnD9%2BXvmPuE2CSoT66I%2B6ChjjTNEn342bF3AexxWrzwa7LKYQRsqQ1Y4BBhuqBSwcqLVmlJJH7r5JMFlDUaXKB05x1ib3MUQrPJBIGU%2Bk96ckaAF%2F6GLKdfyKqR%2FmwU%2BbaWKGw5X9dbLML226DMlB0CR1nXpVLV9TO3cndVKfHwW4s3oCxq%2FPAjOIYdhQ9H071jHf%2F5jzBYAYF0infHkjuwdl09R%2BgWN0HPWOs3SSBW50kC%2FF1pefET0y8KXqobMcuESA6s9TSeURRIcUu0aaHZXDV7vYxh4yrFj0woKQgCpfDX%2FjewIc%2BDbYYZzC5hLaQcfbdUP2kqfUvMxga%2BY3niWJgEffWEvJhwmje5XwANzEpPlqaMlEShyngbQf%2FDBF4a9YzBO68Eaq9oEmaooPS6%2BO85GdoJQ1YpUPRRkAQFoO2nkwfpm66O4K5BnohhwkU42i7WId%2Bs0M2XgsO1K7pw9DOUe9%2BQcHaY9O2XU01K6qrqMah2OCjwskaTcPIYAlwl33J2WtmfDci%2BrDDQj%2FzABjqkAYHBqemGB38Ycg3hRijtBDtxS%2FHOtnhhSsh20JFpWs3swH6%2B1SGxdLwMEax6e5cCaxKKLWc8f1vnUNx70Ev4DjO3KAd9nrtbCoaDJqOBTvYh0pygaWfueXOBmLnSpUTr6QFWEpBKli2X6s6tkHTVZEwMrwtfSFHYRsKoNw8Jvn%2BsD2h%2FaUz5x%2F6GhDEZ7H5nAVQzo7ilEXLfUTFC3IYHtkVvgZ5%2F&X-Amz-Signature=24afdf8c81e9062b7948bd32447f9d5159ba4127ee4be4fbac344327900d5322&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
