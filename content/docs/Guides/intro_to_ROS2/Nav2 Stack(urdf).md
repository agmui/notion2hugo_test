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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKQRT76%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFWCtnQ4tVSNHHcwnYBG49V%2FbcYUBT%2F718u%2B2mIAFPFBAiArmJCSQuVlY5jsOGGeGZeXLgdpU05UtuX36Scvkhyetir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMOMGEf6W6DLB5g%2FL0KtwDp2plHz44CoDCoyMZD995DNNpxn%2B%2BSEuqGEoiwxAlUU1EGmuUACtV5SXvFVAZ8JAoHqOyfCxEzq7UHGm%2BhR8YN7S4NROI6Oce3KVdad4dw8ohcdQA9NqO06XLunNFKFjKYHBiEWMrd3%2BO1gF3hvmgwoJB%2Fbik377XO%2BPGTQJ6bO9rQ%2BYLLQlWBpPuZBHDWZo9trLM40onZ6MkfIuqtH0Yu3nAolQS9OC7RDMAjnU0glTe%2FMnZzL%2BuwbospuzjQImD%2F%2F2ZvX03yAkuN5kuQt4zSIYn0AHjnUHT81j3DzQnaNnYqZQ86K2bqi%2BbcBa7R12iIgjZKQ6M2F5VyxwlBadVBOlIxfL5TnM6riAsqMuLehbzBk8jLHKmhOEKuyv19SsBW9jp9a7b8cT4R8ej7t9jN9CmJkJrkJE3MLR8HY1tdo2Hycxigr5sGQarpHypR%2F2mg2cjwwsmdE2DO%2FAPkY9FRmT7aCNgDMgxX9HcwTYsFhOUusNteKdaolOyVkZcX%2BqCJt6DsH4L0juwV%2BCYdIQrKJXcEj%2BIDAZGFl43vBj2Txfa%2FloM%2B%2FFl2TO3Jdo86HgUmxkt8DktqOimXSHkn8mv%2BeDAYCJhHYUN6EwyFC8LZ3m%2BqEAOKMrNFAt0iZgw2c%2BTwQY6pgHhPBsH6EJChPkHve7iDtc8NX9hF6RPogaJ%2BxDD7okN8UG3NoHkEiPatXfyA5PbyxqvV1ehaqpzd9X4eniYsUcMH2NSf7MBSA1hWTJ9GTy2aqWu4vYa3d454zBSgDNNJdsAVO9owgl9v7ZO59Ng9D4DeJzuv2eV%2FqXx%2F6q1Dd%2BVooCc7SnkVDTM9SfMLag2%2BDulW6tFQ2q7ILhbf81ORuhIGBYVc996&X-Amz-Signature=7951e4d7759552fb8828e74a17b3749af038adaea2c0fe1e05dafa4a9f7db082&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKQRT76%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFWCtnQ4tVSNHHcwnYBG49V%2FbcYUBT%2F718u%2B2mIAFPFBAiArmJCSQuVlY5jsOGGeGZeXLgdpU05UtuX36Scvkhyetir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMOMGEf6W6DLB5g%2FL0KtwDp2plHz44CoDCoyMZD995DNNpxn%2B%2BSEuqGEoiwxAlUU1EGmuUACtV5SXvFVAZ8JAoHqOyfCxEzq7UHGm%2BhR8YN7S4NROI6Oce3KVdad4dw8ohcdQA9NqO06XLunNFKFjKYHBiEWMrd3%2BO1gF3hvmgwoJB%2Fbik377XO%2BPGTQJ6bO9rQ%2BYLLQlWBpPuZBHDWZo9trLM40onZ6MkfIuqtH0Yu3nAolQS9OC7RDMAjnU0glTe%2FMnZzL%2BuwbospuzjQImD%2F%2F2ZvX03yAkuN5kuQt4zSIYn0AHjnUHT81j3DzQnaNnYqZQ86K2bqi%2BbcBa7R12iIgjZKQ6M2F5VyxwlBadVBOlIxfL5TnM6riAsqMuLehbzBk8jLHKmhOEKuyv19SsBW9jp9a7b8cT4R8ej7t9jN9CmJkJrkJE3MLR8HY1tdo2Hycxigr5sGQarpHypR%2F2mg2cjwwsmdE2DO%2FAPkY9FRmT7aCNgDMgxX9HcwTYsFhOUusNteKdaolOyVkZcX%2BqCJt6DsH4L0juwV%2BCYdIQrKJXcEj%2BIDAZGFl43vBj2Txfa%2FloM%2B%2FFl2TO3Jdo86HgUmxkt8DktqOimXSHkn8mv%2BeDAYCJhHYUN6EwyFC8LZ3m%2BqEAOKMrNFAt0iZgw2c%2BTwQY6pgHhPBsH6EJChPkHve7iDtc8NX9hF6RPogaJ%2BxDD7okN8UG3NoHkEiPatXfyA5PbyxqvV1ehaqpzd9X4eniYsUcMH2NSf7MBSA1hWTJ9GTy2aqWu4vYa3d454zBSgDNNJdsAVO9owgl9v7ZO59Ng9D4DeJzuv2eV%2FqXx%2F6q1Dd%2BVooCc7SnkVDTM9SfMLag2%2BDulW6tFQ2q7ILhbf81ORuhIGBYVc996&X-Amz-Signature=3eabd1823c4f716f280f47450ce22f5b7e87891e1a40a11a7d77dfc98da72735&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKQRT76%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFWCtnQ4tVSNHHcwnYBG49V%2FbcYUBT%2F718u%2B2mIAFPFBAiArmJCSQuVlY5jsOGGeGZeXLgdpU05UtuX36Scvkhyetir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMOMGEf6W6DLB5g%2FL0KtwDp2plHz44CoDCoyMZD995DNNpxn%2B%2BSEuqGEoiwxAlUU1EGmuUACtV5SXvFVAZ8JAoHqOyfCxEzq7UHGm%2BhR8YN7S4NROI6Oce3KVdad4dw8ohcdQA9NqO06XLunNFKFjKYHBiEWMrd3%2BO1gF3hvmgwoJB%2Fbik377XO%2BPGTQJ6bO9rQ%2BYLLQlWBpPuZBHDWZo9trLM40onZ6MkfIuqtH0Yu3nAolQS9OC7RDMAjnU0glTe%2FMnZzL%2BuwbospuzjQImD%2F%2F2ZvX03yAkuN5kuQt4zSIYn0AHjnUHT81j3DzQnaNnYqZQ86K2bqi%2BbcBa7R12iIgjZKQ6M2F5VyxwlBadVBOlIxfL5TnM6riAsqMuLehbzBk8jLHKmhOEKuyv19SsBW9jp9a7b8cT4R8ej7t9jN9CmJkJrkJE3MLR8HY1tdo2Hycxigr5sGQarpHypR%2F2mg2cjwwsmdE2DO%2FAPkY9FRmT7aCNgDMgxX9HcwTYsFhOUusNteKdaolOyVkZcX%2BqCJt6DsH4L0juwV%2BCYdIQrKJXcEj%2BIDAZGFl43vBj2Txfa%2FloM%2B%2FFl2TO3Jdo86HgUmxkt8DktqOimXSHkn8mv%2BeDAYCJhHYUN6EwyFC8LZ3m%2BqEAOKMrNFAt0iZgw2c%2BTwQY6pgHhPBsH6EJChPkHve7iDtc8NX9hF6RPogaJ%2BxDD7okN8UG3NoHkEiPatXfyA5PbyxqvV1ehaqpzd9X4eniYsUcMH2NSf7MBSA1hWTJ9GTy2aqWu4vYa3d454zBSgDNNJdsAVO9owgl9v7ZO59Ng9D4DeJzuv2eV%2FqXx%2F6q1Dd%2BVooCc7SnkVDTM9SfMLag2%2BDulW6tFQ2q7ILhbf81ORuhIGBYVc996&X-Amz-Signature=8e3de45ea548e111108fd692767293ba7079f10f895ceca32aaec8cc2e6b4c52&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKQRT76%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFWCtnQ4tVSNHHcwnYBG49V%2FbcYUBT%2F718u%2B2mIAFPFBAiArmJCSQuVlY5jsOGGeGZeXLgdpU05UtuX36Scvkhyetir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMOMGEf6W6DLB5g%2FL0KtwDp2plHz44CoDCoyMZD995DNNpxn%2B%2BSEuqGEoiwxAlUU1EGmuUACtV5SXvFVAZ8JAoHqOyfCxEzq7UHGm%2BhR8YN7S4NROI6Oce3KVdad4dw8ohcdQA9NqO06XLunNFKFjKYHBiEWMrd3%2BO1gF3hvmgwoJB%2Fbik377XO%2BPGTQJ6bO9rQ%2BYLLQlWBpPuZBHDWZo9trLM40onZ6MkfIuqtH0Yu3nAolQS9OC7RDMAjnU0glTe%2FMnZzL%2BuwbospuzjQImD%2F%2F2ZvX03yAkuN5kuQt4zSIYn0AHjnUHT81j3DzQnaNnYqZQ86K2bqi%2BbcBa7R12iIgjZKQ6M2F5VyxwlBadVBOlIxfL5TnM6riAsqMuLehbzBk8jLHKmhOEKuyv19SsBW9jp9a7b8cT4R8ej7t9jN9CmJkJrkJE3MLR8HY1tdo2Hycxigr5sGQarpHypR%2F2mg2cjwwsmdE2DO%2FAPkY9FRmT7aCNgDMgxX9HcwTYsFhOUusNteKdaolOyVkZcX%2BqCJt6DsH4L0juwV%2BCYdIQrKJXcEj%2BIDAZGFl43vBj2Txfa%2FloM%2B%2FFl2TO3Jdo86HgUmxkt8DktqOimXSHkn8mv%2BeDAYCJhHYUN6EwyFC8LZ3m%2BqEAOKMrNFAt0iZgw2c%2BTwQY6pgHhPBsH6EJChPkHve7iDtc8NX9hF6RPogaJ%2BxDD7okN8UG3NoHkEiPatXfyA5PbyxqvV1ehaqpzd9X4eniYsUcMH2NSf7MBSA1hWTJ9GTy2aqWu4vYa3d454zBSgDNNJdsAVO9owgl9v7ZO59Ng9D4DeJzuv2eV%2FqXx%2F6q1Dd%2BVooCc7SnkVDTM9SfMLag2%2BDulW6tFQ2q7ILhbf81ORuhIGBYVc996&X-Amz-Signature=ab1da9f715a8dec39c77b71636e4e49b0e978b82a4f6ba8ad2d4e743ce09c9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKQRT76%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFWCtnQ4tVSNHHcwnYBG49V%2FbcYUBT%2F718u%2B2mIAFPFBAiArmJCSQuVlY5jsOGGeGZeXLgdpU05UtuX36Scvkhyetir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMOMGEf6W6DLB5g%2FL0KtwDp2plHz44CoDCoyMZD995DNNpxn%2B%2BSEuqGEoiwxAlUU1EGmuUACtV5SXvFVAZ8JAoHqOyfCxEzq7UHGm%2BhR8YN7S4NROI6Oce3KVdad4dw8ohcdQA9NqO06XLunNFKFjKYHBiEWMrd3%2BO1gF3hvmgwoJB%2Fbik377XO%2BPGTQJ6bO9rQ%2BYLLQlWBpPuZBHDWZo9trLM40onZ6MkfIuqtH0Yu3nAolQS9OC7RDMAjnU0glTe%2FMnZzL%2BuwbospuzjQImD%2F%2F2ZvX03yAkuN5kuQt4zSIYn0AHjnUHT81j3DzQnaNnYqZQ86K2bqi%2BbcBa7R12iIgjZKQ6M2F5VyxwlBadVBOlIxfL5TnM6riAsqMuLehbzBk8jLHKmhOEKuyv19SsBW9jp9a7b8cT4R8ej7t9jN9CmJkJrkJE3MLR8HY1tdo2Hycxigr5sGQarpHypR%2F2mg2cjwwsmdE2DO%2FAPkY9FRmT7aCNgDMgxX9HcwTYsFhOUusNteKdaolOyVkZcX%2BqCJt6DsH4L0juwV%2BCYdIQrKJXcEj%2BIDAZGFl43vBj2Txfa%2FloM%2B%2FFl2TO3Jdo86HgUmxkt8DktqOimXSHkn8mv%2BeDAYCJhHYUN6EwyFC8LZ3m%2BqEAOKMrNFAt0iZgw2c%2BTwQY6pgHhPBsH6EJChPkHve7iDtc8NX9hF6RPogaJ%2BxDD7okN8UG3NoHkEiPatXfyA5PbyxqvV1ehaqpzd9X4eniYsUcMH2NSf7MBSA1hWTJ9GTy2aqWu4vYa3d454zBSgDNNJdsAVO9owgl9v7ZO59Ng9D4DeJzuv2eV%2FqXx%2F6q1Dd%2BVooCc7SnkVDTM9SfMLag2%2BDulW6tFQ2q7ILhbf81ORuhIGBYVc996&X-Amz-Signature=055039c169478cf72a30c12d47de914f3c9015595157d24f27028a65acf4f95f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVKQRT76%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFWCtnQ4tVSNHHcwnYBG49V%2FbcYUBT%2F718u%2B2mIAFPFBAiArmJCSQuVlY5jsOGGeGZeXLgdpU05UtuX36Scvkhyetir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMOMGEf6W6DLB5g%2FL0KtwDp2plHz44CoDCoyMZD995DNNpxn%2B%2BSEuqGEoiwxAlUU1EGmuUACtV5SXvFVAZ8JAoHqOyfCxEzq7UHGm%2BhR8YN7S4NROI6Oce3KVdad4dw8ohcdQA9NqO06XLunNFKFjKYHBiEWMrd3%2BO1gF3hvmgwoJB%2Fbik377XO%2BPGTQJ6bO9rQ%2BYLLQlWBpPuZBHDWZo9trLM40onZ6MkfIuqtH0Yu3nAolQS9OC7RDMAjnU0glTe%2FMnZzL%2BuwbospuzjQImD%2F%2F2ZvX03yAkuN5kuQt4zSIYn0AHjnUHT81j3DzQnaNnYqZQ86K2bqi%2BbcBa7R12iIgjZKQ6M2F5VyxwlBadVBOlIxfL5TnM6riAsqMuLehbzBk8jLHKmhOEKuyv19SsBW9jp9a7b8cT4R8ej7t9jN9CmJkJrkJE3MLR8HY1tdo2Hycxigr5sGQarpHypR%2F2mg2cjwwsmdE2DO%2FAPkY9FRmT7aCNgDMgxX9HcwTYsFhOUusNteKdaolOyVkZcX%2BqCJt6DsH4L0juwV%2BCYdIQrKJXcEj%2BIDAZGFl43vBj2Txfa%2FloM%2B%2FFl2TO3Jdo86HgUmxkt8DktqOimXSHkn8mv%2BeDAYCJhHYUN6EwyFC8LZ3m%2BqEAOKMrNFAt0iZgw2c%2BTwQY6pgHhPBsH6EJChPkHve7iDtc8NX9hF6RPogaJ%2BxDD7okN8UG3NoHkEiPatXfyA5PbyxqvV1ehaqpzd9X4eniYsUcMH2NSf7MBSA1hWTJ9GTy2aqWu4vYa3d454zBSgDNNJdsAVO9owgl9v7ZO59Ng9D4DeJzuv2eV%2FqXx%2F6q1Dd%2BVooCc7SnkVDTM9SfMLag2%2BDulW6tFQ2q7ILhbf81ORuhIGBYVc996&X-Amz-Signature=d40e772685d004c15cceffdd3052ffd9d2afe4045e36d94c860bc65941def13b&X-Amz-SignedHeaders=host&x-id=GetObject)
