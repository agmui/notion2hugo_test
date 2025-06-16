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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKHUJ2Y%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD36pntgyAdJwVKkfbFIHOdSBisrgkS48RZZ0p%2Ba6CKjgIhANRdrci2lYFFJSgsYNC9qB14sxDBcrqIrFQpZlSa5DyZKv8DCFcQABoMNjM3NDIzMTgzODA1Igy0h9qUCszFX2evlOsq3AO2UI9bVqAhye%2BRhk%2F9KkNZ1r1JmCcyOK25zvJoL56zCLgwJuPmSHj%2BP76a9F9H%2FzLEtTjnFI2YarwGqRc9SUzLl%2BYdAH%2Bm23AY43ExWvNb9DfQuDgURTpacVnJnylEuaP8vZEttnm8UaEXQEfKBhl9c75%2F5WRLQPnd0%2ByKs2NnKghpAqi43zy2xxm1%2FJxJ2t6sPLbFW%2BQLljPA7sOcJ6Fm88Rh8c4G0In8wdd3CTmz28fwBYUli1pScnaCLCtJ%2Bbx7gGYdmrlcXUQI4GE8FlQrghVrGQqcrIF1wpnKuSnaIlEpzERGQvOJY1%2BDVs%2BIx7luH%2FcQw%2FpjBTdfsd3UPNE%2F8gbXrpCSBU9ezD5vCG0OM%2FdndPTIYHRAVYNrFcwrrDvHmNTMR0EzsQdfF6MPHWlps6QtcVmFyF%2B24%2BIj8bxd6nQGK12hulSqciwMlWwI3fZ5%2BDZXknVWWinR8VyQD00WCdGIqZnb%2FXkFIH%2FRygoXeWaEdJRUnZkU26BUxo6efaF%2Bch6%2FyhCwqfmudSLm0UiPl7T1ok7nRA6LpAID%2F%2F%2BJRRRmISa2elmOcgiJ49Gs5sTubrYhNZlE15UtZPBaGZ4xML%2Bwa1TVb%2FC5pqtWlps%2FuZn%2FAol8YzvC3bca5TDj4L7CBjqkAYrdiCW8CpUKfc19kMo4bzb0QeuIqaLaQqo%2F3fDMkImhXO8enc%2BvuqzHW1bckcVKuOvff%2BaZYt4Fsk%2FfQ31O4ccYq1xmac24EziXrfhqFXWVSPmYpvAh%2BHhyYj5LZxS6GWDdcgkvwWPeDO4287xGxZ%2B6wgGZyhi8iXTRJpHP6TP22Q8g4BAAR2WIgL8DIOeMdOIBpNP1RfmNFCkyZuVCfrQDxW9X&X-Amz-Signature=b3b7d9fd65452198cf6f19b8bb149e1924fee4c400a895922c2ded36f15ef126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKHUJ2Y%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD36pntgyAdJwVKkfbFIHOdSBisrgkS48RZZ0p%2Ba6CKjgIhANRdrci2lYFFJSgsYNC9qB14sxDBcrqIrFQpZlSa5DyZKv8DCFcQABoMNjM3NDIzMTgzODA1Igy0h9qUCszFX2evlOsq3AO2UI9bVqAhye%2BRhk%2F9KkNZ1r1JmCcyOK25zvJoL56zCLgwJuPmSHj%2BP76a9F9H%2FzLEtTjnFI2YarwGqRc9SUzLl%2BYdAH%2Bm23AY43ExWvNb9DfQuDgURTpacVnJnylEuaP8vZEttnm8UaEXQEfKBhl9c75%2F5WRLQPnd0%2ByKs2NnKghpAqi43zy2xxm1%2FJxJ2t6sPLbFW%2BQLljPA7sOcJ6Fm88Rh8c4G0In8wdd3CTmz28fwBYUli1pScnaCLCtJ%2Bbx7gGYdmrlcXUQI4GE8FlQrghVrGQqcrIF1wpnKuSnaIlEpzERGQvOJY1%2BDVs%2BIx7luH%2FcQw%2FpjBTdfsd3UPNE%2F8gbXrpCSBU9ezD5vCG0OM%2FdndPTIYHRAVYNrFcwrrDvHmNTMR0EzsQdfF6MPHWlps6QtcVmFyF%2B24%2BIj8bxd6nQGK12hulSqciwMlWwI3fZ5%2BDZXknVWWinR8VyQD00WCdGIqZnb%2FXkFIH%2FRygoXeWaEdJRUnZkU26BUxo6efaF%2Bch6%2FyhCwqfmudSLm0UiPl7T1ok7nRA6LpAID%2F%2F%2BJRRRmISa2elmOcgiJ49Gs5sTubrYhNZlE15UtZPBaGZ4xML%2Bwa1TVb%2FC5pqtWlps%2FuZn%2FAol8YzvC3bca5TDj4L7CBjqkAYrdiCW8CpUKfc19kMo4bzb0QeuIqaLaQqo%2F3fDMkImhXO8enc%2BvuqzHW1bckcVKuOvff%2BaZYt4Fsk%2FfQ31O4ccYq1xmac24EziXrfhqFXWVSPmYpvAh%2BHhyYj5LZxS6GWDdcgkvwWPeDO4287xGxZ%2B6wgGZyhi8iXTRJpHP6TP22Q8g4BAAR2WIgL8DIOeMdOIBpNP1RfmNFCkyZuVCfrQDxW9X&X-Amz-Signature=4c2823b8b7e23a845ade7e9b258263f8dfe044955f46d235cc71638300511aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKHUJ2Y%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD36pntgyAdJwVKkfbFIHOdSBisrgkS48RZZ0p%2Ba6CKjgIhANRdrci2lYFFJSgsYNC9qB14sxDBcrqIrFQpZlSa5DyZKv8DCFcQABoMNjM3NDIzMTgzODA1Igy0h9qUCszFX2evlOsq3AO2UI9bVqAhye%2BRhk%2F9KkNZ1r1JmCcyOK25zvJoL56zCLgwJuPmSHj%2BP76a9F9H%2FzLEtTjnFI2YarwGqRc9SUzLl%2BYdAH%2Bm23AY43ExWvNb9DfQuDgURTpacVnJnylEuaP8vZEttnm8UaEXQEfKBhl9c75%2F5WRLQPnd0%2ByKs2NnKghpAqi43zy2xxm1%2FJxJ2t6sPLbFW%2BQLljPA7sOcJ6Fm88Rh8c4G0In8wdd3CTmz28fwBYUli1pScnaCLCtJ%2Bbx7gGYdmrlcXUQI4GE8FlQrghVrGQqcrIF1wpnKuSnaIlEpzERGQvOJY1%2BDVs%2BIx7luH%2FcQw%2FpjBTdfsd3UPNE%2F8gbXrpCSBU9ezD5vCG0OM%2FdndPTIYHRAVYNrFcwrrDvHmNTMR0EzsQdfF6MPHWlps6QtcVmFyF%2B24%2BIj8bxd6nQGK12hulSqciwMlWwI3fZ5%2BDZXknVWWinR8VyQD00WCdGIqZnb%2FXkFIH%2FRygoXeWaEdJRUnZkU26BUxo6efaF%2Bch6%2FyhCwqfmudSLm0UiPl7T1ok7nRA6LpAID%2F%2F%2BJRRRmISa2elmOcgiJ49Gs5sTubrYhNZlE15UtZPBaGZ4xML%2Bwa1TVb%2FC5pqtWlps%2FuZn%2FAol8YzvC3bca5TDj4L7CBjqkAYrdiCW8CpUKfc19kMo4bzb0QeuIqaLaQqo%2F3fDMkImhXO8enc%2BvuqzHW1bckcVKuOvff%2BaZYt4Fsk%2FfQ31O4ccYq1xmac24EziXrfhqFXWVSPmYpvAh%2BHhyYj5LZxS6GWDdcgkvwWPeDO4287xGxZ%2B6wgGZyhi8iXTRJpHP6TP22Q8g4BAAR2WIgL8DIOeMdOIBpNP1RfmNFCkyZuVCfrQDxW9X&X-Amz-Signature=2eae277b598b7a07b879b807d060443b990dd212a2ff1e2795d32eb48b1adae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKHUJ2Y%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD36pntgyAdJwVKkfbFIHOdSBisrgkS48RZZ0p%2Ba6CKjgIhANRdrci2lYFFJSgsYNC9qB14sxDBcrqIrFQpZlSa5DyZKv8DCFcQABoMNjM3NDIzMTgzODA1Igy0h9qUCszFX2evlOsq3AO2UI9bVqAhye%2BRhk%2F9KkNZ1r1JmCcyOK25zvJoL56zCLgwJuPmSHj%2BP76a9F9H%2FzLEtTjnFI2YarwGqRc9SUzLl%2BYdAH%2Bm23AY43ExWvNb9DfQuDgURTpacVnJnylEuaP8vZEttnm8UaEXQEfKBhl9c75%2F5WRLQPnd0%2ByKs2NnKghpAqi43zy2xxm1%2FJxJ2t6sPLbFW%2BQLljPA7sOcJ6Fm88Rh8c4G0In8wdd3CTmz28fwBYUli1pScnaCLCtJ%2Bbx7gGYdmrlcXUQI4GE8FlQrghVrGQqcrIF1wpnKuSnaIlEpzERGQvOJY1%2BDVs%2BIx7luH%2FcQw%2FpjBTdfsd3UPNE%2F8gbXrpCSBU9ezD5vCG0OM%2FdndPTIYHRAVYNrFcwrrDvHmNTMR0EzsQdfF6MPHWlps6QtcVmFyF%2B24%2BIj8bxd6nQGK12hulSqciwMlWwI3fZ5%2BDZXknVWWinR8VyQD00WCdGIqZnb%2FXkFIH%2FRygoXeWaEdJRUnZkU26BUxo6efaF%2Bch6%2FyhCwqfmudSLm0UiPl7T1ok7nRA6LpAID%2F%2F%2BJRRRmISa2elmOcgiJ49Gs5sTubrYhNZlE15UtZPBaGZ4xML%2Bwa1TVb%2FC5pqtWlps%2FuZn%2FAol8YzvC3bca5TDj4L7CBjqkAYrdiCW8CpUKfc19kMo4bzb0QeuIqaLaQqo%2F3fDMkImhXO8enc%2BvuqzHW1bckcVKuOvff%2BaZYt4Fsk%2FfQ31O4ccYq1xmac24EziXrfhqFXWVSPmYpvAh%2BHhyYj5LZxS6GWDdcgkvwWPeDO4287xGxZ%2B6wgGZyhi8iXTRJpHP6TP22Q8g4BAAR2WIgL8DIOeMdOIBpNP1RfmNFCkyZuVCfrQDxW9X&X-Amz-Signature=cf40bb2c1fdcc557a212b78812c849a45a5c54ab19d6ce2f92013da99935a8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKHUJ2Y%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD36pntgyAdJwVKkfbFIHOdSBisrgkS48RZZ0p%2Ba6CKjgIhANRdrci2lYFFJSgsYNC9qB14sxDBcrqIrFQpZlSa5DyZKv8DCFcQABoMNjM3NDIzMTgzODA1Igy0h9qUCszFX2evlOsq3AO2UI9bVqAhye%2BRhk%2F9KkNZ1r1JmCcyOK25zvJoL56zCLgwJuPmSHj%2BP76a9F9H%2FzLEtTjnFI2YarwGqRc9SUzLl%2BYdAH%2Bm23AY43ExWvNb9DfQuDgURTpacVnJnylEuaP8vZEttnm8UaEXQEfKBhl9c75%2F5WRLQPnd0%2ByKs2NnKghpAqi43zy2xxm1%2FJxJ2t6sPLbFW%2BQLljPA7sOcJ6Fm88Rh8c4G0In8wdd3CTmz28fwBYUli1pScnaCLCtJ%2Bbx7gGYdmrlcXUQI4GE8FlQrghVrGQqcrIF1wpnKuSnaIlEpzERGQvOJY1%2BDVs%2BIx7luH%2FcQw%2FpjBTdfsd3UPNE%2F8gbXrpCSBU9ezD5vCG0OM%2FdndPTIYHRAVYNrFcwrrDvHmNTMR0EzsQdfF6MPHWlps6QtcVmFyF%2B24%2BIj8bxd6nQGK12hulSqciwMlWwI3fZ5%2BDZXknVWWinR8VyQD00WCdGIqZnb%2FXkFIH%2FRygoXeWaEdJRUnZkU26BUxo6efaF%2Bch6%2FyhCwqfmudSLm0UiPl7T1ok7nRA6LpAID%2F%2F%2BJRRRmISa2elmOcgiJ49Gs5sTubrYhNZlE15UtZPBaGZ4xML%2Bwa1TVb%2FC5pqtWlps%2FuZn%2FAol8YzvC3bca5TDj4L7CBjqkAYrdiCW8CpUKfc19kMo4bzb0QeuIqaLaQqo%2F3fDMkImhXO8enc%2BvuqzHW1bckcVKuOvff%2BaZYt4Fsk%2FfQ31O4ccYq1xmac24EziXrfhqFXWVSPmYpvAh%2BHhyYj5LZxS6GWDdcgkvwWPeDO4287xGxZ%2B6wgGZyhi8iXTRJpHP6TP22Q8g4BAAR2WIgL8DIOeMdOIBpNP1RfmNFCkyZuVCfrQDxW9X&X-Amz-Signature=c9fc6f9f35eb482320cfdf04f11a9b447258a81cef771aac517f0a88f31faa2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKHUJ2Y%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD36pntgyAdJwVKkfbFIHOdSBisrgkS48RZZ0p%2Ba6CKjgIhANRdrci2lYFFJSgsYNC9qB14sxDBcrqIrFQpZlSa5DyZKv8DCFcQABoMNjM3NDIzMTgzODA1Igy0h9qUCszFX2evlOsq3AO2UI9bVqAhye%2BRhk%2F9KkNZ1r1JmCcyOK25zvJoL56zCLgwJuPmSHj%2BP76a9F9H%2FzLEtTjnFI2YarwGqRc9SUzLl%2BYdAH%2Bm23AY43ExWvNb9DfQuDgURTpacVnJnylEuaP8vZEttnm8UaEXQEfKBhl9c75%2F5WRLQPnd0%2ByKs2NnKghpAqi43zy2xxm1%2FJxJ2t6sPLbFW%2BQLljPA7sOcJ6Fm88Rh8c4G0In8wdd3CTmz28fwBYUli1pScnaCLCtJ%2Bbx7gGYdmrlcXUQI4GE8FlQrghVrGQqcrIF1wpnKuSnaIlEpzERGQvOJY1%2BDVs%2BIx7luH%2FcQw%2FpjBTdfsd3UPNE%2F8gbXrpCSBU9ezD5vCG0OM%2FdndPTIYHRAVYNrFcwrrDvHmNTMR0EzsQdfF6MPHWlps6QtcVmFyF%2B24%2BIj8bxd6nQGK12hulSqciwMlWwI3fZ5%2BDZXknVWWinR8VyQD00WCdGIqZnb%2FXkFIH%2FRygoXeWaEdJRUnZkU26BUxo6efaF%2Bch6%2FyhCwqfmudSLm0UiPl7T1ok7nRA6LpAID%2F%2F%2BJRRRmISa2elmOcgiJ49Gs5sTubrYhNZlE15UtZPBaGZ4xML%2Bwa1TVb%2FC5pqtWlps%2FuZn%2FAol8YzvC3bca5TDj4L7CBjqkAYrdiCW8CpUKfc19kMo4bzb0QeuIqaLaQqo%2F3fDMkImhXO8enc%2BvuqzHW1bckcVKuOvff%2BaZYt4Fsk%2FfQ31O4ccYq1xmac24EziXrfhqFXWVSPmYpvAh%2BHhyYj5LZxS6GWDdcgkvwWPeDO4287xGxZ%2B6wgGZyhi8iXTRJpHP6TP22Q8g4BAAR2WIgL8DIOeMdOIBpNP1RfmNFCkyZuVCfrQDxW9X&X-Amz-Signature=214e6b76506b9468c344bfb85c328c6c52b92a20150df62cca4f81ef891760b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
