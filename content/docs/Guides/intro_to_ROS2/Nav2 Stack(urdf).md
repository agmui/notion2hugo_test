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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2HPCLH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzcxi9urU80ZFC8%2BVBhIqct6m6SafBeNLFrF3pLqmaPAiEAitjuwr76Nuihxl5P8yfU%2BEUyOUTRoN7%2B7OnkZtsJC04q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAwXhWxgX9aqY2DrbyrcA1ht2z3M4L3JURd%2BCMZo5%2FTCoTstUPPyYZ9INsyOEXddTTcs2CtViLhfEzJsV9RRuN4HmuNJ6f9%2F3kdkQPcm9Vs3AfYzjjzHxOOezXfMoLiI45pikW%2BGcLBA%2FPHeX%2FbJ0zIHjjdpsP350R4eC8q0DF7GmYh44Q9fJ7iRvYg2ydXmNs%2BYJCKvX%2BvYtNm6jN3yHONFq4l1%2F2PedrvEN6TucOI5ceFSMYGlo0fjOr0Z1yGJjzHp%2Fx5EEtTJhSnoZGzfvdTDygLERtyH4P2eNk68Wcku7TwrPEjgXVzCsPbLpZBTdDIpzfQ9mg7ofxTdD1LxtK8TWOhwjtuAv7o84BcHepIEBhBzTILHYkJCvn8aDSP%2Ben%2FbmHlTisStNfNfMiFHeCrs1lI%2FHe9U4HIYNuQD6u6SP6Abx3FZA3OaZlwuq6Aq5HSm1w1iQXGkhLA%2BeebouHmhXqgHw%2BbgEtLN8x52Kc4o7tfy9U4GDsltMNKAs6PSnO0UPq%2FoBS6EpwwykWI7I4bJWbb2c0SoBcn%2FgE%2FTuAU3DAhp76%2F80%2BToC4j5m558%2BSYPrDRmjV%2BSIunA0Fad0N8gcjcIoxsACpVkRQ2IMQtcUG594e9krs7XWR0KOEkR7%2FoLOsr2%2FPkD3h0cMNO8vMAGOqUBulZsT2C1Uy%2BVOSOSA7Tv6QuYDbBAm6cnqSWBeyswU3YA2vSgCZPa3GBWt8E8Q6UcpehPrZE%2BeW9wjJ%2FE8Fy729P%2BXVvNWL2NAK4n9Z%2FDDnIPvOypr49frSEAAA0rdv%2BoezxgMPGnijhSeY3KCQlpM2NakovQvpWLrghTExqaUlC0IFvjowXvW04gxYK5d06L8sXyzTLEF8230TtW9ysHBau%2BsoJL&X-Amz-Signature=686e63970879ea5043bea88326ba4b4b77ed835e0d67be6c6c86297d6ea244cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2HPCLH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzcxi9urU80ZFC8%2BVBhIqct6m6SafBeNLFrF3pLqmaPAiEAitjuwr76Nuihxl5P8yfU%2BEUyOUTRoN7%2B7OnkZtsJC04q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAwXhWxgX9aqY2DrbyrcA1ht2z3M4L3JURd%2BCMZo5%2FTCoTstUPPyYZ9INsyOEXddTTcs2CtViLhfEzJsV9RRuN4HmuNJ6f9%2F3kdkQPcm9Vs3AfYzjjzHxOOezXfMoLiI45pikW%2BGcLBA%2FPHeX%2FbJ0zIHjjdpsP350R4eC8q0DF7GmYh44Q9fJ7iRvYg2ydXmNs%2BYJCKvX%2BvYtNm6jN3yHONFq4l1%2F2PedrvEN6TucOI5ceFSMYGlo0fjOr0Z1yGJjzHp%2Fx5EEtTJhSnoZGzfvdTDygLERtyH4P2eNk68Wcku7TwrPEjgXVzCsPbLpZBTdDIpzfQ9mg7ofxTdD1LxtK8TWOhwjtuAv7o84BcHepIEBhBzTILHYkJCvn8aDSP%2Ben%2FbmHlTisStNfNfMiFHeCrs1lI%2FHe9U4HIYNuQD6u6SP6Abx3FZA3OaZlwuq6Aq5HSm1w1iQXGkhLA%2BeebouHmhXqgHw%2BbgEtLN8x52Kc4o7tfy9U4GDsltMNKAs6PSnO0UPq%2FoBS6EpwwykWI7I4bJWbb2c0SoBcn%2FgE%2FTuAU3DAhp76%2F80%2BToC4j5m558%2BSYPrDRmjV%2BSIunA0Fad0N8gcjcIoxsACpVkRQ2IMQtcUG594e9krs7XWR0KOEkR7%2FoLOsr2%2FPkD3h0cMNO8vMAGOqUBulZsT2C1Uy%2BVOSOSA7Tv6QuYDbBAm6cnqSWBeyswU3YA2vSgCZPa3GBWt8E8Q6UcpehPrZE%2BeW9wjJ%2FE8Fy729P%2BXVvNWL2NAK4n9Z%2FDDnIPvOypr49frSEAAA0rdv%2BoezxgMPGnijhSeY3KCQlpM2NakovQvpWLrghTExqaUlC0IFvjowXvW04gxYK5d06L8sXyzTLEF8230TtW9ysHBau%2BsoJL&X-Amz-Signature=dc11e5406fbea89ee24f2e9a02170d8e7a3cceacc4ee2cb882c4f0522ac2cc4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2HPCLH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzcxi9urU80ZFC8%2BVBhIqct6m6SafBeNLFrF3pLqmaPAiEAitjuwr76Nuihxl5P8yfU%2BEUyOUTRoN7%2B7OnkZtsJC04q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAwXhWxgX9aqY2DrbyrcA1ht2z3M4L3JURd%2BCMZo5%2FTCoTstUPPyYZ9INsyOEXddTTcs2CtViLhfEzJsV9RRuN4HmuNJ6f9%2F3kdkQPcm9Vs3AfYzjjzHxOOezXfMoLiI45pikW%2BGcLBA%2FPHeX%2FbJ0zIHjjdpsP350R4eC8q0DF7GmYh44Q9fJ7iRvYg2ydXmNs%2BYJCKvX%2BvYtNm6jN3yHONFq4l1%2F2PedrvEN6TucOI5ceFSMYGlo0fjOr0Z1yGJjzHp%2Fx5EEtTJhSnoZGzfvdTDygLERtyH4P2eNk68Wcku7TwrPEjgXVzCsPbLpZBTdDIpzfQ9mg7ofxTdD1LxtK8TWOhwjtuAv7o84BcHepIEBhBzTILHYkJCvn8aDSP%2Ben%2FbmHlTisStNfNfMiFHeCrs1lI%2FHe9U4HIYNuQD6u6SP6Abx3FZA3OaZlwuq6Aq5HSm1w1iQXGkhLA%2BeebouHmhXqgHw%2BbgEtLN8x52Kc4o7tfy9U4GDsltMNKAs6PSnO0UPq%2FoBS6EpwwykWI7I4bJWbb2c0SoBcn%2FgE%2FTuAU3DAhp76%2F80%2BToC4j5m558%2BSYPrDRmjV%2BSIunA0Fad0N8gcjcIoxsACpVkRQ2IMQtcUG594e9krs7XWR0KOEkR7%2FoLOsr2%2FPkD3h0cMNO8vMAGOqUBulZsT2C1Uy%2BVOSOSA7Tv6QuYDbBAm6cnqSWBeyswU3YA2vSgCZPa3GBWt8E8Q6UcpehPrZE%2BeW9wjJ%2FE8Fy729P%2BXVvNWL2NAK4n9Z%2FDDnIPvOypr49frSEAAA0rdv%2BoezxgMPGnijhSeY3KCQlpM2NakovQvpWLrghTExqaUlC0IFvjowXvW04gxYK5d06L8sXyzTLEF8230TtW9ysHBau%2BsoJL&X-Amz-Signature=064a9cfd66a6a8a7bcb23ee7520d256f07be947e28d83cdbead74af4d132e707&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2HPCLH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzcxi9urU80ZFC8%2BVBhIqct6m6SafBeNLFrF3pLqmaPAiEAitjuwr76Nuihxl5P8yfU%2BEUyOUTRoN7%2B7OnkZtsJC04q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAwXhWxgX9aqY2DrbyrcA1ht2z3M4L3JURd%2BCMZo5%2FTCoTstUPPyYZ9INsyOEXddTTcs2CtViLhfEzJsV9RRuN4HmuNJ6f9%2F3kdkQPcm9Vs3AfYzjjzHxOOezXfMoLiI45pikW%2BGcLBA%2FPHeX%2FbJ0zIHjjdpsP350R4eC8q0DF7GmYh44Q9fJ7iRvYg2ydXmNs%2BYJCKvX%2BvYtNm6jN3yHONFq4l1%2F2PedrvEN6TucOI5ceFSMYGlo0fjOr0Z1yGJjzHp%2Fx5EEtTJhSnoZGzfvdTDygLERtyH4P2eNk68Wcku7TwrPEjgXVzCsPbLpZBTdDIpzfQ9mg7ofxTdD1LxtK8TWOhwjtuAv7o84BcHepIEBhBzTILHYkJCvn8aDSP%2Ben%2FbmHlTisStNfNfMiFHeCrs1lI%2FHe9U4HIYNuQD6u6SP6Abx3FZA3OaZlwuq6Aq5HSm1w1iQXGkhLA%2BeebouHmhXqgHw%2BbgEtLN8x52Kc4o7tfy9U4GDsltMNKAs6PSnO0UPq%2FoBS6EpwwykWI7I4bJWbb2c0SoBcn%2FgE%2FTuAU3DAhp76%2F80%2BToC4j5m558%2BSYPrDRmjV%2BSIunA0Fad0N8gcjcIoxsACpVkRQ2IMQtcUG594e9krs7XWR0KOEkR7%2FoLOsr2%2FPkD3h0cMNO8vMAGOqUBulZsT2C1Uy%2BVOSOSA7Tv6QuYDbBAm6cnqSWBeyswU3YA2vSgCZPa3GBWt8E8Q6UcpehPrZE%2BeW9wjJ%2FE8Fy729P%2BXVvNWL2NAK4n9Z%2FDDnIPvOypr49frSEAAA0rdv%2BoezxgMPGnijhSeY3KCQlpM2NakovQvpWLrghTExqaUlC0IFvjowXvW04gxYK5d06L8sXyzTLEF8230TtW9ysHBau%2BsoJL&X-Amz-Signature=7093539a51e1f00d0c33ef5f5925a48a8dfa221aa196eb76525784ac1bb9ec25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2HPCLH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzcxi9urU80ZFC8%2BVBhIqct6m6SafBeNLFrF3pLqmaPAiEAitjuwr76Nuihxl5P8yfU%2BEUyOUTRoN7%2B7OnkZtsJC04q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAwXhWxgX9aqY2DrbyrcA1ht2z3M4L3JURd%2BCMZo5%2FTCoTstUPPyYZ9INsyOEXddTTcs2CtViLhfEzJsV9RRuN4HmuNJ6f9%2F3kdkQPcm9Vs3AfYzjjzHxOOezXfMoLiI45pikW%2BGcLBA%2FPHeX%2FbJ0zIHjjdpsP350R4eC8q0DF7GmYh44Q9fJ7iRvYg2ydXmNs%2BYJCKvX%2BvYtNm6jN3yHONFq4l1%2F2PedrvEN6TucOI5ceFSMYGlo0fjOr0Z1yGJjzHp%2Fx5EEtTJhSnoZGzfvdTDygLERtyH4P2eNk68Wcku7TwrPEjgXVzCsPbLpZBTdDIpzfQ9mg7ofxTdD1LxtK8TWOhwjtuAv7o84BcHepIEBhBzTILHYkJCvn8aDSP%2Ben%2FbmHlTisStNfNfMiFHeCrs1lI%2FHe9U4HIYNuQD6u6SP6Abx3FZA3OaZlwuq6Aq5HSm1w1iQXGkhLA%2BeebouHmhXqgHw%2BbgEtLN8x52Kc4o7tfy9U4GDsltMNKAs6PSnO0UPq%2FoBS6EpwwykWI7I4bJWbb2c0SoBcn%2FgE%2FTuAU3DAhp76%2F80%2BToC4j5m558%2BSYPrDRmjV%2BSIunA0Fad0N8gcjcIoxsACpVkRQ2IMQtcUG594e9krs7XWR0KOEkR7%2FoLOsr2%2FPkD3h0cMNO8vMAGOqUBulZsT2C1Uy%2BVOSOSA7Tv6QuYDbBAm6cnqSWBeyswU3YA2vSgCZPa3GBWt8E8Q6UcpehPrZE%2BeW9wjJ%2FE8Fy729P%2BXVvNWL2NAK4n9Z%2FDDnIPvOypr49frSEAAA0rdv%2BoezxgMPGnijhSeY3KCQlpM2NakovQvpWLrghTExqaUlC0IFvjowXvW04gxYK5d06L8sXyzTLEF8230TtW9ysHBau%2BsoJL&X-Amz-Signature=238e3f826205b581192e3abb2da1ad48c5cd78a5f36168df541fa397dda67e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M2HPCLH%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzcxi9urU80ZFC8%2BVBhIqct6m6SafBeNLFrF3pLqmaPAiEAitjuwr76Nuihxl5P8yfU%2BEUyOUTRoN7%2B7OnkZtsJC04q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAwXhWxgX9aqY2DrbyrcA1ht2z3M4L3JURd%2BCMZo5%2FTCoTstUPPyYZ9INsyOEXddTTcs2CtViLhfEzJsV9RRuN4HmuNJ6f9%2F3kdkQPcm9Vs3AfYzjjzHxOOezXfMoLiI45pikW%2BGcLBA%2FPHeX%2FbJ0zIHjjdpsP350R4eC8q0DF7GmYh44Q9fJ7iRvYg2ydXmNs%2BYJCKvX%2BvYtNm6jN3yHONFq4l1%2F2PedrvEN6TucOI5ceFSMYGlo0fjOr0Z1yGJjzHp%2Fx5EEtTJhSnoZGzfvdTDygLERtyH4P2eNk68Wcku7TwrPEjgXVzCsPbLpZBTdDIpzfQ9mg7ofxTdD1LxtK8TWOhwjtuAv7o84BcHepIEBhBzTILHYkJCvn8aDSP%2Ben%2FbmHlTisStNfNfMiFHeCrs1lI%2FHe9U4HIYNuQD6u6SP6Abx3FZA3OaZlwuq6Aq5HSm1w1iQXGkhLA%2BeebouHmhXqgHw%2BbgEtLN8x52Kc4o7tfy9U4GDsltMNKAs6PSnO0UPq%2FoBS6EpwwykWI7I4bJWbb2c0SoBcn%2FgE%2FTuAU3DAhp76%2F80%2BToC4j5m558%2BSYPrDRmjV%2BSIunA0Fad0N8gcjcIoxsACpVkRQ2IMQtcUG594e9krs7XWR0KOEkR7%2FoLOsr2%2FPkD3h0cMNO8vMAGOqUBulZsT2C1Uy%2BVOSOSA7Tv6QuYDbBAm6cnqSWBeyswU3YA2vSgCZPa3GBWt8E8Q6UcpehPrZE%2BeW9wjJ%2FE8Fy729P%2BXVvNWL2NAK4n9Z%2FDDnIPvOypr49frSEAAA0rdv%2BoezxgMPGnijhSeY3KCQlpM2NakovQvpWLrghTExqaUlC0IFvjowXvW04gxYK5d06L8sXyzTLEF8230TtW9ysHBau%2BsoJL&X-Amz-Signature=31d2f85f3e6f9dec30557c27907308613feea8edda744229e933eaeebb4cd177&X-Amz-SignedHeaders=host&x-id=GetObject)
