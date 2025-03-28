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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URYCWAK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GRkO%2FRu1X%2FtKJJ%2Fd%2F%2Booozrstn%2BE096Z%2FpXUSkRS7wIhAL5sLqLX5IyDmQUI%2FkoHP%2BVKRLaWVtc1Gxs0x7Aq5PieKv8DCFYQABoMNjM3NDIzMTgzODA1IgxhlLZivOhdfJItDqYq3AOEBT8XC6AaDwAWhXwHcC0r9WxFLr%2FOnmN%2F%2Brpkr%2Bm643YQHDrdjvmCQKNprux2V4HX3mdzPiDqkeNGwZt1QJBfF9DKYg%2BsgrqGXR%2FSwyIEcz6jigQqy3XOt7aK7WXLbi8SsaBMqM1nB%2BLiBXEvbOYdzXTzwdwGFYzjLxavFwSVdRTx4sFsHUpocPg7VDmr46DYkI7h1rYypjpQWnDjOVIdJnn3%2F69DchZfQHH3NkYnMeSmdCaT%2BmW0TznTNMoO0wnM9%2FALoKRlIfYkSFVA2hX1loE6U4f1ltmsVdjxKkwatgpe%2F68Q%2FAmpYJwOWFr4YWIYOXjHMvUd6dviJ%2BWjlhJDSicvTy4pyklQt%2By%2F%2FA3mQVuk0%2FRueTUeP2qOOBsJF%2B%2F69avDciuE%2FDeSRiJGjKXQm47vx2dyMoG%2B49L2rxkBLT01B2fiPGvOvx9OiDf%2BI38Frxh%2FnIrLACYlYZQKLsZmYImEwRBmlhr13slp2Mn9F2g9GlWDB%2BME7iXTas01weMT0%2Fo%2F4XNUEKKaliU8j3U6bnQ6G7ikcu64UQrb6mhePR%2BvMfHdfTEq93G7w3Bv8%2BjCKbihtNggPYXzcP3uEDmfZ2H2Ln93pEYoTvD6qqKVRt8QBao4ZiEoxP0cCjCMzJi%2FBjqkAdpTiVYgds%2B4YdT8KFI4y6Hv%2F41y6s6tGV5JIA9MMHhvR5tUo4N8AU6rvSEm%2BNUMIa5YkvYF4o8tH1MQwfC0dPajwllsbN8OMV9MQS5Zv8I2vWwomCn9khY9vjZzMfF5Ov4M6zCNYoGEnNVmXCax3aVqCsSdJZ5aRJdRA%2F7GBmn92c03vuVEDsyHqPk9dNBIB8eaSj9DQEZM4DvXDYxPoVpooPJd&X-Amz-Signature=78f5455a622a82ff544f27cc38e259dfc6035fa63f1d29bb4c2294a072f11f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URYCWAK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GRkO%2FRu1X%2FtKJJ%2Fd%2F%2Booozrstn%2BE096Z%2FpXUSkRS7wIhAL5sLqLX5IyDmQUI%2FkoHP%2BVKRLaWVtc1Gxs0x7Aq5PieKv8DCFYQABoMNjM3NDIzMTgzODA1IgxhlLZivOhdfJItDqYq3AOEBT8XC6AaDwAWhXwHcC0r9WxFLr%2FOnmN%2F%2Brpkr%2Bm643YQHDrdjvmCQKNprux2V4HX3mdzPiDqkeNGwZt1QJBfF9DKYg%2BsgrqGXR%2FSwyIEcz6jigQqy3XOt7aK7WXLbi8SsaBMqM1nB%2BLiBXEvbOYdzXTzwdwGFYzjLxavFwSVdRTx4sFsHUpocPg7VDmr46DYkI7h1rYypjpQWnDjOVIdJnn3%2F69DchZfQHH3NkYnMeSmdCaT%2BmW0TznTNMoO0wnM9%2FALoKRlIfYkSFVA2hX1loE6U4f1ltmsVdjxKkwatgpe%2F68Q%2FAmpYJwOWFr4YWIYOXjHMvUd6dviJ%2BWjlhJDSicvTy4pyklQt%2By%2F%2FA3mQVuk0%2FRueTUeP2qOOBsJF%2B%2F69avDciuE%2FDeSRiJGjKXQm47vx2dyMoG%2B49L2rxkBLT01B2fiPGvOvx9OiDf%2BI38Frxh%2FnIrLACYlYZQKLsZmYImEwRBmlhr13slp2Mn9F2g9GlWDB%2BME7iXTas01weMT0%2Fo%2F4XNUEKKaliU8j3U6bnQ6G7ikcu64UQrb6mhePR%2BvMfHdfTEq93G7w3Bv8%2BjCKbihtNggPYXzcP3uEDmfZ2H2Ln93pEYoTvD6qqKVRt8QBao4ZiEoxP0cCjCMzJi%2FBjqkAdpTiVYgds%2B4YdT8KFI4y6Hv%2F41y6s6tGV5JIA9MMHhvR5tUo4N8AU6rvSEm%2BNUMIa5YkvYF4o8tH1MQwfC0dPajwllsbN8OMV9MQS5Zv8I2vWwomCn9khY9vjZzMfF5Ov4M6zCNYoGEnNVmXCax3aVqCsSdJZ5aRJdRA%2F7GBmn92c03vuVEDsyHqPk9dNBIB8eaSj9DQEZM4DvXDYxPoVpooPJd&X-Amz-Signature=13a70efc8cd447b942c4ab4b2bf019a90e5a789974f1893b941bfda5d3bb3eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URYCWAK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GRkO%2FRu1X%2FtKJJ%2Fd%2F%2Booozrstn%2BE096Z%2FpXUSkRS7wIhAL5sLqLX5IyDmQUI%2FkoHP%2BVKRLaWVtc1Gxs0x7Aq5PieKv8DCFYQABoMNjM3NDIzMTgzODA1IgxhlLZivOhdfJItDqYq3AOEBT8XC6AaDwAWhXwHcC0r9WxFLr%2FOnmN%2F%2Brpkr%2Bm643YQHDrdjvmCQKNprux2V4HX3mdzPiDqkeNGwZt1QJBfF9DKYg%2BsgrqGXR%2FSwyIEcz6jigQqy3XOt7aK7WXLbi8SsaBMqM1nB%2BLiBXEvbOYdzXTzwdwGFYzjLxavFwSVdRTx4sFsHUpocPg7VDmr46DYkI7h1rYypjpQWnDjOVIdJnn3%2F69DchZfQHH3NkYnMeSmdCaT%2BmW0TznTNMoO0wnM9%2FALoKRlIfYkSFVA2hX1loE6U4f1ltmsVdjxKkwatgpe%2F68Q%2FAmpYJwOWFr4YWIYOXjHMvUd6dviJ%2BWjlhJDSicvTy4pyklQt%2By%2F%2FA3mQVuk0%2FRueTUeP2qOOBsJF%2B%2F69avDciuE%2FDeSRiJGjKXQm47vx2dyMoG%2B49L2rxkBLT01B2fiPGvOvx9OiDf%2BI38Frxh%2FnIrLACYlYZQKLsZmYImEwRBmlhr13slp2Mn9F2g9GlWDB%2BME7iXTas01weMT0%2Fo%2F4XNUEKKaliU8j3U6bnQ6G7ikcu64UQrb6mhePR%2BvMfHdfTEq93G7w3Bv8%2BjCKbihtNggPYXzcP3uEDmfZ2H2Ln93pEYoTvD6qqKVRt8QBao4ZiEoxP0cCjCMzJi%2FBjqkAdpTiVYgds%2B4YdT8KFI4y6Hv%2F41y6s6tGV5JIA9MMHhvR5tUo4N8AU6rvSEm%2BNUMIa5YkvYF4o8tH1MQwfC0dPajwllsbN8OMV9MQS5Zv8I2vWwomCn9khY9vjZzMfF5Ov4M6zCNYoGEnNVmXCax3aVqCsSdJZ5aRJdRA%2F7GBmn92c03vuVEDsyHqPk9dNBIB8eaSj9DQEZM4DvXDYxPoVpooPJd&X-Amz-Signature=29be7d79fa8c5373ad95f094e1ef1746cfa1f5edeb433c477e91a72fc80783dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URYCWAK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GRkO%2FRu1X%2FtKJJ%2Fd%2F%2Booozrstn%2BE096Z%2FpXUSkRS7wIhAL5sLqLX5IyDmQUI%2FkoHP%2BVKRLaWVtc1Gxs0x7Aq5PieKv8DCFYQABoMNjM3NDIzMTgzODA1IgxhlLZivOhdfJItDqYq3AOEBT8XC6AaDwAWhXwHcC0r9WxFLr%2FOnmN%2F%2Brpkr%2Bm643YQHDrdjvmCQKNprux2V4HX3mdzPiDqkeNGwZt1QJBfF9DKYg%2BsgrqGXR%2FSwyIEcz6jigQqy3XOt7aK7WXLbi8SsaBMqM1nB%2BLiBXEvbOYdzXTzwdwGFYzjLxavFwSVdRTx4sFsHUpocPg7VDmr46DYkI7h1rYypjpQWnDjOVIdJnn3%2F69DchZfQHH3NkYnMeSmdCaT%2BmW0TznTNMoO0wnM9%2FALoKRlIfYkSFVA2hX1loE6U4f1ltmsVdjxKkwatgpe%2F68Q%2FAmpYJwOWFr4YWIYOXjHMvUd6dviJ%2BWjlhJDSicvTy4pyklQt%2By%2F%2FA3mQVuk0%2FRueTUeP2qOOBsJF%2B%2F69avDciuE%2FDeSRiJGjKXQm47vx2dyMoG%2B49L2rxkBLT01B2fiPGvOvx9OiDf%2BI38Frxh%2FnIrLACYlYZQKLsZmYImEwRBmlhr13slp2Mn9F2g9GlWDB%2BME7iXTas01weMT0%2Fo%2F4XNUEKKaliU8j3U6bnQ6G7ikcu64UQrb6mhePR%2BvMfHdfTEq93G7w3Bv8%2BjCKbihtNggPYXzcP3uEDmfZ2H2Ln93pEYoTvD6qqKVRt8QBao4ZiEoxP0cCjCMzJi%2FBjqkAdpTiVYgds%2B4YdT8KFI4y6Hv%2F41y6s6tGV5JIA9MMHhvR5tUo4N8AU6rvSEm%2BNUMIa5YkvYF4o8tH1MQwfC0dPajwllsbN8OMV9MQS5Zv8I2vWwomCn9khY9vjZzMfF5Ov4M6zCNYoGEnNVmXCax3aVqCsSdJZ5aRJdRA%2F7GBmn92c03vuVEDsyHqPk9dNBIB8eaSj9DQEZM4DvXDYxPoVpooPJd&X-Amz-Signature=cf5b1c1e039c306c5e9814a38de3f674ca05cba0409b63d4acc9099092ac9f00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URYCWAK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GRkO%2FRu1X%2FtKJJ%2Fd%2F%2Booozrstn%2BE096Z%2FpXUSkRS7wIhAL5sLqLX5IyDmQUI%2FkoHP%2BVKRLaWVtc1Gxs0x7Aq5PieKv8DCFYQABoMNjM3NDIzMTgzODA1IgxhlLZivOhdfJItDqYq3AOEBT8XC6AaDwAWhXwHcC0r9WxFLr%2FOnmN%2F%2Brpkr%2Bm643YQHDrdjvmCQKNprux2V4HX3mdzPiDqkeNGwZt1QJBfF9DKYg%2BsgrqGXR%2FSwyIEcz6jigQqy3XOt7aK7WXLbi8SsaBMqM1nB%2BLiBXEvbOYdzXTzwdwGFYzjLxavFwSVdRTx4sFsHUpocPg7VDmr46DYkI7h1rYypjpQWnDjOVIdJnn3%2F69DchZfQHH3NkYnMeSmdCaT%2BmW0TznTNMoO0wnM9%2FALoKRlIfYkSFVA2hX1loE6U4f1ltmsVdjxKkwatgpe%2F68Q%2FAmpYJwOWFr4YWIYOXjHMvUd6dviJ%2BWjlhJDSicvTy4pyklQt%2By%2F%2FA3mQVuk0%2FRueTUeP2qOOBsJF%2B%2F69avDciuE%2FDeSRiJGjKXQm47vx2dyMoG%2B49L2rxkBLT01B2fiPGvOvx9OiDf%2BI38Frxh%2FnIrLACYlYZQKLsZmYImEwRBmlhr13slp2Mn9F2g9GlWDB%2BME7iXTas01weMT0%2Fo%2F4XNUEKKaliU8j3U6bnQ6G7ikcu64UQrb6mhePR%2BvMfHdfTEq93G7w3Bv8%2BjCKbihtNggPYXzcP3uEDmfZ2H2Ln93pEYoTvD6qqKVRt8QBao4ZiEoxP0cCjCMzJi%2FBjqkAdpTiVYgds%2B4YdT8KFI4y6Hv%2F41y6s6tGV5JIA9MMHhvR5tUo4N8AU6rvSEm%2BNUMIa5YkvYF4o8tH1MQwfC0dPajwllsbN8OMV9MQS5Zv8I2vWwomCn9khY9vjZzMfF5Ov4M6zCNYoGEnNVmXCax3aVqCsSdJZ5aRJdRA%2F7GBmn92c03vuVEDsyHqPk9dNBIB8eaSj9DQEZM4DvXDYxPoVpooPJd&X-Amz-Signature=2b73dcc520c31efc36923ae04a4e1ed8d4af24dfa7a8b2ee9d34ec3c71a32f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663URYCWAK%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7GRkO%2FRu1X%2FtKJJ%2Fd%2F%2Booozrstn%2BE096Z%2FpXUSkRS7wIhAL5sLqLX5IyDmQUI%2FkoHP%2BVKRLaWVtc1Gxs0x7Aq5PieKv8DCFYQABoMNjM3NDIzMTgzODA1IgxhlLZivOhdfJItDqYq3AOEBT8XC6AaDwAWhXwHcC0r9WxFLr%2FOnmN%2F%2Brpkr%2Bm643YQHDrdjvmCQKNprux2V4HX3mdzPiDqkeNGwZt1QJBfF9DKYg%2BsgrqGXR%2FSwyIEcz6jigQqy3XOt7aK7WXLbi8SsaBMqM1nB%2BLiBXEvbOYdzXTzwdwGFYzjLxavFwSVdRTx4sFsHUpocPg7VDmr46DYkI7h1rYypjpQWnDjOVIdJnn3%2F69DchZfQHH3NkYnMeSmdCaT%2BmW0TznTNMoO0wnM9%2FALoKRlIfYkSFVA2hX1loE6U4f1ltmsVdjxKkwatgpe%2F68Q%2FAmpYJwOWFr4YWIYOXjHMvUd6dviJ%2BWjlhJDSicvTy4pyklQt%2By%2F%2FA3mQVuk0%2FRueTUeP2qOOBsJF%2B%2F69avDciuE%2FDeSRiJGjKXQm47vx2dyMoG%2B49L2rxkBLT01B2fiPGvOvx9OiDf%2BI38Frxh%2FnIrLACYlYZQKLsZmYImEwRBmlhr13slp2Mn9F2g9GlWDB%2BME7iXTas01weMT0%2Fo%2F4XNUEKKaliU8j3U6bnQ6G7ikcu64UQrb6mhePR%2BvMfHdfTEq93G7w3Bv8%2BjCKbihtNggPYXzcP3uEDmfZ2H2Ln93pEYoTvD6qqKVRt8QBao4ZiEoxP0cCjCMzJi%2FBjqkAdpTiVYgds%2B4YdT8KFI4y6Hv%2F41y6s6tGV5JIA9MMHhvR5tUo4N8AU6rvSEm%2BNUMIa5YkvYF4o8tH1MQwfC0dPajwllsbN8OMV9MQS5Zv8I2vWwomCn9khY9vjZzMfF5Ov4M6zCNYoGEnNVmXCax3aVqCsSdJZ5aRJdRA%2F7GBmn92c03vuVEDsyHqPk9dNBIB8eaSj9DQEZM4DvXDYxPoVpooPJd&X-Amz-Signature=1d97a4a3447cf74324e8669087336f251a472bab664aa43aaab389309519dd21&X-Amz-SignedHeaders=host&x-id=GetObject)
