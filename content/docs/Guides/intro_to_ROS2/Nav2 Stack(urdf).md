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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIYC2FX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkYiBQf70I8t%2BirnQ%2BYDRCmPbfHQYZNqrPhow5rR1%2FrAiBRXQpa2gTeYCHmCb%2BEn26ghKxn%2BCF8E4zBCt6Lo%2FNvMCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1MB3rMIjDyzaD2qKtwDA2Q5J3hCj1bxC6iQjsuwlBxj8DPdjTnY%2F6IIG6%2Bju0TMi4FR5UoW%2BKGjNxTB5UnaW7iEfXL2x6i77ayMS3osJrLXTkVe3JEDGyMz6kTi82lMfUJU%2B6grEFubcUnTIcgbx4GGfMZU6gzmFrvi%2FmiO6PkmMP3VQ0MzF%2BR0XExNTAP4gAnh%2Bv2FdS6D2anv3aOivAy0omHZdfCLqLcSl%2BCoA42sstiW4Fcm8Hm3rl4QRmzGh9gbP2Q%2FwWp2MOKB1DzXxmFecvLgE3lckYrIZ2LWvO2nQzWd1U%2BsG5NnO%2F%2FJNQ00Vx0EshjEKomDD3MLUNpyZh1SMGKTQynI9rjzb3Y6ctS6lc%2Bb%2Fagcc30XzSdp0hXHePZByAlhb3pLbEzw%2BQZm%2FHWMZRq87gZyeV6tap1odYN1yR3L9o9onOW0T%2FFS%2FltUyQASMg%2BKZBsKUIf65%2F1rKVywWypNeWBjQCpMNKcG4JQ%2BBtIx4GtK%2BYn2JFKdfYShw1CR5eKbUi89shWXnkCoFYC5SXssGfI8Gykv7lNHtzJ8qlvckih%2BLClxrMvyxNYTF3YCuQ5WFnEZPQJU0DV1FhcyHs0I1nFzAIKwBziyPVzWvx%2FddC7rQn2Qcfk930D%2FpAq0NYEbi%2B2Tcqwwzr6gwgY6pgGt8j%2F3kwzt2Q6r7KbM8ijdlvyOn5jiSkhCjHYBHOgghWwVLww2VDHbmCY2Bmd%2Bi3O1dcvnKb4CZGGkVmlOVqxFoWQGGnoGSLT%2BCoRFulbity8EGvTqZ86JlvcTeqjAxTqOo2xlnseGSCNm0%2F9QSaO0fPRYEZ3eMN%2F7YnmHKfTioguqzfcYdSL7l7HjpdvXn9Z1JHIIt0bsPrYfUeI9JDC6u5lefUzk&X-Amz-Signature=da814abf28586015d66de71a52a88d2f7edb1e78654dabdbfd7679066d9cc58e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIYC2FX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkYiBQf70I8t%2BirnQ%2BYDRCmPbfHQYZNqrPhow5rR1%2FrAiBRXQpa2gTeYCHmCb%2BEn26ghKxn%2BCF8E4zBCt6Lo%2FNvMCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1MB3rMIjDyzaD2qKtwDA2Q5J3hCj1bxC6iQjsuwlBxj8DPdjTnY%2F6IIG6%2Bju0TMi4FR5UoW%2BKGjNxTB5UnaW7iEfXL2x6i77ayMS3osJrLXTkVe3JEDGyMz6kTi82lMfUJU%2B6grEFubcUnTIcgbx4GGfMZU6gzmFrvi%2FmiO6PkmMP3VQ0MzF%2BR0XExNTAP4gAnh%2Bv2FdS6D2anv3aOivAy0omHZdfCLqLcSl%2BCoA42sstiW4Fcm8Hm3rl4QRmzGh9gbP2Q%2FwWp2MOKB1DzXxmFecvLgE3lckYrIZ2LWvO2nQzWd1U%2BsG5NnO%2F%2FJNQ00Vx0EshjEKomDD3MLUNpyZh1SMGKTQynI9rjzb3Y6ctS6lc%2Bb%2Fagcc30XzSdp0hXHePZByAlhb3pLbEzw%2BQZm%2FHWMZRq87gZyeV6tap1odYN1yR3L9o9onOW0T%2FFS%2FltUyQASMg%2BKZBsKUIf65%2F1rKVywWypNeWBjQCpMNKcG4JQ%2BBtIx4GtK%2BYn2JFKdfYShw1CR5eKbUi89shWXnkCoFYC5SXssGfI8Gykv7lNHtzJ8qlvckih%2BLClxrMvyxNYTF3YCuQ5WFnEZPQJU0DV1FhcyHs0I1nFzAIKwBziyPVzWvx%2FddC7rQn2Qcfk930D%2FpAq0NYEbi%2B2Tcqwwzr6gwgY6pgGt8j%2F3kwzt2Q6r7KbM8ijdlvyOn5jiSkhCjHYBHOgghWwVLww2VDHbmCY2Bmd%2Bi3O1dcvnKb4CZGGkVmlOVqxFoWQGGnoGSLT%2BCoRFulbity8EGvTqZ86JlvcTeqjAxTqOo2xlnseGSCNm0%2F9QSaO0fPRYEZ3eMN%2F7YnmHKfTioguqzfcYdSL7l7HjpdvXn9Z1JHIIt0bsPrYfUeI9JDC6u5lefUzk&X-Amz-Signature=5923e4ac206795a04bbbee67ed99e53617d0fdc156170127d7daccc09e0d3e47&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIYC2FX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkYiBQf70I8t%2BirnQ%2BYDRCmPbfHQYZNqrPhow5rR1%2FrAiBRXQpa2gTeYCHmCb%2BEn26ghKxn%2BCF8E4zBCt6Lo%2FNvMCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1MB3rMIjDyzaD2qKtwDA2Q5J3hCj1bxC6iQjsuwlBxj8DPdjTnY%2F6IIG6%2Bju0TMi4FR5UoW%2BKGjNxTB5UnaW7iEfXL2x6i77ayMS3osJrLXTkVe3JEDGyMz6kTi82lMfUJU%2B6grEFubcUnTIcgbx4GGfMZU6gzmFrvi%2FmiO6PkmMP3VQ0MzF%2BR0XExNTAP4gAnh%2Bv2FdS6D2anv3aOivAy0omHZdfCLqLcSl%2BCoA42sstiW4Fcm8Hm3rl4QRmzGh9gbP2Q%2FwWp2MOKB1DzXxmFecvLgE3lckYrIZ2LWvO2nQzWd1U%2BsG5NnO%2F%2FJNQ00Vx0EshjEKomDD3MLUNpyZh1SMGKTQynI9rjzb3Y6ctS6lc%2Bb%2Fagcc30XzSdp0hXHePZByAlhb3pLbEzw%2BQZm%2FHWMZRq87gZyeV6tap1odYN1yR3L9o9onOW0T%2FFS%2FltUyQASMg%2BKZBsKUIf65%2F1rKVywWypNeWBjQCpMNKcG4JQ%2BBtIx4GtK%2BYn2JFKdfYShw1CR5eKbUi89shWXnkCoFYC5SXssGfI8Gykv7lNHtzJ8qlvckih%2BLClxrMvyxNYTF3YCuQ5WFnEZPQJU0DV1FhcyHs0I1nFzAIKwBziyPVzWvx%2FddC7rQn2Qcfk930D%2FpAq0NYEbi%2B2Tcqwwzr6gwgY6pgGt8j%2F3kwzt2Q6r7KbM8ijdlvyOn5jiSkhCjHYBHOgghWwVLww2VDHbmCY2Bmd%2Bi3O1dcvnKb4CZGGkVmlOVqxFoWQGGnoGSLT%2BCoRFulbity8EGvTqZ86JlvcTeqjAxTqOo2xlnseGSCNm0%2F9QSaO0fPRYEZ3eMN%2F7YnmHKfTioguqzfcYdSL7l7HjpdvXn9Z1JHIIt0bsPrYfUeI9JDC6u5lefUzk&X-Amz-Signature=79247a30ddec4959f9962a6b4dad55fdf06894a1a174c00475d26046991b62ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIYC2FX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkYiBQf70I8t%2BirnQ%2BYDRCmPbfHQYZNqrPhow5rR1%2FrAiBRXQpa2gTeYCHmCb%2BEn26ghKxn%2BCF8E4zBCt6Lo%2FNvMCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1MB3rMIjDyzaD2qKtwDA2Q5J3hCj1bxC6iQjsuwlBxj8DPdjTnY%2F6IIG6%2Bju0TMi4FR5UoW%2BKGjNxTB5UnaW7iEfXL2x6i77ayMS3osJrLXTkVe3JEDGyMz6kTi82lMfUJU%2B6grEFubcUnTIcgbx4GGfMZU6gzmFrvi%2FmiO6PkmMP3VQ0MzF%2BR0XExNTAP4gAnh%2Bv2FdS6D2anv3aOivAy0omHZdfCLqLcSl%2BCoA42sstiW4Fcm8Hm3rl4QRmzGh9gbP2Q%2FwWp2MOKB1DzXxmFecvLgE3lckYrIZ2LWvO2nQzWd1U%2BsG5NnO%2F%2FJNQ00Vx0EshjEKomDD3MLUNpyZh1SMGKTQynI9rjzb3Y6ctS6lc%2Bb%2Fagcc30XzSdp0hXHePZByAlhb3pLbEzw%2BQZm%2FHWMZRq87gZyeV6tap1odYN1yR3L9o9onOW0T%2FFS%2FltUyQASMg%2BKZBsKUIf65%2F1rKVywWypNeWBjQCpMNKcG4JQ%2BBtIx4GtK%2BYn2JFKdfYShw1CR5eKbUi89shWXnkCoFYC5SXssGfI8Gykv7lNHtzJ8qlvckih%2BLClxrMvyxNYTF3YCuQ5WFnEZPQJU0DV1FhcyHs0I1nFzAIKwBziyPVzWvx%2FddC7rQn2Qcfk930D%2FpAq0NYEbi%2B2Tcqwwzr6gwgY6pgGt8j%2F3kwzt2Q6r7KbM8ijdlvyOn5jiSkhCjHYBHOgghWwVLww2VDHbmCY2Bmd%2Bi3O1dcvnKb4CZGGkVmlOVqxFoWQGGnoGSLT%2BCoRFulbity8EGvTqZ86JlvcTeqjAxTqOo2xlnseGSCNm0%2F9QSaO0fPRYEZ3eMN%2F7YnmHKfTioguqzfcYdSL7l7HjpdvXn9Z1JHIIt0bsPrYfUeI9JDC6u5lefUzk&X-Amz-Signature=0e185cddc9fd0b99ac385f46f9c23c4bfbc4cd6f26fc34e7f1dd112a1837c061&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIYC2FX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkYiBQf70I8t%2BirnQ%2BYDRCmPbfHQYZNqrPhow5rR1%2FrAiBRXQpa2gTeYCHmCb%2BEn26ghKxn%2BCF8E4zBCt6Lo%2FNvMCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1MB3rMIjDyzaD2qKtwDA2Q5J3hCj1bxC6iQjsuwlBxj8DPdjTnY%2F6IIG6%2Bju0TMi4FR5UoW%2BKGjNxTB5UnaW7iEfXL2x6i77ayMS3osJrLXTkVe3JEDGyMz6kTi82lMfUJU%2B6grEFubcUnTIcgbx4GGfMZU6gzmFrvi%2FmiO6PkmMP3VQ0MzF%2BR0XExNTAP4gAnh%2Bv2FdS6D2anv3aOivAy0omHZdfCLqLcSl%2BCoA42sstiW4Fcm8Hm3rl4QRmzGh9gbP2Q%2FwWp2MOKB1DzXxmFecvLgE3lckYrIZ2LWvO2nQzWd1U%2BsG5NnO%2F%2FJNQ00Vx0EshjEKomDD3MLUNpyZh1SMGKTQynI9rjzb3Y6ctS6lc%2Bb%2Fagcc30XzSdp0hXHePZByAlhb3pLbEzw%2BQZm%2FHWMZRq87gZyeV6tap1odYN1yR3L9o9onOW0T%2FFS%2FltUyQASMg%2BKZBsKUIf65%2F1rKVywWypNeWBjQCpMNKcG4JQ%2BBtIx4GtK%2BYn2JFKdfYShw1CR5eKbUi89shWXnkCoFYC5SXssGfI8Gykv7lNHtzJ8qlvckih%2BLClxrMvyxNYTF3YCuQ5WFnEZPQJU0DV1FhcyHs0I1nFzAIKwBziyPVzWvx%2FddC7rQn2Qcfk930D%2FpAq0NYEbi%2B2Tcqwwzr6gwgY6pgGt8j%2F3kwzt2Q6r7KbM8ijdlvyOn5jiSkhCjHYBHOgghWwVLww2VDHbmCY2Bmd%2Bi3O1dcvnKb4CZGGkVmlOVqxFoWQGGnoGSLT%2BCoRFulbity8EGvTqZ86JlvcTeqjAxTqOo2xlnseGSCNm0%2F9QSaO0fPRYEZ3eMN%2F7YnmHKfTioguqzfcYdSL7l7HjpdvXn9Z1JHIIt0bsPrYfUeI9JDC6u5lefUzk&X-Amz-Signature=53d954d2ec1422703e99061dac736c3afb2105bc1f4679a0257ab32c4e13f874&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAIYC2FX%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkYiBQf70I8t%2BirnQ%2BYDRCmPbfHQYZNqrPhow5rR1%2FrAiBRXQpa2gTeYCHmCb%2BEn26ghKxn%2BCF8E4zBCt6Lo%2FNvMCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu1MB3rMIjDyzaD2qKtwDA2Q5J3hCj1bxC6iQjsuwlBxj8DPdjTnY%2F6IIG6%2Bju0TMi4FR5UoW%2BKGjNxTB5UnaW7iEfXL2x6i77ayMS3osJrLXTkVe3JEDGyMz6kTi82lMfUJU%2B6grEFubcUnTIcgbx4GGfMZU6gzmFrvi%2FmiO6PkmMP3VQ0MzF%2BR0XExNTAP4gAnh%2Bv2FdS6D2anv3aOivAy0omHZdfCLqLcSl%2BCoA42sstiW4Fcm8Hm3rl4QRmzGh9gbP2Q%2FwWp2MOKB1DzXxmFecvLgE3lckYrIZ2LWvO2nQzWd1U%2BsG5NnO%2F%2FJNQ00Vx0EshjEKomDD3MLUNpyZh1SMGKTQynI9rjzb3Y6ctS6lc%2Bb%2Fagcc30XzSdp0hXHePZByAlhb3pLbEzw%2BQZm%2FHWMZRq87gZyeV6tap1odYN1yR3L9o9onOW0T%2FFS%2FltUyQASMg%2BKZBsKUIf65%2F1rKVywWypNeWBjQCpMNKcG4JQ%2BBtIx4GtK%2BYn2JFKdfYShw1CR5eKbUi89shWXnkCoFYC5SXssGfI8Gykv7lNHtzJ8qlvckih%2BLClxrMvyxNYTF3YCuQ5WFnEZPQJU0DV1FhcyHs0I1nFzAIKwBziyPVzWvx%2FddC7rQn2Qcfk930D%2FpAq0NYEbi%2B2Tcqwwzr6gwgY6pgGt8j%2F3kwzt2Q6r7KbM8ijdlvyOn5jiSkhCjHYBHOgghWwVLww2VDHbmCY2Bmd%2Bi3O1dcvnKb4CZGGkVmlOVqxFoWQGGnoGSLT%2BCoRFulbity8EGvTqZ86JlvcTeqjAxTqOo2xlnseGSCNm0%2F9QSaO0fPRYEZ3eMN%2F7YnmHKfTioguqzfcYdSL7l7HjpdvXn9Z1JHIIt0bsPrYfUeI9JDC6u5lefUzk&X-Amz-Signature=8ebe45da4bfd2c5edf19e1cefb20379916e23e642697b143cac7ca4e1b19d97a&X-Amz-SignedHeaders=host&x-id=GetObject)
