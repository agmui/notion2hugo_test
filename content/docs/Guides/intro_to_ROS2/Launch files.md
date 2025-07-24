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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPBOD36%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFVLod3fPXhJbE6bDAeikRHnKygP8jqtpwGrsepsq%2BSfAiEAsmWr4wZpPtXgGDOuyVfU3nTJ7IWB97UWE2AfEKYeO0Uq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDETxyJk7hIXOmGIMsircAx5GfiyKOzvpknTs2suroMtu2Z4TTeVmf4AuNsOfUg4yDRJ0RtkrJ0uVYC4qGX3Qw9nNwCecQfvU81m1Lv5fyKsBakq5tJ9HSJF6BICxQV%2BA9qRn4jFRLN4cYXIgKiiKLVzmc6V9exqViFGv1R78fWAgI7N9kIscIuJzKNMBURThxR6WSszMSEz9127W6FiUGFQSgyVy7pDN%2B0AD1kAxeXCXtPzHgtXb6NDQh%2BCIlOAdYqnCBVmM1g%2BYKcHtK1MuKBj4ejW2OFTyWLBNuMoJIS%2B%2FBKNC10nOxV0z2tsePzV3Aom4Qt2RnCGCvFpkqgcLOBS66xFELHNCMKvOtztI9JtAZgCiuz8JdZguU%2F7iPDr8hSAHbqreu4LdNz2ZTDtuUvjpKE%2FFKr7ZoTEokH7A%2B2IUlQ%2BmxHUZMkzpEUksoKf3HWiPmarqhK7d0ogZYOZ%2BOlkexbiF%2FnDwcL8JjCdxrH6cmBq3RCk5E3l1qtTLmrbJ6QXnnOUM1IsCbWF%2BnXs1%2Bk%2FtJTBGgXkbDfRWudeuPbIWdVYqe5oDHmkrmS6AW%2F8w7j%2FFeBUArGkRoCoTpbHQTlfV1XsbKSPp%2B7vqwNxGeRBaZa6deI4mLFGvxo1NRZVifbTnaIu6kzDefqhkMK%2FYisQGOqUB5oQn7gHVnDSueS0cAreHStqS%2FUy9cwngklEAnglLITEvqvJSNi9wYGyM%2BU5Bececem2OM1PAg0V1xByWfP00bxzpSkwAu56OESUjsVMnuhKBWGDVmaTxJF59uIPy8uOZoq19YnRdzzRymfrIn6C8f6iiims7lADW%2F%2FnNS8JxWXZCTa3bNHPt5RuwQOzHRCeT3lQMcgzz4tZqClxErTnQBy0YWpNK&X-Amz-Signature=11dc49b35586365429d5487b41c0c9c003a386ba8f8a52ec3bc7d88d4c868f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPBOD36%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFVLod3fPXhJbE6bDAeikRHnKygP8jqtpwGrsepsq%2BSfAiEAsmWr4wZpPtXgGDOuyVfU3nTJ7IWB97UWE2AfEKYeO0Uq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDETxyJk7hIXOmGIMsircAx5GfiyKOzvpknTs2suroMtu2Z4TTeVmf4AuNsOfUg4yDRJ0RtkrJ0uVYC4qGX3Qw9nNwCecQfvU81m1Lv5fyKsBakq5tJ9HSJF6BICxQV%2BA9qRn4jFRLN4cYXIgKiiKLVzmc6V9exqViFGv1R78fWAgI7N9kIscIuJzKNMBURThxR6WSszMSEz9127W6FiUGFQSgyVy7pDN%2B0AD1kAxeXCXtPzHgtXb6NDQh%2BCIlOAdYqnCBVmM1g%2BYKcHtK1MuKBj4ejW2OFTyWLBNuMoJIS%2B%2FBKNC10nOxV0z2tsePzV3Aom4Qt2RnCGCvFpkqgcLOBS66xFELHNCMKvOtztI9JtAZgCiuz8JdZguU%2F7iPDr8hSAHbqreu4LdNz2ZTDtuUvjpKE%2FFKr7ZoTEokH7A%2B2IUlQ%2BmxHUZMkzpEUksoKf3HWiPmarqhK7d0ogZYOZ%2BOlkexbiF%2FnDwcL8JjCdxrH6cmBq3RCk5E3l1qtTLmrbJ6QXnnOUM1IsCbWF%2BnXs1%2Bk%2FtJTBGgXkbDfRWudeuPbIWdVYqe5oDHmkrmS6AW%2F8w7j%2FFeBUArGkRoCoTpbHQTlfV1XsbKSPp%2B7vqwNxGeRBaZa6deI4mLFGvxo1NRZVifbTnaIu6kzDefqhkMK%2FYisQGOqUB5oQn7gHVnDSueS0cAreHStqS%2FUy9cwngklEAnglLITEvqvJSNi9wYGyM%2BU5Bececem2OM1PAg0V1xByWfP00bxzpSkwAu56OESUjsVMnuhKBWGDVmaTxJF59uIPy8uOZoq19YnRdzzRymfrIn6C8f6iiims7lADW%2F%2FnNS8JxWXZCTa3bNHPt5RuwQOzHRCeT3lQMcgzz4tZqClxErTnQBy0YWpNK&X-Amz-Signature=2a9edfd8a965effbd8212ef0ab3b20040a25562c86a6699f3ca0fc0785d3d7fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPBOD36%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIFVLod3fPXhJbE6bDAeikRHnKygP8jqtpwGrsepsq%2BSfAiEAsmWr4wZpPtXgGDOuyVfU3nTJ7IWB97UWE2AfEKYeO0Uq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDETxyJk7hIXOmGIMsircAx5GfiyKOzvpknTs2suroMtu2Z4TTeVmf4AuNsOfUg4yDRJ0RtkrJ0uVYC4qGX3Qw9nNwCecQfvU81m1Lv5fyKsBakq5tJ9HSJF6BICxQV%2BA9qRn4jFRLN4cYXIgKiiKLVzmc6V9exqViFGv1R78fWAgI7N9kIscIuJzKNMBURThxR6WSszMSEz9127W6FiUGFQSgyVy7pDN%2B0AD1kAxeXCXtPzHgtXb6NDQh%2BCIlOAdYqnCBVmM1g%2BYKcHtK1MuKBj4ejW2OFTyWLBNuMoJIS%2B%2FBKNC10nOxV0z2tsePzV3Aom4Qt2RnCGCvFpkqgcLOBS66xFELHNCMKvOtztI9JtAZgCiuz8JdZguU%2F7iPDr8hSAHbqreu4LdNz2ZTDtuUvjpKE%2FFKr7ZoTEokH7A%2B2IUlQ%2BmxHUZMkzpEUksoKf3HWiPmarqhK7d0ogZYOZ%2BOlkexbiF%2FnDwcL8JjCdxrH6cmBq3RCk5E3l1qtTLmrbJ6QXnnOUM1IsCbWF%2BnXs1%2Bk%2FtJTBGgXkbDfRWudeuPbIWdVYqe5oDHmkrmS6AW%2F8w7j%2FFeBUArGkRoCoTpbHQTlfV1XsbKSPp%2B7vqwNxGeRBaZa6deI4mLFGvxo1NRZVifbTnaIu6kzDefqhkMK%2FYisQGOqUB5oQn7gHVnDSueS0cAreHStqS%2FUy9cwngklEAnglLITEvqvJSNi9wYGyM%2BU5Bececem2OM1PAg0V1xByWfP00bxzpSkwAu56OESUjsVMnuhKBWGDVmaTxJF59uIPy8uOZoq19YnRdzzRymfrIn6C8f6iiims7lADW%2F%2FnNS8JxWXZCTa3bNHPt5RuwQOzHRCeT3lQMcgzz4tZqClxErTnQBy0YWpNK&X-Amz-Signature=205a80f1e401774175c790182d49a070fc1ed89fb07c7e0fe4fc6f1299ad5c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
