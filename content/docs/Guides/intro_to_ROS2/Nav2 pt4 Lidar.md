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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGUQR3YJ%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGhtLxW7knCvL6uUFoS1Fdc65f2Sfr77o%2FPUN0pEgBgAiEAs4UqVfz%2FeLO66YVcwQqZf923gsN1G7FA54f3KWJCH%2Boq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJKQP2j70B0Np77wdCrcA1yGtk8TYETeooUzeXdKETA6dz%2F5wlcBZNyM24Y9mQYEp2kr6wqeGJK74YWFYX%2FNFdwAPXN%2BfZj5iXHkFKkw45NagEnqGEMBAEl9DBuXwEwonUy%2BwVJ%2Fc61fsWa1c8vqyZhgyz5wth%2FBHrzGRHGd%2F8YWzMOrovMv8urNHSnFxplNt51caPDWArOSVDxybBwSbA0ajOSN1%2FFMO7JMQBAX4GcRu38qz5waoWb14q3y5dKn78tRkMlof9RL9aE58XWEE6yrVABYtKRNySCFfwiEeWq36CedbBuRN3h2Awrm7l74LQebqFp3BsefufJgk4sKSdz0qtjWOersSqvkHU8WE%2F84U1WD1wNoheZH3AkREisq%2BCq57Hz1u2eg8OCvq0dvduR0TjYgLbDNxMRZdyVoahh7VJhlxCnHfUQIgF8yljmR39KySjJr%2F3mEdGZaZLnHQRmMsq%2BSj3%2BW50eIG%2Bfovn9m6DMLeylMKEirFN3PaGEAQ3L0g%2FTMH6LgW%2Fo6NySManTSSKEt1Xc4A0pfSMN%2FBchAzOwIJ2mCR88i%2FKc4RvU6VBzSNwhYvyjFznV8i%2FYUsz048a6MPzU671APxg47fNGVKIe618Oef63%2FJzwyQOPSieboiomkY1od7fCvMNDqn8wGOqUBz16a7PowYWOWVX4zIXB33ep8zBDh20p5bKbQQJk76l1YkW1XndL6KjPkDECVsk2OH9f3Ek28i2GEsXtjvPjKg%2B9t6etAxKFEctb9QKvGlGAvzJrrM3Y9yNPI%2BHwBrJGpBnCv0EYhISlsBt7HvsgdGJcn4Tq9ctZXQz2sCYDUIEoWlCzy0SVQ4Nc5awIr4QZSAHnFUeEq%2Fu6JScntWHz0uoTw4hgD&X-Amz-Signature=8f7e2b44d1f7263da0fd1cc137da5b39569dac9e538ba198c65d9f2772f88b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLNZMM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRuCHSfLL2JUJoe0EDT76nTa%2Fa%2BSd5S2wEArswRFIIAiEAz2hmpT4oWiTZ7FP%2Bs9vqzbaR0q3HJcs6JFvKJ2y%2FwIgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBbj5jYvg5e%2BJl%2BxjCrcA3wNFcK6mCx%2BQG7Fklozj5dCz7kXY3%2FHniBrlAVwUCvpfBDcEMFclZWiZn940alFw%2FPzIwLoKRpYiHcriGl%2FtPSBWtsPBuE3kVcfAdVQ3XyKcrRTcOhVHsaRKKE04CIrZDvq%2FMnCP46ebq3qZcsOQHkfCPJgC6wh4P0cU1nDPK54z%2Bx6d%2Fx%2FnJa27X49CduarZvAw1MpNamUoeaV6JxJTi%2FzocvLVle1nH%2BV9HLORqQhab70GQe95coXglalSZEe3JWGVcrodOkxmgQjhFJzGves%2F%2BryNbXqkVjV0wS3jFUmQAEhJMu1SaDynaFRt%2FbW4KIj2SKBdiBzVKLEClVep7YYoI6WDq2U0i%2FUVgv1Y6R7QKW%2B1yDeGuNvVAxHrB5kenZBa9jQVOYRkyYG4MdDJlIqIh9uK6VuYxljMcyuMLVJZ5YEQbJE2BXqZ2CGMwX0VjRVl7JWlYV5R0j5covW7zxFZe97AA3mO76LtUJ8BIexUwglVBVzmOoIbjZgczOqzw%2B%2BjMakQuUew2C9ijXmhDBd39HXXwdmRgQXNk8BN1ALjoGNTruoEuRD%2B0Ayg6vT%2BwtyvI4S4NJk47PNixlxlnBPCXq1Af4srVFUjYPq0VEGc8CIrBirpJtia7ZuMMLrn8wGOqUBZUvB77C6bKkWQI7iYOKJ16DU00DXYksx13XC118MXL%2F1gYaOoUcSklwbDnYUgNY3r5aq0iMj7S1HiznaUGgmzUFc7wqWyb79iSl6CQq9WwXtuDZ3PXgzyj%2BrvlcOyDFRMNjzDAoc6ZaY4N0IE0TxEx%2BgEUYs895PmcNvg1LNNIWKzXm8vs3Dmt1aimxN7krqNSW%2B9wAfbt3FoOCFL%2FiiJJ27rJk0&X-Amz-Signature=3925644022b54016fee278ebe8f1a25ad802b66423846febd629969ed19dec06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLNZMM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRuCHSfLL2JUJoe0EDT76nTa%2Fa%2BSd5S2wEArswRFIIAiEAz2hmpT4oWiTZ7FP%2Bs9vqzbaR0q3HJcs6JFvKJ2y%2FwIgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBbj5jYvg5e%2BJl%2BxjCrcA3wNFcK6mCx%2BQG7Fklozj5dCz7kXY3%2FHniBrlAVwUCvpfBDcEMFclZWiZn940alFw%2FPzIwLoKRpYiHcriGl%2FtPSBWtsPBuE3kVcfAdVQ3XyKcrRTcOhVHsaRKKE04CIrZDvq%2FMnCP46ebq3qZcsOQHkfCPJgC6wh4P0cU1nDPK54z%2Bx6d%2Fx%2FnJa27X49CduarZvAw1MpNamUoeaV6JxJTi%2FzocvLVle1nH%2BV9HLORqQhab70GQe95coXglalSZEe3JWGVcrodOkxmgQjhFJzGves%2F%2BryNbXqkVjV0wS3jFUmQAEhJMu1SaDynaFRt%2FbW4KIj2SKBdiBzVKLEClVep7YYoI6WDq2U0i%2FUVgv1Y6R7QKW%2B1yDeGuNvVAxHrB5kenZBa9jQVOYRkyYG4MdDJlIqIh9uK6VuYxljMcyuMLVJZ5YEQbJE2BXqZ2CGMwX0VjRVl7JWlYV5R0j5covW7zxFZe97AA3mO76LtUJ8BIexUwglVBVzmOoIbjZgczOqzw%2B%2BjMakQuUew2C9ijXmhDBd39HXXwdmRgQXNk8BN1ALjoGNTruoEuRD%2B0Ayg6vT%2BwtyvI4S4NJk47PNixlxlnBPCXq1Af4srVFUjYPq0VEGc8CIrBirpJtia7ZuMMLrn8wGOqUBZUvB77C6bKkWQI7iYOKJ16DU00DXYksx13XC118MXL%2F1gYaOoUcSklwbDnYUgNY3r5aq0iMj7S1HiznaUGgmzUFc7wqWyb79iSl6CQq9WwXtuDZ3PXgzyj%2BrvlcOyDFRMNjzDAoc6ZaY4N0IE0TxEx%2BgEUYs895PmcNvg1LNNIWKzXm8vs3Dmt1aimxN7krqNSW%2B9wAfbt3FoOCFL%2FiiJJ27rJk0&X-Amz-Signature=a8915a6c244f54b786cd9995bd0cfa5e0379f3a34482982bbd7c65bc9050e421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLNZMM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRuCHSfLL2JUJoe0EDT76nTa%2Fa%2BSd5S2wEArswRFIIAiEAz2hmpT4oWiTZ7FP%2Bs9vqzbaR0q3HJcs6JFvKJ2y%2FwIgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBbj5jYvg5e%2BJl%2BxjCrcA3wNFcK6mCx%2BQG7Fklozj5dCz7kXY3%2FHniBrlAVwUCvpfBDcEMFclZWiZn940alFw%2FPzIwLoKRpYiHcriGl%2FtPSBWtsPBuE3kVcfAdVQ3XyKcrRTcOhVHsaRKKE04CIrZDvq%2FMnCP46ebq3qZcsOQHkfCPJgC6wh4P0cU1nDPK54z%2Bx6d%2Fx%2FnJa27X49CduarZvAw1MpNamUoeaV6JxJTi%2FzocvLVle1nH%2BV9HLORqQhab70GQe95coXglalSZEe3JWGVcrodOkxmgQjhFJzGves%2F%2BryNbXqkVjV0wS3jFUmQAEhJMu1SaDynaFRt%2FbW4KIj2SKBdiBzVKLEClVep7YYoI6WDq2U0i%2FUVgv1Y6R7QKW%2B1yDeGuNvVAxHrB5kenZBa9jQVOYRkyYG4MdDJlIqIh9uK6VuYxljMcyuMLVJZ5YEQbJE2BXqZ2CGMwX0VjRVl7JWlYV5R0j5covW7zxFZe97AA3mO76LtUJ8BIexUwglVBVzmOoIbjZgczOqzw%2B%2BjMakQuUew2C9ijXmhDBd39HXXwdmRgQXNk8BN1ALjoGNTruoEuRD%2B0Ayg6vT%2BwtyvI4S4NJk47PNixlxlnBPCXq1Af4srVFUjYPq0VEGc8CIrBirpJtia7ZuMMLrn8wGOqUBZUvB77C6bKkWQI7iYOKJ16DU00DXYksx13XC118MXL%2F1gYaOoUcSklwbDnYUgNY3r5aq0iMj7S1HiznaUGgmzUFc7wqWyb79iSl6CQq9WwXtuDZ3PXgzyj%2BrvlcOyDFRMNjzDAoc6ZaY4N0IE0TxEx%2BgEUYs895PmcNvg1LNNIWKzXm8vs3Dmt1aimxN7krqNSW%2B9wAfbt3FoOCFL%2FiiJJ27rJk0&X-Amz-Signature=0b40639dbce89354357e40359af21f0adb5a796bb1001e7ed8496f60b0a9d414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLNZMM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRuCHSfLL2JUJoe0EDT76nTa%2Fa%2BSd5S2wEArswRFIIAiEAz2hmpT4oWiTZ7FP%2Bs9vqzbaR0q3HJcs6JFvKJ2y%2FwIgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBbj5jYvg5e%2BJl%2BxjCrcA3wNFcK6mCx%2BQG7Fklozj5dCz7kXY3%2FHniBrlAVwUCvpfBDcEMFclZWiZn940alFw%2FPzIwLoKRpYiHcriGl%2FtPSBWtsPBuE3kVcfAdVQ3XyKcrRTcOhVHsaRKKE04CIrZDvq%2FMnCP46ebq3qZcsOQHkfCPJgC6wh4P0cU1nDPK54z%2Bx6d%2Fx%2FnJa27X49CduarZvAw1MpNamUoeaV6JxJTi%2FzocvLVle1nH%2BV9HLORqQhab70GQe95coXglalSZEe3JWGVcrodOkxmgQjhFJzGves%2F%2BryNbXqkVjV0wS3jFUmQAEhJMu1SaDynaFRt%2FbW4KIj2SKBdiBzVKLEClVep7YYoI6WDq2U0i%2FUVgv1Y6R7QKW%2B1yDeGuNvVAxHrB5kenZBa9jQVOYRkyYG4MdDJlIqIh9uK6VuYxljMcyuMLVJZ5YEQbJE2BXqZ2CGMwX0VjRVl7JWlYV5R0j5covW7zxFZe97AA3mO76LtUJ8BIexUwglVBVzmOoIbjZgczOqzw%2B%2BjMakQuUew2C9ijXmhDBd39HXXwdmRgQXNk8BN1ALjoGNTruoEuRD%2B0Ayg6vT%2BwtyvI4S4NJk47PNixlxlnBPCXq1Af4srVFUjYPq0VEGc8CIrBirpJtia7ZuMMLrn8wGOqUBZUvB77C6bKkWQI7iYOKJ16DU00DXYksx13XC118MXL%2F1gYaOoUcSklwbDnYUgNY3r5aq0iMj7S1HiznaUGgmzUFc7wqWyb79iSl6CQq9WwXtuDZ3PXgzyj%2BrvlcOyDFRMNjzDAoc6ZaY4N0IE0TxEx%2BgEUYs895PmcNvg1LNNIWKzXm8vs3Dmt1aimxN7krqNSW%2B9wAfbt3FoOCFL%2FiiJJ27rJk0&X-Amz-Signature=556374a24fb589ea2db01bd90c0f2fc672b00dafa61fdc7d681bd6bdeddf9a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLNZMM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRuCHSfLL2JUJoe0EDT76nTa%2Fa%2BSd5S2wEArswRFIIAiEAz2hmpT4oWiTZ7FP%2Bs9vqzbaR0q3HJcs6JFvKJ2y%2FwIgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBbj5jYvg5e%2BJl%2BxjCrcA3wNFcK6mCx%2BQG7Fklozj5dCz7kXY3%2FHniBrlAVwUCvpfBDcEMFclZWiZn940alFw%2FPzIwLoKRpYiHcriGl%2FtPSBWtsPBuE3kVcfAdVQ3XyKcrRTcOhVHsaRKKE04CIrZDvq%2FMnCP46ebq3qZcsOQHkfCPJgC6wh4P0cU1nDPK54z%2Bx6d%2Fx%2FnJa27X49CduarZvAw1MpNamUoeaV6JxJTi%2FzocvLVle1nH%2BV9HLORqQhab70GQe95coXglalSZEe3JWGVcrodOkxmgQjhFJzGves%2F%2BryNbXqkVjV0wS3jFUmQAEhJMu1SaDynaFRt%2FbW4KIj2SKBdiBzVKLEClVep7YYoI6WDq2U0i%2FUVgv1Y6R7QKW%2B1yDeGuNvVAxHrB5kenZBa9jQVOYRkyYG4MdDJlIqIh9uK6VuYxljMcyuMLVJZ5YEQbJE2BXqZ2CGMwX0VjRVl7JWlYV5R0j5covW7zxFZe97AA3mO76LtUJ8BIexUwglVBVzmOoIbjZgczOqzw%2B%2BjMakQuUew2C9ijXmhDBd39HXXwdmRgQXNk8BN1ALjoGNTruoEuRD%2B0Ayg6vT%2BwtyvI4S4NJk47PNixlxlnBPCXq1Af4srVFUjYPq0VEGc8CIrBirpJtia7ZuMMLrn8wGOqUBZUvB77C6bKkWQI7iYOKJ16DU00DXYksx13XC118MXL%2F1gYaOoUcSklwbDnYUgNY3r5aq0iMj7S1HiznaUGgmzUFc7wqWyb79iSl6CQq9WwXtuDZ3PXgzyj%2BrvlcOyDFRMNjzDAoc6ZaY4N0IE0TxEx%2BgEUYs895PmcNvg1LNNIWKzXm8vs3Dmt1aimxN7krqNSW%2B9wAfbt3FoOCFL%2FiiJJ27rJk0&X-Amz-Signature=8df9369d0eb39e8b702d04ec0dfbf87fd8253b02dbc1c46e0d942efe1a95d25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLNZMM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRuCHSfLL2JUJoe0EDT76nTa%2Fa%2BSd5S2wEArswRFIIAiEAz2hmpT4oWiTZ7FP%2Bs9vqzbaR0q3HJcs6JFvKJ2y%2FwIgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBbj5jYvg5e%2BJl%2BxjCrcA3wNFcK6mCx%2BQG7Fklozj5dCz7kXY3%2FHniBrlAVwUCvpfBDcEMFclZWiZn940alFw%2FPzIwLoKRpYiHcriGl%2FtPSBWtsPBuE3kVcfAdVQ3XyKcrRTcOhVHsaRKKE04CIrZDvq%2FMnCP46ebq3qZcsOQHkfCPJgC6wh4P0cU1nDPK54z%2Bx6d%2Fx%2FnJa27X49CduarZvAw1MpNamUoeaV6JxJTi%2FzocvLVle1nH%2BV9HLORqQhab70GQe95coXglalSZEe3JWGVcrodOkxmgQjhFJzGves%2F%2BryNbXqkVjV0wS3jFUmQAEhJMu1SaDynaFRt%2FbW4KIj2SKBdiBzVKLEClVep7YYoI6WDq2U0i%2FUVgv1Y6R7QKW%2B1yDeGuNvVAxHrB5kenZBa9jQVOYRkyYG4MdDJlIqIh9uK6VuYxljMcyuMLVJZ5YEQbJE2BXqZ2CGMwX0VjRVl7JWlYV5R0j5covW7zxFZe97AA3mO76LtUJ8BIexUwglVBVzmOoIbjZgczOqzw%2B%2BjMakQuUew2C9ijXmhDBd39HXXwdmRgQXNk8BN1ALjoGNTruoEuRD%2B0Ayg6vT%2BwtyvI4S4NJk47PNixlxlnBPCXq1Af4srVFUjYPq0VEGc8CIrBirpJtia7ZuMMLrn8wGOqUBZUvB77C6bKkWQI7iYOKJ16DU00DXYksx13XC118MXL%2F1gYaOoUcSklwbDnYUgNY3r5aq0iMj7S1HiznaUGgmzUFc7wqWyb79iSl6CQq9WwXtuDZ3PXgzyj%2BrvlcOyDFRMNjzDAoc6ZaY4N0IE0TxEx%2BgEUYs895PmcNvg1LNNIWKzXm8vs3Dmt1aimxN7krqNSW%2B9wAfbt3FoOCFL%2FiiJJ27rJk0&X-Amz-Signature=ee89760330ca22684f5262c06674b863431b9dd8b22c66c0c458a43d9e7bcb2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLNZMM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRuCHSfLL2JUJoe0EDT76nTa%2Fa%2BSd5S2wEArswRFIIAiEAz2hmpT4oWiTZ7FP%2Bs9vqzbaR0q3HJcs6JFvKJ2y%2FwIgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBbj5jYvg5e%2BJl%2BxjCrcA3wNFcK6mCx%2BQG7Fklozj5dCz7kXY3%2FHniBrlAVwUCvpfBDcEMFclZWiZn940alFw%2FPzIwLoKRpYiHcriGl%2FtPSBWtsPBuE3kVcfAdVQ3XyKcrRTcOhVHsaRKKE04CIrZDvq%2FMnCP46ebq3qZcsOQHkfCPJgC6wh4P0cU1nDPK54z%2Bx6d%2Fx%2FnJa27X49CduarZvAw1MpNamUoeaV6JxJTi%2FzocvLVle1nH%2BV9HLORqQhab70GQe95coXglalSZEe3JWGVcrodOkxmgQjhFJzGves%2F%2BryNbXqkVjV0wS3jFUmQAEhJMu1SaDynaFRt%2FbW4KIj2SKBdiBzVKLEClVep7YYoI6WDq2U0i%2FUVgv1Y6R7QKW%2B1yDeGuNvVAxHrB5kenZBa9jQVOYRkyYG4MdDJlIqIh9uK6VuYxljMcyuMLVJZ5YEQbJE2BXqZ2CGMwX0VjRVl7JWlYV5R0j5covW7zxFZe97AA3mO76LtUJ8BIexUwglVBVzmOoIbjZgczOqzw%2B%2BjMakQuUew2C9ijXmhDBd39HXXwdmRgQXNk8BN1ALjoGNTruoEuRD%2B0Ayg6vT%2BwtyvI4S4NJk47PNixlxlnBPCXq1Af4srVFUjYPq0VEGc8CIrBirpJtia7ZuMMLrn8wGOqUBZUvB77C6bKkWQI7iYOKJ16DU00DXYksx13XC118MXL%2F1gYaOoUcSklwbDnYUgNY3r5aq0iMj7S1HiznaUGgmzUFc7wqWyb79iSl6CQq9WwXtuDZ3PXgzyj%2BrvlcOyDFRMNjzDAoc6ZaY4N0IE0TxEx%2BgEUYs895PmcNvg1LNNIWKzXm8vs3Dmt1aimxN7krqNSW%2B9wAfbt3FoOCFL%2FiiJJ27rJk0&X-Amz-Signature=ff886d3658061f5b7ca4d95788dd2adc7ed0cc24aa0feabd5f247169445333cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLNZMM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRuCHSfLL2JUJoe0EDT76nTa%2Fa%2BSd5S2wEArswRFIIAiEAz2hmpT4oWiTZ7FP%2Bs9vqzbaR0q3HJcs6JFvKJ2y%2FwIgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBbj5jYvg5e%2BJl%2BxjCrcA3wNFcK6mCx%2BQG7Fklozj5dCz7kXY3%2FHniBrlAVwUCvpfBDcEMFclZWiZn940alFw%2FPzIwLoKRpYiHcriGl%2FtPSBWtsPBuE3kVcfAdVQ3XyKcrRTcOhVHsaRKKE04CIrZDvq%2FMnCP46ebq3qZcsOQHkfCPJgC6wh4P0cU1nDPK54z%2Bx6d%2Fx%2FnJa27X49CduarZvAw1MpNamUoeaV6JxJTi%2FzocvLVle1nH%2BV9HLORqQhab70GQe95coXglalSZEe3JWGVcrodOkxmgQjhFJzGves%2F%2BryNbXqkVjV0wS3jFUmQAEhJMu1SaDynaFRt%2FbW4KIj2SKBdiBzVKLEClVep7YYoI6WDq2U0i%2FUVgv1Y6R7QKW%2B1yDeGuNvVAxHrB5kenZBa9jQVOYRkyYG4MdDJlIqIh9uK6VuYxljMcyuMLVJZ5YEQbJE2BXqZ2CGMwX0VjRVl7JWlYV5R0j5covW7zxFZe97AA3mO76LtUJ8BIexUwglVBVzmOoIbjZgczOqzw%2B%2BjMakQuUew2C9ijXmhDBd39HXXwdmRgQXNk8BN1ALjoGNTruoEuRD%2B0Ayg6vT%2BwtyvI4S4NJk47PNixlxlnBPCXq1Af4srVFUjYPq0VEGc8CIrBirpJtia7ZuMMLrn8wGOqUBZUvB77C6bKkWQI7iYOKJ16DU00DXYksx13XC118MXL%2F1gYaOoUcSklwbDnYUgNY3r5aq0iMj7S1HiznaUGgmzUFc7wqWyb79iSl6CQq9WwXtuDZ3PXgzyj%2BrvlcOyDFRMNjzDAoc6ZaY4N0IE0TxEx%2BgEUYs895PmcNvg1LNNIWKzXm8vs3Dmt1aimxN7krqNSW%2B9wAfbt3FoOCFL%2FiiJJ27rJk0&X-Amz-Signature=250a7e360b8415a8c6abcc45ad182e55b50519f1afdbc628e68916122ce527fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLNZMM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRuCHSfLL2JUJoe0EDT76nTa%2Fa%2BSd5S2wEArswRFIIAiEAz2hmpT4oWiTZ7FP%2Bs9vqzbaR0q3HJcs6JFvKJ2y%2FwIgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBbj5jYvg5e%2BJl%2BxjCrcA3wNFcK6mCx%2BQG7Fklozj5dCz7kXY3%2FHniBrlAVwUCvpfBDcEMFclZWiZn940alFw%2FPzIwLoKRpYiHcriGl%2FtPSBWtsPBuE3kVcfAdVQ3XyKcrRTcOhVHsaRKKE04CIrZDvq%2FMnCP46ebq3qZcsOQHkfCPJgC6wh4P0cU1nDPK54z%2Bx6d%2Fx%2FnJa27X49CduarZvAw1MpNamUoeaV6JxJTi%2FzocvLVle1nH%2BV9HLORqQhab70GQe95coXglalSZEe3JWGVcrodOkxmgQjhFJzGves%2F%2BryNbXqkVjV0wS3jFUmQAEhJMu1SaDynaFRt%2FbW4KIj2SKBdiBzVKLEClVep7YYoI6WDq2U0i%2FUVgv1Y6R7QKW%2B1yDeGuNvVAxHrB5kenZBa9jQVOYRkyYG4MdDJlIqIh9uK6VuYxljMcyuMLVJZ5YEQbJE2BXqZ2CGMwX0VjRVl7JWlYV5R0j5covW7zxFZe97AA3mO76LtUJ8BIexUwglVBVzmOoIbjZgczOqzw%2B%2BjMakQuUew2C9ijXmhDBd39HXXwdmRgQXNk8BN1ALjoGNTruoEuRD%2B0Ayg6vT%2BwtyvI4S4NJk47PNixlxlnBPCXq1Af4srVFUjYPq0VEGc8CIrBirpJtia7ZuMMLrn8wGOqUBZUvB77C6bKkWQI7iYOKJ16DU00DXYksx13XC118MXL%2F1gYaOoUcSklwbDnYUgNY3r5aq0iMj7S1HiznaUGgmzUFc7wqWyb79iSl6CQq9WwXtuDZ3PXgzyj%2BrvlcOyDFRMNjzDAoc6ZaY4N0IE0TxEx%2BgEUYs895PmcNvg1LNNIWKzXm8vs3Dmt1aimxN7krqNSW%2B9wAfbt3FoOCFL%2FiiJJ27rJk0&X-Amz-Signature=db791408c3513f4babefc7c4fe7810be0d02f3f9f9e7a8f64263081469a44162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NLNZMM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRRuCHSfLL2JUJoe0EDT76nTa%2Fa%2BSd5S2wEArswRFIIAiEAz2hmpT4oWiTZ7FP%2Bs9vqzbaR0q3HJcs6JFvKJ2y%2FwIgq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBbj5jYvg5e%2BJl%2BxjCrcA3wNFcK6mCx%2BQG7Fklozj5dCz7kXY3%2FHniBrlAVwUCvpfBDcEMFclZWiZn940alFw%2FPzIwLoKRpYiHcriGl%2FtPSBWtsPBuE3kVcfAdVQ3XyKcrRTcOhVHsaRKKE04CIrZDvq%2FMnCP46ebq3qZcsOQHkfCPJgC6wh4P0cU1nDPK54z%2Bx6d%2Fx%2FnJa27X49CduarZvAw1MpNamUoeaV6JxJTi%2FzocvLVle1nH%2BV9HLORqQhab70GQe95coXglalSZEe3JWGVcrodOkxmgQjhFJzGves%2F%2BryNbXqkVjV0wS3jFUmQAEhJMu1SaDynaFRt%2FbW4KIj2SKBdiBzVKLEClVep7YYoI6WDq2U0i%2FUVgv1Y6R7QKW%2B1yDeGuNvVAxHrB5kenZBa9jQVOYRkyYG4MdDJlIqIh9uK6VuYxljMcyuMLVJZ5YEQbJE2BXqZ2CGMwX0VjRVl7JWlYV5R0j5covW7zxFZe97AA3mO76LtUJ8BIexUwglVBVzmOoIbjZgczOqzw%2B%2BjMakQuUew2C9ijXmhDBd39HXXwdmRgQXNk8BN1ALjoGNTruoEuRD%2B0Ayg6vT%2BwtyvI4S4NJk47PNixlxlnBPCXq1Af4srVFUjYPq0VEGc8CIrBirpJtia7ZuMMLrn8wGOqUBZUvB77C6bKkWQI7iYOKJ16DU00DXYksx13XC118MXL%2F1gYaOoUcSklwbDnYUgNY3r5aq0iMj7S1HiznaUGgmzUFc7wqWyb79iSl6CQq9WwXtuDZ3PXgzyj%2BrvlcOyDFRMNjzDAoc6ZaY4N0IE0TxEx%2BgEUYs895PmcNvg1LNNIWKzXm8vs3Dmt1aimxN7krqNSW%2B9wAfbt3FoOCFL%2FiiJJ27rJk0&X-Amz-Signature=556374a24fb589ea2db01bd90c0f2fc672b00dafa61fdc7d681bd6bdeddf9a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
