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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P3IPK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEotQdlALSwtRUpZKdiJs8e3NAopibwruLsfawfb1lvFAiBfO9fAP168FYZdo0XYPRxW5%2Bz0VeRX%2B0BXxToXoKXZ0CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfrv1VDP1Id29C57VKtwDVQ0MCvunfmy1Sqf%2BKVCX19PyCu4SUwNWlWjEdaXnTsl6XLtjk9X2EHVzU7QIyMYNj7WcsYkVyaolV18p17EIWv7948S28r4OkBNK2uHIXMXPr%2ByPi8%2B6gK9M%2FlhsjAQ%2FwBL6IpUdz1qziReN%2F0RHw%2FYUuMVGPdRx172wwSv0Wo4mL2qpZgQwlb573I2ZnuIYA2EJ7LbITp8OUJumo7H1ek%2FIWZB773C8DPCmobIRaMSmXasc%2BWWhZx197DSCqsBwNT60UCXcoalHguoV2OArV54PdJkLUpKoFN1Wf%2BhUUJBLfPgvuEiqQBsI3WNaofsfHtZN8101fGguktxG40hbA%2FravPA3B7ik%2FLKapQzWeFXU%2BuhH1ghljHJ%2Fb0qYzMfbiW44u3E72Dg%2FWsgLXlSbmTTVmdAj%2F3k0J7kyxxdER%2FG0EiKhZYjvYCNDsbvZwb48EP7LshEr7gHE%2FUa5vqG9JFCwL2hZl12YZxkfLreenkhgTr%2BrK1gMt2u3wrAwL%2BtkXNCkN2kaTphmhEFFAQuKz3UX%2BzQGxZ3jBnQ3xADqRXSjQNimTjnGxOPQ%2FiKk1T4VTF234qguoNu4iY%2FPsKouqFGHNKjzTkv6jr0%2F2RCeNdyPgJwoMLsoQd%2FE%2FdcwlrbYvQY6pgGy5oPBwTQDwkfshuE9kH%2FRwUbLZjk57nDwLkzMqqWQnBm%2BsTrIbarlK8pdb7deG9Ffjh9ivsDsWeeEY2r8S29jbZw1usfrngTxrsKraEwR8h3DHgPhJs9hJsb%2FRKECdFybFYiN2uMEDY7QsJl1Kkcudevpu0X3gQWdJ79F1abBSaa83NkCisSral%2FQnH445R6vSD2BovOYjt4E8Azg2fRNwG5tZvSY&X-Amz-Signature=f956328591c102706af0c139fc324cbf8652769e49f8161e7db22432da899c7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P3IPK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEotQdlALSwtRUpZKdiJs8e3NAopibwruLsfawfb1lvFAiBfO9fAP168FYZdo0XYPRxW5%2Bz0VeRX%2B0BXxToXoKXZ0CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfrv1VDP1Id29C57VKtwDVQ0MCvunfmy1Sqf%2BKVCX19PyCu4SUwNWlWjEdaXnTsl6XLtjk9X2EHVzU7QIyMYNj7WcsYkVyaolV18p17EIWv7948S28r4OkBNK2uHIXMXPr%2ByPi8%2B6gK9M%2FlhsjAQ%2FwBL6IpUdz1qziReN%2F0RHw%2FYUuMVGPdRx172wwSv0Wo4mL2qpZgQwlb573I2ZnuIYA2EJ7LbITp8OUJumo7H1ek%2FIWZB773C8DPCmobIRaMSmXasc%2BWWhZx197DSCqsBwNT60UCXcoalHguoV2OArV54PdJkLUpKoFN1Wf%2BhUUJBLfPgvuEiqQBsI3WNaofsfHtZN8101fGguktxG40hbA%2FravPA3B7ik%2FLKapQzWeFXU%2BuhH1ghljHJ%2Fb0qYzMfbiW44u3E72Dg%2FWsgLXlSbmTTVmdAj%2F3k0J7kyxxdER%2FG0EiKhZYjvYCNDsbvZwb48EP7LshEr7gHE%2FUa5vqG9JFCwL2hZl12YZxkfLreenkhgTr%2BrK1gMt2u3wrAwL%2BtkXNCkN2kaTphmhEFFAQuKz3UX%2BzQGxZ3jBnQ3xADqRXSjQNimTjnGxOPQ%2FiKk1T4VTF234qguoNu4iY%2FPsKouqFGHNKjzTkv6jr0%2F2RCeNdyPgJwoMLsoQd%2FE%2FdcwlrbYvQY6pgGy5oPBwTQDwkfshuE9kH%2FRwUbLZjk57nDwLkzMqqWQnBm%2BsTrIbarlK8pdb7deG9Ffjh9ivsDsWeeEY2r8S29jbZw1usfrngTxrsKraEwR8h3DHgPhJs9hJsb%2FRKECdFybFYiN2uMEDY7QsJl1Kkcudevpu0X3gQWdJ79F1abBSaa83NkCisSral%2FQnH445R6vSD2BovOYjt4E8Azg2fRNwG5tZvSY&X-Amz-Signature=fdd603659d6d0b21ebe83ddc85f451b29fffc38a8c1b9a334de641aff5dcafe4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P3IPK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEotQdlALSwtRUpZKdiJs8e3NAopibwruLsfawfb1lvFAiBfO9fAP168FYZdo0XYPRxW5%2Bz0VeRX%2B0BXxToXoKXZ0CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfrv1VDP1Id29C57VKtwDVQ0MCvunfmy1Sqf%2BKVCX19PyCu4SUwNWlWjEdaXnTsl6XLtjk9X2EHVzU7QIyMYNj7WcsYkVyaolV18p17EIWv7948S28r4OkBNK2uHIXMXPr%2ByPi8%2B6gK9M%2FlhsjAQ%2FwBL6IpUdz1qziReN%2F0RHw%2FYUuMVGPdRx172wwSv0Wo4mL2qpZgQwlb573I2ZnuIYA2EJ7LbITp8OUJumo7H1ek%2FIWZB773C8DPCmobIRaMSmXasc%2BWWhZx197DSCqsBwNT60UCXcoalHguoV2OArV54PdJkLUpKoFN1Wf%2BhUUJBLfPgvuEiqQBsI3WNaofsfHtZN8101fGguktxG40hbA%2FravPA3B7ik%2FLKapQzWeFXU%2BuhH1ghljHJ%2Fb0qYzMfbiW44u3E72Dg%2FWsgLXlSbmTTVmdAj%2F3k0J7kyxxdER%2FG0EiKhZYjvYCNDsbvZwb48EP7LshEr7gHE%2FUa5vqG9JFCwL2hZl12YZxkfLreenkhgTr%2BrK1gMt2u3wrAwL%2BtkXNCkN2kaTphmhEFFAQuKz3UX%2BzQGxZ3jBnQ3xADqRXSjQNimTjnGxOPQ%2FiKk1T4VTF234qguoNu4iY%2FPsKouqFGHNKjzTkv6jr0%2F2RCeNdyPgJwoMLsoQd%2FE%2FdcwlrbYvQY6pgGy5oPBwTQDwkfshuE9kH%2FRwUbLZjk57nDwLkzMqqWQnBm%2BsTrIbarlK8pdb7deG9Ffjh9ivsDsWeeEY2r8S29jbZw1usfrngTxrsKraEwR8h3DHgPhJs9hJsb%2FRKECdFybFYiN2uMEDY7QsJl1Kkcudevpu0X3gQWdJ79F1abBSaa83NkCisSral%2FQnH445R6vSD2BovOYjt4E8Azg2fRNwG5tZvSY&X-Amz-Signature=26ee0cada1f2c8f40b31c148f9af80758fa9d9ec8ba6ee7230d60c77dff20d43&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P3IPK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEotQdlALSwtRUpZKdiJs8e3NAopibwruLsfawfb1lvFAiBfO9fAP168FYZdo0XYPRxW5%2Bz0VeRX%2B0BXxToXoKXZ0CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfrv1VDP1Id29C57VKtwDVQ0MCvunfmy1Sqf%2BKVCX19PyCu4SUwNWlWjEdaXnTsl6XLtjk9X2EHVzU7QIyMYNj7WcsYkVyaolV18p17EIWv7948S28r4OkBNK2uHIXMXPr%2ByPi8%2B6gK9M%2FlhsjAQ%2FwBL6IpUdz1qziReN%2F0RHw%2FYUuMVGPdRx172wwSv0Wo4mL2qpZgQwlb573I2ZnuIYA2EJ7LbITp8OUJumo7H1ek%2FIWZB773C8DPCmobIRaMSmXasc%2BWWhZx197DSCqsBwNT60UCXcoalHguoV2OArV54PdJkLUpKoFN1Wf%2BhUUJBLfPgvuEiqQBsI3WNaofsfHtZN8101fGguktxG40hbA%2FravPA3B7ik%2FLKapQzWeFXU%2BuhH1ghljHJ%2Fb0qYzMfbiW44u3E72Dg%2FWsgLXlSbmTTVmdAj%2F3k0J7kyxxdER%2FG0EiKhZYjvYCNDsbvZwb48EP7LshEr7gHE%2FUa5vqG9JFCwL2hZl12YZxkfLreenkhgTr%2BrK1gMt2u3wrAwL%2BtkXNCkN2kaTphmhEFFAQuKz3UX%2BzQGxZ3jBnQ3xADqRXSjQNimTjnGxOPQ%2FiKk1T4VTF234qguoNu4iY%2FPsKouqFGHNKjzTkv6jr0%2F2RCeNdyPgJwoMLsoQd%2FE%2FdcwlrbYvQY6pgGy5oPBwTQDwkfshuE9kH%2FRwUbLZjk57nDwLkzMqqWQnBm%2BsTrIbarlK8pdb7deG9Ffjh9ivsDsWeeEY2r8S29jbZw1usfrngTxrsKraEwR8h3DHgPhJs9hJsb%2FRKECdFybFYiN2uMEDY7QsJl1Kkcudevpu0X3gQWdJ79F1abBSaa83NkCisSral%2FQnH445R6vSD2BovOYjt4E8Azg2fRNwG5tZvSY&X-Amz-Signature=a5c91e1316561bcefe87168e52c099ea77457baca0c065a5fd15ea07a0e357b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P3IPK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEotQdlALSwtRUpZKdiJs8e3NAopibwruLsfawfb1lvFAiBfO9fAP168FYZdo0XYPRxW5%2Bz0VeRX%2B0BXxToXoKXZ0CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfrv1VDP1Id29C57VKtwDVQ0MCvunfmy1Sqf%2BKVCX19PyCu4SUwNWlWjEdaXnTsl6XLtjk9X2EHVzU7QIyMYNj7WcsYkVyaolV18p17EIWv7948S28r4OkBNK2uHIXMXPr%2ByPi8%2B6gK9M%2FlhsjAQ%2FwBL6IpUdz1qziReN%2F0RHw%2FYUuMVGPdRx172wwSv0Wo4mL2qpZgQwlb573I2ZnuIYA2EJ7LbITp8OUJumo7H1ek%2FIWZB773C8DPCmobIRaMSmXasc%2BWWhZx197DSCqsBwNT60UCXcoalHguoV2OArV54PdJkLUpKoFN1Wf%2BhUUJBLfPgvuEiqQBsI3WNaofsfHtZN8101fGguktxG40hbA%2FravPA3B7ik%2FLKapQzWeFXU%2BuhH1ghljHJ%2Fb0qYzMfbiW44u3E72Dg%2FWsgLXlSbmTTVmdAj%2F3k0J7kyxxdER%2FG0EiKhZYjvYCNDsbvZwb48EP7LshEr7gHE%2FUa5vqG9JFCwL2hZl12YZxkfLreenkhgTr%2BrK1gMt2u3wrAwL%2BtkXNCkN2kaTphmhEFFAQuKz3UX%2BzQGxZ3jBnQ3xADqRXSjQNimTjnGxOPQ%2FiKk1T4VTF234qguoNu4iY%2FPsKouqFGHNKjzTkv6jr0%2F2RCeNdyPgJwoMLsoQd%2FE%2FdcwlrbYvQY6pgGy5oPBwTQDwkfshuE9kH%2FRwUbLZjk57nDwLkzMqqWQnBm%2BsTrIbarlK8pdb7deG9Ffjh9ivsDsWeeEY2r8S29jbZw1usfrngTxrsKraEwR8h3DHgPhJs9hJsb%2FRKECdFybFYiN2uMEDY7QsJl1Kkcudevpu0X3gQWdJ79F1abBSaa83NkCisSral%2FQnH445R6vSD2BovOYjt4E8Azg2fRNwG5tZvSY&X-Amz-Signature=7005b56fa400d4ef0f2de929c29d068b6bef67e9d4cfcc11a52dd936214244bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P3IPK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEotQdlALSwtRUpZKdiJs8e3NAopibwruLsfawfb1lvFAiBfO9fAP168FYZdo0XYPRxW5%2Bz0VeRX%2B0BXxToXoKXZ0CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfrv1VDP1Id29C57VKtwDVQ0MCvunfmy1Sqf%2BKVCX19PyCu4SUwNWlWjEdaXnTsl6XLtjk9X2EHVzU7QIyMYNj7WcsYkVyaolV18p17EIWv7948S28r4OkBNK2uHIXMXPr%2ByPi8%2B6gK9M%2FlhsjAQ%2FwBL6IpUdz1qziReN%2F0RHw%2FYUuMVGPdRx172wwSv0Wo4mL2qpZgQwlb573I2ZnuIYA2EJ7LbITp8OUJumo7H1ek%2FIWZB773C8DPCmobIRaMSmXasc%2BWWhZx197DSCqsBwNT60UCXcoalHguoV2OArV54PdJkLUpKoFN1Wf%2BhUUJBLfPgvuEiqQBsI3WNaofsfHtZN8101fGguktxG40hbA%2FravPA3B7ik%2FLKapQzWeFXU%2BuhH1ghljHJ%2Fb0qYzMfbiW44u3E72Dg%2FWsgLXlSbmTTVmdAj%2F3k0J7kyxxdER%2FG0EiKhZYjvYCNDsbvZwb48EP7LshEr7gHE%2FUa5vqG9JFCwL2hZl12YZxkfLreenkhgTr%2BrK1gMt2u3wrAwL%2BtkXNCkN2kaTphmhEFFAQuKz3UX%2BzQGxZ3jBnQ3xADqRXSjQNimTjnGxOPQ%2FiKk1T4VTF234qguoNu4iY%2FPsKouqFGHNKjzTkv6jr0%2F2RCeNdyPgJwoMLsoQd%2FE%2FdcwlrbYvQY6pgGy5oPBwTQDwkfshuE9kH%2FRwUbLZjk57nDwLkzMqqWQnBm%2BsTrIbarlK8pdb7deG9Ffjh9ivsDsWeeEY2r8S29jbZw1usfrngTxrsKraEwR8h3DHgPhJs9hJsb%2FRKECdFybFYiN2uMEDY7QsJl1Kkcudevpu0X3gQWdJ79F1abBSaa83NkCisSral%2FQnH445R6vSD2BovOYjt4E8Azg2fRNwG5tZvSY&X-Amz-Signature=6f84bb4feac521cd4fcca0aab02d98f7e40779c4be0596d09f8261d17804d421&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P3IPK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEotQdlALSwtRUpZKdiJs8e3NAopibwruLsfawfb1lvFAiBfO9fAP168FYZdo0XYPRxW5%2Bz0VeRX%2B0BXxToXoKXZ0CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfrv1VDP1Id29C57VKtwDVQ0MCvunfmy1Sqf%2BKVCX19PyCu4SUwNWlWjEdaXnTsl6XLtjk9X2EHVzU7QIyMYNj7WcsYkVyaolV18p17EIWv7948S28r4OkBNK2uHIXMXPr%2ByPi8%2B6gK9M%2FlhsjAQ%2FwBL6IpUdz1qziReN%2F0RHw%2FYUuMVGPdRx172wwSv0Wo4mL2qpZgQwlb573I2ZnuIYA2EJ7LbITp8OUJumo7H1ek%2FIWZB773C8DPCmobIRaMSmXasc%2BWWhZx197DSCqsBwNT60UCXcoalHguoV2OArV54PdJkLUpKoFN1Wf%2BhUUJBLfPgvuEiqQBsI3WNaofsfHtZN8101fGguktxG40hbA%2FravPA3B7ik%2FLKapQzWeFXU%2BuhH1ghljHJ%2Fb0qYzMfbiW44u3E72Dg%2FWsgLXlSbmTTVmdAj%2F3k0J7kyxxdER%2FG0EiKhZYjvYCNDsbvZwb48EP7LshEr7gHE%2FUa5vqG9JFCwL2hZl12YZxkfLreenkhgTr%2BrK1gMt2u3wrAwL%2BtkXNCkN2kaTphmhEFFAQuKz3UX%2BzQGxZ3jBnQ3xADqRXSjQNimTjnGxOPQ%2FiKk1T4VTF234qguoNu4iY%2FPsKouqFGHNKjzTkv6jr0%2F2RCeNdyPgJwoMLsoQd%2FE%2FdcwlrbYvQY6pgGy5oPBwTQDwkfshuE9kH%2FRwUbLZjk57nDwLkzMqqWQnBm%2BsTrIbarlK8pdb7deG9Ffjh9ivsDsWeeEY2r8S29jbZw1usfrngTxrsKraEwR8h3DHgPhJs9hJsb%2FRKECdFybFYiN2uMEDY7QsJl1Kkcudevpu0X3gQWdJ79F1abBSaa83NkCisSral%2FQnH445R6vSD2BovOYjt4E8Azg2fRNwG5tZvSY&X-Amz-Signature=4470dd106a21eaadabd6442bb6e8fe86d16eab2aa443c498e4be8723823a3344&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P3IPK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T181031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEotQdlALSwtRUpZKdiJs8e3NAopibwruLsfawfb1lvFAiBfO9fAP168FYZdo0XYPRxW5%2Bz0VeRX%2B0BXxToXoKXZ0CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfrv1VDP1Id29C57VKtwDVQ0MCvunfmy1Sqf%2BKVCX19PyCu4SUwNWlWjEdaXnTsl6XLtjk9X2EHVzU7QIyMYNj7WcsYkVyaolV18p17EIWv7948S28r4OkBNK2uHIXMXPr%2ByPi8%2B6gK9M%2FlhsjAQ%2FwBL6IpUdz1qziReN%2F0RHw%2FYUuMVGPdRx172wwSv0Wo4mL2qpZgQwlb573I2ZnuIYA2EJ7LbITp8OUJumo7H1ek%2FIWZB773C8DPCmobIRaMSmXasc%2BWWhZx197DSCqsBwNT60UCXcoalHguoV2OArV54PdJkLUpKoFN1Wf%2BhUUJBLfPgvuEiqQBsI3WNaofsfHtZN8101fGguktxG40hbA%2FravPA3B7ik%2FLKapQzWeFXU%2BuhH1ghljHJ%2Fb0qYzMfbiW44u3E72Dg%2FWsgLXlSbmTTVmdAj%2F3k0J7kyxxdER%2FG0EiKhZYjvYCNDsbvZwb48EP7LshEr7gHE%2FUa5vqG9JFCwL2hZl12YZxkfLreenkhgTr%2BrK1gMt2u3wrAwL%2BtkXNCkN2kaTphmhEFFAQuKz3UX%2BzQGxZ3jBnQ3xADqRXSjQNimTjnGxOPQ%2FiKk1T4VTF234qguoNu4iY%2FPsKouqFGHNKjzTkv6jr0%2F2RCeNdyPgJwoMLsoQd%2FE%2FdcwlrbYvQY6pgGy5oPBwTQDwkfshuE9kH%2FRwUbLZjk57nDwLkzMqqWQnBm%2BsTrIbarlK8pdb7deG9Ffjh9ivsDsWeeEY2r8S29jbZw1usfrngTxrsKraEwR8h3DHgPhJs9hJsb%2FRKECdFybFYiN2uMEDY7QsJl1Kkcudevpu0X3gQWdJ79F1abBSaa83NkCisSral%2FQnH445R6vSD2BovOYjt4E8Azg2fRNwG5tZvSY&X-Amz-Signature=2c42051abd6141f2c5729bd1aaf81c8aaaff158ef513a6932ec2d5dba03db1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
