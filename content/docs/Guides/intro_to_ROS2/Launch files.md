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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVWTMVI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC899ITMmIl2t2PRB3zrEwFIn5DD4scLX7lHVU9hQS1ygIhAMERITGipM9C%2BZ1c7epZix%2Fm9KYlHIV41Kb3hP7ilmrmKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIWpgAE2QRtK%2F9c7oq3AMAlchHCDz1jPexwsQCKnmk5AQsm1gJrxILJvCH1yDlEN6zL1EyAf5BgLwfhToANXNQp1tHX0S%2F54aVZ5S1MOilwaZr5ZvT0DB%2FrlOpjitAxTKS4ot0Mo9yAjdCJQEbbqLSZ6ORpCgj3CqqlCvVirykELP4UVsZGn72sh8BS0S2SJH1P1vTodls2ZoM3TWYhZUqJEgybj50NtqU%2Fs5Y8rboI9zz4NGXAaV6EuZdBVetHEEs4fpAl0KhO2h5etFDsBSRKsyretitH3G%2FLNQ4yS0IEGXybahX6jwz4QYBWRdmYhn%2BpSaod3WhkqenSPQroe5Xtk2FojLNTCAiHp7frnjOZ0jDGrGnJvAVQQLWfMHI2Ym5HOfhF1aS5sto5xg55WPQtAicctxFYbd5qg6k1scmA71VWUDlsVNs3I1EXSE7SGtYfnZ9bi59GiGnJBjEzGaCF9JNBjKPpRe7iQLlGaLQ8YT5aP0Xxuq%2BCyeFzHj4hlFEckfVLixjLjkAW3469%2BimUC7Pqy53wCd42hU10htSI3w37Eqsu510pUD%2FenDCY96NxZFBJ4x6Z6Lws59Zd7e6QDpcMm%2Fb4bHheG40zNqIOkhxVtzHHZZGq4MWmUekI24QhjDcNoU2GTBwqTD6je2%2FBjqkARXkPzcyoktuqz2wEuEdp1iw0%2BnII2UoTQRBD7uFNYuvimLCAPK8LFQsr4vBBr%2Fk2dRPYOaDngNOWKyJ6TIKlZMWC91Yon65%2BAjgfStbX3cIYupBC06hGbrV1SVg4Ashs5HFlGKykYNLaYD7myrG1dGM8TrFtDRnUYBKdqmAxF821pE3UnWupe%2FhZuampCcaPQ4aaRi%2FcuUEtAVngvnxLM%2FwkgqF&X-Amz-Signature=c15d869f6c4740d143ce0df1fd146e734453fed4a03793c5accbaf36ddf688f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVWTMVI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC899ITMmIl2t2PRB3zrEwFIn5DD4scLX7lHVU9hQS1ygIhAMERITGipM9C%2BZ1c7epZix%2Fm9KYlHIV41Kb3hP7ilmrmKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIWpgAE2QRtK%2F9c7oq3AMAlchHCDz1jPexwsQCKnmk5AQsm1gJrxILJvCH1yDlEN6zL1EyAf5BgLwfhToANXNQp1tHX0S%2F54aVZ5S1MOilwaZr5ZvT0DB%2FrlOpjitAxTKS4ot0Mo9yAjdCJQEbbqLSZ6ORpCgj3CqqlCvVirykELP4UVsZGn72sh8BS0S2SJH1P1vTodls2ZoM3TWYhZUqJEgybj50NtqU%2Fs5Y8rboI9zz4NGXAaV6EuZdBVetHEEs4fpAl0KhO2h5etFDsBSRKsyretitH3G%2FLNQ4yS0IEGXybahX6jwz4QYBWRdmYhn%2BpSaod3WhkqenSPQroe5Xtk2FojLNTCAiHp7frnjOZ0jDGrGnJvAVQQLWfMHI2Ym5HOfhF1aS5sto5xg55WPQtAicctxFYbd5qg6k1scmA71VWUDlsVNs3I1EXSE7SGtYfnZ9bi59GiGnJBjEzGaCF9JNBjKPpRe7iQLlGaLQ8YT5aP0Xxuq%2BCyeFzHj4hlFEckfVLixjLjkAW3469%2BimUC7Pqy53wCd42hU10htSI3w37Eqsu510pUD%2FenDCY96NxZFBJ4x6Z6Lws59Zd7e6QDpcMm%2Fb4bHheG40zNqIOkhxVtzHHZZGq4MWmUekI24QhjDcNoU2GTBwqTD6je2%2FBjqkARXkPzcyoktuqz2wEuEdp1iw0%2BnII2UoTQRBD7uFNYuvimLCAPK8LFQsr4vBBr%2Fk2dRPYOaDngNOWKyJ6TIKlZMWC91Yon65%2BAjgfStbX3cIYupBC06hGbrV1SVg4Ashs5HFlGKykYNLaYD7myrG1dGM8TrFtDRnUYBKdqmAxF821pE3UnWupe%2FhZuampCcaPQ4aaRi%2FcuUEtAVngvnxLM%2FwkgqF&X-Amz-Signature=b006eded210a981cc99d94e932478dfe62ca7a5251f61c3aab32cd30cf5468a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MVWTMVI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC899ITMmIl2t2PRB3zrEwFIn5DD4scLX7lHVU9hQS1ygIhAMERITGipM9C%2BZ1c7epZix%2Fm9KYlHIV41Kb3hP7ilmrmKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIWpgAE2QRtK%2F9c7oq3AMAlchHCDz1jPexwsQCKnmk5AQsm1gJrxILJvCH1yDlEN6zL1EyAf5BgLwfhToANXNQp1tHX0S%2F54aVZ5S1MOilwaZr5ZvT0DB%2FrlOpjitAxTKS4ot0Mo9yAjdCJQEbbqLSZ6ORpCgj3CqqlCvVirykELP4UVsZGn72sh8BS0S2SJH1P1vTodls2ZoM3TWYhZUqJEgybj50NtqU%2Fs5Y8rboI9zz4NGXAaV6EuZdBVetHEEs4fpAl0KhO2h5etFDsBSRKsyretitH3G%2FLNQ4yS0IEGXybahX6jwz4QYBWRdmYhn%2BpSaod3WhkqenSPQroe5Xtk2FojLNTCAiHp7frnjOZ0jDGrGnJvAVQQLWfMHI2Ym5HOfhF1aS5sto5xg55WPQtAicctxFYbd5qg6k1scmA71VWUDlsVNs3I1EXSE7SGtYfnZ9bi59GiGnJBjEzGaCF9JNBjKPpRe7iQLlGaLQ8YT5aP0Xxuq%2BCyeFzHj4hlFEckfVLixjLjkAW3469%2BimUC7Pqy53wCd42hU10htSI3w37Eqsu510pUD%2FenDCY96NxZFBJ4x6Z6Lws59Zd7e6QDpcMm%2Fb4bHheG40zNqIOkhxVtzHHZZGq4MWmUekI24QhjDcNoU2GTBwqTD6je2%2FBjqkARXkPzcyoktuqz2wEuEdp1iw0%2BnII2UoTQRBD7uFNYuvimLCAPK8LFQsr4vBBr%2Fk2dRPYOaDngNOWKyJ6TIKlZMWC91Yon65%2BAjgfStbX3cIYupBC06hGbrV1SVg4Ashs5HFlGKykYNLaYD7myrG1dGM8TrFtDRnUYBKdqmAxF821pE3UnWupe%2FhZuampCcaPQ4aaRi%2FcuUEtAVngvnxLM%2FwkgqF&X-Amz-Signature=56e6185cd22797a836087b4395a5b27c01237d7ebb638d4ce9c5ac817aaea1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
