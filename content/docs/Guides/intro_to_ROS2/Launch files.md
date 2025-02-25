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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJO7W2S%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCb24pMb2l76zmW%2Bz7hQpppzR%2FyAfy2nz1C0XFBvirK0wIhAOdmW1zIlvTEXimsbrL1K6IbgdQC851z18r9UlkfqqyFKv8DCEcQABoMNjM3NDIzMTgzODA1IgzUaXhJNmY5sJW9okwq3APLW3JhcXE4m0EILxtkI9iLjYSxLlTn1De6RjOLF8Ftuy74GWrfjPXZLU7YJoY2vcK33R3ov0i9Wyq%2BJLMakoS0NSs3vwAGmbcxs%2FqkGTX%2BNFSkMPfn58NKx7y4pMGDWVckD8FLkjFG67arxeLdtMcyRL6B4PYUlJM6ot9vJVVU4vIW6aJ%2FJIIVIvV5d53zZNwDAzKP1J9MB2u1hl7WBiLwmmHS4hXXq5alglO1tkstI4DM7FW21bf1AKALr%2Byg7NyXcRrwtzz3NHCMF9PQA3FsnoU020XslFjs5kzGs8si1pQXfKTlTD6cJvLUJFTH8nNy3r7QvQ7elZVelzmTNt01PnWRh1QL%2BNn2OGcn9S01jF%2Bod0nfH37nJGRLu5IWgRQ5LKeb7V%2FFoXXLPLpZLjlx1h9mpUzqgD%2FJu9CjUmXB4HF2XfBWsnmXpIZ00ixOcFamSz9OykAhW71CfZUP7gY%2FBOl8Id1O%2FvPLn29XFWsyPZ620TdRGp%2Br1CO%2FreczzqUDRWhflESa57lrxyiN81ONFAAHzc%2FMzN9i0EwXfNyp7wRBSFCdfEi%2BA79UpejANBTqxeJZMeesZ9focGgDGlrnvw2PDp4TTml3aJoU%2FNIt2fvED4OP7%2BIFC%2FHL5jCIlve9BjqkATos5d0vKmOGHtZUyrQ0vc95BjfEiScvihpianfQAq7zRHOcJ3vzLkKGiO0Si6%2BqEPBN8Plbt2HQt%2Fzxj2EAF1CxPeyoDfqG2b3c0OZQt3Nv3Mo67xMOgK8fLP0g5OeVMdTidOB6LR39QojlWPlnN0LA11GnShMrqmx%2BY56rBUtPMQJ8qYMltplcPNGOPL%2Ft%2F67UxusYbrPbOCqXbB4%2B%2FEi1a49p&X-Amz-Signature=d540b6c4f4828d1a2ec4c5a8089141dd1caece6c0fd487c182f24a86ead1bbc4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJO7W2S%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCb24pMb2l76zmW%2Bz7hQpppzR%2FyAfy2nz1C0XFBvirK0wIhAOdmW1zIlvTEXimsbrL1K6IbgdQC851z18r9UlkfqqyFKv8DCEcQABoMNjM3NDIzMTgzODA1IgzUaXhJNmY5sJW9okwq3APLW3JhcXE4m0EILxtkI9iLjYSxLlTn1De6RjOLF8Ftuy74GWrfjPXZLU7YJoY2vcK33R3ov0i9Wyq%2BJLMakoS0NSs3vwAGmbcxs%2FqkGTX%2BNFSkMPfn58NKx7y4pMGDWVckD8FLkjFG67arxeLdtMcyRL6B4PYUlJM6ot9vJVVU4vIW6aJ%2FJIIVIvV5d53zZNwDAzKP1J9MB2u1hl7WBiLwmmHS4hXXq5alglO1tkstI4DM7FW21bf1AKALr%2Byg7NyXcRrwtzz3NHCMF9PQA3FsnoU020XslFjs5kzGs8si1pQXfKTlTD6cJvLUJFTH8nNy3r7QvQ7elZVelzmTNt01PnWRh1QL%2BNn2OGcn9S01jF%2Bod0nfH37nJGRLu5IWgRQ5LKeb7V%2FFoXXLPLpZLjlx1h9mpUzqgD%2FJu9CjUmXB4HF2XfBWsnmXpIZ00ixOcFamSz9OykAhW71CfZUP7gY%2FBOl8Id1O%2FvPLn29XFWsyPZ620TdRGp%2Br1CO%2FreczzqUDRWhflESa57lrxyiN81ONFAAHzc%2FMzN9i0EwXfNyp7wRBSFCdfEi%2BA79UpejANBTqxeJZMeesZ9focGgDGlrnvw2PDp4TTml3aJoU%2FNIt2fvED4OP7%2BIFC%2FHL5jCIlve9BjqkATos5d0vKmOGHtZUyrQ0vc95BjfEiScvihpianfQAq7zRHOcJ3vzLkKGiO0Si6%2BqEPBN8Plbt2HQt%2Fzxj2EAF1CxPeyoDfqG2b3c0OZQt3Nv3Mo67xMOgK8fLP0g5OeVMdTidOB6LR39QojlWPlnN0LA11GnShMrqmx%2BY56rBUtPMQJ8qYMltplcPNGOPL%2Ft%2F67UxusYbrPbOCqXbB4%2B%2FEi1a49p&X-Amz-Signature=6edd3463676723edf6fa67fca3479732bef1e47cbe8201b498335b2fa4165021&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVJO7W2S%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCb24pMb2l76zmW%2Bz7hQpppzR%2FyAfy2nz1C0XFBvirK0wIhAOdmW1zIlvTEXimsbrL1K6IbgdQC851z18r9UlkfqqyFKv8DCEcQABoMNjM3NDIzMTgzODA1IgzUaXhJNmY5sJW9okwq3APLW3JhcXE4m0EILxtkI9iLjYSxLlTn1De6RjOLF8Ftuy74GWrfjPXZLU7YJoY2vcK33R3ov0i9Wyq%2BJLMakoS0NSs3vwAGmbcxs%2FqkGTX%2BNFSkMPfn58NKx7y4pMGDWVckD8FLkjFG67arxeLdtMcyRL6B4PYUlJM6ot9vJVVU4vIW6aJ%2FJIIVIvV5d53zZNwDAzKP1J9MB2u1hl7WBiLwmmHS4hXXq5alglO1tkstI4DM7FW21bf1AKALr%2Byg7NyXcRrwtzz3NHCMF9PQA3FsnoU020XslFjs5kzGs8si1pQXfKTlTD6cJvLUJFTH8nNy3r7QvQ7elZVelzmTNt01PnWRh1QL%2BNn2OGcn9S01jF%2Bod0nfH37nJGRLu5IWgRQ5LKeb7V%2FFoXXLPLpZLjlx1h9mpUzqgD%2FJu9CjUmXB4HF2XfBWsnmXpIZ00ixOcFamSz9OykAhW71CfZUP7gY%2FBOl8Id1O%2FvPLn29XFWsyPZ620TdRGp%2Br1CO%2FreczzqUDRWhflESa57lrxyiN81ONFAAHzc%2FMzN9i0EwXfNyp7wRBSFCdfEi%2BA79UpejANBTqxeJZMeesZ9focGgDGlrnvw2PDp4TTml3aJoU%2FNIt2fvED4OP7%2BIFC%2FHL5jCIlve9BjqkATos5d0vKmOGHtZUyrQ0vc95BjfEiScvihpianfQAq7zRHOcJ3vzLkKGiO0Si6%2BqEPBN8Plbt2HQt%2Fzxj2EAF1CxPeyoDfqG2b3c0OZQt3Nv3Mo67xMOgK8fLP0g5OeVMdTidOB6LR39QojlWPlnN0LA11GnShMrqmx%2BY56rBUtPMQJ8qYMltplcPNGOPL%2Ft%2F67UxusYbrPbOCqXbB4%2B%2FEi1a49p&X-Amz-Signature=991cf4bb9e3b457710db2b712a931bac3161e656a4f1a36a667a54c500bbab8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
