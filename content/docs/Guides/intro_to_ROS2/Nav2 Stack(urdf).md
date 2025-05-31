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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJXWRR3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5ftLNotlITW5IAxhjMrx62%2FXnt8qKhjNRMAagrXAfQIhAJ6W7tI9FwKWXhnNY%2B7nHnsSZlFDKJgPu1Yu4gaOdvyDKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz84tZA0YwBuDRTarMq3ANXRqAPZzOCh9J8dnaIm4XQ9wuqZjLf5UR689KM6%2Fw7GMcU%2FGRWIqEXVVhFs9vRM0CDI9VgKJNpvm%2BHGHTRRqReDDavWQAf4Tct%2BmtPPguu8%2Ft4WapYo4vO0Au3TL1WqkDhFh5DUOJJSlvJuDMn5u91zwpFRq1lPuV0ru4wtSLxcj%2Fp5WjZAiQBBUo3dSzWU28bGhs6H5mNm6t62fjtTzFVNZBUfimCr8x5MwwBFS2BZCt%2BhNgnFfigg2XOyUr30KKU%2F8XqLuXxDl5tSNm%2BvQbPrBUQi92Yc38kOQ%2FRZR0%2Fl4mKoj1e2QDGHh3Z32l8Y9fCG6TzVl55OEuLDkaKSInVsRB2LlBtF1tr3i1mv1KHG23Pwtg9JfwdHsNTOqY5BxjGiBhD6RD3Lenxwg5DgGaPF%2BInBnIz4LcR1KqspOaWgTTA%2FDE6TJSpQVaEvmTIcIL6kWFZ1%2FZ%2F%2FN1VxpOrpBXgAqlOVlouC4TrU1Wbq%2BgVRAwk4yNZoifQh0idnLJC8BYRTlmK6c6q5gMzJi9Ux2b%2BWNY6uJPa%2F3uC7c75Fg89xRrO71eU0S59QERGTkJ%2B2W7tcH3N%2FJpSnbSLqb8boWAGBBxvBTJaWDjQYevngHaWCKAOk7zhvBy66RBeWjCqs%2B3BBjqkAbnazlKZoPV2tdPS%2FrVZrWr9CnLoe6F9g%2Bi52qsgamvKRvsIj2fIi0i%2BbHOCd8dDhrRXOoqpWnQNdpZjzat7hQSZ6LwkdinVxml2um0eShRhHfXe8qF5jR3Fx8wtdkdaUwiunX%2BxIsUrJ54HrCDrmrEOCzOZVf67qxnxBQFFdO%2FqoyIHS1N%2BRSeM9heVSFZWddb27JJUtdRWgE4wkXCHko3%2BT1bi&X-Amz-Signature=bdbe475a519ae1ba741866c0bf1362a8fb679e803ff18a18badd4667e22df034&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJXWRR3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5ftLNotlITW5IAxhjMrx62%2FXnt8qKhjNRMAagrXAfQIhAJ6W7tI9FwKWXhnNY%2B7nHnsSZlFDKJgPu1Yu4gaOdvyDKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz84tZA0YwBuDRTarMq3ANXRqAPZzOCh9J8dnaIm4XQ9wuqZjLf5UR689KM6%2Fw7GMcU%2FGRWIqEXVVhFs9vRM0CDI9VgKJNpvm%2BHGHTRRqReDDavWQAf4Tct%2BmtPPguu8%2Ft4WapYo4vO0Au3TL1WqkDhFh5DUOJJSlvJuDMn5u91zwpFRq1lPuV0ru4wtSLxcj%2Fp5WjZAiQBBUo3dSzWU28bGhs6H5mNm6t62fjtTzFVNZBUfimCr8x5MwwBFS2BZCt%2BhNgnFfigg2XOyUr30KKU%2F8XqLuXxDl5tSNm%2BvQbPrBUQi92Yc38kOQ%2FRZR0%2Fl4mKoj1e2QDGHh3Z32l8Y9fCG6TzVl55OEuLDkaKSInVsRB2LlBtF1tr3i1mv1KHG23Pwtg9JfwdHsNTOqY5BxjGiBhD6RD3Lenxwg5DgGaPF%2BInBnIz4LcR1KqspOaWgTTA%2FDE6TJSpQVaEvmTIcIL6kWFZ1%2FZ%2F%2FN1VxpOrpBXgAqlOVlouC4TrU1Wbq%2BgVRAwk4yNZoifQh0idnLJC8BYRTlmK6c6q5gMzJi9Ux2b%2BWNY6uJPa%2F3uC7c75Fg89xRrO71eU0S59QERGTkJ%2B2W7tcH3N%2FJpSnbSLqb8boWAGBBxvBTJaWDjQYevngHaWCKAOk7zhvBy66RBeWjCqs%2B3BBjqkAbnazlKZoPV2tdPS%2FrVZrWr9CnLoe6F9g%2Bi52qsgamvKRvsIj2fIi0i%2BbHOCd8dDhrRXOoqpWnQNdpZjzat7hQSZ6LwkdinVxml2um0eShRhHfXe8qF5jR3Fx8wtdkdaUwiunX%2BxIsUrJ54HrCDrmrEOCzOZVf67qxnxBQFFdO%2FqoyIHS1N%2BRSeM9heVSFZWddb27JJUtdRWgE4wkXCHko3%2BT1bi&X-Amz-Signature=6f141205d106f00367cba0c8d931a3811a5088f5cfd883b81d743cf117d9f480&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJXWRR3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5ftLNotlITW5IAxhjMrx62%2FXnt8qKhjNRMAagrXAfQIhAJ6W7tI9FwKWXhnNY%2B7nHnsSZlFDKJgPu1Yu4gaOdvyDKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz84tZA0YwBuDRTarMq3ANXRqAPZzOCh9J8dnaIm4XQ9wuqZjLf5UR689KM6%2Fw7GMcU%2FGRWIqEXVVhFs9vRM0CDI9VgKJNpvm%2BHGHTRRqReDDavWQAf4Tct%2BmtPPguu8%2Ft4WapYo4vO0Au3TL1WqkDhFh5DUOJJSlvJuDMn5u91zwpFRq1lPuV0ru4wtSLxcj%2Fp5WjZAiQBBUo3dSzWU28bGhs6H5mNm6t62fjtTzFVNZBUfimCr8x5MwwBFS2BZCt%2BhNgnFfigg2XOyUr30KKU%2F8XqLuXxDl5tSNm%2BvQbPrBUQi92Yc38kOQ%2FRZR0%2Fl4mKoj1e2QDGHh3Z32l8Y9fCG6TzVl55OEuLDkaKSInVsRB2LlBtF1tr3i1mv1KHG23Pwtg9JfwdHsNTOqY5BxjGiBhD6RD3Lenxwg5DgGaPF%2BInBnIz4LcR1KqspOaWgTTA%2FDE6TJSpQVaEvmTIcIL6kWFZ1%2FZ%2F%2FN1VxpOrpBXgAqlOVlouC4TrU1Wbq%2BgVRAwk4yNZoifQh0idnLJC8BYRTlmK6c6q5gMzJi9Ux2b%2BWNY6uJPa%2F3uC7c75Fg89xRrO71eU0S59QERGTkJ%2B2W7tcH3N%2FJpSnbSLqb8boWAGBBxvBTJaWDjQYevngHaWCKAOk7zhvBy66RBeWjCqs%2B3BBjqkAbnazlKZoPV2tdPS%2FrVZrWr9CnLoe6F9g%2Bi52qsgamvKRvsIj2fIi0i%2BbHOCd8dDhrRXOoqpWnQNdpZjzat7hQSZ6LwkdinVxml2um0eShRhHfXe8qF5jR3Fx8wtdkdaUwiunX%2BxIsUrJ54HrCDrmrEOCzOZVf67qxnxBQFFdO%2FqoyIHS1N%2BRSeM9heVSFZWddb27JJUtdRWgE4wkXCHko3%2BT1bi&X-Amz-Signature=deb8fdf023819238b429cf1c4b08d9aa980ced99b2fadf13b35dac29872933d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJXWRR3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5ftLNotlITW5IAxhjMrx62%2FXnt8qKhjNRMAagrXAfQIhAJ6W7tI9FwKWXhnNY%2B7nHnsSZlFDKJgPu1Yu4gaOdvyDKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz84tZA0YwBuDRTarMq3ANXRqAPZzOCh9J8dnaIm4XQ9wuqZjLf5UR689KM6%2Fw7GMcU%2FGRWIqEXVVhFs9vRM0CDI9VgKJNpvm%2BHGHTRRqReDDavWQAf4Tct%2BmtPPguu8%2Ft4WapYo4vO0Au3TL1WqkDhFh5DUOJJSlvJuDMn5u91zwpFRq1lPuV0ru4wtSLxcj%2Fp5WjZAiQBBUo3dSzWU28bGhs6H5mNm6t62fjtTzFVNZBUfimCr8x5MwwBFS2BZCt%2BhNgnFfigg2XOyUr30KKU%2F8XqLuXxDl5tSNm%2BvQbPrBUQi92Yc38kOQ%2FRZR0%2Fl4mKoj1e2QDGHh3Z32l8Y9fCG6TzVl55OEuLDkaKSInVsRB2LlBtF1tr3i1mv1KHG23Pwtg9JfwdHsNTOqY5BxjGiBhD6RD3Lenxwg5DgGaPF%2BInBnIz4LcR1KqspOaWgTTA%2FDE6TJSpQVaEvmTIcIL6kWFZ1%2FZ%2F%2FN1VxpOrpBXgAqlOVlouC4TrU1Wbq%2BgVRAwk4yNZoifQh0idnLJC8BYRTlmK6c6q5gMzJi9Ux2b%2BWNY6uJPa%2F3uC7c75Fg89xRrO71eU0S59QERGTkJ%2B2W7tcH3N%2FJpSnbSLqb8boWAGBBxvBTJaWDjQYevngHaWCKAOk7zhvBy66RBeWjCqs%2B3BBjqkAbnazlKZoPV2tdPS%2FrVZrWr9CnLoe6F9g%2Bi52qsgamvKRvsIj2fIi0i%2BbHOCd8dDhrRXOoqpWnQNdpZjzat7hQSZ6LwkdinVxml2um0eShRhHfXe8qF5jR3Fx8wtdkdaUwiunX%2BxIsUrJ54HrCDrmrEOCzOZVf67qxnxBQFFdO%2FqoyIHS1N%2BRSeM9heVSFZWddb27JJUtdRWgE4wkXCHko3%2BT1bi&X-Amz-Signature=b5cb12b1c4deb7e6ce7c089d9894a9e3e3ca6ad082935748c4b2d621f2d8f194&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJXWRR3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5ftLNotlITW5IAxhjMrx62%2FXnt8qKhjNRMAagrXAfQIhAJ6W7tI9FwKWXhnNY%2B7nHnsSZlFDKJgPu1Yu4gaOdvyDKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz84tZA0YwBuDRTarMq3ANXRqAPZzOCh9J8dnaIm4XQ9wuqZjLf5UR689KM6%2Fw7GMcU%2FGRWIqEXVVhFs9vRM0CDI9VgKJNpvm%2BHGHTRRqReDDavWQAf4Tct%2BmtPPguu8%2Ft4WapYo4vO0Au3TL1WqkDhFh5DUOJJSlvJuDMn5u91zwpFRq1lPuV0ru4wtSLxcj%2Fp5WjZAiQBBUo3dSzWU28bGhs6H5mNm6t62fjtTzFVNZBUfimCr8x5MwwBFS2BZCt%2BhNgnFfigg2XOyUr30KKU%2F8XqLuXxDl5tSNm%2BvQbPrBUQi92Yc38kOQ%2FRZR0%2Fl4mKoj1e2QDGHh3Z32l8Y9fCG6TzVl55OEuLDkaKSInVsRB2LlBtF1tr3i1mv1KHG23Pwtg9JfwdHsNTOqY5BxjGiBhD6RD3Lenxwg5DgGaPF%2BInBnIz4LcR1KqspOaWgTTA%2FDE6TJSpQVaEvmTIcIL6kWFZ1%2FZ%2F%2FN1VxpOrpBXgAqlOVlouC4TrU1Wbq%2BgVRAwk4yNZoifQh0idnLJC8BYRTlmK6c6q5gMzJi9Ux2b%2BWNY6uJPa%2F3uC7c75Fg89xRrO71eU0S59QERGTkJ%2B2W7tcH3N%2FJpSnbSLqb8boWAGBBxvBTJaWDjQYevngHaWCKAOk7zhvBy66RBeWjCqs%2B3BBjqkAbnazlKZoPV2tdPS%2FrVZrWr9CnLoe6F9g%2Bi52qsgamvKRvsIj2fIi0i%2BbHOCd8dDhrRXOoqpWnQNdpZjzat7hQSZ6LwkdinVxml2um0eShRhHfXe8qF5jR3Fx8wtdkdaUwiunX%2BxIsUrJ54HrCDrmrEOCzOZVf67qxnxBQFFdO%2FqoyIHS1N%2BRSeM9heVSFZWddb27JJUtdRWgE4wkXCHko3%2BT1bi&X-Amz-Signature=f87bacc87b6e9c38f0a20db37a2edbc7da7dd90e02ae84ea4a39f79a6ea46d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKJXWRR3%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf5ftLNotlITW5IAxhjMrx62%2FXnt8qKhjNRMAagrXAfQIhAJ6W7tI9FwKWXhnNY%2B7nHnsSZlFDKJgPu1Yu4gaOdvyDKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz84tZA0YwBuDRTarMq3ANXRqAPZzOCh9J8dnaIm4XQ9wuqZjLf5UR689KM6%2Fw7GMcU%2FGRWIqEXVVhFs9vRM0CDI9VgKJNpvm%2BHGHTRRqReDDavWQAf4Tct%2BmtPPguu8%2Ft4WapYo4vO0Au3TL1WqkDhFh5DUOJJSlvJuDMn5u91zwpFRq1lPuV0ru4wtSLxcj%2Fp5WjZAiQBBUo3dSzWU28bGhs6H5mNm6t62fjtTzFVNZBUfimCr8x5MwwBFS2BZCt%2BhNgnFfigg2XOyUr30KKU%2F8XqLuXxDl5tSNm%2BvQbPrBUQi92Yc38kOQ%2FRZR0%2Fl4mKoj1e2QDGHh3Z32l8Y9fCG6TzVl55OEuLDkaKSInVsRB2LlBtF1tr3i1mv1KHG23Pwtg9JfwdHsNTOqY5BxjGiBhD6RD3Lenxwg5DgGaPF%2BInBnIz4LcR1KqspOaWgTTA%2FDE6TJSpQVaEvmTIcIL6kWFZ1%2FZ%2F%2FN1VxpOrpBXgAqlOVlouC4TrU1Wbq%2BgVRAwk4yNZoifQh0idnLJC8BYRTlmK6c6q5gMzJi9Ux2b%2BWNY6uJPa%2F3uC7c75Fg89xRrO71eU0S59QERGTkJ%2B2W7tcH3N%2FJpSnbSLqb8boWAGBBxvBTJaWDjQYevngHaWCKAOk7zhvBy66RBeWjCqs%2B3BBjqkAbnazlKZoPV2tdPS%2FrVZrWr9CnLoe6F9g%2Bi52qsgamvKRvsIj2fIi0i%2BbHOCd8dDhrRXOoqpWnQNdpZjzat7hQSZ6LwkdinVxml2um0eShRhHfXe8qF5jR3Fx8wtdkdaUwiunX%2BxIsUrJ54HrCDrmrEOCzOZVf67qxnxBQFFdO%2FqoyIHS1N%2BRSeM9heVSFZWddb27JJUtdRWgE4wkXCHko3%2BT1bi&X-Amz-Signature=cb9414456b2d404f057a16e5bac6e577bab53330278cca0931704077d746fde3&X-Amz-SignedHeaders=host&x-id=GetObject)
