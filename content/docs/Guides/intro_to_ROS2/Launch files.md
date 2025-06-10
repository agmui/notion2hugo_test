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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4ZTE46%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENa7OeAcgyrHOV%2F20A8E18OZ%2BTNYMoFzZAkii6ciMtTAiEAol9v0yfKikpTKxcKHcxU8f6Qt%2B3Okk%2B7GBR5UWYM1LoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfy5H9fUrhU6p7%2FZCrcAyALgwTj4B9Dq%2F6Zw7g0JtXv5%2BxFqfL9Q3bzbjI6RsMSU67ePqwmfQrH7yvPBLU2JTQ38fFhIKHcpGPAEXn9JW4gYf5zIHxFNSgBoRUbWEMQScI%2BXlswUqVM69H4RDvY%2Bh%2B%2BKOl5%2BMDmiaQiEVXilnq50%2F5lvr8Zoi8rlzOc4BpXvT6049jIOGkjBYDG0MzLi1OZioi54bPCxkju1A%2B2lpu3eTyCywYOFGcOV2zQb7bClDamSVk0VgJGz8idJfNPwb1OKs736uRgMQAF69Sa4stA8FQj9Ab5Adjg7wfV3MDvUPg2XIHbJ%2FOsMHMe83NG15LsmjtcfmJTEPMSesfywn%2BE5GNXjuyAH3%2BjsO8i%2BaztwTM0K01Pi6XZujdlIQ4aJrscXFEhPozv0UCVLHR7iFbhS1el5f2HUfw%2BRwmFitsv67VhQDs9SLW2Kp3fCOp0hqijz%2F69kH3Pi2G%2FYhBX8ThL6WIZ12QYch72f7fvdyqa6BpaMlIcOeE3T3%2FsyMjTGupF%2F0mGjRj7PdAkB0hp1SIt67NJ8xu45Il%2B%2FINK9O3lvEJkCz0GCVWCE5LDbqzWma0HOTqagzacCl%2BHaF4JEXVPW%2F5FvqmOO2GL9hw6X4gvYAKsRUPtEbDkkF7zMNbZoMIGOqUBF29uqeJHJDB1DI%2FsEN%2BSNPAsmOZ4e9UdUdtOdr30x%2FVV%2Fo5%2FhZTSN1rdWyAEp%2BZh%2Fjx%2FWJVBb%2BTQksnI9bMgV%2BVF0Oov%2Ff5CAybsWCudTVSD3tBXVtl23ZiB4nODEILjpy%2FlVbTOl3LhX7cEOrpapAzWuEU9YIeL00qIVyywl7ISXzXTIp3nP7%2BJ3pwPkQkBt%2F0%2Bke9zi5XHcozXHvsrNlRggG9L&X-Amz-Signature=3f9efdf1b1e64c321ed2e6010513a9f67b11e2b9323224a5b355a78f8a9b2275&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4ZTE46%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENa7OeAcgyrHOV%2F20A8E18OZ%2BTNYMoFzZAkii6ciMtTAiEAol9v0yfKikpTKxcKHcxU8f6Qt%2B3Okk%2B7GBR5UWYM1LoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfy5H9fUrhU6p7%2FZCrcAyALgwTj4B9Dq%2F6Zw7g0JtXv5%2BxFqfL9Q3bzbjI6RsMSU67ePqwmfQrH7yvPBLU2JTQ38fFhIKHcpGPAEXn9JW4gYf5zIHxFNSgBoRUbWEMQScI%2BXlswUqVM69H4RDvY%2Bh%2B%2BKOl5%2BMDmiaQiEVXilnq50%2F5lvr8Zoi8rlzOc4BpXvT6049jIOGkjBYDG0MzLi1OZioi54bPCxkju1A%2B2lpu3eTyCywYOFGcOV2zQb7bClDamSVk0VgJGz8idJfNPwb1OKs736uRgMQAF69Sa4stA8FQj9Ab5Adjg7wfV3MDvUPg2XIHbJ%2FOsMHMe83NG15LsmjtcfmJTEPMSesfywn%2BE5GNXjuyAH3%2BjsO8i%2BaztwTM0K01Pi6XZujdlIQ4aJrscXFEhPozv0UCVLHR7iFbhS1el5f2HUfw%2BRwmFitsv67VhQDs9SLW2Kp3fCOp0hqijz%2F69kH3Pi2G%2FYhBX8ThL6WIZ12QYch72f7fvdyqa6BpaMlIcOeE3T3%2FsyMjTGupF%2F0mGjRj7PdAkB0hp1SIt67NJ8xu45Il%2B%2FINK9O3lvEJkCz0GCVWCE5LDbqzWma0HOTqagzacCl%2BHaF4JEXVPW%2F5FvqmOO2GL9hw6X4gvYAKsRUPtEbDkkF7zMNbZoMIGOqUBF29uqeJHJDB1DI%2FsEN%2BSNPAsmOZ4e9UdUdtOdr30x%2FVV%2Fo5%2FhZTSN1rdWyAEp%2BZh%2Fjx%2FWJVBb%2BTQksnI9bMgV%2BVF0Oov%2Ff5CAybsWCudTVSD3tBXVtl23ZiB4nODEILjpy%2FlVbTOl3LhX7cEOrpapAzWuEU9YIeL00qIVyywl7ISXzXTIp3nP7%2BJ3pwPkQkBt%2F0%2Bke9zi5XHcozXHvsrNlRggG9L&X-Amz-Signature=ded9524020fe4488a893c3a3a262cc61dee123e065e3df2a11a27b48bb422af4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK4ZTE46%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENa7OeAcgyrHOV%2F20A8E18OZ%2BTNYMoFzZAkii6ciMtTAiEAol9v0yfKikpTKxcKHcxU8f6Qt%2B3Okk%2B7GBR5UWYM1LoqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCfy5H9fUrhU6p7%2FZCrcAyALgwTj4B9Dq%2F6Zw7g0JtXv5%2BxFqfL9Q3bzbjI6RsMSU67ePqwmfQrH7yvPBLU2JTQ38fFhIKHcpGPAEXn9JW4gYf5zIHxFNSgBoRUbWEMQScI%2BXlswUqVM69H4RDvY%2Bh%2B%2BKOl5%2BMDmiaQiEVXilnq50%2F5lvr8Zoi8rlzOc4BpXvT6049jIOGkjBYDG0MzLi1OZioi54bPCxkju1A%2B2lpu3eTyCywYOFGcOV2zQb7bClDamSVk0VgJGz8idJfNPwb1OKs736uRgMQAF69Sa4stA8FQj9Ab5Adjg7wfV3MDvUPg2XIHbJ%2FOsMHMe83NG15LsmjtcfmJTEPMSesfywn%2BE5GNXjuyAH3%2BjsO8i%2BaztwTM0K01Pi6XZujdlIQ4aJrscXFEhPozv0UCVLHR7iFbhS1el5f2HUfw%2BRwmFitsv67VhQDs9SLW2Kp3fCOp0hqijz%2F69kH3Pi2G%2FYhBX8ThL6WIZ12QYch72f7fvdyqa6BpaMlIcOeE3T3%2FsyMjTGupF%2F0mGjRj7PdAkB0hp1SIt67NJ8xu45Il%2B%2FINK9O3lvEJkCz0GCVWCE5LDbqzWma0HOTqagzacCl%2BHaF4JEXVPW%2F5FvqmOO2GL9hw6X4gvYAKsRUPtEbDkkF7zMNbZoMIGOqUBF29uqeJHJDB1DI%2FsEN%2BSNPAsmOZ4e9UdUdtOdr30x%2FVV%2Fo5%2FhZTSN1rdWyAEp%2BZh%2Fjx%2FWJVBb%2BTQksnI9bMgV%2BVF0Oov%2Ff5CAybsWCudTVSD3tBXVtl23ZiB4nODEILjpy%2FlVbTOl3LhX7cEOrpapAzWuEU9YIeL00qIVyywl7ISXzXTIp3nP7%2BJ3pwPkQkBt%2F0%2Bke9zi5XHcozXHvsrNlRggG9L&X-Amz-Signature=34d87f0e27c47c4037f5bddafb8185ce3f929d72904e60287e29809d02eb01e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
