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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYEIVHU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcHH4PbqOJZ6cg9dJDqkdv25sMdICVKEJzHI5l1fFT3QIhAJCLA30zSvOGmNIEde1DrYvqH4OVg06BRuCkb7XdPwQHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQcbmwoA4bUc5r3cgq3AOonN1iy5Pq2RLo7mFtOy3YGW%2B06EQytsPIEpw92lMUOk574V5TYmwOnhMMPfaJg%2BLhwzfqvlqEjJ0siLb9ZHKDZNopfMgQ88mLay51lRnyzXE3NT87Bic%2BoYuQifk8aheldVSnqK3i8jXOd8Eecuxhvv%2FEcQj7LKDoK6sLrFLrpznbzPGqJwTxAbQI2MYku9fzVog7u%2B8sgYtqmuQ%2BAVQ4bfkgQZXbGoS049LnYp3JLCT2xXlbK6DsLVPXUIkDig4GQHQLXjtpSEje7eiKPaFun1peia330QW1pvZQNCHbdDUUhp31KtdHUxxAa6G9tWiLMHy2iBmbtCDDWVqU1n%2B1XeMBphkwEJZ97DJodHrSmQeBjcc5ZCqDwB6xLN7jOvIZAIPsoIP5SsHwpVi6PuIA8%2BP6EjCtwlk18Bmjr%2FXpMAJyhU5OVhTR41bqA0z2ClUDo%2F8QcLeOgU6DrITMM0IYb4y75%2F0z5v1juOU56og524gsIw0eVSi2%2FZctqPSgqdieJ0rHXUo8bEbcVYovUx1yo5mp3JjyJkXvwxmu6Aonensqek9rSggUr9bnOsVsDzWPojn8orRXZ%2FceIUKxN3rgz5FPsFFj2P7B4HAplE8c3Abdtpzv%2F1s%2FJVFH9TD31PjDBjqkATIwWfXfS1lj67qUYT1HsjFAkjlzUt6%2FtOrfPfEt9sBmNhQTByNyDIjlwQJ6tx3R%2FWCyX0RJNFol7O6cWS3DJPFr3W9OQfA%2BrJcbWC3MPD8AKz2xvM4xU45RjjAT%2BcUSfafUYyAwBOgtjvGe8sFlTa8%2BIIW273CoEI3wwuiug8mfxNlv1S5Y3O%2BGw4iB2rM6ZzBpp%2BnE0IUCbgSwQR42D76GoPPN&X-Amz-Signature=6453c5b9faa51deaa0bb59c3b491f53dbf5a98f69c24babae882694e3a2569b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYEIVHU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcHH4PbqOJZ6cg9dJDqkdv25sMdICVKEJzHI5l1fFT3QIhAJCLA30zSvOGmNIEde1DrYvqH4OVg06BRuCkb7XdPwQHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQcbmwoA4bUc5r3cgq3AOonN1iy5Pq2RLo7mFtOy3YGW%2B06EQytsPIEpw92lMUOk574V5TYmwOnhMMPfaJg%2BLhwzfqvlqEjJ0siLb9ZHKDZNopfMgQ88mLay51lRnyzXE3NT87Bic%2BoYuQifk8aheldVSnqK3i8jXOd8Eecuxhvv%2FEcQj7LKDoK6sLrFLrpznbzPGqJwTxAbQI2MYku9fzVog7u%2B8sgYtqmuQ%2BAVQ4bfkgQZXbGoS049LnYp3JLCT2xXlbK6DsLVPXUIkDig4GQHQLXjtpSEje7eiKPaFun1peia330QW1pvZQNCHbdDUUhp31KtdHUxxAa6G9tWiLMHy2iBmbtCDDWVqU1n%2B1XeMBphkwEJZ97DJodHrSmQeBjcc5ZCqDwB6xLN7jOvIZAIPsoIP5SsHwpVi6PuIA8%2BP6EjCtwlk18Bmjr%2FXpMAJyhU5OVhTR41bqA0z2ClUDo%2F8QcLeOgU6DrITMM0IYb4y75%2F0z5v1juOU56og524gsIw0eVSi2%2FZctqPSgqdieJ0rHXUo8bEbcVYovUx1yo5mp3JjyJkXvwxmu6Aonensqek9rSggUr9bnOsVsDzWPojn8orRXZ%2FceIUKxN3rgz5FPsFFj2P7B4HAplE8c3Abdtpzv%2F1s%2FJVFH9TD31PjDBjqkATIwWfXfS1lj67qUYT1HsjFAkjlzUt6%2FtOrfPfEt9sBmNhQTByNyDIjlwQJ6tx3R%2FWCyX0RJNFol7O6cWS3DJPFr3W9OQfA%2BrJcbWC3MPD8AKz2xvM4xU45RjjAT%2BcUSfafUYyAwBOgtjvGe8sFlTa8%2BIIW273CoEI3wwuiug8mfxNlv1S5Y3O%2BGw4iB2rM6ZzBpp%2BnE0IUCbgSwQR42D76GoPPN&X-Amz-Signature=bf7a8a384603c3b113c286e69e8a045d06535bd82bbc377945c23a56da8eda2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYEIVHU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcHH4PbqOJZ6cg9dJDqkdv25sMdICVKEJzHI5l1fFT3QIhAJCLA30zSvOGmNIEde1DrYvqH4OVg06BRuCkb7XdPwQHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQcbmwoA4bUc5r3cgq3AOonN1iy5Pq2RLo7mFtOy3YGW%2B06EQytsPIEpw92lMUOk574V5TYmwOnhMMPfaJg%2BLhwzfqvlqEjJ0siLb9ZHKDZNopfMgQ88mLay51lRnyzXE3NT87Bic%2BoYuQifk8aheldVSnqK3i8jXOd8Eecuxhvv%2FEcQj7LKDoK6sLrFLrpznbzPGqJwTxAbQI2MYku9fzVog7u%2B8sgYtqmuQ%2BAVQ4bfkgQZXbGoS049LnYp3JLCT2xXlbK6DsLVPXUIkDig4GQHQLXjtpSEje7eiKPaFun1peia330QW1pvZQNCHbdDUUhp31KtdHUxxAa6G9tWiLMHy2iBmbtCDDWVqU1n%2B1XeMBphkwEJZ97DJodHrSmQeBjcc5ZCqDwB6xLN7jOvIZAIPsoIP5SsHwpVi6PuIA8%2BP6EjCtwlk18Bmjr%2FXpMAJyhU5OVhTR41bqA0z2ClUDo%2F8QcLeOgU6DrITMM0IYb4y75%2F0z5v1juOU56og524gsIw0eVSi2%2FZctqPSgqdieJ0rHXUo8bEbcVYovUx1yo5mp3JjyJkXvwxmu6Aonensqek9rSggUr9bnOsVsDzWPojn8orRXZ%2FceIUKxN3rgz5FPsFFj2P7B4HAplE8c3Abdtpzv%2F1s%2FJVFH9TD31PjDBjqkATIwWfXfS1lj67qUYT1HsjFAkjlzUt6%2FtOrfPfEt9sBmNhQTByNyDIjlwQJ6tx3R%2FWCyX0RJNFol7O6cWS3DJPFr3W9OQfA%2BrJcbWC3MPD8AKz2xvM4xU45RjjAT%2BcUSfafUYyAwBOgtjvGe8sFlTa8%2BIIW273CoEI3wwuiug8mfxNlv1S5Y3O%2BGw4iB2rM6ZzBpp%2BnE0IUCbgSwQR42D76GoPPN&X-Amz-Signature=94742d5b6a56bdc35d74ee6a6c94a58ffa665a9b492ba90a622d0302aeed2920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYEIVHU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcHH4PbqOJZ6cg9dJDqkdv25sMdICVKEJzHI5l1fFT3QIhAJCLA30zSvOGmNIEde1DrYvqH4OVg06BRuCkb7XdPwQHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQcbmwoA4bUc5r3cgq3AOonN1iy5Pq2RLo7mFtOy3YGW%2B06EQytsPIEpw92lMUOk574V5TYmwOnhMMPfaJg%2BLhwzfqvlqEjJ0siLb9ZHKDZNopfMgQ88mLay51lRnyzXE3NT87Bic%2BoYuQifk8aheldVSnqK3i8jXOd8Eecuxhvv%2FEcQj7LKDoK6sLrFLrpznbzPGqJwTxAbQI2MYku9fzVog7u%2B8sgYtqmuQ%2BAVQ4bfkgQZXbGoS049LnYp3JLCT2xXlbK6DsLVPXUIkDig4GQHQLXjtpSEje7eiKPaFun1peia330QW1pvZQNCHbdDUUhp31KtdHUxxAa6G9tWiLMHy2iBmbtCDDWVqU1n%2B1XeMBphkwEJZ97DJodHrSmQeBjcc5ZCqDwB6xLN7jOvIZAIPsoIP5SsHwpVi6PuIA8%2BP6EjCtwlk18Bmjr%2FXpMAJyhU5OVhTR41bqA0z2ClUDo%2F8QcLeOgU6DrITMM0IYb4y75%2F0z5v1juOU56og524gsIw0eVSi2%2FZctqPSgqdieJ0rHXUo8bEbcVYovUx1yo5mp3JjyJkXvwxmu6Aonensqek9rSggUr9bnOsVsDzWPojn8orRXZ%2FceIUKxN3rgz5FPsFFj2P7B4HAplE8c3Abdtpzv%2F1s%2FJVFH9TD31PjDBjqkATIwWfXfS1lj67qUYT1HsjFAkjlzUt6%2FtOrfPfEt9sBmNhQTByNyDIjlwQJ6tx3R%2FWCyX0RJNFol7O6cWS3DJPFr3W9OQfA%2BrJcbWC3MPD8AKz2xvM4xU45RjjAT%2BcUSfafUYyAwBOgtjvGe8sFlTa8%2BIIW273CoEI3wwuiug8mfxNlv1S5Y3O%2BGw4iB2rM6ZzBpp%2BnE0IUCbgSwQR42D76GoPPN&X-Amz-Signature=50d37255b179ca941f1ba7711a06b0fa0943e38239a7432742da8778353bd0a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYEIVHU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcHH4PbqOJZ6cg9dJDqkdv25sMdICVKEJzHI5l1fFT3QIhAJCLA30zSvOGmNIEde1DrYvqH4OVg06BRuCkb7XdPwQHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQcbmwoA4bUc5r3cgq3AOonN1iy5Pq2RLo7mFtOy3YGW%2B06EQytsPIEpw92lMUOk574V5TYmwOnhMMPfaJg%2BLhwzfqvlqEjJ0siLb9ZHKDZNopfMgQ88mLay51lRnyzXE3NT87Bic%2BoYuQifk8aheldVSnqK3i8jXOd8Eecuxhvv%2FEcQj7LKDoK6sLrFLrpznbzPGqJwTxAbQI2MYku9fzVog7u%2B8sgYtqmuQ%2BAVQ4bfkgQZXbGoS049LnYp3JLCT2xXlbK6DsLVPXUIkDig4GQHQLXjtpSEje7eiKPaFun1peia330QW1pvZQNCHbdDUUhp31KtdHUxxAa6G9tWiLMHy2iBmbtCDDWVqU1n%2B1XeMBphkwEJZ97DJodHrSmQeBjcc5ZCqDwB6xLN7jOvIZAIPsoIP5SsHwpVi6PuIA8%2BP6EjCtwlk18Bmjr%2FXpMAJyhU5OVhTR41bqA0z2ClUDo%2F8QcLeOgU6DrITMM0IYb4y75%2F0z5v1juOU56og524gsIw0eVSi2%2FZctqPSgqdieJ0rHXUo8bEbcVYovUx1yo5mp3JjyJkXvwxmu6Aonensqek9rSggUr9bnOsVsDzWPojn8orRXZ%2FceIUKxN3rgz5FPsFFj2P7B4HAplE8c3Abdtpzv%2F1s%2FJVFH9TD31PjDBjqkATIwWfXfS1lj67qUYT1HsjFAkjlzUt6%2FtOrfPfEt9sBmNhQTByNyDIjlwQJ6tx3R%2FWCyX0RJNFol7O6cWS3DJPFr3W9OQfA%2BrJcbWC3MPD8AKz2xvM4xU45RjjAT%2BcUSfafUYyAwBOgtjvGe8sFlTa8%2BIIW273CoEI3wwuiug8mfxNlv1S5Y3O%2BGw4iB2rM6ZzBpp%2BnE0IUCbgSwQR42D76GoPPN&X-Amz-Signature=881cd742da51eeabad2b17a2d08b7e549a6dae9558a698883a78021de494fed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKYEIVHU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcHH4PbqOJZ6cg9dJDqkdv25sMdICVKEJzHI5l1fFT3QIhAJCLA30zSvOGmNIEde1DrYvqH4OVg06BRuCkb7XdPwQHKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQcbmwoA4bUc5r3cgq3AOonN1iy5Pq2RLo7mFtOy3YGW%2B06EQytsPIEpw92lMUOk574V5TYmwOnhMMPfaJg%2BLhwzfqvlqEjJ0siLb9ZHKDZNopfMgQ88mLay51lRnyzXE3NT87Bic%2BoYuQifk8aheldVSnqK3i8jXOd8Eecuxhvv%2FEcQj7LKDoK6sLrFLrpznbzPGqJwTxAbQI2MYku9fzVog7u%2B8sgYtqmuQ%2BAVQ4bfkgQZXbGoS049LnYp3JLCT2xXlbK6DsLVPXUIkDig4GQHQLXjtpSEje7eiKPaFun1peia330QW1pvZQNCHbdDUUhp31KtdHUxxAa6G9tWiLMHy2iBmbtCDDWVqU1n%2B1XeMBphkwEJZ97DJodHrSmQeBjcc5ZCqDwB6xLN7jOvIZAIPsoIP5SsHwpVi6PuIA8%2BP6EjCtwlk18Bmjr%2FXpMAJyhU5OVhTR41bqA0z2ClUDo%2F8QcLeOgU6DrITMM0IYb4y75%2F0z5v1juOU56og524gsIw0eVSi2%2FZctqPSgqdieJ0rHXUo8bEbcVYovUx1yo5mp3JjyJkXvwxmu6Aonensqek9rSggUr9bnOsVsDzWPojn8orRXZ%2FceIUKxN3rgz5FPsFFj2P7B4HAplE8c3Abdtpzv%2F1s%2FJVFH9TD31PjDBjqkATIwWfXfS1lj67qUYT1HsjFAkjlzUt6%2FtOrfPfEt9sBmNhQTByNyDIjlwQJ6tx3R%2FWCyX0RJNFol7O6cWS3DJPFr3W9OQfA%2BrJcbWC3MPD8AKz2xvM4xU45RjjAT%2BcUSfafUYyAwBOgtjvGe8sFlTa8%2BIIW273CoEI3wwuiug8mfxNlv1S5Y3O%2BGw4iB2rM6ZzBpp%2BnE0IUCbgSwQR42D76GoPPN&X-Amz-Signature=68c189393efa771bbb9a6a7929a6cc760ab7174fe4d167e2530cccec5368d458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
