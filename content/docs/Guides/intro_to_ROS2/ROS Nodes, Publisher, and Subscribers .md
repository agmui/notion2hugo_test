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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N62CCDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBCvZZmGIqt0%2FjWoD6mopXyR6HMu05RbAbyJGE8r1lFtAiB7bM9oeKdwYMQcX93AHlytg%2FlZu2NTxxpC%2BXl6bjZ%2FWSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMRk4UA7PsRyNP%2Bi3%2FKtwDmR8sGZmClTYBbauA6zTr%2BgPOvc1wtxgzjj6gPK%2FBVinq%2Bq0BtcagDTpb0Id3CcW94euJkslfnGkKFWHMcJHBDiNMcy5PaOTM%2F41Qjoym1Lf6hecwhCS1SVzGnBo5KCFQ2Vyb73Kk0J5Ud61h2ulUR%2BczR%2BDdJCurDhHr1DqeRO69Nv8CipzZrt0LRWnKUW%2BmgaDgi8bl9S0tDcaqj46oqvPfrmOjNA5GOiZejpzGDsb1ki5uQu4KpBc4kAbSahmIk9A4WR92zaU%2By7vSEZF%2FbYkWNlLjxvz26WCI3bVl%2BWuVjaXaetR0Vr7dQWzhJC75qVyGHYpG78PbSYKHJM6xaZSpxXDW7ZRQWYWMQ1GL5w67buiRNLwfkbyEunvjOmvMs9i74N%2BTK%2Bw%2BP%2BrShtfeYAp%2BBeiX3uXCLFx9%2FBWG998ADqTCoEq0MTYSvuZnDDw%2BMw9ec1pF8k5XSWQ5PaJfWQVnA2glX53rEOduNhUtNh%2FtnWINO%2BLfuSz0vX9cM6rzGmTsgo9BCIs53CAS0zZ9ja7S%2BUSnvYqcYsn0yDt3CPqgsVcN27LViB5e4yWw7fWQRkfLHIkRU9%2Fc5ssB6Y8vmU6Cr3YUzHY1bUeHTdzNAJy7DYpR%2BWGtugxgIvcwuMGtwwY6pgEH9ur%2BDWr8Ai2jprSeDnbTC%2BglQPnnNJWEO1IQCm2AnKIh5hpiF3LCGOoTD05b%2Fk92t3e557XeuEHo246KbrIXyziX3DxqdFVb09EzUiBx86cU8RG5KgNEZrTsQm9yhADp9MN8SZfG4p5ZQ673Wra75Fmrh88AKxgUOETfbzXMbkOSKjFqA0jggf4ZollzDcVSZUaZJ04hhH6YfsqFpOgFkFiLps%2BQ&X-Amz-Signature=51dd583c60c7fc18597d92e338d779ddf4c01769a8d847dc85c86e23ea029fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N62CCDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBCvZZmGIqt0%2FjWoD6mopXyR6HMu05RbAbyJGE8r1lFtAiB7bM9oeKdwYMQcX93AHlytg%2FlZu2NTxxpC%2BXl6bjZ%2FWSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMRk4UA7PsRyNP%2Bi3%2FKtwDmR8sGZmClTYBbauA6zTr%2BgPOvc1wtxgzjj6gPK%2FBVinq%2Bq0BtcagDTpb0Id3CcW94euJkslfnGkKFWHMcJHBDiNMcy5PaOTM%2F41Qjoym1Lf6hecwhCS1SVzGnBo5KCFQ2Vyb73Kk0J5Ud61h2ulUR%2BczR%2BDdJCurDhHr1DqeRO69Nv8CipzZrt0LRWnKUW%2BmgaDgi8bl9S0tDcaqj46oqvPfrmOjNA5GOiZejpzGDsb1ki5uQu4KpBc4kAbSahmIk9A4WR92zaU%2By7vSEZF%2FbYkWNlLjxvz26WCI3bVl%2BWuVjaXaetR0Vr7dQWzhJC75qVyGHYpG78PbSYKHJM6xaZSpxXDW7ZRQWYWMQ1GL5w67buiRNLwfkbyEunvjOmvMs9i74N%2BTK%2Bw%2BP%2BrShtfeYAp%2BBeiX3uXCLFx9%2FBWG998ADqTCoEq0MTYSvuZnDDw%2BMw9ec1pF8k5XSWQ5PaJfWQVnA2glX53rEOduNhUtNh%2FtnWINO%2BLfuSz0vX9cM6rzGmTsgo9BCIs53CAS0zZ9ja7S%2BUSnvYqcYsn0yDt3CPqgsVcN27LViB5e4yWw7fWQRkfLHIkRU9%2Fc5ssB6Y8vmU6Cr3YUzHY1bUeHTdzNAJy7DYpR%2BWGtugxgIvcwuMGtwwY6pgEH9ur%2BDWr8Ai2jprSeDnbTC%2BglQPnnNJWEO1IQCm2AnKIh5hpiF3LCGOoTD05b%2Fk92t3e557XeuEHo246KbrIXyziX3DxqdFVb09EzUiBx86cU8RG5KgNEZrTsQm9yhADp9MN8SZfG4p5ZQ673Wra75Fmrh88AKxgUOETfbzXMbkOSKjFqA0jggf4ZollzDcVSZUaZJ04hhH6YfsqFpOgFkFiLps%2BQ&X-Amz-Signature=9d5d4b8738055f90727eeb7083309ce23796c02542ecc3b84720f9f0d5230a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N62CCDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBCvZZmGIqt0%2FjWoD6mopXyR6HMu05RbAbyJGE8r1lFtAiB7bM9oeKdwYMQcX93AHlytg%2FlZu2NTxxpC%2BXl6bjZ%2FWSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMRk4UA7PsRyNP%2Bi3%2FKtwDmR8sGZmClTYBbauA6zTr%2BgPOvc1wtxgzjj6gPK%2FBVinq%2Bq0BtcagDTpb0Id3CcW94euJkslfnGkKFWHMcJHBDiNMcy5PaOTM%2F41Qjoym1Lf6hecwhCS1SVzGnBo5KCFQ2Vyb73Kk0J5Ud61h2ulUR%2BczR%2BDdJCurDhHr1DqeRO69Nv8CipzZrt0LRWnKUW%2BmgaDgi8bl9S0tDcaqj46oqvPfrmOjNA5GOiZejpzGDsb1ki5uQu4KpBc4kAbSahmIk9A4WR92zaU%2By7vSEZF%2FbYkWNlLjxvz26WCI3bVl%2BWuVjaXaetR0Vr7dQWzhJC75qVyGHYpG78PbSYKHJM6xaZSpxXDW7ZRQWYWMQ1GL5w67buiRNLwfkbyEunvjOmvMs9i74N%2BTK%2Bw%2BP%2BrShtfeYAp%2BBeiX3uXCLFx9%2FBWG998ADqTCoEq0MTYSvuZnDDw%2BMw9ec1pF8k5XSWQ5PaJfWQVnA2glX53rEOduNhUtNh%2FtnWINO%2BLfuSz0vX9cM6rzGmTsgo9BCIs53CAS0zZ9ja7S%2BUSnvYqcYsn0yDt3CPqgsVcN27LViB5e4yWw7fWQRkfLHIkRU9%2Fc5ssB6Y8vmU6Cr3YUzHY1bUeHTdzNAJy7DYpR%2BWGtugxgIvcwuMGtwwY6pgEH9ur%2BDWr8Ai2jprSeDnbTC%2BglQPnnNJWEO1IQCm2AnKIh5hpiF3LCGOoTD05b%2Fk92t3e557XeuEHo246KbrIXyziX3DxqdFVb09EzUiBx86cU8RG5KgNEZrTsQm9yhADp9MN8SZfG4p5ZQ673Wra75Fmrh88AKxgUOETfbzXMbkOSKjFqA0jggf4ZollzDcVSZUaZJ04hhH6YfsqFpOgFkFiLps%2BQ&X-Amz-Signature=3c6d1db168ec15a9038908deb72e4930b21a78fc4bdabdaff917d8b709eec9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N62CCDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBCvZZmGIqt0%2FjWoD6mopXyR6HMu05RbAbyJGE8r1lFtAiB7bM9oeKdwYMQcX93AHlytg%2FlZu2NTxxpC%2BXl6bjZ%2FWSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMRk4UA7PsRyNP%2Bi3%2FKtwDmR8sGZmClTYBbauA6zTr%2BgPOvc1wtxgzjj6gPK%2FBVinq%2Bq0BtcagDTpb0Id3CcW94euJkslfnGkKFWHMcJHBDiNMcy5PaOTM%2F41Qjoym1Lf6hecwhCS1SVzGnBo5KCFQ2Vyb73Kk0J5Ud61h2ulUR%2BczR%2BDdJCurDhHr1DqeRO69Nv8CipzZrt0LRWnKUW%2BmgaDgi8bl9S0tDcaqj46oqvPfrmOjNA5GOiZejpzGDsb1ki5uQu4KpBc4kAbSahmIk9A4WR92zaU%2By7vSEZF%2FbYkWNlLjxvz26WCI3bVl%2BWuVjaXaetR0Vr7dQWzhJC75qVyGHYpG78PbSYKHJM6xaZSpxXDW7ZRQWYWMQ1GL5w67buiRNLwfkbyEunvjOmvMs9i74N%2BTK%2Bw%2BP%2BrShtfeYAp%2BBeiX3uXCLFx9%2FBWG998ADqTCoEq0MTYSvuZnDDw%2BMw9ec1pF8k5XSWQ5PaJfWQVnA2glX53rEOduNhUtNh%2FtnWINO%2BLfuSz0vX9cM6rzGmTsgo9BCIs53CAS0zZ9ja7S%2BUSnvYqcYsn0yDt3CPqgsVcN27LViB5e4yWw7fWQRkfLHIkRU9%2Fc5ssB6Y8vmU6Cr3YUzHY1bUeHTdzNAJy7DYpR%2BWGtugxgIvcwuMGtwwY6pgEH9ur%2BDWr8Ai2jprSeDnbTC%2BglQPnnNJWEO1IQCm2AnKIh5hpiF3LCGOoTD05b%2Fk92t3e557XeuEHo246KbrIXyziX3DxqdFVb09EzUiBx86cU8RG5KgNEZrTsQm9yhADp9MN8SZfG4p5ZQ673Wra75Fmrh88AKxgUOETfbzXMbkOSKjFqA0jggf4ZollzDcVSZUaZJ04hhH6YfsqFpOgFkFiLps%2BQ&X-Amz-Signature=ce426bd2a6278e33a82ab5354254eeb21a7a691003bd1fd60e6feb5da9c381c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N62CCDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBCvZZmGIqt0%2FjWoD6mopXyR6HMu05RbAbyJGE8r1lFtAiB7bM9oeKdwYMQcX93AHlytg%2FlZu2NTxxpC%2BXl6bjZ%2FWSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMRk4UA7PsRyNP%2Bi3%2FKtwDmR8sGZmClTYBbauA6zTr%2BgPOvc1wtxgzjj6gPK%2FBVinq%2Bq0BtcagDTpb0Id3CcW94euJkslfnGkKFWHMcJHBDiNMcy5PaOTM%2F41Qjoym1Lf6hecwhCS1SVzGnBo5KCFQ2Vyb73Kk0J5Ud61h2ulUR%2BczR%2BDdJCurDhHr1DqeRO69Nv8CipzZrt0LRWnKUW%2BmgaDgi8bl9S0tDcaqj46oqvPfrmOjNA5GOiZejpzGDsb1ki5uQu4KpBc4kAbSahmIk9A4WR92zaU%2By7vSEZF%2FbYkWNlLjxvz26WCI3bVl%2BWuVjaXaetR0Vr7dQWzhJC75qVyGHYpG78PbSYKHJM6xaZSpxXDW7ZRQWYWMQ1GL5w67buiRNLwfkbyEunvjOmvMs9i74N%2BTK%2Bw%2BP%2BrShtfeYAp%2BBeiX3uXCLFx9%2FBWG998ADqTCoEq0MTYSvuZnDDw%2BMw9ec1pF8k5XSWQ5PaJfWQVnA2glX53rEOduNhUtNh%2FtnWINO%2BLfuSz0vX9cM6rzGmTsgo9BCIs53CAS0zZ9ja7S%2BUSnvYqcYsn0yDt3CPqgsVcN27LViB5e4yWw7fWQRkfLHIkRU9%2Fc5ssB6Y8vmU6Cr3YUzHY1bUeHTdzNAJy7DYpR%2BWGtugxgIvcwuMGtwwY6pgEH9ur%2BDWr8Ai2jprSeDnbTC%2BglQPnnNJWEO1IQCm2AnKIh5hpiF3LCGOoTD05b%2Fk92t3e557XeuEHo246KbrIXyziX3DxqdFVb09EzUiBx86cU8RG5KgNEZrTsQm9yhADp9MN8SZfG4p5ZQ673Wra75Fmrh88AKxgUOETfbzXMbkOSKjFqA0jggf4ZollzDcVSZUaZJ04hhH6YfsqFpOgFkFiLps%2BQ&X-Amz-Signature=bc06bea24d2069202c33607695d42d3dc2afc0415164cc46db81bff7d116b1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N62CCDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBCvZZmGIqt0%2FjWoD6mopXyR6HMu05RbAbyJGE8r1lFtAiB7bM9oeKdwYMQcX93AHlytg%2FlZu2NTxxpC%2BXl6bjZ%2FWSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMRk4UA7PsRyNP%2Bi3%2FKtwDmR8sGZmClTYBbauA6zTr%2BgPOvc1wtxgzjj6gPK%2FBVinq%2Bq0BtcagDTpb0Id3CcW94euJkslfnGkKFWHMcJHBDiNMcy5PaOTM%2F41Qjoym1Lf6hecwhCS1SVzGnBo5KCFQ2Vyb73Kk0J5Ud61h2ulUR%2BczR%2BDdJCurDhHr1DqeRO69Nv8CipzZrt0LRWnKUW%2BmgaDgi8bl9S0tDcaqj46oqvPfrmOjNA5GOiZejpzGDsb1ki5uQu4KpBc4kAbSahmIk9A4WR92zaU%2By7vSEZF%2FbYkWNlLjxvz26WCI3bVl%2BWuVjaXaetR0Vr7dQWzhJC75qVyGHYpG78PbSYKHJM6xaZSpxXDW7ZRQWYWMQ1GL5w67buiRNLwfkbyEunvjOmvMs9i74N%2BTK%2Bw%2BP%2BrShtfeYAp%2BBeiX3uXCLFx9%2FBWG998ADqTCoEq0MTYSvuZnDDw%2BMw9ec1pF8k5XSWQ5PaJfWQVnA2glX53rEOduNhUtNh%2FtnWINO%2BLfuSz0vX9cM6rzGmTsgo9BCIs53CAS0zZ9ja7S%2BUSnvYqcYsn0yDt3CPqgsVcN27LViB5e4yWw7fWQRkfLHIkRU9%2Fc5ssB6Y8vmU6Cr3YUzHY1bUeHTdzNAJy7DYpR%2BWGtugxgIvcwuMGtwwY6pgEH9ur%2BDWr8Ai2jprSeDnbTC%2BglQPnnNJWEO1IQCm2AnKIh5hpiF3LCGOoTD05b%2Fk92t3e557XeuEHo246KbrIXyziX3DxqdFVb09EzUiBx86cU8RG5KgNEZrTsQm9yhADp9MN8SZfG4p5ZQ673Wra75Fmrh88AKxgUOETfbzXMbkOSKjFqA0jggf4ZollzDcVSZUaZJ04hhH6YfsqFpOgFkFiLps%2BQ&X-Amz-Signature=03e179619cbef63b568882a7dac929ed677048721bd7dff9750f6db827fcdd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N62CCDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBCvZZmGIqt0%2FjWoD6mopXyR6HMu05RbAbyJGE8r1lFtAiB7bM9oeKdwYMQcX93AHlytg%2FlZu2NTxxpC%2BXl6bjZ%2FWSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMRk4UA7PsRyNP%2Bi3%2FKtwDmR8sGZmClTYBbauA6zTr%2BgPOvc1wtxgzjj6gPK%2FBVinq%2Bq0BtcagDTpb0Id3CcW94euJkslfnGkKFWHMcJHBDiNMcy5PaOTM%2F41Qjoym1Lf6hecwhCS1SVzGnBo5KCFQ2Vyb73Kk0J5Ud61h2ulUR%2BczR%2BDdJCurDhHr1DqeRO69Nv8CipzZrt0LRWnKUW%2BmgaDgi8bl9S0tDcaqj46oqvPfrmOjNA5GOiZejpzGDsb1ki5uQu4KpBc4kAbSahmIk9A4WR92zaU%2By7vSEZF%2FbYkWNlLjxvz26WCI3bVl%2BWuVjaXaetR0Vr7dQWzhJC75qVyGHYpG78PbSYKHJM6xaZSpxXDW7ZRQWYWMQ1GL5w67buiRNLwfkbyEunvjOmvMs9i74N%2BTK%2Bw%2BP%2BrShtfeYAp%2BBeiX3uXCLFx9%2FBWG998ADqTCoEq0MTYSvuZnDDw%2BMw9ec1pF8k5XSWQ5PaJfWQVnA2glX53rEOduNhUtNh%2FtnWINO%2BLfuSz0vX9cM6rzGmTsgo9BCIs53CAS0zZ9ja7S%2BUSnvYqcYsn0yDt3CPqgsVcN27LViB5e4yWw7fWQRkfLHIkRU9%2Fc5ssB6Y8vmU6Cr3YUzHY1bUeHTdzNAJy7DYpR%2BWGtugxgIvcwuMGtwwY6pgEH9ur%2BDWr8Ai2jprSeDnbTC%2BglQPnnNJWEO1IQCm2AnKIh5hpiF3LCGOoTD05b%2Fk92t3e557XeuEHo246KbrIXyziX3DxqdFVb09EzUiBx86cU8RG5KgNEZrTsQm9yhADp9MN8SZfG4p5ZQ673Wra75Fmrh88AKxgUOETfbzXMbkOSKjFqA0jggf4ZollzDcVSZUaZJ04hhH6YfsqFpOgFkFiLps%2BQ&X-Amz-Signature=ff8929f1fcad7a343f8b60f85af8d310fa87a3d7ba489873bb0b66f18e52bd67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N62CCDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBCvZZmGIqt0%2FjWoD6mopXyR6HMu05RbAbyJGE8r1lFtAiB7bM9oeKdwYMQcX93AHlytg%2FlZu2NTxxpC%2BXl6bjZ%2FWSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMRk4UA7PsRyNP%2Bi3%2FKtwDmR8sGZmClTYBbauA6zTr%2BgPOvc1wtxgzjj6gPK%2FBVinq%2Bq0BtcagDTpb0Id3CcW94euJkslfnGkKFWHMcJHBDiNMcy5PaOTM%2F41Qjoym1Lf6hecwhCS1SVzGnBo5KCFQ2Vyb73Kk0J5Ud61h2ulUR%2BczR%2BDdJCurDhHr1DqeRO69Nv8CipzZrt0LRWnKUW%2BmgaDgi8bl9S0tDcaqj46oqvPfrmOjNA5GOiZejpzGDsb1ki5uQu4KpBc4kAbSahmIk9A4WR92zaU%2By7vSEZF%2FbYkWNlLjxvz26WCI3bVl%2BWuVjaXaetR0Vr7dQWzhJC75qVyGHYpG78PbSYKHJM6xaZSpxXDW7ZRQWYWMQ1GL5w67buiRNLwfkbyEunvjOmvMs9i74N%2BTK%2Bw%2BP%2BrShtfeYAp%2BBeiX3uXCLFx9%2FBWG998ADqTCoEq0MTYSvuZnDDw%2BMw9ec1pF8k5XSWQ5PaJfWQVnA2glX53rEOduNhUtNh%2FtnWINO%2BLfuSz0vX9cM6rzGmTsgo9BCIs53CAS0zZ9ja7S%2BUSnvYqcYsn0yDt3CPqgsVcN27LViB5e4yWw7fWQRkfLHIkRU9%2Fc5ssB6Y8vmU6Cr3YUzHY1bUeHTdzNAJy7DYpR%2BWGtugxgIvcwuMGtwwY6pgEH9ur%2BDWr8Ai2jprSeDnbTC%2BglQPnnNJWEO1IQCm2AnKIh5hpiF3LCGOoTD05b%2Fk92t3e557XeuEHo246KbrIXyziX3DxqdFVb09EzUiBx86cU8RG5KgNEZrTsQm9yhADp9MN8SZfG4p5ZQ673Wra75Fmrh88AKxgUOETfbzXMbkOSKjFqA0jggf4ZollzDcVSZUaZJ04hhH6YfsqFpOgFkFiLps%2BQ&X-Amz-Signature=793d445bc0712e75432653c61e12e99fc8af34d73b98a32e088d90ca48ecfbb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
