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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQKS5Z5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ykmIiq7Jfwqr4CNxeFqz%2FG9Q2w8i1t77E56NjK3eOgIgaUyt7aR1PhQ36gyjFRBl%2FrUbJZ2k2wclS0pgsIGhmPsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR8nMSp3aVM4tIo7ircAwGIRBuc%2BT7%2Bw7Ryuej4GGKcaxt8TGEjFhlGvIuTBNEJG4pjKqZx12e2eILButBl0jYAYJdc8BQt46cNzt9lX%2BIgR0xzkS0Vh6Qt7NPtG1C8eGhlbURL9Vhdfp%2BFx8PWij2OT3h74rzNpV6EeYHdi%2Fo7QKy7HG2LTj6sbv7NbeOdeCIiTKur4D5gEzrdUP9XTputNW0wdv0%2FhxIlhgmC%2FnX3LtjXYlZL6j7r7Nom5ulHj9kUTYiJClpA4W51LKX6%2FHVP7zIm1vFlm2382EinFQVZ01FZkSZYLJEM90YcMb9hqoUwAZC%2Bh9o7ZeP6dBEknHxBkeM%2F4hksUXGFMpFnFfJjAMMAASmYNnyiwShWOWLWReVUJwH%2Bva5l1sKvj83ILuvpxxzN9v%2FucIN1yobZGXgjQxzeqM%2BhAYbzVV%2FLQI3Qz0JiaPYIBybm0fZaitTiYKJpueaVfaydc2wKMRsooX7volZzXpj1BrymvMCcdQcvl7uhei%2FMASpUhfScrlvYs2SxZz9BmYqIOCeLeEBawN4FD2ZuqGaeiOnN5FSt%2BZImm38S2Ax1FlNQ3nTYkXKld8nyU0E%2BdS7%2Fd9h%2FXch14mumwambLAUvjsfyaj%2B3x1CHXj1CGCcZHSMHf6aGMOftmMIGOqUBiufMYhIRuxxNpms%2BBRyqUQlKasHJkY8paH5X0fj7CIPZtPZ5w8lvYxvBKHbjcnPNJWvNR9X7%2BbIJhQPCHTHVVTi2kHL03LCUTV8pyuiAPg5xWpjsZmAWdzJKdyzCimYpeucOUc%2BYq%2BXGc2Rvarki%2FwdSl04HPFQFtgA6wuS0%2BACjFITUejPYBYDb8cXONdVnU432oFGRYLELPjGJ3Q2MHCfiEqqK&X-Amz-Signature=acd028cde95f5863a39844aaaffdf7b71bd18b6019ece9b4783f577fb957a270&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQKS5Z5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ykmIiq7Jfwqr4CNxeFqz%2FG9Q2w8i1t77E56NjK3eOgIgaUyt7aR1PhQ36gyjFRBl%2FrUbJZ2k2wclS0pgsIGhmPsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR8nMSp3aVM4tIo7ircAwGIRBuc%2BT7%2Bw7Ryuej4GGKcaxt8TGEjFhlGvIuTBNEJG4pjKqZx12e2eILButBl0jYAYJdc8BQt46cNzt9lX%2BIgR0xzkS0Vh6Qt7NPtG1C8eGhlbURL9Vhdfp%2BFx8PWij2OT3h74rzNpV6EeYHdi%2Fo7QKy7HG2LTj6sbv7NbeOdeCIiTKur4D5gEzrdUP9XTputNW0wdv0%2FhxIlhgmC%2FnX3LtjXYlZL6j7r7Nom5ulHj9kUTYiJClpA4W51LKX6%2FHVP7zIm1vFlm2382EinFQVZ01FZkSZYLJEM90YcMb9hqoUwAZC%2Bh9o7ZeP6dBEknHxBkeM%2F4hksUXGFMpFnFfJjAMMAASmYNnyiwShWOWLWReVUJwH%2Bva5l1sKvj83ILuvpxxzN9v%2FucIN1yobZGXgjQxzeqM%2BhAYbzVV%2FLQI3Qz0JiaPYIBybm0fZaitTiYKJpueaVfaydc2wKMRsooX7volZzXpj1BrymvMCcdQcvl7uhei%2FMASpUhfScrlvYs2SxZz9BmYqIOCeLeEBawN4FD2ZuqGaeiOnN5FSt%2BZImm38S2Ax1FlNQ3nTYkXKld8nyU0E%2BdS7%2Fd9h%2FXch14mumwambLAUvjsfyaj%2B3x1CHXj1CGCcZHSMHf6aGMOftmMIGOqUBiufMYhIRuxxNpms%2BBRyqUQlKasHJkY8paH5X0fj7CIPZtPZ5w8lvYxvBKHbjcnPNJWvNR9X7%2BbIJhQPCHTHVVTi2kHL03LCUTV8pyuiAPg5xWpjsZmAWdzJKdyzCimYpeucOUc%2BYq%2BXGc2Rvarki%2FwdSl04HPFQFtgA6wuS0%2BACjFITUejPYBYDb8cXONdVnU432oFGRYLELPjGJ3Q2MHCfiEqqK&X-Amz-Signature=9a6a1880356222562ed42625786f876fdb1fe0eb08c1e3f9ff861c55bdc66200&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQKS5Z5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ykmIiq7Jfwqr4CNxeFqz%2FG9Q2w8i1t77E56NjK3eOgIgaUyt7aR1PhQ36gyjFRBl%2FrUbJZ2k2wclS0pgsIGhmPsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR8nMSp3aVM4tIo7ircAwGIRBuc%2BT7%2Bw7Ryuej4GGKcaxt8TGEjFhlGvIuTBNEJG4pjKqZx12e2eILButBl0jYAYJdc8BQt46cNzt9lX%2BIgR0xzkS0Vh6Qt7NPtG1C8eGhlbURL9Vhdfp%2BFx8PWij2OT3h74rzNpV6EeYHdi%2Fo7QKy7HG2LTj6sbv7NbeOdeCIiTKur4D5gEzrdUP9XTputNW0wdv0%2FhxIlhgmC%2FnX3LtjXYlZL6j7r7Nom5ulHj9kUTYiJClpA4W51LKX6%2FHVP7zIm1vFlm2382EinFQVZ01FZkSZYLJEM90YcMb9hqoUwAZC%2Bh9o7ZeP6dBEknHxBkeM%2F4hksUXGFMpFnFfJjAMMAASmYNnyiwShWOWLWReVUJwH%2Bva5l1sKvj83ILuvpxxzN9v%2FucIN1yobZGXgjQxzeqM%2BhAYbzVV%2FLQI3Qz0JiaPYIBybm0fZaitTiYKJpueaVfaydc2wKMRsooX7volZzXpj1BrymvMCcdQcvl7uhei%2FMASpUhfScrlvYs2SxZz9BmYqIOCeLeEBawN4FD2ZuqGaeiOnN5FSt%2BZImm38S2Ax1FlNQ3nTYkXKld8nyU0E%2BdS7%2Fd9h%2FXch14mumwambLAUvjsfyaj%2B3x1CHXj1CGCcZHSMHf6aGMOftmMIGOqUBiufMYhIRuxxNpms%2BBRyqUQlKasHJkY8paH5X0fj7CIPZtPZ5w8lvYxvBKHbjcnPNJWvNR9X7%2BbIJhQPCHTHVVTi2kHL03LCUTV8pyuiAPg5xWpjsZmAWdzJKdyzCimYpeucOUc%2BYq%2BXGc2Rvarki%2FwdSl04HPFQFtgA6wuS0%2BACjFITUejPYBYDb8cXONdVnU432oFGRYLELPjGJ3Q2MHCfiEqqK&X-Amz-Signature=08e2c10ffa89e3b373bbd3bf252fdba3de4e1cceb5493d76f0cfeba5caf2d8f6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQKS5Z5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ykmIiq7Jfwqr4CNxeFqz%2FG9Q2w8i1t77E56NjK3eOgIgaUyt7aR1PhQ36gyjFRBl%2FrUbJZ2k2wclS0pgsIGhmPsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR8nMSp3aVM4tIo7ircAwGIRBuc%2BT7%2Bw7Ryuej4GGKcaxt8TGEjFhlGvIuTBNEJG4pjKqZx12e2eILButBl0jYAYJdc8BQt46cNzt9lX%2BIgR0xzkS0Vh6Qt7NPtG1C8eGhlbURL9Vhdfp%2BFx8PWij2OT3h74rzNpV6EeYHdi%2Fo7QKy7HG2LTj6sbv7NbeOdeCIiTKur4D5gEzrdUP9XTputNW0wdv0%2FhxIlhgmC%2FnX3LtjXYlZL6j7r7Nom5ulHj9kUTYiJClpA4W51LKX6%2FHVP7zIm1vFlm2382EinFQVZ01FZkSZYLJEM90YcMb9hqoUwAZC%2Bh9o7ZeP6dBEknHxBkeM%2F4hksUXGFMpFnFfJjAMMAASmYNnyiwShWOWLWReVUJwH%2Bva5l1sKvj83ILuvpxxzN9v%2FucIN1yobZGXgjQxzeqM%2BhAYbzVV%2FLQI3Qz0JiaPYIBybm0fZaitTiYKJpueaVfaydc2wKMRsooX7volZzXpj1BrymvMCcdQcvl7uhei%2FMASpUhfScrlvYs2SxZz9BmYqIOCeLeEBawN4FD2ZuqGaeiOnN5FSt%2BZImm38S2Ax1FlNQ3nTYkXKld8nyU0E%2BdS7%2Fd9h%2FXch14mumwambLAUvjsfyaj%2B3x1CHXj1CGCcZHSMHf6aGMOftmMIGOqUBiufMYhIRuxxNpms%2BBRyqUQlKasHJkY8paH5X0fj7CIPZtPZ5w8lvYxvBKHbjcnPNJWvNR9X7%2BbIJhQPCHTHVVTi2kHL03LCUTV8pyuiAPg5xWpjsZmAWdzJKdyzCimYpeucOUc%2BYq%2BXGc2Rvarki%2FwdSl04HPFQFtgA6wuS0%2BACjFITUejPYBYDb8cXONdVnU432oFGRYLELPjGJ3Q2MHCfiEqqK&X-Amz-Signature=5377ddb0e49fb239dc3a2d46e884457ca28a75170e75c06e4b1bd2175c774abc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQKS5Z5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ykmIiq7Jfwqr4CNxeFqz%2FG9Q2w8i1t77E56NjK3eOgIgaUyt7aR1PhQ36gyjFRBl%2FrUbJZ2k2wclS0pgsIGhmPsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR8nMSp3aVM4tIo7ircAwGIRBuc%2BT7%2Bw7Ryuej4GGKcaxt8TGEjFhlGvIuTBNEJG4pjKqZx12e2eILButBl0jYAYJdc8BQt46cNzt9lX%2BIgR0xzkS0Vh6Qt7NPtG1C8eGhlbURL9Vhdfp%2BFx8PWij2OT3h74rzNpV6EeYHdi%2Fo7QKy7HG2LTj6sbv7NbeOdeCIiTKur4D5gEzrdUP9XTputNW0wdv0%2FhxIlhgmC%2FnX3LtjXYlZL6j7r7Nom5ulHj9kUTYiJClpA4W51LKX6%2FHVP7zIm1vFlm2382EinFQVZ01FZkSZYLJEM90YcMb9hqoUwAZC%2Bh9o7ZeP6dBEknHxBkeM%2F4hksUXGFMpFnFfJjAMMAASmYNnyiwShWOWLWReVUJwH%2Bva5l1sKvj83ILuvpxxzN9v%2FucIN1yobZGXgjQxzeqM%2BhAYbzVV%2FLQI3Qz0JiaPYIBybm0fZaitTiYKJpueaVfaydc2wKMRsooX7volZzXpj1BrymvMCcdQcvl7uhei%2FMASpUhfScrlvYs2SxZz9BmYqIOCeLeEBawN4FD2ZuqGaeiOnN5FSt%2BZImm38S2Ax1FlNQ3nTYkXKld8nyU0E%2BdS7%2Fd9h%2FXch14mumwambLAUvjsfyaj%2B3x1CHXj1CGCcZHSMHf6aGMOftmMIGOqUBiufMYhIRuxxNpms%2BBRyqUQlKasHJkY8paH5X0fj7CIPZtPZ5w8lvYxvBKHbjcnPNJWvNR9X7%2BbIJhQPCHTHVVTi2kHL03LCUTV8pyuiAPg5xWpjsZmAWdzJKdyzCimYpeucOUc%2BYq%2BXGc2Rvarki%2FwdSl04HPFQFtgA6wuS0%2BACjFITUejPYBYDb8cXONdVnU432oFGRYLELPjGJ3Q2MHCfiEqqK&X-Amz-Signature=5dc8b32632c9c02699aec17b9cb1a6face5293528e0964015c4b75e14002ac0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQKS5Z5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ykmIiq7Jfwqr4CNxeFqz%2FG9Q2w8i1t77E56NjK3eOgIgaUyt7aR1PhQ36gyjFRBl%2FrUbJZ2k2wclS0pgsIGhmPsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR8nMSp3aVM4tIo7ircAwGIRBuc%2BT7%2Bw7Ryuej4GGKcaxt8TGEjFhlGvIuTBNEJG4pjKqZx12e2eILButBl0jYAYJdc8BQt46cNzt9lX%2BIgR0xzkS0Vh6Qt7NPtG1C8eGhlbURL9Vhdfp%2BFx8PWij2OT3h74rzNpV6EeYHdi%2Fo7QKy7HG2LTj6sbv7NbeOdeCIiTKur4D5gEzrdUP9XTputNW0wdv0%2FhxIlhgmC%2FnX3LtjXYlZL6j7r7Nom5ulHj9kUTYiJClpA4W51LKX6%2FHVP7zIm1vFlm2382EinFQVZ01FZkSZYLJEM90YcMb9hqoUwAZC%2Bh9o7ZeP6dBEknHxBkeM%2F4hksUXGFMpFnFfJjAMMAASmYNnyiwShWOWLWReVUJwH%2Bva5l1sKvj83ILuvpxxzN9v%2FucIN1yobZGXgjQxzeqM%2BhAYbzVV%2FLQI3Qz0JiaPYIBybm0fZaitTiYKJpueaVfaydc2wKMRsooX7volZzXpj1BrymvMCcdQcvl7uhei%2FMASpUhfScrlvYs2SxZz9BmYqIOCeLeEBawN4FD2ZuqGaeiOnN5FSt%2BZImm38S2Ax1FlNQ3nTYkXKld8nyU0E%2BdS7%2Fd9h%2FXch14mumwambLAUvjsfyaj%2B3x1CHXj1CGCcZHSMHf6aGMOftmMIGOqUBiufMYhIRuxxNpms%2BBRyqUQlKasHJkY8paH5X0fj7CIPZtPZ5w8lvYxvBKHbjcnPNJWvNR9X7%2BbIJhQPCHTHVVTi2kHL03LCUTV8pyuiAPg5xWpjsZmAWdzJKdyzCimYpeucOUc%2BYq%2BXGc2Rvarki%2FwdSl04HPFQFtgA6wuS0%2BACjFITUejPYBYDb8cXONdVnU432oFGRYLELPjGJ3Q2MHCfiEqqK&X-Amz-Signature=331a5d218a410f2968f0fe1dab982848760878b22c19597e1babe41c3c0d8a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQKS5Z5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ykmIiq7Jfwqr4CNxeFqz%2FG9Q2w8i1t77E56NjK3eOgIgaUyt7aR1PhQ36gyjFRBl%2FrUbJZ2k2wclS0pgsIGhmPsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR8nMSp3aVM4tIo7ircAwGIRBuc%2BT7%2Bw7Ryuej4GGKcaxt8TGEjFhlGvIuTBNEJG4pjKqZx12e2eILButBl0jYAYJdc8BQt46cNzt9lX%2BIgR0xzkS0Vh6Qt7NPtG1C8eGhlbURL9Vhdfp%2BFx8PWij2OT3h74rzNpV6EeYHdi%2Fo7QKy7HG2LTj6sbv7NbeOdeCIiTKur4D5gEzrdUP9XTputNW0wdv0%2FhxIlhgmC%2FnX3LtjXYlZL6j7r7Nom5ulHj9kUTYiJClpA4W51LKX6%2FHVP7zIm1vFlm2382EinFQVZ01FZkSZYLJEM90YcMb9hqoUwAZC%2Bh9o7ZeP6dBEknHxBkeM%2F4hksUXGFMpFnFfJjAMMAASmYNnyiwShWOWLWReVUJwH%2Bva5l1sKvj83ILuvpxxzN9v%2FucIN1yobZGXgjQxzeqM%2BhAYbzVV%2FLQI3Qz0JiaPYIBybm0fZaitTiYKJpueaVfaydc2wKMRsooX7volZzXpj1BrymvMCcdQcvl7uhei%2FMASpUhfScrlvYs2SxZz9BmYqIOCeLeEBawN4FD2ZuqGaeiOnN5FSt%2BZImm38S2Ax1FlNQ3nTYkXKld8nyU0E%2BdS7%2Fd9h%2FXch14mumwambLAUvjsfyaj%2B3x1CHXj1CGCcZHSMHf6aGMOftmMIGOqUBiufMYhIRuxxNpms%2BBRyqUQlKasHJkY8paH5X0fj7CIPZtPZ5w8lvYxvBKHbjcnPNJWvNR9X7%2BbIJhQPCHTHVVTi2kHL03LCUTV8pyuiAPg5xWpjsZmAWdzJKdyzCimYpeucOUc%2BYq%2BXGc2Rvarki%2FwdSl04HPFQFtgA6wuS0%2BACjFITUejPYBYDb8cXONdVnU432oFGRYLELPjGJ3Q2MHCfiEqqK&X-Amz-Signature=509a3f1dbe4f3cc8cddc21c58deafcb58f7dc7fc93aa40943fe78de894920697&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQKS5Z5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ykmIiq7Jfwqr4CNxeFqz%2FG9Q2w8i1t77E56NjK3eOgIgaUyt7aR1PhQ36gyjFRBl%2FrUbJZ2k2wclS0pgsIGhmPsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDR8nMSp3aVM4tIo7ircAwGIRBuc%2BT7%2Bw7Ryuej4GGKcaxt8TGEjFhlGvIuTBNEJG4pjKqZx12e2eILButBl0jYAYJdc8BQt46cNzt9lX%2BIgR0xzkS0Vh6Qt7NPtG1C8eGhlbURL9Vhdfp%2BFx8PWij2OT3h74rzNpV6EeYHdi%2Fo7QKy7HG2LTj6sbv7NbeOdeCIiTKur4D5gEzrdUP9XTputNW0wdv0%2FhxIlhgmC%2FnX3LtjXYlZL6j7r7Nom5ulHj9kUTYiJClpA4W51LKX6%2FHVP7zIm1vFlm2382EinFQVZ01FZkSZYLJEM90YcMb9hqoUwAZC%2Bh9o7ZeP6dBEknHxBkeM%2F4hksUXGFMpFnFfJjAMMAASmYNnyiwShWOWLWReVUJwH%2Bva5l1sKvj83ILuvpxxzN9v%2FucIN1yobZGXgjQxzeqM%2BhAYbzVV%2FLQI3Qz0JiaPYIBybm0fZaitTiYKJpueaVfaydc2wKMRsooX7volZzXpj1BrymvMCcdQcvl7uhei%2FMASpUhfScrlvYs2SxZz9BmYqIOCeLeEBawN4FD2ZuqGaeiOnN5FSt%2BZImm38S2Ax1FlNQ3nTYkXKld8nyU0E%2BdS7%2Fd9h%2FXch14mumwambLAUvjsfyaj%2B3x1CHXj1CGCcZHSMHf6aGMOftmMIGOqUBiufMYhIRuxxNpms%2BBRyqUQlKasHJkY8paH5X0fj7CIPZtPZ5w8lvYxvBKHbjcnPNJWvNR9X7%2BbIJhQPCHTHVVTi2kHL03LCUTV8pyuiAPg5xWpjsZmAWdzJKdyzCimYpeucOUc%2BYq%2BXGc2Rvarki%2FwdSl04HPFQFtgA6wuS0%2BACjFITUejPYBYDb8cXONdVnU432oFGRYLELPjGJ3Q2MHCfiEqqK&X-Amz-Signature=f85c1897758120121ce9c70970c2dea27267873bbfdba90b99ea7aa5444950c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
