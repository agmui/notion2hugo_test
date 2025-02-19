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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGJ344K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDdhUOGa9nxPwMq66nzdmcpo9SLEDW6bWYlojZAbru77wIgCxai5q3uVpwsbAAtjn1Rgvy4mEJhsJZCXVa5zCWiG3EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTNzzI%2BRr4KlSV6pircA1mPZx85WlpIIEiQ%2BHv%2Br%2BdaVFlzPvIwxdYr1oM79BBe2MZE6woQ6JwhMiJKSZVO%2Figs0kKmnFZVGiLLbs2kx8gAegWq%2FRxoJPzCp%2FDSEPJPwTxil2WXRK3%2FeTeUHJsS7yhyyD5yJUcuiLM82MojkrbS1aCjE5AjvxX32Jcj%2BDeasB2wHWoeaqQfwCDDlLuuxI7qwOsdXuN4zn7TN%2BMoKdgQkkq0XgNTMwqh6LXv8xi4l7b4FlqwJT97Mzr8U2aZZ3Coh9LyLdEJl6g7yjWw2EfZQ2Q%2BBDQWbRueDiAfwdrHlb06t%2BZAC8V8O4eDCqenyXhyJLW4tfZG6yaG6QE7EGko6V06ChErTh%2B9kFRPtYbr0YNQHWAXR2UVKTSOGjveJ6yQax3MRGG3QY81KDA1VX1lTIqg3FmXG3pR5grIe2ZEY2ehW36dmnifPpgTSLDmj59%2FmfqFZ1cvPvfGakE5euV4GYih36jgwVDGFPworrl6cqnfS%2BK7NQTNE%2FL9G%2BRrdK2HPI0P3SIOs8ZRa9c4LvA1kcNfSe7b2eAw8EkD7FLNguNIUENUywH7vdPaZVu7YTT7RV7TP4j42bDnc1%2FG8PCZoCqw23rUCfFNv6vAdhfrlCSjfTFK10%2B29%2FmzMKPp1L0GOqUBMxrOtyNi2ktFDIGtpy6ALTyRwcxRMYRM02WiiCHgIBzk%2FJcuZEUJ3kracNFx7Fa51FmqErup3ZHAgjB71NtGXvNx0OgcEhRaOtxp5OBLxrWRpD2nBDebvSYSQoWJAkRMJSV4lf3gS%2BeFbMc5LLecHCuDqnf4AE2P3a7CAWKebMzxSmyLnlp8%2FGvs1BLTrPOrdPFXCiEf%2FNpUzK4N4VxKLz%2BsAwyZ&X-Amz-Signature=ab3d7160b2f2cc3df073e8ea8b6a9eed3b0cc7cc9714a14528f7b0bcf555b50c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGJ344K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDdhUOGa9nxPwMq66nzdmcpo9SLEDW6bWYlojZAbru77wIgCxai5q3uVpwsbAAtjn1Rgvy4mEJhsJZCXVa5zCWiG3EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTNzzI%2BRr4KlSV6pircA1mPZx85WlpIIEiQ%2BHv%2Br%2BdaVFlzPvIwxdYr1oM79BBe2MZE6woQ6JwhMiJKSZVO%2Figs0kKmnFZVGiLLbs2kx8gAegWq%2FRxoJPzCp%2FDSEPJPwTxil2WXRK3%2FeTeUHJsS7yhyyD5yJUcuiLM82MojkrbS1aCjE5AjvxX32Jcj%2BDeasB2wHWoeaqQfwCDDlLuuxI7qwOsdXuN4zn7TN%2BMoKdgQkkq0XgNTMwqh6LXv8xi4l7b4FlqwJT97Mzr8U2aZZ3Coh9LyLdEJl6g7yjWw2EfZQ2Q%2BBDQWbRueDiAfwdrHlb06t%2BZAC8V8O4eDCqenyXhyJLW4tfZG6yaG6QE7EGko6V06ChErTh%2B9kFRPtYbr0YNQHWAXR2UVKTSOGjveJ6yQax3MRGG3QY81KDA1VX1lTIqg3FmXG3pR5grIe2ZEY2ehW36dmnifPpgTSLDmj59%2FmfqFZ1cvPvfGakE5euV4GYih36jgwVDGFPworrl6cqnfS%2BK7NQTNE%2FL9G%2BRrdK2HPI0P3SIOs8ZRa9c4LvA1kcNfSe7b2eAw8EkD7FLNguNIUENUywH7vdPaZVu7YTT7RV7TP4j42bDnc1%2FG8PCZoCqw23rUCfFNv6vAdhfrlCSjfTFK10%2B29%2FmzMKPp1L0GOqUBMxrOtyNi2ktFDIGtpy6ALTyRwcxRMYRM02WiiCHgIBzk%2FJcuZEUJ3kracNFx7Fa51FmqErup3ZHAgjB71NtGXvNx0OgcEhRaOtxp5OBLxrWRpD2nBDebvSYSQoWJAkRMJSV4lf3gS%2BeFbMc5LLecHCuDqnf4AE2P3a7CAWKebMzxSmyLnlp8%2FGvs1BLTrPOrdPFXCiEf%2FNpUzK4N4VxKLz%2BsAwyZ&X-Amz-Signature=40a3a138ad95e2e31551299f9b5fe1fae846f62f6bbd678fb0e6725ab7aad758&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGJ344K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDdhUOGa9nxPwMq66nzdmcpo9SLEDW6bWYlojZAbru77wIgCxai5q3uVpwsbAAtjn1Rgvy4mEJhsJZCXVa5zCWiG3EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTNzzI%2BRr4KlSV6pircA1mPZx85WlpIIEiQ%2BHv%2Br%2BdaVFlzPvIwxdYr1oM79BBe2MZE6woQ6JwhMiJKSZVO%2Figs0kKmnFZVGiLLbs2kx8gAegWq%2FRxoJPzCp%2FDSEPJPwTxil2WXRK3%2FeTeUHJsS7yhyyD5yJUcuiLM82MojkrbS1aCjE5AjvxX32Jcj%2BDeasB2wHWoeaqQfwCDDlLuuxI7qwOsdXuN4zn7TN%2BMoKdgQkkq0XgNTMwqh6LXv8xi4l7b4FlqwJT97Mzr8U2aZZ3Coh9LyLdEJl6g7yjWw2EfZQ2Q%2BBDQWbRueDiAfwdrHlb06t%2BZAC8V8O4eDCqenyXhyJLW4tfZG6yaG6QE7EGko6V06ChErTh%2B9kFRPtYbr0YNQHWAXR2UVKTSOGjveJ6yQax3MRGG3QY81KDA1VX1lTIqg3FmXG3pR5grIe2ZEY2ehW36dmnifPpgTSLDmj59%2FmfqFZ1cvPvfGakE5euV4GYih36jgwVDGFPworrl6cqnfS%2BK7NQTNE%2FL9G%2BRrdK2HPI0P3SIOs8ZRa9c4LvA1kcNfSe7b2eAw8EkD7FLNguNIUENUywH7vdPaZVu7YTT7RV7TP4j42bDnc1%2FG8PCZoCqw23rUCfFNv6vAdhfrlCSjfTFK10%2B29%2FmzMKPp1L0GOqUBMxrOtyNi2ktFDIGtpy6ALTyRwcxRMYRM02WiiCHgIBzk%2FJcuZEUJ3kracNFx7Fa51FmqErup3ZHAgjB71NtGXvNx0OgcEhRaOtxp5OBLxrWRpD2nBDebvSYSQoWJAkRMJSV4lf3gS%2BeFbMc5LLecHCuDqnf4AE2P3a7CAWKebMzxSmyLnlp8%2FGvs1BLTrPOrdPFXCiEf%2FNpUzK4N4VxKLz%2BsAwyZ&X-Amz-Signature=c9c904cb38fba10b07185badbd33bf6e456d45cdbbe946b9c1283cb242debbf7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGJ344K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDdhUOGa9nxPwMq66nzdmcpo9SLEDW6bWYlojZAbru77wIgCxai5q3uVpwsbAAtjn1Rgvy4mEJhsJZCXVa5zCWiG3EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTNzzI%2BRr4KlSV6pircA1mPZx85WlpIIEiQ%2BHv%2Br%2BdaVFlzPvIwxdYr1oM79BBe2MZE6woQ6JwhMiJKSZVO%2Figs0kKmnFZVGiLLbs2kx8gAegWq%2FRxoJPzCp%2FDSEPJPwTxil2WXRK3%2FeTeUHJsS7yhyyD5yJUcuiLM82MojkrbS1aCjE5AjvxX32Jcj%2BDeasB2wHWoeaqQfwCDDlLuuxI7qwOsdXuN4zn7TN%2BMoKdgQkkq0XgNTMwqh6LXv8xi4l7b4FlqwJT97Mzr8U2aZZ3Coh9LyLdEJl6g7yjWw2EfZQ2Q%2BBDQWbRueDiAfwdrHlb06t%2BZAC8V8O4eDCqenyXhyJLW4tfZG6yaG6QE7EGko6V06ChErTh%2B9kFRPtYbr0YNQHWAXR2UVKTSOGjveJ6yQax3MRGG3QY81KDA1VX1lTIqg3FmXG3pR5grIe2ZEY2ehW36dmnifPpgTSLDmj59%2FmfqFZ1cvPvfGakE5euV4GYih36jgwVDGFPworrl6cqnfS%2BK7NQTNE%2FL9G%2BRrdK2HPI0P3SIOs8ZRa9c4LvA1kcNfSe7b2eAw8EkD7FLNguNIUENUywH7vdPaZVu7YTT7RV7TP4j42bDnc1%2FG8PCZoCqw23rUCfFNv6vAdhfrlCSjfTFK10%2B29%2FmzMKPp1L0GOqUBMxrOtyNi2ktFDIGtpy6ALTyRwcxRMYRM02WiiCHgIBzk%2FJcuZEUJ3kracNFx7Fa51FmqErup3ZHAgjB71NtGXvNx0OgcEhRaOtxp5OBLxrWRpD2nBDebvSYSQoWJAkRMJSV4lf3gS%2BeFbMc5LLecHCuDqnf4AE2P3a7CAWKebMzxSmyLnlp8%2FGvs1BLTrPOrdPFXCiEf%2FNpUzK4N4VxKLz%2BsAwyZ&X-Amz-Signature=fadc72b81787d8935729ad00cbb647887f6f770a6d1f85fb8863bf7c2f473edb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGJ344K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDdhUOGa9nxPwMq66nzdmcpo9SLEDW6bWYlojZAbru77wIgCxai5q3uVpwsbAAtjn1Rgvy4mEJhsJZCXVa5zCWiG3EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTNzzI%2BRr4KlSV6pircA1mPZx85WlpIIEiQ%2BHv%2Br%2BdaVFlzPvIwxdYr1oM79BBe2MZE6woQ6JwhMiJKSZVO%2Figs0kKmnFZVGiLLbs2kx8gAegWq%2FRxoJPzCp%2FDSEPJPwTxil2WXRK3%2FeTeUHJsS7yhyyD5yJUcuiLM82MojkrbS1aCjE5AjvxX32Jcj%2BDeasB2wHWoeaqQfwCDDlLuuxI7qwOsdXuN4zn7TN%2BMoKdgQkkq0XgNTMwqh6LXv8xi4l7b4FlqwJT97Mzr8U2aZZ3Coh9LyLdEJl6g7yjWw2EfZQ2Q%2BBDQWbRueDiAfwdrHlb06t%2BZAC8V8O4eDCqenyXhyJLW4tfZG6yaG6QE7EGko6V06ChErTh%2B9kFRPtYbr0YNQHWAXR2UVKTSOGjveJ6yQax3MRGG3QY81KDA1VX1lTIqg3FmXG3pR5grIe2ZEY2ehW36dmnifPpgTSLDmj59%2FmfqFZ1cvPvfGakE5euV4GYih36jgwVDGFPworrl6cqnfS%2BK7NQTNE%2FL9G%2BRrdK2HPI0P3SIOs8ZRa9c4LvA1kcNfSe7b2eAw8EkD7FLNguNIUENUywH7vdPaZVu7YTT7RV7TP4j42bDnc1%2FG8PCZoCqw23rUCfFNv6vAdhfrlCSjfTFK10%2B29%2FmzMKPp1L0GOqUBMxrOtyNi2ktFDIGtpy6ALTyRwcxRMYRM02WiiCHgIBzk%2FJcuZEUJ3kracNFx7Fa51FmqErup3ZHAgjB71NtGXvNx0OgcEhRaOtxp5OBLxrWRpD2nBDebvSYSQoWJAkRMJSV4lf3gS%2BeFbMc5LLecHCuDqnf4AE2P3a7CAWKebMzxSmyLnlp8%2FGvs1BLTrPOrdPFXCiEf%2FNpUzK4N4VxKLz%2BsAwyZ&X-Amz-Signature=bcd74d2d3f6a26f82cea8928ef23f35086f886da1071d43c732e6d682a693f16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGJ344K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDdhUOGa9nxPwMq66nzdmcpo9SLEDW6bWYlojZAbru77wIgCxai5q3uVpwsbAAtjn1Rgvy4mEJhsJZCXVa5zCWiG3EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTNzzI%2BRr4KlSV6pircA1mPZx85WlpIIEiQ%2BHv%2Br%2BdaVFlzPvIwxdYr1oM79BBe2MZE6woQ6JwhMiJKSZVO%2Figs0kKmnFZVGiLLbs2kx8gAegWq%2FRxoJPzCp%2FDSEPJPwTxil2WXRK3%2FeTeUHJsS7yhyyD5yJUcuiLM82MojkrbS1aCjE5AjvxX32Jcj%2BDeasB2wHWoeaqQfwCDDlLuuxI7qwOsdXuN4zn7TN%2BMoKdgQkkq0XgNTMwqh6LXv8xi4l7b4FlqwJT97Mzr8U2aZZ3Coh9LyLdEJl6g7yjWw2EfZQ2Q%2BBDQWbRueDiAfwdrHlb06t%2BZAC8V8O4eDCqenyXhyJLW4tfZG6yaG6QE7EGko6V06ChErTh%2B9kFRPtYbr0YNQHWAXR2UVKTSOGjveJ6yQax3MRGG3QY81KDA1VX1lTIqg3FmXG3pR5grIe2ZEY2ehW36dmnifPpgTSLDmj59%2FmfqFZ1cvPvfGakE5euV4GYih36jgwVDGFPworrl6cqnfS%2BK7NQTNE%2FL9G%2BRrdK2HPI0P3SIOs8ZRa9c4LvA1kcNfSe7b2eAw8EkD7FLNguNIUENUywH7vdPaZVu7YTT7RV7TP4j42bDnc1%2FG8PCZoCqw23rUCfFNv6vAdhfrlCSjfTFK10%2B29%2FmzMKPp1L0GOqUBMxrOtyNi2ktFDIGtpy6ALTyRwcxRMYRM02WiiCHgIBzk%2FJcuZEUJ3kracNFx7Fa51FmqErup3ZHAgjB71NtGXvNx0OgcEhRaOtxp5OBLxrWRpD2nBDebvSYSQoWJAkRMJSV4lf3gS%2BeFbMc5LLecHCuDqnf4AE2P3a7CAWKebMzxSmyLnlp8%2FGvs1BLTrPOrdPFXCiEf%2FNpUzK4N4VxKLz%2BsAwyZ&X-Amz-Signature=5ad264d0feed00ae7d9b6eb7c9e63d9ce7dbe88d10a8c1b7c2825984acfcb7cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGJ344K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDdhUOGa9nxPwMq66nzdmcpo9SLEDW6bWYlojZAbru77wIgCxai5q3uVpwsbAAtjn1Rgvy4mEJhsJZCXVa5zCWiG3EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTNzzI%2BRr4KlSV6pircA1mPZx85WlpIIEiQ%2BHv%2Br%2BdaVFlzPvIwxdYr1oM79BBe2MZE6woQ6JwhMiJKSZVO%2Figs0kKmnFZVGiLLbs2kx8gAegWq%2FRxoJPzCp%2FDSEPJPwTxil2WXRK3%2FeTeUHJsS7yhyyD5yJUcuiLM82MojkrbS1aCjE5AjvxX32Jcj%2BDeasB2wHWoeaqQfwCDDlLuuxI7qwOsdXuN4zn7TN%2BMoKdgQkkq0XgNTMwqh6LXv8xi4l7b4FlqwJT97Mzr8U2aZZ3Coh9LyLdEJl6g7yjWw2EfZQ2Q%2BBDQWbRueDiAfwdrHlb06t%2BZAC8V8O4eDCqenyXhyJLW4tfZG6yaG6QE7EGko6V06ChErTh%2B9kFRPtYbr0YNQHWAXR2UVKTSOGjveJ6yQax3MRGG3QY81KDA1VX1lTIqg3FmXG3pR5grIe2ZEY2ehW36dmnifPpgTSLDmj59%2FmfqFZ1cvPvfGakE5euV4GYih36jgwVDGFPworrl6cqnfS%2BK7NQTNE%2FL9G%2BRrdK2HPI0P3SIOs8ZRa9c4LvA1kcNfSe7b2eAw8EkD7FLNguNIUENUywH7vdPaZVu7YTT7RV7TP4j42bDnc1%2FG8PCZoCqw23rUCfFNv6vAdhfrlCSjfTFK10%2B29%2FmzMKPp1L0GOqUBMxrOtyNi2ktFDIGtpy6ALTyRwcxRMYRM02WiiCHgIBzk%2FJcuZEUJ3kracNFx7Fa51FmqErup3ZHAgjB71NtGXvNx0OgcEhRaOtxp5OBLxrWRpD2nBDebvSYSQoWJAkRMJSV4lf3gS%2BeFbMc5LLecHCuDqnf4AE2P3a7CAWKebMzxSmyLnlp8%2FGvs1BLTrPOrdPFXCiEf%2FNpUzK4N4VxKLz%2BsAwyZ&X-Amz-Signature=43a961c744095c7e00c73caaec37b147411f0071f06b37c2525865fbc7dbb6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IGJ344K%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T020942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDdhUOGa9nxPwMq66nzdmcpo9SLEDW6bWYlojZAbru77wIgCxai5q3uVpwsbAAtjn1Rgvy4mEJhsJZCXVa5zCWiG3EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTNzzI%2BRr4KlSV6pircA1mPZx85WlpIIEiQ%2BHv%2Br%2BdaVFlzPvIwxdYr1oM79BBe2MZE6woQ6JwhMiJKSZVO%2Figs0kKmnFZVGiLLbs2kx8gAegWq%2FRxoJPzCp%2FDSEPJPwTxil2WXRK3%2FeTeUHJsS7yhyyD5yJUcuiLM82MojkrbS1aCjE5AjvxX32Jcj%2BDeasB2wHWoeaqQfwCDDlLuuxI7qwOsdXuN4zn7TN%2BMoKdgQkkq0XgNTMwqh6LXv8xi4l7b4FlqwJT97Mzr8U2aZZ3Coh9LyLdEJl6g7yjWw2EfZQ2Q%2BBDQWbRueDiAfwdrHlb06t%2BZAC8V8O4eDCqenyXhyJLW4tfZG6yaG6QE7EGko6V06ChErTh%2B9kFRPtYbr0YNQHWAXR2UVKTSOGjveJ6yQax3MRGG3QY81KDA1VX1lTIqg3FmXG3pR5grIe2ZEY2ehW36dmnifPpgTSLDmj59%2FmfqFZ1cvPvfGakE5euV4GYih36jgwVDGFPworrl6cqnfS%2BK7NQTNE%2FL9G%2BRrdK2HPI0P3SIOs8ZRa9c4LvA1kcNfSe7b2eAw8EkD7FLNguNIUENUywH7vdPaZVu7YTT7RV7TP4j42bDnc1%2FG8PCZoCqw23rUCfFNv6vAdhfrlCSjfTFK10%2B29%2FmzMKPp1L0GOqUBMxrOtyNi2ktFDIGtpy6ALTyRwcxRMYRM02WiiCHgIBzk%2FJcuZEUJ3kracNFx7Fa51FmqErup3ZHAgjB71NtGXvNx0OgcEhRaOtxp5OBLxrWRpD2nBDebvSYSQoWJAkRMJSV4lf3gS%2BeFbMc5LLecHCuDqnf4AE2P3a7CAWKebMzxSmyLnlp8%2FGvs1BLTrPOrdPFXCiEf%2FNpUzK4N4VxKLz%2BsAwyZ&X-Amz-Signature=1c86d7dd012c40fb0ddb1fb768bf5ac462f839c41ab0869ba070a690ce229ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
