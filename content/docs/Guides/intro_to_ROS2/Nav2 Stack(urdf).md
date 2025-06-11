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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYX4QNWU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmMRxWHQqHQHOMMR%2Bcwmvl3y8neqljRLKagwo7%2FDg8yAiAop2abk0koT92DJgsL5odPgz%2Fm5SVJ1OK7pVcFLgqWeyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx5L%2BjqVN5EqfiX6dKtwDcsmzYk01hV6RR8fvY%2ByFtqNIf2yRFFI%2BDfCnFiN2HzzOJgEf0Yq6xA1NgmIEEucT3re6SUkw5bF4bmqPyQBoEz%2BdlbHeBr4rOufXsa032EGxiEpnSuJNqrrhFHLX2tGyRHBRW3eAgGu%2Fjr%2Fz01WBE4uB1cOaXncjxNR9P4IQcAcQUKZIsq4isnwk4AWyWMj%2BWGo2oEOcOFWfD0ff2mN0QvL4sYI25858WQg8D24zEM%2B8R%2BIjVFgB9yfuKl8y86Cx3kW%2BS613qDsbRbbCjY%2FYBHTHOm7s0HDDwFRwo42igAizUKnwkmPpY9gF2fcnVDtnMLFfB%2FhuGiBTegpCFAsA%2Fijubi7bMA7k%2FH97RH86eN6MblrGuM7VVsfNzpl9tKx%2B4eeFiHYtRdGhTUlYskqfdYhK9NY%2B1JW4CQOaLEOZc%2Fmpc6hbaLN5DqBLF%2BYPC%2Bbc8ez26UFClEA2Bl0DiRIt2jRczr08rpryWlLuwVwrmbKnY7vOCUAySkQ8Cf7ai9DBikegbk8sjZp1KMQ9Uf3XWoKip%2B85evYVgXC0Dn1wcPq1zXrbG%2Fhzp8UifNuX0i%2FuDgpg%2FpsIwvaIBhaarWjeEsiVcTzSTGAY3qpVcxwwEX9MB0nSm%2FxWi6ULKUsw1N6jwgY6pgHtFIR5M8Q2X6NXTO7YUPdZsi2fbMI9ZjfQ7gq1CCUirpiI3QsJNhtHIdRvPC2LZ2JmZbEx0q09ws1HGwfdAjyd0fgcmCFHZMMvmgPrNoZavToQsox8r8X8WVwtxhAau03h7bwNmewzViMH031mMNQ2knTlMzbDWm4K5k79lw0m4trxm0YIju1ebBZTyc4fC1bfvCLPIvJBNfbp2wjnWm%2F8%2FFc5dr3J&X-Amz-Signature=8ece33a699b539b23282e3f7962a7cc7bd54010c6a445f4ea1d4da24e9a62080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYX4QNWU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmMRxWHQqHQHOMMR%2Bcwmvl3y8neqljRLKagwo7%2FDg8yAiAop2abk0koT92DJgsL5odPgz%2Fm5SVJ1OK7pVcFLgqWeyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx5L%2BjqVN5EqfiX6dKtwDcsmzYk01hV6RR8fvY%2ByFtqNIf2yRFFI%2BDfCnFiN2HzzOJgEf0Yq6xA1NgmIEEucT3re6SUkw5bF4bmqPyQBoEz%2BdlbHeBr4rOufXsa032EGxiEpnSuJNqrrhFHLX2tGyRHBRW3eAgGu%2Fjr%2Fz01WBE4uB1cOaXncjxNR9P4IQcAcQUKZIsq4isnwk4AWyWMj%2BWGo2oEOcOFWfD0ff2mN0QvL4sYI25858WQg8D24zEM%2B8R%2BIjVFgB9yfuKl8y86Cx3kW%2BS613qDsbRbbCjY%2FYBHTHOm7s0HDDwFRwo42igAizUKnwkmPpY9gF2fcnVDtnMLFfB%2FhuGiBTegpCFAsA%2Fijubi7bMA7k%2FH97RH86eN6MblrGuM7VVsfNzpl9tKx%2B4eeFiHYtRdGhTUlYskqfdYhK9NY%2B1JW4CQOaLEOZc%2Fmpc6hbaLN5DqBLF%2BYPC%2Bbc8ez26UFClEA2Bl0DiRIt2jRczr08rpryWlLuwVwrmbKnY7vOCUAySkQ8Cf7ai9DBikegbk8sjZp1KMQ9Uf3XWoKip%2B85evYVgXC0Dn1wcPq1zXrbG%2Fhzp8UifNuX0i%2FuDgpg%2FpsIwvaIBhaarWjeEsiVcTzSTGAY3qpVcxwwEX9MB0nSm%2FxWi6ULKUsw1N6jwgY6pgHtFIR5M8Q2X6NXTO7YUPdZsi2fbMI9ZjfQ7gq1CCUirpiI3QsJNhtHIdRvPC2LZ2JmZbEx0q09ws1HGwfdAjyd0fgcmCFHZMMvmgPrNoZavToQsox8r8X8WVwtxhAau03h7bwNmewzViMH031mMNQ2knTlMzbDWm4K5k79lw0m4trxm0YIju1ebBZTyc4fC1bfvCLPIvJBNfbp2wjnWm%2F8%2FFc5dr3J&X-Amz-Signature=d85ddb1d479a16ae770447701622a1369860bea0b7eabc02accca4a15b6c932c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYX4QNWU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmMRxWHQqHQHOMMR%2Bcwmvl3y8neqljRLKagwo7%2FDg8yAiAop2abk0koT92DJgsL5odPgz%2Fm5SVJ1OK7pVcFLgqWeyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx5L%2BjqVN5EqfiX6dKtwDcsmzYk01hV6RR8fvY%2ByFtqNIf2yRFFI%2BDfCnFiN2HzzOJgEf0Yq6xA1NgmIEEucT3re6SUkw5bF4bmqPyQBoEz%2BdlbHeBr4rOufXsa032EGxiEpnSuJNqrrhFHLX2tGyRHBRW3eAgGu%2Fjr%2Fz01WBE4uB1cOaXncjxNR9P4IQcAcQUKZIsq4isnwk4AWyWMj%2BWGo2oEOcOFWfD0ff2mN0QvL4sYI25858WQg8D24zEM%2B8R%2BIjVFgB9yfuKl8y86Cx3kW%2BS613qDsbRbbCjY%2FYBHTHOm7s0HDDwFRwo42igAizUKnwkmPpY9gF2fcnVDtnMLFfB%2FhuGiBTegpCFAsA%2Fijubi7bMA7k%2FH97RH86eN6MblrGuM7VVsfNzpl9tKx%2B4eeFiHYtRdGhTUlYskqfdYhK9NY%2B1JW4CQOaLEOZc%2Fmpc6hbaLN5DqBLF%2BYPC%2Bbc8ez26UFClEA2Bl0DiRIt2jRczr08rpryWlLuwVwrmbKnY7vOCUAySkQ8Cf7ai9DBikegbk8sjZp1KMQ9Uf3XWoKip%2B85evYVgXC0Dn1wcPq1zXrbG%2Fhzp8UifNuX0i%2FuDgpg%2FpsIwvaIBhaarWjeEsiVcTzSTGAY3qpVcxwwEX9MB0nSm%2FxWi6ULKUsw1N6jwgY6pgHtFIR5M8Q2X6NXTO7YUPdZsi2fbMI9ZjfQ7gq1CCUirpiI3QsJNhtHIdRvPC2LZ2JmZbEx0q09ws1HGwfdAjyd0fgcmCFHZMMvmgPrNoZavToQsox8r8X8WVwtxhAau03h7bwNmewzViMH031mMNQ2knTlMzbDWm4K5k79lw0m4trxm0YIju1ebBZTyc4fC1bfvCLPIvJBNfbp2wjnWm%2F8%2FFc5dr3J&X-Amz-Signature=2aa0a2aefeae29fb2fda7aef32386a6aa912e4c9c79f7e359e6ee8882ac44c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYX4QNWU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmMRxWHQqHQHOMMR%2Bcwmvl3y8neqljRLKagwo7%2FDg8yAiAop2abk0koT92DJgsL5odPgz%2Fm5SVJ1OK7pVcFLgqWeyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx5L%2BjqVN5EqfiX6dKtwDcsmzYk01hV6RR8fvY%2ByFtqNIf2yRFFI%2BDfCnFiN2HzzOJgEf0Yq6xA1NgmIEEucT3re6SUkw5bF4bmqPyQBoEz%2BdlbHeBr4rOufXsa032EGxiEpnSuJNqrrhFHLX2tGyRHBRW3eAgGu%2Fjr%2Fz01WBE4uB1cOaXncjxNR9P4IQcAcQUKZIsq4isnwk4AWyWMj%2BWGo2oEOcOFWfD0ff2mN0QvL4sYI25858WQg8D24zEM%2B8R%2BIjVFgB9yfuKl8y86Cx3kW%2BS613qDsbRbbCjY%2FYBHTHOm7s0HDDwFRwo42igAizUKnwkmPpY9gF2fcnVDtnMLFfB%2FhuGiBTegpCFAsA%2Fijubi7bMA7k%2FH97RH86eN6MblrGuM7VVsfNzpl9tKx%2B4eeFiHYtRdGhTUlYskqfdYhK9NY%2B1JW4CQOaLEOZc%2Fmpc6hbaLN5DqBLF%2BYPC%2Bbc8ez26UFClEA2Bl0DiRIt2jRczr08rpryWlLuwVwrmbKnY7vOCUAySkQ8Cf7ai9DBikegbk8sjZp1KMQ9Uf3XWoKip%2B85evYVgXC0Dn1wcPq1zXrbG%2Fhzp8UifNuX0i%2FuDgpg%2FpsIwvaIBhaarWjeEsiVcTzSTGAY3qpVcxwwEX9MB0nSm%2FxWi6ULKUsw1N6jwgY6pgHtFIR5M8Q2X6NXTO7YUPdZsi2fbMI9ZjfQ7gq1CCUirpiI3QsJNhtHIdRvPC2LZ2JmZbEx0q09ws1HGwfdAjyd0fgcmCFHZMMvmgPrNoZavToQsox8r8X8WVwtxhAau03h7bwNmewzViMH031mMNQ2knTlMzbDWm4K5k79lw0m4trxm0YIju1ebBZTyc4fC1bfvCLPIvJBNfbp2wjnWm%2F8%2FFc5dr3J&X-Amz-Signature=8c53ac3aa03e103352aad59f44522fa08dcbd17daee36ec6fe2f1c6c8ec7ffec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYX4QNWU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmMRxWHQqHQHOMMR%2Bcwmvl3y8neqljRLKagwo7%2FDg8yAiAop2abk0koT92DJgsL5odPgz%2Fm5SVJ1OK7pVcFLgqWeyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx5L%2BjqVN5EqfiX6dKtwDcsmzYk01hV6RR8fvY%2ByFtqNIf2yRFFI%2BDfCnFiN2HzzOJgEf0Yq6xA1NgmIEEucT3re6SUkw5bF4bmqPyQBoEz%2BdlbHeBr4rOufXsa032EGxiEpnSuJNqrrhFHLX2tGyRHBRW3eAgGu%2Fjr%2Fz01WBE4uB1cOaXncjxNR9P4IQcAcQUKZIsq4isnwk4AWyWMj%2BWGo2oEOcOFWfD0ff2mN0QvL4sYI25858WQg8D24zEM%2B8R%2BIjVFgB9yfuKl8y86Cx3kW%2BS613qDsbRbbCjY%2FYBHTHOm7s0HDDwFRwo42igAizUKnwkmPpY9gF2fcnVDtnMLFfB%2FhuGiBTegpCFAsA%2Fijubi7bMA7k%2FH97RH86eN6MblrGuM7VVsfNzpl9tKx%2B4eeFiHYtRdGhTUlYskqfdYhK9NY%2B1JW4CQOaLEOZc%2Fmpc6hbaLN5DqBLF%2BYPC%2Bbc8ez26UFClEA2Bl0DiRIt2jRczr08rpryWlLuwVwrmbKnY7vOCUAySkQ8Cf7ai9DBikegbk8sjZp1KMQ9Uf3XWoKip%2B85evYVgXC0Dn1wcPq1zXrbG%2Fhzp8UifNuX0i%2FuDgpg%2FpsIwvaIBhaarWjeEsiVcTzSTGAY3qpVcxwwEX9MB0nSm%2FxWi6ULKUsw1N6jwgY6pgHtFIR5M8Q2X6NXTO7YUPdZsi2fbMI9ZjfQ7gq1CCUirpiI3QsJNhtHIdRvPC2LZ2JmZbEx0q09ws1HGwfdAjyd0fgcmCFHZMMvmgPrNoZavToQsox8r8X8WVwtxhAau03h7bwNmewzViMH031mMNQ2knTlMzbDWm4K5k79lw0m4trxm0YIju1ebBZTyc4fC1bfvCLPIvJBNfbp2wjnWm%2F8%2FFc5dr3J&X-Amz-Signature=83d0cb54966a86757e48dc501501937fb31ab0b85cb3bd8ca94323b54df6d1c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYX4QNWU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmMRxWHQqHQHOMMR%2Bcwmvl3y8neqljRLKagwo7%2FDg8yAiAop2abk0koT92DJgsL5odPgz%2Fm5SVJ1OK7pVcFLgqWeyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx5L%2BjqVN5EqfiX6dKtwDcsmzYk01hV6RR8fvY%2ByFtqNIf2yRFFI%2BDfCnFiN2HzzOJgEf0Yq6xA1NgmIEEucT3re6SUkw5bF4bmqPyQBoEz%2BdlbHeBr4rOufXsa032EGxiEpnSuJNqrrhFHLX2tGyRHBRW3eAgGu%2Fjr%2Fz01WBE4uB1cOaXncjxNR9P4IQcAcQUKZIsq4isnwk4AWyWMj%2BWGo2oEOcOFWfD0ff2mN0QvL4sYI25858WQg8D24zEM%2B8R%2BIjVFgB9yfuKl8y86Cx3kW%2BS613qDsbRbbCjY%2FYBHTHOm7s0HDDwFRwo42igAizUKnwkmPpY9gF2fcnVDtnMLFfB%2FhuGiBTegpCFAsA%2Fijubi7bMA7k%2FH97RH86eN6MblrGuM7VVsfNzpl9tKx%2B4eeFiHYtRdGhTUlYskqfdYhK9NY%2B1JW4CQOaLEOZc%2Fmpc6hbaLN5DqBLF%2BYPC%2Bbc8ez26UFClEA2Bl0DiRIt2jRczr08rpryWlLuwVwrmbKnY7vOCUAySkQ8Cf7ai9DBikegbk8sjZp1KMQ9Uf3XWoKip%2B85evYVgXC0Dn1wcPq1zXrbG%2Fhzp8UifNuX0i%2FuDgpg%2FpsIwvaIBhaarWjeEsiVcTzSTGAY3qpVcxwwEX9MB0nSm%2FxWi6ULKUsw1N6jwgY6pgHtFIR5M8Q2X6NXTO7YUPdZsi2fbMI9ZjfQ7gq1CCUirpiI3QsJNhtHIdRvPC2LZ2JmZbEx0q09ws1HGwfdAjyd0fgcmCFHZMMvmgPrNoZavToQsox8r8X8WVwtxhAau03h7bwNmewzViMH031mMNQ2knTlMzbDWm4K5k79lw0m4trxm0YIju1ebBZTyc4fC1bfvCLPIvJBNfbp2wjnWm%2F8%2FFc5dr3J&X-Amz-Signature=0d4ba8ee993569bf09c9ab9cc409c38178f0c5113c2243c96cb6e5c2cad4420d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
