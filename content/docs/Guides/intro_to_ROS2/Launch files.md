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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZA7ITJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDY5tRtdq04hjc3owPzVl0YTz0SmPxo9rRN8kNR%2BNX1%2FwIhAN%2BuUZhMKxM2P%2FVug8Pd2z%2FiupSFedHZCjSfySth645LKv8DCHAQABoMNjM3NDIzMTgzODA1Igz7sVwWiFPI%2BrrcnQAq3AOMGGZWXyb4sd8QaoK%2B7FQZDa%2FL5f3rj1jDZZAdcjlT%2Bq1CsKC%2F48gF%2Bp3tObXM78GdezKEzBa91lYSxzMfhW4Ld8r%2Fwo7dmiOYQIKLkhvAa%2BlGnElTnU%2FUOVd6S4zPfIGlaPczHT6LdYA%2FcF0sG8%2FAFLddDrxzV5XbMAzH%2BqOrHuqJsMurwsEOWcj8nr9i4Hdn%2Baj%2F7LeCOKzOg%2FMyf8bZrgfnaL%2FIeqVAwOlwPG5knUluWsj0Hkuny4oMMYOAl3HhoYTaFoF9prOruzw4Oh1193xueaoMppmNQ5vj5p%2FaPe6cugnNQBGBQQxqgY1BxAHex3LqPlcPGYYfqKuQhdW%2FvIjL1V3oGsXlQwy%2FRbsJjV15YkCAYeLxwz2cpRdL9i%2Bv8TfVBN03Cu%2BDormGox3edpnfhl7Ue42leIXCLEYnIaQ1QH%2BdP4z40JIPmCZq2CltmpUV31mJQk%2F48hgR01pRyWuFr37SqfaYdWpQE%2BSQCRMc8IHyDpj%2FpUH54Us2XSrFQ%2BxXQ9ZI9lIaB%2FejrE8mPiT53%2BzfktqfmpJqCdhLqW%2B%2BL%2B3tjpVJYP9mo0xR20QIZTrf7%2Bh73CEjJ2582O2u1SDJ8dxMFug57IH%2BBdzOkMWbzjOY1%2F1Frxi%2FtTD2%2FrS%2BBjqkAXF9iipXcdf286BjHJNpAiza4ZDtD9N5lwz3KZOv1tB12o5UZlTtql5I6pWC8MxkcES7HWML2P6b%2BKttUinrZ7oJ%2Bp1hV0RnNKoVG0kAS%2Fl1bBgjl1I2NzqK8X0o4DrIJM6XsGiWwPy%2BjNaZWEymK9uQ8xH7r4V1n5Mi2czEMP7vso9HU3ZuqTk9F3bfaUizHFgGhRjL5X2PxyJFevKIWs3JiAUY&X-Amz-Signature=76bc2968bb5522865fd8b720b5c77a1d89fdff99d38a7254f34f2634848ab6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZA7ITJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDY5tRtdq04hjc3owPzVl0YTz0SmPxo9rRN8kNR%2BNX1%2FwIhAN%2BuUZhMKxM2P%2FVug8Pd2z%2FiupSFedHZCjSfySth645LKv8DCHAQABoMNjM3NDIzMTgzODA1Igz7sVwWiFPI%2BrrcnQAq3AOMGGZWXyb4sd8QaoK%2B7FQZDa%2FL5f3rj1jDZZAdcjlT%2Bq1CsKC%2F48gF%2Bp3tObXM78GdezKEzBa91lYSxzMfhW4Ld8r%2Fwo7dmiOYQIKLkhvAa%2BlGnElTnU%2FUOVd6S4zPfIGlaPczHT6LdYA%2FcF0sG8%2FAFLddDrxzV5XbMAzH%2BqOrHuqJsMurwsEOWcj8nr9i4Hdn%2Baj%2F7LeCOKzOg%2FMyf8bZrgfnaL%2FIeqVAwOlwPG5knUluWsj0Hkuny4oMMYOAl3HhoYTaFoF9prOruzw4Oh1193xueaoMppmNQ5vj5p%2FaPe6cugnNQBGBQQxqgY1BxAHex3LqPlcPGYYfqKuQhdW%2FvIjL1V3oGsXlQwy%2FRbsJjV15YkCAYeLxwz2cpRdL9i%2Bv8TfVBN03Cu%2BDormGox3edpnfhl7Ue42leIXCLEYnIaQ1QH%2BdP4z40JIPmCZq2CltmpUV31mJQk%2F48hgR01pRyWuFr37SqfaYdWpQE%2BSQCRMc8IHyDpj%2FpUH54Us2XSrFQ%2BxXQ9ZI9lIaB%2FejrE8mPiT53%2BzfktqfmpJqCdhLqW%2B%2BL%2B3tjpVJYP9mo0xR20QIZTrf7%2Bh73CEjJ2582O2u1SDJ8dxMFug57IH%2BBdzOkMWbzjOY1%2F1Frxi%2FtTD2%2FrS%2BBjqkAXF9iipXcdf286BjHJNpAiza4ZDtD9N5lwz3KZOv1tB12o5UZlTtql5I6pWC8MxkcES7HWML2P6b%2BKttUinrZ7oJ%2Bp1hV0RnNKoVG0kAS%2Fl1bBgjl1I2NzqK8X0o4DrIJM6XsGiWwPy%2BjNaZWEymK9uQ8xH7r4V1n5Mi2czEMP7vso9HU3ZuqTk9F3bfaUizHFgGhRjL5X2PxyJFevKIWs3JiAUY&X-Amz-Signature=778ad853912642c3c3e23e96c422988d96e8703e0de3bed291e4566f77903df5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZA7ITJ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDY5tRtdq04hjc3owPzVl0YTz0SmPxo9rRN8kNR%2BNX1%2FwIhAN%2BuUZhMKxM2P%2FVug8Pd2z%2FiupSFedHZCjSfySth645LKv8DCHAQABoMNjM3NDIzMTgzODA1Igz7sVwWiFPI%2BrrcnQAq3AOMGGZWXyb4sd8QaoK%2B7FQZDa%2FL5f3rj1jDZZAdcjlT%2Bq1CsKC%2F48gF%2Bp3tObXM78GdezKEzBa91lYSxzMfhW4Ld8r%2Fwo7dmiOYQIKLkhvAa%2BlGnElTnU%2FUOVd6S4zPfIGlaPczHT6LdYA%2FcF0sG8%2FAFLddDrxzV5XbMAzH%2BqOrHuqJsMurwsEOWcj8nr9i4Hdn%2Baj%2F7LeCOKzOg%2FMyf8bZrgfnaL%2FIeqVAwOlwPG5knUluWsj0Hkuny4oMMYOAl3HhoYTaFoF9prOruzw4Oh1193xueaoMppmNQ5vj5p%2FaPe6cugnNQBGBQQxqgY1BxAHex3LqPlcPGYYfqKuQhdW%2FvIjL1V3oGsXlQwy%2FRbsJjV15YkCAYeLxwz2cpRdL9i%2Bv8TfVBN03Cu%2BDormGox3edpnfhl7Ue42leIXCLEYnIaQ1QH%2BdP4z40JIPmCZq2CltmpUV31mJQk%2F48hgR01pRyWuFr37SqfaYdWpQE%2BSQCRMc8IHyDpj%2FpUH54Us2XSrFQ%2BxXQ9ZI9lIaB%2FejrE8mPiT53%2BzfktqfmpJqCdhLqW%2B%2BL%2B3tjpVJYP9mo0xR20QIZTrf7%2Bh73CEjJ2582O2u1SDJ8dxMFug57IH%2BBdzOkMWbzjOY1%2F1Frxi%2FtTD2%2FrS%2BBjqkAXF9iipXcdf286BjHJNpAiza4ZDtD9N5lwz3KZOv1tB12o5UZlTtql5I6pWC8MxkcES7HWML2P6b%2BKttUinrZ7oJ%2Bp1hV0RnNKoVG0kAS%2Fl1bBgjl1I2NzqK8X0o4DrIJM6XsGiWwPy%2BjNaZWEymK9uQ8xH7r4V1n5Mi2czEMP7vso9HU3ZuqTk9F3bfaUizHFgGhRjL5X2PxyJFevKIWs3JiAUY&X-Amz-Signature=8cfe662b69ae69fa6e775855e111b3023ce0d4abc2dee9d5060a2e098684bf44&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
