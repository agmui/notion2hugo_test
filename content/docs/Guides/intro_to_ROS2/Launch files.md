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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHXGU3L%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBNEGSBWke%2FyBE9XIAGiQ4mFjbYgm65VJ8OFIf1OxnRJAiEAmukeN0OQ5CODuWwpouZeXK5uJXCWh2AJFGnutAQW270qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9DHgmTfJSDzmxHircA26STyld8soWYAkwVNIKHM%2Bbl%2FY4GbKJjgdBsiZ%2B%2BqRv7Aw1nhBBaagLG6Udq8mQqeyI37LNkwYjyOCTlntWOFU6o1GPE0166BFrUWhvCd5tQPoyUcQBv89cquc6AXbU2MeOvwb1hcmAyzUMnwFOWJj3v%2BUBNyG%2BGKQU2BBFxnCqJ3cJeeDy2ZPjiPt0HgAwSB01J3DhF%2FI3X81h8ETnLW2%2FuoRv5551UrJsK%2BX73uXpDFq8GrSJNSBycR7yjtwOQXvuuxZquUS7iKt6uNOl6QgareK6aA1Hkkew3ZTZe21Lkit%2BGSBXDrVCcysBqeb97D61J0JA%2BgfoqzdJD%2FNrX%2Fs09ocArBaQ%2BycF50eZJPDfDjgkZBaGeGUoKh2J62mlJMiftDe7gezl0dFQBdJDb46lJpDpKcnbw%2BzyYRIXCZg3gxsYsZzCGd%2BtC3CyHw9%2FIs8pJ%2BZQLQvfEi85mODd6lKh8qOQzXyyYOzewVVNNW79edbEU00hPxB70a0tD10i2RPaLuxo1D15OnHuypF0temRzsbyHLe8bmBcBziHCJ2rGsLHCxi1WeNR8pKt4O9RLPljEM%2B2%2FFdhc%2Fw%2F4HNWC3zt5F3sKMxt6fwFwqLyJFWjha1UYjqpCHQBORsUMMf09cEGOqUBDzDQz%2FIYabiOq4yxsnHLUozQfgegGWyTnCO%2Bp87xiJ3UEXmjPjGLVl5VbxjO%2FhDVEDhvu5lHrWM4C1H%2FeEE%2B7vONLYhHLMLbKkYkz8DBX9XhEdI7EliD%2B46QdRR4%2FX%2FgPVgQFeqM4hcvJynbOx3qNU6xYcwe17Kjnb16idkKlN%2FGNqNmoLIaeDAopUtfa45v3vRIXmFhc4pGozRnYCIBRlW6kmc1&X-Amz-Signature=538d91cb00448214f9ebfe2c0e574b5fb01b874c0f62134fdd2ddf07a7ff884a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHXGU3L%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBNEGSBWke%2FyBE9XIAGiQ4mFjbYgm65VJ8OFIf1OxnRJAiEAmukeN0OQ5CODuWwpouZeXK5uJXCWh2AJFGnutAQW270qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9DHgmTfJSDzmxHircA26STyld8soWYAkwVNIKHM%2Bbl%2FY4GbKJjgdBsiZ%2B%2BqRv7Aw1nhBBaagLG6Udq8mQqeyI37LNkwYjyOCTlntWOFU6o1GPE0166BFrUWhvCd5tQPoyUcQBv89cquc6AXbU2MeOvwb1hcmAyzUMnwFOWJj3v%2BUBNyG%2BGKQU2BBFxnCqJ3cJeeDy2ZPjiPt0HgAwSB01J3DhF%2FI3X81h8ETnLW2%2FuoRv5551UrJsK%2BX73uXpDFq8GrSJNSBycR7yjtwOQXvuuxZquUS7iKt6uNOl6QgareK6aA1Hkkew3ZTZe21Lkit%2BGSBXDrVCcysBqeb97D61J0JA%2BgfoqzdJD%2FNrX%2Fs09ocArBaQ%2BycF50eZJPDfDjgkZBaGeGUoKh2J62mlJMiftDe7gezl0dFQBdJDb46lJpDpKcnbw%2BzyYRIXCZg3gxsYsZzCGd%2BtC3CyHw9%2FIs8pJ%2BZQLQvfEi85mODd6lKh8qOQzXyyYOzewVVNNW79edbEU00hPxB70a0tD10i2RPaLuxo1D15OnHuypF0temRzsbyHLe8bmBcBziHCJ2rGsLHCxi1WeNR8pKt4O9RLPljEM%2B2%2FFdhc%2Fw%2F4HNWC3zt5F3sKMxt6fwFwqLyJFWjha1UYjqpCHQBORsUMMf09cEGOqUBDzDQz%2FIYabiOq4yxsnHLUozQfgegGWyTnCO%2Bp87xiJ3UEXmjPjGLVl5VbxjO%2FhDVEDhvu5lHrWM4C1H%2FeEE%2B7vONLYhHLMLbKkYkz8DBX9XhEdI7EliD%2B46QdRR4%2FX%2FgPVgQFeqM4hcvJynbOx3qNU6xYcwe17Kjnb16idkKlN%2FGNqNmoLIaeDAopUtfa45v3vRIXmFhc4pGozRnYCIBRlW6kmc1&X-Amz-Signature=cc6152427e1529f3c5d448a5b709744a375180fc8adebfd946123eec365707c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHXGU3L%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBNEGSBWke%2FyBE9XIAGiQ4mFjbYgm65VJ8OFIf1OxnRJAiEAmukeN0OQ5CODuWwpouZeXK5uJXCWh2AJFGnutAQW270qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDL9DHgmTfJSDzmxHircA26STyld8soWYAkwVNIKHM%2Bbl%2FY4GbKJjgdBsiZ%2B%2BqRv7Aw1nhBBaagLG6Udq8mQqeyI37LNkwYjyOCTlntWOFU6o1GPE0166BFrUWhvCd5tQPoyUcQBv89cquc6AXbU2MeOvwb1hcmAyzUMnwFOWJj3v%2BUBNyG%2BGKQU2BBFxnCqJ3cJeeDy2ZPjiPt0HgAwSB01J3DhF%2FI3X81h8ETnLW2%2FuoRv5551UrJsK%2BX73uXpDFq8GrSJNSBycR7yjtwOQXvuuxZquUS7iKt6uNOl6QgareK6aA1Hkkew3ZTZe21Lkit%2BGSBXDrVCcysBqeb97D61J0JA%2BgfoqzdJD%2FNrX%2Fs09ocArBaQ%2BycF50eZJPDfDjgkZBaGeGUoKh2J62mlJMiftDe7gezl0dFQBdJDb46lJpDpKcnbw%2BzyYRIXCZg3gxsYsZzCGd%2BtC3CyHw9%2FIs8pJ%2BZQLQvfEi85mODd6lKh8qOQzXyyYOzewVVNNW79edbEU00hPxB70a0tD10i2RPaLuxo1D15OnHuypF0temRzsbyHLe8bmBcBziHCJ2rGsLHCxi1WeNR8pKt4O9RLPljEM%2B2%2FFdhc%2Fw%2F4HNWC3zt5F3sKMxt6fwFwqLyJFWjha1UYjqpCHQBORsUMMf09cEGOqUBDzDQz%2FIYabiOq4yxsnHLUozQfgegGWyTnCO%2Bp87xiJ3UEXmjPjGLVl5VbxjO%2FhDVEDhvu5lHrWM4C1H%2FeEE%2B7vONLYhHLMLbKkYkz8DBX9XhEdI7EliD%2B46QdRR4%2FX%2FgPVgQFeqM4hcvJynbOx3qNU6xYcwe17Kjnb16idkKlN%2FGNqNmoLIaeDAopUtfa45v3vRIXmFhc4pGozRnYCIBRlW6kmc1&X-Amz-Signature=a549ca3aac2f49845c00a658711d06036df14507b51e1f35061aa61f4521c30e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
