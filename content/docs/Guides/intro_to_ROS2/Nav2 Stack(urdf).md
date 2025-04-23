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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZC2E5YC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFGCJi3adcOSO4%2FhX36fITXU5if4BRHbXTcig0L2exrRAiAjpxPZH2YUm%2FlpewLLvo0LQxL551PRPTIa3guzspyiKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQmlaxxCzo8nMXWNpKtwD3j5Lwo%2FdAcFI41ukzTMCfTniu9bIXcQzYDouVMVvwwCia4xo%2BJIwIEQUfNoWl06ImoN6btHqgL8AqztvygS6%2B1Yd6yFB3yzSWo3TIrOqIZ2R%2B%2B2TEBD52P2VtnkF75zeq82dG7BPO%2FPWX9IVW67cYvo9DN2fbL%2BbhcVgpQI8pc5csCX%2Flwq2xCnU61VBdWhZ3F6frXL%2FinG1hBuBsQLcN6FSGZtWUw616gB%2BHy0226qYqFQHcMM%2BSrgfeYScKpDa09qb01PfCtRA4JzCPebbn00THFTuQDeNEbZZMd49LDNGjprvsEXc4S53i5Aj9TNtwMowB49RXy8KSkGYUQ2iJiN6a0eW5HWQ4ITCozAbamNOXO0UAYn70OKDazs89SX7JiT0yFQ6nWS62elgpOIKG9aW8fFznvtr0SNnaNchBJ4JYKxCBieOQkxJAyV0DULjjr9VgcoduJYLixWYbH77fZxNEV1xHPs5PPe%2FTVDH1hrEYIbj%2FA5mF4sVsO%2FTI36%2B17pQTgVR%2BMa0KB8gUj0ey6F9cAp%2B9q5i7o0HNBJ0ymu%2FxB%2F0OW6RlOtdOe2PvR7mAT8zJRGh7nTBeF%2F9Q5x670v5sHGTyNNwduZYQVzG0DTNRlhnlfco9MzXlOcwwfKgwAY6pgGxv8PUwpfIEI%2Fu6AGv9UE4g8N%2BoENeQ5XGOgBSMcw9N2JI8K8HZ9B%2BUwNZwgxgCa8I9fBei5SAXF7p0kiTaOKCQ2at4uJS622ug063FXESOSWzVpOL1qkStpNSjr2Yd77y%2F2cUV0IkCr0EuWvoYZKb9Gj%2BtNPpXV5R%2B2OryewMNGC2edBNhcdL5gpM8CVnJK4j1%2F1R1BsDwL6yoHHLnmHA3Y4NTPFg&X-Amz-Signature=4446b2b43bb09f9f93d0e5f303f4dfdf74273585ad817d81b40bb1ed8c735562&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZC2E5YC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFGCJi3adcOSO4%2FhX36fITXU5if4BRHbXTcig0L2exrRAiAjpxPZH2YUm%2FlpewLLvo0LQxL551PRPTIa3guzspyiKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQmlaxxCzo8nMXWNpKtwD3j5Lwo%2FdAcFI41ukzTMCfTniu9bIXcQzYDouVMVvwwCia4xo%2BJIwIEQUfNoWl06ImoN6btHqgL8AqztvygS6%2B1Yd6yFB3yzSWo3TIrOqIZ2R%2B%2B2TEBD52P2VtnkF75zeq82dG7BPO%2FPWX9IVW67cYvo9DN2fbL%2BbhcVgpQI8pc5csCX%2Flwq2xCnU61VBdWhZ3F6frXL%2FinG1hBuBsQLcN6FSGZtWUw616gB%2BHy0226qYqFQHcMM%2BSrgfeYScKpDa09qb01PfCtRA4JzCPebbn00THFTuQDeNEbZZMd49LDNGjprvsEXc4S53i5Aj9TNtwMowB49RXy8KSkGYUQ2iJiN6a0eW5HWQ4ITCozAbamNOXO0UAYn70OKDazs89SX7JiT0yFQ6nWS62elgpOIKG9aW8fFznvtr0SNnaNchBJ4JYKxCBieOQkxJAyV0DULjjr9VgcoduJYLixWYbH77fZxNEV1xHPs5PPe%2FTVDH1hrEYIbj%2FA5mF4sVsO%2FTI36%2B17pQTgVR%2BMa0KB8gUj0ey6F9cAp%2B9q5i7o0HNBJ0ymu%2FxB%2F0OW6RlOtdOe2PvR7mAT8zJRGh7nTBeF%2F9Q5x670v5sHGTyNNwduZYQVzG0DTNRlhnlfco9MzXlOcwwfKgwAY6pgGxv8PUwpfIEI%2Fu6AGv9UE4g8N%2BoENeQ5XGOgBSMcw9N2JI8K8HZ9B%2BUwNZwgxgCa8I9fBei5SAXF7p0kiTaOKCQ2at4uJS622ug063FXESOSWzVpOL1qkStpNSjr2Yd77y%2F2cUV0IkCr0EuWvoYZKb9Gj%2BtNPpXV5R%2B2OryewMNGC2edBNhcdL5gpM8CVnJK4j1%2F1R1BsDwL6yoHHLnmHA3Y4NTPFg&X-Amz-Signature=eb50c0b15a06d5fb4f02e2ca236c6682eead40f0657fee2924beabda114a2934&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZC2E5YC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFGCJi3adcOSO4%2FhX36fITXU5if4BRHbXTcig0L2exrRAiAjpxPZH2YUm%2FlpewLLvo0LQxL551PRPTIa3guzspyiKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQmlaxxCzo8nMXWNpKtwD3j5Lwo%2FdAcFI41ukzTMCfTniu9bIXcQzYDouVMVvwwCia4xo%2BJIwIEQUfNoWl06ImoN6btHqgL8AqztvygS6%2B1Yd6yFB3yzSWo3TIrOqIZ2R%2B%2B2TEBD52P2VtnkF75zeq82dG7BPO%2FPWX9IVW67cYvo9DN2fbL%2BbhcVgpQI8pc5csCX%2Flwq2xCnU61VBdWhZ3F6frXL%2FinG1hBuBsQLcN6FSGZtWUw616gB%2BHy0226qYqFQHcMM%2BSrgfeYScKpDa09qb01PfCtRA4JzCPebbn00THFTuQDeNEbZZMd49LDNGjprvsEXc4S53i5Aj9TNtwMowB49RXy8KSkGYUQ2iJiN6a0eW5HWQ4ITCozAbamNOXO0UAYn70OKDazs89SX7JiT0yFQ6nWS62elgpOIKG9aW8fFznvtr0SNnaNchBJ4JYKxCBieOQkxJAyV0DULjjr9VgcoduJYLixWYbH77fZxNEV1xHPs5PPe%2FTVDH1hrEYIbj%2FA5mF4sVsO%2FTI36%2B17pQTgVR%2BMa0KB8gUj0ey6F9cAp%2B9q5i7o0HNBJ0ymu%2FxB%2F0OW6RlOtdOe2PvR7mAT8zJRGh7nTBeF%2F9Q5x670v5sHGTyNNwduZYQVzG0DTNRlhnlfco9MzXlOcwwfKgwAY6pgGxv8PUwpfIEI%2Fu6AGv9UE4g8N%2BoENeQ5XGOgBSMcw9N2JI8K8HZ9B%2BUwNZwgxgCa8I9fBei5SAXF7p0kiTaOKCQ2at4uJS622ug063FXESOSWzVpOL1qkStpNSjr2Yd77y%2F2cUV0IkCr0EuWvoYZKb9Gj%2BtNPpXV5R%2B2OryewMNGC2edBNhcdL5gpM8CVnJK4j1%2F1R1BsDwL6yoHHLnmHA3Y4NTPFg&X-Amz-Signature=ec56d23d4805408c729b98bc796e13fcb9d795979700c280fe52c3a5ab9f60a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZC2E5YC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFGCJi3adcOSO4%2FhX36fITXU5if4BRHbXTcig0L2exrRAiAjpxPZH2YUm%2FlpewLLvo0LQxL551PRPTIa3guzspyiKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQmlaxxCzo8nMXWNpKtwD3j5Lwo%2FdAcFI41ukzTMCfTniu9bIXcQzYDouVMVvwwCia4xo%2BJIwIEQUfNoWl06ImoN6btHqgL8AqztvygS6%2B1Yd6yFB3yzSWo3TIrOqIZ2R%2B%2B2TEBD52P2VtnkF75zeq82dG7BPO%2FPWX9IVW67cYvo9DN2fbL%2BbhcVgpQI8pc5csCX%2Flwq2xCnU61VBdWhZ3F6frXL%2FinG1hBuBsQLcN6FSGZtWUw616gB%2BHy0226qYqFQHcMM%2BSrgfeYScKpDa09qb01PfCtRA4JzCPebbn00THFTuQDeNEbZZMd49LDNGjprvsEXc4S53i5Aj9TNtwMowB49RXy8KSkGYUQ2iJiN6a0eW5HWQ4ITCozAbamNOXO0UAYn70OKDazs89SX7JiT0yFQ6nWS62elgpOIKG9aW8fFznvtr0SNnaNchBJ4JYKxCBieOQkxJAyV0DULjjr9VgcoduJYLixWYbH77fZxNEV1xHPs5PPe%2FTVDH1hrEYIbj%2FA5mF4sVsO%2FTI36%2B17pQTgVR%2BMa0KB8gUj0ey6F9cAp%2B9q5i7o0HNBJ0ymu%2FxB%2F0OW6RlOtdOe2PvR7mAT8zJRGh7nTBeF%2F9Q5x670v5sHGTyNNwduZYQVzG0DTNRlhnlfco9MzXlOcwwfKgwAY6pgGxv8PUwpfIEI%2Fu6AGv9UE4g8N%2BoENeQ5XGOgBSMcw9N2JI8K8HZ9B%2BUwNZwgxgCa8I9fBei5SAXF7p0kiTaOKCQ2at4uJS622ug063FXESOSWzVpOL1qkStpNSjr2Yd77y%2F2cUV0IkCr0EuWvoYZKb9Gj%2BtNPpXV5R%2B2OryewMNGC2edBNhcdL5gpM8CVnJK4j1%2F1R1BsDwL6yoHHLnmHA3Y4NTPFg&X-Amz-Signature=ddbcbaff0d08be11ac0f059d58b139be8fd11d316a30e93169d35b61a21c530b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZC2E5YC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFGCJi3adcOSO4%2FhX36fITXU5if4BRHbXTcig0L2exrRAiAjpxPZH2YUm%2FlpewLLvo0LQxL551PRPTIa3guzspyiKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQmlaxxCzo8nMXWNpKtwD3j5Lwo%2FdAcFI41ukzTMCfTniu9bIXcQzYDouVMVvwwCia4xo%2BJIwIEQUfNoWl06ImoN6btHqgL8AqztvygS6%2B1Yd6yFB3yzSWo3TIrOqIZ2R%2B%2B2TEBD52P2VtnkF75zeq82dG7BPO%2FPWX9IVW67cYvo9DN2fbL%2BbhcVgpQI8pc5csCX%2Flwq2xCnU61VBdWhZ3F6frXL%2FinG1hBuBsQLcN6FSGZtWUw616gB%2BHy0226qYqFQHcMM%2BSrgfeYScKpDa09qb01PfCtRA4JzCPebbn00THFTuQDeNEbZZMd49LDNGjprvsEXc4S53i5Aj9TNtwMowB49RXy8KSkGYUQ2iJiN6a0eW5HWQ4ITCozAbamNOXO0UAYn70OKDazs89SX7JiT0yFQ6nWS62elgpOIKG9aW8fFznvtr0SNnaNchBJ4JYKxCBieOQkxJAyV0DULjjr9VgcoduJYLixWYbH77fZxNEV1xHPs5PPe%2FTVDH1hrEYIbj%2FA5mF4sVsO%2FTI36%2B17pQTgVR%2BMa0KB8gUj0ey6F9cAp%2B9q5i7o0HNBJ0ymu%2FxB%2F0OW6RlOtdOe2PvR7mAT8zJRGh7nTBeF%2F9Q5x670v5sHGTyNNwduZYQVzG0DTNRlhnlfco9MzXlOcwwfKgwAY6pgGxv8PUwpfIEI%2Fu6AGv9UE4g8N%2BoENeQ5XGOgBSMcw9N2JI8K8HZ9B%2BUwNZwgxgCa8I9fBei5SAXF7p0kiTaOKCQ2at4uJS622ug063FXESOSWzVpOL1qkStpNSjr2Yd77y%2F2cUV0IkCr0EuWvoYZKb9Gj%2BtNPpXV5R%2B2OryewMNGC2edBNhcdL5gpM8CVnJK4j1%2F1R1BsDwL6yoHHLnmHA3Y4NTPFg&X-Amz-Signature=c058e2dc433bce02a24bdec95f447975d185d48094bca2a326621468d4c8a1e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZC2E5YC%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFGCJi3adcOSO4%2FhX36fITXU5if4BRHbXTcig0L2exrRAiAjpxPZH2YUm%2FlpewLLvo0LQxL551PRPTIa3guzspyiKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQmlaxxCzo8nMXWNpKtwD3j5Lwo%2FdAcFI41ukzTMCfTniu9bIXcQzYDouVMVvwwCia4xo%2BJIwIEQUfNoWl06ImoN6btHqgL8AqztvygS6%2B1Yd6yFB3yzSWo3TIrOqIZ2R%2B%2B2TEBD52P2VtnkF75zeq82dG7BPO%2FPWX9IVW67cYvo9DN2fbL%2BbhcVgpQI8pc5csCX%2Flwq2xCnU61VBdWhZ3F6frXL%2FinG1hBuBsQLcN6FSGZtWUw616gB%2BHy0226qYqFQHcMM%2BSrgfeYScKpDa09qb01PfCtRA4JzCPebbn00THFTuQDeNEbZZMd49LDNGjprvsEXc4S53i5Aj9TNtwMowB49RXy8KSkGYUQ2iJiN6a0eW5HWQ4ITCozAbamNOXO0UAYn70OKDazs89SX7JiT0yFQ6nWS62elgpOIKG9aW8fFznvtr0SNnaNchBJ4JYKxCBieOQkxJAyV0DULjjr9VgcoduJYLixWYbH77fZxNEV1xHPs5PPe%2FTVDH1hrEYIbj%2FA5mF4sVsO%2FTI36%2B17pQTgVR%2BMa0KB8gUj0ey6F9cAp%2B9q5i7o0HNBJ0ymu%2FxB%2F0OW6RlOtdOe2PvR7mAT8zJRGh7nTBeF%2F9Q5x670v5sHGTyNNwduZYQVzG0DTNRlhnlfco9MzXlOcwwfKgwAY6pgGxv8PUwpfIEI%2Fu6AGv9UE4g8N%2BoENeQ5XGOgBSMcw9N2JI8K8HZ9B%2BUwNZwgxgCa8I9fBei5SAXF7p0kiTaOKCQ2at4uJS622ug063FXESOSWzVpOL1qkStpNSjr2Yd77y%2F2cUV0IkCr0EuWvoYZKb9Gj%2BtNPpXV5R%2B2OryewMNGC2edBNhcdL5gpM8CVnJK4j1%2F1R1BsDwL6yoHHLnmHA3Y4NTPFg&X-Amz-Signature=635eb08a76931a4ce6087e9a81dc96572d91d44144117cefa590e33d54930658&X-Amz-SignedHeaders=host&x-id=GetObject)
