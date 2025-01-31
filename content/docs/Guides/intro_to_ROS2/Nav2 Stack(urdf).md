---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOZO7AG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzFWYNGBQRjvKLAex%2BWhTF2zpAWrwycvdrYZh7odxdwIhAK%2BZ66VilnXUX8BkSJ2uKXlXMSwB6lZJ0WR7%2FjMrPuDXKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKQVDhMow05GcNa40q3AMS5UdJR13IoRn%2Bwcdu%2B39UkvNkJ0s0HSp2s0Vja6QvuXHXvE8bdjVe%2BsRr4JrC1RsstaV%2BCLCGctC1Fb6y6lYyFF0oO%2B7kvo6Q%2BJSvhpH1NGPHCEpAqyyV2cjb75vj1jeU7O5y4F9mPXAFekX12NSU1qmTqo79Dt0LAkilyst5sxpDVmYLKd%2FrOzuF5a%2FMqPV38AZHbzUF4OlM7dLRJxQg5z7zO%2BLHvJTRscv61oPjGFanTN4Rp376Z%2FRgEYPkiShIGfssGzchQ8lnv%2BsrPIZ2t%2BsLsJlPfxc4EHxGuzWYVL5ZTtUCrlMtycAi3kaRaeIR29Bhg%2BcZpQj40zFuXl45Jp4z%2FA1%2BNujHtfbnuO9ADl0anqBHalResy59dQtLhr8IOTvx2c5Wp%2FIV8SIAfgHnbkL82lA6VmKNTPVm3Vb3TZZKOfUsmnSGJ4wiJTS%2F1B4%2Biui3iBqVumj7TfsS3C%2FBotk8TlHCVDsy1mF%2BouwVZYigRgilyOQsl6mzZRQCV%2BPGh0q1eJcpzM8okNCFWlvhVVKRGnY4f4S6QyjyRWBdHC%2BGNdIE0%2B4cBsNUSg8F1wOo3RIjljfpguMIhc6R6eyy7TqLzxc%2B83s9Zv4XSOceoEk%2F%2BENXAcol41bwNDC5ifS8BjqkAf%2ByeXNfnowRY%2BVBhByP%2Bi514eEsQO5YFwjvUIIV45Ci6rPhzLuDCcd5O0S87UNQBz1yISIbep5tnvTDF5T9bYTOe4MYKpmAlSzl2egKx53%2BgLfd%2B7Uz0V4ckAFIYtjI4tZfHNss4dhnOCgDTz%2F2czAPCzj7nCXpuGCy2rORKawF8CzKfVnKeDkTPJjqlgnN4Rn4CM5Nb0z6Z3qBTDvUFzxP4k%2FM&X-Amz-Signature=c7249a4d1d7208495a6b3e4b6c2edf2e9093d31c5664566de0a4c9665276a9cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOZO7AG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzFWYNGBQRjvKLAex%2BWhTF2zpAWrwycvdrYZh7odxdwIhAK%2BZ66VilnXUX8BkSJ2uKXlXMSwB6lZJ0WR7%2FjMrPuDXKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKQVDhMow05GcNa40q3AMS5UdJR13IoRn%2Bwcdu%2B39UkvNkJ0s0HSp2s0Vja6QvuXHXvE8bdjVe%2BsRr4JrC1RsstaV%2BCLCGctC1Fb6y6lYyFF0oO%2B7kvo6Q%2BJSvhpH1NGPHCEpAqyyV2cjb75vj1jeU7O5y4F9mPXAFekX12NSU1qmTqo79Dt0LAkilyst5sxpDVmYLKd%2FrOzuF5a%2FMqPV38AZHbzUF4OlM7dLRJxQg5z7zO%2BLHvJTRscv61oPjGFanTN4Rp376Z%2FRgEYPkiShIGfssGzchQ8lnv%2BsrPIZ2t%2BsLsJlPfxc4EHxGuzWYVL5ZTtUCrlMtycAi3kaRaeIR29Bhg%2BcZpQj40zFuXl45Jp4z%2FA1%2BNujHtfbnuO9ADl0anqBHalResy59dQtLhr8IOTvx2c5Wp%2FIV8SIAfgHnbkL82lA6VmKNTPVm3Vb3TZZKOfUsmnSGJ4wiJTS%2F1B4%2Biui3iBqVumj7TfsS3C%2FBotk8TlHCVDsy1mF%2BouwVZYigRgilyOQsl6mzZRQCV%2BPGh0q1eJcpzM8okNCFWlvhVVKRGnY4f4S6QyjyRWBdHC%2BGNdIE0%2B4cBsNUSg8F1wOo3RIjljfpguMIhc6R6eyy7TqLzxc%2B83s9Zv4XSOceoEk%2F%2BENXAcol41bwNDC5ifS8BjqkAf%2ByeXNfnowRY%2BVBhByP%2Bi514eEsQO5YFwjvUIIV45Ci6rPhzLuDCcd5O0S87UNQBz1yISIbep5tnvTDF5T9bYTOe4MYKpmAlSzl2egKx53%2BgLfd%2B7Uz0V4ckAFIYtjI4tZfHNss4dhnOCgDTz%2F2czAPCzj7nCXpuGCy2rORKawF8CzKfVnKeDkTPJjqlgnN4Rn4CM5Nb0z6Z3qBTDvUFzxP4k%2FM&X-Amz-Signature=aec6c95b801dc1f305e8529a8d5b4ad809bee06f19554074ce68d1447fe3fb17&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOZO7AG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzFWYNGBQRjvKLAex%2BWhTF2zpAWrwycvdrYZh7odxdwIhAK%2BZ66VilnXUX8BkSJ2uKXlXMSwB6lZJ0WR7%2FjMrPuDXKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKQVDhMow05GcNa40q3AMS5UdJR13IoRn%2Bwcdu%2B39UkvNkJ0s0HSp2s0Vja6QvuXHXvE8bdjVe%2BsRr4JrC1RsstaV%2BCLCGctC1Fb6y6lYyFF0oO%2B7kvo6Q%2BJSvhpH1NGPHCEpAqyyV2cjb75vj1jeU7O5y4F9mPXAFekX12NSU1qmTqo79Dt0LAkilyst5sxpDVmYLKd%2FrOzuF5a%2FMqPV38AZHbzUF4OlM7dLRJxQg5z7zO%2BLHvJTRscv61oPjGFanTN4Rp376Z%2FRgEYPkiShIGfssGzchQ8lnv%2BsrPIZ2t%2BsLsJlPfxc4EHxGuzWYVL5ZTtUCrlMtycAi3kaRaeIR29Bhg%2BcZpQj40zFuXl45Jp4z%2FA1%2BNujHtfbnuO9ADl0anqBHalResy59dQtLhr8IOTvx2c5Wp%2FIV8SIAfgHnbkL82lA6VmKNTPVm3Vb3TZZKOfUsmnSGJ4wiJTS%2F1B4%2Biui3iBqVumj7TfsS3C%2FBotk8TlHCVDsy1mF%2BouwVZYigRgilyOQsl6mzZRQCV%2BPGh0q1eJcpzM8okNCFWlvhVVKRGnY4f4S6QyjyRWBdHC%2BGNdIE0%2B4cBsNUSg8F1wOo3RIjljfpguMIhc6R6eyy7TqLzxc%2B83s9Zv4XSOceoEk%2F%2BENXAcol41bwNDC5ifS8BjqkAf%2ByeXNfnowRY%2BVBhByP%2Bi514eEsQO5YFwjvUIIV45Ci6rPhzLuDCcd5O0S87UNQBz1yISIbep5tnvTDF5T9bYTOe4MYKpmAlSzl2egKx53%2BgLfd%2B7Uz0V4ckAFIYtjI4tZfHNss4dhnOCgDTz%2F2czAPCzj7nCXpuGCy2rORKawF8CzKfVnKeDkTPJjqlgnN4Rn4CM5Nb0z6Z3qBTDvUFzxP4k%2FM&X-Amz-Signature=fac8bf0730904b5f251d7e6a9e4f6daaf24aff623e819a1f12558ef23edcbf83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOZO7AG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzFWYNGBQRjvKLAex%2BWhTF2zpAWrwycvdrYZh7odxdwIhAK%2BZ66VilnXUX8BkSJ2uKXlXMSwB6lZJ0WR7%2FjMrPuDXKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKQVDhMow05GcNa40q3AMS5UdJR13IoRn%2Bwcdu%2B39UkvNkJ0s0HSp2s0Vja6QvuXHXvE8bdjVe%2BsRr4JrC1RsstaV%2BCLCGctC1Fb6y6lYyFF0oO%2B7kvo6Q%2BJSvhpH1NGPHCEpAqyyV2cjb75vj1jeU7O5y4F9mPXAFekX12NSU1qmTqo79Dt0LAkilyst5sxpDVmYLKd%2FrOzuF5a%2FMqPV38AZHbzUF4OlM7dLRJxQg5z7zO%2BLHvJTRscv61oPjGFanTN4Rp376Z%2FRgEYPkiShIGfssGzchQ8lnv%2BsrPIZ2t%2BsLsJlPfxc4EHxGuzWYVL5ZTtUCrlMtycAi3kaRaeIR29Bhg%2BcZpQj40zFuXl45Jp4z%2FA1%2BNujHtfbnuO9ADl0anqBHalResy59dQtLhr8IOTvx2c5Wp%2FIV8SIAfgHnbkL82lA6VmKNTPVm3Vb3TZZKOfUsmnSGJ4wiJTS%2F1B4%2Biui3iBqVumj7TfsS3C%2FBotk8TlHCVDsy1mF%2BouwVZYigRgilyOQsl6mzZRQCV%2BPGh0q1eJcpzM8okNCFWlvhVVKRGnY4f4S6QyjyRWBdHC%2BGNdIE0%2B4cBsNUSg8F1wOo3RIjljfpguMIhc6R6eyy7TqLzxc%2B83s9Zv4XSOceoEk%2F%2BENXAcol41bwNDC5ifS8BjqkAf%2ByeXNfnowRY%2BVBhByP%2Bi514eEsQO5YFwjvUIIV45Ci6rPhzLuDCcd5O0S87UNQBz1yISIbep5tnvTDF5T9bYTOe4MYKpmAlSzl2egKx53%2BgLfd%2B7Uz0V4ckAFIYtjI4tZfHNss4dhnOCgDTz%2F2czAPCzj7nCXpuGCy2rORKawF8CzKfVnKeDkTPJjqlgnN4Rn4CM5Nb0z6Z3qBTDvUFzxP4k%2FM&X-Amz-Signature=4a19a1491c4fcd8e1b7e282260c83ccd1b550983b4a03182715ececfb28e2385&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOZO7AG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzFWYNGBQRjvKLAex%2BWhTF2zpAWrwycvdrYZh7odxdwIhAK%2BZ66VilnXUX8BkSJ2uKXlXMSwB6lZJ0WR7%2FjMrPuDXKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKQVDhMow05GcNa40q3AMS5UdJR13IoRn%2Bwcdu%2B39UkvNkJ0s0HSp2s0Vja6QvuXHXvE8bdjVe%2BsRr4JrC1RsstaV%2BCLCGctC1Fb6y6lYyFF0oO%2B7kvo6Q%2BJSvhpH1NGPHCEpAqyyV2cjb75vj1jeU7O5y4F9mPXAFekX12NSU1qmTqo79Dt0LAkilyst5sxpDVmYLKd%2FrOzuF5a%2FMqPV38AZHbzUF4OlM7dLRJxQg5z7zO%2BLHvJTRscv61oPjGFanTN4Rp376Z%2FRgEYPkiShIGfssGzchQ8lnv%2BsrPIZ2t%2BsLsJlPfxc4EHxGuzWYVL5ZTtUCrlMtycAi3kaRaeIR29Bhg%2BcZpQj40zFuXl45Jp4z%2FA1%2BNujHtfbnuO9ADl0anqBHalResy59dQtLhr8IOTvx2c5Wp%2FIV8SIAfgHnbkL82lA6VmKNTPVm3Vb3TZZKOfUsmnSGJ4wiJTS%2F1B4%2Biui3iBqVumj7TfsS3C%2FBotk8TlHCVDsy1mF%2BouwVZYigRgilyOQsl6mzZRQCV%2BPGh0q1eJcpzM8okNCFWlvhVVKRGnY4f4S6QyjyRWBdHC%2BGNdIE0%2B4cBsNUSg8F1wOo3RIjljfpguMIhc6R6eyy7TqLzxc%2B83s9Zv4XSOceoEk%2F%2BENXAcol41bwNDC5ifS8BjqkAf%2ByeXNfnowRY%2BVBhByP%2Bi514eEsQO5YFwjvUIIV45Ci6rPhzLuDCcd5O0S87UNQBz1yISIbep5tnvTDF5T9bYTOe4MYKpmAlSzl2egKx53%2BgLfd%2B7Uz0V4ckAFIYtjI4tZfHNss4dhnOCgDTz%2F2czAPCzj7nCXpuGCy2rORKawF8CzKfVnKeDkTPJjqlgnN4Rn4CM5Nb0z6Z3qBTDvUFzxP4k%2FM&X-Amz-Signature=c2978afc31778f554ac32ee99270e3890d4e8141ad9e762899dbcf6cfdfc5af4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFOZO7AG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfzFWYNGBQRjvKLAex%2BWhTF2zpAWrwycvdrYZh7odxdwIhAK%2BZ66VilnXUX8BkSJ2uKXlXMSwB6lZJ0WR7%2FjMrPuDXKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKQVDhMow05GcNa40q3AMS5UdJR13IoRn%2Bwcdu%2B39UkvNkJ0s0HSp2s0Vja6QvuXHXvE8bdjVe%2BsRr4JrC1RsstaV%2BCLCGctC1Fb6y6lYyFF0oO%2B7kvo6Q%2BJSvhpH1NGPHCEpAqyyV2cjb75vj1jeU7O5y4F9mPXAFekX12NSU1qmTqo79Dt0LAkilyst5sxpDVmYLKd%2FrOzuF5a%2FMqPV38AZHbzUF4OlM7dLRJxQg5z7zO%2BLHvJTRscv61oPjGFanTN4Rp376Z%2FRgEYPkiShIGfssGzchQ8lnv%2BsrPIZ2t%2BsLsJlPfxc4EHxGuzWYVL5ZTtUCrlMtycAi3kaRaeIR29Bhg%2BcZpQj40zFuXl45Jp4z%2FA1%2BNujHtfbnuO9ADl0anqBHalResy59dQtLhr8IOTvx2c5Wp%2FIV8SIAfgHnbkL82lA6VmKNTPVm3Vb3TZZKOfUsmnSGJ4wiJTS%2F1B4%2Biui3iBqVumj7TfsS3C%2FBotk8TlHCVDsy1mF%2BouwVZYigRgilyOQsl6mzZRQCV%2BPGh0q1eJcpzM8okNCFWlvhVVKRGnY4f4S6QyjyRWBdHC%2BGNdIE0%2B4cBsNUSg8F1wOo3RIjljfpguMIhc6R6eyy7TqLzxc%2B83s9Zv4XSOceoEk%2F%2BENXAcol41bwNDC5ifS8BjqkAf%2ByeXNfnowRY%2BVBhByP%2Bi514eEsQO5YFwjvUIIV45Ci6rPhzLuDCcd5O0S87UNQBz1yISIbep5tnvTDF5T9bYTOe4MYKpmAlSzl2egKx53%2BgLfd%2B7Uz0V4ckAFIYtjI4tZfHNss4dhnOCgDTz%2F2czAPCzj7nCXpuGCy2rORKawF8CzKfVnKeDkTPJjqlgnN4Rn4CM5Nb0z6Z3qBTDvUFzxP4k%2FM&X-Amz-Signature=3b43efc94cfbc0846bc1a1fc1f3e67bd2d5f6f1fdc702818cec7da2e01ea909a&X-Amz-SignedHeaders=host&x-id=GetObject)
