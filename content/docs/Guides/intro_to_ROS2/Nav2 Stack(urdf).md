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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257RIRSF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlJTeWqllVrtuRCTU0YwC2vD84Mh75nQXLsNUv4MmoHAiEAyk2atKjb6qBO2tpNqliC94FCwWDxGG9olho7QHZRgCsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvwirrLPacsQAiHLyrcAzLIK7ZWSugK%2Fzng%2Fo9XyPYlQfGoJ8oeBLvucdN0fKdj8X4tmk9HRA2vco%2FozpxU4%2FO5I5hXvmOkuMSzHUjm2rmtWGDuH9Mz4i%2BJbrrAwuzEQUM2d8r%2BBJ82hc9udUfIO0IRzlkTZMboNsmDLbpMYJb3nNAdrxM59jgco57D1hmRZ3PXhv8Qc57DtIkvISBY7sPKMZ6RS7aeN5bCaLbZDpPke8NW4xuC2bYZLGoau84dpC0heqazEqqh6WgNf1tNBj7n7DC%2B90UApJqAZUIzPHYK%2F8cqQPirdDKGtXbrbtoTAx2QX5Q7HYI1QKjmz7bJc8iSeIOUOeIfqBp3hDogpx27qXbIFroL2Z1IBtOFvT7jbakFoCh1B3l%2BEeZppUjn8oVAPsMJVN4oRdXQFT%2FEPVHkQgCCs6q0lXKTUIT4m73TVo4SnTnJdhYrUxgeETFZu0XLIq9GvldwZsJrKOHwXhetF8VVGwvcy1eY0yVieahQGUMSeoPr9sW346ILaV1bg%2FpdU1ntAqiy8Hg2NxKUj8diG2RN2zGG%2Bh9PX6X89Gp7YZZmTvx6lUR8BWml7B%2FGYHC1pt%2FHnVhQfMbFhBt9H960h1Jf1p5bstXs76iMBrNq5HFaJawuIsTS6MTeMLOmlcIGOqUBtfyA1L2GBq%2FFN6qvLcAkIdKtgtBX%2FOaa6HMA2HwQ7vdKuRqDCs%2BxrLyoVzykHw35rVrf10zYYE4g%2B8aeYAWGcsE4oVA8o%2BvGCVPInI6LxKPDVBRLdvAbnWAW1kGYEvKbmgvvRQ6nneH4OHUGsk6%2FrexW8QCh9xtJPmZAspwPtUhDddRfyckHrNFl1GRDesKLMeb7vWRg4ugrurnuR97aTeFwEphf&X-Amz-Signature=32b9975c6722ba28ab96f9536ee4503dd2b787594d617a696ddd7a5732e93c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257RIRSF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlJTeWqllVrtuRCTU0YwC2vD84Mh75nQXLsNUv4MmoHAiEAyk2atKjb6qBO2tpNqliC94FCwWDxGG9olho7QHZRgCsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvwirrLPacsQAiHLyrcAzLIK7ZWSugK%2Fzng%2Fo9XyPYlQfGoJ8oeBLvucdN0fKdj8X4tmk9HRA2vco%2FozpxU4%2FO5I5hXvmOkuMSzHUjm2rmtWGDuH9Mz4i%2BJbrrAwuzEQUM2d8r%2BBJ82hc9udUfIO0IRzlkTZMboNsmDLbpMYJb3nNAdrxM59jgco57D1hmRZ3PXhv8Qc57DtIkvISBY7sPKMZ6RS7aeN5bCaLbZDpPke8NW4xuC2bYZLGoau84dpC0heqazEqqh6WgNf1tNBj7n7DC%2B90UApJqAZUIzPHYK%2F8cqQPirdDKGtXbrbtoTAx2QX5Q7HYI1QKjmz7bJc8iSeIOUOeIfqBp3hDogpx27qXbIFroL2Z1IBtOFvT7jbakFoCh1B3l%2BEeZppUjn8oVAPsMJVN4oRdXQFT%2FEPVHkQgCCs6q0lXKTUIT4m73TVo4SnTnJdhYrUxgeETFZu0XLIq9GvldwZsJrKOHwXhetF8VVGwvcy1eY0yVieahQGUMSeoPr9sW346ILaV1bg%2FpdU1ntAqiy8Hg2NxKUj8diG2RN2zGG%2Bh9PX6X89Gp7YZZmTvx6lUR8BWml7B%2FGYHC1pt%2FHnVhQfMbFhBt9H960h1Jf1p5bstXs76iMBrNq5HFaJawuIsTS6MTeMLOmlcIGOqUBtfyA1L2GBq%2FFN6qvLcAkIdKtgtBX%2FOaa6HMA2HwQ7vdKuRqDCs%2BxrLyoVzykHw35rVrf10zYYE4g%2B8aeYAWGcsE4oVA8o%2BvGCVPInI6LxKPDVBRLdvAbnWAW1kGYEvKbmgvvRQ6nneH4OHUGsk6%2FrexW8QCh9xtJPmZAspwPtUhDddRfyckHrNFl1GRDesKLMeb7vWRg4ugrurnuR97aTeFwEphf&X-Amz-Signature=4d4a7b703a4052324bcbbd2fd5de755a7f88d3fca8f36dc55eb2db66b14b4fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257RIRSF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlJTeWqllVrtuRCTU0YwC2vD84Mh75nQXLsNUv4MmoHAiEAyk2atKjb6qBO2tpNqliC94FCwWDxGG9olho7QHZRgCsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvwirrLPacsQAiHLyrcAzLIK7ZWSugK%2Fzng%2Fo9XyPYlQfGoJ8oeBLvucdN0fKdj8X4tmk9HRA2vco%2FozpxU4%2FO5I5hXvmOkuMSzHUjm2rmtWGDuH9Mz4i%2BJbrrAwuzEQUM2d8r%2BBJ82hc9udUfIO0IRzlkTZMboNsmDLbpMYJb3nNAdrxM59jgco57D1hmRZ3PXhv8Qc57DtIkvISBY7sPKMZ6RS7aeN5bCaLbZDpPke8NW4xuC2bYZLGoau84dpC0heqazEqqh6WgNf1tNBj7n7DC%2B90UApJqAZUIzPHYK%2F8cqQPirdDKGtXbrbtoTAx2QX5Q7HYI1QKjmz7bJc8iSeIOUOeIfqBp3hDogpx27qXbIFroL2Z1IBtOFvT7jbakFoCh1B3l%2BEeZppUjn8oVAPsMJVN4oRdXQFT%2FEPVHkQgCCs6q0lXKTUIT4m73TVo4SnTnJdhYrUxgeETFZu0XLIq9GvldwZsJrKOHwXhetF8VVGwvcy1eY0yVieahQGUMSeoPr9sW346ILaV1bg%2FpdU1ntAqiy8Hg2NxKUj8diG2RN2zGG%2Bh9PX6X89Gp7YZZmTvx6lUR8BWml7B%2FGYHC1pt%2FHnVhQfMbFhBt9H960h1Jf1p5bstXs76iMBrNq5HFaJawuIsTS6MTeMLOmlcIGOqUBtfyA1L2GBq%2FFN6qvLcAkIdKtgtBX%2FOaa6HMA2HwQ7vdKuRqDCs%2BxrLyoVzykHw35rVrf10zYYE4g%2B8aeYAWGcsE4oVA8o%2BvGCVPInI6LxKPDVBRLdvAbnWAW1kGYEvKbmgvvRQ6nneH4OHUGsk6%2FrexW8QCh9xtJPmZAspwPtUhDddRfyckHrNFl1GRDesKLMeb7vWRg4ugrurnuR97aTeFwEphf&X-Amz-Signature=2e5bdbd5ebcc3e997b9a6401490c3f464e88c93f5b003b3a110fc8b54d80a51a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257RIRSF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlJTeWqllVrtuRCTU0YwC2vD84Mh75nQXLsNUv4MmoHAiEAyk2atKjb6qBO2tpNqliC94FCwWDxGG9olho7QHZRgCsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvwirrLPacsQAiHLyrcAzLIK7ZWSugK%2Fzng%2Fo9XyPYlQfGoJ8oeBLvucdN0fKdj8X4tmk9HRA2vco%2FozpxU4%2FO5I5hXvmOkuMSzHUjm2rmtWGDuH9Mz4i%2BJbrrAwuzEQUM2d8r%2BBJ82hc9udUfIO0IRzlkTZMboNsmDLbpMYJb3nNAdrxM59jgco57D1hmRZ3PXhv8Qc57DtIkvISBY7sPKMZ6RS7aeN5bCaLbZDpPke8NW4xuC2bYZLGoau84dpC0heqazEqqh6WgNf1tNBj7n7DC%2B90UApJqAZUIzPHYK%2F8cqQPirdDKGtXbrbtoTAx2QX5Q7HYI1QKjmz7bJc8iSeIOUOeIfqBp3hDogpx27qXbIFroL2Z1IBtOFvT7jbakFoCh1B3l%2BEeZppUjn8oVAPsMJVN4oRdXQFT%2FEPVHkQgCCs6q0lXKTUIT4m73TVo4SnTnJdhYrUxgeETFZu0XLIq9GvldwZsJrKOHwXhetF8VVGwvcy1eY0yVieahQGUMSeoPr9sW346ILaV1bg%2FpdU1ntAqiy8Hg2NxKUj8diG2RN2zGG%2Bh9PX6X89Gp7YZZmTvx6lUR8BWml7B%2FGYHC1pt%2FHnVhQfMbFhBt9H960h1Jf1p5bstXs76iMBrNq5HFaJawuIsTS6MTeMLOmlcIGOqUBtfyA1L2GBq%2FFN6qvLcAkIdKtgtBX%2FOaa6HMA2HwQ7vdKuRqDCs%2BxrLyoVzykHw35rVrf10zYYE4g%2B8aeYAWGcsE4oVA8o%2BvGCVPInI6LxKPDVBRLdvAbnWAW1kGYEvKbmgvvRQ6nneH4OHUGsk6%2FrexW8QCh9xtJPmZAspwPtUhDddRfyckHrNFl1GRDesKLMeb7vWRg4ugrurnuR97aTeFwEphf&X-Amz-Signature=b455c0ec6332ad4155ac027045988f0cf16ee2858b73f4658bd5f7dcc74b8b71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257RIRSF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlJTeWqllVrtuRCTU0YwC2vD84Mh75nQXLsNUv4MmoHAiEAyk2atKjb6qBO2tpNqliC94FCwWDxGG9olho7QHZRgCsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvwirrLPacsQAiHLyrcAzLIK7ZWSugK%2Fzng%2Fo9XyPYlQfGoJ8oeBLvucdN0fKdj8X4tmk9HRA2vco%2FozpxU4%2FO5I5hXvmOkuMSzHUjm2rmtWGDuH9Mz4i%2BJbrrAwuzEQUM2d8r%2BBJ82hc9udUfIO0IRzlkTZMboNsmDLbpMYJb3nNAdrxM59jgco57D1hmRZ3PXhv8Qc57DtIkvISBY7sPKMZ6RS7aeN5bCaLbZDpPke8NW4xuC2bYZLGoau84dpC0heqazEqqh6WgNf1tNBj7n7DC%2B90UApJqAZUIzPHYK%2F8cqQPirdDKGtXbrbtoTAx2QX5Q7HYI1QKjmz7bJc8iSeIOUOeIfqBp3hDogpx27qXbIFroL2Z1IBtOFvT7jbakFoCh1B3l%2BEeZppUjn8oVAPsMJVN4oRdXQFT%2FEPVHkQgCCs6q0lXKTUIT4m73TVo4SnTnJdhYrUxgeETFZu0XLIq9GvldwZsJrKOHwXhetF8VVGwvcy1eY0yVieahQGUMSeoPr9sW346ILaV1bg%2FpdU1ntAqiy8Hg2NxKUj8diG2RN2zGG%2Bh9PX6X89Gp7YZZmTvx6lUR8BWml7B%2FGYHC1pt%2FHnVhQfMbFhBt9H960h1Jf1p5bstXs76iMBrNq5HFaJawuIsTS6MTeMLOmlcIGOqUBtfyA1L2GBq%2FFN6qvLcAkIdKtgtBX%2FOaa6HMA2HwQ7vdKuRqDCs%2BxrLyoVzykHw35rVrf10zYYE4g%2B8aeYAWGcsE4oVA8o%2BvGCVPInI6LxKPDVBRLdvAbnWAW1kGYEvKbmgvvRQ6nneH4OHUGsk6%2FrexW8QCh9xtJPmZAspwPtUhDddRfyckHrNFl1GRDesKLMeb7vWRg4ugrurnuR97aTeFwEphf&X-Amz-Signature=2b5f5fac7aa7fe8dc9ec5e159242d289f747e01c50668d4dc4f93cbba8982659&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466257RIRSF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlJTeWqllVrtuRCTU0YwC2vD84Mh75nQXLsNUv4MmoHAiEAyk2atKjb6qBO2tpNqliC94FCwWDxGG9olho7QHZRgCsqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvwirrLPacsQAiHLyrcAzLIK7ZWSugK%2Fzng%2Fo9XyPYlQfGoJ8oeBLvucdN0fKdj8X4tmk9HRA2vco%2FozpxU4%2FO5I5hXvmOkuMSzHUjm2rmtWGDuH9Mz4i%2BJbrrAwuzEQUM2d8r%2BBJ82hc9udUfIO0IRzlkTZMboNsmDLbpMYJb3nNAdrxM59jgco57D1hmRZ3PXhv8Qc57DtIkvISBY7sPKMZ6RS7aeN5bCaLbZDpPke8NW4xuC2bYZLGoau84dpC0heqazEqqh6WgNf1tNBj7n7DC%2B90UApJqAZUIzPHYK%2F8cqQPirdDKGtXbrbtoTAx2QX5Q7HYI1QKjmz7bJc8iSeIOUOeIfqBp3hDogpx27qXbIFroL2Z1IBtOFvT7jbakFoCh1B3l%2BEeZppUjn8oVAPsMJVN4oRdXQFT%2FEPVHkQgCCs6q0lXKTUIT4m73TVo4SnTnJdhYrUxgeETFZu0XLIq9GvldwZsJrKOHwXhetF8VVGwvcy1eY0yVieahQGUMSeoPr9sW346ILaV1bg%2FpdU1ntAqiy8Hg2NxKUj8diG2RN2zGG%2Bh9PX6X89Gp7YZZmTvx6lUR8BWml7B%2FGYHC1pt%2FHnVhQfMbFhBt9H960h1Jf1p5bstXs76iMBrNq5HFaJawuIsTS6MTeMLOmlcIGOqUBtfyA1L2GBq%2FFN6qvLcAkIdKtgtBX%2FOaa6HMA2HwQ7vdKuRqDCs%2BxrLyoVzykHw35rVrf10zYYE4g%2B8aeYAWGcsE4oVA8o%2BvGCVPInI6LxKPDVBRLdvAbnWAW1kGYEvKbmgvvRQ6nneH4OHUGsk6%2FrexW8QCh9xtJPmZAspwPtUhDddRfyckHrNFl1GRDesKLMeb7vWRg4ugrurnuR97aTeFwEphf&X-Amz-Signature=cf7deaf8ede01be6fc28cf7be601c6eeb1b4303fbf856399df9d5ab3a255af7d&X-Amz-SignedHeaders=host&x-id=GetObject)
