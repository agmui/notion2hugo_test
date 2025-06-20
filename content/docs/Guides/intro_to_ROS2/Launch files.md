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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DBU67Y%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDBTemH6Mnmk54RztfePwxWHGRZXTK1LGdU%2FXFFJ1YGAiBy2K6Kwcl5EHf%2BZYbvIc6pLLDFsCmCp04BexcIrN%2BzdiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0mwNUyf8bt5WlE71KtwD62WIIpa1I7L%2BPK4NblzF0AxcIFbQw4wBbgY3E1Mp8%2Bmgh0cwc%2Bwx8l08BsSXE6IBVl4WII%2BkHx89o2aM887at0nqqzczmp5JpapRJTCjWp970LHA2pH2zj%2BGxak8NG%2BQQ%2FfzAAdjf5skyIQvinA7qAfSNqysrmuXLWDq2BP8GqhODS%2FCkZVqfJtlsbJN3wJzWSRW0Isu%2FPGT3yj9oVlB%2BV7fg%2BikFEfpK5HpTQswCwnggteT%2BQzqYQAHHddDCFXTgphpi8EKj%2Bc8hUqjHAO95s0Li2Njcza6KD83FsDLYD0IU%2B5tSjZAY9iX%2BlQ5BMRJeE67SFydpssLEoPBtyvYPeXeleHYKlqN0uqRmcI%2BvtprwOOUD6fEs0zgL3Rko27MQZ%2Fc1o7kf3TX2981IPjrzpygpwTNrrUROj282sRwa3qJAtPq9gu1qvMQO8dvpzfuKDr1j1Afz52xrlEoqQ5z2yMKZdQ%2B6PTiCSwf%2Fi%2BEPtK7ibuKVw5QxVdmw77NXfbBv0KsX9tCg8H5TRbnzvhWFAVNYL%2BdyQAppJ%2FtUUlhsQa7rMclIlYK%2Fz8CAzUwS5hkOA3prkfbehMXDeoDWQfcf1smhx63FmL4AyI1llhPbmqca66AfbAgTZtbh%2B8wtvHUwgY6pgG8TaLPwwv3LWzHp4lrbk43bGvxctMVM9NO9vL3ksimSLgM%2BLvVui4hx6u%2B1ECOJhGHsrjuMFD4h%2FLHH7WCoYM0ICmpY7H3k4rfyuEglOVLeRV%2FZ%2BWFBArXCVDYZmp%2BQWsez57p4FQwGUPpIg89WijIfn8ZgUqK527RhCwQ%2Bv8RlG5JgE5psr%2B1p3ot%2B6k9cJp5aBjZ8IPxSQm2WZeqnq82DVWj1avJ&X-Amz-Signature=4ffbbd8f7f879b4c0b77f157317370fb9709c7dc778a180cce5797e299f0e19a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DBU67Y%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDBTemH6Mnmk54RztfePwxWHGRZXTK1LGdU%2FXFFJ1YGAiBy2K6Kwcl5EHf%2BZYbvIc6pLLDFsCmCp04BexcIrN%2BzdiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0mwNUyf8bt5WlE71KtwD62WIIpa1I7L%2BPK4NblzF0AxcIFbQw4wBbgY3E1Mp8%2Bmgh0cwc%2Bwx8l08BsSXE6IBVl4WII%2BkHx89o2aM887at0nqqzczmp5JpapRJTCjWp970LHA2pH2zj%2BGxak8NG%2BQQ%2FfzAAdjf5skyIQvinA7qAfSNqysrmuXLWDq2BP8GqhODS%2FCkZVqfJtlsbJN3wJzWSRW0Isu%2FPGT3yj9oVlB%2BV7fg%2BikFEfpK5HpTQswCwnggteT%2BQzqYQAHHddDCFXTgphpi8EKj%2Bc8hUqjHAO95s0Li2Njcza6KD83FsDLYD0IU%2B5tSjZAY9iX%2BlQ5BMRJeE67SFydpssLEoPBtyvYPeXeleHYKlqN0uqRmcI%2BvtprwOOUD6fEs0zgL3Rko27MQZ%2Fc1o7kf3TX2981IPjrzpygpwTNrrUROj282sRwa3qJAtPq9gu1qvMQO8dvpzfuKDr1j1Afz52xrlEoqQ5z2yMKZdQ%2B6PTiCSwf%2Fi%2BEPtK7ibuKVw5QxVdmw77NXfbBv0KsX9tCg8H5TRbnzvhWFAVNYL%2BdyQAppJ%2FtUUlhsQa7rMclIlYK%2Fz8CAzUwS5hkOA3prkfbehMXDeoDWQfcf1smhx63FmL4AyI1llhPbmqca66AfbAgTZtbh%2B8wtvHUwgY6pgG8TaLPwwv3LWzHp4lrbk43bGvxctMVM9NO9vL3ksimSLgM%2BLvVui4hx6u%2B1ECOJhGHsrjuMFD4h%2FLHH7WCoYM0ICmpY7H3k4rfyuEglOVLeRV%2FZ%2BWFBArXCVDYZmp%2BQWsez57p4FQwGUPpIg89WijIfn8ZgUqK527RhCwQ%2Bv8RlG5JgE5psr%2B1p3ot%2B6k9cJp5aBjZ8IPxSQm2WZeqnq82DVWj1avJ&X-Amz-Signature=e9ac59fdf57b587f0359d2eb76d5845ced1a5d40adf3c22d19d60f9597a3efa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DBU67Y%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDBTemH6Mnmk54RztfePwxWHGRZXTK1LGdU%2FXFFJ1YGAiBy2K6Kwcl5EHf%2BZYbvIc6pLLDFsCmCp04BexcIrN%2BzdiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0mwNUyf8bt5WlE71KtwD62WIIpa1I7L%2BPK4NblzF0AxcIFbQw4wBbgY3E1Mp8%2Bmgh0cwc%2Bwx8l08BsSXE6IBVl4WII%2BkHx89o2aM887at0nqqzczmp5JpapRJTCjWp970LHA2pH2zj%2BGxak8NG%2BQQ%2FfzAAdjf5skyIQvinA7qAfSNqysrmuXLWDq2BP8GqhODS%2FCkZVqfJtlsbJN3wJzWSRW0Isu%2FPGT3yj9oVlB%2BV7fg%2BikFEfpK5HpTQswCwnggteT%2BQzqYQAHHddDCFXTgphpi8EKj%2Bc8hUqjHAO95s0Li2Njcza6KD83FsDLYD0IU%2B5tSjZAY9iX%2BlQ5BMRJeE67SFydpssLEoPBtyvYPeXeleHYKlqN0uqRmcI%2BvtprwOOUD6fEs0zgL3Rko27MQZ%2Fc1o7kf3TX2981IPjrzpygpwTNrrUROj282sRwa3qJAtPq9gu1qvMQO8dvpzfuKDr1j1Afz52xrlEoqQ5z2yMKZdQ%2B6PTiCSwf%2Fi%2BEPtK7ibuKVw5QxVdmw77NXfbBv0KsX9tCg8H5TRbnzvhWFAVNYL%2BdyQAppJ%2FtUUlhsQa7rMclIlYK%2Fz8CAzUwS5hkOA3prkfbehMXDeoDWQfcf1smhx63FmL4AyI1llhPbmqca66AfbAgTZtbh%2B8wtvHUwgY6pgG8TaLPwwv3LWzHp4lrbk43bGvxctMVM9NO9vL3ksimSLgM%2BLvVui4hx6u%2B1ECOJhGHsrjuMFD4h%2FLHH7WCoYM0ICmpY7H3k4rfyuEglOVLeRV%2FZ%2BWFBArXCVDYZmp%2BQWsez57p4FQwGUPpIg89WijIfn8ZgUqK527RhCwQ%2Bv8RlG5JgE5psr%2B1p3ot%2B6k9cJp5aBjZ8IPxSQm2WZeqnq82DVWj1avJ&X-Amz-Signature=d3cdba61cc559ec65a6e31d0f5a1d2067ce6c2e9fd1ab7dceccc77ea00e4d0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
