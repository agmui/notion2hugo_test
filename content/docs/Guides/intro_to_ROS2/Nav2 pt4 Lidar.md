---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

</details>



TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAPMHZHJ%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCXbfW2Qn6CUHLDHWzcIui5MOfKuGOM31CWCaXcywimEwIgdnelDKCTAMFssi6BTGXHM8POYFmrRh1GVJkbGLT%2BbdQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDBGvVE052u7OmZbqvyrcA0iiAQV7lKBpshKhbamQdJC9aLvsmDX4LUvD55cnKuku2QI%2F5%2B8TgB3wxHjpZ8VkNd3%2F7QD8XY2RiGPQ63o0DJU%2BkWgMW8bSPaF6ylnXuWRcrPxv8fyG1tq5u8KJBBA%2BADYdaYdZ9n9xgEV0rlqoTC9LKiijOYu5yvhhHendl9cIE0tte%2Fh3ibAg%2B8evrOlQdXdYDDOHGyXlxMhZsGCK%2Ftx3KT0%2BVpphSPJNkhW1VU4dWone2jAfbJ2ygCUiYjCB51W6UyITKupuHLTenuD8%2FVtMNYY0exDHw2Yp2TSdYwl9H5SQFFmT6XxsjtPInN7Sgzs093tfHhgvnmulveObaZ5M2lhWQmN%2BSgm8g2ojH2onRQJFvZmCnyN81Yj0xYZkoXJNHrJTLNzdSe7d308g2Yud5EaP4FK7thgZOu9G0ENBg7NTNM55BZyQt9a3%2Bn6u974K%2BEE4oFf%2F98isQnHvcgh74dFUXkNt%2BhoR0nQCefQzHzPrNxcckQIH%2ByeKwh9KOrABZhycwMk1A2H6rI7eyDVr82Y4fghHjNC5Vjhb1ZJNMwJZjGa3NLxUVyZ9pFRCCmmwitJoojvB%2BFS4tQWv%2BJ2uDIkWPnC%2F086pqGkgA7RdPqdqUCd9254MlFY7MNOwickGOqUBB%2Bd5dNUWPwrbDHgDITmSPR2MUGwxe7tPORWOhLN81L%2FF%2FzbP7QQGDgZrO3fKV4OHzBgjVP7IMmQUogOikL9JMam6cknf3jLy9UqzycYyXrkMGqXcbN%2BQz%2Bpo3Qgv58b%2FnTqCEmK3dBfGzAOQDkeoIudX9Mi%2B2z4KsVn%2BV8lKoD%2BcDDiAlJJKlg8%2BR9c9L7VaWVMIus1RJ8MjNpdVkm%2BZWOJKoyXq&X-Amz-Signature=e07851728362c4b80d6f2284ec4ec84882f26b04cac5e904c7c45e42f97fbe9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVXK6KA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCkVUOVKmimbTOXHC8ai9JIvAD42HP1pvIlQtFeXHx0WgIhAKPA1gZRuwZtfvITM0JELk8sQ4M03gCqsLWo3NQGfJRoKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGL%2FNNMdHtYlTYR9cq3APWaZQoeeC%2BPEUlK%2BRGsL2gNQ%2BoYXmN%2BQXrvl7%2FmiJCmKIRCdrhuSWz0479Ex1fRG9uXlEPBQis111FyliKZ5p7xJcWt2jPtxJ3ApWy7jCC3ioZDvADNRnSBgG4zNCfli6dD%2FagjVgL1rf2L7g1bN4Mg0oMQK9yOBfKA5CRHBG%2FrQF7AEAzjJ7Ax8q5EK304hKQ8PcfkiX7sYr4xrt%2FPFeOFEmHR3RQo%2FV2SLRPxnUW9Ykp4ILXnWgIOHofFWLq2USfuZWF%2BzvcYWLk3CHrI4Fc8kNUuy%2BX1hOqlRz2SJjnotJWoekJm6xgbe69yC4eT6cZR4%2FGwtz6oMQtwg9PhZfRnW8gRHNpXkYbJ%2FPM7KarscWOJSDwTgsgNXZkqhFOJa%2ByyZLYgSMkCZ6ZEfpaQlq2ugq4P1vnUwSdKbiWRpye1Hn4Un6nOkVpvuLSp1vaTvc0e9KzJN6iu8FcMb19wKPwYcSAizvTS7w10oR4pD3MX9TiGDg6FS4M9hDrq7StqRzaGJ%2BTOWeX9d8lQ6I%2FXDpESj1ZSMMxMbbBnSuZBYlSHUoA41UmzhSgAStwWs3oVcv%2FPLj73X74jb8sjv40tMeTLrmcE1JQcuwBEz4SkhQ6muQES0s17G%2F2kCQ%2BNzC%2FsInJBjqkAdAzfYuMbGCfrYxwUnzvvpYRP%2Fxo0fY61fg%2FDbMGC7eeW%2BJIHlAnBy%2Bau4I%2FIu4cHmj1ewnEKe0NHgh1fcChDaLbgZEbL13MF5B4R3oefG6RK%2B%2FfsnlVZcOHtSFsFmvvNrgM3O2EjomAC4qx0Ov6rJ3iMplXP8d2nor%2FlNQlyx9TigAoq%2FTepGjbJ7gtGackov%2FcWUFLsSSMF2LVqBQ4UdiQ64ZK&X-Amz-Signature=85f12c4b306036583426292729dceb6d349ecc63997cebadd025a60f2f281c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVXK6KA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCkVUOVKmimbTOXHC8ai9JIvAD42HP1pvIlQtFeXHx0WgIhAKPA1gZRuwZtfvITM0JELk8sQ4M03gCqsLWo3NQGfJRoKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGL%2FNNMdHtYlTYR9cq3APWaZQoeeC%2BPEUlK%2BRGsL2gNQ%2BoYXmN%2BQXrvl7%2FmiJCmKIRCdrhuSWz0479Ex1fRG9uXlEPBQis111FyliKZ5p7xJcWt2jPtxJ3ApWy7jCC3ioZDvADNRnSBgG4zNCfli6dD%2FagjVgL1rf2L7g1bN4Mg0oMQK9yOBfKA5CRHBG%2FrQF7AEAzjJ7Ax8q5EK304hKQ8PcfkiX7sYr4xrt%2FPFeOFEmHR3RQo%2FV2SLRPxnUW9Ykp4ILXnWgIOHofFWLq2USfuZWF%2BzvcYWLk3CHrI4Fc8kNUuy%2BX1hOqlRz2SJjnotJWoekJm6xgbe69yC4eT6cZR4%2FGwtz6oMQtwg9PhZfRnW8gRHNpXkYbJ%2FPM7KarscWOJSDwTgsgNXZkqhFOJa%2ByyZLYgSMkCZ6ZEfpaQlq2ugq4P1vnUwSdKbiWRpye1Hn4Un6nOkVpvuLSp1vaTvc0e9KzJN6iu8FcMb19wKPwYcSAizvTS7w10oR4pD3MX9TiGDg6FS4M9hDrq7StqRzaGJ%2BTOWeX9d8lQ6I%2FXDpESj1ZSMMxMbbBnSuZBYlSHUoA41UmzhSgAStwWs3oVcv%2FPLj73X74jb8sjv40tMeTLrmcE1JQcuwBEz4SkhQ6muQES0s17G%2F2kCQ%2BNzC%2FsInJBjqkAdAzfYuMbGCfrYxwUnzvvpYRP%2Fxo0fY61fg%2FDbMGC7eeW%2BJIHlAnBy%2Bau4I%2FIu4cHmj1ewnEKe0NHgh1fcChDaLbgZEbL13MF5B4R3oefG6RK%2B%2FfsnlVZcOHtSFsFmvvNrgM3O2EjomAC4qx0Ov6rJ3iMplXP8d2nor%2FlNQlyx9TigAoq%2FTepGjbJ7gtGackov%2FcWUFLsSSMF2LVqBQ4UdiQ64ZK&X-Amz-Signature=053462f57374c2a687c6c3cdf1dbfeea20acd7162ff0da1aaddfa74e516c65b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVXK6KA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCkVUOVKmimbTOXHC8ai9JIvAD42HP1pvIlQtFeXHx0WgIhAKPA1gZRuwZtfvITM0JELk8sQ4M03gCqsLWo3NQGfJRoKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGL%2FNNMdHtYlTYR9cq3APWaZQoeeC%2BPEUlK%2BRGsL2gNQ%2BoYXmN%2BQXrvl7%2FmiJCmKIRCdrhuSWz0479Ex1fRG9uXlEPBQis111FyliKZ5p7xJcWt2jPtxJ3ApWy7jCC3ioZDvADNRnSBgG4zNCfli6dD%2FagjVgL1rf2L7g1bN4Mg0oMQK9yOBfKA5CRHBG%2FrQF7AEAzjJ7Ax8q5EK304hKQ8PcfkiX7sYr4xrt%2FPFeOFEmHR3RQo%2FV2SLRPxnUW9Ykp4ILXnWgIOHofFWLq2USfuZWF%2BzvcYWLk3CHrI4Fc8kNUuy%2BX1hOqlRz2SJjnotJWoekJm6xgbe69yC4eT6cZR4%2FGwtz6oMQtwg9PhZfRnW8gRHNpXkYbJ%2FPM7KarscWOJSDwTgsgNXZkqhFOJa%2ByyZLYgSMkCZ6ZEfpaQlq2ugq4P1vnUwSdKbiWRpye1Hn4Un6nOkVpvuLSp1vaTvc0e9KzJN6iu8FcMb19wKPwYcSAizvTS7w10oR4pD3MX9TiGDg6FS4M9hDrq7StqRzaGJ%2BTOWeX9d8lQ6I%2FXDpESj1ZSMMxMbbBnSuZBYlSHUoA41UmzhSgAStwWs3oVcv%2FPLj73X74jb8sjv40tMeTLrmcE1JQcuwBEz4SkhQ6muQES0s17G%2F2kCQ%2BNzC%2FsInJBjqkAdAzfYuMbGCfrYxwUnzvvpYRP%2Fxo0fY61fg%2FDbMGC7eeW%2BJIHlAnBy%2Bau4I%2FIu4cHmj1ewnEKe0NHgh1fcChDaLbgZEbL13MF5B4R3oefG6RK%2B%2FfsnlVZcOHtSFsFmvvNrgM3O2EjomAC4qx0Ov6rJ3iMplXP8d2nor%2FlNQlyx9TigAoq%2FTepGjbJ7gtGackov%2FcWUFLsSSMF2LVqBQ4UdiQ64ZK&X-Amz-Signature=8ce33a4f3658d3bad56a0a22e137d25808519542a4067df08de0652df3e5880b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVXK6KA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCkVUOVKmimbTOXHC8ai9JIvAD42HP1pvIlQtFeXHx0WgIhAKPA1gZRuwZtfvITM0JELk8sQ4M03gCqsLWo3NQGfJRoKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGL%2FNNMdHtYlTYR9cq3APWaZQoeeC%2BPEUlK%2BRGsL2gNQ%2BoYXmN%2BQXrvl7%2FmiJCmKIRCdrhuSWz0479Ex1fRG9uXlEPBQis111FyliKZ5p7xJcWt2jPtxJ3ApWy7jCC3ioZDvADNRnSBgG4zNCfli6dD%2FagjVgL1rf2L7g1bN4Mg0oMQK9yOBfKA5CRHBG%2FrQF7AEAzjJ7Ax8q5EK304hKQ8PcfkiX7sYr4xrt%2FPFeOFEmHR3RQo%2FV2SLRPxnUW9Ykp4ILXnWgIOHofFWLq2USfuZWF%2BzvcYWLk3CHrI4Fc8kNUuy%2BX1hOqlRz2SJjnotJWoekJm6xgbe69yC4eT6cZR4%2FGwtz6oMQtwg9PhZfRnW8gRHNpXkYbJ%2FPM7KarscWOJSDwTgsgNXZkqhFOJa%2ByyZLYgSMkCZ6ZEfpaQlq2ugq4P1vnUwSdKbiWRpye1Hn4Un6nOkVpvuLSp1vaTvc0e9KzJN6iu8FcMb19wKPwYcSAizvTS7w10oR4pD3MX9TiGDg6FS4M9hDrq7StqRzaGJ%2BTOWeX9d8lQ6I%2FXDpESj1ZSMMxMbbBnSuZBYlSHUoA41UmzhSgAStwWs3oVcv%2FPLj73X74jb8sjv40tMeTLrmcE1JQcuwBEz4SkhQ6muQES0s17G%2F2kCQ%2BNzC%2FsInJBjqkAdAzfYuMbGCfrYxwUnzvvpYRP%2Fxo0fY61fg%2FDbMGC7eeW%2BJIHlAnBy%2Bau4I%2FIu4cHmj1ewnEKe0NHgh1fcChDaLbgZEbL13MF5B4R3oefG6RK%2B%2FfsnlVZcOHtSFsFmvvNrgM3O2EjomAC4qx0Ov6rJ3iMplXP8d2nor%2FlNQlyx9TigAoq%2FTepGjbJ7gtGackov%2FcWUFLsSSMF2LVqBQ4UdiQ64ZK&X-Amz-Signature=3dda6f1975d85ae55974bc6aaa3185535fd745090fc58622e9f2ce0f75d8151a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVXK6KA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCkVUOVKmimbTOXHC8ai9JIvAD42HP1pvIlQtFeXHx0WgIhAKPA1gZRuwZtfvITM0JELk8sQ4M03gCqsLWo3NQGfJRoKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGL%2FNNMdHtYlTYR9cq3APWaZQoeeC%2BPEUlK%2BRGsL2gNQ%2BoYXmN%2BQXrvl7%2FmiJCmKIRCdrhuSWz0479Ex1fRG9uXlEPBQis111FyliKZ5p7xJcWt2jPtxJ3ApWy7jCC3ioZDvADNRnSBgG4zNCfli6dD%2FagjVgL1rf2L7g1bN4Mg0oMQK9yOBfKA5CRHBG%2FrQF7AEAzjJ7Ax8q5EK304hKQ8PcfkiX7sYr4xrt%2FPFeOFEmHR3RQo%2FV2SLRPxnUW9Ykp4ILXnWgIOHofFWLq2USfuZWF%2BzvcYWLk3CHrI4Fc8kNUuy%2BX1hOqlRz2SJjnotJWoekJm6xgbe69yC4eT6cZR4%2FGwtz6oMQtwg9PhZfRnW8gRHNpXkYbJ%2FPM7KarscWOJSDwTgsgNXZkqhFOJa%2ByyZLYgSMkCZ6ZEfpaQlq2ugq4P1vnUwSdKbiWRpye1Hn4Un6nOkVpvuLSp1vaTvc0e9KzJN6iu8FcMb19wKPwYcSAizvTS7w10oR4pD3MX9TiGDg6FS4M9hDrq7StqRzaGJ%2BTOWeX9d8lQ6I%2FXDpESj1ZSMMxMbbBnSuZBYlSHUoA41UmzhSgAStwWs3oVcv%2FPLj73X74jb8sjv40tMeTLrmcE1JQcuwBEz4SkhQ6muQES0s17G%2F2kCQ%2BNzC%2FsInJBjqkAdAzfYuMbGCfrYxwUnzvvpYRP%2Fxo0fY61fg%2FDbMGC7eeW%2BJIHlAnBy%2Bau4I%2FIu4cHmj1ewnEKe0NHgh1fcChDaLbgZEbL13MF5B4R3oefG6RK%2B%2FfsnlVZcOHtSFsFmvvNrgM3O2EjomAC4qx0Ov6rJ3iMplXP8d2nor%2FlNQlyx9TigAoq%2FTepGjbJ7gtGackov%2FcWUFLsSSMF2LVqBQ4UdiQ64ZK&X-Amz-Signature=92d6b1b6565300ac63bac20d4f49f5742396df276903e92247f27bec2adb9828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVXK6KA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCkVUOVKmimbTOXHC8ai9JIvAD42HP1pvIlQtFeXHx0WgIhAKPA1gZRuwZtfvITM0JELk8sQ4M03gCqsLWo3NQGfJRoKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGL%2FNNMdHtYlTYR9cq3APWaZQoeeC%2BPEUlK%2BRGsL2gNQ%2BoYXmN%2BQXrvl7%2FmiJCmKIRCdrhuSWz0479Ex1fRG9uXlEPBQis111FyliKZ5p7xJcWt2jPtxJ3ApWy7jCC3ioZDvADNRnSBgG4zNCfli6dD%2FagjVgL1rf2L7g1bN4Mg0oMQK9yOBfKA5CRHBG%2FrQF7AEAzjJ7Ax8q5EK304hKQ8PcfkiX7sYr4xrt%2FPFeOFEmHR3RQo%2FV2SLRPxnUW9Ykp4ILXnWgIOHofFWLq2USfuZWF%2BzvcYWLk3CHrI4Fc8kNUuy%2BX1hOqlRz2SJjnotJWoekJm6xgbe69yC4eT6cZR4%2FGwtz6oMQtwg9PhZfRnW8gRHNpXkYbJ%2FPM7KarscWOJSDwTgsgNXZkqhFOJa%2ByyZLYgSMkCZ6ZEfpaQlq2ugq4P1vnUwSdKbiWRpye1Hn4Un6nOkVpvuLSp1vaTvc0e9KzJN6iu8FcMb19wKPwYcSAizvTS7w10oR4pD3MX9TiGDg6FS4M9hDrq7StqRzaGJ%2BTOWeX9d8lQ6I%2FXDpESj1ZSMMxMbbBnSuZBYlSHUoA41UmzhSgAStwWs3oVcv%2FPLj73X74jb8sjv40tMeTLrmcE1JQcuwBEz4SkhQ6muQES0s17G%2F2kCQ%2BNzC%2FsInJBjqkAdAzfYuMbGCfrYxwUnzvvpYRP%2Fxo0fY61fg%2FDbMGC7eeW%2BJIHlAnBy%2Bau4I%2FIu4cHmj1ewnEKe0NHgh1fcChDaLbgZEbL13MF5B4R3oefG6RK%2B%2FfsnlVZcOHtSFsFmvvNrgM3O2EjomAC4qx0Ov6rJ3iMplXP8d2nor%2FlNQlyx9TigAoq%2FTepGjbJ7gtGackov%2FcWUFLsSSMF2LVqBQ4UdiQ64ZK&X-Amz-Signature=fd125ee84ba8c0c1692be21f29ad84619abac8f210266f57bb87b6d647f1b9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVXK6KA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCkVUOVKmimbTOXHC8ai9JIvAD42HP1pvIlQtFeXHx0WgIhAKPA1gZRuwZtfvITM0JELk8sQ4M03gCqsLWo3NQGfJRoKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGL%2FNNMdHtYlTYR9cq3APWaZQoeeC%2BPEUlK%2BRGsL2gNQ%2BoYXmN%2BQXrvl7%2FmiJCmKIRCdrhuSWz0479Ex1fRG9uXlEPBQis111FyliKZ5p7xJcWt2jPtxJ3ApWy7jCC3ioZDvADNRnSBgG4zNCfli6dD%2FagjVgL1rf2L7g1bN4Mg0oMQK9yOBfKA5CRHBG%2FrQF7AEAzjJ7Ax8q5EK304hKQ8PcfkiX7sYr4xrt%2FPFeOFEmHR3RQo%2FV2SLRPxnUW9Ykp4ILXnWgIOHofFWLq2USfuZWF%2BzvcYWLk3CHrI4Fc8kNUuy%2BX1hOqlRz2SJjnotJWoekJm6xgbe69yC4eT6cZR4%2FGwtz6oMQtwg9PhZfRnW8gRHNpXkYbJ%2FPM7KarscWOJSDwTgsgNXZkqhFOJa%2ByyZLYgSMkCZ6ZEfpaQlq2ugq4P1vnUwSdKbiWRpye1Hn4Un6nOkVpvuLSp1vaTvc0e9KzJN6iu8FcMb19wKPwYcSAizvTS7w10oR4pD3MX9TiGDg6FS4M9hDrq7StqRzaGJ%2BTOWeX9d8lQ6I%2FXDpESj1ZSMMxMbbBnSuZBYlSHUoA41UmzhSgAStwWs3oVcv%2FPLj73X74jb8sjv40tMeTLrmcE1JQcuwBEz4SkhQ6muQES0s17G%2F2kCQ%2BNzC%2FsInJBjqkAdAzfYuMbGCfrYxwUnzvvpYRP%2Fxo0fY61fg%2FDbMGC7eeW%2BJIHlAnBy%2Bau4I%2FIu4cHmj1ewnEKe0NHgh1fcChDaLbgZEbL13MF5B4R3oefG6RK%2B%2FfsnlVZcOHtSFsFmvvNrgM3O2EjomAC4qx0Ov6rJ3iMplXP8d2nor%2FlNQlyx9TigAoq%2FTepGjbJ7gtGackov%2FcWUFLsSSMF2LVqBQ4UdiQ64ZK&X-Amz-Signature=17da7a98ba3b191a05a6249ed2fa9cba06cdfdbd30de9d27364c52c675d71e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVXK6KA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCkVUOVKmimbTOXHC8ai9JIvAD42HP1pvIlQtFeXHx0WgIhAKPA1gZRuwZtfvITM0JELk8sQ4M03gCqsLWo3NQGfJRoKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGL%2FNNMdHtYlTYR9cq3APWaZQoeeC%2BPEUlK%2BRGsL2gNQ%2BoYXmN%2BQXrvl7%2FmiJCmKIRCdrhuSWz0479Ex1fRG9uXlEPBQis111FyliKZ5p7xJcWt2jPtxJ3ApWy7jCC3ioZDvADNRnSBgG4zNCfli6dD%2FagjVgL1rf2L7g1bN4Mg0oMQK9yOBfKA5CRHBG%2FrQF7AEAzjJ7Ax8q5EK304hKQ8PcfkiX7sYr4xrt%2FPFeOFEmHR3RQo%2FV2SLRPxnUW9Ykp4ILXnWgIOHofFWLq2USfuZWF%2BzvcYWLk3CHrI4Fc8kNUuy%2BX1hOqlRz2SJjnotJWoekJm6xgbe69yC4eT6cZR4%2FGwtz6oMQtwg9PhZfRnW8gRHNpXkYbJ%2FPM7KarscWOJSDwTgsgNXZkqhFOJa%2ByyZLYgSMkCZ6ZEfpaQlq2ugq4P1vnUwSdKbiWRpye1Hn4Un6nOkVpvuLSp1vaTvc0e9KzJN6iu8FcMb19wKPwYcSAizvTS7w10oR4pD3MX9TiGDg6FS4M9hDrq7StqRzaGJ%2BTOWeX9d8lQ6I%2FXDpESj1ZSMMxMbbBnSuZBYlSHUoA41UmzhSgAStwWs3oVcv%2FPLj73X74jb8sjv40tMeTLrmcE1JQcuwBEz4SkhQ6muQES0s17G%2F2kCQ%2BNzC%2FsInJBjqkAdAzfYuMbGCfrYxwUnzvvpYRP%2Fxo0fY61fg%2FDbMGC7eeW%2BJIHlAnBy%2Bau4I%2FIu4cHmj1ewnEKe0NHgh1fcChDaLbgZEbL13MF5B4R3oefG6RK%2B%2FfsnlVZcOHtSFsFmvvNrgM3O2EjomAC4qx0Ov6rJ3iMplXP8d2nor%2FlNQlyx9TigAoq%2FTepGjbJ7gtGackov%2FcWUFLsSSMF2LVqBQ4UdiQ64ZK&X-Amz-Signature=64f9e29b30b99a93830579689f40a66490e572b99e1b226691c3409238a56050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
    ])
