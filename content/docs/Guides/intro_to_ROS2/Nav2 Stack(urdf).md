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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKLQAKP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh0BGQsNjmOugB7iUNAcqIjnekdMOIfb0SGSdSS2OcUAiEA5V9gbVI%2FftwGlj4LaCEor83TeWxCBhPuTqr4Cu9lXlUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHmRIiQ54D9zJXfJIircA42bugqoDrtb1vkQ5EU77zzxQfKcQC6ZLWpa0I3JaCza8CC67%2Brf2Lpyzw0U8w8WdDQewKYKZJmO0SK8n9IgbcYDvW5ybYetqTZdoEJp7zoAB6H%2BIKPvJOW07wMxshtqcPvXeiMbTBn3LqRGrNocghj8TfeN1lnRSHJUH5yEc6AIgqEs7WpkeEw8R8RIk3PeQL%2FnGPF6AKfac0uR%2FOX7tKWsuTtM26vw2UKyMpjy7JU1NrCxX0Slh%2BOC0%2B0utmamusGorcvyDUb0PcrJ7ISMwyJJR9OhtIdlCPTQaRrEsBUSQQYvyniKCOShzqO48JIupdgEOAo2nMAvYtkgVcwly1NDoOkjc0EgNzPp97VvfZMdMi2BDSL2jS0EOZA5vP8lwFTyudAOpdEkyUCtaT17U9YG1SUamjII3SmgB5%2BxUk%2Fa93toBklfLujJiQQZ7Lu15ntvPwaQ0dc9zxVBMkoU%2B%2BNlnDP2xuyZEKlOdBmw9Vj1FXEiJLlLxVVhC6L1adE1Sc4MU1KWHxm2Xkr4cYZ6T4Zu759n0A6Erx%2Bh4MmZadNmC%2FFLDmSagqNxdVyGRT1dTitRXKwmmmM%2BOwFUAbCB1DsQ2MWWBkHD16j0J0OYjR3gPZzF1V6UR1RopAjgMObDkMIGOqUBe4wp%2BlH4qs2RY%2BCqnLJfZzboe%2FDG%2BcRnUrlYFd%2FIckdj881aJl6yYT2Mspjtewz1TNu3%2FJfOWm5zf%2BUF7LvEnjLwQV3af1jg3D44sm6DG63QrSR6nntyLtcwFtwVIEmeSOvatdvthpfGE5DjSfBK8mc8caZPg01XNdS%2FEheBb4vkOzmQL%2BD8T6Z6rACIB8jP7ahFlkqRpHmLZWdjAbAmuYKS51D7&X-Amz-Signature=b40be8c98718b25025ca5cb2bc06ba8139b567963aff8254a8ec7f182ff44e31&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKLQAKP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh0BGQsNjmOugB7iUNAcqIjnekdMOIfb0SGSdSS2OcUAiEA5V9gbVI%2FftwGlj4LaCEor83TeWxCBhPuTqr4Cu9lXlUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHmRIiQ54D9zJXfJIircA42bugqoDrtb1vkQ5EU77zzxQfKcQC6ZLWpa0I3JaCza8CC67%2Brf2Lpyzw0U8w8WdDQewKYKZJmO0SK8n9IgbcYDvW5ybYetqTZdoEJp7zoAB6H%2BIKPvJOW07wMxshtqcPvXeiMbTBn3LqRGrNocghj8TfeN1lnRSHJUH5yEc6AIgqEs7WpkeEw8R8RIk3PeQL%2FnGPF6AKfac0uR%2FOX7tKWsuTtM26vw2UKyMpjy7JU1NrCxX0Slh%2BOC0%2B0utmamusGorcvyDUb0PcrJ7ISMwyJJR9OhtIdlCPTQaRrEsBUSQQYvyniKCOShzqO48JIupdgEOAo2nMAvYtkgVcwly1NDoOkjc0EgNzPp97VvfZMdMi2BDSL2jS0EOZA5vP8lwFTyudAOpdEkyUCtaT17U9YG1SUamjII3SmgB5%2BxUk%2Fa93toBklfLujJiQQZ7Lu15ntvPwaQ0dc9zxVBMkoU%2B%2BNlnDP2xuyZEKlOdBmw9Vj1FXEiJLlLxVVhC6L1adE1Sc4MU1KWHxm2Xkr4cYZ6T4Zu759n0A6Erx%2Bh4MmZadNmC%2FFLDmSagqNxdVyGRT1dTitRXKwmmmM%2BOwFUAbCB1DsQ2MWWBkHD16j0J0OYjR3gPZzF1V6UR1RopAjgMObDkMIGOqUBe4wp%2BlH4qs2RY%2BCqnLJfZzboe%2FDG%2BcRnUrlYFd%2FIckdj881aJl6yYT2Mspjtewz1TNu3%2FJfOWm5zf%2BUF7LvEnjLwQV3af1jg3D44sm6DG63QrSR6nntyLtcwFtwVIEmeSOvatdvthpfGE5DjSfBK8mc8caZPg01XNdS%2FEheBb4vkOzmQL%2BD8T6Z6rACIB8jP7ahFlkqRpHmLZWdjAbAmuYKS51D7&X-Amz-Signature=fbeedcedbfed71161fff6b2d36fa4b300a9e30e8fd1c110bd7d52e401d6f153d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKLQAKP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh0BGQsNjmOugB7iUNAcqIjnekdMOIfb0SGSdSS2OcUAiEA5V9gbVI%2FftwGlj4LaCEor83TeWxCBhPuTqr4Cu9lXlUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHmRIiQ54D9zJXfJIircA42bugqoDrtb1vkQ5EU77zzxQfKcQC6ZLWpa0I3JaCza8CC67%2Brf2Lpyzw0U8w8WdDQewKYKZJmO0SK8n9IgbcYDvW5ybYetqTZdoEJp7zoAB6H%2BIKPvJOW07wMxshtqcPvXeiMbTBn3LqRGrNocghj8TfeN1lnRSHJUH5yEc6AIgqEs7WpkeEw8R8RIk3PeQL%2FnGPF6AKfac0uR%2FOX7tKWsuTtM26vw2UKyMpjy7JU1NrCxX0Slh%2BOC0%2B0utmamusGorcvyDUb0PcrJ7ISMwyJJR9OhtIdlCPTQaRrEsBUSQQYvyniKCOShzqO48JIupdgEOAo2nMAvYtkgVcwly1NDoOkjc0EgNzPp97VvfZMdMi2BDSL2jS0EOZA5vP8lwFTyudAOpdEkyUCtaT17U9YG1SUamjII3SmgB5%2BxUk%2Fa93toBklfLujJiQQZ7Lu15ntvPwaQ0dc9zxVBMkoU%2B%2BNlnDP2xuyZEKlOdBmw9Vj1FXEiJLlLxVVhC6L1adE1Sc4MU1KWHxm2Xkr4cYZ6T4Zu759n0A6Erx%2Bh4MmZadNmC%2FFLDmSagqNxdVyGRT1dTitRXKwmmmM%2BOwFUAbCB1DsQ2MWWBkHD16j0J0OYjR3gPZzF1V6UR1RopAjgMObDkMIGOqUBe4wp%2BlH4qs2RY%2BCqnLJfZzboe%2FDG%2BcRnUrlYFd%2FIckdj881aJl6yYT2Mspjtewz1TNu3%2FJfOWm5zf%2BUF7LvEnjLwQV3af1jg3D44sm6DG63QrSR6nntyLtcwFtwVIEmeSOvatdvthpfGE5DjSfBK8mc8caZPg01XNdS%2FEheBb4vkOzmQL%2BD8T6Z6rACIB8jP7ahFlkqRpHmLZWdjAbAmuYKS51D7&X-Amz-Signature=e9f4376c737cad8cf97831dfbd204760953b3a30c7e2eb59a44cd511acfe8ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKLQAKP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh0BGQsNjmOugB7iUNAcqIjnekdMOIfb0SGSdSS2OcUAiEA5V9gbVI%2FftwGlj4LaCEor83TeWxCBhPuTqr4Cu9lXlUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHmRIiQ54D9zJXfJIircA42bugqoDrtb1vkQ5EU77zzxQfKcQC6ZLWpa0I3JaCza8CC67%2Brf2Lpyzw0U8w8WdDQewKYKZJmO0SK8n9IgbcYDvW5ybYetqTZdoEJp7zoAB6H%2BIKPvJOW07wMxshtqcPvXeiMbTBn3LqRGrNocghj8TfeN1lnRSHJUH5yEc6AIgqEs7WpkeEw8R8RIk3PeQL%2FnGPF6AKfac0uR%2FOX7tKWsuTtM26vw2UKyMpjy7JU1NrCxX0Slh%2BOC0%2B0utmamusGorcvyDUb0PcrJ7ISMwyJJR9OhtIdlCPTQaRrEsBUSQQYvyniKCOShzqO48JIupdgEOAo2nMAvYtkgVcwly1NDoOkjc0EgNzPp97VvfZMdMi2BDSL2jS0EOZA5vP8lwFTyudAOpdEkyUCtaT17U9YG1SUamjII3SmgB5%2BxUk%2Fa93toBklfLujJiQQZ7Lu15ntvPwaQ0dc9zxVBMkoU%2B%2BNlnDP2xuyZEKlOdBmw9Vj1FXEiJLlLxVVhC6L1adE1Sc4MU1KWHxm2Xkr4cYZ6T4Zu759n0A6Erx%2Bh4MmZadNmC%2FFLDmSagqNxdVyGRT1dTitRXKwmmmM%2BOwFUAbCB1DsQ2MWWBkHD16j0J0OYjR3gPZzF1V6UR1RopAjgMObDkMIGOqUBe4wp%2BlH4qs2RY%2BCqnLJfZzboe%2FDG%2BcRnUrlYFd%2FIckdj881aJl6yYT2Mspjtewz1TNu3%2FJfOWm5zf%2BUF7LvEnjLwQV3af1jg3D44sm6DG63QrSR6nntyLtcwFtwVIEmeSOvatdvthpfGE5DjSfBK8mc8caZPg01XNdS%2FEheBb4vkOzmQL%2BD8T6Z6rACIB8jP7ahFlkqRpHmLZWdjAbAmuYKS51D7&X-Amz-Signature=2716ffe46dd469a93975a01980096bb1fff573ae7c8d88da91a2c36c041b4023&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKLQAKP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh0BGQsNjmOugB7iUNAcqIjnekdMOIfb0SGSdSS2OcUAiEA5V9gbVI%2FftwGlj4LaCEor83TeWxCBhPuTqr4Cu9lXlUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHmRIiQ54D9zJXfJIircA42bugqoDrtb1vkQ5EU77zzxQfKcQC6ZLWpa0I3JaCza8CC67%2Brf2Lpyzw0U8w8WdDQewKYKZJmO0SK8n9IgbcYDvW5ybYetqTZdoEJp7zoAB6H%2BIKPvJOW07wMxshtqcPvXeiMbTBn3LqRGrNocghj8TfeN1lnRSHJUH5yEc6AIgqEs7WpkeEw8R8RIk3PeQL%2FnGPF6AKfac0uR%2FOX7tKWsuTtM26vw2UKyMpjy7JU1NrCxX0Slh%2BOC0%2B0utmamusGorcvyDUb0PcrJ7ISMwyJJR9OhtIdlCPTQaRrEsBUSQQYvyniKCOShzqO48JIupdgEOAo2nMAvYtkgVcwly1NDoOkjc0EgNzPp97VvfZMdMi2BDSL2jS0EOZA5vP8lwFTyudAOpdEkyUCtaT17U9YG1SUamjII3SmgB5%2BxUk%2Fa93toBklfLujJiQQZ7Lu15ntvPwaQ0dc9zxVBMkoU%2B%2BNlnDP2xuyZEKlOdBmw9Vj1FXEiJLlLxVVhC6L1adE1Sc4MU1KWHxm2Xkr4cYZ6T4Zu759n0A6Erx%2Bh4MmZadNmC%2FFLDmSagqNxdVyGRT1dTitRXKwmmmM%2BOwFUAbCB1DsQ2MWWBkHD16j0J0OYjR3gPZzF1V6UR1RopAjgMObDkMIGOqUBe4wp%2BlH4qs2RY%2BCqnLJfZzboe%2FDG%2BcRnUrlYFd%2FIckdj881aJl6yYT2Mspjtewz1TNu3%2FJfOWm5zf%2BUF7LvEnjLwQV3af1jg3D44sm6DG63QrSR6nntyLtcwFtwVIEmeSOvatdvthpfGE5DjSfBK8mc8caZPg01XNdS%2FEheBb4vkOzmQL%2BD8T6Z6rACIB8jP7ahFlkqRpHmLZWdjAbAmuYKS51D7&X-Amz-Signature=6467a8c9bba69ee5b82da656ea49e5c1d38de54fa395aa765837d5fbfb27bd99&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKLQAKP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh0BGQsNjmOugB7iUNAcqIjnekdMOIfb0SGSdSS2OcUAiEA5V9gbVI%2FftwGlj4LaCEor83TeWxCBhPuTqr4Cu9lXlUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHmRIiQ54D9zJXfJIircA42bugqoDrtb1vkQ5EU77zzxQfKcQC6ZLWpa0I3JaCza8CC67%2Brf2Lpyzw0U8w8WdDQewKYKZJmO0SK8n9IgbcYDvW5ybYetqTZdoEJp7zoAB6H%2BIKPvJOW07wMxshtqcPvXeiMbTBn3LqRGrNocghj8TfeN1lnRSHJUH5yEc6AIgqEs7WpkeEw8R8RIk3PeQL%2FnGPF6AKfac0uR%2FOX7tKWsuTtM26vw2UKyMpjy7JU1NrCxX0Slh%2BOC0%2B0utmamusGorcvyDUb0PcrJ7ISMwyJJR9OhtIdlCPTQaRrEsBUSQQYvyniKCOShzqO48JIupdgEOAo2nMAvYtkgVcwly1NDoOkjc0EgNzPp97VvfZMdMi2BDSL2jS0EOZA5vP8lwFTyudAOpdEkyUCtaT17U9YG1SUamjII3SmgB5%2BxUk%2Fa93toBklfLujJiQQZ7Lu15ntvPwaQ0dc9zxVBMkoU%2B%2BNlnDP2xuyZEKlOdBmw9Vj1FXEiJLlLxVVhC6L1adE1Sc4MU1KWHxm2Xkr4cYZ6T4Zu759n0A6Erx%2Bh4MmZadNmC%2FFLDmSagqNxdVyGRT1dTitRXKwmmmM%2BOwFUAbCB1DsQ2MWWBkHD16j0J0OYjR3gPZzF1V6UR1RopAjgMObDkMIGOqUBe4wp%2BlH4qs2RY%2BCqnLJfZzboe%2FDG%2BcRnUrlYFd%2FIckdj881aJl6yYT2Mspjtewz1TNu3%2FJfOWm5zf%2BUF7LvEnjLwQV3af1jg3D44sm6DG63QrSR6nntyLtcwFtwVIEmeSOvatdvthpfGE5DjSfBK8mc8caZPg01XNdS%2FEheBb4vkOzmQL%2BD8T6Z6rACIB8jP7ahFlkqRpHmLZWdjAbAmuYKS51D7&X-Amz-Signature=74beca23c64b832f4e8a3ceba5be24e747f866fbcbfe9f8a19a14bac056eee3b&X-Amz-SignedHeaders=host&x-id=GetObject)
