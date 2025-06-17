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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU4ARSV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdKtAW46UTqwWyD4jskHctvUY3VEbTCHL6PviLDVFFWAiBrgVkRPhFsJB8OGyBzWh2KGn2WaMTG4vnrBGF1l1cJQCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdPRwoj%2F1rgqlfIzYKtwDDorzluaambHcaD22dmTfL9c6UuyHeGG4jVFyTa9Vd9K0p2Yt8g2mBzpM78Der8REBJw21g551bGZ9RcvJ7gNa3R616q8pFhLkOpiAqYoJLQeAmC1EdFbBm7lxBHanHLA7lqvIwCxhZrhHSDZCA%2BX0pxvKmMxpZvwQw8c4Fk5GZT%2BSByvUsfY%2F09S0uDag1z%2B2DADiR9UANlQNHKJXWnsAHuS86XDJr%2Bm7TZ%2BtPoC7K6v5pNSTeH4TNcO2jiN%2Bf%2BXVDLHwhocY%2F0tNlqL0tqEmWgeFwWon5zlFeBBZLmj%2Br%2F%2FApAfsvLVIo4lqmd%2BrQ6KmjE414i4itm4IjESDe9XuXUffLXRZ8B6%2FKlwN%2FGE37Y3kW2gGeGlXLW0H4iDpLNO%2B9mGnpTOa7G7phy0NHakM5j2EIODTUx0U%2BcXtP%2BjojuEkCsfYq5h9rVR96K%2Fm8sFBBaKbrALwVgeihmW5zgd6hvt%2FO3sGbpCcg3tMOUkKaYjQ87%2BUnH46Q2FIf1Zhyj9kFAbfz3pYfllHpCOr4Rd5PNAAWRWjyXwEJsSVv4JK1b8MHbOaXvwH72C%2FZ%2FINr1JBuBmF0LS7TaOSIYCx%2FNINhURmz5FzZUGw4Y10EEeT%2FLcEcbrYkIuc7u79lcw4qbFwgY6pgF9V8LTvo2r%2FivqHBO831W%2BTZlvEk8CqFfnmFvgmrwrvhajaYzzwhyCxs9jkIysGKDDza8CsuHqZpFpss9z%2FFK4oxv74bfLIFWXYJwbMwhbDDf2Fg0yKxat%2FvJyUYuWMVeyDe2geNpPddzzgGqctw1hO1n3V5BUvEVLC%2FC9f69QijuPDAC1Pyv6qw7%2BdbpBkGA%2BySHWV%2Be1nabc3zTZUfU6A8Y%2BrRWh&X-Amz-Signature=4b8cc66411a8fde9c208e5b7c052b2ca347e5c2082271b7d04a2920a0c42b9de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU4ARSV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdKtAW46UTqwWyD4jskHctvUY3VEbTCHL6PviLDVFFWAiBrgVkRPhFsJB8OGyBzWh2KGn2WaMTG4vnrBGF1l1cJQCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdPRwoj%2F1rgqlfIzYKtwDDorzluaambHcaD22dmTfL9c6UuyHeGG4jVFyTa9Vd9K0p2Yt8g2mBzpM78Der8REBJw21g551bGZ9RcvJ7gNa3R616q8pFhLkOpiAqYoJLQeAmC1EdFbBm7lxBHanHLA7lqvIwCxhZrhHSDZCA%2BX0pxvKmMxpZvwQw8c4Fk5GZT%2BSByvUsfY%2F09S0uDag1z%2B2DADiR9UANlQNHKJXWnsAHuS86XDJr%2Bm7TZ%2BtPoC7K6v5pNSTeH4TNcO2jiN%2Bf%2BXVDLHwhocY%2F0tNlqL0tqEmWgeFwWon5zlFeBBZLmj%2Br%2F%2FApAfsvLVIo4lqmd%2BrQ6KmjE414i4itm4IjESDe9XuXUffLXRZ8B6%2FKlwN%2FGE37Y3kW2gGeGlXLW0H4iDpLNO%2B9mGnpTOa7G7phy0NHakM5j2EIODTUx0U%2BcXtP%2BjojuEkCsfYq5h9rVR96K%2Fm8sFBBaKbrALwVgeihmW5zgd6hvt%2FO3sGbpCcg3tMOUkKaYjQ87%2BUnH46Q2FIf1Zhyj9kFAbfz3pYfllHpCOr4Rd5PNAAWRWjyXwEJsSVv4JK1b8MHbOaXvwH72C%2FZ%2FINr1JBuBmF0LS7TaOSIYCx%2FNINhURmz5FzZUGw4Y10EEeT%2FLcEcbrYkIuc7u79lcw4qbFwgY6pgF9V8LTvo2r%2FivqHBO831W%2BTZlvEk8CqFfnmFvgmrwrvhajaYzzwhyCxs9jkIysGKDDza8CsuHqZpFpss9z%2FFK4oxv74bfLIFWXYJwbMwhbDDf2Fg0yKxat%2FvJyUYuWMVeyDe2geNpPddzzgGqctw1hO1n3V5BUvEVLC%2FC9f69QijuPDAC1Pyv6qw7%2BdbpBkGA%2BySHWV%2Be1nabc3zTZUfU6A8Y%2BrRWh&X-Amz-Signature=2f1e062c7f33b64256daa070aa2221945dac98dc8571d674d59ae6ebb3c22954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU4ARSV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdKtAW46UTqwWyD4jskHctvUY3VEbTCHL6PviLDVFFWAiBrgVkRPhFsJB8OGyBzWh2KGn2WaMTG4vnrBGF1l1cJQCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdPRwoj%2F1rgqlfIzYKtwDDorzluaambHcaD22dmTfL9c6UuyHeGG4jVFyTa9Vd9K0p2Yt8g2mBzpM78Der8REBJw21g551bGZ9RcvJ7gNa3R616q8pFhLkOpiAqYoJLQeAmC1EdFbBm7lxBHanHLA7lqvIwCxhZrhHSDZCA%2BX0pxvKmMxpZvwQw8c4Fk5GZT%2BSByvUsfY%2F09S0uDag1z%2B2DADiR9UANlQNHKJXWnsAHuS86XDJr%2Bm7TZ%2BtPoC7K6v5pNSTeH4TNcO2jiN%2Bf%2BXVDLHwhocY%2F0tNlqL0tqEmWgeFwWon5zlFeBBZLmj%2Br%2F%2FApAfsvLVIo4lqmd%2BrQ6KmjE414i4itm4IjESDe9XuXUffLXRZ8B6%2FKlwN%2FGE37Y3kW2gGeGlXLW0H4iDpLNO%2B9mGnpTOa7G7phy0NHakM5j2EIODTUx0U%2BcXtP%2BjojuEkCsfYq5h9rVR96K%2Fm8sFBBaKbrALwVgeihmW5zgd6hvt%2FO3sGbpCcg3tMOUkKaYjQ87%2BUnH46Q2FIf1Zhyj9kFAbfz3pYfllHpCOr4Rd5PNAAWRWjyXwEJsSVv4JK1b8MHbOaXvwH72C%2FZ%2FINr1JBuBmF0LS7TaOSIYCx%2FNINhURmz5FzZUGw4Y10EEeT%2FLcEcbrYkIuc7u79lcw4qbFwgY6pgF9V8LTvo2r%2FivqHBO831W%2BTZlvEk8CqFfnmFvgmrwrvhajaYzzwhyCxs9jkIysGKDDza8CsuHqZpFpss9z%2FFK4oxv74bfLIFWXYJwbMwhbDDf2Fg0yKxat%2FvJyUYuWMVeyDe2geNpPddzzgGqctw1hO1n3V5BUvEVLC%2FC9f69QijuPDAC1Pyv6qw7%2BdbpBkGA%2BySHWV%2Be1nabc3zTZUfU6A8Y%2BrRWh&X-Amz-Signature=bf07096f866a5a090a07dd84df786c30536364c43b8dd9f6485ca2e84f66c8ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU4ARSV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdKtAW46UTqwWyD4jskHctvUY3VEbTCHL6PviLDVFFWAiBrgVkRPhFsJB8OGyBzWh2KGn2WaMTG4vnrBGF1l1cJQCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdPRwoj%2F1rgqlfIzYKtwDDorzluaambHcaD22dmTfL9c6UuyHeGG4jVFyTa9Vd9K0p2Yt8g2mBzpM78Der8REBJw21g551bGZ9RcvJ7gNa3R616q8pFhLkOpiAqYoJLQeAmC1EdFbBm7lxBHanHLA7lqvIwCxhZrhHSDZCA%2BX0pxvKmMxpZvwQw8c4Fk5GZT%2BSByvUsfY%2F09S0uDag1z%2B2DADiR9UANlQNHKJXWnsAHuS86XDJr%2Bm7TZ%2BtPoC7K6v5pNSTeH4TNcO2jiN%2Bf%2BXVDLHwhocY%2F0tNlqL0tqEmWgeFwWon5zlFeBBZLmj%2Br%2F%2FApAfsvLVIo4lqmd%2BrQ6KmjE414i4itm4IjESDe9XuXUffLXRZ8B6%2FKlwN%2FGE37Y3kW2gGeGlXLW0H4iDpLNO%2B9mGnpTOa7G7phy0NHakM5j2EIODTUx0U%2BcXtP%2BjojuEkCsfYq5h9rVR96K%2Fm8sFBBaKbrALwVgeihmW5zgd6hvt%2FO3sGbpCcg3tMOUkKaYjQ87%2BUnH46Q2FIf1Zhyj9kFAbfz3pYfllHpCOr4Rd5PNAAWRWjyXwEJsSVv4JK1b8MHbOaXvwH72C%2FZ%2FINr1JBuBmF0LS7TaOSIYCx%2FNINhURmz5FzZUGw4Y10EEeT%2FLcEcbrYkIuc7u79lcw4qbFwgY6pgF9V8LTvo2r%2FivqHBO831W%2BTZlvEk8CqFfnmFvgmrwrvhajaYzzwhyCxs9jkIysGKDDza8CsuHqZpFpss9z%2FFK4oxv74bfLIFWXYJwbMwhbDDf2Fg0yKxat%2FvJyUYuWMVeyDe2geNpPddzzgGqctw1hO1n3V5BUvEVLC%2FC9f69QijuPDAC1Pyv6qw7%2BdbpBkGA%2BySHWV%2Be1nabc3zTZUfU6A8Y%2BrRWh&X-Amz-Signature=cf2ca03bead9ab7689f4b671b13d68b5402ddebb94dc5d805c68500753d3c65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU4ARSV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdKtAW46UTqwWyD4jskHctvUY3VEbTCHL6PviLDVFFWAiBrgVkRPhFsJB8OGyBzWh2KGn2WaMTG4vnrBGF1l1cJQCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdPRwoj%2F1rgqlfIzYKtwDDorzluaambHcaD22dmTfL9c6UuyHeGG4jVFyTa9Vd9K0p2Yt8g2mBzpM78Der8REBJw21g551bGZ9RcvJ7gNa3R616q8pFhLkOpiAqYoJLQeAmC1EdFbBm7lxBHanHLA7lqvIwCxhZrhHSDZCA%2BX0pxvKmMxpZvwQw8c4Fk5GZT%2BSByvUsfY%2F09S0uDag1z%2B2DADiR9UANlQNHKJXWnsAHuS86XDJr%2Bm7TZ%2BtPoC7K6v5pNSTeH4TNcO2jiN%2Bf%2BXVDLHwhocY%2F0tNlqL0tqEmWgeFwWon5zlFeBBZLmj%2Br%2F%2FApAfsvLVIo4lqmd%2BrQ6KmjE414i4itm4IjESDe9XuXUffLXRZ8B6%2FKlwN%2FGE37Y3kW2gGeGlXLW0H4iDpLNO%2B9mGnpTOa7G7phy0NHakM5j2EIODTUx0U%2BcXtP%2BjojuEkCsfYq5h9rVR96K%2Fm8sFBBaKbrALwVgeihmW5zgd6hvt%2FO3sGbpCcg3tMOUkKaYjQ87%2BUnH46Q2FIf1Zhyj9kFAbfz3pYfllHpCOr4Rd5PNAAWRWjyXwEJsSVv4JK1b8MHbOaXvwH72C%2FZ%2FINr1JBuBmF0LS7TaOSIYCx%2FNINhURmz5FzZUGw4Y10EEeT%2FLcEcbrYkIuc7u79lcw4qbFwgY6pgF9V8LTvo2r%2FivqHBO831W%2BTZlvEk8CqFfnmFvgmrwrvhajaYzzwhyCxs9jkIysGKDDza8CsuHqZpFpss9z%2FFK4oxv74bfLIFWXYJwbMwhbDDf2Fg0yKxat%2FvJyUYuWMVeyDe2geNpPddzzgGqctw1hO1n3V5BUvEVLC%2FC9f69QijuPDAC1Pyv6qw7%2BdbpBkGA%2BySHWV%2Be1nabc3zTZUfU6A8Y%2BrRWh&X-Amz-Signature=3e06a4a6ed528a9185288719d3b1f4bc70a241775fa648c15ee9edf1ded6d1ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU4ARSV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdKtAW46UTqwWyD4jskHctvUY3VEbTCHL6PviLDVFFWAiBrgVkRPhFsJB8OGyBzWh2KGn2WaMTG4vnrBGF1l1cJQCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdPRwoj%2F1rgqlfIzYKtwDDorzluaambHcaD22dmTfL9c6UuyHeGG4jVFyTa9Vd9K0p2Yt8g2mBzpM78Der8REBJw21g551bGZ9RcvJ7gNa3R616q8pFhLkOpiAqYoJLQeAmC1EdFbBm7lxBHanHLA7lqvIwCxhZrhHSDZCA%2BX0pxvKmMxpZvwQw8c4Fk5GZT%2BSByvUsfY%2F09S0uDag1z%2B2DADiR9UANlQNHKJXWnsAHuS86XDJr%2Bm7TZ%2BtPoC7K6v5pNSTeH4TNcO2jiN%2Bf%2BXVDLHwhocY%2F0tNlqL0tqEmWgeFwWon5zlFeBBZLmj%2Br%2F%2FApAfsvLVIo4lqmd%2BrQ6KmjE414i4itm4IjESDe9XuXUffLXRZ8B6%2FKlwN%2FGE37Y3kW2gGeGlXLW0H4iDpLNO%2B9mGnpTOa7G7phy0NHakM5j2EIODTUx0U%2BcXtP%2BjojuEkCsfYq5h9rVR96K%2Fm8sFBBaKbrALwVgeihmW5zgd6hvt%2FO3sGbpCcg3tMOUkKaYjQ87%2BUnH46Q2FIf1Zhyj9kFAbfz3pYfllHpCOr4Rd5PNAAWRWjyXwEJsSVv4JK1b8MHbOaXvwH72C%2FZ%2FINr1JBuBmF0LS7TaOSIYCx%2FNINhURmz5FzZUGw4Y10EEeT%2FLcEcbrYkIuc7u79lcw4qbFwgY6pgF9V8LTvo2r%2FivqHBO831W%2BTZlvEk8CqFfnmFvgmrwrvhajaYzzwhyCxs9jkIysGKDDza8CsuHqZpFpss9z%2FFK4oxv74bfLIFWXYJwbMwhbDDf2Fg0yKxat%2FvJyUYuWMVeyDe2geNpPddzzgGqctw1hO1n3V5BUvEVLC%2FC9f69QijuPDAC1Pyv6qw7%2BdbpBkGA%2BySHWV%2Be1nabc3zTZUfU6A8Y%2BrRWh&X-Amz-Signature=c5607ea7d169003223829d931dd4d8ca865e52b587e6001cdd5491eb27acfcda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU4ARSV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdKtAW46UTqwWyD4jskHctvUY3VEbTCHL6PviLDVFFWAiBrgVkRPhFsJB8OGyBzWh2KGn2WaMTG4vnrBGF1l1cJQCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdPRwoj%2F1rgqlfIzYKtwDDorzluaambHcaD22dmTfL9c6UuyHeGG4jVFyTa9Vd9K0p2Yt8g2mBzpM78Der8REBJw21g551bGZ9RcvJ7gNa3R616q8pFhLkOpiAqYoJLQeAmC1EdFbBm7lxBHanHLA7lqvIwCxhZrhHSDZCA%2BX0pxvKmMxpZvwQw8c4Fk5GZT%2BSByvUsfY%2F09S0uDag1z%2B2DADiR9UANlQNHKJXWnsAHuS86XDJr%2Bm7TZ%2BtPoC7K6v5pNSTeH4TNcO2jiN%2Bf%2BXVDLHwhocY%2F0tNlqL0tqEmWgeFwWon5zlFeBBZLmj%2Br%2F%2FApAfsvLVIo4lqmd%2BrQ6KmjE414i4itm4IjESDe9XuXUffLXRZ8B6%2FKlwN%2FGE37Y3kW2gGeGlXLW0H4iDpLNO%2B9mGnpTOa7G7phy0NHakM5j2EIODTUx0U%2BcXtP%2BjojuEkCsfYq5h9rVR96K%2Fm8sFBBaKbrALwVgeihmW5zgd6hvt%2FO3sGbpCcg3tMOUkKaYjQ87%2BUnH46Q2FIf1Zhyj9kFAbfz3pYfllHpCOr4Rd5PNAAWRWjyXwEJsSVv4JK1b8MHbOaXvwH72C%2FZ%2FINr1JBuBmF0LS7TaOSIYCx%2FNINhURmz5FzZUGw4Y10EEeT%2FLcEcbrYkIuc7u79lcw4qbFwgY6pgF9V8LTvo2r%2FivqHBO831W%2BTZlvEk8CqFfnmFvgmrwrvhajaYzzwhyCxs9jkIysGKDDza8CsuHqZpFpss9z%2FFK4oxv74bfLIFWXYJwbMwhbDDf2Fg0yKxat%2FvJyUYuWMVeyDe2geNpPddzzgGqctw1hO1n3V5BUvEVLC%2FC9f69QijuPDAC1Pyv6qw7%2BdbpBkGA%2BySHWV%2Be1nabc3zTZUfU6A8Y%2BrRWh&X-Amz-Signature=e6bd40e79b15ba1c09a67d4ae6be6bd8b3b284707fba1feb22721e2fa1f6ae6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHU4ARSV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T161105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdKtAW46UTqwWyD4jskHctvUY3VEbTCHL6PviLDVFFWAiBrgVkRPhFsJB8OGyBzWh2KGn2WaMTG4vnrBGF1l1cJQCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMdPRwoj%2F1rgqlfIzYKtwDDorzluaambHcaD22dmTfL9c6UuyHeGG4jVFyTa9Vd9K0p2Yt8g2mBzpM78Der8REBJw21g551bGZ9RcvJ7gNa3R616q8pFhLkOpiAqYoJLQeAmC1EdFbBm7lxBHanHLA7lqvIwCxhZrhHSDZCA%2BX0pxvKmMxpZvwQw8c4Fk5GZT%2BSByvUsfY%2F09S0uDag1z%2B2DADiR9UANlQNHKJXWnsAHuS86XDJr%2Bm7TZ%2BtPoC7K6v5pNSTeH4TNcO2jiN%2Bf%2BXVDLHwhocY%2F0tNlqL0tqEmWgeFwWon5zlFeBBZLmj%2Br%2F%2FApAfsvLVIo4lqmd%2BrQ6KmjE414i4itm4IjESDe9XuXUffLXRZ8B6%2FKlwN%2FGE37Y3kW2gGeGlXLW0H4iDpLNO%2B9mGnpTOa7G7phy0NHakM5j2EIODTUx0U%2BcXtP%2BjojuEkCsfYq5h9rVR96K%2Fm8sFBBaKbrALwVgeihmW5zgd6hvt%2FO3sGbpCcg3tMOUkKaYjQ87%2BUnH46Q2FIf1Zhyj9kFAbfz3pYfllHpCOr4Rd5PNAAWRWjyXwEJsSVv4JK1b8MHbOaXvwH72C%2FZ%2FINr1JBuBmF0LS7TaOSIYCx%2FNINhURmz5FzZUGw4Y10EEeT%2FLcEcbrYkIuc7u79lcw4qbFwgY6pgF9V8LTvo2r%2FivqHBO831W%2BTZlvEk8CqFfnmFvgmrwrvhajaYzzwhyCxs9jkIysGKDDza8CsuHqZpFpss9z%2FFK4oxv74bfLIFWXYJwbMwhbDDf2Fg0yKxat%2FvJyUYuWMVeyDe2geNpPddzzgGqctw1hO1n3V5BUvEVLC%2FC9f69QijuPDAC1Pyv6qw7%2BdbpBkGA%2BySHWV%2Be1nabc3zTZUfU6A8Y%2BrRWh&X-Amz-Signature=53c6aed1fe759dcbfac0e8efff98924e4ce611e3ac0c2895f02e08ded54cf9b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
