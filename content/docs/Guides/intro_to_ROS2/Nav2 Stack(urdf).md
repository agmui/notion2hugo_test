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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZEOAV3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0VGJX5zaZLa8T6wXILTgVNFjk5JunZY4d066Ro36lAQIhAMixPhN9wBfUm%2BJAlMa0xUhTM115Lr%2FjFJbAd93zXSUVKv8DCEsQABoMNjM3NDIzMTgzODA1Igws3hMEsWVRWhZaJHgq3AMchCTBqnHAzF9iwQFNIEa6XmInQBuSHzZIMXssdyKBqMDOj%2Bqgi153JZQBrpf%2FRbUTHBHlACVKg6L%2FlGC82B4BrvInJ2lZnshDQj2GDqSETNGAI1PJpsx3okmo0zEgzX0a8fiaVfKZmRFXG9FbGwfIAzl5wck2BC4CK3HgYB3mf32kA2yxnLfntQxTW%2BktjvTtMDZY7Ymo22Xpu4ZGooCd11zgWQ7ptTQcYYjj6r13FJracG178E%2FzRN%2Bl9GS4ECNdTt7RlTA%2Bgm9bPOjw%2Fn75TF6NaW2%2BR317lzv5G6O%2F%2F2QQDym40uB3o7sGn6ERHxHQFoFTnQuGrb5nFZMuLc3NnGwdZD2p3SEexcWj0c%2FYjcGnu7nkAJl6LrwRcyp0k33mG%2BJ%2Fwi%2BX9sLFsi4lrgbHfvgcgKPTWLAICVE4%2BD%2Bpe1gUvGw4JAVffjCAE99YrpqIXbXxoHfb1kABreEi4GZ7BRKK5mi32O%2BdAFxvs8LpLw4DlY%2BvxzE0JmlbEj6B26JH9oi3dlN3coqv4kZA9gGAfw%2Fx6rzLVKJ6hcxfP3zKPhUoQYs11Dtcp4U46KMU%2BMLMFYK3inPKdlNCLNLCNPTY3OPQxbKkSxLwkxxz3wQQsnScs3kd7gx1qm44AjDH36y%2BBjqkAf1YvXZ5jSLt5aMbyoY3EMjqic%2ByMMwqprcvj0OKlQ9eUNRkYN%2Bqe81DX%2BNQ7jio7i9adNJpaVbdXapUZ6HKvWjd0zdwcEvgEyZqxv%2B1Ps%2BN%2FswwFwuCTxmMnjmuyvMwGJ7TGKZE1Cjci78KM%2BTog0bpDk%2B%2Fm2Bq1%2F%2F330azd9ecIjVRT4fiFVNepO1%2BqAhb1VjapRM4T8z9xGpwPlICyQRGuM%2Bc&X-Amz-Signature=b7e4504ceea15e038d8f475a764c4123f05e8817381be2c1151f83eb3a8b0ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZEOAV3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0VGJX5zaZLa8T6wXILTgVNFjk5JunZY4d066Ro36lAQIhAMixPhN9wBfUm%2BJAlMa0xUhTM115Lr%2FjFJbAd93zXSUVKv8DCEsQABoMNjM3NDIzMTgzODA1Igws3hMEsWVRWhZaJHgq3AMchCTBqnHAzF9iwQFNIEa6XmInQBuSHzZIMXssdyKBqMDOj%2Bqgi153JZQBrpf%2FRbUTHBHlACVKg6L%2FlGC82B4BrvInJ2lZnshDQj2GDqSETNGAI1PJpsx3okmo0zEgzX0a8fiaVfKZmRFXG9FbGwfIAzl5wck2BC4CK3HgYB3mf32kA2yxnLfntQxTW%2BktjvTtMDZY7Ymo22Xpu4ZGooCd11zgWQ7ptTQcYYjj6r13FJracG178E%2FzRN%2Bl9GS4ECNdTt7RlTA%2Bgm9bPOjw%2Fn75TF6NaW2%2BR317lzv5G6O%2F%2F2QQDym40uB3o7sGn6ERHxHQFoFTnQuGrb5nFZMuLc3NnGwdZD2p3SEexcWj0c%2FYjcGnu7nkAJl6LrwRcyp0k33mG%2BJ%2Fwi%2BX9sLFsi4lrgbHfvgcgKPTWLAICVE4%2BD%2Bpe1gUvGw4JAVffjCAE99YrpqIXbXxoHfb1kABreEi4GZ7BRKK5mi32O%2BdAFxvs8LpLw4DlY%2BvxzE0JmlbEj6B26JH9oi3dlN3coqv4kZA9gGAfw%2Fx6rzLVKJ6hcxfP3zKPhUoQYs11Dtcp4U46KMU%2BMLMFYK3inPKdlNCLNLCNPTY3OPQxbKkSxLwkxxz3wQQsnScs3kd7gx1qm44AjDH36y%2BBjqkAf1YvXZ5jSLt5aMbyoY3EMjqic%2ByMMwqprcvj0OKlQ9eUNRkYN%2Bqe81DX%2BNQ7jio7i9adNJpaVbdXapUZ6HKvWjd0zdwcEvgEyZqxv%2B1Ps%2BN%2FswwFwuCTxmMnjmuyvMwGJ7TGKZE1Cjci78KM%2BTog0bpDk%2B%2Fm2Bq1%2F%2F330azd9ecIjVRT4fiFVNepO1%2BqAhb1VjapRM4T8z9xGpwPlICyQRGuM%2Bc&X-Amz-Signature=e82e380c61e14073a2c3c31aac2f7ade07c16f3f25115cac99ae71ad030606e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZEOAV3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0VGJX5zaZLa8T6wXILTgVNFjk5JunZY4d066Ro36lAQIhAMixPhN9wBfUm%2BJAlMa0xUhTM115Lr%2FjFJbAd93zXSUVKv8DCEsQABoMNjM3NDIzMTgzODA1Igws3hMEsWVRWhZaJHgq3AMchCTBqnHAzF9iwQFNIEa6XmInQBuSHzZIMXssdyKBqMDOj%2Bqgi153JZQBrpf%2FRbUTHBHlACVKg6L%2FlGC82B4BrvInJ2lZnshDQj2GDqSETNGAI1PJpsx3okmo0zEgzX0a8fiaVfKZmRFXG9FbGwfIAzl5wck2BC4CK3HgYB3mf32kA2yxnLfntQxTW%2BktjvTtMDZY7Ymo22Xpu4ZGooCd11zgWQ7ptTQcYYjj6r13FJracG178E%2FzRN%2Bl9GS4ECNdTt7RlTA%2Bgm9bPOjw%2Fn75TF6NaW2%2BR317lzv5G6O%2F%2F2QQDym40uB3o7sGn6ERHxHQFoFTnQuGrb5nFZMuLc3NnGwdZD2p3SEexcWj0c%2FYjcGnu7nkAJl6LrwRcyp0k33mG%2BJ%2Fwi%2BX9sLFsi4lrgbHfvgcgKPTWLAICVE4%2BD%2Bpe1gUvGw4JAVffjCAE99YrpqIXbXxoHfb1kABreEi4GZ7BRKK5mi32O%2BdAFxvs8LpLw4DlY%2BvxzE0JmlbEj6B26JH9oi3dlN3coqv4kZA9gGAfw%2Fx6rzLVKJ6hcxfP3zKPhUoQYs11Dtcp4U46KMU%2BMLMFYK3inPKdlNCLNLCNPTY3OPQxbKkSxLwkxxz3wQQsnScs3kd7gx1qm44AjDH36y%2BBjqkAf1YvXZ5jSLt5aMbyoY3EMjqic%2ByMMwqprcvj0OKlQ9eUNRkYN%2Bqe81DX%2BNQ7jio7i9adNJpaVbdXapUZ6HKvWjd0zdwcEvgEyZqxv%2B1Ps%2BN%2FswwFwuCTxmMnjmuyvMwGJ7TGKZE1Cjci78KM%2BTog0bpDk%2B%2Fm2Bq1%2F%2F330azd9ecIjVRT4fiFVNepO1%2BqAhb1VjapRM4T8z9xGpwPlICyQRGuM%2Bc&X-Amz-Signature=7821d3b60657bb3b50062c54268f8a2e37c2bc3954f86f2f934a12b61a58e723&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZEOAV3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0VGJX5zaZLa8T6wXILTgVNFjk5JunZY4d066Ro36lAQIhAMixPhN9wBfUm%2BJAlMa0xUhTM115Lr%2FjFJbAd93zXSUVKv8DCEsQABoMNjM3NDIzMTgzODA1Igws3hMEsWVRWhZaJHgq3AMchCTBqnHAzF9iwQFNIEa6XmInQBuSHzZIMXssdyKBqMDOj%2Bqgi153JZQBrpf%2FRbUTHBHlACVKg6L%2FlGC82B4BrvInJ2lZnshDQj2GDqSETNGAI1PJpsx3okmo0zEgzX0a8fiaVfKZmRFXG9FbGwfIAzl5wck2BC4CK3HgYB3mf32kA2yxnLfntQxTW%2BktjvTtMDZY7Ymo22Xpu4ZGooCd11zgWQ7ptTQcYYjj6r13FJracG178E%2FzRN%2Bl9GS4ECNdTt7RlTA%2Bgm9bPOjw%2Fn75TF6NaW2%2BR317lzv5G6O%2F%2F2QQDym40uB3o7sGn6ERHxHQFoFTnQuGrb5nFZMuLc3NnGwdZD2p3SEexcWj0c%2FYjcGnu7nkAJl6LrwRcyp0k33mG%2BJ%2Fwi%2BX9sLFsi4lrgbHfvgcgKPTWLAICVE4%2BD%2Bpe1gUvGw4JAVffjCAE99YrpqIXbXxoHfb1kABreEi4GZ7BRKK5mi32O%2BdAFxvs8LpLw4DlY%2BvxzE0JmlbEj6B26JH9oi3dlN3coqv4kZA9gGAfw%2Fx6rzLVKJ6hcxfP3zKPhUoQYs11Dtcp4U46KMU%2BMLMFYK3inPKdlNCLNLCNPTY3OPQxbKkSxLwkxxz3wQQsnScs3kd7gx1qm44AjDH36y%2BBjqkAf1YvXZ5jSLt5aMbyoY3EMjqic%2ByMMwqprcvj0OKlQ9eUNRkYN%2Bqe81DX%2BNQ7jio7i9adNJpaVbdXapUZ6HKvWjd0zdwcEvgEyZqxv%2B1Ps%2BN%2FswwFwuCTxmMnjmuyvMwGJ7TGKZE1Cjci78KM%2BTog0bpDk%2B%2Fm2Bq1%2F%2F330azd9ecIjVRT4fiFVNepO1%2BqAhb1VjapRM4T8z9xGpwPlICyQRGuM%2Bc&X-Amz-Signature=1418539a2e759854871719a114b5c23902321a68b5bce6be4bf103a8305fa546&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZEOAV3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0VGJX5zaZLa8T6wXILTgVNFjk5JunZY4d066Ro36lAQIhAMixPhN9wBfUm%2BJAlMa0xUhTM115Lr%2FjFJbAd93zXSUVKv8DCEsQABoMNjM3NDIzMTgzODA1Igws3hMEsWVRWhZaJHgq3AMchCTBqnHAzF9iwQFNIEa6XmInQBuSHzZIMXssdyKBqMDOj%2Bqgi153JZQBrpf%2FRbUTHBHlACVKg6L%2FlGC82B4BrvInJ2lZnshDQj2GDqSETNGAI1PJpsx3okmo0zEgzX0a8fiaVfKZmRFXG9FbGwfIAzl5wck2BC4CK3HgYB3mf32kA2yxnLfntQxTW%2BktjvTtMDZY7Ymo22Xpu4ZGooCd11zgWQ7ptTQcYYjj6r13FJracG178E%2FzRN%2Bl9GS4ECNdTt7RlTA%2Bgm9bPOjw%2Fn75TF6NaW2%2BR317lzv5G6O%2F%2F2QQDym40uB3o7sGn6ERHxHQFoFTnQuGrb5nFZMuLc3NnGwdZD2p3SEexcWj0c%2FYjcGnu7nkAJl6LrwRcyp0k33mG%2BJ%2Fwi%2BX9sLFsi4lrgbHfvgcgKPTWLAICVE4%2BD%2Bpe1gUvGw4JAVffjCAE99YrpqIXbXxoHfb1kABreEi4GZ7BRKK5mi32O%2BdAFxvs8LpLw4DlY%2BvxzE0JmlbEj6B26JH9oi3dlN3coqv4kZA9gGAfw%2Fx6rzLVKJ6hcxfP3zKPhUoQYs11Dtcp4U46KMU%2BMLMFYK3inPKdlNCLNLCNPTY3OPQxbKkSxLwkxxz3wQQsnScs3kd7gx1qm44AjDH36y%2BBjqkAf1YvXZ5jSLt5aMbyoY3EMjqic%2ByMMwqprcvj0OKlQ9eUNRkYN%2Bqe81DX%2BNQ7jio7i9adNJpaVbdXapUZ6HKvWjd0zdwcEvgEyZqxv%2B1Ps%2BN%2FswwFwuCTxmMnjmuyvMwGJ7TGKZE1Cjci78KM%2BTog0bpDk%2B%2Fm2Bq1%2F%2F330azd9ecIjVRT4fiFVNepO1%2BqAhb1VjapRM4T8z9xGpwPlICyQRGuM%2Bc&X-Amz-Signature=fe9ef19ecd3c92ea2cdc393ea835831fabc4c66633d635f73a9d34f488214d69&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZEOAV3%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T181116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC0VGJX5zaZLa8T6wXILTgVNFjk5JunZY4d066Ro36lAQIhAMixPhN9wBfUm%2BJAlMa0xUhTM115Lr%2FjFJbAd93zXSUVKv8DCEsQABoMNjM3NDIzMTgzODA1Igws3hMEsWVRWhZaJHgq3AMchCTBqnHAzF9iwQFNIEa6XmInQBuSHzZIMXssdyKBqMDOj%2Bqgi153JZQBrpf%2FRbUTHBHlACVKg6L%2FlGC82B4BrvInJ2lZnshDQj2GDqSETNGAI1PJpsx3okmo0zEgzX0a8fiaVfKZmRFXG9FbGwfIAzl5wck2BC4CK3HgYB3mf32kA2yxnLfntQxTW%2BktjvTtMDZY7Ymo22Xpu4ZGooCd11zgWQ7ptTQcYYjj6r13FJracG178E%2FzRN%2Bl9GS4ECNdTt7RlTA%2Bgm9bPOjw%2Fn75TF6NaW2%2BR317lzv5G6O%2F%2F2QQDym40uB3o7sGn6ERHxHQFoFTnQuGrb5nFZMuLc3NnGwdZD2p3SEexcWj0c%2FYjcGnu7nkAJl6LrwRcyp0k33mG%2BJ%2Fwi%2BX9sLFsi4lrgbHfvgcgKPTWLAICVE4%2BD%2Bpe1gUvGw4JAVffjCAE99YrpqIXbXxoHfb1kABreEi4GZ7BRKK5mi32O%2BdAFxvs8LpLw4DlY%2BvxzE0JmlbEj6B26JH9oi3dlN3coqv4kZA9gGAfw%2Fx6rzLVKJ6hcxfP3zKPhUoQYs11Dtcp4U46KMU%2BMLMFYK3inPKdlNCLNLCNPTY3OPQxbKkSxLwkxxz3wQQsnScs3kd7gx1qm44AjDH36y%2BBjqkAf1YvXZ5jSLt5aMbyoY3EMjqic%2ByMMwqprcvj0OKlQ9eUNRkYN%2Bqe81DX%2BNQ7jio7i9adNJpaVbdXapUZ6HKvWjd0zdwcEvgEyZqxv%2B1Ps%2BN%2FswwFwuCTxmMnjmuyvMwGJ7TGKZE1Cjci78KM%2BTog0bpDk%2B%2Fm2Bq1%2F%2F330azd9ecIjVRT4fiFVNepO1%2BqAhb1VjapRM4T8z9xGpwPlICyQRGuM%2Bc&X-Amz-Signature=6683405ece711b7df413e30398e384df544e2b5c0f05ad0eea788bcd3f19d4ee&X-Amz-SignedHeaders=host&x-id=GetObject)
