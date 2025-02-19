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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RO7WOC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGwXPK%2FgpF0l9I%2F40MxvtZlpnGghsNWAPQ8Xo5OB%2FuiiAiEA6Pcu6vGe7nEdJPu5OfvY409baPwk4DSEMGhLS1x5CXsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhcqp5b6xgVWL4uyrcAwfs%2BCPbt45ffk7s3oF44TdSneT4gruL%2B%2BC0ySE4OXpDiOgwNnzX%2FdfRx9lCnYteFMuuzkbBNSB%2F7m7ioDD5X5cNEUrkKQ5mNYZbL3eF20eODGUVKMJ%2B6KNYg5AW7uin1CBEunqJfnN1Y%2ByuEzKU71%2F3hXtmHeBRCo%2BL9Wv3gWGOCEHkRbJ6eh1zMww5fVqAPn1q20Wv%2FUxWXWdv4UCHR%2Bpoji0XOcCevSZ9qAtgLR90L3oYXrdtiFKaEhJQhQiWijPTLg5f11W5ulovM%2FmzMAtj2PN7MMoRxzt%2BBAzREtwzTvS7%2BtP2Dvzy7Nrgetdk4z09EeC0JEDlI5agJ8bUDgivf%2FJ5sN%2FcJisB9TGQ9MtM0MTfMWJ2FPZXJMREIgOFQCF0SgUNR8lXccdbWB%2F7Qt3A%2FQ0gGPGNHR3uEFUx4YM1AKJwgscCan5erjMBcA%2BZ40Bg7Y0lcEWKQTUfz8BQQpz%2B9aTy5Wec3YRG58Xri93d3qd%2FzqpK7gAbYwy8lH7Mjl5rHgBz5ZSJpEpj%2BVIV%2BhX7sVGxSZy7k5xqSHXFkDVJYO9y8Y%2FV70N4RRriyquz6Q9TsNYc15ep5ajZ24j9OGdiRQnm9FPhVPTn%2F1yCQzLQeBp2bOcxg1Px0Vx4MPv61r0GOqUBWaNnWjwksmYr%2FsjpTek8HSwkxraiy0qdNHZjv9v1K7G%2F4M6GogzB8RXnynDKZK1NSpn40N9L9MmLbMKnwvA780X8zTry5twpYWX0UuL4qQI0g4q1aUepocXEkLaDTfM96B0%2BOCaWlSiDHNixHb6C32xteau9dotWuQzcxj5sp2V6%2Fu2TYGBo3yiV7JbXHvOL9VPvM8OsqOBCrHSjXNZVhQxYUWlB&X-Amz-Signature=37bd818315826d08e635ca25011398444d124aa30ee1dafc4b73cb14e68d1cdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RO7WOC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGwXPK%2FgpF0l9I%2F40MxvtZlpnGghsNWAPQ8Xo5OB%2FuiiAiEA6Pcu6vGe7nEdJPu5OfvY409baPwk4DSEMGhLS1x5CXsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhcqp5b6xgVWL4uyrcAwfs%2BCPbt45ffk7s3oF44TdSneT4gruL%2B%2BC0ySE4OXpDiOgwNnzX%2FdfRx9lCnYteFMuuzkbBNSB%2F7m7ioDD5X5cNEUrkKQ5mNYZbL3eF20eODGUVKMJ%2B6KNYg5AW7uin1CBEunqJfnN1Y%2ByuEzKU71%2F3hXtmHeBRCo%2BL9Wv3gWGOCEHkRbJ6eh1zMww5fVqAPn1q20Wv%2FUxWXWdv4UCHR%2Bpoji0XOcCevSZ9qAtgLR90L3oYXrdtiFKaEhJQhQiWijPTLg5f11W5ulovM%2FmzMAtj2PN7MMoRxzt%2BBAzREtwzTvS7%2BtP2Dvzy7Nrgetdk4z09EeC0JEDlI5agJ8bUDgivf%2FJ5sN%2FcJisB9TGQ9MtM0MTfMWJ2FPZXJMREIgOFQCF0SgUNR8lXccdbWB%2F7Qt3A%2FQ0gGPGNHR3uEFUx4YM1AKJwgscCan5erjMBcA%2BZ40Bg7Y0lcEWKQTUfz8BQQpz%2B9aTy5Wec3YRG58Xri93d3qd%2FzqpK7gAbYwy8lH7Mjl5rHgBz5ZSJpEpj%2BVIV%2BhX7sVGxSZy7k5xqSHXFkDVJYO9y8Y%2FV70N4RRriyquz6Q9TsNYc15ep5ajZ24j9OGdiRQnm9FPhVPTn%2F1yCQzLQeBp2bOcxg1Px0Vx4MPv61r0GOqUBWaNnWjwksmYr%2FsjpTek8HSwkxraiy0qdNHZjv9v1K7G%2F4M6GogzB8RXnynDKZK1NSpn40N9L9MmLbMKnwvA780X8zTry5twpYWX0UuL4qQI0g4q1aUepocXEkLaDTfM96B0%2BOCaWlSiDHNixHb6C32xteau9dotWuQzcxj5sp2V6%2Fu2TYGBo3yiV7JbXHvOL9VPvM8OsqOBCrHSjXNZVhQxYUWlB&X-Amz-Signature=6645223be3ca1f2277e1beacceebec5345805eb57f664ebc438b6ce18343a1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RO7WOC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGwXPK%2FgpF0l9I%2F40MxvtZlpnGghsNWAPQ8Xo5OB%2FuiiAiEA6Pcu6vGe7nEdJPu5OfvY409baPwk4DSEMGhLS1x5CXsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhcqp5b6xgVWL4uyrcAwfs%2BCPbt45ffk7s3oF44TdSneT4gruL%2B%2BC0ySE4OXpDiOgwNnzX%2FdfRx9lCnYteFMuuzkbBNSB%2F7m7ioDD5X5cNEUrkKQ5mNYZbL3eF20eODGUVKMJ%2B6KNYg5AW7uin1CBEunqJfnN1Y%2ByuEzKU71%2F3hXtmHeBRCo%2BL9Wv3gWGOCEHkRbJ6eh1zMww5fVqAPn1q20Wv%2FUxWXWdv4UCHR%2Bpoji0XOcCevSZ9qAtgLR90L3oYXrdtiFKaEhJQhQiWijPTLg5f11W5ulovM%2FmzMAtj2PN7MMoRxzt%2BBAzREtwzTvS7%2BtP2Dvzy7Nrgetdk4z09EeC0JEDlI5agJ8bUDgivf%2FJ5sN%2FcJisB9TGQ9MtM0MTfMWJ2FPZXJMREIgOFQCF0SgUNR8lXccdbWB%2F7Qt3A%2FQ0gGPGNHR3uEFUx4YM1AKJwgscCan5erjMBcA%2BZ40Bg7Y0lcEWKQTUfz8BQQpz%2B9aTy5Wec3YRG58Xri93d3qd%2FzqpK7gAbYwy8lH7Mjl5rHgBz5ZSJpEpj%2BVIV%2BhX7sVGxSZy7k5xqSHXFkDVJYO9y8Y%2FV70N4RRriyquz6Q9TsNYc15ep5ajZ24j9OGdiRQnm9FPhVPTn%2F1yCQzLQeBp2bOcxg1Px0Vx4MPv61r0GOqUBWaNnWjwksmYr%2FsjpTek8HSwkxraiy0qdNHZjv9v1K7G%2F4M6GogzB8RXnynDKZK1NSpn40N9L9MmLbMKnwvA780X8zTry5twpYWX0UuL4qQI0g4q1aUepocXEkLaDTfM96B0%2BOCaWlSiDHNixHb6C32xteau9dotWuQzcxj5sp2V6%2Fu2TYGBo3yiV7JbXHvOL9VPvM8OsqOBCrHSjXNZVhQxYUWlB&X-Amz-Signature=32a866cc4d2a4dfb5869f7f97e3b420cafdbdbe19ac18e9245f45bcc7d9ac7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RO7WOC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGwXPK%2FgpF0l9I%2F40MxvtZlpnGghsNWAPQ8Xo5OB%2FuiiAiEA6Pcu6vGe7nEdJPu5OfvY409baPwk4DSEMGhLS1x5CXsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhcqp5b6xgVWL4uyrcAwfs%2BCPbt45ffk7s3oF44TdSneT4gruL%2B%2BC0ySE4OXpDiOgwNnzX%2FdfRx9lCnYteFMuuzkbBNSB%2F7m7ioDD5X5cNEUrkKQ5mNYZbL3eF20eODGUVKMJ%2B6KNYg5AW7uin1CBEunqJfnN1Y%2ByuEzKU71%2F3hXtmHeBRCo%2BL9Wv3gWGOCEHkRbJ6eh1zMww5fVqAPn1q20Wv%2FUxWXWdv4UCHR%2Bpoji0XOcCevSZ9qAtgLR90L3oYXrdtiFKaEhJQhQiWijPTLg5f11W5ulovM%2FmzMAtj2PN7MMoRxzt%2BBAzREtwzTvS7%2BtP2Dvzy7Nrgetdk4z09EeC0JEDlI5agJ8bUDgivf%2FJ5sN%2FcJisB9TGQ9MtM0MTfMWJ2FPZXJMREIgOFQCF0SgUNR8lXccdbWB%2F7Qt3A%2FQ0gGPGNHR3uEFUx4YM1AKJwgscCan5erjMBcA%2BZ40Bg7Y0lcEWKQTUfz8BQQpz%2B9aTy5Wec3YRG58Xri93d3qd%2FzqpK7gAbYwy8lH7Mjl5rHgBz5ZSJpEpj%2BVIV%2BhX7sVGxSZy7k5xqSHXFkDVJYO9y8Y%2FV70N4RRriyquz6Q9TsNYc15ep5ajZ24j9OGdiRQnm9FPhVPTn%2F1yCQzLQeBp2bOcxg1Px0Vx4MPv61r0GOqUBWaNnWjwksmYr%2FsjpTek8HSwkxraiy0qdNHZjv9v1K7G%2F4M6GogzB8RXnynDKZK1NSpn40N9L9MmLbMKnwvA780X8zTry5twpYWX0UuL4qQI0g4q1aUepocXEkLaDTfM96B0%2BOCaWlSiDHNixHb6C32xteau9dotWuQzcxj5sp2V6%2Fu2TYGBo3yiV7JbXHvOL9VPvM8OsqOBCrHSjXNZVhQxYUWlB&X-Amz-Signature=bb75d9a559571d6a1ee6ec27a7b82dfd1b183c3059d3ec911a56b5eeb7b02c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RO7WOC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGwXPK%2FgpF0l9I%2F40MxvtZlpnGghsNWAPQ8Xo5OB%2FuiiAiEA6Pcu6vGe7nEdJPu5OfvY409baPwk4DSEMGhLS1x5CXsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhcqp5b6xgVWL4uyrcAwfs%2BCPbt45ffk7s3oF44TdSneT4gruL%2B%2BC0ySE4OXpDiOgwNnzX%2FdfRx9lCnYteFMuuzkbBNSB%2F7m7ioDD5X5cNEUrkKQ5mNYZbL3eF20eODGUVKMJ%2B6KNYg5AW7uin1CBEunqJfnN1Y%2ByuEzKU71%2F3hXtmHeBRCo%2BL9Wv3gWGOCEHkRbJ6eh1zMww5fVqAPn1q20Wv%2FUxWXWdv4UCHR%2Bpoji0XOcCevSZ9qAtgLR90L3oYXrdtiFKaEhJQhQiWijPTLg5f11W5ulovM%2FmzMAtj2PN7MMoRxzt%2BBAzREtwzTvS7%2BtP2Dvzy7Nrgetdk4z09EeC0JEDlI5agJ8bUDgivf%2FJ5sN%2FcJisB9TGQ9MtM0MTfMWJ2FPZXJMREIgOFQCF0SgUNR8lXccdbWB%2F7Qt3A%2FQ0gGPGNHR3uEFUx4YM1AKJwgscCan5erjMBcA%2BZ40Bg7Y0lcEWKQTUfz8BQQpz%2B9aTy5Wec3YRG58Xri93d3qd%2FzqpK7gAbYwy8lH7Mjl5rHgBz5ZSJpEpj%2BVIV%2BhX7sVGxSZy7k5xqSHXFkDVJYO9y8Y%2FV70N4RRriyquz6Q9TsNYc15ep5ajZ24j9OGdiRQnm9FPhVPTn%2F1yCQzLQeBp2bOcxg1Px0Vx4MPv61r0GOqUBWaNnWjwksmYr%2FsjpTek8HSwkxraiy0qdNHZjv9v1K7G%2F4M6GogzB8RXnynDKZK1NSpn40N9L9MmLbMKnwvA780X8zTry5twpYWX0UuL4qQI0g4q1aUepocXEkLaDTfM96B0%2BOCaWlSiDHNixHb6C32xteau9dotWuQzcxj5sp2V6%2Fu2TYGBo3yiV7JbXHvOL9VPvM8OsqOBCrHSjXNZVhQxYUWlB&X-Amz-Signature=e181056dcef719c091a957e57897409fc7ce6035b3c9c6a4286e2fc9d4f12597&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RO7WOC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGwXPK%2FgpF0l9I%2F40MxvtZlpnGghsNWAPQ8Xo5OB%2FuiiAiEA6Pcu6vGe7nEdJPu5OfvY409baPwk4DSEMGhLS1x5CXsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhcqp5b6xgVWL4uyrcAwfs%2BCPbt45ffk7s3oF44TdSneT4gruL%2B%2BC0ySE4OXpDiOgwNnzX%2FdfRx9lCnYteFMuuzkbBNSB%2F7m7ioDD5X5cNEUrkKQ5mNYZbL3eF20eODGUVKMJ%2B6KNYg5AW7uin1CBEunqJfnN1Y%2ByuEzKU71%2F3hXtmHeBRCo%2BL9Wv3gWGOCEHkRbJ6eh1zMww5fVqAPn1q20Wv%2FUxWXWdv4UCHR%2Bpoji0XOcCevSZ9qAtgLR90L3oYXrdtiFKaEhJQhQiWijPTLg5f11W5ulovM%2FmzMAtj2PN7MMoRxzt%2BBAzREtwzTvS7%2BtP2Dvzy7Nrgetdk4z09EeC0JEDlI5agJ8bUDgivf%2FJ5sN%2FcJisB9TGQ9MtM0MTfMWJ2FPZXJMREIgOFQCF0SgUNR8lXccdbWB%2F7Qt3A%2FQ0gGPGNHR3uEFUx4YM1AKJwgscCan5erjMBcA%2BZ40Bg7Y0lcEWKQTUfz8BQQpz%2B9aTy5Wec3YRG58Xri93d3qd%2FzqpK7gAbYwy8lH7Mjl5rHgBz5ZSJpEpj%2BVIV%2BhX7sVGxSZy7k5xqSHXFkDVJYO9y8Y%2FV70N4RRriyquz6Q9TsNYc15ep5ajZ24j9OGdiRQnm9FPhVPTn%2F1yCQzLQeBp2bOcxg1Px0Vx4MPv61r0GOqUBWaNnWjwksmYr%2FsjpTek8HSwkxraiy0qdNHZjv9v1K7G%2F4M6GogzB8RXnynDKZK1NSpn40N9L9MmLbMKnwvA780X8zTry5twpYWX0UuL4qQI0g4q1aUepocXEkLaDTfM96B0%2BOCaWlSiDHNixHb6C32xteau9dotWuQzcxj5sp2V6%2Fu2TYGBo3yiV7JbXHvOL9VPvM8OsqOBCrHSjXNZVhQxYUWlB&X-Amz-Signature=4621e3fe1db0eb482bba2f7bd2b284a0da2b9c50a5155a257c7e35b39c2de7f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RO7WOC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGwXPK%2FgpF0l9I%2F40MxvtZlpnGghsNWAPQ8Xo5OB%2FuiiAiEA6Pcu6vGe7nEdJPu5OfvY409baPwk4DSEMGhLS1x5CXsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhcqp5b6xgVWL4uyrcAwfs%2BCPbt45ffk7s3oF44TdSneT4gruL%2B%2BC0ySE4OXpDiOgwNnzX%2FdfRx9lCnYteFMuuzkbBNSB%2F7m7ioDD5X5cNEUrkKQ5mNYZbL3eF20eODGUVKMJ%2B6KNYg5AW7uin1CBEunqJfnN1Y%2ByuEzKU71%2F3hXtmHeBRCo%2BL9Wv3gWGOCEHkRbJ6eh1zMww5fVqAPn1q20Wv%2FUxWXWdv4UCHR%2Bpoji0XOcCevSZ9qAtgLR90L3oYXrdtiFKaEhJQhQiWijPTLg5f11W5ulovM%2FmzMAtj2PN7MMoRxzt%2BBAzREtwzTvS7%2BtP2Dvzy7Nrgetdk4z09EeC0JEDlI5agJ8bUDgivf%2FJ5sN%2FcJisB9TGQ9MtM0MTfMWJ2FPZXJMREIgOFQCF0SgUNR8lXccdbWB%2F7Qt3A%2FQ0gGPGNHR3uEFUx4YM1AKJwgscCan5erjMBcA%2BZ40Bg7Y0lcEWKQTUfz8BQQpz%2B9aTy5Wec3YRG58Xri93d3qd%2FzqpK7gAbYwy8lH7Mjl5rHgBz5ZSJpEpj%2BVIV%2BhX7sVGxSZy7k5xqSHXFkDVJYO9y8Y%2FV70N4RRriyquz6Q9TsNYc15ep5ajZ24j9OGdiRQnm9FPhVPTn%2F1yCQzLQeBp2bOcxg1Px0Vx4MPv61r0GOqUBWaNnWjwksmYr%2FsjpTek8HSwkxraiy0qdNHZjv9v1K7G%2F4M6GogzB8RXnynDKZK1NSpn40N9L9MmLbMKnwvA780X8zTry5twpYWX0UuL4qQI0g4q1aUepocXEkLaDTfM96B0%2BOCaWlSiDHNixHb6C32xteau9dotWuQzcxj5sp2V6%2Fu2TYGBo3yiV7JbXHvOL9VPvM8OsqOBCrHSjXNZVhQxYUWlB&X-Amz-Signature=7c662f253c4932c3ef2500310bc253f0e5da82643d3b9d2cd140e1bd656c3cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2RO7WOC%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGwXPK%2FgpF0l9I%2F40MxvtZlpnGghsNWAPQ8Xo5OB%2FuiiAiEA6Pcu6vGe7nEdJPu5OfvY409baPwk4DSEMGhLS1x5CXsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwhcqp5b6xgVWL4uyrcAwfs%2BCPbt45ffk7s3oF44TdSneT4gruL%2B%2BC0ySE4OXpDiOgwNnzX%2FdfRx9lCnYteFMuuzkbBNSB%2F7m7ioDD5X5cNEUrkKQ5mNYZbL3eF20eODGUVKMJ%2B6KNYg5AW7uin1CBEunqJfnN1Y%2ByuEzKU71%2F3hXtmHeBRCo%2BL9Wv3gWGOCEHkRbJ6eh1zMww5fVqAPn1q20Wv%2FUxWXWdv4UCHR%2Bpoji0XOcCevSZ9qAtgLR90L3oYXrdtiFKaEhJQhQiWijPTLg5f11W5ulovM%2FmzMAtj2PN7MMoRxzt%2BBAzREtwzTvS7%2BtP2Dvzy7Nrgetdk4z09EeC0JEDlI5agJ8bUDgivf%2FJ5sN%2FcJisB9TGQ9MtM0MTfMWJ2FPZXJMREIgOFQCF0SgUNR8lXccdbWB%2F7Qt3A%2FQ0gGPGNHR3uEFUx4YM1AKJwgscCan5erjMBcA%2BZ40Bg7Y0lcEWKQTUfz8BQQpz%2B9aTy5Wec3YRG58Xri93d3qd%2FzqpK7gAbYwy8lH7Mjl5rHgBz5ZSJpEpj%2BVIV%2BhX7sVGxSZy7k5xqSHXFkDVJYO9y8Y%2FV70N4RRriyquz6Q9TsNYc15ep5ajZ24j9OGdiRQnm9FPhVPTn%2F1yCQzLQeBp2bOcxg1Px0Vx4MPv61r0GOqUBWaNnWjwksmYr%2FsjpTek8HSwkxraiy0qdNHZjv9v1K7G%2F4M6GogzB8RXnynDKZK1NSpn40N9L9MmLbMKnwvA780X8zTry5twpYWX0UuL4qQI0g4q1aUepocXEkLaDTfM96B0%2BOCaWlSiDHNixHb6C32xteau9dotWuQzcxj5sp2V6%2Fu2TYGBo3yiV7JbXHvOL9VPvM8OsqOBCrHSjXNZVhQxYUWlB&X-Amz-Signature=f208804538e28872785585ebba5c3778eae4551ec4293f51494680bd4b5c459a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
