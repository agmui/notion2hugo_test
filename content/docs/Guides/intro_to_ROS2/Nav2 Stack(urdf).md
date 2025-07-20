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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGIWYQM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7pCkSPj84042PO17L9GenAjkhLD1TbAdnIDdmd4AyxQIgPwlZ%2F0JIcdKaFeaID8tto%2Bb6HX6L%2BMaIbNrA59xAzXwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEU%2BwvpTqyroB6%2BwSrcA3naVY5mOgyILEmX6RXlDs4OPx86hxQia5RxoVLfZkNMCY3btsEhD6F77pwTZKhdqAH1PWFr7c88sV1z5Pnh%2BsmFw%2Bbekaprv9x4mEtcMebOcVDBfr3YVEWK4as9uEmgcEcjQlXmbVUBjDUV%2BXxVp5AeipLiW%2F1Fnqu66%2B10Hb7rKw5bDXS2Qe76ubGBhms0UznXjKA8fYAW8bSk%2Bf7QnIc71Qm6NXLpMpHhSgU%2FPwRWd%2BF76077GIJMxIk3YH%2FN%2B4AEafycyQctsA2Blt8ySCOT%2Fw9pIwFbm7maz%2FUCDoA41z6pxP5ucqJBycutZstv5%2Fr2yTYmaYWRDd2IN0bnul7O2OonbL8W9SA0%2F7OWppQdrcd1m4ChDDixwSeKe5uyV%2BoaPQXoZwRb5SmDZdAmG1yLKun4Rh5b0kLcNnnlGCYnqDo8FIKYgJtbmtJ1612rh%2F6c3PSumUoEI7B%2BpAlh0XofAf%2F6rDXEWMINNQopKFxvhbMJUBHfQG%2FiMAsdho%2BzW0n%2BK4hkQImqHLqsHOevm2k%2FIT4UkjQCxZ43Hat5JWaK9K0sYqu9eg1bdz3jBOHhbht1e0Y0nCD3M8S%2BfT7JAyMCL289iEkDLrTsqQ9GYt9Pdz0gm%2FfbjB9QkcDDMNGZ8cMGOqUBB1ol9aBVJvm%2BxIskaVWRmTm9it1q3qYSEgN4DDaGPJRlCUm6xFi7PrgAyYmMBjB%2BGXURG0rMUKhsgAE7h4RCHWUIxN38ksDOcfL6HIDy45%2FgFx6VVnn3UcTtfgWU%2F1u4Zi7Pcj3b5ut3gaZGX511IbalXAlwi%2BZa7ziubWcEEQnHkvoqUfolDeFHOBUMM9UrI7cpkSH%2F08kMEc%2B%2BTmIEzXMQs48R&X-Amz-Signature=ffbcc8fb26e8372f656e63ca3d3452ab593be54972d078ee40de4d114386b2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGIWYQM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7pCkSPj84042PO17L9GenAjkhLD1TbAdnIDdmd4AyxQIgPwlZ%2F0JIcdKaFeaID8tto%2Bb6HX6L%2BMaIbNrA59xAzXwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEU%2BwvpTqyroB6%2BwSrcA3naVY5mOgyILEmX6RXlDs4OPx86hxQia5RxoVLfZkNMCY3btsEhD6F77pwTZKhdqAH1PWFr7c88sV1z5Pnh%2BsmFw%2Bbekaprv9x4mEtcMebOcVDBfr3YVEWK4as9uEmgcEcjQlXmbVUBjDUV%2BXxVp5AeipLiW%2F1Fnqu66%2B10Hb7rKw5bDXS2Qe76ubGBhms0UznXjKA8fYAW8bSk%2Bf7QnIc71Qm6NXLpMpHhSgU%2FPwRWd%2BF76077GIJMxIk3YH%2FN%2B4AEafycyQctsA2Blt8ySCOT%2Fw9pIwFbm7maz%2FUCDoA41z6pxP5ucqJBycutZstv5%2Fr2yTYmaYWRDd2IN0bnul7O2OonbL8W9SA0%2F7OWppQdrcd1m4ChDDixwSeKe5uyV%2BoaPQXoZwRb5SmDZdAmG1yLKun4Rh5b0kLcNnnlGCYnqDo8FIKYgJtbmtJ1612rh%2F6c3PSumUoEI7B%2BpAlh0XofAf%2F6rDXEWMINNQopKFxvhbMJUBHfQG%2FiMAsdho%2BzW0n%2BK4hkQImqHLqsHOevm2k%2FIT4UkjQCxZ43Hat5JWaK9K0sYqu9eg1bdz3jBOHhbht1e0Y0nCD3M8S%2BfT7JAyMCL289iEkDLrTsqQ9GYt9Pdz0gm%2FfbjB9QkcDDMNGZ8cMGOqUBB1ol9aBVJvm%2BxIskaVWRmTm9it1q3qYSEgN4DDaGPJRlCUm6xFi7PrgAyYmMBjB%2BGXURG0rMUKhsgAE7h4RCHWUIxN38ksDOcfL6HIDy45%2FgFx6VVnn3UcTtfgWU%2F1u4Zi7Pcj3b5ut3gaZGX511IbalXAlwi%2BZa7ziubWcEEQnHkvoqUfolDeFHOBUMM9UrI7cpkSH%2F08kMEc%2B%2BTmIEzXMQs48R&X-Amz-Signature=7a06379c4a8a88e94b85987d5903347df790d9912c92591bf236be15b34d43c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGIWYQM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7pCkSPj84042PO17L9GenAjkhLD1TbAdnIDdmd4AyxQIgPwlZ%2F0JIcdKaFeaID8tto%2Bb6HX6L%2BMaIbNrA59xAzXwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEU%2BwvpTqyroB6%2BwSrcA3naVY5mOgyILEmX6RXlDs4OPx86hxQia5RxoVLfZkNMCY3btsEhD6F77pwTZKhdqAH1PWFr7c88sV1z5Pnh%2BsmFw%2Bbekaprv9x4mEtcMebOcVDBfr3YVEWK4as9uEmgcEcjQlXmbVUBjDUV%2BXxVp5AeipLiW%2F1Fnqu66%2B10Hb7rKw5bDXS2Qe76ubGBhms0UznXjKA8fYAW8bSk%2Bf7QnIc71Qm6NXLpMpHhSgU%2FPwRWd%2BF76077GIJMxIk3YH%2FN%2B4AEafycyQctsA2Blt8ySCOT%2Fw9pIwFbm7maz%2FUCDoA41z6pxP5ucqJBycutZstv5%2Fr2yTYmaYWRDd2IN0bnul7O2OonbL8W9SA0%2F7OWppQdrcd1m4ChDDixwSeKe5uyV%2BoaPQXoZwRb5SmDZdAmG1yLKun4Rh5b0kLcNnnlGCYnqDo8FIKYgJtbmtJ1612rh%2F6c3PSumUoEI7B%2BpAlh0XofAf%2F6rDXEWMINNQopKFxvhbMJUBHfQG%2FiMAsdho%2BzW0n%2BK4hkQImqHLqsHOevm2k%2FIT4UkjQCxZ43Hat5JWaK9K0sYqu9eg1bdz3jBOHhbht1e0Y0nCD3M8S%2BfT7JAyMCL289iEkDLrTsqQ9GYt9Pdz0gm%2FfbjB9QkcDDMNGZ8cMGOqUBB1ol9aBVJvm%2BxIskaVWRmTm9it1q3qYSEgN4DDaGPJRlCUm6xFi7PrgAyYmMBjB%2BGXURG0rMUKhsgAE7h4RCHWUIxN38ksDOcfL6HIDy45%2FgFx6VVnn3UcTtfgWU%2F1u4Zi7Pcj3b5ut3gaZGX511IbalXAlwi%2BZa7ziubWcEEQnHkvoqUfolDeFHOBUMM9UrI7cpkSH%2F08kMEc%2B%2BTmIEzXMQs48R&X-Amz-Signature=e11c96ca811f7cc58c3f52105fbbaeb4e6dc40d89e11b8ff6c12e716be19d924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGIWYQM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7pCkSPj84042PO17L9GenAjkhLD1TbAdnIDdmd4AyxQIgPwlZ%2F0JIcdKaFeaID8tto%2Bb6HX6L%2BMaIbNrA59xAzXwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEU%2BwvpTqyroB6%2BwSrcA3naVY5mOgyILEmX6RXlDs4OPx86hxQia5RxoVLfZkNMCY3btsEhD6F77pwTZKhdqAH1PWFr7c88sV1z5Pnh%2BsmFw%2Bbekaprv9x4mEtcMebOcVDBfr3YVEWK4as9uEmgcEcjQlXmbVUBjDUV%2BXxVp5AeipLiW%2F1Fnqu66%2B10Hb7rKw5bDXS2Qe76ubGBhms0UznXjKA8fYAW8bSk%2Bf7QnIc71Qm6NXLpMpHhSgU%2FPwRWd%2BF76077GIJMxIk3YH%2FN%2B4AEafycyQctsA2Blt8ySCOT%2Fw9pIwFbm7maz%2FUCDoA41z6pxP5ucqJBycutZstv5%2Fr2yTYmaYWRDd2IN0bnul7O2OonbL8W9SA0%2F7OWppQdrcd1m4ChDDixwSeKe5uyV%2BoaPQXoZwRb5SmDZdAmG1yLKun4Rh5b0kLcNnnlGCYnqDo8FIKYgJtbmtJ1612rh%2F6c3PSumUoEI7B%2BpAlh0XofAf%2F6rDXEWMINNQopKFxvhbMJUBHfQG%2FiMAsdho%2BzW0n%2BK4hkQImqHLqsHOevm2k%2FIT4UkjQCxZ43Hat5JWaK9K0sYqu9eg1bdz3jBOHhbht1e0Y0nCD3M8S%2BfT7JAyMCL289iEkDLrTsqQ9GYt9Pdz0gm%2FfbjB9QkcDDMNGZ8cMGOqUBB1ol9aBVJvm%2BxIskaVWRmTm9it1q3qYSEgN4DDaGPJRlCUm6xFi7PrgAyYmMBjB%2BGXURG0rMUKhsgAE7h4RCHWUIxN38ksDOcfL6HIDy45%2FgFx6VVnn3UcTtfgWU%2F1u4Zi7Pcj3b5ut3gaZGX511IbalXAlwi%2BZa7ziubWcEEQnHkvoqUfolDeFHOBUMM9UrI7cpkSH%2F08kMEc%2B%2BTmIEzXMQs48R&X-Amz-Signature=edc5b62c7781cbaa8820f22ae6664ddf606b20f0e49fb32828f7811c38896b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGIWYQM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7pCkSPj84042PO17L9GenAjkhLD1TbAdnIDdmd4AyxQIgPwlZ%2F0JIcdKaFeaID8tto%2Bb6HX6L%2BMaIbNrA59xAzXwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEU%2BwvpTqyroB6%2BwSrcA3naVY5mOgyILEmX6RXlDs4OPx86hxQia5RxoVLfZkNMCY3btsEhD6F77pwTZKhdqAH1PWFr7c88sV1z5Pnh%2BsmFw%2Bbekaprv9x4mEtcMebOcVDBfr3YVEWK4as9uEmgcEcjQlXmbVUBjDUV%2BXxVp5AeipLiW%2F1Fnqu66%2B10Hb7rKw5bDXS2Qe76ubGBhms0UznXjKA8fYAW8bSk%2Bf7QnIc71Qm6NXLpMpHhSgU%2FPwRWd%2BF76077GIJMxIk3YH%2FN%2B4AEafycyQctsA2Blt8ySCOT%2Fw9pIwFbm7maz%2FUCDoA41z6pxP5ucqJBycutZstv5%2Fr2yTYmaYWRDd2IN0bnul7O2OonbL8W9SA0%2F7OWppQdrcd1m4ChDDixwSeKe5uyV%2BoaPQXoZwRb5SmDZdAmG1yLKun4Rh5b0kLcNnnlGCYnqDo8FIKYgJtbmtJ1612rh%2F6c3PSumUoEI7B%2BpAlh0XofAf%2F6rDXEWMINNQopKFxvhbMJUBHfQG%2FiMAsdho%2BzW0n%2BK4hkQImqHLqsHOevm2k%2FIT4UkjQCxZ43Hat5JWaK9K0sYqu9eg1bdz3jBOHhbht1e0Y0nCD3M8S%2BfT7JAyMCL289iEkDLrTsqQ9GYt9Pdz0gm%2FfbjB9QkcDDMNGZ8cMGOqUBB1ol9aBVJvm%2BxIskaVWRmTm9it1q3qYSEgN4DDaGPJRlCUm6xFi7PrgAyYmMBjB%2BGXURG0rMUKhsgAE7h4RCHWUIxN38ksDOcfL6HIDy45%2FgFx6VVnn3UcTtfgWU%2F1u4Zi7Pcj3b5ut3gaZGX511IbalXAlwi%2BZa7ziubWcEEQnHkvoqUfolDeFHOBUMM9UrI7cpkSH%2F08kMEc%2B%2BTmIEzXMQs48R&X-Amz-Signature=995450c658cef45159d6c90b93d39b639242cb9fcf51fbe3bc56e81c085d4482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGIWYQM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7pCkSPj84042PO17L9GenAjkhLD1TbAdnIDdmd4AyxQIgPwlZ%2F0JIcdKaFeaID8tto%2Bb6HX6L%2BMaIbNrA59xAzXwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEU%2BwvpTqyroB6%2BwSrcA3naVY5mOgyILEmX6RXlDs4OPx86hxQia5RxoVLfZkNMCY3btsEhD6F77pwTZKhdqAH1PWFr7c88sV1z5Pnh%2BsmFw%2Bbekaprv9x4mEtcMebOcVDBfr3YVEWK4as9uEmgcEcjQlXmbVUBjDUV%2BXxVp5AeipLiW%2F1Fnqu66%2B10Hb7rKw5bDXS2Qe76ubGBhms0UznXjKA8fYAW8bSk%2Bf7QnIc71Qm6NXLpMpHhSgU%2FPwRWd%2BF76077GIJMxIk3YH%2FN%2B4AEafycyQctsA2Blt8ySCOT%2Fw9pIwFbm7maz%2FUCDoA41z6pxP5ucqJBycutZstv5%2Fr2yTYmaYWRDd2IN0bnul7O2OonbL8W9SA0%2F7OWppQdrcd1m4ChDDixwSeKe5uyV%2BoaPQXoZwRb5SmDZdAmG1yLKun4Rh5b0kLcNnnlGCYnqDo8FIKYgJtbmtJ1612rh%2F6c3PSumUoEI7B%2BpAlh0XofAf%2F6rDXEWMINNQopKFxvhbMJUBHfQG%2FiMAsdho%2BzW0n%2BK4hkQImqHLqsHOevm2k%2FIT4UkjQCxZ43Hat5JWaK9K0sYqu9eg1bdz3jBOHhbht1e0Y0nCD3M8S%2BfT7JAyMCL289iEkDLrTsqQ9GYt9Pdz0gm%2FfbjB9QkcDDMNGZ8cMGOqUBB1ol9aBVJvm%2BxIskaVWRmTm9it1q3qYSEgN4DDaGPJRlCUm6xFi7PrgAyYmMBjB%2BGXURG0rMUKhsgAE7h4RCHWUIxN38ksDOcfL6HIDy45%2FgFx6VVnn3UcTtfgWU%2F1u4Zi7Pcj3b5ut3gaZGX511IbalXAlwi%2BZa7ziubWcEEQnHkvoqUfolDeFHOBUMM9UrI7cpkSH%2F08kMEc%2B%2BTmIEzXMQs48R&X-Amz-Signature=04706db7cd690b1766bfc19ce49cec600e94f415def8de6f11fae8ae1924b440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