```

<details>
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
```bash
ls /dev/ttyUSB*
```

</details>



{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVXK6KA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCkVUOVKmimbTOXHC8ai9JIvAD42HP1pvIlQtFeXHx0WgIhAKPA1gZRuwZtfvITM0JELk8sQ4M03gCqsLWo3NQGfJRoKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGL%2FNNMdHtYlTYR9cq3APWaZQoeeC%2BPEUlK%2BRGsL2gNQ%2BoYXmN%2BQXrvl7%2FmiJCmKIRCdrhuSWz0479Ex1fRG9uXlEPBQis111FyliKZ5p7xJcWt2jPtxJ3ApWy7jCC3ioZDvADNRnSBgG4zNCfli6dD%2FagjVgL1rf2L7g1bN4Mg0oMQK9yOBfKA5CRHBG%2FrQF7AEAzjJ7Ax8q5EK304hKQ8PcfkiX7sYr4xrt%2FPFeOFEmHR3RQo%2FV2SLRPxnUW9Ykp4ILXnWgIOHofFWLq2USfuZWF%2BzvcYWLk3CHrI4Fc8kNUuy%2BX1hOqlRz2SJjnotJWoekJm6xgbe69yC4eT6cZR4%2FGwtz6oMQtwg9PhZfRnW8gRHNpXkYbJ%2FPM7KarscWOJSDwTgsgNXZkqhFOJa%2ByyZLYgSMkCZ6ZEfpaQlq2ugq4P1vnUwSdKbiWRpye1Hn4Un6nOkVpvuLSp1vaTvc0e9KzJN6iu8FcMb19wKPwYcSAizvTS7w10oR4pD3MX9TiGDg6FS4M9hDrq7StqRzaGJ%2BTOWeX9d8lQ6I%2FXDpESj1ZSMMxMbbBnSuZBYlSHUoA41UmzhSgAStwWs3oVcv%2FPLj73X74jb8sjv40tMeTLrmcE1JQcuwBEz4SkhQ6muQES0s17G%2F2kCQ%2BNzC%2FsInJBjqkAdAzfYuMbGCfrYxwUnzvvpYRP%2Fxo0fY61fg%2FDbMGC7eeW%2BJIHlAnBy%2Bau4I%2FIu4cHmj1ewnEKe0NHgh1fcChDaLbgZEbL13MF5B4R3oefG6RK%2B%2FfsnlVZcOHtSFsFmvvNrgM3O2EjomAC4qx0Ov6rJ3iMplXP8d2nor%2FlNQlyx9TigAoq%2FTepGjbJ7gtGackov%2FcWUFLsSSMF2LVqBQ4UdiQ64ZK&X-Amz-Signature=6f20fb0a0ff0a18ab39cd2c3c0774efb5e6d67c25004f69e8aceb2715048bca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVXK6KA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCkVUOVKmimbTOXHC8ai9JIvAD42HP1pvIlQtFeXHx0WgIhAKPA1gZRuwZtfvITM0JELk8sQ4M03gCqsLWo3NQGfJRoKv8DCDIQABoMNjM3NDIzMTgzODA1IgwGL%2FNNMdHtYlTYR9cq3APWaZQoeeC%2BPEUlK%2BRGsL2gNQ%2BoYXmN%2BQXrvl7%2FmiJCmKIRCdrhuSWz0479Ex1fRG9uXlEPBQis111FyliKZ5p7xJcWt2jPtxJ3ApWy7jCC3ioZDvADNRnSBgG4zNCfli6dD%2FagjVgL1rf2L7g1bN4Mg0oMQK9yOBfKA5CRHBG%2FrQF7AEAzjJ7Ax8q5EK304hKQ8PcfkiX7sYr4xrt%2FPFeOFEmHR3RQo%2FV2SLRPxnUW9Ykp4ILXnWgIOHofFWLq2USfuZWF%2BzvcYWLk3CHrI4Fc8kNUuy%2BX1hOqlRz2SJjnotJWoekJm6xgbe69yC4eT6cZR4%2FGwtz6oMQtwg9PhZfRnW8gRHNpXkYbJ%2FPM7KarscWOJSDwTgsgNXZkqhFOJa%2ByyZLYgSMkCZ6ZEfpaQlq2ugq4P1vnUwSdKbiWRpye1Hn4Un6nOkVpvuLSp1vaTvc0e9KzJN6iu8FcMb19wKPwYcSAizvTS7w10oR4pD3MX9TiGDg6FS4M9hDrq7StqRzaGJ%2BTOWeX9d8lQ6I%2FXDpESj1ZSMMxMbbBnSuZBYlSHUoA41UmzhSgAStwWs3oVcv%2FPLj73X74jb8sjv40tMeTLrmcE1JQcuwBEz4SkhQ6muQES0s17G%2F2kCQ%2BNzC%2FsInJBjqkAdAzfYuMbGCfrYxwUnzvvpYRP%2Fxo0fY61fg%2FDbMGC7eeW%2BJIHlAnBy%2Bau4I%2FIu4cHmj1ewnEKe0NHgh1fcChDaLbgZEbL13MF5B4R3oefG6RK%2B%2FfsnlVZcOHtSFsFmvvNrgM3O2EjomAC4qx0Ov6rJ3iMplXP8d2nor%2FlNQlyx9TigAoq%2FTepGjbJ7gtGackov%2FcWUFLsSSMF2LVqBQ4UdiQ64ZK&X-Amz-Signature=3dda6f1975d85ae55974bc6aaa3185535fd745090fc58622e9f2ce0f75d8151a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
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

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
