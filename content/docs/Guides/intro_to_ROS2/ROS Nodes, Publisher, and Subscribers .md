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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7P2R37%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW4INXoiuCksFcz6KpBq%2F0%2Bs8s3VWBpEEIODl%2F0pE6AiEA%2BT44XithaQj6PgFyPR9jzps%2F3oKpzSsKheYnYxIXjvQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMRS4dUmusGigQI4SrcA1yjlP17Z1GCQ2xZfBu3SFonuOUilH9ncCEjYpKV1v%2FrwqMCdBW73FLJaQ6mbWxJXzmXfG4KZyx9yWoo4qhyiYhGJiDLRGAACYfjHXnDJs%2FpgLISBmhUpxkRl2h7IglrXHNIRiLwkzAnkRscEbGtnqrSWSCZGAcSDLnxovlc6WliAKvzaxfmt96iA8cNIa1RwhZqZQ3LtVop7ImO%2FnUnHdvJZ2tOL5pqxrojUaALPKAlb7RJVzYCCUVJ2Otp4FF7Za27i5aenYsAH5kmx1gXhYFSPyt%2FbXA%2Blg0o6XM9faoa1IY5DJCvWo1ynmwBIqCGcxJnz7mKPldA40QNDaMg7YN4apIhrgxM9w5KdwQenZSRRfaI%2Fw9ojdVdW%2BsAskfpUfxL4%2Blf7pHAJ18wALk0%2Fwvxw4EtpWWzGlayfAworOMdLHP0a4H2ybO94YBSjCF3hqswKuvByLkhbJzcq02JzSbwoinBxk9oNVcO1Hh6Mn%2Bq4QJJVC3VPuWINIZAsAfFIeUemfLDRyGr6MWck6CSjnyvsGDxUUrl2yNpYrIDqpwDNzt2HWH9A%2Bq5gPqbBFfqpveKcjKPbIiR9SE4CnZaOWJzF1P4C9Ajdms8B1ys6xGAgA5CeSrExzkPZbjHML7bl74GOqUBToQcggDgrO9hvzUVDX2wsjr3LWqvTaAqlOTmul6vjVjN%2FZFLwWxmqULa%2Fvops06bCzkBfqD3p%2FU6hPPocoUwyT%2BKwpIcDvNqqlRP9AgDHLzRaQU%2F55LCrh%2Fw%2FDluZsmgBqODOKeGlDTLzvna1gP%2BbbPWA%2Fh671UXQMuty3SNjRxgLc8mrjV7lebwfvQdMdr96qfQXPdY4Gz2u%2Bhq356L24QZYMvJ&X-Amz-Signature=26d2a7ff0bea4bd06d44b4c1bc92bb95d51862c14447b390dbc4fe1ae1220730&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7P2R37%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW4INXoiuCksFcz6KpBq%2F0%2Bs8s3VWBpEEIODl%2F0pE6AiEA%2BT44XithaQj6PgFyPR9jzps%2F3oKpzSsKheYnYxIXjvQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMRS4dUmusGigQI4SrcA1yjlP17Z1GCQ2xZfBu3SFonuOUilH9ncCEjYpKV1v%2FrwqMCdBW73FLJaQ6mbWxJXzmXfG4KZyx9yWoo4qhyiYhGJiDLRGAACYfjHXnDJs%2FpgLISBmhUpxkRl2h7IglrXHNIRiLwkzAnkRscEbGtnqrSWSCZGAcSDLnxovlc6WliAKvzaxfmt96iA8cNIa1RwhZqZQ3LtVop7ImO%2FnUnHdvJZ2tOL5pqxrojUaALPKAlb7RJVzYCCUVJ2Otp4FF7Za27i5aenYsAH5kmx1gXhYFSPyt%2FbXA%2Blg0o6XM9faoa1IY5DJCvWo1ynmwBIqCGcxJnz7mKPldA40QNDaMg7YN4apIhrgxM9w5KdwQenZSRRfaI%2Fw9ojdVdW%2BsAskfpUfxL4%2Blf7pHAJ18wALk0%2Fwvxw4EtpWWzGlayfAworOMdLHP0a4H2ybO94YBSjCF3hqswKuvByLkhbJzcq02JzSbwoinBxk9oNVcO1Hh6Mn%2Bq4QJJVC3VPuWINIZAsAfFIeUemfLDRyGr6MWck6CSjnyvsGDxUUrl2yNpYrIDqpwDNzt2HWH9A%2Bq5gPqbBFfqpveKcjKPbIiR9SE4CnZaOWJzF1P4C9Ajdms8B1ys6xGAgA5CeSrExzkPZbjHML7bl74GOqUBToQcggDgrO9hvzUVDX2wsjr3LWqvTaAqlOTmul6vjVjN%2FZFLwWxmqULa%2Fvops06bCzkBfqD3p%2FU6hPPocoUwyT%2BKwpIcDvNqqlRP9AgDHLzRaQU%2F55LCrh%2Fw%2FDluZsmgBqODOKeGlDTLzvna1gP%2BbbPWA%2Fh671UXQMuty3SNjRxgLc8mrjV7lebwfvQdMdr96qfQXPdY4Gz2u%2Bhq356L24QZYMvJ&X-Amz-Signature=d8ba4585aa06c4c9d4ebe59986a98d7a8a1a271308ac606f3537ad24962af9b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7P2R37%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW4INXoiuCksFcz6KpBq%2F0%2Bs8s3VWBpEEIODl%2F0pE6AiEA%2BT44XithaQj6PgFyPR9jzps%2F3oKpzSsKheYnYxIXjvQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMRS4dUmusGigQI4SrcA1yjlP17Z1GCQ2xZfBu3SFonuOUilH9ncCEjYpKV1v%2FrwqMCdBW73FLJaQ6mbWxJXzmXfG4KZyx9yWoo4qhyiYhGJiDLRGAACYfjHXnDJs%2FpgLISBmhUpxkRl2h7IglrXHNIRiLwkzAnkRscEbGtnqrSWSCZGAcSDLnxovlc6WliAKvzaxfmt96iA8cNIa1RwhZqZQ3LtVop7ImO%2FnUnHdvJZ2tOL5pqxrojUaALPKAlb7RJVzYCCUVJ2Otp4FF7Za27i5aenYsAH5kmx1gXhYFSPyt%2FbXA%2Blg0o6XM9faoa1IY5DJCvWo1ynmwBIqCGcxJnz7mKPldA40QNDaMg7YN4apIhrgxM9w5KdwQenZSRRfaI%2Fw9ojdVdW%2BsAskfpUfxL4%2Blf7pHAJ18wALk0%2Fwvxw4EtpWWzGlayfAworOMdLHP0a4H2ybO94YBSjCF3hqswKuvByLkhbJzcq02JzSbwoinBxk9oNVcO1Hh6Mn%2Bq4QJJVC3VPuWINIZAsAfFIeUemfLDRyGr6MWck6CSjnyvsGDxUUrl2yNpYrIDqpwDNzt2HWH9A%2Bq5gPqbBFfqpveKcjKPbIiR9SE4CnZaOWJzF1P4C9Ajdms8B1ys6xGAgA5CeSrExzkPZbjHML7bl74GOqUBToQcggDgrO9hvzUVDX2wsjr3LWqvTaAqlOTmul6vjVjN%2FZFLwWxmqULa%2Fvops06bCzkBfqD3p%2FU6hPPocoUwyT%2BKwpIcDvNqqlRP9AgDHLzRaQU%2F55LCrh%2Fw%2FDluZsmgBqODOKeGlDTLzvna1gP%2BbbPWA%2Fh671UXQMuty3SNjRxgLc8mrjV7lebwfvQdMdr96qfQXPdY4Gz2u%2Bhq356L24QZYMvJ&X-Amz-Signature=2052e5d98f521ee5f859b1fdb748dd608c9bcf8330c619ed594d85f9d5e5ba7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7P2R37%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW4INXoiuCksFcz6KpBq%2F0%2Bs8s3VWBpEEIODl%2F0pE6AiEA%2BT44XithaQj6PgFyPR9jzps%2F3oKpzSsKheYnYxIXjvQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMRS4dUmusGigQI4SrcA1yjlP17Z1GCQ2xZfBu3SFonuOUilH9ncCEjYpKV1v%2FrwqMCdBW73FLJaQ6mbWxJXzmXfG4KZyx9yWoo4qhyiYhGJiDLRGAACYfjHXnDJs%2FpgLISBmhUpxkRl2h7IglrXHNIRiLwkzAnkRscEbGtnqrSWSCZGAcSDLnxovlc6WliAKvzaxfmt96iA8cNIa1RwhZqZQ3LtVop7ImO%2FnUnHdvJZ2tOL5pqxrojUaALPKAlb7RJVzYCCUVJ2Otp4FF7Za27i5aenYsAH5kmx1gXhYFSPyt%2FbXA%2Blg0o6XM9faoa1IY5DJCvWo1ynmwBIqCGcxJnz7mKPldA40QNDaMg7YN4apIhrgxM9w5KdwQenZSRRfaI%2Fw9ojdVdW%2BsAskfpUfxL4%2Blf7pHAJ18wALk0%2Fwvxw4EtpWWzGlayfAworOMdLHP0a4H2ybO94YBSjCF3hqswKuvByLkhbJzcq02JzSbwoinBxk9oNVcO1Hh6Mn%2Bq4QJJVC3VPuWINIZAsAfFIeUemfLDRyGr6MWck6CSjnyvsGDxUUrl2yNpYrIDqpwDNzt2HWH9A%2Bq5gPqbBFfqpveKcjKPbIiR9SE4CnZaOWJzF1P4C9Ajdms8B1ys6xGAgA5CeSrExzkPZbjHML7bl74GOqUBToQcggDgrO9hvzUVDX2wsjr3LWqvTaAqlOTmul6vjVjN%2FZFLwWxmqULa%2Fvops06bCzkBfqD3p%2FU6hPPocoUwyT%2BKwpIcDvNqqlRP9AgDHLzRaQU%2F55LCrh%2Fw%2FDluZsmgBqODOKeGlDTLzvna1gP%2BbbPWA%2Fh671UXQMuty3SNjRxgLc8mrjV7lebwfvQdMdr96qfQXPdY4Gz2u%2Bhq356L24QZYMvJ&X-Amz-Signature=8e769bb68914df28117026768f20fa2ed8375fb675aa06e77370cb7d693e3603&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7P2R37%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW4INXoiuCksFcz6KpBq%2F0%2Bs8s3VWBpEEIODl%2F0pE6AiEA%2BT44XithaQj6PgFyPR9jzps%2F3oKpzSsKheYnYxIXjvQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMRS4dUmusGigQI4SrcA1yjlP17Z1GCQ2xZfBu3SFonuOUilH9ncCEjYpKV1v%2FrwqMCdBW73FLJaQ6mbWxJXzmXfG4KZyx9yWoo4qhyiYhGJiDLRGAACYfjHXnDJs%2FpgLISBmhUpxkRl2h7IglrXHNIRiLwkzAnkRscEbGtnqrSWSCZGAcSDLnxovlc6WliAKvzaxfmt96iA8cNIa1RwhZqZQ3LtVop7ImO%2FnUnHdvJZ2tOL5pqxrojUaALPKAlb7RJVzYCCUVJ2Otp4FF7Za27i5aenYsAH5kmx1gXhYFSPyt%2FbXA%2Blg0o6XM9faoa1IY5DJCvWo1ynmwBIqCGcxJnz7mKPldA40QNDaMg7YN4apIhrgxM9w5KdwQenZSRRfaI%2Fw9ojdVdW%2BsAskfpUfxL4%2Blf7pHAJ18wALk0%2Fwvxw4EtpWWzGlayfAworOMdLHP0a4H2ybO94YBSjCF3hqswKuvByLkhbJzcq02JzSbwoinBxk9oNVcO1Hh6Mn%2Bq4QJJVC3VPuWINIZAsAfFIeUemfLDRyGr6MWck6CSjnyvsGDxUUrl2yNpYrIDqpwDNzt2HWH9A%2Bq5gPqbBFfqpveKcjKPbIiR9SE4CnZaOWJzF1P4C9Ajdms8B1ys6xGAgA5CeSrExzkPZbjHML7bl74GOqUBToQcggDgrO9hvzUVDX2wsjr3LWqvTaAqlOTmul6vjVjN%2FZFLwWxmqULa%2Fvops06bCzkBfqD3p%2FU6hPPocoUwyT%2BKwpIcDvNqqlRP9AgDHLzRaQU%2F55LCrh%2Fw%2FDluZsmgBqODOKeGlDTLzvna1gP%2BbbPWA%2Fh671UXQMuty3SNjRxgLc8mrjV7lebwfvQdMdr96qfQXPdY4Gz2u%2Bhq356L24QZYMvJ&X-Amz-Signature=dd02e5a4551b6a8a9fafbdac2cf95e3764ff1a450b4d4198e323185e0259c3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7P2R37%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW4INXoiuCksFcz6KpBq%2F0%2Bs8s3VWBpEEIODl%2F0pE6AiEA%2BT44XithaQj6PgFyPR9jzps%2F3oKpzSsKheYnYxIXjvQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMRS4dUmusGigQI4SrcA1yjlP17Z1GCQ2xZfBu3SFonuOUilH9ncCEjYpKV1v%2FrwqMCdBW73FLJaQ6mbWxJXzmXfG4KZyx9yWoo4qhyiYhGJiDLRGAACYfjHXnDJs%2FpgLISBmhUpxkRl2h7IglrXHNIRiLwkzAnkRscEbGtnqrSWSCZGAcSDLnxovlc6WliAKvzaxfmt96iA8cNIa1RwhZqZQ3LtVop7ImO%2FnUnHdvJZ2tOL5pqxrojUaALPKAlb7RJVzYCCUVJ2Otp4FF7Za27i5aenYsAH5kmx1gXhYFSPyt%2FbXA%2Blg0o6XM9faoa1IY5DJCvWo1ynmwBIqCGcxJnz7mKPldA40QNDaMg7YN4apIhrgxM9w5KdwQenZSRRfaI%2Fw9ojdVdW%2BsAskfpUfxL4%2Blf7pHAJ18wALk0%2Fwvxw4EtpWWzGlayfAworOMdLHP0a4H2ybO94YBSjCF3hqswKuvByLkhbJzcq02JzSbwoinBxk9oNVcO1Hh6Mn%2Bq4QJJVC3VPuWINIZAsAfFIeUemfLDRyGr6MWck6CSjnyvsGDxUUrl2yNpYrIDqpwDNzt2HWH9A%2Bq5gPqbBFfqpveKcjKPbIiR9SE4CnZaOWJzF1P4C9Ajdms8B1ys6xGAgA5CeSrExzkPZbjHML7bl74GOqUBToQcggDgrO9hvzUVDX2wsjr3LWqvTaAqlOTmul6vjVjN%2FZFLwWxmqULa%2Fvops06bCzkBfqD3p%2FU6hPPocoUwyT%2BKwpIcDvNqqlRP9AgDHLzRaQU%2F55LCrh%2Fw%2FDluZsmgBqODOKeGlDTLzvna1gP%2BbbPWA%2Fh671UXQMuty3SNjRxgLc8mrjV7lebwfvQdMdr96qfQXPdY4Gz2u%2Bhq356L24QZYMvJ&X-Amz-Signature=44782c23033dd5015a8409aac19c0a914dee52d27732d3d569ffbb949bb2ac66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7P2R37%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW4INXoiuCksFcz6KpBq%2F0%2Bs8s3VWBpEEIODl%2F0pE6AiEA%2BT44XithaQj6PgFyPR9jzps%2F3oKpzSsKheYnYxIXjvQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMRS4dUmusGigQI4SrcA1yjlP17Z1GCQ2xZfBu3SFonuOUilH9ncCEjYpKV1v%2FrwqMCdBW73FLJaQ6mbWxJXzmXfG4KZyx9yWoo4qhyiYhGJiDLRGAACYfjHXnDJs%2FpgLISBmhUpxkRl2h7IglrXHNIRiLwkzAnkRscEbGtnqrSWSCZGAcSDLnxovlc6WliAKvzaxfmt96iA8cNIa1RwhZqZQ3LtVop7ImO%2FnUnHdvJZ2tOL5pqxrojUaALPKAlb7RJVzYCCUVJ2Otp4FF7Za27i5aenYsAH5kmx1gXhYFSPyt%2FbXA%2Blg0o6XM9faoa1IY5DJCvWo1ynmwBIqCGcxJnz7mKPldA40QNDaMg7YN4apIhrgxM9w5KdwQenZSRRfaI%2Fw9ojdVdW%2BsAskfpUfxL4%2Blf7pHAJ18wALk0%2Fwvxw4EtpWWzGlayfAworOMdLHP0a4H2ybO94YBSjCF3hqswKuvByLkhbJzcq02JzSbwoinBxk9oNVcO1Hh6Mn%2Bq4QJJVC3VPuWINIZAsAfFIeUemfLDRyGr6MWck6CSjnyvsGDxUUrl2yNpYrIDqpwDNzt2HWH9A%2Bq5gPqbBFfqpveKcjKPbIiR9SE4CnZaOWJzF1P4C9Ajdms8B1ys6xGAgA5CeSrExzkPZbjHML7bl74GOqUBToQcggDgrO9hvzUVDX2wsjr3LWqvTaAqlOTmul6vjVjN%2FZFLwWxmqULa%2Fvops06bCzkBfqD3p%2FU6hPPocoUwyT%2BKwpIcDvNqqlRP9AgDHLzRaQU%2F55LCrh%2Fw%2FDluZsmgBqODOKeGlDTLzvna1gP%2BbbPWA%2Fh671UXQMuty3SNjRxgLc8mrjV7lebwfvQdMdr96qfQXPdY4Gz2u%2Bhq356L24QZYMvJ&X-Amz-Signature=e2e5d1345184d133ff21d079f662c2cb8417cb60e46fd7c887e637960b196cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7P2R37%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVW4INXoiuCksFcz6KpBq%2F0%2Bs8s3VWBpEEIODl%2F0pE6AiEA%2BT44XithaQj6PgFyPR9jzps%2F3oKpzSsKheYnYxIXjvQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMRS4dUmusGigQI4SrcA1yjlP17Z1GCQ2xZfBu3SFonuOUilH9ncCEjYpKV1v%2FrwqMCdBW73FLJaQ6mbWxJXzmXfG4KZyx9yWoo4qhyiYhGJiDLRGAACYfjHXnDJs%2FpgLISBmhUpxkRl2h7IglrXHNIRiLwkzAnkRscEbGtnqrSWSCZGAcSDLnxovlc6WliAKvzaxfmt96iA8cNIa1RwhZqZQ3LtVop7ImO%2FnUnHdvJZ2tOL5pqxrojUaALPKAlb7RJVzYCCUVJ2Otp4FF7Za27i5aenYsAH5kmx1gXhYFSPyt%2FbXA%2Blg0o6XM9faoa1IY5DJCvWo1ynmwBIqCGcxJnz7mKPldA40QNDaMg7YN4apIhrgxM9w5KdwQenZSRRfaI%2Fw9ojdVdW%2BsAskfpUfxL4%2Blf7pHAJ18wALk0%2Fwvxw4EtpWWzGlayfAworOMdLHP0a4H2ybO94YBSjCF3hqswKuvByLkhbJzcq02JzSbwoinBxk9oNVcO1Hh6Mn%2Bq4QJJVC3VPuWINIZAsAfFIeUemfLDRyGr6MWck6CSjnyvsGDxUUrl2yNpYrIDqpwDNzt2HWH9A%2Bq5gPqbBFfqpveKcjKPbIiR9SE4CnZaOWJzF1P4C9Ajdms8B1ys6xGAgA5CeSrExzkPZbjHML7bl74GOqUBToQcggDgrO9hvzUVDX2wsjr3LWqvTaAqlOTmul6vjVjN%2FZFLwWxmqULa%2Fvops06bCzkBfqD3p%2FU6hPPocoUwyT%2BKwpIcDvNqqlRP9AgDHLzRaQU%2F55LCrh%2Fw%2FDluZsmgBqODOKeGlDTLzvna1gP%2BbbPWA%2Fh671UXQMuty3SNjRxgLc8mrjV7lebwfvQdMdr96qfQXPdY4Gz2u%2Bhq356L24QZYMvJ&X-Amz-Signature=703092773c464d4d3b2daa6ebd4f66c93bf2e9340390329795f0e23bd2d1bf40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
