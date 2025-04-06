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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTS76EWJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfuWc7ot1qsnIUMwcNC%2FZNx4hv17LVSbLIHDSLgfdi%2BwIhAOdLU8VLBg1lvBavA3fMk%2FLF78O%2BQAb7nVwPgwElRgoUKv8DCEMQABoMNjM3NDIzMTgzODA1IgxDIk7mXHkSlZq9p9Aq3AM%2Bap6sgFlXRhMVqKTvOn2h13xQwBFicprNGnwd%2BgKuIBBwU%2FBIaHDRnzjpFhLfG2ZG8CnLbbQ6o3hBrS9sNpLaJo%2FFReTCmJ7BV3JUTa1eM7HTCuBs9RXYmDVD1sJNYyF4TzlRPKuWQlxeDzOq6IHZh0aAZM%2BFf5zWlgmADnjUezB5RSi5pEmluF14ZApPlzuVxoDhRqrvGS9OcIwHKLp3jQyAl8aHqD78%2FlO%2B2uhtqeB1mDrDzy0wmjj8Hd6qCSuzeX73jYJ%2Bk74%2FiYNjWum3RiOulQp7dcYfmzkjrbxNBcNdlEhuw%2FXRXGYOhopueL3Ng%2FwynaowbWZ%2Fxwd6a5G5yW4utUAcUOvBKYaKNQMxv5knTUYV1%2BAKp2LbmxjcRJjqXdJ3XAcTFSKgC6%2FVGSU6icAJL7mOIss2pthZR7RGsFQevg3osxq74nhgVeBhwEz%2FBRrnSeWzlDYEkHuY0PJA9iJHa%2BJIwUdIN2FWR98Rr03pV4Q7AuMxr%2B8bxd7uz8Yfr3gBJNWJNTIDD6mhqOeCUynurUQtPE%2FOha3g4Idf6Fi9W9vE5bWg%2FLJzhhQZ7ik7tyTWJ3Kxj8Hf05QKdQw5EonWTXorDLp%2BHqxdKkEvYiv%2BVZG7CyBzJjoDhDCWpsm%2FBjqkAbNVx4Ir9KKrJrhPaIkUS640yO%2F2byka7c0YKqxi6R9mg8oXHZFQzswnuD78Xb42KbaKEK3f4wWfPwIyfY2aavdjE6VdlA0oewABZkrCVZe%2FY0SZsXA1JjGd4zUqs7E8ImzmGXl4Kuxl3jDvCldK7QOUb%2FQS%2FQ2y5z0XwOqBc%2B%2F%2FayamwS43xRVOdWksowNcwSQ2rtVfJ6KB%2BtYftz40kP4G%2FD3v&X-Amz-Signature=42a2254c164b16c20386615541d84d77a06acc5a4ce1c32a7de37497f360ff5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTS76EWJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfuWc7ot1qsnIUMwcNC%2FZNx4hv17LVSbLIHDSLgfdi%2BwIhAOdLU8VLBg1lvBavA3fMk%2FLF78O%2BQAb7nVwPgwElRgoUKv8DCEMQABoMNjM3NDIzMTgzODA1IgxDIk7mXHkSlZq9p9Aq3AM%2Bap6sgFlXRhMVqKTvOn2h13xQwBFicprNGnwd%2BgKuIBBwU%2FBIaHDRnzjpFhLfG2ZG8CnLbbQ6o3hBrS9sNpLaJo%2FFReTCmJ7BV3JUTa1eM7HTCuBs9RXYmDVD1sJNYyF4TzlRPKuWQlxeDzOq6IHZh0aAZM%2BFf5zWlgmADnjUezB5RSi5pEmluF14ZApPlzuVxoDhRqrvGS9OcIwHKLp3jQyAl8aHqD78%2FlO%2B2uhtqeB1mDrDzy0wmjj8Hd6qCSuzeX73jYJ%2Bk74%2FiYNjWum3RiOulQp7dcYfmzkjrbxNBcNdlEhuw%2FXRXGYOhopueL3Ng%2FwynaowbWZ%2Fxwd6a5G5yW4utUAcUOvBKYaKNQMxv5knTUYV1%2BAKp2LbmxjcRJjqXdJ3XAcTFSKgC6%2FVGSU6icAJL7mOIss2pthZR7RGsFQevg3osxq74nhgVeBhwEz%2FBRrnSeWzlDYEkHuY0PJA9iJHa%2BJIwUdIN2FWR98Rr03pV4Q7AuMxr%2B8bxd7uz8Yfr3gBJNWJNTIDD6mhqOeCUynurUQtPE%2FOha3g4Idf6Fi9W9vE5bWg%2FLJzhhQZ7ik7tyTWJ3Kxj8Hf05QKdQw5EonWTXorDLp%2BHqxdKkEvYiv%2BVZG7CyBzJjoDhDCWpsm%2FBjqkAbNVx4Ir9KKrJrhPaIkUS640yO%2F2byka7c0YKqxi6R9mg8oXHZFQzswnuD78Xb42KbaKEK3f4wWfPwIyfY2aavdjE6VdlA0oewABZkrCVZe%2FY0SZsXA1JjGd4zUqs7E8ImzmGXl4Kuxl3jDvCldK7QOUb%2FQS%2FQ2y5z0XwOqBc%2B%2F%2FayamwS43xRVOdWksowNcwSQ2rtVfJ6KB%2BtYftz40kP4G%2FD3v&X-Amz-Signature=e1341149ee9d619df374410d3ce6fdd32a99b0d628aa2819221303a408379252&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTS76EWJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfuWc7ot1qsnIUMwcNC%2FZNx4hv17LVSbLIHDSLgfdi%2BwIhAOdLU8VLBg1lvBavA3fMk%2FLF78O%2BQAb7nVwPgwElRgoUKv8DCEMQABoMNjM3NDIzMTgzODA1IgxDIk7mXHkSlZq9p9Aq3AM%2Bap6sgFlXRhMVqKTvOn2h13xQwBFicprNGnwd%2BgKuIBBwU%2FBIaHDRnzjpFhLfG2ZG8CnLbbQ6o3hBrS9sNpLaJo%2FFReTCmJ7BV3JUTa1eM7HTCuBs9RXYmDVD1sJNYyF4TzlRPKuWQlxeDzOq6IHZh0aAZM%2BFf5zWlgmADnjUezB5RSi5pEmluF14ZApPlzuVxoDhRqrvGS9OcIwHKLp3jQyAl8aHqD78%2FlO%2B2uhtqeB1mDrDzy0wmjj8Hd6qCSuzeX73jYJ%2Bk74%2FiYNjWum3RiOulQp7dcYfmzkjrbxNBcNdlEhuw%2FXRXGYOhopueL3Ng%2FwynaowbWZ%2Fxwd6a5G5yW4utUAcUOvBKYaKNQMxv5knTUYV1%2BAKp2LbmxjcRJjqXdJ3XAcTFSKgC6%2FVGSU6icAJL7mOIss2pthZR7RGsFQevg3osxq74nhgVeBhwEz%2FBRrnSeWzlDYEkHuY0PJA9iJHa%2BJIwUdIN2FWR98Rr03pV4Q7AuMxr%2B8bxd7uz8Yfr3gBJNWJNTIDD6mhqOeCUynurUQtPE%2FOha3g4Idf6Fi9W9vE5bWg%2FLJzhhQZ7ik7tyTWJ3Kxj8Hf05QKdQw5EonWTXorDLp%2BHqxdKkEvYiv%2BVZG7CyBzJjoDhDCWpsm%2FBjqkAbNVx4Ir9KKrJrhPaIkUS640yO%2F2byka7c0YKqxi6R9mg8oXHZFQzswnuD78Xb42KbaKEK3f4wWfPwIyfY2aavdjE6VdlA0oewABZkrCVZe%2FY0SZsXA1JjGd4zUqs7E8ImzmGXl4Kuxl3jDvCldK7QOUb%2FQS%2FQ2y5z0XwOqBc%2B%2F%2FayamwS43xRVOdWksowNcwSQ2rtVfJ6KB%2BtYftz40kP4G%2FD3v&X-Amz-Signature=d779310074f3b3844052bd8f7e830b39dcdc8de2e1249e255d6f630cc589c07f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTS76EWJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfuWc7ot1qsnIUMwcNC%2FZNx4hv17LVSbLIHDSLgfdi%2BwIhAOdLU8VLBg1lvBavA3fMk%2FLF78O%2BQAb7nVwPgwElRgoUKv8DCEMQABoMNjM3NDIzMTgzODA1IgxDIk7mXHkSlZq9p9Aq3AM%2Bap6sgFlXRhMVqKTvOn2h13xQwBFicprNGnwd%2BgKuIBBwU%2FBIaHDRnzjpFhLfG2ZG8CnLbbQ6o3hBrS9sNpLaJo%2FFReTCmJ7BV3JUTa1eM7HTCuBs9RXYmDVD1sJNYyF4TzlRPKuWQlxeDzOq6IHZh0aAZM%2BFf5zWlgmADnjUezB5RSi5pEmluF14ZApPlzuVxoDhRqrvGS9OcIwHKLp3jQyAl8aHqD78%2FlO%2B2uhtqeB1mDrDzy0wmjj8Hd6qCSuzeX73jYJ%2Bk74%2FiYNjWum3RiOulQp7dcYfmzkjrbxNBcNdlEhuw%2FXRXGYOhopueL3Ng%2FwynaowbWZ%2Fxwd6a5G5yW4utUAcUOvBKYaKNQMxv5knTUYV1%2BAKp2LbmxjcRJjqXdJ3XAcTFSKgC6%2FVGSU6icAJL7mOIss2pthZR7RGsFQevg3osxq74nhgVeBhwEz%2FBRrnSeWzlDYEkHuY0PJA9iJHa%2BJIwUdIN2FWR98Rr03pV4Q7AuMxr%2B8bxd7uz8Yfr3gBJNWJNTIDD6mhqOeCUynurUQtPE%2FOha3g4Idf6Fi9W9vE5bWg%2FLJzhhQZ7ik7tyTWJ3Kxj8Hf05QKdQw5EonWTXorDLp%2BHqxdKkEvYiv%2BVZG7CyBzJjoDhDCWpsm%2FBjqkAbNVx4Ir9KKrJrhPaIkUS640yO%2F2byka7c0YKqxi6R9mg8oXHZFQzswnuD78Xb42KbaKEK3f4wWfPwIyfY2aavdjE6VdlA0oewABZkrCVZe%2FY0SZsXA1JjGd4zUqs7E8ImzmGXl4Kuxl3jDvCldK7QOUb%2FQS%2FQ2y5z0XwOqBc%2B%2F%2FayamwS43xRVOdWksowNcwSQ2rtVfJ6KB%2BtYftz40kP4G%2FD3v&X-Amz-Signature=884f4aa821912e633c7182609e6a9fc817f46860a93d3536a3adeb44e90c50c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTS76EWJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfuWc7ot1qsnIUMwcNC%2FZNx4hv17LVSbLIHDSLgfdi%2BwIhAOdLU8VLBg1lvBavA3fMk%2FLF78O%2BQAb7nVwPgwElRgoUKv8DCEMQABoMNjM3NDIzMTgzODA1IgxDIk7mXHkSlZq9p9Aq3AM%2Bap6sgFlXRhMVqKTvOn2h13xQwBFicprNGnwd%2BgKuIBBwU%2FBIaHDRnzjpFhLfG2ZG8CnLbbQ6o3hBrS9sNpLaJo%2FFReTCmJ7BV3JUTa1eM7HTCuBs9RXYmDVD1sJNYyF4TzlRPKuWQlxeDzOq6IHZh0aAZM%2BFf5zWlgmADnjUezB5RSi5pEmluF14ZApPlzuVxoDhRqrvGS9OcIwHKLp3jQyAl8aHqD78%2FlO%2B2uhtqeB1mDrDzy0wmjj8Hd6qCSuzeX73jYJ%2Bk74%2FiYNjWum3RiOulQp7dcYfmzkjrbxNBcNdlEhuw%2FXRXGYOhopueL3Ng%2FwynaowbWZ%2Fxwd6a5G5yW4utUAcUOvBKYaKNQMxv5knTUYV1%2BAKp2LbmxjcRJjqXdJ3XAcTFSKgC6%2FVGSU6icAJL7mOIss2pthZR7RGsFQevg3osxq74nhgVeBhwEz%2FBRrnSeWzlDYEkHuY0PJA9iJHa%2BJIwUdIN2FWR98Rr03pV4Q7AuMxr%2B8bxd7uz8Yfr3gBJNWJNTIDD6mhqOeCUynurUQtPE%2FOha3g4Idf6Fi9W9vE5bWg%2FLJzhhQZ7ik7tyTWJ3Kxj8Hf05QKdQw5EonWTXorDLp%2BHqxdKkEvYiv%2BVZG7CyBzJjoDhDCWpsm%2FBjqkAbNVx4Ir9KKrJrhPaIkUS640yO%2F2byka7c0YKqxi6R9mg8oXHZFQzswnuD78Xb42KbaKEK3f4wWfPwIyfY2aavdjE6VdlA0oewABZkrCVZe%2FY0SZsXA1JjGd4zUqs7E8ImzmGXl4Kuxl3jDvCldK7QOUb%2FQS%2FQ2y5z0XwOqBc%2B%2F%2FayamwS43xRVOdWksowNcwSQ2rtVfJ6KB%2BtYftz40kP4G%2FD3v&X-Amz-Signature=88ab994326a1e4756be3ebd2f31436e9cf4bf18834fe2eb87312538d0e1371d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTS76EWJ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfuWc7ot1qsnIUMwcNC%2FZNx4hv17LVSbLIHDSLgfdi%2BwIhAOdLU8VLBg1lvBavA3fMk%2FLF78O%2BQAb7nVwPgwElRgoUKv8DCEMQABoMNjM3NDIzMTgzODA1IgxDIk7mXHkSlZq9p9Aq3AM%2Bap6sgFlXRhMVqKTvOn2h13xQwBFicprNGnwd%2BgKuIBBwU%2FBIaHDRnzjpFhLfG2ZG8CnLbbQ6o3hBrS9sNpLaJo%2FFReTCmJ7BV3JUTa1eM7HTCuBs9RXYmDVD1sJNYyF4TzlRPKuWQlxeDzOq6IHZh0aAZM%2BFf5zWlgmADnjUezB5RSi5pEmluF14ZApPlzuVxoDhRqrvGS9OcIwHKLp3jQyAl8aHqD78%2FlO%2B2uhtqeB1mDrDzy0wmjj8Hd6qCSuzeX73jYJ%2Bk74%2FiYNjWum3RiOulQp7dcYfmzkjrbxNBcNdlEhuw%2FXRXGYOhopueL3Ng%2FwynaowbWZ%2Fxwd6a5G5yW4utUAcUOvBKYaKNQMxv5knTUYV1%2BAKp2LbmxjcRJjqXdJ3XAcTFSKgC6%2FVGSU6icAJL7mOIss2pthZR7RGsFQevg3osxq74nhgVeBhwEz%2FBRrnSeWzlDYEkHuY0PJA9iJHa%2BJIwUdIN2FWR98Rr03pV4Q7AuMxr%2B8bxd7uz8Yfr3gBJNWJNTIDD6mhqOeCUynurUQtPE%2FOha3g4Idf6Fi9W9vE5bWg%2FLJzhhQZ7ik7tyTWJ3Kxj8Hf05QKdQw5EonWTXorDLp%2BHqxdKkEvYiv%2BVZG7CyBzJjoDhDCWpsm%2FBjqkAbNVx4Ir9KKrJrhPaIkUS640yO%2F2byka7c0YKqxi6R9mg8oXHZFQzswnuD78Xb42KbaKEK3f4wWfPwIyfY2aavdjE6VdlA0oewABZkrCVZe%2FY0SZsXA1JjGd4zUqs7E8ImzmGXl4Kuxl3jDvCldK7QOUb%2FQS%2FQ2y5z0XwOqBc%2B%2F%2FayamwS43xRVOdWksowNcwSQ2rtVfJ6KB%2BtYftz40kP4G%2FD3v&X-Amz-Signature=aa39531b1c60ee04bc9567d0ae441f3b2000f12289cdf3a16d95fe579678602c&X-Amz-SignedHeaders=host&x-id=GetObject)
