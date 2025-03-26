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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAF3TLT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FY9IKK1IXM1n8wSiwrIqiDQVeFG%2FOsaXusek0bYS8AAiA01ViABPOytBrOJUSCQgk58s5HVG7R9N5ehDI07dU8vSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8%2FksCYHhDlNxsM2EKtwDo8sRzQjycmdulhwL9%2FNk2FVphkZrppfKh1pFxG2n2NzPpWEULwltLMzgQ%2B1X2BfKe%2BtUf6tWXQyJbVuAtjqgoql68RhMP9mj7huhEXVtQN4PQ1JPzC%2F%2BTV0mXWJqK9rMSIEjE1O8Ua20E5O1fowXqSI4%2FliWYsWQGvOrtipwTrZ1kIF3xI5ZfTbKY0munjIgKsCH1nvXcQmSj3LLm5HjZD4KxP3yptkx5MkN0CZBedFqbWElOYENvtJy1Sh5OfjyNwLUUD6Z3zAvluVV9CZXbDd9f4Kl5uylADPDybHbqdHwKQ%2BXMAqNkxJrDLQe6VWt2OTRFjJIPtZAZ3yx1gsAEoAuYhv1zC9RCLLvcOCFL1sdx8bKm6AwYxjtgzz%2FPRGC%2BzItvvvJ8DE5FynotSomTL0b2vn07YLD3mpaNDFOwa2CC7K3DmsoyIRXAv2oaY5LpJBiFz9xDvznWUBA06UISfYz77BESu4OK4gMB2t8%2F802fY4CUaJBpPQ%2B%2BdGIXQO3rOlsLvaIo2wrFDQ5VOwLVrsNGjYZiGRBwDe1hfMNe9nLwgR4Ry6UVDP0kpFeGnuPMe3%2B%2BYNzItIe96c740cHjybbq1JFxihfuP3pYthWbxc5E2DGDRNeKH23Aigw%2F%2BmNvwY6pgHcVfgj5q6dXJCvINo4TrthCSDxc9relU%2B%2BTLvMFaGT8mLarYw6wF3UKiDNrYNMxR%2Fezmxlng3nTrQHTforTgVxgUqLbcHlTOfu35FQoiZktZN%2F2tWQSX5kuqqxofpc%2FnCbnJ9Ays0%2B3xAdmLl%2FHIgA3a4ocKSDhv%2Fu81dyEdqYh7hc9fHnP92knNXDvL0mVUd2dfVtwQzsR0fYqbZNVZkZzmxMKkYL&X-Amz-Signature=3c5ad8f9acaa1cff6f96992df7ee8e97eb00a31980360737cde3ba99b25148b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAF3TLT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FY9IKK1IXM1n8wSiwrIqiDQVeFG%2FOsaXusek0bYS8AAiA01ViABPOytBrOJUSCQgk58s5HVG7R9N5ehDI07dU8vSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8%2FksCYHhDlNxsM2EKtwDo8sRzQjycmdulhwL9%2FNk2FVphkZrppfKh1pFxG2n2NzPpWEULwltLMzgQ%2B1X2BfKe%2BtUf6tWXQyJbVuAtjqgoql68RhMP9mj7huhEXVtQN4PQ1JPzC%2F%2BTV0mXWJqK9rMSIEjE1O8Ua20E5O1fowXqSI4%2FliWYsWQGvOrtipwTrZ1kIF3xI5ZfTbKY0munjIgKsCH1nvXcQmSj3LLm5HjZD4KxP3yptkx5MkN0CZBedFqbWElOYENvtJy1Sh5OfjyNwLUUD6Z3zAvluVV9CZXbDd9f4Kl5uylADPDybHbqdHwKQ%2BXMAqNkxJrDLQe6VWt2OTRFjJIPtZAZ3yx1gsAEoAuYhv1zC9RCLLvcOCFL1sdx8bKm6AwYxjtgzz%2FPRGC%2BzItvvvJ8DE5FynotSomTL0b2vn07YLD3mpaNDFOwa2CC7K3DmsoyIRXAv2oaY5LpJBiFz9xDvznWUBA06UISfYz77BESu4OK4gMB2t8%2F802fY4CUaJBpPQ%2B%2BdGIXQO3rOlsLvaIo2wrFDQ5VOwLVrsNGjYZiGRBwDe1hfMNe9nLwgR4Ry6UVDP0kpFeGnuPMe3%2B%2BYNzItIe96c740cHjybbq1JFxihfuP3pYthWbxc5E2DGDRNeKH23Aigw%2F%2BmNvwY6pgHcVfgj5q6dXJCvINo4TrthCSDxc9relU%2B%2BTLvMFaGT8mLarYw6wF3UKiDNrYNMxR%2Fezmxlng3nTrQHTforTgVxgUqLbcHlTOfu35FQoiZktZN%2F2tWQSX5kuqqxofpc%2FnCbnJ9Ays0%2B3xAdmLl%2FHIgA3a4ocKSDhv%2Fu81dyEdqYh7hc9fHnP92knNXDvL0mVUd2dfVtwQzsR0fYqbZNVZkZzmxMKkYL&X-Amz-Signature=06161793e11af831c29d2d32d198c4215b915b8c0cd3e1a78cd47624b48ae7df&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAF3TLT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FY9IKK1IXM1n8wSiwrIqiDQVeFG%2FOsaXusek0bYS8AAiA01ViABPOytBrOJUSCQgk58s5HVG7R9N5ehDI07dU8vSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8%2FksCYHhDlNxsM2EKtwDo8sRzQjycmdulhwL9%2FNk2FVphkZrppfKh1pFxG2n2NzPpWEULwltLMzgQ%2B1X2BfKe%2BtUf6tWXQyJbVuAtjqgoql68RhMP9mj7huhEXVtQN4PQ1JPzC%2F%2BTV0mXWJqK9rMSIEjE1O8Ua20E5O1fowXqSI4%2FliWYsWQGvOrtipwTrZ1kIF3xI5ZfTbKY0munjIgKsCH1nvXcQmSj3LLm5HjZD4KxP3yptkx5MkN0CZBedFqbWElOYENvtJy1Sh5OfjyNwLUUD6Z3zAvluVV9CZXbDd9f4Kl5uylADPDybHbqdHwKQ%2BXMAqNkxJrDLQe6VWt2OTRFjJIPtZAZ3yx1gsAEoAuYhv1zC9RCLLvcOCFL1sdx8bKm6AwYxjtgzz%2FPRGC%2BzItvvvJ8DE5FynotSomTL0b2vn07YLD3mpaNDFOwa2CC7K3DmsoyIRXAv2oaY5LpJBiFz9xDvznWUBA06UISfYz77BESu4OK4gMB2t8%2F802fY4CUaJBpPQ%2B%2BdGIXQO3rOlsLvaIo2wrFDQ5VOwLVrsNGjYZiGRBwDe1hfMNe9nLwgR4Ry6UVDP0kpFeGnuPMe3%2B%2BYNzItIe96c740cHjybbq1JFxihfuP3pYthWbxc5E2DGDRNeKH23Aigw%2F%2BmNvwY6pgHcVfgj5q6dXJCvINo4TrthCSDxc9relU%2B%2BTLvMFaGT8mLarYw6wF3UKiDNrYNMxR%2Fezmxlng3nTrQHTforTgVxgUqLbcHlTOfu35FQoiZktZN%2F2tWQSX5kuqqxofpc%2FnCbnJ9Ays0%2B3xAdmLl%2FHIgA3a4ocKSDhv%2Fu81dyEdqYh7hc9fHnP92knNXDvL0mVUd2dfVtwQzsR0fYqbZNVZkZzmxMKkYL&X-Amz-Signature=88f9267012ff1f40d05388b408b6a3e67513b5518a7ba98bc12e25721ddcebbd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAF3TLT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FY9IKK1IXM1n8wSiwrIqiDQVeFG%2FOsaXusek0bYS8AAiA01ViABPOytBrOJUSCQgk58s5HVG7R9N5ehDI07dU8vSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8%2FksCYHhDlNxsM2EKtwDo8sRzQjycmdulhwL9%2FNk2FVphkZrppfKh1pFxG2n2NzPpWEULwltLMzgQ%2B1X2BfKe%2BtUf6tWXQyJbVuAtjqgoql68RhMP9mj7huhEXVtQN4PQ1JPzC%2F%2BTV0mXWJqK9rMSIEjE1O8Ua20E5O1fowXqSI4%2FliWYsWQGvOrtipwTrZ1kIF3xI5ZfTbKY0munjIgKsCH1nvXcQmSj3LLm5HjZD4KxP3yptkx5MkN0CZBedFqbWElOYENvtJy1Sh5OfjyNwLUUD6Z3zAvluVV9CZXbDd9f4Kl5uylADPDybHbqdHwKQ%2BXMAqNkxJrDLQe6VWt2OTRFjJIPtZAZ3yx1gsAEoAuYhv1zC9RCLLvcOCFL1sdx8bKm6AwYxjtgzz%2FPRGC%2BzItvvvJ8DE5FynotSomTL0b2vn07YLD3mpaNDFOwa2CC7K3DmsoyIRXAv2oaY5LpJBiFz9xDvznWUBA06UISfYz77BESu4OK4gMB2t8%2F802fY4CUaJBpPQ%2B%2BdGIXQO3rOlsLvaIo2wrFDQ5VOwLVrsNGjYZiGRBwDe1hfMNe9nLwgR4Ry6UVDP0kpFeGnuPMe3%2B%2BYNzItIe96c740cHjybbq1JFxihfuP3pYthWbxc5E2DGDRNeKH23Aigw%2F%2BmNvwY6pgHcVfgj5q6dXJCvINo4TrthCSDxc9relU%2B%2BTLvMFaGT8mLarYw6wF3UKiDNrYNMxR%2Fezmxlng3nTrQHTforTgVxgUqLbcHlTOfu35FQoiZktZN%2F2tWQSX5kuqqxofpc%2FnCbnJ9Ays0%2B3xAdmLl%2FHIgA3a4ocKSDhv%2Fu81dyEdqYh7hc9fHnP92knNXDvL0mVUd2dfVtwQzsR0fYqbZNVZkZzmxMKkYL&X-Amz-Signature=9ef4f3d5bfa5126ae24d383e39814f3d2ffa9eeb9c3e7d1cad26ecc2badd61b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAF3TLT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FY9IKK1IXM1n8wSiwrIqiDQVeFG%2FOsaXusek0bYS8AAiA01ViABPOytBrOJUSCQgk58s5HVG7R9N5ehDI07dU8vSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8%2FksCYHhDlNxsM2EKtwDo8sRzQjycmdulhwL9%2FNk2FVphkZrppfKh1pFxG2n2NzPpWEULwltLMzgQ%2B1X2BfKe%2BtUf6tWXQyJbVuAtjqgoql68RhMP9mj7huhEXVtQN4PQ1JPzC%2F%2BTV0mXWJqK9rMSIEjE1O8Ua20E5O1fowXqSI4%2FliWYsWQGvOrtipwTrZ1kIF3xI5ZfTbKY0munjIgKsCH1nvXcQmSj3LLm5HjZD4KxP3yptkx5MkN0CZBedFqbWElOYENvtJy1Sh5OfjyNwLUUD6Z3zAvluVV9CZXbDd9f4Kl5uylADPDybHbqdHwKQ%2BXMAqNkxJrDLQe6VWt2OTRFjJIPtZAZ3yx1gsAEoAuYhv1zC9RCLLvcOCFL1sdx8bKm6AwYxjtgzz%2FPRGC%2BzItvvvJ8DE5FynotSomTL0b2vn07YLD3mpaNDFOwa2CC7K3DmsoyIRXAv2oaY5LpJBiFz9xDvznWUBA06UISfYz77BESu4OK4gMB2t8%2F802fY4CUaJBpPQ%2B%2BdGIXQO3rOlsLvaIo2wrFDQ5VOwLVrsNGjYZiGRBwDe1hfMNe9nLwgR4Ry6UVDP0kpFeGnuPMe3%2B%2BYNzItIe96c740cHjybbq1JFxihfuP3pYthWbxc5E2DGDRNeKH23Aigw%2F%2BmNvwY6pgHcVfgj5q6dXJCvINo4TrthCSDxc9relU%2B%2BTLvMFaGT8mLarYw6wF3UKiDNrYNMxR%2Fezmxlng3nTrQHTforTgVxgUqLbcHlTOfu35FQoiZktZN%2F2tWQSX5kuqqxofpc%2FnCbnJ9Ays0%2B3xAdmLl%2FHIgA3a4ocKSDhv%2Fu81dyEdqYh7hc9fHnP92knNXDvL0mVUd2dfVtwQzsR0fYqbZNVZkZzmxMKkYL&X-Amz-Signature=6ccb5c3fb4d704b882fed9f54494799bd509c0168d14830bec61731a57976b44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAF3TLT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FY9IKK1IXM1n8wSiwrIqiDQVeFG%2FOsaXusek0bYS8AAiA01ViABPOytBrOJUSCQgk58s5HVG7R9N5ehDI07dU8vSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8%2FksCYHhDlNxsM2EKtwDo8sRzQjycmdulhwL9%2FNk2FVphkZrppfKh1pFxG2n2NzPpWEULwltLMzgQ%2B1X2BfKe%2BtUf6tWXQyJbVuAtjqgoql68RhMP9mj7huhEXVtQN4PQ1JPzC%2F%2BTV0mXWJqK9rMSIEjE1O8Ua20E5O1fowXqSI4%2FliWYsWQGvOrtipwTrZ1kIF3xI5ZfTbKY0munjIgKsCH1nvXcQmSj3LLm5HjZD4KxP3yptkx5MkN0CZBedFqbWElOYENvtJy1Sh5OfjyNwLUUD6Z3zAvluVV9CZXbDd9f4Kl5uylADPDybHbqdHwKQ%2BXMAqNkxJrDLQe6VWt2OTRFjJIPtZAZ3yx1gsAEoAuYhv1zC9RCLLvcOCFL1sdx8bKm6AwYxjtgzz%2FPRGC%2BzItvvvJ8DE5FynotSomTL0b2vn07YLD3mpaNDFOwa2CC7K3DmsoyIRXAv2oaY5LpJBiFz9xDvznWUBA06UISfYz77BESu4OK4gMB2t8%2F802fY4CUaJBpPQ%2B%2BdGIXQO3rOlsLvaIo2wrFDQ5VOwLVrsNGjYZiGRBwDe1hfMNe9nLwgR4Ry6UVDP0kpFeGnuPMe3%2B%2BYNzItIe96c740cHjybbq1JFxihfuP3pYthWbxc5E2DGDRNeKH23Aigw%2F%2BmNvwY6pgHcVfgj5q6dXJCvINo4TrthCSDxc9relU%2B%2BTLvMFaGT8mLarYw6wF3UKiDNrYNMxR%2Fezmxlng3nTrQHTforTgVxgUqLbcHlTOfu35FQoiZktZN%2F2tWQSX5kuqqxofpc%2FnCbnJ9Ays0%2B3xAdmLl%2FHIgA3a4ocKSDhv%2Fu81dyEdqYh7hc9fHnP92knNXDvL0mVUd2dfVtwQzsR0fYqbZNVZkZzmxMKkYL&X-Amz-Signature=0ef13ab289b7eed1b78cf786df32a46b545b315e282be285441a5f8cbe8fe964&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAF3TLT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FY9IKK1IXM1n8wSiwrIqiDQVeFG%2FOsaXusek0bYS8AAiA01ViABPOytBrOJUSCQgk58s5HVG7R9N5ehDI07dU8vSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8%2FksCYHhDlNxsM2EKtwDo8sRzQjycmdulhwL9%2FNk2FVphkZrppfKh1pFxG2n2NzPpWEULwltLMzgQ%2B1X2BfKe%2BtUf6tWXQyJbVuAtjqgoql68RhMP9mj7huhEXVtQN4PQ1JPzC%2F%2BTV0mXWJqK9rMSIEjE1O8Ua20E5O1fowXqSI4%2FliWYsWQGvOrtipwTrZ1kIF3xI5ZfTbKY0munjIgKsCH1nvXcQmSj3LLm5HjZD4KxP3yptkx5MkN0CZBedFqbWElOYENvtJy1Sh5OfjyNwLUUD6Z3zAvluVV9CZXbDd9f4Kl5uylADPDybHbqdHwKQ%2BXMAqNkxJrDLQe6VWt2OTRFjJIPtZAZ3yx1gsAEoAuYhv1zC9RCLLvcOCFL1sdx8bKm6AwYxjtgzz%2FPRGC%2BzItvvvJ8DE5FynotSomTL0b2vn07YLD3mpaNDFOwa2CC7K3DmsoyIRXAv2oaY5LpJBiFz9xDvznWUBA06UISfYz77BESu4OK4gMB2t8%2F802fY4CUaJBpPQ%2B%2BdGIXQO3rOlsLvaIo2wrFDQ5VOwLVrsNGjYZiGRBwDe1hfMNe9nLwgR4Ry6UVDP0kpFeGnuPMe3%2B%2BYNzItIe96c740cHjybbq1JFxihfuP3pYthWbxc5E2DGDRNeKH23Aigw%2F%2BmNvwY6pgHcVfgj5q6dXJCvINo4TrthCSDxc9relU%2B%2BTLvMFaGT8mLarYw6wF3UKiDNrYNMxR%2Fezmxlng3nTrQHTforTgVxgUqLbcHlTOfu35FQoiZktZN%2F2tWQSX5kuqqxofpc%2FnCbnJ9Ays0%2B3xAdmLl%2FHIgA3a4ocKSDhv%2Fu81dyEdqYh7hc9fHnP92knNXDvL0mVUd2dfVtwQzsR0fYqbZNVZkZzmxMKkYL&X-Amz-Signature=20a3f3a72cee189637622b2ef6a850a9e406e21ec91139d99f57a854e9ef8299&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSAF3TLT%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FY9IKK1IXM1n8wSiwrIqiDQVeFG%2FOsaXusek0bYS8AAiA01ViABPOytBrOJUSCQgk58s5HVG7R9N5ehDI07dU8vSr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIM8%2FksCYHhDlNxsM2EKtwDo8sRzQjycmdulhwL9%2FNk2FVphkZrppfKh1pFxG2n2NzPpWEULwltLMzgQ%2B1X2BfKe%2BtUf6tWXQyJbVuAtjqgoql68RhMP9mj7huhEXVtQN4PQ1JPzC%2F%2BTV0mXWJqK9rMSIEjE1O8Ua20E5O1fowXqSI4%2FliWYsWQGvOrtipwTrZ1kIF3xI5ZfTbKY0munjIgKsCH1nvXcQmSj3LLm5HjZD4KxP3yptkx5MkN0CZBedFqbWElOYENvtJy1Sh5OfjyNwLUUD6Z3zAvluVV9CZXbDd9f4Kl5uylADPDybHbqdHwKQ%2BXMAqNkxJrDLQe6VWt2OTRFjJIPtZAZ3yx1gsAEoAuYhv1zC9RCLLvcOCFL1sdx8bKm6AwYxjtgzz%2FPRGC%2BzItvvvJ8DE5FynotSomTL0b2vn07YLD3mpaNDFOwa2CC7K3DmsoyIRXAv2oaY5LpJBiFz9xDvznWUBA06UISfYz77BESu4OK4gMB2t8%2F802fY4CUaJBpPQ%2B%2BdGIXQO3rOlsLvaIo2wrFDQ5VOwLVrsNGjYZiGRBwDe1hfMNe9nLwgR4Ry6UVDP0kpFeGnuPMe3%2B%2BYNzItIe96c740cHjybbq1JFxihfuP3pYthWbxc5E2DGDRNeKH23Aigw%2F%2BmNvwY6pgHcVfgj5q6dXJCvINo4TrthCSDxc9relU%2B%2BTLvMFaGT8mLarYw6wF3UKiDNrYNMxR%2Fezmxlng3nTrQHTforTgVxgUqLbcHlTOfu35FQoiZktZN%2F2tWQSX5kuqqxofpc%2FnCbnJ9Ays0%2B3xAdmLl%2FHIgA3a4ocKSDhv%2Fu81dyEdqYh7hc9fHnP92knNXDvL0mVUd2dfVtwQzsR0fYqbZNVZkZzmxMKkYL&X-Amz-Signature=7e3e99edc90522b15b14b7f86199eb081735a93807aba789df58d7d91ed06ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
