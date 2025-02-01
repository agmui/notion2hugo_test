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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQUVUP3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkDDb30LRqTKJU4e071efDuLVBwj7qOOV%2FzexFSa6YvAiAbs%2FIdcFXkJlHoPsosrjVGg2M06MmAK3tkJPtD%2ButvhyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgIm0mZdeDo%2FM7P2KtwDoBqFwua%2FuTe8YyIGiNpzJJ0E9PpNq8Gbj5fkp0tSNw97r1H5qmpfhA%2BrZ1QSvgzYdfFbVGBtsYnUdR0xLqAmnt4CaoUBvQck1Sh62IQl8iy%2Bmhz2%2BCh4cdBsydftKLEH%2FTRCZLfzALCw390lUeuonMdrX35MCcjemQGY9e7NOji2%2BsuU%2FXwhY5cWpxZtNfjI2hMauCWANLhht%2BYqsYhL4fmS9zn2dZ5rVKYPJdsJcgvJ%2FbB9PqZFOAwHFYSVTA7BqQerlIgnUVmAHzaZODo2BdGHHYlgBPP5NN16JIamicOX6bb%2FSeEZTm%2BkQcj%2FgnyQ9wYLdKQ4WYksRFUZC2Wibgl1G%2FjAHu57RWT8%2FVPHky1pmWvtjxOW2JqIPaXFSsxWx%2B34emQEbh885hrEA0TO192ZVN12urJLAhXwq80ukhJGLEaMXBJinu0Ymhhh3BLKu9t11zBJmYorAPAbv5OYCaJEA96dScL6UCfhp1Mr4k17lHVD%2BwE%2BrpH6FzUsMJMkXSbQ%2F%2BR4IbBBUY0wBWVyCQBoBoodd5kyRNsKoR4HpG3peAro7dLaNwt7um2X0%2FOIgo%2FZEt1PX2guYriBjjB0kwARjVGHhwpVr%2F6P%2BZhx6AgdtRISoCVZ7%2BExxEown8b4vAY6pgH1licvNdnOzLou3NH%2Fod8dD9Simol%2FrX23ACWIbQA4gvghmuVtjDxDdxMBzCv%2BaUtkqESJRBhB6bq%2Bvt31%2F%2Fy41KOAT8Srt6pAq73nh6Hd%2FdvOhMPTIzMsGI%2BxH4Wj9xpHznNjKG2zAewtoDxnq5Q%2B2JZS5%2B5Lnwhjo9HSVNbVemtSW6%2F%2Byccyp7bZaXeFDN%2BfORWnlvcnRKjfLJgOytYKh%2B5dPe6f&X-Amz-Signature=ef6e7aa15fcfbaab6fa27eb5e790d11564d2544debba04ad7a53cb4f5ade1b04&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQUVUP3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkDDb30LRqTKJU4e071efDuLVBwj7qOOV%2FzexFSa6YvAiAbs%2FIdcFXkJlHoPsosrjVGg2M06MmAK3tkJPtD%2ButvhyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgIm0mZdeDo%2FM7P2KtwDoBqFwua%2FuTe8YyIGiNpzJJ0E9PpNq8Gbj5fkp0tSNw97r1H5qmpfhA%2BrZ1QSvgzYdfFbVGBtsYnUdR0xLqAmnt4CaoUBvQck1Sh62IQl8iy%2Bmhz2%2BCh4cdBsydftKLEH%2FTRCZLfzALCw390lUeuonMdrX35MCcjemQGY9e7NOji2%2BsuU%2FXwhY5cWpxZtNfjI2hMauCWANLhht%2BYqsYhL4fmS9zn2dZ5rVKYPJdsJcgvJ%2FbB9PqZFOAwHFYSVTA7BqQerlIgnUVmAHzaZODo2BdGHHYlgBPP5NN16JIamicOX6bb%2FSeEZTm%2BkQcj%2FgnyQ9wYLdKQ4WYksRFUZC2Wibgl1G%2FjAHu57RWT8%2FVPHky1pmWvtjxOW2JqIPaXFSsxWx%2B34emQEbh885hrEA0TO192ZVN12urJLAhXwq80ukhJGLEaMXBJinu0Ymhhh3BLKu9t11zBJmYorAPAbv5OYCaJEA96dScL6UCfhp1Mr4k17lHVD%2BwE%2BrpH6FzUsMJMkXSbQ%2F%2BR4IbBBUY0wBWVyCQBoBoodd5kyRNsKoR4HpG3peAro7dLaNwt7um2X0%2FOIgo%2FZEt1PX2guYriBjjB0kwARjVGHhwpVr%2F6P%2BZhx6AgdtRISoCVZ7%2BExxEown8b4vAY6pgH1licvNdnOzLou3NH%2Fod8dD9Simol%2FrX23ACWIbQA4gvghmuVtjDxDdxMBzCv%2BaUtkqESJRBhB6bq%2Bvt31%2F%2Fy41KOAT8Srt6pAq73nh6Hd%2FdvOhMPTIzMsGI%2BxH4Wj9xpHznNjKG2zAewtoDxnq5Q%2B2JZS5%2B5Lnwhjo9HSVNbVemtSW6%2F%2Byccyp7bZaXeFDN%2BfORWnlvcnRKjfLJgOytYKh%2B5dPe6f&X-Amz-Signature=500a6c38fc3e8710347cb85613b272d09b478b19a3bad2b43615c04446fda688&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQUVUP3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkDDb30LRqTKJU4e071efDuLVBwj7qOOV%2FzexFSa6YvAiAbs%2FIdcFXkJlHoPsosrjVGg2M06MmAK3tkJPtD%2ButvhyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgIm0mZdeDo%2FM7P2KtwDoBqFwua%2FuTe8YyIGiNpzJJ0E9PpNq8Gbj5fkp0tSNw97r1H5qmpfhA%2BrZ1QSvgzYdfFbVGBtsYnUdR0xLqAmnt4CaoUBvQck1Sh62IQl8iy%2Bmhz2%2BCh4cdBsydftKLEH%2FTRCZLfzALCw390lUeuonMdrX35MCcjemQGY9e7NOji2%2BsuU%2FXwhY5cWpxZtNfjI2hMauCWANLhht%2BYqsYhL4fmS9zn2dZ5rVKYPJdsJcgvJ%2FbB9PqZFOAwHFYSVTA7BqQerlIgnUVmAHzaZODo2BdGHHYlgBPP5NN16JIamicOX6bb%2FSeEZTm%2BkQcj%2FgnyQ9wYLdKQ4WYksRFUZC2Wibgl1G%2FjAHu57RWT8%2FVPHky1pmWvtjxOW2JqIPaXFSsxWx%2B34emQEbh885hrEA0TO192ZVN12urJLAhXwq80ukhJGLEaMXBJinu0Ymhhh3BLKu9t11zBJmYorAPAbv5OYCaJEA96dScL6UCfhp1Mr4k17lHVD%2BwE%2BrpH6FzUsMJMkXSbQ%2F%2BR4IbBBUY0wBWVyCQBoBoodd5kyRNsKoR4HpG3peAro7dLaNwt7um2X0%2FOIgo%2FZEt1PX2guYriBjjB0kwARjVGHhwpVr%2F6P%2BZhx6AgdtRISoCVZ7%2BExxEown8b4vAY6pgH1licvNdnOzLou3NH%2Fod8dD9Simol%2FrX23ACWIbQA4gvghmuVtjDxDdxMBzCv%2BaUtkqESJRBhB6bq%2Bvt31%2F%2Fy41KOAT8Srt6pAq73nh6Hd%2FdvOhMPTIzMsGI%2BxH4Wj9xpHznNjKG2zAewtoDxnq5Q%2B2JZS5%2B5Lnwhjo9HSVNbVemtSW6%2F%2Byccyp7bZaXeFDN%2BfORWnlvcnRKjfLJgOytYKh%2B5dPe6f&X-Amz-Signature=cca5db1327eafb86265f73a19dd6f3dd7ea2fe3347b41829cb67a33ae50beacf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQUVUP3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkDDb30LRqTKJU4e071efDuLVBwj7qOOV%2FzexFSa6YvAiAbs%2FIdcFXkJlHoPsosrjVGg2M06MmAK3tkJPtD%2ButvhyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgIm0mZdeDo%2FM7P2KtwDoBqFwua%2FuTe8YyIGiNpzJJ0E9PpNq8Gbj5fkp0tSNw97r1H5qmpfhA%2BrZ1QSvgzYdfFbVGBtsYnUdR0xLqAmnt4CaoUBvQck1Sh62IQl8iy%2Bmhz2%2BCh4cdBsydftKLEH%2FTRCZLfzALCw390lUeuonMdrX35MCcjemQGY9e7NOji2%2BsuU%2FXwhY5cWpxZtNfjI2hMauCWANLhht%2BYqsYhL4fmS9zn2dZ5rVKYPJdsJcgvJ%2FbB9PqZFOAwHFYSVTA7BqQerlIgnUVmAHzaZODo2BdGHHYlgBPP5NN16JIamicOX6bb%2FSeEZTm%2BkQcj%2FgnyQ9wYLdKQ4WYksRFUZC2Wibgl1G%2FjAHu57RWT8%2FVPHky1pmWvtjxOW2JqIPaXFSsxWx%2B34emQEbh885hrEA0TO192ZVN12urJLAhXwq80ukhJGLEaMXBJinu0Ymhhh3BLKu9t11zBJmYorAPAbv5OYCaJEA96dScL6UCfhp1Mr4k17lHVD%2BwE%2BrpH6FzUsMJMkXSbQ%2F%2BR4IbBBUY0wBWVyCQBoBoodd5kyRNsKoR4HpG3peAro7dLaNwt7um2X0%2FOIgo%2FZEt1PX2guYriBjjB0kwARjVGHhwpVr%2F6P%2BZhx6AgdtRISoCVZ7%2BExxEown8b4vAY6pgH1licvNdnOzLou3NH%2Fod8dD9Simol%2FrX23ACWIbQA4gvghmuVtjDxDdxMBzCv%2BaUtkqESJRBhB6bq%2Bvt31%2F%2Fy41KOAT8Srt6pAq73nh6Hd%2FdvOhMPTIzMsGI%2BxH4Wj9xpHznNjKG2zAewtoDxnq5Q%2B2JZS5%2B5Lnwhjo9HSVNbVemtSW6%2F%2Byccyp7bZaXeFDN%2BfORWnlvcnRKjfLJgOytYKh%2B5dPe6f&X-Amz-Signature=f9300b62a03fa51f1bd816a8c4b94f5eed6bea34e1d85417043cf648bd9d0ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQUVUP3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkDDb30LRqTKJU4e071efDuLVBwj7qOOV%2FzexFSa6YvAiAbs%2FIdcFXkJlHoPsosrjVGg2M06MmAK3tkJPtD%2ButvhyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgIm0mZdeDo%2FM7P2KtwDoBqFwua%2FuTe8YyIGiNpzJJ0E9PpNq8Gbj5fkp0tSNw97r1H5qmpfhA%2BrZ1QSvgzYdfFbVGBtsYnUdR0xLqAmnt4CaoUBvQck1Sh62IQl8iy%2Bmhz2%2BCh4cdBsydftKLEH%2FTRCZLfzALCw390lUeuonMdrX35MCcjemQGY9e7NOji2%2BsuU%2FXwhY5cWpxZtNfjI2hMauCWANLhht%2BYqsYhL4fmS9zn2dZ5rVKYPJdsJcgvJ%2FbB9PqZFOAwHFYSVTA7BqQerlIgnUVmAHzaZODo2BdGHHYlgBPP5NN16JIamicOX6bb%2FSeEZTm%2BkQcj%2FgnyQ9wYLdKQ4WYksRFUZC2Wibgl1G%2FjAHu57RWT8%2FVPHky1pmWvtjxOW2JqIPaXFSsxWx%2B34emQEbh885hrEA0TO192ZVN12urJLAhXwq80ukhJGLEaMXBJinu0Ymhhh3BLKu9t11zBJmYorAPAbv5OYCaJEA96dScL6UCfhp1Mr4k17lHVD%2BwE%2BrpH6FzUsMJMkXSbQ%2F%2BR4IbBBUY0wBWVyCQBoBoodd5kyRNsKoR4HpG3peAro7dLaNwt7um2X0%2FOIgo%2FZEt1PX2guYriBjjB0kwARjVGHhwpVr%2F6P%2BZhx6AgdtRISoCVZ7%2BExxEown8b4vAY6pgH1licvNdnOzLou3NH%2Fod8dD9Simol%2FrX23ACWIbQA4gvghmuVtjDxDdxMBzCv%2BaUtkqESJRBhB6bq%2Bvt31%2F%2Fy41KOAT8Srt6pAq73nh6Hd%2FdvOhMPTIzMsGI%2BxH4Wj9xpHznNjKG2zAewtoDxnq5Q%2B2JZS5%2B5Lnwhjo9HSVNbVemtSW6%2F%2Byccyp7bZaXeFDN%2BfORWnlvcnRKjfLJgOytYKh%2B5dPe6f&X-Amz-Signature=12bc8965b6187231e9bf991c0d94053219d6c8051915746ea87fc152bbacf5da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQUVUP3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDkDDb30LRqTKJU4e071efDuLVBwj7qOOV%2FzexFSa6YvAiAbs%2FIdcFXkJlHoPsosrjVGg2M06MmAK3tkJPtD%2ButvhyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXgIm0mZdeDo%2FM7P2KtwDoBqFwua%2FuTe8YyIGiNpzJJ0E9PpNq8Gbj5fkp0tSNw97r1H5qmpfhA%2BrZ1QSvgzYdfFbVGBtsYnUdR0xLqAmnt4CaoUBvQck1Sh62IQl8iy%2Bmhz2%2BCh4cdBsydftKLEH%2FTRCZLfzALCw390lUeuonMdrX35MCcjemQGY9e7NOji2%2BsuU%2FXwhY5cWpxZtNfjI2hMauCWANLhht%2BYqsYhL4fmS9zn2dZ5rVKYPJdsJcgvJ%2FbB9PqZFOAwHFYSVTA7BqQerlIgnUVmAHzaZODo2BdGHHYlgBPP5NN16JIamicOX6bb%2FSeEZTm%2BkQcj%2FgnyQ9wYLdKQ4WYksRFUZC2Wibgl1G%2FjAHu57RWT8%2FVPHky1pmWvtjxOW2JqIPaXFSsxWx%2B34emQEbh885hrEA0TO192ZVN12urJLAhXwq80ukhJGLEaMXBJinu0Ymhhh3BLKu9t11zBJmYorAPAbv5OYCaJEA96dScL6UCfhp1Mr4k17lHVD%2BwE%2BrpH6FzUsMJMkXSbQ%2F%2BR4IbBBUY0wBWVyCQBoBoodd5kyRNsKoR4HpG3peAro7dLaNwt7um2X0%2FOIgo%2FZEt1PX2guYriBjjB0kwARjVGHhwpVr%2F6P%2BZhx6AgdtRISoCVZ7%2BExxEown8b4vAY6pgH1licvNdnOzLou3NH%2Fod8dD9Simol%2FrX23ACWIbQA4gvghmuVtjDxDdxMBzCv%2BaUtkqESJRBhB6bq%2Bvt31%2F%2Fy41KOAT8Srt6pAq73nh6Hd%2FdvOhMPTIzMsGI%2BxH4Wj9xpHznNjKG2zAewtoDxnq5Q%2B2JZS5%2B5Lnwhjo9HSVNbVemtSW6%2F%2Byccyp7bZaXeFDN%2BfORWnlvcnRKjfLJgOytYKh%2B5dPe6f&X-Amz-Signature=104cf534fc594f97cf26a5c58098fbac712bfba8a796a35ea67fd2bd31e17aed&X-Amz-SignedHeaders=host&x-id=GetObject)
