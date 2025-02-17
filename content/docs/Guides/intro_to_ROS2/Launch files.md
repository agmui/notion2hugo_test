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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NISWFNX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGOQMWbkFsI5MC%2B88CzmPjHNtpFZjYMlLUJI0MyLpKuaAiAFPsC0DRbaDDfuljCMDOCCgVNEI1Q1f5qL5vQ2mTtuhSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMZtTgSjH2o%2BHDIZrMKtwDlPFRRyGRJxiDaETbOwecuq6TMFcdtz7GVZZ1ZOLPR99aBpxBgLyVyO7LvC8axlTuZxDkhNaWQp%2FRIbjSgmEtAXLwigHUnrTCN8tuFUqMGVYNczQzCOVHqW0I5HYdEUHmDd3yZDreg7serPzNe5aOQcEGBtZKYRPE0l%2Fip7rgeIjqoieuelzGgoyE2fkeJXqDCcDDJMru0ln0xbQ9CiboJNiEvNywa1zHjNhVoiPYkEnE%2BQJuUaSQIhiQR0e3Rxe%2FTOJ7IKTdmVzLGuou72vvvOT6Ka%2BsvvUnJU5TEH7yXHoM6jttbCmmsPysp0Z3HgBhzlCRXwaUdC6lcjn03lX1Yt8qGJ4TT5sEJlwX5tWntdxub4GiWN%2FAV5yhX2oDMaUyazLv078jdNcGilV%2B1Dae9QTcMG7SYSv%2F4Iv6v304hK64mnCaa%2B3VxCLPAbmCzcQkbZU%2F94ynYvtaV3HAqMW%2ByfmarcOn47yvjaT8VraCOrvDr7VEpp0naXNR4P521l9dZkmwo4CAaio1y%2FTpHXzGVYu%2F061irKf1Si893mBRvHVwW61Qs4ap%2FjdtNMBcTyXq3SWXJCDuQAGEPOswVuM0x2rpFknun20JA4QC4P9R%2Fo6uxmDmKv7IEH6yK7Mw%2FfXNvQY6pgH9D5aG4cf0CxEEgz3cmWJT7LbG%2BCyL3o7FfgbWhjT%2BkbPvNjOXG1ufMJSQGYgev9IZvH3Hq0L2yeoXKQyMw0HsitzF7pCrTfuL2FTvm9lhwtlIiOI2xKIH34rmCO9f6NiVrvhO4aA%2BHLcAGbuasT6pz%2FmQM5llrnnkQ6R8gPAzbCq31grntfSrd3m2Z8V1FIctErUIsMgFI5cXQhs3tlesPN4YxQV5&X-Amz-Signature=9e3b36390e6769414221e369849ff7f42da6f98d30bb89260352713742a9c886&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NISWFNX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGOQMWbkFsI5MC%2B88CzmPjHNtpFZjYMlLUJI0MyLpKuaAiAFPsC0DRbaDDfuljCMDOCCgVNEI1Q1f5qL5vQ2mTtuhSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMZtTgSjH2o%2BHDIZrMKtwDlPFRRyGRJxiDaETbOwecuq6TMFcdtz7GVZZ1ZOLPR99aBpxBgLyVyO7LvC8axlTuZxDkhNaWQp%2FRIbjSgmEtAXLwigHUnrTCN8tuFUqMGVYNczQzCOVHqW0I5HYdEUHmDd3yZDreg7serPzNe5aOQcEGBtZKYRPE0l%2Fip7rgeIjqoieuelzGgoyE2fkeJXqDCcDDJMru0ln0xbQ9CiboJNiEvNywa1zHjNhVoiPYkEnE%2BQJuUaSQIhiQR0e3Rxe%2FTOJ7IKTdmVzLGuou72vvvOT6Ka%2BsvvUnJU5TEH7yXHoM6jttbCmmsPysp0Z3HgBhzlCRXwaUdC6lcjn03lX1Yt8qGJ4TT5sEJlwX5tWntdxub4GiWN%2FAV5yhX2oDMaUyazLv078jdNcGilV%2B1Dae9QTcMG7SYSv%2F4Iv6v304hK64mnCaa%2B3VxCLPAbmCzcQkbZU%2F94ynYvtaV3HAqMW%2ByfmarcOn47yvjaT8VraCOrvDr7VEpp0naXNR4P521l9dZkmwo4CAaio1y%2FTpHXzGVYu%2F061irKf1Si893mBRvHVwW61Qs4ap%2FjdtNMBcTyXq3SWXJCDuQAGEPOswVuM0x2rpFknun20JA4QC4P9R%2Fo6uxmDmKv7IEH6yK7Mw%2FfXNvQY6pgH9D5aG4cf0CxEEgz3cmWJT7LbG%2BCyL3o7FfgbWhjT%2BkbPvNjOXG1ufMJSQGYgev9IZvH3Hq0L2yeoXKQyMw0HsitzF7pCrTfuL2FTvm9lhwtlIiOI2xKIH34rmCO9f6NiVrvhO4aA%2BHLcAGbuasT6pz%2FmQM5llrnnkQ6R8gPAzbCq31grntfSrd3m2Z8V1FIctErUIsMgFI5cXQhs3tlesPN4YxQV5&X-Amz-Signature=cc06121c23e58e80fcd315556f0f11a0e9e7bf9a01857ee7d86a2e0d6a8a6bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NISWFNX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGOQMWbkFsI5MC%2B88CzmPjHNtpFZjYMlLUJI0MyLpKuaAiAFPsC0DRbaDDfuljCMDOCCgVNEI1Q1f5qL5vQ2mTtuhSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMZtTgSjH2o%2BHDIZrMKtwDlPFRRyGRJxiDaETbOwecuq6TMFcdtz7GVZZ1ZOLPR99aBpxBgLyVyO7LvC8axlTuZxDkhNaWQp%2FRIbjSgmEtAXLwigHUnrTCN8tuFUqMGVYNczQzCOVHqW0I5HYdEUHmDd3yZDreg7serPzNe5aOQcEGBtZKYRPE0l%2Fip7rgeIjqoieuelzGgoyE2fkeJXqDCcDDJMru0ln0xbQ9CiboJNiEvNywa1zHjNhVoiPYkEnE%2BQJuUaSQIhiQR0e3Rxe%2FTOJ7IKTdmVzLGuou72vvvOT6Ka%2BsvvUnJU5TEH7yXHoM6jttbCmmsPysp0Z3HgBhzlCRXwaUdC6lcjn03lX1Yt8qGJ4TT5sEJlwX5tWntdxub4GiWN%2FAV5yhX2oDMaUyazLv078jdNcGilV%2B1Dae9QTcMG7SYSv%2F4Iv6v304hK64mnCaa%2B3VxCLPAbmCzcQkbZU%2F94ynYvtaV3HAqMW%2ByfmarcOn47yvjaT8VraCOrvDr7VEpp0naXNR4P521l9dZkmwo4CAaio1y%2FTpHXzGVYu%2F061irKf1Si893mBRvHVwW61Qs4ap%2FjdtNMBcTyXq3SWXJCDuQAGEPOswVuM0x2rpFknun20JA4QC4P9R%2Fo6uxmDmKv7IEH6yK7Mw%2FfXNvQY6pgH9D5aG4cf0CxEEgz3cmWJT7LbG%2BCyL3o7FfgbWhjT%2BkbPvNjOXG1ufMJSQGYgev9IZvH3Hq0L2yeoXKQyMw0HsitzF7pCrTfuL2FTvm9lhwtlIiOI2xKIH34rmCO9f6NiVrvhO4aA%2BHLcAGbuasT6pz%2FmQM5llrnnkQ6R8gPAzbCq31grntfSrd3m2Z8V1FIctErUIsMgFI5cXQhs3tlesPN4YxQV5&X-Amz-Signature=a9add2cc894107f59c45c79b3aa523165921ab09208a21cbcdcafa0c79da7d60&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
