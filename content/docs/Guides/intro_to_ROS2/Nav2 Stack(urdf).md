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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YD4XDQY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIF5WRWO6RL7yJccpdNckhYgd%2Bf4d7BGhG%2B94V3RQc64nAiBFUzsfZ3z0lcDICbe2v8QPTjzjKZh9%2BhTWgzw%2B9rcJmSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMrvrQis3ZoCN50WK%2FKtwDUygeFHGUPGNuEk78HCL9cY7oidHctYh4vsnpUN9okJAxx1zBp%2BadtPw9Cz6O53RDnOLORcVUTuNakAgJ5Lg9RTY8AEB5QUbXjXHbSeDw7Netv%2BT5RJX%2BBqw0M1MMb%2BQvL4QKOEjGY1a1lBMksaFhgwFlXvzT7YdsnjV11zFApFjcgmL1fWo%2B9tGVIx%2F35d0si7Cenlcyx%2FtM0FWD%2BFepm6OWVI1qYzbeDddLYSGi2JteLrwxLdyU2EIj3%2FHA1SHvpmxwnrr%2FDe%2B5vYexZxeuj6PqlqAyuE1ZVbKm0X9ipEKSeGJotFnST5fCIEDUstUAHWv2n1wGOmO8LA3JsuEMPGKAEAxRuHUi8MJ9h745br7%2BIMgS3NFDcoBvVLTNyDWRwoB4dv0N25BRCj8MVkmwUMqz0vyqG3I3im2dyBopOLQXyx%2FFp5Pn1sQFynBywiXtwDapgABx1V2x7swZ7kxHjpMpdZm1ee8Sc8sOpzXwLSVhGsxlcGSNwEvdftqG5NcUQ%2FDwcL%2B4rqFL6%2FH5TnkquFviEDJGtS%2BGSuR8PWI9wYdd%2FdPsI31ti6d1DBWyoFC1Z1zpuBfw7La4mkGiHkGbVR1BhwhOZQQpd4LNFWku%2B8%2FA8ZbuFulEeSp0XxUw%2BZXtwgY6pgHlz430gy3Mcw2LAsf28lXzBOZ8vU82FhskbBalJ31Pm%2BhF%2ByzX1gZKJMLJY65PZC%2F4Nf67v%2F1g26Kfy%2B319lmBbP9jZHmDykQOrZ57lM89NCkKIDmiKSt3pS0GJfNoMWF35yX%2FTvEyDEjtqwNtc3kg7FaxleRYvKZCrB1AC8Z1XNFjDSHS6HGg59sQ9GdslxoxDc3yyRSD69w7IU3Hk9n56x%2B6nA%2FM&X-Amz-Signature=8da78c0b9b08b55832302553406d4f1888afa1415d23929c3dd051a28af8e966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YD4XDQY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIF5WRWO6RL7yJccpdNckhYgd%2Bf4d7BGhG%2B94V3RQc64nAiBFUzsfZ3z0lcDICbe2v8QPTjzjKZh9%2BhTWgzw%2B9rcJmSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMrvrQis3ZoCN50WK%2FKtwDUygeFHGUPGNuEk78HCL9cY7oidHctYh4vsnpUN9okJAxx1zBp%2BadtPw9Cz6O53RDnOLORcVUTuNakAgJ5Lg9RTY8AEB5QUbXjXHbSeDw7Netv%2BT5RJX%2BBqw0M1MMb%2BQvL4QKOEjGY1a1lBMksaFhgwFlXvzT7YdsnjV11zFApFjcgmL1fWo%2B9tGVIx%2F35d0si7Cenlcyx%2FtM0FWD%2BFepm6OWVI1qYzbeDddLYSGi2JteLrwxLdyU2EIj3%2FHA1SHvpmxwnrr%2FDe%2B5vYexZxeuj6PqlqAyuE1ZVbKm0X9ipEKSeGJotFnST5fCIEDUstUAHWv2n1wGOmO8LA3JsuEMPGKAEAxRuHUi8MJ9h745br7%2BIMgS3NFDcoBvVLTNyDWRwoB4dv0N25BRCj8MVkmwUMqz0vyqG3I3im2dyBopOLQXyx%2FFp5Pn1sQFynBywiXtwDapgABx1V2x7swZ7kxHjpMpdZm1ee8Sc8sOpzXwLSVhGsxlcGSNwEvdftqG5NcUQ%2FDwcL%2B4rqFL6%2FH5TnkquFviEDJGtS%2BGSuR8PWI9wYdd%2FdPsI31ti6d1DBWyoFC1Z1zpuBfw7La4mkGiHkGbVR1BhwhOZQQpd4LNFWku%2B8%2FA8ZbuFulEeSp0XxUw%2BZXtwgY6pgHlz430gy3Mcw2LAsf28lXzBOZ8vU82FhskbBalJ31Pm%2BhF%2ByzX1gZKJMLJY65PZC%2F4Nf67v%2F1g26Kfy%2B319lmBbP9jZHmDykQOrZ57lM89NCkKIDmiKSt3pS0GJfNoMWF35yX%2FTvEyDEjtqwNtc3kg7FaxleRYvKZCrB1AC8Z1XNFjDSHS6HGg59sQ9GdslxoxDc3yyRSD69w7IU3Hk9n56x%2B6nA%2FM&X-Amz-Signature=a2ddf3bba0dcc92d391189c53758f8fff6d98e21516cd8fc42cf18de17448b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YD4XDQY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIF5WRWO6RL7yJccpdNckhYgd%2Bf4d7BGhG%2B94V3RQc64nAiBFUzsfZ3z0lcDICbe2v8QPTjzjKZh9%2BhTWgzw%2B9rcJmSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMrvrQis3ZoCN50WK%2FKtwDUygeFHGUPGNuEk78HCL9cY7oidHctYh4vsnpUN9okJAxx1zBp%2BadtPw9Cz6O53RDnOLORcVUTuNakAgJ5Lg9RTY8AEB5QUbXjXHbSeDw7Netv%2BT5RJX%2BBqw0M1MMb%2BQvL4QKOEjGY1a1lBMksaFhgwFlXvzT7YdsnjV11zFApFjcgmL1fWo%2B9tGVIx%2F35d0si7Cenlcyx%2FtM0FWD%2BFepm6OWVI1qYzbeDddLYSGi2JteLrwxLdyU2EIj3%2FHA1SHvpmxwnrr%2FDe%2B5vYexZxeuj6PqlqAyuE1ZVbKm0X9ipEKSeGJotFnST5fCIEDUstUAHWv2n1wGOmO8LA3JsuEMPGKAEAxRuHUi8MJ9h745br7%2BIMgS3NFDcoBvVLTNyDWRwoB4dv0N25BRCj8MVkmwUMqz0vyqG3I3im2dyBopOLQXyx%2FFp5Pn1sQFynBywiXtwDapgABx1V2x7swZ7kxHjpMpdZm1ee8Sc8sOpzXwLSVhGsxlcGSNwEvdftqG5NcUQ%2FDwcL%2B4rqFL6%2FH5TnkquFviEDJGtS%2BGSuR8PWI9wYdd%2FdPsI31ti6d1DBWyoFC1Z1zpuBfw7La4mkGiHkGbVR1BhwhOZQQpd4LNFWku%2B8%2FA8ZbuFulEeSp0XxUw%2BZXtwgY6pgHlz430gy3Mcw2LAsf28lXzBOZ8vU82FhskbBalJ31Pm%2BhF%2ByzX1gZKJMLJY65PZC%2F4Nf67v%2F1g26Kfy%2B319lmBbP9jZHmDykQOrZ57lM89NCkKIDmiKSt3pS0GJfNoMWF35yX%2FTvEyDEjtqwNtc3kg7FaxleRYvKZCrB1AC8Z1XNFjDSHS6HGg59sQ9GdslxoxDc3yyRSD69w7IU3Hk9n56x%2B6nA%2FM&X-Amz-Signature=00018fe4c4a8cc708d365fbe7867ff235698e18e9b890dd99ea996be9e011a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YD4XDQY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIF5WRWO6RL7yJccpdNckhYgd%2Bf4d7BGhG%2B94V3RQc64nAiBFUzsfZ3z0lcDICbe2v8QPTjzjKZh9%2BhTWgzw%2B9rcJmSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMrvrQis3ZoCN50WK%2FKtwDUygeFHGUPGNuEk78HCL9cY7oidHctYh4vsnpUN9okJAxx1zBp%2BadtPw9Cz6O53RDnOLORcVUTuNakAgJ5Lg9RTY8AEB5QUbXjXHbSeDw7Netv%2BT5RJX%2BBqw0M1MMb%2BQvL4QKOEjGY1a1lBMksaFhgwFlXvzT7YdsnjV11zFApFjcgmL1fWo%2B9tGVIx%2F35d0si7Cenlcyx%2FtM0FWD%2BFepm6OWVI1qYzbeDddLYSGi2JteLrwxLdyU2EIj3%2FHA1SHvpmxwnrr%2FDe%2B5vYexZxeuj6PqlqAyuE1ZVbKm0X9ipEKSeGJotFnST5fCIEDUstUAHWv2n1wGOmO8LA3JsuEMPGKAEAxRuHUi8MJ9h745br7%2BIMgS3NFDcoBvVLTNyDWRwoB4dv0N25BRCj8MVkmwUMqz0vyqG3I3im2dyBopOLQXyx%2FFp5Pn1sQFynBywiXtwDapgABx1V2x7swZ7kxHjpMpdZm1ee8Sc8sOpzXwLSVhGsxlcGSNwEvdftqG5NcUQ%2FDwcL%2B4rqFL6%2FH5TnkquFviEDJGtS%2BGSuR8PWI9wYdd%2FdPsI31ti6d1DBWyoFC1Z1zpuBfw7La4mkGiHkGbVR1BhwhOZQQpd4LNFWku%2B8%2FA8ZbuFulEeSp0XxUw%2BZXtwgY6pgHlz430gy3Mcw2LAsf28lXzBOZ8vU82FhskbBalJ31Pm%2BhF%2ByzX1gZKJMLJY65PZC%2F4Nf67v%2F1g26Kfy%2B319lmBbP9jZHmDykQOrZ57lM89NCkKIDmiKSt3pS0GJfNoMWF35yX%2FTvEyDEjtqwNtc3kg7FaxleRYvKZCrB1AC8Z1XNFjDSHS6HGg59sQ9GdslxoxDc3yyRSD69w7IU3Hk9n56x%2B6nA%2FM&X-Amz-Signature=f5b0d32b982e9b26e0d808462ac09da84e7240eac39c5cce691dc4be08564463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YD4XDQY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIF5WRWO6RL7yJccpdNckhYgd%2Bf4d7BGhG%2B94V3RQc64nAiBFUzsfZ3z0lcDICbe2v8QPTjzjKZh9%2BhTWgzw%2B9rcJmSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMrvrQis3ZoCN50WK%2FKtwDUygeFHGUPGNuEk78HCL9cY7oidHctYh4vsnpUN9okJAxx1zBp%2BadtPw9Cz6O53RDnOLORcVUTuNakAgJ5Lg9RTY8AEB5QUbXjXHbSeDw7Netv%2BT5RJX%2BBqw0M1MMb%2BQvL4QKOEjGY1a1lBMksaFhgwFlXvzT7YdsnjV11zFApFjcgmL1fWo%2B9tGVIx%2F35d0si7Cenlcyx%2FtM0FWD%2BFepm6OWVI1qYzbeDddLYSGi2JteLrwxLdyU2EIj3%2FHA1SHvpmxwnrr%2FDe%2B5vYexZxeuj6PqlqAyuE1ZVbKm0X9ipEKSeGJotFnST5fCIEDUstUAHWv2n1wGOmO8LA3JsuEMPGKAEAxRuHUi8MJ9h745br7%2BIMgS3NFDcoBvVLTNyDWRwoB4dv0N25BRCj8MVkmwUMqz0vyqG3I3im2dyBopOLQXyx%2FFp5Pn1sQFynBywiXtwDapgABx1V2x7swZ7kxHjpMpdZm1ee8Sc8sOpzXwLSVhGsxlcGSNwEvdftqG5NcUQ%2FDwcL%2B4rqFL6%2FH5TnkquFviEDJGtS%2BGSuR8PWI9wYdd%2FdPsI31ti6d1DBWyoFC1Z1zpuBfw7La4mkGiHkGbVR1BhwhOZQQpd4LNFWku%2B8%2FA8ZbuFulEeSp0XxUw%2BZXtwgY6pgHlz430gy3Mcw2LAsf28lXzBOZ8vU82FhskbBalJ31Pm%2BhF%2ByzX1gZKJMLJY65PZC%2F4Nf67v%2F1g26Kfy%2B319lmBbP9jZHmDykQOrZ57lM89NCkKIDmiKSt3pS0GJfNoMWF35yX%2FTvEyDEjtqwNtc3kg7FaxleRYvKZCrB1AC8Z1XNFjDSHS6HGg59sQ9GdslxoxDc3yyRSD69w7IU3Hk9n56x%2B6nA%2FM&X-Amz-Signature=3dfa9674b266f32b4b76d4f2bd23361a19db9e04f6ed16f23cf6fa2959c3cddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YD4XDQY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIF5WRWO6RL7yJccpdNckhYgd%2Bf4d7BGhG%2B94V3RQc64nAiBFUzsfZ3z0lcDICbe2v8QPTjzjKZh9%2BhTWgzw%2B9rcJmSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMrvrQis3ZoCN50WK%2FKtwDUygeFHGUPGNuEk78HCL9cY7oidHctYh4vsnpUN9okJAxx1zBp%2BadtPw9Cz6O53RDnOLORcVUTuNakAgJ5Lg9RTY8AEB5QUbXjXHbSeDw7Netv%2BT5RJX%2BBqw0M1MMb%2BQvL4QKOEjGY1a1lBMksaFhgwFlXvzT7YdsnjV11zFApFjcgmL1fWo%2B9tGVIx%2F35d0si7Cenlcyx%2FtM0FWD%2BFepm6OWVI1qYzbeDddLYSGi2JteLrwxLdyU2EIj3%2FHA1SHvpmxwnrr%2FDe%2B5vYexZxeuj6PqlqAyuE1ZVbKm0X9ipEKSeGJotFnST5fCIEDUstUAHWv2n1wGOmO8LA3JsuEMPGKAEAxRuHUi8MJ9h745br7%2BIMgS3NFDcoBvVLTNyDWRwoB4dv0N25BRCj8MVkmwUMqz0vyqG3I3im2dyBopOLQXyx%2FFp5Pn1sQFynBywiXtwDapgABx1V2x7swZ7kxHjpMpdZm1ee8Sc8sOpzXwLSVhGsxlcGSNwEvdftqG5NcUQ%2FDwcL%2B4rqFL6%2FH5TnkquFviEDJGtS%2BGSuR8PWI9wYdd%2FdPsI31ti6d1DBWyoFC1Z1zpuBfw7La4mkGiHkGbVR1BhwhOZQQpd4LNFWku%2B8%2FA8ZbuFulEeSp0XxUw%2BZXtwgY6pgHlz430gy3Mcw2LAsf28lXzBOZ8vU82FhskbBalJ31Pm%2BhF%2ByzX1gZKJMLJY65PZC%2F4Nf67v%2F1g26Kfy%2B319lmBbP9jZHmDykQOrZ57lM89NCkKIDmiKSt3pS0GJfNoMWF35yX%2FTvEyDEjtqwNtc3kg7FaxleRYvKZCrB1AC8Z1XNFjDSHS6HGg59sQ9GdslxoxDc3yyRSD69w7IU3Hk9n56x%2B6nA%2FM&X-Amz-Signature=58b2dacc32395e1bbcf26c16db31a45e51234ec0687a88c7da28b0637892a57b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
