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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMAVMBV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1duG6FN%2Fxn%2FgSTghh1g4oY8aJprWyezC8VN%2FNPVTgwIhAM%2FoL4snIHPyDslvk6XAslZwut4O%2BvXvWa11idmJtKoJKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkc35nAiWc9c4BV8Aq3ANpJheVKQqy3BF6ETKqqoOdsMw66eIeBzzYe96pHy%2B9ZRg1jIgkmFcRSTLkpTGKpRNXuHxTGKuQ9Wg0PfCbzXMjrcqvR%2BXN4uEHZ2j%2BHvSJgQT3LDhnFK7ig8eMzSAYdm5K4dQ3TlQ2iex2S1FlDE7MTZZdBA4YiWaTxRJAOzCP1aZY2LshoelsEKh3ykydbtqsSroa5tkNL9x7Fvcb6SEakiJSRmVm%2Fj5zv%2BvHMSvwUEoH2FW61BW4CPUL1QM44WRw%2FE%2BiUUi3mEbe1uApdsY8XIxxL6i9J3QJ9kG7FJsP9LPwfTxd4v0SxPi39q%2Fnvwq0D4o4Ri5FqQdDGcleVe%2F7Ya6cVqDYN6et83Z%2FDuDng7VyAqokE0rtsVVPtip5%2Fuk0DGx4BGIcmP7xVB6e3tehNK9ck4FCfbbo5dtqsFB0spLTactGlxEb3EimienUDQTGV%2B6bdiMaJJufaTFtFsvARKImO46saE5TG15OEyFV81B%2Bc5GQcSOr3RcMgb4x%2BUNomcToSQ2eLRVHAydUbyZFElSvv7rD66Q1SuqZPOvkHun5q6ROO2TLqF3s%2FL4PAQUmfoCtv5BmOfmlAaP3XnQcA2AQ7gfntyLaZ25TwJu6FJ3LOVj6kNE5oV1xwDCGnpvCBjqkASUkGQW5aYNnW5k4M2Dtcp3bE%2B35GjgHsLDJ40bPFOMx1IhlLRvxWP6vuyD6zu928J6koLUtptYmWHJRMV%2FAUqziZGqnoEcBFuL%2FYU6uzVEN75uCsYt6zZPABdAm8w6iP%2Bmpwmdb2dda01PHue54nrevntZCJPxzZl%2Bx%2Brwc8gYoO80mBOWNjehc%2BvUICj3gs5ChvTVlrC0x6BY2bZLvjyIYIhoQ&X-Amz-Signature=f2a5e541cb03f12998bd801d44e247f9d026a7b1149609fbd042dca9c170b663&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMAVMBV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1duG6FN%2Fxn%2FgSTghh1g4oY8aJprWyezC8VN%2FNPVTgwIhAM%2FoL4snIHPyDslvk6XAslZwut4O%2BvXvWa11idmJtKoJKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkc35nAiWc9c4BV8Aq3ANpJheVKQqy3BF6ETKqqoOdsMw66eIeBzzYe96pHy%2B9ZRg1jIgkmFcRSTLkpTGKpRNXuHxTGKuQ9Wg0PfCbzXMjrcqvR%2BXN4uEHZ2j%2BHvSJgQT3LDhnFK7ig8eMzSAYdm5K4dQ3TlQ2iex2S1FlDE7MTZZdBA4YiWaTxRJAOzCP1aZY2LshoelsEKh3ykydbtqsSroa5tkNL9x7Fvcb6SEakiJSRmVm%2Fj5zv%2BvHMSvwUEoH2FW61BW4CPUL1QM44WRw%2FE%2BiUUi3mEbe1uApdsY8XIxxL6i9J3QJ9kG7FJsP9LPwfTxd4v0SxPi39q%2Fnvwq0D4o4Ri5FqQdDGcleVe%2F7Ya6cVqDYN6et83Z%2FDuDng7VyAqokE0rtsVVPtip5%2Fuk0DGx4BGIcmP7xVB6e3tehNK9ck4FCfbbo5dtqsFB0spLTactGlxEb3EimienUDQTGV%2B6bdiMaJJufaTFtFsvARKImO46saE5TG15OEyFV81B%2Bc5GQcSOr3RcMgb4x%2BUNomcToSQ2eLRVHAydUbyZFElSvv7rD66Q1SuqZPOvkHun5q6ROO2TLqF3s%2FL4PAQUmfoCtv5BmOfmlAaP3XnQcA2AQ7gfntyLaZ25TwJu6FJ3LOVj6kNE5oV1xwDCGnpvCBjqkASUkGQW5aYNnW5k4M2Dtcp3bE%2B35GjgHsLDJ40bPFOMx1IhlLRvxWP6vuyD6zu928J6koLUtptYmWHJRMV%2FAUqziZGqnoEcBFuL%2FYU6uzVEN75uCsYt6zZPABdAm8w6iP%2Bmpwmdb2dda01PHue54nrevntZCJPxzZl%2Bx%2Brwc8gYoO80mBOWNjehc%2BvUICj3gs5ChvTVlrC0x6BY2bZLvjyIYIhoQ&X-Amz-Signature=a4db899ac8a7fb56a8c9f7d72080f79720172922e5161106151ed6dc680a37f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMAVMBV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1duG6FN%2Fxn%2FgSTghh1g4oY8aJprWyezC8VN%2FNPVTgwIhAM%2FoL4snIHPyDslvk6XAslZwut4O%2BvXvWa11idmJtKoJKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkc35nAiWc9c4BV8Aq3ANpJheVKQqy3BF6ETKqqoOdsMw66eIeBzzYe96pHy%2B9ZRg1jIgkmFcRSTLkpTGKpRNXuHxTGKuQ9Wg0PfCbzXMjrcqvR%2BXN4uEHZ2j%2BHvSJgQT3LDhnFK7ig8eMzSAYdm5K4dQ3TlQ2iex2S1FlDE7MTZZdBA4YiWaTxRJAOzCP1aZY2LshoelsEKh3ykydbtqsSroa5tkNL9x7Fvcb6SEakiJSRmVm%2Fj5zv%2BvHMSvwUEoH2FW61BW4CPUL1QM44WRw%2FE%2BiUUi3mEbe1uApdsY8XIxxL6i9J3QJ9kG7FJsP9LPwfTxd4v0SxPi39q%2Fnvwq0D4o4Ri5FqQdDGcleVe%2F7Ya6cVqDYN6et83Z%2FDuDng7VyAqokE0rtsVVPtip5%2Fuk0DGx4BGIcmP7xVB6e3tehNK9ck4FCfbbo5dtqsFB0spLTactGlxEb3EimienUDQTGV%2B6bdiMaJJufaTFtFsvARKImO46saE5TG15OEyFV81B%2Bc5GQcSOr3RcMgb4x%2BUNomcToSQ2eLRVHAydUbyZFElSvv7rD66Q1SuqZPOvkHun5q6ROO2TLqF3s%2FL4PAQUmfoCtv5BmOfmlAaP3XnQcA2AQ7gfntyLaZ25TwJu6FJ3LOVj6kNE5oV1xwDCGnpvCBjqkASUkGQW5aYNnW5k4M2Dtcp3bE%2B35GjgHsLDJ40bPFOMx1IhlLRvxWP6vuyD6zu928J6koLUtptYmWHJRMV%2FAUqziZGqnoEcBFuL%2FYU6uzVEN75uCsYt6zZPABdAm8w6iP%2Bmpwmdb2dda01PHue54nrevntZCJPxzZl%2Bx%2Brwc8gYoO80mBOWNjehc%2BvUICj3gs5ChvTVlrC0x6BY2bZLvjyIYIhoQ&X-Amz-Signature=12c9adc3ad5d0b57f6f4a08e177847b8c4b686602e31bedf9af85688b1177d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMAVMBV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1duG6FN%2Fxn%2FgSTghh1g4oY8aJprWyezC8VN%2FNPVTgwIhAM%2FoL4snIHPyDslvk6XAslZwut4O%2BvXvWa11idmJtKoJKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkc35nAiWc9c4BV8Aq3ANpJheVKQqy3BF6ETKqqoOdsMw66eIeBzzYe96pHy%2B9ZRg1jIgkmFcRSTLkpTGKpRNXuHxTGKuQ9Wg0PfCbzXMjrcqvR%2BXN4uEHZ2j%2BHvSJgQT3LDhnFK7ig8eMzSAYdm5K4dQ3TlQ2iex2S1FlDE7MTZZdBA4YiWaTxRJAOzCP1aZY2LshoelsEKh3ykydbtqsSroa5tkNL9x7Fvcb6SEakiJSRmVm%2Fj5zv%2BvHMSvwUEoH2FW61BW4CPUL1QM44WRw%2FE%2BiUUi3mEbe1uApdsY8XIxxL6i9J3QJ9kG7FJsP9LPwfTxd4v0SxPi39q%2Fnvwq0D4o4Ri5FqQdDGcleVe%2F7Ya6cVqDYN6et83Z%2FDuDng7VyAqokE0rtsVVPtip5%2Fuk0DGx4BGIcmP7xVB6e3tehNK9ck4FCfbbo5dtqsFB0spLTactGlxEb3EimienUDQTGV%2B6bdiMaJJufaTFtFsvARKImO46saE5TG15OEyFV81B%2Bc5GQcSOr3RcMgb4x%2BUNomcToSQ2eLRVHAydUbyZFElSvv7rD66Q1SuqZPOvkHun5q6ROO2TLqF3s%2FL4PAQUmfoCtv5BmOfmlAaP3XnQcA2AQ7gfntyLaZ25TwJu6FJ3LOVj6kNE5oV1xwDCGnpvCBjqkASUkGQW5aYNnW5k4M2Dtcp3bE%2B35GjgHsLDJ40bPFOMx1IhlLRvxWP6vuyD6zu928J6koLUtptYmWHJRMV%2FAUqziZGqnoEcBFuL%2FYU6uzVEN75uCsYt6zZPABdAm8w6iP%2Bmpwmdb2dda01PHue54nrevntZCJPxzZl%2Bx%2Brwc8gYoO80mBOWNjehc%2BvUICj3gs5ChvTVlrC0x6BY2bZLvjyIYIhoQ&X-Amz-Signature=fc733c832f7cd681000e60aafc3f8859bb7ae46eb3cf281c88810dd730bc713c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMAVMBV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1duG6FN%2Fxn%2FgSTghh1g4oY8aJprWyezC8VN%2FNPVTgwIhAM%2FoL4snIHPyDslvk6XAslZwut4O%2BvXvWa11idmJtKoJKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkc35nAiWc9c4BV8Aq3ANpJheVKQqy3BF6ETKqqoOdsMw66eIeBzzYe96pHy%2B9ZRg1jIgkmFcRSTLkpTGKpRNXuHxTGKuQ9Wg0PfCbzXMjrcqvR%2BXN4uEHZ2j%2BHvSJgQT3LDhnFK7ig8eMzSAYdm5K4dQ3TlQ2iex2S1FlDE7MTZZdBA4YiWaTxRJAOzCP1aZY2LshoelsEKh3ykydbtqsSroa5tkNL9x7Fvcb6SEakiJSRmVm%2Fj5zv%2BvHMSvwUEoH2FW61BW4CPUL1QM44WRw%2FE%2BiUUi3mEbe1uApdsY8XIxxL6i9J3QJ9kG7FJsP9LPwfTxd4v0SxPi39q%2Fnvwq0D4o4Ri5FqQdDGcleVe%2F7Ya6cVqDYN6et83Z%2FDuDng7VyAqokE0rtsVVPtip5%2Fuk0DGx4BGIcmP7xVB6e3tehNK9ck4FCfbbo5dtqsFB0spLTactGlxEb3EimienUDQTGV%2B6bdiMaJJufaTFtFsvARKImO46saE5TG15OEyFV81B%2Bc5GQcSOr3RcMgb4x%2BUNomcToSQ2eLRVHAydUbyZFElSvv7rD66Q1SuqZPOvkHun5q6ROO2TLqF3s%2FL4PAQUmfoCtv5BmOfmlAaP3XnQcA2AQ7gfntyLaZ25TwJu6FJ3LOVj6kNE5oV1xwDCGnpvCBjqkASUkGQW5aYNnW5k4M2Dtcp3bE%2B35GjgHsLDJ40bPFOMx1IhlLRvxWP6vuyD6zu928J6koLUtptYmWHJRMV%2FAUqziZGqnoEcBFuL%2FYU6uzVEN75uCsYt6zZPABdAm8w6iP%2Bmpwmdb2dda01PHue54nrevntZCJPxzZl%2Bx%2Brwc8gYoO80mBOWNjehc%2BvUICj3gs5ChvTVlrC0x6BY2bZLvjyIYIhoQ&X-Amz-Signature=685350d0490e1f5e4b78a7661f6a670b1c9bd2c43120bdc0f2e9700683888397&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMAVMBV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1duG6FN%2Fxn%2FgSTghh1g4oY8aJprWyezC8VN%2FNPVTgwIhAM%2FoL4snIHPyDslvk6XAslZwut4O%2BvXvWa11idmJtKoJKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkc35nAiWc9c4BV8Aq3ANpJheVKQqy3BF6ETKqqoOdsMw66eIeBzzYe96pHy%2B9ZRg1jIgkmFcRSTLkpTGKpRNXuHxTGKuQ9Wg0PfCbzXMjrcqvR%2BXN4uEHZ2j%2BHvSJgQT3LDhnFK7ig8eMzSAYdm5K4dQ3TlQ2iex2S1FlDE7MTZZdBA4YiWaTxRJAOzCP1aZY2LshoelsEKh3ykydbtqsSroa5tkNL9x7Fvcb6SEakiJSRmVm%2Fj5zv%2BvHMSvwUEoH2FW61BW4CPUL1QM44WRw%2FE%2BiUUi3mEbe1uApdsY8XIxxL6i9J3QJ9kG7FJsP9LPwfTxd4v0SxPi39q%2Fnvwq0D4o4Ri5FqQdDGcleVe%2F7Ya6cVqDYN6et83Z%2FDuDng7VyAqokE0rtsVVPtip5%2Fuk0DGx4BGIcmP7xVB6e3tehNK9ck4FCfbbo5dtqsFB0spLTactGlxEb3EimienUDQTGV%2B6bdiMaJJufaTFtFsvARKImO46saE5TG15OEyFV81B%2Bc5GQcSOr3RcMgb4x%2BUNomcToSQ2eLRVHAydUbyZFElSvv7rD66Q1SuqZPOvkHun5q6ROO2TLqF3s%2FL4PAQUmfoCtv5BmOfmlAaP3XnQcA2AQ7gfntyLaZ25TwJu6FJ3LOVj6kNE5oV1xwDCGnpvCBjqkASUkGQW5aYNnW5k4M2Dtcp3bE%2B35GjgHsLDJ40bPFOMx1IhlLRvxWP6vuyD6zu928J6koLUtptYmWHJRMV%2FAUqziZGqnoEcBFuL%2FYU6uzVEN75uCsYt6zZPABdAm8w6iP%2Bmpwmdb2dda01PHue54nrevntZCJPxzZl%2Bx%2Brwc8gYoO80mBOWNjehc%2BvUICj3gs5ChvTVlrC0x6BY2bZLvjyIYIhoQ&X-Amz-Signature=4e6454b3423b631b57acafd4c3718d88eba02b02ed3f6fd0be68e029110ff6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMAVMBV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1duG6FN%2Fxn%2FgSTghh1g4oY8aJprWyezC8VN%2FNPVTgwIhAM%2FoL4snIHPyDslvk6XAslZwut4O%2BvXvWa11idmJtKoJKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkc35nAiWc9c4BV8Aq3ANpJheVKQqy3BF6ETKqqoOdsMw66eIeBzzYe96pHy%2B9ZRg1jIgkmFcRSTLkpTGKpRNXuHxTGKuQ9Wg0PfCbzXMjrcqvR%2BXN4uEHZ2j%2BHvSJgQT3LDhnFK7ig8eMzSAYdm5K4dQ3TlQ2iex2S1FlDE7MTZZdBA4YiWaTxRJAOzCP1aZY2LshoelsEKh3ykydbtqsSroa5tkNL9x7Fvcb6SEakiJSRmVm%2Fj5zv%2BvHMSvwUEoH2FW61BW4CPUL1QM44WRw%2FE%2BiUUi3mEbe1uApdsY8XIxxL6i9J3QJ9kG7FJsP9LPwfTxd4v0SxPi39q%2Fnvwq0D4o4Ri5FqQdDGcleVe%2F7Ya6cVqDYN6et83Z%2FDuDng7VyAqokE0rtsVVPtip5%2Fuk0DGx4BGIcmP7xVB6e3tehNK9ck4FCfbbo5dtqsFB0spLTactGlxEb3EimienUDQTGV%2B6bdiMaJJufaTFtFsvARKImO46saE5TG15OEyFV81B%2Bc5GQcSOr3RcMgb4x%2BUNomcToSQ2eLRVHAydUbyZFElSvv7rD66Q1SuqZPOvkHun5q6ROO2TLqF3s%2FL4PAQUmfoCtv5BmOfmlAaP3XnQcA2AQ7gfntyLaZ25TwJu6FJ3LOVj6kNE5oV1xwDCGnpvCBjqkASUkGQW5aYNnW5k4M2Dtcp3bE%2B35GjgHsLDJ40bPFOMx1IhlLRvxWP6vuyD6zu928J6koLUtptYmWHJRMV%2FAUqziZGqnoEcBFuL%2FYU6uzVEN75uCsYt6zZPABdAm8w6iP%2Bmpwmdb2dda01PHue54nrevntZCJPxzZl%2Bx%2Brwc8gYoO80mBOWNjehc%2BvUICj3gs5ChvTVlrC0x6BY2bZLvjyIYIhoQ&X-Amz-Signature=28841ac2feb9873b2878cb00fb18d1d30ac781a32835759b25aa84b2fc54aa3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMAVMBV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF1duG6FN%2Fxn%2FgSTghh1g4oY8aJprWyezC8VN%2FNPVTgwIhAM%2FoL4snIHPyDslvk6XAslZwut4O%2BvXvWa11idmJtKoJKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkc35nAiWc9c4BV8Aq3ANpJheVKQqy3BF6ETKqqoOdsMw66eIeBzzYe96pHy%2B9ZRg1jIgkmFcRSTLkpTGKpRNXuHxTGKuQ9Wg0PfCbzXMjrcqvR%2BXN4uEHZ2j%2BHvSJgQT3LDhnFK7ig8eMzSAYdm5K4dQ3TlQ2iex2S1FlDE7MTZZdBA4YiWaTxRJAOzCP1aZY2LshoelsEKh3ykydbtqsSroa5tkNL9x7Fvcb6SEakiJSRmVm%2Fj5zv%2BvHMSvwUEoH2FW61BW4CPUL1QM44WRw%2FE%2BiUUi3mEbe1uApdsY8XIxxL6i9J3QJ9kG7FJsP9LPwfTxd4v0SxPi39q%2Fnvwq0D4o4Ri5FqQdDGcleVe%2F7Ya6cVqDYN6et83Z%2FDuDng7VyAqokE0rtsVVPtip5%2Fuk0DGx4BGIcmP7xVB6e3tehNK9ck4FCfbbo5dtqsFB0spLTactGlxEb3EimienUDQTGV%2B6bdiMaJJufaTFtFsvARKImO46saE5TG15OEyFV81B%2Bc5GQcSOr3RcMgb4x%2BUNomcToSQ2eLRVHAydUbyZFElSvv7rD66Q1SuqZPOvkHun5q6ROO2TLqF3s%2FL4PAQUmfoCtv5BmOfmlAaP3XnQcA2AQ7gfntyLaZ25TwJu6FJ3LOVj6kNE5oV1xwDCGnpvCBjqkASUkGQW5aYNnW5k4M2Dtcp3bE%2B35GjgHsLDJ40bPFOMx1IhlLRvxWP6vuyD6zu928J6koLUtptYmWHJRMV%2FAUqziZGqnoEcBFuL%2FYU6uzVEN75uCsYt6zZPABdAm8w6iP%2Bmpwmdb2dda01PHue54nrevntZCJPxzZl%2Bx%2Brwc8gYoO80mBOWNjehc%2BvUICj3gs5ChvTVlrC0x6BY2bZLvjyIYIhoQ&X-Amz-Signature=c8ffb9d7db21e3f280ab5a81cbe56b558fd8b6daeb6da946fbd5d152e4809d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
