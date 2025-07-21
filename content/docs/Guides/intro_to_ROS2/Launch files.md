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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PH6MDCY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnSgqyqRMOtUaivyFG8lAumpm1%2Fa5GbAtNPgTafGX%2BEAIgAbtqNa9vwu6h2a1FqQ2BZUwxgdGXCg%2Fgmn112FhZkUwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJZchlj3p7w38sd1CrcA44pXAAZf0qoLMETT8%2Boav4Sj3hyTXkf%2BqSCrVTBMA8391u%2FaCXVCFhQj9L1zrFadRUamNMMtq39UThcEajdJccuqtEhPAmFqjUXJKsZ%2B4YK54T4jxY7RstLk9H1ugbjcR71ELqcOkwS3DbKrWKOrOnMPvyKtEyGELlgalTImOfBcrORCQ9LgaxYQHLY%2Bx57xXI2%2FNLW6qawkXy%2B7DdHhDocoQtWPOerAFzY%2FF%2Fgt0rCz7TaqZ%2B7FsmquDMmrnTVjDBxXEkcTrQPvgzz%2FDBffpUmhXJByswoEz6O%2BZT%2Fabs8gX%2FUHMML5Dwsp3pwUmQ%2FTqcPzkfpRiMLnQKBm6RW9oJdzTsyQQCkQ4x%2BnMxOqv65YxF55IuxVaIVwID7jU2%2B9GrQh4nD1tNttGreHZTUJBTHaYJSwcoS3asU5htVTGyPysEioZgGFWjL1w02KVBiLt35Ezo5KTH4%2BHVT7XbA46NzhTiFdax10WU87iXf9TUC8zj3k%2BvBBHcPkSivbfEl2H7RrAnf4SkCIzj8SJUfRtWesPm%2F6Koi%2Fydqv8pqgZOlkAefPn5GkfEf4Ev8jtV%2F%2FTwUbnUmus6UReuB22VQI7tdAbX4NFz6A4JawyKMKRAjQDY9fyAYDWra2%2Fm2MLvH9sMGOqUB1Wexvdy%2FQB%2FwwXFpcdQR1nULADRSOJDLcgN9%2B6YhwUen3Agf8V0uHaWrPGlvDE%2FW9tVONLvLUpHWRRWaj4cLcBY84DFaPp3qGPKYZojsbUWfZGbgNAIXIQAjX5gRk%2FjHAQIp1ZbKP2aLWbsIuemMEs7qiMMIcV9fS22bxYWLisk0IGyErcQt5w2QdGJXpuXSavSMLmcc%2BZQe6W6oEJDKAkZCmXZk&X-Amz-Signature=8fcfae3f852d9d94e66016142753e88aa3917d53767e1e4c01e082809e424c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PH6MDCY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnSgqyqRMOtUaivyFG8lAumpm1%2Fa5GbAtNPgTafGX%2BEAIgAbtqNa9vwu6h2a1FqQ2BZUwxgdGXCg%2Fgmn112FhZkUwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJZchlj3p7w38sd1CrcA44pXAAZf0qoLMETT8%2Boav4Sj3hyTXkf%2BqSCrVTBMA8391u%2FaCXVCFhQj9L1zrFadRUamNMMtq39UThcEajdJccuqtEhPAmFqjUXJKsZ%2B4YK54T4jxY7RstLk9H1ugbjcR71ELqcOkwS3DbKrWKOrOnMPvyKtEyGELlgalTImOfBcrORCQ9LgaxYQHLY%2Bx57xXI2%2FNLW6qawkXy%2B7DdHhDocoQtWPOerAFzY%2FF%2Fgt0rCz7TaqZ%2B7FsmquDMmrnTVjDBxXEkcTrQPvgzz%2FDBffpUmhXJByswoEz6O%2BZT%2Fabs8gX%2FUHMML5Dwsp3pwUmQ%2FTqcPzkfpRiMLnQKBm6RW9oJdzTsyQQCkQ4x%2BnMxOqv65YxF55IuxVaIVwID7jU2%2B9GrQh4nD1tNttGreHZTUJBTHaYJSwcoS3asU5htVTGyPysEioZgGFWjL1w02KVBiLt35Ezo5KTH4%2BHVT7XbA46NzhTiFdax10WU87iXf9TUC8zj3k%2BvBBHcPkSivbfEl2H7RrAnf4SkCIzj8SJUfRtWesPm%2F6Koi%2Fydqv8pqgZOlkAefPn5GkfEf4Ev8jtV%2F%2FTwUbnUmus6UReuB22VQI7tdAbX4NFz6A4JawyKMKRAjQDY9fyAYDWra2%2Fm2MLvH9sMGOqUB1Wexvdy%2FQB%2FwwXFpcdQR1nULADRSOJDLcgN9%2B6YhwUen3Agf8V0uHaWrPGlvDE%2FW9tVONLvLUpHWRRWaj4cLcBY84DFaPp3qGPKYZojsbUWfZGbgNAIXIQAjX5gRk%2FjHAQIp1ZbKP2aLWbsIuemMEs7qiMMIcV9fS22bxYWLisk0IGyErcQt5w2QdGJXpuXSavSMLmcc%2BZQe6W6oEJDKAkZCmXZk&X-Amz-Signature=b5fb8f8033b569c3a22185c2998f1869ee24164641a882d3a446337b6329dd1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PH6MDCY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnSgqyqRMOtUaivyFG8lAumpm1%2Fa5GbAtNPgTafGX%2BEAIgAbtqNa9vwu6h2a1FqQ2BZUwxgdGXCg%2Fgmn112FhZkUwqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJZchlj3p7w38sd1CrcA44pXAAZf0qoLMETT8%2Boav4Sj3hyTXkf%2BqSCrVTBMA8391u%2FaCXVCFhQj9L1zrFadRUamNMMtq39UThcEajdJccuqtEhPAmFqjUXJKsZ%2B4YK54T4jxY7RstLk9H1ugbjcR71ELqcOkwS3DbKrWKOrOnMPvyKtEyGELlgalTImOfBcrORCQ9LgaxYQHLY%2Bx57xXI2%2FNLW6qawkXy%2B7DdHhDocoQtWPOerAFzY%2FF%2Fgt0rCz7TaqZ%2B7FsmquDMmrnTVjDBxXEkcTrQPvgzz%2FDBffpUmhXJByswoEz6O%2BZT%2Fabs8gX%2FUHMML5Dwsp3pwUmQ%2FTqcPzkfpRiMLnQKBm6RW9oJdzTsyQQCkQ4x%2BnMxOqv65YxF55IuxVaIVwID7jU2%2B9GrQh4nD1tNttGreHZTUJBTHaYJSwcoS3asU5htVTGyPysEioZgGFWjL1w02KVBiLt35Ezo5KTH4%2BHVT7XbA46NzhTiFdax10WU87iXf9TUC8zj3k%2BvBBHcPkSivbfEl2H7RrAnf4SkCIzj8SJUfRtWesPm%2F6Koi%2Fydqv8pqgZOlkAefPn5GkfEf4Ev8jtV%2F%2FTwUbnUmus6UReuB22VQI7tdAbX4NFz6A4JawyKMKRAjQDY9fyAYDWra2%2Fm2MLvH9sMGOqUB1Wexvdy%2FQB%2FwwXFpcdQR1nULADRSOJDLcgN9%2B6YhwUen3Agf8V0uHaWrPGlvDE%2FW9tVONLvLUpHWRRWaj4cLcBY84DFaPp3qGPKYZojsbUWfZGbgNAIXIQAjX5gRk%2FjHAQIp1ZbKP2aLWbsIuemMEs7qiMMIcV9fS22bxYWLisk0IGyErcQt5w2QdGJXpuXSavSMLmcc%2BZQe6W6oEJDKAkZCmXZk&X-Amz-Signature=cf37b3498da4add20acb283d8c50837c871a876b72c095c0b2caa02d2772d158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
