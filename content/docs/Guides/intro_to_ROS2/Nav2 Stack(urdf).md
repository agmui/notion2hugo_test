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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLL57TAO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCIkGQVaaeyV9%2FQ1gTzy7YX%2BTAJUCjRNNUz6TP0IJULpwIgGd6RWI6RCCTJzPZ%2BatwZK4kNWJxbcvVkBKmaYf%2FR%2B7Yq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKJEzJvkgyXclgHpISrcAwxVhPhK5QHTOLFJDAFTTH5khO4PxZDg1Sp%2BpmFG1zRG0OPatELk6CLA8699On8UMbUr6GLG3LgEFX4u9de528duy8oQo15k27kjy%2BnKY3D86svL3z1ym3d49SSEGs1wXTIBgl6VhLmaVQeyoX5InYKYRTNoIgwowe8uK8ZkQhXS%2BTX9EeOgMagpTrapQTeuxbwtgVLb6Cyzh0ZLPEU3lyNJ8cHqiw%2BeT3znrI2qMXi9yOQx4YmRVFDnlgOEKUlIq3pk1cNeuzbOoGrlOiAykMC8BcU2RnRW%2BJnyA2qARLGWxpCwZR1vjESqStnMmBtNOZ6mBx7D7js7HXMa%2F5ok3kfMUMrbuBZEdVE8IkAbV8OM86eOZk%2FapvdHTZUL2dTCoTIIJGaAHHfE4EwrKJQS0eJuKYQhJeWJQGwPzvTZuZHQa9mANbtwwebB3TQCnhEHVqIFTpGaBQL3EeJbHUokbZrTfCnmJW8uNK8F1XbDNaNzlJqSlVNyZ18sBqOyqPm5Y6HzI2hLR1n%2FW%2FRsAOkd29XqLH1ngBFWP%2F%2BdktgA882MSy9%2F5nW05HLWzHbJKP8YMIOzDNJHhFzi92ujEeL6%2FeA8mJ2u8kvy0JHpNHW4AA9MeCQyKinyFR5fgfYAMPX%2BzMEGOqUBPfLxpyESD1YRyyZnGelp9msMroHHbZCO%2BZiQsROaln4ljWv%2B75pRMNSHfr9LPaE9sRuwtq3QBFOAhijZ4UqlBEYTDhBV5zpFH6f%2FfKlKhWIZmQVnYerJyhI6M9TackWpCJ4G%2BB%2FDahUm0td1ovKKeyj7dvhLZHu8imDrSEYajhggSSH7cgFqr5d7f8VLdCuRAHC%2FslxWjGKX3PJgWcw19NWkH1GX&X-Amz-Signature=abc12caaf0451383d68215fc5792674df738a4785f519d4ecc3074699c74094f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLL57TAO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCIkGQVaaeyV9%2FQ1gTzy7YX%2BTAJUCjRNNUz6TP0IJULpwIgGd6RWI6RCCTJzPZ%2BatwZK4kNWJxbcvVkBKmaYf%2FR%2B7Yq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKJEzJvkgyXclgHpISrcAwxVhPhK5QHTOLFJDAFTTH5khO4PxZDg1Sp%2BpmFG1zRG0OPatELk6CLA8699On8UMbUr6GLG3LgEFX4u9de528duy8oQo15k27kjy%2BnKY3D86svL3z1ym3d49SSEGs1wXTIBgl6VhLmaVQeyoX5InYKYRTNoIgwowe8uK8ZkQhXS%2BTX9EeOgMagpTrapQTeuxbwtgVLb6Cyzh0ZLPEU3lyNJ8cHqiw%2BeT3znrI2qMXi9yOQx4YmRVFDnlgOEKUlIq3pk1cNeuzbOoGrlOiAykMC8BcU2RnRW%2BJnyA2qARLGWxpCwZR1vjESqStnMmBtNOZ6mBx7D7js7HXMa%2F5ok3kfMUMrbuBZEdVE8IkAbV8OM86eOZk%2FapvdHTZUL2dTCoTIIJGaAHHfE4EwrKJQS0eJuKYQhJeWJQGwPzvTZuZHQa9mANbtwwebB3TQCnhEHVqIFTpGaBQL3EeJbHUokbZrTfCnmJW8uNK8F1XbDNaNzlJqSlVNyZ18sBqOyqPm5Y6HzI2hLR1n%2FW%2FRsAOkd29XqLH1ngBFWP%2F%2BdktgA882MSy9%2F5nW05HLWzHbJKP8YMIOzDNJHhFzi92ujEeL6%2FeA8mJ2u8kvy0JHpNHW4AA9MeCQyKinyFR5fgfYAMPX%2BzMEGOqUBPfLxpyESD1YRyyZnGelp9msMroHHbZCO%2BZiQsROaln4ljWv%2B75pRMNSHfr9LPaE9sRuwtq3QBFOAhijZ4UqlBEYTDhBV5zpFH6f%2FfKlKhWIZmQVnYerJyhI6M9TackWpCJ4G%2BB%2FDahUm0td1ovKKeyj7dvhLZHu8imDrSEYajhggSSH7cgFqr5d7f8VLdCuRAHC%2FslxWjGKX3PJgWcw19NWkH1GX&X-Amz-Signature=4b079b35850302a388e1b111227b4ac689438e5b9f059e755d7039dfa6e7ae89&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLL57TAO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCIkGQVaaeyV9%2FQ1gTzy7YX%2BTAJUCjRNNUz6TP0IJULpwIgGd6RWI6RCCTJzPZ%2BatwZK4kNWJxbcvVkBKmaYf%2FR%2B7Yq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKJEzJvkgyXclgHpISrcAwxVhPhK5QHTOLFJDAFTTH5khO4PxZDg1Sp%2BpmFG1zRG0OPatELk6CLA8699On8UMbUr6GLG3LgEFX4u9de528duy8oQo15k27kjy%2BnKY3D86svL3z1ym3d49SSEGs1wXTIBgl6VhLmaVQeyoX5InYKYRTNoIgwowe8uK8ZkQhXS%2BTX9EeOgMagpTrapQTeuxbwtgVLb6Cyzh0ZLPEU3lyNJ8cHqiw%2BeT3znrI2qMXi9yOQx4YmRVFDnlgOEKUlIq3pk1cNeuzbOoGrlOiAykMC8BcU2RnRW%2BJnyA2qARLGWxpCwZR1vjESqStnMmBtNOZ6mBx7D7js7HXMa%2F5ok3kfMUMrbuBZEdVE8IkAbV8OM86eOZk%2FapvdHTZUL2dTCoTIIJGaAHHfE4EwrKJQS0eJuKYQhJeWJQGwPzvTZuZHQa9mANbtwwebB3TQCnhEHVqIFTpGaBQL3EeJbHUokbZrTfCnmJW8uNK8F1XbDNaNzlJqSlVNyZ18sBqOyqPm5Y6HzI2hLR1n%2FW%2FRsAOkd29XqLH1ngBFWP%2F%2BdktgA882MSy9%2F5nW05HLWzHbJKP8YMIOzDNJHhFzi92ujEeL6%2FeA8mJ2u8kvy0JHpNHW4AA9MeCQyKinyFR5fgfYAMPX%2BzMEGOqUBPfLxpyESD1YRyyZnGelp9msMroHHbZCO%2BZiQsROaln4ljWv%2B75pRMNSHfr9LPaE9sRuwtq3QBFOAhijZ4UqlBEYTDhBV5zpFH6f%2FfKlKhWIZmQVnYerJyhI6M9TackWpCJ4G%2BB%2FDahUm0td1ovKKeyj7dvhLZHu8imDrSEYajhggSSH7cgFqr5d7f8VLdCuRAHC%2FslxWjGKX3PJgWcw19NWkH1GX&X-Amz-Signature=a0e0d7afa5c63c404d92244b73585d5732cda14976ea5662076cadec97c463c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLL57TAO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCIkGQVaaeyV9%2FQ1gTzy7YX%2BTAJUCjRNNUz6TP0IJULpwIgGd6RWI6RCCTJzPZ%2BatwZK4kNWJxbcvVkBKmaYf%2FR%2B7Yq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKJEzJvkgyXclgHpISrcAwxVhPhK5QHTOLFJDAFTTH5khO4PxZDg1Sp%2BpmFG1zRG0OPatELk6CLA8699On8UMbUr6GLG3LgEFX4u9de528duy8oQo15k27kjy%2BnKY3D86svL3z1ym3d49SSEGs1wXTIBgl6VhLmaVQeyoX5InYKYRTNoIgwowe8uK8ZkQhXS%2BTX9EeOgMagpTrapQTeuxbwtgVLb6Cyzh0ZLPEU3lyNJ8cHqiw%2BeT3znrI2qMXi9yOQx4YmRVFDnlgOEKUlIq3pk1cNeuzbOoGrlOiAykMC8BcU2RnRW%2BJnyA2qARLGWxpCwZR1vjESqStnMmBtNOZ6mBx7D7js7HXMa%2F5ok3kfMUMrbuBZEdVE8IkAbV8OM86eOZk%2FapvdHTZUL2dTCoTIIJGaAHHfE4EwrKJQS0eJuKYQhJeWJQGwPzvTZuZHQa9mANbtwwebB3TQCnhEHVqIFTpGaBQL3EeJbHUokbZrTfCnmJW8uNK8F1XbDNaNzlJqSlVNyZ18sBqOyqPm5Y6HzI2hLR1n%2FW%2FRsAOkd29XqLH1ngBFWP%2F%2BdktgA882MSy9%2F5nW05HLWzHbJKP8YMIOzDNJHhFzi92ujEeL6%2FeA8mJ2u8kvy0JHpNHW4AA9MeCQyKinyFR5fgfYAMPX%2BzMEGOqUBPfLxpyESD1YRyyZnGelp9msMroHHbZCO%2BZiQsROaln4ljWv%2B75pRMNSHfr9LPaE9sRuwtq3QBFOAhijZ4UqlBEYTDhBV5zpFH6f%2FfKlKhWIZmQVnYerJyhI6M9TackWpCJ4G%2BB%2FDahUm0td1ovKKeyj7dvhLZHu8imDrSEYajhggSSH7cgFqr5d7f8VLdCuRAHC%2FslxWjGKX3PJgWcw19NWkH1GX&X-Amz-Signature=82f426c956e21bf900ed92278d0b4540e057061fc2948c992a46ce70ebeb793b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLL57TAO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCIkGQVaaeyV9%2FQ1gTzy7YX%2BTAJUCjRNNUz6TP0IJULpwIgGd6RWI6RCCTJzPZ%2BatwZK4kNWJxbcvVkBKmaYf%2FR%2B7Yq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKJEzJvkgyXclgHpISrcAwxVhPhK5QHTOLFJDAFTTH5khO4PxZDg1Sp%2BpmFG1zRG0OPatELk6CLA8699On8UMbUr6GLG3LgEFX4u9de528duy8oQo15k27kjy%2BnKY3D86svL3z1ym3d49SSEGs1wXTIBgl6VhLmaVQeyoX5InYKYRTNoIgwowe8uK8ZkQhXS%2BTX9EeOgMagpTrapQTeuxbwtgVLb6Cyzh0ZLPEU3lyNJ8cHqiw%2BeT3znrI2qMXi9yOQx4YmRVFDnlgOEKUlIq3pk1cNeuzbOoGrlOiAykMC8BcU2RnRW%2BJnyA2qARLGWxpCwZR1vjESqStnMmBtNOZ6mBx7D7js7HXMa%2F5ok3kfMUMrbuBZEdVE8IkAbV8OM86eOZk%2FapvdHTZUL2dTCoTIIJGaAHHfE4EwrKJQS0eJuKYQhJeWJQGwPzvTZuZHQa9mANbtwwebB3TQCnhEHVqIFTpGaBQL3EeJbHUokbZrTfCnmJW8uNK8F1XbDNaNzlJqSlVNyZ18sBqOyqPm5Y6HzI2hLR1n%2FW%2FRsAOkd29XqLH1ngBFWP%2F%2BdktgA882MSy9%2F5nW05HLWzHbJKP8YMIOzDNJHhFzi92ujEeL6%2FeA8mJ2u8kvy0JHpNHW4AA9MeCQyKinyFR5fgfYAMPX%2BzMEGOqUBPfLxpyESD1YRyyZnGelp9msMroHHbZCO%2BZiQsROaln4ljWv%2B75pRMNSHfr9LPaE9sRuwtq3QBFOAhijZ4UqlBEYTDhBV5zpFH6f%2FfKlKhWIZmQVnYerJyhI6M9TackWpCJ4G%2BB%2FDahUm0td1ovKKeyj7dvhLZHu8imDrSEYajhggSSH7cgFqr5d7f8VLdCuRAHC%2FslxWjGKX3PJgWcw19NWkH1GX&X-Amz-Signature=c657445bad120a27789692cf72edcdb87959993f44994a72db75291e53d424a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLL57TAO%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCIkGQVaaeyV9%2FQ1gTzy7YX%2BTAJUCjRNNUz6TP0IJULpwIgGd6RWI6RCCTJzPZ%2BatwZK4kNWJxbcvVkBKmaYf%2FR%2B7Yq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKJEzJvkgyXclgHpISrcAwxVhPhK5QHTOLFJDAFTTH5khO4PxZDg1Sp%2BpmFG1zRG0OPatELk6CLA8699On8UMbUr6GLG3LgEFX4u9de528duy8oQo15k27kjy%2BnKY3D86svL3z1ym3d49SSEGs1wXTIBgl6VhLmaVQeyoX5InYKYRTNoIgwowe8uK8ZkQhXS%2BTX9EeOgMagpTrapQTeuxbwtgVLb6Cyzh0ZLPEU3lyNJ8cHqiw%2BeT3znrI2qMXi9yOQx4YmRVFDnlgOEKUlIq3pk1cNeuzbOoGrlOiAykMC8BcU2RnRW%2BJnyA2qARLGWxpCwZR1vjESqStnMmBtNOZ6mBx7D7js7HXMa%2F5ok3kfMUMrbuBZEdVE8IkAbV8OM86eOZk%2FapvdHTZUL2dTCoTIIJGaAHHfE4EwrKJQS0eJuKYQhJeWJQGwPzvTZuZHQa9mANbtwwebB3TQCnhEHVqIFTpGaBQL3EeJbHUokbZrTfCnmJW8uNK8F1XbDNaNzlJqSlVNyZ18sBqOyqPm5Y6HzI2hLR1n%2FW%2FRsAOkd29XqLH1ngBFWP%2F%2BdktgA882MSy9%2F5nW05HLWzHbJKP8YMIOzDNJHhFzi92ujEeL6%2FeA8mJ2u8kvy0JHpNHW4AA9MeCQyKinyFR5fgfYAMPX%2BzMEGOqUBPfLxpyESD1YRyyZnGelp9msMroHHbZCO%2BZiQsROaln4ljWv%2B75pRMNSHfr9LPaE9sRuwtq3QBFOAhijZ4UqlBEYTDhBV5zpFH6f%2FfKlKhWIZmQVnYerJyhI6M9TackWpCJ4G%2BB%2FDahUm0td1ovKKeyj7dvhLZHu8imDrSEYajhggSSH7cgFqr5d7f8VLdCuRAHC%2FslxWjGKX3PJgWcw19NWkH1GX&X-Amz-Signature=ea93b035e39f0112ba9bfcb09189ed908394171b443e853f3e4831704129e776&X-Amz-SignedHeaders=host&x-id=GetObject)
