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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEJFIH6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGH%2FNLT%2BMwdt2zM6fCJhmOmPVZsDapoa7noFE5ZP3QExAiEA9W5hpESchQFax2NAwtyhczA7tBQyw0JDtd3e3Q6OxuYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHjW78nCvzZdqMFQ5CrcAwVwxJwA%2FZSB6Q1gom0EVXqBQtp%2F47JniThkrCa8uRtpvpaZKqDAY22O8C1vASoL7C06V%2Fq%2FypNoUd98fVwI5ujqTyW4bHyg%2FMQXQe2itRxG5nGiu1kIV%2FCQs%2BHIZo0EiI332Nv8UAEhUC58inzwCpt7d6lKXOWiWdj7%2BWsFNB8C16pyl2P50IgIaqiRa6wslMW0bzREPj4m3hmIqlrI2%2B4EEKY5he0KZyTMnfzZmbsOsr%2B14TefoIkW2AvGxviWOb8d9c112MtxldtWRJpbysXdZ8fXZuL1RrIzLCayfyjOhUFiUwY%2FQUS6SZu8fC1b5KxU1eb%2BbbCfhNFXkkCi50JsUBQsPkXEeENIOCx9%2BulvJqZHJIl1NDswSOGV0Yr0yPK9Fcns%2F1KsRAixCiw3KiypfVXi25CDqs%2FB3Gjy%2BQ1Wn%2Bb1%2FThZ0fSdak1TTPgtjdJ9Arw%2BjvnoTE%2FjXsWNbJvLbJ4hcxpmFkPYO%2FcG3JndpIX5VK1g%2FJfih%2Fv%2FeKBOAOHDE2yppRzi6%2FbwihZG%2BZIT8eyhsMKl8WL%2FyV98TKAn%2B1uRa1Qahz1A5yEEU5oiLBHv3GLJGuVB0agi5YC8yR0mk4ICLqklCd2IaWmjdkoKWo%2F7sdzlu4l9eD1iMNyH1b8GOqUBkwTHm07Y9D9c7oJHpYCdeAAuMMbHlDb5C%2FkrCfER4qKoF1K9gcsjhxcg26fmu8%2F0JXj8mNCtjUHuPKmvZG8mazoOp7hAwRFCE9sO4FQnLTUENxphJ9sq8u39L5DAzhpI0cVILJaQaZnz%2F5nCbOoJ8VMy0mRAwRM2QjXZl2x1Vl6%2BbGExmvBnssBbflHtQpqECO57Nz5LdY727bueUaeiVcwU07uU&X-Amz-Signature=fbd4dec998ba3b27d1503def54a77e7477fc8279598b50c14507ab93820a4444&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEJFIH6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGH%2FNLT%2BMwdt2zM6fCJhmOmPVZsDapoa7noFE5ZP3QExAiEA9W5hpESchQFax2NAwtyhczA7tBQyw0JDtd3e3Q6OxuYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHjW78nCvzZdqMFQ5CrcAwVwxJwA%2FZSB6Q1gom0EVXqBQtp%2F47JniThkrCa8uRtpvpaZKqDAY22O8C1vASoL7C06V%2Fq%2FypNoUd98fVwI5ujqTyW4bHyg%2FMQXQe2itRxG5nGiu1kIV%2FCQs%2BHIZo0EiI332Nv8UAEhUC58inzwCpt7d6lKXOWiWdj7%2BWsFNB8C16pyl2P50IgIaqiRa6wslMW0bzREPj4m3hmIqlrI2%2B4EEKY5he0KZyTMnfzZmbsOsr%2B14TefoIkW2AvGxviWOb8d9c112MtxldtWRJpbysXdZ8fXZuL1RrIzLCayfyjOhUFiUwY%2FQUS6SZu8fC1b5KxU1eb%2BbbCfhNFXkkCi50JsUBQsPkXEeENIOCx9%2BulvJqZHJIl1NDswSOGV0Yr0yPK9Fcns%2F1KsRAixCiw3KiypfVXi25CDqs%2FB3Gjy%2BQ1Wn%2Bb1%2FThZ0fSdak1TTPgtjdJ9Arw%2BjvnoTE%2FjXsWNbJvLbJ4hcxpmFkPYO%2FcG3JndpIX5VK1g%2FJfih%2Fv%2FeKBOAOHDE2yppRzi6%2FbwihZG%2BZIT8eyhsMKl8WL%2FyV98TKAn%2B1uRa1Qahz1A5yEEU5oiLBHv3GLJGuVB0agi5YC8yR0mk4ICLqklCd2IaWmjdkoKWo%2F7sdzlu4l9eD1iMNyH1b8GOqUBkwTHm07Y9D9c7oJHpYCdeAAuMMbHlDb5C%2FkrCfER4qKoF1K9gcsjhxcg26fmu8%2F0JXj8mNCtjUHuPKmvZG8mazoOp7hAwRFCE9sO4FQnLTUENxphJ9sq8u39L5DAzhpI0cVILJaQaZnz%2F5nCbOoJ8VMy0mRAwRM2QjXZl2x1Vl6%2BbGExmvBnssBbflHtQpqECO57Nz5LdY727bueUaeiVcwU07uU&X-Amz-Signature=1ee698aee9e15ac17379e2f584e925f3f02460b6baaf9a7658a91bfad9dc5823&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEJFIH6%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGH%2FNLT%2BMwdt2zM6fCJhmOmPVZsDapoa7noFE5ZP3QExAiEA9W5hpESchQFax2NAwtyhczA7tBQyw0JDtd3e3Q6OxuYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHjW78nCvzZdqMFQ5CrcAwVwxJwA%2FZSB6Q1gom0EVXqBQtp%2F47JniThkrCa8uRtpvpaZKqDAY22O8C1vASoL7C06V%2Fq%2FypNoUd98fVwI5ujqTyW4bHyg%2FMQXQe2itRxG5nGiu1kIV%2FCQs%2BHIZo0EiI332Nv8UAEhUC58inzwCpt7d6lKXOWiWdj7%2BWsFNB8C16pyl2P50IgIaqiRa6wslMW0bzREPj4m3hmIqlrI2%2B4EEKY5he0KZyTMnfzZmbsOsr%2B14TefoIkW2AvGxviWOb8d9c112MtxldtWRJpbysXdZ8fXZuL1RrIzLCayfyjOhUFiUwY%2FQUS6SZu8fC1b5KxU1eb%2BbbCfhNFXkkCi50JsUBQsPkXEeENIOCx9%2BulvJqZHJIl1NDswSOGV0Yr0yPK9Fcns%2F1KsRAixCiw3KiypfVXi25CDqs%2FB3Gjy%2BQ1Wn%2Bb1%2FThZ0fSdak1TTPgtjdJ9Arw%2BjvnoTE%2FjXsWNbJvLbJ4hcxpmFkPYO%2FcG3JndpIX5VK1g%2FJfih%2Fv%2FeKBOAOHDE2yppRzi6%2FbwihZG%2BZIT8eyhsMKl8WL%2FyV98TKAn%2B1uRa1Qahz1A5yEEU5oiLBHv3GLJGuVB0agi5YC8yR0mk4ICLqklCd2IaWmjdkoKWo%2F7sdzlu4l9eD1iMNyH1b8GOqUBkwTHm07Y9D9c7oJHpYCdeAAuMMbHlDb5C%2FkrCfER4qKoF1K9gcsjhxcg26fmu8%2F0JXj8mNCtjUHuPKmvZG8mazoOp7hAwRFCE9sO4FQnLTUENxphJ9sq8u39L5DAzhpI0cVILJaQaZnz%2F5nCbOoJ8VMy0mRAwRM2QjXZl2x1Vl6%2BbGExmvBnssBbflHtQpqECO57Nz5LdY727bueUaeiVcwU07uU&X-Amz-Signature=8546557087e9eb07ce7e33b99590321d405e553e7a6c981115303fb86c1b25d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
