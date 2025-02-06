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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWHDRPJU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD%2FP4xCPvijPIOd5qa510iTli7LvUG0Y7634zdo%2BDOMzAIgVQhXfgsrrlYBOWOoQ7WfxBz1hRLfOsz8PTbl%2F81Ox2cq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNZhYa%2F6%2BV3qlM2rZyrcA%2F3Yozxc%2FPtd0VQ1mE90EG%2BujLXMrjl05zG1ad5EOTcAoA3AtpFZg0mucvpokHym3HhkU7%2FaNgewlOfHZz0pevoh3C2nUvbkKqojHNXioeW4mqsfVJmcVbxYn%2B%2BU6kiqgYnX8r7E22gCYtVatWtEHbr4LcpODFG61JCs6utoH3b30813D3VeELfLj%2B5XVgoPiBzf%2BCt7ibVFhCBtdnOKWCH4NRBQoSOCn4Jw3ioHcJpVZJO68cGBZ1AynEmPjAbDrSLtzfx66rIInBRwj%2BVSVmjVIESmc32OzS8jgjX8R6D20mn8Dd5TctWRrtIkObEaqZURr9DQasytFu8N9hOF8mBGbudj1tfx3jhseB7RubgjEq7CSRKOSgaVpbbn4Amon06bHC8kW%2BfrjglklSE5esOqlcSdNMdTSJpJyrqSfj1IwjflrDANgWKeIEzQdyEvZdncuonPXPXrogGWe5v2%2BVPn6HplGGe2bcKXmQRees36Ko70obarItPFte2Rx9gYUvnz9GG2eK9j9iSTSva1tANSZczKRdy3Lod8G5UU2kxbeerPWIxGGzXiI7OfspdHeH%2FeznNvzXB3FW6XS%2BTYkdD9qdZyIoq0q6Aon%2BhTDA%2Fy%2BnBW43AJ%2F8M3vr2fMKTTkb0GOqUB%2FpTHbobSNGdS3KN9Z8v9Izrxp%2BnEnLxyUbxfgsOU2LvMwWbM18ZTT6YAXOknkF9LrhttrDKE216qYOBCe0CKBg3sK2B0QHg1BH5dUMeusRUqleqWWnzYlbkoDL4D177hola6947LMMP5eZuX3CXvVkRTA%2Bgaxk7xzLJ5JqQLKYBGSXZazfSKi3oRIstpNI1U2uZ7%2FCLRW7nHVoBGtTjElQB5gUNU&X-Amz-Signature=a14016cc0efd04a5f6929fad8dbe369b0f7b6d20864c6eb162331b15f127193d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWHDRPJU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD%2FP4xCPvijPIOd5qa510iTli7LvUG0Y7634zdo%2BDOMzAIgVQhXfgsrrlYBOWOoQ7WfxBz1hRLfOsz8PTbl%2F81Ox2cq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNZhYa%2F6%2BV3qlM2rZyrcA%2F3Yozxc%2FPtd0VQ1mE90EG%2BujLXMrjl05zG1ad5EOTcAoA3AtpFZg0mucvpokHym3HhkU7%2FaNgewlOfHZz0pevoh3C2nUvbkKqojHNXioeW4mqsfVJmcVbxYn%2B%2BU6kiqgYnX8r7E22gCYtVatWtEHbr4LcpODFG61JCs6utoH3b30813D3VeELfLj%2B5XVgoPiBzf%2BCt7ibVFhCBtdnOKWCH4NRBQoSOCn4Jw3ioHcJpVZJO68cGBZ1AynEmPjAbDrSLtzfx66rIInBRwj%2BVSVmjVIESmc32OzS8jgjX8R6D20mn8Dd5TctWRrtIkObEaqZURr9DQasytFu8N9hOF8mBGbudj1tfx3jhseB7RubgjEq7CSRKOSgaVpbbn4Amon06bHC8kW%2BfrjglklSE5esOqlcSdNMdTSJpJyrqSfj1IwjflrDANgWKeIEzQdyEvZdncuonPXPXrogGWe5v2%2BVPn6HplGGe2bcKXmQRees36Ko70obarItPFte2Rx9gYUvnz9GG2eK9j9iSTSva1tANSZczKRdy3Lod8G5UU2kxbeerPWIxGGzXiI7OfspdHeH%2FeznNvzXB3FW6XS%2BTYkdD9qdZyIoq0q6Aon%2BhTDA%2Fy%2BnBW43AJ%2F8M3vr2fMKTTkb0GOqUB%2FpTHbobSNGdS3KN9Z8v9Izrxp%2BnEnLxyUbxfgsOU2LvMwWbM18ZTT6YAXOknkF9LrhttrDKE216qYOBCe0CKBg3sK2B0QHg1BH5dUMeusRUqleqWWnzYlbkoDL4D177hola6947LMMP5eZuX3CXvVkRTA%2Bgaxk7xzLJ5JqQLKYBGSXZazfSKi3oRIstpNI1U2uZ7%2FCLRW7nHVoBGtTjElQB5gUNU&X-Amz-Signature=8ba752c4e795e5763c88a2971ebbfbca54beea97f9b5d0cafda2b357d9438967&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWHDRPJU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD%2FP4xCPvijPIOd5qa510iTli7LvUG0Y7634zdo%2BDOMzAIgVQhXfgsrrlYBOWOoQ7WfxBz1hRLfOsz8PTbl%2F81Ox2cq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNZhYa%2F6%2BV3qlM2rZyrcA%2F3Yozxc%2FPtd0VQ1mE90EG%2BujLXMrjl05zG1ad5EOTcAoA3AtpFZg0mucvpokHym3HhkU7%2FaNgewlOfHZz0pevoh3C2nUvbkKqojHNXioeW4mqsfVJmcVbxYn%2B%2BU6kiqgYnX8r7E22gCYtVatWtEHbr4LcpODFG61JCs6utoH3b30813D3VeELfLj%2B5XVgoPiBzf%2BCt7ibVFhCBtdnOKWCH4NRBQoSOCn4Jw3ioHcJpVZJO68cGBZ1AynEmPjAbDrSLtzfx66rIInBRwj%2BVSVmjVIESmc32OzS8jgjX8R6D20mn8Dd5TctWRrtIkObEaqZURr9DQasytFu8N9hOF8mBGbudj1tfx3jhseB7RubgjEq7CSRKOSgaVpbbn4Amon06bHC8kW%2BfrjglklSE5esOqlcSdNMdTSJpJyrqSfj1IwjflrDANgWKeIEzQdyEvZdncuonPXPXrogGWe5v2%2BVPn6HplGGe2bcKXmQRees36Ko70obarItPFte2Rx9gYUvnz9GG2eK9j9iSTSva1tANSZczKRdy3Lod8G5UU2kxbeerPWIxGGzXiI7OfspdHeH%2FeznNvzXB3FW6XS%2BTYkdD9qdZyIoq0q6Aon%2BhTDA%2Fy%2BnBW43AJ%2F8M3vr2fMKTTkb0GOqUB%2FpTHbobSNGdS3KN9Z8v9Izrxp%2BnEnLxyUbxfgsOU2LvMwWbM18ZTT6YAXOknkF9LrhttrDKE216qYOBCe0CKBg3sK2B0QHg1BH5dUMeusRUqleqWWnzYlbkoDL4D177hola6947LMMP5eZuX3CXvVkRTA%2Bgaxk7xzLJ5JqQLKYBGSXZazfSKi3oRIstpNI1U2uZ7%2FCLRW7nHVoBGtTjElQB5gUNU&X-Amz-Signature=a0d543eaeb3e6b24b1858ef78272370c369db86acba2653b748d20ae3183bba0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWHDRPJU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD%2FP4xCPvijPIOd5qa510iTli7LvUG0Y7634zdo%2BDOMzAIgVQhXfgsrrlYBOWOoQ7WfxBz1hRLfOsz8PTbl%2F81Ox2cq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNZhYa%2F6%2BV3qlM2rZyrcA%2F3Yozxc%2FPtd0VQ1mE90EG%2BujLXMrjl05zG1ad5EOTcAoA3AtpFZg0mucvpokHym3HhkU7%2FaNgewlOfHZz0pevoh3C2nUvbkKqojHNXioeW4mqsfVJmcVbxYn%2B%2BU6kiqgYnX8r7E22gCYtVatWtEHbr4LcpODFG61JCs6utoH3b30813D3VeELfLj%2B5XVgoPiBzf%2BCt7ibVFhCBtdnOKWCH4NRBQoSOCn4Jw3ioHcJpVZJO68cGBZ1AynEmPjAbDrSLtzfx66rIInBRwj%2BVSVmjVIESmc32OzS8jgjX8R6D20mn8Dd5TctWRrtIkObEaqZURr9DQasytFu8N9hOF8mBGbudj1tfx3jhseB7RubgjEq7CSRKOSgaVpbbn4Amon06bHC8kW%2BfrjglklSE5esOqlcSdNMdTSJpJyrqSfj1IwjflrDANgWKeIEzQdyEvZdncuonPXPXrogGWe5v2%2BVPn6HplGGe2bcKXmQRees36Ko70obarItPFte2Rx9gYUvnz9GG2eK9j9iSTSva1tANSZczKRdy3Lod8G5UU2kxbeerPWIxGGzXiI7OfspdHeH%2FeznNvzXB3FW6XS%2BTYkdD9qdZyIoq0q6Aon%2BhTDA%2Fy%2BnBW43AJ%2F8M3vr2fMKTTkb0GOqUB%2FpTHbobSNGdS3KN9Z8v9Izrxp%2BnEnLxyUbxfgsOU2LvMwWbM18ZTT6YAXOknkF9LrhttrDKE216qYOBCe0CKBg3sK2B0QHg1BH5dUMeusRUqleqWWnzYlbkoDL4D177hola6947LMMP5eZuX3CXvVkRTA%2Bgaxk7xzLJ5JqQLKYBGSXZazfSKi3oRIstpNI1U2uZ7%2FCLRW7nHVoBGtTjElQB5gUNU&X-Amz-Signature=674d241b76607fba19da900361925771b279e06213b614a353697add6571944e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWHDRPJU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD%2FP4xCPvijPIOd5qa510iTli7LvUG0Y7634zdo%2BDOMzAIgVQhXfgsrrlYBOWOoQ7WfxBz1hRLfOsz8PTbl%2F81Ox2cq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNZhYa%2F6%2BV3qlM2rZyrcA%2F3Yozxc%2FPtd0VQ1mE90EG%2BujLXMrjl05zG1ad5EOTcAoA3AtpFZg0mucvpokHym3HhkU7%2FaNgewlOfHZz0pevoh3C2nUvbkKqojHNXioeW4mqsfVJmcVbxYn%2B%2BU6kiqgYnX8r7E22gCYtVatWtEHbr4LcpODFG61JCs6utoH3b30813D3VeELfLj%2B5XVgoPiBzf%2BCt7ibVFhCBtdnOKWCH4NRBQoSOCn4Jw3ioHcJpVZJO68cGBZ1AynEmPjAbDrSLtzfx66rIInBRwj%2BVSVmjVIESmc32OzS8jgjX8R6D20mn8Dd5TctWRrtIkObEaqZURr9DQasytFu8N9hOF8mBGbudj1tfx3jhseB7RubgjEq7CSRKOSgaVpbbn4Amon06bHC8kW%2BfrjglklSE5esOqlcSdNMdTSJpJyrqSfj1IwjflrDANgWKeIEzQdyEvZdncuonPXPXrogGWe5v2%2BVPn6HplGGe2bcKXmQRees36Ko70obarItPFte2Rx9gYUvnz9GG2eK9j9iSTSva1tANSZczKRdy3Lod8G5UU2kxbeerPWIxGGzXiI7OfspdHeH%2FeznNvzXB3FW6XS%2BTYkdD9qdZyIoq0q6Aon%2BhTDA%2Fy%2BnBW43AJ%2F8M3vr2fMKTTkb0GOqUB%2FpTHbobSNGdS3KN9Z8v9Izrxp%2BnEnLxyUbxfgsOU2LvMwWbM18ZTT6YAXOknkF9LrhttrDKE216qYOBCe0CKBg3sK2B0QHg1BH5dUMeusRUqleqWWnzYlbkoDL4D177hola6947LMMP5eZuX3CXvVkRTA%2Bgaxk7xzLJ5JqQLKYBGSXZazfSKi3oRIstpNI1U2uZ7%2FCLRW7nHVoBGtTjElQB5gUNU&X-Amz-Signature=84b813906c1dcddf84dceeb8a90b8d4fdce21729c9253d83bbb9115f6b4f2043&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWHDRPJU%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD%2FP4xCPvijPIOd5qa510iTli7LvUG0Y7634zdo%2BDOMzAIgVQhXfgsrrlYBOWOoQ7WfxBz1hRLfOsz8PTbl%2F81Ox2cq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNZhYa%2F6%2BV3qlM2rZyrcA%2F3Yozxc%2FPtd0VQ1mE90EG%2BujLXMrjl05zG1ad5EOTcAoA3AtpFZg0mucvpokHym3HhkU7%2FaNgewlOfHZz0pevoh3C2nUvbkKqojHNXioeW4mqsfVJmcVbxYn%2B%2BU6kiqgYnX8r7E22gCYtVatWtEHbr4LcpODFG61JCs6utoH3b30813D3VeELfLj%2B5XVgoPiBzf%2BCt7ibVFhCBtdnOKWCH4NRBQoSOCn4Jw3ioHcJpVZJO68cGBZ1AynEmPjAbDrSLtzfx66rIInBRwj%2BVSVmjVIESmc32OzS8jgjX8R6D20mn8Dd5TctWRrtIkObEaqZURr9DQasytFu8N9hOF8mBGbudj1tfx3jhseB7RubgjEq7CSRKOSgaVpbbn4Amon06bHC8kW%2BfrjglklSE5esOqlcSdNMdTSJpJyrqSfj1IwjflrDANgWKeIEzQdyEvZdncuonPXPXrogGWe5v2%2BVPn6HplGGe2bcKXmQRees36Ko70obarItPFte2Rx9gYUvnz9GG2eK9j9iSTSva1tANSZczKRdy3Lod8G5UU2kxbeerPWIxGGzXiI7OfspdHeH%2FeznNvzXB3FW6XS%2BTYkdD9qdZyIoq0q6Aon%2BhTDA%2Fy%2BnBW43AJ%2F8M3vr2fMKTTkb0GOqUB%2FpTHbobSNGdS3KN9Z8v9Izrxp%2BnEnLxyUbxfgsOU2LvMwWbM18ZTT6YAXOknkF9LrhttrDKE216qYOBCe0CKBg3sK2B0QHg1BH5dUMeusRUqleqWWnzYlbkoDL4D177hola6947LMMP5eZuX3CXvVkRTA%2Bgaxk7xzLJ5JqQLKYBGSXZazfSKi3oRIstpNI1U2uZ7%2FCLRW7nHVoBGtTjElQB5gUNU&X-Amz-Signature=79589355cebd6e662f114555471a3ca7bb7f992737dee61736f7de371a1006e8&X-Amz-SignedHeaders=host&x-id=GetObject)
