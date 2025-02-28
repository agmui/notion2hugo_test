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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIY3IGL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDUNIDc3VpZwImb4xj8VU5Sm8X5y6JQmaEkCldOHjBvXAIgFgGrb8lH3Bz3k0c7JVzy3LCMXLPFbnlpAyrRjqDokK0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlLohUF40s%2BQSaEsCrcA0%2BBQ5v5ckm5uYTrYH812gtfFUG5MGG0jPtYJ6GJViSP1SPNCpsbB4jcIOZALrnmQNbfg7BQlcQQIb9Z76AbEhrS5eFR4RWiW6lc36ZZh9QaCz%2BsCJyTkzupmxazP3bco38UA1LbX%2BXy0IkenZiLcidsrB7SGUWx2X5FmFH%2FB1fKo%2F3OSPb7htKqVmd8wsycIzStc4rAwTooo3oW7Y4BA1eFoqgf3O7L%2FBFCbIQcjHgBgCss9ns9HDl4FNMbvqq2MpVFycL3gjP5QKiwpgv9KHcjbnYzNYIYoEqyTwmH6%2B26%2FrBMAkCKzPNtAX0XYwAmKGY2KsKmQJIVjd052FRFEw%2FvZk6FW%2BUAOpry1C6NmpuapKJ%2BA53A3BiiEOy6reDcCozn4YS1zqcF5s8c24gGB1YPgwf1Xy5JbRh%2F20%2BNv26pltr%2BLP6HdjnvfKrEejm5oKFibMtwc8qzTz5MS5i9B9gIRbdiyeSzFgiqftIcVormnaMxQBZ%2FTP0VIPGqT520x5iMAPIIBxCol%2Fl%2BEUs4ePBnpAypoaC4W%2BerpfE2gzd791sW%2BkToNyAh6QDm6I8zF%2FECwkuV0J4hxe7p8s5GDis2rd%2BI9J%2BrB%2BtA4dk2WwXa0ymCh2bWi2EfnQhtMMPvhr4GOqUBy1%2BM6dsArreVheY7p675j9ngbFySQGwUrfT2WztOdP3PF%2FKhUetZbEPLf7FF3bCv%2Fcif4XNXny0c5UrTKfRAmJaXrmMFnk38FFlStVVeU2Vu4PTtGQ2Jhm7C4E7En%2BOfoBeGa8HMmuBaINlhSlHZg2mPZL1hlFPnDSpXj0IgfeNFPKZzWCro7mHWGBjC3k2W2WYZDOkeNTq%2BIF0K2NziKcgogr5H&X-Amz-Signature=46e33e2aeb7b0f81912e8890740587675ae21eb1fd415d50ce9a4da66e68dcf0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIY3IGL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDUNIDc3VpZwImb4xj8VU5Sm8X5y6JQmaEkCldOHjBvXAIgFgGrb8lH3Bz3k0c7JVzy3LCMXLPFbnlpAyrRjqDokK0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlLohUF40s%2BQSaEsCrcA0%2BBQ5v5ckm5uYTrYH812gtfFUG5MGG0jPtYJ6GJViSP1SPNCpsbB4jcIOZALrnmQNbfg7BQlcQQIb9Z76AbEhrS5eFR4RWiW6lc36ZZh9QaCz%2BsCJyTkzupmxazP3bco38UA1LbX%2BXy0IkenZiLcidsrB7SGUWx2X5FmFH%2FB1fKo%2F3OSPb7htKqVmd8wsycIzStc4rAwTooo3oW7Y4BA1eFoqgf3O7L%2FBFCbIQcjHgBgCss9ns9HDl4FNMbvqq2MpVFycL3gjP5QKiwpgv9KHcjbnYzNYIYoEqyTwmH6%2B26%2FrBMAkCKzPNtAX0XYwAmKGY2KsKmQJIVjd052FRFEw%2FvZk6FW%2BUAOpry1C6NmpuapKJ%2BA53A3BiiEOy6reDcCozn4YS1zqcF5s8c24gGB1YPgwf1Xy5JbRh%2F20%2BNv26pltr%2BLP6HdjnvfKrEejm5oKFibMtwc8qzTz5MS5i9B9gIRbdiyeSzFgiqftIcVormnaMxQBZ%2FTP0VIPGqT520x5iMAPIIBxCol%2Fl%2BEUs4ePBnpAypoaC4W%2BerpfE2gzd791sW%2BkToNyAh6QDm6I8zF%2FECwkuV0J4hxe7p8s5GDis2rd%2BI9J%2BrB%2BtA4dk2WwXa0ymCh2bWi2EfnQhtMMPvhr4GOqUBy1%2BM6dsArreVheY7p675j9ngbFySQGwUrfT2WztOdP3PF%2FKhUetZbEPLf7FF3bCv%2Fcif4XNXny0c5UrTKfRAmJaXrmMFnk38FFlStVVeU2Vu4PTtGQ2Jhm7C4E7En%2BOfoBeGa8HMmuBaINlhSlHZg2mPZL1hlFPnDSpXj0IgfeNFPKZzWCro7mHWGBjC3k2W2WYZDOkeNTq%2BIF0K2NziKcgogr5H&X-Amz-Signature=3b2673d490e057be42d8619ba8e5f88d85288e90fa9b16c16d4187581db96a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIY3IGL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDUNIDc3VpZwImb4xj8VU5Sm8X5y6JQmaEkCldOHjBvXAIgFgGrb8lH3Bz3k0c7JVzy3LCMXLPFbnlpAyrRjqDokK0qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlLohUF40s%2BQSaEsCrcA0%2BBQ5v5ckm5uYTrYH812gtfFUG5MGG0jPtYJ6GJViSP1SPNCpsbB4jcIOZALrnmQNbfg7BQlcQQIb9Z76AbEhrS5eFR4RWiW6lc36ZZh9QaCz%2BsCJyTkzupmxazP3bco38UA1LbX%2BXy0IkenZiLcidsrB7SGUWx2X5FmFH%2FB1fKo%2F3OSPb7htKqVmd8wsycIzStc4rAwTooo3oW7Y4BA1eFoqgf3O7L%2FBFCbIQcjHgBgCss9ns9HDl4FNMbvqq2MpVFycL3gjP5QKiwpgv9KHcjbnYzNYIYoEqyTwmH6%2B26%2FrBMAkCKzPNtAX0XYwAmKGY2KsKmQJIVjd052FRFEw%2FvZk6FW%2BUAOpry1C6NmpuapKJ%2BA53A3BiiEOy6reDcCozn4YS1zqcF5s8c24gGB1YPgwf1Xy5JbRh%2F20%2BNv26pltr%2BLP6HdjnvfKrEejm5oKFibMtwc8qzTz5MS5i9B9gIRbdiyeSzFgiqftIcVormnaMxQBZ%2FTP0VIPGqT520x5iMAPIIBxCol%2Fl%2BEUs4ePBnpAypoaC4W%2BerpfE2gzd791sW%2BkToNyAh6QDm6I8zF%2FECwkuV0J4hxe7p8s5GDis2rd%2BI9J%2BrB%2BtA4dk2WwXa0ymCh2bWi2EfnQhtMMPvhr4GOqUBy1%2BM6dsArreVheY7p675j9ngbFySQGwUrfT2WztOdP3PF%2FKhUetZbEPLf7FF3bCv%2Fcif4XNXny0c5UrTKfRAmJaXrmMFnk38FFlStVVeU2Vu4PTtGQ2Jhm7C4E7En%2BOfoBeGa8HMmuBaINlhSlHZg2mPZL1hlFPnDSpXj0IgfeNFPKZzWCro7mHWGBjC3k2W2WYZDOkeNTq%2BIF0K2NziKcgogr5H&X-Amz-Signature=6e72a0785a19dc8f70056bb286dfeea043c08b3ff41f79bb09a447528cb82416&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
