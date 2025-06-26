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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROUJWUJI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE9vMfXY8JINqfnmGvTzBLLgYv%2BtLgYHghFBkxIVIK9CAiBg8xIbL8%2BgaPbb6d3oSYTx8rxumhNDAYempwPi%2Fh4n2ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMdoAL31bRbZujTHSPKtwDJa3kPzgAXDo00qgJDStnnJEz4y1ELYZ8h5M%2FErCe03CnAbuRicBlTxwAmm4F2qogMdXqr3MPYgfjGgjZSDiEheu0eQFZoFPszM%2BZ%2B5z5x6Dv4xWoVK2PPK5nGvmfNnejPavKVi%2F9Xdt347X8b1py1osdBsvB7KyZsNIwB3WrjPVHQPsHoR6qcdk7JIB11vFWaurLrASfeqIMb3scKPkV%2FQo47g4vQTtpxd2H1bAYNFHDn%2BYIv0L4%2Bc8y8RUafNngEWMfnI%2F9giOWIcGIsI9Hz8uiZ%2BcHVQ1tDyrb9z1cDeVqUcKb4q579X4p0vmsuOhZbE1kG9wrWyQjsfp4t%2FpmP47G6ZHhj8ZmjHy6gMwiNEDuSWgUUwvuRMAlbL9Ew6JJ9oAyI4x2zg0E%2FtC%2BwUmlaN9ifXW0FEywYupe6pFjv%2Bi%2BfwO%2FBLDUnE6STs5m2c5YEOfz2G1sdkG%2FZg7ts4bB4M7rw%2FDHIoMDeZHVGhmf7p1A%2BNrjw77tKSQJLft0avfPpvvPvuCGHpaO7MswhFVwBnBFXkPdEcGme%2FnZZU7Tl%2F55vn4PpP4KMwObhuZzT2AkR%2F2OGrN45Uqga34WeB68%2F173bJhyWprYC0aXQinCO3jsvas5hb6uVhyNRaEwk9%2FywgY6pgGs5489UhZe1dDJZ62LvTDHo8fK2RlExyUye5LRRSZHCHkirrlyAxBkpLDerC%2B8fkS5XBJ1EPIFctCk2t5rxgkMgFaAxyjGb%2FiOJT%2B9l09GFmJP5IlhwEPAHKTbs6X7QC2%2BCiM9%2FY7F%2BI29M5oEvBYoL2Sn%2FaXx22b63zBa1hRV2xUWAM6Jsoah%2BPttEd3BJzU5iKh9tbdn80k6ZZTPsdrCSAQ%2BRt8O&X-Amz-Signature=d461757f7d4ed181c801614feea0aa3e327af7018fe1fb40a90e0ab7d235ec9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROUJWUJI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE9vMfXY8JINqfnmGvTzBLLgYv%2BtLgYHghFBkxIVIK9CAiBg8xIbL8%2BgaPbb6d3oSYTx8rxumhNDAYempwPi%2Fh4n2ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMdoAL31bRbZujTHSPKtwDJa3kPzgAXDo00qgJDStnnJEz4y1ELYZ8h5M%2FErCe03CnAbuRicBlTxwAmm4F2qogMdXqr3MPYgfjGgjZSDiEheu0eQFZoFPszM%2BZ%2B5z5x6Dv4xWoVK2PPK5nGvmfNnejPavKVi%2F9Xdt347X8b1py1osdBsvB7KyZsNIwB3WrjPVHQPsHoR6qcdk7JIB11vFWaurLrASfeqIMb3scKPkV%2FQo47g4vQTtpxd2H1bAYNFHDn%2BYIv0L4%2Bc8y8RUafNngEWMfnI%2F9giOWIcGIsI9Hz8uiZ%2BcHVQ1tDyrb9z1cDeVqUcKb4q579X4p0vmsuOhZbE1kG9wrWyQjsfp4t%2FpmP47G6ZHhj8ZmjHy6gMwiNEDuSWgUUwvuRMAlbL9Ew6JJ9oAyI4x2zg0E%2FtC%2BwUmlaN9ifXW0FEywYupe6pFjv%2Bi%2BfwO%2FBLDUnE6STs5m2c5YEOfz2G1sdkG%2FZg7ts4bB4M7rw%2FDHIoMDeZHVGhmf7p1A%2BNrjw77tKSQJLft0avfPpvvPvuCGHpaO7MswhFVwBnBFXkPdEcGme%2FnZZU7Tl%2F55vn4PpP4KMwObhuZzT2AkR%2F2OGrN45Uqga34WeB68%2F173bJhyWprYC0aXQinCO3jsvas5hb6uVhyNRaEwk9%2FywgY6pgGs5489UhZe1dDJZ62LvTDHo8fK2RlExyUye5LRRSZHCHkirrlyAxBkpLDerC%2B8fkS5XBJ1EPIFctCk2t5rxgkMgFaAxyjGb%2FiOJT%2B9l09GFmJP5IlhwEPAHKTbs6X7QC2%2BCiM9%2FY7F%2BI29M5oEvBYoL2Sn%2FaXx22b63zBa1hRV2xUWAM6Jsoah%2BPttEd3BJzU5iKh9tbdn80k6ZZTPsdrCSAQ%2BRt8O&X-Amz-Signature=e55c53f70d143a79509e5f744c1638baa01b37a4c006115e370e94d264c13dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROUJWUJI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE9vMfXY8JINqfnmGvTzBLLgYv%2BtLgYHghFBkxIVIK9CAiBg8xIbL8%2BgaPbb6d3oSYTx8rxumhNDAYempwPi%2Fh4n2ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMdoAL31bRbZujTHSPKtwDJa3kPzgAXDo00qgJDStnnJEz4y1ELYZ8h5M%2FErCe03CnAbuRicBlTxwAmm4F2qogMdXqr3MPYgfjGgjZSDiEheu0eQFZoFPszM%2BZ%2B5z5x6Dv4xWoVK2PPK5nGvmfNnejPavKVi%2F9Xdt347X8b1py1osdBsvB7KyZsNIwB3WrjPVHQPsHoR6qcdk7JIB11vFWaurLrASfeqIMb3scKPkV%2FQo47g4vQTtpxd2H1bAYNFHDn%2BYIv0L4%2Bc8y8RUafNngEWMfnI%2F9giOWIcGIsI9Hz8uiZ%2BcHVQ1tDyrb9z1cDeVqUcKb4q579X4p0vmsuOhZbE1kG9wrWyQjsfp4t%2FpmP47G6ZHhj8ZmjHy6gMwiNEDuSWgUUwvuRMAlbL9Ew6JJ9oAyI4x2zg0E%2FtC%2BwUmlaN9ifXW0FEywYupe6pFjv%2Bi%2BfwO%2FBLDUnE6STs5m2c5YEOfz2G1sdkG%2FZg7ts4bB4M7rw%2FDHIoMDeZHVGhmf7p1A%2BNrjw77tKSQJLft0avfPpvvPvuCGHpaO7MswhFVwBnBFXkPdEcGme%2FnZZU7Tl%2F55vn4PpP4KMwObhuZzT2AkR%2F2OGrN45Uqga34WeB68%2F173bJhyWprYC0aXQinCO3jsvas5hb6uVhyNRaEwk9%2FywgY6pgGs5489UhZe1dDJZ62LvTDHo8fK2RlExyUye5LRRSZHCHkirrlyAxBkpLDerC%2B8fkS5XBJ1EPIFctCk2t5rxgkMgFaAxyjGb%2FiOJT%2B9l09GFmJP5IlhwEPAHKTbs6X7QC2%2BCiM9%2FY7F%2BI29M5oEvBYoL2Sn%2FaXx22b63zBa1hRV2xUWAM6Jsoah%2BPttEd3BJzU5iKh9tbdn80k6ZZTPsdrCSAQ%2BRt8O&X-Amz-Signature=535bfbefcb6c2461702b17ac7d02511a38cb2d357c1d94466d22f6569468209d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROUJWUJI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE9vMfXY8JINqfnmGvTzBLLgYv%2BtLgYHghFBkxIVIK9CAiBg8xIbL8%2BgaPbb6d3oSYTx8rxumhNDAYempwPi%2Fh4n2ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMdoAL31bRbZujTHSPKtwDJa3kPzgAXDo00qgJDStnnJEz4y1ELYZ8h5M%2FErCe03CnAbuRicBlTxwAmm4F2qogMdXqr3MPYgfjGgjZSDiEheu0eQFZoFPszM%2BZ%2B5z5x6Dv4xWoVK2PPK5nGvmfNnejPavKVi%2F9Xdt347X8b1py1osdBsvB7KyZsNIwB3WrjPVHQPsHoR6qcdk7JIB11vFWaurLrASfeqIMb3scKPkV%2FQo47g4vQTtpxd2H1bAYNFHDn%2BYIv0L4%2Bc8y8RUafNngEWMfnI%2F9giOWIcGIsI9Hz8uiZ%2BcHVQ1tDyrb9z1cDeVqUcKb4q579X4p0vmsuOhZbE1kG9wrWyQjsfp4t%2FpmP47G6ZHhj8ZmjHy6gMwiNEDuSWgUUwvuRMAlbL9Ew6JJ9oAyI4x2zg0E%2FtC%2BwUmlaN9ifXW0FEywYupe6pFjv%2Bi%2BfwO%2FBLDUnE6STs5m2c5YEOfz2G1sdkG%2FZg7ts4bB4M7rw%2FDHIoMDeZHVGhmf7p1A%2BNrjw77tKSQJLft0avfPpvvPvuCGHpaO7MswhFVwBnBFXkPdEcGme%2FnZZU7Tl%2F55vn4PpP4KMwObhuZzT2AkR%2F2OGrN45Uqga34WeB68%2F173bJhyWprYC0aXQinCO3jsvas5hb6uVhyNRaEwk9%2FywgY6pgGs5489UhZe1dDJZ62LvTDHo8fK2RlExyUye5LRRSZHCHkirrlyAxBkpLDerC%2B8fkS5XBJ1EPIFctCk2t5rxgkMgFaAxyjGb%2FiOJT%2B9l09GFmJP5IlhwEPAHKTbs6X7QC2%2BCiM9%2FY7F%2BI29M5oEvBYoL2Sn%2FaXx22b63zBa1hRV2xUWAM6Jsoah%2BPttEd3BJzU5iKh9tbdn80k6ZZTPsdrCSAQ%2BRt8O&X-Amz-Signature=c81affac4de97fb40e7e908f9fd77a86c3e443a927a7df87f3ed79926c440438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROUJWUJI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE9vMfXY8JINqfnmGvTzBLLgYv%2BtLgYHghFBkxIVIK9CAiBg8xIbL8%2BgaPbb6d3oSYTx8rxumhNDAYempwPi%2Fh4n2ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMdoAL31bRbZujTHSPKtwDJa3kPzgAXDo00qgJDStnnJEz4y1ELYZ8h5M%2FErCe03CnAbuRicBlTxwAmm4F2qogMdXqr3MPYgfjGgjZSDiEheu0eQFZoFPszM%2BZ%2B5z5x6Dv4xWoVK2PPK5nGvmfNnejPavKVi%2F9Xdt347X8b1py1osdBsvB7KyZsNIwB3WrjPVHQPsHoR6qcdk7JIB11vFWaurLrASfeqIMb3scKPkV%2FQo47g4vQTtpxd2H1bAYNFHDn%2BYIv0L4%2Bc8y8RUafNngEWMfnI%2F9giOWIcGIsI9Hz8uiZ%2BcHVQ1tDyrb9z1cDeVqUcKb4q579X4p0vmsuOhZbE1kG9wrWyQjsfp4t%2FpmP47G6ZHhj8ZmjHy6gMwiNEDuSWgUUwvuRMAlbL9Ew6JJ9oAyI4x2zg0E%2FtC%2BwUmlaN9ifXW0FEywYupe6pFjv%2Bi%2BfwO%2FBLDUnE6STs5m2c5YEOfz2G1sdkG%2FZg7ts4bB4M7rw%2FDHIoMDeZHVGhmf7p1A%2BNrjw77tKSQJLft0avfPpvvPvuCGHpaO7MswhFVwBnBFXkPdEcGme%2FnZZU7Tl%2F55vn4PpP4KMwObhuZzT2AkR%2F2OGrN45Uqga34WeB68%2F173bJhyWprYC0aXQinCO3jsvas5hb6uVhyNRaEwk9%2FywgY6pgGs5489UhZe1dDJZ62LvTDHo8fK2RlExyUye5LRRSZHCHkirrlyAxBkpLDerC%2B8fkS5XBJ1EPIFctCk2t5rxgkMgFaAxyjGb%2FiOJT%2B9l09GFmJP5IlhwEPAHKTbs6X7QC2%2BCiM9%2FY7F%2BI29M5oEvBYoL2Sn%2FaXx22b63zBa1hRV2xUWAM6Jsoah%2BPttEd3BJzU5iKh9tbdn80k6ZZTPsdrCSAQ%2BRt8O&X-Amz-Signature=f57c1408478e1ef50e5fb001de447d57aa012c95f78aae667b0e98e7335b5b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROUJWUJI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T024048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIE9vMfXY8JINqfnmGvTzBLLgYv%2BtLgYHghFBkxIVIK9CAiBg8xIbL8%2BgaPbb6d3oSYTx8rxumhNDAYempwPi%2Fh4n2ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMdoAL31bRbZujTHSPKtwDJa3kPzgAXDo00qgJDStnnJEz4y1ELYZ8h5M%2FErCe03CnAbuRicBlTxwAmm4F2qogMdXqr3MPYgfjGgjZSDiEheu0eQFZoFPszM%2BZ%2B5z5x6Dv4xWoVK2PPK5nGvmfNnejPavKVi%2F9Xdt347X8b1py1osdBsvB7KyZsNIwB3WrjPVHQPsHoR6qcdk7JIB11vFWaurLrASfeqIMb3scKPkV%2FQo47g4vQTtpxd2H1bAYNFHDn%2BYIv0L4%2Bc8y8RUafNngEWMfnI%2F9giOWIcGIsI9Hz8uiZ%2BcHVQ1tDyrb9z1cDeVqUcKb4q579X4p0vmsuOhZbE1kG9wrWyQjsfp4t%2FpmP47G6ZHhj8ZmjHy6gMwiNEDuSWgUUwvuRMAlbL9Ew6JJ9oAyI4x2zg0E%2FtC%2BwUmlaN9ifXW0FEywYupe6pFjv%2Bi%2BfwO%2FBLDUnE6STs5m2c5YEOfz2G1sdkG%2FZg7ts4bB4M7rw%2FDHIoMDeZHVGhmf7p1A%2BNrjw77tKSQJLft0avfPpvvPvuCGHpaO7MswhFVwBnBFXkPdEcGme%2FnZZU7Tl%2F55vn4PpP4KMwObhuZzT2AkR%2F2OGrN45Uqga34WeB68%2F173bJhyWprYC0aXQinCO3jsvas5hb6uVhyNRaEwk9%2FywgY6pgGs5489UhZe1dDJZ62LvTDHo8fK2RlExyUye5LRRSZHCHkirrlyAxBkpLDerC%2B8fkS5XBJ1EPIFctCk2t5rxgkMgFaAxyjGb%2FiOJT%2B9l09GFmJP5IlhwEPAHKTbs6X7QC2%2BCiM9%2FY7F%2BI29M5oEvBYoL2Sn%2FaXx22b63zBa1hRV2xUWAM6Jsoah%2BPttEd3BJzU5iKh9tbdn80k6ZZTPsdrCSAQ%2BRt8O&X-Amz-Signature=fa8413d2efb90626394cce1d2a33dcb5e06bec24a65325145f4ae3fc8e4547e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
