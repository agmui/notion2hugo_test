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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXV7LH6%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHY2VuOc6J87uU1mYMmUuvUNzbVlAFyHlFxH21u4L1NAiEA7WcF9PuEhd2A3w5dNpMOSFFyDVBWxDKH3vSYZbuQY%2FcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwrfHxkaEsqb0esIyrcA%2FmfqhSoDw%2BQ4P%2BDqdtbFuvHotOM%2F4ugnbADyUvylfbDWITtDaRIjpFKIYZiNHVY8%2FmcrRuYRS61XV69EQMm%2Br%2B7CpGMMAWid3%2BI30Mci8yidFAXevDaePmHH3psTb5gBU%2Fe5%2BoitpOdx%2BhzlpHsYxBCaJQBAkpPbS4Ib3L9yjMg5c4yfBcpr8gYu4XZN42k9IDfthZznxC2oQ%2Bt%2BCGNwKFxaLRxOFxla0%2F08jni9eR64Jnb7jjTVSbcfSuJszlTcoGLc91p6bxht1oWz7GTZPtqpEkPMSMsHH8ywqZ2j%2FZCP5OKyXAU3tWbI82yrLCQuJCnf5o8XOEYThDjAP8sODxijqTo84QJipIUzIwb48zsfBQG5l6HmGkfKCTCvfBV6JmpxvC6o46GB4ChjYc5socjn1%2FVZRpWI350Hbu7ueazBqMt58o4nfdeibL5M%2BQp9FZhWLf1QY1bsHi%2FV8ETCSslry3wV18yYqNiOSaqPw7E80WkPzIMz1oiqcP%2B8lP4PvlwHxxJxBFZ7CIwiRh9GdpZTNSm977XJwmM4wD5a1Io6UkN5%2FFMOXus3KNgrK5rzbp9%2BRI3nQ4i1S39sEXocWV5pIJjxOnm3xkfmlXtJSmA8ugHevzqU5DToaQuMJa%2FoMIGOqUBf1V1MenwF5eocJBgDu220JA%2FE3%2FwOAtD%2FSfX4l8vJy%2BJUaJRJiS3e0ZOvqC1R69F5hl4P2LTuVlO%2BeeSukOJ8gopwYFhcyKsUFBNU2DIbrlbIU52Sr1YLvxV9l%2FXeKG6%2F4ELTBN8WLEz7%2Bcn7Tbm8C7PML1%2B0%2B%2B9SyriPNQB%2F48QdvNqNv3KdmQTaxPP57Jyxq6tAZLvYy5zbRlIIGnlTsUXW5Ew&X-Amz-Signature=290b74251a540e10cb97c5ff9fb9799e0d477e79a285b6f61a882d6f4b648e4b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXV7LH6%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHY2VuOc6J87uU1mYMmUuvUNzbVlAFyHlFxH21u4L1NAiEA7WcF9PuEhd2A3w5dNpMOSFFyDVBWxDKH3vSYZbuQY%2FcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwrfHxkaEsqb0esIyrcA%2FmfqhSoDw%2BQ4P%2BDqdtbFuvHotOM%2F4ugnbADyUvylfbDWITtDaRIjpFKIYZiNHVY8%2FmcrRuYRS61XV69EQMm%2Br%2B7CpGMMAWid3%2BI30Mci8yidFAXevDaePmHH3psTb5gBU%2Fe5%2BoitpOdx%2BhzlpHsYxBCaJQBAkpPbS4Ib3L9yjMg5c4yfBcpr8gYu4XZN42k9IDfthZznxC2oQ%2Bt%2BCGNwKFxaLRxOFxla0%2F08jni9eR64Jnb7jjTVSbcfSuJszlTcoGLc91p6bxht1oWz7GTZPtqpEkPMSMsHH8ywqZ2j%2FZCP5OKyXAU3tWbI82yrLCQuJCnf5o8XOEYThDjAP8sODxijqTo84QJipIUzIwb48zsfBQG5l6HmGkfKCTCvfBV6JmpxvC6o46GB4ChjYc5socjn1%2FVZRpWI350Hbu7ueazBqMt58o4nfdeibL5M%2BQp9FZhWLf1QY1bsHi%2FV8ETCSslry3wV18yYqNiOSaqPw7E80WkPzIMz1oiqcP%2B8lP4PvlwHxxJxBFZ7CIwiRh9GdpZTNSm977XJwmM4wD5a1Io6UkN5%2FFMOXus3KNgrK5rzbp9%2BRI3nQ4i1S39sEXocWV5pIJjxOnm3xkfmlXtJSmA8ugHevzqU5DToaQuMJa%2FoMIGOqUBf1V1MenwF5eocJBgDu220JA%2FE3%2FwOAtD%2FSfX4l8vJy%2BJUaJRJiS3e0ZOvqC1R69F5hl4P2LTuVlO%2BeeSukOJ8gopwYFhcyKsUFBNU2DIbrlbIU52Sr1YLvxV9l%2FXeKG6%2F4ELTBN8WLEz7%2Bcn7Tbm8C7PML1%2B0%2B%2B9SyriPNQB%2F48QdvNqNv3KdmQTaxPP57Jyxq6tAZLvYy5zbRlIIGnlTsUXW5Ew&X-Amz-Signature=d2a7386cd6b4584c56ea4ddb4be16313abe059d96cb0062df211ae3b821de7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXV7LH6%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHY2VuOc6J87uU1mYMmUuvUNzbVlAFyHlFxH21u4L1NAiEA7WcF9PuEhd2A3w5dNpMOSFFyDVBWxDKH3vSYZbuQY%2FcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwrfHxkaEsqb0esIyrcA%2FmfqhSoDw%2BQ4P%2BDqdtbFuvHotOM%2F4ugnbADyUvylfbDWITtDaRIjpFKIYZiNHVY8%2FmcrRuYRS61XV69EQMm%2Br%2B7CpGMMAWid3%2BI30Mci8yidFAXevDaePmHH3psTb5gBU%2Fe5%2BoitpOdx%2BhzlpHsYxBCaJQBAkpPbS4Ib3L9yjMg5c4yfBcpr8gYu4XZN42k9IDfthZznxC2oQ%2Bt%2BCGNwKFxaLRxOFxla0%2F08jni9eR64Jnb7jjTVSbcfSuJszlTcoGLc91p6bxht1oWz7GTZPtqpEkPMSMsHH8ywqZ2j%2FZCP5OKyXAU3tWbI82yrLCQuJCnf5o8XOEYThDjAP8sODxijqTo84QJipIUzIwb48zsfBQG5l6HmGkfKCTCvfBV6JmpxvC6o46GB4ChjYc5socjn1%2FVZRpWI350Hbu7ueazBqMt58o4nfdeibL5M%2BQp9FZhWLf1QY1bsHi%2FV8ETCSslry3wV18yYqNiOSaqPw7E80WkPzIMz1oiqcP%2B8lP4PvlwHxxJxBFZ7CIwiRh9GdpZTNSm977XJwmM4wD5a1Io6UkN5%2FFMOXus3KNgrK5rzbp9%2BRI3nQ4i1S39sEXocWV5pIJjxOnm3xkfmlXtJSmA8ugHevzqU5DToaQuMJa%2FoMIGOqUBf1V1MenwF5eocJBgDu220JA%2FE3%2FwOAtD%2FSfX4l8vJy%2BJUaJRJiS3e0ZOvqC1R69F5hl4P2LTuVlO%2BeeSukOJ8gopwYFhcyKsUFBNU2DIbrlbIU52Sr1YLvxV9l%2FXeKG6%2F4ELTBN8WLEz7%2Bcn7Tbm8C7PML1%2B0%2B%2B9SyriPNQB%2F48QdvNqNv3KdmQTaxPP57Jyxq6tAZLvYy5zbRlIIGnlTsUXW5Ew&X-Amz-Signature=30b3b5537dd7c6843edcb5bd7908fcc6ac9406b95971b6f25bdd9b0e259170ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXV7LH6%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHY2VuOc6J87uU1mYMmUuvUNzbVlAFyHlFxH21u4L1NAiEA7WcF9PuEhd2A3w5dNpMOSFFyDVBWxDKH3vSYZbuQY%2FcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwrfHxkaEsqb0esIyrcA%2FmfqhSoDw%2BQ4P%2BDqdtbFuvHotOM%2F4ugnbADyUvylfbDWITtDaRIjpFKIYZiNHVY8%2FmcrRuYRS61XV69EQMm%2Br%2B7CpGMMAWid3%2BI30Mci8yidFAXevDaePmHH3psTb5gBU%2Fe5%2BoitpOdx%2BhzlpHsYxBCaJQBAkpPbS4Ib3L9yjMg5c4yfBcpr8gYu4XZN42k9IDfthZznxC2oQ%2Bt%2BCGNwKFxaLRxOFxla0%2F08jni9eR64Jnb7jjTVSbcfSuJszlTcoGLc91p6bxht1oWz7GTZPtqpEkPMSMsHH8ywqZ2j%2FZCP5OKyXAU3tWbI82yrLCQuJCnf5o8XOEYThDjAP8sODxijqTo84QJipIUzIwb48zsfBQG5l6HmGkfKCTCvfBV6JmpxvC6o46GB4ChjYc5socjn1%2FVZRpWI350Hbu7ueazBqMt58o4nfdeibL5M%2BQp9FZhWLf1QY1bsHi%2FV8ETCSslry3wV18yYqNiOSaqPw7E80WkPzIMz1oiqcP%2B8lP4PvlwHxxJxBFZ7CIwiRh9GdpZTNSm977XJwmM4wD5a1Io6UkN5%2FFMOXus3KNgrK5rzbp9%2BRI3nQ4i1S39sEXocWV5pIJjxOnm3xkfmlXtJSmA8ugHevzqU5DToaQuMJa%2FoMIGOqUBf1V1MenwF5eocJBgDu220JA%2FE3%2FwOAtD%2FSfX4l8vJy%2BJUaJRJiS3e0ZOvqC1R69F5hl4P2LTuVlO%2BeeSukOJ8gopwYFhcyKsUFBNU2DIbrlbIU52Sr1YLvxV9l%2FXeKG6%2F4ELTBN8WLEz7%2Bcn7Tbm8C7PML1%2B0%2B%2B9SyriPNQB%2F48QdvNqNv3KdmQTaxPP57Jyxq6tAZLvYy5zbRlIIGnlTsUXW5Ew&X-Amz-Signature=6233424b31387425fc38684a0415bc1c42f595a9a31aebdcdfe4eb66b2d570c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXV7LH6%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHY2VuOc6J87uU1mYMmUuvUNzbVlAFyHlFxH21u4L1NAiEA7WcF9PuEhd2A3w5dNpMOSFFyDVBWxDKH3vSYZbuQY%2FcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwrfHxkaEsqb0esIyrcA%2FmfqhSoDw%2BQ4P%2BDqdtbFuvHotOM%2F4ugnbADyUvylfbDWITtDaRIjpFKIYZiNHVY8%2FmcrRuYRS61XV69EQMm%2Br%2B7CpGMMAWid3%2BI30Mci8yidFAXevDaePmHH3psTb5gBU%2Fe5%2BoitpOdx%2BhzlpHsYxBCaJQBAkpPbS4Ib3L9yjMg5c4yfBcpr8gYu4XZN42k9IDfthZznxC2oQ%2Bt%2BCGNwKFxaLRxOFxla0%2F08jni9eR64Jnb7jjTVSbcfSuJszlTcoGLc91p6bxht1oWz7GTZPtqpEkPMSMsHH8ywqZ2j%2FZCP5OKyXAU3tWbI82yrLCQuJCnf5o8XOEYThDjAP8sODxijqTo84QJipIUzIwb48zsfBQG5l6HmGkfKCTCvfBV6JmpxvC6o46GB4ChjYc5socjn1%2FVZRpWI350Hbu7ueazBqMt58o4nfdeibL5M%2BQp9FZhWLf1QY1bsHi%2FV8ETCSslry3wV18yYqNiOSaqPw7E80WkPzIMz1oiqcP%2B8lP4PvlwHxxJxBFZ7CIwiRh9GdpZTNSm977XJwmM4wD5a1Io6UkN5%2FFMOXus3KNgrK5rzbp9%2BRI3nQ4i1S39sEXocWV5pIJjxOnm3xkfmlXtJSmA8ugHevzqU5DToaQuMJa%2FoMIGOqUBf1V1MenwF5eocJBgDu220JA%2FE3%2FwOAtD%2FSfX4l8vJy%2BJUaJRJiS3e0ZOvqC1R69F5hl4P2LTuVlO%2BeeSukOJ8gopwYFhcyKsUFBNU2DIbrlbIU52Sr1YLvxV9l%2FXeKG6%2F4ELTBN8WLEz7%2Bcn7Tbm8C7PML1%2B0%2B%2B9SyriPNQB%2F48QdvNqNv3KdmQTaxPP57Jyxq6tAZLvYy5zbRlIIGnlTsUXW5Ew&X-Amz-Signature=b0fdda8df69f5cf777e4f78a02075492dca03efabc12220ddcbbee74c0a39220&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXV7LH6%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T140927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHY2VuOc6J87uU1mYMmUuvUNzbVlAFyHlFxH21u4L1NAiEA7WcF9PuEhd2A3w5dNpMOSFFyDVBWxDKH3vSYZbuQY%2FcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFwrfHxkaEsqb0esIyrcA%2FmfqhSoDw%2BQ4P%2BDqdtbFuvHotOM%2F4ugnbADyUvylfbDWITtDaRIjpFKIYZiNHVY8%2FmcrRuYRS61XV69EQMm%2Br%2B7CpGMMAWid3%2BI30Mci8yidFAXevDaePmHH3psTb5gBU%2Fe5%2BoitpOdx%2BhzlpHsYxBCaJQBAkpPbS4Ib3L9yjMg5c4yfBcpr8gYu4XZN42k9IDfthZznxC2oQ%2Bt%2BCGNwKFxaLRxOFxla0%2F08jni9eR64Jnb7jjTVSbcfSuJszlTcoGLc91p6bxht1oWz7GTZPtqpEkPMSMsHH8ywqZ2j%2FZCP5OKyXAU3tWbI82yrLCQuJCnf5o8XOEYThDjAP8sODxijqTo84QJipIUzIwb48zsfBQG5l6HmGkfKCTCvfBV6JmpxvC6o46GB4ChjYc5socjn1%2FVZRpWI350Hbu7ueazBqMt58o4nfdeibL5M%2BQp9FZhWLf1QY1bsHi%2FV8ETCSslry3wV18yYqNiOSaqPw7E80WkPzIMz1oiqcP%2B8lP4PvlwHxxJxBFZ7CIwiRh9GdpZTNSm977XJwmM4wD5a1Io6UkN5%2FFMOXus3KNgrK5rzbp9%2BRI3nQ4i1S39sEXocWV5pIJjxOnm3xkfmlXtJSmA8ugHevzqU5DToaQuMJa%2FoMIGOqUBf1V1MenwF5eocJBgDu220JA%2FE3%2FwOAtD%2FSfX4l8vJy%2BJUaJRJiS3e0ZOvqC1R69F5hl4P2LTuVlO%2BeeSukOJ8gopwYFhcyKsUFBNU2DIbrlbIU52Sr1YLvxV9l%2FXeKG6%2F4ELTBN8WLEz7%2Bcn7Tbm8C7PML1%2B0%2B%2B9SyriPNQB%2F48QdvNqNv3KdmQTaxPP57Jyxq6tAZLvYy5zbRlIIGnlTsUXW5Ew&X-Amz-Signature=550e41f7d501831f898baa2753a0ec9b3b1867d772f98c4e256743816011a6bd&X-Amz-SignedHeaders=host&x-id=GetObject)
