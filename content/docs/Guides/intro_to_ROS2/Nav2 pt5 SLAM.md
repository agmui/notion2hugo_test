---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=c15419ba5b8544890fcfa717df46c1eb99a80b8d55bdd837a6802d8dd8cb8ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=ccea2f57eb937b7b29a4bb38440ccef64d868f89b7e183a1c1d845fd7dbaf666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=5349c4e91ab4d713708a372ba9aafb8a2495edec741a8a2bb10df009a5e8044e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=407c2f36f4426927547e01f5cfb22740aec71e74f9106aebc5ca8f3acd505c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=4310f96910a2a2197f41c3c44daa5977486f4a03172816660dc5ff9c075c60f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=afc4ec612a914af1a16dd54ba5caa4cac986d8d6a87a04511d952d8f4e40fe54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=e8e1e996c2e4619521614427be6270c90becfdb1455f5066ad96f1167fe60475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=99012ef5d5a97e00d220e965eed7cc7fc9f19ee6b9aef8a082efa859ab175106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=b56f6e808e6001192b8598c81697656be3f1e6adf98a30c1b08e1704f1071794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=689f19ef34973d811a47a450de23cd2ac4a1c46b183d0fdf07e22c2a6057940b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=e608912b2b90528e1ad4ccc811d6e391526eb0cb6b99ab88af43ae02f00ef4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=87b055cb40ec53b0fc7fe60c0a5b1fbde92e47444d6c30fbba1d8c1145a6842e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=650084f16f5122522488b0564bf0ee77d5b72a90ae89fcde8d513a830a19d7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DXS3RG%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDCdge5uZioydY04XyQcY5Y3qGUbPJtREWvqcQjyLZzrAIgY%2FgLojRmyKkx6ZhUNmyH8SGKyj2y%2FBtid%2FjzSReZx%2BoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDng5KS57M6yWVcQVCrcA%2FbnoOIG5749qeVv4Q8iXywil%2ForWSIQpMYD1%2Bas5EZdg2rZ7bnYTItBeNiAmtm5YY3AukfEycL%2BQNnwa5IKwwGuBK7Z%2BCoFCIsoKcvCLeyMzjnQAajc7lt3xKqR9ILSS4VCmcYmdz934Yl%2BCIv%2FEWBRi8Exdb8rHQsayLPX4AQ8rMUmKOmxEQ5oRXlbwyxznbvNhLwk5GSumJr9bqAO%2FxeGDneo1hUi0FAjTT5Y28yflSBnSKyP50CAesUwZ%2B2Sfq070bkUNdAn9JwJU0pY0a219fgY6keeAuUXOIVzcCIcL02yKPP4w4ndROGHku5UyrNmpfFN37rfZMrskuQc7uEfN5g%2BrNuGlFYm5f9KrGPxKuY53XroqGgkIveoeA5v3T5dvG1pH51R06nc%2FdIoFqymdbAX1iyqpKVqB3Fqwdk1ycZfAxkUO0EwnGdXtYcggc3Hxa%2F5r1VzxW9EPsi9WMHeBiWWbL2j0gzepGpq9IKD%2BVBD4eEgBdzDAHWl9xz6jxk%2BCV2K9i3YBl%2Bcqmuk8pQb2%2FK%2FTTNlYdUBtV5dawz79oEX4myV0JnoMdXjjcPKnEOV%2BNfM5KLzhT5%2BUXunwjzazKAkJey1uu37sOnPdn6jWV0m%2Bc%2FHut0OVdqzMKGR0cQGOqUBDDw38PUHBMxj0v6RxR%2BPKkuUFkMNJRVZxDMj2k7KTd2KgmT8tPF7eGaoXZOFzM%2FtIIYUrxyYdAHMnQUg4aI7DymtW2dE88ekDrAtTu%2FD8SboHR9qrieKt8KqU4FsjG1bWs%2B%2FMi%2Ba9lNGjukyMQFpddiQkiShIwOK3mr53lKpkUvBPhV91Io4k4KfMJcwqT%2BJsJZsnnVNIPTtrO3z7OCZbWoFmZPD&X-Amz-Signature=61e35ff5dd5da163e53cd56c9716cd3603632d9c4f66996030b2bec42cbb7a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
