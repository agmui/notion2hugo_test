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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6C22BAF%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLL0sWx9ttjcoxUZQqTJc1F%2FVKH4KGWp0hP7oVpkmezAiBicsoiwK2AGJCNCe%2FrIqdASRqM1GAwIGhNn%2FiaIZbfEiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiDWrjfMDb6ccu9lOKtwDDAxROkbjCtcLw10x2WcIxRfxfKUBnihNM4WDitGbMSd5xNStSTSEmDwzo34erjvlpYrlxcOXUC1YVdKOnwyDE8%2BWu%2FnKgblVz%2B8iSd1%2F2HyzrjnN%2F%2FFppALElLYnNE3xYtSPtF7wDISNJmaWig0WSsW6Wh%2Bd2dW3CXGH3GsCEgr49DoUEOGgWPDAVGP3eQh7a1ireGFpb%2Buq7fBh%2FvlLV%2BpYeGxLglQo%2Ba%2FxFtwWmsiVQNKmpHuT5p61HLycK8N3ss3vx0%2F5ZcoCU2fWrE%2FQGSIrgZgj4ybCaimeMJ0z7kA2vnXYcGPQRNs2NqnaxOkdgXlwAP108X1CSqu8IMeWu8RMrbydw4FrGyEBbgv3cRtePecQsJp5GK7WfxFlexgxRyN3yxD1gR8D9DiKo5Mh0qUKSkNg7d0DyzFTfvMCzUFpGKsgn5J%2BX1RIp570TVxhHq2fKrmT7cMRjTLNZhEcXBKjokOiE0PUrpY2%2Bfm6ir07M7fqmIApwShBJ%2F2pd6RKeJKePEWlPVSdQXRFa4kVNj%2Bbh3G6gjxGwUmhPp5t%2F%2FOQIhdHgOzos4%2Fc6R6pXO%2BoLb7OsmrORpS9LHuQGHvZX0ic8FdomnlOtLoi%2FrQyVRSGaDrkUj2RUmoIio8wq%2FL5ywY6pgHRNfwz7dsgjYT2BXjymAgCL7ET%2F8cWSBWsPbjC%2FCveHLi9HnLa4aUglZNOOufaF%2FFGyObNfID1pBZJ%2B%2BHNLyomh2wPgihhwHsR1AfWr1qKYSapzuSD0q3vwYRexBQXkYEf%2BNC6oa9Vmp06LjKilvA%2Bi4bFWreoAqHgVnuqAYLQgIaOhx4kMuZuxYZnlQRi0%2Fb7K3B2VNO%2BtCW2xqBFbhWctvCoS1in&X-Amz-Signature=59ce8af751b613564eaf2bf36b943d6779d1fe12ecda05b8012eb56be7893673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6DJOY2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38grvxMFW9WiI1nUsuf6t9feqVYdpM3lzyOqO%2FGv%2BIgIhAME5iacUn0C7EKcSQCoYF2ld2623BCC39HQBCEFb3GFXKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfakKpouNUJWxXj5Uq3APk7ezOQ%2Bv58EJ1VHr2hrIIlN0ML78xzK70%2F9GirNfyOsd35GJTzBJMDkALxC1R0YhERkd3YnvxXj9smTZbqFVbH%2BZPrQRPZcLlsrW%2B4TP%2F4Ng3ZJJ3LZ%2FyQgZvFql12HT%2FMjosvGJ%2BdnNErWOd453Fi6sB1gx2E7GYNEED7UvPiA7A65g8d5aYr%2BBuV03Scz42tOE%2FL39SeUj%2BBT81bdd%2FX8RyTnlnMqqBTY7%2B5dM%2FrCEuV7MkbNlccxIXQnOg9C8c9qh4vsMh9f%2FRRDC1pzFeNABNt6s%2Fk0SygDyn7aAP247zasEtn5FO9uZROr6Q4TFIKE86%2BRQhvsaTcl7%2Few4BwDjZUh2RTd24MVdfwa1teQKUxLnKWnEOyTEGybhcc8m4VmdBJLuFNSikzksW1Rn4zCFHD0kL8s97V5V6QVfKPFujk6M7ksYUgW4m6LfDltnuzkY4h3Q%2BVXkE9sea3BZbdt5p0%2BraWzWTKBsMgTJuud09MWIaSkLWXI6SmwU0xG%2F9bfjLQvK%2FrxcRInK4X2lYkTJMgMsw1EX%2FGYulKCau8I4sy4LFg7jiB5WNEek8zIm7NDXV8%2BOaTqUzwMXwghbCi13P47zYpsWcNrMreBCi%2FYJSjXCc3JLU3Kbw3DDu8fnLBjqkAUA21teQ8DsThc6Z1NYwhamPtSS%2B%2BAYYJ40tTe3uBEVloxJWYxgpkKOVonJDDS8EKhaKtriQPHCGC7GaPijp1rC8OaV4z5W3H3TGZxUWGVXGCWUOKw9fYiuR4T7B86wo30F8WntTValPj3m6tWHFNSiUOtTw7HgdjVDj2o40b9ixjHYMegma0hnVHal5%2B5PIQlOE4rOo71VKOsjQ3x9jtsdZZVNd&X-Amz-Signature=e0df0f19f1eba5ebf916b9b4a6ae4831ab17fa229b011166b674a701c17c129f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6DJOY2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38grvxMFW9WiI1nUsuf6t9feqVYdpM3lzyOqO%2FGv%2BIgIhAME5iacUn0C7EKcSQCoYF2ld2623BCC39HQBCEFb3GFXKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfakKpouNUJWxXj5Uq3APk7ezOQ%2Bv58EJ1VHr2hrIIlN0ML78xzK70%2F9GirNfyOsd35GJTzBJMDkALxC1R0YhERkd3YnvxXj9smTZbqFVbH%2BZPrQRPZcLlsrW%2B4TP%2F4Ng3ZJJ3LZ%2FyQgZvFql12HT%2FMjosvGJ%2BdnNErWOd453Fi6sB1gx2E7GYNEED7UvPiA7A65g8d5aYr%2BBuV03Scz42tOE%2FL39SeUj%2BBT81bdd%2FX8RyTnlnMqqBTY7%2B5dM%2FrCEuV7MkbNlccxIXQnOg9C8c9qh4vsMh9f%2FRRDC1pzFeNABNt6s%2Fk0SygDyn7aAP247zasEtn5FO9uZROr6Q4TFIKE86%2BRQhvsaTcl7%2Few4BwDjZUh2RTd24MVdfwa1teQKUxLnKWnEOyTEGybhcc8m4VmdBJLuFNSikzksW1Rn4zCFHD0kL8s97V5V6QVfKPFujk6M7ksYUgW4m6LfDltnuzkY4h3Q%2BVXkE9sea3BZbdt5p0%2BraWzWTKBsMgTJuud09MWIaSkLWXI6SmwU0xG%2F9bfjLQvK%2FrxcRInK4X2lYkTJMgMsw1EX%2FGYulKCau8I4sy4LFg7jiB5WNEek8zIm7NDXV8%2BOaTqUzwMXwghbCi13P47zYpsWcNrMreBCi%2FYJSjXCc3JLU3Kbw3DDu8fnLBjqkAUA21teQ8DsThc6Z1NYwhamPtSS%2B%2BAYYJ40tTe3uBEVloxJWYxgpkKOVonJDDS8EKhaKtriQPHCGC7GaPijp1rC8OaV4z5W3H3TGZxUWGVXGCWUOKw9fYiuR4T7B86wo30F8WntTValPj3m6tWHFNSiUOtTw7HgdjVDj2o40b9ixjHYMegma0hnVHal5%2B5PIQlOE4rOo71VKOsjQ3x9jtsdZZVNd&X-Amz-Signature=fad987e7eb76f87ab9d8afa84a64c57454c54d453be5859389b7ede3c3af9b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6DJOY2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38grvxMFW9WiI1nUsuf6t9feqVYdpM3lzyOqO%2FGv%2BIgIhAME5iacUn0C7EKcSQCoYF2ld2623BCC39HQBCEFb3GFXKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfakKpouNUJWxXj5Uq3APk7ezOQ%2Bv58EJ1VHr2hrIIlN0ML78xzK70%2F9GirNfyOsd35GJTzBJMDkALxC1R0YhERkd3YnvxXj9smTZbqFVbH%2BZPrQRPZcLlsrW%2B4TP%2F4Ng3ZJJ3LZ%2FyQgZvFql12HT%2FMjosvGJ%2BdnNErWOd453Fi6sB1gx2E7GYNEED7UvPiA7A65g8d5aYr%2BBuV03Scz42tOE%2FL39SeUj%2BBT81bdd%2FX8RyTnlnMqqBTY7%2B5dM%2FrCEuV7MkbNlccxIXQnOg9C8c9qh4vsMh9f%2FRRDC1pzFeNABNt6s%2Fk0SygDyn7aAP247zasEtn5FO9uZROr6Q4TFIKE86%2BRQhvsaTcl7%2Few4BwDjZUh2RTd24MVdfwa1teQKUxLnKWnEOyTEGybhcc8m4VmdBJLuFNSikzksW1Rn4zCFHD0kL8s97V5V6QVfKPFujk6M7ksYUgW4m6LfDltnuzkY4h3Q%2BVXkE9sea3BZbdt5p0%2BraWzWTKBsMgTJuud09MWIaSkLWXI6SmwU0xG%2F9bfjLQvK%2FrxcRInK4X2lYkTJMgMsw1EX%2FGYulKCau8I4sy4LFg7jiB5WNEek8zIm7NDXV8%2BOaTqUzwMXwghbCi13P47zYpsWcNrMreBCi%2FYJSjXCc3JLU3Kbw3DDu8fnLBjqkAUA21teQ8DsThc6Z1NYwhamPtSS%2B%2BAYYJ40tTe3uBEVloxJWYxgpkKOVonJDDS8EKhaKtriQPHCGC7GaPijp1rC8OaV4z5W3H3TGZxUWGVXGCWUOKw9fYiuR4T7B86wo30F8WntTValPj3m6tWHFNSiUOtTw7HgdjVDj2o40b9ixjHYMegma0hnVHal5%2B5PIQlOE4rOo71VKOsjQ3x9jtsdZZVNd&X-Amz-Signature=697f4562acb5d7f4590199c2a9665f93c8207e774009be7e912754ce4a10a9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6DJOY2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38grvxMFW9WiI1nUsuf6t9feqVYdpM3lzyOqO%2FGv%2BIgIhAME5iacUn0C7EKcSQCoYF2ld2623BCC39HQBCEFb3GFXKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfakKpouNUJWxXj5Uq3APk7ezOQ%2Bv58EJ1VHr2hrIIlN0ML78xzK70%2F9GirNfyOsd35GJTzBJMDkALxC1R0YhERkd3YnvxXj9smTZbqFVbH%2BZPrQRPZcLlsrW%2B4TP%2F4Ng3ZJJ3LZ%2FyQgZvFql12HT%2FMjosvGJ%2BdnNErWOd453Fi6sB1gx2E7GYNEED7UvPiA7A65g8d5aYr%2BBuV03Scz42tOE%2FL39SeUj%2BBT81bdd%2FX8RyTnlnMqqBTY7%2B5dM%2FrCEuV7MkbNlccxIXQnOg9C8c9qh4vsMh9f%2FRRDC1pzFeNABNt6s%2Fk0SygDyn7aAP247zasEtn5FO9uZROr6Q4TFIKE86%2BRQhvsaTcl7%2Few4BwDjZUh2RTd24MVdfwa1teQKUxLnKWnEOyTEGybhcc8m4VmdBJLuFNSikzksW1Rn4zCFHD0kL8s97V5V6QVfKPFujk6M7ksYUgW4m6LfDltnuzkY4h3Q%2BVXkE9sea3BZbdt5p0%2BraWzWTKBsMgTJuud09MWIaSkLWXI6SmwU0xG%2F9bfjLQvK%2FrxcRInK4X2lYkTJMgMsw1EX%2FGYulKCau8I4sy4LFg7jiB5WNEek8zIm7NDXV8%2BOaTqUzwMXwghbCi13P47zYpsWcNrMreBCi%2FYJSjXCc3JLU3Kbw3DDu8fnLBjqkAUA21teQ8DsThc6Z1NYwhamPtSS%2B%2BAYYJ40tTe3uBEVloxJWYxgpkKOVonJDDS8EKhaKtriQPHCGC7GaPijp1rC8OaV4z5W3H3TGZxUWGVXGCWUOKw9fYiuR4T7B86wo30F8WntTValPj3m6tWHFNSiUOtTw7HgdjVDj2o40b9ixjHYMegma0hnVHal5%2B5PIQlOE4rOo71VKOsjQ3x9jtsdZZVNd&X-Amz-Signature=31f5f58c7cf03451afb4dcbd9ec2a84b3f286c0b1842f847a3dcb16f67a9fd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6DJOY2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38grvxMFW9WiI1nUsuf6t9feqVYdpM3lzyOqO%2FGv%2BIgIhAME5iacUn0C7EKcSQCoYF2ld2623BCC39HQBCEFb3GFXKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfakKpouNUJWxXj5Uq3APk7ezOQ%2Bv58EJ1VHr2hrIIlN0ML78xzK70%2F9GirNfyOsd35GJTzBJMDkALxC1R0YhERkd3YnvxXj9smTZbqFVbH%2BZPrQRPZcLlsrW%2B4TP%2F4Ng3ZJJ3LZ%2FyQgZvFql12HT%2FMjosvGJ%2BdnNErWOd453Fi6sB1gx2E7GYNEED7UvPiA7A65g8d5aYr%2BBuV03Scz42tOE%2FL39SeUj%2BBT81bdd%2FX8RyTnlnMqqBTY7%2B5dM%2FrCEuV7MkbNlccxIXQnOg9C8c9qh4vsMh9f%2FRRDC1pzFeNABNt6s%2Fk0SygDyn7aAP247zasEtn5FO9uZROr6Q4TFIKE86%2BRQhvsaTcl7%2Few4BwDjZUh2RTd24MVdfwa1teQKUxLnKWnEOyTEGybhcc8m4VmdBJLuFNSikzksW1Rn4zCFHD0kL8s97V5V6QVfKPFujk6M7ksYUgW4m6LfDltnuzkY4h3Q%2BVXkE9sea3BZbdt5p0%2BraWzWTKBsMgTJuud09MWIaSkLWXI6SmwU0xG%2F9bfjLQvK%2FrxcRInK4X2lYkTJMgMsw1EX%2FGYulKCau8I4sy4LFg7jiB5WNEek8zIm7NDXV8%2BOaTqUzwMXwghbCi13P47zYpsWcNrMreBCi%2FYJSjXCc3JLU3Kbw3DDu8fnLBjqkAUA21teQ8DsThc6Z1NYwhamPtSS%2B%2BAYYJ40tTe3uBEVloxJWYxgpkKOVonJDDS8EKhaKtriQPHCGC7GaPijp1rC8OaV4z5W3H3TGZxUWGVXGCWUOKw9fYiuR4T7B86wo30F8WntTValPj3m6tWHFNSiUOtTw7HgdjVDj2o40b9ixjHYMegma0hnVHal5%2B5PIQlOE4rOo71VKOsjQ3x9jtsdZZVNd&X-Amz-Signature=707936c6d6a50a4502a4157c02b111d1b0a56cea17a2ddd1d6053c40e0abfec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6DJOY2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38grvxMFW9WiI1nUsuf6t9feqVYdpM3lzyOqO%2FGv%2BIgIhAME5iacUn0C7EKcSQCoYF2ld2623BCC39HQBCEFb3GFXKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfakKpouNUJWxXj5Uq3APk7ezOQ%2Bv58EJ1VHr2hrIIlN0ML78xzK70%2F9GirNfyOsd35GJTzBJMDkALxC1R0YhERkd3YnvxXj9smTZbqFVbH%2BZPrQRPZcLlsrW%2B4TP%2F4Ng3ZJJ3LZ%2FyQgZvFql12HT%2FMjosvGJ%2BdnNErWOd453Fi6sB1gx2E7GYNEED7UvPiA7A65g8d5aYr%2BBuV03Scz42tOE%2FL39SeUj%2BBT81bdd%2FX8RyTnlnMqqBTY7%2B5dM%2FrCEuV7MkbNlccxIXQnOg9C8c9qh4vsMh9f%2FRRDC1pzFeNABNt6s%2Fk0SygDyn7aAP247zasEtn5FO9uZROr6Q4TFIKE86%2BRQhvsaTcl7%2Few4BwDjZUh2RTd24MVdfwa1teQKUxLnKWnEOyTEGybhcc8m4VmdBJLuFNSikzksW1Rn4zCFHD0kL8s97V5V6QVfKPFujk6M7ksYUgW4m6LfDltnuzkY4h3Q%2BVXkE9sea3BZbdt5p0%2BraWzWTKBsMgTJuud09MWIaSkLWXI6SmwU0xG%2F9bfjLQvK%2FrxcRInK4X2lYkTJMgMsw1EX%2FGYulKCau8I4sy4LFg7jiB5WNEek8zIm7NDXV8%2BOaTqUzwMXwghbCi13P47zYpsWcNrMreBCi%2FYJSjXCc3JLU3Kbw3DDu8fnLBjqkAUA21teQ8DsThc6Z1NYwhamPtSS%2B%2BAYYJ40tTe3uBEVloxJWYxgpkKOVonJDDS8EKhaKtriQPHCGC7GaPijp1rC8OaV4z5W3H3TGZxUWGVXGCWUOKw9fYiuR4T7B86wo30F8WntTValPj3m6tWHFNSiUOtTw7HgdjVDj2o40b9ixjHYMegma0hnVHal5%2B5PIQlOE4rOo71VKOsjQ3x9jtsdZZVNd&X-Amz-Signature=ac09b11643adc62706e31a256c3f406aa896a1257553dacec9f1bea07054ecb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6DJOY2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38grvxMFW9WiI1nUsuf6t9feqVYdpM3lzyOqO%2FGv%2BIgIhAME5iacUn0C7EKcSQCoYF2ld2623BCC39HQBCEFb3GFXKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfakKpouNUJWxXj5Uq3APk7ezOQ%2Bv58EJ1VHr2hrIIlN0ML78xzK70%2F9GirNfyOsd35GJTzBJMDkALxC1R0YhERkd3YnvxXj9smTZbqFVbH%2BZPrQRPZcLlsrW%2B4TP%2F4Ng3ZJJ3LZ%2FyQgZvFql12HT%2FMjosvGJ%2BdnNErWOd453Fi6sB1gx2E7GYNEED7UvPiA7A65g8d5aYr%2BBuV03Scz42tOE%2FL39SeUj%2BBT81bdd%2FX8RyTnlnMqqBTY7%2B5dM%2FrCEuV7MkbNlccxIXQnOg9C8c9qh4vsMh9f%2FRRDC1pzFeNABNt6s%2Fk0SygDyn7aAP247zasEtn5FO9uZROr6Q4TFIKE86%2BRQhvsaTcl7%2Few4BwDjZUh2RTd24MVdfwa1teQKUxLnKWnEOyTEGybhcc8m4VmdBJLuFNSikzksW1Rn4zCFHD0kL8s97V5V6QVfKPFujk6M7ksYUgW4m6LfDltnuzkY4h3Q%2BVXkE9sea3BZbdt5p0%2BraWzWTKBsMgTJuud09MWIaSkLWXI6SmwU0xG%2F9bfjLQvK%2FrxcRInK4X2lYkTJMgMsw1EX%2FGYulKCau8I4sy4LFg7jiB5WNEek8zIm7NDXV8%2BOaTqUzwMXwghbCi13P47zYpsWcNrMreBCi%2FYJSjXCc3JLU3Kbw3DDu8fnLBjqkAUA21teQ8DsThc6Z1NYwhamPtSS%2B%2BAYYJ40tTe3uBEVloxJWYxgpkKOVonJDDS8EKhaKtriQPHCGC7GaPijp1rC8OaV4z5W3H3TGZxUWGVXGCWUOKw9fYiuR4T7B86wo30F8WntTValPj3m6tWHFNSiUOtTw7HgdjVDj2o40b9ixjHYMegma0hnVHal5%2B5PIQlOE4rOo71VKOsjQ3x9jtsdZZVNd&X-Amz-Signature=6c004bf1d78f41c58ae065888053822d7b671b27dfa20008decaca2626d8d0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6DJOY2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38grvxMFW9WiI1nUsuf6t9feqVYdpM3lzyOqO%2FGv%2BIgIhAME5iacUn0C7EKcSQCoYF2ld2623BCC39HQBCEFb3GFXKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfakKpouNUJWxXj5Uq3APk7ezOQ%2Bv58EJ1VHr2hrIIlN0ML78xzK70%2F9GirNfyOsd35GJTzBJMDkALxC1R0YhERkd3YnvxXj9smTZbqFVbH%2BZPrQRPZcLlsrW%2B4TP%2F4Ng3ZJJ3LZ%2FyQgZvFql12HT%2FMjosvGJ%2BdnNErWOd453Fi6sB1gx2E7GYNEED7UvPiA7A65g8d5aYr%2BBuV03Scz42tOE%2FL39SeUj%2BBT81bdd%2FX8RyTnlnMqqBTY7%2B5dM%2FrCEuV7MkbNlccxIXQnOg9C8c9qh4vsMh9f%2FRRDC1pzFeNABNt6s%2Fk0SygDyn7aAP247zasEtn5FO9uZROr6Q4TFIKE86%2BRQhvsaTcl7%2Few4BwDjZUh2RTd24MVdfwa1teQKUxLnKWnEOyTEGybhcc8m4VmdBJLuFNSikzksW1Rn4zCFHD0kL8s97V5V6QVfKPFujk6M7ksYUgW4m6LfDltnuzkY4h3Q%2BVXkE9sea3BZbdt5p0%2BraWzWTKBsMgTJuud09MWIaSkLWXI6SmwU0xG%2F9bfjLQvK%2FrxcRInK4X2lYkTJMgMsw1EX%2FGYulKCau8I4sy4LFg7jiB5WNEek8zIm7NDXV8%2BOaTqUzwMXwghbCi13P47zYpsWcNrMreBCi%2FYJSjXCc3JLU3Kbw3DDu8fnLBjqkAUA21teQ8DsThc6Z1NYwhamPtSS%2B%2BAYYJ40tTe3uBEVloxJWYxgpkKOVonJDDS8EKhaKtriQPHCGC7GaPijp1rC8OaV4z5W3H3TGZxUWGVXGCWUOKw9fYiuR4T7B86wo30F8WntTValPj3m6tWHFNSiUOtTw7HgdjVDj2o40b9ixjHYMegma0hnVHal5%2B5PIQlOE4rOo71VKOsjQ3x9jtsdZZVNd&X-Amz-Signature=d062bdd754b55f6c64c1af71d18940e6187fe67e9793ce915559530f4b642d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6DJOY2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38grvxMFW9WiI1nUsuf6t9feqVYdpM3lzyOqO%2FGv%2BIgIhAME5iacUn0C7EKcSQCoYF2ld2623BCC39HQBCEFb3GFXKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfakKpouNUJWxXj5Uq3APk7ezOQ%2Bv58EJ1VHr2hrIIlN0ML78xzK70%2F9GirNfyOsd35GJTzBJMDkALxC1R0YhERkd3YnvxXj9smTZbqFVbH%2BZPrQRPZcLlsrW%2B4TP%2F4Ng3ZJJ3LZ%2FyQgZvFql12HT%2FMjosvGJ%2BdnNErWOd453Fi6sB1gx2E7GYNEED7UvPiA7A65g8d5aYr%2BBuV03Scz42tOE%2FL39SeUj%2BBT81bdd%2FX8RyTnlnMqqBTY7%2B5dM%2FrCEuV7MkbNlccxIXQnOg9C8c9qh4vsMh9f%2FRRDC1pzFeNABNt6s%2Fk0SygDyn7aAP247zasEtn5FO9uZROr6Q4TFIKE86%2BRQhvsaTcl7%2Few4BwDjZUh2RTd24MVdfwa1teQKUxLnKWnEOyTEGybhcc8m4VmdBJLuFNSikzksW1Rn4zCFHD0kL8s97V5V6QVfKPFujk6M7ksYUgW4m6LfDltnuzkY4h3Q%2BVXkE9sea3BZbdt5p0%2BraWzWTKBsMgTJuud09MWIaSkLWXI6SmwU0xG%2F9bfjLQvK%2FrxcRInK4X2lYkTJMgMsw1EX%2FGYulKCau8I4sy4LFg7jiB5WNEek8zIm7NDXV8%2BOaTqUzwMXwghbCi13P47zYpsWcNrMreBCi%2FYJSjXCc3JLU3Kbw3DDu8fnLBjqkAUA21teQ8DsThc6Z1NYwhamPtSS%2B%2BAYYJ40tTe3uBEVloxJWYxgpkKOVonJDDS8EKhaKtriQPHCGC7GaPijp1rC8OaV4z5W3H3TGZxUWGVXGCWUOKw9fYiuR4T7B86wo30F8WntTValPj3m6tWHFNSiUOtTw7HgdjVDj2o40b9ixjHYMegma0hnVHal5%2B5PIQlOE4rOo71VKOsjQ3x9jtsdZZVNd&X-Amz-Signature=e7faa5aea001a8cb150564e5c126fa83311e9ab031ef5b52690b6b0ec095bee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM6DJOY2%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC38grvxMFW9WiI1nUsuf6t9feqVYdpM3lzyOqO%2FGv%2BIgIhAME5iacUn0C7EKcSQCoYF2ld2623BCC39HQBCEFb3GFXKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfakKpouNUJWxXj5Uq3APk7ezOQ%2Bv58EJ1VHr2hrIIlN0ML78xzK70%2F9GirNfyOsd35GJTzBJMDkALxC1R0YhERkd3YnvxXj9smTZbqFVbH%2BZPrQRPZcLlsrW%2B4TP%2F4Ng3ZJJ3LZ%2FyQgZvFql12HT%2FMjosvGJ%2BdnNErWOd453Fi6sB1gx2E7GYNEED7UvPiA7A65g8d5aYr%2BBuV03Scz42tOE%2FL39SeUj%2BBT81bdd%2FX8RyTnlnMqqBTY7%2B5dM%2FrCEuV7MkbNlccxIXQnOg9C8c9qh4vsMh9f%2FRRDC1pzFeNABNt6s%2Fk0SygDyn7aAP247zasEtn5FO9uZROr6Q4TFIKE86%2BRQhvsaTcl7%2Few4BwDjZUh2RTd24MVdfwa1teQKUxLnKWnEOyTEGybhcc8m4VmdBJLuFNSikzksW1Rn4zCFHD0kL8s97V5V6QVfKPFujk6M7ksYUgW4m6LfDltnuzkY4h3Q%2BVXkE9sea3BZbdt5p0%2BraWzWTKBsMgTJuud09MWIaSkLWXI6SmwU0xG%2F9bfjLQvK%2FrxcRInK4X2lYkTJMgMsw1EX%2FGYulKCau8I4sy4LFg7jiB5WNEek8zIm7NDXV8%2BOaTqUzwMXwghbCi13P47zYpsWcNrMreBCi%2FYJSjXCc3JLU3Kbw3DDu8fnLBjqkAUA21teQ8DsThc6Z1NYwhamPtSS%2B%2BAYYJ40tTe3uBEVloxJWYxgpkKOVonJDDS8EKhaKtriQPHCGC7GaPijp1rC8OaV4z5W3H3TGZxUWGVXGCWUOKw9fYiuR4T7B86wo30F8WntTValPj3m6tWHFNSiUOtTw7HgdjVDj2o40b9ixjHYMegma0hnVHal5%2B5PIQlOE4rOo71VKOsjQ3x9jtsdZZVNd&X-Amz-Signature=52a329f46b7b972783df635a83e670aeee287c4406801a6ee14672f628584b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
