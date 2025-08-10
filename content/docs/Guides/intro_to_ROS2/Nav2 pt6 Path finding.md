---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=3859a8df522eaf00246a4ac10fbdb88e353b8678bc22d5f8ac3db4cb5604f536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=4e31c65bdfa9f360d85b356ddb9eb6c17f86f7445ebf60198b63dd74abb8f70b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=e9ac54ee9baf9e2c30b3a1fa077e9a48b5161f17c52261f36ca1b31ff795c29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=e6632dc193c7a256363b1b04e5ec68fbac7341d0355b2b5e584445f1e5b9daed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=999fdbd3d99c03b423b9eddfb951fbeeb8ad6eeec8fe5106319f6c801b238b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=cf041ce5e5da01bcf1dbdfecea13969dd17aab1c6a372dd95a9adc9ca6ad0f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=0854c451293d4c7ca716c5411a80241aaac9324adfb3abf22fb05382b967b46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=75576a6b11c578468ec65cae2196156ea07edef2d442aeef403a29d756879f9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=95a221459937a96ab471b3ab2209f337b28593267de1db9d13d507783a12e3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=47b374492fdb2aa139c9dc8e07e9ab138c4f307623ebff1415a9c4a97b697ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=89a2eb3f4abaa6e3243fff8ef2475e76b775519d871fc2042ddb52463e478688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=09b8dd7ad5780b7586ce79de746636ce95f8346d9648c6ce815a10f73e2d13f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZEFU6TJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzhYsIucCQ7kAmb05XVkzgyb%2BZ4C3NTfk2TGbX%2BZdlYQIgZsXRKinYwSY%2BhMXC1iahc3uY6v5x2FKnUvmtVM11WoIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNAk2Qzoehjr4WajASrcAyQfGZtfApi8cuTDoi0KiXomf0UVbuODkJUGn641x6FFlXdKnnqDQX6NE1cHEHQONOcvPgaAGLDMtOME3Bn77fIqkyFFEuWSm%2FKhEs0j8kMKCX6S1GvsKw8WdmQoN%2FFxqDOZoLLT5YiWITRkCsXh%2BhZkaWWHsoQD7m3D%2FtAbi1VjsuBEaWINT80nCizQIQdoCJBZMZp1uudjP02yjYLpF18JdPPjVhL16fBN6GZw3pzyYyZEGmnaoHthpfjIlpd1wivXeEtCjJxS0M%2Bk%2FuDOsoGHxjq45SapoYNmWZNeRpiARmdPw1ZPssHYNWltOCtqpqvFob8Uh6ug8uUiEOPo1H%2B1SZizSttL0gYjDjx%2FjFu%2Bnpfc81HSaPLFbSVyAdPO5dvrcw41lpBq3tjxGC4oy5hSDXFaq8vCLDJPyIuvSA6Nd1r15eLdBjLCXz3w6hcH%2B%2BJ66KQCg9Qs%2FEKnkDjXXDuERAp7gQmisl8sNG%2BjIpo0rco%2Bc41e6rKIU7i89DOObWnwhU8MUMPzo79uqybOul%2BEjYT8iIWIuFBvqAseQfKILGfXbtkqQBjkc%2FSIoHQSB%2FZCd%2BhlFJMlgWpU5bJUa3JdLl1ERc7mFJhScIB%2FZnTqre6J1d5PWuJYB5fkMOO%2F4sQGOqUBAa3yVCYXxCe%2Fn01ekraKQxCEyGCohRvp%2BjQ1AenRKqJHCSVCXWFhExfj01V5nsECA7CDydnEhCv2mCCebFYxutacgEp%2BDJmfSDRn0yWSj%2F3AgTyhmBqrKzXg7jSoGLjy92dKohya2T5GI6cVd5goEAEz5yT%2FiNG1vvnHjJeH3di3CG3ozDy3aM7KKiktmL98FBI7mSc1j153l0cFsEeygQNdz5uq&X-Amz-Signature=65badb0645606b87ee4219e5fcba5e7cf37c7aaf100076be40172323ae8c7a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
                    'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
