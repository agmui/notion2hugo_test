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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4WT5RS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDLw9gTAHwtFNQeZ0YFP8UqAqprVgaTt2jc4q2ZLP2%2FAiAmmLb7hFN1Im6GaOyoRG%2Ba8Mn7jxddd8RV%2FmCAoSAQDiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FdOEuXy0aYux1M50KtwD1MS%2BrH2dSwoM5GAEXnbecsnYFBI6kFk3W6hL%2F5a0KoIxk8hemGVXy197tDBmPE8AHHzqdgWUMsQDJKN2KD8%2BDo0mOULDf8AC297NsAkt3W70fpF3%2B2Cpe8YRUuDkqV3YOutkeVFDTksl0X%2BNku1BcW8ghZ2GD5uMDVtInK5ylJgB%2FRs7CLz292p2pb3Ch%2BDSrc8YW%2BahfNetfmx3vQCDWscwqKNGfSz%2FfeeNnaZZrBYrd4Y7%2F3BHHSkKxnctYbpGZSWsWmFrxIkN27gJoRlsztemJHqLOZlC810XDWaiIX3QJHGzdL4ZPLFljbbno%2Btk4Zjn55LVIv%2FCC8BwEV4K0XQIpdIfJgf5nHsSq8QXMjtcWKoCDdaMV5gzF2%2FtkACgRpLX7dNxHUVu9HohRIwk7kRHXKqzi2hh3f%2Bz%2BhYi6OsQ420O8jQYYu3h7GlBtQKI6C%2F1BTRoGnmkRoMEYLHcGM7g7zapfPVJV7Qg1s60YxxdKu81hWdLVaSGRXS2Fan5AlOGf2Xw6awnQ77Z8VGfkEfc%2BQq5QQkmArD2YRmUgHot7botxbpJu2uL2mtETELxjfZlegZhhzOitDVkyqBNcUP6d6XT5nXB8jbnvKoDZzGPqPz8UWx%2BZk5YRxEw9YTLwwY6pgFerr99Z5VyXvlYtNA4M%2F1uQsDPIyDVn9Dm3cA%2Fzod68HCE4pJiOBu%2FRgOycYCoGZY3eqRw88VVfouOkWnjIfeIlcT6NO3qJDThFQS%2BWrZ6iWnVCVB6MvUjc%2FWqtlWDbQ7cSFv%2ByN72Up6MVJXW1AsBRv7i%2F8WPlHhhGiyg9QviT%2BJyZphtHa1Zbm3GodW1iTCdrc1y056%2B%2BO2PH5Ohg3kII9uN45oo&X-Amz-Signature=2566dc29306100608192cf73e79497e2fb12af462c495a82946fc63fad18cd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4WT5RS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDLw9gTAHwtFNQeZ0YFP8UqAqprVgaTt2jc4q2ZLP2%2FAiAmmLb7hFN1Im6GaOyoRG%2Ba8Mn7jxddd8RV%2FmCAoSAQDiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FdOEuXy0aYux1M50KtwD1MS%2BrH2dSwoM5GAEXnbecsnYFBI6kFk3W6hL%2F5a0KoIxk8hemGVXy197tDBmPE8AHHzqdgWUMsQDJKN2KD8%2BDo0mOULDf8AC297NsAkt3W70fpF3%2B2Cpe8YRUuDkqV3YOutkeVFDTksl0X%2BNku1BcW8ghZ2GD5uMDVtInK5ylJgB%2FRs7CLz292p2pb3Ch%2BDSrc8YW%2BahfNetfmx3vQCDWscwqKNGfSz%2FfeeNnaZZrBYrd4Y7%2F3BHHSkKxnctYbpGZSWsWmFrxIkN27gJoRlsztemJHqLOZlC810XDWaiIX3QJHGzdL4ZPLFljbbno%2Btk4Zjn55LVIv%2FCC8BwEV4K0XQIpdIfJgf5nHsSq8QXMjtcWKoCDdaMV5gzF2%2FtkACgRpLX7dNxHUVu9HohRIwk7kRHXKqzi2hh3f%2Bz%2BhYi6OsQ420O8jQYYu3h7GlBtQKI6C%2F1BTRoGnmkRoMEYLHcGM7g7zapfPVJV7Qg1s60YxxdKu81hWdLVaSGRXS2Fan5AlOGf2Xw6awnQ77Z8VGfkEfc%2BQq5QQkmArD2YRmUgHot7botxbpJu2uL2mtETELxjfZlegZhhzOitDVkyqBNcUP6d6XT5nXB8jbnvKoDZzGPqPz8UWx%2BZk5YRxEw9YTLwwY6pgFerr99Z5VyXvlYtNA4M%2F1uQsDPIyDVn9Dm3cA%2Fzod68HCE4pJiOBu%2FRgOycYCoGZY3eqRw88VVfouOkWnjIfeIlcT6NO3qJDThFQS%2BWrZ6iWnVCVB6MvUjc%2FWqtlWDbQ7cSFv%2ByN72Up6MVJXW1AsBRv7i%2F8WPlHhhGiyg9QviT%2BJyZphtHa1Zbm3GodW1iTCdrc1y056%2B%2BO2PH5Ohg3kII9uN45oo&X-Amz-Signature=a284e628efcc5675f5756c815a0c0e2185bc3e44b68b770298e8b5d0e1c1a092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4WT5RS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDLw9gTAHwtFNQeZ0YFP8UqAqprVgaTt2jc4q2ZLP2%2FAiAmmLb7hFN1Im6GaOyoRG%2Ba8Mn7jxddd8RV%2FmCAoSAQDiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FdOEuXy0aYux1M50KtwD1MS%2BrH2dSwoM5GAEXnbecsnYFBI6kFk3W6hL%2F5a0KoIxk8hemGVXy197tDBmPE8AHHzqdgWUMsQDJKN2KD8%2BDo0mOULDf8AC297NsAkt3W70fpF3%2B2Cpe8YRUuDkqV3YOutkeVFDTksl0X%2BNku1BcW8ghZ2GD5uMDVtInK5ylJgB%2FRs7CLz292p2pb3Ch%2BDSrc8YW%2BahfNetfmx3vQCDWscwqKNGfSz%2FfeeNnaZZrBYrd4Y7%2F3BHHSkKxnctYbpGZSWsWmFrxIkN27gJoRlsztemJHqLOZlC810XDWaiIX3QJHGzdL4ZPLFljbbno%2Btk4Zjn55LVIv%2FCC8BwEV4K0XQIpdIfJgf5nHsSq8QXMjtcWKoCDdaMV5gzF2%2FtkACgRpLX7dNxHUVu9HohRIwk7kRHXKqzi2hh3f%2Bz%2BhYi6OsQ420O8jQYYu3h7GlBtQKI6C%2F1BTRoGnmkRoMEYLHcGM7g7zapfPVJV7Qg1s60YxxdKu81hWdLVaSGRXS2Fan5AlOGf2Xw6awnQ77Z8VGfkEfc%2BQq5QQkmArD2YRmUgHot7botxbpJu2uL2mtETELxjfZlegZhhzOitDVkyqBNcUP6d6XT5nXB8jbnvKoDZzGPqPz8UWx%2BZk5YRxEw9YTLwwY6pgFerr99Z5VyXvlYtNA4M%2F1uQsDPIyDVn9Dm3cA%2Fzod68HCE4pJiOBu%2FRgOycYCoGZY3eqRw88VVfouOkWnjIfeIlcT6NO3qJDThFQS%2BWrZ6iWnVCVB6MvUjc%2FWqtlWDbQ7cSFv%2ByN72Up6MVJXW1AsBRv7i%2F8WPlHhhGiyg9QviT%2BJyZphtHa1Zbm3GodW1iTCdrc1y056%2B%2BO2PH5Ohg3kII9uN45oo&X-Amz-Signature=bd529cc63b2878b16da1bfa6e8d730be49121f47dc522b7ecf29e672703aaa7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4WT5RS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDLw9gTAHwtFNQeZ0YFP8UqAqprVgaTt2jc4q2ZLP2%2FAiAmmLb7hFN1Im6GaOyoRG%2Ba8Mn7jxddd8RV%2FmCAoSAQDiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FdOEuXy0aYux1M50KtwD1MS%2BrH2dSwoM5GAEXnbecsnYFBI6kFk3W6hL%2F5a0KoIxk8hemGVXy197tDBmPE8AHHzqdgWUMsQDJKN2KD8%2BDo0mOULDf8AC297NsAkt3W70fpF3%2B2Cpe8YRUuDkqV3YOutkeVFDTksl0X%2BNku1BcW8ghZ2GD5uMDVtInK5ylJgB%2FRs7CLz292p2pb3Ch%2BDSrc8YW%2BahfNetfmx3vQCDWscwqKNGfSz%2FfeeNnaZZrBYrd4Y7%2F3BHHSkKxnctYbpGZSWsWmFrxIkN27gJoRlsztemJHqLOZlC810XDWaiIX3QJHGzdL4ZPLFljbbno%2Btk4Zjn55LVIv%2FCC8BwEV4K0XQIpdIfJgf5nHsSq8QXMjtcWKoCDdaMV5gzF2%2FtkACgRpLX7dNxHUVu9HohRIwk7kRHXKqzi2hh3f%2Bz%2BhYi6OsQ420O8jQYYu3h7GlBtQKI6C%2F1BTRoGnmkRoMEYLHcGM7g7zapfPVJV7Qg1s60YxxdKu81hWdLVaSGRXS2Fan5AlOGf2Xw6awnQ77Z8VGfkEfc%2BQq5QQkmArD2YRmUgHot7botxbpJu2uL2mtETELxjfZlegZhhzOitDVkyqBNcUP6d6XT5nXB8jbnvKoDZzGPqPz8UWx%2BZk5YRxEw9YTLwwY6pgFerr99Z5VyXvlYtNA4M%2F1uQsDPIyDVn9Dm3cA%2Fzod68HCE4pJiOBu%2FRgOycYCoGZY3eqRw88VVfouOkWnjIfeIlcT6NO3qJDThFQS%2BWrZ6iWnVCVB6MvUjc%2FWqtlWDbQ7cSFv%2ByN72Up6MVJXW1AsBRv7i%2F8WPlHhhGiyg9QviT%2BJyZphtHa1Zbm3GodW1iTCdrc1y056%2B%2BO2PH5Ohg3kII9uN45oo&X-Amz-Signature=5bba40b145a7d5bbc82a731813940755cc84ebe2c548c699808397181a6f71f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4WT5RS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDLw9gTAHwtFNQeZ0YFP8UqAqprVgaTt2jc4q2ZLP2%2FAiAmmLb7hFN1Im6GaOyoRG%2Ba8Mn7jxddd8RV%2FmCAoSAQDiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FdOEuXy0aYux1M50KtwD1MS%2BrH2dSwoM5GAEXnbecsnYFBI6kFk3W6hL%2F5a0KoIxk8hemGVXy197tDBmPE8AHHzqdgWUMsQDJKN2KD8%2BDo0mOULDf8AC297NsAkt3W70fpF3%2B2Cpe8YRUuDkqV3YOutkeVFDTksl0X%2BNku1BcW8ghZ2GD5uMDVtInK5ylJgB%2FRs7CLz292p2pb3Ch%2BDSrc8YW%2BahfNetfmx3vQCDWscwqKNGfSz%2FfeeNnaZZrBYrd4Y7%2F3BHHSkKxnctYbpGZSWsWmFrxIkN27gJoRlsztemJHqLOZlC810XDWaiIX3QJHGzdL4ZPLFljbbno%2Btk4Zjn55LVIv%2FCC8BwEV4K0XQIpdIfJgf5nHsSq8QXMjtcWKoCDdaMV5gzF2%2FtkACgRpLX7dNxHUVu9HohRIwk7kRHXKqzi2hh3f%2Bz%2BhYi6OsQ420O8jQYYu3h7GlBtQKI6C%2F1BTRoGnmkRoMEYLHcGM7g7zapfPVJV7Qg1s60YxxdKu81hWdLVaSGRXS2Fan5AlOGf2Xw6awnQ77Z8VGfkEfc%2BQq5QQkmArD2YRmUgHot7botxbpJu2uL2mtETELxjfZlegZhhzOitDVkyqBNcUP6d6XT5nXB8jbnvKoDZzGPqPz8UWx%2BZk5YRxEw9YTLwwY6pgFerr99Z5VyXvlYtNA4M%2F1uQsDPIyDVn9Dm3cA%2Fzod68HCE4pJiOBu%2FRgOycYCoGZY3eqRw88VVfouOkWnjIfeIlcT6NO3qJDThFQS%2BWrZ6iWnVCVB6MvUjc%2FWqtlWDbQ7cSFv%2ByN72Up6MVJXW1AsBRv7i%2F8WPlHhhGiyg9QviT%2BJyZphtHa1Zbm3GodW1iTCdrc1y056%2B%2BO2PH5Ohg3kII9uN45oo&X-Amz-Signature=b14d9d1644c0660429135c4c0ed36e65333d8d8db8605e480b92268b2b3d6d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4WT5RS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDLw9gTAHwtFNQeZ0YFP8UqAqprVgaTt2jc4q2ZLP2%2FAiAmmLb7hFN1Im6GaOyoRG%2Ba8Mn7jxddd8RV%2FmCAoSAQDiqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FdOEuXy0aYux1M50KtwD1MS%2BrH2dSwoM5GAEXnbecsnYFBI6kFk3W6hL%2F5a0KoIxk8hemGVXy197tDBmPE8AHHzqdgWUMsQDJKN2KD8%2BDo0mOULDf8AC297NsAkt3W70fpF3%2B2Cpe8YRUuDkqV3YOutkeVFDTksl0X%2BNku1BcW8ghZ2GD5uMDVtInK5ylJgB%2FRs7CLz292p2pb3Ch%2BDSrc8YW%2BahfNetfmx3vQCDWscwqKNGfSz%2FfeeNnaZZrBYrd4Y7%2F3BHHSkKxnctYbpGZSWsWmFrxIkN27gJoRlsztemJHqLOZlC810XDWaiIX3QJHGzdL4ZPLFljbbno%2Btk4Zjn55LVIv%2FCC8BwEV4K0XQIpdIfJgf5nHsSq8QXMjtcWKoCDdaMV5gzF2%2FtkACgRpLX7dNxHUVu9HohRIwk7kRHXKqzi2hh3f%2Bz%2BhYi6OsQ420O8jQYYu3h7GlBtQKI6C%2F1BTRoGnmkRoMEYLHcGM7g7zapfPVJV7Qg1s60YxxdKu81hWdLVaSGRXS2Fan5AlOGf2Xw6awnQ77Z8VGfkEfc%2BQq5QQkmArD2YRmUgHot7botxbpJu2uL2mtETELxjfZlegZhhzOitDVkyqBNcUP6d6XT5nXB8jbnvKoDZzGPqPz8UWx%2BZk5YRxEw9YTLwwY6pgFerr99Z5VyXvlYtNA4M%2F1uQsDPIyDVn9Dm3cA%2Fzod68HCE4pJiOBu%2FRgOycYCoGZY3eqRw88VVfouOkWnjIfeIlcT6NO3qJDThFQS%2BWrZ6iWnVCVB6MvUjc%2FWqtlWDbQ7cSFv%2ByN72Up6MVJXW1AsBRv7i%2F8WPlHhhGiyg9QviT%2BJyZphtHa1Zbm3GodW1iTCdrc1y056%2B%2BO2PH5Ohg3kII9uN45oo&X-Amz-Signature=6de69f050e262294864cfd4f9f03bbe19c81f16cc49f029b81acd59c776fb1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
