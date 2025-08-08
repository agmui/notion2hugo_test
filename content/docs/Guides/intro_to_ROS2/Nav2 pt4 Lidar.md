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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHASQH6U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDnGc6MBGHdTFMD5a3t5c2nYggqf%2B8wYBT223voKy1elAIhAIP8wKolANaF%2FJYknshDf%2BtZLm6EgqMKbn5Jh0XT13qjKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfGuIhQKW%2F6Bxlzlgq3AMHYVqGAw82yfdYiPIJnW0uvnMNPzsxrA1s4GATnTUDGzapqa7RUpSPqejYF2bb1MrgOFSvCncIcRw%2FAEZCrlyzb5xB176MnBWevWaiPZoHu%2BjqbFzhNyo6z3R0d0LkKMlQIYfYgP1ifN73Zc0gwjfHwWf73QwDyDlrm8LoRSC6XWv77gN4rztx6Szl%2BhDpkQ7KppoqBZGGYF3pY7A8%2FoVfjBA1VMoXwpRxSjYfVXsPkniV%2FaEwJyKldGLMiXR%2BcvO%2FJEKVZZq4oB3dcfaBjg%2FrUiMibPzgxze7oDGjcJ0tI3wLgngknvfFNZT2EICRo9ZytcUCDzhcyhb%2FKQU2Mw8jRBF9XUMPvESyNbSM6XFzeUGqmEBN6YFv8aSwo41vLH%2F4UlcefLukGA69QketaNf2QvEQsAR7FbLHtfAD9j7%2Bc3kB8DI6kRCFwbxq%2BKkWxTRS8q89IaGcDoRJcztY8bCuwVbI4Oj3HmD6z7U97cuph0gJz7zH%2BaDtuNbGhHBH24O2UAX4HEl4UOAvoiXxsD04LQkmDXmsbLkT0E5iG%2BEj%2FO9GQ4hTqFOURPk7xcyBIsE6XBpxk7fKFj6SgsgDw45MOsSJ%2Ft0iFmop10mywl%2Bquzm5aOhg38o19960sjDzktnEBjqkAS1oSgcQ36aBcmf8ffBAnqphHecAvkDs5a4S0L%2BpJqRhfBfblH9RS%2B7gRalW4gO2hKndmcJJjegREpM1ZSwXUNxaQ9mSJHxEYosC1DmLg216ABkoHMEYd1jzHU1EHQpavFvKxg1C1vbF3exlbu0o6bcI07DxfV9GS12fCn599ZgQ7DmilpP159vUFnR27%2F%2B4kg45h%2FD%2B9xyKRSIaTM0fUfEGej5F&X-Amz-Signature=2b2bb27f437091eb97f6bba67f22408d8208660a440b1134429c0c9c3eaa93b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKOJLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBZ9S2%2BxsNOz1W9jxNMylR3lk38IeeS%2BT2czEsp%2FvplAiBM7GDJfs14dARSkth6ud4WV4CJpMghZ5DSn9y6rlhu3yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1W6xRJ6mN0YVmRNKtwDeUqPPMgpX2nyFj%2Fk1wJHEIN0kDWSfoO68thvKIP8FxmtgkyZZONbjovPqWS8nWz7Jf0Df9Ic3RAvu%2Ft52N5k%2FnaZsmllfdnQgAWceFXIG89qnN59X7qjmUDZV8becsoOB6kwsT%2FGXhdDZwMPSnPBLlwbw2iOqDoHkRWk88KYI8JbeExo0Szk2Qhu3zxpiHuepG46bClXe3%2F5M8sCPQypWhQrwI99WTmFnXg6Zz0Cz8KGVnKL6wM8e1TB8eNiiUQMn21qxNae2oAizLebvKvkdicrz5FDL6PnGBtVJIKmfvw51WBd6HxAQx7IOY0EVEB37Nsj%2BfaCryRjhitwpvCWkdfauM9n2Ky34JylFpCzptXelvBJXf1PIjE3QMp6kVO3%2BrMk6QYpfQQRkmOV6qyF1tAppF%2FhCEo4taK5ti%2B%2B%2FhF3HcNVN0qJiZzaeMO52ijoMX7pH2IrYmbsNIq3hhBwlIkSmKRGi78dGZ8KGz6SPXdqXnvvFXPmAjlakPquGHKUkbTAJR5y2IxxIZtU1RpXJdy4n5Cc0ysyBDN7do9w6NFqlp78oYifqlFEO2IHFygDkwvcGg4NREDbk%2FkpTGXUKIvyNSveezsasC5WRCcWHgmndYLSgcutkapMRvgw25LZxAY6pgGyt59uiYZTj4Y50xPtEU9aPkKxzxRxFTT1j%2FD2Lm44VzoCMdm4oFEL%2B8Ol17XTc0pIHKnT6pV%2B9EITtN5TvjtT27zcfZMPcSyTa52mcyeVjVg5Bq%2Fiac8sZvvU83qO1yQj1HvDHS44I9ZS5UekfQ8iXPK%2BlrUrriT85p70MbcG3Ra0Tuus0l4p5GAZXYPZEd8LVbvckdF5uZsRs72OfhMi7JHFQtE3&X-Amz-Signature=e87a944e2efbb13e0167d95e9a70d3b6d5ce8ae9eb891bc422cc1b5dac6149e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKOJLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBZ9S2%2BxsNOz1W9jxNMylR3lk38IeeS%2BT2czEsp%2FvplAiBM7GDJfs14dARSkth6ud4WV4CJpMghZ5DSn9y6rlhu3yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1W6xRJ6mN0YVmRNKtwDeUqPPMgpX2nyFj%2Fk1wJHEIN0kDWSfoO68thvKIP8FxmtgkyZZONbjovPqWS8nWz7Jf0Df9Ic3RAvu%2Ft52N5k%2FnaZsmllfdnQgAWceFXIG89qnN59X7qjmUDZV8becsoOB6kwsT%2FGXhdDZwMPSnPBLlwbw2iOqDoHkRWk88KYI8JbeExo0Szk2Qhu3zxpiHuepG46bClXe3%2F5M8sCPQypWhQrwI99WTmFnXg6Zz0Cz8KGVnKL6wM8e1TB8eNiiUQMn21qxNae2oAizLebvKvkdicrz5FDL6PnGBtVJIKmfvw51WBd6HxAQx7IOY0EVEB37Nsj%2BfaCryRjhitwpvCWkdfauM9n2Ky34JylFpCzptXelvBJXf1PIjE3QMp6kVO3%2BrMk6QYpfQQRkmOV6qyF1tAppF%2FhCEo4taK5ti%2B%2B%2FhF3HcNVN0qJiZzaeMO52ijoMX7pH2IrYmbsNIq3hhBwlIkSmKRGi78dGZ8KGz6SPXdqXnvvFXPmAjlakPquGHKUkbTAJR5y2IxxIZtU1RpXJdy4n5Cc0ysyBDN7do9w6NFqlp78oYifqlFEO2IHFygDkwvcGg4NREDbk%2FkpTGXUKIvyNSveezsasC5WRCcWHgmndYLSgcutkapMRvgw25LZxAY6pgGyt59uiYZTj4Y50xPtEU9aPkKxzxRxFTT1j%2FD2Lm44VzoCMdm4oFEL%2B8Ol17XTc0pIHKnT6pV%2B9EITtN5TvjtT27zcfZMPcSyTa52mcyeVjVg5Bq%2Fiac8sZvvU83qO1yQj1HvDHS44I9ZS5UekfQ8iXPK%2BlrUrriT85p70MbcG3Ra0Tuus0l4p5GAZXYPZEd8LVbvckdF5uZsRs72OfhMi7JHFQtE3&X-Amz-Signature=b8b1947280b90aea8af0e7fc16b63f363db41b9375cef2a30c3f370c46b7d96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKOJLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBZ9S2%2BxsNOz1W9jxNMylR3lk38IeeS%2BT2czEsp%2FvplAiBM7GDJfs14dARSkth6ud4WV4CJpMghZ5DSn9y6rlhu3yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1W6xRJ6mN0YVmRNKtwDeUqPPMgpX2nyFj%2Fk1wJHEIN0kDWSfoO68thvKIP8FxmtgkyZZONbjovPqWS8nWz7Jf0Df9Ic3RAvu%2Ft52N5k%2FnaZsmllfdnQgAWceFXIG89qnN59X7qjmUDZV8becsoOB6kwsT%2FGXhdDZwMPSnPBLlwbw2iOqDoHkRWk88KYI8JbeExo0Szk2Qhu3zxpiHuepG46bClXe3%2F5M8sCPQypWhQrwI99WTmFnXg6Zz0Cz8KGVnKL6wM8e1TB8eNiiUQMn21qxNae2oAizLebvKvkdicrz5FDL6PnGBtVJIKmfvw51WBd6HxAQx7IOY0EVEB37Nsj%2BfaCryRjhitwpvCWkdfauM9n2Ky34JylFpCzptXelvBJXf1PIjE3QMp6kVO3%2BrMk6QYpfQQRkmOV6qyF1tAppF%2FhCEo4taK5ti%2B%2B%2FhF3HcNVN0qJiZzaeMO52ijoMX7pH2IrYmbsNIq3hhBwlIkSmKRGi78dGZ8KGz6SPXdqXnvvFXPmAjlakPquGHKUkbTAJR5y2IxxIZtU1RpXJdy4n5Cc0ysyBDN7do9w6NFqlp78oYifqlFEO2IHFygDkwvcGg4NREDbk%2FkpTGXUKIvyNSveezsasC5WRCcWHgmndYLSgcutkapMRvgw25LZxAY6pgGyt59uiYZTj4Y50xPtEU9aPkKxzxRxFTT1j%2FD2Lm44VzoCMdm4oFEL%2B8Ol17XTc0pIHKnT6pV%2B9EITtN5TvjtT27zcfZMPcSyTa52mcyeVjVg5Bq%2Fiac8sZvvU83qO1yQj1HvDHS44I9ZS5UekfQ8iXPK%2BlrUrriT85p70MbcG3Ra0Tuus0l4p5GAZXYPZEd8LVbvckdF5uZsRs72OfhMi7JHFQtE3&X-Amz-Signature=28c467a8c160adbb5e01002959328c492262e399aa083e536794da74570450ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKOJLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBZ9S2%2BxsNOz1W9jxNMylR3lk38IeeS%2BT2czEsp%2FvplAiBM7GDJfs14dARSkth6ud4WV4CJpMghZ5DSn9y6rlhu3yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1W6xRJ6mN0YVmRNKtwDeUqPPMgpX2nyFj%2Fk1wJHEIN0kDWSfoO68thvKIP8FxmtgkyZZONbjovPqWS8nWz7Jf0Df9Ic3RAvu%2Ft52N5k%2FnaZsmllfdnQgAWceFXIG89qnN59X7qjmUDZV8becsoOB6kwsT%2FGXhdDZwMPSnPBLlwbw2iOqDoHkRWk88KYI8JbeExo0Szk2Qhu3zxpiHuepG46bClXe3%2F5M8sCPQypWhQrwI99WTmFnXg6Zz0Cz8KGVnKL6wM8e1TB8eNiiUQMn21qxNae2oAizLebvKvkdicrz5FDL6PnGBtVJIKmfvw51WBd6HxAQx7IOY0EVEB37Nsj%2BfaCryRjhitwpvCWkdfauM9n2Ky34JylFpCzptXelvBJXf1PIjE3QMp6kVO3%2BrMk6QYpfQQRkmOV6qyF1tAppF%2FhCEo4taK5ti%2B%2B%2FhF3HcNVN0qJiZzaeMO52ijoMX7pH2IrYmbsNIq3hhBwlIkSmKRGi78dGZ8KGz6SPXdqXnvvFXPmAjlakPquGHKUkbTAJR5y2IxxIZtU1RpXJdy4n5Cc0ysyBDN7do9w6NFqlp78oYifqlFEO2IHFygDkwvcGg4NREDbk%2FkpTGXUKIvyNSveezsasC5WRCcWHgmndYLSgcutkapMRvgw25LZxAY6pgGyt59uiYZTj4Y50xPtEU9aPkKxzxRxFTT1j%2FD2Lm44VzoCMdm4oFEL%2B8Ol17XTc0pIHKnT6pV%2B9EITtN5TvjtT27zcfZMPcSyTa52mcyeVjVg5Bq%2Fiac8sZvvU83qO1yQj1HvDHS44I9ZS5UekfQ8iXPK%2BlrUrriT85p70MbcG3Ra0Tuus0l4p5GAZXYPZEd8LVbvckdF5uZsRs72OfhMi7JHFQtE3&X-Amz-Signature=6319e70ec57720ff973f4422fae523dc05985a39f6fad80b872f5046e8ade5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKOJLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBZ9S2%2BxsNOz1W9jxNMylR3lk38IeeS%2BT2czEsp%2FvplAiBM7GDJfs14dARSkth6ud4WV4CJpMghZ5DSn9y6rlhu3yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1W6xRJ6mN0YVmRNKtwDeUqPPMgpX2nyFj%2Fk1wJHEIN0kDWSfoO68thvKIP8FxmtgkyZZONbjovPqWS8nWz7Jf0Df9Ic3RAvu%2Ft52N5k%2FnaZsmllfdnQgAWceFXIG89qnN59X7qjmUDZV8becsoOB6kwsT%2FGXhdDZwMPSnPBLlwbw2iOqDoHkRWk88KYI8JbeExo0Szk2Qhu3zxpiHuepG46bClXe3%2F5M8sCPQypWhQrwI99WTmFnXg6Zz0Cz8KGVnKL6wM8e1TB8eNiiUQMn21qxNae2oAizLebvKvkdicrz5FDL6PnGBtVJIKmfvw51WBd6HxAQx7IOY0EVEB37Nsj%2BfaCryRjhitwpvCWkdfauM9n2Ky34JylFpCzptXelvBJXf1PIjE3QMp6kVO3%2BrMk6QYpfQQRkmOV6qyF1tAppF%2FhCEo4taK5ti%2B%2B%2FhF3HcNVN0qJiZzaeMO52ijoMX7pH2IrYmbsNIq3hhBwlIkSmKRGi78dGZ8KGz6SPXdqXnvvFXPmAjlakPquGHKUkbTAJR5y2IxxIZtU1RpXJdy4n5Cc0ysyBDN7do9w6NFqlp78oYifqlFEO2IHFygDkwvcGg4NREDbk%2FkpTGXUKIvyNSveezsasC5WRCcWHgmndYLSgcutkapMRvgw25LZxAY6pgGyt59uiYZTj4Y50xPtEU9aPkKxzxRxFTT1j%2FD2Lm44VzoCMdm4oFEL%2B8Ol17XTc0pIHKnT6pV%2B9EITtN5TvjtT27zcfZMPcSyTa52mcyeVjVg5Bq%2Fiac8sZvvU83qO1yQj1HvDHS44I9ZS5UekfQ8iXPK%2BlrUrriT85p70MbcG3Ra0Tuus0l4p5GAZXYPZEd8LVbvckdF5uZsRs72OfhMi7JHFQtE3&X-Amz-Signature=752a0af7f61a8c6e0b0a4dbe068c48daf7beab20e09d1c7a39097456d4048584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKOJLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBZ9S2%2BxsNOz1W9jxNMylR3lk38IeeS%2BT2czEsp%2FvplAiBM7GDJfs14dARSkth6ud4WV4CJpMghZ5DSn9y6rlhu3yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1W6xRJ6mN0YVmRNKtwDeUqPPMgpX2nyFj%2Fk1wJHEIN0kDWSfoO68thvKIP8FxmtgkyZZONbjovPqWS8nWz7Jf0Df9Ic3RAvu%2Ft52N5k%2FnaZsmllfdnQgAWceFXIG89qnN59X7qjmUDZV8becsoOB6kwsT%2FGXhdDZwMPSnPBLlwbw2iOqDoHkRWk88KYI8JbeExo0Szk2Qhu3zxpiHuepG46bClXe3%2F5M8sCPQypWhQrwI99WTmFnXg6Zz0Cz8KGVnKL6wM8e1TB8eNiiUQMn21qxNae2oAizLebvKvkdicrz5FDL6PnGBtVJIKmfvw51WBd6HxAQx7IOY0EVEB37Nsj%2BfaCryRjhitwpvCWkdfauM9n2Ky34JylFpCzptXelvBJXf1PIjE3QMp6kVO3%2BrMk6QYpfQQRkmOV6qyF1tAppF%2FhCEo4taK5ti%2B%2B%2FhF3HcNVN0qJiZzaeMO52ijoMX7pH2IrYmbsNIq3hhBwlIkSmKRGi78dGZ8KGz6SPXdqXnvvFXPmAjlakPquGHKUkbTAJR5y2IxxIZtU1RpXJdy4n5Cc0ysyBDN7do9w6NFqlp78oYifqlFEO2IHFygDkwvcGg4NREDbk%2FkpTGXUKIvyNSveezsasC5WRCcWHgmndYLSgcutkapMRvgw25LZxAY6pgGyt59uiYZTj4Y50xPtEU9aPkKxzxRxFTT1j%2FD2Lm44VzoCMdm4oFEL%2B8Ol17XTc0pIHKnT6pV%2B9EITtN5TvjtT27zcfZMPcSyTa52mcyeVjVg5Bq%2Fiac8sZvvU83qO1yQj1HvDHS44I9ZS5UekfQ8iXPK%2BlrUrriT85p70MbcG3Ra0Tuus0l4p5GAZXYPZEd8LVbvckdF5uZsRs72OfhMi7JHFQtE3&X-Amz-Signature=8fefcc7cc3ca83e07b7621fcbecbb033bd1229c075db5f587795cb5037f73274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKOJLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBZ9S2%2BxsNOz1W9jxNMylR3lk38IeeS%2BT2czEsp%2FvplAiBM7GDJfs14dARSkth6ud4WV4CJpMghZ5DSn9y6rlhu3yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1W6xRJ6mN0YVmRNKtwDeUqPPMgpX2nyFj%2Fk1wJHEIN0kDWSfoO68thvKIP8FxmtgkyZZONbjovPqWS8nWz7Jf0Df9Ic3RAvu%2Ft52N5k%2FnaZsmllfdnQgAWceFXIG89qnN59X7qjmUDZV8becsoOB6kwsT%2FGXhdDZwMPSnPBLlwbw2iOqDoHkRWk88KYI8JbeExo0Szk2Qhu3zxpiHuepG46bClXe3%2F5M8sCPQypWhQrwI99WTmFnXg6Zz0Cz8KGVnKL6wM8e1TB8eNiiUQMn21qxNae2oAizLebvKvkdicrz5FDL6PnGBtVJIKmfvw51WBd6HxAQx7IOY0EVEB37Nsj%2BfaCryRjhitwpvCWkdfauM9n2Ky34JylFpCzptXelvBJXf1PIjE3QMp6kVO3%2BrMk6QYpfQQRkmOV6qyF1tAppF%2FhCEo4taK5ti%2B%2B%2FhF3HcNVN0qJiZzaeMO52ijoMX7pH2IrYmbsNIq3hhBwlIkSmKRGi78dGZ8KGz6SPXdqXnvvFXPmAjlakPquGHKUkbTAJR5y2IxxIZtU1RpXJdy4n5Cc0ysyBDN7do9w6NFqlp78oYifqlFEO2IHFygDkwvcGg4NREDbk%2FkpTGXUKIvyNSveezsasC5WRCcWHgmndYLSgcutkapMRvgw25LZxAY6pgGyt59uiYZTj4Y50xPtEU9aPkKxzxRxFTT1j%2FD2Lm44VzoCMdm4oFEL%2B8Ol17XTc0pIHKnT6pV%2B9EITtN5TvjtT27zcfZMPcSyTa52mcyeVjVg5Bq%2Fiac8sZvvU83qO1yQj1HvDHS44I9ZS5UekfQ8iXPK%2BlrUrriT85p70MbcG3Ra0Tuus0l4p5GAZXYPZEd8LVbvckdF5uZsRs72OfhMi7JHFQtE3&X-Amz-Signature=16781f1686cd2d322a7a61b3c899d1b482dd9626ba96bba19d45e80c60da59f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKOJLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBZ9S2%2BxsNOz1W9jxNMylR3lk38IeeS%2BT2czEsp%2FvplAiBM7GDJfs14dARSkth6ud4WV4CJpMghZ5DSn9y6rlhu3yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1W6xRJ6mN0YVmRNKtwDeUqPPMgpX2nyFj%2Fk1wJHEIN0kDWSfoO68thvKIP8FxmtgkyZZONbjovPqWS8nWz7Jf0Df9Ic3RAvu%2Ft52N5k%2FnaZsmllfdnQgAWceFXIG89qnN59X7qjmUDZV8becsoOB6kwsT%2FGXhdDZwMPSnPBLlwbw2iOqDoHkRWk88KYI8JbeExo0Szk2Qhu3zxpiHuepG46bClXe3%2F5M8sCPQypWhQrwI99WTmFnXg6Zz0Cz8KGVnKL6wM8e1TB8eNiiUQMn21qxNae2oAizLebvKvkdicrz5FDL6PnGBtVJIKmfvw51WBd6HxAQx7IOY0EVEB37Nsj%2BfaCryRjhitwpvCWkdfauM9n2Ky34JylFpCzptXelvBJXf1PIjE3QMp6kVO3%2BrMk6QYpfQQRkmOV6qyF1tAppF%2FhCEo4taK5ti%2B%2B%2FhF3HcNVN0qJiZzaeMO52ijoMX7pH2IrYmbsNIq3hhBwlIkSmKRGi78dGZ8KGz6SPXdqXnvvFXPmAjlakPquGHKUkbTAJR5y2IxxIZtU1RpXJdy4n5Cc0ysyBDN7do9w6NFqlp78oYifqlFEO2IHFygDkwvcGg4NREDbk%2FkpTGXUKIvyNSveezsasC5WRCcWHgmndYLSgcutkapMRvgw25LZxAY6pgGyt59uiYZTj4Y50xPtEU9aPkKxzxRxFTT1j%2FD2Lm44VzoCMdm4oFEL%2B8Ol17XTc0pIHKnT6pV%2B9EITtN5TvjtT27zcfZMPcSyTa52mcyeVjVg5Bq%2Fiac8sZvvU83qO1yQj1HvDHS44I9ZS5UekfQ8iXPK%2BlrUrriT85p70MbcG3Ra0Tuus0l4p5GAZXYPZEd8LVbvckdF5uZsRs72OfhMi7JHFQtE3&X-Amz-Signature=a33e42a5e00715f1ebd55de6eec3e318d1583730a89e27427d452d828c02ab21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKOJLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBZ9S2%2BxsNOz1W9jxNMylR3lk38IeeS%2BT2czEsp%2FvplAiBM7GDJfs14dARSkth6ud4WV4CJpMghZ5DSn9y6rlhu3yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1W6xRJ6mN0YVmRNKtwDeUqPPMgpX2nyFj%2Fk1wJHEIN0kDWSfoO68thvKIP8FxmtgkyZZONbjovPqWS8nWz7Jf0Df9Ic3RAvu%2Ft52N5k%2FnaZsmllfdnQgAWceFXIG89qnN59X7qjmUDZV8becsoOB6kwsT%2FGXhdDZwMPSnPBLlwbw2iOqDoHkRWk88KYI8JbeExo0Szk2Qhu3zxpiHuepG46bClXe3%2F5M8sCPQypWhQrwI99WTmFnXg6Zz0Cz8KGVnKL6wM8e1TB8eNiiUQMn21qxNae2oAizLebvKvkdicrz5FDL6PnGBtVJIKmfvw51WBd6HxAQx7IOY0EVEB37Nsj%2BfaCryRjhitwpvCWkdfauM9n2Ky34JylFpCzptXelvBJXf1PIjE3QMp6kVO3%2BrMk6QYpfQQRkmOV6qyF1tAppF%2FhCEo4taK5ti%2B%2B%2FhF3HcNVN0qJiZzaeMO52ijoMX7pH2IrYmbsNIq3hhBwlIkSmKRGi78dGZ8KGz6SPXdqXnvvFXPmAjlakPquGHKUkbTAJR5y2IxxIZtU1RpXJdy4n5Cc0ysyBDN7do9w6NFqlp78oYifqlFEO2IHFygDkwvcGg4NREDbk%2FkpTGXUKIvyNSveezsasC5WRCcWHgmndYLSgcutkapMRvgw25LZxAY6pgGyt59uiYZTj4Y50xPtEU9aPkKxzxRxFTT1j%2FD2Lm44VzoCMdm4oFEL%2B8Ol17XTc0pIHKnT6pV%2B9EITtN5TvjtT27zcfZMPcSyTa52mcyeVjVg5Bq%2Fiac8sZvvU83qO1yQj1HvDHS44I9ZS5UekfQ8iXPK%2BlrUrriT85p70MbcG3Ra0Tuus0l4p5GAZXYPZEd8LVbvckdF5uZsRs72OfhMi7JHFQtE3&X-Amz-Signature=28e0ef5a6f92226143bdd8c6c6e64df1f72a05d4bda7e73e9c9828db796ac511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQKOJLTC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGBZ9S2%2BxsNOz1W9jxNMylR3lk38IeeS%2BT2czEsp%2FvplAiBM7GDJfs14dARSkth6ud4WV4CJpMghZ5DSn9y6rlhu3yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ1W6xRJ6mN0YVmRNKtwDeUqPPMgpX2nyFj%2Fk1wJHEIN0kDWSfoO68thvKIP8FxmtgkyZZONbjovPqWS8nWz7Jf0Df9Ic3RAvu%2Ft52N5k%2FnaZsmllfdnQgAWceFXIG89qnN59X7qjmUDZV8becsoOB6kwsT%2FGXhdDZwMPSnPBLlwbw2iOqDoHkRWk88KYI8JbeExo0Szk2Qhu3zxpiHuepG46bClXe3%2F5M8sCPQypWhQrwI99WTmFnXg6Zz0Cz8KGVnKL6wM8e1TB8eNiiUQMn21qxNae2oAizLebvKvkdicrz5FDL6PnGBtVJIKmfvw51WBd6HxAQx7IOY0EVEB37Nsj%2BfaCryRjhitwpvCWkdfauM9n2Ky34JylFpCzptXelvBJXf1PIjE3QMp6kVO3%2BrMk6QYpfQQRkmOV6qyF1tAppF%2FhCEo4taK5ti%2B%2B%2FhF3HcNVN0qJiZzaeMO52ijoMX7pH2IrYmbsNIq3hhBwlIkSmKRGi78dGZ8KGz6SPXdqXnvvFXPmAjlakPquGHKUkbTAJR5y2IxxIZtU1RpXJdy4n5Cc0ysyBDN7do9w6NFqlp78oYifqlFEO2IHFygDkwvcGg4NREDbk%2FkpTGXUKIvyNSveezsasC5WRCcWHgmndYLSgcutkapMRvgw25LZxAY6pgGyt59uiYZTj4Y50xPtEU9aPkKxzxRxFTT1j%2FD2Lm44VzoCMdm4oFEL%2B8Ol17XTc0pIHKnT6pV%2B9EITtN5TvjtT27zcfZMPcSyTa52mcyeVjVg5Bq%2Fiac8sZvvU83qO1yQj1HvDHS44I9ZS5UekfQ8iXPK%2BlrUrriT85p70MbcG3Ra0Tuus0l4p5GAZXYPZEd8LVbvckdF5uZsRs72OfhMi7JHFQtE3&X-Amz-Signature=6319e70ec57720ff973f4422fae523dc05985a39f6fad80b872f5046e8ade5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
