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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKJLMZ3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6gh%2FH3yKlYwm7XCFkGAxZvdU4RFvvRm5ZPy8aibw4KQIhAO1rDKvEcehqqQFYjIJUi0VN0SgUjgadkVtP52wmUH9iKv8DCFoQABoMNjM3NDIzMTgzODA1Igz5wi9C1J7HRWhAjpIq3APT7I0enPMRFm8Tse9Ia%2FVVHhcbW7n%2BCp%2FOuSuayvAI%2BtfL9kF8F25r93gFmIKJMqLlDK7T3Wv7AfXr6FV4eslwEWbfEHWSt6zo43ACqIIsrgh44S58LkLI8GWa2SnA3gI9bCSvddxTV654HQZQvLhwdd%2FxNyqdiQIb6%2F%2BYhmtRgj1Xv%2BW1OWaugrm7r3s13%2FB4uHBlvG6ylc3haennhiPankBKtWlqz9Bi8RlQKk5HnNcC51ZGP4uLu%2FaeXU7GoMkruF6nbiPUulRjceJzSMmKtY8QjwIr%2BmXBcf5SpTz3uW3PtwUkPcM3i%2F1ObSP4dpOATPkpEBJVnj7bcXZnJY0VnQ8fA1p1J9TTlnbvjVe7NwASLKOPkaS5V%2FqW2H08kJLkPbyLm4kq2T21H6iKxCl7F1frdm3klsQUPRyzztUeVezNpyk%2B%2FTPlL%2B1E9fsSCruQNgpATlgwY2keipO2YeaXchkkmYNBfwkOVUR2zuF78q9SyeyQyIKAn8lyWgRrHk36UWX0aV4QdWD1AWpiwg9XZn7iqyREkKD1EgnbAmepMfnKMGgasoo7vpX7rzcO5Dd%2BgH7DfBTuTUdkmtffRDcenFLsLqp7mA2hNEmSWsbCIzGaMJiq36mjLq%2FGhzD0gNbBBjqkAYbcTwT0upfLaE6so7F1RPPO0R3p%2FwG1euxxFVFgCBxygZC0G%2BoLeVkQ946tm3eitwnwWjU9Lb63nCYTRF2WB4V95zbihnopGtiYjvk5giitxq3uaBIHRdS4CvtrTED7owPehGBSdmZed5hlWNhqHxh5eOr%2BZbYhxTOH%2F%2FoUQUMSZg9GlOiGY6IJCqgdJZEXpdYGgsL%2FODhatKiVCemtnF4NIEgp&X-Amz-Signature=fab8e13d412886b2103cb4654d6a8ada164ba156d21856a754a56c8642879f83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKJLMZ3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6gh%2FH3yKlYwm7XCFkGAxZvdU4RFvvRm5ZPy8aibw4KQIhAO1rDKvEcehqqQFYjIJUi0VN0SgUjgadkVtP52wmUH9iKv8DCFoQABoMNjM3NDIzMTgzODA1Igz5wi9C1J7HRWhAjpIq3APT7I0enPMRFm8Tse9Ia%2FVVHhcbW7n%2BCp%2FOuSuayvAI%2BtfL9kF8F25r93gFmIKJMqLlDK7T3Wv7AfXr6FV4eslwEWbfEHWSt6zo43ACqIIsrgh44S58LkLI8GWa2SnA3gI9bCSvddxTV654HQZQvLhwdd%2FxNyqdiQIb6%2F%2BYhmtRgj1Xv%2BW1OWaugrm7r3s13%2FB4uHBlvG6ylc3haennhiPankBKtWlqz9Bi8RlQKk5HnNcC51ZGP4uLu%2FaeXU7GoMkruF6nbiPUulRjceJzSMmKtY8QjwIr%2BmXBcf5SpTz3uW3PtwUkPcM3i%2F1ObSP4dpOATPkpEBJVnj7bcXZnJY0VnQ8fA1p1J9TTlnbvjVe7NwASLKOPkaS5V%2FqW2H08kJLkPbyLm4kq2T21H6iKxCl7F1frdm3klsQUPRyzztUeVezNpyk%2B%2FTPlL%2B1E9fsSCruQNgpATlgwY2keipO2YeaXchkkmYNBfwkOVUR2zuF78q9SyeyQyIKAn8lyWgRrHk36UWX0aV4QdWD1AWpiwg9XZn7iqyREkKD1EgnbAmepMfnKMGgasoo7vpX7rzcO5Dd%2BgH7DfBTuTUdkmtffRDcenFLsLqp7mA2hNEmSWsbCIzGaMJiq36mjLq%2FGhzD0gNbBBjqkAYbcTwT0upfLaE6so7F1RPPO0R3p%2FwG1euxxFVFgCBxygZC0G%2BoLeVkQ946tm3eitwnwWjU9Lb63nCYTRF2WB4V95zbihnopGtiYjvk5giitxq3uaBIHRdS4CvtrTED7owPehGBSdmZed5hlWNhqHxh5eOr%2BZbYhxTOH%2F%2FoUQUMSZg9GlOiGY6IJCqgdJZEXpdYGgsL%2FODhatKiVCemtnF4NIEgp&X-Amz-Signature=353f3584a14bc786676f073be3572e7ababeaec90a0a89b0bce5c0e99ab2636d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKJLMZ3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6gh%2FH3yKlYwm7XCFkGAxZvdU4RFvvRm5ZPy8aibw4KQIhAO1rDKvEcehqqQFYjIJUi0VN0SgUjgadkVtP52wmUH9iKv8DCFoQABoMNjM3NDIzMTgzODA1Igz5wi9C1J7HRWhAjpIq3APT7I0enPMRFm8Tse9Ia%2FVVHhcbW7n%2BCp%2FOuSuayvAI%2BtfL9kF8F25r93gFmIKJMqLlDK7T3Wv7AfXr6FV4eslwEWbfEHWSt6zo43ACqIIsrgh44S58LkLI8GWa2SnA3gI9bCSvddxTV654HQZQvLhwdd%2FxNyqdiQIb6%2F%2BYhmtRgj1Xv%2BW1OWaugrm7r3s13%2FB4uHBlvG6ylc3haennhiPankBKtWlqz9Bi8RlQKk5HnNcC51ZGP4uLu%2FaeXU7GoMkruF6nbiPUulRjceJzSMmKtY8QjwIr%2BmXBcf5SpTz3uW3PtwUkPcM3i%2F1ObSP4dpOATPkpEBJVnj7bcXZnJY0VnQ8fA1p1J9TTlnbvjVe7NwASLKOPkaS5V%2FqW2H08kJLkPbyLm4kq2T21H6iKxCl7F1frdm3klsQUPRyzztUeVezNpyk%2B%2FTPlL%2B1E9fsSCruQNgpATlgwY2keipO2YeaXchkkmYNBfwkOVUR2zuF78q9SyeyQyIKAn8lyWgRrHk36UWX0aV4QdWD1AWpiwg9XZn7iqyREkKD1EgnbAmepMfnKMGgasoo7vpX7rzcO5Dd%2BgH7DfBTuTUdkmtffRDcenFLsLqp7mA2hNEmSWsbCIzGaMJiq36mjLq%2FGhzD0gNbBBjqkAYbcTwT0upfLaE6so7F1RPPO0R3p%2FwG1euxxFVFgCBxygZC0G%2BoLeVkQ946tm3eitwnwWjU9Lb63nCYTRF2WB4V95zbihnopGtiYjvk5giitxq3uaBIHRdS4CvtrTED7owPehGBSdmZed5hlWNhqHxh5eOr%2BZbYhxTOH%2F%2FoUQUMSZg9GlOiGY6IJCqgdJZEXpdYGgsL%2FODhatKiVCemtnF4NIEgp&X-Amz-Signature=e5c525133cfd31db27c5c39ddb8b67d7d80135fe4ddb7d4c1de76b8a2c51b9a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKJLMZ3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6gh%2FH3yKlYwm7XCFkGAxZvdU4RFvvRm5ZPy8aibw4KQIhAO1rDKvEcehqqQFYjIJUi0VN0SgUjgadkVtP52wmUH9iKv8DCFoQABoMNjM3NDIzMTgzODA1Igz5wi9C1J7HRWhAjpIq3APT7I0enPMRFm8Tse9Ia%2FVVHhcbW7n%2BCp%2FOuSuayvAI%2BtfL9kF8F25r93gFmIKJMqLlDK7T3Wv7AfXr6FV4eslwEWbfEHWSt6zo43ACqIIsrgh44S58LkLI8GWa2SnA3gI9bCSvddxTV654HQZQvLhwdd%2FxNyqdiQIb6%2F%2BYhmtRgj1Xv%2BW1OWaugrm7r3s13%2FB4uHBlvG6ylc3haennhiPankBKtWlqz9Bi8RlQKk5HnNcC51ZGP4uLu%2FaeXU7GoMkruF6nbiPUulRjceJzSMmKtY8QjwIr%2BmXBcf5SpTz3uW3PtwUkPcM3i%2F1ObSP4dpOATPkpEBJVnj7bcXZnJY0VnQ8fA1p1J9TTlnbvjVe7NwASLKOPkaS5V%2FqW2H08kJLkPbyLm4kq2T21H6iKxCl7F1frdm3klsQUPRyzztUeVezNpyk%2B%2FTPlL%2B1E9fsSCruQNgpATlgwY2keipO2YeaXchkkmYNBfwkOVUR2zuF78q9SyeyQyIKAn8lyWgRrHk36UWX0aV4QdWD1AWpiwg9XZn7iqyREkKD1EgnbAmepMfnKMGgasoo7vpX7rzcO5Dd%2BgH7DfBTuTUdkmtffRDcenFLsLqp7mA2hNEmSWsbCIzGaMJiq36mjLq%2FGhzD0gNbBBjqkAYbcTwT0upfLaE6so7F1RPPO0R3p%2FwG1euxxFVFgCBxygZC0G%2BoLeVkQ946tm3eitwnwWjU9Lb63nCYTRF2WB4V95zbihnopGtiYjvk5giitxq3uaBIHRdS4CvtrTED7owPehGBSdmZed5hlWNhqHxh5eOr%2BZbYhxTOH%2F%2FoUQUMSZg9GlOiGY6IJCqgdJZEXpdYGgsL%2FODhatKiVCemtnF4NIEgp&X-Amz-Signature=bb2fb08ff9ae9ca9609dc67ad6ffa23b86fd42ff2b0c70f31c4cb366ba89f066&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKJLMZ3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6gh%2FH3yKlYwm7XCFkGAxZvdU4RFvvRm5ZPy8aibw4KQIhAO1rDKvEcehqqQFYjIJUi0VN0SgUjgadkVtP52wmUH9iKv8DCFoQABoMNjM3NDIzMTgzODA1Igz5wi9C1J7HRWhAjpIq3APT7I0enPMRFm8Tse9Ia%2FVVHhcbW7n%2BCp%2FOuSuayvAI%2BtfL9kF8F25r93gFmIKJMqLlDK7T3Wv7AfXr6FV4eslwEWbfEHWSt6zo43ACqIIsrgh44S58LkLI8GWa2SnA3gI9bCSvddxTV654HQZQvLhwdd%2FxNyqdiQIb6%2F%2BYhmtRgj1Xv%2BW1OWaugrm7r3s13%2FB4uHBlvG6ylc3haennhiPankBKtWlqz9Bi8RlQKk5HnNcC51ZGP4uLu%2FaeXU7GoMkruF6nbiPUulRjceJzSMmKtY8QjwIr%2BmXBcf5SpTz3uW3PtwUkPcM3i%2F1ObSP4dpOATPkpEBJVnj7bcXZnJY0VnQ8fA1p1J9TTlnbvjVe7NwASLKOPkaS5V%2FqW2H08kJLkPbyLm4kq2T21H6iKxCl7F1frdm3klsQUPRyzztUeVezNpyk%2B%2FTPlL%2B1E9fsSCruQNgpATlgwY2keipO2YeaXchkkmYNBfwkOVUR2zuF78q9SyeyQyIKAn8lyWgRrHk36UWX0aV4QdWD1AWpiwg9XZn7iqyREkKD1EgnbAmepMfnKMGgasoo7vpX7rzcO5Dd%2BgH7DfBTuTUdkmtffRDcenFLsLqp7mA2hNEmSWsbCIzGaMJiq36mjLq%2FGhzD0gNbBBjqkAYbcTwT0upfLaE6so7F1RPPO0R3p%2FwG1euxxFVFgCBxygZC0G%2BoLeVkQ946tm3eitwnwWjU9Lb63nCYTRF2WB4V95zbihnopGtiYjvk5giitxq3uaBIHRdS4CvtrTED7owPehGBSdmZed5hlWNhqHxh5eOr%2BZbYhxTOH%2F%2FoUQUMSZg9GlOiGY6IJCqgdJZEXpdYGgsL%2FODhatKiVCemtnF4NIEgp&X-Amz-Signature=32c84e48946692d11b1ad0b97b5d5b67dd67ee14f4881a6a6c64198ed93fd6d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKJLMZ3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6gh%2FH3yKlYwm7XCFkGAxZvdU4RFvvRm5ZPy8aibw4KQIhAO1rDKvEcehqqQFYjIJUi0VN0SgUjgadkVtP52wmUH9iKv8DCFoQABoMNjM3NDIzMTgzODA1Igz5wi9C1J7HRWhAjpIq3APT7I0enPMRFm8Tse9Ia%2FVVHhcbW7n%2BCp%2FOuSuayvAI%2BtfL9kF8F25r93gFmIKJMqLlDK7T3Wv7AfXr6FV4eslwEWbfEHWSt6zo43ACqIIsrgh44S58LkLI8GWa2SnA3gI9bCSvddxTV654HQZQvLhwdd%2FxNyqdiQIb6%2F%2BYhmtRgj1Xv%2BW1OWaugrm7r3s13%2FB4uHBlvG6ylc3haennhiPankBKtWlqz9Bi8RlQKk5HnNcC51ZGP4uLu%2FaeXU7GoMkruF6nbiPUulRjceJzSMmKtY8QjwIr%2BmXBcf5SpTz3uW3PtwUkPcM3i%2F1ObSP4dpOATPkpEBJVnj7bcXZnJY0VnQ8fA1p1J9TTlnbvjVe7NwASLKOPkaS5V%2FqW2H08kJLkPbyLm4kq2T21H6iKxCl7F1frdm3klsQUPRyzztUeVezNpyk%2B%2FTPlL%2B1E9fsSCruQNgpATlgwY2keipO2YeaXchkkmYNBfwkOVUR2zuF78q9SyeyQyIKAn8lyWgRrHk36UWX0aV4QdWD1AWpiwg9XZn7iqyREkKD1EgnbAmepMfnKMGgasoo7vpX7rzcO5Dd%2BgH7DfBTuTUdkmtffRDcenFLsLqp7mA2hNEmSWsbCIzGaMJiq36mjLq%2FGhzD0gNbBBjqkAYbcTwT0upfLaE6so7F1RPPO0R3p%2FwG1euxxFVFgCBxygZC0G%2BoLeVkQ946tm3eitwnwWjU9Lb63nCYTRF2WB4V95zbihnopGtiYjvk5giitxq3uaBIHRdS4CvtrTED7owPehGBSdmZed5hlWNhqHxh5eOr%2BZbYhxTOH%2F%2FoUQUMSZg9GlOiGY6IJCqgdJZEXpdYGgsL%2FODhatKiVCemtnF4NIEgp&X-Amz-Signature=2a0b240cac6f8c8e0dfb284ab9c72d4e66db60bcde8b26f180165044ce836148&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKJLMZ3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6gh%2FH3yKlYwm7XCFkGAxZvdU4RFvvRm5ZPy8aibw4KQIhAO1rDKvEcehqqQFYjIJUi0VN0SgUjgadkVtP52wmUH9iKv8DCFoQABoMNjM3NDIzMTgzODA1Igz5wi9C1J7HRWhAjpIq3APT7I0enPMRFm8Tse9Ia%2FVVHhcbW7n%2BCp%2FOuSuayvAI%2BtfL9kF8F25r93gFmIKJMqLlDK7T3Wv7AfXr6FV4eslwEWbfEHWSt6zo43ACqIIsrgh44S58LkLI8GWa2SnA3gI9bCSvddxTV654HQZQvLhwdd%2FxNyqdiQIb6%2F%2BYhmtRgj1Xv%2BW1OWaugrm7r3s13%2FB4uHBlvG6ylc3haennhiPankBKtWlqz9Bi8RlQKk5HnNcC51ZGP4uLu%2FaeXU7GoMkruF6nbiPUulRjceJzSMmKtY8QjwIr%2BmXBcf5SpTz3uW3PtwUkPcM3i%2F1ObSP4dpOATPkpEBJVnj7bcXZnJY0VnQ8fA1p1J9TTlnbvjVe7NwASLKOPkaS5V%2FqW2H08kJLkPbyLm4kq2T21H6iKxCl7F1frdm3klsQUPRyzztUeVezNpyk%2B%2FTPlL%2B1E9fsSCruQNgpATlgwY2keipO2YeaXchkkmYNBfwkOVUR2zuF78q9SyeyQyIKAn8lyWgRrHk36UWX0aV4QdWD1AWpiwg9XZn7iqyREkKD1EgnbAmepMfnKMGgasoo7vpX7rzcO5Dd%2BgH7DfBTuTUdkmtffRDcenFLsLqp7mA2hNEmSWsbCIzGaMJiq36mjLq%2FGhzD0gNbBBjqkAYbcTwT0upfLaE6so7F1RPPO0R3p%2FwG1euxxFVFgCBxygZC0G%2BoLeVkQ946tm3eitwnwWjU9Lb63nCYTRF2WB4V95zbihnopGtiYjvk5giitxq3uaBIHRdS4CvtrTED7owPehGBSdmZed5hlWNhqHxh5eOr%2BZbYhxTOH%2F%2FoUQUMSZg9GlOiGY6IJCqgdJZEXpdYGgsL%2FODhatKiVCemtnF4NIEgp&X-Amz-Signature=620f777dc2d911c6853796f846c3a4365e910bff99504c3d49d340fe42e20407&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKJLMZ3%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6gh%2FH3yKlYwm7XCFkGAxZvdU4RFvvRm5ZPy8aibw4KQIhAO1rDKvEcehqqQFYjIJUi0VN0SgUjgadkVtP52wmUH9iKv8DCFoQABoMNjM3NDIzMTgzODA1Igz5wi9C1J7HRWhAjpIq3APT7I0enPMRFm8Tse9Ia%2FVVHhcbW7n%2BCp%2FOuSuayvAI%2BtfL9kF8F25r93gFmIKJMqLlDK7T3Wv7AfXr6FV4eslwEWbfEHWSt6zo43ACqIIsrgh44S58LkLI8GWa2SnA3gI9bCSvddxTV654HQZQvLhwdd%2FxNyqdiQIb6%2F%2BYhmtRgj1Xv%2BW1OWaugrm7r3s13%2FB4uHBlvG6ylc3haennhiPankBKtWlqz9Bi8RlQKk5HnNcC51ZGP4uLu%2FaeXU7GoMkruF6nbiPUulRjceJzSMmKtY8QjwIr%2BmXBcf5SpTz3uW3PtwUkPcM3i%2F1ObSP4dpOATPkpEBJVnj7bcXZnJY0VnQ8fA1p1J9TTlnbvjVe7NwASLKOPkaS5V%2FqW2H08kJLkPbyLm4kq2T21H6iKxCl7F1frdm3klsQUPRyzztUeVezNpyk%2B%2FTPlL%2B1E9fsSCruQNgpATlgwY2keipO2YeaXchkkmYNBfwkOVUR2zuF78q9SyeyQyIKAn8lyWgRrHk36UWX0aV4QdWD1AWpiwg9XZn7iqyREkKD1EgnbAmepMfnKMGgasoo7vpX7rzcO5Dd%2BgH7DfBTuTUdkmtffRDcenFLsLqp7mA2hNEmSWsbCIzGaMJiq36mjLq%2FGhzD0gNbBBjqkAYbcTwT0upfLaE6so7F1RPPO0R3p%2FwG1euxxFVFgCBxygZC0G%2BoLeVkQ946tm3eitwnwWjU9Lb63nCYTRF2WB4V95zbihnopGtiYjvk5giitxq3uaBIHRdS4CvtrTED7owPehGBSdmZed5hlWNhqHxh5eOr%2BZbYhxTOH%2F%2FoUQUMSZg9GlOiGY6IJCqgdJZEXpdYGgsL%2FODhatKiVCemtnF4NIEgp&X-Amz-Signature=04fbf41d82baadc2e3c2d1888162b93b7f116a874109fb1b235194381af6ee1f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
