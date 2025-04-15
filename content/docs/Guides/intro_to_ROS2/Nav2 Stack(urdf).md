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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6VXV7A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BOnb1XYwJcby%2BoJ0rjIaNBbmmPyjYcaH%2FbbT8gKd%2FkAiAhv%2B2aaP1984l027yi%2FnU%2FVoKgxdR7NHAXhh89IW3STSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMGVGqRYZeihQjDytmKtwDs11gmj5oatcDm4ydAzrRrEYr7zO4d4VkLw2NYd6ayPcG2xKMX%2F2ZBOtA9CZUArfLs29Y0iL2Zg0VUK74b6BQgch65w5tPLPoU3kxgkLOg%2B9mydeUximXJeRmOx3SRjvksZudDBJ7WLBYxVgKC5X844t2dViJNqgk5rVZMHb%2B5DIVO0iYnQGxXe8Ov5k16uyaHg6RT%2BtqelnrAa%2BlU3oTgqfnCVabP1DbPalMA9JguhBDe8xNyR8QognOXfZApe4MYnWUsKi%2F07OjbQ3ymm1SITddhh4eca1AjJPtMWaoFvCeNWCb%2FpDbu88WHssXaWQouIvq9QpmK91dZU%2Bo2i5%2FU7DUtpU%2FP3IHcK3k1W0D14X8XhzZ4NFpcVOz84ar1wjumP3kR7fJ%2B9loWeTtRMxnbCAdlepX1bAZK3%2F7oI51ikNcLcHF6TiGP5eYkWTiVKBGIBpLmwNHIiz65k4ci4J6CF%2FeepF9JfCHimiFm%2FMvA9eVhfIkNUNdcA%2FFn1OtHlDpJs3NvYRDg0FZhFlBLhjB0T303VSscew8sAuZOVqtbsHJQ5zRTpMIJebQ36harUhBjKncQRGkxQI64fRS7ASCQTSGmZtUY5WbHxzo58TFN1IbfPMOgnNQbb6yaW4w6IT6vwY6pgE4EHuyhQ2bofWP4MZlAlk73MN3QhlCYr3oIri2OnSYTWhWh0EoQYj0eoJ9TZmxYHR1p6%2FO3q8iq%2FJXuEPmcQk8MGCeDi%2B0caG7364bcmYwS7WkYpkyoAEj3m%2FNFLrUI%2BpoJRQvIRaESfAHa2Y8iMwXBlEcBrGOHjUH1FyPun1gpMXMsTHvXWXDvMs1A%2FT0vSpJA4NIMhUClMyEtN30JEFyvkcU2ZHR&X-Amz-Signature=c3d37f1432f8bb3ed49dc1ca3ee953c2fd1f88095af843bec02ab54c4314053d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6VXV7A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BOnb1XYwJcby%2BoJ0rjIaNBbmmPyjYcaH%2FbbT8gKd%2FkAiAhv%2B2aaP1984l027yi%2FnU%2FVoKgxdR7NHAXhh89IW3STSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMGVGqRYZeihQjDytmKtwDs11gmj5oatcDm4ydAzrRrEYr7zO4d4VkLw2NYd6ayPcG2xKMX%2F2ZBOtA9CZUArfLs29Y0iL2Zg0VUK74b6BQgch65w5tPLPoU3kxgkLOg%2B9mydeUximXJeRmOx3SRjvksZudDBJ7WLBYxVgKC5X844t2dViJNqgk5rVZMHb%2B5DIVO0iYnQGxXe8Ov5k16uyaHg6RT%2BtqelnrAa%2BlU3oTgqfnCVabP1DbPalMA9JguhBDe8xNyR8QognOXfZApe4MYnWUsKi%2F07OjbQ3ymm1SITddhh4eca1AjJPtMWaoFvCeNWCb%2FpDbu88WHssXaWQouIvq9QpmK91dZU%2Bo2i5%2FU7DUtpU%2FP3IHcK3k1W0D14X8XhzZ4NFpcVOz84ar1wjumP3kR7fJ%2B9loWeTtRMxnbCAdlepX1bAZK3%2F7oI51ikNcLcHF6TiGP5eYkWTiVKBGIBpLmwNHIiz65k4ci4J6CF%2FeepF9JfCHimiFm%2FMvA9eVhfIkNUNdcA%2FFn1OtHlDpJs3NvYRDg0FZhFlBLhjB0T303VSscew8sAuZOVqtbsHJQ5zRTpMIJebQ36harUhBjKncQRGkxQI64fRS7ASCQTSGmZtUY5WbHxzo58TFN1IbfPMOgnNQbb6yaW4w6IT6vwY6pgE4EHuyhQ2bofWP4MZlAlk73MN3QhlCYr3oIri2OnSYTWhWh0EoQYj0eoJ9TZmxYHR1p6%2FO3q8iq%2FJXuEPmcQk8MGCeDi%2B0caG7364bcmYwS7WkYpkyoAEj3m%2FNFLrUI%2BpoJRQvIRaESfAHa2Y8iMwXBlEcBrGOHjUH1FyPun1gpMXMsTHvXWXDvMs1A%2FT0vSpJA4NIMhUClMyEtN30JEFyvkcU2ZHR&X-Amz-Signature=6419f49902b2c2b22069b15c6a7b4137fb922a3d7eae4cb420f1ff3d4b9acd66&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6VXV7A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BOnb1XYwJcby%2BoJ0rjIaNBbmmPyjYcaH%2FbbT8gKd%2FkAiAhv%2B2aaP1984l027yi%2FnU%2FVoKgxdR7NHAXhh89IW3STSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMGVGqRYZeihQjDytmKtwDs11gmj5oatcDm4ydAzrRrEYr7zO4d4VkLw2NYd6ayPcG2xKMX%2F2ZBOtA9CZUArfLs29Y0iL2Zg0VUK74b6BQgch65w5tPLPoU3kxgkLOg%2B9mydeUximXJeRmOx3SRjvksZudDBJ7WLBYxVgKC5X844t2dViJNqgk5rVZMHb%2B5DIVO0iYnQGxXe8Ov5k16uyaHg6RT%2BtqelnrAa%2BlU3oTgqfnCVabP1DbPalMA9JguhBDe8xNyR8QognOXfZApe4MYnWUsKi%2F07OjbQ3ymm1SITddhh4eca1AjJPtMWaoFvCeNWCb%2FpDbu88WHssXaWQouIvq9QpmK91dZU%2Bo2i5%2FU7DUtpU%2FP3IHcK3k1W0D14X8XhzZ4NFpcVOz84ar1wjumP3kR7fJ%2B9loWeTtRMxnbCAdlepX1bAZK3%2F7oI51ikNcLcHF6TiGP5eYkWTiVKBGIBpLmwNHIiz65k4ci4J6CF%2FeepF9JfCHimiFm%2FMvA9eVhfIkNUNdcA%2FFn1OtHlDpJs3NvYRDg0FZhFlBLhjB0T303VSscew8sAuZOVqtbsHJQ5zRTpMIJebQ36harUhBjKncQRGkxQI64fRS7ASCQTSGmZtUY5WbHxzo58TFN1IbfPMOgnNQbb6yaW4w6IT6vwY6pgE4EHuyhQ2bofWP4MZlAlk73MN3QhlCYr3oIri2OnSYTWhWh0EoQYj0eoJ9TZmxYHR1p6%2FO3q8iq%2FJXuEPmcQk8MGCeDi%2B0caG7364bcmYwS7WkYpkyoAEj3m%2FNFLrUI%2BpoJRQvIRaESfAHa2Y8iMwXBlEcBrGOHjUH1FyPun1gpMXMsTHvXWXDvMs1A%2FT0vSpJA4NIMhUClMyEtN30JEFyvkcU2ZHR&X-Amz-Signature=2d3f441a5e636b8e7d11efc642b7d0e63696ed5940518314b327fe49d53536ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6VXV7A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BOnb1XYwJcby%2BoJ0rjIaNBbmmPyjYcaH%2FbbT8gKd%2FkAiAhv%2B2aaP1984l027yi%2FnU%2FVoKgxdR7NHAXhh89IW3STSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMGVGqRYZeihQjDytmKtwDs11gmj5oatcDm4ydAzrRrEYr7zO4d4VkLw2NYd6ayPcG2xKMX%2F2ZBOtA9CZUArfLs29Y0iL2Zg0VUK74b6BQgch65w5tPLPoU3kxgkLOg%2B9mydeUximXJeRmOx3SRjvksZudDBJ7WLBYxVgKC5X844t2dViJNqgk5rVZMHb%2B5DIVO0iYnQGxXe8Ov5k16uyaHg6RT%2BtqelnrAa%2BlU3oTgqfnCVabP1DbPalMA9JguhBDe8xNyR8QognOXfZApe4MYnWUsKi%2F07OjbQ3ymm1SITddhh4eca1AjJPtMWaoFvCeNWCb%2FpDbu88WHssXaWQouIvq9QpmK91dZU%2Bo2i5%2FU7DUtpU%2FP3IHcK3k1W0D14X8XhzZ4NFpcVOz84ar1wjumP3kR7fJ%2B9loWeTtRMxnbCAdlepX1bAZK3%2F7oI51ikNcLcHF6TiGP5eYkWTiVKBGIBpLmwNHIiz65k4ci4J6CF%2FeepF9JfCHimiFm%2FMvA9eVhfIkNUNdcA%2FFn1OtHlDpJs3NvYRDg0FZhFlBLhjB0T303VSscew8sAuZOVqtbsHJQ5zRTpMIJebQ36harUhBjKncQRGkxQI64fRS7ASCQTSGmZtUY5WbHxzo58TFN1IbfPMOgnNQbb6yaW4w6IT6vwY6pgE4EHuyhQ2bofWP4MZlAlk73MN3QhlCYr3oIri2OnSYTWhWh0EoQYj0eoJ9TZmxYHR1p6%2FO3q8iq%2FJXuEPmcQk8MGCeDi%2B0caG7364bcmYwS7WkYpkyoAEj3m%2FNFLrUI%2BpoJRQvIRaESfAHa2Y8iMwXBlEcBrGOHjUH1FyPun1gpMXMsTHvXWXDvMs1A%2FT0vSpJA4NIMhUClMyEtN30JEFyvkcU2ZHR&X-Amz-Signature=cd82de058019e5ef80cdf6974ec015c4284043d933f05541a1bfff682c5565b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6VXV7A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BOnb1XYwJcby%2BoJ0rjIaNBbmmPyjYcaH%2FbbT8gKd%2FkAiAhv%2B2aaP1984l027yi%2FnU%2FVoKgxdR7NHAXhh89IW3STSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMGVGqRYZeihQjDytmKtwDs11gmj5oatcDm4ydAzrRrEYr7zO4d4VkLw2NYd6ayPcG2xKMX%2F2ZBOtA9CZUArfLs29Y0iL2Zg0VUK74b6BQgch65w5tPLPoU3kxgkLOg%2B9mydeUximXJeRmOx3SRjvksZudDBJ7WLBYxVgKC5X844t2dViJNqgk5rVZMHb%2B5DIVO0iYnQGxXe8Ov5k16uyaHg6RT%2BtqelnrAa%2BlU3oTgqfnCVabP1DbPalMA9JguhBDe8xNyR8QognOXfZApe4MYnWUsKi%2F07OjbQ3ymm1SITddhh4eca1AjJPtMWaoFvCeNWCb%2FpDbu88WHssXaWQouIvq9QpmK91dZU%2Bo2i5%2FU7DUtpU%2FP3IHcK3k1W0D14X8XhzZ4NFpcVOz84ar1wjumP3kR7fJ%2B9loWeTtRMxnbCAdlepX1bAZK3%2F7oI51ikNcLcHF6TiGP5eYkWTiVKBGIBpLmwNHIiz65k4ci4J6CF%2FeepF9JfCHimiFm%2FMvA9eVhfIkNUNdcA%2FFn1OtHlDpJs3NvYRDg0FZhFlBLhjB0T303VSscew8sAuZOVqtbsHJQ5zRTpMIJebQ36harUhBjKncQRGkxQI64fRS7ASCQTSGmZtUY5WbHxzo58TFN1IbfPMOgnNQbb6yaW4w6IT6vwY6pgE4EHuyhQ2bofWP4MZlAlk73MN3QhlCYr3oIri2OnSYTWhWh0EoQYj0eoJ9TZmxYHR1p6%2FO3q8iq%2FJXuEPmcQk8MGCeDi%2B0caG7364bcmYwS7WkYpkyoAEj3m%2FNFLrUI%2BpoJRQvIRaESfAHa2Y8iMwXBlEcBrGOHjUH1FyPun1gpMXMsTHvXWXDvMs1A%2FT0vSpJA4NIMhUClMyEtN30JEFyvkcU2ZHR&X-Amz-Signature=0e75f99535dd69028dc084f0f25d67fe4d42923791b9ce8081ca4bb306614089&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6VXV7A%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BOnb1XYwJcby%2BoJ0rjIaNBbmmPyjYcaH%2FbbT8gKd%2FkAiAhv%2B2aaP1984l027yi%2FnU%2FVoKgxdR7NHAXhh89IW3STSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMGVGqRYZeihQjDytmKtwDs11gmj5oatcDm4ydAzrRrEYr7zO4d4VkLw2NYd6ayPcG2xKMX%2F2ZBOtA9CZUArfLs29Y0iL2Zg0VUK74b6BQgch65w5tPLPoU3kxgkLOg%2B9mydeUximXJeRmOx3SRjvksZudDBJ7WLBYxVgKC5X844t2dViJNqgk5rVZMHb%2B5DIVO0iYnQGxXe8Ov5k16uyaHg6RT%2BtqelnrAa%2BlU3oTgqfnCVabP1DbPalMA9JguhBDe8xNyR8QognOXfZApe4MYnWUsKi%2F07OjbQ3ymm1SITddhh4eca1AjJPtMWaoFvCeNWCb%2FpDbu88WHssXaWQouIvq9QpmK91dZU%2Bo2i5%2FU7DUtpU%2FP3IHcK3k1W0D14X8XhzZ4NFpcVOz84ar1wjumP3kR7fJ%2B9loWeTtRMxnbCAdlepX1bAZK3%2F7oI51ikNcLcHF6TiGP5eYkWTiVKBGIBpLmwNHIiz65k4ci4J6CF%2FeepF9JfCHimiFm%2FMvA9eVhfIkNUNdcA%2FFn1OtHlDpJs3NvYRDg0FZhFlBLhjB0T303VSscew8sAuZOVqtbsHJQ5zRTpMIJebQ36harUhBjKncQRGkxQI64fRS7ASCQTSGmZtUY5WbHxzo58TFN1IbfPMOgnNQbb6yaW4w6IT6vwY6pgE4EHuyhQ2bofWP4MZlAlk73MN3QhlCYr3oIri2OnSYTWhWh0EoQYj0eoJ9TZmxYHR1p6%2FO3q8iq%2FJXuEPmcQk8MGCeDi%2B0caG7364bcmYwS7WkYpkyoAEj3m%2FNFLrUI%2BpoJRQvIRaESfAHa2Y8iMwXBlEcBrGOHjUH1FyPun1gpMXMsTHvXWXDvMs1A%2FT0vSpJA4NIMhUClMyEtN30JEFyvkcU2ZHR&X-Amz-Signature=1b3df799b2c5d5b2113f7037b165e740520990ea0186d9b0ba7c8e1c6f7a17b5&X-Amz-SignedHeaders=host&x-id=GetObject)
