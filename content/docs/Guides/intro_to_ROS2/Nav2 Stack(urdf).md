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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5OHC7E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYlCfAoNllSCZHddQIpECWc7SrsDpIltes%2BMCRuAlR3AiBKtRSKjRkQxlYwDms9O4y%2FAoXXTMmH9X%2Byip50gxGxyiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBQvGKjwHKoANjPCRKtwD7NBPJgd9VUQqezov0BMan%2F3VFJDzofgjbjd%2BGFPhXucav0jExhdQ5m0RHgncUHtz7EpPbZADww6bcPV5RK9KhObP3mQhN4GNGTrghWgOOlbVDQ3bCCiUeCb9hC7JWxKEDEvtBIBY11qZlksbQVkZhsAVfG1pszXQ2b7iQ8DdttB81egAeHovKKZuL9HIw03geppbidn1oHSGRTLYur3wP6ynjeH4CTq%2FHCCK0DkgmsMZbXvt4zFP0oT7zYirnBfQf0Xp%2BK5oN1%2FyYVHZaMRhOvBeX6ext0nu%2B%2B92yiY%2FXnTM%2Bfg6wH%2BaFfND50XigG%2FYSXzLACUDQTgZ17lCa2pZJOBrAEG%2FrIqgnNZnjzVz9tiehVQ2xmar3m2vB7J0hJbLG5RtwphoozXWcZNHKkreueQf4PVkbxTZhkSo%2BbYSlIfdSkiDbwa%2FmvAkpjKeHML3e%2FpO9AKjHQuk%2FMvu9QD03%2Fok5wZa3NY3ZHxL91Pi6hHf6k1S2yz7DhR8lWgnsLYuIf5g%2F7sj1flJrsNUoNOhW33LuSF6Re%2Beaq0G6812rmQbSPe9g%2Fv8EzmN9O3ur2nzyjnRWodKIgVhSxa5huu2Hri85FCCKbtlbwOMhVJHQ09x3z8ezZ3fhk9vjwQw%2B8D4wQY6pgGVo2i8up3Se94euEUqMkeF9n7M3LLOFAqg8rNgikEvHBFoyiaKTTDjjaX5xR29FMMFq6rYPOQOfKsaYLggNGoKch6QphBS6hpuSKhJVKFhChxv%2F%2F%2BzCSbQrZIpwy1scHdl0GuSqlTuEGllI648XZMg%2BojhDANwCHbhmH459NWJxTuuWlpPL%2F6ZBiZDeZG4ovee6Yiqzij1SKmsrGlb9zOP4nWQEkr8&X-Amz-Signature=2c58dd0d72904cf0e2db051287bbc1f6d39fb175b14801d2bfe85a7b4a1af191&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5OHC7E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYlCfAoNllSCZHddQIpECWc7SrsDpIltes%2BMCRuAlR3AiBKtRSKjRkQxlYwDms9O4y%2FAoXXTMmH9X%2Byip50gxGxyiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBQvGKjwHKoANjPCRKtwD7NBPJgd9VUQqezov0BMan%2F3VFJDzofgjbjd%2BGFPhXucav0jExhdQ5m0RHgncUHtz7EpPbZADww6bcPV5RK9KhObP3mQhN4GNGTrghWgOOlbVDQ3bCCiUeCb9hC7JWxKEDEvtBIBY11qZlksbQVkZhsAVfG1pszXQ2b7iQ8DdttB81egAeHovKKZuL9HIw03geppbidn1oHSGRTLYur3wP6ynjeH4CTq%2FHCCK0DkgmsMZbXvt4zFP0oT7zYirnBfQf0Xp%2BK5oN1%2FyYVHZaMRhOvBeX6ext0nu%2B%2B92yiY%2FXnTM%2Bfg6wH%2BaFfND50XigG%2FYSXzLACUDQTgZ17lCa2pZJOBrAEG%2FrIqgnNZnjzVz9tiehVQ2xmar3m2vB7J0hJbLG5RtwphoozXWcZNHKkreueQf4PVkbxTZhkSo%2BbYSlIfdSkiDbwa%2FmvAkpjKeHML3e%2FpO9AKjHQuk%2FMvu9QD03%2Fok5wZa3NY3ZHxL91Pi6hHf6k1S2yz7DhR8lWgnsLYuIf5g%2F7sj1flJrsNUoNOhW33LuSF6Re%2Beaq0G6812rmQbSPe9g%2Fv8EzmN9O3ur2nzyjnRWodKIgVhSxa5huu2Hri85FCCKbtlbwOMhVJHQ09x3z8ezZ3fhk9vjwQw%2B8D4wQY6pgGVo2i8up3Se94euEUqMkeF9n7M3LLOFAqg8rNgikEvHBFoyiaKTTDjjaX5xR29FMMFq6rYPOQOfKsaYLggNGoKch6QphBS6hpuSKhJVKFhChxv%2F%2F%2BzCSbQrZIpwy1scHdl0GuSqlTuEGllI648XZMg%2BojhDANwCHbhmH459NWJxTuuWlpPL%2F6ZBiZDeZG4ovee6Yiqzij1SKmsrGlb9zOP4nWQEkr8&X-Amz-Signature=8a468436657969b841cca45e8c14e6e9504a38ccccb6ef53e44fe8188927c6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5OHC7E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYlCfAoNllSCZHddQIpECWc7SrsDpIltes%2BMCRuAlR3AiBKtRSKjRkQxlYwDms9O4y%2FAoXXTMmH9X%2Byip50gxGxyiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBQvGKjwHKoANjPCRKtwD7NBPJgd9VUQqezov0BMan%2F3VFJDzofgjbjd%2BGFPhXucav0jExhdQ5m0RHgncUHtz7EpPbZADww6bcPV5RK9KhObP3mQhN4GNGTrghWgOOlbVDQ3bCCiUeCb9hC7JWxKEDEvtBIBY11qZlksbQVkZhsAVfG1pszXQ2b7iQ8DdttB81egAeHovKKZuL9HIw03geppbidn1oHSGRTLYur3wP6ynjeH4CTq%2FHCCK0DkgmsMZbXvt4zFP0oT7zYirnBfQf0Xp%2BK5oN1%2FyYVHZaMRhOvBeX6ext0nu%2B%2B92yiY%2FXnTM%2Bfg6wH%2BaFfND50XigG%2FYSXzLACUDQTgZ17lCa2pZJOBrAEG%2FrIqgnNZnjzVz9tiehVQ2xmar3m2vB7J0hJbLG5RtwphoozXWcZNHKkreueQf4PVkbxTZhkSo%2BbYSlIfdSkiDbwa%2FmvAkpjKeHML3e%2FpO9AKjHQuk%2FMvu9QD03%2Fok5wZa3NY3ZHxL91Pi6hHf6k1S2yz7DhR8lWgnsLYuIf5g%2F7sj1flJrsNUoNOhW33LuSF6Re%2Beaq0G6812rmQbSPe9g%2Fv8EzmN9O3ur2nzyjnRWodKIgVhSxa5huu2Hri85FCCKbtlbwOMhVJHQ09x3z8ezZ3fhk9vjwQw%2B8D4wQY6pgGVo2i8up3Se94euEUqMkeF9n7M3LLOFAqg8rNgikEvHBFoyiaKTTDjjaX5xR29FMMFq6rYPOQOfKsaYLggNGoKch6QphBS6hpuSKhJVKFhChxv%2F%2F%2BzCSbQrZIpwy1scHdl0GuSqlTuEGllI648XZMg%2BojhDANwCHbhmH459NWJxTuuWlpPL%2F6ZBiZDeZG4ovee6Yiqzij1SKmsrGlb9zOP4nWQEkr8&X-Amz-Signature=c323ac8859613fd6af680cdac1d820a91520dfada778141e71e059212fa4167b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5OHC7E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYlCfAoNllSCZHddQIpECWc7SrsDpIltes%2BMCRuAlR3AiBKtRSKjRkQxlYwDms9O4y%2FAoXXTMmH9X%2Byip50gxGxyiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBQvGKjwHKoANjPCRKtwD7NBPJgd9VUQqezov0BMan%2F3VFJDzofgjbjd%2BGFPhXucav0jExhdQ5m0RHgncUHtz7EpPbZADww6bcPV5RK9KhObP3mQhN4GNGTrghWgOOlbVDQ3bCCiUeCb9hC7JWxKEDEvtBIBY11qZlksbQVkZhsAVfG1pszXQ2b7iQ8DdttB81egAeHovKKZuL9HIw03geppbidn1oHSGRTLYur3wP6ynjeH4CTq%2FHCCK0DkgmsMZbXvt4zFP0oT7zYirnBfQf0Xp%2BK5oN1%2FyYVHZaMRhOvBeX6ext0nu%2B%2B92yiY%2FXnTM%2Bfg6wH%2BaFfND50XigG%2FYSXzLACUDQTgZ17lCa2pZJOBrAEG%2FrIqgnNZnjzVz9tiehVQ2xmar3m2vB7J0hJbLG5RtwphoozXWcZNHKkreueQf4PVkbxTZhkSo%2BbYSlIfdSkiDbwa%2FmvAkpjKeHML3e%2FpO9AKjHQuk%2FMvu9QD03%2Fok5wZa3NY3ZHxL91Pi6hHf6k1S2yz7DhR8lWgnsLYuIf5g%2F7sj1flJrsNUoNOhW33LuSF6Re%2Beaq0G6812rmQbSPe9g%2Fv8EzmN9O3ur2nzyjnRWodKIgVhSxa5huu2Hri85FCCKbtlbwOMhVJHQ09x3z8ezZ3fhk9vjwQw%2B8D4wQY6pgGVo2i8up3Se94euEUqMkeF9n7M3LLOFAqg8rNgikEvHBFoyiaKTTDjjaX5xR29FMMFq6rYPOQOfKsaYLggNGoKch6QphBS6hpuSKhJVKFhChxv%2F%2F%2BzCSbQrZIpwy1scHdl0GuSqlTuEGllI648XZMg%2BojhDANwCHbhmH459NWJxTuuWlpPL%2F6ZBiZDeZG4ovee6Yiqzij1SKmsrGlb9zOP4nWQEkr8&X-Amz-Signature=619d9c21ba9f4b2f69ede09d7e9847bb7eca7264808356e1515e90b0e1ad97b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5OHC7E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYlCfAoNllSCZHddQIpECWc7SrsDpIltes%2BMCRuAlR3AiBKtRSKjRkQxlYwDms9O4y%2FAoXXTMmH9X%2Byip50gxGxyiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBQvGKjwHKoANjPCRKtwD7NBPJgd9VUQqezov0BMan%2F3VFJDzofgjbjd%2BGFPhXucav0jExhdQ5m0RHgncUHtz7EpPbZADww6bcPV5RK9KhObP3mQhN4GNGTrghWgOOlbVDQ3bCCiUeCb9hC7JWxKEDEvtBIBY11qZlksbQVkZhsAVfG1pszXQ2b7iQ8DdttB81egAeHovKKZuL9HIw03geppbidn1oHSGRTLYur3wP6ynjeH4CTq%2FHCCK0DkgmsMZbXvt4zFP0oT7zYirnBfQf0Xp%2BK5oN1%2FyYVHZaMRhOvBeX6ext0nu%2B%2B92yiY%2FXnTM%2Bfg6wH%2BaFfND50XigG%2FYSXzLACUDQTgZ17lCa2pZJOBrAEG%2FrIqgnNZnjzVz9tiehVQ2xmar3m2vB7J0hJbLG5RtwphoozXWcZNHKkreueQf4PVkbxTZhkSo%2BbYSlIfdSkiDbwa%2FmvAkpjKeHML3e%2FpO9AKjHQuk%2FMvu9QD03%2Fok5wZa3NY3ZHxL91Pi6hHf6k1S2yz7DhR8lWgnsLYuIf5g%2F7sj1flJrsNUoNOhW33LuSF6Re%2Beaq0G6812rmQbSPe9g%2Fv8EzmN9O3ur2nzyjnRWodKIgVhSxa5huu2Hri85FCCKbtlbwOMhVJHQ09x3z8ezZ3fhk9vjwQw%2B8D4wQY6pgGVo2i8up3Se94euEUqMkeF9n7M3LLOFAqg8rNgikEvHBFoyiaKTTDjjaX5xR29FMMFq6rYPOQOfKsaYLggNGoKch6QphBS6hpuSKhJVKFhChxv%2F%2F%2BzCSbQrZIpwy1scHdl0GuSqlTuEGllI648XZMg%2BojhDANwCHbhmH459NWJxTuuWlpPL%2F6ZBiZDeZG4ovee6Yiqzij1SKmsrGlb9zOP4nWQEkr8&X-Amz-Signature=fa0a239317e9502cf10ffa2ad3c5c71d8981bf5595147b2ed9105bfadb80f0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5OHC7E%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFYlCfAoNllSCZHddQIpECWc7SrsDpIltes%2BMCRuAlR3AiBKtRSKjRkQxlYwDms9O4y%2FAoXXTMmH9X%2Byip50gxGxyiqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBQvGKjwHKoANjPCRKtwD7NBPJgd9VUQqezov0BMan%2F3VFJDzofgjbjd%2BGFPhXucav0jExhdQ5m0RHgncUHtz7EpPbZADww6bcPV5RK9KhObP3mQhN4GNGTrghWgOOlbVDQ3bCCiUeCb9hC7JWxKEDEvtBIBY11qZlksbQVkZhsAVfG1pszXQ2b7iQ8DdttB81egAeHovKKZuL9HIw03geppbidn1oHSGRTLYur3wP6ynjeH4CTq%2FHCCK0DkgmsMZbXvt4zFP0oT7zYirnBfQf0Xp%2BK5oN1%2FyYVHZaMRhOvBeX6ext0nu%2B%2B92yiY%2FXnTM%2Bfg6wH%2BaFfND50XigG%2FYSXzLACUDQTgZ17lCa2pZJOBrAEG%2FrIqgnNZnjzVz9tiehVQ2xmar3m2vB7J0hJbLG5RtwphoozXWcZNHKkreueQf4PVkbxTZhkSo%2BbYSlIfdSkiDbwa%2FmvAkpjKeHML3e%2FpO9AKjHQuk%2FMvu9QD03%2Fok5wZa3NY3ZHxL91Pi6hHf6k1S2yz7DhR8lWgnsLYuIf5g%2F7sj1flJrsNUoNOhW33LuSF6Re%2Beaq0G6812rmQbSPe9g%2Fv8EzmN9O3ur2nzyjnRWodKIgVhSxa5huu2Hri85FCCKbtlbwOMhVJHQ09x3z8ezZ3fhk9vjwQw%2B8D4wQY6pgGVo2i8up3Se94euEUqMkeF9n7M3LLOFAqg8rNgikEvHBFoyiaKTTDjjaX5xR29FMMFq6rYPOQOfKsaYLggNGoKch6QphBS6hpuSKhJVKFhChxv%2F%2F%2BzCSbQrZIpwy1scHdl0GuSqlTuEGllI648XZMg%2BojhDANwCHbhmH459NWJxTuuWlpPL%2F6ZBiZDeZG4ovee6Yiqzij1SKmsrGlb9zOP4nWQEkr8&X-Amz-Signature=5d68b3604b08f294b17ce52898849606a3025bf0baa25b12da934b73982de488&X-Amz-SignedHeaders=host&x-id=GetObject)
