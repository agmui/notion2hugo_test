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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3BPKJS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOx3GS1goQskKJvZm8%2F7kQSJ%2BOVGwD7VESs7fFurV6SAiEAvjOcZPfUAiYtQmtP5l8u08%2Fl1crNIAwi43ZX2tjZlJIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRyIW7SSMlTNVL75yrcA%2BiJMJ8LXFk9HtDERZtnKdZliQmSvdIlPsU9dEA5EkjbiHb8FbZeQMGlHItwzwgyu8%2B7iq%2FqmQXjVGvqC22yUWypPwfiPJ%2BtwylQsmlHa%2FaxACr7ImR1tQpH%2BmVDMxgaMWEqOwzuWJGSfZS%2BrdwDJT%2FpakSqKFMtpiX3zRzeWsYMHr0S4O5ZxvIdmoDTNedLvRJHlZHlYbSFBkjWRRZuzEGZsBtmHyBlR4S8TUUjsEDhuy8LnJvOzeGvLZKA0UT8erfe7gzhmAYg%2B1rDAMiC9RtoZiP43PY%2FPAeZYKPIZcraCcubS6VyWudOlxouXyenHHZFHLWmg0uNshjaKTCaXC%2B6x%2FqzgHtwgaJKx5JF6V8xfic%2FW%2BLlEHX05gV4Gm9vkIiYWRHJYL6xSdywNxNviILcHzNMJshH7tDgdCjUxJL7n1Z1gQo0vUvYMCJnQtoS5KhSUcmpZTbiW696BgzemUm85yo0dZ6PIDd9ubjwXFqt5MmKmVGeAGE8GvnZsyL4xPZA9l5xWpi6MwXWKaacZuXMcPKLlD4n2NpEJZBOwWjp3HYIxYApDOM4fHukkmBvqy2Nnh%2FbOZ83AMvysCkbxLrP51sAV1pA48Uy%2B5eDpKQtC4pUSt8m0F46Az77MPXYy74GOqUBuf0m3NJSDLMpKli%2FMlVPzeM9bTwsO0f6HZCVF6OGB4SZnWkfWoKiVtR4x3qtbbTyRsXMahd%2FcjeGESXUm8fO6Sn4nhIKOW8GbLZpK5uO6SY68eDyxKcobgL683L4G59Ea7dDLsSMXpI7TjMrWqAavRUBB%2B8xcITPmplx71iH%2FB9NXQtiYNfL1oOqZWaSXw%2FN9Su8iJgUNFhvL0byDQvOql73bd04&X-Amz-Signature=2c77d2caea23f782f8bba89ec7a52750359c59da99d83076e64f4519607c5b41&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3BPKJS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOx3GS1goQskKJvZm8%2F7kQSJ%2BOVGwD7VESs7fFurV6SAiEAvjOcZPfUAiYtQmtP5l8u08%2Fl1crNIAwi43ZX2tjZlJIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRyIW7SSMlTNVL75yrcA%2BiJMJ8LXFk9HtDERZtnKdZliQmSvdIlPsU9dEA5EkjbiHb8FbZeQMGlHItwzwgyu8%2B7iq%2FqmQXjVGvqC22yUWypPwfiPJ%2BtwylQsmlHa%2FaxACr7ImR1tQpH%2BmVDMxgaMWEqOwzuWJGSfZS%2BrdwDJT%2FpakSqKFMtpiX3zRzeWsYMHr0S4O5ZxvIdmoDTNedLvRJHlZHlYbSFBkjWRRZuzEGZsBtmHyBlR4S8TUUjsEDhuy8LnJvOzeGvLZKA0UT8erfe7gzhmAYg%2B1rDAMiC9RtoZiP43PY%2FPAeZYKPIZcraCcubS6VyWudOlxouXyenHHZFHLWmg0uNshjaKTCaXC%2B6x%2FqzgHtwgaJKx5JF6V8xfic%2FW%2BLlEHX05gV4Gm9vkIiYWRHJYL6xSdywNxNviILcHzNMJshH7tDgdCjUxJL7n1Z1gQo0vUvYMCJnQtoS5KhSUcmpZTbiW696BgzemUm85yo0dZ6PIDd9ubjwXFqt5MmKmVGeAGE8GvnZsyL4xPZA9l5xWpi6MwXWKaacZuXMcPKLlD4n2NpEJZBOwWjp3HYIxYApDOM4fHukkmBvqy2Nnh%2FbOZ83AMvysCkbxLrP51sAV1pA48Uy%2B5eDpKQtC4pUSt8m0F46Az77MPXYy74GOqUBuf0m3NJSDLMpKli%2FMlVPzeM9bTwsO0f6HZCVF6OGB4SZnWkfWoKiVtR4x3qtbbTyRsXMahd%2FcjeGESXUm8fO6Sn4nhIKOW8GbLZpK5uO6SY68eDyxKcobgL683L4G59Ea7dDLsSMXpI7TjMrWqAavRUBB%2B8xcITPmplx71iH%2FB9NXQtiYNfL1oOqZWaSXw%2FN9Su8iJgUNFhvL0byDQvOql73bd04&X-Amz-Signature=91024503210d28e856e5ba93529e106c785740ee9edcef505482e3adb8a1dbec&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3BPKJS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOx3GS1goQskKJvZm8%2F7kQSJ%2BOVGwD7VESs7fFurV6SAiEAvjOcZPfUAiYtQmtP5l8u08%2Fl1crNIAwi43ZX2tjZlJIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRyIW7SSMlTNVL75yrcA%2BiJMJ8LXFk9HtDERZtnKdZliQmSvdIlPsU9dEA5EkjbiHb8FbZeQMGlHItwzwgyu8%2B7iq%2FqmQXjVGvqC22yUWypPwfiPJ%2BtwylQsmlHa%2FaxACr7ImR1tQpH%2BmVDMxgaMWEqOwzuWJGSfZS%2BrdwDJT%2FpakSqKFMtpiX3zRzeWsYMHr0S4O5ZxvIdmoDTNedLvRJHlZHlYbSFBkjWRRZuzEGZsBtmHyBlR4S8TUUjsEDhuy8LnJvOzeGvLZKA0UT8erfe7gzhmAYg%2B1rDAMiC9RtoZiP43PY%2FPAeZYKPIZcraCcubS6VyWudOlxouXyenHHZFHLWmg0uNshjaKTCaXC%2B6x%2FqzgHtwgaJKx5JF6V8xfic%2FW%2BLlEHX05gV4Gm9vkIiYWRHJYL6xSdywNxNviILcHzNMJshH7tDgdCjUxJL7n1Z1gQo0vUvYMCJnQtoS5KhSUcmpZTbiW696BgzemUm85yo0dZ6PIDd9ubjwXFqt5MmKmVGeAGE8GvnZsyL4xPZA9l5xWpi6MwXWKaacZuXMcPKLlD4n2NpEJZBOwWjp3HYIxYApDOM4fHukkmBvqy2Nnh%2FbOZ83AMvysCkbxLrP51sAV1pA48Uy%2B5eDpKQtC4pUSt8m0F46Az77MPXYy74GOqUBuf0m3NJSDLMpKli%2FMlVPzeM9bTwsO0f6HZCVF6OGB4SZnWkfWoKiVtR4x3qtbbTyRsXMahd%2FcjeGESXUm8fO6Sn4nhIKOW8GbLZpK5uO6SY68eDyxKcobgL683L4G59Ea7dDLsSMXpI7TjMrWqAavRUBB%2B8xcITPmplx71iH%2FB9NXQtiYNfL1oOqZWaSXw%2FN9Su8iJgUNFhvL0byDQvOql73bd04&X-Amz-Signature=dc149063a9ce972fb03ce802dec8b191f46a8f3744c320946478eb6beca975f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3BPKJS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOx3GS1goQskKJvZm8%2F7kQSJ%2BOVGwD7VESs7fFurV6SAiEAvjOcZPfUAiYtQmtP5l8u08%2Fl1crNIAwi43ZX2tjZlJIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRyIW7SSMlTNVL75yrcA%2BiJMJ8LXFk9HtDERZtnKdZliQmSvdIlPsU9dEA5EkjbiHb8FbZeQMGlHItwzwgyu8%2B7iq%2FqmQXjVGvqC22yUWypPwfiPJ%2BtwylQsmlHa%2FaxACr7ImR1tQpH%2BmVDMxgaMWEqOwzuWJGSfZS%2BrdwDJT%2FpakSqKFMtpiX3zRzeWsYMHr0S4O5ZxvIdmoDTNedLvRJHlZHlYbSFBkjWRRZuzEGZsBtmHyBlR4S8TUUjsEDhuy8LnJvOzeGvLZKA0UT8erfe7gzhmAYg%2B1rDAMiC9RtoZiP43PY%2FPAeZYKPIZcraCcubS6VyWudOlxouXyenHHZFHLWmg0uNshjaKTCaXC%2B6x%2FqzgHtwgaJKx5JF6V8xfic%2FW%2BLlEHX05gV4Gm9vkIiYWRHJYL6xSdywNxNviILcHzNMJshH7tDgdCjUxJL7n1Z1gQo0vUvYMCJnQtoS5KhSUcmpZTbiW696BgzemUm85yo0dZ6PIDd9ubjwXFqt5MmKmVGeAGE8GvnZsyL4xPZA9l5xWpi6MwXWKaacZuXMcPKLlD4n2NpEJZBOwWjp3HYIxYApDOM4fHukkmBvqy2Nnh%2FbOZ83AMvysCkbxLrP51sAV1pA48Uy%2B5eDpKQtC4pUSt8m0F46Az77MPXYy74GOqUBuf0m3NJSDLMpKli%2FMlVPzeM9bTwsO0f6HZCVF6OGB4SZnWkfWoKiVtR4x3qtbbTyRsXMahd%2FcjeGESXUm8fO6Sn4nhIKOW8GbLZpK5uO6SY68eDyxKcobgL683L4G59Ea7dDLsSMXpI7TjMrWqAavRUBB%2B8xcITPmplx71iH%2FB9NXQtiYNfL1oOqZWaSXw%2FN9Su8iJgUNFhvL0byDQvOql73bd04&X-Amz-Signature=a9f50fc5a1cfbd5e887c04759ae56974ac72ab2d26b40cced4f6691e7ca3127d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3BPKJS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOx3GS1goQskKJvZm8%2F7kQSJ%2BOVGwD7VESs7fFurV6SAiEAvjOcZPfUAiYtQmtP5l8u08%2Fl1crNIAwi43ZX2tjZlJIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRyIW7SSMlTNVL75yrcA%2BiJMJ8LXFk9HtDERZtnKdZliQmSvdIlPsU9dEA5EkjbiHb8FbZeQMGlHItwzwgyu8%2B7iq%2FqmQXjVGvqC22yUWypPwfiPJ%2BtwylQsmlHa%2FaxACr7ImR1tQpH%2BmVDMxgaMWEqOwzuWJGSfZS%2BrdwDJT%2FpakSqKFMtpiX3zRzeWsYMHr0S4O5ZxvIdmoDTNedLvRJHlZHlYbSFBkjWRRZuzEGZsBtmHyBlR4S8TUUjsEDhuy8LnJvOzeGvLZKA0UT8erfe7gzhmAYg%2B1rDAMiC9RtoZiP43PY%2FPAeZYKPIZcraCcubS6VyWudOlxouXyenHHZFHLWmg0uNshjaKTCaXC%2B6x%2FqzgHtwgaJKx5JF6V8xfic%2FW%2BLlEHX05gV4Gm9vkIiYWRHJYL6xSdywNxNviILcHzNMJshH7tDgdCjUxJL7n1Z1gQo0vUvYMCJnQtoS5KhSUcmpZTbiW696BgzemUm85yo0dZ6PIDd9ubjwXFqt5MmKmVGeAGE8GvnZsyL4xPZA9l5xWpi6MwXWKaacZuXMcPKLlD4n2NpEJZBOwWjp3HYIxYApDOM4fHukkmBvqy2Nnh%2FbOZ83AMvysCkbxLrP51sAV1pA48Uy%2B5eDpKQtC4pUSt8m0F46Az77MPXYy74GOqUBuf0m3NJSDLMpKli%2FMlVPzeM9bTwsO0f6HZCVF6OGB4SZnWkfWoKiVtR4x3qtbbTyRsXMahd%2FcjeGESXUm8fO6Sn4nhIKOW8GbLZpK5uO6SY68eDyxKcobgL683L4G59Ea7dDLsSMXpI7TjMrWqAavRUBB%2B8xcITPmplx71iH%2FB9NXQtiYNfL1oOqZWaSXw%2FN9Su8iJgUNFhvL0byDQvOql73bd04&X-Amz-Signature=76e5cbd2adf15953da6bb325ef08341480be4d8d0ee9c1434e8e9221feea8096&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3BPKJS%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOx3GS1goQskKJvZm8%2F7kQSJ%2BOVGwD7VESs7fFurV6SAiEAvjOcZPfUAiYtQmtP5l8u08%2Fl1crNIAwi43ZX2tjZlJIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRyIW7SSMlTNVL75yrcA%2BiJMJ8LXFk9HtDERZtnKdZliQmSvdIlPsU9dEA5EkjbiHb8FbZeQMGlHItwzwgyu8%2B7iq%2FqmQXjVGvqC22yUWypPwfiPJ%2BtwylQsmlHa%2FaxACr7ImR1tQpH%2BmVDMxgaMWEqOwzuWJGSfZS%2BrdwDJT%2FpakSqKFMtpiX3zRzeWsYMHr0S4O5ZxvIdmoDTNedLvRJHlZHlYbSFBkjWRRZuzEGZsBtmHyBlR4S8TUUjsEDhuy8LnJvOzeGvLZKA0UT8erfe7gzhmAYg%2B1rDAMiC9RtoZiP43PY%2FPAeZYKPIZcraCcubS6VyWudOlxouXyenHHZFHLWmg0uNshjaKTCaXC%2B6x%2FqzgHtwgaJKx5JF6V8xfic%2FW%2BLlEHX05gV4Gm9vkIiYWRHJYL6xSdywNxNviILcHzNMJshH7tDgdCjUxJL7n1Z1gQo0vUvYMCJnQtoS5KhSUcmpZTbiW696BgzemUm85yo0dZ6PIDd9ubjwXFqt5MmKmVGeAGE8GvnZsyL4xPZA9l5xWpi6MwXWKaacZuXMcPKLlD4n2NpEJZBOwWjp3HYIxYApDOM4fHukkmBvqy2Nnh%2FbOZ83AMvysCkbxLrP51sAV1pA48Uy%2B5eDpKQtC4pUSt8m0F46Az77MPXYy74GOqUBuf0m3NJSDLMpKli%2FMlVPzeM9bTwsO0f6HZCVF6OGB4SZnWkfWoKiVtR4x3qtbbTyRsXMahd%2FcjeGESXUm8fO6Sn4nhIKOW8GbLZpK5uO6SY68eDyxKcobgL683L4G59Ea7dDLsSMXpI7TjMrWqAavRUBB%2B8xcITPmplx71iH%2FB9NXQtiYNfL1oOqZWaSXw%2FN9Su8iJgUNFhvL0byDQvOql73bd04&X-Amz-Signature=eb969fee18ddfe9ee575abe5bcc7867ccadba4155ab329fecfdd1d0f5fcd520c&X-Amz-SignedHeaders=host&x-id=GetObject)
