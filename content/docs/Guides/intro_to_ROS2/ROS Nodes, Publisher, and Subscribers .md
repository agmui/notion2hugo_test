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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4GPZIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBoSse4VYD2KX37HdR5lN5O3ngOoXGAA2pen9%2BL0D9TkAiAtPDa%2FUB3KB6gWzx5s7ba4ERIDY%2FVZUYBcoZCR67ilzir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMyvdYoeZXsTEjfKe%2BKtwDSkl06Axn1Ix9Vwl4zJUEsLKykY9Gfxr0mNS21X75pCrqLkDg9z%2FoX8WoOQr9JjkfsslEZwRY%2BQVZ8Dh%2FBjz6g5%2FdK2Dq%2FScyby8qobNL6pIj%2BTUX5VVYqLvDhC2eP723w5xEGlvKrLmNkHZf0Bw3uNRt4OM32LT%2Fmt%2F1FnrnZXjh3RSrq2Pqo8ohZrXSo7G4lJai1I0Pp%2BmMVGxjxj07iu%2FXfDhTDcXunxt2CRsWcl%2FxaHL1N8DWdvnJSZXl9XEEqAYzBR35lm8k5oHi3OXehxVYhyyAsmv0uajtmn8brCNYdlOu4Kby%2Bb33PYNlY%2BcNSp328u1eT3gb14ZoaCNJdBwRDEZiV33aZxAQImi0QrmzmB8h9cMmZBGcAy1kVp%2Ba1y%2BTzka8tmphtJCqCl%2BpLbwDe7yIVUE7o%2FBz%2BFGSTu8N93TNfBUSY3HacNBUzQ2eCBqePxfBN66xn7zcD7hrKPAzNCBC8AAfa%2FDLvNb2%2BdpV0NgV7t0x7zLSgLBPPmjly2nO%2FkllJwecQjXf7mBJHm2Nq6U2nI1q%2BOkdn5bxfa7ggcjvTpIJtEK7XWgvXJGlCv5AayeqTtIOj0XtkhZIbM2YdfKXT5zR1cHesm2iqC17b%2B6e5thQMUEKOMowvYKOvQY6pgE%2BWAlBrTwGHjAWKsOB%2BKfNODicn3zLBPs4%2FAjz9HR0nY3xbsP3lKt%2B1b0rHm%2BiCN1MAznwJOwe6CJyTNIhZDp%2FQOsm4v6YUAHK2%2FDHLLmujp04OHNBKU6ImzUdnvPzYmqL9xnLgd2TT%2FZXoXh6t1KnlKEQu2XdaVzw2uCHO27gCcvwABe5Id1znyUV%2FUxBTsHaCCSBaESO9%2BajVOhZegGXPSkh3Aa4&X-Amz-Signature=dfd7a68cd8e20599079b7d2b39d4afda8b93f64d40e40ceee3823fac5e501c00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4GPZIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBoSse4VYD2KX37HdR5lN5O3ngOoXGAA2pen9%2BL0D9TkAiAtPDa%2FUB3KB6gWzx5s7ba4ERIDY%2FVZUYBcoZCR67ilzir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMyvdYoeZXsTEjfKe%2BKtwDSkl06Axn1Ix9Vwl4zJUEsLKykY9Gfxr0mNS21X75pCrqLkDg9z%2FoX8WoOQr9JjkfsslEZwRY%2BQVZ8Dh%2FBjz6g5%2FdK2Dq%2FScyby8qobNL6pIj%2BTUX5VVYqLvDhC2eP723w5xEGlvKrLmNkHZf0Bw3uNRt4OM32LT%2Fmt%2F1FnrnZXjh3RSrq2Pqo8ohZrXSo7G4lJai1I0Pp%2BmMVGxjxj07iu%2FXfDhTDcXunxt2CRsWcl%2FxaHL1N8DWdvnJSZXl9XEEqAYzBR35lm8k5oHi3OXehxVYhyyAsmv0uajtmn8brCNYdlOu4Kby%2Bb33PYNlY%2BcNSp328u1eT3gb14ZoaCNJdBwRDEZiV33aZxAQImi0QrmzmB8h9cMmZBGcAy1kVp%2Ba1y%2BTzka8tmphtJCqCl%2BpLbwDe7yIVUE7o%2FBz%2BFGSTu8N93TNfBUSY3HacNBUzQ2eCBqePxfBN66xn7zcD7hrKPAzNCBC8AAfa%2FDLvNb2%2BdpV0NgV7t0x7zLSgLBPPmjly2nO%2FkllJwecQjXf7mBJHm2Nq6U2nI1q%2BOkdn5bxfa7ggcjvTpIJtEK7XWgvXJGlCv5AayeqTtIOj0XtkhZIbM2YdfKXT5zR1cHesm2iqC17b%2B6e5thQMUEKOMowvYKOvQY6pgE%2BWAlBrTwGHjAWKsOB%2BKfNODicn3zLBPs4%2FAjz9HR0nY3xbsP3lKt%2B1b0rHm%2BiCN1MAznwJOwe6CJyTNIhZDp%2FQOsm4v6YUAHK2%2FDHLLmujp04OHNBKU6ImzUdnvPzYmqL9xnLgd2TT%2FZXoXh6t1KnlKEQu2XdaVzw2uCHO27gCcvwABe5Id1znyUV%2FUxBTsHaCCSBaESO9%2BajVOhZegGXPSkh3Aa4&X-Amz-Signature=1a9fb7beb175fe0d206316cd137b2115f33b202987e4252704ff6c17a027add7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4GPZIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBoSse4VYD2KX37HdR5lN5O3ngOoXGAA2pen9%2BL0D9TkAiAtPDa%2FUB3KB6gWzx5s7ba4ERIDY%2FVZUYBcoZCR67ilzir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMyvdYoeZXsTEjfKe%2BKtwDSkl06Axn1Ix9Vwl4zJUEsLKykY9Gfxr0mNS21X75pCrqLkDg9z%2FoX8WoOQr9JjkfsslEZwRY%2BQVZ8Dh%2FBjz6g5%2FdK2Dq%2FScyby8qobNL6pIj%2BTUX5VVYqLvDhC2eP723w5xEGlvKrLmNkHZf0Bw3uNRt4OM32LT%2Fmt%2F1FnrnZXjh3RSrq2Pqo8ohZrXSo7G4lJai1I0Pp%2BmMVGxjxj07iu%2FXfDhTDcXunxt2CRsWcl%2FxaHL1N8DWdvnJSZXl9XEEqAYzBR35lm8k5oHi3OXehxVYhyyAsmv0uajtmn8brCNYdlOu4Kby%2Bb33PYNlY%2BcNSp328u1eT3gb14ZoaCNJdBwRDEZiV33aZxAQImi0QrmzmB8h9cMmZBGcAy1kVp%2Ba1y%2BTzka8tmphtJCqCl%2BpLbwDe7yIVUE7o%2FBz%2BFGSTu8N93TNfBUSY3HacNBUzQ2eCBqePxfBN66xn7zcD7hrKPAzNCBC8AAfa%2FDLvNb2%2BdpV0NgV7t0x7zLSgLBPPmjly2nO%2FkllJwecQjXf7mBJHm2Nq6U2nI1q%2BOkdn5bxfa7ggcjvTpIJtEK7XWgvXJGlCv5AayeqTtIOj0XtkhZIbM2YdfKXT5zR1cHesm2iqC17b%2B6e5thQMUEKOMowvYKOvQY6pgE%2BWAlBrTwGHjAWKsOB%2BKfNODicn3zLBPs4%2FAjz9HR0nY3xbsP3lKt%2B1b0rHm%2BiCN1MAznwJOwe6CJyTNIhZDp%2FQOsm4v6YUAHK2%2FDHLLmujp04OHNBKU6ImzUdnvPzYmqL9xnLgd2TT%2FZXoXh6t1KnlKEQu2XdaVzw2uCHO27gCcvwABe5Id1znyUV%2FUxBTsHaCCSBaESO9%2BajVOhZegGXPSkh3Aa4&X-Amz-Signature=89b0bf1388dd9566d245e69ee67addf693db0d54d2e4c06116761fe96f2c1108&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4GPZIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBoSse4VYD2KX37HdR5lN5O3ngOoXGAA2pen9%2BL0D9TkAiAtPDa%2FUB3KB6gWzx5s7ba4ERIDY%2FVZUYBcoZCR67ilzir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMyvdYoeZXsTEjfKe%2BKtwDSkl06Axn1Ix9Vwl4zJUEsLKykY9Gfxr0mNS21X75pCrqLkDg9z%2FoX8WoOQr9JjkfsslEZwRY%2BQVZ8Dh%2FBjz6g5%2FdK2Dq%2FScyby8qobNL6pIj%2BTUX5VVYqLvDhC2eP723w5xEGlvKrLmNkHZf0Bw3uNRt4OM32LT%2Fmt%2F1FnrnZXjh3RSrq2Pqo8ohZrXSo7G4lJai1I0Pp%2BmMVGxjxj07iu%2FXfDhTDcXunxt2CRsWcl%2FxaHL1N8DWdvnJSZXl9XEEqAYzBR35lm8k5oHi3OXehxVYhyyAsmv0uajtmn8brCNYdlOu4Kby%2Bb33PYNlY%2BcNSp328u1eT3gb14ZoaCNJdBwRDEZiV33aZxAQImi0QrmzmB8h9cMmZBGcAy1kVp%2Ba1y%2BTzka8tmphtJCqCl%2BpLbwDe7yIVUE7o%2FBz%2BFGSTu8N93TNfBUSY3HacNBUzQ2eCBqePxfBN66xn7zcD7hrKPAzNCBC8AAfa%2FDLvNb2%2BdpV0NgV7t0x7zLSgLBPPmjly2nO%2FkllJwecQjXf7mBJHm2Nq6U2nI1q%2BOkdn5bxfa7ggcjvTpIJtEK7XWgvXJGlCv5AayeqTtIOj0XtkhZIbM2YdfKXT5zR1cHesm2iqC17b%2B6e5thQMUEKOMowvYKOvQY6pgE%2BWAlBrTwGHjAWKsOB%2BKfNODicn3zLBPs4%2FAjz9HR0nY3xbsP3lKt%2B1b0rHm%2BiCN1MAznwJOwe6CJyTNIhZDp%2FQOsm4v6YUAHK2%2FDHLLmujp04OHNBKU6ImzUdnvPzYmqL9xnLgd2TT%2FZXoXh6t1KnlKEQu2XdaVzw2uCHO27gCcvwABe5Id1znyUV%2FUxBTsHaCCSBaESO9%2BajVOhZegGXPSkh3Aa4&X-Amz-Signature=600f43999b6653fc4b4ea40812343fb502b8924f87a606507eaec11f3214ea35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4GPZIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBoSse4VYD2KX37HdR5lN5O3ngOoXGAA2pen9%2BL0D9TkAiAtPDa%2FUB3KB6gWzx5s7ba4ERIDY%2FVZUYBcoZCR67ilzir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMyvdYoeZXsTEjfKe%2BKtwDSkl06Axn1Ix9Vwl4zJUEsLKykY9Gfxr0mNS21X75pCrqLkDg9z%2FoX8WoOQr9JjkfsslEZwRY%2BQVZ8Dh%2FBjz6g5%2FdK2Dq%2FScyby8qobNL6pIj%2BTUX5VVYqLvDhC2eP723w5xEGlvKrLmNkHZf0Bw3uNRt4OM32LT%2Fmt%2F1FnrnZXjh3RSrq2Pqo8ohZrXSo7G4lJai1I0Pp%2BmMVGxjxj07iu%2FXfDhTDcXunxt2CRsWcl%2FxaHL1N8DWdvnJSZXl9XEEqAYzBR35lm8k5oHi3OXehxVYhyyAsmv0uajtmn8brCNYdlOu4Kby%2Bb33PYNlY%2BcNSp328u1eT3gb14ZoaCNJdBwRDEZiV33aZxAQImi0QrmzmB8h9cMmZBGcAy1kVp%2Ba1y%2BTzka8tmphtJCqCl%2BpLbwDe7yIVUE7o%2FBz%2BFGSTu8N93TNfBUSY3HacNBUzQ2eCBqePxfBN66xn7zcD7hrKPAzNCBC8AAfa%2FDLvNb2%2BdpV0NgV7t0x7zLSgLBPPmjly2nO%2FkllJwecQjXf7mBJHm2Nq6U2nI1q%2BOkdn5bxfa7ggcjvTpIJtEK7XWgvXJGlCv5AayeqTtIOj0XtkhZIbM2YdfKXT5zR1cHesm2iqC17b%2B6e5thQMUEKOMowvYKOvQY6pgE%2BWAlBrTwGHjAWKsOB%2BKfNODicn3zLBPs4%2FAjz9HR0nY3xbsP3lKt%2B1b0rHm%2BiCN1MAznwJOwe6CJyTNIhZDp%2FQOsm4v6YUAHK2%2FDHLLmujp04OHNBKU6ImzUdnvPzYmqL9xnLgd2TT%2FZXoXh6t1KnlKEQu2XdaVzw2uCHO27gCcvwABe5Id1znyUV%2FUxBTsHaCCSBaESO9%2BajVOhZegGXPSkh3Aa4&X-Amz-Signature=2c7d1eff0d7b8f2e79b22d13938055bcc3b1ee3abbeec0043b0bd9071a1d92ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4GPZIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBoSse4VYD2KX37HdR5lN5O3ngOoXGAA2pen9%2BL0D9TkAiAtPDa%2FUB3KB6gWzx5s7ba4ERIDY%2FVZUYBcoZCR67ilzir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMyvdYoeZXsTEjfKe%2BKtwDSkl06Axn1Ix9Vwl4zJUEsLKykY9Gfxr0mNS21X75pCrqLkDg9z%2FoX8WoOQr9JjkfsslEZwRY%2BQVZ8Dh%2FBjz6g5%2FdK2Dq%2FScyby8qobNL6pIj%2BTUX5VVYqLvDhC2eP723w5xEGlvKrLmNkHZf0Bw3uNRt4OM32LT%2Fmt%2F1FnrnZXjh3RSrq2Pqo8ohZrXSo7G4lJai1I0Pp%2BmMVGxjxj07iu%2FXfDhTDcXunxt2CRsWcl%2FxaHL1N8DWdvnJSZXl9XEEqAYzBR35lm8k5oHi3OXehxVYhyyAsmv0uajtmn8brCNYdlOu4Kby%2Bb33PYNlY%2BcNSp328u1eT3gb14ZoaCNJdBwRDEZiV33aZxAQImi0QrmzmB8h9cMmZBGcAy1kVp%2Ba1y%2BTzka8tmphtJCqCl%2BpLbwDe7yIVUE7o%2FBz%2BFGSTu8N93TNfBUSY3HacNBUzQ2eCBqePxfBN66xn7zcD7hrKPAzNCBC8AAfa%2FDLvNb2%2BdpV0NgV7t0x7zLSgLBPPmjly2nO%2FkllJwecQjXf7mBJHm2Nq6U2nI1q%2BOkdn5bxfa7ggcjvTpIJtEK7XWgvXJGlCv5AayeqTtIOj0XtkhZIbM2YdfKXT5zR1cHesm2iqC17b%2B6e5thQMUEKOMowvYKOvQY6pgE%2BWAlBrTwGHjAWKsOB%2BKfNODicn3zLBPs4%2FAjz9HR0nY3xbsP3lKt%2B1b0rHm%2BiCN1MAznwJOwe6CJyTNIhZDp%2FQOsm4v6YUAHK2%2FDHLLmujp04OHNBKU6ImzUdnvPzYmqL9xnLgd2TT%2FZXoXh6t1KnlKEQu2XdaVzw2uCHO27gCcvwABe5Id1znyUV%2FUxBTsHaCCSBaESO9%2BajVOhZegGXPSkh3Aa4&X-Amz-Signature=b85dca5ceefe52ba3d2a7d9d59ed91774308c9d532f304827514084f67b96523&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4GPZIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBoSse4VYD2KX37HdR5lN5O3ngOoXGAA2pen9%2BL0D9TkAiAtPDa%2FUB3KB6gWzx5s7ba4ERIDY%2FVZUYBcoZCR67ilzir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMyvdYoeZXsTEjfKe%2BKtwDSkl06Axn1Ix9Vwl4zJUEsLKykY9Gfxr0mNS21X75pCrqLkDg9z%2FoX8WoOQr9JjkfsslEZwRY%2BQVZ8Dh%2FBjz6g5%2FdK2Dq%2FScyby8qobNL6pIj%2BTUX5VVYqLvDhC2eP723w5xEGlvKrLmNkHZf0Bw3uNRt4OM32LT%2Fmt%2F1FnrnZXjh3RSrq2Pqo8ohZrXSo7G4lJai1I0Pp%2BmMVGxjxj07iu%2FXfDhTDcXunxt2CRsWcl%2FxaHL1N8DWdvnJSZXl9XEEqAYzBR35lm8k5oHi3OXehxVYhyyAsmv0uajtmn8brCNYdlOu4Kby%2Bb33PYNlY%2BcNSp328u1eT3gb14ZoaCNJdBwRDEZiV33aZxAQImi0QrmzmB8h9cMmZBGcAy1kVp%2Ba1y%2BTzka8tmphtJCqCl%2BpLbwDe7yIVUE7o%2FBz%2BFGSTu8N93TNfBUSY3HacNBUzQ2eCBqePxfBN66xn7zcD7hrKPAzNCBC8AAfa%2FDLvNb2%2BdpV0NgV7t0x7zLSgLBPPmjly2nO%2FkllJwecQjXf7mBJHm2Nq6U2nI1q%2BOkdn5bxfa7ggcjvTpIJtEK7XWgvXJGlCv5AayeqTtIOj0XtkhZIbM2YdfKXT5zR1cHesm2iqC17b%2B6e5thQMUEKOMowvYKOvQY6pgE%2BWAlBrTwGHjAWKsOB%2BKfNODicn3zLBPs4%2FAjz9HR0nY3xbsP3lKt%2B1b0rHm%2BiCN1MAznwJOwe6CJyTNIhZDp%2FQOsm4v6YUAHK2%2FDHLLmujp04OHNBKU6ImzUdnvPzYmqL9xnLgd2TT%2FZXoXh6t1KnlKEQu2XdaVzw2uCHO27gCcvwABe5Id1znyUV%2FUxBTsHaCCSBaESO9%2BajVOhZegGXPSkh3Aa4&X-Amz-Signature=8f6a51afde5440de8fbe7536cf63655b8f52922e40fe5d173abf28aa9f08f6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC4GPZIU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIBoSse4VYD2KX37HdR5lN5O3ngOoXGAA2pen9%2BL0D9TkAiAtPDa%2FUB3KB6gWzx5s7ba4ERIDY%2FVZUYBcoZCR67ilzir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMyvdYoeZXsTEjfKe%2BKtwDSkl06Axn1Ix9Vwl4zJUEsLKykY9Gfxr0mNS21X75pCrqLkDg9z%2FoX8WoOQr9JjkfsslEZwRY%2BQVZ8Dh%2FBjz6g5%2FdK2Dq%2FScyby8qobNL6pIj%2BTUX5VVYqLvDhC2eP723w5xEGlvKrLmNkHZf0Bw3uNRt4OM32LT%2Fmt%2F1FnrnZXjh3RSrq2Pqo8ohZrXSo7G4lJai1I0Pp%2BmMVGxjxj07iu%2FXfDhTDcXunxt2CRsWcl%2FxaHL1N8DWdvnJSZXl9XEEqAYzBR35lm8k5oHi3OXehxVYhyyAsmv0uajtmn8brCNYdlOu4Kby%2Bb33PYNlY%2BcNSp328u1eT3gb14ZoaCNJdBwRDEZiV33aZxAQImi0QrmzmB8h9cMmZBGcAy1kVp%2Ba1y%2BTzka8tmphtJCqCl%2BpLbwDe7yIVUE7o%2FBz%2BFGSTu8N93TNfBUSY3HacNBUzQ2eCBqePxfBN66xn7zcD7hrKPAzNCBC8AAfa%2FDLvNb2%2BdpV0NgV7t0x7zLSgLBPPmjly2nO%2FkllJwecQjXf7mBJHm2Nq6U2nI1q%2BOkdn5bxfa7ggcjvTpIJtEK7XWgvXJGlCv5AayeqTtIOj0XtkhZIbM2YdfKXT5zR1cHesm2iqC17b%2B6e5thQMUEKOMowvYKOvQY6pgE%2BWAlBrTwGHjAWKsOB%2BKfNODicn3zLBPs4%2FAjz9HR0nY3xbsP3lKt%2B1b0rHm%2BiCN1MAznwJOwe6CJyTNIhZDp%2FQOsm4v6YUAHK2%2FDHLLmujp04OHNBKU6ImzUdnvPzYmqL9xnLgd2TT%2FZXoXh6t1KnlKEQu2XdaVzw2uCHO27gCcvwABe5Id1znyUV%2FUxBTsHaCCSBaESO9%2BajVOhZegGXPSkh3Aa4&X-Amz-Signature=b37a721a8bd559fe29fc99ae2dc7e443f27443bcc8167196b0b908fdcf3799b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
