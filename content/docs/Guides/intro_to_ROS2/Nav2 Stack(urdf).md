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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAIPF3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyIFTQOim%2FV41XbWyX%2FRWUDq3o6hGns9hO7SpUtq8x1wIgfpfzwZbhs5d%2Bk%2Ff4EDVOmVqrANhT7UjXZO1IZgpm0H4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2BnzkFW8VzgceywCrcA%2FeDsG0o1BmSQ1CeA7yi2Fd7kvndKz8yHjuy2qvdNFw7Yq8l94EEHV1PEkyCsXrtaKl2rKQpWgk6g01kuzcqkmk3gQulgJ9VIGASuzROUY%2FBMQQ7qXDFChrMpCDAD3U9GBf4Yqb%2F0MsvrIcGN2qMMvNWgcN1nHe9IIQx0DgrXAWQDtTEi%2BJLJPZ8kQxa0%2B77jETsmWkuZQvhpZQYk%2BLz1qWAbE3fOWr50FuxgwzaaoJtQ5yyZulObfeFY8k6IPQZACnsWFV6hfTOPhcB2V39vPA6jyGIDhdPsU2ZbS4XnJvOcoK8idfVrKsNREXk%2Fw6BO%2Fqw9gR6fjL5XGbdSeGmLFNX0cllfqdGa1uRWv%2BVJR9Dhpn0KSQfR3ZICkUNz32LRGVPzcaMzxurRfMfep9R4GyZj%2FZ48fC7d%2FT0Swy%2B%2BN6pmHduEu9QnFdlsVqO4A%2FjikVotHZyMuzBHeMGERXzuYWS%2FdSQPb5tqSC47azJpls%2FthVQzGwi9TfCfNhxDsgsFjIl%2Fr7Bxos9CwLFgaQC7tH6ptjfFit56Uq1W%2FBrampbrD%2B6DaHMkbvzMRVqPh6%2F9aaWjjhl%2BbZkgkKpgaKoR9ut0BNyZ6g7HdBf1WnuLkXiCScCyuD%2BnwZhOMGXMPb3rb0GOqUB%2Bsp71sKwBmoac12kCDPRX7oydfyDUGqpvbiagrXB4aNHKFLh0HrmY9SYbRuDX%2FjF1EgqOPMw7Ns4ZfMBYI%2F%2Fm5WekmywnjiKKM2YG%2FmH%2F9fDljq90Blw7HQt%2FaojWJmnyx59mKPs0OWP0qBJv1cHycUkNucRnr%2F6oMyC%2FuFX7yPKn%2Bi66iNf1fYAVrRY4pyK%2BLkWA%2FlVw4fZfTCPHNXFXkDtYv%2Fq&X-Amz-Signature=000f9e0221b2fa288fd4315b4866580fa3bc0b695af6828f3fde069ea8c74bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAIPF3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyIFTQOim%2FV41XbWyX%2FRWUDq3o6hGns9hO7SpUtq8x1wIgfpfzwZbhs5d%2Bk%2Ff4EDVOmVqrANhT7UjXZO1IZgpm0H4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2BnzkFW8VzgceywCrcA%2FeDsG0o1BmSQ1CeA7yi2Fd7kvndKz8yHjuy2qvdNFw7Yq8l94EEHV1PEkyCsXrtaKl2rKQpWgk6g01kuzcqkmk3gQulgJ9VIGASuzROUY%2FBMQQ7qXDFChrMpCDAD3U9GBf4Yqb%2F0MsvrIcGN2qMMvNWgcN1nHe9IIQx0DgrXAWQDtTEi%2BJLJPZ8kQxa0%2B77jETsmWkuZQvhpZQYk%2BLz1qWAbE3fOWr50FuxgwzaaoJtQ5yyZulObfeFY8k6IPQZACnsWFV6hfTOPhcB2V39vPA6jyGIDhdPsU2ZbS4XnJvOcoK8idfVrKsNREXk%2Fw6BO%2Fqw9gR6fjL5XGbdSeGmLFNX0cllfqdGa1uRWv%2BVJR9Dhpn0KSQfR3ZICkUNz32LRGVPzcaMzxurRfMfep9R4GyZj%2FZ48fC7d%2FT0Swy%2B%2BN6pmHduEu9QnFdlsVqO4A%2FjikVotHZyMuzBHeMGERXzuYWS%2FdSQPb5tqSC47azJpls%2FthVQzGwi9TfCfNhxDsgsFjIl%2Fr7Bxos9CwLFgaQC7tH6ptjfFit56Uq1W%2FBrampbrD%2B6DaHMkbvzMRVqPh6%2F9aaWjjhl%2BbZkgkKpgaKoR9ut0BNyZ6g7HdBf1WnuLkXiCScCyuD%2BnwZhOMGXMPb3rb0GOqUB%2Bsp71sKwBmoac12kCDPRX7oydfyDUGqpvbiagrXB4aNHKFLh0HrmY9SYbRuDX%2FjF1EgqOPMw7Ns4ZfMBYI%2F%2Fm5WekmywnjiKKM2YG%2FmH%2F9fDljq90Blw7HQt%2FaojWJmnyx59mKPs0OWP0qBJv1cHycUkNucRnr%2F6oMyC%2FuFX7yPKn%2Bi66iNf1fYAVrRY4pyK%2BLkWA%2FlVw4fZfTCPHNXFXkDtYv%2Fq&X-Amz-Signature=1d63e60c4d98a8ae1e39dd6cebc1678aaa1b70546124892551b18c56a6aa9abd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAIPF3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyIFTQOim%2FV41XbWyX%2FRWUDq3o6hGns9hO7SpUtq8x1wIgfpfzwZbhs5d%2Bk%2Ff4EDVOmVqrANhT7UjXZO1IZgpm0H4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2BnzkFW8VzgceywCrcA%2FeDsG0o1BmSQ1CeA7yi2Fd7kvndKz8yHjuy2qvdNFw7Yq8l94EEHV1PEkyCsXrtaKl2rKQpWgk6g01kuzcqkmk3gQulgJ9VIGASuzROUY%2FBMQQ7qXDFChrMpCDAD3U9GBf4Yqb%2F0MsvrIcGN2qMMvNWgcN1nHe9IIQx0DgrXAWQDtTEi%2BJLJPZ8kQxa0%2B77jETsmWkuZQvhpZQYk%2BLz1qWAbE3fOWr50FuxgwzaaoJtQ5yyZulObfeFY8k6IPQZACnsWFV6hfTOPhcB2V39vPA6jyGIDhdPsU2ZbS4XnJvOcoK8idfVrKsNREXk%2Fw6BO%2Fqw9gR6fjL5XGbdSeGmLFNX0cllfqdGa1uRWv%2BVJR9Dhpn0KSQfR3ZICkUNz32LRGVPzcaMzxurRfMfep9R4GyZj%2FZ48fC7d%2FT0Swy%2B%2BN6pmHduEu9QnFdlsVqO4A%2FjikVotHZyMuzBHeMGERXzuYWS%2FdSQPb5tqSC47azJpls%2FthVQzGwi9TfCfNhxDsgsFjIl%2Fr7Bxos9CwLFgaQC7tH6ptjfFit56Uq1W%2FBrampbrD%2B6DaHMkbvzMRVqPh6%2F9aaWjjhl%2BbZkgkKpgaKoR9ut0BNyZ6g7HdBf1WnuLkXiCScCyuD%2BnwZhOMGXMPb3rb0GOqUB%2Bsp71sKwBmoac12kCDPRX7oydfyDUGqpvbiagrXB4aNHKFLh0HrmY9SYbRuDX%2FjF1EgqOPMw7Ns4ZfMBYI%2F%2Fm5WekmywnjiKKM2YG%2FmH%2F9fDljq90Blw7HQt%2FaojWJmnyx59mKPs0OWP0qBJv1cHycUkNucRnr%2F6oMyC%2FuFX7yPKn%2Bi66iNf1fYAVrRY4pyK%2BLkWA%2FlVw4fZfTCPHNXFXkDtYv%2Fq&X-Amz-Signature=55911c06c473841974c9d61d492e578081f69c25b88b256d2c139fa9c59d8b92&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAIPF3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyIFTQOim%2FV41XbWyX%2FRWUDq3o6hGns9hO7SpUtq8x1wIgfpfzwZbhs5d%2Bk%2Ff4EDVOmVqrANhT7UjXZO1IZgpm0H4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2BnzkFW8VzgceywCrcA%2FeDsG0o1BmSQ1CeA7yi2Fd7kvndKz8yHjuy2qvdNFw7Yq8l94EEHV1PEkyCsXrtaKl2rKQpWgk6g01kuzcqkmk3gQulgJ9VIGASuzROUY%2FBMQQ7qXDFChrMpCDAD3U9GBf4Yqb%2F0MsvrIcGN2qMMvNWgcN1nHe9IIQx0DgrXAWQDtTEi%2BJLJPZ8kQxa0%2B77jETsmWkuZQvhpZQYk%2BLz1qWAbE3fOWr50FuxgwzaaoJtQ5yyZulObfeFY8k6IPQZACnsWFV6hfTOPhcB2V39vPA6jyGIDhdPsU2ZbS4XnJvOcoK8idfVrKsNREXk%2Fw6BO%2Fqw9gR6fjL5XGbdSeGmLFNX0cllfqdGa1uRWv%2BVJR9Dhpn0KSQfR3ZICkUNz32LRGVPzcaMzxurRfMfep9R4GyZj%2FZ48fC7d%2FT0Swy%2B%2BN6pmHduEu9QnFdlsVqO4A%2FjikVotHZyMuzBHeMGERXzuYWS%2FdSQPb5tqSC47azJpls%2FthVQzGwi9TfCfNhxDsgsFjIl%2Fr7Bxos9CwLFgaQC7tH6ptjfFit56Uq1W%2FBrampbrD%2B6DaHMkbvzMRVqPh6%2F9aaWjjhl%2BbZkgkKpgaKoR9ut0BNyZ6g7HdBf1WnuLkXiCScCyuD%2BnwZhOMGXMPb3rb0GOqUB%2Bsp71sKwBmoac12kCDPRX7oydfyDUGqpvbiagrXB4aNHKFLh0HrmY9SYbRuDX%2FjF1EgqOPMw7Ns4ZfMBYI%2F%2Fm5WekmywnjiKKM2YG%2FmH%2F9fDljq90Blw7HQt%2FaojWJmnyx59mKPs0OWP0qBJv1cHycUkNucRnr%2F6oMyC%2FuFX7yPKn%2Bi66iNf1fYAVrRY4pyK%2BLkWA%2FlVw4fZfTCPHNXFXkDtYv%2Fq&X-Amz-Signature=d43be7b2a71984c5cbf23d6198b12dcb083fb1818ef509b81f75189ba8c58c82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAIPF3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyIFTQOim%2FV41XbWyX%2FRWUDq3o6hGns9hO7SpUtq8x1wIgfpfzwZbhs5d%2Bk%2Ff4EDVOmVqrANhT7UjXZO1IZgpm0H4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2BnzkFW8VzgceywCrcA%2FeDsG0o1BmSQ1CeA7yi2Fd7kvndKz8yHjuy2qvdNFw7Yq8l94EEHV1PEkyCsXrtaKl2rKQpWgk6g01kuzcqkmk3gQulgJ9VIGASuzROUY%2FBMQQ7qXDFChrMpCDAD3U9GBf4Yqb%2F0MsvrIcGN2qMMvNWgcN1nHe9IIQx0DgrXAWQDtTEi%2BJLJPZ8kQxa0%2B77jETsmWkuZQvhpZQYk%2BLz1qWAbE3fOWr50FuxgwzaaoJtQ5yyZulObfeFY8k6IPQZACnsWFV6hfTOPhcB2V39vPA6jyGIDhdPsU2ZbS4XnJvOcoK8idfVrKsNREXk%2Fw6BO%2Fqw9gR6fjL5XGbdSeGmLFNX0cllfqdGa1uRWv%2BVJR9Dhpn0KSQfR3ZICkUNz32LRGVPzcaMzxurRfMfep9R4GyZj%2FZ48fC7d%2FT0Swy%2B%2BN6pmHduEu9QnFdlsVqO4A%2FjikVotHZyMuzBHeMGERXzuYWS%2FdSQPb5tqSC47azJpls%2FthVQzGwi9TfCfNhxDsgsFjIl%2Fr7Bxos9CwLFgaQC7tH6ptjfFit56Uq1W%2FBrampbrD%2B6DaHMkbvzMRVqPh6%2F9aaWjjhl%2BbZkgkKpgaKoR9ut0BNyZ6g7HdBf1WnuLkXiCScCyuD%2BnwZhOMGXMPb3rb0GOqUB%2Bsp71sKwBmoac12kCDPRX7oydfyDUGqpvbiagrXB4aNHKFLh0HrmY9SYbRuDX%2FjF1EgqOPMw7Ns4ZfMBYI%2F%2Fm5WekmywnjiKKM2YG%2FmH%2F9fDljq90Blw7HQt%2FaojWJmnyx59mKPs0OWP0qBJv1cHycUkNucRnr%2F6oMyC%2FuFX7yPKn%2Bi66iNf1fYAVrRY4pyK%2BLkWA%2FlVw4fZfTCPHNXFXkDtYv%2Fq&X-Amz-Signature=13f8dc28a2c2f2acfbd20a4c7ae7c92566b6f0df87a239357f9904a7984dfda8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZAIPF3M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T170727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyIFTQOim%2FV41XbWyX%2FRWUDq3o6hGns9hO7SpUtq8x1wIgfpfzwZbhs5d%2Bk%2Ff4EDVOmVqrANhT7UjXZO1IZgpm0H4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2BnzkFW8VzgceywCrcA%2FeDsG0o1BmSQ1CeA7yi2Fd7kvndKz8yHjuy2qvdNFw7Yq8l94EEHV1PEkyCsXrtaKl2rKQpWgk6g01kuzcqkmk3gQulgJ9VIGASuzROUY%2FBMQQ7qXDFChrMpCDAD3U9GBf4Yqb%2F0MsvrIcGN2qMMvNWgcN1nHe9IIQx0DgrXAWQDtTEi%2BJLJPZ8kQxa0%2B77jETsmWkuZQvhpZQYk%2BLz1qWAbE3fOWr50FuxgwzaaoJtQ5yyZulObfeFY8k6IPQZACnsWFV6hfTOPhcB2V39vPA6jyGIDhdPsU2ZbS4XnJvOcoK8idfVrKsNREXk%2Fw6BO%2Fqw9gR6fjL5XGbdSeGmLFNX0cllfqdGa1uRWv%2BVJR9Dhpn0KSQfR3ZICkUNz32LRGVPzcaMzxurRfMfep9R4GyZj%2FZ48fC7d%2FT0Swy%2B%2BN6pmHduEu9QnFdlsVqO4A%2FjikVotHZyMuzBHeMGERXzuYWS%2FdSQPb5tqSC47azJpls%2FthVQzGwi9TfCfNhxDsgsFjIl%2Fr7Bxos9CwLFgaQC7tH6ptjfFit56Uq1W%2FBrampbrD%2B6DaHMkbvzMRVqPh6%2F9aaWjjhl%2BbZkgkKpgaKoR9ut0BNyZ6g7HdBf1WnuLkXiCScCyuD%2BnwZhOMGXMPb3rb0GOqUB%2Bsp71sKwBmoac12kCDPRX7oydfyDUGqpvbiagrXB4aNHKFLh0HrmY9SYbRuDX%2FjF1EgqOPMw7Ns4ZfMBYI%2F%2Fm5WekmywnjiKKM2YG%2FmH%2F9fDljq90Blw7HQt%2FaojWJmnyx59mKPs0OWP0qBJv1cHycUkNucRnr%2F6oMyC%2FuFX7yPKn%2Bi66iNf1fYAVrRY4pyK%2BLkWA%2FlVw4fZfTCPHNXFXkDtYv%2Fq&X-Amz-Signature=0dc0d93628b9a96f1a877808f18512bc438252ede2692b8f22a5a7522253719d&X-Amz-SignedHeaders=host&x-id=GetObject)
