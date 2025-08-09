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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZMBN6JW%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4EJX2YnUeJp3Aa8d9Nq3%2FvtpwPx3n88I93baK%2BxajFAIgFhEztOmtK3PEp1q4zlhcYnDFsCytozVoFIPyLS5iyaMqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItSByhz3vUQSHGlPircA6d3tQC0zNEe2Fh2ybqlHIpfun7Q57yDmWURKt6%2BZhl5mPlYYWDUGmXjdLGBj8MwNX7p7wH2Z1dgWw04S5Tlwwlfuni01O4fBh83o4TkejdK0nn6bj9jIbwjeRWZKcjzG6IgS560rT%2BKZN0vfWdGVsTMLmUD%2F0Ra0d4c0C5LkPPunGg0%2ByXFrrGIHXPJu2iZOoo6QCgcALB7HteJXRFRsd7mlbbXOp6aNt3sw%2F%2FWVAqFLkqdQO%2BJJX%2FRSCngWlQgD18ojNxcC7760wLzZFbL2Umji75HgCA8sTIMNlRGh%2BUpe%2BtdCyJRpqPR%2FoCa9wMpWO4qk4Rc5G5UxYI2Wt%2BTQEu5RJeIDfeCF1sNxW4gX7Wucbbv8GkYCMaFAli7JMHqgtPe8XTU%2FTDLM3GqJsKN4QmbOwYvGz8XASLdCi8PW%2FETLdYSYVT51sKh2MY5oWcHYFsJL0lBYhgIJSttx8OLtr6ZjYLJ%2FMEYQ6GxbqCZlKuReeWNldYgHBt%2FxvCGU3GtfiWWD%2B865yCLzFqsz457Kc7f7%2FqmR6i0nOy25ndjirBfjTAGvy8pbEyGaQ4E%2FGsby0KzCFprjQrSUHSuy8xpzzMciJlxPoflJka2UMn1VTQRrB2TSlzl439tjrn3MIeL38QGOqUBBYOIHeC%2BcmUr7NZBk8s0%2F80dcvVYt3LgoHzXdBVoaAODYxL1lqW2hJOmHGhSYVzcYMqmbrHsJ9xqCRTl5RSsg%2Bg6m9Fmt5tWg0kjBiQESLdochGeE3l%2F%2B%2BHRMojrBz%2FIpEGt3OLw2eeV1HHw1ZNsxItBtCtWaemlYGQewy76mAbqhsRowREtvJrtrjFVnT09eyQoOhYpHwKbTziuWSbejQbe1KGZ&X-Amz-Signature=9b3eca505ee9d09573d320c98fa131b7b1d36e252e1e912a31841a25bf8595cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLRSSNS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFKefwzqXyQJxwIvgvuiiyLsN1s1WpBvce9onyfpwUlAiEAlM3QMZFxVIKX2J%2B6nl9e%2Fop5413l2ugZ6pdQy9H0D6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLMn6OvMa%2Fkov3rRCrcA4O6VUhuxuRQIuXxBH0mlByfEX8N%2FkDpwY4JIdIQdBIxbdt02Yq%2BUhdzFoI0vWpGUO88qABfjfPkeUPHcToSZKIfkA%2FV5PrTZr5k9EMFRyUGvvdP7uX155qYp1Y5AkViiIyMjDRax4pzmHedYWkeiYQqP77kXCmZSv%2FpbtaKjTLi6cO0mAVDm04CqWa%2B1ExEjLb3mmraIH%2BYruRxR2o0hot1GfBGrtkqgePgpvQ97Vb6e8%2FDhrzyy%2FRW4IFfNyyOt7I9nYRz6jX4FEx%2F1miriKi1l5ycdjISJPxx2zYY5PlGCK0dXJdGToa%2Bq7GzlxS%2BY3fC2bfApZNvEFJg2v8ivQOHv%2B8340vCgEk9jLTUt51EEPiDNYeVIYO0uw3aY3LS4gjIf4U5rJdeUXMhh%2BfzZh29Y6hen6C9cgioxLqhviv4KogYbljvSOVgYGNn7st9KzO8cPjn6%2FzZPRy9k0nURijftyU3LbakKyDC%2BLhv0IXxDYPS8xXiJdV3iIqTpNd73qG7KOH5rrjbaVNA31GFThcYRZOVKfx%2FM8zR4U9NrS5KBcX5ZuxlYHowMTcLdwx9UWl%2FtbnJEsZleJyQ4YPgAhCeOrfBtLHrscJPWviuhiVxpvbFvINL%2Buagr9C7MNmL38QGOqUB5q998kYaow9T9uTbz0HgazrUEYPwMabJFudn69zSRjIZxLX332KCxm65Oa%2F69zOJolKc96CrZ6fU9o7tJVm8tZEnQ0Q1pOB6UNCuMkBFQZTaLKeWWCH7CMSU%2BdZqM7yH%2BaLZfPapjwZ28dGNIjOCNt8sAOi1%2FaU7RCDfh%2FmaqtRhgUquHTOpb7zX5TbzR0bvRSRenZMrv0Xv%2FFGBS%2BIgOdFholKu&X-Amz-Signature=78d49727c77e60f35303e1cc78a97e329b21ebd77e5c3555007dbe4f0b4fa1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLRSSNS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFKefwzqXyQJxwIvgvuiiyLsN1s1WpBvce9onyfpwUlAiEAlM3QMZFxVIKX2J%2B6nl9e%2Fop5413l2ugZ6pdQy9H0D6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLMn6OvMa%2Fkov3rRCrcA4O6VUhuxuRQIuXxBH0mlByfEX8N%2FkDpwY4JIdIQdBIxbdt02Yq%2BUhdzFoI0vWpGUO88qABfjfPkeUPHcToSZKIfkA%2FV5PrTZr5k9EMFRyUGvvdP7uX155qYp1Y5AkViiIyMjDRax4pzmHedYWkeiYQqP77kXCmZSv%2FpbtaKjTLi6cO0mAVDm04CqWa%2B1ExEjLb3mmraIH%2BYruRxR2o0hot1GfBGrtkqgePgpvQ97Vb6e8%2FDhrzyy%2FRW4IFfNyyOt7I9nYRz6jX4FEx%2F1miriKi1l5ycdjISJPxx2zYY5PlGCK0dXJdGToa%2Bq7GzlxS%2BY3fC2bfApZNvEFJg2v8ivQOHv%2B8340vCgEk9jLTUt51EEPiDNYeVIYO0uw3aY3LS4gjIf4U5rJdeUXMhh%2BfzZh29Y6hen6C9cgioxLqhviv4KogYbljvSOVgYGNn7st9KzO8cPjn6%2FzZPRy9k0nURijftyU3LbakKyDC%2BLhv0IXxDYPS8xXiJdV3iIqTpNd73qG7KOH5rrjbaVNA31GFThcYRZOVKfx%2FM8zR4U9NrS5KBcX5ZuxlYHowMTcLdwx9UWl%2FtbnJEsZleJyQ4YPgAhCeOrfBtLHrscJPWviuhiVxpvbFvINL%2Buagr9C7MNmL38QGOqUB5q998kYaow9T9uTbz0HgazrUEYPwMabJFudn69zSRjIZxLX332KCxm65Oa%2F69zOJolKc96CrZ6fU9o7tJVm8tZEnQ0Q1pOB6UNCuMkBFQZTaLKeWWCH7CMSU%2BdZqM7yH%2BaLZfPapjwZ28dGNIjOCNt8sAOi1%2FaU7RCDfh%2FmaqtRhgUquHTOpb7zX5TbzR0bvRSRenZMrv0Xv%2FFGBS%2BIgOdFholKu&X-Amz-Signature=0a92050e84bc3abf2bd78adb65bf26e8001b03921335c36aa326bbfb7d773ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLRSSNS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFKefwzqXyQJxwIvgvuiiyLsN1s1WpBvce9onyfpwUlAiEAlM3QMZFxVIKX2J%2B6nl9e%2Fop5413l2ugZ6pdQy9H0D6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLMn6OvMa%2Fkov3rRCrcA4O6VUhuxuRQIuXxBH0mlByfEX8N%2FkDpwY4JIdIQdBIxbdt02Yq%2BUhdzFoI0vWpGUO88qABfjfPkeUPHcToSZKIfkA%2FV5PrTZr5k9EMFRyUGvvdP7uX155qYp1Y5AkViiIyMjDRax4pzmHedYWkeiYQqP77kXCmZSv%2FpbtaKjTLi6cO0mAVDm04CqWa%2B1ExEjLb3mmraIH%2BYruRxR2o0hot1GfBGrtkqgePgpvQ97Vb6e8%2FDhrzyy%2FRW4IFfNyyOt7I9nYRz6jX4FEx%2F1miriKi1l5ycdjISJPxx2zYY5PlGCK0dXJdGToa%2Bq7GzlxS%2BY3fC2bfApZNvEFJg2v8ivQOHv%2B8340vCgEk9jLTUt51EEPiDNYeVIYO0uw3aY3LS4gjIf4U5rJdeUXMhh%2BfzZh29Y6hen6C9cgioxLqhviv4KogYbljvSOVgYGNn7st9KzO8cPjn6%2FzZPRy9k0nURijftyU3LbakKyDC%2BLhv0IXxDYPS8xXiJdV3iIqTpNd73qG7KOH5rrjbaVNA31GFThcYRZOVKfx%2FM8zR4U9NrS5KBcX5ZuxlYHowMTcLdwx9UWl%2FtbnJEsZleJyQ4YPgAhCeOrfBtLHrscJPWviuhiVxpvbFvINL%2Buagr9C7MNmL38QGOqUB5q998kYaow9T9uTbz0HgazrUEYPwMabJFudn69zSRjIZxLX332KCxm65Oa%2F69zOJolKc96CrZ6fU9o7tJVm8tZEnQ0Q1pOB6UNCuMkBFQZTaLKeWWCH7CMSU%2BdZqM7yH%2BaLZfPapjwZ28dGNIjOCNt8sAOi1%2FaU7RCDfh%2FmaqtRhgUquHTOpb7zX5TbzR0bvRSRenZMrv0Xv%2FFGBS%2BIgOdFholKu&X-Amz-Signature=d90008d4680707a2722f25faf16993d969a59e67876410dd6fac5d88ca413958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLRSSNS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFKefwzqXyQJxwIvgvuiiyLsN1s1WpBvce9onyfpwUlAiEAlM3QMZFxVIKX2J%2B6nl9e%2Fop5413l2ugZ6pdQy9H0D6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLMn6OvMa%2Fkov3rRCrcA4O6VUhuxuRQIuXxBH0mlByfEX8N%2FkDpwY4JIdIQdBIxbdt02Yq%2BUhdzFoI0vWpGUO88qABfjfPkeUPHcToSZKIfkA%2FV5PrTZr5k9EMFRyUGvvdP7uX155qYp1Y5AkViiIyMjDRax4pzmHedYWkeiYQqP77kXCmZSv%2FpbtaKjTLi6cO0mAVDm04CqWa%2B1ExEjLb3mmraIH%2BYruRxR2o0hot1GfBGrtkqgePgpvQ97Vb6e8%2FDhrzyy%2FRW4IFfNyyOt7I9nYRz6jX4FEx%2F1miriKi1l5ycdjISJPxx2zYY5PlGCK0dXJdGToa%2Bq7GzlxS%2BY3fC2bfApZNvEFJg2v8ivQOHv%2B8340vCgEk9jLTUt51EEPiDNYeVIYO0uw3aY3LS4gjIf4U5rJdeUXMhh%2BfzZh29Y6hen6C9cgioxLqhviv4KogYbljvSOVgYGNn7st9KzO8cPjn6%2FzZPRy9k0nURijftyU3LbakKyDC%2BLhv0IXxDYPS8xXiJdV3iIqTpNd73qG7KOH5rrjbaVNA31GFThcYRZOVKfx%2FM8zR4U9NrS5KBcX5ZuxlYHowMTcLdwx9UWl%2FtbnJEsZleJyQ4YPgAhCeOrfBtLHrscJPWviuhiVxpvbFvINL%2Buagr9C7MNmL38QGOqUB5q998kYaow9T9uTbz0HgazrUEYPwMabJFudn69zSRjIZxLX332KCxm65Oa%2F69zOJolKc96CrZ6fU9o7tJVm8tZEnQ0Q1pOB6UNCuMkBFQZTaLKeWWCH7CMSU%2BdZqM7yH%2BaLZfPapjwZ28dGNIjOCNt8sAOi1%2FaU7RCDfh%2FmaqtRhgUquHTOpb7zX5TbzR0bvRSRenZMrv0Xv%2FFGBS%2BIgOdFholKu&X-Amz-Signature=d44373d716847809ecc658e20154463ef0c838dfef775f4e9cbd1d7c0af644dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLRSSNS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFKefwzqXyQJxwIvgvuiiyLsN1s1WpBvce9onyfpwUlAiEAlM3QMZFxVIKX2J%2B6nl9e%2Fop5413l2ugZ6pdQy9H0D6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLMn6OvMa%2Fkov3rRCrcA4O6VUhuxuRQIuXxBH0mlByfEX8N%2FkDpwY4JIdIQdBIxbdt02Yq%2BUhdzFoI0vWpGUO88qABfjfPkeUPHcToSZKIfkA%2FV5PrTZr5k9EMFRyUGvvdP7uX155qYp1Y5AkViiIyMjDRax4pzmHedYWkeiYQqP77kXCmZSv%2FpbtaKjTLi6cO0mAVDm04CqWa%2B1ExEjLb3mmraIH%2BYruRxR2o0hot1GfBGrtkqgePgpvQ97Vb6e8%2FDhrzyy%2FRW4IFfNyyOt7I9nYRz6jX4FEx%2F1miriKi1l5ycdjISJPxx2zYY5PlGCK0dXJdGToa%2Bq7GzlxS%2BY3fC2bfApZNvEFJg2v8ivQOHv%2B8340vCgEk9jLTUt51EEPiDNYeVIYO0uw3aY3LS4gjIf4U5rJdeUXMhh%2BfzZh29Y6hen6C9cgioxLqhviv4KogYbljvSOVgYGNn7st9KzO8cPjn6%2FzZPRy9k0nURijftyU3LbakKyDC%2BLhv0IXxDYPS8xXiJdV3iIqTpNd73qG7KOH5rrjbaVNA31GFThcYRZOVKfx%2FM8zR4U9NrS5KBcX5ZuxlYHowMTcLdwx9UWl%2FtbnJEsZleJyQ4YPgAhCeOrfBtLHrscJPWviuhiVxpvbFvINL%2Buagr9C7MNmL38QGOqUB5q998kYaow9T9uTbz0HgazrUEYPwMabJFudn69zSRjIZxLX332KCxm65Oa%2F69zOJolKc96CrZ6fU9o7tJVm8tZEnQ0Q1pOB6UNCuMkBFQZTaLKeWWCH7CMSU%2BdZqM7yH%2BaLZfPapjwZ28dGNIjOCNt8sAOi1%2FaU7RCDfh%2FmaqtRhgUquHTOpb7zX5TbzR0bvRSRenZMrv0Xv%2FFGBS%2BIgOdFholKu&X-Amz-Signature=92374ab3ff4cfb24738448e0c8591ffa9e44d3f303405681fc0f5d68d653b2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLRSSNS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFKefwzqXyQJxwIvgvuiiyLsN1s1WpBvce9onyfpwUlAiEAlM3QMZFxVIKX2J%2B6nl9e%2Fop5413l2ugZ6pdQy9H0D6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLMn6OvMa%2Fkov3rRCrcA4O6VUhuxuRQIuXxBH0mlByfEX8N%2FkDpwY4JIdIQdBIxbdt02Yq%2BUhdzFoI0vWpGUO88qABfjfPkeUPHcToSZKIfkA%2FV5PrTZr5k9EMFRyUGvvdP7uX155qYp1Y5AkViiIyMjDRax4pzmHedYWkeiYQqP77kXCmZSv%2FpbtaKjTLi6cO0mAVDm04CqWa%2B1ExEjLb3mmraIH%2BYruRxR2o0hot1GfBGrtkqgePgpvQ97Vb6e8%2FDhrzyy%2FRW4IFfNyyOt7I9nYRz6jX4FEx%2F1miriKi1l5ycdjISJPxx2zYY5PlGCK0dXJdGToa%2Bq7GzlxS%2BY3fC2bfApZNvEFJg2v8ivQOHv%2B8340vCgEk9jLTUt51EEPiDNYeVIYO0uw3aY3LS4gjIf4U5rJdeUXMhh%2BfzZh29Y6hen6C9cgioxLqhviv4KogYbljvSOVgYGNn7st9KzO8cPjn6%2FzZPRy9k0nURijftyU3LbakKyDC%2BLhv0IXxDYPS8xXiJdV3iIqTpNd73qG7KOH5rrjbaVNA31GFThcYRZOVKfx%2FM8zR4U9NrS5KBcX5ZuxlYHowMTcLdwx9UWl%2FtbnJEsZleJyQ4YPgAhCeOrfBtLHrscJPWviuhiVxpvbFvINL%2Buagr9C7MNmL38QGOqUB5q998kYaow9T9uTbz0HgazrUEYPwMabJFudn69zSRjIZxLX332KCxm65Oa%2F69zOJolKc96CrZ6fU9o7tJVm8tZEnQ0Q1pOB6UNCuMkBFQZTaLKeWWCH7CMSU%2BdZqM7yH%2BaLZfPapjwZ28dGNIjOCNt8sAOi1%2FaU7RCDfh%2FmaqtRhgUquHTOpb7zX5TbzR0bvRSRenZMrv0Xv%2FFGBS%2BIgOdFholKu&X-Amz-Signature=68303fdc8b85f81ff822daf5b6bd316f8a208cf0ba901abacc8dda2d45a98ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLRSSNS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFKefwzqXyQJxwIvgvuiiyLsN1s1WpBvce9onyfpwUlAiEAlM3QMZFxVIKX2J%2B6nl9e%2Fop5413l2ugZ6pdQy9H0D6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLMn6OvMa%2Fkov3rRCrcA4O6VUhuxuRQIuXxBH0mlByfEX8N%2FkDpwY4JIdIQdBIxbdt02Yq%2BUhdzFoI0vWpGUO88qABfjfPkeUPHcToSZKIfkA%2FV5PrTZr5k9EMFRyUGvvdP7uX155qYp1Y5AkViiIyMjDRax4pzmHedYWkeiYQqP77kXCmZSv%2FpbtaKjTLi6cO0mAVDm04CqWa%2B1ExEjLb3mmraIH%2BYruRxR2o0hot1GfBGrtkqgePgpvQ97Vb6e8%2FDhrzyy%2FRW4IFfNyyOt7I9nYRz6jX4FEx%2F1miriKi1l5ycdjISJPxx2zYY5PlGCK0dXJdGToa%2Bq7GzlxS%2BY3fC2bfApZNvEFJg2v8ivQOHv%2B8340vCgEk9jLTUt51EEPiDNYeVIYO0uw3aY3LS4gjIf4U5rJdeUXMhh%2BfzZh29Y6hen6C9cgioxLqhviv4KogYbljvSOVgYGNn7st9KzO8cPjn6%2FzZPRy9k0nURijftyU3LbakKyDC%2BLhv0IXxDYPS8xXiJdV3iIqTpNd73qG7KOH5rrjbaVNA31GFThcYRZOVKfx%2FM8zR4U9NrS5KBcX5ZuxlYHowMTcLdwx9UWl%2FtbnJEsZleJyQ4YPgAhCeOrfBtLHrscJPWviuhiVxpvbFvINL%2Buagr9C7MNmL38QGOqUB5q998kYaow9T9uTbz0HgazrUEYPwMabJFudn69zSRjIZxLX332KCxm65Oa%2F69zOJolKc96CrZ6fU9o7tJVm8tZEnQ0Q1pOB6UNCuMkBFQZTaLKeWWCH7CMSU%2BdZqM7yH%2BaLZfPapjwZ28dGNIjOCNt8sAOi1%2FaU7RCDfh%2FmaqtRhgUquHTOpb7zX5TbzR0bvRSRenZMrv0Xv%2FFGBS%2BIgOdFholKu&X-Amz-Signature=ce0caff0c7ca1b2ac89170072ec7310b137bd6cd19a0c34c4307c89687171d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLRSSNS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFKefwzqXyQJxwIvgvuiiyLsN1s1WpBvce9onyfpwUlAiEAlM3QMZFxVIKX2J%2B6nl9e%2Fop5413l2ugZ6pdQy9H0D6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLMn6OvMa%2Fkov3rRCrcA4O6VUhuxuRQIuXxBH0mlByfEX8N%2FkDpwY4JIdIQdBIxbdt02Yq%2BUhdzFoI0vWpGUO88qABfjfPkeUPHcToSZKIfkA%2FV5PrTZr5k9EMFRyUGvvdP7uX155qYp1Y5AkViiIyMjDRax4pzmHedYWkeiYQqP77kXCmZSv%2FpbtaKjTLi6cO0mAVDm04CqWa%2B1ExEjLb3mmraIH%2BYruRxR2o0hot1GfBGrtkqgePgpvQ97Vb6e8%2FDhrzyy%2FRW4IFfNyyOt7I9nYRz6jX4FEx%2F1miriKi1l5ycdjISJPxx2zYY5PlGCK0dXJdGToa%2Bq7GzlxS%2BY3fC2bfApZNvEFJg2v8ivQOHv%2B8340vCgEk9jLTUt51EEPiDNYeVIYO0uw3aY3LS4gjIf4U5rJdeUXMhh%2BfzZh29Y6hen6C9cgioxLqhviv4KogYbljvSOVgYGNn7st9KzO8cPjn6%2FzZPRy9k0nURijftyU3LbakKyDC%2BLhv0IXxDYPS8xXiJdV3iIqTpNd73qG7KOH5rrjbaVNA31GFThcYRZOVKfx%2FM8zR4U9NrS5KBcX5ZuxlYHowMTcLdwx9UWl%2FtbnJEsZleJyQ4YPgAhCeOrfBtLHrscJPWviuhiVxpvbFvINL%2Buagr9C7MNmL38QGOqUB5q998kYaow9T9uTbz0HgazrUEYPwMabJFudn69zSRjIZxLX332KCxm65Oa%2F69zOJolKc96CrZ6fU9o7tJVm8tZEnQ0Q1pOB6UNCuMkBFQZTaLKeWWCH7CMSU%2BdZqM7yH%2BaLZfPapjwZ28dGNIjOCNt8sAOi1%2FaU7RCDfh%2FmaqtRhgUquHTOpb7zX5TbzR0bvRSRenZMrv0Xv%2FFGBS%2BIgOdFholKu&X-Amz-Signature=e180037f6c269afe2c0df8704f77414a0806a76a80b063cc911dd3fd378d0e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLRSSNS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFKefwzqXyQJxwIvgvuiiyLsN1s1WpBvce9onyfpwUlAiEAlM3QMZFxVIKX2J%2B6nl9e%2Fop5413l2ugZ6pdQy9H0D6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLMn6OvMa%2Fkov3rRCrcA4O6VUhuxuRQIuXxBH0mlByfEX8N%2FkDpwY4JIdIQdBIxbdt02Yq%2BUhdzFoI0vWpGUO88qABfjfPkeUPHcToSZKIfkA%2FV5PrTZr5k9EMFRyUGvvdP7uX155qYp1Y5AkViiIyMjDRax4pzmHedYWkeiYQqP77kXCmZSv%2FpbtaKjTLi6cO0mAVDm04CqWa%2B1ExEjLb3mmraIH%2BYruRxR2o0hot1GfBGrtkqgePgpvQ97Vb6e8%2FDhrzyy%2FRW4IFfNyyOt7I9nYRz6jX4FEx%2F1miriKi1l5ycdjISJPxx2zYY5PlGCK0dXJdGToa%2Bq7GzlxS%2BY3fC2bfApZNvEFJg2v8ivQOHv%2B8340vCgEk9jLTUt51EEPiDNYeVIYO0uw3aY3LS4gjIf4U5rJdeUXMhh%2BfzZh29Y6hen6C9cgioxLqhviv4KogYbljvSOVgYGNn7st9KzO8cPjn6%2FzZPRy9k0nURijftyU3LbakKyDC%2BLhv0IXxDYPS8xXiJdV3iIqTpNd73qG7KOH5rrjbaVNA31GFThcYRZOVKfx%2FM8zR4U9NrS5KBcX5ZuxlYHowMTcLdwx9UWl%2FtbnJEsZleJyQ4YPgAhCeOrfBtLHrscJPWviuhiVxpvbFvINL%2Buagr9C7MNmL38QGOqUB5q998kYaow9T9uTbz0HgazrUEYPwMabJFudn69zSRjIZxLX332KCxm65Oa%2F69zOJolKc96CrZ6fU9o7tJVm8tZEnQ0Q1pOB6UNCuMkBFQZTaLKeWWCH7CMSU%2BdZqM7yH%2BaLZfPapjwZ28dGNIjOCNt8sAOi1%2FaU7RCDfh%2FmaqtRhgUquHTOpb7zX5TbzR0bvRSRenZMrv0Xv%2FFGBS%2BIgOdFholKu&X-Amz-Signature=1d114f7f2b731742d3f7cbe464fa5d1109e1af2ea2fc4b09388af5240c24ab33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLRSSNS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEFKefwzqXyQJxwIvgvuiiyLsN1s1WpBvce9onyfpwUlAiEAlM3QMZFxVIKX2J%2B6nl9e%2Fop5413l2ugZ6pdQy9H0D6QqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLMn6OvMa%2Fkov3rRCrcA4O6VUhuxuRQIuXxBH0mlByfEX8N%2FkDpwY4JIdIQdBIxbdt02Yq%2BUhdzFoI0vWpGUO88qABfjfPkeUPHcToSZKIfkA%2FV5PrTZr5k9EMFRyUGvvdP7uX155qYp1Y5AkViiIyMjDRax4pzmHedYWkeiYQqP77kXCmZSv%2FpbtaKjTLi6cO0mAVDm04CqWa%2B1ExEjLb3mmraIH%2BYruRxR2o0hot1GfBGrtkqgePgpvQ97Vb6e8%2FDhrzyy%2FRW4IFfNyyOt7I9nYRz6jX4FEx%2F1miriKi1l5ycdjISJPxx2zYY5PlGCK0dXJdGToa%2Bq7GzlxS%2BY3fC2bfApZNvEFJg2v8ivQOHv%2B8340vCgEk9jLTUt51EEPiDNYeVIYO0uw3aY3LS4gjIf4U5rJdeUXMhh%2BfzZh29Y6hen6C9cgioxLqhviv4KogYbljvSOVgYGNn7st9KzO8cPjn6%2FzZPRy9k0nURijftyU3LbakKyDC%2BLhv0IXxDYPS8xXiJdV3iIqTpNd73qG7KOH5rrjbaVNA31GFThcYRZOVKfx%2FM8zR4U9NrS5KBcX5ZuxlYHowMTcLdwx9UWl%2FtbnJEsZleJyQ4YPgAhCeOrfBtLHrscJPWviuhiVxpvbFvINL%2Buagr9C7MNmL38QGOqUB5q998kYaow9T9uTbz0HgazrUEYPwMabJFudn69zSRjIZxLX332KCxm65Oa%2F69zOJolKc96CrZ6fU9o7tJVm8tZEnQ0Q1pOB6UNCuMkBFQZTaLKeWWCH7CMSU%2BdZqM7yH%2BaLZfPapjwZ28dGNIjOCNt8sAOi1%2FaU7RCDfh%2FmaqtRhgUquHTOpb7zX5TbzR0bvRSRenZMrv0Xv%2FFGBS%2BIgOdFholKu&X-Amz-Signature=d44373d716847809ecc658e20154463ef0c838dfef775f4e9cbd1d7c0af644dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
