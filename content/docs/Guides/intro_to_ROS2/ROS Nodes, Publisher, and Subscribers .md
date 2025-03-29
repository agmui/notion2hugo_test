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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMOZQ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCTx1pq%2BZcfacW4fjQ3fC5yrk2ohKhSwRmg263WU8XaAQIhAI5L30awcZhHs2hNgwYu9DyVUpCn8PlqBJf1ObgxQiiBKv8DCHIQABoMNjM3NDIzMTgzODA1IgzvpTozgEjGhY37NTcq3APGvIdV%2BebWdbHQvleFtSjVWPqKqEpYQBxIXmDnqmKTRceIxyxHFhBFCgUIt%2Fhc%2F%2FvaDkRVhW9mEoF85VcukYQmG6Oin%2Bioj64eDx7IgugNLahzX4BOdLIIV6WdZkt77hQBTceF5vePA3cfp13e5Km%2FnmdX%2F1JCcmUKu1Sh%2B94qWVSz9%2Bni%2BfZn7uXtirSLACMg%2Bx%2BPeeKTT88oX%2BTh6B5w4dHwT053y9AXbM2V7ZkamDWWHjBj%2BMj%2FhAGXw%2Blnk37tQc6bwn%2FbwEshw1HNhdKli8xYq%2FOcRjiptwYBkQereKmCVLlVQPAw0TXw00FqdxnG7ymuBmGvhstCJ1ETc8t74OBNYuwJpujjEwwKI07UMAp5n2PVuch%2BwL4ZYtR2IsWUCrBQmwifpxBNI%2FNQOUgu4liy8sxPkDdmCvOWPe%2BN17w3%2B4vC3psLzQIBG1uzdZVvCksnSTqLZdVYf8Sjh0IkZ1k9gqb7SvS6Eqpk13C6eBDgDE5pJWt3ucYHj9gJ8avMt2MZL0%2FxmuAO5wZEBQbgnH2NrQeP4DPe8MIurB78oftXdHudh7cSqXiWBpmrpCiDJVZFZQAdzTQaKViEI4T9fehXyPQ4mqN%2BaF70ZDA8rwZn%2B6HfH7wgZX9TrjC64p6%2FBjqkAfwiAeq6DGoxDWhUQTQ%2FKsBXD8dWxB6VlNPr79kgRmaJhqhIX5A63qmlb07Ttw4%2FDa%2B3IHYPrxjUee0sxY5UUJ7g5g%2BlcFRiv7gay2qFeTVjFtzF1khgLW1ZTlpD%2BDaF5b1TD7g3lLB0n6gmagrdy0uG0Ftie%2BqIcGxDlQ4aq5J43hB2fuv1RykJDgjw2moZKa94wQhAy1%2Byg3OHfKpN91RS8Mw7&X-Amz-Signature=ba46d73365148af8f02e540f817028bd310512fd4931774621f765b7d913c773&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMOZQ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCTx1pq%2BZcfacW4fjQ3fC5yrk2ohKhSwRmg263WU8XaAQIhAI5L30awcZhHs2hNgwYu9DyVUpCn8PlqBJf1ObgxQiiBKv8DCHIQABoMNjM3NDIzMTgzODA1IgzvpTozgEjGhY37NTcq3APGvIdV%2BebWdbHQvleFtSjVWPqKqEpYQBxIXmDnqmKTRceIxyxHFhBFCgUIt%2Fhc%2F%2FvaDkRVhW9mEoF85VcukYQmG6Oin%2Bioj64eDx7IgugNLahzX4BOdLIIV6WdZkt77hQBTceF5vePA3cfp13e5Km%2FnmdX%2F1JCcmUKu1Sh%2B94qWVSz9%2Bni%2BfZn7uXtirSLACMg%2Bx%2BPeeKTT88oX%2BTh6B5w4dHwT053y9AXbM2V7ZkamDWWHjBj%2BMj%2FhAGXw%2Blnk37tQc6bwn%2FbwEshw1HNhdKli8xYq%2FOcRjiptwYBkQereKmCVLlVQPAw0TXw00FqdxnG7ymuBmGvhstCJ1ETc8t74OBNYuwJpujjEwwKI07UMAp5n2PVuch%2BwL4ZYtR2IsWUCrBQmwifpxBNI%2FNQOUgu4liy8sxPkDdmCvOWPe%2BN17w3%2B4vC3psLzQIBG1uzdZVvCksnSTqLZdVYf8Sjh0IkZ1k9gqb7SvS6Eqpk13C6eBDgDE5pJWt3ucYHj9gJ8avMt2MZL0%2FxmuAO5wZEBQbgnH2NrQeP4DPe8MIurB78oftXdHudh7cSqXiWBpmrpCiDJVZFZQAdzTQaKViEI4T9fehXyPQ4mqN%2BaF70ZDA8rwZn%2B6HfH7wgZX9TrjC64p6%2FBjqkAfwiAeq6DGoxDWhUQTQ%2FKsBXD8dWxB6VlNPr79kgRmaJhqhIX5A63qmlb07Ttw4%2FDa%2B3IHYPrxjUee0sxY5UUJ7g5g%2BlcFRiv7gay2qFeTVjFtzF1khgLW1ZTlpD%2BDaF5b1TD7g3lLB0n6gmagrdy0uG0Ftie%2BqIcGxDlQ4aq5J43hB2fuv1RykJDgjw2moZKa94wQhAy1%2Byg3OHfKpN91RS8Mw7&X-Amz-Signature=3e51465de11ca63eb5e8ced75ea1e8c31dfaa6c4fe04f95ff3db039658570b70&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMOZQ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCTx1pq%2BZcfacW4fjQ3fC5yrk2ohKhSwRmg263WU8XaAQIhAI5L30awcZhHs2hNgwYu9DyVUpCn8PlqBJf1ObgxQiiBKv8DCHIQABoMNjM3NDIzMTgzODA1IgzvpTozgEjGhY37NTcq3APGvIdV%2BebWdbHQvleFtSjVWPqKqEpYQBxIXmDnqmKTRceIxyxHFhBFCgUIt%2Fhc%2F%2FvaDkRVhW9mEoF85VcukYQmG6Oin%2Bioj64eDx7IgugNLahzX4BOdLIIV6WdZkt77hQBTceF5vePA3cfp13e5Km%2FnmdX%2F1JCcmUKu1Sh%2B94qWVSz9%2Bni%2BfZn7uXtirSLACMg%2Bx%2BPeeKTT88oX%2BTh6B5w4dHwT053y9AXbM2V7ZkamDWWHjBj%2BMj%2FhAGXw%2Blnk37tQc6bwn%2FbwEshw1HNhdKli8xYq%2FOcRjiptwYBkQereKmCVLlVQPAw0TXw00FqdxnG7ymuBmGvhstCJ1ETc8t74OBNYuwJpujjEwwKI07UMAp5n2PVuch%2BwL4ZYtR2IsWUCrBQmwifpxBNI%2FNQOUgu4liy8sxPkDdmCvOWPe%2BN17w3%2B4vC3psLzQIBG1uzdZVvCksnSTqLZdVYf8Sjh0IkZ1k9gqb7SvS6Eqpk13C6eBDgDE5pJWt3ucYHj9gJ8avMt2MZL0%2FxmuAO5wZEBQbgnH2NrQeP4DPe8MIurB78oftXdHudh7cSqXiWBpmrpCiDJVZFZQAdzTQaKViEI4T9fehXyPQ4mqN%2BaF70ZDA8rwZn%2B6HfH7wgZX9TrjC64p6%2FBjqkAfwiAeq6DGoxDWhUQTQ%2FKsBXD8dWxB6VlNPr79kgRmaJhqhIX5A63qmlb07Ttw4%2FDa%2B3IHYPrxjUee0sxY5UUJ7g5g%2BlcFRiv7gay2qFeTVjFtzF1khgLW1ZTlpD%2BDaF5b1TD7g3lLB0n6gmagrdy0uG0Ftie%2BqIcGxDlQ4aq5J43hB2fuv1RykJDgjw2moZKa94wQhAy1%2Byg3OHfKpN91RS8Mw7&X-Amz-Signature=400cb1790ac740c03cd856055cc9f7e08d4a6e8b6bdc60cf89fd5b6569f5a401&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMOZQ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCTx1pq%2BZcfacW4fjQ3fC5yrk2ohKhSwRmg263WU8XaAQIhAI5L30awcZhHs2hNgwYu9DyVUpCn8PlqBJf1ObgxQiiBKv8DCHIQABoMNjM3NDIzMTgzODA1IgzvpTozgEjGhY37NTcq3APGvIdV%2BebWdbHQvleFtSjVWPqKqEpYQBxIXmDnqmKTRceIxyxHFhBFCgUIt%2Fhc%2F%2FvaDkRVhW9mEoF85VcukYQmG6Oin%2Bioj64eDx7IgugNLahzX4BOdLIIV6WdZkt77hQBTceF5vePA3cfp13e5Km%2FnmdX%2F1JCcmUKu1Sh%2B94qWVSz9%2Bni%2BfZn7uXtirSLACMg%2Bx%2BPeeKTT88oX%2BTh6B5w4dHwT053y9AXbM2V7ZkamDWWHjBj%2BMj%2FhAGXw%2Blnk37tQc6bwn%2FbwEshw1HNhdKli8xYq%2FOcRjiptwYBkQereKmCVLlVQPAw0TXw00FqdxnG7ymuBmGvhstCJ1ETc8t74OBNYuwJpujjEwwKI07UMAp5n2PVuch%2BwL4ZYtR2IsWUCrBQmwifpxBNI%2FNQOUgu4liy8sxPkDdmCvOWPe%2BN17w3%2B4vC3psLzQIBG1uzdZVvCksnSTqLZdVYf8Sjh0IkZ1k9gqb7SvS6Eqpk13C6eBDgDE5pJWt3ucYHj9gJ8avMt2MZL0%2FxmuAO5wZEBQbgnH2NrQeP4DPe8MIurB78oftXdHudh7cSqXiWBpmrpCiDJVZFZQAdzTQaKViEI4T9fehXyPQ4mqN%2BaF70ZDA8rwZn%2B6HfH7wgZX9TrjC64p6%2FBjqkAfwiAeq6DGoxDWhUQTQ%2FKsBXD8dWxB6VlNPr79kgRmaJhqhIX5A63qmlb07Ttw4%2FDa%2B3IHYPrxjUee0sxY5UUJ7g5g%2BlcFRiv7gay2qFeTVjFtzF1khgLW1ZTlpD%2BDaF5b1TD7g3lLB0n6gmagrdy0uG0Ftie%2BqIcGxDlQ4aq5J43hB2fuv1RykJDgjw2moZKa94wQhAy1%2Byg3OHfKpN91RS8Mw7&X-Amz-Signature=616dc94ad677f59166fc4d3686c804bbb5b1bfb508e014634d342d2417a0ff9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMOZQ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCTx1pq%2BZcfacW4fjQ3fC5yrk2ohKhSwRmg263WU8XaAQIhAI5L30awcZhHs2hNgwYu9DyVUpCn8PlqBJf1ObgxQiiBKv8DCHIQABoMNjM3NDIzMTgzODA1IgzvpTozgEjGhY37NTcq3APGvIdV%2BebWdbHQvleFtSjVWPqKqEpYQBxIXmDnqmKTRceIxyxHFhBFCgUIt%2Fhc%2F%2FvaDkRVhW9mEoF85VcukYQmG6Oin%2Bioj64eDx7IgugNLahzX4BOdLIIV6WdZkt77hQBTceF5vePA3cfp13e5Km%2FnmdX%2F1JCcmUKu1Sh%2B94qWVSz9%2Bni%2BfZn7uXtirSLACMg%2Bx%2BPeeKTT88oX%2BTh6B5w4dHwT053y9AXbM2V7ZkamDWWHjBj%2BMj%2FhAGXw%2Blnk37tQc6bwn%2FbwEshw1HNhdKli8xYq%2FOcRjiptwYBkQereKmCVLlVQPAw0TXw00FqdxnG7ymuBmGvhstCJ1ETc8t74OBNYuwJpujjEwwKI07UMAp5n2PVuch%2BwL4ZYtR2IsWUCrBQmwifpxBNI%2FNQOUgu4liy8sxPkDdmCvOWPe%2BN17w3%2B4vC3psLzQIBG1uzdZVvCksnSTqLZdVYf8Sjh0IkZ1k9gqb7SvS6Eqpk13C6eBDgDE5pJWt3ucYHj9gJ8avMt2MZL0%2FxmuAO5wZEBQbgnH2NrQeP4DPe8MIurB78oftXdHudh7cSqXiWBpmrpCiDJVZFZQAdzTQaKViEI4T9fehXyPQ4mqN%2BaF70ZDA8rwZn%2B6HfH7wgZX9TrjC64p6%2FBjqkAfwiAeq6DGoxDWhUQTQ%2FKsBXD8dWxB6VlNPr79kgRmaJhqhIX5A63qmlb07Ttw4%2FDa%2B3IHYPrxjUee0sxY5UUJ7g5g%2BlcFRiv7gay2qFeTVjFtzF1khgLW1ZTlpD%2BDaF5b1TD7g3lLB0n6gmagrdy0uG0Ftie%2BqIcGxDlQ4aq5J43hB2fuv1RykJDgjw2moZKa94wQhAy1%2Byg3OHfKpN91RS8Mw7&X-Amz-Signature=a2413d6f82938394a30de1d505c0ac14e766d38ad885b78288e62542a12704c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMOZQ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCTx1pq%2BZcfacW4fjQ3fC5yrk2ohKhSwRmg263WU8XaAQIhAI5L30awcZhHs2hNgwYu9DyVUpCn8PlqBJf1ObgxQiiBKv8DCHIQABoMNjM3NDIzMTgzODA1IgzvpTozgEjGhY37NTcq3APGvIdV%2BebWdbHQvleFtSjVWPqKqEpYQBxIXmDnqmKTRceIxyxHFhBFCgUIt%2Fhc%2F%2FvaDkRVhW9mEoF85VcukYQmG6Oin%2Bioj64eDx7IgugNLahzX4BOdLIIV6WdZkt77hQBTceF5vePA3cfp13e5Km%2FnmdX%2F1JCcmUKu1Sh%2B94qWVSz9%2Bni%2BfZn7uXtirSLACMg%2Bx%2BPeeKTT88oX%2BTh6B5w4dHwT053y9AXbM2V7ZkamDWWHjBj%2BMj%2FhAGXw%2Blnk37tQc6bwn%2FbwEshw1HNhdKli8xYq%2FOcRjiptwYBkQereKmCVLlVQPAw0TXw00FqdxnG7ymuBmGvhstCJ1ETc8t74OBNYuwJpujjEwwKI07UMAp5n2PVuch%2BwL4ZYtR2IsWUCrBQmwifpxBNI%2FNQOUgu4liy8sxPkDdmCvOWPe%2BN17w3%2B4vC3psLzQIBG1uzdZVvCksnSTqLZdVYf8Sjh0IkZ1k9gqb7SvS6Eqpk13C6eBDgDE5pJWt3ucYHj9gJ8avMt2MZL0%2FxmuAO5wZEBQbgnH2NrQeP4DPe8MIurB78oftXdHudh7cSqXiWBpmrpCiDJVZFZQAdzTQaKViEI4T9fehXyPQ4mqN%2BaF70ZDA8rwZn%2B6HfH7wgZX9TrjC64p6%2FBjqkAfwiAeq6DGoxDWhUQTQ%2FKsBXD8dWxB6VlNPr79kgRmaJhqhIX5A63qmlb07Ttw4%2FDa%2B3IHYPrxjUee0sxY5UUJ7g5g%2BlcFRiv7gay2qFeTVjFtzF1khgLW1ZTlpD%2BDaF5b1TD7g3lLB0n6gmagrdy0uG0Ftie%2BqIcGxDlQ4aq5J43hB2fuv1RykJDgjw2moZKa94wQhAy1%2Byg3OHfKpN91RS8Mw7&X-Amz-Signature=a0ca026eacfa668bc3a08962ee505d1541391a947e44dd1d271867c796959c25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMOZQ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCTx1pq%2BZcfacW4fjQ3fC5yrk2ohKhSwRmg263WU8XaAQIhAI5L30awcZhHs2hNgwYu9DyVUpCn8PlqBJf1ObgxQiiBKv8DCHIQABoMNjM3NDIzMTgzODA1IgzvpTozgEjGhY37NTcq3APGvIdV%2BebWdbHQvleFtSjVWPqKqEpYQBxIXmDnqmKTRceIxyxHFhBFCgUIt%2Fhc%2F%2FvaDkRVhW9mEoF85VcukYQmG6Oin%2Bioj64eDx7IgugNLahzX4BOdLIIV6WdZkt77hQBTceF5vePA3cfp13e5Km%2FnmdX%2F1JCcmUKu1Sh%2B94qWVSz9%2Bni%2BfZn7uXtirSLACMg%2Bx%2BPeeKTT88oX%2BTh6B5w4dHwT053y9AXbM2V7ZkamDWWHjBj%2BMj%2FhAGXw%2Blnk37tQc6bwn%2FbwEshw1HNhdKli8xYq%2FOcRjiptwYBkQereKmCVLlVQPAw0TXw00FqdxnG7ymuBmGvhstCJ1ETc8t74OBNYuwJpujjEwwKI07UMAp5n2PVuch%2BwL4ZYtR2IsWUCrBQmwifpxBNI%2FNQOUgu4liy8sxPkDdmCvOWPe%2BN17w3%2B4vC3psLzQIBG1uzdZVvCksnSTqLZdVYf8Sjh0IkZ1k9gqb7SvS6Eqpk13C6eBDgDE5pJWt3ucYHj9gJ8avMt2MZL0%2FxmuAO5wZEBQbgnH2NrQeP4DPe8MIurB78oftXdHudh7cSqXiWBpmrpCiDJVZFZQAdzTQaKViEI4T9fehXyPQ4mqN%2BaF70ZDA8rwZn%2B6HfH7wgZX9TrjC64p6%2FBjqkAfwiAeq6DGoxDWhUQTQ%2FKsBXD8dWxB6VlNPr79kgRmaJhqhIX5A63qmlb07Ttw4%2FDa%2B3IHYPrxjUee0sxY5UUJ7g5g%2BlcFRiv7gay2qFeTVjFtzF1khgLW1ZTlpD%2BDaF5b1TD7g3lLB0n6gmagrdy0uG0Ftie%2BqIcGxDlQ4aq5J43hB2fuv1RykJDgjw2moZKa94wQhAy1%2Byg3OHfKpN91RS8Mw7&X-Amz-Signature=99f0c853c9936c744a89516e3513aa1ad4edb0ae06248cbaea4fae2bf5894dcc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMOZQ5%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCTx1pq%2BZcfacW4fjQ3fC5yrk2ohKhSwRmg263WU8XaAQIhAI5L30awcZhHs2hNgwYu9DyVUpCn8PlqBJf1ObgxQiiBKv8DCHIQABoMNjM3NDIzMTgzODA1IgzvpTozgEjGhY37NTcq3APGvIdV%2BebWdbHQvleFtSjVWPqKqEpYQBxIXmDnqmKTRceIxyxHFhBFCgUIt%2Fhc%2F%2FvaDkRVhW9mEoF85VcukYQmG6Oin%2Bioj64eDx7IgugNLahzX4BOdLIIV6WdZkt77hQBTceF5vePA3cfp13e5Km%2FnmdX%2F1JCcmUKu1Sh%2B94qWVSz9%2Bni%2BfZn7uXtirSLACMg%2Bx%2BPeeKTT88oX%2BTh6B5w4dHwT053y9AXbM2V7ZkamDWWHjBj%2BMj%2FhAGXw%2Blnk37tQc6bwn%2FbwEshw1HNhdKli8xYq%2FOcRjiptwYBkQereKmCVLlVQPAw0TXw00FqdxnG7ymuBmGvhstCJ1ETc8t74OBNYuwJpujjEwwKI07UMAp5n2PVuch%2BwL4ZYtR2IsWUCrBQmwifpxBNI%2FNQOUgu4liy8sxPkDdmCvOWPe%2BN17w3%2B4vC3psLzQIBG1uzdZVvCksnSTqLZdVYf8Sjh0IkZ1k9gqb7SvS6Eqpk13C6eBDgDE5pJWt3ucYHj9gJ8avMt2MZL0%2FxmuAO5wZEBQbgnH2NrQeP4DPe8MIurB78oftXdHudh7cSqXiWBpmrpCiDJVZFZQAdzTQaKViEI4T9fehXyPQ4mqN%2BaF70ZDA8rwZn%2B6HfH7wgZX9TrjC64p6%2FBjqkAfwiAeq6DGoxDWhUQTQ%2FKsBXD8dWxB6VlNPr79kgRmaJhqhIX5A63qmlb07Ttw4%2FDa%2B3IHYPrxjUee0sxY5UUJ7g5g%2BlcFRiv7gay2qFeTVjFtzF1khgLW1ZTlpD%2BDaF5b1TD7g3lLB0n6gmagrdy0uG0Ftie%2BqIcGxDlQ4aq5J43hB2fuv1RykJDgjw2moZKa94wQhAy1%2Byg3OHfKpN91RS8Mw7&X-Amz-Signature=e315ffd478c17913c06721b54ff02a56191b4a1f0ab74c098a59e100c4346952&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
