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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFFJNQT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fok10X7iyHiSX7AOvhcVAQeFAqDqB62VgfjvI2BktAiEAt55VFc7PDSbhmUHkVk%2BOgdl%2BwvtTixpXbIXlXubLDgEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPIgDKHeAJEOue6l8yrcAz8PvW2oeSeNVtJkqGOJXyux71wbq%2B9RyzDHvi3ezM2loQQJ2C%2FU21oF0KxRNVuJEtCeZACpI%2Bv%2FEUu8FEoEIWtFpL%2FvyGC7KfXb4OqHWbJfjnymMfJSsWdldld88giduoQlGuNRe3LCSSHchgzA%2B%2F8vbGYhyrIuoWc5aKzRX5WkTdwDzjiPWqAHuXicPDpunmOQq%2FS5B6C3Vl0icUumsmCddHTM2zTKG5D9G8j6yeycGJdWokb0VqxFX2BPG2m0CPpaIvk5J9ypZB%2FY2kmZ%2B9%2B5EtNMQu9JHfEMdCPHe7NPQy6t16QLlnKv7HE0aubTC0wm25QtOwAoIowi1SCnJYuo5S%2FVS4J7ZIZQOrhkTxhhfwb3Adw6DwUQinmfqeeVyJUstGUFNdth%2FnSdYvrTOjCjdd0EEI9i9i09%2BvZJmnrQGE7bZiE%2BxKXPfEbdkvbgLjkr0l8m4Fx5Ng%2BLtKDapyqHnzXbE7KEmI5Q%2BTqtmJixkHFjCJr5A%2BJ2xoaVx65UxcoR40SdrtpMXNFulhIFRLQgT6bPfN49PdzW7eZOVJ6LXkMlyCzGY%2BRdAxNJtMsSxQPtNyjlwfSrHOgOjq1R%2F70QElw%2BiS4NicFsK%2F13aAcXR9dK8B3Sr%2F4iPHE%2FMKvdt70GOqUBqMq%2FKlxA8w1%2FCa6IuLWfODgudR6N1JvGqm6tUAN%2FULNpT07ix6w53CAodG4fVJiBfB%2FZP0mVL7wrc4m3CDytKP4%2FNzkwz%2FmPU%2FTzs5aQPJL6eRBXWfUzZKaUIGh4zA%2Bwic6n8cDbUsH1cEm9SNSd0TWiZ4INUxlv56d%2B0m7VMQnybI3p3NVUUkLgmiSeZm7LARXrPT9KkDUmH3PIzHWYmJZIH%2FMB&X-Amz-Signature=4d6a35aba215f7ed0c3c380aee49714dcce68fce9a3e6ba4d643f6773e4238e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFFJNQT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fok10X7iyHiSX7AOvhcVAQeFAqDqB62VgfjvI2BktAiEAt55VFc7PDSbhmUHkVk%2BOgdl%2BwvtTixpXbIXlXubLDgEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPIgDKHeAJEOue6l8yrcAz8PvW2oeSeNVtJkqGOJXyux71wbq%2B9RyzDHvi3ezM2loQQJ2C%2FU21oF0KxRNVuJEtCeZACpI%2Bv%2FEUu8FEoEIWtFpL%2FvyGC7KfXb4OqHWbJfjnymMfJSsWdldld88giduoQlGuNRe3LCSSHchgzA%2B%2F8vbGYhyrIuoWc5aKzRX5WkTdwDzjiPWqAHuXicPDpunmOQq%2FS5B6C3Vl0icUumsmCddHTM2zTKG5D9G8j6yeycGJdWokb0VqxFX2BPG2m0CPpaIvk5J9ypZB%2FY2kmZ%2B9%2B5EtNMQu9JHfEMdCPHe7NPQy6t16QLlnKv7HE0aubTC0wm25QtOwAoIowi1SCnJYuo5S%2FVS4J7ZIZQOrhkTxhhfwb3Adw6DwUQinmfqeeVyJUstGUFNdth%2FnSdYvrTOjCjdd0EEI9i9i09%2BvZJmnrQGE7bZiE%2BxKXPfEbdkvbgLjkr0l8m4Fx5Ng%2BLtKDapyqHnzXbE7KEmI5Q%2BTqtmJixkHFjCJr5A%2BJ2xoaVx65UxcoR40SdrtpMXNFulhIFRLQgT6bPfN49PdzW7eZOVJ6LXkMlyCzGY%2BRdAxNJtMsSxQPtNyjlwfSrHOgOjq1R%2F70QElw%2BiS4NicFsK%2F13aAcXR9dK8B3Sr%2F4iPHE%2FMKvdt70GOqUBqMq%2FKlxA8w1%2FCa6IuLWfODgudR6N1JvGqm6tUAN%2FULNpT07ix6w53CAodG4fVJiBfB%2FZP0mVL7wrc4m3CDytKP4%2FNzkwz%2FmPU%2FTzs5aQPJL6eRBXWfUzZKaUIGh4zA%2Bwic6n8cDbUsH1cEm9SNSd0TWiZ4INUxlv56d%2B0m7VMQnybI3p3NVUUkLgmiSeZm7LARXrPT9KkDUmH3PIzHWYmJZIH%2FMB&X-Amz-Signature=61b6e6bbd44a7b50f12ab9e9c11a514b73d5e71dfde6b671aa44e7a24f276de4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFFJNQT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fok10X7iyHiSX7AOvhcVAQeFAqDqB62VgfjvI2BktAiEAt55VFc7PDSbhmUHkVk%2BOgdl%2BwvtTixpXbIXlXubLDgEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPIgDKHeAJEOue6l8yrcAz8PvW2oeSeNVtJkqGOJXyux71wbq%2B9RyzDHvi3ezM2loQQJ2C%2FU21oF0KxRNVuJEtCeZACpI%2Bv%2FEUu8FEoEIWtFpL%2FvyGC7KfXb4OqHWbJfjnymMfJSsWdldld88giduoQlGuNRe3LCSSHchgzA%2B%2F8vbGYhyrIuoWc5aKzRX5WkTdwDzjiPWqAHuXicPDpunmOQq%2FS5B6C3Vl0icUumsmCddHTM2zTKG5D9G8j6yeycGJdWokb0VqxFX2BPG2m0CPpaIvk5J9ypZB%2FY2kmZ%2B9%2B5EtNMQu9JHfEMdCPHe7NPQy6t16QLlnKv7HE0aubTC0wm25QtOwAoIowi1SCnJYuo5S%2FVS4J7ZIZQOrhkTxhhfwb3Adw6DwUQinmfqeeVyJUstGUFNdth%2FnSdYvrTOjCjdd0EEI9i9i09%2BvZJmnrQGE7bZiE%2BxKXPfEbdkvbgLjkr0l8m4Fx5Ng%2BLtKDapyqHnzXbE7KEmI5Q%2BTqtmJixkHFjCJr5A%2BJ2xoaVx65UxcoR40SdrtpMXNFulhIFRLQgT6bPfN49PdzW7eZOVJ6LXkMlyCzGY%2BRdAxNJtMsSxQPtNyjlwfSrHOgOjq1R%2F70QElw%2BiS4NicFsK%2F13aAcXR9dK8B3Sr%2F4iPHE%2FMKvdt70GOqUBqMq%2FKlxA8w1%2FCa6IuLWfODgudR6N1JvGqm6tUAN%2FULNpT07ix6w53CAodG4fVJiBfB%2FZP0mVL7wrc4m3CDytKP4%2FNzkwz%2FmPU%2FTzs5aQPJL6eRBXWfUzZKaUIGh4zA%2Bwic6n8cDbUsH1cEm9SNSd0TWiZ4INUxlv56d%2B0m7VMQnybI3p3NVUUkLgmiSeZm7LARXrPT9KkDUmH3PIzHWYmJZIH%2FMB&X-Amz-Signature=cf9c312fa1717938965e5f11db3f6b71a39a55cc5888202cbd5a6fc835d23e49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFFJNQT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fok10X7iyHiSX7AOvhcVAQeFAqDqB62VgfjvI2BktAiEAt55VFc7PDSbhmUHkVk%2BOgdl%2BwvtTixpXbIXlXubLDgEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPIgDKHeAJEOue6l8yrcAz8PvW2oeSeNVtJkqGOJXyux71wbq%2B9RyzDHvi3ezM2loQQJ2C%2FU21oF0KxRNVuJEtCeZACpI%2Bv%2FEUu8FEoEIWtFpL%2FvyGC7KfXb4OqHWbJfjnymMfJSsWdldld88giduoQlGuNRe3LCSSHchgzA%2B%2F8vbGYhyrIuoWc5aKzRX5WkTdwDzjiPWqAHuXicPDpunmOQq%2FS5B6C3Vl0icUumsmCddHTM2zTKG5D9G8j6yeycGJdWokb0VqxFX2BPG2m0CPpaIvk5J9ypZB%2FY2kmZ%2B9%2B5EtNMQu9JHfEMdCPHe7NPQy6t16QLlnKv7HE0aubTC0wm25QtOwAoIowi1SCnJYuo5S%2FVS4J7ZIZQOrhkTxhhfwb3Adw6DwUQinmfqeeVyJUstGUFNdth%2FnSdYvrTOjCjdd0EEI9i9i09%2BvZJmnrQGE7bZiE%2BxKXPfEbdkvbgLjkr0l8m4Fx5Ng%2BLtKDapyqHnzXbE7KEmI5Q%2BTqtmJixkHFjCJr5A%2BJ2xoaVx65UxcoR40SdrtpMXNFulhIFRLQgT6bPfN49PdzW7eZOVJ6LXkMlyCzGY%2BRdAxNJtMsSxQPtNyjlwfSrHOgOjq1R%2F70QElw%2BiS4NicFsK%2F13aAcXR9dK8B3Sr%2F4iPHE%2FMKvdt70GOqUBqMq%2FKlxA8w1%2FCa6IuLWfODgudR6N1JvGqm6tUAN%2FULNpT07ix6w53CAodG4fVJiBfB%2FZP0mVL7wrc4m3CDytKP4%2FNzkwz%2FmPU%2FTzs5aQPJL6eRBXWfUzZKaUIGh4zA%2Bwic6n8cDbUsH1cEm9SNSd0TWiZ4INUxlv56d%2B0m7VMQnybI3p3NVUUkLgmiSeZm7LARXrPT9KkDUmH3PIzHWYmJZIH%2FMB&X-Amz-Signature=44a8024825325d8aec2ea70604a59cf0e25ec451cd4eda6e240daf19c5e5a8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFFJNQT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fok10X7iyHiSX7AOvhcVAQeFAqDqB62VgfjvI2BktAiEAt55VFc7PDSbhmUHkVk%2BOgdl%2BwvtTixpXbIXlXubLDgEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPIgDKHeAJEOue6l8yrcAz8PvW2oeSeNVtJkqGOJXyux71wbq%2B9RyzDHvi3ezM2loQQJ2C%2FU21oF0KxRNVuJEtCeZACpI%2Bv%2FEUu8FEoEIWtFpL%2FvyGC7KfXb4OqHWbJfjnymMfJSsWdldld88giduoQlGuNRe3LCSSHchgzA%2B%2F8vbGYhyrIuoWc5aKzRX5WkTdwDzjiPWqAHuXicPDpunmOQq%2FS5B6C3Vl0icUumsmCddHTM2zTKG5D9G8j6yeycGJdWokb0VqxFX2BPG2m0CPpaIvk5J9ypZB%2FY2kmZ%2B9%2B5EtNMQu9JHfEMdCPHe7NPQy6t16QLlnKv7HE0aubTC0wm25QtOwAoIowi1SCnJYuo5S%2FVS4J7ZIZQOrhkTxhhfwb3Adw6DwUQinmfqeeVyJUstGUFNdth%2FnSdYvrTOjCjdd0EEI9i9i09%2BvZJmnrQGE7bZiE%2BxKXPfEbdkvbgLjkr0l8m4Fx5Ng%2BLtKDapyqHnzXbE7KEmI5Q%2BTqtmJixkHFjCJr5A%2BJ2xoaVx65UxcoR40SdrtpMXNFulhIFRLQgT6bPfN49PdzW7eZOVJ6LXkMlyCzGY%2BRdAxNJtMsSxQPtNyjlwfSrHOgOjq1R%2F70QElw%2BiS4NicFsK%2F13aAcXR9dK8B3Sr%2F4iPHE%2FMKvdt70GOqUBqMq%2FKlxA8w1%2FCa6IuLWfODgudR6N1JvGqm6tUAN%2FULNpT07ix6w53CAodG4fVJiBfB%2FZP0mVL7wrc4m3CDytKP4%2FNzkwz%2FmPU%2FTzs5aQPJL6eRBXWfUzZKaUIGh4zA%2Bwic6n8cDbUsH1cEm9SNSd0TWiZ4INUxlv56d%2B0m7VMQnybI3p3NVUUkLgmiSeZm7LARXrPT9KkDUmH3PIzHWYmJZIH%2FMB&X-Amz-Signature=1ac53a8b83cc784d6e9e66e8eb5bd466f8aa5f100ec03ac163515212b9664764&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFFJNQT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T140123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFL%2Fok10X7iyHiSX7AOvhcVAQeFAqDqB62VgfjvI2BktAiEAt55VFc7PDSbhmUHkVk%2BOgdl%2BwvtTixpXbIXlXubLDgEq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDPIgDKHeAJEOue6l8yrcAz8PvW2oeSeNVtJkqGOJXyux71wbq%2B9RyzDHvi3ezM2loQQJ2C%2FU21oF0KxRNVuJEtCeZACpI%2Bv%2FEUu8FEoEIWtFpL%2FvyGC7KfXb4OqHWbJfjnymMfJSsWdldld88giduoQlGuNRe3LCSSHchgzA%2B%2F8vbGYhyrIuoWc5aKzRX5WkTdwDzjiPWqAHuXicPDpunmOQq%2FS5B6C3Vl0icUumsmCddHTM2zTKG5D9G8j6yeycGJdWokb0VqxFX2BPG2m0CPpaIvk5J9ypZB%2FY2kmZ%2B9%2B5EtNMQu9JHfEMdCPHe7NPQy6t16QLlnKv7HE0aubTC0wm25QtOwAoIowi1SCnJYuo5S%2FVS4J7ZIZQOrhkTxhhfwb3Adw6DwUQinmfqeeVyJUstGUFNdth%2FnSdYvrTOjCjdd0EEI9i9i09%2BvZJmnrQGE7bZiE%2BxKXPfEbdkvbgLjkr0l8m4Fx5Ng%2BLtKDapyqHnzXbE7KEmI5Q%2BTqtmJixkHFjCJr5A%2BJ2xoaVx65UxcoR40SdrtpMXNFulhIFRLQgT6bPfN49PdzW7eZOVJ6LXkMlyCzGY%2BRdAxNJtMsSxQPtNyjlwfSrHOgOjq1R%2F70QElw%2BiS4NicFsK%2F13aAcXR9dK8B3Sr%2F4iPHE%2FMKvdt70GOqUBqMq%2FKlxA8w1%2FCa6IuLWfODgudR6N1JvGqm6tUAN%2FULNpT07ix6w53CAodG4fVJiBfB%2FZP0mVL7wrc4m3CDytKP4%2FNzkwz%2FmPU%2FTzs5aQPJL6eRBXWfUzZKaUIGh4zA%2Bwic6n8cDbUsH1cEm9SNSd0TWiZ4INUxlv56d%2B0m7VMQnybI3p3NVUUkLgmiSeZm7LARXrPT9KkDUmH3PIzHWYmJZIH%2FMB&X-Amz-Signature=6ac1e17b18047ceda49eab41e840976565a4288430def8d56e711e81b83e550b&X-Amz-SignedHeaders=host&x-id=GetObject)
