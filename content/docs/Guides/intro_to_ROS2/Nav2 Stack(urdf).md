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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UYISSU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuan9bGq%2B9vRGngEPM75ysF4zlouKsyOZKq5DI1zGffQIgaHN7i21mthp7U6xgSPt%2BMW0lXSdF5LFOa4kZ8MFvcFwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtWGK9flBVCZmjG9CrcAx8DvEEOKiYhvOBHBmjsUFxcjPwMDXeKE6WA8rj6fW%2BDC9P3C%2FGkOFqEyXrvEbNXmLY794iM9004Moy7PVXV8nGoAnx07RriKO%2FHdfLmfs7pZOvv3UHkZ9YmsOygZeY1iliC3rI2YBaxPYYV0S1dB8RIxcxe0QD6idkWHfL9dvoI4OcaDI90unI1qlpbX176GkHABbwk65PONzwBgz7xXGIkdalGqaNCUd3qNXA5Az7SjKahkgETLXfO6fsJf%2Bc7KqlGNnR9MyqIhzK1q9bclj5oEWnlx6BFOPqPFVoHyky6p20JCy8BkjNVzG0mZpEZpYXcPbVOdJ%2FfBeWw0d4VMqScPqxJ%2FEZymRsyemBsRB0CBxdDhxvl8F0VIMUAF46UGAdwjIRwqJmrlT7T2nbSJ5f2cmA1IOwG4t6cowfkHnmwZsmp%2FJFsVH8lu9T5Mi3bGZAguS4297GFqyR3pyoeaw448qQInKtlpMW1CQG%2Bhtv%2FZL4mwXw4CF8OwMhAjglAo8ZB%2BJB4AmSaSgNDWrAe3yI2VumAIutwEuTDQGlnpu21WC9kLW6GzVHiC8%2FwP5B1DKbw%2FTz%2FZI%2FPXYMAC3urEzxtQtg3aAPSudvNgoxSq8gdvFB7d7xrE0RjJI7BMLmClMIGOqUBrMw3EemT5pPXibpr55R7RjYscueVOIESJ%2F8HtovCrsfIQTg%2FsPBduXES%2B2RZXhjHfLwvHZPV72BUTSA184cJ9K43wmG%2BnvkrqgJdW35MDyiILyDt6ORkXqOwK3ESRFBT9IcApH7Uhgw61K4%2FL7mMfG7%2FkYAipgWMfkMfF6hKU5%2FGIiiSCbFqsroT53baQao4F2fF97Mr7oYZk4akEXFxQFj%2FjJHT&X-Amz-Signature=0ce38ee33603b82682b984d27192d10bba32c448c38a584569d18e5f8e2c9625&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UYISSU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuan9bGq%2B9vRGngEPM75ysF4zlouKsyOZKq5DI1zGffQIgaHN7i21mthp7U6xgSPt%2BMW0lXSdF5LFOa4kZ8MFvcFwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtWGK9flBVCZmjG9CrcAx8DvEEOKiYhvOBHBmjsUFxcjPwMDXeKE6WA8rj6fW%2BDC9P3C%2FGkOFqEyXrvEbNXmLY794iM9004Moy7PVXV8nGoAnx07RriKO%2FHdfLmfs7pZOvv3UHkZ9YmsOygZeY1iliC3rI2YBaxPYYV0S1dB8RIxcxe0QD6idkWHfL9dvoI4OcaDI90unI1qlpbX176GkHABbwk65PONzwBgz7xXGIkdalGqaNCUd3qNXA5Az7SjKahkgETLXfO6fsJf%2Bc7KqlGNnR9MyqIhzK1q9bclj5oEWnlx6BFOPqPFVoHyky6p20JCy8BkjNVzG0mZpEZpYXcPbVOdJ%2FfBeWw0d4VMqScPqxJ%2FEZymRsyemBsRB0CBxdDhxvl8F0VIMUAF46UGAdwjIRwqJmrlT7T2nbSJ5f2cmA1IOwG4t6cowfkHnmwZsmp%2FJFsVH8lu9T5Mi3bGZAguS4297GFqyR3pyoeaw448qQInKtlpMW1CQG%2Bhtv%2FZL4mwXw4CF8OwMhAjglAo8ZB%2BJB4AmSaSgNDWrAe3yI2VumAIutwEuTDQGlnpu21WC9kLW6GzVHiC8%2FwP5B1DKbw%2FTz%2FZI%2FPXYMAC3urEzxtQtg3aAPSudvNgoxSq8gdvFB7d7xrE0RjJI7BMLmClMIGOqUBrMw3EemT5pPXibpr55R7RjYscueVOIESJ%2F8HtovCrsfIQTg%2FsPBduXES%2B2RZXhjHfLwvHZPV72BUTSA184cJ9K43wmG%2BnvkrqgJdW35MDyiILyDt6ORkXqOwK3ESRFBT9IcApH7Uhgw61K4%2FL7mMfG7%2FkYAipgWMfkMfF6hKU5%2FGIiiSCbFqsroT53baQao4F2fF97Mr7oYZk4akEXFxQFj%2FjJHT&X-Amz-Signature=319b114fa2507ff28986671dcf32f53a6187951c95b84d022683ba9c1297435d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UYISSU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuan9bGq%2B9vRGngEPM75ysF4zlouKsyOZKq5DI1zGffQIgaHN7i21mthp7U6xgSPt%2BMW0lXSdF5LFOa4kZ8MFvcFwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtWGK9flBVCZmjG9CrcAx8DvEEOKiYhvOBHBmjsUFxcjPwMDXeKE6WA8rj6fW%2BDC9P3C%2FGkOFqEyXrvEbNXmLY794iM9004Moy7PVXV8nGoAnx07RriKO%2FHdfLmfs7pZOvv3UHkZ9YmsOygZeY1iliC3rI2YBaxPYYV0S1dB8RIxcxe0QD6idkWHfL9dvoI4OcaDI90unI1qlpbX176GkHABbwk65PONzwBgz7xXGIkdalGqaNCUd3qNXA5Az7SjKahkgETLXfO6fsJf%2Bc7KqlGNnR9MyqIhzK1q9bclj5oEWnlx6BFOPqPFVoHyky6p20JCy8BkjNVzG0mZpEZpYXcPbVOdJ%2FfBeWw0d4VMqScPqxJ%2FEZymRsyemBsRB0CBxdDhxvl8F0VIMUAF46UGAdwjIRwqJmrlT7T2nbSJ5f2cmA1IOwG4t6cowfkHnmwZsmp%2FJFsVH8lu9T5Mi3bGZAguS4297GFqyR3pyoeaw448qQInKtlpMW1CQG%2Bhtv%2FZL4mwXw4CF8OwMhAjglAo8ZB%2BJB4AmSaSgNDWrAe3yI2VumAIutwEuTDQGlnpu21WC9kLW6GzVHiC8%2FwP5B1DKbw%2FTz%2FZI%2FPXYMAC3urEzxtQtg3aAPSudvNgoxSq8gdvFB7d7xrE0RjJI7BMLmClMIGOqUBrMw3EemT5pPXibpr55R7RjYscueVOIESJ%2F8HtovCrsfIQTg%2FsPBduXES%2B2RZXhjHfLwvHZPV72BUTSA184cJ9K43wmG%2BnvkrqgJdW35MDyiILyDt6ORkXqOwK3ESRFBT9IcApH7Uhgw61K4%2FL7mMfG7%2FkYAipgWMfkMfF6hKU5%2FGIiiSCbFqsroT53baQao4F2fF97Mr7oYZk4akEXFxQFj%2FjJHT&X-Amz-Signature=dc9a9ea6f1a0bf297262a1f3d30656d573b2dc6ef87dfb1acf7386cfb3fce489&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UYISSU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuan9bGq%2B9vRGngEPM75ysF4zlouKsyOZKq5DI1zGffQIgaHN7i21mthp7U6xgSPt%2BMW0lXSdF5LFOa4kZ8MFvcFwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtWGK9flBVCZmjG9CrcAx8DvEEOKiYhvOBHBmjsUFxcjPwMDXeKE6WA8rj6fW%2BDC9P3C%2FGkOFqEyXrvEbNXmLY794iM9004Moy7PVXV8nGoAnx07RriKO%2FHdfLmfs7pZOvv3UHkZ9YmsOygZeY1iliC3rI2YBaxPYYV0S1dB8RIxcxe0QD6idkWHfL9dvoI4OcaDI90unI1qlpbX176GkHABbwk65PONzwBgz7xXGIkdalGqaNCUd3qNXA5Az7SjKahkgETLXfO6fsJf%2Bc7KqlGNnR9MyqIhzK1q9bclj5oEWnlx6BFOPqPFVoHyky6p20JCy8BkjNVzG0mZpEZpYXcPbVOdJ%2FfBeWw0d4VMqScPqxJ%2FEZymRsyemBsRB0CBxdDhxvl8F0VIMUAF46UGAdwjIRwqJmrlT7T2nbSJ5f2cmA1IOwG4t6cowfkHnmwZsmp%2FJFsVH8lu9T5Mi3bGZAguS4297GFqyR3pyoeaw448qQInKtlpMW1CQG%2Bhtv%2FZL4mwXw4CF8OwMhAjglAo8ZB%2BJB4AmSaSgNDWrAe3yI2VumAIutwEuTDQGlnpu21WC9kLW6GzVHiC8%2FwP5B1DKbw%2FTz%2FZI%2FPXYMAC3urEzxtQtg3aAPSudvNgoxSq8gdvFB7d7xrE0RjJI7BMLmClMIGOqUBrMw3EemT5pPXibpr55R7RjYscueVOIESJ%2F8HtovCrsfIQTg%2FsPBduXES%2B2RZXhjHfLwvHZPV72BUTSA184cJ9K43wmG%2BnvkrqgJdW35MDyiILyDt6ORkXqOwK3ESRFBT9IcApH7Uhgw61K4%2FL7mMfG7%2FkYAipgWMfkMfF6hKU5%2FGIiiSCbFqsroT53baQao4F2fF97Mr7oYZk4akEXFxQFj%2FjJHT&X-Amz-Signature=9833aa31d0aa46295b82bb5bbc86d6026d59b5626e53ca145b44870fa9baab9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UYISSU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuan9bGq%2B9vRGngEPM75ysF4zlouKsyOZKq5DI1zGffQIgaHN7i21mthp7U6xgSPt%2BMW0lXSdF5LFOa4kZ8MFvcFwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtWGK9flBVCZmjG9CrcAx8DvEEOKiYhvOBHBmjsUFxcjPwMDXeKE6WA8rj6fW%2BDC9P3C%2FGkOFqEyXrvEbNXmLY794iM9004Moy7PVXV8nGoAnx07RriKO%2FHdfLmfs7pZOvv3UHkZ9YmsOygZeY1iliC3rI2YBaxPYYV0S1dB8RIxcxe0QD6idkWHfL9dvoI4OcaDI90unI1qlpbX176GkHABbwk65PONzwBgz7xXGIkdalGqaNCUd3qNXA5Az7SjKahkgETLXfO6fsJf%2Bc7KqlGNnR9MyqIhzK1q9bclj5oEWnlx6BFOPqPFVoHyky6p20JCy8BkjNVzG0mZpEZpYXcPbVOdJ%2FfBeWw0d4VMqScPqxJ%2FEZymRsyemBsRB0CBxdDhxvl8F0VIMUAF46UGAdwjIRwqJmrlT7T2nbSJ5f2cmA1IOwG4t6cowfkHnmwZsmp%2FJFsVH8lu9T5Mi3bGZAguS4297GFqyR3pyoeaw448qQInKtlpMW1CQG%2Bhtv%2FZL4mwXw4CF8OwMhAjglAo8ZB%2BJB4AmSaSgNDWrAe3yI2VumAIutwEuTDQGlnpu21WC9kLW6GzVHiC8%2FwP5B1DKbw%2FTz%2FZI%2FPXYMAC3urEzxtQtg3aAPSudvNgoxSq8gdvFB7d7xrE0RjJI7BMLmClMIGOqUBrMw3EemT5pPXibpr55R7RjYscueVOIESJ%2F8HtovCrsfIQTg%2FsPBduXES%2B2RZXhjHfLwvHZPV72BUTSA184cJ9K43wmG%2BnvkrqgJdW35MDyiILyDt6ORkXqOwK3ESRFBT9IcApH7Uhgw61K4%2FL7mMfG7%2FkYAipgWMfkMfF6hKU5%2FGIiiSCbFqsroT53baQao4F2fF97Mr7oYZk4akEXFxQFj%2FjJHT&X-Amz-Signature=d259fd90b7eb8fccf6f57d10117a648b0363532798c77195412e8ce5cc73f4a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7UYISSU%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuan9bGq%2B9vRGngEPM75ysF4zlouKsyOZKq5DI1zGffQIgaHN7i21mthp7U6xgSPt%2BMW0lXSdF5LFOa4kZ8MFvcFwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtWGK9flBVCZmjG9CrcAx8DvEEOKiYhvOBHBmjsUFxcjPwMDXeKE6WA8rj6fW%2BDC9P3C%2FGkOFqEyXrvEbNXmLY794iM9004Moy7PVXV8nGoAnx07RriKO%2FHdfLmfs7pZOvv3UHkZ9YmsOygZeY1iliC3rI2YBaxPYYV0S1dB8RIxcxe0QD6idkWHfL9dvoI4OcaDI90unI1qlpbX176GkHABbwk65PONzwBgz7xXGIkdalGqaNCUd3qNXA5Az7SjKahkgETLXfO6fsJf%2Bc7KqlGNnR9MyqIhzK1q9bclj5oEWnlx6BFOPqPFVoHyky6p20JCy8BkjNVzG0mZpEZpYXcPbVOdJ%2FfBeWw0d4VMqScPqxJ%2FEZymRsyemBsRB0CBxdDhxvl8F0VIMUAF46UGAdwjIRwqJmrlT7T2nbSJ5f2cmA1IOwG4t6cowfkHnmwZsmp%2FJFsVH8lu9T5Mi3bGZAguS4297GFqyR3pyoeaw448qQInKtlpMW1CQG%2Bhtv%2FZL4mwXw4CF8OwMhAjglAo8ZB%2BJB4AmSaSgNDWrAe3yI2VumAIutwEuTDQGlnpu21WC9kLW6GzVHiC8%2FwP5B1DKbw%2FTz%2FZI%2FPXYMAC3urEzxtQtg3aAPSudvNgoxSq8gdvFB7d7xrE0RjJI7BMLmClMIGOqUBrMw3EemT5pPXibpr55R7RjYscueVOIESJ%2F8HtovCrsfIQTg%2FsPBduXES%2B2RZXhjHfLwvHZPV72BUTSA184cJ9K43wmG%2BnvkrqgJdW35MDyiILyDt6ORkXqOwK3ESRFBT9IcApH7Uhgw61K4%2FL7mMfG7%2FkYAipgWMfkMfF6hKU5%2FGIiiSCbFqsroT53baQao4F2fF97Mr7oYZk4akEXFxQFj%2FjJHT&X-Amz-Signature=9abe84a22ea2622cbac6e278c8ed725cf46a30570fe437fa6d34762738f97c0c&X-Amz-SignedHeaders=host&x-id=GetObject)
