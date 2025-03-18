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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65AGFJU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZy120Sv0jlY9Y0TS7Hu2NnNrIv3LrEnTesCzQxBLnQAiEA%2Fv2qLQedYmSxgplLK89DXPRjsOONA%2FoGxMn%2BoG5a5SMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNefKSVoXIZE%2FR%2BxKSrcA7kNu%2BDKNOOHiaNFVRSMH47g0eo5PWlhZsL2vewUwtpjOsGwzWBLpwkhaNG9GxR4AelXefK2ySNMQddsWLB62R%2FeggA8BTEOXR%2FMmGtXPa8mqLXwl7huN1km0p8%2BgEer4tkclaNMpRbhfJcnH5jXpZL3wpYkcPzobixejJcoUE%2FnXZJmbKl%2FkWkOaPFvUFIkAvUMJAS1xDTtN7%2F4w36b0zB1NZgFqWfocju6RytUE3AOYS0Bxr91YpIjfh2Ooxb1q%2Btugr0cZv3wBwff%2BXOVgYJMInDoBugZHxnQGt593YY8CFPg8GaC%2BRbUZp6nxohAT4PLWR43HMcb53pKrTb3Z6RkHlx%2FwuYjpOQ1zeQPezRl9YfUJwYqzX9x7tjZALkjW6s5v2QP5FGDnreEyyzTPXuqXKNh%2BZmlJuFYEnJ7v1hzSawl2uQ6%2FpY4%2B8yV6mNj%2BEkKOgcNDNzo4yU%2BStR92fd4KAw3VI2IwGX4BUv%2FmjEMQbZYFJBZr6eHHG9Iutj%2FB5DdQY8HIHatssD20%2FounLIuJ27tSKU0myx0RgBSuwA6mfdVb3d0%2B2wbrvr9b9ScYjSgjylGy8Q3y1Lxd3jI5krMhNJrv8qQyaEqnARfnZyFJhzxA7TbzKO6V8WrMN%2BH5L4GOqUBjwICXYITLdwv8PRFA81yzr2eL5eCf1296IXLcy0BtvdqUs2TAJgnDYBCe68ThFcMzyh2eE27x4i4BpAdHZgxmQwLUQlYmd1DjS69g9dCciUt7ZdlYiCgvHo5MiF%2F%2F3wbDT%2FwBEeZykIFl3YpQjD6iY5sh4%2FiUqaEbADOruAIHknLJpuUIkzlqcczsnS6PSVQkvjTWUHZfXusQAnk%2FjxPf9KiFY4P&X-Amz-Signature=0c3f5fe1650ca3f957ad90abd8b72987bafb0b8f7750afa21c871dea1ab4b827&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65AGFJU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZy120Sv0jlY9Y0TS7Hu2NnNrIv3LrEnTesCzQxBLnQAiEA%2Fv2qLQedYmSxgplLK89DXPRjsOONA%2FoGxMn%2BoG5a5SMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNefKSVoXIZE%2FR%2BxKSrcA7kNu%2BDKNOOHiaNFVRSMH47g0eo5PWlhZsL2vewUwtpjOsGwzWBLpwkhaNG9GxR4AelXefK2ySNMQddsWLB62R%2FeggA8BTEOXR%2FMmGtXPa8mqLXwl7huN1km0p8%2BgEer4tkclaNMpRbhfJcnH5jXpZL3wpYkcPzobixejJcoUE%2FnXZJmbKl%2FkWkOaPFvUFIkAvUMJAS1xDTtN7%2F4w36b0zB1NZgFqWfocju6RytUE3AOYS0Bxr91YpIjfh2Ooxb1q%2Btugr0cZv3wBwff%2BXOVgYJMInDoBugZHxnQGt593YY8CFPg8GaC%2BRbUZp6nxohAT4PLWR43HMcb53pKrTb3Z6RkHlx%2FwuYjpOQ1zeQPezRl9YfUJwYqzX9x7tjZALkjW6s5v2QP5FGDnreEyyzTPXuqXKNh%2BZmlJuFYEnJ7v1hzSawl2uQ6%2FpY4%2B8yV6mNj%2BEkKOgcNDNzo4yU%2BStR92fd4KAw3VI2IwGX4BUv%2FmjEMQbZYFJBZr6eHHG9Iutj%2FB5DdQY8HIHatssD20%2FounLIuJ27tSKU0myx0RgBSuwA6mfdVb3d0%2B2wbrvr9b9ScYjSgjylGy8Q3y1Lxd3jI5krMhNJrv8qQyaEqnARfnZyFJhzxA7TbzKO6V8WrMN%2BH5L4GOqUBjwICXYITLdwv8PRFA81yzr2eL5eCf1296IXLcy0BtvdqUs2TAJgnDYBCe68ThFcMzyh2eE27x4i4BpAdHZgxmQwLUQlYmd1DjS69g9dCciUt7ZdlYiCgvHo5MiF%2F%2F3wbDT%2FwBEeZykIFl3YpQjD6iY5sh4%2FiUqaEbADOruAIHknLJpuUIkzlqcczsnS6PSVQkvjTWUHZfXusQAnk%2FjxPf9KiFY4P&X-Amz-Signature=78f7fc13377a707300a57918324ff083713679e0a08fb37ee8bc7499d0c0e619&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65AGFJU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZy120Sv0jlY9Y0TS7Hu2NnNrIv3LrEnTesCzQxBLnQAiEA%2Fv2qLQedYmSxgplLK89DXPRjsOONA%2FoGxMn%2BoG5a5SMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNefKSVoXIZE%2FR%2BxKSrcA7kNu%2BDKNOOHiaNFVRSMH47g0eo5PWlhZsL2vewUwtpjOsGwzWBLpwkhaNG9GxR4AelXefK2ySNMQddsWLB62R%2FeggA8BTEOXR%2FMmGtXPa8mqLXwl7huN1km0p8%2BgEer4tkclaNMpRbhfJcnH5jXpZL3wpYkcPzobixejJcoUE%2FnXZJmbKl%2FkWkOaPFvUFIkAvUMJAS1xDTtN7%2F4w36b0zB1NZgFqWfocju6RytUE3AOYS0Bxr91YpIjfh2Ooxb1q%2Btugr0cZv3wBwff%2BXOVgYJMInDoBugZHxnQGt593YY8CFPg8GaC%2BRbUZp6nxohAT4PLWR43HMcb53pKrTb3Z6RkHlx%2FwuYjpOQ1zeQPezRl9YfUJwYqzX9x7tjZALkjW6s5v2QP5FGDnreEyyzTPXuqXKNh%2BZmlJuFYEnJ7v1hzSawl2uQ6%2FpY4%2B8yV6mNj%2BEkKOgcNDNzo4yU%2BStR92fd4KAw3VI2IwGX4BUv%2FmjEMQbZYFJBZr6eHHG9Iutj%2FB5DdQY8HIHatssD20%2FounLIuJ27tSKU0myx0RgBSuwA6mfdVb3d0%2B2wbrvr9b9ScYjSgjylGy8Q3y1Lxd3jI5krMhNJrv8qQyaEqnARfnZyFJhzxA7TbzKO6V8WrMN%2BH5L4GOqUBjwICXYITLdwv8PRFA81yzr2eL5eCf1296IXLcy0BtvdqUs2TAJgnDYBCe68ThFcMzyh2eE27x4i4BpAdHZgxmQwLUQlYmd1DjS69g9dCciUt7ZdlYiCgvHo5MiF%2F%2F3wbDT%2FwBEeZykIFl3YpQjD6iY5sh4%2FiUqaEbADOruAIHknLJpuUIkzlqcczsnS6PSVQkvjTWUHZfXusQAnk%2FjxPf9KiFY4P&X-Amz-Signature=d230f4f6a64d493afca3ac4540c58ee31ef36a29b87cb4be313c9d47291bd5de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65AGFJU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZy120Sv0jlY9Y0TS7Hu2NnNrIv3LrEnTesCzQxBLnQAiEA%2Fv2qLQedYmSxgplLK89DXPRjsOONA%2FoGxMn%2BoG5a5SMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNefKSVoXIZE%2FR%2BxKSrcA7kNu%2BDKNOOHiaNFVRSMH47g0eo5PWlhZsL2vewUwtpjOsGwzWBLpwkhaNG9GxR4AelXefK2ySNMQddsWLB62R%2FeggA8BTEOXR%2FMmGtXPa8mqLXwl7huN1km0p8%2BgEer4tkclaNMpRbhfJcnH5jXpZL3wpYkcPzobixejJcoUE%2FnXZJmbKl%2FkWkOaPFvUFIkAvUMJAS1xDTtN7%2F4w36b0zB1NZgFqWfocju6RytUE3AOYS0Bxr91YpIjfh2Ooxb1q%2Btugr0cZv3wBwff%2BXOVgYJMInDoBugZHxnQGt593YY8CFPg8GaC%2BRbUZp6nxohAT4PLWR43HMcb53pKrTb3Z6RkHlx%2FwuYjpOQ1zeQPezRl9YfUJwYqzX9x7tjZALkjW6s5v2QP5FGDnreEyyzTPXuqXKNh%2BZmlJuFYEnJ7v1hzSawl2uQ6%2FpY4%2B8yV6mNj%2BEkKOgcNDNzo4yU%2BStR92fd4KAw3VI2IwGX4BUv%2FmjEMQbZYFJBZr6eHHG9Iutj%2FB5DdQY8HIHatssD20%2FounLIuJ27tSKU0myx0RgBSuwA6mfdVb3d0%2B2wbrvr9b9ScYjSgjylGy8Q3y1Lxd3jI5krMhNJrv8qQyaEqnARfnZyFJhzxA7TbzKO6V8WrMN%2BH5L4GOqUBjwICXYITLdwv8PRFA81yzr2eL5eCf1296IXLcy0BtvdqUs2TAJgnDYBCe68ThFcMzyh2eE27x4i4BpAdHZgxmQwLUQlYmd1DjS69g9dCciUt7ZdlYiCgvHo5MiF%2F%2F3wbDT%2FwBEeZykIFl3YpQjD6iY5sh4%2FiUqaEbADOruAIHknLJpuUIkzlqcczsnS6PSVQkvjTWUHZfXusQAnk%2FjxPf9KiFY4P&X-Amz-Signature=80af6ba5da657eeb3c16b895bcefb0be4a8ca23c15313bcb60a2757eed179616&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65AGFJU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZy120Sv0jlY9Y0TS7Hu2NnNrIv3LrEnTesCzQxBLnQAiEA%2Fv2qLQedYmSxgplLK89DXPRjsOONA%2FoGxMn%2BoG5a5SMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNefKSVoXIZE%2FR%2BxKSrcA7kNu%2BDKNOOHiaNFVRSMH47g0eo5PWlhZsL2vewUwtpjOsGwzWBLpwkhaNG9GxR4AelXefK2ySNMQddsWLB62R%2FeggA8BTEOXR%2FMmGtXPa8mqLXwl7huN1km0p8%2BgEer4tkclaNMpRbhfJcnH5jXpZL3wpYkcPzobixejJcoUE%2FnXZJmbKl%2FkWkOaPFvUFIkAvUMJAS1xDTtN7%2F4w36b0zB1NZgFqWfocju6RytUE3AOYS0Bxr91YpIjfh2Ooxb1q%2Btugr0cZv3wBwff%2BXOVgYJMInDoBugZHxnQGt593YY8CFPg8GaC%2BRbUZp6nxohAT4PLWR43HMcb53pKrTb3Z6RkHlx%2FwuYjpOQ1zeQPezRl9YfUJwYqzX9x7tjZALkjW6s5v2QP5FGDnreEyyzTPXuqXKNh%2BZmlJuFYEnJ7v1hzSawl2uQ6%2FpY4%2B8yV6mNj%2BEkKOgcNDNzo4yU%2BStR92fd4KAw3VI2IwGX4BUv%2FmjEMQbZYFJBZr6eHHG9Iutj%2FB5DdQY8HIHatssD20%2FounLIuJ27tSKU0myx0RgBSuwA6mfdVb3d0%2B2wbrvr9b9ScYjSgjylGy8Q3y1Lxd3jI5krMhNJrv8qQyaEqnARfnZyFJhzxA7TbzKO6V8WrMN%2BH5L4GOqUBjwICXYITLdwv8PRFA81yzr2eL5eCf1296IXLcy0BtvdqUs2TAJgnDYBCe68ThFcMzyh2eE27x4i4BpAdHZgxmQwLUQlYmd1DjS69g9dCciUt7ZdlYiCgvHo5MiF%2F%2F3wbDT%2FwBEeZykIFl3YpQjD6iY5sh4%2FiUqaEbADOruAIHknLJpuUIkzlqcczsnS6PSVQkvjTWUHZfXusQAnk%2FjxPf9KiFY4P&X-Amz-Signature=7a2c5779020d0f33b3c38a089a126f4d8281def34abd8fa19c24a6138be9e51b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65AGFJU%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZy120Sv0jlY9Y0TS7Hu2NnNrIv3LrEnTesCzQxBLnQAiEA%2Fv2qLQedYmSxgplLK89DXPRjsOONA%2FoGxMn%2BoG5a5SMq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNefKSVoXIZE%2FR%2BxKSrcA7kNu%2BDKNOOHiaNFVRSMH47g0eo5PWlhZsL2vewUwtpjOsGwzWBLpwkhaNG9GxR4AelXefK2ySNMQddsWLB62R%2FeggA8BTEOXR%2FMmGtXPa8mqLXwl7huN1km0p8%2BgEer4tkclaNMpRbhfJcnH5jXpZL3wpYkcPzobixejJcoUE%2FnXZJmbKl%2FkWkOaPFvUFIkAvUMJAS1xDTtN7%2F4w36b0zB1NZgFqWfocju6RytUE3AOYS0Bxr91YpIjfh2Ooxb1q%2Btugr0cZv3wBwff%2BXOVgYJMInDoBugZHxnQGt593YY8CFPg8GaC%2BRbUZp6nxohAT4PLWR43HMcb53pKrTb3Z6RkHlx%2FwuYjpOQ1zeQPezRl9YfUJwYqzX9x7tjZALkjW6s5v2QP5FGDnreEyyzTPXuqXKNh%2BZmlJuFYEnJ7v1hzSawl2uQ6%2FpY4%2B8yV6mNj%2BEkKOgcNDNzo4yU%2BStR92fd4KAw3VI2IwGX4BUv%2FmjEMQbZYFJBZr6eHHG9Iutj%2FB5DdQY8HIHatssD20%2FounLIuJ27tSKU0myx0RgBSuwA6mfdVb3d0%2B2wbrvr9b9ScYjSgjylGy8Q3y1Lxd3jI5krMhNJrv8qQyaEqnARfnZyFJhzxA7TbzKO6V8WrMN%2BH5L4GOqUBjwICXYITLdwv8PRFA81yzr2eL5eCf1296IXLcy0BtvdqUs2TAJgnDYBCe68ThFcMzyh2eE27x4i4BpAdHZgxmQwLUQlYmd1DjS69g9dCciUt7ZdlYiCgvHo5MiF%2F%2F3wbDT%2FwBEeZykIFl3YpQjD6iY5sh4%2FiUqaEbADOruAIHknLJpuUIkzlqcczsnS6PSVQkvjTWUHZfXusQAnk%2FjxPf9KiFY4P&X-Amz-Signature=4ee0f94820d66d260d282c4c7ef394d19b476473d79fb147a68d8d5e255c3f04&X-Amz-SignedHeaders=host&x-id=GetObject)
