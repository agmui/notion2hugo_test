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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4EKF32%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDvjcXlfwt9uGbBhV04y8b%2F%2F6jGmXEtNvnUwGR%2B%2BXV52AIgCks7gKy7HV%2FTDN8GbhgbZKZffGRW5IJoIAZat1wUOkIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDB0GJrfawfvKsSKB4ircA0Y5MA10C8KBSG%2BAfRlGE5zX2M%2BVfSslVVMxyg93OZEIuIWwlF9XghSSUVDrcLWG0CQ5wA94PtnLQUK1Deyaj6M162Mg1pjnm8%2BjE0pkGMSjoIdZe9LaNy3UFnE3kbmjmMiu%2BjrHIoDeqqWwUtIsUky0Nfgoq9ljEzmyihoGf36l4J0eVmRV1Jj0Ip%2BYLJ7%2F069JkHocBv3ksasAJIBcgnPj7%2BxN6a%2FlBeFsOlhjdDBJlPO8mmVf4YIm0JhUbLeZjTyzfItWIBrr3u%2BxLOyYLp0jMJnHfUED07nMgdJewEPUfQmXsFAbv%2Fi3q6AKtFQqUBMqmusGJlaegS9rxhvogswGzF%2Br%2Bt4bKm1bqvOrshaLqNNTycXYR5lYOrq7OLRQSsoIDuKNFe36ALVuHElkvv%2FQdfq20ibH3TC6lvTYVPdPIP6PAepHepibQOSM5Ev9WKg%2BOQB64K%2B10KqtVM8QigYQHYpnCk4T%2FxRTGoWRvJdU%2Btgt34X23ijGfKWk3x7GmM7z5gVcNIrKWW4NGu39%2BDPqqlYKiCJO1dNyQt2PMICSznPTmlxrGAzneKyqaFVCbU9uWmUbMfjhpsYHYwWCe0HpIj9E0Dr0GtKuH4D12mXiinjLTxn%2BlfJkodErMJnZsMIGOqUBBTLKUnNhzNhw8dUZQMNj6DBJ8O%2FLJr%2FZwF8O9GbgPr3XXnWztZkTuh2gz9WDF2ZPO4sCd8eMvySHxEcLIK64QO8eWWe7ahoQ8H8KvVsRklVYSxNj%2FCSMASvG9oEwfL2llb9sqIW8XbN23UFRpl82pZNZ5UltfX4PvUoJBy39yof%2FBgn326gZXTRyI3UKyV1RTUGc4Co5fJfmV%2BIrzGKafVoPPvF9&X-Amz-Signature=75c07e045b12be57ea30168b590028f8cc06716b83199eed5a71b614c4dd2a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4EKF32%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDvjcXlfwt9uGbBhV04y8b%2F%2F6jGmXEtNvnUwGR%2B%2BXV52AIgCks7gKy7HV%2FTDN8GbhgbZKZffGRW5IJoIAZat1wUOkIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDB0GJrfawfvKsSKB4ircA0Y5MA10C8KBSG%2BAfRlGE5zX2M%2BVfSslVVMxyg93OZEIuIWwlF9XghSSUVDrcLWG0CQ5wA94PtnLQUK1Deyaj6M162Mg1pjnm8%2BjE0pkGMSjoIdZe9LaNy3UFnE3kbmjmMiu%2BjrHIoDeqqWwUtIsUky0Nfgoq9ljEzmyihoGf36l4J0eVmRV1Jj0Ip%2BYLJ7%2F069JkHocBv3ksasAJIBcgnPj7%2BxN6a%2FlBeFsOlhjdDBJlPO8mmVf4YIm0JhUbLeZjTyzfItWIBrr3u%2BxLOyYLp0jMJnHfUED07nMgdJewEPUfQmXsFAbv%2Fi3q6AKtFQqUBMqmusGJlaegS9rxhvogswGzF%2Br%2Bt4bKm1bqvOrshaLqNNTycXYR5lYOrq7OLRQSsoIDuKNFe36ALVuHElkvv%2FQdfq20ibH3TC6lvTYVPdPIP6PAepHepibQOSM5Ev9WKg%2BOQB64K%2B10KqtVM8QigYQHYpnCk4T%2FxRTGoWRvJdU%2Btgt34X23ijGfKWk3x7GmM7z5gVcNIrKWW4NGu39%2BDPqqlYKiCJO1dNyQt2PMICSznPTmlxrGAzneKyqaFVCbU9uWmUbMfjhpsYHYwWCe0HpIj9E0Dr0GtKuH4D12mXiinjLTxn%2BlfJkodErMJnZsMIGOqUBBTLKUnNhzNhw8dUZQMNj6DBJ8O%2FLJr%2FZwF8O9GbgPr3XXnWztZkTuh2gz9WDF2ZPO4sCd8eMvySHxEcLIK64QO8eWWe7ahoQ8H8KvVsRklVYSxNj%2FCSMASvG9oEwfL2llb9sqIW8XbN23UFRpl82pZNZ5UltfX4PvUoJBy39yof%2FBgn326gZXTRyI3UKyV1RTUGc4Co5fJfmV%2BIrzGKafVoPPvF9&X-Amz-Signature=4efe2c63e9b4458967c31cf36dabc8775d54a60f54bd99db3144469db56d4fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4EKF32%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDvjcXlfwt9uGbBhV04y8b%2F%2F6jGmXEtNvnUwGR%2B%2BXV52AIgCks7gKy7HV%2FTDN8GbhgbZKZffGRW5IJoIAZat1wUOkIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDB0GJrfawfvKsSKB4ircA0Y5MA10C8KBSG%2BAfRlGE5zX2M%2BVfSslVVMxyg93OZEIuIWwlF9XghSSUVDrcLWG0CQ5wA94PtnLQUK1Deyaj6M162Mg1pjnm8%2BjE0pkGMSjoIdZe9LaNy3UFnE3kbmjmMiu%2BjrHIoDeqqWwUtIsUky0Nfgoq9ljEzmyihoGf36l4J0eVmRV1Jj0Ip%2BYLJ7%2F069JkHocBv3ksasAJIBcgnPj7%2BxN6a%2FlBeFsOlhjdDBJlPO8mmVf4YIm0JhUbLeZjTyzfItWIBrr3u%2BxLOyYLp0jMJnHfUED07nMgdJewEPUfQmXsFAbv%2Fi3q6AKtFQqUBMqmusGJlaegS9rxhvogswGzF%2Br%2Bt4bKm1bqvOrshaLqNNTycXYR5lYOrq7OLRQSsoIDuKNFe36ALVuHElkvv%2FQdfq20ibH3TC6lvTYVPdPIP6PAepHepibQOSM5Ev9WKg%2BOQB64K%2B10KqtVM8QigYQHYpnCk4T%2FxRTGoWRvJdU%2Btgt34X23ijGfKWk3x7GmM7z5gVcNIrKWW4NGu39%2BDPqqlYKiCJO1dNyQt2PMICSznPTmlxrGAzneKyqaFVCbU9uWmUbMfjhpsYHYwWCe0HpIj9E0Dr0GtKuH4D12mXiinjLTxn%2BlfJkodErMJnZsMIGOqUBBTLKUnNhzNhw8dUZQMNj6DBJ8O%2FLJr%2FZwF8O9GbgPr3XXnWztZkTuh2gz9WDF2ZPO4sCd8eMvySHxEcLIK64QO8eWWe7ahoQ8H8KvVsRklVYSxNj%2FCSMASvG9oEwfL2llb9sqIW8XbN23UFRpl82pZNZ5UltfX4PvUoJBy39yof%2FBgn326gZXTRyI3UKyV1RTUGc4Co5fJfmV%2BIrzGKafVoPPvF9&X-Amz-Signature=c4205463eb0ef05680eb5554994cc0608cc8bc52391f9cb7889cb9d3c9afa7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
