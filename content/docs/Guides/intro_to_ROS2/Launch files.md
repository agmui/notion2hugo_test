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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECRLVU4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQPBqa%2F1AnJAR04nbKQzjyyKWY9puRpyr66x1KNinD3AiEAkWvYgZk2pE2SmuAPlQSGbF%2BXL3W0TJC%2Bh994yIjGPpIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiBzc5vTfyFZ6vizCrcAw89HL6Wm8uCzleIvgnJJYhWWKf6IqH5k%2F8mqp4p8gaXHp69QIf4A5pimfgsl4KIisKsVDUYAkXi1Sf0PoQYjbmVYmjAfCzGXYZL9S3Y%2B0luLif4YDF%2FordF6seBtaZtV2BgUdWNfbD%2Bg3VScXutrar7FlmKkUoa5chQPyqyCslIP3bT6iuTZYDauM41TyYlbcNnsQeJtRji6LllIUSJwo71ihSNO6uwEyAWPokrNN%2FasKczNAEXpo5Vv5kmsf0ERfdsBoeFF6BVhCobgCovkfGGy%2FI%2F7wrXLV3%2BxTwwl7cb0WDriSoqfJoDmF%2BT5F%2FKCXY6onZdBFdrKXHlOvvXOALZW%2FJYj0va2bDkW6jBVR%2FANqcv%2FvApR%2BvTTBxzRbkZ%2BqiSrwM7koj7RfuWJHI4op%2Fknl06D%2F2Cfk43V%2F0w6bIWrOC7lyFv1Y2%2FCyACa6TlugmPuytLnFsMWd9m%2Bkf7oJ%2FEkPNtiHD9Wyf0jyW3%2FeASsNVZ9laxdCpvvYKI78YhysxCM%2B8M5o%2FIZE%2BmxVEgHTn3vF2lTwpP3pvEIBX18rWIWc7HYTbMKTQljHgmDFuNfq6VfbLIHAXQuGgKqaX9%2BdyVkSASzPAcqJcHrDIC9SRIxSmISA3IJGc1XCb5MIH%2B38EGOqUBIjFXy76wGCo04UawIHYoenpyrAJPWkesm4a9m5xp%2BF0KV3%2BlD0nGDL%2B%2B7hxhf1nOaKGSOhjni7FqD7RUQZzU4eIchFDCsJfVxU5T2KF9Jst6k532BlIYO3pqBh%2BQSgQHhZzrt8NwAONat%2BIc0gZhBTxSm27KiORsZe7VDpq2flZqjZAynTPlh%2BEmsvNEAmafQ%2BocCc49TITsINjzQB%2F%2BQqTgt%2FDz&X-Amz-Signature=0f3a652e9cdbc12dc4ca2a6f438bbe021680e91b25c9f039a0421b0ea4c339e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECRLVU4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQPBqa%2F1AnJAR04nbKQzjyyKWY9puRpyr66x1KNinD3AiEAkWvYgZk2pE2SmuAPlQSGbF%2BXL3W0TJC%2Bh994yIjGPpIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiBzc5vTfyFZ6vizCrcAw89HL6Wm8uCzleIvgnJJYhWWKf6IqH5k%2F8mqp4p8gaXHp69QIf4A5pimfgsl4KIisKsVDUYAkXi1Sf0PoQYjbmVYmjAfCzGXYZL9S3Y%2B0luLif4YDF%2FordF6seBtaZtV2BgUdWNfbD%2Bg3VScXutrar7FlmKkUoa5chQPyqyCslIP3bT6iuTZYDauM41TyYlbcNnsQeJtRji6LllIUSJwo71ihSNO6uwEyAWPokrNN%2FasKczNAEXpo5Vv5kmsf0ERfdsBoeFF6BVhCobgCovkfGGy%2FI%2F7wrXLV3%2BxTwwl7cb0WDriSoqfJoDmF%2BT5F%2FKCXY6onZdBFdrKXHlOvvXOALZW%2FJYj0va2bDkW6jBVR%2FANqcv%2FvApR%2BvTTBxzRbkZ%2BqiSrwM7koj7RfuWJHI4op%2Fknl06D%2F2Cfk43V%2F0w6bIWrOC7lyFv1Y2%2FCyACa6TlugmPuytLnFsMWd9m%2Bkf7oJ%2FEkPNtiHD9Wyf0jyW3%2FeASsNVZ9laxdCpvvYKI78YhysxCM%2B8M5o%2FIZE%2BmxVEgHTn3vF2lTwpP3pvEIBX18rWIWc7HYTbMKTQljHgmDFuNfq6VfbLIHAXQuGgKqaX9%2BdyVkSASzPAcqJcHrDIC9SRIxSmISA3IJGc1XCb5MIH%2B38EGOqUBIjFXy76wGCo04UawIHYoenpyrAJPWkesm4a9m5xp%2BF0KV3%2BlD0nGDL%2B%2B7hxhf1nOaKGSOhjni7FqD7RUQZzU4eIchFDCsJfVxU5T2KF9Jst6k532BlIYO3pqBh%2BQSgQHhZzrt8NwAONat%2BIc0gZhBTxSm27KiORsZe7VDpq2flZqjZAynTPlh%2BEmsvNEAmafQ%2BocCc49TITsINjzQB%2F%2BQqTgt%2FDz&X-Amz-Signature=9ad034b14532a68df04f059d4596f558bd361422bf866bfc130494e917f2cf37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECRLVU4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICQPBqa%2F1AnJAR04nbKQzjyyKWY9puRpyr66x1KNinD3AiEAkWvYgZk2pE2SmuAPlQSGbF%2BXL3W0TJC%2Bh994yIjGPpIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiBzc5vTfyFZ6vizCrcAw89HL6Wm8uCzleIvgnJJYhWWKf6IqH5k%2F8mqp4p8gaXHp69QIf4A5pimfgsl4KIisKsVDUYAkXi1Sf0PoQYjbmVYmjAfCzGXYZL9S3Y%2B0luLif4YDF%2FordF6seBtaZtV2BgUdWNfbD%2Bg3VScXutrar7FlmKkUoa5chQPyqyCslIP3bT6iuTZYDauM41TyYlbcNnsQeJtRji6LllIUSJwo71ihSNO6uwEyAWPokrNN%2FasKczNAEXpo5Vv5kmsf0ERfdsBoeFF6BVhCobgCovkfGGy%2FI%2F7wrXLV3%2BxTwwl7cb0WDriSoqfJoDmF%2BT5F%2FKCXY6onZdBFdrKXHlOvvXOALZW%2FJYj0va2bDkW6jBVR%2FANqcv%2FvApR%2BvTTBxzRbkZ%2BqiSrwM7koj7RfuWJHI4op%2Fknl06D%2F2Cfk43V%2F0w6bIWrOC7lyFv1Y2%2FCyACa6TlugmPuytLnFsMWd9m%2Bkf7oJ%2FEkPNtiHD9Wyf0jyW3%2FeASsNVZ9laxdCpvvYKI78YhysxCM%2B8M5o%2FIZE%2BmxVEgHTn3vF2lTwpP3pvEIBX18rWIWc7HYTbMKTQljHgmDFuNfq6VfbLIHAXQuGgKqaX9%2BdyVkSASzPAcqJcHrDIC9SRIxSmISA3IJGc1XCb5MIH%2B38EGOqUBIjFXy76wGCo04UawIHYoenpyrAJPWkesm4a9m5xp%2BF0KV3%2BlD0nGDL%2B%2B7hxhf1nOaKGSOhjni7FqD7RUQZzU4eIchFDCsJfVxU5T2KF9Jst6k532BlIYO3pqBh%2BQSgQHhZzrt8NwAONat%2BIc0gZhBTxSm27KiORsZe7VDpq2flZqjZAynTPlh%2BEmsvNEAmafQ%2BocCc49TITsINjzQB%2F%2BQqTgt%2FDz&X-Amz-Signature=efcd35fc13028823f77249753e20ab650b7f567059a4b8ef5c4c951bba70a572&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
