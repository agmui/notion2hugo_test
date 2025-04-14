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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBSX4G6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxxyOsXaYAwaMiKsSBIheTJgHr5%2Bhent1udhxx69Tv6AIgX0Fvsht2Qh15TNjrmmmpT7f0AlP%2BcGrbCEefFn3%2F3uMq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEeMt7OuMbZFpNckmCrcA6CMxMc42CmC92TfBJ%2FwRAWgld7r%2F3j4vNIU52m6x%2BxMQZnzyj65UhrafKlMoyuDgHRANs%2FhLqfDT%2Fd2dEjkKwPViK9n5YvNsGQ0WsxeExskEAEiDY91PQu%2FqdA7AhL6svJSkFb5q%2BtuZzL8ndMUs6cjaXzGecXjWuaqIf68%2Bd3bGPHLR%2FfSJncCUT4Dwc5EKV%2BXnFkI6sGxtbiFHE9LgY95TNlKQxTHIm2cxd0UnnuPZKhMGY8NFIdNd1grEmCPdveGRg8qRWrXROnHWEpaBycrGAKH7CZK3g3ZLp0P0wflrv9dCo6%2B9Y8QUumbW5Kvw06HcPP%2FHZp2AxHoK5mbOTL0T9l%2B8GvScMNZrr1EfyHzyg9nMI3VicPWcUul7dToQwW4dHOZofWg%2BJXxEAlkiSLa%2BUQIjuR%2BPE%2FoR%2FsWXGyiWQEcxb5%2BivytjFFEsqW8ejsF%2BE47yjDb7NbccSstmr7EbMWGaxwcXiHRY%2FR8zg9Dvzek%2F5yA95wgJ6jLIAEZ7lpSd1hqOx1XvKT93d%2FRqoQpJpWExGuXdkVbne6ricGPfgyvwzLfhT3FX6lw9Kk4XkX9qyxG3902cZzUioRWtVuOl8JlYuIXha4Vc%2BlC2icuBDNZY%2B7K1l58QSmWMIeD9r8GOqUB49rxxn%2BfnfirlxMeZ7fwmbAheAvZcoiNfr5F5HnqWVEeh%2F6L4Q7qJHWGrWG%2FWpUOwkQXNEO5GX2y19htRnG5d7V4vD%2BiH6rjkqwLi2kU5UEGmZW9gnTmq73xaevTYn6SNXpKQbi%2BwEkVVmSqZbshAhPU8dZOs5bPcoNQk54Eb6%2FhcQIb5SokYOtE3NNQb3w8luOL%2BP%2B%2FwSe2ZiaMlaGjUj7adaPs&X-Amz-Signature=b10b2f325fab1f62c4a994f4fb09ee18034fd14b8522403e942e9d21771dc272&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBSX4G6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxxyOsXaYAwaMiKsSBIheTJgHr5%2Bhent1udhxx69Tv6AIgX0Fvsht2Qh15TNjrmmmpT7f0AlP%2BcGrbCEefFn3%2F3uMq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEeMt7OuMbZFpNckmCrcA6CMxMc42CmC92TfBJ%2FwRAWgld7r%2F3j4vNIU52m6x%2BxMQZnzyj65UhrafKlMoyuDgHRANs%2FhLqfDT%2Fd2dEjkKwPViK9n5YvNsGQ0WsxeExskEAEiDY91PQu%2FqdA7AhL6svJSkFb5q%2BtuZzL8ndMUs6cjaXzGecXjWuaqIf68%2Bd3bGPHLR%2FfSJncCUT4Dwc5EKV%2BXnFkI6sGxtbiFHE9LgY95TNlKQxTHIm2cxd0UnnuPZKhMGY8NFIdNd1grEmCPdveGRg8qRWrXROnHWEpaBycrGAKH7CZK3g3ZLp0P0wflrv9dCo6%2B9Y8QUumbW5Kvw06HcPP%2FHZp2AxHoK5mbOTL0T9l%2B8GvScMNZrr1EfyHzyg9nMI3VicPWcUul7dToQwW4dHOZofWg%2BJXxEAlkiSLa%2BUQIjuR%2BPE%2FoR%2FsWXGyiWQEcxb5%2BivytjFFEsqW8ejsF%2BE47yjDb7NbccSstmr7EbMWGaxwcXiHRY%2FR8zg9Dvzek%2F5yA95wgJ6jLIAEZ7lpSd1hqOx1XvKT93d%2FRqoQpJpWExGuXdkVbne6ricGPfgyvwzLfhT3FX6lw9Kk4XkX9qyxG3902cZzUioRWtVuOl8JlYuIXha4Vc%2BlC2icuBDNZY%2B7K1l58QSmWMIeD9r8GOqUB49rxxn%2BfnfirlxMeZ7fwmbAheAvZcoiNfr5F5HnqWVEeh%2F6L4Q7qJHWGrWG%2FWpUOwkQXNEO5GX2y19htRnG5d7V4vD%2BiH6rjkqwLi2kU5UEGmZW9gnTmq73xaevTYn6SNXpKQbi%2BwEkVVmSqZbshAhPU8dZOs5bPcoNQk54Eb6%2FhcQIb5SokYOtE3NNQb3w8luOL%2BP%2B%2FwSe2ZiaMlaGjUj7adaPs&X-Amz-Signature=3ce56195a7e805896a8446efdf0f223f4073eede6abfb244ff504fa4783e8454&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBSX4G6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxxyOsXaYAwaMiKsSBIheTJgHr5%2Bhent1udhxx69Tv6AIgX0Fvsht2Qh15TNjrmmmpT7f0AlP%2BcGrbCEefFn3%2F3uMq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEeMt7OuMbZFpNckmCrcA6CMxMc42CmC92TfBJ%2FwRAWgld7r%2F3j4vNIU52m6x%2BxMQZnzyj65UhrafKlMoyuDgHRANs%2FhLqfDT%2Fd2dEjkKwPViK9n5YvNsGQ0WsxeExskEAEiDY91PQu%2FqdA7AhL6svJSkFb5q%2BtuZzL8ndMUs6cjaXzGecXjWuaqIf68%2Bd3bGPHLR%2FfSJncCUT4Dwc5EKV%2BXnFkI6sGxtbiFHE9LgY95TNlKQxTHIm2cxd0UnnuPZKhMGY8NFIdNd1grEmCPdveGRg8qRWrXROnHWEpaBycrGAKH7CZK3g3ZLp0P0wflrv9dCo6%2B9Y8QUumbW5Kvw06HcPP%2FHZp2AxHoK5mbOTL0T9l%2B8GvScMNZrr1EfyHzyg9nMI3VicPWcUul7dToQwW4dHOZofWg%2BJXxEAlkiSLa%2BUQIjuR%2BPE%2FoR%2FsWXGyiWQEcxb5%2BivytjFFEsqW8ejsF%2BE47yjDb7NbccSstmr7EbMWGaxwcXiHRY%2FR8zg9Dvzek%2F5yA95wgJ6jLIAEZ7lpSd1hqOx1XvKT93d%2FRqoQpJpWExGuXdkVbne6ricGPfgyvwzLfhT3FX6lw9Kk4XkX9qyxG3902cZzUioRWtVuOl8JlYuIXha4Vc%2BlC2icuBDNZY%2B7K1l58QSmWMIeD9r8GOqUB49rxxn%2BfnfirlxMeZ7fwmbAheAvZcoiNfr5F5HnqWVEeh%2F6L4Q7qJHWGrWG%2FWpUOwkQXNEO5GX2y19htRnG5d7V4vD%2BiH6rjkqwLi2kU5UEGmZW9gnTmq73xaevTYn6SNXpKQbi%2BwEkVVmSqZbshAhPU8dZOs5bPcoNQk54Eb6%2FhcQIb5SokYOtE3NNQb3w8luOL%2BP%2B%2FwSe2ZiaMlaGjUj7adaPs&X-Amz-Signature=3633e0163ebfc28c3675906e3a4c06a4c435044407fd2f15fba301c24fcfea4d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBSX4G6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxxyOsXaYAwaMiKsSBIheTJgHr5%2Bhent1udhxx69Tv6AIgX0Fvsht2Qh15TNjrmmmpT7f0AlP%2BcGrbCEefFn3%2F3uMq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEeMt7OuMbZFpNckmCrcA6CMxMc42CmC92TfBJ%2FwRAWgld7r%2F3j4vNIU52m6x%2BxMQZnzyj65UhrafKlMoyuDgHRANs%2FhLqfDT%2Fd2dEjkKwPViK9n5YvNsGQ0WsxeExskEAEiDY91PQu%2FqdA7AhL6svJSkFb5q%2BtuZzL8ndMUs6cjaXzGecXjWuaqIf68%2Bd3bGPHLR%2FfSJncCUT4Dwc5EKV%2BXnFkI6sGxtbiFHE9LgY95TNlKQxTHIm2cxd0UnnuPZKhMGY8NFIdNd1grEmCPdveGRg8qRWrXROnHWEpaBycrGAKH7CZK3g3ZLp0P0wflrv9dCo6%2B9Y8QUumbW5Kvw06HcPP%2FHZp2AxHoK5mbOTL0T9l%2B8GvScMNZrr1EfyHzyg9nMI3VicPWcUul7dToQwW4dHOZofWg%2BJXxEAlkiSLa%2BUQIjuR%2BPE%2FoR%2FsWXGyiWQEcxb5%2BivytjFFEsqW8ejsF%2BE47yjDb7NbccSstmr7EbMWGaxwcXiHRY%2FR8zg9Dvzek%2F5yA95wgJ6jLIAEZ7lpSd1hqOx1XvKT93d%2FRqoQpJpWExGuXdkVbne6ricGPfgyvwzLfhT3FX6lw9Kk4XkX9qyxG3902cZzUioRWtVuOl8JlYuIXha4Vc%2BlC2icuBDNZY%2B7K1l58QSmWMIeD9r8GOqUB49rxxn%2BfnfirlxMeZ7fwmbAheAvZcoiNfr5F5HnqWVEeh%2F6L4Q7qJHWGrWG%2FWpUOwkQXNEO5GX2y19htRnG5d7V4vD%2BiH6rjkqwLi2kU5UEGmZW9gnTmq73xaevTYn6SNXpKQbi%2BwEkVVmSqZbshAhPU8dZOs5bPcoNQk54Eb6%2FhcQIb5SokYOtE3NNQb3w8luOL%2BP%2B%2FwSe2ZiaMlaGjUj7adaPs&X-Amz-Signature=6d0a047ba1b050927c1915e4c1a298775fe7fdfe71ef03012c69c6e55d0aa214&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBSX4G6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxxyOsXaYAwaMiKsSBIheTJgHr5%2Bhent1udhxx69Tv6AIgX0Fvsht2Qh15TNjrmmmpT7f0AlP%2BcGrbCEefFn3%2F3uMq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEeMt7OuMbZFpNckmCrcA6CMxMc42CmC92TfBJ%2FwRAWgld7r%2F3j4vNIU52m6x%2BxMQZnzyj65UhrafKlMoyuDgHRANs%2FhLqfDT%2Fd2dEjkKwPViK9n5YvNsGQ0WsxeExskEAEiDY91PQu%2FqdA7AhL6svJSkFb5q%2BtuZzL8ndMUs6cjaXzGecXjWuaqIf68%2Bd3bGPHLR%2FfSJncCUT4Dwc5EKV%2BXnFkI6sGxtbiFHE9LgY95TNlKQxTHIm2cxd0UnnuPZKhMGY8NFIdNd1grEmCPdveGRg8qRWrXROnHWEpaBycrGAKH7CZK3g3ZLp0P0wflrv9dCo6%2B9Y8QUumbW5Kvw06HcPP%2FHZp2AxHoK5mbOTL0T9l%2B8GvScMNZrr1EfyHzyg9nMI3VicPWcUul7dToQwW4dHOZofWg%2BJXxEAlkiSLa%2BUQIjuR%2BPE%2FoR%2FsWXGyiWQEcxb5%2BivytjFFEsqW8ejsF%2BE47yjDb7NbccSstmr7EbMWGaxwcXiHRY%2FR8zg9Dvzek%2F5yA95wgJ6jLIAEZ7lpSd1hqOx1XvKT93d%2FRqoQpJpWExGuXdkVbne6ricGPfgyvwzLfhT3FX6lw9Kk4XkX9qyxG3902cZzUioRWtVuOl8JlYuIXha4Vc%2BlC2icuBDNZY%2B7K1l58QSmWMIeD9r8GOqUB49rxxn%2BfnfirlxMeZ7fwmbAheAvZcoiNfr5F5HnqWVEeh%2F6L4Q7qJHWGrWG%2FWpUOwkQXNEO5GX2y19htRnG5d7V4vD%2BiH6rjkqwLi2kU5UEGmZW9gnTmq73xaevTYn6SNXpKQbi%2BwEkVVmSqZbshAhPU8dZOs5bPcoNQk54Eb6%2FhcQIb5SokYOtE3NNQb3w8luOL%2BP%2B%2FwSe2ZiaMlaGjUj7adaPs&X-Amz-Signature=9cf1563683c1427131e4a716e48155f7a07c5eb967e07b0b88cf2720da5ffa02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUBSX4G6%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxxyOsXaYAwaMiKsSBIheTJgHr5%2Bhent1udhxx69Tv6AIgX0Fvsht2Qh15TNjrmmmpT7f0AlP%2BcGrbCEefFn3%2F3uMq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDEeMt7OuMbZFpNckmCrcA6CMxMc42CmC92TfBJ%2FwRAWgld7r%2F3j4vNIU52m6x%2BxMQZnzyj65UhrafKlMoyuDgHRANs%2FhLqfDT%2Fd2dEjkKwPViK9n5YvNsGQ0WsxeExskEAEiDY91PQu%2FqdA7AhL6svJSkFb5q%2BtuZzL8ndMUs6cjaXzGecXjWuaqIf68%2Bd3bGPHLR%2FfSJncCUT4Dwc5EKV%2BXnFkI6sGxtbiFHE9LgY95TNlKQxTHIm2cxd0UnnuPZKhMGY8NFIdNd1grEmCPdveGRg8qRWrXROnHWEpaBycrGAKH7CZK3g3ZLp0P0wflrv9dCo6%2B9Y8QUumbW5Kvw06HcPP%2FHZp2AxHoK5mbOTL0T9l%2B8GvScMNZrr1EfyHzyg9nMI3VicPWcUul7dToQwW4dHOZofWg%2BJXxEAlkiSLa%2BUQIjuR%2BPE%2FoR%2FsWXGyiWQEcxb5%2BivytjFFEsqW8ejsF%2BE47yjDb7NbccSstmr7EbMWGaxwcXiHRY%2FR8zg9Dvzek%2F5yA95wgJ6jLIAEZ7lpSd1hqOx1XvKT93d%2FRqoQpJpWExGuXdkVbne6ricGPfgyvwzLfhT3FX6lw9Kk4XkX9qyxG3902cZzUioRWtVuOl8JlYuIXha4Vc%2BlC2icuBDNZY%2B7K1l58QSmWMIeD9r8GOqUB49rxxn%2BfnfirlxMeZ7fwmbAheAvZcoiNfr5F5HnqWVEeh%2F6L4Q7qJHWGrWG%2FWpUOwkQXNEO5GX2y19htRnG5d7V4vD%2BiH6rjkqwLi2kU5UEGmZW9gnTmq73xaevTYn6SNXpKQbi%2BwEkVVmSqZbshAhPU8dZOs5bPcoNQk54Eb6%2FhcQIb5SokYOtE3NNQb3w8luOL%2BP%2B%2FwSe2ZiaMlaGjUj7adaPs&X-Amz-Signature=07493418dd9dec0cda1ce053d4ef58798bdfbc5a481abc404cdb31298a6efd7d&X-Amz-SignedHeaders=host&x-id=GetObject)
