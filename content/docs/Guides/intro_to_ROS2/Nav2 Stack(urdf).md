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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RRSITIP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCacM9n2%2FG3FrG58wB2COa2WKPVz5xUGgTWH89iLcsJ5AIhAMMik6KPR7xarCtdREucz2v3F%2F0A%2F495CDhxRmFVEnvLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ1rUrcd33P8UHpw0q3ANGT15%2FRsJSZIBBpmScNvOif3FN0sCP3NLWaZXAbLUOvsmlTIOEd2GDGvjExQA3xjbL4ALkGciYUcclQnn8eGNotlhob1%2Fsn6aHV%2FtMpikN1iHe802vBEPBHqq%2FcJWZNQd25%2BR1si4K7O%2Fjv9S2oYzwpgOLKR8dhXNh1dMlMxPZP1DLFQNEgkHncShLv9eI6X8SK%2FmoXweCO40ySdbH1L3tPxOKi%2FOlzXnJy7fWrTcFFzQExPEeo9SPE0qS%2BsnabDb33pobVOw2juavynYStJCS%2FdWlFz21hAlWH8KD2rjp9Xwt2swc93r0%2Fgj8y4LuY0AXunmjViQ9meWTwipefZLVaVZY3el2seD8s9Ag5DlJm1QgcFiEBmeLnGuLc8XjIhy1jzDZaIfOAKnR9qtDwvvZdwm6j8Lh59Jdti5OouGRYoFdRwQEkoFy4jqyPzY4VqBQ9R9BKI2rx%2Bm5irl%2B6%2FhJ3B10LcsThD0SxsLh%2FhLdmJnLmYdUash2ZKmzHkzkHr6iH1IvrttgXfc0kj7UE2b7Pk4JMdd6k7oIpJMkvmJmSaOjz3CrI6XsbW61qvbWgYn0WQbkmdyp3L6r7MaGd%2F19V4VklyZ3y1papH0Nf92uhb5TTc9rQmPZ54hsmzDk37S%2FBjqkATM%2BO7Da7QfaeE7nB5JhcGl%2Fl0HHNYctLu2VgmncvJZWb5n%2Brc90CBp37s7LUlyufU3GuQGaOrm%2B16pjr%2B4C9D3u5LHKXTZSOYnnW6qHjn2Cl9WlYzFkpC4V179JZJ24QnuwOcbQ%2BN6gmGKrbqE9g%2BNu2lZAMCJDX2gUIMtKAfYzaZjwXswRk%2BTORIa1ST8zaT3tVQjf%2F6vrI4nPyZkslBAtBUzN&X-Amz-Signature=f9af08da0b9b061f48031dd68d267a1c8b4f392d5e4eedf3995ad2e31c33d071&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RRSITIP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCacM9n2%2FG3FrG58wB2COa2WKPVz5xUGgTWH89iLcsJ5AIhAMMik6KPR7xarCtdREucz2v3F%2F0A%2F495CDhxRmFVEnvLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ1rUrcd33P8UHpw0q3ANGT15%2FRsJSZIBBpmScNvOif3FN0sCP3NLWaZXAbLUOvsmlTIOEd2GDGvjExQA3xjbL4ALkGciYUcclQnn8eGNotlhob1%2Fsn6aHV%2FtMpikN1iHe802vBEPBHqq%2FcJWZNQd25%2BR1si4K7O%2Fjv9S2oYzwpgOLKR8dhXNh1dMlMxPZP1DLFQNEgkHncShLv9eI6X8SK%2FmoXweCO40ySdbH1L3tPxOKi%2FOlzXnJy7fWrTcFFzQExPEeo9SPE0qS%2BsnabDb33pobVOw2juavynYStJCS%2FdWlFz21hAlWH8KD2rjp9Xwt2swc93r0%2Fgj8y4LuY0AXunmjViQ9meWTwipefZLVaVZY3el2seD8s9Ag5DlJm1QgcFiEBmeLnGuLc8XjIhy1jzDZaIfOAKnR9qtDwvvZdwm6j8Lh59Jdti5OouGRYoFdRwQEkoFy4jqyPzY4VqBQ9R9BKI2rx%2Bm5irl%2B6%2FhJ3B10LcsThD0SxsLh%2FhLdmJnLmYdUash2ZKmzHkzkHr6iH1IvrttgXfc0kj7UE2b7Pk4JMdd6k7oIpJMkvmJmSaOjz3CrI6XsbW61qvbWgYn0WQbkmdyp3L6r7MaGd%2F19V4VklyZ3y1papH0Nf92uhb5TTc9rQmPZ54hsmzDk37S%2FBjqkATM%2BO7Da7QfaeE7nB5JhcGl%2Fl0HHNYctLu2VgmncvJZWb5n%2Brc90CBp37s7LUlyufU3GuQGaOrm%2B16pjr%2B4C9D3u5LHKXTZSOYnnW6qHjn2Cl9WlYzFkpC4V179JZJ24QnuwOcbQ%2BN6gmGKrbqE9g%2BNu2lZAMCJDX2gUIMtKAfYzaZjwXswRk%2BTORIa1ST8zaT3tVQjf%2F6vrI4nPyZkslBAtBUzN&X-Amz-Signature=6731d5c1ffe4e62475bd53b3d99ba0fd0bc0531fa68893549eb7a10f7bce6583&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RRSITIP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCacM9n2%2FG3FrG58wB2COa2WKPVz5xUGgTWH89iLcsJ5AIhAMMik6KPR7xarCtdREucz2v3F%2F0A%2F495CDhxRmFVEnvLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ1rUrcd33P8UHpw0q3ANGT15%2FRsJSZIBBpmScNvOif3FN0sCP3NLWaZXAbLUOvsmlTIOEd2GDGvjExQA3xjbL4ALkGciYUcclQnn8eGNotlhob1%2Fsn6aHV%2FtMpikN1iHe802vBEPBHqq%2FcJWZNQd25%2BR1si4K7O%2Fjv9S2oYzwpgOLKR8dhXNh1dMlMxPZP1DLFQNEgkHncShLv9eI6X8SK%2FmoXweCO40ySdbH1L3tPxOKi%2FOlzXnJy7fWrTcFFzQExPEeo9SPE0qS%2BsnabDb33pobVOw2juavynYStJCS%2FdWlFz21hAlWH8KD2rjp9Xwt2swc93r0%2Fgj8y4LuY0AXunmjViQ9meWTwipefZLVaVZY3el2seD8s9Ag5DlJm1QgcFiEBmeLnGuLc8XjIhy1jzDZaIfOAKnR9qtDwvvZdwm6j8Lh59Jdti5OouGRYoFdRwQEkoFy4jqyPzY4VqBQ9R9BKI2rx%2Bm5irl%2B6%2FhJ3B10LcsThD0SxsLh%2FhLdmJnLmYdUash2ZKmzHkzkHr6iH1IvrttgXfc0kj7UE2b7Pk4JMdd6k7oIpJMkvmJmSaOjz3CrI6XsbW61qvbWgYn0WQbkmdyp3L6r7MaGd%2F19V4VklyZ3y1papH0Nf92uhb5TTc9rQmPZ54hsmzDk37S%2FBjqkATM%2BO7Da7QfaeE7nB5JhcGl%2Fl0HHNYctLu2VgmncvJZWb5n%2Brc90CBp37s7LUlyufU3GuQGaOrm%2B16pjr%2B4C9D3u5LHKXTZSOYnnW6qHjn2Cl9WlYzFkpC4V179JZJ24QnuwOcbQ%2BN6gmGKrbqE9g%2BNu2lZAMCJDX2gUIMtKAfYzaZjwXswRk%2BTORIa1ST8zaT3tVQjf%2F6vrI4nPyZkslBAtBUzN&X-Amz-Signature=c8396cd61618358076df041b50f941843057065cd1cfc4aed1c71dd76ba9bfb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RRSITIP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCacM9n2%2FG3FrG58wB2COa2WKPVz5xUGgTWH89iLcsJ5AIhAMMik6KPR7xarCtdREucz2v3F%2F0A%2F495CDhxRmFVEnvLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ1rUrcd33P8UHpw0q3ANGT15%2FRsJSZIBBpmScNvOif3FN0sCP3NLWaZXAbLUOvsmlTIOEd2GDGvjExQA3xjbL4ALkGciYUcclQnn8eGNotlhob1%2Fsn6aHV%2FtMpikN1iHe802vBEPBHqq%2FcJWZNQd25%2BR1si4K7O%2Fjv9S2oYzwpgOLKR8dhXNh1dMlMxPZP1DLFQNEgkHncShLv9eI6X8SK%2FmoXweCO40ySdbH1L3tPxOKi%2FOlzXnJy7fWrTcFFzQExPEeo9SPE0qS%2BsnabDb33pobVOw2juavynYStJCS%2FdWlFz21hAlWH8KD2rjp9Xwt2swc93r0%2Fgj8y4LuY0AXunmjViQ9meWTwipefZLVaVZY3el2seD8s9Ag5DlJm1QgcFiEBmeLnGuLc8XjIhy1jzDZaIfOAKnR9qtDwvvZdwm6j8Lh59Jdti5OouGRYoFdRwQEkoFy4jqyPzY4VqBQ9R9BKI2rx%2Bm5irl%2B6%2FhJ3B10LcsThD0SxsLh%2FhLdmJnLmYdUash2ZKmzHkzkHr6iH1IvrttgXfc0kj7UE2b7Pk4JMdd6k7oIpJMkvmJmSaOjz3CrI6XsbW61qvbWgYn0WQbkmdyp3L6r7MaGd%2F19V4VklyZ3y1papH0Nf92uhb5TTc9rQmPZ54hsmzDk37S%2FBjqkATM%2BO7Da7QfaeE7nB5JhcGl%2Fl0HHNYctLu2VgmncvJZWb5n%2Brc90CBp37s7LUlyufU3GuQGaOrm%2B16pjr%2B4C9D3u5LHKXTZSOYnnW6qHjn2Cl9WlYzFkpC4V179JZJ24QnuwOcbQ%2BN6gmGKrbqE9g%2BNu2lZAMCJDX2gUIMtKAfYzaZjwXswRk%2BTORIa1ST8zaT3tVQjf%2F6vrI4nPyZkslBAtBUzN&X-Amz-Signature=0544510061bf4c25e01bbaf82b03180aa7ebf7f4d62bbe3d347c66ad8b877bf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RRSITIP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCacM9n2%2FG3FrG58wB2COa2WKPVz5xUGgTWH89iLcsJ5AIhAMMik6KPR7xarCtdREucz2v3F%2F0A%2F495CDhxRmFVEnvLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ1rUrcd33P8UHpw0q3ANGT15%2FRsJSZIBBpmScNvOif3FN0sCP3NLWaZXAbLUOvsmlTIOEd2GDGvjExQA3xjbL4ALkGciYUcclQnn8eGNotlhob1%2Fsn6aHV%2FtMpikN1iHe802vBEPBHqq%2FcJWZNQd25%2BR1si4K7O%2Fjv9S2oYzwpgOLKR8dhXNh1dMlMxPZP1DLFQNEgkHncShLv9eI6X8SK%2FmoXweCO40ySdbH1L3tPxOKi%2FOlzXnJy7fWrTcFFzQExPEeo9SPE0qS%2BsnabDb33pobVOw2juavynYStJCS%2FdWlFz21hAlWH8KD2rjp9Xwt2swc93r0%2Fgj8y4LuY0AXunmjViQ9meWTwipefZLVaVZY3el2seD8s9Ag5DlJm1QgcFiEBmeLnGuLc8XjIhy1jzDZaIfOAKnR9qtDwvvZdwm6j8Lh59Jdti5OouGRYoFdRwQEkoFy4jqyPzY4VqBQ9R9BKI2rx%2Bm5irl%2B6%2FhJ3B10LcsThD0SxsLh%2FhLdmJnLmYdUash2ZKmzHkzkHr6iH1IvrttgXfc0kj7UE2b7Pk4JMdd6k7oIpJMkvmJmSaOjz3CrI6XsbW61qvbWgYn0WQbkmdyp3L6r7MaGd%2F19V4VklyZ3y1papH0Nf92uhb5TTc9rQmPZ54hsmzDk37S%2FBjqkATM%2BO7Da7QfaeE7nB5JhcGl%2Fl0HHNYctLu2VgmncvJZWb5n%2Brc90CBp37s7LUlyufU3GuQGaOrm%2B16pjr%2B4C9D3u5LHKXTZSOYnnW6qHjn2Cl9WlYzFkpC4V179JZJ24QnuwOcbQ%2BN6gmGKrbqE9g%2BNu2lZAMCJDX2gUIMtKAfYzaZjwXswRk%2BTORIa1ST8zaT3tVQjf%2F6vrI4nPyZkslBAtBUzN&X-Amz-Signature=59579f3387a768e04863981095afcead33c7b11ebb75be9d9cae4cb960a97a58&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RRSITIP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T132013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCacM9n2%2FG3FrG58wB2COa2WKPVz5xUGgTWH89iLcsJ5AIhAMMik6KPR7xarCtdREucz2v3F%2F0A%2F495CDhxRmFVEnvLKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ1rUrcd33P8UHpw0q3ANGT15%2FRsJSZIBBpmScNvOif3FN0sCP3NLWaZXAbLUOvsmlTIOEd2GDGvjExQA3xjbL4ALkGciYUcclQnn8eGNotlhob1%2Fsn6aHV%2FtMpikN1iHe802vBEPBHqq%2FcJWZNQd25%2BR1si4K7O%2Fjv9S2oYzwpgOLKR8dhXNh1dMlMxPZP1DLFQNEgkHncShLv9eI6X8SK%2FmoXweCO40ySdbH1L3tPxOKi%2FOlzXnJy7fWrTcFFzQExPEeo9SPE0qS%2BsnabDb33pobVOw2juavynYStJCS%2FdWlFz21hAlWH8KD2rjp9Xwt2swc93r0%2Fgj8y4LuY0AXunmjViQ9meWTwipefZLVaVZY3el2seD8s9Ag5DlJm1QgcFiEBmeLnGuLc8XjIhy1jzDZaIfOAKnR9qtDwvvZdwm6j8Lh59Jdti5OouGRYoFdRwQEkoFy4jqyPzY4VqBQ9R9BKI2rx%2Bm5irl%2B6%2FhJ3B10LcsThD0SxsLh%2FhLdmJnLmYdUash2ZKmzHkzkHr6iH1IvrttgXfc0kj7UE2b7Pk4JMdd6k7oIpJMkvmJmSaOjz3CrI6XsbW61qvbWgYn0WQbkmdyp3L6r7MaGd%2F19V4VklyZ3y1papH0Nf92uhb5TTc9rQmPZ54hsmzDk37S%2FBjqkATM%2BO7Da7QfaeE7nB5JhcGl%2Fl0HHNYctLu2VgmncvJZWb5n%2Brc90CBp37s7LUlyufU3GuQGaOrm%2B16pjr%2B4C9D3u5LHKXTZSOYnnW6qHjn2Cl9WlYzFkpC4V179JZJ24QnuwOcbQ%2BN6gmGKrbqE9g%2BNu2lZAMCJDX2gUIMtKAfYzaZjwXswRk%2BTORIa1ST8zaT3tVQjf%2F6vrI4nPyZkslBAtBUzN&X-Amz-Signature=916c72f61df6c8ee30f38aad59bcf9dfe1430ad17e4d418319d5436d5e507255&X-Amz-SignedHeaders=host&x-id=GetObject)
