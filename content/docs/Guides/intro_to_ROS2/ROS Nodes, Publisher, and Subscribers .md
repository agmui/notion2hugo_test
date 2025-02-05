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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NASWPX6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCXcgd8zZqgTqmdxgRWEVDeYCkSY17vY3RRyvuX%2F7vLKgIhAJFQtIjjZOp7rel621MFrDVzjgGh53WnTv90MpfJ4F0%2BKv8DCEMQABoMNjM3NDIzMTgzODA1Igx55Jci%2BHOIDa8%2BW1gq3APMS8BxyrjUiQC7VIr1aycaNfy99VsudOfsftu2TqpttROiVw0qD7OTAKAla0AJ6A1dXNTkiMe0R007MXvFZ53IHcWmZLokmYifRbA2egfkCaIEzpY7J326jOjm1GUDViYwc6wsIbpI9MBJqCG3EUEIU1jCN734kkUOFN18WlTwZ86RxFHBpVXM%2BnmuTvd8YyZR3YT6zG1iB3aQSFLJjZBKDHX9%2BN5pdhWJJqEMk0exAKg8%2BzytMgWLLOznVL1VsRPimiDKupEoNjoxkeWzJOo0v0tp3AUG4oN%2BQUYk9uARq%2BISemSUcpXK8hTpBjXBPxXe3SbNOLlXsyVkGb%2Bsw3gpqfxcqBiXXScmEY3PSoaE941kNoNwS48oxyUi7kbVNKs7eL%2FHsjyFou3uJfwTGmUFZcFCDP%2BGN7nafJxUSOZ6mnuk3Tb74L6fksfktDKwv2ynYvZeeaf2iLo5fgFPw5sTWZ6yInjzK4qXYXxPa6xSzdeHB9dopizcs8ZUmhyUXFZl7wX5r1IShCNbaetIvowu7IA2Fp10qcXNMBT3NOyecEx7Q7E7N46yv%2Bqo%2Bs8LcWmcsfAqKguBipXRz0mqt7ugKgwCXGw%2BsS4wrMMHr85uZB0AS5Scyoemz5dnwTDD8Yy9BjqkATaAnF2eHQU4fjz8NHAGyvfDkm%2FcftUTibert9%2FpCU5FkkJ%2BBoRAQ0j4j5rldm021rh7wZLHbrYloLFXptxoHq8%2BZ0wm02gEEuWPHkHFJoYHwDsfBKfoFhpcK7p37wyMtPQ5Uewgr29xM1h6snmNwGVDYAYXz34FtfMPqbWQdkUoWsqGHrj3YZ4d6itGU2ymwlEH3IPLC2BZOoVlA8tYlRvNpkCw&X-Amz-Signature=46b53e0117a5ce29d413bc466d5156520fc0d89a5cf351ae4c81d3026a409cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NASWPX6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCXcgd8zZqgTqmdxgRWEVDeYCkSY17vY3RRyvuX%2F7vLKgIhAJFQtIjjZOp7rel621MFrDVzjgGh53WnTv90MpfJ4F0%2BKv8DCEMQABoMNjM3NDIzMTgzODA1Igx55Jci%2BHOIDa8%2BW1gq3APMS8BxyrjUiQC7VIr1aycaNfy99VsudOfsftu2TqpttROiVw0qD7OTAKAla0AJ6A1dXNTkiMe0R007MXvFZ53IHcWmZLokmYifRbA2egfkCaIEzpY7J326jOjm1GUDViYwc6wsIbpI9MBJqCG3EUEIU1jCN734kkUOFN18WlTwZ86RxFHBpVXM%2BnmuTvd8YyZR3YT6zG1iB3aQSFLJjZBKDHX9%2BN5pdhWJJqEMk0exAKg8%2BzytMgWLLOznVL1VsRPimiDKupEoNjoxkeWzJOo0v0tp3AUG4oN%2BQUYk9uARq%2BISemSUcpXK8hTpBjXBPxXe3SbNOLlXsyVkGb%2Bsw3gpqfxcqBiXXScmEY3PSoaE941kNoNwS48oxyUi7kbVNKs7eL%2FHsjyFou3uJfwTGmUFZcFCDP%2BGN7nafJxUSOZ6mnuk3Tb74L6fksfktDKwv2ynYvZeeaf2iLo5fgFPw5sTWZ6yInjzK4qXYXxPa6xSzdeHB9dopizcs8ZUmhyUXFZl7wX5r1IShCNbaetIvowu7IA2Fp10qcXNMBT3NOyecEx7Q7E7N46yv%2Bqo%2Bs8LcWmcsfAqKguBipXRz0mqt7ugKgwCXGw%2BsS4wrMMHr85uZB0AS5Scyoemz5dnwTDD8Yy9BjqkATaAnF2eHQU4fjz8NHAGyvfDkm%2FcftUTibert9%2FpCU5FkkJ%2BBoRAQ0j4j5rldm021rh7wZLHbrYloLFXptxoHq8%2BZ0wm02gEEuWPHkHFJoYHwDsfBKfoFhpcK7p37wyMtPQ5Uewgr29xM1h6snmNwGVDYAYXz34FtfMPqbWQdkUoWsqGHrj3YZ4d6itGU2ymwlEH3IPLC2BZOoVlA8tYlRvNpkCw&X-Amz-Signature=8cbbdc0c3e32e2bc93a5f917d2be59a6aad6c6a35867ed016d17b814c202f8dc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NASWPX6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCXcgd8zZqgTqmdxgRWEVDeYCkSY17vY3RRyvuX%2F7vLKgIhAJFQtIjjZOp7rel621MFrDVzjgGh53WnTv90MpfJ4F0%2BKv8DCEMQABoMNjM3NDIzMTgzODA1Igx55Jci%2BHOIDa8%2BW1gq3APMS8BxyrjUiQC7VIr1aycaNfy99VsudOfsftu2TqpttROiVw0qD7OTAKAla0AJ6A1dXNTkiMe0R007MXvFZ53IHcWmZLokmYifRbA2egfkCaIEzpY7J326jOjm1GUDViYwc6wsIbpI9MBJqCG3EUEIU1jCN734kkUOFN18WlTwZ86RxFHBpVXM%2BnmuTvd8YyZR3YT6zG1iB3aQSFLJjZBKDHX9%2BN5pdhWJJqEMk0exAKg8%2BzytMgWLLOznVL1VsRPimiDKupEoNjoxkeWzJOo0v0tp3AUG4oN%2BQUYk9uARq%2BISemSUcpXK8hTpBjXBPxXe3SbNOLlXsyVkGb%2Bsw3gpqfxcqBiXXScmEY3PSoaE941kNoNwS48oxyUi7kbVNKs7eL%2FHsjyFou3uJfwTGmUFZcFCDP%2BGN7nafJxUSOZ6mnuk3Tb74L6fksfktDKwv2ynYvZeeaf2iLo5fgFPw5sTWZ6yInjzK4qXYXxPa6xSzdeHB9dopizcs8ZUmhyUXFZl7wX5r1IShCNbaetIvowu7IA2Fp10qcXNMBT3NOyecEx7Q7E7N46yv%2Bqo%2Bs8LcWmcsfAqKguBipXRz0mqt7ugKgwCXGw%2BsS4wrMMHr85uZB0AS5Scyoemz5dnwTDD8Yy9BjqkATaAnF2eHQU4fjz8NHAGyvfDkm%2FcftUTibert9%2FpCU5FkkJ%2BBoRAQ0j4j5rldm021rh7wZLHbrYloLFXptxoHq8%2BZ0wm02gEEuWPHkHFJoYHwDsfBKfoFhpcK7p37wyMtPQ5Uewgr29xM1h6snmNwGVDYAYXz34FtfMPqbWQdkUoWsqGHrj3YZ4d6itGU2ymwlEH3IPLC2BZOoVlA8tYlRvNpkCw&X-Amz-Signature=acd9752fd4eb92f61efa511843afc99f4517cdb49cb62c7ebfbd9af1f464914b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NASWPX6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCXcgd8zZqgTqmdxgRWEVDeYCkSY17vY3RRyvuX%2F7vLKgIhAJFQtIjjZOp7rel621MFrDVzjgGh53WnTv90MpfJ4F0%2BKv8DCEMQABoMNjM3NDIzMTgzODA1Igx55Jci%2BHOIDa8%2BW1gq3APMS8BxyrjUiQC7VIr1aycaNfy99VsudOfsftu2TqpttROiVw0qD7OTAKAla0AJ6A1dXNTkiMe0R007MXvFZ53IHcWmZLokmYifRbA2egfkCaIEzpY7J326jOjm1GUDViYwc6wsIbpI9MBJqCG3EUEIU1jCN734kkUOFN18WlTwZ86RxFHBpVXM%2BnmuTvd8YyZR3YT6zG1iB3aQSFLJjZBKDHX9%2BN5pdhWJJqEMk0exAKg8%2BzytMgWLLOznVL1VsRPimiDKupEoNjoxkeWzJOo0v0tp3AUG4oN%2BQUYk9uARq%2BISemSUcpXK8hTpBjXBPxXe3SbNOLlXsyVkGb%2Bsw3gpqfxcqBiXXScmEY3PSoaE941kNoNwS48oxyUi7kbVNKs7eL%2FHsjyFou3uJfwTGmUFZcFCDP%2BGN7nafJxUSOZ6mnuk3Tb74L6fksfktDKwv2ynYvZeeaf2iLo5fgFPw5sTWZ6yInjzK4qXYXxPa6xSzdeHB9dopizcs8ZUmhyUXFZl7wX5r1IShCNbaetIvowu7IA2Fp10qcXNMBT3NOyecEx7Q7E7N46yv%2Bqo%2Bs8LcWmcsfAqKguBipXRz0mqt7ugKgwCXGw%2BsS4wrMMHr85uZB0AS5Scyoemz5dnwTDD8Yy9BjqkATaAnF2eHQU4fjz8NHAGyvfDkm%2FcftUTibert9%2FpCU5FkkJ%2BBoRAQ0j4j5rldm021rh7wZLHbrYloLFXptxoHq8%2BZ0wm02gEEuWPHkHFJoYHwDsfBKfoFhpcK7p37wyMtPQ5Uewgr29xM1h6snmNwGVDYAYXz34FtfMPqbWQdkUoWsqGHrj3YZ4d6itGU2ymwlEH3IPLC2BZOoVlA8tYlRvNpkCw&X-Amz-Signature=345916f5fccbf39bb9502b8af28f56340e92e48a0fabd606538995eb6da8442c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NASWPX6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCXcgd8zZqgTqmdxgRWEVDeYCkSY17vY3RRyvuX%2F7vLKgIhAJFQtIjjZOp7rel621MFrDVzjgGh53WnTv90MpfJ4F0%2BKv8DCEMQABoMNjM3NDIzMTgzODA1Igx55Jci%2BHOIDa8%2BW1gq3APMS8BxyrjUiQC7VIr1aycaNfy99VsudOfsftu2TqpttROiVw0qD7OTAKAla0AJ6A1dXNTkiMe0R007MXvFZ53IHcWmZLokmYifRbA2egfkCaIEzpY7J326jOjm1GUDViYwc6wsIbpI9MBJqCG3EUEIU1jCN734kkUOFN18WlTwZ86RxFHBpVXM%2BnmuTvd8YyZR3YT6zG1iB3aQSFLJjZBKDHX9%2BN5pdhWJJqEMk0exAKg8%2BzytMgWLLOznVL1VsRPimiDKupEoNjoxkeWzJOo0v0tp3AUG4oN%2BQUYk9uARq%2BISemSUcpXK8hTpBjXBPxXe3SbNOLlXsyVkGb%2Bsw3gpqfxcqBiXXScmEY3PSoaE941kNoNwS48oxyUi7kbVNKs7eL%2FHsjyFou3uJfwTGmUFZcFCDP%2BGN7nafJxUSOZ6mnuk3Tb74L6fksfktDKwv2ynYvZeeaf2iLo5fgFPw5sTWZ6yInjzK4qXYXxPa6xSzdeHB9dopizcs8ZUmhyUXFZl7wX5r1IShCNbaetIvowu7IA2Fp10qcXNMBT3NOyecEx7Q7E7N46yv%2Bqo%2Bs8LcWmcsfAqKguBipXRz0mqt7ugKgwCXGw%2BsS4wrMMHr85uZB0AS5Scyoemz5dnwTDD8Yy9BjqkATaAnF2eHQU4fjz8NHAGyvfDkm%2FcftUTibert9%2FpCU5FkkJ%2BBoRAQ0j4j5rldm021rh7wZLHbrYloLFXptxoHq8%2BZ0wm02gEEuWPHkHFJoYHwDsfBKfoFhpcK7p37wyMtPQ5Uewgr29xM1h6snmNwGVDYAYXz34FtfMPqbWQdkUoWsqGHrj3YZ4d6itGU2ymwlEH3IPLC2BZOoVlA8tYlRvNpkCw&X-Amz-Signature=17a695cf16a39b32d69f4d1954ab3992a34e5ef0b6dac1ffec3464d22fe418f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NASWPX6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCXcgd8zZqgTqmdxgRWEVDeYCkSY17vY3RRyvuX%2F7vLKgIhAJFQtIjjZOp7rel621MFrDVzjgGh53WnTv90MpfJ4F0%2BKv8DCEMQABoMNjM3NDIzMTgzODA1Igx55Jci%2BHOIDa8%2BW1gq3APMS8BxyrjUiQC7VIr1aycaNfy99VsudOfsftu2TqpttROiVw0qD7OTAKAla0AJ6A1dXNTkiMe0R007MXvFZ53IHcWmZLokmYifRbA2egfkCaIEzpY7J326jOjm1GUDViYwc6wsIbpI9MBJqCG3EUEIU1jCN734kkUOFN18WlTwZ86RxFHBpVXM%2BnmuTvd8YyZR3YT6zG1iB3aQSFLJjZBKDHX9%2BN5pdhWJJqEMk0exAKg8%2BzytMgWLLOznVL1VsRPimiDKupEoNjoxkeWzJOo0v0tp3AUG4oN%2BQUYk9uARq%2BISemSUcpXK8hTpBjXBPxXe3SbNOLlXsyVkGb%2Bsw3gpqfxcqBiXXScmEY3PSoaE941kNoNwS48oxyUi7kbVNKs7eL%2FHsjyFou3uJfwTGmUFZcFCDP%2BGN7nafJxUSOZ6mnuk3Tb74L6fksfktDKwv2ynYvZeeaf2iLo5fgFPw5sTWZ6yInjzK4qXYXxPa6xSzdeHB9dopizcs8ZUmhyUXFZl7wX5r1IShCNbaetIvowu7IA2Fp10qcXNMBT3NOyecEx7Q7E7N46yv%2Bqo%2Bs8LcWmcsfAqKguBipXRz0mqt7ugKgwCXGw%2BsS4wrMMHr85uZB0AS5Scyoemz5dnwTDD8Yy9BjqkATaAnF2eHQU4fjz8NHAGyvfDkm%2FcftUTibert9%2FpCU5FkkJ%2BBoRAQ0j4j5rldm021rh7wZLHbrYloLFXptxoHq8%2BZ0wm02gEEuWPHkHFJoYHwDsfBKfoFhpcK7p37wyMtPQ5Uewgr29xM1h6snmNwGVDYAYXz34FtfMPqbWQdkUoWsqGHrj3YZ4d6itGU2ymwlEH3IPLC2BZOoVlA8tYlRvNpkCw&X-Amz-Signature=698f905ed55fe5b20eaa0427472c584a2ca86676f84dd747a4e413e917d08566&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NASWPX6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCXcgd8zZqgTqmdxgRWEVDeYCkSY17vY3RRyvuX%2F7vLKgIhAJFQtIjjZOp7rel621MFrDVzjgGh53WnTv90MpfJ4F0%2BKv8DCEMQABoMNjM3NDIzMTgzODA1Igx55Jci%2BHOIDa8%2BW1gq3APMS8BxyrjUiQC7VIr1aycaNfy99VsudOfsftu2TqpttROiVw0qD7OTAKAla0AJ6A1dXNTkiMe0R007MXvFZ53IHcWmZLokmYifRbA2egfkCaIEzpY7J326jOjm1GUDViYwc6wsIbpI9MBJqCG3EUEIU1jCN734kkUOFN18WlTwZ86RxFHBpVXM%2BnmuTvd8YyZR3YT6zG1iB3aQSFLJjZBKDHX9%2BN5pdhWJJqEMk0exAKg8%2BzytMgWLLOznVL1VsRPimiDKupEoNjoxkeWzJOo0v0tp3AUG4oN%2BQUYk9uARq%2BISemSUcpXK8hTpBjXBPxXe3SbNOLlXsyVkGb%2Bsw3gpqfxcqBiXXScmEY3PSoaE941kNoNwS48oxyUi7kbVNKs7eL%2FHsjyFou3uJfwTGmUFZcFCDP%2BGN7nafJxUSOZ6mnuk3Tb74L6fksfktDKwv2ynYvZeeaf2iLo5fgFPw5sTWZ6yInjzK4qXYXxPa6xSzdeHB9dopizcs8ZUmhyUXFZl7wX5r1IShCNbaetIvowu7IA2Fp10qcXNMBT3NOyecEx7Q7E7N46yv%2Bqo%2Bs8LcWmcsfAqKguBipXRz0mqt7ugKgwCXGw%2BsS4wrMMHr85uZB0AS5Scyoemz5dnwTDD8Yy9BjqkATaAnF2eHQU4fjz8NHAGyvfDkm%2FcftUTibert9%2FpCU5FkkJ%2BBoRAQ0j4j5rldm021rh7wZLHbrYloLFXptxoHq8%2BZ0wm02gEEuWPHkHFJoYHwDsfBKfoFhpcK7p37wyMtPQ5Uewgr29xM1h6snmNwGVDYAYXz34FtfMPqbWQdkUoWsqGHrj3YZ4d6itGU2ymwlEH3IPLC2BZOoVlA8tYlRvNpkCw&X-Amz-Signature=ae87f94b51f8ce637034196a572692bfbab742a09472f5691a8272d7c9fa50db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NASWPX6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCXcgd8zZqgTqmdxgRWEVDeYCkSY17vY3RRyvuX%2F7vLKgIhAJFQtIjjZOp7rel621MFrDVzjgGh53WnTv90MpfJ4F0%2BKv8DCEMQABoMNjM3NDIzMTgzODA1Igx55Jci%2BHOIDa8%2BW1gq3APMS8BxyrjUiQC7VIr1aycaNfy99VsudOfsftu2TqpttROiVw0qD7OTAKAla0AJ6A1dXNTkiMe0R007MXvFZ53IHcWmZLokmYifRbA2egfkCaIEzpY7J326jOjm1GUDViYwc6wsIbpI9MBJqCG3EUEIU1jCN734kkUOFN18WlTwZ86RxFHBpVXM%2BnmuTvd8YyZR3YT6zG1iB3aQSFLJjZBKDHX9%2BN5pdhWJJqEMk0exAKg8%2BzytMgWLLOznVL1VsRPimiDKupEoNjoxkeWzJOo0v0tp3AUG4oN%2BQUYk9uARq%2BISemSUcpXK8hTpBjXBPxXe3SbNOLlXsyVkGb%2Bsw3gpqfxcqBiXXScmEY3PSoaE941kNoNwS48oxyUi7kbVNKs7eL%2FHsjyFou3uJfwTGmUFZcFCDP%2BGN7nafJxUSOZ6mnuk3Tb74L6fksfktDKwv2ynYvZeeaf2iLo5fgFPw5sTWZ6yInjzK4qXYXxPa6xSzdeHB9dopizcs8ZUmhyUXFZl7wX5r1IShCNbaetIvowu7IA2Fp10qcXNMBT3NOyecEx7Q7E7N46yv%2Bqo%2Bs8LcWmcsfAqKguBipXRz0mqt7ugKgwCXGw%2BsS4wrMMHr85uZB0AS5Scyoemz5dnwTDD8Yy9BjqkATaAnF2eHQU4fjz8NHAGyvfDkm%2FcftUTibert9%2FpCU5FkkJ%2BBoRAQ0j4j5rldm021rh7wZLHbrYloLFXptxoHq8%2BZ0wm02gEEuWPHkHFJoYHwDsfBKfoFhpcK7p37wyMtPQ5Uewgr29xM1h6snmNwGVDYAYXz34FtfMPqbWQdkUoWsqGHrj3YZ4d6itGU2ymwlEH3IPLC2BZOoVlA8tYlRvNpkCw&X-Amz-Signature=fbe6b486f515125d2333de7b6d0702f7b6fc6c2db10d20e1580bcceb85d87b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
