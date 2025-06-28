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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPFMWJ3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvVFGQJrzjY6tzsi%2Bezn%2BL%2FTXj82AcCsmdyqEO1j2l8wIgCh4%2FiyQ8R8HRoRJqoRW0TUp1Xt5Y%2BxqNV2F76eazJgUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2WyGSndYP7x2TvzSrcAxxQ30jPAkC3T8h3t4LKVdvOJP3QA6acBNWl8osEOjf0DiQdmbglHRsMkmcWY%2BroGaDL5Et5UBRFyvP2L9hMq4wUzgKoCqHCQCDwAyrkgYA%2Bf5y2%2FBm1EhQ1ueeVPDXeenum9TCQi5FW6SEaLD8bTV6ovTvDdZDTv7z7J6eVyBalnDwJ4r88cks4m6oc5nd9eNQohhlPmGDzUwauAclKNsvTs%2Fdr5DqMrWRhYAE8DeCl2iUV4Go%2BqoG7s7AGgq%2FIX3Rx8yCXYuldSlBbj5O3qSnhEeLAAXLOYYTJ1siRF5F2SuGCudx8SXXu7R%2FaKqzd5OBsEZpv9kG1PUz6lhhlTH5i7rb91TZxMXBBAXshXESBvbUEdBthSuQIh0EdaJoRb3U8Zs3ovwUpWIzQpbUOWO55pp1RjXKysGpfj9FER%2BOrXRmw2gQb8mT2PkAcEsNbarsBDGg2ptsuu7ep7I7JukwxJ7QVXthtwNrqgUZcdR4bogJ%2BQlo3vVrok71YR4daZJP%2BMI67lXvA8T4d%2FdK52SY0wCYhc9erRZ0vNYJOrjuGt8tYyfMBcGn%2FvXxsysLyOsIYjmvojUfbH%2BZilAngnHDXz%2FTQLxcJVNpMQoPXgAJDtEJi31iK08q8BuSoMP2g%2FsIGOqUBp66RfdzjawaS3AjWF85g4%2FhUyEf9phH5Vdl5x%2BHLMWrsYlfWc4AG9FHff8qs74n%2FAUO7nZRAtqrWM2vVALg%2B5xLSGRJhDS4laHZlLjndKmgI%2F8KMxRLr15GP1HyNmKeiU85ygc5c8hnp0os5kzdmHRfmTKiWHLMCnYl68fBJCaa6Jt2W3JNKpbQvqENN5051vDtTTK%2BfZw1unwJCQo0ka2NNSfsd&X-Amz-Signature=9efe21408e8e8b7154278e5045e0dd1a438a8c7c82d8a7e36c2a0c9cd0cc863a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPFMWJ3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvVFGQJrzjY6tzsi%2Bezn%2BL%2FTXj82AcCsmdyqEO1j2l8wIgCh4%2FiyQ8R8HRoRJqoRW0TUp1Xt5Y%2BxqNV2F76eazJgUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2WyGSndYP7x2TvzSrcAxxQ30jPAkC3T8h3t4LKVdvOJP3QA6acBNWl8osEOjf0DiQdmbglHRsMkmcWY%2BroGaDL5Et5UBRFyvP2L9hMq4wUzgKoCqHCQCDwAyrkgYA%2Bf5y2%2FBm1EhQ1ueeVPDXeenum9TCQi5FW6SEaLD8bTV6ovTvDdZDTv7z7J6eVyBalnDwJ4r88cks4m6oc5nd9eNQohhlPmGDzUwauAclKNsvTs%2Fdr5DqMrWRhYAE8DeCl2iUV4Go%2BqoG7s7AGgq%2FIX3Rx8yCXYuldSlBbj5O3qSnhEeLAAXLOYYTJ1siRF5F2SuGCudx8SXXu7R%2FaKqzd5OBsEZpv9kG1PUz6lhhlTH5i7rb91TZxMXBBAXshXESBvbUEdBthSuQIh0EdaJoRb3U8Zs3ovwUpWIzQpbUOWO55pp1RjXKysGpfj9FER%2BOrXRmw2gQb8mT2PkAcEsNbarsBDGg2ptsuu7ep7I7JukwxJ7QVXthtwNrqgUZcdR4bogJ%2BQlo3vVrok71YR4daZJP%2BMI67lXvA8T4d%2FdK52SY0wCYhc9erRZ0vNYJOrjuGt8tYyfMBcGn%2FvXxsysLyOsIYjmvojUfbH%2BZilAngnHDXz%2FTQLxcJVNpMQoPXgAJDtEJi31iK08q8BuSoMP2g%2FsIGOqUBp66RfdzjawaS3AjWF85g4%2FhUyEf9phH5Vdl5x%2BHLMWrsYlfWc4AG9FHff8qs74n%2FAUO7nZRAtqrWM2vVALg%2B5xLSGRJhDS4laHZlLjndKmgI%2F8KMxRLr15GP1HyNmKeiU85ygc5c8hnp0os5kzdmHRfmTKiWHLMCnYl68fBJCaa6Jt2W3JNKpbQvqENN5051vDtTTK%2BfZw1unwJCQo0ka2NNSfsd&X-Amz-Signature=a11b1cb5a51c2ccd6a1f0f2eac8f559627b8f0eaafc69934cd5f22edbe47ef6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZPFMWJ3%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvVFGQJrzjY6tzsi%2Bezn%2BL%2FTXj82AcCsmdyqEO1j2l8wIgCh4%2FiyQ8R8HRoRJqoRW0TUp1Xt5Y%2BxqNV2F76eazJgUqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2WyGSndYP7x2TvzSrcAxxQ30jPAkC3T8h3t4LKVdvOJP3QA6acBNWl8osEOjf0DiQdmbglHRsMkmcWY%2BroGaDL5Et5UBRFyvP2L9hMq4wUzgKoCqHCQCDwAyrkgYA%2Bf5y2%2FBm1EhQ1ueeVPDXeenum9TCQi5FW6SEaLD8bTV6ovTvDdZDTv7z7J6eVyBalnDwJ4r88cks4m6oc5nd9eNQohhlPmGDzUwauAclKNsvTs%2Fdr5DqMrWRhYAE8DeCl2iUV4Go%2BqoG7s7AGgq%2FIX3Rx8yCXYuldSlBbj5O3qSnhEeLAAXLOYYTJ1siRF5F2SuGCudx8SXXu7R%2FaKqzd5OBsEZpv9kG1PUz6lhhlTH5i7rb91TZxMXBBAXshXESBvbUEdBthSuQIh0EdaJoRb3U8Zs3ovwUpWIzQpbUOWO55pp1RjXKysGpfj9FER%2BOrXRmw2gQb8mT2PkAcEsNbarsBDGg2ptsuu7ep7I7JukwxJ7QVXthtwNrqgUZcdR4bogJ%2BQlo3vVrok71YR4daZJP%2BMI67lXvA8T4d%2FdK52SY0wCYhc9erRZ0vNYJOrjuGt8tYyfMBcGn%2FvXxsysLyOsIYjmvojUfbH%2BZilAngnHDXz%2FTQLxcJVNpMQoPXgAJDtEJi31iK08q8BuSoMP2g%2FsIGOqUBp66RfdzjawaS3AjWF85g4%2FhUyEf9phH5Vdl5x%2BHLMWrsYlfWc4AG9FHff8qs74n%2FAUO7nZRAtqrWM2vVALg%2B5xLSGRJhDS4laHZlLjndKmgI%2F8KMxRLr15GP1HyNmKeiU85ygc5c8hnp0os5kzdmHRfmTKiWHLMCnYl68fBJCaa6Jt2W3JNKpbQvqENN5051vDtTTK%2BfZw1unwJCQo0ka2NNSfsd&X-Amz-Signature=4607d89d1d212d780147bc782302f88a6874732dc98231b5986d46d00d0c0e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
