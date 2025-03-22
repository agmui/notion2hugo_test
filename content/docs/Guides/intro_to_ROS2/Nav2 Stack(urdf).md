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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5FF6MFJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIF4PSBlfA1vHULeYeOq3%2FOeAw5ZfWx85pjNjdAnF6hg1AiEA5OhFJ%2BjU57vBe4F%2BwD1Z4Q1InWVPnaX88iF51QaEkSoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfvACu28v47qo83syrcA25pH1YujsGdSGI2SoiS7biy%2FF0J3Axts%2BOSjpbn9%2F7PjE0cOmNKG2bD789jaZjQkIw8JaY6b8v8rjT9BZZIqK1kpMWXzk2B5HjRaAAgQreP1goKfiG5phZdrHtRVSKvsdI8hDJ6OeA5my9W1mX9Kkx%2B8%2FfIMLYvmx5UbCFE3XRiUj7lQIBCnDektGHtohkzEe6vWelm3VLOLDwQ4D7Nxz3vU68yiFkm0c5eD3yX7muo5JpMF7gZiAm5vhWauSscZBfc%2FBhCHAMXDXqTIqVpQGmKXQlFtQw%2F8OK6IhImZQBS2J9eHfyHHsHUSbIbycYSCVk1Suv6vDw4yd1ztInBn%2F%2FVBsyZNhO6oNxfstwUiB0dG%2F70IHkzndJmnD%2FsKT8e6uxOY3CU%2F9ICQ0E8VN8L%2BzzIA5C2rccicT8FbYbA%2FmcW1eo896tqcxveOhjI0oo5cjyJv1bxqf%2FRyvFO%2F0OrfJMOMj0f6RJk1%2BNEo7s6WEoQ1%2BcrcVw9GSlzv3L3hs26N0CFiiUrrC1cVlAbKu7ZWaPFrFP8w92m295q2fsJ4iIQvNBXo2ImoMUgNXpLR5ZUUtS%2Bmq87AXjmASmSXsI27%2BOfCBtyQaVrAKZMQymngL6ZeF2nX1pZjx2Ts17WMP%2Bt%2Br4GOqUBkj9RKO4ykisB5kM5EnLsXik4HXqT7VOL5kMZ9SnhJmGjtntymI5PEu8hPAUXGHpkBxUERBIH2BwSKsNs2Frgu2sGZ6YCZDGqM8zTL27QLMYirI3VzfA0lNaC4QAii34Hmfv7lhbIsYxsxb60TLcOU28mA11PrHrjEHI%2Bcmuqvm3BVd5GRh%2FSkth2Q4E1AHTu9DTGdVAXWPDQTfTT2B%2BJPbXujiWu&X-Amz-Signature=9362c70aac0cefbdf63d7a5d2d983624f3370b2f6aa67f4244740eb47b588749&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5FF6MFJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIF4PSBlfA1vHULeYeOq3%2FOeAw5ZfWx85pjNjdAnF6hg1AiEA5OhFJ%2BjU57vBe4F%2BwD1Z4Q1InWVPnaX88iF51QaEkSoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfvACu28v47qo83syrcA25pH1YujsGdSGI2SoiS7biy%2FF0J3Axts%2BOSjpbn9%2F7PjE0cOmNKG2bD789jaZjQkIw8JaY6b8v8rjT9BZZIqK1kpMWXzk2B5HjRaAAgQreP1goKfiG5phZdrHtRVSKvsdI8hDJ6OeA5my9W1mX9Kkx%2B8%2FfIMLYvmx5UbCFE3XRiUj7lQIBCnDektGHtohkzEe6vWelm3VLOLDwQ4D7Nxz3vU68yiFkm0c5eD3yX7muo5JpMF7gZiAm5vhWauSscZBfc%2FBhCHAMXDXqTIqVpQGmKXQlFtQw%2F8OK6IhImZQBS2J9eHfyHHsHUSbIbycYSCVk1Suv6vDw4yd1ztInBn%2F%2FVBsyZNhO6oNxfstwUiB0dG%2F70IHkzndJmnD%2FsKT8e6uxOY3CU%2F9ICQ0E8VN8L%2BzzIA5C2rccicT8FbYbA%2FmcW1eo896tqcxveOhjI0oo5cjyJv1bxqf%2FRyvFO%2F0OrfJMOMj0f6RJk1%2BNEo7s6WEoQ1%2BcrcVw9GSlzv3L3hs26N0CFiiUrrC1cVlAbKu7ZWaPFrFP8w92m295q2fsJ4iIQvNBXo2ImoMUgNXpLR5ZUUtS%2Bmq87AXjmASmSXsI27%2BOfCBtyQaVrAKZMQymngL6ZeF2nX1pZjx2Ts17WMP%2Bt%2Br4GOqUBkj9RKO4ykisB5kM5EnLsXik4HXqT7VOL5kMZ9SnhJmGjtntymI5PEu8hPAUXGHpkBxUERBIH2BwSKsNs2Frgu2sGZ6YCZDGqM8zTL27QLMYirI3VzfA0lNaC4QAii34Hmfv7lhbIsYxsxb60TLcOU28mA11PrHrjEHI%2Bcmuqvm3BVd5GRh%2FSkth2Q4E1AHTu9DTGdVAXWPDQTfTT2B%2BJPbXujiWu&X-Amz-Signature=6fbd8463a24a2cf2b39bf6d16a64a208004ae829860e25dba5c2ad5b924a59e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5FF6MFJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIF4PSBlfA1vHULeYeOq3%2FOeAw5ZfWx85pjNjdAnF6hg1AiEA5OhFJ%2BjU57vBe4F%2BwD1Z4Q1InWVPnaX88iF51QaEkSoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfvACu28v47qo83syrcA25pH1YujsGdSGI2SoiS7biy%2FF0J3Axts%2BOSjpbn9%2F7PjE0cOmNKG2bD789jaZjQkIw8JaY6b8v8rjT9BZZIqK1kpMWXzk2B5HjRaAAgQreP1goKfiG5phZdrHtRVSKvsdI8hDJ6OeA5my9W1mX9Kkx%2B8%2FfIMLYvmx5UbCFE3XRiUj7lQIBCnDektGHtohkzEe6vWelm3VLOLDwQ4D7Nxz3vU68yiFkm0c5eD3yX7muo5JpMF7gZiAm5vhWauSscZBfc%2FBhCHAMXDXqTIqVpQGmKXQlFtQw%2F8OK6IhImZQBS2J9eHfyHHsHUSbIbycYSCVk1Suv6vDw4yd1ztInBn%2F%2FVBsyZNhO6oNxfstwUiB0dG%2F70IHkzndJmnD%2FsKT8e6uxOY3CU%2F9ICQ0E8VN8L%2BzzIA5C2rccicT8FbYbA%2FmcW1eo896tqcxveOhjI0oo5cjyJv1bxqf%2FRyvFO%2F0OrfJMOMj0f6RJk1%2BNEo7s6WEoQ1%2BcrcVw9GSlzv3L3hs26N0CFiiUrrC1cVlAbKu7ZWaPFrFP8w92m295q2fsJ4iIQvNBXo2ImoMUgNXpLR5ZUUtS%2Bmq87AXjmASmSXsI27%2BOfCBtyQaVrAKZMQymngL6ZeF2nX1pZjx2Ts17WMP%2Bt%2Br4GOqUBkj9RKO4ykisB5kM5EnLsXik4HXqT7VOL5kMZ9SnhJmGjtntymI5PEu8hPAUXGHpkBxUERBIH2BwSKsNs2Frgu2sGZ6YCZDGqM8zTL27QLMYirI3VzfA0lNaC4QAii34Hmfv7lhbIsYxsxb60TLcOU28mA11PrHrjEHI%2Bcmuqvm3BVd5GRh%2FSkth2Q4E1AHTu9DTGdVAXWPDQTfTT2B%2BJPbXujiWu&X-Amz-Signature=db037b0b580ae157f9f0682a6b6af3bfba226ec0f7bd9210193e99481b3deb95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5FF6MFJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIF4PSBlfA1vHULeYeOq3%2FOeAw5ZfWx85pjNjdAnF6hg1AiEA5OhFJ%2BjU57vBe4F%2BwD1Z4Q1InWVPnaX88iF51QaEkSoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfvACu28v47qo83syrcA25pH1YujsGdSGI2SoiS7biy%2FF0J3Axts%2BOSjpbn9%2F7PjE0cOmNKG2bD789jaZjQkIw8JaY6b8v8rjT9BZZIqK1kpMWXzk2B5HjRaAAgQreP1goKfiG5phZdrHtRVSKvsdI8hDJ6OeA5my9W1mX9Kkx%2B8%2FfIMLYvmx5UbCFE3XRiUj7lQIBCnDektGHtohkzEe6vWelm3VLOLDwQ4D7Nxz3vU68yiFkm0c5eD3yX7muo5JpMF7gZiAm5vhWauSscZBfc%2FBhCHAMXDXqTIqVpQGmKXQlFtQw%2F8OK6IhImZQBS2J9eHfyHHsHUSbIbycYSCVk1Suv6vDw4yd1ztInBn%2F%2FVBsyZNhO6oNxfstwUiB0dG%2F70IHkzndJmnD%2FsKT8e6uxOY3CU%2F9ICQ0E8VN8L%2BzzIA5C2rccicT8FbYbA%2FmcW1eo896tqcxveOhjI0oo5cjyJv1bxqf%2FRyvFO%2F0OrfJMOMj0f6RJk1%2BNEo7s6WEoQ1%2BcrcVw9GSlzv3L3hs26N0CFiiUrrC1cVlAbKu7ZWaPFrFP8w92m295q2fsJ4iIQvNBXo2ImoMUgNXpLR5ZUUtS%2Bmq87AXjmASmSXsI27%2BOfCBtyQaVrAKZMQymngL6ZeF2nX1pZjx2Ts17WMP%2Bt%2Br4GOqUBkj9RKO4ykisB5kM5EnLsXik4HXqT7VOL5kMZ9SnhJmGjtntymI5PEu8hPAUXGHpkBxUERBIH2BwSKsNs2Frgu2sGZ6YCZDGqM8zTL27QLMYirI3VzfA0lNaC4QAii34Hmfv7lhbIsYxsxb60TLcOU28mA11PrHrjEHI%2Bcmuqvm3BVd5GRh%2FSkth2Q4E1AHTu9DTGdVAXWPDQTfTT2B%2BJPbXujiWu&X-Amz-Signature=70248de6bcd07c6d012ce7725c901f552b3771a1e0fcea7772a4136fcfa766d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5FF6MFJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIF4PSBlfA1vHULeYeOq3%2FOeAw5ZfWx85pjNjdAnF6hg1AiEA5OhFJ%2BjU57vBe4F%2BwD1Z4Q1InWVPnaX88iF51QaEkSoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfvACu28v47qo83syrcA25pH1YujsGdSGI2SoiS7biy%2FF0J3Axts%2BOSjpbn9%2F7PjE0cOmNKG2bD789jaZjQkIw8JaY6b8v8rjT9BZZIqK1kpMWXzk2B5HjRaAAgQreP1goKfiG5phZdrHtRVSKvsdI8hDJ6OeA5my9W1mX9Kkx%2B8%2FfIMLYvmx5UbCFE3XRiUj7lQIBCnDektGHtohkzEe6vWelm3VLOLDwQ4D7Nxz3vU68yiFkm0c5eD3yX7muo5JpMF7gZiAm5vhWauSscZBfc%2FBhCHAMXDXqTIqVpQGmKXQlFtQw%2F8OK6IhImZQBS2J9eHfyHHsHUSbIbycYSCVk1Suv6vDw4yd1ztInBn%2F%2FVBsyZNhO6oNxfstwUiB0dG%2F70IHkzndJmnD%2FsKT8e6uxOY3CU%2F9ICQ0E8VN8L%2BzzIA5C2rccicT8FbYbA%2FmcW1eo896tqcxveOhjI0oo5cjyJv1bxqf%2FRyvFO%2F0OrfJMOMj0f6RJk1%2BNEo7s6WEoQ1%2BcrcVw9GSlzv3L3hs26N0CFiiUrrC1cVlAbKu7ZWaPFrFP8w92m295q2fsJ4iIQvNBXo2ImoMUgNXpLR5ZUUtS%2Bmq87AXjmASmSXsI27%2BOfCBtyQaVrAKZMQymngL6ZeF2nX1pZjx2Ts17WMP%2Bt%2Br4GOqUBkj9RKO4ykisB5kM5EnLsXik4HXqT7VOL5kMZ9SnhJmGjtntymI5PEu8hPAUXGHpkBxUERBIH2BwSKsNs2Frgu2sGZ6YCZDGqM8zTL27QLMYirI3VzfA0lNaC4QAii34Hmfv7lhbIsYxsxb60TLcOU28mA11PrHrjEHI%2Bcmuqvm3BVd5GRh%2FSkth2Q4E1AHTu9DTGdVAXWPDQTfTT2B%2BJPbXujiWu&X-Amz-Signature=6a29bbda4b534c1769172f627e2e6735c37fdf4643a3fac2227a04b4e20de0be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5FF6MFJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIF4PSBlfA1vHULeYeOq3%2FOeAw5ZfWx85pjNjdAnF6hg1AiEA5OhFJ%2BjU57vBe4F%2BwD1Z4Q1InWVPnaX88iF51QaEkSoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfvACu28v47qo83syrcA25pH1YujsGdSGI2SoiS7biy%2FF0J3Axts%2BOSjpbn9%2F7PjE0cOmNKG2bD789jaZjQkIw8JaY6b8v8rjT9BZZIqK1kpMWXzk2B5HjRaAAgQreP1goKfiG5phZdrHtRVSKvsdI8hDJ6OeA5my9W1mX9Kkx%2B8%2FfIMLYvmx5UbCFE3XRiUj7lQIBCnDektGHtohkzEe6vWelm3VLOLDwQ4D7Nxz3vU68yiFkm0c5eD3yX7muo5JpMF7gZiAm5vhWauSscZBfc%2FBhCHAMXDXqTIqVpQGmKXQlFtQw%2F8OK6IhImZQBS2J9eHfyHHsHUSbIbycYSCVk1Suv6vDw4yd1ztInBn%2F%2FVBsyZNhO6oNxfstwUiB0dG%2F70IHkzndJmnD%2FsKT8e6uxOY3CU%2F9ICQ0E8VN8L%2BzzIA5C2rccicT8FbYbA%2FmcW1eo896tqcxveOhjI0oo5cjyJv1bxqf%2FRyvFO%2F0OrfJMOMj0f6RJk1%2BNEo7s6WEoQ1%2BcrcVw9GSlzv3L3hs26N0CFiiUrrC1cVlAbKu7ZWaPFrFP8w92m295q2fsJ4iIQvNBXo2ImoMUgNXpLR5ZUUtS%2Bmq87AXjmASmSXsI27%2BOfCBtyQaVrAKZMQymngL6ZeF2nX1pZjx2Ts17WMP%2Bt%2Br4GOqUBkj9RKO4ykisB5kM5EnLsXik4HXqT7VOL5kMZ9SnhJmGjtntymI5PEu8hPAUXGHpkBxUERBIH2BwSKsNs2Frgu2sGZ6YCZDGqM8zTL27QLMYirI3VzfA0lNaC4QAii34Hmfv7lhbIsYxsxb60TLcOU28mA11PrHrjEHI%2Bcmuqvm3BVd5GRh%2FSkth2Q4E1AHTu9DTGdVAXWPDQTfTT2B%2BJPbXujiWu&X-Amz-Signature=bbe97f3b40ef6988f406a872b8d1589437ddd5d6f99e2f8b11b54b553bdb292b&X-Amz-SignedHeaders=host&x-id=GetObject)
