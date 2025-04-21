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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEIV2IOM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFNcMGIJ6EQgkVDy75IeoQGOKpqvrpG7Le5ntD26WFO9AiB4qGKjoYKePwlb59botZmAkHD5UuGiZBolyqZHRrhgqyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwjw3bAXs3UCc%2BzI%2FKtwDzgS5MDNQzHuOyH1gutuyhD5Q5u%2BhVX%2Fy%2By2Q3Y7NjYssDwfb%2FpnsCzxR2kOm7IICevvlTFBd24piIUJDYMlkBh30m4EktAsfq6pVJ6fPsXuilTXZKoW9w61NNKI5h6N5CPv%2BCvXxsjWqSfFl4E5spMGIZs8gzwjzkP2QSYjhh7GI9RvNjhA5qn3qrlbEeumVGRziABN8Kyf4dsGxDzYRE5XjuINghhzFApcbwI4UGSyevYAHIhlBAMnWBd1RnqWwif9XfSCP3yruo1fwfuFNfirecQE0N0cDFCgZZgG5oiQJa5k1R4bLR4TIrYhYo9jVTNp1J0SOxxdmV1DBZdwdb%2BvBTkBa2cHJrDaf9yGmhFjGfJkfZEtzczhMlKOREZA6XtA%2Bak2nsM%2FpmV%2FuCIaTscGMEXGKvGHxE9gwYB4HBBXjcnVhPKUocFmWEiNl882UYt223BUqqBoH%2BxrJR1fMenk2VjnjFnLfn8uEUGpONKuIFCpQCPEWuZVzyVQialF8iy7owBqyX83xlHNkc3JUWkw6N4AuseznFnf4VvuZ805hWfYyoOuDLv46qqdXaNzolOXS%2FazFicN1YUmMmBOSi6XhjYqdAhPW9nk3mnE0v84oAWXgjjNcKsYwm40wqtOawAY6pgGFT6N0XH9SxwjW%2Bl95TYHd5yAgmnPsSMBiLGZT6PUqv7dRYtXYfhs3flmNH01ObvuJNbh6ov2E9NS77rjvRDN0WfxBPfbPPzpj1N94VrbjJUzaK29r97Ycza3syXHAyPuzsIZjJqEgyayFWutPXwjgoFyVR%2BLeIOKIFs%2FI77lCMGvjw8pKahdRYVavWw%2Bw8aD3Awlpc1njFfBvW7WUs68lUphnHmXp&X-Amz-Signature=2dc2d1c67dcbc460c0e90a5199ae646f47de47e546d90078415717938fea9bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEIV2IOM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFNcMGIJ6EQgkVDy75IeoQGOKpqvrpG7Le5ntD26WFO9AiB4qGKjoYKePwlb59botZmAkHD5UuGiZBolyqZHRrhgqyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwjw3bAXs3UCc%2BzI%2FKtwDzgS5MDNQzHuOyH1gutuyhD5Q5u%2BhVX%2Fy%2By2Q3Y7NjYssDwfb%2FpnsCzxR2kOm7IICevvlTFBd24piIUJDYMlkBh30m4EktAsfq6pVJ6fPsXuilTXZKoW9w61NNKI5h6N5CPv%2BCvXxsjWqSfFl4E5spMGIZs8gzwjzkP2QSYjhh7GI9RvNjhA5qn3qrlbEeumVGRziABN8Kyf4dsGxDzYRE5XjuINghhzFApcbwI4UGSyevYAHIhlBAMnWBd1RnqWwif9XfSCP3yruo1fwfuFNfirecQE0N0cDFCgZZgG5oiQJa5k1R4bLR4TIrYhYo9jVTNp1J0SOxxdmV1DBZdwdb%2BvBTkBa2cHJrDaf9yGmhFjGfJkfZEtzczhMlKOREZA6XtA%2Bak2nsM%2FpmV%2FuCIaTscGMEXGKvGHxE9gwYB4HBBXjcnVhPKUocFmWEiNl882UYt223BUqqBoH%2BxrJR1fMenk2VjnjFnLfn8uEUGpONKuIFCpQCPEWuZVzyVQialF8iy7owBqyX83xlHNkc3JUWkw6N4AuseznFnf4VvuZ805hWfYyoOuDLv46qqdXaNzolOXS%2FazFicN1YUmMmBOSi6XhjYqdAhPW9nk3mnE0v84oAWXgjjNcKsYwm40wqtOawAY6pgGFT6N0XH9SxwjW%2Bl95TYHd5yAgmnPsSMBiLGZT6PUqv7dRYtXYfhs3flmNH01ObvuJNbh6ov2E9NS77rjvRDN0WfxBPfbPPzpj1N94VrbjJUzaK29r97Ycza3syXHAyPuzsIZjJqEgyayFWutPXwjgoFyVR%2BLeIOKIFs%2FI77lCMGvjw8pKahdRYVavWw%2Bw8aD3Awlpc1njFfBvW7WUs68lUphnHmXp&X-Amz-Signature=be564770eaa0738dec5dab7cea708f880f27bb9dc38d272bfec2945537352259&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEIV2IOM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFNcMGIJ6EQgkVDy75IeoQGOKpqvrpG7Le5ntD26WFO9AiB4qGKjoYKePwlb59botZmAkHD5UuGiZBolyqZHRrhgqyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwjw3bAXs3UCc%2BzI%2FKtwDzgS5MDNQzHuOyH1gutuyhD5Q5u%2BhVX%2Fy%2By2Q3Y7NjYssDwfb%2FpnsCzxR2kOm7IICevvlTFBd24piIUJDYMlkBh30m4EktAsfq6pVJ6fPsXuilTXZKoW9w61NNKI5h6N5CPv%2BCvXxsjWqSfFl4E5spMGIZs8gzwjzkP2QSYjhh7GI9RvNjhA5qn3qrlbEeumVGRziABN8Kyf4dsGxDzYRE5XjuINghhzFApcbwI4UGSyevYAHIhlBAMnWBd1RnqWwif9XfSCP3yruo1fwfuFNfirecQE0N0cDFCgZZgG5oiQJa5k1R4bLR4TIrYhYo9jVTNp1J0SOxxdmV1DBZdwdb%2BvBTkBa2cHJrDaf9yGmhFjGfJkfZEtzczhMlKOREZA6XtA%2Bak2nsM%2FpmV%2FuCIaTscGMEXGKvGHxE9gwYB4HBBXjcnVhPKUocFmWEiNl882UYt223BUqqBoH%2BxrJR1fMenk2VjnjFnLfn8uEUGpONKuIFCpQCPEWuZVzyVQialF8iy7owBqyX83xlHNkc3JUWkw6N4AuseznFnf4VvuZ805hWfYyoOuDLv46qqdXaNzolOXS%2FazFicN1YUmMmBOSi6XhjYqdAhPW9nk3mnE0v84oAWXgjjNcKsYwm40wqtOawAY6pgGFT6N0XH9SxwjW%2Bl95TYHd5yAgmnPsSMBiLGZT6PUqv7dRYtXYfhs3flmNH01ObvuJNbh6ov2E9NS77rjvRDN0WfxBPfbPPzpj1N94VrbjJUzaK29r97Ycza3syXHAyPuzsIZjJqEgyayFWutPXwjgoFyVR%2BLeIOKIFs%2FI77lCMGvjw8pKahdRYVavWw%2Bw8aD3Awlpc1njFfBvW7WUs68lUphnHmXp&X-Amz-Signature=f67067446beecb52f394e734e942ddc129186e582ac0e0d62f6a3c6dc2bab395&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEIV2IOM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFNcMGIJ6EQgkVDy75IeoQGOKpqvrpG7Le5ntD26WFO9AiB4qGKjoYKePwlb59botZmAkHD5UuGiZBolyqZHRrhgqyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwjw3bAXs3UCc%2BzI%2FKtwDzgS5MDNQzHuOyH1gutuyhD5Q5u%2BhVX%2Fy%2By2Q3Y7NjYssDwfb%2FpnsCzxR2kOm7IICevvlTFBd24piIUJDYMlkBh30m4EktAsfq6pVJ6fPsXuilTXZKoW9w61NNKI5h6N5CPv%2BCvXxsjWqSfFl4E5spMGIZs8gzwjzkP2QSYjhh7GI9RvNjhA5qn3qrlbEeumVGRziABN8Kyf4dsGxDzYRE5XjuINghhzFApcbwI4UGSyevYAHIhlBAMnWBd1RnqWwif9XfSCP3yruo1fwfuFNfirecQE0N0cDFCgZZgG5oiQJa5k1R4bLR4TIrYhYo9jVTNp1J0SOxxdmV1DBZdwdb%2BvBTkBa2cHJrDaf9yGmhFjGfJkfZEtzczhMlKOREZA6XtA%2Bak2nsM%2FpmV%2FuCIaTscGMEXGKvGHxE9gwYB4HBBXjcnVhPKUocFmWEiNl882UYt223BUqqBoH%2BxrJR1fMenk2VjnjFnLfn8uEUGpONKuIFCpQCPEWuZVzyVQialF8iy7owBqyX83xlHNkc3JUWkw6N4AuseznFnf4VvuZ805hWfYyoOuDLv46qqdXaNzolOXS%2FazFicN1YUmMmBOSi6XhjYqdAhPW9nk3mnE0v84oAWXgjjNcKsYwm40wqtOawAY6pgGFT6N0XH9SxwjW%2Bl95TYHd5yAgmnPsSMBiLGZT6PUqv7dRYtXYfhs3flmNH01ObvuJNbh6ov2E9NS77rjvRDN0WfxBPfbPPzpj1N94VrbjJUzaK29r97Ycza3syXHAyPuzsIZjJqEgyayFWutPXwjgoFyVR%2BLeIOKIFs%2FI77lCMGvjw8pKahdRYVavWw%2Bw8aD3Awlpc1njFfBvW7WUs68lUphnHmXp&X-Amz-Signature=262579f23422a990c8333e26a1cc286cd9e1415561376c970a99d870ecf898aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEIV2IOM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFNcMGIJ6EQgkVDy75IeoQGOKpqvrpG7Le5ntD26WFO9AiB4qGKjoYKePwlb59botZmAkHD5UuGiZBolyqZHRrhgqyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwjw3bAXs3UCc%2BzI%2FKtwDzgS5MDNQzHuOyH1gutuyhD5Q5u%2BhVX%2Fy%2By2Q3Y7NjYssDwfb%2FpnsCzxR2kOm7IICevvlTFBd24piIUJDYMlkBh30m4EktAsfq6pVJ6fPsXuilTXZKoW9w61NNKI5h6N5CPv%2BCvXxsjWqSfFl4E5spMGIZs8gzwjzkP2QSYjhh7GI9RvNjhA5qn3qrlbEeumVGRziABN8Kyf4dsGxDzYRE5XjuINghhzFApcbwI4UGSyevYAHIhlBAMnWBd1RnqWwif9XfSCP3yruo1fwfuFNfirecQE0N0cDFCgZZgG5oiQJa5k1R4bLR4TIrYhYo9jVTNp1J0SOxxdmV1DBZdwdb%2BvBTkBa2cHJrDaf9yGmhFjGfJkfZEtzczhMlKOREZA6XtA%2Bak2nsM%2FpmV%2FuCIaTscGMEXGKvGHxE9gwYB4HBBXjcnVhPKUocFmWEiNl882UYt223BUqqBoH%2BxrJR1fMenk2VjnjFnLfn8uEUGpONKuIFCpQCPEWuZVzyVQialF8iy7owBqyX83xlHNkc3JUWkw6N4AuseznFnf4VvuZ805hWfYyoOuDLv46qqdXaNzolOXS%2FazFicN1YUmMmBOSi6XhjYqdAhPW9nk3mnE0v84oAWXgjjNcKsYwm40wqtOawAY6pgGFT6N0XH9SxwjW%2Bl95TYHd5yAgmnPsSMBiLGZT6PUqv7dRYtXYfhs3flmNH01ObvuJNbh6ov2E9NS77rjvRDN0WfxBPfbPPzpj1N94VrbjJUzaK29r97Ycza3syXHAyPuzsIZjJqEgyayFWutPXwjgoFyVR%2BLeIOKIFs%2FI77lCMGvjw8pKahdRYVavWw%2Bw8aD3Awlpc1njFfBvW7WUs68lUphnHmXp&X-Amz-Signature=be6b429e1fe5207324f0f7cf4039f7b9657e61393deb2f5ed78a50efbf5b0c86&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEIV2IOM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFNcMGIJ6EQgkVDy75IeoQGOKpqvrpG7Le5ntD26WFO9AiB4qGKjoYKePwlb59botZmAkHD5UuGiZBolyqZHRrhgqyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwjw3bAXs3UCc%2BzI%2FKtwDzgS5MDNQzHuOyH1gutuyhD5Q5u%2BhVX%2Fy%2By2Q3Y7NjYssDwfb%2FpnsCzxR2kOm7IICevvlTFBd24piIUJDYMlkBh30m4EktAsfq6pVJ6fPsXuilTXZKoW9w61NNKI5h6N5CPv%2BCvXxsjWqSfFl4E5spMGIZs8gzwjzkP2QSYjhh7GI9RvNjhA5qn3qrlbEeumVGRziABN8Kyf4dsGxDzYRE5XjuINghhzFApcbwI4UGSyevYAHIhlBAMnWBd1RnqWwif9XfSCP3yruo1fwfuFNfirecQE0N0cDFCgZZgG5oiQJa5k1R4bLR4TIrYhYo9jVTNp1J0SOxxdmV1DBZdwdb%2BvBTkBa2cHJrDaf9yGmhFjGfJkfZEtzczhMlKOREZA6XtA%2Bak2nsM%2FpmV%2FuCIaTscGMEXGKvGHxE9gwYB4HBBXjcnVhPKUocFmWEiNl882UYt223BUqqBoH%2BxrJR1fMenk2VjnjFnLfn8uEUGpONKuIFCpQCPEWuZVzyVQialF8iy7owBqyX83xlHNkc3JUWkw6N4AuseznFnf4VvuZ805hWfYyoOuDLv46qqdXaNzolOXS%2FazFicN1YUmMmBOSi6XhjYqdAhPW9nk3mnE0v84oAWXgjjNcKsYwm40wqtOawAY6pgGFT6N0XH9SxwjW%2Bl95TYHd5yAgmnPsSMBiLGZT6PUqv7dRYtXYfhs3flmNH01ObvuJNbh6ov2E9NS77rjvRDN0WfxBPfbPPzpj1N94VrbjJUzaK29r97Ycza3syXHAyPuzsIZjJqEgyayFWutPXwjgoFyVR%2BLeIOKIFs%2FI77lCMGvjw8pKahdRYVavWw%2Bw8aD3Awlpc1njFfBvW7WUs68lUphnHmXp&X-Amz-Signature=a47733d04e27582a8f91b7515df861d0a50251ed2b59453c8e4f8e711e96b2e1&X-Amz-SignedHeaders=host&x-id=GetObject)
