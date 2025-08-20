---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFU76K5%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4AK30tMvWyPgfoL6N6oS4Yjs8qvPIr0J8%2FlwGHIcRhgIhAIS7ZV6AmwFDyvvgdzwGyl0rjIwtQo%2FoOe2xdHRh%2BQj9KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXKXaTP32pjPgm6%2B4q3AOjF5dAH%2Bl87MaJRTvyxu61Zn9fq60r4EVRkmT%2FCixPlRa%2Bpn2plMdhDkj5wXyllcQ5gkD4Sokuz7wM9wDqaD8%2By9MQFU3Tksfdceofj0r0pGCidCbeLpQSOSL3GuBdM8i1DRr8wvywtXjspgyf8eIkuEnVWhwZuecwJ5yQWAPthxVu1T2H5z2%2FaL1sKw50rH7KeCj3Q%2Fjmw1xCNYjU%2Bll3yUrIVW8W7uTC9rN9%2B2lV4jq91CWNvzj%2B387wlvdZoaShLmtsx85zK6fJiXr2zaH593lz21ck%2F3CYyJ0y2zICyoFlFF8qohs%2B7x9FIGicoXe1KGsfw%2FQaYx4ICTDnOGC2L4OYN%2BCni%2B6%2BcI%2FKPAp1U4OQ4U2jlC6XgQuTn2SZ3w94KgjsACkxQrjOwXMPA6pCDMvQlieqKHddX3n81L%2Bpc52pT1MX%2FykkDQzLjrEVans5W7rYljaPPquha6RQfhvmKMJso0QPFVcUiyVipNMRdIFr%2B553QA7cNPmRl3tBczwDVshNDJQXZB8bcBlyg2uPd3SYbx0I2oENTWc9ywgIpCwygFVt9y4HlpfVD9VNQzm78b3LfKRKrJhJJmc1nkEFQ%2F%2BvPEP34eVe6mAgjbZuY8nVniuHPSRTNYWGdTDh%2BZXFBjqkAdvYM9y8WiOUB9pA43lkMNazaaK9LMDD6qpxYcWEEyemesKhee2WxqAdvT%2ByCvDYx%2BXAyVXvL2cxileuzzdKn5h3iZbRZIt0mp7Pwg55q9dyqFAHWrT6WlC%2FVeAvApd50EfqTOGF6TjRV8eZk5f5ccRNpTmV%2BGBbtQQEjpdmkBhUWq%2F0m%2BlwjUoqBKPWgHP7RJf2l%2FowQ%2BIfxMLQ8byFY01cnksT&X-Amz-Signature=cba93ebb0a1ce3350aaaca31661d7c0b27e1f13a4f25cffa68c2f37e0793048e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFU76K5%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4AK30tMvWyPgfoL6N6oS4Yjs8qvPIr0J8%2FlwGHIcRhgIhAIS7ZV6AmwFDyvvgdzwGyl0rjIwtQo%2FoOe2xdHRh%2BQj9KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXKXaTP32pjPgm6%2B4q3AOjF5dAH%2Bl87MaJRTvyxu61Zn9fq60r4EVRkmT%2FCixPlRa%2Bpn2plMdhDkj5wXyllcQ5gkD4Sokuz7wM9wDqaD8%2By9MQFU3Tksfdceofj0r0pGCidCbeLpQSOSL3GuBdM8i1DRr8wvywtXjspgyf8eIkuEnVWhwZuecwJ5yQWAPthxVu1T2H5z2%2FaL1sKw50rH7KeCj3Q%2Fjmw1xCNYjU%2Bll3yUrIVW8W7uTC9rN9%2B2lV4jq91CWNvzj%2B387wlvdZoaShLmtsx85zK6fJiXr2zaH593lz21ck%2F3CYyJ0y2zICyoFlFF8qohs%2B7x9FIGicoXe1KGsfw%2FQaYx4ICTDnOGC2L4OYN%2BCni%2B6%2BcI%2FKPAp1U4OQ4U2jlC6XgQuTn2SZ3w94KgjsACkxQrjOwXMPA6pCDMvQlieqKHddX3n81L%2Bpc52pT1MX%2FykkDQzLjrEVans5W7rYljaPPquha6RQfhvmKMJso0QPFVcUiyVipNMRdIFr%2B553QA7cNPmRl3tBczwDVshNDJQXZB8bcBlyg2uPd3SYbx0I2oENTWc9ywgIpCwygFVt9y4HlpfVD9VNQzm78b3LfKRKrJhJJmc1nkEFQ%2F%2BvPEP34eVe6mAgjbZuY8nVniuHPSRTNYWGdTDh%2BZXFBjqkAdvYM9y8WiOUB9pA43lkMNazaaK9LMDD6qpxYcWEEyemesKhee2WxqAdvT%2ByCvDYx%2BXAyVXvL2cxileuzzdKn5h3iZbRZIt0mp7Pwg55q9dyqFAHWrT6WlC%2FVeAvApd50EfqTOGF6TjRV8eZk5f5ccRNpTmV%2BGBbtQQEjpdmkBhUWq%2F0m%2BlwjUoqBKPWgHP7RJf2l%2FowQ%2BIfxMLQ8byFY01cnksT&X-Amz-Signature=937f7d3815eac1404e60314da47f121c744314b3988651fa95f0cbc6ceea5ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JFU76K5%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4AK30tMvWyPgfoL6N6oS4Yjs8qvPIr0J8%2FlwGHIcRhgIhAIS7ZV6AmwFDyvvgdzwGyl0rjIwtQo%2FoOe2xdHRh%2BQj9KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXKXaTP32pjPgm6%2B4q3AOjF5dAH%2Bl87MaJRTvyxu61Zn9fq60r4EVRkmT%2FCixPlRa%2Bpn2plMdhDkj5wXyllcQ5gkD4Sokuz7wM9wDqaD8%2By9MQFU3Tksfdceofj0r0pGCidCbeLpQSOSL3GuBdM8i1DRr8wvywtXjspgyf8eIkuEnVWhwZuecwJ5yQWAPthxVu1T2H5z2%2FaL1sKw50rH7KeCj3Q%2Fjmw1xCNYjU%2Bll3yUrIVW8W7uTC9rN9%2B2lV4jq91CWNvzj%2B387wlvdZoaShLmtsx85zK6fJiXr2zaH593lz21ck%2F3CYyJ0y2zICyoFlFF8qohs%2B7x9FIGicoXe1KGsfw%2FQaYx4ICTDnOGC2L4OYN%2BCni%2B6%2BcI%2FKPAp1U4OQ4U2jlC6XgQuTn2SZ3w94KgjsACkxQrjOwXMPA6pCDMvQlieqKHddX3n81L%2Bpc52pT1MX%2FykkDQzLjrEVans5W7rYljaPPquha6RQfhvmKMJso0QPFVcUiyVipNMRdIFr%2B553QA7cNPmRl3tBczwDVshNDJQXZB8bcBlyg2uPd3SYbx0I2oENTWc9ywgIpCwygFVt9y4HlpfVD9VNQzm78b3LfKRKrJhJJmc1nkEFQ%2F%2BvPEP34eVe6mAgjbZuY8nVniuHPSRTNYWGdTDh%2BZXFBjqkAdvYM9y8WiOUB9pA43lkMNazaaK9LMDD6qpxYcWEEyemesKhee2WxqAdvT%2ByCvDYx%2BXAyVXvL2cxileuzzdKn5h3iZbRZIt0mp7Pwg55q9dyqFAHWrT6WlC%2FVeAvApd50EfqTOGF6TjRV8eZk5f5ccRNpTmV%2BGBbtQQEjpdmkBhUWq%2F0m%2BlwjUoqBKPWgHP7RJf2l%2FowQ%2BIfxMLQ8byFY01cnksT&X-Amz-Signature=3bf555a085e639b2bb45d447cf56a91e17b8c295a918006815f1b2c67092d5ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
