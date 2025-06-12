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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXKF76F%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEDEDKKxZXcqCKrS%2B50IOkiRX1fu6yjcWPSyERJfsKgqAiEAqoo6t0xYI%2FKoC7zANzBwbvY6CVCNo0ZuaB5D3SMej8QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxAQCNMKp1sAtq83SrcA8KjcDImAcTzKw73H83J%2Fo8%2F%2F9enTP6tf73xLGSvg1jEazKuBH7QCnHetFOTpuFrTc%2FhsEObbdlSjhi0SxlryztljC2chCRA9aq3z2Wix9xVruKkpsJjMEFiPG0c%2FrI0%2FGMIcyzLuez%2Bo38LCC4VfYqaDqA5QGtJnnBZN4CFv2%2FZqn287ruPg%2BXt2dUIeEQvjSSP9X0z%2FMp40oIVsyYpp0rE5lvDsM%2FABwy35K3Cr1rnDioWSjQ34zD1bzfQEgglihRLg0e3ZC8xJoXLHG5Yp8gvML9%2FBP0tIUFsQVRfoESpyfbOd627kyWw8Cq6xykCyg5fvDAKDtNYNYvFZRFrM91IQKwRsRRufpHOAcO0jT2zQmxvDcN9rKQRgz2i798hSj%2BCcTRfdNcM2tGUrLpyzhdou5ixElmflhM1blGiDwLo%2FegZlC8ne6ab9vX4oHnEOt61MvY4OFbKzhpn%2BuBT7toNW1bQP3nAb%2FTKLirOfWefsoitWxhAZs8sx%2BrTcLtXkFsh2bTPmdw8En2JQHpf7yodVo9LrDiJrq6EmsBFrC1L4KMTOu8DtdEutX7yPpdZI6VZbnQ1OLaeZ7ZAndbqTQi81Uj8hHwwIQWc%2BhhOg6oZhfLaStlz%2F7DKND1RMJyRrMIGOqUBNQBoE0b00kQliE0kBWB%2B2yF%2BuZ%2BsKpaw3LQU%2BbEOAwsC26n1qWr4peSc%2Bvf5fn%2FLRcwD7qEpSISHU%2BFW07co16PKm3wQ%2BkMjU%2F8i0Y8uJTBItBElGMwzjhH1S9dkGQkwSKq4Ae7aOCeOkF3RbiJLB0Sv2exWQdJ95nK657nia7YyqobLEsjmUy%2B52Uues0aYBK4R0PN53vuWGrgcsOefi%2B9mMZLt&X-Amz-Signature=3cffaf3a05af4650e35df46c8e8dd732c6040b8dd434c4d943259456224c9b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXKF76F%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEDEDKKxZXcqCKrS%2B50IOkiRX1fu6yjcWPSyERJfsKgqAiEAqoo6t0xYI%2FKoC7zANzBwbvY6CVCNo0ZuaB5D3SMej8QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxAQCNMKp1sAtq83SrcA8KjcDImAcTzKw73H83J%2Fo8%2F%2F9enTP6tf73xLGSvg1jEazKuBH7QCnHetFOTpuFrTc%2FhsEObbdlSjhi0SxlryztljC2chCRA9aq3z2Wix9xVruKkpsJjMEFiPG0c%2FrI0%2FGMIcyzLuez%2Bo38LCC4VfYqaDqA5QGtJnnBZN4CFv2%2FZqn287ruPg%2BXt2dUIeEQvjSSP9X0z%2FMp40oIVsyYpp0rE5lvDsM%2FABwy35K3Cr1rnDioWSjQ34zD1bzfQEgglihRLg0e3ZC8xJoXLHG5Yp8gvML9%2FBP0tIUFsQVRfoESpyfbOd627kyWw8Cq6xykCyg5fvDAKDtNYNYvFZRFrM91IQKwRsRRufpHOAcO0jT2zQmxvDcN9rKQRgz2i798hSj%2BCcTRfdNcM2tGUrLpyzhdou5ixElmflhM1blGiDwLo%2FegZlC8ne6ab9vX4oHnEOt61MvY4OFbKzhpn%2BuBT7toNW1bQP3nAb%2FTKLirOfWefsoitWxhAZs8sx%2BrTcLtXkFsh2bTPmdw8En2JQHpf7yodVo9LrDiJrq6EmsBFrC1L4KMTOu8DtdEutX7yPpdZI6VZbnQ1OLaeZ7ZAndbqTQi81Uj8hHwwIQWc%2BhhOg6oZhfLaStlz%2F7DKND1RMJyRrMIGOqUBNQBoE0b00kQliE0kBWB%2B2yF%2BuZ%2BsKpaw3LQU%2BbEOAwsC26n1qWr4peSc%2Bvf5fn%2FLRcwD7qEpSISHU%2BFW07co16PKm3wQ%2BkMjU%2F8i0Y8uJTBItBElGMwzjhH1S9dkGQkwSKq4Ae7aOCeOkF3RbiJLB0Sv2exWQdJ95nK657nia7YyqobLEsjmUy%2B52Uues0aYBK4R0PN53vuWGrgcsOefi%2B9mMZLt&X-Amz-Signature=ecb3048d47dc87bfda7639c6db4d562fb128583c40197a0a4dbb3a1d23d4f160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXKF76F%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEDEDKKxZXcqCKrS%2B50IOkiRX1fu6yjcWPSyERJfsKgqAiEAqoo6t0xYI%2FKoC7zANzBwbvY6CVCNo0ZuaB5D3SMej8QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxAQCNMKp1sAtq83SrcA8KjcDImAcTzKw73H83J%2Fo8%2F%2F9enTP6tf73xLGSvg1jEazKuBH7QCnHetFOTpuFrTc%2FhsEObbdlSjhi0SxlryztljC2chCRA9aq3z2Wix9xVruKkpsJjMEFiPG0c%2FrI0%2FGMIcyzLuez%2Bo38LCC4VfYqaDqA5QGtJnnBZN4CFv2%2FZqn287ruPg%2BXt2dUIeEQvjSSP9X0z%2FMp40oIVsyYpp0rE5lvDsM%2FABwy35K3Cr1rnDioWSjQ34zD1bzfQEgglihRLg0e3ZC8xJoXLHG5Yp8gvML9%2FBP0tIUFsQVRfoESpyfbOd627kyWw8Cq6xykCyg5fvDAKDtNYNYvFZRFrM91IQKwRsRRufpHOAcO0jT2zQmxvDcN9rKQRgz2i798hSj%2BCcTRfdNcM2tGUrLpyzhdou5ixElmflhM1blGiDwLo%2FegZlC8ne6ab9vX4oHnEOt61MvY4OFbKzhpn%2BuBT7toNW1bQP3nAb%2FTKLirOfWefsoitWxhAZs8sx%2BrTcLtXkFsh2bTPmdw8En2JQHpf7yodVo9LrDiJrq6EmsBFrC1L4KMTOu8DtdEutX7yPpdZI6VZbnQ1OLaeZ7ZAndbqTQi81Uj8hHwwIQWc%2BhhOg6oZhfLaStlz%2F7DKND1RMJyRrMIGOqUBNQBoE0b00kQliE0kBWB%2B2yF%2BuZ%2BsKpaw3LQU%2BbEOAwsC26n1qWr4peSc%2Bvf5fn%2FLRcwD7qEpSISHU%2BFW07co16PKm3wQ%2BkMjU%2F8i0Y8uJTBItBElGMwzjhH1S9dkGQkwSKq4Ae7aOCeOkF3RbiJLB0Sv2exWQdJ95nK657nia7YyqobLEsjmUy%2B52Uues0aYBK4R0PN53vuWGrgcsOefi%2B9mMZLt&X-Amz-Signature=736ced179682b6b9a4cb7ab9f3bd5863662a73cacbfe2ad48c0e937e3f5dfa15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXKF76F%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEDEDKKxZXcqCKrS%2B50IOkiRX1fu6yjcWPSyERJfsKgqAiEAqoo6t0xYI%2FKoC7zANzBwbvY6CVCNo0ZuaB5D3SMej8QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxAQCNMKp1sAtq83SrcA8KjcDImAcTzKw73H83J%2Fo8%2F%2F9enTP6tf73xLGSvg1jEazKuBH7QCnHetFOTpuFrTc%2FhsEObbdlSjhi0SxlryztljC2chCRA9aq3z2Wix9xVruKkpsJjMEFiPG0c%2FrI0%2FGMIcyzLuez%2Bo38LCC4VfYqaDqA5QGtJnnBZN4CFv2%2FZqn287ruPg%2BXt2dUIeEQvjSSP9X0z%2FMp40oIVsyYpp0rE5lvDsM%2FABwy35K3Cr1rnDioWSjQ34zD1bzfQEgglihRLg0e3ZC8xJoXLHG5Yp8gvML9%2FBP0tIUFsQVRfoESpyfbOd627kyWw8Cq6xykCyg5fvDAKDtNYNYvFZRFrM91IQKwRsRRufpHOAcO0jT2zQmxvDcN9rKQRgz2i798hSj%2BCcTRfdNcM2tGUrLpyzhdou5ixElmflhM1blGiDwLo%2FegZlC8ne6ab9vX4oHnEOt61MvY4OFbKzhpn%2BuBT7toNW1bQP3nAb%2FTKLirOfWefsoitWxhAZs8sx%2BrTcLtXkFsh2bTPmdw8En2JQHpf7yodVo9LrDiJrq6EmsBFrC1L4KMTOu8DtdEutX7yPpdZI6VZbnQ1OLaeZ7ZAndbqTQi81Uj8hHwwIQWc%2BhhOg6oZhfLaStlz%2F7DKND1RMJyRrMIGOqUBNQBoE0b00kQliE0kBWB%2B2yF%2BuZ%2BsKpaw3LQU%2BbEOAwsC26n1qWr4peSc%2Bvf5fn%2FLRcwD7qEpSISHU%2BFW07co16PKm3wQ%2BkMjU%2F8i0Y8uJTBItBElGMwzjhH1S9dkGQkwSKq4Ae7aOCeOkF3RbiJLB0Sv2exWQdJ95nK657nia7YyqobLEsjmUy%2B52Uues0aYBK4R0PN53vuWGrgcsOefi%2B9mMZLt&X-Amz-Signature=551b14bc217c61ff971ef0fc2e9a0c2497f5ad1922d0b0c977c03a212c80a33d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXKF76F%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEDEDKKxZXcqCKrS%2B50IOkiRX1fu6yjcWPSyERJfsKgqAiEAqoo6t0xYI%2FKoC7zANzBwbvY6CVCNo0ZuaB5D3SMej8QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxAQCNMKp1sAtq83SrcA8KjcDImAcTzKw73H83J%2Fo8%2F%2F9enTP6tf73xLGSvg1jEazKuBH7QCnHetFOTpuFrTc%2FhsEObbdlSjhi0SxlryztljC2chCRA9aq3z2Wix9xVruKkpsJjMEFiPG0c%2FrI0%2FGMIcyzLuez%2Bo38LCC4VfYqaDqA5QGtJnnBZN4CFv2%2FZqn287ruPg%2BXt2dUIeEQvjSSP9X0z%2FMp40oIVsyYpp0rE5lvDsM%2FABwy35K3Cr1rnDioWSjQ34zD1bzfQEgglihRLg0e3ZC8xJoXLHG5Yp8gvML9%2FBP0tIUFsQVRfoESpyfbOd627kyWw8Cq6xykCyg5fvDAKDtNYNYvFZRFrM91IQKwRsRRufpHOAcO0jT2zQmxvDcN9rKQRgz2i798hSj%2BCcTRfdNcM2tGUrLpyzhdou5ixElmflhM1blGiDwLo%2FegZlC8ne6ab9vX4oHnEOt61MvY4OFbKzhpn%2BuBT7toNW1bQP3nAb%2FTKLirOfWefsoitWxhAZs8sx%2BrTcLtXkFsh2bTPmdw8En2JQHpf7yodVo9LrDiJrq6EmsBFrC1L4KMTOu8DtdEutX7yPpdZI6VZbnQ1OLaeZ7ZAndbqTQi81Uj8hHwwIQWc%2BhhOg6oZhfLaStlz%2F7DKND1RMJyRrMIGOqUBNQBoE0b00kQliE0kBWB%2B2yF%2BuZ%2BsKpaw3LQU%2BbEOAwsC26n1qWr4peSc%2Bvf5fn%2FLRcwD7qEpSISHU%2BFW07co16PKm3wQ%2BkMjU%2F8i0Y8uJTBItBElGMwzjhH1S9dkGQkwSKq4Ae7aOCeOkF3RbiJLB0Sv2exWQdJ95nK657nia7YyqobLEsjmUy%2B52Uues0aYBK4R0PN53vuWGrgcsOefi%2B9mMZLt&X-Amz-Signature=2b14a0fd9a2e5e06a99c565592de1445a74de698e1195a0550b668d36f4a6db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXKF76F%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEDEDKKxZXcqCKrS%2B50IOkiRX1fu6yjcWPSyERJfsKgqAiEAqoo6t0xYI%2FKoC7zANzBwbvY6CVCNo0ZuaB5D3SMej8QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxAQCNMKp1sAtq83SrcA8KjcDImAcTzKw73H83J%2Fo8%2F%2F9enTP6tf73xLGSvg1jEazKuBH7QCnHetFOTpuFrTc%2FhsEObbdlSjhi0SxlryztljC2chCRA9aq3z2Wix9xVruKkpsJjMEFiPG0c%2FrI0%2FGMIcyzLuez%2Bo38LCC4VfYqaDqA5QGtJnnBZN4CFv2%2FZqn287ruPg%2BXt2dUIeEQvjSSP9X0z%2FMp40oIVsyYpp0rE5lvDsM%2FABwy35K3Cr1rnDioWSjQ34zD1bzfQEgglihRLg0e3ZC8xJoXLHG5Yp8gvML9%2FBP0tIUFsQVRfoESpyfbOd627kyWw8Cq6xykCyg5fvDAKDtNYNYvFZRFrM91IQKwRsRRufpHOAcO0jT2zQmxvDcN9rKQRgz2i798hSj%2BCcTRfdNcM2tGUrLpyzhdou5ixElmflhM1blGiDwLo%2FegZlC8ne6ab9vX4oHnEOt61MvY4OFbKzhpn%2BuBT7toNW1bQP3nAb%2FTKLirOfWefsoitWxhAZs8sx%2BrTcLtXkFsh2bTPmdw8En2JQHpf7yodVo9LrDiJrq6EmsBFrC1L4KMTOu8DtdEutX7yPpdZI6VZbnQ1OLaeZ7ZAndbqTQi81Uj8hHwwIQWc%2BhhOg6oZhfLaStlz%2F7DKND1RMJyRrMIGOqUBNQBoE0b00kQliE0kBWB%2B2yF%2BuZ%2BsKpaw3LQU%2BbEOAwsC26n1qWr4peSc%2Bvf5fn%2FLRcwD7qEpSISHU%2BFW07co16PKm3wQ%2BkMjU%2F8i0Y8uJTBItBElGMwzjhH1S9dkGQkwSKq4Ae7aOCeOkF3RbiJLB0Sv2exWQdJ95nK657nia7YyqobLEsjmUy%2B52Uues0aYBK4R0PN53vuWGrgcsOefi%2B9mMZLt&X-Amz-Signature=467774d383f1dc65ece804b8cbfe5ed81e62926383ddebfb7c27ee6c99bf309d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXKF76F%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEDEDKKxZXcqCKrS%2B50IOkiRX1fu6yjcWPSyERJfsKgqAiEAqoo6t0xYI%2FKoC7zANzBwbvY6CVCNo0ZuaB5D3SMej8QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxAQCNMKp1sAtq83SrcA8KjcDImAcTzKw73H83J%2Fo8%2F%2F9enTP6tf73xLGSvg1jEazKuBH7QCnHetFOTpuFrTc%2FhsEObbdlSjhi0SxlryztljC2chCRA9aq3z2Wix9xVruKkpsJjMEFiPG0c%2FrI0%2FGMIcyzLuez%2Bo38LCC4VfYqaDqA5QGtJnnBZN4CFv2%2FZqn287ruPg%2BXt2dUIeEQvjSSP9X0z%2FMp40oIVsyYpp0rE5lvDsM%2FABwy35K3Cr1rnDioWSjQ34zD1bzfQEgglihRLg0e3ZC8xJoXLHG5Yp8gvML9%2FBP0tIUFsQVRfoESpyfbOd627kyWw8Cq6xykCyg5fvDAKDtNYNYvFZRFrM91IQKwRsRRufpHOAcO0jT2zQmxvDcN9rKQRgz2i798hSj%2BCcTRfdNcM2tGUrLpyzhdou5ixElmflhM1blGiDwLo%2FegZlC8ne6ab9vX4oHnEOt61MvY4OFbKzhpn%2BuBT7toNW1bQP3nAb%2FTKLirOfWefsoitWxhAZs8sx%2BrTcLtXkFsh2bTPmdw8En2JQHpf7yodVo9LrDiJrq6EmsBFrC1L4KMTOu8DtdEutX7yPpdZI6VZbnQ1OLaeZ7ZAndbqTQi81Uj8hHwwIQWc%2BhhOg6oZhfLaStlz%2F7DKND1RMJyRrMIGOqUBNQBoE0b00kQliE0kBWB%2B2yF%2BuZ%2BsKpaw3LQU%2BbEOAwsC26n1qWr4peSc%2Bvf5fn%2FLRcwD7qEpSISHU%2BFW07co16PKm3wQ%2BkMjU%2F8i0Y8uJTBItBElGMwzjhH1S9dkGQkwSKq4Ae7aOCeOkF3RbiJLB0Sv2exWQdJ95nK657nia7YyqobLEsjmUy%2B52Uues0aYBK4R0PN53vuWGrgcsOefi%2B9mMZLt&X-Amz-Signature=69cccfd5f2ecfd457cc92341cdad99ffac8dd19573ad289820e467f6a01f5379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOXKF76F%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEDEDKKxZXcqCKrS%2B50IOkiRX1fu6yjcWPSyERJfsKgqAiEAqoo6t0xYI%2FKoC7zANzBwbvY6CVCNo0ZuaB5D3SMej8QqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxAQCNMKp1sAtq83SrcA8KjcDImAcTzKw73H83J%2Fo8%2F%2F9enTP6tf73xLGSvg1jEazKuBH7QCnHetFOTpuFrTc%2FhsEObbdlSjhi0SxlryztljC2chCRA9aq3z2Wix9xVruKkpsJjMEFiPG0c%2FrI0%2FGMIcyzLuez%2Bo38LCC4VfYqaDqA5QGtJnnBZN4CFv2%2FZqn287ruPg%2BXt2dUIeEQvjSSP9X0z%2FMp40oIVsyYpp0rE5lvDsM%2FABwy35K3Cr1rnDioWSjQ34zD1bzfQEgglihRLg0e3ZC8xJoXLHG5Yp8gvML9%2FBP0tIUFsQVRfoESpyfbOd627kyWw8Cq6xykCyg5fvDAKDtNYNYvFZRFrM91IQKwRsRRufpHOAcO0jT2zQmxvDcN9rKQRgz2i798hSj%2BCcTRfdNcM2tGUrLpyzhdou5ixElmflhM1blGiDwLo%2FegZlC8ne6ab9vX4oHnEOt61MvY4OFbKzhpn%2BuBT7toNW1bQP3nAb%2FTKLirOfWefsoitWxhAZs8sx%2BrTcLtXkFsh2bTPmdw8En2JQHpf7yodVo9LrDiJrq6EmsBFrC1L4KMTOu8DtdEutX7yPpdZI6VZbnQ1OLaeZ7ZAndbqTQi81Uj8hHwwIQWc%2BhhOg6oZhfLaStlz%2F7DKND1RMJyRrMIGOqUBNQBoE0b00kQliE0kBWB%2B2yF%2BuZ%2BsKpaw3LQU%2BbEOAwsC26n1qWr4peSc%2Bvf5fn%2FLRcwD7qEpSISHU%2BFW07co16PKm3wQ%2BkMjU%2F8i0Y8uJTBItBElGMwzjhH1S9dkGQkwSKq4Ae7aOCeOkF3RbiJLB0Sv2exWQdJ95nK657nia7YyqobLEsjmUy%2B52Uues0aYBK4R0PN53vuWGrgcsOefi%2B9mMZLt&X-Amz-Signature=f43539d07d6fef1aea14d787ff457936e307a056a267fac169e0e21a2e69d25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
