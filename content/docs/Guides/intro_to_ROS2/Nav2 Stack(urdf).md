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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VTJRSV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxCZ35ZTgWkfmg5jQS%2F8uGYC4Na3JDfo8pcyMGk6gjNAiEA4mKeAq0dsHt1rjisOi%2BMBUV1tw%2BaPAqdwdi6Mi7auW8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIBEknbpYIDy7DCzyrcAxfrd70fduCEY4RlH9uR2p%2FTL%2BZGaASVwmei91cwdF1v6%2BGyj%2B6pFPo1RNP0cZMTderE%2FJxvSfjSR75qbAW6jWYcH7oLaU5kRPIRSq8A%2BQFCzwMw9FCoTJDVORNmhxvfVhyGYFJL%2Fw1Kncp3aiW3bKdFIrZoonXGTn7g5wJwqgZmB%2FL9oFZwJ9BofK8lTi2L08oMj1Hq3zwP3TbU1y0y5pvqEYEzegvq2fDSAq3XhDOvTP%2FquNsIG6U%2BiVu1ZtLIPVmhl0FOpTtmue%2BFRdVLDkkmTdxzXhjWz26kHfshxXJDrFbQNb2c6kZmJumDiLEKprIbgIAnKGEJjXy7y%2FUXBNwSHgkCMmpwBVDrr2zCUVllSQKQYeGvlmWFeA7rZJwYgJdFEGGK2tM38h0c5ZdIjLzBx0H7ktz0OIdByyByYpYPGJsmCqfvTdMVWxew4GBIxtXfvIElMkNQ7CI%2BwkkWoCyQ5rVfHuZNwSrzYUgvmUmX7jXOnaQTBczc3uYdguZYEWGVVDgu8DZxJu8YQjbwZhKvNSVSD3HsINlsEPgiW0jIxetYlAhk1lahGUDOWKBSzwqH4B9CIMWkgBnwvFYhK2f%2FjG05yHQ1UtO9x2YhkEMY2ub3lRwHPMK1G5qsMNyWpMIGOqUBWaGcSe3%2B1mZjM%2FJ0h2v1dIvefn3%2Fuwa%2FpyJhNpktdgwtivtHyeHcfUNNEV%2FMFPZX8iSmP3mmItulwHWYco4HUmyXXJtEpuWCOv%2BBgc4RMXRxmiuKFHytX%2BFK3mrA%2FOfR4D5oMPjAq23z60uHzPkj3gKDPmDcFPXq3XRArnDFvCmUYAwK0tPJoUm5YmK3UdaskCJ%2Fqv4dhKlyAscNvGp8mbVJmSVg&X-Amz-Signature=dd137168246d53e1d011548187298873a218e3b1c78521558a60c062535758a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VTJRSV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxCZ35ZTgWkfmg5jQS%2F8uGYC4Na3JDfo8pcyMGk6gjNAiEA4mKeAq0dsHt1rjisOi%2BMBUV1tw%2BaPAqdwdi6Mi7auW8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIBEknbpYIDy7DCzyrcAxfrd70fduCEY4RlH9uR2p%2FTL%2BZGaASVwmei91cwdF1v6%2BGyj%2B6pFPo1RNP0cZMTderE%2FJxvSfjSR75qbAW6jWYcH7oLaU5kRPIRSq8A%2BQFCzwMw9FCoTJDVORNmhxvfVhyGYFJL%2Fw1Kncp3aiW3bKdFIrZoonXGTn7g5wJwqgZmB%2FL9oFZwJ9BofK8lTi2L08oMj1Hq3zwP3TbU1y0y5pvqEYEzegvq2fDSAq3XhDOvTP%2FquNsIG6U%2BiVu1ZtLIPVmhl0FOpTtmue%2BFRdVLDkkmTdxzXhjWz26kHfshxXJDrFbQNb2c6kZmJumDiLEKprIbgIAnKGEJjXy7y%2FUXBNwSHgkCMmpwBVDrr2zCUVllSQKQYeGvlmWFeA7rZJwYgJdFEGGK2tM38h0c5ZdIjLzBx0H7ktz0OIdByyByYpYPGJsmCqfvTdMVWxew4GBIxtXfvIElMkNQ7CI%2BwkkWoCyQ5rVfHuZNwSrzYUgvmUmX7jXOnaQTBczc3uYdguZYEWGVVDgu8DZxJu8YQjbwZhKvNSVSD3HsINlsEPgiW0jIxetYlAhk1lahGUDOWKBSzwqH4B9CIMWkgBnwvFYhK2f%2FjG05yHQ1UtO9x2YhkEMY2ub3lRwHPMK1G5qsMNyWpMIGOqUBWaGcSe3%2B1mZjM%2FJ0h2v1dIvefn3%2Fuwa%2FpyJhNpktdgwtivtHyeHcfUNNEV%2FMFPZX8iSmP3mmItulwHWYco4HUmyXXJtEpuWCOv%2BBgc4RMXRxmiuKFHytX%2BFK3mrA%2FOfR4D5oMPjAq23z60uHzPkj3gKDPmDcFPXq3XRArnDFvCmUYAwK0tPJoUm5YmK3UdaskCJ%2Fqv4dhKlyAscNvGp8mbVJmSVg&X-Amz-Signature=dd8ffa8d0d29c8d442c92bd039e5bd39632fe981eed84aa646e78c9d8bf51480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VTJRSV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxCZ35ZTgWkfmg5jQS%2F8uGYC4Na3JDfo8pcyMGk6gjNAiEA4mKeAq0dsHt1rjisOi%2BMBUV1tw%2BaPAqdwdi6Mi7auW8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIBEknbpYIDy7DCzyrcAxfrd70fduCEY4RlH9uR2p%2FTL%2BZGaASVwmei91cwdF1v6%2BGyj%2B6pFPo1RNP0cZMTderE%2FJxvSfjSR75qbAW6jWYcH7oLaU5kRPIRSq8A%2BQFCzwMw9FCoTJDVORNmhxvfVhyGYFJL%2Fw1Kncp3aiW3bKdFIrZoonXGTn7g5wJwqgZmB%2FL9oFZwJ9BofK8lTi2L08oMj1Hq3zwP3TbU1y0y5pvqEYEzegvq2fDSAq3XhDOvTP%2FquNsIG6U%2BiVu1ZtLIPVmhl0FOpTtmue%2BFRdVLDkkmTdxzXhjWz26kHfshxXJDrFbQNb2c6kZmJumDiLEKprIbgIAnKGEJjXy7y%2FUXBNwSHgkCMmpwBVDrr2zCUVllSQKQYeGvlmWFeA7rZJwYgJdFEGGK2tM38h0c5ZdIjLzBx0H7ktz0OIdByyByYpYPGJsmCqfvTdMVWxew4GBIxtXfvIElMkNQ7CI%2BwkkWoCyQ5rVfHuZNwSrzYUgvmUmX7jXOnaQTBczc3uYdguZYEWGVVDgu8DZxJu8YQjbwZhKvNSVSD3HsINlsEPgiW0jIxetYlAhk1lahGUDOWKBSzwqH4B9CIMWkgBnwvFYhK2f%2FjG05yHQ1UtO9x2YhkEMY2ub3lRwHPMK1G5qsMNyWpMIGOqUBWaGcSe3%2B1mZjM%2FJ0h2v1dIvefn3%2Fuwa%2FpyJhNpktdgwtivtHyeHcfUNNEV%2FMFPZX8iSmP3mmItulwHWYco4HUmyXXJtEpuWCOv%2BBgc4RMXRxmiuKFHytX%2BFK3mrA%2FOfR4D5oMPjAq23z60uHzPkj3gKDPmDcFPXq3XRArnDFvCmUYAwK0tPJoUm5YmK3UdaskCJ%2Fqv4dhKlyAscNvGp8mbVJmSVg&X-Amz-Signature=139c23b1993730b70d9b02a437c9f3dc83dc2ae0aec4414cae6f104a0d7a7424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VTJRSV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxCZ35ZTgWkfmg5jQS%2F8uGYC4Na3JDfo8pcyMGk6gjNAiEA4mKeAq0dsHt1rjisOi%2BMBUV1tw%2BaPAqdwdi6Mi7auW8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIBEknbpYIDy7DCzyrcAxfrd70fduCEY4RlH9uR2p%2FTL%2BZGaASVwmei91cwdF1v6%2BGyj%2B6pFPo1RNP0cZMTderE%2FJxvSfjSR75qbAW6jWYcH7oLaU5kRPIRSq8A%2BQFCzwMw9FCoTJDVORNmhxvfVhyGYFJL%2Fw1Kncp3aiW3bKdFIrZoonXGTn7g5wJwqgZmB%2FL9oFZwJ9BofK8lTi2L08oMj1Hq3zwP3TbU1y0y5pvqEYEzegvq2fDSAq3XhDOvTP%2FquNsIG6U%2BiVu1ZtLIPVmhl0FOpTtmue%2BFRdVLDkkmTdxzXhjWz26kHfshxXJDrFbQNb2c6kZmJumDiLEKprIbgIAnKGEJjXy7y%2FUXBNwSHgkCMmpwBVDrr2zCUVllSQKQYeGvlmWFeA7rZJwYgJdFEGGK2tM38h0c5ZdIjLzBx0H7ktz0OIdByyByYpYPGJsmCqfvTdMVWxew4GBIxtXfvIElMkNQ7CI%2BwkkWoCyQ5rVfHuZNwSrzYUgvmUmX7jXOnaQTBczc3uYdguZYEWGVVDgu8DZxJu8YQjbwZhKvNSVSD3HsINlsEPgiW0jIxetYlAhk1lahGUDOWKBSzwqH4B9CIMWkgBnwvFYhK2f%2FjG05yHQ1UtO9x2YhkEMY2ub3lRwHPMK1G5qsMNyWpMIGOqUBWaGcSe3%2B1mZjM%2FJ0h2v1dIvefn3%2Fuwa%2FpyJhNpktdgwtivtHyeHcfUNNEV%2FMFPZX8iSmP3mmItulwHWYco4HUmyXXJtEpuWCOv%2BBgc4RMXRxmiuKFHytX%2BFK3mrA%2FOfR4D5oMPjAq23z60uHzPkj3gKDPmDcFPXq3XRArnDFvCmUYAwK0tPJoUm5YmK3UdaskCJ%2Fqv4dhKlyAscNvGp8mbVJmSVg&X-Amz-Signature=e2ac7092ac288ef95fb4b7974eb66e3baedb4625f2b98d22ea54028a0d795fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VTJRSV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxCZ35ZTgWkfmg5jQS%2F8uGYC4Na3JDfo8pcyMGk6gjNAiEA4mKeAq0dsHt1rjisOi%2BMBUV1tw%2BaPAqdwdi6Mi7auW8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIBEknbpYIDy7DCzyrcAxfrd70fduCEY4RlH9uR2p%2FTL%2BZGaASVwmei91cwdF1v6%2BGyj%2B6pFPo1RNP0cZMTderE%2FJxvSfjSR75qbAW6jWYcH7oLaU5kRPIRSq8A%2BQFCzwMw9FCoTJDVORNmhxvfVhyGYFJL%2Fw1Kncp3aiW3bKdFIrZoonXGTn7g5wJwqgZmB%2FL9oFZwJ9BofK8lTi2L08oMj1Hq3zwP3TbU1y0y5pvqEYEzegvq2fDSAq3XhDOvTP%2FquNsIG6U%2BiVu1ZtLIPVmhl0FOpTtmue%2BFRdVLDkkmTdxzXhjWz26kHfshxXJDrFbQNb2c6kZmJumDiLEKprIbgIAnKGEJjXy7y%2FUXBNwSHgkCMmpwBVDrr2zCUVllSQKQYeGvlmWFeA7rZJwYgJdFEGGK2tM38h0c5ZdIjLzBx0H7ktz0OIdByyByYpYPGJsmCqfvTdMVWxew4GBIxtXfvIElMkNQ7CI%2BwkkWoCyQ5rVfHuZNwSrzYUgvmUmX7jXOnaQTBczc3uYdguZYEWGVVDgu8DZxJu8YQjbwZhKvNSVSD3HsINlsEPgiW0jIxetYlAhk1lahGUDOWKBSzwqH4B9CIMWkgBnwvFYhK2f%2FjG05yHQ1UtO9x2YhkEMY2ub3lRwHPMK1G5qsMNyWpMIGOqUBWaGcSe3%2B1mZjM%2FJ0h2v1dIvefn3%2Fuwa%2FpyJhNpktdgwtivtHyeHcfUNNEV%2FMFPZX8iSmP3mmItulwHWYco4HUmyXXJtEpuWCOv%2BBgc4RMXRxmiuKFHytX%2BFK3mrA%2FOfR4D5oMPjAq23z60uHzPkj3gKDPmDcFPXq3XRArnDFvCmUYAwK0tPJoUm5YmK3UdaskCJ%2Fqv4dhKlyAscNvGp8mbVJmSVg&X-Amz-Signature=111bff64c054b4782a12e15a64483b559be4b9b74a78c9c022d40fec227d1243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VTJRSV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxCZ35ZTgWkfmg5jQS%2F8uGYC4Na3JDfo8pcyMGk6gjNAiEA4mKeAq0dsHt1rjisOi%2BMBUV1tw%2BaPAqdwdi6Mi7auW8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIBEknbpYIDy7DCzyrcAxfrd70fduCEY4RlH9uR2p%2FTL%2BZGaASVwmei91cwdF1v6%2BGyj%2B6pFPo1RNP0cZMTderE%2FJxvSfjSR75qbAW6jWYcH7oLaU5kRPIRSq8A%2BQFCzwMw9FCoTJDVORNmhxvfVhyGYFJL%2Fw1Kncp3aiW3bKdFIrZoonXGTn7g5wJwqgZmB%2FL9oFZwJ9BofK8lTi2L08oMj1Hq3zwP3TbU1y0y5pvqEYEzegvq2fDSAq3XhDOvTP%2FquNsIG6U%2BiVu1ZtLIPVmhl0FOpTtmue%2BFRdVLDkkmTdxzXhjWz26kHfshxXJDrFbQNb2c6kZmJumDiLEKprIbgIAnKGEJjXy7y%2FUXBNwSHgkCMmpwBVDrr2zCUVllSQKQYeGvlmWFeA7rZJwYgJdFEGGK2tM38h0c5ZdIjLzBx0H7ktz0OIdByyByYpYPGJsmCqfvTdMVWxew4GBIxtXfvIElMkNQ7CI%2BwkkWoCyQ5rVfHuZNwSrzYUgvmUmX7jXOnaQTBczc3uYdguZYEWGVVDgu8DZxJu8YQjbwZhKvNSVSD3HsINlsEPgiW0jIxetYlAhk1lahGUDOWKBSzwqH4B9CIMWkgBnwvFYhK2f%2FjG05yHQ1UtO9x2YhkEMY2ub3lRwHPMK1G5qsMNyWpMIGOqUBWaGcSe3%2B1mZjM%2FJ0h2v1dIvefn3%2Fuwa%2FpyJhNpktdgwtivtHyeHcfUNNEV%2FMFPZX8iSmP3mmItulwHWYco4HUmyXXJtEpuWCOv%2BBgc4RMXRxmiuKFHytX%2BFK3mrA%2FOfR4D5oMPjAq23z60uHzPkj3gKDPmDcFPXq3XRArnDFvCmUYAwK0tPJoUm5YmK3UdaskCJ%2Fqv4dhKlyAscNvGp8mbVJmSVg&X-Amz-Signature=56315693156abf2f5380dde01af062eb11f7234dba59c35292d752ece61eda3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
