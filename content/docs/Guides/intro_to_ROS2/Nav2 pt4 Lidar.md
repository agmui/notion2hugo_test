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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKK3DUGO%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIDuGxtxP%2FHW94DC53TIUbr0Z1QPI1xfJBy43Yy5%2BIdz1AiBt36CRn74A97gpxVmJY5%2Fc6Hhlvlo0rl1KlKm4y%2Bh77CqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV3%2B7xbUj1C84eUQIKtwDCBB8aVGJb9QWP4rxiEbVybHL5eJQaxcNsvAMTsib8sxBwClL3OYNbrANBouqFBTnky69REiW941Du2liAqggnR%2FHJ7KXe1MpcRU%2FiGX%2Fiy6v8YS5lk8C2QO6iqVoDNUre%2FMXophaeaFbqpJAf4KGjfrntZQk4eTrypqFV5ChTsBPBIAIPjn1vv7wIgGEYznlvz0j87%2FQ%2FASgy42T9TOjd8EjCle5LGd3chQsFS0JyaHiImFkAGmX08Hd28DwXEBddxVXcL4k8N6qKivt3jqcPfzdKQVaYtIxQpuR4q5dGdZm25tSuSGF36hWGRcdOHSCahwOI08KoV1ZhqesOoNyu8etMWuYCGdKE59dDY0gebNiYD%2B40E3WYYzW32ouryJInNaTZZnii4JZCp0D6DWYF8uzbv0%2BIKUm%2BaIpEMMHEijNTyhj4RsbEBOHTRBwuqK%2FbfuekrL9qccMQvKkY%2FTYu6h2E4YIqcSwEevekKGD3XnsynnBr7TVXyrUR2J4Ed84J5Cs64159akCwEeB2RPkjCvZLyPjBssnMSMwaXa2j5mMUcqoB3OpKpNENv%2FnIUzf%2BTu0zucyZ07eZt6GvAy7LA%2F9LFZctPo8JLQRkMr0wMVlp6whDG6QN1lVMXAw3qXp0AY6pgFuon6PMVo9DFNmi30ENBW3QDeHOswGrvx7kyvDgPUjM1iy6owGy6PqhYAhMF4YJ3c0h8OQAJbqI6GXv8xrsA3hG8ZdwXAAIxsM%2FyO0WYcdXBRmo7YD40XmSuSjQHsi4btAYa4I0wYxrzmlNRTSFkQge%2FcZWsTmvKYPuwyngO1%2FBzkwBT%2Bh%2BVPLBFT%2F7FNQDLIkxqHxr2GbSVFmm8g4iz0ohJ8LkiSn&X-Amz-Signature=ce5774296cb2f5a55fa40c5d18ac620eed77c2c3445d5cbd915a54a8764d14e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIL65FJF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDAwX0tuST0MD6Bg%2B04FJoBs9GH6GZzBXqx7skJL2qffwIgBoqicLOvHfDpTzX0YHtBbDo3k%2FnG4MpszuN5WexgH3YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQq%2FVpBEpRD6OQCXyrcA6khdRmVZyKShBOd3g7W78Xzm2IR6DVpyrvjJwgcFOC1JCfFB5pErhdlf3TJA5n3zYBP2dmXdpBTRMvM9ewuf112zAwDVVhOrGVSaaLKa0dU%2B1chf7BABqaROgwgIHNUR2LfSWpSkIjWKsSzNRuuutg86kE7setZMRCcD77pDr4f2Kmzd1KacYStmO%2BYxJd3a%2B0uodfqXtL0%2Bt8AbOxySDY9iPop85uAyXv15pCApBN%2BMyxOcTPG%2FG0lNe9wRQNSOH0DGnzGrYlxv%2B8dOXdVZyjk9d61NSzGdcwzBdWOMzx3peGo0XsB22Ahz3ypO%2FxaA6eUf5PetPtoxU2afPRIqDnCwaUGtrad6zARPtV4NvFHcx%2FEUFFS5YdEOkyEPRmGbovPVNq4LwD7%2FDeKe7qF5nfeYBy7Qc4vSWNUqWEKfoM7VxFDcO7ZNWcZbEWDiyt7YLiKeONpNSFWRyddvwsG9UGw6fIrs0nzikzPiJ%2Baoo4ytE3hvOB%2BEaudHkk9hlrhJ63dXJmhTpHUjd7P7Cun%2BgPquuE%2BU81mQNyj7jKYKIcc66VIqb6aUURb92Xyldod4fnwVabYVjH7tO%2FZD4%2BPGu734ZxqtN4ld93dg5maIPbKhGNU1Z4bC5qd4%2FfbMPOm6dAGOqUBmFCNFZUt6JUAHLuhkjcb35iWpAjTwzekoB6Wvvmk6EiMXe2wo4YnJcZ8WQdqN7HfTN5O0NtP2S8AISOOSRG2kxSIoAJ%2BZTyTyaKZMieVoCxNDT6nWwavArMtC6ZyEny3lYkc6HprnvctadoCFf4c5ESRuhqd8bsu4N65%2BBHJSuObxCaooETq7ylk6tWb3MC0nZaD36DXC7AwzzXUhykpCZS8n8Rq&X-Amz-Signature=3e65b86bb072459dc194fe8b48e4a6fcd445af05c1d53f28c013e6e8a33dfd72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIL65FJF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDAwX0tuST0MD6Bg%2B04FJoBs9GH6GZzBXqx7skJL2qffwIgBoqicLOvHfDpTzX0YHtBbDo3k%2FnG4MpszuN5WexgH3YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQq%2FVpBEpRD6OQCXyrcA6khdRmVZyKShBOd3g7W78Xzm2IR6DVpyrvjJwgcFOC1JCfFB5pErhdlf3TJA5n3zYBP2dmXdpBTRMvM9ewuf112zAwDVVhOrGVSaaLKa0dU%2B1chf7BABqaROgwgIHNUR2LfSWpSkIjWKsSzNRuuutg86kE7setZMRCcD77pDr4f2Kmzd1KacYStmO%2BYxJd3a%2B0uodfqXtL0%2Bt8AbOxySDY9iPop85uAyXv15pCApBN%2BMyxOcTPG%2FG0lNe9wRQNSOH0DGnzGrYlxv%2B8dOXdVZyjk9d61NSzGdcwzBdWOMzx3peGo0XsB22Ahz3ypO%2FxaA6eUf5PetPtoxU2afPRIqDnCwaUGtrad6zARPtV4NvFHcx%2FEUFFS5YdEOkyEPRmGbovPVNq4LwD7%2FDeKe7qF5nfeYBy7Qc4vSWNUqWEKfoM7VxFDcO7ZNWcZbEWDiyt7YLiKeONpNSFWRyddvwsG9UGw6fIrs0nzikzPiJ%2Baoo4ytE3hvOB%2BEaudHkk9hlrhJ63dXJmhTpHUjd7P7Cun%2BgPquuE%2BU81mQNyj7jKYKIcc66VIqb6aUURb92Xyldod4fnwVabYVjH7tO%2FZD4%2BPGu734ZxqtN4ld93dg5maIPbKhGNU1Z4bC5qd4%2FfbMPOm6dAGOqUBmFCNFZUt6JUAHLuhkjcb35iWpAjTwzekoB6Wvvmk6EiMXe2wo4YnJcZ8WQdqN7HfTN5O0NtP2S8AISOOSRG2kxSIoAJ%2BZTyTyaKZMieVoCxNDT6nWwavArMtC6ZyEny3lYkc6HprnvctadoCFf4c5ESRuhqd8bsu4N65%2BBHJSuObxCaooETq7ylk6tWb3MC0nZaD36DXC7AwzzXUhykpCZS8n8Rq&X-Amz-Signature=e882874d821518e1c5cb9509e923f8d5848fc7b53ddd64824aa32f8d0b069e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIL65FJF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDAwX0tuST0MD6Bg%2B04FJoBs9GH6GZzBXqx7skJL2qffwIgBoqicLOvHfDpTzX0YHtBbDo3k%2FnG4MpszuN5WexgH3YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQq%2FVpBEpRD6OQCXyrcA6khdRmVZyKShBOd3g7W78Xzm2IR6DVpyrvjJwgcFOC1JCfFB5pErhdlf3TJA5n3zYBP2dmXdpBTRMvM9ewuf112zAwDVVhOrGVSaaLKa0dU%2B1chf7BABqaROgwgIHNUR2LfSWpSkIjWKsSzNRuuutg86kE7setZMRCcD77pDr4f2Kmzd1KacYStmO%2BYxJd3a%2B0uodfqXtL0%2Bt8AbOxySDY9iPop85uAyXv15pCApBN%2BMyxOcTPG%2FG0lNe9wRQNSOH0DGnzGrYlxv%2B8dOXdVZyjk9d61NSzGdcwzBdWOMzx3peGo0XsB22Ahz3ypO%2FxaA6eUf5PetPtoxU2afPRIqDnCwaUGtrad6zARPtV4NvFHcx%2FEUFFS5YdEOkyEPRmGbovPVNq4LwD7%2FDeKe7qF5nfeYBy7Qc4vSWNUqWEKfoM7VxFDcO7ZNWcZbEWDiyt7YLiKeONpNSFWRyddvwsG9UGw6fIrs0nzikzPiJ%2Baoo4ytE3hvOB%2BEaudHkk9hlrhJ63dXJmhTpHUjd7P7Cun%2BgPquuE%2BU81mQNyj7jKYKIcc66VIqb6aUURb92Xyldod4fnwVabYVjH7tO%2FZD4%2BPGu734ZxqtN4ld93dg5maIPbKhGNU1Z4bC5qd4%2FfbMPOm6dAGOqUBmFCNFZUt6JUAHLuhkjcb35iWpAjTwzekoB6Wvvmk6EiMXe2wo4YnJcZ8WQdqN7HfTN5O0NtP2S8AISOOSRG2kxSIoAJ%2BZTyTyaKZMieVoCxNDT6nWwavArMtC6ZyEny3lYkc6HprnvctadoCFf4c5ESRuhqd8bsu4N65%2BBHJSuObxCaooETq7ylk6tWb3MC0nZaD36DXC7AwzzXUhykpCZS8n8Rq&X-Amz-Signature=59e5fd71983fa4d0c014fbac85dd5ee335b9e12b97396890e716848a930de7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIL65FJF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDAwX0tuST0MD6Bg%2B04FJoBs9GH6GZzBXqx7skJL2qffwIgBoqicLOvHfDpTzX0YHtBbDo3k%2FnG4MpszuN5WexgH3YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQq%2FVpBEpRD6OQCXyrcA6khdRmVZyKShBOd3g7W78Xzm2IR6DVpyrvjJwgcFOC1JCfFB5pErhdlf3TJA5n3zYBP2dmXdpBTRMvM9ewuf112zAwDVVhOrGVSaaLKa0dU%2B1chf7BABqaROgwgIHNUR2LfSWpSkIjWKsSzNRuuutg86kE7setZMRCcD77pDr4f2Kmzd1KacYStmO%2BYxJd3a%2B0uodfqXtL0%2Bt8AbOxySDY9iPop85uAyXv15pCApBN%2BMyxOcTPG%2FG0lNe9wRQNSOH0DGnzGrYlxv%2B8dOXdVZyjk9d61NSzGdcwzBdWOMzx3peGo0XsB22Ahz3ypO%2FxaA6eUf5PetPtoxU2afPRIqDnCwaUGtrad6zARPtV4NvFHcx%2FEUFFS5YdEOkyEPRmGbovPVNq4LwD7%2FDeKe7qF5nfeYBy7Qc4vSWNUqWEKfoM7VxFDcO7ZNWcZbEWDiyt7YLiKeONpNSFWRyddvwsG9UGw6fIrs0nzikzPiJ%2Baoo4ytE3hvOB%2BEaudHkk9hlrhJ63dXJmhTpHUjd7P7Cun%2BgPquuE%2BU81mQNyj7jKYKIcc66VIqb6aUURb92Xyldod4fnwVabYVjH7tO%2FZD4%2BPGu734ZxqtN4ld93dg5maIPbKhGNU1Z4bC5qd4%2FfbMPOm6dAGOqUBmFCNFZUt6JUAHLuhkjcb35iWpAjTwzekoB6Wvvmk6EiMXe2wo4YnJcZ8WQdqN7HfTN5O0NtP2S8AISOOSRG2kxSIoAJ%2BZTyTyaKZMieVoCxNDT6nWwavArMtC6ZyEny3lYkc6HprnvctadoCFf4c5ESRuhqd8bsu4N65%2BBHJSuObxCaooETq7ylk6tWb3MC0nZaD36DXC7AwzzXUhykpCZS8n8Rq&X-Amz-Signature=95caab691e465e6b4e5f167bad16f50c725188ede5e2ef28ddba4167bed1cf93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIL65FJF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDAwX0tuST0MD6Bg%2B04FJoBs9GH6GZzBXqx7skJL2qffwIgBoqicLOvHfDpTzX0YHtBbDo3k%2FnG4MpszuN5WexgH3YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQq%2FVpBEpRD6OQCXyrcA6khdRmVZyKShBOd3g7W78Xzm2IR6DVpyrvjJwgcFOC1JCfFB5pErhdlf3TJA5n3zYBP2dmXdpBTRMvM9ewuf112zAwDVVhOrGVSaaLKa0dU%2B1chf7BABqaROgwgIHNUR2LfSWpSkIjWKsSzNRuuutg86kE7setZMRCcD77pDr4f2Kmzd1KacYStmO%2BYxJd3a%2B0uodfqXtL0%2Bt8AbOxySDY9iPop85uAyXv15pCApBN%2BMyxOcTPG%2FG0lNe9wRQNSOH0DGnzGrYlxv%2B8dOXdVZyjk9d61NSzGdcwzBdWOMzx3peGo0XsB22Ahz3ypO%2FxaA6eUf5PetPtoxU2afPRIqDnCwaUGtrad6zARPtV4NvFHcx%2FEUFFS5YdEOkyEPRmGbovPVNq4LwD7%2FDeKe7qF5nfeYBy7Qc4vSWNUqWEKfoM7VxFDcO7ZNWcZbEWDiyt7YLiKeONpNSFWRyddvwsG9UGw6fIrs0nzikzPiJ%2Baoo4ytE3hvOB%2BEaudHkk9hlrhJ63dXJmhTpHUjd7P7Cun%2BgPquuE%2BU81mQNyj7jKYKIcc66VIqb6aUURb92Xyldod4fnwVabYVjH7tO%2FZD4%2BPGu734ZxqtN4ld93dg5maIPbKhGNU1Z4bC5qd4%2FfbMPOm6dAGOqUBmFCNFZUt6JUAHLuhkjcb35iWpAjTwzekoB6Wvvmk6EiMXe2wo4YnJcZ8WQdqN7HfTN5O0NtP2S8AISOOSRG2kxSIoAJ%2BZTyTyaKZMieVoCxNDT6nWwavArMtC6ZyEny3lYkc6HprnvctadoCFf4c5ESRuhqd8bsu4N65%2BBHJSuObxCaooETq7ylk6tWb3MC0nZaD36DXC7AwzzXUhykpCZS8n8Rq&X-Amz-Signature=9f8fafbee0916fd0cfb87acf3414f23d5856749a9bb55cb034531ca7e02ee670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIL65FJF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDAwX0tuST0MD6Bg%2B04FJoBs9GH6GZzBXqx7skJL2qffwIgBoqicLOvHfDpTzX0YHtBbDo3k%2FnG4MpszuN5WexgH3YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQq%2FVpBEpRD6OQCXyrcA6khdRmVZyKShBOd3g7W78Xzm2IR6DVpyrvjJwgcFOC1JCfFB5pErhdlf3TJA5n3zYBP2dmXdpBTRMvM9ewuf112zAwDVVhOrGVSaaLKa0dU%2B1chf7BABqaROgwgIHNUR2LfSWpSkIjWKsSzNRuuutg86kE7setZMRCcD77pDr4f2Kmzd1KacYStmO%2BYxJd3a%2B0uodfqXtL0%2Bt8AbOxySDY9iPop85uAyXv15pCApBN%2BMyxOcTPG%2FG0lNe9wRQNSOH0DGnzGrYlxv%2B8dOXdVZyjk9d61NSzGdcwzBdWOMzx3peGo0XsB22Ahz3ypO%2FxaA6eUf5PetPtoxU2afPRIqDnCwaUGtrad6zARPtV4NvFHcx%2FEUFFS5YdEOkyEPRmGbovPVNq4LwD7%2FDeKe7qF5nfeYBy7Qc4vSWNUqWEKfoM7VxFDcO7ZNWcZbEWDiyt7YLiKeONpNSFWRyddvwsG9UGw6fIrs0nzikzPiJ%2Baoo4ytE3hvOB%2BEaudHkk9hlrhJ63dXJmhTpHUjd7P7Cun%2BgPquuE%2BU81mQNyj7jKYKIcc66VIqb6aUURb92Xyldod4fnwVabYVjH7tO%2FZD4%2BPGu734ZxqtN4ld93dg5maIPbKhGNU1Z4bC5qd4%2FfbMPOm6dAGOqUBmFCNFZUt6JUAHLuhkjcb35iWpAjTwzekoB6Wvvmk6EiMXe2wo4YnJcZ8WQdqN7HfTN5O0NtP2S8AISOOSRG2kxSIoAJ%2BZTyTyaKZMieVoCxNDT6nWwavArMtC6ZyEny3lYkc6HprnvctadoCFf4c5ESRuhqd8bsu4N65%2BBHJSuObxCaooETq7ylk6tWb3MC0nZaD36DXC7AwzzXUhykpCZS8n8Rq&X-Amz-Signature=6dd33f00ea74f5b23e1e5e5c40677e4d8e1a0888816c03fd48b735db3644419e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIL65FJF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDAwX0tuST0MD6Bg%2B04FJoBs9GH6GZzBXqx7skJL2qffwIgBoqicLOvHfDpTzX0YHtBbDo3k%2FnG4MpszuN5WexgH3YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQq%2FVpBEpRD6OQCXyrcA6khdRmVZyKShBOd3g7W78Xzm2IR6DVpyrvjJwgcFOC1JCfFB5pErhdlf3TJA5n3zYBP2dmXdpBTRMvM9ewuf112zAwDVVhOrGVSaaLKa0dU%2B1chf7BABqaROgwgIHNUR2LfSWpSkIjWKsSzNRuuutg86kE7setZMRCcD77pDr4f2Kmzd1KacYStmO%2BYxJd3a%2B0uodfqXtL0%2Bt8AbOxySDY9iPop85uAyXv15pCApBN%2BMyxOcTPG%2FG0lNe9wRQNSOH0DGnzGrYlxv%2B8dOXdVZyjk9d61NSzGdcwzBdWOMzx3peGo0XsB22Ahz3ypO%2FxaA6eUf5PetPtoxU2afPRIqDnCwaUGtrad6zARPtV4NvFHcx%2FEUFFS5YdEOkyEPRmGbovPVNq4LwD7%2FDeKe7qF5nfeYBy7Qc4vSWNUqWEKfoM7VxFDcO7ZNWcZbEWDiyt7YLiKeONpNSFWRyddvwsG9UGw6fIrs0nzikzPiJ%2Baoo4ytE3hvOB%2BEaudHkk9hlrhJ63dXJmhTpHUjd7P7Cun%2BgPquuE%2BU81mQNyj7jKYKIcc66VIqb6aUURb92Xyldod4fnwVabYVjH7tO%2FZD4%2BPGu734ZxqtN4ld93dg5maIPbKhGNU1Z4bC5qd4%2FfbMPOm6dAGOqUBmFCNFZUt6JUAHLuhkjcb35iWpAjTwzekoB6Wvvmk6EiMXe2wo4YnJcZ8WQdqN7HfTN5O0NtP2S8AISOOSRG2kxSIoAJ%2BZTyTyaKZMieVoCxNDT6nWwavArMtC6ZyEny3lYkc6HprnvctadoCFf4c5ESRuhqd8bsu4N65%2BBHJSuObxCaooETq7ylk6tWb3MC0nZaD36DXC7AwzzXUhykpCZS8n8Rq&X-Amz-Signature=27f141edb37fc4d91a0719b63e29c019bb3c58689421092bec72fdaf71932133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIL65FJF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDAwX0tuST0MD6Bg%2B04FJoBs9GH6GZzBXqx7skJL2qffwIgBoqicLOvHfDpTzX0YHtBbDo3k%2FnG4MpszuN5WexgH3YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQq%2FVpBEpRD6OQCXyrcA6khdRmVZyKShBOd3g7W78Xzm2IR6DVpyrvjJwgcFOC1JCfFB5pErhdlf3TJA5n3zYBP2dmXdpBTRMvM9ewuf112zAwDVVhOrGVSaaLKa0dU%2B1chf7BABqaROgwgIHNUR2LfSWpSkIjWKsSzNRuuutg86kE7setZMRCcD77pDr4f2Kmzd1KacYStmO%2BYxJd3a%2B0uodfqXtL0%2Bt8AbOxySDY9iPop85uAyXv15pCApBN%2BMyxOcTPG%2FG0lNe9wRQNSOH0DGnzGrYlxv%2B8dOXdVZyjk9d61NSzGdcwzBdWOMzx3peGo0XsB22Ahz3ypO%2FxaA6eUf5PetPtoxU2afPRIqDnCwaUGtrad6zARPtV4NvFHcx%2FEUFFS5YdEOkyEPRmGbovPVNq4LwD7%2FDeKe7qF5nfeYBy7Qc4vSWNUqWEKfoM7VxFDcO7ZNWcZbEWDiyt7YLiKeONpNSFWRyddvwsG9UGw6fIrs0nzikzPiJ%2Baoo4ytE3hvOB%2BEaudHkk9hlrhJ63dXJmhTpHUjd7P7Cun%2BgPquuE%2BU81mQNyj7jKYKIcc66VIqb6aUURb92Xyldod4fnwVabYVjH7tO%2FZD4%2BPGu734ZxqtN4ld93dg5maIPbKhGNU1Z4bC5qd4%2FfbMPOm6dAGOqUBmFCNFZUt6JUAHLuhkjcb35iWpAjTwzekoB6Wvvmk6EiMXe2wo4YnJcZ8WQdqN7HfTN5O0NtP2S8AISOOSRG2kxSIoAJ%2BZTyTyaKZMieVoCxNDT6nWwavArMtC6ZyEny3lYkc6HprnvctadoCFf4c5ESRuhqd8bsu4N65%2BBHJSuObxCaooETq7ylk6tWb3MC0nZaD36DXC7AwzzXUhykpCZS8n8Rq&X-Amz-Signature=a28456d7c7563a981070b621bdc503ae87bd772c2402a5902293069e6dfb019a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIL65FJF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDAwX0tuST0MD6Bg%2B04FJoBs9GH6GZzBXqx7skJL2qffwIgBoqicLOvHfDpTzX0YHtBbDo3k%2FnG4MpszuN5WexgH3YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQq%2FVpBEpRD6OQCXyrcA6khdRmVZyKShBOd3g7W78Xzm2IR6DVpyrvjJwgcFOC1JCfFB5pErhdlf3TJA5n3zYBP2dmXdpBTRMvM9ewuf112zAwDVVhOrGVSaaLKa0dU%2B1chf7BABqaROgwgIHNUR2LfSWpSkIjWKsSzNRuuutg86kE7setZMRCcD77pDr4f2Kmzd1KacYStmO%2BYxJd3a%2B0uodfqXtL0%2Bt8AbOxySDY9iPop85uAyXv15pCApBN%2BMyxOcTPG%2FG0lNe9wRQNSOH0DGnzGrYlxv%2B8dOXdVZyjk9d61NSzGdcwzBdWOMzx3peGo0XsB22Ahz3ypO%2FxaA6eUf5PetPtoxU2afPRIqDnCwaUGtrad6zARPtV4NvFHcx%2FEUFFS5YdEOkyEPRmGbovPVNq4LwD7%2FDeKe7qF5nfeYBy7Qc4vSWNUqWEKfoM7VxFDcO7ZNWcZbEWDiyt7YLiKeONpNSFWRyddvwsG9UGw6fIrs0nzikzPiJ%2Baoo4ytE3hvOB%2BEaudHkk9hlrhJ63dXJmhTpHUjd7P7Cun%2BgPquuE%2BU81mQNyj7jKYKIcc66VIqb6aUURb92Xyldod4fnwVabYVjH7tO%2FZD4%2BPGu734ZxqtN4ld93dg5maIPbKhGNU1Z4bC5qd4%2FfbMPOm6dAGOqUBmFCNFZUt6JUAHLuhkjcb35iWpAjTwzekoB6Wvvmk6EiMXe2wo4YnJcZ8WQdqN7HfTN5O0NtP2S8AISOOSRG2kxSIoAJ%2BZTyTyaKZMieVoCxNDT6nWwavArMtC6ZyEny3lYkc6HprnvctadoCFf4c5ESRuhqd8bsu4N65%2BBHJSuObxCaooETq7ylk6tWb3MC0nZaD36DXC7AwzzXUhykpCZS8n8Rq&X-Amz-Signature=9e58e6446cece317f81b026a13b6c698dab089df0fe72c950040f79f413db486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIL65FJF%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDAwX0tuST0MD6Bg%2B04FJoBs9GH6GZzBXqx7skJL2qffwIgBoqicLOvHfDpTzX0YHtBbDo3k%2FnG4MpszuN5WexgH3YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQq%2FVpBEpRD6OQCXyrcA6khdRmVZyKShBOd3g7W78Xzm2IR6DVpyrvjJwgcFOC1JCfFB5pErhdlf3TJA5n3zYBP2dmXdpBTRMvM9ewuf112zAwDVVhOrGVSaaLKa0dU%2B1chf7BABqaROgwgIHNUR2LfSWpSkIjWKsSzNRuuutg86kE7setZMRCcD77pDr4f2Kmzd1KacYStmO%2BYxJd3a%2B0uodfqXtL0%2Bt8AbOxySDY9iPop85uAyXv15pCApBN%2BMyxOcTPG%2FG0lNe9wRQNSOH0DGnzGrYlxv%2B8dOXdVZyjk9d61NSzGdcwzBdWOMzx3peGo0XsB22Ahz3ypO%2FxaA6eUf5PetPtoxU2afPRIqDnCwaUGtrad6zARPtV4NvFHcx%2FEUFFS5YdEOkyEPRmGbovPVNq4LwD7%2FDeKe7qF5nfeYBy7Qc4vSWNUqWEKfoM7VxFDcO7ZNWcZbEWDiyt7YLiKeONpNSFWRyddvwsG9UGw6fIrs0nzikzPiJ%2Baoo4ytE3hvOB%2BEaudHkk9hlrhJ63dXJmhTpHUjd7P7Cun%2BgPquuE%2BU81mQNyj7jKYKIcc66VIqb6aUURb92Xyldod4fnwVabYVjH7tO%2FZD4%2BPGu734ZxqtN4ld93dg5maIPbKhGNU1Z4bC5qd4%2FfbMPOm6dAGOqUBmFCNFZUt6JUAHLuhkjcb35iWpAjTwzekoB6Wvvmk6EiMXe2wo4YnJcZ8WQdqN7HfTN5O0NtP2S8AISOOSRG2kxSIoAJ%2BZTyTyaKZMieVoCxNDT6nWwavArMtC6ZyEny3lYkc6HprnvctadoCFf4c5ESRuhqd8bsu4N65%2BBHJSuObxCaooETq7ylk6tWb3MC0nZaD36DXC7AwzzXUhykpCZS8n8Rq&X-Amz-Signature=95caab691e465e6b4e5f167bad16f50c725188ede5e2ef28ddba4167bed1cf93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
