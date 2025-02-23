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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=431bdb1cf40ffdf741687d771275ade796e113bd0ccbe7361734ce5db439e1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=7228b3357b9d02463c6b4802b11a71a98750d9d27385e2289e606f67dbf124c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=1bb9b935d5b888442fc001c641db3013b236fbbd246e08b619f4783d4bdb6ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=06cee231b0de1789a206d1a53c7894c5506201c2bb0c0f602db6f7e28e4b0565&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=8bafe62b0faa095da904fbbce1cf2a8a71250c69fd33b10644785dc059b55496&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHUZWFE7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T220434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHChVK1k39XblO11T5pPSgwCYYaAdyJZXCFQKyQbPueAiEA4%2FThpO0fCyUcG7zfQ32DWU4QXJr6eDGz37TbDnqgYL8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAG3vJRgoccaC%2BrCyyrcA6EREtRFQwoqjWBaso8nMGEAWmEY9x1CLF7ZAXKTY7Nu5JsaZgOHOClYN5bzhVIphL8CgspZ1ZFyOUmZbsVyC2yB7TfwN%2BH42j4WvpIeF6PT%2FgJqpll4uA5aQAebzpMH5JuykohQuXAamXayL%2Bh47o1lFL%2BHxKT1MyGPerJ9Z%2B6MVK29d3LzU2Yp0uvG12zlDQQv%2FRSbrFHfpb3M5jUHGsNUa%2BIouKn%2BAElMa2oych4U%2FRPujnHfKSrbR3pZRsq9CeFcA8GH3i%2B7m4L%2FevJYHohJWCDQyXtvuYt%2FjJ9Je%2FD3ZzQBJFWlb1QQdAnpq%2BMGMUjVLKrXbCIPzlZHBzHnRU3ffUKz9ptyCeH8j7opl3mDdWfVYdtkU2GDaieEW3hEUNLXqrbe1NFwpZel%2BFm1WLCUet6K43xzseVH%2BtycRvUThs3yrXZ6PcedRSi5TfD3AvsyXGZj%2F9o3IhpHmVAlIGhXCfs1xX77803VGvAnliZfZL3f8BN26auzdUawQayDzdu0TuOLt5gZpOD72u1Ubc8iDYCx8ijJ0eE2MkmPVSHgnXy2iZM92l2Sf1FECXlYVWmND9uzcwx04QNgTGyPo1ajBcaD7Rx%2Fhh5UISki6A%2FgFOKX%2BnWZc7bu%2BnvoMOG17b0GOqUBPIMcNg%2FPTF%2Br3ZlIuCXGW02PhA4G9pyb%2BrGNeVVmgxLlsB5Jjg6nx8D1gi4Nzk9QX%2BkO7yF4MEuvw1YXaQn65FN3RWlO1NWQhcGMrf5rZMtph1Odlurpj4xE23TeWywtKsPlntKLo4wF%2FMwB8BGv1tThIqqoMPTVNFtzcCLbPZgKqv0gmvcVMu1LEEnN8r6kxFx2VYqPfEdhF8mELxkJmNw5FNE3&X-Amz-Signature=99ac37768c7b41069dd69dc468c57dd1da71b9afaa4a8253cfbff215e95bc89f&X-Amz-SignedHeaders=host&x-id=GetObject)
