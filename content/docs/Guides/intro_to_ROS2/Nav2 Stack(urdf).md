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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IATBFZV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJFMEMCH3IjCGvzqAOjswH9y2tdR%2BPP4l5r3xv4iSzs%2F5qsNIYCIHE3O%2F5AV7aSTlIg2IqIt7KPbLPgzBEG55pwbX%2BoporAKv8DCFsQABoMNjM3NDIzMTgzODA1IgxlftpSL7LNtkxJSmUq3ANv3ZrKbURRvbDsmKasc13leWnKT8g54lFuQDfVbCd2Mr9TMLB9arZKCSza%2FLOhrJLhBEXlqsEels8MmsRnWLBhST7VJ65XTT2ahsINRPrvsTx4pXTs3ubW%2FthXB3H0%2BNmvbA%2Fw2HOovr%2B2Gt41VS%2BVXMMg%2F4y4IaVbij68z9zyxk6AhFurc6B84yRoYbDVSWLxF%2FYh7RIa0c5WiIEfwk4U5GPAY78pH8pjGH3X7xZ2AeUrTitLP2UwB6jh%2FcZYGvDDsc%2FztPhTKT7SwUUslYr6tTscjoUqn2J8pxxgUSwC7LqqfsbNmhtHPJCHIJc3GdyN9lYWqRRr6MJLWCRNNfYbwItAf8Rg4dmakX7yrQE%2BeGOXjBVNE98WnpItaeiqe0sVmfuy4kTzvHODf%2FZD17Z%2FTqL5le%2BXv%2B02Z8aJIgepKHpMuKNWR2Fq51LGRp8HjjbnIJwG4Vxg4UhzdG81ySRUujgO2vQ96%2BmlrTH2LGCuRWafZCW4YMDgcFIY1hdLH0IWI4uOPRqQKdNgC2gVcGQ4EBU0q1KZfIg7F%2Bxtge2yJKVqpXqNdWj43qIv0R22P6PqH0%2BCJmtJcW8TQSk2eEQri3jJXQRJZn8Igcl05o2zlSwtm%2BgEuSQxJ3j47TDDv%2Fu9BjqnAaeBN%2B90reVEa39qQZCipbSYjfQNYNnPZ0bZXtxl6C%2F37zQsW8UqAsoq2nOalRvxrp%2B5vzqstu361IQfEVnxhNuUyYrKbIJpWLRusAZzC%2B3jAr390FBRGEbuvZf%2FYbI%2F07EmPfGoy1o92Y%2FEOqmjO2yljslILld1rrKOjPGMqHREH2%2FqXDnYqKdT8%2FbWKhd%2FO1AvVqS2emfmstFWOHddDqKhMH771HJ1&X-Amz-Signature=fc4c98aee073a746e74d1ef6b5dbe105e52b0192606ce1bb7fcbc8d703916f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IATBFZV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJFMEMCH3IjCGvzqAOjswH9y2tdR%2BPP4l5r3xv4iSzs%2F5qsNIYCIHE3O%2F5AV7aSTlIg2IqIt7KPbLPgzBEG55pwbX%2BoporAKv8DCFsQABoMNjM3NDIzMTgzODA1IgxlftpSL7LNtkxJSmUq3ANv3ZrKbURRvbDsmKasc13leWnKT8g54lFuQDfVbCd2Mr9TMLB9arZKCSza%2FLOhrJLhBEXlqsEels8MmsRnWLBhST7VJ65XTT2ahsINRPrvsTx4pXTs3ubW%2FthXB3H0%2BNmvbA%2Fw2HOovr%2B2Gt41VS%2BVXMMg%2F4y4IaVbij68z9zyxk6AhFurc6B84yRoYbDVSWLxF%2FYh7RIa0c5WiIEfwk4U5GPAY78pH8pjGH3X7xZ2AeUrTitLP2UwB6jh%2FcZYGvDDsc%2FztPhTKT7SwUUslYr6tTscjoUqn2J8pxxgUSwC7LqqfsbNmhtHPJCHIJc3GdyN9lYWqRRr6MJLWCRNNfYbwItAf8Rg4dmakX7yrQE%2BeGOXjBVNE98WnpItaeiqe0sVmfuy4kTzvHODf%2FZD17Z%2FTqL5le%2BXv%2B02Z8aJIgepKHpMuKNWR2Fq51LGRp8HjjbnIJwG4Vxg4UhzdG81ySRUujgO2vQ96%2BmlrTH2LGCuRWafZCW4YMDgcFIY1hdLH0IWI4uOPRqQKdNgC2gVcGQ4EBU0q1KZfIg7F%2Bxtge2yJKVqpXqNdWj43qIv0R22P6PqH0%2BCJmtJcW8TQSk2eEQri3jJXQRJZn8Igcl05o2zlSwtm%2BgEuSQxJ3j47TDDv%2Fu9BjqnAaeBN%2B90reVEa39qQZCipbSYjfQNYNnPZ0bZXtxl6C%2F37zQsW8UqAsoq2nOalRvxrp%2B5vzqstu361IQfEVnxhNuUyYrKbIJpWLRusAZzC%2B3jAr390FBRGEbuvZf%2FYbI%2F07EmPfGoy1o92Y%2FEOqmjO2yljslILld1rrKOjPGMqHREH2%2FqXDnYqKdT8%2FbWKhd%2FO1AvVqS2emfmstFWOHddDqKhMH771HJ1&X-Amz-Signature=2511a35ae2579cd584332915505178749d2288da9dc97693edde2f5771c625a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IATBFZV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJFMEMCH3IjCGvzqAOjswH9y2tdR%2BPP4l5r3xv4iSzs%2F5qsNIYCIHE3O%2F5AV7aSTlIg2IqIt7KPbLPgzBEG55pwbX%2BoporAKv8DCFsQABoMNjM3NDIzMTgzODA1IgxlftpSL7LNtkxJSmUq3ANv3ZrKbURRvbDsmKasc13leWnKT8g54lFuQDfVbCd2Mr9TMLB9arZKCSza%2FLOhrJLhBEXlqsEels8MmsRnWLBhST7VJ65XTT2ahsINRPrvsTx4pXTs3ubW%2FthXB3H0%2BNmvbA%2Fw2HOovr%2B2Gt41VS%2BVXMMg%2F4y4IaVbij68z9zyxk6AhFurc6B84yRoYbDVSWLxF%2FYh7RIa0c5WiIEfwk4U5GPAY78pH8pjGH3X7xZ2AeUrTitLP2UwB6jh%2FcZYGvDDsc%2FztPhTKT7SwUUslYr6tTscjoUqn2J8pxxgUSwC7LqqfsbNmhtHPJCHIJc3GdyN9lYWqRRr6MJLWCRNNfYbwItAf8Rg4dmakX7yrQE%2BeGOXjBVNE98WnpItaeiqe0sVmfuy4kTzvHODf%2FZD17Z%2FTqL5le%2BXv%2B02Z8aJIgepKHpMuKNWR2Fq51LGRp8HjjbnIJwG4Vxg4UhzdG81ySRUujgO2vQ96%2BmlrTH2LGCuRWafZCW4YMDgcFIY1hdLH0IWI4uOPRqQKdNgC2gVcGQ4EBU0q1KZfIg7F%2Bxtge2yJKVqpXqNdWj43qIv0R22P6PqH0%2BCJmtJcW8TQSk2eEQri3jJXQRJZn8Igcl05o2zlSwtm%2BgEuSQxJ3j47TDDv%2Fu9BjqnAaeBN%2B90reVEa39qQZCipbSYjfQNYNnPZ0bZXtxl6C%2F37zQsW8UqAsoq2nOalRvxrp%2B5vzqstu361IQfEVnxhNuUyYrKbIJpWLRusAZzC%2B3jAr390FBRGEbuvZf%2FYbI%2F07EmPfGoy1o92Y%2FEOqmjO2yljslILld1rrKOjPGMqHREH2%2FqXDnYqKdT8%2FbWKhd%2FO1AvVqS2emfmstFWOHddDqKhMH771HJ1&X-Amz-Signature=f72ece5b30d68b94d87359daacfba19fbd8d63c1ad140467ae8be8e0fcab2323&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IATBFZV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJFMEMCH3IjCGvzqAOjswH9y2tdR%2BPP4l5r3xv4iSzs%2F5qsNIYCIHE3O%2F5AV7aSTlIg2IqIt7KPbLPgzBEG55pwbX%2BoporAKv8DCFsQABoMNjM3NDIzMTgzODA1IgxlftpSL7LNtkxJSmUq3ANv3ZrKbURRvbDsmKasc13leWnKT8g54lFuQDfVbCd2Mr9TMLB9arZKCSza%2FLOhrJLhBEXlqsEels8MmsRnWLBhST7VJ65XTT2ahsINRPrvsTx4pXTs3ubW%2FthXB3H0%2BNmvbA%2Fw2HOovr%2B2Gt41VS%2BVXMMg%2F4y4IaVbij68z9zyxk6AhFurc6B84yRoYbDVSWLxF%2FYh7RIa0c5WiIEfwk4U5GPAY78pH8pjGH3X7xZ2AeUrTitLP2UwB6jh%2FcZYGvDDsc%2FztPhTKT7SwUUslYr6tTscjoUqn2J8pxxgUSwC7LqqfsbNmhtHPJCHIJc3GdyN9lYWqRRr6MJLWCRNNfYbwItAf8Rg4dmakX7yrQE%2BeGOXjBVNE98WnpItaeiqe0sVmfuy4kTzvHODf%2FZD17Z%2FTqL5le%2BXv%2B02Z8aJIgepKHpMuKNWR2Fq51LGRp8HjjbnIJwG4Vxg4UhzdG81ySRUujgO2vQ96%2BmlrTH2LGCuRWafZCW4YMDgcFIY1hdLH0IWI4uOPRqQKdNgC2gVcGQ4EBU0q1KZfIg7F%2Bxtge2yJKVqpXqNdWj43qIv0R22P6PqH0%2BCJmtJcW8TQSk2eEQri3jJXQRJZn8Igcl05o2zlSwtm%2BgEuSQxJ3j47TDDv%2Fu9BjqnAaeBN%2B90reVEa39qQZCipbSYjfQNYNnPZ0bZXtxl6C%2F37zQsW8UqAsoq2nOalRvxrp%2B5vzqstu361IQfEVnxhNuUyYrKbIJpWLRusAZzC%2B3jAr390FBRGEbuvZf%2FYbI%2F07EmPfGoy1o92Y%2FEOqmjO2yljslILld1rrKOjPGMqHREH2%2FqXDnYqKdT8%2FbWKhd%2FO1AvVqS2emfmstFWOHddDqKhMH771HJ1&X-Amz-Signature=b32f60cded097e418137be7e4affd8d6bfa21b54d1d498a2cf649b8562db57c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IATBFZV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJFMEMCH3IjCGvzqAOjswH9y2tdR%2BPP4l5r3xv4iSzs%2F5qsNIYCIHE3O%2F5AV7aSTlIg2IqIt7KPbLPgzBEG55pwbX%2BoporAKv8DCFsQABoMNjM3NDIzMTgzODA1IgxlftpSL7LNtkxJSmUq3ANv3ZrKbURRvbDsmKasc13leWnKT8g54lFuQDfVbCd2Mr9TMLB9arZKCSza%2FLOhrJLhBEXlqsEels8MmsRnWLBhST7VJ65XTT2ahsINRPrvsTx4pXTs3ubW%2FthXB3H0%2BNmvbA%2Fw2HOovr%2B2Gt41VS%2BVXMMg%2F4y4IaVbij68z9zyxk6AhFurc6B84yRoYbDVSWLxF%2FYh7RIa0c5WiIEfwk4U5GPAY78pH8pjGH3X7xZ2AeUrTitLP2UwB6jh%2FcZYGvDDsc%2FztPhTKT7SwUUslYr6tTscjoUqn2J8pxxgUSwC7LqqfsbNmhtHPJCHIJc3GdyN9lYWqRRr6MJLWCRNNfYbwItAf8Rg4dmakX7yrQE%2BeGOXjBVNE98WnpItaeiqe0sVmfuy4kTzvHODf%2FZD17Z%2FTqL5le%2BXv%2B02Z8aJIgepKHpMuKNWR2Fq51LGRp8HjjbnIJwG4Vxg4UhzdG81ySRUujgO2vQ96%2BmlrTH2LGCuRWafZCW4YMDgcFIY1hdLH0IWI4uOPRqQKdNgC2gVcGQ4EBU0q1KZfIg7F%2Bxtge2yJKVqpXqNdWj43qIv0R22P6PqH0%2BCJmtJcW8TQSk2eEQri3jJXQRJZn8Igcl05o2zlSwtm%2BgEuSQxJ3j47TDDv%2Fu9BjqnAaeBN%2B90reVEa39qQZCipbSYjfQNYNnPZ0bZXtxl6C%2F37zQsW8UqAsoq2nOalRvxrp%2B5vzqstu361IQfEVnxhNuUyYrKbIJpWLRusAZzC%2B3jAr390FBRGEbuvZf%2FYbI%2F07EmPfGoy1o92Y%2FEOqmjO2yljslILld1rrKOjPGMqHREH2%2FqXDnYqKdT8%2FbWKhd%2FO1AvVqS2emfmstFWOHddDqKhMH771HJ1&X-Amz-Signature=ecb6afb4cd546624e9f6f157797619509ef764b400d8591caf02ccc7e2889db3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IATBFZV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJFMEMCH3IjCGvzqAOjswH9y2tdR%2BPP4l5r3xv4iSzs%2F5qsNIYCIHE3O%2F5AV7aSTlIg2IqIt7KPbLPgzBEG55pwbX%2BoporAKv8DCFsQABoMNjM3NDIzMTgzODA1IgxlftpSL7LNtkxJSmUq3ANv3ZrKbURRvbDsmKasc13leWnKT8g54lFuQDfVbCd2Mr9TMLB9arZKCSza%2FLOhrJLhBEXlqsEels8MmsRnWLBhST7VJ65XTT2ahsINRPrvsTx4pXTs3ubW%2FthXB3H0%2BNmvbA%2Fw2HOovr%2B2Gt41VS%2BVXMMg%2F4y4IaVbij68z9zyxk6AhFurc6B84yRoYbDVSWLxF%2FYh7RIa0c5WiIEfwk4U5GPAY78pH8pjGH3X7xZ2AeUrTitLP2UwB6jh%2FcZYGvDDsc%2FztPhTKT7SwUUslYr6tTscjoUqn2J8pxxgUSwC7LqqfsbNmhtHPJCHIJc3GdyN9lYWqRRr6MJLWCRNNfYbwItAf8Rg4dmakX7yrQE%2BeGOXjBVNE98WnpItaeiqe0sVmfuy4kTzvHODf%2FZD17Z%2FTqL5le%2BXv%2B02Z8aJIgepKHpMuKNWR2Fq51LGRp8HjjbnIJwG4Vxg4UhzdG81ySRUujgO2vQ96%2BmlrTH2LGCuRWafZCW4YMDgcFIY1hdLH0IWI4uOPRqQKdNgC2gVcGQ4EBU0q1KZfIg7F%2Bxtge2yJKVqpXqNdWj43qIv0R22P6PqH0%2BCJmtJcW8TQSk2eEQri3jJXQRJZn8Igcl05o2zlSwtm%2BgEuSQxJ3j47TDDv%2Fu9BjqnAaeBN%2B90reVEa39qQZCipbSYjfQNYNnPZ0bZXtxl6C%2F37zQsW8UqAsoq2nOalRvxrp%2B5vzqstu361IQfEVnxhNuUyYrKbIJpWLRusAZzC%2B3jAr390FBRGEbuvZf%2FYbI%2F07EmPfGoy1o92Y%2FEOqmjO2yljslILld1rrKOjPGMqHREH2%2FqXDnYqKdT8%2FbWKhd%2FO1AvVqS2emfmstFWOHddDqKhMH771HJ1&X-Amz-Signature=96545e1ac3be1855821ca2947e804e8bc053a605cfc52bea87ca36adfa831378&X-Amz-SignedHeaders=host&x-id=GetObject)
