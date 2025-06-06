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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LB5RM7D%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCId0NC8Mls1g9BtY0TddxuLjYZObdpxWHNEO28QJufGgIhAL%2FlUlIT0pWPUy1wrNaPwx6Ax19zCtBEWxm%2F2LmMMP0rKv8DCGUQABoMNjM3NDIzMTgzODA1Igxnn%2FjJZVW7WYwsNR4q3AOA%2FEnfg5McY3ZETLf36GG0FsGOsTJyw0%2Bwh6rHBo94ecQ6qqMYBGbXsOHhiDMxIPWzsJdHxQuO6%2B80IMxayIqAgCupoNtPUu3qmENGLqn1nafblREiLyv27WpaMa72Cg%2FZX83e%2B8DNkK8vurtj1%2BZ6aaJDACZuo9hx0uI3lFtw8hbgMmtKyQSYzT4gb%2BYAjClhalVk6zqHWl5FV5k5loRkg7KfGbZdNES1C0%2BIYfpZArQaGGkzCJO3K%2BnRFSzYqjF10pFVG1Q88NCNYJW%2BCJfcNnVkAXHoxGl%2Bfld6rs3vgXk6ugrINYDlHewtgb0aCrlJR0hFnOCdVmm2oIGdJyK6sRnlKBIifdeZQ6tmpVZwX65Xf7MjlDJZzJA79jy%2BVPrPDH4SNj6fuP1E%2B3u%2BrK%2Bu7TDadRKcYpT3S0hnwyvYigDJ7IW7F15uDMcRGZhQqDotgac1aOKu0rKrsncbe%2FpmwRB3iUUevQly9VX6zY2955%2BZnp0Fho%2FH6e4dm5HuEG2QXudx2gFGi08Umfw1L0TpQ2gmuf%2BApqU8Rw%2F45pCguok2YdU69oOtdsf9luEDj4Dgm1w7x9cktqyj5q44fGuJ0RnpWGTa9oV%2BLTqrDo%2B37jujjxmxHSAlhOFvAzC%2BkY3CBjqkAZ8wzisw9DAdc1ibkKMpJi%2Bdx%2Bjole%2B89FQisHqwi5x3QYv2qnOUHlReuBffaJr7zsCmbtM%2BkUS7ZxfO8eXVb%2BSYARTRA1dDPJckKrQhWEZKDRlBuciztMB9T5xugj%2BHIyoU9ChWWJxdZdJ72EasUrI%2FryFrJf2eK%2FmPSTZvBIKOYfdNeWWLKIR%2BgkPq5o7JoyszSpii9NraF6Q2DCdcNPKR7Hvq&X-Amz-Signature=16386cc0d9ccca907cfe6d8f30a3ce8633edc76852c1d9c3ba000a234f211c22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LB5RM7D%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCId0NC8Mls1g9BtY0TddxuLjYZObdpxWHNEO28QJufGgIhAL%2FlUlIT0pWPUy1wrNaPwx6Ax19zCtBEWxm%2F2LmMMP0rKv8DCGUQABoMNjM3NDIzMTgzODA1Igxnn%2FjJZVW7WYwsNR4q3AOA%2FEnfg5McY3ZETLf36GG0FsGOsTJyw0%2Bwh6rHBo94ecQ6qqMYBGbXsOHhiDMxIPWzsJdHxQuO6%2B80IMxayIqAgCupoNtPUu3qmENGLqn1nafblREiLyv27WpaMa72Cg%2FZX83e%2B8DNkK8vurtj1%2BZ6aaJDACZuo9hx0uI3lFtw8hbgMmtKyQSYzT4gb%2BYAjClhalVk6zqHWl5FV5k5loRkg7KfGbZdNES1C0%2BIYfpZArQaGGkzCJO3K%2BnRFSzYqjF10pFVG1Q88NCNYJW%2BCJfcNnVkAXHoxGl%2Bfld6rs3vgXk6ugrINYDlHewtgb0aCrlJR0hFnOCdVmm2oIGdJyK6sRnlKBIifdeZQ6tmpVZwX65Xf7MjlDJZzJA79jy%2BVPrPDH4SNj6fuP1E%2B3u%2BrK%2Bu7TDadRKcYpT3S0hnwyvYigDJ7IW7F15uDMcRGZhQqDotgac1aOKu0rKrsncbe%2FpmwRB3iUUevQly9VX6zY2955%2BZnp0Fho%2FH6e4dm5HuEG2QXudx2gFGi08Umfw1L0TpQ2gmuf%2BApqU8Rw%2F45pCguok2YdU69oOtdsf9luEDj4Dgm1w7x9cktqyj5q44fGuJ0RnpWGTa9oV%2BLTqrDo%2B37jujjxmxHSAlhOFvAzC%2BkY3CBjqkAZ8wzisw9DAdc1ibkKMpJi%2Bdx%2Bjole%2B89FQisHqwi5x3QYv2qnOUHlReuBffaJr7zsCmbtM%2BkUS7ZxfO8eXVb%2BSYARTRA1dDPJckKrQhWEZKDRlBuciztMB9T5xugj%2BHIyoU9ChWWJxdZdJ72EasUrI%2FryFrJf2eK%2FmPSTZvBIKOYfdNeWWLKIR%2BgkPq5o7JoyszSpii9NraF6Q2DCdcNPKR7Hvq&X-Amz-Signature=5dbce41468264188258378bf67fd1b5a14752660f43903f8fb6df1c13bbfc7f2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LB5RM7D%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCId0NC8Mls1g9BtY0TddxuLjYZObdpxWHNEO28QJufGgIhAL%2FlUlIT0pWPUy1wrNaPwx6Ax19zCtBEWxm%2F2LmMMP0rKv8DCGUQABoMNjM3NDIzMTgzODA1Igxnn%2FjJZVW7WYwsNR4q3AOA%2FEnfg5McY3ZETLf36GG0FsGOsTJyw0%2Bwh6rHBo94ecQ6qqMYBGbXsOHhiDMxIPWzsJdHxQuO6%2B80IMxayIqAgCupoNtPUu3qmENGLqn1nafblREiLyv27WpaMa72Cg%2FZX83e%2B8DNkK8vurtj1%2BZ6aaJDACZuo9hx0uI3lFtw8hbgMmtKyQSYzT4gb%2BYAjClhalVk6zqHWl5FV5k5loRkg7KfGbZdNES1C0%2BIYfpZArQaGGkzCJO3K%2BnRFSzYqjF10pFVG1Q88NCNYJW%2BCJfcNnVkAXHoxGl%2Bfld6rs3vgXk6ugrINYDlHewtgb0aCrlJR0hFnOCdVmm2oIGdJyK6sRnlKBIifdeZQ6tmpVZwX65Xf7MjlDJZzJA79jy%2BVPrPDH4SNj6fuP1E%2B3u%2BrK%2Bu7TDadRKcYpT3S0hnwyvYigDJ7IW7F15uDMcRGZhQqDotgac1aOKu0rKrsncbe%2FpmwRB3iUUevQly9VX6zY2955%2BZnp0Fho%2FH6e4dm5HuEG2QXudx2gFGi08Umfw1L0TpQ2gmuf%2BApqU8Rw%2F45pCguok2YdU69oOtdsf9luEDj4Dgm1w7x9cktqyj5q44fGuJ0RnpWGTa9oV%2BLTqrDo%2B37jujjxmxHSAlhOFvAzC%2BkY3CBjqkAZ8wzisw9DAdc1ibkKMpJi%2Bdx%2Bjole%2B89FQisHqwi5x3QYv2qnOUHlReuBffaJr7zsCmbtM%2BkUS7ZxfO8eXVb%2BSYARTRA1dDPJckKrQhWEZKDRlBuciztMB9T5xugj%2BHIyoU9ChWWJxdZdJ72EasUrI%2FryFrJf2eK%2FmPSTZvBIKOYfdNeWWLKIR%2BgkPq5o7JoyszSpii9NraF6Q2DCdcNPKR7Hvq&X-Amz-Signature=ec8d44b28f94aef9d796153b22269cdefdee1a934b9d6e37f19e89f0dc1f6f00&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LB5RM7D%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCId0NC8Mls1g9BtY0TddxuLjYZObdpxWHNEO28QJufGgIhAL%2FlUlIT0pWPUy1wrNaPwx6Ax19zCtBEWxm%2F2LmMMP0rKv8DCGUQABoMNjM3NDIzMTgzODA1Igxnn%2FjJZVW7WYwsNR4q3AOA%2FEnfg5McY3ZETLf36GG0FsGOsTJyw0%2Bwh6rHBo94ecQ6qqMYBGbXsOHhiDMxIPWzsJdHxQuO6%2B80IMxayIqAgCupoNtPUu3qmENGLqn1nafblREiLyv27WpaMa72Cg%2FZX83e%2B8DNkK8vurtj1%2BZ6aaJDACZuo9hx0uI3lFtw8hbgMmtKyQSYzT4gb%2BYAjClhalVk6zqHWl5FV5k5loRkg7KfGbZdNES1C0%2BIYfpZArQaGGkzCJO3K%2BnRFSzYqjF10pFVG1Q88NCNYJW%2BCJfcNnVkAXHoxGl%2Bfld6rs3vgXk6ugrINYDlHewtgb0aCrlJR0hFnOCdVmm2oIGdJyK6sRnlKBIifdeZQ6tmpVZwX65Xf7MjlDJZzJA79jy%2BVPrPDH4SNj6fuP1E%2B3u%2BrK%2Bu7TDadRKcYpT3S0hnwyvYigDJ7IW7F15uDMcRGZhQqDotgac1aOKu0rKrsncbe%2FpmwRB3iUUevQly9VX6zY2955%2BZnp0Fho%2FH6e4dm5HuEG2QXudx2gFGi08Umfw1L0TpQ2gmuf%2BApqU8Rw%2F45pCguok2YdU69oOtdsf9luEDj4Dgm1w7x9cktqyj5q44fGuJ0RnpWGTa9oV%2BLTqrDo%2B37jujjxmxHSAlhOFvAzC%2BkY3CBjqkAZ8wzisw9DAdc1ibkKMpJi%2Bdx%2Bjole%2B89FQisHqwi5x3QYv2qnOUHlReuBffaJr7zsCmbtM%2BkUS7ZxfO8eXVb%2BSYARTRA1dDPJckKrQhWEZKDRlBuciztMB9T5xugj%2BHIyoU9ChWWJxdZdJ72EasUrI%2FryFrJf2eK%2FmPSTZvBIKOYfdNeWWLKIR%2BgkPq5o7JoyszSpii9NraF6Q2DCdcNPKR7Hvq&X-Amz-Signature=02080e2d7a6f79877ab76e22256c0a0bf6ada1e2f991c85c4d5466b91c9cabfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LB5RM7D%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCId0NC8Mls1g9BtY0TddxuLjYZObdpxWHNEO28QJufGgIhAL%2FlUlIT0pWPUy1wrNaPwx6Ax19zCtBEWxm%2F2LmMMP0rKv8DCGUQABoMNjM3NDIzMTgzODA1Igxnn%2FjJZVW7WYwsNR4q3AOA%2FEnfg5McY3ZETLf36GG0FsGOsTJyw0%2Bwh6rHBo94ecQ6qqMYBGbXsOHhiDMxIPWzsJdHxQuO6%2B80IMxayIqAgCupoNtPUu3qmENGLqn1nafblREiLyv27WpaMa72Cg%2FZX83e%2B8DNkK8vurtj1%2BZ6aaJDACZuo9hx0uI3lFtw8hbgMmtKyQSYzT4gb%2BYAjClhalVk6zqHWl5FV5k5loRkg7KfGbZdNES1C0%2BIYfpZArQaGGkzCJO3K%2BnRFSzYqjF10pFVG1Q88NCNYJW%2BCJfcNnVkAXHoxGl%2Bfld6rs3vgXk6ugrINYDlHewtgb0aCrlJR0hFnOCdVmm2oIGdJyK6sRnlKBIifdeZQ6tmpVZwX65Xf7MjlDJZzJA79jy%2BVPrPDH4SNj6fuP1E%2B3u%2BrK%2Bu7TDadRKcYpT3S0hnwyvYigDJ7IW7F15uDMcRGZhQqDotgac1aOKu0rKrsncbe%2FpmwRB3iUUevQly9VX6zY2955%2BZnp0Fho%2FH6e4dm5HuEG2QXudx2gFGi08Umfw1L0TpQ2gmuf%2BApqU8Rw%2F45pCguok2YdU69oOtdsf9luEDj4Dgm1w7x9cktqyj5q44fGuJ0RnpWGTa9oV%2BLTqrDo%2B37jujjxmxHSAlhOFvAzC%2BkY3CBjqkAZ8wzisw9DAdc1ibkKMpJi%2Bdx%2Bjole%2B89FQisHqwi5x3QYv2qnOUHlReuBffaJr7zsCmbtM%2BkUS7ZxfO8eXVb%2BSYARTRA1dDPJckKrQhWEZKDRlBuciztMB9T5xugj%2BHIyoU9ChWWJxdZdJ72EasUrI%2FryFrJf2eK%2FmPSTZvBIKOYfdNeWWLKIR%2BgkPq5o7JoyszSpii9NraF6Q2DCdcNPKR7Hvq&X-Amz-Signature=428cdf2438898f82781f04815b364d63b1710fe89507610dedea66a74c6265f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LB5RM7D%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCId0NC8Mls1g9BtY0TddxuLjYZObdpxWHNEO28QJufGgIhAL%2FlUlIT0pWPUy1wrNaPwx6Ax19zCtBEWxm%2F2LmMMP0rKv8DCGUQABoMNjM3NDIzMTgzODA1Igxnn%2FjJZVW7WYwsNR4q3AOA%2FEnfg5McY3ZETLf36GG0FsGOsTJyw0%2Bwh6rHBo94ecQ6qqMYBGbXsOHhiDMxIPWzsJdHxQuO6%2B80IMxayIqAgCupoNtPUu3qmENGLqn1nafblREiLyv27WpaMa72Cg%2FZX83e%2B8DNkK8vurtj1%2BZ6aaJDACZuo9hx0uI3lFtw8hbgMmtKyQSYzT4gb%2BYAjClhalVk6zqHWl5FV5k5loRkg7KfGbZdNES1C0%2BIYfpZArQaGGkzCJO3K%2BnRFSzYqjF10pFVG1Q88NCNYJW%2BCJfcNnVkAXHoxGl%2Bfld6rs3vgXk6ugrINYDlHewtgb0aCrlJR0hFnOCdVmm2oIGdJyK6sRnlKBIifdeZQ6tmpVZwX65Xf7MjlDJZzJA79jy%2BVPrPDH4SNj6fuP1E%2B3u%2BrK%2Bu7TDadRKcYpT3S0hnwyvYigDJ7IW7F15uDMcRGZhQqDotgac1aOKu0rKrsncbe%2FpmwRB3iUUevQly9VX6zY2955%2BZnp0Fho%2FH6e4dm5HuEG2QXudx2gFGi08Umfw1L0TpQ2gmuf%2BApqU8Rw%2F45pCguok2YdU69oOtdsf9luEDj4Dgm1w7x9cktqyj5q44fGuJ0RnpWGTa9oV%2BLTqrDo%2B37jujjxmxHSAlhOFvAzC%2BkY3CBjqkAZ8wzisw9DAdc1ibkKMpJi%2Bdx%2Bjole%2B89FQisHqwi5x3QYv2qnOUHlReuBffaJr7zsCmbtM%2BkUS7ZxfO8eXVb%2BSYARTRA1dDPJckKrQhWEZKDRlBuciztMB9T5xugj%2BHIyoU9ChWWJxdZdJ72EasUrI%2FryFrJf2eK%2FmPSTZvBIKOYfdNeWWLKIR%2BgkPq5o7JoyszSpii9NraF6Q2DCdcNPKR7Hvq&X-Amz-Signature=ef1f6c36e31cdb39b716b0c2f981c1a09ec4483251026b18942be914e48df98a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LB5RM7D%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCId0NC8Mls1g9BtY0TddxuLjYZObdpxWHNEO28QJufGgIhAL%2FlUlIT0pWPUy1wrNaPwx6Ax19zCtBEWxm%2F2LmMMP0rKv8DCGUQABoMNjM3NDIzMTgzODA1Igxnn%2FjJZVW7WYwsNR4q3AOA%2FEnfg5McY3ZETLf36GG0FsGOsTJyw0%2Bwh6rHBo94ecQ6qqMYBGbXsOHhiDMxIPWzsJdHxQuO6%2B80IMxayIqAgCupoNtPUu3qmENGLqn1nafblREiLyv27WpaMa72Cg%2FZX83e%2B8DNkK8vurtj1%2BZ6aaJDACZuo9hx0uI3lFtw8hbgMmtKyQSYzT4gb%2BYAjClhalVk6zqHWl5FV5k5loRkg7KfGbZdNES1C0%2BIYfpZArQaGGkzCJO3K%2BnRFSzYqjF10pFVG1Q88NCNYJW%2BCJfcNnVkAXHoxGl%2Bfld6rs3vgXk6ugrINYDlHewtgb0aCrlJR0hFnOCdVmm2oIGdJyK6sRnlKBIifdeZQ6tmpVZwX65Xf7MjlDJZzJA79jy%2BVPrPDH4SNj6fuP1E%2B3u%2BrK%2Bu7TDadRKcYpT3S0hnwyvYigDJ7IW7F15uDMcRGZhQqDotgac1aOKu0rKrsncbe%2FpmwRB3iUUevQly9VX6zY2955%2BZnp0Fho%2FH6e4dm5HuEG2QXudx2gFGi08Umfw1L0TpQ2gmuf%2BApqU8Rw%2F45pCguok2YdU69oOtdsf9luEDj4Dgm1w7x9cktqyj5q44fGuJ0RnpWGTa9oV%2BLTqrDo%2B37jujjxmxHSAlhOFvAzC%2BkY3CBjqkAZ8wzisw9DAdc1ibkKMpJi%2Bdx%2Bjole%2B89FQisHqwi5x3QYv2qnOUHlReuBffaJr7zsCmbtM%2BkUS7ZxfO8eXVb%2BSYARTRA1dDPJckKrQhWEZKDRlBuciztMB9T5xugj%2BHIyoU9ChWWJxdZdJ72EasUrI%2FryFrJf2eK%2FmPSTZvBIKOYfdNeWWLKIR%2BgkPq5o7JoyszSpii9NraF6Q2DCdcNPKR7Hvq&X-Amz-Signature=d1161c40f9622bc85e15af64c272ec2f47a5e21099394dc9af08d5e191350b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LB5RM7D%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCId0NC8Mls1g9BtY0TddxuLjYZObdpxWHNEO28QJufGgIhAL%2FlUlIT0pWPUy1wrNaPwx6Ax19zCtBEWxm%2F2LmMMP0rKv8DCGUQABoMNjM3NDIzMTgzODA1Igxnn%2FjJZVW7WYwsNR4q3AOA%2FEnfg5McY3ZETLf36GG0FsGOsTJyw0%2Bwh6rHBo94ecQ6qqMYBGbXsOHhiDMxIPWzsJdHxQuO6%2B80IMxayIqAgCupoNtPUu3qmENGLqn1nafblREiLyv27WpaMa72Cg%2FZX83e%2B8DNkK8vurtj1%2BZ6aaJDACZuo9hx0uI3lFtw8hbgMmtKyQSYzT4gb%2BYAjClhalVk6zqHWl5FV5k5loRkg7KfGbZdNES1C0%2BIYfpZArQaGGkzCJO3K%2BnRFSzYqjF10pFVG1Q88NCNYJW%2BCJfcNnVkAXHoxGl%2Bfld6rs3vgXk6ugrINYDlHewtgb0aCrlJR0hFnOCdVmm2oIGdJyK6sRnlKBIifdeZQ6tmpVZwX65Xf7MjlDJZzJA79jy%2BVPrPDH4SNj6fuP1E%2B3u%2BrK%2Bu7TDadRKcYpT3S0hnwyvYigDJ7IW7F15uDMcRGZhQqDotgac1aOKu0rKrsncbe%2FpmwRB3iUUevQly9VX6zY2955%2BZnp0Fho%2FH6e4dm5HuEG2QXudx2gFGi08Umfw1L0TpQ2gmuf%2BApqU8Rw%2F45pCguok2YdU69oOtdsf9luEDj4Dgm1w7x9cktqyj5q44fGuJ0RnpWGTa9oV%2BLTqrDo%2B37jujjxmxHSAlhOFvAzC%2BkY3CBjqkAZ8wzisw9DAdc1ibkKMpJi%2Bdx%2Bjole%2B89FQisHqwi5x3QYv2qnOUHlReuBffaJr7zsCmbtM%2BkUS7ZxfO8eXVb%2BSYARTRA1dDPJckKrQhWEZKDRlBuciztMB9T5xugj%2BHIyoU9ChWWJxdZdJ72EasUrI%2FryFrJf2eK%2FmPSTZvBIKOYfdNeWWLKIR%2BgkPq5o7JoyszSpii9NraF6Q2DCdcNPKR7Hvq&X-Amz-Signature=42e62f453ea562a2f569367b65be9b7e88b3e92f7f2f4bcbc2b438cbc607dfa6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
