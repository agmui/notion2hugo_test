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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFVCMDOZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGZAKGCROSCdnH2JZzo5NUg0GVTPb7EgtOU%2FM1g2z3WzAiEAnvV9ckB2LEiFBQxVEi5Ydu1qc%2Fg1Y6N5NN%2Fzq8f6twAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdFRJ8PDznSXqRz3SrcA8gBoIxEyz%2B4JAnQ4kTM%2FOzSp6Sj99%2FDjGDTeGJUVkzN247AXHoqVeWmQf3XgHkMYG3EjzW4RHyxyv2VuViFHh1X%2BeqZOQECdbGmuQMHP22Ou2HAHDByCR9wgeAsR1GZzQ7L3%2FSAyN4oA5pCJVLLGtN1dH%2FlpkqJvh620aHLdm4F6Y84qqLs6LLqYgZ8sazcl0oMXYdF1tuaUxM4PQ8qiJjRHjIN5EPr2gPClJ53Y4bw2WEv2G8fhACdEZ5AI9W5YrlmeDtXDbYkd%2BbCxyScIJwKCncj%2F4cBB0GZWVGZQ93WwMe8ZtDm%2FCavHs0rlSG4i%2Bz%2B0LTXwphNLGLzuecms3cXkQ4Bg0Y2PFU9dGhB6MYKPuY1VcQ3gwViRO4TN4b3U0xvXd0FtzF0j5p0%2BhWM3WpONo%2BmJxO6eaNacPRm3lHugO9mRYca3esEB98mWgRGL%2ByGKujDvonpBe%2FprifZ3ts7LLv6gU1GOPuvqN1ZXwOdYxxazO7fwqpmR%2Bp0B4Ahr6gChQHCYWG5xRaw8f2%2FtiKH5CBi2WC3ROWiYt5HFKNrvR%2FVMYp0ccmzRqREwgpEw0AuWzAOHfQ3pK3925zeYAiA2FucLky1eg%2BHrh6KQex0jjRPXhu3FJScbIwcMN7BjMEGOqUBrQ3BvG0RkUMvWNPYlpb5l71Py2XOnOFoxcmnTP3NiZkUb3BE2Fik0VOQScIr1J8j%2B65sjYy79ybbMjwbpZyj90mB1XpvEMPjAqgccVSar0w3CwXQbKa9rxwC1L7vqPPJiD%2B6NQLFBtM16PMYXKgusd0qg4KsRWzZUXHl%2Bwh6tA%2FtNR5EDq4A5udo%2FSjNPqRP%2BvjK0CSBU0QZUld6Iv9Vu0izuFsy&X-Amz-Signature=1c90d30301e90734653b1f57d983e795540288e7fd87c49fc6e24f4f72f60afb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFVCMDOZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGZAKGCROSCdnH2JZzo5NUg0GVTPb7EgtOU%2FM1g2z3WzAiEAnvV9ckB2LEiFBQxVEi5Ydu1qc%2Fg1Y6N5NN%2Fzq8f6twAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdFRJ8PDznSXqRz3SrcA8gBoIxEyz%2B4JAnQ4kTM%2FOzSp6Sj99%2FDjGDTeGJUVkzN247AXHoqVeWmQf3XgHkMYG3EjzW4RHyxyv2VuViFHh1X%2BeqZOQECdbGmuQMHP22Ou2HAHDByCR9wgeAsR1GZzQ7L3%2FSAyN4oA5pCJVLLGtN1dH%2FlpkqJvh620aHLdm4F6Y84qqLs6LLqYgZ8sazcl0oMXYdF1tuaUxM4PQ8qiJjRHjIN5EPr2gPClJ53Y4bw2WEv2G8fhACdEZ5AI9W5YrlmeDtXDbYkd%2BbCxyScIJwKCncj%2F4cBB0GZWVGZQ93WwMe8ZtDm%2FCavHs0rlSG4i%2Bz%2B0LTXwphNLGLzuecms3cXkQ4Bg0Y2PFU9dGhB6MYKPuY1VcQ3gwViRO4TN4b3U0xvXd0FtzF0j5p0%2BhWM3WpONo%2BmJxO6eaNacPRm3lHugO9mRYca3esEB98mWgRGL%2ByGKujDvonpBe%2FprifZ3ts7LLv6gU1GOPuvqN1ZXwOdYxxazO7fwqpmR%2Bp0B4Ahr6gChQHCYWG5xRaw8f2%2FtiKH5CBi2WC3ROWiYt5HFKNrvR%2FVMYp0ccmzRqREwgpEw0AuWzAOHfQ3pK3925zeYAiA2FucLky1eg%2BHrh6KQex0jjRPXhu3FJScbIwcMN7BjMEGOqUBrQ3BvG0RkUMvWNPYlpb5l71Py2XOnOFoxcmnTP3NiZkUb3BE2Fik0VOQScIr1J8j%2B65sjYy79ybbMjwbpZyj90mB1XpvEMPjAqgccVSar0w3CwXQbKa9rxwC1L7vqPPJiD%2B6NQLFBtM16PMYXKgusd0qg4KsRWzZUXHl%2Bwh6tA%2FtNR5EDq4A5udo%2FSjNPqRP%2BvjK0CSBU0QZUld6Iv9Vu0izuFsy&X-Amz-Signature=f4e594815117a230cc6bd930728e625d29f7142d757c3871e8a1b6fab12555c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFVCMDOZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGZAKGCROSCdnH2JZzo5NUg0GVTPb7EgtOU%2FM1g2z3WzAiEAnvV9ckB2LEiFBQxVEi5Ydu1qc%2Fg1Y6N5NN%2Fzq8f6twAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdFRJ8PDznSXqRz3SrcA8gBoIxEyz%2B4JAnQ4kTM%2FOzSp6Sj99%2FDjGDTeGJUVkzN247AXHoqVeWmQf3XgHkMYG3EjzW4RHyxyv2VuViFHh1X%2BeqZOQECdbGmuQMHP22Ou2HAHDByCR9wgeAsR1GZzQ7L3%2FSAyN4oA5pCJVLLGtN1dH%2FlpkqJvh620aHLdm4F6Y84qqLs6LLqYgZ8sazcl0oMXYdF1tuaUxM4PQ8qiJjRHjIN5EPr2gPClJ53Y4bw2WEv2G8fhACdEZ5AI9W5YrlmeDtXDbYkd%2BbCxyScIJwKCncj%2F4cBB0GZWVGZQ93WwMe8ZtDm%2FCavHs0rlSG4i%2Bz%2B0LTXwphNLGLzuecms3cXkQ4Bg0Y2PFU9dGhB6MYKPuY1VcQ3gwViRO4TN4b3U0xvXd0FtzF0j5p0%2BhWM3WpONo%2BmJxO6eaNacPRm3lHugO9mRYca3esEB98mWgRGL%2ByGKujDvonpBe%2FprifZ3ts7LLv6gU1GOPuvqN1ZXwOdYxxazO7fwqpmR%2Bp0B4Ahr6gChQHCYWG5xRaw8f2%2FtiKH5CBi2WC3ROWiYt5HFKNrvR%2FVMYp0ccmzRqREwgpEw0AuWzAOHfQ3pK3925zeYAiA2FucLky1eg%2BHrh6KQex0jjRPXhu3FJScbIwcMN7BjMEGOqUBrQ3BvG0RkUMvWNPYlpb5l71Py2XOnOFoxcmnTP3NiZkUb3BE2Fik0VOQScIr1J8j%2B65sjYy79ybbMjwbpZyj90mB1XpvEMPjAqgccVSar0w3CwXQbKa9rxwC1L7vqPPJiD%2B6NQLFBtM16PMYXKgusd0qg4KsRWzZUXHl%2Bwh6tA%2FtNR5EDq4A5udo%2FSjNPqRP%2BvjK0CSBU0QZUld6Iv9Vu0izuFsy&X-Amz-Signature=9f670435c8db6b08e684f534de22414c2227d788e8d7646fd1b0b4633a119e88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFVCMDOZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGZAKGCROSCdnH2JZzo5NUg0GVTPb7EgtOU%2FM1g2z3WzAiEAnvV9ckB2LEiFBQxVEi5Ydu1qc%2Fg1Y6N5NN%2Fzq8f6twAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdFRJ8PDznSXqRz3SrcA8gBoIxEyz%2B4JAnQ4kTM%2FOzSp6Sj99%2FDjGDTeGJUVkzN247AXHoqVeWmQf3XgHkMYG3EjzW4RHyxyv2VuViFHh1X%2BeqZOQECdbGmuQMHP22Ou2HAHDByCR9wgeAsR1GZzQ7L3%2FSAyN4oA5pCJVLLGtN1dH%2FlpkqJvh620aHLdm4F6Y84qqLs6LLqYgZ8sazcl0oMXYdF1tuaUxM4PQ8qiJjRHjIN5EPr2gPClJ53Y4bw2WEv2G8fhACdEZ5AI9W5YrlmeDtXDbYkd%2BbCxyScIJwKCncj%2F4cBB0GZWVGZQ93WwMe8ZtDm%2FCavHs0rlSG4i%2Bz%2B0LTXwphNLGLzuecms3cXkQ4Bg0Y2PFU9dGhB6MYKPuY1VcQ3gwViRO4TN4b3U0xvXd0FtzF0j5p0%2BhWM3WpONo%2BmJxO6eaNacPRm3lHugO9mRYca3esEB98mWgRGL%2ByGKujDvonpBe%2FprifZ3ts7LLv6gU1GOPuvqN1ZXwOdYxxazO7fwqpmR%2Bp0B4Ahr6gChQHCYWG5xRaw8f2%2FtiKH5CBi2WC3ROWiYt5HFKNrvR%2FVMYp0ccmzRqREwgpEw0AuWzAOHfQ3pK3925zeYAiA2FucLky1eg%2BHrh6KQex0jjRPXhu3FJScbIwcMN7BjMEGOqUBrQ3BvG0RkUMvWNPYlpb5l71Py2XOnOFoxcmnTP3NiZkUb3BE2Fik0VOQScIr1J8j%2B65sjYy79ybbMjwbpZyj90mB1XpvEMPjAqgccVSar0w3CwXQbKa9rxwC1L7vqPPJiD%2B6NQLFBtM16PMYXKgusd0qg4KsRWzZUXHl%2Bwh6tA%2FtNR5EDq4A5udo%2FSjNPqRP%2BvjK0CSBU0QZUld6Iv9Vu0izuFsy&X-Amz-Signature=a3f218bedef80a2ebdfd5ef4c29fe8e5b66e8ea5bce43bdaa1339b4671e62a96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFVCMDOZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGZAKGCROSCdnH2JZzo5NUg0GVTPb7EgtOU%2FM1g2z3WzAiEAnvV9ckB2LEiFBQxVEi5Ydu1qc%2Fg1Y6N5NN%2Fzq8f6twAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdFRJ8PDznSXqRz3SrcA8gBoIxEyz%2B4JAnQ4kTM%2FOzSp6Sj99%2FDjGDTeGJUVkzN247AXHoqVeWmQf3XgHkMYG3EjzW4RHyxyv2VuViFHh1X%2BeqZOQECdbGmuQMHP22Ou2HAHDByCR9wgeAsR1GZzQ7L3%2FSAyN4oA5pCJVLLGtN1dH%2FlpkqJvh620aHLdm4F6Y84qqLs6LLqYgZ8sazcl0oMXYdF1tuaUxM4PQ8qiJjRHjIN5EPr2gPClJ53Y4bw2WEv2G8fhACdEZ5AI9W5YrlmeDtXDbYkd%2BbCxyScIJwKCncj%2F4cBB0GZWVGZQ93WwMe8ZtDm%2FCavHs0rlSG4i%2Bz%2B0LTXwphNLGLzuecms3cXkQ4Bg0Y2PFU9dGhB6MYKPuY1VcQ3gwViRO4TN4b3U0xvXd0FtzF0j5p0%2BhWM3WpONo%2BmJxO6eaNacPRm3lHugO9mRYca3esEB98mWgRGL%2ByGKujDvonpBe%2FprifZ3ts7LLv6gU1GOPuvqN1ZXwOdYxxazO7fwqpmR%2Bp0B4Ahr6gChQHCYWG5xRaw8f2%2FtiKH5CBi2WC3ROWiYt5HFKNrvR%2FVMYp0ccmzRqREwgpEw0AuWzAOHfQ3pK3925zeYAiA2FucLky1eg%2BHrh6KQex0jjRPXhu3FJScbIwcMN7BjMEGOqUBrQ3BvG0RkUMvWNPYlpb5l71Py2XOnOFoxcmnTP3NiZkUb3BE2Fik0VOQScIr1J8j%2B65sjYy79ybbMjwbpZyj90mB1XpvEMPjAqgccVSar0w3CwXQbKa9rxwC1L7vqPPJiD%2B6NQLFBtM16PMYXKgusd0qg4KsRWzZUXHl%2Bwh6tA%2FtNR5EDq4A5udo%2FSjNPqRP%2BvjK0CSBU0QZUld6Iv9Vu0izuFsy&X-Amz-Signature=c84eb2bc365cdcd10d886fad5cee93a47499c14d9e7ed1afeaf8fc2b3df1fb9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFVCMDOZ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGZAKGCROSCdnH2JZzo5NUg0GVTPb7EgtOU%2FM1g2z3WzAiEAnvV9ckB2LEiFBQxVEi5Ydu1qc%2Fg1Y6N5NN%2Fzq8f6twAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdFRJ8PDznSXqRz3SrcA8gBoIxEyz%2B4JAnQ4kTM%2FOzSp6Sj99%2FDjGDTeGJUVkzN247AXHoqVeWmQf3XgHkMYG3EjzW4RHyxyv2VuViFHh1X%2BeqZOQECdbGmuQMHP22Ou2HAHDByCR9wgeAsR1GZzQ7L3%2FSAyN4oA5pCJVLLGtN1dH%2FlpkqJvh620aHLdm4F6Y84qqLs6LLqYgZ8sazcl0oMXYdF1tuaUxM4PQ8qiJjRHjIN5EPr2gPClJ53Y4bw2WEv2G8fhACdEZ5AI9W5YrlmeDtXDbYkd%2BbCxyScIJwKCncj%2F4cBB0GZWVGZQ93WwMe8ZtDm%2FCavHs0rlSG4i%2Bz%2B0LTXwphNLGLzuecms3cXkQ4Bg0Y2PFU9dGhB6MYKPuY1VcQ3gwViRO4TN4b3U0xvXd0FtzF0j5p0%2BhWM3WpONo%2BmJxO6eaNacPRm3lHugO9mRYca3esEB98mWgRGL%2ByGKujDvonpBe%2FprifZ3ts7LLv6gU1GOPuvqN1ZXwOdYxxazO7fwqpmR%2Bp0B4Ahr6gChQHCYWG5xRaw8f2%2FtiKH5CBi2WC3ROWiYt5HFKNrvR%2FVMYp0ccmzRqREwgpEw0AuWzAOHfQ3pK3925zeYAiA2FucLky1eg%2BHrh6KQex0jjRPXhu3FJScbIwcMN7BjMEGOqUBrQ3BvG0RkUMvWNPYlpb5l71Py2XOnOFoxcmnTP3NiZkUb3BE2Fik0VOQScIr1J8j%2B65sjYy79ybbMjwbpZyj90mB1XpvEMPjAqgccVSar0w3CwXQbKa9rxwC1L7vqPPJiD%2B6NQLFBtM16PMYXKgusd0qg4KsRWzZUXHl%2Bwh6tA%2FtNR5EDq4A5udo%2FSjNPqRP%2BvjK0CSBU0QZUld6Iv9Vu0izuFsy&X-Amz-Signature=a75118f379b1e8e6e081faf98cf59da0e74beee6550601c170544d2db9f64662&X-Amz-SignedHeaders=host&x-id=GetObject)
