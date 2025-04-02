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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGQELUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBqgSeUniGoWz0hm6OOyUjDg%2FKPWA8V2kDJdRdZDdHlSAiEAtJ7o6HFQb4Ag8HVIV286jh9Ia84zmEKNNso41rwvAPwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9a8hC%2Bbm0IVyXk0ircAx85nhQRQPwjTfju1MRpESnQzV%2Bl%2BXDVYhfQFeb3oknrFExr6BFgMf3mBMYtOuc4NgL6P6nmD1UOxyDqpJweqATYpkfSHnwgtbototl1nBWj1blDyT8WSzIVvyJtcdQy8XgtQgOOl6k8%2FC%2BanFHJn6RkrVZHiSvaTj9SkpZSZH6hgLGJwt0LdPwNJ8n5TEXua%2F0SwKjd7K0Pj1hnqqEPeeYCEs8c7BYxROysp7Cyfk74LaC6FfgLlx8wTNqlEgz8kXeXFGGtI3go6lAQzhM7RkySJJyt9M%2FqkdkJc4A9f%2B6VUWrexXCRwKStbKmDCH03VF5FKavAMi5dgzz%2BeW4uZuWUEw0IIB9xlmu8WbF3RbD%2BE8bSxpvJKAldKzZp6JdkU2GE1w4ZelJEw0uQqu7v6oDglUU264DO4BzU1%2FUi8JsR46AELByoBbSb6Z5hKqd3mIOLda72kh%2B3z1JCSPSfnmMC4L0eq8VY5shOJ1vUXPHXVLMNV%2B%2Fto3hysKEEyAHsYEW9DA9oLMDcI0to8k1aoymmYSFxvVa2Zm3QqKRFVcp9Q7go3izYERtfdFG4UVEiZk8r0edErjyui88aXXfy8vhhMnjkO9%2BVyXgyRavqxV%2FN1eqRRSa%2FDQ2GV4DtMImLs78GOqUBSEY585SlqkzB8OqxOGPoZoPNahesrRDX2qtuLsnX%2B4uqUN%2BTGDd6zUAOnMQDL35GtznB3N6%2Fc11ffCv3DpfisnYXblAQjAA1RUNAjvALfB1wDBfKl4F7l268iAeLoGXxn%2FZryC5HcG968vV6c0zG3i1ULyNfq8owjdvXwxXIltZJPCjbsinttEYtUXnlXz1TGTK%2FzYB8DSA7eEvz%2BYCQLtBMKCJZ&X-Amz-Signature=1a0c715143c69d622538adb5e691b761202056db70e4db470b87a97163913f18&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGQELUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBqgSeUniGoWz0hm6OOyUjDg%2FKPWA8V2kDJdRdZDdHlSAiEAtJ7o6HFQb4Ag8HVIV286jh9Ia84zmEKNNso41rwvAPwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9a8hC%2Bbm0IVyXk0ircAx85nhQRQPwjTfju1MRpESnQzV%2Bl%2BXDVYhfQFeb3oknrFExr6BFgMf3mBMYtOuc4NgL6P6nmD1UOxyDqpJweqATYpkfSHnwgtbototl1nBWj1blDyT8WSzIVvyJtcdQy8XgtQgOOl6k8%2FC%2BanFHJn6RkrVZHiSvaTj9SkpZSZH6hgLGJwt0LdPwNJ8n5TEXua%2F0SwKjd7K0Pj1hnqqEPeeYCEs8c7BYxROysp7Cyfk74LaC6FfgLlx8wTNqlEgz8kXeXFGGtI3go6lAQzhM7RkySJJyt9M%2FqkdkJc4A9f%2B6VUWrexXCRwKStbKmDCH03VF5FKavAMi5dgzz%2BeW4uZuWUEw0IIB9xlmu8WbF3RbD%2BE8bSxpvJKAldKzZp6JdkU2GE1w4ZelJEw0uQqu7v6oDglUU264DO4BzU1%2FUi8JsR46AELByoBbSb6Z5hKqd3mIOLda72kh%2B3z1JCSPSfnmMC4L0eq8VY5shOJ1vUXPHXVLMNV%2B%2Fto3hysKEEyAHsYEW9DA9oLMDcI0to8k1aoymmYSFxvVa2Zm3QqKRFVcp9Q7go3izYERtfdFG4UVEiZk8r0edErjyui88aXXfy8vhhMnjkO9%2BVyXgyRavqxV%2FN1eqRRSa%2FDQ2GV4DtMImLs78GOqUBSEY585SlqkzB8OqxOGPoZoPNahesrRDX2qtuLsnX%2B4uqUN%2BTGDd6zUAOnMQDL35GtznB3N6%2Fc11ffCv3DpfisnYXblAQjAA1RUNAjvALfB1wDBfKl4F7l268iAeLoGXxn%2FZryC5HcG968vV6c0zG3i1ULyNfq8owjdvXwxXIltZJPCjbsinttEYtUXnlXz1TGTK%2FzYB8DSA7eEvz%2BYCQLtBMKCJZ&X-Amz-Signature=881fb0c69f5ac5a6d31de371ffa9c5ab5a6dcb7ad04b649c3a8ce9dd26c57c75&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGQELUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBqgSeUniGoWz0hm6OOyUjDg%2FKPWA8V2kDJdRdZDdHlSAiEAtJ7o6HFQb4Ag8HVIV286jh9Ia84zmEKNNso41rwvAPwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9a8hC%2Bbm0IVyXk0ircAx85nhQRQPwjTfju1MRpESnQzV%2Bl%2BXDVYhfQFeb3oknrFExr6BFgMf3mBMYtOuc4NgL6P6nmD1UOxyDqpJweqATYpkfSHnwgtbototl1nBWj1blDyT8WSzIVvyJtcdQy8XgtQgOOl6k8%2FC%2BanFHJn6RkrVZHiSvaTj9SkpZSZH6hgLGJwt0LdPwNJ8n5TEXua%2F0SwKjd7K0Pj1hnqqEPeeYCEs8c7BYxROysp7Cyfk74LaC6FfgLlx8wTNqlEgz8kXeXFGGtI3go6lAQzhM7RkySJJyt9M%2FqkdkJc4A9f%2B6VUWrexXCRwKStbKmDCH03VF5FKavAMi5dgzz%2BeW4uZuWUEw0IIB9xlmu8WbF3RbD%2BE8bSxpvJKAldKzZp6JdkU2GE1w4ZelJEw0uQqu7v6oDglUU264DO4BzU1%2FUi8JsR46AELByoBbSb6Z5hKqd3mIOLda72kh%2B3z1JCSPSfnmMC4L0eq8VY5shOJ1vUXPHXVLMNV%2B%2Fto3hysKEEyAHsYEW9DA9oLMDcI0to8k1aoymmYSFxvVa2Zm3QqKRFVcp9Q7go3izYERtfdFG4UVEiZk8r0edErjyui88aXXfy8vhhMnjkO9%2BVyXgyRavqxV%2FN1eqRRSa%2FDQ2GV4DtMImLs78GOqUBSEY585SlqkzB8OqxOGPoZoPNahesrRDX2qtuLsnX%2B4uqUN%2BTGDd6zUAOnMQDL35GtznB3N6%2Fc11ffCv3DpfisnYXblAQjAA1RUNAjvALfB1wDBfKl4F7l268iAeLoGXxn%2FZryC5HcG968vV6c0zG3i1ULyNfq8owjdvXwxXIltZJPCjbsinttEYtUXnlXz1TGTK%2FzYB8DSA7eEvz%2BYCQLtBMKCJZ&X-Amz-Signature=507fd425f8f58134e2873b27f56036ff02341c48bba691ae8d86f744967b0ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGQELUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBqgSeUniGoWz0hm6OOyUjDg%2FKPWA8V2kDJdRdZDdHlSAiEAtJ7o6HFQb4Ag8HVIV286jh9Ia84zmEKNNso41rwvAPwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9a8hC%2Bbm0IVyXk0ircAx85nhQRQPwjTfju1MRpESnQzV%2Bl%2BXDVYhfQFeb3oknrFExr6BFgMf3mBMYtOuc4NgL6P6nmD1UOxyDqpJweqATYpkfSHnwgtbototl1nBWj1blDyT8WSzIVvyJtcdQy8XgtQgOOl6k8%2FC%2BanFHJn6RkrVZHiSvaTj9SkpZSZH6hgLGJwt0LdPwNJ8n5TEXua%2F0SwKjd7K0Pj1hnqqEPeeYCEs8c7BYxROysp7Cyfk74LaC6FfgLlx8wTNqlEgz8kXeXFGGtI3go6lAQzhM7RkySJJyt9M%2FqkdkJc4A9f%2B6VUWrexXCRwKStbKmDCH03VF5FKavAMi5dgzz%2BeW4uZuWUEw0IIB9xlmu8WbF3RbD%2BE8bSxpvJKAldKzZp6JdkU2GE1w4ZelJEw0uQqu7v6oDglUU264DO4BzU1%2FUi8JsR46AELByoBbSb6Z5hKqd3mIOLda72kh%2B3z1JCSPSfnmMC4L0eq8VY5shOJ1vUXPHXVLMNV%2B%2Fto3hysKEEyAHsYEW9DA9oLMDcI0to8k1aoymmYSFxvVa2Zm3QqKRFVcp9Q7go3izYERtfdFG4UVEiZk8r0edErjyui88aXXfy8vhhMnjkO9%2BVyXgyRavqxV%2FN1eqRRSa%2FDQ2GV4DtMImLs78GOqUBSEY585SlqkzB8OqxOGPoZoPNahesrRDX2qtuLsnX%2B4uqUN%2BTGDd6zUAOnMQDL35GtznB3N6%2Fc11ffCv3DpfisnYXblAQjAA1RUNAjvALfB1wDBfKl4F7l268iAeLoGXxn%2FZryC5HcG968vV6c0zG3i1ULyNfq8owjdvXwxXIltZJPCjbsinttEYtUXnlXz1TGTK%2FzYB8DSA7eEvz%2BYCQLtBMKCJZ&X-Amz-Signature=7f73d62c1aa3951cc7d693f18b9acbcac1b2eb45bbbfb6615fc3af2c3bde36a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGQELUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBqgSeUniGoWz0hm6OOyUjDg%2FKPWA8V2kDJdRdZDdHlSAiEAtJ7o6HFQb4Ag8HVIV286jh9Ia84zmEKNNso41rwvAPwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9a8hC%2Bbm0IVyXk0ircAx85nhQRQPwjTfju1MRpESnQzV%2Bl%2BXDVYhfQFeb3oknrFExr6BFgMf3mBMYtOuc4NgL6P6nmD1UOxyDqpJweqATYpkfSHnwgtbototl1nBWj1blDyT8WSzIVvyJtcdQy8XgtQgOOl6k8%2FC%2BanFHJn6RkrVZHiSvaTj9SkpZSZH6hgLGJwt0LdPwNJ8n5TEXua%2F0SwKjd7K0Pj1hnqqEPeeYCEs8c7BYxROysp7Cyfk74LaC6FfgLlx8wTNqlEgz8kXeXFGGtI3go6lAQzhM7RkySJJyt9M%2FqkdkJc4A9f%2B6VUWrexXCRwKStbKmDCH03VF5FKavAMi5dgzz%2BeW4uZuWUEw0IIB9xlmu8WbF3RbD%2BE8bSxpvJKAldKzZp6JdkU2GE1w4ZelJEw0uQqu7v6oDglUU264DO4BzU1%2FUi8JsR46AELByoBbSb6Z5hKqd3mIOLda72kh%2B3z1JCSPSfnmMC4L0eq8VY5shOJ1vUXPHXVLMNV%2B%2Fto3hysKEEyAHsYEW9DA9oLMDcI0to8k1aoymmYSFxvVa2Zm3QqKRFVcp9Q7go3izYERtfdFG4UVEiZk8r0edErjyui88aXXfy8vhhMnjkO9%2BVyXgyRavqxV%2FN1eqRRSa%2FDQ2GV4DtMImLs78GOqUBSEY585SlqkzB8OqxOGPoZoPNahesrRDX2qtuLsnX%2B4uqUN%2BTGDd6zUAOnMQDL35GtznB3N6%2Fc11ffCv3DpfisnYXblAQjAA1RUNAjvALfB1wDBfKl4F7l268iAeLoGXxn%2FZryC5HcG968vV6c0zG3i1ULyNfq8owjdvXwxXIltZJPCjbsinttEYtUXnlXz1TGTK%2FzYB8DSA7eEvz%2BYCQLtBMKCJZ&X-Amz-Signature=7454cca252c3974e9433204599b1dadb86ada1f25cf187e1be255c44316403bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRGQELUS%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBqgSeUniGoWz0hm6OOyUjDg%2FKPWA8V2kDJdRdZDdHlSAiEAtJ7o6HFQb4Ag8HVIV286jh9Ia84zmEKNNso41rwvAPwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9a8hC%2Bbm0IVyXk0ircAx85nhQRQPwjTfju1MRpESnQzV%2Bl%2BXDVYhfQFeb3oknrFExr6BFgMf3mBMYtOuc4NgL6P6nmD1UOxyDqpJweqATYpkfSHnwgtbototl1nBWj1blDyT8WSzIVvyJtcdQy8XgtQgOOl6k8%2FC%2BanFHJn6RkrVZHiSvaTj9SkpZSZH6hgLGJwt0LdPwNJ8n5TEXua%2F0SwKjd7K0Pj1hnqqEPeeYCEs8c7BYxROysp7Cyfk74LaC6FfgLlx8wTNqlEgz8kXeXFGGtI3go6lAQzhM7RkySJJyt9M%2FqkdkJc4A9f%2B6VUWrexXCRwKStbKmDCH03VF5FKavAMi5dgzz%2BeW4uZuWUEw0IIB9xlmu8WbF3RbD%2BE8bSxpvJKAldKzZp6JdkU2GE1w4ZelJEw0uQqu7v6oDglUU264DO4BzU1%2FUi8JsR46AELByoBbSb6Z5hKqd3mIOLda72kh%2B3z1JCSPSfnmMC4L0eq8VY5shOJ1vUXPHXVLMNV%2B%2Fto3hysKEEyAHsYEW9DA9oLMDcI0to8k1aoymmYSFxvVa2Zm3QqKRFVcp9Q7go3izYERtfdFG4UVEiZk8r0edErjyui88aXXfy8vhhMnjkO9%2BVyXgyRavqxV%2FN1eqRRSa%2FDQ2GV4DtMImLs78GOqUBSEY585SlqkzB8OqxOGPoZoPNahesrRDX2qtuLsnX%2B4uqUN%2BTGDd6zUAOnMQDL35GtznB3N6%2Fc11ffCv3DpfisnYXblAQjAA1RUNAjvALfB1wDBfKl4F7l268iAeLoGXxn%2FZryC5HcG968vV6c0zG3i1ULyNfq8owjdvXwxXIltZJPCjbsinttEYtUXnlXz1TGTK%2FzYB8DSA7eEvz%2BYCQLtBMKCJZ&X-Amz-Signature=93615404e1ee2de7c78207b4b1c0b0ca4f75852ab2b84b0610c975c57470d84b&X-Amz-SignedHeaders=host&x-id=GetObject)
