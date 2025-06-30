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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WRSMHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbbewejlgOWbFuzgZiTdjsGToEXlhEDSv3DnBowvrxSgIgMldl37tbfxACCnrXvpA6oBJENU%2FELjI0wz0El5LG0AMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpRafYln3McF%2FhDGCrcAxo0%2B%2FZwTwkCTYxGFeiromvqZtDyBVlxJQ6rh6IAX%2B5FWg15ytLacP24hHzG8Ne5tR5%2F8MAcpYuPeIJRZUZc%2FheeYxbQ66Duh%2BUPAdndDXAf60evR0ROU%2BlDDC90EHAqEKHhF%2BB04WqdU2jPrafBAowgUeozbt1iQqFWmaZr4dQDz9sSGwG8swLjEze0oEtw90YQ%2Bf6b%2B7crp0dEqfM3BI92IwlE9aRYQKkqLugtHcq8NJjtI2ioB8ID7KwvH80DkEU4WRzA6hyEYto%2BL73TZubLhI2k%2BDHRkX7tEbEqrtJVZrOtVHPiLP9i2t7F%2FyJS05KqdDgwayRvytdWMoCsNGbX81%2FQuxn4JQWrmkWEWIhqT%2Bbe2Hx9p0C7HMMfdYWLO9AKI%2BotVf5o3fGb1%2F4AFToFmGMU%2BOVm9QWQEPwRxl%2FJXygqVN%2FW2PspxielwwIibQnTvZ%2FJq9TNtrciHX%2FPmvppMDU6bf49ARVMqZMDw8C9xOXHBeAe1LtnzVPgerlNa7Fi6vMwCt0aXzyfiMep1mDRWUYovetW6evUz17smbR6oxfK8mXeJOVK%2BEvlqdtfF%2F2AeOiIRzH1iZN7QcpjyaraQsU4kixXdt4TlfzlYzmG7lbEsxIfOc2jkJhIMM2iicMGOqUBwCeQqnROy5s2BLgxY9azDUbu0FtCwLe5otFnLTOqYZm6%2BsksuglEe8y20S2uUwUK0XBwlB4HDuyecZi78FoAcC4S7kr7Onj88j0%2FIY%2B%2Ffpr6Z2CRb1NTXvSxxquFaj%2BwJMe%2FrFuLE6oEELoDJmdF2EPnsWedMYTkUBbeXlvO6F8bG0zKQgP4QpB5FOYKx2HyrmTHeTLq0s9Z7Ndj7GyqrTZC7TBB&X-Amz-Signature=1efa44b34bf4a1ba72334e3f38adabb29b9e88db01079077c6fca5acd0a7b6a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WRSMHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbbewejlgOWbFuzgZiTdjsGToEXlhEDSv3DnBowvrxSgIgMldl37tbfxACCnrXvpA6oBJENU%2FELjI0wz0El5LG0AMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpRafYln3McF%2FhDGCrcAxo0%2B%2FZwTwkCTYxGFeiromvqZtDyBVlxJQ6rh6IAX%2B5FWg15ytLacP24hHzG8Ne5tR5%2F8MAcpYuPeIJRZUZc%2FheeYxbQ66Duh%2BUPAdndDXAf60evR0ROU%2BlDDC90EHAqEKHhF%2BB04WqdU2jPrafBAowgUeozbt1iQqFWmaZr4dQDz9sSGwG8swLjEze0oEtw90YQ%2Bf6b%2B7crp0dEqfM3BI92IwlE9aRYQKkqLugtHcq8NJjtI2ioB8ID7KwvH80DkEU4WRzA6hyEYto%2BL73TZubLhI2k%2BDHRkX7tEbEqrtJVZrOtVHPiLP9i2t7F%2FyJS05KqdDgwayRvytdWMoCsNGbX81%2FQuxn4JQWrmkWEWIhqT%2Bbe2Hx9p0C7HMMfdYWLO9AKI%2BotVf5o3fGb1%2F4AFToFmGMU%2BOVm9QWQEPwRxl%2FJXygqVN%2FW2PspxielwwIibQnTvZ%2FJq9TNtrciHX%2FPmvppMDU6bf49ARVMqZMDw8C9xOXHBeAe1LtnzVPgerlNa7Fi6vMwCt0aXzyfiMep1mDRWUYovetW6evUz17smbR6oxfK8mXeJOVK%2BEvlqdtfF%2F2AeOiIRzH1iZN7QcpjyaraQsU4kixXdt4TlfzlYzmG7lbEsxIfOc2jkJhIMM2iicMGOqUBwCeQqnROy5s2BLgxY9azDUbu0FtCwLe5otFnLTOqYZm6%2BsksuglEe8y20S2uUwUK0XBwlB4HDuyecZi78FoAcC4S7kr7Onj88j0%2FIY%2B%2Ffpr6Z2CRb1NTXvSxxquFaj%2BwJMe%2FrFuLE6oEELoDJmdF2EPnsWedMYTkUBbeXlvO6F8bG0zKQgP4QpB5FOYKx2HyrmTHeTLq0s9Z7Ndj7GyqrTZC7TBB&X-Amz-Signature=b46402c47cf7bfc8623f6341bcf71aa8f11f5900b7336f32f820f660f4308851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WRSMHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbbewejlgOWbFuzgZiTdjsGToEXlhEDSv3DnBowvrxSgIgMldl37tbfxACCnrXvpA6oBJENU%2FELjI0wz0El5LG0AMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpRafYln3McF%2FhDGCrcAxo0%2B%2FZwTwkCTYxGFeiromvqZtDyBVlxJQ6rh6IAX%2B5FWg15ytLacP24hHzG8Ne5tR5%2F8MAcpYuPeIJRZUZc%2FheeYxbQ66Duh%2BUPAdndDXAf60evR0ROU%2BlDDC90EHAqEKHhF%2BB04WqdU2jPrafBAowgUeozbt1iQqFWmaZr4dQDz9sSGwG8swLjEze0oEtw90YQ%2Bf6b%2B7crp0dEqfM3BI92IwlE9aRYQKkqLugtHcq8NJjtI2ioB8ID7KwvH80DkEU4WRzA6hyEYto%2BL73TZubLhI2k%2BDHRkX7tEbEqrtJVZrOtVHPiLP9i2t7F%2FyJS05KqdDgwayRvytdWMoCsNGbX81%2FQuxn4JQWrmkWEWIhqT%2Bbe2Hx9p0C7HMMfdYWLO9AKI%2BotVf5o3fGb1%2F4AFToFmGMU%2BOVm9QWQEPwRxl%2FJXygqVN%2FW2PspxielwwIibQnTvZ%2FJq9TNtrciHX%2FPmvppMDU6bf49ARVMqZMDw8C9xOXHBeAe1LtnzVPgerlNa7Fi6vMwCt0aXzyfiMep1mDRWUYovetW6evUz17smbR6oxfK8mXeJOVK%2BEvlqdtfF%2F2AeOiIRzH1iZN7QcpjyaraQsU4kixXdt4TlfzlYzmG7lbEsxIfOc2jkJhIMM2iicMGOqUBwCeQqnROy5s2BLgxY9azDUbu0FtCwLe5otFnLTOqYZm6%2BsksuglEe8y20S2uUwUK0XBwlB4HDuyecZi78FoAcC4S7kr7Onj88j0%2FIY%2B%2Ffpr6Z2CRb1NTXvSxxquFaj%2BwJMe%2FrFuLE6oEELoDJmdF2EPnsWedMYTkUBbeXlvO6F8bG0zKQgP4QpB5FOYKx2HyrmTHeTLq0s9Z7Ndj7GyqrTZC7TBB&X-Amz-Signature=5bec5de620fcf45f08a0271774d2be1b55e3301dfb3fac40f299f04412fb06ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WRSMHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbbewejlgOWbFuzgZiTdjsGToEXlhEDSv3DnBowvrxSgIgMldl37tbfxACCnrXvpA6oBJENU%2FELjI0wz0El5LG0AMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpRafYln3McF%2FhDGCrcAxo0%2B%2FZwTwkCTYxGFeiromvqZtDyBVlxJQ6rh6IAX%2B5FWg15ytLacP24hHzG8Ne5tR5%2F8MAcpYuPeIJRZUZc%2FheeYxbQ66Duh%2BUPAdndDXAf60evR0ROU%2BlDDC90EHAqEKHhF%2BB04WqdU2jPrafBAowgUeozbt1iQqFWmaZr4dQDz9sSGwG8swLjEze0oEtw90YQ%2Bf6b%2B7crp0dEqfM3BI92IwlE9aRYQKkqLugtHcq8NJjtI2ioB8ID7KwvH80DkEU4WRzA6hyEYto%2BL73TZubLhI2k%2BDHRkX7tEbEqrtJVZrOtVHPiLP9i2t7F%2FyJS05KqdDgwayRvytdWMoCsNGbX81%2FQuxn4JQWrmkWEWIhqT%2Bbe2Hx9p0C7HMMfdYWLO9AKI%2BotVf5o3fGb1%2F4AFToFmGMU%2BOVm9QWQEPwRxl%2FJXygqVN%2FW2PspxielwwIibQnTvZ%2FJq9TNtrciHX%2FPmvppMDU6bf49ARVMqZMDw8C9xOXHBeAe1LtnzVPgerlNa7Fi6vMwCt0aXzyfiMep1mDRWUYovetW6evUz17smbR6oxfK8mXeJOVK%2BEvlqdtfF%2F2AeOiIRzH1iZN7QcpjyaraQsU4kixXdt4TlfzlYzmG7lbEsxIfOc2jkJhIMM2iicMGOqUBwCeQqnROy5s2BLgxY9azDUbu0FtCwLe5otFnLTOqYZm6%2BsksuglEe8y20S2uUwUK0XBwlB4HDuyecZi78FoAcC4S7kr7Onj88j0%2FIY%2B%2Ffpr6Z2CRb1NTXvSxxquFaj%2BwJMe%2FrFuLE6oEELoDJmdF2EPnsWedMYTkUBbeXlvO6F8bG0zKQgP4QpB5FOYKx2HyrmTHeTLq0s9Z7Ndj7GyqrTZC7TBB&X-Amz-Signature=66b7121773c7d9e791b9de0b35de2418d7ea36cb68d57d8c5cb6b5f7d60e3472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WRSMHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbbewejlgOWbFuzgZiTdjsGToEXlhEDSv3DnBowvrxSgIgMldl37tbfxACCnrXvpA6oBJENU%2FELjI0wz0El5LG0AMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpRafYln3McF%2FhDGCrcAxo0%2B%2FZwTwkCTYxGFeiromvqZtDyBVlxJQ6rh6IAX%2B5FWg15ytLacP24hHzG8Ne5tR5%2F8MAcpYuPeIJRZUZc%2FheeYxbQ66Duh%2BUPAdndDXAf60evR0ROU%2BlDDC90EHAqEKHhF%2BB04WqdU2jPrafBAowgUeozbt1iQqFWmaZr4dQDz9sSGwG8swLjEze0oEtw90YQ%2Bf6b%2B7crp0dEqfM3BI92IwlE9aRYQKkqLugtHcq8NJjtI2ioB8ID7KwvH80DkEU4WRzA6hyEYto%2BL73TZubLhI2k%2BDHRkX7tEbEqrtJVZrOtVHPiLP9i2t7F%2FyJS05KqdDgwayRvytdWMoCsNGbX81%2FQuxn4JQWrmkWEWIhqT%2Bbe2Hx9p0C7HMMfdYWLO9AKI%2BotVf5o3fGb1%2F4AFToFmGMU%2BOVm9QWQEPwRxl%2FJXygqVN%2FW2PspxielwwIibQnTvZ%2FJq9TNtrciHX%2FPmvppMDU6bf49ARVMqZMDw8C9xOXHBeAe1LtnzVPgerlNa7Fi6vMwCt0aXzyfiMep1mDRWUYovetW6evUz17smbR6oxfK8mXeJOVK%2BEvlqdtfF%2F2AeOiIRzH1iZN7QcpjyaraQsU4kixXdt4TlfzlYzmG7lbEsxIfOc2jkJhIMM2iicMGOqUBwCeQqnROy5s2BLgxY9azDUbu0FtCwLe5otFnLTOqYZm6%2BsksuglEe8y20S2uUwUK0XBwlB4HDuyecZi78FoAcC4S7kr7Onj88j0%2FIY%2B%2Ffpr6Z2CRb1NTXvSxxquFaj%2BwJMe%2FrFuLE6oEELoDJmdF2EPnsWedMYTkUBbeXlvO6F8bG0zKQgP4QpB5FOYKx2HyrmTHeTLq0s9Z7Ndj7GyqrTZC7TBB&X-Amz-Signature=93dc4902c68c23ce1091adffdd3994e78047b2e04a857baf2af1feb8938f3d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WRSMHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbbewejlgOWbFuzgZiTdjsGToEXlhEDSv3DnBowvrxSgIgMldl37tbfxACCnrXvpA6oBJENU%2FELjI0wz0El5LG0AMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpRafYln3McF%2FhDGCrcAxo0%2B%2FZwTwkCTYxGFeiromvqZtDyBVlxJQ6rh6IAX%2B5FWg15ytLacP24hHzG8Ne5tR5%2F8MAcpYuPeIJRZUZc%2FheeYxbQ66Duh%2BUPAdndDXAf60evR0ROU%2BlDDC90EHAqEKHhF%2BB04WqdU2jPrafBAowgUeozbt1iQqFWmaZr4dQDz9sSGwG8swLjEze0oEtw90YQ%2Bf6b%2B7crp0dEqfM3BI92IwlE9aRYQKkqLugtHcq8NJjtI2ioB8ID7KwvH80DkEU4WRzA6hyEYto%2BL73TZubLhI2k%2BDHRkX7tEbEqrtJVZrOtVHPiLP9i2t7F%2FyJS05KqdDgwayRvytdWMoCsNGbX81%2FQuxn4JQWrmkWEWIhqT%2Bbe2Hx9p0C7HMMfdYWLO9AKI%2BotVf5o3fGb1%2F4AFToFmGMU%2BOVm9QWQEPwRxl%2FJXygqVN%2FW2PspxielwwIibQnTvZ%2FJq9TNtrciHX%2FPmvppMDU6bf49ARVMqZMDw8C9xOXHBeAe1LtnzVPgerlNa7Fi6vMwCt0aXzyfiMep1mDRWUYovetW6evUz17smbR6oxfK8mXeJOVK%2BEvlqdtfF%2F2AeOiIRzH1iZN7QcpjyaraQsU4kixXdt4TlfzlYzmG7lbEsxIfOc2jkJhIMM2iicMGOqUBwCeQqnROy5s2BLgxY9azDUbu0FtCwLe5otFnLTOqYZm6%2BsksuglEe8y20S2uUwUK0XBwlB4HDuyecZi78FoAcC4S7kr7Onj88j0%2FIY%2B%2Ffpr6Z2CRb1NTXvSxxquFaj%2BwJMe%2FrFuLE6oEELoDJmdF2EPnsWedMYTkUBbeXlvO6F8bG0zKQgP4QpB5FOYKx2HyrmTHeTLq0s9Z7Ndj7GyqrTZC7TBB&X-Amz-Signature=1a3422e951b24d3d1a681afcaf3896c8e9c4dff913424afda62eeaeccdaba32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WRSMHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbbewejlgOWbFuzgZiTdjsGToEXlhEDSv3DnBowvrxSgIgMldl37tbfxACCnrXvpA6oBJENU%2FELjI0wz0El5LG0AMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpRafYln3McF%2FhDGCrcAxo0%2B%2FZwTwkCTYxGFeiromvqZtDyBVlxJQ6rh6IAX%2B5FWg15ytLacP24hHzG8Ne5tR5%2F8MAcpYuPeIJRZUZc%2FheeYxbQ66Duh%2BUPAdndDXAf60evR0ROU%2BlDDC90EHAqEKHhF%2BB04WqdU2jPrafBAowgUeozbt1iQqFWmaZr4dQDz9sSGwG8swLjEze0oEtw90YQ%2Bf6b%2B7crp0dEqfM3BI92IwlE9aRYQKkqLugtHcq8NJjtI2ioB8ID7KwvH80DkEU4WRzA6hyEYto%2BL73TZubLhI2k%2BDHRkX7tEbEqrtJVZrOtVHPiLP9i2t7F%2FyJS05KqdDgwayRvytdWMoCsNGbX81%2FQuxn4JQWrmkWEWIhqT%2Bbe2Hx9p0C7HMMfdYWLO9AKI%2BotVf5o3fGb1%2F4AFToFmGMU%2BOVm9QWQEPwRxl%2FJXygqVN%2FW2PspxielwwIibQnTvZ%2FJq9TNtrciHX%2FPmvppMDU6bf49ARVMqZMDw8C9xOXHBeAe1LtnzVPgerlNa7Fi6vMwCt0aXzyfiMep1mDRWUYovetW6evUz17smbR6oxfK8mXeJOVK%2BEvlqdtfF%2F2AeOiIRzH1iZN7QcpjyaraQsU4kixXdt4TlfzlYzmG7lbEsxIfOc2jkJhIMM2iicMGOqUBwCeQqnROy5s2BLgxY9azDUbu0FtCwLe5otFnLTOqYZm6%2BsksuglEe8y20S2uUwUK0XBwlB4HDuyecZi78FoAcC4S7kr7Onj88j0%2FIY%2B%2Ffpr6Z2CRb1NTXvSxxquFaj%2BwJMe%2FrFuLE6oEELoDJmdF2EPnsWedMYTkUBbeXlvO6F8bG0zKQgP4QpB5FOYKx2HyrmTHeTLq0s9Z7Ndj7GyqrTZC7TBB&X-Amz-Signature=c4cf2a1db85b0fdabebf5cb8ab9379f05570b699005df519a71d4b58d2aa9c19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WRSMHU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbbewejlgOWbFuzgZiTdjsGToEXlhEDSv3DnBowvrxSgIgMldl37tbfxACCnrXvpA6oBJENU%2FELjI0wz0El5LG0AMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKpRafYln3McF%2FhDGCrcAxo0%2B%2FZwTwkCTYxGFeiromvqZtDyBVlxJQ6rh6IAX%2B5FWg15ytLacP24hHzG8Ne5tR5%2F8MAcpYuPeIJRZUZc%2FheeYxbQ66Duh%2BUPAdndDXAf60evR0ROU%2BlDDC90EHAqEKHhF%2BB04WqdU2jPrafBAowgUeozbt1iQqFWmaZr4dQDz9sSGwG8swLjEze0oEtw90YQ%2Bf6b%2B7crp0dEqfM3BI92IwlE9aRYQKkqLugtHcq8NJjtI2ioB8ID7KwvH80DkEU4WRzA6hyEYto%2BL73TZubLhI2k%2BDHRkX7tEbEqrtJVZrOtVHPiLP9i2t7F%2FyJS05KqdDgwayRvytdWMoCsNGbX81%2FQuxn4JQWrmkWEWIhqT%2Bbe2Hx9p0C7HMMfdYWLO9AKI%2BotVf5o3fGb1%2F4AFToFmGMU%2BOVm9QWQEPwRxl%2FJXygqVN%2FW2PspxielwwIibQnTvZ%2FJq9TNtrciHX%2FPmvppMDU6bf49ARVMqZMDw8C9xOXHBeAe1LtnzVPgerlNa7Fi6vMwCt0aXzyfiMep1mDRWUYovetW6evUz17smbR6oxfK8mXeJOVK%2BEvlqdtfF%2F2AeOiIRzH1iZN7QcpjyaraQsU4kixXdt4TlfzlYzmG7lbEsxIfOc2jkJhIMM2iicMGOqUBwCeQqnROy5s2BLgxY9azDUbu0FtCwLe5otFnLTOqYZm6%2BsksuglEe8y20S2uUwUK0XBwlB4HDuyecZi78FoAcC4S7kr7Onj88j0%2FIY%2B%2Ffpr6Z2CRb1NTXvSxxquFaj%2BwJMe%2FrFuLE6oEELoDJmdF2EPnsWedMYTkUBbeXlvO6F8bG0zKQgP4QpB5FOYKx2HyrmTHeTLq0s9Z7Ndj7GyqrTZC7TBB&X-Amz-Signature=aa4dfad1bb270e0d630364c59129a45fbb040bdeb5300306c7c5379377223c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
