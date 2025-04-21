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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEQ7W7J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCKQc3d7BXDbTKE9ZjYoDoQSOukMthRk1r9HXInPGAF0QIhAOkutmh2LLj5qsruvXc5Gs2fqK3Hh2y6zRezTdtNACj9KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkmoLa8iHqkPBPZSMq3AMmIqr6pYhPBVANCOiV5y7lbuMlQk9XAiA2WLAGnBz9Ie7yiCGaj0KkSTEMPbXi8mYmzfwpKTE7CWG%2BvYkq0HFNOiVaMGJhx0OBN0aLioLeoSVpSAU4aLI5Fgl7MW%2BuKSNREk9aIRzM4i4RZVcm2ovd27Nf2XmpN68IU6Vg80vaiafFuDSCyKukquHMHb7K69tMhc8Pk5ohtN6aT6%2FebOJpJ9rWI%2BHkbcMfG5d2J79HVEFic%2FJir59jGm2EYinvy9eLi%2BO7KhOEwwh9CDJCmCH6QwrKrPv03YU3aRcucVhZCsnMQ%2BaVEJiSdaStszZQ4PTggWAuBcox0C9%2BChM5U8vPW%2ByunQraFMvn%2F46VSazvyyzWFNxPfT6FgT2fzP8vB03ceDvjzdIorh%2BOP9vfC19vU3AUPermYFLgoCjmDhvMEd1o4Tx1mlyBblUUB6f5tZ8YFHwFHlrBe5JAeqa1MLq1gVYe0FIMNlUKi3OCMyuagD0Wp%2FqNNw1ZweixBHUP9i2dQ%2BvjSkM8m%2BbJmYvyoIf4Wlr5fhaiyyItVN2Ct9bqKrFbHDORZ1dhgyxKAQm1FEjPBkCS53HCUMEQYuBxjaDTxCQaVXodx1A8ULTLYci5NaFqWq5%2FvGHcLPoM7zC005nABjqkAeL9lq7HfVwVm1igEE%2BLwtIgmRPBqOHK0sH8gP52Ne6jJJ1LrTswP6oAIXs8A3he6s3MmTE8TG8aImXPkqn8gWh4ZcEbqUYGhG66spu3mX0ZNhGhxRxnmBnXzwidtXXYes0lILEsEGMHcMmVqJBpVElmYuZEc0xm7K6M9XbmzU1pDwrWwJuCHvemJQicfVlsk9w7FOQqTybz506wNeZeD%2BGfqruH&X-Amz-Signature=bb9dd8d97b53ed6d28c894c4894b49c376b66fe8b648a3f731bbd07c9935c203&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEQ7W7J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCKQc3d7BXDbTKE9ZjYoDoQSOukMthRk1r9HXInPGAF0QIhAOkutmh2LLj5qsruvXc5Gs2fqK3Hh2y6zRezTdtNACj9KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkmoLa8iHqkPBPZSMq3AMmIqr6pYhPBVANCOiV5y7lbuMlQk9XAiA2WLAGnBz9Ie7yiCGaj0KkSTEMPbXi8mYmzfwpKTE7CWG%2BvYkq0HFNOiVaMGJhx0OBN0aLioLeoSVpSAU4aLI5Fgl7MW%2BuKSNREk9aIRzM4i4RZVcm2ovd27Nf2XmpN68IU6Vg80vaiafFuDSCyKukquHMHb7K69tMhc8Pk5ohtN6aT6%2FebOJpJ9rWI%2BHkbcMfG5d2J79HVEFic%2FJir59jGm2EYinvy9eLi%2BO7KhOEwwh9CDJCmCH6QwrKrPv03YU3aRcucVhZCsnMQ%2BaVEJiSdaStszZQ4PTggWAuBcox0C9%2BChM5U8vPW%2ByunQraFMvn%2F46VSazvyyzWFNxPfT6FgT2fzP8vB03ceDvjzdIorh%2BOP9vfC19vU3AUPermYFLgoCjmDhvMEd1o4Tx1mlyBblUUB6f5tZ8YFHwFHlrBe5JAeqa1MLq1gVYe0FIMNlUKi3OCMyuagD0Wp%2FqNNw1ZweixBHUP9i2dQ%2BvjSkM8m%2BbJmYvyoIf4Wlr5fhaiyyItVN2Ct9bqKrFbHDORZ1dhgyxKAQm1FEjPBkCS53HCUMEQYuBxjaDTxCQaVXodx1A8ULTLYci5NaFqWq5%2FvGHcLPoM7zC005nABjqkAeL9lq7HfVwVm1igEE%2BLwtIgmRPBqOHK0sH8gP52Ne6jJJ1LrTswP6oAIXs8A3he6s3MmTE8TG8aImXPkqn8gWh4ZcEbqUYGhG66spu3mX0ZNhGhxRxnmBnXzwidtXXYes0lILEsEGMHcMmVqJBpVElmYuZEc0xm7K6M9XbmzU1pDwrWwJuCHvemJQicfVlsk9w7FOQqTybz506wNeZeD%2BGfqruH&X-Amz-Signature=20225a25fac1ad9bf35dd6595ef108c182ac173a3d9b67678f36628038a2dcaa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEQ7W7J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCKQc3d7BXDbTKE9ZjYoDoQSOukMthRk1r9HXInPGAF0QIhAOkutmh2LLj5qsruvXc5Gs2fqK3Hh2y6zRezTdtNACj9KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkmoLa8iHqkPBPZSMq3AMmIqr6pYhPBVANCOiV5y7lbuMlQk9XAiA2WLAGnBz9Ie7yiCGaj0KkSTEMPbXi8mYmzfwpKTE7CWG%2BvYkq0HFNOiVaMGJhx0OBN0aLioLeoSVpSAU4aLI5Fgl7MW%2BuKSNREk9aIRzM4i4RZVcm2ovd27Nf2XmpN68IU6Vg80vaiafFuDSCyKukquHMHb7K69tMhc8Pk5ohtN6aT6%2FebOJpJ9rWI%2BHkbcMfG5d2J79HVEFic%2FJir59jGm2EYinvy9eLi%2BO7KhOEwwh9CDJCmCH6QwrKrPv03YU3aRcucVhZCsnMQ%2BaVEJiSdaStszZQ4PTggWAuBcox0C9%2BChM5U8vPW%2ByunQraFMvn%2F46VSazvyyzWFNxPfT6FgT2fzP8vB03ceDvjzdIorh%2BOP9vfC19vU3AUPermYFLgoCjmDhvMEd1o4Tx1mlyBblUUB6f5tZ8YFHwFHlrBe5JAeqa1MLq1gVYe0FIMNlUKi3OCMyuagD0Wp%2FqNNw1ZweixBHUP9i2dQ%2BvjSkM8m%2BbJmYvyoIf4Wlr5fhaiyyItVN2Ct9bqKrFbHDORZ1dhgyxKAQm1FEjPBkCS53HCUMEQYuBxjaDTxCQaVXodx1A8ULTLYci5NaFqWq5%2FvGHcLPoM7zC005nABjqkAeL9lq7HfVwVm1igEE%2BLwtIgmRPBqOHK0sH8gP52Ne6jJJ1LrTswP6oAIXs8A3he6s3MmTE8TG8aImXPkqn8gWh4ZcEbqUYGhG66spu3mX0ZNhGhxRxnmBnXzwidtXXYes0lILEsEGMHcMmVqJBpVElmYuZEc0xm7K6M9XbmzU1pDwrWwJuCHvemJQicfVlsk9w7FOQqTybz506wNeZeD%2BGfqruH&X-Amz-Signature=fe4ccf95d8be5fe45cdf3d48564f590182e1b5f943629aac426be30102eca980&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEQ7W7J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCKQc3d7BXDbTKE9ZjYoDoQSOukMthRk1r9HXInPGAF0QIhAOkutmh2LLj5qsruvXc5Gs2fqK3Hh2y6zRezTdtNACj9KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkmoLa8iHqkPBPZSMq3AMmIqr6pYhPBVANCOiV5y7lbuMlQk9XAiA2WLAGnBz9Ie7yiCGaj0KkSTEMPbXi8mYmzfwpKTE7CWG%2BvYkq0HFNOiVaMGJhx0OBN0aLioLeoSVpSAU4aLI5Fgl7MW%2BuKSNREk9aIRzM4i4RZVcm2ovd27Nf2XmpN68IU6Vg80vaiafFuDSCyKukquHMHb7K69tMhc8Pk5ohtN6aT6%2FebOJpJ9rWI%2BHkbcMfG5d2J79HVEFic%2FJir59jGm2EYinvy9eLi%2BO7KhOEwwh9CDJCmCH6QwrKrPv03YU3aRcucVhZCsnMQ%2BaVEJiSdaStszZQ4PTggWAuBcox0C9%2BChM5U8vPW%2ByunQraFMvn%2F46VSazvyyzWFNxPfT6FgT2fzP8vB03ceDvjzdIorh%2BOP9vfC19vU3AUPermYFLgoCjmDhvMEd1o4Tx1mlyBblUUB6f5tZ8YFHwFHlrBe5JAeqa1MLq1gVYe0FIMNlUKi3OCMyuagD0Wp%2FqNNw1ZweixBHUP9i2dQ%2BvjSkM8m%2BbJmYvyoIf4Wlr5fhaiyyItVN2Ct9bqKrFbHDORZ1dhgyxKAQm1FEjPBkCS53HCUMEQYuBxjaDTxCQaVXodx1A8ULTLYci5NaFqWq5%2FvGHcLPoM7zC005nABjqkAeL9lq7HfVwVm1igEE%2BLwtIgmRPBqOHK0sH8gP52Ne6jJJ1LrTswP6oAIXs8A3he6s3MmTE8TG8aImXPkqn8gWh4ZcEbqUYGhG66spu3mX0ZNhGhxRxnmBnXzwidtXXYes0lILEsEGMHcMmVqJBpVElmYuZEc0xm7K6M9XbmzU1pDwrWwJuCHvemJQicfVlsk9w7FOQqTybz506wNeZeD%2BGfqruH&X-Amz-Signature=3e75043932a4e6a55188b07194eb726d26ee16814f150a259be19669d74fe35b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEQ7W7J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCKQc3d7BXDbTKE9ZjYoDoQSOukMthRk1r9HXInPGAF0QIhAOkutmh2LLj5qsruvXc5Gs2fqK3Hh2y6zRezTdtNACj9KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkmoLa8iHqkPBPZSMq3AMmIqr6pYhPBVANCOiV5y7lbuMlQk9XAiA2WLAGnBz9Ie7yiCGaj0KkSTEMPbXi8mYmzfwpKTE7CWG%2BvYkq0HFNOiVaMGJhx0OBN0aLioLeoSVpSAU4aLI5Fgl7MW%2BuKSNREk9aIRzM4i4RZVcm2ovd27Nf2XmpN68IU6Vg80vaiafFuDSCyKukquHMHb7K69tMhc8Pk5ohtN6aT6%2FebOJpJ9rWI%2BHkbcMfG5d2J79HVEFic%2FJir59jGm2EYinvy9eLi%2BO7KhOEwwh9CDJCmCH6QwrKrPv03YU3aRcucVhZCsnMQ%2BaVEJiSdaStszZQ4PTggWAuBcox0C9%2BChM5U8vPW%2ByunQraFMvn%2F46VSazvyyzWFNxPfT6FgT2fzP8vB03ceDvjzdIorh%2BOP9vfC19vU3AUPermYFLgoCjmDhvMEd1o4Tx1mlyBblUUB6f5tZ8YFHwFHlrBe5JAeqa1MLq1gVYe0FIMNlUKi3OCMyuagD0Wp%2FqNNw1ZweixBHUP9i2dQ%2BvjSkM8m%2BbJmYvyoIf4Wlr5fhaiyyItVN2Ct9bqKrFbHDORZ1dhgyxKAQm1FEjPBkCS53HCUMEQYuBxjaDTxCQaVXodx1A8ULTLYci5NaFqWq5%2FvGHcLPoM7zC005nABjqkAeL9lq7HfVwVm1igEE%2BLwtIgmRPBqOHK0sH8gP52Ne6jJJ1LrTswP6oAIXs8A3he6s3MmTE8TG8aImXPkqn8gWh4ZcEbqUYGhG66spu3mX0ZNhGhxRxnmBnXzwidtXXYes0lILEsEGMHcMmVqJBpVElmYuZEc0xm7K6M9XbmzU1pDwrWwJuCHvemJQicfVlsk9w7FOQqTybz506wNeZeD%2BGfqruH&X-Amz-Signature=a3f1fa262876be6cc002f3d42d62bf115e9de1a303acedf9fb91fe9bcc5b6040&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PEQ7W7J%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCKQc3d7BXDbTKE9ZjYoDoQSOukMthRk1r9HXInPGAF0QIhAOkutmh2LLj5qsruvXc5Gs2fqK3Hh2y6zRezTdtNACj9KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkmoLa8iHqkPBPZSMq3AMmIqr6pYhPBVANCOiV5y7lbuMlQk9XAiA2WLAGnBz9Ie7yiCGaj0KkSTEMPbXi8mYmzfwpKTE7CWG%2BvYkq0HFNOiVaMGJhx0OBN0aLioLeoSVpSAU4aLI5Fgl7MW%2BuKSNREk9aIRzM4i4RZVcm2ovd27Nf2XmpN68IU6Vg80vaiafFuDSCyKukquHMHb7K69tMhc8Pk5ohtN6aT6%2FebOJpJ9rWI%2BHkbcMfG5d2J79HVEFic%2FJir59jGm2EYinvy9eLi%2BO7KhOEwwh9CDJCmCH6QwrKrPv03YU3aRcucVhZCsnMQ%2BaVEJiSdaStszZQ4PTggWAuBcox0C9%2BChM5U8vPW%2ByunQraFMvn%2F46VSazvyyzWFNxPfT6FgT2fzP8vB03ceDvjzdIorh%2BOP9vfC19vU3AUPermYFLgoCjmDhvMEd1o4Tx1mlyBblUUB6f5tZ8YFHwFHlrBe5JAeqa1MLq1gVYe0FIMNlUKi3OCMyuagD0Wp%2FqNNw1ZweixBHUP9i2dQ%2BvjSkM8m%2BbJmYvyoIf4Wlr5fhaiyyItVN2Ct9bqKrFbHDORZ1dhgyxKAQm1FEjPBkCS53HCUMEQYuBxjaDTxCQaVXodx1A8ULTLYci5NaFqWq5%2FvGHcLPoM7zC005nABjqkAeL9lq7HfVwVm1igEE%2BLwtIgmRPBqOHK0sH8gP52Ne6jJJ1LrTswP6oAIXs8A3he6s3MmTE8TG8aImXPkqn8gWh4ZcEbqUYGhG66spu3mX0ZNhGhxRxnmBnXzwidtXXYes0lILEsEGMHcMmVqJBpVElmYuZEc0xm7K6M9XbmzU1pDwrWwJuCHvemJQicfVlsk9w7FOQqTybz506wNeZeD%2BGfqruH&X-Amz-Signature=c50898fa0018853b36da563fca76ab4578192b55512f4238774f5caddd64167f&X-Amz-SignedHeaders=host&x-id=GetObject)
