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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDNVIZO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCFJ9QEVPlY3pY%2Fs7OBr3CG5ybu7VV6s8ipliUedntrfQIhAOdTWCytsn1ilex5QkqEiKf1zM%2BCTMt67NdcDU%2B9TZssKv8DCBUQABoMNjM3NDIzMTgzODA1Igyh2DDAHQQBl854B94q3APGbAgdR8p354Qk45AHCc2Aq%2F0d1PIu1GG2baIdZ5yN%2BoBbpKdxsa8oS%2FuA9CeiuwGLU70YsG1unpb4pTOMH%2Fn3SDe%2B2jG0n2uNKSaSpkgnbk2nmEvOc%2FzIbTPLmTd%2FKtwT7B0t6iEGEfB%2B%2FPNhDNIcNFNnokGCtUFsbZPF9aHYum5P%2BwDWHe1eUf9AAR6biSwpFTfrz2eFSTdXxzSdOL58e2%2Bvw%2B0z%2F1jeDEtcIPwhPkrYGt9mq45WD7a0UEalAjVRkAe1fv8CK910IJij3DofmYvqmJE%2FNqGRwZ72PhmbnMa8YlJzJsHH%2F%2B9UTgi17x3kZWZLvkw7%2FgmXBRIqnJfevvooZgibuoQr5Ag4V2gAE9LefeJ44QAF3W6TycaVBYnS1msNDWqujO70p8zKaUSB%2FK%2FdDxYdI9TvGTzNfVGY8EqYfxEaadvCOFEng7%2FF4okH%2FkkXptXOEyU1T9kc7LcADtIV9tKZ3drgsyaJ%2BLMxB2JdVzm0wm9AgzYW1YkmH%2BVwn94VyRHY1%2B5BKKy6Shu6zr9ecyXhyz6BysWquK%2FXRdRt7FaAeVZI%2F0hOKKRPr5ZCdewLA2dZ%2BkHdZ6LNXpN44xj2g9jGLyvO34l1r4mXPGPOjtgJvN%2BCF3yVWjCC%2FeTCBjqkAQoiaO1FAtDHbYGWpyq13Bj0em0aFId0Tu2H1LljweLbsnJvb7%2FMqUMnkglo9LYc8cArlBdQlIiv8ydAvuGYq0lXayzMc4%2Fuz8l%2BZUjxtaSEr59Erz7cR3ilbvsQTmm4ghw%2Fv%2FIsb%2Fk0wpvJMuZYvxudHci%2B5thZdDz0DuJcLmbxQSdSX3lgbFlqExTqd13pK4gxm1FMDH884rYS%2BR7PDcFO%2Bqd3&X-Amz-Signature=ee6866f00a8f00d46b9361a21a0727d8549c3f236ed819f34b697c1a261bbb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDNVIZO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCFJ9QEVPlY3pY%2Fs7OBr3CG5ybu7VV6s8ipliUedntrfQIhAOdTWCytsn1ilex5QkqEiKf1zM%2BCTMt67NdcDU%2B9TZssKv8DCBUQABoMNjM3NDIzMTgzODA1Igyh2DDAHQQBl854B94q3APGbAgdR8p354Qk45AHCc2Aq%2F0d1PIu1GG2baIdZ5yN%2BoBbpKdxsa8oS%2FuA9CeiuwGLU70YsG1unpb4pTOMH%2Fn3SDe%2B2jG0n2uNKSaSpkgnbk2nmEvOc%2FzIbTPLmTd%2FKtwT7B0t6iEGEfB%2B%2FPNhDNIcNFNnokGCtUFsbZPF9aHYum5P%2BwDWHe1eUf9AAR6biSwpFTfrz2eFSTdXxzSdOL58e2%2Bvw%2B0z%2F1jeDEtcIPwhPkrYGt9mq45WD7a0UEalAjVRkAe1fv8CK910IJij3DofmYvqmJE%2FNqGRwZ72PhmbnMa8YlJzJsHH%2F%2B9UTgi17x3kZWZLvkw7%2FgmXBRIqnJfevvooZgibuoQr5Ag4V2gAE9LefeJ44QAF3W6TycaVBYnS1msNDWqujO70p8zKaUSB%2FK%2FdDxYdI9TvGTzNfVGY8EqYfxEaadvCOFEng7%2FF4okH%2FkkXptXOEyU1T9kc7LcADtIV9tKZ3drgsyaJ%2BLMxB2JdVzm0wm9AgzYW1YkmH%2BVwn94VyRHY1%2B5BKKy6Shu6zr9ecyXhyz6BysWquK%2FXRdRt7FaAeVZI%2F0hOKKRPr5ZCdewLA2dZ%2BkHdZ6LNXpN44xj2g9jGLyvO34l1r4mXPGPOjtgJvN%2BCF3yVWjCC%2FeTCBjqkAQoiaO1FAtDHbYGWpyq13Bj0em0aFId0Tu2H1LljweLbsnJvb7%2FMqUMnkglo9LYc8cArlBdQlIiv8ydAvuGYq0lXayzMc4%2Fuz8l%2BZUjxtaSEr59Erz7cR3ilbvsQTmm4ghw%2Fv%2FIsb%2Fk0wpvJMuZYvxudHci%2B5thZdDz0DuJcLmbxQSdSX3lgbFlqExTqd13pK4gxm1FMDH884rYS%2BR7PDcFO%2Bqd3&X-Amz-Signature=034a303e14cfcc6b551f89fd5dd157532c1a9802dda9eadfe2c5ea1b0fc55140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDNVIZO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCFJ9QEVPlY3pY%2Fs7OBr3CG5ybu7VV6s8ipliUedntrfQIhAOdTWCytsn1ilex5QkqEiKf1zM%2BCTMt67NdcDU%2B9TZssKv8DCBUQABoMNjM3NDIzMTgzODA1Igyh2DDAHQQBl854B94q3APGbAgdR8p354Qk45AHCc2Aq%2F0d1PIu1GG2baIdZ5yN%2BoBbpKdxsa8oS%2FuA9CeiuwGLU70YsG1unpb4pTOMH%2Fn3SDe%2B2jG0n2uNKSaSpkgnbk2nmEvOc%2FzIbTPLmTd%2FKtwT7B0t6iEGEfB%2B%2FPNhDNIcNFNnokGCtUFsbZPF9aHYum5P%2BwDWHe1eUf9AAR6biSwpFTfrz2eFSTdXxzSdOL58e2%2Bvw%2B0z%2F1jeDEtcIPwhPkrYGt9mq45WD7a0UEalAjVRkAe1fv8CK910IJij3DofmYvqmJE%2FNqGRwZ72PhmbnMa8YlJzJsHH%2F%2B9UTgi17x3kZWZLvkw7%2FgmXBRIqnJfevvooZgibuoQr5Ag4V2gAE9LefeJ44QAF3W6TycaVBYnS1msNDWqujO70p8zKaUSB%2FK%2FdDxYdI9TvGTzNfVGY8EqYfxEaadvCOFEng7%2FF4okH%2FkkXptXOEyU1T9kc7LcADtIV9tKZ3drgsyaJ%2BLMxB2JdVzm0wm9AgzYW1YkmH%2BVwn94VyRHY1%2B5BKKy6Shu6zr9ecyXhyz6BysWquK%2FXRdRt7FaAeVZI%2F0hOKKRPr5ZCdewLA2dZ%2BkHdZ6LNXpN44xj2g9jGLyvO34l1r4mXPGPOjtgJvN%2BCF3yVWjCC%2FeTCBjqkAQoiaO1FAtDHbYGWpyq13Bj0em0aFId0Tu2H1LljweLbsnJvb7%2FMqUMnkglo9LYc8cArlBdQlIiv8ydAvuGYq0lXayzMc4%2Fuz8l%2BZUjxtaSEr59Erz7cR3ilbvsQTmm4ghw%2Fv%2FIsb%2Fk0wpvJMuZYvxudHci%2B5thZdDz0DuJcLmbxQSdSX3lgbFlqExTqd13pK4gxm1FMDH884rYS%2BR7PDcFO%2Bqd3&X-Amz-Signature=9addd8923e22b3e74d194425b0720f293b932b56b584a045b708d1411b567d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDNVIZO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCFJ9QEVPlY3pY%2Fs7OBr3CG5ybu7VV6s8ipliUedntrfQIhAOdTWCytsn1ilex5QkqEiKf1zM%2BCTMt67NdcDU%2B9TZssKv8DCBUQABoMNjM3NDIzMTgzODA1Igyh2DDAHQQBl854B94q3APGbAgdR8p354Qk45AHCc2Aq%2F0d1PIu1GG2baIdZ5yN%2BoBbpKdxsa8oS%2FuA9CeiuwGLU70YsG1unpb4pTOMH%2Fn3SDe%2B2jG0n2uNKSaSpkgnbk2nmEvOc%2FzIbTPLmTd%2FKtwT7B0t6iEGEfB%2B%2FPNhDNIcNFNnokGCtUFsbZPF9aHYum5P%2BwDWHe1eUf9AAR6biSwpFTfrz2eFSTdXxzSdOL58e2%2Bvw%2B0z%2F1jeDEtcIPwhPkrYGt9mq45WD7a0UEalAjVRkAe1fv8CK910IJij3DofmYvqmJE%2FNqGRwZ72PhmbnMa8YlJzJsHH%2F%2B9UTgi17x3kZWZLvkw7%2FgmXBRIqnJfevvooZgibuoQr5Ag4V2gAE9LefeJ44QAF3W6TycaVBYnS1msNDWqujO70p8zKaUSB%2FK%2FdDxYdI9TvGTzNfVGY8EqYfxEaadvCOFEng7%2FF4okH%2FkkXptXOEyU1T9kc7LcADtIV9tKZ3drgsyaJ%2BLMxB2JdVzm0wm9AgzYW1YkmH%2BVwn94VyRHY1%2B5BKKy6Shu6zr9ecyXhyz6BysWquK%2FXRdRt7FaAeVZI%2F0hOKKRPr5ZCdewLA2dZ%2BkHdZ6LNXpN44xj2g9jGLyvO34l1r4mXPGPOjtgJvN%2BCF3yVWjCC%2FeTCBjqkAQoiaO1FAtDHbYGWpyq13Bj0em0aFId0Tu2H1LljweLbsnJvb7%2FMqUMnkglo9LYc8cArlBdQlIiv8ydAvuGYq0lXayzMc4%2Fuz8l%2BZUjxtaSEr59Erz7cR3ilbvsQTmm4ghw%2Fv%2FIsb%2Fk0wpvJMuZYvxudHci%2B5thZdDz0DuJcLmbxQSdSX3lgbFlqExTqd13pK4gxm1FMDH884rYS%2BR7PDcFO%2Bqd3&X-Amz-Signature=2921f31eb6d1f35def8fcb4309e62305774d42f4fd741a1728799f37928410b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDNVIZO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCFJ9QEVPlY3pY%2Fs7OBr3CG5ybu7VV6s8ipliUedntrfQIhAOdTWCytsn1ilex5QkqEiKf1zM%2BCTMt67NdcDU%2B9TZssKv8DCBUQABoMNjM3NDIzMTgzODA1Igyh2DDAHQQBl854B94q3APGbAgdR8p354Qk45AHCc2Aq%2F0d1PIu1GG2baIdZ5yN%2BoBbpKdxsa8oS%2FuA9CeiuwGLU70YsG1unpb4pTOMH%2Fn3SDe%2B2jG0n2uNKSaSpkgnbk2nmEvOc%2FzIbTPLmTd%2FKtwT7B0t6iEGEfB%2B%2FPNhDNIcNFNnokGCtUFsbZPF9aHYum5P%2BwDWHe1eUf9AAR6biSwpFTfrz2eFSTdXxzSdOL58e2%2Bvw%2B0z%2F1jeDEtcIPwhPkrYGt9mq45WD7a0UEalAjVRkAe1fv8CK910IJij3DofmYvqmJE%2FNqGRwZ72PhmbnMa8YlJzJsHH%2F%2B9UTgi17x3kZWZLvkw7%2FgmXBRIqnJfevvooZgibuoQr5Ag4V2gAE9LefeJ44QAF3W6TycaVBYnS1msNDWqujO70p8zKaUSB%2FK%2FdDxYdI9TvGTzNfVGY8EqYfxEaadvCOFEng7%2FF4okH%2FkkXptXOEyU1T9kc7LcADtIV9tKZ3drgsyaJ%2BLMxB2JdVzm0wm9AgzYW1YkmH%2BVwn94VyRHY1%2B5BKKy6Shu6zr9ecyXhyz6BysWquK%2FXRdRt7FaAeVZI%2F0hOKKRPr5ZCdewLA2dZ%2BkHdZ6LNXpN44xj2g9jGLyvO34l1r4mXPGPOjtgJvN%2BCF3yVWjCC%2FeTCBjqkAQoiaO1FAtDHbYGWpyq13Bj0em0aFId0Tu2H1LljweLbsnJvb7%2FMqUMnkglo9LYc8cArlBdQlIiv8ydAvuGYq0lXayzMc4%2Fuz8l%2BZUjxtaSEr59Erz7cR3ilbvsQTmm4ghw%2Fv%2FIsb%2Fk0wpvJMuZYvxudHci%2B5thZdDz0DuJcLmbxQSdSX3lgbFlqExTqd13pK4gxm1FMDH884rYS%2BR7PDcFO%2Bqd3&X-Amz-Signature=7a423124d46f8092c81b180923b9447090e1b10b8b2773fa671a01a23316e9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XDNVIZO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T150948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQCFJ9QEVPlY3pY%2Fs7OBr3CG5ybu7VV6s8ipliUedntrfQIhAOdTWCytsn1ilex5QkqEiKf1zM%2BCTMt67NdcDU%2B9TZssKv8DCBUQABoMNjM3NDIzMTgzODA1Igyh2DDAHQQBl854B94q3APGbAgdR8p354Qk45AHCc2Aq%2F0d1PIu1GG2baIdZ5yN%2BoBbpKdxsa8oS%2FuA9CeiuwGLU70YsG1unpb4pTOMH%2Fn3SDe%2B2jG0n2uNKSaSpkgnbk2nmEvOc%2FzIbTPLmTd%2FKtwT7B0t6iEGEfB%2B%2FPNhDNIcNFNnokGCtUFsbZPF9aHYum5P%2BwDWHe1eUf9AAR6biSwpFTfrz2eFSTdXxzSdOL58e2%2Bvw%2B0z%2F1jeDEtcIPwhPkrYGt9mq45WD7a0UEalAjVRkAe1fv8CK910IJij3DofmYvqmJE%2FNqGRwZ72PhmbnMa8YlJzJsHH%2F%2B9UTgi17x3kZWZLvkw7%2FgmXBRIqnJfevvooZgibuoQr5Ag4V2gAE9LefeJ44QAF3W6TycaVBYnS1msNDWqujO70p8zKaUSB%2FK%2FdDxYdI9TvGTzNfVGY8EqYfxEaadvCOFEng7%2FF4okH%2FkkXptXOEyU1T9kc7LcADtIV9tKZ3drgsyaJ%2BLMxB2JdVzm0wm9AgzYW1YkmH%2BVwn94VyRHY1%2B5BKKy6Shu6zr9ecyXhyz6BysWquK%2FXRdRt7FaAeVZI%2F0hOKKRPr5ZCdewLA2dZ%2BkHdZ6LNXpN44xj2g9jGLyvO34l1r4mXPGPOjtgJvN%2BCF3yVWjCC%2FeTCBjqkAQoiaO1FAtDHbYGWpyq13Bj0em0aFId0Tu2H1LljweLbsnJvb7%2FMqUMnkglo9LYc8cArlBdQlIiv8ydAvuGYq0lXayzMc4%2Fuz8l%2BZUjxtaSEr59Erz7cR3ilbvsQTmm4ghw%2Fv%2FIsb%2Fk0wpvJMuZYvxudHci%2B5thZdDz0DuJcLmbxQSdSX3lgbFlqExTqd13pK4gxm1FMDH884rYS%2BR7PDcFO%2Bqd3&X-Amz-Signature=05b7261659dd863db35ebe2c8ca2bd11a172bb52e185841790b1da0b08ab0f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
