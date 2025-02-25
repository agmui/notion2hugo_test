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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPPXMQL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBstQhmuSiLIg%2Bp1A411MSijoySFraxF1lqPM9Uulu75AiEAtreZcpO5oqOkcYwc6IKfV5LJ1adTGIhjQeKE%2B1E5zhQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIApPISbOnbIHqk4FCrcAz96og7Z7G7370WvztiuFfa3G94LJrU9PJR3llApwBzrbdrV0xOU8Zh9dKPR4GduTbF%2FssTrFP1jRWDZcpvB88GFp6qgy%2FoxtlaeHP3E9nLR9Mek8iZFgyEhrQFjX7EbjG0B9tCyGtjWCYFQy8%2BqKAgo%2BdTUSQS37C3iMq%2BQ1Gyaun8tY7gwz8tmpncLPqaA0yFLsiH%2BdGbBxluKLR6vLj5DCVI%2FU%2BErnM6W2Ghd5nv%2FwojXhba0K0aQzNVcUw3gm7AZmOyIagxBbflfsUVqym7TqADYApW4CB13MXOeYD8BMoN4S1Sz7jpaSfJVIewjcn7zGc5wv%2FSvr81oojPogY2LH8EVsx8VNw7W4Y90%2BUG8h7Ozzp7V2ltsBu%2FuYbC12K1YAZsZCG%2BcOB3TL9q%2BeYT6qPk8tGD8x9emfuwzu4HPtGL5siSQPiG6oC3ulWKNrxvwNyd%2FmelZ9OOF4CFrXcfLp0hthZ%2BleHCVgE7Nq1IcBw%2BmMjjqo115S%2Fw3Q4QT3rDPZdoGAdLCC6fAXvQy5sbkLyXZiOuwwlNVcJagPXv1gNg1kZF2OCjY7RB2vwHVuDKWrfvfyr2Bf%2BQoA5rZwf75ajv15p58B0m9G%2FOI9Ni8pKkC%2BPQyxDzjm0zZMO3Q970GOqUBc%2BmfHykt0R8mhGfuj0K29o5iAsTPgydbUpMa2%2B6lPez7viOFO1E5tiFvB6HCjgJ16jSpyCuiLou11%2BIXmqpzbnvKasN6tz7HpsSKhyjKLYjnl%2FLuzxXjjVQABdpDe8LXsL%2BxYcUIOr7qHnbna3HIImNrR1Li8H5XQOo%2BjArCdSf3TdtabQ8ICFCEulmmpGDggyWFi5J4cc8yt8RN23%2F3C5cW9pe5&X-Amz-Signature=663595a5ec36113d66f6ede017fb8fd9f17c101efa0f88c0265400e9f7fde060&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPPXMQL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBstQhmuSiLIg%2Bp1A411MSijoySFraxF1lqPM9Uulu75AiEAtreZcpO5oqOkcYwc6IKfV5LJ1adTGIhjQeKE%2B1E5zhQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIApPISbOnbIHqk4FCrcAz96og7Z7G7370WvztiuFfa3G94LJrU9PJR3llApwBzrbdrV0xOU8Zh9dKPR4GduTbF%2FssTrFP1jRWDZcpvB88GFp6qgy%2FoxtlaeHP3E9nLR9Mek8iZFgyEhrQFjX7EbjG0B9tCyGtjWCYFQy8%2BqKAgo%2BdTUSQS37C3iMq%2BQ1Gyaun8tY7gwz8tmpncLPqaA0yFLsiH%2BdGbBxluKLR6vLj5DCVI%2FU%2BErnM6W2Ghd5nv%2FwojXhba0K0aQzNVcUw3gm7AZmOyIagxBbflfsUVqym7TqADYApW4CB13MXOeYD8BMoN4S1Sz7jpaSfJVIewjcn7zGc5wv%2FSvr81oojPogY2LH8EVsx8VNw7W4Y90%2BUG8h7Ozzp7V2ltsBu%2FuYbC12K1YAZsZCG%2BcOB3TL9q%2BeYT6qPk8tGD8x9emfuwzu4HPtGL5siSQPiG6oC3ulWKNrxvwNyd%2FmelZ9OOF4CFrXcfLp0hthZ%2BleHCVgE7Nq1IcBw%2BmMjjqo115S%2Fw3Q4QT3rDPZdoGAdLCC6fAXvQy5sbkLyXZiOuwwlNVcJagPXv1gNg1kZF2OCjY7RB2vwHVuDKWrfvfyr2Bf%2BQoA5rZwf75ajv15p58B0m9G%2FOI9Ni8pKkC%2BPQyxDzjm0zZMO3Q970GOqUBc%2BmfHykt0R8mhGfuj0K29o5iAsTPgydbUpMa2%2B6lPez7viOFO1E5tiFvB6HCjgJ16jSpyCuiLou11%2BIXmqpzbnvKasN6tz7HpsSKhyjKLYjnl%2FLuzxXjjVQABdpDe8LXsL%2BxYcUIOr7qHnbna3HIImNrR1Li8H5XQOo%2BjArCdSf3TdtabQ8ICFCEulmmpGDggyWFi5J4cc8yt8RN23%2F3C5cW9pe5&X-Amz-Signature=bd42ad2bbcb3e05808537f554816666b38198876aaa0b9ca867c35ba8c73a501&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHPPXMQL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBstQhmuSiLIg%2Bp1A411MSijoySFraxF1lqPM9Uulu75AiEAtreZcpO5oqOkcYwc6IKfV5LJ1adTGIhjQeKE%2B1E5zhQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIApPISbOnbIHqk4FCrcAz96og7Z7G7370WvztiuFfa3G94LJrU9PJR3llApwBzrbdrV0xOU8Zh9dKPR4GduTbF%2FssTrFP1jRWDZcpvB88GFp6qgy%2FoxtlaeHP3E9nLR9Mek8iZFgyEhrQFjX7EbjG0B9tCyGtjWCYFQy8%2BqKAgo%2BdTUSQS37C3iMq%2BQ1Gyaun8tY7gwz8tmpncLPqaA0yFLsiH%2BdGbBxluKLR6vLj5DCVI%2FU%2BErnM6W2Ghd5nv%2FwojXhba0K0aQzNVcUw3gm7AZmOyIagxBbflfsUVqym7TqADYApW4CB13MXOeYD8BMoN4S1Sz7jpaSfJVIewjcn7zGc5wv%2FSvr81oojPogY2LH8EVsx8VNw7W4Y90%2BUG8h7Ozzp7V2ltsBu%2FuYbC12K1YAZsZCG%2BcOB3TL9q%2BeYT6qPk8tGD8x9emfuwzu4HPtGL5siSQPiG6oC3ulWKNrxvwNyd%2FmelZ9OOF4CFrXcfLp0hthZ%2BleHCVgE7Nq1IcBw%2BmMjjqo115S%2Fw3Q4QT3rDPZdoGAdLCC6fAXvQy5sbkLyXZiOuwwlNVcJagPXv1gNg1kZF2OCjY7RB2vwHVuDKWrfvfyr2Bf%2BQoA5rZwf75ajv15p58B0m9G%2FOI9Ni8pKkC%2BPQyxDzjm0zZMO3Q970GOqUBc%2BmfHykt0R8mhGfuj0K29o5iAsTPgydbUpMa2%2B6lPez7viOFO1E5tiFvB6HCjgJ16jSpyCuiLou11%2BIXmqpzbnvKasN6tz7HpsSKhyjKLYjnl%2FLuzxXjjVQABdpDe8LXsL%2BxYcUIOr7qHnbna3HIImNrR1Li8H5XQOo%2BjArCdSf3TdtabQ8ICFCEulmmpGDggyWFi5J4cc8yt8RN23%2F3C5cW9pe5&X-Amz-Signature=9f0a7b343b9004822c46a1182cf28d7e3e3cf0b028f12c11d222c7073a9e1d53&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
