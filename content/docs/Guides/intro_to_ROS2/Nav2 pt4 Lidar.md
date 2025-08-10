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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5DCZIAE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLGlf3SaxQvaGyUHiFrpPa%2FbRuxNEoFyvPrT6lbsk9oAIgVedZslgfCAWjS43%2FO1FBDvu0%2BWnAJd96aCNw6gupr6AqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGTTrnb8PE14dS4ryrcA25hvXVTi615oEmtbYjWtajTqlA4unAk%2Bbc3R%2Fj%2FJhcYKoadil54qQlLbuC7Np0HOnhdiFFhxRRjZ%2BxZcXLTT1V2vmUWRug6GLScUMiHN%2FmkOMClg9X1Jf8laPI56dZVOELWY1KSVVn8D8U3TByH6ZzsmvX4RD6ZOyctsMhZ1FwGPzrsDfpqqfDdHEJ832U7H8PqHU4i6woX5cNnLgVyAuxOPEikVG%2Fxy%2B9DDzqcwkINnYV7pLh5sWChI9O9MJ2NP316%2FeY%2FlgWCZSbKsnRCEo%2Bun%2BpzGxygmo%2BQUs4acnZ%2B6dIFrnSJss0nYCQYJyWtDYbwEp3sDUer9ril3Un4M1WwKcLnCGCGwdHC7i4w3ZcMO13ky%2Bj6zGHr0RjQaKHuHmrG657URbAMIIpeFaFsT%2FBmqL%2BnxSWK4roseSMJHal7e4NlOg2Tv%2FRfzbfXKPV7pkgsaQoxdwjwYzwIs2KkshLvelmf%2BN1VOqpSS8DF4mcySKf%2FMGeL%2F6d6bPOi8YahqS%2BVcTrOvsyoOqyt84PBn7AKTI5HXV2xfONzM2SlUQ0W53RCCe%2BBb1ZHaWiY6TsjfazPBBePJtD5ejvJOqIAfWrursIz8AbwoFo3gsqrG3eEoWoXsKNRrxqO7AQMMLC648QGOqUBr3aieUQTb6sZikXnvdtSQKyWpGIu%2FEnKGTwG0wFnr3Byrgdl10JcQILicotq77gTwtmQNqzAopIzN9YRdfbyx1vrHLj%2BIy9f9knEgvOLqCXVJRrCQedhIGo4%2By6Oty8D1n%2FQKJ2Q9Q84KhrdJT4QTSjXdduJJorPcFWHyMVrtwWm8VvzhiEl5c1fmbGsNmPt1bM9WV2vk5XSonsDIr%2BuIs1rgMDY&X-Amz-Signature=37fa00a0c3498ff69852be62383fe0f115c28f63cb8fb65405bc75a01e91369f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWO4VVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrRugvKrkxG7QmIsVNreUMyHTXAAcOG2Gu4IIXNVSwwIgZTnq5fdcgWqSLqhf%2BKpTayGLh6xPSolnnPmoZPixzQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1sNc5p60PLsd1bpircA0YxdWzsdtTLMMq44f%2FdV68xCvm0Xt9ben9Ou1Bd9kWZTW1a90gAjOIV%2BvnE%2FphvpgDZJcP8K%2FiTEV%2FgdOL5uDU9gMLgzFRkS4PwsYrvXgQ3yExDc9bbRjvg7Potioy2F3wo6T2%2F9jOBTOHWErxU4k8Xft5wxP%2Fn24vD%2BCUYoI6VhqV1ZwygrD0mqKpcaDoWIpmjns77gkWS%2FPlMF14w51F0Oc7hlenn%2FRQZS%2Bjf7ZLibXrV7IVL8xZ%2BvYZTNmlRbxQ8iJCWm0M7Nbney2kzuMW61%2FeE4eR3SWxtIkBLc5KJn9EENvmS8YC5%2BO96jDluiUuMutuOXGP4zjv1vOKfUlGCLbt4AqbPLtt1%2B2uw7UjeoecF%2F4YY3eXd1bB0QesTsvCgob1Quc4j2axSSuNoyQDcmq0FLd2L9Tj%2BsKSF3h419quS%2F3RSedkD3C0FC4hd9Z1dPZwBnQQ5erkL6W239Bu3r%2FrVx6VXBmkcDh%2BxHEJTZLUYEfMFKtwQoklTu8iHStFt%2F8Nt7%2BdNN8YrOmG%2BUVcClotHqe9i3P%2BxMgMkw1u5xRpAkUMFpiOGTyFCR%2FUCSTzNkQoo5tte6Kqf39cpOGebt9k%2B3QPzbQvpU%2Fl3Hya81Bk24c0vOxo8PKi4ML2648QGOqUB2aQVlTkYn%2FMCweg57ktEqp2j%2FW1oC1JBAIcqnbS5Jg4Sc7%2Bm2eefU02Ymbxga%2BsdN%2FJRk017Uey4E3nFQzCbVVfewQziuBWepH4YO7HGQOq1EKgkBsJzEDdkUKIiInVwaKyfLLIyrr0rFhNmnIIHVMh0FuWwXSVusw9L9bAg1hWr1SnZF5mBFrXsUC%2Fa36AtrKAA5P8mwvzYuUABJs7baXAXSoJt&X-Amz-Signature=da1f83e1b429df84c788f3ddc1fe7eaadbb18c135134fbf67f7ce85d6752ff32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWO4VVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrRugvKrkxG7QmIsVNreUMyHTXAAcOG2Gu4IIXNVSwwIgZTnq5fdcgWqSLqhf%2BKpTayGLh6xPSolnnPmoZPixzQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1sNc5p60PLsd1bpircA0YxdWzsdtTLMMq44f%2FdV68xCvm0Xt9ben9Ou1Bd9kWZTW1a90gAjOIV%2BvnE%2FphvpgDZJcP8K%2FiTEV%2FgdOL5uDU9gMLgzFRkS4PwsYrvXgQ3yExDc9bbRjvg7Potioy2F3wo6T2%2F9jOBTOHWErxU4k8Xft5wxP%2Fn24vD%2BCUYoI6VhqV1ZwygrD0mqKpcaDoWIpmjns77gkWS%2FPlMF14w51F0Oc7hlenn%2FRQZS%2Bjf7ZLibXrV7IVL8xZ%2BvYZTNmlRbxQ8iJCWm0M7Nbney2kzuMW61%2FeE4eR3SWxtIkBLc5KJn9EENvmS8YC5%2BO96jDluiUuMutuOXGP4zjv1vOKfUlGCLbt4AqbPLtt1%2B2uw7UjeoecF%2F4YY3eXd1bB0QesTsvCgob1Quc4j2axSSuNoyQDcmq0FLd2L9Tj%2BsKSF3h419quS%2F3RSedkD3C0FC4hd9Z1dPZwBnQQ5erkL6W239Bu3r%2FrVx6VXBmkcDh%2BxHEJTZLUYEfMFKtwQoklTu8iHStFt%2F8Nt7%2BdNN8YrOmG%2BUVcClotHqe9i3P%2BxMgMkw1u5xRpAkUMFpiOGTyFCR%2FUCSTzNkQoo5tte6Kqf39cpOGebt9k%2B3QPzbQvpU%2Fl3Hya81Bk24c0vOxo8PKi4ML2648QGOqUB2aQVlTkYn%2FMCweg57ktEqp2j%2FW1oC1JBAIcqnbS5Jg4Sc7%2Bm2eefU02Ymbxga%2BsdN%2FJRk017Uey4E3nFQzCbVVfewQziuBWepH4YO7HGQOq1EKgkBsJzEDdkUKIiInVwaKyfLLIyrr0rFhNmnIIHVMh0FuWwXSVusw9L9bAg1hWr1SnZF5mBFrXsUC%2Fa36AtrKAA5P8mwvzYuUABJs7baXAXSoJt&X-Amz-Signature=c8fafa73b1c616b95d81b55307e146ab9123424228966fd4396709f862f14ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWO4VVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrRugvKrkxG7QmIsVNreUMyHTXAAcOG2Gu4IIXNVSwwIgZTnq5fdcgWqSLqhf%2BKpTayGLh6xPSolnnPmoZPixzQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1sNc5p60PLsd1bpircA0YxdWzsdtTLMMq44f%2FdV68xCvm0Xt9ben9Ou1Bd9kWZTW1a90gAjOIV%2BvnE%2FphvpgDZJcP8K%2FiTEV%2FgdOL5uDU9gMLgzFRkS4PwsYrvXgQ3yExDc9bbRjvg7Potioy2F3wo6T2%2F9jOBTOHWErxU4k8Xft5wxP%2Fn24vD%2BCUYoI6VhqV1ZwygrD0mqKpcaDoWIpmjns77gkWS%2FPlMF14w51F0Oc7hlenn%2FRQZS%2Bjf7ZLibXrV7IVL8xZ%2BvYZTNmlRbxQ8iJCWm0M7Nbney2kzuMW61%2FeE4eR3SWxtIkBLc5KJn9EENvmS8YC5%2BO96jDluiUuMutuOXGP4zjv1vOKfUlGCLbt4AqbPLtt1%2B2uw7UjeoecF%2F4YY3eXd1bB0QesTsvCgob1Quc4j2axSSuNoyQDcmq0FLd2L9Tj%2BsKSF3h419quS%2F3RSedkD3C0FC4hd9Z1dPZwBnQQ5erkL6W239Bu3r%2FrVx6VXBmkcDh%2BxHEJTZLUYEfMFKtwQoklTu8iHStFt%2F8Nt7%2BdNN8YrOmG%2BUVcClotHqe9i3P%2BxMgMkw1u5xRpAkUMFpiOGTyFCR%2FUCSTzNkQoo5tte6Kqf39cpOGebt9k%2B3QPzbQvpU%2Fl3Hya81Bk24c0vOxo8PKi4ML2648QGOqUB2aQVlTkYn%2FMCweg57ktEqp2j%2FW1oC1JBAIcqnbS5Jg4Sc7%2Bm2eefU02Ymbxga%2BsdN%2FJRk017Uey4E3nFQzCbVVfewQziuBWepH4YO7HGQOq1EKgkBsJzEDdkUKIiInVwaKyfLLIyrr0rFhNmnIIHVMh0FuWwXSVusw9L9bAg1hWr1SnZF5mBFrXsUC%2Fa36AtrKAA5P8mwvzYuUABJs7baXAXSoJt&X-Amz-Signature=91797b6ec3f7fa67eb718879714ac4899e8765b2d99b3193575cc6f924bdbf24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWO4VVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrRugvKrkxG7QmIsVNreUMyHTXAAcOG2Gu4IIXNVSwwIgZTnq5fdcgWqSLqhf%2BKpTayGLh6xPSolnnPmoZPixzQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1sNc5p60PLsd1bpircA0YxdWzsdtTLMMq44f%2FdV68xCvm0Xt9ben9Ou1Bd9kWZTW1a90gAjOIV%2BvnE%2FphvpgDZJcP8K%2FiTEV%2FgdOL5uDU9gMLgzFRkS4PwsYrvXgQ3yExDc9bbRjvg7Potioy2F3wo6T2%2F9jOBTOHWErxU4k8Xft5wxP%2Fn24vD%2BCUYoI6VhqV1ZwygrD0mqKpcaDoWIpmjns77gkWS%2FPlMF14w51F0Oc7hlenn%2FRQZS%2Bjf7ZLibXrV7IVL8xZ%2BvYZTNmlRbxQ8iJCWm0M7Nbney2kzuMW61%2FeE4eR3SWxtIkBLc5KJn9EENvmS8YC5%2BO96jDluiUuMutuOXGP4zjv1vOKfUlGCLbt4AqbPLtt1%2B2uw7UjeoecF%2F4YY3eXd1bB0QesTsvCgob1Quc4j2axSSuNoyQDcmq0FLd2L9Tj%2BsKSF3h419quS%2F3RSedkD3C0FC4hd9Z1dPZwBnQQ5erkL6W239Bu3r%2FrVx6VXBmkcDh%2BxHEJTZLUYEfMFKtwQoklTu8iHStFt%2F8Nt7%2BdNN8YrOmG%2BUVcClotHqe9i3P%2BxMgMkw1u5xRpAkUMFpiOGTyFCR%2FUCSTzNkQoo5tte6Kqf39cpOGebt9k%2B3QPzbQvpU%2Fl3Hya81Bk24c0vOxo8PKi4ML2648QGOqUB2aQVlTkYn%2FMCweg57ktEqp2j%2FW1oC1JBAIcqnbS5Jg4Sc7%2Bm2eefU02Ymbxga%2BsdN%2FJRk017Uey4E3nFQzCbVVfewQziuBWepH4YO7HGQOq1EKgkBsJzEDdkUKIiInVwaKyfLLIyrr0rFhNmnIIHVMh0FuWwXSVusw9L9bAg1hWr1SnZF5mBFrXsUC%2Fa36AtrKAA5P8mwvzYuUABJs7baXAXSoJt&X-Amz-Signature=543b4a0d7a8c6bd5733839489847aa8bd8208b8e02ea85a54020e0d886082bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWO4VVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrRugvKrkxG7QmIsVNreUMyHTXAAcOG2Gu4IIXNVSwwIgZTnq5fdcgWqSLqhf%2BKpTayGLh6xPSolnnPmoZPixzQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1sNc5p60PLsd1bpircA0YxdWzsdtTLMMq44f%2FdV68xCvm0Xt9ben9Ou1Bd9kWZTW1a90gAjOIV%2BvnE%2FphvpgDZJcP8K%2FiTEV%2FgdOL5uDU9gMLgzFRkS4PwsYrvXgQ3yExDc9bbRjvg7Potioy2F3wo6T2%2F9jOBTOHWErxU4k8Xft5wxP%2Fn24vD%2BCUYoI6VhqV1ZwygrD0mqKpcaDoWIpmjns77gkWS%2FPlMF14w51F0Oc7hlenn%2FRQZS%2Bjf7ZLibXrV7IVL8xZ%2BvYZTNmlRbxQ8iJCWm0M7Nbney2kzuMW61%2FeE4eR3SWxtIkBLc5KJn9EENvmS8YC5%2BO96jDluiUuMutuOXGP4zjv1vOKfUlGCLbt4AqbPLtt1%2B2uw7UjeoecF%2F4YY3eXd1bB0QesTsvCgob1Quc4j2axSSuNoyQDcmq0FLd2L9Tj%2BsKSF3h419quS%2F3RSedkD3C0FC4hd9Z1dPZwBnQQ5erkL6W239Bu3r%2FrVx6VXBmkcDh%2BxHEJTZLUYEfMFKtwQoklTu8iHStFt%2F8Nt7%2BdNN8YrOmG%2BUVcClotHqe9i3P%2BxMgMkw1u5xRpAkUMFpiOGTyFCR%2FUCSTzNkQoo5tte6Kqf39cpOGebt9k%2B3QPzbQvpU%2Fl3Hya81Bk24c0vOxo8PKi4ML2648QGOqUB2aQVlTkYn%2FMCweg57ktEqp2j%2FW1oC1JBAIcqnbS5Jg4Sc7%2Bm2eefU02Ymbxga%2BsdN%2FJRk017Uey4E3nFQzCbVVfewQziuBWepH4YO7HGQOq1EKgkBsJzEDdkUKIiInVwaKyfLLIyrr0rFhNmnIIHVMh0FuWwXSVusw9L9bAg1hWr1SnZF5mBFrXsUC%2Fa36AtrKAA5P8mwvzYuUABJs7baXAXSoJt&X-Amz-Signature=af524cd84589b082a9d065553bf235ed1dc578112eb8912ba25b192a6b81344e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWO4VVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrRugvKrkxG7QmIsVNreUMyHTXAAcOG2Gu4IIXNVSwwIgZTnq5fdcgWqSLqhf%2BKpTayGLh6xPSolnnPmoZPixzQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1sNc5p60PLsd1bpircA0YxdWzsdtTLMMq44f%2FdV68xCvm0Xt9ben9Ou1Bd9kWZTW1a90gAjOIV%2BvnE%2FphvpgDZJcP8K%2FiTEV%2FgdOL5uDU9gMLgzFRkS4PwsYrvXgQ3yExDc9bbRjvg7Potioy2F3wo6T2%2F9jOBTOHWErxU4k8Xft5wxP%2Fn24vD%2BCUYoI6VhqV1ZwygrD0mqKpcaDoWIpmjns77gkWS%2FPlMF14w51F0Oc7hlenn%2FRQZS%2Bjf7ZLibXrV7IVL8xZ%2BvYZTNmlRbxQ8iJCWm0M7Nbney2kzuMW61%2FeE4eR3SWxtIkBLc5KJn9EENvmS8YC5%2BO96jDluiUuMutuOXGP4zjv1vOKfUlGCLbt4AqbPLtt1%2B2uw7UjeoecF%2F4YY3eXd1bB0QesTsvCgob1Quc4j2axSSuNoyQDcmq0FLd2L9Tj%2BsKSF3h419quS%2F3RSedkD3C0FC4hd9Z1dPZwBnQQ5erkL6W239Bu3r%2FrVx6VXBmkcDh%2BxHEJTZLUYEfMFKtwQoklTu8iHStFt%2F8Nt7%2BdNN8YrOmG%2BUVcClotHqe9i3P%2BxMgMkw1u5xRpAkUMFpiOGTyFCR%2FUCSTzNkQoo5tte6Kqf39cpOGebt9k%2B3QPzbQvpU%2Fl3Hya81Bk24c0vOxo8PKi4ML2648QGOqUB2aQVlTkYn%2FMCweg57ktEqp2j%2FW1oC1JBAIcqnbS5Jg4Sc7%2Bm2eefU02Ymbxga%2BsdN%2FJRk017Uey4E3nFQzCbVVfewQziuBWepH4YO7HGQOq1EKgkBsJzEDdkUKIiInVwaKyfLLIyrr0rFhNmnIIHVMh0FuWwXSVusw9L9bAg1hWr1SnZF5mBFrXsUC%2Fa36AtrKAA5P8mwvzYuUABJs7baXAXSoJt&X-Amz-Signature=a2823e2d48c5141eaa3547e12445158afba1518cdc3a88774e19cf87394abd5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWO4VVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrRugvKrkxG7QmIsVNreUMyHTXAAcOG2Gu4IIXNVSwwIgZTnq5fdcgWqSLqhf%2BKpTayGLh6xPSolnnPmoZPixzQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1sNc5p60PLsd1bpircA0YxdWzsdtTLMMq44f%2FdV68xCvm0Xt9ben9Ou1Bd9kWZTW1a90gAjOIV%2BvnE%2FphvpgDZJcP8K%2FiTEV%2FgdOL5uDU9gMLgzFRkS4PwsYrvXgQ3yExDc9bbRjvg7Potioy2F3wo6T2%2F9jOBTOHWErxU4k8Xft5wxP%2Fn24vD%2BCUYoI6VhqV1ZwygrD0mqKpcaDoWIpmjns77gkWS%2FPlMF14w51F0Oc7hlenn%2FRQZS%2Bjf7ZLibXrV7IVL8xZ%2BvYZTNmlRbxQ8iJCWm0M7Nbney2kzuMW61%2FeE4eR3SWxtIkBLc5KJn9EENvmS8YC5%2BO96jDluiUuMutuOXGP4zjv1vOKfUlGCLbt4AqbPLtt1%2B2uw7UjeoecF%2F4YY3eXd1bB0QesTsvCgob1Quc4j2axSSuNoyQDcmq0FLd2L9Tj%2BsKSF3h419quS%2F3RSedkD3C0FC4hd9Z1dPZwBnQQ5erkL6W239Bu3r%2FrVx6VXBmkcDh%2BxHEJTZLUYEfMFKtwQoklTu8iHStFt%2F8Nt7%2BdNN8YrOmG%2BUVcClotHqe9i3P%2BxMgMkw1u5xRpAkUMFpiOGTyFCR%2FUCSTzNkQoo5tte6Kqf39cpOGebt9k%2B3QPzbQvpU%2Fl3Hya81Bk24c0vOxo8PKi4ML2648QGOqUB2aQVlTkYn%2FMCweg57ktEqp2j%2FW1oC1JBAIcqnbS5Jg4Sc7%2Bm2eefU02Ymbxga%2BsdN%2FJRk017Uey4E3nFQzCbVVfewQziuBWepH4YO7HGQOq1EKgkBsJzEDdkUKIiInVwaKyfLLIyrr0rFhNmnIIHVMh0FuWwXSVusw9L9bAg1hWr1SnZF5mBFrXsUC%2Fa36AtrKAA5P8mwvzYuUABJs7baXAXSoJt&X-Amz-Signature=186d72f51774c9dff1894aa7e406939dbd1470f9ac66fb36b4c8d6d7d4edcfba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWO4VVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrRugvKrkxG7QmIsVNreUMyHTXAAcOG2Gu4IIXNVSwwIgZTnq5fdcgWqSLqhf%2BKpTayGLh6xPSolnnPmoZPixzQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1sNc5p60PLsd1bpircA0YxdWzsdtTLMMq44f%2FdV68xCvm0Xt9ben9Ou1Bd9kWZTW1a90gAjOIV%2BvnE%2FphvpgDZJcP8K%2FiTEV%2FgdOL5uDU9gMLgzFRkS4PwsYrvXgQ3yExDc9bbRjvg7Potioy2F3wo6T2%2F9jOBTOHWErxU4k8Xft5wxP%2Fn24vD%2BCUYoI6VhqV1ZwygrD0mqKpcaDoWIpmjns77gkWS%2FPlMF14w51F0Oc7hlenn%2FRQZS%2Bjf7ZLibXrV7IVL8xZ%2BvYZTNmlRbxQ8iJCWm0M7Nbney2kzuMW61%2FeE4eR3SWxtIkBLc5KJn9EENvmS8YC5%2BO96jDluiUuMutuOXGP4zjv1vOKfUlGCLbt4AqbPLtt1%2B2uw7UjeoecF%2F4YY3eXd1bB0QesTsvCgob1Quc4j2axSSuNoyQDcmq0FLd2L9Tj%2BsKSF3h419quS%2F3RSedkD3C0FC4hd9Z1dPZwBnQQ5erkL6W239Bu3r%2FrVx6VXBmkcDh%2BxHEJTZLUYEfMFKtwQoklTu8iHStFt%2F8Nt7%2BdNN8YrOmG%2BUVcClotHqe9i3P%2BxMgMkw1u5xRpAkUMFpiOGTyFCR%2FUCSTzNkQoo5tte6Kqf39cpOGebt9k%2B3QPzbQvpU%2Fl3Hya81Bk24c0vOxo8PKi4ML2648QGOqUB2aQVlTkYn%2FMCweg57ktEqp2j%2FW1oC1JBAIcqnbS5Jg4Sc7%2Bm2eefU02Ymbxga%2BsdN%2FJRk017Uey4E3nFQzCbVVfewQziuBWepH4YO7HGQOq1EKgkBsJzEDdkUKIiInVwaKyfLLIyrr0rFhNmnIIHVMh0FuWwXSVusw9L9bAg1hWr1SnZF5mBFrXsUC%2Fa36AtrKAA5P8mwvzYuUABJs7baXAXSoJt&X-Amz-Signature=5ea5f0526e0533eb08512265a485aeeb080d16599a79244fd5d1959a18ecad43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWO4VVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrRugvKrkxG7QmIsVNreUMyHTXAAcOG2Gu4IIXNVSwwIgZTnq5fdcgWqSLqhf%2BKpTayGLh6xPSolnnPmoZPixzQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1sNc5p60PLsd1bpircA0YxdWzsdtTLMMq44f%2FdV68xCvm0Xt9ben9Ou1Bd9kWZTW1a90gAjOIV%2BvnE%2FphvpgDZJcP8K%2FiTEV%2FgdOL5uDU9gMLgzFRkS4PwsYrvXgQ3yExDc9bbRjvg7Potioy2F3wo6T2%2F9jOBTOHWErxU4k8Xft5wxP%2Fn24vD%2BCUYoI6VhqV1ZwygrD0mqKpcaDoWIpmjns77gkWS%2FPlMF14w51F0Oc7hlenn%2FRQZS%2Bjf7ZLibXrV7IVL8xZ%2BvYZTNmlRbxQ8iJCWm0M7Nbney2kzuMW61%2FeE4eR3SWxtIkBLc5KJn9EENvmS8YC5%2BO96jDluiUuMutuOXGP4zjv1vOKfUlGCLbt4AqbPLtt1%2B2uw7UjeoecF%2F4YY3eXd1bB0QesTsvCgob1Quc4j2axSSuNoyQDcmq0FLd2L9Tj%2BsKSF3h419quS%2F3RSedkD3C0FC4hd9Z1dPZwBnQQ5erkL6W239Bu3r%2FrVx6VXBmkcDh%2BxHEJTZLUYEfMFKtwQoklTu8iHStFt%2F8Nt7%2BdNN8YrOmG%2BUVcClotHqe9i3P%2BxMgMkw1u5xRpAkUMFpiOGTyFCR%2FUCSTzNkQoo5tte6Kqf39cpOGebt9k%2B3QPzbQvpU%2Fl3Hya81Bk24c0vOxo8PKi4ML2648QGOqUB2aQVlTkYn%2FMCweg57ktEqp2j%2FW1oC1JBAIcqnbS5Jg4Sc7%2Bm2eefU02Ymbxga%2BsdN%2FJRk017Uey4E3nFQzCbVVfewQziuBWepH4YO7HGQOq1EKgkBsJzEDdkUKIiInVwaKyfLLIyrr0rFhNmnIIHVMh0FuWwXSVusw9L9bAg1hWr1SnZF5mBFrXsUC%2Fa36AtrKAA5P8mwvzYuUABJs7baXAXSoJt&X-Amz-Signature=25ffcdd4e9626f333c8cd3c2c38be520db3e31a5050f328387de612163d4d5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWO4VVV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZrRugvKrkxG7QmIsVNreUMyHTXAAcOG2Gu4IIXNVSwwIgZTnq5fdcgWqSLqhf%2BKpTayGLh6xPSolnnPmoZPixzQsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1sNc5p60PLsd1bpircA0YxdWzsdtTLMMq44f%2FdV68xCvm0Xt9ben9Ou1Bd9kWZTW1a90gAjOIV%2BvnE%2FphvpgDZJcP8K%2FiTEV%2FgdOL5uDU9gMLgzFRkS4PwsYrvXgQ3yExDc9bbRjvg7Potioy2F3wo6T2%2F9jOBTOHWErxU4k8Xft5wxP%2Fn24vD%2BCUYoI6VhqV1ZwygrD0mqKpcaDoWIpmjns77gkWS%2FPlMF14w51F0Oc7hlenn%2FRQZS%2Bjf7ZLibXrV7IVL8xZ%2BvYZTNmlRbxQ8iJCWm0M7Nbney2kzuMW61%2FeE4eR3SWxtIkBLc5KJn9EENvmS8YC5%2BO96jDluiUuMutuOXGP4zjv1vOKfUlGCLbt4AqbPLtt1%2B2uw7UjeoecF%2F4YY3eXd1bB0QesTsvCgob1Quc4j2axSSuNoyQDcmq0FLd2L9Tj%2BsKSF3h419quS%2F3RSedkD3C0FC4hd9Z1dPZwBnQQ5erkL6W239Bu3r%2FrVx6VXBmkcDh%2BxHEJTZLUYEfMFKtwQoklTu8iHStFt%2F8Nt7%2BdNN8YrOmG%2BUVcClotHqe9i3P%2BxMgMkw1u5xRpAkUMFpiOGTyFCR%2FUCSTzNkQoo5tte6Kqf39cpOGebt9k%2B3QPzbQvpU%2Fl3Hya81Bk24c0vOxo8PKi4ML2648QGOqUB2aQVlTkYn%2FMCweg57ktEqp2j%2FW1oC1JBAIcqnbS5Jg4Sc7%2Bm2eefU02Ymbxga%2BsdN%2FJRk017Uey4E3nFQzCbVVfewQziuBWepH4YO7HGQOq1EKgkBsJzEDdkUKIiInVwaKyfLLIyrr0rFhNmnIIHVMh0FuWwXSVusw9L9bAg1hWr1SnZF5mBFrXsUC%2Fa36AtrKAA5P8mwvzYuUABJs7baXAXSoJt&X-Amz-Signature=543b4a0d7a8c6bd5733839489847aa8bd8208b8e02ea85a54020e0d886082bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
