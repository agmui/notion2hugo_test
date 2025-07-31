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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLJGH45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLT9gwKrJ6LtJc44WYqoqATkgYtd9QxJaunFMVNDXtfAIhAN8F4FtdVKhAdiHdNmzMMk40qAn2vRnKG%2FJr9Ibx7%2FHVKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFC421Pq1EGZzHpxoq3APcFjPVxD9NQji25R336%2FbK0Q8M0K5kfTvbUX%2FrgVPN6Y5ITm1XUV1tpqkWdZJZT%2FQLWCGTKthq9z8Ol3B4qiBZIbXMeSkTE1eirmkTjz9iH%2BfOXr2V55EVo6Y72xpNWV3PVUrD%2Byf%2BhUmNKET1T7NIoUZp1bNO3H%2BOWUVFhF6qUp%2BoBD2gJH2xwX7aGiFMoQ3496ndy0ZlsAa2P6i2fjhfZ9Gksev4Capt2aPPYXuIA5%2BNjFK5BBK397nXx%2FNyhenjLEAIAb%2BXCYYDl%2Fe9T1CZaVA85%2BCL%2BshEqUjw8KOkpDRP0gKp2e07zipZBoXI8DjVSVzV5wU%2B%2Bh%2BNIVHLiAlxdXqhPdojNP9FT8XovWanEn6U2PayZLGkdFi9WIqn4yzsedRK9DtNifWKcLUmJmzvPRBxvQjhjhj6AF%2B3b9HTKDQhHXRSAlBGkFAu5ZTgw1ujlxU5Y6yJpFN7VFI9xlH1t3yeCGIFLCIHvxqnGvEjqLnFCF7aGpb5RJUEOhRvwBe%2FYRYC3%2FkCj9BeofscZpk6c%2ByXFm52wdTvP8B04d4TMmYi2mTneGsge6Gev0AJK6GK7lcWM3IneHwvCmb2rhed9qfMXtufIZbsheLZGNcr%2FWrC49mqBZhPjUOXCDCTga%2FEBjqkAb5Ua0prduH2QAcc7pomp08QMAzRcL0be4EufjzxA5PN8SS8suhRvCleWdVizye0cHj0Epi2GJWVvMJPnWFSB4f8Kb0SGCdOGo52%2BTdee7TcMn4gLLk0%2Bo04lp42KEfOxBOpuCigZTNM4if80Jl%2BZ0AHuoZn84uWUMQoeYOXYmGXSL17BbNCMrXSGMjO%2FgHF7Zv2fw5lq7Qq8txdEIlYhShkonKo&X-Amz-Signature=c1c5911be33b4e9f0d5f3918ad9af311a283182120c3b4cfd52203adffae6e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLJGH45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLT9gwKrJ6LtJc44WYqoqATkgYtd9QxJaunFMVNDXtfAIhAN8F4FtdVKhAdiHdNmzMMk40qAn2vRnKG%2FJr9Ibx7%2FHVKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFC421Pq1EGZzHpxoq3APcFjPVxD9NQji25R336%2FbK0Q8M0K5kfTvbUX%2FrgVPN6Y5ITm1XUV1tpqkWdZJZT%2FQLWCGTKthq9z8Ol3B4qiBZIbXMeSkTE1eirmkTjz9iH%2BfOXr2V55EVo6Y72xpNWV3PVUrD%2Byf%2BhUmNKET1T7NIoUZp1bNO3H%2BOWUVFhF6qUp%2BoBD2gJH2xwX7aGiFMoQ3496ndy0ZlsAa2P6i2fjhfZ9Gksev4Capt2aPPYXuIA5%2BNjFK5BBK397nXx%2FNyhenjLEAIAb%2BXCYYDl%2Fe9T1CZaVA85%2BCL%2BshEqUjw8KOkpDRP0gKp2e07zipZBoXI8DjVSVzV5wU%2B%2Bh%2BNIVHLiAlxdXqhPdojNP9FT8XovWanEn6U2PayZLGkdFi9WIqn4yzsedRK9DtNifWKcLUmJmzvPRBxvQjhjhj6AF%2B3b9HTKDQhHXRSAlBGkFAu5ZTgw1ujlxU5Y6yJpFN7VFI9xlH1t3yeCGIFLCIHvxqnGvEjqLnFCF7aGpb5RJUEOhRvwBe%2FYRYC3%2FkCj9BeofscZpk6c%2ByXFm52wdTvP8B04d4TMmYi2mTneGsge6Gev0AJK6GK7lcWM3IneHwvCmb2rhed9qfMXtufIZbsheLZGNcr%2FWrC49mqBZhPjUOXCDCTga%2FEBjqkAb5Ua0prduH2QAcc7pomp08QMAzRcL0be4EufjzxA5PN8SS8suhRvCleWdVizye0cHj0Epi2GJWVvMJPnWFSB4f8Kb0SGCdOGo52%2BTdee7TcMn4gLLk0%2Bo04lp42KEfOxBOpuCigZTNM4if80Jl%2BZ0AHuoZn84uWUMQoeYOXYmGXSL17BbNCMrXSGMjO%2FgHF7Zv2fw5lq7Qq8txdEIlYhShkonKo&X-Amz-Signature=f48677a6c5b775ac899c5290686510e2b9579d454011c0487ca00d40b2d5870c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HLJGH45%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLT9gwKrJ6LtJc44WYqoqATkgYtd9QxJaunFMVNDXtfAIhAN8F4FtdVKhAdiHdNmzMMk40qAn2vRnKG%2FJr9Ibx7%2FHVKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFC421Pq1EGZzHpxoq3APcFjPVxD9NQji25R336%2FbK0Q8M0K5kfTvbUX%2FrgVPN6Y5ITm1XUV1tpqkWdZJZT%2FQLWCGTKthq9z8Ol3B4qiBZIbXMeSkTE1eirmkTjz9iH%2BfOXr2V55EVo6Y72xpNWV3PVUrD%2Byf%2BhUmNKET1T7NIoUZp1bNO3H%2BOWUVFhF6qUp%2BoBD2gJH2xwX7aGiFMoQ3496ndy0ZlsAa2P6i2fjhfZ9Gksev4Capt2aPPYXuIA5%2BNjFK5BBK397nXx%2FNyhenjLEAIAb%2BXCYYDl%2Fe9T1CZaVA85%2BCL%2BshEqUjw8KOkpDRP0gKp2e07zipZBoXI8DjVSVzV5wU%2B%2Bh%2BNIVHLiAlxdXqhPdojNP9FT8XovWanEn6U2PayZLGkdFi9WIqn4yzsedRK9DtNifWKcLUmJmzvPRBxvQjhjhj6AF%2B3b9HTKDQhHXRSAlBGkFAu5ZTgw1ujlxU5Y6yJpFN7VFI9xlH1t3yeCGIFLCIHvxqnGvEjqLnFCF7aGpb5RJUEOhRvwBe%2FYRYC3%2FkCj9BeofscZpk6c%2ByXFm52wdTvP8B04d4TMmYi2mTneGsge6Gev0AJK6GK7lcWM3IneHwvCmb2rhed9qfMXtufIZbsheLZGNcr%2FWrC49mqBZhPjUOXCDCTga%2FEBjqkAb5Ua0prduH2QAcc7pomp08QMAzRcL0be4EufjzxA5PN8SS8suhRvCleWdVizye0cHj0Epi2GJWVvMJPnWFSB4f8Kb0SGCdOGo52%2BTdee7TcMn4gLLk0%2Bo04lp42KEfOxBOpuCigZTNM4if80Jl%2BZ0AHuoZn84uWUMQoeYOXYmGXSL17BbNCMrXSGMjO%2FgHF7Zv2fw5lq7Qq8txdEIlYhShkonKo&X-Amz-Signature=fa682edb85717295ee5c1b1397914708072b9dc9628f368d855b46d688bc4001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
