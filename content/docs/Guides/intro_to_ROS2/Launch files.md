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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN54BCM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8l4cfj6LCQuiyjgJPuCI8iMwDBlfoGHf2UulNb%2BhOUwIhALYvdFV5jtyyIvcJ1WqlP8pqtx170dPaKnH10Np4vhlrKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY1kP0K23RhtsCd1Iq3AOwiY1zON9IAYpOjeNc81hrlJ3OgkB5IximYLclvbpEbPoEXa8buXBfhMDUwKEuoSNyjM7hEmO1SjZs3cZSCDo%2BP%2Bnu2FvnjgL1oZPjja3rzoyHXVJv9fSrFtpvetClMuOFj5MYxW1b%2BgM6lzyiudYnkD2A9Qh5sOzrORmHCVNazFFa4yxCt0U8UQ77HB3xv0u8pkg0wiUtdqX49U8qqj3Owt%2B44daL8Rh02WGoEqcYVmIQUK7pf2xHm%2BnKtTxQaBSrACA157bZZButknaqstt7irkJKyS9PybRvDy%2BlfrPiHoTNG8PzDoQN5Y4aRA91E6a2GSbJGdXoW9CqkQLZHr%2B%2FZsjrnSlZhZa1ziG2S0zEhIkLSO3aEVrLRKGgaDm1%2B16FirrBFtZZi2614a0CFGknfxAhycjdkaiuoBoMiHz5Y8hJklVJfIls50hfoYOo1QmfVP%2B8DBGsF5JYeEWNJWqUzXrHQFjJjHbA1hTl77FF4bKyw0%2B7P%2B%2Fuwpp6r9urz8PuPBUZoe5uV1M8y4LUuxANevQojTnUtRkm4B%2F0T2wiwIyqOp2S2lerFqZte%2FQ4jab2qoIBCZBwQ3F0B3HFyfvnZXfzkSRZ5Dv7ycBP3wlEzil7a7GFbMahqOV2jC8lMTABjqkASKyEkZGmKCr6GskdSb451OwnG%2B2o99vmItWHEOqAxjUEJUOkOyRr2L5pKyRKEezUW5h9XJXQfTjSQf9RtgNhCHwrIakNm2LUczUFSLwnqGqeiXQ06qGgDCCijWp56v0zd9rJ4rUVmXQrZQYn1Uqc71WJRsFAk7h2LJ8eUL3obBs9T%2FfuJnbhIovf%2BvHdxIsfxMfCnuqC8VS6MBE2wQQJ1gF0QN2&X-Amz-Signature=5ee565bec64ac471aea488e66377db6eaa2dbfcbfa5149ef0721a93273b7a689&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN54BCM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8l4cfj6LCQuiyjgJPuCI8iMwDBlfoGHf2UulNb%2BhOUwIhALYvdFV5jtyyIvcJ1WqlP8pqtx170dPaKnH10Np4vhlrKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY1kP0K23RhtsCd1Iq3AOwiY1zON9IAYpOjeNc81hrlJ3OgkB5IximYLclvbpEbPoEXa8buXBfhMDUwKEuoSNyjM7hEmO1SjZs3cZSCDo%2BP%2Bnu2FvnjgL1oZPjja3rzoyHXVJv9fSrFtpvetClMuOFj5MYxW1b%2BgM6lzyiudYnkD2A9Qh5sOzrORmHCVNazFFa4yxCt0U8UQ77HB3xv0u8pkg0wiUtdqX49U8qqj3Owt%2B44daL8Rh02WGoEqcYVmIQUK7pf2xHm%2BnKtTxQaBSrACA157bZZButknaqstt7irkJKyS9PybRvDy%2BlfrPiHoTNG8PzDoQN5Y4aRA91E6a2GSbJGdXoW9CqkQLZHr%2B%2FZsjrnSlZhZa1ziG2S0zEhIkLSO3aEVrLRKGgaDm1%2B16FirrBFtZZi2614a0CFGknfxAhycjdkaiuoBoMiHz5Y8hJklVJfIls50hfoYOo1QmfVP%2B8DBGsF5JYeEWNJWqUzXrHQFjJjHbA1hTl77FF4bKyw0%2B7P%2B%2Fuwpp6r9urz8PuPBUZoe5uV1M8y4LUuxANevQojTnUtRkm4B%2F0T2wiwIyqOp2S2lerFqZte%2FQ4jab2qoIBCZBwQ3F0B3HFyfvnZXfzkSRZ5Dv7ycBP3wlEzil7a7GFbMahqOV2jC8lMTABjqkASKyEkZGmKCr6GskdSb451OwnG%2B2o99vmItWHEOqAxjUEJUOkOyRr2L5pKyRKEezUW5h9XJXQfTjSQf9RtgNhCHwrIakNm2LUczUFSLwnqGqeiXQ06qGgDCCijWp56v0zd9rJ4rUVmXQrZQYn1Uqc71WJRsFAk7h2LJ8eUL3obBs9T%2FfuJnbhIovf%2BvHdxIsfxMfCnuqC8VS6MBE2wQQJ1gF0QN2&X-Amz-Signature=8318f7dc8b1a1d608f09b58e7ef124f49246508e243736a18353bdb23eba683c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GN54BCM%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8l4cfj6LCQuiyjgJPuCI8iMwDBlfoGHf2UulNb%2BhOUwIhALYvdFV5jtyyIvcJ1WqlP8pqtx170dPaKnH10Np4vhlrKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY1kP0K23RhtsCd1Iq3AOwiY1zON9IAYpOjeNc81hrlJ3OgkB5IximYLclvbpEbPoEXa8buXBfhMDUwKEuoSNyjM7hEmO1SjZs3cZSCDo%2BP%2Bnu2FvnjgL1oZPjja3rzoyHXVJv9fSrFtpvetClMuOFj5MYxW1b%2BgM6lzyiudYnkD2A9Qh5sOzrORmHCVNazFFa4yxCt0U8UQ77HB3xv0u8pkg0wiUtdqX49U8qqj3Owt%2B44daL8Rh02WGoEqcYVmIQUK7pf2xHm%2BnKtTxQaBSrACA157bZZButknaqstt7irkJKyS9PybRvDy%2BlfrPiHoTNG8PzDoQN5Y4aRA91E6a2GSbJGdXoW9CqkQLZHr%2B%2FZsjrnSlZhZa1ziG2S0zEhIkLSO3aEVrLRKGgaDm1%2B16FirrBFtZZi2614a0CFGknfxAhycjdkaiuoBoMiHz5Y8hJklVJfIls50hfoYOo1QmfVP%2B8DBGsF5JYeEWNJWqUzXrHQFjJjHbA1hTl77FF4bKyw0%2B7P%2B%2Fuwpp6r9urz8PuPBUZoe5uV1M8y4LUuxANevQojTnUtRkm4B%2F0T2wiwIyqOp2S2lerFqZte%2FQ4jab2qoIBCZBwQ3F0B3HFyfvnZXfzkSRZ5Dv7ycBP3wlEzil7a7GFbMahqOV2jC8lMTABjqkASKyEkZGmKCr6GskdSb451OwnG%2B2o99vmItWHEOqAxjUEJUOkOyRr2L5pKyRKEezUW5h9XJXQfTjSQf9RtgNhCHwrIakNm2LUczUFSLwnqGqeiXQ06qGgDCCijWp56v0zd9rJ4rUVmXQrZQYn1Uqc71WJRsFAk7h2LJ8eUL3obBs9T%2FfuJnbhIovf%2BvHdxIsfxMfCnuqC8VS6MBE2wQQJ1gF0QN2&X-Amz-Signature=e57d1f9e05a65e28a89431e4da6f9c5aaf9895c438a79dd9dbe7bde1627a602d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
