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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAL244DR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFsl59QyFVFdM9wUJh20jQODAlV2zJZD5%2BZOQZxyurtOAiA2BAV2%2FfKJrLDf3Yh2qmwuhI4a2f5qAnlMyTzr8KGZKCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn6kGzVHUUdVzfTueKtwD1Kr4xGlyLNBgTKlLRizfSwntIFFCgrM%2Bg%2BFYUKUlB3Iw7ww%2F4%2BaXMiC3%2BD6ERMhmZOfmYR6mbTdW%2BGck32346iy3VrkPzBq5X0fbhhJFAhw1bW9%2FwIdEOe6RpsTZDQTVoEWbDw0mb76fpAmPZMJpIf8AbqFk%2BOk%2FGaykMlN3mGh49%2Btv4lYSBYL1XCy%2FAUIZslzq694BQrdLElc6Vz36t2DQeiZh2SknCSOx1xmaGMkGMylBwkS9WRvIUcv9Okzzyr7I9NcCmZDPNXJ44A08IZ6srSTLTgKbQTjvIcPp9bLZx5%2FuMqIexsZ0N3K1%2Fz41NfX8ljXJg8IncQfQD46eXD7BkIdaxiFtVs6nX3dMPNZiuFr90Vzkmka1wVaiylZYChxGgElPAToqKrzZ%2BXQkAfdkZRdvH3WLRV%2FMYLiKcowYPmf48d6ke0Z9P7qYaa3leyyHwAN0CoewT7ORRsKC%2BKJCnjYXYHmsq2mnf89o8VHU2HuKACKONLFs60WSxmZDNYrA2ZM0ZXoyvG90WWyozR9hB8Qnrx4%2FpS%2BjCR4ZiiZBos5W44athhKxyNZzE5exdxLwfZZYVofJpO1HZokJml3nYb1Ozjb%2BztOb2wJhpEvtt44PQLtWbkWOHScw7%2B%2BjvwY6pgG3jm0YemGaaCk9ev7kwUXsxEJ%2FLsIcKZPYWM16LnQPgqZq6k7wb%2B74Eoy5SOUO01zb4rUBgeGNYXmcfMiEhO43xzy3E%2B4XmnlrtP7XFzvwviFQLWEMUxZ99ajvflliTyz3d%2FWVKtpytoEacjfrQ9mwmNXpDCFYr2YGSBxXaqqEzinmIG%2FHdOCXyaelPKoWURAwKE3aRiQ9bapMDSCS70FqN1C3GBmo&X-Amz-Signature=b48a952a1f525ee4c58911872a6deb08e8b44db806675fec015f187fdcce13e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAL244DR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFsl59QyFVFdM9wUJh20jQODAlV2zJZD5%2BZOQZxyurtOAiA2BAV2%2FfKJrLDf3Yh2qmwuhI4a2f5qAnlMyTzr8KGZKCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn6kGzVHUUdVzfTueKtwD1Kr4xGlyLNBgTKlLRizfSwntIFFCgrM%2Bg%2BFYUKUlB3Iw7ww%2F4%2BaXMiC3%2BD6ERMhmZOfmYR6mbTdW%2BGck32346iy3VrkPzBq5X0fbhhJFAhw1bW9%2FwIdEOe6RpsTZDQTVoEWbDw0mb76fpAmPZMJpIf8AbqFk%2BOk%2FGaykMlN3mGh49%2Btv4lYSBYL1XCy%2FAUIZslzq694BQrdLElc6Vz36t2DQeiZh2SknCSOx1xmaGMkGMylBwkS9WRvIUcv9Okzzyr7I9NcCmZDPNXJ44A08IZ6srSTLTgKbQTjvIcPp9bLZx5%2FuMqIexsZ0N3K1%2Fz41NfX8ljXJg8IncQfQD46eXD7BkIdaxiFtVs6nX3dMPNZiuFr90Vzkmka1wVaiylZYChxGgElPAToqKrzZ%2BXQkAfdkZRdvH3WLRV%2FMYLiKcowYPmf48d6ke0Z9P7qYaa3leyyHwAN0CoewT7ORRsKC%2BKJCnjYXYHmsq2mnf89o8VHU2HuKACKONLFs60WSxmZDNYrA2ZM0ZXoyvG90WWyozR9hB8Qnrx4%2FpS%2BjCR4ZiiZBos5W44athhKxyNZzE5exdxLwfZZYVofJpO1HZokJml3nYb1Ozjb%2BztOb2wJhpEvtt44PQLtWbkWOHScw7%2B%2BjvwY6pgG3jm0YemGaaCk9ev7kwUXsxEJ%2FLsIcKZPYWM16LnQPgqZq6k7wb%2B74Eoy5SOUO01zb4rUBgeGNYXmcfMiEhO43xzy3E%2B4XmnlrtP7XFzvwviFQLWEMUxZ99ajvflliTyz3d%2FWVKtpytoEacjfrQ9mwmNXpDCFYr2YGSBxXaqqEzinmIG%2FHdOCXyaelPKoWURAwKE3aRiQ9bapMDSCS70FqN1C3GBmo&X-Amz-Signature=8466918f8068871197c215ff47ee241e42c4e2c30824195857ad468b598a1f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAL244DR%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIFsl59QyFVFdM9wUJh20jQODAlV2zJZD5%2BZOQZxyurtOAiA2BAV2%2FfKJrLDf3Yh2qmwuhI4a2f5qAnlMyTzr8KGZKCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn6kGzVHUUdVzfTueKtwD1Kr4xGlyLNBgTKlLRizfSwntIFFCgrM%2Bg%2BFYUKUlB3Iw7ww%2F4%2BaXMiC3%2BD6ERMhmZOfmYR6mbTdW%2BGck32346iy3VrkPzBq5X0fbhhJFAhw1bW9%2FwIdEOe6RpsTZDQTVoEWbDw0mb76fpAmPZMJpIf8AbqFk%2BOk%2FGaykMlN3mGh49%2Btv4lYSBYL1XCy%2FAUIZslzq694BQrdLElc6Vz36t2DQeiZh2SknCSOx1xmaGMkGMylBwkS9WRvIUcv9Okzzyr7I9NcCmZDPNXJ44A08IZ6srSTLTgKbQTjvIcPp9bLZx5%2FuMqIexsZ0N3K1%2Fz41NfX8ljXJg8IncQfQD46eXD7BkIdaxiFtVs6nX3dMPNZiuFr90Vzkmka1wVaiylZYChxGgElPAToqKrzZ%2BXQkAfdkZRdvH3WLRV%2FMYLiKcowYPmf48d6ke0Z9P7qYaa3leyyHwAN0CoewT7ORRsKC%2BKJCnjYXYHmsq2mnf89o8VHU2HuKACKONLFs60WSxmZDNYrA2ZM0ZXoyvG90WWyozR9hB8Qnrx4%2FpS%2BjCR4ZiiZBos5W44athhKxyNZzE5exdxLwfZZYVofJpO1HZokJml3nYb1Ozjb%2BztOb2wJhpEvtt44PQLtWbkWOHScw7%2B%2BjvwY6pgG3jm0YemGaaCk9ev7kwUXsxEJ%2FLsIcKZPYWM16LnQPgqZq6k7wb%2B74Eoy5SOUO01zb4rUBgeGNYXmcfMiEhO43xzy3E%2B4XmnlrtP7XFzvwviFQLWEMUxZ99ajvflliTyz3d%2FWVKtpytoEacjfrQ9mwmNXpDCFYr2YGSBxXaqqEzinmIG%2FHdOCXyaelPKoWURAwKE3aRiQ9bapMDSCS70FqN1C3GBmo&X-Amz-Signature=d3cd8904bb8d56e3cd957d3220dad7af8241e8554d2407b96095d0c9bf1bf5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
