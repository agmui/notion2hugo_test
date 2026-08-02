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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEWJUJZ%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCZHa6XFNaG%2FSk5ToItflydaMOE%2BNWlssqzYgEYDtOxOAIhAJ9ZzN4zRGi3qzmDPmURw5YP6nMhXFgY0Zrc1TAfRmyfKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvNZqnaRYc60vCC8Aq3AOXL438cM4SG%2BaJOeXy234YChUV54qJUS9ttlHN2IpDfGpDLJZBYHSh6D3kBbqJBfTooWD%2FiJy5s8Tb%2FMxQmcj81Nkm1Xs5cxZL%2FycRWCdYL1GNl6e0duPiUj5de3bUjGicYuzG6n4L%2F3ik1qdvTl7uJxyKO2UEyNjF2pUczJKWOwmEXi2Yn7MgBTh%2BwUVEvLLM3EfPPHqRRBe4xuzqdMzxqO1BTrwG70xJ4qO9NEtoXpwp4hEw08iJhF92vGDdbbtVZw0NesDCnkN%2BCmqH6rZU9mZXKUkZedd7o4e0HAnXRIc9U2et51yor5zo9f98N6iQcVYv%2BylQj6UjjroGZnZe6K1KD%2F4Ikl3MZzYsWkKwVPkJyE6QdwCahAgsIk47iU%2F39qwFopsVy2I38FjBVw4jywSczr%2BVhezxN4Vmur1VdTosnqb%2FLu6YHwlFKsJU%2FyLcRl5HvplzhBM9GfDxShK1y1QHr73sPAMkhtFBd7%2FZIkLUFmbSa%2BWgy7DBOV%2B747Xib2dKZnv%2B26EYve0e0WYR5Uquo%2FImUPOxUwkrzp7ZroKzmvIjjWk0NsViglM35Y%2FkGo3qVYU0VDCroRKK8xj%2B%2Bjt26hxiIyulsW0e7JFofSDZpdCwxMcdUo3FxzDIwrrTBjqkAQHVUeOGowf7fJovtqN6I9gwtBwhpd5iAcIlmefmrt23iQVvaT5q%2BUinW777pPtpNK48pbE99eWMWfhd%2BdI83oWcPXmfknbAU1fYpl7Ph5ty48DXlFwm4FarmCu%2F5THLkA888Zn5%2Bt8tWlvnq%2BpobcILQTucWD2XlGW9yJ4AcYPvgycz2HPYv6GqpXsAu9LE1yOSapwV0tYBk%2BWAXaFCe%2ByPK%2Bdj&X-Amz-Signature=0634402ed6c5f78d6192fc02b9248baf6e7221a6279a3970dc816102630628c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVOGZEL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD3DGTXszOTXDtAw1EIys4AVgY0VoENHkCco54Pxw16oAIhAJD3Dor6J5uczn1%2FWng0q6oGPwCgJvy2tmpzC3XqltoPKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmeJOBwMz%2FOCKb0Eq3AOJbDO2ghyaupBDzxlgDV44Cf9I%2BEgxA8sHyahYrBhdQVtn2zB947nJZ75AMT2ZHjGgJcsZRI25hrQ3ZUPkE31d9X4Ojh4wTNywLfo6O6uFepInRb%2B3dNDQORru%2BfmjuONO5OpuGevmGlz7ZMYWCpn2o0WX%2BYi2tbCvkUnPDbJp2hEXp%2BULmr2Q%2FcvzbgYGgqBce%2F%2F98li%2BGF6VAHII68aRariqLzKg4BgEZElZDSV09eK7Jk3%2FoUpmE5Spk7XkHSvVfzuVUsh97SIHY%2BUqakDc15B4R3QfW8BoYU7UVfQXUVxYXFnbZet6lXUte6CTsDWhr9UkFI0NlHTFpYnHBOkmn7bz4colTclrPWmvAwGTw0Of8OjaUV4V4mLYzTwBCnoVZfpiSL4Cf8gozxcsC7DbthAAA880qURkDWa75lIG68j0ozaAeZ5DIvJPoLyEohCq3ZjVQotJAktZIOmvjKK9g9lIy1f1aa%2FWzKFX%2FVRvTtKwwcbyOiu8Nyzdh0LbLkHjzXxoTiBt2YBU0%2FMTEN%2FUOEqgwNpmnRV%2BGz1oM8xH7c8a5kBdECFcMyNlV%2BH9m47YfkMni6eeyFw0%2BOzNrEDZRb9eKN%2BFqSni6M77hJUtoyFR25%2FfNEfxxoyDMjD9wLrTBjqkAUKnYl1g5cp4Ie%2F1oKAwxhb8cfUARAPOnvS2gPk%2FZuc93Dj34RoeLo0JKe5R3lyDh6nObxSPWrM5POVqEkTgIqv9Kwgs%2FjSHH1GmCjIDdRvD6Sf%2FhMZRIcB7i%2FMSMqYGcI2gJNXeS4%2FwQc%2BQ4xfk1dzwKNClLSqpeHPXJir6PyRryY%2FFtlt6v2vGwIQ6%2BmSptrnV4gTullzyunax4KEKuiYtkvBm&X-Amz-Signature=c0673bf59ab1c067b25908565e5c68f289eb755568e8f9363f0952a16571f6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVOGZEL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD3DGTXszOTXDtAw1EIys4AVgY0VoENHkCco54Pxw16oAIhAJD3Dor6J5uczn1%2FWng0q6oGPwCgJvy2tmpzC3XqltoPKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmeJOBwMz%2FOCKb0Eq3AOJbDO2ghyaupBDzxlgDV44Cf9I%2BEgxA8sHyahYrBhdQVtn2zB947nJZ75AMT2ZHjGgJcsZRI25hrQ3ZUPkE31d9X4Ojh4wTNywLfo6O6uFepInRb%2B3dNDQORru%2BfmjuONO5OpuGevmGlz7ZMYWCpn2o0WX%2BYi2tbCvkUnPDbJp2hEXp%2BULmr2Q%2FcvzbgYGgqBce%2F%2F98li%2BGF6VAHII68aRariqLzKg4BgEZElZDSV09eK7Jk3%2FoUpmE5Spk7XkHSvVfzuVUsh97SIHY%2BUqakDc15B4R3QfW8BoYU7UVfQXUVxYXFnbZet6lXUte6CTsDWhr9UkFI0NlHTFpYnHBOkmn7bz4colTclrPWmvAwGTw0Of8OjaUV4V4mLYzTwBCnoVZfpiSL4Cf8gozxcsC7DbthAAA880qURkDWa75lIG68j0ozaAeZ5DIvJPoLyEohCq3ZjVQotJAktZIOmvjKK9g9lIy1f1aa%2FWzKFX%2FVRvTtKwwcbyOiu8Nyzdh0LbLkHjzXxoTiBt2YBU0%2FMTEN%2FUOEqgwNpmnRV%2BGz1oM8xH7c8a5kBdECFcMyNlV%2BH9m47YfkMni6eeyFw0%2BOzNrEDZRb9eKN%2BFqSni6M77hJUtoyFR25%2FfNEfxxoyDMjD9wLrTBjqkAUKnYl1g5cp4Ie%2F1oKAwxhb8cfUARAPOnvS2gPk%2FZuc93Dj34RoeLo0JKe5R3lyDh6nObxSPWrM5POVqEkTgIqv9Kwgs%2FjSHH1GmCjIDdRvD6Sf%2FhMZRIcB7i%2FMSMqYGcI2gJNXeS4%2FwQc%2BQ4xfk1dzwKNClLSqpeHPXJir6PyRryY%2FFtlt6v2vGwIQ6%2BmSptrnV4gTullzyunax4KEKuiYtkvBm&X-Amz-Signature=bbdf2340c240d8986e81154dc4b6b1bf1167b46893a632718f832a678a8d0c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVOGZEL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD3DGTXszOTXDtAw1EIys4AVgY0VoENHkCco54Pxw16oAIhAJD3Dor6J5uczn1%2FWng0q6oGPwCgJvy2tmpzC3XqltoPKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmeJOBwMz%2FOCKb0Eq3AOJbDO2ghyaupBDzxlgDV44Cf9I%2BEgxA8sHyahYrBhdQVtn2zB947nJZ75AMT2ZHjGgJcsZRI25hrQ3ZUPkE31d9X4Ojh4wTNywLfo6O6uFepInRb%2B3dNDQORru%2BfmjuONO5OpuGevmGlz7ZMYWCpn2o0WX%2BYi2tbCvkUnPDbJp2hEXp%2BULmr2Q%2FcvzbgYGgqBce%2F%2F98li%2BGF6VAHII68aRariqLzKg4BgEZElZDSV09eK7Jk3%2FoUpmE5Spk7XkHSvVfzuVUsh97SIHY%2BUqakDc15B4R3QfW8BoYU7UVfQXUVxYXFnbZet6lXUte6CTsDWhr9UkFI0NlHTFpYnHBOkmn7bz4colTclrPWmvAwGTw0Of8OjaUV4V4mLYzTwBCnoVZfpiSL4Cf8gozxcsC7DbthAAA880qURkDWa75lIG68j0ozaAeZ5DIvJPoLyEohCq3ZjVQotJAktZIOmvjKK9g9lIy1f1aa%2FWzKFX%2FVRvTtKwwcbyOiu8Nyzdh0LbLkHjzXxoTiBt2YBU0%2FMTEN%2FUOEqgwNpmnRV%2BGz1oM8xH7c8a5kBdECFcMyNlV%2BH9m47YfkMni6eeyFw0%2BOzNrEDZRb9eKN%2BFqSni6M77hJUtoyFR25%2FfNEfxxoyDMjD9wLrTBjqkAUKnYl1g5cp4Ie%2F1oKAwxhb8cfUARAPOnvS2gPk%2FZuc93Dj34RoeLo0JKe5R3lyDh6nObxSPWrM5POVqEkTgIqv9Kwgs%2FjSHH1GmCjIDdRvD6Sf%2FhMZRIcB7i%2FMSMqYGcI2gJNXeS4%2FwQc%2BQ4xfk1dzwKNClLSqpeHPXJir6PyRryY%2FFtlt6v2vGwIQ6%2BmSptrnV4gTullzyunax4KEKuiYtkvBm&X-Amz-Signature=b08b0af8a7427134636399a026b84d0dfdd0bcecc99df96ee36d9bb098cf1db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVOGZEL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD3DGTXszOTXDtAw1EIys4AVgY0VoENHkCco54Pxw16oAIhAJD3Dor6J5uczn1%2FWng0q6oGPwCgJvy2tmpzC3XqltoPKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmeJOBwMz%2FOCKb0Eq3AOJbDO2ghyaupBDzxlgDV44Cf9I%2BEgxA8sHyahYrBhdQVtn2zB947nJZ75AMT2ZHjGgJcsZRI25hrQ3ZUPkE31d9X4Ojh4wTNywLfo6O6uFepInRb%2B3dNDQORru%2BfmjuONO5OpuGevmGlz7ZMYWCpn2o0WX%2BYi2tbCvkUnPDbJp2hEXp%2BULmr2Q%2FcvzbgYGgqBce%2F%2F98li%2BGF6VAHII68aRariqLzKg4BgEZElZDSV09eK7Jk3%2FoUpmE5Spk7XkHSvVfzuVUsh97SIHY%2BUqakDc15B4R3QfW8BoYU7UVfQXUVxYXFnbZet6lXUte6CTsDWhr9UkFI0NlHTFpYnHBOkmn7bz4colTclrPWmvAwGTw0Of8OjaUV4V4mLYzTwBCnoVZfpiSL4Cf8gozxcsC7DbthAAA880qURkDWa75lIG68j0ozaAeZ5DIvJPoLyEohCq3ZjVQotJAktZIOmvjKK9g9lIy1f1aa%2FWzKFX%2FVRvTtKwwcbyOiu8Nyzdh0LbLkHjzXxoTiBt2YBU0%2FMTEN%2FUOEqgwNpmnRV%2BGz1oM8xH7c8a5kBdECFcMyNlV%2BH9m47YfkMni6eeyFw0%2BOzNrEDZRb9eKN%2BFqSni6M77hJUtoyFR25%2FfNEfxxoyDMjD9wLrTBjqkAUKnYl1g5cp4Ie%2F1oKAwxhb8cfUARAPOnvS2gPk%2FZuc93Dj34RoeLo0JKe5R3lyDh6nObxSPWrM5POVqEkTgIqv9Kwgs%2FjSHH1GmCjIDdRvD6Sf%2FhMZRIcB7i%2FMSMqYGcI2gJNXeS4%2FwQc%2BQ4xfk1dzwKNClLSqpeHPXJir6PyRryY%2FFtlt6v2vGwIQ6%2BmSptrnV4gTullzyunax4KEKuiYtkvBm&X-Amz-Signature=8313df309ef58ace1e5f0550fae266a01c9e85b57a7b026b86d65557c611b15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVOGZEL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD3DGTXszOTXDtAw1EIys4AVgY0VoENHkCco54Pxw16oAIhAJD3Dor6J5uczn1%2FWng0q6oGPwCgJvy2tmpzC3XqltoPKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmeJOBwMz%2FOCKb0Eq3AOJbDO2ghyaupBDzxlgDV44Cf9I%2BEgxA8sHyahYrBhdQVtn2zB947nJZ75AMT2ZHjGgJcsZRI25hrQ3ZUPkE31d9X4Ojh4wTNywLfo6O6uFepInRb%2B3dNDQORru%2BfmjuONO5OpuGevmGlz7ZMYWCpn2o0WX%2BYi2tbCvkUnPDbJp2hEXp%2BULmr2Q%2FcvzbgYGgqBce%2F%2F98li%2BGF6VAHII68aRariqLzKg4BgEZElZDSV09eK7Jk3%2FoUpmE5Spk7XkHSvVfzuVUsh97SIHY%2BUqakDc15B4R3QfW8BoYU7UVfQXUVxYXFnbZet6lXUte6CTsDWhr9UkFI0NlHTFpYnHBOkmn7bz4colTclrPWmvAwGTw0Of8OjaUV4V4mLYzTwBCnoVZfpiSL4Cf8gozxcsC7DbthAAA880qURkDWa75lIG68j0ozaAeZ5DIvJPoLyEohCq3ZjVQotJAktZIOmvjKK9g9lIy1f1aa%2FWzKFX%2FVRvTtKwwcbyOiu8Nyzdh0LbLkHjzXxoTiBt2YBU0%2FMTEN%2FUOEqgwNpmnRV%2BGz1oM8xH7c8a5kBdECFcMyNlV%2BH9m47YfkMni6eeyFw0%2BOzNrEDZRb9eKN%2BFqSni6M77hJUtoyFR25%2FfNEfxxoyDMjD9wLrTBjqkAUKnYl1g5cp4Ie%2F1oKAwxhb8cfUARAPOnvS2gPk%2FZuc93Dj34RoeLo0JKe5R3lyDh6nObxSPWrM5POVqEkTgIqv9Kwgs%2FjSHH1GmCjIDdRvD6Sf%2FhMZRIcB7i%2FMSMqYGcI2gJNXeS4%2FwQc%2BQ4xfk1dzwKNClLSqpeHPXJir6PyRryY%2FFtlt6v2vGwIQ6%2BmSptrnV4gTullzyunax4KEKuiYtkvBm&X-Amz-Signature=b325d2ce2ae86220057de7bbc0251102a9d7d1b193303a969efd7f44da860e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVOGZEL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD3DGTXszOTXDtAw1EIys4AVgY0VoENHkCco54Pxw16oAIhAJD3Dor6J5uczn1%2FWng0q6oGPwCgJvy2tmpzC3XqltoPKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmeJOBwMz%2FOCKb0Eq3AOJbDO2ghyaupBDzxlgDV44Cf9I%2BEgxA8sHyahYrBhdQVtn2zB947nJZ75AMT2ZHjGgJcsZRI25hrQ3ZUPkE31d9X4Ojh4wTNywLfo6O6uFepInRb%2B3dNDQORru%2BfmjuONO5OpuGevmGlz7ZMYWCpn2o0WX%2BYi2tbCvkUnPDbJp2hEXp%2BULmr2Q%2FcvzbgYGgqBce%2F%2F98li%2BGF6VAHII68aRariqLzKg4BgEZElZDSV09eK7Jk3%2FoUpmE5Spk7XkHSvVfzuVUsh97SIHY%2BUqakDc15B4R3QfW8BoYU7UVfQXUVxYXFnbZet6lXUte6CTsDWhr9UkFI0NlHTFpYnHBOkmn7bz4colTclrPWmvAwGTw0Of8OjaUV4V4mLYzTwBCnoVZfpiSL4Cf8gozxcsC7DbthAAA880qURkDWa75lIG68j0ozaAeZ5DIvJPoLyEohCq3ZjVQotJAktZIOmvjKK9g9lIy1f1aa%2FWzKFX%2FVRvTtKwwcbyOiu8Nyzdh0LbLkHjzXxoTiBt2YBU0%2FMTEN%2FUOEqgwNpmnRV%2BGz1oM8xH7c8a5kBdECFcMyNlV%2BH9m47YfkMni6eeyFw0%2BOzNrEDZRb9eKN%2BFqSni6M77hJUtoyFR25%2FfNEfxxoyDMjD9wLrTBjqkAUKnYl1g5cp4Ie%2F1oKAwxhb8cfUARAPOnvS2gPk%2FZuc93Dj34RoeLo0JKe5R3lyDh6nObxSPWrM5POVqEkTgIqv9Kwgs%2FjSHH1GmCjIDdRvD6Sf%2FhMZRIcB7i%2FMSMqYGcI2gJNXeS4%2FwQc%2BQ4xfk1dzwKNClLSqpeHPXJir6PyRryY%2FFtlt6v2vGwIQ6%2BmSptrnV4gTullzyunax4KEKuiYtkvBm&X-Amz-Signature=795b69a6267ce69dcfdfcd57277a993e4f2d718e8ec63030c7ba28599df71dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVOGZEL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD3DGTXszOTXDtAw1EIys4AVgY0VoENHkCco54Pxw16oAIhAJD3Dor6J5uczn1%2FWng0q6oGPwCgJvy2tmpzC3XqltoPKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmeJOBwMz%2FOCKb0Eq3AOJbDO2ghyaupBDzxlgDV44Cf9I%2BEgxA8sHyahYrBhdQVtn2zB947nJZ75AMT2ZHjGgJcsZRI25hrQ3ZUPkE31d9X4Ojh4wTNywLfo6O6uFepInRb%2B3dNDQORru%2BfmjuONO5OpuGevmGlz7ZMYWCpn2o0WX%2BYi2tbCvkUnPDbJp2hEXp%2BULmr2Q%2FcvzbgYGgqBce%2F%2F98li%2BGF6VAHII68aRariqLzKg4BgEZElZDSV09eK7Jk3%2FoUpmE5Spk7XkHSvVfzuVUsh97SIHY%2BUqakDc15B4R3QfW8BoYU7UVfQXUVxYXFnbZet6lXUte6CTsDWhr9UkFI0NlHTFpYnHBOkmn7bz4colTclrPWmvAwGTw0Of8OjaUV4V4mLYzTwBCnoVZfpiSL4Cf8gozxcsC7DbthAAA880qURkDWa75lIG68j0ozaAeZ5DIvJPoLyEohCq3ZjVQotJAktZIOmvjKK9g9lIy1f1aa%2FWzKFX%2FVRvTtKwwcbyOiu8Nyzdh0LbLkHjzXxoTiBt2YBU0%2FMTEN%2FUOEqgwNpmnRV%2BGz1oM8xH7c8a5kBdECFcMyNlV%2BH9m47YfkMni6eeyFw0%2BOzNrEDZRb9eKN%2BFqSni6M77hJUtoyFR25%2FfNEfxxoyDMjD9wLrTBjqkAUKnYl1g5cp4Ie%2F1oKAwxhb8cfUARAPOnvS2gPk%2FZuc93Dj34RoeLo0JKe5R3lyDh6nObxSPWrM5POVqEkTgIqv9Kwgs%2FjSHH1GmCjIDdRvD6Sf%2FhMZRIcB7i%2FMSMqYGcI2gJNXeS4%2FwQc%2BQ4xfk1dzwKNClLSqpeHPXJir6PyRryY%2FFtlt6v2vGwIQ6%2BmSptrnV4gTullzyunax4KEKuiYtkvBm&X-Amz-Signature=66206dfc5177805d1aa3248d629a546a618dbbe52beb32ad3844ea90188f06b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVOGZEL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD3DGTXszOTXDtAw1EIys4AVgY0VoENHkCco54Pxw16oAIhAJD3Dor6J5uczn1%2FWng0q6oGPwCgJvy2tmpzC3XqltoPKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmeJOBwMz%2FOCKb0Eq3AOJbDO2ghyaupBDzxlgDV44Cf9I%2BEgxA8sHyahYrBhdQVtn2zB947nJZ75AMT2ZHjGgJcsZRI25hrQ3ZUPkE31d9X4Ojh4wTNywLfo6O6uFepInRb%2B3dNDQORru%2BfmjuONO5OpuGevmGlz7ZMYWCpn2o0WX%2BYi2tbCvkUnPDbJp2hEXp%2BULmr2Q%2FcvzbgYGgqBce%2F%2F98li%2BGF6VAHII68aRariqLzKg4BgEZElZDSV09eK7Jk3%2FoUpmE5Spk7XkHSvVfzuVUsh97SIHY%2BUqakDc15B4R3QfW8BoYU7UVfQXUVxYXFnbZet6lXUte6CTsDWhr9UkFI0NlHTFpYnHBOkmn7bz4colTclrPWmvAwGTw0Of8OjaUV4V4mLYzTwBCnoVZfpiSL4Cf8gozxcsC7DbthAAA880qURkDWa75lIG68j0ozaAeZ5DIvJPoLyEohCq3ZjVQotJAktZIOmvjKK9g9lIy1f1aa%2FWzKFX%2FVRvTtKwwcbyOiu8Nyzdh0LbLkHjzXxoTiBt2YBU0%2FMTEN%2FUOEqgwNpmnRV%2BGz1oM8xH7c8a5kBdECFcMyNlV%2BH9m47YfkMni6eeyFw0%2BOzNrEDZRb9eKN%2BFqSni6M77hJUtoyFR25%2FfNEfxxoyDMjD9wLrTBjqkAUKnYl1g5cp4Ie%2F1oKAwxhb8cfUARAPOnvS2gPk%2FZuc93Dj34RoeLo0JKe5R3lyDh6nObxSPWrM5POVqEkTgIqv9Kwgs%2FjSHH1GmCjIDdRvD6Sf%2FhMZRIcB7i%2FMSMqYGcI2gJNXeS4%2FwQc%2BQ4xfk1dzwKNClLSqpeHPXJir6PyRryY%2FFtlt6v2vGwIQ6%2BmSptrnV4gTullzyunax4KEKuiYtkvBm&X-Amz-Signature=61e4f58494c89ebe715e118489d3dbb6f8e8b3fb67467b8370739dcb83418dab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVOGZEL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD3DGTXszOTXDtAw1EIys4AVgY0VoENHkCco54Pxw16oAIhAJD3Dor6J5uczn1%2FWng0q6oGPwCgJvy2tmpzC3XqltoPKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmeJOBwMz%2FOCKb0Eq3AOJbDO2ghyaupBDzxlgDV44Cf9I%2BEgxA8sHyahYrBhdQVtn2zB947nJZ75AMT2ZHjGgJcsZRI25hrQ3ZUPkE31d9X4Ojh4wTNywLfo6O6uFepInRb%2B3dNDQORru%2BfmjuONO5OpuGevmGlz7ZMYWCpn2o0WX%2BYi2tbCvkUnPDbJp2hEXp%2BULmr2Q%2FcvzbgYGgqBce%2F%2F98li%2BGF6VAHII68aRariqLzKg4BgEZElZDSV09eK7Jk3%2FoUpmE5Spk7XkHSvVfzuVUsh97SIHY%2BUqakDc15B4R3QfW8BoYU7UVfQXUVxYXFnbZet6lXUte6CTsDWhr9UkFI0NlHTFpYnHBOkmn7bz4colTclrPWmvAwGTw0Of8OjaUV4V4mLYzTwBCnoVZfpiSL4Cf8gozxcsC7DbthAAA880qURkDWa75lIG68j0ozaAeZ5DIvJPoLyEohCq3ZjVQotJAktZIOmvjKK9g9lIy1f1aa%2FWzKFX%2FVRvTtKwwcbyOiu8Nyzdh0LbLkHjzXxoTiBt2YBU0%2FMTEN%2FUOEqgwNpmnRV%2BGz1oM8xH7c8a5kBdECFcMyNlV%2BH9m47YfkMni6eeyFw0%2BOzNrEDZRb9eKN%2BFqSni6M77hJUtoyFR25%2FfNEfxxoyDMjD9wLrTBjqkAUKnYl1g5cp4Ie%2F1oKAwxhb8cfUARAPOnvS2gPk%2FZuc93Dj34RoeLo0JKe5R3lyDh6nObxSPWrM5POVqEkTgIqv9Kwgs%2FjSHH1GmCjIDdRvD6Sf%2FhMZRIcB7i%2FMSMqYGcI2gJNXeS4%2FwQc%2BQ4xfk1dzwKNClLSqpeHPXJir6PyRryY%2FFtlt6v2vGwIQ6%2BmSptrnV4gTullzyunax4KEKuiYtkvBm&X-Amz-Signature=aac65ce39897c5e35dcf5c95e9680c062de22691896b191b6046e73834f9862c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCVOGZEL%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD3DGTXszOTXDtAw1EIys4AVgY0VoENHkCco54Pxw16oAIhAJD3Dor6J5uczn1%2FWng0q6oGPwCgJvy2tmpzC3XqltoPKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVmeJOBwMz%2FOCKb0Eq3AOJbDO2ghyaupBDzxlgDV44Cf9I%2BEgxA8sHyahYrBhdQVtn2zB947nJZ75AMT2ZHjGgJcsZRI25hrQ3ZUPkE31d9X4Ojh4wTNywLfo6O6uFepInRb%2B3dNDQORru%2BfmjuONO5OpuGevmGlz7ZMYWCpn2o0WX%2BYi2tbCvkUnPDbJp2hEXp%2BULmr2Q%2FcvzbgYGgqBce%2F%2F98li%2BGF6VAHII68aRariqLzKg4BgEZElZDSV09eK7Jk3%2FoUpmE5Spk7XkHSvVfzuVUsh97SIHY%2BUqakDc15B4R3QfW8BoYU7UVfQXUVxYXFnbZet6lXUte6CTsDWhr9UkFI0NlHTFpYnHBOkmn7bz4colTclrPWmvAwGTw0Of8OjaUV4V4mLYzTwBCnoVZfpiSL4Cf8gozxcsC7DbthAAA880qURkDWa75lIG68j0ozaAeZ5DIvJPoLyEohCq3ZjVQotJAktZIOmvjKK9g9lIy1f1aa%2FWzKFX%2FVRvTtKwwcbyOiu8Nyzdh0LbLkHjzXxoTiBt2YBU0%2FMTEN%2FUOEqgwNpmnRV%2BGz1oM8xH7c8a5kBdECFcMyNlV%2BH9m47YfkMni6eeyFw0%2BOzNrEDZRb9eKN%2BFqSni6M77hJUtoyFR25%2FfNEfxxoyDMjD9wLrTBjqkAUKnYl1g5cp4Ie%2F1oKAwxhb8cfUARAPOnvS2gPk%2FZuc93Dj34RoeLo0JKe5R3lyDh6nObxSPWrM5POVqEkTgIqv9Kwgs%2FjSHH1GmCjIDdRvD6Sf%2FhMZRIcB7i%2FMSMqYGcI2gJNXeS4%2FwQc%2BQ4xfk1dzwKNClLSqpeHPXJir6PyRryY%2FFtlt6v2vGwIQ6%2BmSptrnV4gTullzyunax4KEKuiYtkvBm&X-Amz-Signature=8313df309ef58ace1e5f0550fae266a01c9e85b57a7b026b86d65557c611b15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
