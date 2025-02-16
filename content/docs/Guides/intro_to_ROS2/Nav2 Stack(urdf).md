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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNFV6DV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDPRulP7w1OxS4RAvfj5Mx2xk5tObmpQeifslb0ZX8AUAiEAkrNXuJEEi7iO%2FHEL2fn7HV9GpAbPAOa2ArUJORtQ6Zoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDANMYTwtjXHTkr%2FveSrcA7eopDJE%2F0%2Fh6OprS61VyG%2BgtjyGamZ%2BtiRPZfzPfnqdT7XGmCAm8iBnVIlG0gYkojLEULdSXvlcFcUa0zJcT1QGTJgEdNQVk9X0enkwCpUmgDbhF8y%2Bi08ikAx4e6DMPpO%2FcgovAvZggbxanYnIuL9ZgpYdpCmRTBgMkLZ8PPt1oVoUoZEhJb%2B2dRwYmxGGihmIgRE4W92YYMtny10SqDPYFyUFa0wxYehcmnFwg859v66%2BlopzTvMmM6LkaDkkZHSecrHV1TX4cRKtAQYvyU6RHAfDb2Dw1d0ixP8z01GMR%2FqqKUo6Gkun1M5hg4HNL%2F2C2FO2kzrFzekIPLYB3IZbs9Efw4E20u1YMkjx%2FrbljKRPe1fd9jYoN5%2FVsh917NRWFWpF9aOkXAl5vUqKPobXWMbbSRAzWMcaPeBVB0Nu00Yv7JJn9bpQ9QWVsajW4j%2BwBFntPTmwFg07a1rO17mSRVKDkMy7JnU5nyNSfJwAP89MIWoThmEJEEPaAfNjvb79S72kYA1nuTmM0MihPWot1hencwlydwX1Pe7IOccBTnOVEq%2B7Q387dryFyX%2FwoQPOXbRxrHKp4Bva3szsOMjvgwX%2Bvj9jYngxJ6km6Sg5u6EQs62jp9Lg9FiLMI%2Ffxb0GOqUB4cKMY0NnVG%2Fh3Fx%2FsQgPwygKtlDZCDIHdt%2BT%2FrSo%2FlbmbxVf7AqvWsVZR7qrq8IsZ6h987OTZa9jfh5YvOKUZBlyryakjHw3DlKMlME1HERM6L%2BIWTuUAqYenP2qNR8ES1MUL6kv4BYAbKCf9pFigxhsqpUkZEn%2F49HLwbtVKKyMAB1XsGiEm9r%2BgtJflirL2QF03QiBfwYrj5Ajgaw%2FVzWkDK3d&X-Amz-Signature=d349a295f192f9042945b91514bcb66972eb1f8668107459298828c6266590d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNFV6DV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDPRulP7w1OxS4RAvfj5Mx2xk5tObmpQeifslb0ZX8AUAiEAkrNXuJEEi7iO%2FHEL2fn7HV9GpAbPAOa2ArUJORtQ6Zoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDANMYTwtjXHTkr%2FveSrcA7eopDJE%2F0%2Fh6OprS61VyG%2BgtjyGamZ%2BtiRPZfzPfnqdT7XGmCAm8iBnVIlG0gYkojLEULdSXvlcFcUa0zJcT1QGTJgEdNQVk9X0enkwCpUmgDbhF8y%2Bi08ikAx4e6DMPpO%2FcgovAvZggbxanYnIuL9ZgpYdpCmRTBgMkLZ8PPt1oVoUoZEhJb%2B2dRwYmxGGihmIgRE4W92YYMtny10SqDPYFyUFa0wxYehcmnFwg859v66%2BlopzTvMmM6LkaDkkZHSecrHV1TX4cRKtAQYvyU6RHAfDb2Dw1d0ixP8z01GMR%2FqqKUo6Gkun1M5hg4HNL%2F2C2FO2kzrFzekIPLYB3IZbs9Efw4E20u1YMkjx%2FrbljKRPe1fd9jYoN5%2FVsh917NRWFWpF9aOkXAl5vUqKPobXWMbbSRAzWMcaPeBVB0Nu00Yv7JJn9bpQ9QWVsajW4j%2BwBFntPTmwFg07a1rO17mSRVKDkMy7JnU5nyNSfJwAP89MIWoThmEJEEPaAfNjvb79S72kYA1nuTmM0MihPWot1hencwlydwX1Pe7IOccBTnOVEq%2B7Q387dryFyX%2FwoQPOXbRxrHKp4Bva3szsOMjvgwX%2Bvj9jYngxJ6km6Sg5u6EQs62jp9Lg9FiLMI%2Ffxb0GOqUB4cKMY0NnVG%2Fh3Fx%2FsQgPwygKtlDZCDIHdt%2BT%2FrSo%2FlbmbxVf7AqvWsVZR7qrq8IsZ6h987OTZa9jfh5YvOKUZBlyryakjHw3DlKMlME1HERM6L%2BIWTuUAqYenP2qNR8ES1MUL6kv4BYAbKCf9pFigxhsqpUkZEn%2F49HLwbtVKKyMAB1XsGiEm9r%2BgtJflirL2QF03QiBfwYrj5Ajgaw%2FVzWkDK3d&X-Amz-Signature=09c9bcef92d30b74004aa185bc3ae384e92ca9924cad39fda718e45d01957671&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNFV6DV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDPRulP7w1OxS4RAvfj5Mx2xk5tObmpQeifslb0ZX8AUAiEAkrNXuJEEi7iO%2FHEL2fn7HV9GpAbPAOa2ArUJORtQ6Zoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDANMYTwtjXHTkr%2FveSrcA7eopDJE%2F0%2Fh6OprS61VyG%2BgtjyGamZ%2BtiRPZfzPfnqdT7XGmCAm8iBnVIlG0gYkojLEULdSXvlcFcUa0zJcT1QGTJgEdNQVk9X0enkwCpUmgDbhF8y%2Bi08ikAx4e6DMPpO%2FcgovAvZggbxanYnIuL9ZgpYdpCmRTBgMkLZ8PPt1oVoUoZEhJb%2B2dRwYmxGGihmIgRE4W92YYMtny10SqDPYFyUFa0wxYehcmnFwg859v66%2BlopzTvMmM6LkaDkkZHSecrHV1TX4cRKtAQYvyU6RHAfDb2Dw1d0ixP8z01GMR%2FqqKUo6Gkun1M5hg4HNL%2F2C2FO2kzrFzekIPLYB3IZbs9Efw4E20u1YMkjx%2FrbljKRPe1fd9jYoN5%2FVsh917NRWFWpF9aOkXAl5vUqKPobXWMbbSRAzWMcaPeBVB0Nu00Yv7JJn9bpQ9QWVsajW4j%2BwBFntPTmwFg07a1rO17mSRVKDkMy7JnU5nyNSfJwAP89MIWoThmEJEEPaAfNjvb79S72kYA1nuTmM0MihPWot1hencwlydwX1Pe7IOccBTnOVEq%2B7Q387dryFyX%2FwoQPOXbRxrHKp4Bva3szsOMjvgwX%2Bvj9jYngxJ6km6Sg5u6EQs62jp9Lg9FiLMI%2Ffxb0GOqUB4cKMY0NnVG%2Fh3Fx%2FsQgPwygKtlDZCDIHdt%2BT%2FrSo%2FlbmbxVf7AqvWsVZR7qrq8IsZ6h987OTZa9jfh5YvOKUZBlyryakjHw3DlKMlME1HERM6L%2BIWTuUAqYenP2qNR8ES1MUL6kv4BYAbKCf9pFigxhsqpUkZEn%2F49HLwbtVKKyMAB1XsGiEm9r%2BgtJflirL2QF03QiBfwYrj5Ajgaw%2FVzWkDK3d&X-Amz-Signature=e3b2102e4e80b507a7ec0454fab36621531c5e0487796ecd24ab19c4460e4bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNFV6DV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDPRulP7w1OxS4RAvfj5Mx2xk5tObmpQeifslb0ZX8AUAiEAkrNXuJEEi7iO%2FHEL2fn7HV9GpAbPAOa2ArUJORtQ6Zoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDANMYTwtjXHTkr%2FveSrcA7eopDJE%2F0%2Fh6OprS61VyG%2BgtjyGamZ%2BtiRPZfzPfnqdT7XGmCAm8iBnVIlG0gYkojLEULdSXvlcFcUa0zJcT1QGTJgEdNQVk9X0enkwCpUmgDbhF8y%2Bi08ikAx4e6DMPpO%2FcgovAvZggbxanYnIuL9ZgpYdpCmRTBgMkLZ8PPt1oVoUoZEhJb%2B2dRwYmxGGihmIgRE4W92YYMtny10SqDPYFyUFa0wxYehcmnFwg859v66%2BlopzTvMmM6LkaDkkZHSecrHV1TX4cRKtAQYvyU6RHAfDb2Dw1d0ixP8z01GMR%2FqqKUo6Gkun1M5hg4HNL%2F2C2FO2kzrFzekIPLYB3IZbs9Efw4E20u1YMkjx%2FrbljKRPe1fd9jYoN5%2FVsh917NRWFWpF9aOkXAl5vUqKPobXWMbbSRAzWMcaPeBVB0Nu00Yv7JJn9bpQ9QWVsajW4j%2BwBFntPTmwFg07a1rO17mSRVKDkMy7JnU5nyNSfJwAP89MIWoThmEJEEPaAfNjvb79S72kYA1nuTmM0MihPWot1hencwlydwX1Pe7IOccBTnOVEq%2B7Q387dryFyX%2FwoQPOXbRxrHKp4Bva3szsOMjvgwX%2Bvj9jYngxJ6km6Sg5u6EQs62jp9Lg9FiLMI%2Ffxb0GOqUB4cKMY0NnVG%2Fh3Fx%2FsQgPwygKtlDZCDIHdt%2BT%2FrSo%2FlbmbxVf7AqvWsVZR7qrq8IsZ6h987OTZa9jfh5YvOKUZBlyryakjHw3DlKMlME1HERM6L%2BIWTuUAqYenP2qNR8ES1MUL6kv4BYAbKCf9pFigxhsqpUkZEn%2F49HLwbtVKKyMAB1XsGiEm9r%2BgtJflirL2QF03QiBfwYrj5Ajgaw%2FVzWkDK3d&X-Amz-Signature=e58963809fed1864c64dddad4d2d74389a97df189e50865d14c30fbb970d25fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNFV6DV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDPRulP7w1OxS4RAvfj5Mx2xk5tObmpQeifslb0ZX8AUAiEAkrNXuJEEi7iO%2FHEL2fn7HV9GpAbPAOa2ArUJORtQ6Zoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDANMYTwtjXHTkr%2FveSrcA7eopDJE%2F0%2Fh6OprS61VyG%2BgtjyGamZ%2BtiRPZfzPfnqdT7XGmCAm8iBnVIlG0gYkojLEULdSXvlcFcUa0zJcT1QGTJgEdNQVk9X0enkwCpUmgDbhF8y%2Bi08ikAx4e6DMPpO%2FcgovAvZggbxanYnIuL9ZgpYdpCmRTBgMkLZ8PPt1oVoUoZEhJb%2B2dRwYmxGGihmIgRE4W92YYMtny10SqDPYFyUFa0wxYehcmnFwg859v66%2BlopzTvMmM6LkaDkkZHSecrHV1TX4cRKtAQYvyU6RHAfDb2Dw1d0ixP8z01GMR%2FqqKUo6Gkun1M5hg4HNL%2F2C2FO2kzrFzekIPLYB3IZbs9Efw4E20u1YMkjx%2FrbljKRPe1fd9jYoN5%2FVsh917NRWFWpF9aOkXAl5vUqKPobXWMbbSRAzWMcaPeBVB0Nu00Yv7JJn9bpQ9QWVsajW4j%2BwBFntPTmwFg07a1rO17mSRVKDkMy7JnU5nyNSfJwAP89MIWoThmEJEEPaAfNjvb79S72kYA1nuTmM0MihPWot1hencwlydwX1Pe7IOccBTnOVEq%2B7Q387dryFyX%2FwoQPOXbRxrHKp4Bva3szsOMjvgwX%2Bvj9jYngxJ6km6Sg5u6EQs62jp9Lg9FiLMI%2Ffxb0GOqUB4cKMY0NnVG%2Fh3Fx%2FsQgPwygKtlDZCDIHdt%2BT%2FrSo%2FlbmbxVf7AqvWsVZR7qrq8IsZ6h987OTZa9jfh5YvOKUZBlyryakjHw3DlKMlME1HERM6L%2BIWTuUAqYenP2qNR8ES1MUL6kv4BYAbKCf9pFigxhsqpUkZEn%2F49HLwbtVKKyMAB1XsGiEm9r%2BgtJflirL2QF03QiBfwYrj5Ajgaw%2FVzWkDK3d&X-Amz-Signature=1d9c425ed1e3f898eb47a710be6a30a5a6bad795c16f4bafd08031075d463ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCNFV6DV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIDPRulP7w1OxS4RAvfj5Mx2xk5tObmpQeifslb0ZX8AUAiEAkrNXuJEEi7iO%2FHEL2fn7HV9GpAbPAOa2ArUJORtQ6Zoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDANMYTwtjXHTkr%2FveSrcA7eopDJE%2F0%2Fh6OprS61VyG%2BgtjyGamZ%2BtiRPZfzPfnqdT7XGmCAm8iBnVIlG0gYkojLEULdSXvlcFcUa0zJcT1QGTJgEdNQVk9X0enkwCpUmgDbhF8y%2Bi08ikAx4e6DMPpO%2FcgovAvZggbxanYnIuL9ZgpYdpCmRTBgMkLZ8PPt1oVoUoZEhJb%2B2dRwYmxGGihmIgRE4W92YYMtny10SqDPYFyUFa0wxYehcmnFwg859v66%2BlopzTvMmM6LkaDkkZHSecrHV1TX4cRKtAQYvyU6RHAfDb2Dw1d0ixP8z01GMR%2FqqKUo6Gkun1M5hg4HNL%2F2C2FO2kzrFzekIPLYB3IZbs9Efw4E20u1YMkjx%2FrbljKRPe1fd9jYoN5%2FVsh917NRWFWpF9aOkXAl5vUqKPobXWMbbSRAzWMcaPeBVB0Nu00Yv7JJn9bpQ9QWVsajW4j%2BwBFntPTmwFg07a1rO17mSRVKDkMy7JnU5nyNSfJwAP89MIWoThmEJEEPaAfNjvb79S72kYA1nuTmM0MihPWot1hencwlydwX1Pe7IOccBTnOVEq%2B7Q387dryFyX%2FwoQPOXbRxrHKp4Bva3szsOMjvgwX%2Bvj9jYngxJ6km6Sg5u6EQs62jp9Lg9FiLMI%2Ffxb0GOqUB4cKMY0NnVG%2Fh3Fx%2FsQgPwygKtlDZCDIHdt%2BT%2FrSo%2FlbmbxVf7AqvWsVZR7qrq8IsZ6h987OTZa9jfh5YvOKUZBlyryakjHw3DlKMlME1HERM6L%2BIWTuUAqYenP2qNR8ES1MUL6kv4BYAbKCf9pFigxhsqpUkZEn%2F49HLwbtVKKyMAB1XsGiEm9r%2BgtJflirL2QF03QiBfwYrj5Ajgaw%2FVzWkDK3d&X-Amz-Signature=e65604f3facac70b09bad24adf69b0eb7922ef467908a4a3a2dcc3b3b1537bb1&X-Amz-SignedHeaders=host&x-id=GetObject)
