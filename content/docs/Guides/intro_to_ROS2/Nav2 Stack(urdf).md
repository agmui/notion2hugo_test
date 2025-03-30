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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEKAVS6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDu9GGVmcITnn4n53duHvE7RHQujOoZ5%2BHIRBnQl667xAIgChfMOga3Mbe9nK%2BcFDxmKll1v4AH2yBiGyIx6i6HqNkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATc7u3Qj1v8tGyxeircA4qcsIo6R3351S0PTGe3Aj9M8Q28pCqdvNmz%2FSw4iTMxE7LplBg6BS8e0pKSHbEPsrLUoTjFoe0vU4VSEuQCMXumy40JhCssqbU7vBKDTX2pb%2BIiH15LAm5TCHzUygtqezzg4WWMyqD%2BOd1ouvLkMzz2Aru4LTmHX7TzjIKJGxqjMc2vDOedUwJhmliAP7B5SXHNhNdWnGxcJo22GHrko%2FopHYK961ezEYeUpftejgDGa500UHts4Td%2BYg33BgRaix6SctYmoJ8TlCfjfwYdMTf3bCe1Dd%2FGEluOIQ52NLuOVyHqi6Iw%2FsBDT%2FeAtbxZPMe2dGs7dh7l7mDYoN6HWqaV2FBaWljj4hdRzq4BfHFYxcjAEphddt9XZpOllbNxLrJfm%2FQTBQN8VCotQh90XCvXnb14OnYZcOJv9r0xk65FfHwmSC2OQyDxBljrYXZtEFt%2Bm%2BgL%2F6rHlu8xtXwRfQpWr9IGmdMfrophuWR8jBSqDe%2BAe4WyJ%2B%2B7S5klk%2BdKvhom2%2Fx%2FeYKMLvXQKCko6EoNFJKb1myDQ1%2Fq40myijqpmmUn5fwv8WyRVyrzjG13H%2BrNFuCJLdwUtvbEVhoMRaskHWwXwDKu2yuS8HU%2B9YR1oqZiB1mK8nSuQvq1MInYpr8GOqUBiXI37Jk%2FZBItgRxYUg5bmueiWpDxS0WWQ6Zxa6gX5SycSZsyoCvOair69cUxdMyDDgfAHNxbJHP0X2k%2FQih7jm4H6IvvIaVAknwLFYuYcrWPX6Nkl33XLa9xCJTT9Z2KYSkscbA9eLpqsNuA%2ByBGokpReYvIOfhGQn%2BrbKrV6fT5z1VOT9Q2T1f7nM2YUKx2XTCrgCRPPEXg8EBcV0gT%2B82AZY1F&X-Amz-Signature=7844f54b0fc1a3817750eb41d8233a90d45ba62646a8640b6f12f688f42d3fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEKAVS6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDu9GGVmcITnn4n53duHvE7RHQujOoZ5%2BHIRBnQl667xAIgChfMOga3Mbe9nK%2BcFDxmKll1v4AH2yBiGyIx6i6HqNkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATc7u3Qj1v8tGyxeircA4qcsIo6R3351S0PTGe3Aj9M8Q28pCqdvNmz%2FSw4iTMxE7LplBg6BS8e0pKSHbEPsrLUoTjFoe0vU4VSEuQCMXumy40JhCssqbU7vBKDTX2pb%2BIiH15LAm5TCHzUygtqezzg4WWMyqD%2BOd1ouvLkMzz2Aru4LTmHX7TzjIKJGxqjMc2vDOedUwJhmliAP7B5SXHNhNdWnGxcJo22GHrko%2FopHYK961ezEYeUpftejgDGa500UHts4Td%2BYg33BgRaix6SctYmoJ8TlCfjfwYdMTf3bCe1Dd%2FGEluOIQ52NLuOVyHqi6Iw%2FsBDT%2FeAtbxZPMe2dGs7dh7l7mDYoN6HWqaV2FBaWljj4hdRzq4BfHFYxcjAEphddt9XZpOllbNxLrJfm%2FQTBQN8VCotQh90XCvXnb14OnYZcOJv9r0xk65FfHwmSC2OQyDxBljrYXZtEFt%2Bm%2BgL%2F6rHlu8xtXwRfQpWr9IGmdMfrophuWR8jBSqDe%2BAe4WyJ%2B%2B7S5klk%2BdKvhom2%2Fx%2FeYKMLvXQKCko6EoNFJKb1myDQ1%2Fq40myijqpmmUn5fwv8WyRVyrzjG13H%2BrNFuCJLdwUtvbEVhoMRaskHWwXwDKu2yuS8HU%2B9YR1oqZiB1mK8nSuQvq1MInYpr8GOqUBiXI37Jk%2FZBItgRxYUg5bmueiWpDxS0WWQ6Zxa6gX5SycSZsyoCvOair69cUxdMyDDgfAHNxbJHP0X2k%2FQih7jm4H6IvvIaVAknwLFYuYcrWPX6Nkl33XLa9xCJTT9Z2KYSkscbA9eLpqsNuA%2ByBGokpReYvIOfhGQn%2BrbKrV6fT5z1VOT9Q2T1f7nM2YUKx2XTCrgCRPPEXg8EBcV0gT%2B82AZY1F&X-Amz-Signature=8370203f895d98d098c052106943781a90e46cf3e21e8c6a1fb82f745329e3be&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEKAVS6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDu9GGVmcITnn4n53duHvE7RHQujOoZ5%2BHIRBnQl667xAIgChfMOga3Mbe9nK%2BcFDxmKll1v4AH2yBiGyIx6i6HqNkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATc7u3Qj1v8tGyxeircA4qcsIo6R3351S0PTGe3Aj9M8Q28pCqdvNmz%2FSw4iTMxE7LplBg6BS8e0pKSHbEPsrLUoTjFoe0vU4VSEuQCMXumy40JhCssqbU7vBKDTX2pb%2BIiH15LAm5TCHzUygtqezzg4WWMyqD%2BOd1ouvLkMzz2Aru4LTmHX7TzjIKJGxqjMc2vDOedUwJhmliAP7B5SXHNhNdWnGxcJo22GHrko%2FopHYK961ezEYeUpftejgDGa500UHts4Td%2BYg33BgRaix6SctYmoJ8TlCfjfwYdMTf3bCe1Dd%2FGEluOIQ52NLuOVyHqi6Iw%2FsBDT%2FeAtbxZPMe2dGs7dh7l7mDYoN6HWqaV2FBaWljj4hdRzq4BfHFYxcjAEphddt9XZpOllbNxLrJfm%2FQTBQN8VCotQh90XCvXnb14OnYZcOJv9r0xk65FfHwmSC2OQyDxBljrYXZtEFt%2Bm%2BgL%2F6rHlu8xtXwRfQpWr9IGmdMfrophuWR8jBSqDe%2BAe4WyJ%2B%2B7S5klk%2BdKvhom2%2Fx%2FeYKMLvXQKCko6EoNFJKb1myDQ1%2Fq40myijqpmmUn5fwv8WyRVyrzjG13H%2BrNFuCJLdwUtvbEVhoMRaskHWwXwDKu2yuS8HU%2B9YR1oqZiB1mK8nSuQvq1MInYpr8GOqUBiXI37Jk%2FZBItgRxYUg5bmueiWpDxS0WWQ6Zxa6gX5SycSZsyoCvOair69cUxdMyDDgfAHNxbJHP0X2k%2FQih7jm4H6IvvIaVAknwLFYuYcrWPX6Nkl33XLa9xCJTT9Z2KYSkscbA9eLpqsNuA%2ByBGokpReYvIOfhGQn%2BrbKrV6fT5z1VOT9Q2T1f7nM2YUKx2XTCrgCRPPEXg8EBcV0gT%2B82AZY1F&X-Amz-Signature=08a5a5d23a01a0d4f318990ef296d1d82fa4359b27185f470ed94b216735b4f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEKAVS6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDu9GGVmcITnn4n53duHvE7RHQujOoZ5%2BHIRBnQl667xAIgChfMOga3Mbe9nK%2BcFDxmKll1v4AH2yBiGyIx6i6HqNkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATc7u3Qj1v8tGyxeircA4qcsIo6R3351S0PTGe3Aj9M8Q28pCqdvNmz%2FSw4iTMxE7LplBg6BS8e0pKSHbEPsrLUoTjFoe0vU4VSEuQCMXumy40JhCssqbU7vBKDTX2pb%2BIiH15LAm5TCHzUygtqezzg4WWMyqD%2BOd1ouvLkMzz2Aru4LTmHX7TzjIKJGxqjMc2vDOedUwJhmliAP7B5SXHNhNdWnGxcJo22GHrko%2FopHYK961ezEYeUpftejgDGa500UHts4Td%2BYg33BgRaix6SctYmoJ8TlCfjfwYdMTf3bCe1Dd%2FGEluOIQ52NLuOVyHqi6Iw%2FsBDT%2FeAtbxZPMe2dGs7dh7l7mDYoN6HWqaV2FBaWljj4hdRzq4BfHFYxcjAEphddt9XZpOllbNxLrJfm%2FQTBQN8VCotQh90XCvXnb14OnYZcOJv9r0xk65FfHwmSC2OQyDxBljrYXZtEFt%2Bm%2BgL%2F6rHlu8xtXwRfQpWr9IGmdMfrophuWR8jBSqDe%2BAe4WyJ%2B%2B7S5klk%2BdKvhom2%2Fx%2FeYKMLvXQKCko6EoNFJKb1myDQ1%2Fq40myijqpmmUn5fwv8WyRVyrzjG13H%2BrNFuCJLdwUtvbEVhoMRaskHWwXwDKu2yuS8HU%2B9YR1oqZiB1mK8nSuQvq1MInYpr8GOqUBiXI37Jk%2FZBItgRxYUg5bmueiWpDxS0WWQ6Zxa6gX5SycSZsyoCvOair69cUxdMyDDgfAHNxbJHP0X2k%2FQih7jm4H6IvvIaVAknwLFYuYcrWPX6Nkl33XLa9xCJTT9Z2KYSkscbA9eLpqsNuA%2ByBGokpReYvIOfhGQn%2BrbKrV6fT5z1VOT9Q2T1f7nM2YUKx2XTCrgCRPPEXg8EBcV0gT%2B82AZY1F&X-Amz-Signature=8ab4029d9befa198175dcf06103222bf761243dbd782aeecac12d28489846436&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEKAVS6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDu9GGVmcITnn4n53duHvE7RHQujOoZ5%2BHIRBnQl667xAIgChfMOga3Mbe9nK%2BcFDxmKll1v4AH2yBiGyIx6i6HqNkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATc7u3Qj1v8tGyxeircA4qcsIo6R3351S0PTGe3Aj9M8Q28pCqdvNmz%2FSw4iTMxE7LplBg6BS8e0pKSHbEPsrLUoTjFoe0vU4VSEuQCMXumy40JhCssqbU7vBKDTX2pb%2BIiH15LAm5TCHzUygtqezzg4WWMyqD%2BOd1ouvLkMzz2Aru4LTmHX7TzjIKJGxqjMc2vDOedUwJhmliAP7B5SXHNhNdWnGxcJo22GHrko%2FopHYK961ezEYeUpftejgDGa500UHts4Td%2BYg33BgRaix6SctYmoJ8TlCfjfwYdMTf3bCe1Dd%2FGEluOIQ52NLuOVyHqi6Iw%2FsBDT%2FeAtbxZPMe2dGs7dh7l7mDYoN6HWqaV2FBaWljj4hdRzq4BfHFYxcjAEphddt9XZpOllbNxLrJfm%2FQTBQN8VCotQh90XCvXnb14OnYZcOJv9r0xk65FfHwmSC2OQyDxBljrYXZtEFt%2Bm%2BgL%2F6rHlu8xtXwRfQpWr9IGmdMfrophuWR8jBSqDe%2BAe4WyJ%2B%2B7S5klk%2BdKvhom2%2Fx%2FeYKMLvXQKCko6EoNFJKb1myDQ1%2Fq40myijqpmmUn5fwv8WyRVyrzjG13H%2BrNFuCJLdwUtvbEVhoMRaskHWwXwDKu2yuS8HU%2B9YR1oqZiB1mK8nSuQvq1MInYpr8GOqUBiXI37Jk%2FZBItgRxYUg5bmueiWpDxS0WWQ6Zxa6gX5SycSZsyoCvOair69cUxdMyDDgfAHNxbJHP0X2k%2FQih7jm4H6IvvIaVAknwLFYuYcrWPX6Nkl33XLa9xCJTT9Z2KYSkscbA9eLpqsNuA%2ByBGokpReYvIOfhGQn%2BrbKrV6fT5z1VOT9Q2T1f7nM2YUKx2XTCrgCRPPEXg8EBcV0gT%2B82AZY1F&X-Amz-Signature=34eb585aaf465e92ae75d1025d7200c6e3ee4a06aed539580a98b82305a62b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXEKAVS6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDu9GGVmcITnn4n53duHvE7RHQujOoZ5%2BHIRBnQl667xAIgChfMOga3Mbe9nK%2BcFDxmKll1v4AH2yBiGyIx6i6HqNkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATc7u3Qj1v8tGyxeircA4qcsIo6R3351S0PTGe3Aj9M8Q28pCqdvNmz%2FSw4iTMxE7LplBg6BS8e0pKSHbEPsrLUoTjFoe0vU4VSEuQCMXumy40JhCssqbU7vBKDTX2pb%2BIiH15LAm5TCHzUygtqezzg4WWMyqD%2BOd1ouvLkMzz2Aru4LTmHX7TzjIKJGxqjMc2vDOedUwJhmliAP7B5SXHNhNdWnGxcJo22GHrko%2FopHYK961ezEYeUpftejgDGa500UHts4Td%2BYg33BgRaix6SctYmoJ8TlCfjfwYdMTf3bCe1Dd%2FGEluOIQ52NLuOVyHqi6Iw%2FsBDT%2FeAtbxZPMe2dGs7dh7l7mDYoN6HWqaV2FBaWljj4hdRzq4BfHFYxcjAEphddt9XZpOllbNxLrJfm%2FQTBQN8VCotQh90XCvXnb14OnYZcOJv9r0xk65FfHwmSC2OQyDxBljrYXZtEFt%2Bm%2BgL%2F6rHlu8xtXwRfQpWr9IGmdMfrophuWR8jBSqDe%2BAe4WyJ%2B%2B7S5klk%2BdKvhom2%2Fx%2FeYKMLvXQKCko6EoNFJKb1myDQ1%2Fq40myijqpmmUn5fwv8WyRVyrzjG13H%2BrNFuCJLdwUtvbEVhoMRaskHWwXwDKu2yuS8HU%2B9YR1oqZiB1mK8nSuQvq1MInYpr8GOqUBiXI37Jk%2FZBItgRxYUg5bmueiWpDxS0WWQ6Zxa6gX5SycSZsyoCvOair69cUxdMyDDgfAHNxbJHP0X2k%2FQih7jm4H6IvvIaVAknwLFYuYcrWPX6Nkl33XLa9xCJTT9Z2KYSkscbA9eLpqsNuA%2ByBGokpReYvIOfhGQn%2BrbKrV6fT5z1VOT9Q2T1f7nM2YUKx2XTCrgCRPPEXg8EBcV0gT%2B82AZY1F&X-Amz-Signature=f493f00c15e178ecf7b005433e1bc2aed342a4cb2eadc70e4e632e50a05e40b7&X-Amz-SignedHeaders=host&x-id=GetObject)
