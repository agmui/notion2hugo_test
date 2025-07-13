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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUQU6G7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDXo9eiyA%2FVIlsaxUlIOt11KK9xzC8p87MV1%2F3dVejzswIhAJiaFORuk8xkZ1wVR9vj4nN802Gu04QG%2FMFaws9jrT5UKv8DCB8QABoMNjM3NDIzMTgzODA1Igwu0fv2sUbU0%2Fwl%2Bfwq3ANTn19hHdPtWi5YkEJNrHbp8YRiyTvNGMWFcmyIQmoaOX1nUcrb47788krwVr%2BR3Rd8jMfCJ79%2BUsNyredQpvqAwWzAhJ%2F%2BzGdHQvqkGIs65%2BJ9Xa32v05JUfXQ5lHGsDz8wZpUXqzKyFj0i5AUjznGoYiu43q%2FqQR3oc8f6IPT2aEbDDlHETG0z2VIM41Z%2F61dvaHlVz%2FAb6b1i5F7fztl7dc9C0QRd6UH4k8JstVLR5XCMEp9kywLX9CC5daZa3fLrgQYElnwnfXvo0BPOaetFyA6kw35qliNDiWbCKCP%2FGZprNMUFOfblCbLepwygtqP4X4oTB6VQ11XrHeXhnMHXASc6%2Bod2NjCprOzlICCUBbzT3bRLBnPJW7GTcVVunH1pkRvv05ts7WTHajHb1t2yPif2q44Glem597LFQ6OaEGKzAC%2FH19qTNGry8kX4SB6RjnjIyHHvAsExsXFrgiyFNWdDgMiKiFNUdwnJya2GegtfRrRn8eX8oVv%2B%2FjmItzsfiFs6wUsdR7TahZDQhKOU5E5Ixk8KxKSTKoEBsI7HQu3Gv%2B3ts7kBioo5TWdxPU97aDZbP2IvSCBy%2BrS4PqT%2FeawEj%2BYdzGIJxTJIv6UvAS2sFf3XRSyObcwcTDXyNDDBjqkASPq27LMumhJfOAhUZA7OQvDhjKHbUp1dZWD9Vu%2BIkIOkcjwc1Ycqz3q%2F7b2zbwaOEc3JY3c42GP7oe0NytzmxAv38tyf5zP6IHSAQt29H71PlrIHulj%2BTFEgsSfTSXxG9PbmXXMbEx3ePcBjG2HCWX3kLLYLLn%2BAr2z35ABSdTmpjwNCzpDUnrvSdWY%2BCNCqeW7N8W%2BZ47ImN9JTdx3r8LmjJEF&X-Amz-Signature=60f5f3eca69abf3b8735a34eea3ac6471e2569f42b1035166e0c89ecf4e378fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUQU6G7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDXo9eiyA%2FVIlsaxUlIOt11KK9xzC8p87MV1%2F3dVejzswIhAJiaFORuk8xkZ1wVR9vj4nN802Gu04QG%2FMFaws9jrT5UKv8DCB8QABoMNjM3NDIzMTgzODA1Igwu0fv2sUbU0%2Fwl%2Bfwq3ANTn19hHdPtWi5YkEJNrHbp8YRiyTvNGMWFcmyIQmoaOX1nUcrb47788krwVr%2BR3Rd8jMfCJ79%2BUsNyredQpvqAwWzAhJ%2F%2BzGdHQvqkGIs65%2BJ9Xa32v05JUfXQ5lHGsDz8wZpUXqzKyFj0i5AUjznGoYiu43q%2FqQR3oc8f6IPT2aEbDDlHETG0z2VIM41Z%2F61dvaHlVz%2FAb6b1i5F7fztl7dc9C0QRd6UH4k8JstVLR5XCMEp9kywLX9CC5daZa3fLrgQYElnwnfXvo0BPOaetFyA6kw35qliNDiWbCKCP%2FGZprNMUFOfblCbLepwygtqP4X4oTB6VQ11XrHeXhnMHXASc6%2Bod2NjCprOzlICCUBbzT3bRLBnPJW7GTcVVunH1pkRvv05ts7WTHajHb1t2yPif2q44Glem597LFQ6OaEGKzAC%2FH19qTNGry8kX4SB6RjnjIyHHvAsExsXFrgiyFNWdDgMiKiFNUdwnJya2GegtfRrRn8eX8oVv%2B%2FjmItzsfiFs6wUsdR7TahZDQhKOU5E5Ixk8KxKSTKoEBsI7HQu3Gv%2B3ts7kBioo5TWdxPU97aDZbP2IvSCBy%2BrS4PqT%2FeawEj%2BYdzGIJxTJIv6UvAS2sFf3XRSyObcwcTDXyNDDBjqkASPq27LMumhJfOAhUZA7OQvDhjKHbUp1dZWD9Vu%2BIkIOkcjwc1Ycqz3q%2F7b2zbwaOEc3JY3c42GP7oe0NytzmxAv38tyf5zP6IHSAQt29H71PlrIHulj%2BTFEgsSfTSXxG9PbmXXMbEx3ePcBjG2HCWX3kLLYLLn%2BAr2z35ABSdTmpjwNCzpDUnrvSdWY%2BCNCqeW7N8W%2BZ47ImN9JTdx3r8LmjJEF&X-Amz-Signature=ba81a01f32bc1a5c4d3f4583f5cc49314b1deb448731d67fa051ab69e84756b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUQU6G7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDXo9eiyA%2FVIlsaxUlIOt11KK9xzC8p87MV1%2F3dVejzswIhAJiaFORuk8xkZ1wVR9vj4nN802Gu04QG%2FMFaws9jrT5UKv8DCB8QABoMNjM3NDIzMTgzODA1Igwu0fv2sUbU0%2Fwl%2Bfwq3ANTn19hHdPtWi5YkEJNrHbp8YRiyTvNGMWFcmyIQmoaOX1nUcrb47788krwVr%2BR3Rd8jMfCJ79%2BUsNyredQpvqAwWzAhJ%2F%2BzGdHQvqkGIs65%2BJ9Xa32v05JUfXQ5lHGsDz8wZpUXqzKyFj0i5AUjznGoYiu43q%2FqQR3oc8f6IPT2aEbDDlHETG0z2VIM41Z%2F61dvaHlVz%2FAb6b1i5F7fztl7dc9C0QRd6UH4k8JstVLR5XCMEp9kywLX9CC5daZa3fLrgQYElnwnfXvo0BPOaetFyA6kw35qliNDiWbCKCP%2FGZprNMUFOfblCbLepwygtqP4X4oTB6VQ11XrHeXhnMHXASc6%2Bod2NjCprOzlICCUBbzT3bRLBnPJW7GTcVVunH1pkRvv05ts7WTHajHb1t2yPif2q44Glem597LFQ6OaEGKzAC%2FH19qTNGry8kX4SB6RjnjIyHHvAsExsXFrgiyFNWdDgMiKiFNUdwnJya2GegtfRrRn8eX8oVv%2B%2FjmItzsfiFs6wUsdR7TahZDQhKOU5E5Ixk8KxKSTKoEBsI7HQu3Gv%2B3ts7kBioo5TWdxPU97aDZbP2IvSCBy%2BrS4PqT%2FeawEj%2BYdzGIJxTJIv6UvAS2sFf3XRSyObcwcTDXyNDDBjqkASPq27LMumhJfOAhUZA7OQvDhjKHbUp1dZWD9Vu%2BIkIOkcjwc1Ycqz3q%2F7b2zbwaOEc3JY3c42GP7oe0NytzmxAv38tyf5zP6IHSAQt29H71PlrIHulj%2BTFEgsSfTSXxG9PbmXXMbEx3ePcBjG2HCWX3kLLYLLn%2BAr2z35ABSdTmpjwNCzpDUnrvSdWY%2BCNCqeW7N8W%2BZ47ImN9JTdx3r8LmjJEF&X-Amz-Signature=9b4219335247061ec797219cfba8b5aae91400e656a80491eabc6b15a744ad25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUQU6G7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDXo9eiyA%2FVIlsaxUlIOt11KK9xzC8p87MV1%2F3dVejzswIhAJiaFORuk8xkZ1wVR9vj4nN802Gu04QG%2FMFaws9jrT5UKv8DCB8QABoMNjM3NDIzMTgzODA1Igwu0fv2sUbU0%2Fwl%2Bfwq3ANTn19hHdPtWi5YkEJNrHbp8YRiyTvNGMWFcmyIQmoaOX1nUcrb47788krwVr%2BR3Rd8jMfCJ79%2BUsNyredQpvqAwWzAhJ%2F%2BzGdHQvqkGIs65%2BJ9Xa32v05JUfXQ5lHGsDz8wZpUXqzKyFj0i5AUjznGoYiu43q%2FqQR3oc8f6IPT2aEbDDlHETG0z2VIM41Z%2F61dvaHlVz%2FAb6b1i5F7fztl7dc9C0QRd6UH4k8JstVLR5XCMEp9kywLX9CC5daZa3fLrgQYElnwnfXvo0BPOaetFyA6kw35qliNDiWbCKCP%2FGZprNMUFOfblCbLepwygtqP4X4oTB6VQ11XrHeXhnMHXASc6%2Bod2NjCprOzlICCUBbzT3bRLBnPJW7GTcVVunH1pkRvv05ts7WTHajHb1t2yPif2q44Glem597LFQ6OaEGKzAC%2FH19qTNGry8kX4SB6RjnjIyHHvAsExsXFrgiyFNWdDgMiKiFNUdwnJya2GegtfRrRn8eX8oVv%2B%2FjmItzsfiFs6wUsdR7TahZDQhKOU5E5Ixk8KxKSTKoEBsI7HQu3Gv%2B3ts7kBioo5TWdxPU97aDZbP2IvSCBy%2BrS4PqT%2FeawEj%2BYdzGIJxTJIv6UvAS2sFf3XRSyObcwcTDXyNDDBjqkASPq27LMumhJfOAhUZA7OQvDhjKHbUp1dZWD9Vu%2BIkIOkcjwc1Ycqz3q%2F7b2zbwaOEc3JY3c42GP7oe0NytzmxAv38tyf5zP6IHSAQt29H71PlrIHulj%2BTFEgsSfTSXxG9PbmXXMbEx3ePcBjG2HCWX3kLLYLLn%2BAr2z35ABSdTmpjwNCzpDUnrvSdWY%2BCNCqeW7N8W%2BZ47ImN9JTdx3r8LmjJEF&X-Amz-Signature=143473c7051d6ea0bd7121eaa237bf44cacef42ac79a07d60787b8d1a2e0cfca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUQU6G7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDXo9eiyA%2FVIlsaxUlIOt11KK9xzC8p87MV1%2F3dVejzswIhAJiaFORuk8xkZ1wVR9vj4nN802Gu04QG%2FMFaws9jrT5UKv8DCB8QABoMNjM3NDIzMTgzODA1Igwu0fv2sUbU0%2Fwl%2Bfwq3ANTn19hHdPtWi5YkEJNrHbp8YRiyTvNGMWFcmyIQmoaOX1nUcrb47788krwVr%2BR3Rd8jMfCJ79%2BUsNyredQpvqAwWzAhJ%2F%2BzGdHQvqkGIs65%2BJ9Xa32v05JUfXQ5lHGsDz8wZpUXqzKyFj0i5AUjznGoYiu43q%2FqQR3oc8f6IPT2aEbDDlHETG0z2VIM41Z%2F61dvaHlVz%2FAb6b1i5F7fztl7dc9C0QRd6UH4k8JstVLR5XCMEp9kywLX9CC5daZa3fLrgQYElnwnfXvo0BPOaetFyA6kw35qliNDiWbCKCP%2FGZprNMUFOfblCbLepwygtqP4X4oTB6VQ11XrHeXhnMHXASc6%2Bod2NjCprOzlICCUBbzT3bRLBnPJW7GTcVVunH1pkRvv05ts7WTHajHb1t2yPif2q44Glem597LFQ6OaEGKzAC%2FH19qTNGry8kX4SB6RjnjIyHHvAsExsXFrgiyFNWdDgMiKiFNUdwnJya2GegtfRrRn8eX8oVv%2B%2FjmItzsfiFs6wUsdR7TahZDQhKOU5E5Ixk8KxKSTKoEBsI7HQu3Gv%2B3ts7kBioo5TWdxPU97aDZbP2IvSCBy%2BrS4PqT%2FeawEj%2BYdzGIJxTJIv6UvAS2sFf3XRSyObcwcTDXyNDDBjqkASPq27LMumhJfOAhUZA7OQvDhjKHbUp1dZWD9Vu%2BIkIOkcjwc1Ycqz3q%2F7b2zbwaOEc3JY3c42GP7oe0NytzmxAv38tyf5zP6IHSAQt29H71PlrIHulj%2BTFEgsSfTSXxG9PbmXXMbEx3ePcBjG2HCWX3kLLYLLn%2BAr2z35ABSdTmpjwNCzpDUnrvSdWY%2BCNCqeW7N8W%2BZ47ImN9JTdx3r8LmjJEF&X-Amz-Signature=a2cca3bce04e515fc06951d4b6f818df6820dfc5fe9017717025e0cb3b136507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUQU6G7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDXo9eiyA%2FVIlsaxUlIOt11KK9xzC8p87MV1%2F3dVejzswIhAJiaFORuk8xkZ1wVR9vj4nN802Gu04QG%2FMFaws9jrT5UKv8DCB8QABoMNjM3NDIzMTgzODA1Igwu0fv2sUbU0%2Fwl%2Bfwq3ANTn19hHdPtWi5YkEJNrHbp8YRiyTvNGMWFcmyIQmoaOX1nUcrb47788krwVr%2BR3Rd8jMfCJ79%2BUsNyredQpvqAwWzAhJ%2F%2BzGdHQvqkGIs65%2BJ9Xa32v05JUfXQ5lHGsDz8wZpUXqzKyFj0i5AUjznGoYiu43q%2FqQR3oc8f6IPT2aEbDDlHETG0z2VIM41Z%2F61dvaHlVz%2FAb6b1i5F7fztl7dc9C0QRd6UH4k8JstVLR5XCMEp9kywLX9CC5daZa3fLrgQYElnwnfXvo0BPOaetFyA6kw35qliNDiWbCKCP%2FGZprNMUFOfblCbLepwygtqP4X4oTB6VQ11XrHeXhnMHXASc6%2Bod2NjCprOzlICCUBbzT3bRLBnPJW7GTcVVunH1pkRvv05ts7WTHajHb1t2yPif2q44Glem597LFQ6OaEGKzAC%2FH19qTNGry8kX4SB6RjnjIyHHvAsExsXFrgiyFNWdDgMiKiFNUdwnJya2GegtfRrRn8eX8oVv%2B%2FjmItzsfiFs6wUsdR7TahZDQhKOU5E5Ixk8KxKSTKoEBsI7HQu3Gv%2B3ts7kBioo5TWdxPU97aDZbP2IvSCBy%2BrS4PqT%2FeawEj%2BYdzGIJxTJIv6UvAS2sFf3XRSyObcwcTDXyNDDBjqkASPq27LMumhJfOAhUZA7OQvDhjKHbUp1dZWD9Vu%2BIkIOkcjwc1Ycqz3q%2F7b2zbwaOEc3JY3c42GP7oe0NytzmxAv38tyf5zP6IHSAQt29H71PlrIHulj%2BTFEgsSfTSXxG9PbmXXMbEx3ePcBjG2HCWX3kLLYLLn%2BAr2z35ABSdTmpjwNCzpDUnrvSdWY%2BCNCqeW7N8W%2BZ47ImN9JTdx3r8LmjJEF&X-Amz-Signature=38884faee42fa13f9a31dd31a357c922be0cc58d699b9209dfc0a442e34b0d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
