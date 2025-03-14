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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GFCSOI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4ABXlpYXsUc7jHal1XssSjeBN%2FZ71Cx6kXkaxsy9tgAiEAxcc8qvyA0nlGAAKHfwZAxLQPnDlMezRcEGAebCzc7SoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVqt4I44%2FwStfze8ircA39hJ2nGtzgpM5%2FJOZy78xJrYwF%2FOrxBZaGxcqAQdnRm31jD47m3FGWU4s7n4%2Fs115dRwMY16szeMBbZUatc813mOe%2BosQkyZkuay52nWPnNCK6Zozc43ZC7HWzuiD4RhGSGD5vs1l7ey7IWElDG%2FfI%2BWM5bhqaHOCvhaegKWVmkIq5WiOJJ8%2FL0KY%2Fk83Edb3FGbB%2BK76QhfgtAiS5Ikcf%2FypPQx7hkSruqriflIMouzdQhV3fjv5MxNdii61bEFijaN2pxicmQ%2BxQ1rAAqjZxEyG9fj0hc6yuv6Ya8JIz7ddnnDYEhTt9cSABhbi6Mdid7T0NHd495K9yd%2FSkLlZN9%2BJWOZI%2B983lVlTSP%2BWqOCmXYqfp8wEQAcjKoNyl6vglQQzX7ne8K1WBN68PN%2BllCi3bh9lqb9k3ImqO9ZLwDyaVagynehOCsIQAYR2gmEWmG7zRGZ5r7MKlYlVG1ZDb2TSytfXSy4Eva4h95k41pHfKKQaN%2B%2F8uprh64sAGszqvnpf4M92gaKMsoGS0P3I9qCqRelFtb%2FOPhP1flPbrXAGhkqWJKLIjLr1infhgFNCW%2BN%2BN4V%2FRZW%2FVbBU0qlMciFnWo9%2BF%2B74jFtR4RFggsB5yjHcTwAfap0ukDML2%2F0b4GOqUBSkV0qkvzfHr35JkBH8Y5NzXKy%2FZak5jyto5IZSv9skJfFFH8LUG2BdGIwq0CV8nr0iCXQhOoxK%2B4UcRljpuVwwDZC5%2BgmHawd5eW08V49kB7PFfb9%2BTZHR7j76Q1qsY8DHhes3YN3HK4eF0nRMaYeWwQvl%2BQ3830mMw%2FIAEMPpc8RByvLqoidPYw5fyj7Aage4BPOIoa6AzAfwf33QTXdsd3bqLa&X-Amz-Signature=e10643c61b1c89a68cb485c09d22ea10ab44f536f89ebd464ff47b73d638a5bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GFCSOI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4ABXlpYXsUc7jHal1XssSjeBN%2FZ71Cx6kXkaxsy9tgAiEAxcc8qvyA0nlGAAKHfwZAxLQPnDlMezRcEGAebCzc7SoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVqt4I44%2FwStfze8ircA39hJ2nGtzgpM5%2FJOZy78xJrYwF%2FOrxBZaGxcqAQdnRm31jD47m3FGWU4s7n4%2Fs115dRwMY16szeMBbZUatc813mOe%2BosQkyZkuay52nWPnNCK6Zozc43ZC7HWzuiD4RhGSGD5vs1l7ey7IWElDG%2FfI%2BWM5bhqaHOCvhaegKWVmkIq5WiOJJ8%2FL0KY%2Fk83Edb3FGbB%2BK76QhfgtAiS5Ikcf%2FypPQx7hkSruqriflIMouzdQhV3fjv5MxNdii61bEFijaN2pxicmQ%2BxQ1rAAqjZxEyG9fj0hc6yuv6Ya8JIz7ddnnDYEhTt9cSABhbi6Mdid7T0NHd495K9yd%2FSkLlZN9%2BJWOZI%2B983lVlTSP%2BWqOCmXYqfp8wEQAcjKoNyl6vglQQzX7ne8K1WBN68PN%2BllCi3bh9lqb9k3ImqO9ZLwDyaVagynehOCsIQAYR2gmEWmG7zRGZ5r7MKlYlVG1ZDb2TSytfXSy4Eva4h95k41pHfKKQaN%2B%2F8uprh64sAGszqvnpf4M92gaKMsoGS0P3I9qCqRelFtb%2FOPhP1flPbrXAGhkqWJKLIjLr1infhgFNCW%2BN%2BN4V%2FRZW%2FVbBU0qlMciFnWo9%2BF%2B74jFtR4RFggsB5yjHcTwAfap0ukDML2%2F0b4GOqUBSkV0qkvzfHr35JkBH8Y5NzXKy%2FZak5jyto5IZSv9skJfFFH8LUG2BdGIwq0CV8nr0iCXQhOoxK%2B4UcRljpuVwwDZC5%2BgmHawd5eW08V49kB7PFfb9%2BTZHR7j76Q1qsY8DHhes3YN3HK4eF0nRMaYeWwQvl%2BQ3830mMw%2FIAEMPpc8RByvLqoidPYw5fyj7Aage4BPOIoa6AzAfwf33QTXdsd3bqLa&X-Amz-Signature=a2c66229d3ca7e0e92fb62c51ce7de8939f28769b80e57a25bc5f7afcd2a49c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GFCSOI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4ABXlpYXsUc7jHal1XssSjeBN%2FZ71Cx6kXkaxsy9tgAiEAxcc8qvyA0nlGAAKHfwZAxLQPnDlMezRcEGAebCzc7SoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVqt4I44%2FwStfze8ircA39hJ2nGtzgpM5%2FJOZy78xJrYwF%2FOrxBZaGxcqAQdnRm31jD47m3FGWU4s7n4%2Fs115dRwMY16szeMBbZUatc813mOe%2BosQkyZkuay52nWPnNCK6Zozc43ZC7HWzuiD4RhGSGD5vs1l7ey7IWElDG%2FfI%2BWM5bhqaHOCvhaegKWVmkIq5WiOJJ8%2FL0KY%2Fk83Edb3FGbB%2BK76QhfgtAiS5Ikcf%2FypPQx7hkSruqriflIMouzdQhV3fjv5MxNdii61bEFijaN2pxicmQ%2BxQ1rAAqjZxEyG9fj0hc6yuv6Ya8JIz7ddnnDYEhTt9cSABhbi6Mdid7T0NHd495K9yd%2FSkLlZN9%2BJWOZI%2B983lVlTSP%2BWqOCmXYqfp8wEQAcjKoNyl6vglQQzX7ne8K1WBN68PN%2BllCi3bh9lqb9k3ImqO9ZLwDyaVagynehOCsIQAYR2gmEWmG7zRGZ5r7MKlYlVG1ZDb2TSytfXSy4Eva4h95k41pHfKKQaN%2B%2F8uprh64sAGszqvnpf4M92gaKMsoGS0P3I9qCqRelFtb%2FOPhP1flPbrXAGhkqWJKLIjLr1infhgFNCW%2BN%2BN4V%2FRZW%2FVbBU0qlMciFnWo9%2BF%2B74jFtR4RFggsB5yjHcTwAfap0ukDML2%2F0b4GOqUBSkV0qkvzfHr35JkBH8Y5NzXKy%2FZak5jyto5IZSv9skJfFFH8LUG2BdGIwq0CV8nr0iCXQhOoxK%2B4UcRljpuVwwDZC5%2BgmHawd5eW08V49kB7PFfb9%2BTZHR7j76Q1qsY8DHhes3YN3HK4eF0nRMaYeWwQvl%2BQ3830mMw%2FIAEMPpc8RByvLqoidPYw5fyj7Aage4BPOIoa6AzAfwf33QTXdsd3bqLa&X-Amz-Signature=0c29684977ee1aa84247419ad2edc81f280ea0587e41fb3cca42fef07ffd7864&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GFCSOI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4ABXlpYXsUc7jHal1XssSjeBN%2FZ71Cx6kXkaxsy9tgAiEAxcc8qvyA0nlGAAKHfwZAxLQPnDlMezRcEGAebCzc7SoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVqt4I44%2FwStfze8ircA39hJ2nGtzgpM5%2FJOZy78xJrYwF%2FOrxBZaGxcqAQdnRm31jD47m3FGWU4s7n4%2Fs115dRwMY16szeMBbZUatc813mOe%2BosQkyZkuay52nWPnNCK6Zozc43ZC7HWzuiD4RhGSGD5vs1l7ey7IWElDG%2FfI%2BWM5bhqaHOCvhaegKWVmkIq5WiOJJ8%2FL0KY%2Fk83Edb3FGbB%2BK76QhfgtAiS5Ikcf%2FypPQx7hkSruqriflIMouzdQhV3fjv5MxNdii61bEFijaN2pxicmQ%2BxQ1rAAqjZxEyG9fj0hc6yuv6Ya8JIz7ddnnDYEhTt9cSABhbi6Mdid7T0NHd495K9yd%2FSkLlZN9%2BJWOZI%2B983lVlTSP%2BWqOCmXYqfp8wEQAcjKoNyl6vglQQzX7ne8K1WBN68PN%2BllCi3bh9lqb9k3ImqO9ZLwDyaVagynehOCsIQAYR2gmEWmG7zRGZ5r7MKlYlVG1ZDb2TSytfXSy4Eva4h95k41pHfKKQaN%2B%2F8uprh64sAGszqvnpf4M92gaKMsoGS0P3I9qCqRelFtb%2FOPhP1flPbrXAGhkqWJKLIjLr1infhgFNCW%2BN%2BN4V%2FRZW%2FVbBU0qlMciFnWo9%2BF%2B74jFtR4RFggsB5yjHcTwAfap0ukDML2%2F0b4GOqUBSkV0qkvzfHr35JkBH8Y5NzXKy%2FZak5jyto5IZSv9skJfFFH8LUG2BdGIwq0CV8nr0iCXQhOoxK%2B4UcRljpuVwwDZC5%2BgmHawd5eW08V49kB7PFfb9%2BTZHR7j76Q1qsY8DHhes3YN3HK4eF0nRMaYeWwQvl%2BQ3830mMw%2FIAEMPpc8RByvLqoidPYw5fyj7Aage4BPOIoa6AzAfwf33QTXdsd3bqLa&X-Amz-Signature=921bd0110b88b11193731fae8213fbbefdad12eb0011fcff8d799b99c108261f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GFCSOI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4ABXlpYXsUc7jHal1XssSjeBN%2FZ71Cx6kXkaxsy9tgAiEAxcc8qvyA0nlGAAKHfwZAxLQPnDlMezRcEGAebCzc7SoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVqt4I44%2FwStfze8ircA39hJ2nGtzgpM5%2FJOZy78xJrYwF%2FOrxBZaGxcqAQdnRm31jD47m3FGWU4s7n4%2Fs115dRwMY16szeMBbZUatc813mOe%2BosQkyZkuay52nWPnNCK6Zozc43ZC7HWzuiD4RhGSGD5vs1l7ey7IWElDG%2FfI%2BWM5bhqaHOCvhaegKWVmkIq5WiOJJ8%2FL0KY%2Fk83Edb3FGbB%2BK76QhfgtAiS5Ikcf%2FypPQx7hkSruqriflIMouzdQhV3fjv5MxNdii61bEFijaN2pxicmQ%2BxQ1rAAqjZxEyG9fj0hc6yuv6Ya8JIz7ddnnDYEhTt9cSABhbi6Mdid7T0NHd495K9yd%2FSkLlZN9%2BJWOZI%2B983lVlTSP%2BWqOCmXYqfp8wEQAcjKoNyl6vglQQzX7ne8K1WBN68PN%2BllCi3bh9lqb9k3ImqO9ZLwDyaVagynehOCsIQAYR2gmEWmG7zRGZ5r7MKlYlVG1ZDb2TSytfXSy4Eva4h95k41pHfKKQaN%2B%2F8uprh64sAGszqvnpf4M92gaKMsoGS0P3I9qCqRelFtb%2FOPhP1flPbrXAGhkqWJKLIjLr1infhgFNCW%2BN%2BN4V%2FRZW%2FVbBU0qlMciFnWo9%2BF%2B74jFtR4RFggsB5yjHcTwAfap0ukDML2%2F0b4GOqUBSkV0qkvzfHr35JkBH8Y5NzXKy%2FZak5jyto5IZSv9skJfFFH8LUG2BdGIwq0CV8nr0iCXQhOoxK%2B4UcRljpuVwwDZC5%2BgmHawd5eW08V49kB7PFfb9%2BTZHR7j76Q1qsY8DHhes3YN3HK4eF0nRMaYeWwQvl%2BQ3830mMw%2FIAEMPpc8RByvLqoidPYw5fyj7Aage4BPOIoa6AzAfwf33QTXdsd3bqLa&X-Amz-Signature=de37d6a9b8891fa2592ea9ff5b909bcb676dbc4d6c363ae5352c88891ec21f71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GFCSOI%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4ABXlpYXsUc7jHal1XssSjeBN%2FZ71Cx6kXkaxsy9tgAiEAxcc8qvyA0nlGAAKHfwZAxLQPnDlMezRcEGAebCzc7SoqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVqt4I44%2FwStfze8ircA39hJ2nGtzgpM5%2FJOZy78xJrYwF%2FOrxBZaGxcqAQdnRm31jD47m3FGWU4s7n4%2Fs115dRwMY16szeMBbZUatc813mOe%2BosQkyZkuay52nWPnNCK6Zozc43ZC7HWzuiD4RhGSGD5vs1l7ey7IWElDG%2FfI%2BWM5bhqaHOCvhaegKWVmkIq5WiOJJ8%2FL0KY%2Fk83Edb3FGbB%2BK76QhfgtAiS5Ikcf%2FypPQx7hkSruqriflIMouzdQhV3fjv5MxNdii61bEFijaN2pxicmQ%2BxQ1rAAqjZxEyG9fj0hc6yuv6Ya8JIz7ddnnDYEhTt9cSABhbi6Mdid7T0NHd495K9yd%2FSkLlZN9%2BJWOZI%2B983lVlTSP%2BWqOCmXYqfp8wEQAcjKoNyl6vglQQzX7ne8K1WBN68PN%2BllCi3bh9lqb9k3ImqO9ZLwDyaVagynehOCsIQAYR2gmEWmG7zRGZ5r7MKlYlVG1ZDb2TSytfXSy4Eva4h95k41pHfKKQaN%2B%2F8uprh64sAGszqvnpf4M92gaKMsoGS0P3I9qCqRelFtb%2FOPhP1flPbrXAGhkqWJKLIjLr1infhgFNCW%2BN%2BN4V%2FRZW%2FVbBU0qlMciFnWo9%2BF%2B74jFtR4RFggsB5yjHcTwAfap0ukDML2%2F0b4GOqUBSkV0qkvzfHr35JkBH8Y5NzXKy%2FZak5jyto5IZSv9skJfFFH8LUG2BdGIwq0CV8nr0iCXQhOoxK%2B4UcRljpuVwwDZC5%2BgmHawd5eW08V49kB7PFfb9%2BTZHR7j76Q1qsY8DHhes3YN3HK4eF0nRMaYeWwQvl%2BQ3830mMw%2FIAEMPpc8RByvLqoidPYw5fyj7Aage4BPOIoa6AzAfwf33QTXdsd3bqLa&X-Amz-Signature=2bfa3e9ace627e1e760c4dd18700107fffe2ac097ba8eda265abe6d762c0e570&X-Amz-SignedHeaders=host&x-id=GetObject)
