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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHHGVEV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBf3gHumdT%2BlsJItVK0rMEoJPff%2Bn1REH6lWjJLj8INcAiEApVSAoKj%2Bwzo76MvjBrA9wNQLyD5XQIqh1VI1VMjB32AqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYyZLiUXFMto5XVoyrcA0W8sulUS%2FTdrAE3y4%2FlywFHJNAO87feG1PeY4Ui5SRtBLInbOVs2pFN%2FJko6bL2IU7I92vSbnFxV%2F4h0jcuTeM9B4A9g6jqOHFrubGyj6R4zXH36IHQLIvYNcroUt2OtSnVo1HvZwPdfofnJaBThqRW7g%2BZGsRlMXxpA%2FosBv6PCpK5qqW4QOl%2Bq14FAjjW4cUa3cZjaTPYrCXDEto%2F%2FuYgFwvs4OMis5dedOWOO79MiKP3OaSmYhxXrLu3FgsgSL8B%2BkoUzZeala9ggcvCjO7i3%2B5pvP7EEZcQskVFED5OGozzf1jALpbqmVGIOemxsGFNAJpt8XXlTijY%2FfvLvCLG5WAZ6dLLWD%2BIshxZfebcJSmkzbWeH%2BQb8My%2Byhg5c3YFvu1XqC3peUMFzBQgvbbOI0RZeBfV8BzUWHBPBKFR7cv%2BoN24Gtc%2F5aopdAnPE3XMZ2LyLk3uxcyEDZ9OOFEP3jnTOy1uQOY4dp9H1XX%2B%2FYsr%2Fk6%2FngunUGn0FOUrMlrNKcC7CPPsyJbM%2FYjsAQBeXGlaNdsPPbsP8IX8NX%2FL8jtV5Dfhi3U%2B2b8iOO5Aedolp9RTjZb8SBVYDY%2BIzt2AgM285K48quFzna3mMKCzBa4TWGgsHGQIGppvMJCQnL0GOqUBYK9yMg4bJjrMk8lLhEh6TH75km8IkKnO5wG03xDoGhq9C70DJOn6XzJ7DuJdbMPV%2F%2BqJC%2B3WIm3l8Mz%2BQRvo%2BT46k35AY0NoNcjzdarEZ9%2FcpL7IPWqa1l0ECLzQpd3hqNB3PSlXnxWJfppDvFyJgL5UhK6u%2FIHt4ISfUlyZFC3oYs48spJaNnbQ9Z%2FzN0qEhOYdb3%2BUTVCSPK7PrcBX4WR9SyPq&X-Amz-Signature=3663055e1856e73be72db7c2a521be91f1723e53c36fd1bee372549019afd956&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHHGVEV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBf3gHumdT%2BlsJItVK0rMEoJPff%2Bn1REH6lWjJLj8INcAiEApVSAoKj%2Bwzo76MvjBrA9wNQLyD5XQIqh1VI1VMjB32AqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYyZLiUXFMto5XVoyrcA0W8sulUS%2FTdrAE3y4%2FlywFHJNAO87feG1PeY4Ui5SRtBLInbOVs2pFN%2FJko6bL2IU7I92vSbnFxV%2F4h0jcuTeM9B4A9g6jqOHFrubGyj6R4zXH36IHQLIvYNcroUt2OtSnVo1HvZwPdfofnJaBThqRW7g%2BZGsRlMXxpA%2FosBv6PCpK5qqW4QOl%2Bq14FAjjW4cUa3cZjaTPYrCXDEto%2F%2FuYgFwvs4OMis5dedOWOO79MiKP3OaSmYhxXrLu3FgsgSL8B%2BkoUzZeala9ggcvCjO7i3%2B5pvP7EEZcQskVFED5OGozzf1jALpbqmVGIOemxsGFNAJpt8XXlTijY%2FfvLvCLG5WAZ6dLLWD%2BIshxZfebcJSmkzbWeH%2BQb8My%2Byhg5c3YFvu1XqC3peUMFzBQgvbbOI0RZeBfV8BzUWHBPBKFR7cv%2BoN24Gtc%2F5aopdAnPE3XMZ2LyLk3uxcyEDZ9OOFEP3jnTOy1uQOY4dp9H1XX%2B%2FYsr%2Fk6%2FngunUGn0FOUrMlrNKcC7CPPsyJbM%2FYjsAQBeXGlaNdsPPbsP8IX8NX%2FL8jtV5Dfhi3U%2B2b8iOO5Aedolp9RTjZb8SBVYDY%2BIzt2AgM285K48quFzna3mMKCzBa4TWGgsHGQIGppvMJCQnL0GOqUBYK9yMg4bJjrMk8lLhEh6TH75km8IkKnO5wG03xDoGhq9C70DJOn6XzJ7DuJdbMPV%2F%2BqJC%2B3WIm3l8Mz%2BQRvo%2BT46k35AY0NoNcjzdarEZ9%2FcpL7IPWqa1l0ECLzQpd3hqNB3PSlXnxWJfppDvFyJgL5UhK6u%2FIHt4ISfUlyZFC3oYs48spJaNnbQ9Z%2FzN0qEhOYdb3%2BUTVCSPK7PrcBX4WR9SyPq&X-Amz-Signature=a5a369153390fe4c0430e9ad7990039096e93b7bc1166d3db3c28d5fda0b2f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHHGVEV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBf3gHumdT%2BlsJItVK0rMEoJPff%2Bn1REH6lWjJLj8INcAiEApVSAoKj%2Bwzo76MvjBrA9wNQLyD5XQIqh1VI1VMjB32AqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYyZLiUXFMto5XVoyrcA0W8sulUS%2FTdrAE3y4%2FlywFHJNAO87feG1PeY4Ui5SRtBLInbOVs2pFN%2FJko6bL2IU7I92vSbnFxV%2F4h0jcuTeM9B4A9g6jqOHFrubGyj6R4zXH36IHQLIvYNcroUt2OtSnVo1HvZwPdfofnJaBThqRW7g%2BZGsRlMXxpA%2FosBv6PCpK5qqW4QOl%2Bq14FAjjW4cUa3cZjaTPYrCXDEto%2F%2FuYgFwvs4OMis5dedOWOO79MiKP3OaSmYhxXrLu3FgsgSL8B%2BkoUzZeala9ggcvCjO7i3%2B5pvP7EEZcQskVFED5OGozzf1jALpbqmVGIOemxsGFNAJpt8XXlTijY%2FfvLvCLG5WAZ6dLLWD%2BIshxZfebcJSmkzbWeH%2BQb8My%2Byhg5c3YFvu1XqC3peUMFzBQgvbbOI0RZeBfV8BzUWHBPBKFR7cv%2BoN24Gtc%2F5aopdAnPE3XMZ2LyLk3uxcyEDZ9OOFEP3jnTOy1uQOY4dp9H1XX%2B%2FYsr%2Fk6%2FngunUGn0FOUrMlrNKcC7CPPsyJbM%2FYjsAQBeXGlaNdsPPbsP8IX8NX%2FL8jtV5Dfhi3U%2B2b8iOO5Aedolp9RTjZb8SBVYDY%2BIzt2AgM285K48quFzna3mMKCzBa4TWGgsHGQIGppvMJCQnL0GOqUBYK9yMg4bJjrMk8lLhEh6TH75km8IkKnO5wG03xDoGhq9C70DJOn6XzJ7DuJdbMPV%2F%2BqJC%2B3WIm3l8Mz%2BQRvo%2BT46k35AY0NoNcjzdarEZ9%2FcpL7IPWqa1l0ECLzQpd3hqNB3PSlXnxWJfppDvFyJgL5UhK6u%2FIHt4ISfUlyZFC3oYs48spJaNnbQ9Z%2FzN0qEhOYdb3%2BUTVCSPK7PrcBX4WR9SyPq&X-Amz-Signature=77e2c439f6715889ce9a38a3a9a69d9f1555d0c44d13158b3f2e504bae1ae31a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHHGVEV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBf3gHumdT%2BlsJItVK0rMEoJPff%2Bn1REH6lWjJLj8INcAiEApVSAoKj%2Bwzo76MvjBrA9wNQLyD5XQIqh1VI1VMjB32AqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYyZLiUXFMto5XVoyrcA0W8sulUS%2FTdrAE3y4%2FlywFHJNAO87feG1PeY4Ui5SRtBLInbOVs2pFN%2FJko6bL2IU7I92vSbnFxV%2F4h0jcuTeM9B4A9g6jqOHFrubGyj6R4zXH36IHQLIvYNcroUt2OtSnVo1HvZwPdfofnJaBThqRW7g%2BZGsRlMXxpA%2FosBv6PCpK5qqW4QOl%2Bq14FAjjW4cUa3cZjaTPYrCXDEto%2F%2FuYgFwvs4OMis5dedOWOO79MiKP3OaSmYhxXrLu3FgsgSL8B%2BkoUzZeala9ggcvCjO7i3%2B5pvP7EEZcQskVFED5OGozzf1jALpbqmVGIOemxsGFNAJpt8XXlTijY%2FfvLvCLG5WAZ6dLLWD%2BIshxZfebcJSmkzbWeH%2BQb8My%2Byhg5c3YFvu1XqC3peUMFzBQgvbbOI0RZeBfV8BzUWHBPBKFR7cv%2BoN24Gtc%2F5aopdAnPE3XMZ2LyLk3uxcyEDZ9OOFEP3jnTOy1uQOY4dp9H1XX%2B%2FYsr%2Fk6%2FngunUGn0FOUrMlrNKcC7CPPsyJbM%2FYjsAQBeXGlaNdsPPbsP8IX8NX%2FL8jtV5Dfhi3U%2B2b8iOO5Aedolp9RTjZb8SBVYDY%2BIzt2AgM285K48quFzna3mMKCzBa4TWGgsHGQIGppvMJCQnL0GOqUBYK9yMg4bJjrMk8lLhEh6TH75km8IkKnO5wG03xDoGhq9C70DJOn6XzJ7DuJdbMPV%2F%2BqJC%2B3WIm3l8Mz%2BQRvo%2BT46k35AY0NoNcjzdarEZ9%2FcpL7IPWqa1l0ECLzQpd3hqNB3PSlXnxWJfppDvFyJgL5UhK6u%2FIHt4ISfUlyZFC3oYs48spJaNnbQ9Z%2FzN0qEhOYdb3%2BUTVCSPK7PrcBX4WR9SyPq&X-Amz-Signature=a0c2dcff54c5fe17feabc0fd211b423039c85ccbb2bc154d05897b0bcec7c3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHHGVEV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBf3gHumdT%2BlsJItVK0rMEoJPff%2Bn1REH6lWjJLj8INcAiEApVSAoKj%2Bwzo76MvjBrA9wNQLyD5XQIqh1VI1VMjB32AqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYyZLiUXFMto5XVoyrcA0W8sulUS%2FTdrAE3y4%2FlywFHJNAO87feG1PeY4Ui5SRtBLInbOVs2pFN%2FJko6bL2IU7I92vSbnFxV%2F4h0jcuTeM9B4A9g6jqOHFrubGyj6R4zXH36IHQLIvYNcroUt2OtSnVo1HvZwPdfofnJaBThqRW7g%2BZGsRlMXxpA%2FosBv6PCpK5qqW4QOl%2Bq14FAjjW4cUa3cZjaTPYrCXDEto%2F%2FuYgFwvs4OMis5dedOWOO79MiKP3OaSmYhxXrLu3FgsgSL8B%2BkoUzZeala9ggcvCjO7i3%2B5pvP7EEZcQskVFED5OGozzf1jALpbqmVGIOemxsGFNAJpt8XXlTijY%2FfvLvCLG5WAZ6dLLWD%2BIshxZfebcJSmkzbWeH%2BQb8My%2Byhg5c3YFvu1XqC3peUMFzBQgvbbOI0RZeBfV8BzUWHBPBKFR7cv%2BoN24Gtc%2F5aopdAnPE3XMZ2LyLk3uxcyEDZ9OOFEP3jnTOy1uQOY4dp9H1XX%2B%2FYsr%2Fk6%2FngunUGn0FOUrMlrNKcC7CPPsyJbM%2FYjsAQBeXGlaNdsPPbsP8IX8NX%2FL8jtV5Dfhi3U%2B2b8iOO5Aedolp9RTjZb8SBVYDY%2BIzt2AgM285K48quFzna3mMKCzBa4TWGgsHGQIGppvMJCQnL0GOqUBYK9yMg4bJjrMk8lLhEh6TH75km8IkKnO5wG03xDoGhq9C70DJOn6XzJ7DuJdbMPV%2F%2BqJC%2B3WIm3l8Mz%2BQRvo%2BT46k35AY0NoNcjzdarEZ9%2FcpL7IPWqa1l0ECLzQpd3hqNB3PSlXnxWJfppDvFyJgL5UhK6u%2FIHt4ISfUlyZFC3oYs48spJaNnbQ9Z%2FzN0qEhOYdb3%2BUTVCSPK7PrcBX4WR9SyPq&X-Amz-Signature=cd2853795b706e5270105045f74ee4b38153e25ee48417611595d68e3819a45b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHHGVEV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBf3gHumdT%2BlsJItVK0rMEoJPff%2Bn1REH6lWjJLj8INcAiEApVSAoKj%2Bwzo76MvjBrA9wNQLyD5XQIqh1VI1VMjB32AqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYyZLiUXFMto5XVoyrcA0W8sulUS%2FTdrAE3y4%2FlywFHJNAO87feG1PeY4Ui5SRtBLInbOVs2pFN%2FJko6bL2IU7I92vSbnFxV%2F4h0jcuTeM9B4A9g6jqOHFrubGyj6R4zXH36IHQLIvYNcroUt2OtSnVo1HvZwPdfofnJaBThqRW7g%2BZGsRlMXxpA%2FosBv6PCpK5qqW4QOl%2Bq14FAjjW4cUa3cZjaTPYrCXDEto%2F%2FuYgFwvs4OMis5dedOWOO79MiKP3OaSmYhxXrLu3FgsgSL8B%2BkoUzZeala9ggcvCjO7i3%2B5pvP7EEZcQskVFED5OGozzf1jALpbqmVGIOemxsGFNAJpt8XXlTijY%2FfvLvCLG5WAZ6dLLWD%2BIshxZfebcJSmkzbWeH%2BQb8My%2Byhg5c3YFvu1XqC3peUMFzBQgvbbOI0RZeBfV8BzUWHBPBKFR7cv%2BoN24Gtc%2F5aopdAnPE3XMZ2LyLk3uxcyEDZ9OOFEP3jnTOy1uQOY4dp9H1XX%2B%2FYsr%2Fk6%2FngunUGn0FOUrMlrNKcC7CPPsyJbM%2FYjsAQBeXGlaNdsPPbsP8IX8NX%2FL8jtV5Dfhi3U%2B2b8iOO5Aedolp9RTjZb8SBVYDY%2BIzt2AgM285K48quFzna3mMKCzBa4TWGgsHGQIGppvMJCQnL0GOqUBYK9yMg4bJjrMk8lLhEh6TH75km8IkKnO5wG03xDoGhq9C70DJOn6XzJ7DuJdbMPV%2F%2BqJC%2B3WIm3l8Mz%2BQRvo%2BT46k35AY0NoNcjzdarEZ9%2FcpL7IPWqa1l0ECLzQpd3hqNB3PSlXnxWJfppDvFyJgL5UhK6u%2FIHt4ISfUlyZFC3oYs48spJaNnbQ9Z%2FzN0qEhOYdb3%2BUTVCSPK7PrcBX4WR9SyPq&X-Amz-Signature=77ca344f6fbd5ba90125dd351ce0983c1cf39168fb6ed1f09854cb688aba2744&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHHGVEV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBf3gHumdT%2BlsJItVK0rMEoJPff%2Bn1REH6lWjJLj8INcAiEApVSAoKj%2Bwzo76MvjBrA9wNQLyD5XQIqh1VI1VMjB32AqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYyZLiUXFMto5XVoyrcA0W8sulUS%2FTdrAE3y4%2FlywFHJNAO87feG1PeY4Ui5SRtBLInbOVs2pFN%2FJko6bL2IU7I92vSbnFxV%2F4h0jcuTeM9B4A9g6jqOHFrubGyj6R4zXH36IHQLIvYNcroUt2OtSnVo1HvZwPdfofnJaBThqRW7g%2BZGsRlMXxpA%2FosBv6PCpK5qqW4QOl%2Bq14FAjjW4cUa3cZjaTPYrCXDEto%2F%2FuYgFwvs4OMis5dedOWOO79MiKP3OaSmYhxXrLu3FgsgSL8B%2BkoUzZeala9ggcvCjO7i3%2B5pvP7EEZcQskVFED5OGozzf1jALpbqmVGIOemxsGFNAJpt8XXlTijY%2FfvLvCLG5WAZ6dLLWD%2BIshxZfebcJSmkzbWeH%2BQb8My%2Byhg5c3YFvu1XqC3peUMFzBQgvbbOI0RZeBfV8BzUWHBPBKFR7cv%2BoN24Gtc%2F5aopdAnPE3XMZ2LyLk3uxcyEDZ9OOFEP3jnTOy1uQOY4dp9H1XX%2B%2FYsr%2Fk6%2FngunUGn0FOUrMlrNKcC7CPPsyJbM%2FYjsAQBeXGlaNdsPPbsP8IX8NX%2FL8jtV5Dfhi3U%2B2b8iOO5Aedolp9RTjZb8SBVYDY%2BIzt2AgM285K48quFzna3mMKCzBa4TWGgsHGQIGppvMJCQnL0GOqUBYK9yMg4bJjrMk8lLhEh6TH75km8IkKnO5wG03xDoGhq9C70DJOn6XzJ7DuJdbMPV%2F%2BqJC%2B3WIm3l8Mz%2BQRvo%2BT46k35AY0NoNcjzdarEZ9%2FcpL7IPWqa1l0ECLzQpd3hqNB3PSlXnxWJfppDvFyJgL5UhK6u%2FIHt4ISfUlyZFC3oYs48spJaNnbQ9Z%2FzN0qEhOYdb3%2BUTVCSPK7PrcBX4WR9SyPq&X-Amz-Signature=2fbe385470a8d708cf08f06cad199c8ed5ca50b28d74132fe3bc890912e567bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PHHGVEV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIBf3gHumdT%2BlsJItVK0rMEoJPff%2Bn1REH6lWjJLj8INcAiEApVSAoKj%2Bwzo76MvjBrA9wNQLyD5XQIqh1VI1VMjB32AqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYyZLiUXFMto5XVoyrcA0W8sulUS%2FTdrAE3y4%2FlywFHJNAO87feG1PeY4Ui5SRtBLInbOVs2pFN%2FJko6bL2IU7I92vSbnFxV%2F4h0jcuTeM9B4A9g6jqOHFrubGyj6R4zXH36IHQLIvYNcroUt2OtSnVo1HvZwPdfofnJaBThqRW7g%2BZGsRlMXxpA%2FosBv6PCpK5qqW4QOl%2Bq14FAjjW4cUa3cZjaTPYrCXDEto%2F%2FuYgFwvs4OMis5dedOWOO79MiKP3OaSmYhxXrLu3FgsgSL8B%2BkoUzZeala9ggcvCjO7i3%2B5pvP7EEZcQskVFED5OGozzf1jALpbqmVGIOemxsGFNAJpt8XXlTijY%2FfvLvCLG5WAZ6dLLWD%2BIshxZfebcJSmkzbWeH%2BQb8My%2Byhg5c3YFvu1XqC3peUMFzBQgvbbOI0RZeBfV8BzUWHBPBKFR7cv%2BoN24Gtc%2F5aopdAnPE3XMZ2LyLk3uxcyEDZ9OOFEP3jnTOy1uQOY4dp9H1XX%2B%2FYsr%2Fk6%2FngunUGn0FOUrMlrNKcC7CPPsyJbM%2FYjsAQBeXGlaNdsPPbsP8IX8NX%2FL8jtV5Dfhi3U%2B2b8iOO5Aedolp9RTjZb8SBVYDY%2BIzt2AgM285K48quFzna3mMKCzBa4TWGgsHGQIGppvMJCQnL0GOqUBYK9yMg4bJjrMk8lLhEh6TH75km8IkKnO5wG03xDoGhq9C70DJOn6XzJ7DuJdbMPV%2F%2BqJC%2B3WIm3l8Mz%2BQRvo%2BT46k35AY0NoNcjzdarEZ9%2FcpL7IPWqa1l0ECLzQpd3hqNB3PSlXnxWJfppDvFyJgL5UhK6u%2FIHt4ISfUlyZFC3oYs48spJaNnbQ9Z%2FzN0qEhOYdb3%2BUTVCSPK7PrcBX4WR9SyPq&X-Amz-Signature=90044ea52556b56c7b65c0f31c91bc5d73a3508baee332589945093bc44561a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
