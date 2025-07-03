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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MI62NZE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDpyOuO%2FuefFcZoWpvtHSuledlAQz%2BZBbXxGTNHlDv7UAiACHTlZ%2FJpabCUh7499mLZhL%2Bio95G3%2BopVMreCCUUu4Cr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMp5IQAM2ezTVltB3nKtwDiwcesb91kbqDDiycKcaEkLV6RH4HFdNYmQasbeckCn8PosGgHlCM3lAkbh46Om6%2B59lTv%2F%2BLvTkeAY3XK4TxMVdCYBRNJ7NULIMzZc034aqeLhJn4gbsysSafVMTmLJOgHrl2iSpUFVzvpKdcef0NHtRXeSoruLMOGxie2ieSKIwKD0ZaslMkkbcENmZvaiLKTlCUljy70oZoNWEKMr77uqQ5pEUuZ5vblxx7TVg9Pn82ri7FSEZwBbes%2BAsacV8Q1%2BKf3B1XvDyQkhfHb5ebtQq%2BSu3fi5yJdGP3HNrTy09KQ3xYIkTAT0ffJPOZjq0irJUdN758jr3qViF63OURrp%2BcvQZ09eLxeMZZe1yBSrsBd29HxkgWXQ9XQ%2BvWDPXgkJpph8YIuumo7LwXKNNxqjRKTW0q3h23i522B8PWOMER1EdjQsEhCwPGGT2p1ClHTASIShJwIn9bvlRO1Q%2FDNXLcv0Lk%2FbwLba%2BqdP3cYVs4u07zmXXPy4zAol1qW5UCrVgU6lcoAq1kQOhjJXm7Igy8%2BRy6xgIZmL9JxE4%2FX5yJ0P7g0vgAnnjL7SrJitcc7wRRiAQhliprqVJKK75%2Fqb5MOLjieSwutIK1tkJa%2BYqqeRbTerhImO87mcwwoiZwwY6pgGJC87p7eYGSuzybQsB2DoF9iibcJQKZHwO%2BxkQnwlfWQDzC3mCnGX5AqGHOtUxyzzKWIzYbdEZQs1In9T7iR6abjexM%2F7nfBM%2FK9DHdelgIku4CyoK3pRij9qK%2FE2et09Kig5PusyZYrd74Zv9EQThMOO0uqy%2B4R48El8ZkvWe3xe95yrxvf0n7EdZ1huRt0g3moFhT%2Be9p5brhZYu5xCXx3VfYwA4&X-Amz-Signature=e0bbd1e6f24f2913b51d3aa6f39448e8ce9c12fe54e6fd8aac20cf2f481ebe6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MI62NZE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDpyOuO%2FuefFcZoWpvtHSuledlAQz%2BZBbXxGTNHlDv7UAiACHTlZ%2FJpabCUh7499mLZhL%2Bio95G3%2BopVMreCCUUu4Cr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMp5IQAM2ezTVltB3nKtwDiwcesb91kbqDDiycKcaEkLV6RH4HFdNYmQasbeckCn8PosGgHlCM3lAkbh46Om6%2B59lTv%2F%2BLvTkeAY3XK4TxMVdCYBRNJ7NULIMzZc034aqeLhJn4gbsysSafVMTmLJOgHrl2iSpUFVzvpKdcef0NHtRXeSoruLMOGxie2ieSKIwKD0ZaslMkkbcENmZvaiLKTlCUljy70oZoNWEKMr77uqQ5pEUuZ5vblxx7TVg9Pn82ri7FSEZwBbes%2BAsacV8Q1%2BKf3B1XvDyQkhfHb5ebtQq%2BSu3fi5yJdGP3HNrTy09KQ3xYIkTAT0ffJPOZjq0irJUdN758jr3qViF63OURrp%2BcvQZ09eLxeMZZe1yBSrsBd29HxkgWXQ9XQ%2BvWDPXgkJpph8YIuumo7LwXKNNxqjRKTW0q3h23i522B8PWOMER1EdjQsEhCwPGGT2p1ClHTASIShJwIn9bvlRO1Q%2FDNXLcv0Lk%2FbwLba%2BqdP3cYVs4u07zmXXPy4zAol1qW5UCrVgU6lcoAq1kQOhjJXm7Igy8%2BRy6xgIZmL9JxE4%2FX5yJ0P7g0vgAnnjL7SrJitcc7wRRiAQhliprqVJKK75%2Fqb5MOLjieSwutIK1tkJa%2BYqqeRbTerhImO87mcwwoiZwwY6pgGJC87p7eYGSuzybQsB2DoF9iibcJQKZHwO%2BxkQnwlfWQDzC3mCnGX5AqGHOtUxyzzKWIzYbdEZQs1In9T7iR6abjexM%2F7nfBM%2FK9DHdelgIku4CyoK3pRij9qK%2FE2et09Kig5PusyZYrd74Zv9EQThMOO0uqy%2B4R48El8ZkvWe3xe95yrxvf0n7EdZ1huRt0g3moFhT%2Be9p5brhZYu5xCXx3VfYwA4&X-Amz-Signature=ff0b94d2b66e355aa78ac8d921ed3adb8363d905a9a4aef7cbf63ffc37887837&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MI62NZE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDpyOuO%2FuefFcZoWpvtHSuledlAQz%2BZBbXxGTNHlDv7UAiACHTlZ%2FJpabCUh7499mLZhL%2Bio95G3%2BopVMreCCUUu4Cr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMp5IQAM2ezTVltB3nKtwDiwcesb91kbqDDiycKcaEkLV6RH4HFdNYmQasbeckCn8PosGgHlCM3lAkbh46Om6%2B59lTv%2F%2BLvTkeAY3XK4TxMVdCYBRNJ7NULIMzZc034aqeLhJn4gbsysSafVMTmLJOgHrl2iSpUFVzvpKdcef0NHtRXeSoruLMOGxie2ieSKIwKD0ZaslMkkbcENmZvaiLKTlCUljy70oZoNWEKMr77uqQ5pEUuZ5vblxx7TVg9Pn82ri7FSEZwBbes%2BAsacV8Q1%2BKf3B1XvDyQkhfHb5ebtQq%2BSu3fi5yJdGP3HNrTy09KQ3xYIkTAT0ffJPOZjq0irJUdN758jr3qViF63OURrp%2BcvQZ09eLxeMZZe1yBSrsBd29HxkgWXQ9XQ%2BvWDPXgkJpph8YIuumo7LwXKNNxqjRKTW0q3h23i522B8PWOMER1EdjQsEhCwPGGT2p1ClHTASIShJwIn9bvlRO1Q%2FDNXLcv0Lk%2FbwLba%2BqdP3cYVs4u07zmXXPy4zAol1qW5UCrVgU6lcoAq1kQOhjJXm7Igy8%2BRy6xgIZmL9JxE4%2FX5yJ0P7g0vgAnnjL7SrJitcc7wRRiAQhliprqVJKK75%2Fqb5MOLjieSwutIK1tkJa%2BYqqeRbTerhImO87mcwwoiZwwY6pgGJC87p7eYGSuzybQsB2DoF9iibcJQKZHwO%2BxkQnwlfWQDzC3mCnGX5AqGHOtUxyzzKWIzYbdEZQs1In9T7iR6abjexM%2F7nfBM%2FK9DHdelgIku4CyoK3pRij9qK%2FE2et09Kig5PusyZYrd74Zv9EQThMOO0uqy%2B4R48El8ZkvWe3xe95yrxvf0n7EdZ1huRt0g3moFhT%2Be9p5brhZYu5xCXx3VfYwA4&X-Amz-Signature=656fc92d72e1c13cd5a1f3535f04f916d73efe399587587796de943e1a4e0ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MI62NZE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDpyOuO%2FuefFcZoWpvtHSuledlAQz%2BZBbXxGTNHlDv7UAiACHTlZ%2FJpabCUh7499mLZhL%2Bio95G3%2BopVMreCCUUu4Cr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMp5IQAM2ezTVltB3nKtwDiwcesb91kbqDDiycKcaEkLV6RH4HFdNYmQasbeckCn8PosGgHlCM3lAkbh46Om6%2B59lTv%2F%2BLvTkeAY3XK4TxMVdCYBRNJ7NULIMzZc034aqeLhJn4gbsysSafVMTmLJOgHrl2iSpUFVzvpKdcef0NHtRXeSoruLMOGxie2ieSKIwKD0ZaslMkkbcENmZvaiLKTlCUljy70oZoNWEKMr77uqQ5pEUuZ5vblxx7TVg9Pn82ri7FSEZwBbes%2BAsacV8Q1%2BKf3B1XvDyQkhfHb5ebtQq%2BSu3fi5yJdGP3HNrTy09KQ3xYIkTAT0ffJPOZjq0irJUdN758jr3qViF63OURrp%2BcvQZ09eLxeMZZe1yBSrsBd29HxkgWXQ9XQ%2BvWDPXgkJpph8YIuumo7LwXKNNxqjRKTW0q3h23i522B8PWOMER1EdjQsEhCwPGGT2p1ClHTASIShJwIn9bvlRO1Q%2FDNXLcv0Lk%2FbwLba%2BqdP3cYVs4u07zmXXPy4zAol1qW5UCrVgU6lcoAq1kQOhjJXm7Igy8%2BRy6xgIZmL9JxE4%2FX5yJ0P7g0vgAnnjL7SrJitcc7wRRiAQhliprqVJKK75%2Fqb5MOLjieSwutIK1tkJa%2BYqqeRbTerhImO87mcwwoiZwwY6pgGJC87p7eYGSuzybQsB2DoF9iibcJQKZHwO%2BxkQnwlfWQDzC3mCnGX5AqGHOtUxyzzKWIzYbdEZQs1In9T7iR6abjexM%2F7nfBM%2FK9DHdelgIku4CyoK3pRij9qK%2FE2et09Kig5PusyZYrd74Zv9EQThMOO0uqy%2B4R48El8ZkvWe3xe95yrxvf0n7EdZ1huRt0g3moFhT%2Be9p5brhZYu5xCXx3VfYwA4&X-Amz-Signature=d96906fdb91f999b979b3c64aaca6df65fba2036858b5c3f385f2bf82c5e6145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MI62NZE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDpyOuO%2FuefFcZoWpvtHSuledlAQz%2BZBbXxGTNHlDv7UAiACHTlZ%2FJpabCUh7499mLZhL%2Bio95G3%2BopVMreCCUUu4Cr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMp5IQAM2ezTVltB3nKtwDiwcesb91kbqDDiycKcaEkLV6RH4HFdNYmQasbeckCn8PosGgHlCM3lAkbh46Om6%2B59lTv%2F%2BLvTkeAY3XK4TxMVdCYBRNJ7NULIMzZc034aqeLhJn4gbsysSafVMTmLJOgHrl2iSpUFVzvpKdcef0NHtRXeSoruLMOGxie2ieSKIwKD0ZaslMkkbcENmZvaiLKTlCUljy70oZoNWEKMr77uqQ5pEUuZ5vblxx7TVg9Pn82ri7FSEZwBbes%2BAsacV8Q1%2BKf3B1XvDyQkhfHb5ebtQq%2BSu3fi5yJdGP3HNrTy09KQ3xYIkTAT0ffJPOZjq0irJUdN758jr3qViF63OURrp%2BcvQZ09eLxeMZZe1yBSrsBd29HxkgWXQ9XQ%2BvWDPXgkJpph8YIuumo7LwXKNNxqjRKTW0q3h23i522B8PWOMER1EdjQsEhCwPGGT2p1ClHTASIShJwIn9bvlRO1Q%2FDNXLcv0Lk%2FbwLba%2BqdP3cYVs4u07zmXXPy4zAol1qW5UCrVgU6lcoAq1kQOhjJXm7Igy8%2BRy6xgIZmL9JxE4%2FX5yJ0P7g0vgAnnjL7SrJitcc7wRRiAQhliprqVJKK75%2Fqb5MOLjieSwutIK1tkJa%2BYqqeRbTerhImO87mcwwoiZwwY6pgGJC87p7eYGSuzybQsB2DoF9iibcJQKZHwO%2BxkQnwlfWQDzC3mCnGX5AqGHOtUxyzzKWIzYbdEZQs1In9T7iR6abjexM%2F7nfBM%2FK9DHdelgIku4CyoK3pRij9qK%2FE2et09Kig5PusyZYrd74Zv9EQThMOO0uqy%2B4R48El8ZkvWe3xe95yrxvf0n7EdZ1huRt0g3moFhT%2Be9p5brhZYu5xCXx3VfYwA4&X-Amz-Signature=c91032cfeef198fcd821038b082f93d062218975e98908b5860838ccbcbb63a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MI62NZE%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIDpyOuO%2FuefFcZoWpvtHSuledlAQz%2BZBbXxGTNHlDv7UAiACHTlZ%2FJpabCUh7499mLZhL%2Bio95G3%2BopVMreCCUUu4Cr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMp5IQAM2ezTVltB3nKtwDiwcesb91kbqDDiycKcaEkLV6RH4HFdNYmQasbeckCn8PosGgHlCM3lAkbh46Om6%2B59lTv%2F%2BLvTkeAY3XK4TxMVdCYBRNJ7NULIMzZc034aqeLhJn4gbsysSafVMTmLJOgHrl2iSpUFVzvpKdcef0NHtRXeSoruLMOGxie2ieSKIwKD0ZaslMkkbcENmZvaiLKTlCUljy70oZoNWEKMr77uqQ5pEUuZ5vblxx7TVg9Pn82ri7FSEZwBbes%2BAsacV8Q1%2BKf3B1XvDyQkhfHb5ebtQq%2BSu3fi5yJdGP3HNrTy09KQ3xYIkTAT0ffJPOZjq0irJUdN758jr3qViF63OURrp%2BcvQZ09eLxeMZZe1yBSrsBd29HxkgWXQ9XQ%2BvWDPXgkJpph8YIuumo7LwXKNNxqjRKTW0q3h23i522B8PWOMER1EdjQsEhCwPGGT2p1ClHTASIShJwIn9bvlRO1Q%2FDNXLcv0Lk%2FbwLba%2BqdP3cYVs4u07zmXXPy4zAol1qW5UCrVgU6lcoAq1kQOhjJXm7Igy8%2BRy6xgIZmL9JxE4%2FX5yJ0P7g0vgAnnjL7SrJitcc7wRRiAQhliprqVJKK75%2Fqb5MOLjieSwutIK1tkJa%2BYqqeRbTerhImO87mcwwoiZwwY6pgGJC87p7eYGSuzybQsB2DoF9iibcJQKZHwO%2BxkQnwlfWQDzC3mCnGX5AqGHOtUxyzzKWIzYbdEZQs1In9T7iR6abjexM%2F7nfBM%2FK9DHdelgIku4CyoK3pRij9qK%2FE2et09Kig5PusyZYrd74Zv9EQThMOO0uqy%2B4R48El8ZkvWe3xe95yrxvf0n7EdZ1huRt0g3moFhT%2Be9p5brhZYu5xCXx3VfYwA4&X-Amz-Signature=8cb383905bf50636e26a496e3914d2ac945a2471b04de8f79ebf21a43707812b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
