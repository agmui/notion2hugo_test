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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUCGXKV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCuQa5Ji7mFgZwjX9mKpQhNgcT1Ly17F3BhrMrSFsQIrAIhAOiF53uMi6cGEoeQS6ax1A8ch3Du2dBupD4aPQxnmgOAKv8DCFQQABoMNjM3NDIzMTgzODA1IgwlnR0YdUnLY2og2bYq3APVPVe6YXMBn%2F30IERqwev8XF9RAUCLSz31XtOe5zL%2FuGq8V74jXpPLtW7151PnbPQrx2FdNU0JIcCYYkTmtbCx%2FXA0HoQTUuobn1dTw0cVvZYn2C6YKrm7rsPOd9%2BQUSyGn1J4xdSEnuILcOCErMDG0ouWJSeNLq4nX84CxXe5t1w3J20YOPBwti86IaDiX71I5%2BIHP8a0yKlvhIj5ZsBgYE7EllTJ2K9aysxLo6co3Y6shUz%2Bd4GEGPBPiUZndtSkpNOqOWbyRpEOsu60vnQ393rXUE1ClZY0s9Ny3GFsyr%2Fd%2FHd0hJZAESpzlqx%2BncnzOBU%2F8BERkdD%2B54%2FAAJHkGWFT6jY4Mff5x3Cy1IOgGo%2B3xtQfhUQD3DoffX%2Bp8qVTc5LS1UttWPHH1uZU5l4Xj%2Bx%2FhnzBMExQAlvIvtWAYX67OnI%2B2mo1RWJz6WgGwLkKqrI07%2BAz3VlPTm8YPOvNcFiva1lojHhupKUUMcMeOfqX2w%2BVp7SU2VKTCaXTyoUlfo6wwsAS%2F1CVgFbCbWtBqAjHSC1cV1Mh0LJPzF3uMdPTHXk7jPeGbJQesAigwKECwRAr4XkHI%2BlIxHs6spAmYZhTiL9qhFDoeVFNeOHTNCIED18PYL8hhle11jCc3%2FLCBjqkASp6MTC6gaGepGoI6v4oZX9yyw9tN4jYAJxD9Ng9lyn4N388nH6YzPa9QB0DGXf5myxfxhx9UJcDuc4%2F0TWvzneOuAiJcXAMRSPeSk5rjh0KuoMnrPutwr%2FfrKH0TaaYAdTM9uhMeKiABxROq9bNhoGpP5mIY6CUZqGLWCDl4wVzUi6zljkPNqKqV3iKHP8TKj6a1nyQT6PbhhvjAqwFC3VQMtdo&X-Amz-Signature=92e89fce85ae500b14ebb24a0cdf0b2589af518c51d2b3d4bbfc11d2a2b62b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUCGXKV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCuQa5Ji7mFgZwjX9mKpQhNgcT1Ly17F3BhrMrSFsQIrAIhAOiF53uMi6cGEoeQS6ax1A8ch3Du2dBupD4aPQxnmgOAKv8DCFQQABoMNjM3NDIzMTgzODA1IgwlnR0YdUnLY2og2bYq3APVPVe6YXMBn%2F30IERqwev8XF9RAUCLSz31XtOe5zL%2FuGq8V74jXpPLtW7151PnbPQrx2FdNU0JIcCYYkTmtbCx%2FXA0HoQTUuobn1dTw0cVvZYn2C6YKrm7rsPOd9%2BQUSyGn1J4xdSEnuILcOCErMDG0ouWJSeNLq4nX84CxXe5t1w3J20YOPBwti86IaDiX71I5%2BIHP8a0yKlvhIj5ZsBgYE7EllTJ2K9aysxLo6co3Y6shUz%2Bd4GEGPBPiUZndtSkpNOqOWbyRpEOsu60vnQ393rXUE1ClZY0s9Ny3GFsyr%2Fd%2FHd0hJZAESpzlqx%2BncnzOBU%2F8BERkdD%2B54%2FAAJHkGWFT6jY4Mff5x3Cy1IOgGo%2B3xtQfhUQD3DoffX%2Bp8qVTc5LS1UttWPHH1uZU5l4Xj%2Bx%2FhnzBMExQAlvIvtWAYX67OnI%2B2mo1RWJz6WgGwLkKqrI07%2BAz3VlPTm8YPOvNcFiva1lojHhupKUUMcMeOfqX2w%2BVp7SU2VKTCaXTyoUlfo6wwsAS%2F1CVgFbCbWtBqAjHSC1cV1Mh0LJPzF3uMdPTHXk7jPeGbJQesAigwKECwRAr4XkHI%2BlIxHs6spAmYZhTiL9qhFDoeVFNeOHTNCIED18PYL8hhle11jCc3%2FLCBjqkASp6MTC6gaGepGoI6v4oZX9yyw9tN4jYAJxD9Ng9lyn4N388nH6YzPa9QB0DGXf5myxfxhx9UJcDuc4%2F0TWvzneOuAiJcXAMRSPeSk5rjh0KuoMnrPutwr%2FfrKH0TaaYAdTM9uhMeKiABxROq9bNhoGpP5mIY6CUZqGLWCDl4wVzUi6zljkPNqKqV3iKHP8TKj6a1nyQT6PbhhvjAqwFC3VQMtdo&X-Amz-Signature=ae09ab19d30b401e0bec6d5a9b3400a0c392cb3cfd95874050e106472e3b9301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUCGXKV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCuQa5Ji7mFgZwjX9mKpQhNgcT1Ly17F3BhrMrSFsQIrAIhAOiF53uMi6cGEoeQS6ax1A8ch3Du2dBupD4aPQxnmgOAKv8DCFQQABoMNjM3NDIzMTgzODA1IgwlnR0YdUnLY2og2bYq3APVPVe6YXMBn%2F30IERqwev8XF9RAUCLSz31XtOe5zL%2FuGq8V74jXpPLtW7151PnbPQrx2FdNU0JIcCYYkTmtbCx%2FXA0HoQTUuobn1dTw0cVvZYn2C6YKrm7rsPOd9%2BQUSyGn1J4xdSEnuILcOCErMDG0ouWJSeNLq4nX84CxXe5t1w3J20YOPBwti86IaDiX71I5%2BIHP8a0yKlvhIj5ZsBgYE7EllTJ2K9aysxLo6co3Y6shUz%2Bd4GEGPBPiUZndtSkpNOqOWbyRpEOsu60vnQ393rXUE1ClZY0s9Ny3GFsyr%2Fd%2FHd0hJZAESpzlqx%2BncnzOBU%2F8BERkdD%2B54%2FAAJHkGWFT6jY4Mff5x3Cy1IOgGo%2B3xtQfhUQD3DoffX%2Bp8qVTc5LS1UttWPHH1uZU5l4Xj%2Bx%2FhnzBMExQAlvIvtWAYX67OnI%2B2mo1RWJz6WgGwLkKqrI07%2BAz3VlPTm8YPOvNcFiva1lojHhupKUUMcMeOfqX2w%2BVp7SU2VKTCaXTyoUlfo6wwsAS%2F1CVgFbCbWtBqAjHSC1cV1Mh0LJPzF3uMdPTHXk7jPeGbJQesAigwKECwRAr4XkHI%2BlIxHs6spAmYZhTiL9qhFDoeVFNeOHTNCIED18PYL8hhle11jCc3%2FLCBjqkASp6MTC6gaGepGoI6v4oZX9yyw9tN4jYAJxD9Ng9lyn4N388nH6YzPa9QB0DGXf5myxfxhx9UJcDuc4%2F0TWvzneOuAiJcXAMRSPeSk5rjh0KuoMnrPutwr%2FfrKH0TaaYAdTM9uhMeKiABxROq9bNhoGpP5mIY6CUZqGLWCDl4wVzUi6zljkPNqKqV3iKHP8TKj6a1nyQT6PbhhvjAqwFC3VQMtdo&X-Amz-Signature=973232da943cc20b43d8053234fc2854907dc453caa7cb344f8109ad27f500dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUCGXKV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCuQa5Ji7mFgZwjX9mKpQhNgcT1Ly17F3BhrMrSFsQIrAIhAOiF53uMi6cGEoeQS6ax1A8ch3Du2dBupD4aPQxnmgOAKv8DCFQQABoMNjM3NDIzMTgzODA1IgwlnR0YdUnLY2og2bYq3APVPVe6YXMBn%2F30IERqwev8XF9RAUCLSz31XtOe5zL%2FuGq8V74jXpPLtW7151PnbPQrx2FdNU0JIcCYYkTmtbCx%2FXA0HoQTUuobn1dTw0cVvZYn2C6YKrm7rsPOd9%2BQUSyGn1J4xdSEnuILcOCErMDG0ouWJSeNLq4nX84CxXe5t1w3J20YOPBwti86IaDiX71I5%2BIHP8a0yKlvhIj5ZsBgYE7EllTJ2K9aysxLo6co3Y6shUz%2Bd4GEGPBPiUZndtSkpNOqOWbyRpEOsu60vnQ393rXUE1ClZY0s9Ny3GFsyr%2Fd%2FHd0hJZAESpzlqx%2BncnzOBU%2F8BERkdD%2B54%2FAAJHkGWFT6jY4Mff5x3Cy1IOgGo%2B3xtQfhUQD3DoffX%2Bp8qVTc5LS1UttWPHH1uZU5l4Xj%2Bx%2FhnzBMExQAlvIvtWAYX67OnI%2B2mo1RWJz6WgGwLkKqrI07%2BAz3VlPTm8YPOvNcFiva1lojHhupKUUMcMeOfqX2w%2BVp7SU2VKTCaXTyoUlfo6wwsAS%2F1CVgFbCbWtBqAjHSC1cV1Mh0LJPzF3uMdPTHXk7jPeGbJQesAigwKECwRAr4XkHI%2BlIxHs6spAmYZhTiL9qhFDoeVFNeOHTNCIED18PYL8hhle11jCc3%2FLCBjqkASp6MTC6gaGepGoI6v4oZX9yyw9tN4jYAJxD9Ng9lyn4N388nH6YzPa9QB0DGXf5myxfxhx9UJcDuc4%2F0TWvzneOuAiJcXAMRSPeSk5rjh0KuoMnrPutwr%2FfrKH0TaaYAdTM9uhMeKiABxROq9bNhoGpP5mIY6CUZqGLWCDl4wVzUi6zljkPNqKqV3iKHP8TKj6a1nyQT6PbhhvjAqwFC3VQMtdo&X-Amz-Signature=c6fb8d34e38b68c26b8a8df78d3ca43531bf594f0b9d1d6bdff6a88b48a86c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUCGXKV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCuQa5Ji7mFgZwjX9mKpQhNgcT1Ly17F3BhrMrSFsQIrAIhAOiF53uMi6cGEoeQS6ax1A8ch3Du2dBupD4aPQxnmgOAKv8DCFQQABoMNjM3NDIzMTgzODA1IgwlnR0YdUnLY2og2bYq3APVPVe6YXMBn%2F30IERqwev8XF9RAUCLSz31XtOe5zL%2FuGq8V74jXpPLtW7151PnbPQrx2FdNU0JIcCYYkTmtbCx%2FXA0HoQTUuobn1dTw0cVvZYn2C6YKrm7rsPOd9%2BQUSyGn1J4xdSEnuILcOCErMDG0ouWJSeNLq4nX84CxXe5t1w3J20YOPBwti86IaDiX71I5%2BIHP8a0yKlvhIj5ZsBgYE7EllTJ2K9aysxLo6co3Y6shUz%2Bd4GEGPBPiUZndtSkpNOqOWbyRpEOsu60vnQ393rXUE1ClZY0s9Ny3GFsyr%2Fd%2FHd0hJZAESpzlqx%2BncnzOBU%2F8BERkdD%2B54%2FAAJHkGWFT6jY4Mff5x3Cy1IOgGo%2B3xtQfhUQD3DoffX%2Bp8qVTc5LS1UttWPHH1uZU5l4Xj%2Bx%2FhnzBMExQAlvIvtWAYX67OnI%2B2mo1RWJz6WgGwLkKqrI07%2BAz3VlPTm8YPOvNcFiva1lojHhupKUUMcMeOfqX2w%2BVp7SU2VKTCaXTyoUlfo6wwsAS%2F1CVgFbCbWtBqAjHSC1cV1Mh0LJPzF3uMdPTHXk7jPeGbJQesAigwKECwRAr4XkHI%2BlIxHs6spAmYZhTiL9qhFDoeVFNeOHTNCIED18PYL8hhle11jCc3%2FLCBjqkASp6MTC6gaGepGoI6v4oZX9yyw9tN4jYAJxD9Ng9lyn4N388nH6YzPa9QB0DGXf5myxfxhx9UJcDuc4%2F0TWvzneOuAiJcXAMRSPeSk5rjh0KuoMnrPutwr%2FfrKH0TaaYAdTM9uhMeKiABxROq9bNhoGpP5mIY6CUZqGLWCDl4wVzUi6zljkPNqKqV3iKHP8TKj6a1nyQT6PbhhvjAqwFC3VQMtdo&X-Amz-Signature=0439a58dd460f23a5919c6cf3f16d59ce045919960ff1287de818d174bbadb68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUCGXKV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCuQa5Ji7mFgZwjX9mKpQhNgcT1Ly17F3BhrMrSFsQIrAIhAOiF53uMi6cGEoeQS6ax1A8ch3Du2dBupD4aPQxnmgOAKv8DCFQQABoMNjM3NDIzMTgzODA1IgwlnR0YdUnLY2og2bYq3APVPVe6YXMBn%2F30IERqwev8XF9RAUCLSz31XtOe5zL%2FuGq8V74jXpPLtW7151PnbPQrx2FdNU0JIcCYYkTmtbCx%2FXA0HoQTUuobn1dTw0cVvZYn2C6YKrm7rsPOd9%2BQUSyGn1J4xdSEnuILcOCErMDG0ouWJSeNLq4nX84CxXe5t1w3J20YOPBwti86IaDiX71I5%2BIHP8a0yKlvhIj5ZsBgYE7EllTJ2K9aysxLo6co3Y6shUz%2Bd4GEGPBPiUZndtSkpNOqOWbyRpEOsu60vnQ393rXUE1ClZY0s9Ny3GFsyr%2Fd%2FHd0hJZAESpzlqx%2BncnzOBU%2F8BERkdD%2B54%2FAAJHkGWFT6jY4Mff5x3Cy1IOgGo%2B3xtQfhUQD3DoffX%2Bp8qVTc5LS1UttWPHH1uZU5l4Xj%2Bx%2FhnzBMExQAlvIvtWAYX67OnI%2B2mo1RWJz6WgGwLkKqrI07%2BAz3VlPTm8YPOvNcFiva1lojHhupKUUMcMeOfqX2w%2BVp7SU2VKTCaXTyoUlfo6wwsAS%2F1CVgFbCbWtBqAjHSC1cV1Mh0LJPzF3uMdPTHXk7jPeGbJQesAigwKECwRAr4XkHI%2BlIxHs6spAmYZhTiL9qhFDoeVFNeOHTNCIED18PYL8hhle11jCc3%2FLCBjqkASp6MTC6gaGepGoI6v4oZX9yyw9tN4jYAJxD9Ng9lyn4N388nH6YzPa9QB0DGXf5myxfxhx9UJcDuc4%2F0TWvzneOuAiJcXAMRSPeSk5rjh0KuoMnrPutwr%2FfrKH0TaaYAdTM9uhMeKiABxROq9bNhoGpP5mIY6CUZqGLWCDl4wVzUi6zljkPNqKqV3iKHP8TKj6a1nyQT6PbhhvjAqwFC3VQMtdo&X-Amz-Signature=fbeedea0c601c2b9d2f8742e1d9030f030c8ced77184ad76824df0462dd63448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
