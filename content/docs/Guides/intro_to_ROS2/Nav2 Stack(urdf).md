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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EOAJFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9NZZU1Gs6svoXZCPCd4PEqw7pBSCRb%2Fb2h%2BmOxY%2FlxAiEArSFw0qvKM8aSdMJGrlq7lMRRhB1xhogbRpRNU6cPWD0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhzi690A33dI2jjeSrcAx5mcFsEFirlLMuawE7EzErRLW5LgmJzXyWgni4r7K6t5%2FLv0vTvXcR%2BPB5WCJgWeFkqUG%2BKvSCwt5hnoeSvvRQjzjVWUs2Ew8Numq1efuEz2DjunWb9%2BfINStW9%2Ft%2BNMPRtr%2BpAZKe2v%2B8L3%2BU6SQGqcQOhINan1vPpxpfW5X6uPG9VahplmV0sfpQfLiwWfTpUKgxBKiMFjyVTTh7a6lU9ZunJOFfSulVHHfCB1JSVKQf2W4VIEt5%2BGPeE5%2F%2FkDPQGV84tWITmU8KjYU6GkuT2Xw7HRBC7t73dT98YDwK3O18O%2FK6fZLeg2hwUvT405pn7HIbCfr0abAT%2FKR6G4w7Y4Rm1S37NLTl9AMGXIIXZI4XQPxLWjFBwCNJ1Js7hCksEj5Xad5M7db%2B3gaWndvyF9RhJzL0DN6rJ5%2FJ%2BvPJakiDmK3aClJzAXireIUXDW7OkcOlNhptO6VxC9LjHubpw1W8rAH%2BpYxPbVgsAQwJsWFe%2Fs4vrlgGS%2BbELjBBFRolvU%2Fi9nq2r9jIZZGe3loYPrEo7Eg0zBOEiFFdJmXd8zZ%2FKYq0cQTujcCySCijPk8%2FaTNfy6QSgQ7MEEVgg4Mxlelge56q6gEPh3aflBTjV%2FCXNABMuXxrmAvKNMLnR%2FcIGOqUBTilI30VIwgu3gsThfmyVXnp1MFWOed5pZpAG4oA435Btk5reRh9jX4tQtO0t8pG1tVDj9AQuPl7RFcMOizIrKcona6N9rJE%2Bl7Nhm903gvFGlFTVtMCdc%2F6vPEp0XJUVflQj03rohp6OEnFo2nrLrNWIqI%2B6ARvMqjlzPe%2FyzZaTbI3th7yE%2FMnItzdTrB55ELxn5rU5c9I1zjrGfOyNVvURvfCY&X-Amz-Signature=c88e2c23bfeffd4eda390ef3f29fa4dad497c20e85a0a26296fcfad4cdd1322a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EOAJFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9NZZU1Gs6svoXZCPCd4PEqw7pBSCRb%2Fb2h%2BmOxY%2FlxAiEArSFw0qvKM8aSdMJGrlq7lMRRhB1xhogbRpRNU6cPWD0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhzi690A33dI2jjeSrcAx5mcFsEFirlLMuawE7EzErRLW5LgmJzXyWgni4r7K6t5%2FLv0vTvXcR%2BPB5WCJgWeFkqUG%2BKvSCwt5hnoeSvvRQjzjVWUs2Ew8Numq1efuEz2DjunWb9%2BfINStW9%2Ft%2BNMPRtr%2BpAZKe2v%2B8L3%2BU6SQGqcQOhINan1vPpxpfW5X6uPG9VahplmV0sfpQfLiwWfTpUKgxBKiMFjyVTTh7a6lU9ZunJOFfSulVHHfCB1JSVKQf2W4VIEt5%2BGPeE5%2F%2FkDPQGV84tWITmU8KjYU6GkuT2Xw7HRBC7t73dT98YDwK3O18O%2FK6fZLeg2hwUvT405pn7HIbCfr0abAT%2FKR6G4w7Y4Rm1S37NLTl9AMGXIIXZI4XQPxLWjFBwCNJ1Js7hCksEj5Xad5M7db%2B3gaWndvyF9RhJzL0DN6rJ5%2FJ%2BvPJakiDmK3aClJzAXireIUXDW7OkcOlNhptO6VxC9LjHubpw1W8rAH%2BpYxPbVgsAQwJsWFe%2Fs4vrlgGS%2BbELjBBFRolvU%2Fi9nq2r9jIZZGe3loYPrEo7Eg0zBOEiFFdJmXd8zZ%2FKYq0cQTujcCySCijPk8%2FaTNfy6QSgQ7MEEVgg4Mxlelge56q6gEPh3aflBTjV%2FCXNABMuXxrmAvKNMLnR%2FcIGOqUBTilI30VIwgu3gsThfmyVXnp1MFWOed5pZpAG4oA435Btk5reRh9jX4tQtO0t8pG1tVDj9AQuPl7RFcMOizIrKcona6N9rJE%2Bl7Nhm903gvFGlFTVtMCdc%2F6vPEp0XJUVflQj03rohp6OEnFo2nrLrNWIqI%2B6ARvMqjlzPe%2FyzZaTbI3th7yE%2FMnItzdTrB55ELxn5rU5c9I1zjrGfOyNVvURvfCY&X-Amz-Signature=84fb4735bd07b765e2c312fff9f4d5cd204a0696899bf5367d484534115e8c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EOAJFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9NZZU1Gs6svoXZCPCd4PEqw7pBSCRb%2Fb2h%2BmOxY%2FlxAiEArSFw0qvKM8aSdMJGrlq7lMRRhB1xhogbRpRNU6cPWD0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhzi690A33dI2jjeSrcAx5mcFsEFirlLMuawE7EzErRLW5LgmJzXyWgni4r7K6t5%2FLv0vTvXcR%2BPB5WCJgWeFkqUG%2BKvSCwt5hnoeSvvRQjzjVWUs2Ew8Numq1efuEz2DjunWb9%2BfINStW9%2Ft%2BNMPRtr%2BpAZKe2v%2B8L3%2BU6SQGqcQOhINan1vPpxpfW5X6uPG9VahplmV0sfpQfLiwWfTpUKgxBKiMFjyVTTh7a6lU9ZunJOFfSulVHHfCB1JSVKQf2W4VIEt5%2BGPeE5%2F%2FkDPQGV84tWITmU8KjYU6GkuT2Xw7HRBC7t73dT98YDwK3O18O%2FK6fZLeg2hwUvT405pn7HIbCfr0abAT%2FKR6G4w7Y4Rm1S37NLTl9AMGXIIXZI4XQPxLWjFBwCNJ1Js7hCksEj5Xad5M7db%2B3gaWndvyF9RhJzL0DN6rJ5%2FJ%2BvPJakiDmK3aClJzAXireIUXDW7OkcOlNhptO6VxC9LjHubpw1W8rAH%2BpYxPbVgsAQwJsWFe%2Fs4vrlgGS%2BbELjBBFRolvU%2Fi9nq2r9jIZZGe3loYPrEo7Eg0zBOEiFFdJmXd8zZ%2FKYq0cQTujcCySCijPk8%2FaTNfy6QSgQ7MEEVgg4Mxlelge56q6gEPh3aflBTjV%2FCXNABMuXxrmAvKNMLnR%2FcIGOqUBTilI30VIwgu3gsThfmyVXnp1MFWOed5pZpAG4oA435Btk5reRh9jX4tQtO0t8pG1tVDj9AQuPl7RFcMOizIrKcona6N9rJE%2Bl7Nhm903gvFGlFTVtMCdc%2F6vPEp0XJUVflQj03rohp6OEnFo2nrLrNWIqI%2B6ARvMqjlzPe%2FyzZaTbI3th7yE%2FMnItzdTrB55ELxn5rU5c9I1zjrGfOyNVvURvfCY&X-Amz-Signature=6622b750fdf8d073f03fa1136736a1e8da7dd599a5455ae9db34efb836387c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EOAJFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9NZZU1Gs6svoXZCPCd4PEqw7pBSCRb%2Fb2h%2BmOxY%2FlxAiEArSFw0qvKM8aSdMJGrlq7lMRRhB1xhogbRpRNU6cPWD0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhzi690A33dI2jjeSrcAx5mcFsEFirlLMuawE7EzErRLW5LgmJzXyWgni4r7K6t5%2FLv0vTvXcR%2BPB5WCJgWeFkqUG%2BKvSCwt5hnoeSvvRQjzjVWUs2Ew8Numq1efuEz2DjunWb9%2BfINStW9%2Ft%2BNMPRtr%2BpAZKe2v%2B8L3%2BU6SQGqcQOhINan1vPpxpfW5X6uPG9VahplmV0sfpQfLiwWfTpUKgxBKiMFjyVTTh7a6lU9ZunJOFfSulVHHfCB1JSVKQf2W4VIEt5%2BGPeE5%2F%2FkDPQGV84tWITmU8KjYU6GkuT2Xw7HRBC7t73dT98YDwK3O18O%2FK6fZLeg2hwUvT405pn7HIbCfr0abAT%2FKR6G4w7Y4Rm1S37NLTl9AMGXIIXZI4XQPxLWjFBwCNJ1Js7hCksEj5Xad5M7db%2B3gaWndvyF9RhJzL0DN6rJ5%2FJ%2BvPJakiDmK3aClJzAXireIUXDW7OkcOlNhptO6VxC9LjHubpw1W8rAH%2BpYxPbVgsAQwJsWFe%2Fs4vrlgGS%2BbELjBBFRolvU%2Fi9nq2r9jIZZGe3loYPrEo7Eg0zBOEiFFdJmXd8zZ%2FKYq0cQTujcCySCijPk8%2FaTNfy6QSgQ7MEEVgg4Mxlelge56q6gEPh3aflBTjV%2FCXNABMuXxrmAvKNMLnR%2FcIGOqUBTilI30VIwgu3gsThfmyVXnp1MFWOed5pZpAG4oA435Btk5reRh9jX4tQtO0t8pG1tVDj9AQuPl7RFcMOizIrKcona6N9rJE%2Bl7Nhm903gvFGlFTVtMCdc%2F6vPEp0XJUVflQj03rohp6OEnFo2nrLrNWIqI%2B6ARvMqjlzPe%2FyzZaTbI3th7yE%2FMnItzdTrB55ELxn5rU5c9I1zjrGfOyNVvURvfCY&X-Amz-Signature=f7c56a1acf0ec84f1894f6d1a084c74ed17f41e01332dd5624ab98c6b7d5bf53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EOAJFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9NZZU1Gs6svoXZCPCd4PEqw7pBSCRb%2Fb2h%2BmOxY%2FlxAiEArSFw0qvKM8aSdMJGrlq7lMRRhB1xhogbRpRNU6cPWD0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhzi690A33dI2jjeSrcAx5mcFsEFirlLMuawE7EzErRLW5LgmJzXyWgni4r7K6t5%2FLv0vTvXcR%2BPB5WCJgWeFkqUG%2BKvSCwt5hnoeSvvRQjzjVWUs2Ew8Numq1efuEz2DjunWb9%2BfINStW9%2Ft%2BNMPRtr%2BpAZKe2v%2B8L3%2BU6SQGqcQOhINan1vPpxpfW5X6uPG9VahplmV0sfpQfLiwWfTpUKgxBKiMFjyVTTh7a6lU9ZunJOFfSulVHHfCB1JSVKQf2W4VIEt5%2BGPeE5%2F%2FkDPQGV84tWITmU8KjYU6GkuT2Xw7HRBC7t73dT98YDwK3O18O%2FK6fZLeg2hwUvT405pn7HIbCfr0abAT%2FKR6G4w7Y4Rm1S37NLTl9AMGXIIXZI4XQPxLWjFBwCNJ1Js7hCksEj5Xad5M7db%2B3gaWndvyF9RhJzL0DN6rJ5%2FJ%2BvPJakiDmK3aClJzAXireIUXDW7OkcOlNhptO6VxC9LjHubpw1W8rAH%2BpYxPbVgsAQwJsWFe%2Fs4vrlgGS%2BbELjBBFRolvU%2Fi9nq2r9jIZZGe3loYPrEo7Eg0zBOEiFFdJmXd8zZ%2FKYq0cQTujcCySCijPk8%2FaTNfy6QSgQ7MEEVgg4Mxlelge56q6gEPh3aflBTjV%2FCXNABMuXxrmAvKNMLnR%2FcIGOqUBTilI30VIwgu3gsThfmyVXnp1MFWOed5pZpAG4oA435Btk5reRh9jX4tQtO0t8pG1tVDj9AQuPl7RFcMOizIrKcona6N9rJE%2Bl7Nhm903gvFGlFTVtMCdc%2F6vPEp0XJUVflQj03rohp6OEnFo2nrLrNWIqI%2B6ARvMqjlzPe%2FyzZaTbI3th7yE%2FMnItzdTrB55ELxn5rU5c9I1zjrGfOyNVvURvfCY&X-Amz-Signature=00b91f130406a15959ca6c9203516b91e7be3b595dc02a44da62e5bc6fd2bc22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5EOAJFF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9NZZU1Gs6svoXZCPCd4PEqw7pBSCRb%2Fb2h%2BmOxY%2FlxAiEArSFw0qvKM8aSdMJGrlq7lMRRhB1xhogbRpRNU6cPWD0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhzi690A33dI2jjeSrcAx5mcFsEFirlLMuawE7EzErRLW5LgmJzXyWgni4r7K6t5%2FLv0vTvXcR%2BPB5WCJgWeFkqUG%2BKvSCwt5hnoeSvvRQjzjVWUs2Ew8Numq1efuEz2DjunWb9%2BfINStW9%2Ft%2BNMPRtr%2BpAZKe2v%2B8L3%2BU6SQGqcQOhINan1vPpxpfW5X6uPG9VahplmV0sfpQfLiwWfTpUKgxBKiMFjyVTTh7a6lU9ZunJOFfSulVHHfCB1JSVKQf2W4VIEt5%2BGPeE5%2F%2FkDPQGV84tWITmU8KjYU6GkuT2Xw7HRBC7t73dT98YDwK3O18O%2FK6fZLeg2hwUvT405pn7HIbCfr0abAT%2FKR6G4w7Y4Rm1S37NLTl9AMGXIIXZI4XQPxLWjFBwCNJ1Js7hCksEj5Xad5M7db%2B3gaWndvyF9RhJzL0DN6rJ5%2FJ%2BvPJakiDmK3aClJzAXireIUXDW7OkcOlNhptO6VxC9LjHubpw1W8rAH%2BpYxPbVgsAQwJsWFe%2Fs4vrlgGS%2BbELjBBFRolvU%2Fi9nq2r9jIZZGe3loYPrEo7Eg0zBOEiFFdJmXd8zZ%2FKYq0cQTujcCySCijPk8%2FaTNfy6QSgQ7MEEVgg4Mxlelge56q6gEPh3aflBTjV%2FCXNABMuXxrmAvKNMLnR%2FcIGOqUBTilI30VIwgu3gsThfmyVXnp1MFWOed5pZpAG4oA435Btk5reRh9jX4tQtO0t8pG1tVDj9AQuPl7RFcMOizIrKcona6N9rJE%2Bl7Nhm903gvFGlFTVtMCdc%2F6vPEp0XJUVflQj03rohp6OEnFo2nrLrNWIqI%2B6ARvMqjlzPe%2FyzZaTbI3th7yE%2FMnItzdTrB55ELxn5rU5c9I1zjrGfOyNVvURvfCY&X-Amz-Signature=b18cf7a6875cdd6707943923b77643464e94353eeda51bd0454e889210191d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
