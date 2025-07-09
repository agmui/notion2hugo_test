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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNNONEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmMH%2BpGT5tUd9ARAwip1wSivE6fQpbuuFT8tqLyI8lhAiEAsBpmwbm3vDuOqzTcyzud%2F%2BHyN%2BawfVePvMx7CtEbngUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTLU%2B7p8nOsmw11DyrcA4tiXLZJdbhVs3PP52HzHdsuK9TCH9SHMBCHvRU6v%2FbvNtyfuo0pW9yqtoqXjPXvpRc1f7AXhv9lGyZKnQZDapR%2BxJPwsBDv29eq7yh%2Fo%2BVLKRFH%2Bsoi5CTES%2Fj0sT%2FR3m%2F7wQTb2fZE5oJ7v6FBZYsCDUSJgkDYbWRSHGN%2FhSYA48YwgqWvZrN3E5f9JgSPMluvH9lUne%2FbrGm2m3SFMqPEzMe%2BOdtgGnFbWbJfl1VmaJQTJtl2olZ2TwXdm%2BjcQy%2Ff%2Bcqi%2Ftwqb%2B%2Bbg%2BwR7xUcmS20crdZqNxSD3nbpSb5NTJMHZTNY4N7E%2FMkiEQK17l%2Buce18uoKQvdHIbWhAV7Ex1NFVwPrrVr5mFlbuixD6L0BuRMtDxp873q%2FTLdfcTqP4wB%2BXPS4pITo3byYdzp4EA23bIzjZrO6OIVK55bL5CyaASxTCYgaGpeMAV6K8AjDsqYV%2FI%2FvDtkq%2BTTcCd3u%2BpYbgwWhog1MrLd92Malgy%2BSE9yxcwp5d7sdROM8bvhXYcedcoLjD%2FYzIa5bL1EBA%2FYRTfw1GIiKzBio7PgDID4IaUQQaMoEtWz2ns%2Bzx55L%2F8yaje1a68YrBeEkOMUlySPdXj8eDhCGL%2Blva%2FGdIwpreYwKztvto4lZML6LucMGOqUB0j%2BlfLI1Uuam8ZtLup2xdz8s2t%2F2G36UIHAwL5f4%2BzGFluI2%2FzgM6qooguGgr5Xsyz4HfqbutkYkuNMifnQk5A6HgRU66d1tBeY9VEKD3BEjvM1oUQiaHjOChsYLrbH5lOSc6ZGQvVpe%2FrKif9lHXLW1aiyzXsJoqC%2Foz%2FvzvubW%2FrNFjzpHC9RwPm5XqkkydV5P%2BBZi1vnRK%2Fqb4am5gXxuZ1vU&X-Amz-Signature=551f503215e27a08750c75374ef986d5ff24aa8ccba3229424d4bafe37ec9f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNNONEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmMH%2BpGT5tUd9ARAwip1wSivE6fQpbuuFT8tqLyI8lhAiEAsBpmwbm3vDuOqzTcyzud%2F%2BHyN%2BawfVePvMx7CtEbngUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTLU%2B7p8nOsmw11DyrcA4tiXLZJdbhVs3PP52HzHdsuK9TCH9SHMBCHvRU6v%2FbvNtyfuo0pW9yqtoqXjPXvpRc1f7AXhv9lGyZKnQZDapR%2BxJPwsBDv29eq7yh%2Fo%2BVLKRFH%2Bsoi5CTES%2Fj0sT%2FR3m%2F7wQTb2fZE5oJ7v6FBZYsCDUSJgkDYbWRSHGN%2FhSYA48YwgqWvZrN3E5f9JgSPMluvH9lUne%2FbrGm2m3SFMqPEzMe%2BOdtgGnFbWbJfl1VmaJQTJtl2olZ2TwXdm%2BjcQy%2Ff%2Bcqi%2Ftwqb%2B%2Bbg%2BwR7xUcmS20crdZqNxSD3nbpSb5NTJMHZTNY4N7E%2FMkiEQK17l%2Buce18uoKQvdHIbWhAV7Ex1NFVwPrrVr5mFlbuixD6L0BuRMtDxp873q%2FTLdfcTqP4wB%2BXPS4pITo3byYdzp4EA23bIzjZrO6OIVK55bL5CyaASxTCYgaGpeMAV6K8AjDsqYV%2FI%2FvDtkq%2BTTcCd3u%2BpYbgwWhog1MrLd92Malgy%2BSE9yxcwp5d7sdROM8bvhXYcedcoLjD%2FYzIa5bL1EBA%2FYRTfw1GIiKzBio7PgDID4IaUQQaMoEtWz2ns%2Bzx55L%2F8yaje1a68YrBeEkOMUlySPdXj8eDhCGL%2Blva%2FGdIwpreYwKztvto4lZML6LucMGOqUB0j%2BlfLI1Uuam8ZtLup2xdz8s2t%2F2G36UIHAwL5f4%2BzGFluI2%2FzgM6qooguGgr5Xsyz4HfqbutkYkuNMifnQk5A6HgRU66d1tBeY9VEKD3BEjvM1oUQiaHjOChsYLrbH5lOSc6ZGQvVpe%2FrKif9lHXLW1aiyzXsJoqC%2Foz%2FvzvubW%2FrNFjzpHC9RwPm5XqkkydV5P%2BBZi1vnRK%2Fqb4am5gXxuZ1vU&X-Amz-Signature=ccc3412e26c25eda8545b1ab105a860da138c33debe1adc7d287e057efbd368b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNNONEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmMH%2BpGT5tUd9ARAwip1wSivE6fQpbuuFT8tqLyI8lhAiEAsBpmwbm3vDuOqzTcyzud%2F%2BHyN%2BawfVePvMx7CtEbngUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTLU%2B7p8nOsmw11DyrcA4tiXLZJdbhVs3PP52HzHdsuK9TCH9SHMBCHvRU6v%2FbvNtyfuo0pW9yqtoqXjPXvpRc1f7AXhv9lGyZKnQZDapR%2BxJPwsBDv29eq7yh%2Fo%2BVLKRFH%2Bsoi5CTES%2Fj0sT%2FR3m%2F7wQTb2fZE5oJ7v6FBZYsCDUSJgkDYbWRSHGN%2FhSYA48YwgqWvZrN3E5f9JgSPMluvH9lUne%2FbrGm2m3SFMqPEzMe%2BOdtgGnFbWbJfl1VmaJQTJtl2olZ2TwXdm%2BjcQy%2Ff%2Bcqi%2Ftwqb%2B%2Bbg%2BwR7xUcmS20crdZqNxSD3nbpSb5NTJMHZTNY4N7E%2FMkiEQK17l%2Buce18uoKQvdHIbWhAV7Ex1NFVwPrrVr5mFlbuixD6L0BuRMtDxp873q%2FTLdfcTqP4wB%2BXPS4pITo3byYdzp4EA23bIzjZrO6OIVK55bL5CyaASxTCYgaGpeMAV6K8AjDsqYV%2FI%2FvDtkq%2BTTcCd3u%2BpYbgwWhog1MrLd92Malgy%2BSE9yxcwp5d7sdROM8bvhXYcedcoLjD%2FYzIa5bL1EBA%2FYRTfw1GIiKzBio7PgDID4IaUQQaMoEtWz2ns%2Bzx55L%2F8yaje1a68YrBeEkOMUlySPdXj8eDhCGL%2Blva%2FGdIwpreYwKztvto4lZML6LucMGOqUB0j%2BlfLI1Uuam8ZtLup2xdz8s2t%2F2G36UIHAwL5f4%2BzGFluI2%2FzgM6qooguGgr5Xsyz4HfqbutkYkuNMifnQk5A6HgRU66d1tBeY9VEKD3BEjvM1oUQiaHjOChsYLrbH5lOSc6ZGQvVpe%2FrKif9lHXLW1aiyzXsJoqC%2Foz%2FvzvubW%2FrNFjzpHC9RwPm5XqkkydV5P%2BBZi1vnRK%2Fqb4am5gXxuZ1vU&X-Amz-Signature=b438fbbed32ee445084a5cd37385fd8959c47aabf47de57158c5062e4ae6847d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNNONEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmMH%2BpGT5tUd9ARAwip1wSivE6fQpbuuFT8tqLyI8lhAiEAsBpmwbm3vDuOqzTcyzud%2F%2BHyN%2BawfVePvMx7CtEbngUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTLU%2B7p8nOsmw11DyrcA4tiXLZJdbhVs3PP52HzHdsuK9TCH9SHMBCHvRU6v%2FbvNtyfuo0pW9yqtoqXjPXvpRc1f7AXhv9lGyZKnQZDapR%2BxJPwsBDv29eq7yh%2Fo%2BVLKRFH%2Bsoi5CTES%2Fj0sT%2FR3m%2F7wQTb2fZE5oJ7v6FBZYsCDUSJgkDYbWRSHGN%2FhSYA48YwgqWvZrN3E5f9JgSPMluvH9lUne%2FbrGm2m3SFMqPEzMe%2BOdtgGnFbWbJfl1VmaJQTJtl2olZ2TwXdm%2BjcQy%2Ff%2Bcqi%2Ftwqb%2B%2Bbg%2BwR7xUcmS20crdZqNxSD3nbpSb5NTJMHZTNY4N7E%2FMkiEQK17l%2Buce18uoKQvdHIbWhAV7Ex1NFVwPrrVr5mFlbuixD6L0BuRMtDxp873q%2FTLdfcTqP4wB%2BXPS4pITo3byYdzp4EA23bIzjZrO6OIVK55bL5CyaASxTCYgaGpeMAV6K8AjDsqYV%2FI%2FvDtkq%2BTTcCd3u%2BpYbgwWhog1MrLd92Malgy%2BSE9yxcwp5d7sdROM8bvhXYcedcoLjD%2FYzIa5bL1EBA%2FYRTfw1GIiKzBio7PgDID4IaUQQaMoEtWz2ns%2Bzx55L%2F8yaje1a68YrBeEkOMUlySPdXj8eDhCGL%2Blva%2FGdIwpreYwKztvto4lZML6LucMGOqUB0j%2BlfLI1Uuam8ZtLup2xdz8s2t%2F2G36UIHAwL5f4%2BzGFluI2%2FzgM6qooguGgr5Xsyz4HfqbutkYkuNMifnQk5A6HgRU66d1tBeY9VEKD3BEjvM1oUQiaHjOChsYLrbH5lOSc6ZGQvVpe%2FrKif9lHXLW1aiyzXsJoqC%2Foz%2FvzvubW%2FrNFjzpHC9RwPm5XqkkydV5P%2BBZi1vnRK%2Fqb4am5gXxuZ1vU&X-Amz-Signature=eb178626e0293713ef16689ea2154080bcbceaf3bc0fdb9f1e8cca686da1148e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNNONEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmMH%2BpGT5tUd9ARAwip1wSivE6fQpbuuFT8tqLyI8lhAiEAsBpmwbm3vDuOqzTcyzud%2F%2BHyN%2BawfVePvMx7CtEbngUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTLU%2B7p8nOsmw11DyrcA4tiXLZJdbhVs3PP52HzHdsuK9TCH9SHMBCHvRU6v%2FbvNtyfuo0pW9yqtoqXjPXvpRc1f7AXhv9lGyZKnQZDapR%2BxJPwsBDv29eq7yh%2Fo%2BVLKRFH%2Bsoi5CTES%2Fj0sT%2FR3m%2F7wQTb2fZE5oJ7v6FBZYsCDUSJgkDYbWRSHGN%2FhSYA48YwgqWvZrN3E5f9JgSPMluvH9lUne%2FbrGm2m3SFMqPEzMe%2BOdtgGnFbWbJfl1VmaJQTJtl2olZ2TwXdm%2BjcQy%2Ff%2Bcqi%2Ftwqb%2B%2Bbg%2BwR7xUcmS20crdZqNxSD3nbpSb5NTJMHZTNY4N7E%2FMkiEQK17l%2Buce18uoKQvdHIbWhAV7Ex1NFVwPrrVr5mFlbuixD6L0BuRMtDxp873q%2FTLdfcTqP4wB%2BXPS4pITo3byYdzp4EA23bIzjZrO6OIVK55bL5CyaASxTCYgaGpeMAV6K8AjDsqYV%2FI%2FvDtkq%2BTTcCd3u%2BpYbgwWhog1MrLd92Malgy%2BSE9yxcwp5d7sdROM8bvhXYcedcoLjD%2FYzIa5bL1EBA%2FYRTfw1GIiKzBio7PgDID4IaUQQaMoEtWz2ns%2Bzx55L%2F8yaje1a68YrBeEkOMUlySPdXj8eDhCGL%2Blva%2FGdIwpreYwKztvto4lZML6LucMGOqUB0j%2BlfLI1Uuam8ZtLup2xdz8s2t%2F2G36UIHAwL5f4%2BzGFluI2%2FzgM6qooguGgr5Xsyz4HfqbutkYkuNMifnQk5A6HgRU66d1tBeY9VEKD3BEjvM1oUQiaHjOChsYLrbH5lOSc6ZGQvVpe%2FrKif9lHXLW1aiyzXsJoqC%2Foz%2FvzvubW%2FrNFjzpHC9RwPm5XqkkydV5P%2BBZi1vnRK%2Fqb4am5gXxuZ1vU&X-Amz-Signature=c19002757350c9bc06f6c6fae01cc4ba90eca8883a38bb813f6b9f56bafafc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UNNONEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmMH%2BpGT5tUd9ARAwip1wSivE6fQpbuuFT8tqLyI8lhAiEAsBpmwbm3vDuOqzTcyzud%2F%2BHyN%2BawfVePvMx7CtEbngUqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOTLU%2B7p8nOsmw11DyrcA4tiXLZJdbhVs3PP52HzHdsuK9TCH9SHMBCHvRU6v%2FbvNtyfuo0pW9yqtoqXjPXvpRc1f7AXhv9lGyZKnQZDapR%2BxJPwsBDv29eq7yh%2Fo%2BVLKRFH%2Bsoi5CTES%2Fj0sT%2FR3m%2F7wQTb2fZE5oJ7v6FBZYsCDUSJgkDYbWRSHGN%2FhSYA48YwgqWvZrN3E5f9JgSPMluvH9lUne%2FbrGm2m3SFMqPEzMe%2BOdtgGnFbWbJfl1VmaJQTJtl2olZ2TwXdm%2BjcQy%2Ff%2Bcqi%2Ftwqb%2B%2Bbg%2BwR7xUcmS20crdZqNxSD3nbpSb5NTJMHZTNY4N7E%2FMkiEQK17l%2Buce18uoKQvdHIbWhAV7Ex1NFVwPrrVr5mFlbuixD6L0BuRMtDxp873q%2FTLdfcTqP4wB%2BXPS4pITo3byYdzp4EA23bIzjZrO6OIVK55bL5CyaASxTCYgaGpeMAV6K8AjDsqYV%2FI%2FvDtkq%2BTTcCd3u%2BpYbgwWhog1MrLd92Malgy%2BSE9yxcwp5d7sdROM8bvhXYcedcoLjD%2FYzIa5bL1EBA%2FYRTfw1GIiKzBio7PgDID4IaUQQaMoEtWz2ns%2Bzx55L%2F8yaje1a68YrBeEkOMUlySPdXj8eDhCGL%2Blva%2FGdIwpreYwKztvto4lZML6LucMGOqUB0j%2BlfLI1Uuam8ZtLup2xdz8s2t%2F2G36UIHAwL5f4%2BzGFluI2%2FzgM6qooguGgr5Xsyz4HfqbutkYkuNMifnQk5A6HgRU66d1tBeY9VEKD3BEjvM1oUQiaHjOChsYLrbH5lOSc6ZGQvVpe%2FrKif9lHXLW1aiyzXsJoqC%2Foz%2FvzvubW%2FrNFjzpHC9RwPm5XqkkydV5P%2BBZi1vnRK%2Fqb4am5gXxuZ1vU&X-Amz-Signature=96638b83fcbcd57296b06f0ce0a37b54d6cfa7762fe62974093edfc81e825001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
