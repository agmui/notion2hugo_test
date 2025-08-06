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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3BRL67%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCICIkSSmlHwEIJfrh1MY6Rffenoi7JNVOHIll3qZ5bsVMAiEAq%2BdXYV2I6cC0K6%2BCMZYe7yXBSbX%2FcVWxzdIV9A44K%2BQq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDODp3dZBQr9jKYHwGSrcA%2B23cJGxk7AcQCf5%2FnlRkZ2skN55ZUHls%2B4TtgM8Hs%2FbckrwRsJDtkypxDbZJcQ0c0nlq3go2ffyeCDdOVXshdiLEJle0FNUKMOzs5NsSK7cnhn0NUn41HcfOaPjS2BqmeXaZ5ffEYIIikW67SnHGu0lNw8EvOMmExkWUPQkuWPTEgXpBSGg8ZQBmx7vr49SUvvabb1zmsFUy4mGQihD5BIpql0TfjKV1nBAkNG6pnFTJFe12PLSRrEFiD1bdHPGH%2FByhjJbO70vpJo6SQUHgmVTC%2FtrWxNCASUOlAiWfptj47MbVkp%2BAe7nUgpuwglNN8s9VcV7Gij7wmn42uhGZSJny%2F8WNDP6iVFalPynbO3D4Y%2BjIlIiVpiKK4Siz%2FCtfrka87%2FhlNzdKEZbK%2BEzAMYtVFB7%2F2EunnKaNxpwk%2BKJGcZtmGTMM6LsVFfCUaEC8n2BEPe5j%2B1Hhte%2FSLbnEzPS0xktbSDb3G6vUWeZikNGhwB30c6%2BkT8SmwCzJqfsUM%2FDClK%2FNFwn5zzzhYC%2BSxtE8mdVPyNhiQ9yMtaxY67N2k4knifqlhEfvsmaO8rGlISlpxQlCJDJ%2B1xyS06raL9I9N%2BC23xcaZxXLyZuZ0H4GXyo%2BR5vq0nI1NxNMKnLy8QGOqUBz0FGSsjcxl5KBlt%2BKuR%2F18PWg4VlizmiXFf6KFnXS5DCg84Wsm4APn2gHtTG8Pfvw8pcJjlMFDWt5qJdObakjy7ckGXImDHcsA%2BxYjesmJkcfkNmPReqyTd4q6bK5onaJa3kRxW9RwVTPb8suTsuDMZyPpWHqyZaTG5s9ZxTw6b5hS%2BcJ1TX7w04pWSJps1mOKoc1wvNUSZqs4gI9EI8wQ1%2Fw1%2Fp&X-Amz-Signature=b6bf48e4a9b11b2d71b1789504c03dd14db3b18a45bb6d85853aacd06b1ed127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCAZ3W2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFI%2BEXh7Y%2BxwovTAfhdIHL71UZ5FarQN%2FwqgPojYAuk1AiAQOiUqz%2Bdzk7M2wDZ8dMyjE5attgPySuyJ7G1vvgrHjCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCBiFFsi5mjkzjOpoKtwDEqqWl8h%2BtHJ6hCLiSYi%2BNCptX5EPnps7VQzC92piYr%2B1dUqA51YuanzOFeDFvzAXkGTmw13dRAnKqbVWXZ7EApS5FWSA4ypbNgkIStyFAP3diB%2Fl3gJ3BnbPVr%2BM4lz1lxltH1D51AWTdROryjXzgUmuMUnLGrpWtP2OvnekGYXmDavzJAkNi9xefqOI0LHcCt2OBP94yPm0jWNbHdjrzJAGxXWvaqLMDeFnVLloO1lJuBDMNja563hGX2jHcWhRlMPcJYqeqfwyrWBCwaY26M8f3ynjTOQoKB7Ua3U56eiWWv%2FDkH1P2BviBvdYqEe973y%2FMmvjB2K%2FYF5Se6eyuND60cDqIcihLYflLUS%2BhcM06BtsC0GtmN%2FBKgcbuytf%2FqnILmyy6UBbRYViLYfaygfSVHbN9HI4YbWMtW7oxwuiEuGLDaZbqOdwZQU%2Fv0DuLtS2q63TmdaSV6I9RQZFXyazGbOz0Bj%2BOPTg3dwBMvHZolxHze1RiOV0%2BIxP%2BdXFZguQTelRVn3cQAzLbgtarQ%2Bi5xrQR6m3Sk%2BHYXmItHGVP%2BN2xgwicCtiWl6xyjdtCBRSLe6rqzzOd2PfaQ53McHcRP15qkw7Axk3IYXsd9Sk1ZNiawX%2FAX129icwk8vLxAY6pgGlYQHsCOgO4zQGckUz2Vr9WU9L%2FNo%2Bpl%2F7qkDOhDbGTbO4N7Ij7utdXpbfqfcHUXIWB8LdAFzUIKLMQUjiYx0Tmson%2FrgAC8kkpw0IlqvGhaUy3XfiM0Pgmzz4NUaW3bza4GS5ZMnC1M9FZo6kOUZoLxuL8H4ynJJJelF%2Fu%2BQGdMvd3kcUf5fxJVas8NQuSMEbovO4gztyXmqUlgUvboaXeBrlHHws&X-Amz-Signature=264d3b73f17ed0a4a49296df0323598d37dc269895b53f83870748ef599970dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCAZ3W2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFI%2BEXh7Y%2BxwovTAfhdIHL71UZ5FarQN%2FwqgPojYAuk1AiAQOiUqz%2Bdzk7M2wDZ8dMyjE5attgPySuyJ7G1vvgrHjCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCBiFFsi5mjkzjOpoKtwDEqqWl8h%2BtHJ6hCLiSYi%2BNCptX5EPnps7VQzC92piYr%2B1dUqA51YuanzOFeDFvzAXkGTmw13dRAnKqbVWXZ7EApS5FWSA4ypbNgkIStyFAP3diB%2Fl3gJ3BnbPVr%2BM4lz1lxltH1D51AWTdROryjXzgUmuMUnLGrpWtP2OvnekGYXmDavzJAkNi9xefqOI0LHcCt2OBP94yPm0jWNbHdjrzJAGxXWvaqLMDeFnVLloO1lJuBDMNja563hGX2jHcWhRlMPcJYqeqfwyrWBCwaY26M8f3ynjTOQoKB7Ua3U56eiWWv%2FDkH1P2BviBvdYqEe973y%2FMmvjB2K%2FYF5Se6eyuND60cDqIcihLYflLUS%2BhcM06BtsC0GtmN%2FBKgcbuytf%2FqnILmyy6UBbRYViLYfaygfSVHbN9HI4YbWMtW7oxwuiEuGLDaZbqOdwZQU%2Fv0DuLtS2q63TmdaSV6I9RQZFXyazGbOz0Bj%2BOPTg3dwBMvHZolxHze1RiOV0%2BIxP%2BdXFZguQTelRVn3cQAzLbgtarQ%2Bi5xrQR6m3Sk%2BHYXmItHGVP%2BN2xgwicCtiWl6xyjdtCBRSLe6rqzzOd2PfaQ53McHcRP15qkw7Axk3IYXsd9Sk1ZNiawX%2FAX129icwk8vLxAY6pgGlYQHsCOgO4zQGckUz2Vr9WU9L%2FNo%2Bpl%2F7qkDOhDbGTbO4N7Ij7utdXpbfqfcHUXIWB8LdAFzUIKLMQUjiYx0Tmson%2FrgAC8kkpw0IlqvGhaUy3XfiM0Pgmzz4NUaW3bza4GS5ZMnC1M9FZo6kOUZoLxuL8H4ynJJJelF%2Fu%2BQGdMvd3kcUf5fxJVas8NQuSMEbovO4gztyXmqUlgUvboaXeBrlHHws&X-Amz-Signature=be0e03120561547b5bfa7cf54eb59b1fc41a7d8f9206a2a7643b25f079d13061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCAZ3W2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFI%2BEXh7Y%2BxwovTAfhdIHL71UZ5FarQN%2FwqgPojYAuk1AiAQOiUqz%2Bdzk7M2wDZ8dMyjE5attgPySuyJ7G1vvgrHjCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCBiFFsi5mjkzjOpoKtwDEqqWl8h%2BtHJ6hCLiSYi%2BNCptX5EPnps7VQzC92piYr%2B1dUqA51YuanzOFeDFvzAXkGTmw13dRAnKqbVWXZ7EApS5FWSA4ypbNgkIStyFAP3diB%2Fl3gJ3BnbPVr%2BM4lz1lxltH1D51AWTdROryjXzgUmuMUnLGrpWtP2OvnekGYXmDavzJAkNi9xefqOI0LHcCt2OBP94yPm0jWNbHdjrzJAGxXWvaqLMDeFnVLloO1lJuBDMNja563hGX2jHcWhRlMPcJYqeqfwyrWBCwaY26M8f3ynjTOQoKB7Ua3U56eiWWv%2FDkH1P2BviBvdYqEe973y%2FMmvjB2K%2FYF5Se6eyuND60cDqIcihLYflLUS%2BhcM06BtsC0GtmN%2FBKgcbuytf%2FqnILmyy6UBbRYViLYfaygfSVHbN9HI4YbWMtW7oxwuiEuGLDaZbqOdwZQU%2Fv0DuLtS2q63TmdaSV6I9RQZFXyazGbOz0Bj%2BOPTg3dwBMvHZolxHze1RiOV0%2BIxP%2BdXFZguQTelRVn3cQAzLbgtarQ%2Bi5xrQR6m3Sk%2BHYXmItHGVP%2BN2xgwicCtiWl6xyjdtCBRSLe6rqzzOd2PfaQ53McHcRP15qkw7Axk3IYXsd9Sk1ZNiawX%2FAX129icwk8vLxAY6pgGlYQHsCOgO4zQGckUz2Vr9WU9L%2FNo%2Bpl%2F7qkDOhDbGTbO4N7Ij7utdXpbfqfcHUXIWB8LdAFzUIKLMQUjiYx0Tmson%2FrgAC8kkpw0IlqvGhaUy3XfiM0Pgmzz4NUaW3bza4GS5ZMnC1M9FZo6kOUZoLxuL8H4ynJJJelF%2Fu%2BQGdMvd3kcUf5fxJVas8NQuSMEbovO4gztyXmqUlgUvboaXeBrlHHws&X-Amz-Signature=e64421ae6b6e149b3b3e066c04262eb79ac517daa67a614cd428982cb74fc4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCAZ3W2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFI%2BEXh7Y%2BxwovTAfhdIHL71UZ5FarQN%2FwqgPojYAuk1AiAQOiUqz%2Bdzk7M2wDZ8dMyjE5attgPySuyJ7G1vvgrHjCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCBiFFsi5mjkzjOpoKtwDEqqWl8h%2BtHJ6hCLiSYi%2BNCptX5EPnps7VQzC92piYr%2B1dUqA51YuanzOFeDFvzAXkGTmw13dRAnKqbVWXZ7EApS5FWSA4ypbNgkIStyFAP3diB%2Fl3gJ3BnbPVr%2BM4lz1lxltH1D51AWTdROryjXzgUmuMUnLGrpWtP2OvnekGYXmDavzJAkNi9xefqOI0LHcCt2OBP94yPm0jWNbHdjrzJAGxXWvaqLMDeFnVLloO1lJuBDMNja563hGX2jHcWhRlMPcJYqeqfwyrWBCwaY26M8f3ynjTOQoKB7Ua3U56eiWWv%2FDkH1P2BviBvdYqEe973y%2FMmvjB2K%2FYF5Se6eyuND60cDqIcihLYflLUS%2BhcM06BtsC0GtmN%2FBKgcbuytf%2FqnILmyy6UBbRYViLYfaygfSVHbN9HI4YbWMtW7oxwuiEuGLDaZbqOdwZQU%2Fv0DuLtS2q63TmdaSV6I9RQZFXyazGbOz0Bj%2BOPTg3dwBMvHZolxHze1RiOV0%2BIxP%2BdXFZguQTelRVn3cQAzLbgtarQ%2Bi5xrQR6m3Sk%2BHYXmItHGVP%2BN2xgwicCtiWl6xyjdtCBRSLe6rqzzOd2PfaQ53McHcRP15qkw7Axk3IYXsd9Sk1ZNiawX%2FAX129icwk8vLxAY6pgGlYQHsCOgO4zQGckUz2Vr9WU9L%2FNo%2Bpl%2F7qkDOhDbGTbO4N7Ij7utdXpbfqfcHUXIWB8LdAFzUIKLMQUjiYx0Tmson%2FrgAC8kkpw0IlqvGhaUy3XfiM0Pgmzz4NUaW3bza4GS5ZMnC1M9FZo6kOUZoLxuL8H4ynJJJelF%2Fu%2BQGdMvd3kcUf5fxJVas8NQuSMEbovO4gztyXmqUlgUvboaXeBrlHHws&X-Amz-Signature=ac86819deded96178f0c432c683fa222afd0a1a8e950e2778722bae4e9aeedd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCAZ3W2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFI%2BEXh7Y%2BxwovTAfhdIHL71UZ5FarQN%2FwqgPojYAuk1AiAQOiUqz%2Bdzk7M2wDZ8dMyjE5attgPySuyJ7G1vvgrHjCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCBiFFsi5mjkzjOpoKtwDEqqWl8h%2BtHJ6hCLiSYi%2BNCptX5EPnps7VQzC92piYr%2B1dUqA51YuanzOFeDFvzAXkGTmw13dRAnKqbVWXZ7EApS5FWSA4ypbNgkIStyFAP3diB%2Fl3gJ3BnbPVr%2BM4lz1lxltH1D51AWTdROryjXzgUmuMUnLGrpWtP2OvnekGYXmDavzJAkNi9xefqOI0LHcCt2OBP94yPm0jWNbHdjrzJAGxXWvaqLMDeFnVLloO1lJuBDMNja563hGX2jHcWhRlMPcJYqeqfwyrWBCwaY26M8f3ynjTOQoKB7Ua3U56eiWWv%2FDkH1P2BviBvdYqEe973y%2FMmvjB2K%2FYF5Se6eyuND60cDqIcihLYflLUS%2BhcM06BtsC0GtmN%2FBKgcbuytf%2FqnILmyy6UBbRYViLYfaygfSVHbN9HI4YbWMtW7oxwuiEuGLDaZbqOdwZQU%2Fv0DuLtS2q63TmdaSV6I9RQZFXyazGbOz0Bj%2BOPTg3dwBMvHZolxHze1RiOV0%2BIxP%2BdXFZguQTelRVn3cQAzLbgtarQ%2Bi5xrQR6m3Sk%2BHYXmItHGVP%2BN2xgwicCtiWl6xyjdtCBRSLe6rqzzOd2PfaQ53McHcRP15qkw7Axk3IYXsd9Sk1ZNiawX%2FAX129icwk8vLxAY6pgGlYQHsCOgO4zQGckUz2Vr9WU9L%2FNo%2Bpl%2F7qkDOhDbGTbO4N7Ij7utdXpbfqfcHUXIWB8LdAFzUIKLMQUjiYx0Tmson%2FrgAC8kkpw0IlqvGhaUy3XfiM0Pgmzz4NUaW3bza4GS5ZMnC1M9FZo6kOUZoLxuL8H4ynJJJelF%2Fu%2BQGdMvd3kcUf5fxJVas8NQuSMEbovO4gztyXmqUlgUvboaXeBrlHHws&X-Amz-Signature=959fceb536a700fadd9099865f2c517ef498773f93c2835bdd119ff5cf0470b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCAZ3W2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFI%2BEXh7Y%2BxwovTAfhdIHL71UZ5FarQN%2FwqgPojYAuk1AiAQOiUqz%2Bdzk7M2wDZ8dMyjE5attgPySuyJ7G1vvgrHjCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCBiFFsi5mjkzjOpoKtwDEqqWl8h%2BtHJ6hCLiSYi%2BNCptX5EPnps7VQzC92piYr%2B1dUqA51YuanzOFeDFvzAXkGTmw13dRAnKqbVWXZ7EApS5FWSA4ypbNgkIStyFAP3diB%2Fl3gJ3BnbPVr%2BM4lz1lxltH1D51AWTdROryjXzgUmuMUnLGrpWtP2OvnekGYXmDavzJAkNi9xefqOI0LHcCt2OBP94yPm0jWNbHdjrzJAGxXWvaqLMDeFnVLloO1lJuBDMNja563hGX2jHcWhRlMPcJYqeqfwyrWBCwaY26M8f3ynjTOQoKB7Ua3U56eiWWv%2FDkH1P2BviBvdYqEe973y%2FMmvjB2K%2FYF5Se6eyuND60cDqIcihLYflLUS%2BhcM06BtsC0GtmN%2FBKgcbuytf%2FqnILmyy6UBbRYViLYfaygfSVHbN9HI4YbWMtW7oxwuiEuGLDaZbqOdwZQU%2Fv0DuLtS2q63TmdaSV6I9RQZFXyazGbOz0Bj%2BOPTg3dwBMvHZolxHze1RiOV0%2BIxP%2BdXFZguQTelRVn3cQAzLbgtarQ%2Bi5xrQR6m3Sk%2BHYXmItHGVP%2BN2xgwicCtiWl6xyjdtCBRSLe6rqzzOd2PfaQ53McHcRP15qkw7Axk3IYXsd9Sk1ZNiawX%2FAX129icwk8vLxAY6pgGlYQHsCOgO4zQGckUz2Vr9WU9L%2FNo%2Bpl%2F7qkDOhDbGTbO4N7Ij7utdXpbfqfcHUXIWB8LdAFzUIKLMQUjiYx0Tmson%2FrgAC8kkpw0IlqvGhaUy3XfiM0Pgmzz4NUaW3bza4GS5ZMnC1M9FZo6kOUZoLxuL8H4ynJJJelF%2Fu%2BQGdMvd3kcUf5fxJVas8NQuSMEbovO4gztyXmqUlgUvboaXeBrlHHws&X-Amz-Signature=9773698fd7c9ea76d3fcd29428afb370167a7f9fc6478c123af52908cd61881e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCAZ3W2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFI%2BEXh7Y%2BxwovTAfhdIHL71UZ5FarQN%2FwqgPojYAuk1AiAQOiUqz%2Bdzk7M2wDZ8dMyjE5attgPySuyJ7G1vvgrHjCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCBiFFsi5mjkzjOpoKtwDEqqWl8h%2BtHJ6hCLiSYi%2BNCptX5EPnps7VQzC92piYr%2B1dUqA51YuanzOFeDFvzAXkGTmw13dRAnKqbVWXZ7EApS5FWSA4ypbNgkIStyFAP3diB%2Fl3gJ3BnbPVr%2BM4lz1lxltH1D51AWTdROryjXzgUmuMUnLGrpWtP2OvnekGYXmDavzJAkNi9xefqOI0LHcCt2OBP94yPm0jWNbHdjrzJAGxXWvaqLMDeFnVLloO1lJuBDMNja563hGX2jHcWhRlMPcJYqeqfwyrWBCwaY26M8f3ynjTOQoKB7Ua3U56eiWWv%2FDkH1P2BviBvdYqEe973y%2FMmvjB2K%2FYF5Se6eyuND60cDqIcihLYflLUS%2BhcM06BtsC0GtmN%2FBKgcbuytf%2FqnILmyy6UBbRYViLYfaygfSVHbN9HI4YbWMtW7oxwuiEuGLDaZbqOdwZQU%2Fv0DuLtS2q63TmdaSV6I9RQZFXyazGbOz0Bj%2BOPTg3dwBMvHZolxHze1RiOV0%2BIxP%2BdXFZguQTelRVn3cQAzLbgtarQ%2Bi5xrQR6m3Sk%2BHYXmItHGVP%2BN2xgwicCtiWl6xyjdtCBRSLe6rqzzOd2PfaQ53McHcRP15qkw7Axk3IYXsd9Sk1ZNiawX%2FAX129icwk8vLxAY6pgGlYQHsCOgO4zQGckUz2Vr9WU9L%2FNo%2Bpl%2F7qkDOhDbGTbO4N7Ij7utdXpbfqfcHUXIWB8LdAFzUIKLMQUjiYx0Tmson%2FrgAC8kkpw0IlqvGhaUy3XfiM0Pgmzz4NUaW3bza4GS5ZMnC1M9FZo6kOUZoLxuL8H4ynJJJelF%2Fu%2BQGdMvd3kcUf5fxJVas8NQuSMEbovO4gztyXmqUlgUvboaXeBrlHHws&X-Amz-Signature=3b63949fba3112922046b13b9ac59ed2eeec394cba12bdbbc835a38fa4184f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCAZ3W2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFI%2BEXh7Y%2BxwovTAfhdIHL71UZ5FarQN%2FwqgPojYAuk1AiAQOiUqz%2Bdzk7M2wDZ8dMyjE5attgPySuyJ7G1vvgrHjCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCBiFFsi5mjkzjOpoKtwDEqqWl8h%2BtHJ6hCLiSYi%2BNCptX5EPnps7VQzC92piYr%2B1dUqA51YuanzOFeDFvzAXkGTmw13dRAnKqbVWXZ7EApS5FWSA4ypbNgkIStyFAP3diB%2Fl3gJ3BnbPVr%2BM4lz1lxltH1D51AWTdROryjXzgUmuMUnLGrpWtP2OvnekGYXmDavzJAkNi9xefqOI0LHcCt2OBP94yPm0jWNbHdjrzJAGxXWvaqLMDeFnVLloO1lJuBDMNja563hGX2jHcWhRlMPcJYqeqfwyrWBCwaY26M8f3ynjTOQoKB7Ua3U56eiWWv%2FDkH1P2BviBvdYqEe973y%2FMmvjB2K%2FYF5Se6eyuND60cDqIcihLYflLUS%2BhcM06BtsC0GtmN%2FBKgcbuytf%2FqnILmyy6UBbRYViLYfaygfSVHbN9HI4YbWMtW7oxwuiEuGLDaZbqOdwZQU%2Fv0DuLtS2q63TmdaSV6I9RQZFXyazGbOz0Bj%2BOPTg3dwBMvHZolxHze1RiOV0%2BIxP%2BdXFZguQTelRVn3cQAzLbgtarQ%2Bi5xrQR6m3Sk%2BHYXmItHGVP%2BN2xgwicCtiWl6xyjdtCBRSLe6rqzzOd2PfaQ53McHcRP15qkw7Axk3IYXsd9Sk1ZNiawX%2FAX129icwk8vLxAY6pgGlYQHsCOgO4zQGckUz2Vr9WU9L%2FNo%2Bpl%2F7qkDOhDbGTbO4N7Ij7utdXpbfqfcHUXIWB8LdAFzUIKLMQUjiYx0Tmson%2FrgAC8kkpw0IlqvGhaUy3XfiM0Pgmzz4NUaW3bza4GS5ZMnC1M9FZo6kOUZoLxuL8H4ynJJJelF%2Fu%2BQGdMvd3kcUf5fxJVas8NQuSMEbovO4gztyXmqUlgUvboaXeBrlHHws&X-Amz-Signature=bda801d25d63cfa06dc28564ec90366bb8adf93f4847273db2a888ed1a8c6ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCAZ3W2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFI%2BEXh7Y%2BxwovTAfhdIHL71UZ5FarQN%2FwqgPojYAuk1AiAQOiUqz%2Bdzk7M2wDZ8dMyjE5attgPySuyJ7G1vvgrHjCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCBiFFsi5mjkzjOpoKtwDEqqWl8h%2BtHJ6hCLiSYi%2BNCptX5EPnps7VQzC92piYr%2B1dUqA51YuanzOFeDFvzAXkGTmw13dRAnKqbVWXZ7EApS5FWSA4ypbNgkIStyFAP3diB%2Fl3gJ3BnbPVr%2BM4lz1lxltH1D51AWTdROryjXzgUmuMUnLGrpWtP2OvnekGYXmDavzJAkNi9xefqOI0LHcCt2OBP94yPm0jWNbHdjrzJAGxXWvaqLMDeFnVLloO1lJuBDMNja563hGX2jHcWhRlMPcJYqeqfwyrWBCwaY26M8f3ynjTOQoKB7Ua3U56eiWWv%2FDkH1P2BviBvdYqEe973y%2FMmvjB2K%2FYF5Se6eyuND60cDqIcihLYflLUS%2BhcM06BtsC0GtmN%2FBKgcbuytf%2FqnILmyy6UBbRYViLYfaygfSVHbN9HI4YbWMtW7oxwuiEuGLDaZbqOdwZQU%2Fv0DuLtS2q63TmdaSV6I9RQZFXyazGbOz0Bj%2BOPTg3dwBMvHZolxHze1RiOV0%2BIxP%2BdXFZguQTelRVn3cQAzLbgtarQ%2Bi5xrQR6m3Sk%2BHYXmItHGVP%2BN2xgwicCtiWl6xyjdtCBRSLe6rqzzOd2PfaQ53McHcRP15qkw7Axk3IYXsd9Sk1ZNiawX%2FAX129icwk8vLxAY6pgGlYQHsCOgO4zQGckUz2Vr9WU9L%2FNo%2Bpl%2F7qkDOhDbGTbO4N7Ij7utdXpbfqfcHUXIWB8LdAFzUIKLMQUjiYx0Tmson%2FrgAC8kkpw0IlqvGhaUy3XfiM0Pgmzz4NUaW3bza4GS5ZMnC1M9FZo6kOUZoLxuL8H4ynJJJelF%2Fu%2BQGdMvd3kcUf5fxJVas8NQuSMEbovO4gztyXmqUlgUvboaXeBrlHHws&X-Amz-Signature=86eb173adfac648f3610ae0dc02a3ab138783fb1f2cff1017061d972e1721bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJCAZ3W2%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFI%2BEXh7Y%2BxwovTAfhdIHL71UZ5FarQN%2FwqgPojYAuk1AiAQOiUqz%2Bdzk7M2wDZ8dMyjE5attgPySuyJ7G1vvgrHjCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCBiFFsi5mjkzjOpoKtwDEqqWl8h%2BtHJ6hCLiSYi%2BNCptX5EPnps7VQzC92piYr%2B1dUqA51YuanzOFeDFvzAXkGTmw13dRAnKqbVWXZ7EApS5FWSA4ypbNgkIStyFAP3diB%2Fl3gJ3BnbPVr%2BM4lz1lxltH1D51AWTdROryjXzgUmuMUnLGrpWtP2OvnekGYXmDavzJAkNi9xefqOI0LHcCt2OBP94yPm0jWNbHdjrzJAGxXWvaqLMDeFnVLloO1lJuBDMNja563hGX2jHcWhRlMPcJYqeqfwyrWBCwaY26M8f3ynjTOQoKB7Ua3U56eiWWv%2FDkH1P2BviBvdYqEe973y%2FMmvjB2K%2FYF5Se6eyuND60cDqIcihLYflLUS%2BhcM06BtsC0GtmN%2FBKgcbuytf%2FqnILmyy6UBbRYViLYfaygfSVHbN9HI4YbWMtW7oxwuiEuGLDaZbqOdwZQU%2Fv0DuLtS2q63TmdaSV6I9RQZFXyazGbOz0Bj%2BOPTg3dwBMvHZolxHze1RiOV0%2BIxP%2BdXFZguQTelRVn3cQAzLbgtarQ%2Bi5xrQR6m3Sk%2BHYXmItHGVP%2BN2xgwicCtiWl6xyjdtCBRSLe6rqzzOd2PfaQ53McHcRP15qkw7Axk3IYXsd9Sk1ZNiawX%2FAX129icwk8vLxAY6pgGlYQHsCOgO4zQGckUz2Vr9WU9L%2FNo%2Bpl%2F7qkDOhDbGTbO4N7Ij7utdXpbfqfcHUXIWB8LdAFzUIKLMQUjiYx0Tmson%2FrgAC8kkpw0IlqvGhaUy3XfiM0Pgmzz4NUaW3bza4GS5ZMnC1M9FZo6kOUZoLxuL8H4ynJJJelF%2Fu%2BQGdMvd3kcUf5fxJVas8NQuSMEbovO4gztyXmqUlgUvboaXeBrlHHws&X-Amz-Signature=ac86819deded96178f0c432c683fa222afd0a1a8e950e2778722bae4e9aeedd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
