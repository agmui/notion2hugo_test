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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MIOBV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6HRO1MPBo%2BA4%2B0V%2Bhg05urH5Bd11obBXJShxDJJI9JAiBRa%2FaVTmy5aqipYmwRiCgCOdXeop34Xrpc%2Fnh4hvHZgCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BLau35CEJhQjHVXKtwD0WGz0RvjhKi3JqFeds5dqLEcFVaKJxAgCEka9DHXHTnFzOtejqBo%2B9m6WUv10eMj%2BixvDyyHBLbp9oNwSV0JgBxeTCgRoOkG1y5PfyT1yPs7fBySUEp3M%2FTn3mZoC8QqYZQNAcg6vfdWPTB0oQ%2BIsF3Q7m93%2FeoAavfrLixJtPuKY8YacjNHTtehy9t2u7%2FGG1hB4OGmb0SN6UAJD%2FG1cfdchjziDQKatWrqCvIzXqaM4Nh4PROnUbkt9h5KBq4QvAetuHCGqodwzJoVFyrNPtxsp6nstCukc87V%2FpjEmlOvAyDK2XYB8uBD%2F2dwXLxKthJ2Kn8U5t4o45hFBn%2B3VC4MXRZ%2FpQz9pdLWq5DEZMJ99m8EpOPbE9ZNByuC5pQTM8cmlPnJzFVFlIALSYkriNNOJHEoSn1u8MLSXxyQ8oagc5GfjLpssGr3sqd7Jqi3YVv17ZvGm3tJ6%2FTzZ8pyTaTw7%2BKA8UfOuEFEg2qe4BG8nVLd%2B3KV1j2HssEOqBvCxUQ3ktFuYXLB%2BkxPR2pO98EgzRV0BZQLfUHgPM%2BdNh7l6JRDQX6xWPDpMcPtFlcI%2FlGSeg94m5MpBkArLhk3zBKY%2BUt6EMe3UoEvXIo1qCVKiE2c7zJpE9h5FUsw2JjvyAY6pgH6iK0mwvxTDoNafSW6Y2z9RtewRvsPy3683zjdVjc89OIttHL24KUrcb8TRgMvvcH2Zc191K8Ju0qRCTt7EXl02Q%2B8vfaMaMAQrN2mQ0ZGz9xj1RKnWDs4fp%2Bf5goGpk1y1XdZ7GGKyDn5KivppZ4Hk07gzdP7y2ao%2FlF47%2BCtDWTawipR132KeUhwemnHBtjXnTZJ1iPfEx3CZZNaMIaT1Vkb%2Binw&X-Amz-Signature=b59eb34374802525fcc7606ebf1d77ac815ec702687b40b4c6b31442374bffe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MIOBV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6HRO1MPBo%2BA4%2B0V%2Bhg05urH5Bd11obBXJShxDJJI9JAiBRa%2FaVTmy5aqipYmwRiCgCOdXeop34Xrpc%2Fnh4hvHZgCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BLau35CEJhQjHVXKtwD0WGz0RvjhKi3JqFeds5dqLEcFVaKJxAgCEka9DHXHTnFzOtejqBo%2B9m6WUv10eMj%2BixvDyyHBLbp9oNwSV0JgBxeTCgRoOkG1y5PfyT1yPs7fBySUEp3M%2FTn3mZoC8QqYZQNAcg6vfdWPTB0oQ%2BIsF3Q7m93%2FeoAavfrLixJtPuKY8YacjNHTtehy9t2u7%2FGG1hB4OGmb0SN6UAJD%2FG1cfdchjziDQKatWrqCvIzXqaM4Nh4PROnUbkt9h5KBq4QvAetuHCGqodwzJoVFyrNPtxsp6nstCukc87V%2FpjEmlOvAyDK2XYB8uBD%2F2dwXLxKthJ2Kn8U5t4o45hFBn%2B3VC4MXRZ%2FpQz9pdLWq5DEZMJ99m8EpOPbE9ZNByuC5pQTM8cmlPnJzFVFlIALSYkriNNOJHEoSn1u8MLSXxyQ8oagc5GfjLpssGr3sqd7Jqi3YVv17ZvGm3tJ6%2FTzZ8pyTaTw7%2BKA8UfOuEFEg2qe4BG8nVLd%2B3KV1j2HssEOqBvCxUQ3ktFuYXLB%2BkxPR2pO98EgzRV0BZQLfUHgPM%2BdNh7l6JRDQX6xWPDpMcPtFlcI%2FlGSeg94m5MpBkArLhk3zBKY%2BUt6EMe3UoEvXIo1qCVKiE2c7zJpE9h5FUsw2JjvyAY6pgH6iK0mwvxTDoNafSW6Y2z9RtewRvsPy3683zjdVjc89OIttHL24KUrcb8TRgMvvcH2Zc191K8Ju0qRCTt7EXl02Q%2B8vfaMaMAQrN2mQ0ZGz9xj1RKnWDs4fp%2Bf5goGpk1y1XdZ7GGKyDn5KivppZ4Hk07gzdP7y2ao%2FlF47%2BCtDWTawipR132KeUhwemnHBtjXnTZJ1iPfEx3CZZNaMIaT1Vkb%2Binw&X-Amz-Signature=2d25da31886b26d923d28cc637c98bbba5222a1224a15a4f839096e0d9f5b958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MIOBV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6HRO1MPBo%2BA4%2B0V%2Bhg05urH5Bd11obBXJShxDJJI9JAiBRa%2FaVTmy5aqipYmwRiCgCOdXeop34Xrpc%2Fnh4hvHZgCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BLau35CEJhQjHVXKtwD0WGz0RvjhKi3JqFeds5dqLEcFVaKJxAgCEka9DHXHTnFzOtejqBo%2B9m6WUv10eMj%2BixvDyyHBLbp9oNwSV0JgBxeTCgRoOkG1y5PfyT1yPs7fBySUEp3M%2FTn3mZoC8QqYZQNAcg6vfdWPTB0oQ%2BIsF3Q7m93%2FeoAavfrLixJtPuKY8YacjNHTtehy9t2u7%2FGG1hB4OGmb0SN6UAJD%2FG1cfdchjziDQKatWrqCvIzXqaM4Nh4PROnUbkt9h5KBq4QvAetuHCGqodwzJoVFyrNPtxsp6nstCukc87V%2FpjEmlOvAyDK2XYB8uBD%2F2dwXLxKthJ2Kn8U5t4o45hFBn%2B3VC4MXRZ%2FpQz9pdLWq5DEZMJ99m8EpOPbE9ZNByuC5pQTM8cmlPnJzFVFlIALSYkriNNOJHEoSn1u8MLSXxyQ8oagc5GfjLpssGr3sqd7Jqi3YVv17ZvGm3tJ6%2FTzZ8pyTaTw7%2BKA8UfOuEFEg2qe4BG8nVLd%2B3KV1j2HssEOqBvCxUQ3ktFuYXLB%2BkxPR2pO98EgzRV0BZQLfUHgPM%2BdNh7l6JRDQX6xWPDpMcPtFlcI%2FlGSeg94m5MpBkArLhk3zBKY%2BUt6EMe3UoEvXIo1qCVKiE2c7zJpE9h5FUsw2JjvyAY6pgH6iK0mwvxTDoNafSW6Y2z9RtewRvsPy3683zjdVjc89OIttHL24KUrcb8TRgMvvcH2Zc191K8Ju0qRCTt7EXl02Q%2B8vfaMaMAQrN2mQ0ZGz9xj1RKnWDs4fp%2Bf5goGpk1y1XdZ7GGKyDn5KivppZ4Hk07gzdP7y2ao%2FlF47%2BCtDWTawipR132KeUhwemnHBtjXnTZJ1iPfEx3CZZNaMIaT1Vkb%2Binw&X-Amz-Signature=39290475ce9bb68db7f049e70acefc69cdbe457bba447af8fd45d8bb178844f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MIOBV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6HRO1MPBo%2BA4%2B0V%2Bhg05urH5Bd11obBXJShxDJJI9JAiBRa%2FaVTmy5aqipYmwRiCgCOdXeop34Xrpc%2Fnh4hvHZgCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BLau35CEJhQjHVXKtwD0WGz0RvjhKi3JqFeds5dqLEcFVaKJxAgCEka9DHXHTnFzOtejqBo%2B9m6WUv10eMj%2BixvDyyHBLbp9oNwSV0JgBxeTCgRoOkG1y5PfyT1yPs7fBySUEp3M%2FTn3mZoC8QqYZQNAcg6vfdWPTB0oQ%2BIsF3Q7m93%2FeoAavfrLixJtPuKY8YacjNHTtehy9t2u7%2FGG1hB4OGmb0SN6UAJD%2FG1cfdchjziDQKatWrqCvIzXqaM4Nh4PROnUbkt9h5KBq4QvAetuHCGqodwzJoVFyrNPtxsp6nstCukc87V%2FpjEmlOvAyDK2XYB8uBD%2F2dwXLxKthJ2Kn8U5t4o45hFBn%2B3VC4MXRZ%2FpQz9pdLWq5DEZMJ99m8EpOPbE9ZNByuC5pQTM8cmlPnJzFVFlIALSYkriNNOJHEoSn1u8MLSXxyQ8oagc5GfjLpssGr3sqd7Jqi3YVv17ZvGm3tJ6%2FTzZ8pyTaTw7%2BKA8UfOuEFEg2qe4BG8nVLd%2B3KV1j2HssEOqBvCxUQ3ktFuYXLB%2BkxPR2pO98EgzRV0BZQLfUHgPM%2BdNh7l6JRDQX6xWPDpMcPtFlcI%2FlGSeg94m5MpBkArLhk3zBKY%2BUt6EMe3UoEvXIo1qCVKiE2c7zJpE9h5FUsw2JjvyAY6pgH6iK0mwvxTDoNafSW6Y2z9RtewRvsPy3683zjdVjc89OIttHL24KUrcb8TRgMvvcH2Zc191K8Ju0qRCTt7EXl02Q%2B8vfaMaMAQrN2mQ0ZGz9xj1RKnWDs4fp%2Bf5goGpk1y1XdZ7GGKyDn5KivppZ4Hk07gzdP7y2ao%2FlF47%2BCtDWTawipR132KeUhwemnHBtjXnTZJ1iPfEx3CZZNaMIaT1Vkb%2Binw&X-Amz-Signature=ffdc370716c677f8530ee06d9fb4235708b5ce4daaa9065cf23b3b4781fbf450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MIOBV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6HRO1MPBo%2BA4%2B0V%2Bhg05urH5Bd11obBXJShxDJJI9JAiBRa%2FaVTmy5aqipYmwRiCgCOdXeop34Xrpc%2Fnh4hvHZgCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BLau35CEJhQjHVXKtwD0WGz0RvjhKi3JqFeds5dqLEcFVaKJxAgCEka9DHXHTnFzOtejqBo%2B9m6WUv10eMj%2BixvDyyHBLbp9oNwSV0JgBxeTCgRoOkG1y5PfyT1yPs7fBySUEp3M%2FTn3mZoC8QqYZQNAcg6vfdWPTB0oQ%2BIsF3Q7m93%2FeoAavfrLixJtPuKY8YacjNHTtehy9t2u7%2FGG1hB4OGmb0SN6UAJD%2FG1cfdchjziDQKatWrqCvIzXqaM4Nh4PROnUbkt9h5KBq4QvAetuHCGqodwzJoVFyrNPtxsp6nstCukc87V%2FpjEmlOvAyDK2XYB8uBD%2F2dwXLxKthJ2Kn8U5t4o45hFBn%2B3VC4MXRZ%2FpQz9pdLWq5DEZMJ99m8EpOPbE9ZNByuC5pQTM8cmlPnJzFVFlIALSYkriNNOJHEoSn1u8MLSXxyQ8oagc5GfjLpssGr3sqd7Jqi3YVv17ZvGm3tJ6%2FTzZ8pyTaTw7%2BKA8UfOuEFEg2qe4BG8nVLd%2B3KV1j2HssEOqBvCxUQ3ktFuYXLB%2BkxPR2pO98EgzRV0BZQLfUHgPM%2BdNh7l6JRDQX6xWPDpMcPtFlcI%2FlGSeg94m5MpBkArLhk3zBKY%2BUt6EMe3UoEvXIo1qCVKiE2c7zJpE9h5FUsw2JjvyAY6pgH6iK0mwvxTDoNafSW6Y2z9RtewRvsPy3683zjdVjc89OIttHL24KUrcb8TRgMvvcH2Zc191K8Ju0qRCTt7EXl02Q%2B8vfaMaMAQrN2mQ0ZGz9xj1RKnWDs4fp%2Bf5goGpk1y1XdZ7GGKyDn5KivppZ4Hk07gzdP7y2ao%2FlF47%2BCtDWTawipR132KeUhwemnHBtjXnTZJ1iPfEx3CZZNaMIaT1Vkb%2Binw&X-Amz-Signature=2bcf7753b13d1f87ab22ad506a4bce869d7daf66ff3faa091272ef91110c4a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MIOBV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6HRO1MPBo%2BA4%2B0V%2Bhg05urH5Bd11obBXJShxDJJI9JAiBRa%2FaVTmy5aqipYmwRiCgCOdXeop34Xrpc%2Fnh4hvHZgCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BLau35CEJhQjHVXKtwD0WGz0RvjhKi3JqFeds5dqLEcFVaKJxAgCEka9DHXHTnFzOtejqBo%2B9m6WUv10eMj%2BixvDyyHBLbp9oNwSV0JgBxeTCgRoOkG1y5PfyT1yPs7fBySUEp3M%2FTn3mZoC8QqYZQNAcg6vfdWPTB0oQ%2BIsF3Q7m93%2FeoAavfrLixJtPuKY8YacjNHTtehy9t2u7%2FGG1hB4OGmb0SN6UAJD%2FG1cfdchjziDQKatWrqCvIzXqaM4Nh4PROnUbkt9h5KBq4QvAetuHCGqodwzJoVFyrNPtxsp6nstCukc87V%2FpjEmlOvAyDK2XYB8uBD%2F2dwXLxKthJ2Kn8U5t4o45hFBn%2B3VC4MXRZ%2FpQz9pdLWq5DEZMJ99m8EpOPbE9ZNByuC5pQTM8cmlPnJzFVFlIALSYkriNNOJHEoSn1u8MLSXxyQ8oagc5GfjLpssGr3sqd7Jqi3YVv17ZvGm3tJ6%2FTzZ8pyTaTw7%2BKA8UfOuEFEg2qe4BG8nVLd%2B3KV1j2HssEOqBvCxUQ3ktFuYXLB%2BkxPR2pO98EgzRV0BZQLfUHgPM%2BdNh7l6JRDQX6xWPDpMcPtFlcI%2FlGSeg94m5MpBkArLhk3zBKY%2BUt6EMe3UoEvXIo1qCVKiE2c7zJpE9h5FUsw2JjvyAY6pgH6iK0mwvxTDoNafSW6Y2z9RtewRvsPy3683zjdVjc89OIttHL24KUrcb8TRgMvvcH2Zc191K8Ju0qRCTt7EXl02Q%2B8vfaMaMAQrN2mQ0ZGz9xj1RKnWDs4fp%2Bf5goGpk1y1XdZ7GGKyDn5KivppZ4Hk07gzdP7y2ao%2FlF47%2BCtDWTawipR132KeUhwemnHBtjXnTZJ1iPfEx3CZZNaMIaT1Vkb%2Binw&X-Amz-Signature=af34a38096671355940d36df1478bed83b63b1cd84abed9d9be9d5ec878fbb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MIOBV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6HRO1MPBo%2BA4%2B0V%2Bhg05urH5Bd11obBXJShxDJJI9JAiBRa%2FaVTmy5aqipYmwRiCgCOdXeop34Xrpc%2Fnh4hvHZgCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BLau35CEJhQjHVXKtwD0WGz0RvjhKi3JqFeds5dqLEcFVaKJxAgCEka9DHXHTnFzOtejqBo%2B9m6WUv10eMj%2BixvDyyHBLbp9oNwSV0JgBxeTCgRoOkG1y5PfyT1yPs7fBySUEp3M%2FTn3mZoC8QqYZQNAcg6vfdWPTB0oQ%2BIsF3Q7m93%2FeoAavfrLixJtPuKY8YacjNHTtehy9t2u7%2FGG1hB4OGmb0SN6UAJD%2FG1cfdchjziDQKatWrqCvIzXqaM4Nh4PROnUbkt9h5KBq4QvAetuHCGqodwzJoVFyrNPtxsp6nstCukc87V%2FpjEmlOvAyDK2XYB8uBD%2F2dwXLxKthJ2Kn8U5t4o45hFBn%2B3VC4MXRZ%2FpQz9pdLWq5DEZMJ99m8EpOPbE9ZNByuC5pQTM8cmlPnJzFVFlIALSYkriNNOJHEoSn1u8MLSXxyQ8oagc5GfjLpssGr3sqd7Jqi3YVv17ZvGm3tJ6%2FTzZ8pyTaTw7%2BKA8UfOuEFEg2qe4BG8nVLd%2B3KV1j2HssEOqBvCxUQ3ktFuYXLB%2BkxPR2pO98EgzRV0BZQLfUHgPM%2BdNh7l6JRDQX6xWPDpMcPtFlcI%2FlGSeg94m5MpBkArLhk3zBKY%2BUt6EMe3UoEvXIo1qCVKiE2c7zJpE9h5FUsw2JjvyAY6pgH6iK0mwvxTDoNafSW6Y2z9RtewRvsPy3683zjdVjc89OIttHL24KUrcb8TRgMvvcH2Zc191K8Ju0qRCTt7EXl02Q%2B8vfaMaMAQrN2mQ0ZGz9xj1RKnWDs4fp%2Bf5goGpk1y1XdZ7GGKyDn5KivppZ4Hk07gzdP7y2ao%2FlF47%2BCtDWTawipR132KeUhwemnHBtjXnTZJ1iPfEx3CZZNaMIaT1Vkb%2Binw&X-Amz-Signature=7aa015e0b2ccb06dd75042130c742c942a9145be36c3db671c5bfe7bda1e17a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T6MIOBV%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6HRO1MPBo%2BA4%2B0V%2Bhg05urH5Bd11obBXJShxDJJI9JAiBRa%2FaVTmy5aqipYmwRiCgCOdXeop34Xrpc%2Fnh4hvHZgCqIBAi7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BLau35CEJhQjHVXKtwD0WGz0RvjhKi3JqFeds5dqLEcFVaKJxAgCEka9DHXHTnFzOtejqBo%2B9m6WUv10eMj%2BixvDyyHBLbp9oNwSV0JgBxeTCgRoOkG1y5PfyT1yPs7fBySUEp3M%2FTn3mZoC8QqYZQNAcg6vfdWPTB0oQ%2BIsF3Q7m93%2FeoAavfrLixJtPuKY8YacjNHTtehy9t2u7%2FGG1hB4OGmb0SN6UAJD%2FG1cfdchjziDQKatWrqCvIzXqaM4Nh4PROnUbkt9h5KBq4QvAetuHCGqodwzJoVFyrNPtxsp6nstCukc87V%2FpjEmlOvAyDK2XYB8uBD%2F2dwXLxKthJ2Kn8U5t4o45hFBn%2B3VC4MXRZ%2FpQz9pdLWq5DEZMJ99m8EpOPbE9ZNByuC5pQTM8cmlPnJzFVFlIALSYkriNNOJHEoSn1u8MLSXxyQ8oagc5GfjLpssGr3sqd7Jqi3YVv17ZvGm3tJ6%2FTzZ8pyTaTw7%2BKA8UfOuEFEg2qe4BG8nVLd%2B3KV1j2HssEOqBvCxUQ3ktFuYXLB%2BkxPR2pO98EgzRV0BZQLfUHgPM%2BdNh7l6JRDQX6xWPDpMcPtFlcI%2FlGSeg94m5MpBkArLhk3zBKY%2BUt6EMe3UoEvXIo1qCVKiE2c7zJpE9h5FUsw2JjvyAY6pgH6iK0mwvxTDoNafSW6Y2z9RtewRvsPy3683zjdVjc89OIttHL24KUrcb8TRgMvvcH2Zc191K8Ju0qRCTt7EXl02Q%2B8vfaMaMAQrN2mQ0ZGz9xj1RKnWDs4fp%2Bf5goGpk1y1XdZ7GGKyDn5KivppZ4Hk07gzdP7y2ao%2FlF47%2BCtDWTawipR132KeUhwemnHBtjXnTZJ1iPfEx3CZZNaMIaT1Vkb%2Binw&X-Amz-Signature=43280e79cf7df6a3dfc9b212ecd5f0bbb34e656d253660dc2d1ddd45850ee773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
