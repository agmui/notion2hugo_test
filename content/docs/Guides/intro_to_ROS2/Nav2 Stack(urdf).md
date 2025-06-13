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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYY2Q5S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDD%2FAV6Y4P0Kdw%2B5c2v4mP3O0SBTYMCS1l6OHG0Tx9CfAiBntwVMiYQOjomiet%2BRCJ77ab9n9EtdTQTW0jF4MIDGcyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpLqsl4fLtJRf5MkzKtwDzS6XYdm%2BFuZqR1iNRlTgU63%2Bho5Ra7sVXdTpZU8VFZSckouvYI%2FJHkUqgz%2B7cLHmfwA3h7%2FYWbBu4tLnIDJZB3lkf6qIPueTJVAnWBx7XH3qo6FVCDgJwFGQ7wdT4TOYAJ66EqBBxSR7TwwtEy4T3najzsCmG1ooiEHR7jzzWk0xrJExrqCc0wKSemW6bgGsZJBOo60TX5begHtc0cHocQk91jx%2FAdxYH39veA7stM3szSyB5uDfqgcotD0SSXD%2BRdccJOj5hAc2uL1DM5isAnY44YNV5sDEmOpr7jGzbPlpUtQitnMrJtC2ONLV2JU9B28oZlgo4jd3sk%2FhPqM%2FRsvZsS1OmADEkkXucs9%2Fc%2BwRzzAIhvgJRijNx6zHOcK1qudhj%2FtHA7ljOuw0%2B8%2BoHCZcsZfs7k%2BDSc7LSdZIHC%2FfO7kbvg5RljbbYGh6oaUHnUtG8MtkhehekO9tb6mWKjk%2Bb7R%2FwDtgvqSDlEKneeYmDRShJbI2CY6eQh51ICH5K%2FIjZqa4gyeEAndYBUm4KQxCaKZ0J8XyArSsYXf1Ikt1jhqRhWdxNg5R5p0KPZ95ZTi4wmcOegttdyELKWkWqT4Da2Q5QHk8kE%2FP1AZxkpRiVkBwlKmYy3fOk6QwwpKywgY6pgH%2F5%2Foa1hqJxI%2Bwyi6h%2Ba%2BnrTJINS%2FwPXvGAHiiKwzi24G6RILyC2hJjYFSlJ4949O9pHp5KhIxX7UbnlN1xmui93Oc0haeTIQ7uJlyWBH5o00INY%2F2RXf4ElD%2BEJH2%2BCAbKMb1daBXr2eZR47rMGy%2B7lZ%2Bzp%2BmNm5x%2FeNaa5xsZiPILQ3PuKPL7ousdob%2FU2dYKqOcQJXVoyteyZZ7%2Bd47%2BimiG3at&X-Amz-Signature=b0c165afe923363c4c63fe8ae610cfaa6dce4d7455204a533dbeda443680517c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYY2Q5S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDD%2FAV6Y4P0Kdw%2B5c2v4mP3O0SBTYMCS1l6OHG0Tx9CfAiBntwVMiYQOjomiet%2BRCJ77ab9n9EtdTQTW0jF4MIDGcyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpLqsl4fLtJRf5MkzKtwDzS6XYdm%2BFuZqR1iNRlTgU63%2Bho5Ra7sVXdTpZU8VFZSckouvYI%2FJHkUqgz%2B7cLHmfwA3h7%2FYWbBu4tLnIDJZB3lkf6qIPueTJVAnWBx7XH3qo6FVCDgJwFGQ7wdT4TOYAJ66EqBBxSR7TwwtEy4T3najzsCmG1ooiEHR7jzzWk0xrJExrqCc0wKSemW6bgGsZJBOo60TX5begHtc0cHocQk91jx%2FAdxYH39veA7stM3szSyB5uDfqgcotD0SSXD%2BRdccJOj5hAc2uL1DM5isAnY44YNV5sDEmOpr7jGzbPlpUtQitnMrJtC2ONLV2JU9B28oZlgo4jd3sk%2FhPqM%2FRsvZsS1OmADEkkXucs9%2Fc%2BwRzzAIhvgJRijNx6zHOcK1qudhj%2FtHA7ljOuw0%2B8%2BoHCZcsZfs7k%2BDSc7LSdZIHC%2FfO7kbvg5RljbbYGh6oaUHnUtG8MtkhehekO9tb6mWKjk%2Bb7R%2FwDtgvqSDlEKneeYmDRShJbI2CY6eQh51ICH5K%2FIjZqa4gyeEAndYBUm4KQxCaKZ0J8XyArSsYXf1Ikt1jhqRhWdxNg5R5p0KPZ95ZTi4wmcOegttdyELKWkWqT4Da2Q5QHk8kE%2FP1AZxkpRiVkBwlKmYy3fOk6QwwpKywgY6pgH%2F5%2Foa1hqJxI%2Bwyi6h%2Ba%2BnrTJINS%2FwPXvGAHiiKwzi24G6RILyC2hJjYFSlJ4949O9pHp5KhIxX7UbnlN1xmui93Oc0haeTIQ7uJlyWBH5o00INY%2F2RXf4ElD%2BEJH2%2BCAbKMb1daBXr2eZR47rMGy%2B7lZ%2Bzp%2BmNm5x%2FeNaa5xsZiPILQ3PuKPL7ousdob%2FU2dYKqOcQJXVoyteyZZ7%2Bd47%2BimiG3at&X-Amz-Signature=6b8879a00f2fb5d77aedad4602a9710bcd150d22087a083a740daae124055af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYY2Q5S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDD%2FAV6Y4P0Kdw%2B5c2v4mP3O0SBTYMCS1l6OHG0Tx9CfAiBntwVMiYQOjomiet%2BRCJ77ab9n9EtdTQTW0jF4MIDGcyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpLqsl4fLtJRf5MkzKtwDzS6XYdm%2BFuZqR1iNRlTgU63%2Bho5Ra7sVXdTpZU8VFZSckouvYI%2FJHkUqgz%2B7cLHmfwA3h7%2FYWbBu4tLnIDJZB3lkf6qIPueTJVAnWBx7XH3qo6FVCDgJwFGQ7wdT4TOYAJ66EqBBxSR7TwwtEy4T3najzsCmG1ooiEHR7jzzWk0xrJExrqCc0wKSemW6bgGsZJBOo60TX5begHtc0cHocQk91jx%2FAdxYH39veA7stM3szSyB5uDfqgcotD0SSXD%2BRdccJOj5hAc2uL1DM5isAnY44YNV5sDEmOpr7jGzbPlpUtQitnMrJtC2ONLV2JU9B28oZlgo4jd3sk%2FhPqM%2FRsvZsS1OmADEkkXucs9%2Fc%2BwRzzAIhvgJRijNx6zHOcK1qudhj%2FtHA7ljOuw0%2B8%2BoHCZcsZfs7k%2BDSc7LSdZIHC%2FfO7kbvg5RljbbYGh6oaUHnUtG8MtkhehekO9tb6mWKjk%2Bb7R%2FwDtgvqSDlEKneeYmDRShJbI2CY6eQh51ICH5K%2FIjZqa4gyeEAndYBUm4KQxCaKZ0J8XyArSsYXf1Ikt1jhqRhWdxNg5R5p0KPZ95ZTi4wmcOegttdyELKWkWqT4Da2Q5QHk8kE%2FP1AZxkpRiVkBwlKmYy3fOk6QwwpKywgY6pgH%2F5%2Foa1hqJxI%2Bwyi6h%2Ba%2BnrTJINS%2FwPXvGAHiiKwzi24G6RILyC2hJjYFSlJ4949O9pHp5KhIxX7UbnlN1xmui93Oc0haeTIQ7uJlyWBH5o00INY%2F2RXf4ElD%2BEJH2%2BCAbKMb1daBXr2eZR47rMGy%2B7lZ%2Bzp%2BmNm5x%2FeNaa5xsZiPILQ3PuKPL7ousdob%2FU2dYKqOcQJXVoyteyZZ7%2Bd47%2BimiG3at&X-Amz-Signature=c9c0a7a5abd420c380b9e67405f5c999d1aa27b2de9100b210929accf22a9e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYY2Q5S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDD%2FAV6Y4P0Kdw%2B5c2v4mP3O0SBTYMCS1l6OHG0Tx9CfAiBntwVMiYQOjomiet%2BRCJ77ab9n9EtdTQTW0jF4MIDGcyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpLqsl4fLtJRf5MkzKtwDzS6XYdm%2BFuZqR1iNRlTgU63%2Bho5Ra7sVXdTpZU8VFZSckouvYI%2FJHkUqgz%2B7cLHmfwA3h7%2FYWbBu4tLnIDJZB3lkf6qIPueTJVAnWBx7XH3qo6FVCDgJwFGQ7wdT4TOYAJ66EqBBxSR7TwwtEy4T3najzsCmG1ooiEHR7jzzWk0xrJExrqCc0wKSemW6bgGsZJBOo60TX5begHtc0cHocQk91jx%2FAdxYH39veA7stM3szSyB5uDfqgcotD0SSXD%2BRdccJOj5hAc2uL1DM5isAnY44YNV5sDEmOpr7jGzbPlpUtQitnMrJtC2ONLV2JU9B28oZlgo4jd3sk%2FhPqM%2FRsvZsS1OmADEkkXucs9%2Fc%2BwRzzAIhvgJRijNx6zHOcK1qudhj%2FtHA7ljOuw0%2B8%2BoHCZcsZfs7k%2BDSc7LSdZIHC%2FfO7kbvg5RljbbYGh6oaUHnUtG8MtkhehekO9tb6mWKjk%2Bb7R%2FwDtgvqSDlEKneeYmDRShJbI2CY6eQh51ICH5K%2FIjZqa4gyeEAndYBUm4KQxCaKZ0J8XyArSsYXf1Ikt1jhqRhWdxNg5R5p0KPZ95ZTi4wmcOegttdyELKWkWqT4Da2Q5QHk8kE%2FP1AZxkpRiVkBwlKmYy3fOk6QwwpKywgY6pgH%2F5%2Foa1hqJxI%2Bwyi6h%2Ba%2BnrTJINS%2FwPXvGAHiiKwzi24G6RILyC2hJjYFSlJ4949O9pHp5KhIxX7UbnlN1xmui93Oc0haeTIQ7uJlyWBH5o00INY%2F2RXf4ElD%2BEJH2%2BCAbKMb1daBXr2eZR47rMGy%2B7lZ%2Bzp%2BmNm5x%2FeNaa5xsZiPILQ3PuKPL7ousdob%2FU2dYKqOcQJXVoyteyZZ7%2Bd47%2BimiG3at&X-Amz-Signature=9ee1f46dd3b86cc45607af8b20953d42fc9af890c51c335ca0d40e1276548a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYY2Q5S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDD%2FAV6Y4P0Kdw%2B5c2v4mP3O0SBTYMCS1l6OHG0Tx9CfAiBntwVMiYQOjomiet%2BRCJ77ab9n9EtdTQTW0jF4MIDGcyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpLqsl4fLtJRf5MkzKtwDzS6XYdm%2BFuZqR1iNRlTgU63%2Bho5Ra7sVXdTpZU8VFZSckouvYI%2FJHkUqgz%2B7cLHmfwA3h7%2FYWbBu4tLnIDJZB3lkf6qIPueTJVAnWBx7XH3qo6FVCDgJwFGQ7wdT4TOYAJ66EqBBxSR7TwwtEy4T3najzsCmG1ooiEHR7jzzWk0xrJExrqCc0wKSemW6bgGsZJBOo60TX5begHtc0cHocQk91jx%2FAdxYH39veA7stM3szSyB5uDfqgcotD0SSXD%2BRdccJOj5hAc2uL1DM5isAnY44YNV5sDEmOpr7jGzbPlpUtQitnMrJtC2ONLV2JU9B28oZlgo4jd3sk%2FhPqM%2FRsvZsS1OmADEkkXucs9%2Fc%2BwRzzAIhvgJRijNx6zHOcK1qudhj%2FtHA7ljOuw0%2B8%2BoHCZcsZfs7k%2BDSc7LSdZIHC%2FfO7kbvg5RljbbYGh6oaUHnUtG8MtkhehekO9tb6mWKjk%2Bb7R%2FwDtgvqSDlEKneeYmDRShJbI2CY6eQh51ICH5K%2FIjZqa4gyeEAndYBUm4KQxCaKZ0J8XyArSsYXf1Ikt1jhqRhWdxNg5R5p0KPZ95ZTi4wmcOegttdyELKWkWqT4Da2Q5QHk8kE%2FP1AZxkpRiVkBwlKmYy3fOk6QwwpKywgY6pgH%2F5%2Foa1hqJxI%2Bwyi6h%2Ba%2BnrTJINS%2FwPXvGAHiiKwzi24G6RILyC2hJjYFSlJ4949O9pHp5KhIxX7UbnlN1xmui93Oc0haeTIQ7uJlyWBH5o00INY%2F2RXf4ElD%2BEJH2%2BCAbKMb1daBXr2eZR47rMGy%2B7lZ%2Bzp%2BmNm5x%2FeNaa5xsZiPILQ3PuKPL7ousdob%2FU2dYKqOcQJXVoyteyZZ7%2Bd47%2BimiG3at&X-Amz-Signature=32f35130477c3dd84040419998d2aea2d571b78cdd13fe93792aacd2b9aaaaae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYY2Q5S%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIDD%2FAV6Y4P0Kdw%2B5c2v4mP3O0SBTYMCS1l6OHG0Tx9CfAiBntwVMiYQOjomiet%2BRCJ77ab9n9EtdTQTW0jF4MIDGcyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMpLqsl4fLtJRf5MkzKtwDzS6XYdm%2BFuZqR1iNRlTgU63%2Bho5Ra7sVXdTpZU8VFZSckouvYI%2FJHkUqgz%2B7cLHmfwA3h7%2FYWbBu4tLnIDJZB3lkf6qIPueTJVAnWBx7XH3qo6FVCDgJwFGQ7wdT4TOYAJ66EqBBxSR7TwwtEy4T3najzsCmG1ooiEHR7jzzWk0xrJExrqCc0wKSemW6bgGsZJBOo60TX5begHtc0cHocQk91jx%2FAdxYH39veA7stM3szSyB5uDfqgcotD0SSXD%2BRdccJOj5hAc2uL1DM5isAnY44YNV5sDEmOpr7jGzbPlpUtQitnMrJtC2ONLV2JU9B28oZlgo4jd3sk%2FhPqM%2FRsvZsS1OmADEkkXucs9%2Fc%2BwRzzAIhvgJRijNx6zHOcK1qudhj%2FtHA7ljOuw0%2B8%2BoHCZcsZfs7k%2BDSc7LSdZIHC%2FfO7kbvg5RljbbYGh6oaUHnUtG8MtkhehekO9tb6mWKjk%2Bb7R%2FwDtgvqSDlEKneeYmDRShJbI2CY6eQh51ICH5K%2FIjZqa4gyeEAndYBUm4KQxCaKZ0J8XyArSsYXf1Ikt1jhqRhWdxNg5R5p0KPZ95ZTi4wmcOegttdyELKWkWqT4Da2Q5QHk8kE%2FP1AZxkpRiVkBwlKmYy3fOk6QwwpKywgY6pgH%2F5%2Foa1hqJxI%2Bwyi6h%2Ba%2BnrTJINS%2FwPXvGAHiiKwzi24G6RILyC2hJjYFSlJ4949O9pHp5KhIxX7UbnlN1xmui93Oc0haeTIQ7uJlyWBH5o00INY%2F2RXf4ElD%2BEJH2%2BCAbKMb1daBXr2eZR47rMGy%2B7lZ%2Bzp%2BmNm5x%2FeNaa5xsZiPILQ3PuKPL7ousdob%2FU2dYKqOcQJXVoyteyZZ7%2Bd47%2BimiG3at&X-Amz-Signature=83f04c995aafc433f523bb200dea8c3a25e5987c84b5d6c5a35ecec67a6cbcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
