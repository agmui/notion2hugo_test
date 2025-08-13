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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=8dadca24c0136646b36589c6f1d26e9742f46ae3353229a9694edf91eae9556f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=f3665e49231611346813e24e47b7c9297eb64a276196d9ffb412a147e852ff12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=a510d48f9b8ae5bf8c2f9899714ee67212c722282209a8f5a0fe17d6aca4aae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=5e84edc63d26ee24dc0ee508b73bec8fa75c50a1b7a53a33bd3bf4b592abd5b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=076bc027da4a709eb78f73ad6256d3f46f8e31be703af9ee4e2f369e2779c1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=d65efadcd31200bfdedbb1cbb7d9c0163f37377beb079d406da417fd34fa20eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=586d467ac5ab215e981670c5d97915b3bff2078b39c47ee833b09f0c45a1b8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=cab674bcc546d6e47c8e178ae8b70a0c20a003b9b0c5049a1045f2701eafbfe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=a2153fc655bda01d19b0d42957a00e6ac95a7cb349ba13e790a35050d12c3b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=f2ebc064affc2a208f063f1c4daada9582e1fe1f46ca727161dcd2bff1d4c533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=9ac5fd1b9dec344a27e59f2ead2041fa58cc71f46554d8c09b6f512734e26cea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=728efbb41cbc1a9b02bda886b4f3d9a39468d668fbb81c87c3786edc171f2cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEUFJVI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHo4qNG51PprJ5AXyn%2B9XDkokcv8u%2BEn3ZXWyGEPx5J%2BAiEAxnwHotxIJvLGwrwSWjPgVtWdOjMeLmcgk1yzFY0J%2BvYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDFjHEkKgZbsDn20R0CrcAwi%2BGJrSwovqMjlsmKV8TMRQMm7FzfEO9268ic6jzrmUTqSSip40iISg4CPvY3DfaIfQulSQuG8l6Ko4c8Si67xk1%2BwCwP9sbbf6bA1FH%2BI9T2hB26KGvMxqr6mhiPxHVklVbUBeWhLPO9u6ZOenyhZvaNUbnfAt3FZAatmp%2FLnVnFhfY8D6hgygmJAENrLafpExt63gr%2FCaWLObLWc6d5XtJCBWH9XtmYn%2BCntlBAUkvu6oSi4bJmo1wFth8OTLoD%2BPpv9xM5HanlA8z6WjVnP%2BpzhWhUha%2FVS8mYVVjvLR0fQ8QXy2gsdMNIEm%2F91iu1MnYGPV%2FOKjMyic6Sz57KLu4xEy8UblbYnQxbGSmrYCFKoNk5MJHJLynNcPfGLjEOi7b1BCKtGXT4elKlBbT%2BmgXSdRvTBSArEixmlj6QtJYK8Jx3e1HcsBo0%2BMyHzUyIYVm%2BC8PzjKtqhgTsvH1jUnLSbpqUQIb367VdyUcLoY%2FqgjvyuYvKn4QhD1FAtI5%2FjAWsueNCRJE%2BmpcJkvbGr16vqYqyZMFG1e8QbGwJw7GzGi2yEXYWB8cEqEoqqrtGCrGQ%2BzdRcuvRCajOIingN5lIPZC2JWC%2BzqfrWOCu76IZKNhsfUKqPYwHyVMNGf8cQGOqUBikT%2FHT966naFvuU4blrR4VP7VvuaR6NkXe5jgD9TqkOEaxVkvoB4f8vHMRfaGtDpGAtPHVBtoh44KvobxAqReELvhgaZzPaY1ATYSThcdgJH8YLXlmJ9KbPHHMEpa5B2IRaBPQNqDsrjF4TOwOoIKBA0vdHYJo6wHUGSwEwi%2FzAZyeZ2boh1tjQM1DlVbD3Le4YziFLjV8hYgyB3lJS%2FzPp1O8Ca&X-Amz-Signature=d05da820a5f1910adc44d296215a622f27fd42543100eda29c1af3b14adef67c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
