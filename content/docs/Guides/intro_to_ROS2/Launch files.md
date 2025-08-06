---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJBWA74%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIFX%2FBghWsOPABNW96H9rZPzO4ff487QjFiPGcCHU5uVhAiBjMwFiFrnJQuPcU8V89SgIzOb%2BmLm8vHs0D6ss5BaPVyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9s9W%2F%2FqZdP3pRlWTKtwD77LCq4YPm23j1Nzz%2BnJpgscJsta6i8oA%2Fy5yEsD%2Fjw54Zs0brCL7t5KzK5CugyFSJg1MbOslGBjPkB4aVhSKQBk65gYUy3VW8BSR0C0w%2Fbjmay1cP1bAUi%2FxM8YkwF%2F4yuSyy1N5ZKynPlyosGucVWV02e0T8HVhMCuj9pwH7BAsSPDHv3C0n4EmshHVuukL0sPu8t61%2FE9qP3BJVeZB13YtTPp95aWjfuOpwlDTHkvas%2Bty71L98McrUyU8LKowu9WZdvvzIXIs2w8buPwV1D5T2X8w6U2f%2F%2Bf5c7b%2B7sni8F4rMcqDwmhkij91Tj%2F5LoGFVlrpshatb7xnXag5eur8ON4wq93ivV9cvpcAPebKO51gn0PhGDa7uIo9jm2Ehd9fzHsfTimhmuAxdhJaS%2BOmZXWrWheJSv2RGiOx4CiCPhhN%2BSqSunVsIkczi7EbJ263wFgVescDXx77K5DbY6jCpydxxB2ccccG9FJnkBjlOwZyG7eDFR%2FnFtLW7inHZUuPTKXqhjWoMkbWy2t3CSoJCEXMIdbciRYevPFC3KOTRueIoI8W1Xja60rEAztyDD3TxB6SYDXrszoK87%2FyqN2RQRAI18IX4%2BQNmKJ%2FVNIJ1dYrw8dqn50NvUYwze%2FLxAY6pgE3vlB6TBQBB%2BB%2Fcrr1uziNXH16bMoxXOouLz2oc9SyL%2Fm8g%2BLGMk%2BkM3Jj0KuaSYLAqxxFF1pvL%2FEXtbO2dq%2BcdrOrx8FV794J0UjY4OaxXfVAf35am5h3D%2F7L%2BfNLnJYRssfCFFHmd7DaDcBbit676asYlHQOHwvttHbkYojDoTEeVErpSbFF854ZJoTik57jlHFdH4oTfbcCOz%2BwX1vXeW7wuzjf&X-Amz-Signature=d62c2d591ed0a16d3b705f1072fffd96ee65933260006bfabda86266fee72929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJBWA74%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIFX%2FBghWsOPABNW96H9rZPzO4ff487QjFiPGcCHU5uVhAiBjMwFiFrnJQuPcU8V89SgIzOb%2BmLm8vHs0D6ss5BaPVyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9s9W%2F%2FqZdP3pRlWTKtwD77LCq4YPm23j1Nzz%2BnJpgscJsta6i8oA%2Fy5yEsD%2Fjw54Zs0brCL7t5KzK5CugyFSJg1MbOslGBjPkB4aVhSKQBk65gYUy3VW8BSR0C0w%2Fbjmay1cP1bAUi%2FxM8YkwF%2F4yuSyy1N5ZKynPlyosGucVWV02e0T8HVhMCuj9pwH7BAsSPDHv3C0n4EmshHVuukL0sPu8t61%2FE9qP3BJVeZB13YtTPp95aWjfuOpwlDTHkvas%2Bty71L98McrUyU8LKowu9WZdvvzIXIs2w8buPwV1D5T2X8w6U2f%2F%2Bf5c7b%2B7sni8F4rMcqDwmhkij91Tj%2F5LoGFVlrpshatb7xnXag5eur8ON4wq93ivV9cvpcAPebKO51gn0PhGDa7uIo9jm2Ehd9fzHsfTimhmuAxdhJaS%2BOmZXWrWheJSv2RGiOx4CiCPhhN%2BSqSunVsIkczi7EbJ263wFgVescDXx77K5DbY6jCpydxxB2ccccG9FJnkBjlOwZyG7eDFR%2FnFtLW7inHZUuPTKXqhjWoMkbWy2t3CSoJCEXMIdbciRYevPFC3KOTRueIoI8W1Xja60rEAztyDD3TxB6SYDXrszoK87%2FyqN2RQRAI18IX4%2BQNmKJ%2FVNIJ1dYrw8dqn50NvUYwze%2FLxAY6pgE3vlB6TBQBB%2BB%2Fcrr1uziNXH16bMoxXOouLz2oc9SyL%2Fm8g%2BLGMk%2BkM3Jj0KuaSYLAqxxFF1pvL%2FEXtbO2dq%2BcdrOrx8FV794J0UjY4OaxXfVAf35am5h3D%2F7L%2BfNLnJYRssfCFFHmd7DaDcBbit676asYlHQOHwvttHbkYojDoTEeVErpSbFF854ZJoTik57jlHFdH4oTfbcCOz%2BwX1vXeW7wuzjf&X-Amz-Signature=929fc6d04405c1af99c1484665232011c62104ea864ebb6b066dedcb2a2ac193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJBWA74%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIFX%2FBghWsOPABNW96H9rZPzO4ff487QjFiPGcCHU5uVhAiBjMwFiFrnJQuPcU8V89SgIzOb%2BmLm8vHs0D6ss5BaPVyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIM9s9W%2F%2FqZdP3pRlWTKtwD77LCq4YPm23j1Nzz%2BnJpgscJsta6i8oA%2Fy5yEsD%2Fjw54Zs0brCL7t5KzK5CugyFSJg1MbOslGBjPkB4aVhSKQBk65gYUy3VW8BSR0C0w%2Fbjmay1cP1bAUi%2FxM8YkwF%2F4yuSyy1N5ZKynPlyosGucVWV02e0T8HVhMCuj9pwH7BAsSPDHv3C0n4EmshHVuukL0sPu8t61%2FE9qP3BJVeZB13YtTPp95aWjfuOpwlDTHkvas%2Bty71L98McrUyU8LKowu9WZdvvzIXIs2w8buPwV1D5T2X8w6U2f%2F%2Bf5c7b%2B7sni8F4rMcqDwmhkij91Tj%2F5LoGFVlrpshatb7xnXag5eur8ON4wq93ivV9cvpcAPebKO51gn0PhGDa7uIo9jm2Ehd9fzHsfTimhmuAxdhJaS%2BOmZXWrWheJSv2RGiOx4CiCPhhN%2BSqSunVsIkczi7EbJ263wFgVescDXx77K5DbY6jCpydxxB2ccccG9FJnkBjlOwZyG7eDFR%2FnFtLW7inHZUuPTKXqhjWoMkbWy2t3CSoJCEXMIdbciRYevPFC3KOTRueIoI8W1Xja60rEAztyDD3TxB6SYDXrszoK87%2FyqN2RQRAI18IX4%2BQNmKJ%2FVNIJ1dYrw8dqn50NvUYwze%2FLxAY6pgE3vlB6TBQBB%2BB%2Fcrr1uziNXH16bMoxXOouLz2oc9SyL%2Fm8g%2BLGMk%2BkM3Jj0KuaSYLAqxxFF1pvL%2FEXtbO2dq%2BcdrOrx8FV794J0UjY4OaxXfVAf35am5h3D%2F7L%2BfNLnJYRssfCFFHmd7DaDcBbit676asYlHQOHwvttHbkYojDoTEeVErpSbFF854ZJoTik57jlHFdH4oTfbcCOz%2BwX1vXeW7wuzjf&X-Amz-Signature=8d26b6c71fdfe4438fe194fcee4fb554faf7284cc83c23158349e47b5facbd96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
