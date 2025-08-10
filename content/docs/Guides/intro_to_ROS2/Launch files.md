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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPYFU7H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiIjH%2BHR6GwUNFjJuMHu8vyugbQuSpcnrzMsv1%2FFlhrAiA3%2BT5Z403trtJcnlZoLWuqZEnoesqOt0LXGzKnktS0UCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5f5RnzMIr%2Ftd6KDaKtwDUKVXb52l9KkiXw2vHy0r%2BfInmKjcM9P%2Bjgzln5%2BLtOQm49r3JAYtxySA9UbV07L%2F5XBH0rvbqnYvrt9Y0HYl0vo9%2FIlnL5zMf%2B3%2FM0FOxpIlk0kZdZt56JK2X1vH1mb7rchmlzqzPIJVptBzA8WLoUdJ7LEtk2QRQtPq9jWz777CPN5%2FUpfKQ71OEgsx1qsKqSY69NSxDvWsAeVCi8kT%2F49S9lTwKcPuBQLN2wv%2FibgSA1ysGksMb%2BZwU4dnJX5cMomm7lP7hIxQgl3XcpgEp8hcau3D%2FW%2Bbe8SjS1GvCf6KgY8JaU8tV47pw9E1Q%2BzYhHyoWO8rH8bkF0Xw5yMUu9q5XKSnRvxT6ei42n4E2JU%2BEuhfzc212y%2BFzlmfBwB5yY5ydhqLK6LP8pnsMfYfQXZaxKH1DwGaxRHNBEodTsqR3PhBMAGoBA%2Fuz9jdnVk9EmIdhGhhr8yjDaf74cvFjL6VtaqMy3j7HjtP3qWPsCsM7MI%2F0rmafSxm3FOnYEq5ldyBiwAT8Y1k7MMdSQ9IyW82vQeQRL7j7RIpqMB81rNs71WJ2Q3WK5VlUXRWtP%2Bg2JMZAByrOILom4h4AXrBIBYFG7iQfeCKzrT%2BW0%2F9uyaoKbYuxBd%2FDCA%2Fr5Ew%2B7LfxAY6pgHmn1G4YCfpjWMXDboag3GfjJlMW1YwoqvsPTOOEbIimmYKPHuQB7rEgM0lyTQu3jgoLUBVh65iBPf09ce5hQknhtbJTFfKmS0YnKWRqS2z5euIxDV2%2F7q92N23naKz2E32rNZD3pyBFCgb5vjBAqhIJjBVobA3IFUtmy3zqhPDMCvJttMDuGyIgJvmkNbv7822jY3%2F5aat%2BXepMqSZm360Cvi1yYJc&X-Amz-Signature=b16a62058a2e6a741a3ca62027e1e9da3c849e1b50d69d2a18f17977e932de5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPYFU7H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiIjH%2BHR6GwUNFjJuMHu8vyugbQuSpcnrzMsv1%2FFlhrAiA3%2BT5Z403trtJcnlZoLWuqZEnoesqOt0LXGzKnktS0UCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5f5RnzMIr%2Ftd6KDaKtwDUKVXb52l9KkiXw2vHy0r%2BfInmKjcM9P%2Bjgzln5%2BLtOQm49r3JAYtxySA9UbV07L%2F5XBH0rvbqnYvrt9Y0HYl0vo9%2FIlnL5zMf%2B3%2FM0FOxpIlk0kZdZt56JK2X1vH1mb7rchmlzqzPIJVptBzA8WLoUdJ7LEtk2QRQtPq9jWz777CPN5%2FUpfKQ71OEgsx1qsKqSY69NSxDvWsAeVCi8kT%2F49S9lTwKcPuBQLN2wv%2FibgSA1ysGksMb%2BZwU4dnJX5cMomm7lP7hIxQgl3XcpgEp8hcau3D%2FW%2Bbe8SjS1GvCf6KgY8JaU8tV47pw9E1Q%2BzYhHyoWO8rH8bkF0Xw5yMUu9q5XKSnRvxT6ei42n4E2JU%2BEuhfzc212y%2BFzlmfBwB5yY5ydhqLK6LP8pnsMfYfQXZaxKH1DwGaxRHNBEodTsqR3PhBMAGoBA%2Fuz9jdnVk9EmIdhGhhr8yjDaf74cvFjL6VtaqMy3j7HjtP3qWPsCsM7MI%2F0rmafSxm3FOnYEq5ldyBiwAT8Y1k7MMdSQ9IyW82vQeQRL7j7RIpqMB81rNs71WJ2Q3WK5VlUXRWtP%2Bg2JMZAByrOILom4h4AXrBIBYFG7iQfeCKzrT%2BW0%2F9uyaoKbYuxBd%2FDCA%2Fr5Ew%2B7LfxAY6pgHmn1G4YCfpjWMXDboag3GfjJlMW1YwoqvsPTOOEbIimmYKPHuQB7rEgM0lyTQu3jgoLUBVh65iBPf09ce5hQknhtbJTFfKmS0YnKWRqS2z5euIxDV2%2F7q92N23naKz2E32rNZD3pyBFCgb5vjBAqhIJjBVobA3IFUtmy3zqhPDMCvJttMDuGyIgJvmkNbv7822jY3%2F5aat%2BXepMqSZm360Cvi1yYJc&X-Amz-Signature=ea6a4e62b1f30e3802711461dd42b6e9a3a8191e02cd63c36ba3a8ceae0a264c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPYFU7H%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T040034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiIjH%2BHR6GwUNFjJuMHu8vyugbQuSpcnrzMsv1%2FFlhrAiA3%2BT5Z403trtJcnlZoLWuqZEnoesqOt0LXGzKnktS0UCqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5f5RnzMIr%2Ftd6KDaKtwDUKVXb52l9KkiXw2vHy0r%2BfInmKjcM9P%2Bjgzln5%2BLtOQm49r3JAYtxySA9UbV07L%2F5XBH0rvbqnYvrt9Y0HYl0vo9%2FIlnL5zMf%2B3%2FM0FOxpIlk0kZdZt56JK2X1vH1mb7rchmlzqzPIJVptBzA8WLoUdJ7LEtk2QRQtPq9jWz777CPN5%2FUpfKQ71OEgsx1qsKqSY69NSxDvWsAeVCi8kT%2F49S9lTwKcPuBQLN2wv%2FibgSA1ysGksMb%2BZwU4dnJX5cMomm7lP7hIxQgl3XcpgEp8hcau3D%2FW%2Bbe8SjS1GvCf6KgY8JaU8tV47pw9E1Q%2BzYhHyoWO8rH8bkF0Xw5yMUu9q5XKSnRvxT6ei42n4E2JU%2BEuhfzc212y%2BFzlmfBwB5yY5ydhqLK6LP8pnsMfYfQXZaxKH1DwGaxRHNBEodTsqR3PhBMAGoBA%2Fuz9jdnVk9EmIdhGhhr8yjDaf74cvFjL6VtaqMy3j7HjtP3qWPsCsM7MI%2F0rmafSxm3FOnYEq5ldyBiwAT8Y1k7MMdSQ9IyW82vQeQRL7j7RIpqMB81rNs71WJ2Q3WK5VlUXRWtP%2Bg2JMZAByrOILom4h4AXrBIBYFG7iQfeCKzrT%2BW0%2F9uyaoKbYuxBd%2FDCA%2Fr5Ew%2B7LfxAY6pgHmn1G4YCfpjWMXDboag3GfjJlMW1YwoqvsPTOOEbIimmYKPHuQB7rEgM0lyTQu3jgoLUBVh65iBPf09ce5hQknhtbJTFfKmS0YnKWRqS2z5euIxDV2%2F7q92N23naKz2E32rNZD3pyBFCgb5vjBAqhIJjBVobA3IFUtmy3zqhPDMCvJttMDuGyIgJvmkNbv7822jY3%2F5aat%2BXepMqSZm360Cvi1yYJc&X-Amz-Signature=3710f5135ee29079c99f7422bccd3fe8c6d048357819cd2c1fc530085e0677a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
