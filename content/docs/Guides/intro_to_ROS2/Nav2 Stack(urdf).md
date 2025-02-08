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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H3HGBM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCgw5juON%2FZJTuwDLpkYTocuyycjCibVbeiHF5o6%2F%2FuggIgaU7lwMsSVARg2Ut1UlW4aJyaHL9%2BBncYTSGLDOEYMZ8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkdn%2Fqu2CFDhjacgircA1Fzz%2FhRxTyCZQp00HvctGxJG870Ggc2X%2BHPuxXoJJU94uI5oDmndoQ34yAFbUsQLQGZllppC8B8iXeAqVkYsbkpwrPG34JvtexnthbIDJc2%2B%2Bts4CMOeomI5ihAEhB3tGWNSYksfNRmChlxQZ3TohTGYHA4acK%2Bsi6UlDJRpSoY3TCkk4wa4fL%2BXOBhsk%2FD%2BfIjauIwuB64buRS2ucHd6VRs4Je229g8Mee0rasRYoCGuilWJMivU4aLZhQODS%2BxJJmoe542PifP3bmD148NRDn0K%2Fel0LcKiU2W%2BhCtAcxQ7cMKIWWjQFOFMJ1gr7VLkMs%2FREjiallADJbrX%2BkGEK%2BwKzMO8jQkBG2EuofK2aZAOKvvc6yGsP1vbSj0wbr6toivFUvdvqZ3Fx35GCXCVR7%2BDv3DC2kpo7UlINv8J5zHngzpaFLw27jV%2B%2FddUUZnb1%2FghpOI3EdG2Hq8P%2FTw1xW322%2B9Isgtv5KCTPTgkUXARWn%2FkSd3GB2UmG0AosYn4yXS4TAGzWL90%2BDBi8le%2FerzWcgTJnAkBhVgG3vEhO8Rv7UK2hc9yQA1W7vG%2Bt9zk%2F9MVjRfiNfJOYK4Iea4ZByHyrodwGga8fhhIIekiek4KPkFOwVdy0TqhOQMJiYn70GOqUBqtibs0kDSU5ZqcQfEWEBaYVrnu4iEMv%2FDFPfpYM3eyCMd%2BTbNja9d%2FuAhsHziwDnmjHzXhmokPlvWEGfEKapMb53XBTDOg6PQjGzoETXEnXWMYJpzPyeV%2FOZey5BaP%2FLpRvNYiVQD8rQHC8DlI8lc2ZHHlRHVJgf97uD%2BP%2FIKPmQtu0hKBd8ZJURGfLgwf3YWJv4ypDfWkuWHW9Mzsr6afLDdv24&X-Amz-Signature=f49163a626b3b4c6db7530a4cc22cdb84ed5ad5ab2195f6deed58ab8ae94c544&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H3HGBM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCgw5juON%2FZJTuwDLpkYTocuyycjCibVbeiHF5o6%2F%2FuggIgaU7lwMsSVARg2Ut1UlW4aJyaHL9%2BBncYTSGLDOEYMZ8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkdn%2Fqu2CFDhjacgircA1Fzz%2FhRxTyCZQp00HvctGxJG870Ggc2X%2BHPuxXoJJU94uI5oDmndoQ34yAFbUsQLQGZllppC8B8iXeAqVkYsbkpwrPG34JvtexnthbIDJc2%2B%2Bts4CMOeomI5ihAEhB3tGWNSYksfNRmChlxQZ3TohTGYHA4acK%2Bsi6UlDJRpSoY3TCkk4wa4fL%2BXOBhsk%2FD%2BfIjauIwuB64buRS2ucHd6VRs4Je229g8Mee0rasRYoCGuilWJMivU4aLZhQODS%2BxJJmoe542PifP3bmD148NRDn0K%2Fel0LcKiU2W%2BhCtAcxQ7cMKIWWjQFOFMJ1gr7VLkMs%2FREjiallADJbrX%2BkGEK%2BwKzMO8jQkBG2EuofK2aZAOKvvc6yGsP1vbSj0wbr6toivFUvdvqZ3Fx35GCXCVR7%2BDv3DC2kpo7UlINv8J5zHngzpaFLw27jV%2B%2FddUUZnb1%2FghpOI3EdG2Hq8P%2FTw1xW322%2B9Isgtv5KCTPTgkUXARWn%2FkSd3GB2UmG0AosYn4yXS4TAGzWL90%2BDBi8le%2FerzWcgTJnAkBhVgG3vEhO8Rv7UK2hc9yQA1W7vG%2Bt9zk%2F9MVjRfiNfJOYK4Iea4ZByHyrodwGga8fhhIIekiek4KPkFOwVdy0TqhOQMJiYn70GOqUBqtibs0kDSU5ZqcQfEWEBaYVrnu4iEMv%2FDFPfpYM3eyCMd%2BTbNja9d%2FuAhsHziwDnmjHzXhmokPlvWEGfEKapMb53XBTDOg6PQjGzoETXEnXWMYJpzPyeV%2FOZey5BaP%2FLpRvNYiVQD8rQHC8DlI8lc2ZHHlRHVJgf97uD%2BP%2FIKPmQtu0hKBd8ZJURGfLgwf3YWJv4ypDfWkuWHW9Mzsr6afLDdv24&X-Amz-Signature=f6c94501085a63554d2790118c13ee31f54244db7c9260249ee8cd4f51877b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H3HGBM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCgw5juON%2FZJTuwDLpkYTocuyycjCibVbeiHF5o6%2F%2FuggIgaU7lwMsSVARg2Ut1UlW4aJyaHL9%2BBncYTSGLDOEYMZ8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkdn%2Fqu2CFDhjacgircA1Fzz%2FhRxTyCZQp00HvctGxJG870Ggc2X%2BHPuxXoJJU94uI5oDmndoQ34yAFbUsQLQGZllppC8B8iXeAqVkYsbkpwrPG34JvtexnthbIDJc2%2B%2Bts4CMOeomI5ihAEhB3tGWNSYksfNRmChlxQZ3TohTGYHA4acK%2Bsi6UlDJRpSoY3TCkk4wa4fL%2BXOBhsk%2FD%2BfIjauIwuB64buRS2ucHd6VRs4Je229g8Mee0rasRYoCGuilWJMivU4aLZhQODS%2BxJJmoe542PifP3bmD148NRDn0K%2Fel0LcKiU2W%2BhCtAcxQ7cMKIWWjQFOFMJ1gr7VLkMs%2FREjiallADJbrX%2BkGEK%2BwKzMO8jQkBG2EuofK2aZAOKvvc6yGsP1vbSj0wbr6toivFUvdvqZ3Fx35GCXCVR7%2BDv3DC2kpo7UlINv8J5zHngzpaFLw27jV%2B%2FddUUZnb1%2FghpOI3EdG2Hq8P%2FTw1xW322%2B9Isgtv5KCTPTgkUXARWn%2FkSd3GB2UmG0AosYn4yXS4TAGzWL90%2BDBi8le%2FerzWcgTJnAkBhVgG3vEhO8Rv7UK2hc9yQA1W7vG%2Bt9zk%2F9MVjRfiNfJOYK4Iea4ZByHyrodwGga8fhhIIekiek4KPkFOwVdy0TqhOQMJiYn70GOqUBqtibs0kDSU5ZqcQfEWEBaYVrnu4iEMv%2FDFPfpYM3eyCMd%2BTbNja9d%2FuAhsHziwDnmjHzXhmokPlvWEGfEKapMb53XBTDOg6PQjGzoETXEnXWMYJpzPyeV%2FOZey5BaP%2FLpRvNYiVQD8rQHC8DlI8lc2ZHHlRHVJgf97uD%2BP%2FIKPmQtu0hKBd8ZJURGfLgwf3YWJv4ypDfWkuWHW9Mzsr6afLDdv24&X-Amz-Signature=258277d4e7f2a547569e8d95641f783073854178c4c69faae9b18920888f28c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H3HGBM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCgw5juON%2FZJTuwDLpkYTocuyycjCibVbeiHF5o6%2F%2FuggIgaU7lwMsSVARg2Ut1UlW4aJyaHL9%2BBncYTSGLDOEYMZ8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkdn%2Fqu2CFDhjacgircA1Fzz%2FhRxTyCZQp00HvctGxJG870Ggc2X%2BHPuxXoJJU94uI5oDmndoQ34yAFbUsQLQGZllppC8B8iXeAqVkYsbkpwrPG34JvtexnthbIDJc2%2B%2Bts4CMOeomI5ihAEhB3tGWNSYksfNRmChlxQZ3TohTGYHA4acK%2Bsi6UlDJRpSoY3TCkk4wa4fL%2BXOBhsk%2FD%2BfIjauIwuB64buRS2ucHd6VRs4Je229g8Mee0rasRYoCGuilWJMivU4aLZhQODS%2BxJJmoe542PifP3bmD148NRDn0K%2Fel0LcKiU2W%2BhCtAcxQ7cMKIWWjQFOFMJ1gr7VLkMs%2FREjiallADJbrX%2BkGEK%2BwKzMO8jQkBG2EuofK2aZAOKvvc6yGsP1vbSj0wbr6toivFUvdvqZ3Fx35GCXCVR7%2BDv3DC2kpo7UlINv8J5zHngzpaFLw27jV%2B%2FddUUZnb1%2FghpOI3EdG2Hq8P%2FTw1xW322%2B9Isgtv5KCTPTgkUXARWn%2FkSd3GB2UmG0AosYn4yXS4TAGzWL90%2BDBi8le%2FerzWcgTJnAkBhVgG3vEhO8Rv7UK2hc9yQA1W7vG%2Bt9zk%2F9MVjRfiNfJOYK4Iea4ZByHyrodwGga8fhhIIekiek4KPkFOwVdy0TqhOQMJiYn70GOqUBqtibs0kDSU5ZqcQfEWEBaYVrnu4iEMv%2FDFPfpYM3eyCMd%2BTbNja9d%2FuAhsHziwDnmjHzXhmokPlvWEGfEKapMb53XBTDOg6PQjGzoETXEnXWMYJpzPyeV%2FOZey5BaP%2FLpRvNYiVQD8rQHC8DlI8lc2ZHHlRHVJgf97uD%2BP%2FIKPmQtu0hKBd8ZJURGfLgwf3YWJv4ypDfWkuWHW9Mzsr6afLDdv24&X-Amz-Signature=d8a2f8ded18bc23b707eae52c8305ddcc703877091de9a0d7c5a9d2f023a8436&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H3HGBM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCgw5juON%2FZJTuwDLpkYTocuyycjCibVbeiHF5o6%2F%2FuggIgaU7lwMsSVARg2Ut1UlW4aJyaHL9%2BBncYTSGLDOEYMZ8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkdn%2Fqu2CFDhjacgircA1Fzz%2FhRxTyCZQp00HvctGxJG870Ggc2X%2BHPuxXoJJU94uI5oDmndoQ34yAFbUsQLQGZllppC8B8iXeAqVkYsbkpwrPG34JvtexnthbIDJc2%2B%2Bts4CMOeomI5ihAEhB3tGWNSYksfNRmChlxQZ3TohTGYHA4acK%2Bsi6UlDJRpSoY3TCkk4wa4fL%2BXOBhsk%2FD%2BfIjauIwuB64buRS2ucHd6VRs4Je229g8Mee0rasRYoCGuilWJMivU4aLZhQODS%2BxJJmoe542PifP3bmD148NRDn0K%2Fel0LcKiU2W%2BhCtAcxQ7cMKIWWjQFOFMJ1gr7VLkMs%2FREjiallADJbrX%2BkGEK%2BwKzMO8jQkBG2EuofK2aZAOKvvc6yGsP1vbSj0wbr6toivFUvdvqZ3Fx35GCXCVR7%2BDv3DC2kpo7UlINv8J5zHngzpaFLw27jV%2B%2FddUUZnb1%2FghpOI3EdG2Hq8P%2FTw1xW322%2B9Isgtv5KCTPTgkUXARWn%2FkSd3GB2UmG0AosYn4yXS4TAGzWL90%2BDBi8le%2FerzWcgTJnAkBhVgG3vEhO8Rv7UK2hc9yQA1W7vG%2Bt9zk%2F9MVjRfiNfJOYK4Iea4ZByHyrodwGga8fhhIIekiek4KPkFOwVdy0TqhOQMJiYn70GOqUBqtibs0kDSU5ZqcQfEWEBaYVrnu4iEMv%2FDFPfpYM3eyCMd%2BTbNja9d%2FuAhsHziwDnmjHzXhmokPlvWEGfEKapMb53XBTDOg6PQjGzoETXEnXWMYJpzPyeV%2FOZey5BaP%2FLpRvNYiVQD8rQHC8DlI8lc2ZHHlRHVJgf97uD%2BP%2FIKPmQtu0hKBd8ZJURGfLgwf3YWJv4ypDfWkuWHW9Mzsr6afLDdv24&X-Amz-Signature=6d60bfd16860a4b3c2300fd9fb66908ba0123353ce6af086d41bb0c22e55c8bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H3HGBM%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T230259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCgw5juON%2FZJTuwDLpkYTocuyycjCibVbeiHF5o6%2F%2FuggIgaU7lwMsSVARg2Ut1UlW4aJyaHL9%2BBncYTSGLDOEYMZ8qiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkdn%2Fqu2CFDhjacgircA1Fzz%2FhRxTyCZQp00HvctGxJG870Ggc2X%2BHPuxXoJJU94uI5oDmndoQ34yAFbUsQLQGZllppC8B8iXeAqVkYsbkpwrPG34JvtexnthbIDJc2%2B%2Bts4CMOeomI5ihAEhB3tGWNSYksfNRmChlxQZ3TohTGYHA4acK%2Bsi6UlDJRpSoY3TCkk4wa4fL%2BXOBhsk%2FD%2BfIjauIwuB64buRS2ucHd6VRs4Je229g8Mee0rasRYoCGuilWJMivU4aLZhQODS%2BxJJmoe542PifP3bmD148NRDn0K%2Fel0LcKiU2W%2BhCtAcxQ7cMKIWWjQFOFMJ1gr7VLkMs%2FREjiallADJbrX%2BkGEK%2BwKzMO8jQkBG2EuofK2aZAOKvvc6yGsP1vbSj0wbr6toivFUvdvqZ3Fx35GCXCVR7%2BDv3DC2kpo7UlINv8J5zHngzpaFLw27jV%2B%2FddUUZnb1%2FghpOI3EdG2Hq8P%2FTw1xW322%2B9Isgtv5KCTPTgkUXARWn%2FkSd3GB2UmG0AosYn4yXS4TAGzWL90%2BDBi8le%2FerzWcgTJnAkBhVgG3vEhO8Rv7UK2hc9yQA1W7vG%2Bt9zk%2F9MVjRfiNfJOYK4Iea4ZByHyrodwGga8fhhIIekiek4KPkFOwVdy0TqhOQMJiYn70GOqUBqtibs0kDSU5ZqcQfEWEBaYVrnu4iEMv%2FDFPfpYM3eyCMd%2BTbNja9d%2FuAhsHziwDnmjHzXhmokPlvWEGfEKapMb53XBTDOg6PQjGzoETXEnXWMYJpzPyeV%2FOZey5BaP%2FLpRvNYiVQD8rQHC8DlI8lc2ZHHlRHVJgf97uD%2BP%2FIKPmQtu0hKBd8ZJURGfLgwf3YWJv4ypDfWkuWHW9Mzsr6afLDdv24&X-Amz-Signature=eee3cf9fbfae2f6d41a65a3a8ec3e612aac306238b064ed941ed1d9e560a6842&X-Amz-SignedHeaders=host&x-id=GetObject)
