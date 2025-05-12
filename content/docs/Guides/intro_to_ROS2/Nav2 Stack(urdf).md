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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FI5DLMZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxXmQCtee%2FGb2CLY%2FswZwdJie5pe2hX76C%2BC9l5O52jQIgZ0E8h0pgwEN4Np2yPOobD7Rs78iB86%2FejEbZSv1JAVsqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmNC%2BSILdZfTBPpwCrcA5LYvh05j0KwlwD8khsDje4DqtuGk%2BJUYyqhrGqEsWGRHH8jiq3zVwxfFQKjkFgYR9WkuqTOhHj42GI0gKq%2FG%2B17QimmCat8M1sAOcFuv5X1v3JbGtY8oltg%2F%2BKJbPq0TLEXtbqVup3IfM4cfABQalw8L2%2FPg3yhKtI61LQjG8GHr1gxa7RetQ6FaG17Notlu%2FRdS6VtjIen0UDZkW40aDgw6Lbn2GQsAiOYmuUGIsh7daL87d6i%2BCtxH2RiQRYJcEbScaTSFgu%2BkFb4VE3C07tD3Jms7aufSMFWGY%2FpoIm%2F47nw%2FxTdnKmxDhQkyrJMJlFvN2wDSuwHUgsV9u8%2FmWmCqNX1rjJnibY5pi%2FIsOluKJx2ap8lgKLkPJUXV2DjfGQrg5BNu47lFo6ScXkQz7LN%2Br54T9tqxx9p0UfjIBME2B%2FqRKJVm2szAk%2BjCtwyh36RsUsgZ6sp3t3M%2B%2BTm2qzHvh1uS1J3VP6zu8SFK0X%2B8R3kFhq75Suo34Nuou32J7j5u5cH%2BFdf%2FQqm6A7TXN1YOxsav9MFRSfNXjGrtZcmvA915XVXyBwzKIy8im1z2aggkR185JWZONJDTCfIhgatQevvYxjyrk2EekLgmAzbwLlgjBzRvz7X6ZvVMK33icEGOqUB%2B8qCHye1cGRS8fNFaTQMHPDbRfebz6dZbRvnQGxYOeTc%2BgpUvtLbA1Jdpe4%2BfBAmgouoJ0jhTFgr%2BhHXENo01KTICd%2FUHHbTyuL7lCufL1cqOfrPl7UXhiMB1D0dM1tMI4iAIgp3pg9CdrKbZ%2F7SdkW24KUCvPNUz%2BVW%2BORlONWIFTP7OBHENSdWlZ76t9CvfGfAXzWh1p7OPVIRcBEKfZ%2FHlxvv&X-Amz-Signature=342be663ab78dfc8ff152559ab8e76ed9937c85629c237a3d92a4b195de6cd60&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FI5DLMZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxXmQCtee%2FGb2CLY%2FswZwdJie5pe2hX76C%2BC9l5O52jQIgZ0E8h0pgwEN4Np2yPOobD7Rs78iB86%2FejEbZSv1JAVsqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmNC%2BSILdZfTBPpwCrcA5LYvh05j0KwlwD8khsDje4DqtuGk%2BJUYyqhrGqEsWGRHH8jiq3zVwxfFQKjkFgYR9WkuqTOhHj42GI0gKq%2FG%2B17QimmCat8M1sAOcFuv5X1v3JbGtY8oltg%2F%2BKJbPq0TLEXtbqVup3IfM4cfABQalw8L2%2FPg3yhKtI61LQjG8GHr1gxa7RetQ6FaG17Notlu%2FRdS6VtjIen0UDZkW40aDgw6Lbn2GQsAiOYmuUGIsh7daL87d6i%2BCtxH2RiQRYJcEbScaTSFgu%2BkFb4VE3C07tD3Jms7aufSMFWGY%2FpoIm%2F47nw%2FxTdnKmxDhQkyrJMJlFvN2wDSuwHUgsV9u8%2FmWmCqNX1rjJnibY5pi%2FIsOluKJx2ap8lgKLkPJUXV2DjfGQrg5BNu47lFo6ScXkQz7LN%2Br54T9tqxx9p0UfjIBME2B%2FqRKJVm2szAk%2BjCtwyh36RsUsgZ6sp3t3M%2B%2BTm2qzHvh1uS1J3VP6zu8SFK0X%2B8R3kFhq75Suo34Nuou32J7j5u5cH%2BFdf%2FQqm6A7TXN1YOxsav9MFRSfNXjGrtZcmvA915XVXyBwzKIy8im1z2aggkR185JWZONJDTCfIhgatQevvYxjyrk2EekLgmAzbwLlgjBzRvz7X6ZvVMK33icEGOqUB%2B8qCHye1cGRS8fNFaTQMHPDbRfebz6dZbRvnQGxYOeTc%2BgpUvtLbA1Jdpe4%2BfBAmgouoJ0jhTFgr%2BhHXENo01KTICd%2FUHHbTyuL7lCufL1cqOfrPl7UXhiMB1D0dM1tMI4iAIgp3pg9CdrKbZ%2F7SdkW24KUCvPNUz%2BVW%2BORlONWIFTP7OBHENSdWlZ76t9CvfGfAXzWh1p7OPVIRcBEKfZ%2FHlxvv&X-Amz-Signature=cbee20c4cf658fd2882d5804ad911ba8ec7a79fe98403fec933fedbb6f937564&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FI5DLMZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxXmQCtee%2FGb2CLY%2FswZwdJie5pe2hX76C%2BC9l5O52jQIgZ0E8h0pgwEN4Np2yPOobD7Rs78iB86%2FejEbZSv1JAVsqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmNC%2BSILdZfTBPpwCrcA5LYvh05j0KwlwD8khsDje4DqtuGk%2BJUYyqhrGqEsWGRHH8jiq3zVwxfFQKjkFgYR9WkuqTOhHj42GI0gKq%2FG%2B17QimmCat8M1sAOcFuv5X1v3JbGtY8oltg%2F%2BKJbPq0TLEXtbqVup3IfM4cfABQalw8L2%2FPg3yhKtI61LQjG8GHr1gxa7RetQ6FaG17Notlu%2FRdS6VtjIen0UDZkW40aDgw6Lbn2GQsAiOYmuUGIsh7daL87d6i%2BCtxH2RiQRYJcEbScaTSFgu%2BkFb4VE3C07tD3Jms7aufSMFWGY%2FpoIm%2F47nw%2FxTdnKmxDhQkyrJMJlFvN2wDSuwHUgsV9u8%2FmWmCqNX1rjJnibY5pi%2FIsOluKJx2ap8lgKLkPJUXV2DjfGQrg5BNu47lFo6ScXkQz7LN%2Br54T9tqxx9p0UfjIBME2B%2FqRKJVm2szAk%2BjCtwyh36RsUsgZ6sp3t3M%2B%2BTm2qzHvh1uS1J3VP6zu8SFK0X%2B8R3kFhq75Suo34Nuou32J7j5u5cH%2BFdf%2FQqm6A7TXN1YOxsav9MFRSfNXjGrtZcmvA915XVXyBwzKIy8im1z2aggkR185JWZONJDTCfIhgatQevvYxjyrk2EekLgmAzbwLlgjBzRvz7X6ZvVMK33icEGOqUB%2B8qCHye1cGRS8fNFaTQMHPDbRfebz6dZbRvnQGxYOeTc%2BgpUvtLbA1Jdpe4%2BfBAmgouoJ0jhTFgr%2BhHXENo01KTICd%2FUHHbTyuL7lCufL1cqOfrPl7UXhiMB1D0dM1tMI4iAIgp3pg9CdrKbZ%2F7SdkW24KUCvPNUz%2BVW%2BORlONWIFTP7OBHENSdWlZ76t9CvfGfAXzWh1p7OPVIRcBEKfZ%2FHlxvv&X-Amz-Signature=ad09a6daf97269dc59766d7258f0d10aaa0b68e79becd1fd365ce81fb62002b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FI5DLMZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxXmQCtee%2FGb2CLY%2FswZwdJie5pe2hX76C%2BC9l5O52jQIgZ0E8h0pgwEN4Np2yPOobD7Rs78iB86%2FejEbZSv1JAVsqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmNC%2BSILdZfTBPpwCrcA5LYvh05j0KwlwD8khsDje4DqtuGk%2BJUYyqhrGqEsWGRHH8jiq3zVwxfFQKjkFgYR9WkuqTOhHj42GI0gKq%2FG%2B17QimmCat8M1sAOcFuv5X1v3JbGtY8oltg%2F%2BKJbPq0TLEXtbqVup3IfM4cfABQalw8L2%2FPg3yhKtI61LQjG8GHr1gxa7RetQ6FaG17Notlu%2FRdS6VtjIen0UDZkW40aDgw6Lbn2GQsAiOYmuUGIsh7daL87d6i%2BCtxH2RiQRYJcEbScaTSFgu%2BkFb4VE3C07tD3Jms7aufSMFWGY%2FpoIm%2F47nw%2FxTdnKmxDhQkyrJMJlFvN2wDSuwHUgsV9u8%2FmWmCqNX1rjJnibY5pi%2FIsOluKJx2ap8lgKLkPJUXV2DjfGQrg5BNu47lFo6ScXkQz7LN%2Br54T9tqxx9p0UfjIBME2B%2FqRKJVm2szAk%2BjCtwyh36RsUsgZ6sp3t3M%2B%2BTm2qzHvh1uS1J3VP6zu8SFK0X%2B8R3kFhq75Suo34Nuou32J7j5u5cH%2BFdf%2FQqm6A7TXN1YOxsav9MFRSfNXjGrtZcmvA915XVXyBwzKIy8im1z2aggkR185JWZONJDTCfIhgatQevvYxjyrk2EekLgmAzbwLlgjBzRvz7X6ZvVMK33icEGOqUB%2B8qCHye1cGRS8fNFaTQMHPDbRfebz6dZbRvnQGxYOeTc%2BgpUvtLbA1Jdpe4%2BfBAmgouoJ0jhTFgr%2BhHXENo01KTICd%2FUHHbTyuL7lCufL1cqOfrPl7UXhiMB1D0dM1tMI4iAIgp3pg9CdrKbZ%2F7SdkW24KUCvPNUz%2BVW%2BORlONWIFTP7OBHENSdWlZ76t9CvfGfAXzWh1p7OPVIRcBEKfZ%2FHlxvv&X-Amz-Signature=418f5257594e37d3ee7288b0351b1bb3ad3ce3858f230603fa90c9a0782afa88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FI5DLMZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxXmQCtee%2FGb2CLY%2FswZwdJie5pe2hX76C%2BC9l5O52jQIgZ0E8h0pgwEN4Np2yPOobD7Rs78iB86%2FejEbZSv1JAVsqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmNC%2BSILdZfTBPpwCrcA5LYvh05j0KwlwD8khsDje4DqtuGk%2BJUYyqhrGqEsWGRHH8jiq3zVwxfFQKjkFgYR9WkuqTOhHj42GI0gKq%2FG%2B17QimmCat8M1sAOcFuv5X1v3JbGtY8oltg%2F%2BKJbPq0TLEXtbqVup3IfM4cfABQalw8L2%2FPg3yhKtI61LQjG8GHr1gxa7RetQ6FaG17Notlu%2FRdS6VtjIen0UDZkW40aDgw6Lbn2GQsAiOYmuUGIsh7daL87d6i%2BCtxH2RiQRYJcEbScaTSFgu%2BkFb4VE3C07tD3Jms7aufSMFWGY%2FpoIm%2F47nw%2FxTdnKmxDhQkyrJMJlFvN2wDSuwHUgsV9u8%2FmWmCqNX1rjJnibY5pi%2FIsOluKJx2ap8lgKLkPJUXV2DjfGQrg5BNu47lFo6ScXkQz7LN%2Br54T9tqxx9p0UfjIBME2B%2FqRKJVm2szAk%2BjCtwyh36RsUsgZ6sp3t3M%2B%2BTm2qzHvh1uS1J3VP6zu8SFK0X%2B8R3kFhq75Suo34Nuou32J7j5u5cH%2BFdf%2FQqm6A7TXN1YOxsav9MFRSfNXjGrtZcmvA915XVXyBwzKIy8im1z2aggkR185JWZONJDTCfIhgatQevvYxjyrk2EekLgmAzbwLlgjBzRvz7X6ZvVMK33icEGOqUB%2B8qCHye1cGRS8fNFaTQMHPDbRfebz6dZbRvnQGxYOeTc%2BgpUvtLbA1Jdpe4%2BfBAmgouoJ0jhTFgr%2BhHXENo01KTICd%2FUHHbTyuL7lCufL1cqOfrPl7UXhiMB1D0dM1tMI4iAIgp3pg9CdrKbZ%2F7SdkW24KUCvPNUz%2BVW%2BORlONWIFTP7OBHENSdWlZ76t9CvfGfAXzWh1p7OPVIRcBEKfZ%2FHlxvv&X-Amz-Signature=61f210fbf4bef7a25bd0a409714c121e433f125e1a9ff33c93eb152590d885e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FI5DLMZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDxXmQCtee%2FGb2CLY%2FswZwdJie5pe2hX76C%2BC9l5O52jQIgZ0E8h0pgwEN4Np2yPOobD7Rs78iB86%2FejEbZSv1JAVsqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmNC%2BSILdZfTBPpwCrcA5LYvh05j0KwlwD8khsDje4DqtuGk%2BJUYyqhrGqEsWGRHH8jiq3zVwxfFQKjkFgYR9WkuqTOhHj42GI0gKq%2FG%2B17QimmCat8M1sAOcFuv5X1v3JbGtY8oltg%2F%2BKJbPq0TLEXtbqVup3IfM4cfABQalw8L2%2FPg3yhKtI61LQjG8GHr1gxa7RetQ6FaG17Notlu%2FRdS6VtjIen0UDZkW40aDgw6Lbn2GQsAiOYmuUGIsh7daL87d6i%2BCtxH2RiQRYJcEbScaTSFgu%2BkFb4VE3C07tD3Jms7aufSMFWGY%2FpoIm%2F47nw%2FxTdnKmxDhQkyrJMJlFvN2wDSuwHUgsV9u8%2FmWmCqNX1rjJnibY5pi%2FIsOluKJx2ap8lgKLkPJUXV2DjfGQrg5BNu47lFo6ScXkQz7LN%2Br54T9tqxx9p0UfjIBME2B%2FqRKJVm2szAk%2BjCtwyh36RsUsgZ6sp3t3M%2B%2BTm2qzHvh1uS1J3VP6zu8SFK0X%2B8R3kFhq75Suo34Nuou32J7j5u5cH%2BFdf%2FQqm6A7TXN1YOxsav9MFRSfNXjGrtZcmvA915XVXyBwzKIy8im1z2aggkR185JWZONJDTCfIhgatQevvYxjyrk2EekLgmAzbwLlgjBzRvz7X6ZvVMK33icEGOqUB%2B8qCHye1cGRS8fNFaTQMHPDbRfebz6dZbRvnQGxYOeTc%2BgpUvtLbA1Jdpe4%2BfBAmgouoJ0jhTFgr%2BhHXENo01KTICd%2FUHHbTyuL7lCufL1cqOfrPl7UXhiMB1D0dM1tMI4iAIgp3pg9CdrKbZ%2F7SdkW24KUCvPNUz%2BVW%2BORlONWIFTP7OBHENSdWlZ76t9CvfGfAXzWh1p7OPVIRcBEKfZ%2FHlxvv&X-Amz-Signature=8c82815880d3005fe8cc301580f3b9bd17c329db1a5df2de82b2ee1feb2c71b7&X-Amz-SignedHeaders=host&x-id=GetObject)
