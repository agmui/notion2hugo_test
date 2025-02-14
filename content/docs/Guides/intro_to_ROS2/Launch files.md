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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJMTJAN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2BOjoS1lXT2MJgsiYAZwlOuJCp9FZ0VkjgiizOUkk9QIgVrLQ5oxcd0HcLAkhFrUhR%2Bz8YDGBmbBKYxl4x9I5xVkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDO8%2FBujFoqMdYM37cCrcA6thMRjXd8xZk%2BHZ57VY3ryUxVKS2yWUT%2FN8fMgKL1OJbmD6Kvx7MdfIA6SIghCrc72iu99%2FZPgwp%2BcAj4QPhYTDIdT93L%2BY5pvVWN%2FGIvqbG3oKhZR1b9ALD73lDvwqcTv96n51VUBPvj%2BBnm9VbheJHhu8PPoKZmtDzBq3qaz5jRb84bJvkAAGYSFaUZjk%2BXTgl5KZg2ps%2FSXsUuHDx3qmeh%2F2ehF8vqVIKNNtTBunYFUVZjj7Vls9lblqpwtGJFoQPzi6tgr0J4uQywftcWMTiBuiW2VDjzaWdJSHH2G%2B%2BSQ3dywovKl%2FUZSPZBMLM1GgYmSe9MOYYghB94ZldL0A5nTwPt8GJlq1BD8M7pTIPnqhxFN10K0fgwuar5XDX4zhWeLO03XCMto9cRSf1h8wxVQ5T9tItDfIdWmNffPBATlmApLwmLLRPiqNPYznyiSDQ4u6pV1RUUy2wUdtR3RGBW6%2F9WESdNB6nlrRkyr1Ap66%2FIDlHMMz62kIcgd5yYajfiWdxb1jEQZ7XzyJ08M%2BstyrtXo5VXJZsgexOn3mWGkA0vSl9ABJXgAenmpI2VVSb9itokA7dlI1Lnh5HJKJzxp4oDbv9VEBmFN15DzzanTkIqNJWb9Bgx17MImDur0GOqUBh7RvI%2B8gSLduNhgztfIzew0T6WvLbAsSQ2yW%2FWZLgt%2Bp%2Fnj8lyM3%2B82Z6ir1h%2BX4J0OiBO9GWyPmS%2BqhOs1uDhuSwEMN3J9j1GZer7HhNSRtNYIhENu339bIKNRb2d8GWNUrYo%2BE7N2K2WNKJHLK9FxHjpCxdyLA4zz%2FsiHKx5aQ%2F6GYOgqyjbI1P6UgQLGxJ6M0k4cVoL00n%2B8rBybh%2FfI1ZywG&X-Amz-Signature=6c8cf038153e490b25a2f10e59b4590884c00bbe0e85809a3f0532cc351cad24&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJMTJAN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2BOjoS1lXT2MJgsiYAZwlOuJCp9FZ0VkjgiizOUkk9QIgVrLQ5oxcd0HcLAkhFrUhR%2Bz8YDGBmbBKYxl4x9I5xVkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDO8%2FBujFoqMdYM37cCrcA6thMRjXd8xZk%2BHZ57VY3ryUxVKS2yWUT%2FN8fMgKL1OJbmD6Kvx7MdfIA6SIghCrc72iu99%2FZPgwp%2BcAj4QPhYTDIdT93L%2BY5pvVWN%2FGIvqbG3oKhZR1b9ALD73lDvwqcTv96n51VUBPvj%2BBnm9VbheJHhu8PPoKZmtDzBq3qaz5jRb84bJvkAAGYSFaUZjk%2BXTgl5KZg2ps%2FSXsUuHDx3qmeh%2F2ehF8vqVIKNNtTBunYFUVZjj7Vls9lblqpwtGJFoQPzi6tgr0J4uQywftcWMTiBuiW2VDjzaWdJSHH2G%2B%2BSQ3dywovKl%2FUZSPZBMLM1GgYmSe9MOYYghB94ZldL0A5nTwPt8GJlq1BD8M7pTIPnqhxFN10K0fgwuar5XDX4zhWeLO03XCMto9cRSf1h8wxVQ5T9tItDfIdWmNffPBATlmApLwmLLRPiqNPYznyiSDQ4u6pV1RUUy2wUdtR3RGBW6%2F9WESdNB6nlrRkyr1Ap66%2FIDlHMMz62kIcgd5yYajfiWdxb1jEQZ7XzyJ08M%2BstyrtXo5VXJZsgexOn3mWGkA0vSl9ABJXgAenmpI2VVSb9itokA7dlI1Lnh5HJKJzxp4oDbv9VEBmFN15DzzanTkIqNJWb9Bgx17MImDur0GOqUBh7RvI%2B8gSLduNhgztfIzew0T6WvLbAsSQ2yW%2FWZLgt%2Bp%2Fnj8lyM3%2B82Z6ir1h%2BX4J0OiBO9GWyPmS%2BqhOs1uDhuSwEMN3J9j1GZer7HhNSRtNYIhENu339bIKNRb2d8GWNUrYo%2BE7N2K2WNKJHLK9FxHjpCxdyLA4zz%2FsiHKx5aQ%2F6GYOgqyjbI1P6UgQLGxJ6M0k4cVoL00n%2B8rBybh%2FfI1ZywG&X-Amz-Signature=333690c4c2554fbfe0830f3a9648d04fa84157c836fff1140cd7e5c4329cc8cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJMTJAN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2BOjoS1lXT2MJgsiYAZwlOuJCp9FZ0VkjgiizOUkk9QIgVrLQ5oxcd0HcLAkhFrUhR%2Bz8YDGBmbBKYxl4x9I5xVkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDO8%2FBujFoqMdYM37cCrcA6thMRjXd8xZk%2BHZ57VY3ryUxVKS2yWUT%2FN8fMgKL1OJbmD6Kvx7MdfIA6SIghCrc72iu99%2FZPgwp%2BcAj4QPhYTDIdT93L%2BY5pvVWN%2FGIvqbG3oKhZR1b9ALD73lDvwqcTv96n51VUBPvj%2BBnm9VbheJHhu8PPoKZmtDzBq3qaz5jRb84bJvkAAGYSFaUZjk%2BXTgl5KZg2ps%2FSXsUuHDx3qmeh%2F2ehF8vqVIKNNtTBunYFUVZjj7Vls9lblqpwtGJFoQPzi6tgr0J4uQywftcWMTiBuiW2VDjzaWdJSHH2G%2B%2BSQ3dywovKl%2FUZSPZBMLM1GgYmSe9MOYYghB94ZldL0A5nTwPt8GJlq1BD8M7pTIPnqhxFN10K0fgwuar5XDX4zhWeLO03XCMto9cRSf1h8wxVQ5T9tItDfIdWmNffPBATlmApLwmLLRPiqNPYznyiSDQ4u6pV1RUUy2wUdtR3RGBW6%2F9WESdNB6nlrRkyr1Ap66%2FIDlHMMz62kIcgd5yYajfiWdxb1jEQZ7XzyJ08M%2BstyrtXo5VXJZsgexOn3mWGkA0vSl9ABJXgAenmpI2VVSb9itokA7dlI1Lnh5HJKJzxp4oDbv9VEBmFN15DzzanTkIqNJWb9Bgx17MImDur0GOqUBh7RvI%2B8gSLduNhgztfIzew0T6WvLbAsSQ2yW%2FWZLgt%2Bp%2Fnj8lyM3%2B82Z6ir1h%2BX4J0OiBO9GWyPmS%2BqhOs1uDhuSwEMN3J9j1GZer7HhNSRtNYIhENu339bIKNRb2d8GWNUrYo%2BE7N2K2WNKJHLK9FxHjpCxdyLA4zz%2FsiHKx5aQ%2F6GYOgqyjbI1P6UgQLGxJ6M0k4cVoL00n%2B8rBybh%2FfI1ZywG&X-Amz-Signature=763774de6b4f217147f094ba4f81cea9f98cd61846abaebffc4a0d8f1babcd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
