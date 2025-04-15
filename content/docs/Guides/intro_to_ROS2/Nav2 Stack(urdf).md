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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JLRJNH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMW7Sk2mjgD2Rm6A3CDJooh%2Fmwet4AmoO2Cf1Uq1KquAiBO716aC8KS2cA131eE36HFXvwFoLDOJVNXTl%2BcZrd4Lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMut75KsCCR%2Fvcf6PMKtwDfx%2FLO8W%2F9PSWEXNkpCE13rX4ZN5zrL%2BENnqF1cp%2BAAAXiNHJhDNSt1lX8OXNxM2UbqMjHsdVem7R%2FUQLgEWMMXFB6LmC6iU0%2FnEhnVhTvzX%2B7TLSYLSuef92D%2BnrS9YDFFON069mskKCUuiahfgoCKkRTrCWQXXLXJ0BAHJukZZ%2FZdmbQqYObR31OU2SS41yS%2BpLMEKguK7l2hzBRbcY2OQe0IoL7ij1fakCKvRin2f2fCD1WRuW3NmQBgIF3okHUPCB89BOe%2FbEF9yQQ0WlZu0JBZW1Al4Ampd%2FAigAkcrE1R%2FIVGadzZcltaX0mBTVHs%2BKPT45IjYL8ybwx00N1iPhcGSuLhDvsDxGNaJYErlk6EFJUQBLY%2B2ZP3Ew%2F2T5Z1bsy1v8lnuUTl2kxOW8vCMK%2FgD8Nyz0phc5b3YuEwcHCUYC9aUbAoWZoySJ8BcV8ey1xB4g6sR0wdrrV%2FHRU5XP2EcDesxSvoBiFd7ih67xuCxFQYwTPaNWhuWPw7PDY3f571AXuP2KxQykgZ7pYLomguSvuNrJPilxx7C1BL1T8zQ%2FYA00W6WI9AwCmnS8OIielp7yFBux6mWz4KH6cjiTZoYvJ8QHWseuIF9mp9Yr8SmNeTW2frTudCAw8oT6vwY6pgGakBPMSlcNZoRpFI751KybO3v57I%2B5B%2FiWIqIUHeavWTB2AqbFS7nESfgDtB5GOtm7j76kqSvu2y1WqB%2BmYUGzzrC8DCL4kGkv1nml7QMpOD18NeSm1mR3G9v4CtXEjI0LOPgkhI6KTFpPsKsu30LGJaLcxEWeld5loRhxWIH8tpC%2BdVVFNkkGZOeZ6%2FxQ07mh7GWv2CaMc99Vi578tyKQGTQB4hmf&X-Amz-Signature=c9d5ca2b5330301a86c04629a84b9d2902b04398429d603229cd7d0b1db45a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JLRJNH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMW7Sk2mjgD2Rm6A3CDJooh%2Fmwet4AmoO2Cf1Uq1KquAiBO716aC8KS2cA131eE36HFXvwFoLDOJVNXTl%2BcZrd4Lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMut75KsCCR%2Fvcf6PMKtwDfx%2FLO8W%2F9PSWEXNkpCE13rX4ZN5zrL%2BENnqF1cp%2BAAAXiNHJhDNSt1lX8OXNxM2UbqMjHsdVem7R%2FUQLgEWMMXFB6LmC6iU0%2FnEhnVhTvzX%2B7TLSYLSuef92D%2BnrS9YDFFON069mskKCUuiahfgoCKkRTrCWQXXLXJ0BAHJukZZ%2FZdmbQqYObR31OU2SS41yS%2BpLMEKguK7l2hzBRbcY2OQe0IoL7ij1fakCKvRin2f2fCD1WRuW3NmQBgIF3okHUPCB89BOe%2FbEF9yQQ0WlZu0JBZW1Al4Ampd%2FAigAkcrE1R%2FIVGadzZcltaX0mBTVHs%2BKPT45IjYL8ybwx00N1iPhcGSuLhDvsDxGNaJYErlk6EFJUQBLY%2B2ZP3Ew%2F2T5Z1bsy1v8lnuUTl2kxOW8vCMK%2FgD8Nyz0phc5b3YuEwcHCUYC9aUbAoWZoySJ8BcV8ey1xB4g6sR0wdrrV%2FHRU5XP2EcDesxSvoBiFd7ih67xuCxFQYwTPaNWhuWPw7PDY3f571AXuP2KxQykgZ7pYLomguSvuNrJPilxx7C1BL1T8zQ%2FYA00W6WI9AwCmnS8OIielp7yFBux6mWz4KH6cjiTZoYvJ8QHWseuIF9mp9Yr8SmNeTW2frTudCAw8oT6vwY6pgGakBPMSlcNZoRpFI751KybO3v57I%2B5B%2FiWIqIUHeavWTB2AqbFS7nESfgDtB5GOtm7j76kqSvu2y1WqB%2BmYUGzzrC8DCL4kGkv1nml7QMpOD18NeSm1mR3G9v4CtXEjI0LOPgkhI6KTFpPsKsu30LGJaLcxEWeld5loRhxWIH8tpC%2BdVVFNkkGZOeZ6%2FxQ07mh7GWv2CaMc99Vi578tyKQGTQB4hmf&X-Amz-Signature=4a2e2b87df7ae9e23b5340c68f8e3e829ec811be4b39e69f446762fe06974654&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JLRJNH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMW7Sk2mjgD2Rm6A3CDJooh%2Fmwet4AmoO2Cf1Uq1KquAiBO716aC8KS2cA131eE36HFXvwFoLDOJVNXTl%2BcZrd4Lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMut75KsCCR%2Fvcf6PMKtwDfx%2FLO8W%2F9PSWEXNkpCE13rX4ZN5zrL%2BENnqF1cp%2BAAAXiNHJhDNSt1lX8OXNxM2UbqMjHsdVem7R%2FUQLgEWMMXFB6LmC6iU0%2FnEhnVhTvzX%2B7TLSYLSuef92D%2BnrS9YDFFON069mskKCUuiahfgoCKkRTrCWQXXLXJ0BAHJukZZ%2FZdmbQqYObR31OU2SS41yS%2BpLMEKguK7l2hzBRbcY2OQe0IoL7ij1fakCKvRin2f2fCD1WRuW3NmQBgIF3okHUPCB89BOe%2FbEF9yQQ0WlZu0JBZW1Al4Ampd%2FAigAkcrE1R%2FIVGadzZcltaX0mBTVHs%2BKPT45IjYL8ybwx00N1iPhcGSuLhDvsDxGNaJYErlk6EFJUQBLY%2B2ZP3Ew%2F2T5Z1bsy1v8lnuUTl2kxOW8vCMK%2FgD8Nyz0phc5b3YuEwcHCUYC9aUbAoWZoySJ8BcV8ey1xB4g6sR0wdrrV%2FHRU5XP2EcDesxSvoBiFd7ih67xuCxFQYwTPaNWhuWPw7PDY3f571AXuP2KxQykgZ7pYLomguSvuNrJPilxx7C1BL1T8zQ%2FYA00W6WI9AwCmnS8OIielp7yFBux6mWz4KH6cjiTZoYvJ8QHWseuIF9mp9Yr8SmNeTW2frTudCAw8oT6vwY6pgGakBPMSlcNZoRpFI751KybO3v57I%2B5B%2FiWIqIUHeavWTB2AqbFS7nESfgDtB5GOtm7j76kqSvu2y1WqB%2BmYUGzzrC8DCL4kGkv1nml7QMpOD18NeSm1mR3G9v4CtXEjI0LOPgkhI6KTFpPsKsu30LGJaLcxEWeld5loRhxWIH8tpC%2BdVVFNkkGZOeZ6%2FxQ07mh7GWv2CaMc99Vi578tyKQGTQB4hmf&X-Amz-Signature=acb8c7f22897f17e3b85c820465e818b4227d4eee82236051181234e50791800&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JLRJNH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMW7Sk2mjgD2Rm6A3CDJooh%2Fmwet4AmoO2Cf1Uq1KquAiBO716aC8KS2cA131eE36HFXvwFoLDOJVNXTl%2BcZrd4Lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMut75KsCCR%2Fvcf6PMKtwDfx%2FLO8W%2F9PSWEXNkpCE13rX4ZN5zrL%2BENnqF1cp%2BAAAXiNHJhDNSt1lX8OXNxM2UbqMjHsdVem7R%2FUQLgEWMMXFB6LmC6iU0%2FnEhnVhTvzX%2B7TLSYLSuef92D%2BnrS9YDFFON069mskKCUuiahfgoCKkRTrCWQXXLXJ0BAHJukZZ%2FZdmbQqYObR31OU2SS41yS%2BpLMEKguK7l2hzBRbcY2OQe0IoL7ij1fakCKvRin2f2fCD1WRuW3NmQBgIF3okHUPCB89BOe%2FbEF9yQQ0WlZu0JBZW1Al4Ampd%2FAigAkcrE1R%2FIVGadzZcltaX0mBTVHs%2BKPT45IjYL8ybwx00N1iPhcGSuLhDvsDxGNaJYErlk6EFJUQBLY%2B2ZP3Ew%2F2T5Z1bsy1v8lnuUTl2kxOW8vCMK%2FgD8Nyz0phc5b3YuEwcHCUYC9aUbAoWZoySJ8BcV8ey1xB4g6sR0wdrrV%2FHRU5XP2EcDesxSvoBiFd7ih67xuCxFQYwTPaNWhuWPw7PDY3f571AXuP2KxQykgZ7pYLomguSvuNrJPilxx7C1BL1T8zQ%2FYA00W6WI9AwCmnS8OIielp7yFBux6mWz4KH6cjiTZoYvJ8QHWseuIF9mp9Yr8SmNeTW2frTudCAw8oT6vwY6pgGakBPMSlcNZoRpFI751KybO3v57I%2B5B%2FiWIqIUHeavWTB2AqbFS7nESfgDtB5GOtm7j76kqSvu2y1WqB%2BmYUGzzrC8DCL4kGkv1nml7QMpOD18NeSm1mR3G9v4CtXEjI0LOPgkhI6KTFpPsKsu30LGJaLcxEWeld5loRhxWIH8tpC%2BdVVFNkkGZOeZ6%2FxQ07mh7GWv2CaMc99Vi578tyKQGTQB4hmf&X-Amz-Signature=8d481e3b260d1cf52fb941f40f70cf5c0cdcd18a6b406b7275f0ce6e511b455a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JLRJNH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMW7Sk2mjgD2Rm6A3CDJooh%2Fmwet4AmoO2Cf1Uq1KquAiBO716aC8KS2cA131eE36HFXvwFoLDOJVNXTl%2BcZrd4Lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMut75KsCCR%2Fvcf6PMKtwDfx%2FLO8W%2F9PSWEXNkpCE13rX4ZN5zrL%2BENnqF1cp%2BAAAXiNHJhDNSt1lX8OXNxM2UbqMjHsdVem7R%2FUQLgEWMMXFB6LmC6iU0%2FnEhnVhTvzX%2B7TLSYLSuef92D%2BnrS9YDFFON069mskKCUuiahfgoCKkRTrCWQXXLXJ0BAHJukZZ%2FZdmbQqYObR31OU2SS41yS%2BpLMEKguK7l2hzBRbcY2OQe0IoL7ij1fakCKvRin2f2fCD1WRuW3NmQBgIF3okHUPCB89BOe%2FbEF9yQQ0WlZu0JBZW1Al4Ampd%2FAigAkcrE1R%2FIVGadzZcltaX0mBTVHs%2BKPT45IjYL8ybwx00N1iPhcGSuLhDvsDxGNaJYErlk6EFJUQBLY%2B2ZP3Ew%2F2T5Z1bsy1v8lnuUTl2kxOW8vCMK%2FgD8Nyz0phc5b3YuEwcHCUYC9aUbAoWZoySJ8BcV8ey1xB4g6sR0wdrrV%2FHRU5XP2EcDesxSvoBiFd7ih67xuCxFQYwTPaNWhuWPw7PDY3f571AXuP2KxQykgZ7pYLomguSvuNrJPilxx7C1BL1T8zQ%2FYA00W6WI9AwCmnS8OIielp7yFBux6mWz4KH6cjiTZoYvJ8QHWseuIF9mp9Yr8SmNeTW2frTudCAw8oT6vwY6pgGakBPMSlcNZoRpFI751KybO3v57I%2B5B%2FiWIqIUHeavWTB2AqbFS7nESfgDtB5GOtm7j76kqSvu2y1WqB%2BmYUGzzrC8DCL4kGkv1nml7QMpOD18NeSm1mR3G9v4CtXEjI0LOPgkhI6KTFpPsKsu30LGJaLcxEWeld5loRhxWIH8tpC%2BdVVFNkkGZOeZ6%2FxQ07mh7GWv2CaMc99Vi578tyKQGTQB4hmf&X-Amz-Signature=b324489517daaedb252b05a74416061829e87f2af6c6a92ace72f9f86264fa52&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JLRJNH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMW7Sk2mjgD2Rm6A3CDJooh%2Fmwet4AmoO2Cf1Uq1KquAiBO716aC8KS2cA131eE36HFXvwFoLDOJVNXTl%2BcZrd4Lyr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMut75KsCCR%2Fvcf6PMKtwDfx%2FLO8W%2F9PSWEXNkpCE13rX4ZN5zrL%2BENnqF1cp%2BAAAXiNHJhDNSt1lX8OXNxM2UbqMjHsdVem7R%2FUQLgEWMMXFB6LmC6iU0%2FnEhnVhTvzX%2B7TLSYLSuef92D%2BnrS9YDFFON069mskKCUuiahfgoCKkRTrCWQXXLXJ0BAHJukZZ%2FZdmbQqYObR31OU2SS41yS%2BpLMEKguK7l2hzBRbcY2OQe0IoL7ij1fakCKvRin2f2fCD1WRuW3NmQBgIF3okHUPCB89BOe%2FbEF9yQQ0WlZu0JBZW1Al4Ampd%2FAigAkcrE1R%2FIVGadzZcltaX0mBTVHs%2BKPT45IjYL8ybwx00N1iPhcGSuLhDvsDxGNaJYErlk6EFJUQBLY%2B2ZP3Ew%2F2T5Z1bsy1v8lnuUTl2kxOW8vCMK%2FgD8Nyz0phc5b3YuEwcHCUYC9aUbAoWZoySJ8BcV8ey1xB4g6sR0wdrrV%2FHRU5XP2EcDesxSvoBiFd7ih67xuCxFQYwTPaNWhuWPw7PDY3f571AXuP2KxQykgZ7pYLomguSvuNrJPilxx7C1BL1T8zQ%2FYA00W6WI9AwCmnS8OIielp7yFBux6mWz4KH6cjiTZoYvJ8QHWseuIF9mp9Yr8SmNeTW2frTudCAw8oT6vwY6pgGakBPMSlcNZoRpFI751KybO3v57I%2B5B%2FiWIqIUHeavWTB2AqbFS7nESfgDtB5GOtm7j76kqSvu2y1WqB%2BmYUGzzrC8DCL4kGkv1nml7QMpOD18NeSm1mR3G9v4CtXEjI0LOPgkhI6KTFpPsKsu30LGJaLcxEWeld5loRhxWIH8tpC%2BdVVFNkkGZOeZ6%2FxQ07mh7GWv2CaMc99Vi578tyKQGTQB4hmf&X-Amz-Signature=f123ec12b5327efc039645790ff06caa6beba9e1c7a8e830575c8d0f39cd89ca&X-Amz-SignedHeaders=host&x-id=GetObject)
