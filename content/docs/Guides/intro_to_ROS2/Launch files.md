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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI6P6P4J%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIA%2BxJzO%2FDomieHVhvB8QCMDVLX4nY95QjHu2AGHkyDZkAiEAqNQcEBbihYvWtJVLswXmxfeIBT48bSHwvKpup0Ju1X4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnCAPiyPtnDZg5%2FuircA%2B4QKdPJ04tInQHqFgYP4HiAEX1wIVI%2F64FwLRS8sx4RA%2BPh5CXwlkUZkVgEogRiDEY8t8CDQ%2Fu2K328eMAfpHECPcJRjHlpUTxMsaJDawJnijr4ipIqWF4KEWqHDKar0jMvJRoeTxpVQWMh4G6fwPR6chvqPstr54%2BD4j2TCAOGdq%2FVXTni92E0H%2FQJpWu7pU3mTZzo0Q30deaA2Iv%2FJIGXKC5RAkrBHPdhu7FaGh6kg2XVaRinI6YX2cN9obl4thZ0ABUL0yF3SorRN9FkLjPZN15bgd7F%2FFrtuZI740UB41hmApDwF5c65sH%2Fxwu3xcmzyT0Os%2FLUR90a35bowcOhrotjjuHfdwdRlANiDUfi3R3cXpK2pVu9MQNBSkJWePZSYvDFfkln8WHcwfDno04ipI75qHn9QT84wVkp3vv7GbekunXFH11VNwJg5eNi%2BcmgogkEA7rT56Cdo5R9n8Xs2gMuv%2FX9%2F%2FwdD%2BIegoIpai5mDIa6N7Kk98dsLVQ2VEQGrM93TWs48lZK75DpHOrvOgHPL%2BO2KMzxaNBOrExDEQclHbp6CDzGZAsnRxnD6BvmsjzpgnSXnQDY6%2B2gTJhzJ7uqUgLzzbRXk5dsP89wGqM%2BBcTDL129xjKeMI%2F9pcAGOqUBnSdAZkAmTziyP6l%2FrtxLGi9RWX457RRHAhofuv7eQcG6N4hrhT%2F8DrBg8En8GwsyL4pS7goUDdEFA4EgGvSW7ZalIGhAbTQDxN6ZT2ie1ifbNhsCoaYsr56zC6p7%2Bahf5kjIBgO7ZnYGtizTmonxSTCQaLUq%2B%2Fmp8UvDckLmJ%2F%2BqvmFv%2Bu%2FSQynMHssFLrztkfxNTKACaJZYu3bOn0%2F%2B2i0PFUk%2B&X-Amz-Signature=ccfb66f5fa56a6fe43e0f0199ee206a2ee1480ba4571ecdb068c0f524e8da8af&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI6P6P4J%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIA%2BxJzO%2FDomieHVhvB8QCMDVLX4nY95QjHu2AGHkyDZkAiEAqNQcEBbihYvWtJVLswXmxfeIBT48bSHwvKpup0Ju1X4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnCAPiyPtnDZg5%2FuircA%2B4QKdPJ04tInQHqFgYP4HiAEX1wIVI%2F64FwLRS8sx4RA%2BPh5CXwlkUZkVgEogRiDEY8t8CDQ%2Fu2K328eMAfpHECPcJRjHlpUTxMsaJDawJnijr4ipIqWF4KEWqHDKar0jMvJRoeTxpVQWMh4G6fwPR6chvqPstr54%2BD4j2TCAOGdq%2FVXTni92E0H%2FQJpWu7pU3mTZzo0Q30deaA2Iv%2FJIGXKC5RAkrBHPdhu7FaGh6kg2XVaRinI6YX2cN9obl4thZ0ABUL0yF3SorRN9FkLjPZN15bgd7F%2FFrtuZI740UB41hmApDwF5c65sH%2Fxwu3xcmzyT0Os%2FLUR90a35bowcOhrotjjuHfdwdRlANiDUfi3R3cXpK2pVu9MQNBSkJWePZSYvDFfkln8WHcwfDno04ipI75qHn9QT84wVkp3vv7GbekunXFH11VNwJg5eNi%2BcmgogkEA7rT56Cdo5R9n8Xs2gMuv%2FX9%2F%2FwdD%2BIegoIpai5mDIa6N7Kk98dsLVQ2VEQGrM93TWs48lZK75DpHOrvOgHPL%2BO2KMzxaNBOrExDEQclHbp6CDzGZAsnRxnD6BvmsjzpgnSXnQDY6%2B2gTJhzJ7uqUgLzzbRXk5dsP89wGqM%2BBcTDL129xjKeMI%2F9pcAGOqUBnSdAZkAmTziyP6l%2FrtxLGi9RWX457RRHAhofuv7eQcG6N4hrhT%2F8DrBg8En8GwsyL4pS7goUDdEFA4EgGvSW7ZalIGhAbTQDxN6ZT2ie1ifbNhsCoaYsr56zC6p7%2Bahf5kjIBgO7ZnYGtizTmonxSTCQaLUq%2B%2Fmp8UvDckLmJ%2F%2BqvmFv%2Bu%2FSQynMHssFLrztkfxNTKACaJZYu3bOn0%2F%2B2i0PFUk%2B&X-Amz-Signature=de9f08eb4751c73c343b8d99b3d4458ed0affc1e98830bea0ca26e245e9322f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI6P6P4J%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIA%2BxJzO%2FDomieHVhvB8QCMDVLX4nY95QjHu2AGHkyDZkAiEAqNQcEBbihYvWtJVLswXmxfeIBT48bSHwvKpup0Ju1X4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnCAPiyPtnDZg5%2FuircA%2B4QKdPJ04tInQHqFgYP4HiAEX1wIVI%2F64FwLRS8sx4RA%2BPh5CXwlkUZkVgEogRiDEY8t8CDQ%2Fu2K328eMAfpHECPcJRjHlpUTxMsaJDawJnijr4ipIqWF4KEWqHDKar0jMvJRoeTxpVQWMh4G6fwPR6chvqPstr54%2BD4j2TCAOGdq%2FVXTni92E0H%2FQJpWu7pU3mTZzo0Q30deaA2Iv%2FJIGXKC5RAkrBHPdhu7FaGh6kg2XVaRinI6YX2cN9obl4thZ0ABUL0yF3SorRN9FkLjPZN15bgd7F%2FFrtuZI740UB41hmApDwF5c65sH%2Fxwu3xcmzyT0Os%2FLUR90a35bowcOhrotjjuHfdwdRlANiDUfi3R3cXpK2pVu9MQNBSkJWePZSYvDFfkln8WHcwfDno04ipI75qHn9QT84wVkp3vv7GbekunXFH11VNwJg5eNi%2BcmgogkEA7rT56Cdo5R9n8Xs2gMuv%2FX9%2F%2FwdD%2BIegoIpai5mDIa6N7Kk98dsLVQ2VEQGrM93TWs48lZK75DpHOrvOgHPL%2BO2KMzxaNBOrExDEQclHbp6CDzGZAsnRxnD6BvmsjzpgnSXnQDY6%2B2gTJhzJ7uqUgLzzbRXk5dsP89wGqM%2BBcTDL129xjKeMI%2F9pcAGOqUBnSdAZkAmTziyP6l%2FrtxLGi9RWX457RRHAhofuv7eQcG6N4hrhT%2F8DrBg8En8GwsyL4pS7goUDdEFA4EgGvSW7ZalIGhAbTQDxN6ZT2ie1ifbNhsCoaYsr56zC6p7%2Bahf5kjIBgO7ZnYGtizTmonxSTCQaLUq%2B%2Fmp8UvDckLmJ%2F%2BqvmFv%2Bu%2FSQynMHssFLrztkfxNTKACaJZYu3bOn0%2F%2B2i0PFUk%2B&X-Amz-Signature=8443c7751a890458f7151662bebda51eac7de29d705226b5c531e6e4fc4af7de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
