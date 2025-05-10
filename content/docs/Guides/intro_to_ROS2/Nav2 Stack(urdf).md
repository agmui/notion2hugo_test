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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665V56GWY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2R%2BU%2FqJA0Gw5asTxMEUQ3kE31HB07pnE1DZdIyWNBHgIhANJRK91ZtWwlScbJJs9qEVaU6Ronw0tY4D8MWGfm7s%2F%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igziowug%2BRTvuOxrS14q3AOiQ0yJQWz6LwUWUMyUqjUoonsZiH5VZU8SkEMt4XIiIqaCDbSrtJKZAoGQrPaoBPgVOm5C60EGiW%2B0672q7U4urhxZgIk6xCBAyqGPoYqQJ%2Fs1rzniUqAYbfHiJiKgFW9A1n1LG1gJR9dvVPZ6LUEaIApYY%2FHCvoeoyAO8DJnLl5f0Y98L3DvGeUALt7uikldX8gjyII6cVqcWlAqY4iomWB43UPqS83pLWu4WseX0Vy6OMoNTzWHcxOAwXO%2BsflGvura0IR4htNRzsfoziBX1izlxVPRLP%2Be%2BBwW2VS03TuqRJMx9BzI9QsgsyCRd4OPX%2FlLsTqwmNYyOnCEyTPcLTNR75rEkWPHZo0owQAUkmQuwAUQfw2w%2FWwxgrjY0fPQxYHRLXhtnehcc2RY%2BqpXtZVvI8RVk%2BfIWzsFyZUB8hgN9FoAK5Yq%2Be0CGEqWDGjUg0eI%2FT22kePdodtvnSLFCVuWZXWuY9zahZK3DAZneWHfkTkE%2F%2BQbO0MX1zOnwhvBy2avJ4JstgZVkN4zdSQJdLQIHS6nErnBziaEdRNeIAUA7Tg0FfQHF3CtlUkrUWoFgs3tDU3nPJaQ0IspHdaFUa%2FYjj79M4JI3P3BcBVXGmy%2FlPgMvBtJp05p4SzDDj%2FzABjqkAQ2ckLfBPt4VU14ctnnLtZsTQeBbfhQS9UopkwMnuxnfonZVk2w1hOdyBp0qDGMM5gCX4ifRNVbjba33KPRNoYNTSvUYHo97o0sf9Tn4DAyu7Mk5Zw8Af1bZbWuWmGuQlrptJGp7RMEUxNy1tCWaTdQx2H62fKoXFoyUco0gIc%2F0i8nxm9Vu43lt35Uqd3%2FhAvU5HaHjOBkZf2KQsvglSwvA2oEv&X-Amz-Signature=4e2c252fd12caf2a37903f79a3c0dca8a0911090d1ac2979868eb1ea9dd6716d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665V56GWY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2R%2BU%2FqJA0Gw5asTxMEUQ3kE31HB07pnE1DZdIyWNBHgIhANJRK91ZtWwlScbJJs9qEVaU6Ronw0tY4D8MWGfm7s%2F%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igziowug%2BRTvuOxrS14q3AOiQ0yJQWz6LwUWUMyUqjUoonsZiH5VZU8SkEMt4XIiIqaCDbSrtJKZAoGQrPaoBPgVOm5C60EGiW%2B0672q7U4urhxZgIk6xCBAyqGPoYqQJ%2Fs1rzniUqAYbfHiJiKgFW9A1n1LG1gJR9dvVPZ6LUEaIApYY%2FHCvoeoyAO8DJnLl5f0Y98L3DvGeUALt7uikldX8gjyII6cVqcWlAqY4iomWB43UPqS83pLWu4WseX0Vy6OMoNTzWHcxOAwXO%2BsflGvura0IR4htNRzsfoziBX1izlxVPRLP%2Be%2BBwW2VS03TuqRJMx9BzI9QsgsyCRd4OPX%2FlLsTqwmNYyOnCEyTPcLTNR75rEkWPHZo0owQAUkmQuwAUQfw2w%2FWwxgrjY0fPQxYHRLXhtnehcc2RY%2BqpXtZVvI8RVk%2BfIWzsFyZUB8hgN9FoAK5Yq%2Be0CGEqWDGjUg0eI%2FT22kePdodtvnSLFCVuWZXWuY9zahZK3DAZneWHfkTkE%2F%2BQbO0MX1zOnwhvBy2avJ4JstgZVkN4zdSQJdLQIHS6nErnBziaEdRNeIAUA7Tg0FfQHF3CtlUkrUWoFgs3tDU3nPJaQ0IspHdaFUa%2FYjj79M4JI3P3BcBVXGmy%2FlPgMvBtJp05p4SzDDj%2FzABjqkAQ2ckLfBPt4VU14ctnnLtZsTQeBbfhQS9UopkwMnuxnfonZVk2w1hOdyBp0qDGMM5gCX4ifRNVbjba33KPRNoYNTSvUYHo97o0sf9Tn4DAyu7Mk5Zw8Af1bZbWuWmGuQlrptJGp7RMEUxNy1tCWaTdQx2H62fKoXFoyUco0gIc%2F0i8nxm9Vu43lt35Uqd3%2FhAvU5HaHjOBkZf2KQsvglSwvA2oEv&X-Amz-Signature=c947109e4e67950c42f420d9636713f52b74e12908e9e373acdcf90a09c3f931&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665V56GWY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2R%2BU%2FqJA0Gw5asTxMEUQ3kE31HB07pnE1DZdIyWNBHgIhANJRK91ZtWwlScbJJs9qEVaU6Ronw0tY4D8MWGfm7s%2F%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igziowug%2BRTvuOxrS14q3AOiQ0yJQWz6LwUWUMyUqjUoonsZiH5VZU8SkEMt4XIiIqaCDbSrtJKZAoGQrPaoBPgVOm5C60EGiW%2B0672q7U4urhxZgIk6xCBAyqGPoYqQJ%2Fs1rzniUqAYbfHiJiKgFW9A1n1LG1gJR9dvVPZ6LUEaIApYY%2FHCvoeoyAO8DJnLl5f0Y98L3DvGeUALt7uikldX8gjyII6cVqcWlAqY4iomWB43UPqS83pLWu4WseX0Vy6OMoNTzWHcxOAwXO%2BsflGvura0IR4htNRzsfoziBX1izlxVPRLP%2Be%2BBwW2VS03TuqRJMx9BzI9QsgsyCRd4OPX%2FlLsTqwmNYyOnCEyTPcLTNR75rEkWPHZo0owQAUkmQuwAUQfw2w%2FWwxgrjY0fPQxYHRLXhtnehcc2RY%2BqpXtZVvI8RVk%2BfIWzsFyZUB8hgN9FoAK5Yq%2Be0CGEqWDGjUg0eI%2FT22kePdodtvnSLFCVuWZXWuY9zahZK3DAZneWHfkTkE%2F%2BQbO0MX1zOnwhvBy2avJ4JstgZVkN4zdSQJdLQIHS6nErnBziaEdRNeIAUA7Tg0FfQHF3CtlUkrUWoFgs3tDU3nPJaQ0IspHdaFUa%2FYjj79M4JI3P3BcBVXGmy%2FlPgMvBtJp05p4SzDDj%2FzABjqkAQ2ckLfBPt4VU14ctnnLtZsTQeBbfhQS9UopkwMnuxnfonZVk2w1hOdyBp0qDGMM5gCX4ifRNVbjba33KPRNoYNTSvUYHo97o0sf9Tn4DAyu7Mk5Zw8Af1bZbWuWmGuQlrptJGp7RMEUxNy1tCWaTdQx2H62fKoXFoyUco0gIc%2F0i8nxm9Vu43lt35Uqd3%2FhAvU5HaHjOBkZf2KQsvglSwvA2oEv&X-Amz-Signature=0ce68f5ccd8c858c0f33ff214f867a7a634f2fa0cb0dbd8b113f864150853303&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665V56GWY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2R%2BU%2FqJA0Gw5asTxMEUQ3kE31HB07pnE1DZdIyWNBHgIhANJRK91ZtWwlScbJJs9qEVaU6Ronw0tY4D8MWGfm7s%2F%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igziowug%2BRTvuOxrS14q3AOiQ0yJQWz6LwUWUMyUqjUoonsZiH5VZU8SkEMt4XIiIqaCDbSrtJKZAoGQrPaoBPgVOm5C60EGiW%2B0672q7U4urhxZgIk6xCBAyqGPoYqQJ%2Fs1rzniUqAYbfHiJiKgFW9A1n1LG1gJR9dvVPZ6LUEaIApYY%2FHCvoeoyAO8DJnLl5f0Y98L3DvGeUALt7uikldX8gjyII6cVqcWlAqY4iomWB43UPqS83pLWu4WseX0Vy6OMoNTzWHcxOAwXO%2BsflGvura0IR4htNRzsfoziBX1izlxVPRLP%2Be%2BBwW2VS03TuqRJMx9BzI9QsgsyCRd4OPX%2FlLsTqwmNYyOnCEyTPcLTNR75rEkWPHZo0owQAUkmQuwAUQfw2w%2FWwxgrjY0fPQxYHRLXhtnehcc2RY%2BqpXtZVvI8RVk%2BfIWzsFyZUB8hgN9FoAK5Yq%2Be0CGEqWDGjUg0eI%2FT22kePdodtvnSLFCVuWZXWuY9zahZK3DAZneWHfkTkE%2F%2BQbO0MX1zOnwhvBy2avJ4JstgZVkN4zdSQJdLQIHS6nErnBziaEdRNeIAUA7Tg0FfQHF3CtlUkrUWoFgs3tDU3nPJaQ0IspHdaFUa%2FYjj79M4JI3P3BcBVXGmy%2FlPgMvBtJp05p4SzDDj%2FzABjqkAQ2ckLfBPt4VU14ctnnLtZsTQeBbfhQS9UopkwMnuxnfonZVk2w1hOdyBp0qDGMM5gCX4ifRNVbjba33KPRNoYNTSvUYHo97o0sf9Tn4DAyu7Mk5Zw8Af1bZbWuWmGuQlrptJGp7RMEUxNy1tCWaTdQx2H62fKoXFoyUco0gIc%2F0i8nxm9Vu43lt35Uqd3%2FhAvU5HaHjOBkZf2KQsvglSwvA2oEv&X-Amz-Signature=82b428a56d3b87bd41a183ed81895ebde03db85f6a51be4e19a271d683c769a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665V56GWY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2R%2BU%2FqJA0Gw5asTxMEUQ3kE31HB07pnE1DZdIyWNBHgIhANJRK91ZtWwlScbJJs9qEVaU6Ronw0tY4D8MWGfm7s%2F%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igziowug%2BRTvuOxrS14q3AOiQ0yJQWz6LwUWUMyUqjUoonsZiH5VZU8SkEMt4XIiIqaCDbSrtJKZAoGQrPaoBPgVOm5C60EGiW%2B0672q7U4urhxZgIk6xCBAyqGPoYqQJ%2Fs1rzniUqAYbfHiJiKgFW9A1n1LG1gJR9dvVPZ6LUEaIApYY%2FHCvoeoyAO8DJnLl5f0Y98L3DvGeUALt7uikldX8gjyII6cVqcWlAqY4iomWB43UPqS83pLWu4WseX0Vy6OMoNTzWHcxOAwXO%2BsflGvura0IR4htNRzsfoziBX1izlxVPRLP%2Be%2BBwW2VS03TuqRJMx9BzI9QsgsyCRd4OPX%2FlLsTqwmNYyOnCEyTPcLTNR75rEkWPHZo0owQAUkmQuwAUQfw2w%2FWwxgrjY0fPQxYHRLXhtnehcc2RY%2BqpXtZVvI8RVk%2BfIWzsFyZUB8hgN9FoAK5Yq%2Be0CGEqWDGjUg0eI%2FT22kePdodtvnSLFCVuWZXWuY9zahZK3DAZneWHfkTkE%2F%2BQbO0MX1zOnwhvBy2avJ4JstgZVkN4zdSQJdLQIHS6nErnBziaEdRNeIAUA7Tg0FfQHF3CtlUkrUWoFgs3tDU3nPJaQ0IspHdaFUa%2FYjj79M4JI3P3BcBVXGmy%2FlPgMvBtJp05p4SzDDj%2FzABjqkAQ2ckLfBPt4VU14ctnnLtZsTQeBbfhQS9UopkwMnuxnfonZVk2w1hOdyBp0qDGMM5gCX4ifRNVbjba33KPRNoYNTSvUYHo97o0sf9Tn4DAyu7Mk5Zw8Af1bZbWuWmGuQlrptJGp7RMEUxNy1tCWaTdQx2H62fKoXFoyUco0gIc%2F0i8nxm9Vu43lt35Uqd3%2FhAvU5HaHjOBkZf2KQsvglSwvA2oEv&X-Amz-Signature=b3179ce83c35ca47f04ee9f238db6c0316ce639801d78df57e6769f9e1ec6dca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665V56GWY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T131656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2R%2BU%2FqJA0Gw5asTxMEUQ3kE31HB07pnE1DZdIyWNBHgIhANJRK91ZtWwlScbJJs9qEVaU6Ronw0tY4D8MWGfm7s%2F%2FKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igziowug%2BRTvuOxrS14q3AOiQ0yJQWz6LwUWUMyUqjUoonsZiH5VZU8SkEMt4XIiIqaCDbSrtJKZAoGQrPaoBPgVOm5C60EGiW%2B0672q7U4urhxZgIk6xCBAyqGPoYqQJ%2Fs1rzniUqAYbfHiJiKgFW9A1n1LG1gJR9dvVPZ6LUEaIApYY%2FHCvoeoyAO8DJnLl5f0Y98L3DvGeUALt7uikldX8gjyII6cVqcWlAqY4iomWB43UPqS83pLWu4WseX0Vy6OMoNTzWHcxOAwXO%2BsflGvura0IR4htNRzsfoziBX1izlxVPRLP%2Be%2BBwW2VS03TuqRJMx9BzI9QsgsyCRd4OPX%2FlLsTqwmNYyOnCEyTPcLTNR75rEkWPHZo0owQAUkmQuwAUQfw2w%2FWwxgrjY0fPQxYHRLXhtnehcc2RY%2BqpXtZVvI8RVk%2BfIWzsFyZUB8hgN9FoAK5Yq%2Be0CGEqWDGjUg0eI%2FT22kePdodtvnSLFCVuWZXWuY9zahZK3DAZneWHfkTkE%2F%2BQbO0MX1zOnwhvBy2avJ4JstgZVkN4zdSQJdLQIHS6nErnBziaEdRNeIAUA7Tg0FfQHF3CtlUkrUWoFgs3tDU3nPJaQ0IspHdaFUa%2FYjj79M4JI3P3BcBVXGmy%2FlPgMvBtJp05p4SzDDj%2FzABjqkAQ2ckLfBPt4VU14ctnnLtZsTQeBbfhQS9UopkwMnuxnfonZVk2w1hOdyBp0qDGMM5gCX4ifRNVbjba33KPRNoYNTSvUYHo97o0sf9Tn4DAyu7Mk5Zw8Af1bZbWuWmGuQlrptJGp7RMEUxNy1tCWaTdQx2H62fKoXFoyUco0gIc%2F0i8nxm9Vu43lt35Uqd3%2FhAvU5HaHjOBkZf2KQsvglSwvA2oEv&X-Amz-Signature=2cf34d44a756a982c282ce06b1deb543a33dc06aa6289badb4a2d3610ee55060&X-Amz-SignedHeaders=host&x-id=GetObject)
