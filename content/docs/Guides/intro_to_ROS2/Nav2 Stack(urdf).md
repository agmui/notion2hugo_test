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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMBXSKK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCID2P66IUop7J4IBlnYQq2ZCADgLxNo8Oimtlt6JjtZlKAiEA88pRP6l31z%2FrkkchXce4RkDsZgORiDNeYY554fR%2BDIkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrtO1y2nBGmgLlEPCrcA8MEgzXR9L6QxRVY603nvwRMIJSGXFy72P%2B3v5lHb3h%2Fdn3TtN%2F8RPYsQlyUD49chqTXJH2kIG5znbxlf8aOovrFb4T9%2FFBx08tSYIJXOTrA1crJsqULoMsQpHh%2Bfhr0Ng8Pi80k2Y7Bqss4XfofYxjfduS82tTzXxoFOKqj6YxoCO4pYGeEfymFnRMuv%2Bi9FE8Yq8KGe4wwfL0Ki7W39X8pmZUZ1RD%2BG7Jy9blKVdaqQQZPuplXQEKmOCA35TJvwXJMJcTSwN8eVQYxzxDgc672PiQngPZ11S7tv9CE5iB6UJpalnxGoxlctiaVqBf%2FCd1klBPY56LSEq8p59j8LNr6Nb%2BIiGZSiEOXCxUFxn9CKWNgiIkOcKqyhvGh%2FZMCoCa7NACc2%2FF%2FJJg2mGGW%2BrcVx0YNs5nJQITMOy4aGuNl3cH%2FNAKFdRXoFOUGA289aLliT%2B3l3X0N%2BQSH01VolJe0siSrofNu5OWvt%2BfrkgV7z3QoXvJAEcUHraahw2ZXcMIIwAignvol7TisJyRYnQC5NIUf4r6VgNJaBdDnAltI3iK90fgAQM7aU5UMRbj9YB2rxUnxEXHHV0EJuc8RKX7GKNqYBqBQ3YZ9GIHhpU5xY7UJIA7IMBdfl83RMO%2Fru74GOqUB49frsjACzjasgxHNv1pwp3ycyjWkDOfYPewLDaQOLe8EsDPwXeQFOkV0I%2F8Rc7HJdolFFv9vDLUI3alG9YBZZKjDu36xrzUnDZ7VHAdgnmN17ksXxFTsO8Vig%2BiVRwfx8ArEDQ0BGd7lUdeqVfoz7WqANw98QS%2BB7u%2F%2Fa7HR7Uxa%2FmVKDJ5tWHsDDLHv0kL1ILicwyItP6F%2Bi05r4ahLsVtLAidA&X-Amz-Signature=302667dba24503cdbff2c6b2299e449d5ee0ffe49d3e766610475d6d0b86e5ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMBXSKK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCID2P66IUop7J4IBlnYQq2ZCADgLxNo8Oimtlt6JjtZlKAiEA88pRP6l31z%2FrkkchXce4RkDsZgORiDNeYY554fR%2BDIkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrtO1y2nBGmgLlEPCrcA8MEgzXR9L6QxRVY603nvwRMIJSGXFy72P%2B3v5lHb3h%2Fdn3TtN%2F8RPYsQlyUD49chqTXJH2kIG5znbxlf8aOovrFb4T9%2FFBx08tSYIJXOTrA1crJsqULoMsQpHh%2Bfhr0Ng8Pi80k2Y7Bqss4XfofYxjfduS82tTzXxoFOKqj6YxoCO4pYGeEfymFnRMuv%2Bi9FE8Yq8KGe4wwfL0Ki7W39X8pmZUZ1RD%2BG7Jy9blKVdaqQQZPuplXQEKmOCA35TJvwXJMJcTSwN8eVQYxzxDgc672PiQngPZ11S7tv9CE5iB6UJpalnxGoxlctiaVqBf%2FCd1klBPY56LSEq8p59j8LNr6Nb%2BIiGZSiEOXCxUFxn9CKWNgiIkOcKqyhvGh%2FZMCoCa7NACc2%2FF%2FJJg2mGGW%2BrcVx0YNs5nJQITMOy4aGuNl3cH%2FNAKFdRXoFOUGA289aLliT%2B3l3X0N%2BQSH01VolJe0siSrofNu5OWvt%2BfrkgV7z3QoXvJAEcUHraahw2ZXcMIIwAignvol7TisJyRYnQC5NIUf4r6VgNJaBdDnAltI3iK90fgAQM7aU5UMRbj9YB2rxUnxEXHHV0EJuc8RKX7GKNqYBqBQ3YZ9GIHhpU5xY7UJIA7IMBdfl83RMO%2Fru74GOqUB49frsjACzjasgxHNv1pwp3ycyjWkDOfYPewLDaQOLe8EsDPwXeQFOkV0I%2F8Rc7HJdolFFv9vDLUI3alG9YBZZKjDu36xrzUnDZ7VHAdgnmN17ksXxFTsO8Vig%2BiVRwfx8ArEDQ0BGd7lUdeqVfoz7WqANw98QS%2BB7u%2F%2Fa7HR7Uxa%2FmVKDJ5tWHsDDLHv0kL1ILicwyItP6F%2Bi05r4ahLsVtLAidA&X-Amz-Signature=408ad713197ba490d25269454b0f800fda2e788ddb1e33e29b53cf3902c9566c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMBXSKK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCID2P66IUop7J4IBlnYQq2ZCADgLxNo8Oimtlt6JjtZlKAiEA88pRP6l31z%2FrkkchXce4RkDsZgORiDNeYY554fR%2BDIkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrtO1y2nBGmgLlEPCrcA8MEgzXR9L6QxRVY603nvwRMIJSGXFy72P%2B3v5lHb3h%2Fdn3TtN%2F8RPYsQlyUD49chqTXJH2kIG5znbxlf8aOovrFb4T9%2FFBx08tSYIJXOTrA1crJsqULoMsQpHh%2Bfhr0Ng8Pi80k2Y7Bqss4XfofYxjfduS82tTzXxoFOKqj6YxoCO4pYGeEfymFnRMuv%2Bi9FE8Yq8KGe4wwfL0Ki7W39X8pmZUZ1RD%2BG7Jy9blKVdaqQQZPuplXQEKmOCA35TJvwXJMJcTSwN8eVQYxzxDgc672PiQngPZ11S7tv9CE5iB6UJpalnxGoxlctiaVqBf%2FCd1klBPY56LSEq8p59j8LNr6Nb%2BIiGZSiEOXCxUFxn9CKWNgiIkOcKqyhvGh%2FZMCoCa7NACc2%2FF%2FJJg2mGGW%2BrcVx0YNs5nJQITMOy4aGuNl3cH%2FNAKFdRXoFOUGA289aLliT%2B3l3X0N%2BQSH01VolJe0siSrofNu5OWvt%2BfrkgV7z3QoXvJAEcUHraahw2ZXcMIIwAignvol7TisJyRYnQC5NIUf4r6VgNJaBdDnAltI3iK90fgAQM7aU5UMRbj9YB2rxUnxEXHHV0EJuc8RKX7GKNqYBqBQ3YZ9GIHhpU5xY7UJIA7IMBdfl83RMO%2Fru74GOqUB49frsjACzjasgxHNv1pwp3ycyjWkDOfYPewLDaQOLe8EsDPwXeQFOkV0I%2F8Rc7HJdolFFv9vDLUI3alG9YBZZKjDu36xrzUnDZ7VHAdgnmN17ksXxFTsO8Vig%2BiVRwfx8ArEDQ0BGd7lUdeqVfoz7WqANw98QS%2BB7u%2F%2Fa7HR7Uxa%2FmVKDJ5tWHsDDLHv0kL1ILicwyItP6F%2Bi05r4ahLsVtLAidA&X-Amz-Signature=10a7b77a6e869944d953488a505e003cc8e1f9857b615aabe3d2d546f760773d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMBXSKK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCID2P66IUop7J4IBlnYQq2ZCADgLxNo8Oimtlt6JjtZlKAiEA88pRP6l31z%2FrkkchXce4RkDsZgORiDNeYY554fR%2BDIkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrtO1y2nBGmgLlEPCrcA8MEgzXR9L6QxRVY603nvwRMIJSGXFy72P%2B3v5lHb3h%2Fdn3TtN%2F8RPYsQlyUD49chqTXJH2kIG5znbxlf8aOovrFb4T9%2FFBx08tSYIJXOTrA1crJsqULoMsQpHh%2Bfhr0Ng8Pi80k2Y7Bqss4XfofYxjfduS82tTzXxoFOKqj6YxoCO4pYGeEfymFnRMuv%2Bi9FE8Yq8KGe4wwfL0Ki7W39X8pmZUZ1RD%2BG7Jy9blKVdaqQQZPuplXQEKmOCA35TJvwXJMJcTSwN8eVQYxzxDgc672PiQngPZ11S7tv9CE5iB6UJpalnxGoxlctiaVqBf%2FCd1klBPY56LSEq8p59j8LNr6Nb%2BIiGZSiEOXCxUFxn9CKWNgiIkOcKqyhvGh%2FZMCoCa7NACc2%2FF%2FJJg2mGGW%2BrcVx0YNs5nJQITMOy4aGuNl3cH%2FNAKFdRXoFOUGA289aLliT%2B3l3X0N%2BQSH01VolJe0siSrofNu5OWvt%2BfrkgV7z3QoXvJAEcUHraahw2ZXcMIIwAignvol7TisJyRYnQC5NIUf4r6VgNJaBdDnAltI3iK90fgAQM7aU5UMRbj9YB2rxUnxEXHHV0EJuc8RKX7GKNqYBqBQ3YZ9GIHhpU5xY7UJIA7IMBdfl83RMO%2Fru74GOqUB49frsjACzjasgxHNv1pwp3ycyjWkDOfYPewLDaQOLe8EsDPwXeQFOkV0I%2F8Rc7HJdolFFv9vDLUI3alG9YBZZKjDu36xrzUnDZ7VHAdgnmN17ksXxFTsO8Vig%2BiVRwfx8ArEDQ0BGd7lUdeqVfoz7WqANw98QS%2BB7u%2F%2Fa7HR7Uxa%2FmVKDJ5tWHsDDLHv0kL1ILicwyItP6F%2Bi05r4ahLsVtLAidA&X-Amz-Signature=c3bd423a0d3117ea96964bb9678a7c5f663561567b12fbe5e185a695ca75fbb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMBXSKK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCID2P66IUop7J4IBlnYQq2ZCADgLxNo8Oimtlt6JjtZlKAiEA88pRP6l31z%2FrkkchXce4RkDsZgORiDNeYY554fR%2BDIkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrtO1y2nBGmgLlEPCrcA8MEgzXR9L6QxRVY603nvwRMIJSGXFy72P%2B3v5lHb3h%2Fdn3TtN%2F8RPYsQlyUD49chqTXJH2kIG5znbxlf8aOovrFb4T9%2FFBx08tSYIJXOTrA1crJsqULoMsQpHh%2Bfhr0Ng8Pi80k2Y7Bqss4XfofYxjfduS82tTzXxoFOKqj6YxoCO4pYGeEfymFnRMuv%2Bi9FE8Yq8KGe4wwfL0Ki7W39X8pmZUZ1RD%2BG7Jy9blKVdaqQQZPuplXQEKmOCA35TJvwXJMJcTSwN8eVQYxzxDgc672PiQngPZ11S7tv9CE5iB6UJpalnxGoxlctiaVqBf%2FCd1klBPY56LSEq8p59j8LNr6Nb%2BIiGZSiEOXCxUFxn9CKWNgiIkOcKqyhvGh%2FZMCoCa7NACc2%2FF%2FJJg2mGGW%2BrcVx0YNs5nJQITMOy4aGuNl3cH%2FNAKFdRXoFOUGA289aLliT%2B3l3X0N%2BQSH01VolJe0siSrofNu5OWvt%2BfrkgV7z3QoXvJAEcUHraahw2ZXcMIIwAignvol7TisJyRYnQC5NIUf4r6VgNJaBdDnAltI3iK90fgAQM7aU5UMRbj9YB2rxUnxEXHHV0EJuc8RKX7GKNqYBqBQ3YZ9GIHhpU5xY7UJIA7IMBdfl83RMO%2Fru74GOqUB49frsjACzjasgxHNv1pwp3ycyjWkDOfYPewLDaQOLe8EsDPwXeQFOkV0I%2F8Rc7HJdolFFv9vDLUI3alG9YBZZKjDu36xrzUnDZ7VHAdgnmN17ksXxFTsO8Vig%2BiVRwfx8ArEDQ0BGd7lUdeqVfoz7WqANw98QS%2BB7u%2F%2Fa7HR7Uxa%2FmVKDJ5tWHsDDLHv0kL1ILicwyItP6F%2Bi05r4ahLsVtLAidA&X-Amz-Signature=69ae815f770ffa8e1823877d49ccfa43e933e965c84d1ff8678949c9d9870bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMBXSKK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCID2P66IUop7J4IBlnYQq2ZCADgLxNo8Oimtlt6JjtZlKAiEA88pRP6l31z%2FrkkchXce4RkDsZgORiDNeYY554fR%2BDIkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrtO1y2nBGmgLlEPCrcA8MEgzXR9L6QxRVY603nvwRMIJSGXFy72P%2B3v5lHb3h%2Fdn3TtN%2F8RPYsQlyUD49chqTXJH2kIG5znbxlf8aOovrFb4T9%2FFBx08tSYIJXOTrA1crJsqULoMsQpHh%2Bfhr0Ng8Pi80k2Y7Bqss4XfofYxjfduS82tTzXxoFOKqj6YxoCO4pYGeEfymFnRMuv%2Bi9FE8Yq8KGe4wwfL0Ki7W39X8pmZUZ1RD%2BG7Jy9blKVdaqQQZPuplXQEKmOCA35TJvwXJMJcTSwN8eVQYxzxDgc672PiQngPZ11S7tv9CE5iB6UJpalnxGoxlctiaVqBf%2FCd1klBPY56LSEq8p59j8LNr6Nb%2BIiGZSiEOXCxUFxn9CKWNgiIkOcKqyhvGh%2FZMCoCa7NACc2%2FF%2FJJg2mGGW%2BrcVx0YNs5nJQITMOy4aGuNl3cH%2FNAKFdRXoFOUGA289aLliT%2B3l3X0N%2BQSH01VolJe0siSrofNu5OWvt%2BfrkgV7z3QoXvJAEcUHraahw2ZXcMIIwAignvol7TisJyRYnQC5NIUf4r6VgNJaBdDnAltI3iK90fgAQM7aU5UMRbj9YB2rxUnxEXHHV0EJuc8RKX7GKNqYBqBQ3YZ9GIHhpU5xY7UJIA7IMBdfl83RMO%2Fru74GOqUB49frsjACzjasgxHNv1pwp3ycyjWkDOfYPewLDaQOLe8EsDPwXeQFOkV0I%2F8Rc7HJdolFFv9vDLUI3alG9YBZZKjDu36xrzUnDZ7VHAdgnmN17ksXxFTsO8Vig%2BiVRwfx8ArEDQ0BGd7lUdeqVfoz7WqANw98QS%2BB7u%2F%2Fa7HR7Uxa%2FmVKDJ5tWHsDDLHv0kL1ILicwyItP6F%2Bi05r4ahLsVtLAidA&X-Amz-Signature=34a654ecccf5820761e87d9dd3609e119363df88c5f7f5459317d144d773d4bb&X-Amz-SignedHeaders=host&x-id=GetObject)
