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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVXWQH7Q%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWfjeWeyearjwdJqtaxiyp1t43EBHYbZP5kuhavVROiAIgAnO1lBfnv6t1lvR%2BAz1z%2FCZoqDjl6OoGFk26ybRE1UgqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMBOIXH%2FeQ7ICyFDSrcA1wCzt%2BkF7CwQLxZF9I5A8BMHxSN%2FhHfN9yZQ5t4ELJLVkGgct%2BfvjcrUn9WpN%2FpqhTFfr4NxU%2Fb1VXULVcE4ifJSY%2Bx%2BYqQwYIQVXvREhizjoAJwoNzbaTL7E49kxTPiDJLCg5JSFRr%2FWEWUOqayNBhClLT7jqy8uQMQdA6YeegrtOd4nXwhaevnY9%2B4EGCc%2B3ZIyM8h0oZq%2FabcBvw1yukEeiujTL8qcVDRO%2FYVfLP21JpD8xWNqGIFKDcChXptzSapeKt1XbE90C1%2Fi4KIjeiw6ObJI4XoM21SD%2FgzdcAIkpGFObfQ%2BwzCeyftj9s%2BqV9%2FP1yxJna5R4dCiGmTce%2BP87UiEfmX%2BLuCuzyj5NfMnZ3mop%2FVlADUUTPNa%2Bp9APeXHgGkDfYw2zI4ORDxqHrz23dhTZvdHAxOvJU5ksInO%2BjMEmvnJ0Z1oxlCWuTBdMzaeiMBXQkxKdiQi6LjIoU%2BaPSP791BwDqrCtvv03E3p6vsyAIzyGMJrQQTzn5wEb1A97xuCjhu6rtCBZO55yk0L83sI0JDqiEgj78vAYBoCDpXCns5%2FH4MknV6t4l5%2FUnKMuzCSkkZpjX%2ByDDVbCuDs3D4nQgP5fe1tZULxkUXe9JDJuQnWDh5dNnMLzQk9EGOqUBVGL7k6uU6GeIA1efAqZRwhsHgWhtU9NXVlpl0tltZqclgaIgSn%2F%2F34QptaqvM%2FxGwG0CQ9x0jageVPzrtX%2BqR3b6hzs6ERt4Izf1yc7X6hXbi5v9DY6Z5BBlIxcWXJkAIBKJD0mKAdip7BSPd2LN%2BrtSTWCpGO7tzk9DwOWA1UuNsfUMWDYWmmR7CN7mbj0sW51%2FTlhwnezfmtZib1CdkugHvtpq&X-Amz-Signature=43b2c97fcb223351db2b9c304bd31ea28080bebd9f8384bf0d8dcdf9754c28e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY33DWJT%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8%2F1vkg78P5TE%2FuoPE2%2FSaQHn3eMpXcRixIH%2FMwHsiHAiEA2nH%2FfcTG8PGX4F0jHuL6o8v%2BuEQDw8Zf8buE2a29sJ8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0yxPvE0d%2Bcw8061CrcA8kyMcxOuWacNmxbXIluIPIhYgd5Vl5Hjj78GSzjW0f71B8uLVaFzxvokYYjOYFDsLFD%2F7KJ%2Fit6U2Os8yhI7jrZbOokyoep3Iak%2Fn70UvuZng7khFq9kJOzmNZg9Agn13%2FQMVldfpSJBWT1qqF1o3m%2Bp9hKevTH4RUGlA1jRrWTavdcblrI2TX8YHACUB0bctLUYbzWQgoGFRQ96p6sQP%2BHD%2FCfkK6FON8e7JTNR0LYPDq58dbuOyjDbvekCIdfQkswggV7SxmvT9V5JghSeTBQDUyeBBAhlPM8S3Q1rPmZHcgKxa%2BZVj83ctxsHzs3p3QUGxsCIK2E%2FYpfI5wV188K5XBJm08BdSwGQJzIhBZZ1T3aW%2BNPDq6sSqV5PQf6NV0KSMIYEeAh%2BMceURinkXdX2WhF1Sq0lJLTa3p19VloLI9wt0GOdKSJR1y0KCrGDPRn0THNmTtSaX1%2BCitX1Ulw3zWW2wXXtm5jpZc4Ed1feW2%2BkaNKlNiirxm5bETRq8%2F9yF81mDh4ck%2BZLRgDFeJT5xgktLMul4CjO5VE%2FbXgf9jCiKQeB6Ms5mc4FYM7W4knJaEUgECQTlL4A54GLZboSqB13p%2BeyFvpQLX3gqb9zO9GfnD68U17SjpLMK7Tk9EGOqUB8UfSyBNKaZYDUOSKL3fCzqOE4dTH3wv3SmAO6VwFdOsHLAxrNSk3UpMj1GTOpm%2B4LlE9b00%2BqTix1ISX%2Bj3nmcRuBVqk3z182Jgzfd5XS5zeWiPbJALEW%2BtWcgpf6AiZuDfvoRlAWeEieNj1536ZR7xH67OC5tPEYv4dJ%2BRXXgOLEUycMcP9rlpAi2yTvOttsKrOfbcPTODipH9b7f48lK4tNcdS&X-Amz-Signature=6b146221138cee06a5bd493c79995a454e12fa36d26b6c19a3230db9a4b2c9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY33DWJT%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8%2F1vkg78P5TE%2FuoPE2%2FSaQHn3eMpXcRixIH%2FMwHsiHAiEA2nH%2FfcTG8PGX4F0jHuL6o8v%2BuEQDw8Zf8buE2a29sJ8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0yxPvE0d%2Bcw8061CrcA8kyMcxOuWacNmxbXIluIPIhYgd5Vl5Hjj78GSzjW0f71B8uLVaFzxvokYYjOYFDsLFD%2F7KJ%2Fit6U2Os8yhI7jrZbOokyoep3Iak%2Fn70UvuZng7khFq9kJOzmNZg9Agn13%2FQMVldfpSJBWT1qqF1o3m%2Bp9hKevTH4RUGlA1jRrWTavdcblrI2TX8YHACUB0bctLUYbzWQgoGFRQ96p6sQP%2BHD%2FCfkK6FON8e7JTNR0LYPDq58dbuOyjDbvekCIdfQkswggV7SxmvT9V5JghSeTBQDUyeBBAhlPM8S3Q1rPmZHcgKxa%2BZVj83ctxsHzs3p3QUGxsCIK2E%2FYpfI5wV188K5XBJm08BdSwGQJzIhBZZ1T3aW%2BNPDq6sSqV5PQf6NV0KSMIYEeAh%2BMceURinkXdX2WhF1Sq0lJLTa3p19VloLI9wt0GOdKSJR1y0KCrGDPRn0THNmTtSaX1%2BCitX1Ulw3zWW2wXXtm5jpZc4Ed1feW2%2BkaNKlNiirxm5bETRq8%2F9yF81mDh4ck%2BZLRgDFeJT5xgktLMul4CjO5VE%2FbXgf9jCiKQeB6Ms5mc4FYM7W4knJaEUgECQTlL4A54GLZboSqB13p%2BeyFvpQLX3gqb9zO9GfnD68U17SjpLMK7Tk9EGOqUB8UfSyBNKaZYDUOSKL3fCzqOE4dTH3wv3SmAO6VwFdOsHLAxrNSk3UpMj1GTOpm%2B4LlE9b00%2BqTix1ISX%2Bj3nmcRuBVqk3z182Jgzfd5XS5zeWiPbJALEW%2BtWcgpf6AiZuDfvoRlAWeEieNj1536ZR7xH67OC5tPEYv4dJ%2BRXXgOLEUycMcP9rlpAi2yTvOttsKrOfbcPTODipH9b7f48lK4tNcdS&X-Amz-Signature=5448b9168aacda1b7f0551ee7956376da0c4fa2125736e138f1a90431cd89f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY33DWJT%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8%2F1vkg78P5TE%2FuoPE2%2FSaQHn3eMpXcRixIH%2FMwHsiHAiEA2nH%2FfcTG8PGX4F0jHuL6o8v%2BuEQDw8Zf8buE2a29sJ8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0yxPvE0d%2Bcw8061CrcA8kyMcxOuWacNmxbXIluIPIhYgd5Vl5Hjj78GSzjW0f71B8uLVaFzxvokYYjOYFDsLFD%2F7KJ%2Fit6U2Os8yhI7jrZbOokyoep3Iak%2Fn70UvuZng7khFq9kJOzmNZg9Agn13%2FQMVldfpSJBWT1qqF1o3m%2Bp9hKevTH4RUGlA1jRrWTavdcblrI2TX8YHACUB0bctLUYbzWQgoGFRQ96p6sQP%2BHD%2FCfkK6FON8e7JTNR0LYPDq58dbuOyjDbvekCIdfQkswggV7SxmvT9V5JghSeTBQDUyeBBAhlPM8S3Q1rPmZHcgKxa%2BZVj83ctxsHzs3p3QUGxsCIK2E%2FYpfI5wV188K5XBJm08BdSwGQJzIhBZZ1T3aW%2BNPDq6sSqV5PQf6NV0KSMIYEeAh%2BMceURinkXdX2WhF1Sq0lJLTa3p19VloLI9wt0GOdKSJR1y0KCrGDPRn0THNmTtSaX1%2BCitX1Ulw3zWW2wXXtm5jpZc4Ed1feW2%2BkaNKlNiirxm5bETRq8%2F9yF81mDh4ck%2BZLRgDFeJT5xgktLMul4CjO5VE%2FbXgf9jCiKQeB6Ms5mc4FYM7W4knJaEUgECQTlL4A54GLZboSqB13p%2BeyFvpQLX3gqb9zO9GfnD68U17SjpLMK7Tk9EGOqUB8UfSyBNKaZYDUOSKL3fCzqOE4dTH3wv3SmAO6VwFdOsHLAxrNSk3UpMj1GTOpm%2B4LlE9b00%2BqTix1ISX%2Bj3nmcRuBVqk3z182Jgzfd5XS5zeWiPbJALEW%2BtWcgpf6AiZuDfvoRlAWeEieNj1536ZR7xH67OC5tPEYv4dJ%2BRXXgOLEUycMcP9rlpAi2yTvOttsKrOfbcPTODipH9b7f48lK4tNcdS&X-Amz-Signature=34a983e80cc7007bfba40318b87b83de6a312e19be3d2bd0cbf43a1eb662421b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY33DWJT%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8%2F1vkg78P5TE%2FuoPE2%2FSaQHn3eMpXcRixIH%2FMwHsiHAiEA2nH%2FfcTG8PGX4F0jHuL6o8v%2BuEQDw8Zf8buE2a29sJ8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0yxPvE0d%2Bcw8061CrcA8kyMcxOuWacNmxbXIluIPIhYgd5Vl5Hjj78GSzjW0f71B8uLVaFzxvokYYjOYFDsLFD%2F7KJ%2Fit6U2Os8yhI7jrZbOokyoep3Iak%2Fn70UvuZng7khFq9kJOzmNZg9Agn13%2FQMVldfpSJBWT1qqF1o3m%2Bp9hKevTH4RUGlA1jRrWTavdcblrI2TX8YHACUB0bctLUYbzWQgoGFRQ96p6sQP%2BHD%2FCfkK6FON8e7JTNR0LYPDq58dbuOyjDbvekCIdfQkswggV7SxmvT9V5JghSeTBQDUyeBBAhlPM8S3Q1rPmZHcgKxa%2BZVj83ctxsHzs3p3QUGxsCIK2E%2FYpfI5wV188K5XBJm08BdSwGQJzIhBZZ1T3aW%2BNPDq6sSqV5PQf6NV0KSMIYEeAh%2BMceURinkXdX2WhF1Sq0lJLTa3p19VloLI9wt0GOdKSJR1y0KCrGDPRn0THNmTtSaX1%2BCitX1Ulw3zWW2wXXtm5jpZc4Ed1feW2%2BkaNKlNiirxm5bETRq8%2F9yF81mDh4ck%2BZLRgDFeJT5xgktLMul4CjO5VE%2FbXgf9jCiKQeB6Ms5mc4FYM7W4knJaEUgECQTlL4A54GLZboSqB13p%2BeyFvpQLX3gqb9zO9GfnD68U17SjpLMK7Tk9EGOqUB8UfSyBNKaZYDUOSKL3fCzqOE4dTH3wv3SmAO6VwFdOsHLAxrNSk3UpMj1GTOpm%2B4LlE9b00%2BqTix1ISX%2Bj3nmcRuBVqk3z182Jgzfd5XS5zeWiPbJALEW%2BtWcgpf6AiZuDfvoRlAWeEieNj1536ZR7xH67OC5tPEYv4dJ%2BRXXgOLEUycMcP9rlpAi2yTvOttsKrOfbcPTODipH9b7f48lK4tNcdS&X-Amz-Signature=39df92b4ededc6180047dec0ddec91aea2921263dc7c945ce1729a0c5d753105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY33DWJT%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8%2F1vkg78P5TE%2FuoPE2%2FSaQHn3eMpXcRixIH%2FMwHsiHAiEA2nH%2FfcTG8PGX4F0jHuL6o8v%2BuEQDw8Zf8buE2a29sJ8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0yxPvE0d%2Bcw8061CrcA8kyMcxOuWacNmxbXIluIPIhYgd5Vl5Hjj78GSzjW0f71B8uLVaFzxvokYYjOYFDsLFD%2F7KJ%2Fit6U2Os8yhI7jrZbOokyoep3Iak%2Fn70UvuZng7khFq9kJOzmNZg9Agn13%2FQMVldfpSJBWT1qqF1o3m%2Bp9hKevTH4RUGlA1jRrWTavdcblrI2TX8YHACUB0bctLUYbzWQgoGFRQ96p6sQP%2BHD%2FCfkK6FON8e7JTNR0LYPDq58dbuOyjDbvekCIdfQkswggV7SxmvT9V5JghSeTBQDUyeBBAhlPM8S3Q1rPmZHcgKxa%2BZVj83ctxsHzs3p3QUGxsCIK2E%2FYpfI5wV188K5XBJm08BdSwGQJzIhBZZ1T3aW%2BNPDq6sSqV5PQf6NV0KSMIYEeAh%2BMceURinkXdX2WhF1Sq0lJLTa3p19VloLI9wt0GOdKSJR1y0KCrGDPRn0THNmTtSaX1%2BCitX1Ulw3zWW2wXXtm5jpZc4Ed1feW2%2BkaNKlNiirxm5bETRq8%2F9yF81mDh4ck%2BZLRgDFeJT5xgktLMul4CjO5VE%2FbXgf9jCiKQeB6Ms5mc4FYM7W4knJaEUgECQTlL4A54GLZboSqB13p%2BeyFvpQLX3gqb9zO9GfnD68U17SjpLMK7Tk9EGOqUB8UfSyBNKaZYDUOSKL3fCzqOE4dTH3wv3SmAO6VwFdOsHLAxrNSk3UpMj1GTOpm%2B4LlE9b00%2BqTix1ISX%2Bj3nmcRuBVqk3z182Jgzfd5XS5zeWiPbJALEW%2BtWcgpf6AiZuDfvoRlAWeEieNj1536ZR7xH67OC5tPEYv4dJ%2BRXXgOLEUycMcP9rlpAi2yTvOttsKrOfbcPTODipH9b7f48lK4tNcdS&X-Amz-Signature=bb51d55d2fb315e9db7e76b819be2b37815d2a28d2491eafc6ab93298c60e18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY33DWJT%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8%2F1vkg78P5TE%2FuoPE2%2FSaQHn3eMpXcRixIH%2FMwHsiHAiEA2nH%2FfcTG8PGX4F0jHuL6o8v%2BuEQDw8Zf8buE2a29sJ8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0yxPvE0d%2Bcw8061CrcA8kyMcxOuWacNmxbXIluIPIhYgd5Vl5Hjj78GSzjW0f71B8uLVaFzxvokYYjOYFDsLFD%2F7KJ%2Fit6U2Os8yhI7jrZbOokyoep3Iak%2Fn70UvuZng7khFq9kJOzmNZg9Agn13%2FQMVldfpSJBWT1qqF1o3m%2Bp9hKevTH4RUGlA1jRrWTavdcblrI2TX8YHACUB0bctLUYbzWQgoGFRQ96p6sQP%2BHD%2FCfkK6FON8e7JTNR0LYPDq58dbuOyjDbvekCIdfQkswggV7SxmvT9V5JghSeTBQDUyeBBAhlPM8S3Q1rPmZHcgKxa%2BZVj83ctxsHzs3p3QUGxsCIK2E%2FYpfI5wV188K5XBJm08BdSwGQJzIhBZZ1T3aW%2BNPDq6sSqV5PQf6NV0KSMIYEeAh%2BMceURinkXdX2WhF1Sq0lJLTa3p19VloLI9wt0GOdKSJR1y0KCrGDPRn0THNmTtSaX1%2BCitX1Ulw3zWW2wXXtm5jpZc4Ed1feW2%2BkaNKlNiirxm5bETRq8%2F9yF81mDh4ck%2BZLRgDFeJT5xgktLMul4CjO5VE%2FbXgf9jCiKQeB6Ms5mc4FYM7W4knJaEUgECQTlL4A54GLZboSqB13p%2BeyFvpQLX3gqb9zO9GfnD68U17SjpLMK7Tk9EGOqUB8UfSyBNKaZYDUOSKL3fCzqOE4dTH3wv3SmAO6VwFdOsHLAxrNSk3UpMj1GTOpm%2B4LlE9b00%2BqTix1ISX%2Bj3nmcRuBVqk3z182Jgzfd5XS5zeWiPbJALEW%2BtWcgpf6AiZuDfvoRlAWeEieNj1536ZR7xH67OC5tPEYv4dJ%2BRXXgOLEUycMcP9rlpAi2yTvOttsKrOfbcPTODipH9b7f48lK4tNcdS&X-Amz-Signature=3a177b90d89242415d800a75fb265c2f2e13e9fa4e6c57accd27e31c77e72b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY33DWJT%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8%2F1vkg78P5TE%2FuoPE2%2FSaQHn3eMpXcRixIH%2FMwHsiHAiEA2nH%2FfcTG8PGX4F0jHuL6o8v%2BuEQDw8Zf8buE2a29sJ8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0yxPvE0d%2Bcw8061CrcA8kyMcxOuWacNmxbXIluIPIhYgd5Vl5Hjj78GSzjW0f71B8uLVaFzxvokYYjOYFDsLFD%2F7KJ%2Fit6U2Os8yhI7jrZbOokyoep3Iak%2Fn70UvuZng7khFq9kJOzmNZg9Agn13%2FQMVldfpSJBWT1qqF1o3m%2Bp9hKevTH4RUGlA1jRrWTavdcblrI2TX8YHACUB0bctLUYbzWQgoGFRQ96p6sQP%2BHD%2FCfkK6FON8e7JTNR0LYPDq58dbuOyjDbvekCIdfQkswggV7SxmvT9V5JghSeTBQDUyeBBAhlPM8S3Q1rPmZHcgKxa%2BZVj83ctxsHzs3p3QUGxsCIK2E%2FYpfI5wV188K5XBJm08BdSwGQJzIhBZZ1T3aW%2BNPDq6sSqV5PQf6NV0KSMIYEeAh%2BMceURinkXdX2WhF1Sq0lJLTa3p19VloLI9wt0GOdKSJR1y0KCrGDPRn0THNmTtSaX1%2BCitX1Ulw3zWW2wXXtm5jpZc4Ed1feW2%2BkaNKlNiirxm5bETRq8%2F9yF81mDh4ck%2BZLRgDFeJT5xgktLMul4CjO5VE%2FbXgf9jCiKQeB6Ms5mc4FYM7W4knJaEUgECQTlL4A54GLZboSqB13p%2BeyFvpQLX3gqb9zO9GfnD68U17SjpLMK7Tk9EGOqUB8UfSyBNKaZYDUOSKL3fCzqOE4dTH3wv3SmAO6VwFdOsHLAxrNSk3UpMj1GTOpm%2B4LlE9b00%2BqTix1ISX%2Bj3nmcRuBVqk3z182Jgzfd5XS5zeWiPbJALEW%2BtWcgpf6AiZuDfvoRlAWeEieNj1536ZR7xH67OC5tPEYv4dJ%2BRXXgOLEUycMcP9rlpAi2yTvOttsKrOfbcPTODipH9b7f48lK4tNcdS&X-Amz-Signature=68a9be3ed85b4f4008c0b1611cca271cdfa4cac8c6c82d9f5ab2d618ca4348dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY33DWJT%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8%2F1vkg78P5TE%2FuoPE2%2FSaQHn3eMpXcRixIH%2FMwHsiHAiEA2nH%2FfcTG8PGX4F0jHuL6o8v%2BuEQDw8Zf8buE2a29sJ8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0yxPvE0d%2Bcw8061CrcA8kyMcxOuWacNmxbXIluIPIhYgd5Vl5Hjj78GSzjW0f71B8uLVaFzxvokYYjOYFDsLFD%2F7KJ%2Fit6U2Os8yhI7jrZbOokyoep3Iak%2Fn70UvuZng7khFq9kJOzmNZg9Agn13%2FQMVldfpSJBWT1qqF1o3m%2Bp9hKevTH4RUGlA1jRrWTavdcblrI2TX8YHACUB0bctLUYbzWQgoGFRQ96p6sQP%2BHD%2FCfkK6FON8e7JTNR0LYPDq58dbuOyjDbvekCIdfQkswggV7SxmvT9V5JghSeTBQDUyeBBAhlPM8S3Q1rPmZHcgKxa%2BZVj83ctxsHzs3p3QUGxsCIK2E%2FYpfI5wV188K5XBJm08BdSwGQJzIhBZZ1T3aW%2BNPDq6sSqV5PQf6NV0KSMIYEeAh%2BMceURinkXdX2WhF1Sq0lJLTa3p19VloLI9wt0GOdKSJR1y0KCrGDPRn0THNmTtSaX1%2BCitX1Ulw3zWW2wXXtm5jpZc4Ed1feW2%2BkaNKlNiirxm5bETRq8%2F9yF81mDh4ck%2BZLRgDFeJT5xgktLMul4CjO5VE%2FbXgf9jCiKQeB6Ms5mc4FYM7W4knJaEUgECQTlL4A54GLZboSqB13p%2BeyFvpQLX3gqb9zO9GfnD68U17SjpLMK7Tk9EGOqUB8UfSyBNKaZYDUOSKL3fCzqOE4dTH3wv3SmAO6VwFdOsHLAxrNSk3UpMj1GTOpm%2B4LlE9b00%2BqTix1ISX%2Bj3nmcRuBVqk3z182Jgzfd5XS5zeWiPbJALEW%2BtWcgpf6AiZuDfvoRlAWeEieNj1536ZR7xH67OC5tPEYv4dJ%2BRXXgOLEUycMcP9rlpAi2yTvOttsKrOfbcPTODipH9b7f48lK4tNcdS&X-Amz-Signature=09a2e2baf417d46f903eadc0b5f702af722ddfdecfb99875d1ae4137dbad0da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY33DWJT%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8%2F1vkg78P5TE%2FuoPE2%2FSaQHn3eMpXcRixIH%2FMwHsiHAiEA2nH%2FfcTG8PGX4F0jHuL6o8v%2BuEQDw8Zf8buE2a29sJ8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0yxPvE0d%2Bcw8061CrcA8kyMcxOuWacNmxbXIluIPIhYgd5Vl5Hjj78GSzjW0f71B8uLVaFzxvokYYjOYFDsLFD%2F7KJ%2Fit6U2Os8yhI7jrZbOokyoep3Iak%2Fn70UvuZng7khFq9kJOzmNZg9Agn13%2FQMVldfpSJBWT1qqF1o3m%2Bp9hKevTH4RUGlA1jRrWTavdcblrI2TX8YHACUB0bctLUYbzWQgoGFRQ96p6sQP%2BHD%2FCfkK6FON8e7JTNR0LYPDq58dbuOyjDbvekCIdfQkswggV7SxmvT9V5JghSeTBQDUyeBBAhlPM8S3Q1rPmZHcgKxa%2BZVj83ctxsHzs3p3QUGxsCIK2E%2FYpfI5wV188K5XBJm08BdSwGQJzIhBZZ1T3aW%2BNPDq6sSqV5PQf6NV0KSMIYEeAh%2BMceURinkXdX2WhF1Sq0lJLTa3p19VloLI9wt0GOdKSJR1y0KCrGDPRn0THNmTtSaX1%2BCitX1Ulw3zWW2wXXtm5jpZc4Ed1feW2%2BkaNKlNiirxm5bETRq8%2F9yF81mDh4ck%2BZLRgDFeJT5xgktLMul4CjO5VE%2FbXgf9jCiKQeB6Ms5mc4FYM7W4knJaEUgECQTlL4A54GLZboSqB13p%2BeyFvpQLX3gqb9zO9GfnD68U17SjpLMK7Tk9EGOqUB8UfSyBNKaZYDUOSKL3fCzqOE4dTH3wv3SmAO6VwFdOsHLAxrNSk3UpMj1GTOpm%2B4LlE9b00%2BqTix1ISX%2Bj3nmcRuBVqk3z182Jgzfd5XS5zeWiPbJALEW%2BtWcgpf6AiZuDfvoRlAWeEieNj1536ZR7xH67OC5tPEYv4dJ%2BRXXgOLEUycMcP9rlpAi2yTvOttsKrOfbcPTODipH9b7f48lK4tNcdS&X-Amz-Signature=ec69bf11991af198fdd6241e3195f42835a2d28966e1dd4e020b8953f4ddba87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY33DWJT%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8%2F1vkg78P5TE%2FuoPE2%2FSaQHn3eMpXcRixIH%2FMwHsiHAiEA2nH%2FfcTG8PGX4F0jHuL6o8v%2BuEQDw8Zf8buE2a29sJ8qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0yxPvE0d%2Bcw8061CrcA8kyMcxOuWacNmxbXIluIPIhYgd5Vl5Hjj78GSzjW0f71B8uLVaFzxvokYYjOYFDsLFD%2F7KJ%2Fit6U2Os8yhI7jrZbOokyoep3Iak%2Fn70UvuZng7khFq9kJOzmNZg9Agn13%2FQMVldfpSJBWT1qqF1o3m%2Bp9hKevTH4RUGlA1jRrWTavdcblrI2TX8YHACUB0bctLUYbzWQgoGFRQ96p6sQP%2BHD%2FCfkK6FON8e7JTNR0LYPDq58dbuOyjDbvekCIdfQkswggV7SxmvT9V5JghSeTBQDUyeBBAhlPM8S3Q1rPmZHcgKxa%2BZVj83ctxsHzs3p3QUGxsCIK2E%2FYpfI5wV188K5XBJm08BdSwGQJzIhBZZ1T3aW%2BNPDq6sSqV5PQf6NV0KSMIYEeAh%2BMceURinkXdX2WhF1Sq0lJLTa3p19VloLI9wt0GOdKSJR1y0KCrGDPRn0THNmTtSaX1%2BCitX1Ulw3zWW2wXXtm5jpZc4Ed1feW2%2BkaNKlNiirxm5bETRq8%2F9yF81mDh4ck%2BZLRgDFeJT5xgktLMul4CjO5VE%2FbXgf9jCiKQeB6Ms5mc4FYM7W4knJaEUgECQTlL4A54GLZboSqB13p%2BeyFvpQLX3gqb9zO9GfnD68U17SjpLMK7Tk9EGOqUB8UfSyBNKaZYDUOSKL3fCzqOE4dTH3wv3SmAO6VwFdOsHLAxrNSk3UpMj1GTOpm%2B4LlE9b00%2BqTix1ISX%2Bj3nmcRuBVqk3z182Jgzfd5XS5zeWiPbJALEW%2BtWcgpf6AiZuDfvoRlAWeEieNj1536ZR7xH67OC5tPEYv4dJ%2BRXXgOLEUycMcP9rlpAi2yTvOttsKrOfbcPTODipH9b7f48lK4tNcdS&X-Amz-Signature=39df92b4ededc6180047dec0ddec91aea2921263dc7c945ce1729a0c5d753105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
