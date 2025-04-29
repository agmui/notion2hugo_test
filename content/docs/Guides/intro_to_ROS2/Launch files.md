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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOPIVPD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDTO2cPfoXeKaZ9dZPswy9OdsuW0b7Y9kI7RNL%2F9KOoQIgHGOjEZyTNQDONRxcg0v6DjV5uzULHU%2FfJDV2qRyi%2BiAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbB%2Baqt%2FRQ8T9muLyrcA416th0Ky%2FK%2BfIjMh0PKDF9tywIAqeOOdw37FryDwY62%2FAiOzJk25nvh%2B8JCxkZYUGGa7SgLqSPW4CN%2FYYhZqt6twWIrk9fCtgt%2FSzkkXl4uABZi1BuRWAWGINaWaBfVQhkb5vDyhC8JUAwvcdGWW9%2BuMrcJgHNzEwulwnq1DwvzYBKxhr45zUOuXObyJ5wdrNtuLw0CAHLGCEVQuDv23xBpdKgSNyXjH6zP38ZJWlzwtn3jNe7ZsaMPRa1DwkZrem3mieHK4n7RklSGT%2F8jxzE1Dv0LOjZ6VlGiCJovEdzJFiSlTkc8S4VkI1sxViuhPQziy3Bf1PAgiy2AU%2FAvB6tCt6Zl533qAACh%2BJR1e0H%2BeykiH%2Fm8umgNU5EbWTRya%2BanK5FjKHHHDx%2FogowqveAmUbyfVZTD1Crg9%2FcTa6gh51v5WHuM4RQc4xkoyFw1mttjvMMGh%2F0hhwCQZgz3weZWEskXLcl%2BSNMWEIBTsS7n0z4FqKkSL2U9y0dDt2H%2BEOKuKvxVC9p4PZrduZKB1HPavFAWR8HcS%2BLRUHMUzErcHJ9m0LTuTnnd%2Bbe7dZr1UlXMGK7%2FLiJRvmhDNT54GR0wjHzo%2Bs97cfLae0k4sDlZ0AQ5B%2FNGHgg%2B9IX9MKmixcAGOqUB2U83hAw2wWgReCZn7fMbdyCcZY%2F7BnNeK5Y%2F4ZSxw4ALXbzLrUDb61pKPFxug71WXCDmlAWRn535BI7IHaneKELA%2BW25uc5S5ZwPB2x10OChfmDt4B20vWHz0%2FsbEubalObbHoZ9Tj4bl8NSEEb1ajBbB4r6Ju4CuS4yvrUwJ8vcCMAL5X1P8BQ%2FQRDscQdb5Njdw0EygcLIxqpRu9KohUZL3kXc&X-Amz-Signature=13f7dcdb12d6dc20ec50fd9e59438927319a875b7889e397c98322f3832ed916&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOPIVPD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDTO2cPfoXeKaZ9dZPswy9OdsuW0b7Y9kI7RNL%2F9KOoQIgHGOjEZyTNQDONRxcg0v6DjV5uzULHU%2FfJDV2qRyi%2BiAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbB%2Baqt%2FRQ8T9muLyrcA416th0Ky%2FK%2BfIjMh0PKDF9tywIAqeOOdw37FryDwY62%2FAiOzJk25nvh%2B8JCxkZYUGGa7SgLqSPW4CN%2FYYhZqt6twWIrk9fCtgt%2FSzkkXl4uABZi1BuRWAWGINaWaBfVQhkb5vDyhC8JUAwvcdGWW9%2BuMrcJgHNzEwulwnq1DwvzYBKxhr45zUOuXObyJ5wdrNtuLw0CAHLGCEVQuDv23xBpdKgSNyXjH6zP38ZJWlzwtn3jNe7ZsaMPRa1DwkZrem3mieHK4n7RklSGT%2F8jxzE1Dv0LOjZ6VlGiCJovEdzJFiSlTkc8S4VkI1sxViuhPQziy3Bf1PAgiy2AU%2FAvB6tCt6Zl533qAACh%2BJR1e0H%2BeykiH%2Fm8umgNU5EbWTRya%2BanK5FjKHHHDx%2FogowqveAmUbyfVZTD1Crg9%2FcTa6gh51v5WHuM4RQc4xkoyFw1mttjvMMGh%2F0hhwCQZgz3weZWEskXLcl%2BSNMWEIBTsS7n0z4FqKkSL2U9y0dDt2H%2BEOKuKvxVC9p4PZrduZKB1HPavFAWR8HcS%2BLRUHMUzErcHJ9m0LTuTnnd%2Bbe7dZr1UlXMGK7%2FLiJRvmhDNT54GR0wjHzo%2Bs97cfLae0k4sDlZ0AQ5B%2FNGHgg%2B9IX9MKmixcAGOqUB2U83hAw2wWgReCZn7fMbdyCcZY%2F7BnNeK5Y%2F4ZSxw4ALXbzLrUDb61pKPFxug71WXCDmlAWRn535BI7IHaneKELA%2BW25uc5S5ZwPB2x10OChfmDt4B20vWHz0%2FsbEubalObbHoZ9Tj4bl8NSEEb1ajBbB4r6Ju4CuS4yvrUwJ8vcCMAL5X1P8BQ%2FQRDscQdb5Njdw0EygcLIxqpRu9KohUZL3kXc&X-Amz-Signature=a9928ad81a5baa6f4ce7881ebae2bc9cf8832c4d901b4c460a9f37fc861be933&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOPIVPD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDTO2cPfoXeKaZ9dZPswy9OdsuW0b7Y9kI7RNL%2F9KOoQIgHGOjEZyTNQDONRxcg0v6DjV5uzULHU%2FfJDV2qRyi%2BiAqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbB%2Baqt%2FRQ8T9muLyrcA416th0Ky%2FK%2BfIjMh0PKDF9tywIAqeOOdw37FryDwY62%2FAiOzJk25nvh%2B8JCxkZYUGGa7SgLqSPW4CN%2FYYhZqt6twWIrk9fCtgt%2FSzkkXl4uABZi1BuRWAWGINaWaBfVQhkb5vDyhC8JUAwvcdGWW9%2BuMrcJgHNzEwulwnq1DwvzYBKxhr45zUOuXObyJ5wdrNtuLw0CAHLGCEVQuDv23xBpdKgSNyXjH6zP38ZJWlzwtn3jNe7ZsaMPRa1DwkZrem3mieHK4n7RklSGT%2F8jxzE1Dv0LOjZ6VlGiCJovEdzJFiSlTkc8S4VkI1sxViuhPQziy3Bf1PAgiy2AU%2FAvB6tCt6Zl533qAACh%2BJR1e0H%2BeykiH%2Fm8umgNU5EbWTRya%2BanK5FjKHHHDx%2FogowqveAmUbyfVZTD1Crg9%2FcTa6gh51v5WHuM4RQc4xkoyFw1mttjvMMGh%2F0hhwCQZgz3weZWEskXLcl%2BSNMWEIBTsS7n0z4FqKkSL2U9y0dDt2H%2BEOKuKvxVC9p4PZrduZKB1HPavFAWR8HcS%2BLRUHMUzErcHJ9m0LTuTnnd%2Bbe7dZr1UlXMGK7%2FLiJRvmhDNT54GR0wjHzo%2Bs97cfLae0k4sDlZ0AQ5B%2FNGHgg%2B9IX9MKmixcAGOqUB2U83hAw2wWgReCZn7fMbdyCcZY%2F7BnNeK5Y%2F4ZSxw4ALXbzLrUDb61pKPFxug71WXCDmlAWRn535BI7IHaneKELA%2BW25uc5S5ZwPB2x10OChfmDt4B20vWHz0%2FsbEubalObbHoZ9Tj4bl8NSEEb1ajBbB4r6Ju4CuS4yvrUwJ8vcCMAL5X1P8BQ%2FQRDscQdb5Njdw0EygcLIxqpRu9KohUZL3kXc&X-Amz-Signature=dbb10a63f2a4d7a05ba2d8d67ec47809b044af5b50b5c05cbb173ecb7d2523a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
