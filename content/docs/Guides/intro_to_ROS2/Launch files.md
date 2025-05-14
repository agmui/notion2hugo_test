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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632OCVUDX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDMeaS15WFkLhn4hadoWpEtZAQyqc1VbfALvEYKIvBDCQIhAPMXhgdqtmAraz0JU21LzbCmcw1i1OUKyc2EMTri4NC0Kv8DCBwQABoMNjM3NDIzMTgzODA1IgzJNXf3HTgr7IuhHkgq3ANrnBAG20NfjtqgtZZg7zZLtOIdIOXNKBKOniD2qKiVQe4y0hkpglw%2F6oTXT7dOZTdbMD2rghIeAgzTkBN29nBhAiWu9vgUscX%2F0%2Fh940k8nfpLfun2TzeukxzXhZH4zzctudfu26N2SWPBwxx3pYcNiyyGyJOO2QJcSf16fmbcGv0Z%2FC9o%2FRlu%2BZY2rkJrVr4IYgyYvD6INj3npqhkkW5a2rYZrQpR2iqIjbU8fKoLmtHtmDL%2FCgnJnAdbt%2BT95hDeRoPAQf2zH6QVpL0YCSqWqWrAH%2FFXfbitavFUPiQ2LUpfugmgl0QpIErwkf6Bs1utFnPWmysbBy5uGmSj%2BK7KaCcvywp7wYiUdOBs47SbPlmUGKTELuwLHDYc9I3njhpHYaAEj%2BPiWg6eMjVyHIJ8tkNgDLbK3NeIZyh%2FrmcMyn6AUTxzhIlq2LZOglMCO%2BIsK5q5GOnJ%2B1qVSOw5klqpB2Yb8CESyoKtGf0GFIspCeKP8Pq81Xjgws%2BNSaW8c5aP1k%2BMAJDHjzddCEvtJu%2BNWUnPaU%2BZQ0%2FzRp6flZ0nzFWgXG6oMfOTm24yGeiUUiTQqgeICEG72B7uhpu8%2FiBDEkhQjspKxqzVu6v9o%2FEgUG0UJHcMLtAL0BT7SzCwz5PBBjqkAWUGAl29kMEXpRWBIRf4LwMf1T7V3pZga%2BQXM67GbDNo6lyshG673wUzHCR%2BZ5CcboBYJ4FISw9RKRqbDktCjRmywB2drba0bcXQb1D2ZkWD3eB38I7aZdm1Vx%2FBjgU297yDMJQfJX41zh2XN09DRNPflROJoXlCvKShHF%2BOiC7PMuXy%2FFXYm7pElB6L4M8mlun%2Bylcy8gZcmEPZA7aKyHVd5JfM&X-Amz-Signature=3f6c584d3ac7f8527a4df08bfff8ed7210ca884562748d316686707ed5eba464&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632OCVUDX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDMeaS15WFkLhn4hadoWpEtZAQyqc1VbfALvEYKIvBDCQIhAPMXhgdqtmAraz0JU21LzbCmcw1i1OUKyc2EMTri4NC0Kv8DCBwQABoMNjM3NDIzMTgzODA1IgzJNXf3HTgr7IuhHkgq3ANrnBAG20NfjtqgtZZg7zZLtOIdIOXNKBKOniD2qKiVQe4y0hkpglw%2F6oTXT7dOZTdbMD2rghIeAgzTkBN29nBhAiWu9vgUscX%2F0%2Fh940k8nfpLfun2TzeukxzXhZH4zzctudfu26N2SWPBwxx3pYcNiyyGyJOO2QJcSf16fmbcGv0Z%2FC9o%2FRlu%2BZY2rkJrVr4IYgyYvD6INj3npqhkkW5a2rYZrQpR2iqIjbU8fKoLmtHtmDL%2FCgnJnAdbt%2BT95hDeRoPAQf2zH6QVpL0YCSqWqWrAH%2FFXfbitavFUPiQ2LUpfugmgl0QpIErwkf6Bs1utFnPWmysbBy5uGmSj%2BK7KaCcvywp7wYiUdOBs47SbPlmUGKTELuwLHDYc9I3njhpHYaAEj%2BPiWg6eMjVyHIJ8tkNgDLbK3NeIZyh%2FrmcMyn6AUTxzhIlq2LZOglMCO%2BIsK5q5GOnJ%2B1qVSOw5klqpB2Yb8CESyoKtGf0GFIspCeKP8Pq81Xjgws%2BNSaW8c5aP1k%2BMAJDHjzddCEvtJu%2BNWUnPaU%2BZQ0%2FzRp6flZ0nzFWgXG6oMfOTm24yGeiUUiTQqgeICEG72B7uhpu8%2FiBDEkhQjspKxqzVu6v9o%2FEgUG0UJHcMLtAL0BT7SzCwz5PBBjqkAWUGAl29kMEXpRWBIRf4LwMf1T7V3pZga%2BQXM67GbDNo6lyshG673wUzHCR%2BZ5CcboBYJ4FISw9RKRqbDktCjRmywB2drba0bcXQb1D2ZkWD3eB38I7aZdm1Vx%2FBjgU297yDMJQfJX41zh2XN09DRNPflROJoXlCvKShHF%2BOiC7PMuXy%2FFXYm7pElB6L4M8mlun%2Bylcy8gZcmEPZA7aKyHVd5JfM&X-Amz-Signature=175cdf0439bbb0bc2c8399a121b3a2b0b401c0c51dc584e5628b06adeaeee5d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632OCVUDX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDMeaS15WFkLhn4hadoWpEtZAQyqc1VbfALvEYKIvBDCQIhAPMXhgdqtmAraz0JU21LzbCmcw1i1OUKyc2EMTri4NC0Kv8DCBwQABoMNjM3NDIzMTgzODA1IgzJNXf3HTgr7IuhHkgq3ANrnBAG20NfjtqgtZZg7zZLtOIdIOXNKBKOniD2qKiVQe4y0hkpglw%2F6oTXT7dOZTdbMD2rghIeAgzTkBN29nBhAiWu9vgUscX%2F0%2Fh940k8nfpLfun2TzeukxzXhZH4zzctudfu26N2SWPBwxx3pYcNiyyGyJOO2QJcSf16fmbcGv0Z%2FC9o%2FRlu%2BZY2rkJrVr4IYgyYvD6INj3npqhkkW5a2rYZrQpR2iqIjbU8fKoLmtHtmDL%2FCgnJnAdbt%2BT95hDeRoPAQf2zH6QVpL0YCSqWqWrAH%2FFXfbitavFUPiQ2LUpfugmgl0QpIErwkf6Bs1utFnPWmysbBy5uGmSj%2BK7KaCcvywp7wYiUdOBs47SbPlmUGKTELuwLHDYc9I3njhpHYaAEj%2BPiWg6eMjVyHIJ8tkNgDLbK3NeIZyh%2FrmcMyn6AUTxzhIlq2LZOglMCO%2BIsK5q5GOnJ%2B1qVSOw5klqpB2Yb8CESyoKtGf0GFIspCeKP8Pq81Xjgws%2BNSaW8c5aP1k%2BMAJDHjzddCEvtJu%2BNWUnPaU%2BZQ0%2FzRp6flZ0nzFWgXG6oMfOTm24yGeiUUiTQqgeICEG72B7uhpu8%2FiBDEkhQjspKxqzVu6v9o%2FEgUG0UJHcMLtAL0BT7SzCwz5PBBjqkAWUGAl29kMEXpRWBIRf4LwMf1T7V3pZga%2BQXM67GbDNo6lyshG673wUzHCR%2BZ5CcboBYJ4FISw9RKRqbDktCjRmywB2drba0bcXQb1D2ZkWD3eB38I7aZdm1Vx%2FBjgU297yDMJQfJX41zh2XN09DRNPflROJoXlCvKShHF%2BOiC7PMuXy%2FFXYm7pElB6L4M8mlun%2Bylcy8gZcmEPZA7aKyHVd5JfM&X-Amz-Signature=32437d558ed23c66101f943f6c9ca93176de039b7314d85a0dd7f05039f3e010&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
