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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VSF3XPF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFmorbfK90t70oN6K3rdo5f9SRgeTDsQVi0laQYAxLwJAiEA5irFFOr4QpK2ScG1TLxK2R4w9qnko78LB6m8yDXa%2B7Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCz%2BSAwlXE%2BQR0nGcCrcA0g5KS%2BZ8qr6R1SDMo0mYz1RoUsUrSRG50RXnzOQkxJo9ln54FNBA2DB7LIvvvBZGzIYwELYm934p%2BFlfw5tWdHMoeI1578AZtzlGhGzDLdyJ2w527xeNqFSZ2NKP2otEOb%2BCxBKq%2FHU07QQCWQW9rHSv%2FOGvhHgDi%2FeyS8r4P4GYOV%2BMqhXImqdGSnuQAWSNtK7i60ZnS0MSlXGppPSAXfOCpUUUUZXuR6nOmHEs2AZ7QlcjkyBT6GpSZ1xjhV2nNreXd%2Bz%2FzjPeJXn76DHT5k%2B0Dic5%2FhaWAsbyGCOYkMLcMZIqdmyRc1fcfbgCAGIO1oql7CMBlZwvFV%2BRlCxSFC8r10HrUvTkoe6wylv4Ci%2F48KU3n%2FR9QjPIUEVABJPDF4fRLby3P7lwybDkKfUAS0JqvMKhzo%2Bj3sZIQyPJ5HBzbFNDyj297KHfdzP2GQ9phHDwa1ysjE21cQ2AD4hxWKya3y8GDDzlQMq%2BY%2FUSdw8LLgnX%2F%2F7MasZVYKQRsUemz5Kz4ywZGEfI8ntdZHghlMmko8gQC2a2EJXCdvrDBKnhsHjtyP7uECDroBbKXGkKMRjSbQRkxdK8o8OtRKK4vYJyXxCKyduQpC6I8etIfevq%2FjRvOB7FZcuRNLmMPCKtL4GOqUBcRskUmUNjGOH%2BkKh9E2Ycn8RjZtJvao9zPmVR4yti0Hvc%2BwUW9mqkeEtFdlI7sd%2BF28fk2MPgrooD7hWs3JJ5txhfjr2UWOSCQ%2FEr4PEkGZ0mVb%2BpKjcLAbFd7sne5AlvxQgqQh7xD1oly6rsrBcq8LOD5B7IRRIRZlrcgaJp35oiIqr8VglXIH9e9fhM9%2F33JojmqErcJmLZ17BY31Y8JgezHjN&X-Amz-Signature=7889644ecf53b12fba966daeeda0fcda38a9566240f47cfb36b871a65cfc44d8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VSF3XPF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFmorbfK90t70oN6K3rdo5f9SRgeTDsQVi0laQYAxLwJAiEA5irFFOr4QpK2ScG1TLxK2R4w9qnko78LB6m8yDXa%2B7Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCz%2BSAwlXE%2BQR0nGcCrcA0g5KS%2BZ8qr6R1SDMo0mYz1RoUsUrSRG50RXnzOQkxJo9ln54FNBA2DB7LIvvvBZGzIYwELYm934p%2BFlfw5tWdHMoeI1578AZtzlGhGzDLdyJ2w527xeNqFSZ2NKP2otEOb%2BCxBKq%2FHU07QQCWQW9rHSv%2FOGvhHgDi%2FeyS8r4P4GYOV%2BMqhXImqdGSnuQAWSNtK7i60ZnS0MSlXGppPSAXfOCpUUUUZXuR6nOmHEs2AZ7QlcjkyBT6GpSZ1xjhV2nNreXd%2Bz%2FzjPeJXn76DHT5k%2B0Dic5%2FhaWAsbyGCOYkMLcMZIqdmyRc1fcfbgCAGIO1oql7CMBlZwvFV%2BRlCxSFC8r10HrUvTkoe6wylv4Ci%2F48KU3n%2FR9QjPIUEVABJPDF4fRLby3P7lwybDkKfUAS0JqvMKhzo%2Bj3sZIQyPJ5HBzbFNDyj297KHfdzP2GQ9phHDwa1ysjE21cQ2AD4hxWKya3y8GDDzlQMq%2BY%2FUSdw8LLgnX%2F%2F7MasZVYKQRsUemz5Kz4ywZGEfI8ntdZHghlMmko8gQC2a2EJXCdvrDBKnhsHjtyP7uECDroBbKXGkKMRjSbQRkxdK8o8OtRKK4vYJyXxCKyduQpC6I8etIfevq%2FjRvOB7FZcuRNLmMPCKtL4GOqUBcRskUmUNjGOH%2BkKh9E2Ycn8RjZtJvao9zPmVR4yti0Hvc%2BwUW9mqkeEtFdlI7sd%2BF28fk2MPgrooD7hWs3JJ5txhfjr2UWOSCQ%2FEr4PEkGZ0mVb%2BpKjcLAbFd7sne5AlvxQgqQh7xD1oly6rsrBcq8LOD5B7IRRIRZlrcgaJp35oiIqr8VglXIH9e9fhM9%2F33JojmqErcJmLZ17BY31Y8JgezHjN&X-Amz-Signature=9a231c597848fc369686afd3b95dae908c2ded3fc25fef6973f7c9b06b08082d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VSF3XPF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T030819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFmorbfK90t70oN6K3rdo5f9SRgeTDsQVi0laQYAxLwJAiEA5irFFOr4QpK2ScG1TLxK2R4w9qnko78LB6m8yDXa%2B7Yq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCz%2BSAwlXE%2BQR0nGcCrcA0g5KS%2BZ8qr6R1SDMo0mYz1RoUsUrSRG50RXnzOQkxJo9ln54FNBA2DB7LIvvvBZGzIYwELYm934p%2BFlfw5tWdHMoeI1578AZtzlGhGzDLdyJ2w527xeNqFSZ2NKP2otEOb%2BCxBKq%2FHU07QQCWQW9rHSv%2FOGvhHgDi%2FeyS8r4P4GYOV%2BMqhXImqdGSnuQAWSNtK7i60ZnS0MSlXGppPSAXfOCpUUUUZXuR6nOmHEs2AZ7QlcjkyBT6GpSZ1xjhV2nNreXd%2Bz%2FzjPeJXn76DHT5k%2B0Dic5%2FhaWAsbyGCOYkMLcMZIqdmyRc1fcfbgCAGIO1oql7CMBlZwvFV%2BRlCxSFC8r10HrUvTkoe6wylv4Ci%2F48KU3n%2FR9QjPIUEVABJPDF4fRLby3P7lwybDkKfUAS0JqvMKhzo%2Bj3sZIQyPJ5HBzbFNDyj297KHfdzP2GQ9phHDwa1ysjE21cQ2AD4hxWKya3y8GDDzlQMq%2BY%2FUSdw8LLgnX%2F%2F7MasZVYKQRsUemz5Kz4ywZGEfI8ntdZHghlMmko8gQC2a2EJXCdvrDBKnhsHjtyP7uECDroBbKXGkKMRjSbQRkxdK8o8OtRKK4vYJyXxCKyduQpC6I8etIfevq%2FjRvOB7FZcuRNLmMPCKtL4GOqUBcRskUmUNjGOH%2BkKh9E2Ycn8RjZtJvao9zPmVR4yti0Hvc%2BwUW9mqkeEtFdlI7sd%2BF28fk2MPgrooD7hWs3JJ5txhfjr2UWOSCQ%2FEr4PEkGZ0mVb%2BpKjcLAbFd7sne5AlvxQgqQh7xD1oly6rsrBcq8LOD5B7IRRIRZlrcgaJp35oiIqr8VglXIH9e9fhM9%2F33JojmqErcJmLZ17BY31Y8JgezHjN&X-Amz-Signature=2479c1dddedf7739e5ec743a450c975b33b5fe81a3d6456f20d365f460b21249&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
