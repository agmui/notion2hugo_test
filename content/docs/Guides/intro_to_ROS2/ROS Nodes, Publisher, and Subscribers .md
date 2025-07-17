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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVRRGLI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCQDh7ykWnCYvirqbPfk8lpdVkGRnD90D0jTxjadrQYIAIgdZfW9YzyOYzuPmx650Qr1FZU9ydQVYkG51V6wwXxmyQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEq1tWpBh8BAQz9GSSrcA8XxiE%2FiqF72keiNtipIt4bM692EuHW80Sbi%2F9Gr9ALZoU4%2F94h%2FXrdkE%2Bm3WPMmuP9bF5K4bXtzf5ThVk54%2Fil6%2FYeIZnZyNziV3FHI9x8hlktJLQzBFIwRRztfn%2BtAlfR6SMn3jEAObEWFJHS7G27EYa5CtLycmDTTUhgmIHcY1Cr%2B%2FAtYmIvzXy9WiLELCAqyJhmTbo3oWIG5Xckc9l0YzQLAnGjxooMTyHApgWb4u5N%2B%2BeHIxjxZAjozjfuCZyOh6oDiBzy8T1mfkMvVzZ78JmB4mvdheocPVD7bfYWV7IWCQu6T0VxVDV5ArlH%2Bo5NCYt2BdlOtxlOVE2qEVnpvcNTBiRd2aHdzvz7FAL7YkW6oL0cif2jp1Uy5HenPEQHZJgTleILMqw8e9a2Dw7hSVDI%2FaqMx7QjMFafb5%2FvDjIG9m2bEobagKH5c0j2mLLbJegO1tKSyw6PTt%2Bs21GnMRydlEx2rWhVy%2Fd2%2Fmyyb4QXs1K%2F2%2BxELLWX7qk0ze4u6Q9mEegFwTxozwNQ%2B3ujlnSawZNqflgr3eqKji0BsSU5nF82egSTaMumtrNxJNSvHOLhYqlB3JBITz7wCGibkQqwL0GYdTMmkdk2A7tErnPr8IGFBZkRjoDxuMJe45cMGOqUBSGtBkWDca9TVLH%2BLUpXU4oTv4gJY411s2BvAeO6EXo0DjAgXF82vdpToz7weN7LhtivjiIoyut1jN74cVd2UtgPuDuhAoc3R6avOYnw6yq20e0lR8lO8amMAg3Lp79AbSCIUV%2BQMCPdqwh2yiCl9e0kw8tWgbRCLcMhaEHV%2FgF2GQu9FFDi1VJYospqGooTnPp4Rde9q%2Fg8lDMpYFtDh1W2i37wr&X-Amz-Signature=fc4680d64a95a2c578b963aac1dd7df886072d060ca90a7be82a04022829a50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVRRGLI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCQDh7ykWnCYvirqbPfk8lpdVkGRnD90D0jTxjadrQYIAIgdZfW9YzyOYzuPmx650Qr1FZU9ydQVYkG51V6wwXxmyQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEq1tWpBh8BAQz9GSSrcA8XxiE%2FiqF72keiNtipIt4bM692EuHW80Sbi%2F9Gr9ALZoU4%2F94h%2FXrdkE%2Bm3WPMmuP9bF5K4bXtzf5ThVk54%2Fil6%2FYeIZnZyNziV3FHI9x8hlktJLQzBFIwRRztfn%2BtAlfR6SMn3jEAObEWFJHS7G27EYa5CtLycmDTTUhgmIHcY1Cr%2B%2FAtYmIvzXy9WiLELCAqyJhmTbo3oWIG5Xckc9l0YzQLAnGjxooMTyHApgWb4u5N%2B%2BeHIxjxZAjozjfuCZyOh6oDiBzy8T1mfkMvVzZ78JmB4mvdheocPVD7bfYWV7IWCQu6T0VxVDV5ArlH%2Bo5NCYt2BdlOtxlOVE2qEVnpvcNTBiRd2aHdzvz7FAL7YkW6oL0cif2jp1Uy5HenPEQHZJgTleILMqw8e9a2Dw7hSVDI%2FaqMx7QjMFafb5%2FvDjIG9m2bEobagKH5c0j2mLLbJegO1tKSyw6PTt%2Bs21GnMRydlEx2rWhVy%2Fd2%2Fmyyb4QXs1K%2F2%2BxELLWX7qk0ze4u6Q9mEegFwTxozwNQ%2B3ujlnSawZNqflgr3eqKji0BsSU5nF82egSTaMumtrNxJNSvHOLhYqlB3JBITz7wCGibkQqwL0GYdTMmkdk2A7tErnPr8IGFBZkRjoDxuMJe45cMGOqUBSGtBkWDca9TVLH%2BLUpXU4oTv4gJY411s2BvAeO6EXo0DjAgXF82vdpToz7weN7LhtivjiIoyut1jN74cVd2UtgPuDuhAoc3R6avOYnw6yq20e0lR8lO8amMAg3Lp79AbSCIUV%2BQMCPdqwh2yiCl9e0kw8tWgbRCLcMhaEHV%2FgF2GQu9FFDi1VJYospqGooTnPp4Rde9q%2Fg8lDMpYFtDh1W2i37wr&X-Amz-Signature=0b80b2ca64394a20b01a10bbf107fda03903245588fb25c2fb5dd643a5b1e956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVRRGLI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCQDh7ykWnCYvirqbPfk8lpdVkGRnD90D0jTxjadrQYIAIgdZfW9YzyOYzuPmx650Qr1FZU9ydQVYkG51V6wwXxmyQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEq1tWpBh8BAQz9GSSrcA8XxiE%2FiqF72keiNtipIt4bM692EuHW80Sbi%2F9Gr9ALZoU4%2F94h%2FXrdkE%2Bm3WPMmuP9bF5K4bXtzf5ThVk54%2Fil6%2FYeIZnZyNziV3FHI9x8hlktJLQzBFIwRRztfn%2BtAlfR6SMn3jEAObEWFJHS7G27EYa5CtLycmDTTUhgmIHcY1Cr%2B%2FAtYmIvzXy9WiLELCAqyJhmTbo3oWIG5Xckc9l0YzQLAnGjxooMTyHApgWb4u5N%2B%2BeHIxjxZAjozjfuCZyOh6oDiBzy8T1mfkMvVzZ78JmB4mvdheocPVD7bfYWV7IWCQu6T0VxVDV5ArlH%2Bo5NCYt2BdlOtxlOVE2qEVnpvcNTBiRd2aHdzvz7FAL7YkW6oL0cif2jp1Uy5HenPEQHZJgTleILMqw8e9a2Dw7hSVDI%2FaqMx7QjMFafb5%2FvDjIG9m2bEobagKH5c0j2mLLbJegO1tKSyw6PTt%2Bs21GnMRydlEx2rWhVy%2Fd2%2Fmyyb4QXs1K%2F2%2BxELLWX7qk0ze4u6Q9mEegFwTxozwNQ%2B3ujlnSawZNqflgr3eqKji0BsSU5nF82egSTaMumtrNxJNSvHOLhYqlB3JBITz7wCGibkQqwL0GYdTMmkdk2A7tErnPr8IGFBZkRjoDxuMJe45cMGOqUBSGtBkWDca9TVLH%2BLUpXU4oTv4gJY411s2BvAeO6EXo0DjAgXF82vdpToz7weN7LhtivjiIoyut1jN74cVd2UtgPuDuhAoc3R6avOYnw6yq20e0lR8lO8amMAg3Lp79AbSCIUV%2BQMCPdqwh2yiCl9e0kw8tWgbRCLcMhaEHV%2FgF2GQu9FFDi1VJYospqGooTnPp4Rde9q%2Fg8lDMpYFtDh1W2i37wr&X-Amz-Signature=683f086c8c9e7bad13126b6fa0263096d5a345e9b4ec8026ffefe4736c0a3946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVRRGLI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCQDh7ykWnCYvirqbPfk8lpdVkGRnD90D0jTxjadrQYIAIgdZfW9YzyOYzuPmx650Qr1FZU9ydQVYkG51V6wwXxmyQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEq1tWpBh8BAQz9GSSrcA8XxiE%2FiqF72keiNtipIt4bM692EuHW80Sbi%2F9Gr9ALZoU4%2F94h%2FXrdkE%2Bm3WPMmuP9bF5K4bXtzf5ThVk54%2Fil6%2FYeIZnZyNziV3FHI9x8hlktJLQzBFIwRRztfn%2BtAlfR6SMn3jEAObEWFJHS7G27EYa5CtLycmDTTUhgmIHcY1Cr%2B%2FAtYmIvzXy9WiLELCAqyJhmTbo3oWIG5Xckc9l0YzQLAnGjxooMTyHApgWb4u5N%2B%2BeHIxjxZAjozjfuCZyOh6oDiBzy8T1mfkMvVzZ78JmB4mvdheocPVD7bfYWV7IWCQu6T0VxVDV5ArlH%2Bo5NCYt2BdlOtxlOVE2qEVnpvcNTBiRd2aHdzvz7FAL7YkW6oL0cif2jp1Uy5HenPEQHZJgTleILMqw8e9a2Dw7hSVDI%2FaqMx7QjMFafb5%2FvDjIG9m2bEobagKH5c0j2mLLbJegO1tKSyw6PTt%2Bs21GnMRydlEx2rWhVy%2Fd2%2Fmyyb4QXs1K%2F2%2BxELLWX7qk0ze4u6Q9mEegFwTxozwNQ%2B3ujlnSawZNqflgr3eqKji0BsSU5nF82egSTaMumtrNxJNSvHOLhYqlB3JBITz7wCGibkQqwL0GYdTMmkdk2A7tErnPr8IGFBZkRjoDxuMJe45cMGOqUBSGtBkWDca9TVLH%2BLUpXU4oTv4gJY411s2BvAeO6EXo0DjAgXF82vdpToz7weN7LhtivjiIoyut1jN74cVd2UtgPuDuhAoc3R6avOYnw6yq20e0lR8lO8amMAg3Lp79AbSCIUV%2BQMCPdqwh2yiCl9e0kw8tWgbRCLcMhaEHV%2FgF2GQu9FFDi1VJYospqGooTnPp4Rde9q%2Fg8lDMpYFtDh1W2i37wr&X-Amz-Signature=4cc88d61062ed1c9dca330ce927c347e26ca2f31e90d1e7537137828b45feb83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVRRGLI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCQDh7ykWnCYvirqbPfk8lpdVkGRnD90D0jTxjadrQYIAIgdZfW9YzyOYzuPmx650Qr1FZU9ydQVYkG51V6wwXxmyQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEq1tWpBh8BAQz9GSSrcA8XxiE%2FiqF72keiNtipIt4bM692EuHW80Sbi%2F9Gr9ALZoU4%2F94h%2FXrdkE%2Bm3WPMmuP9bF5K4bXtzf5ThVk54%2Fil6%2FYeIZnZyNziV3FHI9x8hlktJLQzBFIwRRztfn%2BtAlfR6SMn3jEAObEWFJHS7G27EYa5CtLycmDTTUhgmIHcY1Cr%2B%2FAtYmIvzXy9WiLELCAqyJhmTbo3oWIG5Xckc9l0YzQLAnGjxooMTyHApgWb4u5N%2B%2BeHIxjxZAjozjfuCZyOh6oDiBzy8T1mfkMvVzZ78JmB4mvdheocPVD7bfYWV7IWCQu6T0VxVDV5ArlH%2Bo5NCYt2BdlOtxlOVE2qEVnpvcNTBiRd2aHdzvz7FAL7YkW6oL0cif2jp1Uy5HenPEQHZJgTleILMqw8e9a2Dw7hSVDI%2FaqMx7QjMFafb5%2FvDjIG9m2bEobagKH5c0j2mLLbJegO1tKSyw6PTt%2Bs21GnMRydlEx2rWhVy%2Fd2%2Fmyyb4QXs1K%2F2%2BxELLWX7qk0ze4u6Q9mEegFwTxozwNQ%2B3ujlnSawZNqflgr3eqKji0BsSU5nF82egSTaMumtrNxJNSvHOLhYqlB3JBITz7wCGibkQqwL0GYdTMmkdk2A7tErnPr8IGFBZkRjoDxuMJe45cMGOqUBSGtBkWDca9TVLH%2BLUpXU4oTv4gJY411s2BvAeO6EXo0DjAgXF82vdpToz7weN7LhtivjiIoyut1jN74cVd2UtgPuDuhAoc3R6avOYnw6yq20e0lR8lO8amMAg3Lp79AbSCIUV%2BQMCPdqwh2yiCl9e0kw8tWgbRCLcMhaEHV%2FgF2GQu9FFDi1VJYospqGooTnPp4Rde9q%2Fg8lDMpYFtDh1W2i37wr&X-Amz-Signature=57cefc8e1c8155a9b28f86c804a24d94ed9d517a59b35ca6d2599ad4e4459d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVRRGLI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCQDh7ykWnCYvirqbPfk8lpdVkGRnD90D0jTxjadrQYIAIgdZfW9YzyOYzuPmx650Qr1FZU9ydQVYkG51V6wwXxmyQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEq1tWpBh8BAQz9GSSrcA8XxiE%2FiqF72keiNtipIt4bM692EuHW80Sbi%2F9Gr9ALZoU4%2F94h%2FXrdkE%2Bm3WPMmuP9bF5K4bXtzf5ThVk54%2Fil6%2FYeIZnZyNziV3FHI9x8hlktJLQzBFIwRRztfn%2BtAlfR6SMn3jEAObEWFJHS7G27EYa5CtLycmDTTUhgmIHcY1Cr%2B%2FAtYmIvzXy9WiLELCAqyJhmTbo3oWIG5Xckc9l0YzQLAnGjxooMTyHApgWb4u5N%2B%2BeHIxjxZAjozjfuCZyOh6oDiBzy8T1mfkMvVzZ78JmB4mvdheocPVD7bfYWV7IWCQu6T0VxVDV5ArlH%2Bo5NCYt2BdlOtxlOVE2qEVnpvcNTBiRd2aHdzvz7FAL7YkW6oL0cif2jp1Uy5HenPEQHZJgTleILMqw8e9a2Dw7hSVDI%2FaqMx7QjMFafb5%2FvDjIG9m2bEobagKH5c0j2mLLbJegO1tKSyw6PTt%2Bs21GnMRydlEx2rWhVy%2Fd2%2Fmyyb4QXs1K%2F2%2BxELLWX7qk0ze4u6Q9mEegFwTxozwNQ%2B3ujlnSawZNqflgr3eqKji0BsSU5nF82egSTaMumtrNxJNSvHOLhYqlB3JBITz7wCGibkQqwL0GYdTMmkdk2A7tErnPr8IGFBZkRjoDxuMJe45cMGOqUBSGtBkWDca9TVLH%2BLUpXU4oTv4gJY411s2BvAeO6EXo0DjAgXF82vdpToz7weN7LhtivjiIoyut1jN74cVd2UtgPuDuhAoc3R6avOYnw6yq20e0lR8lO8amMAg3Lp79AbSCIUV%2BQMCPdqwh2yiCl9e0kw8tWgbRCLcMhaEHV%2FgF2GQu9FFDi1VJYospqGooTnPp4Rde9q%2Fg8lDMpYFtDh1W2i37wr&X-Amz-Signature=7dbafecea55ca2bf3fcc972f6db7ae2e2e38bea69c3a26445c4ab336447490ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVRRGLI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCQDh7ykWnCYvirqbPfk8lpdVkGRnD90D0jTxjadrQYIAIgdZfW9YzyOYzuPmx650Qr1FZU9ydQVYkG51V6wwXxmyQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEq1tWpBh8BAQz9GSSrcA8XxiE%2FiqF72keiNtipIt4bM692EuHW80Sbi%2F9Gr9ALZoU4%2F94h%2FXrdkE%2Bm3WPMmuP9bF5K4bXtzf5ThVk54%2Fil6%2FYeIZnZyNziV3FHI9x8hlktJLQzBFIwRRztfn%2BtAlfR6SMn3jEAObEWFJHS7G27EYa5CtLycmDTTUhgmIHcY1Cr%2B%2FAtYmIvzXy9WiLELCAqyJhmTbo3oWIG5Xckc9l0YzQLAnGjxooMTyHApgWb4u5N%2B%2BeHIxjxZAjozjfuCZyOh6oDiBzy8T1mfkMvVzZ78JmB4mvdheocPVD7bfYWV7IWCQu6T0VxVDV5ArlH%2Bo5NCYt2BdlOtxlOVE2qEVnpvcNTBiRd2aHdzvz7FAL7YkW6oL0cif2jp1Uy5HenPEQHZJgTleILMqw8e9a2Dw7hSVDI%2FaqMx7QjMFafb5%2FvDjIG9m2bEobagKH5c0j2mLLbJegO1tKSyw6PTt%2Bs21GnMRydlEx2rWhVy%2Fd2%2Fmyyb4QXs1K%2F2%2BxELLWX7qk0ze4u6Q9mEegFwTxozwNQ%2B3ujlnSawZNqflgr3eqKji0BsSU5nF82egSTaMumtrNxJNSvHOLhYqlB3JBITz7wCGibkQqwL0GYdTMmkdk2A7tErnPr8IGFBZkRjoDxuMJe45cMGOqUBSGtBkWDca9TVLH%2BLUpXU4oTv4gJY411s2BvAeO6EXo0DjAgXF82vdpToz7weN7LhtivjiIoyut1jN74cVd2UtgPuDuhAoc3R6avOYnw6yq20e0lR8lO8amMAg3Lp79AbSCIUV%2BQMCPdqwh2yiCl9e0kw8tWgbRCLcMhaEHV%2FgF2GQu9FFDi1VJYospqGooTnPp4Rde9q%2Fg8lDMpYFtDh1W2i37wr&X-Amz-Signature=ea16b109e65f017f1f49e333cefdfff534f92c7734baf101891689a9cfffe61c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVRRGLI%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCQDh7ykWnCYvirqbPfk8lpdVkGRnD90D0jTxjadrQYIAIgdZfW9YzyOYzuPmx650Qr1FZU9ydQVYkG51V6wwXxmyQq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEq1tWpBh8BAQz9GSSrcA8XxiE%2FiqF72keiNtipIt4bM692EuHW80Sbi%2F9Gr9ALZoU4%2F94h%2FXrdkE%2Bm3WPMmuP9bF5K4bXtzf5ThVk54%2Fil6%2FYeIZnZyNziV3FHI9x8hlktJLQzBFIwRRztfn%2BtAlfR6SMn3jEAObEWFJHS7G27EYa5CtLycmDTTUhgmIHcY1Cr%2B%2FAtYmIvzXy9WiLELCAqyJhmTbo3oWIG5Xckc9l0YzQLAnGjxooMTyHApgWb4u5N%2B%2BeHIxjxZAjozjfuCZyOh6oDiBzy8T1mfkMvVzZ78JmB4mvdheocPVD7bfYWV7IWCQu6T0VxVDV5ArlH%2Bo5NCYt2BdlOtxlOVE2qEVnpvcNTBiRd2aHdzvz7FAL7YkW6oL0cif2jp1Uy5HenPEQHZJgTleILMqw8e9a2Dw7hSVDI%2FaqMx7QjMFafb5%2FvDjIG9m2bEobagKH5c0j2mLLbJegO1tKSyw6PTt%2Bs21GnMRydlEx2rWhVy%2Fd2%2Fmyyb4QXs1K%2F2%2BxELLWX7qk0ze4u6Q9mEegFwTxozwNQ%2B3ujlnSawZNqflgr3eqKji0BsSU5nF82egSTaMumtrNxJNSvHOLhYqlB3JBITz7wCGibkQqwL0GYdTMmkdk2A7tErnPr8IGFBZkRjoDxuMJe45cMGOqUBSGtBkWDca9TVLH%2BLUpXU4oTv4gJY411s2BvAeO6EXo0DjAgXF82vdpToz7weN7LhtivjiIoyut1jN74cVd2UtgPuDuhAoc3R6avOYnw6yq20e0lR8lO8amMAg3Lp79AbSCIUV%2BQMCPdqwh2yiCl9e0kw8tWgbRCLcMhaEHV%2FgF2GQu9FFDi1VJYospqGooTnPp4Rde9q%2Fg8lDMpYFtDh1W2i37wr&X-Amz-Signature=c3fe73191a184bd9982fa92849c214d06a26d3175464e53ad6b9ca348e42c725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
