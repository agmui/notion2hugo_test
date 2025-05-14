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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQRTV7P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCoRMWKKp1SollTRMpeAAjDAzckr6mZTKICY1SUBotLggIgay%2B9sQ204kC1xTwji4CVgNaK5tNNNuecZI%2FHTnvI96QqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI0k1IGeZs9uKcEeSrcA91Uipg8NM59F2gF7CoZihG3%2BHCRxXK4fEtjs0iQFB7teZsMnRp8vkU1Jb4KAgUKOhoNJb7Wi83SkhFDcfwWlJGHdQdszUvsPZhYg8FouER03MWtfM8eAXSGcS9J2cRu1f%2BIGJvEDuAQPyzpPU9SbsX00%2FMJG9FTtcU4K2KP%2BL4rlRwzeKwbfTpNbByfboS9ZtoVvPbVK069ugzKcx24FHqwxpn5FqSpnp2kKkVG%2F23Rw9KKi3Apl6txcYzyX57y8rvNvVe0uk61WCi9dnh6bwzU6uvvX3%2F%2Ftab8R43vN2Qp5ZDxO7jGWBUBRrfX%2FuNDZRlekbQwhO8zzeKJoQVWyL0lXQQyMqGu3CEGtfrp6sqEJMHXcRZwNyO%2By92bvAQYodokndlNwkxfPb9iXAMr3nxSGYLGAY8W%2FHHLuGKvAcC7riPMPQ%2FEc%2FRoERcCADul0ukkNqlDwh26%2FY81PpgdQ%2F%2FqLlPMzNtX%2Fx2vqyCZHU30mkH0MPMkv2il8osc5I29Xn11qeWkMGsVygGJOuVNtcSRHstMRGqhgp5Z13Wr0S8THOlapmYwIyYLkoRgtUgNI462XG1SgKUk3gmGaQGPY3dzuenlKd30bOsJOWe2A%2BL4t%2FlD%2F03zsMLB0KCkMK2%2Fj8EGOqUBW2P54JWm2vekJQHTzsQLWDKIFzYMZg%2BW2wYoL7k4NTPUJ0yE4yrLMuoCI3dqw3XKKk0fFfKn9HBOMmjbxB%2Bn9fCwgidFZw%2FnAa36hTR2Oip3ZufTdYLgkewLtHlUAiscf8hlJRAtrdPphzKsv3E9paMXhZaeNdq6VchQaZfVtme%2FkO%2FiSBGO6FQ0qjPA360REOmjXgVDdwXt3GQnbLGkRNYUtL1W&X-Amz-Signature=490d69e0a2828282fc539518dcb7f82e0e4880258fbc3bd7b03d87106d7ca9a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQRTV7P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCoRMWKKp1SollTRMpeAAjDAzckr6mZTKICY1SUBotLggIgay%2B9sQ204kC1xTwji4CVgNaK5tNNNuecZI%2FHTnvI96QqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI0k1IGeZs9uKcEeSrcA91Uipg8NM59F2gF7CoZihG3%2BHCRxXK4fEtjs0iQFB7teZsMnRp8vkU1Jb4KAgUKOhoNJb7Wi83SkhFDcfwWlJGHdQdszUvsPZhYg8FouER03MWtfM8eAXSGcS9J2cRu1f%2BIGJvEDuAQPyzpPU9SbsX00%2FMJG9FTtcU4K2KP%2BL4rlRwzeKwbfTpNbByfboS9ZtoVvPbVK069ugzKcx24FHqwxpn5FqSpnp2kKkVG%2F23Rw9KKi3Apl6txcYzyX57y8rvNvVe0uk61WCi9dnh6bwzU6uvvX3%2F%2Ftab8R43vN2Qp5ZDxO7jGWBUBRrfX%2FuNDZRlekbQwhO8zzeKJoQVWyL0lXQQyMqGu3CEGtfrp6sqEJMHXcRZwNyO%2By92bvAQYodokndlNwkxfPb9iXAMr3nxSGYLGAY8W%2FHHLuGKvAcC7riPMPQ%2FEc%2FRoERcCADul0ukkNqlDwh26%2FY81PpgdQ%2F%2FqLlPMzNtX%2Fx2vqyCZHU30mkH0MPMkv2il8osc5I29Xn11qeWkMGsVygGJOuVNtcSRHstMRGqhgp5Z13Wr0S8THOlapmYwIyYLkoRgtUgNI462XG1SgKUk3gmGaQGPY3dzuenlKd30bOsJOWe2A%2BL4t%2FlD%2F03zsMLB0KCkMK2%2Fj8EGOqUBW2P54JWm2vekJQHTzsQLWDKIFzYMZg%2BW2wYoL7k4NTPUJ0yE4yrLMuoCI3dqw3XKKk0fFfKn9HBOMmjbxB%2Bn9fCwgidFZw%2FnAa36hTR2Oip3ZufTdYLgkewLtHlUAiscf8hlJRAtrdPphzKsv3E9paMXhZaeNdq6VchQaZfVtme%2FkO%2FiSBGO6FQ0qjPA360REOmjXgVDdwXt3GQnbLGkRNYUtL1W&X-Amz-Signature=b55df534e5a274b5f85fde47ad612ba37edfdff14000c3e49283d519d40daeaf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQRTV7P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCoRMWKKp1SollTRMpeAAjDAzckr6mZTKICY1SUBotLggIgay%2B9sQ204kC1xTwji4CVgNaK5tNNNuecZI%2FHTnvI96QqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI0k1IGeZs9uKcEeSrcA91Uipg8NM59F2gF7CoZihG3%2BHCRxXK4fEtjs0iQFB7teZsMnRp8vkU1Jb4KAgUKOhoNJb7Wi83SkhFDcfwWlJGHdQdszUvsPZhYg8FouER03MWtfM8eAXSGcS9J2cRu1f%2BIGJvEDuAQPyzpPU9SbsX00%2FMJG9FTtcU4K2KP%2BL4rlRwzeKwbfTpNbByfboS9ZtoVvPbVK069ugzKcx24FHqwxpn5FqSpnp2kKkVG%2F23Rw9KKi3Apl6txcYzyX57y8rvNvVe0uk61WCi9dnh6bwzU6uvvX3%2F%2Ftab8R43vN2Qp5ZDxO7jGWBUBRrfX%2FuNDZRlekbQwhO8zzeKJoQVWyL0lXQQyMqGu3CEGtfrp6sqEJMHXcRZwNyO%2By92bvAQYodokndlNwkxfPb9iXAMr3nxSGYLGAY8W%2FHHLuGKvAcC7riPMPQ%2FEc%2FRoERcCADul0ukkNqlDwh26%2FY81PpgdQ%2F%2FqLlPMzNtX%2Fx2vqyCZHU30mkH0MPMkv2il8osc5I29Xn11qeWkMGsVygGJOuVNtcSRHstMRGqhgp5Z13Wr0S8THOlapmYwIyYLkoRgtUgNI462XG1SgKUk3gmGaQGPY3dzuenlKd30bOsJOWe2A%2BL4t%2FlD%2F03zsMLB0KCkMK2%2Fj8EGOqUBW2P54JWm2vekJQHTzsQLWDKIFzYMZg%2BW2wYoL7k4NTPUJ0yE4yrLMuoCI3dqw3XKKk0fFfKn9HBOMmjbxB%2Bn9fCwgidFZw%2FnAa36hTR2Oip3ZufTdYLgkewLtHlUAiscf8hlJRAtrdPphzKsv3E9paMXhZaeNdq6VchQaZfVtme%2FkO%2FiSBGO6FQ0qjPA360REOmjXgVDdwXt3GQnbLGkRNYUtL1W&X-Amz-Signature=5f8958c10dea81731e1a2eb82f81a213b29a18b4bcda305ac8a04845884259cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQRTV7P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCoRMWKKp1SollTRMpeAAjDAzckr6mZTKICY1SUBotLggIgay%2B9sQ204kC1xTwji4CVgNaK5tNNNuecZI%2FHTnvI96QqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI0k1IGeZs9uKcEeSrcA91Uipg8NM59F2gF7CoZihG3%2BHCRxXK4fEtjs0iQFB7teZsMnRp8vkU1Jb4KAgUKOhoNJb7Wi83SkhFDcfwWlJGHdQdszUvsPZhYg8FouER03MWtfM8eAXSGcS9J2cRu1f%2BIGJvEDuAQPyzpPU9SbsX00%2FMJG9FTtcU4K2KP%2BL4rlRwzeKwbfTpNbByfboS9ZtoVvPbVK069ugzKcx24FHqwxpn5FqSpnp2kKkVG%2F23Rw9KKi3Apl6txcYzyX57y8rvNvVe0uk61WCi9dnh6bwzU6uvvX3%2F%2Ftab8R43vN2Qp5ZDxO7jGWBUBRrfX%2FuNDZRlekbQwhO8zzeKJoQVWyL0lXQQyMqGu3CEGtfrp6sqEJMHXcRZwNyO%2By92bvAQYodokndlNwkxfPb9iXAMr3nxSGYLGAY8W%2FHHLuGKvAcC7riPMPQ%2FEc%2FRoERcCADul0ukkNqlDwh26%2FY81PpgdQ%2F%2FqLlPMzNtX%2Fx2vqyCZHU30mkH0MPMkv2il8osc5I29Xn11qeWkMGsVygGJOuVNtcSRHstMRGqhgp5Z13Wr0S8THOlapmYwIyYLkoRgtUgNI462XG1SgKUk3gmGaQGPY3dzuenlKd30bOsJOWe2A%2BL4t%2FlD%2F03zsMLB0KCkMK2%2Fj8EGOqUBW2P54JWm2vekJQHTzsQLWDKIFzYMZg%2BW2wYoL7k4NTPUJ0yE4yrLMuoCI3dqw3XKKk0fFfKn9HBOMmjbxB%2Bn9fCwgidFZw%2FnAa36hTR2Oip3ZufTdYLgkewLtHlUAiscf8hlJRAtrdPphzKsv3E9paMXhZaeNdq6VchQaZfVtme%2FkO%2FiSBGO6FQ0qjPA360REOmjXgVDdwXt3GQnbLGkRNYUtL1W&X-Amz-Signature=5d2932b56b62c2ad53ae500d5e77d5e88317f4737a57150e8c5444dd9557ec7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQRTV7P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCoRMWKKp1SollTRMpeAAjDAzckr6mZTKICY1SUBotLggIgay%2B9sQ204kC1xTwji4CVgNaK5tNNNuecZI%2FHTnvI96QqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI0k1IGeZs9uKcEeSrcA91Uipg8NM59F2gF7CoZihG3%2BHCRxXK4fEtjs0iQFB7teZsMnRp8vkU1Jb4KAgUKOhoNJb7Wi83SkhFDcfwWlJGHdQdszUvsPZhYg8FouER03MWtfM8eAXSGcS9J2cRu1f%2BIGJvEDuAQPyzpPU9SbsX00%2FMJG9FTtcU4K2KP%2BL4rlRwzeKwbfTpNbByfboS9ZtoVvPbVK069ugzKcx24FHqwxpn5FqSpnp2kKkVG%2F23Rw9KKi3Apl6txcYzyX57y8rvNvVe0uk61WCi9dnh6bwzU6uvvX3%2F%2Ftab8R43vN2Qp5ZDxO7jGWBUBRrfX%2FuNDZRlekbQwhO8zzeKJoQVWyL0lXQQyMqGu3CEGtfrp6sqEJMHXcRZwNyO%2By92bvAQYodokndlNwkxfPb9iXAMr3nxSGYLGAY8W%2FHHLuGKvAcC7riPMPQ%2FEc%2FRoERcCADul0ukkNqlDwh26%2FY81PpgdQ%2F%2FqLlPMzNtX%2Fx2vqyCZHU30mkH0MPMkv2il8osc5I29Xn11qeWkMGsVygGJOuVNtcSRHstMRGqhgp5Z13Wr0S8THOlapmYwIyYLkoRgtUgNI462XG1SgKUk3gmGaQGPY3dzuenlKd30bOsJOWe2A%2BL4t%2FlD%2F03zsMLB0KCkMK2%2Fj8EGOqUBW2P54JWm2vekJQHTzsQLWDKIFzYMZg%2BW2wYoL7k4NTPUJ0yE4yrLMuoCI3dqw3XKKk0fFfKn9HBOMmjbxB%2Bn9fCwgidFZw%2FnAa36hTR2Oip3ZufTdYLgkewLtHlUAiscf8hlJRAtrdPphzKsv3E9paMXhZaeNdq6VchQaZfVtme%2FkO%2FiSBGO6FQ0qjPA360REOmjXgVDdwXt3GQnbLGkRNYUtL1W&X-Amz-Signature=f5293605ffe983aceaf2d91ad4ec61158b3bb01c6183d40878434da5928cc4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQRTV7P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCoRMWKKp1SollTRMpeAAjDAzckr6mZTKICY1SUBotLggIgay%2B9sQ204kC1xTwji4CVgNaK5tNNNuecZI%2FHTnvI96QqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI0k1IGeZs9uKcEeSrcA91Uipg8NM59F2gF7CoZihG3%2BHCRxXK4fEtjs0iQFB7teZsMnRp8vkU1Jb4KAgUKOhoNJb7Wi83SkhFDcfwWlJGHdQdszUvsPZhYg8FouER03MWtfM8eAXSGcS9J2cRu1f%2BIGJvEDuAQPyzpPU9SbsX00%2FMJG9FTtcU4K2KP%2BL4rlRwzeKwbfTpNbByfboS9ZtoVvPbVK069ugzKcx24FHqwxpn5FqSpnp2kKkVG%2F23Rw9KKi3Apl6txcYzyX57y8rvNvVe0uk61WCi9dnh6bwzU6uvvX3%2F%2Ftab8R43vN2Qp5ZDxO7jGWBUBRrfX%2FuNDZRlekbQwhO8zzeKJoQVWyL0lXQQyMqGu3CEGtfrp6sqEJMHXcRZwNyO%2By92bvAQYodokndlNwkxfPb9iXAMr3nxSGYLGAY8W%2FHHLuGKvAcC7riPMPQ%2FEc%2FRoERcCADul0ukkNqlDwh26%2FY81PpgdQ%2F%2FqLlPMzNtX%2Fx2vqyCZHU30mkH0MPMkv2il8osc5I29Xn11qeWkMGsVygGJOuVNtcSRHstMRGqhgp5Z13Wr0S8THOlapmYwIyYLkoRgtUgNI462XG1SgKUk3gmGaQGPY3dzuenlKd30bOsJOWe2A%2BL4t%2FlD%2F03zsMLB0KCkMK2%2Fj8EGOqUBW2P54JWm2vekJQHTzsQLWDKIFzYMZg%2BW2wYoL7k4NTPUJ0yE4yrLMuoCI3dqw3XKKk0fFfKn9HBOMmjbxB%2Bn9fCwgidFZw%2FnAa36hTR2Oip3ZufTdYLgkewLtHlUAiscf8hlJRAtrdPphzKsv3E9paMXhZaeNdq6VchQaZfVtme%2FkO%2FiSBGO6FQ0qjPA360REOmjXgVDdwXt3GQnbLGkRNYUtL1W&X-Amz-Signature=3e58713cdc7cce78c1585aaaf1a27358a19f0abfa9b23747c81bb0ddf947a21d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQRTV7P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCoRMWKKp1SollTRMpeAAjDAzckr6mZTKICY1SUBotLggIgay%2B9sQ204kC1xTwji4CVgNaK5tNNNuecZI%2FHTnvI96QqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI0k1IGeZs9uKcEeSrcA91Uipg8NM59F2gF7CoZihG3%2BHCRxXK4fEtjs0iQFB7teZsMnRp8vkU1Jb4KAgUKOhoNJb7Wi83SkhFDcfwWlJGHdQdszUvsPZhYg8FouER03MWtfM8eAXSGcS9J2cRu1f%2BIGJvEDuAQPyzpPU9SbsX00%2FMJG9FTtcU4K2KP%2BL4rlRwzeKwbfTpNbByfboS9ZtoVvPbVK069ugzKcx24FHqwxpn5FqSpnp2kKkVG%2F23Rw9KKi3Apl6txcYzyX57y8rvNvVe0uk61WCi9dnh6bwzU6uvvX3%2F%2Ftab8R43vN2Qp5ZDxO7jGWBUBRrfX%2FuNDZRlekbQwhO8zzeKJoQVWyL0lXQQyMqGu3CEGtfrp6sqEJMHXcRZwNyO%2By92bvAQYodokndlNwkxfPb9iXAMr3nxSGYLGAY8W%2FHHLuGKvAcC7riPMPQ%2FEc%2FRoERcCADul0ukkNqlDwh26%2FY81PpgdQ%2F%2FqLlPMzNtX%2Fx2vqyCZHU30mkH0MPMkv2il8osc5I29Xn11qeWkMGsVygGJOuVNtcSRHstMRGqhgp5Z13Wr0S8THOlapmYwIyYLkoRgtUgNI462XG1SgKUk3gmGaQGPY3dzuenlKd30bOsJOWe2A%2BL4t%2FlD%2F03zsMLB0KCkMK2%2Fj8EGOqUBW2P54JWm2vekJQHTzsQLWDKIFzYMZg%2BW2wYoL7k4NTPUJ0yE4yrLMuoCI3dqw3XKKk0fFfKn9HBOMmjbxB%2Bn9fCwgidFZw%2FnAa36hTR2Oip3ZufTdYLgkewLtHlUAiscf8hlJRAtrdPphzKsv3E9paMXhZaeNdq6VchQaZfVtme%2FkO%2FiSBGO6FQ0qjPA360REOmjXgVDdwXt3GQnbLGkRNYUtL1W&X-Amz-Signature=217023568a9462fcf1f1b6b1f63c826556e70cbeaca975d6d9dc7152b8c460d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQRTV7P%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCoRMWKKp1SollTRMpeAAjDAzckr6mZTKICY1SUBotLggIgay%2B9sQ204kC1xTwji4CVgNaK5tNNNuecZI%2FHTnvI96QqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI0k1IGeZs9uKcEeSrcA91Uipg8NM59F2gF7CoZihG3%2BHCRxXK4fEtjs0iQFB7teZsMnRp8vkU1Jb4KAgUKOhoNJb7Wi83SkhFDcfwWlJGHdQdszUvsPZhYg8FouER03MWtfM8eAXSGcS9J2cRu1f%2BIGJvEDuAQPyzpPU9SbsX00%2FMJG9FTtcU4K2KP%2BL4rlRwzeKwbfTpNbByfboS9ZtoVvPbVK069ugzKcx24FHqwxpn5FqSpnp2kKkVG%2F23Rw9KKi3Apl6txcYzyX57y8rvNvVe0uk61WCi9dnh6bwzU6uvvX3%2F%2Ftab8R43vN2Qp5ZDxO7jGWBUBRrfX%2FuNDZRlekbQwhO8zzeKJoQVWyL0lXQQyMqGu3CEGtfrp6sqEJMHXcRZwNyO%2By92bvAQYodokndlNwkxfPb9iXAMr3nxSGYLGAY8W%2FHHLuGKvAcC7riPMPQ%2FEc%2FRoERcCADul0ukkNqlDwh26%2FY81PpgdQ%2F%2FqLlPMzNtX%2Fx2vqyCZHU30mkH0MPMkv2il8osc5I29Xn11qeWkMGsVygGJOuVNtcSRHstMRGqhgp5Z13Wr0S8THOlapmYwIyYLkoRgtUgNI462XG1SgKUk3gmGaQGPY3dzuenlKd30bOsJOWe2A%2BL4t%2FlD%2F03zsMLB0KCkMK2%2Fj8EGOqUBW2P54JWm2vekJQHTzsQLWDKIFzYMZg%2BW2wYoL7k4NTPUJ0yE4yrLMuoCI3dqw3XKKk0fFfKn9HBOMmjbxB%2Bn9fCwgidFZw%2FnAa36hTR2Oip3ZufTdYLgkewLtHlUAiscf8hlJRAtrdPphzKsv3E9paMXhZaeNdq6VchQaZfVtme%2FkO%2FiSBGO6FQ0qjPA360REOmjXgVDdwXt3GQnbLGkRNYUtL1W&X-Amz-Signature=739e49d61078de9817a816fdbd56240497ec2bbcbe75da98cff83d20d1566c24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
