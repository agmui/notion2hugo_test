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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665CPYUJ3%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEOgCwMH1vsxJIJk7ehhi3FLRMS4ndmlilOzzmrihoAAiEAhe6XNnmkonwpGFzT3Jau9b0%2FwnP8vOiWCrotCYdG6RYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMP3WOjpl1d4SJQ69SrcAz2%2F2c02Zy4gDp%2BZnSrSifLFJHJYTWiPfSGBjReKii%2Bc60M53IL2TAjVFDPfKTAjZ7Br9vJuLKA8xudtfW2K84uQHrf78bWH2XRa%2BCECCL8dctovUScsEDUVndUoOOTKQeqaSsJ8d6oUMrkAtORcgg31WlSPG%2B21p56upM5REGceW%2FLRnVU31gT4cLiDAqJt31nI03MD2dc3LMo4V0Q18LLCmm5QDKy3i2pXFHQoB%2F8fEUMd9bcUKsJnbvBZyuCBBiJYhilumMAnQtz92g7VOLf6DG%2FOaDEQIP%2BgJEMIibr80zwnidLTV9veLIaEpoy3%2BPeXf0fnBFG6csg447yfaF%2BDXlXvqKGmFvdkNARWugNxSfXRcZ86hJPReTKVO9FyQYfg6cRYTttmIel2LnNWELdtDm6nTPxJPfozfgonjNt%2BcHWYvllmIhZp0tVLe7ZyeKJwDBNgV%2BE6j1%2Bba8J5S24lHvA9wfT6tby4AHgm8nstntI1pF2FNRPLCufpk3ot4CnDW5a2Zi5hSpXHEfqwl4jTkOD7qU4%2Fo9GNYWcMzJViAU9hluSh7l8FQoeG8lWmZXCT4o2p51fP6HVlJ8gR4dp1RN9TeEAUdycwf4k1UwQhVOjdLO7kjETsvfdqMMrj%2B84GOqUBQNT1fok9zpQ89u55CvWQ7Pljd2loU7DXXiODAzVbI0vRiH968L23FlRcqrujRj7T9fg54fNE%2FLTclnKGCKk5HCuzceCAuHO9pBqm3AroT9WpCZH9GbFdLXVS45lyaGJREyHNnYBC%2FTJiCfLpm7jRC1aYNm4YVFH3%2FnYsGeB4nqpvbWLxiI2%2BZqunDP6ewXudB3C7sNpOxRGX%2BgCtSn92IMyAn6p6&X-Amz-Signature=806a79935bf291443d1fdf7642ac6236be4ac707f524839a979ae5356ee05a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJBVZ4U%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6nhN6NC8sAYzSupLMefDWIxHtusuUmjMpD6um16nyPAiA%2FcSkx6OaD2nyqCRvygSXbGCJsxytZmBJh13RaN5%2B3qyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNddH9H9GBANZqEQqKtwDZZQmwhFhjJ6IuapuxoADhRSxwC%2BNpwQcq9V6nWVAyAqWw8W0yOZtNRymSSBdOZ%2Bt8IcUMJBLLmzjR0wrakRaFN3k9L1Nka4VDbTAkhc6A%2BH%2FHBuwgU%2F42DQ8KiLuvEz2AzrNGe3kbfT7CohawqlriF9v7NRhBPxC3SQSQrVhS7rKE4UL2K2UDJtF3gkIEonl9AkWuiM7kTrU43mfDoeAMliuWxU7yNIujThfzM9aueRFlOip5MR2sT6ieMOoW%2FBgYXcTEK9%2FVR%2BZnnCwtcWMqO30PvH5awM0HqoituF9DKeBnfh9oW7EjVd4LN0XjBgdTpgY1uftLPGOxrKjSGObZqdAadb%2FOVkIfINXe17ziqVDKhahfhHBkRSr6r1A6OSgZtqmaVYkUMQqEkB523VV%2BXGO9gtXKR3qwpzg77ObTgmuG7A90ObAy3aMdRTzu1rY3Obmf2MQHwC1wudDmo83I4dSIBpHqei4MQ4rzDty8uiKoWA0fsRFKDg66a4need3OnSDzj0mOOxutVp7hrCOf8hYEGU01Voq85c2orZTdz%2F%2B5zSiRvXSirmt8a1yZNp3IsC0pa0eX3f%2B%2BrZqJgecpkJKrrUEl1Y0wfbB7OSB2nl1RM1v0NIwynou5MIwzOP7zgY6pgHPIq39ds4RoydWmpa6%2BQNStbTDe%2FaquH32UXqnUFikmcP842tkuSkRQpRAXwzfHzayM%2FdEzzKyUMciZfPouzlGf4OuoNkar5GSLbiq9%2BIsqdVdbW4Qca%2FxQ6kJvBFN8ArPPTTswLmS79hObyDhyrOrCx0QrjKeJ%2FTs8SXnfMoaODHKzV89DGNbE7MSlPZGSxllnfH4JgoYq2AYtGFxjjRgylWfU8Rq&X-Amz-Signature=1fb6178cd8be1df04ef89a6f83ff07863593414b700aa411f6843bc2cf8d88cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJBVZ4U%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6nhN6NC8sAYzSupLMefDWIxHtusuUmjMpD6um16nyPAiA%2FcSkx6OaD2nyqCRvygSXbGCJsxytZmBJh13RaN5%2B3qyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNddH9H9GBANZqEQqKtwDZZQmwhFhjJ6IuapuxoADhRSxwC%2BNpwQcq9V6nWVAyAqWw8W0yOZtNRymSSBdOZ%2Bt8IcUMJBLLmzjR0wrakRaFN3k9L1Nka4VDbTAkhc6A%2BH%2FHBuwgU%2F42DQ8KiLuvEz2AzrNGe3kbfT7CohawqlriF9v7NRhBPxC3SQSQrVhS7rKE4UL2K2UDJtF3gkIEonl9AkWuiM7kTrU43mfDoeAMliuWxU7yNIujThfzM9aueRFlOip5MR2sT6ieMOoW%2FBgYXcTEK9%2FVR%2BZnnCwtcWMqO30PvH5awM0HqoituF9DKeBnfh9oW7EjVd4LN0XjBgdTpgY1uftLPGOxrKjSGObZqdAadb%2FOVkIfINXe17ziqVDKhahfhHBkRSr6r1A6OSgZtqmaVYkUMQqEkB523VV%2BXGO9gtXKR3qwpzg77ObTgmuG7A90ObAy3aMdRTzu1rY3Obmf2MQHwC1wudDmo83I4dSIBpHqei4MQ4rzDty8uiKoWA0fsRFKDg66a4need3OnSDzj0mOOxutVp7hrCOf8hYEGU01Voq85c2orZTdz%2F%2B5zSiRvXSirmt8a1yZNp3IsC0pa0eX3f%2B%2BrZqJgecpkJKrrUEl1Y0wfbB7OSB2nl1RM1v0NIwynou5MIwzOP7zgY6pgHPIq39ds4RoydWmpa6%2BQNStbTDe%2FaquH32UXqnUFikmcP842tkuSkRQpRAXwzfHzayM%2FdEzzKyUMciZfPouzlGf4OuoNkar5GSLbiq9%2BIsqdVdbW4Qca%2FxQ6kJvBFN8ArPPTTswLmS79hObyDhyrOrCx0QrjKeJ%2FTs8SXnfMoaODHKzV89DGNbE7MSlPZGSxllnfH4JgoYq2AYtGFxjjRgylWfU8Rq&X-Amz-Signature=2250eb01463c21b10b4cd7a1068c8dc60eed5b3f1698d0777196c63a954eee3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJBVZ4U%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6nhN6NC8sAYzSupLMefDWIxHtusuUmjMpD6um16nyPAiA%2FcSkx6OaD2nyqCRvygSXbGCJsxytZmBJh13RaN5%2B3qyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNddH9H9GBANZqEQqKtwDZZQmwhFhjJ6IuapuxoADhRSxwC%2BNpwQcq9V6nWVAyAqWw8W0yOZtNRymSSBdOZ%2Bt8IcUMJBLLmzjR0wrakRaFN3k9L1Nka4VDbTAkhc6A%2BH%2FHBuwgU%2F42DQ8KiLuvEz2AzrNGe3kbfT7CohawqlriF9v7NRhBPxC3SQSQrVhS7rKE4UL2K2UDJtF3gkIEonl9AkWuiM7kTrU43mfDoeAMliuWxU7yNIujThfzM9aueRFlOip5MR2sT6ieMOoW%2FBgYXcTEK9%2FVR%2BZnnCwtcWMqO30PvH5awM0HqoituF9DKeBnfh9oW7EjVd4LN0XjBgdTpgY1uftLPGOxrKjSGObZqdAadb%2FOVkIfINXe17ziqVDKhahfhHBkRSr6r1A6OSgZtqmaVYkUMQqEkB523VV%2BXGO9gtXKR3qwpzg77ObTgmuG7A90ObAy3aMdRTzu1rY3Obmf2MQHwC1wudDmo83I4dSIBpHqei4MQ4rzDty8uiKoWA0fsRFKDg66a4need3OnSDzj0mOOxutVp7hrCOf8hYEGU01Voq85c2orZTdz%2F%2B5zSiRvXSirmt8a1yZNp3IsC0pa0eX3f%2B%2BrZqJgecpkJKrrUEl1Y0wfbB7OSB2nl1RM1v0NIwynou5MIwzOP7zgY6pgHPIq39ds4RoydWmpa6%2BQNStbTDe%2FaquH32UXqnUFikmcP842tkuSkRQpRAXwzfHzayM%2FdEzzKyUMciZfPouzlGf4OuoNkar5GSLbiq9%2BIsqdVdbW4Qca%2FxQ6kJvBFN8ArPPTTswLmS79hObyDhyrOrCx0QrjKeJ%2FTs8SXnfMoaODHKzV89DGNbE7MSlPZGSxllnfH4JgoYq2AYtGFxjjRgylWfU8Rq&X-Amz-Signature=f2a442e0c733879dfdd0bde00d9843d4cc31ff847c202a69e0f8248a2fe2d41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJBVZ4U%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6nhN6NC8sAYzSupLMefDWIxHtusuUmjMpD6um16nyPAiA%2FcSkx6OaD2nyqCRvygSXbGCJsxytZmBJh13RaN5%2B3qyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNddH9H9GBANZqEQqKtwDZZQmwhFhjJ6IuapuxoADhRSxwC%2BNpwQcq9V6nWVAyAqWw8W0yOZtNRymSSBdOZ%2Bt8IcUMJBLLmzjR0wrakRaFN3k9L1Nka4VDbTAkhc6A%2BH%2FHBuwgU%2F42DQ8KiLuvEz2AzrNGe3kbfT7CohawqlriF9v7NRhBPxC3SQSQrVhS7rKE4UL2K2UDJtF3gkIEonl9AkWuiM7kTrU43mfDoeAMliuWxU7yNIujThfzM9aueRFlOip5MR2sT6ieMOoW%2FBgYXcTEK9%2FVR%2BZnnCwtcWMqO30PvH5awM0HqoituF9DKeBnfh9oW7EjVd4LN0XjBgdTpgY1uftLPGOxrKjSGObZqdAadb%2FOVkIfINXe17ziqVDKhahfhHBkRSr6r1A6OSgZtqmaVYkUMQqEkB523VV%2BXGO9gtXKR3qwpzg77ObTgmuG7A90ObAy3aMdRTzu1rY3Obmf2MQHwC1wudDmo83I4dSIBpHqei4MQ4rzDty8uiKoWA0fsRFKDg66a4need3OnSDzj0mOOxutVp7hrCOf8hYEGU01Voq85c2orZTdz%2F%2B5zSiRvXSirmt8a1yZNp3IsC0pa0eX3f%2B%2BrZqJgecpkJKrrUEl1Y0wfbB7OSB2nl1RM1v0NIwynou5MIwzOP7zgY6pgHPIq39ds4RoydWmpa6%2BQNStbTDe%2FaquH32UXqnUFikmcP842tkuSkRQpRAXwzfHzayM%2FdEzzKyUMciZfPouzlGf4OuoNkar5GSLbiq9%2BIsqdVdbW4Qca%2FxQ6kJvBFN8ArPPTTswLmS79hObyDhyrOrCx0QrjKeJ%2FTs8SXnfMoaODHKzV89DGNbE7MSlPZGSxllnfH4JgoYq2AYtGFxjjRgylWfU8Rq&X-Amz-Signature=d9ebfb5d33de0f0bd6b95cffe38aa541e9c2d238a30e7a7d4f45cd6d35ff6b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJBVZ4U%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6nhN6NC8sAYzSupLMefDWIxHtusuUmjMpD6um16nyPAiA%2FcSkx6OaD2nyqCRvygSXbGCJsxytZmBJh13RaN5%2B3qyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNddH9H9GBANZqEQqKtwDZZQmwhFhjJ6IuapuxoADhRSxwC%2BNpwQcq9V6nWVAyAqWw8W0yOZtNRymSSBdOZ%2Bt8IcUMJBLLmzjR0wrakRaFN3k9L1Nka4VDbTAkhc6A%2BH%2FHBuwgU%2F42DQ8KiLuvEz2AzrNGe3kbfT7CohawqlriF9v7NRhBPxC3SQSQrVhS7rKE4UL2K2UDJtF3gkIEonl9AkWuiM7kTrU43mfDoeAMliuWxU7yNIujThfzM9aueRFlOip5MR2sT6ieMOoW%2FBgYXcTEK9%2FVR%2BZnnCwtcWMqO30PvH5awM0HqoituF9DKeBnfh9oW7EjVd4LN0XjBgdTpgY1uftLPGOxrKjSGObZqdAadb%2FOVkIfINXe17ziqVDKhahfhHBkRSr6r1A6OSgZtqmaVYkUMQqEkB523VV%2BXGO9gtXKR3qwpzg77ObTgmuG7A90ObAy3aMdRTzu1rY3Obmf2MQHwC1wudDmo83I4dSIBpHqei4MQ4rzDty8uiKoWA0fsRFKDg66a4need3OnSDzj0mOOxutVp7hrCOf8hYEGU01Voq85c2orZTdz%2F%2B5zSiRvXSirmt8a1yZNp3IsC0pa0eX3f%2B%2BrZqJgecpkJKrrUEl1Y0wfbB7OSB2nl1RM1v0NIwynou5MIwzOP7zgY6pgHPIq39ds4RoydWmpa6%2BQNStbTDe%2FaquH32UXqnUFikmcP842tkuSkRQpRAXwzfHzayM%2FdEzzKyUMciZfPouzlGf4OuoNkar5GSLbiq9%2BIsqdVdbW4Qca%2FxQ6kJvBFN8ArPPTTswLmS79hObyDhyrOrCx0QrjKeJ%2FTs8SXnfMoaODHKzV89DGNbE7MSlPZGSxllnfH4JgoYq2AYtGFxjjRgylWfU8Rq&X-Amz-Signature=8467e3acfc184e52be51acc72cd79b9f89f4c13ee7ee7da1e75518baa79bee8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJBVZ4U%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6nhN6NC8sAYzSupLMefDWIxHtusuUmjMpD6um16nyPAiA%2FcSkx6OaD2nyqCRvygSXbGCJsxytZmBJh13RaN5%2B3qyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNddH9H9GBANZqEQqKtwDZZQmwhFhjJ6IuapuxoADhRSxwC%2BNpwQcq9V6nWVAyAqWw8W0yOZtNRymSSBdOZ%2Bt8IcUMJBLLmzjR0wrakRaFN3k9L1Nka4VDbTAkhc6A%2BH%2FHBuwgU%2F42DQ8KiLuvEz2AzrNGe3kbfT7CohawqlriF9v7NRhBPxC3SQSQrVhS7rKE4UL2K2UDJtF3gkIEonl9AkWuiM7kTrU43mfDoeAMliuWxU7yNIujThfzM9aueRFlOip5MR2sT6ieMOoW%2FBgYXcTEK9%2FVR%2BZnnCwtcWMqO30PvH5awM0HqoituF9DKeBnfh9oW7EjVd4LN0XjBgdTpgY1uftLPGOxrKjSGObZqdAadb%2FOVkIfINXe17ziqVDKhahfhHBkRSr6r1A6OSgZtqmaVYkUMQqEkB523VV%2BXGO9gtXKR3qwpzg77ObTgmuG7A90ObAy3aMdRTzu1rY3Obmf2MQHwC1wudDmo83I4dSIBpHqei4MQ4rzDty8uiKoWA0fsRFKDg66a4need3OnSDzj0mOOxutVp7hrCOf8hYEGU01Voq85c2orZTdz%2F%2B5zSiRvXSirmt8a1yZNp3IsC0pa0eX3f%2B%2BrZqJgecpkJKrrUEl1Y0wfbB7OSB2nl1RM1v0NIwynou5MIwzOP7zgY6pgHPIq39ds4RoydWmpa6%2BQNStbTDe%2FaquH32UXqnUFikmcP842tkuSkRQpRAXwzfHzayM%2FdEzzKyUMciZfPouzlGf4OuoNkar5GSLbiq9%2BIsqdVdbW4Qca%2FxQ6kJvBFN8ArPPTTswLmS79hObyDhyrOrCx0QrjKeJ%2FTs8SXnfMoaODHKzV89DGNbE7MSlPZGSxllnfH4JgoYq2AYtGFxjjRgylWfU8Rq&X-Amz-Signature=1e4b1b47cf4d2bc8679c3392d2207defa5575f51fa8967aa06a1e54847de09c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJBVZ4U%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6nhN6NC8sAYzSupLMefDWIxHtusuUmjMpD6um16nyPAiA%2FcSkx6OaD2nyqCRvygSXbGCJsxytZmBJh13RaN5%2B3qyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNddH9H9GBANZqEQqKtwDZZQmwhFhjJ6IuapuxoADhRSxwC%2BNpwQcq9V6nWVAyAqWw8W0yOZtNRymSSBdOZ%2Bt8IcUMJBLLmzjR0wrakRaFN3k9L1Nka4VDbTAkhc6A%2BH%2FHBuwgU%2F42DQ8KiLuvEz2AzrNGe3kbfT7CohawqlriF9v7NRhBPxC3SQSQrVhS7rKE4UL2K2UDJtF3gkIEonl9AkWuiM7kTrU43mfDoeAMliuWxU7yNIujThfzM9aueRFlOip5MR2sT6ieMOoW%2FBgYXcTEK9%2FVR%2BZnnCwtcWMqO30PvH5awM0HqoituF9DKeBnfh9oW7EjVd4LN0XjBgdTpgY1uftLPGOxrKjSGObZqdAadb%2FOVkIfINXe17ziqVDKhahfhHBkRSr6r1A6OSgZtqmaVYkUMQqEkB523VV%2BXGO9gtXKR3qwpzg77ObTgmuG7A90ObAy3aMdRTzu1rY3Obmf2MQHwC1wudDmo83I4dSIBpHqei4MQ4rzDty8uiKoWA0fsRFKDg66a4need3OnSDzj0mOOxutVp7hrCOf8hYEGU01Voq85c2orZTdz%2F%2B5zSiRvXSirmt8a1yZNp3IsC0pa0eX3f%2B%2BrZqJgecpkJKrrUEl1Y0wfbB7OSB2nl1RM1v0NIwynou5MIwzOP7zgY6pgHPIq39ds4RoydWmpa6%2BQNStbTDe%2FaquH32UXqnUFikmcP842tkuSkRQpRAXwzfHzayM%2FdEzzKyUMciZfPouzlGf4OuoNkar5GSLbiq9%2BIsqdVdbW4Qca%2FxQ6kJvBFN8ArPPTTswLmS79hObyDhyrOrCx0QrjKeJ%2FTs8SXnfMoaODHKzV89DGNbE7MSlPZGSxllnfH4JgoYq2AYtGFxjjRgylWfU8Rq&X-Amz-Signature=90135406263f1e349d2cbbd1e2e842514597bda68429df885f4aac4bc2d84d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJBVZ4U%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6nhN6NC8sAYzSupLMefDWIxHtusuUmjMpD6um16nyPAiA%2FcSkx6OaD2nyqCRvygSXbGCJsxytZmBJh13RaN5%2B3qyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNddH9H9GBANZqEQqKtwDZZQmwhFhjJ6IuapuxoADhRSxwC%2BNpwQcq9V6nWVAyAqWw8W0yOZtNRymSSBdOZ%2Bt8IcUMJBLLmzjR0wrakRaFN3k9L1Nka4VDbTAkhc6A%2BH%2FHBuwgU%2F42DQ8KiLuvEz2AzrNGe3kbfT7CohawqlriF9v7NRhBPxC3SQSQrVhS7rKE4UL2K2UDJtF3gkIEonl9AkWuiM7kTrU43mfDoeAMliuWxU7yNIujThfzM9aueRFlOip5MR2sT6ieMOoW%2FBgYXcTEK9%2FVR%2BZnnCwtcWMqO30PvH5awM0HqoituF9DKeBnfh9oW7EjVd4LN0XjBgdTpgY1uftLPGOxrKjSGObZqdAadb%2FOVkIfINXe17ziqVDKhahfhHBkRSr6r1A6OSgZtqmaVYkUMQqEkB523VV%2BXGO9gtXKR3qwpzg77ObTgmuG7A90ObAy3aMdRTzu1rY3Obmf2MQHwC1wudDmo83I4dSIBpHqei4MQ4rzDty8uiKoWA0fsRFKDg66a4need3OnSDzj0mOOxutVp7hrCOf8hYEGU01Voq85c2orZTdz%2F%2B5zSiRvXSirmt8a1yZNp3IsC0pa0eX3f%2B%2BrZqJgecpkJKrrUEl1Y0wfbB7OSB2nl1RM1v0NIwynou5MIwzOP7zgY6pgHPIq39ds4RoydWmpa6%2BQNStbTDe%2FaquH32UXqnUFikmcP842tkuSkRQpRAXwzfHzayM%2FdEzzKyUMciZfPouzlGf4OuoNkar5GSLbiq9%2BIsqdVdbW4Qca%2FxQ6kJvBFN8ArPPTTswLmS79hObyDhyrOrCx0QrjKeJ%2FTs8SXnfMoaODHKzV89DGNbE7MSlPZGSxllnfH4JgoYq2AYtGFxjjRgylWfU8Rq&X-Amz-Signature=dc331343e2325f823d92b1e56fdef3b815d1d1f327a9bca25c17ff0a3d88b697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJBVZ4U%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6nhN6NC8sAYzSupLMefDWIxHtusuUmjMpD6um16nyPAiA%2FcSkx6OaD2nyqCRvygSXbGCJsxytZmBJh13RaN5%2B3qyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNddH9H9GBANZqEQqKtwDZZQmwhFhjJ6IuapuxoADhRSxwC%2BNpwQcq9V6nWVAyAqWw8W0yOZtNRymSSBdOZ%2Bt8IcUMJBLLmzjR0wrakRaFN3k9L1Nka4VDbTAkhc6A%2BH%2FHBuwgU%2F42DQ8KiLuvEz2AzrNGe3kbfT7CohawqlriF9v7NRhBPxC3SQSQrVhS7rKE4UL2K2UDJtF3gkIEonl9AkWuiM7kTrU43mfDoeAMliuWxU7yNIujThfzM9aueRFlOip5MR2sT6ieMOoW%2FBgYXcTEK9%2FVR%2BZnnCwtcWMqO30PvH5awM0HqoituF9DKeBnfh9oW7EjVd4LN0XjBgdTpgY1uftLPGOxrKjSGObZqdAadb%2FOVkIfINXe17ziqVDKhahfhHBkRSr6r1A6OSgZtqmaVYkUMQqEkB523VV%2BXGO9gtXKR3qwpzg77ObTgmuG7A90ObAy3aMdRTzu1rY3Obmf2MQHwC1wudDmo83I4dSIBpHqei4MQ4rzDty8uiKoWA0fsRFKDg66a4need3OnSDzj0mOOxutVp7hrCOf8hYEGU01Voq85c2orZTdz%2F%2B5zSiRvXSirmt8a1yZNp3IsC0pa0eX3f%2B%2BrZqJgecpkJKrrUEl1Y0wfbB7OSB2nl1RM1v0NIwynou5MIwzOP7zgY6pgHPIq39ds4RoydWmpa6%2BQNStbTDe%2FaquH32UXqnUFikmcP842tkuSkRQpRAXwzfHzayM%2FdEzzKyUMciZfPouzlGf4OuoNkar5GSLbiq9%2BIsqdVdbW4Qca%2FxQ6kJvBFN8ArPPTTswLmS79hObyDhyrOrCx0QrjKeJ%2FTs8SXnfMoaODHKzV89DGNbE7MSlPZGSxllnfH4JgoYq2AYtGFxjjRgylWfU8Rq&X-Amz-Signature=3b9283081c6e3847a97eab3f67af6d030fa759046da93aff673e0261fd70fae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJJBVZ4U%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6nhN6NC8sAYzSupLMefDWIxHtusuUmjMpD6um16nyPAiA%2FcSkx6OaD2nyqCRvygSXbGCJsxytZmBJh13RaN5%2B3qyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNddH9H9GBANZqEQqKtwDZZQmwhFhjJ6IuapuxoADhRSxwC%2BNpwQcq9V6nWVAyAqWw8W0yOZtNRymSSBdOZ%2Bt8IcUMJBLLmzjR0wrakRaFN3k9L1Nka4VDbTAkhc6A%2BH%2FHBuwgU%2F42DQ8KiLuvEz2AzrNGe3kbfT7CohawqlriF9v7NRhBPxC3SQSQrVhS7rKE4UL2K2UDJtF3gkIEonl9AkWuiM7kTrU43mfDoeAMliuWxU7yNIujThfzM9aueRFlOip5MR2sT6ieMOoW%2FBgYXcTEK9%2FVR%2BZnnCwtcWMqO30PvH5awM0HqoituF9DKeBnfh9oW7EjVd4LN0XjBgdTpgY1uftLPGOxrKjSGObZqdAadb%2FOVkIfINXe17ziqVDKhahfhHBkRSr6r1A6OSgZtqmaVYkUMQqEkB523VV%2BXGO9gtXKR3qwpzg77ObTgmuG7A90ObAy3aMdRTzu1rY3Obmf2MQHwC1wudDmo83I4dSIBpHqei4MQ4rzDty8uiKoWA0fsRFKDg66a4need3OnSDzj0mOOxutVp7hrCOf8hYEGU01Voq85c2orZTdz%2F%2B5zSiRvXSirmt8a1yZNp3IsC0pa0eX3f%2B%2BrZqJgecpkJKrrUEl1Y0wfbB7OSB2nl1RM1v0NIwynou5MIwzOP7zgY6pgHPIq39ds4RoydWmpa6%2BQNStbTDe%2FaquH32UXqnUFikmcP842tkuSkRQpRAXwzfHzayM%2FdEzzKyUMciZfPouzlGf4OuoNkar5GSLbiq9%2BIsqdVdbW4Qca%2FxQ6kJvBFN8ArPPTTswLmS79hObyDhyrOrCx0QrjKeJ%2FTs8SXnfMoaODHKzV89DGNbE7MSlPZGSxllnfH4JgoYq2AYtGFxjjRgylWfU8Rq&X-Amz-Signature=d9ebfb5d33de0f0bd6b95cffe38aa541e9c2d238a30e7a7d4f45cd6d35ff6b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
