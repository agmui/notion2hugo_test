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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REKEIG6Q%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCP765wPmoEFQGJbf0raJGUIrv1Ns0p2KZnV%2BmdZjJ0ywIhAJ1wiYwUENHtevRTtheh4MzMTW9Ef%2BdgzEESXliLLXBzKv8DCEYQABoMNjM3NDIzMTgzODA1IgzQ85Q0Z3I3iMSeB8oq3AOChq%2FxaOCAsaRb0wxfTMRw0RIZhXBSqKiPiywytiRyFLsOiRrRHGd6zk5Sy60x5Wm%2FFHoPKPIa726noEINuQVClUye4aO%2F3bldsAxoLq4zXy%2Bx7MJK%2FPtbqpFJNctQ0TooHcF8JZuhMWvHc%2BUliBbAdTE8A4oRj%2BLAcP5u41VqszrVrFRjTSIi56S5cnqrJYzRtphqacheSimHqlBLU85ASpyW5s56Jx44d3KpiSoFtVt4g2nHY6%2BIs%2BZfHncn3jodKSLeHAUZwhnvPKHAmwZTEfM16S5a4foXsvNNHF6y46gRT06XnK%2FKe0GrQ37RUx7MtiyE3v75YcvfzpoVUtiG3G%2B5%2BVRLePb1FBKUk7WemITIPfzYIoB5fu%2B8OHAfuy321c%2FstTxIWlEJYeZGSBp8zbMJTP2Q50dthxcTFWmiK4alplmK1adWDrZaQxY0EYoZpCFGdvlJbbI4flXAbpwgsLz6yeiq4%2BA%2BGhXLWDZh5VXg4fm5sOlt8uMEfyDRukZsx6rGs3zBL4gV4tk02MDJzlWJg2%2BsslKOiq8gdnTPvilTrOH9e%2FJ8%2BPRVaTi3H%2BMDnR5mb741z3fvHapOcdjWJaNEKY5YED2bMErqWkFacFplgWXeRblNFOzflzCvh7vCBjqkAc3D6pfNMkthc6HbZt5jZqJ5kzkMx1XWqKEvfur7VNtc1pHe6fgeG%2FoSSZxaT7LG9K5u%2B%2FAVPoRugg1U9faJDLGWSpZfoCEw5L7plGDEvbfoQATHWBe%2BBwGawSA%2B%2B8xLPv7EchemMcXo736YS6ob31Z2is4LWxdiMZ5NLa0wEeyFHiz8e3b2bIt6LrZkThHVf3JqJHK%2Bhkb5mk3NnwmagCCiXQdA&X-Amz-Signature=20affed4ed69945bded14395eaad51c01cbd097cb92a88f7e5bef228a9035f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REKEIG6Q%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCP765wPmoEFQGJbf0raJGUIrv1Ns0p2KZnV%2BmdZjJ0ywIhAJ1wiYwUENHtevRTtheh4MzMTW9Ef%2BdgzEESXliLLXBzKv8DCEYQABoMNjM3NDIzMTgzODA1IgzQ85Q0Z3I3iMSeB8oq3AOChq%2FxaOCAsaRb0wxfTMRw0RIZhXBSqKiPiywytiRyFLsOiRrRHGd6zk5Sy60x5Wm%2FFHoPKPIa726noEINuQVClUye4aO%2F3bldsAxoLq4zXy%2Bx7MJK%2FPtbqpFJNctQ0TooHcF8JZuhMWvHc%2BUliBbAdTE8A4oRj%2BLAcP5u41VqszrVrFRjTSIi56S5cnqrJYzRtphqacheSimHqlBLU85ASpyW5s56Jx44d3KpiSoFtVt4g2nHY6%2BIs%2BZfHncn3jodKSLeHAUZwhnvPKHAmwZTEfM16S5a4foXsvNNHF6y46gRT06XnK%2FKe0GrQ37RUx7MtiyE3v75YcvfzpoVUtiG3G%2B5%2BVRLePb1FBKUk7WemITIPfzYIoB5fu%2B8OHAfuy321c%2FstTxIWlEJYeZGSBp8zbMJTP2Q50dthxcTFWmiK4alplmK1adWDrZaQxY0EYoZpCFGdvlJbbI4flXAbpwgsLz6yeiq4%2BA%2BGhXLWDZh5VXg4fm5sOlt8uMEfyDRukZsx6rGs3zBL4gV4tk02MDJzlWJg2%2BsslKOiq8gdnTPvilTrOH9e%2FJ8%2BPRVaTi3H%2BMDnR5mb741z3fvHapOcdjWJaNEKY5YED2bMErqWkFacFplgWXeRblNFOzflzCvh7vCBjqkAc3D6pfNMkthc6HbZt5jZqJ5kzkMx1XWqKEvfur7VNtc1pHe6fgeG%2FoSSZxaT7LG9K5u%2B%2FAVPoRugg1U9faJDLGWSpZfoCEw5L7plGDEvbfoQATHWBe%2BBwGawSA%2B%2B8xLPv7EchemMcXo736YS6ob31Z2is4LWxdiMZ5NLa0wEeyFHiz8e3b2bIt6LrZkThHVf3JqJHK%2Bhkb5mk3NnwmagCCiXQdA&X-Amz-Signature=aaa3932a258af4d28d603480564f372feeef4ab49ceb4808e0f97545c79c4b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REKEIG6Q%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCP765wPmoEFQGJbf0raJGUIrv1Ns0p2KZnV%2BmdZjJ0ywIhAJ1wiYwUENHtevRTtheh4MzMTW9Ef%2BdgzEESXliLLXBzKv8DCEYQABoMNjM3NDIzMTgzODA1IgzQ85Q0Z3I3iMSeB8oq3AOChq%2FxaOCAsaRb0wxfTMRw0RIZhXBSqKiPiywytiRyFLsOiRrRHGd6zk5Sy60x5Wm%2FFHoPKPIa726noEINuQVClUye4aO%2F3bldsAxoLq4zXy%2Bx7MJK%2FPtbqpFJNctQ0TooHcF8JZuhMWvHc%2BUliBbAdTE8A4oRj%2BLAcP5u41VqszrVrFRjTSIi56S5cnqrJYzRtphqacheSimHqlBLU85ASpyW5s56Jx44d3KpiSoFtVt4g2nHY6%2BIs%2BZfHncn3jodKSLeHAUZwhnvPKHAmwZTEfM16S5a4foXsvNNHF6y46gRT06XnK%2FKe0GrQ37RUx7MtiyE3v75YcvfzpoVUtiG3G%2B5%2BVRLePb1FBKUk7WemITIPfzYIoB5fu%2B8OHAfuy321c%2FstTxIWlEJYeZGSBp8zbMJTP2Q50dthxcTFWmiK4alplmK1adWDrZaQxY0EYoZpCFGdvlJbbI4flXAbpwgsLz6yeiq4%2BA%2BGhXLWDZh5VXg4fm5sOlt8uMEfyDRukZsx6rGs3zBL4gV4tk02MDJzlWJg2%2BsslKOiq8gdnTPvilTrOH9e%2FJ8%2BPRVaTi3H%2BMDnR5mb741z3fvHapOcdjWJaNEKY5YED2bMErqWkFacFplgWXeRblNFOzflzCvh7vCBjqkAc3D6pfNMkthc6HbZt5jZqJ5kzkMx1XWqKEvfur7VNtc1pHe6fgeG%2FoSSZxaT7LG9K5u%2B%2FAVPoRugg1U9faJDLGWSpZfoCEw5L7plGDEvbfoQATHWBe%2BBwGawSA%2B%2B8xLPv7EchemMcXo736YS6ob31Z2is4LWxdiMZ5NLa0wEeyFHiz8e3b2bIt6LrZkThHVf3JqJHK%2Bhkb5mk3NnwmagCCiXQdA&X-Amz-Signature=0eabc34df3a23db0c1d2eee59e5f7b0cd016e2e28ba3852ee78a496926b29d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
