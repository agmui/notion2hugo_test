---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOVSBOP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCbhJtjlUUH9Qv9MTyKBOMXNZ3GtN3cQxoKGqUuLYmutwIgL2QwJBpzQBeyUQKfidC8LFk1aTOEHKUDbJkijAqTLvsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHhg3uxCKD1qpa4CyrcA1Dn%2FHVT0tTe8bYPTHc%2FVOYUuBx7x%2Bp4%2BLLp2CaIDhv3IPYWHrz7ainmigUEVpSUJKg7NB7GxtoYTIB7t9IpHOUHkf16k4B9Ugmz%2F6VKEJGFa8Fexn2h0btVH3KG%2BQSAz5TLPn5%2BAHFzyAMADCSW2q9HGHMGOzuGAyW7iI6MhL21sW01kAIPSYt3EgZ7Oj8%2FvInVQ3f%2FDgrGDKR8i%2FZQI408ga%2BAlJQ5IcsZo3RCPlc8kkjMXPrn3xv0IKF94YcV8TZty3ClgHZRpTdD%2BdvcYEoyC03iP8TkM%2FI2hyU41sjVmVy9M8dapqV9azuSoPINOdN60UmydcYL0xYgofF8CvCGhH8Xe95NjdD%2Bxru%2F8qDWC3ByiEokaF%2B97GGhHu1rzMtdz61WQIbOgS1vnRTIiSO62tGpE3tuzY31RBPv1Gi22bm7wf5eOhayztGIWS8iKuzVUTjD6kry52ai4%2Ff9RQOFg0M5jfATbsaiQaz28ynAbJTDvF2UeenRQu1TAop8HtK1mCthXeU8fpaOk4x%2FPRfSB8XJfa1sM22Zy5%2FGzOb90CsHL%2BLlsSmj0F25%2BBxxILGuUALqGS8yk6mchL93rH1H5AnR3XdlNJ0P%2F3nGNEIEbpxCyBury4EtF%2FkTMMHc9r4GOqUBQFBuAlsIR7scmdb2wKQkA4W%2FAt5nINale%2BJwW4NHaFGXGpo1Vlyr3JxMFfuHd70cuKuV1et1tKZwCCELwlSam3D75wsSOAbUVNkjwAuSKBfh0EqQXZauTndf8Xq0jY2iFEUv84rh%2FBDtyPOOdsHQMhi6iN5CsPbYjqaCwderXuyW%2Btph7v7Vl%2FDsI8x6LfjdcIucMUFjygms7LKZC2eAD6EkbEhV&X-Amz-Signature=af59f2ddea8665f506e249bc1a489931ee205951c8a501e43f1fa2ed9a02881d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOVSBOP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCbhJtjlUUH9Qv9MTyKBOMXNZ3GtN3cQxoKGqUuLYmutwIgL2QwJBpzQBeyUQKfidC8LFk1aTOEHKUDbJkijAqTLvsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHhg3uxCKD1qpa4CyrcA1Dn%2FHVT0tTe8bYPTHc%2FVOYUuBx7x%2Bp4%2BLLp2CaIDhv3IPYWHrz7ainmigUEVpSUJKg7NB7GxtoYTIB7t9IpHOUHkf16k4B9Ugmz%2F6VKEJGFa8Fexn2h0btVH3KG%2BQSAz5TLPn5%2BAHFzyAMADCSW2q9HGHMGOzuGAyW7iI6MhL21sW01kAIPSYt3EgZ7Oj8%2FvInVQ3f%2FDgrGDKR8i%2FZQI408ga%2BAlJQ5IcsZo3RCPlc8kkjMXPrn3xv0IKF94YcV8TZty3ClgHZRpTdD%2BdvcYEoyC03iP8TkM%2FI2hyU41sjVmVy9M8dapqV9azuSoPINOdN60UmydcYL0xYgofF8CvCGhH8Xe95NjdD%2Bxru%2F8qDWC3ByiEokaF%2B97GGhHu1rzMtdz61WQIbOgS1vnRTIiSO62tGpE3tuzY31RBPv1Gi22bm7wf5eOhayztGIWS8iKuzVUTjD6kry52ai4%2Ff9RQOFg0M5jfATbsaiQaz28ynAbJTDvF2UeenRQu1TAop8HtK1mCthXeU8fpaOk4x%2FPRfSB8XJfa1sM22Zy5%2FGzOb90CsHL%2BLlsSmj0F25%2BBxxILGuUALqGS8yk6mchL93rH1H5AnR3XdlNJ0P%2F3nGNEIEbpxCyBury4EtF%2FkTMMHc9r4GOqUBQFBuAlsIR7scmdb2wKQkA4W%2FAt5nINale%2BJwW4NHaFGXGpo1Vlyr3JxMFfuHd70cuKuV1et1tKZwCCELwlSam3D75wsSOAbUVNkjwAuSKBfh0EqQXZauTndf8Xq0jY2iFEUv84rh%2FBDtyPOOdsHQMhi6iN5CsPbYjqaCwderXuyW%2Btph7v7Vl%2FDsI8x6LfjdcIucMUFjygms7LKZC2eAD6EkbEhV&X-Amz-Signature=084d5fb40767600e0f8698d425317229a9f10641d47eddb530a3a8beb2292a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOVSBOP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCbhJtjlUUH9Qv9MTyKBOMXNZ3GtN3cQxoKGqUuLYmutwIgL2QwJBpzQBeyUQKfidC8LFk1aTOEHKUDbJkijAqTLvsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHhg3uxCKD1qpa4CyrcA1Dn%2FHVT0tTe8bYPTHc%2FVOYUuBx7x%2Bp4%2BLLp2CaIDhv3IPYWHrz7ainmigUEVpSUJKg7NB7GxtoYTIB7t9IpHOUHkf16k4B9Ugmz%2F6VKEJGFa8Fexn2h0btVH3KG%2BQSAz5TLPn5%2BAHFzyAMADCSW2q9HGHMGOzuGAyW7iI6MhL21sW01kAIPSYt3EgZ7Oj8%2FvInVQ3f%2FDgrGDKR8i%2FZQI408ga%2BAlJQ5IcsZo3RCPlc8kkjMXPrn3xv0IKF94YcV8TZty3ClgHZRpTdD%2BdvcYEoyC03iP8TkM%2FI2hyU41sjVmVy9M8dapqV9azuSoPINOdN60UmydcYL0xYgofF8CvCGhH8Xe95NjdD%2Bxru%2F8qDWC3ByiEokaF%2B97GGhHu1rzMtdz61WQIbOgS1vnRTIiSO62tGpE3tuzY31RBPv1Gi22bm7wf5eOhayztGIWS8iKuzVUTjD6kry52ai4%2Ff9RQOFg0M5jfATbsaiQaz28ynAbJTDvF2UeenRQu1TAop8HtK1mCthXeU8fpaOk4x%2FPRfSB8XJfa1sM22Zy5%2FGzOb90CsHL%2BLlsSmj0F25%2BBxxILGuUALqGS8yk6mchL93rH1H5AnR3XdlNJ0P%2F3nGNEIEbpxCyBury4EtF%2FkTMMHc9r4GOqUBQFBuAlsIR7scmdb2wKQkA4W%2FAt5nINale%2BJwW4NHaFGXGpo1Vlyr3JxMFfuHd70cuKuV1et1tKZwCCELwlSam3D75wsSOAbUVNkjwAuSKBfh0EqQXZauTndf8Xq0jY2iFEUv84rh%2FBDtyPOOdsHQMhi6iN5CsPbYjqaCwderXuyW%2Btph7v7Vl%2FDsI8x6LfjdcIucMUFjygms7LKZC2eAD6EkbEhV&X-Amz-Signature=926465128a7d3f5c072fbf5250c09920de7dad832942e9652aab49a2880935dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOVSBOP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCbhJtjlUUH9Qv9MTyKBOMXNZ3GtN3cQxoKGqUuLYmutwIgL2QwJBpzQBeyUQKfidC8LFk1aTOEHKUDbJkijAqTLvsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHhg3uxCKD1qpa4CyrcA1Dn%2FHVT0tTe8bYPTHc%2FVOYUuBx7x%2Bp4%2BLLp2CaIDhv3IPYWHrz7ainmigUEVpSUJKg7NB7GxtoYTIB7t9IpHOUHkf16k4B9Ugmz%2F6VKEJGFa8Fexn2h0btVH3KG%2BQSAz5TLPn5%2BAHFzyAMADCSW2q9HGHMGOzuGAyW7iI6MhL21sW01kAIPSYt3EgZ7Oj8%2FvInVQ3f%2FDgrGDKR8i%2FZQI408ga%2BAlJQ5IcsZo3RCPlc8kkjMXPrn3xv0IKF94YcV8TZty3ClgHZRpTdD%2BdvcYEoyC03iP8TkM%2FI2hyU41sjVmVy9M8dapqV9azuSoPINOdN60UmydcYL0xYgofF8CvCGhH8Xe95NjdD%2Bxru%2F8qDWC3ByiEokaF%2B97GGhHu1rzMtdz61WQIbOgS1vnRTIiSO62tGpE3tuzY31RBPv1Gi22bm7wf5eOhayztGIWS8iKuzVUTjD6kry52ai4%2Ff9RQOFg0M5jfATbsaiQaz28ynAbJTDvF2UeenRQu1TAop8HtK1mCthXeU8fpaOk4x%2FPRfSB8XJfa1sM22Zy5%2FGzOb90CsHL%2BLlsSmj0F25%2BBxxILGuUALqGS8yk6mchL93rH1H5AnR3XdlNJ0P%2F3nGNEIEbpxCyBury4EtF%2FkTMMHc9r4GOqUBQFBuAlsIR7scmdb2wKQkA4W%2FAt5nINale%2BJwW4NHaFGXGpo1Vlyr3JxMFfuHd70cuKuV1et1tKZwCCELwlSam3D75wsSOAbUVNkjwAuSKBfh0EqQXZauTndf8Xq0jY2iFEUv84rh%2FBDtyPOOdsHQMhi6iN5CsPbYjqaCwderXuyW%2Btph7v7Vl%2FDsI8x6LfjdcIucMUFjygms7LKZC2eAD6EkbEhV&X-Amz-Signature=5c206bb14250c2e7ef22e90400f71b273e2daa92529b6e817e2320b21c50a2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOVSBOP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCbhJtjlUUH9Qv9MTyKBOMXNZ3GtN3cQxoKGqUuLYmutwIgL2QwJBpzQBeyUQKfidC8LFk1aTOEHKUDbJkijAqTLvsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHhg3uxCKD1qpa4CyrcA1Dn%2FHVT0tTe8bYPTHc%2FVOYUuBx7x%2Bp4%2BLLp2CaIDhv3IPYWHrz7ainmigUEVpSUJKg7NB7GxtoYTIB7t9IpHOUHkf16k4B9Ugmz%2F6VKEJGFa8Fexn2h0btVH3KG%2BQSAz5TLPn5%2BAHFzyAMADCSW2q9HGHMGOzuGAyW7iI6MhL21sW01kAIPSYt3EgZ7Oj8%2FvInVQ3f%2FDgrGDKR8i%2FZQI408ga%2BAlJQ5IcsZo3RCPlc8kkjMXPrn3xv0IKF94YcV8TZty3ClgHZRpTdD%2BdvcYEoyC03iP8TkM%2FI2hyU41sjVmVy9M8dapqV9azuSoPINOdN60UmydcYL0xYgofF8CvCGhH8Xe95NjdD%2Bxru%2F8qDWC3ByiEokaF%2B97GGhHu1rzMtdz61WQIbOgS1vnRTIiSO62tGpE3tuzY31RBPv1Gi22bm7wf5eOhayztGIWS8iKuzVUTjD6kry52ai4%2Ff9RQOFg0M5jfATbsaiQaz28ynAbJTDvF2UeenRQu1TAop8HtK1mCthXeU8fpaOk4x%2FPRfSB8XJfa1sM22Zy5%2FGzOb90CsHL%2BLlsSmj0F25%2BBxxILGuUALqGS8yk6mchL93rH1H5AnR3XdlNJ0P%2F3nGNEIEbpxCyBury4EtF%2FkTMMHc9r4GOqUBQFBuAlsIR7scmdb2wKQkA4W%2FAt5nINale%2BJwW4NHaFGXGpo1Vlyr3JxMFfuHd70cuKuV1et1tKZwCCELwlSam3D75wsSOAbUVNkjwAuSKBfh0EqQXZauTndf8Xq0jY2iFEUv84rh%2FBDtyPOOdsHQMhi6iN5CsPbYjqaCwderXuyW%2Btph7v7Vl%2FDsI8x6LfjdcIucMUFjygms7LKZC2eAD6EkbEhV&X-Amz-Signature=3b0f911388cbad1144d1bc2ae07ab6f52ceb221741829f1996b8718b9124ee93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOVSBOP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCbhJtjlUUH9Qv9MTyKBOMXNZ3GtN3cQxoKGqUuLYmutwIgL2QwJBpzQBeyUQKfidC8LFk1aTOEHKUDbJkijAqTLvsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHhg3uxCKD1qpa4CyrcA1Dn%2FHVT0tTe8bYPTHc%2FVOYUuBx7x%2Bp4%2BLLp2CaIDhv3IPYWHrz7ainmigUEVpSUJKg7NB7GxtoYTIB7t9IpHOUHkf16k4B9Ugmz%2F6VKEJGFa8Fexn2h0btVH3KG%2BQSAz5TLPn5%2BAHFzyAMADCSW2q9HGHMGOzuGAyW7iI6MhL21sW01kAIPSYt3EgZ7Oj8%2FvInVQ3f%2FDgrGDKR8i%2FZQI408ga%2BAlJQ5IcsZo3RCPlc8kkjMXPrn3xv0IKF94YcV8TZty3ClgHZRpTdD%2BdvcYEoyC03iP8TkM%2FI2hyU41sjVmVy9M8dapqV9azuSoPINOdN60UmydcYL0xYgofF8CvCGhH8Xe95NjdD%2Bxru%2F8qDWC3ByiEokaF%2B97GGhHu1rzMtdz61WQIbOgS1vnRTIiSO62tGpE3tuzY31RBPv1Gi22bm7wf5eOhayztGIWS8iKuzVUTjD6kry52ai4%2Ff9RQOFg0M5jfATbsaiQaz28ynAbJTDvF2UeenRQu1TAop8HtK1mCthXeU8fpaOk4x%2FPRfSB8XJfa1sM22Zy5%2FGzOb90CsHL%2BLlsSmj0F25%2BBxxILGuUALqGS8yk6mchL93rH1H5AnR3XdlNJ0P%2F3nGNEIEbpxCyBury4EtF%2FkTMMHc9r4GOqUBQFBuAlsIR7scmdb2wKQkA4W%2FAt5nINale%2BJwW4NHaFGXGpo1Vlyr3JxMFfuHd70cuKuV1et1tKZwCCELwlSam3D75wsSOAbUVNkjwAuSKBfh0EqQXZauTndf8Xq0jY2iFEUv84rh%2FBDtyPOOdsHQMhi6iN5CsPbYjqaCwderXuyW%2Btph7v7Vl%2FDsI8x6LfjdcIucMUFjygms7LKZC2eAD6EkbEhV&X-Amz-Signature=8078935e2591a3c0d96bf953daa8a0afadd2de8e115d0072e20935afb92fc9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOVSBOP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCbhJtjlUUH9Qv9MTyKBOMXNZ3GtN3cQxoKGqUuLYmutwIgL2QwJBpzQBeyUQKfidC8LFk1aTOEHKUDbJkijAqTLvsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHhg3uxCKD1qpa4CyrcA1Dn%2FHVT0tTe8bYPTHc%2FVOYUuBx7x%2Bp4%2BLLp2CaIDhv3IPYWHrz7ainmigUEVpSUJKg7NB7GxtoYTIB7t9IpHOUHkf16k4B9Ugmz%2F6VKEJGFa8Fexn2h0btVH3KG%2BQSAz5TLPn5%2BAHFzyAMADCSW2q9HGHMGOzuGAyW7iI6MhL21sW01kAIPSYt3EgZ7Oj8%2FvInVQ3f%2FDgrGDKR8i%2FZQI408ga%2BAlJQ5IcsZo3RCPlc8kkjMXPrn3xv0IKF94YcV8TZty3ClgHZRpTdD%2BdvcYEoyC03iP8TkM%2FI2hyU41sjVmVy9M8dapqV9azuSoPINOdN60UmydcYL0xYgofF8CvCGhH8Xe95NjdD%2Bxru%2F8qDWC3ByiEokaF%2B97GGhHu1rzMtdz61WQIbOgS1vnRTIiSO62tGpE3tuzY31RBPv1Gi22bm7wf5eOhayztGIWS8iKuzVUTjD6kry52ai4%2Ff9RQOFg0M5jfATbsaiQaz28ynAbJTDvF2UeenRQu1TAop8HtK1mCthXeU8fpaOk4x%2FPRfSB8XJfa1sM22Zy5%2FGzOb90CsHL%2BLlsSmj0F25%2BBxxILGuUALqGS8yk6mchL93rH1H5AnR3XdlNJ0P%2F3nGNEIEbpxCyBury4EtF%2FkTMMHc9r4GOqUBQFBuAlsIR7scmdb2wKQkA4W%2FAt5nINale%2BJwW4NHaFGXGpo1Vlyr3JxMFfuHd70cuKuV1et1tKZwCCELwlSam3D75wsSOAbUVNkjwAuSKBfh0EqQXZauTndf8Xq0jY2iFEUv84rh%2FBDtyPOOdsHQMhi6iN5CsPbYjqaCwderXuyW%2Btph7v7Vl%2FDsI8x6LfjdcIucMUFjygms7LKZC2eAD6EkbEhV&X-Amz-Signature=d981c39f5df7996c138990d5554533a15b89ad72df4a57d1564a4eb424f887fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOVSBOP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCbhJtjlUUH9Qv9MTyKBOMXNZ3GtN3cQxoKGqUuLYmutwIgL2QwJBpzQBeyUQKfidC8LFk1aTOEHKUDbJkijAqTLvsqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHhg3uxCKD1qpa4CyrcA1Dn%2FHVT0tTe8bYPTHc%2FVOYUuBx7x%2Bp4%2BLLp2CaIDhv3IPYWHrz7ainmigUEVpSUJKg7NB7GxtoYTIB7t9IpHOUHkf16k4B9Ugmz%2F6VKEJGFa8Fexn2h0btVH3KG%2BQSAz5TLPn5%2BAHFzyAMADCSW2q9HGHMGOzuGAyW7iI6MhL21sW01kAIPSYt3EgZ7Oj8%2FvInVQ3f%2FDgrGDKR8i%2FZQI408ga%2BAlJQ5IcsZo3RCPlc8kkjMXPrn3xv0IKF94YcV8TZty3ClgHZRpTdD%2BdvcYEoyC03iP8TkM%2FI2hyU41sjVmVy9M8dapqV9azuSoPINOdN60UmydcYL0xYgofF8CvCGhH8Xe95NjdD%2Bxru%2F8qDWC3ByiEokaF%2B97GGhHu1rzMtdz61WQIbOgS1vnRTIiSO62tGpE3tuzY31RBPv1Gi22bm7wf5eOhayztGIWS8iKuzVUTjD6kry52ai4%2Ff9RQOFg0M5jfATbsaiQaz28ynAbJTDvF2UeenRQu1TAop8HtK1mCthXeU8fpaOk4x%2FPRfSB8XJfa1sM22Zy5%2FGzOb90CsHL%2BLlsSmj0F25%2BBxxILGuUALqGS8yk6mchL93rH1H5AnR3XdlNJ0P%2F3nGNEIEbpxCyBury4EtF%2FkTMMHc9r4GOqUBQFBuAlsIR7scmdb2wKQkA4W%2FAt5nINale%2BJwW4NHaFGXGpo1Vlyr3JxMFfuHd70cuKuV1et1tKZwCCELwlSam3D75wsSOAbUVNkjwAuSKBfh0EqQXZauTndf8Xq0jY2iFEUv84rh%2FBDtyPOOdsHQMhi6iN5CsPbYjqaCwderXuyW%2Btph7v7Vl%2FDsI8x6LfjdcIucMUFjygms7LKZC2eAD6EkbEhV&X-Amz-Signature=77d3f73fed026b47503941be72dd9f1f449438c1582d13892838381cf21627b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
