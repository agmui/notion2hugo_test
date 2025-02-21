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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUETPVV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgXiB5mS%2Bgbtwa697mGkoBWFVErLyHdteHoyTedmdhOQIgH9Z8FanL3HEFCgkQnqq0ktUIEehD%2Bbw80XhGiyRLYeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv5SUTsfi31Cge3zCrcA3ud3dEtUmbkTr9u%2BPsMrAIP%2FZCBTZr%2Fl6aw4N3PGgsLlJqKpEeUCjY3MuWDXQN4wDP5fUxbAjQw59hTJaasvz9%2FAx673ROyMM3sUzDSyhmYFH3gundQOPDpzf834ZErR7rjbQ6veLDLv93Efytdi44iBu%2FXCYrc5AzmTvfqcr8c3DjbR0i3YcwfPMH%2FEYtiMp34W47eMjyTWaiBdj1SjlxiZ6E%2BDfMAF0z6RXRM1qMAqoToArJMnX6LWWwapP7CfibtjWxFa%2FLwqOZnUtuN23nzmG0tBZjyKLWK0d%2BglRUkb83zMAnrTMqWFHc9nWOV7wa5AwuAyXtqz4m4HKoPAYuh8guR%2Fa%2FzZnw89s91ntqHxeSW4w%2Fv2yPMwgctpainYKJPCdkwoXdOxzFeDCQf%2F9QrYxl7NNFW4IZUFgYayz7B19WoYt5oVUbEbJ0iod5OvTt%2Befxn4e4tU4vK8b76Nwx%2FTruKjP%2B3I3N0sMi5E44R3TdjoFamveiw2TTvQwIUss4rkpikFhrcZV5jXNocK15gT17dFSObkoc0kBSs6HT2CcQ7ujRazibTHPrbmJgIMyPZgTcnWrnD%2BgU0pWCD6%2BGz9Nm%2BTHuoXM0%2Bwt1tDVq1GzDFkx0QhyG1jZX9MNuj4L0GOqUB5ChEqXX8fIiXsBN0vhIoh2O0remUhWubRvej9oYt2wxq8TgjCHv%2FRb4dRJyniHuGuDztwnlnn9HG73XQDA6n7kXXra7M%2F%2B4L89hIbDxyvpO7OEfOygP7K9j1bNV72xFx9tv2wumLBw2MaGP9NDQtiVyAap%2Fou42coC4xDRmbBhKUqg2WPuiWUq0mpIzktCTFuTYNG5n%2BWDpqiTGQaYDrmrzbinEA&X-Amz-Signature=a23ffca438ffb479c84f3a55525059f514392bf43dd5b8d501ee6074b2d2e801&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUETPVV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgXiB5mS%2Bgbtwa697mGkoBWFVErLyHdteHoyTedmdhOQIgH9Z8FanL3HEFCgkQnqq0ktUIEehD%2Bbw80XhGiyRLYeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv5SUTsfi31Cge3zCrcA3ud3dEtUmbkTr9u%2BPsMrAIP%2FZCBTZr%2Fl6aw4N3PGgsLlJqKpEeUCjY3MuWDXQN4wDP5fUxbAjQw59hTJaasvz9%2FAx673ROyMM3sUzDSyhmYFH3gundQOPDpzf834ZErR7rjbQ6veLDLv93Efytdi44iBu%2FXCYrc5AzmTvfqcr8c3DjbR0i3YcwfPMH%2FEYtiMp34W47eMjyTWaiBdj1SjlxiZ6E%2BDfMAF0z6RXRM1qMAqoToArJMnX6LWWwapP7CfibtjWxFa%2FLwqOZnUtuN23nzmG0tBZjyKLWK0d%2BglRUkb83zMAnrTMqWFHc9nWOV7wa5AwuAyXtqz4m4HKoPAYuh8guR%2Fa%2FzZnw89s91ntqHxeSW4w%2Fv2yPMwgctpainYKJPCdkwoXdOxzFeDCQf%2F9QrYxl7NNFW4IZUFgYayz7B19WoYt5oVUbEbJ0iod5OvTt%2Befxn4e4tU4vK8b76Nwx%2FTruKjP%2B3I3N0sMi5E44R3TdjoFamveiw2TTvQwIUss4rkpikFhrcZV5jXNocK15gT17dFSObkoc0kBSs6HT2CcQ7ujRazibTHPrbmJgIMyPZgTcnWrnD%2BgU0pWCD6%2BGz9Nm%2BTHuoXM0%2Bwt1tDVq1GzDFkx0QhyG1jZX9MNuj4L0GOqUB5ChEqXX8fIiXsBN0vhIoh2O0remUhWubRvej9oYt2wxq8TgjCHv%2FRb4dRJyniHuGuDztwnlnn9HG73XQDA6n7kXXra7M%2F%2B4L89hIbDxyvpO7OEfOygP7K9j1bNV72xFx9tv2wumLBw2MaGP9NDQtiVyAap%2Fou42coC4xDRmbBhKUqg2WPuiWUq0mpIzktCTFuTYNG5n%2BWDpqiTGQaYDrmrzbinEA&X-Amz-Signature=ce7c7f9791664d734790ada5c9d8436395828a54115338b1dbc7c5bd1c711c18&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUETPVV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgXiB5mS%2Bgbtwa697mGkoBWFVErLyHdteHoyTedmdhOQIgH9Z8FanL3HEFCgkQnqq0ktUIEehD%2Bbw80XhGiyRLYeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv5SUTsfi31Cge3zCrcA3ud3dEtUmbkTr9u%2BPsMrAIP%2FZCBTZr%2Fl6aw4N3PGgsLlJqKpEeUCjY3MuWDXQN4wDP5fUxbAjQw59hTJaasvz9%2FAx673ROyMM3sUzDSyhmYFH3gundQOPDpzf834ZErR7rjbQ6veLDLv93Efytdi44iBu%2FXCYrc5AzmTvfqcr8c3DjbR0i3YcwfPMH%2FEYtiMp34W47eMjyTWaiBdj1SjlxiZ6E%2BDfMAF0z6RXRM1qMAqoToArJMnX6LWWwapP7CfibtjWxFa%2FLwqOZnUtuN23nzmG0tBZjyKLWK0d%2BglRUkb83zMAnrTMqWFHc9nWOV7wa5AwuAyXtqz4m4HKoPAYuh8guR%2Fa%2FzZnw89s91ntqHxeSW4w%2Fv2yPMwgctpainYKJPCdkwoXdOxzFeDCQf%2F9QrYxl7NNFW4IZUFgYayz7B19WoYt5oVUbEbJ0iod5OvTt%2Befxn4e4tU4vK8b76Nwx%2FTruKjP%2B3I3N0sMi5E44R3TdjoFamveiw2TTvQwIUss4rkpikFhrcZV5jXNocK15gT17dFSObkoc0kBSs6HT2CcQ7ujRazibTHPrbmJgIMyPZgTcnWrnD%2BgU0pWCD6%2BGz9Nm%2BTHuoXM0%2Bwt1tDVq1GzDFkx0QhyG1jZX9MNuj4L0GOqUB5ChEqXX8fIiXsBN0vhIoh2O0remUhWubRvej9oYt2wxq8TgjCHv%2FRb4dRJyniHuGuDztwnlnn9HG73XQDA6n7kXXra7M%2F%2B4L89hIbDxyvpO7OEfOygP7K9j1bNV72xFx9tv2wumLBw2MaGP9NDQtiVyAap%2Fou42coC4xDRmbBhKUqg2WPuiWUq0mpIzktCTFuTYNG5n%2BWDpqiTGQaYDrmrzbinEA&X-Amz-Signature=3ae23f37b2e76f79dce0ea2f151d6565c7ba5a764ab7c58f56df6da3b3b54c0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUETPVV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgXiB5mS%2Bgbtwa697mGkoBWFVErLyHdteHoyTedmdhOQIgH9Z8FanL3HEFCgkQnqq0ktUIEehD%2Bbw80XhGiyRLYeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv5SUTsfi31Cge3zCrcA3ud3dEtUmbkTr9u%2BPsMrAIP%2FZCBTZr%2Fl6aw4N3PGgsLlJqKpEeUCjY3MuWDXQN4wDP5fUxbAjQw59hTJaasvz9%2FAx673ROyMM3sUzDSyhmYFH3gundQOPDpzf834ZErR7rjbQ6veLDLv93Efytdi44iBu%2FXCYrc5AzmTvfqcr8c3DjbR0i3YcwfPMH%2FEYtiMp34W47eMjyTWaiBdj1SjlxiZ6E%2BDfMAF0z6RXRM1qMAqoToArJMnX6LWWwapP7CfibtjWxFa%2FLwqOZnUtuN23nzmG0tBZjyKLWK0d%2BglRUkb83zMAnrTMqWFHc9nWOV7wa5AwuAyXtqz4m4HKoPAYuh8guR%2Fa%2FzZnw89s91ntqHxeSW4w%2Fv2yPMwgctpainYKJPCdkwoXdOxzFeDCQf%2F9QrYxl7NNFW4IZUFgYayz7B19WoYt5oVUbEbJ0iod5OvTt%2Befxn4e4tU4vK8b76Nwx%2FTruKjP%2B3I3N0sMi5E44R3TdjoFamveiw2TTvQwIUss4rkpikFhrcZV5jXNocK15gT17dFSObkoc0kBSs6HT2CcQ7ujRazibTHPrbmJgIMyPZgTcnWrnD%2BgU0pWCD6%2BGz9Nm%2BTHuoXM0%2Bwt1tDVq1GzDFkx0QhyG1jZX9MNuj4L0GOqUB5ChEqXX8fIiXsBN0vhIoh2O0remUhWubRvej9oYt2wxq8TgjCHv%2FRb4dRJyniHuGuDztwnlnn9HG73XQDA6n7kXXra7M%2F%2B4L89hIbDxyvpO7OEfOygP7K9j1bNV72xFx9tv2wumLBw2MaGP9NDQtiVyAap%2Fou42coC4xDRmbBhKUqg2WPuiWUq0mpIzktCTFuTYNG5n%2BWDpqiTGQaYDrmrzbinEA&X-Amz-Signature=9a1ce5defa9bac1b9ed5e9fa366d5a4bfec55e087e0fc51f3b313b4c0861c2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUETPVV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgXiB5mS%2Bgbtwa697mGkoBWFVErLyHdteHoyTedmdhOQIgH9Z8FanL3HEFCgkQnqq0ktUIEehD%2Bbw80XhGiyRLYeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv5SUTsfi31Cge3zCrcA3ud3dEtUmbkTr9u%2BPsMrAIP%2FZCBTZr%2Fl6aw4N3PGgsLlJqKpEeUCjY3MuWDXQN4wDP5fUxbAjQw59hTJaasvz9%2FAx673ROyMM3sUzDSyhmYFH3gundQOPDpzf834ZErR7rjbQ6veLDLv93Efytdi44iBu%2FXCYrc5AzmTvfqcr8c3DjbR0i3YcwfPMH%2FEYtiMp34W47eMjyTWaiBdj1SjlxiZ6E%2BDfMAF0z6RXRM1qMAqoToArJMnX6LWWwapP7CfibtjWxFa%2FLwqOZnUtuN23nzmG0tBZjyKLWK0d%2BglRUkb83zMAnrTMqWFHc9nWOV7wa5AwuAyXtqz4m4HKoPAYuh8guR%2Fa%2FzZnw89s91ntqHxeSW4w%2Fv2yPMwgctpainYKJPCdkwoXdOxzFeDCQf%2F9QrYxl7NNFW4IZUFgYayz7B19WoYt5oVUbEbJ0iod5OvTt%2Befxn4e4tU4vK8b76Nwx%2FTruKjP%2B3I3N0sMi5E44R3TdjoFamveiw2TTvQwIUss4rkpikFhrcZV5jXNocK15gT17dFSObkoc0kBSs6HT2CcQ7ujRazibTHPrbmJgIMyPZgTcnWrnD%2BgU0pWCD6%2BGz9Nm%2BTHuoXM0%2Bwt1tDVq1GzDFkx0QhyG1jZX9MNuj4L0GOqUB5ChEqXX8fIiXsBN0vhIoh2O0remUhWubRvej9oYt2wxq8TgjCHv%2FRb4dRJyniHuGuDztwnlnn9HG73XQDA6n7kXXra7M%2F%2B4L89hIbDxyvpO7OEfOygP7K9j1bNV72xFx9tv2wumLBw2MaGP9NDQtiVyAap%2Fou42coC4xDRmbBhKUqg2WPuiWUq0mpIzktCTFuTYNG5n%2BWDpqiTGQaYDrmrzbinEA&X-Amz-Signature=9ac86f8e25419391bd8e1c4fcb2965271fb8754444781adcddfc8f3e501741ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUETPVV%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgXiB5mS%2Bgbtwa697mGkoBWFVErLyHdteHoyTedmdhOQIgH9Z8FanL3HEFCgkQnqq0ktUIEehD%2Bbw80XhGiyRLYeEqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAv5SUTsfi31Cge3zCrcA3ud3dEtUmbkTr9u%2BPsMrAIP%2FZCBTZr%2Fl6aw4N3PGgsLlJqKpEeUCjY3MuWDXQN4wDP5fUxbAjQw59hTJaasvz9%2FAx673ROyMM3sUzDSyhmYFH3gundQOPDpzf834ZErR7rjbQ6veLDLv93Efytdi44iBu%2FXCYrc5AzmTvfqcr8c3DjbR0i3YcwfPMH%2FEYtiMp34W47eMjyTWaiBdj1SjlxiZ6E%2BDfMAF0z6RXRM1qMAqoToArJMnX6LWWwapP7CfibtjWxFa%2FLwqOZnUtuN23nzmG0tBZjyKLWK0d%2BglRUkb83zMAnrTMqWFHc9nWOV7wa5AwuAyXtqz4m4HKoPAYuh8guR%2Fa%2FzZnw89s91ntqHxeSW4w%2Fv2yPMwgctpainYKJPCdkwoXdOxzFeDCQf%2F9QrYxl7NNFW4IZUFgYayz7B19WoYt5oVUbEbJ0iod5OvTt%2Befxn4e4tU4vK8b76Nwx%2FTruKjP%2B3I3N0sMi5E44R3TdjoFamveiw2TTvQwIUss4rkpikFhrcZV5jXNocK15gT17dFSObkoc0kBSs6HT2CcQ7ujRazibTHPrbmJgIMyPZgTcnWrnD%2BgU0pWCD6%2BGz9Nm%2BTHuoXM0%2Bwt1tDVq1GzDFkx0QhyG1jZX9MNuj4L0GOqUB5ChEqXX8fIiXsBN0vhIoh2O0remUhWubRvej9oYt2wxq8TgjCHv%2FRb4dRJyniHuGuDztwnlnn9HG73XQDA6n7kXXra7M%2F%2B4L89hIbDxyvpO7OEfOygP7K9j1bNV72xFx9tv2wumLBw2MaGP9NDQtiVyAap%2Fou42coC4xDRmbBhKUqg2WPuiWUq0mpIzktCTFuTYNG5n%2BWDpqiTGQaYDrmrzbinEA&X-Amz-Signature=79d6c5a5cbaa6475ee61b4bec8913593fabb4e4826e16b4cb75bb34f41b7e2fc&X-Amz-SignedHeaders=host&x-id=GetObject)
