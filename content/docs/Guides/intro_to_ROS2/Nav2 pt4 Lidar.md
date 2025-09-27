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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HYRP6RH%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDDA48H7w%2BkFeAU78w3%2BZsJWHymrVc6U2tgUTeT5RAsdAiEA8NLc7147pxAzgqaViVIxZp8DKCrzn61u%2Bp%2BnnWQDeUIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLleFp7IMN79XOYhCrcA5u3eObIvfARt3oaF1xDed2r0%2BlEYdk%2FO35%2BgYCrV3GsAhCINZubiYhK3KSGDj2cQn%2FQgzM%2B0OfHYTdurzmX2lOC%2F3N7W71CTXpoKVnd%2B8yEtsFnZpAfx8Zpw1YXNYRR%2FgguR%2Fu%2FRppxU1t9hL8w77jUnGXplm7fYqV4UV5L6ZmJLefqFYHODpVTZONt3Rv%2F%2FN%2FAjtQfuxMeIisvXKNgYh3%2F1eYTZ4rAxz1zyxZADv4XaeseEob9myE8%2FS%2BqjUIqQYk1%2Bjbv%2BrY1B%2F8yvAtHbmnOL%2Fz8NDcV2TfRCHYmd0fw7CNUQhJQWy6l6jgiAMoeRtwvmagp149ZM2wb4yPrTpEJVKysz162Wjmluv8uslcZTKBhwjR8hrFW4MZbRmbL8N74rA0FpvKqneNGx7exszqNxY37Nl84jrF5q3nukaSvp%2FHFH90NMFQlMeMDULFTkrL8z6fHdSNdPemXsi6y3cquNn%2FC0n5dMccuMprfbn0J9ni%2B2Pj3HagHgmV5BxDE2Lxb0l%2Fm%2F4X2ri3Ua5Rc7IRq2wam0FTthYzJX6b%2BiFwvn3zj936ubLIIDcCRaf2%2F3dtJ%2FGr4FcWFNXuEzlcBlE0sc%2BL9iPx6sINrKmilp0wzkbvZJDPwNYDDUegJMJ7n3MYGOqUBSq%2FBReN4LSxJW1W9cMAIx1nibNYQ%2F4Ig%2FbsYsaqbm6lHkuOzsNFJGlHn6ccGRSBES8D%2BfsklBewvYfmNyI0fEPy4LeSXJKTNhDF%2FNv8pQ21XWO6P%2BG88E1Ym5M6%2Bbj8am%2FyINPHL3IaPfOakNsVDZGM%2BnWCuww%2Bp8t6vlMIFhlKZ%2F4A6sKosi1GKWH%2Fz5uedhy%2FaD8ZoKKJ6XXc18Duo0x2YnGLn&X-Amz-Signature=2fef27843667f0a43563919644e961378baec723b93a8fb027bc2da433faa76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNUKBVE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIi1aGgeAVfDDhHUQAh%2FUAU7cjOB%2BR9dHRAatr6MfThAiBzRHE7bKYm9gC0NsVGYScGRHp%2Bkf2yj4yGCLyphm1jIyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr73HgQYwzJD0EExKtwDPID7WnmYZTw7kveHF%2FwTMgOjeXg7HuliHi%2Fg%2BcIXkv9rrQktsnAiwfxd53YpwmjWuq91TppqSWXD6C4AkpfjifYC8cvgrZxDjTNrsA3W%2Bq8wkdaAZb%2FbQHLPeF3I4MJsilhJJj486fOHV5kuWvKk1RcjQPYUVWQHbc5uchNxuS%2FAp13g%2FPca1WBtSUUEpZEuK5E4Kl%2BpQWGCR5aL79yTfnI%2B5y2XmtQJGHn4MNkKrG1Dq8AX5lbIs%2FqBq8abf9neJcNZay0VuRJzQh4Yi4IhrWAOtwn06y9tSMMjSjDPlG7Vkawkg%2BxxTbqPWzCkKzNQ8li1G4eg3jyqzg1vzTrqLqlnKI0A%2FiNyypald3K6eGnRmA7ZHzXDoNxZmSpEgVydQdwHvdEXDdAYmhTwX1Z0xamq3cYgGhxIFjtKZ%2FaTFVpdSNunU9uyrBuKkJnVReiesnymA6AQLFFQwvO0dUmHjo4b%2Fsowyv%2BnXxAMqjbGw8w5SkuwjWQE0crB6mR6%2B5TTN2GGrk%2FS80Y2FOOpHQZE4JKMk3Kz8ibbVNafNuMPpWJr8O3n3dAyJKfBF3k%2FLG5%2FLF%2BWNuZeAP%2BK8wXcwMSXcpo3NO4W1jqmXwVkbX86rBZ12VoBM0i%2F9Y5nUO4wn%2BfcxgY6pgEUw17iWKtvAAheKYgCtYSyqmwhr79GLhntt2xJ2sOOwNwCucRA5LDvjNeT660MwJBtf1NyWBGbeDBCgbYwROenJbw0YJ%2BzWv%2Fsn5iXf9xmYeoA80VaGNG%2BZeWz7Lj53AgUQVFHbHolsvH1%2FeCL2ER8oshnvK3cWIJ3yQbuX%2F1EoxTnfkkCbSadSB2eLvIypcoNIcb1RCNZFuD4Hah5GBq%2Fb3PUKyva&X-Amz-Signature=3cb3316186b9fc519bd368dc745d129651f7dcbcab6ca45372ce1238efbdbb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNUKBVE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIi1aGgeAVfDDhHUQAh%2FUAU7cjOB%2BR9dHRAatr6MfThAiBzRHE7bKYm9gC0NsVGYScGRHp%2Bkf2yj4yGCLyphm1jIyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr73HgQYwzJD0EExKtwDPID7WnmYZTw7kveHF%2FwTMgOjeXg7HuliHi%2Fg%2BcIXkv9rrQktsnAiwfxd53YpwmjWuq91TppqSWXD6C4AkpfjifYC8cvgrZxDjTNrsA3W%2Bq8wkdaAZb%2FbQHLPeF3I4MJsilhJJj486fOHV5kuWvKk1RcjQPYUVWQHbc5uchNxuS%2FAp13g%2FPca1WBtSUUEpZEuK5E4Kl%2BpQWGCR5aL79yTfnI%2B5y2XmtQJGHn4MNkKrG1Dq8AX5lbIs%2FqBq8abf9neJcNZay0VuRJzQh4Yi4IhrWAOtwn06y9tSMMjSjDPlG7Vkawkg%2BxxTbqPWzCkKzNQ8li1G4eg3jyqzg1vzTrqLqlnKI0A%2FiNyypald3K6eGnRmA7ZHzXDoNxZmSpEgVydQdwHvdEXDdAYmhTwX1Z0xamq3cYgGhxIFjtKZ%2FaTFVpdSNunU9uyrBuKkJnVReiesnymA6AQLFFQwvO0dUmHjo4b%2Fsowyv%2BnXxAMqjbGw8w5SkuwjWQE0crB6mR6%2B5TTN2GGrk%2FS80Y2FOOpHQZE4JKMk3Kz8ibbVNafNuMPpWJr8O3n3dAyJKfBF3k%2FLG5%2FLF%2BWNuZeAP%2BK8wXcwMSXcpo3NO4W1jqmXwVkbX86rBZ12VoBM0i%2F9Y5nUO4wn%2BfcxgY6pgEUw17iWKtvAAheKYgCtYSyqmwhr79GLhntt2xJ2sOOwNwCucRA5LDvjNeT660MwJBtf1NyWBGbeDBCgbYwROenJbw0YJ%2BzWv%2Fsn5iXf9xmYeoA80VaGNG%2BZeWz7Lj53AgUQVFHbHolsvH1%2FeCL2ER8oshnvK3cWIJ3yQbuX%2F1EoxTnfkkCbSadSB2eLvIypcoNIcb1RCNZFuD4Hah5GBq%2Fb3PUKyva&X-Amz-Signature=67ebff9796b1656fd312d08c3978a4e7e2c448255048efe3419389740e023091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNUKBVE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIi1aGgeAVfDDhHUQAh%2FUAU7cjOB%2BR9dHRAatr6MfThAiBzRHE7bKYm9gC0NsVGYScGRHp%2Bkf2yj4yGCLyphm1jIyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr73HgQYwzJD0EExKtwDPID7WnmYZTw7kveHF%2FwTMgOjeXg7HuliHi%2Fg%2BcIXkv9rrQktsnAiwfxd53YpwmjWuq91TppqSWXD6C4AkpfjifYC8cvgrZxDjTNrsA3W%2Bq8wkdaAZb%2FbQHLPeF3I4MJsilhJJj486fOHV5kuWvKk1RcjQPYUVWQHbc5uchNxuS%2FAp13g%2FPca1WBtSUUEpZEuK5E4Kl%2BpQWGCR5aL79yTfnI%2B5y2XmtQJGHn4MNkKrG1Dq8AX5lbIs%2FqBq8abf9neJcNZay0VuRJzQh4Yi4IhrWAOtwn06y9tSMMjSjDPlG7Vkawkg%2BxxTbqPWzCkKzNQ8li1G4eg3jyqzg1vzTrqLqlnKI0A%2FiNyypald3K6eGnRmA7ZHzXDoNxZmSpEgVydQdwHvdEXDdAYmhTwX1Z0xamq3cYgGhxIFjtKZ%2FaTFVpdSNunU9uyrBuKkJnVReiesnymA6AQLFFQwvO0dUmHjo4b%2Fsowyv%2BnXxAMqjbGw8w5SkuwjWQE0crB6mR6%2B5TTN2GGrk%2FS80Y2FOOpHQZE4JKMk3Kz8ibbVNafNuMPpWJr8O3n3dAyJKfBF3k%2FLG5%2FLF%2BWNuZeAP%2BK8wXcwMSXcpo3NO4W1jqmXwVkbX86rBZ12VoBM0i%2F9Y5nUO4wn%2BfcxgY6pgEUw17iWKtvAAheKYgCtYSyqmwhr79GLhntt2xJ2sOOwNwCucRA5LDvjNeT660MwJBtf1NyWBGbeDBCgbYwROenJbw0YJ%2BzWv%2Fsn5iXf9xmYeoA80VaGNG%2BZeWz7Lj53AgUQVFHbHolsvH1%2FeCL2ER8oshnvK3cWIJ3yQbuX%2F1EoxTnfkkCbSadSB2eLvIypcoNIcb1RCNZFuD4Hah5GBq%2Fb3PUKyva&X-Amz-Signature=e95539964a8e73558e64ca1afb8aecac41a2e5533c07b769a00071c7d6b667ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNUKBVE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIi1aGgeAVfDDhHUQAh%2FUAU7cjOB%2BR9dHRAatr6MfThAiBzRHE7bKYm9gC0NsVGYScGRHp%2Bkf2yj4yGCLyphm1jIyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr73HgQYwzJD0EExKtwDPID7WnmYZTw7kveHF%2FwTMgOjeXg7HuliHi%2Fg%2BcIXkv9rrQktsnAiwfxd53YpwmjWuq91TppqSWXD6C4AkpfjifYC8cvgrZxDjTNrsA3W%2Bq8wkdaAZb%2FbQHLPeF3I4MJsilhJJj486fOHV5kuWvKk1RcjQPYUVWQHbc5uchNxuS%2FAp13g%2FPca1WBtSUUEpZEuK5E4Kl%2BpQWGCR5aL79yTfnI%2B5y2XmtQJGHn4MNkKrG1Dq8AX5lbIs%2FqBq8abf9neJcNZay0VuRJzQh4Yi4IhrWAOtwn06y9tSMMjSjDPlG7Vkawkg%2BxxTbqPWzCkKzNQ8li1G4eg3jyqzg1vzTrqLqlnKI0A%2FiNyypald3K6eGnRmA7ZHzXDoNxZmSpEgVydQdwHvdEXDdAYmhTwX1Z0xamq3cYgGhxIFjtKZ%2FaTFVpdSNunU9uyrBuKkJnVReiesnymA6AQLFFQwvO0dUmHjo4b%2Fsowyv%2BnXxAMqjbGw8w5SkuwjWQE0crB6mR6%2B5TTN2GGrk%2FS80Y2FOOpHQZE4JKMk3Kz8ibbVNafNuMPpWJr8O3n3dAyJKfBF3k%2FLG5%2FLF%2BWNuZeAP%2BK8wXcwMSXcpo3NO4W1jqmXwVkbX86rBZ12VoBM0i%2F9Y5nUO4wn%2BfcxgY6pgEUw17iWKtvAAheKYgCtYSyqmwhr79GLhntt2xJ2sOOwNwCucRA5LDvjNeT660MwJBtf1NyWBGbeDBCgbYwROenJbw0YJ%2BzWv%2Fsn5iXf9xmYeoA80VaGNG%2BZeWz7Lj53AgUQVFHbHolsvH1%2FeCL2ER8oshnvK3cWIJ3yQbuX%2F1EoxTnfkkCbSadSB2eLvIypcoNIcb1RCNZFuD4Hah5GBq%2Fb3PUKyva&X-Amz-Signature=1e6157b37399f10bd090f08f917b9dfc24214c433d31ef8cce985a90dbba18cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNUKBVE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIi1aGgeAVfDDhHUQAh%2FUAU7cjOB%2BR9dHRAatr6MfThAiBzRHE7bKYm9gC0NsVGYScGRHp%2Bkf2yj4yGCLyphm1jIyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr73HgQYwzJD0EExKtwDPID7WnmYZTw7kveHF%2FwTMgOjeXg7HuliHi%2Fg%2BcIXkv9rrQktsnAiwfxd53YpwmjWuq91TppqSWXD6C4AkpfjifYC8cvgrZxDjTNrsA3W%2Bq8wkdaAZb%2FbQHLPeF3I4MJsilhJJj486fOHV5kuWvKk1RcjQPYUVWQHbc5uchNxuS%2FAp13g%2FPca1WBtSUUEpZEuK5E4Kl%2BpQWGCR5aL79yTfnI%2B5y2XmtQJGHn4MNkKrG1Dq8AX5lbIs%2FqBq8abf9neJcNZay0VuRJzQh4Yi4IhrWAOtwn06y9tSMMjSjDPlG7Vkawkg%2BxxTbqPWzCkKzNQ8li1G4eg3jyqzg1vzTrqLqlnKI0A%2FiNyypald3K6eGnRmA7ZHzXDoNxZmSpEgVydQdwHvdEXDdAYmhTwX1Z0xamq3cYgGhxIFjtKZ%2FaTFVpdSNunU9uyrBuKkJnVReiesnymA6AQLFFQwvO0dUmHjo4b%2Fsowyv%2BnXxAMqjbGw8w5SkuwjWQE0crB6mR6%2B5TTN2GGrk%2FS80Y2FOOpHQZE4JKMk3Kz8ibbVNafNuMPpWJr8O3n3dAyJKfBF3k%2FLG5%2FLF%2BWNuZeAP%2BK8wXcwMSXcpo3NO4W1jqmXwVkbX86rBZ12VoBM0i%2F9Y5nUO4wn%2BfcxgY6pgEUw17iWKtvAAheKYgCtYSyqmwhr79GLhntt2xJ2sOOwNwCucRA5LDvjNeT660MwJBtf1NyWBGbeDBCgbYwROenJbw0YJ%2BzWv%2Fsn5iXf9xmYeoA80VaGNG%2BZeWz7Lj53AgUQVFHbHolsvH1%2FeCL2ER8oshnvK3cWIJ3yQbuX%2F1EoxTnfkkCbSadSB2eLvIypcoNIcb1RCNZFuD4Hah5GBq%2Fb3PUKyva&X-Amz-Signature=bb4d4ee23b7ee90a7c47de3751fe3e9595e7e66ad630661e3b4f7acc31954993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNUKBVE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIi1aGgeAVfDDhHUQAh%2FUAU7cjOB%2BR9dHRAatr6MfThAiBzRHE7bKYm9gC0NsVGYScGRHp%2Bkf2yj4yGCLyphm1jIyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr73HgQYwzJD0EExKtwDPID7WnmYZTw7kveHF%2FwTMgOjeXg7HuliHi%2Fg%2BcIXkv9rrQktsnAiwfxd53YpwmjWuq91TppqSWXD6C4AkpfjifYC8cvgrZxDjTNrsA3W%2Bq8wkdaAZb%2FbQHLPeF3I4MJsilhJJj486fOHV5kuWvKk1RcjQPYUVWQHbc5uchNxuS%2FAp13g%2FPca1WBtSUUEpZEuK5E4Kl%2BpQWGCR5aL79yTfnI%2B5y2XmtQJGHn4MNkKrG1Dq8AX5lbIs%2FqBq8abf9neJcNZay0VuRJzQh4Yi4IhrWAOtwn06y9tSMMjSjDPlG7Vkawkg%2BxxTbqPWzCkKzNQ8li1G4eg3jyqzg1vzTrqLqlnKI0A%2FiNyypald3K6eGnRmA7ZHzXDoNxZmSpEgVydQdwHvdEXDdAYmhTwX1Z0xamq3cYgGhxIFjtKZ%2FaTFVpdSNunU9uyrBuKkJnVReiesnymA6AQLFFQwvO0dUmHjo4b%2Fsowyv%2BnXxAMqjbGw8w5SkuwjWQE0crB6mR6%2B5TTN2GGrk%2FS80Y2FOOpHQZE4JKMk3Kz8ibbVNafNuMPpWJr8O3n3dAyJKfBF3k%2FLG5%2FLF%2BWNuZeAP%2BK8wXcwMSXcpo3NO4W1jqmXwVkbX86rBZ12VoBM0i%2F9Y5nUO4wn%2BfcxgY6pgEUw17iWKtvAAheKYgCtYSyqmwhr79GLhntt2xJ2sOOwNwCucRA5LDvjNeT660MwJBtf1NyWBGbeDBCgbYwROenJbw0YJ%2BzWv%2Fsn5iXf9xmYeoA80VaGNG%2BZeWz7Lj53AgUQVFHbHolsvH1%2FeCL2ER8oshnvK3cWIJ3yQbuX%2F1EoxTnfkkCbSadSB2eLvIypcoNIcb1RCNZFuD4Hah5GBq%2Fb3PUKyva&X-Amz-Signature=cd664e8fbb2f4fc69b4f3f4855e07b31f22dc310736f9582097d3bf5b4418058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNUKBVE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIi1aGgeAVfDDhHUQAh%2FUAU7cjOB%2BR9dHRAatr6MfThAiBzRHE7bKYm9gC0NsVGYScGRHp%2Bkf2yj4yGCLyphm1jIyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr73HgQYwzJD0EExKtwDPID7WnmYZTw7kveHF%2FwTMgOjeXg7HuliHi%2Fg%2BcIXkv9rrQktsnAiwfxd53YpwmjWuq91TppqSWXD6C4AkpfjifYC8cvgrZxDjTNrsA3W%2Bq8wkdaAZb%2FbQHLPeF3I4MJsilhJJj486fOHV5kuWvKk1RcjQPYUVWQHbc5uchNxuS%2FAp13g%2FPca1WBtSUUEpZEuK5E4Kl%2BpQWGCR5aL79yTfnI%2B5y2XmtQJGHn4MNkKrG1Dq8AX5lbIs%2FqBq8abf9neJcNZay0VuRJzQh4Yi4IhrWAOtwn06y9tSMMjSjDPlG7Vkawkg%2BxxTbqPWzCkKzNQ8li1G4eg3jyqzg1vzTrqLqlnKI0A%2FiNyypald3K6eGnRmA7ZHzXDoNxZmSpEgVydQdwHvdEXDdAYmhTwX1Z0xamq3cYgGhxIFjtKZ%2FaTFVpdSNunU9uyrBuKkJnVReiesnymA6AQLFFQwvO0dUmHjo4b%2Fsowyv%2BnXxAMqjbGw8w5SkuwjWQE0crB6mR6%2B5TTN2GGrk%2FS80Y2FOOpHQZE4JKMk3Kz8ibbVNafNuMPpWJr8O3n3dAyJKfBF3k%2FLG5%2FLF%2BWNuZeAP%2BK8wXcwMSXcpo3NO4W1jqmXwVkbX86rBZ12VoBM0i%2F9Y5nUO4wn%2BfcxgY6pgEUw17iWKtvAAheKYgCtYSyqmwhr79GLhntt2xJ2sOOwNwCucRA5LDvjNeT660MwJBtf1NyWBGbeDBCgbYwROenJbw0YJ%2BzWv%2Fsn5iXf9xmYeoA80VaGNG%2BZeWz7Lj53AgUQVFHbHolsvH1%2FeCL2ER8oshnvK3cWIJ3yQbuX%2F1EoxTnfkkCbSadSB2eLvIypcoNIcb1RCNZFuD4Hah5GBq%2Fb3PUKyva&X-Amz-Signature=01535bcf5cf265cd3695989e615bdb76dc1041c0394fed128ed088e85f9b78b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNUKBVE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIi1aGgeAVfDDhHUQAh%2FUAU7cjOB%2BR9dHRAatr6MfThAiBzRHE7bKYm9gC0NsVGYScGRHp%2Bkf2yj4yGCLyphm1jIyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr73HgQYwzJD0EExKtwDPID7WnmYZTw7kveHF%2FwTMgOjeXg7HuliHi%2Fg%2BcIXkv9rrQktsnAiwfxd53YpwmjWuq91TppqSWXD6C4AkpfjifYC8cvgrZxDjTNrsA3W%2Bq8wkdaAZb%2FbQHLPeF3I4MJsilhJJj486fOHV5kuWvKk1RcjQPYUVWQHbc5uchNxuS%2FAp13g%2FPca1WBtSUUEpZEuK5E4Kl%2BpQWGCR5aL79yTfnI%2B5y2XmtQJGHn4MNkKrG1Dq8AX5lbIs%2FqBq8abf9neJcNZay0VuRJzQh4Yi4IhrWAOtwn06y9tSMMjSjDPlG7Vkawkg%2BxxTbqPWzCkKzNQ8li1G4eg3jyqzg1vzTrqLqlnKI0A%2FiNyypald3K6eGnRmA7ZHzXDoNxZmSpEgVydQdwHvdEXDdAYmhTwX1Z0xamq3cYgGhxIFjtKZ%2FaTFVpdSNunU9uyrBuKkJnVReiesnymA6AQLFFQwvO0dUmHjo4b%2Fsowyv%2BnXxAMqjbGw8w5SkuwjWQE0crB6mR6%2B5TTN2GGrk%2FS80Y2FOOpHQZE4JKMk3Kz8ibbVNafNuMPpWJr8O3n3dAyJKfBF3k%2FLG5%2FLF%2BWNuZeAP%2BK8wXcwMSXcpo3NO4W1jqmXwVkbX86rBZ12VoBM0i%2F9Y5nUO4wn%2BfcxgY6pgEUw17iWKtvAAheKYgCtYSyqmwhr79GLhntt2xJ2sOOwNwCucRA5LDvjNeT660MwJBtf1NyWBGbeDBCgbYwROenJbw0YJ%2BzWv%2Fsn5iXf9xmYeoA80VaGNG%2BZeWz7Lj53AgUQVFHbHolsvH1%2FeCL2ER8oshnvK3cWIJ3yQbuX%2F1EoxTnfkkCbSadSB2eLvIypcoNIcb1RCNZFuD4Hah5GBq%2Fb3PUKyva&X-Amz-Signature=b8db2872e1d57b8df1ba7b8ef5ce4c472eeb2aecf177c772565be1e718e7be90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNUKBVE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIi1aGgeAVfDDhHUQAh%2FUAU7cjOB%2BR9dHRAatr6MfThAiBzRHE7bKYm9gC0NsVGYScGRHp%2Bkf2yj4yGCLyphm1jIyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr73HgQYwzJD0EExKtwDPID7WnmYZTw7kveHF%2FwTMgOjeXg7HuliHi%2Fg%2BcIXkv9rrQktsnAiwfxd53YpwmjWuq91TppqSWXD6C4AkpfjifYC8cvgrZxDjTNrsA3W%2Bq8wkdaAZb%2FbQHLPeF3I4MJsilhJJj486fOHV5kuWvKk1RcjQPYUVWQHbc5uchNxuS%2FAp13g%2FPca1WBtSUUEpZEuK5E4Kl%2BpQWGCR5aL79yTfnI%2B5y2XmtQJGHn4MNkKrG1Dq8AX5lbIs%2FqBq8abf9neJcNZay0VuRJzQh4Yi4IhrWAOtwn06y9tSMMjSjDPlG7Vkawkg%2BxxTbqPWzCkKzNQ8li1G4eg3jyqzg1vzTrqLqlnKI0A%2FiNyypald3K6eGnRmA7ZHzXDoNxZmSpEgVydQdwHvdEXDdAYmhTwX1Z0xamq3cYgGhxIFjtKZ%2FaTFVpdSNunU9uyrBuKkJnVReiesnymA6AQLFFQwvO0dUmHjo4b%2Fsowyv%2BnXxAMqjbGw8w5SkuwjWQE0crB6mR6%2B5TTN2GGrk%2FS80Y2FOOpHQZE4JKMk3Kz8ibbVNafNuMPpWJr8O3n3dAyJKfBF3k%2FLG5%2FLF%2BWNuZeAP%2BK8wXcwMSXcpo3NO4W1jqmXwVkbX86rBZ12VoBM0i%2F9Y5nUO4wn%2BfcxgY6pgEUw17iWKtvAAheKYgCtYSyqmwhr79GLhntt2xJ2sOOwNwCucRA5LDvjNeT660MwJBtf1NyWBGbeDBCgbYwROenJbw0YJ%2BzWv%2Fsn5iXf9xmYeoA80VaGNG%2BZeWz7Lj53AgUQVFHbHolsvH1%2FeCL2ER8oshnvK3cWIJ3yQbuX%2F1EoxTnfkkCbSadSB2eLvIypcoNIcb1RCNZFuD4Hah5GBq%2Fb3PUKyva&X-Amz-Signature=a801f03f84d5cdc471a62d2ed75c460bf23ca7258e04cf592921436e6ae9b535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TNUKBVE%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBIi1aGgeAVfDDhHUQAh%2FUAU7cjOB%2BR9dHRAatr6MfThAiBzRHE7bKYm9gC0NsVGYScGRHp%2Bkf2yj4yGCLyphm1jIyqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZr73HgQYwzJD0EExKtwDPID7WnmYZTw7kveHF%2FwTMgOjeXg7HuliHi%2Fg%2BcIXkv9rrQktsnAiwfxd53YpwmjWuq91TppqSWXD6C4AkpfjifYC8cvgrZxDjTNrsA3W%2Bq8wkdaAZb%2FbQHLPeF3I4MJsilhJJj486fOHV5kuWvKk1RcjQPYUVWQHbc5uchNxuS%2FAp13g%2FPca1WBtSUUEpZEuK5E4Kl%2BpQWGCR5aL79yTfnI%2B5y2XmtQJGHn4MNkKrG1Dq8AX5lbIs%2FqBq8abf9neJcNZay0VuRJzQh4Yi4IhrWAOtwn06y9tSMMjSjDPlG7Vkawkg%2BxxTbqPWzCkKzNQ8li1G4eg3jyqzg1vzTrqLqlnKI0A%2FiNyypald3K6eGnRmA7ZHzXDoNxZmSpEgVydQdwHvdEXDdAYmhTwX1Z0xamq3cYgGhxIFjtKZ%2FaTFVpdSNunU9uyrBuKkJnVReiesnymA6AQLFFQwvO0dUmHjo4b%2Fsowyv%2BnXxAMqjbGw8w5SkuwjWQE0crB6mR6%2B5TTN2GGrk%2FS80Y2FOOpHQZE4JKMk3Kz8ibbVNafNuMPpWJr8O3n3dAyJKfBF3k%2FLG5%2FLF%2BWNuZeAP%2BK8wXcwMSXcpo3NO4W1jqmXwVkbX86rBZ12VoBM0i%2F9Y5nUO4wn%2BfcxgY6pgEUw17iWKtvAAheKYgCtYSyqmwhr79GLhntt2xJ2sOOwNwCucRA5LDvjNeT660MwJBtf1NyWBGbeDBCgbYwROenJbw0YJ%2BzWv%2Fsn5iXf9xmYeoA80VaGNG%2BZeWz7Lj53AgUQVFHbHolsvH1%2FeCL2ER8oshnvK3cWIJ3yQbuX%2F1EoxTnfkkCbSadSB2eLvIypcoNIcb1RCNZFuD4Hah5GBq%2Fb3PUKyva&X-Amz-Signature=d401960d54923c2a14a32958797834be89edb06250a8eb1e4de5e5f150add6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
