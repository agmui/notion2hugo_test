---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=cb5864d491c91e97a80b6c4f418affeb9cfe5e0026ccb434cb7455b565567c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=92cff1100eebfd73a676520c5a7e8062dcde3e1ade6a17fc4216942a293230f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=466359b7cabf1c3e26bb693b14800ad34686e9eec51d4a72b36f8111e76cb251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=50104b163e53ec8d8a82ae793e149f16310c546acf1f20d0d0a622aced0be8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=54df5cda49a9f199cfa848c54fa5c50c9ee0761e22d19694d6677d598db9ed91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=148fc1b51f91a0f306afe3255cf98b4c9a1aca055e855c91de9ec04dde16c9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=054dec9b681660393a1211107ce23c8fcc42bb3fad144a860c5f2dd8a1d3e84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=9f10c0046ae285e0969b5d32cafb2904c2b01fbb2db6283803538b8824ca02b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=feb3fb7423ba6ea25c42bec14b999a77dfbb195f3de19ae4fac393cc89c30cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=929e6de09ecff2acfce18f9a691c682c715c812ba49bb4d9d846b594c8fd3004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=0acdfee69b4df23443049c64bd9eff867c1b1f56ff13e6839b92ce161c3662cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=4541f8322adedf889ecd1eadd0b6eb2dcddcda5eee5bc6d15c47676e1d995eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQ2CDIK%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD%2Bdc79gen3JdEcDmvlGlBJ73phnKZp0TnanoUFoseTvgIgZsoiUn60cH5%2FV8hQAvxVaaHT%2FZJceOTyPYqBc5Ll8HEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJntF95HybWmQ0qGdircA%2BiBymv2D46%2BwvFyxXNOBif5wQGVrTU9%2BZUYy1%2FiY4gr3QpWWIdXS6XKXGVGViotktpymt763tcYkc7gcKBhP95nk4E7h%2BAHYA9BleSHP9OfdSU0U%2BAcDT3paFIZUy%2FciKgCKOqN%2Fr2aB8cz3R%2FfX4LhdCGxCNEQloY%2F6h1ULfTCltYPN1mKnlvLw2nwmnA%2BA7YrVo6cuwpSsvcF0TtCpJ83p%2B35p1gprp%2FY8u1Se0Npu5AmpVCLUEMSHYVc1ekw0vBXxxi4Y7BFf2KxeXcsbsCZjMMWDy57ni2oF1cospDNOI%2BaiuST306olj%2BPoQKmNN6OxNEm4ao9KKYpBXq6Ymp3fstwX7qXobMStx3YsrxBklLxQFv%2BAikSsjix%2BfNYvHxLi%2ByGp8dj4l7hPKGCB9LkOZCSvjtA3kAfs2HidmbEjG7MwkNPthgJ5qEIQvhGC5vozULOb8Mf6GeqYYShfUgMhyxJmneteIqsLQFJTaV%2BQE%2B670go6NhB0WD%2FMCOMu71q1NzHLXPrLpm1UsGvdHT3owLyJjtoBz6ZWbAEuUcMBX8tfiiosubKVAWdt4otT4MUsnzI%2FTjWXbLtek0wnBltvgpMsh4rqvJbS9MRWA5llf%2FDoj1F4newzGpQMNPp580GOqUBnfoblJGJf5t1fdsrOkhHu2l%2BsVVIjvmbapJOVrCaIiyUDk3JAfrWoc93zWDn9APvo3h6ZqlczjPC7c497KrEQ1rpSrVxXeOmrDJF%2ByxYTfK842gb%2F%2BX1ZN9oky8jTfd1EgLPJzPsOua8JDU7FsORqvUH%2BupC%2Fx54kkxW5FWF8a6SsxLfUakj%2B2IvN1qdSEouh9PvK0PpKA6QKAFzuubKXokA74dc&X-Amz-Signature=f3aac8c72ead10097818a0cff3d86321518be8ec1765ef7facce61bf06dc6c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
