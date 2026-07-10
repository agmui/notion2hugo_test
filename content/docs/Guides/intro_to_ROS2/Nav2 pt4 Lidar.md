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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGKCUI2%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO0LDjsVGE56WyWT1Y6dgsjpVssPbbpajYBsgGn5FG2AiEA%2BQAV8EqqJG3J5maL1pRl%2BhL9mlW1qf0JKiy6iVMT4IwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI0ltvplV4zz68uJircA1VTaTbkq1Xgd7TP1aunZ9VVzO4lJ7TVNrF7K2eyuRD3kJOIbWyDeBmlzBbgSWQtFM0r%2F0Vps3HZOajy6FAJA57aLAV0MekKF3KkYhLpZZpMszVSJgHzWmXkqHYpdWgiFNAR4Yorcvp9%2FAEhOo11i6HO%2BSj1BTjgzbLydPwKBONV0gqvz3jMUxvIg4vQUNWRHcdWMjxLWkHyDPxpiHI0wElohkw0q%2FEsC%2BuNMx8abilnlta1pllb689solJFgty8a8a8cjLFV6nwGMaXadKxyLxVS235d0GiqJMGGGI5O4JNo1yhUeD%2BOGHVFkihbbnQ0f6fPmbKx9jQGDsQqXt6dMZ5KlAEsqKEVeJsscHTVghxJdaRypWB2wgQWWy1dxXoJs%2FQe0tM8%2BR4aPot3f4lWCOqqjcdaBL9ywLwVzxwetFH%2FzsoeF25Z9W6JqihMrCTHOh%2FUt7d1KALZ%2BtleMUAzzi7hMulCaBEcriG7N6yS20YjYl4Kyrf89BDVVfj7V%2FEbimGz3Qw3HtA1CMXveDnZlO30xdGS%2FOehT8wWstw2mVIwp1O1n%2FRwBRMPIboMx5b%2BUvBJxs1d0cT4S4SV9L%2FwkS6oiXMM%2BP06DWB%2B5zvEciSLQVUmFaA%2BgdUnkUTMIW4wdIGOqUBl02P%2BvCcTJcD8PV6CiJ58xjwj4O%2BLs10hoYOXbIHE4AcvLg39LZsrBm3kV6427KMYqg1Q9evrdmJWgvfJoyN%2BmbG3%2F%2FDhUhfwwrHNKqQaJKqv5BOeEJsWeQlujJf%2BiX6UlMbAaXi3JKxUloEeQFwdtSgIgDNPAgD5zK7QFNujcdaM0goZzVi4mM%2F2qrjLYoda5mWHiqD4mdiS%2BtNfvooydJWk2FT&X-Amz-Signature=40c0df40536e560e601fe797c9519d9a57191e2672cd246bcc56561c42dc23ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM7W2PG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMf786K8Isv23EiHcdFd9WFQzLV4mwJ5fbIh%2BmC4ZwIgNtuddHTuoe%2B6NhUAgHbTI%2Bi%2F4KB%2FYIvGRtFhLtwowisqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkRI%2FK3Wh5GOms5tyrcA4Gp3hBsVv7AOMd7d%2FYHDSfqfovFGS1lYyvWjhLN4vB%2FsJakULv7Geb1qThdVnyAQ3GBMLyH2RDOleDe3kP04NAa2emK7LeLUcOhrqTAoZ8qxJmqOIqmIIUW%2FqrnggcDvVNCypHw7IT17x%2FT%2BNCrOu4jOSKJEm0bQ8Zy6OUIf%2FYTHonhyzucyclHcCGgovDlQAwpobkzdzUFaK5M2XLcUS5j3iCWjU1nD6D4w0cRX1c8KT3JW9%2FCJkTdAhTCxPuulykNMD%2F6RNcBzLGAuHGW4u7PNcKnPJuWEf93bpb0BfPqqkzSbtoH3f6YmYaB%2B1f%2FkyfnT4ja2igP2QidQnxCr%2F7tF5SC6ulRciSKDlw6xCblz5W%2BE%2Fv5AJsdov6NJN6aZajFV6DGA2wCVoKAvc6eM7EXcW5onxbc9n2gJEXY6N1tXDYVa0xuBG8p3H0DKTwA8yjMwBTiVBecmxaUhrFdT5i7ADLuyYQ3EVSbfa11%2FUBQf%2F5KAm5Da7zZk3NpZtzuoLVG90kc%2F6rmw1BqGm9CoZj7ngTF%2FTP6HBk7JyG0bP3DiORQMmRV4FiiSRY%2Fc%2BqpPFgK6KMLyQ2t85vUqXubhcfVbQv5gMRfnzKhy7wV50O5VQgAVj%2BmSNveLlbwMLe4wdIGOqUB6JrsJwH0ZAGqmX5aBhj3kuyiQ8NvrxMaFAKKWrwOrQaXEWn4mgKIEITMmbrhEL6p7dxCthU7sbG%2F89NArZW9FL%2BCzh74DywmnElnGCSoPU%2FL6YY85NX5GeWyzGJxogIx7NcNg28ckKRtaxARDWXzXXox28lF226dmU7JVVtApvcTX2uxg1hEVvSn7Sz82Z7cJNIrX%2FMCWOT7ZDwVWOA4Hfcp8zvX&X-Amz-Signature=26d56b813db3d9ee66d22cab51ed8db31edd1a3675d3d0bf32eb6f474aff6910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM7W2PG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMf786K8Isv23EiHcdFd9WFQzLV4mwJ5fbIh%2BmC4ZwIgNtuddHTuoe%2B6NhUAgHbTI%2Bi%2F4KB%2FYIvGRtFhLtwowisqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkRI%2FK3Wh5GOms5tyrcA4Gp3hBsVv7AOMd7d%2FYHDSfqfovFGS1lYyvWjhLN4vB%2FsJakULv7Geb1qThdVnyAQ3GBMLyH2RDOleDe3kP04NAa2emK7LeLUcOhrqTAoZ8qxJmqOIqmIIUW%2FqrnggcDvVNCypHw7IT17x%2FT%2BNCrOu4jOSKJEm0bQ8Zy6OUIf%2FYTHonhyzucyclHcCGgovDlQAwpobkzdzUFaK5M2XLcUS5j3iCWjU1nD6D4w0cRX1c8KT3JW9%2FCJkTdAhTCxPuulykNMD%2F6RNcBzLGAuHGW4u7PNcKnPJuWEf93bpb0BfPqqkzSbtoH3f6YmYaB%2B1f%2FkyfnT4ja2igP2QidQnxCr%2F7tF5SC6ulRciSKDlw6xCblz5W%2BE%2Fv5AJsdov6NJN6aZajFV6DGA2wCVoKAvc6eM7EXcW5onxbc9n2gJEXY6N1tXDYVa0xuBG8p3H0DKTwA8yjMwBTiVBecmxaUhrFdT5i7ADLuyYQ3EVSbfa11%2FUBQf%2F5KAm5Da7zZk3NpZtzuoLVG90kc%2F6rmw1BqGm9CoZj7ngTF%2FTP6HBk7JyG0bP3DiORQMmRV4FiiSRY%2Fc%2BqpPFgK6KMLyQ2t85vUqXubhcfVbQv5gMRfnzKhy7wV50O5VQgAVj%2BmSNveLlbwMLe4wdIGOqUB6JrsJwH0ZAGqmX5aBhj3kuyiQ8NvrxMaFAKKWrwOrQaXEWn4mgKIEITMmbrhEL6p7dxCthU7sbG%2F89NArZW9FL%2BCzh74DywmnElnGCSoPU%2FL6YY85NX5GeWyzGJxogIx7NcNg28ckKRtaxARDWXzXXox28lF226dmU7JVVtApvcTX2uxg1hEVvSn7Sz82Z7cJNIrX%2FMCWOT7ZDwVWOA4Hfcp8zvX&X-Amz-Signature=533053c0fb853ccac765b11d766cc67e5a10292b557be51a0d6918390148644e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM7W2PG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMf786K8Isv23EiHcdFd9WFQzLV4mwJ5fbIh%2BmC4ZwIgNtuddHTuoe%2B6NhUAgHbTI%2Bi%2F4KB%2FYIvGRtFhLtwowisqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkRI%2FK3Wh5GOms5tyrcA4Gp3hBsVv7AOMd7d%2FYHDSfqfovFGS1lYyvWjhLN4vB%2FsJakULv7Geb1qThdVnyAQ3GBMLyH2RDOleDe3kP04NAa2emK7LeLUcOhrqTAoZ8qxJmqOIqmIIUW%2FqrnggcDvVNCypHw7IT17x%2FT%2BNCrOu4jOSKJEm0bQ8Zy6OUIf%2FYTHonhyzucyclHcCGgovDlQAwpobkzdzUFaK5M2XLcUS5j3iCWjU1nD6D4w0cRX1c8KT3JW9%2FCJkTdAhTCxPuulykNMD%2F6RNcBzLGAuHGW4u7PNcKnPJuWEf93bpb0BfPqqkzSbtoH3f6YmYaB%2B1f%2FkyfnT4ja2igP2QidQnxCr%2F7tF5SC6ulRciSKDlw6xCblz5W%2BE%2Fv5AJsdov6NJN6aZajFV6DGA2wCVoKAvc6eM7EXcW5onxbc9n2gJEXY6N1tXDYVa0xuBG8p3H0DKTwA8yjMwBTiVBecmxaUhrFdT5i7ADLuyYQ3EVSbfa11%2FUBQf%2F5KAm5Da7zZk3NpZtzuoLVG90kc%2F6rmw1BqGm9CoZj7ngTF%2FTP6HBk7JyG0bP3DiORQMmRV4FiiSRY%2Fc%2BqpPFgK6KMLyQ2t85vUqXubhcfVbQv5gMRfnzKhy7wV50O5VQgAVj%2BmSNveLlbwMLe4wdIGOqUB6JrsJwH0ZAGqmX5aBhj3kuyiQ8NvrxMaFAKKWrwOrQaXEWn4mgKIEITMmbrhEL6p7dxCthU7sbG%2F89NArZW9FL%2BCzh74DywmnElnGCSoPU%2FL6YY85NX5GeWyzGJxogIx7NcNg28ckKRtaxARDWXzXXox28lF226dmU7JVVtApvcTX2uxg1hEVvSn7Sz82Z7cJNIrX%2FMCWOT7ZDwVWOA4Hfcp8zvX&X-Amz-Signature=709a0c944352a67cd66467f390421cd346c44616eafe39fd80f21a64dce7fcca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM7W2PG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMf786K8Isv23EiHcdFd9WFQzLV4mwJ5fbIh%2BmC4ZwIgNtuddHTuoe%2B6NhUAgHbTI%2Bi%2F4KB%2FYIvGRtFhLtwowisqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkRI%2FK3Wh5GOms5tyrcA4Gp3hBsVv7AOMd7d%2FYHDSfqfovFGS1lYyvWjhLN4vB%2FsJakULv7Geb1qThdVnyAQ3GBMLyH2RDOleDe3kP04NAa2emK7LeLUcOhrqTAoZ8qxJmqOIqmIIUW%2FqrnggcDvVNCypHw7IT17x%2FT%2BNCrOu4jOSKJEm0bQ8Zy6OUIf%2FYTHonhyzucyclHcCGgovDlQAwpobkzdzUFaK5M2XLcUS5j3iCWjU1nD6D4w0cRX1c8KT3JW9%2FCJkTdAhTCxPuulykNMD%2F6RNcBzLGAuHGW4u7PNcKnPJuWEf93bpb0BfPqqkzSbtoH3f6YmYaB%2B1f%2FkyfnT4ja2igP2QidQnxCr%2F7tF5SC6ulRciSKDlw6xCblz5W%2BE%2Fv5AJsdov6NJN6aZajFV6DGA2wCVoKAvc6eM7EXcW5onxbc9n2gJEXY6N1tXDYVa0xuBG8p3H0DKTwA8yjMwBTiVBecmxaUhrFdT5i7ADLuyYQ3EVSbfa11%2FUBQf%2F5KAm5Da7zZk3NpZtzuoLVG90kc%2F6rmw1BqGm9CoZj7ngTF%2FTP6HBk7JyG0bP3DiORQMmRV4FiiSRY%2Fc%2BqpPFgK6KMLyQ2t85vUqXubhcfVbQv5gMRfnzKhy7wV50O5VQgAVj%2BmSNveLlbwMLe4wdIGOqUB6JrsJwH0ZAGqmX5aBhj3kuyiQ8NvrxMaFAKKWrwOrQaXEWn4mgKIEITMmbrhEL6p7dxCthU7sbG%2F89NArZW9FL%2BCzh74DywmnElnGCSoPU%2FL6YY85NX5GeWyzGJxogIx7NcNg28ckKRtaxARDWXzXXox28lF226dmU7JVVtApvcTX2uxg1hEVvSn7Sz82Z7cJNIrX%2FMCWOT7ZDwVWOA4Hfcp8zvX&X-Amz-Signature=42bc09af88742f57ccd74e3c3ac8eaba73780f4e7a837710f2e177e45ef54a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM7W2PG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMf786K8Isv23EiHcdFd9WFQzLV4mwJ5fbIh%2BmC4ZwIgNtuddHTuoe%2B6NhUAgHbTI%2Bi%2F4KB%2FYIvGRtFhLtwowisqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkRI%2FK3Wh5GOms5tyrcA4Gp3hBsVv7AOMd7d%2FYHDSfqfovFGS1lYyvWjhLN4vB%2FsJakULv7Geb1qThdVnyAQ3GBMLyH2RDOleDe3kP04NAa2emK7LeLUcOhrqTAoZ8qxJmqOIqmIIUW%2FqrnggcDvVNCypHw7IT17x%2FT%2BNCrOu4jOSKJEm0bQ8Zy6OUIf%2FYTHonhyzucyclHcCGgovDlQAwpobkzdzUFaK5M2XLcUS5j3iCWjU1nD6D4w0cRX1c8KT3JW9%2FCJkTdAhTCxPuulykNMD%2F6RNcBzLGAuHGW4u7PNcKnPJuWEf93bpb0BfPqqkzSbtoH3f6YmYaB%2B1f%2FkyfnT4ja2igP2QidQnxCr%2F7tF5SC6ulRciSKDlw6xCblz5W%2BE%2Fv5AJsdov6NJN6aZajFV6DGA2wCVoKAvc6eM7EXcW5onxbc9n2gJEXY6N1tXDYVa0xuBG8p3H0DKTwA8yjMwBTiVBecmxaUhrFdT5i7ADLuyYQ3EVSbfa11%2FUBQf%2F5KAm5Da7zZk3NpZtzuoLVG90kc%2F6rmw1BqGm9CoZj7ngTF%2FTP6HBk7JyG0bP3DiORQMmRV4FiiSRY%2Fc%2BqpPFgK6KMLyQ2t85vUqXubhcfVbQv5gMRfnzKhy7wV50O5VQgAVj%2BmSNveLlbwMLe4wdIGOqUB6JrsJwH0ZAGqmX5aBhj3kuyiQ8NvrxMaFAKKWrwOrQaXEWn4mgKIEITMmbrhEL6p7dxCthU7sbG%2F89NArZW9FL%2BCzh74DywmnElnGCSoPU%2FL6YY85NX5GeWyzGJxogIx7NcNg28ckKRtaxARDWXzXXox28lF226dmU7JVVtApvcTX2uxg1hEVvSn7Sz82Z7cJNIrX%2FMCWOT7ZDwVWOA4Hfcp8zvX&X-Amz-Signature=c7810d100490d6f25d74bafb9095b9ba8bcf6aca61d7d7fde2a8a679add8f72a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM7W2PG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMf786K8Isv23EiHcdFd9WFQzLV4mwJ5fbIh%2BmC4ZwIgNtuddHTuoe%2B6NhUAgHbTI%2Bi%2F4KB%2FYIvGRtFhLtwowisqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkRI%2FK3Wh5GOms5tyrcA4Gp3hBsVv7AOMd7d%2FYHDSfqfovFGS1lYyvWjhLN4vB%2FsJakULv7Geb1qThdVnyAQ3GBMLyH2RDOleDe3kP04NAa2emK7LeLUcOhrqTAoZ8qxJmqOIqmIIUW%2FqrnggcDvVNCypHw7IT17x%2FT%2BNCrOu4jOSKJEm0bQ8Zy6OUIf%2FYTHonhyzucyclHcCGgovDlQAwpobkzdzUFaK5M2XLcUS5j3iCWjU1nD6D4w0cRX1c8KT3JW9%2FCJkTdAhTCxPuulykNMD%2F6RNcBzLGAuHGW4u7PNcKnPJuWEf93bpb0BfPqqkzSbtoH3f6YmYaB%2B1f%2FkyfnT4ja2igP2QidQnxCr%2F7tF5SC6ulRciSKDlw6xCblz5W%2BE%2Fv5AJsdov6NJN6aZajFV6DGA2wCVoKAvc6eM7EXcW5onxbc9n2gJEXY6N1tXDYVa0xuBG8p3H0DKTwA8yjMwBTiVBecmxaUhrFdT5i7ADLuyYQ3EVSbfa11%2FUBQf%2F5KAm5Da7zZk3NpZtzuoLVG90kc%2F6rmw1BqGm9CoZj7ngTF%2FTP6HBk7JyG0bP3DiORQMmRV4FiiSRY%2Fc%2BqpPFgK6KMLyQ2t85vUqXubhcfVbQv5gMRfnzKhy7wV50O5VQgAVj%2BmSNveLlbwMLe4wdIGOqUB6JrsJwH0ZAGqmX5aBhj3kuyiQ8NvrxMaFAKKWrwOrQaXEWn4mgKIEITMmbrhEL6p7dxCthU7sbG%2F89NArZW9FL%2BCzh74DywmnElnGCSoPU%2FL6YY85NX5GeWyzGJxogIx7NcNg28ckKRtaxARDWXzXXox28lF226dmU7JVVtApvcTX2uxg1hEVvSn7Sz82Z7cJNIrX%2FMCWOT7ZDwVWOA4Hfcp8zvX&X-Amz-Signature=0d287cb44fabed8ce29f6c8d66506cbdba3b926bb34b2a70161ea91bc23502f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM7W2PG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMf786K8Isv23EiHcdFd9WFQzLV4mwJ5fbIh%2BmC4ZwIgNtuddHTuoe%2B6NhUAgHbTI%2Bi%2F4KB%2FYIvGRtFhLtwowisqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkRI%2FK3Wh5GOms5tyrcA4Gp3hBsVv7AOMd7d%2FYHDSfqfovFGS1lYyvWjhLN4vB%2FsJakULv7Geb1qThdVnyAQ3GBMLyH2RDOleDe3kP04NAa2emK7LeLUcOhrqTAoZ8qxJmqOIqmIIUW%2FqrnggcDvVNCypHw7IT17x%2FT%2BNCrOu4jOSKJEm0bQ8Zy6OUIf%2FYTHonhyzucyclHcCGgovDlQAwpobkzdzUFaK5M2XLcUS5j3iCWjU1nD6D4w0cRX1c8KT3JW9%2FCJkTdAhTCxPuulykNMD%2F6RNcBzLGAuHGW4u7PNcKnPJuWEf93bpb0BfPqqkzSbtoH3f6YmYaB%2B1f%2FkyfnT4ja2igP2QidQnxCr%2F7tF5SC6ulRciSKDlw6xCblz5W%2BE%2Fv5AJsdov6NJN6aZajFV6DGA2wCVoKAvc6eM7EXcW5onxbc9n2gJEXY6N1tXDYVa0xuBG8p3H0DKTwA8yjMwBTiVBecmxaUhrFdT5i7ADLuyYQ3EVSbfa11%2FUBQf%2F5KAm5Da7zZk3NpZtzuoLVG90kc%2F6rmw1BqGm9CoZj7ngTF%2FTP6HBk7JyG0bP3DiORQMmRV4FiiSRY%2Fc%2BqpPFgK6KMLyQ2t85vUqXubhcfVbQv5gMRfnzKhy7wV50O5VQgAVj%2BmSNveLlbwMLe4wdIGOqUB6JrsJwH0ZAGqmX5aBhj3kuyiQ8NvrxMaFAKKWrwOrQaXEWn4mgKIEITMmbrhEL6p7dxCthU7sbG%2F89NArZW9FL%2BCzh74DywmnElnGCSoPU%2FL6YY85NX5GeWyzGJxogIx7NcNg28ckKRtaxARDWXzXXox28lF226dmU7JVVtApvcTX2uxg1hEVvSn7Sz82Z7cJNIrX%2FMCWOT7ZDwVWOA4Hfcp8zvX&X-Amz-Signature=51c063b7db518b4c6c70f2092e61348cb0129019b92e60c59a3e3cd29c292992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM7W2PG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMf786K8Isv23EiHcdFd9WFQzLV4mwJ5fbIh%2BmC4ZwIgNtuddHTuoe%2B6NhUAgHbTI%2Bi%2F4KB%2FYIvGRtFhLtwowisqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkRI%2FK3Wh5GOms5tyrcA4Gp3hBsVv7AOMd7d%2FYHDSfqfovFGS1lYyvWjhLN4vB%2FsJakULv7Geb1qThdVnyAQ3GBMLyH2RDOleDe3kP04NAa2emK7LeLUcOhrqTAoZ8qxJmqOIqmIIUW%2FqrnggcDvVNCypHw7IT17x%2FT%2BNCrOu4jOSKJEm0bQ8Zy6OUIf%2FYTHonhyzucyclHcCGgovDlQAwpobkzdzUFaK5M2XLcUS5j3iCWjU1nD6D4w0cRX1c8KT3JW9%2FCJkTdAhTCxPuulykNMD%2F6RNcBzLGAuHGW4u7PNcKnPJuWEf93bpb0BfPqqkzSbtoH3f6YmYaB%2B1f%2FkyfnT4ja2igP2QidQnxCr%2F7tF5SC6ulRciSKDlw6xCblz5W%2BE%2Fv5AJsdov6NJN6aZajFV6DGA2wCVoKAvc6eM7EXcW5onxbc9n2gJEXY6N1tXDYVa0xuBG8p3H0DKTwA8yjMwBTiVBecmxaUhrFdT5i7ADLuyYQ3EVSbfa11%2FUBQf%2F5KAm5Da7zZk3NpZtzuoLVG90kc%2F6rmw1BqGm9CoZj7ngTF%2FTP6HBk7JyG0bP3DiORQMmRV4FiiSRY%2Fc%2BqpPFgK6KMLyQ2t85vUqXubhcfVbQv5gMRfnzKhy7wV50O5VQgAVj%2BmSNveLlbwMLe4wdIGOqUB6JrsJwH0ZAGqmX5aBhj3kuyiQ8NvrxMaFAKKWrwOrQaXEWn4mgKIEITMmbrhEL6p7dxCthU7sbG%2F89NArZW9FL%2BCzh74DywmnElnGCSoPU%2FL6YY85NX5GeWyzGJxogIx7NcNg28ckKRtaxARDWXzXXox28lF226dmU7JVVtApvcTX2uxg1hEVvSn7Sz82Z7cJNIrX%2FMCWOT7ZDwVWOA4Hfcp8zvX&X-Amz-Signature=7b3a9a996e5e1c149550b02fcfda9595c778a4283bc65c77da0cbf2ee139b1ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM7W2PG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMf786K8Isv23EiHcdFd9WFQzLV4mwJ5fbIh%2BmC4ZwIgNtuddHTuoe%2B6NhUAgHbTI%2Bi%2F4KB%2FYIvGRtFhLtwowisqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkRI%2FK3Wh5GOms5tyrcA4Gp3hBsVv7AOMd7d%2FYHDSfqfovFGS1lYyvWjhLN4vB%2FsJakULv7Geb1qThdVnyAQ3GBMLyH2RDOleDe3kP04NAa2emK7LeLUcOhrqTAoZ8qxJmqOIqmIIUW%2FqrnggcDvVNCypHw7IT17x%2FT%2BNCrOu4jOSKJEm0bQ8Zy6OUIf%2FYTHonhyzucyclHcCGgovDlQAwpobkzdzUFaK5M2XLcUS5j3iCWjU1nD6D4w0cRX1c8KT3JW9%2FCJkTdAhTCxPuulykNMD%2F6RNcBzLGAuHGW4u7PNcKnPJuWEf93bpb0BfPqqkzSbtoH3f6YmYaB%2B1f%2FkyfnT4ja2igP2QidQnxCr%2F7tF5SC6ulRciSKDlw6xCblz5W%2BE%2Fv5AJsdov6NJN6aZajFV6DGA2wCVoKAvc6eM7EXcW5onxbc9n2gJEXY6N1tXDYVa0xuBG8p3H0DKTwA8yjMwBTiVBecmxaUhrFdT5i7ADLuyYQ3EVSbfa11%2FUBQf%2F5KAm5Da7zZk3NpZtzuoLVG90kc%2F6rmw1BqGm9CoZj7ngTF%2FTP6HBk7JyG0bP3DiORQMmRV4FiiSRY%2Fc%2BqpPFgK6KMLyQ2t85vUqXubhcfVbQv5gMRfnzKhy7wV50O5VQgAVj%2BmSNveLlbwMLe4wdIGOqUB6JrsJwH0ZAGqmX5aBhj3kuyiQ8NvrxMaFAKKWrwOrQaXEWn4mgKIEITMmbrhEL6p7dxCthU7sbG%2F89NArZW9FL%2BCzh74DywmnElnGCSoPU%2FL6YY85NX5GeWyzGJxogIx7NcNg28ckKRtaxARDWXzXXox28lF226dmU7JVVtApvcTX2uxg1hEVvSn7Sz82Z7cJNIrX%2FMCWOT7ZDwVWOA4Hfcp8zvX&X-Amz-Signature=77333e842430cb98e9863b2a90cde909ef74a8acc212d37e2953b49a52a97bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDM7W2PG%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMf786K8Isv23EiHcdFd9WFQzLV4mwJ5fbIh%2BmC4ZwIgNtuddHTuoe%2B6NhUAgHbTI%2Bi%2F4KB%2FYIvGRtFhLtwowisqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkRI%2FK3Wh5GOms5tyrcA4Gp3hBsVv7AOMd7d%2FYHDSfqfovFGS1lYyvWjhLN4vB%2FsJakULv7Geb1qThdVnyAQ3GBMLyH2RDOleDe3kP04NAa2emK7LeLUcOhrqTAoZ8qxJmqOIqmIIUW%2FqrnggcDvVNCypHw7IT17x%2FT%2BNCrOu4jOSKJEm0bQ8Zy6OUIf%2FYTHonhyzucyclHcCGgovDlQAwpobkzdzUFaK5M2XLcUS5j3iCWjU1nD6D4w0cRX1c8KT3JW9%2FCJkTdAhTCxPuulykNMD%2F6RNcBzLGAuHGW4u7PNcKnPJuWEf93bpb0BfPqqkzSbtoH3f6YmYaB%2B1f%2FkyfnT4ja2igP2QidQnxCr%2F7tF5SC6ulRciSKDlw6xCblz5W%2BE%2Fv5AJsdov6NJN6aZajFV6DGA2wCVoKAvc6eM7EXcW5onxbc9n2gJEXY6N1tXDYVa0xuBG8p3H0DKTwA8yjMwBTiVBecmxaUhrFdT5i7ADLuyYQ3EVSbfa11%2FUBQf%2F5KAm5Da7zZk3NpZtzuoLVG90kc%2F6rmw1BqGm9CoZj7ngTF%2FTP6HBk7JyG0bP3DiORQMmRV4FiiSRY%2Fc%2BqpPFgK6KMLyQ2t85vUqXubhcfVbQv5gMRfnzKhy7wV50O5VQgAVj%2BmSNveLlbwMLe4wdIGOqUB6JrsJwH0ZAGqmX5aBhj3kuyiQ8NvrxMaFAKKWrwOrQaXEWn4mgKIEITMmbrhEL6p7dxCthU7sbG%2F89NArZW9FL%2BCzh74DywmnElnGCSoPU%2FL6YY85NX5GeWyzGJxogIx7NcNg28ckKRtaxARDWXzXXox28lF226dmU7JVVtApvcTX2uxg1hEVvSn7Sz82Z7cJNIrX%2FMCWOT7ZDwVWOA4Hfcp8zvX&X-Amz-Signature=42bc09af88742f57ccd74e3c3ac8eaba73780f4e7a837710f2e177e45ef54a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
