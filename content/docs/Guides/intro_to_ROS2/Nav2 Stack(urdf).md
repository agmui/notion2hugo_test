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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBFJXD6Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSw1BMZ5Uai8GqdePT%2BKuz%2B3ATnDzi5pn%2F74NrwBiRwIhAL9ArYg0vsl%2BdHvdZKdCEktsgwPwZw8%2FwF7kMZ3uuhc4Kv8DCH4QABoMNjM3NDIzMTgzODA1IgyuDPqDQ1InMLIape8q3AOeP0rIOU6m%2FG0lrkvQ6LRqf3X1LsNfhiNs3kWQ2zwlP%2FP1YlTLB6iZnMFTu%2BDDevL%2BmOe3PId%2FYUxTRZxNhYDQg0ZfWAeEHD5qQRvHvWUNn0OmzHpDYUs5QX0W3N3TLN5mnlLeMv%2Bu2TQuYRtIIWR5WUT3aLtEjSn7tJpxfI%2BjElyelPMog5OB1TuwTa0bRLH0uaP0Ch8ndFweYzHBBqSSYcidlR3m58%2BD27i0QV70B42OSbmItYpZzTrDwqgZzlDyD2kTYhoRP%2FIA7YDASvRhpGnEPWv1aLrYNjjJZB%2B%2Ba4zeqlIBh2q2%2BQJ1RBA8JbfZBp2G4L5BlIpOvTmYg3TM1DEHLAD7pA%2BF5XM82j3%2FTAjYQboj%2BoBdBYgm%2FYWbntFkgKhQdV%2B0vkyed8LatdlDb6kSW6iQPQklzG1nYreOKDhz8SVrHVCUugB9UFiPMrJZo1PADA5pLcW%2BclbfOahzpL2pLk2RN3hzk4sX8RD%2F%2BhQyhDu9HnYM3g2WK2GETuwAxLVjmMI3jvPXomKw9PQopWziKxcCYYd3YBmJMak6rdsWfchPWGJF6OCzl6B9vu9d0WecfqP%2FHFjIWZ4jX73AzwqAsvP%2FVCZY%2Fd4fOWKPz%2FuHLc9TGiDknl2k9zDO0b%2FABjqkAS0syzoZ7y997ILG%2BJOKK3%2BBGzTLDph5Niu6o95CJIl%2BjmdVxW6%2F4q6jKK%2FuCNo33NO0O2CXzqU8Zl%2F5paRqOhZ9UrN1HnJNcti5ya81TFLMw4WO9nkyz3oMgQId5XknA8PvCQYzRv82Bo2dfaAJqEvX1RyrriJnVjaOUW2bxldM1zBdheWmD2AzDoQACnKNCxZEzbAOYYyJhshdE3B3eohAWMth&X-Amz-Signature=924469b3defb9d95989bdccd16c095cb262a3ffe2ca861113e3d56015f627caf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBFJXD6Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSw1BMZ5Uai8GqdePT%2BKuz%2B3ATnDzi5pn%2F74NrwBiRwIhAL9ArYg0vsl%2BdHvdZKdCEktsgwPwZw8%2FwF7kMZ3uuhc4Kv8DCH4QABoMNjM3NDIzMTgzODA1IgyuDPqDQ1InMLIape8q3AOeP0rIOU6m%2FG0lrkvQ6LRqf3X1LsNfhiNs3kWQ2zwlP%2FP1YlTLB6iZnMFTu%2BDDevL%2BmOe3PId%2FYUxTRZxNhYDQg0ZfWAeEHD5qQRvHvWUNn0OmzHpDYUs5QX0W3N3TLN5mnlLeMv%2Bu2TQuYRtIIWR5WUT3aLtEjSn7tJpxfI%2BjElyelPMog5OB1TuwTa0bRLH0uaP0Ch8ndFweYzHBBqSSYcidlR3m58%2BD27i0QV70B42OSbmItYpZzTrDwqgZzlDyD2kTYhoRP%2FIA7YDASvRhpGnEPWv1aLrYNjjJZB%2B%2Ba4zeqlIBh2q2%2BQJ1RBA8JbfZBp2G4L5BlIpOvTmYg3TM1DEHLAD7pA%2BF5XM82j3%2FTAjYQboj%2BoBdBYgm%2FYWbntFkgKhQdV%2B0vkyed8LatdlDb6kSW6iQPQklzG1nYreOKDhz8SVrHVCUugB9UFiPMrJZo1PADA5pLcW%2BclbfOahzpL2pLk2RN3hzk4sX8RD%2F%2BhQyhDu9HnYM3g2WK2GETuwAxLVjmMI3jvPXomKw9PQopWziKxcCYYd3YBmJMak6rdsWfchPWGJF6OCzl6B9vu9d0WecfqP%2FHFjIWZ4jX73AzwqAsvP%2FVCZY%2Fd4fOWKPz%2FuHLc9TGiDknl2k9zDO0b%2FABjqkAS0syzoZ7y997ILG%2BJOKK3%2BBGzTLDph5Niu6o95CJIl%2BjmdVxW6%2F4q6jKK%2FuCNo33NO0O2CXzqU8Zl%2F5paRqOhZ9UrN1HnJNcti5ya81TFLMw4WO9nkyz3oMgQId5XknA8PvCQYzRv82Bo2dfaAJqEvX1RyrriJnVjaOUW2bxldM1zBdheWmD2AzDoQACnKNCxZEzbAOYYyJhshdE3B3eohAWMth&X-Amz-Signature=cecfa8c3bb6ce6d269aea00b06116c524da5c88136bec8ff0807ccea5347943e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBFJXD6Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSw1BMZ5Uai8GqdePT%2BKuz%2B3ATnDzi5pn%2F74NrwBiRwIhAL9ArYg0vsl%2BdHvdZKdCEktsgwPwZw8%2FwF7kMZ3uuhc4Kv8DCH4QABoMNjM3NDIzMTgzODA1IgyuDPqDQ1InMLIape8q3AOeP0rIOU6m%2FG0lrkvQ6LRqf3X1LsNfhiNs3kWQ2zwlP%2FP1YlTLB6iZnMFTu%2BDDevL%2BmOe3PId%2FYUxTRZxNhYDQg0ZfWAeEHD5qQRvHvWUNn0OmzHpDYUs5QX0W3N3TLN5mnlLeMv%2Bu2TQuYRtIIWR5WUT3aLtEjSn7tJpxfI%2BjElyelPMog5OB1TuwTa0bRLH0uaP0Ch8ndFweYzHBBqSSYcidlR3m58%2BD27i0QV70B42OSbmItYpZzTrDwqgZzlDyD2kTYhoRP%2FIA7YDASvRhpGnEPWv1aLrYNjjJZB%2B%2Ba4zeqlIBh2q2%2BQJ1RBA8JbfZBp2G4L5BlIpOvTmYg3TM1DEHLAD7pA%2BF5XM82j3%2FTAjYQboj%2BoBdBYgm%2FYWbntFkgKhQdV%2B0vkyed8LatdlDb6kSW6iQPQklzG1nYreOKDhz8SVrHVCUugB9UFiPMrJZo1PADA5pLcW%2BclbfOahzpL2pLk2RN3hzk4sX8RD%2F%2BhQyhDu9HnYM3g2WK2GETuwAxLVjmMI3jvPXomKw9PQopWziKxcCYYd3YBmJMak6rdsWfchPWGJF6OCzl6B9vu9d0WecfqP%2FHFjIWZ4jX73AzwqAsvP%2FVCZY%2Fd4fOWKPz%2FuHLc9TGiDknl2k9zDO0b%2FABjqkAS0syzoZ7y997ILG%2BJOKK3%2BBGzTLDph5Niu6o95CJIl%2BjmdVxW6%2F4q6jKK%2FuCNo33NO0O2CXzqU8Zl%2F5paRqOhZ9UrN1HnJNcti5ya81TFLMw4WO9nkyz3oMgQId5XknA8PvCQYzRv82Bo2dfaAJqEvX1RyrriJnVjaOUW2bxldM1zBdheWmD2AzDoQACnKNCxZEzbAOYYyJhshdE3B3eohAWMth&X-Amz-Signature=7704edb3b809599f9ec01dc2437f9ec67969974e1e73e155fdad38109d3ae385&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBFJXD6Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSw1BMZ5Uai8GqdePT%2BKuz%2B3ATnDzi5pn%2F74NrwBiRwIhAL9ArYg0vsl%2BdHvdZKdCEktsgwPwZw8%2FwF7kMZ3uuhc4Kv8DCH4QABoMNjM3NDIzMTgzODA1IgyuDPqDQ1InMLIape8q3AOeP0rIOU6m%2FG0lrkvQ6LRqf3X1LsNfhiNs3kWQ2zwlP%2FP1YlTLB6iZnMFTu%2BDDevL%2BmOe3PId%2FYUxTRZxNhYDQg0ZfWAeEHD5qQRvHvWUNn0OmzHpDYUs5QX0W3N3TLN5mnlLeMv%2Bu2TQuYRtIIWR5WUT3aLtEjSn7tJpxfI%2BjElyelPMog5OB1TuwTa0bRLH0uaP0Ch8ndFweYzHBBqSSYcidlR3m58%2BD27i0QV70B42OSbmItYpZzTrDwqgZzlDyD2kTYhoRP%2FIA7YDASvRhpGnEPWv1aLrYNjjJZB%2B%2Ba4zeqlIBh2q2%2BQJ1RBA8JbfZBp2G4L5BlIpOvTmYg3TM1DEHLAD7pA%2BF5XM82j3%2FTAjYQboj%2BoBdBYgm%2FYWbntFkgKhQdV%2B0vkyed8LatdlDb6kSW6iQPQklzG1nYreOKDhz8SVrHVCUugB9UFiPMrJZo1PADA5pLcW%2BclbfOahzpL2pLk2RN3hzk4sX8RD%2F%2BhQyhDu9HnYM3g2WK2GETuwAxLVjmMI3jvPXomKw9PQopWziKxcCYYd3YBmJMak6rdsWfchPWGJF6OCzl6B9vu9d0WecfqP%2FHFjIWZ4jX73AzwqAsvP%2FVCZY%2Fd4fOWKPz%2FuHLc9TGiDknl2k9zDO0b%2FABjqkAS0syzoZ7y997ILG%2BJOKK3%2BBGzTLDph5Niu6o95CJIl%2BjmdVxW6%2F4q6jKK%2FuCNo33NO0O2CXzqU8Zl%2F5paRqOhZ9UrN1HnJNcti5ya81TFLMw4WO9nkyz3oMgQId5XknA8PvCQYzRv82Bo2dfaAJqEvX1RyrriJnVjaOUW2bxldM1zBdheWmD2AzDoQACnKNCxZEzbAOYYyJhshdE3B3eohAWMth&X-Amz-Signature=ad2c8d2822d8e965f57d3e0aacd3a5e0ea73a3c717c88f6c05d227ad02f32c64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBFJXD6Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSw1BMZ5Uai8GqdePT%2BKuz%2B3ATnDzi5pn%2F74NrwBiRwIhAL9ArYg0vsl%2BdHvdZKdCEktsgwPwZw8%2FwF7kMZ3uuhc4Kv8DCH4QABoMNjM3NDIzMTgzODA1IgyuDPqDQ1InMLIape8q3AOeP0rIOU6m%2FG0lrkvQ6LRqf3X1LsNfhiNs3kWQ2zwlP%2FP1YlTLB6iZnMFTu%2BDDevL%2BmOe3PId%2FYUxTRZxNhYDQg0ZfWAeEHD5qQRvHvWUNn0OmzHpDYUs5QX0W3N3TLN5mnlLeMv%2Bu2TQuYRtIIWR5WUT3aLtEjSn7tJpxfI%2BjElyelPMog5OB1TuwTa0bRLH0uaP0Ch8ndFweYzHBBqSSYcidlR3m58%2BD27i0QV70B42OSbmItYpZzTrDwqgZzlDyD2kTYhoRP%2FIA7YDASvRhpGnEPWv1aLrYNjjJZB%2B%2Ba4zeqlIBh2q2%2BQJ1RBA8JbfZBp2G4L5BlIpOvTmYg3TM1DEHLAD7pA%2BF5XM82j3%2FTAjYQboj%2BoBdBYgm%2FYWbntFkgKhQdV%2B0vkyed8LatdlDb6kSW6iQPQklzG1nYreOKDhz8SVrHVCUugB9UFiPMrJZo1PADA5pLcW%2BclbfOahzpL2pLk2RN3hzk4sX8RD%2F%2BhQyhDu9HnYM3g2WK2GETuwAxLVjmMI3jvPXomKw9PQopWziKxcCYYd3YBmJMak6rdsWfchPWGJF6OCzl6B9vu9d0WecfqP%2FHFjIWZ4jX73AzwqAsvP%2FVCZY%2Fd4fOWKPz%2FuHLc9TGiDknl2k9zDO0b%2FABjqkAS0syzoZ7y997ILG%2BJOKK3%2BBGzTLDph5Niu6o95CJIl%2BjmdVxW6%2F4q6jKK%2FuCNo33NO0O2CXzqU8Zl%2F5paRqOhZ9UrN1HnJNcti5ya81TFLMw4WO9nkyz3oMgQId5XknA8PvCQYzRv82Bo2dfaAJqEvX1RyrriJnVjaOUW2bxldM1zBdheWmD2AzDoQACnKNCxZEzbAOYYyJhshdE3B3eohAWMth&X-Amz-Signature=2741b392588d5d0c1bb61ca44955a88e4c10b2138ddfc659673fd1ecb8c44f28&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBFJXD6Q%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHSw1BMZ5Uai8GqdePT%2BKuz%2B3ATnDzi5pn%2F74NrwBiRwIhAL9ArYg0vsl%2BdHvdZKdCEktsgwPwZw8%2FwF7kMZ3uuhc4Kv8DCH4QABoMNjM3NDIzMTgzODA1IgyuDPqDQ1InMLIape8q3AOeP0rIOU6m%2FG0lrkvQ6LRqf3X1LsNfhiNs3kWQ2zwlP%2FP1YlTLB6iZnMFTu%2BDDevL%2BmOe3PId%2FYUxTRZxNhYDQg0ZfWAeEHD5qQRvHvWUNn0OmzHpDYUs5QX0W3N3TLN5mnlLeMv%2Bu2TQuYRtIIWR5WUT3aLtEjSn7tJpxfI%2BjElyelPMog5OB1TuwTa0bRLH0uaP0Ch8ndFweYzHBBqSSYcidlR3m58%2BD27i0QV70B42OSbmItYpZzTrDwqgZzlDyD2kTYhoRP%2FIA7YDASvRhpGnEPWv1aLrYNjjJZB%2B%2Ba4zeqlIBh2q2%2BQJ1RBA8JbfZBp2G4L5BlIpOvTmYg3TM1DEHLAD7pA%2BF5XM82j3%2FTAjYQboj%2BoBdBYgm%2FYWbntFkgKhQdV%2B0vkyed8LatdlDb6kSW6iQPQklzG1nYreOKDhz8SVrHVCUugB9UFiPMrJZo1PADA5pLcW%2BclbfOahzpL2pLk2RN3hzk4sX8RD%2F%2BhQyhDu9HnYM3g2WK2GETuwAxLVjmMI3jvPXomKw9PQopWziKxcCYYd3YBmJMak6rdsWfchPWGJF6OCzl6B9vu9d0WecfqP%2FHFjIWZ4jX73AzwqAsvP%2FVCZY%2Fd4fOWKPz%2FuHLc9TGiDknl2k9zDO0b%2FABjqkAS0syzoZ7y997ILG%2BJOKK3%2BBGzTLDph5Niu6o95CJIl%2BjmdVxW6%2F4q6jKK%2FuCNo33NO0O2CXzqU8Zl%2F5paRqOhZ9UrN1HnJNcti5ya81TFLMw4WO9nkyz3oMgQId5XknA8PvCQYzRv82Bo2dfaAJqEvX1RyrriJnVjaOUW2bxldM1zBdheWmD2AzDoQACnKNCxZEzbAOYYyJhshdE3B3eohAWMth&X-Amz-Signature=a5c07dafd05b3f48d7374bcbe7b9eba41e210c5a742249b64a40a95a2a0ed536&X-Amz-SignedHeaders=host&x-id=GetObject)
