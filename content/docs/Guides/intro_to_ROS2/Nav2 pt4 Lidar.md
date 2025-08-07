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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ2OBGRR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQDfdbQUpl0s5KkCcghPxth2K9uBcz49ggcGEUE8EVld8AIgLMs1uKq0dsVYra3Z4E1BJ%2BSP9Fsp%2FiVJOByuflo0GC8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVMzzVOmcm2GrOlmircA4G78KaXRHS%2B8qSWcNw7JZRawitFeEivteuCl%2Bdwdx29ASQMJ8M%2BBAFfb6R29h5SQ%2Fd7BPBamcOdVvvdHvBkaljaK%2FJNPWwDdrShuydUC0h5dgM7M8SGDHN4wvEicy0ohOi%2BRgUo0ksCYK8eZHmHkqoPEqSCxcOHi6Ii6xVtKyBFlROrTPHFZdsuTZfJr0EUDsulFJOZmmEgMx9EefmDY3sWKm5qvIlfMCC%2Fi7SSsY8zqW%2FNPzB6mXc6yAwzznRGD4AnbBQ7O1NA9CKLygTDtNBRDwHeZSBi9fL3koNVdqYIJLcUrYoo8zltIZ5nhIa%2BuKXGnug6iJP97nLL633fZ77sr46WrpGW%2Fue1MMnawhM5QN3fD%2BHAP8TWOHybZrXvjv1O0isrM6f7RFCKDh3WEFEbzprRnEJXPwqIyI7flct3iOQKxpGFlQqLnxcRe31WV3AG9vWBXsUTQxCwYLghpSmNMfeEYMZIWK70gDoO8AbwuRuGaXuL7BK5WL50dqb4bp3royqUMGC%2FSYlGlmhYb5gVfPfOGnRyRaTRfJfBsR14ztfq%2BOnR18JujWrjnUe608j4nFTDiDHx341o4OA0OI06wg9klDlv3UEG8NxiVjqxcOlSzS5JiD7eAblpMNLJ08QGOqUBg%2FiOVLMOy6ZX4K%2F153wOP2PLKe%2FEycwWPpWEglAa03ZAZCrUA5rfK9NJrUhzu7ETbwthb2uX42D5RFShZYZ2EoNjWaRTQaY%2FeNcKUWzHbztE0VlyWjgi4bdmIdIrR%2BtmmSmcHDY3sCuo%2BkUuxfkJDTuO464rgn55jcwi7DZBT3%2BtKEdznh3frbmVgZsIfF2QhJQ%2Foc1YmOu%2BGd0IXcBu9WqIxBph&X-Amz-Signature=fbb18877a7f17ca0e8e4e3b795592613dfb2397339f1fb53f1263b6dbfbdfc43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISEKD2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC4nUjRJU%2Bum043Dpvk%2BsMedHRJtRxgfaYC%2BheqXv4ADAIhAMRIfWrh%2F64796ij%2BikVybQ4b1Iq5zNwBBGzTbQQVfOoKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLERLsqlatxxz3RGcq3APwccVZgzeTylpTR%2BPBjqffJuwlgf2PCxc8EZmP9dU8T8ngM%2BjqKuHV1sgk0xEzJ6c1RL1lVcqc0wbwIgBhLjUv3GCzmgxiuvQCfoHSd%2FuULyV3ocZ8NbovRjIiYpl0W64%2B24BxhmxrRx35fFS1iOk%2FPstu27%2BwIZCTmrltk2OSqPa6Qi3WufpFFdDtj7rT2oiKWEWv%2BS9vkxSsLDLGju45%2FGrH%2BMaFnKS40cNuetLYYb4jrVloR9GkavJCCVsfJEkxq3ru9MgK64RMI14bPesk%2BogOsOGtMf7MM3qPcAtXJFuRx254%2BBsTGlqDK%2FW2k4k2TaUrjmtJOAbcZK68vRJu24jsUXA6L54PD5%2Ba7NJu6TjwwPGNduzn9%2FmZH1%2FlfqOwwdqxns4HysTJuX3B7QSDy2o%2Fj1IrltZKuTre8NBEKvyG30faiuEH7H4ItoA%2FbfD3FjcUq0bjm2JJzd%2Fm6gpvsDNZFQK3TUvEMUGGNg0ur%2BAw2mRgBBdzy%2ByvDTA5u%2FLQH%2F%2FA2FhqFhcN3fbkABee0CIcAUnsgwqBz3d0C4WK8SdVMpnhuNLAe76aK8rdbrIK3XnFiuMfZLGh8UPdy6WqhlYPxmF1LC7C037SQnS0HVrnwQxfWLPbJd0T6zCKytPEBjqkAQENwKqQma5nsEonxyMGQldUWW8aoNy4%2Fdo%2BQ9%2B8uqjkbnn3mydrZ9TAkZ7YLaWQxxNoXJDJdsAK%2FMYhggq%2FtPb7CWNdgQOAmQ5omyVm0lG5yMVCMJhoWoKnxXSqbzGrU2BpQ0Oin8Suf4ync6GQiZcROPB2QD%2BKIfZKWDUaJuA%2B%2BhYo0z4AmFreje5szGAiQnKIqk68cVEBvK6lDZfsxXmYaO4Q&X-Amz-Signature=281a0d828856ae6ff3984698a9c76a386ec1e18009a340ffc814de9a5f71ce5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISEKD2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC4nUjRJU%2Bum043Dpvk%2BsMedHRJtRxgfaYC%2BheqXv4ADAIhAMRIfWrh%2F64796ij%2BikVybQ4b1Iq5zNwBBGzTbQQVfOoKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLERLsqlatxxz3RGcq3APwccVZgzeTylpTR%2BPBjqffJuwlgf2PCxc8EZmP9dU8T8ngM%2BjqKuHV1sgk0xEzJ6c1RL1lVcqc0wbwIgBhLjUv3GCzmgxiuvQCfoHSd%2FuULyV3ocZ8NbovRjIiYpl0W64%2B24BxhmxrRx35fFS1iOk%2FPstu27%2BwIZCTmrltk2OSqPa6Qi3WufpFFdDtj7rT2oiKWEWv%2BS9vkxSsLDLGju45%2FGrH%2BMaFnKS40cNuetLYYb4jrVloR9GkavJCCVsfJEkxq3ru9MgK64RMI14bPesk%2BogOsOGtMf7MM3qPcAtXJFuRx254%2BBsTGlqDK%2FW2k4k2TaUrjmtJOAbcZK68vRJu24jsUXA6L54PD5%2Ba7NJu6TjwwPGNduzn9%2FmZH1%2FlfqOwwdqxns4HysTJuX3B7QSDy2o%2Fj1IrltZKuTre8NBEKvyG30faiuEH7H4ItoA%2FbfD3FjcUq0bjm2JJzd%2Fm6gpvsDNZFQK3TUvEMUGGNg0ur%2BAw2mRgBBdzy%2ByvDTA5u%2FLQH%2F%2FA2FhqFhcN3fbkABee0CIcAUnsgwqBz3d0C4WK8SdVMpnhuNLAe76aK8rdbrIK3XnFiuMfZLGh8UPdy6WqhlYPxmF1LC7C037SQnS0HVrnwQxfWLPbJd0T6zCKytPEBjqkAQENwKqQma5nsEonxyMGQldUWW8aoNy4%2Fdo%2BQ9%2B8uqjkbnn3mydrZ9TAkZ7YLaWQxxNoXJDJdsAK%2FMYhggq%2FtPb7CWNdgQOAmQ5omyVm0lG5yMVCMJhoWoKnxXSqbzGrU2BpQ0Oin8Suf4ync6GQiZcROPB2QD%2BKIfZKWDUaJuA%2B%2BhYo0z4AmFreje5szGAiQnKIqk68cVEBvK6lDZfsxXmYaO4Q&X-Amz-Signature=a96ffa56cec673d67aaafedad33a2e9ad918140070c91b63cde04a24d186739e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISEKD2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC4nUjRJU%2Bum043Dpvk%2BsMedHRJtRxgfaYC%2BheqXv4ADAIhAMRIfWrh%2F64796ij%2BikVybQ4b1Iq5zNwBBGzTbQQVfOoKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLERLsqlatxxz3RGcq3APwccVZgzeTylpTR%2BPBjqffJuwlgf2PCxc8EZmP9dU8T8ngM%2BjqKuHV1sgk0xEzJ6c1RL1lVcqc0wbwIgBhLjUv3GCzmgxiuvQCfoHSd%2FuULyV3ocZ8NbovRjIiYpl0W64%2B24BxhmxrRx35fFS1iOk%2FPstu27%2BwIZCTmrltk2OSqPa6Qi3WufpFFdDtj7rT2oiKWEWv%2BS9vkxSsLDLGju45%2FGrH%2BMaFnKS40cNuetLYYb4jrVloR9GkavJCCVsfJEkxq3ru9MgK64RMI14bPesk%2BogOsOGtMf7MM3qPcAtXJFuRx254%2BBsTGlqDK%2FW2k4k2TaUrjmtJOAbcZK68vRJu24jsUXA6L54PD5%2Ba7NJu6TjwwPGNduzn9%2FmZH1%2FlfqOwwdqxns4HysTJuX3B7QSDy2o%2Fj1IrltZKuTre8NBEKvyG30faiuEH7H4ItoA%2FbfD3FjcUq0bjm2JJzd%2Fm6gpvsDNZFQK3TUvEMUGGNg0ur%2BAw2mRgBBdzy%2ByvDTA5u%2FLQH%2F%2FA2FhqFhcN3fbkABee0CIcAUnsgwqBz3d0C4WK8SdVMpnhuNLAe76aK8rdbrIK3XnFiuMfZLGh8UPdy6WqhlYPxmF1LC7C037SQnS0HVrnwQxfWLPbJd0T6zCKytPEBjqkAQENwKqQma5nsEonxyMGQldUWW8aoNy4%2Fdo%2BQ9%2B8uqjkbnn3mydrZ9TAkZ7YLaWQxxNoXJDJdsAK%2FMYhggq%2FtPb7CWNdgQOAmQ5omyVm0lG5yMVCMJhoWoKnxXSqbzGrU2BpQ0Oin8Suf4ync6GQiZcROPB2QD%2BKIfZKWDUaJuA%2B%2BhYo0z4AmFreje5szGAiQnKIqk68cVEBvK6lDZfsxXmYaO4Q&X-Amz-Signature=04b8f56bb8cc5e189996f4c2d28f9eae30b52fde6bfac7dcebcc10b7660f5a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISEKD2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC4nUjRJU%2Bum043Dpvk%2BsMedHRJtRxgfaYC%2BheqXv4ADAIhAMRIfWrh%2F64796ij%2BikVybQ4b1Iq5zNwBBGzTbQQVfOoKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLERLsqlatxxz3RGcq3APwccVZgzeTylpTR%2BPBjqffJuwlgf2PCxc8EZmP9dU8T8ngM%2BjqKuHV1sgk0xEzJ6c1RL1lVcqc0wbwIgBhLjUv3GCzmgxiuvQCfoHSd%2FuULyV3ocZ8NbovRjIiYpl0W64%2B24BxhmxrRx35fFS1iOk%2FPstu27%2BwIZCTmrltk2OSqPa6Qi3WufpFFdDtj7rT2oiKWEWv%2BS9vkxSsLDLGju45%2FGrH%2BMaFnKS40cNuetLYYb4jrVloR9GkavJCCVsfJEkxq3ru9MgK64RMI14bPesk%2BogOsOGtMf7MM3qPcAtXJFuRx254%2BBsTGlqDK%2FW2k4k2TaUrjmtJOAbcZK68vRJu24jsUXA6L54PD5%2Ba7NJu6TjwwPGNduzn9%2FmZH1%2FlfqOwwdqxns4HysTJuX3B7QSDy2o%2Fj1IrltZKuTre8NBEKvyG30faiuEH7H4ItoA%2FbfD3FjcUq0bjm2JJzd%2Fm6gpvsDNZFQK3TUvEMUGGNg0ur%2BAw2mRgBBdzy%2ByvDTA5u%2FLQH%2F%2FA2FhqFhcN3fbkABee0CIcAUnsgwqBz3d0C4WK8SdVMpnhuNLAe76aK8rdbrIK3XnFiuMfZLGh8UPdy6WqhlYPxmF1LC7C037SQnS0HVrnwQxfWLPbJd0T6zCKytPEBjqkAQENwKqQma5nsEonxyMGQldUWW8aoNy4%2Fdo%2BQ9%2B8uqjkbnn3mydrZ9TAkZ7YLaWQxxNoXJDJdsAK%2FMYhggq%2FtPb7CWNdgQOAmQ5omyVm0lG5yMVCMJhoWoKnxXSqbzGrU2BpQ0Oin8Suf4ync6GQiZcROPB2QD%2BKIfZKWDUaJuA%2B%2BhYo0z4AmFreje5szGAiQnKIqk68cVEBvK6lDZfsxXmYaO4Q&X-Amz-Signature=d1e693ce6c5d43311e59b89fd83c16b83c430d1c95a1515a17de754fd2983b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISEKD2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC4nUjRJU%2Bum043Dpvk%2BsMedHRJtRxgfaYC%2BheqXv4ADAIhAMRIfWrh%2F64796ij%2BikVybQ4b1Iq5zNwBBGzTbQQVfOoKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLERLsqlatxxz3RGcq3APwccVZgzeTylpTR%2BPBjqffJuwlgf2PCxc8EZmP9dU8T8ngM%2BjqKuHV1sgk0xEzJ6c1RL1lVcqc0wbwIgBhLjUv3GCzmgxiuvQCfoHSd%2FuULyV3ocZ8NbovRjIiYpl0W64%2B24BxhmxrRx35fFS1iOk%2FPstu27%2BwIZCTmrltk2OSqPa6Qi3WufpFFdDtj7rT2oiKWEWv%2BS9vkxSsLDLGju45%2FGrH%2BMaFnKS40cNuetLYYb4jrVloR9GkavJCCVsfJEkxq3ru9MgK64RMI14bPesk%2BogOsOGtMf7MM3qPcAtXJFuRx254%2BBsTGlqDK%2FW2k4k2TaUrjmtJOAbcZK68vRJu24jsUXA6L54PD5%2Ba7NJu6TjwwPGNduzn9%2FmZH1%2FlfqOwwdqxns4HysTJuX3B7QSDy2o%2Fj1IrltZKuTre8NBEKvyG30faiuEH7H4ItoA%2FbfD3FjcUq0bjm2JJzd%2Fm6gpvsDNZFQK3TUvEMUGGNg0ur%2BAw2mRgBBdzy%2ByvDTA5u%2FLQH%2F%2FA2FhqFhcN3fbkABee0CIcAUnsgwqBz3d0C4WK8SdVMpnhuNLAe76aK8rdbrIK3XnFiuMfZLGh8UPdy6WqhlYPxmF1LC7C037SQnS0HVrnwQxfWLPbJd0T6zCKytPEBjqkAQENwKqQma5nsEonxyMGQldUWW8aoNy4%2Fdo%2BQ9%2B8uqjkbnn3mydrZ9TAkZ7YLaWQxxNoXJDJdsAK%2FMYhggq%2FtPb7CWNdgQOAmQ5omyVm0lG5yMVCMJhoWoKnxXSqbzGrU2BpQ0Oin8Suf4ync6GQiZcROPB2QD%2BKIfZKWDUaJuA%2B%2BhYo0z4AmFreje5szGAiQnKIqk68cVEBvK6lDZfsxXmYaO4Q&X-Amz-Signature=77da742ee6888f6e4cdcb5524da43619af83aba1b11562ab8d5f03ee407c390a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISEKD2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC4nUjRJU%2Bum043Dpvk%2BsMedHRJtRxgfaYC%2BheqXv4ADAIhAMRIfWrh%2F64796ij%2BikVybQ4b1Iq5zNwBBGzTbQQVfOoKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLERLsqlatxxz3RGcq3APwccVZgzeTylpTR%2BPBjqffJuwlgf2PCxc8EZmP9dU8T8ngM%2BjqKuHV1sgk0xEzJ6c1RL1lVcqc0wbwIgBhLjUv3GCzmgxiuvQCfoHSd%2FuULyV3ocZ8NbovRjIiYpl0W64%2B24BxhmxrRx35fFS1iOk%2FPstu27%2BwIZCTmrltk2OSqPa6Qi3WufpFFdDtj7rT2oiKWEWv%2BS9vkxSsLDLGju45%2FGrH%2BMaFnKS40cNuetLYYb4jrVloR9GkavJCCVsfJEkxq3ru9MgK64RMI14bPesk%2BogOsOGtMf7MM3qPcAtXJFuRx254%2BBsTGlqDK%2FW2k4k2TaUrjmtJOAbcZK68vRJu24jsUXA6L54PD5%2Ba7NJu6TjwwPGNduzn9%2FmZH1%2FlfqOwwdqxns4HysTJuX3B7QSDy2o%2Fj1IrltZKuTre8NBEKvyG30faiuEH7H4ItoA%2FbfD3FjcUq0bjm2JJzd%2Fm6gpvsDNZFQK3TUvEMUGGNg0ur%2BAw2mRgBBdzy%2ByvDTA5u%2FLQH%2F%2FA2FhqFhcN3fbkABee0CIcAUnsgwqBz3d0C4WK8SdVMpnhuNLAe76aK8rdbrIK3XnFiuMfZLGh8UPdy6WqhlYPxmF1LC7C037SQnS0HVrnwQxfWLPbJd0T6zCKytPEBjqkAQENwKqQma5nsEonxyMGQldUWW8aoNy4%2Fdo%2BQ9%2B8uqjkbnn3mydrZ9TAkZ7YLaWQxxNoXJDJdsAK%2FMYhggq%2FtPb7CWNdgQOAmQ5omyVm0lG5yMVCMJhoWoKnxXSqbzGrU2BpQ0Oin8Suf4ync6GQiZcROPB2QD%2BKIfZKWDUaJuA%2B%2BhYo0z4AmFreje5szGAiQnKIqk68cVEBvK6lDZfsxXmYaO4Q&X-Amz-Signature=97a5bb9da60b9ec6f684ae96ee4e577a55b1b3fe06dcd736fee357ab4fdba902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISEKD2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC4nUjRJU%2Bum043Dpvk%2BsMedHRJtRxgfaYC%2BheqXv4ADAIhAMRIfWrh%2F64796ij%2BikVybQ4b1Iq5zNwBBGzTbQQVfOoKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLERLsqlatxxz3RGcq3APwccVZgzeTylpTR%2BPBjqffJuwlgf2PCxc8EZmP9dU8T8ngM%2BjqKuHV1sgk0xEzJ6c1RL1lVcqc0wbwIgBhLjUv3GCzmgxiuvQCfoHSd%2FuULyV3ocZ8NbovRjIiYpl0W64%2B24BxhmxrRx35fFS1iOk%2FPstu27%2BwIZCTmrltk2OSqPa6Qi3WufpFFdDtj7rT2oiKWEWv%2BS9vkxSsLDLGju45%2FGrH%2BMaFnKS40cNuetLYYb4jrVloR9GkavJCCVsfJEkxq3ru9MgK64RMI14bPesk%2BogOsOGtMf7MM3qPcAtXJFuRx254%2BBsTGlqDK%2FW2k4k2TaUrjmtJOAbcZK68vRJu24jsUXA6L54PD5%2Ba7NJu6TjwwPGNduzn9%2FmZH1%2FlfqOwwdqxns4HysTJuX3B7QSDy2o%2Fj1IrltZKuTre8NBEKvyG30faiuEH7H4ItoA%2FbfD3FjcUq0bjm2JJzd%2Fm6gpvsDNZFQK3TUvEMUGGNg0ur%2BAw2mRgBBdzy%2ByvDTA5u%2FLQH%2F%2FA2FhqFhcN3fbkABee0CIcAUnsgwqBz3d0C4WK8SdVMpnhuNLAe76aK8rdbrIK3XnFiuMfZLGh8UPdy6WqhlYPxmF1LC7C037SQnS0HVrnwQxfWLPbJd0T6zCKytPEBjqkAQENwKqQma5nsEonxyMGQldUWW8aoNy4%2Fdo%2BQ9%2B8uqjkbnn3mydrZ9TAkZ7YLaWQxxNoXJDJdsAK%2FMYhggq%2FtPb7CWNdgQOAmQ5omyVm0lG5yMVCMJhoWoKnxXSqbzGrU2BpQ0Oin8Suf4ync6GQiZcROPB2QD%2BKIfZKWDUaJuA%2B%2BhYo0z4AmFreje5szGAiQnKIqk68cVEBvK6lDZfsxXmYaO4Q&X-Amz-Signature=6c973befd9c4a7e7d60618c9cfe593a82d7eb80a2678d578484acea6dfa14273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISEKD2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC4nUjRJU%2Bum043Dpvk%2BsMedHRJtRxgfaYC%2BheqXv4ADAIhAMRIfWrh%2F64796ij%2BikVybQ4b1Iq5zNwBBGzTbQQVfOoKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLERLsqlatxxz3RGcq3APwccVZgzeTylpTR%2BPBjqffJuwlgf2PCxc8EZmP9dU8T8ngM%2BjqKuHV1sgk0xEzJ6c1RL1lVcqc0wbwIgBhLjUv3GCzmgxiuvQCfoHSd%2FuULyV3ocZ8NbovRjIiYpl0W64%2B24BxhmxrRx35fFS1iOk%2FPstu27%2BwIZCTmrltk2OSqPa6Qi3WufpFFdDtj7rT2oiKWEWv%2BS9vkxSsLDLGju45%2FGrH%2BMaFnKS40cNuetLYYb4jrVloR9GkavJCCVsfJEkxq3ru9MgK64RMI14bPesk%2BogOsOGtMf7MM3qPcAtXJFuRx254%2BBsTGlqDK%2FW2k4k2TaUrjmtJOAbcZK68vRJu24jsUXA6L54PD5%2Ba7NJu6TjwwPGNduzn9%2FmZH1%2FlfqOwwdqxns4HysTJuX3B7QSDy2o%2Fj1IrltZKuTre8NBEKvyG30faiuEH7H4ItoA%2FbfD3FjcUq0bjm2JJzd%2Fm6gpvsDNZFQK3TUvEMUGGNg0ur%2BAw2mRgBBdzy%2ByvDTA5u%2FLQH%2F%2FA2FhqFhcN3fbkABee0CIcAUnsgwqBz3d0C4WK8SdVMpnhuNLAe76aK8rdbrIK3XnFiuMfZLGh8UPdy6WqhlYPxmF1LC7C037SQnS0HVrnwQxfWLPbJd0T6zCKytPEBjqkAQENwKqQma5nsEonxyMGQldUWW8aoNy4%2Fdo%2BQ9%2B8uqjkbnn3mydrZ9TAkZ7YLaWQxxNoXJDJdsAK%2FMYhggq%2FtPb7CWNdgQOAmQ5omyVm0lG5yMVCMJhoWoKnxXSqbzGrU2BpQ0Oin8Suf4ync6GQiZcROPB2QD%2BKIfZKWDUaJuA%2B%2BhYo0z4AmFreje5szGAiQnKIqk68cVEBvK6lDZfsxXmYaO4Q&X-Amz-Signature=ef950b6157dc58e32c016052209266acb3d539526a571372328eecb4fa041b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISEKD2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC4nUjRJU%2Bum043Dpvk%2BsMedHRJtRxgfaYC%2BheqXv4ADAIhAMRIfWrh%2F64796ij%2BikVybQ4b1Iq5zNwBBGzTbQQVfOoKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLERLsqlatxxz3RGcq3APwccVZgzeTylpTR%2BPBjqffJuwlgf2PCxc8EZmP9dU8T8ngM%2BjqKuHV1sgk0xEzJ6c1RL1lVcqc0wbwIgBhLjUv3GCzmgxiuvQCfoHSd%2FuULyV3ocZ8NbovRjIiYpl0W64%2B24BxhmxrRx35fFS1iOk%2FPstu27%2BwIZCTmrltk2OSqPa6Qi3WufpFFdDtj7rT2oiKWEWv%2BS9vkxSsLDLGju45%2FGrH%2BMaFnKS40cNuetLYYb4jrVloR9GkavJCCVsfJEkxq3ru9MgK64RMI14bPesk%2BogOsOGtMf7MM3qPcAtXJFuRx254%2BBsTGlqDK%2FW2k4k2TaUrjmtJOAbcZK68vRJu24jsUXA6L54PD5%2Ba7NJu6TjwwPGNduzn9%2FmZH1%2FlfqOwwdqxns4HysTJuX3B7QSDy2o%2Fj1IrltZKuTre8NBEKvyG30faiuEH7H4ItoA%2FbfD3FjcUq0bjm2JJzd%2Fm6gpvsDNZFQK3TUvEMUGGNg0ur%2BAw2mRgBBdzy%2ByvDTA5u%2FLQH%2F%2FA2FhqFhcN3fbkABee0CIcAUnsgwqBz3d0C4WK8SdVMpnhuNLAe76aK8rdbrIK3XnFiuMfZLGh8UPdy6WqhlYPxmF1LC7C037SQnS0HVrnwQxfWLPbJd0T6zCKytPEBjqkAQENwKqQma5nsEonxyMGQldUWW8aoNy4%2Fdo%2BQ9%2B8uqjkbnn3mydrZ9TAkZ7YLaWQxxNoXJDJdsAK%2FMYhggq%2FtPb7CWNdgQOAmQ5omyVm0lG5yMVCMJhoWoKnxXSqbzGrU2BpQ0Oin8Suf4ync6GQiZcROPB2QD%2BKIfZKWDUaJuA%2B%2BhYo0z4AmFreje5szGAiQnKIqk68cVEBvK6lDZfsxXmYaO4Q&X-Amz-Signature=b4d8c1337e5c40cf671b8bf96b3328335b7ab440e101cb3742538e53ee0d5867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZISEKD2T%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQC4nUjRJU%2Bum043Dpvk%2BsMedHRJtRxgfaYC%2BheqXv4ADAIhAMRIfWrh%2F64796ij%2BikVybQ4b1Iq5zNwBBGzTbQQVfOoKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLERLsqlatxxz3RGcq3APwccVZgzeTylpTR%2BPBjqffJuwlgf2PCxc8EZmP9dU8T8ngM%2BjqKuHV1sgk0xEzJ6c1RL1lVcqc0wbwIgBhLjUv3GCzmgxiuvQCfoHSd%2FuULyV3ocZ8NbovRjIiYpl0W64%2B24BxhmxrRx35fFS1iOk%2FPstu27%2BwIZCTmrltk2OSqPa6Qi3WufpFFdDtj7rT2oiKWEWv%2BS9vkxSsLDLGju45%2FGrH%2BMaFnKS40cNuetLYYb4jrVloR9GkavJCCVsfJEkxq3ru9MgK64RMI14bPesk%2BogOsOGtMf7MM3qPcAtXJFuRx254%2BBsTGlqDK%2FW2k4k2TaUrjmtJOAbcZK68vRJu24jsUXA6L54PD5%2Ba7NJu6TjwwPGNduzn9%2FmZH1%2FlfqOwwdqxns4HysTJuX3B7QSDy2o%2Fj1IrltZKuTre8NBEKvyG30faiuEH7H4ItoA%2FbfD3FjcUq0bjm2JJzd%2Fm6gpvsDNZFQK3TUvEMUGGNg0ur%2BAw2mRgBBdzy%2ByvDTA5u%2FLQH%2F%2FA2FhqFhcN3fbkABee0CIcAUnsgwqBz3d0C4WK8SdVMpnhuNLAe76aK8rdbrIK3XnFiuMfZLGh8UPdy6WqhlYPxmF1LC7C037SQnS0HVrnwQxfWLPbJd0T6zCKytPEBjqkAQENwKqQma5nsEonxyMGQldUWW8aoNy4%2Fdo%2BQ9%2B8uqjkbnn3mydrZ9TAkZ7YLaWQxxNoXJDJdsAK%2FMYhggq%2FtPb7CWNdgQOAmQ5omyVm0lG5yMVCMJhoWoKnxXSqbzGrU2BpQ0Oin8Suf4ync6GQiZcROPB2QD%2BKIfZKWDUaJuA%2B%2BhYo0z4AmFreje5szGAiQnKIqk68cVEBvK6lDZfsxXmYaO4Q&X-Amz-Signature=d1e693ce6c5d43311e59b89fd83c16b83c430d1c95a1515a17de754fd2983b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
