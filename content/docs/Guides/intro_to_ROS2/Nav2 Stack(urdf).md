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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3RQLQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bx1ugkB9mDA0V0pRVnYHAlzc8xjPDnF5mV7BUUAGvKQIhAI4WZDBY18e%2FGw0rzu%2BJNOXGi%2BW4PlxydlVzlW5XuNZkKv8DCGoQABoMNjM3NDIzMTgzODA1Igyj40enyq%2B7vT7SJ6Qq3AM%2B9ySyfokM1zf79rN2LI7hjO7oMGgzL5YR8baTiLrqG6etNTQfLIeet%2B4qauVeaUAuVseDywnfS%2FOoOJDM4S2Dc5qMNOVjcvFrkiIEnnkk6vb07A0dOpOUhgXr2MzM3g9cEkCQwYdhgh1IFTftdzI13EJcnKqrVaFa5bvCjm8K%2BbxPqM44cxZgSsToXIO4gtRDsI9%2FD%2Fv9tx12uuu7RkCOFNrwuuIxYY4ghsZpq%2F8Jic8gukgt5AlpqJ9%2BKqjmbZLAXKkfsDvV1TFm%2FPXrHe%2FD2iUuvZFQNgrUawa2pK9PIIumLoi4CJWuec3c9wB7v4yqrTZhZ8wzi7ptDfpi32VAbAj6B10vInRSIy9D9bf2Ei2ePr%2B1Zrp6EX9EKlkFJxmxTUF8oBGhlhLWEcb2za1WNQ%2FUPFD8WTBmQPvqe5U9nfiB7KxRIBN91ocJN8Jt%2FknkGDJ1vLMkLOJ34BWT3X1I1652Jf17aU69KSs%2BXwCzdNR60LqYy2dvRHt2Y8tvfu5zI%2F%2FiD8IX0uVIHHaEebmbyOfpAaU3Byy52SfM%2FwZuwZL0nsfXHD06sWcQhTiHemjFltV7xToE2uVqeQpq2I%2BCydf%2FJBN8vvWn0pExzPo3FIEepVSj7uB933fYQTCmorvABjqkAeNsu3onxyvt8bhFSwY6xGTjRQ9KmFohryL8oKq7859p%2BRW5ExCJw7WzT%2Bau6YukerYDjk3%2B%2BDIenvoffo%2FUqKu42U7%2BqtmoilFnR9SNb23NzYLPSZMyy0n2gVM4F%2FY3kJ%2BXNRehbu6agYJ8ZGJYxO04qvI8YovYU63phvVNWywMprnClOWkUJp4sCsM2hL63f3JaPPRXBOAGUfNJ1slgC%2FE%2FL78&X-Amz-Signature=05d7fa1456bb1688e96dbfc41f04be4bc711a313d68d8f5a4cbc0888e69d4b53&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3RQLQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bx1ugkB9mDA0V0pRVnYHAlzc8xjPDnF5mV7BUUAGvKQIhAI4WZDBY18e%2FGw0rzu%2BJNOXGi%2BW4PlxydlVzlW5XuNZkKv8DCGoQABoMNjM3NDIzMTgzODA1Igyj40enyq%2B7vT7SJ6Qq3AM%2B9ySyfokM1zf79rN2LI7hjO7oMGgzL5YR8baTiLrqG6etNTQfLIeet%2B4qauVeaUAuVseDywnfS%2FOoOJDM4S2Dc5qMNOVjcvFrkiIEnnkk6vb07A0dOpOUhgXr2MzM3g9cEkCQwYdhgh1IFTftdzI13EJcnKqrVaFa5bvCjm8K%2BbxPqM44cxZgSsToXIO4gtRDsI9%2FD%2Fv9tx12uuu7RkCOFNrwuuIxYY4ghsZpq%2F8Jic8gukgt5AlpqJ9%2BKqjmbZLAXKkfsDvV1TFm%2FPXrHe%2FD2iUuvZFQNgrUawa2pK9PIIumLoi4CJWuec3c9wB7v4yqrTZhZ8wzi7ptDfpi32VAbAj6B10vInRSIy9D9bf2Ei2ePr%2B1Zrp6EX9EKlkFJxmxTUF8oBGhlhLWEcb2za1WNQ%2FUPFD8WTBmQPvqe5U9nfiB7KxRIBN91ocJN8Jt%2FknkGDJ1vLMkLOJ34BWT3X1I1652Jf17aU69KSs%2BXwCzdNR60LqYy2dvRHt2Y8tvfu5zI%2F%2FiD8IX0uVIHHaEebmbyOfpAaU3Byy52SfM%2FwZuwZL0nsfXHD06sWcQhTiHemjFltV7xToE2uVqeQpq2I%2BCydf%2FJBN8vvWn0pExzPo3FIEepVSj7uB933fYQTCmorvABjqkAeNsu3onxyvt8bhFSwY6xGTjRQ9KmFohryL8oKq7859p%2BRW5ExCJw7WzT%2Bau6YukerYDjk3%2B%2BDIenvoffo%2FUqKu42U7%2BqtmoilFnR9SNb23NzYLPSZMyy0n2gVM4F%2FY3kJ%2BXNRehbu6agYJ8ZGJYxO04qvI8YovYU63phvVNWywMprnClOWkUJp4sCsM2hL63f3JaPPRXBOAGUfNJ1slgC%2FE%2FL78&X-Amz-Signature=b560832fcbc235c6003c934ca9446708a993d85c5d61c4ffec1d3df15c0f1225&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3RQLQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bx1ugkB9mDA0V0pRVnYHAlzc8xjPDnF5mV7BUUAGvKQIhAI4WZDBY18e%2FGw0rzu%2BJNOXGi%2BW4PlxydlVzlW5XuNZkKv8DCGoQABoMNjM3NDIzMTgzODA1Igyj40enyq%2B7vT7SJ6Qq3AM%2B9ySyfokM1zf79rN2LI7hjO7oMGgzL5YR8baTiLrqG6etNTQfLIeet%2B4qauVeaUAuVseDywnfS%2FOoOJDM4S2Dc5qMNOVjcvFrkiIEnnkk6vb07A0dOpOUhgXr2MzM3g9cEkCQwYdhgh1IFTftdzI13EJcnKqrVaFa5bvCjm8K%2BbxPqM44cxZgSsToXIO4gtRDsI9%2FD%2Fv9tx12uuu7RkCOFNrwuuIxYY4ghsZpq%2F8Jic8gukgt5AlpqJ9%2BKqjmbZLAXKkfsDvV1TFm%2FPXrHe%2FD2iUuvZFQNgrUawa2pK9PIIumLoi4CJWuec3c9wB7v4yqrTZhZ8wzi7ptDfpi32VAbAj6B10vInRSIy9D9bf2Ei2ePr%2B1Zrp6EX9EKlkFJxmxTUF8oBGhlhLWEcb2za1WNQ%2FUPFD8WTBmQPvqe5U9nfiB7KxRIBN91ocJN8Jt%2FknkGDJ1vLMkLOJ34BWT3X1I1652Jf17aU69KSs%2BXwCzdNR60LqYy2dvRHt2Y8tvfu5zI%2F%2FiD8IX0uVIHHaEebmbyOfpAaU3Byy52SfM%2FwZuwZL0nsfXHD06sWcQhTiHemjFltV7xToE2uVqeQpq2I%2BCydf%2FJBN8vvWn0pExzPo3FIEepVSj7uB933fYQTCmorvABjqkAeNsu3onxyvt8bhFSwY6xGTjRQ9KmFohryL8oKq7859p%2BRW5ExCJw7WzT%2Bau6YukerYDjk3%2B%2BDIenvoffo%2FUqKu42U7%2BqtmoilFnR9SNb23NzYLPSZMyy0n2gVM4F%2FY3kJ%2BXNRehbu6agYJ8ZGJYxO04qvI8YovYU63phvVNWywMprnClOWkUJp4sCsM2hL63f3JaPPRXBOAGUfNJ1slgC%2FE%2FL78&X-Amz-Signature=4dd20b9ba7043542089f9a82f688241d27ba5e6099bdca4dfa4e064549fb1b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3RQLQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bx1ugkB9mDA0V0pRVnYHAlzc8xjPDnF5mV7BUUAGvKQIhAI4WZDBY18e%2FGw0rzu%2BJNOXGi%2BW4PlxydlVzlW5XuNZkKv8DCGoQABoMNjM3NDIzMTgzODA1Igyj40enyq%2B7vT7SJ6Qq3AM%2B9ySyfokM1zf79rN2LI7hjO7oMGgzL5YR8baTiLrqG6etNTQfLIeet%2B4qauVeaUAuVseDywnfS%2FOoOJDM4S2Dc5qMNOVjcvFrkiIEnnkk6vb07A0dOpOUhgXr2MzM3g9cEkCQwYdhgh1IFTftdzI13EJcnKqrVaFa5bvCjm8K%2BbxPqM44cxZgSsToXIO4gtRDsI9%2FD%2Fv9tx12uuu7RkCOFNrwuuIxYY4ghsZpq%2F8Jic8gukgt5AlpqJ9%2BKqjmbZLAXKkfsDvV1TFm%2FPXrHe%2FD2iUuvZFQNgrUawa2pK9PIIumLoi4CJWuec3c9wB7v4yqrTZhZ8wzi7ptDfpi32VAbAj6B10vInRSIy9D9bf2Ei2ePr%2B1Zrp6EX9EKlkFJxmxTUF8oBGhlhLWEcb2za1WNQ%2FUPFD8WTBmQPvqe5U9nfiB7KxRIBN91ocJN8Jt%2FknkGDJ1vLMkLOJ34BWT3X1I1652Jf17aU69KSs%2BXwCzdNR60LqYy2dvRHt2Y8tvfu5zI%2F%2FiD8IX0uVIHHaEebmbyOfpAaU3Byy52SfM%2FwZuwZL0nsfXHD06sWcQhTiHemjFltV7xToE2uVqeQpq2I%2BCydf%2FJBN8vvWn0pExzPo3FIEepVSj7uB933fYQTCmorvABjqkAeNsu3onxyvt8bhFSwY6xGTjRQ9KmFohryL8oKq7859p%2BRW5ExCJw7WzT%2Bau6YukerYDjk3%2B%2BDIenvoffo%2FUqKu42U7%2BqtmoilFnR9SNb23NzYLPSZMyy0n2gVM4F%2FY3kJ%2BXNRehbu6agYJ8ZGJYxO04qvI8YovYU63phvVNWywMprnClOWkUJp4sCsM2hL63f3JaPPRXBOAGUfNJ1slgC%2FE%2FL78&X-Amz-Signature=6bb6f92d010ee4bb20ecce1f42a8f0f67ab9bbd5c36503bcc581ed80d681c842&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3RQLQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bx1ugkB9mDA0V0pRVnYHAlzc8xjPDnF5mV7BUUAGvKQIhAI4WZDBY18e%2FGw0rzu%2BJNOXGi%2BW4PlxydlVzlW5XuNZkKv8DCGoQABoMNjM3NDIzMTgzODA1Igyj40enyq%2B7vT7SJ6Qq3AM%2B9ySyfokM1zf79rN2LI7hjO7oMGgzL5YR8baTiLrqG6etNTQfLIeet%2B4qauVeaUAuVseDywnfS%2FOoOJDM4S2Dc5qMNOVjcvFrkiIEnnkk6vb07A0dOpOUhgXr2MzM3g9cEkCQwYdhgh1IFTftdzI13EJcnKqrVaFa5bvCjm8K%2BbxPqM44cxZgSsToXIO4gtRDsI9%2FD%2Fv9tx12uuu7RkCOFNrwuuIxYY4ghsZpq%2F8Jic8gukgt5AlpqJ9%2BKqjmbZLAXKkfsDvV1TFm%2FPXrHe%2FD2iUuvZFQNgrUawa2pK9PIIumLoi4CJWuec3c9wB7v4yqrTZhZ8wzi7ptDfpi32VAbAj6B10vInRSIy9D9bf2Ei2ePr%2B1Zrp6EX9EKlkFJxmxTUF8oBGhlhLWEcb2za1WNQ%2FUPFD8WTBmQPvqe5U9nfiB7KxRIBN91ocJN8Jt%2FknkGDJ1vLMkLOJ34BWT3X1I1652Jf17aU69KSs%2BXwCzdNR60LqYy2dvRHt2Y8tvfu5zI%2F%2FiD8IX0uVIHHaEebmbyOfpAaU3Byy52SfM%2FwZuwZL0nsfXHD06sWcQhTiHemjFltV7xToE2uVqeQpq2I%2BCydf%2FJBN8vvWn0pExzPo3FIEepVSj7uB933fYQTCmorvABjqkAeNsu3onxyvt8bhFSwY6xGTjRQ9KmFohryL8oKq7859p%2BRW5ExCJw7WzT%2Bau6YukerYDjk3%2B%2BDIenvoffo%2FUqKu42U7%2BqtmoilFnR9SNb23NzYLPSZMyy0n2gVM4F%2FY3kJ%2BXNRehbu6agYJ8ZGJYxO04qvI8YovYU63phvVNWywMprnClOWkUJp4sCsM2hL63f3JaPPRXBOAGUfNJ1slgC%2FE%2FL78&X-Amz-Signature=358d54be141bc5e999c5d280e161e3ec88db95bbee682caaf2d6ff251ecc9028&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDQ3RQLQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bx1ugkB9mDA0V0pRVnYHAlzc8xjPDnF5mV7BUUAGvKQIhAI4WZDBY18e%2FGw0rzu%2BJNOXGi%2BW4PlxydlVzlW5XuNZkKv8DCGoQABoMNjM3NDIzMTgzODA1Igyj40enyq%2B7vT7SJ6Qq3AM%2B9ySyfokM1zf79rN2LI7hjO7oMGgzL5YR8baTiLrqG6etNTQfLIeet%2B4qauVeaUAuVseDywnfS%2FOoOJDM4S2Dc5qMNOVjcvFrkiIEnnkk6vb07A0dOpOUhgXr2MzM3g9cEkCQwYdhgh1IFTftdzI13EJcnKqrVaFa5bvCjm8K%2BbxPqM44cxZgSsToXIO4gtRDsI9%2FD%2Fv9tx12uuu7RkCOFNrwuuIxYY4ghsZpq%2F8Jic8gukgt5AlpqJ9%2BKqjmbZLAXKkfsDvV1TFm%2FPXrHe%2FD2iUuvZFQNgrUawa2pK9PIIumLoi4CJWuec3c9wB7v4yqrTZhZ8wzi7ptDfpi32VAbAj6B10vInRSIy9D9bf2Ei2ePr%2B1Zrp6EX9EKlkFJxmxTUF8oBGhlhLWEcb2za1WNQ%2FUPFD8WTBmQPvqe5U9nfiB7KxRIBN91ocJN8Jt%2FknkGDJ1vLMkLOJ34BWT3X1I1652Jf17aU69KSs%2BXwCzdNR60LqYy2dvRHt2Y8tvfu5zI%2F%2FiD8IX0uVIHHaEebmbyOfpAaU3Byy52SfM%2FwZuwZL0nsfXHD06sWcQhTiHemjFltV7xToE2uVqeQpq2I%2BCydf%2FJBN8vvWn0pExzPo3FIEepVSj7uB933fYQTCmorvABjqkAeNsu3onxyvt8bhFSwY6xGTjRQ9KmFohryL8oKq7859p%2BRW5ExCJw7WzT%2Bau6YukerYDjk3%2B%2BDIenvoffo%2FUqKu42U7%2BqtmoilFnR9SNb23NzYLPSZMyy0n2gVM4F%2FY3kJ%2BXNRehbu6agYJ8ZGJYxO04qvI8YovYU63phvVNWywMprnClOWkUJp4sCsM2hL63f3JaPPRXBOAGUfNJ1slgC%2FE%2FL78&X-Amz-Signature=37b57fa206f75a64ef9fe25369591fe4e0f96795a5977fca96aecaf31e0695e1&X-Amz-SignedHeaders=host&x-id=GetObject)
