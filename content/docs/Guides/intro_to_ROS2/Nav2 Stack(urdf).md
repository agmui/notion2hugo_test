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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G3YNYQQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEjiOzWR0WUuWHWk579nqD%2FxPaNozZ%2F1jMbU0zBQFWFaAiEAy9ha9b9Xcb4FWKeBaqKHQPmx9lb%2FC9yx5JQyH5J4TqYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2FA47LulJkSXt6qyrcAzJ7%2BgYQwz4VmTYzR9MRr2sC48eiu7KdfZ2XKkGDy1UfCLPPGIhYREWdNbUXt%2Fx8WiVE1SUJ5TnMBSvcxyVNTIduO1SgmbboW6XtQsspiO8thZczImapSecyyH4sQQb3SvnL06TxtxuxFRRSFuMpZqoYxk64RaDtARWhYFnizdbDmclWOrBM%2Bjj8ZhNu1ZZ3wuqsY5nCy6DoIJl%2Bhss38L3KAIeMqlZXVPVqm1mCL62%2FTjFK4vSLllu93ve2hj4lmFlpuPpT1MHfXtxOlA49hTNsrSWuOrcCgzKH8Vg6U2Cku3ED%2BhB1tg7qEXZFDgwDdXJEUGhUCTSE0qM5Qlo0EK0AbrFCOUR%2FkFO%2B4%2BSrB7EY4AsYp8mxdH%2F0iu4IwzgdHwk9Z8qGyDq8tTs%2FqGJz8VGOqlOny3sL42aeDHLZBjdYcVnavDsjXbSZnVnCTlku0RqUAugOdh37t%2BX6q33TTubUR%2BN8%2BOf%2FznR0vE1X9wPMmlk8nFIhzI2FspdQN0mIZ%2FeT7fwmoGLjS7knXFoPvwHAz4h0cV8UlMZr50cLGxJJKvYkDoAzAUu5j1hSRRdEvq2qr5IwJzEnlGOoxnC37fQHMhgHAQssFW68neXDRf7Zaw%2BIzk9nWfKL9f8EMIjJt78GOqUBd2Xd7xaKr5nxlT5VxlvdkSyOgrtiRQiUP7BSSOY6TArgacxEU2qKwuts%2FMkkC9eiQ%2F1Hc4syql25sbB4VdEtj%2FsjFlYIg6olIQq1POxSgVrNW1xQV5WyThkBq3A0iik7Jay%2BqsnsGoQc4V9fa0phX5I0bxScYpZE0V8HlI8WAsJYiWG%2BUC3ct16R3BhgK%2BDB0b4u70Mym9xa%2B3VpCEzFlCsG7Zr6&X-Amz-Signature=2a300e62a3aee6716cd74ec1e8a39b65184b827940c9d1fba03c228b0ed452bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G3YNYQQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEjiOzWR0WUuWHWk579nqD%2FxPaNozZ%2F1jMbU0zBQFWFaAiEAy9ha9b9Xcb4FWKeBaqKHQPmx9lb%2FC9yx5JQyH5J4TqYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2FA47LulJkSXt6qyrcAzJ7%2BgYQwz4VmTYzR9MRr2sC48eiu7KdfZ2XKkGDy1UfCLPPGIhYREWdNbUXt%2Fx8WiVE1SUJ5TnMBSvcxyVNTIduO1SgmbboW6XtQsspiO8thZczImapSecyyH4sQQb3SvnL06TxtxuxFRRSFuMpZqoYxk64RaDtARWhYFnizdbDmclWOrBM%2Bjj8ZhNu1ZZ3wuqsY5nCy6DoIJl%2Bhss38L3KAIeMqlZXVPVqm1mCL62%2FTjFK4vSLllu93ve2hj4lmFlpuPpT1MHfXtxOlA49hTNsrSWuOrcCgzKH8Vg6U2Cku3ED%2BhB1tg7qEXZFDgwDdXJEUGhUCTSE0qM5Qlo0EK0AbrFCOUR%2FkFO%2B4%2BSrB7EY4AsYp8mxdH%2F0iu4IwzgdHwk9Z8qGyDq8tTs%2FqGJz8VGOqlOny3sL42aeDHLZBjdYcVnavDsjXbSZnVnCTlku0RqUAugOdh37t%2BX6q33TTubUR%2BN8%2BOf%2FznR0vE1X9wPMmlk8nFIhzI2FspdQN0mIZ%2FeT7fwmoGLjS7knXFoPvwHAz4h0cV8UlMZr50cLGxJJKvYkDoAzAUu5j1hSRRdEvq2qr5IwJzEnlGOoxnC37fQHMhgHAQssFW68neXDRf7Zaw%2BIzk9nWfKL9f8EMIjJt78GOqUBd2Xd7xaKr5nxlT5VxlvdkSyOgrtiRQiUP7BSSOY6TArgacxEU2qKwuts%2FMkkC9eiQ%2F1Hc4syql25sbB4VdEtj%2FsjFlYIg6olIQq1POxSgVrNW1xQV5WyThkBq3A0iik7Jay%2BqsnsGoQc4V9fa0phX5I0bxScYpZE0V8HlI8WAsJYiWG%2BUC3ct16R3BhgK%2BDB0b4u70Mym9xa%2B3VpCEzFlCsG7Zr6&X-Amz-Signature=ee1af43708e34e2ba1541dedad81bcea45a813bdc6584f924c65813eed8a2e53&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G3YNYQQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEjiOzWR0WUuWHWk579nqD%2FxPaNozZ%2F1jMbU0zBQFWFaAiEAy9ha9b9Xcb4FWKeBaqKHQPmx9lb%2FC9yx5JQyH5J4TqYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2FA47LulJkSXt6qyrcAzJ7%2BgYQwz4VmTYzR9MRr2sC48eiu7KdfZ2XKkGDy1UfCLPPGIhYREWdNbUXt%2Fx8WiVE1SUJ5TnMBSvcxyVNTIduO1SgmbboW6XtQsspiO8thZczImapSecyyH4sQQb3SvnL06TxtxuxFRRSFuMpZqoYxk64RaDtARWhYFnizdbDmclWOrBM%2Bjj8ZhNu1ZZ3wuqsY5nCy6DoIJl%2Bhss38L3KAIeMqlZXVPVqm1mCL62%2FTjFK4vSLllu93ve2hj4lmFlpuPpT1MHfXtxOlA49hTNsrSWuOrcCgzKH8Vg6U2Cku3ED%2BhB1tg7qEXZFDgwDdXJEUGhUCTSE0qM5Qlo0EK0AbrFCOUR%2FkFO%2B4%2BSrB7EY4AsYp8mxdH%2F0iu4IwzgdHwk9Z8qGyDq8tTs%2FqGJz8VGOqlOny3sL42aeDHLZBjdYcVnavDsjXbSZnVnCTlku0RqUAugOdh37t%2BX6q33TTubUR%2BN8%2BOf%2FznR0vE1X9wPMmlk8nFIhzI2FspdQN0mIZ%2FeT7fwmoGLjS7knXFoPvwHAz4h0cV8UlMZr50cLGxJJKvYkDoAzAUu5j1hSRRdEvq2qr5IwJzEnlGOoxnC37fQHMhgHAQssFW68neXDRf7Zaw%2BIzk9nWfKL9f8EMIjJt78GOqUBd2Xd7xaKr5nxlT5VxlvdkSyOgrtiRQiUP7BSSOY6TArgacxEU2qKwuts%2FMkkC9eiQ%2F1Hc4syql25sbB4VdEtj%2FsjFlYIg6olIQq1POxSgVrNW1xQV5WyThkBq3A0iik7Jay%2BqsnsGoQc4V9fa0phX5I0bxScYpZE0V8HlI8WAsJYiWG%2BUC3ct16R3BhgK%2BDB0b4u70Mym9xa%2B3VpCEzFlCsG7Zr6&X-Amz-Signature=d92abc5a28f58304582f7dd6e51cc19f4bdadd0acc8394d972fa4f694e2fa697&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G3YNYQQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEjiOzWR0WUuWHWk579nqD%2FxPaNozZ%2F1jMbU0zBQFWFaAiEAy9ha9b9Xcb4FWKeBaqKHQPmx9lb%2FC9yx5JQyH5J4TqYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2FA47LulJkSXt6qyrcAzJ7%2BgYQwz4VmTYzR9MRr2sC48eiu7KdfZ2XKkGDy1UfCLPPGIhYREWdNbUXt%2Fx8WiVE1SUJ5TnMBSvcxyVNTIduO1SgmbboW6XtQsspiO8thZczImapSecyyH4sQQb3SvnL06TxtxuxFRRSFuMpZqoYxk64RaDtARWhYFnizdbDmclWOrBM%2Bjj8ZhNu1ZZ3wuqsY5nCy6DoIJl%2Bhss38L3KAIeMqlZXVPVqm1mCL62%2FTjFK4vSLllu93ve2hj4lmFlpuPpT1MHfXtxOlA49hTNsrSWuOrcCgzKH8Vg6U2Cku3ED%2BhB1tg7qEXZFDgwDdXJEUGhUCTSE0qM5Qlo0EK0AbrFCOUR%2FkFO%2B4%2BSrB7EY4AsYp8mxdH%2F0iu4IwzgdHwk9Z8qGyDq8tTs%2FqGJz8VGOqlOny3sL42aeDHLZBjdYcVnavDsjXbSZnVnCTlku0RqUAugOdh37t%2BX6q33TTubUR%2BN8%2BOf%2FznR0vE1X9wPMmlk8nFIhzI2FspdQN0mIZ%2FeT7fwmoGLjS7knXFoPvwHAz4h0cV8UlMZr50cLGxJJKvYkDoAzAUu5j1hSRRdEvq2qr5IwJzEnlGOoxnC37fQHMhgHAQssFW68neXDRf7Zaw%2BIzk9nWfKL9f8EMIjJt78GOqUBd2Xd7xaKr5nxlT5VxlvdkSyOgrtiRQiUP7BSSOY6TArgacxEU2qKwuts%2FMkkC9eiQ%2F1Hc4syql25sbB4VdEtj%2FsjFlYIg6olIQq1POxSgVrNW1xQV5WyThkBq3A0iik7Jay%2BqsnsGoQc4V9fa0phX5I0bxScYpZE0V8HlI8WAsJYiWG%2BUC3ct16R3BhgK%2BDB0b4u70Mym9xa%2B3VpCEzFlCsG7Zr6&X-Amz-Signature=fedb73c18fc8ecc02bfd1f47356cfdd4d972defe7265220e4920b8306c534bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G3YNYQQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEjiOzWR0WUuWHWk579nqD%2FxPaNozZ%2F1jMbU0zBQFWFaAiEAy9ha9b9Xcb4FWKeBaqKHQPmx9lb%2FC9yx5JQyH5J4TqYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2FA47LulJkSXt6qyrcAzJ7%2BgYQwz4VmTYzR9MRr2sC48eiu7KdfZ2XKkGDy1UfCLPPGIhYREWdNbUXt%2Fx8WiVE1SUJ5TnMBSvcxyVNTIduO1SgmbboW6XtQsspiO8thZczImapSecyyH4sQQb3SvnL06TxtxuxFRRSFuMpZqoYxk64RaDtARWhYFnizdbDmclWOrBM%2Bjj8ZhNu1ZZ3wuqsY5nCy6DoIJl%2Bhss38L3KAIeMqlZXVPVqm1mCL62%2FTjFK4vSLllu93ve2hj4lmFlpuPpT1MHfXtxOlA49hTNsrSWuOrcCgzKH8Vg6U2Cku3ED%2BhB1tg7qEXZFDgwDdXJEUGhUCTSE0qM5Qlo0EK0AbrFCOUR%2FkFO%2B4%2BSrB7EY4AsYp8mxdH%2F0iu4IwzgdHwk9Z8qGyDq8tTs%2FqGJz8VGOqlOny3sL42aeDHLZBjdYcVnavDsjXbSZnVnCTlku0RqUAugOdh37t%2BX6q33TTubUR%2BN8%2BOf%2FznR0vE1X9wPMmlk8nFIhzI2FspdQN0mIZ%2FeT7fwmoGLjS7knXFoPvwHAz4h0cV8UlMZr50cLGxJJKvYkDoAzAUu5j1hSRRdEvq2qr5IwJzEnlGOoxnC37fQHMhgHAQssFW68neXDRf7Zaw%2BIzk9nWfKL9f8EMIjJt78GOqUBd2Xd7xaKr5nxlT5VxlvdkSyOgrtiRQiUP7BSSOY6TArgacxEU2qKwuts%2FMkkC9eiQ%2F1Hc4syql25sbB4VdEtj%2FsjFlYIg6olIQq1POxSgVrNW1xQV5WyThkBq3A0iik7Jay%2BqsnsGoQc4V9fa0phX5I0bxScYpZE0V8HlI8WAsJYiWG%2BUC3ct16R3BhgK%2BDB0b4u70Mym9xa%2B3VpCEzFlCsG7Zr6&X-Amz-Signature=421a74c845f9d4348e8b49d9ed1a448709bfcacb4af402a65948d38d1a30c22d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G3YNYQQ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEjiOzWR0WUuWHWk579nqD%2FxPaNozZ%2F1jMbU0zBQFWFaAiEAy9ha9b9Xcb4FWKeBaqKHQPmx9lb%2FC9yx5JQyH5J4TqYqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNC%2FA47LulJkSXt6qyrcAzJ7%2BgYQwz4VmTYzR9MRr2sC48eiu7KdfZ2XKkGDy1UfCLPPGIhYREWdNbUXt%2Fx8WiVE1SUJ5TnMBSvcxyVNTIduO1SgmbboW6XtQsspiO8thZczImapSecyyH4sQQb3SvnL06TxtxuxFRRSFuMpZqoYxk64RaDtARWhYFnizdbDmclWOrBM%2Bjj8ZhNu1ZZ3wuqsY5nCy6DoIJl%2Bhss38L3KAIeMqlZXVPVqm1mCL62%2FTjFK4vSLllu93ve2hj4lmFlpuPpT1MHfXtxOlA49hTNsrSWuOrcCgzKH8Vg6U2Cku3ED%2BhB1tg7qEXZFDgwDdXJEUGhUCTSE0qM5Qlo0EK0AbrFCOUR%2FkFO%2B4%2BSrB7EY4AsYp8mxdH%2F0iu4IwzgdHwk9Z8qGyDq8tTs%2FqGJz8VGOqlOny3sL42aeDHLZBjdYcVnavDsjXbSZnVnCTlku0RqUAugOdh37t%2BX6q33TTubUR%2BN8%2BOf%2FznR0vE1X9wPMmlk8nFIhzI2FspdQN0mIZ%2FeT7fwmoGLjS7knXFoPvwHAz4h0cV8UlMZr50cLGxJJKvYkDoAzAUu5j1hSRRdEvq2qr5IwJzEnlGOoxnC37fQHMhgHAQssFW68neXDRf7Zaw%2BIzk9nWfKL9f8EMIjJt78GOqUBd2Xd7xaKr5nxlT5VxlvdkSyOgrtiRQiUP7BSSOY6TArgacxEU2qKwuts%2FMkkC9eiQ%2F1Hc4syql25sbB4VdEtj%2FsjFlYIg6olIQq1POxSgVrNW1xQV5WyThkBq3A0iik7Jay%2BqsnsGoQc4V9fa0phX5I0bxScYpZE0V8HlI8WAsJYiWG%2BUC3ct16R3BhgK%2BDB0b4u70Mym9xa%2B3VpCEzFlCsG7Zr6&X-Amz-Signature=5f2e3482e3356179553cea659694a7e0696d235e72dec619eae1935ac10779b7&X-Amz-SignedHeaders=host&x-id=GetObject)
