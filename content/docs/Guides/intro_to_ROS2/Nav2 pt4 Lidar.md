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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC5PDNZV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQC4EqSAA1fl4YUYWpU1k1TI88%2FcwP6vHS7OvZhPfN5BpQIhAOZW0IUzgl9%2B%2Bv1gyb5X1NtiAfq4W%2FGJz36jUFcaben2KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIw3h2hUMCd924g0Aq3AN0mKa%2BEuJc5op6OLCUBwpqozeYqtM4%2B1P%2FDjNl5j86cOEQ1Gu9cCvZtZtt%2BAbD%2FO1Hxan%2BceNvnKNxYBqczngQ8oPZWjIkuWjPvSbqqZAxXOgsS35oB5tVxwZiNBsqmhRsgpMSFPJ%2F1y6zzocwQwAyy1uFIT%2FRh3fUJF3E5Ky6CRKMb92BLSB1gylqwGTH9QphK%2BxYQpiqlvY2cw9s3CBdKd1pg2dnVXyvn5S4EE5EZo%2FPSvtjbNc10F18sH9WdIQBnAbU56AuvoNffy2%2FmYmHdZG4bfqzeqobbsGLyxfyp04Kh1XGTL%2FXSR6M6YcA7JJF4jjPoHV7VF0yZljwZmE1eTdXltu0wOKBrUumeMaY1Wk1M9r56VF5nQtPdl8TlyPumD477phimgyKuGbdtdgJjboHU1qclM3656qNG3lOzNPLaRH1bjC5VuwlBHIder7ulOFcyDq4wtHBv%2BMDKpQIco6m52NAEhAntn4zSxCOONsAvyAMmNLIKPtaqQzc64cDNo%2FPtYYfstlUU2h802XGkixt4gs9%2F7WNgGUMgGsxq%2Bpn4%2BVTI4hdZa9kGHwkCJoJ8cMRZiVaesRAvqKKoi6SOxMGX90cUilQkZZmbcDTZSY1rURtoXGQZdqAmDDSktfEBjqkAWHiOJLYwcO9j5vDsO6jM8aKIaOrHPoRvV11Nl4d%2FgPUrT4ZNGmUADS8wbZdEn74VnTX5nFVrN%2BItNE%2BQHPmDGZ1bY%2FR27EdzvhTJ8%2F59D18Wse6IaMdnwHwCSrXcwAlgi3rQ%2FIrqKGfJmcZr4jssZlNgiclRWeesDwwRtGYgOt5Bh9gnbgsEmBupriUDZeRDkPO1sbH2acOjNpsi9Q%2F4YKCapFc&X-Amz-Signature=094f18bda4f3b420e20cee043363bce3cf53ae52e742020899a244fae837315e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=8431f3b8bc9b08a9fe8b681067923c34d02d6be13c25f4a03392ea1f8285aa58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=b5a0e74b43465311849c8345eb224abb2933e16115cd17143c4c473520ed541d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=b578de7efa1e7ee95bcf5a90f02fccd8bfe792a438bf2e2f35559978592fe0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=3cbd402f603b157ab1912d1c8e6e7fe9e2d0ca44289e80356ef99631c4d79d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=cdfa7e7be5af4d58c97f36570f84a37b9a18115d039fe02759bd62dd0cb489de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=c1bff039f4b665f69c7182d38be0eb600f255aca3fedb962fb893640105731a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=53ac19778338b065ef0a1379dabe1a1e9a0c84447fed09ee4d63b92c43d8d1ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=884619523dbc70079db6e53fb0487c93b8ba6123cc19e1bf57fa2ed4989a4850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=a589e2ceca8da35f93bccc4b81bde479f4d48f7e5f6074d8552baeb773b7a7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFVY7XZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEOzJN7Vh6xrhRQBG5xkSaJmYRLw2ZrmBiUJh8%2FOOoNvAiA3CBqL8RiXIvrPgTeLv%2F4MxAHeIZ7xINihD3e2jApy0SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM508cj9dUDepOiBq0KtwDxKfBHeBA4pNgBBH3e1V5sYrqpyXJgcNrc%2BVlJ%2BH9E9ByoR9SxujfsTV7iAcNiGVGSCOZdVMF0iwVOKJRbNMADlecw6Z65zGakL9QMMrZxgWdNmPJ%2Bg7PjAENcIiQUINPne7r8yNeJYSmDCb0N96403ynuIq%2FUvhuBXIQo%2BWad2NsxbQq4YhX8zPuY4JZoIzHi4uDxxnj0v%2F2PkxTls6StZSr56TXpcCgjl34VDKe%2Br6IxWIw1SFB91HOnGyhvdyxDlwZYLipcaL8RMsWZVMM1lB5o70I%2FA0DUb2pwnSOFXR8Kid56jzqdUIqM2FgeGZJr7%2FBCCJ5WKvZB10phH%2FfboNcjzalklSAwA6e%2BfnHH1ecnXy6bzy%2FEI2pRvMxKKtEWVaYQLRUZg0awX0%2F%2FaSd3UFZ1OJ4Hex6pD%2FgE4%2FBeOoj5z5PCy4pc5tTr7YjUUCwxctYAwdrB%2B23UVrwUVNhL1lQku%2FSYsZ%2BdzbF0pmx3C1wxnxc3e20eu3MXKHBusnAa8Bd%2FMZuLUSE0VbxBP5PoF9Lz8ZczW2wBtxSOvNZPoSWALd%2Fq%2BcR7COSwmuROhFbGtWYlSmezxaaCLg%2BM3HaUoWnuDS1JNM2YQx5gjGWYt35XyzJ1GSAttzLYvcw%2FpLXxAY6pgH%2Bys3VRrf2KsSh5DRYruhK5rr8ETZHmrOPVXIyPy9iFsMPbpUrPcwfn51ozqsesGoHAG8lbKsjnmMJ1YEAgJTB97QlbJIbTDc28mMIwTauItK5DyIqNjcXAu0EDLHlFTgpMvyCxpbCQOTyIvWlSWh9Tp6zMfnSsq4aDUyitQVyUqtrlVo5%2F9whcPoPrb%2Bq4gK7HPs1RFYTCrsTlxWdte2E0%2BEMNe1w&X-Amz-Signature=3cbd402f603b157ab1912d1c8e6e7fe9e2d0ca44289e80356ef99631c4d79d20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
