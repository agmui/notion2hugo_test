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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE2FKD3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdlhsT4rb%2BoTkjbKcMmdLKvuWVutJu2ujg%2BnEX2lG3KAIhAOvrHWs%2ByC2aGaNn%2FjUjyRYQi4bU4N5%2FueptEbzW9pKOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyizFFALYiJCLbwwl0q3AO6aFN95ZiyBssYXaBYZjgFRK0WXEYG%2BoU5%2FQrXi%2F44epXjSBXFFKOpw6N4qUJvG%2FXHf%2FWKs%2FdflQTEFafSUAY5JLwvkndkO8Ydmyxn1uJQ4iuvG9HXfYCSkV%2FRgEP3ORimBrM2m6DeEePDL2gBPMQwf7XZPeEwdWmxCs%2FG%2BEL3Cy0qUCnxNeceHSvVFBC9JseVQTAU19mlYYNgD9SwMLEj%2FBxHZbLZNKmr7lr98dMBl27U%2BJ6fJ%2BYqiQ5lSEgqsausmk2kbUWEP5pNiJSwsOwf0iUNPg%2BvuwQb6rVZ3a83Y661ArQP81rUgn0fq%2FCUn%2BiSV2sG8717EIV8hQeOvSGpylxDSMBEQfskvCSpdF1%2B4jSrD3fVVgTs6mXVJ2fYhOxqa8wQlnxuYz80dpI1AfJ8fhNMi38u3Il7MywzBo8lP1x%2BnhLi9ySJZH%2Bn3E1pBNMJm%2FOhcfrbluoV6FGSMLUzcqmZTR%2B2mIxrMdtjMK8Vr1OaUKfMxHV86e%2Fl9rGHNM%2FW9PDoxCZRApOh6OI7u0FKVv2n2i%2FC5NQD0ES6NzCyXsBgtPSB9UaZadz5ScAfUPnZtdud0nd7SPnDZzOjfvS8l9XPYhiZI6zUth18vc0sMwqMKez1dAPWois51jDB%2Fb7DBjqkAc6Lr1AW0CAE7BvZQE9qPePdX8VuagMklK6S%2F4GkXTezE%2BKLtkjfboZ%2BXP7OQru9%2FwGUdz%2Br7um50whr8xSc7PAUaImR65IrTWMRDOh7AhDvV77LF1RF1YvdZ6OwSRSeHotthWP6fkuvZty99Lj7XLMK3I46HU1ZvpmcXlDglQt2N%2FlN%2FcG1cJS7ifmgWrg87dOTCkvzgFfoQP85Tkwu0%2B62rmDc&X-Amz-Signature=8fd7b56adb2527782fb12bf24ffa1c87d9734162d59e600f7bab7222f71d4315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE2FKD3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdlhsT4rb%2BoTkjbKcMmdLKvuWVutJu2ujg%2BnEX2lG3KAIhAOvrHWs%2ByC2aGaNn%2FjUjyRYQi4bU4N5%2FueptEbzW9pKOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyizFFALYiJCLbwwl0q3AO6aFN95ZiyBssYXaBYZjgFRK0WXEYG%2BoU5%2FQrXi%2F44epXjSBXFFKOpw6N4qUJvG%2FXHf%2FWKs%2FdflQTEFafSUAY5JLwvkndkO8Ydmyxn1uJQ4iuvG9HXfYCSkV%2FRgEP3ORimBrM2m6DeEePDL2gBPMQwf7XZPeEwdWmxCs%2FG%2BEL3Cy0qUCnxNeceHSvVFBC9JseVQTAU19mlYYNgD9SwMLEj%2FBxHZbLZNKmr7lr98dMBl27U%2BJ6fJ%2BYqiQ5lSEgqsausmk2kbUWEP5pNiJSwsOwf0iUNPg%2BvuwQb6rVZ3a83Y661ArQP81rUgn0fq%2FCUn%2BiSV2sG8717EIV8hQeOvSGpylxDSMBEQfskvCSpdF1%2B4jSrD3fVVgTs6mXVJ2fYhOxqa8wQlnxuYz80dpI1AfJ8fhNMi38u3Il7MywzBo8lP1x%2BnhLi9ySJZH%2Bn3E1pBNMJm%2FOhcfrbluoV6FGSMLUzcqmZTR%2B2mIxrMdtjMK8Vr1OaUKfMxHV86e%2Fl9rGHNM%2FW9PDoxCZRApOh6OI7u0FKVv2n2i%2FC5NQD0ES6NzCyXsBgtPSB9UaZadz5ScAfUPnZtdud0nd7SPnDZzOjfvS8l9XPYhiZI6zUth18vc0sMwqMKez1dAPWois51jDB%2Fb7DBjqkAc6Lr1AW0CAE7BvZQE9qPePdX8VuagMklK6S%2F4GkXTezE%2BKLtkjfboZ%2BXP7OQru9%2FwGUdz%2Br7um50whr8xSc7PAUaImR65IrTWMRDOh7AhDvV77LF1RF1YvdZ6OwSRSeHotthWP6fkuvZty99Lj7XLMK3I46HU1ZvpmcXlDglQt2N%2FlN%2FcG1cJS7ifmgWrg87dOTCkvzgFfoQP85Tkwu0%2B62rmDc&X-Amz-Signature=a13369afc5125791c61e722a86f82d7fee5b2c7e68d9532fe02fc2dd56f64e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE2FKD3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdlhsT4rb%2BoTkjbKcMmdLKvuWVutJu2ujg%2BnEX2lG3KAIhAOvrHWs%2ByC2aGaNn%2FjUjyRYQi4bU4N5%2FueptEbzW9pKOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyizFFALYiJCLbwwl0q3AO6aFN95ZiyBssYXaBYZjgFRK0WXEYG%2BoU5%2FQrXi%2F44epXjSBXFFKOpw6N4qUJvG%2FXHf%2FWKs%2FdflQTEFafSUAY5JLwvkndkO8Ydmyxn1uJQ4iuvG9HXfYCSkV%2FRgEP3ORimBrM2m6DeEePDL2gBPMQwf7XZPeEwdWmxCs%2FG%2BEL3Cy0qUCnxNeceHSvVFBC9JseVQTAU19mlYYNgD9SwMLEj%2FBxHZbLZNKmr7lr98dMBl27U%2BJ6fJ%2BYqiQ5lSEgqsausmk2kbUWEP5pNiJSwsOwf0iUNPg%2BvuwQb6rVZ3a83Y661ArQP81rUgn0fq%2FCUn%2BiSV2sG8717EIV8hQeOvSGpylxDSMBEQfskvCSpdF1%2B4jSrD3fVVgTs6mXVJ2fYhOxqa8wQlnxuYz80dpI1AfJ8fhNMi38u3Il7MywzBo8lP1x%2BnhLi9ySJZH%2Bn3E1pBNMJm%2FOhcfrbluoV6FGSMLUzcqmZTR%2B2mIxrMdtjMK8Vr1OaUKfMxHV86e%2Fl9rGHNM%2FW9PDoxCZRApOh6OI7u0FKVv2n2i%2FC5NQD0ES6NzCyXsBgtPSB9UaZadz5ScAfUPnZtdud0nd7SPnDZzOjfvS8l9XPYhiZI6zUth18vc0sMwqMKez1dAPWois51jDB%2Fb7DBjqkAc6Lr1AW0CAE7BvZQE9qPePdX8VuagMklK6S%2F4GkXTezE%2BKLtkjfboZ%2BXP7OQru9%2FwGUdz%2Br7um50whr8xSc7PAUaImR65IrTWMRDOh7AhDvV77LF1RF1YvdZ6OwSRSeHotthWP6fkuvZty99Lj7XLMK3I46HU1ZvpmcXlDglQt2N%2FlN%2FcG1cJS7ifmgWrg87dOTCkvzgFfoQP85Tkwu0%2B62rmDc&X-Amz-Signature=979d093617b84992d96ce5d6b48c239a8b98be16708483aa95e2a92b198ca72b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE2FKD3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdlhsT4rb%2BoTkjbKcMmdLKvuWVutJu2ujg%2BnEX2lG3KAIhAOvrHWs%2ByC2aGaNn%2FjUjyRYQi4bU4N5%2FueptEbzW9pKOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyizFFALYiJCLbwwl0q3AO6aFN95ZiyBssYXaBYZjgFRK0WXEYG%2BoU5%2FQrXi%2F44epXjSBXFFKOpw6N4qUJvG%2FXHf%2FWKs%2FdflQTEFafSUAY5JLwvkndkO8Ydmyxn1uJQ4iuvG9HXfYCSkV%2FRgEP3ORimBrM2m6DeEePDL2gBPMQwf7XZPeEwdWmxCs%2FG%2BEL3Cy0qUCnxNeceHSvVFBC9JseVQTAU19mlYYNgD9SwMLEj%2FBxHZbLZNKmr7lr98dMBl27U%2BJ6fJ%2BYqiQ5lSEgqsausmk2kbUWEP5pNiJSwsOwf0iUNPg%2BvuwQb6rVZ3a83Y661ArQP81rUgn0fq%2FCUn%2BiSV2sG8717EIV8hQeOvSGpylxDSMBEQfskvCSpdF1%2B4jSrD3fVVgTs6mXVJ2fYhOxqa8wQlnxuYz80dpI1AfJ8fhNMi38u3Il7MywzBo8lP1x%2BnhLi9ySJZH%2Bn3E1pBNMJm%2FOhcfrbluoV6FGSMLUzcqmZTR%2B2mIxrMdtjMK8Vr1OaUKfMxHV86e%2Fl9rGHNM%2FW9PDoxCZRApOh6OI7u0FKVv2n2i%2FC5NQD0ES6NzCyXsBgtPSB9UaZadz5ScAfUPnZtdud0nd7SPnDZzOjfvS8l9XPYhiZI6zUth18vc0sMwqMKez1dAPWois51jDB%2Fb7DBjqkAc6Lr1AW0CAE7BvZQE9qPePdX8VuagMklK6S%2F4GkXTezE%2BKLtkjfboZ%2BXP7OQru9%2FwGUdz%2Br7um50whr8xSc7PAUaImR65IrTWMRDOh7AhDvV77LF1RF1YvdZ6OwSRSeHotthWP6fkuvZty99Lj7XLMK3I46HU1ZvpmcXlDglQt2N%2FlN%2FcG1cJS7ifmgWrg87dOTCkvzgFfoQP85Tkwu0%2B62rmDc&X-Amz-Signature=ff3dc250e8702dc0beed4e1fd2831b51b636c0e1a6122c04ab7f99141c3298da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE2FKD3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdlhsT4rb%2BoTkjbKcMmdLKvuWVutJu2ujg%2BnEX2lG3KAIhAOvrHWs%2ByC2aGaNn%2FjUjyRYQi4bU4N5%2FueptEbzW9pKOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyizFFALYiJCLbwwl0q3AO6aFN95ZiyBssYXaBYZjgFRK0WXEYG%2BoU5%2FQrXi%2F44epXjSBXFFKOpw6N4qUJvG%2FXHf%2FWKs%2FdflQTEFafSUAY5JLwvkndkO8Ydmyxn1uJQ4iuvG9HXfYCSkV%2FRgEP3ORimBrM2m6DeEePDL2gBPMQwf7XZPeEwdWmxCs%2FG%2BEL3Cy0qUCnxNeceHSvVFBC9JseVQTAU19mlYYNgD9SwMLEj%2FBxHZbLZNKmr7lr98dMBl27U%2BJ6fJ%2BYqiQ5lSEgqsausmk2kbUWEP5pNiJSwsOwf0iUNPg%2BvuwQb6rVZ3a83Y661ArQP81rUgn0fq%2FCUn%2BiSV2sG8717EIV8hQeOvSGpylxDSMBEQfskvCSpdF1%2B4jSrD3fVVgTs6mXVJ2fYhOxqa8wQlnxuYz80dpI1AfJ8fhNMi38u3Il7MywzBo8lP1x%2BnhLi9ySJZH%2Bn3E1pBNMJm%2FOhcfrbluoV6FGSMLUzcqmZTR%2B2mIxrMdtjMK8Vr1OaUKfMxHV86e%2Fl9rGHNM%2FW9PDoxCZRApOh6OI7u0FKVv2n2i%2FC5NQD0ES6NzCyXsBgtPSB9UaZadz5ScAfUPnZtdud0nd7SPnDZzOjfvS8l9XPYhiZI6zUth18vc0sMwqMKez1dAPWois51jDB%2Fb7DBjqkAc6Lr1AW0CAE7BvZQE9qPePdX8VuagMklK6S%2F4GkXTezE%2BKLtkjfboZ%2BXP7OQru9%2FwGUdz%2Br7um50whr8xSc7PAUaImR65IrTWMRDOh7AhDvV77LF1RF1YvdZ6OwSRSeHotthWP6fkuvZty99Lj7XLMK3I46HU1ZvpmcXlDglQt2N%2FlN%2FcG1cJS7ifmgWrg87dOTCkvzgFfoQP85Tkwu0%2B62rmDc&X-Amz-Signature=614a2355784d7671b526f61ab78487a190bf1d1dab039cd8d18bbabb14d8e6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOE2FKD3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T141013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdlhsT4rb%2BoTkjbKcMmdLKvuWVutJu2ujg%2BnEX2lG3KAIhAOvrHWs%2ByC2aGaNn%2FjUjyRYQi4bU4N5%2FueptEbzW9pKOKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyizFFALYiJCLbwwl0q3AO6aFN95ZiyBssYXaBYZjgFRK0WXEYG%2BoU5%2FQrXi%2F44epXjSBXFFKOpw6N4qUJvG%2FXHf%2FWKs%2FdflQTEFafSUAY5JLwvkndkO8Ydmyxn1uJQ4iuvG9HXfYCSkV%2FRgEP3ORimBrM2m6DeEePDL2gBPMQwf7XZPeEwdWmxCs%2FG%2BEL3Cy0qUCnxNeceHSvVFBC9JseVQTAU19mlYYNgD9SwMLEj%2FBxHZbLZNKmr7lr98dMBl27U%2BJ6fJ%2BYqiQ5lSEgqsausmk2kbUWEP5pNiJSwsOwf0iUNPg%2BvuwQb6rVZ3a83Y661ArQP81rUgn0fq%2FCUn%2BiSV2sG8717EIV8hQeOvSGpylxDSMBEQfskvCSpdF1%2B4jSrD3fVVgTs6mXVJ2fYhOxqa8wQlnxuYz80dpI1AfJ8fhNMi38u3Il7MywzBo8lP1x%2BnhLi9ySJZH%2Bn3E1pBNMJm%2FOhcfrbluoV6FGSMLUzcqmZTR%2B2mIxrMdtjMK8Vr1OaUKfMxHV86e%2Fl9rGHNM%2FW9PDoxCZRApOh6OI7u0FKVv2n2i%2FC5NQD0ES6NzCyXsBgtPSB9UaZadz5ScAfUPnZtdud0nd7SPnDZzOjfvS8l9XPYhiZI6zUth18vc0sMwqMKez1dAPWois51jDB%2Fb7DBjqkAc6Lr1AW0CAE7BvZQE9qPePdX8VuagMklK6S%2F4GkXTezE%2BKLtkjfboZ%2BXP7OQru9%2FwGUdz%2Br7um50whr8xSc7PAUaImR65IrTWMRDOh7AhDvV77LF1RF1YvdZ6OwSRSeHotthWP6fkuvZty99Lj7XLMK3I46HU1ZvpmcXlDglQt2N%2FlN%2FcG1cJS7ifmgWrg87dOTCkvzgFfoQP85Tkwu0%2B62rmDc&X-Amz-Signature=935e2353ffab92841faf69b5ab5eb2b580630084394da3ee63579f2880a81abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
