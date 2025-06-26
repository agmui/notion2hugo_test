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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT7OTPW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCqtETnno%2FrCdTW3WK8R%2FsiDBs3EghyAlDggwAXMV2mSwIhAIaYQwsVIwWUW3lXcabEH%2BBlXMf5%2FnsKHNsR9Vid6ExmKv8DCGMQABoMNjM3NDIzMTgzODA1IgzT3iTVh77ruvxIo%2BUq3AMSA9%2FTXDG4glGxuxZmVeW73sjD6dD13494bIYhYZrGiz111Tl5aQtxjoiu6H%2B%2BBTpg4nVCMIv38s9q3qurfJHo%2B7dwliXXAWXhLIjhBhzkKM9ZBOqijiw59ou6%2BBSrh1V0QpKfsDWmCI0kYvUDVHRV2Y0luCRlRv7jjmGNz3GLbH6%2B4xp%2BQ2ycrD%2FyaJjIP%2BrazZytAaQOPr7IwYK4YP1kbCZ7NP2YjQf2WrsHNt9pfP1d2%2F7oOnXEFtgVktvOBo3oYDr4KVKhskOgoAnQXsrSoakbm4%2FQ%2FdwhIZAygfkcsB42fDKsBcFLKRym%2FHs6ZT5FaX0yhFe85k8DbfNTzrqgJTAAS6yp3jNTRTNYotPb%2Bcfy%2F280Mi%2BeJnS56PRnzxmMJWTFl2OpU37RRXZ%2BFs9RGLAbktP0prZeLFWj81JbrFV%2BePGIRGiDmiMVXEfiX2ifWtMDcKmxvRO4hNcFMT6u8I8uw73CGT6iBPp42KR%2F0c%2F4aHsDlqSYrLzK%2F%2FhDLGSDQbPdSDL1BubarnJna%2FgQPEso9JVGZNVljbsD2iABEXcNPIksdEZgI0ZblpG6qi0%2BIUAVe3J7RRNAAZUzctgUVUTq7Newe23YdAF6QBKv80ySJJzT43KYcjRZnTD5g%2FbCBjqkAXEeVZLggyCSku%2Fw0rhHTjz0crCi6ICEykHVEoTbOz3AtAgy3GZdNmWwB6EDzR8kXAgKjXyFCnqlvazR7%2Brp4mziMmiqn5I2ocTTXBXeiEcCps23DgUKAOxKOqJlcB10Pno%2B0fVmpS9N%2BFTb19zbRguLbyemjHBjplAzX4Um%2FMifVyfmivc2TDW8S5bOxibs2s6vW8xPBrNg1btqWc00WCGWLTf7&X-Amz-Signature=5492a2c7c9ee982eda695c3331b5fba2d91959a8d28e009c089ba2926e80e386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT7OTPW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCqtETnno%2FrCdTW3WK8R%2FsiDBs3EghyAlDggwAXMV2mSwIhAIaYQwsVIwWUW3lXcabEH%2BBlXMf5%2FnsKHNsR9Vid6ExmKv8DCGMQABoMNjM3NDIzMTgzODA1IgzT3iTVh77ruvxIo%2BUq3AMSA9%2FTXDG4glGxuxZmVeW73sjD6dD13494bIYhYZrGiz111Tl5aQtxjoiu6H%2B%2BBTpg4nVCMIv38s9q3qurfJHo%2B7dwliXXAWXhLIjhBhzkKM9ZBOqijiw59ou6%2BBSrh1V0QpKfsDWmCI0kYvUDVHRV2Y0luCRlRv7jjmGNz3GLbH6%2B4xp%2BQ2ycrD%2FyaJjIP%2BrazZytAaQOPr7IwYK4YP1kbCZ7NP2YjQf2WrsHNt9pfP1d2%2F7oOnXEFtgVktvOBo3oYDr4KVKhskOgoAnQXsrSoakbm4%2FQ%2FdwhIZAygfkcsB42fDKsBcFLKRym%2FHs6ZT5FaX0yhFe85k8DbfNTzrqgJTAAS6yp3jNTRTNYotPb%2Bcfy%2F280Mi%2BeJnS56PRnzxmMJWTFl2OpU37RRXZ%2BFs9RGLAbktP0prZeLFWj81JbrFV%2BePGIRGiDmiMVXEfiX2ifWtMDcKmxvRO4hNcFMT6u8I8uw73CGT6iBPp42KR%2F0c%2F4aHsDlqSYrLzK%2F%2FhDLGSDQbPdSDL1BubarnJna%2FgQPEso9JVGZNVljbsD2iABEXcNPIksdEZgI0ZblpG6qi0%2BIUAVe3J7RRNAAZUzctgUVUTq7Newe23YdAF6QBKv80ySJJzT43KYcjRZnTD5g%2FbCBjqkAXEeVZLggyCSku%2Fw0rhHTjz0crCi6ICEykHVEoTbOz3AtAgy3GZdNmWwB6EDzR8kXAgKjXyFCnqlvazR7%2Brp4mziMmiqn5I2ocTTXBXeiEcCps23DgUKAOxKOqJlcB10Pno%2B0fVmpS9N%2BFTb19zbRguLbyemjHBjplAzX4Um%2FMifVyfmivc2TDW8S5bOxibs2s6vW8xPBrNg1btqWc00WCGWLTf7&X-Amz-Signature=f2d2c2aafad9aee6ae8dd7e52f9912db374c3265b1241112dfb29b5cbc4401e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT7OTPW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCqtETnno%2FrCdTW3WK8R%2FsiDBs3EghyAlDggwAXMV2mSwIhAIaYQwsVIwWUW3lXcabEH%2BBlXMf5%2FnsKHNsR9Vid6ExmKv8DCGMQABoMNjM3NDIzMTgzODA1IgzT3iTVh77ruvxIo%2BUq3AMSA9%2FTXDG4glGxuxZmVeW73sjD6dD13494bIYhYZrGiz111Tl5aQtxjoiu6H%2B%2BBTpg4nVCMIv38s9q3qurfJHo%2B7dwliXXAWXhLIjhBhzkKM9ZBOqijiw59ou6%2BBSrh1V0QpKfsDWmCI0kYvUDVHRV2Y0luCRlRv7jjmGNz3GLbH6%2B4xp%2BQ2ycrD%2FyaJjIP%2BrazZytAaQOPr7IwYK4YP1kbCZ7NP2YjQf2WrsHNt9pfP1d2%2F7oOnXEFtgVktvOBo3oYDr4KVKhskOgoAnQXsrSoakbm4%2FQ%2FdwhIZAygfkcsB42fDKsBcFLKRym%2FHs6ZT5FaX0yhFe85k8DbfNTzrqgJTAAS6yp3jNTRTNYotPb%2Bcfy%2F280Mi%2BeJnS56PRnzxmMJWTFl2OpU37RRXZ%2BFs9RGLAbktP0prZeLFWj81JbrFV%2BePGIRGiDmiMVXEfiX2ifWtMDcKmxvRO4hNcFMT6u8I8uw73CGT6iBPp42KR%2F0c%2F4aHsDlqSYrLzK%2F%2FhDLGSDQbPdSDL1BubarnJna%2FgQPEso9JVGZNVljbsD2iABEXcNPIksdEZgI0ZblpG6qi0%2BIUAVe3J7RRNAAZUzctgUVUTq7Newe23YdAF6QBKv80ySJJzT43KYcjRZnTD5g%2FbCBjqkAXEeVZLggyCSku%2Fw0rhHTjz0crCi6ICEykHVEoTbOz3AtAgy3GZdNmWwB6EDzR8kXAgKjXyFCnqlvazR7%2Brp4mziMmiqn5I2ocTTXBXeiEcCps23DgUKAOxKOqJlcB10Pno%2B0fVmpS9N%2BFTb19zbRguLbyemjHBjplAzX4Um%2FMifVyfmivc2TDW8S5bOxibs2s6vW8xPBrNg1btqWc00WCGWLTf7&X-Amz-Signature=9bb206b513a7ee9b8e1308f722aff2781d94191e9c28803beb95ca6017a78e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT7OTPW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCqtETnno%2FrCdTW3WK8R%2FsiDBs3EghyAlDggwAXMV2mSwIhAIaYQwsVIwWUW3lXcabEH%2BBlXMf5%2FnsKHNsR9Vid6ExmKv8DCGMQABoMNjM3NDIzMTgzODA1IgzT3iTVh77ruvxIo%2BUq3AMSA9%2FTXDG4glGxuxZmVeW73sjD6dD13494bIYhYZrGiz111Tl5aQtxjoiu6H%2B%2BBTpg4nVCMIv38s9q3qurfJHo%2B7dwliXXAWXhLIjhBhzkKM9ZBOqijiw59ou6%2BBSrh1V0QpKfsDWmCI0kYvUDVHRV2Y0luCRlRv7jjmGNz3GLbH6%2B4xp%2BQ2ycrD%2FyaJjIP%2BrazZytAaQOPr7IwYK4YP1kbCZ7NP2YjQf2WrsHNt9pfP1d2%2F7oOnXEFtgVktvOBo3oYDr4KVKhskOgoAnQXsrSoakbm4%2FQ%2FdwhIZAygfkcsB42fDKsBcFLKRym%2FHs6ZT5FaX0yhFe85k8DbfNTzrqgJTAAS6yp3jNTRTNYotPb%2Bcfy%2F280Mi%2BeJnS56PRnzxmMJWTFl2OpU37RRXZ%2BFs9RGLAbktP0prZeLFWj81JbrFV%2BePGIRGiDmiMVXEfiX2ifWtMDcKmxvRO4hNcFMT6u8I8uw73CGT6iBPp42KR%2F0c%2F4aHsDlqSYrLzK%2F%2FhDLGSDQbPdSDL1BubarnJna%2FgQPEso9JVGZNVljbsD2iABEXcNPIksdEZgI0ZblpG6qi0%2BIUAVe3J7RRNAAZUzctgUVUTq7Newe23YdAF6QBKv80ySJJzT43KYcjRZnTD5g%2FbCBjqkAXEeVZLggyCSku%2Fw0rhHTjz0crCi6ICEykHVEoTbOz3AtAgy3GZdNmWwB6EDzR8kXAgKjXyFCnqlvazR7%2Brp4mziMmiqn5I2ocTTXBXeiEcCps23DgUKAOxKOqJlcB10Pno%2B0fVmpS9N%2BFTb19zbRguLbyemjHBjplAzX4Um%2FMifVyfmivc2TDW8S5bOxibs2s6vW8xPBrNg1btqWc00WCGWLTf7&X-Amz-Signature=43f60d2b930c9c13ca425e79db355e6f4ba0d254240f6f9ac20dab31f83f0cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT7OTPW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCqtETnno%2FrCdTW3WK8R%2FsiDBs3EghyAlDggwAXMV2mSwIhAIaYQwsVIwWUW3lXcabEH%2BBlXMf5%2FnsKHNsR9Vid6ExmKv8DCGMQABoMNjM3NDIzMTgzODA1IgzT3iTVh77ruvxIo%2BUq3AMSA9%2FTXDG4glGxuxZmVeW73sjD6dD13494bIYhYZrGiz111Tl5aQtxjoiu6H%2B%2BBTpg4nVCMIv38s9q3qurfJHo%2B7dwliXXAWXhLIjhBhzkKM9ZBOqijiw59ou6%2BBSrh1V0QpKfsDWmCI0kYvUDVHRV2Y0luCRlRv7jjmGNz3GLbH6%2B4xp%2BQ2ycrD%2FyaJjIP%2BrazZytAaQOPr7IwYK4YP1kbCZ7NP2YjQf2WrsHNt9pfP1d2%2F7oOnXEFtgVktvOBo3oYDr4KVKhskOgoAnQXsrSoakbm4%2FQ%2FdwhIZAygfkcsB42fDKsBcFLKRym%2FHs6ZT5FaX0yhFe85k8DbfNTzrqgJTAAS6yp3jNTRTNYotPb%2Bcfy%2F280Mi%2BeJnS56PRnzxmMJWTFl2OpU37RRXZ%2BFs9RGLAbktP0prZeLFWj81JbrFV%2BePGIRGiDmiMVXEfiX2ifWtMDcKmxvRO4hNcFMT6u8I8uw73CGT6iBPp42KR%2F0c%2F4aHsDlqSYrLzK%2F%2FhDLGSDQbPdSDL1BubarnJna%2FgQPEso9JVGZNVljbsD2iABEXcNPIksdEZgI0ZblpG6qi0%2BIUAVe3J7RRNAAZUzctgUVUTq7Newe23YdAF6QBKv80ySJJzT43KYcjRZnTD5g%2FbCBjqkAXEeVZLggyCSku%2Fw0rhHTjz0crCi6ICEykHVEoTbOz3AtAgy3GZdNmWwB6EDzR8kXAgKjXyFCnqlvazR7%2Brp4mziMmiqn5I2ocTTXBXeiEcCps23DgUKAOxKOqJlcB10Pno%2B0fVmpS9N%2BFTb19zbRguLbyemjHBjplAzX4Um%2FMifVyfmivc2TDW8S5bOxibs2s6vW8xPBrNg1btqWc00WCGWLTf7&X-Amz-Signature=06bfc7823ee9da88995be0e2e3174389b31c5270d5d755a43c6ca8eec9b426f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKT7OTPW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T190719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCqtETnno%2FrCdTW3WK8R%2FsiDBs3EghyAlDggwAXMV2mSwIhAIaYQwsVIwWUW3lXcabEH%2BBlXMf5%2FnsKHNsR9Vid6ExmKv8DCGMQABoMNjM3NDIzMTgzODA1IgzT3iTVh77ruvxIo%2BUq3AMSA9%2FTXDG4glGxuxZmVeW73sjD6dD13494bIYhYZrGiz111Tl5aQtxjoiu6H%2B%2BBTpg4nVCMIv38s9q3qurfJHo%2B7dwliXXAWXhLIjhBhzkKM9ZBOqijiw59ou6%2BBSrh1V0QpKfsDWmCI0kYvUDVHRV2Y0luCRlRv7jjmGNz3GLbH6%2B4xp%2BQ2ycrD%2FyaJjIP%2BrazZytAaQOPr7IwYK4YP1kbCZ7NP2YjQf2WrsHNt9pfP1d2%2F7oOnXEFtgVktvOBo3oYDr4KVKhskOgoAnQXsrSoakbm4%2FQ%2FdwhIZAygfkcsB42fDKsBcFLKRym%2FHs6ZT5FaX0yhFe85k8DbfNTzrqgJTAAS6yp3jNTRTNYotPb%2Bcfy%2F280Mi%2BeJnS56PRnzxmMJWTFl2OpU37RRXZ%2BFs9RGLAbktP0prZeLFWj81JbrFV%2BePGIRGiDmiMVXEfiX2ifWtMDcKmxvRO4hNcFMT6u8I8uw73CGT6iBPp42KR%2F0c%2F4aHsDlqSYrLzK%2F%2FhDLGSDQbPdSDL1BubarnJna%2FgQPEso9JVGZNVljbsD2iABEXcNPIksdEZgI0ZblpG6qi0%2BIUAVe3J7RRNAAZUzctgUVUTq7Newe23YdAF6QBKv80ySJJzT43KYcjRZnTD5g%2FbCBjqkAXEeVZLggyCSku%2Fw0rhHTjz0crCi6ICEykHVEoTbOz3AtAgy3GZdNmWwB6EDzR8kXAgKjXyFCnqlvazR7%2Brp4mziMmiqn5I2ocTTXBXeiEcCps23DgUKAOxKOqJlcB10Pno%2B0fVmpS9N%2BFTb19zbRguLbyemjHBjplAzX4Um%2FMifVyfmivc2TDW8S5bOxibs2s6vW8xPBrNg1btqWc00WCGWLTf7&X-Amz-Signature=fc7edc2597ffecf5cf922ae3911c9d855e2bbb1c4886989083535c27b69d5643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
