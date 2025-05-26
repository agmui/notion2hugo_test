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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWAJOUD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDSiBJBhRjxG26ls0NCkBt%2FQmkGPOES5dJuwFFxDIVWYgIhAPCxHhEx%2FR%2B1ibxwpneAPWFqbLXifByL7mITTesTE9fqKv8DCDsQABoMNjM3NDIzMTgzODA1IgzF6LdxbhxN8w6zFVYq3APSXLjyZYY%2F8RV4t6SZHehJu2GdcXTvHmpR1mMZaTt4gbW3ISv71%2FoslJ9YnHeprAgrcBgCOI5nMw8imZq%2BIXP56WRucgaKvykpNN5Z%2BKuO%2FO21sczbjMkVVvKcHnq27%2BWq7lkLZMmdKaFW5a4727pnl4E8zlfSAbzjdhrDea9w1v29Pnebe3B7GZqS5FqVsmtdKMuMjmZVMJWg1hbWGJyoAMecicl68YjzE674AErHg6XvYjPxotBF6FWxner7JwHSP3JmO65DSZhPHGHmPTnLp5l3CNkZK%2FF7PaVLwYAFSdCINv9pA8sCD4p4244BFjRxeR8tH24hNLIvzJGBaMHXiT3TddSUjlMe136REEFzpMyuUym%2BVfL4aviH%2FJh7uR%2BsSoxJd9fLTD0SXnOEFDdtH8%2Bfk2jj3cb7wn8tS%2Fz3DjXVeoUNikELRYu2kPNdgarGlpenpZ9EeX9Yz2RmUpYC3%2BFW2XQ%2FiBn9hgRq0JCCvWIXlRUSdmXie95gcgjcS1jx%2BTwoGlr5onb%2FjrI3OzRsRMXk9vgdGSxb3s1ahsMih7rmRDrZTXPFwno30HGhKEcmblRH%2FVyQYkh%2Fi%2FnTQc%2FtwdhqXmvpuBXh1sX8zl19ytyBwtOliO8DBt1IUTDhnc%2FBBjqkAR7nx6qmy%2FpXSSJFSapMYzZ8SAf9LKH2faCtIxTDhnjmznxDU1%2FO3HSaF%2FKEczEOeMtojbssfmjF9CmIXzGeOd6Kp7qSXzu0p8Uyt%2Bt3OFSIcPputThKP6bvCv3fMHVpBNEH0qC%2FhUU2ir1Ftb%2BxXRdgxsQMtBj95bPZlZEDmW6R%2FItYaIYiWRyLxfCT1SYV7XlpdCYUz4UP%2FlxXm2D99x2ueOQI&X-Amz-Signature=0516d71e5c562136018e2ed1ee58f2ff361a9d396a861c4fa5a94442f598d154&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWAJOUD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDSiBJBhRjxG26ls0NCkBt%2FQmkGPOES5dJuwFFxDIVWYgIhAPCxHhEx%2FR%2B1ibxwpneAPWFqbLXifByL7mITTesTE9fqKv8DCDsQABoMNjM3NDIzMTgzODA1IgzF6LdxbhxN8w6zFVYq3APSXLjyZYY%2F8RV4t6SZHehJu2GdcXTvHmpR1mMZaTt4gbW3ISv71%2FoslJ9YnHeprAgrcBgCOI5nMw8imZq%2BIXP56WRucgaKvykpNN5Z%2BKuO%2FO21sczbjMkVVvKcHnq27%2BWq7lkLZMmdKaFW5a4727pnl4E8zlfSAbzjdhrDea9w1v29Pnebe3B7GZqS5FqVsmtdKMuMjmZVMJWg1hbWGJyoAMecicl68YjzE674AErHg6XvYjPxotBF6FWxner7JwHSP3JmO65DSZhPHGHmPTnLp5l3CNkZK%2FF7PaVLwYAFSdCINv9pA8sCD4p4244BFjRxeR8tH24hNLIvzJGBaMHXiT3TddSUjlMe136REEFzpMyuUym%2BVfL4aviH%2FJh7uR%2BsSoxJd9fLTD0SXnOEFDdtH8%2Bfk2jj3cb7wn8tS%2Fz3DjXVeoUNikELRYu2kPNdgarGlpenpZ9EeX9Yz2RmUpYC3%2BFW2XQ%2FiBn9hgRq0JCCvWIXlRUSdmXie95gcgjcS1jx%2BTwoGlr5onb%2FjrI3OzRsRMXk9vgdGSxb3s1ahsMih7rmRDrZTXPFwno30HGhKEcmblRH%2FVyQYkh%2Fi%2FnTQc%2FtwdhqXmvpuBXh1sX8zl19ytyBwtOliO8DBt1IUTDhnc%2FBBjqkAR7nx6qmy%2FpXSSJFSapMYzZ8SAf9LKH2faCtIxTDhnjmznxDU1%2FO3HSaF%2FKEczEOeMtojbssfmjF9CmIXzGeOd6Kp7qSXzu0p8Uyt%2Bt3OFSIcPputThKP6bvCv3fMHVpBNEH0qC%2FhUU2ir1Ftb%2BxXRdgxsQMtBj95bPZlZEDmW6R%2FItYaIYiWRyLxfCT1SYV7XlpdCYUz4UP%2FlxXm2D99x2ueOQI&X-Amz-Signature=b4e4bef771981656bf4a7f47ade5d288c8fdfb5ee9976c0ab6f6721bf3404bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWAJOUD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDSiBJBhRjxG26ls0NCkBt%2FQmkGPOES5dJuwFFxDIVWYgIhAPCxHhEx%2FR%2B1ibxwpneAPWFqbLXifByL7mITTesTE9fqKv8DCDsQABoMNjM3NDIzMTgzODA1IgzF6LdxbhxN8w6zFVYq3APSXLjyZYY%2F8RV4t6SZHehJu2GdcXTvHmpR1mMZaTt4gbW3ISv71%2FoslJ9YnHeprAgrcBgCOI5nMw8imZq%2BIXP56WRucgaKvykpNN5Z%2BKuO%2FO21sczbjMkVVvKcHnq27%2BWq7lkLZMmdKaFW5a4727pnl4E8zlfSAbzjdhrDea9w1v29Pnebe3B7GZqS5FqVsmtdKMuMjmZVMJWg1hbWGJyoAMecicl68YjzE674AErHg6XvYjPxotBF6FWxner7JwHSP3JmO65DSZhPHGHmPTnLp5l3CNkZK%2FF7PaVLwYAFSdCINv9pA8sCD4p4244BFjRxeR8tH24hNLIvzJGBaMHXiT3TddSUjlMe136REEFzpMyuUym%2BVfL4aviH%2FJh7uR%2BsSoxJd9fLTD0SXnOEFDdtH8%2Bfk2jj3cb7wn8tS%2Fz3DjXVeoUNikELRYu2kPNdgarGlpenpZ9EeX9Yz2RmUpYC3%2BFW2XQ%2FiBn9hgRq0JCCvWIXlRUSdmXie95gcgjcS1jx%2BTwoGlr5onb%2FjrI3OzRsRMXk9vgdGSxb3s1ahsMih7rmRDrZTXPFwno30HGhKEcmblRH%2FVyQYkh%2Fi%2FnTQc%2FtwdhqXmvpuBXh1sX8zl19ytyBwtOliO8DBt1IUTDhnc%2FBBjqkAR7nx6qmy%2FpXSSJFSapMYzZ8SAf9LKH2faCtIxTDhnjmznxDU1%2FO3HSaF%2FKEczEOeMtojbssfmjF9CmIXzGeOd6Kp7qSXzu0p8Uyt%2Bt3OFSIcPputThKP6bvCv3fMHVpBNEH0qC%2FhUU2ir1Ftb%2BxXRdgxsQMtBj95bPZlZEDmW6R%2FItYaIYiWRyLxfCT1SYV7XlpdCYUz4UP%2FlxXm2D99x2ueOQI&X-Amz-Signature=ad27b94c0734f10cad0ab9449e1af6b284a2ac03eada7f61e79baf27aca157d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWAJOUD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDSiBJBhRjxG26ls0NCkBt%2FQmkGPOES5dJuwFFxDIVWYgIhAPCxHhEx%2FR%2B1ibxwpneAPWFqbLXifByL7mITTesTE9fqKv8DCDsQABoMNjM3NDIzMTgzODA1IgzF6LdxbhxN8w6zFVYq3APSXLjyZYY%2F8RV4t6SZHehJu2GdcXTvHmpR1mMZaTt4gbW3ISv71%2FoslJ9YnHeprAgrcBgCOI5nMw8imZq%2BIXP56WRucgaKvykpNN5Z%2BKuO%2FO21sczbjMkVVvKcHnq27%2BWq7lkLZMmdKaFW5a4727pnl4E8zlfSAbzjdhrDea9w1v29Pnebe3B7GZqS5FqVsmtdKMuMjmZVMJWg1hbWGJyoAMecicl68YjzE674AErHg6XvYjPxotBF6FWxner7JwHSP3JmO65DSZhPHGHmPTnLp5l3CNkZK%2FF7PaVLwYAFSdCINv9pA8sCD4p4244BFjRxeR8tH24hNLIvzJGBaMHXiT3TddSUjlMe136REEFzpMyuUym%2BVfL4aviH%2FJh7uR%2BsSoxJd9fLTD0SXnOEFDdtH8%2Bfk2jj3cb7wn8tS%2Fz3DjXVeoUNikELRYu2kPNdgarGlpenpZ9EeX9Yz2RmUpYC3%2BFW2XQ%2FiBn9hgRq0JCCvWIXlRUSdmXie95gcgjcS1jx%2BTwoGlr5onb%2FjrI3OzRsRMXk9vgdGSxb3s1ahsMih7rmRDrZTXPFwno30HGhKEcmblRH%2FVyQYkh%2Fi%2FnTQc%2FtwdhqXmvpuBXh1sX8zl19ytyBwtOliO8DBt1IUTDhnc%2FBBjqkAR7nx6qmy%2FpXSSJFSapMYzZ8SAf9LKH2faCtIxTDhnjmznxDU1%2FO3HSaF%2FKEczEOeMtojbssfmjF9CmIXzGeOd6Kp7qSXzu0p8Uyt%2Bt3OFSIcPputThKP6bvCv3fMHVpBNEH0qC%2FhUU2ir1Ftb%2BxXRdgxsQMtBj95bPZlZEDmW6R%2FItYaIYiWRyLxfCT1SYV7XlpdCYUz4UP%2FlxXm2D99x2ueOQI&X-Amz-Signature=24bb88f09615fdbf083a913d2aec94a75ee65c703a324751113e26131d10e56b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWAJOUD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDSiBJBhRjxG26ls0NCkBt%2FQmkGPOES5dJuwFFxDIVWYgIhAPCxHhEx%2FR%2B1ibxwpneAPWFqbLXifByL7mITTesTE9fqKv8DCDsQABoMNjM3NDIzMTgzODA1IgzF6LdxbhxN8w6zFVYq3APSXLjyZYY%2F8RV4t6SZHehJu2GdcXTvHmpR1mMZaTt4gbW3ISv71%2FoslJ9YnHeprAgrcBgCOI5nMw8imZq%2BIXP56WRucgaKvykpNN5Z%2BKuO%2FO21sczbjMkVVvKcHnq27%2BWq7lkLZMmdKaFW5a4727pnl4E8zlfSAbzjdhrDea9w1v29Pnebe3B7GZqS5FqVsmtdKMuMjmZVMJWg1hbWGJyoAMecicl68YjzE674AErHg6XvYjPxotBF6FWxner7JwHSP3JmO65DSZhPHGHmPTnLp5l3CNkZK%2FF7PaVLwYAFSdCINv9pA8sCD4p4244BFjRxeR8tH24hNLIvzJGBaMHXiT3TddSUjlMe136REEFzpMyuUym%2BVfL4aviH%2FJh7uR%2BsSoxJd9fLTD0SXnOEFDdtH8%2Bfk2jj3cb7wn8tS%2Fz3DjXVeoUNikELRYu2kPNdgarGlpenpZ9EeX9Yz2RmUpYC3%2BFW2XQ%2FiBn9hgRq0JCCvWIXlRUSdmXie95gcgjcS1jx%2BTwoGlr5onb%2FjrI3OzRsRMXk9vgdGSxb3s1ahsMih7rmRDrZTXPFwno30HGhKEcmblRH%2FVyQYkh%2Fi%2FnTQc%2FtwdhqXmvpuBXh1sX8zl19ytyBwtOliO8DBt1IUTDhnc%2FBBjqkAR7nx6qmy%2FpXSSJFSapMYzZ8SAf9LKH2faCtIxTDhnjmznxDU1%2FO3HSaF%2FKEczEOeMtojbssfmjF9CmIXzGeOd6Kp7qSXzu0p8Uyt%2Bt3OFSIcPputThKP6bvCv3fMHVpBNEH0qC%2FhUU2ir1Ftb%2BxXRdgxsQMtBj95bPZlZEDmW6R%2FItYaIYiWRyLxfCT1SYV7XlpdCYUz4UP%2FlxXm2D99x2ueOQI&X-Amz-Signature=d40f2600e860102642c0d44884b19369d93767d5d44725ca827161ea19c72b10&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWAJOUD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDSiBJBhRjxG26ls0NCkBt%2FQmkGPOES5dJuwFFxDIVWYgIhAPCxHhEx%2FR%2B1ibxwpneAPWFqbLXifByL7mITTesTE9fqKv8DCDsQABoMNjM3NDIzMTgzODA1IgzF6LdxbhxN8w6zFVYq3APSXLjyZYY%2F8RV4t6SZHehJu2GdcXTvHmpR1mMZaTt4gbW3ISv71%2FoslJ9YnHeprAgrcBgCOI5nMw8imZq%2BIXP56WRucgaKvykpNN5Z%2BKuO%2FO21sczbjMkVVvKcHnq27%2BWq7lkLZMmdKaFW5a4727pnl4E8zlfSAbzjdhrDea9w1v29Pnebe3B7GZqS5FqVsmtdKMuMjmZVMJWg1hbWGJyoAMecicl68YjzE674AErHg6XvYjPxotBF6FWxner7JwHSP3JmO65DSZhPHGHmPTnLp5l3CNkZK%2FF7PaVLwYAFSdCINv9pA8sCD4p4244BFjRxeR8tH24hNLIvzJGBaMHXiT3TddSUjlMe136REEFzpMyuUym%2BVfL4aviH%2FJh7uR%2BsSoxJd9fLTD0SXnOEFDdtH8%2Bfk2jj3cb7wn8tS%2Fz3DjXVeoUNikELRYu2kPNdgarGlpenpZ9EeX9Yz2RmUpYC3%2BFW2XQ%2FiBn9hgRq0JCCvWIXlRUSdmXie95gcgjcS1jx%2BTwoGlr5onb%2FjrI3OzRsRMXk9vgdGSxb3s1ahsMih7rmRDrZTXPFwno30HGhKEcmblRH%2FVyQYkh%2Fi%2FnTQc%2FtwdhqXmvpuBXh1sX8zl19ytyBwtOliO8DBt1IUTDhnc%2FBBjqkAR7nx6qmy%2FpXSSJFSapMYzZ8SAf9LKH2faCtIxTDhnjmznxDU1%2FO3HSaF%2FKEczEOeMtojbssfmjF9CmIXzGeOd6Kp7qSXzu0p8Uyt%2Bt3OFSIcPputThKP6bvCv3fMHVpBNEH0qC%2FhUU2ir1Ftb%2BxXRdgxsQMtBj95bPZlZEDmW6R%2FItYaIYiWRyLxfCT1SYV7XlpdCYUz4UP%2FlxXm2D99x2ueOQI&X-Amz-Signature=91c1441c7bf11f475d5f3566b94a618175ff43941849bfb0634de54784db6cb8&X-Amz-SignedHeaders=host&x-id=GetObject)
