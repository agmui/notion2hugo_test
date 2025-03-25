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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRN5XNY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtFTetiw%2FHGDEOHF7UAzVNyChTHc04kjS0JG6ilJBGtAiEA9vokKM5qE38qx5ub%2FomRMiUEMu9HRAltxW9WU0FJKCsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3rOucbt0T2lnGiRyrcA0FVj76yBW8hJdyH8fQyC8gjs5pkHkiS%2BzMsfBIc1CXfn8yXlQWt1%2FJ49Wn5MPwbTQX4rPJrhbHFKSCwk%2Bbx7CYognucQTY%2Fbm%2FZO%2F%2B%2Bc826cP8R6HNXmkQ5VSy6Hg23mDG0BupC5xfLySVrQUvK6TYFC%2FDH8DJRAHkG%2BcAn9zwd5DFvxb%2B0CsvUdxjU7VkPQVUXDbwQAzZxvffy%2Funy9XGuws2XLptdGUWnlrePatBWeSNlzsAV0VV5V3ojPaOXwghK44wUMdAH8b77us67JnVkjk%2FGLKVKyZKSynREr6b2xNInerW58GcYfP%2Bmyzi%2F7PtrACBM0j5MiC52z9De7rGDocrS1pb7S1qfgOFAToZleGiHYXTSW1XIDilZQjdCnwzPWrLWMZ1i%2FyMDYFWKESLkXdqvCzEPTJNvoOiev5Dm02giDRMU7l9NUAU0Spl9EdmuIXqk5FNloltzSlW%2BsSl3u2Di%2BsYIW%2FNnltbbJyTeH%2FWTn9wBTnHURfDdYRj3qEgj%2BQ3LcAofA6Ni9Om%2FZLrQRlKf6rC7XR410995cMA%2BkB6BWMW90X08HI32eljwDX3BoDeoVXyOtGYG3WKDVeWDc3DdIvTPZCPE%2FPgWvq2lqwHIvluc17BdszIYMPGOib8GOqUBnxRo5Yemcc8tryvuUg7t7DApHh3UL5J92ECv2PBYh6vRuwDzDrTSAhaJpMCeO%2FiEokfP5AVRgPO2URd6l1%2Bp%2Ff7JXt%2BWnkp4%2Ft3NPkFpueFKFg1%2FRkJ%2Bk3FNFFc4OUy8eT50bI1yRJpxZqxcm8kpsaTGVngxOBzAM5AFL8b6Zpe28GOnEBbtJJ9tW5IUSVrGNl8nTAqy%2BM2oF5LRcV24%2BvafUxx%2F&X-Amz-Signature=83fbe7b0ba0ad80d30a0c37450ca3c7ebf8f7769a9ef4a68b5a51686da68e0ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRN5XNY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtFTetiw%2FHGDEOHF7UAzVNyChTHc04kjS0JG6ilJBGtAiEA9vokKM5qE38qx5ub%2FomRMiUEMu9HRAltxW9WU0FJKCsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3rOucbt0T2lnGiRyrcA0FVj76yBW8hJdyH8fQyC8gjs5pkHkiS%2BzMsfBIc1CXfn8yXlQWt1%2FJ49Wn5MPwbTQX4rPJrhbHFKSCwk%2Bbx7CYognucQTY%2Fbm%2FZO%2F%2B%2Bc826cP8R6HNXmkQ5VSy6Hg23mDG0BupC5xfLySVrQUvK6TYFC%2FDH8DJRAHkG%2BcAn9zwd5DFvxb%2B0CsvUdxjU7VkPQVUXDbwQAzZxvffy%2Funy9XGuws2XLptdGUWnlrePatBWeSNlzsAV0VV5V3ojPaOXwghK44wUMdAH8b77us67JnVkjk%2FGLKVKyZKSynREr6b2xNInerW58GcYfP%2Bmyzi%2F7PtrACBM0j5MiC52z9De7rGDocrS1pb7S1qfgOFAToZleGiHYXTSW1XIDilZQjdCnwzPWrLWMZ1i%2FyMDYFWKESLkXdqvCzEPTJNvoOiev5Dm02giDRMU7l9NUAU0Spl9EdmuIXqk5FNloltzSlW%2BsSl3u2Di%2BsYIW%2FNnltbbJyTeH%2FWTn9wBTnHURfDdYRj3qEgj%2BQ3LcAofA6Ni9Om%2FZLrQRlKf6rC7XR410995cMA%2BkB6BWMW90X08HI32eljwDX3BoDeoVXyOtGYG3WKDVeWDc3DdIvTPZCPE%2FPgWvq2lqwHIvluc17BdszIYMPGOib8GOqUBnxRo5Yemcc8tryvuUg7t7DApHh3UL5J92ECv2PBYh6vRuwDzDrTSAhaJpMCeO%2FiEokfP5AVRgPO2URd6l1%2Bp%2Ff7JXt%2BWnkp4%2Ft3NPkFpueFKFg1%2FRkJ%2Bk3FNFFc4OUy8eT50bI1yRJpxZqxcm8kpsaTGVngxOBzAM5AFL8b6Zpe28GOnEBbtJJ9tW5IUSVrGNl8nTAqy%2BM2oF5LRcV24%2BvafUxx%2F&X-Amz-Signature=846f2cda8458b8d238d8f4e4555bc31dfb600859002882b6d3e4161f0117e106&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRN5XNY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtFTetiw%2FHGDEOHF7UAzVNyChTHc04kjS0JG6ilJBGtAiEA9vokKM5qE38qx5ub%2FomRMiUEMu9HRAltxW9WU0FJKCsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3rOucbt0T2lnGiRyrcA0FVj76yBW8hJdyH8fQyC8gjs5pkHkiS%2BzMsfBIc1CXfn8yXlQWt1%2FJ49Wn5MPwbTQX4rPJrhbHFKSCwk%2Bbx7CYognucQTY%2Fbm%2FZO%2F%2B%2Bc826cP8R6HNXmkQ5VSy6Hg23mDG0BupC5xfLySVrQUvK6TYFC%2FDH8DJRAHkG%2BcAn9zwd5DFvxb%2B0CsvUdxjU7VkPQVUXDbwQAzZxvffy%2Funy9XGuws2XLptdGUWnlrePatBWeSNlzsAV0VV5V3ojPaOXwghK44wUMdAH8b77us67JnVkjk%2FGLKVKyZKSynREr6b2xNInerW58GcYfP%2Bmyzi%2F7PtrACBM0j5MiC52z9De7rGDocrS1pb7S1qfgOFAToZleGiHYXTSW1XIDilZQjdCnwzPWrLWMZ1i%2FyMDYFWKESLkXdqvCzEPTJNvoOiev5Dm02giDRMU7l9NUAU0Spl9EdmuIXqk5FNloltzSlW%2BsSl3u2Di%2BsYIW%2FNnltbbJyTeH%2FWTn9wBTnHURfDdYRj3qEgj%2BQ3LcAofA6Ni9Om%2FZLrQRlKf6rC7XR410995cMA%2BkB6BWMW90X08HI32eljwDX3BoDeoVXyOtGYG3WKDVeWDc3DdIvTPZCPE%2FPgWvq2lqwHIvluc17BdszIYMPGOib8GOqUBnxRo5Yemcc8tryvuUg7t7DApHh3UL5J92ECv2PBYh6vRuwDzDrTSAhaJpMCeO%2FiEokfP5AVRgPO2URd6l1%2Bp%2Ff7JXt%2BWnkp4%2Ft3NPkFpueFKFg1%2FRkJ%2Bk3FNFFc4OUy8eT50bI1yRJpxZqxcm8kpsaTGVngxOBzAM5AFL8b6Zpe28GOnEBbtJJ9tW5IUSVrGNl8nTAqy%2BM2oF5LRcV24%2BvafUxx%2F&X-Amz-Signature=359f809be76903a93e9ee8b02822a723136236830d4d840df291db2ba51717c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRN5XNY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtFTetiw%2FHGDEOHF7UAzVNyChTHc04kjS0JG6ilJBGtAiEA9vokKM5qE38qx5ub%2FomRMiUEMu9HRAltxW9WU0FJKCsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3rOucbt0T2lnGiRyrcA0FVj76yBW8hJdyH8fQyC8gjs5pkHkiS%2BzMsfBIc1CXfn8yXlQWt1%2FJ49Wn5MPwbTQX4rPJrhbHFKSCwk%2Bbx7CYognucQTY%2Fbm%2FZO%2F%2B%2Bc826cP8R6HNXmkQ5VSy6Hg23mDG0BupC5xfLySVrQUvK6TYFC%2FDH8DJRAHkG%2BcAn9zwd5DFvxb%2B0CsvUdxjU7VkPQVUXDbwQAzZxvffy%2Funy9XGuws2XLptdGUWnlrePatBWeSNlzsAV0VV5V3ojPaOXwghK44wUMdAH8b77us67JnVkjk%2FGLKVKyZKSynREr6b2xNInerW58GcYfP%2Bmyzi%2F7PtrACBM0j5MiC52z9De7rGDocrS1pb7S1qfgOFAToZleGiHYXTSW1XIDilZQjdCnwzPWrLWMZ1i%2FyMDYFWKESLkXdqvCzEPTJNvoOiev5Dm02giDRMU7l9NUAU0Spl9EdmuIXqk5FNloltzSlW%2BsSl3u2Di%2BsYIW%2FNnltbbJyTeH%2FWTn9wBTnHURfDdYRj3qEgj%2BQ3LcAofA6Ni9Om%2FZLrQRlKf6rC7XR410995cMA%2BkB6BWMW90X08HI32eljwDX3BoDeoVXyOtGYG3WKDVeWDc3DdIvTPZCPE%2FPgWvq2lqwHIvluc17BdszIYMPGOib8GOqUBnxRo5Yemcc8tryvuUg7t7DApHh3UL5J92ECv2PBYh6vRuwDzDrTSAhaJpMCeO%2FiEokfP5AVRgPO2URd6l1%2Bp%2Ff7JXt%2BWnkp4%2Ft3NPkFpueFKFg1%2FRkJ%2Bk3FNFFc4OUy8eT50bI1yRJpxZqxcm8kpsaTGVngxOBzAM5AFL8b6Zpe28GOnEBbtJJ9tW5IUSVrGNl8nTAqy%2BM2oF5LRcV24%2BvafUxx%2F&X-Amz-Signature=dd9bd70e4dc6d19839cdde916aad4a0eb603d26cfbbdacf756bba753efd51d75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRN5XNY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtFTetiw%2FHGDEOHF7UAzVNyChTHc04kjS0JG6ilJBGtAiEA9vokKM5qE38qx5ub%2FomRMiUEMu9HRAltxW9WU0FJKCsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3rOucbt0T2lnGiRyrcA0FVj76yBW8hJdyH8fQyC8gjs5pkHkiS%2BzMsfBIc1CXfn8yXlQWt1%2FJ49Wn5MPwbTQX4rPJrhbHFKSCwk%2Bbx7CYognucQTY%2Fbm%2FZO%2F%2B%2Bc826cP8R6HNXmkQ5VSy6Hg23mDG0BupC5xfLySVrQUvK6TYFC%2FDH8DJRAHkG%2BcAn9zwd5DFvxb%2B0CsvUdxjU7VkPQVUXDbwQAzZxvffy%2Funy9XGuws2XLptdGUWnlrePatBWeSNlzsAV0VV5V3ojPaOXwghK44wUMdAH8b77us67JnVkjk%2FGLKVKyZKSynREr6b2xNInerW58GcYfP%2Bmyzi%2F7PtrACBM0j5MiC52z9De7rGDocrS1pb7S1qfgOFAToZleGiHYXTSW1XIDilZQjdCnwzPWrLWMZ1i%2FyMDYFWKESLkXdqvCzEPTJNvoOiev5Dm02giDRMU7l9NUAU0Spl9EdmuIXqk5FNloltzSlW%2BsSl3u2Di%2BsYIW%2FNnltbbJyTeH%2FWTn9wBTnHURfDdYRj3qEgj%2BQ3LcAofA6Ni9Om%2FZLrQRlKf6rC7XR410995cMA%2BkB6BWMW90X08HI32eljwDX3BoDeoVXyOtGYG3WKDVeWDc3DdIvTPZCPE%2FPgWvq2lqwHIvluc17BdszIYMPGOib8GOqUBnxRo5Yemcc8tryvuUg7t7DApHh3UL5J92ECv2PBYh6vRuwDzDrTSAhaJpMCeO%2FiEokfP5AVRgPO2URd6l1%2Bp%2Ff7JXt%2BWnkp4%2Ft3NPkFpueFKFg1%2FRkJ%2Bk3FNFFc4OUy8eT50bI1yRJpxZqxcm8kpsaTGVngxOBzAM5AFL8b6Zpe28GOnEBbtJJ9tW5IUSVrGNl8nTAqy%2BM2oF5LRcV24%2BvafUxx%2F&X-Amz-Signature=47cab8e165085081eb5fb5bd476d154dab60bbedaa1377fc34c04708a959160a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRN5XNY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtFTetiw%2FHGDEOHF7UAzVNyChTHc04kjS0JG6ilJBGtAiEA9vokKM5qE38qx5ub%2FomRMiUEMu9HRAltxW9WU0FJKCsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3rOucbt0T2lnGiRyrcA0FVj76yBW8hJdyH8fQyC8gjs5pkHkiS%2BzMsfBIc1CXfn8yXlQWt1%2FJ49Wn5MPwbTQX4rPJrhbHFKSCwk%2Bbx7CYognucQTY%2Fbm%2FZO%2F%2B%2Bc826cP8R6HNXmkQ5VSy6Hg23mDG0BupC5xfLySVrQUvK6TYFC%2FDH8DJRAHkG%2BcAn9zwd5DFvxb%2B0CsvUdxjU7VkPQVUXDbwQAzZxvffy%2Funy9XGuws2XLptdGUWnlrePatBWeSNlzsAV0VV5V3ojPaOXwghK44wUMdAH8b77us67JnVkjk%2FGLKVKyZKSynREr6b2xNInerW58GcYfP%2Bmyzi%2F7PtrACBM0j5MiC52z9De7rGDocrS1pb7S1qfgOFAToZleGiHYXTSW1XIDilZQjdCnwzPWrLWMZ1i%2FyMDYFWKESLkXdqvCzEPTJNvoOiev5Dm02giDRMU7l9NUAU0Spl9EdmuIXqk5FNloltzSlW%2BsSl3u2Di%2BsYIW%2FNnltbbJyTeH%2FWTn9wBTnHURfDdYRj3qEgj%2BQ3LcAofA6Ni9Om%2FZLrQRlKf6rC7XR410995cMA%2BkB6BWMW90X08HI32eljwDX3BoDeoVXyOtGYG3WKDVeWDc3DdIvTPZCPE%2FPgWvq2lqwHIvluc17BdszIYMPGOib8GOqUBnxRo5Yemcc8tryvuUg7t7DApHh3UL5J92ECv2PBYh6vRuwDzDrTSAhaJpMCeO%2FiEokfP5AVRgPO2URd6l1%2Bp%2Ff7JXt%2BWnkp4%2Ft3NPkFpueFKFg1%2FRkJ%2Bk3FNFFc4OUy8eT50bI1yRJpxZqxcm8kpsaTGVngxOBzAM5AFL8b6Zpe28GOnEBbtJJ9tW5IUSVrGNl8nTAqy%2BM2oF5LRcV24%2BvafUxx%2F&X-Amz-Signature=2ceaef3b8782230b2d6ba10e7c5e2ed3a1bea4fef4698221798c7e98db0ac23e&X-Amz-SignedHeaders=host&x-id=GetObject)
