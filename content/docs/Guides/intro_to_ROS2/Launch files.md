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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLP5GVOS%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDjATMGffRiPf4SlowKouJo9lW%2FOFW6pG8iiS%2FRQ%2FxoQIhAKb9HgYFg1yY5uiUGTtcnIwl6eQ2%2FOTxrElLFa2XMYxfKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7h7IytgE%2BwxUdOe0q3AODuQjVcFAG4uANj9Botqt%2FVYriDctI78r8ri1D4IsPgvf3jYrvvd4FDU8h1x3QOWrXLV2QXYBAMmkjmS4jHDdLiuUcLxSOFACDmwkv6WFy1ns45Ni9voIAlwcR5mUgqGv%2Fkaljp78Ahu3gL2unSb5FsCn79SkYNRtwh7O%2FjyAsRggHd0c6df8Voaw4BTqaJ0Uq4MuUqsq2jP7TnNYeRg%2Fnn7GwjeXX02hmf9f1GV3%2FfytTdHA0k3TlfoZ3KwKUxwv%2FS9ox8hMCe%2BdQ5ao2o9B%2BOdSXmkmglBz%2Bt5QeFUBkOkNpX7ewkd0dwObUb6CuQbAjVILgKZJCwkuSlfSaZnOtxS1bXI0Mfb2%2BFMsh8lz4AcqYG0Gozo0W1iwcBwBoYAkY7ygcp4VjbmA9oCD5CrfbxD6rOkoLlSPUiTpxvILNQDEs5rDnfn4qYpC%2FRGj24a%2Fr6pnU0NmJRzorBBZWql32T7%2BisbnPgut3g36WKUcLNMnTtciWBzeHpUTbgqFImAIof3nHFIWPviKGbjyIn4suv9V65bSIHxkla0imsBGjwQ3Yci5uJfjGvLoPjCpdmRXtERcj%2BkeyKWCTMlE0%2B9M%2FsVTGT7WfAbSm7cAuNVxbzIq%2FEZqcykDCYppwdDDT0NK%2BBjqkAY87ZhEJNrB1CzmR7DwlsDvW%2BsFzo5Txc2MHQwoZHb%2BPKhTzsyO3p7jDXSYFWTP5tBhJaYqgVJebxDHkbb6P%2BFohAw4MSdAS7Nbj3EeF%2B5rr6obdAggDLdpHRTKJcBTRW%2BOEuXVsCMYZPjYpk3ZVVh%2FaFl1sxHHMOR58YwGIJxUnujq4Fotd1%2FRJHz4oN8GDubMgWB85dHBe7Ra%2FRuUpwd7HozQ6&X-Amz-Signature=50ddaa0391c635fde0c7177fc3faea1be1e5376c00f4c8a39e7582e9c1b74a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLP5GVOS%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDjATMGffRiPf4SlowKouJo9lW%2FOFW6pG8iiS%2FRQ%2FxoQIhAKb9HgYFg1yY5uiUGTtcnIwl6eQ2%2FOTxrElLFa2XMYxfKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7h7IytgE%2BwxUdOe0q3AODuQjVcFAG4uANj9Botqt%2FVYriDctI78r8ri1D4IsPgvf3jYrvvd4FDU8h1x3QOWrXLV2QXYBAMmkjmS4jHDdLiuUcLxSOFACDmwkv6WFy1ns45Ni9voIAlwcR5mUgqGv%2Fkaljp78Ahu3gL2unSb5FsCn79SkYNRtwh7O%2FjyAsRggHd0c6df8Voaw4BTqaJ0Uq4MuUqsq2jP7TnNYeRg%2Fnn7GwjeXX02hmf9f1GV3%2FfytTdHA0k3TlfoZ3KwKUxwv%2FS9ox8hMCe%2BdQ5ao2o9B%2BOdSXmkmglBz%2Bt5QeFUBkOkNpX7ewkd0dwObUb6CuQbAjVILgKZJCwkuSlfSaZnOtxS1bXI0Mfb2%2BFMsh8lz4AcqYG0Gozo0W1iwcBwBoYAkY7ygcp4VjbmA9oCD5CrfbxD6rOkoLlSPUiTpxvILNQDEs5rDnfn4qYpC%2FRGj24a%2Fr6pnU0NmJRzorBBZWql32T7%2BisbnPgut3g36WKUcLNMnTtciWBzeHpUTbgqFImAIof3nHFIWPviKGbjyIn4suv9V65bSIHxkla0imsBGjwQ3Yci5uJfjGvLoPjCpdmRXtERcj%2BkeyKWCTMlE0%2B9M%2FsVTGT7WfAbSm7cAuNVxbzIq%2FEZqcykDCYppwdDDT0NK%2BBjqkAY87ZhEJNrB1CzmR7DwlsDvW%2BsFzo5Txc2MHQwoZHb%2BPKhTzsyO3p7jDXSYFWTP5tBhJaYqgVJebxDHkbb6P%2BFohAw4MSdAS7Nbj3EeF%2B5rr6obdAggDLdpHRTKJcBTRW%2BOEuXVsCMYZPjYpk3ZVVh%2FaFl1sxHHMOR58YwGIJxUnujq4Fotd1%2FRJHz4oN8GDubMgWB85dHBe7Ra%2FRuUpwd7HozQ6&X-Amz-Signature=bcc835839c487cc94f58bb355d940a325b92e2504f665815a5706584f5ada22e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLP5GVOS%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDjATMGffRiPf4SlowKouJo9lW%2FOFW6pG8iiS%2FRQ%2FxoQIhAKb9HgYFg1yY5uiUGTtcnIwl6eQ2%2FOTxrElLFa2XMYxfKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7h7IytgE%2BwxUdOe0q3AODuQjVcFAG4uANj9Botqt%2FVYriDctI78r8ri1D4IsPgvf3jYrvvd4FDU8h1x3QOWrXLV2QXYBAMmkjmS4jHDdLiuUcLxSOFACDmwkv6WFy1ns45Ni9voIAlwcR5mUgqGv%2Fkaljp78Ahu3gL2unSb5FsCn79SkYNRtwh7O%2FjyAsRggHd0c6df8Voaw4BTqaJ0Uq4MuUqsq2jP7TnNYeRg%2Fnn7GwjeXX02hmf9f1GV3%2FfytTdHA0k3TlfoZ3KwKUxwv%2FS9ox8hMCe%2BdQ5ao2o9B%2BOdSXmkmglBz%2Bt5QeFUBkOkNpX7ewkd0dwObUb6CuQbAjVILgKZJCwkuSlfSaZnOtxS1bXI0Mfb2%2BFMsh8lz4AcqYG0Gozo0W1iwcBwBoYAkY7ygcp4VjbmA9oCD5CrfbxD6rOkoLlSPUiTpxvILNQDEs5rDnfn4qYpC%2FRGj24a%2Fr6pnU0NmJRzorBBZWql32T7%2BisbnPgut3g36WKUcLNMnTtciWBzeHpUTbgqFImAIof3nHFIWPviKGbjyIn4suv9V65bSIHxkla0imsBGjwQ3Yci5uJfjGvLoPjCpdmRXtERcj%2BkeyKWCTMlE0%2B9M%2FsVTGT7WfAbSm7cAuNVxbzIq%2FEZqcykDCYppwdDDT0NK%2BBjqkAY87ZhEJNrB1CzmR7DwlsDvW%2BsFzo5Txc2MHQwoZHb%2BPKhTzsyO3p7jDXSYFWTP5tBhJaYqgVJebxDHkbb6P%2BFohAw4MSdAS7Nbj3EeF%2B5rr6obdAggDLdpHRTKJcBTRW%2BOEuXVsCMYZPjYpk3ZVVh%2FaFl1sxHHMOR58YwGIJxUnujq4Fotd1%2FRJHz4oN8GDubMgWB85dHBe7Ra%2FRuUpwd7HozQ6&X-Amz-Signature=ba7f537e1c09a2f5b4495041b96864686e3c64903469f3a9a1095fc29b02a3db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
