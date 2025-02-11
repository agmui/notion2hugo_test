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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBJPATS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeFeAAOfa5NSAV2ocYEMnBWrBFFKd5htYEGSYCvI84YAIgTGlos5w1wAva0%2F6BohyogMe%2B9ShuXQRZIZ%2Bd4ZVJ9NUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3iL6oKwLsKneBy4ircA6iy7KuGu6MEGX5y2Gg8rgBxJbnovI%2B2YA9MxfdS0efR5C9Gil%2BFOSnBNszs2urqBi4qAAmQzh3MnmFbJvecF0Q4Ex10Wn2COcb3odAsR6b0DymC%2FruaLkgRjkpsj8foz%2Bn3eTl50mEFejvZSmJ8HtPrHg2jzUkkVH35HgSjvv1JTg3ohmg%2FUN3r3s1e0oYRkCidSUi16A4Hr6X9qZ3Z9Q3GEjbcRUP9lgTHFtPYMauxx2tk4grgGL203i8HUdqnJpcj4pWgBuLghVbNsWdhag6Y0N8ixKSwy%2FznRx6A8oRFbY%2Fb0%2FaMg%2F42llrY%2BHzViWci4Vm6Ed3HsH%2FIser1NDml%2F3q%2FrEW3DogS3JXGM%2F7so1ZWWPFQeHyfJHDebBPSzf%2BVnEbe16yUFjywTTfagiR8f1sS1u0Ats9jJGebiiYWM%2B73oqXkaPT39EMj9aMycAOWJPXreieefxjcMbyvXTrhPfUy1%2FNj9uN0WVFsPUP6uaqTychetZumiaQ9Oe3xJecxTAEzZBe3M5guKsHriAzKVig%2BSyTS2hXLShqaBv3FgRNAJTBjtsC9C6qCJ4vuUt%2FoWrA7rzPKmr2gnt4c9ysbrbviGAxqtiOGPevk7G7Au2CevYT1DgL7t6jBMMGBrL0GOqUBGaBFhn%2Bub8HoRBdR5WABtpkE9mE5mRPR9z0u3pMT466ejFoPhC51BZoSZL9BUDtQuFBxMkCiieYMJ%2FIb%2FdRhcqMnWcXtfPYUQBWV6uXAuA8kOCuwbum%2FD1tUVjAnsYo8FSK%2FA1szq1dAHHZ4zaypJTFcrHIfftKz4EkxdbaAHirUqZmA1ArgC%2Fg%2FiHvTz9sKMhLxbSOZOAjkdbwtAYfgl6KGLjC6&X-Amz-Signature=f9cefb55b1c1f3314f0df2654339b38e4b8c78e315780e2b968a88e0cbce339c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBJPATS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeFeAAOfa5NSAV2ocYEMnBWrBFFKd5htYEGSYCvI84YAIgTGlos5w1wAva0%2F6BohyogMe%2B9ShuXQRZIZ%2Bd4ZVJ9NUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3iL6oKwLsKneBy4ircA6iy7KuGu6MEGX5y2Gg8rgBxJbnovI%2B2YA9MxfdS0efR5C9Gil%2BFOSnBNszs2urqBi4qAAmQzh3MnmFbJvecF0Q4Ex10Wn2COcb3odAsR6b0DymC%2FruaLkgRjkpsj8foz%2Bn3eTl50mEFejvZSmJ8HtPrHg2jzUkkVH35HgSjvv1JTg3ohmg%2FUN3r3s1e0oYRkCidSUi16A4Hr6X9qZ3Z9Q3GEjbcRUP9lgTHFtPYMauxx2tk4grgGL203i8HUdqnJpcj4pWgBuLghVbNsWdhag6Y0N8ixKSwy%2FznRx6A8oRFbY%2Fb0%2FaMg%2F42llrY%2BHzViWci4Vm6Ed3HsH%2FIser1NDml%2F3q%2FrEW3DogS3JXGM%2F7so1ZWWPFQeHyfJHDebBPSzf%2BVnEbe16yUFjywTTfagiR8f1sS1u0Ats9jJGebiiYWM%2B73oqXkaPT39EMj9aMycAOWJPXreieefxjcMbyvXTrhPfUy1%2FNj9uN0WVFsPUP6uaqTychetZumiaQ9Oe3xJecxTAEzZBe3M5guKsHriAzKVig%2BSyTS2hXLShqaBv3FgRNAJTBjtsC9C6qCJ4vuUt%2FoWrA7rzPKmr2gnt4c9ysbrbviGAxqtiOGPevk7G7Au2CevYT1DgL7t6jBMMGBrL0GOqUBGaBFhn%2Bub8HoRBdR5WABtpkE9mE5mRPR9z0u3pMT466ejFoPhC51BZoSZL9BUDtQuFBxMkCiieYMJ%2FIb%2FdRhcqMnWcXtfPYUQBWV6uXAuA8kOCuwbum%2FD1tUVjAnsYo8FSK%2FA1szq1dAHHZ4zaypJTFcrHIfftKz4EkxdbaAHirUqZmA1ArgC%2Fg%2FiHvTz9sKMhLxbSOZOAjkdbwtAYfgl6KGLjC6&X-Amz-Signature=810f55141de71873b3526c0a0c6c1f0fb18a0875fa3b3375da8cc3d0a3b2c723&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBJPATS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeFeAAOfa5NSAV2ocYEMnBWrBFFKd5htYEGSYCvI84YAIgTGlos5w1wAva0%2F6BohyogMe%2B9ShuXQRZIZ%2Bd4ZVJ9NUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3iL6oKwLsKneBy4ircA6iy7KuGu6MEGX5y2Gg8rgBxJbnovI%2B2YA9MxfdS0efR5C9Gil%2BFOSnBNszs2urqBi4qAAmQzh3MnmFbJvecF0Q4Ex10Wn2COcb3odAsR6b0DymC%2FruaLkgRjkpsj8foz%2Bn3eTl50mEFejvZSmJ8HtPrHg2jzUkkVH35HgSjvv1JTg3ohmg%2FUN3r3s1e0oYRkCidSUi16A4Hr6X9qZ3Z9Q3GEjbcRUP9lgTHFtPYMauxx2tk4grgGL203i8HUdqnJpcj4pWgBuLghVbNsWdhag6Y0N8ixKSwy%2FznRx6A8oRFbY%2Fb0%2FaMg%2F42llrY%2BHzViWci4Vm6Ed3HsH%2FIser1NDml%2F3q%2FrEW3DogS3JXGM%2F7so1ZWWPFQeHyfJHDebBPSzf%2BVnEbe16yUFjywTTfagiR8f1sS1u0Ats9jJGebiiYWM%2B73oqXkaPT39EMj9aMycAOWJPXreieefxjcMbyvXTrhPfUy1%2FNj9uN0WVFsPUP6uaqTychetZumiaQ9Oe3xJecxTAEzZBe3M5guKsHriAzKVig%2BSyTS2hXLShqaBv3FgRNAJTBjtsC9C6qCJ4vuUt%2FoWrA7rzPKmr2gnt4c9ysbrbviGAxqtiOGPevk7G7Au2CevYT1DgL7t6jBMMGBrL0GOqUBGaBFhn%2Bub8HoRBdR5WABtpkE9mE5mRPR9z0u3pMT466ejFoPhC51BZoSZL9BUDtQuFBxMkCiieYMJ%2FIb%2FdRhcqMnWcXtfPYUQBWV6uXAuA8kOCuwbum%2FD1tUVjAnsYo8FSK%2FA1szq1dAHHZ4zaypJTFcrHIfftKz4EkxdbaAHirUqZmA1ArgC%2Fg%2FiHvTz9sKMhLxbSOZOAjkdbwtAYfgl6KGLjC6&X-Amz-Signature=0ce090775cf57cc0f265e69b8fd5cda7f237e9e7003c2502daad2d54e2a2be13&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBJPATS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeFeAAOfa5NSAV2ocYEMnBWrBFFKd5htYEGSYCvI84YAIgTGlos5w1wAva0%2F6BohyogMe%2B9ShuXQRZIZ%2Bd4ZVJ9NUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3iL6oKwLsKneBy4ircA6iy7KuGu6MEGX5y2Gg8rgBxJbnovI%2B2YA9MxfdS0efR5C9Gil%2BFOSnBNszs2urqBi4qAAmQzh3MnmFbJvecF0Q4Ex10Wn2COcb3odAsR6b0DymC%2FruaLkgRjkpsj8foz%2Bn3eTl50mEFejvZSmJ8HtPrHg2jzUkkVH35HgSjvv1JTg3ohmg%2FUN3r3s1e0oYRkCidSUi16A4Hr6X9qZ3Z9Q3GEjbcRUP9lgTHFtPYMauxx2tk4grgGL203i8HUdqnJpcj4pWgBuLghVbNsWdhag6Y0N8ixKSwy%2FznRx6A8oRFbY%2Fb0%2FaMg%2F42llrY%2BHzViWci4Vm6Ed3HsH%2FIser1NDml%2F3q%2FrEW3DogS3JXGM%2F7so1ZWWPFQeHyfJHDebBPSzf%2BVnEbe16yUFjywTTfagiR8f1sS1u0Ats9jJGebiiYWM%2B73oqXkaPT39EMj9aMycAOWJPXreieefxjcMbyvXTrhPfUy1%2FNj9uN0WVFsPUP6uaqTychetZumiaQ9Oe3xJecxTAEzZBe3M5guKsHriAzKVig%2BSyTS2hXLShqaBv3FgRNAJTBjtsC9C6qCJ4vuUt%2FoWrA7rzPKmr2gnt4c9ysbrbviGAxqtiOGPevk7G7Au2CevYT1DgL7t6jBMMGBrL0GOqUBGaBFhn%2Bub8HoRBdR5WABtpkE9mE5mRPR9z0u3pMT466ejFoPhC51BZoSZL9BUDtQuFBxMkCiieYMJ%2FIb%2FdRhcqMnWcXtfPYUQBWV6uXAuA8kOCuwbum%2FD1tUVjAnsYo8FSK%2FA1szq1dAHHZ4zaypJTFcrHIfftKz4EkxdbaAHirUqZmA1ArgC%2Fg%2FiHvTz9sKMhLxbSOZOAjkdbwtAYfgl6KGLjC6&X-Amz-Signature=b9fa6df3e89099b808e88d03739eaf0d26c68fa400bfe89ab0783554e508f339&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBJPATS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeFeAAOfa5NSAV2ocYEMnBWrBFFKd5htYEGSYCvI84YAIgTGlos5w1wAva0%2F6BohyogMe%2B9ShuXQRZIZ%2Bd4ZVJ9NUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3iL6oKwLsKneBy4ircA6iy7KuGu6MEGX5y2Gg8rgBxJbnovI%2B2YA9MxfdS0efR5C9Gil%2BFOSnBNszs2urqBi4qAAmQzh3MnmFbJvecF0Q4Ex10Wn2COcb3odAsR6b0DymC%2FruaLkgRjkpsj8foz%2Bn3eTl50mEFejvZSmJ8HtPrHg2jzUkkVH35HgSjvv1JTg3ohmg%2FUN3r3s1e0oYRkCidSUi16A4Hr6X9qZ3Z9Q3GEjbcRUP9lgTHFtPYMauxx2tk4grgGL203i8HUdqnJpcj4pWgBuLghVbNsWdhag6Y0N8ixKSwy%2FznRx6A8oRFbY%2Fb0%2FaMg%2F42llrY%2BHzViWci4Vm6Ed3HsH%2FIser1NDml%2F3q%2FrEW3DogS3JXGM%2F7so1ZWWPFQeHyfJHDebBPSzf%2BVnEbe16yUFjywTTfagiR8f1sS1u0Ats9jJGebiiYWM%2B73oqXkaPT39EMj9aMycAOWJPXreieefxjcMbyvXTrhPfUy1%2FNj9uN0WVFsPUP6uaqTychetZumiaQ9Oe3xJecxTAEzZBe3M5guKsHriAzKVig%2BSyTS2hXLShqaBv3FgRNAJTBjtsC9C6qCJ4vuUt%2FoWrA7rzPKmr2gnt4c9ysbrbviGAxqtiOGPevk7G7Au2CevYT1DgL7t6jBMMGBrL0GOqUBGaBFhn%2Bub8HoRBdR5WABtpkE9mE5mRPR9z0u3pMT466ejFoPhC51BZoSZL9BUDtQuFBxMkCiieYMJ%2FIb%2FdRhcqMnWcXtfPYUQBWV6uXAuA8kOCuwbum%2FD1tUVjAnsYo8FSK%2FA1szq1dAHHZ4zaypJTFcrHIfftKz4EkxdbaAHirUqZmA1ArgC%2Fg%2FiHvTz9sKMhLxbSOZOAjkdbwtAYfgl6KGLjC6&X-Amz-Signature=9f480eca33a40b03ecc717ca6c8cd6aa3341411a9ea735a6527a201dce4e24bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXBJPATS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeFeAAOfa5NSAV2ocYEMnBWrBFFKd5htYEGSYCvI84YAIgTGlos5w1wAva0%2F6BohyogMe%2B9ShuXQRZIZ%2Bd4ZVJ9NUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3iL6oKwLsKneBy4ircA6iy7KuGu6MEGX5y2Gg8rgBxJbnovI%2B2YA9MxfdS0efR5C9Gil%2BFOSnBNszs2urqBi4qAAmQzh3MnmFbJvecF0Q4Ex10Wn2COcb3odAsR6b0DymC%2FruaLkgRjkpsj8foz%2Bn3eTl50mEFejvZSmJ8HtPrHg2jzUkkVH35HgSjvv1JTg3ohmg%2FUN3r3s1e0oYRkCidSUi16A4Hr6X9qZ3Z9Q3GEjbcRUP9lgTHFtPYMauxx2tk4grgGL203i8HUdqnJpcj4pWgBuLghVbNsWdhag6Y0N8ixKSwy%2FznRx6A8oRFbY%2Fb0%2FaMg%2F42llrY%2BHzViWci4Vm6Ed3HsH%2FIser1NDml%2F3q%2FrEW3DogS3JXGM%2F7so1ZWWPFQeHyfJHDebBPSzf%2BVnEbe16yUFjywTTfagiR8f1sS1u0Ats9jJGebiiYWM%2B73oqXkaPT39EMj9aMycAOWJPXreieefxjcMbyvXTrhPfUy1%2FNj9uN0WVFsPUP6uaqTychetZumiaQ9Oe3xJecxTAEzZBe3M5guKsHriAzKVig%2BSyTS2hXLShqaBv3FgRNAJTBjtsC9C6qCJ4vuUt%2FoWrA7rzPKmr2gnt4c9ysbrbviGAxqtiOGPevk7G7Au2CevYT1DgL7t6jBMMGBrL0GOqUBGaBFhn%2Bub8HoRBdR5WABtpkE9mE5mRPR9z0u3pMT466ejFoPhC51BZoSZL9BUDtQuFBxMkCiieYMJ%2FIb%2FdRhcqMnWcXtfPYUQBWV6uXAuA8kOCuwbum%2FD1tUVjAnsYo8FSK%2FA1szq1dAHHZ4zaypJTFcrHIfftKz4EkxdbaAHirUqZmA1ArgC%2Fg%2FiHvTz9sKMhLxbSOZOAjkdbwtAYfgl6KGLjC6&X-Amz-Signature=3617e4d17d8225db63894e577e91745e7f2a59a96e8591184912a8961b5f2013&X-Amz-SignedHeaders=host&x-id=GetObject)
