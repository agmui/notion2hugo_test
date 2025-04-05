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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UAIC7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRQrkWrTM8i1Z4%2FO0gCC4oG46Ncn3x2gthzrqsXce8QIgO3RBXOECgwddUy5T9RKcqK1HQ7FYOP1d5GD3tKtKf7wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEeYKDG04Cwvh4jlyircA%2F9EHL8gTgKO62A1aohdDafoiUFiuTNCn8HU1D%2FVGo212yo4%2FJcu%2B8apjBr9YoJv6GJMf5tBOI3RmnQjD%2FlYCOFGp5MzUJHXs2q8fjdP33FBEbI%2FLst5k3Gh81wg9VTEMboJt%2FU7wKtH%2BDAP1%2BXxyA8edW4sOBXDibpn7Zq%2F4mG9wH6BGD9knwjNzHzg4u8S1hdgIW8Jaja%2FTzz3dwcjYmeYXAsB1XVM3ZVYhF73Maj0LaQGBitZ78qaqi3aT%2F0FK52Yylxzoo1hPRQSiV8fIV%2FNDNwBF9jkEqWK59JKp6xsSM64Zhdb5IIvwyqp6qDzl77vbrRucQFbvKE3x8J5AeJzvl3VQN48vU477KIwkTQD8RnPyH%2FryYUNsqxmp3jlMxS%2FUXxby5xmQB%2FbhTkB7fR6XByr%2BaJe1OGx%2FfGNh9v5reHy3e%2FYJG8IIHP5JM7Lf%2BbuAJpGvnR5Av24TfOnpn9Vz20rDYEsiFWA1%2FQYTp3%2B2gKuc%2Bnll7CkDOEXZIeOzMHP1JyUWeppySooAns51jwtIu0p1ezavn8gXq08V7HsNszeuYAMYL8b0QfGSozHr5mpL1mdGnh5c3nj8XYNaiz31F4e8hUvFPR%2FhLBTbCVqLjdnwmN9kanAgNcbMLHkw78GOqUByOJB8%2F6e5KPiK29OIqlRtNJGCmjJVHgzQck1DBvVk5TFN1GjdeuLnxufHFVidXLZsTUbDHD%2BF2YCqm0OJylz1vueLXY%2BZ4DL5VVfn04PlONX6kzGOZrqP4J40xv6EcCIhU00TO46h5cyPGPbJAjv0ZvG1Kr0JLuUfnuRQpx5yFXTjHnzWHhg1sT%2ByC6SLVFF%2FXYce5Bq8ci7Jvm4vWpmCXCdN%2BRK&X-Amz-Signature=3c11e3695239f206734af083452a7a5bbfc98c2526b28912abc40162059c22ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UAIC7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRQrkWrTM8i1Z4%2FO0gCC4oG46Ncn3x2gthzrqsXce8QIgO3RBXOECgwddUy5T9RKcqK1HQ7FYOP1d5GD3tKtKf7wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEeYKDG04Cwvh4jlyircA%2F9EHL8gTgKO62A1aohdDafoiUFiuTNCn8HU1D%2FVGo212yo4%2FJcu%2B8apjBr9YoJv6GJMf5tBOI3RmnQjD%2FlYCOFGp5MzUJHXs2q8fjdP33FBEbI%2FLst5k3Gh81wg9VTEMboJt%2FU7wKtH%2BDAP1%2BXxyA8edW4sOBXDibpn7Zq%2F4mG9wH6BGD9knwjNzHzg4u8S1hdgIW8Jaja%2FTzz3dwcjYmeYXAsB1XVM3ZVYhF73Maj0LaQGBitZ78qaqi3aT%2F0FK52Yylxzoo1hPRQSiV8fIV%2FNDNwBF9jkEqWK59JKp6xsSM64Zhdb5IIvwyqp6qDzl77vbrRucQFbvKE3x8J5AeJzvl3VQN48vU477KIwkTQD8RnPyH%2FryYUNsqxmp3jlMxS%2FUXxby5xmQB%2FbhTkB7fR6XByr%2BaJe1OGx%2FfGNh9v5reHy3e%2FYJG8IIHP5JM7Lf%2BbuAJpGvnR5Av24TfOnpn9Vz20rDYEsiFWA1%2FQYTp3%2B2gKuc%2Bnll7CkDOEXZIeOzMHP1JyUWeppySooAns51jwtIu0p1ezavn8gXq08V7HsNszeuYAMYL8b0QfGSozHr5mpL1mdGnh5c3nj8XYNaiz31F4e8hUvFPR%2FhLBTbCVqLjdnwmN9kanAgNcbMLHkw78GOqUByOJB8%2F6e5KPiK29OIqlRtNJGCmjJVHgzQck1DBvVk5TFN1GjdeuLnxufHFVidXLZsTUbDHD%2BF2YCqm0OJylz1vueLXY%2BZ4DL5VVfn04PlONX6kzGOZrqP4J40xv6EcCIhU00TO46h5cyPGPbJAjv0ZvG1Kr0JLuUfnuRQpx5yFXTjHnzWHhg1sT%2ByC6SLVFF%2FXYce5Bq8ci7Jvm4vWpmCXCdN%2BRK&X-Amz-Signature=6329761d6723695730fa45ba778e9b5663c224ae999b463f68daf80ed5a757dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UAIC7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRQrkWrTM8i1Z4%2FO0gCC4oG46Ncn3x2gthzrqsXce8QIgO3RBXOECgwddUy5T9RKcqK1HQ7FYOP1d5GD3tKtKf7wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEeYKDG04Cwvh4jlyircA%2F9EHL8gTgKO62A1aohdDafoiUFiuTNCn8HU1D%2FVGo212yo4%2FJcu%2B8apjBr9YoJv6GJMf5tBOI3RmnQjD%2FlYCOFGp5MzUJHXs2q8fjdP33FBEbI%2FLst5k3Gh81wg9VTEMboJt%2FU7wKtH%2BDAP1%2BXxyA8edW4sOBXDibpn7Zq%2F4mG9wH6BGD9knwjNzHzg4u8S1hdgIW8Jaja%2FTzz3dwcjYmeYXAsB1XVM3ZVYhF73Maj0LaQGBitZ78qaqi3aT%2F0FK52Yylxzoo1hPRQSiV8fIV%2FNDNwBF9jkEqWK59JKp6xsSM64Zhdb5IIvwyqp6qDzl77vbrRucQFbvKE3x8J5AeJzvl3VQN48vU477KIwkTQD8RnPyH%2FryYUNsqxmp3jlMxS%2FUXxby5xmQB%2FbhTkB7fR6XByr%2BaJe1OGx%2FfGNh9v5reHy3e%2FYJG8IIHP5JM7Lf%2BbuAJpGvnR5Av24TfOnpn9Vz20rDYEsiFWA1%2FQYTp3%2B2gKuc%2Bnll7CkDOEXZIeOzMHP1JyUWeppySooAns51jwtIu0p1ezavn8gXq08V7HsNszeuYAMYL8b0QfGSozHr5mpL1mdGnh5c3nj8XYNaiz31F4e8hUvFPR%2FhLBTbCVqLjdnwmN9kanAgNcbMLHkw78GOqUByOJB8%2F6e5KPiK29OIqlRtNJGCmjJVHgzQck1DBvVk5TFN1GjdeuLnxufHFVidXLZsTUbDHD%2BF2YCqm0OJylz1vueLXY%2BZ4DL5VVfn04PlONX6kzGOZrqP4J40xv6EcCIhU00TO46h5cyPGPbJAjv0ZvG1Kr0JLuUfnuRQpx5yFXTjHnzWHhg1sT%2ByC6SLVFF%2FXYce5Bq8ci7Jvm4vWpmCXCdN%2BRK&X-Amz-Signature=3ce806145c74cc0aff427559cf953d249abff1330ed913fc203e7e42e7e458c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UAIC7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRQrkWrTM8i1Z4%2FO0gCC4oG46Ncn3x2gthzrqsXce8QIgO3RBXOECgwddUy5T9RKcqK1HQ7FYOP1d5GD3tKtKf7wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEeYKDG04Cwvh4jlyircA%2F9EHL8gTgKO62A1aohdDafoiUFiuTNCn8HU1D%2FVGo212yo4%2FJcu%2B8apjBr9YoJv6GJMf5tBOI3RmnQjD%2FlYCOFGp5MzUJHXs2q8fjdP33FBEbI%2FLst5k3Gh81wg9VTEMboJt%2FU7wKtH%2BDAP1%2BXxyA8edW4sOBXDibpn7Zq%2F4mG9wH6BGD9knwjNzHzg4u8S1hdgIW8Jaja%2FTzz3dwcjYmeYXAsB1XVM3ZVYhF73Maj0LaQGBitZ78qaqi3aT%2F0FK52Yylxzoo1hPRQSiV8fIV%2FNDNwBF9jkEqWK59JKp6xsSM64Zhdb5IIvwyqp6qDzl77vbrRucQFbvKE3x8J5AeJzvl3VQN48vU477KIwkTQD8RnPyH%2FryYUNsqxmp3jlMxS%2FUXxby5xmQB%2FbhTkB7fR6XByr%2BaJe1OGx%2FfGNh9v5reHy3e%2FYJG8IIHP5JM7Lf%2BbuAJpGvnR5Av24TfOnpn9Vz20rDYEsiFWA1%2FQYTp3%2B2gKuc%2Bnll7CkDOEXZIeOzMHP1JyUWeppySooAns51jwtIu0p1ezavn8gXq08V7HsNszeuYAMYL8b0QfGSozHr5mpL1mdGnh5c3nj8XYNaiz31F4e8hUvFPR%2FhLBTbCVqLjdnwmN9kanAgNcbMLHkw78GOqUByOJB8%2F6e5KPiK29OIqlRtNJGCmjJVHgzQck1DBvVk5TFN1GjdeuLnxufHFVidXLZsTUbDHD%2BF2YCqm0OJylz1vueLXY%2BZ4DL5VVfn04PlONX6kzGOZrqP4J40xv6EcCIhU00TO46h5cyPGPbJAjv0ZvG1Kr0JLuUfnuRQpx5yFXTjHnzWHhg1sT%2ByC6SLVFF%2FXYce5Bq8ci7Jvm4vWpmCXCdN%2BRK&X-Amz-Signature=b7418aeaac060a12bc1f19d3db0cd5a26b3f6dcd7cc3817b7fc850d3fb072355&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UAIC7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRQrkWrTM8i1Z4%2FO0gCC4oG46Ncn3x2gthzrqsXce8QIgO3RBXOECgwddUy5T9RKcqK1HQ7FYOP1d5GD3tKtKf7wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEeYKDG04Cwvh4jlyircA%2F9EHL8gTgKO62A1aohdDafoiUFiuTNCn8HU1D%2FVGo212yo4%2FJcu%2B8apjBr9YoJv6GJMf5tBOI3RmnQjD%2FlYCOFGp5MzUJHXs2q8fjdP33FBEbI%2FLst5k3Gh81wg9VTEMboJt%2FU7wKtH%2BDAP1%2BXxyA8edW4sOBXDibpn7Zq%2F4mG9wH6BGD9knwjNzHzg4u8S1hdgIW8Jaja%2FTzz3dwcjYmeYXAsB1XVM3ZVYhF73Maj0LaQGBitZ78qaqi3aT%2F0FK52Yylxzoo1hPRQSiV8fIV%2FNDNwBF9jkEqWK59JKp6xsSM64Zhdb5IIvwyqp6qDzl77vbrRucQFbvKE3x8J5AeJzvl3VQN48vU477KIwkTQD8RnPyH%2FryYUNsqxmp3jlMxS%2FUXxby5xmQB%2FbhTkB7fR6XByr%2BaJe1OGx%2FfGNh9v5reHy3e%2FYJG8IIHP5JM7Lf%2BbuAJpGvnR5Av24TfOnpn9Vz20rDYEsiFWA1%2FQYTp3%2B2gKuc%2Bnll7CkDOEXZIeOzMHP1JyUWeppySooAns51jwtIu0p1ezavn8gXq08V7HsNszeuYAMYL8b0QfGSozHr5mpL1mdGnh5c3nj8XYNaiz31F4e8hUvFPR%2FhLBTbCVqLjdnwmN9kanAgNcbMLHkw78GOqUByOJB8%2F6e5KPiK29OIqlRtNJGCmjJVHgzQck1DBvVk5TFN1GjdeuLnxufHFVidXLZsTUbDHD%2BF2YCqm0OJylz1vueLXY%2BZ4DL5VVfn04PlONX6kzGOZrqP4J40xv6EcCIhU00TO46h5cyPGPbJAjv0ZvG1Kr0JLuUfnuRQpx5yFXTjHnzWHhg1sT%2ByC6SLVFF%2FXYce5Bq8ci7Jvm4vWpmCXCdN%2BRK&X-Amz-Signature=88d92bb2b4248fa46325a9609c2e85d88fae2949be4293d61276061dc5dcdd47&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UAIC7U%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwRQrkWrTM8i1Z4%2FO0gCC4oG46Ncn3x2gthzrqsXce8QIgO3RBXOECgwddUy5T9RKcqK1HQ7FYOP1d5GD3tKtKf7wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEeYKDG04Cwvh4jlyircA%2F9EHL8gTgKO62A1aohdDafoiUFiuTNCn8HU1D%2FVGo212yo4%2FJcu%2B8apjBr9YoJv6GJMf5tBOI3RmnQjD%2FlYCOFGp5MzUJHXs2q8fjdP33FBEbI%2FLst5k3Gh81wg9VTEMboJt%2FU7wKtH%2BDAP1%2BXxyA8edW4sOBXDibpn7Zq%2F4mG9wH6BGD9knwjNzHzg4u8S1hdgIW8Jaja%2FTzz3dwcjYmeYXAsB1XVM3ZVYhF73Maj0LaQGBitZ78qaqi3aT%2F0FK52Yylxzoo1hPRQSiV8fIV%2FNDNwBF9jkEqWK59JKp6xsSM64Zhdb5IIvwyqp6qDzl77vbrRucQFbvKE3x8J5AeJzvl3VQN48vU477KIwkTQD8RnPyH%2FryYUNsqxmp3jlMxS%2FUXxby5xmQB%2FbhTkB7fR6XByr%2BaJe1OGx%2FfGNh9v5reHy3e%2FYJG8IIHP5JM7Lf%2BbuAJpGvnR5Av24TfOnpn9Vz20rDYEsiFWA1%2FQYTp3%2B2gKuc%2Bnll7CkDOEXZIeOzMHP1JyUWeppySooAns51jwtIu0p1ezavn8gXq08V7HsNszeuYAMYL8b0QfGSozHr5mpL1mdGnh5c3nj8XYNaiz31F4e8hUvFPR%2FhLBTbCVqLjdnwmN9kanAgNcbMLHkw78GOqUByOJB8%2F6e5KPiK29OIqlRtNJGCmjJVHgzQck1DBvVk5TFN1GjdeuLnxufHFVidXLZsTUbDHD%2BF2YCqm0OJylz1vueLXY%2BZ4DL5VVfn04PlONX6kzGOZrqP4J40xv6EcCIhU00TO46h5cyPGPbJAjv0ZvG1Kr0JLuUfnuRQpx5yFXTjHnzWHhg1sT%2ByC6SLVFF%2FXYce5Bq8ci7Jvm4vWpmCXCdN%2BRK&X-Amz-Signature=0f8ef818925520c5c399b7113e42123fe36bcf45b18dca205ad75c6711f6e2e1&X-Amz-SignedHeaders=host&x-id=GetObject)
