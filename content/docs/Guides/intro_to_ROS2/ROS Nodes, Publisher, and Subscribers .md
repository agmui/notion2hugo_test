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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5IGRFD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBkjHtEG69Q6iKY9a0WdtGbCJWrDsfQk2BO%2F%2Fk9g4X3bAiB%2FVjD5WB2MNF9gsv%2FxC7xwC9ZVTy3fqcXwpWPHe9q94ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbqxwXJTqac5ztVkHKtwDAhtUdy5ErTiqe9wwa4leh3cxR9uMRL50osvLXJiIABV4BdXN9LdIuNpMnlFlaBUGgLgFALDZ8KEYXU7rQNotgJFvvOUgN%2BU7QB2JfAR4hyMrOgFOxG0%2F%2Fo6ao8Yr8MrdvNhAgzBUrQc45JNy77UcCAYFYqnGU4XWhMnfzAa2F8uGZwoeCl8jCW4vz8gcaPcKaY4tgGLDzTiVa4N39KKwa3FXmmFZeST64PA%2BUAjdVk6EDt%2Fjy8AR1HypsMODK1lhgMZONryXBg%2FdoNEK0VgWtzpVslNKZQ%2FF74c8Da7uW%2FxOMXTRdtTyU5L0BpwB4mWoJsvS9Gp28zgs9q2wA0ZoRcPeTdNAtvu8DrKSPLEs316CkXyXt6N8jX9vIIP9ayhiUjpXRODPZv8SeOVX1JiGIFW0x1LvrnVy7EF%2BR6zuixinLHA9cI00hpgQSMn%2FAvZ0BVpMe5g0%2FPoARCvJ1jIf6i5oEyYGULghptAaud3sNRPY37bT8HSXPhw0Yl%2BzDcCu%2Bm4MZgd%2FReXuSYRQJqww0p9wKBTnY7dtUBel%2Fosm5Y7S%2B%2FzsNjVkl59sGwZW%2FO1Nn8jtpzc2ULH9A8vUYsSdpnXTkH4YvN9BbkrYGYPAMgmk0U%2FW6WAgtM%2Bzc9wwt6qevwY6pgE683qOqi0b%2FNB22auvwzmfkoFjhKdze69Dk0uh8mh1%2FUPZMzec5p2IWqKlm5ffXLgMKHFjOYvsOEMzaMtdBCC0wq%2BOd6Z70M9OOSZ8q%2BxeoXRTi4Y1pmx%2BSZ%2FUmfiaqZNig5C6D5gpgAKk14MEE%2BxfsVB%2BpjqoW3%2FAyV8C5VAJekF6kcbXK5MwaVzbnOv5eAZBsfYRBZlsAzD7bs8CHXr7NT15EedC&X-Amz-Signature=e72af361446c5abf774287d381eb66906a17794ccd4793f739484f7e5ba88ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5IGRFD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBkjHtEG69Q6iKY9a0WdtGbCJWrDsfQk2BO%2F%2Fk9g4X3bAiB%2FVjD5WB2MNF9gsv%2FxC7xwC9ZVTy3fqcXwpWPHe9q94ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbqxwXJTqac5ztVkHKtwDAhtUdy5ErTiqe9wwa4leh3cxR9uMRL50osvLXJiIABV4BdXN9LdIuNpMnlFlaBUGgLgFALDZ8KEYXU7rQNotgJFvvOUgN%2BU7QB2JfAR4hyMrOgFOxG0%2F%2Fo6ao8Yr8MrdvNhAgzBUrQc45JNy77UcCAYFYqnGU4XWhMnfzAa2F8uGZwoeCl8jCW4vz8gcaPcKaY4tgGLDzTiVa4N39KKwa3FXmmFZeST64PA%2BUAjdVk6EDt%2Fjy8AR1HypsMODK1lhgMZONryXBg%2FdoNEK0VgWtzpVslNKZQ%2FF74c8Da7uW%2FxOMXTRdtTyU5L0BpwB4mWoJsvS9Gp28zgs9q2wA0ZoRcPeTdNAtvu8DrKSPLEs316CkXyXt6N8jX9vIIP9ayhiUjpXRODPZv8SeOVX1JiGIFW0x1LvrnVy7EF%2BR6zuixinLHA9cI00hpgQSMn%2FAvZ0BVpMe5g0%2FPoARCvJ1jIf6i5oEyYGULghptAaud3sNRPY37bT8HSXPhw0Yl%2BzDcCu%2Bm4MZgd%2FReXuSYRQJqww0p9wKBTnY7dtUBel%2Fosm5Y7S%2B%2FzsNjVkl59sGwZW%2FO1Nn8jtpzc2ULH9A8vUYsSdpnXTkH4YvN9BbkrYGYPAMgmk0U%2FW6WAgtM%2Bzc9wwt6qevwY6pgE683qOqi0b%2FNB22auvwzmfkoFjhKdze69Dk0uh8mh1%2FUPZMzec5p2IWqKlm5ffXLgMKHFjOYvsOEMzaMtdBCC0wq%2BOd6Z70M9OOSZ8q%2BxeoXRTi4Y1pmx%2BSZ%2FUmfiaqZNig5C6D5gpgAKk14MEE%2BxfsVB%2BpjqoW3%2FAyV8C5VAJekF6kcbXK5MwaVzbnOv5eAZBsfYRBZlsAzD7bs8CHXr7NT15EedC&X-Amz-Signature=05ddaf2bbe4a1d4f905ca860e8e47668f4bfd8413aa72ef73a542043f8231163&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5IGRFD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBkjHtEG69Q6iKY9a0WdtGbCJWrDsfQk2BO%2F%2Fk9g4X3bAiB%2FVjD5WB2MNF9gsv%2FxC7xwC9ZVTy3fqcXwpWPHe9q94ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbqxwXJTqac5ztVkHKtwDAhtUdy5ErTiqe9wwa4leh3cxR9uMRL50osvLXJiIABV4BdXN9LdIuNpMnlFlaBUGgLgFALDZ8KEYXU7rQNotgJFvvOUgN%2BU7QB2JfAR4hyMrOgFOxG0%2F%2Fo6ao8Yr8MrdvNhAgzBUrQc45JNy77UcCAYFYqnGU4XWhMnfzAa2F8uGZwoeCl8jCW4vz8gcaPcKaY4tgGLDzTiVa4N39KKwa3FXmmFZeST64PA%2BUAjdVk6EDt%2Fjy8AR1HypsMODK1lhgMZONryXBg%2FdoNEK0VgWtzpVslNKZQ%2FF74c8Da7uW%2FxOMXTRdtTyU5L0BpwB4mWoJsvS9Gp28zgs9q2wA0ZoRcPeTdNAtvu8DrKSPLEs316CkXyXt6N8jX9vIIP9ayhiUjpXRODPZv8SeOVX1JiGIFW0x1LvrnVy7EF%2BR6zuixinLHA9cI00hpgQSMn%2FAvZ0BVpMe5g0%2FPoARCvJ1jIf6i5oEyYGULghptAaud3sNRPY37bT8HSXPhw0Yl%2BzDcCu%2Bm4MZgd%2FReXuSYRQJqww0p9wKBTnY7dtUBel%2Fosm5Y7S%2B%2FzsNjVkl59sGwZW%2FO1Nn8jtpzc2ULH9A8vUYsSdpnXTkH4YvN9BbkrYGYPAMgmk0U%2FW6WAgtM%2Bzc9wwt6qevwY6pgE683qOqi0b%2FNB22auvwzmfkoFjhKdze69Dk0uh8mh1%2FUPZMzec5p2IWqKlm5ffXLgMKHFjOYvsOEMzaMtdBCC0wq%2BOd6Z70M9OOSZ8q%2BxeoXRTi4Y1pmx%2BSZ%2FUmfiaqZNig5C6D5gpgAKk14MEE%2BxfsVB%2BpjqoW3%2FAyV8C5VAJekF6kcbXK5MwaVzbnOv5eAZBsfYRBZlsAzD7bs8CHXr7NT15EedC&X-Amz-Signature=a462e945cd5ff3b8f36064f5f0356f254d4f7727a4662726a061d1ddc4effd42&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5IGRFD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBkjHtEG69Q6iKY9a0WdtGbCJWrDsfQk2BO%2F%2Fk9g4X3bAiB%2FVjD5WB2MNF9gsv%2FxC7xwC9ZVTy3fqcXwpWPHe9q94ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbqxwXJTqac5ztVkHKtwDAhtUdy5ErTiqe9wwa4leh3cxR9uMRL50osvLXJiIABV4BdXN9LdIuNpMnlFlaBUGgLgFALDZ8KEYXU7rQNotgJFvvOUgN%2BU7QB2JfAR4hyMrOgFOxG0%2F%2Fo6ao8Yr8MrdvNhAgzBUrQc45JNy77UcCAYFYqnGU4XWhMnfzAa2F8uGZwoeCl8jCW4vz8gcaPcKaY4tgGLDzTiVa4N39KKwa3FXmmFZeST64PA%2BUAjdVk6EDt%2Fjy8AR1HypsMODK1lhgMZONryXBg%2FdoNEK0VgWtzpVslNKZQ%2FF74c8Da7uW%2FxOMXTRdtTyU5L0BpwB4mWoJsvS9Gp28zgs9q2wA0ZoRcPeTdNAtvu8DrKSPLEs316CkXyXt6N8jX9vIIP9ayhiUjpXRODPZv8SeOVX1JiGIFW0x1LvrnVy7EF%2BR6zuixinLHA9cI00hpgQSMn%2FAvZ0BVpMe5g0%2FPoARCvJ1jIf6i5oEyYGULghptAaud3sNRPY37bT8HSXPhw0Yl%2BzDcCu%2Bm4MZgd%2FReXuSYRQJqww0p9wKBTnY7dtUBel%2Fosm5Y7S%2B%2FzsNjVkl59sGwZW%2FO1Nn8jtpzc2ULH9A8vUYsSdpnXTkH4YvN9BbkrYGYPAMgmk0U%2FW6WAgtM%2Bzc9wwt6qevwY6pgE683qOqi0b%2FNB22auvwzmfkoFjhKdze69Dk0uh8mh1%2FUPZMzec5p2IWqKlm5ffXLgMKHFjOYvsOEMzaMtdBCC0wq%2BOd6Z70M9OOSZ8q%2BxeoXRTi4Y1pmx%2BSZ%2FUmfiaqZNig5C6D5gpgAKk14MEE%2BxfsVB%2BpjqoW3%2FAyV8C5VAJekF6kcbXK5MwaVzbnOv5eAZBsfYRBZlsAzD7bs8CHXr7NT15EedC&X-Amz-Signature=26392df673d2b8613e28003cc87d4936282e57ef8a2b57e14642f680e26d7f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5IGRFD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBkjHtEG69Q6iKY9a0WdtGbCJWrDsfQk2BO%2F%2Fk9g4X3bAiB%2FVjD5WB2MNF9gsv%2FxC7xwC9ZVTy3fqcXwpWPHe9q94ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbqxwXJTqac5ztVkHKtwDAhtUdy5ErTiqe9wwa4leh3cxR9uMRL50osvLXJiIABV4BdXN9LdIuNpMnlFlaBUGgLgFALDZ8KEYXU7rQNotgJFvvOUgN%2BU7QB2JfAR4hyMrOgFOxG0%2F%2Fo6ao8Yr8MrdvNhAgzBUrQc45JNy77UcCAYFYqnGU4XWhMnfzAa2F8uGZwoeCl8jCW4vz8gcaPcKaY4tgGLDzTiVa4N39KKwa3FXmmFZeST64PA%2BUAjdVk6EDt%2Fjy8AR1HypsMODK1lhgMZONryXBg%2FdoNEK0VgWtzpVslNKZQ%2FF74c8Da7uW%2FxOMXTRdtTyU5L0BpwB4mWoJsvS9Gp28zgs9q2wA0ZoRcPeTdNAtvu8DrKSPLEs316CkXyXt6N8jX9vIIP9ayhiUjpXRODPZv8SeOVX1JiGIFW0x1LvrnVy7EF%2BR6zuixinLHA9cI00hpgQSMn%2FAvZ0BVpMe5g0%2FPoARCvJ1jIf6i5oEyYGULghptAaud3sNRPY37bT8HSXPhw0Yl%2BzDcCu%2Bm4MZgd%2FReXuSYRQJqww0p9wKBTnY7dtUBel%2Fosm5Y7S%2B%2FzsNjVkl59sGwZW%2FO1Nn8jtpzc2ULH9A8vUYsSdpnXTkH4YvN9BbkrYGYPAMgmk0U%2FW6WAgtM%2Bzc9wwt6qevwY6pgE683qOqi0b%2FNB22auvwzmfkoFjhKdze69Dk0uh8mh1%2FUPZMzec5p2IWqKlm5ffXLgMKHFjOYvsOEMzaMtdBCC0wq%2BOd6Z70M9OOSZ8q%2BxeoXRTi4Y1pmx%2BSZ%2FUmfiaqZNig5C6D5gpgAKk14MEE%2BxfsVB%2BpjqoW3%2FAyV8C5VAJekF6kcbXK5MwaVzbnOv5eAZBsfYRBZlsAzD7bs8CHXr7NT15EedC&X-Amz-Signature=0feded4ca2cd85473cf511eac8f65312b4f226a57d80cdee0255d585beb71eac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5IGRFD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBkjHtEG69Q6iKY9a0WdtGbCJWrDsfQk2BO%2F%2Fk9g4X3bAiB%2FVjD5WB2MNF9gsv%2FxC7xwC9ZVTy3fqcXwpWPHe9q94ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbqxwXJTqac5ztVkHKtwDAhtUdy5ErTiqe9wwa4leh3cxR9uMRL50osvLXJiIABV4BdXN9LdIuNpMnlFlaBUGgLgFALDZ8KEYXU7rQNotgJFvvOUgN%2BU7QB2JfAR4hyMrOgFOxG0%2F%2Fo6ao8Yr8MrdvNhAgzBUrQc45JNy77UcCAYFYqnGU4XWhMnfzAa2F8uGZwoeCl8jCW4vz8gcaPcKaY4tgGLDzTiVa4N39KKwa3FXmmFZeST64PA%2BUAjdVk6EDt%2Fjy8AR1HypsMODK1lhgMZONryXBg%2FdoNEK0VgWtzpVslNKZQ%2FF74c8Da7uW%2FxOMXTRdtTyU5L0BpwB4mWoJsvS9Gp28zgs9q2wA0ZoRcPeTdNAtvu8DrKSPLEs316CkXyXt6N8jX9vIIP9ayhiUjpXRODPZv8SeOVX1JiGIFW0x1LvrnVy7EF%2BR6zuixinLHA9cI00hpgQSMn%2FAvZ0BVpMe5g0%2FPoARCvJ1jIf6i5oEyYGULghptAaud3sNRPY37bT8HSXPhw0Yl%2BzDcCu%2Bm4MZgd%2FReXuSYRQJqww0p9wKBTnY7dtUBel%2Fosm5Y7S%2B%2FzsNjVkl59sGwZW%2FO1Nn8jtpzc2ULH9A8vUYsSdpnXTkH4YvN9BbkrYGYPAMgmk0U%2FW6WAgtM%2Bzc9wwt6qevwY6pgE683qOqi0b%2FNB22auvwzmfkoFjhKdze69Dk0uh8mh1%2FUPZMzec5p2IWqKlm5ffXLgMKHFjOYvsOEMzaMtdBCC0wq%2BOd6Z70M9OOSZ8q%2BxeoXRTi4Y1pmx%2BSZ%2FUmfiaqZNig5C6D5gpgAKk14MEE%2BxfsVB%2BpjqoW3%2FAyV8C5VAJekF6kcbXK5MwaVzbnOv5eAZBsfYRBZlsAzD7bs8CHXr7NT15EedC&X-Amz-Signature=052845b56865ce2b9611e1c828c5d0f9b75d625673421412a972287dbbb32ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5IGRFD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBkjHtEG69Q6iKY9a0WdtGbCJWrDsfQk2BO%2F%2Fk9g4X3bAiB%2FVjD5WB2MNF9gsv%2FxC7xwC9ZVTy3fqcXwpWPHe9q94ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbqxwXJTqac5ztVkHKtwDAhtUdy5ErTiqe9wwa4leh3cxR9uMRL50osvLXJiIABV4BdXN9LdIuNpMnlFlaBUGgLgFALDZ8KEYXU7rQNotgJFvvOUgN%2BU7QB2JfAR4hyMrOgFOxG0%2F%2Fo6ao8Yr8MrdvNhAgzBUrQc45JNy77UcCAYFYqnGU4XWhMnfzAa2F8uGZwoeCl8jCW4vz8gcaPcKaY4tgGLDzTiVa4N39KKwa3FXmmFZeST64PA%2BUAjdVk6EDt%2Fjy8AR1HypsMODK1lhgMZONryXBg%2FdoNEK0VgWtzpVslNKZQ%2FF74c8Da7uW%2FxOMXTRdtTyU5L0BpwB4mWoJsvS9Gp28zgs9q2wA0ZoRcPeTdNAtvu8DrKSPLEs316CkXyXt6N8jX9vIIP9ayhiUjpXRODPZv8SeOVX1JiGIFW0x1LvrnVy7EF%2BR6zuixinLHA9cI00hpgQSMn%2FAvZ0BVpMe5g0%2FPoARCvJ1jIf6i5oEyYGULghptAaud3sNRPY37bT8HSXPhw0Yl%2BzDcCu%2Bm4MZgd%2FReXuSYRQJqww0p9wKBTnY7dtUBel%2Fosm5Y7S%2B%2FzsNjVkl59sGwZW%2FO1Nn8jtpzc2ULH9A8vUYsSdpnXTkH4YvN9BbkrYGYPAMgmk0U%2FW6WAgtM%2Bzc9wwt6qevwY6pgE683qOqi0b%2FNB22auvwzmfkoFjhKdze69Dk0uh8mh1%2FUPZMzec5p2IWqKlm5ffXLgMKHFjOYvsOEMzaMtdBCC0wq%2BOd6Z70M9OOSZ8q%2BxeoXRTi4Y1pmx%2BSZ%2FUmfiaqZNig5C6D5gpgAKk14MEE%2BxfsVB%2BpjqoW3%2FAyV8C5VAJekF6kcbXK5MwaVzbnOv5eAZBsfYRBZlsAzD7bs8CHXr7NT15EedC&X-Amz-Signature=f0848c53dd77bb1e99757ee0357107c9a53609844ea5c2c55c0c489ec262a0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ5IGRFD%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBkjHtEG69Q6iKY9a0WdtGbCJWrDsfQk2BO%2F%2Fk9g4X3bAiB%2FVjD5WB2MNF9gsv%2FxC7xwC9ZVTy3fqcXwpWPHe9q94ir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbqxwXJTqac5ztVkHKtwDAhtUdy5ErTiqe9wwa4leh3cxR9uMRL50osvLXJiIABV4BdXN9LdIuNpMnlFlaBUGgLgFALDZ8KEYXU7rQNotgJFvvOUgN%2BU7QB2JfAR4hyMrOgFOxG0%2F%2Fo6ao8Yr8MrdvNhAgzBUrQc45JNy77UcCAYFYqnGU4XWhMnfzAa2F8uGZwoeCl8jCW4vz8gcaPcKaY4tgGLDzTiVa4N39KKwa3FXmmFZeST64PA%2BUAjdVk6EDt%2Fjy8AR1HypsMODK1lhgMZONryXBg%2FdoNEK0VgWtzpVslNKZQ%2FF74c8Da7uW%2FxOMXTRdtTyU5L0BpwB4mWoJsvS9Gp28zgs9q2wA0ZoRcPeTdNAtvu8DrKSPLEs316CkXyXt6N8jX9vIIP9ayhiUjpXRODPZv8SeOVX1JiGIFW0x1LvrnVy7EF%2BR6zuixinLHA9cI00hpgQSMn%2FAvZ0BVpMe5g0%2FPoARCvJ1jIf6i5oEyYGULghptAaud3sNRPY37bT8HSXPhw0Yl%2BzDcCu%2Bm4MZgd%2FReXuSYRQJqww0p9wKBTnY7dtUBel%2Fosm5Y7S%2B%2FzsNjVkl59sGwZW%2FO1Nn8jtpzc2ULH9A8vUYsSdpnXTkH4YvN9BbkrYGYPAMgmk0U%2FW6WAgtM%2Bzc9wwt6qevwY6pgE683qOqi0b%2FNB22auvwzmfkoFjhKdze69Dk0uh8mh1%2FUPZMzec5p2IWqKlm5ffXLgMKHFjOYvsOEMzaMtdBCC0wq%2BOd6Z70M9OOSZ8q%2BxeoXRTi4Y1pmx%2BSZ%2FUmfiaqZNig5C6D5gpgAKk14MEE%2BxfsVB%2BpjqoW3%2FAyV8C5VAJekF6kcbXK5MwaVzbnOv5eAZBsfYRBZlsAzD7bs8CHXr7NT15EedC&X-Amz-Signature=b8c796e0b1024a2b497ad2a81b22b55c9f565f99a0c5a160ad671de8561415de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
