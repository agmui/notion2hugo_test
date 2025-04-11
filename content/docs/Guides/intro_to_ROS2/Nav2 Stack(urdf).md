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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663GPIYNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIESrU0%2FsPEF7a6dbcxIgPvNZyodCfkkYZ3oQiSapMRLVAiAd93jcXhoXf679bAEtU%2FIxUGrBYfushXk8FDuInqg%2FRyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYLEj4qN99ELJG%2Bq0KtwDumZ1Jhs2A5xwjEXznRkkr3Y4ery9DneFsW6Rm5Cp9dU8a3pjBxFKaneBTuD7feZeq4Xm9zObyQr73Lp7KtKJDobVepbJFlTZx6eJWTm7SaaxOvxocjTvyiw5khHh3T885FRz8IwNPgFHSHppt%2BP7YHSocwaVjK8KTcAT5LjHv9wpDVi2vbM0Za0c4k8HRvDBjJ7B6FQ1LOvdd4sdvKequHj3EK2UnKjusUr32u7Ue4o7rKwnWdqG%2F5uw%2FqUqs0%2BOcU20%2Bj%2BmlYY%2BXaLysK8uND7um05lepeOO9SucQXWR7Oppw74cj7p7gbWkFm2SoIDvG%2FHOmSX45Wgoa4DF358aRvHPeQdWY0huQeAqCKAS3%2Bb8blOQ3RYrLenYPapos80YLYmYxTwRFxOcwa8DVdTmnH8hXnYzHTyIUWilR%2FC7O4ZkF1Hjs8FQ3LTLx0xzefp5bQxsCc2ZQJ5z1twRPbvNA2sJwwVnEEhRkZAs3YNYuHigEJCrecHVal29itjJl6%2B%2FHtTcJnqI8EBBJ3lIBKEcrk3gAwjceiAT3R120kupfsdTejVqDbf0XBhY97%2FFOcQsSC97FUOeoKQ%2BLzy4S8HlDumssqDsGwdgMVhqtgDV2y62lIlGsr6cQCYQUIwxcrjvwY6pgHETa%2BCJyjbsn%2BnGIxVyt2Q63fi17gpxcCH774aHLmraH6lQ1UBzqh2cCudQW9eX5jcamoCHL3pGwqWggkou9LqwPEaWrg6jVQ75i94F%2BY95rh%2BN3Hj5K6Yqpwt%2BRhWEOSZdhn25uL2lGGS1KJOj%2FC4Vhl6TErn91xStCwU5i95e3HFPyAcAu7RiRZMz4ryLcOh4SlrmkRHXdp6mp4SVwGHz%2BFKP4uO&X-Amz-Signature=6510f9fdf49fc6921b535ffb9f1883e685255069ed2ecaaa24a906272a040fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663GPIYNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIESrU0%2FsPEF7a6dbcxIgPvNZyodCfkkYZ3oQiSapMRLVAiAd93jcXhoXf679bAEtU%2FIxUGrBYfushXk8FDuInqg%2FRyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYLEj4qN99ELJG%2Bq0KtwDumZ1Jhs2A5xwjEXznRkkr3Y4ery9DneFsW6Rm5Cp9dU8a3pjBxFKaneBTuD7feZeq4Xm9zObyQr73Lp7KtKJDobVepbJFlTZx6eJWTm7SaaxOvxocjTvyiw5khHh3T885FRz8IwNPgFHSHppt%2BP7YHSocwaVjK8KTcAT5LjHv9wpDVi2vbM0Za0c4k8HRvDBjJ7B6FQ1LOvdd4sdvKequHj3EK2UnKjusUr32u7Ue4o7rKwnWdqG%2F5uw%2FqUqs0%2BOcU20%2Bj%2BmlYY%2BXaLysK8uND7um05lepeOO9SucQXWR7Oppw74cj7p7gbWkFm2SoIDvG%2FHOmSX45Wgoa4DF358aRvHPeQdWY0huQeAqCKAS3%2Bb8blOQ3RYrLenYPapos80YLYmYxTwRFxOcwa8DVdTmnH8hXnYzHTyIUWilR%2FC7O4ZkF1Hjs8FQ3LTLx0xzefp5bQxsCc2ZQJ5z1twRPbvNA2sJwwVnEEhRkZAs3YNYuHigEJCrecHVal29itjJl6%2B%2FHtTcJnqI8EBBJ3lIBKEcrk3gAwjceiAT3R120kupfsdTejVqDbf0XBhY97%2FFOcQsSC97FUOeoKQ%2BLzy4S8HlDumssqDsGwdgMVhqtgDV2y62lIlGsr6cQCYQUIwxcrjvwY6pgHETa%2BCJyjbsn%2BnGIxVyt2Q63fi17gpxcCH774aHLmraH6lQ1UBzqh2cCudQW9eX5jcamoCHL3pGwqWggkou9LqwPEaWrg6jVQ75i94F%2BY95rh%2BN3Hj5K6Yqpwt%2BRhWEOSZdhn25uL2lGGS1KJOj%2FC4Vhl6TErn91xStCwU5i95e3HFPyAcAu7RiRZMz4ryLcOh4SlrmkRHXdp6mp4SVwGHz%2BFKP4uO&X-Amz-Signature=9a7ed6cd482894a608841c3d9a50cf6e637c9a295131d59c4b11ebc087265a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663GPIYNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIESrU0%2FsPEF7a6dbcxIgPvNZyodCfkkYZ3oQiSapMRLVAiAd93jcXhoXf679bAEtU%2FIxUGrBYfushXk8FDuInqg%2FRyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYLEj4qN99ELJG%2Bq0KtwDumZ1Jhs2A5xwjEXznRkkr3Y4ery9DneFsW6Rm5Cp9dU8a3pjBxFKaneBTuD7feZeq4Xm9zObyQr73Lp7KtKJDobVepbJFlTZx6eJWTm7SaaxOvxocjTvyiw5khHh3T885FRz8IwNPgFHSHppt%2BP7YHSocwaVjK8KTcAT5LjHv9wpDVi2vbM0Za0c4k8HRvDBjJ7B6FQ1LOvdd4sdvKequHj3EK2UnKjusUr32u7Ue4o7rKwnWdqG%2F5uw%2FqUqs0%2BOcU20%2Bj%2BmlYY%2BXaLysK8uND7um05lepeOO9SucQXWR7Oppw74cj7p7gbWkFm2SoIDvG%2FHOmSX45Wgoa4DF358aRvHPeQdWY0huQeAqCKAS3%2Bb8blOQ3RYrLenYPapos80YLYmYxTwRFxOcwa8DVdTmnH8hXnYzHTyIUWilR%2FC7O4ZkF1Hjs8FQ3LTLx0xzefp5bQxsCc2ZQJ5z1twRPbvNA2sJwwVnEEhRkZAs3YNYuHigEJCrecHVal29itjJl6%2B%2FHtTcJnqI8EBBJ3lIBKEcrk3gAwjceiAT3R120kupfsdTejVqDbf0XBhY97%2FFOcQsSC97FUOeoKQ%2BLzy4S8HlDumssqDsGwdgMVhqtgDV2y62lIlGsr6cQCYQUIwxcrjvwY6pgHETa%2BCJyjbsn%2BnGIxVyt2Q63fi17gpxcCH774aHLmraH6lQ1UBzqh2cCudQW9eX5jcamoCHL3pGwqWggkou9LqwPEaWrg6jVQ75i94F%2BY95rh%2BN3Hj5K6Yqpwt%2BRhWEOSZdhn25uL2lGGS1KJOj%2FC4Vhl6TErn91xStCwU5i95e3HFPyAcAu7RiRZMz4ryLcOh4SlrmkRHXdp6mp4SVwGHz%2BFKP4uO&X-Amz-Signature=f759a2782b458d82799c2689cb73318fbb436c3dddbbd1702ac12fa20834909b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663GPIYNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIESrU0%2FsPEF7a6dbcxIgPvNZyodCfkkYZ3oQiSapMRLVAiAd93jcXhoXf679bAEtU%2FIxUGrBYfushXk8FDuInqg%2FRyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYLEj4qN99ELJG%2Bq0KtwDumZ1Jhs2A5xwjEXznRkkr3Y4ery9DneFsW6Rm5Cp9dU8a3pjBxFKaneBTuD7feZeq4Xm9zObyQr73Lp7KtKJDobVepbJFlTZx6eJWTm7SaaxOvxocjTvyiw5khHh3T885FRz8IwNPgFHSHppt%2BP7YHSocwaVjK8KTcAT5LjHv9wpDVi2vbM0Za0c4k8HRvDBjJ7B6FQ1LOvdd4sdvKequHj3EK2UnKjusUr32u7Ue4o7rKwnWdqG%2F5uw%2FqUqs0%2BOcU20%2Bj%2BmlYY%2BXaLysK8uND7um05lepeOO9SucQXWR7Oppw74cj7p7gbWkFm2SoIDvG%2FHOmSX45Wgoa4DF358aRvHPeQdWY0huQeAqCKAS3%2Bb8blOQ3RYrLenYPapos80YLYmYxTwRFxOcwa8DVdTmnH8hXnYzHTyIUWilR%2FC7O4ZkF1Hjs8FQ3LTLx0xzefp5bQxsCc2ZQJ5z1twRPbvNA2sJwwVnEEhRkZAs3YNYuHigEJCrecHVal29itjJl6%2B%2FHtTcJnqI8EBBJ3lIBKEcrk3gAwjceiAT3R120kupfsdTejVqDbf0XBhY97%2FFOcQsSC97FUOeoKQ%2BLzy4S8HlDumssqDsGwdgMVhqtgDV2y62lIlGsr6cQCYQUIwxcrjvwY6pgHETa%2BCJyjbsn%2BnGIxVyt2Q63fi17gpxcCH774aHLmraH6lQ1UBzqh2cCudQW9eX5jcamoCHL3pGwqWggkou9LqwPEaWrg6jVQ75i94F%2BY95rh%2BN3Hj5K6Yqpwt%2BRhWEOSZdhn25uL2lGGS1KJOj%2FC4Vhl6TErn91xStCwU5i95e3HFPyAcAu7RiRZMz4ryLcOh4SlrmkRHXdp6mp4SVwGHz%2BFKP4uO&X-Amz-Signature=f81b1232f8dc10c727510940a8c63c88c65416e6ad9007e634f7ba986cdaa8b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663GPIYNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIESrU0%2FsPEF7a6dbcxIgPvNZyodCfkkYZ3oQiSapMRLVAiAd93jcXhoXf679bAEtU%2FIxUGrBYfushXk8FDuInqg%2FRyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYLEj4qN99ELJG%2Bq0KtwDumZ1Jhs2A5xwjEXznRkkr3Y4ery9DneFsW6Rm5Cp9dU8a3pjBxFKaneBTuD7feZeq4Xm9zObyQr73Lp7KtKJDobVepbJFlTZx6eJWTm7SaaxOvxocjTvyiw5khHh3T885FRz8IwNPgFHSHppt%2BP7YHSocwaVjK8KTcAT5LjHv9wpDVi2vbM0Za0c4k8HRvDBjJ7B6FQ1LOvdd4sdvKequHj3EK2UnKjusUr32u7Ue4o7rKwnWdqG%2F5uw%2FqUqs0%2BOcU20%2Bj%2BmlYY%2BXaLysK8uND7um05lepeOO9SucQXWR7Oppw74cj7p7gbWkFm2SoIDvG%2FHOmSX45Wgoa4DF358aRvHPeQdWY0huQeAqCKAS3%2Bb8blOQ3RYrLenYPapos80YLYmYxTwRFxOcwa8DVdTmnH8hXnYzHTyIUWilR%2FC7O4ZkF1Hjs8FQ3LTLx0xzefp5bQxsCc2ZQJ5z1twRPbvNA2sJwwVnEEhRkZAs3YNYuHigEJCrecHVal29itjJl6%2B%2FHtTcJnqI8EBBJ3lIBKEcrk3gAwjceiAT3R120kupfsdTejVqDbf0XBhY97%2FFOcQsSC97FUOeoKQ%2BLzy4S8HlDumssqDsGwdgMVhqtgDV2y62lIlGsr6cQCYQUIwxcrjvwY6pgHETa%2BCJyjbsn%2BnGIxVyt2Q63fi17gpxcCH774aHLmraH6lQ1UBzqh2cCudQW9eX5jcamoCHL3pGwqWggkou9LqwPEaWrg6jVQ75i94F%2BY95rh%2BN3Hj5K6Yqpwt%2BRhWEOSZdhn25uL2lGGS1KJOj%2FC4Vhl6TErn91xStCwU5i95e3HFPyAcAu7RiRZMz4ryLcOh4SlrmkRHXdp6mp4SVwGHz%2BFKP4uO&X-Amz-Signature=902123c789d60d52cf0c37e02d50de1e952a92694d7926d370a5a226b8d04af7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663GPIYNL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIESrU0%2FsPEF7a6dbcxIgPvNZyodCfkkYZ3oQiSapMRLVAiAd93jcXhoXf679bAEtU%2FIxUGrBYfushXk8FDuInqg%2FRyqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYLEj4qN99ELJG%2Bq0KtwDumZ1Jhs2A5xwjEXznRkkr3Y4ery9DneFsW6Rm5Cp9dU8a3pjBxFKaneBTuD7feZeq4Xm9zObyQr73Lp7KtKJDobVepbJFlTZx6eJWTm7SaaxOvxocjTvyiw5khHh3T885FRz8IwNPgFHSHppt%2BP7YHSocwaVjK8KTcAT5LjHv9wpDVi2vbM0Za0c4k8HRvDBjJ7B6FQ1LOvdd4sdvKequHj3EK2UnKjusUr32u7Ue4o7rKwnWdqG%2F5uw%2FqUqs0%2BOcU20%2Bj%2BmlYY%2BXaLysK8uND7um05lepeOO9SucQXWR7Oppw74cj7p7gbWkFm2SoIDvG%2FHOmSX45Wgoa4DF358aRvHPeQdWY0huQeAqCKAS3%2Bb8blOQ3RYrLenYPapos80YLYmYxTwRFxOcwa8DVdTmnH8hXnYzHTyIUWilR%2FC7O4ZkF1Hjs8FQ3LTLx0xzefp5bQxsCc2ZQJ5z1twRPbvNA2sJwwVnEEhRkZAs3YNYuHigEJCrecHVal29itjJl6%2B%2FHtTcJnqI8EBBJ3lIBKEcrk3gAwjceiAT3R120kupfsdTejVqDbf0XBhY97%2FFOcQsSC97FUOeoKQ%2BLzy4S8HlDumssqDsGwdgMVhqtgDV2y62lIlGsr6cQCYQUIwxcrjvwY6pgHETa%2BCJyjbsn%2BnGIxVyt2Q63fi17gpxcCH774aHLmraH6lQ1UBzqh2cCudQW9eX5jcamoCHL3pGwqWggkou9LqwPEaWrg6jVQ75i94F%2BY95rh%2BN3Hj5K6Yqpwt%2BRhWEOSZdhn25uL2lGGS1KJOj%2FC4Vhl6TErn91xStCwU5i95e3HFPyAcAu7RiRZMz4ryLcOh4SlrmkRHXdp6mp4SVwGHz%2BFKP4uO&X-Amz-Signature=6d31e90fcce695ae90b580f414197612d5b58d1c3be56dbe6180cfc7efc6ca98&X-Amz-SignedHeaders=host&x-id=GetObject)
