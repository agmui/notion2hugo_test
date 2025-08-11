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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKJGPS27%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFS2pRJZFzK5%2FGVFKqay6O65oZn1lBXM4CQ21DtM2ad3AiBd02dYekOhfZoTh%2BkUbogUx6zGb%2Bn5bSrjWzzZ9NTlTCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDiBzsta59Ul6%2Fpz2KtwDFEgovD9UvJTx66dHm0xO5csHlCcixHCcVF0%2FAvklxVDLRT%2B4ep34rikLcouqJOf5x0BdLVzN%2Br8JOS8LIIFciWLj3vFT2Yy6UqvHtwDKkhQGvI%2FuxIdw%2BGvooD5YzQRJfVWZ%2FGQ%2BRbwEJjYwJx2gcTWO%2F88rtyXJExFpWj4x2wSEMpL7GxtrhWB01E9DMSViAUc8p9OVEgKbnlwXb0vikcTXZs3hsmvDV61uKVsl65yXCndBr6AWYtqob7EsQZrRGNDCqYk964Qai%2BZovH0Gj9dG46aLXizysoRcR6xz4hrMJWjb0fWUFcFp8nu1BayFiJO3aVvGRWhgrbTCTUIgcUH5CnrB6KrgV2Bx0FQYj1pqI6bZsmR3kEzsbYnJtIOYjUR%2BcINkfyUKlkazO55NBOcW7hmalgnaSRJvqFPfAOVn2HrJtJg0yDFa66Hxpz0C7rAymH1loLlToElQJpmvifm%2Bmkf89MiqQPqB0TFFGgIG5CFSiWk3V5mDwdeHsN2U1SA6aQXy3%2FQhzcnJ6B1F6AXE2dYm1kAeILbirWvaobMKA9k%2F3TyPSzUTrqqG8v80oPuIHZK8l5LOc8o8VmZt8ziYNH6TJYNNY%2BL89zYIuu3KpzdUr8ZLh8HujCgw3Z3lxAY6pgHKD9AsamtnnWjGEpSl3lFF0DhWS4AbHlmyEfwoXIXNZZ5gu78jGJ1ZuikreWX8rdFoORI7E0zNPnW%2F%2FdH2TLwY0SqkuJ5UVcTQpjh1Il%2F5OiUtwKInyJtJjo7WYO6XUr72RCJlh7%2BlsyKvPr5mBZTzadjs3uXRsXMLctc1nY2%2FJJG2rIzdddJsP5kLqARN3vxwKpeW47scMJWWTVY8H%2FdBKsLnbO0%2F&X-Amz-Signature=180ac6ead3fb75c78bf211613e72afacf9db3e06dc00b2cf26d2a195664c92d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKDRO26%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Xs0QNsy9xN82ulykCAb5KX%2BsXXGnrHv3kYnZm5uTDwIgEljapXChyuACFvg9wkAqy9TcstFWkAo39Vj6smWKW2gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BeT3E5HwsGZVo57SrcA%2F%2FLE7%2B0%2BGlNhQRx9ioqsZ5p70U42tUmQwhGOUEvLy4HIxhbVUwKsytzVND63K0uj8M5p1M2BGdmbHJZaLtoAk%2BMGB74LJ%2FKqEzyp5%2By1RO7oby%2BLvPE73d0MsUXAp6rmG0z0g58fp7%2F0OPQHoG%2B35WzPDWLMxYW1of%2Bgt3bbu5QQUYKQifdFLCPNUJQdJJMqJZcvVOG3CntTHmtCpYwq6HPMl2sMgQ%2Bt%2Bp6MOe4QRlA8gM3E%2FvhMUndxeiRIokI%2Ffl%2FWNxx3CDER3OXFTbRYdRy9hnOSgbn6s93gHhR7zEDy1Ns0CirPjEm%2FtPIfUZK3eXHWLjmMlNkk6J2WqCB9atdrPBS9yrYZ34vlybfRtum0LMntVauTB1b8f99216PtloNf%2B0iXsNSX45hlqr0obZ03hG84XWWwY61cGiEYRxoiOruZgzA7poj6tZARfKHa1FQayqVQNJmjBzFosUB9AEXZwCwn8OPQh9qI53%2FdPcMqjAEmwMcLHPwjR99kGXxerJGUYLWHtrrHIti0eQbrQEDfdpxv2vDbaP9QaY7G%2F%2B1nqKmEWSEU9%2BlFmT6Q51cwt1rUnpzL%2B6DEQW2mY4I9i6TQtUVpIyyhqKMYutQsy9vd0S3wOB5IOC9KfHmMOCc5cQGOqUB%2FtLOKlUDzYXGFOdS%2FHeY0r3uEGzV2G3ksgnrE2n3ShXoZS1VGstBtS6UsBB8AMx5i%2FQzaNk5C0uh8EPF5JnuiTC7wRkIY0EjWVP%2BIZAo7z%2BJuBuVfCw3yVz9fK19N68o2s%2BVveaLbFMaNwrvrnBbB6k4rPxIFhNQdlInPwioMuXu9erDUS%2BXu5Ww3zQ8O7jaIzrKNZCOmY6NQ8pnxJbD17FDLHRD&X-Amz-Signature=aeeef8b9371d3bef1fdd9c93942f67d8dc676539b9cde9fc789a621c152f991c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKDRO26%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Xs0QNsy9xN82ulykCAb5KX%2BsXXGnrHv3kYnZm5uTDwIgEljapXChyuACFvg9wkAqy9TcstFWkAo39Vj6smWKW2gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BeT3E5HwsGZVo57SrcA%2F%2FLE7%2B0%2BGlNhQRx9ioqsZ5p70U42tUmQwhGOUEvLy4HIxhbVUwKsytzVND63K0uj8M5p1M2BGdmbHJZaLtoAk%2BMGB74LJ%2FKqEzyp5%2By1RO7oby%2BLvPE73d0MsUXAp6rmG0z0g58fp7%2F0OPQHoG%2B35WzPDWLMxYW1of%2Bgt3bbu5QQUYKQifdFLCPNUJQdJJMqJZcvVOG3CntTHmtCpYwq6HPMl2sMgQ%2Bt%2Bp6MOe4QRlA8gM3E%2FvhMUndxeiRIokI%2Ffl%2FWNxx3CDER3OXFTbRYdRy9hnOSgbn6s93gHhR7zEDy1Ns0CirPjEm%2FtPIfUZK3eXHWLjmMlNkk6J2WqCB9atdrPBS9yrYZ34vlybfRtum0LMntVauTB1b8f99216PtloNf%2B0iXsNSX45hlqr0obZ03hG84XWWwY61cGiEYRxoiOruZgzA7poj6tZARfKHa1FQayqVQNJmjBzFosUB9AEXZwCwn8OPQh9qI53%2FdPcMqjAEmwMcLHPwjR99kGXxerJGUYLWHtrrHIti0eQbrQEDfdpxv2vDbaP9QaY7G%2F%2B1nqKmEWSEU9%2BlFmT6Q51cwt1rUnpzL%2B6DEQW2mY4I9i6TQtUVpIyyhqKMYutQsy9vd0S3wOB5IOC9KfHmMOCc5cQGOqUB%2FtLOKlUDzYXGFOdS%2FHeY0r3uEGzV2G3ksgnrE2n3ShXoZS1VGstBtS6UsBB8AMx5i%2FQzaNk5C0uh8EPF5JnuiTC7wRkIY0EjWVP%2BIZAo7z%2BJuBuVfCw3yVz9fK19N68o2s%2BVveaLbFMaNwrvrnBbB6k4rPxIFhNQdlInPwioMuXu9erDUS%2BXu5Ww3zQ8O7jaIzrKNZCOmY6NQ8pnxJbD17FDLHRD&X-Amz-Signature=828a36ce96c2b413fd7ab5b36221e71e8486daf7714a53cc32245b00f748d9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKDRO26%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Xs0QNsy9xN82ulykCAb5KX%2BsXXGnrHv3kYnZm5uTDwIgEljapXChyuACFvg9wkAqy9TcstFWkAo39Vj6smWKW2gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BeT3E5HwsGZVo57SrcA%2F%2FLE7%2B0%2BGlNhQRx9ioqsZ5p70U42tUmQwhGOUEvLy4HIxhbVUwKsytzVND63K0uj8M5p1M2BGdmbHJZaLtoAk%2BMGB74LJ%2FKqEzyp5%2By1RO7oby%2BLvPE73d0MsUXAp6rmG0z0g58fp7%2F0OPQHoG%2B35WzPDWLMxYW1of%2Bgt3bbu5QQUYKQifdFLCPNUJQdJJMqJZcvVOG3CntTHmtCpYwq6HPMl2sMgQ%2Bt%2Bp6MOe4QRlA8gM3E%2FvhMUndxeiRIokI%2Ffl%2FWNxx3CDER3OXFTbRYdRy9hnOSgbn6s93gHhR7zEDy1Ns0CirPjEm%2FtPIfUZK3eXHWLjmMlNkk6J2WqCB9atdrPBS9yrYZ34vlybfRtum0LMntVauTB1b8f99216PtloNf%2B0iXsNSX45hlqr0obZ03hG84XWWwY61cGiEYRxoiOruZgzA7poj6tZARfKHa1FQayqVQNJmjBzFosUB9AEXZwCwn8OPQh9qI53%2FdPcMqjAEmwMcLHPwjR99kGXxerJGUYLWHtrrHIti0eQbrQEDfdpxv2vDbaP9QaY7G%2F%2B1nqKmEWSEU9%2BlFmT6Q51cwt1rUnpzL%2B6DEQW2mY4I9i6TQtUVpIyyhqKMYutQsy9vd0S3wOB5IOC9KfHmMOCc5cQGOqUB%2FtLOKlUDzYXGFOdS%2FHeY0r3uEGzV2G3ksgnrE2n3ShXoZS1VGstBtS6UsBB8AMx5i%2FQzaNk5C0uh8EPF5JnuiTC7wRkIY0EjWVP%2BIZAo7z%2BJuBuVfCw3yVz9fK19N68o2s%2BVveaLbFMaNwrvrnBbB6k4rPxIFhNQdlInPwioMuXu9erDUS%2BXu5Ww3zQ8O7jaIzrKNZCOmY6NQ8pnxJbD17FDLHRD&X-Amz-Signature=346ab020f09c668d5befca0f70e8be9599032383a90583464d0a1bc48125b893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKDRO26%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Xs0QNsy9xN82ulykCAb5KX%2BsXXGnrHv3kYnZm5uTDwIgEljapXChyuACFvg9wkAqy9TcstFWkAo39Vj6smWKW2gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BeT3E5HwsGZVo57SrcA%2F%2FLE7%2B0%2BGlNhQRx9ioqsZ5p70U42tUmQwhGOUEvLy4HIxhbVUwKsytzVND63K0uj8M5p1M2BGdmbHJZaLtoAk%2BMGB74LJ%2FKqEzyp5%2By1RO7oby%2BLvPE73d0MsUXAp6rmG0z0g58fp7%2F0OPQHoG%2B35WzPDWLMxYW1of%2Bgt3bbu5QQUYKQifdFLCPNUJQdJJMqJZcvVOG3CntTHmtCpYwq6HPMl2sMgQ%2Bt%2Bp6MOe4QRlA8gM3E%2FvhMUndxeiRIokI%2Ffl%2FWNxx3CDER3OXFTbRYdRy9hnOSgbn6s93gHhR7zEDy1Ns0CirPjEm%2FtPIfUZK3eXHWLjmMlNkk6J2WqCB9atdrPBS9yrYZ34vlybfRtum0LMntVauTB1b8f99216PtloNf%2B0iXsNSX45hlqr0obZ03hG84XWWwY61cGiEYRxoiOruZgzA7poj6tZARfKHa1FQayqVQNJmjBzFosUB9AEXZwCwn8OPQh9qI53%2FdPcMqjAEmwMcLHPwjR99kGXxerJGUYLWHtrrHIti0eQbrQEDfdpxv2vDbaP9QaY7G%2F%2B1nqKmEWSEU9%2BlFmT6Q51cwt1rUnpzL%2B6DEQW2mY4I9i6TQtUVpIyyhqKMYutQsy9vd0S3wOB5IOC9KfHmMOCc5cQGOqUB%2FtLOKlUDzYXGFOdS%2FHeY0r3uEGzV2G3ksgnrE2n3ShXoZS1VGstBtS6UsBB8AMx5i%2FQzaNk5C0uh8EPF5JnuiTC7wRkIY0EjWVP%2BIZAo7z%2BJuBuVfCw3yVz9fK19N68o2s%2BVveaLbFMaNwrvrnBbB6k4rPxIFhNQdlInPwioMuXu9erDUS%2BXu5Ww3zQ8O7jaIzrKNZCOmY6NQ8pnxJbD17FDLHRD&X-Amz-Signature=a0fcb5df8c5a35807d6482eca9bb37862aa909ad5084414ee0c8d2832f51d252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKDRO26%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Xs0QNsy9xN82ulykCAb5KX%2BsXXGnrHv3kYnZm5uTDwIgEljapXChyuACFvg9wkAqy9TcstFWkAo39Vj6smWKW2gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BeT3E5HwsGZVo57SrcA%2F%2FLE7%2B0%2BGlNhQRx9ioqsZ5p70U42tUmQwhGOUEvLy4HIxhbVUwKsytzVND63K0uj8M5p1M2BGdmbHJZaLtoAk%2BMGB74LJ%2FKqEzyp5%2By1RO7oby%2BLvPE73d0MsUXAp6rmG0z0g58fp7%2F0OPQHoG%2B35WzPDWLMxYW1of%2Bgt3bbu5QQUYKQifdFLCPNUJQdJJMqJZcvVOG3CntTHmtCpYwq6HPMl2sMgQ%2Bt%2Bp6MOe4QRlA8gM3E%2FvhMUndxeiRIokI%2Ffl%2FWNxx3CDER3OXFTbRYdRy9hnOSgbn6s93gHhR7zEDy1Ns0CirPjEm%2FtPIfUZK3eXHWLjmMlNkk6J2WqCB9atdrPBS9yrYZ34vlybfRtum0LMntVauTB1b8f99216PtloNf%2B0iXsNSX45hlqr0obZ03hG84XWWwY61cGiEYRxoiOruZgzA7poj6tZARfKHa1FQayqVQNJmjBzFosUB9AEXZwCwn8OPQh9qI53%2FdPcMqjAEmwMcLHPwjR99kGXxerJGUYLWHtrrHIti0eQbrQEDfdpxv2vDbaP9QaY7G%2F%2B1nqKmEWSEU9%2BlFmT6Q51cwt1rUnpzL%2B6DEQW2mY4I9i6TQtUVpIyyhqKMYutQsy9vd0S3wOB5IOC9KfHmMOCc5cQGOqUB%2FtLOKlUDzYXGFOdS%2FHeY0r3uEGzV2G3ksgnrE2n3ShXoZS1VGstBtS6UsBB8AMx5i%2FQzaNk5C0uh8EPF5JnuiTC7wRkIY0EjWVP%2BIZAo7z%2BJuBuVfCw3yVz9fK19N68o2s%2BVveaLbFMaNwrvrnBbB6k4rPxIFhNQdlInPwioMuXu9erDUS%2BXu5Ww3zQ8O7jaIzrKNZCOmY6NQ8pnxJbD17FDLHRD&X-Amz-Signature=519f6b4c6acfe223de9996ad28414233431410c693941bcb43a8d359daab30e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKDRO26%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Xs0QNsy9xN82ulykCAb5KX%2BsXXGnrHv3kYnZm5uTDwIgEljapXChyuACFvg9wkAqy9TcstFWkAo39Vj6smWKW2gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BeT3E5HwsGZVo57SrcA%2F%2FLE7%2B0%2BGlNhQRx9ioqsZ5p70U42tUmQwhGOUEvLy4HIxhbVUwKsytzVND63K0uj8M5p1M2BGdmbHJZaLtoAk%2BMGB74LJ%2FKqEzyp5%2By1RO7oby%2BLvPE73d0MsUXAp6rmG0z0g58fp7%2F0OPQHoG%2B35WzPDWLMxYW1of%2Bgt3bbu5QQUYKQifdFLCPNUJQdJJMqJZcvVOG3CntTHmtCpYwq6HPMl2sMgQ%2Bt%2Bp6MOe4QRlA8gM3E%2FvhMUndxeiRIokI%2Ffl%2FWNxx3CDER3OXFTbRYdRy9hnOSgbn6s93gHhR7zEDy1Ns0CirPjEm%2FtPIfUZK3eXHWLjmMlNkk6J2WqCB9atdrPBS9yrYZ34vlybfRtum0LMntVauTB1b8f99216PtloNf%2B0iXsNSX45hlqr0obZ03hG84XWWwY61cGiEYRxoiOruZgzA7poj6tZARfKHa1FQayqVQNJmjBzFosUB9AEXZwCwn8OPQh9qI53%2FdPcMqjAEmwMcLHPwjR99kGXxerJGUYLWHtrrHIti0eQbrQEDfdpxv2vDbaP9QaY7G%2F%2B1nqKmEWSEU9%2BlFmT6Q51cwt1rUnpzL%2B6DEQW2mY4I9i6TQtUVpIyyhqKMYutQsy9vd0S3wOB5IOC9KfHmMOCc5cQGOqUB%2FtLOKlUDzYXGFOdS%2FHeY0r3uEGzV2G3ksgnrE2n3ShXoZS1VGstBtS6UsBB8AMx5i%2FQzaNk5C0uh8EPF5JnuiTC7wRkIY0EjWVP%2BIZAo7z%2BJuBuVfCw3yVz9fK19N68o2s%2BVveaLbFMaNwrvrnBbB6k4rPxIFhNQdlInPwioMuXu9erDUS%2BXu5Ww3zQ8O7jaIzrKNZCOmY6NQ8pnxJbD17FDLHRD&X-Amz-Signature=c14d8fd61e91476bca6d7ffafc1d8ef2a1eef44f1a80bba60a099f9e9234c804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKDRO26%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Xs0QNsy9xN82ulykCAb5KX%2BsXXGnrHv3kYnZm5uTDwIgEljapXChyuACFvg9wkAqy9TcstFWkAo39Vj6smWKW2gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BeT3E5HwsGZVo57SrcA%2F%2FLE7%2B0%2BGlNhQRx9ioqsZ5p70U42tUmQwhGOUEvLy4HIxhbVUwKsytzVND63K0uj8M5p1M2BGdmbHJZaLtoAk%2BMGB74LJ%2FKqEzyp5%2By1RO7oby%2BLvPE73d0MsUXAp6rmG0z0g58fp7%2F0OPQHoG%2B35WzPDWLMxYW1of%2Bgt3bbu5QQUYKQifdFLCPNUJQdJJMqJZcvVOG3CntTHmtCpYwq6HPMl2sMgQ%2Bt%2Bp6MOe4QRlA8gM3E%2FvhMUndxeiRIokI%2Ffl%2FWNxx3CDER3OXFTbRYdRy9hnOSgbn6s93gHhR7zEDy1Ns0CirPjEm%2FtPIfUZK3eXHWLjmMlNkk6J2WqCB9atdrPBS9yrYZ34vlybfRtum0LMntVauTB1b8f99216PtloNf%2B0iXsNSX45hlqr0obZ03hG84XWWwY61cGiEYRxoiOruZgzA7poj6tZARfKHa1FQayqVQNJmjBzFosUB9AEXZwCwn8OPQh9qI53%2FdPcMqjAEmwMcLHPwjR99kGXxerJGUYLWHtrrHIti0eQbrQEDfdpxv2vDbaP9QaY7G%2F%2B1nqKmEWSEU9%2BlFmT6Q51cwt1rUnpzL%2B6DEQW2mY4I9i6TQtUVpIyyhqKMYutQsy9vd0S3wOB5IOC9KfHmMOCc5cQGOqUB%2FtLOKlUDzYXGFOdS%2FHeY0r3uEGzV2G3ksgnrE2n3ShXoZS1VGstBtS6UsBB8AMx5i%2FQzaNk5C0uh8EPF5JnuiTC7wRkIY0EjWVP%2BIZAo7z%2BJuBuVfCw3yVz9fK19N68o2s%2BVveaLbFMaNwrvrnBbB6k4rPxIFhNQdlInPwioMuXu9erDUS%2BXu5Ww3zQ8O7jaIzrKNZCOmY6NQ8pnxJbD17FDLHRD&X-Amz-Signature=9d29b9ff337032b00c751a5c833786419d4a2cd80bea77c1890745bd4a5ebaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKDRO26%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Xs0QNsy9xN82ulykCAb5KX%2BsXXGnrHv3kYnZm5uTDwIgEljapXChyuACFvg9wkAqy9TcstFWkAo39Vj6smWKW2gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BeT3E5HwsGZVo57SrcA%2F%2FLE7%2B0%2BGlNhQRx9ioqsZ5p70U42tUmQwhGOUEvLy4HIxhbVUwKsytzVND63K0uj8M5p1M2BGdmbHJZaLtoAk%2BMGB74LJ%2FKqEzyp5%2By1RO7oby%2BLvPE73d0MsUXAp6rmG0z0g58fp7%2F0OPQHoG%2B35WzPDWLMxYW1of%2Bgt3bbu5QQUYKQifdFLCPNUJQdJJMqJZcvVOG3CntTHmtCpYwq6HPMl2sMgQ%2Bt%2Bp6MOe4QRlA8gM3E%2FvhMUndxeiRIokI%2Ffl%2FWNxx3CDER3OXFTbRYdRy9hnOSgbn6s93gHhR7zEDy1Ns0CirPjEm%2FtPIfUZK3eXHWLjmMlNkk6J2WqCB9atdrPBS9yrYZ34vlybfRtum0LMntVauTB1b8f99216PtloNf%2B0iXsNSX45hlqr0obZ03hG84XWWwY61cGiEYRxoiOruZgzA7poj6tZARfKHa1FQayqVQNJmjBzFosUB9AEXZwCwn8OPQh9qI53%2FdPcMqjAEmwMcLHPwjR99kGXxerJGUYLWHtrrHIti0eQbrQEDfdpxv2vDbaP9QaY7G%2F%2B1nqKmEWSEU9%2BlFmT6Q51cwt1rUnpzL%2B6DEQW2mY4I9i6TQtUVpIyyhqKMYutQsy9vd0S3wOB5IOC9KfHmMOCc5cQGOqUB%2FtLOKlUDzYXGFOdS%2FHeY0r3uEGzV2G3ksgnrE2n3ShXoZS1VGstBtS6UsBB8AMx5i%2FQzaNk5C0uh8EPF5JnuiTC7wRkIY0EjWVP%2BIZAo7z%2BJuBuVfCw3yVz9fK19N68o2s%2BVveaLbFMaNwrvrnBbB6k4rPxIFhNQdlInPwioMuXu9erDUS%2BXu5Ww3zQ8O7jaIzrKNZCOmY6NQ8pnxJbD17FDLHRD&X-Amz-Signature=a5a301dd2b055a864195a5c5ad70cbb9d2930414c911e7268322fef69e1dec7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKDRO26%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Xs0QNsy9xN82ulykCAb5KX%2BsXXGnrHv3kYnZm5uTDwIgEljapXChyuACFvg9wkAqy9TcstFWkAo39Vj6smWKW2gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BeT3E5HwsGZVo57SrcA%2F%2FLE7%2B0%2BGlNhQRx9ioqsZ5p70U42tUmQwhGOUEvLy4HIxhbVUwKsytzVND63K0uj8M5p1M2BGdmbHJZaLtoAk%2BMGB74LJ%2FKqEzyp5%2By1RO7oby%2BLvPE73d0MsUXAp6rmG0z0g58fp7%2F0OPQHoG%2B35WzPDWLMxYW1of%2Bgt3bbu5QQUYKQifdFLCPNUJQdJJMqJZcvVOG3CntTHmtCpYwq6HPMl2sMgQ%2Bt%2Bp6MOe4QRlA8gM3E%2FvhMUndxeiRIokI%2Ffl%2FWNxx3CDER3OXFTbRYdRy9hnOSgbn6s93gHhR7zEDy1Ns0CirPjEm%2FtPIfUZK3eXHWLjmMlNkk6J2WqCB9atdrPBS9yrYZ34vlybfRtum0LMntVauTB1b8f99216PtloNf%2B0iXsNSX45hlqr0obZ03hG84XWWwY61cGiEYRxoiOruZgzA7poj6tZARfKHa1FQayqVQNJmjBzFosUB9AEXZwCwn8OPQh9qI53%2FdPcMqjAEmwMcLHPwjR99kGXxerJGUYLWHtrrHIti0eQbrQEDfdpxv2vDbaP9QaY7G%2F%2B1nqKmEWSEU9%2BlFmT6Q51cwt1rUnpzL%2B6DEQW2mY4I9i6TQtUVpIyyhqKMYutQsy9vd0S3wOB5IOC9KfHmMOCc5cQGOqUB%2FtLOKlUDzYXGFOdS%2FHeY0r3uEGzV2G3ksgnrE2n3ShXoZS1VGstBtS6UsBB8AMx5i%2FQzaNk5C0uh8EPF5JnuiTC7wRkIY0EjWVP%2BIZAo7z%2BJuBuVfCw3yVz9fK19N68o2s%2BVveaLbFMaNwrvrnBbB6k4rPxIFhNQdlInPwioMuXu9erDUS%2BXu5Ww3zQ8O7jaIzrKNZCOmY6NQ8pnxJbD17FDLHRD&X-Amz-Signature=9931c79dcbb9ce144248a556500702ac2c879501b930c7364bed4b288658ce69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKDRO26%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Xs0QNsy9xN82ulykCAb5KX%2BsXXGnrHv3kYnZm5uTDwIgEljapXChyuACFvg9wkAqy9TcstFWkAo39Vj6smWKW2gqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BeT3E5HwsGZVo57SrcA%2F%2FLE7%2B0%2BGlNhQRx9ioqsZ5p70U42tUmQwhGOUEvLy4HIxhbVUwKsytzVND63K0uj8M5p1M2BGdmbHJZaLtoAk%2BMGB74LJ%2FKqEzyp5%2By1RO7oby%2BLvPE73d0MsUXAp6rmG0z0g58fp7%2F0OPQHoG%2B35WzPDWLMxYW1of%2Bgt3bbu5QQUYKQifdFLCPNUJQdJJMqJZcvVOG3CntTHmtCpYwq6HPMl2sMgQ%2Bt%2Bp6MOe4QRlA8gM3E%2FvhMUndxeiRIokI%2Ffl%2FWNxx3CDER3OXFTbRYdRy9hnOSgbn6s93gHhR7zEDy1Ns0CirPjEm%2FtPIfUZK3eXHWLjmMlNkk6J2WqCB9atdrPBS9yrYZ34vlybfRtum0LMntVauTB1b8f99216PtloNf%2B0iXsNSX45hlqr0obZ03hG84XWWwY61cGiEYRxoiOruZgzA7poj6tZARfKHa1FQayqVQNJmjBzFosUB9AEXZwCwn8OPQh9qI53%2FdPcMqjAEmwMcLHPwjR99kGXxerJGUYLWHtrrHIti0eQbrQEDfdpxv2vDbaP9QaY7G%2F%2B1nqKmEWSEU9%2BlFmT6Q51cwt1rUnpzL%2B6DEQW2mY4I9i6TQtUVpIyyhqKMYutQsy9vd0S3wOB5IOC9KfHmMOCc5cQGOqUB%2FtLOKlUDzYXGFOdS%2FHeY0r3uEGzV2G3ksgnrE2n3ShXoZS1VGstBtS6UsBB8AMx5i%2FQzaNk5C0uh8EPF5JnuiTC7wRkIY0EjWVP%2BIZAo7z%2BJuBuVfCw3yVz9fK19N68o2s%2BVveaLbFMaNwrvrnBbB6k4rPxIFhNQdlInPwioMuXu9erDUS%2BXu5Ww3zQ8O7jaIzrKNZCOmY6NQ8pnxJbD17FDLHRD&X-Amz-Signature=a0fcb5df8c5a35807d6482eca9bb37862aa909ad5084414ee0c8d2832f51d252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
