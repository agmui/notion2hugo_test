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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7O5WHQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCs%2Bo%2BmywQV3Fw7dMTjpLz1%2FyaFKadsMFbMJaU57wj%2BVAIhAIf4i482rob2Wa97DWz4Sv1%2ByKM4cVkTVjyaq8GGkQeHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FqHHtenPoV3JWKfQq3AO9h7MWGqqFRmeL11RltAtzTE6WJAmtKAHAFFnvYo%2FZPqHQRwgNOCuJdzCD77o6%2FjtQA20haz%2BoOF8QNZuH5uJsa4AZrWDjrrvcVYeZS0akzAqGi1jENH0KspKxh9x7cBdbnNbUTMNEc%2B%2FRPpDQVor6K9iedNonzdOfQsD4Vk%2Bnpd%2FZX%2FbrtTutMTmu7u%2FJitaZtMbJdtTQosWXunLHBOuPEpax%2F2DVCv5Sg%2BkbMF0b%2BJM6Y6PqHd81183%2FnBd0xjXBdsIgc7bEKz1LUmKh6FN7oBrxsh7VZIA5jRsunWpT0WC9yL7ZP55Oo7B%2FDelXud8g6FPEyQMJGtOd6vbhdn2SxOdQuMdupR8z%2BE34iV6II%2FMEXMLfMfHFLuELy%2BLypTtg6FwGTgKejxJIzTMZIi%2Bc%2F5DaBwsyXdJmnxUs7i7oOTjodcOhy3hnqoYBC8sL0ZqAKzPcYaQcznP3ZJAt90R3pATXX8637et6lG1mbPFy8MQL4fO2adKOFxsbSVmibqA3xd6DrvqPoA8bRvL0T44UG%2Bvzp6IMS7vb7495xpzY2%2FxYYmdMY4DZsmCfN0XULGIrffgUFOU%2FFXuMZEJPdmafWLhIpM3tdax3jFw9DkjbP0jbkET%2FNulhtR59xjC8qvm%2BBjqkAeVJ9JpEAZhylV2yYF7FusmnWAYRXACvv0Spkh5aDTxorC0EWexqspDv71i1PknDOrcmMlUO5fLIJWfVB6%2FGsHlpI%2FeONWSSTJqewV1DQBsZyWAtDEF9kVvbHtX%2FBbh8KQpWjvmB5BMn3tiAYF9GQlH23hKOXuhFyHFbCzuN%2BFodI%2FE5uJlESOiwHc7bCK%2FZFsh1DTu9b8FHvwg%2FZJGmX%2B%2F9bwwu&X-Amz-Signature=ffc1853e81114df732628e0dd13a3dbd02734efe3c82dd7bebd1a1e62ebc403d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7O5WHQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCs%2Bo%2BmywQV3Fw7dMTjpLz1%2FyaFKadsMFbMJaU57wj%2BVAIhAIf4i482rob2Wa97DWz4Sv1%2ByKM4cVkTVjyaq8GGkQeHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FqHHtenPoV3JWKfQq3AO9h7MWGqqFRmeL11RltAtzTE6WJAmtKAHAFFnvYo%2FZPqHQRwgNOCuJdzCD77o6%2FjtQA20haz%2BoOF8QNZuH5uJsa4AZrWDjrrvcVYeZS0akzAqGi1jENH0KspKxh9x7cBdbnNbUTMNEc%2B%2FRPpDQVor6K9iedNonzdOfQsD4Vk%2Bnpd%2FZX%2FbrtTutMTmu7u%2FJitaZtMbJdtTQosWXunLHBOuPEpax%2F2DVCv5Sg%2BkbMF0b%2BJM6Y6PqHd81183%2FnBd0xjXBdsIgc7bEKz1LUmKh6FN7oBrxsh7VZIA5jRsunWpT0WC9yL7ZP55Oo7B%2FDelXud8g6FPEyQMJGtOd6vbhdn2SxOdQuMdupR8z%2BE34iV6II%2FMEXMLfMfHFLuELy%2BLypTtg6FwGTgKejxJIzTMZIi%2Bc%2F5DaBwsyXdJmnxUs7i7oOTjodcOhy3hnqoYBC8sL0ZqAKzPcYaQcznP3ZJAt90R3pATXX8637et6lG1mbPFy8MQL4fO2adKOFxsbSVmibqA3xd6DrvqPoA8bRvL0T44UG%2Bvzp6IMS7vb7495xpzY2%2FxYYmdMY4DZsmCfN0XULGIrffgUFOU%2FFXuMZEJPdmafWLhIpM3tdax3jFw9DkjbP0jbkET%2FNulhtR59xjC8qvm%2BBjqkAeVJ9JpEAZhylV2yYF7FusmnWAYRXACvv0Spkh5aDTxorC0EWexqspDv71i1PknDOrcmMlUO5fLIJWfVB6%2FGsHlpI%2FeONWSSTJqewV1DQBsZyWAtDEF9kVvbHtX%2FBbh8KQpWjvmB5BMn3tiAYF9GQlH23hKOXuhFyHFbCzuN%2BFodI%2FE5uJlESOiwHc7bCK%2FZFsh1DTu9b8FHvwg%2FZJGmX%2B%2F9bwwu&X-Amz-Signature=deba1eef6a2a34ccd2abe88464e89d3b92d8eb2c2139ed2f1b172dca970883ef&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7O5WHQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCs%2Bo%2BmywQV3Fw7dMTjpLz1%2FyaFKadsMFbMJaU57wj%2BVAIhAIf4i482rob2Wa97DWz4Sv1%2ByKM4cVkTVjyaq8GGkQeHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FqHHtenPoV3JWKfQq3AO9h7MWGqqFRmeL11RltAtzTE6WJAmtKAHAFFnvYo%2FZPqHQRwgNOCuJdzCD77o6%2FjtQA20haz%2BoOF8QNZuH5uJsa4AZrWDjrrvcVYeZS0akzAqGi1jENH0KspKxh9x7cBdbnNbUTMNEc%2B%2FRPpDQVor6K9iedNonzdOfQsD4Vk%2Bnpd%2FZX%2FbrtTutMTmu7u%2FJitaZtMbJdtTQosWXunLHBOuPEpax%2F2DVCv5Sg%2BkbMF0b%2BJM6Y6PqHd81183%2FnBd0xjXBdsIgc7bEKz1LUmKh6FN7oBrxsh7VZIA5jRsunWpT0WC9yL7ZP55Oo7B%2FDelXud8g6FPEyQMJGtOd6vbhdn2SxOdQuMdupR8z%2BE34iV6II%2FMEXMLfMfHFLuELy%2BLypTtg6FwGTgKejxJIzTMZIi%2Bc%2F5DaBwsyXdJmnxUs7i7oOTjodcOhy3hnqoYBC8sL0ZqAKzPcYaQcznP3ZJAt90R3pATXX8637et6lG1mbPFy8MQL4fO2adKOFxsbSVmibqA3xd6DrvqPoA8bRvL0T44UG%2Bvzp6IMS7vb7495xpzY2%2FxYYmdMY4DZsmCfN0XULGIrffgUFOU%2FFXuMZEJPdmafWLhIpM3tdax3jFw9DkjbP0jbkET%2FNulhtR59xjC8qvm%2BBjqkAeVJ9JpEAZhylV2yYF7FusmnWAYRXACvv0Spkh5aDTxorC0EWexqspDv71i1PknDOrcmMlUO5fLIJWfVB6%2FGsHlpI%2FeONWSSTJqewV1DQBsZyWAtDEF9kVvbHtX%2FBbh8KQpWjvmB5BMn3tiAYF9GQlH23hKOXuhFyHFbCzuN%2BFodI%2FE5uJlESOiwHc7bCK%2FZFsh1DTu9b8FHvwg%2FZJGmX%2B%2F9bwwu&X-Amz-Signature=325bbe1f8c9e930f610279d5c10ebbe32ba1409658c02204b11e8099455fcf37&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7O5WHQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCs%2Bo%2BmywQV3Fw7dMTjpLz1%2FyaFKadsMFbMJaU57wj%2BVAIhAIf4i482rob2Wa97DWz4Sv1%2ByKM4cVkTVjyaq8GGkQeHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FqHHtenPoV3JWKfQq3AO9h7MWGqqFRmeL11RltAtzTE6WJAmtKAHAFFnvYo%2FZPqHQRwgNOCuJdzCD77o6%2FjtQA20haz%2BoOF8QNZuH5uJsa4AZrWDjrrvcVYeZS0akzAqGi1jENH0KspKxh9x7cBdbnNbUTMNEc%2B%2FRPpDQVor6K9iedNonzdOfQsD4Vk%2Bnpd%2FZX%2FbrtTutMTmu7u%2FJitaZtMbJdtTQosWXunLHBOuPEpax%2F2DVCv5Sg%2BkbMF0b%2BJM6Y6PqHd81183%2FnBd0xjXBdsIgc7bEKz1LUmKh6FN7oBrxsh7VZIA5jRsunWpT0WC9yL7ZP55Oo7B%2FDelXud8g6FPEyQMJGtOd6vbhdn2SxOdQuMdupR8z%2BE34iV6II%2FMEXMLfMfHFLuELy%2BLypTtg6FwGTgKejxJIzTMZIi%2Bc%2F5DaBwsyXdJmnxUs7i7oOTjodcOhy3hnqoYBC8sL0ZqAKzPcYaQcznP3ZJAt90R3pATXX8637et6lG1mbPFy8MQL4fO2adKOFxsbSVmibqA3xd6DrvqPoA8bRvL0T44UG%2Bvzp6IMS7vb7495xpzY2%2FxYYmdMY4DZsmCfN0XULGIrffgUFOU%2FFXuMZEJPdmafWLhIpM3tdax3jFw9DkjbP0jbkET%2FNulhtR59xjC8qvm%2BBjqkAeVJ9JpEAZhylV2yYF7FusmnWAYRXACvv0Spkh5aDTxorC0EWexqspDv71i1PknDOrcmMlUO5fLIJWfVB6%2FGsHlpI%2FeONWSSTJqewV1DQBsZyWAtDEF9kVvbHtX%2FBbh8KQpWjvmB5BMn3tiAYF9GQlH23hKOXuhFyHFbCzuN%2BFodI%2FE5uJlESOiwHc7bCK%2FZFsh1DTu9b8FHvwg%2FZJGmX%2B%2F9bwwu&X-Amz-Signature=86d2313e03092285eeb1533ba52cec984a590224d978cdfc752f246cd73ad0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7O5WHQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCs%2Bo%2BmywQV3Fw7dMTjpLz1%2FyaFKadsMFbMJaU57wj%2BVAIhAIf4i482rob2Wa97DWz4Sv1%2ByKM4cVkTVjyaq8GGkQeHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FqHHtenPoV3JWKfQq3AO9h7MWGqqFRmeL11RltAtzTE6WJAmtKAHAFFnvYo%2FZPqHQRwgNOCuJdzCD77o6%2FjtQA20haz%2BoOF8QNZuH5uJsa4AZrWDjrrvcVYeZS0akzAqGi1jENH0KspKxh9x7cBdbnNbUTMNEc%2B%2FRPpDQVor6K9iedNonzdOfQsD4Vk%2Bnpd%2FZX%2FbrtTutMTmu7u%2FJitaZtMbJdtTQosWXunLHBOuPEpax%2F2DVCv5Sg%2BkbMF0b%2BJM6Y6PqHd81183%2FnBd0xjXBdsIgc7bEKz1LUmKh6FN7oBrxsh7VZIA5jRsunWpT0WC9yL7ZP55Oo7B%2FDelXud8g6FPEyQMJGtOd6vbhdn2SxOdQuMdupR8z%2BE34iV6II%2FMEXMLfMfHFLuELy%2BLypTtg6FwGTgKejxJIzTMZIi%2Bc%2F5DaBwsyXdJmnxUs7i7oOTjodcOhy3hnqoYBC8sL0ZqAKzPcYaQcznP3ZJAt90R3pATXX8637et6lG1mbPFy8MQL4fO2adKOFxsbSVmibqA3xd6DrvqPoA8bRvL0T44UG%2Bvzp6IMS7vb7495xpzY2%2FxYYmdMY4DZsmCfN0XULGIrffgUFOU%2FFXuMZEJPdmafWLhIpM3tdax3jFw9DkjbP0jbkET%2FNulhtR59xjC8qvm%2BBjqkAeVJ9JpEAZhylV2yYF7FusmnWAYRXACvv0Spkh5aDTxorC0EWexqspDv71i1PknDOrcmMlUO5fLIJWfVB6%2FGsHlpI%2FeONWSSTJqewV1DQBsZyWAtDEF9kVvbHtX%2FBbh8KQpWjvmB5BMn3tiAYF9GQlH23hKOXuhFyHFbCzuN%2BFodI%2FE5uJlESOiwHc7bCK%2FZFsh1DTu9b8FHvwg%2FZJGmX%2B%2F9bwwu&X-Amz-Signature=8835fabcda275ba27a5d82ffa3701590cb4aeb6cce1f52e7e9b93372efa714a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7O5WHQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCs%2Bo%2BmywQV3Fw7dMTjpLz1%2FyaFKadsMFbMJaU57wj%2BVAIhAIf4i482rob2Wa97DWz4Sv1%2ByKM4cVkTVjyaq8GGkQeHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FqHHtenPoV3JWKfQq3AO9h7MWGqqFRmeL11RltAtzTE6WJAmtKAHAFFnvYo%2FZPqHQRwgNOCuJdzCD77o6%2FjtQA20haz%2BoOF8QNZuH5uJsa4AZrWDjrrvcVYeZS0akzAqGi1jENH0KspKxh9x7cBdbnNbUTMNEc%2B%2FRPpDQVor6K9iedNonzdOfQsD4Vk%2Bnpd%2FZX%2FbrtTutMTmu7u%2FJitaZtMbJdtTQosWXunLHBOuPEpax%2F2DVCv5Sg%2BkbMF0b%2BJM6Y6PqHd81183%2FnBd0xjXBdsIgc7bEKz1LUmKh6FN7oBrxsh7VZIA5jRsunWpT0WC9yL7ZP55Oo7B%2FDelXud8g6FPEyQMJGtOd6vbhdn2SxOdQuMdupR8z%2BE34iV6II%2FMEXMLfMfHFLuELy%2BLypTtg6FwGTgKejxJIzTMZIi%2Bc%2F5DaBwsyXdJmnxUs7i7oOTjodcOhy3hnqoYBC8sL0ZqAKzPcYaQcznP3ZJAt90R3pATXX8637et6lG1mbPFy8MQL4fO2adKOFxsbSVmibqA3xd6DrvqPoA8bRvL0T44UG%2Bvzp6IMS7vb7495xpzY2%2FxYYmdMY4DZsmCfN0XULGIrffgUFOU%2FFXuMZEJPdmafWLhIpM3tdax3jFw9DkjbP0jbkET%2FNulhtR59xjC8qvm%2BBjqkAeVJ9JpEAZhylV2yYF7FusmnWAYRXACvv0Spkh5aDTxorC0EWexqspDv71i1PknDOrcmMlUO5fLIJWfVB6%2FGsHlpI%2FeONWSSTJqewV1DQBsZyWAtDEF9kVvbHtX%2FBbh8KQpWjvmB5BMn3tiAYF9GQlH23hKOXuhFyHFbCzuN%2BFodI%2FE5uJlESOiwHc7bCK%2FZFsh1DTu9b8FHvwg%2FZJGmX%2B%2F9bwwu&X-Amz-Signature=969afce50c7b133dd303e163f8562939d4d0bfd7ef08a0964f3f246db1d43f40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7O5WHQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCs%2Bo%2BmywQV3Fw7dMTjpLz1%2FyaFKadsMFbMJaU57wj%2BVAIhAIf4i482rob2Wa97DWz4Sv1%2ByKM4cVkTVjyaq8GGkQeHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FqHHtenPoV3JWKfQq3AO9h7MWGqqFRmeL11RltAtzTE6WJAmtKAHAFFnvYo%2FZPqHQRwgNOCuJdzCD77o6%2FjtQA20haz%2BoOF8QNZuH5uJsa4AZrWDjrrvcVYeZS0akzAqGi1jENH0KspKxh9x7cBdbnNbUTMNEc%2B%2FRPpDQVor6K9iedNonzdOfQsD4Vk%2Bnpd%2FZX%2FbrtTutMTmu7u%2FJitaZtMbJdtTQosWXunLHBOuPEpax%2F2DVCv5Sg%2BkbMF0b%2BJM6Y6PqHd81183%2FnBd0xjXBdsIgc7bEKz1LUmKh6FN7oBrxsh7VZIA5jRsunWpT0WC9yL7ZP55Oo7B%2FDelXud8g6FPEyQMJGtOd6vbhdn2SxOdQuMdupR8z%2BE34iV6II%2FMEXMLfMfHFLuELy%2BLypTtg6FwGTgKejxJIzTMZIi%2Bc%2F5DaBwsyXdJmnxUs7i7oOTjodcOhy3hnqoYBC8sL0ZqAKzPcYaQcznP3ZJAt90R3pATXX8637et6lG1mbPFy8MQL4fO2adKOFxsbSVmibqA3xd6DrvqPoA8bRvL0T44UG%2Bvzp6IMS7vb7495xpzY2%2FxYYmdMY4DZsmCfN0XULGIrffgUFOU%2FFXuMZEJPdmafWLhIpM3tdax3jFw9DkjbP0jbkET%2FNulhtR59xjC8qvm%2BBjqkAeVJ9JpEAZhylV2yYF7FusmnWAYRXACvv0Spkh5aDTxorC0EWexqspDv71i1PknDOrcmMlUO5fLIJWfVB6%2FGsHlpI%2FeONWSSTJqewV1DQBsZyWAtDEF9kVvbHtX%2FBbh8KQpWjvmB5BMn3tiAYF9GQlH23hKOXuhFyHFbCzuN%2BFodI%2FE5uJlESOiwHc7bCK%2FZFsh1DTu9b8FHvwg%2FZJGmX%2B%2F9bwwu&X-Amz-Signature=627ea3a200c1a408032c20b1ca183676d4045108609e25bdc009c837225a4eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7O5WHQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCs%2Bo%2BmywQV3Fw7dMTjpLz1%2FyaFKadsMFbMJaU57wj%2BVAIhAIf4i482rob2Wa97DWz4Sv1%2ByKM4cVkTVjyaq8GGkQeHKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FqHHtenPoV3JWKfQq3AO9h7MWGqqFRmeL11RltAtzTE6WJAmtKAHAFFnvYo%2FZPqHQRwgNOCuJdzCD77o6%2FjtQA20haz%2BoOF8QNZuH5uJsa4AZrWDjrrvcVYeZS0akzAqGi1jENH0KspKxh9x7cBdbnNbUTMNEc%2B%2FRPpDQVor6K9iedNonzdOfQsD4Vk%2Bnpd%2FZX%2FbrtTutMTmu7u%2FJitaZtMbJdtTQosWXunLHBOuPEpax%2F2DVCv5Sg%2BkbMF0b%2BJM6Y6PqHd81183%2FnBd0xjXBdsIgc7bEKz1LUmKh6FN7oBrxsh7VZIA5jRsunWpT0WC9yL7ZP55Oo7B%2FDelXud8g6FPEyQMJGtOd6vbhdn2SxOdQuMdupR8z%2BE34iV6II%2FMEXMLfMfHFLuELy%2BLypTtg6FwGTgKejxJIzTMZIi%2Bc%2F5DaBwsyXdJmnxUs7i7oOTjodcOhy3hnqoYBC8sL0ZqAKzPcYaQcznP3ZJAt90R3pATXX8637et6lG1mbPFy8MQL4fO2adKOFxsbSVmibqA3xd6DrvqPoA8bRvL0T44UG%2Bvzp6IMS7vb7495xpzY2%2FxYYmdMY4DZsmCfN0XULGIrffgUFOU%2FFXuMZEJPdmafWLhIpM3tdax3jFw9DkjbP0jbkET%2FNulhtR59xjC8qvm%2BBjqkAeVJ9JpEAZhylV2yYF7FusmnWAYRXACvv0Spkh5aDTxorC0EWexqspDv71i1PknDOrcmMlUO5fLIJWfVB6%2FGsHlpI%2FeONWSSTJqewV1DQBsZyWAtDEF9kVvbHtX%2FBbh8KQpWjvmB5BMn3tiAYF9GQlH23hKOXuhFyHFbCzuN%2BFodI%2FE5uJlESOiwHc7bCK%2FZFsh1DTu9b8FHvwg%2FZJGmX%2B%2F9bwwu&X-Amz-Signature=95b43d7ce422e77c427b3d3d77d54c9acae13522c2828c6a7ed7d6759466c2a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
