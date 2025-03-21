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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ54TMDN%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIH0D7sWnPSWQmTws5v%2BWxhXFYYqvLD%2FY5R0pRvxUS2%2FYAiEArx9AirD77aJ7RkqhNKbDg9TjZt9Xz61C%2FDsL6WgahYUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASAmzhTJw9VoltSCyrcA%2FlMsF3KX12shYSRbPK7BnIBXPDawqGgKYYl5CrEHf1JtGfdEy%2B0uK0FyJnHQRdHe40hDy1%2FJFT%2B6qVeUc1eHf8kbt3s3ppi0klG3CB1ECc6zaiSBxk7h8yJMRzsi%2BkAEsch%2B1v21yTS6UyT20HO45zh1jwv%2FluKaeqPe13ZRzGKHyk9oiNcmcor4Idxsh5HBPGQrlagOAJEM0dpg3VcN0BxretksNoWeMu9TmffG5ezHNS%2FGcMLjDPpZdhbtDQ7YhgRZlb%2BVxcFjKh0fGqiq%2FCRfNiNPcyd5sHkZ7YP5Gu%2Bd1OfaVz5igqicauL0rdwLDzYPy5Go1hDiFvsDDXJinmmvqOLkLfVb%2F3BH1RYRLt98sv5%2FGpqnCGl4tcwC3JVbCTNkGlIB1x8WZzBeDdm%2B8BcpsSjSu62UqSEBPbrhGkIDJdZk9be4pqb3ANMFX2gFJSCUaAyKrVCRwjiUGGD%2FdXlfP8yW5jzspWW%2FjpCUtywWnERLSI9Vc7N95DDm4pnZ1A7mPfLHFbY9QN0QlvTVTubW4l4lkMhOhq9OBUGgFN6XC0yg92nFQuURgKd61qnCcGLUntpDmrQ4NU%2BsAFrp%2FeTPATGxlB0aS5ZKljmaZv9MXfa6eb5FqRYCnWfMJTc9r4GOqUBJ8C7uMFEtRssWXyWTmY41cMHFIICbVjowinWDd3fm5DW%2BM2XyxS%2FjrACKX%2FfwcvR3zV2KmK0aJ%2FbHYLSyQZj7neYW2ItXOORNV3GaS%2F12KjreKwWiDWbpOhLfOlBNN0a2%2BwlpClN4%2FLmpP8toDJp6YhTTF7l%2FpgOPQpDr9VgiOau3vHbiEQqVNni%2BRU2nRoU4IW1FysHbcTTi2p2m4N9oixtJsCR&X-Amz-Signature=44dee894390f6ec32e54199b165240c6c039a09033aa05935b685a913826b487&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ54TMDN%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIH0D7sWnPSWQmTws5v%2BWxhXFYYqvLD%2FY5R0pRvxUS2%2FYAiEArx9AirD77aJ7RkqhNKbDg9TjZt9Xz61C%2FDsL6WgahYUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASAmzhTJw9VoltSCyrcA%2FlMsF3KX12shYSRbPK7BnIBXPDawqGgKYYl5CrEHf1JtGfdEy%2B0uK0FyJnHQRdHe40hDy1%2FJFT%2B6qVeUc1eHf8kbt3s3ppi0klG3CB1ECc6zaiSBxk7h8yJMRzsi%2BkAEsch%2B1v21yTS6UyT20HO45zh1jwv%2FluKaeqPe13ZRzGKHyk9oiNcmcor4Idxsh5HBPGQrlagOAJEM0dpg3VcN0BxretksNoWeMu9TmffG5ezHNS%2FGcMLjDPpZdhbtDQ7YhgRZlb%2BVxcFjKh0fGqiq%2FCRfNiNPcyd5sHkZ7YP5Gu%2Bd1OfaVz5igqicauL0rdwLDzYPy5Go1hDiFvsDDXJinmmvqOLkLfVb%2F3BH1RYRLt98sv5%2FGpqnCGl4tcwC3JVbCTNkGlIB1x8WZzBeDdm%2B8BcpsSjSu62UqSEBPbrhGkIDJdZk9be4pqb3ANMFX2gFJSCUaAyKrVCRwjiUGGD%2FdXlfP8yW5jzspWW%2FjpCUtywWnERLSI9Vc7N95DDm4pnZ1A7mPfLHFbY9QN0QlvTVTubW4l4lkMhOhq9OBUGgFN6XC0yg92nFQuURgKd61qnCcGLUntpDmrQ4NU%2BsAFrp%2FeTPATGxlB0aS5ZKljmaZv9MXfa6eb5FqRYCnWfMJTc9r4GOqUBJ8C7uMFEtRssWXyWTmY41cMHFIICbVjowinWDd3fm5DW%2BM2XyxS%2FjrACKX%2FfwcvR3zV2KmK0aJ%2FbHYLSyQZj7neYW2ItXOORNV3GaS%2F12KjreKwWiDWbpOhLfOlBNN0a2%2BwlpClN4%2FLmpP8toDJp6YhTTF7l%2FpgOPQpDr9VgiOau3vHbiEQqVNni%2BRU2nRoU4IW1FysHbcTTi2p2m4N9oixtJsCR&X-Amz-Signature=1de985cd92b1b2833a84b66ab43395ee05c22a9ade7ac8e832c45ac913dd79a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ54TMDN%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIH0D7sWnPSWQmTws5v%2BWxhXFYYqvLD%2FY5R0pRvxUS2%2FYAiEArx9AirD77aJ7RkqhNKbDg9TjZt9Xz61C%2FDsL6WgahYUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASAmzhTJw9VoltSCyrcA%2FlMsF3KX12shYSRbPK7BnIBXPDawqGgKYYl5CrEHf1JtGfdEy%2B0uK0FyJnHQRdHe40hDy1%2FJFT%2B6qVeUc1eHf8kbt3s3ppi0klG3CB1ECc6zaiSBxk7h8yJMRzsi%2BkAEsch%2B1v21yTS6UyT20HO45zh1jwv%2FluKaeqPe13ZRzGKHyk9oiNcmcor4Idxsh5HBPGQrlagOAJEM0dpg3VcN0BxretksNoWeMu9TmffG5ezHNS%2FGcMLjDPpZdhbtDQ7YhgRZlb%2BVxcFjKh0fGqiq%2FCRfNiNPcyd5sHkZ7YP5Gu%2Bd1OfaVz5igqicauL0rdwLDzYPy5Go1hDiFvsDDXJinmmvqOLkLfVb%2F3BH1RYRLt98sv5%2FGpqnCGl4tcwC3JVbCTNkGlIB1x8WZzBeDdm%2B8BcpsSjSu62UqSEBPbrhGkIDJdZk9be4pqb3ANMFX2gFJSCUaAyKrVCRwjiUGGD%2FdXlfP8yW5jzspWW%2FjpCUtywWnERLSI9Vc7N95DDm4pnZ1A7mPfLHFbY9QN0QlvTVTubW4l4lkMhOhq9OBUGgFN6XC0yg92nFQuURgKd61qnCcGLUntpDmrQ4NU%2BsAFrp%2FeTPATGxlB0aS5ZKljmaZv9MXfa6eb5FqRYCnWfMJTc9r4GOqUBJ8C7uMFEtRssWXyWTmY41cMHFIICbVjowinWDd3fm5DW%2BM2XyxS%2FjrACKX%2FfwcvR3zV2KmK0aJ%2FbHYLSyQZj7neYW2ItXOORNV3GaS%2F12KjreKwWiDWbpOhLfOlBNN0a2%2BwlpClN4%2FLmpP8toDJp6YhTTF7l%2FpgOPQpDr9VgiOau3vHbiEQqVNni%2BRU2nRoU4IW1FysHbcTTi2p2m4N9oixtJsCR&X-Amz-Signature=ed299cc7bec2076c931a7b0846dd1ae1198b338c2137f50eb6a2fb6451f87e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
