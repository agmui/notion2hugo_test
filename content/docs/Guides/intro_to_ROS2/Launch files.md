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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6IPKOG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMYricdgXa2AN71hR9HBsuYFKPPui6%2FNAJsullR3vv8gIgIvX7u%2Fo87AldK%2F7aTESjodW7xe%2F05jBTVLg9fmJo%2BTEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIQ6cJgPYJg1i4zOyrcAwOUpt2towGujmh9cuz5XY0sXKqQbQ9DZ%2F587ukmqfs1NDbVWVayMDlQwjLM%2BT0H6TuL1qmIkNRn99LdYaaDYr2AtNUkliDuzuS2BI8jqR%2F5DRW0vq9czJSM%2B8%2FxzBJGuSH0%2FNAmMWIF6ja%2BPu%2FHd5g3r6m5cwC9o3OgwwIKraZVzNn3IfpElPYBmmL4jaq9BKCbUgsr6x4B2gt%2BKe1TRlBNQR7pgKDSDZwlle0z2weamKTx8JoS24Abo7Eyu2%2BhzY5lsxahFMmF8egHJ%2FM%2FnH9Oiht4b6N%2FJFhMRbYgnAqHk5wMBoNUAeAfIjDeYFm5I8I1IKHPuP6Z4DU9iSpocMQzk3ABMAD%2FSMzmgldj6m8XNYcuIY6jXCcMjcadkjhH0drECXIx%2B1x0m6otp46%2BYdccVF5UvkeTY9p72VRYIwU73iyEzlv5UGK%2Fg3MaiZ5i6hB2%2BR0PmuaI9VbcanPHGXxyVdu%2FsDA68pjkn90O6bupY9Ojfh%2FWvrYR6MLsN04kkeCJorbQNfmoMUX1QiDePjS%2Bc%2BiM13l97eTtwezQL0F09zqgaKYHVCwH3BTNFLj8LVF9S%2BDVI0jbfKtA64z4HW2HRqkCDNiTZzT9jk4Y67be7JLyTZMC9MEGW9eBMIDLub8GOqUBdChGr8QTjOM1wA%2FANYn8npdI7cFa9zvSeZcQfIrnNJ9yVqWzJsL%2FnvrZBp2cmbf6P%2FFSxnZ4w7taQkAaMs5VCV2nOytBcEmOTImlwiaAK4FB5cvJO12iFl4xWRcLKb4TYv1wHXKUHPqnd8CXXoOrmKsxr%2BhogchiX%2FkGARJP9LStUaQl7K1YlbY%2FbnJ%2FlvmrqxgR9P7ZyFrZOqsbtj6NL2imse94&X-Amz-Signature=b8076b13b596db7d04235509995e163aad0dfa906a6bf1dd67f97570b069ef68&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6IPKOG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMYricdgXa2AN71hR9HBsuYFKPPui6%2FNAJsullR3vv8gIgIvX7u%2Fo87AldK%2F7aTESjodW7xe%2F05jBTVLg9fmJo%2BTEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIQ6cJgPYJg1i4zOyrcAwOUpt2towGujmh9cuz5XY0sXKqQbQ9DZ%2F587ukmqfs1NDbVWVayMDlQwjLM%2BT0H6TuL1qmIkNRn99LdYaaDYr2AtNUkliDuzuS2BI8jqR%2F5DRW0vq9czJSM%2B8%2FxzBJGuSH0%2FNAmMWIF6ja%2BPu%2FHd5g3r6m5cwC9o3OgwwIKraZVzNn3IfpElPYBmmL4jaq9BKCbUgsr6x4B2gt%2BKe1TRlBNQR7pgKDSDZwlle0z2weamKTx8JoS24Abo7Eyu2%2BhzY5lsxahFMmF8egHJ%2FM%2FnH9Oiht4b6N%2FJFhMRbYgnAqHk5wMBoNUAeAfIjDeYFm5I8I1IKHPuP6Z4DU9iSpocMQzk3ABMAD%2FSMzmgldj6m8XNYcuIY6jXCcMjcadkjhH0drECXIx%2B1x0m6otp46%2BYdccVF5UvkeTY9p72VRYIwU73iyEzlv5UGK%2Fg3MaiZ5i6hB2%2BR0PmuaI9VbcanPHGXxyVdu%2FsDA68pjkn90O6bupY9Ojfh%2FWvrYR6MLsN04kkeCJorbQNfmoMUX1QiDePjS%2Bc%2BiM13l97eTtwezQL0F09zqgaKYHVCwH3BTNFLj8LVF9S%2BDVI0jbfKtA64z4HW2HRqkCDNiTZzT9jk4Y67be7JLyTZMC9MEGW9eBMIDLub8GOqUBdChGr8QTjOM1wA%2FANYn8npdI7cFa9zvSeZcQfIrnNJ9yVqWzJsL%2FnvrZBp2cmbf6P%2FFSxnZ4w7taQkAaMs5VCV2nOytBcEmOTImlwiaAK4FB5cvJO12iFl4xWRcLKb4TYv1wHXKUHPqnd8CXXoOrmKsxr%2BhogchiX%2FkGARJP9LStUaQl7K1YlbY%2FbnJ%2FlvmrqxgR9P7ZyFrZOqsbtj6NL2imse94&X-Amz-Signature=0fed29d512fb10b84f5dae2b3adaf7e94fc4d0645a0cafd04d97d00796a7542b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO6IPKOG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMYricdgXa2AN71hR9HBsuYFKPPui6%2FNAJsullR3vv8gIgIvX7u%2Fo87AldK%2F7aTESjodW7xe%2F05jBTVLg9fmJo%2BTEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDIQ6cJgPYJg1i4zOyrcAwOUpt2towGujmh9cuz5XY0sXKqQbQ9DZ%2F587ukmqfs1NDbVWVayMDlQwjLM%2BT0H6TuL1qmIkNRn99LdYaaDYr2AtNUkliDuzuS2BI8jqR%2F5DRW0vq9czJSM%2B8%2FxzBJGuSH0%2FNAmMWIF6ja%2BPu%2FHd5g3r6m5cwC9o3OgwwIKraZVzNn3IfpElPYBmmL4jaq9BKCbUgsr6x4B2gt%2BKe1TRlBNQR7pgKDSDZwlle0z2weamKTx8JoS24Abo7Eyu2%2BhzY5lsxahFMmF8egHJ%2FM%2FnH9Oiht4b6N%2FJFhMRbYgnAqHk5wMBoNUAeAfIjDeYFm5I8I1IKHPuP6Z4DU9iSpocMQzk3ABMAD%2FSMzmgldj6m8XNYcuIY6jXCcMjcadkjhH0drECXIx%2B1x0m6otp46%2BYdccVF5UvkeTY9p72VRYIwU73iyEzlv5UGK%2Fg3MaiZ5i6hB2%2BR0PmuaI9VbcanPHGXxyVdu%2FsDA68pjkn90O6bupY9Ojfh%2FWvrYR6MLsN04kkeCJorbQNfmoMUX1QiDePjS%2Bc%2BiM13l97eTtwezQL0F09zqgaKYHVCwH3BTNFLj8LVF9S%2BDVI0jbfKtA64z4HW2HRqkCDNiTZzT9jk4Y67be7JLyTZMC9MEGW9eBMIDLub8GOqUBdChGr8QTjOM1wA%2FANYn8npdI7cFa9zvSeZcQfIrnNJ9yVqWzJsL%2FnvrZBp2cmbf6P%2FFSxnZ4w7taQkAaMs5VCV2nOytBcEmOTImlwiaAK4FB5cvJO12iFl4xWRcLKb4TYv1wHXKUHPqnd8CXXoOrmKsxr%2BhogchiX%2FkGARJP9LStUaQl7K1YlbY%2FbnJ%2FlvmrqxgR9P7ZyFrZOqsbtj6NL2imse94&X-Amz-Signature=f50167a4fa13a886361a5078cbd037e3d121921c63ec052902a8f7223ab04ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
