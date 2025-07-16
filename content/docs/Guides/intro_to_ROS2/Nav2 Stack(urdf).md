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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCM27QN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDHstJ5Ft41U0XaDLXNoQ7Yzx5UUe3RTt1%2BgLX84%2FaalwIgBreNqSL7b1g3n91b%2FoHnes5y0m9K5BnqZuDisTw7PZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDORdDk1M801pvFRD8yrcA77JD6oPPzeAyUd87Oe6jjsYp3GTzw6as9Ks26VzC56o41JZYbb%2Bp8J3tqeKLpdAoq3y2yZ9G4y1s3BeiOKA6agUkoDljhBzbJfQs%2BzHMd8fMIGgXgrbot0gGCBnPN9Qn9vxmrF4h61La%2F4vVeSIQF%2BSmRTyabFa779zuqFc2YVPI5EYb4fEgflbrwkPpZ8NsTKQCAZsVpKRciw%2BaigZJhOPfP0IGEyvBtH4Nqv2WhbnzAtAC09Mxl97E9ePQiPqLSdpjhm%2BcAotaGODZ0wOkxJyt59kFPJ20psgxMghlk6%2FEx0JjvtLnngv07TKRY%2FtCKdXehoEwpjypHw5rTNP1xVx2aH9Ud0hQWADhiYv2PnwS%2FUU6h%2FUGUfnPivze2%2Fg44ykHQJzaYI%2BVAxHugXI8%2BZToQMki9M1M3LY6mScX6TAa4qlcbJSihrds3T25%2BaCEH21PSSuZfkBcJohtn61UqpPxpuRVcfY2U3yzyI09qHPJnsZ0eatREFor%2BSljsXd5p8o0mQtPw5nqKwmfXuJAZHsVVoGI2pDw9MaNrE03RnUW57gOwYpXMl9JK9k0gJNZMxQZCRG%2Brkk4ch2%2B%2FowNdiuqg%2BtZ32BG%2B2JEY76RlbdOfcQM8uWs1ayj8RgMPPQ4MMGOqUBmnYFhaprnVeWtAu7%2B4jstZf51g0r6iQxNzfhC1fkFsLimm2HghsaDPikKewxwBPiGQRnppPgPdLLDGnmWht4vlSTO6OtFWBwH0MOgsGbrrN8pzLktTme5ip0CYMo9T9TPRbMw8YBinveND07OSla3JClYt48YDRWeCr1GxkPHYtRFbMpDT63QmDcY9X6AzllYo2b9lNjkhbFae7GS5FYBMundU6d&X-Amz-Signature=aad63633064160515a85a76af900144ba8e3f1f91295ef3c5eb3a99ba9d8d5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCM27QN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDHstJ5Ft41U0XaDLXNoQ7Yzx5UUe3RTt1%2BgLX84%2FaalwIgBreNqSL7b1g3n91b%2FoHnes5y0m9K5BnqZuDisTw7PZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDORdDk1M801pvFRD8yrcA77JD6oPPzeAyUd87Oe6jjsYp3GTzw6as9Ks26VzC56o41JZYbb%2Bp8J3tqeKLpdAoq3y2yZ9G4y1s3BeiOKA6agUkoDljhBzbJfQs%2BzHMd8fMIGgXgrbot0gGCBnPN9Qn9vxmrF4h61La%2F4vVeSIQF%2BSmRTyabFa779zuqFc2YVPI5EYb4fEgflbrwkPpZ8NsTKQCAZsVpKRciw%2BaigZJhOPfP0IGEyvBtH4Nqv2WhbnzAtAC09Mxl97E9ePQiPqLSdpjhm%2BcAotaGODZ0wOkxJyt59kFPJ20psgxMghlk6%2FEx0JjvtLnngv07TKRY%2FtCKdXehoEwpjypHw5rTNP1xVx2aH9Ud0hQWADhiYv2PnwS%2FUU6h%2FUGUfnPivze2%2Fg44ykHQJzaYI%2BVAxHugXI8%2BZToQMki9M1M3LY6mScX6TAa4qlcbJSihrds3T25%2BaCEH21PSSuZfkBcJohtn61UqpPxpuRVcfY2U3yzyI09qHPJnsZ0eatREFor%2BSljsXd5p8o0mQtPw5nqKwmfXuJAZHsVVoGI2pDw9MaNrE03RnUW57gOwYpXMl9JK9k0gJNZMxQZCRG%2Brkk4ch2%2B%2FowNdiuqg%2BtZ32BG%2B2JEY76RlbdOfcQM8uWs1ayj8RgMPPQ4MMGOqUBmnYFhaprnVeWtAu7%2B4jstZf51g0r6iQxNzfhC1fkFsLimm2HghsaDPikKewxwBPiGQRnppPgPdLLDGnmWht4vlSTO6OtFWBwH0MOgsGbrrN8pzLktTme5ip0CYMo9T9TPRbMw8YBinveND07OSla3JClYt48YDRWeCr1GxkPHYtRFbMpDT63QmDcY9X6AzllYo2b9lNjkhbFae7GS5FYBMundU6d&X-Amz-Signature=2d8af0ec4b807a765e7f0795c8ebb850d5f1ce0e3d6d0acfb400cb30d1d6f343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCM27QN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDHstJ5Ft41U0XaDLXNoQ7Yzx5UUe3RTt1%2BgLX84%2FaalwIgBreNqSL7b1g3n91b%2FoHnes5y0m9K5BnqZuDisTw7PZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDORdDk1M801pvFRD8yrcA77JD6oPPzeAyUd87Oe6jjsYp3GTzw6as9Ks26VzC56o41JZYbb%2Bp8J3tqeKLpdAoq3y2yZ9G4y1s3BeiOKA6agUkoDljhBzbJfQs%2BzHMd8fMIGgXgrbot0gGCBnPN9Qn9vxmrF4h61La%2F4vVeSIQF%2BSmRTyabFa779zuqFc2YVPI5EYb4fEgflbrwkPpZ8NsTKQCAZsVpKRciw%2BaigZJhOPfP0IGEyvBtH4Nqv2WhbnzAtAC09Mxl97E9ePQiPqLSdpjhm%2BcAotaGODZ0wOkxJyt59kFPJ20psgxMghlk6%2FEx0JjvtLnngv07TKRY%2FtCKdXehoEwpjypHw5rTNP1xVx2aH9Ud0hQWADhiYv2PnwS%2FUU6h%2FUGUfnPivze2%2Fg44ykHQJzaYI%2BVAxHugXI8%2BZToQMki9M1M3LY6mScX6TAa4qlcbJSihrds3T25%2BaCEH21PSSuZfkBcJohtn61UqpPxpuRVcfY2U3yzyI09qHPJnsZ0eatREFor%2BSljsXd5p8o0mQtPw5nqKwmfXuJAZHsVVoGI2pDw9MaNrE03RnUW57gOwYpXMl9JK9k0gJNZMxQZCRG%2Brkk4ch2%2B%2FowNdiuqg%2BtZ32BG%2B2JEY76RlbdOfcQM8uWs1ayj8RgMPPQ4MMGOqUBmnYFhaprnVeWtAu7%2B4jstZf51g0r6iQxNzfhC1fkFsLimm2HghsaDPikKewxwBPiGQRnppPgPdLLDGnmWht4vlSTO6OtFWBwH0MOgsGbrrN8pzLktTme5ip0CYMo9T9TPRbMw8YBinveND07OSla3JClYt48YDRWeCr1GxkPHYtRFbMpDT63QmDcY9X6AzllYo2b9lNjkhbFae7GS5FYBMundU6d&X-Amz-Signature=79fa6e25ebbc8d3b8f6dfc86fe8c354e44a3fb310de75fbeaf4a8736e4031074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCM27QN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDHstJ5Ft41U0XaDLXNoQ7Yzx5UUe3RTt1%2BgLX84%2FaalwIgBreNqSL7b1g3n91b%2FoHnes5y0m9K5BnqZuDisTw7PZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDORdDk1M801pvFRD8yrcA77JD6oPPzeAyUd87Oe6jjsYp3GTzw6as9Ks26VzC56o41JZYbb%2Bp8J3tqeKLpdAoq3y2yZ9G4y1s3BeiOKA6agUkoDljhBzbJfQs%2BzHMd8fMIGgXgrbot0gGCBnPN9Qn9vxmrF4h61La%2F4vVeSIQF%2BSmRTyabFa779zuqFc2YVPI5EYb4fEgflbrwkPpZ8NsTKQCAZsVpKRciw%2BaigZJhOPfP0IGEyvBtH4Nqv2WhbnzAtAC09Mxl97E9ePQiPqLSdpjhm%2BcAotaGODZ0wOkxJyt59kFPJ20psgxMghlk6%2FEx0JjvtLnngv07TKRY%2FtCKdXehoEwpjypHw5rTNP1xVx2aH9Ud0hQWADhiYv2PnwS%2FUU6h%2FUGUfnPivze2%2Fg44ykHQJzaYI%2BVAxHugXI8%2BZToQMki9M1M3LY6mScX6TAa4qlcbJSihrds3T25%2BaCEH21PSSuZfkBcJohtn61UqpPxpuRVcfY2U3yzyI09qHPJnsZ0eatREFor%2BSljsXd5p8o0mQtPw5nqKwmfXuJAZHsVVoGI2pDw9MaNrE03RnUW57gOwYpXMl9JK9k0gJNZMxQZCRG%2Brkk4ch2%2B%2FowNdiuqg%2BtZ32BG%2B2JEY76RlbdOfcQM8uWs1ayj8RgMPPQ4MMGOqUBmnYFhaprnVeWtAu7%2B4jstZf51g0r6iQxNzfhC1fkFsLimm2HghsaDPikKewxwBPiGQRnppPgPdLLDGnmWht4vlSTO6OtFWBwH0MOgsGbrrN8pzLktTme5ip0CYMo9T9TPRbMw8YBinveND07OSla3JClYt48YDRWeCr1GxkPHYtRFbMpDT63QmDcY9X6AzllYo2b9lNjkhbFae7GS5FYBMundU6d&X-Amz-Signature=ae8f4161f266669417412157ec0f307e156216fc468697e513b7ecf47b189d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCM27QN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDHstJ5Ft41U0XaDLXNoQ7Yzx5UUe3RTt1%2BgLX84%2FaalwIgBreNqSL7b1g3n91b%2FoHnes5y0m9K5BnqZuDisTw7PZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDORdDk1M801pvFRD8yrcA77JD6oPPzeAyUd87Oe6jjsYp3GTzw6as9Ks26VzC56o41JZYbb%2Bp8J3tqeKLpdAoq3y2yZ9G4y1s3BeiOKA6agUkoDljhBzbJfQs%2BzHMd8fMIGgXgrbot0gGCBnPN9Qn9vxmrF4h61La%2F4vVeSIQF%2BSmRTyabFa779zuqFc2YVPI5EYb4fEgflbrwkPpZ8NsTKQCAZsVpKRciw%2BaigZJhOPfP0IGEyvBtH4Nqv2WhbnzAtAC09Mxl97E9ePQiPqLSdpjhm%2BcAotaGODZ0wOkxJyt59kFPJ20psgxMghlk6%2FEx0JjvtLnngv07TKRY%2FtCKdXehoEwpjypHw5rTNP1xVx2aH9Ud0hQWADhiYv2PnwS%2FUU6h%2FUGUfnPivze2%2Fg44ykHQJzaYI%2BVAxHugXI8%2BZToQMki9M1M3LY6mScX6TAa4qlcbJSihrds3T25%2BaCEH21PSSuZfkBcJohtn61UqpPxpuRVcfY2U3yzyI09qHPJnsZ0eatREFor%2BSljsXd5p8o0mQtPw5nqKwmfXuJAZHsVVoGI2pDw9MaNrE03RnUW57gOwYpXMl9JK9k0gJNZMxQZCRG%2Brkk4ch2%2B%2FowNdiuqg%2BtZ32BG%2B2JEY76RlbdOfcQM8uWs1ayj8RgMPPQ4MMGOqUBmnYFhaprnVeWtAu7%2B4jstZf51g0r6iQxNzfhC1fkFsLimm2HghsaDPikKewxwBPiGQRnppPgPdLLDGnmWht4vlSTO6OtFWBwH0MOgsGbrrN8pzLktTme5ip0CYMo9T9TPRbMw8YBinveND07OSla3JClYt48YDRWeCr1GxkPHYtRFbMpDT63QmDcY9X6AzllYo2b9lNjkhbFae7GS5FYBMundU6d&X-Amz-Signature=97f4e4cf945ed77975ba4fa24d58405b6fd5d35b73871439a50e47424bd9d4e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCM27QN%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T230932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDHstJ5Ft41U0XaDLXNoQ7Yzx5UUe3RTt1%2BgLX84%2FaalwIgBreNqSL7b1g3n91b%2FoHnes5y0m9K5BnqZuDisTw7PZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDORdDk1M801pvFRD8yrcA77JD6oPPzeAyUd87Oe6jjsYp3GTzw6as9Ks26VzC56o41JZYbb%2Bp8J3tqeKLpdAoq3y2yZ9G4y1s3BeiOKA6agUkoDljhBzbJfQs%2BzHMd8fMIGgXgrbot0gGCBnPN9Qn9vxmrF4h61La%2F4vVeSIQF%2BSmRTyabFa779zuqFc2YVPI5EYb4fEgflbrwkPpZ8NsTKQCAZsVpKRciw%2BaigZJhOPfP0IGEyvBtH4Nqv2WhbnzAtAC09Mxl97E9ePQiPqLSdpjhm%2BcAotaGODZ0wOkxJyt59kFPJ20psgxMghlk6%2FEx0JjvtLnngv07TKRY%2FtCKdXehoEwpjypHw5rTNP1xVx2aH9Ud0hQWADhiYv2PnwS%2FUU6h%2FUGUfnPivze2%2Fg44ykHQJzaYI%2BVAxHugXI8%2BZToQMki9M1M3LY6mScX6TAa4qlcbJSihrds3T25%2BaCEH21PSSuZfkBcJohtn61UqpPxpuRVcfY2U3yzyI09qHPJnsZ0eatREFor%2BSljsXd5p8o0mQtPw5nqKwmfXuJAZHsVVoGI2pDw9MaNrE03RnUW57gOwYpXMl9JK9k0gJNZMxQZCRG%2Brkk4ch2%2B%2FowNdiuqg%2BtZ32BG%2B2JEY76RlbdOfcQM8uWs1ayj8RgMPPQ4MMGOqUBmnYFhaprnVeWtAu7%2B4jstZf51g0r6iQxNzfhC1fkFsLimm2HghsaDPikKewxwBPiGQRnppPgPdLLDGnmWht4vlSTO6OtFWBwH0MOgsGbrrN8pzLktTme5ip0CYMo9T9TPRbMw8YBinveND07OSla3JClYt48YDRWeCr1GxkPHYtRFbMpDT63QmDcY9X6AzllYo2b9lNjkhbFae7GS5FYBMundU6d&X-Amz-Signature=01bc90d4290cbdd52a3c6f3057a2dfc0de0ee649e9fe9a37ba1dfa112c3fbecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
