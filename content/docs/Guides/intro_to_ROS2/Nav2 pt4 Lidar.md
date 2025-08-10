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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAOPDJSG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdk7DK1t5VQ97nabP5ek7Q5CiPZxfk%2BpAi%2FkerohqzpAiA0PPV5aRtO45L1Htyg9rcl8NcdQ62WLYQhqmC%2FzzI1kCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkndhkrgoK7sJ53AyKtwDNjUsUGfPPZZByQhVBZLgcltB1ASaC2mXFc5llmq1uvz3CBVSz7VxbOy22TMOaigB0aQQO8eJDDuNuBrvA9bFJ1irmebg6%2Flco3pAzIAodHyEUPqnRXStT3DwA2iXV%2BYH34VJ9wAHiv69510U1KPht0RrSuI138fxmTAxrRpJZ%2BRLX7%2FZVL%2BdqMh5N6YqBp9a5CboY2uUSIiY5kY7PYdguSWglOh9u7DYaaokdaJkoMLcJb0FD%2FZD84Mmlbn3oWZcLSyNGjlXSgsAutm7BqATITuVCIaQ3tZr7RKpn7IwePhzRose%2FOxlI%2BOVrPplFMi5s2kC2BpaAGuKBgBunwR9W%2Fjrf9AZj7swCoiTQjfNeK%2FVycCsPbihqljKasPg%2FxCKorCg%2BlcjMCLXztJP6BTIdtVHfQkHyK9J9nDn%2FRF5wcSjEh2s8pJsyjHh4nAe6ZIibAHuP%2Bcjo7Rpfnl0pq0w5wMiAtv57e5iCbB%2BqU3sfyqKP4MteRvP0ZBrfekpxwBdrV2tCwbSvaagFU9VYQfpBcH1pHuGjBcnCOSdn6YNdNWqwtLENI0EnPA1ycbV5fzDtJMZECk26lTpW2SD2wNXfS0Nv9qnLI3ea86Yfc2zOCjpyIyCSnTfB2Rf0PEwt7LfxAY6pgEOEDvFqsgsTrD2b931LMnAqIJKyiEtR5NrM9wM5HhKm2qlALXQCz5hg3jsXnSR%2BAOYZLn8gDaU4I7cO1r3oiVj2Aef05CHwnad26%2F1W5PMIOZHmhcJzoVXRI4EmH%2BYAnO2XIf%2FUALmpiJJx0MXERFbt%2FmtPDWK1RjEufbWFloqypF8f7ABLut7q%2FCo7dEbZNpY0AxkqSsqH3%2BRk9ZqPvc1dxL3ilPP&X-Amz-Signature=4e11487110a724823cbd167f2146e8262ddad7f10d003306e8d89ad8e6efc1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652OVQNS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5mEbNvX2QGokSYN0Sj8vYwcLbTYTNPBXMux20vlcFnAiEAx5m7Z2P5ru8oKPOylzM5%2Bp%2BAZM%2B%2F4AFcP5Q7CuC3byAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC54V6r0%2FTdNisOqCrcA3zysfN2qh842wfzbZsmNCxLn1MimYO6RDXrmELnT%2BGBzWhlP6vBK3BHygi9fFQaw8LgHq2FoV9R05M8m9sGGzBgrTBsUZI9OaXzFc2PYXhtdv8DeElEN4s%2F9skRWhAeoNWXHeayJItQPMTDNVMqEWbtSVLsqYuOD%2FjyR%2FN0BLfyMDby80y8CF5hDTFXrw5cHo1TJ9hvX8iGzjdMs2I4urHEX3eZCaCy%2BgCByImpKubGymJ6a1mFtJScrFJ2nZcWT0B24pp8%2FdWM%2BUxfx75HYSWGWeR2HNX8rVAL4K6aqUXJE%2FNoGJlBKhihJSnBaTt4cdH0vKcVz2JK6CWrcCEknE0s3IjYs6CNU3H6uLqA29mw4p5MXHTaf0LhHP5%2FgAoJtSRCpwKsj6j%2FbvhJJa%2FuDx%2FxbjJAKAuIjcrsDaIRqMMCuTe8jQrHsMqBdXiplvKHy8kMasIiY3SfbQolWVMd49o%2BkaWhcDHU4lFoiZSZGIsClsXqI0qAzJxWEsW8P3gSB0hDqiEWDUjFIQYuHb48%2BimgDXpCkY1wGHTrIf5Y6uYXWrQoTU19Q5m8ys%2FEOvC5NJ71N0mO0PD9794bWQ47WkSpagxF9Bix72eqKymJEfsjrRQeKYUy7QOb8JS2MImz38QGOqUBdMJ1L0KJcrBLJBpCYsjlkiJ9dlPtg5GQbGjWafqC0KxJ2XVpzR6kNNbFj6l7C7vvADKkRqx%2FedPpvyzIntyqF3DDCGlCpX99SIJa9SSDITGj0WmPHqraxqQdCMs6I%2B8u5JKYZfzUOlrfe9q%2BzIE1XkGpC1wkLYJ2IBqldKmDEFsEd%2BDgZ%2BzStPWfJpKSLm6mhMLtnt8N%2FY%2FZepXk0DIKx%2FHsMyRP&X-Amz-Signature=6df4c44363ce064203fec60e3048ac707197ecedc8f9242f5af3c34ff8322511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652OVQNS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5mEbNvX2QGokSYN0Sj8vYwcLbTYTNPBXMux20vlcFnAiEAx5m7Z2P5ru8oKPOylzM5%2Bp%2BAZM%2B%2F4AFcP5Q7CuC3byAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC54V6r0%2FTdNisOqCrcA3zysfN2qh842wfzbZsmNCxLn1MimYO6RDXrmELnT%2BGBzWhlP6vBK3BHygi9fFQaw8LgHq2FoV9R05M8m9sGGzBgrTBsUZI9OaXzFc2PYXhtdv8DeElEN4s%2F9skRWhAeoNWXHeayJItQPMTDNVMqEWbtSVLsqYuOD%2FjyR%2FN0BLfyMDby80y8CF5hDTFXrw5cHo1TJ9hvX8iGzjdMs2I4urHEX3eZCaCy%2BgCByImpKubGymJ6a1mFtJScrFJ2nZcWT0B24pp8%2FdWM%2BUxfx75HYSWGWeR2HNX8rVAL4K6aqUXJE%2FNoGJlBKhihJSnBaTt4cdH0vKcVz2JK6CWrcCEknE0s3IjYs6CNU3H6uLqA29mw4p5MXHTaf0LhHP5%2FgAoJtSRCpwKsj6j%2FbvhJJa%2FuDx%2FxbjJAKAuIjcrsDaIRqMMCuTe8jQrHsMqBdXiplvKHy8kMasIiY3SfbQolWVMd49o%2BkaWhcDHU4lFoiZSZGIsClsXqI0qAzJxWEsW8P3gSB0hDqiEWDUjFIQYuHb48%2BimgDXpCkY1wGHTrIf5Y6uYXWrQoTU19Q5m8ys%2FEOvC5NJ71N0mO0PD9794bWQ47WkSpagxF9Bix72eqKymJEfsjrRQeKYUy7QOb8JS2MImz38QGOqUBdMJ1L0KJcrBLJBpCYsjlkiJ9dlPtg5GQbGjWafqC0KxJ2XVpzR6kNNbFj6l7C7vvADKkRqx%2FedPpvyzIntyqF3DDCGlCpX99SIJa9SSDITGj0WmPHqraxqQdCMs6I%2B8u5JKYZfzUOlrfe9q%2BzIE1XkGpC1wkLYJ2IBqldKmDEFsEd%2BDgZ%2BzStPWfJpKSLm6mhMLtnt8N%2FY%2FZepXk0DIKx%2FHsMyRP&X-Amz-Signature=7a234dc5be0e271dbad4fc45b1acbd2fb6a042ebaf9ee475e0a5dcfad87681a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652OVQNS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5mEbNvX2QGokSYN0Sj8vYwcLbTYTNPBXMux20vlcFnAiEAx5m7Z2P5ru8oKPOylzM5%2Bp%2BAZM%2B%2F4AFcP5Q7CuC3byAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC54V6r0%2FTdNisOqCrcA3zysfN2qh842wfzbZsmNCxLn1MimYO6RDXrmELnT%2BGBzWhlP6vBK3BHygi9fFQaw8LgHq2FoV9R05M8m9sGGzBgrTBsUZI9OaXzFc2PYXhtdv8DeElEN4s%2F9skRWhAeoNWXHeayJItQPMTDNVMqEWbtSVLsqYuOD%2FjyR%2FN0BLfyMDby80y8CF5hDTFXrw5cHo1TJ9hvX8iGzjdMs2I4urHEX3eZCaCy%2BgCByImpKubGymJ6a1mFtJScrFJ2nZcWT0B24pp8%2FdWM%2BUxfx75HYSWGWeR2HNX8rVAL4K6aqUXJE%2FNoGJlBKhihJSnBaTt4cdH0vKcVz2JK6CWrcCEknE0s3IjYs6CNU3H6uLqA29mw4p5MXHTaf0LhHP5%2FgAoJtSRCpwKsj6j%2FbvhJJa%2FuDx%2FxbjJAKAuIjcrsDaIRqMMCuTe8jQrHsMqBdXiplvKHy8kMasIiY3SfbQolWVMd49o%2BkaWhcDHU4lFoiZSZGIsClsXqI0qAzJxWEsW8P3gSB0hDqiEWDUjFIQYuHb48%2BimgDXpCkY1wGHTrIf5Y6uYXWrQoTU19Q5m8ys%2FEOvC5NJ71N0mO0PD9794bWQ47WkSpagxF9Bix72eqKymJEfsjrRQeKYUy7QOb8JS2MImz38QGOqUBdMJ1L0KJcrBLJBpCYsjlkiJ9dlPtg5GQbGjWafqC0KxJ2XVpzR6kNNbFj6l7C7vvADKkRqx%2FedPpvyzIntyqF3DDCGlCpX99SIJa9SSDITGj0WmPHqraxqQdCMs6I%2B8u5JKYZfzUOlrfe9q%2BzIE1XkGpC1wkLYJ2IBqldKmDEFsEd%2BDgZ%2BzStPWfJpKSLm6mhMLtnt8N%2FY%2FZepXk0DIKx%2FHsMyRP&X-Amz-Signature=23e263fb6ac51817dd191180c152af5a1223ad0ef37ed4ec71e92529cb9425db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652OVQNS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5mEbNvX2QGokSYN0Sj8vYwcLbTYTNPBXMux20vlcFnAiEAx5m7Z2P5ru8oKPOylzM5%2Bp%2BAZM%2B%2F4AFcP5Q7CuC3byAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC54V6r0%2FTdNisOqCrcA3zysfN2qh842wfzbZsmNCxLn1MimYO6RDXrmELnT%2BGBzWhlP6vBK3BHygi9fFQaw8LgHq2FoV9R05M8m9sGGzBgrTBsUZI9OaXzFc2PYXhtdv8DeElEN4s%2F9skRWhAeoNWXHeayJItQPMTDNVMqEWbtSVLsqYuOD%2FjyR%2FN0BLfyMDby80y8CF5hDTFXrw5cHo1TJ9hvX8iGzjdMs2I4urHEX3eZCaCy%2BgCByImpKubGymJ6a1mFtJScrFJ2nZcWT0B24pp8%2FdWM%2BUxfx75HYSWGWeR2HNX8rVAL4K6aqUXJE%2FNoGJlBKhihJSnBaTt4cdH0vKcVz2JK6CWrcCEknE0s3IjYs6CNU3H6uLqA29mw4p5MXHTaf0LhHP5%2FgAoJtSRCpwKsj6j%2FbvhJJa%2FuDx%2FxbjJAKAuIjcrsDaIRqMMCuTe8jQrHsMqBdXiplvKHy8kMasIiY3SfbQolWVMd49o%2BkaWhcDHU4lFoiZSZGIsClsXqI0qAzJxWEsW8P3gSB0hDqiEWDUjFIQYuHb48%2BimgDXpCkY1wGHTrIf5Y6uYXWrQoTU19Q5m8ys%2FEOvC5NJ71N0mO0PD9794bWQ47WkSpagxF9Bix72eqKymJEfsjrRQeKYUy7QOb8JS2MImz38QGOqUBdMJ1L0KJcrBLJBpCYsjlkiJ9dlPtg5GQbGjWafqC0KxJ2XVpzR6kNNbFj6l7C7vvADKkRqx%2FedPpvyzIntyqF3DDCGlCpX99SIJa9SSDITGj0WmPHqraxqQdCMs6I%2B8u5JKYZfzUOlrfe9q%2BzIE1XkGpC1wkLYJ2IBqldKmDEFsEd%2BDgZ%2BzStPWfJpKSLm6mhMLtnt8N%2FY%2FZepXk0DIKx%2FHsMyRP&X-Amz-Signature=093c4ae83c2f95bb8406c7f74a7fc1f4a4b8db0dee313c3884112ad28d297ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652OVQNS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5mEbNvX2QGokSYN0Sj8vYwcLbTYTNPBXMux20vlcFnAiEAx5m7Z2P5ru8oKPOylzM5%2Bp%2BAZM%2B%2F4AFcP5Q7CuC3byAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC54V6r0%2FTdNisOqCrcA3zysfN2qh842wfzbZsmNCxLn1MimYO6RDXrmELnT%2BGBzWhlP6vBK3BHygi9fFQaw8LgHq2FoV9R05M8m9sGGzBgrTBsUZI9OaXzFc2PYXhtdv8DeElEN4s%2F9skRWhAeoNWXHeayJItQPMTDNVMqEWbtSVLsqYuOD%2FjyR%2FN0BLfyMDby80y8CF5hDTFXrw5cHo1TJ9hvX8iGzjdMs2I4urHEX3eZCaCy%2BgCByImpKubGymJ6a1mFtJScrFJ2nZcWT0B24pp8%2FdWM%2BUxfx75HYSWGWeR2HNX8rVAL4K6aqUXJE%2FNoGJlBKhihJSnBaTt4cdH0vKcVz2JK6CWrcCEknE0s3IjYs6CNU3H6uLqA29mw4p5MXHTaf0LhHP5%2FgAoJtSRCpwKsj6j%2FbvhJJa%2FuDx%2FxbjJAKAuIjcrsDaIRqMMCuTe8jQrHsMqBdXiplvKHy8kMasIiY3SfbQolWVMd49o%2BkaWhcDHU4lFoiZSZGIsClsXqI0qAzJxWEsW8P3gSB0hDqiEWDUjFIQYuHb48%2BimgDXpCkY1wGHTrIf5Y6uYXWrQoTU19Q5m8ys%2FEOvC5NJ71N0mO0PD9794bWQ47WkSpagxF9Bix72eqKymJEfsjrRQeKYUy7QOb8JS2MImz38QGOqUBdMJ1L0KJcrBLJBpCYsjlkiJ9dlPtg5GQbGjWafqC0KxJ2XVpzR6kNNbFj6l7C7vvADKkRqx%2FedPpvyzIntyqF3DDCGlCpX99SIJa9SSDITGj0WmPHqraxqQdCMs6I%2B8u5JKYZfzUOlrfe9q%2BzIE1XkGpC1wkLYJ2IBqldKmDEFsEd%2BDgZ%2BzStPWfJpKSLm6mhMLtnt8N%2FY%2FZepXk0DIKx%2FHsMyRP&X-Amz-Signature=4add62ed42eec0ccd8598f060b10e5d5abc60afea1eb552c20c9682f6a5a5315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652OVQNS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5mEbNvX2QGokSYN0Sj8vYwcLbTYTNPBXMux20vlcFnAiEAx5m7Z2P5ru8oKPOylzM5%2Bp%2BAZM%2B%2F4AFcP5Q7CuC3byAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC54V6r0%2FTdNisOqCrcA3zysfN2qh842wfzbZsmNCxLn1MimYO6RDXrmELnT%2BGBzWhlP6vBK3BHygi9fFQaw8LgHq2FoV9R05M8m9sGGzBgrTBsUZI9OaXzFc2PYXhtdv8DeElEN4s%2F9skRWhAeoNWXHeayJItQPMTDNVMqEWbtSVLsqYuOD%2FjyR%2FN0BLfyMDby80y8CF5hDTFXrw5cHo1TJ9hvX8iGzjdMs2I4urHEX3eZCaCy%2BgCByImpKubGymJ6a1mFtJScrFJ2nZcWT0B24pp8%2FdWM%2BUxfx75HYSWGWeR2HNX8rVAL4K6aqUXJE%2FNoGJlBKhihJSnBaTt4cdH0vKcVz2JK6CWrcCEknE0s3IjYs6CNU3H6uLqA29mw4p5MXHTaf0LhHP5%2FgAoJtSRCpwKsj6j%2FbvhJJa%2FuDx%2FxbjJAKAuIjcrsDaIRqMMCuTe8jQrHsMqBdXiplvKHy8kMasIiY3SfbQolWVMd49o%2BkaWhcDHU4lFoiZSZGIsClsXqI0qAzJxWEsW8P3gSB0hDqiEWDUjFIQYuHb48%2BimgDXpCkY1wGHTrIf5Y6uYXWrQoTU19Q5m8ys%2FEOvC5NJ71N0mO0PD9794bWQ47WkSpagxF9Bix72eqKymJEfsjrRQeKYUy7QOb8JS2MImz38QGOqUBdMJ1L0KJcrBLJBpCYsjlkiJ9dlPtg5GQbGjWafqC0KxJ2XVpzR6kNNbFj6l7C7vvADKkRqx%2FedPpvyzIntyqF3DDCGlCpX99SIJa9SSDITGj0WmPHqraxqQdCMs6I%2B8u5JKYZfzUOlrfe9q%2BzIE1XkGpC1wkLYJ2IBqldKmDEFsEd%2BDgZ%2BzStPWfJpKSLm6mhMLtnt8N%2FY%2FZepXk0DIKx%2FHsMyRP&X-Amz-Signature=ae79c934b96d18718af0add26d9eac7b1b77c9615a70e431c383cd885e91ee4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652OVQNS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5mEbNvX2QGokSYN0Sj8vYwcLbTYTNPBXMux20vlcFnAiEAx5m7Z2P5ru8oKPOylzM5%2Bp%2BAZM%2B%2F4AFcP5Q7CuC3byAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC54V6r0%2FTdNisOqCrcA3zysfN2qh842wfzbZsmNCxLn1MimYO6RDXrmELnT%2BGBzWhlP6vBK3BHygi9fFQaw8LgHq2FoV9R05M8m9sGGzBgrTBsUZI9OaXzFc2PYXhtdv8DeElEN4s%2F9skRWhAeoNWXHeayJItQPMTDNVMqEWbtSVLsqYuOD%2FjyR%2FN0BLfyMDby80y8CF5hDTFXrw5cHo1TJ9hvX8iGzjdMs2I4urHEX3eZCaCy%2BgCByImpKubGymJ6a1mFtJScrFJ2nZcWT0B24pp8%2FdWM%2BUxfx75HYSWGWeR2HNX8rVAL4K6aqUXJE%2FNoGJlBKhihJSnBaTt4cdH0vKcVz2JK6CWrcCEknE0s3IjYs6CNU3H6uLqA29mw4p5MXHTaf0LhHP5%2FgAoJtSRCpwKsj6j%2FbvhJJa%2FuDx%2FxbjJAKAuIjcrsDaIRqMMCuTe8jQrHsMqBdXiplvKHy8kMasIiY3SfbQolWVMd49o%2BkaWhcDHU4lFoiZSZGIsClsXqI0qAzJxWEsW8P3gSB0hDqiEWDUjFIQYuHb48%2BimgDXpCkY1wGHTrIf5Y6uYXWrQoTU19Q5m8ys%2FEOvC5NJ71N0mO0PD9794bWQ47WkSpagxF9Bix72eqKymJEfsjrRQeKYUy7QOb8JS2MImz38QGOqUBdMJ1L0KJcrBLJBpCYsjlkiJ9dlPtg5GQbGjWafqC0KxJ2XVpzR6kNNbFj6l7C7vvADKkRqx%2FedPpvyzIntyqF3DDCGlCpX99SIJa9SSDITGj0WmPHqraxqQdCMs6I%2B8u5JKYZfzUOlrfe9q%2BzIE1XkGpC1wkLYJ2IBqldKmDEFsEd%2BDgZ%2BzStPWfJpKSLm6mhMLtnt8N%2FY%2FZepXk0DIKx%2FHsMyRP&X-Amz-Signature=611d6f420a732a94b61ab48a0dae306d1b86d491faa24ba18f312e2e3d3c5f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652OVQNS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5mEbNvX2QGokSYN0Sj8vYwcLbTYTNPBXMux20vlcFnAiEAx5m7Z2P5ru8oKPOylzM5%2Bp%2BAZM%2B%2F4AFcP5Q7CuC3byAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC54V6r0%2FTdNisOqCrcA3zysfN2qh842wfzbZsmNCxLn1MimYO6RDXrmELnT%2BGBzWhlP6vBK3BHygi9fFQaw8LgHq2FoV9R05M8m9sGGzBgrTBsUZI9OaXzFc2PYXhtdv8DeElEN4s%2F9skRWhAeoNWXHeayJItQPMTDNVMqEWbtSVLsqYuOD%2FjyR%2FN0BLfyMDby80y8CF5hDTFXrw5cHo1TJ9hvX8iGzjdMs2I4urHEX3eZCaCy%2BgCByImpKubGymJ6a1mFtJScrFJ2nZcWT0B24pp8%2FdWM%2BUxfx75HYSWGWeR2HNX8rVAL4K6aqUXJE%2FNoGJlBKhihJSnBaTt4cdH0vKcVz2JK6CWrcCEknE0s3IjYs6CNU3H6uLqA29mw4p5MXHTaf0LhHP5%2FgAoJtSRCpwKsj6j%2FbvhJJa%2FuDx%2FxbjJAKAuIjcrsDaIRqMMCuTe8jQrHsMqBdXiplvKHy8kMasIiY3SfbQolWVMd49o%2BkaWhcDHU4lFoiZSZGIsClsXqI0qAzJxWEsW8P3gSB0hDqiEWDUjFIQYuHb48%2BimgDXpCkY1wGHTrIf5Y6uYXWrQoTU19Q5m8ys%2FEOvC5NJ71N0mO0PD9794bWQ47WkSpagxF9Bix72eqKymJEfsjrRQeKYUy7QOb8JS2MImz38QGOqUBdMJ1L0KJcrBLJBpCYsjlkiJ9dlPtg5GQbGjWafqC0KxJ2XVpzR6kNNbFj6l7C7vvADKkRqx%2FedPpvyzIntyqF3DDCGlCpX99SIJa9SSDITGj0WmPHqraxqQdCMs6I%2B8u5JKYZfzUOlrfe9q%2BzIE1XkGpC1wkLYJ2IBqldKmDEFsEd%2BDgZ%2BzStPWfJpKSLm6mhMLtnt8N%2FY%2FZepXk0DIKx%2FHsMyRP&X-Amz-Signature=0a9ffeadfc674a5ad9294af1d6cba1ce784d97e56dbe100fe67da104883f34b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652OVQNS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5mEbNvX2QGokSYN0Sj8vYwcLbTYTNPBXMux20vlcFnAiEAx5m7Z2P5ru8oKPOylzM5%2Bp%2BAZM%2B%2F4AFcP5Q7CuC3byAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC54V6r0%2FTdNisOqCrcA3zysfN2qh842wfzbZsmNCxLn1MimYO6RDXrmELnT%2BGBzWhlP6vBK3BHygi9fFQaw8LgHq2FoV9R05M8m9sGGzBgrTBsUZI9OaXzFc2PYXhtdv8DeElEN4s%2F9skRWhAeoNWXHeayJItQPMTDNVMqEWbtSVLsqYuOD%2FjyR%2FN0BLfyMDby80y8CF5hDTFXrw5cHo1TJ9hvX8iGzjdMs2I4urHEX3eZCaCy%2BgCByImpKubGymJ6a1mFtJScrFJ2nZcWT0B24pp8%2FdWM%2BUxfx75HYSWGWeR2HNX8rVAL4K6aqUXJE%2FNoGJlBKhihJSnBaTt4cdH0vKcVz2JK6CWrcCEknE0s3IjYs6CNU3H6uLqA29mw4p5MXHTaf0LhHP5%2FgAoJtSRCpwKsj6j%2FbvhJJa%2FuDx%2FxbjJAKAuIjcrsDaIRqMMCuTe8jQrHsMqBdXiplvKHy8kMasIiY3SfbQolWVMd49o%2BkaWhcDHU4lFoiZSZGIsClsXqI0qAzJxWEsW8P3gSB0hDqiEWDUjFIQYuHb48%2BimgDXpCkY1wGHTrIf5Y6uYXWrQoTU19Q5m8ys%2FEOvC5NJ71N0mO0PD9794bWQ47WkSpagxF9Bix72eqKymJEfsjrRQeKYUy7QOb8JS2MImz38QGOqUBdMJ1L0KJcrBLJBpCYsjlkiJ9dlPtg5GQbGjWafqC0KxJ2XVpzR6kNNbFj6l7C7vvADKkRqx%2FedPpvyzIntyqF3DDCGlCpX99SIJa9SSDITGj0WmPHqraxqQdCMs6I%2B8u5JKYZfzUOlrfe9q%2BzIE1XkGpC1wkLYJ2IBqldKmDEFsEd%2BDgZ%2BzStPWfJpKSLm6mhMLtnt8N%2FY%2FZepXk0DIKx%2FHsMyRP&X-Amz-Signature=fb238ebd0e9134de55542f1da9a66f88460f2bce69a5431f238e6b64a06bca72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466652OVQNS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5mEbNvX2QGokSYN0Sj8vYwcLbTYTNPBXMux20vlcFnAiEAx5m7Z2P5ru8oKPOylzM5%2Bp%2BAZM%2B%2F4AFcP5Q7CuC3byAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBC54V6r0%2FTdNisOqCrcA3zysfN2qh842wfzbZsmNCxLn1MimYO6RDXrmELnT%2BGBzWhlP6vBK3BHygi9fFQaw8LgHq2FoV9R05M8m9sGGzBgrTBsUZI9OaXzFc2PYXhtdv8DeElEN4s%2F9skRWhAeoNWXHeayJItQPMTDNVMqEWbtSVLsqYuOD%2FjyR%2FN0BLfyMDby80y8CF5hDTFXrw5cHo1TJ9hvX8iGzjdMs2I4urHEX3eZCaCy%2BgCByImpKubGymJ6a1mFtJScrFJ2nZcWT0B24pp8%2FdWM%2BUxfx75HYSWGWeR2HNX8rVAL4K6aqUXJE%2FNoGJlBKhihJSnBaTt4cdH0vKcVz2JK6CWrcCEknE0s3IjYs6CNU3H6uLqA29mw4p5MXHTaf0LhHP5%2FgAoJtSRCpwKsj6j%2FbvhJJa%2FuDx%2FxbjJAKAuIjcrsDaIRqMMCuTe8jQrHsMqBdXiplvKHy8kMasIiY3SfbQolWVMd49o%2BkaWhcDHU4lFoiZSZGIsClsXqI0qAzJxWEsW8P3gSB0hDqiEWDUjFIQYuHb48%2BimgDXpCkY1wGHTrIf5Y6uYXWrQoTU19Q5m8ys%2FEOvC5NJ71N0mO0PD9794bWQ47WkSpagxF9Bix72eqKymJEfsjrRQeKYUy7QOb8JS2MImz38QGOqUBdMJ1L0KJcrBLJBpCYsjlkiJ9dlPtg5GQbGjWafqC0KxJ2XVpzR6kNNbFj6l7C7vvADKkRqx%2FedPpvyzIntyqF3DDCGlCpX99SIJa9SSDITGj0WmPHqraxqQdCMs6I%2B8u5JKYZfzUOlrfe9q%2BzIE1XkGpC1wkLYJ2IBqldKmDEFsEd%2BDgZ%2BzStPWfJpKSLm6mhMLtnt8N%2FY%2FZepXk0DIKx%2FHsMyRP&X-Amz-Signature=093c4ae83c2f95bb8406c7f74a7fc1f4a4b8db0dee313c3884112ad28d297ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
