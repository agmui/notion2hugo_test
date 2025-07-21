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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMLQW5E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiGxYcRxkygGpFHxcPewvqUwS%2FA%2BIbMWda4Ev3r0F7%2FAiBxtPcovG8zSQ58VNIu8P%2FTbZA%2F6Rx%2FOcFMJnUdw%2FOCbSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMayhNH2cYrBQIp%2FLwKtwDfXuzMBuRapBNc8Rc8Gc2Vx38ae%2BaDn92A%2B8%2BSVYQa7QAsk9w0jf4N87ZlARwxiR3gwBsEE4UKOnlN4EEQBkJ0QLWhkOEJ8aUjTcW3BgD9sfB%2FYopEFW%2BK4eYnV9niXAg0KrQMsazQY8RfHr97H2hiBPp4dp2ESRSKAzupaGSqwJjiKtisFEn0e%2Ftxr%2B%2BlKMcQ6atlH7ws6Ciwqra4Kpw12pdolpUyyqYEylWUcs3a%2FmcX2kpUXpMEiUmykyLWg8S70r%2Bfp2uYNK5XZQoXjRZCeyj4Pe96FGaYBZuAQ6aGLMqwYqffQXpd3BIPnR5Smy05VHon62qVPmjknlv0UZBC1jW8RO1IBxNxhh3964gWnxCSCTwqyGZEQgQoevluI57w0ZBI%2FhQGOc1dax3BQCJgn0O9ISfWJFm6xU2uQmt%2BKLOSYYvXv0G%2F7CNeqb3l%2FLXhIusEjaUjjNr87Xw2MWQzsyQW6PSLh3YqPNCVHAAMfecyPyjO2zZZsv87rgZ0eKk9IVGJgk2T%2BOC%2F5DmIkQahqMe1bBnkVvkJrC8wHUZD%2Bg3bWYyvJm58KAMeYeLkqCYqqz%2FwEQ5IR0mKpt%2FkLFEI7AeqOnrgwp9Ds4b09sH0HRx6z0j3%2BNdal%2BFGcswnpP3wwY6pgEoh%2BFWZ1m9rCwYhKBMMhm750gFpQqPjjj0nly4NCpenHbjaJG3FU5pZff%2Fq3X2HwDII5Kp%2FoZmjhT2f7fVV%2FA5tW0CH9lBes9uKq5quZ88AAiI2cFuSv8TcOudzv8ZfkcUymAiuUPITuB6Hyik3OXU2HEDd3omrnHGolnL9TMWSLdhGNDLyJmU1rd9LSW58%2BULyubKx67nMA3zyqYzrzq4P53iLGrO&X-Amz-Signature=b4418ecf459c06426b759cc92925ac07b56c624ec3fe961ab86a1f55decafdd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMLQW5E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiGxYcRxkygGpFHxcPewvqUwS%2FA%2BIbMWda4Ev3r0F7%2FAiBxtPcovG8zSQ58VNIu8P%2FTbZA%2F6Rx%2FOcFMJnUdw%2FOCbSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMayhNH2cYrBQIp%2FLwKtwDfXuzMBuRapBNc8Rc8Gc2Vx38ae%2BaDn92A%2B8%2BSVYQa7QAsk9w0jf4N87ZlARwxiR3gwBsEE4UKOnlN4EEQBkJ0QLWhkOEJ8aUjTcW3BgD9sfB%2FYopEFW%2BK4eYnV9niXAg0KrQMsazQY8RfHr97H2hiBPp4dp2ESRSKAzupaGSqwJjiKtisFEn0e%2Ftxr%2B%2BlKMcQ6atlH7ws6Ciwqra4Kpw12pdolpUyyqYEylWUcs3a%2FmcX2kpUXpMEiUmykyLWg8S70r%2Bfp2uYNK5XZQoXjRZCeyj4Pe96FGaYBZuAQ6aGLMqwYqffQXpd3BIPnR5Smy05VHon62qVPmjknlv0UZBC1jW8RO1IBxNxhh3964gWnxCSCTwqyGZEQgQoevluI57w0ZBI%2FhQGOc1dax3BQCJgn0O9ISfWJFm6xU2uQmt%2BKLOSYYvXv0G%2F7CNeqb3l%2FLXhIusEjaUjjNr87Xw2MWQzsyQW6PSLh3YqPNCVHAAMfecyPyjO2zZZsv87rgZ0eKk9IVGJgk2T%2BOC%2F5DmIkQahqMe1bBnkVvkJrC8wHUZD%2Bg3bWYyvJm58KAMeYeLkqCYqqz%2FwEQ5IR0mKpt%2FkLFEI7AeqOnrgwp9Ds4b09sH0HRx6z0j3%2BNdal%2BFGcswnpP3wwY6pgEoh%2BFWZ1m9rCwYhKBMMhm750gFpQqPjjj0nly4NCpenHbjaJG3FU5pZff%2Fq3X2HwDII5Kp%2FoZmjhT2f7fVV%2FA5tW0CH9lBes9uKq5quZ88AAiI2cFuSv8TcOudzv8ZfkcUymAiuUPITuB6Hyik3OXU2HEDd3omrnHGolnL9TMWSLdhGNDLyJmU1rd9LSW58%2BULyubKx67nMA3zyqYzrzq4P53iLGrO&X-Amz-Signature=529be72b5be63ce0ecf33f24addb6e03bfa34c0d4e113f2b0a4bf20bd2f9809d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMLQW5E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiGxYcRxkygGpFHxcPewvqUwS%2FA%2BIbMWda4Ev3r0F7%2FAiBxtPcovG8zSQ58VNIu8P%2FTbZA%2F6Rx%2FOcFMJnUdw%2FOCbSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMayhNH2cYrBQIp%2FLwKtwDfXuzMBuRapBNc8Rc8Gc2Vx38ae%2BaDn92A%2B8%2BSVYQa7QAsk9w0jf4N87ZlARwxiR3gwBsEE4UKOnlN4EEQBkJ0QLWhkOEJ8aUjTcW3BgD9sfB%2FYopEFW%2BK4eYnV9niXAg0KrQMsazQY8RfHr97H2hiBPp4dp2ESRSKAzupaGSqwJjiKtisFEn0e%2Ftxr%2B%2BlKMcQ6atlH7ws6Ciwqra4Kpw12pdolpUyyqYEylWUcs3a%2FmcX2kpUXpMEiUmykyLWg8S70r%2Bfp2uYNK5XZQoXjRZCeyj4Pe96FGaYBZuAQ6aGLMqwYqffQXpd3BIPnR5Smy05VHon62qVPmjknlv0UZBC1jW8RO1IBxNxhh3964gWnxCSCTwqyGZEQgQoevluI57w0ZBI%2FhQGOc1dax3BQCJgn0O9ISfWJFm6xU2uQmt%2BKLOSYYvXv0G%2F7CNeqb3l%2FLXhIusEjaUjjNr87Xw2MWQzsyQW6PSLh3YqPNCVHAAMfecyPyjO2zZZsv87rgZ0eKk9IVGJgk2T%2BOC%2F5DmIkQahqMe1bBnkVvkJrC8wHUZD%2Bg3bWYyvJm58KAMeYeLkqCYqqz%2FwEQ5IR0mKpt%2FkLFEI7AeqOnrgwp9Ds4b09sH0HRx6z0j3%2BNdal%2BFGcswnpP3wwY6pgEoh%2BFWZ1m9rCwYhKBMMhm750gFpQqPjjj0nly4NCpenHbjaJG3FU5pZff%2Fq3X2HwDII5Kp%2FoZmjhT2f7fVV%2FA5tW0CH9lBes9uKq5quZ88AAiI2cFuSv8TcOudzv8ZfkcUymAiuUPITuB6Hyik3OXU2HEDd3omrnHGolnL9TMWSLdhGNDLyJmU1rd9LSW58%2BULyubKx67nMA3zyqYzrzq4P53iLGrO&X-Amz-Signature=9206f4fcfc7da3a7fd3368b00c538e03ac665a56d7f39b88b5d299fe64396c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMLQW5E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiGxYcRxkygGpFHxcPewvqUwS%2FA%2BIbMWda4Ev3r0F7%2FAiBxtPcovG8zSQ58VNIu8P%2FTbZA%2F6Rx%2FOcFMJnUdw%2FOCbSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMayhNH2cYrBQIp%2FLwKtwDfXuzMBuRapBNc8Rc8Gc2Vx38ae%2BaDn92A%2B8%2BSVYQa7QAsk9w0jf4N87ZlARwxiR3gwBsEE4UKOnlN4EEQBkJ0QLWhkOEJ8aUjTcW3BgD9sfB%2FYopEFW%2BK4eYnV9niXAg0KrQMsazQY8RfHr97H2hiBPp4dp2ESRSKAzupaGSqwJjiKtisFEn0e%2Ftxr%2B%2BlKMcQ6atlH7ws6Ciwqra4Kpw12pdolpUyyqYEylWUcs3a%2FmcX2kpUXpMEiUmykyLWg8S70r%2Bfp2uYNK5XZQoXjRZCeyj4Pe96FGaYBZuAQ6aGLMqwYqffQXpd3BIPnR5Smy05VHon62qVPmjknlv0UZBC1jW8RO1IBxNxhh3964gWnxCSCTwqyGZEQgQoevluI57w0ZBI%2FhQGOc1dax3BQCJgn0O9ISfWJFm6xU2uQmt%2BKLOSYYvXv0G%2F7CNeqb3l%2FLXhIusEjaUjjNr87Xw2MWQzsyQW6PSLh3YqPNCVHAAMfecyPyjO2zZZsv87rgZ0eKk9IVGJgk2T%2BOC%2F5DmIkQahqMe1bBnkVvkJrC8wHUZD%2Bg3bWYyvJm58KAMeYeLkqCYqqz%2FwEQ5IR0mKpt%2FkLFEI7AeqOnrgwp9Ds4b09sH0HRx6z0j3%2BNdal%2BFGcswnpP3wwY6pgEoh%2BFWZ1m9rCwYhKBMMhm750gFpQqPjjj0nly4NCpenHbjaJG3FU5pZff%2Fq3X2HwDII5Kp%2FoZmjhT2f7fVV%2FA5tW0CH9lBes9uKq5quZ88AAiI2cFuSv8TcOudzv8ZfkcUymAiuUPITuB6Hyik3OXU2HEDd3omrnHGolnL9TMWSLdhGNDLyJmU1rd9LSW58%2BULyubKx67nMA3zyqYzrzq4P53iLGrO&X-Amz-Signature=1a3664be51c0118d8b99e426c1cd087959d6909276eb325946da956888bc4b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMLQW5E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiGxYcRxkygGpFHxcPewvqUwS%2FA%2BIbMWda4Ev3r0F7%2FAiBxtPcovG8zSQ58VNIu8P%2FTbZA%2F6Rx%2FOcFMJnUdw%2FOCbSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMayhNH2cYrBQIp%2FLwKtwDfXuzMBuRapBNc8Rc8Gc2Vx38ae%2BaDn92A%2B8%2BSVYQa7QAsk9w0jf4N87ZlARwxiR3gwBsEE4UKOnlN4EEQBkJ0QLWhkOEJ8aUjTcW3BgD9sfB%2FYopEFW%2BK4eYnV9niXAg0KrQMsazQY8RfHr97H2hiBPp4dp2ESRSKAzupaGSqwJjiKtisFEn0e%2Ftxr%2B%2BlKMcQ6atlH7ws6Ciwqra4Kpw12pdolpUyyqYEylWUcs3a%2FmcX2kpUXpMEiUmykyLWg8S70r%2Bfp2uYNK5XZQoXjRZCeyj4Pe96FGaYBZuAQ6aGLMqwYqffQXpd3BIPnR5Smy05VHon62qVPmjknlv0UZBC1jW8RO1IBxNxhh3964gWnxCSCTwqyGZEQgQoevluI57w0ZBI%2FhQGOc1dax3BQCJgn0O9ISfWJFm6xU2uQmt%2BKLOSYYvXv0G%2F7CNeqb3l%2FLXhIusEjaUjjNr87Xw2MWQzsyQW6PSLh3YqPNCVHAAMfecyPyjO2zZZsv87rgZ0eKk9IVGJgk2T%2BOC%2F5DmIkQahqMe1bBnkVvkJrC8wHUZD%2Bg3bWYyvJm58KAMeYeLkqCYqqz%2FwEQ5IR0mKpt%2FkLFEI7AeqOnrgwp9Ds4b09sH0HRx6z0j3%2BNdal%2BFGcswnpP3wwY6pgEoh%2BFWZ1m9rCwYhKBMMhm750gFpQqPjjj0nly4NCpenHbjaJG3FU5pZff%2Fq3X2HwDII5Kp%2FoZmjhT2f7fVV%2FA5tW0CH9lBes9uKq5quZ88AAiI2cFuSv8TcOudzv8ZfkcUymAiuUPITuB6Hyik3OXU2HEDd3omrnHGolnL9TMWSLdhGNDLyJmU1rd9LSW58%2BULyubKx67nMA3zyqYzrzq4P53iLGrO&X-Amz-Signature=e5dc44b1a11d9b48f8eec36080edbdf398664b67bc113ed521cf8ec6e6baec65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SMLQW5E%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHiGxYcRxkygGpFHxcPewvqUwS%2FA%2BIbMWda4Ev3r0F7%2FAiBxtPcovG8zSQ58VNIu8P%2FTbZA%2F6Rx%2FOcFMJnUdw%2FOCbSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMayhNH2cYrBQIp%2FLwKtwDfXuzMBuRapBNc8Rc8Gc2Vx38ae%2BaDn92A%2B8%2BSVYQa7QAsk9w0jf4N87ZlARwxiR3gwBsEE4UKOnlN4EEQBkJ0QLWhkOEJ8aUjTcW3BgD9sfB%2FYopEFW%2BK4eYnV9niXAg0KrQMsazQY8RfHr97H2hiBPp4dp2ESRSKAzupaGSqwJjiKtisFEn0e%2Ftxr%2B%2BlKMcQ6atlH7ws6Ciwqra4Kpw12pdolpUyyqYEylWUcs3a%2FmcX2kpUXpMEiUmykyLWg8S70r%2Bfp2uYNK5XZQoXjRZCeyj4Pe96FGaYBZuAQ6aGLMqwYqffQXpd3BIPnR5Smy05VHon62qVPmjknlv0UZBC1jW8RO1IBxNxhh3964gWnxCSCTwqyGZEQgQoevluI57w0ZBI%2FhQGOc1dax3BQCJgn0O9ISfWJFm6xU2uQmt%2BKLOSYYvXv0G%2F7CNeqb3l%2FLXhIusEjaUjjNr87Xw2MWQzsyQW6PSLh3YqPNCVHAAMfecyPyjO2zZZsv87rgZ0eKk9IVGJgk2T%2BOC%2F5DmIkQahqMe1bBnkVvkJrC8wHUZD%2Bg3bWYyvJm58KAMeYeLkqCYqqz%2FwEQ5IR0mKpt%2FkLFEI7AeqOnrgwp9Ds4b09sH0HRx6z0j3%2BNdal%2BFGcswnpP3wwY6pgEoh%2BFWZ1m9rCwYhKBMMhm750gFpQqPjjj0nly4NCpenHbjaJG3FU5pZff%2Fq3X2HwDII5Kp%2FoZmjhT2f7fVV%2FA5tW0CH9lBes9uKq5quZ88AAiI2cFuSv8TcOudzv8ZfkcUymAiuUPITuB6Hyik3OXU2HEDd3omrnHGolnL9TMWSLdhGNDLyJmU1rd9LSW58%2BULyubKx67nMA3zyqYzrzq4P53iLGrO&X-Amz-Signature=6e3ccd5e18b3db2ecda1b254ad08dbfc356dd78ffa242ff61b2ace48e9345bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
