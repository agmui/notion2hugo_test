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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDATVNWE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyRuuLLNLeWtwnH1Xatzt0LGr2qmShAyqwMcXWitnQJAIhANKEUDtvY2tK%2F9vMhTaJmbm7GoBdm7aI6pfGRzU5wV4bKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdatBgYi2mY7aSfAq3AM0UijbRhXuKNUrXeh4SMB8kX7z5yQPAuG83tFupAUdRqZLoXos9Xl4j4X2DAETRjl6dclhHaNp%2BrOtXqmNduWXzpzKmdSpei3wARMuKVVUKvnW0Esv%2B287uojkVTM9kBXvevoomuSi9cgRRf8nWbglj754bcH5qtwFqI7ugqugcbFhxAS06WbFSHDfxa2LYGVL%2BK8pqE%2F568IhuI7Sh8JW6OAm0RoHegDS2THnQvNNhpH9WF8XyHy5GrHNgmsWdJ5R2tW%2FU4d%2BsiWpSQNlgXLkw5Cp7%2BdE4pCrTtPJTqkzIqcvDUVxwftvHwiUaPpfpczB8T%2F2A3Fjm%2BjQnvzoXs3R%2Br6kWVkarM9cwhX8BeiHtr9VDmSW3eODfsbSsYHlIo5Ozu9Yn70Kph3SpqfGvA%2FBThcj%2BfvOp1ifYcz5isX3SSWIJvmxWlnFtUWaET7saUKjMS8gCVwC35Hc4NFUeuvkwLBRxKQxUwoOX7my9hwnDO1XkCamEtR7Sv5oL0pcGyZn%2Bjw0gQbctQE6AgjXXcshOdaanFQVZ1hefkDWLvj%2Btb1FerqtOTdzLaRBnVsRLr458NpsaN2uqJDok9ioGWPD4dzitXF9DWZCqMdWn%2FTPLKcLTjSfFTGqj%2FOxeTC42MzDBjqkAQlqKhMGzXx2cCsqghGIMuK%2BezS7FAv7KqfnTSz11Ycu0bK%2B09HXRkrjwWtT%2Btb1LmE0GDHhYwYScEG3VLQLmF5F7i8raUFj4OSfgULN5t5gtmb8n8yXwW68zRzISthhSXrZweF9b7iKiddXRD1aLEf0bZcNjEFV3kncY7MarS6eWuwBRFKSjxamaynON1dNU90vYR1hoGSFnDffL36v2pmjEg8c&X-Amz-Signature=86819281d90e821bfda2956eafa005ee1fd73d7b16a0434f8de45efa91406b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDATVNWE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyRuuLLNLeWtwnH1Xatzt0LGr2qmShAyqwMcXWitnQJAIhANKEUDtvY2tK%2F9vMhTaJmbm7GoBdm7aI6pfGRzU5wV4bKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdatBgYi2mY7aSfAq3AM0UijbRhXuKNUrXeh4SMB8kX7z5yQPAuG83tFupAUdRqZLoXos9Xl4j4X2DAETRjl6dclhHaNp%2BrOtXqmNduWXzpzKmdSpei3wARMuKVVUKvnW0Esv%2B287uojkVTM9kBXvevoomuSi9cgRRf8nWbglj754bcH5qtwFqI7ugqugcbFhxAS06WbFSHDfxa2LYGVL%2BK8pqE%2F568IhuI7Sh8JW6OAm0RoHegDS2THnQvNNhpH9WF8XyHy5GrHNgmsWdJ5R2tW%2FU4d%2BsiWpSQNlgXLkw5Cp7%2BdE4pCrTtPJTqkzIqcvDUVxwftvHwiUaPpfpczB8T%2F2A3Fjm%2BjQnvzoXs3R%2Br6kWVkarM9cwhX8BeiHtr9VDmSW3eODfsbSsYHlIo5Ozu9Yn70Kph3SpqfGvA%2FBThcj%2BfvOp1ifYcz5isX3SSWIJvmxWlnFtUWaET7saUKjMS8gCVwC35Hc4NFUeuvkwLBRxKQxUwoOX7my9hwnDO1XkCamEtR7Sv5oL0pcGyZn%2Bjw0gQbctQE6AgjXXcshOdaanFQVZ1hefkDWLvj%2Btb1FerqtOTdzLaRBnVsRLr458NpsaN2uqJDok9ioGWPD4dzitXF9DWZCqMdWn%2FTPLKcLTjSfFTGqj%2FOxeTC42MzDBjqkAQlqKhMGzXx2cCsqghGIMuK%2BezS7FAv7KqfnTSz11Ycu0bK%2B09HXRkrjwWtT%2Btb1LmE0GDHhYwYScEG3VLQLmF5F7i8raUFj4OSfgULN5t5gtmb8n8yXwW68zRzISthhSXrZweF9b7iKiddXRD1aLEf0bZcNjEFV3kncY7MarS6eWuwBRFKSjxamaynON1dNU90vYR1hoGSFnDffL36v2pmjEg8c&X-Amz-Signature=704b4317eac6cd71855b4da56bfd53562e9dd3d18fffcd33a2aaf0e1f9f93f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDATVNWE%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyRuuLLNLeWtwnH1Xatzt0LGr2qmShAyqwMcXWitnQJAIhANKEUDtvY2tK%2F9vMhTaJmbm7GoBdm7aI6pfGRzU5wV4bKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRdatBgYi2mY7aSfAq3AM0UijbRhXuKNUrXeh4SMB8kX7z5yQPAuG83tFupAUdRqZLoXos9Xl4j4X2DAETRjl6dclhHaNp%2BrOtXqmNduWXzpzKmdSpei3wARMuKVVUKvnW0Esv%2B287uojkVTM9kBXvevoomuSi9cgRRf8nWbglj754bcH5qtwFqI7ugqugcbFhxAS06WbFSHDfxa2LYGVL%2BK8pqE%2F568IhuI7Sh8JW6OAm0RoHegDS2THnQvNNhpH9WF8XyHy5GrHNgmsWdJ5R2tW%2FU4d%2BsiWpSQNlgXLkw5Cp7%2BdE4pCrTtPJTqkzIqcvDUVxwftvHwiUaPpfpczB8T%2F2A3Fjm%2BjQnvzoXs3R%2Br6kWVkarM9cwhX8BeiHtr9VDmSW3eODfsbSsYHlIo5Ozu9Yn70Kph3SpqfGvA%2FBThcj%2BfvOp1ifYcz5isX3SSWIJvmxWlnFtUWaET7saUKjMS8gCVwC35Hc4NFUeuvkwLBRxKQxUwoOX7my9hwnDO1XkCamEtR7Sv5oL0pcGyZn%2Bjw0gQbctQE6AgjXXcshOdaanFQVZ1hefkDWLvj%2Btb1FerqtOTdzLaRBnVsRLr458NpsaN2uqJDok9ioGWPD4dzitXF9DWZCqMdWn%2FTPLKcLTjSfFTGqj%2FOxeTC42MzDBjqkAQlqKhMGzXx2cCsqghGIMuK%2BezS7FAv7KqfnTSz11Ycu0bK%2B09HXRkrjwWtT%2Btb1LmE0GDHhYwYScEG3VLQLmF5F7i8raUFj4OSfgULN5t5gtmb8n8yXwW68zRzISthhSXrZweF9b7iKiddXRD1aLEf0bZcNjEFV3kncY7MarS6eWuwBRFKSjxamaynON1dNU90vYR1hoGSFnDffL36v2pmjEg8c&X-Amz-Signature=4b5573d6d2a34ed9e3fda47419347704dc7e3a92e8dc09ea2c19806dc55a7db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
