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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVARQOK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHLQXnxjOGCZkmpNinsarvFZ3nJDXGc69c67VdvKvnW5AiAb%2FR8OfpDXS5LJLmdzvf%2F4huiyXdkSboZNRcKSGUaHWSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigiHJgLBNWt7HbtSKtwDAPzsOJKofG7iR3H3LXHd2rkybEpDq%2FbUtpRn372mkrqPo4cepfhgX0Yxi8KVd87zDh6ywLaLgyeUCHdavp%2F7rK3XdmmgAbZ46TAjXhMM1dP7appGtII8zx2OiZOqhsSgrDOrxR35wvlKC9JnsTWSPgffgssnq%2FfifBRqQOdjCkaxvr0kHuTOS7Ss%2BRGEnPi3DqYJJBhRhbnKCITFxBXM3KGLIWcU32TFbycsQecvUybtadABcEuTtwKfcvqt7XTtkVyErIID4dTopiKn8F2Dblow4%2Bt9cEjPs7228O6%2ByIKLtVIocmH4fc4vWIjCMjI7gRHSvBHu7ZPTN4mMLzjfKUon5G95SyNirOKdAi0B7tkUP8oqGaUppIsvogzApVADvURX%2BCoROfuIHDXKhUfc71DPBoCFSPzPpWHfaPbKVmoLI1Q0XP0zOvtoB6hbnyhsN8%2BnvPt%2FgCp6mfTScHAlI7qQa%2B6m2DJF%2BZj3zUvtSiIZTd8%2FpXo0eF632GMQmuJ0dU6M0%2BsETMBzHpv%2BX43MF82Jg6ePljNKT6m22Fzr6ZKWDeqELsIT1Iw034IJDrzKvI0at4q1Khqeq1GzkI2bRT898mVMKG7HEkiwA7MAtujxJ%2Fr3T4%2BNvr%2F%2Bwl4wtrirvwY6pgGLfCC%2BOVpXBNi0f3ljiOqGuke9Hniqk0CSeAxnS%2BePBKSeMSltNKuRCcF7TPVTzCv9isEqIA5zgGziuZBZbqC9RAxhHcu2lBiOgR5zy07i%2BR1dotwiMKuptoCiwAqPVHoT6%2FSH7Sy8DhOjPP9Wykcv8BP7sKQLu8PcXfs4ilyh3DOc23xcwjOyB0mTnYK1RZ%2BZ0UzrZ2naZd%2Bii88pVJ7yT8%2BP89jJ&X-Amz-Signature=c4e96575443884078d0e66b1cb3230a45168238d08b822f17e46ec0657a3fb77&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVARQOK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHLQXnxjOGCZkmpNinsarvFZ3nJDXGc69c67VdvKvnW5AiAb%2FR8OfpDXS5LJLmdzvf%2F4huiyXdkSboZNRcKSGUaHWSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigiHJgLBNWt7HbtSKtwDAPzsOJKofG7iR3H3LXHd2rkybEpDq%2FbUtpRn372mkrqPo4cepfhgX0Yxi8KVd87zDh6ywLaLgyeUCHdavp%2F7rK3XdmmgAbZ46TAjXhMM1dP7appGtII8zx2OiZOqhsSgrDOrxR35wvlKC9JnsTWSPgffgssnq%2FfifBRqQOdjCkaxvr0kHuTOS7Ss%2BRGEnPi3DqYJJBhRhbnKCITFxBXM3KGLIWcU32TFbycsQecvUybtadABcEuTtwKfcvqt7XTtkVyErIID4dTopiKn8F2Dblow4%2Bt9cEjPs7228O6%2ByIKLtVIocmH4fc4vWIjCMjI7gRHSvBHu7ZPTN4mMLzjfKUon5G95SyNirOKdAi0B7tkUP8oqGaUppIsvogzApVADvURX%2BCoROfuIHDXKhUfc71DPBoCFSPzPpWHfaPbKVmoLI1Q0XP0zOvtoB6hbnyhsN8%2BnvPt%2FgCp6mfTScHAlI7qQa%2B6m2DJF%2BZj3zUvtSiIZTd8%2FpXo0eF632GMQmuJ0dU6M0%2BsETMBzHpv%2BX43MF82Jg6ePljNKT6m22Fzr6ZKWDeqELsIT1Iw034IJDrzKvI0at4q1Khqeq1GzkI2bRT898mVMKG7HEkiwA7MAtujxJ%2Fr3T4%2BNvr%2F%2Bwl4wtrirvwY6pgGLfCC%2BOVpXBNi0f3ljiOqGuke9Hniqk0CSeAxnS%2BePBKSeMSltNKuRCcF7TPVTzCv9isEqIA5zgGziuZBZbqC9RAxhHcu2lBiOgR5zy07i%2BR1dotwiMKuptoCiwAqPVHoT6%2FSH7Sy8DhOjPP9Wykcv8BP7sKQLu8PcXfs4ilyh3DOc23xcwjOyB0mTnYK1RZ%2BZ0UzrZ2naZd%2Bii88pVJ7yT8%2BP89jJ&X-Amz-Signature=84dcfe3ed7c8e61ffe35ff03d84e1563ba9a42fa8d7ea5edf3fc67f153206efd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVARQOK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHLQXnxjOGCZkmpNinsarvFZ3nJDXGc69c67VdvKvnW5AiAb%2FR8OfpDXS5LJLmdzvf%2F4huiyXdkSboZNRcKSGUaHWSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigiHJgLBNWt7HbtSKtwDAPzsOJKofG7iR3H3LXHd2rkybEpDq%2FbUtpRn372mkrqPo4cepfhgX0Yxi8KVd87zDh6ywLaLgyeUCHdavp%2F7rK3XdmmgAbZ46TAjXhMM1dP7appGtII8zx2OiZOqhsSgrDOrxR35wvlKC9JnsTWSPgffgssnq%2FfifBRqQOdjCkaxvr0kHuTOS7Ss%2BRGEnPi3DqYJJBhRhbnKCITFxBXM3KGLIWcU32TFbycsQecvUybtadABcEuTtwKfcvqt7XTtkVyErIID4dTopiKn8F2Dblow4%2Bt9cEjPs7228O6%2ByIKLtVIocmH4fc4vWIjCMjI7gRHSvBHu7ZPTN4mMLzjfKUon5G95SyNirOKdAi0B7tkUP8oqGaUppIsvogzApVADvURX%2BCoROfuIHDXKhUfc71DPBoCFSPzPpWHfaPbKVmoLI1Q0XP0zOvtoB6hbnyhsN8%2BnvPt%2FgCp6mfTScHAlI7qQa%2B6m2DJF%2BZj3zUvtSiIZTd8%2FpXo0eF632GMQmuJ0dU6M0%2BsETMBzHpv%2BX43MF82Jg6ePljNKT6m22Fzr6ZKWDeqELsIT1Iw034IJDrzKvI0at4q1Khqeq1GzkI2bRT898mVMKG7HEkiwA7MAtujxJ%2Fr3T4%2BNvr%2F%2Bwl4wtrirvwY6pgGLfCC%2BOVpXBNi0f3ljiOqGuke9Hniqk0CSeAxnS%2BePBKSeMSltNKuRCcF7TPVTzCv9isEqIA5zgGziuZBZbqC9RAxhHcu2lBiOgR5zy07i%2BR1dotwiMKuptoCiwAqPVHoT6%2FSH7Sy8DhOjPP9Wykcv8BP7sKQLu8PcXfs4ilyh3DOc23xcwjOyB0mTnYK1RZ%2BZ0UzrZ2naZd%2Bii88pVJ7yT8%2BP89jJ&X-Amz-Signature=9e9285eb8ec3e7d7f4253cc9fb2a08156d8b6f3fd517bce0754096607bbf4c38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVARQOK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHLQXnxjOGCZkmpNinsarvFZ3nJDXGc69c67VdvKvnW5AiAb%2FR8OfpDXS5LJLmdzvf%2F4huiyXdkSboZNRcKSGUaHWSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigiHJgLBNWt7HbtSKtwDAPzsOJKofG7iR3H3LXHd2rkybEpDq%2FbUtpRn372mkrqPo4cepfhgX0Yxi8KVd87zDh6ywLaLgyeUCHdavp%2F7rK3XdmmgAbZ46TAjXhMM1dP7appGtII8zx2OiZOqhsSgrDOrxR35wvlKC9JnsTWSPgffgssnq%2FfifBRqQOdjCkaxvr0kHuTOS7Ss%2BRGEnPi3DqYJJBhRhbnKCITFxBXM3KGLIWcU32TFbycsQecvUybtadABcEuTtwKfcvqt7XTtkVyErIID4dTopiKn8F2Dblow4%2Bt9cEjPs7228O6%2ByIKLtVIocmH4fc4vWIjCMjI7gRHSvBHu7ZPTN4mMLzjfKUon5G95SyNirOKdAi0B7tkUP8oqGaUppIsvogzApVADvURX%2BCoROfuIHDXKhUfc71DPBoCFSPzPpWHfaPbKVmoLI1Q0XP0zOvtoB6hbnyhsN8%2BnvPt%2FgCp6mfTScHAlI7qQa%2B6m2DJF%2BZj3zUvtSiIZTd8%2FpXo0eF632GMQmuJ0dU6M0%2BsETMBzHpv%2BX43MF82Jg6ePljNKT6m22Fzr6ZKWDeqELsIT1Iw034IJDrzKvI0at4q1Khqeq1GzkI2bRT898mVMKG7HEkiwA7MAtujxJ%2Fr3T4%2BNvr%2F%2Bwl4wtrirvwY6pgGLfCC%2BOVpXBNi0f3ljiOqGuke9Hniqk0CSeAxnS%2BePBKSeMSltNKuRCcF7TPVTzCv9isEqIA5zgGziuZBZbqC9RAxhHcu2lBiOgR5zy07i%2BR1dotwiMKuptoCiwAqPVHoT6%2FSH7Sy8DhOjPP9Wykcv8BP7sKQLu8PcXfs4ilyh3DOc23xcwjOyB0mTnYK1RZ%2BZ0UzrZ2naZd%2Bii88pVJ7yT8%2BP89jJ&X-Amz-Signature=399f3f475c21885e38dacd9db2ae476fc042fd63bdb7137eac87a8a87bad147e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVARQOK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHLQXnxjOGCZkmpNinsarvFZ3nJDXGc69c67VdvKvnW5AiAb%2FR8OfpDXS5LJLmdzvf%2F4huiyXdkSboZNRcKSGUaHWSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigiHJgLBNWt7HbtSKtwDAPzsOJKofG7iR3H3LXHd2rkybEpDq%2FbUtpRn372mkrqPo4cepfhgX0Yxi8KVd87zDh6ywLaLgyeUCHdavp%2F7rK3XdmmgAbZ46TAjXhMM1dP7appGtII8zx2OiZOqhsSgrDOrxR35wvlKC9JnsTWSPgffgssnq%2FfifBRqQOdjCkaxvr0kHuTOS7Ss%2BRGEnPi3DqYJJBhRhbnKCITFxBXM3KGLIWcU32TFbycsQecvUybtadABcEuTtwKfcvqt7XTtkVyErIID4dTopiKn8F2Dblow4%2Bt9cEjPs7228O6%2ByIKLtVIocmH4fc4vWIjCMjI7gRHSvBHu7ZPTN4mMLzjfKUon5G95SyNirOKdAi0B7tkUP8oqGaUppIsvogzApVADvURX%2BCoROfuIHDXKhUfc71DPBoCFSPzPpWHfaPbKVmoLI1Q0XP0zOvtoB6hbnyhsN8%2BnvPt%2FgCp6mfTScHAlI7qQa%2B6m2DJF%2BZj3zUvtSiIZTd8%2FpXo0eF632GMQmuJ0dU6M0%2BsETMBzHpv%2BX43MF82Jg6ePljNKT6m22Fzr6ZKWDeqELsIT1Iw034IJDrzKvI0at4q1Khqeq1GzkI2bRT898mVMKG7HEkiwA7MAtujxJ%2Fr3T4%2BNvr%2F%2Bwl4wtrirvwY6pgGLfCC%2BOVpXBNi0f3ljiOqGuke9Hniqk0CSeAxnS%2BePBKSeMSltNKuRCcF7TPVTzCv9isEqIA5zgGziuZBZbqC9RAxhHcu2lBiOgR5zy07i%2BR1dotwiMKuptoCiwAqPVHoT6%2FSH7Sy8DhOjPP9Wykcv8BP7sKQLu8PcXfs4ilyh3DOc23xcwjOyB0mTnYK1RZ%2BZ0UzrZ2naZd%2Bii88pVJ7yT8%2BP89jJ&X-Amz-Signature=8fd69b6a8b86be82a634727920620973942ab25ebc267dbc2335e70fdc02e5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XVARQOK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIHLQXnxjOGCZkmpNinsarvFZ3nJDXGc69c67VdvKvnW5AiAb%2FR8OfpDXS5LJLmdzvf%2F4huiyXdkSboZNRcKSGUaHWSqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMigiHJgLBNWt7HbtSKtwDAPzsOJKofG7iR3H3LXHd2rkybEpDq%2FbUtpRn372mkrqPo4cepfhgX0Yxi8KVd87zDh6ywLaLgyeUCHdavp%2F7rK3XdmmgAbZ46TAjXhMM1dP7appGtII8zx2OiZOqhsSgrDOrxR35wvlKC9JnsTWSPgffgssnq%2FfifBRqQOdjCkaxvr0kHuTOS7Ss%2BRGEnPi3DqYJJBhRhbnKCITFxBXM3KGLIWcU32TFbycsQecvUybtadABcEuTtwKfcvqt7XTtkVyErIID4dTopiKn8F2Dblow4%2Bt9cEjPs7228O6%2ByIKLtVIocmH4fc4vWIjCMjI7gRHSvBHu7ZPTN4mMLzjfKUon5G95SyNirOKdAi0B7tkUP8oqGaUppIsvogzApVADvURX%2BCoROfuIHDXKhUfc71DPBoCFSPzPpWHfaPbKVmoLI1Q0XP0zOvtoB6hbnyhsN8%2BnvPt%2FgCp6mfTScHAlI7qQa%2B6m2DJF%2BZj3zUvtSiIZTd8%2FpXo0eF632GMQmuJ0dU6M0%2BsETMBzHpv%2BX43MF82Jg6ePljNKT6m22Fzr6ZKWDeqELsIT1Iw034IJDrzKvI0at4q1Khqeq1GzkI2bRT898mVMKG7HEkiwA7MAtujxJ%2Fr3T4%2BNvr%2F%2Bwl4wtrirvwY6pgGLfCC%2BOVpXBNi0f3ljiOqGuke9Hniqk0CSeAxnS%2BePBKSeMSltNKuRCcF7TPVTzCv9isEqIA5zgGziuZBZbqC9RAxhHcu2lBiOgR5zy07i%2BR1dotwiMKuptoCiwAqPVHoT6%2FSH7Sy8DhOjPP9Wykcv8BP7sKQLu8PcXfs4ilyh3DOc23xcwjOyB0mTnYK1RZ%2BZ0UzrZ2naZd%2Bii88pVJ7yT8%2BP89jJ&X-Amz-Signature=f95735e9535d4c2ee45a090c5a72435ef2f49502f19248bfa9061b25d01999de&X-Amz-SignedHeaders=host&x-id=GetObject)
