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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XDR5EW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQbXRV2yVAdSotfgbuPwT%2B7cTabF12ndBiLLVyTzIxgIhAM9yUQs%2Br4QcHIW2U6WD%2FsUzZv2eXd9st9Awo4jjxwzmKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE51G1vkzo8jNP%2BT8q3ANoTV7Ax2%2FK1%2Fwgvd7wAAOxWg%2FdZFGvNpN58ZPBI1pSBMOv5F%2Fv8WJUYWRiXEemTclnRE9B5ZnOOp4J7m98wzYCeCogERidTwW7TI3UO8pd8s%2BtI6KGgT5U1%2BXlJnHxgZtOr0a1WPSDhXFg2gPmfUF38iQ8g%2FsbA3rvVdxfm6pBN%2BtLHJ8iFiryuGNMez2XrjMmC1UEZWSN4JZJH24KdVVXL9mnBo6Tvz8YS%2BoV7Pl52CrJLpcRacUn0IlBEx7XKGNSlxT50nsPLKYogxgDyqQ%2FxA2oxLrmbPb96fbnPiLzGvQ0S%2Famtl%2BuJ5JgF7nyyojNfpbrL7v5%2FY6HzWjY0%2FDxV6H9jIHpwRGLbLoHx%2FQjqZRPC7IddPrdB1wLr4AWTzCBSJT3wMVSiSkTGOYddtGzACehUDx0CxcdGJB11EoL4eD28Ler9X8zcezM%2F56xQqkE%2BoCodSnHcF13kWYpuI7jUeeE8aIO32dLMyP3JjTG7obgGY4nd7zfMa0IUhL%2BvrO66Vc1FnR62jnfwErAH3kLZg5Dw0Kws%2Bpxya%2BNSmEKrVk5ypQZc7lKoVQx5RtVtzOqCsTMOOmzmSdqvPY9QyofprjGgOBiBKreVcKTlsSFe9cEYKfBZkbEDU8A%2BDDx4rm%2FBjqkAcvTERZmbP8HjGBEJeLqSUkLEhlqxu%2BRjoTXjpJ53ggPgqB%2BZR3rttB0gesENQTQpyp%2BorRynPgIxrKO4Sc%2B7AijasTm5t0CtZ1paP51YnMiV%2BoH4mXlr4DqaJ2FItHkwNHDNU2V1m3%2FAwlBlE5XBAlLDyCR19%2B9l5S99sIL8gSmsSn2yj7TcPDyjloJtimeGEh802p%2FXJVdgGoT4MEEUWCh9hGW&X-Amz-Signature=f28f854cfc0d5ad2d25039803538ef2b59bbddf852da23478ce3fa73127134fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XDR5EW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQbXRV2yVAdSotfgbuPwT%2B7cTabF12ndBiLLVyTzIxgIhAM9yUQs%2Br4QcHIW2U6WD%2FsUzZv2eXd9st9Awo4jjxwzmKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE51G1vkzo8jNP%2BT8q3ANoTV7Ax2%2FK1%2Fwgvd7wAAOxWg%2FdZFGvNpN58ZPBI1pSBMOv5F%2Fv8WJUYWRiXEemTclnRE9B5ZnOOp4J7m98wzYCeCogERidTwW7TI3UO8pd8s%2BtI6KGgT5U1%2BXlJnHxgZtOr0a1WPSDhXFg2gPmfUF38iQ8g%2FsbA3rvVdxfm6pBN%2BtLHJ8iFiryuGNMez2XrjMmC1UEZWSN4JZJH24KdVVXL9mnBo6Tvz8YS%2BoV7Pl52CrJLpcRacUn0IlBEx7XKGNSlxT50nsPLKYogxgDyqQ%2FxA2oxLrmbPb96fbnPiLzGvQ0S%2Famtl%2BuJ5JgF7nyyojNfpbrL7v5%2FY6HzWjY0%2FDxV6H9jIHpwRGLbLoHx%2FQjqZRPC7IddPrdB1wLr4AWTzCBSJT3wMVSiSkTGOYddtGzACehUDx0CxcdGJB11EoL4eD28Ler9X8zcezM%2F56xQqkE%2BoCodSnHcF13kWYpuI7jUeeE8aIO32dLMyP3JjTG7obgGY4nd7zfMa0IUhL%2BvrO66Vc1FnR62jnfwErAH3kLZg5Dw0Kws%2Bpxya%2BNSmEKrVk5ypQZc7lKoVQx5RtVtzOqCsTMOOmzmSdqvPY9QyofprjGgOBiBKreVcKTlsSFe9cEYKfBZkbEDU8A%2BDDx4rm%2FBjqkAcvTERZmbP8HjGBEJeLqSUkLEhlqxu%2BRjoTXjpJ53ggPgqB%2BZR3rttB0gesENQTQpyp%2BorRynPgIxrKO4Sc%2B7AijasTm5t0CtZ1paP51YnMiV%2BoH4mXlr4DqaJ2FItHkwNHDNU2V1m3%2FAwlBlE5XBAlLDyCR19%2B9l5S99sIL8gSmsSn2yj7TcPDyjloJtimeGEh802p%2FXJVdgGoT4MEEUWCh9hGW&X-Amz-Signature=68639b026463afa76019b4a0ac7ebe5c1cde1067fc79a5c198882a0eb5c642f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XDR5EW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQbXRV2yVAdSotfgbuPwT%2B7cTabF12ndBiLLVyTzIxgIhAM9yUQs%2Br4QcHIW2U6WD%2FsUzZv2eXd9st9Awo4jjxwzmKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE51G1vkzo8jNP%2BT8q3ANoTV7Ax2%2FK1%2Fwgvd7wAAOxWg%2FdZFGvNpN58ZPBI1pSBMOv5F%2Fv8WJUYWRiXEemTclnRE9B5ZnOOp4J7m98wzYCeCogERidTwW7TI3UO8pd8s%2BtI6KGgT5U1%2BXlJnHxgZtOr0a1WPSDhXFg2gPmfUF38iQ8g%2FsbA3rvVdxfm6pBN%2BtLHJ8iFiryuGNMez2XrjMmC1UEZWSN4JZJH24KdVVXL9mnBo6Tvz8YS%2BoV7Pl52CrJLpcRacUn0IlBEx7XKGNSlxT50nsPLKYogxgDyqQ%2FxA2oxLrmbPb96fbnPiLzGvQ0S%2Famtl%2BuJ5JgF7nyyojNfpbrL7v5%2FY6HzWjY0%2FDxV6H9jIHpwRGLbLoHx%2FQjqZRPC7IddPrdB1wLr4AWTzCBSJT3wMVSiSkTGOYddtGzACehUDx0CxcdGJB11EoL4eD28Ler9X8zcezM%2F56xQqkE%2BoCodSnHcF13kWYpuI7jUeeE8aIO32dLMyP3JjTG7obgGY4nd7zfMa0IUhL%2BvrO66Vc1FnR62jnfwErAH3kLZg5Dw0Kws%2Bpxya%2BNSmEKrVk5ypQZc7lKoVQx5RtVtzOqCsTMOOmzmSdqvPY9QyofprjGgOBiBKreVcKTlsSFe9cEYKfBZkbEDU8A%2BDDx4rm%2FBjqkAcvTERZmbP8HjGBEJeLqSUkLEhlqxu%2BRjoTXjpJ53ggPgqB%2BZR3rttB0gesENQTQpyp%2BorRynPgIxrKO4Sc%2B7AijasTm5t0CtZ1paP51YnMiV%2BoH4mXlr4DqaJ2FItHkwNHDNU2V1m3%2FAwlBlE5XBAlLDyCR19%2B9l5S99sIL8gSmsSn2yj7TcPDyjloJtimeGEh802p%2FXJVdgGoT4MEEUWCh9hGW&X-Amz-Signature=976c62a73fe48274b4c7864d310b7e387e2c1b0b10ecdf5135942bfa428e2d01&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XDR5EW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQbXRV2yVAdSotfgbuPwT%2B7cTabF12ndBiLLVyTzIxgIhAM9yUQs%2Br4QcHIW2U6WD%2FsUzZv2eXd9st9Awo4jjxwzmKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE51G1vkzo8jNP%2BT8q3ANoTV7Ax2%2FK1%2Fwgvd7wAAOxWg%2FdZFGvNpN58ZPBI1pSBMOv5F%2Fv8WJUYWRiXEemTclnRE9B5ZnOOp4J7m98wzYCeCogERidTwW7TI3UO8pd8s%2BtI6KGgT5U1%2BXlJnHxgZtOr0a1WPSDhXFg2gPmfUF38iQ8g%2FsbA3rvVdxfm6pBN%2BtLHJ8iFiryuGNMez2XrjMmC1UEZWSN4JZJH24KdVVXL9mnBo6Tvz8YS%2BoV7Pl52CrJLpcRacUn0IlBEx7XKGNSlxT50nsPLKYogxgDyqQ%2FxA2oxLrmbPb96fbnPiLzGvQ0S%2Famtl%2BuJ5JgF7nyyojNfpbrL7v5%2FY6HzWjY0%2FDxV6H9jIHpwRGLbLoHx%2FQjqZRPC7IddPrdB1wLr4AWTzCBSJT3wMVSiSkTGOYddtGzACehUDx0CxcdGJB11EoL4eD28Ler9X8zcezM%2F56xQqkE%2BoCodSnHcF13kWYpuI7jUeeE8aIO32dLMyP3JjTG7obgGY4nd7zfMa0IUhL%2BvrO66Vc1FnR62jnfwErAH3kLZg5Dw0Kws%2Bpxya%2BNSmEKrVk5ypQZc7lKoVQx5RtVtzOqCsTMOOmzmSdqvPY9QyofprjGgOBiBKreVcKTlsSFe9cEYKfBZkbEDU8A%2BDDx4rm%2FBjqkAcvTERZmbP8HjGBEJeLqSUkLEhlqxu%2BRjoTXjpJ53ggPgqB%2BZR3rttB0gesENQTQpyp%2BorRynPgIxrKO4Sc%2B7AijasTm5t0CtZ1paP51YnMiV%2BoH4mXlr4DqaJ2FItHkwNHDNU2V1m3%2FAwlBlE5XBAlLDyCR19%2B9l5S99sIL8gSmsSn2yj7TcPDyjloJtimeGEh802p%2FXJVdgGoT4MEEUWCh9hGW&X-Amz-Signature=e2c68411b9582479a4a70699d073eb6040aca31e259f8059c91271b0587f6443&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XDR5EW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQbXRV2yVAdSotfgbuPwT%2B7cTabF12ndBiLLVyTzIxgIhAM9yUQs%2Br4QcHIW2U6WD%2FsUzZv2eXd9st9Awo4jjxwzmKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE51G1vkzo8jNP%2BT8q3ANoTV7Ax2%2FK1%2Fwgvd7wAAOxWg%2FdZFGvNpN58ZPBI1pSBMOv5F%2Fv8WJUYWRiXEemTclnRE9B5ZnOOp4J7m98wzYCeCogERidTwW7TI3UO8pd8s%2BtI6KGgT5U1%2BXlJnHxgZtOr0a1WPSDhXFg2gPmfUF38iQ8g%2FsbA3rvVdxfm6pBN%2BtLHJ8iFiryuGNMez2XrjMmC1UEZWSN4JZJH24KdVVXL9mnBo6Tvz8YS%2BoV7Pl52CrJLpcRacUn0IlBEx7XKGNSlxT50nsPLKYogxgDyqQ%2FxA2oxLrmbPb96fbnPiLzGvQ0S%2Famtl%2BuJ5JgF7nyyojNfpbrL7v5%2FY6HzWjY0%2FDxV6H9jIHpwRGLbLoHx%2FQjqZRPC7IddPrdB1wLr4AWTzCBSJT3wMVSiSkTGOYddtGzACehUDx0CxcdGJB11EoL4eD28Ler9X8zcezM%2F56xQqkE%2BoCodSnHcF13kWYpuI7jUeeE8aIO32dLMyP3JjTG7obgGY4nd7zfMa0IUhL%2BvrO66Vc1FnR62jnfwErAH3kLZg5Dw0Kws%2Bpxya%2BNSmEKrVk5ypQZc7lKoVQx5RtVtzOqCsTMOOmzmSdqvPY9QyofprjGgOBiBKreVcKTlsSFe9cEYKfBZkbEDU8A%2BDDx4rm%2FBjqkAcvTERZmbP8HjGBEJeLqSUkLEhlqxu%2BRjoTXjpJ53ggPgqB%2BZR3rttB0gesENQTQpyp%2BorRynPgIxrKO4Sc%2B7AijasTm5t0CtZ1paP51YnMiV%2BoH4mXlr4DqaJ2FItHkwNHDNU2V1m3%2FAwlBlE5XBAlLDyCR19%2B9l5S99sIL8gSmsSn2yj7TcPDyjloJtimeGEh802p%2FXJVdgGoT4MEEUWCh9hGW&X-Amz-Signature=9a382009f72e2284c43641be3ec0d8c4410735412c77b6607e2edef1269fd2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XDR5EW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjQbXRV2yVAdSotfgbuPwT%2B7cTabF12ndBiLLVyTzIxgIhAM9yUQs%2Br4QcHIW2U6WD%2FsUzZv2eXd9st9Awo4jjxwzmKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE51G1vkzo8jNP%2BT8q3ANoTV7Ax2%2FK1%2Fwgvd7wAAOxWg%2FdZFGvNpN58ZPBI1pSBMOv5F%2Fv8WJUYWRiXEemTclnRE9B5ZnOOp4J7m98wzYCeCogERidTwW7TI3UO8pd8s%2BtI6KGgT5U1%2BXlJnHxgZtOr0a1WPSDhXFg2gPmfUF38iQ8g%2FsbA3rvVdxfm6pBN%2BtLHJ8iFiryuGNMez2XrjMmC1UEZWSN4JZJH24KdVVXL9mnBo6Tvz8YS%2BoV7Pl52CrJLpcRacUn0IlBEx7XKGNSlxT50nsPLKYogxgDyqQ%2FxA2oxLrmbPb96fbnPiLzGvQ0S%2Famtl%2BuJ5JgF7nyyojNfpbrL7v5%2FY6HzWjY0%2FDxV6H9jIHpwRGLbLoHx%2FQjqZRPC7IddPrdB1wLr4AWTzCBSJT3wMVSiSkTGOYddtGzACehUDx0CxcdGJB11EoL4eD28Ler9X8zcezM%2F56xQqkE%2BoCodSnHcF13kWYpuI7jUeeE8aIO32dLMyP3JjTG7obgGY4nd7zfMa0IUhL%2BvrO66Vc1FnR62jnfwErAH3kLZg5Dw0Kws%2Bpxya%2BNSmEKrVk5ypQZc7lKoVQx5RtVtzOqCsTMOOmzmSdqvPY9QyofprjGgOBiBKreVcKTlsSFe9cEYKfBZkbEDU8A%2BDDx4rm%2FBjqkAcvTERZmbP8HjGBEJeLqSUkLEhlqxu%2BRjoTXjpJ53ggPgqB%2BZR3rttB0gesENQTQpyp%2BorRynPgIxrKO4Sc%2B7AijasTm5t0CtZ1paP51YnMiV%2BoH4mXlr4DqaJ2FItHkwNHDNU2V1m3%2FAwlBlE5XBAlLDyCR19%2B9l5S99sIL8gSmsSn2yj7TcPDyjloJtimeGEh802p%2FXJVdgGoT4MEEUWCh9hGW&X-Amz-Signature=0c3d3e73d968884f54152015ac7aa44299c4dd063ba3b2006b333cd33504b856&X-Amz-SignedHeaders=host&x-id=GetObject)
