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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCP7MO3N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5F4407jDfq1NqBBQ3R46Lq0qXEwWjSAb0xCtbYUKyzAiAbsTG0kEOUfFsmaIgwSeY%2FKyctkB0iOpVYvdnAZoyNXSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMKUPk%2FnxG95ypr%2BqJKtwDnQYdZorbVqvpKvSYbuCWLJlMp15XWeUmdg5Cqq513Khdwjs7q0u2tU%2FtEuJ1CkUQsSxWgjECWlJyHrULfw%2F%2FaZJZpBq9COMwh04KQNpvAYkwgapDGWrdGXQObwPyyGNsS3vSugCH5RFZKUxF2Te6EJ0ou6SVM829kI%2FC1B%2F3SDsX46q1hafkSL4s3PBgCHwTD2awClytlRoBqxM86AFdF8gHmLezOz4lKDB6B9WmHyV2Yxr65i9EZG29QDBgtK1onDEiVi585SUPxu1WqIz69v%2BdsFxQJMXEAQkb7zzDLhDJiLLkRUNzVDbjRkGJvxbR6qwnzaWIsO%2BWLvKqgWyKJYJT8HQ9SPuSB0zDhGIVPjSGRSMnhxOSxfkeP34HDYqdF%2FUZbWmh8GRd4YOuixV7c9CnNNredHY13urJio6G%2BN%2F5BidXnoVYzKybkdt4v02Z6YoA9yR88zb141Tieta%2Buhd8Eyhvp1BGnQAKqupNZaJEAdlWVq5nt843Yi2t2k6OZHqTNejziTC8TsDCIMJmSGyQBFmwIR%2B6Vu5uEO2agpvmPPVBYcOnEPIeW5x9zM9Zt%2Byee6AVxVtqKtiHQsEnt9R8hszBv1uUAV33x2P5gNhotKZcVuKs2BQMWy4wx8TawQY6pgF740TvxqRwNg2NgLRaZ9BdHv94D5Ey1GVtXmWherpcf28od4600CqFdzFKqb7DUzGptWs5P%2Ff8MdkI2jij46t%2Bi2%2FDZo20ayAHGSFEaTr78w6B7ODl0bRg5phpChsWMzl8gzHPJvstzqFPzdFsWc5moCoSNvGhEXs9MbUO1%2FChdjjSTa4Vg%2F6OOSrNFSmURfpY7uVsGev2JV%2Fhk%2FccSg6gm63jndTe&X-Amz-Signature=9796caeb6181ff0c1fcb6501c90ebdf5db7c7581b7605ca3418d4b7f42689b89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCP7MO3N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5F4407jDfq1NqBBQ3R46Lq0qXEwWjSAb0xCtbYUKyzAiAbsTG0kEOUfFsmaIgwSeY%2FKyctkB0iOpVYvdnAZoyNXSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMKUPk%2FnxG95ypr%2BqJKtwDnQYdZorbVqvpKvSYbuCWLJlMp15XWeUmdg5Cqq513Khdwjs7q0u2tU%2FtEuJ1CkUQsSxWgjECWlJyHrULfw%2F%2FaZJZpBq9COMwh04KQNpvAYkwgapDGWrdGXQObwPyyGNsS3vSugCH5RFZKUxF2Te6EJ0ou6SVM829kI%2FC1B%2F3SDsX46q1hafkSL4s3PBgCHwTD2awClytlRoBqxM86AFdF8gHmLezOz4lKDB6B9WmHyV2Yxr65i9EZG29QDBgtK1onDEiVi585SUPxu1WqIz69v%2BdsFxQJMXEAQkb7zzDLhDJiLLkRUNzVDbjRkGJvxbR6qwnzaWIsO%2BWLvKqgWyKJYJT8HQ9SPuSB0zDhGIVPjSGRSMnhxOSxfkeP34HDYqdF%2FUZbWmh8GRd4YOuixV7c9CnNNredHY13urJio6G%2BN%2F5BidXnoVYzKybkdt4v02Z6YoA9yR88zb141Tieta%2Buhd8Eyhvp1BGnQAKqupNZaJEAdlWVq5nt843Yi2t2k6OZHqTNejziTC8TsDCIMJmSGyQBFmwIR%2B6Vu5uEO2agpvmPPVBYcOnEPIeW5x9zM9Zt%2Byee6AVxVtqKtiHQsEnt9R8hszBv1uUAV33x2P5gNhotKZcVuKs2BQMWy4wx8TawQY6pgF740TvxqRwNg2NgLRaZ9BdHv94D5Ey1GVtXmWherpcf28od4600CqFdzFKqb7DUzGptWs5P%2Ff8MdkI2jij46t%2Bi2%2FDZo20ayAHGSFEaTr78w6B7ODl0bRg5phpChsWMzl8gzHPJvstzqFPzdFsWc5moCoSNvGhEXs9MbUO1%2FChdjjSTa4Vg%2F6OOSrNFSmURfpY7uVsGev2JV%2Fhk%2FccSg6gm63jndTe&X-Amz-Signature=69b9fcfa9f5027ac179d2dc74730f40c3c9b9904fbbf907331d43cebf43b6a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCP7MO3N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5F4407jDfq1NqBBQ3R46Lq0qXEwWjSAb0xCtbYUKyzAiAbsTG0kEOUfFsmaIgwSeY%2FKyctkB0iOpVYvdnAZoyNXSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMKUPk%2FnxG95ypr%2BqJKtwDnQYdZorbVqvpKvSYbuCWLJlMp15XWeUmdg5Cqq513Khdwjs7q0u2tU%2FtEuJ1CkUQsSxWgjECWlJyHrULfw%2F%2FaZJZpBq9COMwh04KQNpvAYkwgapDGWrdGXQObwPyyGNsS3vSugCH5RFZKUxF2Te6EJ0ou6SVM829kI%2FC1B%2F3SDsX46q1hafkSL4s3PBgCHwTD2awClytlRoBqxM86AFdF8gHmLezOz4lKDB6B9WmHyV2Yxr65i9EZG29QDBgtK1onDEiVi585SUPxu1WqIz69v%2BdsFxQJMXEAQkb7zzDLhDJiLLkRUNzVDbjRkGJvxbR6qwnzaWIsO%2BWLvKqgWyKJYJT8HQ9SPuSB0zDhGIVPjSGRSMnhxOSxfkeP34HDYqdF%2FUZbWmh8GRd4YOuixV7c9CnNNredHY13urJio6G%2BN%2F5BidXnoVYzKybkdt4v02Z6YoA9yR88zb141Tieta%2Buhd8Eyhvp1BGnQAKqupNZaJEAdlWVq5nt843Yi2t2k6OZHqTNejziTC8TsDCIMJmSGyQBFmwIR%2B6Vu5uEO2agpvmPPVBYcOnEPIeW5x9zM9Zt%2Byee6AVxVtqKtiHQsEnt9R8hszBv1uUAV33x2P5gNhotKZcVuKs2BQMWy4wx8TawQY6pgF740TvxqRwNg2NgLRaZ9BdHv94D5Ey1GVtXmWherpcf28od4600CqFdzFKqb7DUzGptWs5P%2Ff8MdkI2jij46t%2Bi2%2FDZo20ayAHGSFEaTr78w6B7ODl0bRg5phpChsWMzl8gzHPJvstzqFPzdFsWc5moCoSNvGhEXs9MbUO1%2FChdjjSTa4Vg%2F6OOSrNFSmURfpY7uVsGev2JV%2Fhk%2FccSg6gm63jndTe&X-Amz-Signature=543ce09afa9d0c640f141755180073ae74df0cc8ec3e47f70dbb09e51466fe23&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCP7MO3N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5F4407jDfq1NqBBQ3R46Lq0qXEwWjSAb0xCtbYUKyzAiAbsTG0kEOUfFsmaIgwSeY%2FKyctkB0iOpVYvdnAZoyNXSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMKUPk%2FnxG95ypr%2BqJKtwDnQYdZorbVqvpKvSYbuCWLJlMp15XWeUmdg5Cqq513Khdwjs7q0u2tU%2FtEuJ1CkUQsSxWgjECWlJyHrULfw%2F%2FaZJZpBq9COMwh04KQNpvAYkwgapDGWrdGXQObwPyyGNsS3vSugCH5RFZKUxF2Te6EJ0ou6SVM829kI%2FC1B%2F3SDsX46q1hafkSL4s3PBgCHwTD2awClytlRoBqxM86AFdF8gHmLezOz4lKDB6B9WmHyV2Yxr65i9EZG29QDBgtK1onDEiVi585SUPxu1WqIz69v%2BdsFxQJMXEAQkb7zzDLhDJiLLkRUNzVDbjRkGJvxbR6qwnzaWIsO%2BWLvKqgWyKJYJT8HQ9SPuSB0zDhGIVPjSGRSMnhxOSxfkeP34HDYqdF%2FUZbWmh8GRd4YOuixV7c9CnNNredHY13urJio6G%2BN%2F5BidXnoVYzKybkdt4v02Z6YoA9yR88zb141Tieta%2Buhd8Eyhvp1BGnQAKqupNZaJEAdlWVq5nt843Yi2t2k6OZHqTNejziTC8TsDCIMJmSGyQBFmwIR%2B6Vu5uEO2agpvmPPVBYcOnEPIeW5x9zM9Zt%2Byee6AVxVtqKtiHQsEnt9R8hszBv1uUAV33x2P5gNhotKZcVuKs2BQMWy4wx8TawQY6pgF740TvxqRwNg2NgLRaZ9BdHv94D5Ey1GVtXmWherpcf28od4600CqFdzFKqb7DUzGptWs5P%2Ff8MdkI2jij46t%2Bi2%2FDZo20ayAHGSFEaTr78w6B7ODl0bRg5phpChsWMzl8gzHPJvstzqFPzdFsWc5moCoSNvGhEXs9MbUO1%2FChdjjSTa4Vg%2F6OOSrNFSmURfpY7uVsGev2JV%2Fhk%2FccSg6gm63jndTe&X-Amz-Signature=688edd6b975217f55ff17ef7110478b107e932393da17ad43bf02b601ab31314&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCP7MO3N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5F4407jDfq1NqBBQ3R46Lq0qXEwWjSAb0xCtbYUKyzAiAbsTG0kEOUfFsmaIgwSeY%2FKyctkB0iOpVYvdnAZoyNXSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMKUPk%2FnxG95ypr%2BqJKtwDnQYdZorbVqvpKvSYbuCWLJlMp15XWeUmdg5Cqq513Khdwjs7q0u2tU%2FtEuJ1CkUQsSxWgjECWlJyHrULfw%2F%2FaZJZpBq9COMwh04KQNpvAYkwgapDGWrdGXQObwPyyGNsS3vSugCH5RFZKUxF2Te6EJ0ou6SVM829kI%2FC1B%2F3SDsX46q1hafkSL4s3PBgCHwTD2awClytlRoBqxM86AFdF8gHmLezOz4lKDB6B9WmHyV2Yxr65i9EZG29QDBgtK1onDEiVi585SUPxu1WqIz69v%2BdsFxQJMXEAQkb7zzDLhDJiLLkRUNzVDbjRkGJvxbR6qwnzaWIsO%2BWLvKqgWyKJYJT8HQ9SPuSB0zDhGIVPjSGRSMnhxOSxfkeP34HDYqdF%2FUZbWmh8GRd4YOuixV7c9CnNNredHY13urJio6G%2BN%2F5BidXnoVYzKybkdt4v02Z6YoA9yR88zb141Tieta%2Buhd8Eyhvp1BGnQAKqupNZaJEAdlWVq5nt843Yi2t2k6OZHqTNejziTC8TsDCIMJmSGyQBFmwIR%2B6Vu5uEO2agpvmPPVBYcOnEPIeW5x9zM9Zt%2Byee6AVxVtqKtiHQsEnt9R8hszBv1uUAV33x2P5gNhotKZcVuKs2BQMWy4wx8TawQY6pgF740TvxqRwNg2NgLRaZ9BdHv94D5Ey1GVtXmWherpcf28od4600CqFdzFKqb7DUzGptWs5P%2Ff8MdkI2jij46t%2Bi2%2FDZo20ayAHGSFEaTr78w6B7ODl0bRg5phpChsWMzl8gzHPJvstzqFPzdFsWc5moCoSNvGhEXs9MbUO1%2FChdjjSTa4Vg%2F6OOSrNFSmURfpY7uVsGev2JV%2Fhk%2FccSg6gm63jndTe&X-Amz-Signature=dd182c35a4c9cbc5b9fd39bf6a1684013a1b58e19ca5b6df1cbcb27dc2559e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCP7MO3N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5F4407jDfq1NqBBQ3R46Lq0qXEwWjSAb0xCtbYUKyzAiAbsTG0kEOUfFsmaIgwSeY%2FKyctkB0iOpVYvdnAZoyNXSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMKUPk%2FnxG95ypr%2BqJKtwDnQYdZorbVqvpKvSYbuCWLJlMp15XWeUmdg5Cqq513Khdwjs7q0u2tU%2FtEuJ1CkUQsSxWgjECWlJyHrULfw%2F%2FaZJZpBq9COMwh04KQNpvAYkwgapDGWrdGXQObwPyyGNsS3vSugCH5RFZKUxF2Te6EJ0ou6SVM829kI%2FC1B%2F3SDsX46q1hafkSL4s3PBgCHwTD2awClytlRoBqxM86AFdF8gHmLezOz4lKDB6B9WmHyV2Yxr65i9EZG29QDBgtK1onDEiVi585SUPxu1WqIz69v%2BdsFxQJMXEAQkb7zzDLhDJiLLkRUNzVDbjRkGJvxbR6qwnzaWIsO%2BWLvKqgWyKJYJT8HQ9SPuSB0zDhGIVPjSGRSMnhxOSxfkeP34HDYqdF%2FUZbWmh8GRd4YOuixV7c9CnNNredHY13urJio6G%2BN%2F5BidXnoVYzKybkdt4v02Z6YoA9yR88zb141Tieta%2Buhd8Eyhvp1BGnQAKqupNZaJEAdlWVq5nt843Yi2t2k6OZHqTNejziTC8TsDCIMJmSGyQBFmwIR%2B6Vu5uEO2agpvmPPVBYcOnEPIeW5x9zM9Zt%2Byee6AVxVtqKtiHQsEnt9R8hszBv1uUAV33x2P5gNhotKZcVuKs2BQMWy4wx8TawQY6pgF740TvxqRwNg2NgLRaZ9BdHv94D5Ey1GVtXmWherpcf28od4600CqFdzFKqb7DUzGptWs5P%2Ff8MdkI2jij46t%2Bi2%2FDZo20ayAHGSFEaTr78w6B7ODl0bRg5phpChsWMzl8gzHPJvstzqFPzdFsWc5moCoSNvGhEXs9MbUO1%2FChdjjSTa4Vg%2F6OOSrNFSmURfpY7uVsGev2JV%2Fhk%2FccSg6gm63jndTe&X-Amz-Signature=34b1aa5b4e32fac54856135b53167d5659389fd79abfd56ed256829a139e7012&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCP7MO3N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5F4407jDfq1NqBBQ3R46Lq0qXEwWjSAb0xCtbYUKyzAiAbsTG0kEOUfFsmaIgwSeY%2FKyctkB0iOpVYvdnAZoyNXSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMKUPk%2FnxG95ypr%2BqJKtwDnQYdZorbVqvpKvSYbuCWLJlMp15XWeUmdg5Cqq513Khdwjs7q0u2tU%2FtEuJ1CkUQsSxWgjECWlJyHrULfw%2F%2FaZJZpBq9COMwh04KQNpvAYkwgapDGWrdGXQObwPyyGNsS3vSugCH5RFZKUxF2Te6EJ0ou6SVM829kI%2FC1B%2F3SDsX46q1hafkSL4s3PBgCHwTD2awClytlRoBqxM86AFdF8gHmLezOz4lKDB6B9WmHyV2Yxr65i9EZG29QDBgtK1onDEiVi585SUPxu1WqIz69v%2BdsFxQJMXEAQkb7zzDLhDJiLLkRUNzVDbjRkGJvxbR6qwnzaWIsO%2BWLvKqgWyKJYJT8HQ9SPuSB0zDhGIVPjSGRSMnhxOSxfkeP34HDYqdF%2FUZbWmh8GRd4YOuixV7c9CnNNredHY13urJio6G%2BN%2F5BidXnoVYzKybkdt4v02Z6YoA9yR88zb141Tieta%2Buhd8Eyhvp1BGnQAKqupNZaJEAdlWVq5nt843Yi2t2k6OZHqTNejziTC8TsDCIMJmSGyQBFmwIR%2B6Vu5uEO2agpvmPPVBYcOnEPIeW5x9zM9Zt%2Byee6AVxVtqKtiHQsEnt9R8hszBv1uUAV33x2P5gNhotKZcVuKs2BQMWy4wx8TawQY6pgF740TvxqRwNg2NgLRaZ9BdHv94D5Ey1GVtXmWherpcf28od4600CqFdzFKqb7DUzGptWs5P%2Ff8MdkI2jij46t%2Bi2%2FDZo20ayAHGSFEaTr78w6B7ODl0bRg5phpChsWMzl8gzHPJvstzqFPzdFsWc5moCoSNvGhEXs9MbUO1%2FChdjjSTa4Vg%2F6OOSrNFSmURfpY7uVsGev2JV%2Fhk%2FccSg6gm63jndTe&X-Amz-Signature=d30638763a41ad9b89653887da3fb117166de64fe2b87cf3eed7ff6426f24b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCP7MO3N%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5F4407jDfq1NqBBQ3R46Lq0qXEwWjSAb0xCtbYUKyzAiAbsTG0kEOUfFsmaIgwSeY%2FKyctkB0iOpVYvdnAZoyNXSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMKUPk%2FnxG95ypr%2BqJKtwDnQYdZorbVqvpKvSYbuCWLJlMp15XWeUmdg5Cqq513Khdwjs7q0u2tU%2FtEuJ1CkUQsSxWgjECWlJyHrULfw%2F%2FaZJZpBq9COMwh04KQNpvAYkwgapDGWrdGXQObwPyyGNsS3vSugCH5RFZKUxF2Te6EJ0ou6SVM829kI%2FC1B%2F3SDsX46q1hafkSL4s3PBgCHwTD2awClytlRoBqxM86AFdF8gHmLezOz4lKDB6B9WmHyV2Yxr65i9EZG29QDBgtK1onDEiVi585SUPxu1WqIz69v%2BdsFxQJMXEAQkb7zzDLhDJiLLkRUNzVDbjRkGJvxbR6qwnzaWIsO%2BWLvKqgWyKJYJT8HQ9SPuSB0zDhGIVPjSGRSMnhxOSxfkeP34HDYqdF%2FUZbWmh8GRd4YOuixV7c9CnNNredHY13urJio6G%2BN%2F5BidXnoVYzKybkdt4v02Z6YoA9yR88zb141Tieta%2Buhd8Eyhvp1BGnQAKqupNZaJEAdlWVq5nt843Yi2t2k6OZHqTNejziTC8TsDCIMJmSGyQBFmwIR%2B6Vu5uEO2agpvmPPVBYcOnEPIeW5x9zM9Zt%2Byee6AVxVtqKtiHQsEnt9R8hszBv1uUAV33x2P5gNhotKZcVuKs2BQMWy4wx8TawQY6pgF740TvxqRwNg2NgLRaZ9BdHv94D5Ey1GVtXmWherpcf28od4600CqFdzFKqb7DUzGptWs5P%2Ff8MdkI2jij46t%2Bi2%2FDZo20ayAHGSFEaTr78w6B7ODl0bRg5phpChsWMzl8gzHPJvstzqFPzdFsWc5moCoSNvGhEXs9MbUO1%2FChdjjSTa4Vg%2F6OOSrNFSmURfpY7uVsGev2JV%2Fhk%2FccSg6gm63jndTe&X-Amz-Signature=c957b677bd61fa7b6cbc0dd6d9a008d40d4ec898d5b8c58ec104aa7e297d523e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
