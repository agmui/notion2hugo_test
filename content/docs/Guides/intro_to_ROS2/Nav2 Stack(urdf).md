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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGU3ZA2A%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA9jRRMjJO16lDaVSKs4UH3HiC1UOVVQG6OmK6f4nxjXAiA%2FY1EfKfKMbsJ%2FV9ZSBc%2F7wgb4H6Qd3fnWrv28CPJ3HSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4piJUBerU2VPPttKtwD0d3sxdC5pC%2BBC9J0JID0yd2%2FialKfC%2B1%2BK2OqYSxlpJ%2BwgvSmDCiz3uPOnMFb4xRfYA3QcdGpdt3TGLLWsYV9Xm1L9mZPyxX2ZOMMv1AWPTUkyNdGaIoLtcqJtv%2F9CxZQb6h%2FY3xYyBj0JN4Y1yak0aVKPuVS5tnvIQ3LcUhzG3eRJp7hs2fYM5f5PMevihEJhkTeS1Jxdbp2rhVnXtmV4z5YjfxuY2AwTCt5wVEQl%2FbxQ%2B%2FqY490G%2Fv05URnPu4YRAyR6S%2FmTpKpIOOSif6btZeKuAtuyZD0tUX%2F0n%2BxgQoSvGAjE4cb06x0%2Bo9Ly0Mc87aCzbqn6MTkX2Q6a3udDlPsmyOS4HvZfRx%2BO98mTvxXHPBLqnQ5kuHMPA7llN6UewEVLHobxU969B6rXSR0BY8%2F5V1ZpkrBBXeONKjqd70WPkC%2BEHAkF84ihX355DoTNvnmaQC9hPIRYvCMXL6PJDu0mlzkBSiWceaAEuOIo86GJfA3guZSKLGjuyf%2BZs92Fa109ABVqRBXLuJ%2FV%2FBmuOfUNDLXFHMWkXgfP7O4RveSkt%2FAhjeQ8%2F4XxPRL5SBLIS%2FkGbwbnPYxilSKROHVzZWfONBLKkNeRjtyK%2F2XKYiT%2B44qVP0810GZ9gwquXTwAY6pgEswAz%2B%2BZ%2Bv3Evcs6qb4C1aJUzhUgHtaYXg7RrfeYHSCjLFFSv8wppfIvWIvAjKEcOr8Yb843YSRj8tW4%2B%2F1QhE8ikv7Y0yLvkiS0aOdvX3gHCrfd3eEnDSbspJyiyT3lft48KMWk9eD0t0Rmjg%2BfcSBeZVCMYUwW4TQdAm1ZeSeTsPGC5gPxQJgpdzjP%2F8nwds461wgffNAHzIWhuV%2B58H4nBUrNkQ&X-Amz-Signature=5089d5c3371c81823c88b207f20c355917b82a2c4cdb897c93bbcfdc5f8cc43d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGU3ZA2A%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA9jRRMjJO16lDaVSKs4UH3HiC1UOVVQG6OmK6f4nxjXAiA%2FY1EfKfKMbsJ%2FV9ZSBc%2F7wgb4H6Qd3fnWrv28CPJ3HSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4piJUBerU2VPPttKtwD0d3sxdC5pC%2BBC9J0JID0yd2%2FialKfC%2B1%2BK2OqYSxlpJ%2BwgvSmDCiz3uPOnMFb4xRfYA3QcdGpdt3TGLLWsYV9Xm1L9mZPyxX2ZOMMv1AWPTUkyNdGaIoLtcqJtv%2F9CxZQb6h%2FY3xYyBj0JN4Y1yak0aVKPuVS5tnvIQ3LcUhzG3eRJp7hs2fYM5f5PMevihEJhkTeS1Jxdbp2rhVnXtmV4z5YjfxuY2AwTCt5wVEQl%2FbxQ%2B%2FqY490G%2Fv05URnPu4YRAyR6S%2FmTpKpIOOSif6btZeKuAtuyZD0tUX%2F0n%2BxgQoSvGAjE4cb06x0%2Bo9Ly0Mc87aCzbqn6MTkX2Q6a3udDlPsmyOS4HvZfRx%2BO98mTvxXHPBLqnQ5kuHMPA7llN6UewEVLHobxU969B6rXSR0BY8%2F5V1ZpkrBBXeONKjqd70WPkC%2BEHAkF84ihX355DoTNvnmaQC9hPIRYvCMXL6PJDu0mlzkBSiWceaAEuOIo86GJfA3guZSKLGjuyf%2BZs92Fa109ABVqRBXLuJ%2FV%2FBmuOfUNDLXFHMWkXgfP7O4RveSkt%2FAhjeQ8%2F4XxPRL5SBLIS%2FkGbwbnPYxilSKROHVzZWfONBLKkNeRjtyK%2F2XKYiT%2B44qVP0810GZ9gwquXTwAY6pgEswAz%2B%2BZ%2Bv3Evcs6qb4C1aJUzhUgHtaYXg7RrfeYHSCjLFFSv8wppfIvWIvAjKEcOr8Yb843YSRj8tW4%2B%2F1QhE8ikv7Y0yLvkiS0aOdvX3gHCrfd3eEnDSbspJyiyT3lft48KMWk9eD0t0Rmjg%2BfcSBeZVCMYUwW4TQdAm1ZeSeTsPGC5gPxQJgpdzjP%2F8nwds461wgffNAHzIWhuV%2B58H4nBUrNkQ&X-Amz-Signature=2f080d4728b1fabacf032225ca2005003bf2a1193f5074d382b1090c5ccee21e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGU3ZA2A%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA9jRRMjJO16lDaVSKs4UH3HiC1UOVVQG6OmK6f4nxjXAiA%2FY1EfKfKMbsJ%2FV9ZSBc%2F7wgb4H6Qd3fnWrv28CPJ3HSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4piJUBerU2VPPttKtwD0d3sxdC5pC%2BBC9J0JID0yd2%2FialKfC%2B1%2BK2OqYSxlpJ%2BwgvSmDCiz3uPOnMFb4xRfYA3QcdGpdt3TGLLWsYV9Xm1L9mZPyxX2ZOMMv1AWPTUkyNdGaIoLtcqJtv%2F9CxZQb6h%2FY3xYyBj0JN4Y1yak0aVKPuVS5tnvIQ3LcUhzG3eRJp7hs2fYM5f5PMevihEJhkTeS1Jxdbp2rhVnXtmV4z5YjfxuY2AwTCt5wVEQl%2FbxQ%2B%2FqY490G%2Fv05URnPu4YRAyR6S%2FmTpKpIOOSif6btZeKuAtuyZD0tUX%2F0n%2BxgQoSvGAjE4cb06x0%2Bo9Ly0Mc87aCzbqn6MTkX2Q6a3udDlPsmyOS4HvZfRx%2BO98mTvxXHPBLqnQ5kuHMPA7llN6UewEVLHobxU969B6rXSR0BY8%2F5V1ZpkrBBXeONKjqd70WPkC%2BEHAkF84ihX355DoTNvnmaQC9hPIRYvCMXL6PJDu0mlzkBSiWceaAEuOIo86GJfA3guZSKLGjuyf%2BZs92Fa109ABVqRBXLuJ%2FV%2FBmuOfUNDLXFHMWkXgfP7O4RveSkt%2FAhjeQ8%2F4XxPRL5SBLIS%2FkGbwbnPYxilSKROHVzZWfONBLKkNeRjtyK%2F2XKYiT%2B44qVP0810GZ9gwquXTwAY6pgEswAz%2B%2BZ%2Bv3Evcs6qb4C1aJUzhUgHtaYXg7RrfeYHSCjLFFSv8wppfIvWIvAjKEcOr8Yb843YSRj8tW4%2B%2F1QhE8ikv7Y0yLvkiS0aOdvX3gHCrfd3eEnDSbspJyiyT3lft48KMWk9eD0t0Rmjg%2BfcSBeZVCMYUwW4TQdAm1ZeSeTsPGC5gPxQJgpdzjP%2F8nwds461wgffNAHzIWhuV%2B58H4nBUrNkQ&X-Amz-Signature=8ff52cabaa5ebff5fcb5a6385bba05ebf9b0cfb4d1a3dc1e453e10e8226c7f97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGU3ZA2A%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA9jRRMjJO16lDaVSKs4UH3HiC1UOVVQG6OmK6f4nxjXAiA%2FY1EfKfKMbsJ%2FV9ZSBc%2F7wgb4H6Qd3fnWrv28CPJ3HSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4piJUBerU2VPPttKtwD0d3sxdC5pC%2BBC9J0JID0yd2%2FialKfC%2B1%2BK2OqYSxlpJ%2BwgvSmDCiz3uPOnMFb4xRfYA3QcdGpdt3TGLLWsYV9Xm1L9mZPyxX2ZOMMv1AWPTUkyNdGaIoLtcqJtv%2F9CxZQb6h%2FY3xYyBj0JN4Y1yak0aVKPuVS5tnvIQ3LcUhzG3eRJp7hs2fYM5f5PMevihEJhkTeS1Jxdbp2rhVnXtmV4z5YjfxuY2AwTCt5wVEQl%2FbxQ%2B%2FqY490G%2Fv05URnPu4YRAyR6S%2FmTpKpIOOSif6btZeKuAtuyZD0tUX%2F0n%2BxgQoSvGAjE4cb06x0%2Bo9Ly0Mc87aCzbqn6MTkX2Q6a3udDlPsmyOS4HvZfRx%2BO98mTvxXHPBLqnQ5kuHMPA7llN6UewEVLHobxU969B6rXSR0BY8%2F5V1ZpkrBBXeONKjqd70WPkC%2BEHAkF84ihX355DoTNvnmaQC9hPIRYvCMXL6PJDu0mlzkBSiWceaAEuOIo86GJfA3guZSKLGjuyf%2BZs92Fa109ABVqRBXLuJ%2FV%2FBmuOfUNDLXFHMWkXgfP7O4RveSkt%2FAhjeQ8%2F4XxPRL5SBLIS%2FkGbwbnPYxilSKROHVzZWfONBLKkNeRjtyK%2F2XKYiT%2B44qVP0810GZ9gwquXTwAY6pgEswAz%2B%2BZ%2Bv3Evcs6qb4C1aJUzhUgHtaYXg7RrfeYHSCjLFFSv8wppfIvWIvAjKEcOr8Yb843YSRj8tW4%2B%2F1QhE8ikv7Y0yLvkiS0aOdvX3gHCrfd3eEnDSbspJyiyT3lft48KMWk9eD0t0Rmjg%2BfcSBeZVCMYUwW4TQdAm1ZeSeTsPGC5gPxQJgpdzjP%2F8nwds461wgffNAHzIWhuV%2B58H4nBUrNkQ&X-Amz-Signature=5397dc2d0201a0b02cc2e420d5749693a940d63f5495f3e036f7ae4ea2338d61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGU3ZA2A%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA9jRRMjJO16lDaVSKs4UH3HiC1UOVVQG6OmK6f4nxjXAiA%2FY1EfKfKMbsJ%2FV9ZSBc%2F7wgb4H6Qd3fnWrv28CPJ3HSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4piJUBerU2VPPttKtwD0d3sxdC5pC%2BBC9J0JID0yd2%2FialKfC%2B1%2BK2OqYSxlpJ%2BwgvSmDCiz3uPOnMFb4xRfYA3QcdGpdt3TGLLWsYV9Xm1L9mZPyxX2ZOMMv1AWPTUkyNdGaIoLtcqJtv%2F9CxZQb6h%2FY3xYyBj0JN4Y1yak0aVKPuVS5tnvIQ3LcUhzG3eRJp7hs2fYM5f5PMevihEJhkTeS1Jxdbp2rhVnXtmV4z5YjfxuY2AwTCt5wVEQl%2FbxQ%2B%2FqY490G%2Fv05URnPu4YRAyR6S%2FmTpKpIOOSif6btZeKuAtuyZD0tUX%2F0n%2BxgQoSvGAjE4cb06x0%2Bo9Ly0Mc87aCzbqn6MTkX2Q6a3udDlPsmyOS4HvZfRx%2BO98mTvxXHPBLqnQ5kuHMPA7llN6UewEVLHobxU969B6rXSR0BY8%2F5V1ZpkrBBXeONKjqd70WPkC%2BEHAkF84ihX355DoTNvnmaQC9hPIRYvCMXL6PJDu0mlzkBSiWceaAEuOIo86GJfA3guZSKLGjuyf%2BZs92Fa109ABVqRBXLuJ%2FV%2FBmuOfUNDLXFHMWkXgfP7O4RveSkt%2FAhjeQ8%2F4XxPRL5SBLIS%2FkGbwbnPYxilSKROHVzZWfONBLKkNeRjtyK%2F2XKYiT%2B44qVP0810GZ9gwquXTwAY6pgEswAz%2B%2BZ%2Bv3Evcs6qb4C1aJUzhUgHtaYXg7RrfeYHSCjLFFSv8wppfIvWIvAjKEcOr8Yb843YSRj8tW4%2B%2F1QhE8ikv7Y0yLvkiS0aOdvX3gHCrfd3eEnDSbspJyiyT3lft48KMWk9eD0t0Rmjg%2BfcSBeZVCMYUwW4TQdAm1ZeSeTsPGC5gPxQJgpdzjP%2F8nwds461wgffNAHzIWhuV%2B58H4nBUrNkQ&X-Amz-Signature=d952ae260540b239364485ca9f4fb9f2af6474d291578c0f419a206f4ef1b74b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGU3ZA2A%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA9jRRMjJO16lDaVSKs4UH3HiC1UOVVQG6OmK6f4nxjXAiA%2FY1EfKfKMbsJ%2FV9ZSBc%2F7wgb4H6Qd3fnWrv28CPJ3HSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN4piJUBerU2VPPttKtwD0d3sxdC5pC%2BBC9J0JID0yd2%2FialKfC%2B1%2BK2OqYSxlpJ%2BwgvSmDCiz3uPOnMFb4xRfYA3QcdGpdt3TGLLWsYV9Xm1L9mZPyxX2ZOMMv1AWPTUkyNdGaIoLtcqJtv%2F9CxZQb6h%2FY3xYyBj0JN4Y1yak0aVKPuVS5tnvIQ3LcUhzG3eRJp7hs2fYM5f5PMevihEJhkTeS1Jxdbp2rhVnXtmV4z5YjfxuY2AwTCt5wVEQl%2FbxQ%2B%2FqY490G%2Fv05URnPu4YRAyR6S%2FmTpKpIOOSif6btZeKuAtuyZD0tUX%2F0n%2BxgQoSvGAjE4cb06x0%2Bo9Ly0Mc87aCzbqn6MTkX2Q6a3udDlPsmyOS4HvZfRx%2BO98mTvxXHPBLqnQ5kuHMPA7llN6UewEVLHobxU969B6rXSR0BY8%2F5V1ZpkrBBXeONKjqd70WPkC%2BEHAkF84ihX355DoTNvnmaQC9hPIRYvCMXL6PJDu0mlzkBSiWceaAEuOIo86GJfA3guZSKLGjuyf%2BZs92Fa109ABVqRBXLuJ%2FV%2FBmuOfUNDLXFHMWkXgfP7O4RveSkt%2FAhjeQ8%2F4XxPRL5SBLIS%2FkGbwbnPYxilSKROHVzZWfONBLKkNeRjtyK%2F2XKYiT%2B44qVP0810GZ9gwquXTwAY6pgEswAz%2B%2BZ%2Bv3Evcs6qb4C1aJUzhUgHtaYXg7RrfeYHSCjLFFSv8wppfIvWIvAjKEcOr8Yb843YSRj8tW4%2B%2F1QhE8ikv7Y0yLvkiS0aOdvX3gHCrfd3eEnDSbspJyiyT3lft48KMWk9eD0t0Rmjg%2BfcSBeZVCMYUwW4TQdAm1ZeSeTsPGC5gPxQJgpdzjP%2F8nwds461wgffNAHzIWhuV%2B58H4nBUrNkQ&X-Amz-Signature=1d42912a5d7143ab677b8fb71df874da74d0ef5fcafc26a0ba4946e8c44ecaa2&X-Amz-SignedHeaders=host&x-id=GetObject)
