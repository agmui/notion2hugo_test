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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFK4Y4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDYYZ6j4fsy1xwWE6nxc0Zx60socswnRJvloWu9899%2BGQIhAMFpF5PGwNm7HGPQVS31W1RIvOQG7D1vBxmBFkj2Wh0IKv8DCGwQABoMNjM3NDIzMTgzODA1IgzO2zcH1xU8v6Wq19Qq3AN4J8b%2BnOdtiQ4gT5dY7DXwzS6Szm9aXI4m5bEs7K6NagzuGSVRCfqWK1dJrR04pImicoKg%2BF2k2rVqCc0UYvHbh4Zsyqg9BoV35BNnXkHlP5q%2F2hgTloI9OYhok6IFXdxKZIwrkN5srAavLbsDhKSNRwPwokZmwRWHXa%2B69N5s0CvEbF8Ftb1iYmXmAnqRmmsM2uns2WU5xNkbAolxakas35ivKF71FHwk%2BgdBKsuYfA1xdHKckTBhJugF%2Bh09RTUMzbOEC6OLxnT9CeewK%2B%2Bf8VcPUbmgv6BHcNpq%2F8OcbpaYCd535JD7DguLdXjj%2FMWb1OGF2CHEBzYrl2evWz4lVy7hWNpsgJXRJLPxq7LUSpW3%2BrNBsT6SxCHKGNHzNclrpwW1H8jpZ3M9cw61E9MID3Je%2FJMBNx2a1lxYaAUv%2FXK15z0Y6urAe84I85WpifY0FZzAJd4THwqpsJMaBMqMVi41cmR9trkfqSvMNNTgLlXFaAFILglpwvPpVKYzhhxlOQ4KnEvjdwZ9CaIFxfkUZ0OXqK7on9QkkiAW2IO18NzJnVHt6V%2BBt2mHN3PavpaXZp1jwznaQigiaWIPgCHHgkfQXK626gzwEJ36IFKEEI%2Funo2TUbYZOARo3TDin%2FjCBjqkAQesSzZ6chITlq3Sbwu1zNm5kvKkgg6%2F9V8BXv3WMk4RDozPN2FYJIvV3w6z8t2a5BX7pQnhws4MvInXHFCebopS6sP5Lw5JHzcr6aVcc4uNsgepIIQ9%2BsaEH%2BGduYpMoq3u%2B3SAd2bAAgDFnVmzbn%2BmQI%2B3xW3dkNVH6e2U0%2F%2FeVrh5EvgiNdWZFJtRZfC9ChvmlOsPOgxp7Bm4hVAZDJZX1yTB&X-Amz-Signature=f79a5939b812a4757d9da598b3bbf805bb7a5180d8a519002b7b2b44152db627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFK4Y4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDYYZ6j4fsy1xwWE6nxc0Zx60socswnRJvloWu9899%2BGQIhAMFpF5PGwNm7HGPQVS31W1RIvOQG7D1vBxmBFkj2Wh0IKv8DCGwQABoMNjM3NDIzMTgzODA1IgzO2zcH1xU8v6Wq19Qq3AN4J8b%2BnOdtiQ4gT5dY7DXwzS6Szm9aXI4m5bEs7K6NagzuGSVRCfqWK1dJrR04pImicoKg%2BF2k2rVqCc0UYvHbh4Zsyqg9BoV35BNnXkHlP5q%2F2hgTloI9OYhok6IFXdxKZIwrkN5srAavLbsDhKSNRwPwokZmwRWHXa%2B69N5s0CvEbF8Ftb1iYmXmAnqRmmsM2uns2WU5xNkbAolxakas35ivKF71FHwk%2BgdBKsuYfA1xdHKckTBhJugF%2Bh09RTUMzbOEC6OLxnT9CeewK%2B%2Bf8VcPUbmgv6BHcNpq%2F8OcbpaYCd535JD7DguLdXjj%2FMWb1OGF2CHEBzYrl2evWz4lVy7hWNpsgJXRJLPxq7LUSpW3%2BrNBsT6SxCHKGNHzNclrpwW1H8jpZ3M9cw61E9MID3Je%2FJMBNx2a1lxYaAUv%2FXK15z0Y6urAe84I85WpifY0FZzAJd4THwqpsJMaBMqMVi41cmR9trkfqSvMNNTgLlXFaAFILglpwvPpVKYzhhxlOQ4KnEvjdwZ9CaIFxfkUZ0OXqK7on9QkkiAW2IO18NzJnVHt6V%2BBt2mHN3PavpaXZp1jwznaQigiaWIPgCHHgkfQXK626gzwEJ36IFKEEI%2Funo2TUbYZOARo3TDin%2FjCBjqkAQesSzZ6chITlq3Sbwu1zNm5kvKkgg6%2F9V8BXv3WMk4RDozPN2FYJIvV3w6z8t2a5BX7pQnhws4MvInXHFCebopS6sP5Lw5JHzcr6aVcc4uNsgepIIQ9%2BsaEH%2BGduYpMoq3u%2B3SAd2bAAgDFnVmzbn%2BmQI%2B3xW3dkNVH6e2U0%2F%2FeVrh5EvgiNdWZFJtRZfC9ChvmlOsPOgxp7Bm4hVAZDJZX1yTB&X-Amz-Signature=3a7ae5a82a671555a47e7a9d1e8f07dd18651b861fdc631ef0b66970b2b59805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFK4Y4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDYYZ6j4fsy1xwWE6nxc0Zx60socswnRJvloWu9899%2BGQIhAMFpF5PGwNm7HGPQVS31W1RIvOQG7D1vBxmBFkj2Wh0IKv8DCGwQABoMNjM3NDIzMTgzODA1IgzO2zcH1xU8v6Wq19Qq3AN4J8b%2BnOdtiQ4gT5dY7DXwzS6Szm9aXI4m5bEs7K6NagzuGSVRCfqWK1dJrR04pImicoKg%2BF2k2rVqCc0UYvHbh4Zsyqg9BoV35BNnXkHlP5q%2F2hgTloI9OYhok6IFXdxKZIwrkN5srAavLbsDhKSNRwPwokZmwRWHXa%2B69N5s0CvEbF8Ftb1iYmXmAnqRmmsM2uns2WU5xNkbAolxakas35ivKF71FHwk%2BgdBKsuYfA1xdHKckTBhJugF%2Bh09RTUMzbOEC6OLxnT9CeewK%2B%2Bf8VcPUbmgv6BHcNpq%2F8OcbpaYCd535JD7DguLdXjj%2FMWb1OGF2CHEBzYrl2evWz4lVy7hWNpsgJXRJLPxq7LUSpW3%2BrNBsT6SxCHKGNHzNclrpwW1H8jpZ3M9cw61E9MID3Je%2FJMBNx2a1lxYaAUv%2FXK15z0Y6urAe84I85WpifY0FZzAJd4THwqpsJMaBMqMVi41cmR9trkfqSvMNNTgLlXFaAFILglpwvPpVKYzhhxlOQ4KnEvjdwZ9CaIFxfkUZ0OXqK7on9QkkiAW2IO18NzJnVHt6V%2BBt2mHN3PavpaXZp1jwznaQigiaWIPgCHHgkfQXK626gzwEJ36IFKEEI%2Funo2TUbYZOARo3TDin%2FjCBjqkAQesSzZ6chITlq3Sbwu1zNm5kvKkgg6%2F9V8BXv3WMk4RDozPN2FYJIvV3w6z8t2a5BX7pQnhws4MvInXHFCebopS6sP5Lw5JHzcr6aVcc4uNsgepIIQ9%2BsaEH%2BGduYpMoq3u%2B3SAd2bAAgDFnVmzbn%2BmQI%2B3xW3dkNVH6e2U0%2F%2FeVrh5EvgiNdWZFJtRZfC9ChvmlOsPOgxp7Bm4hVAZDJZX1yTB&X-Amz-Signature=0dcb16ca39beedcb5809997b8fa565b4386723e8c2730d4927843131d99d3eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFK4Y4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDYYZ6j4fsy1xwWE6nxc0Zx60socswnRJvloWu9899%2BGQIhAMFpF5PGwNm7HGPQVS31W1RIvOQG7D1vBxmBFkj2Wh0IKv8DCGwQABoMNjM3NDIzMTgzODA1IgzO2zcH1xU8v6Wq19Qq3AN4J8b%2BnOdtiQ4gT5dY7DXwzS6Szm9aXI4m5bEs7K6NagzuGSVRCfqWK1dJrR04pImicoKg%2BF2k2rVqCc0UYvHbh4Zsyqg9BoV35BNnXkHlP5q%2F2hgTloI9OYhok6IFXdxKZIwrkN5srAavLbsDhKSNRwPwokZmwRWHXa%2B69N5s0CvEbF8Ftb1iYmXmAnqRmmsM2uns2WU5xNkbAolxakas35ivKF71FHwk%2BgdBKsuYfA1xdHKckTBhJugF%2Bh09RTUMzbOEC6OLxnT9CeewK%2B%2Bf8VcPUbmgv6BHcNpq%2F8OcbpaYCd535JD7DguLdXjj%2FMWb1OGF2CHEBzYrl2evWz4lVy7hWNpsgJXRJLPxq7LUSpW3%2BrNBsT6SxCHKGNHzNclrpwW1H8jpZ3M9cw61E9MID3Je%2FJMBNx2a1lxYaAUv%2FXK15z0Y6urAe84I85WpifY0FZzAJd4THwqpsJMaBMqMVi41cmR9trkfqSvMNNTgLlXFaAFILglpwvPpVKYzhhxlOQ4KnEvjdwZ9CaIFxfkUZ0OXqK7on9QkkiAW2IO18NzJnVHt6V%2BBt2mHN3PavpaXZp1jwznaQigiaWIPgCHHgkfQXK626gzwEJ36IFKEEI%2Funo2TUbYZOARo3TDin%2FjCBjqkAQesSzZ6chITlq3Sbwu1zNm5kvKkgg6%2F9V8BXv3WMk4RDozPN2FYJIvV3w6z8t2a5BX7pQnhws4MvInXHFCebopS6sP5Lw5JHzcr6aVcc4uNsgepIIQ9%2BsaEH%2BGduYpMoq3u%2B3SAd2bAAgDFnVmzbn%2BmQI%2B3xW3dkNVH6e2U0%2F%2FeVrh5EvgiNdWZFJtRZfC9ChvmlOsPOgxp7Bm4hVAZDJZX1yTB&X-Amz-Signature=54960015f3916afcd37626f0e642f6585a7a6c4d4837809cbd5139044e0f47a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFK4Y4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDYYZ6j4fsy1xwWE6nxc0Zx60socswnRJvloWu9899%2BGQIhAMFpF5PGwNm7HGPQVS31W1RIvOQG7D1vBxmBFkj2Wh0IKv8DCGwQABoMNjM3NDIzMTgzODA1IgzO2zcH1xU8v6Wq19Qq3AN4J8b%2BnOdtiQ4gT5dY7DXwzS6Szm9aXI4m5bEs7K6NagzuGSVRCfqWK1dJrR04pImicoKg%2BF2k2rVqCc0UYvHbh4Zsyqg9BoV35BNnXkHlP5q%2F2hgTloI9OYhok6IFXdxKZIwrkN5srAavLbsDhKSNRwPwokZmwRWHXa%2B69N5s0CvEbF8Ftb1iYmXmAnqRmmsM2uns2WU5xNkbAolxakas35ivKF71FHwk%2BgdBKsuYfA1xdHKckTBhJugF%2Bh09RTUMzbOEC6OLxnT9CeewK%2B%2Bf8VcPUbmgv6BHcNpq%2F8OcbpaYCd535JD7DguLdXjj%2FMWb1OGF2CHEBzYrl2evWz4lVy7hWNpsgJXRJLPxq7LUSpW3%2BrNBsT6SxCHKGNHzNclrpwW1H8jpZ3M9cw61E9MID3Je%2FJMBNx2a1lxYaAUv%2FXK15z0Y6urAe84I85WpifY0FZzAJd4THwqpsJMaBMqMVi41cmR9trkfqSvMNNTgLlXFaAFILglpwvPpVKYzhhxlOQ4KnEvjdwZ9CaIFxfkUZ0OXqK7on9QkkiAW2IO18NzJnVHt6V%2BBt2mHN3PavpaXZp1jwznaQigiaWIPgCHHgkfQXK626gzwEJ36IFKEEI%2Funo2TUbYZOARo3TDin%2FjCBjqkAQesSzZ6chITlq3Sbwu1zNm5kvKkgg6%2F9V8BXv3WMk4RDozPN2FYJIvV3w6z8t2a5BX7pQnhws4MvInXHFCebopS6sP5Lw5JHzcr6aVcc4uNsgepIIQ9%2BsaEH%2BGduYpMoq3u%2B3SAd2bAAgDFnVmzbn%2BmQI%2B3xW3dkNVH6e2U0%2F%2FeVrh5EvgiNdWZFJtRZfC9ChvmlOsPOgxp7Bm4hVAZDJZX1yTB&X-Amz-Signature=7748aca9c9ddd7e85d585f0c478af9b9499d0cde6a76bab0398e5373cdd47715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KFK4Y4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T034239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDYYZ6j4fsy1xwWE6nxc0Zx60socswnRJvloWu9899%2BGQIhAMFpF5PGwNm7HGPQVS31W1RIvOQG7D1vBxmBFkj2Wh0IKv8DCGwQABoMNjM3NDIzMTgzODA1IgzO2zcH1xU8v6Wq19Qq3AN4J8b%2BnOdtiQ4gT5dY7DXwzS6Szm9aXI4m5bEs7K6NagzuGSVRCfqWK1dJrR04pImicoKg%2BF2k2rVqCc0UYvHbh4Zsyqg9BoV35BNnXkHlP5q%2F2hgTloI9OYhok6IFXdxKZIwrkN5srAavLbsDhKSNRwPwokZmwRWHXa%2B69N5s0CvEbF8Ftb1iYmXmAnqRmmsM2uns2WU5xNkbAolxakas35ivKF71FHwk%2BgdBKsuYfA1xdHKckTBhJugF%2Bh09RTUMzbOEC6OLxnT9CeewK%2B%2Bf8VcPUbmgv6BHcNpq%2F8OcbpaYCd535JD7DguLdXjj%2FMWb1OGF2CHEBzYrl2evWz4lVy7hWNpsgJXRJLPxq7LUSpW3%2BrNBsT6SxCHKGNHzNclrpwW1H8jpZ3M9cw61E9MID3Je%2FJMBNx2a1lxYaAUv%2FXK15z0Y6urAe84I85WpifY0FZzAJd4THwqpsJMaBMqMVi41cmR9trkfqSvMNNTgLlXFaAFILglpwvPpVKYzhhxlOQ4KnEvjdwZ9CaIFxfkUZ0OXqK7on9QkkiAW2IO18NzJnVHt6V%2BBt2mHN3PavpaXZp1jwznaQigiaWIPgCHHgkfQXK626gzwEJ36IFKEEI%2Funo2TUbYZOARo3TDin%2FjCBjqkAQesSzZ6chITlq3Sbwu1zNm5kvKkgg6%2F9V8BXv3WMk4RDozPN2FYJIvV3w6z8t2a5BX7pQnhws4MvInXHFCebopS6sP5Lw5JHzcr6aVcc4uNsgepIIQ9%2BsaEH%2BGduYpMoq3u%2B3SAd2bAAgDFnVmzbn%2BmQI%2B3xW3dkNVH6e2U0%2F%2FeVrh5EvgiNdWZFJtRZfC9ChvmlOsPOgxp7Bm4hVAZDJZX1yTB&X-Amz-Signature=42c65ade6988e475c183ab6545a3a5c59f75c37561e8c25b8dbe89d5813f1780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
