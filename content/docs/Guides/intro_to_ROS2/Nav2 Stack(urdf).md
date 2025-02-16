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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5S3FND%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFsBXpcNqplEtHlPPnURiKdIktxey91VVGlX68AlDmJQAiB0qyCzcmkqfzbNsdxN1F50xaMDpYePHsn2hzHjNBt1SCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMIm7IHbEtIrscrVaDKtwDkaJC%2FdSFn8hSCfx2JqhuMjY8zPG%2FtIw1bwh38QSvWswIP5wst6N%2BnHB60JtzCbXy0O9xaU5IJ7lR8YWdbTc79igoF3QDLP2RQa7c3TvXiCVZzE%2B4dK%2Ff5VYJKx7M9nlcB6CFRHn3mkWTmwZngAjVSnz1cUYHSWOxGzy91szcutPi4sAvZZVMb0I9dFvLkmuLu78IKo8BR2WERDhc8pTmi3jajHEOqbCmRa24SY%2BaY3GYYt0uag2M1HBk9AQ8rGZZgGzddV%2F4PclcwBCa%2Bf20aIrvAyHYbg1zO%2FoMdPHOxwOaBcIL4NwNGazA1vMcN1GFTLDpgXggXyQjus6qLoZQ8fPk9GdvtDiJD6xjJ1cBEylCTcyqU5Y%2FUgLyB%2F3QL8UeTFyNLwyCs1kBkbYsCnw%2Fd4oqwfGpbC5rmyQhq%2F76rR5xWPLNJjaPQk4BqdXQNLv5IbtWoCTS38kzrbfYABII36nfKJegLB4XaxLY8AtcUqHtXN71n334kOpCkKOV1qT4W%2FNQQ4%2BesB8M2d%2B9Ye3EggGtUMG0De0EuSgyMcT3dYE%2B29rClA%2F5L0UyTsSYS%2BY0yqSFc%2FWAgAj%2FfpZz87DjiPtzkKq60DsGKssZwmQTRbLL97KUnELmO05uUYcwgc7GvQY6pgH8AZwo7h6sHYjzD4SBbJxFsdprnpM%2Fp94fMLer12jP7u%2BJj54moJFw52rpEkS3eyw8fk6oZdOBvcqD2mvcgfXsXmgQIz8%2B%2FXvFdQ5fmyC9OJ0jsA%2F4qc7Uv3wh2u3UdlGYVGCH1WBboI01SvSWzNtzeOfmJ6HHOuSQdGXDYukAFtWfiwBfiG2syp7JSqhAyEbmsAFY71%2B3bH9ziKlcw2u9eT3B7Uu3&X-Amz-Signature=76ba06cc0468b92c35e5b2d04a9c3f9828a8e9184e78be5ebcc82d533739f1e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5S3FND%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFsBXpcNqplEtHlPPnURiKdIktxey91VVGlX68AlDmJQAiB0qyCzcmkqfzbNsdxN1F50xaMDpYePHsn2hzHjNBt1SCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMIm7IHbEtIrscrVaDKtwDkaJC%2FdSFn8hSCfx2JqhuMjY8zPG%2FtIw1bwh38QSvWswIP5wst6N%2BnHB60JtzCbXy0O9xaU5IJ7lR8YWdbTc79igoF3QDLP2RQa7c3TvXiCVZzE%2B4dK%2Ff5VYJKx7M9nlcB6CFRHn3mkWTmwZngAjVSnz1cUYHSWOxGzy91szcutPi4sAvZZVMb0I9dFvLkmuLu78IKo8BR2WERDhc8pTmi3jajHEOqbCmRa24SY%2BaY3GYYt0uag2M1HBk9AQ8rGZZgGzddV%2F4PclcwBCa%2Bf20aIrvAyHYbg1zO%2FoMdPHOxwOaBcIL4NwNGazA1vMcN1GFTLDpgXggXyQjus6qLoZQ8fPk9GdvtDiJD6xjJ1cBEylCTcyqU5Y%2FUgLyB%2F3QL8UeTFyNLwyCs1kBkbYsCnw%2Fd4oqwfGpbC5rmyQhq%2F76rR5xWPLNJjaPQk4BqdXQNLv5IbtWoCTS38kzrbfYABII36nfKJegLB4XaxLY8AtcUqHtXN71n334kOpCkKOV1qT4W%2FNQQ4%2BesB8M2d%2B9Ye3EggGtUMG0De0EuSgyMcT3dYE%2B29rClA%2F5L0UyTsSYS%2BY0yqSFc%2FWAgAj%2FfpZz87DjiPtzkKq60DsGKssZwmQTRbLL97KUnELmO05uUYcwgc7GvQY6pgH8AZwo7h6sHYjzD4SBbJxFsdprnpM%2Fp94fMLer12jP7u%2BJj54moJFw52rpEkS3eyw8fk6oZdOBvcqD2mvcgfXsXmgQIz8%2B%2FXvFdQ5fmyC9OJ0jsA%2F4qc7Uv3wh2u3UdlGYVGCH1WBboI01SvSWzNtzeOfmJ6HHOuSQdGXDYukAFtWfiwBfiG2syp7JSqhAyEbmsAFY71%2B3bH9ziKlcw2u9eT3B7Uu3&X-Amz-Signature=8c8f2b9c4f7b386fc0daec498efb0ed5ec7c58b73751048f3a57b9a703a78f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5S3FND%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFsBXpcNqplEtHlPPnURiKdIktxey91VVGlX68AlDmJQAiB0qyCzcmkqfzbNsdxN1F50xaMDpYePHsn2hzHjNBt1SCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMIm7IHbEtIrscrVaDKtwDkaJC%2FdSFn8hSCfx2JqhuMjY8zPG%2FtIw1bwh38QSvWswIP5wst6N%2BnHB60JtzCbXy0O9xaU5IJ7lR8YWdbTc79igoF3QDLP2RQa7c3TvXiCVZzE%2B4dK%2Ff5VYJKx7M9nlcB6CFRHn3mkWTmwZngAjVSnz1cUYHSWOxGzy91szcutPi4sAvZZVMb0I9dFvLkmuLu78IKo8BR2WERDhc8pTmi3jajHEOqbCmRa24SY%2BaY3GYYt0uag2M1HBk9AQ8rGZZgGzddV%2F4PclcwBCa%2Bf20aIrvAyHYbg1zO%2FoMdPHOxwOaBcIL4NwNGazA1vMcN1GFTLDpgXggXyQjus6qLoZQ8fPk9GdvtDiJD6xjJ1cBEylCTcyqU5Y%2FUgLyB%2F3QL8UeTFyNLwyCs1kBkbYsCnw%2Fd4oqwfGpbC5rmyQhq%2F76rR5xWPLNJjaPQk4BqdXQNLv5IbtWoCTS38kzrbfYABII36nfKJegLB4XaxLY8AtcUqHtXN71n334kOpCkKOV1qT4W%2FNQQ4%2BesB8M2d%2B9Ye3EggGtUMG0De0EuSgyMcT3dYE%2B29rClA%2F5L0UyTsSYS%2BY0yqSFc%2FWAgAj%2FfpZz87DjiPtzkKq60DsGKssZwmQTRbLL97KUnELmO05uUYcwgc7GvQY6pgH8AZwo7h6sHYjzD4SBbJxFsdprnpM%2Fp94fMLer12jP7u%2BJj54moJFw52rpEkS3eyw8fk6oZdOBvcqD2mvcgfXsXmgQIz8%2B%2FXvFdQ5fmyC9OJ0jsA%2F4qc7Uv3wh2u3UdlGYVGCH1WBboI01SvSWzNtzeOfmJ6HHOuSQdGXDYukAFtWfiwBfiG2syp7JSqhAyEbmsAFY71%2B3bH9ziKlcw2u9eT3B7Uu3&X-Amz-Signature=15d9cd95f9079310c2ad271d5379b0e4908691ea900ac70cb44017aad4ea653d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5S3FND%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFsBXpcNqplEtHlPPnURiKdIktxey91VVGlX68AlDmJQAiB0qyCzcmkqfzbNsdxN1F50xaMDpYePHsn2hzHjNBt1SCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMIm7IHbEtIrscrVaDKtwDkaJC%2FdSFn8hSCfx2JqhuMjY8zPG%2FtIw1bwh38QSvWswIP5wst6N%2BnHB60JtzCbXy0O9xaU5IJ7lR8YWdbTc79igoF3QDLP2RQa7c3TvXiCVZzE%2B4dK%2Ff5VYJKx7M9nlcB6CFRHn3mkWTmwZngAjVSnz1cUYHSWOxGzy91szcutPi4sAvZZVMb0I9dFvLkmuLu78IKo8BR2WERDhc8pTmi3jajHEOqbCmRa24SY%2BaY3GYYt0uag2M1HBk9AQ8rGZZgGzddV%2F4PclcwBCa%2Bf20aIrvAyHYbg1zO%2FoMdPHOxwOaBcIL4NwNGazA1vMcN1GFTLDpgXggXyQjus6qLoZQ8fPk9GdvtDiJD6xjJ1cBEylCTcyqU5Y%2FUgLyB%2F3QL8UeTFyNLwyCs1kBkbYsCnw%2Fd4oqwfGpbC5rmyQhq%2F76rR5xWPLNJjaPQk4BqdXQNLv5IbtWoCTS38kzrbfYABII36nfKJegLB4XaxLY8AtcUqHtXN71n334kOpCkKOV1qT4W%2FNQQ4%2BesB8M2d%2B9Ye3EggGtUMG0De0EuSgyMcT3dYE%2B29rClA%2F5L0UyTsSYS%2BY0yqSFc%2FWAgAj%2FfpZz87DjiPtzkKq60DsGKssZwmQTRbLL97KUnELmO05uUYcwgc7GvQY6pgH8AZwo7h6sHYjzD4SBbJxFsdprnpM%2Fp94fMLer12jP7u%2BJj54moJFw52rpEkS3eyw8fk6oZdOBvcqD2mvcgfXsXmgQIz8%2B%2FXvFdQ5fmyC9OJ0jsA%2F4qc7Uv3wh2u3UdlGYVGCH1WBboI01SvSWzNtzeOfmJ6HHOuSQdGXDYukAFtWfiwBfiG2syp7JSqhAyEbmsAFY71%2B3bH9ziKlcw2u9eT3B7Uu3&X-Amz-Signature=c61fbc82a762e38dc70f4fc45c24a17d8e82ff6a7347e9c15e717928b3a911cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5S3FND%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFsBXpcNqplEtHlPPnURiKdIktxey91VVGlX68AlDmJQAiB0qyCzcmkqfzbNsdxN1F50xaMDpYePHsn2hzHjNBt1SCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMIm7IHbEtIrscrVaDKtwDkaJC%2FdSFn8hSCfx2JqhuMjY8zPG%2FtIw1bwh38QSvWswIP5wst6N%2BnHB60JtzCbXy0O9xaU5IJ7lR8YWdbTc79igoF3QDLP2RQa7c3TvXiCVZzE%2B4dK%2Ff5VYJKx7M9nlcB6CFRHn3mkWTmwZngAjVSnz1cUYHSWOxGzy91szcutPi4sAvZZVMb0I9dFvLkmuLu78IKo8BR2WERDhc8pTmi3jajHEOqbCmRa24SY%2BaY3GYYt0uag2M1HBk9AQ8rGZZgGzddV%2F4PclcwBCa%2Bf20aIrvAyHYbg1zO%2FoMdPHOxwOaBcIL4NwNGazA1vMcN1GFTLDpgXggXyQjus6qLoZQ8fPk9GdvtDiJD6xjJ1cBEylCTcyqU5Y%2FUgLyB%2F3QL8UeTFyNLwyCs1kBkbYsCnw%2Fd4oqwfGpbC5rmyQhq%2F76rR5xWPLNJjaPQk4BqdXQNLv5IbtWoCTS38kzrbfYABII36nfKJegLB4XaxLY8AtcUqHtXN71n334kOpCkKOV1qT4W%2FNQQ4%2BesB8M2d%2B9Ye3EggGtUMG0De0EuSgyMcT3dYE%2B29rClA%2F5L0UyTsSYS%2BY0yqSFc%2FWAgAj%2FfpZz87DjiPtzkKq60DsGKssZwmQTRbLL97KUnELmO05uUYcwgc7GvQY6pgH8AZwo7h6sHYjzD4SBbJxFsdprnpM%2Fp94fMLer12jP7u%2BJj54moJFw52rpEkS3eyw8fk6oZdOBvcqD2mvcgfXsXmgQIz8%2B%2FXvFdQ5fmyC9OJ0jsA%2F4qc7Uv3wh2u3UdlGYVGCH1WBboI01SvSWzNtzeOfmJ6HHOuSQdGXDYukAFtWfiwBfiG2syp7JSqhAyEbmsAFY71%2B3bH9ziKlcw2u9eT3B7Uu3&X-Amz-Signature=5e30c3427c44c683412f23ac38374de1e4351ae0191d980670496ecf8e277350&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF5S3FND%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFsBXpcNqplEtHlPPnURiKdIktxey91VVGlX68AlDmJQAiB0qyCzcmkqfzbNsdxN1F50xaMDpYePHsn2hzHjNBt1SCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMIm7IHbEtIrscrVaDKtwDkaJC%2FdSFn8hSCfx2JqhuMjY8zPG%2FtIw1bwh38QSvWswIP5wst6N%2BnHB60JtzCbXy0O9xaU5IJ7lR8YWdbTc79igoF3QDLP2RQa7c3TvXiCVZzE%2B4dK%2Ff5VYJKx7M9nlcB6CFRHn3mkWTmwZngAjVSnz1cUYHSWOxGzy91szcutPi4sAvZZVMb0I9dFvLkmuLu78IKo8BR2WERDhc8pTmi3jajHEOqbCmRa24SY%2BaY3GYYt0uag2M1HBk9AQ8rGZZgGzddV%2F4PclcwBCa%2Bf20aIrvAyHYbg1zO%2FoMdPHOxwOaBcIL4NwNGazA1vMcN1GFTLDpgXggXyQjus6qLoZQ8fPk9GdvtDiJD6xjJ1cBEylCTcyqU5Y%2FUgLyB%2F3QL8UeTFyNLwyCs1kBkbYsCnw%2Fd4oqwfGpbC5rmyQhq%2F76rR5xWPLNJjaPQk4BqdXQNLv5IbtWoCTS38kzrbfYABII36nfKJegLB4XaxLY8AtcUqHtXN71n334kOpCkKOV1qT4W%2FNQQ4%2BesB8M2d%2B9Ye3EggGtUMG0De0EuSgyMcT3dYE%2B29rClA%2F5L0UyTsSYS%2BY0yqSFc%2FWAgAj%2FfpZz87DjiPtzkKq60DsGKssZwmQTRbLL97KUnELmO05uUYcwgc7GvQY6pgH8AZwo7h6sHYjzD4SBbJxFsdprnpM%2Fp94fMLer12jP7u%2BJj54moJFw52rpEkS3eyw8fk6oZdOBvcqD2mvcgfXsXmgQIz8%2B%2FXvFdQ5fmyC9OJ0jsA%2F4qc7Uv3wh2u3UdlGYVGCH1WBboI01SvSWzNtzeOfmJ6HHOuSQdGXDYukAFtWfiwBfiG2syp7JSqhAyEbmsAFY71%2B3bH9ziKlcw2u9eT3B7Uu3&X-Amz-Signature=5eebd3d9bc4036e3d2199325f00afc68002fb623959cdfcc8d3d0ed83f598135&X-Amz-SignedHeaders=host&x-id=GetObject)
