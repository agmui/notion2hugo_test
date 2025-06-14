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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JGHNZTV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIEQvL5eTCTg%2FPJeQV1MXm56SwSvNfKMg1k5UWqmmZ%2FjmAiBFLHCIFmVhQ8wz2S1eH0OR%2Ba457vXikr1K7i3oCfYSxCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMv6tMGlPlw%2F7BTyf%2BKtwDUj3vZhMq2XVtNqCo0xV3g8BgbnCxM89qYY0X1Wrq7dl18ugAOB1PlMJuLl1xOseS5jRcj%2BukOGVOeaz314DDQ5B4v%2FwqxwBnscHS4sWS6R8UzI1bGfMVEDwQry5EzCU2B5DE9thKoYbhIfBcPYlmmpw2yLL3zEVXV%2Bom6KWe5P6B0Rm4qBYxi3JYmWOuawI4qxPIMTX%2FXArjXI1whr%2F0I0KDEH0JDVX6Zbjs6d4C8%2B1OMTEvhJWtPNy8w2Yt5cgoxBL1hyVMob9yMIWOzCENBpZ%2Fi5Ud%2FU3%2Fauttc5oKiY8PIJ2rghhiQLVWS9MqSkfNJOXcYty%2FskKnXAsFKOepPlrRyaTQoOyqYHiPynivYymp9mjID3kE9dsG6LEGkhMB8g8wbeoGVUpQKjaaCWa4rTo4rNsniPik29koQ6m14hCD%2FNNLVTdchut1L9l35NfqmQZh9%2BPB1ifzoGHueDuG25IM6gteWB1SAevlvlwvj7sPvYa%2FkwX%2BbfnRBzDCmMJiUneYqpWCY24ucBsGGyzy1yr2QJx52rLqrySUGH%2FtI1M59oeVqHy3lbkqCMdeYY0VlITuY8Gl1WWxeg9WFFUpQgnzEYzhXS%2FBP4bkYMauaOenPMlrmHEFFCewqVUw09uywgY6pgFeLMVfsprsDATRYBjY96ip1cdhpqRRwjyXaGh9eHh863kc4j4R7Sc6xSP5ORviXqtxyiNHC92PFQX2GfBEWQFOEjVZbnURpkDcX00X3SPiJh3zFNVoZdlKy98mI4FcvhJkybrQnOEj%2FPnWURhv%2BAoeGxSpn4Gq6X3bKHz7SoxaFIlKE%2BEpARp%2Bm%2F0Ldgfv%2BJQDUIgenYjgoBomNGss%2BaS62ykLeBj4&X-Amz-Signature=ffd9ff592cbffe389a6283646bf466c3f10e71974636f884b104a528d2700a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JGHNZTV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIEQvL5eTCTg%2FPJeQV1MXm56SwSvNfKMg1k5UWqmmZ%2FjmAiBFLHCIFmVhQ8wz2S1eH0OR%2Ba457vXikr1K7i3oCfYSxCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMv6tMGlPlw%2F7BTyf%2BKtwDUj3vZhMq2XVtNqCo0xV3g8BgbnCxM89qYY0X1Wrq7dl18ugAOB1PlMJuLl1xOseS5jRcj%2BukOGVOeaz314DDQ5B4v%2FwqxwBnscHS4sWS6R8UzI1bGfMVEDwQry5EzCU2B5DE9thKoYbhIfBcPYlmmpw2yLL3zEVXV%2Bom6KWe5P6B0Rm4qBYxi3JYmWOuawI4qxPIMTX%2FXArjXI1whr%2F0I0KDEH0JDVX6Zbjs6d4C8%2B1OMTEvhJWtPNy8w2Yt5cgoxBL1hyVMob9yMIWOzCENBpZ%2Fi5Ud%2FU3%2Fauttc5oKiY8PIJ2rghhiQLVWS9MqSkfNJOXcYty%2FskKnXAsFKOepPlrRyaTQoOyqYHiPynivYymp9mjID3kE9dsG6LEGkhMB8g8wbeoGVUpQKjaaCWa4rTo4rNsniPik29koQ6m14hCD%2FNNLVTdchut1L9l35NfqmQZh9%2BPB1ifzoGHueDuG25IM6gteWB1SAevlvlwvj7sPvYa%2FkwX%2BbfnRBzDCmMJiUneYqpWCY24ucBsGGyzy1yr2QJx52rLqrySUGH%2FtI1M59oeVqHy3lbkqCMdeYY0VlITuY8Gl1WWxeg9WFFUpQgnzEYzhXS%2FBP4bkYMauaOenPMlrmHEFFCewqVUw09uywgY6pgFeLMVfsprsDATRYBjY96ip1cdhpqRRwjyXaGh9eHh863kc4j4R7Sc6xSP5ORviXqtxyiNHC92PFQX2GfBEWQFOEjVZbnURpkDcX00X3SPiJh3zFNVoZdlKy98mI4FcvhJkybrQnOEj%2FPnWURhv%2BAoeGxSpn4Gq6X3bKHz7SoxaFIlKE%2BEpARp%2Bm%2F0Ldgfv%2BJQDUIgenYjgoBomNGss%2BaS62ykLeBj4&X-Amz-Signature=92fc7fe33710046a407fc6a12923c57b6093e8f67840b5f6dd64274895796771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JGHNZTV%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIEQvL5eTCTg%2FPJeQV1MXm56SwSvNfKMg1k5UWqmmZ%2FjmAiBFLHCIFmVhQ8wz2S1eH0OR%2Ba457vXikr1K7i3oCfYSxCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMv6tMGlPlw%2F7BTyf%2BKtwDUj3vZhMq2XVtNqCo0xV3g8BgbnCxM89qYY0X1Wrq7dl18ugAOB1PlMJuLl1xOseS5jRcj%2BukOGVOeaz314DDQ5B4v%2FwqxwBnscHS4sWS6R8UzI1bGfMVEDwQry5EzCU2B5DE9thKoYbhIfBcPYlmmpw2yLL3zEVXV%2Bom6KWe5P6B0Rm4qBYxi3JYmWOuawI4qxPIMTX%2FXArjXI1whr%2F0I0KDEH0JDVX6Zbjs6d4C8%2B1OMTEvhJWtPNy8w2Yt5cgoxBL1hyVMob9yMIWOzCENBpZ%2Fi5Ud%2FU3%2Fauttc5oKiY8PIJ2rghhiQLVWS9MqSkfNJOXcYty%2FskKnXAsFKOepPlrRyaTQoOyqYHiPynivYymp9mjID3kE9dsG6LEGkhMB8g8wbeoGVUpQKjaaCWa4rTo4rNsniPik29koQ6m14hCD%2FNNLVTdchut1L9l35NfqmQZh9%2BPB1ifzoGHueDuG25IM6gteWB1SAevlvlwvj7sPvYa%2FkwX%2BbfnRBzDCmMJiUneYqpWCY24ucBsGGyzy1yr2QJx52rLqrySUGH%2FtI1M59oeVqHy3lbkqCMdeYY0VlITuY8Gl1WWxeg9WFFUpQgnzEYzhXS%2FBP4bkYMauaOenPMlrmHEFFCewqVUw09uywgY6pgFeLMVfsprsDATRYBjY96ip1cdhpqRRwjyXaGh9eHh863kc4j4R7Sc6xSP5ORviXqtxyiNHC92PFQX2GfBEWQFOEjVZbnURpkDcX00X3SPiJh3zFNVoZdlKy98mI4FcvhJkybrQnOEj%2FPnWURhv%2BAoeGxSpn4Gq6X3bKHz7SoxaFIlKE%2BEpARp%2Bm%2F0Ldgfv%2BJQDUIgenYjgoBomNGss%2BaS62ykLeBj4&X-Amz-Signature=8c5d2a7be3f36a1960afcdfb953174e7ef11c51a162e35f12eb9fa560ef6dd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
