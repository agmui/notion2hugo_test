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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JNSIZ4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC60WlF7v4h7%2BtgZ%2B9QBsWHpH60XmlIq6QNob%2F%2Bhnh%2BrgIhAOxQbhL34LBXdIlj7cgadip83OcU8haDMmba%2FTsPnlGpKv8DCGMQABoMNjM3NDIzMTgzODA1IgyAQ3oigjktOAm%2FNN8q3AOgNDR3EFTT8ssgtp17AjnPZGVNkxtqQ91bJ3mGdWXLPrqqVd1VNrZkpcpneRTvIye1ZTvuKjHpc4KWVsa%2BEma6gWATv5ZmGPHMcQKMb72WI9x3xsDsHOLa2DURclDVOKTg0GbZBQNGBYUaFS7BiLJx%2FcNk9UnW%2BnoDL5BByL5YsJgMO1ezhZ20yJdGmpwP1tM%2BVZ3Fq%2FB%2FLKSiZ6Y7F%2B%2ByrEJjrV%2Flx6iESt9w6%2Fz3WXuABG7CHtekIUCmMX49N%2FWPYdinKFu2KNGSfc5M%2FwWhZa47GR3bH5dRohMz%2FwRLojHXYi3%2Fm0ClHDYre1hDmN1iktFtKTTzRJPBGUED9KagUgz9N3V0Bu4sGFVwJfU3UrqFNO%2Fe3f2iYyOqiGsVQ7fDg2wFker635jTqXFCJnmDXCApH3TcFJo2k%2F%2FbcnTA4gMNzxhNpef1i%2BXGYqetqtrqz4UtreWvYS3NXd2ejUjAnCwvBcXpEzTEtlgCa0aBSCjmvDNm6KklUSG%2B67YAaae3d3Pgh6cvuqKnY6A%2BsUeRS%2BRoCTXaKGL%2FisBvMalo2pMN5v76BXJ1AxRFgxjn6%2FjVmfSNBEuOoDHqir6hj1TLY0bGDfXZsGV3okm9PxjzaATR9tPvCWo0hK9QdTDXo9C%2FBjqkAckxQvfIX%2BqgeFESkDv9sLwv9SgAx67EU%2Bf7m9vsXBr8I%2FS1Os0jxkpCjMb9lLj9lKz5g%2FmflxfvmpYGsZlwn5CcRz%2BuDoc32nIyX%2FgzMGLGWzxHyJQBY87ytqbkHZaOg3rHWJ0vbRIv1jCzTLNFP95R7hH1s2U%2Biqbmw06YTcXS4LrOabXyJRM6UZQvFawgXDK0L8Dir59GCIX6P8B%2B%2BMW4OngI&X-Amz-Signature=7b203cadd6f849a48e8fda6b35b3219a939dfd060129c50a370d8c4675cedd87&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JNSIZ4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC60WlF7v4h7%2BtgZ%2B9QBsWHpH60XmlIq6QNob%2F%2Bhnh%2BrgIhAOxQbhL34LBXdIlj7cgadip83OcU8haDMmba%2FTsPnlGpKv8DCGMQABoMNjM3NDIzMTgzODA1IgyAQ3oigjktOAm%2FNN8q3AOgNDR3EFTT8ssgtp17AjnPZGVNkxtqQ91bJ3mGdWXLPrqqVd1VNrZkpcpneRTvIye1ZTvuKjHpc4KWVsa%2BEma6gWATv5ZmGPHMcQKMb72WI9x3xsDsHOLa2DURclDVOKTg0GbZBQNGBYUaFS7BiLJx%2FcNk9UnW%2BnoDL5BByL5YsJgMO1ezhZ20yJdGmpwP1tM%2BVZ3Fq%2FB%2FLKSiZ6Y7F%2B%2ByrEJjrV%2Flx6iESt9w6%2Fz3WXuABG7CHtekIUCmMX49N%2FWPYdinKFu2KNGSfc5M%2FwWhZa47GR3bH5dRohMz%2FwRLojHXYi3%2Fm0ClHDYre1hDmN1iktFtKTTzRJPBGUED9KagUgz9N3V0Bu4sGFVwJfU3UrqFNO%2Fe3f2iYyOqiGsVQ7fDg2wFker635jTqXFCJnmDXCApH3TcFJo2k%2F%2FbcnTA4gMNzxhNpef1i%2BXGYqetqtrqz4UtreWvYS3NXd2ejUjAnCwvBcXpEzTEtlgCa0aBSCjmvDNm6KklUSG%2B67YAaae3d3Pgh6cvuqKnY6A%2BsUeRS%2BRoCTXaKGL%2FisBvMalo2pMN5v76BXJ1AxRFgxjn6%2FjVmfSNBEuOoDHqir6hj1TLY0bGDfXZsGV3okm9PxjzaATR9tPvCWo0hK9QdTDXo9C%2FBjqkAckxQvfIX%2BqgeFESkDv9sLwv9SgAx67EU%2Bf7m9vsXBr8I%2FS1Os0jxkpCjMb9lLj9lKz5g%2FmflxfvmpYGsZlwn5CcRz%2BuDoc32nIyX%2FgzMGLGWzxHyJQBY87ytqbkHZaOg3rHWJ0vbRIv1jCzTLNFP95R7hH1s2U%2Biqbmw06YTcXS4LrOabXyJRM6UZQvFawgXDK0L8Dir59GCIX6P8B%2B%2BMW4OngI&X-Amz-Signature=f41f091d54d4294105428be3b181d1cb687d301760eb2b5245c97d6550cdec28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626JNSIZ4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC60WlF7v4h7%2BtgZ%2B9QBsWHpH60XmlIq6QNob%2F%2Bhnh%2BrgIhAOxQbhL34LBXdIlj7cgadip83OcU8haDMmba%2FTsPnlGpKv8DCGMQABoMNjM3NDIzMTgzODA1IgyAQ3oigjktOAm%2FNN8q3AOgNDR3EFTT8ssgtp17AjnPZGVNkxtqQ91bJ3mGdWXLPrqqVd1VNrZkpcpneRTvIye1ZTvuKjHpc4KWVsa%2BEma6gWATv5ZmGPHMcQKMb72WI9x3xsDsHOLa2DURclDVOKTg0GbZBQNGBYUaFS7BiLJx%2FcNk9UnW%2BnoDL5BByL5YsJgMO1ezhZ20yJdGmpwP1tM%2BVZ3Fq%2FB%2FLKSiZ6Y7F%2B%2ByrEJjrV%2Flx6iESt9w6%2Fz3WXuABG7CHtekIUCmMX49N%2FWPYdinKFu2KNGSfc5M%2FwWhZa47GR3bH5dRohMz%2FwRLojHXYi3%2Fm0ClHDYre1hDmN1iktFtKTTzRJPBGUED9KagUgz9N3V0Bu4sGFVwJfU3UrqFNO%2Fe3f2iYyOqiGsVQ7fDg2wFker635jTqXFCJnmDXCApH3TcFJo2k%2F%2FbcnTA4gMNzxhNpef1i%2BXGYqetqtrqz4UtreWvYS3NXd2ejUjAnCwvBcXpEzTEtlgCa0aBSCjmvDNm6KklUSG%2B67YAaae3d3Pgh6cvuqKnY6A%2BsUeRS%2BRoCTXaKGL%2FisBvMalo2pMN5v76BXJ1AxRFgxjn6%2FjVmfSNBEuOoDHqir6hj1TLY0bGDfXZsGV3okm9PxjzaATR9tPvCWo0hK9QdTDXo9C%2FBjqkAckxQvfIX%2BqgeFESkDv9sLwv9SgAx67EU%2Bf7m9vsXBr8I%2FS1Os0jxkpCjMb9lLj9lKz5g%2FmflxfvmpYGsZlwn5CcRz%2BuDoc32nIyX%2FgzMGLGWzxHyJQBY87ytqbkHZaOg3rHWJ0vbRIv1jCzTLNFP95R7hH1s2U%2Biqbmw06YTcXS4LrOabXyJRM6UZQvFawgXDK0L8Dir59GCIX6P8B%2B%2BMW4OngI&X-Amz-Signature=74e6d70264b06b797b3f8060cbebb0486c5ebb169e848d226e8f28ebe426c59a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
