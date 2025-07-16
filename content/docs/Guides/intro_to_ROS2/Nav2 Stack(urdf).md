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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YGEW7H%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICrN3sEzp6aA5UbZK9mw6JSuHLCp%2BRwXy5KAds9fAKe7AiBJW4wMmcx6WnWfcGsQwRSzOAANHM2uo51uPdftgRPqzyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMce1QEdYLeG3FYX%2F5KtwDhxSVe9R6rpc8Nl1hDYR%2B9frWojTeDZj8G2%2BsSKM%2Fm9h9cJ0k2ztt6P0OqS8wodK6KWzP8FTHJ3QGvh0pau%2FGT%2BLWXgQjIUhvrLCB2U157aq3hgGXZh9jFd7q0cP9HCxSmrPMrN5D0HYjBfYczhpeQSvDTRYV7i0wMjzAomNWWBIejZtJKID%2B00Y4co26yPF9JyuKdFsX1VidbeMP106YdE9Y4OLWDYYUfqZduOQG1Xwy4hLQi2oOxTECxS7SLArrK8m4aSY2kp05DySzCYVYooB60AGxeSPqxSRnfz%2Fpw2rsZsEsMAMOPuLtYOMdeE2THn4OPI%2BQcUV2yUgfmTCZJ2hj5DNlKaQ1Uv3AyRXP1EaAKtR2ZtLJFi6aRbGcreH2SIPqJq9l6d1W8tgSb8QPCyYuwbV4ZBars3UpZGsG88rf5HBU015qFWdTtNj1lKR8woKhzoooP3LnL0ZT1I8kpOW7wih24q1Dc2CA1WdT%2BXaGajRhc%2BZum5q0sNB3oiV5Bk1BVPPib2CveWfvVvdkiHh4mXngbYrUfzqyfw2Zx1E3%2Bj9%2B7lRNUU4Ys7hGgxlUB0nk3x3F4ONaLIM53ewY8gzR84rg8K%2Fh9GDOanta01UykErDlBUYmSh8Ap4wupPewwY6pgFeFcoM6mIdzJzdPmeiIXQqBwUxHNt8bjlAm6Cv55IGnt%2FsRpwNb7Xw6hOnk%2FJEEk3JAMbz%2B1GJf7Tl5z8ZDOr5TQcIo632Toar1Es3ULH1HlehTeOKJCc8FFkN1Ot18otH5MWef30Ur1zjHiFSdBhoBeXyKY1qMXPPYbqPVSDVsbak9pcdrcsBX15n%2FgpfRmXHDQGpzY9EdKuH4cQtDkihOvibdj%2BN&X-Amz-Signature=0cd84dd8988b6cd17ae58efd798467618ac72e810863be6862afee4745ed4e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YGEW7H%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICrN3sEzp6aA5UbZK9mw6JSuHLCp%2BRwXy5KAds9fAKe7AiBJW4wMmcx6WnWfcGsQwRSzOAANHM2uo51uPdftgRPqzyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMce1QEdYLeG3FYX%2F5KtwDhxSVe9R6rpc8Nl1hDYR%2B9frWojTeDZj8G2%2BsSKM%2Fm9h9cJ0k2ztt6P0OqS8wodK6KWzP8FTHJ3QGvh0pau%2FGT%2BLWXgQjIUhvrLCB2U157aq3hgGXZh9jFd7q0cP9HCxSmrPMrN5D0HYjBfYczhpeQSvDTRYV7i0wMjzAomNWWBIejZtJKID%2B00Y4co26yPF9JyuKdFsX1VidbeMP106YdE9Y4OLWDYYUfqZduOQG1Xwy4hLQi2oOxTECxS7SLArrK8m4aSY2kp05DySzCYVYooB60AGxeSPqxSRnfz%2Fpw2rsZsEsMAMOPuLtYOMdeE2THn4OPI%2BQcUV2yUgfmTCZJ2hj5DNlKaQ1Uv3AyRXP1EaAKtR2ZtLJFi6aRbGcreH2SIPqJq9l6d1W8tgSb8QPCyYuwbV4ZBars3UpZGsG88rf5HBU015qFWdTtNj1lKR8woKhzoooP3LnL0ZT1I8kpOW7wih24q1Dc2CA1WdT%2BXaGajRhc%2BZum5q0sNB3oiV5Bk1BVPPib2CveWfvVvdkiHh4mXngbYrUfzqyfw2Zx1E3%2Bj9%2B7lRNUU4Ys7hGgxlUB0nk3x3F4ONaLIM53ewY8gzR84rg8K%2Fh9GDOanta01UykErDlBUYmSh8Ap4wupPewwY6pgFeFcoM6mIdzJzdPmeiIXQqBwUxHNt8bjlAm6Cv55IGnt%2FsRpwNb7Xw6hOnk%2FJEEk3JAMbz%2B1GJf7Tl5z8ZDOr5TQcIo632Toar1Es3ULH1HlehTeOKJCc8FFkN1Ot18otH5MWef30Ur1zjHiFSdBhoBeXyKY1qMXPPYbqPVSDVsbak9pcdrcsBX15n%2FgpfRmXHDQGpzY9EdKuH4cQtDkihOvibdj%2BN&X-Amz-Signature=d3ea8e916fb50789ff9129561fcccfb5c2307e2b061bc717b8b65b9026db3ffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YGEW7H%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICrN3sEzp6aA5UbZK9mw6JSuHLCp%2BRwXy5KAds9fAKe7AiBJW4wMmcx6WnWfcGsQwRSzOAANHM2uo51uPdftgRPqzyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMce1QEdYLeG3FYX%2F5KtwDhxSVe9R6rpc8Nl1hDYR%2B9frWojTeDZj8G2%2BsSKM%2Fm9h9cJ0k2ztt6P0OqS8wodK6KWzP8FTHJ3QGvh0pau%2FGT%2BLWXgQjIUhvrLCB2U157aq3hgGXZh9jFd7q0cP9HCxSmrPMrN5D0HYjBfYczhpeQSvDTRYV7i0wMjzAomNWWBIejZtJKID%2B00Y4co26yPF9JyuKdFsX1VidbeMP106YdE9Y4OLWDYYUfqZduOQG1Xwy4hLQi2oOxTECxS7SLArrK8m4aSY2kp05DySzCYVYooB60AGxeSPqxSRnfz%2Fpw2rsZsEsMAMOPuLtYOMdeE2THn4OPI%2BQcUV2yUgfmTCZJ2hj5DNlKaQ1Uv3AyRXP1EaAKtR2ZtLJFi6aRbGcreH2SIPqJq9l6d1W8tgSb8QPCyYuwbV4ZBars3UpZGsG88rf5HBU015qFWdTtNj1lKR8woKhzoooP3LnL0ZT1I8kpOW7wih24q1Dc2CA1WdT%2BXaGajRhc%2BZum5q0sNB3oiV5Bk1BVPPib2CveWfvVvdkiHh4mXngbYrUfzqyfw2Zx1E3%2Bj9%2B7lRNUU4Ys7hGgxlUB0nk3x3F4ONaLIM53ewY8gzR84rg8K%2Fh9GDOanta01UykErDlBUYmSh8Ap4wupPewwY6pgFeFcoM6mIdzJzdPmeiIXQqBwUxHNt8bjlAm6Cv55IGnt%2FsRpwNb7Xw6hOnk%2FJEEk3JAMbz%2B1GJf7Tl5z8ZDOr5TQcIo632Toar1Es3ULH1HlehTeOKJCc8FFkN1Ot18otH5MWef30Ur1zjHiFSdBhoBeXyKY1qMXPPYbqPVSDVsbak9pcdrcsBX15n%2FgpfRmXHDQGpzY9EdKuH4cQtDkihOvibdj%2BN&X-Amz-Signature=3251566d852dbf5584561c95e5dd8c13b21449df8931824bbd306cfc475d584f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YGEW7H%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICrN3sEzp6aA5UbZK9mw6JSuHLCp%2BRwXy5KAds9fAKe7AiBJW4wMmcx6WnWfcGsQwRSzOAANHM2uo51uPdftgRPqzyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMce1QEdYLeG3FYX%2F5KtwDhxSVe9R6rpc8Nl1hDYR%2B9frWojTeDZj8G2%2BsSKM%2Fm9h9cJ0k2ztt6P0OqS8wodK6KWzP8FTHJ3QGvh0pau%2FGT%2BLWXgQjIUhvrLCB2U157aq3hgGXZh9jFd7q0cP9HCxSmrPMrN5D0HYjBfYczhpeQSvDTRYV7i0wMjzAomNWWBIejZtJKID%2B00Y4co26yPF9JyuKdFsX1VidbeMP106YdE9Y4OLWDYYUfqZduOQG1Xwy4hLQi2oOxTECxS7SLArrK8m4aSY2kp05DySzCYVYooB60AGxeSPqxSRnfz%2Fpw2rsZsEsMAMOPuLtYOMdeE2THn4OPI%2BQcUV2yUgfmTCZJ2hj5DNlKaQ1Uv3AyRXP1EaAKtR2ZtLJFi6aRbGcreH2SIPqJq9l6d1W8tgSb8QPCyYuwbV4ZBars3UpZGsG88rf5HBU015qFWdTtNj1lKR8woKhzoooP3LnL0ZT1I8kpOW7wih24q1Dc2CA1WdT%2BXaGajRhc%2BZum5q0sNB3oiV5Bk1BVPPib2CveWfvVvdkiHh4mXngbYrUfzqyfw2Zx1E3%2Bj9%2B7lRNUU4Ys7hGgxlUB0nk3x3F4ONaLIM53ewY8gzR84rg8K%2Fh9GDOanta01UykErDlBUYmSh8Ap4wupPewwY6pgFeFcoM6mIdzJzdPmeiIXQqBwUxHNt8bjlAm6Cv55IGnt%2FsRpwNb7Xw6hOnk%2FJEEk3JAMbz%2B1GJf7Tl5z8ZDOr5TQcIo632Toar1Es3ULH1HlehTeOKJCc8FFkN1Ot18otH5MWef30Ur1zjHiFSdBhoBeXyKY1qMXPPYbqPVSDVsbak9pcdrcsBX15n%2FgpfRmXHDQGpzY9EdKuH4cQtDkihOvibdj%2BN&X-Amz-Signature=139858d040571721c551dc588cccdada72ab2436e54fc8a18d57e516f49360bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YGEW7H%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICrN3sEzp6aA5UbZK9mw6JSuHLCp%2BRwXy5KAds9fAKe7AiBJW4wMmcx6WnWfcGsQwRSzOAANHM2uo51uPdftgRPqzyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMce1QEdYLeG3FYX%2F5KtwDhxSVe9R6rpc8Nl1hDYR%2B9frWojTeDZj8G2%2BsSKM%2Fm9h9cJ0k2ztt6P0OqS8wodK6KWzP8FTHJ3QGvh0pau%2FGT%2BLWXgQjIUhvrLCB2U157aq3hgGXZh9jFd7q0cP9HCxSmrPMrN5D0HYjBfYczhpeQSvDTRYV7i0wMjzAomNWWBIejZtJKID%2B00Y4co26yPF9JyuKdFsX1VidbeMP106YdE9Y4OLWDYYUfqZduOQG1Xwy4hLQi2oOxTECxS7SLArrK8m4aSY2kp05DySzCYVYooB60AGxeSPqxSRnfz%2Fpw2rsZsEsMAMOPuLtYOMdeE2THn4OPI%2BQcUV2yUgfmTCZJ2hj5DNlKaQ1Uv3AyRXP1EaAKtR2ZtLJFi6aRbGcreH2SIPqJq9l6d1W8tgSb8QPCyYuwbV4ZBars3UpZGsG88rf5HBU015qFWdTtNj1lKR8woKhzoooP3LnL0ZT1I8kpOW7wih24q1Dc2CA1WdT%2BXaGajRhc%2BZum5q0sNB3oiV5Bk1BVPPib2CveWfvVvdkiHh4mXngbYrUfzqyfw2Zx1E3%2Bj9%2B7lRNUU4Ys7hGgxlUB0nk3x3F4ONaLIM53ewY8gzR84rg8K%2Fh9GDOanta01UykErDlBUYmSh8Ap4wupPewwY6pgFeFcoM6mIdzJzdPmeiIXQqBwUxHNt8bjlAm6Cv55IGnt%2FsRpwNb7Xw6hOnk%2FJEEk3JAMbz%2B1GJf7Tl5z8ZDOr5TQcIo632Toar1Es3ULH1HlehTeOKJCc8FFkN1Ot18otH5MWef30Ur1zjHiFSdBhoBeXyKY1qMXPPYbqPVSDVsbak9pcdrcsBX15n%2FgpfRmXHDQGpzY9EdKuH4cQtDkihOvibdj%2BN&X-Amz-Signature=16b87d9d05fff92ea96aee9b707411c172626e7a88c76caea3a214a3ae68bb27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YGEW7H%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICrN3sEzp6aA5UbZK9mw6JSuHLCp%2BRwXy5KAds9fAKe7AiBJW4wMmcx6WnWfcGsQwRSzOAANHM2uo51uPdftgRPqzyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMce1QEdYLeG3FYX%2F5KtwDhxSVe9R6rpc8Nl1hDYR%2B9frWojTeDZj8G2%2BsSKM%2Fm9h9cJ0k2ztt6P0OqS8wodK6KWzP8FTHJ3QGvh0pau%2FGT%2BLWXgQjIUhvrLCB2U157aq3hgGXZh9jFd7q0cP9HCxSmrPMrN5D0HYjBfYczhpeQSvDTRYV7i0wMjzAomNWWBIejZtJKID%2B00Y4co26yPF9JyuKdFsX1VidbeMP106YdE9Y4OLWDYYUfqZduOQG1Xwy4hLQi2oOxTECxS7SLArrK8m4aSY2kp05DySzCYVYooB60AGxeSPqxSRnfz%2Fpw2rsZsEsMAMOPuLtYOMdeE2THn4OPI%2BQcUV2yUgfmTCZJ2hj5DNlKaQ1Uv3AyRXP1EaAKtR2ZtLJFi6aRbGcreH2SIPqJq9l6d1W8tgSb8QPCyYuwbV4ZBars3UpZGsG88rf5HBU015qFWdTtNj1lKR8woKhzoooP3LnL0ZT1I8kpOW7wih24q1Dc2CA1WdT%2BXaGajRhc%2BZum5q0sNB3oiV5Bk1BVPPib2CveWfvVvdkiHh4mXngbYrUfzqyfw2Zx1E3%2Bj9%2B7lRNUU4Ys7hGgxlUB0nk3x3F4ONaLIM53ewY8gzR84rg8K%2Fh9GDOanta01UykErDlBUYmSh8Ap4wupPewwY6pgFeFcoM6mIdzJzdPmeiIXQqBwUxHNt8bjlAm6Cv55IGnt%2FsRpwNb7Xw6hOnk%2FJEEk3JAMbz%2B1GJf7Tl5z8ZDOr5TQcIo632Toar1Es3ULH1HlehTeOKJCc8FFkN1Ot18otH5MWef30Ur1zjHiFSdBhoBeXyKY1qMXPPYbqPVSDVsbak9pcdrcsBX15n%2FgpfRmXHDQGpzY9EdKuH4cQtDkihOvibdj%2BN&X-Amz-Signature=e289ab991a34fe4853c5ffde0cbbe0f9d865b61d14bf2066dd48a3a3224351c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
