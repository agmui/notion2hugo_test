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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WZRWWY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEu1sMOFa9lcC4ZbkKhmRDtGBYQ1Y4i1ez4qK0F6ieCAIgcpC7PjdMOoz3Lj7hRd3rib%2BzWSUTxPHCkvc5HWV0lZAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0tNqknQYcoVzjd3SrcA31UBoRcOxZNMM4MBPD0%2FdHvDNfWIkehnLYU3Gh0M0hFDQc0jAMiC5T1HA%2FEoQYW9P1JVHzAzAIpGi%2FMAOrj2YH7l6PEOjpSPbP8X2n8hCcyljMOF0H4DhfzuSMaIxMoz29ZCh%2FjyxaXfzbUcBvJqsVC9SXVrg%2FQXqVGq5usfNjPReSGJvvqTrWTzNqxt7Ed1xZDp%2FZJwfKrzM8uC25VfWQvLB3FKraQkoAOONjvCEaVan6q3iQuntABrRrEH%2BY9HDgU0F0tXMuFJCxkWI4n5wAHTdH0Mh1R8H%2BwdXq1T3gaeyJhB%2Bii9176%2FvL%2Fp%2FNLmR1POPf4SbTwMH%2FtnEfxjThUf98%2FHSTt4qk7wWAnCitkUzAQRk9NvN6dqZZaXh4WjIyKtFZ1o%2BgU6McAVZCq7FcWjnB4KthIJd%2BmXcb2fkMy9qfC%2FAm3MLTG2iMT55DV7aGmbefgE5RnSvZL2n14c3PypohWVXd%2FU5ge34Sq7hgsKxxlXJruJLMywhndmxTCoStdipCFBII7wZ%2B3V%2FXkyuleoL1pEVy67Uv43sYEPJC73BM5fi63C3XCbrdyLvOfokFfQbGXLpPBeK94jpJXltb%2F8VtQk3VxNjGxjuJi0s3pDjSt2cq%2F%2FJtmeDcnMMCGnb0GOqUBNMOcuNH6UUfWqnRPO9R3n9GDklO70u8yppuGqJFMcKVhJwIPelo6WY8Ofl%2BQTRIA3k5K7J0TfgBN4iuHuheFTeG8bbo3uP2kO325%2FoSd7NtQQ2eserVS0zaqP8ZgzuvzVwFpwXfeKNfDe7JWdLYpd8R5c0Ik76Zs9dk17xpjBIxBpvJSpFbCfzkeHLRZq2kqVJNIWwKniuaQBrFWDOm%2F6G0FmBA5&X-Amz-Signature=9d8ddea95d5df061abce70d3092cc6eeb0b825d796ac2dbcc6df3106fb704717&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WZRWWY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEu1sMOFa9lcC4ZbkKhmRDtGBYQ1Y4i1ez4qK0F6ieCAIgcpC7PjdMOoz3Lj7hRd3rib%2BzWSUTxPHCkvc5HWV0lZAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0tNqknQYcoVzjd3SrcA31UBoRcOxZNMM4MBPD0%2FdHvDNfWIkehnLYU3Gh0M0hFDQc0jAMiC5T1HA%2FEoQYW9P1JVHzAzAIpGi%2FMAOrj2YH7l6PEOjpSPbP8X2n8hCcyljMOF0H4DhfzuSMaIxMoz29ZCh%2FjyxaXfzbUcBvJqsVC9SXVrg%2FQXqVGq5usfNjPReSGJvvqTrWTzNqxt7Ed1xZDp%2FZJwfKrzM8uC25VfWQvLB3FKraQkoAOONjvCEaVan6q3iQuntABrRrEH%2BY9HDgU0F0tXMuFJCxkWI4n5wAHTdH0Mh1R8H%2BwdXq1T3gaeyJhB%2Bii9176%2FvL%2Fp%2FNLmR1POPf4SbTwMH%2FtnEfxjThUf98%2FHSTt4qk7wWAnCitkUzAQRk9NvN6dqZZaXh4WjIyKtFZ1o%2BgU6McAVZCq7FcWjnB4KthIJd%2BmXcb2fkMy9qfC%2FAm3MLTG2iMT55DV7aGmbefgE5RnSvZL2n14c3PypohWVXd%2FU5ge34Sq7hgsKxxlXJruJLMywhndmxTCoStdipCFBII7wZ%2B3V%2FXkyuleoL1pEVy67Uv43sYEPJC73BM5fi63C3XCbrdyLvOfokFfQbGXLpPBeK94jpJXltb%2F8VtQk3VxNjGxjuJi0s3pDjSt2cq%2F%2FJtmeDcnMMCGnb0GOqUBNMOcuNH6UUfWqnRPO9R3n9GDklO70u8yppuGqJFMcKVhJwIPelo6WY8Ofl%2BQTRIA3k5K7J0TfgBN4iuHuheFTeG8bbo3uP2kO325%2FoSd7NtQQ2eserVS0zaqP8ZgzuvzVwFpwXfeKNfDe7JWdLYpd8R5c0Ik76Zs9dk17xpjBIxBpvJSpFbCfzkeHLRZq2kqVJNIWwKniuaQBrFWDOm%2F6G0FmBA5&X-Amz-Signature=62340dbd7c77d53e1ec661894c4fb328277e635fc7a96fe09743dce6d90a3313&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WZRWWY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEu1sMOFa9lcC4ZbkKhmRDtGBYQ1Y4i1ez4qK0F6ieCAIgcpC7PjdMOoz3Lj7hRd3rib%2BzWSUTxPHCkvc5HWV0lZAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0tNqknQYcoVzjd3SrcA31UBoRcOxZNMM4MBPD0%2FdHvDNfWIkehnLYU3Gh0M0hFDQc0jAMiC5T1HA%2FEoQYW9P1JVHzAzAIpGi%2FMAOrj2YH7l6PEOjpSPbP8X2n8hCcyljMOF0H4DhfzuSMaIxMoz29ZCh%2FjyxaXfzbUcBvJqsVC9SXVrg%2FQXqVGq5usfNjPReSGJvvqTrWTzNqxt7Ed1xZDp%2FZJwfKrzM8uC25VfWQvLB3FKraQkoAOONjvCEaVan6q3iQuntABrRrEH%2BY9HDgU0F0tXMuFJCxkWI4n5wAHTdH0Mh1R8H%2BwdXq1T3gaeyJhB%2Bii9176%2FvL%2Fp%2FNLmR1POPf4SbTwMH%2FtnEfxjThUf98%2FHSTt4qk7wWAnCitkUzAQRk9NvN6dqZZaXh4WjIyKtFZ1o%2BgU6McAVZCq7FcWjnB4KthIJd%2BmXcb2fkMy9qfC%2FAm3MLTG2iMT55DV7aGmbefgE5RnSvZL2n14c3PypohWVXd%2FU5ge34Sq7hgsKxxlXJruJLMywhndmxTCoStdipCFBII7wZ%2B3V%2FXkyuleoL1pEVy67Uv43sYEPJC73BM5fi63C3XCbrdyLvOfokFfQbGXLpPBeK94jpJXltb%2F8VtQk3VxNjGxjuJi0s3pDjSt2cq%2F%2FJtmeDcnMMCGnb0GOqUBNMOcuNH6UUfWqnRPO9R3n9GDklO70u8yppuGqJFMcKVhJwIPelo6WY8Ofl%2BQTRIA3k5K7J0TfgBN4iuHuheFTeG8bbo3uP2kO325%2FoSd7NtQQ2eserVS0zaqP8ZgzuvzVwFpwXfeKNfDe7JWdLYpd8R5c0Ik76Zs9dk17xpjBIxBpvJSpFbCfzkeHLRZq2kqVJNIWwKniuaQBrFWDOm%2F6G0FmBA5&X-Amz-Signature=b6683c6289e17aefdf2e30a4d1d326cb98c0e31832cf73ff7744d8021e7ebf94&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WZRWWY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEu1sMOFa9lcC4ZbkKhmRDtGBYQ1Y4i1ez4qK0F6ieCAIgcpC7PjdMOoz3Lj7hRd3rib%2BzWSUTxPHCkvc5HWV0lZAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0tNqknQYcoVzjd3SrcA31UBoRcOxZNMM4MBPD0%2FdHvDNfWIkehnLYU3Gh0M0hFDQc0jAMiC5T1HA%2FEoQYW9P1JVHzAzAIpGi%2FMAOrj2YH7l6PEOjpSPbP8X2n8hCcyljMOF0H4DhfzuSMaIxMoz29ZCh%2FjyxaXfzbUcBvJqsVC9SXVrg%2FQXqVGq5usfNjPReSGJvvqTrWTzNqxt7Ed1xZDp%2FZJwfKrzM8uC25VfWQvLB3FKraQkoAOONjvCEaVan6q3iQuntABrRrEH%2BY9HDgU0F0tXMuFJCxkWI4n5wAHTdH0Mh1R8H%2BwdXq1T3gaeyJhB%2Bii9176%2FvL%2Fp%2FNLmR1POPf4SbTwMH%2FtnEfxjThUf98%2FHSTt4qk7wWAnCitkUzAQRk9NvN6dqZZaXh4WjIyKtFZ1o%2BgU6McAVZCq7FcWjnB4KthIJd%2BmXcb2fkMy9qfC%2FAm3MLTG2iMT55DV7aGmbefgE5RnSvZL2n14c3PypohWVXd%2FU5ge34Sq7hgsKxxlXJruJLMywhndmxTCoStdipCFBII7wZ%2B3V%2FXkyuleoL1pEVy67Uv43sYEPJC73BM5fi63C3XCbrdyLvOfokFfQbGXLpPBeK94jpJXltb%2F8VtQk3VxNjGxjuJi0s3pDjSt2cq%2F%2FJtmeDcnMMCGnb0GOqUBNMOcuNH6UUfWqnRPO9R3n9GDklO70u8yppuGqJFMcKVhJwIPelo6WY8Ofl%2BQTRIA3k5K7J0TfgBN4iuHuheFTeG8bbo3uP2kO325%2FoSd7NtQQ2eserVS0zaqP8ZgzuvzVwFpwXfeKNfDe7JWdLYpd8R5c0Ik76Zs9dk17xpjBIxBpvJSpFbCfzkeHLRZq2kqVJNIWwKniuaQBrFWDOm%2F6G0FmBA5&X-Amz-Signature=1d1b11174acde6c78f3456e4447a009d91b520834a57a54711f66a81caa3474d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WZRWWY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEu1sMOFa9lcC4ZbkKhmRDtGBYQ1Y4i1ez4qK0F6ieCAIgcpC7PjdMOoz3Lj7hRd3rib%2BzWSUTxPHCkvc5HWV0lZAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0tNqknQYcoVzjd3SrcA31UBoRcOxZNMM4MBPD0%2FdHvDNfWIkehnLYU3Gh0M0hFDQc0jAMiC5T1HA%2FEoQYW9P1JVHzAzAIpGi%2FMAOrj2YH7l6PEOjpSPbP8X2n8hCcyljMOF0H4DhfzuSMaIxMoz29ZCh%2FjyxaXfzbUcBvJqsVC9SXVrg%2FQXqVGq5usfNjPReSGJvvqTrWTzNqxt7Ed1xZDp%2FZJwfKrzM8uC25VfWQvLB3FKraQkoAOONjvCEaVan6q3iQuntABrRrEH%2BY9HDgU0F0tXMuFJCxkWI4n5wAHTdH0Mh1R8H%2BwdXq1T3gaeyJhB%2Bii9176%2FvL%2Fp%2FNLmR1POPf4SbTwMH%2FtnEfxjThUf98%2FHSTt4qk7wWAnCitkUzAQRk9NvN6dqZZaXh4WjIyKtFZ1o%2BgU6McAVZCq7FcWjnB4KthIJd%2BmXcb2fkMy9qfC%2FAm3MLTG2iMT55DV7aGmbefgE5RnSvZL2n14c3PypohWVXd%2FU5ge34Sq7hgsKxxlXJruJLMywhndmxTCoStdipCFBII7wZ%2B3V%2FXkyuleoL1pEVy67Uv43sYEPJC73BM5fi63C3XCbrdyLvOfokFfQbGXLpPBeK94jpJXltb%2F8VtQk3VxNjGxjuJi0s3pDjSt2cq%2F%2FJtmeDcnMMCGnb0GOqUBNMOcuNH6UUfWqnRPO9R3n9GDklO70u8yppuGqJFMcKVhJwIPelo6WY8Ofl%2BQTRIA3k5K7J0TfgBN4iuHuheFTeG8bbo3uP2kO325%2FoSd7NtQQ2eserVS0zaqP8ZgzuvzVwFpwXfeKNfDe7JWdLYpd8R5c0Ik76Zs9dk17xpjBIxBpvJSpFbCfzkeHLRZq2kqVJNIWwKniuaQBrFWDOm%2F6G0FmBA5&X-Amz-Signature=6299c7066227d997465e0dc74ab9c4ce643a15f9b00f36e5432dae2a3ed61890&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WZRWWY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEu1sMOFa9lcC4ZbkKhmRDtGBYQ1Y4i1ez4qK0F6ieCAIgcpC7PjdMOoz3Lj7hRd3rib%2BzWSUTxPHCkvc5HWV0lZAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0tNqknQYcoVzjd3SrcA31UBoRcOxZNMM4MBPD0%2FdHvDNfWIkehnLYU3Gh0M0hFDQc0jAMiC5T1HA%2FEoQYW9P1JVHzAzAIpGi%2FMAOrj2YH7l6PEOjpSPbP8X2n8hCcyljMOF0H4DhfzuSMaIxMoz29ZCh%2FjyxaXfzbUcBvJqsVC9SXVrg%2FQXqVGq5usfNjPReSGJvvqTrWTzNqxt7Ed1xZDp%2FZJwfKrzM8uC25VfWQvLB3FKraQkoAOONjvCEaVan6q3iQuntABrRrEH%2BY9HDgU0F0tXMuFJCxkWI4n5wAHTdH0Mh1R8H%2BwdXq1T3gaeyJhB%2Bii9176%2FvL%2Fp%2FNLmR1POPf4SbTwMH%2FtnEfxjThUf98%2FHSTt4qk7wWAnCitkUzAQRk9NvN6dqZZaXh4WjIyKtFZ1o%2BgU6McAVZCq7FcWjnB4KthIJd%2BmXcb2fkMy9qfC%2FAm3MLTG2iMT55DV7aGmbefgE5RnSvZL2n14c3PypohWVXd%2FU5ge34Sq7hgsKxxlXJruJLMywhndmxTCoStdipCFBII7wZ%2B3V%2FXkyuleoL1pEVy67Uv43sYEPJC73BM5fi63C3XCbrdyLvOfokFfQbGXLpPBeK94jpJXltb%2F8VtQk3VxNjGxjuJi0s3pDjSt2cq%2F%2FJtmeDcnMMCGnb0GOqUBNMOcuNH6UUfWqnRPO9R3n9GDklO70u8yppuGqJFMcKVhJwIPelo6WY8Ofl%2BQTRIA3k5K7J0TfgBN4iuHuheFTeG8bbo3uP2kO325%2FoSd7NtQQ2eserVS0zaqP8ZgzuvzVwFpwXfeKNfDe7JWdLYpd8R5c0Ik76Zs9dk17xpjBIxBpvJSpFbCfzkeHLRZq2kqVJNIWwKniuaQBrFWDOm%2F6G0FmBA5&X-Amz-Signature=fa395b13d4c7a9643bf49b089b1108fbc2aac88e5ba2d87d0b7a916a8bbc8720&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WZRWWY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEu1sMOFa9lcC4ZbkKhmRDtGBYQ1Y4i1ez4qK0F6ieCAIgcpC7PjdMOoz3Lj7hRd3rib%2BzWSUTxPHCkvc5HWV0lZAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0tNqknQYcoVzjd3SrcA31UBoRcOxZNMM4MBPD0%2FdHvDNfWIkehnLYU3Gh0M0hFDQc0jAMiC5T1HA%2FEoQYW9P1JVHzAzAIpGi%2FMAOrj2YH7l6PEOjpSPbP8X2n8hCcyljMOF0H4DhfzuSMaIxMoz29ZCh%2FjyxaXfzbUcBvJqsVC9SXVrg%2FQXqVGq5usfNjPReSGJvvqTrWTzNqxt7Ed1xZDp%2FZJwfKrzM8uC25VfWQvLB3FKraQkoAOONjvCEaVan6q3iQuntABrRrEH%2BY9HDgU0F0tXMuFJCxkWI4n5wAHTdH0Mh1R8H%2BwdXq1T3gaeyJhB%2Bii9176%2FvL%2Fp%2FNLmR1POPf4SbTwMH%2FtnEfxjThUf98%2FHSTt4qk7wWAnCitkUzAQRk9NvN6dqZZaXh4WjIyKtFZ1o%2BgU6McAVZCq7FcWjnB4KthIJd%2BmXcb2fkMy9qfC%2FAm3MLTG2iMT55DV7aGmbefgE5RnSvZL2n14c3PypohWVXd%2FU5ge34Sq7hgsKxxlXJruJLMywhndmxTCoStdipCFBII7wZ%2B3V%2FXkyuleoL1pEVy67Uv43sYEPJC73BM5fi63C3XCbrdyLvOfokFfQbGXLpPBeK94jpJXltb%2F8VtQk3VxNjGxjuJi0s3pDjSt2cq%2F%2FJtmeDcnMMCGnb0GOqUBNMOcuNH6UUfWqnRPO9R3n9GDklO70u8yppuGqJFMcKVhJwIPelo6WY8Ofl%2BQTRIA3k5K7J0TfgBN4iuHuheFTeG8bbo3uP2kO325%2FoSd7NtQQ2eserVS0zaqP8ZgzuvzVwFpwXfeKNfDe7JWdLYpd8R5c0Ik76Zs9dk17xpjBIxBpvJSpFbCfzkeHLRZq2kqVJNIWwKniuaQBrFWDOm%2F6G0FmBA5&X-Amz-Signature=9231bacc70338384c81aa9d3582945289c65bfa7de507f2b0da2d6fa9c7e3915&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WZRWWY%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCEu1sMOFa9lcC4ZbkKhmRDtGBYQ1Y4i1ez4qK0F6ieCAIgcpC7PjdMOoz3Lj7hRd3rib%2BzWSUTxPHCkvc5HWV0lZAqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0tNqknQYcoVzjd3SrcA31UBoRcOxZNMM4MBPD0%2FdHvDNfWIkehnLYU3Gh0M0hFDQc0jAMiC5T1HA%2FEoQYW9P1JVHzAzAIpGi%2FMAOrj2YH7l6PEOjpSPbP8X2n8hCcyljMOF0H4DhfzuSMaIxMoz29ZCh%2FjyxaXfzbUcBvJqsVC9SXVrg%2FQXqVGq5usfNjPReSGJvvqTrWTzNqxt7Ed1xZDp%2FZJwfKrzM8uC25VfWQvLB3FKraQkoAOONjvCEaVan6q3iQuntABrRrEH%2BY9HDgU0F0tXMuFJCxkWI4n5wAHTdH0Mh1R8H%2BwdXq1T3gaeyJhB%2Bii9176%2FvL%2Fp%2FNLmR1POPf4SbTwMH%2FtnEfxjThUf98%2FHSTt4qk7wWAnCitkUzAQRk9NvN6dqZZaXh4WjIyKtFZ1o%2BgU6McAVZCq7FcWjnB4KthIJd%2BmXcb2fkMy9qfC%2FAm3MLTG2iMT55DV7aGmbefgE5RnSvZL2n14c3PypohWVXd%2FU5ge34Sq7hgsKxxlXJruJLMywhndmxTCoStdipCFBII7wZ%2B3V%2FXkyuleoL1pEVy67Uv43sYEPJC73BM5fi63C3XCbrdyLvOfokFfQbGXLpPBeK94jpJXltb%2F8VtQk3VxNjGxjuJi0s3pDjSt2cq%2F%2FJtmeDcnMMCGnb0GOqUBNMOcuNH6UUfWqnRPO9R3n9GDklO70u8yppuGqJFMcKVhJwIPelo6WY8Ofl%2BQTRIA3k5K7J0TfgBN4iuHuheFTeG8bbo3uP2kO325%2FoSd7NtQQ2eserVS0zaqP8ZgzuvzVwFpwXfeKNfDe7JWdLYpd8R5c0Ik76Zs9dk17xpjBIxBpvJSpFbCfzkeHLRZq2kqVJNIWwKniuaQBrFWDOm%2F6G0FmBA5&X-Amz-Signature=2a8368f147c31d9f9d8cba63d916aeaed05f88f3011ac4916487f50a4d83397b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
