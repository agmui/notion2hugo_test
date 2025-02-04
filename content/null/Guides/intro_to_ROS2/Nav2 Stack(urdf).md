---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLOLXCP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDWTpIIN3PILalo6XvL2tlRF91vO3eXDPQkZXKOLYPPawIgJYvT8EWqKj50cjUbkwCYH3VZTWJULFg2ndisHXNUpCMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDE9S5W5B%2FANDrDt9QyrcA0d89j1wIK3pN1Ek1Uyj2n%2B43QrhCN0iXs5Dzu1FAWOgDiOKbRsE2v6i4Kbfnf2YoRUqXPQeBGcFxWcZJzbaasGBU1UY%2BXInDzg2NxNIOaZ2Rby%2FBOvRT0VppihKtNYmpnEM6DV2SMty5eg7jqMwK2S6ZkACty%2B%2BPsPux0q0fvlh81NoWbpOwEb%2BcldVNb%2BIiwc6hXzEQW25ZG%2BIyWLxqMaWVBt6EKHw7MVPHTN96Xhgu1IOpYfdHHZRGyGXrmrnFZF7rKcNVbv%2F1Z3PemqLsBpqS1Ve%2FHX0WlYQ378HTPfUyCGmYAIuErrr3QDA94eoEVhgr0q1jaFKm4BhHQmoflQmSZ7sBub6KfubUD9mQ0MQf3iwMOgJ%2BidOmSt2TWhadmg8jG35aRUG%2BJRgWpkwqrihzkKAPo8d8USMj8oKAhflV%2FhcLeV3lug2zs%2BDQoP2t7PTkA2N8ZR%2BT%2Fj2vE0gmTXj9jICZdJq18dGpUNYQXhOsfieIqgjDqXykSxXCdDGZku2Dwcuh5RHhdr%2F21F16a7GLDz66Bcy7AaC7hM0Z1ZeHbfyl0FS4SZokgK7dwU02tuonPF%2BtX%2Bqcj%2FOKd9EVyU%2FcmM9Fqkl%2BhWfm%2BFoJYM7izXrU%2BIiRrQTRqmGMMCVir0GOqUB5lHAeBPcCyGiJnNjgqL3bG%2BglfxHIr4M0gxhZJEvp4mGqW6MIMwV8NH4B3rzlMUhROhaa%2Fhij0VPxaIlzs%2BABFsg%2FCapxxG59B4hJSb7HZjs4P5NFHkP0YNfYqmK2vd39l%2F6MGAjEHYi%2FE1bFyFZfJOYdEB1xVBTua7sZ9u13piY4rq5cJuXrLvwKix6fvCrYFuX6yhQ%2BtgOMxIMm87VgtolvOIE&X-Amz-Signature=c025123c17fd3c1f58eb361d3fe4d1425d8a33ee18ac434f67d26bf036322715&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLOLXCP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDWTpIIN3PILalo6XvL2tlRF91vO3eXDPQkZXKOLYPPawIgJYvT8EWqKj50cjUbkwCYH3VZTWJULFg2ndisHXNUpCMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDE9S5W5B%2FANDrDt9QyrcA0d89j1wIK3pN1Ek1Uyj2n%2B43QrhCN0iXs5Dzu1FAWOgDiOKbRsE2v6i4Kbfnf2YoRUqXPQeBGcFxWcZJzbaasGBU1UY%2BXInDzg2NxNIOaZ2Rby%2FBOvRT0VppihKtNYmpnEM6DV2SMty5eg7jqMwK2S6ZkACty%2B%2BPsPux0q0fvlh81NoWbpOwEb%2BcldVNb%2BIiwc6hXzEQW25ZG%2BIyWLxqMaWVBt6EKHw7MVPHTN96Xhgu1IOpYfdHHZRGyGXrmrnFZF7rKcNVbv%2F1Z3PemqLsBpqS1Ve%2FHX0WlYQ378HTPfUyCGmYAIuErrr3QDA94eoEVhgr0q1jaFKm4BhHQmoflQmSZ7sBub6KfubUD9mQ0MQf3iwMOgJ%2BidOmSt2TWhadmg8jG35aRUG%2BJRgWpkwqrihzkKAPo8d8USMj8oKAhflV%2FhcLeV3lug2zs%2BDQoP2t7PTkA2N8ZR%2BT%2Fj2vE0gmTXj9jICZdJq18dGpUNYQXhOsfieIqgjDqXykSxXCdDGZku2Dwcuh5RHhdr%2F21F16a7GLDz66Bcy7AaC7hM0Z1ZeHbfyl0FS4SZokgK7dwU02tuonPF%2BtX%2Bqcj%2FOKd9EVyU%2FcmM9Fqkl%2BhWfm%2BFoJYM7izXrU%2BIiRrQTRqmGMMCVir0GOqUB5lHAeBPcCyGiJnNjgqL3bG%2BglfxHIr4M0gxhZJEvp4mGqW6MIMwV8NH4B3rzlMUhROhaa%2Fhij0VPxaIlzs%2BABFsg%2FCapxxG59B4hJSb7HZjs4P5NFHkP0YNfYqmK2vd39l%2F6MGAjEHYi%2FE1bFyFZfJOYdEB1xVBTua7sZ9u13piY4rq5cJuXrLvwKix6fvCrYFuX6yhQ%2BtgOMxIMm87VgtolvOIE&X-Amz-Signature=098b7edeaea6c9946402c9df8f68d919b7f4c2ed6a4e2da8a63392ed8cdf2e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLOLXCP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDWTpIIN3PILalo6XvL2tlRF91vO3eXDPQkZXKOLYPPawIgJYvT8EWqKj50cjUbkwCYH3VZTWJULFg2ndisHXNUpCMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDE9S5W5B%2FANDrDt9QyrcA0d89j1wIK3pN1Ek1Uyj2n%2B43QrhCN0iXs5Dzu1FAWOgDiOKbRsE2v6i4Kbfnf2YoRUqXPQeBGcFxWcZJzbaasGBU1UY%2BXInDzg2NxNIOaZ2Rby%2FBOvRT0VppihKtNYmpnEM6DV2SMty5eg7jqMwK2S6ZkACty%2B%2BPsPux0q0fvlh81NoWbpOwEb%2BcldVNb%2BIiwc6hXzEQW25ZG%2BIyWLxqMaWVBt6EKHw7MVPHTN96Xhgu1IOpYfdHHZRGyGXrmrnFZF7rKcNVbv%2F1Z3PemqLsBpqS1Ve%2FHX0WlYQ378HTPfUyCGmYAIuErrr3QDA94eoEVhgr0q1jaFKm4BhHQmoflQmSZ7sBub6KfubUD9mQ0MQf3iwMOgJ%2BidOmSt2TWhadmg8jG35aRUG%2BJRgWpkwqrihzkKAPo8d8USMj8oKAhflV%2FhcLeV3lug2zs%2BDQoP2t7PTkA2N8ZR%2BT%2Fj2vE0gmTXj9jICZdJq18dGpUNYQXhOsfieIqgjDqXykSxXCdDGZku2Dwcuh5RHhdr%2F21F16a7GLDz66Bcy7AaC7hM0Z1ZeHbfyl0FS4SZokgK7dwU02tuonPF%2BtX%2Bqcj%2FOKd9EVyU%2FcmM9Fqkl%2BhWfm%2BFoJYM7izXrU%2BIiRrQTRqmGMMCVir0GOqUB5lHAeBPcCyGiJnNjgqL3bG%2BglfxHIr4M0gxhZJEvp4mGqW6MIMwV8NH4B3rzlMUhROhaa%2Fhij0VPxaIlzs%2BABFsg%2FCapxxG59B4hJSb7HZjs4P5NFHkP0YNfYqmK2vd39l%2F6MGAjEHYi%2FE1bFyFZfJOYdEB1xVBTua7sZ9u13piY4rq5cJuXrLvwKix6fvCrYFuX6yhQ%2BtgOMxIMm87VgtolvOIE&X-Amz-Signature=49511a4b29121bf70f6f89b0f005724b3545bb08c9bc69d8aeed70aa5d3c1572&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLOLXCP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDWTpIIN3PILalo6XvL2tlRF91vO3eXDPQkZXKOLYPPawIgJYvT8EWqKj50cjUbkwCYH3VZTWJULFg2ndisHXNUpCMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDE9S5W5B%2FANDrDt9QyrcA0d89j1wIK3pN1Ek1Uyj2n%2B43QrhCN0iXs5Dzu1FAWOgDiOKbRsE2v6i4Kbfnf2YoRUqXPQeBGcFxWcZJzbaasGBU1UY%2BXInDzg2NxNIOaZ2Rby%2FBOvRT0VppihKtNYmpnEM6DV2SMty5eg7jqMwK2S6ZkACty%2B%2BPsPux0q0fvlh81NoWbpOwEb%2BcldVNb%2BIiwc6hXzEQW25ZG%2BIyWLxqMaWVBt6EKHw7MVPHTN96Xhgu1IOpYfdHHZRGyGXrmrnFZF7rKcNVbv%2F1Z3PemqLsBpqS1Ve%2FHX0WlYQ378HTPfUyCGmYAIuErrr3QDA94eoEVhgr0q1jaFKm4BhHQmoflQmSZ7sBub6KfubUD9mQ0MQf3iwMOgJ%2BidOmSt2TWhadmg8jG35aRUG%2BJRgWpkwqrihzkKAPo8d8USMj8oKAhflV%2FhcLeV3lug2zs%2BDQoP2t7PTkA2N8ZR%2BT%2Fj2vE0gmTXj9jICZdJq18dGpUNYQXhOsfieIqgjDqXykSxXCdDGZku2Dwcuh5RHhdr%2F21F16a7GLDz66Bcy7AaC7hM0Z1ZeHbfyl0FS4SZokgK7dwU02tuonPF%2BtX%2Bqcj%2FOKd9EVyU%2FcmM9Fqkl%2BhWfm%2BFoJYM7izXrU%2BIiRrQTRqmGMMCVir0GOqUB5lHAeBPcCyGiJnNjgqL3bG%2BglfxHIr4M0gxhZJEvp4mGqW6MIMwV8NH4B3rzlMUhROhaa%2Fhij0VPxaIlzs%2BABFsg%2FCapxxG59B4hJSb7HZjs4P5NFHkP0YNfYqmK2vd39l%2F6MGAjEHYi%2FE1bFyFZfJOYdEB1xVBTua7sZ9u13piY4rq5cJuXrLvwKix6fvCrYFuX6yhQ%2BtgOMxIMm87VgtolvOIE&X-Amz-Signature=f75950fc49bb5e686ba50860d48f9c62897bf6048ce94fc31387d7d1d1ef8d41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLOLXCP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDWTpIIN3PILalo6XvL2tlRF91vO3eXDPQkZXKOLYPPawIgJYvT8EWqKj50cjUbkwCYH3VZTWJULFg2ndisHXNUpCMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDE9S5W5B%2FANDrDt9QyrcA0d89j1wIK3pN1Ek1Uyj2n%2B43QrhCN0iXs5Dzu1FAWOgDiOKbRsE2v6i4Kbfnf2YoRUqXPQeBGcFxWcZJzbaasGBU1UY%2BXInDzg2NxNIOaZ2Rby%2FBOvRT0VppihKtNYmpnEM6DV2SMty5eg7jqMwK2S6ZkACty%2B%2BPsPux0q0fvlh81NoWbpOwEb%2BcldVNb%2BIiwc6hXzEQW25ZG%2BIyWLxqMaWVBt6EKHw7MVPHTN96Xhgu1IOpYfdHHZRGyGXrmrnFZF7rKcNVbv%2F1Z3PemqLsBpqS1Ve%2FHX0WlYQ378HTPfUyCGmYAIuErrr3QDA94eoEVhgr0q1jaFKm4BhHQmoflQmSZ7sBub6KfubUD9mQ0MQf3iwMOgJ%2BidOmSt2TWhadmg8jG35aRUG%2BJRgWpkwqrihzkKAPo8d8USMj8oKAhflV%2FhcLeV3lug2zs%2BDQoP2t7PTkA2N8ZR%2BT%2Fj2vE0gmTXj9jICZdJq18dGpUNYQXhOsfieIqgjDqXykSxXCdDGZku2Dwcuh5RHhdr%2F21F16a7GLDz66Bcy7AaC7hM0Z1ZeHbfyl0FS4SZokgK7dwU02tuonPF%2BtX%2Bqcj%2FOKd9EVyU%2FcmM9Fqkl%2BhWfm%2BFoJYM7izXrU%2BIiRrQTRqmGMMCVir0GOqUB5lHAeBPcCyGiJnNjgqL3bG%2BglfxHIr4M0gxhZJEvp4mGqW6MIMwV8NH4B3rzlMUhROhaa%2Fhij0VPxaIlzs%2BABFsg%2FCapxxG59B4hJSb7HZjs4P5NFHkP0YNfYqmK2vd39l%2F6MGAjEHYi%2FE1bFyFZfJOYdEB1xVBTua7sZ9u13piY4rq5cJuXrLvwKix6fvCrYFuX6yhQ%2BtgOMxIMm87VgtolvOIE&X-Amz-Signature=e3c7afb91bc1b2d86822b22a10bdad66f498433cc4c83a77b864d80a4b8029ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BLOLXCP%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDWTpIIN3PILalo6XvL2tlRF91vO3eXDPQkZXKOLYPPawIgJYvT8EWqKj50cjUbkwCYH3VZTWJULFg2ndisHXNUpCMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDE9S5W5B%2FANDrDt9QyrcA0d89j1wIK3pN1Ek1Uyj2n%2B43QrhCN0iXs5Dzu1FAWOgDiOKbRsE2v6i4Kbfnf2YoRUqXPQeBGcFxWcZJzbaasGBU1UY%2BXInDzg2NxNIOaZ2Rby%2FBOvRT0VppihKtNYmpnEM6DV2SMty5eg7jqMwK2S6ZkACty%2B%2BPsPux0q0fvlh81NoWbpOwEb%2BcldVNb%2BIiwc6hXzEQW25ZG%2BIyWLxqMaWVBt6EKHw7MVPHTN96Xhgu1IOpYfdHHZRGyGXrmrnFZF7rKcNVbv%2F1Z3PemqLsBpqS1Ve%2FHX0WlYQ378HTPfUyCGmYAIuErrr3QDA94eoEVhgr0q1jaFKm4BhHQmoflQmSZ7sBub6KfubUD9mQ0MQf3iwMOgJ%2BidOmSt2TWhadmg8jG35aRUG%2BJRgWpkwqrihzkKAPo8d8USMj8oKAhflV%2FhcLeV3lug2zs%2BDQoP2t7PTkA2N8ZR%2BT%2Fj2vE0gmTXj9jICZdJq18dGpUNYQXhOsfieIqgjDqXykSxXCdDGZku2Dwcuh5RHhdr%2F21F16a7GLDz66Bcy7AaC7hM0Z1ZeHbfyl0FS4SZokgK7dwU02tuonPF%2BtX%2Bqcj%2FOKd9EVyU%2FcmM9Fqkl%2BhWfm%2BFoJYM7izXrU%2BIiRrQTRqmGMMCVir0GOqUB5lHAeBPcCyGiJnNjgqL3bG%2BglfxHIr4M0gxhZJEvp4mGqW6MIMwV8NH4B3rzlMUhROhaa%2Fhij0VPxaIlzs%2BABFsg%2FCapxxG59B4hJSb7HZjs4P5NFHkP0YNfYqmK2vd39l%2F6MGAjEHYi%2FE1bFyFZfJOYdEB1xVBTua7sZ9u13piY4rq5cJuXrLvwKix6fvCrYFuX6yhQ%2BtgOMxIMm87VgtolvOIE&X-Amz-Signature=df677f8901e38e4d0a3d32948f910eb32265218cf126554320ef3da081d669df&X-Amz-SignedHeaders=host&x-id=GetObject)
