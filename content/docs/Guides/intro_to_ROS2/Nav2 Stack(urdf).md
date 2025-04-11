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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5XBNQJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDKklqsatM4x7fDQFSIVneMEEuq4AyV0W9Kx02hR1TiWgIhAMHXc494sd6pqjqDOSowKWfOaI%2FtKafkUFF%2FfVVPxJfHKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdNns%2Bf6hu9lVpgSsq3AN3O0mkNbC4fLObwuR0sHH7wp64EdTqXxGvvp715VnkCqB2FaGLgZfUscxa6TUoI9exjtuC4ANGvSMu1hrWAYT4rSKx7vGYLsOv0maQAd0nSH2t0Xsyml4RMl74TbXMReMjRuzYb8seZ0cCkmcamcklN7Ur4djH98wLdeFOb9Ve%2FscrLj%2BeeQ1tk%2BQXqY8HRHmKfUlivehiwadw60dlgs9Q4Va70a5Z3EYUketZJyaLC3k1IJjhcy4THoAqzSLMVaiG%2BusNfuo4Y9a%2Fw3V2Ed8edFGiHUe0%2FyxH3tLo6%2BfLbf8KoVZvy0c%2Fyxz6MY1g2K1x9ufLGtgSFpAOdr6vPP4sREzmJkYChDpSgYNbX%2BQiSX3fm6S6A%2B2rXbQP2%2FpiKZqPbSambYY0XomTXkT%2BW6HS5EJrswBIqSYvvw3UC5IL1alhTOcXYqkmm%2F3GHx3CWrTv2Gio2XUWKcpWX8WC8CSxKZ2ujJyP0vEyD0NO9bIG9TUCAytPrimQBAXBnOP3oJndUmaEsWbkIm0JkH2eSnauDpBO3gynFYfSH6u2%2BAOo06tipxnztvPbimXcljsJ%2B1NIATK6m1ZecH%2F6ZuSH49bOOHPwlb7P6IijjYfnjQK%2FKk9jOxTOS%2BL2LHLS7TDaseO%2FBjqkAQAuLsMUNUeSbsWaTZNdKcUiC7wx6LrRBG9xVLVntZ2rQlxIz8%2BnlWtjI9O%2Fj4ayMB0ELiamejrPpyTIyaroTVffvzbVt376oKzkvLRovZFtc%2BI7%2Bw7yyI7tW%2BnX5MDtbwaodU7wPvUwqPSJHE4Im0cY08gZ0QXrIwaxzI5yvsPTMDQrxv5VP6pVtxHDxjoT3WlFszQLNNLvK1nOQTTm0oMiohQC&X-Amz-Signature=ddea9e4711733b9044ae0f9bf91959584e794705cdda02c5fc2680d7ffb36caf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5XBNQJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDKklqsatM4x7fDQFSIVneMEEuq4AyV0W9Kx02hR1TiWgIhAMHXc494sd6pqjqDOSowKWfOaI%2FtKafkUFF%2FfVVPxJfHKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdNns%2Bf6hu9lVpgSsq3AN3O0mkNbC4fLObwuR0sHH7wp64EdTqXxGvvp715VnkCqB2FaGLgZfUscxa6TUoI9exjtuC4ANGvSMu1hrWAYT4rSKx7vGYLsOv0maQAd0nSH2t0Xsyml4RMl74TbXMReMjRuzYb8seZ0cCkmcamcklN7Ur4djH98wLdeFOb9Ve%2FscrLj%2BeeQ1tk%2BQXqY8HRHmKfUlivehiwadw60dlgs9Q4Va70a5Z3EYUketZJyaLC3k1IJjhcy4THoAqzSLMVaiG%2BusNfuo4Y9a%2Fw3V2Ed8edFGiHUe0%2FyxH3tLo6%2BfLbf8KoVZvy0c%2Fyxz6MY1g2K1x9ufLGtgSFpAOdr6vPP4sREzmJkYChDpSgYNbX%2BQiSX3fm6S6A%2B2rXbQP2%2FpiKZqPbSambYY0XomTXkT%2BW6HS5EJrswBIqSYvvw3UC5IL1alhTOcXYqkmm%2F3GHx3CWrTv2Gio2XUWKcpWX8WC8CSxKZ2ujJyP0vEyD0NO9bIG9TUCAytPrimQBAXBnOP3oJndUmaEsWbkIm0JkH2eSnauDpBO3gynFYfSH6u2%2BAOo06tipxnztvPbimXcljsJ%2B1NIATK6m1ZecH%2F6ZuSH49bOOHPwlb7P6IijjYfnjQK%2FKk9jOxTOS%2BL2LHLS7TDaseO%2FBjqkAQAuLsMUNUeSbsWaTZNdKcUiC7wx6LrRBG9xVLVntZ2rQlxIz8%2BnlWtjI9O%2Fj4ayMB0ELiamejrPpyTIyaroTVffvzbVt376oKzkvLRovZFtc%2BI7%2Bw7yyI7tW%2BnX5MDtbwaodU7wPvUwqPSJHE4Im0cY08gZ0QXrIwaxzI5yvsPTMDQrxv5VP6pVtxHDxjoT3WlFszQLNNLvK1nOQTTm0oMiohQC&X-Amz-Signature=c861afbc1e49a9a46bafb9144710319102ece01f6c352afedd2658bb512c9ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5XBNQJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDKklqsatM4x7fDQFSIVneMEEuq4AyV0W9Kx02hR1TiWgIhAMHXc494sd6pqjqDOSowKWfOaI%2FtKafkUFF%2FfVVPxJfHKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdNns%2Bf6hu9lVpgSsq3AN3O0mkNbC4fLObwuR0sHH7wp64EdTqXxGvvp715VnkCqB2FaGLgZfUscxa6TUoI9exjtuC4ANGvSMu1hrWAYT4rSKx7vGYLsOv0maQAd0nSH2t0Xsyml4RMl74TbXMReMjRuzYb8seZ0cCkmcamcklN7Ur4djH98wLdeFOb9Ve%2FscrLj%2BeeQ1tk%2BQXqY8HRHmKfUlivehiwadw60dlgs9Q4Va70a5Z3EYUketZJyaLC3k1IJjhcy4THoAqzSLMVaiG%2BusNfuo4Y9a%2Fw3V2Ed8edFGiHUe0%2FyxH3tLo6%2BfLbf8KoVZvy0c%2Fyxz6MY1g2K1x9ufLGtgSFpAOdr6vPP4sREzmJkYChDpSgYNbX%2BQiSX3fm6S6A%2B2rXbQP2%2FpiKZqPbSambYY0XomTXkT%2BW6HS5EJrswBIqSYvvw3UC5IL1alhTOcXYqkmm%2F3GHx3CWrTv2Gio2XUWKcpWX8WC8CSxKZ2ujJyP0vEyD0NO9bIG9TUCAytPrimQBAXBnOP3oJndUmaEsWbkIm0JkH2eSnauDpBO3gynFYfSH6u2%2BAOo06tipxnztvPbimXcljsJ%2B1NIATK6m1ZecH%2F6ZuSH49bOOHPwlb7P6IijjYfnjQK%2FKk9jOxTOS%2BL2LHLS7TDaseO%2FBjqkAQAuLsMUNUeSbsWaTZNdKcUiC7wx6LrRBG9xVLVntZ2rQlxIz8%2BnlWtjI9O%2Fj4ayMB0ELiamejrPpyTIyaroTVffvzbVt376oKzkvLRovZFtc%2BI7%2Bw7yyI7tW%2BnX5MDtbwaodU7wPvUwqPSJHE4Im0cY08gZ0QXrIwaxzI5yvsPTMDQrxv5VP6pVtxHDxjoT3WlFszQLNNLvK1nOQTTm0oMiohQC&X-Amz-Signature=07dfa5d7fcb8acaf08602db77969b75b048b08e5376cdff5bcafe170d4021699&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5XBNQJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDKklqsatM4x7fDQFSIVneMEEuq4AyV0W9Kx02hR1TiWgIhAMHXc494sd6pqjqDOSowKWfOaI%2FtKafkUFF%2FfVVPxJfHKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdNns%2Bf6hu9lVpgSsq3AN3O0mkNbC4fLObwuR0sHH7wp64EdTqXxGvvp715VnkCqB2FaGLgZfUscxa6TUoI9exjtuC4ANGvSMu1hrWAYT4rSKx7vGYLsOv0maQAd0nSH2t0Xsyml4RMl74TbXMReMjRuzYb8seZ0cCkmcamcklN7Ur4djH98wLdeFOb9Ve%2FscrLj%2BeeQ1tk%2BQXqY8HRHmKfUlivehiwadw60dlgs9Q4Va70a5Z3EYUketZJyaLC3k1IJjhcy4THoAqzSLMVaiG%2BusNfuo4Y9a%2Fw3V2Ed8edFGiHUe0%2FyxH3tLo6%2BfLbf8KoVZvy0c%2Fyxz6MY1g2K1x9ufLGtgSFpAOdr6vPP4sREzmJkYChDpSgYNbX%2BQiSX3fm6S6A%2B2rXbQP2%2FpiKZqPbSambYY0XomTXkT%2BW6HS5EJrswBIqSYvvw3UC5IL1alhTOcXYqkmm%2F3GHx3CWrTv2Gio2XUWKcpWX8WC8CSxKZ2ujJyP0vEyD0NO9bIG9TUCAytPrimQBAXBnOP3oJndUmaEsWbkIm0JkH2eSnauDpBO3gynFYfSH6u2%2BAOo06tipxnztvPbimXcljsJ%2B1NIATK6m1ZecH%2F6ZuSH49bOOHPwlb7P6IijjYfnjQK%2FKk9jOxTOS%2BL2LHLS7TDaseO%2FBjqkAQAuLsMUNUeSbsWaTZNdKcUiC7wx6LrRBG9xVLVntZ2rQlxIz8%2BnlWtjI9O%2Fj4ayMB0ELiamejrPpyTIyaroTVffvzbVt376oKzkvLRovZFtc%2BI7%2Bw7yyI7tW%2BnX5MDtbwaodU7wPvUwqPSJHE4Im0cY08gZ0QXrIwaxzI5yvsPTMDQrxv5VP6pVtxHDxjoT3WlFszQLNNLvK1nOQTTm0oMiohQC&X-Amz-Signature=abceaf3f0dca073b0868d0042bc4df56f284543ef3b6577369b2d34d42a5658b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5XBNQJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDKklqsatM4x7fDQFSIVneMEEuq4AyV0W9Kx02hR1TiWgIhAMHXc494sd6pqjqDOSowKWfOaI%2FtKafkUFF%2FfVVPxJfHKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdNns%2Bf6hu9lVpgSsq3AN3O0mkNbC4fLObwuR0sHH7wp64EdTqXxGvvp715VnkCqB2FaGLgZfUscxa6TUoI9exjtuC4ANGvSMu1hrWAYT4rSKx7vGYLsOv0maQAd0nSH2t0Xsyml4RMl74TbXMReMjRuzYb8seZ0cCkmcamcklN7Ur4djH98wLdeFOb9Ve%2FscrLj%2BeeQ1tk%2BQXqY8HRHmKfUlivehiwadw60dlgs9Q4Va70a5Z3EYUketZJyaLC3k1IJjhcy4THoAqzSLMVaiG%2BusNfuo4Y9a%2Fw3V2Ed8edFGiHUe0%2FyxH3tLo6%2BfLbf8KoVZvy0c%2Fyxz6MY1g2K1x9ufLGtgSFpAOdr6vPP4sREzmJkYChDpSgYNbX%2BQiSX3fm6S6A%2B2rXbQP2%2FpiKZqPbSambYY0XomTXkT%2BW6HS5EJrswBIqSYvvw3UC5IL1alhTOcXYqkmm%2F3GHx3CWrTv2Gio2XUWKcpWX8WC8CSxKZ2ujJyP0vEyD0NO9bIG9TUCAytPrimQBAXBnOP3oJndUmaEsWbkIm0JkH2eSnauDpBO3gynFYfSH6u2%2BAOo06tipxnztvPbimXcljsJ%2B1NIATK6m1ZecH%2F6ZuSH49bOOHPwlb7P6IijjYfnjQK%2FKk9jOxTOS%2BL2LHLS7TDaseO%2FBjqkAQAuLsMUNUeSbsWaTZNdKcUiC7wx6LrRBG9xVLVntZ2rQlxIz8%2BnlWtjI9O%2Fj4ayMB0ELiamejrPpyTIyaroTVffvzbVt376oKzkvLRovZFtc%2BI7%2Bw7yyI7tW%2BnX5MDtbwaodU7wPvUwqPSJHE4Im0cY08gZ0QXrIwaxzI5yvsPTMDQrxv5VP6pVtxHDxjoT3WlFszQLNNLvK1nOQTTm0oMiohQC&X-Amz-Signature=21991f1bc19c1242e9b0916b93fb502195469261b824732669b4ffc1fec7af48&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX5XBNQJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDKklqsatM4x7fDQFSIVneMEEuq4AyV0W9Kx02hR1TiWgIhAMHXc494sd6pqjqDOSowKWfOaI%2FtKafkUFF%2FfVVPxJfHKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdNns%2Bf6hu9lVpgSsq3AN3O0mkNbC4fLObwuR0sHH7wp64EdTqXxGvvp715VnkCqB2FaGLgZfUscxa6TUoI9exjtuC4ANGvSMu1hrWAYT4rSKx7vGYLsOv0maQAd0nSH2t0Xsyml4RMl74TbXMReMjRuzYb8seZ0cCkmcamcklN7Ur4djH98wLdeFOb9Ve%2FscrLj%2BeeQ1tk%2BQXqY8HRHmKfUlivehiwadw60dlgs9Q4Va70a5Z3EYUketZJyaLC3k1IJjhcy4THoAqzSLMVaiG%2BusNfuo4Y9a%2Fw3V2Ed8edFGiHUe0%2FyxH3tLo6%2BfLbf8KoVZvy0c%2Fyxz6MY1g2K1x9ufLGtgSFpAOdr6vPP4sREzmJkYChDpSgYNbX%2BQiSX3fm6S6A%2B2rXbQP2%2FpiKZqPbSambYY0XomTXkT%2BW6HS5EJrswBIqSYvvw3UC5IL1alhTOcXYqkmm%2F3GHx3CWrTv2Gio2XUWKcpWX8WC8CSxKZ2ujJyP0vEyD0NO9bIG9TUCAytPrimQBAXBnOP3oJndUmaEsWbkIm0JkH2eSnauDpBO3gynFYfSH6u2%2BAOo06tipxnztvPbimXcljsJ%2B1NIATK6m1ZecH%2F6ZuSH49bOOHPwlb7P6IijjYfnjQK%2FKk9jOxTOS%2BL2LHLS7TDaseO%2FBjqkAQAuLsMUNUeSbsWaTZNdKcUiC7wx6LrRBG9xVLVntZ2rQlxIz8%2BnlWtjI9O%2Fj4ayMB0ELiamejrPpyTIyaroTVffvzbVt376oKzkvLRovZFtc%2BI7%2Bw7yyI7tW%2BnX5MDtbwaodU7wPvUwqPSJHE4Im0cY08gZ0QXrIwaxzI5yvsPTMDQrxv5VP6pVtxHDxjoT3WlFszQLNNLvK1nOQTTm0oMiohQC&X-Amz-Signature=b7e3b177c9a6dc4293d7a030f42f0e48ca822121c0bc92f3f4b0bedf79517de9&X-Amz-SignedHeaders=host&x-id=GetObject)
