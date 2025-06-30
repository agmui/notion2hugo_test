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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6235RP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FfXIrc46xCt0jO%2F1viqOq2YNlEdPLS6ftnp3WQZCugIhALYmgQ3OLExCCXEY9k3%2FYaYXx%2Fcubm9LMYmfBvDMBbaRKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUK0%2Ffage5vtGiUV8q3AN%2Fz5DNstXcyho6yipH0sOyFN1UH9lOlWz1%2FFuwGctmB59dZmLw6sv%2BD%2Fnt8BZlZHD6CgDDSXLcMGj5rxMAAUzzclJcxvKJ1CpSDRQ5ZkoJBuGZtN3Bkxg15ZraHwHXCrGo7qzHfapnzARwobzgV6O%2BPzBRB4kNz2xnc24vg9OoGHQSoRrKQI1LAlt%2F3Pb02iGIfsiyuHwCqhCLKOVwsSegQzGWsv%2BEKSTx0Fb%2B8HPSlhsxf8FdThHsI940pZWnsJysTieTC2cmVQksMfmaP5tBwir6sRnVxsTCPEGj9zmc46mcg9ORXbuUGnvSPpcImdV1M21rg9VCeOTudT3ez9JCSK0vwA1C%2BhqF2%2B%2FWgQl99XRRvJ5zsYF%2F4pB63mopsp4LiOzarTwNITvQX%2FZWt1970a3%2FjV1aK2mR6lQBh7IUHHqVAD8IhH6IOuARCBrqVgms4wp%2F4yPL5TUAA5z8zflyz%2BcZZkQY%2FY3it9L5TwI4KI%2FjkUdv0%2FdbmfcoaQnejM7ORC%2FMKAWOTQrYqOF667GgqH6y2SAPayU1tCfJ1JEgCD5bZAUTPauko8Mmt9KO4NOe0vkWeq0QXHKSJpgTT%2FpeUGEPyrWqtKARCsifcp0X83HVw0l2grhvmtxrmTDv7ofDBjqkASVFN8Q%2B2qF55vGsENEUT3PNn%2BnQzfD3fG%2BHpPLBV6jG5XuvYTIhebaFhIRn28bgTHEVQ06nvb%2FO212%2BtQH5Vpv6jbN4hmxc8xPQc%2BDad0%2FwOcjicrVCUnRvqERRAZOkXQjdmap5nG7n7AqLJXxMyl27bj0dcbtqRuYCIHwJPbZbtjYglbQwwwcON0cu%2Fk4DNUXDQKKQWqiXppKAtvT95YzqRnVq&X-Amz-Signature=9342b81888febcf693755f9d7e59cfb4ef06c9b6ad941b45c7415e081626dc4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6235RP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FfXIrc46xCt0jO%2F1viqOq2YNlEdPLS6ftnp3WQZCugIhALYmgQ3OLExCCXEY9k3%2FYaYXx%2Fcubm9LMYmfBvDMBbaRKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUK0%2Ffage5vtGiUV8q3AN%2Fz5DNstXcyho6yipH0sOyFN1UH9lOlWz1%2FFuwGctmB59dZmLw6sv%2BD%2Fnt8BZlZHD6CgDDSXLcMGj5rxMAAUzzclJcxvKJ1CpSDRQ5ZkoJBuGZtN3Bkxg15ZraHwHXCrGo7qzHfapnzARwobzgV6O%2BPzBRB4kNz2xnc24vg9OoGHQSoRrKQI1LAlt%2F3Pb02iGIfsiyuHwCqhCLKOVwsSegQzGWsv%2BEKSTx0Fb%2B8HPSlhsxf8FdThHsI940pZWnsJysTieTC2cmVQksMfmaP5tBwir6sRnVxsTCPEGj9zmc46mcg9ORXbuUGnvSPpcImdV1M21rg9VCeOTudT3ez9JCSK0vwA1C%2BhqF2%2B%2FWgQl99XRRvJ5zsYF%2F4pB63mopsp4LiOzarTwNITvQX%2FZWt1970a3%2FjV1aK2mR6lQBh7IUHHqVAD8IhH6IOuARCBrqVgms4wp%2F4yPL5TUAA5z8zflyz%2BcZZkQY%2FY3it9L5TwI4KI%2FjkUdv0%2FdbmfcoaQnejM7ORC%2FMKAWOTQrYqOF667GgqH6y2SAPayU1tCfJ1JEgCD5bZAUTPauko8Mmt9KO4NOe0vkWeq0QXHKSJpgTT%2FpeUGEPyrWqtKARCsifcp0X83HVw0l2grhvmtxrmTDv7ofDBjqkASVFN8Q%2B2qF55vGsENEUT3PNn%2BnQzfD3fG%2BHpPLBV6jG5XuvYTIhebaFhIRn28bgTHEVQ06nvb%2FO212%2BtQH5Vpv6jbN4hmxc8xPQc%2BDad0%2FwOcjicrVCUnRvqERRAZOkXQjdmap5nG7n7AqLJXxMyl27bj0dcbtqRuYCIHwJPbZbtjYglbQwwwcON0cu%2Fk4DNUXDQKKQWqiXppKAtvT95YzqRnVq&X-Amz-Signature=f6cf62281e836c6ed160bbb563eca8b7611978481653ca0b1c3ab0ed473c75d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6235RP%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T051230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FfXIrc46xCt0jO%2F1viqOq2YNlEdPLS6ftnp3WQZCugIhALYmgQ3OLExCCXEY9k3%2FYaYXx%2Fcubm9LMYmfBvDMBbaRKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUK0%2Ffage5vtGiUV8q3AN%2Fz5DNstXcyho6yipH0sOyFN1UH9lOlWz1%2FFuwGctmB59dZmLw6sv%2BD%2Fnt8BZlZHD6CgDDSXLcMGj5rxMAAUzzclJcxvKJ1CpSDRQ5ZkoJBuGZtN3Bkxg15ZraHwHXCrGo7qzHfapnzARwobzgV6O%2BPzBRB4kNz2xnc24vg9OoGHQSoRrKQI1LAlt%2F3Pb02iGIfsiyuHwCqhCLKOVwsSegQzGWsv%2BEKSTx0Fb%2B8HPSlhsxf8FdThHsI940pZWnsJysTieTC2cmVQksMfmaP5tBwir6sRnVxsTCPEGj9zmc46mcg9ORXbuUGnvSPpcImdV1M21rg9VCeOTudT3ez9JCSK0vwA1C%2BhqF2%2B%2FWgQl99XRRvJ5zsYF%2F4pB63mopsp4LiOzarTwNITvQX%2FZWt1970a3%2FjV1aK2mR6lQBh7IUHHqVAD8IhH6IOuARCBrqVgms4wp%2F4yPL5TUAA5z8zflyz%2BcZZkQY%2FY3it9L5TwI4KI%2FjkUdv0%2FdbmfcoaQnejM7ORC%2FMKAWOTQrYqOF667GgqH6y2SAPayU1tCfJ1JEgCD5bZAUTPauko8Mmt9KO4NOe0vkWeq0QXHKSJpgTT%2FpeUGEPyrWqtKARCsifcp0X83HVw0l2grhvmtxrmTDv7ofDBjqkASVFN8Q%2B2qF55vGsENEUT3PNn%2BnQzfD3fG%2BHpPLBV6jG5XuvYTIhebaFhIRn28bgTHEVQ06nvb%2FO212%2BtQH5Vpv6jbN4hmxc8xPQc%2BDad0%2FwOcjicrVCUnRvqERRAZOkXQjdmap5nG7n7AqLJXxMyl27bj0dcbtqRuYCIHwJPbZbtjYglbQwwwcON0cu%2Fk4DNUXDQKKQWqiXppKAtvT95YzqRnVq&X-Amz-Signature=3a96c3b03161ad8dec557b7a4e10cd666746510fe03769e19ec865db823f31c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
