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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFCSZVD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCOgvpYl7PqOiVzXExsRti%2BK9MHJ9XN4H8hlyiz5nWhnQIgIkpuALslNa8KF1i6D%2BYLOQx1bBQE7pKRQuPtNv%2FQVFEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDE%2BphmWCTJBhylwfzircA8pycqyIVby6y0mMmtv4BqlhmwnrTPFikWyoG3NK8AZ2hdKBjF17rwE2DINQM78wHfPtumwAG5aU9Rw0iEU8TrIzRYSj2ARt1vEmb%2FdIU3NuNnyrr5l5Qlv9bgIg%2BwxeGe2w4dTJIPKpiLdEahd43MQwACTXDOOcnCCS4ae61lCME%2BGelS15SKmOY%2B%2Fj%2FYZupVV6%2FttWkRD%2BvLF%2F44lEg8CrJChRaJSr3nyWnMAaADwE9r3Drl2X5s231Lc0egRAnBE8kD1YUK5rCnDBYsZfKHFJa2yx0aQtrOeEqzDrw%2BaPUO1a2Nub1oxbXCwYwAGKVGsEOzZTVv0VcSMiwWL%2Brp1G9cgV%2BAsZteVBWt5XJmA0gdRX4ZRfzqV4jvbq7jCO0rH35moq%2Fwn%2B2leWYF8ZxFCmJ0Xp2bZaD17VdftQB3wSwPe1lo7F1i3ZfHwa8GdpsBoVPlciQmktsTmD%2Fh%2FcObEbIKNxdlF9qOtyf6njstdxo%2FpJ%2Fk%2FCMVS2SISyGHFpvZ0xPTDVkzW1bMa%2BGOUr3C36gWT1besCu%2F7uqR89bvHJ6hqnfPWUsu4t9gv7iiZ1zqd4vcCpRShnXo%2Bb5wMgqnfh5564rD01vRO%2FUbO0CkrMS38HA9fCC7K1z6qMMODss8IGOqUBCQyLMG1bWktxbNqsknKPsWqwuA%2Frl0V%2BZ1SE7FxC2IIJL8PYtW8EFKiviYsk%2FNWw82OjA%2FPWXBINPt81Pb7aRGDBoVPGz71VbZgxFK86yWBT8cENd2uNFWTYslMqcFPDk5CsW%2B9hWafiyxgJROpYodP0OOKB5GSUnOuCN6KgyR1iN0nyNsfHI1qVrbmpWa0Axttn43WkoXtU4BklnWOIDJw7J32L&X-Amz-Signature=c05410bb4e2426509a272c99a155cbac817f1f6b84b309b1af23e60b965a09cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFCSZVD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCOgvpYl7PqOiVzXExsRti%2BK9MHJ9XN4H8hlyiz5nWhnQIgIkpuALslNa8KF1i6D%2BYLOQx1bBQE7pKRQuPtNv%2FQVFEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDE%2BphmWCTJBhylwfzircA8pycqyIVby6y0mMmtv4BqlhmwnrTPFikWyoG3NK8AZ2hdKBjF17rwE2DINQM78wHfPtumwAG5aU9Rw0iEU8TrIzRYSj2ARt1vEmb%2FdIU3NuNnyrr5l5Qlv9bgIg%2BwxeGe2w4dTJIPKpiLdEahd43MQwACTXDOOcnCCS4ae61lCME%2BGelS15SKmOY%2B%2Fj%2FYZupVV6%2FttWkRD%2BvLF%2F44lEg8CrJChRaJSr3nyWnMAaADwE9r3Drl2X5s231Lc0egRAnBE8kD1YUK5rCnDBYsZfKHFJa2yx0aQtrOeEqzDrw%2BaPUO1a2Nub1oxbXCwYwAGKVGsEOzZTVv0VcSMiwWL%2Brp1G9cgV%2BAsZteVBWt5XJmA0gdRX4ZRfzqV4jvbq7jCO0rH35moq%2Fwn%2B2leWYF8ZxFCmJ0Xp2bZaD17VdftQB3wSwPe1lo7F1i3ZfHwa8GdpsBoVPlciQmktsTmD%2Fh%2FcObEbIKNxdlF9qOtyf6njstdxo%2FpJ%2Fk%2FCMVS2SISyGHFpvZ0xPTDVkzW1bMa%2BGOUr3C36gWT1besCu%2F7uqR89bvHJ6hqnfPWUsu4t9gv7iiZ1zqd4vcCpRShnXo%2Bb5wMgqnfh5564rD01vRO%2FUbO0CkrMS38HA9fCC7K1z6qMMODss8IGOqUBCQyLMG1bWktxbNqsknKPsWqwuA%2Frl0V%2BZ1SE7FxC2IIJL8PYtW8EFKiviYsk%2FNWw82OjA%2FPWXBINPt81Pb7aRGDBoVPGz71VbZgxFK86yWBT8cENd2uNFWTYslMqcFPDk5CsW%2B9hWafiyxgJROpYodP0OOKB5GSUnOuCN6KgyR1iN0nyNsfHI1qVrbmpWa0Axttn43WkoXtU4BklnWOIDJw7J32L&X-Amz-Signature=ba13e6f2fb0be7b7e7f79f6a089b1879665ad5ef64e25a6951b479ad0e0ce035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCFCSZVD%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCOgvpYl7PqOiVzXExsRti%2BK9MHJ9XN4H8hlyiz5nWhnQIgIkpuALslNa8KF1i6D%2BYLOQx1bBQE7pKRQuPtNv%2FQVFEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDE%2BphmWCTJBhylwfzircA8pycqyIVby6y0mMmtv4BqlhmwnrTPFikWyoG3NK8AZ2hdKBjF17rwE2DINQM78wHfPtumwAG5aU9Rw0iEU8TrIzRYSj2ARt1vEmb%2FdIU3NuNnyrr5l5Qlv9bgIg%2BwxeGe2w4dTJIPKpiLdEahd43MQwACTXDOOcnCCS4ae61lCME%2BGelS15SKmOY%2B%2Fj%2FYZupVV6%2FttWkRD%2BvLF%2F44lEg8CrJChRaJSr3nyWnMAaADwE9r3Drl2X5s231Lc0egRAnBE8kD1YUK5rCnDBYsZfKHFJa2yx0aQtrOeEqzDrw%2BaPUO1a2Nub1oxbXCwYwAGKVGsEOzZTVv0VcSMiwWL%2Brp1G9cgV%2BAsZteVBWt5XJmA0gdRX4ZRfzqV4jvbq7jCO0rH35moq%2Fwn%2B2leWYF8ZxFCmJ0Xp2bZaD17VdftQB3wSwPe1lo7F1i3ZfHwa8GdpsBoVPlciQmktsTmD%2Fh%2FcObEbIKNxdlF9qOtyf6njstdxo%2FpJ%2Fk%2FCMVS2SISyGHFpvZ0xPTDVkzW1bMa%2BGOUr3C36gWT1besCu%2F7uqR89bvHJ6hqnfPWUsu4t9gv7iiZ1zqd4vcCpRShnXo%2Bb5wMgqnfh5564rD01vRO%2FUbO0CkrMS38HA9fCC7K1z6qMMODss8IGOqUBCQyLMG1bWktxbNqsknKPsWqwuA%2Frl0V%2BZ1SE7FxC2IIJL8PYtW8EFKiviYsk%2FNWw82OjA%2FPWXBINPt81Pb7aRGDBoVPGz71VbZgxFK86yWBT8cENd2uNFWTYslMqcFPDk5CsW%2B9hWafiyxgJROpYodP0OOKB5GSUnOuCN6KgyR1iN0nyNsfHI1qVrbmpWa0Axttn43WkoXtU4BklnWOIDJw7J32L&X-Amz-Signature=9566ec8bbeb994e7a4e2b039ada2f09c86f4e350eed86e1b3da042d903c9ac64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
