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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GV2O3C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDEPgId%2Fg0XPXwSUDJ2tXXG%2Fsi1UNfn6OOOpsxNV78TaAIgbgYHMUPKxBCwrBpqf0V0ErgI1XpiZ6HWq%2FXxBy8U4bMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCu2eolvgqOEAQ6HpCrcA3yrvUXubcnteJiY1t6YT1hMI9shQor2Cfk5gh8nYJUzx7HGE69v70HMyP0Icd97sQmDD%2B11egNjKdWDX%2FFg%2F00%2ByCm6n65CyNNd88C5objHJ5hJhOY%2Fv94QWH0386nvtLbmD90QODyZRGJSGi4ZIFgtRl8jqdO4TqjCMZ0lIWWilT%2BH7gCA1SbWuHfcPUGUtXWHXtSjqVTr9q5n4ijNlZv2Lv1QCYHh%2BWCGLIINrojvLayMvwaRPL1i%2FTv1JX4OeZECV2NUAgpKIwYhNTHKkGHKxRbd%2FdjjlfJsnpO87p3PkC2cY4%2F8SaUC0e2kedbNA8vcWKcCgS3snDNpEQk8zqkn1imN78Jp0nnLFRf4BgYMJp8DF8UNWLAJgskMPEgBxnbeJoCUhP5agWqnu%2B%2BHv3nPvdMbM7oG3tq6Ge5laMQvWtAt7ufXL%2BJATsHYmhoyyPFLlkZjQbL6J7moYfDsruIPcN2YtQn5Wf1j4HbF87lfuFL92ccWuRmxwpyBJ0Bt0ryhIGrJvm9pKeA3clOlEOyZh0Rkh939516lzuERSN6XaceQCNsMRRxQLxZsiZFs6xtw38kJlIAGKNQuARu7UoCU%2FG9DzRN85aOh8GPxaXk8VaZ9EJ0eKMRkWwn%2FMN709sIGOqUBi9FE9PEPoJ6dkyn7MLZjXdxmRUSOchdypP8%2BdcJxmQ8M%2BK5zW%2Bbu7ylNISP37cRxwAMG25%2BstttPSWfDcTPZDVKflHt14Q5YvNPOL9rJmY5Wk3VTjCXllaiv0y9WuMLPf06D%2BkahMYpz25YGgAUC5DWqSFz87mzXg73L52kTZ543C0pBA%2FdBT%2B7edU2uyGzGwNN5tgxdnAX5V93xiURDxkrkcR8o&X-Amz-Signature=f9118e360e89239d7e1747997071216e35d457191efa92e56b4195f48eebd0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GV2O3C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDEPgId%2Fg0XPXwSUDJ2tXXG%2Fsi1UNfn6OOOpsxNV78TaAIgbgYHMUPKxBCwrBpqf0V0ErgI1XpiZ6HWq%2FXxBy8U4bMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCu2eolvgqOEAQ6HpCrcA3yrvUXubcnteJiY1t6YT1hMI9shQor2Cfk5gh8nYJUzx7HGE69v70HMyP0Icd97sQmDD%2B11egNjKdWDX%2FFg%2F00%2ByCm6n65CyNNd88C5objHJ5hJhOY%2Fv94QWH0386nvtLbmD90QODyZRGJSGi4ZIFgtRl8jqdO4TqjCMZ0lIWWilT%2BH7gCA1SbWuHfcPUGUtXWHXtSjqVTr9q5n4ijNlZv2Lv1QCYHh%2BWCGLIINrojvLayMvwaRPL1i%2FTv1JX4OeZECV2NUAgpKIwYhNTHKkGHKxRbd%2FdjjlfJsnpO87p3PkC2cY4%2F8SaUC0e2kedbNA8vcWKcCgS3snDNpEQk8zqkn1imN78Jp0nnLFRf4BgYMJp8DF8UNWLAJgskMPEgBxnbeJoCUhP5agWqnu%2B%2BHv3nPvdMbM7oG3tq6Ge5laMQvWtAt7ufXL%2BJATsHYmhoyyPFLlkZjQbL6J7moYfDsruIPcN2YtQn5Wf1j4HbF87lfuFL92ccWuRmxwpyBJ0Bt0ryhIGrJvm9pKeA3clOlEOyZh0Rkh939516lzuERSN6XaceQCNsMRRxQLxZsiZFs6xtw38kJlIAGKNQuARu7UoCU%2FG9DzRN85aOh8GPxaXk8VaZ9EJ0eKMRkWwn%2FMN709sIGOqUBi9FE9PEPoJ6dkyn7MLZjXdxmRUSOchdypP8%2BdcJxmQ8M%2BK5zW%2Bbu7ylNISP37cRxwAMG25%2BstttPSWfDcTPZDVKflHt14Q5YvNPOL9rJmY5Wk3VTjCXllaiv0y9WuMLPf06D%2BkahMYpz25YGgAUC5DWqSFz87mzXg73L52kTZ543C0pBA%2FdBT%2B7edU2uyGzGwNN5tgxdnAX5V93xiURDxkrkcR8o&X-Amz-Signature=0130cfb7d970fbd816362c5bf54414efe9c83aadb3101f03e73334583a6bd348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GV2O3C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDEPgId%2Fg0XPXwSUDJ2tXXG%2Fsi1UNfn6OOOpsxNV78TaAIgbgYHMUPKxBCwrBpqf0V0ErgI1XpiZ6HWq%2FXxBy8U4bMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCu2eolvgqOEAQ6HpCrcA3yrvUXubcnteJiY1t6YT1hMI9shQor2Cfk5gh8nYJUzx7HGE69v70HMyP0Icd97sQmDD%2B11egNjKdWDX%2FFg%2F00%2ByCm6n65CyNNd88C5objHJ5hJhOY%2Fv94QWH0386nvtLbmD90QODyZRGJSGi4ZIFgtRl8jqdO4TqjCMZ0lIWWilT%2BH7gCA1SbWuHfcPUGUtXWHXtSjqVTr9q5n4ijNlZv2Lv1QCYHh%2BWCGLIINrojvLayMvwaRPL1i%2FTv1JX4OeZECV2NUAgpKIwYhNTHKkGHKxRbd%2FdjjlfJsnpO87p3PkC2cY4%2F8SaUC0e2kedbNA8vcWKcCgS3snDNpEQk8zqkn1imN78Jp0nnLFRf4BgYMJp8DF8UNWLAJgskMPEgBxnbeJoCUhP5agWqnu%2B%2BHv3nPvdMbM7oG3tq6Ge5laMQvWtAt7ufXL%2BJATsHYmhoyyPFLlkZjQbL6J7moYfDsruIPcN2YtQn5Wf1j4HbF87lfuFL92ccWuRmxwpyBJ0Bt0ryhIGrJvm9pKeA3clOlEOyZh0Rkh939516lzuERSN6XaceQCNsMRRxQLxZsiZFs6xtw38kJlIAGKNQuARu7UoCU%2FG9DzRN85aOh8GPxaXk8VaZ9EJ0eKMRkWwn%2FMN709sIGOqUBi9FE9PEPoJ6dkyn7MLZjXdxmRUSOchdypP8%2BdcJxmQ8M%2BK5zW%2Bbu7ylNISP37cRxwAMG25%2BstttPSWfDcTPZDVKflHt14Q5YvNPOL9rJmY5Wk3VTjCXllaiv0y9WuMLPf06D%2BkahMYpz25YGgAUC5DWqSFz87mzXg73L52kTZ543C0pBA%2FdBT%2B7edU2uyGzGwNN5tgxdnAX5V93xiURDxkrkcR8o&X-Amz-Signature=aaad6d80205b08fffa4eb0340eca87a17da73b7af2ff59ea5885ca403688e2ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GV2O3C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDEPgId%2Fg0XPXwSUDJ2tXXG%2Fsi1UNfn6OOOpsxNV78TaAIgbgYHMUPKxBCwrBpqf0V0ErgI1XpiZ6HWq%2FXxBy8U4bMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCu2eolvgqOEAQ6HpCrcA3yrvUXubcnteJiY1t6YT1hMI9shQor2Cfk5gh8nYJUzx7HGE69v70HMyP0Icd97sQmDD%2B11egNjKdWDX%2FFg%2F00%2ByCm6n65CyNNd88C5objHJ5hJhOY%2Fv94QWH0386nvtLbmD90QODyZRGJSGi4ZIFgtRl8jqdO4TqjCMZ0lIWWilT%2BH7gCA1SbWuHfcPUGUtXWHXtSjqVTr9q5n4ijNlZv2Lv1QCYHh%2BWCGLIINrojvLayMvwaRPL1i%2FTv1JX4OeZECV2NUAgpKIwYhNTHKkGHKxRbd%2FdjjlfJsnpO87p3PkC2cY4%2F8SaUC0e2kedbNA8vcWKcCgS3snDNpEQk8zqkn1imN78Jp0nnLFRf4BgYMJp8DF8UNWLAJgskMPEgBxnbeJoCUhP5agWqnu%2B%2BHv3nPvdMbM7oG3tq6Ge5laMQvWtAt7ufXL%2BJATsHYmhoyyPFLlkZjQbL6J7moYfDsruIPcN2YtQn5Wf1j4HbF87lfuFL92ccWuRmxwpyBJ0Bt0ryhIGrJvm9pKeA3clOlEOyZh0Rkh939516lzuERSN6XaceQCNsMRRxQLxZsiZFs6xtw38kJlIAGKNQuARu7UoCU%2FG9DzRN85aOh8GPxaXk8VaZ9EJ0eKMRkWwn%2FMN709sIGOqUBi9FE9PEPoJ6dkyn7MLZjXdxmRUSOchdypP8%2BdcJxmQ8M%2BK5zW%2Bbu7ylNISP37cRxwAMG25%2BstttPSWfDcTPZDVKflHt14Q5YvNPOL9rJmY5Wk3VTjCXllaiv0y9WuMLPf06D%2BkahMYpz25YGgAUC5DWqSFz87mzXg73L52kTZ543C0pBA%2FdBT%2B7edU2uyGzGwNN5tgxdnAX5V93xiURDxkrkcR8o&X-Amz-Signature=b61a29affdcc410c338f60ca6c41cbce6d5ca2c937863e588fac4bb3429ab668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GV2O3C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDEPgId%2Fg0XPXwSUDJ2tXXG%2Fsi1UNfn6OOOpsxNV78TaAIgbgYHMUPKxBCwrBpqf0V0ErgI1XpiZ6HWq%2FXxBy8U4bMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCu2eolvgqOEAQ6HpCrcA3yrvUXubcnteJiY1t6YT1hMI9shQor2Cfk5gh8nYJUzx7HGE69v70HMyP0Icd97sQmDD%2B11egNjKdWDX%2FFg%2F00%2ByCm6n65CyNNd88C5objHJ5hJhOY%2Fv94QWH0386nvtLbmD90QODyZRGJSGi4ZIFgtRl8jqdO4TqjCMZ0lIWWilT%2BH7gCA1SbWuHfcPUGUtXWHXtSjqVTr9q5n4ijNlZv2Lv1QCYHh%2BWCGLIINrojvLayMvwaRPL1i%2FTv1JX4OeZECV2NUAgpKIwYhNTHKkGHKxRbd%2FdjjlfJsnpO87p3PkC2cY4%2F8SaUC0e2kedbNA8vcWKcCgS3snDNpEQk8zqkn1imN78Jp0nnLFRf4BgYMJp8DF8UNWLAJgskMPEgBxnbeJoCUhP5agWqnu%2B%2BHv3nPvdMbM7oG3tq6Ge5laMQvWtAt7ufXL%2BJATsHYmhoyyPFLlkZjQbL6J7moYfDsruIPcN2YtQn5Wf1j4HbF87lfuFL92ccWuRmxwpyBJ0Bt0ryhIGrJvm9pKeA3clOlEOyZh0Rkh939516lzuERSN6XaceQCNsMRRxQLxZsiZFs6xtw38kJlIAGKNQuARu7UoCU%2FG9DzRN85aOh8GPxaXk8VaZ9EJ0eKMRkWwn%2FMN709sIGOqUBi9FE9PEPoJ6dkyn7MLZjXdxmRUSOchdypP8%2BdcJxmQ8M%2BK5zW%2Bbu7ylNISP37cRxwAMG25%2BstttPSWfDcTPZDVKflHt14Q5YvNPOL9rJmY5Wk3VTjCXllaiv0y9WuMLPf06D%2BkahMYpz25YGgAUC5DWqSFz87mzXg73L52kTZ543C0pBA%2FdBT%2B7edU2uyGzGwNN5tgxdnAX5V93xiURDxkrkcR8o&X-Amz-Signature=58f7f49ab84ada525e626a82aa2fac9d5aef1d2848480633e45e502056fc3dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GV2O3C%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDEPgId%2Fg0XPXwSUDJ2tXXG%2Fsi1UNfn6OOOpsxNV78TaAIgbgYHMUPKxBCwrBpqf0V0ErgI1XpiZ6HWq%2FXxBy8U4bMq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCu2eolvgqOEAQ6HpCrcA3yrvUXubcnteJiY1t6YT1hMI9shQor2Cfk5gh8nYJUzx7HGE69v70HMyP0Icd97sQmDD%2B11egNjKdWDX%2FFg%2F00%2ByCm6n65CyNNd88C5objHJ5hJhOY%2Fv94QWH0386nvtLbmD90QODyZRGJSGi4ZIFgtRl8jqdO4TqjCMZ0lIWWilT%2BH7gCA1SbWuHfcPUGUtXWHXtSjqVTr9q5n4ijNlZv2Lv1QCYHh%2BWCGLIINrojvLayMvwaRPL1i%2FTv1JX4OeZECV2NUAgpKIwYhNTHKkGHKxRbd%2FdjjlfJsnpO87p3PkC2cY4%2F8SaUC0e2kedbNA8vcWKcCgS3snDNpEQk8zqkn1imN78Jp0nnLFRf4BgYMJp8DF8UNWLAJgskMPEgBxnbeJoCUhP5agWqnu%2B%2BHv3nPvdMbM7oG3tq6Ge5laMQvWtAt7ufXL%2BJATsHYmhoyyPFLlkZjQbL6J7moYfDsruIPcN2YtQn5Wf1j4HbF87lfuFL92ccWuRmxwpyBJ0Bt0ryhIGrJvm9pKeA3clOlEOyZh0Rkh939516lzuERSN6XaceQCNsMRRxQLxZsiZFs6xtw38kJlIAGKNQuARu7UoCU%2FG9DzRN85aOh8GPxaXk8VaZ9EJ0eKMRkWwn%2FMN709sIGOqUBi9FE9PEPoJ6dkyn7MLZjXdxmRUSOchdypP8%2BdcJxmQ8M%2BK5zW%2Bbu7ylNISP37cRxwAMG25%2BstttPSWfDcTPZDVKflHt14Q5YvNPOL9rJmY5Wk3VTjCXllaiv0y9WuMLPf06D%2BkahMYpz25YGgAUC5DWqSFz87mzXg73L52kTZ543C0pBA%2FdBT%2B7edU2uyGzGwNN5tgxdnAX5V93xiURDxkrkcR8o&X-Amz-Signature=28d2d095573d0b1ab9c633fc70e8329facf3fd4e732545d3f7a6f1b9ff330e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
