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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCRTXPH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCRaYVncmpEwkTOFULEj0iTyJxROTy1S5%2Fp1qMyVRh%2BdwIgGnVGEM4UdpJuxDC9pdAbsrb0qSzYP3kVf6Yk8z5dBJsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAOZAiPNQaYxhQ8WFSrcA45qk1P9Eo22N7OnwmWVDO2yPbBxK39807uFa6dvBOKpXjvBMXUFn97vPPTPnjgFqrCcVGSR1SZHnWS7OWPo6HBel08dv6hHWopbr4iG8Zz8DnD1jgrwnbMzt%2BCt5egtkz%2Fq869QbEXnKKDvHeAGh7UQYyeIWmchWB%2BJ%2B2kZ8WKFCgEnV41vYqzgTVaXBs1tzlQW2r%2FIFib295ojzCZhwzAe35O4H4RQY4lCm13jeciQapWn7b%2BDAE8y4pj9w31PVWzdRZdA5H9utZlm3386aQxrOfggi%2FXMXGZSKDi37XIZG3wPaiFyuDlnZqi8hS3Nit1Hx2X7fzJVtzypvHc%2FuNFoJPjELCNsPf5glmL%2B%2BU126gre4m5EEvJ%2FmQt%2BfmVNgtchcDiAB3Get05rApzgxa4B3EnaArPfwXshgzPPYahz9SCIc1Nz1f0YeePf6kGMlvNwZEgWUo8JZSrJuGEiPfDCvxBcaM1UnMVg5qj1P9m1s1iCufT8MV2Mh0jwJXRjWqAPpQX94iu%2FxPjwjmA2H2dwgMlRewrQYfM6iSpm3UsO1LmCoVKBaO%2FlxWzoK7fVojU7s1ZY3E0niOB2KmTTfnwuDTbAK4%2FovQ3rtPOqvrUrQSACWSQ3LDHnH7oRMNufucIGOqUBDcpx%2FbJot7zQa2TuP%2FOWVCsOic%2F5PnhCqbXSmVtkQsSF3ww5WQfZJDrIBWnmfgRxRTEnsBeeGQ8fu%2B6PkzFOOfj2zEAdKCHtu1BbkdUGV0ZkDMgY0Q9n%2FjhmgN1dy7lMdw4PVEhLf119TzObgjGa3GhgOZN0jQ3lqlfS0MGIxpjqLUx61wmN4P%2FBofVBHawy2ABy3ZYoU2hjp3TRimPyzYOvOgdO&X-Amz-Signature=333edcc18a22ebeb994fe9a78c72108333308ac95017f7c1c4dc2644575b304d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCRTXPH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCRaYVncmpEwkTOFULEj0iTyJxROTy1S5%2Fp1qMyVRh%2BdwIgGnVGEM4UdpJuxDC9pdAbsrb0qSzYP3kVf6Yk8z5dBJsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAOZAiPNQaYxhQ8WFSrcA45qk1P9Eo22N7OnwmWVDO2yPbBxK39807uFa6dvBOKpXjvBMXUFn97vPPTPnjgFqrCcVGSR1SZHnWS7OWPo6HBel08dv6hHWopbr4iG8Zz8DnD1jgrwnbMzt%2BCt5egtkz%2Fq869QbEXnKKDvHeAGh7UQYyeIWmchWB%2BJ%2B2kZ8WKFCgEnV41vYqzgTVaXBs1tzlQW2r%2FIFib295ojzCZhwzAe35O4H4RQY4lCm13jeciQapWn7b%2BDAE8y4pj9w31PVWzdRZdA5H9utZlm3386aQxrOfggi%2FXMXGZSKDi37XIZG3wPaiFyuDlnZqi8hS3Nit1Hx2X7fzJVtzypvHc%2FuNFoJPjELCNsPf5glmL%2B%2BU126gre4m5EEvJ%2FmQt%2BfmVNgtchcDiAB3Get05rApzgxa4B3EnaArPfwXshgzPPYahz9SCIc1Nz1f0YeePf6kGMlvNwZEgWUo8JZSrJuGEiPfDCvxBcaM1UnMVg5qj1P9m1s1iCufT8MV2Mh0jwJXRjWqAPpQX94iu%2FxPjwjmA2H2dwgMlRewrQYfM6iSpm3UsO1LmCoVKBaO%2FlxWzoK7fVojU7s1ZY3E0niOB2KmTTfnwuDTbAK4%2FovQ3rtPOqvrUrQSACWSQ3LDHnH7oRMNufucIGOqUBDcpx%2FbJot7zQa2TuP%2FOWVCsOic%2F5PnhCqbXSmVtkQsSF3ww5WQfZJDrIBWnmfgRxRTEnsBeeGQ8fu%2B6PkzFOOfj2zEAdKCHtu1BbkdUGV0ZkDMgY0Q9n%2FjhmgN1dy7lMdw4PVEhLf119TzObgjGa3GhgOZN0jQ3lqlfS0MGIxpjqLUx61wmN4P%2FBofVBHawy2ABy3ZYoU2hjp3TRimPyzYOvOgdO&X-Amz-Signature=9c33b99337842b148999bfdf2975544d50350de2f0d611bb3d71b33cd77cb09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCRTXPH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCRaYVncmpEwkTOFULEj0iTyJxROTy1S5%2Fp1qMyVRh%2BdwIgGnVGEM4UdpJuxDC9pdAbsrb0qSzYP3kVf6Yk8z5dBJsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAOZAiPNQaYxhQ8WFSrcA45qk1P9Eo22N7OnwmWVDO2yPbBxK39807uFa6dvBOKpXjvBMXUFn97vPPTPnjgFqrCcVGSR1SZHnWS7OWPo6HBel08dv6hHWopbr4iG8Zz8DnD1jgrwnbMzt%2BCt5egtkz%2Fq869QbEXnKKDvHeAGh7UQYyeIWmchWB%2BJ%2B2kZ8WKFCgEnV41vYqzgTVaXBs1tzlQW2r%2FIFib295ojzCZhwzAe35O4H4RQY4lCm13jeciQapWn7b%2BDAE8y4pj9w31PVWzdRZdA5H9utZlm3386aQxrOfggi%2FXMXGZSKDi37XIZG3wPaiFyuDlnZqi8hS3Nit1Hx2X7fzJVtzypvHc%2FuNFoJPjELCNsPf5glmL%2B%2BU126gre4m5EEvJ%2FmQt%2BfmVNgtchcDiAB3Get05rApzgxa4B3EnaArPfwXshgzPPYahz9SCIc1Nz1f0YeePf6kGMlvNwZEgWUo8JZSrJuGEiPfDCvxBcaM1UnMVg5qj1P9m1s1iCufT8MV2Mh0jwJXRjWqAPpQX94iu%2FxPjwjmA2H2dwgMlRewrQYfM6iSpm3UsO1LmCoVKBaO%2FlxWzoK7fVojU7s1ZY3E0niOB2KmTTfnwuDTbAK4%2FovQ3rtPOqvrUrQSACWSQ3LDHnH7oRMNufucIGOqUBDcpx%2FbJot7zQa2TuP%2FOWVCsOic%2F5PnhCqbXSmVtkQsSF3ww5WQfZJDrIBWnmfgRxRTEnsBeeGQ8fu%2B6PkzFOOfj2zEAdKCHtu1BbkdUGV0ZkDMgY0Q9n%2FjhmgN1dy7lMdw4PVEhLf119TzObgjGa3GhgOZN0jQ3lqlfS0MGIxpjqLUx61wmN4P%2FBofVBHawy2ABy3ZYoU2hjp3TRimPyzYOvOgdO&X-Amz-Signature=e8bac32c4e446c730a6d1634994da0d956d8f041fcf7c381a5d95ddc4b3934d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCRTXPH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCRaYVncmpEwkTOFULEj0iTyJxROTy1S5%2Fp1qMyVRh%2BdwIgGnVGEM4UdpJuxDC9pdAbsrb0qSzYP3kVf6Yk8z5dBJsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAOZAiPNQaYxhQ8WFSrcA45qk1P9Eo22N7OnwmWVDO2yPbBxK39807uFa6dvBOKpXjvBMXUFn97vPPTPnjgFqrCcVGSR1SZHnWS7OWPo6HBel08dv6hHWopbr4iG8Zz8DnD1jgrwnbMzt%2BCt5egtkz%2Fq869QbEXnKKDvHeAGh7UQYyeIWmchWB%2BJ%2B2kZ8WKFCgEnV41vYqzgTVaXBs1tzlQW2r%2FIFib295ojzCZhwzAe35O4H4RQY4lCm13jeciQapWn7b%2BDAE8y4pj9w31PVWzdRZdA5H9utZlm3386aQxrOfggi%2FXMXGZSKDi37XIZG3wPaiFyuDlnZqi8hS3Nit1Hx2X7fzJVtzypvHc%2FuNFoJPjELCNsPf5glmL%2B%2BU126gre4m5EEvJ%2FmQt%2BfmVNgtchcDiAB3Get05rApzgxa4B3EnaArPfwXshgzPPYahz9SCIc1Nz1f0YeePf6kGMlvNwZEgWUo8JZSrJuGEiPfDCvxBcaM1UnMVg5qj1P9m1s1iCufT8MV2Mh0jwJXRjWqAPpQX94iu%2FxPjwjmA2H2dwgMlRewrQYfM6iSpm3UsO1LmCoVKBaO%2FlxWzoK7fVojU7s1ZY3E0niOB2KmTTfnwuDTbAK4%2FovQ3rtPOqvrUrQSACWSQ3LDHnH7oRMNufucIGOqUBDcpx%2FbJot7zQa2TuP%2FOWVCsOic%2F5PnhCqbXSmVtkQsSF3ww5WQfZJDrIBWnmfgRxRTEnsBeeGQ8fu%2B6PkzFOOfj2zEAdKCHtu1BbkdUGV0ZkDMgY0Q9n%2FjhmgN1dy7lMdw4PVEhLf119TzObgjGa3GhgOZN0jQ3lqlfS0MGIxpjqLUx61wmN4P%2FBofVBHawy2ABy3ZYoU2hjp3TRimPyzYOvOgdO&X-Amz-Signature=1ff341f9812143e77657f413bec86b8469981000e9665021e13b65bd9ce911b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCRTXPH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCRaYVncmpEwkTOFULEj0iTyJxROTy1S5%2Fp1qMyVRh%2BdwIgGnVGEM4UdpJuxDC9pdAbsrb0qSzYP3kVf6Yk8z5dBJsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAOZAiPNQaYxhQ8WFSrcA45qk1P9Eo22N7OnwmWVDO2yPbBxK39807uFa6dvBOKpXjvBMXUFn97vPPTPnjgFqrCcVGSR1SZHnWS7OWPo6HBel08dv6hHWopbr4iG8Zz8DnD1jgrwnbMzt%2BCt5egtkz%2Fq869QbEXnKKDvHeAGh7UQYyeIWmchWB%2BJ%2B2kZ8WKFCgEnV41vYqzgTVaXBs1tzlQW2r%2FIFib295ojzCZhwzAe35O4H4RQY4lCm13jeciQapWn7b%2BDAE8y4pj9w31PVWzdRZdA5H9utZlm3386aQxrOfggi%2FXMXGZSKDi37XIZG3wPaiFyuDlnZqi8hS3Nit1Hx2X7fzJVtzypvHc%2FuNFoJPjELCNsPf5glmL%2B%2BU126gre4m5EEvJ%2FmQt%2BfmVNgtchcDiAB3Get05rApzgxa4B3EnaArPfwXshgzPPYahz9SCIc1Nz1f0YeePf6kGMlvNwZEgWUo8JZSrJuGEiPfDCvxBcaM1UnMVg5qj1P9m1s1iCufT8MV2Mh0jwJXRjWqAPpQX94iu%2FxPjwjmA2H2dwgMlRewrQYfM6iSpm3UsO1LmCoVKBaO%2FlxWzoK7fVojU7s1ZY3E0niOB2KmTTfnwuDTbAK4%2FovQ3rtPOqvrUrQSACWSQ3LDHnH7oRMNufucIGOqUBDcpx%2FbJot7zQa2TuP%2FOWVCsOic%2F5PnhCqbXSmVtkQsSF3ww5WQfZJDrIBWnmfgRxRTEnsBeeGQ8fu%2B6PkzFOOfj2zEAdKCHtu1BbkdUGV0ZkDMgY0Q9n%2FjhmgN1dy7lMdw4PVEhLf119TzObgjGa3GhgOZN0jQ3lqlfS0MGIxpjqLUx61wmN4P%2FBofVBHawy2ABy3ZYoU2hjp3TRimPyzYOvOgdO&X-Amz-Signature=9f0bd178d720869f830ff183eafbc433b562500eeed47e5cc1d816b4fe342f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LCRTXPH%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCRaYVncmpEwkTOFULEj0iTyJxROTy1S5%2Fp1qMyVRh%2BdwIgGnVGEM4UdpJuxDC9pdAbsrb0qSzYP3kVf6Yk8z5dBJsq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAOZAiPNQaYxhQ8WFSrcA45qk1P9Eo22N7OnwmWVDO2yPbBxK39807uFa6dvBOKpXjvBMXUFn97vPPTPnjgFqrCcVGSR1SZHnWS7OWPo6HBel08dv6hHWopbr4iG8Zz8DnD1jgrwnbMzt%2BCt5egtkz%2Fq869QbEXnKKDvHeAGh7UQYyeIWmchWB%2BJ%2B2kZ8WKFCgEnV41vYqzgTVaXBs1tzlQW2r%2FIFib295ojzCZhwzAe35O4H4RQY4lCm13jeciQapWn7b%2BDAE8y4pj9w31PVWzdRZdA5H9utZlm3386aQxrOfggi%2FXMXGZSKDi37XIZG3wPaiFyuDlnZqi8hS3Nit1Hx2X7fzJVtzypvHc%2FuNFoJPjELCNsPf5glmL%2B%2BU126gre4m5EEvJ%2FmQt%2BfmVNgtchcDiAB3Get05rApzgxa4B3EnaArPfwXshgzPPYahz9SCIc1Nz1f0YeePf6kGMlvNwZEgWUo8JZSrJuGEiPfDCvxBcaM1UnMVg5qj1P9m1s1iCufT8MV2Mh0jwJXRjWqAPpQX94iu%2FxPjwjmA2H2dwgMlRewrQYfM6iSpm3UsO1LmCoVKBaO%2FlxWzoK7fVojU7s1ZY3E0niOB2KmTTfnwuDTbAK4%2FovQ3rtPOqvrUrQSACWSQ3LDHnH7oRMNufucIGOqUBDcpx%2FbJot7zQa2TuP%2FOWVCsOic%2F5PnhCqbXSmVtkQsSF3ww5WQfZJDrIBWnmfgRxRTEnsBeeGQ8fu%2B6PkzFOOfj2zEAdKCHtu1BbkdUGV0ZkDMgY0Q9n%2FjhmgN1dy7lMdw4PVEhLf119TzObgjGa3GhgOZN0jQ3lqlfS0MGIxpjqLUx61wmN4P%2FBofVBHawy2ABy3ZYoU2hjp3TRimPyzYOvOgdO&X-Amz-Signature=f3b72838402749f25ce92ba91443c3db94c7458847adcfc04f2109d0efad3d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
