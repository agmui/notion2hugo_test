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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VQERTGW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDrlwi%2B%2Bw39TgpW1tMrFlPIwDErUT6qLGRWZGCKFTGI2wIgSyAEg5wvH7wPHJ9lQKTn1zCM7QI07xa3YBRg%2BMV2gdMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGp3L6I5DiilbWrYJCrcA%2Bl6OU4z5mlk%2BekSEFyQUEcS7dqtmd104Ns%2BTj1uf9ImhvxYt55PZaWVuZrDRcNvboN9zJC%2BW%2FzalNyx3RregJbvj2b3ustkGt4r4c7QdQyc9QgPe9OUt%2FsHfZnvkkveLbsn2d6r0XEJh%2BpEMbXeXeSryaZ6eeQkvTCxT%2BsMYs6xhZAHhyDpAHf%2FpOu6qlXmoGoBMIHk85jWCZIFJFKWVbTVV%2BjUbHKDhLBM1t4N6AzbqKFUUrml%2BG%2BmWnENPwR85lWtv%2BDsCt9IafDBPdKT8l%2FcMWc2uzO%2BwNEMQbbk0eRytx%2BAhkxoWb8SJ%2BhLnXnC%2BgLwdYNaYvHGcyvUYx8JnsKrecRRg%2F5ZIFUv62aZviZcXg%2Bmni2AfjYO4OYroQVetL3zMjzTh0xhZw05oziunu%2FfzGYJ2oQxdaWOm5SG2Q58OQqaW8zurenxyEZS%2BGSVeAXECkyKSqwvx2LtrlHsaYlXYA%2BkDxQff%2B61BmBqTE3bsHLze8pJWkoIrWxDNNxz3GLzHDDQU8SJ3aEnTu13bzIWL8FhmLkEOB772OJgqgOxMUkufpPaOjhbYJ8QD12%2BqdKT%2BC%2FQrQQgLm%2F%2Fk3l7njaW8K1Sta1h5RDaA%2FV1xUzVFRKZMSNrc7kS3LlYMJ6D9L0GOqUBwzW2i%2BKU8K%2Fcht%2BXw4KpA20whNsyecnqKr%2FHyNFVpbdlWZNJ8yYduWAfFUPMD3%2BikczxqvdYDBz5Os0Cx4XVpThkbyUAH9ZxXnHLXUf3SkBUfN7a%2FKXqGazVy3h%2BrN%2BpVIXzVK0N97T0Pkw10lSlG%2B1ErHR%2FoZ0d5AvSmppmm6Vv%2BkFza3hCuHInNswX5fxsxRGpLeZev71rJoHmtm1y9WM3edyF&X-Amz-Signature=1e6189df8739d436dcde09958d150a08bc6ab799853ce0dfca8b60eb1cf9d835&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VQERTGW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDrlwi%2B%2Bw39TgpW1tMrFlPIwDErUT6qLGRWZGCKFTGI2wIgSyAEg5wvH7wPHJ9lQKTn1zCM7QI07xa3YBRg%2BMV2gdMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGp3L6I5DiilbWrYJCrcA%2Bl6OU4z5mlk%2BekSEFyQUEcS7dqtmd104Ns%2BTj1uf9ImhvxYt55PZaWVuZrDRcNvboN9zJC%2BW%2FzalNyx3RregJbvj2b3ustkGt4r4c7QdQyc9QgPe9OUt%2FsHfZnvkkveLbsn2d6r0XEJh%2BpEMbXeXeSryaZ6eeQkvTCxT%2BsMYs6xhZAHhyDpAHf%2FpOu6qlXmoGoBMIHk85jWCZIFJFKWVbTVV%2BjUbHKDhLBM1t4N6AzbqKFUUrml%2BG%2BmWnENPwR85lWtv%2BDsCt9IafDBPdKT8l%2FcMWc2uzO%2BwNEMQbbk0eRytx%2BAhkxoWb8SJ%2BhLnXnC%2BgLwdYNaYvHGcyvUYx8JnsKrecRRg%2F5ZIFUv62aZviZcXg%2Bmni2AfjYO4OYroQVetL3zMjzTh0xhZw05oziunu%2FfzGYJ2oQxdaWOm5SG2Q58OQqaW8zurenxyEZS%2BGSVeAXECkyKSqwvx2LtrlHsaYlXYA%2BkDxQff%2B61BmBqTE3bsHLze8pJWkoIrWxDNNxz3GLzHDDQU8SJ3aEnTu13bzIWL8FhmLkEOB772OJgqgOxMUkufpPaOjhbYJ8QD12%2BqdKT%2BC%2FQrQQgLm%2F%2Fk3l7njaW8K1Sta1h5RDaA%2FV1xUzVFRKZMSNrc7kS3LlYMJ6D9L0GOqUBwzW2i%2BKU8K%2Fcht%2BXw4KpA20whNsyecnqKr%2FHyNFVpbdlWZNJ8yYduWAfFUPMD3%2BikczxqvdYDBz5Os0Cx4XVpThkbyUAH9ZxXnHLXUf3SkBUfN7a%2FKXqGazVy3h%2BrN%2BpVIXzVK0N97T0Pkw10lSlG%2B1ErHR%2FoZ0d5AvSmppmm6Vv%2BkFza3hCuHInNswX5fxsxRGpLeZev71rJoHmtm1y9WM3edyF&X-Amz-Signature=63f12c685b94d5d145a2454e2ff81de93103f9be5ba83351c91fdda5f2143b99&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VQERTGW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDrlwi%2B%2Bw39TgpW1tMrFlPIwDErUT6qLGRWZGCKFTGI2wIgSyAEg5wvH7wPHJ9lQKTn1zCM7QI07xa3YBRg%2BMV2gdMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGp3L6I5DiilbWrYJCrcA%2Bl6OU4z5mlk%2BekSEFyQUEcS7dqtmd104Ns%2BTj1uf9ImhvxYt55PZaWVuZrDRcNvboN9zJC%2BW%2FzalNyx3RregJbvj2b3ustkGt4r4c7QdQyc9QgPe9OUt%2FsHfZnvkkveLbsn2d6r0XEJh%2BpEMbXeXeSryaZ6eeQkvTCxT%2BsMYs6xhZAHhyDpAHf%2FpOu6qlXmoGoBMIHk85jWCZIFJFKWVbTVV%2BjUbHKDhLBM1t4N6AzbqKFUUrml%2BG%2BmWnENPwR85lWtv%2BDsCt9IafDBPdKT8l%2FcMWc2uzO%2BwNEMQbbk0eRytx%2BAhkxoWb8SJ%2BhLnXnC%2BgLwdYNaYvHGcyvUYx8JnsKrecRRg%2F5ZIFUv62aZviZcXg%2Bmni2AfjYO4OYroQVetL3zMjzTh0xhZw05oziunu%2FfzGYJ2oQxdaWOm5SG2Q58OQqaW8zurenxyEZS%2BGSVeAXECkyKSqwvx2LtrlHsaYlXYA%2BkDxQff%2B61BmBqTE3bsHLze8pJWkoIrWxDNNxz3GLzHDDQU8SJ3aEnTu13bzIWL8FhmLkEOB772OJgqgOxMUkufpPaOjhbYJ8QD12%2BqdKT%2BC%2FQrQQgLm%2F%2Fk3l7njaW8K1Sta1h5RDaA%2FV1xUzVFRKZMSNrc7kS3LlYMJ6D9L0GOqUBwzW2i%2BKU8K%2Fcht%2BXw4KpA20whNsyecnqKr%2FHyNFVpbdlWZNJ8yYduWAfFUPMD3%2BikczxqvdYDBz5Os0Cx4XVpThkbyUAH9ZxXnHLXUf3SkBUfN7a%2FKXqGazVy3h%2BrN%2BpVIXzVK0N97T0Pkw10lSlG%2B1ErHR%2FoZ0d5AvSmppmm6Vv%2BkFza3hCuHInNswX5fxsxRGpLeZev71rJoHmtm1y9WM3edyF&X-Amz-Signature=eeb5de27c204e3e497a01811280be43769095f3fb3c7d0360ae28ad854909f1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VQERTGW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDrlwi%2B%2Bw39TgpW1tMrFlPIwDErUT6qLGRWZGCKFTGI2wIgSyAEg5wvH7wPHJ9lQKTn1zCM7QI07xa3YBRg%2BMV2gdMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGp3L6I5DiilbWrYJCrcA%2Bl6OU4z5mlk%2BekSEFyQUEcS7dqtmd104Ns%2BTj1uf9ImhvxYt55PZaWVuZrDRcNvboN9zJC%2BW%2FzalNyx3RregJbvj2b3ustkGt4r4c7QdQyc9QgPe9OUt%2FsHfZnvkkveLbsn2d6r0XEJh%2BpEMbXeXeSryaZ6eeQkvTCxT%2BsMYs6xhZAHhyDpAHf%2FpOu6qlXmoGoBMIHk85jWCZIFJFKWVbTVV%2BjUbHKDhLBM1t4N6AzbqKFUUrml%2BG%2BmWnENPwR85lWtv%2BDsCt9IafDBPdKT8l%2FcMWc2uzO%2BwNEMQbbk0eRytx%2BAhkxoWb8SJ%2BhLnXnC%2BgLwdYNaYvHGcyvUYx8JnsKrecRRg%2F5ZIFUv62aZviZcXg%2Bmni2AfjYO4OYroQVetL3zMjzTh0xhZw05oziunu%2FfzGYJ2oQxdaWOm5SG2Q58OQqaW8zurenxyEZS%2BGSVeAXECkyKSqwvx2LtrlHsaYlXYA%2BkDxQff%2B61BmBqTE3bsHLze8pJWkoIrWxDNNxz3GLzHDDQU8SJ3aEnTu13bzIWL8FhmLkEOB772OJgqgOxMUkufpPaOjhbYJ8QD12%2BqdKT%2BC%2FQrQQgLm%2F%2Fk3l7njaW8K1Sta1h5RDaA%2FV1xUzVFRKZMSNrc7kS3LlYMJ6D9L0GOqUBwzW2i%2BKU8K%2Fcht%2BXw4KpA20whNsyecnqKr%2FHyNFVpbdlWZNJ8yYduWAfFUPMD3%2BikczxqvdYDBz5Os0Cx4XVpThkbyUAH9ZxXnHLXUf3SkBUfN7a%2FKXqGazVy3h%2BrN%2BpVIXzVK0N97T0Pkw10lSlG%2B1ErHR%2FoZ0d5AvSmppmm6Vv%2BkFza3hCuHInNswX5fxsxRGpLeZev71rJoHmtm1y9WM3edyF&X-Amz-Signature=e099d561bcb947000188e4047dcbb4d84c3d0d61a2d0333579907b2c3e16b720&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VQERTGW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDrlwi%2B%2Bw39TgpW1tMrFlPIwDErUT6qLGRWZGCKFTGI2wIgSyAEg5wvH7wPHJ9lQKTn1zCM7QI07xa3YBRg%2BMV2gdMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGp3L6I5DiilbWrYJCrcA%2Bl6OU4z5mlk%2BekSEFyQUEcS7dqtmd104Ns%2BTj1uf9ImhvxYt55PZaWVuZrDRcNvboN9zJC%2BW%2FzalNyx3RregJbvj2b3ustkGt4r4c7QdQyc9QgPe9OUt%2FsHfZnvkkveLbsn2d6r0XEJh%2BpEMbXeXeSryaZ6eeQkvTCxT%2BsMYs6xhZAHhyDpAHf%2FpOu6qlXmoGoBMIHk85jWCZIFJFKWVbTVV%2BjUbHKDhLBM1t4N6AzbqKFUUrml%2BG%2BmWnENPwR85lWtv%2BDsCt9IafDBPdKT8l%2FcMWc2uzO%2BwNEMQbbk0eRytx%2BAhkxoWb8SJ%2BhLnXnC%2BgLwdYNaYvHGcyvUYx8JnsKrecRRg%2F5ZIFUv62aZviZcXg%2Bmni2AfjYO4OYroQVetL3zMjzTh0xhZw05oziunu%2FfzGYJ2oQxdaWOm5SG2Q58OQqaW8zurenxyEZS%2BGSVeAXECkyKSqwvx2LtrlHsaYlXYA%2BkDxQff%2B61BmBqTE3bsHLze8pJWkoIrWxDNNxz3GLzHDDQU8SJ3aEnTu13bzIWL8FhmLkEOB772OJgqgOxMUkufpPaOjhbYJ8QD12%2BqdKT%2BC%2FQrQQgLm%2F%2Fk3l7njaW8K1Sta1h5RDaA%2FV1xUzVFRKZMSNrc7kS3LlYMJ6D9L0GOqUBwzW2i%2BKU8K%2Fcht%2BXw4KpA20whNsyecnqKr%2FHyNFVpbdlWZNJ8yYduWAfFUPMD3%2BikczxqvdYDBz5Os0Cx4XVpThkbyUAH9ZxXnHLXUf3SkBUfN7a%2FKXqGazVy3h%2BrN%2BpVIXzVK0N97T0Pkw10lSlG%2B1ErHR%2FoZ0d5AvSmppmm6Vv%2BkFza3hCuHInNswX5fxsxRGpLeZev71rJoHmtm1y9WM3edyF&X-Amz-Signature=4c16edef278a8de33f6c4e28ec1b6f85b62c1cc90c21fb6d8a497f44f8229e9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VQERTGW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDrlwi%2B%2Bw39TgpW1tMrFlPIwDErUT6qLGRWZGCKFTGI2wIgSyAEg5wvH7wPHJ9lQKTn1zCM7QI07xa3YBRg%2BMV2gdMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGp3L6I5DiilbWrYJCrcA%2Bl6OU4z5mlk%2BekSEFyQUEcS7dqtmd104Ns%2BTj1uf9ImhvxYt55PZaWVuZrDRcNvboN9zJC%2BW%2FzalNyx3RregJbvj2b3ustkGt4r4c7QdQyc9QgPe9OUt%2FsHfZnvkkveLbsn2d6r0XEJh%2BpEMbXeXeSryaZ6eeQkvTCxT%2BsMYs6xhZAHhyDpAHf%2FpOu6qlXmoGoBMIHk85jWCZIFJFKWVbTVV%2BjUbHKDhLBM1t4N6AzbqKFUUrml%2BG%2BmWnENPwR85lWtv%2BDsCt9IafDBPdKT8l%2FcMWc2uzO%2BwNEMQbbk0eRytx%2BAhkxoWb8SJ%2BhLnXnC%2BgLwdYNaYvHGcyvUYx8JnsKrecRRg%2F5ZIFUv62aZviZcXg%2Bmni2AfjYO4OYroQVetL3zMjzTh0xhZw05oziunu%2FfzGYJ2oQxdaWOm5SG2Q58OQqaW8zurenxyEZS%2BGSVeAXECkyKSqwvx2LtrlHsaYlXYA%2BkDxQff%2B61BmBqTE3bsHLze8pJWkoIrWxDNNxz3GLzHDDQU8SJ3aEnTu13bzIWL8FhmLkEOB772OJgqgOxMUkufpPaOjhbYJ8QD12%2BqdKT%2BC%2FQrQQgLm%2F%2Fk3l7njaW8K1Sta1h5RDaA%2FV1xUzVFRKZMSNrc7kS3LlYMJ6D9L0GOqUBwzW2i%2BKU8K%2Fcht%2BXw4KpA20whNsyecnqKr%2FHyNFVpbdlWZNJ8yYduWAfFUPMD3%2BikczxqvdYDBz5Os0Cx4XVpThkbyUAH9ZxXnHLXUf3SkBUfN7a%2FKXqGazVy3h%2BrN%2BpVIXzVK0N97T0Pkw10lSlG%2B1ErHR%2FoZ0d5AvSmppmm6Vv%2BkFza3hCuHInNswX5fxsxRGpLeZev71rJoHmtm1y9WM3edyF&X-Amz-Signature=381701dbdecec06a7716cc5ba4840358af20028d74f01b3338c20d31dbe97054&X-Amz-SignedHeaders=host&x-id=GetObject)
