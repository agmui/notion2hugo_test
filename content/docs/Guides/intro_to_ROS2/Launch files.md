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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TQD5GO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCp41hp4hZvUBB71HmehVswDMAXcim2nTcQYCW3aD2%2F6wIgdT46HzUhrL0DF3aN3UUBqpfczgEttSZwTZJepUX9fesq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD3nqqlUjMq%2B8tf2KSrcA9WTpPS%2FDV3NZrp3LJY7R3r8l%2BAeqCcnkTMaF9xT6vfhV7odmAehQfrGN8ybeb4UEvYisKwGH%2FHTdK54p0Bmfc3DtKNO%2Bkvsd%2BDmkgGqZ2vvsE2%2Box4syMRNW8kp460qfbbceJqAa%2BRmm6yJvv3sO5DePh6QISaFanzMhVDIa1ukoXogjlJl6ikMLQGX%2BPJTuD3GY5l3m6dtyDn9P813BOMmgDjNeoFX7DOI10UdUTtr%2F13680nR1Crp%2BdMTYuQaOSxgP7E%2FsZOxvPDwIFosL2FWBdFdRVM%2FW%2F9JdddX80O2SP7URPTATYfYdtqHADvTnItIKgP1SpdeplXPpOVAkaAzyvEdxl1Olk3TPPeiqDhMkoq9lAHoT5L60eDtj8JbYD5u8Aa6KY2f6%2BIYc2QnTMdR9vMcXtM90kEnF330aVgubGX%2Bo86%2FejFf9LyuQA%2Bv5MHAHmkejidSrLgSwc5ihZfQvXVc64suhFC5UNGsrVJp8EwJEcjWTJDoz9lwCj%2FiYeKh9uK7ifQA7DCCSLNQ4vyVf0Z7IR3%2FjA59dv%2BqypAcsq5rZz4ImQQ5q22hrli7uH5VbFwp18AYSEClo0cRYYZd%2Bl1vHdWXRZ2pmchKbfUqgs1kHOtW0%2BI9s9GZMOammMQGOqUBZNiSSU8N68K%2FJUg2XIq%2BA0YpC8wvNYs8YnZAMGrVyjbkiA3UwTpyPnF07Is33oS%2BEHvX6dxfziHgz30catgGRETdJvtjt3eAlIW055MWgaV2xMZKqvrFjkzpgL%2FIu2yzZQKKzTFhB%2BUliU11prTTBrGDVCXJNId5wBlHHtOj3hQrUj5ZDdH%2BrbcOBVBusiuDr0WyzIC5qooXY4g%2FtwUdwYJUjkew&X-Amz-Signature=03433bfea4e98281c30b269ce75e7f37d8b547217e9a6ff871cc40224cfd5bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TQD5GO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCp41hp4hZvUBB71HmehVswDMAXcim2nTcQYCW3aD2%2F6wIgdT46HzUhrL0DF3aN3UUBqpfczgEttSZwTZJepUX9fesq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD3nqqlUjMq%2B8tf2KSrcA9WTpPS%2FDV3NZrp3LJY7R3r8l%2BAeqCcnkTMaF9xT6vfhV7odmAehQfrGN8ybeb4UEvYisKwGH%2FHTdK54p0Bmfc3DtKNO%2Bkvsd%2BDmkgGqZ2vvsE2%2Box4syMRNW8kp460qfbbceJqAa%2BRmm6yJvv3sO5DePh6QISaFanzMhVDIa1ukoXogjlJl6ikMLQGX%2BPJTuD3GY5l3m6dtyDn9P813BOMmgDjNeoFX7DOI10UdUTtr%2F13680nR1Crp%2BdMTYuQaOSxgP7E%2FsZOxvPDwIFosL2FWBdFdRVM%2FW%2F9JdddX80O2SP7URPTATYfYdtqHADvTnItIKgP1SpdeplXPpOVAkaAzyvEdxl1Olk3TPPeiqDhMkoq9lAHoT5L60eDtj8JbYD5u8Aa6KY2f6%2BIYc2QnTMdR9vMcXtM90kEnF330aVgubGX%2Bo86%2FejFf9LyuQA%2Bv5MHAHmkejidSrLgSwc5ihZfQvXVc64suhFC5UNGsrVJp8EwJEcjWTJDoz9lwCj%2FiYeKh9uK7ifQA7DCCSLNQ4vyVf0Z7IR3%2FjA59dv%2BqypAcsq5rZz4ImQQ5q22hrli7uH5VbFwp18AYSEClo0cRYYZd%2Bl1vHdWXRZ2pmchKbfUqgs1kHOtW0%2BI9s9GZMOammMQGOqUBZNiSSU8N68K%2FJUg2XIq%2BA0YpC8wvNYs8YnZAMGrVyjbkiA3UwTpyPnF07Is33oS%2BEHvX6dxfziHgz30catgGRETdJvtjt3eAlIW055MWgaV2xMZKqvrFjkzpgL%2FIu2yzZQKKzTFhB%2BUliU11prTTBrGDVCXJNId5wBlHHtOj3hQrUj5ZDdH%2BrbcOBVBusiuDr0WyzIC5qooXY4g%2FtwUdwYJUjkew&X-Amz-Signature=2a57ceae889894dacdf6bd0c02d79bf2822f764e52dbd8e7160f1ae6c211e75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TQD5GO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCp41hp4hZvUBB71HmehVswDMAXcim2nTcQYCW3aD2%2F6wIgdT46HzUhrL0DF3aN3UUBqpfczgEttSZwTZJepUX9fesq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD3nqqlUjMq%2B8tf2KSrcA9WTpPS%2FDV3NZrp3LJY7R3r8l%2BAeqCcnkTMaF9xT6vfhV7odmAehQfrGN8ybeb4UEvYisKwGH%2FHTdK54p0Bmfc3DtKNO%2Bkvsd%2BDmkgGqZ2vvsE2%2Box4syMRNW8kp460qfbbceJqAa%2BRmm6yJvv3sO5DePh6QISaFanzMhVDIa1ukoXogjlJl6ikMLQGX%2BPJTuD3GY5l3m6dtyDn9P813BOMmgDjNeoFX7DOI10UdUTtr%2F13680nR1Crp%2BdMTYuQaOSxgP7E%2FsZOxvPDwIFosL2FWBdFdRVM%2FW%2F9JdddX80O2SP7URPTATYfYdtqHADvTnItIKgP1SpdeplXPpOVAkaAzyvEdxl1Olk3TPPeiqDhMkoq9lAHoT5L60eDtj8JbYD5u8Aa6KY2f6%2BIYc2QnTMdR9vMcXtM90kEnF330aVgubGX%2Bo86%2FejFf9LyuQA%2Bv5MHAHmkejidSrLgSwc5ihZfQvXVc64suhFC5UNGsrVJp8EwJEcjWTJDoz9lwCj%2FiYeKh9uK7ifQA7DCCSLNQ4vyVf0Z7IR3%2FjA59dv%2BqypAcsq5rZz4ImQQ5q22hrli7uH5VbFwp18AYSEClo0cRYYZd%2Bl1vHdWXRZ2pmchKbfUqgs1kHOtW0%2BI9s9GZMOammMQGOqUBZNiSSU8N68K%2FJUg2XIq%2BA0YpC8wvNYs8YnZAMGrVyjbkiA3UwTpyPnF07Is33oS%2BEHvX6dxfziHgz30catgGRETdJvtjt3eAlIW055MWgaV2xMZKqvrFjkzpgL%2FIu2yzZQKKzTFhB%2BUliU11prTTBrGDVCXJNId5wBlHHtOj3hQrUj5ZDdH%2BrbcOBVBusiuDr0WyzIC5qooXY4g%2FtwUdwYJUjkew&X-Amz-Signature=a2ceb9a22c06f387b2dc92b1ef0be802f3ab6b9822aca587cf02aa121b207c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
