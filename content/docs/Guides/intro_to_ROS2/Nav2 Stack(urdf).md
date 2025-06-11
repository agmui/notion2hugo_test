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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REK34SGM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBrGxTYFfgCu%2BAwB4aNLxdryFY1x%2BKCihfrHBGI129zaAiB6txuiecQmvT8erlbuEfDlLYylal9kbunWjnRFh6GMJSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFlaIlFVHU3lfD6uKtwDDYybtGB1UTAe02aHCWo%2FMkYBFq0lUVMdq6tikJrrFktq7hETvYXkt5JYSZRPfXd3FyBUWh2kl%2BmT8yaRAfnyoaHbgZgzl6JzdF7jzqhRgtFuIWMs4yW1Po5twhL2LPQl5PiuGy%2F0djqquska8JRVQuegXVz1KLh5XLYiUfSE%2BmtRwruhNu2jSTFXbhFewd2nMCvctudzybRerUsCZp1L%2FspFNO4IP%2FJmDBMEnNC1kpZEkxqGgaVmbLKzncTvAV%2FqPAXwgUW6iMEUxY%2BtNr3r%2B%2F12HtD04CBDTc40dpUdXxectTtyhWZIhEWfZjNrEgflAFGuU3rpng8OSm%2F%2FggHezkvJ%2Fcyrr0VfisjvCRfgl3pDCvC%2BwpiTCIa75bTejxQcsDZieI15xfZFZ2rgw%2Brc7EJSW6V8jFyi3Kq2IXDMG%2BQL2JlZpA%2F%2Ff0aHn9z%2BanwmcvTYDljT5Xkud2zUltgNSYzibXUeK3P%2FzsZ5nprG7uB%2B%2Fsiuy9WPzeFd08NBCl4zNPM2KZuyiLUe3H%2Bub5JeAfXeg0o%2FkJb5CiY44WmaoQsp9PLujZ0ZtPbGgHTuQ0b%2BZaNFBLJwtND98b85UopIm5Hm825GWIOFou%2FGixCTI849nacjfSeHdK4Bq3kwycinwgY6pgHZsVnL2bWW5yr3YGt3hJR8npJHv23DYKWMbpQgd9QXrJfnXBuVWh3oJgzX8AEATJrEh1%2FunjxXBCyzgmVx5ggS%2F940wMgFtVDPPZU9a2tKgYMc%2F6hJAOhAjo2HXZJUzvPxBML1HB2D%2Fb1nn%2BHhosyr2vM3ZvwB%2FTrvYuxbL200fFebgz9syhFCQr392wIdlR9zEXGqlIRg45KYnmnN9c19oSXSzJxq&X-Amz-Signature=a17f70022e8a100a1e17d1e8cee0f1edc99c134c5a76eb2bb95a5d210ba1569f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REK34SGM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBrGxTYFfgCu%2BAwB4aNLxdryFY1x%2BKCihfrHBGI129zaAiB6txuiecQmvT8erlbuEfDlLYylal9kbunWjnRFh6GMJSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFlaIlFVHU3lfD6uKtwDDYybtGB1UTAe02aHCWo%2FMkYBFq0lUVMdq6tikJrrFktq7hETvYXkt5JYSZRPfXd3FyBUWh2kl%2BmT8yaRAfnyoaHbgZgzl6JzdF7jzqhRgtFuIWMs4yW1Po5twhL2LPQl5PiuGy%2F0djqquska8JRVQuegXVz1KLh5XLYiUfSE%2BmtRwruhNu2jSTFXbhFewd2nMCvctudzybRerUsCZp1L%2FspFNO4IP%2FJmDBMEnNC1kpZEkxqGgaVmbLKzncTvAV%2FqPAXwgUW6iMEUxY%2BtNr3r%2B%2F12HtD04CBDTc40dpUdXxectTtyhWZIhEWfZjNrEgflAFGuU3rpng8OSm%2F%2FggHezkvJ%2Fcyrr0VfisjvCRfgl3pDCvC%2BwpiTCIa75bTejxQcsDZieI15xfZFZ2rgw%2Brc7EJSW6V8jFyi3Kq2IXDMG%2BQL2JlZpA%2F%2Ff0aHn9z%2BanwmcvTYDljT5Xkud2zUltgNSYzibXUeK3P%2FzsZ5nprG7uB%2B%2Fsiuy9WPzeFd08NBCl4zNPM2KZuyiLUe3H%2Bub5JeAfXeg0o%2FkJb5CiY44WmaoQsp9PLujZ0ZtPbGgHTuQ0b%2BZaNFBLJwtND98b85UopIm5Hm825GWIOFou%2FGixCTI849nacjfSeHdK4Bq3kwycinwgY6pgHZsVnL2bWW5yr3YGt3hJR8npJHv23DYKWMbpQgd9QXrJfnXBuVWh3oJgzX8AEATJrEh1%2FunjxXBCyzgmVx5ggS%2F940wMgFtVDPPZU9a2tKgYMc%2F6hJAOhAjo2HXZJUzvPxBML1HB2D%2Fb1nn%2BHhosyr2vM3ZvwB%2FTrvYuxbL200fFebgz9syhFCQr392wIdlR9zEXGqlIRg45KYnmnN9c19oSXSzJxq&X-Amz-Signature=8de9fc7e4d28686b6f6fd0dd0e8d4c1229ae724b528f6217e18c372a75454cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REK34SGM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBrGxTYFfgCu%2BAwB4aNLxdryFY1x%2BKCihfrHBGI129zaAiB6txuiecQmvT8erlbuEfDlLYylal9kbunWjnRFh6GMJSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFlaIlFVHU3lfD6uKtwDDYybtGB1UTAe02aHCWo%2FMkYBFq0lUVMdq6tikJrrFktq7hETvYXkt5JYSZRPfXd3FyBUWh2kl%2BmT8yaRAfnyoaHbgZgzl6JzdF7jzqhRgtFuIWMs4yW1Po5twhL2LPQl5PiuGy%2F0djqquska8JRVQuegXVz1KLh5XLYiUfSE%2BmtRwruhNu2jSTFXbhFewd2nMCvctudzybRerUsCZp1L%2FspFNO4IP%2FJmDBMEnNC1kpZEkxqGgaVmbLKzncTvAV%2FqPAXwgUW6iMEUxY%2BtNr3r%2B%2F12HtD04CBDTc40dpUdXxectTtyhWZIhEWfZjNrEgflAFGuU3rpng8OSm%2F%2FggHezkvJ%2Fcyrr0VfisjvCRfgl3pDCvC%2BwpiTCIa75bTejxQcsDZieI15xfZFZ2rgw%2Brc7EJSW6V8jFyi3Kq2IXDMG%2BQL2JlZpA%2F%2Ff0aHn9z%2BanwmcvTYDljT5Xkud2zUltgNSYzibXUeK3P%2FzsZ5nprG7uB%2B%2Fsiuy9WPzeFd08NBCl4zNPM2KZuyiLUe3H%2Bub5JeAfXeg0o%2FkJb5CiY44WmaoQsp9PLujZ0ZtPbGgHTuQ0b%2BZaNFBLJwtND98b85UopIm5Hm825GWIOFou%2FGixCTI849nacjfSeHdK4Bq3kwycinwgY6pgHZsVnL2bWW5yr3YGt3hJR8npJHv23DYKWMbpQgd9QXrJfnXBuVWh3oJgzX8AEATJrEh1%2FunjxXBCyzgmVx5ggS%2F940wMgFtVDPPZU9a2tKgYMc%2F6hJAOhAjo2HXZJUzvPxBML1HB2D%2Fb1nn%2BHhosyr2vM3ZvwB%2FTrvYuxbL200fFebgz9syhFCQr392wIdlR9zEXGqlIRg45KYnmnN9c19oSXSzJxq&X-Amz-Signature=318efa8ba1c955d47d4c1f278fbc20c3ba441b03e66e77e9c10c61e7c28be6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REK34SGM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBrGxTYFfgCu%2BAwB4aNLxdryFY1x%2BKCihfrHBGI129zaAiB6txuiecQmvT8erlbuEfDlLYylal9kbunWjnRFh6GMJSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFlaIlFVHU3lfD6uKtwDDYybtGB1UTAe02aHCWo%2FMkYBFq0lUVMdq6tikJrrFktq7hETvYXkt5JYSZRPfXd3FyBUWh2kl%2BmT8yaRAfnyoaHbgZgzl6JzdF7jzqhRgtFuIWMs4yW1Po5twhL2LPQl5PiuGy%2F0djqquska8JRVQuegXVz1KLh5XLYiUfSE%2BmtRwruhNu2jSTFXbhFewd2nMCvctudzybRerUsCZp1L%2FspFNO4IP%2FJmDBMEnNC1kpZEkxqGgaVmbLKzncTvAV%2FqPAXwgUW6iMEUxY%2BtNr3r%2B%2F12HtD04CBDTc40dpUdXxectTtyhWZIhEWfZjNrEgflAFGuU3rpng8OSm%2F%2FggHezkvJ%2Fcyrr0VfisjvCRfgl3pDCvC%2BwpiTCIa75bTejxQcsDZieI15xfZFZ2rgw%2Brc7EJSW6V8jFyi3Kq2IXDMG%2BQL2JlZpA%2F%2Ff0aHn9z%2BanwmcvTYDljT5Xkud2zUltgNSYzibXUeK3P%2FzsZ5nprG7uB%2B%2Fsiuy9WPzeFd08NBCl4zNPM2KZuyiLUe3H%2Bub5JeAfXeg0o%2FkJb5CiY44WmaoQsp9PLujZ0ZtPbGgHTuQ0b%2BZaNFBLJwtND98b85UopIm5Hm825GWIOFou%2FGixCTI849nacjfSeHdK4Bq3kwycinwgY6pgHZsVnL2bWW5yr3YGt3hJR8npJHv23DYKWMbpQgd9QXrJfnXBuVWh3oJgzX8AEATJrEh1%2FunjxXBCyzgmVx5ggS%2F940wMgFtVDPPZU9a2tKgYMc%2F6hJAOhAjo2HXZJUzvPxBML1HB2D%2Fb1nn%2BHhosyr2vM3ZvwB%2FTrvYuxbL200fFebgz9syhFCQr392wIdlR9zEXGqlIRg45KYnmnN9c19oSXSzJxq&X-Amz-Signature=6edc5b42d4c3246fc1cd25abd04aca1289421767f6b105b12c4a5207ec474b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REK34SGM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBrGxTYFfgCu%2BAwB4aNLxdryFY1x%2BKCihfrHBGI129zaAiB6txuiecQmvT8erlbuEfDlLYylal9kbunWjnRFh6GMJSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFlaIlFVHU3lfD6uKtwDDYybtGB1UTAe02aHCWo%2FMkYBFq0lUVMdq6tikJrrFktq7hETvYXkt5JYSZRPfXd3FyBUWh2kl%2BmT8yaRAfnyoaHbgZgzl6JzdF7jzqhRgtFuIWMs4yW1Po5twhL2LPQl5PiuGy%2F0djqquska8JRVQuegXVz1KLh5XLYiUfSE%2BmtRwruhNu2jSTFXbhFewd2nMCvctudzybRerUsCZp1L%2FspFNO4IP%2FJmDBMEnNC1kpZEkxqGgaVmbLKzncTvAV%2FqPAXwgUW6iMEUxY%2BtNr3r%2B%2F12HtD04CBDTc40dpUdXxectTtyhWZIhEWfZjNrEgflAFGuU3rpng8OSm%2F%2FggHezkvJ%2Fcyrr0VfisjvCRfgl3pDCvC%2BwpiTCIa75bTejxQcsDZieI15xfZFZ2rgw%2Brc7EJSW6V8jFyi3Kq2IXDMG%2BQL2JlZpA%2F%2Ff0aHn9z%2BanwmcvTYDljT5Xkud2zUltgNSYzibXUeK3P%2FzsZ5nprG7uB%2B%2Fsiuy9WPzeFd08NBCl4zNPM2KZuyiLUe3H%2Bub5JeAfXeg0o%2FkJb5CiY44WmaoQsp9PLujZ0ZtPbGgHTuQ0b%2BZaNFBLJwtND98b85UopIm5Hm825GWIOFou%2FGixCTI849nacjfSeHdK4Bq3kwycinwgY6pgHZsVnL2bWW5yr3YGt3hJR8npJHv23DYKWMbpQgd9QXrJfnXBuVWh3oJgzX8AEATJrEh1%2FunjxXBCyzgmVx5ggS%2F940wMgFtVDPPZU9a2tKgYMc%2F6hJAOhAjo2HXZJUzvPxBML1HB2D%2Fb1nn%2BHhosyr2vM3ZvwB%2FTrvYuxbL200fFebgz9syhFCQr392wIdlR9zEXGqlIRg45KYnmnN9c19oSXSzJxq&X-Amz-Signature=273ff7febb7a5e2b54ccae5fc0929b155e55bce3f180a9495159222ddc9e5504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REK34SGM%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBrGxTYFfgCu%2BAwB4aNLxdryFY1x%2BKCihfrHBGI129zaAiB6txuiecQmvT8erlbuEfDlLYylal9kbunWjnRFh6GMJSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFlaIlFVHU3lfD6uKtwDDYybtGB1UTAe02aHCWo%2FMkYBFq0lUVMdq6tikJrrFktq7hETvYXkt5JYSZRPfXd3FyBUWh2kl%2BmT8yaRAfnyoaHbgZgzl6JzdF7jzqhRgtFuIWMs4yW1Po5twhL2LPQl5PiuGy%2F0djqquska8JRVQuegXVz1KLh5XLYiUfSE%2BmtRwruhNu2jSTFXbhFewd2nMCvctudzybRerUsCZp1L%2FspFNO4IP%2FJmDBMEnNC1kpZEkxqGgaVmbLKzncTvAV%2FqPAXwgUW6iMEUxY%2BtNr3r%2B%2F12HtD04CBDTc40dpUdXxectTtyhWZIhEWfZjNrEgflAFGuU3rpng8OSm%2F%2FggHezkvJ%2Fcyrr0VfisjvCRfgl3pDCvC%2BwpiTCIa75bTejxQcsDZieI15xfZFZ2rgw%2Brc7EJSW6V8jFyi3Kq2IXDMG%2BQL2JlZpA%2F%2Ff0aHn9z%2BanwmcvTYDljT5Xkud2zUltgNSYzibXUeK3P%2FzsZ5nprG7uB%2B%2Fsiuy9WPzeFd08NBCl4zNPM2KZuyiLUe3H%2Bub5JeAfXeg0o%2FkJb5CiY44WmaoQsp9PLujZ0ZtPbGgHTuQ0b%2BZaNFBLJwtND98b85UopIm5Hm825GWIOFou%2FGixCTI849nacjfSeHdK4Bq3kwycinwgY6pgHZsVnL2bWW5yr3YGt3hJR8npJHv23DYKWMbpQgd9QXrJfnXBuVWh3oJgzX8AEATJrEh1%2FunjxXBCyzgmVx5ggS%2F940wMgFtVDPPZU9a2tKgYMc%2F6hJAOhAjo2HXZJUzvPxBML1HB2D%2Fb1nn%2BHhosyr2vM3ZvwB%2FTrvYuxbL200fFebgz9syhFCQr392wIdlR9zEXGqlIRg45KYnmnN9c19oSXSzJxq&X-Amz-Signature=29a39327eef323d53abc3d06f7371ab73d378b9b22ff6898e588e7a4cd390956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
