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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2RSOWW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICinvySAM%2BSqo533p%2BIc06BbJvtfkr66J5k%2BY%2Bmge%2BcfAiEAmD9hsrWobo2ELnmn0391nCdJfkPdaLa%2F02hRshb7FScq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1KXfVV%2FxRa5bja3CrcAynwyxEgz%2Fiv87%2FybzPOBuvhwFnnhb9BJsgdn0uPrpfRFu0nUS1k2ExUnWD9cHm%2FcIrYAwW8n6mj7na2U%2BcnrjwkEU%2BipatvU3WC5egXKMLhimxo6XVnUISeXeM1spN%2F8soZ1ROrrv%2BC6ip9YZuK4tHvMkci7gXIOMilo%2Bb5EgC6JKwdyOLBwkzEuI1o%2BMJW1HrgUGFt6CLtqI5Y8tRhJE7F5Zjywqg5iGmqskiWZH1onE%2FchtiAQmXR2ti6dZUdpCKttcAt1Ym6QX8JgSkH3EjaP2spX1xfh2kiHXb3imEyWlXT6bEKmGKXlQxzaQkpPnxHWgLxKFEpQ9sU4ujzsEZq9%2BrGBIAaYBChCPUmC2qWuFmho2XCRwqXIi%2FRDUcZG1fWljW5371kLpjui9AjY3FUB9kfjKOccnK928BQZ0m7ImtqOJQ1hakwvE%2BlK%2BfCZEvlvSk4pdZIJddBlipBrBnZva6EJbjiPh9ANtfbwWMXsLscTKMC%2BhpDTGTyGqPYNGXSb%2Ftv6bIU0Uj%2B583IO2GVMMj9tLf6En3xo8GXetcftEa7GZK5OTuxbvP3Iix1YguuITqlExjJc0%2FSIh6sid1m5jbfVsvYse3MA4t8GsJC3OIzUKPsr2IaKqfEMIf%2B6L4GOqUBFE3ZcKeq%2FdyRIzxQ%2BV6mdLGvhN3qnorE6%2BUuk6VsHj9UhMiyvS3KpvNv%2BOzAbV6oyJs1tJZkw0oU5MJGGGSm6xViqFOKIOMSTNxKayO1DNAJQJE%2FnhYoMhyGv%2FLQwC5ABLd2Tle4LJW6QTtdDlNgZ2ey0mLPlItSUVaLxhRfxjIkELCq8iCspgI6DI2%2FkklU7nS%2BcsQ8Nm1guw3T7mUjdPPBjaRu&X-Amz-Signature=d694a57040e67126bc7dde32d09518d6980aebe7e79663fb3049dd0e04d6756e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2RSOWW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICinvySAM%2BSqo533p%2BIc06BbJvtfkr66J5k%2BY%2Bmge%2BcfAiEAmD9hsrWobo2ELnmn0391nCdJfkPdaLa%2F02hRshb7FScq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1KXfVV%2FxRa5bja3CrcAynwyxEgz%2Fiv87%2FybzPOBuvhwFnnhb9BJsgdn0uPrpfRFu0nUS1k2ExUnWD9cHm%2FcIrYAwW8n6mj7na2U%2BcnrjwkEU%2BipatvU3WC5egXKMLhimxo6XVnUISeXeM1spN%2F8soZ1ROrrv%2BC6ip9YZuK4tHvMkci7gXIOMilo%2Bb5EgC6JKwdyOLBwkzEuI1o%2BMJW1HrgUGFt6CLtqI5Y8tRhJE7F5Zjywqg5iGmqskiWZH1onE%2FchtiAQmXR2ti6dZUdpCKttcAt1Ym6QX8JgSkH3EjaP2spX1xfh2kiHXb3imEyWlXT6bEKmGKXlQxzaQkpPnxHWgLxKFEpQ9sU4ujzsEZq9%2BrGBIAaYBChCPUmC2qWuFmho2XCRwqXIi%2FRDUcZG1fWljW5371kLpjui9AjY3FUB9kfjKOccnK928BQZ0m7ImtqOJQ1hakwvE%2BlK%2BfCZEvlvSk4pdZIJddBlipBrBnZva6EJbjiPh9ANtfbwWMXsLscTKMC%2BhpDTGTyGqPYNGXSb%2Ftv6bIU0Uj%2B583IO2GVMMj9tLf6En3xo8GXetcftEa7GZK5OTuxbvP3Iix1YguuITqlExjJc0%2FSIh6sid1m5jbfVsvYse3MA4t8GsJC3OIzUKPsr2IaKqfEMIf%2B6L4GOqUBFE3ZcKeq%2FdyRIzxQ%2BV6mdLGvhN3qnorE6%2BUuk6VsHj9UhMiyvS3KpvNv%2BOzAbV6oyJs1tJZkw0oU5MJGGGSm6xViqFOKIOMSTNxKayO1DNAJQJE%2FnhYoMhyGv%2FLQwC5ABLd2Tle4LJW6QTtdDlNgZ2ey0mLPlItSUVaLxhRfxjIkELCq8iCspgI6DI2%2FkklU7nS%2BcsQ8Nm1guw3T7mUjdPPBjaRu&X-Amz-Signature=32a8e7d01b605c86e11954d2ee9c30d266db0714ef98d56bf9dba5fa25b03f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2RSOWW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICinvySAM%2BSqo533p%2BIc06BbJvtfkr66J5k%2BY%2Bmge%2BcfAiEAmD9hsrWobo2ELnmn0391nCdJfkPdaLa%2F02hRshb7FScq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1KXfVV%2FxRa5bja3CrcAynwyxEgz%2Fiv87%2FybzPOBuvhwFnnhb9BJsgdn0uPrpfRFu0nUS1k2ExUnWD9cHm%2FcIrYAwW8n6mj7na2U%2BcnrjwkEU%2BipatvU3WC5egXKMLhimxo6XVnUISeXeM1spN%2F8soZ1ROrrv%2BC6ip9YZuK4tHvMkci7gXIOMilo%2Bb5EgC6JKwdyOLBwkzEuI1o%2BMJW1HrgUGFt6CLtqI5Y8tRhJE7F5Zjywqg5iGmqskiWZH1onE%2FchtiAQmXR2ti6dZUdpCKttcAt1Ym6QX8JgSkH3EjaP2spX1xfh2kiHXb3imEyWlXT6bEKmGKXlQxzaQkpPnxHWgLxKFEpQ9sU4ujzsEZq9%2BrGBIAaYBChCPUmC2qWuFmho2XCRwqXIi%2FRDUcZG1fWljW5371kLpjui9AjY3FUB9kfjKOccnK928BQZ0m7ImtqOJQ1hakwvE%2BlK%2BfCZEvlvSk4pdZIJddBlipBrBnZva6EJbjiPh9ANtfbwWMXsLscTKMC%2BhpDTGTyGqPYNGXSb%2Ftv6bIU0Uj%2B583IO2GVMMj9tLf6En3xo8GXetcftEa7GZK5OTuxbvP3Iix1YguuITqlExjJc0%2FSIh6sid1m5jbfVsvYse3MA4t8GsJC3OIzUKPsr2IaKqfEMIf%2B6L4GOqUBFE3ZcKeq%2FdyRIzxQ%2BV6mdLGvhN3qnorE6%2BUuk6VsHj9UhMiyvS3KpvNv%2BOzAbV6oyJs1tJZkw0oU5MJGGGSm6xViqFOKIOMSTNxKayO1DNAJQJE%2FnhYoMhyGv%2FLQwC5ABLd2Tle4LJW6QTtdDlNgZ2ey0mLPlItSUVaLxhRfxjIkELCq8iCspgI6DI2%2FkklU7nS%2BcsQ8Nm1guw3T7mUjdPPBjaRu&X-Amz-Signature=e1b0ffa3641eb1f56e76cccd49cb9be23e7d53aab6c59ce55b7b49953b0977fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2RSOWW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICinvySAM%2BSqo533p%2BIc06BbJvtfkr66J5k%2BY%2Bmge%2BcfAiEAmD9hsrWobo2ELnmn0391nCdJfkPdaLa%2F02hRshb7FScq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1KXfVV%2FxRa5bja3CrcAynwyxEgz%2Fiv87%2FybzPOBuvhwFnnhb9BJsgdn0uPrpfRFu0nUS1k2ExUnWD9cHm%2FcIrYAwW8n6mj7na2U%2BcnrjwkEU%2BipatvU3WC5egXKMLhimxo6XVnUISeXeM1spN%2F8soZ1ROrrv%2BC6ip9YZuK4tHvMkci7gXIOMilo%2Bb5EgC6JKwdyOLBwkzEuI1o%2BMJW1HrgUGFt6CLtqI5Y8tRhJE7F5Zjywqg5iGmqskiWZH1onE%2FchtiAQmXR2ti6dZUdpCKttcAt1Ym6QX8JgSkH3EjaP2spX1xfh2kiHXb3imEyWlXT6bEKmGKXlQxzaQkpPnxHWgLxKFEpQ9sU4ujzsEZq9%2BrGBIAaYBChCPUmC2qWuFmho2XCRwqXIi%2FRDUcZG1fWljW5371kLpjui9AjY3FUB9kfjKOccnK928BQZ0m7ImtqOJQ1hakwvE%2BlK%2BfCZEvlvSk4pdZIJddBlipBrBnZva6EJbjiPh9ANtfbwWMXsLscTKMC%2BhpDTGTyGqPYNGXSb%2Ftv6bIU0Uj%2B583IO2GVMMj9tLf6En3xo8GXetcftEa7GZK5OTuxbvP3Iix1YguuITqlExjJc0%2FSIh6sid1m5jbfVsvYse3MA4t8GsJC3OIzUKPsr2IaKqfEMIf%2B6L4GOqUBFE3ZcKeq%2FdyRIzxQ%2BV6mdLGvhN3qnorE6%2BUuk6VsHj9UhMiyvS3KpvNv%2BOzAbV6oyJs1tJZkw0oU5MJGGGSm6xViqFOKIOMSTNxKayO1DNAJQJE%2FnhYoMhyGv%2FLQwC5ABLd2Tle4LJW6QTtdDlNgZ2ey0mLPlItSUVaLxhRfxjIkELCq8iCspgI6DI2%2FkklU7nS%2BcsQ8Nm1guw3T7mUjdPPBjaRu&X-Amz-Signature=626a648d5730aece77fc3552f4d73634ab73df404a5a4526268d8bd7235e2a78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2RSOWW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICinvySAM%2BSqo533p%2BIc06BbJvtfkr66J5k%2BY%2Bmge%2BcfAiEAmD9hsrWobo2ELnmn0391nCdJfkPdaLa%2F02hRshb7FScq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1KXfVV%2FxRa5bja3CrcAynwyxEgz%2Fiv87%2FybzPOBuvhwFnnhb9BJsgdn0uPrpfRFu0nUS1k2ExUnWD9cHm%2FcIrYAwW8n6mj7na2U%2BcnrjwkEU%2BipatvU3WC5egXKMLhimxo6XVnUISeXeM1spN%2F8soZ1ROrrv%2BC6ip9YZuK4tHvMkci7gXIOMilo%2Bb5EgC6JKwdyOLBwkzEuI1o%2BMJW1HrgUGFt6CLtqI5Y8tRhJE7F5Zjywqg5iGmqskiWZH1onE%2FchtiAQmXR2ti6dZUdpCKttcAt1Ym6QX8JgSkH3EjaP2spX1xfh2kiHXb3imEyWlXT6bEKmGKXlQxzaQkpPnxHWgLxKFEpQ9sU4ujzsEZq9%2BrGBIAaYBChCPUmC2qWuFmho2XCRwqXIi%2FRDUcZG1fWljW5371kLpjui9AjY3FUB9kfjKOccnK928BQZ0m7ImtqOJQ1hakwvE%2BlK%2BfCZEvlvSk4pdZIJddBlipBrBnZva6EJbjiPh9ANtfbwWMXsLscTKMC%2BhpDTGTyGqPYNGXSb%2Ftv6bIU0Uj%2B583IO2GVMMj9tLf6En3xo8GXetcftEa7GZK5OTuxbvP3Iix1YguuITqlExjJc0%2FSIh6sid1m5jbfVsvYse3MA4t8GsJC3OIzUKPsr2IaKqfEMIf%2B6L4GOqUBFE3ZcKeq%2FdyRIzxQ%2BV6mdLGvhN3qnorE6%2BUuk6VsHj9UhMiyvS3KpvNv%2BOzAbV6oyJs1tJZkw0oU5MJGGGSm6xViqFOKIOMSTNxKayO1DNAJQJE%2FnhYoMhyGv%2FLQwC5ABLd2Tle4LJW6QTtdDlNgZ2ey0mLPlItSUVaLxhRfxjIkELCq8iCspgI6DI2%2FkklU7nS%2BcsQ8Nm1guw3T7mUjdPPBjaRu&X-Amz-Signature=b981ccd9b483a9b87ed54d6ac856631bce0091e7dbbcd9bfa9c69f481ae84d18&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2RSOWW%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICinvySAM%2BSqo533p%2BIc06BbJvtfkr66J5k%2BY%2Bmge%2BcfAiEAmD9hsrWobo2ELnmn0391nCdJfkPdaLa%2F02hRshb7FScq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDN1KXfVV%2FxRa5bja3CrcAynwyxEgz%2Fiv87%2FybzPOBuvhwFnnhb9BJsgdn0uPrpfRFu0nUS1k2ExUnWD9cHm%2FcIrYAwW8n6mj7na2U%2BcnrjwkEU%2BipatvU3WC5egXKMLhimxo6XVnUISeXeM1spN%2F8soZ1ROrrv%2BC6ip9YZuK4tHvMkci7gXIOMilo%2Bb5EgC6JKwdyOLBwkzEuI1o%2BMJW1HrgUGFt6CLtqI5Y8tRhJE7F5Zjywqg5iGmqskiWZH1onE%2FchtiAQmXR2ti6dZUdpCKttcAt1Ym6QX8JgSkH3EjaP2spX1xfh2kiHXb3imEyWlXT6bEKmGKXlQxzaQkpPnxHWgLxKFEpQ9sU4ujzsEZq9%2BrGBIAaYBChCPUmC2qWuFmho2XCRwqXIi%2FRDUcZG1fWljW5371kLpjui9AjY3FUB9kfjKOccnK928BQZ0m7ImtqOJQ1hakwvE%2BlK%2BfCZEvlvSk4pdZIJddBlipBrBnZva6EJbjiPh9ANtfbwWMXsLscTKMC%2BhpDTGTyGqPYNGXSb%2Ftv6bIU0Uj%2B583IO2GVMMj9tLf6En3xo8GXetcftEa7GZK5OTuxbvP3Iix1YguuITqlExjJc0%2FSIh6sid1m5jbfVsvYse3MA4t8GsJC3OIzUKPsr2IaKqfEMIf%2B6L4GOqUBFE3ZcKeq%2FdyRIzxQ%2BV6mdLGvhN3qnorE6%2BUuk6VsHj9UhMiyvS3KpvNv%2BOzAbV6oyJs1tJZkw0oU5MJGGGSm6xViqFOKIOMSTNxKayO1DNAJQJE%2FnhYoMhyGv%2FLQwC5ABLd2Tle4LJW6QTtdDlNgZ2ey0mLPlItSUVaLxhRfxjIkELCq8iCspgI6DI2%2FkklU7nS%2BcsQ8Nm1guw3T7mUjdPPBjaRu&X-Amz-Signature=c826fc420f8e0bf8196bf027d12cc34b087d943bb649aa2d07bb4c05cdc39e97&X-Amz-SignedHeaders=host&x-id=GetObject)
