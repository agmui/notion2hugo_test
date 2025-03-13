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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYKT46E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDRVVZuATQOfWUsbTOyBz%2BrNn5Cei61xP%2FIL33FLaWfAiAxOIYh3keelQO28V7X3lxcXgoLye8P3m5ethAs9U2rViqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVGkUXZyl7jDFAM6KtwDGqloVrB5vd6ZaCx6IN%2BIXpc8p7VBmyPZy1hzsnCzoKLk3Y8%2FPqRcg8GQphOtdpDiNO4iTRllXKa86oeZaRx7lTlv855D7%2FjUMqF%2BkTikiKrKs7hyaXfVUIKqQQM7Y8eAcitin4CQqaChamnPmqiXcoRDXxVv2ozxFsaGT4uOZH%2FCmArbKahsT2%2FpZzApg%2FPK9oBuEfVUWT6QCrn7VgsX91RbdhDmyL1jMWyEbgqJj3Ftu3f9KZXXRxcl%2FRZlu7M%2FeRRsS%2BzGoztFe9sgYBPiRTWea%2FNTrrBLE%2FP8tPg36f4IAqJ4bxpKK5F%2FNLPEGPZMmGm28snS4vg1AIOM3SxrKyc2RrYZ80w0%2FUlhrFRYz0UEVb%2FQDRO%2BwR67ZH2r1SXsc7aC8nk3wUtwUCFsLZ6Py8Cu2IrzUbVtb%2F9D%2FQHreGbuIszg3vhp2XBgNtiNQU4arGzc%2BTqwTWtElUpRUz%2BrTSgEqv1fwVEymLiSPE%2FM4gKBlhJiyLd4QEz%2F9464mbzQY7IWrEoOffb2%2B3%2FSO4AqT4yuvn0eGUEhVZb4EoVjKEp20S8rMVAAt67ppomk1eMXn5S58n8mkklw4M%2BvrfBiechk9GYDWveb%2Fv9un3hguTfoGJKAhvHKyG31gucwxvbLvgY6pgHJJxNQsgVHoMIlnwzgdY2nnOCAF7exQqN3%2Fj8BJViUC0tZ0mP3AMOVcWaFjJAw9K%2BCu0Cj%2BXqNZkbd5R7TsBXQ1UjcfnxZi9P%2BXKO8Ih23as9aQuz1zIpMn2iAhu0%2BP19MbvsrAcAC0cl32RrcJTWnU8q4esgSqky4gvBF4XKAWLeklDZZtsoFArUrKkEMG2xvxl80SOh2WU5xZUfNy7xy%2Fq1JtTkR&X-Amz-Signature=f34644f1d1748da78d5f2c17f51aaea486624e83fd13411a074c10d97929d0b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYKT46E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDRVVZuATQOfWUsbTOyBz%2BrNn5Cei61xP%2FIL33FLaWfAiAxOIYh3keelQO28V7X3lxcXgoLye8P3m5ethAs9U2rViqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVGkUXZyl7jDFAM6KtwDGqloVrB5vd6ZaCx6IN%2BIXpc8p7VBmyPZy1hzsnCzoKLk3Y8%2FPqRcg8GQphOtdpDiNO4iTRllXKa86oeZaRx7lTlv855D7%2FjUMqF%2BkTikiKrKs7hyaXfVUIKqQQM7Y8eAcitin4CQqaChamnPmqiXcoRDXxVv2ozxFsaGT4uOZH%2FCmArbKahsT2%2FpZzApg%2FPK9oBuEfVUWT6QCrn7VgsX91RbdhDmyL1jMWyEbgqJj3Ftu3f9KZXXRxcl%2FRZlu7M%2FeRRsS%2BzGoztFe9sgYBPiRTWea%2FNTrrBLE%2FP8tPg36f4IAqJ4bxpKK5F%2FNLPEGPZMmGm28snS4vg1AIOM3SxrKyc2RrYZ80w0%2FUlhrFRYz0UEVb%2FQDRO%2BwR67ZH2r1SXsc7aC8nk3wUtwUCFsLZ6Py8Cu2IrzUbVtb%2F9D%2FQHreGbuIszg3vhp2XBgNtiNQU4arGzc%2BTqwTWtElUpRUz%2BrTSgEqv1fwVEymLiSPE%2FM4gKBlhJiyLd4QEz%2F9464mbzQY7IWrEoOffb2%2B3%2FSO4AqT4yuvn0eGUEhVZb4EoVjKEp20S8rMVAAt67ppomk1eMXn5S58n8mkklw4M%2BvrfBiechk9GYDWveb%2Fv9un3hguTfoGJKAhvHKyG31gucwxvbLvgY6pgHJJxNQsgVHoMIlnwzgdY2nnOCAF7exQqN3%2Fj8BJViUC0tZ0mP3AMOVcWaFjJAw9K%2BCu0Cj%2BXqNZkbd5R7TsBXQ1UjcfnxZi9P%2BXKO8Ih23as9aQuz1zIpMn2iAhu0%2BP19MbvsrAcAC0cl32RrcJTWnU8q4esgSqky4gvBF4XKAWLeklDZZtsoFArUrKkEMG2xvxl80SOh2WU5xZUfNy7xy%2Fq1JtTkR&X-Amz-Signature=22e2324a0ca82b4b11f22ae698037f157322f2413b90ccd7e5f8b871f2be8e19&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYKT46E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDRVVZuATQOfWUsbTOyBz%2BrNn5Cei61xP%2FIL33FLaWfAiAxOIYh3keelQO28V7X3lxcXgoLye8P3m5ethAs9U2rViqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVGkUXZyl7jDFAM6KtwDGqloVrB5vd6ZaCx6IN%2BIXpc8p7VBmyPZy1hzsnCzoKLk3Y8%2FPqRcg8GQphOtdpDiNO4iTRllXKa86oeZaRx7lTlv855D7%2FjUMqF%2BkTikiKrKs7hyaXfVUIKqQQM7Y8eAcitin4CQqaChamnPmqiXcoRDXxVv2ozxFsaGT4uOZH%2FCmArbKahsT2%2FpZzApg%2FPK9oBuEfVUWT6QCrn7VgsX91RbdhDmyL1jMWyEbgqJj3Ftu3f9KZXXRxcl%2FRZlu7M%2FeRRsS%2BzGoztFe9sgYBPiRTWea%2FNTrrBLE%2FP8tPg36f4IAqJ4bxpKK5F%2FNLPEGPZMmGm28snS4vg1AIOM3SxrKyc2RrYZ80w0%2FUlhrFRYz0UEVb%2FQDRO%2BwR67ZH2r1SXsc7aC8nk3wUtwUCFsLZ6Py8Cu2IrzUbVtb%2F9D%2FQHreGbuIszg3vhp2XBgNtiNQU4arGzc%2BTqwTWtElUpRUz%2BrTSgEqv1fwVEymLiSPE%2FM4gKBlhJiyLd4QEz%2F9464mbzQY7IWrEoOffb2%2B3%2FSO4AqT4yuvn0eGUEhVZb4EoVjKEp20S8rMVAAt67ppomk1eMXn5S58n8mkklw4M%2BvrfBiechk9GYDWveb%2Fv9un3hguTfoGJKAhvHKyG31gucwxvbLvgY6pgHJJxNQsgVHoMIlnwzgdY2nnOCAF7exQqN3%2Fj8BJViUC0tZ0mP3AMOVcWaFjJAw9K%2BCu0Cj%2BXqNZkbd5R7TsBXQ1UjcfnxZi9P%2BXKO8Ih23as9aQuz1zIpMn2iAhu0%2BP19MbvsrAcAC0cl32RrcJTWnU8q4esgSqky4gvBF4XKAWLeklDZZtsoFArUrKkEMG2xvxl80SOh2WU5xZUfNy7xy%2Fq1JtTkR&X-Amz-Signature=8a664353ccd69ad67af84a30d32fb958eb55b4fe031439557e82bbe99c90c2f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYKT46E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDRVVZuATQOfWUsbTOyBz%2BrNn5Cei61xP%2FIL33FLaWfAiAxOIYh3keelQO28V7X3lxcXgoLye8P3m5ethAs9U2rViqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVGkUXZyl7jDFAM6KtwDGqloVrB5vd6ZaCx6IN%2BIXpc8p7VBmyPZy1hzsnCzoKLk3Y8%2FPqRcg8GQphOtdpDiNO4iTRllXKa86oeZaRx7lTlv855D7%2FjUMqF%2BkTikiKrKs7hyaXfVUIKqQQM7Y8eAcitin4CQqaChamnPmqiXcoRDXxVv2ozxFsaGT4uOZH%2FCmArbKahsT2%2FpZzApg%2FPK9oBuEfVUWT6QCrn7VgsX91RbdhDmyL1jMWyEbgqJj3Ftu3f9KZXXRxcl%2FRZlu7M%2FeRRsS%2BzGoztFe9sgYBPiRTWea%2FNTrrBLE%2FP8tPg36f4IAqJ4bxpKK5F%2FNLPEGPZMmGm28snS4vg1AIOM3SxrKyc2RrYZ80w0%2FUlhrFRYz0UEVb%2FQDRO%2BwR67ZH2r1SXsc7aC8nk3wUtwUCFsLZ6Py8Cu2IrzUbVtb%2F9D%2FQHreGbuIszg3vhp2XBgNtiNQU4arGzc%2BTqwTWtElUpRUz%2BrTSgEqv1fwVEymLiSPE%2FM4gKBlhJiyLd4QEz%2F9464mbzQY7IWrEoOffb2%2B3%2FSO4AqT4yuvn0eGUEhVZb4EoVjKEp20S8rMVAAt67ppomk1eMXn5S58n8mkklw4M%2BvrfBiechk9GYDWveb%2Fv9un3hguTfoGJKAhvHKyG31gucwxvbLvgY6pgHJJxNQsgVHoMIlnwzgdY2nnOCAF7exQqN3%2Fj8BJViUC0tZ0mP3AMOVcWaFjJAw9K%2BCu0Cj%2BXqNZkbd5R7TsBXQ1UjcfnxZi9P%2BXKO8Ih23as9aQuz1zIpMn2iAhu0%2BP19MbvsrAcAC0cl32RrcJTWnU8q4esgSqky4gvBF4XKAWLeklDZZtsoFArUrKkEMG2xvxl80SOh2WU5xZUfNy7xy%2Fq1JtTkR&X-Amz-Signature=2e78163fcd3120cd078ee357c9f41443bff89a2cc3f63c8336e2268e9392632d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYKT46E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDRVVZuATQOfWUsbTOyBz%2BrNn5Cei61xP%2FIL33FLaWfAiAxOIYh3keelQO28V7X3lxcXgoLye8P3m5ethAs9U2rViqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVGkUXZyl7jDFAM6KtwDGqloVrB5vd6ZaCx6IN%2BIXpc8p7VBmyPZy1hzsnCzoKLk3Y8%2FPqRcg8GQphOtdpDiNO4iTRllXKa86oeZaRx7lTlv855D7%2FjUMqF%2BkTikiKrKs7hyaXfVUIKqQQM7Y8eAcitin4CQqaChamnPmqiXcoRDXxVv2ozxFsaGT4uOZH%2FCmArbKahsT2%2FpZzApg%2FPK9oBuEfVUWT6QCrn7VgsX91RbdhDmyL1jMWyEbgqJj3Ftu3f9KZXXRxcl%2FRZlu7M%2FeRRsS%2BzGoztFe9sgYBPiRTWea%2FNTrrBLE%2FP8tPg36f4IAqJ4bxpKK5F%2FNLPEGPZMmGm28snS4vg1AIOM3SxrKyc2RrYZ80w0%2FUlhrFRYz0UEVb%2FQDRO%2BwR67ZH2r1SXsc7aC8nk3wUtwUCFsLZ6Py8Cu2IrzUbVtb%2F9D%2FQHreGbuIszg3vhp2XBgNtiNQU4arGzc%2BTqwTWtElUpRUz%2BrTSgEqv1fwVEymLiSPE%2FM4gKBlhJiyLd4QEz%2F9464mbzQY7IWrEoOffb2%2B3%2FSO4AqT4yuvn0eGUEhVZb4EoVjKEp20S8rMVAAt67ppomk1eMXn5S58n8mkklw4M%2BvrfBiechk9GYDWveb%2Fv9un3hguTfoGJKAhvHKyG31gucwxvbLvgY6pgHJJxNQsgVHoMIlnwzgdY2nnOCAF7exQqN3%2Fj8BJViUC0tZ0mP3AMOVcWaFjJAw9K%2BCu0Cj%2BXqNZkbd5R7TsBXQ1UjcfnxZi9P%2BXKO8Ih23as9aQuz1zIpMn2iAhu0%2BP19MbvsrAcAC0cl32RrcJTWnU8q4esgSqky4gvBF4XKAWLeklDZZtsoFArUrKkEMG2xvxl80SOh2WU5xZUfNy7xy%2Fq1JtTkR&X-Amz-Signature=672859cb62e864859eed645450fe2a56b316da68e9aaad15abaf127de1f4b966&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYKT46E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDRVVZuATQOfWUsbTOyBz%2BrNn5Cei61xP%2FIL33FLaWfAiAxOIYh3keelQO28V7X3lxcXgoLye8P3m5ethAs9U2rViqIBAjZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqVGkUXZyl7jDFAM6KtwDGqloVrB5vd6ZaCx6IN%2BIXpc8p7VBmyPZy1hzsnCzoKLk3Y8%2FPqRcg8GQphOtdpDiNO4iTRllXKa86oeZaRx7lTlv855D7%2FjUMqF%2BkTikiKrKs7hyaXfVUIKqQQM7Y8eAcitin4CQqaChamnPmqiXcoRDXxVv2ozxFsaGT4uOZH%2FCmArbKahsT2%2FpZzApg%2FPK9oBuEfVUWT6QCrn7VgsX91RbdhDmyL1jMWyEbgqJj3Ftu3f9KZXXRxcl%2FRZlu7M%2FeRRsS%2BzGoztFe9sgYBPiRTWea%2FNTrrBLE%2FP8tPg36f4IAqJ4bxpKK5F%2FNLPEGPZMmGm28snS4vg1AIOM3SxrKyc2RrYZ80w0%2FUlhrFRYz0UEVb%2FQDRO%2BwR67ZH2r1SXsc7aC8nk3wUtwUCFsLZ6Py8Cu2IrzUbVtb%2F9D%2FQHreGbuIszg3vhp2XBgNtiNQU4arGzc%2BTqwTWtElUpRUz%2BrTSgEqv1fwVEymLiSPE%2FM4gKBlhJiyLd4QEz%2F9464mbzQY7IWrEoOffb2%2B3%2FSO4AqT4yuvn0eGUEhVZb4EoVjKEp20S8rMVAAt67ppomk1eMXn5S58n8mkklw4M%2BvrfBiechk9GYDWveb%2Fv9un3hguTfoGJKAhvHKyG31gucwxvbLvgY6pgHJJxNQsgVHoMIlnwzgdY2nnOCAF7exQqN3%2Fj8BJViUC0tZ0mP3AMOVcWaFjJAw9K%2BCu0Cj%2BXqNZkbd5R7TsBXQ1UjcfnxZi9P%2BXKO8Ih23as9aQuz1zIpMn2iAhu0%2BP19MbvsrAcAC0cl32RrcJTWnU8q4esgSqky4gvBF4XKAWLeklDZZtsoFArUrKkEMG2xvxl80SOh2WU5xZUfNy7xy%2Fq1JtTkR&X-Amz-Signature=9eabdd7bed9747d54fa958b35f25a2483949a825d1dfc34e2242234606ae64e4&X-Amz-SignedHeaders=host&x-id=GetObject)
