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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJS7ZY4%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIF3Y%2Fx7Xq6zYCtOZYJH0PFbaHLExW346sbOXhbCiLzxAAiEA65LhBFE%2FuSZ1zBDbiJ4pQsNGh2Jt5VD%2BoFHcvth6fx0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJn7Jn3ZEPTN0NLhtircAwgi5c8zztCZRVjrQ7rYTosjTAiax2GA%2Bt1zaBXr7zUJ4jVv%2BtnU4bPsX%2FJkZ9rWV6zD2I5M4bUZQGilxX0v3uWA2NtBazaEEF84Xyrv%2F5TPXH5FLWOQMYaOUtcEyonuC3TngMy9ujulvGSKkS1VX4KN5qy6inCS7k%2BI7tyDsr6ZOiQ87Z0k91wpkjNNbnxizjs67nwxzK8rPqrd%2B6ruC8LcOBPxgyuZiwTEVTifzCH5zaeD%2FfofSSq%2B1LqR0%2BkjSJ7qSiBc9A5PFpD3hGWsRXCrVdJKyuDzK69qEsnrCLrZPUgnYDyC61R9TrSWbb%2BWNw%2Fy%2BgvPlpKnwswAFEZyGNcnPdj47jac%2BfyYM%2B6n8w7W1COBN4nX8xJKKYJUTzs7CQ%2F2sJmQcMtEfTugYos%2BJ5H9ZXQSEF2SF1rfwFEh7BTYlnBAtwM9wFjoae5SJT8i8cQu41pv5F47Qr%2F3CV%2BNGEFKkOC2%2BB6V3kzqspoTuvGGnzHpy9lF%2Bi1Yh7Z7NI4HSfeuaYPI4W6HfR%2BG2dkc0jcuBB%2FTqjWs0oSZ2puTX%2BdZvSq8gR4yuOW92tdCcT7Nk93OWTh5MVKZbA7Rdl2znz5OkRO8Z5WXswOeeZVwoJZ9Xs5Bz%2BrUGBPM1ZdmMOeiwM8GOqUB5WRqLdcIJy3Lqk6OUfFKu0u19YZ9KV3Wqhy2XzJUpK%2BkXbiaW3848MEJjAQLLymVyxJsWg6tmjNmLJLHXLVu3v1y%2Bz8IiS8b%2BO4Vy8v6nq0%2FWKO43E7nRs1KxUJfNcVL%2FGFdRjlv8l5YbqfbNjwCuk16UexqRiAflJgjaSfkfn9pbbU0qB9N%2FhERmyPm0QnMrPd6RDPF4J%2B1tqw5xXMpb2348GE9&X-Amz-Signature=22e03b2ee84dea61197b01e9f1dccc6d1ab832e23639da48ddec2f3d12eba648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXLOFA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDnWmQZxw9HpAHjc8z8L5R02jnyZ1YxqyUfzm5NH%2FS0fAiEArV2uLEX27nDPjc1LB87cA83C4rM%2F2ikom8hnaW1fwPEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwN%2BTACcNCZTbw4VircA%2BAUwhVZQyhLuSEMSlKQ%2BGltVAuwPnYTAeKej2unwnNaDoyC2QJEOFpMJI80Mjon5%2FiG3SIGxL8FeHMx1mTPgAHtKy4YeZNXqRPHVluxdX4KRm%2FvbXk5jzu0kc5F2%2BwbmHEv918qqraPDFFfokA%2FLMNDbmxZc1rjuuH0qZoLKBASstCRyCLw%2FDYuljYG%2Ffe1Z9lAkPQl9iBmUgH0XshuVksfN8O%2BaRBC9a5997JmK2tH2p7HjdpCqlHfcH%2BO%2BFP4SxjydMVoQxj2BfsgPWJI8Mlmyko8Qu%2FVxej0lfR9zfgXxs82zkosb%2BIaeh%2FkCKnBlfWp02NoQMXslt63XahXVJfUsNQa8fpeT9UI8%2FTsxkRD%2BU3%2FBwDB6Sg2s9ohlZ%2Ft%2FLn%2FMjWhz9UqfxWbhzsXqZveoktnkLnop4G45xxodpkfhPhjlYcdfafkHJKirIA1qJKCm%2FKKXo7Ih7oPK6zXUMtoHiq2dl2IMscqdOq5Au8zy%2F5c74q0%2BP%2FZftLB31FKpthwVQ15vO9lOs99WV3M4sVqBGODp9bfm9CxajsGJFii0L0p41KF%2F%2BkC3vz4WLe6IelxTp5Mcq2RsPgwS8X79XPcx2hotjWutBkvezEaEJNeawlqF4kkft%2BYVEBTMOakwM8GOqUBXwNYiP0CjS%2FKzrAJjfN%2BeDGJ%2B2PMSZoI4HyHOpE%2FZOVUHtvmNUd6HS9kS2spnw4u6cm9jveQh0KkUkHAEnncEScEVKCOfapuk7r43gYacpLbcN%2BhuBclUb8Wdl020PeArJNIyDzhMH8pGwBDnv0M%2BfguO7JJDtiB6hzpBC0crfsVpElSiBMRI8ciEMRrtuF%2BJVEWjQwW7QxlkiIZXA8KAoC9%2BDQR&X-Amz-Signature=36f7682372babe671ba9f33fc00c925829e4f1071571721a5f69bb08b6868408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXLOFA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDnWmQZxw9HpAHjc8z8L5R02jnyZ1YxqyUfzm5NH%2FS0fAiEArV2uLEX27nDPjc1LB87cA83C4rM%2F2ikom8hnaW1fwPEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwN%2BTACcNCZTbw4VircA%2BAUwhVZQyhLuSEMSlKQ%2BGltVAuwPnYTAeKej2unwnNaDoyC2QJEOFpMJI80Mjon5%2FiG3SIGxL8FeHMx1mTPgAHtKy4YeZNXqRPHVluxdX4KRm%2FvbXk5jzu0kc5F2%2BwbmHEv918qqraPDFFfokA%2FLMNDbmxZc1rjuuH0qZoLKBASstCRyCLw%2FDYuljYG%2Ffe1Z9lAkPQl9iBmUgH0XshuVksfN8O%2BaRBC9a5997JmK2tH2p7HjdpCqlHfcH%2BO%2BFP4SxjydMVoQxj2BfsgPWJI8Mlmyko8Qu%2FVxej0lfR9zfgXxs82zkosb%2BIaeh%2FkCKnBlfWp02NoQMXslt63XahXVJfUsNQa8fpeT9UI8%2FTsxkRD%2BU3%2FBwDB6Sg2s9ohlZ%2Ft%2FLn%2FMjWhz9UqfxWbhzsXqZveoktnkLnop4G45xxodpkfhPhjlYcdfafkHJKirIA1qJKCm%2FKKXo7Ih7oPK6zXUMtoHiq2dl2IMscqdOq5Au8zy%2F5c74q0%2BP%2FZftLB31FKpthwVQ15vO9lOs99WV3M4sVqBGODp9bfm9CxajsGJFii0L0p41KF%2F%2BkC3vz4WLe6IelxTp5Mcq2RsPgwS8X79XPcx2hotjWutBkvezEaEJNeawlqF4kkft%2BYVEBTMOakwM8GOqUBXwNYiP0CjS%2FKzrAJjfN%2BeDGJ%2B2PMSZoI4HyHOpE%2FZOVUHtvmNUd6HS9kS2spnw4u6cm9jveQh0KkUkHAEnncEScEVKCOfapuk7r43gYacpLbcN%2BhuBclUb8Wdl020PeArJNIyDzhMH8pGwBDnv0M%2BfguO7JJDtiB6hzpBC0crfsVpElSiBMRI8ciEMRrtuF%2BJVEWjQwW7QxlkiIZXA8KAoC9%2BDQR&X-Amz-Signature=3526ce5d6d90d33ad255a6f4a8fa555cd10d993fdd79548a9f5ac2d89e3dca52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXLOFA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDnWmQZxw9HpAHjc8z8L5R02jnyZ1YxqyUfzm5NH%2FS0fAiEArV2uLEX27nDPjc1LB87cA83C4rM%2F2ikom8hnaW1fwPEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwN%2BTACcNCZTbw4VircA%2BAUwhVZQyhLuSEMSlKQ%2BGltVAuwPnYTAeKej2unwnNaDoyC2QJEOFpMJI80Mjon5%2FiG3SIGxL8FeHMx1mTPgAHtKy4YeZNXqRPHVluxdX4KRm%2FvbXk5jzu0kc5F2%2BwbmHEv918qqraPDFFfokA%2FLMNDbmxZc1rjuuH0qZoLKBASstCRyCLw%2FDYuljYG%2Ffe1Z9lAkPQl9iBmUgH0XshuVksfN8O%2BaRBC9a5997JmK2tH2p7HjdpCqlHfcH%2BO%2BFP4SxjydMVoQxj2BfsgPWJI8Mlmyko8Qu%2FVxej0lfR9zfgXxs82zkosb%2BIaeh%2FkCKnBlfWp02NoQMXslt63XahXVJfUsNQa8fpeT9UI8%2FTsxkRD%2BU3%2FBwDB6Sg2s9ohlZ%2Ft%2FLn%2FMjWhz9UqfxWbhzsXqZveoktnkLnop4G45xxodpkfhPhjlYcdfafkHJKirIA1qJKCm%2FKKXo7Ih7oPK6zXUMtoHiq2dl2IMscqdOq5Au8zy%2F5c74q0%2BP%2FZftLB31FKpthwVQ15vO9lOs99WV3M4sVqBGODp9bfm9CxajsGJFii0L0p41KF%2F%2BkC3vz4WLe6IelxTp5Mcq2RsPgwS8X79XPcx2hotjWutBkvezEaEJNeawlqF4kkft%2BYVEBTMOakwM8GOqUBXwNYiP0CjS%2FKzrAJjfN%2BeDGJ%2B2PMSZoI4HyHOpE%2FZOVUHtvmNUd6HS9kS2spnw4u6cm9jveQh0KkUkHAEnncEScEVKCOfapuk7r43gYacpLbcN%2BhuBclUb8Wdl020PeArJNIyDzhMH8pGwBDnv0M%2BfguO7JJDtiB6hzpBC0crfsVpElSiBMRI8ciEMRrtuF%2BJVEWjQwW7QxlkiIZXA8KAoC9%2BDQR&X-Amz-Signature=f536b061ca13e230e8dca12e9c4c924e62da387ff1e7e5d06888e188da2ebb14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXLOFA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDnWmQZxw9HpAHjc8z8L5R02jnyZ1YxqyUfzm5NH%2FS0fAiEArV2uLEX27nDPjc1LB87cA83C4rM%2F2ikom8hnaW1fwPEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwN%2BTACcNCZTbw4VircA%2BAUwhVZQyhLuSEMSlKQ%2BGltVAuwPnYTAeKej2unwnNaDoyC2QJEOFpMJI80Mjon5%2FiG3SIGxL8FeHMx1mTPgAHtKy4YeZNXqRPHVluxdX4KRm%2FvbXk5jzu0kc5F2%2BwbmHEv918qqraPDFFfokA%2FLMNDbmxZc1rjuuH0qZoLKBASstCRyCLw%2FDYuljYG%2Ffe1Z9lAkPQl9iBmUgH0XshuVksfN8O%2BaRBC9a5997JmK2tH2p7HjdpCqlHfcH%2BO%2BFP4SxjydMVoQxj2BfsgPWJI8Mlmyko8Qu%2FVxej0lfR9zfgXxs82zkosb%2BIaeh%2FkCKnBlfWp02NoQMXslt63XahXVJfUsNQa8fpeT9UI8%2FTsxkRD%2BU3%2FBwDB6Sg2s9ohlZ%2Ft%2FLn%2FMjWhz9UqfxWbhzsXqZveoktnkLnop4G45xxodpkfhPhjlYcdfafkHJKirIA1qJKCm%2FKKXo7Ih7oPK6zXUMtoHiq2dl2IMscqdOq5Au8zy%2F5c74q0%2BP%2FZftLB31FKpthwVQ15vO9lOs99WV3M4sVqBGODp9bfm9CxajsGJFii0L0p41KF%2F%2BkC3vz4WLe6IelxTp5Mcq2RsPgwS8X79XPcx2hotjWutBkvezEaEJNeawlqF4kkft%2BYVEBTMOakwM8GOqUBXwNYiP0CjS%2FKzrAJjfN%2BeDGJ%2B2PMSZoI4HyHOpE%2FZOVUHtvmNUd6HS9kS2spnw4u6cm9jveQh0KkUkHAEnncEScEVKCOfapuk7r43gYacpLbcN%2BhuBclUb8Wdl020PeArJNIyDzhMH8pGwBDnv0M%2BfguO7JJDtiB6hzpBC0crfsVpElSiBMRI8ciEMRrtuF%2BJVEWjQwW7QxlkiIZXA8KAoC9%2BDQR&X-Amz-Signature=bcafd01165461f427002ac1af1c40c55008de47c88739339ab542cd9c3669e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXLOFA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDnWmQZxw9HpAHjc8z8L5R02jnyZ1YxqyUfzm5NH%2FS0fAiEArV2uLEX27nDPjc1LB87cA83C4rM%2F2ikom8hnaW1fwPEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwN%2BTACcNCZTbw4VircA%2BAUwhVZQyhLuSEMSlKQ%2BGltVAuwPnYTAeKej2unwnNaDoyC2QJEOFpMJI80Mjon5%2FiG3SIGxL8FeHMx1mTPgAHtKy4YeZNXqRPHVluxdX4KRm%2FvbXk5jzu0kc5F2%2BwbmHEv918qqraPDFFfokA%2FLMNDbmxZc1rjuuH0qZoLKBASstCRyCLw%2FDYuljYG%2Ffe1Z9lAkPQl9iBmUgH0XshuVksfN8O%2BaRBC9a5997JmK2tH2p7HjdpCqlHfcH%2BO%2BFP4SxjydMVoQxj2BfsgPWJI8Mlmyko8Qu%2FVxej0lfR9zfgXxs82zkosb%2BIaeh%2FkCKnBlfWp02NoQMXslt63XahXVJfUsNQa8fpeT9UI8%2FTsxkRD%2BU3%2FBwDB6Sg2s9ohlZ%2Ft%2FLn%2FMjWhz9UqfxWbhzsXqZveoktnkLnop4G45xxodpkfhPhjlYcdfafkHJKirIA1qJKCm%2FKKXo7Ih7oPK6zXUMtoHiq2dl2IMscqdOq5Au8zy%2F5c74q0%2BP%2FZftLB31FKpthwVQ15vO9lOs99WV3M4sVqBGODp9bfm9CxajsGJFii0L0p41KF%2F%2BkC3vz4WLe6IelxTp5Mcq2RsPgwS8X79XPcx2hotjWutBkvezEaEJNeawlqF4kkft%2BYVEBTMOakwM8GOqUBXwNYiP0CjS%2FKzrAJjfN%2BeDGJ%2B2PMSZoI4HyHOpE%2FZOVUHtvmNUd6HS9kS2spnw4u6cm9jveQh0KkUkHAEnncEScEVKCOfapuk7r43gYacpLbcN%2BhuBclUb8Wdl020PeArJNIyDzhMH8pGwBDnv0M%2BfguO7JJDtiB6hzpBC0crfsVpElSiBMRI8ciEMRrtuF%2BJVEWjQwW7QxlkiIZXA8KAoC9%2BDQR&X-Amz-Signature=68ee0c7fb5ca1757cfc12f31532d13975342d0a012871a606c721a3b0aed47df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXLOFA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDnWmQZxw9HpAHjc8z8L5R02jnyZ1YxqyUfzm5NH%2FS0fAiEArV2uLEX27nDPjc1LB87cA83C4rM%2F2ikom8hnaW1fwPEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwN%2BTACcNCZTbw4VircA%2BAUwhVZQyhLuSEMSlKQ%2BGltVAuwPnYTAeKej2unwnNaDoyC2QJEOFpMJI80Mjon5%2FiG3SIGxL8FeHMx1mTPgAHtKy4YeZNXqRPHVluxdX4KRm%2FvbXk5jzu0kc5F2%2BwbmHEv918qqraPDFFfokA%2FLMNDbmxZc1rjuuH0qZoLKBASstCRyCLw%2FDYuljYG%2Ffe1Z9lAkPQl9iBmUgH0XshuVksfN8O%2BaRBC9a5997JmK2tH2p7HjdpCqlHfcH%2BO%2BFP4SxjydMVoQxj2BfsgPWJI8Mlmyko8Qu%2FVxej0lfR9zfgXxs82zkosb%2BIaeh%2FkCKnBlfWp02NoQMXslt63XahXVJfUsNQa8fpeT9UI8%2FTsxkRD%2BU3%2FBwDB6Sg2s9ohlZ%2Ft%2FLn%2FMjWhz9UqfxWbhzsXqZveoktnkLnop4G45xxodpkfhPhjlYcdfafkHJKirIA1qJKCm%2FKKXo7Ih7oPK6zXUMtoHiq2dl2IMscqdOq5Au8zy%2F5c74q0%2BP%2FZftLB31FKpthwVQ15vO9lOs99WV3M4sVqBGODp9bfm9CxajsGJFii0L0p41KF%2F%2BkC3vz4WLe6IelxTp5Mcq2RsPgwS8X79XPcx2hotjWutBkvezEaEJNeawlqF4kkft%2BYVEBTMOakwM8GOqUBXwNYiP0CjS%2FKzrAJjfN%2BeDGJ%2B2PMSZoI4HyHOpE%2FZOVUHtvmNUd6HS9kS2spnw4u6cm9jveQh0KkUkHAEnncEScEVKCOfapuk7r43gYacpLbcN%2BhuBclUb8Wdl020PeArJNIyDzhMH8pGwBDnv0M%2BfguO7JJDtiB6hzpBC0crfsVpElSiBMRI8ciEMRrtuF%2BJVEWjQwW7QxlkiIZXA8KAoC9%2BDQR&X-Amz-Signature=31cbf5de849088709bcbfca33b1987b46fb2d4f8fef3b7d59c7d314c7942031a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXLOFA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDnWmQZxw9HpAHjc8z8L5R02jnyZ1YxqyUfzm5NH%2FS0fAiEArV2uLEX27nDPjc1LB87cA83C4rM%2F2ikom8hnaW1fwPEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwN%2BTACcNCZTbw4VircA%2BAUwhVZQyhLuSEMSlKQ%2BGltVAuwPnYTAeKej2unwnNaDoyC2QJEOFpMJI80Mjon5%2FiG3SIGxL8FeHMx1mTPgAHtKy4YeZNXqRPHVluxdX4KRm%2FvbXk5jzu0kc5F2%2BwbmHEv918qqraPDFFfokA%2FLMNDbmxZc1rjuuH0qZoLKBASstCRyCLw%2FDYuljYG%2Ffe1Z9lAkPQl9iBmUgH0XshuVksfN8O%2BaRBC9a5997JmK2tH2p7HjdpCqlHfcH%2BO%2BFP4SxjydMVoQxj2BfsgPWJI8Mlmyko8Qu%2FVxej0lfR9zfgXxs82zkosb%2BIaeh%2FkCKnBlfWp02NoQMXslt63XahXVJfUsNQa8fpeT9UI8%2FTsxkRD%2BU3%2FBwDB6Sg2s9ohlZ%2Ft%2FLn%2FMjWhz9UqfxWbhzsXqZveoktnkLnop4G45xxodpkfhPhjlYcdfafkHJKirIA1qJKCm%2FKKXo7Ih7oPK6zXUMtoHiq2dl2IMscqdOq5Au8zy%2F5c74q0%2BP%2FZftLB31FKpthwVQ15vO9lOs99WV3M4sVqBGODp9bfm9CxajsGJFii0L0p41KF%2F%2BkC3vz4WLe6IelxTp5Mcq2RsPgwS8X79XPcx2hotjWutBkvezEaEJNeawlqF4kkft%2BYVEBTMOakwM8GOqUBXwNYiP0CjS%2FKzrAJjfN%2BeDGJ%2B2PMSZoI4HyHOpE%2FZOVUHtvmNUd6HS9kS2spnw4u6cm9jveQh0KkUkHAEnncEScEVKCOfapuk7r43gYacpLbcN%2BhuBclUb8Wdl020PeArJNIyDzhMH8pGwBDnv0M%2BfguO7JJDtiB6hzpBC0crfsVpElSiBMRI8ciEMRrtuF%2BJVEWjQwW7QxlkiIZXA8KAoC9%2BDQR&X-Amz-Signature=17acb028c404f8b180c48130f0b4ed5c032d4e7db9e80c9329c9b6115b529d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXLOFA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDnWmQZxw9HpAHjc8z8L5R02jnyZ1YxqyUfzm5NH%2FS0fAiEArV2uLEX27nDPjc1LB87cA83C4rM%2F2ikom8hnaW1fwPEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwN%2BTACcNCZTbw4VircA%2BAUwhVZQyhLuSEMSlKQ%2BGltVAuwPnYTAeKej2unwnNaDoyC2QJEOFpMJI80Mjon5%2FiG3SIGxL8FeHMx1mTPgAHtKy4YeZNXqRPHVluxdX4KRm%2FvbXk5jzu0kc5F2%2BwbmHEv918qqraPDFFfokA%2FLMNDbmxZc1rjuuH0qZoLKBASstCRyCLw%2FDYuljYG%2Ffe1Z9lAkPQl9iBmUgH0XshuVksfN8O%2BaRBC9a5997JmK2tH2p7HjdpCqlHfcH%2BO%2BFP4SxjydMVoQxj2BfsgPWJI8Mlmyko8Qu%2FVxej0lfR9zfgXxs82zkosb%2BIaeh%2FkCKnBlfWp02NoQMXslt63XahXVJfUsNQa8fpeT9UI8%2FTsxkRD%2BU3%2FBwDB6Sg2s9ohlZ%2Ft%2FLn%2FMjWhz9UqfxWbhzsXqZveoktnkLnop4G45xxodpkfhPhjlYcdfafkHJKirIA1qJKCm%2FKKXo7Ih7oPK6zXUMtoHiq2dl2IMscqdOq5Au8zy%2F5c74q0%2BP%2FZftLB31FKpthwVQ15vO9lOs99WV3M4sVqBGODp9bfm9CxajsGJFii0L0p41KF%2F%2BkC3vz4WLe6IelxTp5Mcq2RsPgwS8X79XPcx2hotjWutBkvezEaEJNeawlqF4kkft%2BYVEBTMOakwM8GOqUBXwNYiP0CjS%2FKzrAJjfN%2BeDGJ%2B2PMSZoI4HyHOpE%2FZOVUHtvmNUd6HS9kS2spnw4u6cm9jveQh0KkUkHAEnncEScEVKCOfapuk7r43gYacpLbcN%2BhuBclUb8Wdl020PeArJNIyDzhMH8pGwBDnv0M%2BfguO7JJDtiB6hzpBC0crfsVpElSiBMRI8ciEMRrtuF%2BJVEWjQwW7QxlkiIZXA8KAoC9%2BDQR&X-Amz-Signature=8e8c2258aec4a0fed67e9ecb6acad92d5047d7eb597b89e64e3d4a485a8d745d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXLOFA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDnWmQZxw9HpAHjc8z8L5R02jnyZ1YxqyUfzm5NH%2FS0fAiEArV2uLEX27nDPjc1LB87cA83C4rM%2F2ikom8hnaW1fwPEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwN%2BTACcNCZTbw4VircA%2BAUwhVZQyhLuSEMSlKQ%2BGltVAuwPnYTAeKej2unwnNaDoyC2QJEOFpMJI80Mjon5%2FiG3SIGxL8FeHMx1mTPgAHtKy4YeZNXqRPHVluxdX4KRm%2FvbXk5jzu0kc5F2%2BwbmHEv918qqraPDFFfokA%2FLMNDbmxZc1rjuuH0qZoLKBASstCRyCLw%2FDYuljYG%2Ffe1Z9lAkPQl9iBmUgH0XshuVksfN8O%2BaRBC9a5997JmK2tH2p7HjdpCqlHfcH%2BO%2BFP4SxjydMVoQxj2BfsgPWJI8Mlmyko8Qu%2FVxej0lfR9zfgXxs82zkosb%2BIaeh%2FkCKnBlfWp02NoQMXslt63XahXVJfUsNQa8fpeT9UI8%2FTsxkRD%2BU3%2FBwDB6Sg2s9ohlZ%2Ft%2FLn%2FMjWhz9UqfxWbhzsXqZveoktnkLnop4G45xxodpkfhPhjlYcdfafkHJKirIA1qJKCm%2FKKXo7Ih7oPK6zXUMtoHiq2dl2IMscqdOq5Au8zy%2F5c74q0%2BP%2FZftLB31FKpthwVQ15vO9lOs99WV3M4sVqBGODp9bfm9CxajsGJFii0L0p41KF%2F%2BkC3vz4WLe6IelxTp5Mcq2RsPgwS8X79XPcx2hotjWutBkvezEaEJNeawlqF4kkft%2BYVEBTMOakwM8GOqUBXwNYiP0CjS%2FKzrAJjfN%2BeDGJ%2B2PMSZoI4HyHOpE%2FZOVUHtvmNUd6HS9kS2spnw4u6cm9jveQh0KkUkHAEnncEScEVKCOfapuk7r43gYacpLbcN%2BhuBclUb8Wdl020PeArJNIyDzhMH8pGwBDnv0M%2BfguO7JJDtiB6hzpBC0crfsVpElSiBMRI8ciEMRrtuF%2BJVEWjQwW7QxlkiIZXA8KAoC9%2BDQR&X-Amz-Signature=56d2aa0744860dbace66a8c774b162074df8161b07490c0b056fdbec0c8daafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTKXLOFA%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDnWmQZxw9HpAHjc8z8L5R02jnyZ1YxqyUfzm5NH%2FS0fAiEArV2uLEX27nDPjc1LB87cA83C4rM%2F2ikom8hnaW1fwPEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHwN%2BTACcNCZTbw4VircA%2BAUwhVZQyhLuSEMSlKQ%2BGltVAuwPnYTAeKej2unwnNaDoyC2QJEOFpMJI80Mjon5%2FiG3SIGxL8FeHMx1mTPgAHtKy4YeZNXqRPHVluxdX4KRm%2FvbXk5jzu0kc5F2%2BwbmHEv918qqraPDFFfokA%2FLMNDbmxZc1rjuuH0qZoLKBASstCRyCLw%2FDYuljYG%2Ffe1Z9lAkPQl9iBmUgH0XshuVksfN8O%2BaRBC9a5997JmK2tH2p7HjdpCqlHfcH%2BO%2BFP4SxjydMVoQxj2BfsgPWJI8Mlmyko8Qu%2FVxej0lfR9zfgXxs82zkosb%2BIaeh%2FkCKnBlfWp02NoQMXslt63XahXVJfUsNQa8fpeT9UI8%2FTsxkRD%2BU3%2FBwDB6Sg2s9ohlZ%2Ft%2FLn%2FMjWhz9UqfxWbhzsXqZveoktnkLnop4G45xxodpkfhPhjlYcdfafkHJKirIA1qJKCm%2FKKXo7Ih7oPK6zXUMtoHiq2dl2IMscqdOq5Au8zy%2F5c74q0%2BP%2FZftLB31FKpthwVQ15vO9lOs99WV3M4sVqBGODp9bfm9CxajsGJFii0L0p41KF%2F%2BkC3vz4WLe6IelxTp5Mcq2RsPgwS8X79XPcx2hotjWutBkvezEaEJNeawlqF4kkft%2BYVEBTMOakwM8GOqUBXwNYiP0CjS%2FKzrAJjfN%2BeDGJ%2B2PMSZoI4HyHOpE%2FZOVUHtvmNUd6HS9kS2spnw4u6cm9jveQh0KkUkHAEnncEScEVKCOfapuk7r43gYacpLbcN%2BhuBclUb8Wdl020PeArJNIyDzhMH8pGwBDnv0M%2BfguO7JJDtiB6hzpBC0crfsVpElSiBMRI8ciEMRrtuF%2BJVEWjQwW7QxlkiIZXA8KAoC9%2BDQR&X-Amz-Signature=bcafd01165461f427002ac1af1c40c55008de47c88739339ab542cd9c3669e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
