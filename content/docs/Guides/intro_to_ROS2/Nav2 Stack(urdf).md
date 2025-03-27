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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MOBZIS4%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIcWVhTXq3b24%2BR2jp%2FFyPWQyU%2BIig5SKc5ye5AmNOaAiAr3TsWSFwFBfS%2FrLCFX8KsrfZuqF8pNUds2WD5yKzxDyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOB8vVvhljUYVBpEvKtwDFroaX5cPGuzuYoHWm5Vodf%2BGUlaOppUfAHEZKe9A21NIgmRKdFPvc2n6QCOnJDp%2BzWZHO7XvY%2F0axi7RWw%2FsmkWwJELQaeu1HOamiYC16rwqmfvMqA%2BTdSEHwOt9dBfgfv4FoRdDTAF3cw0y8upo0oSLPwACwbIr6pA38gNH8VM0mhYTP2I7vC5caUAXPK9W8WB17uuGoV6ullNLIn%2Fhqi8ROZPoCU4vSx9%2BLSWmVXJCs2j7wbIZcVpW286espim3VCFOiDcbH9JnqqqTJeQy5wA6Kz12XyvZveUxQRi%2FzV1pd6Og387%2BxMMa2Bbi%2BhO7ndXHopzyNEk6O9mcFuIQRppEboqoZFX5O%2BhosynHv7sClzh%2Fdw%2BY9tLRjLYSden1JCnyF20w%2BUXjOzpbEUAbiLcIDeqeWhDINQTI6WcQoKdmKDuv3OLBINRlZtR9JxXLbCrxs7swN1PSPS0Pub29UDx66uDt%2BfnTnm5Udf5iW%2BYYyum1TMacbK5T1Aa2FeUZbr5uA4H3leAPRx8q1pbg2h0HgMH5Op6bPflDi7Mho%2Bgq4VfE1cTPnsO9aNyJno%2FMSpYentFpM0gaELOtNED8EN5oZcONQQfMZTpKoev2JSKnBPYBFAkZ46KQy0wsOiTvwY6pgExkZbDJ4LSj0W62bNkxSadwRz6P0dosyN6fcdLtVjhY6YKftcOMheXy0GaMWbXIYKWofd0wmYuwExA80eOUKHvqkfWZiWuQVYYm7PVAqL%2F8juyYMZGupQdtfYqTlASeFX1et86MizW1CydXuEw8r5cwuZTt%2BGx8c4mSDz%2BK1biNMnF88DAvkigRKYdr3AVYu7Df0LCduBPBL0DQxYKFYAYBKtNXx3q&X-Amz-Signature=341fe3184853a8c6d0f432dc7ddb78f550d76a72fbe09e5cfd6f57b1bdd5be6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MOBZIS4%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIcWVhTXq3b24%2BR2jp%2FFyPWQyU%2BIig5SKc5ye5AmNOaAiAr3TsWSFwFBfS%2FrLCFX8KsrfZuqF8pNUds2WD5yKzxDyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOB8vVvhljUYVBpEvKtwDFroaX5cPGuzuYoHWm5Vodf%2BGUlaOppUfAHEZKe9A21NIgmRKdFPvc2n6QCOnJDp%2BzWZHO7XvY%2F0axi7RWw%2FsmkWwJELQaeu1HOamiYC16rwqmfvMqA%2BTdSEHwOt9dBfgfv4FoRdDTAF3cw0y8upo0oSLPwACwbIr6pA38gNH8VM0mhYTP2I7vC5caUAXPK9W8WB17uuGoV6ullNLIn%2Fhqi8ROZPoCU4vSx9%2BLSWmVXJCs2j7wbIZcVpW286espim3VCFOiDcbH9JnqqqTJeQy5wA6Kz12XyvZveUxQRi%2FzV1pd6Og387%2BxMMa2Bbi%2BhO7ndXHopzyNEk6O9mcFuIQRppEboqoZFX5O%2BhosynHv7sClzh%2Fdw%2BY9tLRjLYSden1JCnyF20w%2BUXjOzpbEUAbiLcIDeqeWhDINQTI6WcQoKdmKDuv3OLBINRlZtR9JxXLbCrxs7swN1PSPS0Pub29UDx66uDt%2BfnTnm5Udf5iW%2BYYyum1TMacbK5T1Aa2FeUZbr5uA4H3leAPRx8q1pbg2h0HgMH5Op6bPflDi7Mho%2Bgq4VfE1cTPnsO9aNyJno%2FMSpYentFpM0gaELOtNED8EN5oZcONQQfMZTpKoev2JSKnBPYBFAkZ46KQy0wsOiTvwY6pgExkZbDJ4LSj0W62bNkxSadwRz6P0dosyN6fcdLtVjhY6YKftcOMheXy0GaMWbXIYKWofd0wmYuwExA80eOUKHvqkfWZiWuQVYYm7PVAqL%2F8juyYMZGupQdtfYqTlASeFX1et86MizW1CydXuEw8r5cwuZTt%2BGx8c4mSDz%2BK1biNMnF88DAvkigRKYdr3AVYu7Df0LCduBPBL0DQxYKFYAYBKtNXx3q&X-Amz-Signature=68277564f64a51fa176787fd00f4a597292df54ae08f7a9d1b84a68b25955d56&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MOBZIS4%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIcWVhTXq3b24%2BR2jp%2FFyPWQyU%2BIig5SKc5ye5AmNOaAiAr3TsWSFwFBfS%2FrLCFX8KsrfZuqF8pNUds2WD5yKzxDyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOB8vVvhljUYVBpEvKtwDFroaX5cPGuzuYoHWm5Vodf%2BGUlaOppUfAHEZKe9A21NIgmRKdFPvc2n6QCOnJDp%2BzWZHO7XvY%2F0axi7RWw%2FsmkWwJELQaeu1HOamiYC16rwqmfvMqA%2BTdSEHwOt9dBfgfv4FoRdDTAF3cw0y8upo0oSLPwACwbIr6pA38gNH8VM0mhYTP2I7vC5caUAXPK9W8WB17uuGoV6ullNLIn%2Fhqi8ROZPoCU4vSx9%2BLSWmVXJCs2j7wbIZcVpW286espim3VCFOiDcbH9JnqqqTJeQy5wA6Kz12XyvZveUxQRi%2FzV1pd6Og387%2BxMMa2Bbi%2BhO7ndXHopzyNEk6O9mcFuIQRppEboqoZFX5O%2BhosynHv7sClzh%2Fdw%2BY9tLRjLYSden1JCnyF20w%2BUXjOzpbEUAbiLcIDeqeWhDINQTI6WcQoKdmKDuv3OLBINRlZtR9JxXLbCrxs7swN1PSPS0Pub29UDx66uDt%2BfnTnm5Udf5iW%2BYYyum1TMacbK5T1Aa2FeUZbr5uA4H3leAPRx8q1pbg2h0HgMH5Op6bPflDi7Mho%2Bgq4VfE1cTPnsO9aNyJno%2FMSpYentFpM0gaELOtNED8EN5oZcONQQfMZTpKoev2JSKnBPYBFAkZ46KQy0wsOiTvwY6pgExkZbDJ4LSj0W62bNkxSadwRz6P0dosyN6fcdLtVjhY6YKftcOMheXy0GaMWbXIYKWofd0wmYuwExA80eOUKHvqkfWZiWuQVYYm7PVAqL%2F8juyYMZGupQdtfYqTlASeFX1et86MizW1CydXuEw8r5cwuZTt%2BGx8c4mSDz%2BK1biNMnF88DAvkigRKYdr3AVYu7Df0LCduBPBL0DQxYKFYAYBKtNXx3q&X-Amz-Signature=fd53c927eb24eb86a0ac38da3791c16cd5c9f5358fd9aaf4ad1e280d53ebd2b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MOBZIS4%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIcWVhTXq3b24%2BR2jp%2FFyPWQyU%2BIig5SKc5ye5AmNOaAiAr3TsWSFwFBfS%2FrLCFX8KsrfZuqF8pNUds2WD5yKzxDyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOB8vVvhljUYVBpEvKtwDFroaX5cPGuzuYoHWm5Vodf%2BGUlaOppUfAHEZKe9A21NIgmRKdFPvc2n6QCOnJDp%2BzWZHO7XvY%2F0axi7RWw%2FsmkWwJELQaeu1HOamiYC16rwqmfvMqA%2BTdSEHwOt9dBfgfv4FoRdDTAF3cw0y8upo0oSLPwACwbIr6pA38gNH8VM0mhYTP2I7vC5caUAXPK9W8WB17uuGoV6ullNLIn%2Fhqi8ROZPoCU4vSx9%2BLSWmVXJCs2j7wbIZcVpW286espim3VCFOiDcbH9JnqqqTJeQy5wA6Kz12XyvZveUxQRi%2FzV1pd6Og387%2BxMMa2Bbi%2BhO7ndXHopzyNEk6O9mcFuIQRppEboqoZFX5O%2BhosynHv7sClzh%2Fdw%2BY9tLRjLYSden1JCnyF20w%2BUXjOzpbEUAbiLcIDeqeWhDINQTI6WcQoKdmKDuv3OLBINRlZtR9JxXLbCrxs7swN1PSPS0Pub29UDx66uDt%2BfnTnm5Udf5iW%2BYYyum1TMacbK5T1Aa2FeUZbr5uA4H3leAPRx8q1pbg2h0HgMH5Op6bPflDi7Mho%2Bgq4VfE1cTPnsO9aNyJno%2FMSpYentFpM0gaELOtNED8EN5oZcONQQfMZTpKoev2JSKnBPYBFAkZ46KQy0wsOiTvwY6pgExkZbDJ4LSj0W62bNkxSadwRz6P0dosyN6fcdLtVjhY6YKftcOMheXy0GaMWbXIYKWofd0wmYuwExA80eOUKHvqkfWZiWuQVYYm7PVAqL%2F8juyYMZGupQdtfYqTlASeFX1et86MizW1CydXuEw8r5cwuZTt%2BGx8c4mSDz%2BK1biNMnF88DAvkigRKYdr3AVYu7Df0LCduBPBL0DQxYKFYAYBKtNXx3q&X-Amz-Signature=fa447bf38fbc7f6349fe06423fb98030c14c9f2b4a44d6df8433e890f9b57067&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MOBZIS4%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIcWVhTXq3b24%2BR2jp%2FFyPWQyU%2BIig5SKc5ye5AmNOaAiAr3TsWSFwFBfS%2FrLCFX8KsrfZuqF8pNUds2WD5yKzxDyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOB8vVvhljUYVBpEvKtwDFroaX5cPGuzuYoHWm5Vodf%2BGUlaOppUfAHEZKe9A21NIgmRKdFPvc2n6QCOnJDp%2BzWZHO7XvY%2F0axi7RWw%2FsmkWwJELQaeu1HOamiYC16rwqmfvMqA%2BTdSEHwOt9dBfgfv4FoRdDTAF3cw0y8upo0oSLPwACwbIr6pA38gNH8VM0mhYTP2I7vC5caUAXPK9W8WB17uuGoV6ullNLIn%2Fhqi8ROZPoCU4vSx9%2BLSWmVXJCs2j7wbIZcVpW286espim3VCFOiDcbH9JnqqqTJeQy5wA6Kz12XyvZveUxQRi%2FzV1pd6Og387%2BxMMa2Bbi%2BhO7ndXHopzyNEk6O9mcFuIQRppEboqoZFX5O%2BhosynHv7sClzh%2Fdw%2BY9tLRjLYSden1JCnyF20w%2BUXjOzpbEUAbiLcIDeqeWhDINQTI6WcQoKdmKDuv3OLBINRlZtR9JxXLbCrxs7swN1PSPS0Pub29UDx66uDt%2BfnTnm5Udf5iW%2BYYyum1TMacbK5T1Aa2FeUZbr5uA4H3leAPRx8q1pbg2h0HgMH5Op6bPflDi7Mho%2Bgq4VfE1cTPnsO9aNyJno%2FMSpYentFpM0gaELOtNED8EN5oZcONQQfMZTpKoev2JSKnBPYBFAkZ46KQy0wsOiTvwY6pgExkZbDJ4LSj0W62bNkxSadwRz6P0dosyN6fcdLtVjhY6YKftcOMheXy0GaMWbXIYKWofd0wmYuwExA80eOUKHvqkfWZiWuQVYYm7PVAqL%2F8juyYMZGupQdtfYqTlASeFX1et86MizW1CydXuEw8r5cwuZTt%2BGx8c4mSDz%2BK1biNMnF88DAvkigRKYdr3AVYu7Df0LCduBPBL0DQxYKFYAYBKtNXx3q&X-Amz-Signature=819b3a9019be4fe643843182f220cdf30fea712d48c06f52f21127c00adf26c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MOBZIS4%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIcWVhTXq3b24%2BR2jp%2FFyPWQyU%2BIig5SKc5ye5AmNOaAiAr3TsWSFwFBfS%2FrLCFX8KsrfZuqF8pNUds2WD5yKzxDyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMOB8vVvhljUYVBpEvKtwDFroaX5cPGuzuYoHWm5Vodf%2BGUlaOppUfAHEZKe9A21NIgmRKdFPvc2n6QCOnJDp%2BzWZHO7XvY%2F0axi7RWw%2FsmkWwJELQaeu1HOamiYC16rwqmfvMqA%2BTdSEHwOt9dBfgfv4FoRdDTAF3cw0y8upo0oSLPwACwbIr6pA38gNH8VM0mhYTP2I7vC5caUAXPK9W8WB17uuGoV6ullNLIn%2Fhqi8ROZPoCU4vSx9%2BLSWmVXJCs2j7wbIZcVpW286espim3VCFOiDcbH9JnqqqTJeQy5wA6Kz12XyvZveUxQRi%2FzV1pd6Og387%2BxMMa2Bbi%2BhO7ndXHopzyNEk6O9mcFuIQRppEboqoZFX5O%2BhosynHv7sClzh%2Fdw%2BY9tLRjLYSden1JCnyF20w%2BUXjOzpbEUAbiLcIDeqeWhDINQTI6WcQoKdmKDuv3OLBINRlZtR9JxXLbCrxs7swN1PSPS0Pub29UDx66uDt%2BfnTnm5Udf5iW%2BYYyum1TMacbK5T1Aa2FeUZbr5uA4H3leAPRx8q1pbg2h0HgMH5Op6bPflDi7Mho%2Bgq4VfE1cTPnsO9aNyJno%2FMSpYentFpM0gaELOtNED8EN5oZcONQQfMZTpKoev2JSKnBPYBFAkZ46KQy0wsOiTvwY6pgExkZbDJ4LSj0W62bNkxSadwRz6P0dosyN6fcdLtVjhY6YKftcOMheXy0GaMWbXIYKWofd0wmYuwExA80eOUKHvqkfWZiWuQVYYm7PVAqL%2F8juyYMZGupQdtfYqTlASeFX1et86MizW1CydXuEw8r5cwuZTt%2BGx8c4mSDz%2BK1biNMnF88DAvkigRKYdr3AVYu7Df0LCduBPBL0DQxYKFYAYBKtNXx3q&X-Amz-Signature=c65ade86f470802573c062a3a78570d1a0a1cc85f6e142c948e7e0790ec25e62&X-Amz-SignedHeaders=host&x-id=GetObject)
