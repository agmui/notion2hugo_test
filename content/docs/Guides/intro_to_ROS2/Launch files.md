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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHCCT53%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEytGI1qEbr01mCHPb7%2FEudPIUHtIgzqG%2BUowhxxw%2FtcAiB6cfIk8v9Uxqd2mH6ycMJncXRAXPwo8hynKnPkgRYSESqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4bCgU4Vz%2Bh8WRinoKtwDp72u9RROLvzyRiixW0S4rnyLHzC3xI4mWc4VhcCrZqPK1qi7Lb14GCAWa9g7YfG3ejZhGST6yN7R9H8zOxvj7iDqKdhumhoM2T060HIHQNWzYCB6Uobcu3U211MRlRwS9oMCFh%2FDSfZup7xD7wN%2B27fzacGLinLV81wSdbJAThNP%2FkiAh1NBkJtBLkReIBrdZ77O5BsDDfrTc77D2IkQ7vAjytmEAqleu9Isf0BIZ2GwinmOXO39gfTrlcSzHsEtvHtnTtEivQ0coOql197e5ZWKEREJ%2FBuWIyo2Y641R10imghI29%2BD2FlodUjZUeASIy%2BjSA0zieATthFq1SI%2FZ4wKagWkddiwjKMEX90pQhrImhnoh246scm8lrT121exAVHNAZmNbOPxVSmP7zbj%2B8oOv3l8XXT8uf7AKNst8cqDufNFbimaH9%2BECQ%2FwPzYnyXU7vI0BLOpe8ks6ulchyIOP1xauHyrAuF1UbJeyLR3XlVg5ob4nW83A99TWbIU%2FwbEGkc%2BOpec94ic8P83zxX9rRkn9UK2Lu5kdjhK0F1eSMD7AwQsqCTWN5W%2FAzy62rrajY7XX0mjc7TU%2Fa9x5DsWRwcvKci0d4qohS5rX9HhHxzYKLMtlbSA%2FkyYwrsrcvQY6pgHSVvmGRjFQqffiKycGIOnGz2s1jyzP8kKq3gxfozE9HyU9p%2FW8RMP%2FLgmAYef2bptAHm%2FjP8ji67NMUbZTs%2FHxKagvR9%2BH7NkaOrcmo1mjxhpppJquN49z5u3hN0yulS9t9r4%2Bbd3ju7xxOOafmuKa3WT0vuMn1978s6rrrFIYP9j7JZCZUTTR%2BIu7vxmDGkua6%2BqsAWvRRdS1C9mC%2F9a%2FZw44Ri3j&X-Amz-Signature=51c26730ffcd61d4d64908e4eedc5212de67de62c4797c23930a501c418043ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHCCT53%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEytGI1qEbr01mCHPb7%2FEudPIUHtIgzqG%2BUowhxxw%2FtcAiB6cfIk8v9Uxqd2mH6ycMJncXRAXPwo8hynKnPkgRYSESqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4bCgU4Vz%2Bh8WRinoKtwDp72u9RROLvzyRiixW0S4rnyLHzC3xI4mWc4VhcCrZqPK1qi7Lb14GCAWa9g7YfG3ejZhGST6yN7R9H8zOxvj7iDqKdhumhoM2T060HIHQNWzYCB6Uobcu3U211MRlRwS9oMCFh%2FDSfZup7xD7wN%2B27fzacGLinLV81wSdbJAThNP%2FkiAh1NBkJtBLkReIBrdZ77O5BsDDfrTc77D2IkQ7vAjytmEAqleu9Isf0BIZ2GwinmOXO39gfTrlcSzHsEtvHtnTtEivQ0coOql197e5ZWKEREJ%2FBuWIyo2Y641R10imghI29%2BD2FlodUjZUeASIy%2BjSA0zieATthFq1SI%2FZ4wKagWkddiwjKMEX90pQhrImhnoh246scm8lrT121exAVHNAZmNbOPxVSmP7zbj%2B8oOv3l8XXT8uf7AKNst8cqDufNFbimaH9%2BECQ%2FwPzYnyXU7vI0BLOpe8ks6ulchyIOP1xauHyrAuF1UbJeyLR3XlVg5ob4nW83A99TWbIU%2FwbEGkc%2BOpec94ic8P83zxX9rRkn9UK2Lu5kdjhK0F1eSMD7AwQsqCTWN5W%2FAzy62rrajY7XX0mjc7TU%2Fa9x5DsWRwcvKci0d4qohS5rX9HhHxzYKLMtlbSA%2FkyYwrsrcvQY6pgHSVvmGRjFQqffiKycGIOnGz2s1jyzP8kKq3gxfozE9HyU9p%2FW8RMP%2FLgmAYef2bptAHm%2FjP8ji67NMUbZTs%2FHxKagvR9%2BH7NkaOrcmo1mjxhpppJquN49z5u3hN0yulS9t9r4%2Bbd3ju7xxOOafmuKa3WT0vuMn1978s6rrrFIYP9j7JZCZUTTR%2BIu7vxmDGkua6%2BqsAWvRRdS1C9mC%2F9a%2FZw44Ri3j&X-Amz-Signature=a4b944c1920b32e50fa59ff243075b9fe7728bfa45b822475adc0ea301e39d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHHCCT53%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEytGI1qEbr01mCHPb7%2FEudPIUHtIgzqG%2BUowhxxw%2FtcAiB6cfIk8v9Uxqd2mH6ycMJncXRAXPwo8hynKnPkgRYSESqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4bCgU4Vz%2Bh8WRinoKtwDp72u9RROLvzyRiixW0S4rnyLHzC3xI4mWc4VhcCrZqPK1qi7Lb14GCAWa9g7YfG3ejZhGST6yN7R9H8zOxvj7iDqKdhumhoM2T060HIHQNWzYCB6Uobcu3U211MRlRwS9oMCFh%2FDSfZup7xD7wN%2B27fzacGLinLV81wSdbJAThNP%2FkiAh1NBkJtBLkReIBrdZ77O5BsDDfrTc77D2IkQ7vAjytmEAqleu9Isf0BIZ2GwinmOXO39gfTrlcSzHsEtvHtnTtEivQ0coOql197e5ZWKEREJ%2FBuWIyo2Y641R10imghI29%2BD2FlodUjZUeASIy%2BjSA0zieATthFq1SI%2FZ4wKagWkddiwjKMEX90pQhrImhnoh246scm8lrT121exAVHNAZmNbOPxVSmP7zbj%2B8oOv3l8XXT8uf7AKNst8cqDufNFbimaH9%2BECQ%2FwPzYnyXU7vI0BLOpe8ks6ulchyIOP1xauHyrAuF1UbJeyLR3XlVg5ob4nW83A99TWbIU%2FwbEGkc%2BOpec94ic8P83zxX9rRkn9UK2Lu5kdjhK0F1eSMD7AwQsqCTWN5W%2FAzy62rrajY7XX0mjc7TU%2Fa9x5DsWRwcvKci0d4qohS5rX9HhHxzYKLMtlbSA%2FkyYwrsrcvQY6pgHSVvmGRjFQqffiKycGIOnGz2s1jyzP8kKq3gxfozE9HyU9p%2FW8RMP%2FLgmAYef2bptAHm%2FjP8ji67NMUbZTs%2FHxKagvR9%2BH7NkaOrcmo1mjxhpppJquN49z5u3hN0yulS9t9r4%2Bbd3ju7xxOOafmuKa3WT0vuMn1978s6rrrFIYP9j7JZCZUTTR%2BIu7vxmDGkua6%2BqsAWvRRdS1C9mC%2F9a%2FZw44Ri3j&X-Amz-Signature=5368ced1280d5b849d9ee4ad9109bafdcc3d79e7fa77bd61d4202a9316881233&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
