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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UTXJNG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD1%2FQ82DhsFbCTGxA4gFUQ%2BJHOvZ%2Bv2%2B98URdbXm4kcpQIgZEKf8RA5sw6WyysgW5A6Ghu1hQMlpgy53qbiy0zRIycqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFM1z%2FMcOucXGhqDMircA%2FqVCBybzA7WyECETeXfi8T5OGfvul1elCKwn9wim5zMzc0zWTHz6Szj8m2w8QVXIiLjIiZ0bLmlQwqEDP5gcT6Kdb%2B51XBHyAuKKGNpAuhDEQuc8fSYDjIUxAelIfQPs2%2BRTIjPGWrt1vXDHY8CjsR137Ma4YPa6tQ1fJvd48wHLrjLuSbv4LefqkkPoXCWRuFTF6WYOrL%2BF%2BDruunOVXw4Ot5TTETdOJIE%2Fe3yBYse7fZ1FTR56aVb4N0jPo46NQ4C0zT%2Fv4QdXFWyH2oTXogQzygbm2dYMtPbzpbeesjmG2w0MTfVtinTI21uQ0YTBL5FGW0avNJAoGGXbhrdo6b%2BCqsCBFoB%2BW5Ip%2B6rdc%2BO59dC7U7SS4kTBAvI%2FgsP31B9RCaeYHzJaPDzRNMHvrexqx00Caa38bfp7fSyBHP%2BFqE8SZW%2F3b1OEXj49YreQTnHTPz7wdtA0ydUg96j2iIm78MAG9UDp%2FhBQupy1TyhE4GKPSdYGUVQoyn%2F8uAriw2igaIPPvPZMLlCQlPynLqFUA5UVN3MkJA065f6g2YxIfcUaBvObdX%2BOPw%2FufZDcWpEgt0GgjMJNoUNaf0fpl7Y1bxnWYSEZVRrvh%2F02krzEepBsgPgWC3jUTk5MITkqL8GOqUBE7GjlEBk%2FUdr0OYOqlSZuaFUySIZAf2s4n0%2BQGprqN%2BsCVsLo34p%2B%2BgVUELhhAGQdnKSeUNh01I%2FvCwqz6zuHT%2Fd0Iksy8CIQsnIDH7khcTzNUbEhERYhnmTNB%2B8UyPhbW0edIDZEg%2FHEE963kVVww4THGJHLmC1Qs9fsuR%2BF7jfB889kKyAVpCnA0VczrldRTZbHhLEjL%2BuazkgZ0oPpuBeRpnP&X-Amz-Signature=516809f7e7fb4dc59904b25fe525cdd162a210af34e2661f4983b89734dcfdc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UTXJNG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD1%2FQ82DhsFbCTGxA4gFUQ%2BJHOvZ%2Bv2%2B98URdbXm4kcpQIgZEKf8RA5sw6WyysgW5A6Ghu1hQMlpgy53qbiy0zRIycqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFM1z%2FMcOucXGhqDMircA%2FqVCBybzA7WyECETeXfi8T5OGfvul1elCKwn9wim5zMzc0zWTHz6Szj8m2w8QVXIiLjIiZ0bLmlQwqEDP5gcT6Kdb%2B51XBHyAuKKGNpAuhDEQuc8fSYDjIUxAelIfQPs2%2BRTIjPGWrt1vXDHY8CjsR137Ma4YPa6tQ1fJvd48wHLrjLuSbv4LefqkkPoXCWRuFTF6WYOrL%2BF%2BDruunOVXw4Ot5TTETdOJIE%2Fe3yBYse7fZ1FTR56aVb4N0jPo46NQ4C0zT%2Fv4QdXFWyH2oTXogQzygbm2dYMtPbzpbeesjmG2w0MTfVtinTI21uQ0YTBL5FGW0avNJAoGGXbhrdo6b%2BCqsCBFoB%2BW5Ip%2B6rdc%2BO59dC7U7SS4kTBAvI%2FgsP31B9RCaeYHzJaPDzRNMHvrexqx00Caa38bfp7fSyBHP%2BFqE8SZW%2F3b1OEXj49YreQTnHTPz7wdtA0ydUg96j2iIm78MAG9UDp%2FhBQupy1TyhE4GKPSdYGUVQoyn%2F8uAriw2igaIPPvPZMLlCQlPynLqFUA5UVN3MkJA065f6g2YxIfcUaBvObdX%2BOPw%2FufZDcWpEgt0GgjMJNoUNaf0fpl7Y1bxnWYSEZVRrvh%2F02krzEepBsgPgWC3jUTk5MITkqL8GOqUBE7GjlEBk%2FUdr0OYOqlSZuaFUySIZAf2s4n0%2BQGprqN%2BsCVsLo34p%2B%2BgVUELhhAGQdnKSeUNh01I%2FvCwqz6zuHT%2Fd0Iksy8CIQsnIDH7khcTzNUbEhERYhnmTNB%2B8UyPhbW0edIDZEg%2FHEE963kVVww4THGJHLmC1Qs9fsuR%2BF7jfB889kKyAVpCnA0VczrldRTZbHhLEjL%2BuazkgZ0oPpuBeRpnP&X-Amz-Signature=178229f68e171cbf008f566846141493e2b82d0ac356eb3af230c78aa83326ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UTXJNG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD1%2FQ82DhsFbCTGxA4gFUQ%2BJHOvZ%2Bv2%2B98URdbXm4kcpQIgZEKf8RA5sw6WyysgW5A6Ghu1hQMlpgy53qbiy0zRIycqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFM1z%2FMcOucXGhqDMircA%2FqVCBybzA7WyECETeXfi8T5OGfvul1elCKwn9wim5zMzc0zWTHz6Szj8m2w8QVXIiLjIiZ0bLmlQwqEDP5gcT6Kdb%2B51XBHyAuKKGNpAuhDEQuc8fSYDjIUxAelIfQPs2%2BRTIjPGWrt1vXDHY8CjsR137Ma4YPa6tQ1fJvd48wHLrjLuSbv4LefqkkPoXCWRuFTF6WYOrL%2BF%2BDruunOVXw4Ot5TTETdOJIE%2Fe3yBYse7fZ1FTR56aVb4N0jPo46NQ4C0zT%2Fv4QdXFWyH2oTXogQzygbm2dYMtPbzpbeesjmG2w0MTfVtinTI21uQ0YTBL5FGW0avNJAoGGXbhrdo6b%2BCqsCBFoB%2BW5Ip%2B6rdc%2BO59dC7U7SS4kTBAvI%2FgsP31B9RCaeYHzJaPDzRNMHvrexqx00Caa38bfp7fSyBHP%2BFqE8SZW%2F3b1OEXj49YreQTnHTPz7wdtA0ydUg96j2iIm78MAG9UDp%2FhBQupy1TyhE4GKPSdYGUVQoyn%2F8uAriw2igaIPPvPZMLlCQlPynLqFUA5UVN3MkJA065f6g2YxIfcUaBvObdX%2BOPw%2FufZDcWpEgt0GgjMJNoUNaf0fpl7Y1bxnWYSEZVRrvh%2F02krzEepBsgPgWC3jUTk5MITkqL8GOqUBE7GjlEBk%2FUdr0OYOqlSZuaFUySIZAf2s4n0%2BQGprqN%2BsCVsLo34p%2B%2BgVUELhhAGQdnKSeUNh01I%2FvCwqz6zuHT%2Fd0Iksy8CIQsnIDH7khcTzNUbEhERYhnmTNB%2B8UyPhbW0edIDZEg%2FHEE963kVVww4THGJHLmC1Qs9fsuR%2BF7jfB889kKyAVpCnA0VczrldRTZbHhLEjL%2BuazkgZ0oPpuBeRpnP&X-Amz-Signature=ea10a41ba08966757b077b9d1c01801c949ac088fae35d9dbff33b73d324d9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UTXJNG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD1%2FQ82DhsFbCTGxA4gFUQ%2BJHOvZ%2Bv2%2B98URdbXm4kcpQIgZEKf8RA5sw6WyysgW5A6Ghu1hQMlpgy53qbiy0zRIycqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFM1z%2FMcOucXGhqDMircA%2FqVCBybzA7WyECETeXfi8T5OGfvul1elCKwn9wim5zMzc0zWTHz6Szj8m2w8QVXIiLjIiZ0bLmlQwqEDP5gcT6Kdb%2B51XBHyAuKKGNpAuhDEQuc8fSYDjIUxAelIfQPs2%2BRTIjPGWrt1vXDHY8CjsR137Ma4YPa6tQ1fJvd48wHLrjLuSbv4LefqkkPoXCWRuFTF6WYOrL%2BF%2BDruunOVXw4Ot5TTETdOJIE%2Fe3yBYse7fZ1FTR56aVb4N0jPo46NQ4C0zT%2Fv4QdXFWyH2oTXogQzygbm2dYMtPbzpbeesjmG2w0MTfVtinTI21uQ0YTBL5FGW0avNJAoGGXbhrdo6b%2BCqsCBFoB%2BW5Ip%2B6rdc%2BO59dC7U7SS4kTBAvI%2FgsP31B9RCaeYHzJaPDzRNMHvrexqx00Caa38bfp7fSyBHP%2BFqE8SZW%2F3b1OEXj49YreQTnHTPz7wdtA0ydUg96j2iIm78MAG9UDp%2FhBQupy1TyhE4GKPSdYGUVQoyn%2F8uAriw2igaIPPvPZMLlCQlPynLqFUA5UVN3MkJA065f6g2YxIfcUaBvObdX%2BOPw%2FufZDcWpEgt0GgjMJNoUNaf0fpl7Y1bxnWYSEZVRrvh%2F02krzEepBsgPgWC3jUTk5MITkqL8GOqUBE7GjlEBk%2FUdr0OYOqlSZuaFUySIZAf2s4n0%2BQGprqN%2BsCVsLo34p%2B%2BgVUELhhAGQdnKSeUNh01I%2FvCwqz6zuHT%2Fd0Iksy8CIQsnIDH7khcTzNUbEhERYhnmTNB%2B8UyPhbW0edIDZEg%2FHEE963kVVww4THGJHLmC1Qs9fsuR%2BF7jfB889kKyAVpCnA0VczrldRTZbHhLEjL%2BuazkgZ0oPpuBeRpnP&X-Amz-Signature=6b9ef7717895250e650bea0501f07f8ca8a47d613bbf01bdbcdfbbda92167527&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UTXJNG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD1%2FQ82DhsFbCTGxA4gFUQ%2BJHOvZ%2Bv2%2B98URdbXm4kcpQIgZEKf8RA5sw6WyysgW5A6Ghu1hQMlpgy53qbiy0zRIycqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFM1z%2FMcOucXGhqDMircA%2FqVCBybzA7WyECETeXfi8T5OGfvul1elCKwn9wim5zMzc0zWTHz6Szj8m2w8QVXIiLjIiZ0bLmlQwqEDP5gcT6Kdb%2B51XBHyAuKKGNpAuhDEQuc8fSYDjIUxAelIfQPs2%2BRTIjPGWrt1vXDHY8CjsR137Ma4YPa6tQ1fJvd48wHLrjLuSbv4LefqkkPoXCWRuFTF6WYOrL%2BF%2BDruunOVXw4Ot5TTETdOJIE%2Fe3yBYse7fZ1FTR56aVb4N0jPo46NQ4C0zT%2Fv4QdXFWyH2oTXogQzygbm2dYMtPbzpbeesjmG2w0MTfVtinTI21uQ0YTBL5FGW0avNJAoGGXbhrdo6b%2BCqsCBFoB%2BW5Ip%2B6rdc%2BO59dC7U7SS4kTBAvI%2FgsP31B9RCaeYHzJaPDzRNMHvrexqx00Caa38bfp7fSyBHP%2BFqE8SZW%2F3b1OEXj49YreQTnHTPz7wdtA0ydUg96j2iIm78MAG9UDp%2FhBQupy1TyhE4GKPSdYGUVQoyn%2F8uAriw2igaIPPvPZMLlCQlPynLqFUA5UVN3MkJA065f6g2YxIfcUaBvObdX%2BOPw%2FufZDcWpEgt0GgjMJNoUNaf0fpl7Y1bxnWYSEZVRrvh%2F02krzEepBsgPgWC3jUTk5MITkqL8GOqUBE7GjlEBk%2FUdr0OYOqlSZuaFUySIZAf2s4n0%2BQGprqN%2BsCVsLo34p%2B%2BgVUELhhAGQdnKSeUNh01I%2FvCwqz6zuHT%2Fd0Iksy8CIQsnIDH7khcTzNUbEhERYhnmTNB%2B8UyPhbW0edIDZEg%2FHEE963kVVww4THGJHLmC1Qs9fsuR%2BF7jfB889kKyAVpCnA0VczrldRTZbHhLEjL%2BuazkgZ0oPpuBeRpnP&X-Amz-Signature=52738d569a8b3c6da2c3b60f28bf2c5071fb4f6be8b23a3a9d4519c2bca0a404&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3UTXJNG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T070930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQD1%2FQ82DhsFbCTGxA4gFUQ%2BJHOvZ%2Bv2%2B98URdbXm4kcpQIgZEKf8RA5sw6WyysgW5A6Ghu1hQMlpgy53qbiy0zRIycqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFM1z%2FMcOucXGhqDMircA%2FqVCBybzA7WyECETeXfi8T5OGfvul1elCKwn9wim5zMzc0zWTHz6Szj8m2w8QVXIiLjIiZ0bLmlQwqEDP5gcT6Kdb%2B51XBHyAuKKGNpAuhDEQuc8fSYDjIUxAelIfQPs2%2BRTIjPGWrt1vXDHY8CjsR137Ma4YPa6tQ1fJvd48wHLrjLuSbv4LefqkkPoXCWRuFTF6WYOrL%2BF%2BDruunOVXw4Ot5TTETdOJIE%2Fe3yBYse7fZ1FTR56aVb4N0jPo46NQ4C0zT%2Fv4QdXFWyH2oTXogQzygbm2dYMtPbzpbeesjmG2w0MTfVtinTI21uQ0YTBL5FGW0avNJAoGGXbhrdo6b%2BCqsCBFoB%2BW5Ip%2B6rdc%2BO59dC7U7SS4kTBAvI%2FgsP31B9RCaeYHzJaPDzRNMHvrexqx00Caa38bfp7fSyBHP%2BFqE8SZW%2F3b1OEXj49YreQTnHTPz7wdtA0ydUg96j2iIm78MAG9UDp%2FhBQupy1TyhE4GKPSdYGUVQoyn%2F8uAriw2igaIPPvPZMLlCQlPynLqFUA5UVN3MkJA065f6g2YxIfcUaBvObdX%2BOPw%2FufZDcWpEgt0GgjMJNoUNaf0fpl7Y1bxnWYSEZVRrvh%2F02krzEepBsgPgWC3jUTk5MITkqL8GOqUBE7GjlEBk%2FUdr0OYOqlSZuaFUySIZAf2s4n0%2BQGprqN%2BsCVsLo34p%2B%2BgVUELhhAGQdnKSeUNh01I%2FvCwqz6zuHT%2Fd0Iksy8CIQsnIDH7khcTzNUbEhERYhnmTNB%2B8UyPhbW0edIDZEg%2FHEE963kVVww4THGJHLmC1Qs9fsuR%2BF7jfB889kKyAVpCnA0VczrldRTZbHhLEjL%2BuazkgZ0oPpuBeRpnP&X-Amz-Signature=cc1c978afab59adf5b06b21a32ee301272a83617e2b90a7536f4dc96a6568cea&X-Amz-SignedHeaders=host&x-id=GetObject)
