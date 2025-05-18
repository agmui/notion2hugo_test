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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233E2CO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwpUqVmdKnqNi5OVmv79%2BhpFaqHYjxhG26PL9xkaeUigIhANP3TObVKFfnrMihktxT9e%2BNtpG3Dokx8McEP78J95qqKv8DCHUQABoMNjM3NDIzMTgzODA1Igxbi6K2bb7IP0a5dR0q3ANiU0PduyqP9hxITSPfbbDEDtoZ3gz6bjD1yvKs4IN9qfyrHf95GWE4mq5ZdD6JrKIXHLSvZ6G%2BrIUWGRcBU8K0Xb2vead0Y09tqX6UsetCmWShsr5GFxP569ahg%2FG3XZp0LxH2IWWhoYslv9qi9ac0nFwUb1PW6zseCHirIcpVq7TzEVrTgIkzysxXmTDJA96Om5q8V7l6jcWaeRLj4Q99ThC0tIBpukad%2BQqyLRfTJZaCNqpNBObUgtDo98BysRO9uZytCKHQVxzE%2Ba04JJMvIpcoj7JJlZpxUpaJxKWM6glK8BsOGIxN4VmvTRMD8gYv20lc4rRfEm4iNRqdPO6bLIvL2GxEqnZZ7PNjmsP4%2FZt0EOSmfX0UwnG778rIXSBIsOpuN44Bsi35yvlYi5bEzQ0u2p7FpzQjh%2F5YX8LdpZoQ2vd8p0oGCN5y0HK1nt3Ic%2FefW7UcgwINSJg9m7QsMDJNfD7MKdC5h1ScLnToHHUXdYMoIUwk5obf0pLRuaEaXD4SABFdBbWlOJyhbNA35GkjONnlDlj7hW1%2Bk35m4Dy3y4zFHlT7Q%2FyDqa0m7VqS1IHVUM7NOT%2F1h1wXh5dlcx6RrxRvUHCnyMCb21X%2BBsjp%2Bj8CONtqPGSl1TDtnKfBBjqkAWWeNn7z61d6OO6W5NxFhy487DaIxyRRgG1KdwTwtQrFlDoBvRoIN87BRjHXj3j4HEhklqLNLmHWUaexo1B791Z2G%2FuIASriLdisALEBSm0xwH9y6Y3OxMyaDo74xIIUu5YCFVxMiO%2Flhq9naNyYsNadblgeufE%2BpAOWixhRt0q%2FGC8rtm5wgsWOFvOwf9sUb7alLs6kHgeiv8jvOcVI8nJudHp5&X-Amz-Signature=52deac9e8605c689f4b483c81e444105b14a869f9a8718a86901ce6b3dc64ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233E2CO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwpUqVmdKnqNi5OVmv79%2BhpFaqHYjxhG26PL9xkaeUigIhANP3TObVKFfnrMihktxT9e%2BNtpG3Dokx8McEP78J95qqKv8DCHUQABoMNjM3NDIzMTgzODA1Igxbi6K2bb7IP0a5dR0q3ANiU0PduyqP9hxITSPfbbDEDtoZ3gz6bjD1yvKs4IN9qfyrHf95GWE4mq5ZdD6JrKIXHLSvZ6G%2BrIUWGRcBU8K0Xb2vead0Y09tqX6UsetCmWShsr5GFxP569ahg%2FG3XZp0LxH2IWWhoYslv9qi9ac0nFwUb1PW6zseCHirIcpVq7TzEVrTgIkzysxXmTDJA96Om5q8V7l6jcWaeRLj4Q99ThC0tIBpukad%2BQqyLRfTJZaCNqpNBObUgtDo98BysRO9uZytCKHQVxzE%2Ba04JJMvIpcoj7JJlZpxUpaJxKWM6glK8BsOGIxN4VmvTRMD8gYv20lc4rRfEm4iNRqdPO6bLIvL2GxEqnZZ7PNjmsP4%2FZt0EOSmfX0UwnG778rIXSBIsOpuN44Bsi35yvlYi5bEzQ0u2p7FpzQjh%2F5YX8LdpZoQ2vd8p0oGCN5y0HK1nt3Ic%2FefW7UcgwINSJg9m7QsMDJNfD7MKdC5h1ScLnToHHUXdYMoIUwk5obf0pLRuaEaXD4SABFdBbWlOJyhbNA35GkjONnlDlj7hW1%2Bk35m4Dy3y4zFHlT7Q%2FyDqa0m7VqS1IHVUM7NOT%2F1h1wXh5dlcx6RrxRvUHCnyMCb21X%2BBsjp%2Bj8CONtqPGSl1TDtnKfBBjqkAWWeNn7z61d6OO6W5NxFhy487DaIxyRRgG1KdwTwtQrFlDoBvRoIN87BRjHXj3j4HEhklqLNLmHWUaexo1B791Z2G%2FuIASriLdisALEBSm0xwH9y6Y3OxMyaDo74xIIUu5YCFVxMiO%2Flhq9naNyYsNadblgeufE%2BpAOWixhRt0q%2FGC8rtm5wgsWOFvOwf9sUb7alLs6kHgeiv8jvOcVI8nJudHp5&X-Amz-Signature=bb1fd3371a95e1f37893d3e2b90bab0663a74ba609c3de9b92d12df91e7b943b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233E2CO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwpUqVmdKnqNi5OVmv79%2BhpFaqHYjxhG26PL9xkaeUigIhANP3TObVKFfnrMihktxT9e%2BNtpG3Dokx8McEP78J95qqKv8DCHUQABoMNjM3NDIzMTgzODA1Igxbi6K2bb7IP0a5dR0q3ANiU0PduyqP9hxITSPfbbDEDtoZ3gz6bjD1yvKs4IN9qfyrHf95GWE4mq5ZdD6JrKIXHLSvZ6G%2BrIUWGRcBU8K0Xb2vead0Y09tqX6UsetCmWShsr5GFxP569ahg%2FG3XZp0LxH2IWWhoYslv9qi9ac0nFwUb1PW6zseCHirIcpVq7TzEVrTgIkzysxXmTDJA96Om5q8V7l6jcWaeRLj4Q99ThC0tIBpukad%2BQqyLRfTJZaCNqpNBObUgtDo98BysRO9uZytCKHQVxzE%2Ba04JJMvIpcoj7JJlZpxUpaJxKWM6glK8BsOGIxN4VmvTRMD8gYv20lc4rRfEm4iNRqdPO6bLIvL2GxEqnZZ7PNjmsP4%2FZt0EOSmfX0UwnG778rIXSBIsOpuN44Bsi35yvlYi5bEzQ0u2p7FpzQjh%2F5YX8LdpZoQ2vd8p0oGCN5y0HK1nt3Ic%2FefW7UcgwINSJg9m7QsMDJNfD7MKdC5h1ScLnToHHUXdYMoIUwk5obf0pLRuaEaXD4SABFdBbWlOJyhbNA35GkjONnlDlj7hW1%2Bk35m4Dy3y4zFHlT7Q%2FyDqa0m7VqS1IHVUM7NOT%2F1h1wXh5dlcx6RrxRvUHCnyMCb21X%2BBsjp%2Bj8CONtqPGSl1TDtnKfBBjqkAWWeNn7z61d6OO6W5NxFhy487DaIxyRRgG1KdwTwtQrFlDoBvRoIN87BRjHXj3j4HEhklqLNLmHWUaexo1B791Z2G%2FuIASriLdisALEBSm0xwH9y6Y3OxMyaDo74xIIUu5YCFVxMiO%2Flhq9naNyYsNadblgeufE%2BpAOWixhRt0q%2FGC8rtm5wgsWOFvOwf9sUb7alLs6kHgeiv8jvOcVI8nJudHp5&X-Amz-Signature=eb6c5cc1ac720e01af31fc9d19a3d152c83f19b5b1fb2cf53011b58f6d4b7b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233E2CO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwpUqVmdKnqNi5OVmv79%2BhpFaqHYjxhG26PL9xkaeUigIhANP3TObVKFfnrMihktxT9e%2BNtpG3Dokx8McEP78J95qqKv8DCHUQABoMNjM3NDIzMTgzODA1Igxbi6K2bb7IP0a5dR0q3ANiU0PduyqP9hxITSPfbbDEDtoZ3gz6bjD1yvKs4IN9qfyrHf95GWE4mq5ZdD6JrKIXHLSvZ6G%2BrIUWGRcBU8K0Xb2vead0Y09tqX6UsetCmWShsr5GFxP569ahg%2FG3XZp0LxH2IWWhoYslv9qi9ac0nFwUb1PW6zseCHirIcpVq7TzEVrTgIkzysxXmTDJA96Om5q8V7l6jcWaeRLj4Q99ThC0tIBpukad%2BQqyLRfTJZaCNqpNBObUgtDo98BysRO9uZytCKHQVxzE%2Ba04JJMvIpcoj7JJlZpxUpaJxKWM6glK8BsOGIxN4VmvTRMD8gYv20lc4rRfEm4iNRqdPO6bLIvL2GxEqnZZ7PNjmsP4%2FZt0EOSmfX0UwnG778rIXSBIsOpuN44Bsi35yvlYi5bEzQ0u2p7FpzQjh%2F5YX8LdpZoQ2vd8p0oGCN5y0HK1nt3Ic%2FefW7UcgwINSJg9m7QsMDJNfD7MKdC5h1ScLnToHHUXdYMoIUwk5obf0pLRuaEaXD4SABFdBbWlOJyhbNA35GkjONnlDlj7hW1%2Bk35m4Dy3y4zFHlT7Q%2FyDqa0m7VqS1IHVUM7NOT%2F1h1wXh5dlcx6RrxRvUHCnyMCb21X%2BBsjp%2Bj8CONtqPGSl1TDtnKfBBjqkAWWeNn7z61d6OO6W5NxFhy487DaIxyRRgG1KdwTwtQrFlDoBvRoIN87BRjHXj3j4HEhklqLNLmHWUaexo1B791Z2G%2FuIASriLdisALEBSm0xwH9y6Y3OxMyaDo74xIIUu5YCFVxMiO%2Flhq9naNyYsNadblgeufE%2BpAOWixhRt0q%2FGC8rtm5wgsWOFvOwf9sUb7alLs6kHgeiv8jvOcVI8nJudHp5&X-Amz-Signature=91cf3934efbf1de2edd758d5c97d886f668c9b19258b4714352de2eb3cd9357b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233E2CO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwpUqVmdKnqNi5OVmv79%2BhpFaqHYjxhG26PL9xkaeUigIhANP3TObVKFfnrMihktxT9e%2BNtpG3Dokx8McEP78J95qqKv8DCHUQABoMNjM3NDIzMTgzODA1Igxbi6K2bb7IP0a5dR0q3ANiU0PduyqP9hxITSPfbbDEDtoZ3gz6bjD1yvKs4IN9qfyrHf95GWE4mq5ZdD6JrKIXHLSvZ6G%2BrIUWGRcBU8K0Xb2vead0Y09tqX6UsetCmWShsr5GFxP569ahg%2FG3XZp0LxH2IWWhoYslv9qi9ac0nFwUb1PW6zseCHirIcpVq7TzEVrTgIkzysxXmTDJA96Om5q8V7l6jcWaeRLj4Q99ThC0tIBpukad%2BQqyLRfTJZaCNqpNBObUgtDo98BysRO9uZytCKHQVxzE%2Ba04JJMvIpcoj7JJlZpxUpaJxKWM6glK8BsOGIxN4VmvTRMD8gYv20lc4rRfEm4iNRqdPO6bLIvL2GxEqnZZ7PNjmsP4%2FZt0EOSmfX0UwnG778rIXSBIsOpuN44Bsi35yvlYi5bEzQ0u2p7FpzQjh%2F5YX8LdpZoQ2vd8p0oGCN5y0HK1nt3Ic%2FefW7UcgwINSJg9m7QsMDJNfD7MKdC5h1ScLnToHHUXdYMoIUwk5obf0pLRuaEaXD4SABFdBbWlOJyhbNA35GkjONnlDlj7hW1%2Bk35m4Dy3y4zFHlT7Q%2FyDqa0m7VqS1IHVUM7NOT%2F1h1wXh5dlcx6RrxRvUHCnyMCb21X%2BBsjp%2Bj8CONtqPGSl1TDtnKfBBjqkAWWeNn7z61d6OO6W5NxFhy487DaIxyRRgG1KdwTwtQrFlDoBvRoIN87BRjHXj3j4HEhklqLNLmHWUaexo1B791Z2G%2FuIASriLdisALEBSm0xwH9y6Y3OxMyaDo74xIIUu5YCFVxMiO%2Flhq9naNyYsNadblgeufE%2BpAOWixhRt0q%2FGC8rtm5wgsWOFvOwf9sUb7alLs6kHgeiv8jvOcVI8nJudHp5&X-Amz-Signature=2a42c8428d62428298adeef76f311144152ba230400d57758022946c1322c622&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233E2CO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwpUqVmdKnqNi5OVmv79%2BhpFaqHYjxhG26PL9xkaeUigIhANP3TObVKFfnrMihktxT9e%2BNtpG3Dokx8McEP78J95qqKv8DCHUQABoMNjM3NDIzMTgzODA1Igxbi6K2bb7IP0a5dR0q3ANiU0PduyqP9hxITSPfbbDEDtoZ3gz6bjD1yvKs4IN9qfyrHf95GWE4mq5ZdD6JrKIXHLSvZ6G%2BrIUWGRcBU8K0Xb2vead0Y09tqX6UsetCmWShsr5GFxP569ahg%2FG3XZp0LxH2IWWhoYslv9qi9ac0nFwUb1PW6zseCHirIcpVq7TzEVrTgIkzysxXmTDJA96Om5q8V7l6jcWaeRLj4Q99ThC0tIBpukad%2BQqyLRfTJZaCNqpNBObUgtDo98BysRO9uZytCKHQVxzE%2Ba04JJMvIpcoj7JJlZpxUpaJxKWM6glK8BsOGIxN4VmvTRMD8gYv20lc4rRfEm4iNRqdPO6bLIvL2GxEqnZZ7PNjmsP4%2FZt0EOSmfX0UwnG778rIXSBIsOpuN44Bsi35yvlYi5bEzQ0u2p7FpzQjh%2F5YX8LdpZoQ2vd8p0oGCN5y0HK1nt3Ic%2FefW7UcgwINSJg9m7QsMDJNfD7MKdC5h1ScLnToHHUXdYMoIUwk5obf0pLRuaEaXD4SABFdBbWlOJyhbNA35GkjONnlDlj7hW1%2Bk35m4Dy3y4zFHlT7Q%2FyDqa0m7VqS1IHVUM7NOT%2F1h1wXh5dlcx6RrxRvUHCnyMCb21X%2BBsjp%2Bj8CONtqPGSl1TDtnKfBBjqkAWWeNn7z61d6OO6W5NxFhy487DaIxyRRgG1KdwTwtQrFlDoBvRoIN87BRjHXj3j4HEhklqLNLmHWUaexo1B791Z2G%2FuIASriLdisALEBSm0xwH9y6Y3OxMyaDo74xIIUu5YCFVxMiO%2Flhq9naNyYsNadblgeufE%2BpAOWixhRt0q%2FGC8rtm5wgsWOFvOwf9sUb7alLs6kHgeiv8jvOcVI8nJudHp5&X-Amz-Signature=703c410607b6e73700d2e99f790cba0c5d3bf33445895f13cddb144af32d0775&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233E2CO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwpUqVmdKnqNi5OVmv79%2BhpFaqHYjxhG26PL9xkaeUigIhANP3TObVKFfnrMihktxT9e%2BNtpG3Dokx8McEP78J95qqKv8DCHUQABoMNjM3NDIzMTgzODA1Igxbi6K2bb7IP0a5dR0q3ANiU0PduyqP9hxITSPfbbDEDtoZ3gz6bjD1yvKs4IN9qfyrHf95GWE4mq5ZdD6JrKIXHLSvZ6G%2BrIUWGRcBU8K0Xb2vead0Y09tqX6UsetCmWShsr5GFxP569ahg%2FG3XZp0LxH2IWWhoYslv9qi9ac0nFwUb1PW6zseCHirIcpVq7TzEVrTgIkzysxXmTDJA96Om5q8V7l6jcWaeRLj4Q99ThC0tIBpukad%2BQqyLRfTJZaCNqpNBObUgtDo98BysRO9uZytCKHQVxzE%2Ba04JJMvIpcoj7JJlZpxUpaJxKWM6glK8BsOGIxN4VmvTRMD8gYv20lc4rRfEm4iNRqdPO6bLIvL2GxEqnZZ7PNjmsP4%2FZt0EOSmfX0UwnG778rIXSBIsOpuN44Bsi35yvlYi5bEzQ0u2p7FpzQjh%2F5YX8LdpZoQ2vd8p0oGCN5y0HK1nt3Ic%2FefW7UcgwINSJg9m7QsMDJNfD7MKdC5h1ScLnToHHUXdYMoIUwk5obf0pLRuaEaXD4SABFdBbWlOJyhbNA35GkjONnlDlj7hW1%2Bk35m4Dy3y4zFHlT7Q%2FyDqa0m7VqS1IHVUM7NOT%2F1h1wXh5dlcx6RrxRvUHCnyMCb21X%2BBsjp%2Bj8CONtqPGSl1TDtnKfBBjqkAWWeNn7z61d6OO6W5NxFhy487DaIxyRRgG1KdwTwtQrFlDoBvRoIN87BRjHXj3j4HEhklqLNLmHWUaexo1B791Z2G%2FuIASriLdisALEBSm0xwH9y6Y3OxMyaDo74xIIUu5YCFVxMiO%2Flhq9naNyYsNadblgeufE%2BpAOWixhRt0q%2FGC8rtm5wgsWOFvOwf9sUb7alLs6kHgeiv8jvOcVI8nJudHp5&X-Amz-Signature=c34bdef62f525acd2d4029ecf7467ab0260e4635998ed87ed8c79a859990b114&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233E2CO2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwpUqVmdKnqNi5OVmv79%2BhpFaqHYjxhG26PL9xkaeUigIhANP3TObVKFfnrMihktxT9e%2BNtpG3Dokx8McEP78J95qqKv8DCHUQABoMNjM3NDIzMTgzODA1Igxbi6K2bb7IP0a5dR0q3ANiU0PduyqP9hxITSPfbbDEDtoZ3gz6bjD1yvKs4IN9qfyrHf95GWE4mq5ZdD6JrKIXHLSvZ6G%2BrIUWGRcBU8K0Xb2vead0Y09tqX6UsetCmWShsr5GFxP569ahg%2FG3XZp0LxH2IWWhoYslv9qi9ac0nFwUb1PW6zseCHirIcpVq7TzEVrTgIkzysxXmTDJA96Om5q8V7l6jcWaeRLj4Q99ThC0tIBpukad%2BQqyLRfTJZaCNqpNBObUgtDo98BysRO9uZytCKHQVxzE%2Ba04JJMvIpcoj7JJlZpxUpaJxKWM6glK8BsOGIxN4VmvTRMD8gYv20lc4rRfEm4iNRqdPO6bLIvL2GxEqnZZ7PNjmsP4%2FZt0EOSmfX0UwnG778rIXSBIsOpuN44Bsi35yvlYi5bEzQ0u2p7FpzQjh%2F5YX8LdpZoQ2vd8p0oGCN5y0HK1nt3Ic%2FefW7UcgwINSJg9m7QsMDJNfD7MKdC5h1ScLnToHHUXdYMoIUwk5obf0pLRuaEaXD4SABFdBbWlOJyhbNA35GkjONnlDlj7hW1%2Bk35m4Dy3y4zFHlT7Q%2FyDqa0m7VqS1IHVUM7NOT%2F1h1wXh5dlcx6RrxRvUHCnyMCb21X%2BBsjp%2Bj8CONtqPGSl1TDtnKfBBjqkAWWeNn7z61d6OO6W5NxFhy487DaIxyRRgG1KdwTwtQrFlDoBvRoIN87BRjHXj3j4HEhklqLNLmHWUaexo1B791Z2G%2FuIASriLdisALEBSm0xwH9y6Y3OxMyaDo74xIIUu5YCFVxMiO%2Flhq9naNyYsNadblgeufE%2BpAOWixhRt0q%2FGC8rtm5wgsWOFvOwf9sUb7alLs6kHgeiv8jvOcVI8nJudHp5&X-Amz-Signature=14839de671311351e6fdd31f2f1717a1a53283bb095499cb65b5f4f321bfcb38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
