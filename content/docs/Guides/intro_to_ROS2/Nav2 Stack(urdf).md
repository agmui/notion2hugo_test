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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL5QAQEA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECH40Wv0eI2vu7hd%2Bry%2FfArbUY2PmDH%2F4xT7XHBDRhCAiAZAX1jyXKZDRrcPLiunbIqorflE1g2pSOYrRhq9IrY%2FSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMNKGqzXAmA1aOYvBjKtwDFPiNLO8D1M270YVvKuJ5909B1bp4NsgRxv8pu2lTJUGmB2k%2F34ydw%2Bk9EwhREEQPUffUoxeqdknBbXLlokbLRB%2FsmZa0c6UxZTu4QCrlZ0e6%2FDBVtE%2FfxRN8D08hn%2FQ%2FzWLI1ei0U30PZNQ998u2Q31yDIFrosF9BPVoQ7mXL5jNyRPbZgRWct6mfNq%2BS556HcYns9yKlf%2F35yMvs39KGpq6inN4Dm3P7uolA%2Fb0DJtQ3Ayes0t1OKBXj7789Z1DxLJia0nR3A%2BEj%2Bw0scI5FDSpBlvkXkULFWyUl%2Fc%2FB1wbJQHlJs52rbQMxxDIEPrpbzpcSiKaSwtaBrM%2F26tjyus66ItlpaqSn%2FvvGMVfNIiHV910Zf%2BzSdt0Xfi06nA4alcaE%2Bc4Rez7pg8f6dcK8WY%2FWTw9KsNQbVbR6Xf1PhR%2BV7aYnjB6%2BIk3bJKB%2BQykLU3AOJn61d5HBL6mOEg2uPn9QeW6m3Jwm%2FKLxR45DiEO3MANVHUZkwChBlqPn0bgUHgBPApzT2NFbfj73lPZy%2B29RUqDDS6LGgnoyoWYQ6vjXvnLwoEAq%2F2Sy%2FTS7UjHErhA3eoOo%2BHIHkLB%2BI3nWOE2wYXQdEY1BADMeA%2Bl33HyDt%2Fv6MrQ2BiXtDgw4PeHwAY6pgE185xWnxdeuLHjBg2Li%2FAyZbsXYAojx4DOa9oDfpMpr%2BlrHtXnsqqZyzMd9lfU6jQk%2FIE%2B2m5j3Dm%2BOFj7jvZ653gsXpEJrRxq40zb%2FMjfp%2BFlQq2ojoz4%2BlOAFeVABpnyqlKKuU8I7fGFxShpCdodrTs6tv%2B%2FsQyQhJUQexkxCD41gQ2hgQvYfQsxrMR04DP8Mbz6cqbIkoXPinKjAHZwmMYisaeC&X-Amz-Signature=60294f1b9950157506f7f583ece31e9f0f6db5bc1251cb3beec48801b1f27bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL5QAQEA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECH40Wv0eI2vu7hd%2Bry%2FfArbUY2PmDH%2F4xT7XHBDRhCAiAZAX1jyXKZDRrcPLiunbIqorflE1g2pSOYrRhq9IrY%2FSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMNKGqzXAmA1aOYvBjKtwDFPiNLO8D1M270YVvKuJ5909B1bp4NsgRxv8pu2lTJUGmB2k%2F34ydw%2Bk9EwhREEQPUffUoxeqdknBbXLlokbLRB%2FsmZa0c6UxZTu4QCrlZ0e6%2FDBVtE%2FfxRN8D08hn%2FQ%2FzWLI1ei0U30PZNQ998u2Q31yDIFrosF9BPVoQ7mXL5jNyRPbZgRWct6mfNq%2BS556HcYns9yKlf%2F35yMvs39KGpq6inN4Dm3P7uolA%2Fb0DJtQ3Ayes0t1OKBXj7789Z1DxLJia0nR3A%2BEj%2Bw0scI5FDSpBlvkXkULFWyUl%2Fc%2FB1wbJQHlJs52rbQMxxDIEPrpbzpcSiKaSwtaBrM%2F26tjyus66ItlpaqSn%2FvvGMVfNIiHV910Zf%2BzSdt0Xfi06nA4alcaE%2Bc4Rez7pg8f6dcK8WY%2FWTw9KsNQbVbR6Xf1PhR%2BV7aYnjB6%2BIk3bJKB%2BQykLU3AOJn61d5HBL6mOEg2uPn9QeW6m3Jwm%2FKLxR45DiEO3MANVHUZkwChBlqPn0bgUHgBPApzT2NFbfj73lPZy%2B29RUqDDS6LGgnoyoWYQ6vjXvnLwoEAq%2F2Sy%2FTS7UjHErhA3eoOo%2BHIHkLB%2BI3nWOE2wYXQdEY1BADMeA%2Bl33HyDt%2Fv6MrQ2BiXtDgw4PeHwAY6pgE185xWnxdeuLHjBg2Li%2FAyZbsXYAojx4DOa9oDfpMpr%2BlrHtXnsqqZyzMd9lfU6jQk%2FIE%2B2m5j3Dm%2BOFj7jvZ653gsXpEJrRxq40zb%2FMjfp%2BFlQq2ojoz4%2BlOAFeVABpnyqlKKuU8I7fGFxShpCdodrTs6tv%2B%2FsQyQhJUQexkxCD41gQ2hgQvYfQsxrMR04DP8Mbz6cqbIkoXPinKjAHZwmMYisaeC&X-Amz-Signature=1c5e893fd02b7bb5af51135bc16a0456db6939b58c69360e6523cdd3fd5bb0f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL5QAQEA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECH40Wv0eI2vu7hd%2Bry%2FfArbUY2PmDH%2F4xT7XHBDRhCAiAZAX1jyXKZDRrcPLiunbIqorflE1g2pSOYrRhq9IrY%2FSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMNKGqzXAmA1aOYvBjKtwDFPiNLO8D1M270YVvKuJ5909B1bp4NsgRxv8pu2lTJUGmB2k%2F34ydw%2Bk9EwhREEQPUffUoxeqdknBbXLlokbLRB%2FsmZa0c6UxZTu4QCrlZ0e6%2FDBVtE%2FfxRN8D08hn%2FQ%2FzWLI1ei0U30PZNQ998u2Q31yDIFrosF9BPVoQ7mXL5jNyRPbZgRWct6mfNq%2BS556HcYns9yKlf%2F35yMvs39KGpq6inN4Dm3P7uolA%2Fb0DJtQ3Ayes0t1OKBXj7789Z1DxLJia0nR3A%2BEj%2Bw0scI5FDSpBlvkXkULFWyUl%2Fc%2FB1wbJQHlJs52rbQMxxDIEPrpbzpcSiKaSwtaBrM%2F26tjyus66ItlpaqSn%2FvvGMVfNIiHV910Zf%2BzSdt0Xfi06nA4alcaE%2Bc4Rez7pg8f6dcK8WY%2FWTw9KsNQbVbR6Xf1PhR%2BV7aYnjB6%2BIk3bJKB%2BQykLU3AOJn61d5HBL6mOEg2uPn9QeW6m3Jwm%2FKLxR45DiEO3MANVHUZkwChBlqPn0bgUHgBPApzT2NFbfj73lPZy%2B29RUqDDS6LGgnoyoWYQ6vjXvnLwoEAq%2F2Sy%2FTS7UjHErhA3eoOo%2BHIHkLB%2BI3nWOE2wYXQdEY1BADMeA%2Bl33HyDt%2Fv6MrQ2BiXtDgw4PeHwAY6pgE185xWnxdeuLHjBg2Li%2FAyZbsXYAojx4DOa9oDfpMpr%2BlrHtXnsqqZyzMd9lfU6jQk%2FIE%2B2m5j3Dm%2BOFj7jvZ653gsXpEJrRxq40zb%2FMjfp%2BFlQq2ojoz4%2BlOAFeVABpnyqlKKuU8I7fGFxShpCdodrTs6tv%2B%2FsQyQhJUQexkxCD41gQ2hgQvYfQsxrMR04DP8Mbz6cqbIkoXPinKjAHZwmMYisaeC&X-Amz-Signature=2dcdc3bd7db2b1a9d1af7d89b03e88ee03a4f06cec6a5e370fcdc40ec2e5d458&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL5QAQEA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECH40Wv0eI2vu7hd%2Bry%2FfArbUY2PmDH%2F4xT7XHBDRhCAiAZAX1jyXKZDRrcPLiunbIqorflE1g2pSOYrRhq9IrY%2FSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMNKGqzXAmA1aOYvBjKtwDFPiNLO8D1M270YVvKuJ5909B1bp4NsgRxv8pu2lTJUGmB2k%2F34ydw%2Bk9EwhREEQPUffUoxeqdknBbXLlokbLRB%2FsmZa0c6UxZTu4QCrlZ0e6%2FDBVtE%2FfxRN8D08hn%2FQ%2FzWLI1ei0U30PZNQ998u2Q31yDIFrosF9BPVoQ7mXL5jNyRPbZgRWct6mfNq%2BS556HcYns9yKlf%2F35yMvs39KGpq6inN4Dm3P7uolA%2Fb0DJtQ3Ayes0t1OKBXj7789Z1DxLJia0nR3A%2BEj%2Bw0scI5FDSpBlvkXkULFWyUl%2Fc%2FB1wbJQHlJs52rbQMxxDIEPrpbzpcSiKaSwtaBrM%2F26tjyus66ItlpaqSn%2FvvGMVfNIiHV910Zf%2BzSdt0Xfi06nA4alcaE%2Bc4Rez7pg8f6dcK8WY%2FWTw9KsNQbVbR6Xf1PhR%2BV7aYnjB6%2BIk3bJKB%2BQykLU3AOJn61d5HBL6mOEg2uPn9QeW6m3Jwm%2FKLxR45DiEO3MANVHUZkwChBlqPn0bgUHgBPApzT2NFbfj73lPZy%2B29RUqDDS6LGgnoyoWYQ6vjXvnLwoEAq%2F2Sy%2FTS7UjHErhA3eoOo%2BHIHkLB%2BI3nWOE2wYXQdEY1BADMeA%2Bl33HyDt%2Fv6MrQ2BiXtDgw4PeHwAY6pgE185xWnxdeuLHjBg2Li%2FAyZbsXYAojx4DOa9oDfpMpr%2BlrHtXnsqqZyzMd9lfU6jQk%2FIE%2B2m5j3Dm%2BOFj7jvZ653gsXpEJrRxq40zb%2FMjfp%2BFlQq2ojoz4%2BlOAFeVABpnyqlKKuU8I7fGFxShpCdodrTs6tv%2B%2FsQyQhJUQexkxCD41gQ2hgQvYfQsxrMR04DP8Mbz6cqbIkoXPinKjAHZwmMYisaeC&X-Amz-Signature=9bdd860ce989f5ee3fb71738dce1182504957daad0d3609a09ad5bca4d48645d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL5QAQEA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECH40Wv0eI2vu7hd%2Bry%2FfArbUY2PmDH%2F4xT7XHBDRhCAiAZAX1jyXKZDRrcPLiunbIqorflE1g2pSOYrRhq9IrY%2FSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMNKGqzXAmA1aOYvBjKtwDFPiNLO8D1M270YVvKuJ5909B1bp4NsgRxv8pu2lTJUGmB2k%2F34ydw%2Bk9EwhREEQPUffUoxeqdknBbXLlokbLRB%2FsmZa0c6UxZTu4QCrlZ0e6%2FDBVtE%2FfxRN8D08hn%2FQ%2FzWLI1ei0U30PZNQ998u2Q31yDIFrosF9BPVoQ7mXL5jNyRPbZgRWct6mfNq%2BS556HcYns9yKlf%2F35yMvs39KGpq6inN4Dm3P7uolA%2Fb0DJtQ3Ayes0t1OKBXj7789Z1DxLJia0nR3A%2BEj%2Bw0scI5FDSpBlvkXkULFWyUl%2Fc%2FB1wbJQHlJs52rbQMxxDIEPrpbzpcSiKaSwtaBrM%2F26tjyus66ItlpaqSn%2FvvGMVfNIiHV910Zf%2BzSdt0Xfi06nA4alcaE%2Bc4Rez7pg8f6dcK8WY%2FWTw9KsNQbVbR6Xf1PhR%2BV7aYnjB6%2BIk3bJKB%2BQykLU3AOJn61d5HBL6mOEg2uPn9QeW6m3Jwm%2FKLxR45DiEO3MANVHUZkwChBlqPn0bgUHgBPApzT2NFbfj73lPZy%2B29RUqDDS6LGgnoyoWYQ6vjXvnLwoEAq%2F2Sy%2FTS7UjHErhA3eoOo%2BHIHkLB%2BI3nWOE2wYXQdEY1BADMeA%2Bl33HyDt%2Fv6MrQ2BiXtDgw4PeHwAY6pgE185xWnxdeuLHjBg2Li%2FAyZbsXYAojx4DOa9oDfpMpr%2BlrHtXnsqqZyzMd9lfU6jQk%2FIE%2B2m5j3Dm%2BOFj7jvZ653gsXpEJrRxq40zb%2FMjfp%2BFlQq2ojoz4%2BlOAFeVABpnyqlKKuU8I7fGFxShpCdodrTs6tv%2B%2FsQyQhJUQexkxCD41gQ2hgQvYfQsxrMR04DP8Mbz6cqbIkoXPinKjAHZwmMYisaeC&X-Amz-Signature=53101723859b02613d37466a590bc08e2a4d4c1bfe900151906417c577dd3c23&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL5QAQEA%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIECH40Wv0eI2vu7hd%2Bry%2FfArbUY2PmDH%2F4xT7XHBDRhCAiAZAX1jyXKZDRrcPLiunbIqorflE1g2pSOYrRhq9IrY%2FSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMNKGqzXAmA1aOYvBjKtwDFPiNLO8D1M270YVvKuJ5909B1bp4NsgRxv8pu2lTJUGmB2k%2F34ydw%2Bk9EwhREEQPUffUoxeqdknBbXLlokbLRB%2FsmZa0c6UxZTu4QCrlZ0e6%2FDBVtE%2FfxRN8D08hn%2FQ%2FzWLI1ei0U30PZNQ998u2Q31yDIFrosF9BPVoQ7mXL5jNyRPbZgRWct6mfNq%2BS556HcYns9yKlf%2F35yMvs39KGpq6inN4Dm3P7uolA%2Fb0DJtQ3Ayes0t1OKBXj7789Z1DxLJia0nR3A%2BEj%2Bw0scI5FDSpBlvkXkULFWyUl%2Fc%2FB1wbJQHlJs52rbQMxxDIEPrpbzpcSiKaSwtaBrM%2F26tjyus66ItlpaqSn%2FvvGMVfNIiHV910Zf%2BzSdt0Xfi06nA4alcaE%2Bc4Rez7pg8f6dcK8WY%2FWTw9KsNQbVbR6Xf1PhR%2BV7aYnjB6%2BIk3bJKB%2BQykLU3AOJn61d5HBL6mOEg2uPn9QeW6m3Jwm%2FKLxR45DiEO3MANVHUZkwChBlqPn0bgUHgBPApzT2NFbfj73lPZy%2B29RUqDDS6LGgnoyoWYQ6vjXvnLwoEAq%2F2Sy%2FTS7UjHErhA3eoOo%2BHIHkLB%2BI3nWOE2wYXQdEY1BADMeA%2Bl33HyDt%2Fv6MrQ2BiXtDgw4PeHwAY6pgE185xWnxdeuLHjBg2Li%2FAyZbsXYAojx4DOa9oDfpMpr%2BlrHtXnsqqZyzMd9lfU6jQk%2FIE%2B2m5j3Dm%2BOFj7jvZ653gsXpEJrRxq40zb%2FMjfp%2BFlQq2ojoz4%2BlOAFeVABpnyqlKKuU8I7fGFxShpCdodrTs6tv%2B%2FsQyQhJUQexkxCD41gQ2hgQvYfQsxrMR04DP8Mbz6cqbIkoXPinKjAHZwmMYisaeC&X-Amz-Signature=3916e9ef275c136f585a40d890a9a5be81ef508e74654d94b89ad758d8a297c2&X-Amz-SignedHeaders=host&x-id=GetObject)
