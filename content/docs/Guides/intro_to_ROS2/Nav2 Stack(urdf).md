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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ6LC55%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDkToSeN89ORWjWoJUlNagbVcC%2FTX1%2FeRDrM52lRv%2Bo%2FAIgYIjO7yiKkHTIBkI2VzljH0Y4qnlvpFRA88IPngabJ2cqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgmlZy1GMFeF7w5%2FyrcA8qZVqbJI3%2FKU%2BMwI7flRr%2Fz8hSOJaOLDHq98N32A%2BtkwyoCHb9s9CPS7IAUUo9ABR1z9CWoUCMFsrH2ajphB8DXAMJGELxchKNLher8MC3c6M9ilWYuxVWYdbp6xKTi%2FBCCNKUoakUbKsV9KtQvOFXA%2BXRLNHfkLdT1XoDNQ7qu9WXFVv80NIp6QmcR1EAtl6RE0o%2BrBDd1rnyqXNU2H91PHEXvozkE2cyJxy8Pqwk%2BHvUX%2BYoTK28AOaad90YbnLiY7ZCO5NCLGT77zRBUhUnD%2Fe5pqoNz%2F9TBddqGM8K9%2FbYtbw5ghpY1izlAwCTtR5LDdxiMVwjMu2Ee39yeomn3UX6rR7%2FfFHFBwcG9T3CMT%2BNPBXTrDHiS9G9FuvGdZ0a9v5OT%2Fa6Lng71vkYaID9lv5b%2BALQY76ccIog8Jfyrk6kMHrnU3tuJjK5HmIs%2BU%2F436TDZII4tfrNQBe1LMm6WLcTdXAnDTE1OLgDU%2BoLB9NSusuTUr6UcfUur6GFrfV5WuoaMx%2F6zHBC69qLu0loFw6M6cjyC56QdZ362%2BAqVnd%2BXBTMc6MfGQsE6cpuS6KPboUOlNIyYrIFboC12um0hLFNQM%2B1Sa4BzXdbgOdpC9EBuj3qK1SdNk5pZMNaA88EGOqUBsCiyBS7T5Z3cYXa9zC2fJeg2s7HV4g515ogFDM1MXt7E4VvTNq5Qdra2Dh%2FHCX7n2yEbEpX%2BIkC%2FZ1pMAQ0CGfeUqbPdDThQP2zSvBn1Drv74vgknnTxmPjDkAYvtg4lUbVk%2B2P8%2FKRs0RWOmtmxNJ6ND77jwGpIJuFqsviwvz1ZVezteCjrrzLYa4dUPoNTnXOOVQt10IGqOAzQzJ4DnJKEJVsi&X-Amz-Signature=8a2025546b123bb950a330296a0bce7e02aba3ed3b5e798267a96d9f869437ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ6LC55%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDkToSeN89ORWjWoJUlNagbVcC%2FTX1%2FeRDrM52lRv%2Bo%2FAIgYIjO7yiKkHTIBkI2VzljH0Y4qnlvpFRA88IPngabJ2cqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgmlZy1GMFeF7w5%2FyrcA8qZVqbJI3%2FKU%2BMwI7flRr%2Fz8hSOJaOLDHq98N32A%2BtkwyoCHb9s9CPS7IAUUo9ABR1z9CWoUCMFsrH2ajphB8DXAMJGELxchKNLher8MC3c6M9ilWYuxVWYdbp6xKTi%2FBCCNKUoakUbKsV9KtQvOFXA%2BXRLNHfkLdT1XoDNQ7qu9WXFVv80NIp6QmcR1EAtl6RE0o%2BrBDd1rnyqXNU2H91PHEXvozkE2cyJxy8Pqwk%2BHvUX%2BYoTK28AOaad90YbnLiY7ZCO5NCLGT77zRBUhUnD%2Fe5pqoNz%2F9TBddqGM8K9%2FbYtbw5ghpY1izlAwCTtR5LDdxiMVwjMu2Ee39yeomn3UX6rR7%2FfFHFBwcG9T3CMT%2BNPBXTrDHiS9G9FuvGdZ0a9v5OT%2Fa6Lng71vkYaID9lv5b%2BALQY76ccIog8Jfyrk6kMHrnU3tuJjK5HmIs%2BU%2F436TDZII4tfrNQBe1LMm6WLcTdXAnDTE1OLgDU%2BoLB9NSusuTUr6UcfUur6GFrfV5WuoaMx%2F6zHBC69qLu0loFw6M6cjyC56QdZ362%2BAqVnd%2BXBTMc6MfGQsE6cpuS6KPboUOlNIyYrIFboC12um0hLFNQM%2B1Sa4BzXdbgOdpC9EBuj3qK1SdNk5pZMNaA88EGOqUBsCiyBS7T5Z3cYXa9zC2fJeg2s7HV4g515ogFDM1MXt7E4VvTNq5Qdra2Dh%2FHCX7n2yEbEpX%2BIkC%2FZ1pMAQ0CGfeUqbPdDThQP2zSvBn1Drv74vgknnTxmPjDkAYvtg4lUbVk%2B2P8%2FKRs0RWOmtmxNJ6ND77jwGpIJuFqsviwvz1ZVezteCjrrzLYa4dUPoNTnXOOVQt10IGqOAzQzJ4DnJKEJVsi&X-Amz-Signature=c20a1eef93a6ad63d0a7d52eaf038f43f0b306b89498b7bef476dd6b9790cafb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ6LC55%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDkToSeN89ORWjWoJUlNagbVcC%2FTX1%2FeRDrM52lRv%2Bo%2FAIgYIjO7yiKkHTIBkI2VzljH0Y4qnlvpFRA88IPngabJ2cqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgmlZy1GMFeF7w5%2FyrcA8qZVqbJI3%2FKU%2BMwI7flRr%2Fz8hSOJaOLDHq98N32A%2BtkwyoCHb9s9CPS7IAUUo9ABR1z9CWoUCMFsrH2ajphB8DXAMJGELxchKNLher8MC3c6M9ilWYuxVWYdbp6xKTi%2FBCCNKUoakUbKsV9KtQvOFXA%2BXRLNHfkLdT1XoDNQ7qu9WXFVv80NIp6QmcR1EAtl6RE0o%2BrBDd1rnyqXNU2H91PHEXvozkE2cyJxy8Pqwk%2BHvUX%2BYoTK28AOaad90YbnLiY7ZCO5NCLGT77zRBUhUnD%2Fe5pqoNz%2F9TBddqGM8K9%2FbYtbw5ghpY1izlAwCTtR5LDdxiMVwjMu2Ee39yeomn3UX6rR7%2FfFHFBwcG9T3CMT%2BNPBXTrDHiS9G9FuvGdZ0a9v5OT%2Fa6Lng71vkYaID9lv5b%2BALQY76ccIog8Jfyrk6kMHrnU3tuJjK5HmIs%2BU%2F436TDZII4tfrNQBe1LMm6WLcTdXAnDTE1OLgDU%2BoLB9NSusuTUr6UcfUur6GFrfV5WuoaMx%2F6zHBC69qLu0loFw6M6cjyC56QdZ362%2BAqVnd%2BXBTMc6MfGQsE6cpuS6KPboUOlNIyYrIFboC12um0hLFNQM%2B1Sa4BzXdbgOdpC9EBuj3qK1SdNk5pZMNaA88EGOqUBsCiyBS7T5Z3cYXa9zC2fJeg2s7HV4g515ogFDM1MXt7E4VvTNq5Qdra2Dh%2FHCX7n2yEbEpX%2BIkC%2FZ1pMAQ0CGfeUqbPdDThQP2zSvBn1Drv74vgknnTxmPjDkAYvtg4lUbVk%2B2P8%2FKRs0RWOmtmxNJ6ND77jwGpIJuFqsviwvz1ZVezteCjrrzLYa4dUPoNTnXOOVQt10IGqOAzQzJ4DnJKEJVsi&X-Amz-Signature=87c749b6c2f34442466acb5b02c7d3ad57469a2f2c7204e17b1da3b4942bf86b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ6LC55%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDkToSeN89ORWjWoJUlNagbVcC%2FTX1%2FeRDrM52lRv%2Bo%2FAIgYIjO7yiKkHTIBkI2VzljH0Y4qnlvpFRA88IPngabJ2cqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgmlZy1GMFeF7w5%2FyrcA8qZVqbJI3%2FKU%2BMwI7flRr%2Fz8hSOJaOLDHq98N32A%2BtkwyoCHb9s9CPS7IAUUo9ABR1z9CWoUCMFsrH2ajphB8DXAMJGELxchKNLher8MC3c6M9ilWYuxVWYdbp6xKTi%2FBCCNKUoakUbKsV9KtQvOFXA%2BXRLNHfkLdT1XoDNQ7qu9WXFVv80NIp6QmcR1EAtl6RE0o%2BrBDd1rnyqXNU2H91PHEXvozkE2cyJxy8Pqwk%2BHvUX%2BYoTK28AOaad90YbnLiY7ZCO5NCLGT77zRBUhUnD%2Fe5pqoNz%2F9TBddqGM8K9%2FbYtbw5ghpY1izlAwCTtR5LDdxiMVwjMu2Ee39yeomn3UX6rR7%2FfFHFBwcG9T3CMT%2BNPBXTrDHiS9G9FuvGdZ0a9v5OT%2Fa6Lng71vkYaID9lv5b%2BALQY76ccIog8Jfyrk6kMHrnU3tuJjK5HmIs%2BU%2F436TDZII4tfrNQBe1LMm6WLcTdXAnDTE1OLgDU%2BoLB9NSusuTUr6UcfUur6GFrfV5WuoaMx%2F6zHBC69qLu0loFw6M6cjyC56QdZ362%2BAqVnd%2BXBTMc6MfGQsE6cpuS6KPboUOlNIyYrIFboC12um0hLFNQM%2B1Sa4BzXdbgOdpC9EBuj3qK1SdNk5pZMNaA88EGOqUBsCiyBS7T5Z3cYXa9zC2fJeg2s7HV4g515ogFDM1MXt7E4VvTNq5Qdra2Dh%2FHCX7n2yEbEpX%2BIkC%2FZ1pMAQ0CGfeUqbPdDThQP2zSvBn1Drv74vgknnTxmPjDkAYvtg4lUbVk%2B2P8%2FKRs0RWOmtmxNJ6ND77jwGpIJuFqsviwvz1ZVezteCjrrzLYa4dUPoNTnXOOVQt10IGqOAzQzJ4DnJKEJVsi&X-Amz-Signature=f7728c9e7c61d1c4061a5d188d5239767f6a41b17ce2556d4ed3d1ae067cdaff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ6LC55%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDkToSeN89ORWjWoJUlNagbVcC%2FTX1%2FeRDrM52lRv%2Bo%2FAIgYIjO7yiKkHTIBkI2VzljH0Y4qnlvpFRA88IPngabJ2cqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgmlZy1GMFeF7w5%2FyrcA8qZVqbJI3%2FKU%2BMwI7flRr%2Fz8hSOJaOLDHq98N32A%2BtkwyoCHb9s9CPS7IAUUo9ABR1z9CWoUCMFsrH2ajphB8DXAMJGELxchKNLher8MC3c6M9ilWYuxVWYdbp6xKTi%2FBCCNKUoakUbKsV9KtQvOFXA%2BXRLNHfkLdT1XoDNQ7qu9WXFVv80NIp6QmcR1EAtl6RE0o%2BrBDd1rnyqXNU2H91PHEXvozkE2cyJxy8Pqwk%2BHvUX%2BYoTK28AOaad90YbnLiY7ZCO5NCLGT77zRBUhUnD%2Fe5pqoNz%2F9TBddqGM8K9%2FbYtbw5ghpY1izlAwCTtR5LDdxiMVwjMu2Ee39yeomn3UX6rR7%2FfFHFBwcG9T3CMT%2BNPBXTrDHiS9G9FuvGdZ0a9v5OT%2Fa6Lng71vkYaID9lv5b%2BALQY76ccIog8Jfyrk6kMHrnU3tuJjK5HmIs%2BU%2F436TDZII4tfrNQBe1LMm6WLcTdXAnDTE1OLgDU%2BoLB9NSusuTUr6UcfUur6GFrfV5WuoaMx%2F6zHBC69qLu0loFw6M6cjyC56QdZ362%2BAqVnd%2BXBTMc6MfGQsE6cpuS6KPboUOlNIyYrIFboC12um0hLFNQM%2B1Sa4BzXdbgOdpC9EBuj3qK1SdNk5pZMNaA88EGOqUBsCiyBS7T5Z3cYXa9zC2fJeg2s7HV4g515ogFDM1MXt7E4VvTNq5Qdra2Dh%2FHCX7n2yEbEpX%2BIkC%2FZ1pMAQ0CGfeUqbPdDThQP2zSvBn1Drv74vgknnTxmPjDkAYvtg4lUbVk%2B2P8%2FKRs0RWOmtmxNJ6ND77jwGpIJuFqsviwvz1ZVezteCjrrzLYa4dUPoNTnXOOVQt10IGqOAzQzJ4DnJKEJVsi&X-Amz-Signature=8883765dd656b00e03aea7e4454236fca747c1e81d487bb7440712c1339333a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEQ6LC55%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDkToSeN89ORWjWoJUlNagbVcC%2FTX1%2FeRDrM52lRv%2Bo%2FAIgYIjO7yiKkHTIBkI2VzljH0Y4qnlvpFRA88IPngabJ2cqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgmlZy1GMFeF7w5%2FyrcA8qZVqbJI3%2FKU%2BMwI7flRr%2Fz8hSOJaOLDHq98N32A%2BtkwyoCHb9s9CPS7IAUUo9ABR1z9CWoUCMFsrH2ajphB8DXAMJGELxchKNLher8MC3c6M9ilWYuxVWYdbp6xKTi%2FBCCNKUoakUbKsV9KtQvOFXA%2BXRLNHfkLdT1XoDNQ7qu9WXFVv80NIp6QmcR1EAtl6RE0o%2BrBDd1rnyqXNU2H91PHEXvozkE2cyJxy8Pqwk%2BHvUX%2BYoTK28AOaad90YbnLiY7ZCO5NCLGT77zRBUhUnD%2Fe5pqoNz%2F9TBddqGM8K9%2FbYtbw5ghpY1izlAwCTtR5LDdxiMVwjMu2Ee39yeomn3UX6rR7%2FfFHFBwcG9T3CMT%2BNPBXTrDHiS9G9FuvGdZ0a9v5OT%2Fa6Lng71vkYaID9lv5b%2BALQY76ccIog8Jfyrk6kMHrnU3tuJjK5HmIs%2BU%2F436TDZII4tfrNQBe1LMm6WLcTdXAnDTE1OLgDU%2BoLB9NSusuTUr6UcfUur6GFrfV5WuoaMx%2F6zHBC69qLu0loFw6M6cjyC56QdZ362%2BAqVnd%2BXBTMc6MfGQsE6cpuS6KPboUOlNIyYrIFboC12um0hLFNQM%2B1Sa4BzXdbgOdpC9EBuj3qK1SdNk5pZMNaA88EGOqUBsCiyBS7T5Z3cYXa9zC2fJeg2s7HV4g515ogFDM1MXt7E4VvTNq5Qdra2Dh%2FHCX7n2yEbEpX%2BIkC%2FZ1pMAQ0CGfeUqbPdDThQP2zSvBn1Drv74vgknnTxmPjDkAYvtg4lUbVk%2B2P8%2FKRs0RWOmtmxNJ6ND77jwGpIJuFqsviwvz1ZVezteCjrrzLYa4dUPoNTnXOOVQt10IGqOAzQzJ4DnJKEJVsi&X-Amz-Signature=518abe75c01ddd557a9204117b2a4d6e134d57ba11991e4fa06d1b5023f590d1&X-Amz-SignedHeaders=host&x-id=GetObject)
