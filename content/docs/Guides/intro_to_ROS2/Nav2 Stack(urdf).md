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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC2RNKZT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgiGqWx7KAkgNaxH5hfsWnQfRJj2jzwvhtBj3u7rQZQIhAOINVQr0M5QZQxCT8gcEiWXC4%2FftFiSsjXwb%2FYO3IpFYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA%2FmNxUMRx7TZ194wq3AORYmMz6uuJSkvnoBuAoaXO6cWiQWMZbPLaqFeZKwKNanZgtmQf5GNE9Vky3TfJuNnrP3g5PhnV0CBCQNTJBvOEYHOO0zUy2ScK5qAtkYtvIDUGgaVDIJk%2BQ4hoz63BA0csDI%2FXQXN5FQqhG3zsFieeOgp%2F8WY0Rjwf6twMJCSgCeI8%2Bu3HfMqfdFnpWSK1KRYtUxwHVZXzzDCvbn3vkntscboeZbr44575CjkxeKZ%2BArdHpTguPDoV4NGL1%2FK2v0%2BemF7UFjxv7v%2BSCDtavlLRMKLxye5KOeUw4Qo9yvcGKMLkkZ6UhGpufqUxhDu6quFMasA2EW1ceqKK09lWJ0SNyrtJXwdnkBI6ztAWP9F9fBFgR%2FYb5GbsbUJvAcViGMlHYWhijI1f2wk0x3Sa99RCn6JH9g3xSxpk406WL4SCm3YR%2BzbJw7rzLOYSYb8hWqAGU%2BySHMQm3kZIKTaOyxzfeAuKrcX7hUxp1RNk%2BgL18TrvGt9mEsOIAAZey8YDlC93Gf38ASdPYAdW31ldSakvg8Uj3nJfjjAy36Kog8zfGP8Oh4w1mKfePHxqs6UKWym9uoLfdrS3wSBjrimZ5aSRDP18zekrpug9ozggTGYaR0EIHoRP6YssZGVePDC9x%2FbDBjqkAUSlwVXnwb8wNhPNjQWsnz2h7vRzfQYCsT48n7uomgjiDzb4swqYHhHD3aCxrQvHvTMylsrQGKLaWv4zl%2BUcq20P3PAGTCW1qjZRIGcNCFPcbVn2AoJpj5XSZIxg7GmtK28XVKgytFZDV8NdWJekx1kSTlTTXPKZ8%2BUs3RSPhYFs3eivsdZemKtKD0LbkFCgsczjj89%2FFJhfJsMBEJTBvwUZHwaR&X-Amz-Signature=79ddd7d4f4f7444cf393fbe5ae17876505c28928495b98bf2c28c5eac4d0f3d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC2RNKZT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgiGqWx7KAkgNaxH5hfsWnQfRJj2jzwvhtBj3u7rQZQIhAOINVQr0M5QZQxCT8gcEiWXC4%2FftFiSsjXwb%2FYO3IpFYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA%2FmNxUMRx7TZ194wq3AORYmMz6uuJSkvnoBuAoaXO6cWiQWMZbPLaqFeZKwKNanZgtmQf5GNE9Vky3TfJuNnrP3g5PhnV0CBCQNTJBvOEYHOO0zUy2ScK5qAtkYtvIDUGgaVDIJk%2BQ4hoz63BA0csDI%2FXQXN5FQqhG3zsFieeOgp%2F8WY0Rjwf6twMJCSgCeI8%2Bu3HfMqfdFnpWSK1KRYtUxwHVZXzzDCvbn3vkntscboeZbr44575CjkxeKZ%2BArdHpTguPDoV4NGL1%2FK2v0%2BemF7UFjxv7v%2BSCDtavlLRMKLxye5KOeUw4Qo9yvcGKMLkkZ6UhGpufqUxhDu6quFMasA2EW1ceqKK09lWJ0SNyrtJXwdnkBI6ztAWP9F9fBFgR%2FYb5GbsbUJvAcViGMlHYWhijI1f2wk0x3Sa99RCn6JH9g3xSxpk406WL4SCm3YR%2BzbJw7rzLOYSYb8hWqAGU%2BySHMQm3kZIKTaOyxzfeAuKrcX7hUxp1RNk%2BgL18TrvGt9mEsOIAAZey8YDlC93Gf38ASdPYAdW31ldSakvg8Uj3nJfjjAy36Kog8zfGP8Oh4w1mKfePHxqs6UKWym9uoLfdrS3wSBjrimZ5aSRDP18zekrpug9ozggTGYaR0EIHoRP6YssZGVePDC9x%2FbDBjqkAUSlwVXnwb8wNhPNjQWsnz2h7vRzfQYCsT48n7uomgjiDzb4swqYHhHD3aCxrQvHvTMylsrQGKLaWv4zl%2BUcq20P3PAGTCW1qjZRIGcNCFPcbVn2AoJpj5XSZIxg7GmtK28XVKgytFZDV8NdWJekx1kSTlTTXPKZ8%2BUs3RSPhYFs3eivsdZemKtKD0LbkFCgsczjj89%2FFJhfJsMBEJTBvwUZHwaR&X-Amz-Signature=59c370ef3f1eb20f6cedb15ad5c51b092be920796928f0138e7007cf693f35ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC2RNKZT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgiGqWx7KAkgNaxH5hfsWnQfRJj2jzwvhtBj3u7rQZQIhAOINVQr0M5QZQxCT8gcEiWXC4%2FftFiSsjXwb%2FYO3IpFYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA%2FmNxUMRx7TZ194wq3AORYmMz6uuJSkvnoBuAoaXO6cWiQWMZbPLaqFeZKwKNanZgtmQf5GNE9Vky3TfJuNnrP3g5PhnV0CBCQNTJBvOEYHOO0zUy2ScK5qAtkYtvIDUGgaVDIJk%2BQ4hoz63BA0csDI%2FXQXN5FQqhG3zsFieeOgp%2F8WY0Rjwf6twMJCSgCeI8%2Bu3HfMqfdFnpWSK1KRYtUxwHVZXzzDCvbn3vkntscboeZbr44575CjkxeKZ%2BArdHpTguPDoV4NGL1%2FK2v0%2BemF7UFjxv7v%2BSCDtavlLRMKLxye5KOeUw4Qo9yvcGKMLkkZ6UhGpufqUxhDu6quFMasA2EW1ceqKK09lWJ0SNyrtJXwdnkBI6ztAWP9F9fBFgR%2FYb5GbsbUJvAcViGMlHYWhijI1f2wk0x3Sa99RCn6JH9g3xSxpk406WL4SCm3YR%2BzbJw7rzLOYSYb8hWqAGU%2BySHMQm3kZIKTaOyxzfeAuKrcX7hUxp1RNk%2BgL18TrvGt9mEsOIAAZey8YDlC93Gf38ASdPYAdW31ldSakvg8Uj3nJfjjAy36Kog8zfGP8Oh4w1mKfePHxqs6UKWym9uoLfdrS3wSBjrimZ5aSRDP18zekrpug9ozggTGYaR0EIHoRP6YssZGVePDC9x%2FbDBjqkAUSlwVXnwb8wNhPNjQWsnz2h7vRzfQYCsT48n7uomgjiDzb4swqYHhHD3aCxrQvHvTMylsrQGKLaWv4zl%2BUcq20P3PAGTCW1qjZRIGcNCFPcbVn2AoJpj5XSZIxg7GmtK28XVKgytFZDV8NdWJekx1kSTlTTXPKZ8%2BUs3RSPhYFs3eivsdZemKtKD0LbkFCgsczjj89%2FFJhfJsMBEJTBvwUZHwaR&X-Amz-Signature=2d2c62376b8291d91c5969599ba61a7db23d3db4d572fdfd73ff4ea0b08a7f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC2RNKZT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgiGqWx7KAkgNaxH5hfsWnQfRJj2jzwvhtBj3u7rQZQIhAOINVQr0M5QZQxCT8gcEiWXC4%2FftFiSsjXwb%2FYO3IpFYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA%2FmNxUMRx7TZ194wq3AORYmMz6uuJSkvnoBuAoaXO6cWiQWMZbPLaqFeZKwKNanZgtmQf5GNE9Vky3TfJuNnrP3g5PhnV0CBCQNTJBvOEYHOO0zUy2ScK5qAtkYtvIDUGgaVDIJk%2BQ4hoz63BA0csDI%2FXQXN5FQqhG3zsFieeOgp%2F8WY0Rjwf6twMJCSgCeI8%2Bu3HfMqfdFnpWSK1KRYtUxwHVZXzzDCvbn3vkntscboeZbr44575CjkxeKZ%2BArdHpTguPDoV4NGL1%2FK2v0%2BemF7UFjxv7v%2BSCDtavlLRMKLxye5KOeUw4Qo9yvcGKMLkkZ6UhGpufqUxhDu6quFMasA2EW1ceqKK09lWJ0SNyrtJXwdnkBI6ztAWP9F9fBFgR%2FYb5GbsbUJvAcViGMlHYWhijI1f2wk0x3Sa99RCn6JH9g3xSxpk406WL4SCm3YR%2BzbJw7rzLOYSYb8hWqAGU%2BySHMQm3kZIKTaOyxzfeAuKrcX7hUxp1RNk%2BgL18TrvGt9mEsOIAAZey8YDlC93Gf38ASdPYAdW31ldSakvg8Uj3nJfjjAy36Kog8zfGP8Oh4w1mKfePHxqs6UKWym9uoLfdrS3wSBjrimZ5aSRDP18zekrpug9ozggTGYaR0EIHoRP6YssZGVePDC9x%2FbDBjqkAUSlwVXnwb8wNhPNjQWsnz2h7vRzfQYCsT48n7uomgjiDzb4swqYHhHD3aCxrQvHvTMylsrQGKLaWv4zl%2BUcq20P3PAGTCW1qjZRIGcNCFPcbVn2AoJpj5XSZIxg7GmtK28XVKgytFZDV8NdWJekx1kSTlTTXPKZ8%2BUs3RSPhYFs3eivsdZemKtKD0LbkFCgsczjj89%2FFJhfJsMBEJTBvwUZHwaR&X-Amz-Signature=e86be37919b94591da0b6e28169eed28c61d8f3e7b1ea020598a64c98fc7b4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC2RNKZT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgiGqWx7KAkgNaxH5hfsWnQfRJj2jzwvhtBj3u7rQZQIhAOINVQr0M5QZQxCT8gcEiWXC4%2FftFiSsjXwb%2FYO3IpFYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA%2FmNxUMRx7TZ194wq3AORYmMz6uuJSkvnoBuAoaXO6cWiQWMZbPLaqFeZKwKNanZgtmQf5GNE9Vky3TfJuNnrP3g5PhnV0CBCQNTJBvOEYHOO0zUy2ScK5qAtkYtvIDUGgaVDIJk%2BQ4hoz63BA0csDI%2FXQXN5FQqhG3zsFieeOgp%2F8WY0Rjwf6twMJCSgCeI8%2Bu3HfMqfdFnpWSK1KRYtUxwHVZXzzDCvbn3vkntscboeZbr44575CjkxeKZ%2BArdHpTguPDoV4NGL1%2FK2v0%2BemF7UFjxv7v%2BSCDtavlLRMKLxye5KOeUw4Qo9yvcGKMLkkZ6UhGpufqUxhDu6quFMasA2EW1ceqKK09lWJ0SNyrtJXwdnkBI6ztAWP9F9fBFgR%2FYb5GbsbUJvAcViGMlHYWhijI1f2wk0x3Sa99RCn6JH9g3xSxpk406WL4SCm3YR%2BzbJw7rzLOYSYb8hWqAGU%2BySHMQm3kZIKTaOyxzfeAuKrcX7hUxp1RNk%2BgL18TrvGt9mEsOIAAZey8YDlC93Gf38ASdPYAdW31ldSakvg8Uj3nJfjjAy36Kog8zfGP8Oh4w1mKfePHxqs6UKWym9uoLfdrS3wSBjrimZ5aSRDP18zekrpug9ozggTGYaR0EIHoRP6YssZGVePDC9x%2FbDBjqkAUSlwVXnwb8wNhPNjQWsnz2h7vRzfQYCsT48n7uomgjiDzb4swqYHhHD3aCxrQvHvTMylsrQGKLaWv4zl%2BUcq20P3PAGTCW1qjZRIGcNCFPcbVn2AoJpj5XSZIxg7GmtK28XVKgytFZDV8NdWJekx1kSTlTTXPKZ8%2BUs3RSPhYFs3eivsdZemKtKD0LbkFCgsczjj89%2FFJhfJsMBEJTBvwUZHwaR&X-Amz-Signature=680b4f9c81d571e11eb92291cbb21d926723144ae347cb19a3e94e125df38d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC2RNKZT%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgiGqWx7KAkgNaxH5hfsWnQfRJj2jzwvhtBj3u7rQZQIhAOINVQr0M5QZQxCT8gcEiWXC4%2FftFiSsjXwb%2FYO3IpFYKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwA%2FmNxUMRx7TZ194wq3AORYmMz6uuJSkvnoBuAoaXO6cWiQWMZbPLaqFeZKwKNanZgtmQf5GNE9Vky3TfJuNnrP3g5PhnV0CBCQNTJBvOEYHOO0zUy2ScK5qAtkYtvIDUGgaVDIJk%2BQ4hoz63BA0csDI%2FXQXN5FQqhG3zsFieeOgp%2F8WY0Rjwf6twMJCSgCeI8%2Bu3HfMqfdFnpWSK1KRYtUxwHVZXzzDCvbn3vkntscboeZbr44575CjkxeKZ%2BArdHpTguPDoV4NGL1%2FK2v0%2BemF7UFjxv7v%2BSCDtavlLRMKLxye5KOeUw4Qo9yvcGKMLkkZ6UhGpufqUxhDu6quFMasA2EW1ceqKK09lWJ0SNyrtJXwdnkBI6ztAWP9F9fBFgR%2FYb5GbsbUJvAcViGMlHYWhijI1f2wk0x3Sa99RCn6JH9g3xSxpk406WL4SCm3YR%2BzbJw7rzLOYSYb8hWqAGU%2BySHMQm3kZIKTaOyxzfeAuKrcX7hUxp1RNk%2BgL18TrvGt9mEsOIAAZey8YDlC93Gf38ASdPYAdW31ldSakvg8Uj3nJfjjAy36Kog8zfGP8Oh4w1mKfePHxqs6UKWym9uoLfdrS3wSBjrimZ5aSRDP18zekrpug9ozggTGYaR0EIHoRP6YssZGVePDC9x%2FbDBjqkAUSlwVXnwb8wNhPNjQWsnz2h7vRzfQYCsT48n7uomgjiDzb4swqYHhHD3aCxrQvHvTMylsrQGKLaWv4zl%2BUcq20P3PAGTCW1qjZRIGcNCFPcbVn2AoJpj5XSZIxg7GmtK28XVKgytFZDV8NdWJekx1kSTlTTXPKZ8%2BUs3RSPhYFs3eivsdZemKtKD0LbkFCgsczjj89%2FFJhfJsMBEJTBvwUZHwaR&X-Amz-Signature=8cb9541f29429053c50ca1e76d678c6dae01a1b281c8a0ab426fc7fcb7bd2b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
