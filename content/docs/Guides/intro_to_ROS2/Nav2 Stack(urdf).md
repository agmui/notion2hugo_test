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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCKAPAA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpDntGv%2BNJ2I07IVssd%2Fd0t%2F59OsDRf65yHYUIXxQ5HwIhAIyFQ%2Bqy9ndBZtJKmOFn%2FQzZI8hse70AhoBnvzX1%2FOjHKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuinbDpEklUMXhh4Yq3APiO9RYZ4FJ342uhhkcWn9L0T5bzBrxy9t%2FBOUic18DtQPpdclUhJMp%2B35x9jakE%2FCIYAXihHp7J7SyqNy4u0MeTEII7hXW1zrkehsfkRAaaay6o6GkgFtSaJz4wPRbwVDHgACE4XvpV2xD6FQwVVEyQpYGrZfS2JcwglDzZGppRmTQ1wxLfBcDf68TNQjTWR1b%2FM%2FRROVSToQ8wbGFfE8DreMYlBft3z4Hua2Tuh5VgBa1EPSbCqJxCzcfs5PbhJXFgZ2FfRN%2FZ0vk1OVuPETR2FhNLtCbzvyWw3ehzMoDPUXtrNgfFx1l%2FNPJ%2BIRAqbpzSHC1iKIhdDx26ys4Syc2kXIsP2Ot5sD0LwbeH%2BzQoc6LLRSafzG8%2B2al85gI6wjWXEEoeNHIK5hpApkMNcZT%2F%2FwLwkggT4iKQlW7f0nfb0mPB4W2Mbrgk5hSnb2H%2FNkQAkg26m%2FF8xlJxRX0MdLdg11VNa8jHE43c5NLQb4RTbic1SbIPyL8WulS1gBeO1JbUa84jAPehzsX1NGt2LkLGXiX6jjPvAKDRBeljmbIAuq6ouRpM2VGKLrxzopsd9lU%2FKaxT%2Fzz4ny41l%2BYCBCWJGCs8k2yB6lX1uEPorVaWmYkUmBX4v0TMnydizC9r5y%2BBjqkAYsptRY1gepXzoNqVrmPew2Oe0E%2BSjpHL50o0Ifi%2FcRXumXrpzTxQ8AXNSFXH0z5IP0QFKZR8vcrZUMBOlP2ck7VVxyLwrY05BHU8XY%2Fw5qes9S3kWfi246hGIv95U2TXLhmZSyGbEowIncq%2B7TdZ%2Fq3lIcfxCBmomHkBg%2BRmJvn6gh19Cam39M2Y1G2f2PJJoTNniUu8HGiBVrja%2FfqD0N3QYuh&X-Amz-Signature=8d3a32f057394a38650dd052aba67dee7406943019ce1914d7910ef53a879fed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCKAPAA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpDntGv%2BNJ2I07IVssd%2Fd0t%2F59OsDRf65yHYUIXxQ5HwIhAIyFQ%2Bqy9ndBZtJKmOFn%2FQzZI8hse70AhoBnvzX1%2FOjHKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuinbDpEklUMXhh4Yq3APiO9RYZ4FJ342uhhkcWn9L0T5bzBrxy9t%2FBOUic18DtQPpdclUhJMp%2B35x9jakE%2FCIYAXihHp7J7SyqNy4u0MeTEII7hXW1zrkehsfkRAaaay6o6GkgFtSaJz4wPRbwVDHgACE4XvpV2xD6FQwVVEyQpYGrZfS2JcwglDzZGppRmTQ1wxLfBcDf68TNQjTWR1b%2FM%2FRROVSToQ8wbGFfE8DreMYlBft3z4Hua2Tuh5VgBa1EPSbCqJxCzcfs5PbhJXFgZ2FfRN%2FZ0vk1OVuPETR2FhNLtCbzvyWw3ehzMoDPUXtrNgfFx1l%2FNPJ%2BIRAqbpzSHC1iKIhdDx26ys4Syc2kXIsP2Ot5sD0LwbeH%2BzQoc6LLRSafzG8%2B2al85gI6wjWXEEoeNHIK5hpApkMNcZT%2F%2FwLwkggT4iKQlW7f0nfb0mPB4W2Mbrgk5hSnb2H%2FNkQAkg26m%2FF8xlJxRX0MdLdg11VNa8jHE43c5NLQb4RTbic1SbIPyL8WulS1gBeO1JbUa84jAPehzsX1NGt2LkLGXiX6jjPvAKDRBeljmbIAuq6ouRpM2VGKLrxzopsd9lU%2FKaxT%2Fzz4ny41l%2BYCBCWJGCs8k2yB6lX1uEPorVaWmYkUmBX4v0TMnydizC9r5y%2BBjqkAYsptRY1gepXzoNqVrmPew2Oe0E%2BSjpHL50o0Ifi%2FcRXumXrpzTxQ8AXNSFXH0z5IP0QFKZR8vcrZUMBOlP2ck7VVxyLwrY05BHU8XY%2Fw5qes9S3kWfi246hGIv95U2TXLhmZSyGbEowIncq%2B7TdZ%2Fq3lIcfxCBmomHkBg%2BRmJvn6gh19Cam39M2Y1G2f2PJJoTNniUu8HGiBVrja%2FfqD0N3QYuh&X-Amz-Signature=a28cc69b1d83bfd6d544f4cac1213c651201f91a0989dc5407018fae96725cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCKAPAA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpDntGv%2BNJ2I07IVssd%2Fd0t%2F59OsDRf65yHYUIXxQ5HwIhAIyFQ%2Bqy9ndBZtJKmOFn%2FQzZI8hse70AhoBnvzX1%2FOjHKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuinbDpEklUMXhh4Yq3APiO9RYZ4FJ342uhhkcWn9L0T5bzBrxy9t%2FBOUic18DtQPpdclUhJMp%2B35x9jakE%2FCIYAXihHp7J7SyqNy4u0MeTEII7hXW1zrkehsfkRAaaay6o6GkgFtSaJz4wPRbwVDHgACE4XvpV2xD6FQwVVEyQpYGrZfS2JcwglDzZGppRmTQ1wxLfBcDf68TNQjTWR1b%2FM%2FRROVSToQ8wbGFfE8DreMYlBft3z4Hua2Tuh5VgBa1EPSbCqJxCzcfs5PbhJXFgZ2FfRN%2FZ0vk1OVuPETR2FhNLtCbzvyWw3ehzMoDPUXtrNgfFx1l%2FNPJ%2BIRAqbpzSHC1iKIhdDx26ys4Syc2kXIsP2Ot5sD0LwbeH%2BzQoc6LLRSafzG8%2B2al85gI6wjWXEEoeNHIK5hpApkMNcZT%2F%2FwLwkggT4iKQlW7f0nfb0mPB4W2Mbrgk5hSnb2H%2FNkQAkg26m%2FF8xlJxRX0MdLdg11VNa8jHE43c5NLQb4RTbic1SbIPyL8WulS1gBeO1JbUa84jAPehzsX1NGt2LkLGXiX6jjPvAKDRBeljmbIAuq6ouRpM2VGKLrxzopsd9lU%2FKaxT%2Fzz4ny41l%2BYCBCWJGCs8k2yB6lX1uEPorVaWmYkUmBX4v0TMnydizC9r5y%2BBjqkAYsptRY1gepXzoNqVrmPew2Oe0E%2BSjpHL50o0Ifi%2FcRXumXrpzTxQ8AXNSFXH0z5IP0QFKZR8vcrZUMBOlP2ck7VVxyLwrY05BHU8XY%2Fw5qes9S3kWfi246hGIv95U2TXLhmZSyGbEowIncq%2B7TdZ%2Fq3lIcfxCBmomHkBg%2BRmJvn6gh19Cam39M2Y1G2f2PJJoTNniUu8HGiBVrja%2FfqD0N3QYuh&X-Amz-Signature=83f0347dd4f1bffb297ecba49e8fc7759dcee67df701fec900c8d7fc5bda3a69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCKAPAA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpDntGv%2BNJ2I07IVssd%2Fd0t%2F59OsDRf65yHYUIXxQ5HwIhAIyFQ%2Bqy9ndBZtJKmOFn%2FQzZI8hse70AhoBnvzX1%2FOjHKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuinbDpEklUMXhh4Yq3APiO9RYZ4FJ342uhhkcWn9L0T5bzBrxy9t%2FBOUic18DtQPpdclUhJMp%2B35x9jakE%2FCIYAXihHp7J7SyqNy4u0MeTEII7hXW1zrkehsfkRAaaay6o6GkgFtSaJz4wPRbwVDHgACE4XvpV2xD6FQwVVEyQpYGrZfS2JcwglDzZGppRmTQ1wxLfBcDf68TNQjTWR1b%2FM%2FRROVSToQ8wbGFfE8DreMYlBft3z4Hua2Tuh5VgBa1EPSbCqJxCzcfs5PbhJXFgZ2FfRN%2FZ0vk1OVuPETR2FhNLtCbzvyWw3ehzMoDPUXtrNgfFx1l%2FNPJ%2BIRAqbpzSHC1iKIhdDx26ys4Syc2kXIsP2Ot5sD0LwbeH%2BzQoc6LLRSafzG8%2B2al85gI6wjWXEEoeNHIK5hpApkMNcZT%2F%2FwLwkggT4iKQlW7f0nfb0mPB4W2Mbrgk5hSnb2H%2FNkQAkg26m%2FF8xlJxRX0MdLdg11VNa8jHE43c5NLQb4RTbic1SbIPyL8WulS1gBeO1JbUa84jAPehzsX1NGt2LkLGXiX6jjPvAKDRBeljmbIAuq6ouRpM2VGKLrxzopsd9lU%2FKaxT%2Fzz4ny41l%2BYCBCWJGCs8k2yB6lX1uEPorVaWmYkUmBX4v0TMnydizC9r5y%2BBjqkAYsptRY1gepXzoNqVrmPew2Oe0E%2BSjpHL50o0Ifi%2FcRXumXrpzTxQ8AXNSFXH0z5IP0QFKZR8vcrZUMBOlP2ck7VVxyLwrY05BHU8XY%2Fw5qes9S3kWfi246hGIv95U2TXLhmZSyGbEowIncq%2B7TdZ%2Fq3lIcfxCBmomHkBg%2BRmJvn6gh19Cam39M2Y1G2f2PJJoTNniUu8HGiBVrja%2FfqD0N3QYuh&X-Amz-Signature=73fdf91e85edddfe7a491bfc75be2a5336633d83f606de493a2e29b51ede3e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCKAPAA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpDntGv%2BNJ2I07IVssd%2Fd0t%2F59OsDRf65yHYUIXxQ5HwIhAIyFQ%2Bqy9ndBZtJKmOFn%2FQzZI8hse70AhoBnvzX1%2FOjHKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuinbDpEklUMXhh4Yq3APiO9RYZ4FJ342uhhkcWn9L0T5bzBrxy9t%2FBOUic18DtQPpdclUhJMp%2B35x9jakE%2FCIYAXihHp7J7SyqNy4u0MeTEII7hXW1zrkehsfkRAaaay6o6GkgFtSaJz4wPRbwVDHgACE4XvpV2xD6FQwVVEyQpYGrZfS2JcwglDzZGppRmTQ1wxLfBcDf68TNQjTWR1b%2FM%2FRROVSToQ8wbGFfE8DreMYlBft3z4Hua2Tuh5VgBa1EPSbCqJxCzcfs5PbhJXFgZ2FfRN%2FZ0vk1OVuPETR2FhNLtCbzvyWw3ehzMoDPUXtrNgfFx1l%2FNPJ%2BIRAqbpzSHC1iKIhdDx26ys4Syc2kXIsP2Ot5sD0LwbeH%2BzQoc6LLRSafzG8%2B2al85gI6wjWXEEoeNHIK5hpApkMNcZT%2F%2FwLwkggT4iKQlW7f0nfb0mPB4W2Mbrgk5hSnb2H%2FNkQAkg26m%2FF8xlJxRX0MdLdg11VNa8jHE43c5NLQb4RTbic1SbIPyL8WulS1gBeO1JbUa84jAPehzsX1NGt2LkLGXiX6jjPvAKDRBeljmbIAuq6ouRpM2VGKLrxzopsd9lU%2FKaxT%2Fzz4ny41l%2BYCBCWJGCs8k2yB6lX1uEPorVaWmYkUmBX4v0TMnydizC9r5y%2BBjqkAYsptRY1gepXzoNqVrmPew2Oe0E%2BSjpHL50o0Ifi%2FcRXumXrpzTxQ8AXNSFXH0z5IP0QFKZR8vcrZUMBOlP2ck7VVxyLwrY05BHU8XY%2Fw5qes9S3kWfi246hGIv95U2TXLhmZSyGbEowIncq%2B7TdZ%2Fq3lIcfxCBmomHkBg%2BRmJvn6gh19Cam39M2Y1G2f2PJJoTNniUu8HGiBVrja%2FfqD0N3QYuh&X-Amz-Signature=5b28fd3db35915c650f0b374957085e7f748f324d1f61cb9c4929cea7b3c83d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWCKAPAA%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpDntGv%2BNJ2I07IVssd%2Fd0t%2F59OsDRf65yHYUIXxQ5HwIhAIyFQ%2Bqy9ndBZtJKmOFn%2FQzZI8hse70AhoBnvzX1%2FOjHKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuinbDpEklUMXhh4Yq3APiO9RYZ4FJ342uhhkcWn9L0T5bzBrxy9t%2FBOUic18DtQPpdclUhJMp%2B35x9jakE%2FCIYAXihHp7J7SyqNy4u0MeTEII7hXW1zrkehsfkRAaaay6o6GkgFtSaJz4wPRbwVDHgACE4XvpV2xD6FQwVVEyQpYGrZfS2JcwglDzZGppRmTQ1wxLfBcDf68TNQjTWR1b%2FM%2FRROVSToQ8wbGFfE8DreMYlBft3z4Hua2Tuh5VgBa1EPSbCqJxCzcfs5PbhJXFgZ2FfRN%2FZ0vk1OVuPETR2FhNLtCbzvyWw3ehzMoDPUXtrNgfFx1l%2FNPJ%2BIRAqbpzSHC1iKIhdDx26ys4Syc2kXIsP2Ot5sD0LwbeH%2BzQoc6LLRSafzG8%2B2al85gI6wjWXEEoeNHIK5hpApkMNcZT%2F%2FwLwkggT4iKQlW7f0nfb0mPB4W2Mbrgk5hSnb2H%2FNkQAkg26m%2FF8xlJxRX0MdLdg11VNa8jHE43c5NLQb4RTbic1SbIPyL8WulS1gBeO1JbUa84jAPehzsX1NGt2LkLGXiX6jjPvAKDRBeljmbIAuq6ouRpM2VGKLrxzopsd9lU%2FKaxT%2Fzz4ny41l%2BYCBCWJGCs8k2yB6lX1uEPorVaWmYkUmBX4v0TMnydizC9r5y%2BBjqkAYsptRY1gepXzoNqVrmPew2Oe0E%2BSjpHL50o0Ifi%2FcRXumXrpzTxQ8AXNSFXH0z5IP0QFKZR8vcrZUMBOlP2ck7VVxyLwrY05BHU8XY%2Fw5qes9S3kWfi246hGIv95U2TXLhmZSyGbEowIncq%2B7TdZ%2Fq3lIcfxCBmomHkBg%2BRmJvn6gh19Cam39M2Y1G2f2PJJoTNniUu8HGiBVrja%2FfqD0N3QYuh&X-Amz-Signature=4f7ce8fd891c063eb153f84645fc6b0a385b5b88ecfd479ac882d03afb3c197b&X-Amz-SignedHeaders=host&x-id=GetObject)
