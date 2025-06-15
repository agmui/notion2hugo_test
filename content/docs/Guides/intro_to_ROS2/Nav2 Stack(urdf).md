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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHHGG4B%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD75OyTjCdDGSb5zIcs0xrVfbmpmffuY1Xn6sYBrUckEwIgHabIu2WWpFJsLMje9Gd1RIWG7o0v245vfgNYwAN5zxQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEOjYADrKF8pQ8wlVCrcAz8s19j9k39VmBzbXaTwWN39Nk04NVry2ArKRA4FXfuv2TlpiwxguzUkIaVnL%2Bty03Uds6m%2BLxK438D%2BDVapLaPzEsWrkj9JQhm%2FFyXCr6m%2BQH5z3MF81IRLyAmNqLpaLSXLes1v3jYMX7Xo4ZM0XaOXqp7HPJ2rG2UzjTy3SJC4hOJnK7U3alLHXjup4mLESuJ6OjBG1WOsKEU8iOLo9P2HfnuHaqqmyYjmz6wc2vExSQ14VUV1IspnAkAaJ7hP3ofRY88uOrPKVH%2B1D3Yd%2BfEApD5Weu8T68G%2FFdoXF7xGuI3%2FNhIQjPsRm5olcDjBtOoB9JqOjFCcrh%2BAkaPMEbGqCFbnyvIbetIz3B61KwmtSe2NgOf8AaAazSbm1MKKq7fV4WjKV%2B1PB5QC08hBX6%2BSk11fSPzYMs3Rf5g8zX7lO3%2FZCGjE%2FB0a38FPVB9Grq20omi9hWPAIGeFZChGnz3x4sZP1TRzyJViSw1RH11YxunkKZtJZr%2BWXQniSdtypin5ySV3hHprpdDh9UZrpX8bHwzvABBGOGnTH9udC%2BtPoZ9W6%2FyFWrBOG8XuMxFpTJO9b3DBq%2BBbnhSwK7GXm8dlob9IJq2Nmif7K6gKBNAE6LJthcjL5zwAdPdcMJSGu8IGOqUBBMl%2B24GQN3xUSO1YY8le7Wu%2FAfjmjcGqM41NICmqs4T3aCNdx1fPXrI5BvkAyCp1zFKH2EIqBaxxbIzPEWpEwjxDVwGsBvfh%2FyiyCtVU4G34T56CJxmqY64hOMLLTjL77j2KKNvk1pSLardqzq1eHgaVzy4rSqFBwo9PE3n%2BxbIDfKRC%2FKmkBVs7QdB58dTh5%2BMyDgxORzwtEld85v8FSMrkOy9Y&X-Amz-Signature=b132db58e428de463aa740a3d59d685ba070625af023ccaa376bf4e1ce27998a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHHGG4B%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD75OyTjCdDGSb5zIcs0xrVfbmpmffuY1Xn6sYBrUckEwIgHabIu2WWpFJsLMje9Gd1RIWG7o0v245vfgNYwAN5zxQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEOjYADrKF8pQ8wlVCrcAz8s19j9k39VmBzbXaTwWN39Nk04NVry2ArKRA4FXfuv2TlpiwxguzUkIaVnL%2Bty03Uds6m%2BLxK438D%2BDVapLaPzEsWrkj9JQhm%2FFyXCr6m%2BQH5z3MF81IRLyAmNqLpaLSXLes1v3jYMX7Xo4ZM0XaOXqp7HPJ2rG2UzjTy3SJC4hOJnK7U3alLHXjup4mLESuJ6OjBG1WOsKEU8iOLo9P2HfnuHaqqmyYjmz6wc2vExSQ14VUV1IspnAkAaJ7hP3ofRY88uOrPKVH%2B1D3Yd%2BfEApD5Weu8T68G%2FFdoXF7xGuI3%2FNhIQjPsRm5olcDjBtOoB9JqOjFCcrh%2BAkaPMEbGqCFbnyvIbetIz3B61KwmtSe2NgOf8AaAazSbm1MKKq7fV4WjKV%2B1PB5QC08hBX6%2BSk11fSPzYMs3Rf5g8zX7lO3%2FZCGjE%2FB0a38FPVB9Grq20omi9hWPAIGeFZChGnz3x4sZP1TRzyJViSw1RH11YxunkKZtJZr%2BWXQniSdtypin5ySV3hHprpdDh9UZrpX8bHwzvABBGOGnTH9udC%2BtPoZ9W6%2FyFWrBOG8XuMxFpTJO9b3DBq%2BBbnhSwK7GXm8dlob9IJq2Nmif7K6gKBNAE6LJthcjL5zwAdPdcMJSGu8IGOqUBBMl%2B24GQN3xUSO1YY8le7Wu%2FAfjmjcGqM41NICmqs4T3aCNdx1fPXrI5BvkAyCp1zFKH2EIqBaxxbIzPEWpEwjxDVwGsBvfh%2FyiyCtVU4G34T56CJxmqY64hOMLLTjL77j2KKNvk1pSLardqzq1eHgaVzy4rSqFBwo9PE3n%2BxbIDfKRC%2FKmkBVs7QdB58dTh5%2BMyDgxORzwtEld85v8FSMrkOy9Y&X-Amz-Signature=510748052edbd64d9aa9e21e3cdba01e96c5fa8a6d7fc7ab032f0d23a3dcedbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHHGG4B%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD75OyTjCdDGSb5zIcs0xrVfbmpmffuY1Xn6sYBrUckEwIgHabIu2WWpFJsLMje9Gd1RIWG7o0v245vfgNYwAN5zxQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEOjYADrKF8pQ8wlVCrcAz8s19j9k39VmBzbXaTwWN39Nk04NVry2ArKRA4FXfuv2TlpiwxguzUkIaVnL%2Bty03Uds6m%2BLxK438D%2BDVapLaPzEsWrkj9JQhm%2FFyXCr6m%2BQH5z3MF81IRLyAmNqLpaLSXLes1v3jYMX7Xo4ZM0XaOXqp7HPJ2rG2UzjTy3SJC4hOJnK7U3alLHXjup4mLESuJ6OjBG1WOsKEU8iOLo9P2HfnuHaqqmyYjmz6wc2vExSQ14VUV1IspnAkAaJ7hP3ofRY88uOrPKVH%2B1D3Yd%2BfEApD5Weu8T68G%2FFdoXF7xGuI3%2FNhIQjPsRm5olcDjBtOoB9JqOjFCcrh%2BAkaPMEbGqCFbnyvIbetIz3B61KwmtSe2NgOf8AaAazSbm1MKKq7fV4WjKV%2B1PB5QC08hBX6%2BSk11fSPzYMs3Rf5g8zX7lO3%2FZCGjE%2FB0a38FPVB9Grq20omi9hWPAIGeFZChGnz3x4sZP1TRzyJViSw1RH11YxunkKZtJZr%2BWXQniSdtypin5ySV3hHprpdDh9UZrpX8bHwzvABBGOGnTH9udC%2BtPoZ9W6%2FyFWrBOG8XuMxFpTJO9b3DBq%2BBbnhSwK7GXm8dlob9IJq2Nmif7K6gKBNAE6LJthcjL5zwAdPdcMJSGu8IGOqUBBMl%2B24GQN3xUSO1YY8le7Wu%2FAfjmjcGqM41NICmqs4T3aCNdx1fPXrI5BvkAyCp1zFKH2EIqBaxxbIzPEWpEwjxDVwGsBvfh%2FyiyCtVU4G34T56CJxmqY64hOMLLTjL77j2KKNvk1pSLardqzq1eHgaVzy4rSqFBwo9PE3n%2BxbIDfKRC%2FKmkBVs7QdB58dTh5%2BMyDgxORzwtEld85v8FSMrkOy9Y&X-Amz-Signature=678672fd8c8f38d0fe4fa23c186d2add586baccd184776937d7d2cd1f9afeca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHHGG4B%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD75OyTjCdDGSb5zIcs0xrVfbmpmffuY1Xn6sYBrUckEwIgHabIu2WWpFJsLMje9Gd1RIWG7o0v245vfgNYwAN5zxQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEOjYADrKF8pQ8wlVCrcAz8s19j9k39VmBzbXaTwWN39Nk04NVry2ArKRA4FXfuv2TlpiwxguzUkIaVnL%2Bty03Uds6m%2BLxK438D%2BDVapLaPzEsWrkj9JQhm%2FFyXCr6m%2BQH5z3MF81IRLyAmNqLpaLSXLes1v3jYMX7Xo4ZM0XaOXqp7HPJ2rG2UzjTy3SJC4hOJnK7U3alLHXjup4mLESuJ6OjBG1WOsKEU8iOLo9P2HfnuHaqqmyYjmz6wc2vExSQ14VUV1IspnAkAaJ7hP3ofRY88uOrPKVH%2B1D3Yd%2BfEApD5Weu8T68G%2FFdoXF7xGuI3%2FNhIQjPsRm5olcDjBtOoB9JqOjFCcrh%2BAkaPMEbGqCFbnyvIbetIz3B61KwmtSe2NgOf8AaAazSbm1MKKq7fV4WjKV%2B1PB5QC08hBX6%2BSk11fSPzYMs3Rf5g8zX7lO3%2FZCGjE%2FB0a38FPVB9Grq20omi9hWPAIGeFZChGnz3x4sZP1TRzyJViSw1RH11YxunkKZtJZr%2BWXQniSdtypin5ySV3hHprpdDh9UZrpX8bHwzvABBGOGnTH9udC%2BtPoZ9W6%2FyFWrBOG8XuMxFpTJO9b3DBq%2BBbnhSwK7GXm8dlob9IJq2Nmif7K6gKBNAE6LJthcjL5zwAdPdcMJSGu8IGOqUBBMl%2B24GQN3xUSO1YY8le7Wu%2FAfjmjcGqM41NICmqs4T3aCNdx1fPXrI5BvkAyCp1zFKH2EIqBaxxbIzPEWpEwjxDVwGsBvfh%2FyiyCtVU4G34T56CJxmqY64hOMLLTjL77j2KKNvk1pSLardqzq1eHgaVzy4rSqFBwo9PE3n%2BxbIDfKRC%2FKmkBVs7QdB58dTh5%2BMyDgxORzwtEld85v8FSMrkOy9Y&X-Amz-Signature=b37e2bc4fc26a0e5ce19819385bc89e5c75babd3f6499d1e03f04c0db9a43e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHHGG4B%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD75OyTjCdDGSb5zIcs0xrVfbmpmffuY1Xn6sYBrUckEwIgHabIu2WWpFJsLMje9Gd1RIWG7o0v245vfgNYwAN5zxQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEOjYADrKF8pQ8wlVCrcAz8s19j9k39VmBzbXaTwWN39Nk04NVry2ArKRA4FXfuv2TlpiwxguzUkIaVnL%2Bty03Uds6m%2BLxK438D%2BDVapLaPzEsWrkj9JQhm%2FFyXCr6m%2BQH5z3MF81IRLyAmNqLpaLSXLes1v3jYMX7Xo4ZM0XaOXqp7HPJ2rG2UzjTy3SJC4hOJnK7U3alLHXjup4mLESuJ6OjBG1WOsKEU8iOLo9P2HfnuHaqqmyYjmz6wc2vExSQ14VUV1IspnAkAaJ7hP3ofRY88uOrPKVH%2B1D3Yd%2BfEApD5Weu8T68G%2FFdoXF7xGuI3%2FNhIQjPsRm5olcDjBtOoB9JqOjFCcrh%2BAkaPMEbGqCFbnyvIbetIz3B61KwmtSe2NgOf8AaAazSbm1MKKq7fV4WjKV%2B1PB5QC08hBX6%2BSk11fSPzYMs3Rf5g8zX7lO3%2FZCGjE%2FB0a38FPVB9Grq20omi9hWPAIGeFZChGnz3x4sZP1TRzyJViSw1RH11YxunkKZtJZr%2BWXQniSdtypin5ySV3hHprpdDh9UZrpX8bHwzvABBGOGnTH9udC%2BtPoZ9W6%2FyFWrBOG8XuMxFpTJO9b3DBq%2BBbnhSwK7GXm8dlob9IJq2Nmif7K6gKBNAE6LJthcjL5zwAdPdcMJSGu8IGOqUBBMl%2B24GQN3xUSO1YY8le7Wu%2FAfjmjcGqM41NICmqs4T3aCNdx1fPXrI5BvkAyCp1zFKH2EIqBaxxbIzPEWpEwjxDVwGsBvfh%2FyiyCtVU4G34T56CJxmqY64hOMLLTjL77j2KKNvk1pSLardqzq1eHgaVzy4rSqFBwo9PE3n%2BxbIDfKRC%2FKmkBVs7QdB58dTh5%2BMyDgxORzwtEld85v8FSMrkOy9Y&X-Amz-Signature=c062bf9457e2341263f7afb59d00254b7fb2559d60f1582d9f4ba177ce0096ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHHGG4B%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQD75OyTjCdDGSb5zIcs0xrVfbmpmffuY1Xn6sYBrUckEwIgHabIu2WWpFJsLMje9Gd1RIWG7o0v245vfgNYwAN5zxQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEOjYADrKF8pQ8wlVCrcAz8s19j9k39VmBzbXaTwWN39Nk04NVry2ArKRA4FXfuv2TlpiwxguzUkIaVnL%2Bty03Uds6m%2BLxK438D%2BDVapLaPzEsWrkj9JQhm%2FFyXCr6m%2BQH5z3MF81IRLyAmNqLpaLSXLes1v3jYMX7Xo4ZM0XaOXqp7HPJ2rG2UzjTy3SJC4hOJnK7U3alLHXjup4mLESuJ6OjBG1WOsKEU8iOLo9P2HfnuHaqqmyYjmz6wc2vExSQ14VUV1IspnAkAaJ7hP3ofRY88uOrPKVH%2B1D3Yd%2BfEApD5Weu8T68G%2FFdoXF7xGuI3%2FNhIQjPsRm5olcDjBtOoB9JqOjFCcrh%2BAkaPMEbGqCFbnyvIbetIz3B61KwmtSe2NgOf8AaAazSbm1MKKq7fV4WjKV%2B1PB5QC08hBX6%2BSk11fSPzYMs3Rf5g8zX7lO3%2FZCGjE%2FB0a38FPVB9Grq20omi9hWPAIGeFZChGnz3x4sZP1TRzyJViSw1RH11YxunkKZtJZr%2BWXQniSdtypin5ySV3hHprpdDh9UZrpX8bHwzvABBGOGnTH9udC%2BtPoZ9W6%2FyFWrBOG8XuMxFpTJO9b3DBq%2BBbnhSwK7GXm8dlob9IJq2Nmif7K6gKBNAE6LJthcjL5zwAdPdcMJSGu8IGOqUBBMl%2B24GQN3xUSO1YY8le7Wu%2FAfjmjcGqM41NICmqs4T3aCNdx1fPXrI5BvkAyCp1zFKH2EIqBaxxbIzPEWpEwjxDVwGsBvfh%2FyiyCtVU4G34T56CJxmqY64hOMLLTjL77j2KKNvk1pSLardqzq1eHgaVzy4rSqFBwo9PE3n%2BxbIDfKRC%2FKmkBVs7QdB58dTh5%2BMyDgxORzwtEld85v8FSMrkOy9Y&X-Amz-Signature=5b75da3a07789a3f2c3b959586da677a8ce100347e4a04c3ae431c80defee55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
