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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MT5TZA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3mivTtEeOhhxVnh5d2ONaz0t77CLQt9glfoKmb6W37wIhAPi7myXwE0AA9CAm4liHk6r%2FGPAI5WGmKOMQE70UumoFKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3f5BZ5%2FjGsrOPvfcq3AMk17iedhdlzS1GIg8Box9%2BNgNHGM2FWTkPj5ULqNJzZLKru7p%2BanaY6%2Bij%2F6b%2BuYF8wwEzmFJsAcuDuW4AWQZg5hL2HqP9f08u70jAIruaxLmNlZ9Q8lFLqcJf%2BzbpF%2FjPF2rCHdVuLt%2BIVXVOvPpgZD8Xa5beY6ziY6k9j4rgnXYxgiBh4J6QKVxBwILqGOV9JULFN%2Fc6lOkZ%2F%2FIR86tjrPShQa4DAgDLdk%2BHD8zS61nB%2FRdNQCgTuebww9KWMIHczBvjBQ9NmO8Ev7iQhIYIyExMKVbGi2Bzdw1xglP%2B%2BsuFl%2Fz2yqyL8XeUV9PesF%2BEAaEdtEB5tHGZh3RDFgKy7z%2BUPDC90CPwoz3BF%2BmibMN19JZqbR7BI%2FoIUyRDRi6T5Etcha%2BObFRb%2F5q4qR2q6hj%2BHWZsM%2FcCgKsK28P3Fp%2FuayaTqQeFoCs4Lj572j9Yke0khgjzuqHTTPDTWrUV3%2BC%2Fof0DcX2hExusBWUYdoArveOPixkvEyAsNTd5B8M8T1rnjHAG1VhJlM%2BTloH7%2FGEeeQcqvqbg7DHquwcdvuVSnoEsNPpdsJIoa00TS5zxz8HE7pZXAAkQhbz%2FZj0CxwLaqqQo%2BfiY7NxTgKa6nFu5ECZJYGZ9R2%2FzsjCXqdLABjqkAa3nHILwTv4BKMKjLsuUCmuDcS24q4vaZyWxKh6%2BvTo9R40QTDmFLoxedhKYjYLdA3%2FC7zjAbW%2F92olWUCgSAcrDdx3rALl0e1gDagOUcpTw5ziefJZ84OUDiG%2FQW7%2FkoCEeoonPhaGSAcK4Dtrj3RErGL3GiqYlcNs3VUJwRJ%2B8lMHsOMSa9MPQQWkpaTqWc%2FW1kMDFKqamH86maiB0bIIqOq4%2B&X-Amz-Signature=91ec82eccdb340505c69c363879071e9542714a232ebfebbcdc252fee9698d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MT5TZA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3mivTtEeOhhxVnh5d2ONaz0t77CLQt9glfoKmb6W37wIhAPi7myXwE0AA9CAm4liHk6r%2FGPAI5WGmKOMQE70UumoFKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3f5BZ5%2FjGsrOPvfcq3AMk17iedhdlzS1GIg8Box9%2BNgNHGM2FWTkPj5ULqNJzZLKru7p%2BanaY6%2Bij%2F6b%2BuYF8wwEzmFJsAcuDuW4AWQZg5hL2HqP9f08u70jAIruaxLmNlZ9Q8lFLqcJf%2BzbpF%2FjPF2rCHdVuLt%2BIVXVOvPpgZD8Xa5beY6ziY6k9j4rgnXYxgiBh4J6QKVxBwILqGOV9JULFN%2Fc6lOkZ%2F%2FIR86tjrPShQa4DAgDLdk%2BHD8zS61nB%2FRdNQCgTuebww9KWMIHczBvjBQ9NmO8Ev7iQhIYIyExMKVbGi2Bzdw1xglP%2B%2BsuFl%2Fz2yqyL8XeUV9PesF%2BEAaEdtEB5tHGZh3RDFgKy7z%2BUPDC90CPwoz3BF%2BmibMN19JZqbR7BI%2FoIUyRDRi6T5Etcha%2BObFRb%2F5q4qR2q6hj%2BHWZsM%2FcCgKsK28P3Fp%2FuayaTqQeFoCs4Lj572j9Yke0khgjzuqHTTPDTWrUV3%2BC%2Fof0DcX2hExusBWUYdoArveOPixkvEyAsNTd5B8M8T1rnjHAG1VhJlM%2BTloH7%2FGEeeQcqvqbg7DHquwcdvuVSnoEsNPpdsJIoa00TS5zxz8HE7pZXAAkQhbz%2FZj0CxwLaqqQo%2BfiY7NxTgKa6nFu5ECZJYGZ9R2%2FzsjCXqdLABjqkAa3nHILwTv4BKMKjLsuUCmuDcS24q4vaZyWxKh6%2BvTo9R40QTDmFLoxedhKYjYLdA3%2FC7zjAbW%2F92olWUCgSAcrDdx3rALl0e1gDagOUcpTw5ziefJZ84OUDiG%2FQW7%2FkoCEeoonPhaGSAcK4Dtrj3RErGL3GiqYlcNs3VUJwRJ%2B8lMHsOMSa9MPQQWkpaTqWc%2FW1kMDFKqamH86maiB0bIIqOq4%2B&X-Amz-Signature=44094a821beec7727b7dd0f4999abeca08bf6690dac5b514dfcdfcefc8307a47&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MT5TZA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3mivTtEeOhhxVnh5d2ONaz0t77CLQt9glfoKmb6W37wIhAPi7myXwE0AA9CAm4liHk6r%2FGPAI5WGmKOMQE70UumoFKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3f5BZ5%2FjGsrOPvfcq3AMk17iedhdlzS1GIg8Box9%2BNgNHGM2FWTkPj5ULqNJzZLKru7p%2BanaY6%2Bij%2F6b%2BuYF8wwEzmFJsAcuDuW4AWQZg5hL2HqP9f08u70jAIruaxLmNlZ9Q8lFLqcJf%2BzbpF%2FjPF2rCHdVuLt%2BIVXVOvPpgZD8Xa5beY6ziY6k9j4rgnXYxgiBh4J6QKVxBwILqGOV9JULFN%2Fc6lOkZ%2F%2FIR86tjrPShQa4DAgDLdk%2BHD8zS61nB%2FRdNQCgTuebww9KWMIHczBvjBQ9NmO8Ev7iQhIYIyExMKVbGi2Bzdw1xglP%2B%2BsuFl%2Fz2yqyL8XeUV9PesF%2BEAaEdtEB5tHGZh3RDFgKy7z%2BUPDC90CPwoz3BF%2BmibMN19JZqbR7BI%2FoIUyRDRi6T5Etcha%2BObFRb%2F5q4qR2q6hj%2BHWZsM%2FcCgKsK28P3Fp%2FuayaTqQeFoCs4Lj572j9Yke0khgjzuqHTTPDTWrUV3%2BC%2Fof0DcX2hExusBWUYdoArveOPixkvEyAsNTd5B8M8T1rnjHAG1VhJlM%2BTloH7%2FGEeeQcqvqbg7DHquwcdvuVSnoEsNPpdsJIoa00TS5zxz8HE7pZXAAkQhbz%2FZj0CxwLaqqQo%2BfiY7NxTgKa6nFu5ECZJYGZ9R2%2FzsjCXqdLABjqkAa3nHILwTv4BKMKjLsuUCmuDcS24q4vaZyWxKh6%2BvTo9R40QTDmFLoxedhKYjYLdA3%2FC7zjAbW%2F92olWUCgSAcrDdx3rALl0e1gDagOUcpTw5ziefJZ84OUDiG%2FQW7%2FkoCEeoonPhaGSAcK4Dtrj3RErGL3GiqYlcNs3VUJwRJ%2B8lMHsOMSa9MPQQWkpaTqWc%2FW1kMDFKqamH86maiB0bIIqOq4%2B&X-Amz-Signature=c971139113520d4992f0a15f625beab41caf3900fcf8144e286e60c2bd5ec1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MT5TZA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3mivTtEeOhhxVnh5d2ONaz0t77CLQt9glfoKmb6W37wIhAPi7myXwE0AA9CAm4liHk6r%2FGPAI5WGmKOMQE70UumoFKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3f5BZ5%2FjGsrOPvfcq3AMk17iedhdlzS1GIg8Box9%2BNgNHGM2FWTkPj5ULqNJzZLKru7p%2BanaY6%2Bij%2F6b%2BuYF8wwEzmFJsAcuDuW4AWQZg5hL2HqP9f08u70jAIruaxLmNlZ9Q8lFLqcJf%2BzbpF%2FjPF2rCHdVuLt%2BIVXVOvPpgZD8Xa5beY6ziY6k9j4rgnXYxgiBh4J6QKVxBwILqGOV9JULFN%2Fc6lOkZ%2F%2FIR86tjrPShQa4DAgDLdk%2BHD8zS61nB%2FRdNQCgTuebww9KWMIHczBvjBQ9NmO8Ev7iQhIYIyExMKVbGi2Bzdw1xglP%2B%2BsuFl%2Fz2yqyL8XeUV9PesF%2BEAaEdtEB5tHGZh3RDFgKy7z%2BUPDC90CPwoz3BF%2BmibMN19JZqbR7BI%2FoIUyRDRi6T5Etcha%2BObFRb%2F5q4qR2q6hj%2BHWZsM%2FcCgKsK28P3Fp%2FuayaTqQeFoCs4Lj572j9Yke0khgjzuqHTTPDTWrUV3%2BC%2Fof0DcX2hExusBWUYdoArveOPixkvEyAsNTd5B8M8T1rnjHAG1VhJlM%2BTloH7%2FGEeeQcqvqbg7DHquwcdvuVSnoEsNPpdsJIoa00TS5zxz8HE7pZXAAkQhbz%2FZj0CxwLaqqQo%2BfiY7NxTgKa6nFu5ECZJYGZ9R2%2FzsjCXqdLABjqkAa3nHILwTv4BKMKjLsuUCmuDcS24q4vaZyWxKh6%2BvTo9R40QTDmFLoxedhKYjYLdA3%2FC7zjAbW%2F92olWUCgSAcrDdx3rALl0e1gDagOUcpTw5ziefJZ84OUDiG%2FQW7%2FkoCEeoonPhaGSAcK4Dtrj3RErGL3GiqYlcNs3VUJwRJ%2B8lMHsOMSa9MPQQWkpaTqWc%2FW1kMDFKqamH86maiB0bIIqOq4%2B&X-Amz-Signature=70851baf96b6827a3725e876a88da3d51e20e540f1aa8fecb9dbb7c4c35e8682&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MT5TZA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3mivTtEeOhhxVnh5d2ONaz0t77CLQt9glfoKmb6W37wIhAPi7myXwE0AA9CAm4liHk6r%2FGPAI5WGmKOMQE70UumoFKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3f5BZ5%2FjGsrOPvfcq3AMk17iedhdlzS1GIg8Box9%2BNgNHGM2FWTkPj5ULqNJzZLKru7p%2BanaY6%2Bij%2F6b%2BuYF8wwEzmFJsAcuDuW4AWQZg5hL2HqP9f08u70jAIruaxLmNlZ9Q8lFLqcJf%2BzbpF%2FjPF2rCHdVuLt%2BIVXVOvPpgZD8Xa5beY6ziY6k9j4rgnXYxgiBh4J6QKVxBwILqGOV9JULFN%2Fc6lOkZ%2F%2FIR86tjrPShQa4DAgDLdk%2BHD8zS61nB%2FRdNQCgTuebww9KWMIHczBvjBQ9NmO8Ev7iQhIYIyExMKVbGi2Bzdw1xglP%2B%2BsuFl%2Fz2yqyL8XeUV9PesF%2BEAaEdtEB5tHGZh3RDFgKy7z%2BUPDC90CPwoz3BF%2BmibMN19JZqbR7BI%2FoIUyRDRi6T5Etcha%2BObFRb%2F5q4qR2q6hj%2BHWZsM%2FcCgKsK28P3Fp%2FuayaTqQeFoCs4Lj572j9Yke0khgjzuqHTTPDTWrUV3%2BC%2Fof0DcX2hExusBWUYdoArveOPixkvEyAsNTd5B8M8T1rnjHAG1VhJlM%2BTloH7%2FGEeeQcqvqbg7DHquwcdvuVSnoEsNPpdsJIoa00TS5zxz8HE7pZXAAkQhbz%2FZj0CxwLaqqQo%2BfiY7NxTgKa6nFu5ECZJYGZ9R2%2FzsjCXqdLABjqkAa3nHILwTv4BKMKjLsuUCmuDcS24q4vaZyWxKh6%2BvTo9R40QTDmFLoxedhKYjYLdA3%2FC7zjAbW%2F92olWUCgSAcrDdx3rALl0e1gDagOUcpTw5ziefJZ84OUDiG%2FQW7%2FkoCEeoonPhaGSAcK4Dtrj3RErGL3GiqYlcNs3VUJwRJ%2B8lMHsOMSa9MPQQWkpaTqWc%2FW1kMDFKqamH86maiB0bIIqOq4%2B&X-Amz-Signature=0a00f3f0295a558b2afa7a560cd721fabb2f7480e095cbb00ba8e1a39e58e76a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MT5TZA%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD3mivTtEeOhhxVnh5d2ONaz0t77CLQt9glfoKmb6W37wIhAPi7myXwE0AA9CAm4liHk6r%2FGPAI5WGmKOMQE70UumoFKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3f5BZ5%2FjGsrOPvfcq3AMk17iedhdlzS1GIg8Box9%2BNgNHGM2FWTkPj5ULqNJzZLKru7p%2BanaY6%2Bij%2F6b%2BuYF8wwEzmFJsAcuDuW4AWQZg5hL2HqP9f08u70jAIruaxLmNlZ9Q8lFLqcJf%2BzbpF%2FjPF2rCHdVuLt%2BIVXVOvPpgZD8Xa5beY6ziY6k9j4rgnXYxgiBh4J6QKVxBwILqGOV9JULFN%2Fc6lOkZ%2F%2FIR86tjrPShQa4DAgDLdk%2BHD8zS61nB%2FRdNQCgTuebww9KWMIHczBvjBQ9NmO8Ev7iQhIYIyExMKVbGi2Bzdw1xglP%2B%2BsuFl%2Fz2yqyL8XeUV9PesF%2BEAaEdtEB5tHGZh3RDFgKy7z%2BUPDC90CPwoz3BF%2BmibMN19JZqbR7BI%2FoIUyRDRi6T5Etcha%2BObFRb%2F5q4qR2q6hj%2BHWZsM%2FcCgKsK28P3Fp%2FuayaTqQeFoCs4Lj572j9Yke0khgjzuqHTTPDTWrUV3%2BC%2Fof0DcX2hExusBWUYdoArveOPixkvEyAsNTd5B8M8T1rnjHAG1VhJlM%2BTloH7%2FGEeeQcqvqbg7DHquwcdvuVSnoEsNPpdsJIoa00TS5zxz8HE7pZXAAkQhbz%2FZj0CxwLaqqQo%2BfiY7NxTgKa6nFu5ECZJYGZ9R2%2FzsjCXqdLABjqkAa3nHILwTv4BKMKjLsuUCmuDcS24q4vaZyWxKh6%2BvTo9R40QTDmFLoxedhKYjYLdA3%2FC7zjAbW%2F92olWUCgSAcrDdx3rALl0e1gDagOUcpTw5ziefJZ84OUDiG%2FQW7%2FkoCEeoonPhaGSAcK4Dtrj3RErGL3GiqYlcNs3VUJwRJ%2B8lMHsOMSa9MPQQWkpaTqWc%2FW1kMDFKqamH86maiB0bIIqOq4%2B&X-Amz-Signature=a68a10f4cf8e61a90134b6fee6b6a0941d9b785c64b135c6c9ec945c92339d49&X-Amz-SignedHeaders=host&x-id=GetObject)
