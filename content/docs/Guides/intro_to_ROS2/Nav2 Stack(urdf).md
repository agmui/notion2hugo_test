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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PXBFSL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf%2FSjTOXylWBXXfX7i0eylPBiuWM8DJ7wVEDtens5QIwIgYxYukhCCsfcEsNY0dBOKOG7PrKIq6EFC7KqjsgKqursq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDF9dmWiqy6Gs5KYkoCrcA9FVSM7vTJhQeyc9SLHjotugeabVB%2Br9HfrGcXMEMV2jCHeMuMn4pATooCp4cXIDRbY4sG2r9OwcgpnWpNqRFWD1yKPkkg5WSsi%2BSvybpfAW5YEIQRH7ukr7oYrCVmqsR7j8J0hFeDtSNkCwJ4f0Pkvhm23wDeQkqi2U%2FeKv6t%2Bj3tNsibBzf3QVil5irkeanFeOvmm%2BQUfYb8FG4cT0BHqu92GI10nsC4h0YMBhjEPG6muV7v7bDUjULDOPwGgF%2BNoD%2BSohOmOt2MLj2ZDTXoY8fpQxpNXvw1EcueoT19aIgLrCibaPP16Br%2BsTnAahyMDlz6clls3UN0i%2FFkxHt7OqShQ9RHsl4hHDAX3Mg4%2BkAFjck7R4PPlqeI4ezIMSzmbe1sbguS0kciFWD5HQLiMP%2FHMtvAhXY5yhjSm3G9hCAoontOqSuLbpJm7YGjlSX21dIXdbFYOb3uGnK1NENRa9puDttI%2FUIOqBbsSqPO%2Fkz5SW%2FyxyUEp9%2FvxwA53vku4X6BTdAspMassOeSjXhhHDbh2EbhTICdaKE1DiBRUJ9toLQnsLkv1csvOAEo4dEWfcbWyZTgOxt6HWm7KauJ%2FMODZL3Q9LhxSOqPm6v3UgiR2u9%2Fqqa%2F1CIxwaMPC9lL8GOqUB7N0DZVhb9Ep%2FNcb7P2qKBiZIVKCCRM8FeG9O%2FoNWaneMhfRZiozohE0jngtYx9s0bDlc%2FMlMXUxNMJNLweRDUAsHgTElu4vShfYlp2MrAq%2FVkPg1ZZ0lSelaGJxCA9G%2Bwxj2V3Rjsxcusbqm33VXtpLBa9grT7Rwq7wV3BQEID2rzKHJtBqKkLHBuqPJFRyy8Cys4IlrjRfjdrM048YTVoFdbvEt&X-Amz-Signature=0a5cfd1a1eb73f70e1eb72c7f55d8d9f874c6dfb4cc23909ebc531573a20019d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PXBFSL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf%2FSjTOXylWBXXfX7i0eylPBiuWM8DJ7wVEDtens5QIwIgYxYukhCCsfcEsNY0dBOKOG7PrKIq6EFC7KqjsgKqursq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDF9dmWiqy6Gs5KYkoCrcA9FVSM7vTJhQeyc9SLHjotugeabVB%2Br9HfrGcXMEMV2jCHeMuMn4pATooCp4cXIDRbY4sG2r9OwcgpnWpNqRFWD1yKPkkg5WSsi%2BSvybpfAW5YEIQRH7ukr7oYrCVmqsR7j8J0hFeDtSNkCwJ4f0Pkvhm23wDeQkqi2U%2FeKv6t%2Bj3tNsibBzf3QVil5irkeanFeOvmm%2BQUfYb8FG4cT0BHqu92GI10nsC4h0YMBhjEPG6muV7v7bDUjULDOPwGgF%2BNoD%2BSohOmOt2MLj2ZDTXoY8fpQxpNXvw1EcueoT19aIgLrCibaPP16Br%2BsTnAahyMDlz6clls3UN0i%2FFkxHt7OqShQ9RHsl4hHDAX3Mg4%2BkAFjck7R4PPlqeI4ezIMSzmbe1sbguS0kciFWD5HQLiMP%2FHMtvAhXY5yhjSm3G9hCAoontOqSuLbpJm7YGjlSX21dIXdbFYOb3uGnK1NENRa9puDttI%2FUIOqBbsSqPO%2Fkz5SW%2FyxyUEp9%2FvxwA53vku4X6BTdAspMassOeSjXhhHDbh2EbhTICdaKE1DiBRUJ9toLQnsLkv1csvOAEo4dEWfcbWyZTgOxt6HWm7KauJ%2FMODZL3Q9LhxSOqPm6v3UgiR2u9%2Fqqa%2F1CIxwaMPC9lL8GOqUB7N0DZVhb9Ep%2FNcb7P2qKBiZIVKCCRM8FeG9O%2FoNWaneMhfRZiozohE0jngtYx9s0bDlc%2FMlMXUxNMJNLweRDUAsHgTElu4vShfYlp2MrAq%2FVkPg1ZZ0lSelaGJxCA9G%2Bwxj2V3Rjsxcusbqm33VXtpLBa9grT7Rwq7wV3BQEID2rzKHJtBqKkLHBuqPJFRyy8Cys4IlrjRfjdrM048YTVoFdbvEt&X-Amz-Signature=ec3ab0ba6f99ab82326e5d941346c34b1319b97faca2a738e01c6e371311f7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PXBFSL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf%2FSjTOXylWBXXfX7i0eylPBiuWM8DJ7wVEDtens5QIwIgYxYukhCCsfcEsNY0dBOKOG7PrKIq6EFC7KqjsgKqursq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDF9dmWiqy6Gs5KYkoCrcA9FVSM7vTJhQeyc9SLHjotugeabVB%2Br9HfrGcXMEMV2jCHeMuMn4pATooCp4cXIDRbY4sG2r9OwcgpnWpNqRFWD1yKPkkg5WSsi%2BSvybpfAW5YEIQRH7ukr7oYrCVmqsR7j8J0hFeDtSNkCwJ4f0Pkvhm23wDeQkqi2U%2FeKv6t%2Bj3tNsibBzf3QVil5irkeanFeOvmm%2BQUfYb8FG4cT0BHqu92GI10nsC4h0YMBhjEPG6muV7v7bDUjULDOPwGgF%2BNoD%2BSohOmOt2MLj2ZDTXoY8fpQxpNXvw1EcueoT19aIgLrCibaPP16Br%2BsTnAahyMDlz6clls3UN0i%2FFkxHt7OqShQ9RHsl4hHDAX3Mg4%2BkAFjck7R4PPlqeI4ezIMSzmbe1sbguS0kciFWD5HQLiMP%2FHMtvAhXY5yhjSm3G9hCAoontOqSuLbpJm7YGjlSX21dIXdbFYOb3uGnK1NENRa9puDttI%2FUIOqBbsSqPO%2Fkz5SW%2FyxyUEp9%2FvxwA53vku4X6BTdAspMassOeSjXhhHDbh2EbhTICdaKE1DiBRUJ9toLQnsLkv1csvOAEo4dEWfcbWyZTgOxt6HWm7KauJ%2FMODZL3Q9LhxSOqPm6v3UgiR2u9%2Fqqa%2F1CIxwaMPC9lL8GOqUB7N0DZVhb9Ep%2FNcb7P2qKBiZIVKCCRM8FeG9O%2FoNWaneMhfRZiozohE0jngtYx9s0bDlc%2FMlMXUxNMJNLweRDUAsHgTElu4vShfYlp2MrAq%2FVkPg1ZZ0lSelaGJxCA9G%2Bwxj2V3Rjsxcusbqm33VXtpLBa9grT7Rwq7wV3BQEID2rzKHJtBqKkLHBuqPJFRyy8Cys4IlrjRfjdrM048YTVoFdbvEt&X-Amz-Signature=88d98416daf63fc02d6311e732f26f17e7c57bc102d717251a84505933cae3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PXBFSL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf%2FSjTOXylWBXXfX7i0eylPBiuWM8DJ7wVEDtens5QIwIgYxYukhCCsfcEsNY0dBOKOG7PrKIq6EFC7KqjsgKqursq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDF9dmWiqy6Gs5KYkoCrcA9FVSM7vTJhQeyc9SLHjotugeabVB%2Br9HfrGcXMEMV2jCHeMuMn4pATooCp4cXIDRbY4sG2r9OwcgpnWpNqRFWD1yKPkkg5WSsi%2BSvybpfAW5YEIQRH7ukr7oYrCVmqsR7j8J0hFeDtSNkCwJ4f0Pkvhm23wDeQkqi2U%2FeKv6t%2Bj3tNsibBzf3QVil5irkeanFeOvmm%2BQUfYb8FG4cT0BHqu92GI10nsC4h0YMBhjEPG6muV7v7bDUjULDOPwGgF%2BNoD%2BSohOmOt2MLj2ZDTXoY8fpQxpNXvw1EcueoT19aIgLrCibaPP16Br%2BsTnAahyMDlz6clls3UN0i%2FFkxHt7OqShQ9RHsl4hHDAX3Mg4%2BkAFjck7R4PPlqeI4ezIMSzmbe1sbguS0kciFWD5HQLiMP%2FHMtvAhXY5yhjSm3G9hCAoontOqSuLbpJm7YGjlSX21dIXdbFYOb3uGnK1NENRa9puDttI%2FUIOqBbsSqPO%2Fkz5SW%2FyxyUEp9%2FvxwA53vku4X6BTdAspMassOeSjXhhHDbh2EbhTICdaKE1DiBRUJ9toLQnsLkv1csvOAEo4dEWfcbWyZTgOxt6HWm7KauJ%2FMODZL3Q9LhxSOqPm6v3UgiR2u9%2Fqqa%2F1CIxwaMPC9lL8GOqUB7N0DZVhb9Ep%2FNcb7P2qKBiZIVKCCRM8FeG9O%2FoNWaneMhfRZiozohE0jngtYx9s0bDlc%2FMlMXUxNMJNLweRDUAsHgTElu4vShfYlp2MrAq%2FVkPg1ZZ0lSelaGJxCA9G%2Bwxj2V3Rjsxcusbqm33VXtpLBa9grT7Rwq7wV3BQEID2rzKHJtBqKkLHBuqPJFRyy8Cys4IlrjRfjdrM048YTVoFdbvEt&X-Amz-Signature=51e03468ef93274110e0df2b7b2109ecac05ec4f8e46716a7010f1e142571d23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PXBFSL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf%2FSjTOXylWBXXfX7i0eylPBiuWM8DJ7wVEDtens5QIwIgYxYukhCCsfcEsNY0dBOKOG7PrKIq6EFC7KqjsgKqursq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDF9dmWiqy6Gs5KYkoCrcA9FVSM7vTJhQeyc9SLHjotugeabVB%2Br9HfrGcXMEMV2jCHeMuMn4pATooCp4cXIDRbY4sG2r9OwcgpnWpNqRFWD1yKPkkg5WSsi%2BSvybpfAW5YEIQRH7ukr7oYrCVmqsR7j8J0hFeDtSNkCwJ4f0Pkvhm23wDeQkqi2U%2FeKv6t%2Bj3tNsibBzf3QVil5irkeanFeOvmm%2BQUfYb8FG4cT0BHqu92GI10nsC4h0YMBhjEPG6muV7v7bDUjULDOPwGgF%2BNoD%2BSohOmOt2MLj2ZDTXoY8fpQxpNXvw1EcueoT19aIgLrCibaPP16Br%2BsTnAahyMDlz6clls3UN0i%2FFkxHt7OqShQ9RHsl4hHDAX3Mg4%2BkAFjck7R4PPlqeI4ezIMSzmbe1sbguS0kciFWD5HQLiMP%2FHMtvAhXY5yhjSm3G9hCAoontOqSuLbpJm7YGjlSX21dIXdbFYOb3uGnK1NENRa9puDttI%2FUIOqBbsSqPO%2Fkz5SW%2FyxyUEp9%2FvxwA53vku4X6BTdAspMassOeSjXhhHDbh2EbhTICdaKE1DiBRUJ9toLQnsLkv1csvOAEo4dEWfcbWyZTgOxt6HWm7KauJ%2FMODZL3Q9LhxSOqPm6v3UgiR2u9%2Fqqa%2F1CIxwaMPC9lL8GOqUB7N0DZVhb9Ep%2FNcb7P2qKBiZIVKCCRM8FeG9O%2FoNWaneMhfRZiozohE0jngtYx9s0bDlc%2FMlMXUxNMJNLweRDUAsHgTElu4vShfYlp2MrAq%2FVkPg1ZZ0lSelaGJxCA9G%2Bwxj2V3Rjsxcusbqm33VXtpLBa9grT7Rwq7wV3BQEID2rzKHJtBqKkLHBuqPJFRyy8Cys4IlrjRfjdrM048YTVoFdbvEt&X-Amz-Signature=52f55c8b16d8d77f1c2df0f58a3142fa1b4bbec0c469118bc47a5406ba00a96b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5PXBFSL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf%2FSjTOXylWBXXfX7i0eylPBiuWM8DJ7wVEDtens5QIwIgYxYukhCCsfcEsNY0dBOKOG7PrKIq6EFC7KqjsgKqursq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDF9dmWiqy6Gs5KYkoCrcA9FVSM7vTJhQeyc9SLHjotugeabVB%2Br9HfrGcXMEMV2jCHeMuMn4pATooCp4cXIDRbY4sG2r9OwcgpnWpNqRFWD1yKPkkg5WSsi%2BSvybpfAW5YEIQRH7ukr7oYrCVmqsR7j8J0hFeDtSNkCwJ4f0Pkvhm23wDeQkqi2U%2FeKv6t%2Bj3tNsibBzf3QVil5irkeanFeOvmm%2BQUfYb8FG4cT0BHqu92GI10nsC4h0YMBhjEPG6muV7v7bDUjULDOPwGgF%2BNoD%2BSohOmOt2MLj2ZDTXoY8fpQxpNXvw1EcueoT19aIgLrCibaPP16Br%2BsTnAahyMDlz6clls3UN0i%2FFkxHt7OqShQ9RHsl4hHDAX3Mg4%2BkAFjck7R4PPlqeI4ezIMSzmbe1sbguS0kciFWD5HQLiMP%2FHMtvAhXY5yhjSm3G9hCAoontOqSuLbpJm7YGjlSX21dIXdbFYOb3uGnK1NENRa9puDttI%2FUIOqBbsSqPO%2Fkz5SW%2FyxyUEp9%2FvxwA53vku4X6BTdAspMassOeSjXhhHDbh2EbhTICdaKE1DiBRUJ9toLQnsLkv1csvOAEo4dEWfcbWyZTgOxt6HWm7KauJ%2FMODZL3Q9LhxSOqPm6v3UgiR2u9%2Fqqa%2F1CIxwaMPC9lL8GOqUB7N0DZVhb9Ep%2FNcb7P2qKBiZIVKCCRM8FeG9O%2FoNWaneMhfRZiozohE0jngtYx9s0bDlc%2FMlMXUxNMJNLweRDUAsHgTElu4vShfYlp2MrAq%2FVkPg1ZZ0lSelaGJxCA9G%2Bwxj2V3Rjsxcusbqm33VXtpLBa9grT7Rwq7wV3BQEID2rzKHJtBqKkLHBuqPJFRyy8Cys4IlrjRfjdrM048YTVoFdbvEt&X-Amz-Signature=3e73a56017ab6e7adecea181e1ebdefc9f0b6d025f5868a2f060073bdacfa8a4&X-Amz-SignedHeaders=host&x-id=GetObject)
