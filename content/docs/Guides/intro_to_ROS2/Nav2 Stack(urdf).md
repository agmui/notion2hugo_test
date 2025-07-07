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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLIDMBBI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQClg7Ypzw2SZJjXIDMErwUPWxpSCjRvBmSGWyR9nKMB0gIgcowBvwSCfY0moTBrdNFEHi1KEzOdSKHQafJVDqRtqMwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMdckIpdQIIPN6GRySrcA5IxLAA5nZxWcZdJxNJIUoVYdZo%2B5XnKkLTHtAvIPh%2BaxYvZIzn2WGvz4K%2FCTks00cOGrSxL90P4bzYjsa8cgZQ1U1x4yMEvWTkzUuONEsYxkzB4%2BXiq0l1Ur6wVR5QjRf87O27HWcnUIxpVMNl7e8POy0m8N9Iw1Y2NU%2BRjEAhccifdhs6vme5ByU%2F7aCmyQhRQWlFVVXBx2Z2F3SYK45sEPw7WvcP1wsGIBnfWkf1TYTSbe%2FGBXoLuHtcTm2ZiEoMRM4hLbwVJCnRQtVNmpZGn8A6wMf4TLGlYeAcOhgTXVnnNiRS5JIqbd%2FZ86AgMraOL6dXCaCYL3FrxL8cjNy%2FbPlto91pm25OxB8G7B41DhnSP4rRsMZakaK2lmJyqdrFEGHFMLRAZ6QwU8NcXgIRTsme2XUomNXErVaYGL2kDomuVss0OLFLlm8Av1qNoZRcrag%2BSAQhWCs74FHykRfii4jBArv0SjRa7bbR3UwGSqMVm80GbdFSyjAT3XMpSdCrvlVhPssB5%2Fud1jaa%2F2yTQJ6cVQFnb3RoaQu3XwpVl3HJlAuggQUET0dRKS4OY%2Fr83xeU%2B1j9%2BgcDJ6vBabeJfRebQlvg9rR%2BTLn2gsiLb8%2FywBn0R4N7IoTbEMIPKq8MGOqUB1ZJl3y6p3bV%2ByPgqXTLVlaZxnb5Lc29DtMqerpYidGealUasX6lJA6OXCtpI1VwnsNaAqVing%2B13vAGYgqtS%2FtUzvdcK7Se60WdKsHy27xyuSXVBd19v0nyGvdyTbbS2t1niLKXlD%2Bi4VQkXzfZ6d7GJ%2Fgo0LX%2BDbC6s542iduTRPVnSWq7EU4kvOL2WBBuwsVb2T2hf9J6ivYf9naHl2ryUEjAe&X-Amz-Signature=0f456caec569ea57a7c41d894f52d54a3f86a70e5dbeeb1cd46458be0eb2ec80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLIDMBBI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQClg7Ypzw2SZJjXIDMErwUPWxpSCjRvBmSGWyR9nKMB0gIgcowBvwSCfY0moTBrdNFEHi1KEzOdSKHQafJVDqRtqMwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMdckIpdQIIPN6GRySrcA5IxLAA5nZxWcZdJxNJIUoVYdZo%2B5XnKkLTHtAvIPh%2BaxYvZIzn2WGvz4K%2FCTks00cOGrSxL90P4bzYjsa8cgZQ1U1x4yMEvWTkzUuONEsYxkzB4%2BXiq0l1Ur6wVR5QjRf87O27HWcnUIxpVMNl7e8POy0m8N9Iw1Y2NU%2BRjEAhccifdhs6vme5ByU%2F7aCmyQhRQWlFVVXBx2Z2F3SYK45sEPw7WvcP1wsGIBnfWkf1TYTSbe%2FGBXoLuHtcTm2ZiEoMRM4hLbwVJCnRQtVNmpZGn8A6wMf4TLGlYeAcOhgTXVnnNiRS5JIqbd%2FZ86AgMraOL6dXCaCYL3FrxL8cjNy%2FbPlto91pm25OxB8G7B41DhnSP4rRsMZakaK2lmJyqdrFEGHFMLRAZ6QwU8NcXgIRTsme2XUomNXErVaYGL2kDomuVss0OLFLlm8Av1qNoZRcrag%2BSAQhWCs74FHykRfii4jBArv0SjRa7bbR3UwGSqMVm80GbdFSyjAT3XMpSdCrvlVhPssB5%2Fud1jaa%2F2yTQJ6cVQFnb3RoaQu3XwpVl3HJlAuggQUET0dRKS4OY%2Fr83xeU%2B1j9%2BgcDJ6vBabeJfRebQlvg9rR%2BTLn2gsiLb8%2FywBn0R4N7IoTbEMIPKq8MGOqUB1ZJl3y6p3bV%2ByPgqXTLVlaZxnb5Lc29DtMqerpYidGealUasX6lJA6OXCtpI1VwnsNaAqVing%2B13vAGYgqtS%2FtUzvdcK7Se60WdKsHy27xyuSXVBd19v0nyGvdyTbbS2t1niLKXlD%2Bi4VQkXzfZ6d7GJ%2Fgo0LX%2BDbC6s542iduTRPVnSWq7EU4kvOL2WBBuwsVb2T2hf9J6ivYf9naHl2ryUEjAe&X-Amz-Signature=ca0d5ea649c519072feaf29fb99e46f775323ee2987bbdf51d6105cad903328b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLIDMBBI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQClg7Ypzw2SZJjXIDMErwUPWxpSCjRvBmSGWyR9nKMB0gIgcowBvwSCfY0moTBrdNFEHi1KEzOdSKHQafJVDqRtqMwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMdckIpdQIIPN6GRySrcA5IxLAA5nZxWcZdJxNJIUoVYdZo%2B5XnKkLTHtAvIPh%2BaxYvZIzn2WGvz4K%2FCTks00cOGrSxL90P4bzYjsa8cgZQ1U1x4yMEvWTkzUuONEsYxkzB4%2BXiq0l1Ur6wVR5QjRf87O27HWcnUIxpVMNl7e8POy0m8N9Iw1Y2NU%2BRjEAhccifdhs6vme5ByU%2F7aCmyQhRQWlFVVXBx2Z2F3SYK45sEPw7WvcP1wsGIBnfWkf1TYTSbe%2FGBXoLuHtcTm2ZiEoMRM4hLbwVJCnRQtVNmpZGn8A6wMf4TLGlYeAcOhgTXVnnNiRS5JIqbd%2FZ86AgMraOL6dXCaCYL3FrxL8cjNy%2FbPlto91pm25OxB8G7B41DhnSP4rRsMZakaK2lmJyqdrFEGHFMLRAZ6QwU8NcXgIRTsme2XUomNXErVaYGL2kDomuVss0OLFLlm8Av1qNoZRcrag%2BSAQhWCs74FHykRfii4jBArv0SjRa7bbR3UwGSqMVm80GbdFSyjAT3XMpSdCrvlVhPssB5%2Fud1jaa%2F2yTQJ6cVQFnb3RoaQu3XwpVl3HJlAuggQUET0dRKS4OY%2Fr83xeU%2B1j9%2BgcDJ6vBabeJfRebQlvg9rR%2BTLn2gsiLb8%2FywBn0R4N7IoTbEMIPKq8MGOqUB1ZJl3y6p3bV%2ByPgqXTLVlaZxnb5Lc29DtMqerpYidGealUasX6lJA6OXCtpI1VwnsNaAqVing%2B13vAGYgqtS%2FtUzvdcK7Se60WdKsHy27xyuSXVBd19v0nyGvdyTbbS2t1niLKXlD%2Bi4VQkXzfZ6d7GJ%2Fgo0LX%2BDbC6s542iduTRPVnSWq7EU4kvOL2WBBuwsVb2T2hf9J6ivYf9naHl2ryUEjAe&X-Amz-Signature=ada65e88b2f57b2ac13d6c1018eb76c11c552d137192f3c5fbf88c9009c368fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLIDMBBI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQClg7Ypzw2SZJjXIDMErwUPWxpSCjRvBmSGWyR9nKMB0gIgcowBvwSCfY0moTBrdNFEHi1KEzOdSKHQafJVDqRtqMwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMdckIpdQIIPN6GRySrcA5IxLAA5nZxWcZdJxNJIUoVYdZo%2B5XnKkLTHtAvIPh%2BaxYvZIzn2WGvz4K%2FCTks00cOGrSxL90P4bzYjsa8cgZQ1U1x4yMEvWTkzUuONEsYxkzB4%2BXiq0l1Ur6wVR5QjRf87O27HWcnUIxpVMNl7e8POy0m8N9Iw1Y2NU%2BRjEAhccifdhs6vme5ByU%2F7aCmyQhRQWlFVVXBx2Z2F3SYK45sEPw7WvcP1wsGIBnfWkf1TYTSbe%2FGBXoLuHtcTm2ZiEoMRM4hLbwVJCnRQtVNmpZGn8A6wMf4TLGlYeAcOhgTXVnnNiRS5JIqbd%2FZ86AgMraOL6dXCaCYL3FrxL8cjNy%2FbPlto91pm25OxB8G7B41DhnSP4rRsMZakaK2lmJyqdrFEGHFMLRAZ6QwU8NcXgIRTsme2XUomNXErVaYGL2kDomuVss0OLFLlm8Av1qNoZRcrag%2BSAQhWCs74FHykRfii4jBArv0SjRa7bbR3UwGSqMVm80GbdFSyjAT3XMpSdCrvlVhPssB5%2Fud1jaa%2F2yTQJ6cVQFnb3RoaQu3XwpVl3HJlAuggQUET0dRKS4OY%2Fr83xeU%2B1j9%2BgcDJ6vBabeJfRebQlvg9rR%2BTLn2gsiLb8%2FywBn0R4N7IoTbEMIPKq8MGOqUB1ZJl3y6p3bV%2ByPgqXTLVlaZxnb5Lc29DtMqerpYidGealUasX6lJA6OXCtpI1VwnsNaAqVing%2B13vAGYgqtS%2FtUzvdcK7Se60WdKsHy27xyuSXVBd19v0nyGvdyTbbS2t1niLKXlD%2Bi4VQkXzfZ6d7GJ%2Fgo0LX%2BDbC6s542iduTRPVnSWq7EU4kvOL2WBBuwsVb2T2hf9J6ivYf9naHl2ryUEjAe&X-Amz-Signature=36b457d0f491474f04a0a220684acf2bd69d47510b2af0e3c5518af85920e218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLIDMBBI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQClg7Ypzw2SZJjXIDMErwUPWxpSCjRvBmSGWyR9nKMB0gIgcowBvwSCfY0moTBrdNFEHi1KEzOdSKHQafJVDqRtqMwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMdckIpdQIIPN6GRySrcA5IxLAA5nZxWcZdJxNJIUoVYdZo%2B5XnKkLTHtAvIPh%2BaxYvZIzn2WGvz4K%2FCTks00cOGrSxL90P4bzYjsa8cgZQ1U1x4yMEvWTkzUuONEsYxkzB4%2BXiq0l1Ur6wVR5QjRf87O27HWcnUIxpVMNl7e8POy0m8N9Iw1Y2NU%2BRjEAhccifdhs6vme5ByU%2F7aCmyQhRQWlFVVXBx2Z2F3SYK45sEPw7WvcP1wsGIBnfWkf1TYTSbe%2FGBXoLuHtcTm2ZiEoMRM4hLbwVJCnRQtVNmpZGn8A6wMf4TLGlYeAcOhgTXVnnNiRS5JIqbd%2FZ86AgMraOL6dXCaCYL3FrxL8cjNy%2FbPlto91pm25OxB8G7B41DhnSP4rRsMZakaK2lmJyqdrFEGHFMLRAZ6QwU8NcXgIRTsme2XUomNXErVaYGL2kDomuVss0OLFLlm8Av1qNoZRcrag%2BSAQhWCs74FHykRfii4jBArv0SjRa7bbR3UwGSqMVm80GbdFSyjAT3XMpSdCrvlVhPssB5%2Fud1jaa%2F2yTQJ6cVQFnb3RoaQu3XwpVl3HJlAuggQUET0dRKS4OY%2Fr83xeU%2B1j9%2BgcDJ6vBabeJfRebQlvg9rR%2BTLn2gsiLb8%2FywBn0R4N7IoTbEMIPKq8MGOqUB1ZJl3y6p3bV%2ByPgqXTLVlaZxnb5Lc29DtMqerpYidGealUasX6lJA6OXCtpI1VwnsNaAqVing%2B13vAGYgqtS%2FtUzvdcK7Se60WdKsHy27xyuSXVBd19v0nyGvdyTbbS2t1niLKXlD%2Bi4VQkXzfZ6d7GJ%2Fgo0LX%2BDbC6s542iduTRPVnSWq7EU4kvOL2WBBuwsVb2T2hf9J6ivYf9naHl2ryUEjAe&X-Amz-Signature=d84eff4d1bd46de1d24f93ea37280d7d1310890ab5520c3b7b8e07227130348e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLIDMBBI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQClg7Ypzw2SZJjXIDMErwUPWxpSCjRvBmSGWyR9nKMB0gIgcowBvwSCfY0moTBrdNFEHi1KEzOdSKHQafJVDqRtqMwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMdckIpdQIIPN6GRySrcA5IxLAA5nZxWcZdJxNJIUoVYdZo%2B5XnKkLTHtAvIPh%2BaxYvZIzn2WGvz4K%2FCTks00cOGrSxL90P4bzYjsa8cgZQ1U1x4yMEvWTkzUuONEsYxkzB4%2BXiq0l1Ur6wVR5QjRf87O27HWcnUIxpVMNl7e8POy0m8N9Iw1Y2NU%2BRjEAhccifdhs6vme5ByU%2F7aCmyQhRQWlFVVXBx2Z2F3SYK45sEPw7WvcP1wsGIBnfWkf1TYTSbe%2FGBXoLuHtcTm2ZiEoMRM4hLbwVJCnRQtVNmpZGn8A6wMf4TLGlYeAcOhgTXVnnNiRS5JIqbd%2FZ86AgMraOL6dXCaCYL3FrxL8cjNy%2FbPlto91pm25OxB8G7B41DhnSP4rRsMZakaK2lmJyqdrFEGHFMLRAZ6QwU8NcXgIRTsme2XUomNXErVaYGL2kDomuVss0OLFLlm8Av1qNoZRcrag%2BSAQhWCs74FHykRfii4jBArv0SjRa7bbR3UwGSqMVm80GbdFSyjAT3XMpSdCrvlVhPssB5%2Fud1jaa%2F2yTQJ6cVQFnb3RoaQu3XwpVl3HJlAuggQUET0dRKS4OY%2Fr83xeU%2B1j9%2BgcDJ6vBabeJfRebQlvg9rR%2BTLn2gsiLb8%2FywBn0R4N7IoTbEMIPKq8MGOqUB1ZJl3y6p3bV%2ByPgqXTLVlaZxnb5Lc29DtMqerpYidGealUasX6lJA6OXCtpI1VwnsNaAqVing%2B13vAGYgqtS%2FtUzvdcK7Se60WdKsHy27xyuSXVBd19v0nyGvdyTbbS2t1niLKXlD%2Bi4VQkXzfZ6d7GJ%2Fgo0LX%2BDbC6s542iduTRPVnSWq7EU4kvOL2WBBuwsVb2T2hf9J6ivYf9naHl2ryUEjAe&X-Amz-Signature=df470d64b69e06a5ed01d388b24343b53278bc8da401fa749f5ed3df4a95ca3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
