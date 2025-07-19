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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPBXTZ2L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgzxjPlnt6UtxMS49NmdE7qCbobA4xvORqU6uFYGkRUAiEA7Riv%2F5uyyjj%2BJ5Tw%2B7Tz5dvAgAErdinYwg3TIo0lgNQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0oYmM3OmblUQLoeyrcAx%2FXH7079fgW2Vt9NxBhO41oYF8yliGuuSy4aX4bFeFz2f5c%2BQG9y5qa6zbUZg4qVywUibX8eq1WDgmLLClkeRs6LeII8FU1HwpvQLI9gGpeqINP%2BHH4qea0WOhavt6AMaZhqA6TpgqmV4pdefjulQZ0swczUsXLVgvZ5RCUJXywSTbnLs0jvCn7xgPugj5aldeKVE%2FyIoyPqO6wMV3Mx2lGPewepUVlSWbckkC%2F8c1ZDtOzEY01ecTZz49NFt4OyjAMi7KJzDmLrYRG7btynNdSm09BLzdHaImsnCVSzrOAiFYz%2Fj0eB%2FkiEFfXDVAFzYf24FUygcg5OpYp6T0qIOxA4r0HpqSf%2FzLNfO01ZbAxg1SMxE0k%2BIlqunRL41vt2bDjYaiFA39vms6gQSziNvaCVXgF7FJRukV8UpoUpVac9gcYOyTLmCtsJabuZUchGWtzK5k1khUCfItJRF1fJ0MnlpU1zv%2FknJWAKqjYIgYWdwd8dlSDQWc8wqMvNscHvkqzEWVGNStes4qV9ImFqiKlrMbIVrskTdc225RGEXG1RAe3fwJLFa%2F%2BPSzi4dtYWEfEVNKNexi61hJzsQbDLYv1yi6zZ5iU65L0WV9ma8fReoy%2F31P8yS%2F6ily3MNy47sMGOqUB3hUOngvejDOwQliONX3dRfVpiSUtG%2Fb4pVW59VdAXn%2BDfACCyI%2BUiI%2BHgkvTOH1SgZs%2BY63Mej3gOg%2FhOS3K8MlBvEqQBQMx7P0xsyLxY41QNkOOveLwcoPypEhxMVGx0jXlNd2qqBWRlFHBbG4yOWwcLspyoQT2yBcAGx8hy5bNizwFJx4gkpAGIq6JjB09n%2BRLS55YBYXSQ3N8m8ooNHANZJsL&X-Amz-Signature=1cc951eddc73d184de5c4136baa3de140b6212cb9e738792a1b0e2fb94c8accc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPBXTZ2L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgzxjPlnt6UtxMS49NmdE7qCbobA4xvORqU6uFYGkRUAiEA7Riv%2F5uyyjj%2BJ5Tw%2B7Tz5dvAgAErdinYwg3TIo0lgNQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0oYmM3OmblUQLoeyrcAx%2FXH7079fgW2Vt9NxBhO41oYF8yliGuuSy4aX4bFeFz2f5c%2BQG9y5qa6zbUZg4qVywUibX8eq1WDgmLLClkeRs6LeII8FU1HwpvQLI9gGpeqINP%2BHH4qea0WOhavt6AMaZhqA6TpgqmV4pdefjulQZ0swczUsXLVgvZ5RCUJXywSTbnLs0jvCn7xgPugj5aldeKVE%2FyIoyPqO6wMV3Mx2lGPewepUVlSWbckkC%2F8c1ZDtOzEY01ecTZz49NFt4OyjAMi7KJzDmLrYRG7btynNdSm09BLzdHaImsnCVSzrOAiFYz%2Fj0eB%2FkiEFfXDVAFzYf24FUygcg5OpYp6T0qIOxA4r0HpqSf%2FzLNfO01ZbAxg1SMxE0k%2BIlqunRL41vt2bDjYaiFA39vms6gQSziNvaCVXgF7FJRukV8UpoUpVac9gcYOyTLmCtsJabuZUchGWtzK5k1khUCfItJRF1fJ0MnlpU1zv%2FknJWAKqjYIgYWdwd8dlSDQWc8wqMvNscHvkqzEWVGNStes4qV9ImFqiKlrMbIVrskTdc225RGEXG1RAe3fwJLFa%2F%2BPSzi4dtYWEfEVNKNexi61hJzsQbDLYv1yi6zZ5iU65L0WV9ma8fReoy%2F31P8yS%2F6ily3MNy47sMGOqUB3hUOngvejDOwQliONX3dRfVpiSUtG%2Fb4pVW59VdAXn%2BDfACCyI%2BUiI%2BHgkvTOH1SgZs%2BY63Mej3gOg%2FhOS3K8MlBvEqQBQMx7P0xsyLxY41QNkOOveLwcoPypEhxMVGx0jXlNd2qqBWRlFHBbG4yOWwcLspyoQT2yBcAGx8hy5bNizwFJx4gkpAGIq6JjB09n%2BRLS55YBYXSQ3N8m8ooNHANZJsL&X-Amz-Signature=ce5f02f8c9685a79dd8fefd933dc53a252024ae8a9b3e699182089ea43d0e9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPBXTZ2L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgzxjPlnt6UtxMS49NmdE7qCbobA4xvORqU6uFYGkRUAiEA7Riv%2F5uyyjj%2BJ5Tw%2B7Tz5dvAgAErdinYwg3TIo0lgNQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0oYmM3OmblUQLoeyrcAx%2FXH7079fgW2Vt9NxBhO41oYF8yliGuuSy4aX4bFeFz2f5c%2BQG9y5qa6zbUZg4qVywUibX8eq1WDgmLLClkeRs6LeII8FU1HwpvQLI9gGpeqINP%2BHH4qea0WOhavt6AMaZhqA6TpgqmV4pdefjulQZ0swczUsXLVgvZ5RCUJXywSTbnLs0jvCn7xgPugj5aldeKVE%2FyIoyPqO6wMV3Mx2lGPewepUVlSWbckkC%2F8c1ZDtOzEY01ecTZz49NFt4OyjAMi7KJzDmLrYRG7btynNdSm09BLzdHaImsnCVSzrOAiFYz%2Fj0eB%2FkiEFfXDVAFzYf24FUygcg5OpYp6T0qIOxA4r0HpqSf%2FzLNfO01ZbAxg1SMxE0k%2BIlqunRL41vt2bDjYaiFA39vms6gQSziNvaCVXgF7FJRukV8UpoUpVac9gcYOyTLmCtsJabuZUchGWtzK5k1khUCfItJRF1fJ0MnlpU1zv%2FknJWAKqjYIgYWdwd8dlSDQWc8wqMvNscHvkqzEWVGNStes4qV9ImFqiKlrMbIVrskTdc225RGEXG1RAe3fwJLFa%2F%2BPSzi4dtYWEfEVNKNexi61hJzsQbDLYv1yi6zZ5iU65L0WV9ma8fReoy%2F31P8yS%2F6ily3MNy47sMGOqUB3hUOngvejDOwQliONX3dRfVpiSUtG%2Fb4pVW59VdAXn%2BDfACCyI%2BUiI%2BHgkvTOH1SgZs%2BY63Mej3gOg%2FhOS3K8MlBvEqQBQMx7P0xsyLxY41QNkOOveLwcoPypEhxMVGx0jXlNd2qqBWRlFHBbG4yOWwcLspyoQT2yBcAGx8hy5bNizwFJx4gkpAGIq6JjB09n%2BRLS55YBYXSQ3N8m8ooNHANZJsL&X-Amz-Signature=e8ea4827be3ef1eb8de86ecf1a7b93c3f02414640c41b729f5fbcd7cc53e36f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPBXTZ2L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgzxjPlnt6UtxMS49NmdE7qCbobA4xvORqU6uFYGkRUAiEA7Riv%2F5uyyjj%2BJ5Tw%2B7Tz5dvAgAErdinYwg3TIo0lgNQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0oYmM3OmblUQLoeyrcAx%2FXH7079fgW2Vt9NxBhO41oYF8yliGuuSy4aX4bFeFz2f5c%2BQG9y5qa6zbUZg4qVywUibX8eq1WDgmLLClkeRs6LeII8FU1HwpvQLI9gGpeqINP%2BHH4qea0WOhavt6AMaZhqA6TpgqmV4pdefjulQZ0swczUsXLVgvZ5RCUJXywSTbnLs0jvCn7xgPugj5aldeKVE%2FyIoyPqO6wMV3Mx2lGPewepUVlSWbckkC%2F8c1ZDtOzEY01ecTZz49NFt4OyjAMi7KJzDmLrYRG7btynNdSm09BLzdHaImsnCVSzrOAiFYz%2Fj0eB%2FkiEFfXDVAFzYf24FUygcg5OpYp6T0qIOxA4r0HpqSf%2FzLNfO01ZbAxg1SMxE0k%2BIlqunRL41vt2bDjYaiFA39vms6gQSziNvaCVXgF7FJRukV8UpoUpVac9gcYOyTLmCtsJabuZUchGWtzK5k1khUCfItJRF1fJ0MnlpU1zv%2FknJWAKqjYIgYWdwd8dlSDQWc8wqMvNscHvkqzEWVGNStes4qV9ImFqiKlrMbIVrskTdc225RGEXG1RAe3fwJLFa%2F%2BPSzi4dtYWEfEVNKNexi61hJzsQbDLYv1yi6zZ5iU65L0WV9ma8fReoy%2F31P8yS%2F6ily3MNy47sMGOqUB3hUOngvejDOwQliONX3dRfVpiSUtG%2Fb4pVW59VdAXn%2BDfACCyI%2BUiI%2BHgkvTOH1SgZs%2BY63Mej3gOg%2FhOS3K8MlBvEqQBQMx7P0xsyLxY41QNkOOveLwcoPypEhxMVGx0jXlNd2qqBWRlFHBbG4yOWwcLspyoQT2yBcAGx8hy5bNizwFJx4gkpAGIq6JjB09n%2BRLS55YBYXSQ3N8m8ooNHANZJsL&X-Amz-Signature=fac1ccec2f8395e6a69ac1902fdc78bde435bcf862c74bc73f9c6e9203d33058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPBXTZ2L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgzxjPlnt6UtxMS49NmdE7qCbobA4xvORqU6uFYGkRUAiEA7Riv%2F5uyyjj%2BJ5Tw%2B7Tz5dvAgAErdinYwg3TIo0lgNQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0oYmM3OmblUQLoeyrcAx%2FXH7079fgW2Vt9NxBhO41oYF8yliGuuSy4aX4bFeFz2f5c%2BQG9y5qa6zbUZg4qVywUibX8eq1WDgmLLClkeRs6LeII8FU1HwpvQLI9gGpeqINP%2BHH4qea0WOhavt6AMaZhqA6TpgqmV4pdefjulQZ0swczUsXLVgvZ5RCUJXywSTbnLs0jvCn7xgPugj5aldeKVE%2FyIoyPqO6wMV3Mx2lGPewepUVlSWbckkC%2F8c1ZDtOzEY01ecTZz49NFt4OyjAMi7KJzDmLrYRG7btynNdSm09BLzdHaImsnCVSzrOAiFYz%2Fj0eB%2FkiEFfXDVAFzYf24FUygcg5OpYp6T0qIOxA4r0HpqSf%2FzLNfO01ZbAxg1SMxE0k%2BIlqunRL41vt2bDjYaiFA39vms6gQSziNvaCVXgF7FJRukV8UpoUpVac9gcYOyTLmCtsJabuZUchGWtzK5k1khUCfItJRF1fJ0MnlpU1zv%2FknJWAKqjYIgYWdwd8dlSDQWc8wqMvNscHvkqzEWVGNStes4qV9ImFqiKlrMbIVrskTdc225RGEXG1RAe3fwJLFa%2F%2BPSzi4dtYWEfEVNKNexi61hJzsQbDLYv1yi6zZ5iU65L0WV9ma8fReoy%2F31P8yS%2F6ily3MNy47sMGOqUB3hUOngvejDOwQliONX3dRfVpiSUtG%2Fb4pVW59VdAXn%2BDfACCyI%2BUiI%2BHgkvTOH1SgZs%2BY63Mej3gOg%2FhOS3K8MlBvEqQBQMx7P0xsyLxY41QNkOOveLwcoPypEhxMVGx0jXlNd2qqBWRlFHBbG4yOWwcLspyoQT2yBcAGx8hy5bNizwFJx4gkpAGIq6JjB09n%2BRLS55YBYXSQ3N8m8ooNHANZJsL&X-Amz-Signature=172f9b348d9302c58acd30658f8e9b09ec1bb8c8ba1ee356b7d020c804ded835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPBXTZ2L%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T140811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFgzxjPlnt6UtxMS49NmdE7qCbobA4xvORqU6uFYGkRUAiEA7Riv%2F5uyyjj%2BJ5Tw%2B7Tz5dvAgAErdinYwg3TIo0lgNQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0oYmM3OmblUQLoeyrcAx%2FXH7079fgW2Vt9NxBhO41oYF8yliGuuSy4aX4bFeFz2f5c%2BQG9y5qa6zbUZg4qVywUibX8eq1WDgmLLClkeRs6LeII8FU1HwpvQLI9gGpeqINP%2BHH4qea0WOhavt6AMaZhqA6TpgqmV4pdefjulQZ0swczUsXLVgvZ5RCUJXywSTbnLs0jvCn7xgPugj5aldeKVE%2FyIoyPqO6wMV3Mx2lGPewepUVlSWbckkC%2F8c1ZDtOzEY01ecTZz49NFt4OyjAMi7KJzDmLrYRG7btynNdSm09BLzdHaImsnCVSzrOAiFYz%2Fj0eB%2FkiEFfXDVAFzYf24FUygcg5OpYp6T0qIOxA4r0HpqSf%2FzLNfO01ZbAxg1SMxE0k%2BIlqunRL41vt2bDjYaiFA39vms6gQSziNvaCVXgF7FJRukV8UpoUpVac9gcYOyTLmCtsJabuZUchGWtzK5k1khUCfItJRF1fJ0MnlpU1zv%2FknJWAKqjYIgYWdwd8dlSDQWc8wqMvNscHvkqzEWVGNStes4qV9ImFqiKlrMbIVrskTdc225RGEXG1RAe3fwJLFa%2F%2BPSzi4dtYWEfEVNKNexi61hJzsQbDLYv1yi6zZ5iU65L0WV9ma8fReoy%2F31P8yS%2F6ily3MNy47sMGOqUB3hUOngvejDOwQliONX3dRfVpiSUtG%2Fb4pVW59VdAXn%2BDfACCyI%2BUiI%2BHgkvTOH1SgZs%2BY63Mej3gOg%2FhOS3K8MlBvEqQBQMx7P0xsyLxY41QNkOOveLwcoPypEhxMVGx0jXlNd2qqBWRlFHBbG4yOWwcLspyoQT2yBcAGx8hy5bNizwFJx4gkpAGIq6JjB09n%2BRLS55YBYXSQ3N8m8ooNHANZJsL&X-Amz-Signature=55b3c905d1ad7956d495d063c0d5c3760210c6c865f835970fa4f04fbf0d3cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
