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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODE44CF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEXxLmqaIrAELsJRNjya1Tgvzb7Qp%2BiwLtkaJT99iOliAiEA7DYqmgC0i9HU4UJdow1Gz%2F%2F5Je2cmJ3h17gSGZcw7Jcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDL8%2FO%2BpyywV8lulq0SrcA9bhuHOUqcqsG98dNyWtp1vLGIhYBFSEzv%2F57OJ5l80y%2BI39Yk7R%2Fr2xyhSKQFcuAaFdu3u1ROGoeiOzvifJ1%2FUrSWlXXb0CiCFxxb53rVNwc2RmUPGAAWiAMOgchk8fAUtpOVquPr%2B%2F59K%2FmgzazMYAau66R6%2Bo%2BGqFtHsg9JmqkQcSHLL%2BmiI132%2FzZC13QKeutqG0bmnXJX%2BJGR6Vtf4ca88%2Bfez6EsAd9w46L5jHo6m87h5VvMy8V0bFxan%2BKSzhrW2X3TTLHAySUFrCGXv3GGgATBRScaoxzR9uCE9MOR36tKg1ADjzvdJeNuv0J6GekEKsZ%2Bpx8UjH3rr%2FQL%2FT2DGEky8CiUz6BRozbuYYatRd1WLXFamQDe%2FV2jiaZowNxUpEWZRnNLEzVfki0YUbiLMtRcLkd5McWaswDXqDosOXnSsBsSMmzu13pd2cwoL068orh4tLIK1DeTYgPLdQ1dQ6y5Yt0hnj%2BPjxZ7lxohJu8Xj%2FAAHwxio0%2FCeTf4FJw6a%2Fp5eThSA0MwgGfE5EHx62f%2FLRhliY6xpeVKCuEKjPx%2Br%2FLJCtJ7dhtz3%2F6y1A1u3zjWw4xBmivr4DEMBnz77YpUkPQY3%2BlsPTLcIl2wM3X3NLpB3AL3WDMJyVhb0GOqUBaVYkexTR5iU9BISAY%2BBapx2m8aNIDb%2FFFJ07j5xgKAiBmdjYKJ39G4hbA3n8nveypS%2BJSCs0Qorv8mvS0OKvXH2OTbm1rCVOCFKC3XV1UAlUgLcw3wLoZCGlIrwH97tWTLlsseVmn%2BlZ1FQ%2B6hZe21%2Bt7al5STY2lGTg3ukeU6i30OzrPQxxFnzRGhdOVxbw8BRWJ5av9ZNuESE9Qru2PcjuvLPU&X-Amz-Signature=3b89b1cdc7ca303f7385fb9119f43c4164518ebd285951561ec621c9c3f442ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODE44CF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEXxLmqaIrAELsJRNjya1Tgvzb7Qp%2BiwLtkaJT99iOliAiEA7DYqmgC0i9HU4UJdow1Gz%2F%2F5Je2cmJ3h17gSGZcw7Jcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDL8%2FO%2BpyywV8lulq0SrcA9bhuHOUqcqsG98dNyWtp1vLGIhYBFSEzv%2F57OJ5l80y%2BI39Yk7R%2Fr2xyhSKQFcuAaFdu3u1ROGoeiOzvifJ1%2FUrSWlXXb0CiCFxxb53rVNwc2RmUPGAAWiAMOgchk8fAUtpOVquPr%2B%2F59K%2FmgzazMYAau66R6%2Bo%2BGqFtHsg9JmqkQcSHLL%2BmiI132%2FzZC13QKeutqG0bmnXJX%2BJGR6Vtf4ca88%2Bfez6EsAd9w46L5jHo6m87h5VvMy8V0bFxan%2BKSzhrW2X3TTLHAySUFrCGXv3GGgATBRScaoxzR9uCE9MOR36tKg1ADjzvdJeNuv0J6GekEKsZ%2Bpx8UjH3rr%2FQL%2FT2DGEky8CiUz6BRozbuYYatRd1WLXFamQDe%2FV2jiaZowNxUpEWZRnNLEzVfki0YUbiLMtRcLkd5McWaswDXqDosOXnSsBsSMmzu13pd2cwoL068orh4tLIK1DeTYgPLdQ1dQ6y5Yt0hnj%2BPjxZ7lxohJu8Xj%2FAAHwxio0%2FCeTf4FJw6a%2Fp5eThSA0MwgGfE5EHx62f%2FLRhliY6xpeVKCuEKjPx%2Br%2FLJCtJ7dhtz3%2F6y1A1u3zjWw4xBmivr4DEMBnz77YpUkPQY3%2BlsPTLcIl2wM3X3NLpB3AL3WDMJyVhb0GOqUBaVYkexTR5iU9BISAY%2BBapx2m8aNIDb%2FFFJ07j5xgKAiBmdjYKJ39G4hbA3n8nveypS%2BJSCs0Qorv8mvS0OKvXH2OTbm1rCVOCFKC3XV1UAlUgLcw3wLoZCGlIrwH97tWTLlsseVmn%2BlZ1FQ%2B6hZe21%2Bt7al5STY2lGTg3ukeU6i30OzrPQxxFnzRGhdOVxbw8BRWJ5av9ZNuESE9Qru2PcjuvLPU&X-Amz-Signature=832ca3888a01c63132a64c18565b303d55401741ab458c3911130883e8ea920d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ODE44CF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIEXxLmqaIrAELsJRNjya1Tgvzb7Qp%2BiwLtkaJT99iOliAiEA7DYqmgC0i9HU4UJdow1Gz%2F%2F5Je2cmJ3h17gSGZcw7Jcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDL8%2FO%2BpyywV8lulq0SrcA9bhuHOUqcqsG98dNyWtp1vLGIhYBFSEzv%2F57OJ5l80y%2BI39Yk7R%2Fr2xyhSKQFcuAaFdu3u1ROGoeiOzvifJ1%2FUrSWlXXb0CiCFxxb53rVNwc2RmUPGAAWiAMOgchk8fAUtpOVquPr%2B%2F59K%2FmgzazMYAau66R6%2Bo%2BGqFtHsg9JmqkQcSHLL%2BmiI132%2FzZC13QKeutqG0bmnXJX%2BJGR6Vtf4ca88%2Bfez6EsAd9w46L5jHo6m87h5VvMy8V0bFxan%2BKSzhrW2X3TTLHAySUFrCGXv3GGgATBRScaoxzR9uCE9MOR36tKg1ADjzvdJeNuv0J6GekEKsZ%2Bpx8UjH3rr%2FQL%2FT2DGEky8CiUz6BRozbuYYatRd1WLXFamQDe%2FV2jiaZowNxUpEWZRnNLEzVfki0YUbiLMtRcLkd5McWaswDXqDosOXnSsBsSMmzu13pd2cwoL068orh4tLIK1DeTYgPLdQ1dQ6y5Yt0hnj%2BPjxZ7lxohJu8Xj%2FAAHwxio0%2FCeTf4FJw6a%2Fp5eThSA0MwgGfE5EHx62f%2FLRhliY6xpeVKCuEKjPx%2Br%2FLJCtJ7dhtz3%2F6y1A1u3zjWw4xBmivr4DEMBnz77YpUkPQY3%2BlsPTLcIl2wM3X3NLpB3AL3WDMJyVhb0GOqUBaVYkexTR5iU9BISAY%2BBapx2m8aNIDb%2FFFJ07j5xgKAiBmdjYKJ39G4hbA3n8nveypS%2BJSCs0Qorv8mvS0OKvXH2OTbm1rCVOCFKC3XV1UAlUgLcw3wLoZCGlIrwH97tWTLlsseVmn%2BlZ1FQ%2B6hZe21%2Bt7al5STY2lGTg3ukeU6i30OzrPQxxFnzRGhdOVxbw8BRWJ5av9ZNuESE9Qru2PcjuvLPU&X-Amz-Signature=6467a742002cb6a7e5c86737ef4ec96e19463434dc052d39e6d9c2ab13cd4ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
