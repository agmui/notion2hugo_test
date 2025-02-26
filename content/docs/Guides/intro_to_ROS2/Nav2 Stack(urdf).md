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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4ZKLIC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBvNkzAv41Ab2SH%2Bt0AY6OpLTMJWuLh0ioztxLAEHkQbAiA7qmcmbqIEPOXSlGaLLWe7FGRyrNbg%2FxJWhpZ2RarnkSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMKu7173Yi2HLTYbYqKtwDdzp6Eqh6%2BtvsnBBMRfAdqfSVM%2FxpfEITJekcYpbbiburDlGX%2BqNKLNJ6GPCwpMkMujwiqeQBAG07hxZoQwhGXRqiO3qgpanSteWU4kcTOUaFhd5tGx4iReVQzZ8alwW0emLtKvS2pvQ0ZSzUGx8ZAnmYTLZC2HN8C4rMhZat%2F6%2Bwm7Zz3CvXmKhWkBU2NcPYX2JIghrCkRbaDnr4jAVvgM5E7jXHUSaq%2FUCk%2FFjfy6s%2Bp9ivL5X5Pn3CXq8lgrXVwv7ybils7txyRjaeCiZdjMGwlYlSiKL1Vu8d9aUG%2FRkeAvc7HUGh%2FrL9UpdOMnUzFfTciTN7ruxy5LF8wu5LkXg6gf%2FgeonoccMp2c92str3LV8zAapmnIjalui%2BdaBqjmu4mp6eFIjE1gjzXzaKIB3pe240lsvePoTAigxKhcNxZSlNazkmB%2Be8JaYKmwZ%2Bqhjuy%2B%2B%2BdllOrO9Kl0XI7CT%2FnRDXV6psnJDN0AedcTikZ%2FQvDtVH3h0MFxFfz3SDwg3%2FutbH0xmcaRJMswYRbTtRdl3jMQ%2FZ2oRfnqa2dulPpcE08y%2Fbtq7B%2Fqq0GiQCEDyW8qShNZDt%2BNQVinVEEWagM%2Bq0aRwp4BQ6QZPRSwYLLY9t5Y0pny0y7CQw9Yf8vQY6pgFoyq3RgTby8JcW8mdHgPfDEJxXF%2BL2z3Ah%2FMKHcgnZmTKbS1NoOf%2FR43HyswEQolzl6o5Prr9XAO0OF1xcPcUzs9I3ME%2FO0sZ%2FjHI8SgSoDAF9Y92XkrpTN8xV3Bji9gBrQ7u5AIAcFxAG4%2FDoVvalenxlgvzJEnDeeDr2uQgPX4YqYNGjto8KILyvcSTe4%2Fre6q%2BFehi2cdeA%2FWmeLND1F0Hh3k01&X-Amz-Signature=ba989a7c0dcbfeaaa677302e2cfd941ed975dc325b3c382abd50e1c98a103e19&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4ZKLIC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBvNkzAv41Ab2SH%2Bt0AY6OpLTMJWuLh0ioztxLAEHkQbAiA7qmcmbqIEPOXSlGaLLWe7FGRyrNbg%2FxJWhpZ2RarnkSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMKu7173Yi2HLTYbYqKtwDdzp6Eqh6%2BtvsnBBMRfAdqfSVM%2FxpfEITJekcYpbbiburDlGX%2BqNKLNJ6GPCwpMkMujwiqeQBAG07hxZoQwhGXRqiO3qgpanSteWU4kcTOUaFhd5tGx4iReVQzZ8alwW0emLtKvS2pvQ0ZSzUGx8ZAnmYTLZC2HN8C4rMhZat%2F6%2Bwm7Zz3CvXmKhWkBU2NcPYX2JIghrCkRbaDnr4jAVvgM5E7jXHUSaq%2FUCk%2FFjfy6s%2Bp9ivL5X5Pn3CXq8lgrXVwv7ybils7txyRjaeCiZdjMGwlYlSiKL1Vu8d9aUG%2FRkeAvc7HUGh%2FrL9UpdOMnUzFfTciTN7ruxy5LF8wu5LkXg6gf%2FgeonoccMp2c92str3LV8zAapmnIjalui%2BdaBqjmu4mp6eFIjE1gjzXzaKIB3pe240lsvePoTAigxKhcNxZSlNazkmB%2Be8JaYKmwZ%2Bqhjuy%2B%2B%2BdllOrO9Kl0XI7CT%2FnRDXV6psnJDN0AedcTikZ%2FQvDtVH3h0MFxFfz3SDwg3%2FutbH0xmcaRJMswYRbTtRdl3jMQ%2FZ2oRfnqa2dulPpcE08y%2Fbtq7B%2Fqq0GiQCEDyW8qShNZDt%2BNQVinVEEWagM%2Bq0aRwp4BQ6QZPRSwYLLY9t5Y0pny0y7CQw9Yf8vQY6pgFoyq3RgTby8JcW8mdHgPfDEJxXF%2BL2z3Ah%2FMKHcgnZmTKbS1NoOf%2FR43HyswEQolzl6o5Prr9XAO0OF1xcPcUzs9I3ME%2FO0sZ%2FjHI8SgSoDAF9Y92XkrpTN8xV3Bji9gBrQ7u5AIAcFxAG4%2FDoVvalenxlgvzJEnDeeDr2uQgPX4YqYNGjto8KILyvcSTe4%2Fre6q%2BFehi2cdeA%2FWmeLND1F0Hh3k01&X-Amz-Signature=559b491c47098da3632a52f888cf70abdd5a50b949ff459ff7e0a52de2513d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4ZKLIC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBvNkzAv41Ab2SH%2Bt0AY6OpLTMJWuLh0ioztxLAEHkQbAiA7qmcmbqIEPOXSlGaLLWe7FGRyrNbg%2FxJWhpZ2RarnkSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMKu7173Yi2HLTYbYqKtwDdzp6Eqh6%2BtvsnBBMRfAdqfSVM%2FxpfEITJekcYpbbiburDlGX%2BqNKLNJ6GPCwpMkMujwiqeQBAG07hxZoQwhGXRqiO3qgpanSteWU4kcTOUaFhd5tGx4iReVQzZ8alwW0emLtKvS2pvQ0ZSzUGx8ZAnmYTLZC2HN8C4rMhZat%2F6%2Bwm7Zz3CvXmKhWkBU2NcPYX2JIghrCkRbaDnr4jAVvgM5E7jXHUSaq%2FUCk%2FFjfy6s%2Bp9ivL5X5Pn3CXq8lgrXVwv7ybils7txyRjaeCiZdjMGwlYlSiKL1Vu8d9aUG%2FRkeAvc7HUGh%2FrL9UpdOMnUzFfTciTN7ruxy5LF8wu5LkXg6gf%2FgeonoccMp2c92str3LV8zAapmnIjalui%2BdaBqjmu4mp6eFIjE1gjzXzaKIB3pe240lsvePoTAigxKhcNxZSlNazkmB%2Be8JaYKmwZ%2Bqhjuy%2B%2B%2BdllOrO9Kl0XI7CT%2FnRDXV6psnJDN0AedcTikZ%2FQvDtVH3h0MFxFfz3SDwg3%2FutbH0xmcaRJMswYRbTtRdl3jMQ%2FZ2oRfnqa2dulPpcE08y%2Fbtq7B%2Fqq0GiQCEDyW8qShNZDt%2BNQVinVEEWagM%2Bq0aRwp4BQ6QZPRSwYLLY9t5Y0pny0y7CQw9Yf8vQY6pgFoyq3RgTby8JcW8mdHgPfDEJxXF%2BL2z3Ah%2FMKHcgnZmTKbS1NoOf%2FR43HyswEQolzl6o5Prr9XAO0OF1xcPcUzs9I3ME%2FO0sZ%2FjHI8SgSoDAF9Y92XkrpTN8xV3Bji9gBrQ7u5AIAcFxAG4%2FDoVvalenxlgvzJEnDeeDr2uQgPX4YqYNGjto8KILyvcSTe4%2Fre6q%2BFehi2cdeA%2FWmeLND1F0Hh3k01&X-Amz-Signature=6ec36a9c9fc5d7f951c4f802deb830bf8c76ac62ea44353a01e1e8add49e948d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4ZKLIC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBvNkzAv41Ab2SH%2Bt0AY6OpLTMJWuLh0ioztxLAEHkQbAiA7qmcmbqIEPOXSlGaLLWe7FGRyrNbg%2FxJWhpZ2RarnkSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMKu7173Yi2HLTYbYqKtwDdzp6Eqh6%2BtvsnBBMRfAdqfSVM%2FxpfEITJekcYpbbiburDlGX%2BqNKLNJ6GPCwpMkMujwiqeQBAG07hxZoQwhGXRqiO3qgpanSteWU4kcTOUaFhd5tGx4iReVQzZ8alwW0emLtKvS2pvQ0ZSzUGx8ZAnmYTLZC2HN8C4rMhZat%2F6%2Bwm7Zz3CvXmKhWkBU2NcPYX2JIghrCkRbaDnr4jAVvgM5E7jXHUSaq%2FUCk%2FFjfy6s%2Bp9ivL5X5Pn3CXq8lgrXVwv7ybils7txyRjaeCiZdjMGwlYlSiKL1Vu8d9aUG%2FRkeAvc7HUGh%2FrL9UpdOMnUzFfTciTN7ruxy5LF8wu5LkXg6gf%2FgeonoccMp2c92str3LV8zAapmnIjalui%2BdaBqjmu4mp6eFIjE1gjzXzaKIB3pe240lsvePoTAigxKhcNxZSlNazkmB%2Be8JaYKmwZ%2Bqhjuy%2B%2B%2BdllOrO9Kl0XI7CT%2FnRDXV6psnJDN0AedcTikZ%2FQvDtVH3h0MFxFfz3SDwg3%2FutbH0xmcaRJMswYRbTtRdl3jMQ%2FZ2oRfnqa2dulPpcE08y%2Fbtq7B%2Fqq0GiQCEDyW8qShNZDt%2BNQVinVEEWagM%2Bq0aRwp4BQ6QZPRSwYLLY9t5Y0pny0y7CQw9Yf8vQY6pgFoyq3RgTby8JcW8mdHgPfDEJxXF%2BL2z3Ah%2FMKHcgnZmTKbS1NoOf%2FR43HyswEQolzl6o5Prr9XAO0OF1xcPcUzs9I3ME%2FO0sZ%2FjHI8SgSoDAF9Y92XkrpTN8xV3Bji9gBrQ7u5AIAcFxAG4%2FDoVvalenxlgvzJEnDeeDr2uQgPX4YqYNGjto8KILyvcSTe4%2Fre6q%2BFehi2cdeA%2FWmeLND1F0Hh3k01&X-Amz-Signature=d904b594dc9588233e7f281d3cf49f1b29c10549554efff203c14de0454d5c46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4ZKLIC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBvNkzAv41Ab2SH%2Bt0AY6OpLTMJWuLh0ioztxLAEHkQbAiA7qmcmbqIEPOXSlGaLLWe7FGRyrNbg%2FxJWhpZ2RarnkSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMKu7173Yi2HLTYbYqKtwDdzp6Eqh6%2BtvsnBBMRfAdqfSVM%2FxpfEITJekcYpbbiburDlGX%2BqNKLNJ6GPCwpMkMujwiqeQBAG07hxZoQwhGXRqiO3qgpanSteWU4kcTOUaFhd5tGx4iReVQzZ8alwW0emLtKvS2pvQ0ZSzUGx8ZAnmYTLZC2HN8C4rMhZat%2F6%2Bwm7Zz3CvXmKhWkBU2NcPYX2JIghrCkRbaDnr4jAVvgM5E7jXHUSaq%2FUCk%2FFjfy6s%2Bp9ivL5X5Pn3CXq8lgrXVwv7ybils7txyRjaeCiZdjMGwlYlSiKL1Vu8d9aUG%2FRkeAvc7HUGh%2FrL9UpdOMnUzFfTciTN7ruxy5LF8wu5LkXg6gf%2FgeonoccMp2c92str3LV8zAapmnIjalui%2BdaBqjmu4mp6eFIjE1gjzXzaKIB3pe240lsvePoTAigxKhcNxZSlNazkmB%2Be8JaYKmwZ%2Bqhjuy%2B%2B%2BdllOrO9Kl0XI7CT%2FnRDXV6psnJDN0AedcTikZ%2FQvDtVH3h0MFxFfz3SDwg3%2FutbH0xmcaRJMswYRbTtRdl3jMQ%2FZ2oRfnqa2dulPpcE08y%2Fbtq7B%2Fqq0GiQCEDyW8qShNZDt%2BNQVinVEEWagM%2Bq0aRwp4BQ6QZPRSwYLLY9t5Y0pny0y7CQw9Yf8vQY6pgFoyq3RgTby8JcW8mdHgPfDEJxXF%2BL2z3Ah%2FMKHcgnZmTKbS1NoOf%2FR43HyswEQolzl6o5Prr9XAO0OF1xcPcUzs9I3ME%2FO0sZ%2FjHI8SgSoDAF9Y92XkrpTN8xV3Bji9gBrQ7u5AIAcFxAG4%2FDoVvalenxlgvzJEnDeeDr2uQgPX4YqYNGjto8KILyvcSTe4%2Fre6q%2BFehi2cdeA%2FWmeLND1F0Hh3k01&X-Amz-Signature=4b7984a35cf1e1d8678c9d628d7b295a2ae18eb6db0af46162ddc169b2b90e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4ZKLIC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIBvNkzAv41Ab2SH%2Bt0AY6OpLTMJWuLh0ioztxLAEHkQbAiA7qmcmbqIEPOXSlGaLLWe7FGRyrNbg%2FxJWhpZ2RarnkSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMKu7173Yi2HLTYbYqKtwDdzp6Eqh6%2BtvsnBBMRfAdqfSVM%2FxpfEITJekcYpbbiburDlGX%2BqNKLNJ6GPCwpMkMujwiqeQBAG07hxZoQwhGXRqiO3qgpanSteWU4kcTOUaFhd5tGx4iReVQzZ8alwW0emLtKvS2pvQ0ZSzUGx8ZAnmYTLZC2HN8C4rMhZat%2F6%2Bwm7Zz3CvXmKhWkBU2NcPYX2JIghrCkRbaDnr4jAVvgM5E7jXHUSaq%2FUCk%2FFjfy6s%2Bp9ivL5X5Pn3CXq8lgrXVwv7ybils7txyRjaeCiZdjMGwlYlSiKL1Vu8d9aUG%2FRkeAvc7HUGh%2FrL9UpdOMnUzFfTciTN7ruxy5LF8wu5LkXg6gf%2FgeonoccMp2c92str3LV8zAapmnIjalui%2BdaBqjmu4mp6eFIjE1gjzXzaKIB3pe240lsvePoTAigxKhcNxZSlNazkmB%2Be8JaYKmwZ%2Bqhjuy%2B%2B%2BdllOrO9Kl0XI7CT%2FnRDXV6psnJDN0AedcTikZ%2FQvDtVH3h0MFxFfz3SDwg3%2FutbH0xmcaRJMswYRbTtRdl3jMQ%2FZ2oRfnqa2dulPpcE08y%2Fbtq7B%2Fqq0GiQCEDyW8qShNZDt%2BNQVinVEEWagM%2Bq0aRwp4BQ6QZPRSwYLLY9t5Y0pny0y7CQw9Yf8vQY6pgFoyq3RgTby8JcW8mdHgPfDEJxXF%2BL2z3Ah%2FMKHcgnZmTKbS1NoOf%2FR43HyswEQolzl6o5Prr9XAO0OF1xcPcUzs9I3ME%2FO0sZ%2FjHI8SgSoDAF9Y92XkrpTN8xV3Bji9gBrQ7u5AIAcFxAG4%2FDoVvalenxlgvzJEnDeeDr2uQgPX4YqYNGjto8KILyvcSTe4%2Fre6q%2BFehi2cdeA%2FWmeLND1F0Hh3k01&X-Amz-Signature=e0df6ada082b9068db723bdfd263e3b2600e93a2962cbcd22b11300d0561c29f&X-Amz-SignedHeaders=host&x-id=GetObject)
