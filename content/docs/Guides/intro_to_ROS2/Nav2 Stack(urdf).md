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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NYSKT5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2BBr1hcsZD9EmaUT1BEAiNCcx%2B4vFdMFIvclCbvyafAIgSkTnAcZdzbsy%2BybsbpaNpQMOpSpA3Yu6yN7YIKTk6HwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHprxbKj7viW9oOSdircA%2F38OHLtA2ha38fKrSDmMU2cdy%2FKRDhaE61j9%2Bopr%2Bz5Jl8t%2FzodqDAgiZtc%2BochwJETaaFu8NU1b8q1U0V%2B0Y0uwhaGSQheFbsziaZ%2BHuLH%2FLWWjXyG4h4%2Fz%2B8E5Nnvc7c56UhGjzdSb02InfyBS6ov0TqR0%2FhFaFEqz3GUsFQncQfWIVlJr6j%2BbVVBb9QwhJ6S1RUrFDWZ9thdkGd73cqLUIbx8lPPAXTHTmkro0wADfBYKezefW5HztJQFCJjFmrHawLMQBKOJ1GA4vY%2BYCtqO%2Fn6xQpksGFPAFlwkp%2Balg4yjnYDuVS91ulTtmHGJrOr8fZTLyW4rMN4rxC0aO4fLNnXzfR05Dt1tm3GfwyLVjLBN9VdRnq6GjopFnRFmokdwqN5uZJ8w6vZY1BSbCfFygDyeEwu6YHKPlFEPCrzinIghbOenDW9%2BG5B9L4T%2BYsxFdMuDg1F7UcmjZOLuo7BVCqUPqIdH%2BpQun6b4koHygRdfViIEZplNB8sZqdQHwdu7CWQpgRLVvWEXw3p%2BQiqpVegvhcUPc2mFsuP79r5X5dd2EoJ%2BAUmMDrxslLJwmoatHk%2F5bF0K6oCY2ZoZg2eJuIiRgBrdADzhjOv5k%2FaSQleIU4C7Sb1uHZfMIu2%2BsAGOqUB8Ml%2Fn71grp5ish%2FsFcSWh5hzqOjDa1l6fcoAZyTi9ozgqegar8HvvuqbD35iG8o%2FJpan9SD4RvLRo%2BMqNTNuupQ9NV3TOpbcsV4kbev%2BloF22sSA7DKmxQ4LKB0L%2FFQT6jL3HIrhpRWmYIPchBVRcu7hs65f8nSHuK3z7wKwzHouvH2ssUOWO5FD2iRNfZCyZXxDjl8dxvQ7gie%2F5BPAFIkzfAPm&X-Amz-Signature=3d7f7475d062c0cc69eaed32b7fe944b56c595e2c6a916deb42cf73ecda4f484&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NYSKT5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2BBr1hcsZD9EmaUT1BEAiNCcx%2B4vFdMFIvclCbvyafAIgSkTnAcZdzbsy%2BybsbpaNpQMOpSpA3Yu6yN7YIKTk6HwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHprxbKj7viW9oOSdircA%2F38OHLtA2ha38fKrSDmMU2cdy%2FKRDhaE61j9%2Bopr%2Bz5Jl8t%2FzodqDAgiZtc%2BochwJETaaFu8NU1b8q1U0V%2B0Y0uwhaGSQheFbsziaZ%2BHuLH%2FLWWjXyG4h4%2Fz%2B8E5Nnvc7c56UhGjzdSb02InfyBS6ov0TqR0%2FhFaFEqz3GUsFQncQfWIVlJr6j%2BbVVBb9QwhJ6S1RUrFDWZ9thdkGd73cqLUIbx8lPPAXTHTmkro0wADfBYKezefW5HztJQFCJjFmrHawLMQBKOJ1GA4vY%2BYCtqO%2Fn6xQpksGFPAFlwkp%2Balg4yjnYDuVS91ulTtmHGJrOr8fZTLyW4rMN4rxC0aO4fLNnXzfR05Dt1tm3GfwyLVjLBN9VdRnq6GjopFnRFmokdwqN5uZJ8w6vZY1BSbCfFygDyeEwu6YHKPlFEPCrzinIghbOenDW9%2BG5B9L4T%2BYsxFdMuDg1F7UcmjZOLuo7BVCqUPqIdH%2BpQun6b4koHygRdfViIEZplNB8sZqdQHwdu7CWQpgRLVvWEXw3p%2BQiqpVegvhcUPc2mFsuP79r5X5dd2EoJ%2BAUmMDrxslLJwmoatHk%2F5bF0K6oCY2ZoZg2eJuIiRgBrdADzhjOv5k%2FaSQleIU4C7Sb1uHZfMIu2%2BsAGOqUB8Ml%2Fn71grp5ish%2FsFcSWh5hzqOjDa1l6fcoAZyTi9ozgqegar8HvvuqbD35iG8o%2FJpan9SD4RvLRo%2BMqNTNuupQ9NV3TOpbcsV4kbev%2BloF22sSA7DKmxQ4LKB0L%2FFQT6jL3HIrhpRWmYIPchBVRcu7hs65f8nSHuK3z7wKwzHouvH2ssUOWO5FD2iRNfZCyZXxDjl8dxvQ7gie%2F5BPAFIkzfAPm&X-Amz-Signature=b0657ccf748c921818b6cf7e9aa16895cfd5f0bad5ad6c3b0f2eceac539c14cf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NYSKT5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2BBr1hcsZD9EmaUT1BEAiNCcx%2B4vFdMFIvclCbvyafAIgSkTnAcZdzbsy%2BybsbpaNpQMOpSpA3Yu6yN7YIKTk6HwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHprxbKj7viW9oOSdircA%2F38OHLtA2ha38fKrSDmMU2cdy%2FKRDhaE61j9%2Bopr%2Bz5Jl8t%2FzodqDAgiZtc%2BochwJETaaFu8NU1b8q1U0V%2B0Y0uwhaGSQheFbsziaZ%2BHuLH%2FLWWjXyG4h4%2Fz%2B8E5Nnvc7c56UhGjzdSb02InfyBS6ov0TqR0%2FhFaFEqz3GUsFQncQfWIVlJr6j%2BbVVBb9QwhJ6S1RUrFDWZ9thdkGd73cqLUIbx8lPPAXTHTmkro0wADfBYKezefW5HztJQFCJjFmrHawLMQBKOJ1GA4vY%2BYCtqO%2Fn6xQpksGFPAFlwkp%2Balg4yjnYDuVS91ulTtmHGJrOr8fZTLyW4rMN4rxC0aO4fLNnXzfR05Dt1tm3GfwyLVjLBN9VdRnq6GjopFnRFmokdwqN5uZJ8w6vZY1BSbCfFygDyeEwu6YHKPlFEPCrzinIghbOenDW9%2BG5B9L4T%2BYsxFdMuDg1F7UcmjZOLuo7BVCqUPqIdH%2BpQun6b4koHygRdfViIEZplNB8sZqdQHwdu7CWQpgRLVvWEXw3p%2BQiqpVegvhcUPc2mFsuP79r5X5dd2EoJ%2BAUmMDrxslLJwmoatHk%2F5bF0K6oCY2ZoZg2eJuIiRgBrdADzhjOv5k%2FaSQleIU4C7Sb1uHZfMIu2%2BsAGOqUB8Ml%2Fn71grp5ish%2FsFcSWh5hzqOjDa1l6fcoAZyTi9ozgqegar8HvvuqbD35iG8o%2FJpan9SD4RvLRo%2BMqNTNuupQ9NV3TOpbcsV4kbev%2BloF22sSA7DKmxQ4LKB0L%2FFQT6jL3HIrhpRWmYIPchBVRcu7hs65f8nSHuK3z7wKwzHouvH2ssUOWO5FD2iRNfZCyZXxDjl8dxvQ7gie%2F5BPAFIkzfAPm&X-Amz-Signature=26130db445731d6945b76f5330289e14a41c45895ff18b9102de0965f946135f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NYSKT5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2BBr1hcsZD9EmaUT1BEAiNCcx%2B4vFdMFIvclCbvyafAIgSkTnAcZdzbsy%2BybsbpaNpQMOpSpA3Yu6yN7YIKTk6HwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHprxbKj7viW9oOSdircA%2F38OHLtA2ha38fKrSDmMU2cdy%2FKRDhaE61j9%2Bopr%2Bz5Jl8t%2FzodqDAgiZtc%2BochwJETaaFu8NU1b8q1U0V%2B0Y0uwhaGSQheFbsziaZ%2BHuLH%2FLWWjXyG4h4%2Fz%2B8E5Nnvc7c56UhGjzdSb02InfyBS6ov0TqR0%2FhFaFEqz3GUsFQncQfWIVlJr6j%2BbVVBb9QwhJ6S1RUrFDWZ9thdkGd73cqLUIbx8lPPAXTHTmkro0wADfBYKezefW5HztJQFCJjFmrHawLMQBKOJ1GA4vY%2BYCtqO%2Fn6xQpksGFPAFlwkp%2Balg4yjnYDuVS91ulTtmHGJrOr8fZTLyW4rMN4rxC0aO4fLNnXzfR05Dt1tm3GfwyLVjLBN9VdRnq6GjopFnRFmokdwqN5uZJ8w6vZY1BSbCfFygDyeEwu6YHKPlFEPCrzinIghbOenDW9%2BG5B9L4T%2BYsxFdMuDg1F7UcmjZOLuo7BVCqUPqIdH%2BpQun6b4koHygRdfViIEZplNB8sZqdQHwdu7CWQpgRLVvWEXw3p%2BQiqpVegvhcUPc2mFsuP79r5X5dd2EoJ%2BAUmMDrxslLJwmoatHk%2F5bF0K6oCY2ZoZg2eJuIiRgBrdADzhjOv5k%2FaSQleIU4C7Sb1uHZfMIu2%2BsAGOqUB8Ml%2Fn71grp5ish%2FsFcSWh5hzqOjDa1l6fcoAZyTi9ozgqegar8HvvuqbD35iG8o%2FJpan9SD4RvLRo%2BMqNTNuupQ9NV3TOpbcsV4kbev%2BloF22sSA7DKmxQ4LKB0L%2FFQT6jL3HIrhpRWmYIPchBVRcu7hs65f8nSHuK3z7wKwzHouvH2ssUOWO5FD2iRNfZCyZXxDjl8dxvQ7gie%2F5BPAFIkzfAPm&X-Amz-Signature=665be9e82d697b4513dd6715c02b4e896574e44172e423cb2f3affc0faeeb816&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NYSKT5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2BBr1hcsZD9EmaUT1BEAiNCcx%2B4vFdMFIvclCbvyafAIgSkTnAcZdzbsy%2BybsbpaNpQMOpSpA3Yu6yN7YIKTk6HwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHprxbKj7viW9oOSdircA%2F38OHLtA2ha38fKrSDmMU2cdy%2FKRDhaE61j9%2Bopr%2Bz5Jl8t%2FzodqDAgiZtc%2BochwJETaaFu8NU1b8q1U0V%2B0Y0uwhaGSQheFbsziaZ%2BHuLH%2FLWWjXyG4h4%2Fz%2B8E5Nnvc7c56UhGjzdSb02InfyBS6ov0TqR0%2FhFaFEqz3GUsFQncQfWIVlJr6j%2BbVVBb9QwhJ6S1RUrFDWZ9thdkGd73cqLUIbx8lPPAXTHTmkro0wADfBYKezefW5HztJQFCJjFmrHawLMQBKOJ1GA4vY%2BYCtqO%2Fn6xQpksGFPAFlwkp%2Balg4yjnYDuVS91ulTtmHGJrOr8fZTLyW4rMN4rxC0aO4fLNnXzfR05Dt1tm3GfwyLVjLBN9VdRnq6GjopFnRFmokdwqN5uZJ8w6vZY1BSbCfFygDyeEwu6YHKPlFEPCrzinIghbOenDW9%2BG5B9L4T%2BYsxFdMuDg1F7UcmjZOLuo7BVCqUPqIdH%2BpQun6b4koHygRdfViIEZplNB8sZqdQHwdu7CWQpgRLVvWEXw3p%2BQiqpVegvhcUPc2mFsuP79r5X5dd2EoJ%2BAUmMDrxslLJwmoatHk%2F5bF0K6oCY2ZoZg2eJuIiRgBrdADzhjOv5k%2FaSQleIU4C7Sb1uHZfMIu2%2BsAGOqUB8Ml%2Fn71grp5ish%2FsFcSWh5hzqOjDa1l6fcoAZyTi9ozgqegar8HvvuqbD35iG8o%2FJpan9SD4RvLRo%2BMqNTNuupQ9NV3TOpbcsV4kbev%2BloF22sSA7DKmxQ4LKB0L%2FFQT6jL3HIrhpRWmYIPchBVRcu7hs65f8nSHuK3z7wKwzHouvH2ssUOWO5FD2iRNfZCyZXxDjl8dxvQ7gie%2F5BPAFIkzfAPm&X-Amz-Signature=5597e9fad256b9eccd2fc8dbf1536ea3470bd3eb0501193e0bb923d0c61537e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NYSKT5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5%2BBr1hcsZD9EmaUT1BEAiNCcx%2B4vFdMFIvclCbvyafAIgSkTnAcZdzbsy%2BybsbpaNpQMOpSpA3Yu6yN7YIKTk6HwqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHprxbKj7viW9oOSdircA%2F38OHLtA2ha38fKrSDmMU2cdy%2FKRDhaE61j9%2Bopr%2Bz5Jl8t%2FzodqDAgiZtc%2BochwJETaaFu8NU1b8q1U0V%2B0Y0uwhaGSQheFbsziaZ%2BHuLH%2FLWWjXyG4h4%2Fz%2B8E5Nnvc7c56UhGjzdSb02InfyBS6ov0TqR0%2FhFaFEqz3GUsFQncQfWIVlJr6j%2BbVVBb9QwhJ6S1RUrFDWZ9thdkGd73cqLUIbx8lPPAXTHTmkro0wADfBYKezefW5HztJQFCJjFmrHawLMQBKOJ1GA4vY%2BYCtqO%2Fn6xQpksGFPAFlwkp%2Balg4yjnYDuVS91ulTtmHGJrOr8fZTLyW4rMN4rxC0aO4fLNnXzfR05Dt1tm3GfwyLVjLBN9VdRnq6GjopFnRFmokdwqN5uZJ8w6vZY1BSbCfFygDyeEwu6YHKPlFEPCrzinIghbOenDW9%2BG5B9L4T%2BYsxFdMuDg1F7UcmjZOLuo7BVCqUPqIdH%2BpQun6b4koHygRdfViIEZplNB8sZqdQHwdu7CWQpgRLVvWEXw3p%2BQiqpVegvhcUPc2mFsuP79r5X5dd2EoJ%2BAUmMDrxslLJwmoatHk%2F5bF0K6oCY2ZoZg2eJuIiRgBrdADzhjOv5k%2FaSQleIU4C7Sb1uHZfMIu2%2BsAGOqUB8Ml%2Fn71grp5ish%2FsFcSWh5hzqOjDa1l6fcoAZyTi9ozgqegar8HvvuqbD35iG8o%2FJpan9SD4RvLRo%2BMqNTNuupQ9NV3TOpbcsV4kbev%2BloF22sSA7DKmxQ4LKB0L%2FFQT6jL3HIrhpRWmYIPchBVRcu7hs65f8nSHuK3z7wKwzHouvH2ssUOWO5FD2iRNfZCyZXxDjl8dxvQ7gie%2F5BPAFIkzfAPm&X-Amz-Signature=cfa4830c250e72e637547f1dc64e797f85ae504d46d36df2f2b924f780e0899a&X-Amz-SignedHeaders=host&x-id=GetObject)
