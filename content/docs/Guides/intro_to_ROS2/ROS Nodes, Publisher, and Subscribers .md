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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2YUZ52%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC4T7orp4gdNTNO57ABWmkCK9oNvLw8aQ%2FK%2B1PODyf1gIgdvYbAH09iGaCMiO7ebxxEltWhtS186JgCHfaBe3wYVYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDE8a414s%2FVwdku1cUyrcAwyTnaDoqAXgnLcepcBAxpbRPvOtYJhLgI2WDj%2BhA1ECSlm0hUDMLKwwTnXG7gbYl29tLzvmZjOFZoyYcHkKw52VryBmeY3qBqJ7IgynIM9kgr0haln17qr2PbNBaQjRqWfJV6GY6S9oukqukJ2BYkcj5SZv026CzcoPf3cYXTdb2G3skYIsLw63YlbZg2nfXxBxNNYS5NGWabhguwVLd5hpDKMBuLYBufD%2FLJa2sF704STJh7LDT35T5avXz%2Bh6VXA9%2FkaNcnHq7RM4sDJKFRtuXUStix9uFksAPjNDKXiTljPzUVaSdKaEyTuYoC6PDSBmEvnwy4CEzNYRm1bh%2F9OUqe%2FvhgO4c4zaslukbpGBWAdoOf%2FWiXFYAGFv7b2t6AU6vRH8VOVImj2yG1jjzjPPYPwgYssM9hVGcLEuLEjmrFnsDk0IVQ2PazySxwJXXBa61AdzCpIxv5it3b3QlHlDmQWVgplHmFgf1ADpMpRXhmH61gBm0GygBAcyFYoD3RyTG94%2F3BfNOJCueIIEbibs3DrHjav4QcTn%2BvuVUDZ7if5KLIkyzC5GkYtHe16L95aTIVTAdH5vq0BTkhkreGuZim1eUF%2FNYGq38XwhhtcmAxWCBsIU2YGYvjGNMPbBt70GOqUBtbmb2t3OXwRAIrlqJnYTNT5aMYc3Izz4z7uM7ouA5d3nFSlODOiV0zOWvvMIWoxW3bSV1%2BczkPn2A1BzkJUPPoUwaPFj9qR4tcrNXD0%2BlPqpwqIipgruD9GoBw8h2%2F3%2FEgqH3C7%2Bf6J8a%2Ff%2BCx9nKg3uDuDNvK5uwmjmo%2Fsfek7nXLkl9gBvkC75t%2BgrQPmPrjY%2FLzbPgXxsbEDG5ZP91CVl90tU&X-Amz-Signature=abe42e45f206873eda7d9c23ba41d251acfc43f970ffd2618bf9abe1c11aa9de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2YUZ52%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC4T7orp4gdNTNO57ABWmkCK9oNvLw8aQ%2FK%2B1PODyf1gIgdvYbAH09iGaCMiO7ebxxEltWhtS186JgCHfaBe3wYVYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDE8a414s%2FVwdku1cUyrcAwyTnaDoqAXgnLcepcBAxpbRPvOtYJhLgI2WDj%2BhA1ECSlm0hUDMLKwwTnXG7gbYl29tLzvmZjOFZoyYcHkKw52VryBmeY3qBqJ7IgynIM9kgr0haln17qr2PbNBaQjRqWfJV6GY6S9oukqukJ2BYkcj5SZv026CzcoPf3cYXTdb2G3skYIsLw63YlbZg2nfXxBxNNYS5NGWabhguwVLd5hpDKMBuLYBufD%2FLJa2sF704STJh7LDT35T5avXz%2Bh6VXA9%2FkaNcnHq7RM4sDJKFRtuXUStix9uFksAPjNDKXiTljPzUVaSdKaEyTuYoC6PDSBmEvnwy4CEzNYRm1bh%2F9OUqe%2FvhgO4c4zaslukbpGBWAdoOf%2FWiXFYAGFv7b2t6AU6vRH8VOVImj2yG1jjzjPPYPwgYssM9hVGcLEuLEjmrFnsDk0IVQ2PazySxwJXXBa61AdzCpIxv5it3b3QlHlDmQWVgplHmFgf1ADpMpRXhmH61gBm0GygBAcyFYoD3RyTG94%2F3BfNOJCueIIEbibs3DrHjav4QcTn%2BvuVUDZ7if5KLIkyzC5GkYtHe16L95aTIVTAdH5vq0BTkhkreGuZim1eUF%2FNYGq38XwhhtcmAxWCBsIU2YGYvjGNMPbBt70GOqUBtbmb2t3OXwRAIrlqJnYTNT5aMYc3Izz4z7uM7ouA5d3nFSlODOiV0zOWvvMIWoxW3bSV1%2BczkPn2A1BzkJUPPoUwaPFj9qR4tcrNXD0%2BlPqpwqIipgruD9GoBw8h2%2F3%2FEgqH3C7%2Bf6J8a%2Ff%2BCx9nKg3uDuDNvK5uwmjmo%2Fsfek7nXLkl9gBvkC75t%2BgrQPmPrjY%2FLzbPgXxsbEDG5ZP91CVl90tU&X-Amz-Signature=48ec1e473f0e8fe6bec1bcbfd95dff114491f52623b11d6a7454326adb2323d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2YUZ52%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC4T7orp4gdNTNO57ABWmkCK9oNvLw8aQ%2FK%2B1PODyf1gIgdvYbAH09iGaCMiO7ebxxEltWhtS186JgCHfaBe3wYVYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDE8a414s%2FVwdku1cUyrcAwyTnaDoqAXgnLcepcBAxpbRPvOtYJhLgI2WDj%2BhA1ECSlm0hUDMLKwwTnXG7gbYl29tLzvmZjOFZoyYcHkKw52VryBmeY3qBqJ7IgynIM9kgr0haln17qr2PbNBaQjRqWfJV6GY6S9oukqukJ2BYkcj5SZv026CzcoPf3cYXTdb2G3skYIsLw63YlbZg2nfXxBxNNYS5NGWabhguwVLd5hpDKMBuLYBufD%2FLJa2sF704STJh7LDT35T5avXz%2Bh6VXA9%2FkaNcnHq7RM4sDJKFRtuXUStix9uFksAPjNDKXiTljPzUVaSdKaEyTuYoC6PDSBmEvnwy4CEzNYRm1bh%2F9OUqe%2FvhgO4c4zaslukbpGBWAdoOf%2FWiXFYAGFv7b2t6AU6vRH8VOVImj2yG1jjzjPPYPwgYssM9hVGcLEuLEjmrFnsDk0IVQ2PazySxwJXXBa61AdzCpIxv5it3b3QlHlDmQWVgplHmFgf1ADpMpRXhmH61gBm0GygBAcyFYoD3RyTG94%2F3BfNOJCueIIEbibs3DrHjav4QcTn%2BvuVUDZ7if5KLIkyzC5GkYtHe16L95aTIVTAdH5vq0BTkhkreGuZim1eUF%2FNYGq38XwhhtcmAxWCBsIU2YGYvjGNMPbBt70GOqUBtbmb2t3OXwRAIrlqJnYTNT5aMYc3Izz4z7uM7ouA5d3nFSlODOiV0zOWvvMIWoxW3bSV1%2BczkPn2A1BzkJUPPoUwaPFj9qR4tcrNXD0%2BlPqpwqIipgruD9GoBw8h2%2F3%2FEgqH3C7%2Bf6J8a%2Ff%2BCx9nKg3uDuDNvK5uwmjmo%2Fsfek7nXLkl9gBvkC75t%2BgrQPmPrjY%2FLzbPgXxsbEDG5ZP91CVl90tU&X-Amz-Signature=c421ff1d9334dc8d5d5df1c8262606f1b34ab2d330c7b0388272dc90ccf5d26c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2YUZ52%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC4T7orp4gdNTNO57ABWmkCK9oNvLw8aQ%2FK%2B1PODyf1gIgdvYbAH09iGaCMiO7ebxxEltWhtS186JgCHfaBe3wYVYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDE8a414s%2FVwdku1cUyrcAwyTnaDoqAXgnLcepcBAxpbRPvOtYJhLgI2WDj%2BhA1ECSlm0hUDMLKwwTnXG7gbYl29tLzvmZjOFZoyYcHkKw52VryBmeY3qBqJ7IgynIM9kgr0haln17qr2PbNBaQjRqWfJV6GY6S9oukqukJ2BYkcj5SZv026CzcoPf3cYXTdb2G3skYIsLw63YlbZg2nfXxBxNNYS5NGWabhguwVLd5hpDKMBuLYBufD%2FLJa2sF704STJh7LDT35T5avXz%2Bh6VXA9%2FkaNcnHq7RM4sDJKFRtuXUStix9uFksAPjNDKXiTljPzUVaSdKaEyTuYoC6PDSBmEvnwy4CEzNYRm1bh%2F9OUqe%2FvhgO4c4zaslukbpGBWAdoOf%2FWiXFYAGFv7b2t6AU6vRH8VOVImj2yG1jjzjPPYPwgYssM9hVGcLEuLEjmrFnsDk0IVQ2PazySxwJXXBa61AdzCpIxv5it3b3QlHlDmQWVgplHmFgf1ADpMpRXhmH61gBm0GygBAcyFYoD3RyTG94%2F3BfNOJCueIIEbibs3DrHjav4QcTn%2BvuVUDZ7if5KLIkyzC5GkYtHe16L95aTIVTAdH5vq0BTkhkreGuZim1eUF%2FNYGq38XwhhtcmAxWCBsIU2YGYvjGNMPbBt70GOqUBtbmb2t3OXwRAIrlqJnYTNT5aMYc3Izz4z7uM7ouA5d3nFSlODOiV0zOWvvMIWoxW3bSV1%2BczkPn2A1BzkJUPPoUwaPFj9qR4tcrNXD0%2BlPqpwqIipgruD9GoBw8h2%2F3%2FEgqH3C7%2Bf6J8a%2Ff%2BCx9nKg3uDuDNvK5uwmjmo%2Fsfek7nXLkl9gBvkC75t%2BgrQPmPrjY%2FLzbPgXxsbEDG5ZP91CVl90tU&X-Amz-Signature=086c17a284f0aaa61bbee1e3969fcc5bf740291427c8af026e6071ca2e6af759&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2YUZ52%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC4T7orp4gdNTNO57ABWmkCK9oNvLw8aQ%2FK%2B1PODyf1gIgdvYbAH09iGaCMiO7ebxxEltWhtS186JgCHfaBe3wYVYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDE8a414s%2FVwdku1cUyrcAwyTnaDoqAXgnLcepcBAxpbRPvOtYJhLgI2WDj%2BhA1ECSlm0hUDMLKwwTnXG7gbYl29tLzvmZjOFZoyYcHkKw52VryBmeY3qBqJ7IgynIM9kgr0haln17qr2PbNBaQjRqWfJV6GY6S9oukqukJ2BYkcj5SZv026CzcoPf3cYXTdb2G3skYIsLw63YlbZg2nfXxBxNNYS5NGWabhguwVLd5hpDKMBuLYBufD%2FLJa2sF704STJh7LDT35T5avXz%2Bh6VXA9%2FkaNcnHq7RM4sDJKFRtuXUStix9uFksAPjNDKXiTljPzUVaSdKaEyTuYoC6PDSBmEvnwy4CEzNYRm1bh%2F9OUqe%2FvhgO4c4zaslukbpGBWAdoOf%2FWiXFYAGFv7b2t6AU6vRH8VOVImj2yG1jjzjPPYPwgYssM9hVGcLEuLEjmrFnsDk0IVQ2PazySxwJXXBa61AdzCpIxv5it3b3QlHlDmQWVgplHmFgf1ADpMpRXhmH61gBm0GygBAcyFYoD3RyTG94%2F3BfNOJCueIIEbibs3DrHjav4QcTn%2BvuVUDZ7if5KLIkyzC5GkYtHe16L95aTIVTAdH5vq0BTkhkreGuZim1eUF%2FNYGq38XwhhtcmAxWCBsIU2YGYvjGNMPbBt70GOqUBtbmb2t3OXwRAIrlqJnYTNT5aMYc3Izz4z7uM7ouA5d3nFSlODOiV0zOWvvMIWoxW3bSV1%2BczkPn2A1BzkJUPPoUwaPFj9qR4tcrNXD0%2BlPqpwqIipgruD9GoBw8h2%2F3%2FEgqH3C7%2Bf6J8a%2Ff%2BCx9nKg3uDuDNvK5uwmjmo%2Fsfek7nXLkl9gBvkC75t%2BgrQPmPrjY%2FLzbPgXxsbEDG5ZP91CVl90tU&X-Amz-Signature=6fef7bb00944d13ad55d8108dcf0d79c6a4264cef1d714bea584f4193a9cc08e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2YUZ52%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC4T7orp4gdNTNO57ABWmkCK9oNvLw8aQ%2FK%2B1PODyf1gIgdvYbAH09iGaCMiO7ebxxEltWhtS186JgCHfaBe3wYVYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDE8a414s%2FVwdku1cUyrcAwyTnaDoqAXgnLcepcBAxpbRPvOtYJhLgI2WDj%2BhA1ECSlm0hUDMLKwwTnXG7gbYl29tLzvmZjOFZoyYcHkKw52VryBmeY3qBqJ7IgynIM9kgr0haln17qr2PbNBaQjRqWfJV6GY6S9oukqukJ2BYkcj5SZv026CzcoPf3cYXTdb2G3skYIsLw63YlbZg2nfXxBxNNYS5NGWabhguwVLd5hpDKMBuLYBufD%2FLJa2sF704STJh7LDT35T5avXz%2Bh6VXA9%2FkaNcnHq7RM4sDJKFRtuXUStix9uFksAPjNDKXiTljPzUVaSdKaEyTuYoC6PDSBmEvnwy4CEzNYRm1bh%2F9OUqe%2FvhgO4c4zaslukbpGBWAdoOf%2FWiXFYAGFv7b2t6AU6vRH8VOVImj2yG1jjzjPPYPwgYssM9hVGcLEuLEjmrFnsDk0IVQ2PazySxwJXXBa61AdzCpIxv5it3b3QlHlDmQWVgplHmFgf1ADpMpRXhmH61gBm0GygBAcyFYoD3RyTG94%2F3BfNOJCueIIEbibs3DrHjav4QcTn%2BvuVUDZ7if5KLIkyzC5GkYtHe16L95aTIVTAdH5vq0BTkhkreGuZim1eUF%2FNYGq38XwhhtcmAxWCBsIU2YGYvjGNMPbBt70GOqUBtbmb2t3OXwRAIrlqJnYTNT5aMYc3Izz4z7uM7ouA5d3nFSlODOiV0zOWvvMIWoxW3bSV1%2BczkPn2A1BzkJUPPoUwaPFj9qR4tcrNXD0%2BlPqpwqIipgruD9GoBw8h2%2F3%2FEgqH3C7%2Bf6J8a%2Ff%2BCx9nKg3uDuDNvK5uwmjmo%2Fsfek7nXLkl9gBvkC75t%2BgrQPmPrjY%2FLzbPgXxsbEDG5ZP91CVl90tU&X-Amz-Signature=a99f87564ae5a050b8dc2fa18da78c1dae702d7846ad7291462cf3ba166d9bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2YUZ52%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC4T7orp4gdNTNO57ABWmkCK9oNvLw8aQ%2FK%2B1PODyf1gIgdvYbAH09iGaCMiO7ebxxEltWhtS186JgCHfaBe3wYVYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDE8a414s%2FVwdku1cUyrcAwyTnaDoqAXgnLcepcBAxpbRPvOtYJhLgI2WDj%2BhA1ECSlm0hUDMLKwwTnXG7gbYl29tLzvmZjOFZoyYcHkKw52VryBmeY3qBqJ7IgynIM9kgr0haln17qr2PbNBaQjRqWfJV6GY6S9oukqukJ2BYkcj5SZv026CzcoPf3cYXTdb2G3skYIsLw63YlbZg2nfXxBxNNYS5NGWabhguwVLd5hpDKMBuLYBufD%2FLJa2sF704STJh7LDT35T5avXz%2Bh6VXA9%2FkaNcnHq7RM4sDJKFRtuXUStix9uFksAPjNDKXiTljPzUVaSdKaEyTuYoC6PDSBmEvnwy4CEzNYRm1bh%2F9OUqe%2FvhgO4c4zaslukbpGBWAdoOf%2FWiXFYAGFv7b2t6AU6vRH8VOVImj2yG1jjzjPPYPwgYssM9hVGcLEuLEjmrFnsDk0IVQ2PazySxwJXXBa61AdzCpIxv5it3b3QlHlDmQWVgplHmFgf1ADpMpRXhmH61gBm0GygBAcyFYoD3RyTG94%2F3BfNOJCueIIEbibs3DrHjav4QcTn%2BvuVUDZ7if5KLIkyzC5GkYtHe16L95aTIVTAdH5vq0BTkhkreGuZim1eUF%2FNYGq38XwhhtcmAxWCBsIU2YGYvjGNMPbBt70GOqUBtbmb2t3OXwRAIrlqJnYTNT5aMYc3Izz4z7uM7ouA5d3nFSlODOiV0zOWvvMIWoxW3bSV1%2BczkPn2A1BzkJUPPoUwaPFj9qR4tcrNXD0%2BlPqpwqIipgruD9GoBw8h2%2F3%2FEgqH3C7%2Bf6J8a%2Ff%2BCx9nKg3uDuDNvK5uwmjmo%2Fsfek7nXLkl9gBvkC75t%2BgrQPmPrjY%2FLzbPgXxsbEDG5ZP91CVl90tU&X-Amz-Signature=2c6cb7994915423d8ce59ad12ee41597d291280f0fccf5b0609bdc84d21c2fa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2YUZ52%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC4T7orp4gdNTNO57ABWmkCK9oNvLw8aQ%2FK%2B1PODyf1gIgdvYbAH09iGaCMiO7ebxxEltWhtS186JgCHfaBe3wYVYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDE8a414s%2FVwdku1cUyrcAwyTnaDoqAXgnLcepcBAxpbRPvOtYJhLgI2WDj%2BhA1ECSlm0hUDMLKwwTnXG7gbYl29tLzvmZjOFZoyYcHkKw52VryBmeY3qBqJ7IgynIM9kgr0haln17qr2PbNBaQjRqWfJV6GY6S9oukqukJ2BYkcj5SZv026CzcoPf3cYXTdb2G3skYIsLw63YlbZg2nfXxBxNNYS5NGWabhguwVLd5hpDKMBuLYBufD%2FLJa2sF704STJh7LDT35T5avXz%2Bh6VXA9%2FkaNcnHq7RM4sDJKFRtuXUStix9uFksAPjNDKXiTljPzUVaSdKaEyTuYoC6PDSBmEvnwy4CEzNYRm1bh%2F9OUqe%2FvhgO4c4zaslukbpGBWAdoOf%2FWiXFYAGFv7b2t6AU6vRH8VOVImj2yG1jjzjPPYPwgYssM9hVGcLEuLEjmrFnsDk0IVQ2PazySxwJXXBa61AdzCpIxv5it3b3QlHlDmQWVgplHmFgf1ADpMpRXhmH61gBm0GygBAcyFYoD3RyTG94%2F3BfNOJCueIIEbibs3DrHjav4QcTn%2BvuVUDZ7if5KLIkyzC5GkYtHe16L95aTIVTAdH5vq0BTkhkreGuZim1eUF%2FNYGq38XwhhtcmAxWCBsIU2YGYvjGNMPbBt70GOqUBtbmb2t3OXwRAIrlqJnYTNT5aMYc3Izz4z7uM7ouA5d3nFSlODOiV0zOWvvMIWoxW3bSV1%2BczkPn2A1BzkJUPPoUwaPFj9qR4tcrNXD0%2BlPqpwqIipgruD9GoBw8h2%2F3%2FEgqH3C7%2Bf6J8a%2Ff%2BCx9nKg3uDuDNvK5uwmjmo%2Fsfek7nXLkl9gBvkC75t%2BgrQPmPrjY%2FLzbPgXxsbEDG5ZP91CVl90tU&X-Amz-Signature=711e0741b538eed143f68da5b9e5069f383da5e9b6ce8182b52a647d374c894f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
