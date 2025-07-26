---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4WQPLL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGey7Y1FuDyPbu1Z737A2wdicwNiZeoF%2FnBT4%2B8npak1AiAOLffxeoaKGIdkTAxSN9iTBCSPf%2FtDDNaRr1uLATjU8Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM7hFGxF%2BcdWhwC6yXKtwDurgWfPQoIGX%2FRtzovLTFhYevJ8a6JAuefTHvp%2Fl6BwULzMOFPb0NlLWWQHyxFtQ3ZIW0%2BiaKOACKoxzaR3cqJH38tITVvH%2Fu8j6Ab3ocWQYYqd24arqU2YdxuFmvMzjjXTVhsVpE5W8NtJDqC08SiN5bXfLd68P%2FleSnQrFlMKQ%2Ba4E9QYTFLDgWgenGxKORCmHg180%2F1lq%2F225EMose95DVKVvrEU6g%2Fys%2B17GGxt8mQaF77vRE772cljEN4shoVRPhiPvzk%2B%2BcgbTsx3pSzmQif0Ul23Sd49FUTYRs8vX6PWPqY10Ev9455t5kQjsA6FsqAkC63CjmbqE3P11MKhD7fqFvJ8wChy98G3tLjOFK4PL2CwnNoReQ%2BC6WjCson4b27rg%2B2mFtLl7SHW%2BoGdDxXdeS%2BNEOPwTsG3Bs2KirBCLYIeZ6PqDVV%2FhlhwL%2BTKceDA2%2F2p2b3OHJK27c0g4%2BqOHa9e5KZnouOPWxxbDg%2F7c%2Bx%2BM0EovccpU3H5fUiQeZBRSDP24z%2Be7tGyY5uj9%2FT%2B7wE%2BAs39U%2B7H4b3nZawIe6yPl1590teeQiqg%2BLebg5ov3uEIGbHbZ9y3bM4Nf%2B9sAAd89RwKbFixWrTai%2FE6gTpbRQhyk8E%2Fww%2BP6UxAY6pgE3a2T0nlp0ov6K0NnDZkfdrkJE7RkqwqgwadWpou94cifjQcX0KVg0m0ZH6yXpSzLYo0AKOdm2S8L1uLjzN05YYn8a4mwGr%2BBrFCox77209jP922vQ8AWF%2BG6KwkOqHikAbAlfZ3EI7g5z1B5fQ4Fc%2FqzkjplY%2BgfSAKdzRY7sRKgZS8%2F5N2SDhIfJ1sPbUMipzczBlPPwY%2FNsjGaNwAObthZSanst&X-Amz-Signature=bb332269b5e089dc330dfabf5d900fd8579bb33e6ff346a4a0d8973167cf5386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4WQPLL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGey7Y1FuDyPbu1Z737A2wdicwNiZeoF%2FnBT4%2B8npak1AiAOLffxeoaKGIdkTAxSN9iTBCSPf%2FtDDNaRr1uLATjU8Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM7hFGxF%2BcdWhwC6yXKtwDurgWfPQoIGX%2FRtzovLTFhYevJ8a6JAuefTHvp%2Fl6BwULzMOFPb0NlLWWQHyxFtQ3ZIW0%2BiaKOACKoxzaR3cqJH38tITVvH%2Fu8j6Ab3ocWQYYqd24arqU2YdxuFmvMzjjXTVhsVpE5W8NtJDqC08SiN5bXfLd68P%2FleSnQrFlMKQ%2Ba4E9QYTFLDgWgenGxKORCmHg180%2F1lq%2F225EMose95DVKVvrEU6g%2Fys%2B17GGxt8mQaF77vRE772cljEN4shoVRPhiPvzk%2B%2BcgbTsx3pSzmQif0Ul23Sd49FUTYRs8vX6PWPqY10Ev9455t5kQjsA6FsqAkC63CjmbqE3P11MKhD7fqFvJ8wChy98G3tLjOFK4PL2CwnNoReQ%2BC6WjCson4b27rg%2B2mFtLl7SHW%2BoGdDxXdeS%2BNEOPwTsG3Bs2KirBCLYIeZ6PqDVV%2FhlhwL%2BTKceDA2%2F2p2b3OHJK27c0g4%2BqOHa9e5KZnouOPWxxbDg%2F7c%2Bx%2BM0EovccpU3H5fUiQeZBRSDP24z%2Be7tGyY5uj9%2FT%2B7wE%2BAs39U%2B7H4b3nZawIe6yPl1590teeQiqg%2BLebg5ov3uEIGbHbZ9y3bM4Nf%2B9sAAd89RwKbFixWrTai%2FE6gTpbRQhyk8E%2Fww%2BP6UxAY6pgE3a2T0nlp0ov6K0NnDZkfdrkJE7RkqwqgwadWpou94cifjQcX0KVg0m0ZH6yXpSzLYo0AKOdm2S8L1uLjzN05YYn8a4mwGr%2BBrFCox77209jP922vQ8AWF%2BG6KwkOqHikAbAlfZ3EI7g5z1B5fQ4Fc%2FqzkjplY%2BgfSAKdzRY7sRKgZS8%2F5N2SDhIfJ1sPbUMipzczBlPPwY%2FNsjGaNwAObthZSanst&X-Amz-Signature=0fd0739bc6cb94f924b7e21d5720f63207a93fa746ce1996ae8c1453cb0b089e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF4WQPLL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGey7Y1FuDyPbu1Z737A2wdicwNiZeoF%2FnBT4%2B8npak1AiAOLffxeoaKGIdkTAxSN9iTBCSPf%2FtDDNaRr1uLATjU8Cr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM7hFGxF%2BcdWhwC6yXKtwDurgWfPQoIGX%2FRtzovLTFhYevJ8a6JAuefTHvp%2Fl6BwULzMOFPb0NlLWWQHyxFtQ3ZIW0%2BiaKOACKoxzaR3cqJH38tITVvH%2Fu8j6Ab3ocWQYYqd24arqU2YdxuFmvMzjjXTVhsVpE5W8NtJDqC08SiN5bXfLd68P%2FleSnQrFlMKQ%2Ba4E9QYTFLDgWgenGxKORCmHg180%2F1lq%2F225EMose95DVKVvrEU6g%2Fys%2B17GGxt8mQaF77vRE772cljEN4shoVRPhiPvzk%2B%2BcgbTsx3pSzmQif0Ul23Sd49FUTYRs8vX6PWPqY10Ev9455t5kQjsA6FsqAkC63CjmbqE3P11MKhD7fqFvJ8wChy98G3tLjOFK4PL2CwnNoReQ%2BC6WjCson4b27rg%2B2mFtLl7SHW%2BoGdDxXdeS%2BNEOPwTsG3Bs2KirBCLYIeZ6PqDVV%2FhlhwL%2BTKceDA2%2F2p2b3OHJK27c0g4%2BqOHa9e5KZnouOPWxxbDg%2F7c%2Bx%2BM0EovccpU3H5fUiQeZBRSDP24z%2Be7tGyY5uj9%2FT%2B7wE%2BAs39U%2B7H4b3nZawIe6yPl1590teeQiqg%2BLebg5ov3uEIGbHbZ9y3bM4Nf%2B9sAAd89RwKbFixWrTai%2FE6gTpbRQhyk8E%2Fww%2BP6UxAY6pgE3a2T0nlp0ov6K0NnDZkfdrkJE7RkqwqgwadWpou94cifjQcX0KVg0m0ZH6yXpSzLYo0AKOdm2S8L1uLjzN05YYn8a4mwGr%2BBrFCox77209jP922vQ8AWF%2BG6KwkOqHikAbAlfZ3EI7g5z1B5fQ4Fc%2FqzkjplY%2BgfSAKdzRY7sRKgZS8%2F5N2SDhIfJ1sPbUMipzczBlPPwY%2FNsjGaNwAObthZSanst&X-Amz-Signature=a52fd991994349acbe16a13806d4d9bf0eaace1e39a1c11cbaf741fe342fc638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
