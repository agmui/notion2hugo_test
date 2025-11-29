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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMHTDHU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkUNtaYmaIOUHmDdUiGeAbO8q20mbvbFVlSfDX3VuEeAiEAwfx3Ix6JUBcQkVzvaOMUK0g5iviKtyKhRw1SSFTmcegqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAG1fA096VosGOaQ1ircA7UbjThRzDYLc2ykBVKz4SYQm3wOfAbt%2BPYWMt8kj%2B441C9DFqvlahHHj5okSbaeu1A8dBvUWElFFGR%2F0cPWtAtJoDvZjWd4c4eIWs6uwS5Tj3wcY2u2npYKe32Gz971QjsWEJeXSiVKpDqXYRH1cYHauu4wLlw%2BN8YUv5T%2Ba%2F45lR%2FHaxtuUO7pL1bzr9%2Foq53dAtjw4Jh6pxURTvOnJEOnUWv2pSSZ5eNAAeGdkYo9zfylAZMHVw%2B82rfpyFPYbtBm0C9bR11g%2Fc5%2F8quehNBkuyMkJ%2BYsGYvKfSO%2BPxdk8uKJO2OT4jgAFkpPh%2FW204QSX8fn%2Bhog0tdBhK5I4JEd%2BUdliQuy8sThtw%2B%2FTJ2kzGslB%2FulLgLQ5raDQFZLKu0GknjOe%2B69yBl5h%2F2eKoeUwzUeXX0IqAlFZXmiqGMv8qJ8%2F%2BMN6tpm62LrbctO6FB1nhJMqowp%2FNkFthMyFvjxGma%2FTMG3Ny9ac3paZPK%2FE%2FCYOE8cpOTM2C7zBV69Bxw%2FV9E1162zWPgvds0vnMuF%2F77%2BAswCmWE4CNPqkq3XVqkHvBV9xKzDveb%2BOiY18o8pDNaXm5qBFV0CURaZSYH0HOcbJXH4u%2BXIORGD9LYpFQ4OkmL4%2FI7PlmAPMJn5p8kGOqUBgpZVYPPeT9nbOnUfVbrbHJYxjuX9KL0OpPO7814B72HMZPMz2cS865PrfYsVJhtlV49Hbt3nQvSuwQDjWSY0afEV12NndTNXILeLQ4OiapPYoHwx1fY3OSHmbURLW7kSUpBOnrdNhjAwAnTQ02MHvoRW49uDNOiAoQ6J%2BQwbnItt8i0kkZvAMMI3sK%2FdM6gQmxnDjOvPwr0BmlAA6uxhR%2FUO87u6&X-Amz-Signature=c615efa8779ba8119bdeeb38f7c240866f58ec196f257b80e3c4ee8b8cf75d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMHTDHU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkUNtaYmaIOUHmDdUiGeAbO8q20mbvbFVlSfDX3VuEeAiEAwfx3Ix6JUBcQkVzvaOMUK0g5iviKtyKhRw1SSFTmcegqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAG1fA096VosGOaQ1ircA7UbjThRzDYLc2ykBVKz4SYQm3wOfAbt%2BPYWMt8kj%2B441C9DFqvlahHHj5okSbaeu1A8dBvUWElFFGR%2F0cPWtAtJoDvZjWd4c4eIWs6uwS5Tj3wcY2u2npYKe32Gz971QjsWEJeXSiVKpDqXYRH1cYHauu4wLlw%2BN8YUv5T%2Ba%2F45lR%2FHaxtuUO7pL1bzr9%2Foq53dAtjw4Jh6pxURTvOnJEOnUWv2pSSZ5eNAAeGdkYo9zfylAZMHVw%2B82rfpyFPYbtBm0C9bR11g%2Fc5%2F8quehNBkuyMkJ%2BYsGYvKfSO%2BPxdk8uKJO2OT4jgAFkpPh%2FW204QSX8fn%2Bhog0tdBhK5I4JEd%2BUdliQuy8sThtw%2B%2FTJ2kzGslB%2FulLgLQ5raDQFZLKu0GknjOe%2B69yBl5h%2F2eKoeUwzUeXX0IqAlFZXmiqGMv8qJ8%2F%2BMN6tpm62LrbctO6FB1nhJMqowp%2FNkFthMyFvjxGma%2FTMG3Ny9ac3paZPK%2FE%2FCYOE8cpOTM2C7zBV69Bxw%2FV9E1162zWPgvds0vnMuF%2F77%2BAswCmWE4CNPqkq3XVqkHvBV9xKzDveb%2BOiY18o8pDNaXm5qBFV0CURaZSYH0HOcbJXH4u%2BXIORGD9LYpFQ4OkmL4%2FI7PlmAPMJn5p8kGOqUBgpZVYPPeT9nbOnUfVbrbHJYxjuX9KL0OpPO7814B72HMZPMz2cS865PrfYsVJhtlV49Hbt3nQvSuwQDjWSY0afEV12NndTNXILeLQ4OiapPYoHwx1fY3OSHmbURLW7kSUpBOnrdNhjAwAnTQ02MHvoRW49uDNOiAoQ6J%2BQwbnItt8i0kkZvAMMI3sK%2FdM6gQmxnDjOvPwr0BmlAA6uxhR%2FUO87u6&X-Amz-Signature=b2af3a966dee90ba9692a1c2936e4f755ed6a872ae9aefe7c9284dd16d555917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMHTDHU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkUNtaYmaIOUHmDdUiGeAbO8q20mbvbFVlSfDX3VuEeAiEAwfx3Ix6JUBcQkVzvaOMUK0g5iviKtyKhRw1SSFTmcegqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAG1fA096VosGOaQ1ircA7UbjThRzDYLc2ykBVKz4SYQm3wOfAbt%2BPYWMt8kj%2B441C9DFqvlahHHj5okSbaeu1A8dBvUWElFFGR%2F0cPWtAtJoDvZjWd4c4eIWs6uwS5Tj3wcY2u2npYKe32Gz971QjsWEJeXSiVKpDqXYRH1cYHauu4wLlw%2BN8YUv5T%2Ba%2F45lR%2FHaxtuUO7pL1bzr9%2Foq53dAtjw4Jh6pxURTvOnJEOnUWv2pSSZ5eNAAeGdkYo9zfylAZMHVw%2B82rfpyFPYbtBm0C9bR11g%2Fc5%2F8quehNBkuyMkJ%2BYsGYvKfSO%2BPxdk8uKJO2OT4jgAFkpPh%2FW204QSX8fn%2Bhog0tdBhK5I4JEd%2BUdliQuy8sThtw%2B%2FTJ2kzGslB%2FulLgLQ5raDQFZLKu0GknjOe%2B69yBl5h%2F2eKoeUwzUeXX0IqAlFZXmiqGMv8qJ8%2F%2BMN6tpm62LrbctO6FB1nhJMqowp%2FNkFthMyFvjxGma%2FTMG3Ny9ac3paZPK%2FE%2FCYOE8cpOTM2C7zBV69Bxw%2FV9E1162zWPgvds0vnMuF%2F77%2BAswCmWE4CNPqkq3XVqkHvBV9xKzDveb%2BOiY18o8pDNaXm5qBFV0CURaZSYH0HOcbJXH4u%2BXIORGD9LYpFQ4OkmL4%2FI7PlmAPMJn5p8kGOqUBgpZVYPPeT9nbOnUfVbrbHJYxjuX9KL0OpPO7814B72HMZPMz2cS865PrfYsVJhtlV49Hbt3nQvSuwQDjWSY0afEV12NndTNXILeLQ4OiapPYoHwx1fY3OSHmbURLW7kSUpBOnrdNhjAwAnTQ02MHvoRW49uDNOiAoQ6J%2BQwbnItt8i0kkZvAMMI3sK%2FdM6gQmxnDjOvPwr0BmlAA6uxhR%2FUO87u6&X-Amz-Signature=915fd375cef456f6726ee05cbb6dfadf4ceef8f88542e54892e70f22761634c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
