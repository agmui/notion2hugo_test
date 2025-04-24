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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2V6KRC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBdM5hK5%2BD6zvs7KcaFCXIZDDIn4XXGcbG82N3IHahAIgWqYGSp%2Fjj9hzrJpTc9rPdXupdi0v8s%2F7U9ggdAnafk4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDE5Bssn0g07Lc2Av6SrcA3ZBQnZuMeU8NP7EsHiqLM919w1sxkb7gI6ugxnfmsHUqYjaYxOMjx9HqB6XcG2UgNtxeFn%2B7vTMbparZWoCkvgTEXsReTZv4znNmXhLDkYTRHceeqFe6%2Bae5QuaJDHxnzOy1UXHNLJ4kJGyFRTdEyGVwK9lclOyZixfmEA0CFulVHQgSBS50m9mpLP287X2SbWlpZwavId9d2CD6OSUA%2FbWtT%2Bu3aTvrFvzTlYnv%2FtJMQAgn7lP0BXX%2BaR6PsiO0GF3koIpmhBtBBelyn8QP6FpwA3e4E50TFLIgOgxmio0wNfHbEWyylR6FbZ%2BxPpponKzaSLUHc7FPpagDNywEOA%2FUca8UKYaqG11iTDcaQUk5Sl6lFNBgdBZ7ItE5lKs6wD5mC2a2nvYQ3ZckYyZ6feTwXfdeQWxuabxUFx7bALbz%2B%2Fi8RnpSBWDIFz2f023NSoWkwIBuRQemXIJs7QhSKjQh2AiFVrY8tQr22%2Fw1esXhcHVYBLyoD2eQC%2Bjtfw%2FkUzBME5gMMj5jbb%2B3YlHUaNf6%2BnA6y%2BQuqrz8jQBGaoZaM8PM5rxRNKYT%2FTgZwV1ifYNvEbE%2FJSiovy4H5%2BhG8u3GKO9Ggm7GbPX0PUQI%2B2G3fyc5tWz7d5N0MsCMKvbqsAGOqUBIpYqUDGs5ABdd03Z%2BpGt6dzDMPuzJwU5NSyc7HkvG9X1bGqx5jNFzjvqKATzAmgJINcOQiNxeFBdgsNMKtNvGYeL%2B2E8fQt61hRCbutL%2BpnDRqL8TSaJXc%2Bjv9rp0M2RiDat6W1r0c6qZIWxRWvmc%2BOThvjVo9cUycOl0KOIGkUybBvDI0X59pzGE8MrnwxKxzP1IGV%2FZCBlEKIX1Jof5onIhFsf&X-Amz-Signature=5cfbe573c6da1bad3c8bdc510d23104be4eb9e0468cb624a48bd57f4be593dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2V6KRC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBdM5hK5%2BD6zvs7KcaFCXIZDDIn4XXGcbG82N3IHahAIgWqYGSp%2Fjj9hzrJpTc9rPdXupdi0v8s%2F7U9ggdAnafk4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDE5Bssn0g07Lc2Av6SrcA3ZBQnZuMeU8NP7EsHiqLM919w1sxkb7gI6ugxnfmsHUqYjaYxOMjx9HqB6XcG2UgNtxeFn%2B7vTMbparZWoCkvgTEXsReTZv4znNmXhLDkYTRHceeqFe6%2Bae5QuaJDHxnzOy1UXHNLJ4kJGyFRTdEyGVwK9lclOyZixfmEA0CFulVHQgSBS50m9mpLP287X2SbWlpZwavId9d2CD6OSUA%2FbWtT%2Bu3aTvrFvzTlYnv%2FtJMQAgn7lP0BXX%2BaR6PsiO0GF3koIpmhBtBBelyn8QP6FpwA3e4E50TFLIgOgxmio0wNfHbEWyylR6FbZ%2BxPpponKzaSLUHc7FPpagDNywEOA%2FUca8UKYaqG11iTDcaQUk5Sl6lFNBgdBZ7ItE5lKs6wD5mC2a2nvYQ3ZckYyZ6feTwXfdeQWxuabxUFx7bALbz%2B%2Fi8RnpSBWDIFz2f023NSoWkwIBuRQemXIJs7QhSKjQh2AiFVrY8tQr22%2Fw1esXhcHVYBLyoD2eQC%2Bjtfw%2FkUzBME5gMMj5jbb%2B3YlHUaNf6%2BnA6y%2BQuqrz8jQBGaoZaM8PM5rxRNKYT%2FTgZwV1ifYNvEbE%2FJSiovy4H5%2BhG8u3GKO9Ggm7GbPX0PUQI%2B2G3fyc5tWz7d5N0MsCMKvbqsAGOqUBIpYqUDGs5ABdd03Z%2BpGt6dzDMPuzJwU5NSyc7HkvG9X1bGqx5jNFzjvqKATzAmgJINcOQiNxeFBdgsNMKtNvGYeL%2B2E8fQt61hRCbutL%2BpnDRqL8TSaJXc%2Bjv9rp0M2RiDat6W1r0c6qZIWxRWvmc%2BOThvjVo9cUycOl0KOIGkUybBvDI0X59pzGE8MrnwxKxzP1IGV%2FZCBlEKIX1Jof5onIhFsf&X-Amz-Signature=383751d2fdd7bf249c71f5060b8a79f30f8931b6a935f691df44ca111cdbeed6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2V6KRC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBdM5hK5%2BD6zvs7KcaFCXIZDDIn4XXGcbG82N3IHahAIgWqYGSp%2Fjj9hzrJpTc9rPdXupdi0v8s%2F7U9ggdAnafk4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDE5Bssn0g07Lc2Av6SrcA3ZBQnZuMeU8NP7EsHiqLM919w1sxkb7gI6ugxnfmsHUqYjaYxOMjx9HqB6XcG2UgNtxeFn%2B7vTMbparZWoCkvgTEXsReTZv4znNmXhLDkYTRHceeqFe6%2Bae5QuaJDHxnzOy1UXHNLJ4kJGyFRTdEyGVwK9lclOyZixfmEA0CFulVHQgSBS50m9mpLP287X2SbWlpZwavId9d2CD6OSUA%2FbWtT%2Bu3aTvrFvzTlYnv%2FtJMQAgn7lP0BXX%2BaR6PsiO0GF3koIpmhBtBBelyn8QP6FpwA3e4E50TFLIgOgxmio0wNfHbEWyylR6FbZ%2BxPpponKzaSLUHc7FPpagDNywEOA%2FUca8UKYaqG11iTDcaQUk5Sl6lFNBgdBZ7ItE5lKs6wD5mC2a2nvYQ3ZckYyZ6feTwXfdeQWxuabxUFx7bALbz%2B%2Fi8RnpSBWDIFz2f023NSoWkwIBuRQemXIJs7QhSKjQh2AiFVrY8tQr22%2Fw1esXhcHVYBLyoD2eQC%2Bjtfw%2FkUzBME5gMMj5jbb%2B3YlHUaNf6%2BnA6y%2BQuqrz8jQBGaoZaM8PM5rxRNKYT%2FTgZwV1ifYNvEbE%2FJSiovy4H5%2BhG8u3GKO9Ggm7GbPX0PUQI%2B2G3fyc5tWz7d5N0MsCMKvbqsAGOqUBIpYqUDGs5ABdd03Z%2BpGt6dzDMPuzJwU5NSyc7HkvG9X1bGqx5jNFzjvqKATzAmgJINcOQiNxeFBdgsNMKtNvGYeL%2B2E8fQt61hRCbutL%2BpnDRqL8TSaJXc%2Bjv9rp0M2RiDat6W1r0c6qZIWxRWvmc%2BOThvjVo9cUycOl0KOIGkUybBvDI0X59pzGE8MrnwxKxzP1IGV%2FZCBlEKIX1Jof5onIhFsf&X-Amz-Signature=0cee613c1ba115ebf90071e5accc48c9b80680b724a4a73c7e368be703f3fc76&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2V6KRC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBdM5hK5%2BD6zvs7KcaFCXIZDDIn4XXGcbG82N3IHahAIgWqYGSp%2Fjj9hzrJpTc9rPdXupdi0v8s%2F7U9ggdAnafk4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDE5Bssn0g07Lc2Av6SrcA3ZBQnZuMeU8NP7EsHiqLM919w1sxkb7gI6ugxnfmsHUqYjaYxOMjx9HqB6XcG2UgNtxeFn%2B7vTMbparZWoCkvgTEXsReTZv4znNmXhLDkYTRHceeqFe6%2Bae5QuaJDHxnzOy1UXHNLJ4kJGyFRTdEyGVwK9lclOyZixfmEA0CFulVHQgSBS50m9mpLP287X2SbWlpZwavId9d2CD6OSUA%2FbWtT%2Bu3aTvrFvzTlYnv%2FtJMQAgn7lP0BXX%2BaR6PsiO0GF3koIpmhBtBBelyn8QP6FpwA3e4E50TFLIgOgxmio0wNfHbEWyylR6FbZ%2BxPpponKzaSLUHc7FPpagDNywEOA%2FUca8UKYaqG11iTDcaQUk5Sl6lFNBgdBZ7ItE5lKs6wD5mC2a2nvYQ3ZckYyZ6feTwXfdeQWxuabxUFx7bALbz%2B%2Fi8RnpSBWDIFz2f023NSoWkwIBuRQemXIJs7QhSKjQh2AiFVrY8tQr22%2Fw1esXhcHVYBLyoD2eQC%2Bjtfw%2FkUzBME5gMMj5jbb%2B3YlHUaNf6%2BnA6y%2BQuqrz8jQBGaoZaM8PM5rxRNKYT%2FTgZwV1ifYNvEbE%2FJSiovy4H5%2BhG8u3GKO9Ggm7GbPX0PUQI%2B2G3fyc5tWz7d5N0MsCMKvbqsAGOqUBIpYqUDGs5ABdd03Z%2BpGt6dzDMPuzJwU5NSyc7HkvG9X1bGqx5jNFzjvqKATzAmgJINcOQiNxeFBdgsNMKtNvGYeL%2B2E8fQt61hRCbutL%2BpnDRqL8TSaJXc%2Bjv9rp0M2RiDat6W1r0c6qZIWxRWvmc%2BOThvjVo9cUycOl0KOIGkUybBvDI0X59pzGE8MrnwxKxzP1IGV%2FZCBlEKIX1Jof5onIhFsf&X-Amz-Signature=942f502d7687738a89cef37f21d773559690b43472ea7b6007cfe37dc3a0d7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2V6KRC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBdM5hK5%2BD6zvs7KcaFCXIZDDIn4XXGcbG82N3IHahAIgWqYGSp%2Fjj9hzrJpTc9rPdXupdi0v8s%2F7U9ggdAnafk4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDE5Bssn0g07Lc2Av6SrcA3ZBQnZuMeU8NP7EsHiqLM919w1sxkb7gI6ugxnfmsHUqYjaYxOMjx9HqB6XcG2UgNtxeFn%2B7vTMbparZWoCkvgTEXsReTZv4znNmXhLDkYTRHceeqFe6%2Bae5QuaJDHxnzOy1UXHNLJ4kJGyFRTdEyGVwK9lclOyZixfmEA0CFulVHQgSBS50m9mpLP287X2SbWlpZwavId9d2CD6OSUA%2FbWtT%2Bu3aTvrFvzTlYnv%2FtJMQAgn7lP0BXX%2BaR6PsiO0GF3koIpmhBtBBelyn8QP6FpwA3e4E50TFLIgOgxmio0wNfHbEWyylR6FbZ%2BxPpponKzaSLUHc7FPpagDNywEOA%2FUca8UKYaqG11iTDcaQUk5Sl6lFNBgdBZ7ItE5lKs6wD5mC2a2nvYQ3ZckYyZ6feTwXfdeQWxuabxUFx7bALbz%2B%2Fi8RnpSBWDIFz2f023NSoWkwIBuRQemXIJs7QhSKjQh2AiFVrY8tQr22%2Fw1esXhcHVYBLyoD2eQC%2Bjtfw%2FkUzBME5gMMj5jbb%2B3YlHUaNf6%2BnA6y%2BQuqrz8jQBGaoZaM8PM5rxRNKYT%2FTgZwV1ifYNvEbE%2FJSiovy4H5%2BhG8u3GKO9Ggm7GbPX0PUQI%2B2G3fyc5tWz7d5N0MsCMKvbqsAGOqUBIpYqUDGs5ABdd03Z%2BpGt6dzDMPuzJwU5NSyc7HkvG9X1bGqx5jNFzjvqKATzAmgJINcOQiNxeFBdgsNMKtNvGYeL%2B2E8fQt61hRCbutL%2BpnDRqL8TSaJXc%2Bjv9rp0M2RiDat6W1r0c6qZIWxRWvmc%2BOThvjVo9cUycOl0KOIGkUybBvDI0X59pzGE8MrnwxKxzP1IGV%2FZCBlEKIX1Jof5onIhFsf&X-Amz-Signature=a93484dd41973f23c20aa28e182f9368c76b11486c4f9ac20b52edc99aa03bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2V6KRC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBdM5hK5%2BD6zvs7KcaFCXIZDDIn4XXGcbG82N3IHahAIgWqYGSp%2Fjj9hzrJpTc9rPdXupdi0v8s%2F7U9ggdAnafk4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDE5Bssn0g07Lc2Av6SrcA3ZBQnZuMeU8NP7EsHiqLM919w1sxkb7gI6ugxnfmsHUqYjaYxOMjx9HqB6XcG2UgNtxeFn%2B7vTMbparZWoCkvgTEXsReTZv4znNmXhLDkYTRHceeqFe6%2Bae5QuaJDHxnzOy1UXHNLJ4kJGyFRTdEyGVwK9lclOyZixfmEA0CFulVHQgSBS50m9mpLP287X2SbWlpZwavId9d2CD6OSUA%2FbWtT%2Bu3aTvrFvzTlYnv%2FtJMQAgn7lP0BXX%2BaR6PsiO0GF3koIpmhBtBBelyn8QP6FpwA3e4E50TFLIgOgxmio0wNfHbEWyylR6FbZ%2BxPpponKzaSLUHc7FPpagDNywEOA%2FUca8UKYaqG11iTDcaQUk5Sl6lFNBgdBZ7ItE5lKs6wD5mC2a2nvYQ3ZckYyZ6feTwXfdeQWxuabxUFx7bALbz%2B%2Fi8RnpSBWDIFz2f023NSoWkwIBuRQemXIJs7QhSKjQh2AiFVrY8tQr22%2Fw1esXhcHVYBLyoD2eQC%2Bjtfw%2FkUzBME5gMMj5jbb%2B3YlHUaNf6%2BnA6y%2BQuqrz8jQBGaoZaM8PM5rxRNKYT%2FTgZwV1ifYNvEbE%2FJSiovy4H5%2BhG8u3GKO9Ggm7GbPX0PUQI%2B2G3fyc5tWz7d5N0MsCMKvbqsAGOqUBIpYqUDGs5ABdd03Z%2BpGt6dzDMPuzJwU5NSyc7HkvG9X1bGqx5jNFzjvqKATzAmgJINcOQiNxeFBdgsNMKtNvGYeL%2B2E8fQt61hRCbutL%2BpnDRqL8TSaJXc%2Bjv9rp0M2RiDat6W1r0c6qZIWxRWvmc%2BOThvjVo9cUycOl0KOIGkUybBvDI0X59pzGE8MrnwxKxzP1IGV%2FZCBlEKIX1Jof5onIhFsf&X-Amz-Signature=78330ed48bb2447453196772c6149451f7906fc60a1563e3b8b3684175a992e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2V6KRC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBdM5hK5%2BD6zvs7KcaFCXIZDDIn4XXGcbG82N3IHahAIgWqYGSp%2Fjj9hzrJpTc9rPdXupdi0v8s%2F7U9ggdAnafk4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDE5Bssn0g07Lc2Av6SrcA3ZBQnZuMeU8NP7EsHiqLM919w1sxkb7gI6ugxnfmsHUqYjaYxOMjx9HqB6XcG2UgNtxeFn%2B7vTMbparZWoCkvgTEXsReTZv4znNmXhLDkYTRHceeqFe6%2Bae5QuaJDHxnzOy1UXHNLJ4kJGyFRTdEyGVwK9lclOyZixfmEA0CFulVHQgSBS50m9mpLP287X2SbWlpZwavId9d2CD6OSUA%2FbWtT%2Bu3aTvrFvzTlYnv%2FtJMQAgn7lP0BXX%2BaR6PsiO0GF3koIpmhBtBBelyn8QP6FpwA3e4E50TFLIgOgxmio0wNfHbEWyylR6FbZ%2BxPpponKzaSLUHc7FPpagDNywEOA%2FUca8UKYaqG11iTDcaQUk5Sl6lFNBgdBZ7ItE5lKs6wD5mC2a2nvYQ3ZckYyZ6feTwXfdeQWxuabxUFx7bALbz%2B%2Fi8RnpSBWDIFz2f023NSoWkwIBuRQemXIJs7QhSKjQh2AiFVrY8tQr22%2Fw1esXhcHVYBLyoD2eQC%2Bjtfw%2FkUzBME5gMMj5jbb%2B3YlHUaNf6%2BnA6y%2BQuqrz8jQBGaoZaM8PM5rxRNKYT%2FTgZwV1ifYNvEbE%2FJSiovy4H5%2BhG8u3GKO9Ggm7GbPX0PUQI%2B2G3fyc5tWz7d5N0MsCMKvbqsAGOqUBIpYqUDGs5ABdd03Z%2BpGt6dzDMPuzJwU5NSyc7HkvG9X1bGqx5jNFzjvqKATzAmgJINcOQiNxeFBdgsNMKtNvGYeL%2B2E8fQt61hRCbutL%2BpnDRqL8TSaJXc%2Bjv9rp0M2RiDat6W1r0c6qZIWxRWvmc%2BOThvjVo9cUycOl0KOIGkUybBvDI0X59pzGE8MrnwxKxzP1IGV%2FZCBlEKIX1Jof5onIhFsf&X-Amz-Signature=f9d5e1c9de7a0b72fccfc4af34b536aa663b87037bdaa837ac5ce352915334de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2V6KRC%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBdM5hK5%2BD6zvs7KcaFCXIZDDIn4XXGcbG82N3IHahAIgWqYGSp%2Fjj9hzrJpTc9rPdXupdi0v8s%2F7U9ggdAnafk4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDE5Bssn0g07Lc2Av6SrcA3ZBQnZuMeU8NP7EsHiqLM919w1sxkb7gI6ugxnfmsHUqYjaYxOMjx9HqB6XcG2UgNtxeFn%2B7vTMbparZWoCkvgTEXsReTZv4znNmXhLDkYTRHceeqFe6%2Bae5QuaJDHxnzOy1UXHNLJ4kJGyFRTdEyGVwK9lclOyZixfmEA0CFulVHQgSBS50m9mpLP287X2SbWlpZwavId9d2CD6OSUA%2FbWtT%2Bu3aTvrFvzTlYnv%2FtJMQAgn7lP0BXX%2BaR6PsiO0GF3koIpmhBtBBelyn8QP6FpwA3e4E50TFLIgOgxmio0wNfHbEWyylR6FbZ%2BxPpponKzaSLUHc7FPpagDNywEOA%2FUca8UKYaqG11iTDcaQUk5Sl6lFNBgdBZ7ItE5lKs6wD5mC2a2nvYQ3ZckYyZ6feTwXfdeQWxuabxUFx7bALbz%2B%2Fi8RnpSBWDIFz2f023NSoWkwIBuRQemXIJs7QhSKjQh2AiFVrY8tQr22%2Fw1esXhcHVYBLyoD2eQC%2Bjtfw%2FkUzBME5gMMj5jbb%2B3YlHUaNf6%2BnA6y%2BQuqrz8jQBGaoZaM8PM5rxRNKYT%2FTgZwV1ifYNvEbE%2FJSiovy4H5%2BhG8u3GKO9Ggm7GbPX0PUQI%2B2G3fyc5tWz7d5N0MsCMKvbqsAGOqUBIpYqUDGs5ABdd03Z%2BpGt6dzDMPuzJwU5NSyc7HkvG9X1bGqx5jNFzjvqKATzAmgJINcOQiNxeFBdgsNMKtNvGYeL%2B2E8fQt61hRCbutL%2BpnDRqL8TSaJXc%2Bjv9rp0M2RiDat6W1r0c6qZIWxRWvmc%2BOThvjVo9cUycOl0KOIGkUybBvDI0X59pzGE8MrnwxKxzP1IGV%2FZCBlEKIX1Jof5onIhFsf&X-Amz-Signature=d1238a9e69455e72f7d407129b25d56ffaa2e3389c0f347f8a198b88983e004b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
