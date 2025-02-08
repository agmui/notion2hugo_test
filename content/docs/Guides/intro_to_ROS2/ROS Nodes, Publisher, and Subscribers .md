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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PWDB3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCh5s3731hSw75qWqvfSbAuQtepSfz9fFWk9JLKP5YDdwIgHYvRPP4jtqv4%2BRtHnvKP8MgxTD8%2Fdhsi%2F1oVYUxp1KYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLChjQDQuY9t7aWj3SrcA3EL5QAOQS1j58Kuqb5JBG5rUSOgsmaJUI3uucSWNULXhXo3zhMuZAq7oKKh6d5pT2GmtXdQ%2F1LXxgh0DTc6mKH7i4i4vzwT%2FZilQptaW5VAjKUBAMN8oQXFYuEM1WbfJ38OJBcemdgfa5l3TB2V7htkddk2IIIAcz4eSqZjJGn6hXs35Cd15xqjc6tGZH1NG4YfVDzSSAAYAQdPIQ%2BhU4BY3MW9cLgossJFeg6HnSWDzT3h8dexo12QTVlcNqKPuZMIRfhOmCAzXaLZthT%2BbD1w4TmVDcS6mKvFHw6zTS7ZHvk3yIl13Kg%2BsjspROYV17SYb6IIcSSdbG2eevEOVEgjJ8Y4XpafOfDulLQ37unQgYwdr13uE17j3PQ17T7zeW4%2BBxvIYik69hUuiPeEBVE7gKDzjzDGxddt00fUzMELv5ovYylQhp6O5hr%2BUeSLnZHCY%2Bf6h%2FwZa04IvQfoTCMIJpkcaGNLXkBL6vb8F%2FhT6Fb1%2F7enKQa6wLRnK9qaAIkUlZ0At%2BZNFXNIo7ufg75SNhvyB3zyDgo7bdEOaC%2FhAYIlfz1g26EV%2FbSzEe72iQElkHQQhIxu7fHBLL3GCenpXlcMKgqw%2FgAYBqXPCI2WbtO3zWDrZ9%2FdYy28MIXfmr0GOqUBJWLyaDDfJee95TWoRBhd3t9nH6ajZNFiiifpTB8JZQpypQHYXHnZfA3IWocNSIsawSjMWz5AfO52abno3i2lvk50eQbMPeE3%2FFGj%2BhzUFCw6axThqW5CY0mkyUvx5oKRVMognoFM%2BA0UNQt8B4%2BOGXb5jPlerrjo7KxPTuz8Z3Gqw4PCDdaxVlefHaq4NLJSuKvRIA0b1LNXI1S4Zl6oLeIzuPu2&X-Amz-Signature=3d52624a1469070ba0e7a97edfee8c277222983fa785b01ec6e49e54f95521a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PWDB3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCh5s3731hSw75qWqvfSbAuQtepSfz9fFWk9JLKP5YDdwIgHYvRPP4jtqv4%2BRtHnvKP8MgxTD8%2Fdhsi%2F1oVYUxp1KYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLChjQDQuY9t7aWj3SrcA3EL5QAOQS1j58Kuqb5JBG5rUSOgsmaJUI3uucSWNULXhXo3zhMuZAq7oKKh6d5pT2GmtXdQ%2F1LXxgh0DTc6mKH7i4i4vzwT%2FZilQptaW5VAjKUBAMN8oQXFYuEM1WbfJ38OJBcemdgfa5l3TB2V7htkddk2IIIAcz4eSqZjJGn6hXs35Cd15xqjc6tGZH1NG4YfVDzSSAAYAQdPIQ%2BhU4BY3MW9cLgossJFeg6HnSWDzT3h8dexo12QTVlcNqKPuZMIRfhOmCAzXaLZthT%2BbD1w4TmVDcS6mKvFHw6zTS7ZHvk3yIl13Kg%2BsjspROYV17SYb6IIcSSdbG2eevEOVEgjJ8Y4XpafOfDulLQ37unQgYwdr13uE17j3PQ17T7zeW4%2BBxvIYik69hUuiPeEBVE7gKDzjzDGxddt00fUzMELv5ovYylQhp6O5hr%2BUeSLnZHCY%2Bf6h%2FwZa04IvQfoTCMIJpkcaGNLXkBL6vb8F%2FhT6Fb1%2F7enKQa6wLRnK9qaAIkUlZ0At%2BZNFXNIo7ufg75SNhvyB3zyDgo7bdEOaC%2FhAYIlfz1g26EV%2FbSzEe72iQElkHQQhIxu7fHBLL3GCenpXlcMKgqw%2FgAYBqXPCI2WbtO3zWDrZ9%2FdYy28MIXfmr0GOqUBJWLyaDDfJee95TWoRBhd3t9nH6ajZNFiiifpTB8JZQpypQHYXHnZfA3IWocNSIsawSjMWz5AfO52abno3i2lvk50eQbMPeE3%2FFGj%2BhzUFCw6axThqW5CY0mkyUvx5oKRVMognoFM%2BA0UNQt8B4%2BOGXb5jPlerrjo7KxPTuz8Z3Gqw4PCDdaxVlefHaq4NLJSuKvRIA0b1LNXI1S4Zl6oLeIzuPu2&X-Amz-Signature=3b2a2944d22636bc0b9811348b1f8bb48e6f46e77dc9e47b15b85894402afbfc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PWDB3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCh5s3731hSw75qWqvfSbAuQtepSfz9fFWk9JLKP5YDdwIgHYvRPP4jtqv4%2BRtHnvKP8MgxTD8%2Fdhsi%2F1oVYUxp1KYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLChjQDQuY9t7aWj3SrcA3EL5QAOQS1j58Kuqb5JBG5rUSOgsmaJUI3uucSWNULXhXo3zhMuZAq7oKKh6d5pT2GmtXdQ%2F1LXxgh0DTc6mKH7i4i4vzwT%2FZilQptaW5VAjKUBAMN8oQXFYuEM1WbfJ38OJBcemdgfa5l3TB2V7htkddk2IIIAcz4eSqZjJGn6hXs35Cd15xqjc6tGZH1NG4YfVDzSSAAYAQdPIQ%2BhU4BY3MW9cLgossJFeg6HnSWDzT3h8dexo12QTVlcNqKPuZMIRfhOmCAzXaLZthT%2BbD1w4TmVDcS6mKvFHw6zTS7ZHvk3yIl13Kg%2BsjspROYV17SYb6IIcSSdbG2eevEOVEgjJ8Y4XpafOfDulLQ37unQgYwdr13uE17j3PQ17T7zeW4%2BBxvIYik69hUuiPeEBVE7gKDzjzDGxddt00fUzMELv5ovYylQhp6O5hr%2BUeSLnZHCY%2Bf6h%2FwZa04IvQfoTCMIJpkcaGNLXkBL6vb8F%2FhT6Fb1%2F7enKQa6wLRnK9qaAIkUlZ0At%2BZNFXNIo7ufg75SNhvyB3zyDgo7bdEOaC%2FhAYIlfz1g26EV%2FbSzEe72iQElkHQQhIxu7fHBLL3GCenpXlcMKgqw%2FgAYBqXPCI2WbtO3zWDrZ9%2FdYy28MIXfmr0GOqUBJWLyaDDfJee95TWoRBhd3t9nH6ajZNFiiifpTB8JZQpypQHYXHnZfA3IWocNSIsawSjMWz5AfO52abno3i2lvk50eQbMPeE3%2FFGj%2BhzUFCw6axThqW5CY0mkyUvx5oKRVMognoFM%2BA0UNQt8B4%2BOGXb5jPlerrjo7KxPTuz8Z3Gqw4PCDdaxVlefHaq4NLJSuKvRIA0b1LNXI1S4Zl6oLeIzuPu2&X-Amz-Signature=ac0eaa31e1018241de27d9aeac2ff88b3393b743b18fa1a0c6c9a1113cfa889d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PWDB3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCh5s3731hSw75qWqvfSbAuQtepSfz9fFWk9JLKP5YDdwIgHYvRPP4jtqv4%2BRtHnvKP8MgxTD8%2Fdhsi%2F1oVYUxp1KYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLChjQDQuY9t7aWj3SrcA3EL5QAOQS1j58Kuqb5JBG5rUSOgsmaJUI3uucSWNULXhXo3zhMuZAq7oKKh6d5pT2GmtXdQ%2F1LXxgh0DTc6mKH7i4i4vzwT%2FZilQptaW5VAjKUBAMN8oQXFYuEM1WbfJ38OJBcemdgfa5l3TB2V7htkddk2IIIAcz4eSqZjJGn6hXs35Cd15xqjc6tGZH1NG4YfVDzSSAAYAQdPIQ%2BhU4BY3MW9cLgossJFeg6HnSWDzT3h8dexo12QTVlcNqKPuZMIRfhOmCAzXaLZthT%2BbD1w4TmVDcS6mKvFHw6zTS7ZHvk3yIl13Kg%2BsjspROYV17SYb6IIcSSdbG2eevEOVEgjJ8Y4XpafOfDulLQ37unQgYwdr13uE17j3PQ17T7zeW4%2BBxvIYik69hUuiPeEBVE7gKDzjzDGxddt00fUzMELv5ovYylQhp6O5hr%2BUeSLnZHCY%2Bf6h%2FwZa04IvQfoTCMIJpkcaGNLXkBL6vb8F%2FhT6Fb1%2F7enKQa6wLRnK9qaAIkUlZ0At%2BZNFXNIo7ufg75SNhvyB3zyDgo7bdEOaC%2FhAYIlfz1g26EV%2FbSzEe72iQElkHQQhIxu7fHBLL3GCenpXlcMKgqw%2FgAYBqXPCI2WbtO3zWDrZ9%2FdYy28MIXfmr0GOqUBJWLyaDDfJee95TWoRBhd3t9nH6ajZNFiiifpTB8JZQpypQHYXHnZfA3IWocNSIsawSjMWz5AfO52abno3i2lvk50eQbMPeE3%2FFGj%2BhzUFCw6axThqW5CY0mkyUvx5oKRVMognoFM%2BA0UNQt8B4%2BOGXb5jPlerrjo7KxPTuz8Z3Gqw4PCDdaxVlefHaq4NLJSuKvRIA0b1LNXI1S4Zl6oLeIzuPu2&X-Amz-Signature=8182f343c293500a5cce05103a75748e137100d3eaa62a333d96f42772176bc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PWDB3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCh5s3731hSw75qWqvfSbAuQtepSfz9fFWk9JLKP5YDdwIgHYvRPP4jtqv4%2BRtHnvKP8MgxTD8%2Fdhsi%2F1oVYUxp1KYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLChjQDQuY9t7aWj3SrcA3EL5QAOQS1j58Kuqb5JBG5rUSOgsmaJUI3uucSWNULXhXo3zhMuZAq7oKKh6d5pT2GmtXdQ%2F1LXxgh0DTc6mKH7i4i4vzwT%2FZilQptaW5VAjKUBAMN8oQXFYuEM1WbfJ38OJBcemdgfa5l3TB2V7htkddk2IIIAcz4eSqZjJGn6hXs35Cd15xqjc6tGZH1NG4YfVDzSSAAYAQdPIQ%2BhU4BY3MW9cLgossJFeg6HnSWDzT3h8dexo12QTVlcNqKPuZMIRfhOmCAzXaLZthT%2BbD1w4TmVDcS6mKvFHw6zTS7ZHvk3yIl13Kg%2BsjspROYV17SYb6IIcSSdbG2eevEOVEgjJ8Y4XpafOfDulLQ37unQgYwdr13uE17j3PQ17T7zeW4%2BBxvIYik69hUuiPeEBVE7gKDzjzDGxddt00fUzMELv5ovYylQhp6O5hr%2BUeSLnZHCY%2Bf6h%2FwZa04IvQfoTCMIJpkcaGNLXkBL6vb8F%2FhT6Fb1%2F7enKQa6wLRnK9qaAIkUlZ0At%2BZNFXNIo7ufg75SNhvyB3zyDgo7bdEOaC%2FhAYIlfz1g26EV%2FbSzEe72iQElkHQQhIxu7fHBLL3GCenpXlcMKgqw%2FgAYBqXPCI2WbtO3zWDrZ9%2FdYy28MIXfmr0GOqUBJWLyaDDfJee95TWoRBhd3t9nH6ajZNFiiifpTB8JZQpypQHYXHnZfA3IWocNSIsawSjMWz5AfO52abno3i2lvk50eQbMPeE3%2FFGj%2BhzUFCw6axThqW5CY0mkyUvx5oKRVMognoFM%2BA0UNQt8B4%2BOGXb5jPlerrjo7KxPTuz8Z3Gqw4PCDdaxVlefHaq4NLJSuKvRIA0b1LNXI1S4Zl6oLeIzuPu2&X-Amz-Signature=b019bb0b0b2eac39acfe8d876af0cc6964dbf32ee59ab3313832ab6e61742e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PWDB3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCh5s3731hSw75qWqvfSbAuQtepSfz9fFWk9JLKP5YDdwIgHYvRPP4jtqv4%2BRtHnvKP8MgxTD8%2Fdhsi%2F1oVYUxp1KYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLChjQDQuY9t7aWj3SrcA3EL5QAOQS1j58Kuqb5JBG5rUSOgsmaJUI3uucSWNULXhXo3zhMuZAq7oKKh6d5pT2GmtXdQ%2F1LXxgh0DTc6mKH7i4i4vzwT%2FZilQptaW5VAjKUBAMN8oQXFYuEM1WbfJ38OJBcemdgfa5l3TB2V7htkddk2IIIAcz4eSqZjJGn6hXs35Cd15xqjc6tGZH1NG4YfVDzSSAAYAQdPIQ%2BhU4BY3MW9cLgossJFeg6HnSWDzT3h8dexo12QTVlcNqKPuZMIRfhOmCAzXaLZthT%2BbD1w4TmVDcS6mKvFHw6zTS7ZHvk3yIl13Kg%2BsjspROYV17SYb6IIcSSdbG2eevEOVEgjJ8Y4XpafOfDulLQ37unQgYwdr13uE17j3PQ17T7zeW4%2BBxvIYik69hUuiPeEBVE7gKDzjzDGxddt00fUzMELv5ovYylQhp6O5hr%2BUeSLnZHCY%2Bf6h%2FwZa04IvQfoTCMIJpkcaGNLXkBL6vb8F%2FhT6Fb1%2F7enKQa6wLRnK9qaAIkUlZ0At%2BZNFXNIo7ufg75SNhvyB3zyDgo7bdEOaC%2FhAYIlfz1g26EV%2FbSzEe72iQElkHQQhIxu7fHBLL3GCenpXlcMKgqw%2FgAYBqXPCI2WbtO3zWDrZ9%2FdYy28MIXfmr0GOqUBJWLyaDDfJee95TWoRBhd3t9nH6ajZNFiiifpTB8JZQpypQHYXHnZfA3IWocNSIsawSjMWz5AfO52abno3i2lvk50eQbMPeE3%2FFGj%2BhzUFCw6axThqW5CY0mkyUvx5oKRVMognoFM%2BA0UNQt8B4%2BOGXb5jPlerrjo7KxPTuz8Z3Gqw4PCDdaxVlefHaq4NLJSuKvRIA0b1LNXI1S4Zl6oLeIzuPu2&X-Amz-Signature=28026e842c32f35d5e8a275fe63b8460cdd6bc15fa939348769dd38ac533dcf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PWDB3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCh5s3731hSw75qWqvfSbAuQtepSfz9fFWk9JLKP5YDdwIgHYvRPP4jtqv4%2BRtHnvKP8MgxTD8%2Fdhsi%2F1oVYUxp1KYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLChjQDQuY9t7aWj3SrcA3EL5QAOQS1j58Kuqb5JBG5rUSOgsmaJUI3uucSWNULXhXo3zhMuZAq7oKKh6d5pT2GmtXdQ%2F1LXxgh0DTc6mKH7i4i4vzwT%2FZilQptaW5VAjKUBAMN8oQXFYuEM1WbfJ38OJBcemdgfa5l3TB2V7htkddk2IIIAcz4eSqZjJGn6hXs35Cd15xqjc6tGZH1NG4YfVDzSSAAYAQdPIQ%2BhU4BY3MW9cLgossJFeg6HnSWDzT3h8dexo12QTVlcNqKPuZMIRfhOmCAzXaLZthT%2BbD1w4TmVDcS6mKvFHw6zTS7ZHvk3yIl13Kg%2BsjspROYV17SYb6IIcSSdbG2eevEOVEgjJ8Y4XpafOfDulLQ37unQgYwdr13uE17j3PQ17T7zeW4%2BBxvIYik69hUuiPeEBVE7gKDzjzDGxddt00fUzMELv5ovYylQhp6O5hr%2BUeSLnZHCY%2Bf6h%2FwZa04IvQfoTCMIJpkcaGNLXkBL6vb8F%2FhT6Fb1%2F7enKQa6wLRnK9qaAIkUlZ0At%2BZNFXNIo7ufg75SNhvyB3zyDgo7bdEOaC%2FhAYIlfz1g26EV%2FbSzEe72iQElkHQQhIxu7fHBLL3GCenpXlcMKgqw%2FgAYBqXPCI2WbtO3zWDrZ9%2FdYy28MIXfmr0GOqUBJWLyaDDfJee95TWoRBhd3t9nH6ajZNFiiifpTB8JZQpypQHYXHnZfA3IWocNSIsawSjMWz5AfO52abno3i2lvk50eQbMPeE3%2FFGj%2BhzUFCw6axThqW5CY0mkyUvx5oKRVMognoFM%2BA0UNQt8B4%2BOGXb5jPlerrjo7KxPTuz8Z3Gqw4PCDdaxVlefHaq4NLJSuKvRIA0b1LNXI1S4Zl6oLeIzuPu2&X-Amz-Signature=0ae7459028abe51e7a81179bf24d6c6867276553fa2c526546e370a0dd4c2ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y62PWDB3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T020510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCh5s3731hSw75qWqvfSbAuQtepSfz9fFWk9JLKP5YDdwIgHYvRPP4jtqv4%2BRtHnvKP8MgxTD8%2Fdhsi%2F1oVYUxp1KYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLChjQDQuY9t7aWj3SrcA3EL5QAOQS1j58Kuqb5JBG5rUSOgsmaJUI3uucSWNULXhXo3zhMuZAq7oKKh6d5pT2GmtXdQ%2F1LXxgh0DTc6mKH7i4i4vzwT%2FZilQptaW5VAjKUBAMN8oQXFYuEM1WbfJ38OJBcemdgfa5l3TB2V7htkddk2IIIAcz4eSqZjJGn6hXs35Cd15xqjc6tGZH1NG4YfVDzSSAAYAQdPIQ%2BhU4BY3MW9cLgossJFeg6HnSWDzT3h8dexo12QTVlcNqKPuZMIRfhOmCAzXaLZthT%2BbD1w4TmVDcS6mKvFHw6zTS7ZHvk3yIl13Kg%2BsjspROYV17SYb6IIcSSdbG2eevEOVEgjJ8Y4XpafOfDulLQ37unQgYwdr13uE17j3PQ17T7zeW4%2BBxvIYik69hUuiPeEBVE7gKDzjzDGxddt00fUzMELv5ovYylQhp6O5hr%2BUeSLnZHCY%2Bf6h%2FwZa04IvQfoTCMIJpkcaGNLXkBL6vb8F%2FhT6Fb1%2F7enKQa6wLRnK9qaAIkUlZ0At%2BZNFXNIo7ufg75SNhvyB3zyDgo7bdEOaC%2FhAYIlfz1g26EV%2FbSzEe72iQElkHQQhIxu7fHBLL3GCenpXlcMKgqw%2FgAYBqXPCI2WbtO3zWDrZ9%2FdYy28MIXfmr0GOqUBJWLyaDDfJee95TWoRBhd3t9nH6ajZNFiiifpTB8JZQpypQHYXHnZfA3IWocNSIsawSjMWz5AfO52abno3i2lvk50eQbMPeE3%2FFGj%2BhzUFCw6axThqW5CY0mkyUvx5oKRVMognoFM%2BA0UNQt8B4%2BOGXb5jPlerrjo7KxPTuz8Z3Gqw4PCDdaxVlefHaq4NLJSuKvRIA0b1LNXI1S4Zl6oLeIzuPu2&X-Amz-Signature=e2887cdf3d5e7b5f752a28ea3eb0eefca45a03b9635a5b5188099c40d0336a71&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
