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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISZ7PWW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf6pQlN%2B9E03ZkFuZCAXu8DHToNDLJ5ajdyjlhjpJVuAiEAi7JO%2BFuE16F8vQbgq3zjkC7gCcNV0NenMhJk5EywOH8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk5sz%2BsAQlCYeVQqircA5ymRLDDrIf095wLkG0D7HC8osDtLSsN9cRQ%2Fdt4V7Rs93JPL9rzruAeYPXsXSCpf1aaRwWJMDaQOhP5hu8OqnoZ8NyFqd3vuHTWDRx7URRK5a8YWlvcW4m3qMbWYifgWOYK3Us1MqFg2P2ohjDg4PAWgklc5w6iYCAVPAs%2BMLdjPUzjCFw3AsJERKFa3sYKmWUnlnYz2Ltoxh1%2BvonTPyF3J8V6TklfzN40S%2B7KuuN%2B0nwdOEjeHcZJomAtYtkwiCwDJQ3iGNNnQ7wxxjhXBQ0hXrEqYOx0QxupkqTiOUlXtClYTKmZvnFpD7p%2BQLvlE6akDKa7tcIaKwfN8XGXrEbwzUnwVQrilh%2BvVc1oEFnC4oQaq%2FCMzdfc8I9T5A2cGo6GVhfqbNY1%2B14rc5Eh%2BUKae5Qs2h9zbfhxfDwFAz5jhMY%2Fxa8Hep5X5OSKeLUBfag7Jd3lUiultmDOrD2N271Mgtz5iO67fQFyLjpEg1sRhmyvqluDFuzawe9ATchlzx2jqOcWqvuuwE3rtvM6aSS86M7QcA5OQ8mUHRe1SwHJH9CcLCzP7zjciH3vK5ju35Oc0Hwsh3TCDiQnxmWAAS7Tl%2BQC3CdBB7FJKjTte0QtTRm9GHzt19tXdJ9LMPKYmL4GOqUBDRSJi2iAzXGqsrQUcVacpL7NU18mXiCzKE66v5xLnmrEQMpMF80ZBCfuPRnEGIX2slzsas6BJKodZMw7UbRMcVsRyFcrtlv1B%2B08mNUFNwIE9H84tEHdeoSy3xFqkpnFUcX2BGBiCmTd477nYQlh4LsrbYk0ExuNtkQXcDcoBCU6%2FzIXFqErRl%2FhHDiuyJXaqIzPfG%2FuoQRfrAHWt0cLikwZTz6A&X-Amz-Signature=91845dd42dcee7d01d3edf82432395c8c41d709743ca0d3896eb620d885b1e94&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISZ7PWW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf6pQlN%2B9E03ZkFuZCAXu8DHToNDLJ5ajdyjlhjpJVuAiEAi7JO%2BFuE16F8vQbgq3zjkC7gCcNV0NenMhJk5EywOH8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk5sz%2BsAQlCYeVQqircA5ymRLDDrIf095wLkG0D7HC8osDtLSsN9cRQ%2Fdt4V7Rs93JPL9rzruAeYPXsXSCpf1aaRwWJMDaQOhP5hu8OqnoZ8NyFqd3vuHTWDRx7URRK5a8YWlvcW4m3qMbWYifgWOYK3Us1MqFg2P2ohjDg4PAWgklc5w6iYCAVPAs%2BMLdjPUzjCFw3AsJERKFa3sYKmWUnlnYz2Ltoxh1%2BvonTPyF3J8V6TklfzN40S%2B7KuuN%2B0nwdOEjeHcZJomAtYtkwiCwDJQ3iGNNnQ7wxxjhXBQ0hXrEqYOx0QxupkqTiOUlXtClYTKmZvnFpD7p%2BQLvlE6akDKa7tcIaKwfN8XGXrEbwzUnwVQrilh%2BvVc1oEFnC4oQaq%2FCMzdfc8I9T5A2cGo6GVhfqbNY1%2B14rc5Eh%2BUKae5Qs2h9zbfhxfDwFAz5jhMY%2Fxa8Hep5X5OSKeLUBfag7Jd3lUiultmDOrD2N271Mgtz5iO67fQFyLjpEg1sRhmyvqluDFuzawe9ATchlzx2jqOcWqvuuwE3rtvM6aSS86M7QcA5OQ8mUHRe1SwHJH9CcLCzP7zjciH3vK5ju35Oc0Hwsh3TCDiQnxmWAAS7Tl%2BQC3CdBB7FJKjTte0QtTRm9GHzt19tXdJ9LMPKYmL4GOqUBDRSJi2iAzXGqsrQUcVacpL7NU18mXiCzKE66v5xLnmrEQMpMF80ZBCfuPRnEGIX2slzsas6BJKodZMw7UbRMcVsRyFcrtlv1B%2B08mNUFNwIE9H84tEHdeoSy3xFqkpnFUcX2BGBiCmTd477nYQlh4LsrbYk0ExuNtkQXcDcoBCU6%2FzIXFqErRl%2FhHDiuyJXaqIzPfG%2FuoQRfrAHWt0cLikwZTz6A&X-Amz-Signature=66789006f289d47b797ceecefd2b72605dd8e3b7a1aec5ab42a56e74f722ab45&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ISZ7PWW%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf6pQlN%2B9E03ZkFuZCAXu8DHToNDLJ5ajdyjlhjpJVuAiEAi7JO%2BFuE16F8vQbgq3zjkC7gCcNV0NenMhJk5EywOH8qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk5sz%2BsAQlCYeVQqircA5ymRLDDrIf095wLkG0D7HC8osDtLSsN9cRQ%2Fdt4V7Rs93JPL9rzruAeYPXsXSCpf1aaRwWJMDaQOhP5hu8OqnoZ8NyFqd3vuHTWDRx7URRK5a8YWlvcW4m3qMbWYifgWOYK3Us1MqFg2P2ohjDg4PAWgklc5w6iYCAVPAs%2BMLdjPUzjCFw3AsJERKFa3sYKmWUnlnYz2Ltoxh1%2BvonTPyF3J8V6TklfzN40S%2B7KuuN%2B0nwdOEjeHcZJomAtYtkwiCwDJQ3iGNNnQ7wxxjhXBQ0hXrEqYOx0QxupkqTiOUlXtClYTKmZvnFpD7p%2BQLvlE6akDKa7tcIaKwfN8XGXrEbwzUnwVQrilh%2BvVc1oEFnC4oQaq%2FCMzdfc8I9T5A2cGo6GVhfqbNY1%2B14rc5Eh%2BUKae5Qs2h9zbfhxfDwFAz5jhMY%2Fxa8Hep5X5OSKeLUBfag7Jd3lUiultmDOrD2N271Mgtz5iO67fQFyLjpEg1sRhmyvqluDFuzawe9ATchlzx2jqOcWqvuuwE3rtvM6aSS86M7QcA5OQ8mUHRe1SwHJH9CcLCzP7zjciH3vK5ju35Oc0Hwsh3TCDiQnxmWAAS7Tl%2BQC3CdBB7FJKjTte0QtTRm9GHzt19tXdJ9LMPKYmL4GOqUBDRSJi2iAzXGqsrQUcVacpL7NU18mXiCzKE66v5xLnmrEQMpMF80ZBCfuPRnEGIX2slzsas6BJKodZMw7UbRMcVsRyFcrtlv1B%2B08mNUFNwIE9H84tEHdeoSy3xFqkpnFUcX2BGBiCmTd477nYQlh4LsrbYk0ExuNtkQXcDcoBCU6%2FzIXFqErRl%2FhHDiuyJXaqIzPfG%2FuoQRfrAHWt0cLikwZTz6A&X-Amz-Signature=41c1654fa3b095922f011ce4f58f1d7702d2d7a6e36e14f4fd624da9cd50753a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
