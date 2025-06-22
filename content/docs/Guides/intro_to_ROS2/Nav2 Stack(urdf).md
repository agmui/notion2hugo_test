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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS56IGF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FDvmqR2RtYKhP6MD%2Bkv9XeynTzcVNhuJB9O76rJZwhQIgbfhvCG%2F%2F7GqGccxb5JPk%2Fn3mMz6qEs%2BTBhsjtR3SlmgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqgFObesNvDol7KBircA6pvN%2FoXz6yH6F1fYHbFkLfC2mfxZd6uwiGESN9vLaCMeCAOn2HAIXkrzF5oDp2hnTbEVpxQ8IzL5MzDixPWuAWrLp18Pl1ckdvRzPXgvCba6UGxnFfV%2FSdV5dou0rFyj%2B3drgw3XHZgjB2PtWUXdewjRJH%2BLpvl8rDTXjczrVrRA4CQm7fkzPX9Ha6EmaGwH%2FyrzVhlgy%2BwXgWUTjWf3U9DhIZgXX5wZS7gE5oWfbpYsxZaecgLWWPWqZLJJuvraTsX%2FRstnfPSPigtR9hYAriiCHOuGtSlS79%2B%2BnMArrcHOWpYie9y4LbsApKZHuOpw3GLO6gxdaXLO9kj8yiB4Xl7AZPURGN%2FqgPtDyl6CZU17GdB8gKdkcyxC6arCE6X3Q1WlMVKnTUvUc5xo0VVey6TEmxFRVpxl7BoLmTK4hOxeByEWsKuVxUf6xomXWzkVwuaUyF2ThWW7rNwAmVpZBN86kUbwgCohWHmVEDuo%2BXHOcZFegvxWIRsyaZllI%2BBCp2sOOXQngWeWeVvGebbihv41pfQi7bN%2BnKvqrzN1GVA6Sm%2BlI8O%2BIrqJ6pCteZpzKAkU41qnuBgqKkg6TOH0eWpavAVE7W3BWOD3BNQRCklY60cTQpKO7pNVSygMOWr38IGOqUBQe5EUn8dDkhvgBc8ulidVHOb5otDAsI56EZ9fORXz%2BgjQvaJYUL%2B4YGqPzmqqw1HAqa%2FvEvrZc539jGvgbI9t2Hbc6AEwcH0lmYEcq4hnrJD6ms0KieBL9P0Wbpa52DoNVpY87qtbE9kv63%2F6vmLAJOBRdvb8zP6LCN5nAIYc8RuL%2B2JuhiFf3M9kDyjnwKfrjqESd3eJku8%2B4aSbIL74%2BmXATox&X-Amz-Signature=e0163622fba584a56f6eab199c1af5d10a6f18caa0dbaa397b44ded63e352ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS56IGF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FDvmqR2RtYKhP6MD%2Bkv9XeynTzcVNhuJB9O76rJZwhQIgbfhvCG%2F%2F7GqGccxb5JPk%2Fn3mMz6qEs%2BTBhsjtR3SlmgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqgFObesNvDol7KBircA6pvN%2FoXz6yH6F1fYHbFkLfC2mfxZd6uwiGESN9vLaCMeCAOn2HAIXkrzF5oDp2hnTbEVpxQ8IzL5MzDixPWuAWrLp18Pl1ckdvRzPXgvCba6UGxnFfV%2FSdV5dou0rFyj%2B3drgw3XHZgjB2PtWUXdewjRJH%2BLpvl8rDTXjczrVrRA4CQm7fkzPX9Ha6EmaGwH%2FyrzVhlgy%2BwXgWUTjWf3U9DhIZgXX5wZS7gE5oWfbpYsxZaecgLWWPWqZLJJuvraTsX%2FRstnfPSPigtR9hYAriiCHOuGtSlS79%2B%2BnMArrcHOWpYie9y4LbsApKZHuOpw3GLO6gxdaXLO9kj8yiB4Xl7AZPURGN%2FqgPtDyl6CZU17GdB8gKdkcyxC6arCE6X3Q1WlMVKnTUvUc5xo0VVey6TEmxFRVpxl7BoLmTK4hOxeByEWsKuVxUf6xomXWzkVwuaUyF2ThWW7rNwAmVpZBN86kUbwgCohWHmVEDuo%2BXHOcZFegvxWIRsyaZllI%2BBCp2sOOXQngWeWeVvGebbihv41pfQi7bN%2BnKvqrzN1GVA6Sm%2BlI8O%2BIrqJ6pCteZpzKAkU41qnuBgqKkg6TOH0eWpavAVE7W3BWOD3BNQRCklY60cTQpKO7pNVSygMOWr38IGOqUBQe5EUn8dDkhvgBc8ulidVHOb5otDAsI56EZ9fORXz%2BgjQvaJYUL%2B4YGqPzmqqw1HAqa%2FvEvrZc539jGvgbI9t2Hbc6AEwcH0lmYEcq4hnrJD6ms0KieBL9P0Wbpa52DoNVpY87qtbE9kv63%2F6vmLAJOBRdvb8zP6LCN5nAIYc8RuL%2B2JuhiFf3M9kDyjnwKfrjqESd3eJku8%2B4aSbIL74%2BmXATox&X-Amz-Signature=c4f86cbde7561d7e49ca3c088177de2396ecfd7b3d436655e0a8f019aaa7a262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS56IGF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FDvmqR2RtYKhP6MD%2Bkv9XeynTzcVNhuJB9O76rJZwhQIgbfhvCG%2F%2F7GqGccxb5JPk%2Fn3mMz6qEs%2BTBhsjtR3SlmgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqgFObesNvDol7KBircA6pvN%2FoXz6yH6F1fYHbFkLfC2mfxZd6uwiGESN9vLaCMeCAOn2HAIXkrzF5oDp2hnTbEVpxQ8IzL5MzDixPWuAWrLp18Pl1ckdvRzPXgvCba6UGxnFfV%2FSdV5dou0rFyj%2B3drgw3XHZgjB2PtWUXdewjRJH%2BLpvl8rDTXjczrVrRA4CQm7fkzPX9Ha6EmaGwH%2FyrzVhlgy%2BwXgWUTjWf3U9DhIZgXX5wZS7gE5oWfbpYsxZaecgLWWPWqZLJJuvraTsX%2FRstnfPSPigtR9hYAriiCHOuGtSlS79%2B%2BnMArrcHOWpYie9y4LbsApKZHuOpw3GLO6gxdaXLO9kj8yiB4Xl7AZPURGN%2FqgPtDyl6CZU17GdB8gKdkcyxC6arCE6X3Q1WlMVKnTUvUc5xo0VVey6TEmxFRVpxl7BoLmTK4hOxeByEWsKuVxUf6xomXWzkVwuaUyF2ThWW7rNwAmVpZBN86kUbwgCohWHmVEDuo%2BXHOcZFegvxWIRsyaZllI%2BBCp2sOOXQngWeWeVvGebbihv41pfQi7bN%2BnKvqrzN1GVA6Sm%2BlI8O%2BIrqJ6pCteZpzKAkU41qnuBgqKkg6TOH0eWpavAVE7W3BWOD3BNQRCklY60cTQpKO7pNVSygMOWr38IGOqUBQe5EUn8dDkhvgBc8ulidVHOb5otDAsI56EZ9fORXz%2BgjQvaJYUL%2B4YGqPzmqqw1HAqa%2FvEvrZc539jGvgbI9t2Hbc6AEwcH0lmYEcq4hnrJD6ms0KieBL9P0Wbpa52DoNVpY87qtbE9kv63%2F6vmLAJOBRdvb8zP6LCN5nAIYc8RuL%2B2JuhiFf3M9kDyjnwKfrjqESd3eJku8%2B4aSbIL74%2BmXATox&X-Amz-Signature=de12260fee7b788a5c50ce8ede0024496ba9a0d96cbba3c3e6718c1d6ea543a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS56IGF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FDvmqR2RtYKhP6MD%2Bkv9XeynTzcVNhuJB9O76rJZwhQIgbfhvCG%2F%2F7GqGccxb5JPk%2Fn3mMz6qEs%2BTBhsjtR3SlmgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqgFObesNvDol7KBircA6pvN%2FoXz6yH6F1fYHbFkLfC2mfxZd6uwiGESN9vLaCMeCAOn2HAIXkrzF5oDp2hnTbEVpxQ8IzL5MzDixPWuAWrLp18Pl1ckdvRzPXgvCba6UGxnFfV%2FSdV5dou0rFyj%2B3drgw3XHZgjB2PtWUXdewjRJH%2BLpvl8rDTXjczrVrRA4CQm7fkzPX9Ha6EmaGwH%2FyrzVhlgy%2BwXgWUTjWf3U9DhIZgXX5wZS7gE5oWfbpYsxZaecgLWWPWqZLJJuvraTsX%2FRstnfPSPigtR9hYAriiCHOuGtSlS79%2B%2BnMArrcHOWpYie9y4LbsApKZHuOpw3GLO6gxdaXLO9kj8yiB4Xl7AZPURGN%2FqgPtDyl6CZU17GdB8gKdkcyxC6arCE6X3Q1WlMVKnTUvUc5xo0VVey6TEmxFRVpxl7BoLmTK4hOxeByEWsKuVxUf6xomXWzkVwuaUyF2ThWW7rNwAmVpZBN86kUbwgCohWHmVEDuo%2BXHOcZFegvxWIRsyaZllI%2BBCp2sOOXQngWeWeVvGebbihv41pfQi7bN%2BnKvqrzN1GVA6Sm%2BlI8O%2BIrqJ6pCteZpzKAkU41qnuBgqKkg6TOH0eWpavAVE7W3BWOD3BNQRCklY60cTQpKO7pNVSygMOWr38IGOqUBQe5EUn8dDkhvgBc8ulidVHOb5otDAsI56EZ9fORXz%2BgjQvaJYUL%2B4YGqPzmqqw1HAqa%2FvEvrZc539jGvgbI9t2Hbc6AEwcH0lmYEcq4hnrJD6ms0KieBL9P0Wbpa52DoNVpY87qtbE9kv63%2F6vmLAJOBRdvb8zP6LCN5nAIYc8RuL%2B2JuhiFf3M9kDyjnwKfrjqESd3eJku8%2B4aSbIL74%2BmXATox&X-Amz-Signature=0d5f9d3d30c1156293ac3fbf70d466f7049af07b07760097d993574b90d88891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS56IGF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FDvmqR2RtYKhP6MD%2Bkv9XeynTzcVNhuJB9O76rJZwhQIgbfhvCG%2F%2F7GqGccxb5JPk%2Fn3mMz6qEs%2BTBhsjtR3SlmgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqgFObesNvDol7KBircA6pvN%2FoXz6yH6F1fYHbFkLfC2mfxZd6uwiGESN9vLaCMeCAOn2HAIXkrzF5oDp2hnTbEVpxQ8IzL5MzDixPWuAWrLp18Pl1ckdvRzPXgvCba6UGxnFfV%2FSdV5dou0rFyj%2B3drgw3XHZgjB2PtWUXdewjRJH%2BLpvl8rDTXjczrVrRA4CQm7fkzPX9Ha6EmaGwH%2FyrzVhlgy%2BwXgWUTjWf3U9DhIZgXX5wZS7gE5oWfbpYsxZaecgLWWPWqZLJJuvraTsX%2FRstnfPSPigtR9hYAriiCHOuGtSlS79%2B%2BnMArrcHOWpYie9y4LbsApKZHuOpw3GLO6gxdaXLO9kj8yiB4Xl7AZPURGN%2FqgPtDyl6CZU17GdB8gKdkcyxC6arCE6X3Q1WlMVKnTUvUc5xo0VVey6TEmxFRVpxl7BoLmTK4hOxeByEWsKuVxUf6xomXWzkVwuaUyF2ThWW7rNwAmVpZBN86kUbwgCohWHmVEDuo%2BXHOcZFegvxWIRsyaZllI%2BBCp2sOOXQngWeWeVvGebbihv41pfQi7bN%2BnKvqrzN1GVA6Sm%2BlI8O%2BIrqJ6pCteZpzKAkU41qnuBgqKkg6TOH0eWpavAVE7W3BWOD3BNQRCklY60cTQpKO7pNVSygMOWr38IGOqUBQe5EUn8dDkhvgBc8ulidVHOb5otDAsI56EZ9fORXz%2BgjQvaJYUL%2B4YGqPzmqqw1HAqa%2FvEvrZc539jGvgbI9t2Hbc6AEwcH0lmYEcq4hnrJD6ms0KieBL9P0Wbpa52DoNVpY87qtbE9kv63%2F6vmLAJOBRdvb8zP6LCN5nAIYc8RuL%2B2JuhiFf3M9kDyjnwKfrjqESd3eJku8%2B4aSbIL74%2BmXATox&X-Amz-Signature=b82077abe94d162d21d92752e06ebb84b2823eaf4186d2aa2c621434f1fcf32a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZS56IGF%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD%2FDvmqR2RtYKhP6MD%2Bkv9XeynTzcVNhuJB9O76rJZwhQIgbfhvCG%2F%2F7GqGccxb5JPk%2Fn3mMz6qEs%2BTBhsjtR3SlmgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqgFObesNvDol7KBircA6pvN%2FoXz6yH6F1fYHbFkLfC2mfxZd6uwiGESN9vLaCMeCAOn2HAIXkrzF5oDp2hnTbEVpxQ8IzL5MzDixPWuAWrLp18Pl1ckdvRzPXgvCba6UGxnFfV%2FSdV5dou0rFyj%2B3drgw3XHZgjB2PtWUXdewjRJH%2BLpvl8rDTXjczrVrRA4CQm7fkzPX9Ha6EmaGwH%2FyrzVhlgy%2BwXgWUTjWf3U9DhIZgXX5wZS7gE5oWfbpYsxZaecgLWWPWqZLJJuvraTsX%2FRstnfPSPigtR9hYAriiCHOuGtSlS79%2B%2BnMArrcHOWpYie9y4LbsApKZHuOpw3GLO6gxdaXLO9kj8yiB4Xl7AZPURGN%2FqgPtDyl6CZU17GdB8gKdkcyxC6arCE6X3Q1WlMVKnTUvUc5xo0VVey6TEmxFRVpxl7BoLmTK4hOxeByEWsKuVxUf6xomXWzkVwuaUyF2ThWW7rNwAmVpZBN86kUbwgCohWHmVEDuo%2BXHOcZFegvxWIRsyaZllI%2BBCp2sOOXQngWeWeVvGebbihv41pfQi7bN%2BnKvqrzN1GVA6Sm%2BlI8O%2BIrqJ6pCteZpzKAkU41qnuBgqKkg6TOH0eWpavAVE7W3BWOD3BNQRCklY60cTQpKO7pNVSygMOWr38IGOqUBQe5EUn8dDkhvgBc8ulidVHOb5otDAsI56EZ9fORXz%2BgjQvaJYUL%2B4YGqPzmqqw1HAqa%2FvEvrZc539jGvgbI9t2Hbc6AEwcH0lmYEcq4hnrJD6ms0KieBL9P0Wbpa52DoNVpY87qtbE9kv63%2F6vmLAJOBRdvb8zP6LCN5nAIYc8RuL%2B2JuhiFf3M9kDyjnwKfrjqESd3eJku8%2B4aSbIL74%2BmXATox&X-Amz-Signature=6dabcd3eda2d0f73af09caec0f84f353ee3810c817a117c886b52a419a08afa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
