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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36GRK3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCeDzo45SoJ25jaJnRZhf63lsij9937ZfEoQB2rWCZ00AIgGZsXBFKU4gpXSShhGgPg9jWfRxqqPVQsqLqQiwMTS7AqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BoNHNCgf4dw%2B6NRCrcA7Y%2B1VjggyTht5mSg1%2BNX%2FTVRGqVhARJkk9p1r34JyvuDT%2FvJz4yRXr6o1KI1YEjYTVD1MK8fZCQXjEo1n5cL6kzHyRR6%2B7drFbUjv1Sj%2FhN6a9YNZGHg8AmVtAbi8CNmfNIj0W8LJ07QF9VqWwQ1xGllNM6paDfhPqaY1k5VUt%2ButD1Flx0%2BH4JoLw8beJHqkWUB4krdML%2FrZByI7pv%2Fy4ULbOjqY73hxnVAJNKni18g4AZQFGRqmc7w1eBUJg6VLhWZmkjGja5ltuIXuHNIjWHYnL6SXIsqamIYWNCvUTF8xY55dKZ%2B4K%2FlqEhU%2FAe9uEb9R8V5R3LOvtddlxlNSvl68R%2BXplzr5D2sISZjGZFA%2Bftyt7StoYCTZOE46aUceyVvLuVWD%2B7eRNPEccZKE2B1gd1K1qdZysuE0vFH%2FNBud8r8tt79AC3W6Er6zDghPp3KJk7Jqq3b%2Bk0P4T8Pt00yRrAfL5InaZrr5AKqwQ3JXsvez1YoM1q8Am%2FUJjB4E9PMuHknyUmWKlQBE1MrVXmkojOC5k6doCyk%2FQHZ%2BhZRj8oVgDanfpLsvZnylnzfCe5QkpemjrfBehBp5EwB1vCPVJQjSU9Pc3UA1gajzZs9wRVuCGwPZ87ktNoMIyJqsIGOqUBn14qBD9ge8S8QTOJJXNnz%2FqUR1d%2Fc77O07MpUn7Cz%2FtaJ6hBSDDG7%2BsajU0G4%2Bd9uTGeRY%2FkzRBO5z5RAJlhfFuL6VYmbquObxhR9us8rTEuzVL70NxJ8cnBsz7dAGML%2FUJ%2Bf1H%2B5prXkY6unKe0Zyc18IVQ5H%2BNzEge3m6d2ng5JVQnrvA7RKJtF3XPZloupLdY9ZhOwWm8IH%2B%2B9XszEcA2ImIW&X-Amz-Signature=6048c5a1c91f7a1d440af2f243000a2383ed0728353f384e2f193390e3a682c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36GRK3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCeDzo45SoJ25jaJnRZhf63lsij9937ZfEoQB2rWCZ00AIgGZsXBFKU4gpXSShhGgPg9jWfRxqqPVQsqLqQiwMTS7AqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BoNHNCgf4dw%2B6NRCrcA7Y%2B1VjggyTht5mSg1%2BNX%2FTVRGqVhARJkk9p1r34JyvuDT%2FvJz4yRXr6o1KI1YEjYTVD1MK8fZCQXjEo1n5cL6kzHyRR6%2B7drFbUjv1Sj%2FhN6a9YNZGHg8AmVtAbi8CNmfNIj0W8LJ07QF9VqWwQ1xGllNM6paDfhPqaY1k5VUt%2ButD1Flx0%2BH4JoLw8beJHqkWUB4krdML%2FrZByI7pv%2Fy4ULbOjqY73hxnVAJNKni18g4AZQFGRqmc7w1eBUJg6VLhWZmkjGja5ltuIXuHNIjWHYnL6SXIsqamIYWNCvUTF8xY55dKZ%2B4K%2FlqEhU%2FAe9uEb9R8V5R3LOvtddlxlNSvl68R%2BXplzr5D2sISZjGZFA%2Bftyt7StoYCTZOE46aUceyVvLuVWD%2B7eRNPEccZKE2B1gd1K1qdZysuE0vFH%2FNBud8r8tt79AC3W6Er6zDghPp3KJk7Jqq3b%2Bk0P4T8Pt00yRrAfL5InaZrr5AKqwQ3JXsvez1YoM1q8Am%2FUJjB4E9PMuHknyUmWKlQBE1MrVXmkojOC5k6doCyk%2FQHZ%2BhZRj8oVgDanfpLsvZnylnzfCe5QkpemjrfBehBp5EwB1vCPVJQjSU9Pc3UA1gajzZs9wRVuCGwPZ87ktNoMIyJqsIGOqUBn14qBD9ge8S8QTOJJXNnz%2FqUR1d%2Fc77O07MpUn7Cz%2FtaJ6hBSDDG7%2BsajU0G4%2Bd9uTGeRY%2FkzRBO5z5RAJlhfFuL6VYmbquObxhR9us8rTEuzVL70NxJ8cnBsz7dAGML%2FUJ%2Bf1H%2B5prXkY6unKe0Zyc18IVQ5H%2BNzEge3m6d2ng5JVQnrvA7RKJtF3XPZloupLdY9ZhOwWm8IH%2B%2B9XszEcA2ImIW&X-Amz-Signature=40113903785675b4be0a66b1c29fed410a0fa966344b27abdd9f8f9b8ce89a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36GRK3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCeDzo45SoJ25jaJnRZhf63lsij9937ZfEoQB2rWCZ00AIgGZsXBFKU4gpXSShhGgPg9jWfRxqqPVQsqLqQiwMTS7AqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BoNHNCgf4dw%2B6NRCrcA7Y%2B1VjggyTht5mSg1%2BNX%2FTVRGqVhARJkk9p1r34JyvuDT%2FvJz4yRXr6o1KI1YEjYTVD1MK8fZCQXjEo1n5cL6kzHyRR6%2B7drFbUjv1Sj%2FhN6a9YNZGHg8AmVtAbi8CNmfNIj0W8LJ07QF9VqWwQ1xGllNM6paDfhPqaY1k5VUt%2ButD1Flx0%2BH4JoLw8beJHqkWUB4krdML%2FrZByI7pv%2Fy4ULbOjqY73hxnVAJNKni18g4AZQFGRqmc7w1eBUJg6VLhWZmkjGja5ltuIXuHNIjWHYnL6SXIsqamIYWNCvUTF8xY55dKZ%2B4K%2FlqEhU%2FAe9uEb9R8V5R3LOvtddlxlNSvl68R%2BXplzr5D2sISZjGZFA%2Bftyt7StoYCTZOE46aUceyVvLuVWD%2B7eRNPEccZKE2B1gd1K1qdZysuE0vFH%2FNBud8r8tt79AC3W6Er6zDghPp3KJk7Jqq3b%2Bk0P4T8Pt00yRrAfL5InaZrr5AKqwQ3JXsvez1YoM1q8Am%2FUJjB4E9PMuHknyUmWKlQBE1MrVXmkojOC5k6doCyk%2FQHZ%2BhZRj8oVgDanfpLsvZnylnzfCe5QkpemjrfBehBp5EwB1vCPVJQjSU9Pc3UA1gajzZs9wRVuCGwPZ87ktNoMIyJqsIGOqUBn14qBD9ge8S8QTOJJXNnz%2FqUR1d%2Fc77O07MpUn7Cz%2FtaJ6hBSDDG7%2BsajU0G4%2Bd9uTGeRY%2FkzRBO5z5RAJlhfFuL6VYmbquObxhR9us8rTEuzVL70NxJ8cnBsz7dAGML%2FUJ%2Bf1H%2B5prXkY6unKe0Zyc18IVQ5H%2BNzEge3m6d2ng5JVQnrvA7RKJtF3XPZloupLdY9ZhOwWm8IH%2B%2B9XszEcA2ImIW&X-Amz-Signature=87d09ad370e1a353167305eea568410928b56d6bf35f0b4cc29098287b482f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36GRK3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCeDzo45SoJ25jaJnRZhf63lsij9937ZfEoQB2rWCZ00AIgGZsXBFKU4gpXSShhGgPg9jWfRxqqPVQsqLqQiwMTS7AqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BoNHNCgf4dw%2B6NRCrcA7Y%2B1VjggyTht5mSg1%2BNX%2FTVRGqVhARJkk9p1r34JyvuDT%2FvJz4yRXr6o1KI1YEjYTVD1MK8fZCQXjEo1n5cL6kzHyRR6%2B7drFbUjv1Sj%2FhN6a9YNZGHg8AmVtAbi8CNmfNIj0W8LJ07QF9VqWwQ1xGllNM6paDfhPqaY1k5VUt%2ButD1Flx0%2BH4JoLw8beJHqkWUB4krdML%2FrZByI7pv%2Fy4ULbOjqY73hxnVAJNKni18g4AZQFGRqmc7w1eBUJg6VLhWZmkjGja5ltuIXuHNIjWHYnL6SXIsqamIYWNCvUTF8xY55dKZ%2B4K%2FlqEhU%2FAe9uEb9R8V5R3LOvtddlxlNSvl68R%2BXplzr5D2sISZjGZFA%2Bftyt7StoYCTZOE46aUceyVvLuVWD%2B7eRNPEccZKE2B1gd1K1qdZysuE0vFH%2FNBud8r8tt79AC3W6Er6zDghPp3KJk7Jqq3b%2Bk0P4T8Pt00yRrAfL5InaZrr5AKqwQ3JXsvez1YoM1q8Am%2FUJjB4E9PMuHknyUmWKlQBE1MrVXmkojOC5k6doCyk%2FQHZ%2BhZRj8oVgDanfpLsvZnylnzfCe5QkpemjrfBehBp5EwB1vCPVJQjSU9Pc3UA1gajzZs9wRVuCGwPZ87ktNoMIyJqsIGOqUBn14qBD9ge8S8QTOJJXNnz%2FqUR1d%2Fc77O07MpUn7Cz%2FtaJ6hBSDDG7%2BsajU0G4%2Bd9uTGeRY%2FkzRBO5z5RAJlhfFuL6VYmbquObxhR9us8rTEuzVL70NxJ8cnBsz7dAGML%2FUJ%2Bf1H%2B5prXkY6unKe0Zyc18IVQ5H%2BNzEge3m6d2ng5JVQnrvA7RKJtF3XPZloupLdY9ZhOwWm8IH%2B%2B9XszEcA2ImIW&X-Amz-Signature=41ed3c6a2fadde2fb4695024473c556cfae1940091a85eabf82650b46f1e04d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36GRK3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCeDzo45SoJ25jaJnRZhf63lsij9937ZfEoQB2rWCZ00AIgGZsXBFKU4gpXSShhGgPg9jWfRxqqPVQsqLqQiwMTS7AqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BoNHNCgf4dw%2B6NRCrcA7Y%2B1VjggyTht5mSg1%2BNX%2FTVRGqVhARJkk9p1r34JyvuDT%2FvJz4yRXr6o1KI1YEjYTVD1MK8fZCQXjEo1n5cL6kzHyRR6%2B7drFbUjv1Sj%2FhN6a9YNZGHg8AmVtAbi8CNmfNIj0W8LJ07QF9VqWwQ1xGllNM6paDfhPqaY1k5VUt%2ButD1Flx0%2BH4JoLw8beJHqkWUB4krdML%2FrZByI7pv%2Fy4ULbOjqY73hxnVAJNKni18g4AZQFGRqmc7w1eBUJg6VLhWZmkjGja5ltuIXuHNIjWHYnL6SXIsqamIYWNCvUTF8xY55dKZ%2B4K%2FlqEhU%2FAe9uEb9R8V5R3LOvtddlxlNSvl68R%2BXplzr5D2sISZjGZFA%2Bftyt7StoYCTZOE46aUceyVvLuVWD%2B7eRNPEccZKE2B1gd1K1qdZysuE0vFH%2FNBud8r8tt79AC3W6Er6zDghPp3KJk7Jqq3b%2Bk0P4T8Pt00yRrAfL5InaZrr5AKqwQ3JXsvez1YoM1q8Am%2FUJjB4E9PMuHknyUmWKlQBE1MrVXmkojOC5k6doCyk%2FQHZ%2BhZRj8oVgDanfpLsvZnylnzfCe5QkpemjrfBehBp5EwB1vCPVJQjSU9Pc3UA1gajzZs9wRVuCGwPZ87ktNoMIyJqsIGOqUBn14qBD9ge8S8QTOJJXNnz%2FqUR1d%2Fc77O07MpUn7Cz%2FtaJ6hBSDDG7%2BsajU0G4%2Bd9uTGeRY%2FkzRBO5z5RAJlhfFuL6VYmbquObxhR9us8rTEuzVL70NxJ8cnBsz7dAGML%2FUJ%2Bf1H%2B5prXkY6unKe0Zyc18IVQ5H%2BNzEge3m6d2ng5JVQnrvA7RKJtF3XPZloupLdY9ZhOwWm8IH%2B%2B9XszEcA2ImIW&X-Amz-Signature=c0fb01f0ec47d60086a131d1eb730e011c65bcbd97695a20ccba554c7248d9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36GRK3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCeDzo45SoJ25jaJnRZhf63lsij9937ZfEoQB2rWCZ00AIgGZsXBFKU4gpXSShhGgPg9jWfRxqqPVQsqLqQiwMTS7AqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BoNHNCgf4dw%2B6NRCrcA7Y%2B1VjggyTht5mSg1%2BNX%2FTVRGqVhARJkk9p1r34JyvuDT%2FvJz4yRXr6o1KI1YEjYTVD1MK8fZCQXjEo1n5cL6kzHyRR6%2B7drFbUjv1Sj%2FhN6a9YNZGHg8AmVtAbi8CNmfNIj0W8LJ07QF9VqWwQ1xGllNM6paDfhPqaY1k5VUt%2ButD1Flx0%2BH4JoLw8beJHqkWUB4krdML%2FrZByI7pv%2Fy4ULbOjqY73hxnVAJNKni18g4AZQFGRqmc7w1eBUJg6VLhWZmkjGja5ltuIXuHNIjWHYnL6SXIsqamIYWNCvUTF8xY55dKZ%2B4K%2FlqEhU%2FAe9uEb9R8V5R3LOvtddlxlNSvl68R%2BXplzr5D2sISZjGZFA%2Bftyt7StoYCTZOE46aUceyVvLuVWD%2B7eRNPEccZKE2B1gd1K1qdZysuE0vFH%2FNBud8r8tt79AC3W6Er6zDghPp3KJk7Jqq3b%2Bk0P4T8Pt00yRrAfL5InaZrr5AKqwQ3JXsvez1YoM1q8Am%2FUJjB4E9PMuHknyUmWKlQBE1MrVXmkojOC5k6doCyk%2FQHZ%2BhZRj8oVgDanfpLsvZnylnzfCe5QkpemjrfBehBp5EwB1vCPVJQjSU9Pc3UA1gajzZs9wRVuCGwPZ87ktNoMIyJqsIGOqUBn14qBD9ge8S8QTOJJXNnz%2FqUR1d%2Fc77O07MpUn7Cz%2FtaJ6hBSDDG7%2BsajU0G4%2Bd9uTGeRY%2FkzRBO5z5RAJlhfFuL6VYmbquObxhR9us8rTEuzVL70NxJ8cnBsz7dAGML%2FUJ%2Bf1H%2B5prXkY6unKe0Zyc18IVQ5H%2BNzEge3m6d2ng5JVQnrvA7RKJtF3XPZloupLdY9ZhOwWm8IH%2B%2B9XszEcA2ImIW&X-Amz-Signature=bc59d5adbe0fa5d5a2eb32f3d25fb257d803a28aa1a522e71f2600a6ccddb9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36GRK3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCeDzo45SoJ25jaJnRZhf63lsij9937ZfEoQB2rWCZ00AIgGZsXBFKU4gpXSShhGgPg9jWfRxqqPVQsqLqQiwMTS7AqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BoNHNCgf4dw%2B6NRCrcA7Y%2B1VjggyTht5mSg1%2BNX%2FTVRGqVhARJkk9p1r34JyvuDT%2FvJz4yRXr6o1KI1YEjYTVD1MK8fZCQXjEo1n5cL6kzHyRR6%2B7drFbUjv1Sj%2FhN6a9YNZGHg8AmVtAbi8CNmfNIj0W8LJ07QF9VqWwQ1xGllNM6paDfhPqaY1k5VUt%2ButD1Flx0%2BH4JoLw8beJHqkWUB4krdML%2FrZByI7pv%2Fy4ULbOjqY73hxnVAJNKni18g4AZQFGRqmc7w1eBUJg6VLhWZmkjGja5ltuIXuHNIjWHYnL6SXIsqamIYWNCvUTF8xY55dKZ%2B4K%2FlqEhU%2FAe9uEb9R8V5R3LOvtddlxlNSvl68R%2BXplzr5D2sISZjGZFA%2Bftyt7StoYCTZOE46aUceyVvLuVWD%2B7eRNPEccZKE2B1gd1K1qdZysuE0vFH%2FNBud8r8tt79AC3W6Er6zDghPp3KJk7Jqq3b%2Bk0P4T8Pt00yRrAfL5InaZrr5AKqwQ3JXsvez1YoM1q8Am%2FUJjB4E9PMuHknyUmWKlQBE1MrVXmkojOC5k6doCyk%2FQHZ%2BhZRj8oVgDanfpLsvZnylnzfCe5QkpemjrfBehBp5EwB1vCPVJQjSU9Pc3UA1gajzZs9wRVuCGwPZ87ktNoMIyJqsIGOqUBn14qBD9ge8S8QTOJJXNnz%2FqUR1d%2Fc77O07MpUn7Cz%2FtaJ6hBSDDG7%2BsajU0G4%2Bd9uTGeRY%2FkzRBO5z5RAJlhfFuL6VYmbquObxhR9us8rTEuzVL70NxJ8cnBsz7dAGML%2FUJ%2Bf1H%2B5prXkY6unKe0Zyc18IVQ5H%2BNzEge3m6d2ng5JVQnrvA7RKJtF3XPZloupLdY9ZhOwWm8IH%2B%2B9XszEcA2ImIW&X-Amz-Signature=00ce019073339518605fea8192acffa3ece09bf7a33a102eb3e782bbdbdd9f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT36GRK3%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCeDzo45SoJ25jaJnRZhf63lsij9937ZfEoQB2rWCZ00AIgGZsXBFKU4gpXSShhGgPg9jWfRxqqPVQsqLqQiwMTS7AqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2BoNHNCgf4dw%2B6NRCrcA7Y%2B1VjggyTht5mSg1%2BNX%2FTVRGqVhARJkk9p1r34JyvuDT%2FvJz4yRXr6o1KI1YEjYTVD1MK8fZCQXjEo1n5cL6kzHyRR6%2B7drFbUjv1Sj%2FhN6a9YNZGHg8AmVtAbi8CNmfNIj0W8LJ07QF9VqWwQ1xGllNM6paDfhPqaY1k5VUt%2ButD1Flx0%2BH4JoLw8beJHqkWUB4krdML%2FrZByI7pv%2Fy4ULbOjqY73hxnVAJNKni18g4AZQFGRqmc7w1eBUJg6VLhWZmkjGja5ltuIXuHNIjWHYnL6SXIsqamIYWNCvUTF8xY55dKZ%2B4K%2FlqEhU%2FAe9uEb9R8V5R3LOvtddlxlNSvl68R%2BXplzr5D2sISZjGZFA%2Bftyt7StoYCTZOE46aUceyVvLuVWD%2B7eRNPEccZKE2B1gd1K1qdZysuE0vFH%2FNBud8r8tt79AC3W6Er6zDghPp3KJk7Jqq3b%2Bk0P4T8Pt00yRrAfL5InaZrr5AKqwQ3JXsvez1YoM1q8Am%2FUJjB4E9PMuHknyUmWKlQBE1MrVXmkojOC5k6doCyk%2FQHZ%2BhZRj8oVgDanfpLsvZnylnzfCe5QkpemjrfBehBp5EwB1vCPVJQjSU9Pc3UA1gajzZs9wRVuCGwPZ87ktNoMIyJqsIGOqUBn14qBD9ge8S8QTOJJXNnz%2FqUR1d%2Fc77O07MpUn7Cz%2FtaJ6hBSDDG7%2BsajU0G4%2Bd9uTGeRY%2FkzRBO5z5RAJlhfFuL6VYmbquObxhR9us8rTEuzVL70NxJ8cnBsz7dAGML%2FUJ%2Bf1H%2B5prXkY6unKe0Zyc18IVQ5H%2BNzEge3m6d2ng5JVQnrvA7RKJtF3XPZloupLdY9ZhOwWm8IH%2B%2B9XszEcA2ImIW&X-Amz-Signature=88f7b9f9839c40898d6edb41c4e39b6a6b47bbb90cdeaa95feba288fe103b817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
