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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV2D5AQD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDA7jaRARKM9N065AHtZih%2FzLMBsXZi67u9pC3pTpL7hgIgKBRWrhTy%2BhYElPb8gRE%2FSOZ47Jk3nul%2Bccfx3iMm%2FQQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJyp2J3r0%2FYfXzSSrcA1u6%2Bi1YIb1FRtAzgW9WqQw5UR9guF31z3sk%2BzwUQwG%2FM1ADPK02yVO96NRrfr8i9x4KNw6WQbBQbrAlu%2BMaIpAFleWqUY5M0m0Qu8ksraKKOrkvOuFbHSFlRq99Wq0xXiBKnjA6oBZk42YNdP6%2B8dPpR%2BWg%2BowLGT4c%2FTEV7QAfdwZmFYuellwbGZpYlJV0iRIqa5JD3LiEKsKW0%2BOp8ZbqLq5kWBJBw5WBgFGX3Bi1QBceHh3o%2FNE5WFiVpsMn0JZhgODnpHkuDcnoM0f5T%2Bx1dVH%2FiAf%2BQqOzG%2ByT86m6CULLs1A83CZhxdyZAOXg1fOnB%2BZjkqkNjJTqHTuLLK2nG2QHWI7qadd4pvJVzhttKhg7oCu6El9EMZx1AdZJKuFKRZZb7%2BSyZvayiIvKAI0Ihownss9h%2Buymd9b3PlPz2lVXzshMTNtYgoooKDPLzS%2FHzVd%2BFWsO50%2FVtXBsh841zZI4Az6HjVQIWJdZOGzAY%2Fdfmk%2BWxQRVETqMuh%2BYeWayyOljEqqS3twGWceD83BYSIkXcKgSV0rBqSiG5DFk05z7oknC3GKZEA4s1B%2BatN%2BREEcTu4rJJqddwjrJ9H%2BuKwE6%2BZwXlAQDSrlJl3o8wQVH%2BC%2B8Bh%2BrKh5TMNbz3b8GOqUBD6OoNYmOrEc%2F5d27AjusCcsQpfqYt7qJFWYaU0DlP7tPKrSRF26wLJKAVeDVOkl1Ix0lxPr1SnJPYCOaKXwJvKf9xOPERUhtFmrOuPb2MCPPzC4Bhu85VnaGRwPAfTNWqqBsjQpGjnuPz4L4hjFKE8d644DcLa06zHxMkKlw56DsDqfiSYGqwE3wW%2B8lapv6Vm6B9gmvsduqzNDpPEjkpZH5KaSF&X-Amz-Signature=acb9204b08a6a89b6d879047a44b5ac7215346d53d7307a7d7ebe8df96f2e5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV2D5AQD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDA7jaRARKM9N065AHtZih%2FzLMBsXZi67u9pC3pTpL7hgIgKBRWrhTy%2BhYElPb8gRE%2FSOZ47Jk3nul%2Bccfx3iMm%2FQQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJyp2J3r0%2FYfXzSSrcA1u6%2Bi1YIb1FRtAzgW9WqQw5UR9guF31z3sk%2BzwUQwG%2FM1ADPK02yVO96NRrfr8i9x4KNw6WQbBQbrAlu%2BMaIpAFleWqUY5M0m0Qu8ksraKKOrkvOuFbHSFlRq99Wq0xXiBKnjA6oBZk42YNdP6%2B8dPpR%2BWg%2BowLGT4c%2FTEV7QAfdwZmFYuellwbGZpYlJV0iRIqa5JD3LiEKsKW0%2BOp8ZbqLq5kWBJBw5WBgFGX3Bi1QBceHh3o%2FNE5WFiVpsMn0JZhgODnpHkuDcnoM0f5T%2Bx1dVH%2FiAf%2BQqOzG%2ByT86m6CULLs1A83CZhxdyZAOXg1fOnB%2BZjkqkNjJTqHTuLLK2nG2QHWI7qadd4pvJVzhttKhg7oCu6El9EMZx1AdZJKuFKRZZb7%2BSyZvayiIvKAI0Ihownss9h%2Buymd9b3PlPz2lVXzshMTNtYgoooKDPLzS%2FHzVd%2BFWsO50%2FVtXBsh841zZI4Az6HjVQIWJdZOGzAY%2Fdfmk%2BWxQRVETqMuh%2BYeWayyOljEqqS3twGWceD83BYSIkXcKgSV0rBqSiG5DFk05z7oknC3GKZEA4s1B%2BatN%2BREEcTu4rJJqddwjrJ9H%2BuKwE6%2BZwXlAQDSrlJl3o8wQVH%2BC%2B8Bh%2BrKh5TMNbz3b8GOqUBD6OoNYmOrEc%2F5d27AjusCcsQpfqYt7qJFWYaU0DlP7tPKrSRF26wLJKAVeDVOkl1Ix0lxPr1SnJPYCOaKXwJvKf9xOPERUhtFmrOuPb2MCPPzC4Bhu85VnaGRwPAfTNWqqBsjQpGjnuPz4L4hjFKE8d644DcLa06zHxMkKlw56DsDqfiSYGqwE3wW%2B8lapv6Vm6B9gmvsduqzNDpPEjkpZH5KaSF&X-Amz-Signature=04374f19ec3739ecfd1c1115295ee5b1101122eedfee8f10825c27d13e1b2543&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV2D5AQD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDA7jaRARKM9N065AHtZih%2FzLMBsXZi67u9pC3pTpL7hgIgKBRWrhTy%2BhYElPb8gRE%2FSOZ47Jk3nul%2Bccfx3iMm%2FQQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJyp2J3r0%2FYfXzSSrcA1u6%2Bi1YIb1FRtAzgW9WqQw5UR9guF31z3sk%2BzwUQwG%2FM1ADPK02yVO96NRrfr8i9x4KNw6WQbBQbrAlu%2BMaIpAFleWqUY5M0m0Qu8ksraKKOrkvOuFbHSFlRq99Wq0xXiBKnjA6oBZk42YNdP6%2B8dPpR%2BWg%2BowLGT4c%2FTEV7QAfdwZmFYuellwbGZpYlJV0iRIqa5JD3LiEKsKW0%2BOp8ZbqLq5kWBJBw5WBgFGX3Bi1QBceHh3o%2FNE5WFiVpsMn0JZhgODnpHkuDcnoM0f5T%2Bx1dVH%2FiAf%2BQqOzG%2ByT86m6CULLs1A83CZhxdyZAOXg1fOnB%2BZjkqkNjJTqHTuLLK2nG2QHWI7qadd4pvJVzhttKhg7oCu6El9EMZx1AdZJKuFKRZZb7%2BSyZvayiIvKAI0Ihownss9h%2Buymd9b3PlPz2lVXzshMTNtYgoooKDPLzS%2FHzVd%2BFWsO50%2FVtXBsh841zZI4Az6HjVQIWJdZOGzAY%2Fdfmk%2BWxQRVETqMuh%2BYeWayyOljEqqS3twGWceD83BYSIkXcKgSV0rBqSiG5DFk05z7oknC3GKZEA4s1B%2BatN%2BREEcTu4rJJqddwjrJ9H%2BuKwE6%2BZwXlAQDSrlJl3o8wQVH%2BC%2B8Bh%2BrKh5TMNbz3b8GOqUBD6OoNYmOrEc%2F5d27AjusCcsQpfqYt7qJFWYaU0DlP7tPKrSRF26wLJKAVeDVOkl1Ix0lxPr1SnJPYCOaKXwJvKf9xOPERUhtFmrOuPb2MCPPzC4Bhu85VnaGRwPAfTNWqqBsjQpGjnuPz4L4hjFKE8d644DcLa06zHxMkKlw56DsDqfiSYGqwE3wW%2B8lapv6Vm6B9gmvsduqzNDpPEjkpZH5KaSF&X-Amz-Signature=ea6353b6a96bf371339cbf6777d41b5607955c8ca0644038f50b7f22537860ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV2D5AQD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDA7jaRARKM9N065AHtZih%2FzLMBsXZi67u9pC3pTpL7hgIgKBRWrhTy%2BhYElPb8gRE%2FSOZ47Jk3nul%2Bccfx3iMm%2FQQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJyp2J3r0%2FYfXzSSrcA1u6%2Bi1YIb1FRtAzgW9WqQw5UR9guF31z3sk%2BzwUQwG%2FM1ADPK02yVO96NRrfr8i9x4KNw6WQbBQbrAlu%2BMaIpAFleWqUY5M0m0Qu8ksraKKOrkvOuFbHSFlRq99Wq0xXiBKnjA6oBZk42YNdP6%2B8dPpR%2BWg%2BowLGT4c%2FTEV7QAfdwZmFYuellwbGZpYlJV0iRIqa5JD3LiEKsKW0%2BOp8ZbqLq5kWBJBw5WBgFGX3Bi1QBceHh3o%2FNE5WFiVpsMn0JZhgODnpHkuDcnoM0f5T%2Bx1dVH%2FiAf%2BQqOzG%2ByT86m6CULLs1A83CZhxdyZAOXg1fOnB%2BZjkqkNjJTqHTuLLK2nG2QHWI7qadd4pvJVzhttKhg7oCu6El9EMZx1AdZJKuFKRZZb7%2BSyZvayiIvKAI0Ihownss9h%2Buymd9b3PlPz2lVXzshMTNtYgoooKDPLzS%2FHzVd%2BFWsO50%2FVtXBsh841zZI4Az6HjVQIWJdZOGzAY%2Fdfmk%2BWxQRVETqMuh%2BYeWayyOljEqqS3twGWceD83BYSIkXcKgSV0rBqSiG5DFk05z7oknC3GKZEA4s1B%2BatN%2BREEcTu4rJJqddwjrJ9H%2BuKwE6%2BZwXlAQDSrlJl3o8wQVH%2BC%2B8Bh%2BrKh5TMNbz3b8GOqUBD6OoNYmOrEc%2F5d27AjusCcsQpfqYt7qJFWYaU0DlP7tPKrSRF26wLJKAVeDVOkl1Ix0lxPr1SnJPYCOaKXwJvKf9xOPERUhtFmrOuPb2MCPPzC4Bhu85VnaGRwPAfTNWqqBsjQpGjnuPz4L4hjFKE8d644DcLa06zHxMkKlw56DsDqfiSYGqwE3wW%2B8lapv6Vm6B9gmvsduqzNDpPEjkpZH5KaSF&X-Amz-Signature=6d163bcab9d053204b82a3aa13728b9cedd875a1ba92b3391ed7daa4205a106b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV2D5AQD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDA7jaRARKM9N065AHtZih%2FzLMBsXZi67u9pC3pTpL7hgIgKBRWrhTy%2BhYElPb8gRE%2FSOZ47Jk3nul%2Bccfx3iMm%2FQQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJyp2J3r0%2FYfXzSSrcA1u6%2Bi1YIb1FRtAzgW9WqQw5UR9guF31z3sk%2BzwUQwG%2FM1ADPK02yVO96NRrfr8i9x4KNw6WQbBQbrAlu%2BMaIpAFleWqUY5M0m0Qu8ksraKKOrkvOuFbHSFlRq99Wq0xXiBKnjA6oBZk42YNdP6%2B8dPpR%2BWg%2BowLGT4c%2FTEV7QAfdwZmFYuellwbGZpYlJV0iRIqa5JD3LiEKsKW0%2BOp8ZbqLq5kWBJBw5WBgFGX3Bi1QBceHh3o%2FNE5WFiVpsMn0JZhgODnpHkuDcnoM0f5T%2Bx1dVH%2FiAf%2BQqOzG%2ByT86m6CULLs1A83CZhxdyZAOXg1fOnB%2BZjkqkNjJTqHTuLLK2nG2QHWI7qadd4pvJVzhttKhg7oCu6El9EMZx1AdZJKuFKRZZb7%2BSyZvayiIvKAI0Ihownss9h%2Buymd9b3PlPz2lVXzshMTNtYgoooKDPLzS%2FHzVd%2BFWsO50%2FVtXBsh841zZI4Az6HjVQIWJdZOGzAY%2Fdfmk%2BWxQRVETqMuh%2BYeWayyOljEqqS3twGWceD83BYSIkXcKgSV0rBqSiG5DFk05z7oknC3GKZEA4s1B%2BatN%2BREEcTu4rJJqddwjrJ9H%2BuKwE6%2BZwXlAQDSrlJl3o8wQVH%2BC%2B8Bh%2BrKh5TMNbz3b8GOqUBD6OoNYmOrEc%2F5d27AjusCcsQpfqYt7qJFWYaU0DlP7tPKrSRF26wLJKAVeDVOkl1Ix0lxPr1SnJPYCOaKXwJvKf9xOPERUhtFmrOuPb2MCPPzC4Bhu85VnaGRwPAfTNWqqBsjQpGjnuPz4L4hjFKE8d644DcLa06zHxMkKlw56DsDqfiSYGqwE3wW%2B8lapv6Vm6B9gmvsduqzNDpPEjkpZH5KaSF&X-Amz-Signature=f7cfe5822a731a2fa6b0c47cd97b5ca8789d37020fe73e3e70fc7a79be3aaa2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV2D5AQD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDA7jaRARKM9N065AHtZih%2FzLMBsXZi67u9pC3pTpL7hgIgKBRWrhTy%2BhYElPb8gRE%2FSOZ47Jk3nul%2Bccfx3iMm%2FQQqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJyp2J3r0%2FYfXzSSrcA1u6%2Bi1YIb1FRtAzgW9WqQw5UR9guF31z3sk%2BzwUQwG%2FM1ADPK02yVO96NRrfr8i9x4KNw6WQbBQbrAlu%2BMaIpAFleWqUY5M0m0Qu8ksraKKOrkvOuFbHSFlRq99Wq0xXiBKnjA6oBZk42YNdP6%2B8dPpR%2BWg%2BowLGT4c%2FTEV7QAfdwZmFYuellwbGZpYlJV0iRIqa5JD3LiEKsKW0%2BOp8ZbqLq5kWBJBw5WBgFGX3Bi1QBceHh3o%2FNE5WFiVpsMn0JZhgODnpHkuDcnoM0f5T%2Bx1dVH%2FiAf%2BQqOzG%2ByT86m6CULLs1A83CZhxdyZAOXg1fOnB%2BZjkqkNjJTqHTuLLK2nG2QHWI7qadd4pvJVzhttKhg7oCu6El9EMZx1AdZJKuFKRZZb7%2BSyZvayiIvKAI0Ihownss9h%2Buymd9b3PlPz2lVXzshMTNtYgoooKDPLzS%2FHzVd%2BFWsO50%2FVtXBsh841zZI4Az6HjVQIWJdZOGzAY%2Fdfmk%2BWxQRVETqMuh%2BYeWayyOljEqqS3twGWceD83BYSIkXcKgSV0rBqSiG5DFk05z7oknC3GKZEA4s1B%2BatN%2BREEcTu4rJJqddwjrJ9H%2BuKwE6%2BZwXlAQDSrlJl3o8wQVH%2BC%2B8Bh%2BrKh5TMNbz3b8GOqUBD6OoNYmOrEc%2F5d27AjusCcsQpfqYt7qJFWYaU0DlP7tPKrSRF26wLJKAVeDVOkl1Ix0lxPr1SnJPYCOaKXwJvKf9xOPERUhtFmrOuPb2MCPPzC4Bhu85VnaGRwPAfTNWqqBsjQpGjnuPz4L4hjFKE8d644DcLa06zHxMkKlw56DsDqfiSYGqwE3wW%2B8lapv6Vm6B9gmvsduqzNDpPEjkpZH5KaSF&X-Amz-Signature=4b5ecb8cb43aec02fc4770ac14afa1f2028dc7b100cd7f497722f68f66e541aa&X-Amz-SignedHeaders=host&x-id=GetObject)
