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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHOTAP5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgPZ4YCWQDCDvoW8fzz8rppnj%2BPKQui6H92%2BR4P7NBdgIhANutGfPHI47FyPZN9KQf4sNJpTd3eKEbZHvQMu7lIbmvKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6MswgPUr5LqFtf8Uq3AMlw%2FkBA7sBO8hhYMWGU03FVyUlVArHLAnj1P%2BIx5MNT%2FI9r8qE4CnqkQOlWAaj24ylVfV626WOAwTpukf2fc%2BKCJMkb6CJpcMDXIXjsrmaO2FPUA27L5hadMSAUHjIsn%2FRw53s2JfRguMp2XfCe4MS%2BDCF9HRiSsjI%2BgoKGw60SjVvt%2FJF5ctT4IAhe6s2rrmwzHOanWn5Q%2BahtMzNCD%2F%2Bo%2FxE%2FlSJxDZBMo6yGg0YXQ62o%2FkR4q2r8KWB8X%2B1qptel0HP8rcmXlTr7ckXZ3TIXUYIKuF7K0owNyGV0C%2BU0edNVpmnncNk9c1BkE%2BGYiP23BWcOB%2FxtKDx0NHxlZjNAbKSvCNjsccEPrIFpHgL8BoshMTPn22VS3qKJLExNwpSj4HAgexkgAIDpWg%2BldT11QjDaS2tKuWjnTseTSzhdkM5LG3cDuE5ETA4War8jfTpfoo%2B4hEisruMq1KrmgmnASogIpP6GHjFkXdlm%2FQWUQG7pzci6hlDHOOpOnJnTcPPApZPS9kutRCbbXNcMez8Fs6%2BMTpcmr0UBe8kcwMjdnUGS0YS6mF9JVASSAEXlAt5F0iwVTma5vcdgG8f9PHhz3Rz5%2BTuWVMfufNqK2I6ZASOH6tsoc36TJGXuzDSk82%2BBjqkAZqkvE%2B2xnKtfKWfAhF8TVZFLDexvvFysLuFeUquLsF0DVP9cvZePJp%2FR19iaILvDMzO5yoEua6tY8EKV9wvERpn7z3jxOZ1K8qCMNHkRnZtnl0uI26IaJgszIdJOx4K7QX0tMZjO9EDZU5CexCINkFWgSbk%2FKAyHS%2B%2BkS206KAeayvQqtl027vPopn19XOPNMh8xW0%2FlzHlO8B1tZcEmiFNV%2Ft2&X-Amz-Signature=0d46540f5d047891484f66dab0abadac0c2c7c6e36516d7a438a81ee36c78c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHOTAP5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgPZ4YCWQDCDvoW8fzz8rppnj%2BPKQui6H92%2BR4P7NBdgIhANutGfPHI47FyPZN9KQf4sNJpTd3eKEbZHvQMu7lIbmvKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6MswgPUr5LqFtf8Uq3AMlw%2FkBA7sBO8hhYMWGU03FVyUlVArHLAnj1P%2BIx5MNT%2FI9r8qE4CnqkQOlWAaj24ylVfV626WOAwTpukf2fc%2BKCJMkb6CJpcMDXIXjsrmaO2FPUA27L5hadMSAUHjIsn%2FRw53s2JfRguMp2XfCe4MS%2BDCF9HRiSsjI%2BgoKGw60SjVvt%2FJF5ctT4IAhe6s2rrmwzHOanWn5Q%2BahtMzNCD%2F%2Bo%2FxE%2FlSJxDZBMo6yGg0YXQ62o%2FkR4q2r8KWB8X%2B1qptel0HP8rcmXlTr7ckXZ3TIXUYIKuF7K0owNyGV0C%2BU0edNVpmnncNk9c1BkE%2BGYiP23BWcOB%2FxtKDx0NHxlZjNAbKSvCNjsccEPrIFpHgL8BoshMTPn22VS3qKJLExNwpSj4HAgexkgAIDpWg%2BldT11QjDaS2tKuWjnTseTSzhdkM5LG3cDuE5ETA4War8jfTpfoo%2B4hEisruMq1KrmgmnASogIpP6GHjFkXdlm%2FQWUQG7pzci6hlDHOOpOnJnTcPPApZPS9kutRCbbXNcMez8Fs6%2BMTpcmr0UBe8kcwMjdnUGS0YS6mF9JVASSAEXlAt5F0iwVTma5vcdgG8f9PHhz3Rz5%2BTuWVMfufNqK2I6ZASOH6tsoc36TJGXuzDSk82%2BBjqkAZqkvE%2B2xnKtfKWfAhF8TVZFLDexvvFysLuFeUquLsF0DVP9cvZePJp%2FR19iaILvDMzO5yoEua6tY8EKV9wvERpn7z3jxOZ1K8qCMNHkRnZtnl0uI26IaJgszIdJOx4K7QX0tMZjO9EDZU5CexCINkFWgSbk%2FKAyHS%2B%2BkS206KAeayvQqtl027vPopn19XOPNMh8xW0%2FlzHlO8B1tZcEmiFNV%2Ft2&X-Amz-Signature=735a440898cc011ce809caf723f3afe4ead0af6df8bdfb794a7b1de05951a839&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHOTAP5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgPZ4YCWQDCDvoW8fzz8rppnj%2BPKQui6H92%2BR4P7NBdgIhANutGfPHI47FyPZN9KQf4sNJpTd3eKEbZHvQMu7lIbmvKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6MswgPUr5LqFtf8Uq3AMlw%2FkBA7sBO8hhYMWGU03FVyUlVArHLAnj1P%2BIx5MNT%2FI9r8qE4CnqkQOlWAaj24ylVfV626WOAwTpukf2fc%2BKCJMkb6CJpcMDXIXjsrmaO2FPUA27L5hadMSAUHjIsn%2FRw53s2JfRguMp2XfCe4MS%2BDCF9HRiSsjI%2BgoKGw60SjVvt%2FJF5ctT4IAhe6s2rrmwzHOanWn5Q%2BahtMzNCD%2F%2Bo%2FxE%2FlSJxDZBMo6yGg0YXQ62o%2FkR4q2r8KWB8X%2B1qptel0HP8rcmXlTr7ckXZ3TIXUYIKuF7K0owNyGV0C%2BU0edNVpmnncNk9c1BkE%2BGYiP23BWcOB%2FxtKDx0NHxlZjNAbKSvCNjsccEPrIFpHgL8BoshMTPn22VS3qKJLExNwpSj4HAgexkgAIDpWg%2BldT11QjDaS2tKuWjnTseTSzhdkM5LG3cDuE5ETA4War8jfTpfoo%2B4hEisruMq1KrmgmnASogIpP6GHjFkXdlm%2FQWUQG7pzci6hlDHOOpOnJnTcPPApZPS9kutRCbbXNcMez8Fs6%2BMTpcmr0UBe8kcwMjdnUGS0YS6mF9JVASSAEXlAt5F0iwVTma5vcdgG8f9PHhz3Rz5%2BTuWVMfufNqK2I6ZASOH6tsoc36TJGXuzDSk82%2BBjqkAZqkvE%2B2xnKtfKWfAhF8TVZFLDexvvFysLuFeUquLsF0DVP9cvZePJp%2FR19iaILvDMzO5yoEua6tY8EKV9wvERpn7z3jxOZ1K8qCMNHkRnZtnl0uI26IaJgszIdJOx4K7QX0tMZjO9EDZU5CexCINkFWgSbk%2FKAyHS%2B%2BkS206KAeayvQqtl027vPopn19XOPNMh8xW0%2FlzHlO8B1tZcEmiFNV%2Ft2&X-Amz-Signature=58b4ca4d78a5f16cfe543083d85e9234e563c5b124229af390a674e499ba08f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHOTAP5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgPZ4YCWQDCDvoW8fzz8rppnj%2BPKQui6H92%2BR4P7NBdgIhANutGfPHI47FyPZN9KQf4sNJpTd3eKEbZHvQMu7lIbmvKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6MswgPUr5LqFtf8Uq3AMlw%2FkBA7sBO8hhYMWGU03FVyUlVArHLAnj1P%2BIx5MNT%2FI9r8qE4CnqkQOlWAaj24ylVfV626WOAwTpukf2fc%2BKCJMkb6CJpcMDXIXjsrmaO2FPUA27L5hadMSAUHjIsn%2FRw53s2JfRguMp2XfCe4MS%2BDCF9HRiSsjI%2BgoKGw60SjVvt%2FJF5ctT4IAhe6s2rrmwzHOanWn5Q%2BahtMzNCD%2F%2Bo%2FxE%2FlSJxDZBMo6yGg0YXQ62o%2FkR4q2r8KWB8X%2B1qptel0HP8rcmXlTr7ckXZ3TIXUYIKuF7K0owNyGV0C%2BU0edNVpmnncNk9c1BkE%2BGYiP23BWcOB%2FxtKDx0NHxlZjNAbKSvCNjsccEPrIFpHgL8BoshMTPn22VS3qKJLExNwpSj4HAgexkgAIDpWg%2BldT11QjDaS2tKuWjnTseTSzhdkM5LG3cDuE5ETA4War8jfTpfoo%2B4hEisruMq1KrmgmnASogIpP6GHjFkXdlm%2FQWUQG7pzci6hlDHOOpOnJnTcPPApZPS9kutRCbbXNcMez8Fs6%2BMTpcmr0UBe8kcwMjdnUGS0YS6mF9JVASSAEXlAt5F0iwVTma5vcdgG8f9PHhz3Rz5%2BTuWVMfufNqK2I6ZASOH6tsoc36TJGXuzDSk82%2BBjqkAZqkvE%2B2xnKtfKWfAhF8TVZFLDexvvFysLuFeUquLsF0DVP9cvZePJp%2FR19iaILvDMzO5yoEua6tY8EKV9wvERpn7z3jxOZ1K8qCMNHkRnZtnl0uI26IaJgszIdJOx4K7QX0tMZjO9EDZU5CexCINkFWgSbk%2FKAyHS%2B%2BkS206KAeayvQqtl027vPopn19XOPNMh8xW0%2FlzHlO8B1tZcEmiFNV%2Ft2&X-Amz-Signature=5a17b0eaa2d5c6fe15e470f96fdf9a6805885ca4102ac7131d0cbaac101a26ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHOTAP5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgPZ4YCWQDCDvoW8fzz8rppnj%2BPKQui6H92%2BR4P7NBdgIhANutGfPHI47FyPZN9KQf4sNJpTd3eKEbZHvQMu7lIbmvKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6MswgPUr5LqFtf8Uq3AMlw%2FkBA7sBO8hhYMWGU03FVyUlVArHLAnj1P%2BIx5MNT%2FI9r8qE4CnqkQOlWAaj24ylVfV626WOAwTpukf2fc%2BKCJMkb6CJpcMDXIXjsrmaO2FPUA27L5hadMSAUHjIsn%2FRw53s2JfRguMp2XfCe4MS%2BDCF9HRiSsjI%2BgoKGw60SjVvt%2FJF5ctT4IAhe6s2rrmwzHOanWn5Q%2BahtMzNCD%2F%2Bo%2FxE%2FlSJxDZBMo6yGg0YXQ62o%2FkR4q2r8KWB8X%2B1qptel0HP8rcmXlTr7ckXZ3TIXUYIKuF7K0owNyGV0C%2BU0edNVpmnncNk9c1BkE%2BGYiP23BWcOB%2FxtKDx0NHxlZjNAbKSvCNjsccEPrIFpHgL8BoshMTPn22VS3qKJLExNwpSj4HAgexkgAIDpWg%2BldT11QjDaS2tKuWjnTseTSzhdkM5LG3cDuE5ETA4War8jfTpfoo%2B4hEisruMq1KrmgmnASogIpP6GHjFkXdlm%2FQWUQG7pzci6hlDHOOpOnJnTcPPApZPS9kutRCbbXNcMez8Fs6%2BMTpcmr0UBe8kcwMjdnUGS0YS6mF9JVASSAEXlAt5F0iwVTma5vcdgG8f9PHhz3Rz5%2BTuWVMfufNqK2I6ZASOH6tsoc36TJGXuzDSk82%2BBjqkAZqkvE%2B2xnKtfKWfAhF8TVZFLDexvvFysLuFeUquLsF0DVP9cvZePJp%2FR19iaILvDMzO5yoEua6tY8EKV9wvERpn7z3jxOZ1K8qCMNHkRnZtnl0uI26IaJgszIdJOx4K7QX0tMZjO9EDZU5CexCINkFWgSbk%2FKAyHS%2B%2BkS206KAeayvQqtl027vPopn19XOPNMh8xW0%2FlzHlO8B1tZcEmiFNV%2Ft2&X-Amz-Signature=a61e151c3c9809d1e3eeb0eb2aeca1e1f7f30d2915ff2717794a5c36a564935d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHOTAP5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgPZ4YCWQDCDvoW8fzz8rppnj%2BPKQui6H92%2BR4P7NBdgIhANutGfPHI47FyPZN9KQf4sNJpTd3eKEbZHvQMu7lIbmvKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6MswgPUr5LqFtf8Uq3AMlw%2FkBA7sBO8hhYMWGU03FVyUlVArHLAnj1P%2BIx5MNT%2FI9r8qE4CnqkQOlWAaj24ylVfV626WOAwTpukf2fc%2BKCJMkb6CJpcMDXIXjsrmaO2FPUA27L5hadMSAUHjIsn%2FRw53s2JfRguMp2XfCe4MS%2BDCF9HRiSsjI%2BgoKGw60SjVvt%2FJF5ctT4IAhe6s2rrmwzHOanWn5Q%2BahtMzNCD%2F%2Bo%2FxE%2FlSJxDZBMo6yGg0YXQ62o%2FkR4q2r8KWB8X%2B1qptel0HP8rcmXlTr7ckXZ3TIXUYIKuF7K0owNyGV0C%2BU0edNVpmnncNk9c1BkE%2BGYiP23BWcOB%2FxtKDx0NHxlZjNAbKSvCNjsccEPrIFpHgL8BoshMTPn22VS3qKJLExNwpSj4HAgexkgAIDpWg%2BldT11QjDaS2tKuWjnTseTSzhdkM5LG3cDuE5ETA4War8jfTpfoo%2B4hEisruMq1KrmgmnASogIpP6GHjFkXdlm%2FQWUQG7pzci6hlDHOOpOnJnTcPPApZPS9kutRCbbXNcMez8Fs6%2BMTpcmr0UBe8kcwMjdnUGS0YS6mF9JVASSAEXlAt5F0iwVTma5vcdgG8f9PHhz3Rz5%2BTuWVMfufNqK2I6ZASOH6tsoc36TJGXuzDSk82%2BBjqkAZqkvE%2B2xnKtfKWfAhF8TVZFLDexvvFysLuFeUquLsF0DVP9cvZePJp%2FR19iaILvDMzO5yoEua6tY8EKV9wvERpn7z3jxOZ1K8qCMNHkRnZtnl0uI26IaJgszIdJOx4K7QX0tMZjO9EDZU5CexCINkFWgSbk%2FKAyHS%2B%2BkS206KAeayvQqtl027vPopn19XOPNMh8xW0%2FlzHlO8B1tZcEmiFNV%2Ft2&X-Amz-Signature=13433b51c1ffdb752321eae2c8d8f0c27be95567dfc000639093e4905fd3bf7e&X-Amz-SignedHeaders=host&x-id=GetObject)
