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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JXTNRWR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrXp8qzTCmAFLH%2BCACJsCUz4z9pu4dOHXBGr2IyR%2BtqgIhAN%2B3dJBbEaJSt%2FZUPk00I0%2F4l1GTobpAompZrn6BpAjJKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGo%2FNzuyEmFSbRYf4q3APrMSx6VoRW9DGDUFBabCuPND3bx72OrKSvkSW38Ky8PG6gLnGU0YBBynvlcZ9gmXmudlJXJwCZzZT%2BSF5BwBG60q19OpP9qWIzfb0kSqsPIdG%2Fi0lTexOZ2oQJiRGOoqD7Cdp6xub8iI3zdFKvodRgjU5wMXAGVjBzwCTNwGY%2FnVIo1ABbJZClR0HdYrr%2FF3ymVmEq7tOsE8vh2mVxOMYB2uD97uaSDtrgz5rKeeYk20wc1Di8LWdlLEnAAVKdKtLg7WAPd3u8HZcP6egOkJol622gvfdjLebJzj7zeqRyoCiqTQPYL1TZ2GTDxUjLlNSWKA%2BvL1U1V5Q%2BN5SQQxPLZaMuKR%2F%2BMOG2E%2F0mRYbXqOYntfdJo0PW4WbKAn9CingFYMftsAvxuPB9Ihzs2%2FJYA9u20DBaPijMTQhc28igqkKgt1aZ7BCNFziKe0nLLQc%2FrLATWMN2%2FptIxUEIWkjmIYXcvaT8a9P1pcmOUTldt%2BnN8t5iQ4tJfPWADddV9RwVOM6IN6kqltDF%2BfMTPx30VGuMtJVKupfnm4wWDvfqJXCcka9MQd0sYY0wrJi0d9uj%2FX%2BHdIyPegd9qYERfXiypGxgF0GHm0qP5%2FaO7uMk%2F4RwuWJucLbMNnGHqTD6%2BObEBjqkAXiapU4S2Yp4vVoOs%2FzKblavGgCAMC0xhzvVPdMPY8ClGLJhBYlMi5%2Bim9tickvp7G24MCsHuwMrbqUHdcIuBFldD7gqfqxIPaJ0wFXEC%2BDiXXgHlekxjDlviC3EeQAyZsAr1y2S4pP3aznDZnU%2BdZaWNW%2BT%2BNRFuGSYlI8cJ7s8ZqoQy2MpK9qCEKLfN9wILvKqWYAEUnNdc%2BWaL05V0yqAnJOb&X-Amz-Signature=34c61ca1377263667d861f4c1faab60607bbc89e9f12c5147441c3e19d5c66d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JXTNRWR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrXp8qzTCmAFLH%2BCACJsCUz4z9pu4dOHXBGr2IyR%2BtqgIhAN%2B3dJBbEaJSt%2FZUPk00I0%2F4l1GTobpAompZrn6BpAjJKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGo%2FNzuyEmFSbRYf4q3APrMSx6VoRW9DGDUFBabCuPND3bx72OrKSvkSW38Ky8PG6gLnGU0YBBynvlcZ9gmXmudlJXJwCZzZT%2BSF5BwBG60q19OpP9qWIzfb0kSqsPIdG%2Fi0lTexOZ2oQJiRGOoqD7Cdp6xub8iI3zdFKvodRgjU5wMXAGVjBzwCTNwGY%2FnVIo1ABbJZClR0HdYrr%2FF3ymVmEq7tOsE8vh2mVxOMYB2uD97uaSDtrgz5rKeeYk20wc1Di8LWdlLEnAAVKdKtLg7WAPd3u8HZcP6egOkJol622gvfdjLebJzj7zeqRyoCiqTQPYL1TZ2GTDxUjLlNSWKA%2BvL1U1V5Q%2BN5SQQxPLZaMuKR%2F%2BMOG2E%2F0mRYbXqOYntfdJo0PW4WbKAn9CingFYMftsAvxuPB9Ihzs2%2FJYA9u20DBaPijMTQhc28igqkKgt1aZ7BCNFziKe0nLLQc%2FrLATWMN2%2FptIxUEIWkjmIYXcvaT8a9P1pcmOUTldt%2BnN8t5iQ4tJfPWADddV9RwVOM6IN6kqltDF%2BfMTPx30VGuMtJVKupfnm4wWDvfqJXCcka9MQd0sYY0wrJi0d9uj%2FX%2BHdIyPegd9qYERfXiypGxgF0GHm0qP5%2FaO7uMk%2F4RwuWJucLbMNnGHqTD6%2BObEBjqkAXiapU4S2Yp4vVoOs%2FzKblavGgCAMC0xhzvVPdMPY8ClGLJhBYlMi5%2Bim9tickvp7G24MCsHuwMrbqUHdcIuBFldD7gqfqxIPaJ0wFXEC%2BDiXXgHlekxjDlviC3EeQAyZsAr1y2S4pP3aznDZnU%2BdZaWNW%2BT%2BNRFuGSYlI8cJ7s8ZqoQy2MpK9qCEKLfN9wILvKqWYAEUnNdc%2BWaL05V0yqAnJOb&X-Amz-Signature=79ce706337965b65bce62e9001d901f4cc3dcf07cb518d25770f1c913c3c6804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JXTNRWR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrXp8qzTCmAFLH%2BCACJsCUz4z9pu4dOHXBGr2IyR%2BtqgIhAN%2B3dJBbEaJSt%2FZUPk00I0%2F4l1GTobpAompZrn6BpAjJKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGo%2FNzuyEmFSbRYf4q3APrMSx6VoRW9DGDUFBabCuPND3bx72OrKSvkSW38Ky8PG6gLnGU0YBBynvlcZ9gmXmudlJXJwCZzZT%2BSF5BwBG60q19OpP9qWIzfb0kSqsPIdG%2Fi0lTexOZ2oQJiRGOoqD7Cdp6xub8iI3zdFKvodRgjU5wMXAGVjBzwCTNwGY%2FnVIo1ABbJZClR0HdYrr%2FF3ymVmEq7tOsE8vh2mVxOMYB2uD97uaSDtrgz5rKeeYk20wc1Di8LWdlLEnAAVKdKtLg7WAPd3u8HZcP6egOkJol622gvfdjLebJzj7zeqRyoCiqTQPYL1TZ2GTDxUjLlNSWKA%2BvL1U1V5Q%2BN5SQQxPLZaMuKR%2F%2BMOG2E%2F0mRYbXqOYntfdJo0PW4WbKAn9CingFYMftsAvxuPB9Ihzs2%2FJYA9u20DBaPijMTQhc28igqkKgt1aZ7BCNFziKe0nLLQc%2FrLATWMN2%2FptIxUEIWkjmIYXcvaT8a9P1pcmOUTldt%2BnN8t5iQ4tJfPWADddV9RwVOM6IN6kqltDF%2BfMTPx30VGuMtJVKupfnm4wWDvfqJXCcka9MQd0sYY0wrJi0d9uj%2FX%2BHdIyPegd9qYERfXiypGxgF0GHm0qP5%2FaO7uMk%2F4RwuWJucLbMNnGHqTD6%2BObEBjqkAXiapU4S2Yp4vVoOs%2FzKblavGgCAMC0xhzvVPdMPY8ClGLJhBYlMi5%2Bim9tickvp7G24MCsHuwMrbqUHdcIuBFldD7gqfqxIPaJ0wFXEC%2BDiXXgHlekxjDlviC3EeQAyZsAr1y2S4pP3aznDZnU%2BdZaWNW%2BT%2BNRFuGSYlI8cJ7s8ZqoQy2MpK9qCEKLfN9wILvKqWYAEUnNdc%2BWaL05V0yqAnJOb&X-Amz-Signature=c67d417f0030d39c815685f32a24c8e8fe5f686a7a92d15a8c3d8f86d006998f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
