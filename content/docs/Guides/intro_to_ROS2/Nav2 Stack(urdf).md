---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3TZRDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHheGvR5nNGLgvLTyXqLowDUDqbsvA%2BAZwx3cTCPJMirAiEA%2Bs%2FizqlmfTkalhEy1mzlQ7yyeFtFhy1Kxjfv1Bz7A0MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDE3F8bcwBBwSlwJgCrcA6k%2FB1M1wOLT%2BKlQoJIX8vrOV2fnQ3B7iYIhfZr%2BjhnZvPtNkf%2FHRFmQhN4yKVXWdonCI8Df%2BcGT6tlYy%2FY%2FcjZe%2BRuLgVcIP5FA36S2TY8dpCIm5dgqzyB9flJvhkYaDkcWH7LZewdbHy9ZfRx%2F%2FyLCsSCGuJvYSW%2BZZq2XCGrrDyVCpxAxCjnwZgl67ozREmRO4ee5jpjXDmE14KNxt%2BNcP2zZ1aOFl5bbWi%2FhM2YmWaDPB0rUj%2F2KZlkFBpFm6p8NngtC9YJYRltRm8fWrP0n1sM%2FQmSB%2F1UcY0pz3mBKqXwtmRRk8FMSi9Qo0kHhRcpidNcUJAVL7yfLDwdVvVwxo0MnTjfyiZyRHBmTbtbiRzCsOn1TnAr9rSKuVL8fbw2sRmS09PzP9yj3rVhU5GpFYhiwlDpR%2FNVOYomJnGmfACfZJW2cf3G2TeDu3hve0C72hQ88gvAVRW14MFwr0f3olib1ANGSH3gwG%2Ftz%2BKvGLAj6FMVbzB4EzM9x2wOd1r6zYaIC%2F4Ul0nMFo0GsW9gdmx1ix3Oa6af6EC%2B6bZg5w4tvPKJ5MTykdmeel3RTebn31ktq5Lc1VPsJo7csHlY29JEzfcsp1%2FLXUGUYkmEZ9V0as88i8WLly8vuMNGl97wGOqUB6LnrApc2FX7pQPPhrxytvnskP51W4v4bESOpXQ%2BnWChkKsVnZ6irBTE7MpXM8BLLdmpJKcXo%2F9XXqHUMCu4I58GEUNjVafiU%2Fp4FGF0M7ptcxglUEW4twYyYNKQx1XmhRbfAjEi3XLoAluZ81CzCJAEmnWGiLhZzV9pgRUJU%2BTrfIq1TF9hdFla%2B9qYEditNVbRr9uB%2BQxx6y%2BcOOEIpnjy3K7KD&X-Amz-Signature=20af4030c7ebf696f2727172da071104d7bd8c1bdcdafa641f1c559f46d4709c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3TZRDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHheGvR5nNGLgvLTyXqLowDUDqbsvA%2BAZwx3cTCPJMirAiEA%2Bs%2FizqlmfTkalhEy1mzlQ7yyeFtFhy1Kxjfv1Bz7A0MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDE3F8bcwBBwSlwJgCrcA6k%2FB1M1wOLT%2BKlQoJIX8vrOV2fnQ3B7iYIhfZr%2BjhnZvPtNkf%2FHRFmQhN4yKVXWdonCI8Df%2BcGT6tlYy%2FY%2FcjZe%2BRuLgVcIP5FA36S2TY8dpCIm5dgqzyB9flJvhkYaDkcWH7LZewdbHy9ZfRx%2F%2FyLCsSCGuJvYSW%2BZZq2XCGrrDyVCpxAxCjnwZgl67ozREmRO4ee5jpjXDmE14KNxt%2BNcP2zZ1aOFl5bbWi%2FhM2YmWaDPB0rUj%2F2KZlkFBpFm6p8NngtC9YJYRltRm8fWrP0n1sM%2FQmSB%2F1UcY0pz3mBKqXwtmRRk8FMSi9Qo0kHhRcpidNcUJAVL7yfLDwdVvVwxo0MnTjfyiZyRHBmTbtbiRzCsOn1TnAr9rSKuVL8fbw2sRmS09PzP9yj3rVhU5GpFYhiwlDpR%2FNVOYomJnGmfACfZJW2cf3G2TeDu3hve0C72hQ88gvAVRW14MFwr0f3olib1ANGSH3gwG%2Ftz%2BKvGLAj6FMVbzB4EzM9x2wOd1r6zYaIC%2F4Ul0nMFo0GsW9gdmx1ix3Oa6af6EC%2B6bZg5w4tvPKJ5MTykdmeel3RTebn31ktq5Lc1VPsJo7csHlY29JEzfcsp1%2FLXUGUYkmEZ9V0as88i8WLly8vuMNGl97wGOqUB6LnrApc2FX7pQPPhrxytvnskP51W4v4bESOpXQ%2BnWChkKsVnZ6irBTE7MpXM8BLLdmpJKcXo%2F9XXqHUMCu4I58GEUNjVafiU%2Fp4FGF0M7ptcxglUEW4twYyYNKQx1XmhRbfAjEi3XLoAluZ81CzCJAEmnWGiLhZzV9pgRUJU%2BTrfIq1TF9hdFla%2B9qYEditNVbRr9uB%2BQxx6y%2BcOOEIpnjy3K7KD&X-Amz-Signature=29093c2afb2d1f7cee16c8eeb541d58489f978c552054e47be075b6128a14ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3TZRDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHheGvR5nNGLgvLTyXqLowDUDqbsvA%2BAZwx3cTCPJMirAiEA%2Bs%2FizqlmfTkalhEy1mzlQ7yyeFtFhy1Kxjfv1Bz7A0MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDE3F8bcwBBwSlwJgCrcA6k%2FB1M1wOLT%2BKlQoJIX8vrOV2fnQ3B7iYIhfZr%2BjhnZvPtNkf%2FHRFmQhN4yKVXWdonCI8Df%2BcGT6tlYy%2FY%2FcjZe%2BRuLgVcIP5FA36S2TY8dpCIm5dgqzyB9flJvhkYaDkcWH7LZewdbHy9ZfRx%2F%2FyLCsSCGuJvYSW%2BZZq2XCGrrDyVCpxAxCjnwZgl67ozREmRO4ee5jpjXDmE14KNxt%2BNcP2zZ1aOFl5bbWi%2FhM2YmWaDPB0rUj%2F2KZlkFBpFm6p8NngtC9YJYRltRm8fWrP0n1sM%2FQmSB%2F1UcY0pz3mBKqXwtmRRk8FMSi9Qo0kHhRcpidNcUJAVL7yfLDwdVvVwxo0MnTjfyiZyRHBmTbtbiRzCsOn1TnAr9rSKuVL8fbw2sRmS09PzP9yj3rVhU5GpFYhiwlDpR%2FNVOYomJnGmfACfZJW2cf3G2TeDu3hve0C72hQ88gvAVRW14MFwr0f3olib1ANGSH3gwG%2Ftz%2BKvGLAj6FMVbzB4EzM9x2wOd1r6zYaIC%2F4Ul0nMFo0GsW9gdmx1ix3Oa6af6EC%2B6bZg5w4tvPKJ5MTykdmeel3RTebn31ktq5Lc1VPsJo7csHlY29JEzfcsp1%2FLXUGUYkmEZ9V0as88i8WLly8vuMNGl97wGOqUB6LnrApc2FX7pQPPhrxytvnskP51W4v4bESOpXQ%2BnWChkKsVnZ6irBTE7MpXM8BLLdmpJKcXo%2F9XXqHUMCu4I58GEUNjVafiU%2Fp4FGF0M7ptcxglUEW4twYyYNKQx1XmhRbfAjEi3XLoAluZ81CzCJAEmnWGiLhZzV9pgRUJU%2BTrfIq1TF9hdFla%2B9qYEditNVbRr9uB%2BQxx6y%2BcOOEIpnjy3K7KD&X-Amz-Signature=4631b7211b750e205a5e942f186e3f50f73ecbab293c887aaadeed713915c09a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3TZRDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHheGvR5nNGLgvLTyXqLowDUDqbsvA%2BAZwx3cTCPJMirAiEA%2Bs%2FizqlmfTkalhEy1mzlQ7yyeFtFhy1Kxjfv1Bz7A0MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDE3F8bcwBBwSlwJgCrcA6k%2FB1M1wOLT%2BKlQoJIX8vrOV2fnQ3B7iYIhfZr%2BjhnZvPtNkf%2FHRFmQhN4yKVXWdonCI8Df%2BcGT6tlYy%2FY%2FcjZe%2BRuLgVcIP5FA36S2TY8dpCIm5dgqzyB9flJvhkYaDkcWH7LZewdbHy9ZfRx%2F%2FyLCsSCGuJvYSW%2BZZq2XCGrrDyVCpxAxCjnwZgl67ozREmRO4ee5jpjXDmE14KNxt%2BNcP2zZ1aOFl5bbWi%2FhM2YmWaDPB0rUj%2F2KZlkFBpFm6p8NngtC9YJYRltRm8fWrP0n1sM%2FQmSB%2F1UcY0pz3mBKqXwtmRRk8FMSi9Qo0kHhRcpidNcUJAVL7yfLDwdVvVwxo0MnTjfyiZyRHBmTbtbiRzCsOn1TnAr9rSKuVL8fbw2sRmS09PzP9yj3rVhU5GpFYhiwlDpR%2FNVOYomJnGmfACfZJW2cf3G2TeDu3hve0C72hQ88gvAVRW14MFwr0f3olib1ANGSH3gwG%2Ftz%2BKvGLAj6FMVbzB4EzM9x2wOd1r6zYaIC%2F4Ul0nMFo0GsW9gdmx1ix3Oa6af6EC%2B6bZg5w4tvPKJ5MTykdmeel3RTebn31ktq5Lc1VPsJo7csHlY29JEzfcsp1%2FLXUGUYkmEZ9V0as88i8WLly8vuMNGl97wGOqUB6LnrApc2FX7pQPPhrxytvnskP51W4v4bESOpXQ%2BnWChkKsVnZ6irBTE7MpXM8BLLdmpJKcXo%2F9XXqHUMCu4I58GEUNjVafiU%2Fp4FGF0M7ptcxglUEW4twYyYNKQx1XmhRbfAjEi3XLoAluZ81CzCJAEmnWGiLhZzV9pgRUJU%2BTrfIq1TF9hdFla%2B9qYEditNVbRr9uB%2BQxx6y%2BcOOEIpnjy3K7KD&X-Amz-Signature=acbcb997a9c0cca90f026f878f978a0ad875fec9586dec7fb6e9bc337ab68064&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3TZRDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHheGvR5nNGLgvLTyXqLowDUDqbsvA%2BAZwx3cTCPJMirAiEA%2Bs%2FizqlmfTkalhEy1mzlQ7yyeFtFhy1Kxjfv1Bz7A0MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDE3F8bcwBBwSlwJgCrcA6k%2FB1M1wOLT%2BKlQoJIX8vrOV2fnQ3B7iYIhfZr%2BjhnZvPtNkf%2FHRFmQhN4yKVXWdonCI8Df%2BcGT6tlYy%2FY%2FcjZe%2BRuLgVcIP5FA36S2TY8dpCIm5dgqzyB9flJvhkYaDkcWH7LZewdbHy9ZfRx%2F%2FyLCsSCGuJvYSW%2BZZq2XCGrrDyVCpxAxCjnwZgl67ozREmRO4ee5jpjXDmE14KNxt%2BNcP2zZ1aOFl5bbWi%2FhM2YmWaDPB0rUj%2F2KZlkFBpFm6p8NngtC9YJYRltRm8fWrP0n1sM%2FQmSB%2F1UcY0pz3mBKqXwtmRRk8FMSi9Qo0kHhRcpidNcUJAVL7yfLDwdVvVwxo0MnTjfyiZyRHBmTbtbiRzCsOn1TnAr9rSKuVL8fbw2sRmS09PzP9yj3rVhU5GpFYhiwlDpR%2FNVOYomJnGmfACfZJW2cf3G2TeDu3hve0C72hQ88gvAVRW14MFwr0f3olib1ANGSH3gwG%2Ftz%2BKvGLAj6FMVbzB4EzM9x2wOd1r6zYaIC%2F4Ul0nMFo0GsW9gdmx1ix3Oa6af6EC%2B6bZg5w4tvPKJ5MTykdmeel3RTebn31ktq5Lc1VPsJo7csHlY29JEzfcsp1%2FLXUGUYkmEZ9V0as88i8WLly8vuMNGl97wGOqUB6LnrApc2FX7pQPPhrxytvnskP51W4v4bESOpXQ%2BnWChkKsVnZ6irBTE7MpXM8BLLdmpJKcXo%2F9XXqHUMCu4I58GEUNjVafiU%2Fp4FGF0M7ptcxglUEW4twYyYNKQx1XmhRbfAjEi3XLoAluZ81CzCJAEmnWGiLhZzV9pgRUJU%2BTrfIq1TF9hdFla%2B9qYEditNVbRr9uB%2BQxx6y%2BcOOEIpnjy3K7KD&X-Amz-Signature=665aee61b49d1f3c05846eaff6d23cb264082c3a8149d2b44806652e60661508&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF3TZRDR%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHheGvR5nNGLgvLTyXqLowDUDqbsvA%2BAZwx3cTCPJMirAiEA%2Bs%2FizqlmfTkalhEy1mzlQ7yyeFtFhy1Kxjfv1Bz7A0MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDE3F8bcwBBwSlwJgCrcA6k%2FB1M1wOLT%2BKlQoJIX8vrOV2fnQ3B7iYIhfZr%2BjhnZvPtNkf%2FHRFmQhN4yKVXWdonCI8Df%2BcGT6tlYy%2FY%2FcjZe%2BRuLgVcIP5FA36S2TY8dpCIm5dgqzyB9flJvhkYaDkcWH7LZewdbHy9ZfRx%2F%2FyLCsSCGuJvYSW%2BZZq2XCGrrDyVCpxAxCjnwZgl67ozREmRO4ee5jpjXDmE14KNxt%2BNcP2zZ1aOFl5bbWi%2FhM2YmWaDPB0rUj%2F2KZlkFBpFm6p8NngtC9YJYRltRm8fWrP0n1sM%2FQmSB%2F1UcY0pz3mBKqXwtmRRk8FMSi9Qo0kHhRcpidNcUJAVL7yfLDwdVvVwxo0MnTjfyiZyRHBmTbtbiRzCsOn1TnAr9rSKuVL8fbw2sRmS09PzP9yj3rVhU5GpFYhiwlDpR%2FNVOYomJnGmfACfZJW2cf3G2TeDu3hve0C72hQ88gvAVRW14MFwr0f3olib1ANGSH3gwG%2Ftz%2BKvGLAj6FMVbzB4EzM9x2wOd1r6zYaIC%2F4Ul0nMFo0GsW9gdmx1ix3Oa6af6EC%2B6bZg5w4tvPKJ5MTykdmeel3RTebn31ktq5Lc1VPsJo7csHlY29JEzfcsp1%2FLXUGUYkmEZ9V0as88i8WLly8vuMNGl97wGOqUB6LnrApc2FX7pQPPhrxytvnskP51W4v4bESOpXQ%2BnWChkKsVnZ6irBTE7MpXM8BLLdmpJKcXo%2F9XXqHUMCu4I58GEUNjVafiU%2Fp4FGF0M7ptcxglUEW4twYyYNKQx1XmhRbfAjEi3XLoAluZ81CzCJAEmnWGiLhZzV9pgRUJU%2BTrfIq1TF9hdFla%2B9qYEditNVbRr9uB%2BQxx6y%2BcOOEIpnjy3K7KD&X-Amz-Signature=cafad3fab60e0eb198a75255116dbaa145e305ea33c4a844f4df3e76d14324d7&X-Amz-SignedHeaders=host&x-id=GetObject)
