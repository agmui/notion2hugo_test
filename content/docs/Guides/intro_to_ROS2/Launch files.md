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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPVASVM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsJwQDNwr3%2FZJ1KBoGIkPovBLfyOsnY5%2Fbed%2BRiehXlAIhANl7xK17lq%2B4jvRYuLes4t7zvUljOsMGp9Y27DCC81nTKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxthj1uAHmVUMgUIq3APntPxQf45hTXfaoVFhr1hlgyzYp%2FoWwDLeMBOpaI4KJzrV5ckeMqDayx7wZkQJ3y2vggV3GYryC0FeHPwPpb6ngqWyAMmf%2BuW%2BPLzdXv43ByBlY2PcB5jsSpI1dtIk%2BBt1pVMlSjQe52rBL4acyR7ZiNk2UH4CDpXkD7FIdHQX3uI1UA2ZDndhTB%2BN4wGSvaBqOZBhMcpI%2FGg9xHIxsAaX5CmgXdMZu2wSSyF6RhdWo37oGvrcXMjv%2FksAek9Z9N30w3rcZaGYN0j0XRS8VVIjBvSkc1Jb26D%2Bk5KAChtmZGS8TRdZMBQ403dwOjQPPXrwiHAiBR7v4RVo3b2Oc2%2BbMpWg4o6AnoX5xx2A6TnBICi88g478YctgL0LmCDyyu%2FCgyNa5SZjEvPXtT1R3kQJmzz7zcIHKqA52H02bqLBFIwyMjkW9gByXiPAeJ5T3xOfg4ZGJQQ8n3OrEaa0cUx3qsP3Z8JhCnpoxytFaEHvhXHJf1cg6zCi5wtnfsUFVMCKeljO54PQ9xkpS3LKyVURw6QCnnHRz1RjbtZU4JnVb8s3HvVIyGJSDCf2hMXsA2WuWoqk7GkX2Ly3jeTP3rXgH3KbwuPNFYrPWuCM%2F2aTKZsjSWmcN4xzNLVitTDfybLBBjqkAbCqSVQ7Bt1QAMlXM3%2FHBPRauW4tV90WWOKP9go1cb5eVJHXv%2BIiLsyRrCtBAMXtiB2dTftVjebbH9epwsnin%2B%2B5T%2BfYFn36Z4RvWZ8b1PX2npijU220MvJ%2Bh4jy45s0RacksuqoeFzUYDLnuCIael7Sd1%2BnF7Y%2F4olmUvEot2IPZIzFUImNAgu1j1dK0WRf0WRfe69I8gLLfpQoEZoOPBKSm6fJ&X-Amz-Signature=f17ea606d9cb336c4c54fc4f0be4f947a56f744edf990ab4582446ed7ca2a26e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPVASVM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsJwQDNwr3%2FZJ1KBoGIkPovBLfyOsnY5%2Fbed%2BRiehXlAIhANl7xK17lq%2B4jvRYuLes4t7zvUljOsMGp9Y27DCC81nTKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxthj1uAHmVUMgUIq3APntPxQf45hTXfaoVFhr1hlgyzYp%2FoWwDLeMBOpaI4KJzrV5ckeMqDayx7wZkQJ3y2vggV3GYryC0FeHPwPpb6ngqWyAMmf%2BuW%2BPLzdXv43ByBlY2PcB5jsSpI1dtIk%2BBt1pVMlSjQe52rBL4acyR7ZiNk2UH4CDpXkD7FIdHQX3uI1UA2ZDndhTB%2BN4wGSvaBqOZBhMcpI%2FGg9xHIxsAaX5CmgXdMZu2wSSyF6RhdWo37oGvrcXMjv%2FksAek9Z9N30w3rcZaGYN0j0XRS8VVIjBvSkc1Jb26D%2Bk5KAChtmZGS8TRdZMBQ403dwOjQPPXrwiHAiBR7v4RVo3b2Oc2%2BbMpWg4o6AnoX5xx2A6TnBICi88g478YctgL0LmCDyyu%2FCgyNa5SZjEvPXtT1R3kQJmzz7zcIHKqA52H02bqLBFIwyMjkW9gByXiPAeJ5T3xOfg4ZGJQQ8n3OrEaa0cUx3qsP3Z8JhCnpoxytFaEHvhXHJf1cg6zCi5wtnfsUFVMCKeljO54PQ9xkpS3LKyVURw6QCnnHRz1RjbtZU4JnVb8s3HvVIyGJSDCf2hMXsA2WuWoqk7GkX2Ly3jeTP3rXgH3KbwuPNFYrPWuCM%2F2aTKZsjSWmcN4xzNLVitTDfybLBBjqkAbCqSVQ7Bt1QAMlXM3%2FHBPRauW4tV90WWOKP9go1cb5eVJHXv%2BIiLsyRrCtBAMXtiB2dTftVjebbH9epwsnin%2B%2B5T%2BfYFn36Z4RvWZ8b1PX2npijU220MvJ%2Bh4jy45s0RacksuqoeFzUYDLnuCIael7Sd1%2BnF7Y%2F4olmUvEot2IPZIzFUImNAgu1j1dK0WRf0WRfe69I8gLLfpQoEZoOPBKSm6fJ&X-Amz-Signature=4ed6e0c87d3723b41a8f0dc43b9df8d541036c12ee1ce8c1bbe62591253913ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OPVASVM%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsJwQDNwr3%2FZJ1KBoGIkPovBLfyOsnY5%2Fbed%2BRiehXlAIhANl7xK17lq%2B4jvRYuLes4t7zvUljOsMGp9Y27DCC81nTKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYxthj1uAHmVUMgUIq3APntPxQf45hTXfaoVFhr1hlgyzYp%2FoWwDLeMBOpaI4KJzrV5ckeMqDayx7wZkQJ3y2vggV3GYryC0FeHPwPpb6ngqWyAMmf%2BuW%2BPLzdXv43ByBlY2PcB5jsSpI1dtIk%2BBt1pVMlSjQe52rBL4acyR7ZiNk2UH4CDpXkD7FIdHQX3uI1UA2ZDndhTB%2BN4wGSvaBqOZBhMcpI%2FGg9xHIxsAaX5CmgXdMZu2wSSyF6RhdWo37oGvrcXMjv%2FksAek9Z9N30w3rcZaGYN0j0XRS8VVIjBvSkc1Jb26D%2Bk5KAChtmZGS8TRdZMBQ403dwOjQPPXrwiHAiBR7v4RVo3b2Oc2%2BbMpWg4o6AnoX5xx2A6TnBICi88g478YctgL0LmCDyyu%2FCgyNa5SZjEvPXtT1R3kQJmzz7zcIHKqA52H02bqLBFIwyMjkW9gByXiPAeJ5T3xOfg4ZGJQQ8n3OrEaa0cUx3qsP3Z8JhCnpoxytFaEHvhXHJf1cg6zCi5wtnfsUFVMCKeljO54PQ9xkpS3LKyVURw6QCnnHRz1RjbtZU4JnVb8s3HvVIyGJSDCf2hMXsA2WuWoqk7GkX2Ly3jeTP3rXgH3KbwuPNFYrPWuCM%2F2aTKZsjSWmcN4xzNLVitTDfybLBBjqkAbCqSVQ7Bt1QAMlXM3%2FHBPRauW4tV90WWOKP9go1cb5eVJHXv%2BIiLsyRrCtBAMXtiB2dTftVjebbH9epwsnin%2B%2B5T%2BfYFn36Z4RvWZ8b1PX2npijU220MvJ%2Bh4jy45s0RacksuqoeFzUYDLnuCIael7Sd1%2BnF7Y%2F4olmUvEot2IPZIzFUImNAgu1j1dK0WRf0WRfe69I8gLLfpQoEZoOPBKSm6fJ&X-Amz-Signature=967a06c01078f9be382baa74173e5b8df00263f715f58b07b1c4d15afbdfe780&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
