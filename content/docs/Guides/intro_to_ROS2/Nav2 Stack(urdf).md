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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372I7A2Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3J%2F22hiDIrcUU8buYc1pPSkOhuJZjSlF2KtEuuqQj3AIhAKwydNdL1pTiG2pmQOiK4IHMUcUJblYxG%2BaFQHlusOg3KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyodcCwLt0mHSQimqwq3AMQz30QZjj2Pc7qPnw7sRywipmvvsMhZqi0BGQlXvkqCiwVHphXPAzv5HOpR6RQxrZmWKGGAa8VIlnhxGYTOs2iGarr%2BPO%2B8zvZxPJrWeFvRMrzltCwgsZLM8O1Mk6kC%2FZtP5ndzsX6ZzcZtc4B%2F6%2BnatadoI4M9v4DlsjkfYP6IchIabHadsXBx7UBJK01ZlKeafW2nk65afdMSkl%2F95OIO12ID%2FG5KbfWL0wkA52sFDTMAolkNnOUIv2DfnAhz3U12Ol1LkVr8RfqvIx2AA9w9ALy%2FCD5Etqi3bxuFIVwaywXrDKsFRGS%2Fe6PGtGKWZq7kPTVFRLAsdbMon%2F4f%2FZev8xwiHixN8M9B8b2xTVvV5QLgZZqFASOsZG387DwSn5ivcJhWXlyd23uyanZ6eyxqNTyRr0%2Btg30wxLHyrIBRaJjVXldx69RknBi2%2BXcIsRQv1gr3NqPdPmRS1qObJhNU5il10aD%2B%2B9s3lVx5NEoWqCENxOvjCKQfYcOAoMR2c2sQrYCzAocJwL4pJILI4p8lhkWBZ4KIV8Qijp7FjNMtheFgenSQ8q8ApHouhThQjqtFGqr0PyVqv%2BU%2FBO9M50vFPilX4X0vEi7J9qrUXF1g4UT0PG5WenXYmfwxDDcm6W9BjqkAVEAeo5PBBE%2BTOJYKxLDvAFhZ4C75n%2B95SnULZhRmBBluvOhDsLHkrFIVpPKz2w8939hZ0D374hb4o5cQJ9Zfcj9v7J3yfiX9is6A19IkjyS%2FJMFIHcvLGWHh4wIdDtAhJvKWhWA8onPC4k7gH8517WtIt7zEjMsApgztzVzzM%2F9lDtJun8dfodeRASfGqIPSDYbi776cAkV93dzSdiTO7zJei%2FU&X-Amz-Signature=bf90b514376665dfdd91018d39ab987ee1db25af6cee186d0e453852787969ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372I7A2Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3J%2F22hiDIrcUU8buYc1pPSkOhuJZjSlF2KtEuuqQj3AIhAKwydNdL1pTiG2pmQOiK4IHMUcUJblYxG%2BaFQHlusOg3KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyodcCwLt0mHSQimqwq3AMQz30QZjj2Pc7qPnw7sRywipmvvsMhZqi0BGQlXvkqCiwVHphXPAzv5HOpR6RQxrZmWKGGAa8VIlnhxGYTOs2iGarr%2BPO%2B8zvZxPJrWeFvRMrzltCwgsZLM8O1Mk6kC%2FZtP5ndzsX6ZzcZtc4B%2F6%2BnatadoI4M9v4DlsjkfYP6IchIabHadsXBx7UBJK01ZlKeafW2nk65afdMSkl%2F95OIO12ID%2FG5KbfWL0wkA52sFDTMAolkNnOUIv2DfnAhz3U12Ol1LkVr8RfqvIx2AA9w9ALy%2FCD5Etqi3bxuFIVwaywXrDKsFRGS%2Fe6PGtGKWZq7kPTVFRLAsdbMon%2F4f%2FZev8xwiHixN8M9B8b2xTVvV5QLgZZqFASOsZG387DwSn5ivcJhWXlyd23uyanZ6eyxqNTyRr0%2Btg30wxLHyrIBRaJjVXldx69RknBi2%2BXcIsRQv1gr3NqPdPmRS1qObJhNU5il10aD%2B%2B9s3lVx5NEoWqCENxOvjCKQfYcOAoMR2c2sQrYCzAocJwL4pJILI4p8lhkWBZ4KIV8Qijp7FjNMtheFgenSQ8q8ApHouhThQjqtFGqr0PyVqv%2BU%2FBO9M50vFPilX4X0vEi7J9qrUXF1g4UT0PG5WenXYmfwxDDcm6W9BjqkAVEAeo5PBBE%2BTOJYKxLDvAFhZ4C75n%2B95SnULZhRmBBluvOhDsLHkrFIVpPKz2w8939hZ0D374hb4o5cQJ9Zfcj9v7J3yfiX9is6A19IkjyS%2FJMFIHcvLGWHh4wIdDtAhJvKWhWA8onPC4k7gH8517WtIt7zEjMsApgztzVzzM%2F9lDtJun8dfodeRASfGqIPSDYbi776cAkV93dzSdiTO7zJei%2FU&X-Amz-Signature=6ef335a34ddf94925da71b8c93a35ca43b66c061a8da3bed7b31bc5d0d1d0ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372I7A2Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3J%2F22hiDIrcUU8buYc1pPSkOhuJZjSlF2KtEuuqQj3AIhAKwydNdL1pTiG2pmQOiK4IHMUcUJblYxG%2BaFQHlusOg3KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyodcCwLt0mHSQimqwq3AMQz30QZjj2Pc7qPnw7sRywipmvvsMhZqi0BGQlXvkqCiwVHphXPAzv5HOpR6RQxrZmWKGGAa8VIlnhxGYTOs2iGarr%2BPO%2B8zvZxPJrWeFvRMrzltCwgsZLM8O1Mk6kC%2FZtP5ndzsX6ZzcZtc4B%2F6%2BnatadoI4M9v4DlsjkfYP6IchIabHadsXBx7UBJK01ZlKeafW2nk65afdMSkl%2F95OIO12ID%2FG5KbfWL0wkA52sFDTMAolkNnOUIv2DfnAhz3U12Ol1LkVr8RfqvIx2AA9w9ALy%2FCD5Etqi3bxuFIVwaywXrDKsFRGS%2Fe6PGtGKWZq7kPTVFRLAsdbMon%2F4f%2FZev8xwiHixN8M9B8b2xTVvV5QLgZZqFASOsZG387DwSn5ivcJhWXlyd23uyanZ6eyxqNTyRr0%2Btg30wxLHyrIBRaJjVXldx69RknBi2%2BXcIsRQv1gr3NqPdPmRS1qObJhNU5il10aD%2B%2B9s3lVx5NEoWqCENxOvjCKQfYcOAoMR2c2sQrYCzAocJwL4pJILI4p8lhkWBZ4KIV8Qijp7FjNMtheFgenSQ8q8ApHouhThQjqtFGqr0PyVqv%2BU%2FBO9M50vFPilX4X0vEi7J9qrUXF1g4UT0PG5WenXYmfwxDDcm6W9BjqkAVEAeo5PBBE%2BTOJYKxLDvAFhZ4C75n%2B95SnULZhRmBBluvOhDsLHkrFIVpPKz2w8939hZ0D374hb4o5cQJ9Zfcj9v7J3yfiX9is6A19IkjyS%2FJMFIHcvLGWHh4wIdDtAhJvKWhWA8onPC4k7gH8517WtIt7zEjMsApgztzVzzM%2F9lDtJun8dfodeRASfGqIPSDYbi776cAkV93dzSdiTO7zJei%2FU&X-Amz-Signature=992761d324aa13a50a04524448e317c86a713b5ed5c236dd7bcbaafac4df38f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372I7A2Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3J%2F22hiDIrcUU8buYc1pPSkOhuJZjSlF2KtEuuqQj3AIhAKwydNdL1pTiG2pmQOiK4IHMUcUJblYxG%2BaFQHlusOg3KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyodcCwLt0mHSQimqwq3AMQz30QZjj2Pc7qPnw7sRywipmvvsMhZqi0BGQlXvkqCiwVHphXPAzv5HOpR6RQxrZmWKGGAa8VIlnhxGYTOs2iGarr%2BPO%2B8zvZxPJrWeFvRMrzltCwgsZLM8O1Mk6kC%2FZtP5ndzsX6ZzcZtc4B%2F6%2BnatadoI4M9v4DlsjkfYP6IchIabHadsXBx7UBJK01ZlKeafW2nk65afdMSkl%2F95OIO12ID%2FG5KbfWL0wkA52sFDTMAolkNnOUIv2DfnAhz3U12Ol1LkVr8RfqvIx2AA9w9ALy%2FCD5Etqi3bxuFIVwaywXrDKsFRGS%2Fe6PGtGKWZq7kPTVFRLAsdbMon%2F4f%2FZev8xwiHixN8M9B8b2xTVvV5QLgZZqFASOsZG387DwSn5ivcJhWXlyd23uyanZ6eyxqNTyRr0%2Btg30wxLHyrIBRaJjVXldx69RknBi2%2BXcIsRQv1gr3NqPdPmRS1qObJhNU5il10aD%2B%2B9s3lVx5NEoWqCENxOvjCKQfYcOAoMR2c2sQrYCzAocJwL4pJILI4p8lhkWBZ4KIV8Qijp7FjNMtheFgenSQ8q8ApHouhThQjqtFGqr0PyVqv%2BU%2FBO9M50vFPilX4X0vEi7J9qrUXF1g4UT0PG5WenXYmfwxDDcm6W9BjqkAVEAeo5PBBE%2BTOJYKxLDvAFhZ4C75n%2B95SnULZhRmBBluvOhDsLHkrFIVpPKz2w8939hZ0D374hb4o5cQJ9Zfcj9v7J3yfiX9is6A19IkjyS%2FJMFIHcvLGWHh4wIdDtAhJvKWhWA8onPC4k7gH8517WtIt7zEjMsApgztzVzzM%2F9lDtJun8dfodeRASfGqIPSDYbi776cAkV93dzSdiTO7zJei%2FU&X-Amz-Signature=6da856b2301c5636d9cd1042f1ef23ebe0c7b0890f3643e5ac4dd3427242aaaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372I7A2Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3J%2F22hiDIrcUU8buYc1pPSkOhuJZjSlF2KtEuuqQj3AIhAKwydNdL1pTiG2pmQOiK4IHMUcUJblYxG%2BaFQHlusOg3KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyodcCwLt0mHSQimqwq3AMQz30QZjj2Pc7qPnw7sRywipmvvsMhZqi0BGQlXvkqCiwVHphXPAzv5HOpR6RQxrZmWKGGAa8VIlnhxGYTOs2iGarr%2BPO%2B8zvZxPJrWeFvRMrzltCwgsZLM8O1Mk6kC%2FZtP5ndzsX6ZzcZtc4B%2F6%2BnatadoI4M9v4DlsjkfYP6IchIabHadsXBx7UBJK01ZlKeafW2nk65afdMSkl%2F95OIO12ID%2FG5KbfWL0wkA52sFDTMAolkNnOUIv2DfnAhz3U12Ol1LkVr8RfqvIx2AA9w9ALy%2FCD5Etqi3bxuFIVwaywXrDKsFRGS%2Fe6PGtGKWZq7kPTVFRLAsdbMon%2F4f%2FZev8xwiHixN8M9B8b2xTVvV5QLgZZqFASOsZG387DwSn5ivcJhWXlyd23uyanZ6eyxqNTyRr0%2Btg30wxLHyrIBRaJjVXldx69RknBi2%2BXcIsRQv1gr3NqPdPmRS1qObJhNU5il10aD%2B%2B9s3lVx5NEoWqCENxOvjCKQfYcOAoMR2c2sQrYCzAocJwL4pJILI4p8lhkWBZ4KIV8Qijp7FjNMtheFgenSQ8q8ApHouhThQjqtFGqr0PyVqv%2BU%2FBO9M50vFPilX4X0vEi7J9qrUXF1g4UT0PG5WenXYmfwxDDcm6W9BjqkAVEAeo5PBBE%2BTOJYKxLDvAFhZ4C75n%2B95SnULZhRmBBluvOhDsLHkrFIVpPKz2w8939hZ0D374hb4o5cQJ9Zfcj9v7J3yfiX9is6A19IkjyS%2FJMFIHcvLGWHh4wIdDtAhJvKWhWA8onPC4k7gH8517WtIt7zEjMsApgztzVzzM%2F9lDtJun8dfodeRASfGqIPSDYbi776cAkV93dzSdiTO7zJei%2FU&X-Amz-Signature=5a6e6668274ab4a13b23b8f72cc231914cdbd84e03dc7b4b5ceebe7f7eb14817&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466372I7A2Y%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3J%2F22hiDIrcUU8buYc1pPSkOhuJZjSlF2KtEuuqQj3AIhAKwydNdL1pTiG2pmQOiK4IHMUcUJblYxG%2BaFQHlusOg3KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyodcCwLt0mHSQimqwq3AMQz30QZjj2Pc7qPnw7sRywipmvvsMhZqi0BGQlXvkqCiwVHphXPAzv5HOpR6RQxrZmWKGGAa8VIlnhxGYTOs2iGarr%2BPO%2B8zvZxPJrWeFvRMrzltCwgsZLM8O1Mk6kC%2FZtP5ndzsX6ZzcZtc4B%2F6%2BnatadoI4M9v4DlsjkfYP6IchIabHadsXBx7UBJK01ZlKeafW2nk65afdMSkl%2F95OIO12ID%2FG5KbfWL0wkA52sFDTMAolkNnOUIv2DfnAhz3U12Ol1LkVr8RfqvIx2AA9w9ALy%2FCD5Etqi3bxuFIVwaywXrDKsFRGS%2Fe6PGtGKWZq7kPTVFRLAsdbMon%2F4f%2FZev8xwiHixN8M9B8b2xTVvV5QLgZZqFASOsZG387DwSn5ivcJhWXlyd23uyanZ6eyxqNTyRr0%2Btg30wxLHyrIBRaJjVXldx69RknBi2%2BXcIsRQv1gr3NqPdPmRS1qObJhNU5il10aD%2B%2B9s3lVx5NEoWqCENxOvjCKQfYcOAoMR2c2sQrYCzAocJwL4pJILI4p8lhkWBZ4KIV8Qijp7FjNMtheFgenSQ8q8ApHouhThQjqtFGqr0PyVqv%2BU%2FBO9M50vFPilX4X0vEi7J9qrUXF1g4UT0PG5WenXYmfwxDDcm6W9BjqkAVEAeo5PBBE%2BTOJYKxLDvAFhZ4C75n%2B95SnULZhRmBBluvOhDsLHkrFIVpPKz2w8939hZ0D374hb4o5cQJ9Zfcj9v7J3yfiX9is6A19IkjyS%2FJMFIHcvLGWHh4wIdDtAhJvKWhWA8onPC4k7gH8517WtIt7zEjMsApgztzVzzM%2F9lDtJun8dfodeRASfGqIPSDYbi776cAkV93dzSdiTO7zJei%2FU&X-Amz-Signature=9d492d2f5ae7888feee5ad639e8098123af80a4cb4585b67411902fe7274bbcf&X-Amz-SignedHeaders=host&x-id=GetObject)
