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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC55D2I%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0W5ude7aTTVDqc4qA2QHLsz78rC1%2FG7tuf4TkQ4DHbAIhANkJvPh9MV%2F2pE07ZGpWuOaEmI5WNRJoibgW9m%2FvEVGsKv8DCHcQABoMNjM3NDIzMTgzODA1Igzjvx1kPG%2BGmXj5uksq3AN8lDU%2BRkLHf0vqvsoIaAEsXlXy9HFw%2F70jUsT1C8eKuawS9vHcBQcxDDQW5Tfmf98rlk%2Fp6QtNLXco0lkmAZ9loOI46Po89x4JkqTlPGzApSZw74IZh3S3II2aRuUiBYt75q3RmOLmy9Te3p57OMZWcG4Vi9z4%2BDEXM4RO6GnqBRGvEGddd50RApTcg5GhSlJzR4Sgyswo3Z9jab3KOJdv2lRIVIEpCVvTJsR7yvyQpFu7zseO%2FmCSfzsHJiDDqj8asA50wZf4CXePEuMTAf9na6L5E8UuoMonk6%2FzKIAWp6i6azG3nnj07MnoC0tFTWPaGWPwLtFuUOVQRBof66jOn%2FWzIZ%2FuYk3N%2BpUl0n2x2SmEM68Fv4jCA89LIVYh%2FtBw1B0QEzzwFFM0GQ2M%2BMJzVs48mVCRCUrrYiCGSiu5wNxZHJ35i3%2FzA0NfpdT9FDLkV0L4fogxVO0%2BdR0y0k9nJdbNHECHSRz3T6VuAZo%2FjgI4B2EJyBD3zYsIT5KSi9azDq4N%2BQ9iHrT2FOnQeLtWKekk0BmFJSXGYBF4ebd4%2BV%2FkEGiUpzERnXOt42sEUIIW8PEZSOBsBs4qaGAwrz0rLzJfkRveHafQdQSNs4qOv22%2FiBCgKinIo%2FUhBzD6gJHCBjqkAQaJOTfYFid2QCx9s8VbdXaGujwLRrReOpA8Mrr9BTLvL%2BNd8SG3BupFsR6VexrfknIQfVD0oAhG%2BzFFpAOPVc8SqvvN%2Fyue1tiaZ%2FoYbBW%2FSIewOonTxhm42XqytMhiELJTZNY0ZogcSzfhvCpIZyh7KIgR%2Bis1rSciCU1cgqkxo0WSjxtMCi3iY4cTZt3nc39OPbTCZai9%2Bu1EQYqzBeOn716A&X-Amz-Signature=8fcc43f334bf0d2ba9d99733e9cc840919efc450470fa1165e9d693e5976d8e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC55D2I%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0W5ude7aTTVDqc4qA2QHLsz78rC1%2FG7tuf4TkQ4DHbAIhANkJvPh9MV%2F2pE07ZGpWuOaEmI5WNRJoibgW9m%2FvEVGsKv8DCHcQABoMNjM3NDIzMTgzODA1Igzjvx1kPG%2BGmXj5uksq3AN8lDU%2BRkLHf0vqvsoIaAEsXlXy9HFw%2F70jUsT1C8eKuawS9vHcBQcxDDQW5Tfmf98rlk%2Fp6QtNLXco0lkmAZ9loOI46Po89x4JkqTlPGzApSZw74IZh3S3II2aRuUiBYt75q3RmOLmy9Te3p57OMZWcG4Vi9z4%2BDEXM4RO6GnqBRGvEGddd50RApTcg5GhSlJzR4Sgyswo3Z9jab3KOJdv2lRIVIEpCVvTJsR7yvyQpFu7zseO%2FmCSfzsHJiDDqj8asA50wZf4CXePEuMTAf9na6L5E8UuoMonk6%2FzKIAWp6i6azG3nnj07MnoC0tFTWPaGWPwLtFuUOVQRBof66jOn%2FWzIZ%2FuYk3N%2BpUl0n2x2SmEM68Fv4jCA89LIVYh%2FtBw1B0QEzzwFFM0GQ2M%2BMJzVs48mVCRCUrrYiCGSiu5wNxZHJ35i3%2FzA0NfpdT9FDLkV0L4fogxVO0%2BdR0y0k9nJdbNHECHSRz3T6VuAZo%2FjgI4B2EJyBD3zYsIT5KSi9azDq4N%2BQ9iHrT2FOnQeLtWKekk0BmFJSXGYBF4ebd4%2BV%2FkEGiUpzERnXOt42sEUIIW8PEZSOBsBs4qaGAwrz0rLzJfkRveHafQdQSNs4qOv22%2FiBCgKinIo%2FUhBzD6gJHCBjqkAQaJOTfYFid2QCx9s8VbdXaGujwLRrReOpA8Mrr9BTLvL%2BNd8SG3BupFsR6VexrfknIQfVD0oAhG%2BzFFpAOPVc8SqvvN%2Fyue1tiaZ%2FoYbBW%2FSIewOonTxhm42XqytMhiELJTZNY0ZogcSzfhvCpIZyh7KIgR%2Bis1rSciCU1cgqkxo0WSjxtMCi3iY4cTZt3nc39OPbTCZai9%2Bu1EQYqzBeOn716A&X-Amz-Signature=da129c2e6c0fef076c169278328405fbd5fd773d491a2f40987f8dda7d781525&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC55D2I%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0W5ude7aTTVDqc4qA2QHLsz78rC1%2FG7tuf4TkQ4DHbAIhANkJvPh9MV%2F2pE07ZGpWuOaEmI5WNRJoibgW9m%2FvEVGsKv8DCHcQABoMNjM3NDIzMTgzODA1Igzjvx1kPG%2BGmXj5uksq3AN8lDU%2BRkLHf0vqvsoIaAEsXlXy9HFw%2F70jUsT1C8eKuawS9vHcBQcxDDQW5Tfmf98rlk%2Fp6QtNLXco0lkmAZ9loOI46Po89x4JkqTlPGzApSZw74IZh3S3II2aRuUiBYt75q3RmOLmy9Te3p57OMZWcG4Vi9z4%2BDEXM4RO6GnqBRGvEGddd50RApTcg5GhSlJzR4Sgyswo3Z9jab3KOJdv2lRIVIEpCVvTJsR7yvyQpFu7zseO%2FmCSfzsHJiDDqj8asA50wZf4CXePEuMTAf9na6L5E8UuoMonk6%2FzKIAWp6i6azG3nnj07MnoC0tFTWPaGWPwLtFuUOVQRBof66jOn%2FWzIZ%2FuYk3N%2BpUl0n2x2SmEM68Fv4jCA89LIVYh%2FtBw1B0QEzzwFFM0GQ2M%2BMJzVs48mVCRCUrrYiCGSiu5wNxZHJ35i3%2FzA0NfpdT9FDLkV0L4fogxVO0%2BdR0y0k9nJdbNHECHSRz3T6VuAZo%2FjgI4B2EJyBD3zYsIT5KSi9azDq4N%2BQ9iHrT2FOnQeLtWKekk0BmFJSXGYBF4ebd4%2BV%2FkEGiUpzERnXOt42sEUIIW8PEZSOBsBs4qaGAwrz0rLzJfkRveHafQdQSNs4qOv22%2FiBCgKinIo%2FUhBzD6gJHCBjqkAQaJOTfYFid2QCx9s8VbdXaGujwLRrReOpA8Mrr9BTLvL%2BNd8SG3BupFsR6VexrfknIQfVD0oAhG%2BzFFpAOPVc8SqvvN%2Fyue1tiaZ%2FoYbBW%2FSIewOonTxhm42XqytMhiELJTZNY0ZogcSzfhvCpIZyh7KIgR%2Bis1rSciCU1cgqkxo0WSjxtMCi3iY4cTZt3nc39OPbTCZai9%2Bu1EQYqzBeOn716A&X-Amz-Signature=e6dfe0c16b29f7f0aa0f450de93c36de3ea6ae4c6f98e301bfa87d8247e630a0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC55D2I%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0W5ude7aTTVDqc4qA2QHLsz78rC1%2FG7tuf4TkQ4DHbAIhANkJvPh9MV%2F2pE07ZGpWuOaEmI5WNRJoibgW9m%2FvEVGsKv8DCHcQABoMNjM3NDIzMTgzODA1Igzjvx1kPG%2BGmXj5uksq3AN8lDU%2BRkLHf0vqvsoIaAEsXlXy9HFw%2F70jUsT1C8eKuawS9vHcBQcxDDQW5Tfmf98rlk%2Fp6QtNLXco0lkmAZ9loOI46Po89x4JkqTlPGzApSZw74IZh3S3II2aRuUiBYt75q3RmOLmy9Te3p57OMZWcG4Vi9z4%2BDEXM4RO6GnqBRGvEGddd50RApTcg5GhSlJzR4Sgyswo3Z9jab3KOJdv2lRIVIEpCVvTJsR7yvyQpFu7zseO%2FmCSfzsHJiDDqj8asA50wZf4CXePEuMTAf9na6L5E8UuoMonk6%2FzKIAWp6i6azG3nnj07MnoC0tFTWPaGWPwLtFuUOVQRBof66jOn%2FWzIZ%2FuYk3N%2BpUl0n2x2SmEM68Fv4jCA89LIVYh%2FtBw1B0QEzzwFFM0GQ2M%2BMJzVs48mVCRCUrrYiCGSiu5wNxZHJ35i3%2FzA0NfpdT9FDLkV0L4fogxVO0%2BdR0y0k9nJdbNHECHSRz3T6VuAZo%2FjgI4B2EJyBD3zYsIT5KSi9azDq4N%2BQ9iHrT2FOnQeLtWKekk0BmFJSXGYBF4ebd4%2BV%2FkEGiUpzERnXOt42sEUIIW8PEZSOBsBs4qaGAwrz0rLzJfkRveHafQdQSNs4qOv22%2FiBCgKinIo%2FUhBzD6gJHCBjqkAQaJOTfYFid2QCx9s8VbdXaGujwLRrReOpA8Mrr9BTLvL%2BNd8SG3BupFsR6VexrfknIQfVD0oAhG%2BzFFpAOPVc8SqvvN%2Fyue1tiaZ%2FoYbBW%2FSIewOonTxhm42XqytMhiELJTZNY0ZogcSzfhvCpIZyh7KIgR%2Bis1rSciCU1cgqkxo0WSjxtMCi3iY4cTZt3nc39OPbTCZai9%2Bu1EQYqzBeOn716A&X-Amz-Signature=b9caac892c4c525e730c1fa404cd3cda32adef5aaed62b12ec3512fab6f1395d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC55D2I%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0W5ude7aTTVDqc4qA2QHLsz78rC1%2FG7tuf4TkQ4DHbAIhANkJvPh9MV%2F2pE07ZGpWuOaEmI5WNRJoibgW9m%2FvEVGsKv8DCHcQABoMNjM3NDIzMTgzODA1Igzjvx1kPG%2BGmXj5uksq3AN8lDU%2BRkLHf0vqvsoIaAEsXlXy9HFw%2F70jUsT1C8eKuawS9vHcBQcxDDQW5Tfmf98rlk%2Fp6QtNLXco0lkmAZ9loOI46Po89x4JkqTlPGzApSZw74IZh3S3II2aRuUiBYt75q3RmOLmy9Te3p57OMZWcG4Vi9z4%2BDEXM4RO6GnqBRGvEGddd50RApTcg5GhSlJzR4Sgyswo3Z9jab3KOJdv2lRIVIEpCVvTJsR7yvyQpFu7zseO%2FmCSfzsHJiDDqj8asA50wZf4CXePEuMTAf9na6L5E8UuoMonk6%2FzKIAWp6i6azG3nnj07MnoC0tFTWPaGWPwLtFuUOVQRBof66jOn%2FWzIZ%2FuYk3N%2BpUl0n2x2SmEM68Fv4jCA89LIVYh%2FtBw1B0QEzzwFFM0GQ2M%2BMJzVs48mVCRCUrrYiCGSiu5wNxZHJ35i3%2FzA0NfpdT9FDLkV0L4fogxVO0%2BdR0y0k9nJdbNHECHSRz3T6VuAZo%2FjgI4B2EJyBD3zYsIT5KSi9azDq4N%2BQ9iHrT2FOnQeLtWKekk0BmFJSXGYBF4ebd4%2BV%2FkEGiUpzERnXOt42sEUIIW8PEZSOBsBs4qaGAwrz0rLzJfkRveHafQdQSNs4qOv22%2FiBCgKinIo%2FUhBzD6gJHCBjqkAQaJOTfYFid2QCx9s8VbdXaGujwLRrReOpA8Mrr9BTLvL%2BNd8SG3BupFsR6VexrfknIQfVD0oAhG%2BzFFpAOPVc8SqvvN%2Fyue1tiaZ%2FoYbBW%2FSIewOonTxhm42XqytMhiELJTZNY0ZogcSzfhvCpIZyh7KIgR%2Bis1rSciCU1cgqkxo0WSjxtMCi3iY4cTZt3nc39OPbTCZai9%2Bu1EQYqzBeOn716A&X-Amz-Signature=0d2f4d123fc662c0c0390258605e37289b000105aa17675e7d06bfa873a9ff09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC55D2I%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T181051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0W5ude7aTTVDqc4qA2QHLsz78rC1%2FG7tuf4TkQ4DHbAIhANkJvPh9MV%2F2pE07ZGpWuOaEmI5WNRJoibgW9m%2FvEVGsKv8DCHcQABoMNjM3NDIzMTgzODA1Igzjvx1kPG%2BGmXj5uksq3AN8lDU%2BRkLHf0vqvsoIaAEsXlXy9HFw%2F70jUsT1C8eKuawS9vHcBQcxDDQW5Tfmf98rlk%2Fp6QtNLXco0lkmAZ9loOI46Po89x4JkqTlPGzApSZw74IZh3S3II2aRuUiBYt75q3RmOLmy9Te3p57OMZWcG4Vi9z4%2BDEXM4RO6GnqBRGvEGddd50RApTcg5GhSlJzR4Sgyswo3Z9jab3KOJdv2lRIVIEpCVvTJsR7yvyQpFu7zseO%2FmCSfzsHJiDDqj8asA50wZf4CXePEuMTAf9na6L5E8UuoMonk6%2FzKIAWp6i6azG3nnj07MnoC0tFTWPaGWPwLtFuUOVQRBof66jOn%2FWzIZ%2FuYk3N%2BpUl0n2x2SmEM68Fv4jCA89LIVYh%2FtBw1B0QEzzwFFM0GQ2M%2BMJzVs48mVCRCUrrYiCGSiu5wNxZHJ35i3%2FzA0NfpdT9FDLkV0L4fogxVO0%2BdR0y0k9nJdbNHECHSRz3T6VuAZo%2FjgI4B2EJyBD3zYsIT5KSi9azDq4N%2BQ9iHrT2FOnQeLtWKekk0BmFJSXGYBF4ebd4%2BV%2FkEGiUpzERnXOt42sEUIIW8PEZSOBsBs4qaGAwrz0rLzJfkRveHafQdQSNs4qOv22%2FiBCgKinIo%2FUhBzD6gJHCBjqkAQaJOTfYFid2QCx9s8VbdXaGujwLRrReOpA8Mrr9BTLvL%2BNd8SG3BupFsR6VexrfknIQfVD0oAhG%2BzFFpAOPVc8SqvvN%2Fyue1tiaZ%2FoYbBW%2FSIewOonTxhm42XqytMhiELJTZNY0ZogcSzfhvCpIZyh7KIgR%2Bis1rSciCU1cgqkxo0WSjxtMCi3iY4cTZt3nc39OPbTCZai9%2Bu1EQYqzBeOn716A&X-Amz-Signature=969ba269cf672172b8c7c58b470d14140cadcef902fc7e660538ba9596a7b7e4&X-Amz-SignedHeaders=host&x-id=GetObject)
