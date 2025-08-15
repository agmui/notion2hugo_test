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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WBO3NWK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDMbgg32Ck1dUZlDJJmrzueYtDWAEwS%2FMnWFbSY7vCNMAIhAMLwLdUvSSQdcDsdjO3Y63OlAc1TbjafAbFNLEp22PzfKv8DCFIQABoMNjM3NDIzMTgzODA1IgwApa2IXGINxtSQIWQq3AMmBBcF9DdC2XhVZD%2BeNuwXmWHBaMJote8biC%2FVVhtGUJQM9di8KrPBNh2Wa0etAbBf923PIMyQ7ScKFq0B3fY7li4tKaoF3GqFxFg7Y2%2FiiIlk2CWNu6GI5jl6TNjBQdzrA0neXeXvo2bxDwRfT0PQ8damSp63iya6fxsDXOTb7DVWRZUvLBJoaMSoBTXP7%2BbFIhDQK4inbqauHtd7wijm22a6rTf9LExRLOvRBdZfmthwGUJRC7nE3KSFz%2BLu74UT0%2FHXXM3AnaDgGcy8eW05tQj1btDiaZo56n5W2NVBU4sbFljri4b5Q%2BROraA7Cc5nwOfIabL6Rrtn%2BFlb1eKUtBCndiFia77JqI5jBS%2FX4VoP%2BJR5Vt6jyhF5k5CGLAH1g2mkMr9RtpsAwTGshsFE6TiZ54KwMv0jb6l1fj6rSoTWnNoXYVnSMKTzujqyQTkI6E7%2FKZf1wWvsW9sYjHpuO1tmqAT13gE8Y%2FlntqslOApIxKyBg33%2Bg6HjvewX2i7RF%2BFvwtwFyRTuAtZzHzxCiAVHLLjch8goWn0ItbWhCl6sPlQqj0hPUS6Q0mqBzhTtVfX9CPq2W7HJY%2FHY8JeaHO0xhJkuLqhNa%2BdfmMPDXDXWUJTUh3kPb0yqJzC9%2FfnEBjqkAfmnkKq2zRFyq4Z2vD4CqPdWzMbPOEOLMRgXTKgtuHYCEFaWNbIVecPsqEyaSnITXva8lWFFvS365tfssfcx34WshZd6e8dGtZHw82oWOcgh8YyKPsMAl9Sm8VTqOpn6r7nuTfpNXTrCeSW0yWKNbl3jX%2BJGhGwXAckgd8kJd2%2FmJ%2BvlBJ4A2nYPA2j1Cni%2B%2FchLT2Zjz7vRNgA6MBD7uoBKE1Ym&X-Amz-Signature=1d2b97c7e1f112b2f285b9ff974c4f8b91cca6c9bf1123da7c4791c2977e464e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI5Z4HB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHoAq1Xc%2FHeMQjnYPqV5Qaq5uEjQa147SMzw9gZWS0qXAiA4R0a8uUkOXYRN8a72lUVpiPfVhK5xcS%2BpJ0TlBl4dsyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDj9iwdrec0A9kGU9KtwDKtRPQZgBu52n%2FnPuR9dwvThlIb4IdAK8OjNRV7lnmUaKlJBlc%2FB6xpL3tEsQjtMx2B%2FbsAd0ZbtImxzYIRGWFxisNt2gA9YMNX9P0zu54XlLJZ6jxvq1UyMOEyO3wPg4VRg9Ft4%2BE7xTNtc4BPMNnLPvq68Q8jyj2Y9ulxr9gsIvfKMbyOoBgk3NwhdLXb4jtnH5usMW8rfY7IxvZt%2F4FSg1K7dPHwyno%2BC4Fy3f4OdycPibu5LKO%2FXFH%2BAKN%2FBs3RYr%2FX88Xx9oS3pMze6g4CQv459jm7UxdtiEJK1aEee9PyEHY059jbB%2FPImGmBmirdT773nuP9dwmhUxa9sG11Vq7ZpQHhX%2F%2B5RDitsUIe3JA7lz2iTCyUXljFahLF5nSBaROOyEncCjiKIkayTWxLWJd12QMTQu%2FT6wHNoley2eyjiiKGGxtqILDG6u7P36XGvtSkxy55lYCGj2cCoKSvI3V2I4tRvACJ2VRhw6F6BTNwfUVFZVc1WeYwx7stspo2gtfUPJXmHd3y3JIw24tKDs8k%2FjoWvIoze8TG3VtR2MLNCRgPrmR0vT5dGMZHFpx1akRSFDnRX%2BxHmyvaTLmQQacJS2AMzCPKrpmb%2BwCFNNmM0sDsOWe%2BQFOLkws%2Fz5xAY6pgEZfkTitudl2iPgwDwnvLt0L6AnJz0%2BJFB1EhMg2KpD7j7NXU1foue1x3SuXPM%2Bx9QjeZe3%2BaIgpWWnVHQJ4Lorr5pF6fUA4fMiWDh%2F2DdTXGjIFuNchHrWaU9wxtJ9hNWSQ4ZVKAnm3SHMNwHsN3OMIM1cGEHyQoTo8y%2FdopFLIqIppVzRsf2xrwpA2LjbSA1TWKbhyarzkKx7755rU3XUo9R6RqtX&X-Amz-Signature=1f74574efbdbfba4bbf2724e6f2cdf52750719c29115ff203b24731fd303265a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI5Z4HB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHoAq1Xc%2FHeMQjnYPqV5Qaq5uEjQa147SMzw9gZWS0qXAiA4R0a8uUkOXYRN8a72lUVpiPfVhK5xcS%2BpJ0TlBl4dsyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDj9iwdrec0A9kGU9KtwDKtRPQZgBu52n%2FnPuR9dwvThlIb4IdAK8OjNRV7lnmUaKlJBlc%2FB6xpL3tEsQjtMx2B%2FbsAd0ZbtImxzYIRGWFxisNt2gA9YMNX9P0zu54XlLJZ6jxvq1UyMOEyO3wPg4VRg9Ft4%2BE7xTNtc4BPMNnLPvq68Q8jyj2Y9ulxr9gsIvfKMbyOoBgk3NwhdLXb4jtnH5usMW8rfY7IxvZt%2F4FSg1K7dPHwyno%2BC4Fy3f4OdycPibu5LKO%2FXFH%2BAKN%2FBs3RYr%2FX88Xx9oS3pMze6g4CQv459jm7UxdtiEJK1aEee9PyEHY059jbB%2FPImGmBmirdT773nuP9dwmhUxa9sG11Vq7ZpQHhX%2F%2B5RDitsUIe3JA7lz2iTCyUXljFahLF5nSBaROOyEncCjiKIkayTWxLWJd12QMTQu%2FT6wHNoley2eyjiiKGGxtqILDG6u7P36XGvtSkxy55lYCGj2cCoKSvI3V2I4tRvACJ2VRhw6F6BTNwfUVFZVc1WeYwx7stspo2gtfUPJXmHd3y3JIw24tKDs8k%2FjoWvIoze8TG3VtR2MLNCRgPrmR0vT5dGMZHFpx1akRSFDnRX%2BxHmyvaTLmQQacJS2AMzCPKrpmb%2BwCFNNmM0sDsOWe%2BQFOLkws%2Fz5xAY6pgEZfkTitudl2iPgwDwnvLt0L6AnJz0%2BJFB1EhMg2KpD7j7NXU1foue1x3SuXPM%2Bx9QjeZe3%2BaIgpWWnVHQJ4Lorr5pF6fUA4fMiWDh%2F2DdTXGjIFuNchHrWaU9wxtJ9hNWSQ4ZVKAnm3SHMNwHsN3OMIM1cGEHyQoTo8y%2FdopFLIqIppVzRsf2xrwpA2LjbSA1TWKbhyarzkKx7755rU3XUo9R6RqtX&X-Amz-Signature=d9e2fb15a2d5825349c372ddd78dde6e988d50a3edf8e4f7658145c2081a8d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI5Z4HB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHoAq1Xc%2FHeMQjnYPqV5Qaq5uEjQa147SMzw9gZWS0qXAiA4R0a8uUkOXYRN8a72lUVpiPfVhK5xcS%2BpJ0TlBl4dsyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDj9iwdrec0A9kGU9KtwDKtRPQZgBu52n%2FnPuR9dwvThlIb4IdAK8OjNRV7lnmUaKlJBlc%2FB6xpL3tEsQjtMx2B%2FbsAd0ZbtImxzYIRGWFxisNt2gA9YMNX9P0zu54XlLJZ6jxvq1UyMOEyO3wPg4VRg9Ft4%2BE7xTNtc4BPMNnLPvq68Q8jyj2Y9ulxr9gsIvfKMbyOoBgk3NwhdLXb4jtnH5usMW8rfY7IxvZt%2F4FSg1K7dPHwyno%2BC4Fy3f4OdycPibu5LKO%2FXFH%2BAKN%2FBs3RYr%2FX88Xx9oS3pMze6g4CQv459jm7UxdtiEJK1aEee9PyEHY059jbB%2FPImGmBmirdT773nuP9dwmhUxa9sG11Vq7ZpQHhX%2F%2B5RDitsUIe3JA7lz2iTCyUXljFahLF5nSBaROOyEncCjiKIkayTWxLWJd12QMTQu%2FT6wHNoley2eyjiiKGGxtqILDG6u7P36XGvtSkxy55lYCGj2cCoKSvI3V2I4tRvACJ2VRhw6F6BTNwfUVFZVc1WeYwx7stspo2gtfUPJXmHd3y3JIw24tKDs8k%2FjoWvIoze8TG3VtR2MLNCRgPrmR0vT5dGMZHFpx1akRSFDnRX%2BxHmyvaTLmQQacJS2AMzCPKrpmb%2BwCFNNmM0sDsOWe%2BQFOLkws%2Fz5xAY6pgEZfkTitudl2iPgwDwnvLt0L6AnJz0%2BJFB1EhMg2KpD7j7NXU1foue1x3SuXPM%2Bx9QjeZe3%2BaIgpWWnVHQJ4Lorr5pF6fUA4fMiWDh%2F2DdTXGjIFuNchHrWaU9wxtJ9hNWSQ4ZVKAnm3SHMNwHsN3OMIM1cGEHyQoTo8y%2FdopFLIqIppVzRsf2xrwpA2LjbSA1TWKbhyarzkKx7755rU3XUo9R6RqtX&X-Amz-Signature=a3a4dd7015f7ec633622cd3a0a6f729c08165c1eda8bd390dd77df28f18676f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI5Z4HB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHoAq1Xc%2FHeMQjnYPqV5Qaq5uEjQa147SMzw9gZWS0qXAiA4R0a8uUkOXYRN8a72lUVpiPfVhK5xcS%2BpJ0TlBl4dsyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDj9iwdrec0A9kGU9KtwDKtRPQZgBu52n%2FnPuR9dwvThlIb4IdAK8OjNRV7lnmUaKlJBlc%2FB6xpL3tEsQjtMx2B%2FbsAd0ZbtImxzYIRGWFxisNt2gA9YMNX9P0zu54XlLJZ6jxvq1UyMOEyO3wPg4VRg9Ft4%2BE7xTNtc4BPMNnLPvq68Q8jyj2Y9ulxr9gsIvfKMbyOoBgk3NwhdLXb4jtnH5usMW8rfY7IxvZt%2F4FSg1K7dPHwyno%2BC4Fy3f4OdycPibu5LKO%2FXFH%2BAKN%2FBs3RYr%2FX88Xx9oS3pMze6g4CQv459jm7UxdtiEJK1aEee9PyEHY059jbB%2FPImGmBmirdT773nuP9dwmhUxa9sG11Vq7ZpQHhX%2F%2B5RDitsUIe3JA7lz2iTCyUXljFahLF5nSBaROOyEncCjiKIkayTWxLWJd12QMTQu%2FT6wHNoley2eyjiiKGGxtqILDG6u7P36XGvtSkxy55lYCGj2cCoKSvI3V2I4tRvACJ2VRhw6F6BTNwfUVFZVc1WeYwx7stspo2gtfUPJXmHd3y3JIw24tKDs8k%2FjoWvIoze8TG3VtR2MLNCRgPrmR0vT5dGMZHFpx1akRSFDnRX%2BxHmyvaTLmQQacJS2AMzCPKrpmb%2BwCFNNmM0sDsOWe%2BQFOLkws%2Fz5xAY6pgEZfkTitudl2iPgwDwnvLt0L6AnJz0%2BJFB1EhMg2KpD7j7NXU1foue1x3SuXPM%2Bx9QjeZe3%2BaIgpWWnVHQJ4Lorr5pF6fUA4fMiWDh%2F2DdTXGjIFuNchHrWaU9wxtJ9hNWSQ4ZVKAnm3SHMNwHsN3OMIM1cGEHyQoTo8y%2FdopFLIqIppVzRsf2xrwpA2LjbSA1TWKbhyarzkKx7755rU3XUo9R6RqtX&X-Amz-Signature=e96bd9125c1b09acbd1752738c44ef5f5754daa2ab7acf9d2331504990d96e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI5Z4HB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHoAq1Xc%2FHeMQjnYPqV5Qaq5uEjQa147SMzw9gZWS0qXAiA4R0a8uUkOXYRN8a72lUVpiPfVhK5xcS%2BpJ0TlBl4dsyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDj9iwdrec0A9kGU9KtwDKtRPQZgBu52n%2FnPuR9dwvThlIb4IdAK8OjNRV7lnmUaKlJBlc%2FB6xpL3tEsQjtMx2B%2FbsAd0ZbtImxzYIRGWFxisNt2gA9YMNX9P0zu54XlLJZ6jxvq1UyMOEyO3wPg4VRg9Ft4%2BE7xTNtc4BPMNnLPvq68Q8jyj2Y9ulxr9gsIvfKMbyOoBgk3NwhdLXb4jtnH5usMW8rfY7IxvZt%2F4FSg1K7dPHwyno%2BC4Fy3f4OdycPibu5LKO%2FXFH%2BAKN%2FBs3RYr%2FX88Xx9oS3pMze6g4CQv459jm7UxdtiEJK1aEee9PyEHY059jbB%2FPImGmBmirdT773nuP9dwmhUxa9sG11Vq7ZpQHhX%2F%2B5RDitsUIe3JA7lz2iTCyUXljFahLF5nSBaROOyEncCjiKIkayTWxLWJd12QMTQu%2FT6wHNoley2eyjiiKGGxtqILDG6u7P36XGvtSkxy55lYCGj2cCoKSvI3V2I4tRvACJ2VRhw6F6BTNwfUVFZVc1WeYwx7stspo2gtfUPJXmHd3y3JIw24tKDs8k%2FjoWvIoze8TG3VtR2MLNCRgPrmR0vT5dGMZHFpx1akRSFDnRX%2BxHmyvaTLmQQacJS2AMzCPKrpmb%2BwCFNNmM0sDsOWe%2BQFOLkws%2Fz5xAY6pgEZfkTitudl2iPgwDwnvLt0L6AnJz0%2BJFB1EhMg2KpD7j7NXU1foue1x3SuXPM%2Bx9QjeZe3%2BaIgpWWnVHQJ4Lorr5pF6fUA4fMiWDh%2F2DdTXGjIFuNchHrWaU9wxtJ9hNWSQ4ZVKAnm3SHMNwHsN3OMIM1cGEHyQoTo8y%2FdopFLIqIppVzRsf2xrwpA2LjbSA1TWKbhyarzkKx7755rU3XUo9R6RqtX&X-Amz-Signature=64e0c8da49da00c75f84dfab4595bed8a494e83d8231909b08e8097d8fda9b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI5Z4HB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHoAq1Xc%2FHeMQjnYPqV5Qaq5uEjQa147SMzw9gZWS0qXAiA4R0a8uUkOXYRN8a72lUVpiPfVhK5xcS%2BpJ0TlBl4dsyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDj9iwdrec0A9kGU9KtwDKtRPQZgBu52n%2FnPuR9dwvThlIb4IdAK8OjNRV7lnmUaKlJBlc%2FB6xpL3tEsQjtMx2B%2FbsAd0ZbtImxzYIRGWFxisNt2gA9YMNX9P0zu54XlLJZ6jxvq1UyMOEyO3wPg4VRg9Ft4%2BE7xTNtc4BPMNnLPvq68Q8jyj2Y9ulxr9gsIvfKMbyOoBgk3NwhdLXb4jtnH5usMW8rfY7IxvZt%2F4FSg1K7dPHwyno%2BC4Fy3f4OdycPibu5LKO%2FXFH%2BAKN%2FBs3RYr%2FX88Xx9oS3pMze6g4CQv459jm7UxdtiEJK1aEee9PyEHY059jbB%2FPImGmBmirdT773nuP9dwmhUxa9sG11Vq7ZpQHhX%2F%2B5RDitsUIe3JA7lz2iTCyUXljFahLF5nSBaROOyEncCjiKIkayTWxLWJd12QMTQu%2FT6wHNoley2eyjiiKGGxtqILDG6u7P36XGvtSkxy55lYCGj2cCoKSvI3V2I4tRvACJ2VRhw6F6BTNwfUVFZVc1WeYwx7stspo2gtfUPJXmHd3y3JIw24tKDs8k%2FjoWvIoze8TG3VtR2MLNCRgPrmR0vT5dGMZHFpx1akRSFDnRX%2BxHmyvaTLmQQacJS2AMzCPKrpmb%2BwCFNNmM0sDsOWe%2BQFOLkws%2Fz5xAY6pgEZfkTitudl2iPgwDwnvLt0L6AnJz0%2BJFB1EhMg2KpD7j7NXU1foue1x3SuXPM%2Bx9QjeZe3%2BaIgpWWnVHQJ4Lorr5pF6fUA4fMiWDh%2F2DdTXGjIFuNchHrWaU9wxtJ9hNWSQ4ZVKAnm3SHMNwHsN3OMIM1cGEHyQoTo8y%2FdopFLIqIppVzRsf2xrwpA2LjbSA1TWKbhyarzkKx7755rU3XUo9R6RqtX&X-Amz-Signature=bd11192cd7b98b70b1f6a0d629938092ac1d4cf019aeb9e00341365acd955c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI5Z4HB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHoAq1Xc%2FHeMQjnYPqV5Qaq5uEjQa147SMzw9gZWS0qXAiA4R0a8uUkOXYRN8a72lUVpiPfVhK5xcS%2BpJ0TlBl4dsyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDj9iwdrec0A9kGU9KtwDKtRPQZgBu52n%2FnPuR9dwvThlIb4IdAK8OjNRV7lnmUaKlJBlc%2FB6xpL3tEsQjtMx2B%2FbsAd0ZbtImxzYIRGWFxisNt2gA9YMNX9P0zu54XlLJZ6jxvq1UyMOEyO3wPg4VRg9Ft4%2BE7xTNtc4BPMNnLPvq68Q8jyj2Y9ulxr9gsIvfKMbyOoBgk3NwhdLXb4jtnH5usMW8rfY7IxvZt%2F4FSg1K7dPHwyno%2BC4Fy3f4OdycPibu5LKO%2FXFH%2BAKN%2FBs3RYr%2FX88Xx9oS3pMze6g4CQv459jm7UxdtiEJK1aEee9PyEHY059jbB%2FPImGmBmirdT773nuP9dwmhUxa9sG11Vq7ZpQHhX%2F%2B5RDitsUIe3JA7lz2iTCyUXljFahLF5nSBaROOyEncCjiKIkayTWxLWJd12QMTQu%2FT6wHNoley2eyjiiKGGxtqILDG6u7P36XGvtSkxy55lYCGj2cCoKSvI3V2I4tRvACJ2VRhw6F6BTNwfUVFZVc1WeYwx7stspo2gtfUPJXmHd3y3JIw24tKDs8k%2FjoWvIoze8TG3VtR2MLNCRgPrmR0vT5dGMZHFpx1akRSFDnRX%2BxHmyvaTLmQQacJS2AMzCPKrpmb%2BwCFNNmM0sDsOWe%2BQFOLkws%2Fz5xAY6pgEZfkTitudl2iPgwDwnvLt0L6AnJz0%2BJFB1EhMg2KpD7j7NXU1foue1x3SuXPM%2Bx9QjeZe3%2BaIgpWWnVHQJ4Lorr5pF6fUA4fMiWDh%2F2DdTXGjIFuNchHrWaU9wxtJ9hNWSQ4ZVKAnm3SHMNwHsN3OMIM1cGEHyQoTo8y%2FdopFLIqIppVzRsf2xrwpA2LjbSA1TWKbhyarzkKx7755rU3XUo9R6RqtX&X-Amz-Signature=cbf2f9b892e72dfb2fb9485156263b7c1231763a836dc006e321dda337849413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI5Z4HB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHoAq1Xc%2FHeMQjnYPqV5Qaq5uEjQa147SMzw9gZWS0qXAiA4R0a8uUkOXYRN8a72lUVpiPfVhK5xcS%2BpJ0TlBl4dsyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDj9iwdrec0A9kGU9KtwDKtRPQZgBu52n%2FnPuR9dwvThlIb4IdAK8OjNRV7lnmUaKlJBlc%2FB6xpL3tEsQjtMx2B%2FbsAd0ZbtImxzYIRGWFxisNt2gA9YMNX9P0zu54XlLJZ6jxvq1UyMOEyO3wPg4VRg9Ft4%2BE7xTNtc4BPMNnLPvq68Q8jyj2Y9ulxr9gsIvfKMbyOoBgk3NwhdLXb4jtnH5usMW8rfY7IxvZt%2F4FSg1K7dPHwyno%2BC4Fy3f4OdycPibu5LKO%2FXFH%2BAKN%2FBs3RYr%2FX88Xx9oS3pMze6g4CQv459jm7UxdtiEJK1aEee9PyEHY059jbB%2FPImGmBmirdT773nuP9dwmhUxa9sG11Vq7ZpQHhX%2F%2B5RDitsUIe3JA7lz2iTCyUXljFahLF5nSBaROOyEncCjiKIkayTWxLWJd12QMTQu%2FT6wHNoley2eyjiiKGGxtqILDG6u7P36XGvtSkxy55lYCGj2cCoKSvI3V2I4tRvACJ2VRhw6F6BTNwfUVFZVc1WeYwx7stspo2gtfUPJXmHd3y3JIw24tKDs8k%2FjoWvIoze8TG3VtR2MLNCRgPrmR0vT5dGMZHFpx1akRSFDnRX%2BxHmyvaTLmQQacJS2AMzCPKrpmb%2BwCFNNmM0sDsOWe%2BQFOLkws%2Fz5xAY6pgEZfkTitudl2iPgwDwnvLt0L6AnJz0%2BJFB1EhMg2KpD7j7NXU1foue1x3SuXPM%2Bx9QjeZe3%2BaIgpWWnVHQJ4Lorr5pF6fUA4fMiWDh%2F2DdTXGjIFuNchHrWaU9wxtJ9hNWSQ4ZVKAnm3SHMNwHsN3OMIM1cGEHyQoTo8y%2FdopFLIqIppVzRsf2xrwpA2LjbSA1TWKbhyarzkKx7755rU3XUo9R6RqtX&X-Amz-Signature=4e4d1593ab2c6823e2fbd63f2c87a1be1fd7d4466d5f8085cc2871b2c07248bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI5Z4HB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHoAq1Xc%2FHeMQjnYPqV5Qaq5uEjQa147SMzw9gZWS0qXAiA4R0a8uUkOXYRN8a72lUVpiPfVhK5xcS%2BpJ0TlBl4dsyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDj9iwdrec0A9kGU9KtwDKtRPQZgBu52n%2FnPuR9dwvThlIb4IdAK8OjNRV7lnmUaKlJBlc%2FB6xpL3tEsQjtMx2B%2FbsAd0ZbtImxzYIRGWFxisNt2gA9YMNX9P0zu54XlLJZ6jxvq1UyMOEyO3wPg4VRg9Ft4%2BE7xTNtc4BPMNnLPvq68Q8jyj2Y9ulxr9gsIvfKMbyOoBgk3NwhdLXb4jtnH5usMW8rfY7IxvZt%2F4FSg1K7dPHwyno%2BC4Fy3f4OdycPibu5LKO%2FXFH%2BAKN%2FBs3RYr%2FX88Xx9oS3pMze6g4CQv459jm7UxdtiEJK1aEee9PyEHY059jbB%2FPImGmBmirdT773nuP9dwmhUxa9sG11Vq7ZpQHhX%2F%2B5RDitsUIe3JA7lz2iTCyUXljFahLF5nSBaROOyEncCjiKIkayTWxLWJd12QMTQu%2FT6wHNoley2eyjiiKGGxtqILDG6u7P36XGvtSkxy55lYCGj2cCoKSvI3V2I4tRvACJ2VRhw6F6BTNwfUVFZVc1WeYwx7stspo2gtfUPJXmHd3y3JIw24tKDs8k%2FjoWvIoze8TG3VtR2MLNCRgPrmR0vT5dGMZHFpx1akRSFDnRX%2BxHmyvaTLmQQacJS2AMzCPKrpmb%2BwCFNNmM0sDsOWe%2BQFOLkws%2Fz5xAY6pgEZfkTitudl2iPgwDwnvLt0L6AnJz0%2BJFB1EhMg2KpD7j7NXU1foue1x3SuXPM%2Bx9QjeZe3%2BaIgpWWnVHQJ4Lorr5pF6fUA4fMiWDh%2F2DdTXGjIFuNchHrWaU9wxtJ9hNWSQ4ZVKAnm3SHMNwHsN3OMIM1cGEHyQoTo8y%2FdopFLIqIppVzRsf2xrwpA2LjbSA1TWKbhyarzkKx7755rU3XUo9R6RqtX&X-Amz-Signature=bc8176b0b66fe88b0a2fb36ae7e1851faa4935617771002e1367062ddf3dc112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CI5Z4HB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIHoAq1Xc%2FHeMQjnYPqV5Qaq5uEjQa147SMzw9gZWS0qXAiA4R0a8uUkOXYRN8a72lUVpiPfVhK5xcS%2BpJ0TlBl4dsyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMDj9iwdrec0A9kGU9KtwDKtRPQZgBu52n%2FnPuR9dwvThlIb4IdAK8OjNRV7lnmUaKlJBlc%2FB6xpL3tEsQjtMx2B%2FbsAd0ZbtImxzYIRGWFxisNt2gA9YMNX9P0zu54XlLJZ6jxvq1UyMOEyO3wPg4VRg9Ft4%2BE7xTNtc4BPMNnLPvq68Q8jyj2Y9ulxr9gsIvfKMbyOoBgk3NwhdLXb4jtnH5usMW8rfY7IxvZt%2F4FSg1K7dPHwyno%2BC4Fy3f4OdycPibu5LKO%2FXFH%2BAKN%2FBs3RYr%2FX88Xx9oS3pMze6g4CQv459jm7UxdtiEJK1aEee9PyEHY059jbB%2FPImGmBmirdT773nuP9dwmhUxa9sG11Vq7ZpQHhX%2F%2B5RDitsUIe3JA7lz2iTCyUXljFahLF5nSBaROOyEncCjiKIkayTWxLWJd12QMTQu%2FT6wHNoley2eyjiiKGGxtqILDG6u7P36XGvtSkxy55lYCGj2cCoKSvI3V2I4tRvACJ2VRhw6F6BTNwfUVFZVc1WeYwx7stspo2gtfUPJXmHd3y3JIw24tKDs8k%2FjoWvIoze8TG3VtR2MLNCRgPrmR0vT5dGMZHFpx1akRSFDnRX%2BxHmyvaTLmQQacJS2AMzCPKrpmb%2BwCFNNmM0sDsOWe%2BQFOLkws%2Fz5xAY6pgEZfkTitudl2iPgwDwnvLt0L6AnJz0%2BJFB1EhMg2KpD7j7NXU1foue1x3SuXPM%2Bx9QjeZe3%2BaIgpWWnVHQJ4Lorr5pF6fUA4fMiWDh%2F2DdTXGjIFuNchHrWaU9wxtJ9hNWSQ4ZVKAnm3SHMNwHsN3OMIM1cGEHyQoTo8y%2FdopFLIqIppVzRsf2xrwpA2LjbSA1TWKbhyarzkKx7755rU3XUo9R6RqtX&X-Amz-Signature=e96bd9125c1b09acbd1752738c44ef5f5754daa2ab7acf9d2331504990d96e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
