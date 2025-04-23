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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPWI7IL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHgCJvcTU3xzf%2BMFBf1wZnlOCdgY2f2P9%2BD%2FzU27qWQKAiEAxFl%2FNhEinFYJXooSf4cjaXXwDIGqcmZZDr2ALbkxs6wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImppwSpbY3j9dF4pircA%2BJWL0nnZwEXiXlUf9x9P55h3Fij5fU4Hh5Aqst3ld9xnRhkc%2BZ%2Bd9%2BZ38RcHUDr0A1HjnW%2FgQS%2FEx7p1gr%2FtXozvHjD7MltacpzjZ%2Fip%2F2rzewZNp6qgMMQJRaHLjgjGEOhyrzwu0QVzQJowd7mB3BWNMByJ8B4fdOY%2Fx2R6us%2F3m2YvMkdXKM4HIscU8uUX0nrIZ2Yo9NQ8mNGu8Eontxr7rCxYA4EOoNgTideP0zep8QTgTtsdih4Lzrc0T9Y%2BlM0fRE9dE31T1uBfIhsFo0hr0xDbnMUSMYYlESwQ5GySOXNnCW6CRYdwspaXoRAJBUZLKEFqn0874c3CmtZCooz0XetryQlSmii8UfPt%2FOWhCHZAFfkjVAxR2Qa8g9LXMpzK5rL%2BCe0S%2FbiXAUBmpsUX4S4oZ%2BQB3Fh7D2K9WAwojcM%2Bhxj2hj1%2FWoqQ1nwOic%2FzAU65s1FSTBWoII0WnwQCbApEe%2FNQ7hp%2BrDF544XI2LYC4LpXkPPrtJ9EuIkFq68FsbaBtT7guFFmR%2Fa20rv6KY8cFVKISVnh4bCzksbJEU2llFVvnr5w6c2NKt5ORavfblVf3XbmrY2ekqiGzJ7dImLOewmReNQC%2FS%2BPF%2FUAYpOGyeUBFaN9ouoMPuhpMAGOqUB%2Bv1kyz1ksNgD1URZ2Qo2gTIPUw4kk9MPmdvbAxlrwCYHpAq0KKUQnat26ndcEUfu4lTVlkPQpLm1CqCB0inGCBu0sL2iFo8JO9yBJdUhjMhgNcOhDsCA5dAG7Y7659BYF6ZKRsXOSTAE0KCL9bM6IKjYGF3nqsukmxsonZHlGeHRJMMnFNNdidIBiWocrN1h26OhqqjWbOPdXT1V4%2FFi%2FYfk6aGE&X-Amz-Signature=8cbd865f0bedf9c0d46123721328d6ba6d95f8ce842fd800646d0e7da5b2d163&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPWI7IL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHgCJvcTU3xzf%2BMFBf1wZnlOCdgY2f2P9%2BD%2FzU27qWQKAiEAxFl%2FNhEinFYJXooSf4cjaXXwDIGqcmZZDr2ALbkxs6wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImppwSpbY3j9dF4pircA%2BJWL0nnZwEXiXlUf9x9P55h3Fij5fU4Hh5Aqst3ld9xnRhkc%2BZ%2Bd9%2BZ38RcHUDr0A1HjnW%2FgQS%2FEx7p1gr%2FtXozvHjD7MltacpzjZ%2Fip%2F2rzewZNp6qgMMQJRaHLjgjGEOhyrzwu0QVzQJowd7mB3BWNMByJ8B4fdOY%2Fx2R6us%2F3m2YvMkdXKM4HIscU8uUX0nrIZ2Yo9NQ8mNGu8Eontxr7rCxYA4EOoNgTideP0zep8QTgTtsdih4Lzrc0T9Y%2BlM0fRE9dE31T1uBfIhsFo0hr0xDbnMUSMYYlESwQ5GySOXNnCW6CRYdwspaXoRAJBUZLKEFqn0874c3CmtZCooz0XetryQlSmii8UfPt%2FOWhCHZAFfkjVAxR2Qa8g9LXMpzK5rL%2BCe0S%2FbiXAUBmpsUX4S4oZ%2BQB3Fh7D2K9WAwojcM%2Bhxj2hj1%2FWoqQ1nwOic%2FzAU65s1FSTBWoII0WnwQCbApEe%2FNQ7hp%2BrDF544XI2LYC4LpXkPPrtJ9EuIkFq68FsbaBtT7guFFmR%2Fa20rv6KY8cFVKISVnh4bCzksbJEU2llFVvnr5w6c2NKt5ORavfblVf3XbmrY2ekqiGzJ7dImLOewmReNQC%2FS%2BPF%2FUAYpOGyeUBFaN9ouoMPuhpMAGOqUB%2Bv1kyz1ksNgD1URZ2Qo2gTIPUw4kk9MPmdvbAxlrwCYHpAq0KKUQnat26ndcEUfu4lTVlkPQpLm1CqCB0inGCBu0sL2iFo8JO9yBJdUhjMhgNcOhDsCA5dAG7Y7659BYF6ZKRsXOSTAE0KCL9bM6IKjYGF3nqsukmxsonZHlGeHRJMMnFNNdidIBiWocrN1h26OhqqjWbOPdXT1V4%2FFi%2FYfk6aGE&X-Amz-Signature=85ea10404f3fdf340cc2f883d49d4ebdd7e4bb227c57d4f6d0cfd56b430d737e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPWI7IL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHgCJvcTU3xzf%2BMFBf1wZnlOCdgY2f2P9%2BD%2FzU27qWQKAiEAxFl%2FNhEinFYJXooSf4cjaXXwDIGqcmZZDr2ALbkxs6wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImppwSpbY3j9dF4pircA%2BJWL0nnZwEXiXlUf9x9P55h3Fij5fU4Hh5Aqst3ld9xnRhkc%2BZ%2Bd9%2BZ38RcHUDr0A1HjnW%2FgQS%2FEx7p1gr%2FtXozvHjD7MltacpzjZ%2Fip%2F2rzewZNp6qgMMQJRaHLjgjGEOhyrzwu0QVzQJowd7mB3BWNMByJ8B4fdOY%2Fx2R6us%2F3m2YvMkdXKM4HIscU8uUX0nrIZ2Yo9NQ8mNGu8Eontxr7rCxYA4EOoNgTideP0zep8QTgTtsdih4Lzrc0T9Y%2BlM0fRE9dE31T1uBfIhsFo0hr0xDbnMUSMYYlESwQ5GySOXNnCW6CRYdwspaXoRAJBUZLKEFqn0874c3CmtZCooz0XetryQlSmii8UfPt%2FOWhCHZAFfkjVAxR2Qa8g9LXMpzK5rL%2BCe0S%2FbiXAUBmpsUX4S4oZ%2BQB3Fh7D2K9WAwojcM%2Bhxj2hj1%2FWoqQ1nwOic%2FzAU65s1FSTBWoII0WnwQCbApEe%2FNQ7hp%2BrDF544XI2LYC4LpXkPPrtJ9EuIkFq68FsbaBtT7guFFmR%2Fa20rv6KY8cFVKISVnh4bCzksbJEU2llFVvnr5w6c2NKt5ORavfblVf3XbmrY2ekqiGzJ7dImLOewmReNQC%2FS%2BPF%2FUAYpOGyeUBFaN9ouoMPuhpMAGOqUB%2Bv1kyz1ksNgD1URZ2Qo2gTIPUw4kk9MPmdvbAxlrwCYHpAq0KKUQnat26ndcEUfu4lTVlkPQpLm1CqCB0inGCBu0sL2iFo8JO9yBJdUhjMhgNcOhDsCA5dAG7Y7659BYF6ZKRsXOSTAE0KCL9bM6IKjYGF3nqsukmxsonZHlGeHRJMMnFNNdidIBiWocrN1h26OhqqjWbOPdXT1V4%2FFi%2FYfk6aGE&X-Amz-Signature=29d61b2eaa02ff077102103f96cb476cb735095d04ede4fba6cfb1592e62b88a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPWI7IL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHgCJvcTU3xzf%2BMFBf1wZnlOCdgY2f2P9%2BD%2FzU27qWQKAiEAxFl%2FNhEinFYJXooSf4cjaXXwDIGqcmZZDr2ALbkxs6wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImppwSpbY3j9dF4pircA%2BJWL0nnZwEXiXlUf9x9P55h3Fij5fU4Hh5Aqst3ld9xnRhkc%2BZ%2Bd9%2BZ38RcHUDr0A1HjnW%2FgQS%2FEx7p1gr%2FtXozvHjD7MltacpzjZ%2Fip%2F2rzewZNp6qgMMQJRaHLjgjGEOhyrzwu0QVzQJowd7mB3BWNMByJ8B4fdOY%2Fx2R6us%2F3m2YvMkdXKM4HIscU8uUX0nrIZ2Yo9NQ8mNGu8Eontxr7rCxYA4EOoNgTideP0zep8QTgTtsdih4Lzrc0T9Y%2BlM0fRE9dE31T1uBfIhsFo0hr0xDbnMUSMYYlESwQ5GySOXNnCW6CRYdwspaXoRAJBUZLKEFqn0874c3CmtZCooz0XetryQlSmii8UfPt%2FOWhCHZAFfkjVAxR2Qa8g9LXMpzK5rL%2BCe0S%2FbiXAUBmpsUX4S4oZ%2BQB3Fh7D2K9WAwojcM%2Bhxj2hj1%2FWoqQ1nwOic%2FzAU65s1FSTBWoII0WnwQCbApEe%2FNQ7hp%2BrDF544XI2LYC4LpXkPPrtJ9EuIkFq68FsbaBtT7guFFmR%2Fa20rv6KY8cFVKISVnh4bCzksbJEU2llFVvnr5w6c2NKt5ORavfblVf3XbmrY2ekqiGzJ7dImLOewmReNQC%2FS%2BPF%2FUAYpOGyeUBFaN9ouoMPuhpMAGOqUB%2Bv1kyz1ksNgD1URZ2Qo2gTIPUw4kk9MPmdvbAxlrwCYHpAq0KKUQnat26ndcEUfu4lTVlkPQpLm1CqCB0inGCBu0sL2iFo8JO9yBJdUhjMhgNcOhDsCA5dAG7Y7659BYF6ZKRsXOSTAE0KCL9bM6IKjYGF3nqsukmxsonZHlGeHRJMMnFNNdidIBiWocrN1h26OhqqjWbOPdXT1V4%2FFi%2FYfk6aGE&X-Amz-Signature=ad59e8c4f74e47d30c4b875021e92d5e80aa807fbd43cd7e39833403f71cddad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPWI7IL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHgCJvcTU3xzf%2BMFBf1wZnlOCdgY2f2P9%2BD%2FzU27qWQKAiEAxFl%2FNhEinFYJXooSf4cjaXXwDIGqcmZZDr2ALbkxs6wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImppwSpbY3j9dF4pircA%2BJWL0nnZwEXiXlUf9x9P55h3Fij5fU4Hh5Aqst3ld9xnRhkc%2BZ%2Bd9%2BZ38RcHUDr0A1HjnW%2FgQS%2FEx7p1gr%2FtXozvHjD7MltacpzjZ%2Fip%2F2rzewZNp6qgMMQJRaHLjgjGEOhyrzwu0QVzQJowd7mB3BWNMByJ8B4fdOY%2Fx2R6us%2F3m2YvMkdXKM4HIscU8uUX0nrIZ2Yo9NQ8mNGu8Eontxr7rCxYA4EOoNgTideP0zep8QTgTtsdih4Lzrc0T9Y%2BlM0fRE9dE31T1uBfIhsFo0hr0xDbnMUSMYYlESwQ5GySOXNnCW6CRYdwspaXoRAJBUZLKEFqn0874c3CmtZCooz0XetryQlSmii8UfPt%2FOWhCHZAFfkjVAxR2Qa8g9LXMpzK5rL%2BCe0S%2FbiXAUBmpsUX4S4oZ%2BQB3Fh7D2K9WAwojcM%2Bhxj2hj1%2FWoqQ1nwOic%2FzAU65s1FSTBWoII0WnwQCbApEe%2FNQ7hp%2BrDF544XI2LYC4LpXkPPrtJ9EuIkFq68FsbaBtT7guFFmR%2Fa20rv6KY8cFVKISVnh4bCzksbJEU2llFVvnr5w6c2NKt5ORavfblVf3XbmrY2ekqiGzJ7dImLOewmReNQC%2FS%2BPF%2FUAYpOGyeUBFaN9ouoMPuhpMAGOqUB%2Bv1kyz1ksNgD1URZ2Qo2gTIPUw4kk9MPmdvbAxlrwCYHpAq0KKUQnat26ndcEUfu4lTVlkPQpLm1CqCB0inGCBu0sL2iFo8JO9yBJdUhjMhgNcOhDsCA5dAG7Y7659BYF6ZKRsXOSTAE0KCL9bM6IKjYGF3nqsukmxsonZHlGeHRJMMnFNNdidIBiWocrN1h26OhqqjWbOPdXT1V4%2FFi%2FYfk6aGE&X-Amz-Signature=ee6e1a9a1f168af2fb2b674fec00595399c22ba04e1d36f88b0194acf91a4eda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQPWI7IL%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHgCJvcTU3xzf%2BMFBf1wZnlOCdgY2f2P9%2BD%2FzU27qWQKAiEAxFl%2FNhEinFYJXooSf4cjaXXwDIGqcmZZDr2ALbkxs6wqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImppwSpbY3j9dF4pircA%2BJWL0nnZwEXiXlUf9x9P55h3Fij5fU4Hh5Aqst3ld9xnRhkc%2BZ%2Bd9%2BZ38RcHUDr0A1HjnW%2FgQS%2FEx7p1gr%2FtXozvHjD7MltacpzjZ%2Fip%2F2rzewZNp6qgMMQJRaHLjgjGEOhyrzwu0QVzQJowd7mB3BWNMByJ8B4fdOY%2Fx2R6us%2F3m2YvMkdXKM4HIscU8uUX0nrIZ2Yo9NQ8mNGu8Eontxr7rCxYA4EOoNgTideP0zep8QTgTtsdih4Lzrc0T9Y%2BlM0fRE9dE31T1uBfIhsFo0hr0xDbnMUSMYYlESwQ5GySOXNnCW6CRYdwspaXoRAJBUZLKEFqn0874c3CmtZCooz0XetryQlSmii8UfPt%2FOWhCHZAFfkjVAxR2Qa8g9LXMpzK5rL%2BCe0S%2FbiXAUBmpsUX4S4oZ%2BQB3Fh7D2K9WAwojcM%2Bhxj2hj1%2FWoqQ1nwOic%2FzAU65s1FSTBWoII0WnwQCbApEe%2FNQ7hp%2BrDF544XI2LYC4LpXkPPrtJ9EuIkFq68FsbaBtT7guFFmR%2Fa20rv6KY8cFVKISVnh4bCzksbJEU2llFVvnr5w6c2NKt5ORavfblVf3XbmrY2ekqiGzJ7dImLOewmReNQC%2FS%2BPF%2FUAYpOGyeUBFaN9ouoMPuhpMAGOqUB%2Bv1kyz1ksNgD1URZ2Qo2gTIPUw4kk9MPmdvbAxlrwCYHpAq0KKUQnat26ndcEUfu4lTVlkPQpLm1CqCB0inGCBu0sL2iFo8JO9yBJdUhjMhgNcOhDsCA5dAG7Y7659BYF6ZKRsXOSTAE0KCL9bM6IKjYGF3nqsukmxsonZHlGeHRJMMnFNNdidIBiWocrN1h26OhqqjWbOPdXT1V4%2FFi%2FYfk6aGE&X-Amz-Signature=2919d5fb4585eb6950b3a1275e4dbee969778136d4f25346007a3098fd188efd&X-Amz-SignedHeaders=host&x-id=GetObject)
