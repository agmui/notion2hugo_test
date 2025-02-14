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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDECJJT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2Fhe1PzXKne6y7FC9iG1EVGekpLePzFVhAwP5E%2BITxrAIgX2UagtV3gAhJGb0NkJMppa5hglghHVuJKQkO54sLcysq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLj5YAbTCRXAhPNaRyrcA7XLGFfWr948fhc5B6WZenfi85N4viUjKuJWYEF0fNhs%2FrOcL9tJk%2BlVS0cjZz5wXFSzRaaMb0S3AuiCc8WjhGYXrBvPXfdYllT3x0aPJ78isDJHwBBL%2Fr3ag%2BGPKFHxmi3OxPq546oWhYxKl9Ek2SQ0C%2FVCUEnClFpQRrkXn4t07yTW6N7equU6pLMKBnhaL1n48Qzy09ZHlDvThS9TrlSv%2BVht%2Fh8ct5qtHZlByTgnRim%2FZ72UAW9GCblhAbc4HdplRYpfvxK%2B%2FhPmSnceAzs2hiCyVu2eLrij%2FDlrWD1dsGq2XChgQR4A7IKtPgyvcZ2xy1yqQe7uhTNpC215CEF%2B1QkEpdO4SAEklZRwfoXSs6%2FITEVo1Vc2H9KnxykybWlgg2gAWLC81PZ07Hd%2Fg7eUF%2Fr7wS2wda0eXX7%2BcP3s8h%2BE1nqr4DpTnCWIHdhbwyI6NaKWoy9jZ%2FZG37BkwfKzKTrS84T7oAn7TjLFSLL0mfbj4U28RC6WUrMtdbCqrguVXEJGOW3Mgb0VajUAidNzSkXeIXfCrV6VSjrotOzqvATQOsdaNASHJd%2F0IKl6pA6c5tEowry14JHBcbMBrdDyi5HLWdlwoNTuVlhPWcaDU%2FOso3%2F0VYcLiu9CMJXqu70GOqUBQPcpHaVQzd78PjyjRds1BWaQQRbEuSmDMcJAaarlWeX2YgmV0ZEt7h2UHBFlcsU21e6QhU0u7AXJfqcu7AOoWEz%2BeL4j%2FGTlXoWKLkomNIZk2pICxhYlSORsZ2HlnrxXEmBOctFVJOLxnNazTPjdRAR%2FAPTphf5oFyjoPvdhWn0%2BoACR9YuPW3%2F7ELWJopjwCZYi7i7JGI2t19Cv1Nw%2BBYazEaGi&X-Amz-Signature=03c5b5128b4e94795147b0c2889dd685a66f714c5c7cf84a5328e2a3ab355d47&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDECJJT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2Fhe1PzXKne6y7FC9iG1EVGekpLePzFVhAwP5E%2BITxrAIgX2UagtV3gAhJGb0NkJMppa5hglghHVuJKQkO54sLcysq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLj5YAbTCRXAhPNaRyrcA7XLGFfWr948fhc5B6WZenfi85N4viUjKuJWYEF0fNhs%2FrOcL9tJk%2BlVS0cjZz5wXFSzRaaMb0S3AuiCc8WjhGYXrBvPXfdYllT3x0aPJ78isDJHwBBL%2Fr3ag%2BGPKFHxmi3OxPq546oWhYxKl9Ek2SQ0C%2FVCUEnClFpQRrkXn4t07yTW6N7equU6pLMKBnhaL1n48Qzy09ZHlDvThS9TrlSv%2BVht%2Fh8ct5qtHZlByTgnRim%2FZ72UAW9GCblhAbc4HdplRYpfvxK%2B%2FhPmSnceAzs2hiCyVu2eLrij%2FDlrWD1dsGq2XChgQR4A7IKtPgyvcZ2xy1yqQe7uhTNpC215CEF%2B1QkEpdO4SAEklZRwfoXSs6%2FITEVo1Vc2H9KnxykybWlgg2gAWLC81PZ07Hd%2Fg7eUF%2Fr7wS2wda0eXX7%2BcP3s8h%2BE1nqr4DpTnCWIHdhbwyI6NaKWoy9jZ%2FZG37BkwfKzKTrS84T7oAn7TjLFSLL0mfbj4U28RC6WUrMtdbCqrguVXEJGOW3Mgb0VajUAidNzSkXeIXfCrV6VSjrotOzqvATQOsdaNASHJd%2F0IKl6pA6c5tEowry14JHBcbMBrdDyi5HLWdlwoNTuVlhPWcaDU%2FOso3%2F0VYcLiu9CMJXqu70GOqUBQPcpHaVQzd78PjyjRds1BWaQQRbEuSmDMcJAaarlWeX2YgmV0ZEt7h2UHBFlcsU21e6QhU0u7AXJfqcu7AOoWEz%2BeL4j%2FGTlXoWKLkomNIZk2pICxhYlSORsZ2HlnrxXEmBOctFVJOLxnNazTPjdRAR%2FAPTphf5oFyjoPvdhWn0%2BoACR9YuPW3%2F7ELWJopjwCZYi7i7JGI2t19Cv1Nw%2BBYazEaGi&X-Amz-Signature=25d09702a1253d555c80f0992dd5c2ba713c8fdd5f9f58963f2443743a89e314&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDECJJT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2Fhe1PzXKne6y7FC9iG1EVGekpLePzFVhAwP5E%2BITxrAIgX2UagtV3gAhJGb0NkJMppa5hglghHVuJKQkO54sLcysq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLj5YAbTCRXAhPNaRyrcA7XLGFfWr948fhc5B6WZenfi85N4viUjKuJWYEF0fNhs%2FrOcL9tJk%2BlVS0cjZz5wXFSzRaaMb0S3AuiCc8WjhGYXrBvPXfdYllT3x0aPJ78isDJHwBBL%2Fr3ag%2BGPKFHxmi3OxPq546oWhYxKl9Ek2SQ0C%2FVCUEnClFpQRrkXn4t07yTW6N7equU6pLMKBnhaL1n48Qzy09ZHlDvThS9TrlSv%2BVht%2Fh8ct5qtHZlByTgnRim%2FZ72UAW9GCblhAbc4HdplRYpfvxK%2B%2FhPmSnceAzs2hiCyVu2eLrij%2FDlrWD1dsGq2XChgQR4A7IKtPgyvcZ2xy1yqQe7uhTNpC215CEF%2B1QkEpdO4SAEklZRwfoXSs6%2FITEVo1Vc2H9KnxykybWlgg2gAWLC81PZ07Hd%2Fg7eUF%2Fr7wS2wda0eXX7%2BcP3s8h%2BE1nqr4DpTnCWIHdhbwyI6NaKWoy9jZ%2FZG37BkwfKzKTrS84T7oAn7TjLFSLL0mfbj4U28RC6WUrMtdbCqrguVXEJGOW3Mgb0VajUAidNzSkXeIXfCrV6VSjrotOzqvATQOsdaNASHJd%2F0IKl6pA6c5tEowry14JHBcbMBrdDyi5HLWdlwoNTuVlhPWcaDU%2FOso3%2F0VYcLiu9CMJXqu70GOqUBQPcpHaVQzd78PjyjRds1BWaQQRbEuSmDMcJAaarlWeX2YgmV0ZEt7h2UHBFlcsU21e6QhU0u7AXJfqcu7AOoWEz%2BeL4j%2FGTlXoWKLkomNIZk2pICxhYlSORsZ2HlnrxXEmBOctFVJOLxnNazTPjdRAR%2FAPTphf5oFyjoPvdhWn0%2BoACR9YuPW3%2F7ELWJopjwCZYi7i7JGI2t19Cv1Nw%2BBYazEaGi&X-Amz-Signature=5e635729f556c7acad8461f431fb08108e7cf5c0b086ee0cf1a4432c21ef52e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDECJJT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2Fhe1PzXKne6y7FC9iG1EVGekpLePzFVhAwP5E%2BITxrAIgX2UagtV3gAhJGb0NkJMppa5hglghHVuJKQkO54sLcysq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLj5YAbTCRXAhPNaRyrcA7XLGFfWr948fhc5B6WZenfi85N4viUjKuJWYEF0fNhs%2FrOcL9tJk%2BlVS0cjZz5wXFSzRaaMb0S3AuiCc8WjhGYXrBvPXfdYllT3x0aPJ78isDJHwBBL%2Fr3ag%2BGPKFHxmi3OxPq546oWhYxKl9Ek2SQ0C%2FVCUEnClFpQRrkXn4t07yTW6N7equU6pLMKBnhaL1n48Qzy09ZHlDvThS9TrlSv%2BVht%2Fh8ct5qtHZlByTgnRim%2FZ72UAW9GCblhAbc4HdplRYpfvxK%2B%2FhPmSnceAzs2hiCyVu2eLrij%2FDlrWD1dsGq2XChgQR4A7IKtPgyvcZ2xy1yqQe7uhTNpC215CEF%2B1QkEpdO4SAEklZRwfoXSs6%2FITEVo1Vc2H9KnxykybWlgg2gAWLC81PZ07Hd%2Fg7eUF%2Fr7wS2wda0eXX7%2BcP3s8h%2BE1nqr4DpTnCWIHdhbwyI6NaKWoy9jZ%2FZG37BkwfKzKTrS84T7oAn7TjLFSLL0mfbj4U28RC6WUrMtdbCqrguVXEJGOW3Mgb0VajUAidNzSkXeIXfCrV6VSjrotOzqvATQOsdaNASHJd%2F0IKl6pA6c5tEowry14JHBcbMBrdDyi5HLWdlwoNTuVlhPWcaDU%2FOso3%2F0VYcLiu9CMJXqu70GOqUBQPcpHaVQzd78PjyjRds1BWaQQRbEuSmDMcJAaarlWeX2YgmV0ZEt7h2UHBFlcsU21e6QhU0u7AXJfqcu7AOoWEz%2BeL4j%2FGTlXoWKLkomNIZk2pICxhYlSORsZ2HlnrxXEmBOctFVJOLxnNazTPjdRAR%2FAPTphf5oFyjoPvdhWn0%2BoACR9YuPW3%2F7ELWJopjwCZYi7i7JGI2t19Cv1Nw%2BBYazEaGi&X-Amz-Signature=cd62e777f42c747317cbe7476629c312585a71f60314d970ac722544158799d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDECJJT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2Fhe1PzXKne6y7FC9iG1EVGekpLePzFVhAwP5E%2BITxrAIgX2UagtV3gAhJGb0NkJMppa5hglghHVuJKQkO54sLcysq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLj5YAbTCRXAhPNaRyrcA7XLGFfWr948fhc5B6WZenfi85N4viUjKuJWYEF0fNhs%2FrOcL9tJk%2BlVS0cjZz5wXFSzRaaMb0S3AuiCc8WjhGYXrBvPXfdYllT3x0aPJ78isDJHwBBL%2Fr3ag%2BGPKFHxmi3OxPq546oWhYxKl9Ek2SQ0C%2FVCUEnClFpQRrkXn4t07yTW6N7equU6pLMKBnhaL1n48Qzy09ZHlDvThS9TrlSv%2BVht%2Fh8ct5qtHZlByTgnRim%2FZ72UAW9GCblhAbc4HdplRYpfvxK%2B%2FhPmSnceAzs2hiCyVu2eLrij%2FDlrWD1dsGq2XChgQR4A7IKtPgyvcZ2xy1yqQe7uhTNpC215CEF%2B1QkEpdO4SAEklZRwfoXSs6%2FITEVo1Vc2H9KnxykybWlgg2gAWLC81PZ07Hd%2Fg7eUF%2Fr7wS2wda0eXX7%2BcP3s8h%2BE1nqr4DpTnCWIHdhbwyI6NaKWoy9jZ%2FZG37BkwfKzKTrS84T7oAn7TjLFSLL0mfbj4U28RC6WUrMtdbCqrguVXEJGOW3Mgb0VajUAidNzSkXeIXfCrV6VSjrotOzqvATQOsdaNASHJd%2F0IKl6pA6c5tEowry14JHBcbMBrdDyi5HLWdlwoNTuVlhPWcaDU%2FOso3%2F0VYcLiu9CMJXqu70GOqUBQPcpHaVQzd78PjyjRds1BWaQQRbEuSmDMcJAaarlWeX2YgmV0ZEt7h2UHBFlcsU21e6QhU0u7AXJfqcu7AOoWEz%2BeL4j%2FGTlXoWKLkomNIZk2pICxhYlSORsZ2HlnrxXEmBOctFVJOLxnNazTPjdRAR%2FAPTphf5oFyjoPvdhWn0%2BoACR9YuPW3%2F7ELWJopjwCZYi7i7JGI2t19Cv1Nw%2BBYazEaGi&X-Amz-Signature=7457e32a7c05c089eb235dfc9a7c03179630eb836d5a701d6634564b9b89e8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BDECJJT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQC%2Fhe1PzXKne6y7FC9iG1EVGekpLePzFVhAwP5E%2BITxrAIgX2UagtV3gAhJGb0NkJMppa5hglghHVuJKQkO54sLcysq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLj5YAbTCRXAhPNaRyrcA7XLGFfWr948fhc5B6WZenfi85N4viUjKuJWYEF0fNhs%2FrOcL9tJk%2BlVS0cjZz5wXFSzRaaMb0S3AuiCc8WjhGYXrBvPXfdYllT3x0aPJ78isDJHwBBL%2Fr3ag%2BGPKFHxmi3OxPq546oWhYxKl9Ek2SQ0C%2FVCUEnClFpQRrkXn4t07yTW6N7equU6pLMKBnhaL1n48Qzy09ZHlDvThS9TrlSv%2BVht%2Fh8ct5qtHZlByTgnRim%2FZ72UAW9GCblhAbc4HdplRYpfvxK%2B%2FhPmSnceAzs2hiCyVu2eLrij%2FDlrWD1dsGq2XChgQR4A7IKtPgyvcZ2xy1yqQe7uhTNpC215CEF%2B1QkEpdO4SAEklZRwfoXSs6%2FITEVo1Vc2H9KnxykybWlgg2gAWLC81PZ07Hd%2Fg7eUF%2Fr7wS2wda0eXX7%2BcP3s8h%2BE1nqr4DpTnCWIHdhbwyI6NaKWoy9jZ%2FZG37BkwfKzKTrS84T7oAn7TjLFSLL0mfbj4U28RC6WUrMtdbCqrguVXEJGOW3Mgb0VajUAidNzSkXeIXfCrV6VSjrotOzqvATQOsdaNASHJd%2F0IKl6pA6c5tEowry14JHBcbMBrdDyi5HLWdlwoNTuVlhPWcaDU%2FOso3%2F0VYcLiu9CMJXqu70GOqUBQPcpHaVQzd78PjyjRds1BWaQQRbEuSmDMcJAaarlWeX2YgmV0ZEt7h2UHBFlcsU21e6QhU0u7AXJfqcu7AOoWEz%2BeL4j%2FGTlXoWKLkomNIZk2pICxhYlSORsZ2HlnrxXEmBOctFVJOLxnNazTPjdRAR%2FAPTphf5oFyjoPvdhWn0%2BoACR9YuPW3%2F7ELWJopjwCZYi7i7JGI2t19Cv1Nw%2BBYazEaGi&X-Amz-Signature=a07efddbdc9dce461a6095838deec37744bdb72b54e4820ab7b54e1852337e7f&X-Amz-SignedHeaders=host&x-id=GetObject)
