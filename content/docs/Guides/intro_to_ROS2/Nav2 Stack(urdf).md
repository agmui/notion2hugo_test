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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZBXM6G%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVE%2FsInZnEdmO8ZNrtpKGNLmvkDoQlLZaQX%2FZvK6WPRgIgfzAAV9fMtDWc8DnVUr2tHHNkCXFYjAgsnZlF%2BrXyBPQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm6r7H%2BXD1Jpk1qwircA5Pa9VI9VbWyqnhlbGAzcGuL3RYFb8dCXbs5XDenjx%2BdXzTy2wCcluH%2BKtCtXwsnRRiZiGkL4XQzY3%2BjbaXnGAo0hNiU9B%2FlhTUDNDhzPOGjuuOVpPF2aErfomZyys21vKOePF3%2F0ihqr7j9VgMeKDUK57UJrm%2FjyDyIa5Z50r24IX9Jz%2Bidz3T1%2BWOB4vi5ElXsqz%2BedxTjkUXVlva1paQ9vbuYT72ofXBYEEex3W9RjmlPxezF3bOzzM%2Fj%2FQ9kq%2BnOpfbaqABLyuF7y2BCFT0jdIClxKOLF2s86vFk5qJctMFV1Ng2L0c3Bam6pYKU7G%2FkSRSmz4Azw%2BoUYErjj%2B8fDmsDvXNQC9N%2FuXvLcHZCxpRF9ylNmB0kssD8cWv%2B%2B3bJw%2BghTnjlBRnoCdJlufzA8EbZkcvHFx0s1i5kpmPRRiXU%2Fdd6pHSfrHYoLbT1grPJoTbr9HSWFlg82p7Ya1ml1NP9VjQfrJhw9CG%2FP3AbB32s2sJNacsCNjteCxsSUS%2BWNhBHKmjNTTSKLTGbQEkq3e9OMP%2BVgJqrp9PeVqmuU3Wa%2F7CseoNFGNz1xRxvdDJgnspHM1L%2BEXkD8H2Dxz1fFzVyo49fwcGzBjVTaru3Piwe6FO7FW3pFpIMMMO2%2FL4GOqUBnM09QAOkOA5L1vk3Tl%2BVypsZXv4BEiXvjWv1aQbdN%2FPSIBNNzCRZzhsqDr%2BLpU%2B6139c%2Bh6pJKHEo638LxgpanQwoFCE%2FPkcEKWYd7HK2ZVTxBs4yRZy0s4EtS%2BRJ3aCB%2FTvGXvVs09Hvu2AnZ4gl9wiKoq1ulNn37EpZorYzKw5iXQ7S%2BU3W0YMMEJfjHhCMe8KWwNPQx65xVwzH7%2B5TBpb4kqT&X-Amz-Signature=24ccf8a443896e4784c4f409dca0a551409bf31af3efcfdac6b03ba7fd1cb503&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZBXM6G%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVE%2FsInZnEdmO8ZNrtpKGNLmvkDoQlLZaQX%2FZvK6WPRgIgfzAAV9fMtDWc8DnVUr2tHHNkCXFYjAgsnZlF%2BrXyBPQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm6r7H%2BXD1Jpk1qwircA5Pa9VI9VbWyqnhlbGAzcGuL3RYFb8dCXbs5XDenjx%2BdXzTy2wCcluH%2BKtCtXwsnRRiZiGkL4XQzY3%2BjbaXnGAo0hNiU9B%2FlhTUDNDhzPOGjuuOVpPF2aErfomZyys21vKOePF3%2F0ihqr7j9VgMeKDUK57UJrm%2FjyDyIa5Z50r24IX9Jz%2Bidz3T1%2BWOB4vi5ElXsqz%2BedxTjkUXVlva1paQ9vbuYT72ofXBYEEex3W9RjmlPxezF3bOzzM%2Fj%2FQ9kq%2BnOpfbaqABLyuF7y2BCFT0jdIClxKOLF2s86vFk5qJctMFV1Ng2L0c3Bam6pYKU7G%2FkSRSmz4Azw%2BoUYErjj%2B8fDmsDvXNQC9N%2FuXvLcHZCxpRF9ylNmB0kssD8cWv%2B%2B3bJw%2BghTnjlBRnoCdJlufzA8EbZkcvHFx0s1i5kpmPRRiXU%2Fdd6pHSfrHYoLbT1grPJoTbr9HSWFlg82p7Ya1ml1NP9VjQfrJhw9CG%2FP3AbB32s2sJNacsCNjteCxsSUS%2BWNhBHKmjNTTSKLTGbQEkq3e9OMP%2BVgJqrp9PeVqmuU3Wa%2F7CseoNFGNz1xRxvdDJgnspHM1L%2BEXkD8H2Dxz1fFzVyo49fwcGzBjVTaru3Piwe6FO7FW3pFpIMMMO2%2FL4GOqUBnM09QAOkOA5L1vk3Tl%2BVypsZXv4BEiXvjWv1aQbdN%2FPSIBNNzCRZzhsqDr%2BLpU%2B6139c%2Bh6pJKHEo638LxgpanQwoFCE%2FPkcEKWYd7HK2ZVTxBs4yRZy0s4EtS%2BRJ3aCB%2FTvGXvVs09Hvu2AnZ4gl9wiKoq1ulNn37EpZorYzKw5iXQ7S%2BU3W0YMMEJfjHhCMe8KWwNPQx65xVwzH7%2B5TBpb4kqT&X-Amz-Signature=952bdebb87880b6b181d3f8a8458f10054b04ce1e8e9896533ab1c526992dc6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZBXM6G%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVE%2FsInZnEdmO8ZNrtpKGNLmvkDoQlLZaQX%2FZvK6WPRgIgfzAAV9fMtDWc8DnVUr2tHHNkCXFYjAgsnZlF%2BrXyBPQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm6r7H%2BXD1Jpk1qwircA5Pa9VI9VbWyqnhlbGAzcGuL3RYFb8dCXbs5XDenjx%2BdXzTy2wCcluH%2BKtCtXwsnRRiZiGkL4XQzY3%2BjbaXnGAo0hNiU9B%2FlhTUDNDhzPOGjuuOVpPF2aErfomZyys21vKOePF3%2F0ihqr7j9VgMeKDUK57UJrm%2FjyDyIa5Z50r24IX9Jz%2Bidz3T1%2BWOB4vi5ElXsqz%2BedxTjkUXVlva1paQ9vbuYT72ofXBYEEex3W9RjmlPxezF3bOzzM%2Fj%2FQ9kq%2BnOpfbaqABLyuF7y2BCFT0jdIClxKOLF2s86vFk5qJctMFV1Ng2L0c3Bam6pYKU7G%2FkSRSmz4Azw%2BoUYErjj%2B8fDmsDvXNQC9N%2FuXvLcHZCxpRF9ylNmB0kssD8cWv%2B%2B3bJw%2BghTnjlBRnoCdJlufzA8EbZkcvHFx0s1i5kpmPRRiXU%2Fdd6pHSfrHYoLbT1grPJoTbr9HSWFlg82p7Ya1ml1NP9VjQfrJhw9CG%2FP3AbB32s2sJNacsCNjteCxsSUS%2BWNhBHKmjNTTSKLTGbQEkq3e9OMP%2BVgJqrp9PeVqmuU3Wa%2F7CseoNFGNz1xRxvdDJgnspHM1L%2BEXkD8H2Dxz1fFzVyo49fwcGzBjVTaru3Piwe6FO7FW3pFpIMMMO2%2FL4GOqUBnM09QAOkOA5L1vk3Tl%2BVypsZXv4BEiXvjWv1aQbdN%2FPSIBNNzCRZzhsqDr%2BLpU%2B6139c%2Bh6pJKHEo638LxgpanQwoFCE%2FPkcEKWYd7HK2ZVTxBs4yRZy0s4EtS%2BRJ3aCB%2FTvGXvVs09Hvu2AnZ4gl9wiKoq1ulNn37EpZorYzKw5iXQ7S%2BU3W0YMMEJfjHhCMe8KWwNPQx65xVwzH7%2B5TBpb4kqT&X-Amz-Signature=7f5fb19f658860b79812146e799dc477e622d281e36bd46c133e87aa0bd2b283&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZBXM6G%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVE%2FsInZnEdmO8ZNrtpKGNLmvkDoQlLZaQX%2FZvK6WPRgIgfzAAV9fMtDWc8DnVUr2tHHNkCXFYjAgsnZlF%2BrXyBPQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm6r7H%2BXD1Jpk1qwircA5Pa9VI9VbWyqnhlbGAzcGuL3RYFb8dCXbs5XDenjx%2BdXzTy2wCcluH%2BKtCtXwsnRRiZiGkL4XQzY3%2BjbaXnGAo0hNiU9B%2FlhTUDNDhzPOGjuuOVpPF2aErfomZyys21vKOePF3%2F0ihqr7j9VgMeKDUK57UJrm%2FjyDyIa5Z50r24IX9Jz%2Bidz3T1%2BWOB4vi5ElXsqz%2BedxTjkUXVlva1paQ9vbuYT72ofXBYEEex3W9RjmlPxezF3bOzzM%2Fj%2FQ9kq%2BnOpfbaqABLyuF7y2BCFT0jdIClxKOLF2s86vFk5qJctMFV1Ng2L0c3Bam6pYKU7G%2FkSRSmz4Azw%2BoUYErjj%2B8fDmsDvXNQC9N%2FuXvLcHZCxpRF9ylNmB0kssD8cWv%2B%2B3bJw%2BghTnjlBRnoCdJlufzA8EbZkcvHFx0s1i5kpmPRRiXU%2Fdd6pHSfrHYoLbT1grPJoTbr9HSWFlg82p7Ya1ml1NP9VjQfrJhw9CG%2FP3AbB32s2sJNacsCNjteCxsSUS%2BWNhBHKmjNTTSKLTGbQEkq3e9OMP%2BVgJqrp9PeVqmuU3Wa%2F7CseoNFGNz1xRxvdDJgnspHM1L%2BEXkD8H2Dxz1fFzVyo49fwcGzBjVTaru3Piwe6FO7FW3pFpIMMMO2%2FL4GOqUBnM09QAOkOA5L1vk3Tl%2BVypsZXv4BEiXvjWv1aQbdN%2FPSIBNNzCRZzhsqDr%2BLpU%2B6139c%2Bh6pJKHEo638LxgpanQwoFCE%2FPkcEKWYd7HK2ZVTxBs4yRZy0s4EtS%2BRJ3aCB%2FTvGXvVs09Hvu2AnZ4gl9wiKoq1ulNn37EpZorYzKw5iXQ7S%2BU3W0YMMEJfjHhCMe8KWwNPQx65xVwzH7%2B5TBpb4kqT&X-Amz-Signature=9fd9abd5628eb08bb8391d4f6d805253941dd09e809b0a107f1242eb36d2030e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZBXM6G%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVE%2FsInZnEdmO8ZNrtpKGNLmvkDoQlLZaQX%2FZvK6WPRgIgfzAAV9fMtDWc8DnVUr2tHHNkCXFYjAgsnZlF%2BrXyBPQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm6r7H%2BXD1Jpk1qwircA5Pa9VI9VbWyqnhlbGAzcGuL3RYFb8dCXbs5XDenjx%2BdXzTy2wCcluH%2BKtCtXwsnRRiZiGkL4XQzY3%2BjbaXnGAo0hNiU9B%2FlhTUDNDhzPOGjuuOVpPF2aErfomZyys21vKOePF3%2F0ihqr7j9VgMeKDUK57UJrm%2FjyDyIa5Z50r24IX9Jz%2Bidz3T1%2BWOB4vi5ElXsqz%2BedxTjkUXVlva1paQ9vbuYT72ofXBYEEex3W9RjmlPxezF3bOzzM%2Fj%2FQ9kq%2BnOpfbaqABLyuF7y2BCFT0jdIClxKOLF2s86vFk5qJctMFV1Ng2L0c3Bam6pYKU7G%2FkSRSmz4Azw%2BoUYErjj%2B8fDmsDvXNQC9N%2FuXvLcHZCxpRF9ylNmB0kssD8cWv%2B%2B3bJw%2BghTnjlBRnoCdJlufzA8EbZkcvHFx0s1i5kpmPRRiXU%2Fdd6pHSfrHYoLbT1grPJoTbr9HSWFlg82p7Ya1ml1NP9VjQfrJhw9CG%2FP3AbB32s2sJNacsCNjteCxsSUS%2BWNhBHKmjNTTSKLTGbQEkq3e9OMP%2BVgJqrp9PeVqmuU3Wa%2F7CseoNFGNz1xRxvdDJgnspHM1L%2BEXkD8H2Dxz1fFzVyo49fwcGzBjVTaru3Piwe6FO7FW3pFpIMMMO2%2FL4GOqUBnM09QAOkOA5L1vk3Tl%2BVypsZXv4BEiXvjWv1aQbdN%2FPSIBNNzCRZzhsqDr%2BLpU%2B6139c%2Bh6pJKHEo638LxgpanQwoFCE%2FPkcEKWYd7HK2ZVTxBs4yRZy0s4EtS%2BRJ3aCB%2FTvGXvVs09Hvu2AnZ4gl9wiKoq1ulNn37EpZorYzKw5iXQ7S%2BU3W0YMMEJfjHhCMe8KWwNPQx65xVwzH7%2B5TBpb4kqT&X-Amz-Signature=f9a9048c46c7dfcccbe0f1fa177909f442bd97520304bd96ed4e9c78931585c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCZBXM6G%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDVE%2FsInZnEdmO8ZNrtpKGNLmvkDoQlLZaQX%2FZvK6WPRgIgfzAAV9fMtDWc8DnVUr2tHHNkCXFYjAgsnZlF%2BrXyBPQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPm6r7H%2BXD1Jpk1qwircA5Pa9VI9VbWyqnhlbGAzcGuL3RYFb8dCXbs5XDenjx%2BdXzTy2wCcluH%2BKtCtXwsnRRiZiGkL4XQzY3%2BjbaXnGAo0hNiU9B%2FlhTUDNDhzPOGjuuOVpPF2aErfomZyys21vKOePF3%2F0ihqr7j9VgMeKDUK57UJrm%2FjyDyIa5Z50r24IX9Jz%2Bidz3T1%2BWOB4vi5ElXsqz%2BedxTjkUXVlva1paQ9vbuYT72ofXBYEEex3W9RjmlPxezF3bOzzM%2Fj%2FQ9kq%2BnOpfbaqABLyuF7y2BCFT0jdIClxKOLF2s86vFk5qJctMFV1Ng2L0c3Bam6pYKU7G%2FkSRSmz4Azw%2BoUYErjj%2B8fDmsDvXNQC9N%2FuXvLcHZCxpRF9ylNmB0kssD8cWv%2B%2B3bJw%2BghTnjlBRnoCdJlufzA8EbZkcvHFx0s1i5kpmPRRiXU%2Fdd6pHSfrHYoLbT1grPJoTbr9HSWFlg82p7Ya1ml1NP9VjQfrJhw9CG%2FP3AbB32s2sJNacsCNjteCxsSUS%2BWNhBHKmjNTTSKLTGbQEkq3e9OMP%2BVgJqrp9PeVqmuU3Wa%2F7CseoNFGNz1xRxvdDJgnspHM1L%2BEXkD8H2Dxz1fFzVyo49fwcGzBjVTaru3Piwe6FO7FW3pFpIMMMO2%2FL4GOqUBnM09QAOkOA5L1vk3Tl%2BVypsZXv4BEiXvjWv1aQbdN%2FPSIBNNzCRZzhsqDr%2BLpU%2B6139c%2Bh6pJKHEo638LxgpanQwoFCE%2FPkcEKWYd7HK2ZVTxBs4yRZy0s4EtS%2BRJ3aCB%2FTvGXvVs09Hvu2AnZ4gl9wiKoq1ulNn37EpZorYzKw5iXQ7S%2BU3W0YMMEJfjHhCMe8KWwNPQx65xVwzH7%2B5TBpb4kqT&X-Amz-Signature=05571781685a0aa5a0d62ee432ad30197326c3c427aecae5aa8a2d9637aab536&X-Amz-SignedHeaders=host&x-id=GetObject)
