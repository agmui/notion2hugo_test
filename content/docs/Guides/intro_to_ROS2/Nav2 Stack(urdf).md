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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKFHTRM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHiGJjmgpNwqu86HxKxvZOpjEmw9CVJq4uZTmZgF8v7AiAegFTj%2F48N%2FHvOmO4ESz8pL9ENJ61CAm3kQ%2F1b6uGOwCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlc9%2FTG143bGj4aWTKtwDE00pTmKo8aAcgkjUIPf3r4TIeGRiXCcn1bps7BkCzgoKaiaBlAN9cwHx3rKaUMrBhyCpNi478b7R6W%2FJHDSkYSPn8u9Diq2lF8G%2FyLpkZlG2TTSZDd2SwlXgso9IsER4Z0TsAeB8uCfzSmGIc9NqFTfuxY6c4HcXFLp5HdlIXdCeWaf6Gb3qKYemXiWKlEUNcU4AJ0qhC1mQVsD6NwOiFAwaRdSfKX3utG2bJ%2F%2BHA5rRiIsDhs0IRG8qM4EG24dPDsuEaHRhSymmNC7KNSJeEXGkmzXkYLHXlwKtLqrsaVvO%2Bdal3V%2BugzRIq6fX2B1u6W7XdyfSoKS3IDQF%2BYuV9IRHXHHZ1h%2B5jwDnmDguUO1uYRpk%2BZZ3q3yY0%2BuvzNhoJztHtko0LacD0HPkScAX3IjSs5n9mHpu7XD%2F7WSdqz0uNrLvxlzjAnyIFjGDcbskDwsJP6Hx2exfTOn47Jn4ptMNPXtScZucWuDvqlml2Hpc1KGJVU%2Ftt1giPoc46fZ9rSqPXDM%2Fze7CQa7E1iTQm2FMAqwLggeH27L7bwWmJxCSarDE1lPeK%2BGGAL838jZYMxZzbLHpIEe7B0wNxKtpgiBzWj9bSo2kvg1CQgEASahHNhwzxzpfWHQXn34wqNmUvgY6pgHF6TA9GyYrhac%2BilyZW46TECQ56bBzAp5362Ns2wclM1eQJvntNNoyzRLLW8vDPq75gaVXYsTnlqCGu5E%2FlOJbZInno0rjZL%2Ffmlwtkwvtgn66OzA3eaH7w5cAL9Auqd3IiaOh9dmtABFdrgEWFIQA9kKQrVyNK7c392%2FnboYHXo4IIdifMRvFzXVmi9tKZl4xsZ24TrbB2k0CYjY2CXcM7enGwal%2B&X-Amz-Signature=e4fac814cb55ee2776097a4b0cb78ecb1f1bbfb0da11426ab2e0fbd18a074d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKFHTRM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHiGJjmgpNwqu86HxKxvZOpjEmw9CVJq4uZTmZgF8v7AiAegFTj%2F48N%2FHvOmO4ESz8pL9ENJ61CAm3kQ%2F1b6uGOwCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlc9%2FTG143bGj4aWTKtwDE00pTmKo8aAcgkjUIPf3r4TIeGRiXCcn1bps7BkCzgoKaiaBlAN9cwHx3rKaUMrBhyCpNi478b7R6W%2FJHDSkYSPn8u9Diq2lF8G%2FyLpkZlG2TTSZDd2SwlXgso9IsER4Z0TsAeB8uCfzSmGIc9NqFTfuxY6c4HcXFLp5HdlIXdCeWaf6Gb3qKYemXiWKlEUNcU4AJ0qhC1mQVsD6NwOiFAwaRdSfKX3utG2bJ%2F%2BHA5rRiIsDhs0IRG8qM4EG24dPDsuEaHRhSymmNC7KNSJeEXGkmzXkYLHXlwKtLqrsaVvO%2Bdal3V%2BugzRIq6fX2B1u6W7XdyfSoKS3IDQF%2BYuV9IRHXHHZ1h%2B5jwDnmDguUO1uYRpk%2BZZ3q3yY0%2BuvzNhoJztHtko0LacD0HPkScAX3IjSs5n9mHpu7XD%2F7WSdqz0uNrLvxlzjAnyIFjGDcbskDwsJP6Hx2exfTOn47Jn4ptMNPXtScZucWuDvqlml2Hpc1KGJVU%2Ftt1giPoc46fZ9rSqPXDM%2Fze7CQa7E1iTQm2FMAqwLggeH27L7bwWmJxCSarDE1lPeK%2BGGAL838jZYMxZzbLHpIEe7B0wNxKtpgiBzWj9bSo2kvg1CQgEASahHNhwzxzpfWHQXn34wqNmUvgY6pgHF6TA9GyYrhac%2BilyZW46TECQ56bBzAp5362Ns2wclM1eQJvntNNoyzRLLW8vDPq75gaVXYsTnlqCGu5E%2FlOJbZInno0rjZL%2Ffmlwtkwvtgn66OzA3eaH7w5cAL9Auqd3IiaOh9dmtABFdrgEWFIQA9kKQrVyNK7c392%2FnboYHXo4IIdifMRvFzXVmi9tKZl4xsZ24TrbB2k0CYjY2CXcM7enGwal%2B&X-Amz-Signature=af53b4c654ac080f63c4a73bcd0aef8dd917514cf482e402c02848844f53e543&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKFHTRM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHiGJjmgpNwqu86HxKxvZOpjEmw9CVJq4uZTmZgF8v7AiAegFTj%2F48N%2FHvOmO4ESz8pL9ENJ61CAm3kQ%2F1b6uGOwCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlc9%2FTG143bGj4aWTKtwDE00pTmKo8aAcgkjUIPf3r4TIeGRiXCcn1bps7BkCzgoKaiaBlAN9cwHx3rKaUMrBhyCpNi478b7R6W%2FJHDSkYSPn8u9Diq2lF8G%2FyLpkZlG2TTSZDd2SwlXgso9IsER4Z0TsAeB8uCfzSmGIc9NqFTfuxY6c4HcXFLp5HdlIXdCeWaf6Gb3qKYemXiWKlEUNcU4AJ0qhC1mQVsD6NwOiFAwaRdSfKX3utG2bJ%2F%2BHA5rRiIsDhs0IRG8qM4EG24dPDsuEaHRhSymmNC7KNSJeEXGkmzXkYLHXlwKtLqrsaVvO%2Bdal3V%2BugzRIq6fX2B1u6W7XdyfSoKS3IDQF%2BYuV9IRHXHHZ1h%2B5jwDnmDguUO1uYRpk%2BZZ3q3yY0%2BuvzNhoJztHtko0LacD0HPkScAX3IjSs5n9mHpu7XD%2F7WSdqz0uNrLvxlzjAnyIFjGDcbskDwsJP6Hx2exfTOn47Jn4ptMNPXtScZucWuDvqlml2Hpc1KGJVU%2Ftt1giPoc46fZ9rSqPXDM%2Fze7CQa7E1iTQm2FMAqwLggeH27L7bwWmJxCSarDE1lPeK%2BGGAL838jZYMxZzbLHpIEe7B0wNxKtpgiBzWj9bSo2kvg1CQgEASahHNhwzxzpfWHQXn34wqNmUvgY6pgHF6TA9GyYrhac%2BilyZW46TECQ56bBzAp5362Ns2wclM1eQJvntNNoyzRLLW8vDPq75gaVXYsTnlqCGu5E%2FlOJbZInno0rjZL%2Ffmlwtkwvtgn66OzA3eaH7w5cAL9Auqd3IiaOh9dmtABFdrgEWFIQA9kKQrVyNK7c392%2FnboYHXo4IIdifMRvFzXVmi9tKZl4xsZ24TrbB2k0CYjY2CXcM7enGwal%2B&X-Amz-Signature=76c39cd422d294d65661cf637d1f701021f4811f86d544a82f0ebc06dff9082f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKFHTRM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHiGJjmgpNwqu86HxKxvZOpjEmw9CVJq4uZTmZgF8v7AiAegFTj%2F48N%2FHvOmO4ESz8pL9ENJ61CAm3kQ%2F1b6uGOwCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlc9%2FTG143bGj4aWTKtwDE00pTmKo8aAcgkjUIPf3r4TIeGRiXCcn1bps7BkCzgoKaiaBlAN9cwHx3rKaUMrBhyCpNi478b7R6W%2FJHDSkYSPn8u9Diq2lF8G%2FyLpkZlG2TTSZDd2SwlXgso9IsER4Z0TsAeB8uCfzSmGIc9NqFTfuxY6c4HcXFLp5HdlIXdCeWaf6Gb3qKYemXiWKlEUNcU4AJ0qhC1mQVsD6NwOiFAwaRdSfKX3utG2bJ%2F%2BHA5rRiIsDhs0IRG8qM4EG24dPDsuEaHRhSymmNC7KNSJeEXGkmzXkYLHXlwKtLqrsaVvO%2Bdal3V%2BugzRIq6fX2B1u6W7XdyfSoKS3IDQF%2BYuV9IRHXHHZ1h%2B5jwDnmDguUO1uYRpk%2BZZ3q3yY0%2BuvzNhoJztHtko0LacD0HPkScAX3IjSs5n9mHpu7XD%2F7WSdqz0uNrLvxlzjAnyIFjGDcbskDwsJP6Hx2exfTOn47Jn4ptMNPXtScZucWuDvqlml2Hpc1KGJVU%2Ftt1giPoc46fZ9rSqPXDM%2Fze7CQa7E1iTQm2FMAqwLggeH27L7bwWmJxCSarDE1lPeK%2BGGAL838jZYMxZzbLHpIEe7B0wNxKtpgiBzWj9bSo2kvg1CQgEASahHNhwzxzpfWHQXn34wqNmUvgY6pgHF6TA9GyYrhac%2BilyZW46TECQ56bBzAp5362Ns2wclM1eQJvntNNoyzRLLW8vDPq75gaVXYsTnlqCGu5E%2FlOJbZInno0rjZL%2Ffmlwtkwvtgn66OzA3eaH7w5cAL9Auqd3IiaOh9dmtABFdrgEWFIQA9kKQrVyNK7c392%2FnboYHXo4IIdifMRvFzXVmi9tKZl4xsZ24TrbB2k0CYjY2CXcM7enGwal%2B&X-Amz-Signature=3fe3ab0168cf1e2ab3bed09d727093361902a7268d57a693234d56561efac42e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKFHTRM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHiGJjmgpNwqu86HxKxvZOpjEmw9CVJq4uZTmZgF8v7AiAegFTj%2F48N%2FHvOmO4ESz8pL9ENJ61CAm3kQ%2F1b6uGOwCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlc9%2FTG143bGj4aWTKtwDE00pTmKo8aAcgkjUIPf3r4TIeGRiXCcn1bps7BkCzgoKaiaBlAN9cwHx3rKaUMrBhyCpNi478b7R6W%2FJHDSkYSPn8u9Diq2lF8G%2FyLpkZlG2TTSZDd2SwlXgso9IsER4Z0TsAeB8uCfzSmGIc9NqFTfuxY6c4HcXFLp5HdlIXdCeWaf6Gb3qKYemXiWKlEUNcU4AJ0qhC1mQVsD6NwOiFAwaRdSfKX3utG2bJ%2F%2BHA5rRiIsDhs0IRG8qM4EG24dPDsuEaHRhSymmNC7KNSJeEXGkmzXkYLHXlwKtLqrsaVvO%2Bdal3V%2BugzRIq6fX2B1u6W7XdyfSoKS3IDQF%2BYuV9IRHXHHZ1h%2B5jwDnmDguUO1uYRpk%2BZZ3q3yY0%2BuvzNhoJztHtko0LacD0HPkScAX3IjSs5n9mHpu7XD%2F7WSdqz0uNrLvxlzjAnyIFjGDcbskDwsJP6Hx2exfTOn47Jn4ptMNPXtScZucWuDvqlml2Hpc1KGJVU%2Ftt1giPoc46fZ9rSqPXDM%2Fze7CQa7E1iTQm2FMAqwLggeH27L7bwWmJxCSarDE1lPeK%2BGGAL838jZYMxZzbLHpIEe7B0wNxKtpgiBzWj9bSo2kvg1CQgEASahHNhwzxzpfWHQXn34wqNmUvgY6pgHF6TA9GyYrhac%2BilyZW46TECQ56bBzAp5362Ns2wclM1eQJvntNNoyzRLLW8vDPq75gaVXYsTnlqCGu5E%2FlOJbZInno0rjZL%2Ffmlwtkwvtgn66OzA3eaH7w5cAL9Auqd3IiaOh9dmtABFdrgEWFIQA9kKQrVyNK7c392%2FnboYHXo4IIdifMRvFzXVmi9tKZl4xsZ24TrbB2k0CYjY2CXcM7enGwal%2B&X-Amz-Signature=57416a4b6c925ec5be97c6ae3f897e08ad60db3d187629ce9451c292f9b4e626&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKFHTRM%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHiGJjmgpNwqu86HxKxvZOpjEmw9CVJq4uZTmZgF8v7AiAegFTj%2F48N%2FHvOmO4ESz8pL9ENJ61CAm3kQ%2F1b6uGOwCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlc9%2FTG143bGj4aWTKtwDE00pTmKo8aAcgkjUIPf3r4TIeGRiXCcn1bps7BkCzgoKaiaBlAN9cwHx3rKaUMrBhyCpNi478b7R6W%2FJHDSkYSPn8u9Diq2lF8G%2FyLpkZlG2TTSZDd2SwlXgso9IsER4Z0TsAeB8uCfzSmGIc9NqFTfuxY6c4HcXFLp5HdlIXdCeWaf6Gb3qKYemXiWKlEUNcU4AJ0qhC1mQVsD6NwOiFAwaRdSfKX3utG2bJ%2F%2BHA5rRiIsDhs0IRG8qM4EG24dPDsuEaHRhSymmNC7KNSJeEXGkmzXkYLHXlwKtLqrsaVvO%2Bdal3V%2BugzRIq6fX2B1u6W7XdyfSoKS3IDQF%2BYuV9IRHXHHZ1h%2B5jwDnmDguUO1uYRpk%2BZZ3q3yY0%2BuvzNhoJztHtko0LacD0HPkScAX3IjSs5n9mHpu7XD%2F7WSdqz0uNrLvxlzjAnyIFjGDcbskDwsJP6Hx2exfTOn47Jn4ptMNPXtScZucWuDvqlml2Hpc1KGJVU%2Ftt1giPoc46fZ9rSqPXDM%2Fze7CQa7E1iTQm2FMAqwLggeH27L7bwWmJxCSarDE1lPeK%2BGGAL838jZYMxZzbLHpIEe7B0wNxKtpgiBzWj9bSo2kvg1CQgEASahHNhwzxzpfWHQXn34wqNmUvgY6pgHF6TA9GyYrhac%2BilyZW46TECQ56bBzAp5362Ns2wclM1eQJvntNNoyzRLLW8vDPq75gaVXYsTnlqCGu5E%2FlOJbZInno0rjZL%2Ffmlwtkwvtgn66OzA3eaH7w5cAL9Auqd3IiaOh9dmtABFdrgEWFIQA9kKQrVyNK7c392%2FnboYHXo4IIdifMRvFzXVmi9tKZl4xsZ24TrbB2k0CYjY2CXcM7enGwal%2B&X-Amz-Signature=13ffc16296f8674456ff3e0e8d5cbf180a394a439875b30f0bc4180ba07691db&X-Amz-SignedHeaders=host&x-id=GetObject)
