---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQSMZQ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkoYbHF4gs9Sj7bJRfCbXkWs0Y%2B%2F%2FQV2zuV4imz4YU9AIgUwtKpJVMZSks92sLlIXf%2BQU%2BAppNBMx%2BDMfHUBUjI5MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOOXPgWs3nQv7zyoCrcA86jGPUmEIaWOP64krKY3pdPcmIL9gHCyl7apRMkjwZsEsWQRXTNA3adLtvAPBcIy6ZzFx7qZYolleYH67oPxvoKtKATCu0DTEUuftawhFbAwJS%2BY%2BdalCkjBYek7zl0c5CtZiJJp7PKnH%2FHj8OmYx5iXRp8vwamExDbyoezAhhs9jhn%2BrDjHl7O%2FmYg%2BN4uVenOMM5J0%2BWKu9Y0BcSVxsbM8BeWif2d%2ByW7V3x2edyLgnTbWOTEtC3Dw%2BKQjS%2FVEvxDcNt%2FMeay%2B9Uc83RRYM%2Bhp45uN0e6YxqK0hVtCbF36qZIUilxPDljnTlqSqHsl3t2mW1CK6jP0cebOn8cIhwyTPNYHL1BX3IHyPJLEKVaySAN7nwTvK4bF7jNKEIsEDfpQ8HoIgsP2a4HcWScKpgtqqwnl4WusSywZ2kdAJVWvL53NazUYra0ROGhr7peyuVJTyl3dBEJ8wGHW2n0Zvhsrvv%2Fg1VmuyoH1Ne1YLvUMr%2FIn%2Buc%2Bf0lHsBUvH3U%2FY8GJBOC3ANO%2B6gt0R84KnSx4u071%2BzSfB0ECOpIjXD15M7pX9J7Ete%2BPo8EBiG7HSWLgCuonKh%2Fw2YDleGiNAkOkRu6EaWEFKW8uoPpzSanbgz7M%2FonFp9VMX8lMM2648QGOqUBfTSmUFKds9mFMhm52v0C%2F05%2BP1ShWTuXLJXv%2BVk5H1wuTMWh5Ms8VjFdY%2BOqXnZq96Ia54uHikbOA2lthiXO%2FRXLbwOaOPb8Gg2C%2Bs3Y%2ByRKsaVWqe16qegzL%2BgHC5O81kHbe2vjvy3wbVmqABZn48xHTJE0PRb6Rj9bjJiEBXnqb1Gdifzu6RPRYyAsHa4FnujghJAaInPekwAesH8f%2FKzR3oCM&X-Amz-Signature=df3a8bd05c1a8b4c2e3952adc9d43501b3890800f27d327a65ab1fe8e13f188e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQSMZQ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkoYbHF4gs9Sj7bJRfCbXkWs0Y%2B%2F%2FQV2zuV4imz4YU9AIgUwtKpJVMZSks92sLlIXf%2BQU%2BAppNBMx%2BDMfHUBUjI5MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOOXPgWs3nQv7zyoCrcA86jGPUmEIaWOP64krKY3pdPcmIL9gHCyl7apRMkjwZsEsWQRXTNA3adLtvAPBcIy6ZzFx7qZYolleYH67oPxvoKtKATCu0DTEUuftawhFbAwJS%2BY%2BdalCkjBYek7zl0c5CtZiJJp7PKnH%2FHj8OmYx5iXRp8vwamExDbyoezAhhs9jhn%2BrDjHl7O%2FmYg%2BN4uVenOMM5J0%2BWKu9Y0BcSVxsbM8BeWif2d%2ByW7V3x2edyLgnTbWOTEtC3Dw%2BKQjS%2FVEvxDcNt%2FMeay%2B9Uc83RRYM%2Bhp45uN0e6YxqK0hVtCbF36qZIUilxPDljnTlqSqHsl3t2mW1CK6jP0cebOn8cIhwyTPNYHL1BX3IHyPJLEKVaySAN7nwTvK4bF7jNKEIsEDfpQ8HoIgsP2a4HcWScKpgtqqwnl4WusSywZ2kdAJVWvL53NazUYra0ROGhr7peyuVJTyl3dBEJ8wGHW2n0Zvhsrvv%2Fg1VmuyoH1Ne1YLvUMr%2FIn%2Buc%2Bf0lHsBUvH3U%2FY8GJBOC3ANO%2B6gt0R84KnSx4u071%2BzSfB0ECOpIjXD15M7pX9J7Ete%2BPo8EBiG7HSWLgCuonKh%2Fw2YDleGiNAkOkRu6EaWEFKW8uoPpzSanbgz7M%2FonFp9VMX8lMM2648QGOqUBfTSmUFKds9mFMhm52v0C%2F05%2BP1ShWTuXLJXv%2BVk5H1wuTMWh5Ms8VjFdY%2BOqXnZq96Ia54uHikbOA2lthiXO%2FRXLbwOaOPb8Gg2C%2Bs3Y%2ByRKsaVWqe16qegzL%2BgHC5O81kHbe2vjvy3wbVmqABZn48xHTJE0PRb6Rj9bjJiEBXnqb1Gdifzu6RPRYyAsHa4FnujghJAaInPekwAesH8f%2FKzR3oCM&X-Amz-Signature=5c963e23e207ff438f6a5175c4bee17d87ea9769d636b7181043bb7e3bc69a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQSMZQ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkoYbHF4gs9Sj7bJRfCbXkWs0Y%2B%2F%2FQV2zuV4imz4YU9AIgUwtKpJVMZSks92sLlIXf%2BQU%2BAppNBMx%2BDMfHUBUjI5MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOOXPgWs3nQv7zyoCrcA86jGPUmEIaWOP64krKY3pdPcmIL9gHCyl7apRMkjwZsEsWQRXTNA3adLtvAPBcIy6ZzFx7qZYolleYH67oPxvoKtKATCu0DTEUuftawhFbAwJS%2BY%2BdalCkjBYek7zl0c5CtZiJJp7PKnH%2FHj8OmYx5iXRp8vwamExDbyoezAhhs9jhn%2BrDjHl7O%2FmYg%2BN4uVenOMM5J0%2BWKu9Y0BcSVxsbM8BeWif2d%2ByW7V3x2edyLgnTbWOTEtC3Dw%2BKQjS%2FVEvxDcNt%2FMeay%2B9Uc83RRYM%2Bhp45uN0e6YxqK0hVtCbF36qZIUilxPDljnTlqSqHsl3t2mW1CK6jP0cebOn8cIhwyTPNYHL1BX3IHyPJLEKVaySAN7nwTvK4bF7jNKEIsEDfpQ8HoIgsP2a4HcWScKpgtqqwnl4WusSywZ2kdAJVWvL53NazUYra0ROGhr7peyuVJTyl3dBEJ8wGHW2n0Zvhsrvv%2Fg1VmuyoH1Ne1YLvUMr%2FIn%2Buc%2Bf0lHsBUvH3U%2FY8GJBOC3ANO%2B6gt0R84KnSx4u071%2BzSfB0ECOpIjXD15M7pX9J7Ete%2BPo8EBiG7HSWLgCuonKh%2Fw2YDleGiNAkOkRu6EaWEFKW8uoPpzSanbgz7M%2FonFp9VMX8lMM2648QGOqUBfTSmUFKds9mFMhm52v0C%2F05%2BP1ShWTuXLJXv%2BVk5H1wuTMWh5Ms8VjFdY%2BOqXnZq96Ia54uHikbOA2lthiXO%2FRXLbwOaOPb8Gg2C%2Bs3Y%2ByRKsaVWqe16qegzL%2BgHC5O81kHbe2vjvy3wbVmqABZn48xHTJE0PRb6Rj9bjJiEBXnqb1Gdifzu6RPRYyAsHa4FnujghJAaInPekwAesH8f%2FKzR3oCM&X-Amz-Signature=227fa8ca30b957782afa54667385ea36ca8d299c128ef0f0a26997a0385d4745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQSMZQ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkoYbHF4gs9Sj7bJRfCbXkWs0Y%2B%2F%2FQV2zuV4imz4YU9AIgUwtKpJVMZSks92sLlIXf%2BQU%2BAppNBMx%2BDMfHUBUjI5MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOOXPgWs3nQv7zyoCrcA86jGPUmEIaWOP64krKY3pdPcmIL9gHCyl7apRMkjwZsEsWQRXTNA3adLtvAPBcIy6ZzFx7qZYolleYH67oPxvoKtKATCu0DTEUuftawhFbAwJS%2BY%2BdalCkjBYek7zl0c5CtZiJJp7PKnH%2FHj8OmYx5iXRp8vwamExDbyoezAhhs9jhn%2BrDjHl7O%2FmYg%2BN4uVenOMM5J0%2BWKu9Y0BcSVxsbM8BeWif2d%2ByW7V3x2edyLgnTbWOTEtC3Dw%2BKQjS%2FVEvxDcNt%2FMeay%2B9Uc83RRYM%2Bhp45uN0e6YxqK0hVtCbF36qZIUilxPDljnTlqSqHsl3t2mW1CK6jP0cebOn8cIhwyTPNYHL1BX3IHyPJLEKVaySAN7nwTvK4bF7jNKEIsEDfpQ8HoIgsP2a4HcWScKpgtqqwnl4WusSywZ2kdAJVWvL53NazUYra0ROGhr7peyuVJTyl3dBEJ8wGHW2n0Zvhsrvv%2Fg1VmuyoH1Ne1YLvUMr%2FIn%2Buc%2Bf0lHsBUvH3U%2FY8GJBOC3ANO%2B6gt0R84KnSx4u071%2BzSfB0ECOpIjXD15M7pX9J7Ete%2BPo8EBiG7HSWLgCuonKh%2Fw2YDleGiNAkOkRu6EaWEFKW8uoPpzSanbgz7M%2FonFp9VMX8lMM2648QGOqUBfTSmUFKds9mFMhm52v0C%2F05%2BP1ShWTuXLJXv%2BVk5H1wuTMWh5Ms8VjFdY%2BOqXnZq96Ia54uHikbOA2lthiXO%2FRXLbwOaOPb8Gg2C%2Bs3Y%2ByRKsaVWqe16qegzL%2BgHC5O81kHbe2vjvy3wbVmqABZn48xHTJE0PRb6Rj9bjJiEBXnqb1Gdifzu6RPRYyAsHa4FnujghJAaInPekwAesH8f%2FKzR3oCM&X-Amz-Signature=4b73ba02fe245716196dc208b27514487dd0dfe3d26af655d8cae4ce39c1b312&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQSMZQ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkoYbHF4gs9Sj7bJRfCbXkWs0Y%2B%2F%2FQV2zuV4imz4YU9AIgUwtKpJVMZSks92sLlIXf%2BQU%2BAppNBMx%2BDMfHUBUjI5MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOOXPgWs3nQv7zyoCrcA86jGPUmEIaWOP64krKY3pdPcmIL9gHCyl7apRMkjwZsEsWQRXTNA3adLtvAPBcIy6ZzFx7qZYolleYH67oPxvoKtKATCu0DTEUuftawhFbAwJS%2BY%2BdalCkjBYek7zl0c5CtZiJJp7PKnH%2FHj8OmYx5iXRp8vwamExDbyoezAhhs9jhn%2BrDjHl7O%2FmYg%2BN4uVenOMM5J0%2BWKu9Y0BcSVxsbM8BeWif2d%2ByW7V3x2edyLgnTbWOTEtC3Dw%2BKQjS%2FVEvxDcNt%2FMeay%2B9Uc83RRYM%2Bhp45uN0e6YxqK0hVtCbF36qZIUilxPDljnTlqSqHsl3t2mW1CK6jP0cebOn8cIhwyTPNYHL1BX3IHyPJLEKVaySAN7nwTvK4bF7jNKEIsEDfpQ8HoIgsP2a4HcWScKpgtqqwnl4WusSywZ2kdAJVWvL53NazUYra0ROGhr7peyuVJTyl3dBEJ8wGHW2n0Zvhsrvv%2Fg1VmuyoH1Ne1YLvUMr%2FIn%2Buc%2Bf0lHsBUvH3U%2FY8GJBOC3ANO%2B6gt0R84KnSx4u071%2BzSfB0ECOpIjXD15M7pX9J7Ete%2BPo8EBiG7HSWLgCuonKh%2Fw2YDleGiNAkOkRu6EaWEFKW8uoPpzSanbgz7M%2FonFp9VMX8lMM2648QGOqUBfTSmUFKds9mFMhm52v0C%2F05%2BP1ShWTuXLJXv%2BVk5H1wuTMWh5Ms8VjFdY%2BOqXnZq96Ia54uHikbOA2lthiXO%2FRXLbwOaOPb8Gg2C%2Bs3Y%2ByRKsaVWqe16qegzL%2BgHC5O81kHbe2vjvy3wbVmqABZn48xHTJE0PRb6Rj9bjJiEBXnqb1Gdifzu6RPRYyAsHa4FnujghJAaInPekwAesH8f%2FKzR3oCM&X-Amz-Signature=03af0b613c3e9812d44278b20c0ce79e10fad01eb2a77c0a6ff783cbebfb11de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQSMZQ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkoYbHF4gs9Sj7bJRfCbXkWs0Y%2B%2F%2FQV2zuV4imz4YU9AIgUwtKpJVMZSks92sLlIXf%2BQU%2BAppNBMx%2BDMfHUBUjI5MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOOXPgWs3nQv7zyoCrcA86jGPUmEIaWOP64krKY3pdPcmIL9gHCyl7apRMkjwZsEsWQRXTNA3adLtvAPBcIy6ZzFx7qZYolleYH67oPxvoKtKATCu0DTEUuftawhFbAwJS%2BY%2BdalCkjBYek7zl0c5CtZiJJp7PKnH%2FHj8OmYx5iXRp8vwamExDbyoezAhhs9jhn%2BrDjHl7O%2FmYg%2BN4uVenOMM5J0%2BWKu9Y0BcSVxsbM8BeWif2d%2ByW7V3x2edyLgnTbWOTEtC3Dw%2BKQjS%2FVEvxDcNt%2FMeay%2B9Uc83RRYM%2Bhp45uN0e6YxqK0hVtCbF36qZIUilxPDljnTlqSqHsl3t2mW1CK6jP0cebOn8cIhwyTPNYHL1BX3IHyPJLEKVaySAN7nwTvK4bF7jNKEIsEDfpQ8HoIgsP2a4HcWScKpgtqqwnl4WusSywZ2kdAJVWvL53NazUYra0ROGhr7peyuVJTyl3dBEJ8wGHW2n0Zvhsrvv%2Fg1VmuyoH1Ne1YLvUMr%2FIn%2Buc%2Bf0lHsBUvH3U%2FY8GJBOC3ANO%2B6gt0R84KnSx4u071%2BzSfB0ECOpIjXD15M7pX9J7Ete%2BPo8EBiG7HSWLgCuonKh%2Fw2YDleGiNAkOkRu6EaWEFKW8uoPpzSanbgz7M%2FonFp9VMX8lMM2648QGOqUBfTSmUFKds9mFMhm52v0C%2F05%2BP1ShWTuXLJXv%2BVk5H1wuTMWh5Ms8VjFdY%2BOqXnZq96Ia54uHikbOA2lthiXO%2FRXLbwOaOPb8Gg2C%2Bs3Y%2ByRKsaVWqe16qegzL%2BgHC5O81kHbe2vjvy3wbVmqABZn48xHTJE0PRb6Rj9bjJiEBXnqb1Gdifzu6RPRYyAsHa4FnujghJAaInPekwAesH8f%2FKzR3oCM&X-Amz-Signature=621632ae6b409527ec8d998b7de66d6cdb2a345c23037736677e8987dee2d023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQSMZQ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkoYbHF4gs9Sj7bJRfCbXkWs0Y%2B%2F%2FQV2zuV4imz4YU9AIgUwtKpJVMZSks92sLlIXf%2BQU%2BAppNBMx%2BDMfHUBUjI5MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOOXPgWs3nQv7zyoCrcA86jGPUmEIaWOP64krKY3pdPcmIL9gHCyl7apRMkjwZsEsWQRXTNA3adLtvAPBcIy6ZzFx7qZYolleYH67oPxvoKtKATCu0DTEUuftawhFbAwJS%2BY%2BdalCkjBYek7zl0c5CtZiJJp7PKnH%2FHj8OmYx5iXRp8vwamExDbyoezAhhs9jhn%2BrDjHl7O%2FmYg%2BN4uVenOMM5J0%2BWKu9Y0BcSVxsbM8BeWif2d%2ByW7V3x2edyLgnTbWOTEtC3Dw%2BKQjS%2FVEvxDcNt%2FMeay%2B9Uc83RRYM%2Bhp45uN0e6YxqK0hVtCbF36qZIUilxPDljnTlqSqHsl3t2mW1CK6jP0cebOn8cIhwyTPNYHL1BX3IHyPJLEKVaySAN7nwTvK4bF7jNKEIsEDfpQ8HoIgsP2a4HcWScKpgtqqwnl4WusSywZ2kdAJVWvL53NazUYra0ROGhr7peyuVJTyl3dBEJ8wGHW2n0Zvhsrvv%2Fg1VmuyoH1Ne1YLvUMr%2FIn%2Buc%2Bf0lHsBUvH3U%2FY8GJBOC3ANO%2B6gt0R84KnSx4u071%2BzSfB0ECOpIjXD15M7pX9J7Ete%2BPo8EBiG7HSWLgCuonKh%2Fw2YDleGiNAkOkRu6EaWEFKW8uoPpzSanbgz7M%2FonFp9VMX8lMM2648QGOqUBfTSmUFKds9mFMhm52v0C%2F05%2BP1ShWTuXLJXv%2BVk5H1wuTMWh5Ms8VjFdY%2BOqXnZq96Ia54uHikbOA2lthiXO%2FRXLbwOaOPb8Gg2C%2Bs3Y%2ByRKsaVWqe16qegzL%2BgHC5O81kHbe2vjvy3wbVmqABZn48xHTJE0PRb6Rj9bjJiEBXnqb1Gdifzu6RPRYyAsHa4FnujghJAaInPekwAesH8f%2FKzR3oCM&X-Amz-Signature=7fa624f839637058870d278d6d27402c6143312443d610caf960a41a1b43a2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THQSMZQ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkoYbHF4gs9Sj7bJRfCbXkWs0Y%2B%2F%2FQV2zuV4imz4YU9AIgUwtKpJVMZSks92sLlIXf%2BQU%2BAppNBMx%2BDMfHUBUjI5MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOOXPgWs3nQv7zyoCrcA86jGPUmEIaWOP64krKY3pdPcmIL9gHCyl7apRMkjwZsEsWQRXTNA3adLtvAPBcIy6ZzFx7qZYolleYH67oPxvoKtKATCu0DTEUuftawhFbAwJS%2BY%2BdalCkjBYek7zl0c5CtZiJJp7PKnH%2FHj8OmYx5iXRp8vwamExDbyoezAhhs9jhn%2BrDjHl7O%2FmYg%2BN4uVenOMM5J0%2BWKu9Y0BcSVxsbM8BeWif2d%2ByW7V3x2edyLgnTbWOTEtC3Dw%2BKQjS%2FVEvxDcNt%2FMeay%2B9Uc83RRYM%2Bhp45uN0e6YxqK0hVtCbF36qZIUilxPDljnTlqSqHsl3t2mW1CK6jP0cebOn8cIhwyTPNYHL1BX3IHyPJLEKVaySAN7nwTvK4bF7jNKEIsEDfpQ8HoIgsP2a4HcWScKpgtqqwnl4WusSywZ2kdAJVWvL53NazUYra0ROGhr7peyuVJTyl3dBEJ8wGHW2n0Zvhsrvv%2Fg1VmuyoH1Ne1YLvUMr%2FIn%2Buc%2Bf0lHsBUvH3U%2FY8GJBOC3ANO%2B6gt0R84KnSx4u071%2BzSfB0ECOpIjXD15M7pX9J7Ete%2BPo8EBiG7HSWLgCuonKh%2Fw2YDleGiNAkOkRu6EaWEFKW8uoPpzSanbgz7M%2FonFp9VMX8lMM2648QGOqUBfTSmUFKds9mFMhm52v0C%2F05%2BP1ShWTuXLJXv%2BVk5H1wuTMWh5Ms8VjFdY%2BOqXnZq96Ia54uHikbOA2lthiXO%2FRXLbwOaOPb8Gg2C%2Bs3Y%2ByRKsaVWqe16qegzL%2BgHC5O81kHbe2vjvy3wbVmqABZn48xHTJE0PRb6Rj9bjJiEBXnqb1Gdifzu6RPRYyAsHa4FnujghJAaInPekwAesH8f%2FKzR3oCM&X-Amz-Signature=6f8349feb61a0999cec08dbfdfd1b24e41d998658d7ba35ebbf5d2165cf3bb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
