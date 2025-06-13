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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKSZF5L%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICBEftbScPWJ%2FR1ScY9wU2XhaPCbVCLL%2F4SAq48MmdytAiEAwBGlkM8TsxOQSfLBK0kfG%2B6K2An5qPXeS5GKOtGAgqcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOZdJ2HCFWRa7%2BWg5CrcAz7T3Qp1bkRXi5Xy9kLqC2a8%2BuzYw6K4FEu1FEfNcHvI%2BgX9jXS8rEobcu93BBLQR%2FvrZtGSDoTH710J4M2pCZFscug%2BW9OCHFoouhWJWiVYLRV5VZatxlh%2F8yODJECnE2ZhNmIOkWmGQuPbZO9z3nV9xMJPXCiidz8FTEMQ5yChyOmnMzs9wk12aZDk6J0Fi%2F1Y%2Fo5j%2FYTC9SDiQkUly%2FR18yTZuSbY%2BtUIWv4KGIz2l0FvmfEJcQAmZy6ssp%2FpU%2Bp%2B1ihj9ITtgFlyoC9bGntIfwIXm9E0Gbus0PZFGf3XrFSz6EY7Mi%2B0wxd4Wh04RiegZhxmA8hftaiSbv9IzsEsaowhznFesH3zShfQ45Gt0MOzeAateJBCCAfCJfxkIldmsKvV3iXEtvjScbeQPxzfUBazRTyEad80fq3fD7%2Fkd%2BAoCkh6XoFBu5wgkNs3zSis12NOFdbA7asPqoOuj7hsXKZDQWKwvnGDwomeUv6fWGTTtwIn3B8eef%2F9SlRc%2BkJ%2By4aTBGr%2BTV7yH3VEii2MEOt6vZXD330pvyQBSlhbWkgvIvBgOoLNULSpVg0CJV33SEbY%2Fb32VLWJcmluVRzeGdiDgFYoqaeFM%2FyTGlIGGxzl12KODiPDrxrrMIXcssIGOqUBPicI09m%2Fq7UjtYKVK5gOUTx6r%2BfxY7qgWSBn39ijbcspU98%2BL%2FmarrDx0GisSw8bm6o43%2B398XA3HevUXNBb67HYu4wjvuCrmdlwl5MJFCNmwsPWK0XfITonm8EZu1qTfzuU5SkHkMrSvOpikLcntkt6MfF1qF%2BhVFWoYPafuRIMufZaYolH3ULnArTMzglF5hvA5MC4pDuco4krY60tocnyzAox&X-Amz-Signature=a8e10624a6436792163fa0fffd08492b497a6ebdb8e404cb50433e3d89c83b3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKSZF5L%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICBEftbScPWJ%2FR1ScY9wU2XhaPCbVCLL%2F4SAq48MmdytAiEAwBGlkM8TsxOQSfLBK0kfG%2B6K2An5qPXeS5GKOtGAgqcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOZdJ2HCFWRa7%2BWg5CrcAz7T3Qp1bkRXi5Xy9kLqC2a8%2BuzYw6K4FEu1FEfNcHvI%2BgX9jXS8rEobcu93BBLQR%2FvrZtGSDoTH710J4M2pCZFscug%2BW9OCHFoouhWJWiVYLRV5VZatxlh%2F8yODJECnE2ZhNmIOkWmGQuPbZO9z3nV9xMJPXCiidz8FTEMQ5yChyOmnMzs9wk12aZDk6J0Fi%2F1Y%2Fo5j%2FYTC9SDiQkUly%2FR18yTZuSbY%2BtUIWv4KGIz2l0FvmfEJcQAmZy6ssp%2FpU%2Bp%2B1ihj9ITtgFlyoC9bGntIfwIXm9E0Gbus0PZFGf3XrFSz6EY7Mi%2B0wxd4Wh04RiegZhxmA8hftaiSbv9IzsEsaowhznFesH3zShfQ45Gt0MOzeAateJBCCAfCJfxkIldmsKvV3iXEtvjScbeQPxzfUBazRTyEad80fq3fD7%2Fkd%2BAoCkh6XoFBu5wgkNs3zSis12NOFdbA7asPqoOuj7hsXKZDQWKwvnGDwomeUv6fWGTTtwIn3B8eef%2F9SlRc%2BkJ%2By4aTBGr%2BTV7yH3VEii2MEOt6vZXD330pvyQBSlhbWkgvIvBgOoLNULSpVg0CJV33SEbY%2Fb32VLWJcmluVRzeGdiDgFYoqaeFM%2FyTGlIGGxzl12KODiPDrxrrMIXcssIGOqUBPicI09m%2Fq7UjtYKVK5gOUTx6r%2BfxY7qgWSBn39ijbcspU98%2BL%2FmarrDx0GisSw8bm6o43%2B398XA3HevUXNBb67HYu4wjvuCrmdlwl5MJFCNmwsPWK0XfITonm8EZu1qTfzuU5SkHkMrSvOpikLcntkt6MfF1qF%2BhVFWoYPafuRIMufZaYolH3ULnArTMzglF5hvA5MC4pDuco4krY60tocnyzAox&X-Amz-Signature=3345e7e98c32d977903e93eeffcd48d608bfb684601ca31ff218bde592260c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKSZF5L%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCICBEftbScPWJ%2FR1ScY9wU2XhaPCbVCLL%2F4SAq48MmdytAiEAwBGlkM8TsxOQSfLBK0kfG%2B6K2An5qPXeS5GKOtGAgqcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOZdJ2HCFWRa7%2BWg5CrcAz7T3Qp1bkRXi5Xy9kLqC2a8%2BuzYw6K4FEu1FEfNcHvI%2BgX9jXS8rEobcu93BBLQR%2FvrZtGSDoTH710J4M2pCZFscug%2BW9OCHFoouhWJWiVYLRV5VZatxlh%2F8yODJECnE2ZhNmIOkWmGQuPbZO9z3nV9xMJPXCiidz8FTEMQ5yChyOmnMzs9wk12aZDk6J0Fi%2F1Y%2Fo5j%2FYTC9SDiQkUly%2FR18yTZuSbY%2BtUIWv4KGIz2l0FvmfEJcQAmZy6ssp%2FpU%2Bp%2B1ihj9ITtgFlyoC9bGntIfwIXm9E0Gbus0PZFGf3XrFSz6EY7Mi%2B0wxd4Wh04RiegZhxmA8hftaiSbv9IzsEsaowhznFesH3zShfQ45Gt0MOzeAateJBCCAfCJfxkIldmsKvV3iXEtvjScbeQPxzfUBazRTyEad80fq3fD7%2Fkd%2BAoCkh6XoFBu5wgkNs3zSis12NOFdbA7asPqoOuj7hsXKZDQWKwvnGDwomeUv6fWGTTtwIn3B8eef%2F9SlRc%2BkJ%2By4aTBGr%2BTV7yH3VEii2MEOt6vZXD330pvyQBSlhbWkgvIvBgOoLNULSpVg0CJV33SEbY%2Fb32VLWJcmluVRzeGdiDgFYoqaeFM%2FyTGlIGGxzl12KODiPDrxrrMIXcssIGOqUBPicI09m%2Fq7UjtYKVK5gOUTx6r%2BfxY7qgWSBn39ijbcspU98%2BL%2FmarrDx0GisSw8bm6o43%2B398XA3HevUXNBb67HYu4wjvuCrmdlwl5MJFCNmwsPWK0XfITonm8EZu1qTfzuU5SkHkMrSvOpikLcntkt6MfF1qF%2BhVFWoYPafuRIMufZaYolH3ULnArTMzglF5hvA5MC4pDuco4krY60tocnyzAox&X-Amz-Signature=2a365c83f15a40c82769c7978acf76f33f5263e5e533053fa464af0789c7b9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
