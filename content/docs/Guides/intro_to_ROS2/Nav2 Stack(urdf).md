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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56CWSX2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMzfkw%2BDfcFGn2Nkn7%2BNDqiFQQh7VgoauljA7ksMuBUAiEAyMBBWvrBt75AsrAL4QxfSzZS2NjDisXR5i437Af7%2F5YqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOotKFcpSPkOXOoxDSrcA8PcTnwjBURWGNQgpxe1q8jcetMK0OcUIF8rQX371jOwYt%2BghkMIqJ2HaVlg9IVhLa6g30GEgHVsaULo1EmscelvFRs1EUGZhl1FnZg2Y4P1SeBtKBK75h%2FjdsyDzgmWnGbSatdjaMVAHj99g%2Ffsg5lU5EcFuJXDG0UsM4Y78ORpwFd18JS5oqNH0LRM0mUsOZofCQ4q2OGxEpi4HgqhxTERERsAlUaSdcq%2FPPSG07bpykRPUARM8OBV1YTcHbXUMSHRxmF1%2FrSZynHUzV7Xidcpy9uQVX%2FAzJbL1LTSAdjkoi1COmVyLmpCP4PVGR%2FU%2BgAr%2BSOcqVEjdFH15XKkh7xlKvK3EUpa%2BsCo%2Bj5iMgU0Vlk9Y7aQdowxKgiXoRY7%2FAmMCDdt%2Ft9Cwp0NskMQ7eLVqIM%2BOiVEjsu91Tz43uYMORh2PrP41rW1QNBhizkqCz55dSOQKuSmvW2pouX%2B7IhHySZ%2F9YN5NZfCEQO8eSyw2%2B0t%2FwKd1S59JA%2FFnXY0t2ox3A00lg2zpd0GFOIV7nleBQQb6ZC30NawaHuNYTqpE8KjHyzYPrpRqxFyg%2FweQ%2BKgvcURrkEeMOoSwoPH%2Fh3BHU6jxouehiA5HD4r8Se7AFVZeadYYfgyYfgiMLeT98MGOqUBYYrITyeHQd%2FfAD0FtvadX%2FrhWT1NzHMLT1Oj%2FgpN02aRAyx6yDQu3SFm2%2F6pvYl9m6AOw%2FBpdKw2V10erEgRtFSbLgc5Hb1kgL04AAlgkgO%2BJa82y%2BBOpGpBBAxBNRBwQIoPjgz%2ByV9q8M1ej4zGcT2l%2FS%2FVpKrLdCKMVXI9oX%2Brsqab%2B0kWGitaXrgAheyc%2BFQltfJEDPGgmi8sfaSc07KkWSfO&X-Amz-Signature=bd68ad3f1cae30d1a4d1fb452826dfb58c76e3b15c9d551ad73edc443ab2c054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56CWSX2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMzfkw%2BDfcFGn2Nkn7%2BNDqiFQQh7VgoauljA7ksMuBUAiEAyMBBWvrBt75AsrAL4QxfSzZS2NjDisXR5i437Af7%2F5YqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOotKFcpSPkOXOoxDSrcA8PcTnwjBURWGNQgpxe1q8jcetMK0OcUIF8rQX371jOwYt%2BghkMIqJ2HaVlg9IVhLa6g30GEgHVsaULo1EmscelvFRs1EUGZhl1FnZg2Y4P1SeBtKBK75h%2FjdsyDzgmWnGbSatdjaMVAHj99g%2Ffsg5lU5EcFuJXDG0UsM4Y78ORpwFd18JS5oqNH0LRM0mUsOZofCQ4q2OGxEpi4HgqhxTERERsAlUaSdcq%2FPPSG07bpykRPUARM8OBV1YTcHbXUMSHRxmF1%2FrSZynHUzV7Xidcpy9uQVX%2FAzJbL1LTSAdjkoi1COmVyLmpCP4PVGR%2FU%2BgAr%2BSOcqVEjdFH15XKkh7xlKvK3EUpa%2BsCo%2Bj5iMgU0Vlk9Y7aQdowxKgiXoRY7%2FAmMCDdt%2Ft9Cwp0NskMQ7eLVqIM%2BOiVEjsu91Tz43uYMORh2PrP41rW1QNBhizkqCz55dSOQKuSmvW2pouX%2B7IhHySZ%2F9YN5NZfCEQO8eSyw2%2B0t%2FwKd1S59JA%2FFnXY0t2ox3A00lg2zpd0GFOIV7nleBQQb6ZC30NawaHuNYTqpE8KjHyzYPrpRqxFyg%2FweQ%2BKgvcURrkEeMOoSwoPH%2Fh3BHU6jxouehiA5HD4r8Se7AFVZeadYYfgyYfgiMLeT98MGOqUBYYrITyeHQd%2FfAD0FtvadX%2FrhWT1NzHMLT1Oj%2FgpN02aRAyx6yDQu3SFm2%2F6pvYl9m6AOw%2FBpdKw2V10erEgRtFSbLgc5Hb1kgL04AAlgkgO%2BJa82y%2BBOpGpBBAxBNRBwQIoPjgz%2ByV9q8M1ej4zGcT2l%2FS%2FVpKrLdCKMVXI9oX%2Brsqab%2B0kWGitaXrgAheyc%2BFQltfJEDPGgmi8sfaSc07KkWSfO&X-Amz-Signature=de39d259cc0d6a727c7fa3c309c222b29526cbf9b6e8c359ac4d0f140ef24221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56CWSX2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMzfkw%2BDfcFGn2Nkn7%2BNDqiFQQh7VgoauljA7ksMuBUAiEAyMBBWvrBt75AsrAL4QxfSzZS2NjDisXR5i437Af7%2F5YqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOotKFcpSPkOXOoxDSrcA8PcTnwjBURWGNQgpxe1q8jcetMK0OcUIF8rQX371jOwYt%2BghkMIqJ2HaVlg9IVhLa6g30GEgHVsaULo1EmscelvFRs1EUGZhl1FnZg2Y4P1SeBtKBK75h%2FjdsyDzgmWnGbSatdjaMVAHj99g%2Ffsg5lU5EcFuJXDG0UsM4Y78ORpwFd18JS5oqNH0LRM0mUsOZofCQ4q2OGxEpi4HgqhxTERERsAlUaSdcq%2FPPSG07bpykRPUARM8OBV1YTcHbXUMSHRxmF1%2FrSZynHUzV7Xidcpy9uQVX%2FAzJbL1LTSAdjkoi1COmVyLmpCP4PVGR%2FU%2BgAr%2BSOcqVEjdFH15XKkh7xlKvK3EUpa%2BsCo%2Bj5iMgU0Vlk9Y7aQdowxKgiXoRY7%2FAmMCDdt%2Ft9Cwp0NskMQ7eLVqIM%2BOiVEjsu91Tz43uYMORh2PrP41rW1QNBhizkqCz55dSOQKuSmvW2pouX%2B7IhHySZ%2F9YN5NZfCEQO8eSyw2%2B0t%2FwKd1S59JA%2FFnXY0t2ox3A00lg2zpd0GFOIV7nleBQQb6ZC30NawaHuNYTqpE8KjHyzYPrpRqxFyg%2FweQ%2BKgvcURrkEeMOoSwoPH%2Fh3BHU6jxouehiA5HD4r8Se7AFVZeadYYfgyYfgiMLeT98MGOqUBYYrITyeHQd%2FfAD0FtvadX%2FrhWT1NzHMLT1Oj%2FgpN02aRAyx6yDQu3SFm2%2F6pvYl9m6AOw%2FBpdKw2V10erEgRtFSbLgc5Hb1kgL04AAlgkgO%2BJa82y%2BBOpGpBBAxBNRBwQIoPjgz%2ByV9q8M1ej4zGcT2l%2FS%2FVpKrLdCKMVXI9oX%2Brsqab%2B0kWGitaXrgAheyc%2BFQltfJEDPGgmi8sfaSc07KkWSfO&X-Amz-Signature=ef6e1867167a165b493ce7c3804c85507031c46041f60367ccdbb2f3ed224a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56CWSX2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMzfkw%2BDfcFGn2Nkn7%2BNDqiFQQh7VgoauljA7ksMuBUAiEAyMBBWvrBt75AsrAL4QxfSzZS2NjDisXR5i437Af7%2F5YqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOotKFcpSPkOXOoxDSrcA8PcTnwjBURWGNQgpxe1q8jcetMK0OcUIF8rQX371jOwYt%2BghkMIqJ2HaVlg9IVhLa6g30GEgHVsaULo1EmscelvFRs1EUGZhl1FnZg2Y4P1SeBtKBK75h%2FjdsyDzgmWnGbSatdjaMVAHj99g%2Ffsg5lU5EcFuJXDG0UsM4Y78ORpwFd18JS5oqNH0LRM0mUsOZofCQ4q2OGxEpi4HgqhxTERERsAlUaSdcq%2FPPSG07bpykRPUARM8OBV1YTcHbXUMSHRxmF1%2FrSZynHUzV7Xidcpy9uQVX%2FAzJbL1LTSAdjkoi1COmVyLmpCP4PVGR%2FU%2BgAr%2BSOcqVEjdFH15XKkh7xlKvK3EUpa%2BsCo%2Bj5iMgU0Vlk9Y7aQdowxKgiXoRY7%2FAmMCDdt%2Ft9Cwp0NskMQ7eLVqIM%2BOiVEjsu91Tz43uYMORh2PrP41rW1QNBhizkqCz55dSOQKuSmvW2pouX%2B7IhHySZ%2F9YN5NZfCEQO8eSyw2%2B0t%2FwKd1S59JA%2FFnXY0t2ox3A00lg2zpd0GFOIV7nleBQQb6ZC30NawaHuNYTqpE8KjHyzYPrpRqxFyg%2FweQ%2BKgvcURrkEeMOoSwoPH%2Fh3BHU6jxouehiA5HD4r8Se7AFVZeadYYfgyYfgiMLeT98MGOqUBYYrITyeHQd%2FfAD0FtvadX%2FrhWT1NzHMLT1Oj%2FgpN02aRAyx6yDQu3SFm2%2F6pvYl9m6AOw%2FBpdKw2V10erEgRtFSbLgc5Hb1kgL04AAlgkgO%2BJa82y%2BBOpGpBBAxBNRBwQIoPjgz%2ByV9q8M1ej4zGcT2l%2FS%2FVpKrLdCKMVXI9oX%2Brsqab%2B0kWGitaXrgAheyc%2BFQltfJEDPGgmi8sfaSc07KkWSfO&X-Amz-Signature=380ef06cdc8222a8929e958798775d3e769a947c75dd5453df73248f8ba426dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56CWSX2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMzfkw%2BDfcFGn2Nkn7%2BNDqiFQQh7VgoauljA7ksMuBUAiEAyMBBWvrBt75AsrAL4QxfSzZS2NjDisXR5i437Af7%2F5YqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOotKFcpSPkOXOoxDSrcA8PcTnwjBURWGNQgpxe1q8jcetMK0OcUIF8rQX371jOwYt%2BghkMIqJ2HaVlg9IVhLa6g30GEgHVsaULo1EmscelvFRs1EUGZhl1FnZg2Y4P1SeBtKBK75h%2FjdsyDzgmWnGbSatdjaMVAHj99g%2Ffsg5lU5EcFuJXDG0UsM4Y78ORpwFd18JS5oqNH0LRM0mUsOZofCQ4q2OGxEpi4HgqhxTERERsAlUaSdcq%2FPPSG07bpykRPUARM8OBV1YTcHbXUMSHRxmF1%2FrSZynHUzV7Xidcpy9uQVX%2FAzJbL1LTSAdjkoi1COmVyLmpCP4PVGR%2FU%2BgAr%2BSOcqVEjdFH15XKkh7xlKvK3EUpa%2BsCo%2Bj5iMgU0Vlk9Y7aQdowxKgiXoRY7%2FAmMCDdt%2Ft9Cwp0NskMQ7eLVqIM%2BOiVEjsu91Tz43uYMORh2PrP41rW1QNBhizkqCz55dSOQKuSmvW2pouX%2B7IhHySZ%2F9YN5NZfCEQO8eSyw2%2B0t%2FwKd1S59JA%2FFnXY0t2ox3A00lg2zpd0GFOIV7nleBQQb6ZC30NawaHuNYTqpE8KjHyzYPrpRqxFyg%2FweQ%2BKgvcURrkEeMOoSwoPH%2Fh3BHU6jxouehiA5HD4r8Se7AFVZeadYYfgyYfgiMLeT98MGOqUBYYrITyeHQd%2FfAD0FtvadX%2FrhWT1NzHMLT1Oj%2FgpN02aRAyx6yDQu3SFm2%2F6pvYl9m6AOw%2FBpdKw2V10erEgRtFSbLgc5Hb1kgL04AAlgkgO%2BJa82y%2BBOpGpBBAxBNRBwQIoPjgz%2ByV9q8M1ej4zGcT2l%2FS%2FVpKrLdCKMVXI9oX%2Brsqab%2B0kWGitaXrgAheyc%2BFQltfJEDPGgmi8sfaSc07KkWSfO&X-Amz-Signature=82ac88598270dfb659843baa1e52936e56a201ea76890ad1da2c9a1b083e023d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56CWSX2%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMzfkw%2BDfcFGn2Nkn7%2BNDqiFQQh7VgoauljA7ksMuBUAiEAyMBBWvrBt75AsrAL4QxfSzZS2NjDisXR5i437Af7%2F5YqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOotKFcpSPkOXOoxDSrcA8PcTnwjBURWGNQgpxe1q8jcetMK0OcUIF8rQX371jOwYt%2BghkMIqJ2HaVlg9IVhLa6g30GEgHVsaULo1EmscelvFRs1EUGZhl1FnZg2Y4P1SeBtKBK75h%2FjdsyDzgmWnGbSatdjaMVAHj99g%2Ffsg5lU5EcFuJXDG0UsM4Y78ORpwFd18JS5oqNH0LRM0mUsOZofCQ4q2OGxEpi4HgqhxTERERsAlUaSdcq%2FPPSG07bpykRPUARM8OBV1YTcHbXUMSHRxmF1%2FrSZynHUzV7Xidcpy9uQVX%2FAzJbL1LTSAdjkoi1COmVyLmpCP4PVGR%2FU%2BgAr%2BSOcqVEjdFH15XKkh7xlKvK3EUpa%2BsCo%2Bj5iMgU0Vlk9Y7aQdowxKgiXoRY7%2FAmMCDdt%2Ft9Cwp0NskMQ7eLVqIM%2BOiVEjsu91Tz43uYMORh2PrP41rW1QNBhizkqCz55dSOQKuSmvW2pouX%2B7IhHySZ%2F9YN5NZfCEQO8eSyw2%2B0t%2FwKd1S59JA%2FFnXY0t2ox3A00lg2zpd0GFOIV7nleBQQb6ZC30NawaHuNYTqpE8KjHyzYPrpRqxFyg%2FweQ%2BKgvcURrkEeMOoSwoPH%2Fh3BHU6jxouehiA5HD4r8Se7AFVZeadYYfgyYfgiMLeT98MGOqUBYYrITyeHQd%2FfAD0FtvadX%2FrhWT1NzHMLT1Oj%2FgpN02aRAyx6yDQu3SFm2%2F6pvYl9m6AOw%2FBpdKw2V10erEgRtFSbLgc5Hb1kgL04AAlgkgO%2BJa82y%2BBOpGpBBAxBNRBwQIoPjgz%2ByV9q8M1ej4zGcT2l%2FS%2FVpKrLdCKMVXI9oX%2Brsqab%2B0kWGitaXrgAheyc%2BFQltfJEDPGgmi8sfaSc07KkWSfO&X-Amz-Signature=1c440e173593999a96c592ff4504bc5e2077915967f3790fcb3642d2857baad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
