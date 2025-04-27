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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDHU73CP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHMqQN9Dh2uSSOu9nnOiq9RfvOs3UatsujdA2uv770nQIhAIflQkuTo8H3u6s%2BuaYE5sS6FAohiQsT1St1cGmZFJEpKv8DCGUQABoMNjM3NDIzMTgzODA1IgxHExY8PcQp%2FiLa3sAq3APLXd1%2BQ8IwGSsixldWIq%2BjLDO%2F4vTx0Y%2BVNtaytLhhYUPH5R1mB%2FJHaf3k4eYAA46K0YRopxBe5KRcJKvamFun6Eb8SoYPED1Tv3vLv35PdhAIJdkQ%2BhVmlcbqJlN62pu42Q2ytRDbHCGfea4FM7hhYwIocWQ27ro7RHApd9mUQDqBl4Cpl%2Byuk3f4cxG6a4wRyKanIYn53jpUELV10IywUR9KPYFrBjnt2wO%2FRBMscCy3%2BAu32VcTd2FDdAbnKvShk5Uzkj5GCTtxpqInUfIb%2BIDbZoXG%2BChwrK16gLJCsCS5FRT%2B6Y9%2FBgsWFc%2BvPRwiOqJi%2F5q17cMX%2BaRpL%2BT%2BVDu%2BSToi%2BP9LcprytdJJbTe0Ft1aUl%2Bb%2F7KnapRexbnmfc%2ByoaNxoBS5CzQGbyLarj3t4UDObAxMX0sIW1cZmSNqr3KLIPvf6tdgwZomKe95WWK%2FY5l7z0m%2F0cBEuupzAuplyg0CHEw1mnmNgAfdiZABq%2BmIMFtO4F2yDXTEizv9hK89QLuyFv%2BP50ic07kuLTzt0iwkoj5jq7uaNJsq%2FPBN7vzt26Nlp7OFmEw%2BXcW%2BfuMPiU4jBlbeZCgj6Xzl5VbiG2Jae1RM2hOrqUuDzsgScwzQ1TUI93IhVDDgirrABjqkAdNNwfWfJe7BjCKJg%2FxF1%2BmQ0oXxbbFN9t%2FUOLUQmPHF%2BVnJLvI5Z83WFToc9F3GdHhpHt1R9fdUguSeCLjMs1VU0a1yr0naXx%2BFkjyDyj3w%2FRxY47p5Z%2F9UdQmR42UzAH%2BBWsktlzhp%2FYuAPgZGsqvn7K%2BJXlBuawQdbP%2FEjcl4yg2If94CJIDI9qoc7N1lvawassygB%2FqbyMOa%2Fgkn9MSofq0%2F&X-Amz-Signature=beace32cf4c3d4331c7044df81213b06e5c69461f47884403dff83d5db08962c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDHU73CP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHMqQN9Dh2uSSOu9nnOiq9RfvOs3UatsujdA2uv770nQIhAIflQkuTo8H3u6s%2BuaYE5sS6FAohiQsT1St1cGmZFJEpKv8DCGUQABoMNjM3NDIzMTgzODA1IgxHExY8PcQp%2FiLa3sAq3APLXd1%2BQ8IwGSsixldWIq%2BjLDO%2F4vTx0Y%2BVNtaytLhhYUPH5R1mB%2FJHaf3k4eYAA46K0YRopxBe5KRcJKvamFun6Eb8SoYPED1Tv3vLv35PdhAIJdkQ%2BhVmlcbqJlN62pu42Q2ytRDbHCGfea4FM7hhYwIocWQ27ro7RHApd9mUQDqBl4Cpl%2Byuk3f4cxG6a4wRyKanIYn53jpUELV10IywUR9KPYFrBjnt2wO%2FRBMscCy3%2BAu32VcTd2FDdAbnKvShk5Uzkj5GCTtxpqInUfIb%2BIDbZoXG%2BChwrK16gLJCsCS5FRT%2B6Y9%2FBgsWFc%2BvPRwiOqJi%2F5q17cMX%2BaRpL%2BT%2BVDu%2BSToi%2BP9LcprytdJJbTe0Ft1aUl%2Bb%2F7KnapRexbnmfc%2ByoaNxoBS5CzQGbyLarj3t4UDObAxMX0sIW1cZmSNqr3KLIPvf6tdgwZomKe95WWK%2FY5l7z0m%2F0cBEuupzAuplyg0CHEw1mnmNgAfdiZABq%2BmIMFtO4F2yDXTEizv9hK89QLuyFv%2BP50ic07kuLTzt0iwkoj5jq7uaNJsq%2FPBN7vzt26Nlp7OFmEw%2BXcW%2BfuMPiU4jBlbeZCgj6Xzl5VbiG2Jae1RM2hOrqUuDzsgScwzQ1TUI93IhVDDgirrABjqkAdNNwfWfJe7BjCKJg%2FxF1%2BmQ0oXxbbFN9t%2FUOLUQmPHF%2BVnJLvI5Z83WFToc9F3GdHhpHt1R9fdUguSeCLjMs1VU0a1yr0naXx%2BFkjyDyj3w%2FRxY47p5Z%2F9UdQmR42UzAH%2BBWsktlzhp%2FYuAPgZGsqvn7K%2BJXlBuawQdbP%2FEjcl4yg2If94CJIDI9qoc7N1lvawassygB%2FqbyMOa%2Fgkn9MSofq0%2F&X-Amz-Signature=7ea33117640477d26b3f4bcee1af8a87059ccdc5e71ae20032b10c67eea754bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDHU73CP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHMqQN9Dh2uSSOu9nnOiq9RfvOs3UatsujdA2uv770nQIhAIflQkuTo8H3u6s%2BuaYE5sS6FAohiQsT1St1cGmZFJEpKv8DCGUQABoMNjM3NDIzMTgzODA1IgxHExY8PcQp%2FiLa3sAq3APLXd1%2BQ8IwGSsixldWIq%2BjLDO%2F4vTx0Y%2BVNtaytLhhYUPH5R1mB%2FJHaf3k4eYAA46K0YRopxBe5KRcJKvamFun6Eb8SoYPED1Tv3vLv35PdhAIJdkQ%2BhVmlcbqJlN62pu42Q2ytRDbHCGfea4FM7hhYwIocWQ27ro7RHApd9mUQDqBl4Cpl%2Byuk3f4cxG6a4wRyKanIYn53jpUELV10IywUR9KPYFrBjnt2wO%2FRBMscCy3%2BAu32VcTd2FDdAbnKvShk5Uzkj5GCTtxpqInUfIb%2BIDbZoXG%2BChwrK16gLJCsCS5FRT%2B6Y9%2FBgsWFc%2BvPRwiOqJi%2F5q17cMX%2BaRpL%2BT%2BVDu%2BSToi%2BP9LcprytdJJbTe0Ft1aUl%2Bb%2F7KnapRexbnmfc%2ByoaNxoBS5CzQGbyLarj3t4UDObAxMX0sIW1cZmSNqr3KLIPvf6tdgwZomKe95WWK%2FY5l7z0m%2F0cBEuupzAuplyg0CHEw1mnmNgAfdiZABq%2BmIMFtO4F2yDXTEizv9hK89QLuyFv%2BP50ic07kuLTzt0iwkoj5jq7uaNJsq%2FPBN7vzt26Nlp7OFmEw%2BXcW%2BfuMPiU4jBlbeZCgj6Xzl5VbiG2Jae1RM2hOrqUuDzsgScwzQ1TUI93IhVDDgirrABjqkAdNNwfWfJe7BjCKJg%2FxF1%2BmQ0oXxbbFN9t%2FUOLUQmPHF%2BVnJLvI5Z83WFToc9F3GdHhpHt1R9fdUguSeCLjMs1VU0a1yr0naXx%2BFkjyDyj3w%2FRxY47p5Z%2F9UdQmR42UzAH%2BBWsktlzhp%2FYuAPgZGsqvn7K%2BJXlBuawQdbP%2FEjcl4yg2If94CJIDI9qoc7N1lvawassygB%2FqbyMOa%2Fgkn9MSofq0%2F&X-Amz-Signature=af9d1fc38dc19f8ffcd631630c08ce182a1cec71a6505721649c0ef31fd359a3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
