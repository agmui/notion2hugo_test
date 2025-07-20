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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCCCSNN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJMfUc9nXh%2BQLR8auy%2FdjbxSKTN6hfAn7FrM4ATD4ZGAiEAmk2e9QeBGcLmwOCcx9n1ABhCABT61ZZm%2F5RItxzwHOIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAarKKXi7%2FiBBePLZyrcA7BGJezQ9gfC66GSxAIun9x%2BAvtLB1y%2Fqp5%2BR1FRxT0oHpH%2BfwAnQxfhIxLfFPNiNMevNcF3czu7pl%2BEy84NcG1S%2Fgw8JJG32eJbg0Jvbmaxvkvu90zNqkYgWwuOsAj8EnePWlXZA3VqhwKbdfp4fGmiEDdWSxZTFWsaB2JkCr4WSOWjeSs7Pa6Zzmvm3UjCmdiMMp%2B3ReibXW86j8%2FNkieYzbW5IuA2Xne8srHiNo9RZ1UZfk2V9x1PrWqyWw952CxDShWl%2B5nSqt1Iqjqu8sHzoiv1j5AGqqZTXBsVi7rUrsVSrx3k%2FIyOOFFjSW2K7NHAonGRqZOXQmPYRC1taV9ZGvolQMtfPBHtq1VHsW7QnBVrtAVy905HkICRPVL6PTL9D6JVqtqQbGGFvkz7oKlzcPYAjhQNzk8kKacbndQ7vuZh9uHMpc%2F6OFM6u6DpBmMbkVHbn1jLKvLLL0pEJLpCLn%2BtOvHSBRkq9hN99%2B7Mi36MJ9bFrtP%2FuPd8wAXOHMVI5CaLcdx145gqyyR97HOA8zhVRYZejIsQuLbl0wNooIQ7g8eokTPSNkkLHoVi%2FM0jHzlD%2BZnur3KNgY3k9EuwORUMhaEoOBachwXO2q0F14TcSXSwWKAM1fQpMIO68sMGOqUB946kID1kQV4IJSpaCn1ZwvtZn2b%2BomcNSkfgk44LtttyC4WTniNUZmvgnjv4o74kDT9WdmEGhpSyYopt2c%2B%2BBgGoa31349DN%2F3%2F1DqqhWbiKFTlxHIxHH%2FhaiFAzj9t3Uquryp8nLtBe%2BAbduEnKad3z%2F4lHP2RHBWExeWlNMNHmzYgLE%2Fb4a8ME9rf%2FHpGGpEtvi9FMfLbw3AGOgnhL2jXSHip7&X-Amz-Signature=41cb77be2d8df7f641cd88ce463a16fac6f2255753d8513f8f45f4cca3f4ebd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCCCSNN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJMfUc9nXh%2BQLR8auy%2FdjbxSKTN6hfAn7FrM4ATD4ZGAiEAmk2e9QeBGcLmwOCcx9n1ABhCABT61ZZm%2F5RItxzwHOIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAarKKXi7%2FiBBePLZyrcA7BGJezQ9gfC66GSxAIun9x%2BAvtLB1y%2Fqp5%2BR1FRxT0oHpH%2BfwAnQxfhIxLfFPNiNMevNcF3czu7pl%2BEy84NcG1S%2Fgw8JJG32eJbg0Jvbmaxvkvu90zNqkYgWwuOsAj8EnePWlXZA3VqhwKbdfp4fGmiEDdWSxZTFWsaB2JkCr4WSOWjeSs7Pa6Zzmvm3UjCmdiMMp%2B3ReibXW86j8%2FNkieYzbW5IuA2Xne8srHiNo9RZ1UZfk2V9x1PrWqyWw952CxDShWl%2B5nSqt1Iqjqu8sHzoiv1j5AGqqZTXBsVi7rUrsVSrx3k%2FIyOOFFjSW2K7NHAonGRqZOXQmPYRC1taV9ZGvolQMtfPBHtq1VHsW7QnBVrtAVy905HkICRPVL6PTL9D6JVqtqQbGGFvkz7oKlzcPYAjhQNzk8kKacbndQ7vuZh9uHMpc%2F6OFM6u6DpBmMbkVHbn1jLKvLLL0pEJLpCLn%2BtOvHSBRkq9hN99%2B7Mi36MJ9bFrtP%2FuPd8wAXOHMVI5CaLcdx145gqyyR97HOA8zhVRYZejIsQuLbl0wNooIQ7g8eokTPSNkkLHoVi%2FM0jHzlD%2BZnur3KNgY3k9EuwORUMhaEoOBachwXO2q0F14TcSXSwWKAM1fQpMIO68sMGOqUB946kID1kQV4IJSpaCn1ZwvtZn2b%2BomcNSkfgk44LtttyC4WTniNUZmvgnjv4o74kDT9WdmEGhpSyYopt2c%2B%2BBgGoa31349DN%2F3%2F1DqqhWbiKFTlxHIxHH%2FhaiFAzj9t3Uquryp8nLtBe%2BAbduEnKad3z%2F4lHP2RHBWExeWlNMNHmzYgLE%2Fb4a8ME9rf%2FHpGGpEtvi9FMfLbw3AGOgnhL2jXSHip7&X-Amz-Signature=a96a3c4bb9380684c3a3fd73af99ee05ab6ab0773c49e61313831a7d5763dd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCCCSNN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJMfUc9nXh%2BQLR8auy%2FdjbxSKTN6hfAn7FrM4ATD4ZGAiEAmk2e9QeBGcLmwOCcx9n1ABhCABT61ZZm%2F5RItxzwHOIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAarKKXi7%2FiBBePLZyrcA7BGJezQ9gfC66GSxAIun9x%2BAvtLB1y%2Fqp5%2BR1FRxT0oHpH%2BfwAnQxfhIxLfFPNiNMevNcF3czu7pl%2BEy84NcG1S%2Fgw8JJG32eJbg0Jvbmaxvkvu90zNqkYgWwuOsAj8EnePWlXZA3VqhwKbdfp4fGmiEDdWSxZTFWsaB2JkCr4WSOWjeSs7Pa6Zzmvm3UjCmdiMMp%2B3ReibXW86j8%2FNkieYzbW5IuA2Xne8srHiNo9RZ1UZfk2V9x1PrWqyWw952CxDShWl%2B5nSqt1Iqjqu8sHzoiv1j5AGqqZTXBsVi7rUrsVSrx3k%2FIyOOFFjSW2K7NHAonGRqZOXQmPYRC1taV9ZGvolQMtfPBHtq1VHsW7QnBVrtAVy905HkICRPVL6PTL9D6JVqtqQbGGFvkz7oKlzcPYAjhQNzk8kKacbndQ7vuZh9uHMpc%2F6OFM6u6DpBmMbkVHbn1jLKvLLL0pEJLpCLn%2BtOvHSBRkq9hN99%2B7Mi36MJ9bFrtP%2FuPd8wAXOHMVI5CaLcdx145gqyyR97HOA8zhVRYZejIsQuLbl0wNooIQ7g8eokTPSNkkLHoVi%2FM0jHzlD%2BZnur3KNgY3k9EuwORUMhaEoOBachwXO2q0F14TcSXSwWKAM1fQpMIO68sMGOqUB946kID1kQV4IJSpaCn1ZwvtZn2b%2BomcNSkfgk44LtttyC4WTniNUZmvgnjv4o74kDT9WdmEGhpSyYopt2c%2B%2BBgGoa31349DN%2F3%2F1DqqhWbiKFTlxHIxHH%2FhaiFAzj9t3Uquryp8nLtBe%2BAbduEnKad3z%2F4lHP2RHBWExeWlNMNHmzYgLE%2Fb4a8ME9rf%2FHpGGpEtvi9FMfLbw3AGOgnhL2jXSHip7&X-Amz-Signature=838ef458bcc92206260c07ef60617489097ef1a9da99d1d930fea1848ebd7fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCCCSNN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJMfUc9nXh%2BQLR8auy%2FdjbxSKTN6hfAn7FrM4ATD4ZGAiEAmk2e9QeBGcLmwOCcx9n1ABhCABT61ZZm%2F5RItxzwHOIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAarKKXi7%2FiBBePLZyrcA7BGJezQ9gfC66GSxAIun9x%2BAvtLB1y%2Fqp5%2BR1FRxT0oHpH%2BfwAnQxfhIxLfFPNiNMevNcF3czu7pl%2BEy84NcG1S%2Fgw8JJG32eJbg0Jvbmaxvkvu90zNqkYgWwuOsAj8EnePWlXZA3VqhwKbdfp4fGmiEDdWSxZTFWsaB2JkCr4WSOWjeSs7Pa6Zzmvm3UjCmdiMMp%2B3ReibXW86j8%2FNkieYzbW5IuA2Xne8srHiNo9RZ1UZfk2V9x1PrWqyWw952CxDShWl%2B5nSqt1Iqjqu8sHzoiv1j5AGqqZTXBsVi7rUrsVSrx3k%2FIyOOFFjSW2K7NHAonGRqZOXQmPYRC1taV9ZGvolQMtfPBHtq1VHsW7QnBVrtAVy905HkICRPVL6PTL9D6JVqtqQbGGFvkz7oKlzcPYAjhQNzk8kKacbndQ7vuZh9uHMpc%2F6OFM6u6DpBmMbkVHbn1jLKvLLL0pEJLpCLn%2BtOvHSBRkq9hN99%2B7Mi36MJ9bFrtP%2FuPd8wAXOHMVI5CaLcdx145gqyyR97HOA8zhVRYZejIsQuLbl0wNooIQ7g8eokTPSNkkLHoVi%2FM0jHzlD%2BZnur3KNgY3k9EuwORUMhaEoOBachwXO2q0F14TcSXSwWKAM1fQpMIO68sMGOqUB946kID1kQV4IJSpaCn1ZwvtZn2b%2BomcNSkfgk44LtttyC4WTniNUZmvgnjv4o74kDT9WdmEGhpSyYopt2c%2B%2BBgGoa31349DN%2F3%2F1DqqhWbiKFTlxHIxHH%2FhaiFAzj9t3Uquryp8nLtBe%2BAbduEnKad3z%2F4lHP2RHBWExeWlNMNHmzYgLE%2Fb4a8ME9rf%2FHpGGpEtvi9FMfLbw3AGOgnhL2jXSHip7&X-Amz-Signature=c95a378e104013b196570e60b2c59e5286136698f19be6a7ef3401a1ceddebd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCCCSNN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJMfUc9nXh%2BQLR8auy%2FdjbxSKTN6hfAn7FrM4ATD4ZGAiEAmk2e9QeBGcLmwOCcx9n1ABhCABT61ZZm%2F5RItxzwHOIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAarKKXi7%2FiBBePLZyrcA7BGJezQ9gfC66GSxAIun9x%2BAvtLB1y%2Fqp5%2BR1FRxT0oHpH%2BfwAnQxfhIxLfFPNiNMevNcF3czu7pl%2BEy84NcG1S%2Fgw8JJG32eJbg0Jvbmaxvkvu90zNqkYgWwuOsAj8EnePWlXZA3VqhwKbdfp4fGmiEDdWSxZTFWsaB2JkCr4WSOWjeSs7Pa6Zzmvm3UjCmdiMMp%2B3ReibXW86j8%2FNkieYzbW5IuA2Xne8srHiNo9RZ1UZfk2V9x1PrWqyWw952CxDShWl%2B5nSqt1Iqjqu8sHzoiv1j5AGqqZTXBsVi7rUrsVSrx3k%2FIyOOFFjSW2K7NHAonGRqZOXQmPYRC1taV9ZGvolQMtfPBHtq1VHsW7QnBVrtAVy905HkICRPVL6PTL9D6JVqtqQbGGFvkz7oKlzcPYAjhQNzk8kKacbndQ7vuZh9uHMpc%2F6OFM6u6DpBmMbkVHbn1jLKvLLL0pEJLpCLn%2BtOvHSBRkq9hN99%2B7Mi36MJ9bFrtP%2FuPd8wAXOHMVI5CaLcdx145gqyyR97HOA8zhVRYZejIsQuLbl0wNooIQ7g8eokTPSNkkLHoVi%2FM0jHzlD%2BZnur3KNgY3k9EuwORUMhaEoOBachwXO2q0F14TcSXSwWKAM1fQpMIO68sMGOqUB946kID1kQV4IJSpaCn1ZwvtZn2b%2BomcNSkfgk44LtttyC4WTniNUZmvgnjv4o74kDT9WdmEGhpSyYopt2c%2B%2BBgGoa31349DN%2F3%2F1DqqhWbiKFTlxHIxHH%2FhaiFAzj9t3Uquryp8nLtBe%2BAbduEnKad3z%2F4lHP2RHBWExeWlNMNHmzYgLE%2Fb4a8ME9rf%2FHpGGpEtvi9FMfLbw3AGOgnhL2jXSHip7&X-Amz-Signature=4f14f37530e480eb4b4e29c67a7e74c7212cc0996d4c9eb35043f64fda99056f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCCCSNN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJMfUc9nXh%2BQLR8auy%2FdjbxSKTN6hfAn7FrM4ATD4ZGAiEAmk2e9QeBGcLmwOCcx9n1ABhCABT61ZZm%2F5RItxzwHOIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAarKKXi7%2FiBBePLZyrcA7BGJezQ9gfC66GSxAIun9x%2BAvtLB1y%2Fqp5%2BR1FRxT0oHpH%2BfwAnQxfhIxLfFPNiNMevNcF3czu7pl%2BEy84NcG1S%2Fgw8JJG32eJbg0Jvbmaxvkvu90zNqkYgWwuOsAj8EnePWlXZA3VqhwKbdfp4fGmiEDdWSxZTFWsaB2JkCr4WSOWjeSs7Pa6Zzmvm3UjCmdiMMp%2B3ReibXW86j8%2FNkieYzbW5IuA2Xne8srHiNo9RZ1UZfk2V9x1PrWqyWw952CxDShWl%2B5nSqt1Iqjqu8sHzoiv1j5AGqqZTXBsVi7rUrsVSrx3k%2FIyOOFFjSW2K7NHAonGRqZOXQmPYRC1taV9ZGvolQMtfPBHtq1VHsW7QnBVrtAVy905HkICRPVL6PTL9D6JVqtqQbGGFvkz7oKlzcPYAjhQNzk8kKacbndQ7vuZh9uHMpc%2F6OFM6u6DpBmMbkVHbn1jLKvLLL0pEJLpCLn%2BtOvHSBRkq9hN99%2B7Mi36MJ9bFrtP%2FuPd8wAXOHMVI5CaLcdx145gqyyR97HOA8zhVRYZejIsQuLbl0wNooIQ7g8eokTPSNkkLHoVi%2FM0jHzlD%2BZnur3KNgY3k9EuwORUMhaEoOBachwXO2q0F14TcSXSwWKAM1fQpMIO68sMGOqUB946kID1kQV4IJSpaCn1ZwvtZn2b%2BomcNSkfgk44LtttyC4WTniNUZmvgnjv4o74kDT9WdmEGhpSyYopt2c%2B%2BBgGoa31349DN%2F3%2F1DqqhWbiKFTlxHIxHH%2FhaiFAzj9t3Uquryp8nLtBe%2BAbduEnKad3z%2F4lHP2RHBWExeWlNMNHmzYgLE%2Fb4a8ME9rf%2FHpGGpEtvi9FMfLbw3AGOgnhL2jXSHip7&X-Amz-Signature=c1c18b9b23b268b78938bcdde663412cd9968a3ba57a665bb896c484c5b1f0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCCCSNN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJMfUc9nXh%2BQLR8auy%2FdjbxSKTN6hfAn7FrM4ATD4ZGAiEAmk2e9QeBGcLmwOCcx9n1ABhCABT61ZZm%2F5RItxzwHOIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAarKKXi7%2FiBBePLZyrcA7BGJezQ9gfC66GSxAIun9x%2BAvtLB1y%2Fqp5%2BR1FRxT0oHpH%2BfwAnQxfhIxLfFPNiNMevNcF3czu7pl%2BEy84NcG1S%2Fgw8JJG32eJbg0Jvbmaxvkvu90zNqkYgWwuOsAj8EnePWlXZA3VqhwKbdfp4fGmiEDdWSxZTFWsaB2JkCr4WSOWjeSs7Pa6Zzmvm3UjCmdiMMp%2B3ReibXW86j8%2FNkieYzbW5IuA2Xne8srHiNo9RZ1UZfk2V9x1PrWqyWw952CxDShWl%2B5nSqt1Iqjqu8sHzoiv1j5AGqqZTXBsVi7rUrsVSrx3k%2FIyOOFFjSW2K7NHAonGRqZOXQmPYRC1taV9ZGvolQMtfPBHtq1VHsW7QnBVrtAVy905HkICRPVL6PTL9D6JVqtqQbGGFvkz7oKlzcPYAjhQNzk8kKacbndQ7vuZh9uHMpc%2F6OFM6u6DpBmMbkVHbn1jLKvLLL0pEJLpCLn%2BtOvHSBRkq9hN99%2B7Mi36MJ9bFrtP%2FuPd8wAXOHMVI5CaLcdx145gqyyR97HOA8zhVRYZejIsQuLbl0wNooIQ7g8eokTPSNkkLHoVi%2FM0jHzlD%2BZnur3KNgY3k9EuwORUMhaEoOBachwXO2q0F14TcSXSwWKAM1fQpMIO68sMGOqUB946kID1kQV4IJSpaCn1ZwvtZn2b%2BomcNSkfgk44LtttyC4WTniNUZmvgnjv4o74kDT9WdmEGhpSyYopt2c%2B%2BBgGoa31349DN%2F3%2F1DqqhWbiKFTlxHIxHH%2FhaiFAzj9t3Uquryp8nLtBe%2BAbduEnKad3z%2F4lHP2RHBWExeWlNMNHmzYgLE%2Fb4a8ME9rf%2FHpGGpEtvi9FMfLbw3AGOgnhL2jXSHip7&X-Amz-Signature=83e03c7eae93cb944825c502c04f63f6a84e62ffb07412c47b586984a90773e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URCCCSNN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJMfUc9nXh%2BQLR8auy%2FdjbxSKTN6hfAn7FrM4ATD4ZGAiEAmk2e9QeBGcLmwOCcx9n1ABhCABT61ZZm%2F5RItxzwHOIqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAarKKXi7%2FiBBePLZyrcA7BGJezQ9gfC66GSxAIun9x%2BAvtLB1y%2Fqp5%2BR1FRxT0oHpH%2BfwAnQxfhIxLfFPNiNMevNcF3czu7pl%2BEy84NcG1S%2Fgw8JJG32eJbg0Jvbmaxvkvu90zNqkYgWwuOsAj8EnePWlXZA3VqhwKbdfp4fGmiEDdWSxZTFWsaB2JkCr4WSOWjeSs7Pa6Zzmvm3UjCmdiMMp%2B3ReibXW86j8%2FNkieYzbW5IuA2Xne8srHiNo9RZ1UZfk2V9x1PrWqyWw952CxDShWl%2B5nSqt1Iqjqu8sHzoiv1j5AGqqZTXBsVi7rUrsVSrx3k%2FIyOOFFjSW2K7NHAonGRqZOXQmPYRC1taV9ZGvolQMtfPBHtq1VHsW7QnBVrtAVy905HkICRPVL6PTL9D6JVqtqQbGGFvkz7oKlzcPYAjhQNzk8kKacbndQ7vuZh9uHMpc%2F6OFM6u6DpBmMbkVHbn1jLKvLLL0pEJLpCLn%2BtOvHSBRkq9hN99%2B7Mi36MJ9bFrtP%2FuPd8wAXOHMVI5CaLcdx145gqyyR97HOA8zhVRYZejIsQuLbl0wNooIQ7g8eokTPSNkkLHoVi%2FM0jHzlD%2BZnur3KNgY3k9EuwORUMhaEoOBachwXO2q0F14TcSXSwWKAM1fQpMIO68sMGOqUB946kID1kQV4IJSpaCn1ZwvtZn2b%2BomcNSkfgk44LtttyC4WTniNUZmvgnjv4o74kDT9WdmEGhpSyYopt2c%2B%2BBgGoa31349DN%2F3%2F1DqqhWbiKFTlxHIxHH%2FhaiFAzj9t3Uquryp8nLtBe%2BAbduEnKad3z%2F4lHP2RHBWExeWlNMNHmzYgLE%2Fb4a8ME9rf%2FHpGGpEtvi9FMfLbw3AGOgnhL2jXSHip7&X-Amz-Signature=f24c9331ca8f29cc0faf59b56a18bcdb853d8de0b48e9f1f84e4727ae7b20ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
