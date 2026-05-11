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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ5HUSEX%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHKgu6vttgs%2B5qZ8jkkMEywvZw2JIJPg31JsoM1i2NrlAiB8io5AoWb%2FK2mBBkGF0fypChhQUS4ZNbvrfM9RaBOTOir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIM8lug7%2F%2F2qJfUp5P7KtwDhb7CHwxgy3H8uEKifgVgLqFMhbvtsZOtOdJ57pnaJUAzxfXAVxIlIV%2FSZ330cVywiVNYnP2bfQlV%2FIBqmBO0yQv9DDtdfuP7twqVZDn4QPOL0PkDcU%2FvrwJG%2BdtzUor4myMMUc4iZbOxfy%2BprgS1iooUWVSVjNOIZyB%2FnCpQ2Jy3%2BsxwHgDGyzVjdrb%2FVf5xb5Q2VrCqWeQQ7Ldmk6%2FxoCYYfjQtE%2BYEQvdnip4okn0kEbr57CBOIH21x9AtzAD89cHnms7nE6FYVv0cC%2BVvXp8I%2FedKEDtm4twI5d2Inf5YzgWWmxmdF2kQqpBFq70wfGukJRNf64a6esAWEIulf6oZQ%2B8Cz%2FAgsNGCtHaEY4j9DcOOXHg1Df9pQ9CqCRtM3KzKdapwQTXiavpgfcobYgbQdCvUml7CmViyXwzjWE5icq%2B9HAXIFv%2B1OtwmUHf5jocBhQgeAJsFLwRcB5trJoVXaAwLoJ2G%2BXctMYp1U%2B%2BfM8ToFWlOIL3hqlI0n5ee%2BZOXII4WEd%2FZBHtSpgHB3ZNjSFOCcbvCnmpuVjZuCd8%2F9u3IhOpqylSKqP5FsmJnOO1oyY9p22xZ%2BQOzfSiP0CJJN5oU4UmQ0Swzlq8ymus%2B%2FjiBF0ujLaSkNBQw%2B4OF0AY6pgEeZ%2FqQq1%2BNljG3im74%2Fi%2Ff2Tn%2FEn6W2wjHu42a%2F%2Fs9Ul4sp0oJYKku9xMnepyKxnqMmLrNwFv0VLFNJVEPPyj9ufcu7Bwi8cmYoq4uR6VTYQ2NtuAacKrLTLptwQ1YOMQxqWbT7aiYLD%2B%2FXMc33%2FCLMGeI16HFSDGGYprx9YmenJP%2FElDF4YTEKMufjcprkLVsSe4KKEvlen58rUqOxHwFDbIAmi6U&X-Amz-Signature=b0f2667f429bcc503020c2464a40b0f99d07f8100c5fd69a335681633ad499af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYXCYBY%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAqJ2CDdfbIH6HwwNa5DzRcRwozWF%2Fb8%2FLPYk31zZHsVAiA5uhB08NMtC3DFM2BL4mNEKiXlHfTRZiCh2brGAZObcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmSGnrGaMiwA0IMjyKtwDNhXVV%2BljwkkAYV1hG8XfgKfG602SIk3jtr2yzPj1yCElMgUjcdOvKugmqfYV%2BH6wECHSwbXgCT6YePxb7Cv83lu7bgdcMKF1v6bKueidoMbuna8XqGYbmtk5DpU6lhUeiorduL3P6kqS5wPThp6KsiwWbC4M2DNo46iQycES7z3HZglzf1fXO%2F8VS7TVt22Ux8iliKtCdTYmH1NxuOcBwC8Jy%2FZWdMiNV7zQCrXH8hc2%2B6uaNt136qVVvy76s%2BZeS1sEa6vln7vxyJz6NtaPf3ca%2BkbhjFJwyLuOOf0EugNkFLkaBFztjqjpVRw%2BFdSPLTEdO6KDN1yIwiEJ5Gtbp2EnI6WX4HhhR2mj8IJCKF9%2Fwtu5ozUkarF4%2B0FVyyVXs6jRpgoUvsVOcQ73SrOzXuoJKoNbwFVRh7WVzFOgupFOv%2B3rZBNn%2FfQUqq1Lbu6g75UHQlfK9PTmfd6x%2B1RraEyJ8Hi9Hclibwa4Z9AKBWglimabh9Hrt6r03klQ037KfbIMcZjiyNzXxWSk0WZYKwYqWI%2BEfubYDTxhJjsFmniK65yvN2Ugtv%2BRMdKpQPTVrWwavwuY0Dqhybb05%2BWGOYLJFK0%2B3nFWpcLP%2BDVI9co%2FzjJvHBL4N7fh0t0w95aF0AY6pgEGD33bkpy5jbTvYEAaveaDqVWB1GmZXb73188sbCw7DUoFdCzlShYL0dDwon7DGJtdlIL8FjQVV416fjtBwqJnZKEAYj3AANGNCNoR8z5mNKm2Ym%2FtqFGRwJGEQEPhntiyA%2BhW8yOXe%2B4f9Y50Iw%2BCW4G9JUqb6PuebRF6kGiEgA%2FNAGPiazM9Ri64SXYZQIECNuI19jyB0l7r71c4ICohKtXT%2BOXo&X-Amz-Signature=c852a749906c9b6339ef5b9ee422ee1b95bfb8d4c1556ea79735205aa18989e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYXCYBY%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAqJ2CDdfbIH6HwwNa5DzRcRwozWF%2Fb8%2FLPYk31zZHsVAiA5uhB08NMtC3DFM2BL4mNEKiXlHfTRZiCh2brGAZObcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmSGnrGaMiwA0IMjyKtwDNhXVV%2BljwkkAYV1hG8XfgKfG602SIk3jtr2yzPj1yCElMgUjcdOvKugmqfYV%2BH6wECHSwbXgCT6YePxb7Cv83lu7bgdcMKF1v6bKueidoMbuna8XqGYbmtk5DpU6lhUeiorduL3P6kqS5wPThp6KsiwWbC4M2DNo46iQycES7z3HZglzf1fXO%2F8VS7TVt22Ux8iliKtCdTYmH1NxuOcBwC8Jy%2FZWdMiNV7zQCrXH8hc2%2B6uaNt136qVVvy76s%2BZeS1sEa6vln7vxyJz6NtaPf3ca%2BkbhjFJwyLuOOf0EugNkFLkaBFztjqjpVRw%2BFdSPLTEdO6KDN1yIwiEJ5Gtbp2EnI6WX4HhhR2mj8IJCKF9%2Fwtu5ozUkarF4%2B0FVyyVXs6jRpgoUvsVOcQ73SrOzXuoJKoNbwFVRh7WVzFOgupFOv%2B3rZBNn%2FfQUqq1Lbu6g75UHQlfK9PTmfd6x%2B1RraEyJ8Hi9Hclibwa4Z9AKBWglimabh9Hrt6r03klQ037KfbIMcZjiyNzXxWSk0WZYKwYqWI%2BEfubYDTxhJjsFmniK65yvN2Ugtv%2BRMdKpQPTVrWwavwuY0Dqhybb05%2BWGOYLJFK0%2B3nFWpcLP%2BDVI9co%2FzjJvHBL4N7fh0t0w95aF0AY6pgEGD33bkpy5jbTvYEAaveaDqVWB1GmZXb73188sbCw7DUoFdCzlShYL0dDwon7DGJtdlIL8FjQVV416fjtBwqJnZKEAYj3AANGNCNoR8z5mNKm2Ym%2FtqFGRwJGEQEPhntiyA%2BhW8yOXe%2B4f9Y50Iw%2BCW4G9JUqb6PuebRF6kGiEgA%2FNAGPiazM9Ri64SXYZQIECNuI19jyB0l7r71c4ICohKtXT%2BOXo&X-Amz-Signature=1c98d3d28cbd441f87f048bee6bcb1bfdae80d2c2ec77692a47ce635a54dac59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYXCYBY%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAqJ2CDdfbIH6HwwNa5DzRcRwozWF%2Fb8%2FLPYk31zZHsVAiA5uhB08NMtC3DFM2BL4mNEKiXlHfTRZiCh2brGAZObcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmSGnrGaMiwA0IMjyKtwDNhXVV%2BljwkkAYV1hG8XfgKfG602SIk3jtr2yzPj1yCElMgUjcdOvKugmqfYV%2BH6wECHSwbXgCT6YePxb7Cv83lu7bgdcMKF1v6bKueidoMbuna8XqGYbmtk5DpU6lhUeiorduL3P6kqS5wPThp6KsiwWbC4M2DNo46iQycES7z3HZglzf1fXO%2F8VS7TVt22Ux8iliKtCdTYmH1NxuOcBwC8Jy%2FZWdMiNV7zQCrXH8hc2%2B6uaNt136qVVvy76s%2BZeS1sEa6vln7vxyJz6NtaPf3ca%2BkbhjFJwyLuOOf0EugNkFLkaBFztjqjpVRw%2BFdSPLTEdO6KDN1yIwiEJ5Gtbp2EnI6WX4HhhR2mj8IJCKF9%2Fwtu5ozUkarF4%2B0FVyyVXs6jRpgoUvsVOcQ73SrOzXuoJKoNbwFVRh7WVzFOgupFOv%2B3rZBNn%2FfQUqq1Lbu6g75UHQlfK9PTmfd6x%2B1RraEyJ8Hi9Hclibwa4Z9AKBWglimabh9Hrt6r03klQ037KfbIMcZjiyNzXxWSk0WZYKwYqWI%2BEfubYDTxhJjsFmniK65yvN2Ugtv%2BRMdKpQPTVrWwavwuY0Dqhybb05%2BWGOYLJFK0%2B3nFWpcLP%2BDVI9co%2FzjJvHBL4N7fh0t0w95aF0AY6pgEGD33bkpy5jbTvYEAaveaDqVWB1GmZXb73188sbCw7DUoFdCzlShYL0dDwon7DGJtdlIL8FjQVV416fjtBwqJnZKEAYj3AANGNCNoR8z5mNKm2Ym%2FtqFGRwJGEQEPhntiyA%2BhW8yOXe%2B4f9Y50Iw%2BCW4G9JUqb6PuebRF6kGiEgA%2FNAGPiazM9Ri64SXYZQIECNuI19jyB0l7r71c4ICohKtXT%2BOXo&X-Amz-Signature=7de7adcc47180c3ee792f89451a99005bd6a1cdc24f2f10961e70ac14b0b2928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYXCYBY%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAqJ2CDdfbIH6HwwNa5DzRcRwozWF%2Fb8%2FLPYk31zZHsVAiA5uhB08NMtC3DFM2BL4mNEKiXlHfTRZiCh2brGAZObcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmSGnrGaMiwA0IMjyKtwDNhXVV%2BljwkkAYV1hG8XfgKfG602SIk3jtr2yzPj1yCElMgUjcdOvKugmqfYV%2BH6wECHSwbXgCT6YePxb7Cv83lu7bgdcMKF1v6bKueidoMbuna8XqGYbmtk5DpU6lhUeiorduL3P6kqS5wPThp6KsiwWbC4M2DNo46iQycES7z3HZglzf1fXO%2F8VS7TVt22Ux8iliKtCdTYmH1NxuOcBwC8Jy%2FZWdMiNV7zQCrXH8hc2%2B6uaNt136qVVvy76s%2BZeS1sEa6vln7vxyJz6NtaPf3ca%2BkbhjFJwyLuOOf0EugNkFLkaBFztjqjpVRw%2BFdSPLTEdO6KDN1yIwiEJ5Gtbp2EnI6WX4HhhR2mj8IJCKF9%2Fwtu5ozUkarF4%2B0FVyyVXs6jRpgoUvsVOcQ73SrOzXuoJKoNbwFVRh7WVzFOgupFOv%2B3rZBNn%2FfQUqq1Lbu6g75UHQlfK9PTmfd6x%2B1RraEyJ8Hi9Hclibwa4Z9AKBWglimabh9Hrt6r03klQ037KfbIMcZjiyNzXxWSk0WZYKwYqWI%2BEfubYDTxhJjsFmniK65yvN2Ugtv%2BRMdKpQPTVrWwavwuY0Dqhybb05%2BWGOYLJFK0%2B3nFWpcLP%2BDVI9co%2FzjJvHBL4N7fh0t0w95aF0AY6pgEGD33bkpy5jbTvYEAaveaDqVWB1GmZXb73188sbCw7DUoFdCzlShYL0dDwon7DGJtdlIL8FjQVV416fjtBwqJnZKEAYj3AANGNCNoR8z5mNKm2Ym%2FtqFGRwJGEQEPhntiyA%2BhW8yOXe%2B4f9Y50Iw%2BCW4G9JUqb6PuebRF6kGiEgA%2FNAGPiazM9Ri64SXYZQIECNuI19jyB0l7r71c4ICohKtXT%2BOXo&X-Amz-Signature=e6be3d2e3fc8e418b17a172ef6e07b55062b026fe3387b62dafeac0133ef1ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYXCYBY%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAqJ2CDdfbIH6HwwNa5DzRcRwozWF%2Fb8%2FLPYk31zZHsVAiA5uhB08NMtC3DFM2BL4mNEKiXlHfTRZiCh2brGAZObcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmSGnrGaMiwA0IMjyKtwDNhXVV%2BljwkkAYV1hG8XfgKfG602SIk3jtr2yzPj1yCElMgUjcdOvKugmqfYV%2BH6wECHSwbXgCT6YePxb7Cv83lu7bgdcMKF1v6bKueidoMbuna8XqGYbmtk5DpU6lhUeiorduL3P6kqS5wPThp6KsiwWbC4M2DNo46iQycES7z3HZglzf1fXO%2F8VS7TVt22Ux8iliKtCdTYmH1NxuOcBwC8Jy%2FZWdMiNV7zQCrXH8hc2%2B6uaNt136qVVvy76s%2BZeS1sEa6vln7vxyJz6NtaPf3ca%2BkbhjFJwyLuOOf0EugNkFLkaBFztjqjpVRw%2BFdSPLTEdO6KDN1yIwiEJ5Gtbp2EnI6WX4HhhR2mj8IJCKF9%2Fwtu5ozUkarF4%2B0FVyyVXs6jRpgoUvsVOcQ73SrOzXuoJKoNbwFVRh7WVzFOgupFOv%2B3rZBNn%2FfQUqq1Lbu6g75UHQlfK9PTmfd6x%2B1RraEyJ8Hi9Hclibwa4Z9AKBWglimabh9Hrt6r03klQ037KfbIMcZjiyNzXxWSk0WZYKwYqWI%2BEfubYDTxhJjsFmniK65yvN2Ugtv%2BRMdKpQPTVrWwavwuY0Dqhybb05%2BWGOYLJFK0%2B3nFWpcLP%2BDVI9co%2FzjJvHBL4N7fh0t0w95aF0AY6pgEGD33bkpy5jbTvYEAaveaDqVWB1GmZXb73188sbCw7DUoFdCzlShYL0dDwon7DGJtdlIL8FjQVV416fjtBwqJnZKEAYj3AANGNCNoR8z5mNKm2Ym%2FtqFGRwJGEQEPhntiyA%2BhW8yOXe%2B4f9Y50Iw%2BCW4G9JUqb6PuebRF6kGiEgA%2FNAGPiazM9Ri64SXYZQIECNuI19jyB0l7r71c4ICohKtXT%2BOXo&X-Amz-Signature=42f50c5e21b9f64fd5107c0bb78513fefd88780c4d09e50fd5d35046c4cd8460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYXCYBY%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAqJ2CDdfbIH6HwwNa5DzRcRwozWF%2Fb8%2FLPYk31zZHsVAiA5uhB08NMtC3DFM2BL4mNEKiXlHfTRZiCh2brGAZObcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmSGnrGaMiwA0IMjyKtwDNhXVV%2BljwkkAYV1hG8XfgKfG602SIk3jtr2yzPj1yCElMgUjcdOvKugmqfYV%2BH6wECHSwbXgCT6YePxb7Cv83lu7bgdcMKF1v6bKueidoMbuna8XqGYbmtk5DpU6lhUeiorduL3P6kqS5wPThp6KsiwWbC4M2DNo46iQycES7z3HZglzf1fXO%2F8VS7TVt22Ux8iliKtCdTYmH1NxuOcBwC8Jy%2FZWdMiNV7zQCrXH8hc2%2B6uaNt136qVVvy76s%2BZeS1sEa6vln7vxyJz6NtaPf3ca%2BkbhjFJwyLuOOf0EugNkFLkaBFztjqjpVRw%2BFdSPLTEdO6KDN1yIwiEJ5Gtbp2EnI6WX4HhhR2mj8IJCKF9%2Fwtu5ozUkarF4%2B0FVyyVXs6jRpgoUvsVOcQ73SrOzXuoJKoNbwFVRh7WVzFOgupFOv%2B3rZBNn%2FfQUqq1Lbu6g75UHQlfK9PTmfd6x%2B1RraEyJ8Hi9Hclibwa4Z9AKBWglimabh9Hrt6r03klQ037KfbIMcZjiyNzXxWSk0WZYKwYqWI%2BEfubYDTxhJjsFmniK65yvN2Ugtv%2BRMdKpQPTVrWwavwuY0Dqhybb05%2BWGOYLJFK0%2B3nFWpcLP%2BDVI9co%2FzjJvHBL4N7fh0t0w95aF0AY6pgEGD33bkpy5jbTvYEAaveaDqVWB1GmZXb73188sbCw7DUoFdCzlShYL0dDwon7DGJtdlIL8FjQVV416fjtBwqJnZKEAYj3AANGNCNoR8z5mNKm2Ym%2FtqFGRwJGEQEPhntiyA%2BhW8yOXe%2B4f9Y50Iw%2BCW4G9JUqb6PuebRF6kGiEgA%2FNAGPiazM9Ri64SXYZQIECNuI19jyB0l7r71c4ICohKtXT%2BOXo&X-Amz-Signature=ecf292ec2d9bca1d1bca871521e2296b18ebbde870db093d7fdc4cef578636cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYXCYBY%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAqJ2CDdfbIH6HwwNa5DzRcRwozWF%2Fb8%2FLPYk31zZHsVAiA5uhB08NMtC3DFM2BL4mNEKiXlHfTRZiCh2brGAZObcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmSGnrGaMiwA0IMjyKtwDNhXVV%2BljwkkAYV1hG8XfgKfG602SIk3jtr2yzPj1yCElMgUjcdOvKugmqfYV%2BH6wECHSwbXgCT6YePxb7Cv83lu7bgdcMKF1v6bKueidoMbuna8XqGYbmtk5DpU6lhUeiorduL3P6kqS5wPThp6KsiwWbC4M2DNo46iQycES7z3HZglzf1fXO%2F8VS7TVt22Ux8iliKtCdTYmH1NxuOcBwC8Jy%2FZWdMiNV7zQCrXH8hc2%2B6uaNt136qVVvy76s%2BZeS1sEa6vln7vxyJz6NtaPf3ca%2BkbhjFJwyLuOOf0EugNkFLkaBFztjqjpVRw%2BFdSPLTEdO6KDN1yIwiEJ5Gtbp2EnI6WX4HhhR2mj8IJCKF9%2Fwtu5ozUkarF4%2B0FVyyVXs6jRpgoUvsVOcQ73SrOzXuoJKoNbwFVRh7WVzFOgupFOv%2B3rZBNn%2FfQUqq1Lbu6g75UHQlfK9PTmfd6x%2B1RraEyJ8Hi9Hclibwa4Z9AKBWglimabh9Hrt6r03klQ037KfbIMcZjiyNzXxWSk0WZYKwYqWI%2BEfubYDTxhJjsFmniK65yvN2Ugtv%2BRMdKpQPTVrWwavwuY0Dqhybb05%2BWGOYLJFK0%2B3nFWpcLP%2BDVI9co%2FzjJvHBL4N7fh0t0w95aF0AY6pgEGD33bkpy5jbTvYEAaveaDqVWB1GmZXb73188sbCw7DUoFdCzlShYL0dDwon7DGJtdlIL8FjQVV416fjtBwqJnZKEAYj3AANGNCNoR8z5mNKm2Ym%2FtqFGRwJGEQEPhntiyA%2BhW8yOXe%2B4f9Y50Iw%2BCW4G9JUqb6PuebRF6kGiEgA%2FNAGPiazM9Ri64SXYZQIECNuI19jyB0l7r71c4ICohKtXT%2BOXo&X-Amz-Signature=f151b760cae64b24f2a98f415c9db9751fa7684da5d1799160f798c6696e76a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYXCYBY%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAqJ2CDdfbIH6HwwNa5DzRcRwozWF%2Fb8%2FLPYk31zZHsVAiA5uhB08NMtC3DFM2BL4mNEKiXlHfTRZiCh2brGAZObcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmSGnrGaMiwA0IMjyKtwDNhXVV%2BljwkkAYV1hG8XfgKfG602SIk3jtr2yzPj1yCElMgUjcdOvKugmqfYV%2BH6wECHSwbXgCT6YePxb7Cv83lu7bgdcMKF1v6bKueidoMbuna8XqGYbmtk5DpU6lhUeiorduL3P6kqS5wPThp6KsiwWbC4M2DNo46iQycES7z3HZglzf1fXO%2F8VS7TVt22Ux8iliKtCdTYmH1NxuOcBwC8Jy%2FZWdMiNV7zQCrXH8hc2%2B6uaNt136qVVvy76s%2BZeS1sEa6vln7vxyJz6NtaPf3ca%2BkbhjFJwyLuOOf0EugNkFLkaBFztjqjpVRw%2BFdSPLTEdO6KDN1yIwiEJ5Gtbp2EnI6WX4HhhR2mj8IJCKF9%2Fwtu5ozUkarF4%2B0FVyyVXs6jRpgoUvsVOcQ73SrOzXuoJKoNbwFVRh7WVzFOgupFOv%2B3rZBNn%2FfQUqq1Lbu6g75UHQlfK9PTmfd6x%2B1RraEyJ8Hi9Hclibwa4Z9AKBWglimabh9Hrt6r03klQ037KfbIMcZjiyNzXxWSk0WZYKwYqWI%2BEfubYDTxhJjsFmniK65yvN2Ugtv%2BRMdKpQPTVrWwavwuY0Dqhybb05%2BWGOYLJFK0%2B3nFWpcLP%2BDVI9co%2FzjJvHBL4N7fh0t0w95aF0AY6pgEGD33bkpy5jbTvYEAaveaDqVWB1GmZXb73188sbCw7DUoFdCzlShYL0dDwon7DGJtdlIL8FjQVV416fjtBwqJnZKEAYj3AANGNCNoR8z5mNKm2Ym%2FtqFGRwJGEQEPhntiyA%2BhW8yOXe%2B4f9Y50Iw%2BCW4G9JUqb6PuebRF6kGiEgA%2FNAGPiazM9Ri64SXYZQIECNuI19jyB0l7r71c4ICohKtXT%2BOXo&X-Amz-Signature=4022379b869de2bd15fce3b1ce14684aead41c950b53ce418de2ec794dd45430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYXCYBY%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAqJ2CDdfbIH6HwwNa5DzRcRwozWF%2Fb8%2FLPYk31zZHsVAiA5uhB08NMtC3DFM2BL4mNEKiXlHfTRZiCh2brGAZObcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmSGnrGaMiwA0IMjyKtwDNhXVV%2BljwkkAYV1hG8XfgKfG602SIk3jtr2yzPj1yCElMgUjcdOvKugmqfYV%2BH6wECHSwbXgCT6YePxb7Cv83lu7bgdcMKF1v6bKueidoMbuna8XqGYbmtk5DpU6lhUeiorduL3P6kqS5wPThp6KsiwWbC4M2DNo46iQycES7z3HZglzf1fXO%2F8VS7TVt22Ux8iliKtCdTYmH1NxuOcBwC8Jy%2FZWdMiNV7zQCrXH8hc2%2B6uaNt136qVVvy76s%2BZeS1sEa6vln7vxyJz6NtaPf3ca%2BkbhjFJwyLuOOf0EugNkFLkaBFztjqjpVRw%2BFdSPLTEdO6KDN1yIwiEJ5Gtbp2EnI6WX4HhhR2mj8IJCKF9%2Fwtu5ozUkarF4%2B0FVyyVXs6jRpgoUvsVOcQ73SrOzXuoJKoNbwFVRh7WVzFOgupFOv%2B3rZBNn%2FfQUqq1Lbu6g75UHQlfK9PTmfd6x%2B1RraEyJ8Hi9Hclibwa4Z9AKBWglimabh9Hrt6r03klQ037KfbIMcZjiyNzXxWSk0WZYKwYqWI%2BEfubYDTxhJjsFmniK65yvN2Ugtv%2BRMdKpQPTVrWwavwuY0Dqhybb05%2BWGOYLJFK0%2B3nFWpcLP%2BDVI9co%2FzjJvHBL4N7fh0t0w95aF0AY6pgEGD33bkpy5jbTvYEAaveaDqVWB1GmZXb73188sbCw7DUoFdCzlShYL0dDwon7DGJtdlIL8FjQVV416fjtBwqJnZKEAYj3AANGNCNoR8z5mNKm2Ym%2FtqFGRwJGEQEPhntiyA%2BhW8yOXe%2B4f9Y50Iw%2BCW4G9JUqb6PuebRF6kGiEgA%2FNAGPiazM9Ri64SXYZQIECNuI19jyB0l7r71c4ICohKtXT%2BOXo&X-Amz-Signature=561fb503c8029a5fc36f36db95eb7753f36d9646cdd5f144d25699b2602772b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQYXCYBY%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAqJ2CDdfbIH6HwwNa5DzRcRwozWF%2Fb8%2FLPYk31zZHsVAiA5uhB08NMtC3DFM2BL4mNEKiXlHfTRZiCh2brGAZObcCr%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMmSGnrGaMiwA0IMjyKtwDNhXVV%2BljwkkAYV1hG8XfgKfG602SIk3jtr2yzPj1yCElMgUjcdOvKugmqfYV%2BH6wECHSwbXgCT6YePxb7Cv83lu7bgdcMKF1v6bKueidoMbuna8XqGYbmtk5DpU6lhUeiorduL3P6kqS5wPThp6KsiwWbC4M2DNo46iQycES7z3HZglzf1fXO%2F8VS7TVt22Ux8iliKtCdTYmH1NxuOcBwC8Jy%2FZWdMiNV7zQCrXH8hc2%2B6uaNt136qVVvy76s%2BZeS1sEa6vln7vxyJz6NtaPf3ca%2BkbhjFJwyLuOOf0EugNkFLkaBFztjqjpVRw%2BFdSPLTEdO6KDN1yIwiEJ5Gtbp2EnI6WX4HhhR2mj8IJCKF9%2Fwtu5ozUkarF4%2B0FVyyVXs6jRpgoUvsVOcQ73SrOzXuoJKoNbwFVRh7WVzFOgupFOv%2B3rZBNn%2FfQUqq1Lbu6g75UHQlfK9PTmfd6x%2B1RraEyJ8Hi9Hclibwa4Z9AKBWglimabh9Hrt6r03klQ037KfbIMcZjiyNzXxWSk0WZYKwYqWI%2BEfubYDTxhJjsFmniK65yvN2Ugtv%2BRMdKpQPTVrWwavwuY0Dqhybb05%2BWGOYLJFK0%2B3nFWpcLP%2BDVI9co%2FzjJvHBL4N7fh0t0w95aF0AY6pgEGD33bkpy5jbTvYEAaveaDqVWB1GmZXb73188sbCw7DUoFdCzlShYL0dDwon7DGJtdlIL8FjQVV416fjtBwqJnZKEAYj3AANGNCNoR8z5mNKm2Ym%2FtqFGRwJGEQEPhntiyA%2BhW8yOXe%2B4f9Y50Iw%2BCW4G9JUqb6PuebRF6kGiEgA%2FNAGPiazM9Ri64SXYZQIECNuI19jyB0l7r71c4ICohKtXT%2BOXo&X-Amz-Signature=e6be3d2e3fc8e418b17a172ef6e07b55062b026fe3387b62dafeac0133ef1ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
