---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQXOCYK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyNX2G726fiU%2FJAgXpoStps85zDaSBaV8MV7pN46T%2FOAiBkmNnT3T0%2Bp2WZR8iqmFotn7AUKjX3kBShbukONEd8dCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCazhg63SC5vr5IZhKtwDgxgpeRBI0B1nOsIhWLWBn%2FE1gLimVOA4mvvpj6mlbvpo9Mcngymv1cYJT5JGmB%2BzekpGLGg9mPa%2FCtRIOONEwZOlLe8Srus4myrwsxphRGy0i2K5noiEr%2Fw1sCv0k21w%2FJe9c3r4Ixuj3R8P57iLIdFmsIbySIwyM7yGxyleVM77%2FJSrnrxi%2Bw%2Fe94i6vn9f00t7wUTyeDCLYIRwdIkMcnjJFZtg9LFKor95z8rIR9ng1aYAzf5H%2FpttY1HPoNBxZJTsfkRClcnXFr9yk4H7I9VrpPETNJvOAax1V97axavdhQ68u3t65XpneCVq5umRq6GDVrXFYx7kTG3oRn7NIHTUIlx88L6cLdD9rFSETIxQWAYlaycdi7jJ2L2MmuImSPjSoggVwED3UphCWgPzJRfLzAIYH2ZcWF7xclNmCUrkEfRG5LUhfPlTdo2cZ%2FTtRtKILdQ0GiQ9EULV6ssFBBrhUQSwOoluquRaJ1g%2FcJdUuaAzvubijTZA0lRBSxhtYGcMvZf65FgHH4RWGTLSn%2BB%2BVhZUSTPobH19UatYRjKrtqByPkvy42asM%2FPhPPuKRQXw4aOJTO08vNI7%2FJsuveBXKx0Lk3RQurAhJJ3I68PsyhPUzmEyv64TJxwwksflvQY6pgEKx6F2m0SN%2Fe%2Fmmllp4ys1sC4ho4HnWdNgFG5DTHjcK0tjqO64FNtf8ZUej4FQY%2FBeZ%2F5ZeptMBdFDCyElkb54jr3pc5oTyVz8tA1voiY1hLMnxJsVT%2B53OqPtOfWx9yEzm%2FH96udOsak4uX54xIPn1Rkd2Fw9x3Uk3nAbACAGDFc8BnqvbkhQN4%2B5XT%2FV8n4sVHazLLWiAimghWxUNWTCAVwQ2kOD&X-Amz-Signature=d96d6f9bbb0d44a312977e0af9e2e3eb8ec0d243d43c221578644a9cbb2111ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQXOCYK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyNX2G726fiU%2FJAgXpoStps85zDaSBaV8MV7pN46T%2FOAiBkmNnT3T0%2Bp2WZR8iqmFotn7AUKjX3kBShbukONEd8dCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCazhg63SC5vr5IZhKtwDgxgpeRBI0B1nOsIhWLWBn%2FE1gLimVOA4mvvpj6mlbvpo9Mcngymv1cYJT5JGmB%2BzekpGLGg9mPa%2FCtRIOONEwZOlLe8Srus4myrwsxphRGy0i2K5noiEr%2Fw1sCv0k21w%2FJe9c3r4Ixuj3R8P57iLIdFmsIbySIwyM7yGxyleVM77%2FJSrnrxi%2Bw%2Fe94i6vn9f00t7wUTyeDCLYIRwdIkMcnjJFZtg9LFKor95z8rIR9ng1aYAzf5H%2FpttY1HPoNBxZJTsfkRClcnXFr9yk4H7I9VrpPETNJvOAax1V97axavdhQ68u3t65XpneCVq5umRq6GDVrXFYx7kTG3oRn7NIHTUIlx88L6cLdD9rFSETIxQWAYlaycdi7jJ2L2MmuImSPjSoggVwED3UphCWgPzJRfLzAIYH2ZcWF7xclNmCUrkEfRG5LUhfPlTdo2cZ%2FTtRtKILdQ0GiQ9EULV6ssFBBrhUQSwOoluquRaJ1g%2FcJdUuaAzvubijTZA0lRBSxhtYGcMvZf65FgHH4RWGTLSn%2BB%2BVhZUSTPobH19UatYRjKrtqByPkvy42asM%2FPhPPuKRQXw4aOJTO08vNI7%2FJsuveBXKx0Lk3RQurAhJJ3I68PsyhPUzmEyv64TJxwwksflvQY6pgEKx6F2m0SN%2Fe%2Fmmllp4ys1sC4ho4HnWdNgFG5DTHjcK0tjqO64FNtf8ZUej4FQY%2FBeZ%2F5ZeptMBdFDCyElkb54jr3pc5oTyVz8tA1voiY1hLMnxJsVT%2B53OqPtOfWx9yEzm%2FH96udOsak4uX54xIPn1Rkd2Fw9x3Uk3nAbACAGDFc8BnqvbkhQN4%2B5XT%2FV8n4sVHazLLWiAimghWxUNWTCAVwQ2kOD&X-Amz-Signature=d9b73cebfc079e115f1d7aa4c08f5e3405125f14cf5fe9becace314eb2c49722&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQXOCYK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyNX2G726fiU%2FJAgXpoStps85zDaSBaV8MV7pN46T%2FOAiBkmNnT3T0%2Bp2WZR8iqmFotn7AUKjX3kBShbukONEd8dCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCazhg63SC5vr5IZhKtwDgxgpeRBI0B1nOsIhWLWBn%2FE1gLimVOA4mvvpj6mlbvpo9Mcngymv1cYJT5JGmB%2BzekpGLGg9mPa%2FCtRIOONEwZOlLe8Srus4myrwsxphRGy0i2K5noiEr%2Fw1sCv0k21w%2FJe9c3r4Ixuj3R8P57iLIdFmsIbySIwyM7yGxyleVM77%2FJSrnrxi%2Bw%2Fe94i6vn9f00t7wUTyeDCLYIRwdIkMcnjJFZtg9LFKor95z8rIR9ng1aYAzf5H%2FpttY1HPoNBxZJTsfkRClcnXFr9yk4H7I9VrpPETNJvOAax1V97axavdhQ68u3t65XpneCVq5umRq6GDVrXFYx7kTG3oRn7NIHTUIlx88L6cLdD9rFSETIxQWAYlaycdi7jJ2L2MmuImSPjSoggVwED3UphCWgPzJRfLzAIYH2ZcWF7xclNmCUrkEfRG5LUhfPlTdo2cZ%2FTtRtKILdQ0GiQ9EULV6ssFBBrhUQSwOoluquRaJ1g%2FcJdUuaAzvubijTZA0lRBSxhtYGcMvZf65FgHH4RWGTLSn%2BB%2BVhZUSTPobH19UatYRjKrtqByPkvy42asM%2FPhPPuKRQXw4aOJTO08vNI7%2FJsuveBXKx0Lk3RQurAhJJ3I68PsyhPUzmEyv64TJxwwksflvQY6pgEKx6F2m0SN%2Fe%2Fmmllp4ys1sC4ho4HnWdNgFG5DTHjcK0tjqO64FNtf8ZUej4FQY%2FBeZ%2F5ZeptMBdFDCyElkb54jr3pc5oTyVz8tA1voiY1hLMnxJsVT%2B53OqPtOfWx9yEzm%2FH96udOsak4uX54xIPn1Rkd2Fw9x3Uk3nAbACAGDFc8BnqvbkhQN4%2B5XT%2FV8n4sVHazLLWiAimghWxUNWTCAVwQ2kOD&X-Amz-Signature=51155a531b1f819ffb820b37519b2eeb39ea31640016803ad68bcb7b478fb232&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQXOCYK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyNX2G726fiU%2FJAgXpoStps85zDaSBaV8MV7pN46T%2FOAiBkmNnT3T0%2Bp2WZR8iqmFotn7AUKjX3kBShbukONEd8dCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCazhg63SC5vr5IZhKtwDgxgpeRBI0B1nOsIhWLWBn%2FE1gLimVOA4mvvpj6mlbvpo9Mcngymv1cYJT5JGmB%2BzekpGLGg9mPa%2FCtRIOONEwZOlLe8Srus4myrwsxphRGy0i2K5noiEr%2Fw1sCv0k21w%2FJe9c3r4Ixuj3R8P57iLIdFmsIbySIwyM7yGxyleVM77%2FJSrnrxi%2Bw%2Fe94i6vn9f00t7wUTyeDCLYIRwdIkMcnjJFZtg9LFKor95z8rIR9ng1aYAzf5H%2FpttY1HPoNBxZJTsfkRClcnXFr9yk4H7I9VrpPETNJvOAax1V97axavdhQ68u3t65XpneCVq5umRq6GDVrXFYx7kTG3oRn7NIHTUIlx88L6cLdD9rFSETIxQWAYlaycdi7jJ2L2MmuImSPjSoggVwED3UphCWgPzJRfLzAIYH2ZcWF7xclNmCUrkEfRG5LUhfPlTdo2cZ%2FTtRtKILdQ0GiQ9EULV6ssFBBrhUQSwOoluquRaJ1g%2FcJdUuaAzvubijTZA0lRBSxhtYGcMvZf65FgHH4RWGTLSn%2BB%2BVhZUSTPobH19UatYRjKrtqByPkvy42asM%2FPhPPuKRQXw4aOJTO08vNI7%2FJsuveBXKx0Lk3RQurAhJJ3I68PsyhPUzmEyv64TJxwwksflvQY6pgEKx6F2m0SN%2Fe%2Fmmllp4ys1sC4ho4HnWdNgFG5DTHjcK0tjqO64FNtf8ZUej4FQY%2FBeZ%2F5ZeptMBdFDCyElkb54jr3pc5oTyVz8tA1voiY1hLMnxJsVT%2B53OqPtOfWx9yEzm%2FH96udOsak4uX54xIPn1Rkd2Fw9x3Uk3nAbACAGDFc8BnqvbkhQN4%2B5XT%2FV8n4sVHazLLWiAimghWxUNWTCAVwQ2kOD&X-Amz-Signature=77dd55e22b703d264b18e7c3dbec35b2b1487e999a69dbc2a117b5c091fd7a34&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQXOCYK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyNX2G726fiU%2FJAgXpoStps85zDaSBaV8MV7pN46T%2FOAiBkmNnT3T0%2Bp2WZR8iqmFotn7AUKjX3kBShbukONEd8dCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCazhg63SC5vr5IZhKtwDgxgpeRBI0B1nOsIhWLWBn%2FE1gLimVOA4mvvpj6mlbvpo9Mcngymv1cYJT5JGmB%2BzekpGLGg9mPa%2FCtRIOONEwZOlLe8Srus4myrwsxphRGy0i2K5noiEr%2Fw1sCv0k21w%2FJe9c3r4Ixuj3R8P57iLIdFmsIbySIwyM7yGxyleVM77%2FJSrnrxi%2Bw%2Fe94i6vn9f00t7wUTyeDCLYIRwdIkMcnjJFZtg9LFKor95z8rIR9ng1aYAzf5H%2FpttY1HPoNBxZJTsfkRClcnXFr9yk4H7I9VrpPETNJvOAax1V97axavdhQ68u3t65XpneCVq5umRq6GDVrXFYx7kTG3oRn7NIHTUIlx88L6cLdD9rFSETIxQWAYlaycdi7jJ2L2MmuImSPjSoggVwED3UphCWgPzJRfLzAIYH2ZcWF7xclNmCUrkEfRG5LUhfPlTdo2cZ%2FTtRtKILdQ0GiQ9EULV6ssFBBrhUQSwOoluquRaJ1g%2FcJdUuaAzvubijTZA0lRBSxhtYGcMvZf65FgHH4RWGTLSn%2BB%2BVhZUSTPobH19UatYRjKrtqByPkvy42asM%2FPhPPuKRQXw4aOJTO08vNI7%2FJsuveBXKx0Lk3RQurAhJJ3I68PsyhPUzmEyv64TJxwwksflvQY6pgEKx6F2m0SN%2Fe%2Fmmllp4ys1sC4ho4HnWdNgFG5DTHjcK0tjqO64FNtf8ZUej4FQY%2FBeZ%2F5ZeptMBdFDCyElkb54jr3pc5oTyVz8tA1voiY1hLMnxJsVT%2B53OqPtOfWx9yEzm%2FH96udOsak4uX54xIPn1Rkd2Fw9x3Uk3nAbACAGDFc8BnqvbkhQN4%2B5XT%2FV8n4sVHazLLWiAimghWxUNWTCAVwQ2kOD&X-Amz-Signature=0167fa48ebd09bd7ef4696a821443d0310d70883f0f3ee47c389d0e91526a9d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQXOCYK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyNX2G726fiU%2FJAgXpoStps85zDaSBaV8MV7pN46T%2FOAiBkmNnT3T0%2Bp2WZR8iqmFotn7AUKjX3kBShbukONEd8dCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCazhg63SC5vr5IZhKtwDgxgpeRBI0B1nOsIhWLWBn%2FE1gLimVOA4mvvpj6mlbvpo9Mcngymv1cYJT5JGmB%2BzekpGLGg9mPa%2FCtRIOONEwZOlLe8Srus4myrwsxphRGy0i2K5noiEr%2Fw1sCv0k21w%2FJe9c3r4Ixuj3R8P57iLIdFmsIbySIwyM7yGxyleVM77%2FJSrnrxi%2Bw%2Fe94i6vn9f00t7wUTyeDCLYIRwdIkMcnjJFZtg9LFKor95z8rIR9ng1aYAzf5H%2FpttY1HPoNBxZJTsfkRClcnXFr9yk4H7I9VrpPETNJvOAax1V97axavdhQ68u3t65XpneCVq5umRq6GDVrXFYx7kTG3oRn7NIHTUIlx88L6cLdD9rFSETIxQWAYlaycdi7jJ2L2MmuImSPjSoggVwED3UphCWgPzJRfLzAIYH2ZcWF7xclNmCUrkEfRG5LUhfPlTdo2cZ%2FTtRtKILdQ0GiQ9EULV6ssFBBrhUQSwOoluquRaJ1g%2FcJdUuaAzvubijTZA0lRBSxhtYGcMvZf65FgHH4RWGTLSn%2BB%2BVhZUSTPobH19UatYRjKrtqByPkvy42asM%2FPhPPuKRQXw4aOJTO08vNI7%2FJsuveBXKx0Lk3RQurAhJJ3I68PsyhPUzmEyv64TJxwwksflvQY6pgEKx6F2m0SN%2Fe%2Fmmllp4ys1sC4ho4HnWdNgFG5DTHjcK0tjqO64FNtf8ZUej4FQY%2FBeZ%2F5ZeptMBdFDCyElkb54jr3pc5oTyVz8tA1voiY1hLMnxJsVT%2B53OqPtOfWx9yEzm%2FH96udOsak4uX54xIPn1Rkd2Fw9x3Uk3nAbACAGDFc8BnqvbkhQN4%2B5XT%2FV8n4sVHazLLWiAimghWxUNWTCAVwQ2kOD&X-Amz-Signature=3ef67e49f3a9bd56dfb86ca3d6c050aec7b119aa008412931d86eeb714bb209a&X-Amz-SignedHeaders=host&x-id=GetObject)
