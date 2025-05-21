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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXZRG3RR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICzY4BDtgNQS%2B%2BO8%2FbOsl28EpOL89KNEfAAV8HOaA5Q3AiAbZ%2Fbuk8fpQBDhTrFn0qGYDqjbBa0g95B0th%2FBLKsTbCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId6QgmHRJUCcLyTkKtwDvsROD7kInZ4hRJNgvgScg1bqBwfTw236yfAd7FFo7dl5j6sHKReBgL77zW7di6b3SuOk2QqHDAbVvLrIV6NPZ6r6Qtyx6xTS1KImZmaQOuTLGvKlsQL6sh%2Fz%2BOcZS9WgWyoL3ybYCY%2BEA6emvz1C0JdReW0rDu28X5MWpWvc8gNnVe7XYPtAazgPeIS88j7dhw19XAju8l9uK2%2FUDcKGV7WqjMNbW17dq7poW57tTaOVXpfihhxSlQjlvnL3DhdnAI%2Bh4MgjWVOjvgxeQ6qoGrhvpOJhXOC4pahWq8tee%2FWTB8SbnWmekK%2Brj%2FcO0oaGYJ6u0zx3hiU%2BUwI3rISTbWfhOXH10g8YmgYoRtAT1EbRENDLfJBD8v5SBPR1ZNUN7HCxzztIOgsdsB1H7gXDXXEBKzMOkAskJHMdOIhtgfEwrUJI1e8xC2kP5HC6fxuL7346DXS5PCB1bj2vY0HI1iSgiDH7sO19AGq9i3h5xdzqvrkTM%2BnL4rFk7eJnlVLPjUI1qiCceI%2F%2B%2Fa6xcKo0wprdHHDjh68KR2pCr%2F8XL6pK6dPvhaWfGJDozN0cJp%2F%2B08c0fNodhcGKsISjuDAUVV9iyumHhAAwhgaphYX9NZ7FvH9cfbyXF610GSUwro64wQY6pgEwQBkb9KA8hI1JELp2OpA6JuZdQSBoJPU6IQZb5CMISRUF%2F2EmUc63PG3vwPZLFuGXYeroPCPeM%2FesbLF273OnggOx0VXqhDsMiUZQiGVWKQZIuRInNUmK8FLsBAv87uUQvi1YEz5F6c4vp7PoA1grUatRgND4PWSllNRS%2FOBHYdHQe6CN6m39EB9R3U%2FuaV9XtG7tTvtcsLdGnBeA2bqP7O8uZVvx&X-Amz-Signature=3eb47eba6b8d0afd9ab7fd2e927178a0a0c8ffcbae82f302468a0f28dceb7ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXZRG3RR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICzY4BDtgNQS%2B%2BO8%2FbOsl28EpOL89KNEfAAV8HOaA5Q3AiAbZ%2Fbuk8fpQBDhTrFn0qGYDqjbBa0g95B0th%2FBLKsTbCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId6QgmHRJUCcLyTkKtwDvsROD7kInZ4hRJNgvgScg1bqBwfTw236yfAd7FFo7dl5j6sHKReBgL77zW7di6b3SuOk2QqHDAbVvLrIV6NPZ6r6Qtyx6xTS1KImZmaQOuTLGvKlsQL6sh%2Fz%2BOcZS9WgWyoL3ybYCY%2BEA6emvz1C0JdReW0rDu28X5MWpWvc8gNnVe7XYPtAazgPeIS88j7dhw19XAju8l9uK2%2FUDcKGV7WqjMNbW17dq7poW57tTaOVXpfihhxSlQjlvnL3DhdnAI%2Bh4MgjWVOjvgxeQ6qoGrhvpOJhXOC4pahWq8tee%2FWTB8SbnWmekK%2Brj%2FcO0oaGYJ6u0zx3hiU%2BUwI3rISTbWfhOXH10g8YmgYoRtAT1EbRENDLfJBD8v5SBPR1ZNUN7HCxzztIOgsdsB1H7gXDXXEBKzMOkAskJHMdOIhtgfEwrUJI1e8xC2kP5HC6fxuL7346DXS5PCB1bj2vY0HI1iSgiDH7sO19AGq9i3h5xdzqvrkTM%2BnL4rFk7eJnlVLPjUI1qiCceI%2F%2B%2Fa6xcKo0wprdHHDjh68KR2pCr%2F8XL6pK6dPvhaWfGJDozN0cJp%2F%2B08c0fNodhcGKsISjuDAUVV9iyumHhAAwhgaphYX9NZ7FvH9cfbyXF610GSUwro64wQY6pgEwQBkb9KA8hI1JELp2OpA6JuZdQSBoJPU6IQZb5CMISRUF%2F2EmUc63PG3vwPZLFuGXYeroPCPeM%2FesbLF273OnggOx0VXqhDsMiUZQiGVWKQZIuRInNUmK8FLsBAv87uUQvi1YEz5F6c4vp7PoA1grUatRgND4PWSllNRS%2FOBHYdHQe6CN6m39EB9R3U%2FuaV9XtG7tTvtcsLdGnBeA2bqP7O8uZVvx&X-Amz-Signature=807c28415915c5785c5cc6baa9382432cac61a294b92981f38aea69e7263558e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXZRG3RR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICzY4BDtgNQS%2B%2BO8%2FbOsl28EpOL89KNEfAAV8HOaA5Q3AiAbZ%2Fbuk8fpQBDhTrFn0qGYDqjbBa0g95B0th%2FBLKsTbCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId6QgmHRJUCcLyTkKtwDvsROD7kInZ4hRJNgvgScg1bqBwfTw236yfAd7FFo7dl5j6sHKReBgL77zW7di6b3SuOk2QqHDAbVvLrIV6NPZ6r6Qtyx6xTS1KImZmaQOuTLGvKlsQL6sh%2Fz%2BOcZS9WgWyoL3ybYCY%2BEA6emvz1C0JdReW0rDu28X5MWpWvc8gNnVe7XYPtAazgPeIS88j7dhw19XAju8l9uK2%2FUDcKGV7WqjMNbW17dq7poW57tTaOVXpfihhxSlQjlvnL3DhdnAI%2Bh4MgjWVOjvgxeQ6qoGrhvpOJhXOC4pahWq8tee%2FWTB8SbnWmekK%2Brj%2FcO0oaGYJ6u0zx3hiU%2BUwI3rISTbWfhOXH10g8YmgYoRtAT1EbRENDLfJBD8v5SBPR1ZNUN7HCxzztIOgsdsB1H7gXDXXEBKzMOkAskJHMdOIhtgfEwrUJI1e8xC2kP5HC6fxuL7346DXS5PCB1bj2vY0HI1iSgiDH7sO19AGq9i3h5xdzqvrkTM%2BnL4rFk7eJnlVLPjUI1qiCceI%2F%2B%2Fa6xcKo0wprdHHDjh68KR2pCr%2F8XL6pK6dPvhaWfGJDozN0cJp%2F%2B08c0fNodhcGKsISjuDAUVV9iyumHhAAwhgaphYX9NZ7FvH9cfbyXF610GSUwro64wQY6pgEwQBkb9KA8hI1JELp2OpA6JuZdQSBoJPU6IQZb5CMISRUF%2F2EmUc63PG3vwPZLFuGXYeroPCPeM%2FesbLF273OnggOx0VXqhDsMiUZQiGVWKQZIuRInNUmK8FLsBAv87uUQvi1YEz5F6c4vp7PoA1grUatRgND4PWSllNRS%2FOBHYdHQe6CN6m39EB9R3U%2FuaV9XtG7tTvtcsLdGnBeA2bqP7O8uZVvx&X-Amz-Signature=ca1f2628869fb9d2d34a58f06f855cbe2fb0a2c61cbeeec216629a4d3e49b1ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXZRG3RR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICzY4BDtgNQS%2B%2BO8%2FbOsl28EpOL89KNEfAAV8HOaA5Q3AiAbZ%2Fbuk8fpQBDhTrFn0qGYDqjbBa0g95B0th%2FBLKsTbCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId6QgmHRJUCcLyTkKtwDvsROD7kInZ4hRJNgvgScg1bqBwfTw236yfAd7FFo7dl5j6sHKReBgL77zW7di6b3SuOk2QqHDAbVvLrIV6NPZ6r6Qtyx6xTS1KImZmaQOuTLGvKlsQL6sh%2Fz%2BOcZS9WgWyoL3ybYCY%2BEA6emvz1C0JdReW0rDu28X5MWpWvc8gNnVe7XYPtAazgPeIS88j7dhw19XAju8l9uK2%2FUDcKGV7WqjMNbW17dq7poW57tTaOVXpfihhxSlQjlvnL3DhdnAI%2Bh4MgjWVOjvgxeQ6qoGrhvpOJhXOC4pahWq8tee%2FWTB8SbnWmekK%2Brj%2FcO0oaGYJ6u0zx3hiU%2BUwI3rISTbWfhOXH10g8YmgYoRtAT1EbRENDLfJBD8v5SBPR1ZNUN7HCxzztIOgsdsB1H7gXDXXEBKzMOkAskJHMdOIhtgfEwrUJI1e8xC2kP5HC6fxuL7346DXS5PCB1bj2vY0HI1iSgiDH7sO19AGq9i3h5xdzqvrkTM%2BnL4rFk7eJnlVLPjUI1qiCceI%2F%2B%2Fa6xcKo0wprdHHDjh68KR2pCr%2F8XL6pK6dPvhaWfGJDozN0cJp%2F%2B08c0fNodhcGKsISjuDAUVV9iyumHhAAwhgaphYX9NZ7FvH9cfbyXF610GSUwro64wQY6pgEwQBkb9KA8hI1JELp2OpA6JuZdQSBoJPU6IQZb5CMISRUF%2F2EmUc63PG3vwPZLFuGXYeroPCPeM%2FesbLF273OnggOx0VXqhDsMiUZQiGVWKQZIuRInNUmK8FLsBAv87uUQvi1YEz5F6c4vp7PoA1grUatRgND4PWSllNRS%2FOBHYdHQe6CN6m39EB9R3U%2FuaV9XtG7tTvtcsLdGnBeA2bqP7O8uZVvx&X-Amz-Signature=a29486a9449000a41032f7d5a98e447e20819b8cb6c4d3f085efbde60c8cc31b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXZRG3RR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICzY4BDtgNQS%2B%2BO8%2FbOsl28EpOL89KNEfAAV8HOaA5Q3AiAbZ%2Fbuk8fpQBDhTrFn0qGYDqjbBa0g95B0th%2FBLKsTbCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId6QgmHRJUCcLyTkKtwDvsROD7kInZ4hRJNgvgScg1bqBwfTw236yfAd7FFo7dl5j6sHKReBgL77zW7di6b3SuOk2QqHDAbVvLrIV6NPZ6r6Qtyx6xTS1KImZmaQOuTLGvKlsQL6sh%2Fz%2BOcZS9WgWyoL3ybYCY%2BEA6emvz1C0JdReW0rDu28X5MWpWvc8gNnVe7XYPtAazgPeIS88j7dhw19XAju8l9uK2%2FUDcKGV7WqjMNbW17dq7poW57tTaOVXpfihhxSlQjlvnL3DhdnAI%2Bh4MgjWVOjvgxeQ6qoGrhvpOJhXOC4pahWq8tee%2FWTB8SbnWmekK%2Brj%2FcO0oaGYJ6u0zx3hiU%2BUwI3rISTbWfhOXH10g8YmgYoRtAT1EbRENDLfJBD8v5SBPR1ZNUN7HCxzztIOgsdsB1H7gXDXXEBKzMOkAskJHMdOIhtgfEwrUJI1e8xC2kP5HC6fxuL7346DXS5PCB1bj2vY0HI1iSgiDH7sO19AGq9i3h5xdzqvrkTM%2BnL4rFk7eJnlVLPjUI1qiCceI%2F%2B%2Fa6xcKo0wprdHHDjh68KR2pCr%2F8XL6pK6dPvhaWfGJDozN0cJp%2F%2B08c0fNodhcGKsISjuDAUVV9iyumHhAAwhgaphYX9NZ7FvH9cfbyXF610GSUwro64wQY6pgEwQBkb9KA8hI1JELp2OpA6JuZdQSBoJPU6IQZb5CMISRUF%2F2EmUc63PG3vwPZLFuGXYeroPCPeM%2FesbLF273OnggOx0VXqhDsMiUZQiGVWKQZIuRInNUmK8FLsBAv87uUQvi1YEz5F6c4vp7PoA1grUatRgND4PWSllNRS%2FOBHYdHQe6CN6m39EB9R3U%2FuaV9XtG7tTvtcsLdGnBeA2bqP7O8uZVvx&X-Amz-Signature=76da139056d441d4cfabb672eec50cd2fea6531c4c4c0d09d90946172d56d683&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXZRG3RR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICzY4BDtgNQS%2B%2BO8%2FbOsl28EpOL89KNEfAAV8HOaA5Q3AiAbZ%2Fbuk8fpQBDhTrFn0qGYDqjbBa0g95B0th%2FBLKsTbCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMId6QgmHRJUCcLyTkKtwDvsROD7kInZ4hRJNgvgScg1bqBwfTw236yfAd7FFo7dl5j6sHKReBgL77zW7di6b3SuOk2QqHDAbVvLrIV6NPZ6r6Qtyx6xTS1KImZmaQOuTLGvKlsQL6sh%2Fz%2BOcZS9WgWyoL3ybYCY%2BEA6emvz1C0JdReW0rDu28X5MWpWvc8gNnVe7XYPtAazgPeIS88j7dhw19XAju8l9uK2%2FUDcKGV7WqjMNbW17dq7poW57tTaOVXpfihhxSlQjlvnL3DhdnAI%2Bh4MgjWVOjvgxeQ6qoGrhvpOJhXOC4pahWq8tee%2FWTB8SbnWmekK%2Brj%2FcO0oaGYJ6u0zx3hiU%2BUwI3rISTbWfhOXH10g8YmgYoRtAT1EbRENDLfJBD8v5SBPR1ZNUN7HCxzztIOgsdsB1H7gXDXXEBKzMOkAskJHMdOIhtgfEwrUJI1e8xC2kP5HC6fxuL7346DXS5PCB1bj2vY0HI1iSgiDH7sO19AGq9i3h5xdzqvrkTM%2BnL4rFk7eJnlVLPjUI1qiCceI%2F%2B%2Fa6xcKo0wprdHHDjh68KR2pCr%2F8XL6pK6dPvhaWfGJDozN0cJp%2F%2B08c0fNodhcGKsISjuDAUVV9iyumHhAAwhgaphYX9NZ7FvH9cfbyXF610GSUwro64wQY6pgEwQBkb9KA8hI1JELp2OpA6JuZdQSBoJPU6IQZb5CMISRUF%2F2EmUc63PG3vwPZLFuGXYeroPCPeM%2FesbLF273OnggOx0VXqhDsMiUZQiGVWKQZIuRInNUmK8FLsBAv87uUQvi1YEz5F6c4vp7PoA1grUatRgND4PWSllNRS%2FOBHYdHQe6CN6m39EB9R3U%2FuaV9XtG7tTvtcsLdGnBeA2bqP7O8uZVvx&X-Amz-Signature=7d4afc763fd300408b17ac7165ab8c4c6164abff4192d059644748ebc44e896a&X-Amz-SignedHeaders=host&x-id=GetObject)
