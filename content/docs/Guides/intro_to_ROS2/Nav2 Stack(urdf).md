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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WONAOX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET16YLeFFFSEeR06U24OPuRltLVCmeKCnk3vOAlqipLAiEA%2BIjmAb94xd%2FaBwqwgr%2FO8hWaC0s4nQ96JSg5ALMAZnUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM4CNpWwhF0Z8ZlSuyrcA1nHU3Z64r5sBhwAwR%2BItIhfpyVjDgpDuPY4%2FHMxEelFsGaqW89STL37iNOaa4HXYSci4NJgokAbTaEmD2Znl7C19fkmZ8Oax1ErJQIvP%2BQnNlWGQzK3w%2F8X0F%2FcBuOD4X1SFbCH%2Bl07HcEwDb1yiUYJNAha1BgazkUSAyqmmHYxgJhqAhxCH97yE2N1DLJEVmNRoXNkoEycmuTT4CEeUnAXjDZSf1pH5zu8i6xmsqAcTRE9OweIlA0MWQHTpWDewoPzY18PGzWSgCz8qd%2BoOErKi4A57OwQjMSEKp2X%2FBTKrn24RkVefwp0Jfe7MkxGXSSy2RitJdb%2BNwxr4IkPsAjK2P7SuxA3TXpzLYqiT6j4xd6UbrjoBX0AIwfmcpJ4O6OJSPtnOyn5HjBsV7J7nIOFY8iWzb%2B2TJyvYkyeyteJr%2By9NMtKvprdiOuxxjyUDg9%2B5MTGPEgy5PmajTuf5hOdp6TI88fblH5J0wu1%2FgGvwKTi3l7m8aSPgpTRhfEq%2BVPOnAMr%2FKi7B%2B9BbAM8qsZ4qN%2BBEMX7Nfe8295mLhoZwa6oNa7lCHWLdVi8obMH9ofodzTPBqZMVtksWjl2fLTg%2B5T%2FntLEU7XciE2y%2B3NegvH9uG2s8IXzQGRsMNLPpr4GOqUBCKAoC6T9%2FztJrq9ZAZVNoKJ3qio9%2Fbw0dm0JRF7LPY6SDCU5oJ%2BMfUqER1jYqVJNb0YPV9qzQ15KbfEpdXcEac1nhkOA9VixuATdWqBEuZq%2ByKrWBxrFAmGVBbZkUmyIXqBTA4qnoQ%2Fzhiq%2F9f4hgveRXlXBV4zdndZB3iWsbRZ9avQV%2FZ2Z0%2FFP%2F3VBwdHmuDwv4Bu7P7X1hAZQwBV1fCo%2FJF5j&X-Amz-Signature=179db459027b0bc6c5f56eeece234a64f20099af7dc5f681475080b7b4303be2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WONAOX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET16YLeFFFSEeR06U24OPuRltLVCmeKCnk3vOAlqipLAiEA%2BIjmAb94xd%2FaBwqwgr%2FO8hWaC0s4nQ96JSg5ALMAZnUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM4CNpWwhF0Z8ZlSuyrcA1nHU3Z64r5sBhwAwR%2BItIhfpyVjDgpDuPY4%2FHMxEelFsGaqW89STL37iNOaa4HXYSci4NJgokAbTaEmD2Znl7C19fkmZ8Oax1ErJQIvP%2BQnNlWGQzK3w%2F8X0F%2FcBuOD4X1SFbCH%2Bl07HcEwDb1yiUYJNAha1BgazkUSAyqmmHYxgJhqAhxCH97yE2N1DLJEVmNRoXNkoEycmuTT4CEeUnAXjDZSf1pH5zu8i6xmsqAcTRE9OweIlA0MWQHTpWDewoPzY18PGzWSgCz8qd%2BoOErKi4A57OwQjMSEKp2X%2FBTKrn24RkVefwp0Jfe7MkxGXSSy2RitJdb%2BNwxr4IkPsAjK2P7SuxA3TXpzLYqiT6j4xd6UbrjoBX0AIwfmcpJ4O6OJSPtnOyn5HjBsV7J7nIOFY8iWzb%2B2TJyvYkyeyteJr%2By9NMtKvprdiOuxxjyUDg9%2B5MTGPEgy5PmajTuf5hOdp6TI88fblH5J0wu1%2FgGvwKTi3l7m8aSPgpTRhfEq%2BVPOnAMr%2FKi7B%2B9BbAM8qsZ4qN%2BBEMX7Nfe8295mLhoZwa6oNa7lCHWLdVi8obMH9ofodzTPBqZMVtksWjl2fLTg%2B5T%2FntLEU7XciE2y%2B3NegvH9uG2s8IXzQGRsMNLPpr4GOqUBCKAoC6T9%2FztJrq9ZAZVNoKJ3qio9%2Fbw0dm0JRF7LPY6SDCU5oJ%2BMfUqER1jYqVJNb0YPV9qzQ15KbfEpdXcEac1nhkOA9VixuATdWqBEuZq%2ByKrWBxrFAmGVBbZkUmyIXqBTA4qnoQ%2Fzhiq%2F9f4hgveRXlXBV4zdndZB3iWsbRZ9avQV%2FZ2Z0%2FFP%2F3VBwdHmuDwv4Bu7P7X1hAZQwBV1fCo%2FJF5j&X-Amz-Signature=f082ebe66d254887f1ce693776b54dab59fc5e7d1b26f3f36652d38019fbec6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WONAOX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET16YLeFFFSEeR06U24OPuRltLVCmeKCnk3vOAlqipLAiEA%2BIjmAb94xd%2FaBwqwgr%2FO8hWaC0s4nQ96JSg5ALMAZnUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM4CNpWwhF0Z8ZlSuyrcA1nHU3Z64r5sBhwAwR%2BItIhfpyVjDgpDuPY4%2FHMxEelFsGaqW89STL37iNOaa4HXYSci4NJgokAbTaEmD2Znl7C19fkmZ8Oax1ErJQIvP%2BQnNlWGQzK3w%2F8X0F%2FcBuOD4X1SFbCH%2Bl07HcEwDb1yiUYJNAha1BgazkUSAyqmmHYxgJhqAhxCH97yE2N1DLJEVmNRoXNkoEycmuTT4CEeUnAXjDZSf1pH5zu8i6xmsqAcTRE9OweIlA0MWQHTpWDewoPzY18PGzWSgCz8qd%2BoOErKi4A57OwQjMSEKp2X%2FBTKrn24RkVefwp0Jfe7MkxGXSSy2RitJdb%2BNwxr4IkPsAjK2P7SuxA3TXpzLYqiT6j4xd6UbrjoBX0AIwfmcpJ4O6OJSPtnOyn5HjBsV7J7nIOFY8iWzb%2B2TJyvYkyeyteJr%2By9NMtKvprdiOuxxjyUDg9%2B5MTGPEgy5PmajTuf5hOdp6TI88fblH5J0wu1%2FgGvwKTi3l7m8aSPgpTRhfEq%2BVPOnAMr%2FKi7B%2B9BbAM8qsZ4qN%2BBEMX7Nfe8295mLhoZwa6oNa7lCHWLdVi8obMH9ofodzTPBqZMVtksWjl2fLTg%2B5T%2FntLEU7XciE2y%2B3NegvH9uG2s8IXzQGRsMNLPpr4GOqUBCKAoC6T9%2FztJrq9ZAZVNoKJ3qio9%2Fbw0dm0JRF7LPY6SDCU5oJ%2BMfUqER1jYqVJNb0YPV9qzQ15KbfEpdXcEac1nhkOA9VixuATdWqBEuZq%2ByKrWBxrFAmGVBbZkUmyIXqBTA4qnoQ%2Fzhiq%2F9f4hgveRXlXBV4zdndZB3iWsbRZ9avQV%2FZ2Z0%2FFP%2F3VBwdHmuDwv4Bu7P7X1hAZQwBV1fCo%2FJF5j&X-Amz-Signature=99452a2a7e29b427a4d4820dcfd4ac802f75db0fe294bf7748932e1eca2394af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WONAOX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET16YLeFFFSEeR06U24OPuRltLVCmeKCnk3vOAlqipLAiEA%2BIjmAb94xd%2FaBwqwgr%2FO8hWaC0s4nQ96JSg5ALMAZnUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM4CNpWwhF0Z8ZlSuyrcA1nHU3Z64r5sBhwAwR%2BItIhfpyVjDgpDuPY4%2FHMxEelFsGaqW89STL37iNOaa4HXYSci4NJgokAbTaEmD2Znl7C19fkmZ8Oax1ErJQIvP%2BQnNlWGQzK3w%2F8X0F%2FcBuOD4X1SFbCH%2Bl07HcEwDb1yiUYJNAha1BgazkUSAyqmmHYxgJhqAhxCH97yE2N1DLJEVmNRoXNkoEycmuTT4CEeUnAXjDZSf1pH5zu8i6xmsqAcTRE9OweIlA0MWQHTpWDewoPzY18PGzWSgCz8qd%2BoOErKi4A57OwQjMSEKp2X%2FBTKrn24RkVefwp0Jfe7MkxGXSSy2RitJdb%2BNwxr4IkPsAjK2P7SuxA3TXpzLYqiT6j4xd6UbrjoBX0AIwfmcpJ4O6OJSPtnOyn5HjBsV7J7nIOFY8iWzb%2B2TJyvYkyeyteJr%2By9NMtKvprdiOuxxjyUDg9%2B5MTGPEgy5PmajTuf5hOdp6TI88fblH5J0wu1%2FgGvwKTi3l7m8aSPgpTRhfEq%2BVPOnAMr%2FKi7B%2B9BbAM8qsZ4qN%2BBEMX7Nfe8295mLhoZwa6oNa7lCHWLdVi8obMH9ofodzTPBqZMVtksWjl2fLTg%2B5T%2FntLEU7XciE2y%2B3NegvH9uG2s8IXzQGRsMNLPpr4GOqUBCKAoC6T9%2FztJrq9ZAZVNoKJ3qio9%2Fbw0dm0JRF7LPY6SDCU5oJ%2BMfUqER1jYqVJNb0YPV9qzQ15KbfEpdXcEac1nhkOA9VixuATdWqBEuZq%2ByKrWBxrFAmGVBbZkUmyIXqBTA4qnoQ%2Fzhiq%2F9f4hgveRXlXBV4zdndZB3iWsbRZ9avQV%2FZ2Z0%2FFP%2F3VBwdHmuDwv4Bu7P7X1hAZQwBV1fCo%2FJF5j&X-Amz-Signature=7bdbfa581e44f5a621c6526475ec0f19c27f8b47a9f3acc086ceee9a5c93ad63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WONAOX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET16YLeFFFSEeR06U24OPuRltLVCmeKCnk3vOAlqipLAiEA%2BIjmAb94xd%2FaBwqwgr%2FO8hWaC0s4nQ96JSg5ALMAZnUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM4CNpWwhF0Z8ZlSuyrcA1nHU3Z64r5sBhwAwR%2BItIhfpyVjDgpDuPY4%2FHMxEelFsGaqW89STL37iNOaa4HXYSci4NJgokAbTaEmD2Znl7C19fkmZ8Oax1ErJQIvP%2BQnNlWGQzK3w%2F8X0F%2FcBuOD4X1SFbCH%2Bl07HcEwDb1yiUYJNAha1BgazkUSAyqmmHYxgJhqAhxCH97yE2N1DLJEVmNRoXNkoEycmuTT4CEeUnAXjDZSf1pH5zu8i6xmsqAcTRE9OweIlA0MWQHTpWDewoPzY18PGzWSgCz8qd%2BoOErKi4A57OwQjMSEKp2X%2FBTKrn24RkVefwp0Jfe7MkxGXSSy2RitJdb%2BNwxr4IkPsAjK2P7SuxA3TXpzLYqiT6j4xd6UbrjoBX0AIwfmcpJ4O6OJSPtnOyn5HjBsV7J7nIOFY8iWzb%2B2TJyvYkyeyteJr%2By9NMtKvprdiOuxxjyUDg9%2B5MTGPEgy5PmajTuf5hOdp6TI88fblH5J0wu1%2FgGvwKTi3l7m8aSPgpTRhfEq%2BVPOnAMr%2FKi7B%2B9BbAM8qsZ4qN%2BBEMX7Nfe8295mLhoZwa6oNa7lCHWLdVi8obMH9ofodzTPBqZMVtksWjl2fLTg%2B5T%2FntLEU7XciE2y%2B3NegvH9uG2s8IXzQGRsMNLPpr4GOqUBCKAoC6T9%2FztJrq9ZAZVNoKJ3qio9%2Fbw0dm0JRF7LPY6SDCU5oJ%2BMfUqER1jYqVJNb0YPV9qzQ15KbfEpdXcEac1nhkOA9VixuATdWqBEuZq%2ByKrWBxrFAmGVBbZkUmyIXqBTA4qnoQ%2Fzhiq%2F9f4hgveRXlXBV4zdndZB3iWsbRZ9avQV%2FZ2Z0%2FFP%2F3VBwdHmuDwv4Bu7P7X1hAZQwBV1fCo%2FJF5j&X-Amz-Signature=3ae077439b907afa00fb4178c9509b74c5c92ee95569574e2911799e2f58eb91&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WONAOX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T140810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIET16YLeFFFSEeR06U24OPuRltLVCmeKCnk3vOAlqipLAiEA%2BIjmAb94xd%2FaBwqwgr%2FO8hWaC0s4nQ96JSg5ALMAZnUq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM4CNpWwhF0Z8ZlSuyrcA1nHU3Z64r5sBhwAwR%2BItIhfpyVjDgpDuPY4%2FHMxEelFsGaqW89STL37iNOaa4HXYSci4NJgokAbTaEmD2Znl7C19fkmZ8Oax1ErJQIvP%2BQnNlWGQzK3w%2F8X0F%2FcBuOD4X1SFbCH%2Bl07HcEwDb1yiUYJNAha1BgazkUSAyqmmHYxgJhqAhxCH97yE2N1DLJEVmNRoXNkoEycmuTT4CEeUnAXjDZSf1pH5zu8i6xmsqAcTRE9OweIlA0MWQHTpWDewoPzY18PGzWSgCz8qd%2BoOErKi4A57OwQjMSEKp2X%2FBTKrn24RkVefwp0Jfe7MkxGXSSy2RitJdb%2BNwxr4IkPsAjK2P7SuxA3TXpzLYqiT6j4xd6UbrjoBX0AIwfmcpJ4O6OJSPtnOyn5HjBsV7J7nIOFY8iWzb%2B2TJyvYkyeyteJr%2By9NMtKvprdiOuxxjyUDg9%2B5MTGPEgy5PmajTuf5hOdp6TI88fblH5J0wu1%2FgGvwKTi3l7m8aSPgpTRhfEq%2BVPOnAMr%2FKi7B%2B9BbAM8qsZ4qN%2BBEMX7Nfe8295mLhoZwa6oNa7lCHWLdVi8obMH9ofodzTPBqZMVtksWjl2fLTg%2B5T%2FntLEU7XciE2y%2B3NegvH9uG2s8IXzQGRsMNLPpr4GOqUBCKAoC6T9%2FztJrq9ZAZVNoKJ3qio9%2Fbw0dm0JRF7LPY6SDCU5oJ%2BMfUqER1jYqVJNb0YPV9qzQ15KbfEpdXcEac1nhkOA9VixuATdWqBEuZq%2ByKrWBxrFAmGVBbZkUmyIXqBTA4qnoQ%2Fzhiq%2F9f4hgveRXlXBV4zdndZB3iWsbRZ9avQV%2FZ2Z0%2FFP%2F3VBwdHmuDwv4Bu7P7X1hAZQwBV1fCo%2FJF5j&X-Amz-Signature=26e0ddf8b868d38552088fbfadfb714b4a39f01cfe2f685384960d0f6e1cf784&X-Amz-SignedHeaders=host&x-id=GetObject)
