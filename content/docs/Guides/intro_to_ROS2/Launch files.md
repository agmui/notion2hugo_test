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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z5ULDEG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1pcbZQtMIWP8ljbyqW5vrvl%2BC%2FHXjs%2BpGDvvQajFDAIhAKjx2o4NBmMHQmQskl9q%2BFgfStRw8WZeF%2BLK8pcTcZ0BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FU5nQoAHjuTkmKG8q3ANhPsiFlohwIz%2BKGC8PYGYYW2vl%2FrBDwK5eeBa2JAmwgXHLX21%2FxcLH7Z8r92i6ebMkOnxhAcWIaKneKmMDi7ybhKBSao53PKMCA2OSjV9cuxhUp9blBoujCo90dZ0kdQ2u9a8CVewMTQSbysIDK3JHjg4zzIhdYty3rzG%2B92GqkOZlOrN2rDCWJN4YT4RHDqkS92oSNzuvWo6hOBaol9p14wBVKu%2B4ZYIyisUrIdCzyeoNGn3kyCL1gRs1%2FFMh5w9kwd%2FhtoN8ixb2RcxMbanEEz%2Bm77BgHs9Yi83nzr4mTrVVOt8CmEtbmlhJmte2Pxipq%2BXItC8u8MVCdwYVdmww8PUeyWWHqyGtktTmusgsHGkCp3dZHNRFZPg7jW6VeA3oivdnmC3ncHPr1qlm65USRan7yprNHxwJcPLsyMJPBLllRDmOxDlGdy8LNU44Abat0lPb34TZmyFD%2B%2Fgi8XtVxbeFtBIx%2FbcXTrJx5IDc%2BPuPmwF8tBlcfwhyEhPvQqew3m8K3oEgMN2XqxqW9ZdhRcJVN1A9b%2FY1Z2S3zeWiokMk442KhdPhmfitISJJ4aoLIVM8u2DP7DVPmm%2F2IGsGR90wwnqV94kG%2F6QCPFwNWUc3tYeZ6x2u4a8sDzCVttHCBjqkAV8IvIFRXrCVHWR%2Bsyui%2BSWq8qmbG%2BFXA9z1xk7tgAI2OAelL20XY%2FJmuRL64Enl11trFdIJiu5DpgseuO3Uzfl90VXEIE%2B7Hp1TNFXQa%2F9lEvyfR3qu1lk%2FT68jrWuR5wRhM1sYn%2BTYXWCTNKe7mDKUBk1zR5MwUKIZ0sh%2FSrNr5TklcWb045WLOxe4lRyB0HRd%2BW%2B4ebbCq%2BWs6GQ%2Byvfy909z&X-Amz-Signature=eb51b5af81af87d7316ade8f929cc7a1f2f6045b07a17342470778bed6c1a2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z5ULDEG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1pcbZQtMIWP8ljbyqW5vrvl%2BC%2FHXjs%2BpGDvvQajFDAIhAKjx2o4NBmMHQmQskl9q%2BFgfStRw8WZeF%2BLK8pcTcZ0BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FU5nQoAHjuTkmKG8q3ANhPsiFlohwIz%2BKGC8PYGYYW2vl%2FrBDwK5eeBa2JAmwgXHLX21%2FxcLH7Z8r92i6ebMkOnxhAcWIaKneKmMDi7ybhKBSao53PKMCA2OSjV9cuxhUp9blBoujCo90dZ0kdQ2u9a8CVewMTQSbysIDK3JHjg4zzIhdYty3rzG%2B92GqkOZlOrN2rDCWJN4YT4RHDqkS92oSNzuvWo6hOBaol9p14wBVKu%2B4ZYIyisUrIdCzyeoNGn3kyCL1gRs1%2FFMh5w9kwd%2FhtoN8ixb2RcxMbanEEz%2Bm77BgHs9Yi83nzr4mTrVVOt8CmEtbmlhJmte2Pxipq%2BXItC8u8MVCdwYVdmww8PUeyWWHqyGtktTmusgsHGkCp3dZHNRFZPg7jW6VeA3oivdnmC3ncHPr1qlm65USRan7yprNHxwJcPLsyMJPBLllRDmOxDlGdy8LNU44Abat0lPb34TZmyFD%2B%2Fgi8XtVxbeFtBIx%2FbcXTrJx5IDc%2BPuPmwF8tBlcfwhyEhPvQqew3m8K3oEgMN2XqxqW9ZdhRcJVN1A9b%2FY1Z2S3zeWiokMk442KhdPhmfitISJJ4aoLIVM8u2DP7DVPmm%2F2IGsGR90wwnqV94kG%2F6QCPFwNWUc3tYeZ6x2u4a8sDzCVttHCBjqkAV8IvIFRXrCVHWR%2Bsyui%2BSWq8qmbG%2BFXA9z1xk7tgAI2OAelL20XY%2FJmuRL64Enl11trFdIJiu5DpgseuO3Uzfl90VXEIE%2B7Hp1TNFXQa%2F9lEvyfR3qu1lk%2FT68jrWuR5wRhM1sYn%2BTYXWCTNKe7mDKUBk1zR5MwUKIZ0sh%2FSrNr5TklcWb045WLOxe4lRyB0HRd%2BW%2B4ebbCq%2BWs6GQ%2Byvfy909z&X-Amz-Signature=8f888f4f8767af0c452801ef7bd34ceac8c275e8c6c0bd4eef836d31eb899f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z5ULDEG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA1pcbZQtMIWP8ljbyqW5vrvl%2BC%2FHXjs%2BpGDvvQajFDAIhAKjx2o4NBmMHQmQskl9q%2BFgfStRw8WZeF%2BLK8pcTcZ0BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FU5nQoAHjuTkmKG8q3ANhPsiFlohwIz%2BKGC8PYGYYW2vl%2FrBDwK5eeBa2JAmwgXHLX21%2FxcLH7Z8r92i6ebMkOnxhAcWIaKneKmMDi7ybhKBSao53PKMCA2OSjV9cuxhUp9blBoujCo90dZ0kdQ2u9a8CVewMTQSbysIDK3JHjg4zzIhdYty3rzG%2B92GqkOZlOrN2rDCWJN4YT4RHDqkS92oSNzuvWo6hOBaol9p14wBVKu%2B4ZYIyisUrIdCzyeoNGn3kyCL1gRs1%2FFMh5w9kwd%2FhtoN8ixb2RcxMbanEEz%2Bm77BgHs9Yi83nzr4mTrVVOt8CmEtbmlhJmte2Pxipq%2BXItC8u8MVCdwYVdmww8PUeyWWHqyGtktTmusgsHGkCp3dZHNRFZPg7jW6VeA3oivdnmC3ncHPr1qlm65USRan7yprNHxwJcPLsyMJPBLllRDmOxDlGdy8LNU44Abat0lPb34TZmyFD%2B%2Fgi8XtVxbeFtBIx%2FbcXTrJx5IDc%2BPuPmwF8tBlcfwhyEhPvQqew3m8K3oEgMN2XqxqW9ZdhRcJVN1A9b%2FY1Z2S3zeWiokMk442KhdPhmfitISJJ4aoLIVM8u2DP7DVPmm%2F2IGsGR90wwnqV94kG%2F6QCPFwNWUc3tYeZ6x2u4a8sDzCVttHCBjqkAV8IvIFRXrCVHWR%2Bsyui%2BSWq8qmbG%2BFXA9z1xk7tgAI2OAelL20XY%2FJmuRL64Enl11trFdIJiu5DpgseuO3Uzfl90VXEIE%2B7Hp1TNFXQa%2F9lEvyfR3qu1lk%2FT68jrWuR5wRhM1sYn%2BTYXWCTNKe7mDKUBk1zR5MwUKIZ0sh%2FSrNr5TklcWb045WLOxe4lRyB0HRd%2BW%2B4ebbCq%2BWs6GQ%2Byvfy909z&X-Amz-Signature=cf8a710f38450a408ae5424f748f989b1713e42b328e24e9e5efe1cd0ea96e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
