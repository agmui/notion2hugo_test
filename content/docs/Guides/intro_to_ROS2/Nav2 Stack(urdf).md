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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2QUGN7%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCOuR%2FzJUcmm8zfLT5fyhBG%2Fz1ySa45JduYtQIihvWcVgIgS3psPwz0XSdqOYrq9ArwmdHo%2BN0CVA%2BnKkyfbptWuhUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLar4XY3PkIAJ4ikICrcA4XpPh0P5Ih5lItecPVjxTyxwbCe%2BIBeDkIJQ3KdQx28oPp%2BVbzfnPOXDys7aG65EBL38VPPdKDIykeq6yEHsVFE3pTiJ%2F1JnhyOd1xEcxAGTjbITBwcC0N4hlBeS246Si6Q4nWByo7iMnSO6RZT94RRvz5vvz0n0lqYqOXgoy1CIfqKqj%2FpUxK9hd2URJaSHYV8jjpM%2BGM1RKqJ7swPxTrAYCxPCBuQV%2B%2FDAC59%2BMTkp0nhKcHrIOMEwUfy%2BzxWVk%2BDz2zwosGd5%2F%2F4naigCz652TIAjOLM20q5gHS6oJuC8fAKEbTNBHHnxXNtjLl31%2F8S34%2BFlAlN%2FYyXDfY44J47ZPt0%2BG9r3CmknCLLKzi4If%2BFaW2xH%2FSYJIBEHvZdQD%2FG3wnPaiBD%2Fm2bHmUxFhYp7buLnd37slYahs3GbOWX9mOvHpXvvFtNNkd8QOZuwMqKEFQgLaxKnr0QXu8qHX9Cgmbam1mXHQ%2FuSgQOWcq20MdZJly2EnqzJwzYAgNqVCkZR35VzyBzOISE3F8OALCaAKIIlEj3S%2FbNaMzCj1ziLn54w9yyrbwfbA5UxCooqY9b%2B9WtsiyUuW1yKcUQ8iQ%2BNj%2FhjsOHYIjW5SdO%2BQpTz6DBY30Mad3HYJSbMPTtvb4GOqUBLP412oSZiYPtjRotJTphojBZ87%2Bck3yLg2S4tQRgou2nI%2F8mlGnuX73T%2FWreSdlQwlhAWmJGU1me1dk79%2FRwZBj6BEvScNXw9tuuJ9EL%2BAAQyLPulvnE5M3kKlw2VyDwjc0hnNdnObqr8rJc0D4dOPpcqQgvOuxxG0XMhQhaV6VRGvrbi5N3oCOcvSQS1WQiP01cHOhga0CFpUYbwL6F1zGAGL5p&X-Amz-Signature=2c77103e27c8bcf9215bf9e6960bd78d8898c9c3fd4a859d41e0109795ab70c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2QUGN7%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCOuR%2FzJUcmm8zfLT5fyhBG%2Fz1ySa45JduYtQIihvWcVgIgS3psPwz0XSdqOYrq9ArwmdHo%2BN0CVA%2BnKkyfbptWuhUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLar4XY3PkIAJ4ikICrcA4XpPh0P5Ih5lItecPVjxTyxwbCe%2BIBeDkIJQ3KdQx28oPp%2BVbzfnPOXDys7aG65EBL38VPPdKDIykeq6yEHsVFE3pTiJ%2F1JnhyOd1xEcxAGTjbITBwcC0N4hlBeS246Si6Q4nWByo7iMnSO6RZT94RRvz5vvz0n0lqYqOXgoy1CIfqKqj%2FpUxK9hd2URJaSHYV8jjpM%2BGM1RKqJ7swPxTrAYCxPCBuQV%2B%2FDAC59%2BMTkp0nhKcHrIOMEwUfy%2BzxWVk%2BDz2zwosGd5%2F%2F4naigCz652TIAjOLM20q5gHS6oJuC8fAKEbTNBHHnxXNtjLl31%2F8S34%2BFlAlN%2FYyXDfY44J47ZPt0%2BG9r3CmknCLLKzi4If%2BFaW2xH%2FSYJIBEHvZdQD%2FG3wnPaiBD%2Fm2bHmUxFhYp7buLnd37slYahs3GbOWX9mOvHpXvvFtNNkd8QOZuwMqKEFQgLaxKnr0QXu8qHX9Cgmbam1mXHQ%2FuSgQOWcq20MdZJly2EnqzJwzYAgNqVCkZR35VzyBzOISE3F8OALCaAKIIlEj3S%2FbNaMzCj1ziLn54w9yyrbwfbA5UxCooqY9b%2B9WtsiyUuW1yKcUQ8iQ%2BNj%2FhjsOHYIjW5SdO%2BQpTz6DBY30Mad3HYJSbMPTtvb4GOqUBLP412oSZiYPtjRotJTphojBZ87%2Bck3yLg2S4tQRgou2nI%2F8mlGnuX73T%2FWreSdlQwlhAWmJGU1me1dk79%2FRwZBj6BEvScNXw9tuuJ9EL%2BAAQyLPulvnE5M3kKlw2VyDwjc0hnNdnObqr8rJc0D4dOPpcqQgvOuxxG0XMhQhaV6VRGvrbi5N3oCOcvSQS1WQiP01cHOhga0CFpUYbwL6F1zGAGL5p&X-Amz-Signature=6bc9f1ccbe0d2910133dd8887e10d5867df2876d96c5cd7640d8e47261e1ae99&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2QUGN7%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCOuR%2FzJUcmm8zfLT5fyhBG%2Fz1ySa45JduYtQIihvWcVgIgS3psPwz0XSdqOYrq9ArwmdHo%2BN0CVA%2BnKkyfbptWuhUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLar4XY3PkIAJ4ikICrcA4XpPh0P5Ih5lItecPVjxTyxwbCe%2BIBeDkIJQ3KdQx28oPp%2BVbzfnPOXDys7aG65EBL38VPPdKDIykeq6yEHsVFE3pTiJ%2F1JnhyOd1xEcxAGTjbITBwcC0N4hlBeS246Si6Q4nWByo7iMnSO6RZT94RRvz5vvz0n0lqYqOXgoy1CIfqKqj%2FpUxK9hd2URJaSHYV8jjpM%2BGM1RKqJ7swPxTrAYCxPCBuQV%2B%2FDAC59%2BMTkp0nhKcHrIOMEwUfy%2BzxWVk%2BDz2zwosGd5%2F%2F4naigCz652TIAjOLM20q5gHS6oJuC8fAKEbTNBHHnxXNtjLl31%2F8S34%2BFlAlN%2FYyXDfY44J47ZPt0%2BG9r3CmknCLLKzi4If%2BFaW2xH%2FSYJIBEHvZdQD%2FG3wnPaiBD%2Fm2bHmUxFhYp7buLnd37slYahs3GbOWX9mOvHpXvvFtNNkd8QOZuwMqKEFQgLaxKnr0QXu8qHX9Cgmbam1mXHQ%2FuSgQOWcq20MdZJly2EnqzJwzYAgNqVCkZR35VzyBzOISE3F8OALCaAKIIlEj3S%2FbNaMzCj1ziLn54w9yyrbwfbA5UxCooqY9b%2B9WtsiyUuW1yKcUQ8iQ%2BNj%2FhjsOHYIjW5SdO%2BQpTz6DBY30Mad3HYJSbMPTtvb4GOqUBLP412oSZiYPtjRotJTphojBZ87%2Bck3yLg2S4tQRgou2nI%2F8mlGnuX73T%2FWreSdlQwlhAWmJGU1me1dk79%2FRwZBj6BEvScNXw9tuuJ9EL%2BAAQyLPulvnE5M3kKlw2VyDwjc0hnNdnObqr8rJc0D4dOPpcqQgvOuxxG0XMhQhaV6VRGvrbi5N3oCOcvSQS1WQiP01cHOhga0CFpUYbwL6F1zGAGL5p&X-Amz-Signature=7f5d7521cc4de34a87c62f7c01100a23e6b3d2f84dcbc6b257d80ea83c5dbe26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2QUGN7%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCOuR%2FzJUcmm8zfLT5fyhBG%2Fz1ySa45JduYtQIihvWcVgIgS3psPwz0XSdqOYrq9ArwmdHo%2BN0CVA%2BnKkyfbptWuhUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLar4XY3PkIAJ4ikICrcA4XpPh0P5Ih5lItecPVjxTyxwbCe%2BIBeDkIJQ3KdQx28oPp%2BVbzfnPOXDys7aG65EBL38VPPdKDIykeq6yEHsVFE3pTiJ%2F1JnhyOd1xEcxAGTjbITBwcC0N4hlBeS246Si6Q4nWByo7iMnSO6RZT94RRvz5vvz0n0lqYqOXgoy1CIfqKqj%2FpUxK9hd2URJaSHYV8jjpM%2BGM1RKqJ7swPxTrAYCxPCBuQV%2B%2FDAC59%2BMTkp0nhKcHrIOMEwUfy%2BzxWVk%2BDz2zwosGd5%2F%2F4naigCz652TIAjOLM20q5gHS6oJuC8fAKEbTNBHHnxXNtjLl31%2F8S34%2BFlAlN%2FYyXDfY44J47ZPt0%2BG9r3CmknCLLKzi4If%2BFaW2xH%2FSYJIBEHvZdQD%2FG3wnPaiBD%2Fm2bHmUxFhYp7buLnd37slYahs3GbOWX9mOvHpXvvFtNNkd8QOZuwMqKEFQgLaxKnr0QXu8qHX9Cgmbam1mXHQ%2FuSgQOWcq20MdZJly2EnqzJwzYAgNqVCkZR35VzyBzOISE3F8OALCaAKIIlEj3S%2FbNaMzCj1ziLn54w9yyrbwfbA5UxCooqY9b%2B9WtsiyUuW1yKcUQ8iQ%2BNj%2FhjsOHYIjW5SdO%2BQpTz6DBY30Mad3HYJSbMPTtvb4GOqUBLP412oSZiYPtjRotJTphojBZ87%2Bck3yLg2S4tQRgou2nI%2F8mlGnuX73T%2FWreSdlQwlhAWmJGU1me1dk79%2FRwZBj6BEvScNXw9tuuJ9EL%2BAAQyLPulvnE5M3kKlw2VyDwjc0hnNdnObqr8rJc0D4dOPpcqQgvOuxxG0XMhQhaV6VRGvrbi5N3oCOcvSQS1WQiP01cHOhga0CFpUYbwL6F1zGAGL5p&X-Amz-Signature=9a3feaf0c76a5ec4455ea16e9f22e67e32e66ce67c5d3b49842d97a4b869cf8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2QUGN7%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCOuR%2FzJUcmm8zfLT5fyhBG%2Fz1ySa45JduYtQIihvWcVgIgS3psPwz0XSdqOYrq9ArwmdHo%2BN0CVA%2BnKkyfbptWuhUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLar4XY3PkIAJ4ikICrcA4XpPh0P5Ih5lItecPVjxTyxwbCe%2BIBeDkIJQ3KdQx28oPp%2BVbzfnPOXDys7aG65EBL38VPPdKDIykeq6yEHsVFE3pTiJ%2F1JnhyOd1xEcxAGTjbITBwcC0N4hlBeS246Si6Q4nWByo7iMnSO6RZT94RRvz5vvz0n0lqYqOXgoy1CIfqKqj%2FpUxK9hd2URJaSHYV8jjpM%2BGM1RKqJ7swPxTrAYCxPCBuQV%2B%2FDAC59%2BMTkp0nhKcHrIOMEwUfy%2BzxWVk%2BDz2zwosGd5%2F%2F4naigCz652TIAjOLM20q5gHS6oJuC8fAKEbTNBHHnxXNtjLl31%2F8S34%2BFlAlN%2FYyXDfY44J47ZPt0%2BG9r3CmknCLLKzi4If%2BFaW2xH%2FSYJIBEHvZdQD%2FG3wnPaiBD%2Fm2bHmUxFhYp7buLnd37slYahs3GbOWX9mOvHpXvvFtNNkd8QOZuwMqKEFQgLaxKnr0QXu8qHX9Cgmbam1mXHQ%2FuSgQOWcq20MdZJly2EnqzJwzYAgNqVCkZR35VzyBzOISE3F8OALCaAKIIlEj3S%2FbNaMzCj1ziLn54w9yyrbwfbA5UxCooqY9b%2B9WtsiyUuW1yKcUQ8iQ%2BNj%2FhjsOHYIjW5SdO%2BQpTz6DBY30Mad3HYJSbMPTtvb4GOqUBLP412oSZiYPtjRotJTphojBZ87%2Bck3yLg2S4tQRgou2nI%2F8mlGnuX73T%2FWreSdlQwlhAWmJGU1me1dk79%2FRwZBj6BEvScNXw9tuuJ9EL%2BAAQyLPulvnE5M3kKlw2VyDwjc0hnNdnObqr8rJc0D4dOPpcqQgvOuxxG0XMhQhaV6VRGvrbi5N3oCOcvSQS1WQiP01cHOhga0CFpUYbwL6F1zGAGL5p&X-Amz-Signature=78f256ea36babda248eaf71fae6f6fcf2dd2af6492057eafff9b7e77d3acdcc4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP2QUGN7%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCOuR%2FzJUcmm8zfLT5fyhBG%2Fz1ySa45JduYtQIihvWcVgIgS3psPwz0XSdqOYrq9ArwmdHo%2BN0CVA%2BnKkyfbptWuhUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLar4XY3PkIAJ4ikICrcA4XpPh0P5Ih5lItecPVjxTyxwbCe%2BIBeDkIJQ3KdQx28oPp%2BVbzfnPOXDys7aG65EBL38VPPdKDIykeq6yEHsVFE3pTiJ%2F1JnhyOd1xEcxAGTjbITBwcC0N4hlBeS246Si6Q4nWByo7iMnSO6RZT94RRvz5vvz0n0lqYqOXgoy1CIfqKqj%2FpUxK9hd2URJaSHYV8jjpM%2BGM1RKqJ7swPxTrAYCxPCBuQV%2B%2FDAC59%2BMTkp0nhKcHrIOMEwUfy%2BzxWVk%2BDz2zwosGd5%2F%2F4naigCz652TIAjOLM20q5gHS6oJuC8fAKEbTNBHHnxXNtjLl31%2F8S34%2BFlAlN%2FYyXDfY44J47ZPt0%2BG9r3CmknCLLKzi4If%2BFaW2xH%2FSYJIBEHvZdQD%2FG3wnPaiBD%2Fm2bHmUxFhYp7buLnd37slYahs3GbOWX9mOvHpXvvFtNNkd8QOZuwMqKEFQgLaxKnr0QXu8qHX9Cgmbam1mXHQ%2FuSgQOWcq20MdZJly2EnqzJwzYAgNqVCkZR35VzyBzOISE3F8OALCaAKIIlEj3S%2FbNaMzCj1ziLn54w9yyrbwfbA5UxCooqY9b%2B9WtsiyUuW1yKcUQ8iQ%2BNj%2FhjsOHYIjW5SdO%2BQpTz6DBY30Mad3HYJSbMPTtvb4GOqUBLP412oSZiYPtjRotJTphojBZ87%2Bck3yLg2S4tQRgou2nI%2F8mlGnuX73T%2FWreSdlQwlhAWmJGU1me1dk79%2FRwZBj6BEvScNXw9tuuJ9EL%2BAAQyLPulvnE5M3kKlw2VyDwjc0hnNdnObqr8rJc0D4dOPpcqQgvOuxxG0XMhQhaV6VRGvrbi5N3oCOcvSQS1WQiP01cHOhga0CFpUYbwL6F1zGAGL5p&X-Amz-Signature=811fa627161db6d672ded037dbc06c9cadb22edad8b940ac98c4a53f21e9982b&X-Amz-SignedHeaders=host&x-id=GetObject)
