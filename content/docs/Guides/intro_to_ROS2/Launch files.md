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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NWNFPUE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqSzp%2FUGM3LJm1DQb%2BOrgyH2if830HdA50dsq%2Bf%2B3igQIhANr%2BghW5r7%2Fkhb1llCEbjSaRZwtRVDRZD5E9375%2BnXLuKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKXYumX%2Bxbg2c5cpYq3APvY1S%2BPPbCa8DYldPrMwYF8c3A%2BmxKKQFmJBnQxocK8FEsI0LnFzdWCITZ33Z6Rtp6pwrtuRH8f64kHkb1lHHWL89B2hvxcGjq5JQBPhhwhX11GzAFD7ew63DnSJTY1yteK8H244aIwDUh2DDFJ7oUH%2B%2BZmngrReHNCiuumpQmBMx7jWooCK3FI7iKqovCaZ6gbj%2BgsdAlgZDNmVsrcqYyZ5jyKHlMqn2xsbIbyo%2BE8Gl4oeUasoU1BTNIhJoLQ%2BOj9TsZS%2B4ieFgy99gim4xU4zFedsdXnkRckPEOP7xvMd9V770vjZI72%2BGi5JhEhPJmWc%2F37CrBhJ4wVTqLnM4QkAl2e3UFBb9uEnpkAGp6zmS4GWug2ZZfeVbtHmruJcopvkYUzDoxzoFyxrFTG8re53wKzQ0DpU%2FkOWdMP8RVWuXru3Y1HNa21aw4if90BJyywau1AS8SXM69cM3nCtjAW56S8rdZbVGgtqNhOfUJFH9zyjJcTo4%2Bdt8xQAuAaskMmuYyjZLRsYZFtBxCDckOhQuexoiJK6gmif1bjb5Lq1SxzT0JWV6Apnqcq%2F%2Fl7xBCGhSmy2DhpudL%2FNwRn387Cp7aR%2F%2BDtZ03el3Z%2BIBHdZlFMLxgZ8hrx6Jp1zCJ3uTBBjqkAbeg3q4ZICqUwFsy6xf4Dv4QpnB5dc5XQthUZSoSgbPR%2Ff%2ButhHiGoh0KHcDiVe3t%2BlMys9S9U7LPGmpEen5kM1lVHdsIJH2jPy97%2FpyMOlQjQ4I0q75goiYq5NGyLcNZUnTdEhWr6Ivqhc2jsBudV1V9QjlevO0O84uqIOk3R8lZ6vvp6h3kxBPOsrKpGBSeqV3PxMJDyv09OtFJ2mvWWu9r7Yc&X-Amz-Signature=40f9a2d46edfe0d74e6aae56225f2b1f2815cd63a51464c850aa6f8bc03af8c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NWNFPUE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqSzp%2FUGM3LJm1DQb%2BOrgyH2if830HdA50dsq%2Bf%2B3igQIhANr%2BghW5r7%2Fkhb1llCEbjSaRZwtRVDRZD5E9375%2BnXLuKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKXYumX%2Bxbg2c5cpYq3APvY1S%2BPPbCa8DYldPrMwYF8c3A%2BmxKKQFmJBnQxocK8FEsI0LnFzdWCITZ33Z6Rtp6pwrtuRH8f64kHkb1lHHWL89B2hvxcGjq5JQBPhhwhX11GzAFD7ew63DnSJTY1yteK8H244aIwDUh2DDFJ7oUH%2B%2BZmngrReHNCiuumpQmBMx7jWooCK3FI7iKqovCaZ6gbj%2BgsdAlgZDNmVsrcqYyZ5jyKHlMqn2xsbIbyo%2BE8Gl4oeUasoU1BTNIhJoLQ%2BOj9TsZS%2B4ieFgy99gim4xU4zFedsdXnkRckPEOP7xvMd9V770vjZI72%2BGi5JhEhPJmWc%2F37CrBhJ4wVTqLnM4QkAl2e3UFBb9uEnpkAGp6zmS4GWug2ZZfeVbtHmruJcopvkYUzDoxzoFyxrFTG8re53wKzQ0DpU%2FkOWdMP8RVWuXru3Y1HNa21aw4if90BJyywau1AS8SXM69cM3nCtjAW56S8rdZbVGgtqNhOfUJFH9zyjJcTo4%2Bdt8xQAuAaskMmuYyjZLRsYZFtBxCDckOhQuexoiJK6gmif1bjb5Lq1SxzT0JWV6Apnqcq%2F%2Fl7xBCGhSmy2DhpudL%2FNwRn387Cp7aR%2F%2BDtZ03el3Z%2BIBHdZlFMLxgZ8hrx6Jp1zCJ3uTBBjqkAbeg3q4ZICqUwFsy6xf4Dv4QpnB5dc5XQthUZSoSgbPR%2Ff%2ButhHiGoh0KHcDiVe3t%2BlMys9S9U7LPGmpEen5kM1lVHdsIJH2jPy97%2FpyMOlQjQ4I0q75goiYq5NGyLcNZUnTdEhWr6Ivqhc2jsBudV1V9QjlevO0O84uqIOk3R8lZ6vvp6h3kxBPOsrKpGBSeqV3PxMJDyv09OtFJ2mvWWu9r7Yc&X-Amz-Signature=d1477c128a3d136cfb5b90bdc0fe6baa692eee3f684ef9f86798dd56939540a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NWNFPUE%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T050955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqSzp%2FUGM3LJm1DQb%2BOrgyH2if830HdA50dsq%2Bf%2B3igQIhANr%2BghW5r7%2Fkhb1llCEbjSaRZwtRVDRZD5E9375%2BnXLuKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKXYumX%2Bxbg2c5cpYq3APvY1S%2BPPbCa8DYldPrMwYF8c3A%2BmxKKQFmJBnQxocK8FEsI0LnFzdWCITZ33Z6Rtp6pwrtuRH8f64kHkb1lHHWL89B2hvxcGjq5JQBPhhwhX11GzAFD7ew63DnSJTY1yteK8H244aIwDUh2DDFJ7oUH%2B%2BZmngrReHNCiuumpQmBMx7jWooCK3FI7iKqovCaZ6gbj%2BgsdAlgZDNmVsrcqYyZ5jyKHlMqn2xsbIbyo%2BE8Gl4oeUasoU1BTNIhJoLQ%2BOj9TsZS%2B4ieFgy99gim4xU4zFedsdXnkRckPEOP7xvMd9V770vjZI72%2BGi5JhEhPJmWc%2F37CrBhJ4wVTqLnM4QkAl2e3UFBb9uEnpkAGp6zmS4GWug2ZZfeVbtHmruJcopvkYUzDoxzoFyxrFTG8re53wKzQ0DpU%2FkOWdMP8RVWuXru3Y1HNa21aw4if90BJyywau1AS8SXM69cM3nCtjAW56S8rdZbVGgtqNhOfUJFH9zyjJcTo4%2Bdt8xQAuAaskMmuYyjZLRsYZFtBxCDckOhQuexoiJK6gmif1bjb5Lq1SxzT0JWV6Apnqcq%2F%2Fl7xBCGhSmy2DhpudL%2FNwRn387Cp7aR%2F%2BDtZ03el3Z%2BIBHdZlFMLxgZ8hrx6Jp1zCJ3uTBBjqkAbeg3q4ZICqUwFsy6xf4Dv4QpnB5dc5XQthUZSoSgbPR%2Ff%2ButhHiGoh0KHcDiVe3t%2BlMys9S9U7LPGmpEen5kM1lVHdsIJH2jPy97%2FpyMOlQjQ4I0q75goiYq5NGyLcNZUnTdEhWr6Ivqhc2jsBudV1V9QjlevO0O84uqIOk3R8lZ6vvp6h3kxBPOsrKpGBSeqV3PxMJDyv09OtFJ2mvWWu9r7Yc&X-Amz-Signature=c85bb983adb5809b1180eee092ae6ccfe5b527549555fc478c11904b9a600d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
