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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQI5TF5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHCdToWDrwBxlUAFGhI4fGiT9%2F%2BgAS0p8hAeI60hd3RoAiEAr7rMJnk5iDM6Q0TS1tRJ2hmejAWqJSgxXYvyqtzLPcIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDI3hN%2B5qjLuzPfYHYSrcA6tJnizdNE%2FL%2BRJAA79oMJB4czXY74VQ4O9yXMuuy5ZLGjFgqSgEtUjEm6tM7fWR4UJQvkW%2BEtYMYL4zQ8tF7SMP9lItAbY5pSeOf%2FNBhLYXv9eODdGQIjmH3kmm2K8LzhuC6xB%2BV94sXZXDZJ62y6DtVJDMcNSWr4sF%2B4m2jsPMVYur2uKOZN5hjMQvQJAeuoBkKr6f1isvf%2B79iNxOn%2BDYAH49ON0HvEuD3tVXVXGeqyx4blnuSyiUozh%2Bd7HzvukS7BthuAcPK4dnhSjIhr8z%2B0jiZXK2WAc%2BDeKlnnWgnsUeiF0H%2FELbf5jDcv9l116aLz4IGZaWZOso3jydIGIq9N3Wpx9KkkMzIE%2FeTfMlRFgwomPnSPEPnF%2BbTsbPrCpnIUQVEi8%2BuEqGyBgkYhfdmf4CZnh3%2FAL7xY8jBf0Ll0Yq9OI0DutQ1ybW70v%2FFJrJAXO2RT1pAmLjES7TjvpPwNuRuVhv2d2T0yOx11N8lGWhfBoaw%2FLUDX1n1LtIgKsYzvTROxVbnzkAi6vPBGiXG2LGKdQWWxckQj1eCBHYsCH0X92CZrDn%2FDOMZXeC4%2B0fpeauhz3L2tyUUS7ofSpuOmvv1sf6vigfSK9m7rVxsbTEhhBRCk9br79BMP%2B8674GOqUBQ7LvA8rqBUifQFOlVzyGZph2U54AeJwTehe4Fhqwyn3nnlCYAccWc7CCnRK4KrKuQmvjEDVo24b6KMz9TK5eMD50YM81xZsZrbbmMwJdAQxkljWgxTbH60C6mtVloliV9E6yWkL77dYT64tl3O%2BvJfg9PKrwAr2Kkaf90rOZ7ESZK27u7pQ6WzB9GgLwh4R955b8CvU6xCq3DHafbTHuxhoZywSj&X-Amz-Signature=cad59108cce9778eeea07dca540df67b724b538504de048fb0c5f09c7988b48e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQI5TF5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHCdToWDrwBxlUAFGhI4fGiT9%2F%2BgAS0p8hAeI60hd3RoAiEAr7rMJnk5iDM6Q0TS1tRJ2hmejAWqJSgxXYvyqtzLPcIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDI3hN%2B5qjLuzPfYHYSrcA6tJnizdNE%2FL%2BRJAA79oMJB4czXY74VQ4O9yXMuuy5ZLGjFgqSgEtUjEm6tM7fWR4UJQvkW%2BEtYMYL4zQ8tF7SMP9lItAbY5pSeOf%2FNBhLYXv9eODdGQIjmH3kmm2K8LzhuC6xB%2BV94sXZXDZJ62y6DtVJDMcNSWr4sF%2B4m2jsPMVYur2uKOZN5hjMQvQJAeuoBkKr6f1isvf%2B79iNxOn%2BDYAH49ON0HvEuD3tVXVXGeqyx4blnuSyiUozh%2Bd7HzvukS7BthuAcPK4dnhSjIhr8z%2B0jiZXK2WAc%2BDeKlnnWgnsUeiF0H%2FELbf5jDcv9l116aLz4IGZaWZOso3jydIGIq9N3Wpx9KkkMzIE%2FeTfMlRFgwomPnSPEPnF%2BbTsbPrCpnIUQVEi8%2BuEqGyBgkYhfdmf4CZnh3%2FAL7xY8jBf0Ll0Yq9OI0DutQ1ybW70v%2FFJrJAXO2RT1pAmLjES7TjvpPwNuRuVhv2d2T0yOx11N8lGWhfBoaw%2FLUDX1n1LtIgKsYzvTROxVbnzkAi6vPBGiXG2LGKdQWWxckQj1eCBHYsCH0X92CZrDn%2FDOMZXeC4%2B0fpeauhz3L2tyUUS7ofSpuOmvv1sf6vigfSK9m7rVxsbTEhhBRCk9br79BMP%2B8674GOqUBQ7LvA8rqBUifQFOlVzyGZph2U54AeJwTehe4Fhqwyn3nnlCYAccWc7CCnRK4KrKuQmvjEDVo24b6KMz9TK5eMD50YM81xZsZrbbmMwJdAQxkljWgxTbH60C6mtVloliV9E6yWkL77dYT64tl3O%2BvJfg9PKrwAr2Kkaf90rOZ7ESZK27u7pQ6WzB9GgLwh4R955b8CvU6xCq3DHafbTHuxhoZywSj&X-Amz-Signature=676f08f11ea7f5a0fb1014238579594836a56f9c68b61beab6d75cab77756830&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQI5TF5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHCdToWDrwBxlUAFGhI4fGiT9%2F%2BgAS0p8hAeI60hd3RoAiEAr7rMJnk5iDM6Q0TS1tRJ2hmejAWqJSgxXYvyqtzLPcIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDI3hN%2B5qjLuzPfYHYSrcA6tJnizdNE%2FL%2BRJAA79oMJB4czXY74VQ4O9yXMuuy5ZLGjFgqSgEtUjEm6tM7fWR4UJQvkW%2BEtYMYL4zQ8tF7SMP9lItAbY5pSeOf%2FNBhLYXv9eODdGQIjmH3kmm2K8LzhuC6xB%2BV94sXZXDZJ62y6DtVJDMcNSWr4sF%2B4m2jsPMVYur2uKOZN5hjMQvQJAeuoBkKr6f1isvf%2B79iNxOn%2BDYAH49ON0HvEuD3tVXVXGeqyx4blnuSyiUozh%2Bd7HzvukS7BthuAcPK4dnhSjIhr8z%2B0jiZXK2WAc%2BDeKlnnWgnsUeiF0H%2FELbf5jDcv9l116aLz4IGZaWZOso3jydIGIq9N3Wpx9KkkMzIE%2FeTfMlRFgwomPnSPEPnF%2BbTsbPrCpnIUQVEi8%2BuEqGyBgkYhfdmf4CZnh3%2FAL7xY8jBf0Ll0Yq9OI0DutQ1ybW70v%2FFJrJAXO2RT1pAmLjES7TjvpPwNuRuVhv2d2T0yOx11N8lGWhfBoaw%2FLUDX1n1LtIgKsYzvTROxVbnzkAi6vPBGiXG2LGKdQWWxckQj1eCBHYsCH0X92CZrDn%2FDOMZXeC4%2B0fpeauhz3L2tyUUS7ofSpuOmvv1sf6vigfSK9m7rVxsbTEhhBRCk9br79BMP%2B8674GOqUBQ7LvA8rqBUifQFOlVzyGZph2U54AeJwTehe4Fhqwyn3nnlCYAccWc7CCnRK4KrKuQmvjEDVo24b6KMz9TK5eMD50YM81xZsZrbbmMwJdAQxkljWgxTbH60C6mtVloliV9E6yWkL77dYT64tl3O%2BvJfg9PKrwAr2Kkaf90rOZ7ESZK27u7pQ6WzB9GgLwh4R955b8CvU6xCq3DHafbTHuxhoZywSj&X-Amz-Signature=4fa28848556010b6259b984a213c08ea87ef1f7cc9893e4d4ddd5b0d8bdb63b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQI5TF5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHCdToWDrwBxlUAFGhI4fGiT9%2F%2BgAS0p8hAeI60hd3RoAiEAr7rMJnk5iDM6Q0TS1tRJ2hmejAWqJSgxXYvyqtzLPcIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDI3hN%2B5qjLuzPfYHYSrcA6tJnizdNE%2FL%2BRJAA79oMJB4czXY74VQ4O9yXMuuy5ZLGjFgqSgEtUjEm6tM7fWR4UJQvkW%2BEtYMYL4zQ8tF7SMP9lItAbY5pSeOf%2FNBhLYXv9eODdGQIjmH3kmm2K8LzhuC6xB%2BV94sXZXDZJ62y6DtVJDMcNSWr4sF%2B4m2jsPMVYur2uKOZN5hjMQvQJAeuoBkKr6f1isvf%2B79iNxOn%2BDYAH49ON0HvEuD3tVXVXGeqyx4blnuSyiUozh%2Bd7HzvukS7BthuAcPK4dnhSjIhr8z%2B0jiZXK2WAc%2BDeKlnnWgnsUeiF0H%2FELbf5jDcv9l116aLz4IGZaWZOso3jydIGIq9N3Wpx9KkkMzIE%2FeTfMlRFgwomPnSPEPnF%2BbTsbPrCpnIUQVEi8%2BuEqGyBgkYhfdmf4CZnh3%2FAL7xY8jBf0Ll0Yq9OI0DutQ1ybW70v%2FFJrJAXO2RT1pAmLjES7TjvpPwNuRuVhv2d2T0yOx11N8lGWhfBoaw%2FLUDX1n1LtIgKsYzvTROxVbnzkAi6vPBGiXG2LGKdQWWxckQj1eCBHYsCH0X92CZrDn%2FDOMZXeC4%2B0fpeauhz3L2tyUUS7ofSpuOmvv1sf6vigfSK9m7rVxsbTEhhBRCk9br79BMP%2B8674GOqUBQ7LvA8rqBUifQFOlVzyGZph2U54AeJwTehe4Fhqwyn3nnlCYAccWc7CCnRK4KrKuQmvjEDVo24b6KMz9TK5eMD50YM81xZsZrbbmMwJdAQxkljWgxTbH60C6mtVloliV9E6yWkL77dYT64tl3O%2BvJfg9PKrwAr2Kkaf90rOZ7ESZK27u7pQ6WzB9GgLwh4R955b8CvU6xCq3DHafbTHuxhoZywSj&X-Amz-Signature=d8c42bae5bbf7ad18ef34931ea70151fce71bacd8f1f75e5ab96660e6ab9bb16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQI5TF5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHCdToWDrwBxlUAFGhI4fGiT9%2F%2BgAS0p8hAeI60hd3RoAiEAr7rMJnk5iDM6Q0TS1tRJ2hmejAWqJSgxXYvyqtzLPcIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDI3hN%2B5qjLuzPfYHYSrcA6tJnizdNE%2FL%2BRJAA79oMJB4czXY74VQ4O9yXMuuy5ZLGjFgqSgEtUjEm6tM7fWR4UJQvkW%2BEtYMYL4zQ8tF7SMP9lItAbY5pSeOf%2FNBhLYXv9eODdGQIjmH3kmm2K8LzhuC6xB%2BV94sXZXDZJ62y6DtVJDMcNSWr4sF%2B4m2jsPMVYur2uKOZN5hjMQvQJAeuoBkKr6f1isvf%2B79iNxOn%2BDYAH49ON0HvEuD3tVXVXGeqyx4blnuSyiUozh%2Bd7HzvukS7BthuAcPK4dnhSjIhr8z%2B0jiZXK2WAc%2BDeKlnnWgnsUeiF0H%2FELbf5jDcv9l116aLz4IGZaWZOso3jydIGIq9N3Wpx9KkkMzIE%2FeTfMlRFgwomPnSPEPnF%2BbTsbPrCpnIUQVEi8%2BuEqGyBgkYhfdmf4CZnh3%2FAL7xY8jBf0Ll0Yq9OI0DutQ1ybW70v%2FFJrJAXO2RT1pAmLjES7TjvpPwNuRuVhv2d2T0yOx11N8lGWhfBoaw%2FLUDX1n1LtIgKsYzvTROxVbnzkAi6vPBGiXG2LGKdQWWxckQj1eCBHYsCH0X92CZrDn%2FDOMZXeC4%2B0fpeauhz3L2tyUUS7ofSpuOmvv1sf6vigfSK9m7rVxsbTEhhBRCk9br79BMP%2B8674GOqUBQ7LvA8rqBUifQFOlVzyGZph2U54AeJwTehe4Fhqwyn3nnlCYAccWc7CCnRK4KrKuQmvjEDVo24b6KMz9TK5eMD50YM81xZsZrbbmMwJdAQxkljWgxTbH60C6mtVloliV9E6yWkL77dYT64tl3O%2BvJfg9PKrwAr2Kkaf90rOZ7ESZK27u7pQ6WzB9GgLwh4R955b8CvU6xCq3DHafbTHuxhoZywSj&X-Amz-Signature=cfa4ea840ee4178f0a535235a442246ee1325ec457be8c7d72ebf98668e1de83&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OQI5TF5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIHCdToWDrwBxlUAFGhI4fGiT9%2F%2BgAS0p8hAeI60hd3RoAiEAr7rMJnk5iDM6Q0TS1tRJ2hmejAWqJSgxXYvyqtzLPcIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDI3hN%2B5qjLuzPfYHYSrcA6tJnizdNE%2FL%2BRJAA79oMJB4czXY74VQ4O9yXMuuy5ZLGjFgqSgEtUjEm6tM7fWR4UJQvkW%2BEtYMYL4zQ8tF7SMP9lItAbY5pSeOf%2FNBhLYXv9eODdGQIjmH3kmm2K8LzhuC6xB%2BV94sXZXDZJ62y6DtVJDMcNSWr4sF%2B4m2jsPMVYur2uKOZN5hjMQvQJAeuoBkKr6f1isvf%2B79iNxOn%2BDYAH49ON0HvEuD3tVXVXGeqyx4blnuSyiUozh%2Bd7HzvukS7BthuAcPK4dnhSjIhr8z%2B0jiZXK2WAc%2BDeKlnnWgnsUeiF0H%2FELbf5jDcv9l116aLz4IGZaWZOso3jydIGIq9N3Wpx9KkkMzIE%2FeTfMlRFgwomPnSPEPnF%2BbTsbPrCpnIUQVEi8%2BuEqGyBgkYhfdmf4CZnh3%2FAL7xY8jBf0Ll0Yq9OI0DutQ1ybW70v%2FFJrJAXO2RT1pAmLjES7TjvpPwNuRuVhv2d2T0yOx11N8lGWhfBoaw%2FLUDX1n1LtIgKsYzvTROxVbnzkAi6vPBGiXG2LGKdQWWxckQj1eCBHYsCH0X92CZrDn%2FDOMZXeC4%2B0fpeauhz3L2tyUUS7ofSpuOmvv1sf6vigfSK9m7rVxsbTEhhBRCk9br79BMP%2B8674GOqUBQ7LvA8rqBUifQFOlVzyGZph2U54AeJwTehe4Fhqwyn3nnlCYAccWc7CCnRK4KrKuQmvjEDVo24b6KMz9TK5eMD50YM81xZsZrbbmMwJdAQxkljWgxTbH60C6mtVloliV9E6yWkL77dYT64tl3O%2BvJfg9PKrwAr2Kkaf90rOZ7ESZK27u7pQ6WzB9GgLwh4R955b8CvU6xCq3DHafbTHuxhoZywSj&X-Amz-Signature=4c4046428c2f7bb612d69eaadf768af38058387bf61a77969028e4493beb998f&X-Amz-SignedHeaders=host&x-id=GetObject)
