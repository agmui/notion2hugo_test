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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEG365P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrW48PAdgXwZlNFfTJaCdvIl6R0VFbdAgs1AjRXW4EZAIhAO3bh4gftZlQwtqmvCeJVIsmctFw8FqM1wBgN0jI3ExUKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKrIWmsD5BtbgTNPwq3AMmCniWWbg3pSWJWCckc9aQwhywiJeI8Z1%2FP15fku1%2B99cuOE1PeOMDeauB7khjSY9reECWvdVCR0H4DWgIiUgxkljBZVQ%2FS8C2HLvnnPaF9NN7HBM2GkV15qqrmJ%2FG8XGKHSZMFpJNhCxi2P1se5%2Bm%2FLbixRS8TTVg3AdyfdMwo4RVs%2FgxhnrxmMFNmU0O4Ci0m2zy2LiiABQgJtmbaKWV8ANPzL%2BoLsL5H3SZuKk9xD7L2SDCdCefHtzeG%2BW6nt8s%2BJf%2F5c%2FJscDA6b42Yf8YYSozC0CaPoYsiNYCmehwOF10kk6i8E8Y0BTU7QRqlnwnAjWB%2BXyxHxnHdj0ZrV7e3k7KCwsyRgk9zGjhceU7IfVcIQDeQTcdWGmv4JNVEkDFJieshDziLIrohRJQsqK7689Aejd%2BgXPLiSAPILMQUN56E9w9DYqDXp2QgkTSHn2WZejclAevIcf68WTQec4kMXj5gAAkiw0D4mdlcnSfyMEwZSWbDjqcwsdGA0htE9glGbDZVc%2F1YzsMMqlPiHw527IYrZGvRMQxrZFLt%2BChbs7hX525UjCM1d9VqWWOlOKNSZ29do%2B%2BVmi3KRpE8F5IvjK3O6YT0t%2F6MHkNvujWT4zWuVhSpWQ%2Fkw6IMjDsr%2FC%2FBjqkASsLKNA3I4397XmqVMKHPrKxGgREUmzs55ooQX4Pok8djlE0HXWJjkRp1IWz0TxFZVrbgA5s%2Fc4J81n7FOB9sfrSWKB1NTYC2OiaVS1RTPMLPxXpCExM0T%2F08y2etDRF7zoeXAxqOgW%2FGVcGSUa%2Btw7LSqtfnN1F4YK6%2BF%2Fhg6z5sKXXv4gAAE2F4BUS%2BAhXxbEPldfterNFG91G2rO1BMHrcO9z&X-Amz-Signature=0c7f87841078005f7f95bafbaf7a1a872fa75022a605e108a26fab524426bf9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEG365P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrW48PAdgXwZlNFfTJaCdvIl6R0VFbdAgs1AjRXW4EZAIhAO3bh4gftZlQwtqmvCeJVIsmctFw8FqM1wBgN0jI3ExUKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKrIWmsD5BtbgTNPwq3AMmCniWWbg3pSWJWCckc9aQwhywiJeI8Z1%2FP15fku1%2B99cuOE1PeOMDeauB7khjSY9reECWvdVCR0H4DWgIiUgxkljBZVQ%2FS8C2HLvnnPaF9NN7HBM2GkV15qqrmJ%2FG8XGKHSZMFpJNhCxi2P1se5%2Bm%2FLbixRS8TTVg3AdyfdMwo4RVs%2FgxhnrxmMFNmU0O4Ci0m2zy2LiiABQgJtmbaKWV8ANPzL%2BoLsL5H3SZuKk9xD7L2SDCdCefHtzeG%2BW6nt8s%2BJf%2F5c%2FJscDA6b42Yf8YYSozC0CaPoYsiNYCmehwOF10kk6i8E8Y0BTU7QRqlnwnAjWB%2BXyxHxnHdj0ZrV7e3k7KCwsyRgk9zGjhceU7IfVcIQDeQTcdWGmv4JNVEkDFJieshDziLIrohRJQsqK7689Aejd%2BgXPLiSAPILMQUN56E9w9DYqDXp2QgkTSHn2WZejclAevIcf68WTQec4kMXj5gAAkiw0D4mdlcnSfyMEwZSWbDjqcwsdGA0htE9glGbDZVc%2F1YzsMMqlPiHw527IYrZGvRMQxrZFLt%2BChbs7hX525UjCM1d9VqWWOlOKNSZ29do%2B%2BVmi3KRpE8F5IvjK3O6YT0t%2F6MHkNvujWT4zWuVhSpWQ%2Fkw6IMjDsr%2FC%2FBjqkASsLKNA3I4397XmqVMKHPrKxGgREUmzs55ooQX4Pok8djlE0HXWJjkRp1IWz0TxFZVrbgA5s%2Fc4J81n7FOB9sfrSWKB1NTYC2OiaVS1RTPMLPxXpCExM0T%2F08y2etDRF7zoeXAxqOgW%2FGVcGSUa%2Btw7LSqtfnN1F4YK6%2BF%2Fhg6z5sKXXv4gAAE2F4BUS%2BAhXxbEPldfterNFG91G2rO1BMHrcO9z&X-Amz-Signature=c4e1f49137054ec45c4149260b6c6fbc9be8df5b4f0809eebe6e044873beb39b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEG365P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrW48PAdgXwZlNFfTJaCdvIl6R0VFbdAgs1AjRXW4EZAIhAO3bh4gftZlQwtqmvCeJVIsmctFw8FqM1wBgN0jI3ExUKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKrIWmsD5BtbgTNPwq3AMmCniWWbg3pSWJWCckc9aQwhywiJeI8Z1%2FP15fku1%2B99cuOE1PeOMDeauB7khjSY9reECWvdVCR0H4DWgIiUgxkljBZVQ%2FS8C2HLvnnPaF9NN7HBM2GkV15qqrmJ%2FG8XGKHSZMFpJNhCxi2P1se5%2Bm%2FLbixRS8TTVg3AdyfdMwo4RVs%2FgxhnrxmMFNmU0O4Ci0m2zy2LiiABQgJtmbaKWV8ANPzL%2BoLsL5H3SZuKk9xD7L2SDCdCefHtzeG%2BW6nt8s%2BJf%2F5c%2FJscDA6b42Yf8YYSozC0CaPoYsiNYCmehwOF10kk6i8E8Y0BTU7QRqlnwnAjWB%2BXyxHxnHdj0ZrV7e3k7KCwsyRgk9zGjhceU7IfVcIQDeQTcdWGmv4JNVEkDFJieshDziLIrohRJQsqK7689Aejd%2BgXPLiSAPILMQUN56E9w9DYqDXp2QgkTSHn2WZejclAevIcf68WTQec4kMXj5gAAkiw0D4mdlcnSfyMEwZSWbDjqcwsdGA0htE9glGbDZVc%2F1YzsMMqlPiHw527IYrZGvRMQxrZFLt%2BChbs7hX525UjCM1d9VqWWOlOKNSZ29do%2B%2BVmi3KRpE8F5IvjK3O6YT0t%2F6MHkNvujWT4zWuVhSpWQ%2Fkw6IMjDsr%2FC%2FBjqkASsLKNA3I4397XmqVMKHPrKxGgREUmzs55ooQX4Pok8djlE0HXWJjkRp1IWz0TxFZVrbgA5s%2Fc4J81n7FOB9sfrSWKB1NTYC2OiaVS1RTPMLPxXpCExM0T%2F08y2etDRF7zoeXAxqOgW%2FGVcGSUa%2Btw7LSqtfnN1F4YK6%2BF%2Fhg6z5sKXXv4gAAE2F4BUS%2BAhXxbEPldfterNFG91G2rO1BMHrcO9z&X-Amz-Signature=24dc8837924d6f74cb2bda84a7b2722136bfbbbf9885232413764420e4d94373&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEG365P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrW48PAdgXwZlNFfTJaCdvIl6R0VFbdAgs1AjRXW4EZAIhAO3bh4gftZlQwtqmvCeJVIsmctFw8FqM1wBgN0jI3ExUKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKrIWmsD5BtbgTNPwq3AMmCniWWbg3pSWJWCckc9aQwhywiJeI8Z1%2FP15fku1%2B99cuOE1PeOMDeauB7khjSY9reECWvdVCR0H4DWgIiUgxkljBZVQ%2FS8C2HLvnnPaF9NN7HBM2GkV15qqrmJ%2FG8XGKHSZMFpJNhCxi2P1se5%2Bm%2FLbixRS8TTVg3AdyfdMwo4RVs%2FgxhnrxmMFNmU0O4Ci0m2zy2LiiABQgJtmbaKWV8ANPzL%2BoLsL5H3SZuKk9xD7L2SDCdCefHtzeG%2BW6nt8s%2BJf%2F5c%2FJscDA6b42Yf8YYSozC0CaPoYsiNYCmehwOF10kk6i8E8Y0BTU7QRqlnwnAjWB%2BXyxHxnHdj0ZrV7e3k7KCwsyRgk9zGjhceU7IfVcIQDeQTcdWGmv4JNVEkDFJieshDziLIrohRJQsqK7689Aejd%2BgXPLiSAPILMQUN56E9w9DYqDXp2QgkTSHn2WZejclAevIcf68WTQec4kMXj5gAAkiw0D4mdlcnSfyMEwZSWbDjqcwsdGA0htE9glGbDZVc%2F1YzsMMqlPiHw527IYrZGvRMQxrZFLt%2BChbs7hX525UjCM1d9VqWWOlOKNSZ29do%2B%2BVmi3KRpE8F5IvjK3O6YT0t%2F6MHkNvujWT4zWuVhSpWQ%2Fkw6IMjDsr%2FC%2FBjqkASsLKNA3I4397XmqVMKHPrKxGgREUmzs55ooQX4Pok8djlE0HXWJjkRp1IWz0TxFZVrbgA5s%2Fc4J81n7FOB9sfrSWKB1NTYC2OiaVS1RTPMLPxXpCExM0T%2F08y2etDRF7zoeXAxqOgW%2FGVcGSUa%2Btw7LSqtfnN1F4YK6%2BF%2Fhg6z5sKXXv4gAAE2F4BUS%2BAhXxbEPldfterNFG91G2rO1BMHrcO9z&X-Amz-Signature=f8db8b1feade6b064b80eb2ef5434448e879c9b9aaa1a74a2c459e1e9cbd8a79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEG365P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrW48PAdgXwZlNFfTJaCdvIl6R0VFbdAgs1AjRXW4EZAIhAO3bh4gftZlQwtqmvCeJVIsmctFw8FqM1wBgN0jI3ExUKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKrIWmsD5BtbgTNPwq3AMmCniWWbg3pSWJWCckc9aQwhywiJeI8Z1%2FP15fku1%2B99cuOE1PeOMDeauB7khjSY9reECWvdVCR0H4DWgIiUgxkljBZVQ%2FS8C2HLvnnPaF9NN7HBM2GkV15qqrmJ%2FG8XGKHSZMFpJNhCxi2P1se5%2Bm%2FLbixRS8TTVg3AdyfdMwo4RVs%2FgxhnrxmMFNmU0O4Ci0m2zy2LiiABQgJtmbaKWV8ANPzL%2BoLsL5H3SZuKk9xD7L2SDCdCefHtzeG%2BW6nt8s%2BJf%2F5c%2FJscDA6b42Yf8YYSozC0CaPoYsiNYCmehwOF10kk6i8E8Y0BTU7QRqlnwnAjWB%2BXyxHxnHdj0ZrV7e3k7KCwsyRgk9zGjhceU7IfVcIQDeQTcdWGmv4JNVEkDFJieshDziLIrohRJQsqK7689Aejd%2BgXPLiSAPILMQUN56E9w9DYqDXp2QgkTSHn2WZejclAevIcf68WTQec4kMXj5gAAkiw0D4mdlcnSfyMEwZSWbDjqcwsdGA0htE9glGbDZVc%2F1YzsMMqlPiHw527IYrZGvRMQxrZFLt%2BChbs7hX525UjCM1d9VqWWOlOKNSZ29do%2B%2BVmi3KRpE8F5IvjK3O6YT0t%2F6MHkNvujWT4zWuVhSpWQ%2Fkw6IMjDsr%2FC%2FBjqkASsLKNA3I4397XmqVMKHPrKxGgREUmzs55ooQX4Pok8djlE0HXWJjkRp1IWz0TxFZVrbgA5s%2Fc4J81n7FOB9sfrSWKB1NTYC2OiaVS1RTPMLPxXpCExM0T%2F08y2etDRF7zoeXAxqOgW%2FGVcGSUa%2Btw7LSqtfnN1F4YK6%2BF%2Fhg6z5sKXXv4gAAE2F4BUS%2BAhXxbEPldfterNFG91G2rO1BMHrcO9z&X-Amz-Signature=58dd375cd99d6904375b5e8b2c0f23a36144e7f4f20ba1624d15f7797f48df21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEG365P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrW48PAdgXwZlNFfTJaCdvIl6R0VFbdAgs1AjRXW4EZAIhAO3bh4gftZlQwtqmvCeJVIsmctFw8FqM1wBgN0jI3ExUKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKrIWmsD5BtbgTNPwq3AMmCniWWbg3pSWJWCckc9aQwhywiJeI8Z1%2FP15fku1%2B99cuOE1PeOMDeauB7khjSY9reECWvdVCR0H4DWgIiUgxkljBZVQ%2FS8C2HLvnnPaF9NN7HBM2GkV15qqrmJ%2FG8XGKHSZMFpJNhCxi2P1se5%2Bm%2FLbixRS8TTVg3AdyfdMwo4RVs%2FgxhnrxmMFNmU0O4Ci0m2zy2LiiABQgJtmbaKWV8ANPzL%2BoLsL5H3SZuKk9xD7L2SDCdCefHtzeG%2BW6nt8s%2BJf%2F5c%2FJscDA6b42Yf8YYSozC0CaPoYsiNYCmehwOF10kk6i8E8Y0BTU7QRqlnwnAjWB%2BXyxHxnHdj0ZrV7e3k7KCwsyRgk9zGjhceU7IfVcIQDeQTcdWGmv4JNVEkDFJieshDziLIrohRJQsqK7689Aejd%2BgXPLiSAPILMQUN56E9w9DYqDXp2QgkTSHn2WZejclAevIcf68WTQec4kMXj5gAAkiw0D4mdlcnSfyMEwZSWbDjqcwsdGA0htE9glGbDZVc%2F1YzsMMqlPiHw527IYrZGvRMQxrZFLt%2BChbs7hX525UjCM1d9VqWWOlOKNSZ29do%2B%2BVmi3KRpE8F5IvjK3O6YT0t%2F6MHkNvujWT4zWuVhSpWQ%2Fkw6IMjDsr%2FC%2FBjqkASsLKNA3I4397XmqVMKHPrKxGgREUmzs55ooQX4Pok8djlE0HXWJjkRp1IWz0TxFZVrbgA5s%2Fc4J81n7FOB9sfrSWKB1NTYC2OiaVS1RTPMLPxXpCExM0T%2F08y2etDRF7zoeXAxqOgW%2FGVcGSUa%2Btw7LSqtfnN1F4YK6%2BF%2Fhg6z5sKXXv4gAAE2F4BUS%2BAhXxbEPldfterNFG91G2rO1BMHrcO9z&X-Amz-Signature=54ae0897116bc08e2c0c85964adc000dcd9506607d929b791b063984ff3683fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEG365P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrW48PAdgXwZlNFfTJaCdvIl6R0VFbdAgs1AjRXW4EZAIhAO3bh4gftZlQwtqmvCeJVIsmctFw8FqM1wBgN0jI3ExUKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKrIWmsD5BtbgTNPwq3AMmCniWWbg3pSWJWCckc9aQwhywiJeI8Z1%2FP15fku1%2B99cuOE1PeOMDeauB7khjSY9reECWvdVCR0H4DWgIiUgxkljBZVQ%2FS8C2HLvnnPaF9NN7HBM2GkV15qqrmJ%2FG8XGKHSZMFpJNhCxi2P1se5%2Bm%2FLbixRS8TTVg3AdyfdMwo4RVs%2FgxhnrxmMFNmU0O4Ci0m2zy2LiiABQgJtmbaKWV8ANPzL%2BoLsL5H3SZuKk9xD7L2SDCdCefHtzeG%2BW6nt8s%2BJf%2F5c%2FJscDA6b42Yf8YYSozC0CaPoYsiNYCmehwOF10kk6i8E8Y0BTU7QRqlnwnAjWB%2BXyxHxnHdj0ZrV7e3k7KCwsyRgk9zGjhceU7IfVcIQDeQTcdWGmv4JNVEkDFJieshDziLIrohRJQsqK7689Aejd%2BgXPLiSAPILMQUN56E9w9DYqDXp2QgkTSHn2WZejclAevIcf68WTQec4kMXj5gAAkiw0D4mdlcnSfyMEwZSWbDjqcwsdGA0htE9glGbDZVc%2F1YzsMMqlPiHw527IYrZGvRMQxrZFLt%2BChbs7hX525UjCM1d9VqWWOlOKNSZ29do%2B%2BVmi3KRpE8F5IvjK3O6YT0t%2F6MHkNvujWT4zWuVhSpWQ%2Fkw6IMjDsr%2FC%2FBjqkASsLKNA3I4397XmqVMKHPrKxGgREUmzs55ooQX4Pok8djlE0HXWJjkRp1IWz0TxFZVrbgA5s%2Fc4J81n7FOB9sfrSWKB1NTYC2OiaVS1RTPMLPxXpCExM0T%2F08y2etDRF7zoeXAxqOgW%2FGVcGSUa%2Btw7LSqtfnN1F4YK6%2BF%2Fhg6z5sKXXv4gAAE2F4BUS%2BAhXxbEPldfterNFG91G2rO1BMHrcO9z&X-Amz-Signature=3f4c5765addcc4b26d31e45179991437f0efd6f6731024b0ecebbad451db694e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEG365P%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCrW48PAdgXwZlNFfTJaCdvIl6R0VFbdAgs1AjRXW4EZAIhAO3bh4gftZlQwtqmvCeJVIsmctFw8FqM1wBgN0jI3ExUKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKrIWmsD5BtbgTNPwq3AMmCniWWbg3pSWJWCckc9aQwhywiJeI8Z1%2FP15fku1%2B99cuOE1PeOMDeauB7khjSY9reECWvdVCR0H4DWgIiUgxkljBZVQ%2FS8C2HLvnnPaF9NN7HBM2GkV15qqrmJ%2FG8XGKHSZMFpJNhCxi2P1se5%2Bm%2FLbixRS8TTVg3AdyfdMwo4RVs%2FgxhnrxmMFNmU0O4Ci0m2zy2LiiABQgJtmbaKWV8ANPzL%2BoLsL5H3SZuKk9xD7L2SDCdCefHtzeG%2BW6nt8s%2BJf%2F5c%2FJscDA6b42Yf8YYSozC0CaPoYsiNYCmehwOF10kk6i8E8Y0BTU7QRqlnwnAjWB%2BXyxHxnHdj0ZrV7e3k7KCwsyRgk9zGjhceU7IfVcIQDeQTcdWGmv4JNVEkDFJieshDziLIrohRJQsqK7689Aejd%2BgXPLiSAPILMQUN56E9w9DYqDXp2QgkTSHn2WZejclAevIcf68WTQec4kMXj5gAAkiw0D4mdlcnSfyMEwZSWbDjqcwsdGA0htE9glGbDZVc%2F1YzsMMqlPiHw527IYrZGvRMQxrZFLt%2BChbs7hX525UjCM1d9VqWWOlOKNSZ29do%2B%2BVmi3KRpE8F5IvjK3O6YT0t%2F6MHkNvujWT4zWuVhSpWQ%2Fkw6IMjDsr%2FC%2FBjqkASsLKNA3I4397XmqVMKHPrKxGgREUmzs55ooQX4Pok8djlE0HXWJjkRp1IWz0TxFZVrbgA5s%2Fc4J81n7FOB9sfrSWKB1NTYC2OiaVS1RTPMLPxXpCExM0T%2F08y2etDRF7zoeXAxqOgW%2FGVcGSUa%2Btw7LSqtfnN1F4YK6%2BF%2Fhg6z5sKXXv4gAAE2F4BUS%2BAhXxbEPldfterNFG91G2rO1BMHrcO9z&X-Amz-Signature=7a5bcbc52acbe0d76f466853ac1c19424a11155df48b82b7bd5d5ffd23a7556d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
