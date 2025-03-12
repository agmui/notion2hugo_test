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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ROOXAKR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHSC2MqJhYOckz2UjXZpugX2r5%2FIxrj187FnfrPWJqxWAiAaWvura1XZ%2BwSPEywUzpBc%2BbGksPNOG2RFVAKsH6HQCSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgiNEDzDi3Q2eSO4sKtwDtvZfaJ6T0XiTXE3tOw4tKAPXVFOvKq%2FaGzCqjfN3%2FbjF4TUivlbK41%2F1zr6iKFNi1%2B%2FW5uLeVQGXF5t6lnQQoSQtSk4O9Asdvf4kKpN0BwZNuL1yC3nOgsicX9XTxW74EOvSqKRsIg1AB8AU131%2Fc6xtZkA8jzwNXQvo63LgcjhsZ8QbiyzNE1BYVMpauz7CyL2KTjok2%2BAitufrlk7nMZzT6crcGK5Ucr%2FOvVxxd45Jsd6Tuxt%2FiKUTGWSXkpPQ7bUwWdVk3KgSkx%2FR%2FS86auN6Om03fIh%2FPO420KnSzOf4ndOTN2MX4GLEt368YxIVM4nf04EmhkNUaW4W%2Fc8cBaAM%2FUA6EL3mQe9cp69%2Fuute4ZzxnKsOg0Cgf83yY49%2BjsURoupOvDpY1ScpDMAmUv74%2BYeTGLHlV7IPO9lXGcC3wCY6Ex%2FRV8qwA58DZzG5g%2B6aFShQrC26BdatvJ5AMc%2Bwki9c%2BU5odhPptSeGWj8VXzufoulZUMkSwqQUVKoXzaBRm16rCu%2Bb2fymqU5bT4E4qczJshMU1IF5JNY%2BUulQI%2FKk%2B%2Brqna1KoTLt86Hc1CBO3tGIabVgBFlDcCZ2GvzBpqgP8nvEoz9A7Ubd0D52jIzNbsxvIrKX%2BB0wi9rDvgY6pgEcAPbPxo%2BbQ4iTr2gNhn5DG1fGd1bu7QL3l8qO%2BW%2FPDxK4KT0WR3A9cPYtg3gsGRFZizm8g8DsNqfMyRSJ488lQP33O6o76RF4aU87ONoU%2BJmWiy1KmtkNlmNwrlyzm%2BXNKASKSuNnW9w%2BPStby8o81hGVthZdhRgCTApB2iILgVfQUzm1Cjxz2AfghOruPALzyp%2Beo1y%2FZLPMOfb%2FEeBm23MYCS%2FV&X-Amz-Signature=92b17324a1045af00f44d2fc983635175a9bed129946f0bd24e105ca166d15d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ROOXAKR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHSC2MqJhYOckz2UjXZpugX2r5%2FIxrj187FnfrPWJqxWAiAaWvura1XZ%2BwSPEywUzpBc%2BbGksPNOG2RFVAKsH6HQCSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgiNEDzDi3Q2eSO4sKtwDtvZfaJ6T0XiTXE3tOw4tKAPXVFOvKq%2FaGzCqjfN3%2FbjF4TUivlbK41%2F1zr6iKFNi1%2B%2FW5uLeVQGXF5t6lnQQoSQtSk4O9Asdvf4kKpN0BwZNuL1yC3nOgsicX9XTxW74EOvSqKRsIg1AB8AU131%2Fc6xtZkA8jzwNXQvo63LgcjhsZ8QbiyzNE1BYVMpauz7CyL2KTjok2%2BAitufrlk7nMZzT6crcGK5Ucr%2FOvVxxd45Jsd6Tuxt%2FiKUTGWSXkpPQ7bUwWdVk3KgSkx%2FR%2FS86auN6Om03fIh%2FPO420KnSzOf4ndOTN2MX4GLEt368YxIVM4nf04EmhkNUaW4W%2Fc8cBaAM%2FUA6EL3mQe9cp69%2Fuute4ZzxnKsOg0Cgf83yY49%2BjsURoupOvDpY1ScpDMAmUv74%2BYeTGLHlV7IPO9lXGcC3wCY6Ex%2FRV8qwA58DZzG5g%2B6aFShQrC26BdatvJ5AMc%2Bwki9c%2BU5odhPptSeGWj8VXzufoulZUMkSwqQUVKoXzaBRm16rCu%2Bb2fymqU5bT4E4qczJshMU1IF5JNY%2BUulQI%2FKk%2B%2Brqna1KoTLt86Hc1CBO3tGIabVgBFlDcCZ2GvzBpqgP8nvEoz9A7Ubd0D52jIzNbsxvIrKX%2BB0wi9rDvgY6pgEcAPbPxo%2BbQ4iTr2gNhn5DG1fGd1bu7QL3l8qO%2BW%2FPDxK4KT0WR3A9cPYtg3gsGRFZizm8g8DsNqfMyRSJ488lQP33O6o76RF4aU87ONoU%2BJmWiy1KmtkNlmNwrlyzm%2BXNKASKSuNnW9w%2BPStby8o81hGVthZdhRgCTApB2iILgVfQUzm1Cjxz2AfghOruPALzyp%2Beo1y%2FZLPMOfb%2FEeBm23MYCS%2FV&X-Amz-Signature=6cfcf2c521f022d835889ec9a551c200f397c7478534b0e22828317558a26919&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ROOXAKR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHSC2MqJhYOckz2UjXZpugX2r5%2FIxrj187FnfrPWJqxWAiAaWvura1XZ%2BwSPEywUzpBc%2BbGksPNOG2RFVAKsH6HQCSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgiNEDzDi3Q2eSO4sKtwDtvZfaJ6T0XiTXE3tOw4tKAPXVFOvKq%2FaGzCqjfN3%2FbjF4TUivlbK41%2F1zr6iKFNi1%2B%2FW5uLeVQGXF5t6lnQQoSQtSk4O9Asdvf4kKpN0BwZNuL1yC3nOgsicX9XTxW74EOvSqKRsIg1AB8AU131%2Fc6xtZkA8jzwNXQvo63LgcjhsZ8QbiyzNE1BYVMpauz7CyL2KTjok2%2BAitufrlk7nMZzT6crcGK5Ucr%2FOvVxxd45Jsd6Tuxt%2FiKUTGWSXkpPQ7bUwWdVk3KgSkx%2FR%2FS86auN6Om03fIh%2FPO420KnSzOf4ndOTN2MX4GLEt368YxIVM4nf04EmhkNUaW4W%2Fc8cBaAM%2FUA6EL3mQe9cp69%2Fuute4ZzxnKsOg0Cgf83yY49%2BjsURoupOvDpY1ScpDMAmUv74%2BYeTGLHlV7IPO9lXGcC3wCY6Ex%2FRV8qwA58DZzG5g%2B6aFShQrC26BdatvJ5AMc%2Bwki9c%2BU5odhPptSeGWj8VXzufoulZUMkSwqQUVKoXzaBRm16rCu%2Bb2fymqU5bT4E4qczJshMU1IF5JNY%2BUulQI%2FKk%2B%2Brqna1KoTLt86Hc1CBO3tGIabVgBFlDcCZ2GvzBpqgP8nvEoz9A7Ubd0D52jIzNbsxvIrKX%2BB0wi9rDvgY6pgEcAPbPxo%2BbQ4iTr2gNhn5DG1fGd1bu7QL3l8qO%2BW%2FPDxK4KT0WR3A9cPYtg3gsGRFZizm8g8DsNqfMyRSJ488lQP33O6o76RF4aU87ONoU%2BJmWiy1KmtkNlmNwrlyzm%2BXNKASKSuNnW9w%2BPStby8o81hGVthZdhRgCTApB2iILgVfQUzm1Cjxz2AfghOruPALzyp%2Beo1y%2FZLPMOfb%2FEeBm23MYCS%2FV&X-Amz-Signature=94c0298477c6969a11814d69251fb1fa590dbc98263f55be0ef1e4703a27647c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ROOXAKR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHSC2MqJhYOckz2UjXZpugX2r5%2FIxrj187FnfrPWJqxWAiAaWvura1XZ%2BwSPEywUzpBc%2BbGksPNOG2RFVAKsH6HQCSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgiNEDzDi3Q2eSO4sKtwDtvZfaJ6T0XiTXE3tOw4tKAPXVFOvKq%2FaGzCqjfN3%2FbjF4TUivlbK41%2F1zr6iKFNi1%2B%2FW5uLeVQGXF5t6lnQQoSQtSk4O9Asdvf4kKpN0BwZNuL1yC3nOgsicX9XTxW74EOvSqKRsIg1AB8AU131%2Fc6xtZkA8jzwNXQvo63LgcjhsZ8QbiyzNE1BYVMpauz7CyL2KTjok2%2BAitufrlk7nMZzT6crcGK5Ucr%2FOvVxxd45Jsd6Tuxt%2FiKUTGWSXkpPQ7bUwWdVk3KgSkx%2FR%2FS86auN6Om03fIh%2FPO420KnSzOf4ndOTN2MX4GLEt368YxIVM4nf04EmhkNUaW4W%2Fc8cBaAM%2FUA6EL3mQe9cp69%2Fuute4ZzxnKsOg0Cgf83yY49%2BjsURoupOvDpY1ScpDMAmUv74%2BYeTGLHlV7IPO9lXGcC3wCY6Ex%2FRV8qwA58DZzG5g%2B6aFShQrC26BdatvJ5AMc%2Bwki9c%2BU5odhPptSeGWj8VXzufoulZUMkSwqQUVKoXzaBRm16rCu%2Bb2fymqU5bT4E4qczJshMU1IF5JNY%2BUulQI%2FKk%2B%2Brqna1KoTLt86Hc1CBO3tGIabVgBFlDcCZ2GvzBpqgP8nvEoz9A7Ubd0D52jIzNbsxvIrKX%2BB0wi9rDvgY6pgEcAPbPxo%2BbQ4iTr2gNhn5DG1fGd1bu7QL3l8qO%2BW%2FPDxK4KT0WR3A9cPYtg3gsGRFZizm8g8DsNqfMyRSJ488lQP33O6o76RF4aU87ONoU%2BJmWiy1KmtkNlmNwrlyzm%2BXNKASKSuNnW9w%2BPStby8o81hGVthZdhRgCTApB2iILgVfQUzm1Cjxz2AfghOruPALzyp%2Beo1y%2FZLPMOfb%2FEeBm23MYCS%2FV&X-Amz-Signature=aaf0d67d8bef6379c52815c809390da2acca9a5d687ebd95fbff2375e89714e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ROOXAKR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHSC2MqJhYOckz2UjXZpugX2r5%2FIxrj187FnfrPWJqxWAiAaWvura1XZ%2BwSPEywUzpBc%2BbGksPNOG2RFVAKsH6HQCSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgiNEDzDi3Q2eSO4sKtwDtvZfaJ6T0XiTXE3tOw4tKAPXVFOvKq%2FaGzCqjfN3%2FbjF4TUivlbK41%2F1zr6iKFNi1%2B%2FW5uLeVQGXF5t6lnQQoSQtSk4O9Asdvf4kKpN0BwZNuL1yC3nOgsicX9XTxW74EOvSqKRsIg1AB8AU131%2Fc6xtZkA8jzwNXQvo63LgcjhsZ8QbiyzNE1BYVMpauz7CyL2KTjok2%2BAitufrlk7nMZzT6crcGK5Ucr%2FOvVxxd45Jsd6Tuxt%2FiKUTGWSXkpPQ7bUwWdVk3KgSkx%2FR%2FS86auN6Om03fIh%2FPO420KnSzOf4ndOTN2MX4GLEt368YxIVM4nf04EmhkNUaW4W%2Fc8cBaAM%2FUA6EL3mQe9cp69%2Fuute4ZzxnKsOg0Cgf83yY49%2BjsURoupOvDpY1ScpDMAmUv74%2BYeTGLHlV7IPO9lXGcC3wCY6Ex%2FRV8qwA58DZzG5g%2B6aFShQrC26BdatvJ5AMc%2Bwki9c%2BU5odhPptSeGWj8VXzufoulZUMkSwqQUVKoXzaBRm16rCu%2Bb2fymqU5bT4E4qczJshMU1IF5JNY%2BUulQI%2FKk%2B%2Brqna1KoTLt86Hc1CBO3tGIabVgBFlDcCZ2GvzBpqgP8nvEoz9A7Ubd0D52jIzNbsxvIrKX%2BB0wi9rDvgY6pgEcAPbPxo%2BbQ4iTr2gNhn5DG1fGd1bu7QL3l8qO%2BW%2FPDxK4KT0WR3A9cPYtg3gsGRFZizm8g8DsNqfMyRSJ488lQP33O6o76RF4aU87ONoU%2BJmWiy1KmtkNlmNwrlyzm%2BXNKASKSuNnW9w%2BPStby8o81hGVthZdhRgCTApB2iILgVfQUzm1Cjxz2AfghOruPALzyp%2Beo1y%2FZLPMOfb%2FEeBm23MYCS%2FV&X-Amz-Signature=e9619b51e6fd271e731c47cd7c8299bf1e55873b59b08cb6a32d82b6392ccdfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ROOXAKR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHSC2MqJhYOckz2UjXZpugX2r5%2FIxrj187FnfrPWJqxWAiAaWvura1XZ%2BwSPEywUzpBc%2BbGksPNOG2RFVAKsH6HQCSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgiNEDzDi3Q2eSO4sKtwDtvZfaJ6T0XiTXE3tOw4tKAPXVFOvKq%2FaGzCqjfN3%2FbjF4TUivlbK41%2F1zr6iKFNi1%2B%2FW5uLeVQGXF5t6lnQQoSQtSk4O9Asdvf4kKpN0BwZNuL1yC3nOgsicX9XTxW74EOvSqKRsIg1AB8AU131%2Fc6xtZkA8jzwNXQvo63LgcjhsZ8QbiyzNE1BYVMpauz7CyL2KTjok2%2BAitufrlk7nMZzT6crcGK5Ucr%2FOvVxxd45Jsd6Tuxt%2FiKUTGWSXkpPQ7bUwWdVk3KgSkx%2FR%2FS86auN6Om03fIh%2FPO420KnSzOf4ndOTN2MX4GLEt368YxIVM4nf04EmhkNUaW4W%2Fc8cBaAM%2FUA6EL3mQe9cp69%2Fuute4ZzxnKsOg0Cgf83yY49%2BjsURoupOvDpY1ScpDMAmUv74%2BYeTGLHlV7IPO9lXGcC3wCY6Ex%2FRV8qwA58DZzG5g%2B6aFShQrC26BdatvJ5AMc%2Bwki9c%2BU5odhPptSeGWj8VXzufoulZUMkSwqQUVKoXzaBRm16rCu%2Bb2fymqU5bT4E4qczJshMU1IF5JNY%2BUulQI%2FKk%2B%2Brqna1KoTLt86Hc1CBO3tGIabVgBFlDcCZ2GvzBpqgP8nvEoz9A7Ubd0D52jIzNbsxvIrKX%2BB0wi9rDvgY6pgEcAPbPxo%2BbQ4iTr2gNhn5DG1fGd1bu7QL3l8qO%2BW%2FPDxK4KT0WR3A9cPYtg3gsGRFZizm8g8DsNqfMyRSJ488lQP33O6o76RF4aU87ONoU%2BJmWiy1KmtkNlmNwrlyzm%2BXNKASKSuNnW9w%2BPStby8o81hGVthZdhRgCTApB2iILgVfQUzm1Cjxz2AfghOruPALzyp%2Beo1y%2FZLPMOfb%2FEeBm23MYCS%2FV&X-Amz-Signature=352f021a1c0c962115ad25a401ffba5f0e493d24fa7d2d9200039fabd74a2578&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ROOXAKR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHSC2MqJhYOckz2UjXZpugX2r5%2FIxrj187FnfrPWJqxWAiAaWvura1XZ%2BwSPEywUzpBc%2BbGksPNOG2RFVAKsH6HQCSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgiNEDzDi3Q2eSO4sKtwDtvZfaJ6T0XiTXE3tOw4tKAPXVFOvKq%2FaGzCqjfN3%2FbjF4TUivlbK41%2F1zr6iKFNi1%2B%2FW5uLeVQGXF5t6lnQQoSQtSk4O9Asdvf4kKpN0BwZNuL1yC3nOgsicX9XTxW74EOvSqKRsIg1AB8AU131%2Fc6xtZkA8jzwNXQvo63LgcjhsZ8QbiyzNE1BYVMpauz7CyL2KTjok2%2BAitufrlk7nMZzT6crcGK5Ucr%2FOvVxxd45Jsd6Tuxt%2FiKUTGWSXkpPQ7bUwWdVk3KgSkx%2FR%2FS86auN6Om03fIh%2FPO420KnSzOf4ndOTN2MX4GLEt368YxIVM4nf04EmhkNUaW4W%2Fc8cBaAM%2FUA6EL3mQe9cp69%2Fuute4ZzxnKsOg0Cgf83yY49%2BjsURoupOvDpY1ScpDMAmUv74%2BYeTGLHlV7IPO9lXGcC3wCY6Ex%2FRV8qwA58DZzG5g%2B6aFShQrC26BdatvJ5AMc%2Bwki9c%2BU5odhPptSeGWj8VXzufoulZUMkSwqQUVKoXzaBRm16rCu%2Bb2fymqU5bT4E4qczJshMU1IF5JNY%2BUulQI%2FKk%2B%2Brqna1KoTLt86Hc1CBO3tGIabVgBFlDcCZ2GvzBpqgP8nvEoz9A7Ubd0D52jIzNbsxvIrKX%2BB0wi9rDvgY6pgEcAPbPxo%2BbQ4iTr2gNhn5DG1fGd1bu7QL3l8qO%2BW%2FPDxK4KT0WR3A9cPYtg3gsGRFZizm8g8DsNqfMyRSJ488lQP33O6o76RF4aU87ONoU%2BJmWiy1KmtkNlmNwrlyzm%2BXNKASKSuNnW9w%2BPStby8o81hGVthZdhRgCTApB2iILgVfQUzm1Cjxz2AfghOruPALzyp%2Beo1y%2FZLPMOfb%2FEeBm23MYCS%2FV&X-Amz-Signature=f0a5df30cd4b8c8e0548c30d0181ab1166ba53573d2154ea4012a73bf0347902&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ROOXAKR%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHSC2MqJhYOckz2UjXZpugX2r5%2FIxrj187FnfrPWJqxWAiAaWvura1XZ%2BwSPEywUzpBc%2BbGksPNOG2RFVAKsH6HQCSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgiNEDzDi3Q2eSO4sKtwDtvZfaJ6T0XiTXE3tOw4tKAPXVFOvKq%2FaGzCqjfN3%2FbjF4TUivlbK41%2F1zr6iKFNi1%2B%2FW5uLeVQGXF5t6lnQQoSQtSk4O9Asdvf4kKpN0BwZNuL1yC3nOgsicX9XTxW74EOvSqKRsIg1AB8AU131%2Fc6xtZkA8jzwNXQvo63LgcjhsZ8QbiyzNE1BYVMpauz7CyL2KTjok2%2BAitufrlk7nMZzT6crcGK5Ucr%2FOvVxxd45Jsd6Tuxt%2FiKUTGWSXkpPQ7bUwWdVk3KgSkx%2FR%2FS86auN6Om03fIh%2FPO420KnSzOf4ndOTN2MX4GLEt368YxIVM4nf04EmhkNUaW4W%2Fc8cBaAM%2FUA6EL3mQe9cp69%2Fuute4ZzxnKsOg0Cgf83yY49%2BjsURoupOvDpY1ScpDMAmUv74%2BYeTGLHlV7IPO9lXGcC3wCY6Ex%2FRV8qwA58DZzG5g%2B6aFShQrC26BdatvJ5AMc%2Bwki9c%2BU5odhPptSeGWj8VXzufoulZUMkSwqQUVKoXzaBRm16rCu%2Bb2fymqU5bT4E4qczJshMU1IF5JNY%2BUulQI%2FKk%2B%2Brqna1KoTLt86Hc1CBO3tGIabVgBFlDcCZ2GvzBpqgP8nvEoz9A7Ubd0D52jIzNbsxvIrKX%2BB0wi9rDvgY6pgEcAPbPxo%2BbQ4iTr2gNhn5DG1fGd1bu7QL3l8qO%2BW%2FPDxK4KT0WR3A9cPYtg3gsGRFZizm8g8DsNqfMyRSJ488lQP33O6o76RF4aU87ONoU%2BJmWiy1KmtkNlmNwrlyzm%2BXNKASKSuNnW9w%2BPStby8o81hGVthZdhRgCTApB2iILgVfQUzm1Cjxz2AfghOruPALzyp%2Beo1y%2FZLPMOfb%2FEeBm23MYCS%2FV&X-Amz-Signature=417aca92b0ea44225c0eedb739d449f2f5cb5354e25e68049f7e51938998d914&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
