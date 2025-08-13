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
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIFFBHCS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDXSJO7gmL5D219ZwutV86rBCe0xRkrW6oX0yh8rH0qgIgC7RE1490ShgZwMZBsOAUBNVZa0ryiIcDJRSKSx5x1RMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH2N7spRqNknhKTFKSrcA9%2BkKiguucuz%2B9pjTSm%2BkbpDBIkCLEs%2FmqgqSttdYZxz9rnkkTgjCjNzE0%2Bxb36qL8mfUkyU%2BG9xWTlIk9IbAhfPncyCBUT7B7zjh5ZSAk0bRIbchSh7uOMj7uqUxlcnhmW%2FWAjiE9x%2FenIErHd7FRi%2F8ccampVC4EU9TndJXA9wsHlluXSn3F6SFzAou12hvuAM6ZvVIdJntt4mMwbn04tTt9fyW8ioAVK1bVtRIlM7MI0c6QctR9o%2BoNMnX5NznOQyddT49TujUK3JtxLF6MchBs1f%2FCEHFrRwNEMkCfArOw6tnKd5oZuw7pLweaykUBv03BUdQli7rFvENstAP%2BnN91S0YWvEpilmKESPbzVnrVXU63KJyNHmYa1lL4Wpp%2BFyPdh70lfnEh7uVFeNmD4qVqQVn%2BP0KcmLxCrxe4hc2zbs5xwfFjk76qw0BhnGcqaXiWsLc1%2FDhS6SZ1HeP2IBqCJgMD0SFdydN5L2SURgdxepP%2BNwA4EmRCiSzYrnOpnmb88BUeLIP5JMsQ7krZucmUDJpWpwvbs%2FWEM0cS4i%2BXA8nkziF9TyiHyWOesbGl7wGxwwH0qXwRSQhHkgrF40N%2F9xIayOmx%2BuWM8EuRFqU9HUG9Wm0peXzGP1MPHF88QGOqUBE2vZzOkpx%2BgwWruzL2PtPb64pUmLN%2FW%2BwIAURYS73KDfJs6huR%2F%2BHWBVPNT6qik9EsM%2FMjUqSW%2F7vQ4m1KKsTFjIbhsXd50Mc6hOxtGOKkTzG3Dv0%2BBx2UqoUSJbGQTX3q%2FhnomswwA4Qqan3W%2Bl5JOKo%2B%2FQFwLJcNX%2FGmFPcPd6XsWa0RJQiD3Nq7VhuP8uVjGgNd9LK3vyMAgtcALNirK7eDgp&X-Amz-Signature=03b2d966780dbcda05a89343b0da4c065a318d8dbaa18d0fd9400556d0fca1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=35bc3fa553a5df2b2b1f069336db55e50bae1e35dc6c3554daeeccca1c912cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=aedd082c1f58cbcf285a03c9d422e89ccc3da03e6a29986ca9e91b59470dd992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=5e2656137d970cd51fe3ab34a9f22ae35b4a6fa2b54e9cd0c25a382a1b17fe58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=7df956dc01346d82e543af254f3de457cc58e9ac076340e853c7d14d526fcdac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=8b10324d221d1171e8780fcaba011a96d4cbcbf09fb99247412083d6f37b387a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=31819463ed16e573d2bee9028e8fce9631402c8ab0c1b3c410033f54fdbf5123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=f214adc07aa3ee0f018bd2cb24dbcb728a7db34f10de7ddf44725ea9f6b1bd72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=d13ccb7ac72dc0725950816eb97f7d2a9ff77aa41d0895301edd1d4931fc77ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

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
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=d93ad1f2af30fe8e916c04c55f9e75de461ab162370794b582dde007c0cda1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP6YUWEH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNnLTYHMbHOjKJjUo0LOd%2FYS3Fw%2F2R0Kk1OSo6%2BHC%2FbAIhAPch4sv%2ByY92bpCmDVJUVAjvlCcdfWV1STO7ncVGkS2wKv8DCDQQABoMNjM3NDIzMTgzODA1IgzKywGjA%2FVNI94OADkq3AMu6sfySvGQ0h%2Bw4OIvEeGcz4n%2BT2Qf%2BgTuwRB9W%2Bd2exT9VDfGS4ktkYeUIyqB6TyGPW98qLRNQaglpSvfMy4m5PyceP2qYyYcE4jWEsrVut%2B236k4AHvgKAprcQhf7DfZYeeNNqBfNoJAf3QoDoSxZdM%2F3q3p4CCC808InQAgwK1dXZiA%2B9xhiO0pN56SOp0iJYgaa%2BQAhkq3JI7Ya5iQdvObwbrCAcCT1T2U1rRQLWuUQzMVWWijb9wDTfyMYEeTYcnq29gzQ5itKsEKh%2BYCo5bQjD02xjXycj2x9oImJTTQxnA1DfxTskeT9AvV2JvvlHBzEPAj5zShnuJLY%2BOs2e%2BnyTxGsxRYzyrXMsGvvZ81smx2RQvhNDl93fUoqwFXp%2Bpznpsc29o3Ay%2FMA0HJ1EnZFKup%2ByYtRtXNXTAJwn3vucYrfpkj02qD13VE53REUpt9lmHDsKUqDsxSYmF5W0TwViLLVmtoHvsXgfOQeXQ0o3Kh1QRX23I4gJYOvAQhcD8%2B%2F03Xy2OtsLAAvT%2FYlGIR9dwby%2Fn4fN97uyMXi70cPcHGci6fui9rRHmgFy%2BEidVe7FClMdYepZNWUNrBd7%2B9zq4LlKZvjT6BY5MohiriB9Pacow0IBFUdjDGxvPEBjqkAWeTcDC%2BcZcdng80ayCVV2mt4T%2B6B1ZTbi3TzKEV39gyyPBDr83BqkRybVkx3cR1vCgURt5LC2R5%2FK5mEMrk6gWOuovVqNE9YTUPZ1Jpr%2F9VHIXSOJQS%2BkFY1SJy%2FNisOhRAf7mQ6ndljQQiBW9ALRgm1x3hFzBhgjwcjuvsRmw1iB%2BWsN02JK8x%2BhLwJhjVsvl09GGnDN6pKUlHgQP2NW8rLpTE&X-Amz-Signature=7df956dc01346d82e543af254f3de457cc58e9ac076340e853c7d14d526fcdac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

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
