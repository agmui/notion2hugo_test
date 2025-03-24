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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OM3WGA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDADuw7y1xBfnAR7zs8iyzuxfHKZibq0GxJ%2F1h7s%2FTSuAIhAP%2BNCZdOEHcA1ue4BMdBs0GCnQ%2BBwCVB82NDX%2FiMSbl4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybuh1Ql5T2q5NLfTkq3AMhsdxHFUe5XziFYccyWQ3J6L8BlHmFeslgKjG%2BKCKWH5KpMctXZF7TadOty1fYelhLyyXUlQlbAWeahokyZjxetSEcarY0iESD2sL2IUtw2Qz1LSzCRFjOG6wk%2BH94TEDa%2BxkaZNqON7uW986eAOV7gFrQhVBRW13g2ZPj%2FtZzEr2Gz%2FPhpvg%2BRluzjS8VtfWe915OSsG3nQhYyPxAR%2FOFlrbpm9EJuNo620d%2BGBhJLq4Kuo0za3dIqG7WvNjvWquzUbxrOMvbor5Bgg%2F1U3eYWP3SlvHRKgstFfGC9BEoOFBkbWy0MTLanrAIWi0GPtq4w8oShkZKSGUGvh1W8TGSzuzpZiyd03vuoKOudvPHrdVcYX%2FYkgNCtQ%2B%2FrRxiXRZOX5BXIqaR4xKesFsCVK5gneHkT0F6rxhaGxCraESxg%2BjYLdOOtm2xuNllDcYMHQ5zac9n7PcNTzau6bXbfAQd7tBjvyWYDkWub2V8bvdxwbmaCqSuBbSyKkTmsjG0X2mHJqxQGZDkUo4h%2B9vqofO4qJwV3ZiB1DzLnuwQLfXrleAghFySwPSoiQpYhhyJpQ2RTfAK9Gt2oIKPUNJa3qKyskogxl%2BqUaqq33ZXn2OIFVbC%2BhWIiJ4lwFjcXTCL8IS%2FBjqkAWvuk0JlwdwDX5rJvNwEGQd3bUslxXfDQmqXyDZgLuTi9ndsb7bwVtj45SmP8K8qpKaAPYQEia0WLDUkfbKG%2FQBDN82HRFFt63QOyjKQKLh5KyOjYdcDG6ZCJjKvAIEjMgksN0hFGrEpmApu3eaJRSgeTgM55Smfv5WPcGGNBRcYH3pJsKO7BDKT7wxGTwAszG9WAphnxirUtwb9RyjP9nAm2deD&X-Amz-Signature=100ab1ad79e5476de86319a17f9820b88fc542409e5fbb23628dae6c725ac383&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OM3WGA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDADuw7y1xBfnAR7zs8iyzuxfHKZibq0GxJ%2F1h7s%2FTSuAIhAP%2BNCZdOEHcA1ue4BMdBs0GCnQ%2BBwCVB82NDX%2FiMSbl4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybuh1Ql5T2q5NLfTkq3AMhsdxHFUe5XziFYccyWQ3J6L8BlHmFeslgKjG%2BKCKWH5KpMctXZF7TadOty1fYelhLyyXUlQlbAWeahokyZjxetSEcarY0iESD2sL2IUtw2Qz1LSzCRFjOG6wk%2BH94TEDa%2BxkaZNqON7uW986eAOV7gFrQhVBRW13g2ZPj%2FtZzEr2Gz%2FPhpvg%2BRluzjS8VtfWe915OSsG3nQhYyPxAR%2FOFlrbpm9EJuNo620d%2BGBhJLq4Kuo0za3dIqG7WvNjvWquzUbxrOMvbor5Bgg%2F1U3eYWP3SlvHRKgstFfGC9BEoOFBkbWy0MTLanrAIWi0GPtq4w8oShkZKSGUGvh1W8TGSzuzpZiyd03vuoKOudvPHrdVcYX%2FYkgNCtQ%2B%2FrRxiXRZOX5BXIqaR4xKesFsCVK5gneHkT0F6rxhaGxCraESxg%2BjYLdOOtm2xuNllDcYMHQ5zac9n7PcNTzau6bXbfAQd7tBjvyWYDkWub2V8bvdxwbmaCqSuBbSyKkTmsjG0X2mHJqxQGZDkUo4h%2B9vqofO4qJwV3ZiB1DzLnuwQLfXrleAghFySwPSoiQpYhhyJpQ2RTfAK9Gt2oIKPUNJa3qKyskogxl%2BqUaqq33ZXn2OIFVbC%2BhWIiJ4lwFjcXTCL8IS%2FBjqkAWvuk0JlwdwDX5rJvNwEGQd3bUslxXfDQmqXyDZgLuTi9ndsb7bwVtj45SmP8K8qpKaAPYQEia0WLDUkfbKG%2FQBDN82HRFFt63QOyjKQKLh5KyOjYdcDG6ZCJjKvAIEjMgksN0hFGrEpmApu3eaJRSgeTgM55Smfv5WPcGGNBRcYH3pJsKO7BDKT7wxGTwAszG9WAphnxirUtwb9RyjP9nAm2deD&X-Amz-Signature=6e22299b26e3d2d0663b6c4223d5a12694246bd658f9d2a07c37eb15d1374158&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OM3WGA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDADuw7y1xBfnAR7zs8iyzuxfHKZibq0GxJ%2F1h7s%2FTSuAIhAP%2BNCZdOEHcA1ue4BMdBs0GCnQ%2BBwCVB82NDX%2FiMSbl4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybuh1Ql5T2q5NLfTkq3AMhsdxHFUe5XziFYccyWQ3J6L8BlHmFeslgKjG%2BKCKWH5KpMctXZF7TadOty1fYelhLyyXUlQlbAWeahokyZjxetSEcarY0iESD2sL2IUtw2Qz1LSzCRFjOG6wk%2BH94TEDa%2BxkaZNqON7uW986eAOV7gFrQhVBRW13g2ZPj%2FtZzEr2Gz%2FPhpvg%2BRluzjS8VtfWe915OSsG3nQhYyPxAR%2FOFlrbpm9EJuNo620d%2BGBhJLq4Kuo0za3dIqG7WvNjvWquzUbxrOMvbor5Bgg%2F1U3eYWP3SlvHRKgstFfGC9BEoOFBkbWy0MTLanrAIWi0GPtq4w8oShkZKSGUGvh1W8TGSzuzpZiyd03vuoKOudvPHrdVcYX%2FYkgNCtQ%2B%2FrRxiXRZOX5BXIqaR4xKesFsCVK5gneHkT0F6rxhaGxCraESxg%2BjYLdOOtm2xuNllDcYMHQ5zac9n7PcNTzau6bXbfAQd7tBjvyWYDkWub2V8bvdxwbmaCqSuBbSyKkTmsjG0X2mHJqxQGZDkUo4h%2B9vqofO4qJwV3ZiB1DzLnuwQLfXrleAghFySwPSoiQpYhhyJpQ2RTfAK9Gt2oIKPUNJa3qKyskogxl%2BqUaqq33ZXn2OIFVbC%2BhWIiJ4lwFjcXTCL8IS%2FBjqkAWvuk0JlwdwDX5rJvNwEGQd3bUslxXfDQmqXyDZgLuTi9ndsb7bwVtj45SmP8K8qpKaAPYQEia0WLDUkfbKG%2FQBDN82HRFFt63QOyjKQKLh5KyOjYdcDG6ZCJjKvAIEjMgksN0hFGrEpmApu3eaJRSgeTgM55Smfv5WPcGGNBRcYH3pJsKO7BDKT7wxGTwAszG9WAphnxirUtwb9RyjP9nAm2deD&X-Amz-Signature=b73bb30f623335be6f1d7f32b8498d61a669a0ae1a8fa31aa56040a7753edd06&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OM3WGA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDADuw7y1xBfnAR7zs8iyzuxfHKZibq0GxJ%2F1h7s%2FTSuAIhAP%2BNCZdOEHcA1ue4BMdBs0GCnQ%2BBwCVB82NDX%2FiMSbl4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybuh1Ql5T2q5NLfTkq3AMhsdxHFUe5XziFYccyWQ3J6L8BlHmFeslgKjG%2BKCKWH5KpMctXZF7TadOty1fYelhLyyXUlQlbAWeahokyZjxetSEcarY0iESD2sL2IUtw2Qz1LSzCRFjOG6wk%2BH94TEDa%2BxkaZNqON7uW986eAOV7gFrQhVBRW13g2ZPj%2FtZzEr2Gz%2FPhpvg%2BRluzjS8VtfWe915OSsG3nQhYyPxAR%2FOFlrbpm9EJuNo620d%2BGBhJLq4Kuo0za3dIqG7WvNjvWquzUbxrOMvbor5Bgg%2F1U3eYWP3SlvHRKgstFfGC9BEoOFBkbWy0MTLanrAIWi0GPtq4w8oShkZKSGUGvh1W8TGSzuzpZiyd03vuoKOudvPHrdVcYX%2FYkgNCtQ%2B%2FrRxiXRZOX5BXIqaR4xKesFsCVK5gneHkT0F6rxhaGxCraESxg%2BjYLdOOtm2xuNllDcYMHQ5zac9n7PcNTzau6bXbfAQd7tBjvyWYDkWub2V8bvdxwbmaCqSuBbSyKkTmsjG0X2mHJqxQGZDkUo4h%2B9vqofO4qJwV3ZiB1DzLnuwQLfXrleAghFySwPSoiQpYhhyJpQ2RTfAK9Gt2oIKPUNJa3qKyskogxl%2BqUaqq33ZXn2OIFVbC%2BhWIiJ4lwFjcXTCL8IS%2FBjqkAWvuk0JlwdwDX5rJvNwEGQd3bUslxXfDQmqXyDZgLuTi9ndsb7bwVtj45SmP8K8qpKaAPYQEia0WLDUkfbKG%2FQBDN82HRFFt63QOyjKQKLh5KyOjYdcDG6ZCJjKvAIEjMgksN0hFGrEpmApu3eaJRSgeTgM55Smfv5WPcGGNBRcYH3pJsKO7BDKT7wxGTwAszG9WAphnxirUtwb9RyjP9nAm2deD&X-Amz-Signature=26aea1316afd93967deed121ae1c6cafca91748a72c5b432d61a34ca98647c65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OM3WGA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDADuw7y1xBfnAR7zs8iyzuxfHKZibq0GxJ%2F1h7s%2FTSuAIhAP%2BNCZdOEHcA1ue4BMdBs0GCnQ%2BBwCVB82NDX%2FiMSbl4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybuh1Ql5T2q5NLfTkq3AMhsdxHFUe5XziFYccyWQ3J6L8BlHmFeslgKjG%2BKCKWH5KpMctXZF7TadOty1fYelhLyyXUlQlbAWeahokyZjxetSEcarY0iESD2sL2IUtw2Qz1LSzCRFjOG6wk%2BH94TEDa%2BxkaZNqON7uW986eAOV7gFrQhVBRW13g2ZPj%2FtZzEr2Gz%2FPhpvg%2BRluzjS8VtfWe915OSsG3nQhYyPxAR%2FOFlrbpm9EJuNo620d%2BGBhJLq4Kuo0za3dIqG7WvNjvWquzUbxrOMvbor5Bgg%2F1U3eYWP3SlvHRKgstFfGC9BEoOFBkbWy0MTLanrAIWi0GPtq4w8oShkZKSGUGvh1W8TGSzuzpZiyd03vuoKOudvPHrdVcYX%2FYkgNCtQ%2B%2FrRxiXRZOX5BXIqaR4xKesFsCVK5gneHkT0F6rxhaGxCraESxg%2BjYLdOOtm2xuNllDcYMHQ5zac9n7PcNTzau6bXbfAQd7tBjvyWYDkWub2V8bvdxwbmaCqSuBbSyKkTmsjG0X2mHJqxQGZDkUo4h%2B9vqofO4qJwV3ZiB1DzLnuwQLfXrleAghFySwPSoiQpYhhyJpQ2RTfAK9Gt2oIKPUNJa3qKyskogxl%2BqUaqq33ZXn2OIFVbC%2BhWIiJ4lwFjcXTCL8IS%2FBjqkAWvuk0JlwdwDX5rJvNwEGQd3bUslxXfDQmqXyDZgLuTi9ndsb7bwVtj45SmP8K8qpKaAPYQEia0WLDUkfbKG%2FQBDN82HRFFt63QOyjKQKLh5KyOjYdcDG6ZCJjKvAIEjMgksN0hFGrEpmApu3eaJRSgeTgM55Smfv5WPcGGNBRcYH3pJsKO7BDKT7wxGTwAszG9WAphnxirUtwb9RyjP9nAm2deD&X-Amz-Signature=6b0257c7110c496393b53a70f4a852c15399da628dea4040daab0ad62ecb28a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673OM3WGA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDADuw7y1xBfnAR7zs8iyzuxfHKZibq0GxJ%2F1h7s%2FTSuAIhAP%2BNCZdOEHcA1ue4BMdBs0GCnQ%2BBwCVB82NDX%2FiMSbl4KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybuh1Ql5T2q5NLfTkq3AMhsdxHFUe5XziFYccyWQ3J6L8BlHmFeslgKjG%2BKCKWH5KpMctXZF7TadOty1fYelhLyyXUlQlbAWeahokyZjxetSEcarY0iESD2sL2IUtw2Qz1LSzCRFjOG6wk%2BH94TEDa%2BxkaZNqON7uW986eAOV7gFrQhVBRW13g2ZPj%2FtZzEr2Gz%2FPhpvg%2BRluzjS8VtfWe915OSsG3nQhYyPxAR%2FOFlrbpm9EJuNo620d%2BGBhJLq4Kuo0za3dIqG7WvNjvWquzUbxrOMvbor5Bgg%2F1U3eYWP3SlvHRKgstFfGC9BEoOFBkbWy0MTLanrAIWi0GPtq4w8oShkZKSGUGvh1W8TGSzuzpZiyd03vuoKOudvPHrdVcYX%2FYkgNCtQ%2B%2FrRxiXRZOX5BXIqaR4xKesFsCVK5gneHkT0F6rxhaGxCraESxg%2BjYLdOOtm2xuNllDcYMHQ5zac9n7PcNTzau6bXbfAQd7tBjvyWYDkWub2V8bvdxwbmaCqSuBbSyKkTmsjG0X2mHJqxQGZDkUo4h%2B9vqofO4qJwV3ZiB1DzLnuwQLfXrleAghFySwPSoiQpYhhyJpQ2RTfAK9Gt2oIKPUNJa3qKyskogxl%2BqUaqq33ZXn2OIFVbC%2BhWIiJ4lwFjcXTCL8IS%2FBjqkAWvuk0JlwdwDX5rJvNwEGQd3bUslxXfDQmqXyDZgLuTi9ndsb7bwVtj45SmP8K8qpKaAPYQEia0WLDUkfbKG%2FQBDN82HRFFt63QOyjKQKLh5KyOjYdcDG6ZCJjKvAIEjMgksN0hFGrEpmApu3eaJRSgeTgM55Smfv5WPcGGNBRcYH3pJsKO7BDKT7wxGTwAszG9WAphnxirUtwb9RyjP9nAm2deD&X-Amz-Signature=96d0ebe42a44e98891b8fa453dacff6007c71b8b0b86241493f8af401a2205e5&X-Amz-SignedHeaders=host&x-id=GetObject)
