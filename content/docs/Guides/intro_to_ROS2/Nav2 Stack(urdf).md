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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EW4YL36%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFFo6dPPd%2FKskRTSkBt7FHYHQlvKBpqSiih4yg%2BPtV4ZAiBrMW1mQopzoutoj%2FCET1SbMhrEhw6s4s%2FQ391DtMqOhSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMS%2BL6Unv8t%2BdCUH0TKtwDpu3swjReY87xxHTer9v6QjlIGIMF4KwTAmy%2Balf88a%2FrKJYQqRz%2FPa%2B1brktlTdVshJnG57RYA8Y%2FyyZm6AH85vDQFfsVKeu2ecAREa63bogp4MrOIFbkXTbL5IM1lsYE31wkp5gRDxUxcyMabbziFmTHz0TCiZEVF3yCQOTldv4Qq0UIjteWg0AVLPATC%2FNyCoMRt%2BSoP6AtDqDkiQvcKgejv%2FABBO0SXaY188mzP2AM3O%2B6BnLZ%2FcM082jcb3DAPVhBqOnqhdOOjTVpnxfESjyuoY4J5lbpEakFNMwzbkgGTWqAxpLa30h5dB2tD8NSQwNzKSbDZNuYNv7s8QXtyLC4xFHl5cpqqlsoKTbDKhaeSUvbCSc0GDwkvhb9tuq7rAiM%2FB8Ytw7%2BiX9NhJSrG4K4Fzoymq703tnWB5p0CGqVkKuMyTEiBgSbu5uWVrDrywMtmPjbbX6OTUsTWGbZo8dvFkKiHvku3%2Fim0Gjc38JVTRjCI2HlcyrB0GcXNnSwBF1kyT9WzKWTV05E79RWsSNFoLVxY3SB%2BV%2FzfBVT2d%2BzFHuxsYnijQrX64aCzbBL9u52EyQUBxv%2FMMvAh6rFmWcigNSH6ERfkTpojqSEapweB3y760k8LNFpH4wy6GUwQY6pgET91fzYrhxBaRh8aiuJ6RBqXeDEcxC9%2Fbxb%2Bly2ynbUDyBLLpLn2S8fOq17qsR3P8Isin6bJIgehoaL2HNBXOJ4Zo2EVfLCS5RlEquTRe1ZRUN4cVQoTl39S3t82RPlrotxSlcsuQroSmMEGSuEskVg87wkNIy6zo1Gl0UX%2FmP3vB%2BF0l0CTw84hCjKUNFny%2FGa3gVmKeb1bzrwIOznQRrfoWqvV8Y&X-Amz-Signature=c93eb17e85db23de4656201dbdf764224d06674b9d6b3f6b0b31e55ead77fbef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EW4YL36%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFFo6dPPd%2FKskRTSkBt7FHYHQlvKBpqSiih4yg%2BPtV4ZAiBrMW1mQopzoutoj%2FCET1SbMhrEhw6s4s%2FQ391DtMqOhSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMS%2BL6Unv8t%2BdCUH0TKtwDpu3swjReY87xxHTer9v6QjlIGIMF4KwTAmy%2Balf88a%2FrKJYQqRz%2FPa%2B1brktlTdVshJnG57RYA8Y%2FyyZm6AH85vDQFfsVKeu2ecAREa63bogp4MrOIFbkXTbL5IM1lsYE31wkp5gRDxUxcyMabbziFmTHz0TCiZEVF3yCQOTldv4Qq0UIjteWg0AVLPATC%2FNyCoMRt%2BSoP6AtDqDkiQvcKgejv%2FABBO0SXaY188mzP2AM3O%2B6BnLZ%2FcM082jcb3DAPVhBqOnqhdOOjTVpnxfESjyuoY4J5lbpEakFNMwzbkgGTWqAxpLa30h5dB2tD8NSQwNzKSbDZNuYNv7s8QXtyLC4xFHl5cpqqlsoKTbDKhaeSUvbCSc0GDwkvhb9tuq7rAiM%2FB8Ytw7%2BiX9NhJSrG4K4Fzoymq703tnWB5p0CGqVkKuMyTEiBgSbu5uWVrDrywMtmPjbbX6OTUsTWGbZo8dvFkKiHvku3%2Fim0Gjc38JVTRjCI2HlcyrB0GcXNnSwBF1kyT9WzKWTV05E79RWsSNFoLVxY3SB%2BV%2FzfBVT2d%2BzFHuxsYnijQrX64aCzbBL9u52EyQUBxv%2FMMvAh6rFmWcigNSH6ERfkTpojqSEapweB3y760k8LNFpH4wy6GUwQY6pgET91fzYrhxBaRh8aiuJ6RBqXeDEcxC9%2Fbxb%2Bly2ynbUDyBLLpLn2S8fOq17qsR3P8Isin6bJIgehoaL2HNBXOJ4Zo2EVfLCS5RlEquTRe1ZRUN4cVQoTl39S3t82RPlrotxSlcsuQroSmMEGSuEskVg87wkNIy6zo1Gl0UX%2FmP3vB%2BF0l0CTw84hCjKUNFny%2FGa3gVmKeb1bzrwIOznQRrfoWqvV8Y&X-Amz-Signature=22df7eaefe98e9bc95923c41b6e53c29de43c3efb4f34de11f2c8a13e9b5700c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EW4YL36%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFFo6dPPd%2FKskRTSkBt7FHYHQlvKBpqSiih4yg%2BPtV4ZAiBrMW1mQopzoutoj%2FCET1SbMhrEhw6s4s%2FQ391DtMqOhSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMS%2BL6Unv8t%2BdCUH0TKtwDpu3swjReY87xxHTer9v6QjlIGIMF4KwTAmy%2Balf88a%2FrKJYQqRz%2FPa%2B1brktlTdVshJnG57RYA8Y%2FyyZm6AH85vDQFfsVKeu2ecAREa63bogp4MrOIFbkXTbL5IM1lsYE31wkp5gRDxUxcyMabbziFmTHz0TCiZEVF3yCQOTldv4Qq0UIjteWg0AVLPATC%2FNyCoMRt%2BSoP6AtDqDkiQvcKgejv%2FABBO0SXaY188mzP2AM3O%2B6BnLZ%2FcM082jcb3DAPVhBqOnqhdOOjTVpnxfESjyuoY4J5lbpEakFNMwzbkgGTWqAxpLa30h5dB2tD8NSQwNzKSbDZNuYNv7s8QXtyLC4xFHl5cpqqlsoKTbDKhaeSUvbCSc0GDwkvhb9tuq7rAiM%2FB8Ytw7%2BiX9NhJSrG4K4Fzoymq703tnWB5p0CGqVkKuMyTEiBgSbu5uWVrDrywMtmPjbbX6OTUsTWGbZo8dvFkKiHvku3%2Fim0Gjc38JVTRjCI2HlcyrB0GcXNnSwBF1kyT9WzKWTV05E79RWsSNFoLVxY3SB%2BV%2FzfBVT2d%2BzFHuxsYnijQrX64aCzbBL9u52EyQUBxv%2FMMvAh6rFmWcigNSH6ERfkTpojqSEapweB3y760k8LNFpH4wy6GUwQY6pgET91fzYrhxBaRh8aiuJ6RBqXeDEcxC9%2Fbxb%2Bly2ynbUDyBLLpLn2S8fOq17qsR3P8Isin6bJIgehoaL2HNBXOJ4Zo2EVfLCS5RlEquTRe1ZRUN4cVQoTl39S3t82RPlrotxSlcsuQroSmMEGSuEskVg87wkNIy6zo1Gl0UX%2FmP3vB%2BF0l0CTw84hCjKUNFny%2FGa3gVmKeb1bzrwIOznQRrfoWqvV8Y&X-Amz-Signature=19f93c18cd9262c1c30b9b4b9d2081dd5a5458fc0cefb9e96d55683768bcb785&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EW4YL36%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFFo6dPPd%2FKskRTSkBt7FHYHQlvKBpqSiih4yg%2BPtV4ZAiBrMW1mQopzoutoj%2FCET1SbMhrEhw6s4s%2FQ391DtMqOhSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMS%2BL6Unv8t%2BdCUH0TKtwDpu3swjReY87xxHTer9v6QjlIGIMF4KwTAmy%2Balf88a%2FrKJYQqRz%2FPa%2B1brktlTdVshJnG57RYA8Y%2FyyZm6AH85vDQFfsVKeu2ecAREa63bogp4MrOIFbkXTbL5IM1lsYE31wkp5gRDxUxcyMabbziFmTHz0TCiZEVF3yCQOTldv4Qq0UIjteWg0AVLPATC%2FNyCoMRt%2BSoP6AtDqDkiQvcKgejv%2FABBO0SXaY188mzP2AM3O%2B6BnLZ%2FcM082jcb3DAPVhBqOnqhdOOjTVpnxfESjyuoY4J5lbpEakFNMwzbkgGTWqAxpLa30h5dB2tD8NSQwNzKSbDZNuYNv7s8QXtyLC4xFHl5cpqqlsoKTbDKhaeSUvbCSc0GDwkvhb9tuq7rAiM%2FB8Ytw7%2BiX9NhJSrG4K4Fzoymq703tnWB5p0CGqVkKuMyTEiBgSbu5uWVrDrywMtmPjbbX6OTUsTWGbZo8dvFkKiHvku3%2Fim0Gjc38JVTRjCI2HlcyrB0GcXNnSwBF1kyT9WzKWTV05E79RWsSNFoLVxY3SB%2BV%2FzfBVT2d%2BzFHuxsYnijQrX64aCzbBL9u52EyQUBxv%2FMMvAh6rFmWcigNSH6ERfkTpojqSEapweB3y760k8LNFpH4wy6GUwQY6pgET91fzYrhxBaRh8aiuJ6RBqXeDEcxC9%2Fbxb%2Bly2ynbUDyBLLpLn2S8fOq17qsR3P8Isin6bJIgehoaL2HNBXOJ4Zo2EVfLCS5RlEquTRe1ZRUN4cVQoTl39S3t82RPlrotxSlcsuQroSmMEGSuEskVg87wkNIy6zo1Gl0UX%2FmP3vB%2BF0l0CTw84hCjKUNFny%2FGa3gVmKeb1bzrwIOznQRrfoWqvV8Y&X-Amz-Signature=5820b386cee1e09b6b59efdaa98da66955b8fbb0cb24541d4a16e37c6b2bfd16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EW4YL36%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFFo6dPPd%2FKskRTSkBt7FHYHQlvKBpqSiih4yg%2BPtV4ZAiBrMW1mQopzoutoj%2FCET1SbMhrEhw6s4s%2FQ391DtMqOhSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMS%2BL6Unv8t%2BdCUH0TKtwDpu3swjReY87xxHTer9v6QjlIGIMF4KwTAmy%2Balf88a%2FrKJYQqRz%2FPa%2B1brktlTdVshJnG57RYA8Y%2FyyZm6AH85vDQFfsVKeu2ecAREa63bogp4MrOIFbkXTbL5IM1lsYE31wkp5gRDxUxcyMabbziFmTHz0TCiZEVF3yCQOTldv4Qq0UIjteWg0AVLPATC%2FNyCoMRt%2BSoP6AtDqDkiQvcKgejv%2FABBO0SXaY188mzP2AM3O%2B6BnLZ%2FcM082jcb3DAPVhBqOnqhdOOjTVpnxfESjyuoY4J5lbpEakFNMwzbkgGTWqAxpLa30h5dB2tD8NSQwNzKSbDZNuYNv7s8QXtyLC4xFHl5cpqqlsoKTbDKhaeSUvbCSc0GDwkvhb9tuq7rAiM%2FB8Ytw7%2BiX9NhJSrG4K4Fzoymq703tnWB5p0CGqVkKuMyTEiBgSbu5uWVrDrywMtmPjbbX6OTUsTWGbZo8dvFkKiHvku3%2Fim0Gjc38JVTRjCI2HlcyrB0GcXNnSwBF1kyT9WzKWTV05E79RWsSNFoLVxY3SB%2BV%2FzfBVT2d%2BzFHuxsYnijQrX64aCzbBL9u52EyQUBxv%2FMMvAh6rFmWcigNSH6ERfkTpojqSEapweB3y760k8LNFpH4wy6GUwQY6pgET91fzYrhxBaRh8aiuJ6RBqXeDEcxC9%2Fbxb%2Bly2ynbUDyBLLpLn2S8fOq17qsR3P8Isin6bJIgehoaL2HNBXOJ4Zo2EVfLCS5RlEquTRe1ZRUN4cVQoTl39S3t82RPlrotxSlcsuQroSmMEGSuEskVg87wkNIy6zo1Gl0UX%2FmP3vB%2BF0l0CTw84hCjKUNFny%2FGa3gVmKeb1bzrwIOznQRrfoWqvV8Y&X-Amz-Signature=d9bf47f8e541e3f171cd10bbd7b45cf6b702b240eaa80b766080f0e5a3499b99&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EW4YL36%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T220133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIFFo6dPPd%2FKskRTSkBt7FHYHQlvKBpqSiih4yg%2BPtV4ZAiBrMW1mQopzoutoj%2FCET1SbMhrEhw6s4s%2FQ391DtMqOhSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMS%2BL6Unv8t%2BdCUH0TKtwDpu3swjReY87xxHTer9v6QjlIGIMF4KwTAmy%2Balf88a%2FrKJYQqRz%2FPa%2B1brktlTdVshJnG57RYA8Y%2FyyZm6AH85vDQFfsVKeu2ecAREa63bogp4MrOIFbkXTbL5IM1lsYE31wkp5gRDxUxcyMabbziFmTHz0TCiZEVF3yCQOTldv4Qq0UIjteWg0AVLPATC%2FNyCoMRt%2BSoP6AtDqDkiQvcKgejv%2FABBO0SXaY188mzP2AM3O%2B6BnLZ%2FcM082jcb3DAPVhBqOnqhdOOjTVpnxfESjyuoY4J5lbpEakFNMwzbkgGTWqAxpLa30h5dB2tD8NSQwNzKSbDZNuYNv7s8QXtyLC4xFHl5cpqqlsoKTbDKhaeSUvbCSc0GDwkvhb9tuq7rAiM%2FB8Ytw7%2BiX9NhJSrG4K4Fzoymq703tnWB5p0CGqVkKuMyTEiBgSbu5uWVrDrywMtmPjbbX6OTUsTWGbZo8dvFkKiHvku3%2Fim0Gjc38JVTRjCI2HlcyrB0GcXNnSwBF1kyT9WzKWTV05E79RWsSNFoLVxY3SB%2BV%2FzfBVT2d%2BzFHuxsYnijQrX64aCzbBL9u52EyQUBxv%2FMMvAh6rFmWcigNSH6ERfkTpojqSEapweB3y760k8LNFpH4wy6GUwQY6pgET91fzYrhxBaRh8aiuJ6RBqXeDEcxC9%2Fbxb%2Bly2ynbUDyBLLpLn2S8fOq17qsR3P8Isin6bJIgehoaL2HNBXOJ4Zo2EVfLCS5RlEquTRe1ZRUN4cVQoTl39S3t82RPlrotxSlcsuQroSmMEGSuEskVg87wkNIy6zo1Gl0UX%2FmP3vB%2BF0l0CTw84hCjKUNFny%2FGa3gVmKeb1bzrwIOznQRrfoWqvV8Y&X-Amz-Signature=9984f9e0d164c320510d32af5892b2d2442e0a13051703c6ac52040140bcff6a&X-Amz-SignedHeaders=host&x-id=GetObject)
