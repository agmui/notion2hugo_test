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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RG25RFD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1oVEfy8Sxrtgnor2urVT13aLXwoQ%2FxztBLHrQCJYwzAiEA3WgDiq8nvZEaQJ%2BHf5M4ZaiaRciHSqldjBiDYw6Cz24q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIbXxZYAY9CLf5h3OircA75t02gWMEW233Vkyjz8%2B4Rajp%2FRjoZO7pHVNiVZr3oWw%2FR2WR5oXfCYGjFj%2Bu2iYrbwDgQjH7%2B%2FIqCoa0i%2FVruVXYv1YEyBYkpn3Bjh4NN%2FM%2BIFSobcHiuNFyZPL5Jvqwk0ncq2IUEou8nAPoK5O7ZVJHJn%2F3QzMWJR%2BGfyeoMsTjaFPfx%2Bosm2PFHnSLjZr3I1J02acGwT5ZybKUnPUXRij6ptbkx4J%2B0rLdSyDhfW5wleYE3SjkRlk9Lmxc7iPoB2oQ81YaTnuj%2FhIhBo4s71BV1Lv0fFIIfSd%2FYEAOpk%2BvNhL3R2trvM0RRqC7o9a45TXsSI%2BYgrDZ5%2FR6B39azVBD5kHSwBxr0benGgQPyrjLdsC5OXjWha3nm2K5bmGTHvY%2Fe1gcn1tOngymqqNftxMkm3Hqam4NK7UWvzM913%2F%2BVSXCNGUHHXqhjVm4L3wezcZ0NwIsucSEWTaGMhQ4hmTnM9X%2FBnfPaEDb8W4XLd1Ou8QyKmHzabkERASvTNUkbOeD8ITQGm8er35Th%2BRsAEUnCZzdc%2Fqh45jt9We%2FF9mX4fSCU%2FlYW0NbKh%2Bh9fjKc1SbaEIKSGWYhJgLbSjQlonBht5SAKwlFFLdNXLP9LsHlMthFvB7s6qXnIMNekzcMGOqUBHTLxewz7b8YY%2BbBtDBUC1Ux88wu7C2ED7ZxzdFlGdPrPAy8zoj8Col38E0ilEWOBlRIh6jmJekQ7ZuTMJhG0CDuLXyY8bDqTM1owsV5buPnATBjg4Tkc%2FcRTNqtmI35MedtZq1h%2B8932yKyiHvQPJN6quMJ2rPYEAGg1Y7h1VGYT5ovdc9IKjJBtZwvywjePXZcAuh2Y3Zqnb%2F56eL%2BCdzFQ0mx1&X-Amz-Signature=64f06d2ab01ad5c0e4b51c1ceb03ff0b78c27607feed9b7a64496f0fc3e530de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RG25RFD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1oVEfy8Sxrtgnor2urVT13aLXwoQ%2FxztBLHrQCJYwzAiEA3WgDiq8nvZEaQJ%2BHf5M4ZaiaRciHSqldjBiDYw6Cz24q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIbXxZYAY9CLf5h3OircA75t02gWMEW233Vkyjz8%2B4Rajp%2FRjoZO7pHVNiVZr3oWw%2FR2WR5oXfCYGjFj%2Bu2iYrbwDgQjH7%2B%2FIqCoa0i%2FVruVXYv1YEyBYkpn3Bjh4NN%2FM%2BIFSobcHiuNFyZPL5Jvqwk0ncq2IUEou8nAPoK5O7ZVJHJn%2F3QzMWJR%2BGfyeoMsTjaFPfx%2Bosm2PFHnSLjZr3I1J02acGwT5ZybKUnPUXRij6ptbkx4J%2B0rLdSyDhfW5wleYE3SjkRlk9Lmxc7iPoB2oQ81YaTnuj%2FhIhBo4s71BV1Lv0fFIIfSd%2FYEAOpk%2BvNhL3R2trvM0RRqC7o9a45TXsSI%2BYgrDZ5%2FR6B39azVBD5kHSwBxr0benGgQPyrjLdsC5OXjWha3nm2K5bmGTHvY%2Fe1gcn1tOngymqqNftxMkm3Hqam4NK7UWvzM913%2F%2BVSXCNGUHHXqhjVm4L3wezcZ0NwIsucSEWTaGMhQ4hmTnM9X%2FBnfPaEDb8W4XLd1Ou8QyKmHzabkERASvTNUkbOeD8ITQGm8er35Th%2BRsAEUnCZzdc%2Fqh45jt9We%2FF9mX4fSCU%2FlYW0NbKh%2Bh9fjKc1SbaEIKSGWYhJgLbSjQlonBht5SAKwlFFLdNXLP9LsHlMthFvB7s6qXnIMNekzcMGOqUBHTLxewz7b8YY%2BbBtDBUC1Ux88wu7C2ED7ZxzdFlGdPrPAy8zoj8Col38E0ilEWOBlRIh6jmJekQ7ZuTMJhG0CDuLXyY8bDqTM1owsV5buPnATBjg4Tkc%2FcRTNqtmI35MedtZq1h%2B8932yKyiHvQPJN6quMJ2rPYEAGg1Y7h1VGYT5ovdc9IKjJBtZwvywjePXZcAuh2Y3Zqnb%2F56eL%2BCdzFQ0mx1&X-Amz-Signature=a3904b5dda8f9ad0e17c67c2fc8bd201d93bf0c772eb27e4893f977f0c6cdf4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RG25RFD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1oVEfy8Sxrtgnor2urVT13aLXwoQ%2FxztBLHrQCJYwzAiEA3WgDiq8nvZEaQJ%2BHf5M4ZaiaRciHSqldjBiDYw6Cz24q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIbXxZYAY9CLf5h3OircA75t02gWMEW233Vkyjz8%2B4Rajp%2FRjoZO7pHVNiVZr3oWw%2FR2WR5oXfCYGjFj%2Bu2iYrbwDgQjH7%2B%2FIqCoa0i%2FVruVXYv1YEyBYkpn3Bjh4NN%2FM%2BIFSobcHiuNFyZPL5Jvqwk0ncq2IUEou8nAPoK5O7ZVJHJn%2F3QzMWJR%2BGfyeoMsTjaFPfx%2Bosm2PFHnSLjZr3I1J02acGwT5ZybKUnPUXRij6ptbkx4J%2B0rLdSyDhfW5wleYE3SjkRlk9Lmxc7iPoB2oQ81YaTnuj%2FhIhBo4s71BV1Lv0fFIIfSd%2FYEAOpk%2BvNhL3R2trvM0RRqC7o9a45TXsSI%2BYgrDZ5%2FR6B39azVBD5kHSwBxr0benGgQPyrjLdsC5OXjWha3nm2K5bmGTHvY%2Fe1gcn1tOngymqqNftxMkm3Hqam4NK7UWvzM913%2F%2BVSXCNGUHHXqhjVm4L3wezcZ0NwIsucSEWTaGMhQ4hmTnM9X%2FBnfPaEDb8W4XLd1Ou8QyKmHzabkERASvTNUkbOeD8ITQGm8er35Th%2BRsAEUnCZzdc%2Fqh45jt9We%2FF9mX4fSCU%2FlYW0NbKh%2Bh9fjKc1SbaEIKSGWYhJgLbSjQlonBht5SAKwlFFLdNXLP9LsHlMthFvB7s6qXnIMNekzcMGOqUBHTLxewz7b8YY%2BbBtDBUC1Ux88wu7C2ED7ZxzdFlGdPrPAy8zoj8Col38E0ilEWOBlRIh6jmJekQ7ZuTMJhG0CDuLXyY8bDqTM1owsV5buPnATBjg4Tkc%2FcRTNqtmI35MedtZq1h%2B8932yKyiHvQPJN6quMJ2rPYEAGg1Y7h1VGYT5ovdc9IKjJBtZwvywjePXZcAuh2Y3Zqnb%2F56eL%2BCdzFQ0mx1&X-Amz-Signature=d4d6842a1610f92c1a2a3d3921a2d2ce702ceeeac32220a30a85a32529edb89d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RG25RFD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1oVEfy8Sxrtgnor2urVT13aLXwoQ%2FxztBLHrQCJYwzAiEA3WgDiq8nvZEaQJ%2BHf5M4ZaiaRciHSqldjBiDYw6Cz24q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIbXxZYAY9CLf5h3OircA75t02gWMEW233Vkyjz8%2B4Rajp%2FRjoZO7pHVNiVZr3oWw%2FR2WR5oXfCYGjFj%2Bu2iYrbwDgQjH7%2B%2FIqCoa0i%2FVruVXYv1YEyBYkpn3Bjh4NN%2FM%2BIFSobcHiuNFyZPL5Jvqwk0ncq2IUEou8nAPoK5O7ZVJHJn%2F3QzMWJR%2BGfyeoMsTjaFPfx%2Bosm2PFHnSLjZr3I1J02acGwT5ZybKUnPUXRij6ptbkx4J%2B0rLdSyDhfW5wleYE3SjkRlk9Lmxc7iPoB2oQ81YaTnuj%2FhIhBo4s71BV1Lv0fFIIfSd%2FYEAOpk%2BvNhL3R2trvM0RRqC7o9a45TXsSI%2BYgrDZ5%2FR6B39azVBD5kHSwBxr0benGgQPyrjLdsC5OXjWha3nm2K5bmGTHvY%2Fe1gcn1tOngymqqNftxMkm3Hqam4NK7UWvzM913%2F%2BVSXCNGUHHXqhjVm4L3wezcZ0NwIsucSEWTaGMhQ4hmTnM9X%2FBnfPaEDb8W4XLd1Ou8QyKmHzabkERASvTNUkbOeD8ITQGm8er35Th%2BRsAEUnCZzdc%2Fqh45jt9We%2FF9mX4fSCU%2FlYW0NbKh%2Bh9fjKc1SbaEIKSGWYhJgLbSjQlonBht5SAKwlFFLdNXLP9LsHlMthFvB7s6qXnIMNekzcMGOqUBHTLxewz7b8YY%2BbBtDBUC1Ux88wu7C2ED7ZxzdFlGdPrPAy8zoj8Col38E0ilEWOBlRIh6jmJekQ7ZuTMJhG0CDuLXyY8bDqTM1owsV5buPnATBjg4Tkc%2FcRTNqtmI35MedtZq1h%2B8932yKyiHvQPJN6quMJ2rPYEAGg1Y7h1VGYT5ovdc9IKjJBtZwvywjePXZcAuh2Y3Zqnb%2F56eL%2BCdzFQ0mx1&X-Amz-Signature=5088dac8a38e1a9f466f4d5e2e69bb0d689148d102297213d02ce1c5ec5a11c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RG25RFD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1oVEfy8Sxrtgnor2urVT13aLXwoQ%2FxztBLHrQCJYwzAiEA3WgDiq8nvZEaQJ%2BHf5M4ZaiaRciHSqldjBiDYw6Cz24q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIbXxZYAY9CLf5h3OircA75t02gWMEW233Vkyjz8%2B4Rajp%2FRjoZO7pHVNiVZr3oWw%2FR2WR5oXfCYGjFj%2Bu2iYrbwDgQjH7%2B%2FIqCoa0i%2FVruVXYv1YEyBYkpn3Bjh4NN%2FM%2BIFSobcHiuNFyZPL5Jvqwk0ncq2IUEou8nAPoK5O7ZVJHJn%2F3QzMWJR%2BGfyeoMsTjaFPfx%2Bosm2PFHnSLjZr3I1J02acGwT5ZybKUnPUXRij6ptbkx4J%2B0rLdSyDhfW5wleYE3SjkRlk9Lmxc7iPoB2oQ81YaTnuj%2FhIhBo4s71BV1Lv0fFIIfSd%2FYEAOpk%2BvNhL3R2trvM0RRqC7o9a45TXsSI%2BYgrDZ5%2FR6B39azVBD5kHSwBxr0benGgQPyrjLdsC5OXjWha3nm2K5bmGTHvY%2Fe1gcn1tOngymqqNftxMkm3Hqam4NK7UWvzM913%2F%2BVSXCNGUHHXqhjVm4L3wezcZ0NwIsucSEWTaGMhQ4hmTnM9X%2FBnfPaEDb8W4XLd1Ou8QyKmHzabkERASvTNUkbOeD8ITQGm8er35Th%2BRsAEUnCZzdc%2Fqh45jt9We%2FF9mX4fSCU%2FlYW0NbKh%2Bh9fjKc1SbaEIKSGWYhJgLbSjQlonBht5SAKwlFFLdNXLP9LsHlMthFvB7s6qXnIMNekzcMGOqUBHTLxewz7b8YY%2BbBtDBUC1Ux88wu7C2ED7ZxzdFlGdPrPAy8zoj8Col38E0ilEWOBlRIh6jmJekQ7ZuTMJhG0CDuLXyY8bDqTM1owsV5buPnATBjg4Tkc%2FcRTNqtmI35MedtZq1h%2B8932yKyiHvQPJN6quMJ2rPYEAGg1Y7h1VGYT5ovdc9IKjJBtZwvywjePXZcAuh2Y3Zqnb%2F56eL%2BCdzFQ0mx1&X-Amz-Signature=cfa9045eb52abdf60018e2a6c411ad37b820b6cd0d826652d471c6da8edcf75f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RG25RFD%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T090958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1oVEfy8Sxrtgnor2urVT13aLXwoQ%2FxztBLHrQCJYwzAiEA3WgDiq8nvZEaQJ%2BHf5M4ZaiaRciHSqldjBiDYw6Cz24q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDIbXxZYAY9CLf5h3OircA75t02gWMEW233Vkyjz8%2B4Rajp%2FRjoZO7pHVNiVZr3oWw%2FR2WR5oXfCYGjFj%2Bu2iYrbwDgQjH7%2B%2FIqCoa0i%2FVruVXYv1YEyBYkpn3Bjh4NN%2FM%2BIFSobcHiuNFyZPL5Jvqwk0ncq2IUEou8nAPoK5O7ZVJHJn%2F3QzMWJR%2BGfyeoMsTjaFPfx%2Bosm2PFHnSLjZr3I1J02acGwT5ZybKUnPUXRij6ptbkx4J%2B0rLdSyDhfW5wleYE3SjkRlk9Lmxc7iPoB2oQ81YaTnuj%2FhIhBo4s71BV1Lv0fFIIfSd%2FYEAOpk%2BvNhL3R2trvM0RRqC7o9a45TXsSI%2BYgrDZ5%2FR6B39azVBD5kHSwBxr0benGgQPyrjLdsC5OXjWha3nm2K5bmGTHvY%2Fe1gcn1tOngymqqNftxMkm3Hqam4NK7UWvzM913%2F%2BVSXCNGUHHXqhjVm4L3wezcZ0NwIsucSEWTaGMhQ4hmTnM9X%2FBnfPaEDb8W4XLd1Ou8QyKmHzabkERASvTNUkbOeD8ITQGm8er35Th%2BRsAEUnCZzdc%2Fqh45jt9We%2FF9mX4fSCU%2FlYW0NbKh%2Bh9fjKc1SbaEIKSGWYhJgLbSjQlonBht5SAKwlFFLdNXLP9LsHlMthFvB7s6qXnIMNekzcMGOqUBHTLxewz7b8YY%2BbBtDBUC1Ux88wu7C2ED7ZxzdFlGdPrPAy8zoj8Col38E0ilEWOBlRIh6jmJekQ7ZuTMJhG0CDuLXyY8bDqTM1owsV5buPnATBjg4Tkc%2FcRTNqtmI35MedtZq1h%2B8932yKyiHvQPJN6quMJ2rPYEAGg1Y7h1VGYT5ovdc9IKjJBtZwvywjePXZcAuh2Y3Zqnb%2F56eL%2BCdzFQ0mx1&X-Amz-Signature=cac15eedbc961c7450d61337c60f4d7fc31c512be60b8d82f8cad5d391c0d7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
