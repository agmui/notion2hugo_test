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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPFFSTAY%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHSzlxAnjpeml7MSGxnuq5rwWKI1RFim6e5tJCcSadpkAiBfgYmg%2FQEd%2BEK1V3lGGKQ0GiYY3%2BNxSNwKmHTh1pAiKir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMt%2FJIT%2F%2FtkQM%2FrajPKtwDw%2FAq2HgV%2FfM2tenyU2Yc8ocoiVWGnGZjGN47PoP%2Fm8NdV58NERQQvdll%2BrSl8Fu8OPqaqPqQ0fkrjlNRj562x%2BhUayLtH6mYflZdPXXgv%2B7kizz8eyXezmE2XNXdQl4sn0qAkB63Q9%2FwW6zEKpw3p8Gaoyzu4XAo4NdJ81h9gio9vHzFT3IGrdqkVH32JUa2qmYxjCleiRd1qGxrJSqSGiQ8bcSJU1um02OSHgVb0iUq16fGwBpnudx1%2FIz7dIybDlFCem6KOatuSpdr3mIzi2zQyh0PRnkxQyek%2BiBOBrltnvr4wXQtZfo1rwdr5U1ZlA7D1PoRQZH1asiQbwibrGtv9Yec2mr9V1oKPzdcXOcvy0OR6ooHavlT680tG%2BYpOs3aVXsMrThn15oGGg2np3lHzXc9qN3KKz%2FSTKtj%2FA%2F3e%2BrRf9a39LU2wsKZyJeoJeFIkWxyjhv7Ub5yK1Mf1gdQtVxDphanEavqt5bFeXB%2BtRuDmD646UArlVOvRw74%2F6I7LXZeU1h0A%2Fh0eIGDaKwCMhQqzsGWgHbmj0mHudC1%2BiNCWRQJx0iAbcMd9sM%2FQLJMl%2BTde2pn%2FIG53Na5y3eQ71y2Pqcd%2BKQrAj00N7yvtYnbu0uyb1Kev4Iw8qjVzwY6pgGGkUkgr6qH8wdS0CA4%2FeR7s4h1NmdOCA6tJY0gylNTNzPMAtu96pJlEnRDaai5a0iXyGd3QOB6x1Jrub0iEvo9Pkuljc5OZNVyyk%2Femv%2BWPsCCY135ECbVIq2dbfpP9JsTRZUInXwY%2FzdmMDq4YShzl5%2F94vfzX22JkbdiK2DcFrAC%2BbJhXq6eBE%2BcK4NDyLL2g71QyqKfC9i7TXmOuSDTzs5Cs%2BMU&X-Amz-Signature=4b08b55a714a885163d717a5544feac4d6cc980a670232d7f5fa6f20a9468bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YRHMH%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCbDgJdjQ1KUaevpp3v0M8WgSJ70qSYNQkOhuXZrD8qVgIhAO1V%2BtwOu2ZEGMyUCjebXD5o%2Brj6M8%2Fz95O0TA36Th6qKv8DCDQQABoMNjM3NDIzMTgzODA1Igx9tC8lDgPqdHKrMr0q3ANFBh0Tul%2Foa8fQ8s6f6Y2qlAnQfjvpsni5rNzjDX6imV87DCg%2FrH93D624DxfwZnjAMW%2FYd8CVdNz3cpY2C3KQu5U07GeujaAEHZIcygznyk1HuJQpeni5R5%2FpPEuGshJPGksgdq5Y3jlSAmy%2Ft4GC5KGQghPOABXsabWFB72%2FNABJ7K0boaYJVtLncHlP8t4UdHV5kbtKu4T%2BijeHj6pRQ7mIPL6XdcwEemztguJFEcDYCcy9qXkGWWDA%2F0TmYsw9ler9jR4KmQQGPG2JJ2Mjl3VkQjdIhBkixQ%2Fj9eyJ0KskgEFETrAjW3amg55Inje7U7Jg5m57OB9ddCnVB%2FWEg17shfM0dZenZPhP8cgjY8GQkVgkj1MOEFLkVcwTfn6pD%2BeBeib9UKsZlXTDv%2BUGJ0iSyT1nofHHugGopH%2BIONWgrs48lPMEwq4QbYunTU%2FCe5oj8azJ3%2BQTFX6%2BjfCrIT%2FWVV3hiGCSmjl9AqOZn9rYJF5gKhmjs%2BFXSfpIU48dSSUE2CR7HxmRl0nHmeaiU%2Fvl5HYlbUcI3PjMBy1pPs%2Bb6kp7tfwlapsZgAedmeK0Y%2Bb06TUc884Aa3FeIYs3Sa%2FSt3kgFQ38g%2F7WOdiz4wJJ3xk5Zsqg%2FmRQADDyydXPBjqkAdWvQTwy78u%2FP7FqnPpc%2ByMjhRNEDTsvwQ8pYzLXBMT0cDkGJPNbFirUMOQ6s4pMM5ls25oI1sjxdjeeBA8txm5tRH%2BlVJlcq%2FyGyTXCEenZe7HdtU63LF4xlRxDjDMPkr8clnrQf4CyUMgykOJ94njjbOiFEMvNjTjsi88UescrCc%2BGu7T6bPaL5FxhJn9AadvzXBjCJEEaf93IOabbMIOPwH4v&X-Amz-Signature=feba789cd74eb49bff81f21464025214715baa94795061996ce7265e0c2ebb0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YRHMH%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCbDgJdjQ1KUaevpp3v0M8WgSJ70qSYNQkOhuXZrD8qVgIhAO1V%2BtwOu2ZEGMyUCjebXD5o%2Brj6M8%2Fz95O0TA36Th6qKv8DCDQQABoMNjM3NDIzMTgzODA1Igx9tC8lDgPqdHKrMr0q3ANFBh0Tul%2Foa8fQ8s6f6Y2qlAnQfjvpsni5rNzjDX6imV87DCg%2FrH93D624DxfwZnjAMW%2FYd8CVdNz3cpY2C3KQu5U07GeujaAEHZIcygznyk1HuJQpeni5R5%2FpPEuGshJPGksgdq5Y3jlSAmy%2Ft4GC5KGQghPOABXsabWFB72%2FNABJ7K0boaYJVtLncHlP8t4UdHV5kbtKu4T%2BijeHj6pRQ7mIPL6XdcwEemztguJFEcDYCcy9qXkGWWDA%2F0TmYsw9ler9jR4KmQQGPG2JJ2Mjl3VkQjdIhBkixQ%2Fj9eyJ0KskgEFETrAjW3amg55Inje7U7Jg5m57OB9ddCnVB%2FWEg17shfM0dZenZPhP8cgjY8GQkVgkj1MOEFLkVcwTfn6pD%2BeBeib9UKsZlXTDv%2BUGJ0iSyT1nofHHugGopH%2BIONWgrs48lPMEwq4QbYunTU%2FCe5oj8azJ3%2BQTFX6%2BjfCrIT%2FWVV3hiGCSmjl9AqOZn9rYJF5gKhmjs%2BFXSfpIU48dSSUE2CR7HxmRl0nHmeaiU%2Fvl5HYlbUcI3PjMBy1pPs%2Bb6kp7tfwlapsZgAedmeK0Y%2Bb06TUc884Aa3FeIYs3Sa%2FSt3kgFQ38g%2F7WOdiz4wJJ3xk5Zsqg%2FmRQADDyydXPBjqkAdWvQTwy78u%2FP7FqnPpc%2ByMjhRNEDTsvwQ8pYzLXBMT0cDkGJPNbFirUMOQ6s4pMM5ls25oI1sjxdjeeBA8txm5tRH%2BlVJlcq%2FyGyTXCEenZe7HdtU63LF4xlRxDjDMPkr8clnrQf4CyUMgykOJ94njjbOiFEMvNjTjsi88UescrCc%2BGu7T6bPaL5FxhJn9AadvzXBjCJEEaf93IOabbMIOPwH4v&X-Amz-Signature=2922f9e9f57712b0bbbc9a41d9136773f94c6d58312f434dae21e9241391e36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YRHMH%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCbDgJdjQ1KUaevpp3v0M8WgSJ70qSYNQkOhuXZrD8qVgIhAO1V%2BtwOu2ZEGMyUCjebXD5o%2Brj6M8%2Fz95O0TA36Th6qKv8DCDQQABoMNjM3NDIzMTgzODA1Igx9tC8lDgPqdHKrMr0q3ANFBh0Tul%2Foa8fQ8s6f6Y2qlAnQfjvpsni5rNzjDX6imV87DCg%2FrH93D624DxfwZnjAMW%2FYd8CVdNz3cpY2C3KQu5U07GeujaAEHZIcygznyk1HuJQpeni5R5%2FpPEuGshJPGksgdq5Y3jlSAmy%2Ft4GC5KGQghPOABXsabWFB72%2FNABJ7K0boaYJVtLncHlP8t4UdHV5kbtKu4T%2BijeHj6pRQ7mIPL6XdcwEemztguJFEcDYCcy9qXkGWWDA%2F0TmYsw9ler9jR4KmQQGPG2JJ2Mjl3VkQjdIhBkixQ%2Fj9eyJ0KskgEFETrAjW3amg55Inje7U7Jg5m57OB9ddCnVB%2FWEg17shfM0dZenZPhP8cgjY8GQkVgkj1MOEFLkVcwTfn6pD%2BeBeib9UKsZlXTDv%2BUGJ0iSyT1nofHHugGopH%2BIONWgrs48lPMEwq4QbYunTU%2FCe5oj8azJ3%2BQTFX6%2BjfCrIT%2FWVV3hiGCSmjl9AqOZn9rYJF5gKhmjs%2BFXSfpIU48dSSUE2CR7HxmRl0nHmeaiU%2Fvl5HYlbUcI3PjMBy1pPs%2Bb6kp7tfwlapsZgAedmeK0Y%2Bb06TUc884Aa3FeIYs3Sa%2FSt3kgFQ38g%2F7WOdiz4wJJ3xk5Zsqg%2FmRQADDyydXPBjqkAdWvQTwy78u%2FP7FqnPpc%2ByMjhRNEDTsvwQ8pYzLXBMT0cDkGJPNbFirUMOQ6s4pMM5ls25oI1sjxdjeeBA8txm5tRH%2BlVJlcq%2FyGyTXCEenZe7HdtU63LF4xlRxDjDMPkr8clnrQf4CyUMgykOJ94njjbOiFEMvNjTjsi88UescrCc%2BGu7T6bPaL5FxhJn9AadvzXBjCJEEaf93IOabbMIOPwH4v&X-Amz-Signature=e5b4257112a0ec561b54e1406e1ec068d69addde75cec07cf7b976ff7cda18ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YRHMH%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCbDgJdjQ1KUaevpp3v0M8WgSJ70qSYNQkOhuXZrD8qVgIhAO1V%2BtwOu2ZEGMyUCjebXD5o%2Brj6M8%2Fz95O0TA36Th6qKv8DCDQQABoMNjM3NDIzMTgzODA1Igx9tC8lDgPqdHKrMr0q3ANFBh0Tul%2Foa8fQ8s6f6Y2qlAnQfjvpsni5rNzjDX6imV87DCg%2FrH93D624DxfwZnjAMW%2FYd8CVdNz3cpY2C3KQu5U07GeujaAEHZIcygznyk1HuJQpeni5R5%2FpPEuGshJPGksgdq5Y3jlSAmy%2Ft4GC5KGQghPOABXsabWFB72%2FNABJ7K0boaYJVtLncHlP8t4UdHV5kbtKu4T%2BijeHj6pRQ7mIPL6XdcwEemztguJFEcDYCcy9qXkGWWDA%2F0TmYsw9ler9jR4KmQQGPG2JJ2Mjl3VkQjdIhBkixQ%2Fj9eyJ0KskgEFETrAjW3amg55Inje7U7Jg5m57OB9ddCnVB%2FWEg17shfM0dZenZPhP8cgjY8GQkVgkj1MOEFLkVcwTfn6pD%2BeBeib9UKsZlXTDv%2BUGJ0iSyT1nofHHugGopH%2BIONWgrs48lPMEwq4QbYunTU%2FCe5oj8azJ3%2BQTFX6%2BjfCrIT%2FWVV3hiGCSmjl9AqOZn9rYJF5gKhmjs%2BFXSfpIU48dSSUE2CR7HxmRl0nHmeaiU%2Fvl5HYlbUcI3PjMBy1pPs%2Bb6kp7tfwlapsZgAedmeK0Y%2Bb06TUc884Aa3FeIYs3Sa%2FSt3kgFQ38g%2F7WOdiz4wJJ3xk5Zsqg%2FmRQADDyydXPBjqkAdWvQTwy78u%2FP7FqnPpc%2ByMjhRNEDTsvwQ8pYzLXBMT0cDkGJPNbFirUMOQ6s4pMM5ls25oI1sjxdjeeBA8txm5tRH%2BlVJlcq%2FyGyTXCEenZe7HdtU63LF4xlRxDjDMPkr8clnrQf4CyUMgykOJ94njjbOiFEMvNjTjsi88UescrCc%2BGu7T6bPaL5FxhJn9AadvzXBjCJEEaf93IOabbMIOPwH4v&X-Amz-Signature=16b70657c97c7a64497233f0e5fef07bad3d83b9faf5445e6bfd0a7b91790c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YRHMH%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCbDgJdjQ1KUaevpp3v0M8WgSJ70qSYNQkOhuXZrD8qVgIhAO1V%2BtwOu2ZEGMyUCjebXD5o%2Brj6M8%2Fz95O0TA36Th6qKv8DCDQQABoMNjM3NDIzMTgzODA1Igx9tC8lDgPqdHKrMr0q3ANFBh0Tul%2Foa8fQ8s6f6Y2qlAnQfjvpsni5rNzjDX6imV87DCg%2FrH93D624DxfwZnjAMW%2FYd8CVdNz3cpY2C3KQu5U07GeujaAEHZIcygznyk1HuJQpeni5R5%2FpPEuGshJPGksgdq5Y3jlSAmy%2Ft4GC5KGQghPOABXsabWFB72%2FNABJ7K0boaYJVtLncHlP8t4UdHV5kbtKu4T%2BijeHj6pRQ7mIPL6XdcwEemztguJFEcDYCcy9qXkGWWDA%2F0TmYsw9ler9jR4KmQQGPG2JJ2Mjl3VkQjdIhBkixQ%2Fj9eyJ0KskgEFETrAjW3amg55Inje7U7Jg5m57OB9ddCnVB%2FWEg17shfM0dZenZPhP8cgjY8GQkVgkj1MOEFLkVcwTfn6pD%2BeBeib9UKsZlXTDv%2BUGJ0iSyT1nofHHugGopH%2BIONWgrs48lPMEwq4QbYunTU%2FCe5oj8azJ3%2BQTFX6%2BjfCrIT%2FWVV3hiGCSmjl9AqOZn9rYJF5gKhmjs%2BFXSfpIU48dSSUE2CR7HxmRl0nHmeaiU%2Fvl5HYlbUcI3PjMBy1pPs%2Bb6kp7tfwlapsZgAedmeK0Y%2Bb06TUc884Aa3FeIYs3Sa%2FSt3kgFQ38g%2F7WOdiz4wJJ3xk5Zsqg%2FmRQADDyydXPBjqkAdWvQTwy78u%2FP7FqnPpc%2ByMjhRNEDTsvwQ8pYzLXBMT0cDkGJPNbFirUMOQ6s4pMM5ls25oI1sjxdjeeBA8txm5tRH%2BlVJlcq%2FyGyTXCEenZe7HdtU63LF4xlRxDjDMPkr8clnrQf4CyUMgykOJ94njjbOiFEMvNjTjsi88UescrCc%2BGu7T6bPaL5FxhJn9AadvzXBjCJEEaf93IOabbMIOPwH4v&X-Amz-Signature=458ffc69eea4456ebbcfc5ee71057b4360d0c0adc2ad6aac160a90cb720b1bd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YRHMH%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCbDgJdjQ1KUaevpp3v0M8WgSJ70qSYNQkOhuXZrD8qVgIhAO1V%2BtwOu2ZEGMyUCjebXD5o%2Brj6M8%2Fz95O0TA36Th6qKv8DCDQQABoMNjM3NDIzMTgzODA1Igx9tC8lDgPqdHKrMr0q3ANFBh0Tul%2Foa8fQ8s6f6Y2qlAnQfjvpsni5rNzjDX6imV87DCg%2FrH93D624DxfwZnjAMW%2FYd8CVdNz3cpY2C3KQu5U07GeujaAEHZIcygznyk1HuJQpeni5R5%2FpPEuGshJPGksgdq5Y3jlSAmy%2Ft4GC5KGQghPOABXsabWFB72%2FNABJ7K0boaYJVtLncHlP8t4UdHV5kbtKu4T%2BijeHj6pRQ7mIPL6XdcwEemztguJFEcDYCcy9qXkGWWDA%2F0TmYsw9ler9jR4KmQQGPG2JJ2Mjl3VkQjdIhBkixQ%2Fj9eyJ0KskgEFETrAjW3amg55Inje7U7Jg5m57OB9ddCnVB%2FWEg17shfM0dZenZPhP8cgjY8GQkVgkj1MOEFLkVcwTfn6pD%2BeBeib9UKsZlXTDv%2BUGJ0iSyT1nofHHugGopH%2BIONWgrs48lPMEwq4QbYunTU%2FCe5oj8azJ3%2BQTFX6%2BjfCrIT%2FWVV3hiGCSmjl9AqOZn9rYJF5gKhmjs%2BFXSfpIU48dSSUE2CR7HxmRl0nHmeaiU%2Fvl5HYlbUcI3PjMBy1pPs%2Bb6kp7tfwlapsZgAedmeK0Y%2Bb06TUc884Aa3FeIYs3Sa%2FSt3kgFQ38g%2F7WOdiz4wJJ3xk5Zsqg%2FmRQADDyydXPBjqkAdWvQTwy78u%2FP7FqnPpc%2ByMjhRNEDTsvwQ8pYzLXBMT0cDkGJPNbFirUMOQ6s4pMM5ls25oI1sjxdjeeBA8txm5tRH%2BlVJlcq%2FyGyTXCEenZe7HdtU63LF4xlRxDjDMPkr8clnrQf4CyUMgykOJ94njjbOiFEMvNjTjsi88UescrCc%2BGu7T6bPaL5FxhJn9AadvzXBjCJEEaf93IOabbMIOPwH4v&X-Amz-Signature=3a4c308605456b5c3aa545bde6f8b7ce89b54ff0a46e13eaa62f17d1047563e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YRHMH%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCbDgJdjQ1KUaevpp3v0M8WgSJ70qSYNQkOhuXZrD8qVgIhAO1V%2BtwOu2ZEGMyUCjebXD5o%2Brj6M8%2Fz95O0TA36Th6qKv8DCDQQABoMNjM3NDIzMTgzODA1Igx9tC8lDgPqdHKrMr0q3ANFBh0Tul%2Foa8fQ8s6f6Y2qlAnQfjvpsni5rNzjDX6imV87DCg%2FrH93D624DxfwZnjAMW%2FYd8CVdNz3cpY2C3KQu5U07GeujaAEHZIcygznyk1HuJQpeni5R5%2FpPEuGshJPGksgdq5Y3jlSAmy%2Ft4GC5KGQghPOABXsabWFB72%2FNABJ7K0boaYJVtLncHlP8t4UdHV5kbtKu4T%2BijeHj6pRQ7mIPL6XdcwEemztguJFEcDYCcy9qXkGWWDA%2F0TmYsw9ler9jR4KmQQGPG2JJ2Mjl3VkQjdIhBkixQ%2Fj9eyJ0KskgEFETrAjW3amg55Inje7U7Jg5m57OB9ddCnVB%2FWEg17shfM0dZenZPhP8cgjY8GQkVgkj1MOEFLkVcwTfn6pD%2BeBeib9UKsZlXTDv%2BUGJ0iSyT1nofHHugGopH%2BIONWgrs48lPMEwq4QbYunTU%2FCe5oj8azJ3%2BQTFX6%2BjfCrIT%2FWVV3hiGCSmjl9AqOZn9rYJF5gKhmjs%2BFXSfpIU48dSSUE2CR7HxmRl0nHmeaiU%2Fvl5HYlbUcI3PjMBy1pPs%2Bb6kp7tfwlapsZgAedmeK0Y%2Bb06TUc884Aa3FeIYs3Sa%2FSt3kgFQ38g%2F7WOdiz4wJJ3xk5Zsqg%2FmRQADDyydXPBjqkAdWvQTwy78u%2FP7FqnPpc%2ByMjhRNEDTsvwQ8pYzLXBMT0cDkGJPNbFirUMOQ6s4pMM5ls25oI1sjxdjeeBA8txm5tRH%2BlVJlcq%2FyGyTXCEenZe7HdtU63LF4xlRxDjDMPkr8clnrQf4CyUMgykOJ94njjbOiFEMvNjTjsi88UescrCc%2BGu7T6bPaL5FxhJn9AadvzXBjCJEEaf93IOabbMIOPwH4v&X-Amz-Signature=49e66a9e8e640b39676fcde63406126ca79d114ea9fdf473c28f91312acd733e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YRHMH%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCbDgJdjQ1KUaevpp3v0M8WgSJ70qSYNQkOhuXZrD8qVgIhAO1V%2BtwOu2ZEGMyUCjebXD5o%2Brj6M8%2Fz95O0TA36Th6qKv8DCDQQABoMNjM3NDIzMTgzODA1Igx9tC8lDgPqdHKrMr0q3ANFBh0Tul%2Foa8fQ8s6f6Y2qlAnQfjvpsni5rNzjDX6imV87DCg%2FrH93D624DxfwZnjAMW%2FYd8CVdNz3cpY2C3KQu5U07GeujaAEHZIcygznyk1HuJQpeni5R5%2FpPEuGshJPGksgdq5Y3jlSAmy%2Ft4GC5KGQghPOABXsabWFB72%2FNABJ7K0boaYJVtLncHlP8t4UdHV5kbtKu4T%2BijeHj6pRQ7mIPL6XdcwEemztguJFEcDYCcy9qXkGWWDA%2F0TmYsw9ler9jR4KmQQGPG2JJ2Mjl3VkQjdIhBkixQ%2Fj9eyJ0KskgEFETrAjW3amg55Inje7U7Jg5m57OB9ddCnVB%2FWEg17shfM0dZenZPhP8cgjY8GQkVgkj1MOEFLkVcwTfn6pD%2BeBeib9UKsZlXTDv%2BUGJ0iSyT1nofHHugGopH%2BIONWgrs48lPMEwq4QbYunTU%2FCe5oj8azJ3%2BQTFX6%2BjfCrIT%2FWVV3hiGCSmjl9AqOZn9rYJF5gKhmjs%2BFXSfpIU48dSSUE2CR7HxmRl0nHmeaiU%2Fvl5HYlbUcI3PjMBy1pPs%2Bb6kp7tfwlapsZgAedmeK0Y%2Bb06TUc884Aa3FeIYs3Sa%2FSt3kgFQ38g%2F7WOdiz4wJJ3xk5Zsqg%2FmRQADDyydXPBjqkAdWvQTwy78u%2FP7FqnPpc%2ByMjhRNEDTsvwQ8pYzLXBMT0cDkGJPNbFirUMOQ6s4pMM5ls25oI1sjxdjeeBA8txm5tRH%2BlVJlcq%2FyGyTXCEenZe7HdtU63LF4xlRxDjDMPkr8clnrQf4CyUMgykOJ94njjbOiFEMvNjTjsi88UescrCc%2BGu7T6bPaL5FxhJn9AadvzXBjCJEEaf93IOabbMIOPwH4v&X-Amz-Signature=62261d7423da4e386f64904c7430ce448e4395be328e76503ec0ca4b07531893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YRHMH%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCbDgJdjQ1KUaevpp3v0M8WgSJ70qSYNQkOhuXZrD8qVgIhAO1V%2BtwOu2ZEGMyUCjebXD5o%2Brj6M8%2Fz95O0TA36Th6qKv8DCDQQABoMNjM3NDIzMTgzODA1Igx9tC8lDgPqdHKrMr0q3ANFBh0Tul%2Foa8fQ8s6f6Y2qlAnQfjvpsni5rNzjDX6imV87DCg%2FrH93D624DxfwZnjAMW%2FYd8CVdNz3cpY2C3KQu5U07GeujaAEHZIcygznyk1HuJQpeni5R5%2FpPEuGshJPGksgdq5Y3jlSAmy%2Ft4GC5KGQghPOABXsabWFB72%2FNABJ7K0boaYJVtLncHlP8t4UdHV5kbtKu4T%2BijeHj6pRQ7mIPL6XdcwEemztguJFEcDYCcy9qXkGWWDA%2F0TmYsw9ler9jR4KmQQGPG2JJ2Mjl3VkQjdIhBkixQ%2Fj9eyJ0KskgEFETrAjW3amg55Inje7U7Jg5m57OB9ddCnVB%2FWEg17shfM0dZenZPhP8cgjY8GQkVgkj1MOEFLkVcwTfn6pD%2BeBeib9UKsZlXTDv%2BUGJ0iSyT1nofHHugGopH%2BIONWgrs48lPMEwq4QbYunTU%2FCe5oj8azJ3%2BQTFX6%2BjfCrIT%2FWVV3hiGCSmjl9AqOZn9rYJF5gKhmjs%2BFXSfpIU48dSSUE2CR7HxmRl0nHmeaiU%2Fvl5HYlbUcI3PjMBy1pPs%2Bb6kp7tfwlapsZgAedmeK0Y%2Bb06TUc884Aa3FeIYs3Sa%2FSt3kgFQ38g%2F7WOdiz4wJJ3xk5Zsqg%2FmRQADDyydXPBjqkAdWvQTwy78u%2FP7FqnPpc%2ByMjhRNEDTsvwQ8pYzLXBMT0cDkGJPNbFirUMOQ6s4pMM5ls25oI1sjxdjeeBA8txm5tRH%2BlVJlcq%2FyGyTXCEenZe7HdtU63LF4xlRxDjDMPkr8clnrQf4CyUMgykOJ94njjbOiFEMvNjTjsi88UescrCc%2BGu7T6bPaL5FxhJn9AadvzXBjCJEEaf93IOabbMIOPwH4v&X-Amz-Signature=a2be5c83f750b1b3f6eb04d3c6559f238998bd2d78fbf27d1ef4ecae8385602f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YRHMH%2F20260502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260502T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCbDgJdjQ1KUaevpp3v0M8WgSJ70qSYNQkOhuXZrD8qVgIhAO1V%2BtwOu2ZEGMyUCjebXD5o%2Brj6M8%2Fz95O0TA36Th6qKv8DCDQQABoMNjM3NDIzMTgzODA1Igx9tC8lDgPqdHKrMr0q3ANFBh0Tul%2Foa8fQ8s6f6Y2qlAnQfjvpsni5rNzjDX6imV87DCg%2FrH93D624DxfwZnjAMW%2FYd8CVdNz3cpY2C3KQu5U07GeujaAEHZIcygznyk1HuJQpeni5R5%2FpPEuGshJPGksgdq5Y3jlSAmy%2Ft4GC5KGQghPOABXsabWFB72%2FNABJ7K0boaYJVtLncHlP8t4UdHV5kbtKu4T%2BijeHj6pRQ7mIPL6XdcwEemztguJFEcDYCcy9qXkGWWDA%2F0TmYsw9ler9jR4KmQQGPG2JJ2Mjl3VkQjdIhBkixQ%2Fj9eyJ0KskgEFETrAjW3amg55Inje7U7Jg5m57OB9ddCnVB%2FWEg17shfM0dZenZPhP8cgjY8GQkVgkj1MOEFLkVcwTfn6pD%2BeBeib9UKsZlXTDv%2BUGJ0iSyT1nofHHugGopH%2BIONWgrs48lPMEwq4QbYunTU%2FCe5oj8azJ3%2BQTFX6%2BjfCrIT%2FWVV3hiGCSmjl9AqOZn9rYJF5gKhmjs%2BFXSfpIU48dSSUE2CR7HxmRl0nHmeaiU%2Fvl5HYlbUcI3PjMBy1pPs%2Bb6kp7tfwlapsZgAedmeK0Y%2Bb06TUc884Aa3FeIYs3Sa%2FSt3kgFQ38g%2F7WOdiz4wJJ3xk5Zsqg%2FmRQADDyydXPBjqkAdWvQTwy78u%2FP7FqnPpc%2ByMjhRNEDTsvwQ8pYzLXBMT0cDkGJPNbFirUMOQ6s4pMM5ls25oI1sjxdjeeBA8txm5tRH%2BlVJlcq%2FyGyTXCEenZe7HdtU63LF4xlRxDjDMPkr8clnrQf4CyUMgykOJ94njjbOiFEMvNjTjsi88UescrCc%2BGu7T6bPaL5FxhJn9AadvzXBjCJEEaf93IOabbMIOPwH4v&X-Amz-Signature=16b70657c97c7a64497233f0e5fef07bad3d83b9faf5445e6bfd0a7b91790c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
