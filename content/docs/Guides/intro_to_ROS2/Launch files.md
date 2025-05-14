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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJZU7XL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDnfKNu9xPuUmkAkFDdgmiiXehPG7y9Egn49DwWiziWRgIhAL2USSAk0YC8t0JZbgPe2p9kqJZMKxPnPyYIQUT7Vi3QKv8DCBkQABoMNjM3NDIzMTgzODA1IgwBJ1Noy%2FWlTssoIesq3AO1uvOQHtgPv77VkrHF6j9E2jye6%2FO8QZw4PQUXsv82NqLVU8Cl2s3vcePVx9w%2FbB7di5Yze2wB1%2FHAAbJGmjy5DqM3Dxzorwy9NrwsRHcZwD5UgjwMuA%2F%2BSwYuBNKvnVtjuDye%2BrOoTDTOGJGaodKIbe5fNZK4t%2BhKkujS7Hfqxq2qeuneqoKsrIylnWSR%2BI2hPvzK0VjBJ56FUeZPSelGQV0hDtebvmH1kxcuYhUJTV11STB%2FNZKUqDzivWOVyZ2Lda2PvUjLSsabPcrtZ9hA600zNSfiGsG%2FZKZ0aPId0SFxFeHqOtSDw1uiy%2FKcueXFh1LxuYkjH4yzS18h%2BrIiigxCujSa3Cr8nXEPxXK%2B5fW28MNkiUOrUlbYHsJUAFGTunc56fw7UiIPp7nCeDWlrTl239FiMvsmnSoGPiaJvNcM5glUf3ZWqah6js%2FBQuywx7lHpN46A51VjeMINgHW4QOWSOfmTzyXKYez4ahfZMZ6yQ3O9dEwDSNa1E3OkpU7LR1MWjt%2FU9rAG92Yo7U0YhbUvXcUgk%2FkEtJ9Um7HiwYnbIhqmycTDM7lKO36xqs%2FqQV%2BocI21N0o1VDzbx5Gbl0XVAxlPbEd8w4zmVGnq%2BEhdBnUn7WaEgRE6TCEiJPBBjqkARZ4bPvzznTnCOP52IlR%2FSYuSrqY98xBskoD1X7qW56HybHeDneC7%2FAQ6%2F6qkYgWC%2BUjCv11lr3tUxAj4MfVGzZwu7xH6UwVQqvw5U3rA9bNFtOIfTJX%2FKdD98v1Hf2mXEQoGGzpIiJUuYTXA8wzLfdNiXpkFx2nL46tHA8p%2F90nHo5gNffHuUNQuSXuu6lxYfckkh%2BJwlSrIQTSepAM9Jna2WLF&X-Amz-Signature=dd90013b357be52dc4b2c5fec91d67442fe099af079f6ff44efab135ee29f5af&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJZU7XL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDnfKNu9xPuUmkAkFDdgmiiXehPG7y9Egn49DwWiziWRgIhAL2USSAk0YC8t0JZbgPe2p9kqJZMKxPnPyYIQUT7Vi3QKv8DCBkQABoMNjM3NDIzMTgzODA1IgwBJ1Noy%2FWlTssoIesq3AO1uvOQHtgPv77VkrHF6j9E2jye6%2FO8QZw4PQUXsv82NqLVU8Cl2s3vcePVx9w%2FbB7di5Yze2wB1%2FHAAbJGmjy5DqM3Dxzorwy9NrwsRHcZwD5UgjwMuA%2F%2BSwYuBNKvnVtjuDye%2BrOoTDTOGJGaodKIbe5fNZK4t%2BhKkujS7Hfqxq2qeuneqoKsrIylnWSR%2BI2hPvzK0VjBJ56FUeZPSelGQV0hDtebvmH1kxcuYhUJTV11STB%2FNZKUqDzivWOVyZ2Lda2PvUjLSsabPcrtZ9hA600zNSfiGsG%2FZKZ0aPId0SFxFeHqOtSDw1uiy%2FKcueXFh1LxuYkjH4yzS18h%2BrIiigxCujSa3Cr8nXEPxXK%2B5fW28MNkiUOrUlbYHsJUAFGTunc56fw7UiIPp7nCeDWlrTl239FiMvsmnSoGPiaJvNcM5glUf3ZWqah6js%2FBQuywx7lHpN46A51VjeMINgHW4QOWSOfmTzyXKYez4ahfZMZ6yQ3O9dEwDSNa1E3OkpU7LR1MWjt%2FU9rAG92Yo7U0YhbUvXcUgk%2FkEtJ9Um7HiwYnbIhqmycTDM7lKO36xqs%2FqQV%2BocI21N0o1VDzbx5Gbl0XVAxlPbEd8w4zmVGnq%2BEhdBnUn7WaEgRE6TCEiJPBBjqkARZ4bPvzznTnCOP52IlR%2FSYuSrqY98xBskoD1X7qW56HybHeDneC7%2FAQ6%2F6qkYgWC%2BUjCv11lr3tUxAj4MfVGzZwu7xH6UwVQqvw5U3rA9bNFtOIfTJX%2FKdD98v1Hf2mXEQoGGzpIiJUuYTXA8wzLfdNiXpkFx2nL46tHA8p%2F90nHo5gNffHuUNQuSXuu6lxYfckkh%2BJwlSrIQTSepAM9Jna2WLF&X-Amz-Signature=b51ca90b2c60d3205d4f4021216d22cbc97a60097c7d4b857bd63c11d94d011b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJZU7XL%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDnfKNu9xPuUmkAkFDdgmiiXehPG7y9Egn49DwWiziWRgIhAL2USSAk0YC8t0JZbgPe2p9kqJZMKxPnPyYIQUT7Vi3QKv8DCBkQABoMNjM3NDIzMTgzODA1IgwBJ1Noy%2FWlTssoIesq3AO1uvOQHtgPv77VkrHF6j9E2jye6%2FO8QZw4PQUXsv82NqLVU8Cl2s3vcePVx9w%2FbB7di5Yze2wB1%2FHAAbJGmjy5DqM3Dxzorwy9NrwsRHcZwD5UgjwMuA%2F%2BSwYuBNKvnVtjuDye%2BrOoTDTOGJGaodKIbe5fNZK4t%2BhKkujS7Hfqxq2qeuneqoKsrIylnWSR%2BI2hPvzK0VjBJ56FUeZPSelGQV0hDtebvmH1kxcuYhUJTV11STB%2FNZKUqDzivWOVyZ2Lda2PvUjLSsabPcrtZ9hA600zNSfiGsG%2FZKZ0aPId0SFxFeHqOtSDw1uiy%2FKcueXFh1LxuYkjH4yzS18h%2BrIiigxCujSa3Cr8nXEPxXK%2B5fW28MNkiUOrUlbYHsJUAFGTunc56fw7UiIPp7nCeDWlrTl239FiMvsmnSoGPiaJvNcM5glUf3ZWqah6js%2FBQuywx7lHpN46A51VjeMINgHW4QOWSOfmTzyXKYez4ahfZMZ6yQ3O9dEwDSNa1E3OkpU7LR1MWjt%2FU9rAG92Yo7U0YhbUvXcUgk%2FkEtJ9Um7HiwYnbIhqmycTDM7lKO36xqs%2FqQV%2BocI21N0o1VDzbx5Gbl0XVAxlPbEd8w4zmVGnq%2BEhdBnUn7WaEgRE6TCEiJPBBjqkARZ4bPvzznTnCOP52IlR%2FSYuSrqY98xBskoD1X7qW56HybHeDneC7%2FAQ6%2F6qkYgWC%2BUjCv11lr3tUxAj4MfVGzZwu7xH6UwVQqvw5U3rA9bNFtOIfTJX%2FKdD98v1Hf2mXEQoGGzpIiJUuYTXA8wzLfdNiXpkFx2nL46tHA8p%2F90nHo5gNffHuUNQuSXuu6lxYfckkh%2BJwlSrIQTSepAM9Jna2WLF&X-Amz-Signature=72b99b420728f5f95eb07140c04e1bef652a321273d450f15851a8e5c3784e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
