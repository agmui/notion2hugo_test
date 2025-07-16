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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHR4PQG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBxGu3bvYxfNJb4ybMoPpEdXc%2BXXMGF%2FRG9ck1f9L223AiEAk9aiyeVWMI%2BOwhSIcbsW%2FFpo76jzCV4yObx0QgDZTnEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDBb0EbdHxRGeQ6VzCrcA7aS8%2FiX2xOY%2BQ2SCBE76vPws6bfRE1FpUK5cAUNaYcPvcj7l7fGd5g81PWLCmQSYglj0LBNGChYkVIgycy%2BVfE4CDj7xtW%2BuXQHo1ZtNe96dGYdtkY4lgmYlkqCH6ArhJYMetDAF7q9IaOOXGrxAD6cEpS0csbyGByFzvOur14Z9K7uw4M10bxiNXM1933%2B8HFwJxcAymKnhsaEUu9RIAP8JabiBL8H%2FdxTn4Rn%2FmjnXaR8k0Fv7PaM7ryoMujt%2Fe6VIrdGICwnZRiEXM4gjBPhUmcp2fY5FG218Sv4QwwBY2FY9y7VBm6xKIxf%2FZqO%2BcAZRy2PORiLnClsV1R3j2Nz3svk33pl40N97IUPNLq4moXJqkImudQR4xIIzLlwJwyyhFTklvGsIz1%2B8SmOyGWWhx%2BFa%2F0JfqAl4ySuDOyxRhw2Fs%2BrEJbABoaeF3kf61kXGarxWqFAzp9JJCwqP5k%2BBzCxYmPLnTMdm6Yp03wp0N2PACQRH47lH5XUVF1R7m0NbA6Mi6cn5B5idCtPUSXvOvbW9KRvzFqw2pv%2F78Y1xv0oMFz%2BCdHzXIb5GfOUBnxHmCxUNwhmNTjx78Fb0vDU5juASCOhBJfjHbWp%2Fs4ntBHP9JGECIZ38e%2FTMM2T3sMGOqUBA%2BnLlEVAK2mLsAo0glR5RRBrHf3M%2Byy%2Fqj8SJiRNxjmE9sAVmtfGu15iXhgy4R1m5CMuc3vKye%2BHUvHsPVtxa6ykxC16Vj3fqKI1PbS81ckAXdvAvYSuYyAj9h2f5L%2Br6CCAXFbOUPTFvjqv07W2NIm2SX68wnz5L8fp%2FlPyGpNrp6ojgLvPY6l54QH5Yy5T73iPACWURotaRWqess3rLtGcN562&X-Amz-Signature=7c0c33e1bf3184f38b41530061e2c53246fbb88c2748fce39093e09def933544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHR4PQG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBxGu3bvYxfNJb4ybMoPpEdXc%2BXXMGF%2FRG9ck1f9L223AiEAk9aiyeVWMI%2BOwhSIcbsW%2FFpo76jzCV4yObx0QgDZTnEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDBb0EbdHxRGeQ6VzCrcA7aS8%2FiX2xOY%2BQ2SCBE76vPws6bfRE1FpUK5cAUNaYcPvcj7l7fGd5g81PWLCmQSYglj0LBNGChYkVIgycy%2BVfE4CDj7xtW%2BuXQHo1ZtNe96dGYdtkY4lgmYlkqCH6ArhJYMetDAF7q9IaOOXGrxAD6cEpS0csbyGByFzvOur14Z9K7uw4M10bxiNXM1933%2B8HFwJxcAymKnhsaEUu9RIAP8JabiBL8H%2FdxTn4Rn%2FmjnXaR8k0Fv7PaM7ryoMujt%2Fe6VIrdGICwnZRiEXM4gjBPhUmcp2fY5FG218Sv4QwwBY2FY9y7VBm6xKIxf%2FZqO%2BcAZRy2PORiLnClsV1R3j2Nz3svk33pl40N97IUPNLq4moXJqkImudQR4xIIzLlwJwyyhFTklvGsIz1%2B8SmOyGWWhx%2BFa%2F0JfqAl4ySuDOyxRhw2Fs%2BrEJbABoaeF3kf61kXGarxWqFAzp9JJCwqP5k%2BBzCxYmPLnTMdm6Yp03wp0N2PACQRH47lH5XUVF1R7m0NbA6Mi6cn5B5idCtPUSXvOvbW9KRvzFqw2pv%2F78Y1xv0oMFz%2BCdHzXIb5GfOUBnxHmCxUNwhmNTjx78Fb0vDU5juASCOhBJfjHbWp%2Fs4ntBHP9JGECIZ38e%2FTMM2T3sMGOqUBA%2BnLlEVAK2mLsAo0glR5RRBrHf3M%2Byy%2Fqj8SJiRNxjmE9sAVmtfGu15iXhgy4R1m5CMuc3vKye%2BHUvHsPVtxa6ykxC16Vj3fqKI1PbS81ckAXdvAvYSuYyAj9h2f5L%2Br6CCAXFbOUPTFvjqv07W2NIm2SX68wnz5L8fp%2FlPyGpNrp6ojgLvPY6l54QH5Yy5T73iPACWURotaRWqess3rLtGcN562&X-Amz-Signature=e5c1890b2fb900ba8250c5be0b7459dc4210633bb5f2d275ebbe331a8b8d5e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHR4PQG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBxGu3bvYxfNJb4ybMoPpEdXc%2BXXMGF%2FRG9ck1f9L223AiEAk9aiyeVWMI%2BOwhSIcbsW%2FFpo76jzCV4yObx0QgDZTnEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDBb0EbdHxRGeQ6VzCrcA7aS8%2FiX2xOY%2BQ2SCBE76vPws6bfRE1FpUK5cAUNaYcPvcj7l7fGd5g81PWLCmQSYglj0LBNGChYkVIgycy%2BVfE4CDj7xtW%2BuXQHo1ZtNe96dGYdtkY4lgmYlkqCH6ArhJYMetDAF7q9IaOOXGrxAD6cEpS0csbyGByFzvOur14Z9K7uw4M10bxiNXM1933%2B8HFwJxcAymKnhsaEUu9RIAP8JabiBL8H%2FdxTn4Rn%2FmjnXaR8k0Fv7PaM7ryoMujt%2Fe6VIrdGICwnZRiEXM4gjBPhUmcp2fY5FG218Sv4QwwBY2FY9y7VBm6xKIxf%2FZqO%2BcAZRy2PORiLnClsV1R3j2Nz3svk33pl40N97IUPNLq4moXJqkImudQR4xIIzLlwJwyyhFTklvGsIz1%2B8SmOyGWWhx%2BFa%2F0JfqAl4ySuDOyxRhw2Fs%2BrEJbABoaeF3kf61kXGarxWqFAzp9JJCwqP5k%2BBzCxYmPLnTMdm6Yp03wp0N2PACQRH47lH5XUVF1R7m0NbA6Mi6cn5B5idCtPUSXvOvbW9KRvzFqw2pv%2F78Y1xv0oMFz%2BCdHzXIb5GfOUBnxHmCxUNwhmNTjx78Fb0vDU5juASCOhBJfjHbWp%2Fs4ntBHP9JGECIZ38e%2FTMM2T3sMGOqUBA%2BnLlEVAK2mLsAo0glR5RRBrHf3M%2Byy%2Fqj8SJiRNxjmE9sAVmtfGu15iXhgy4R1m5CMuc3vKye%2BHUvHsPVtxa6ykxC16Vj3fqKI1PbS81ckAXdvAvYSuYyAj9h2f5L%2Br6CCAXFbOUPTFvjqv07W2NIm2SX68wnz5L8fp%2FlPyGpNrp6ojgLvPY6l54QH5Yy5T73iPACWURotaRWqess3rLtGcN562&X-Amz-Signature=5c76913257bcace12f38e258f1485d4571ec172b1b08c0a93abce7f1412e0aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHR4PQG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBxGu3bvYxfNJb4ybMoPpEdXc%2BXXMGF%2FRG9ck1f9L223AiEAk9aiyeVWMI%2BOwhSIcbsW%2FFpo76jzCV4yObx0QgDZTnEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDBb0EbdHxRGeQ6VzCrcA7aS8%2FiX2xOY%2BQ2SCBE76vPws6bfRE1FpUK5cAUNaYcPvcj7l7fGd5g81PWLCmQSYglj0LBNGChYkVIgycy%2BVfE4CDj7xtW%2BuXQHo1ZtNe96dGYdtkY4lgmYlkqCH6ArhJYMetDAF7q9IaOOXGrxAD6cEpS0csbyGByFzvOur14Z9K7uw4M10bxiNXM1933%2B8HFwJxcAymKnhsaEUu9RIAP8JabiBL8H%2FdxTn4Rn%2FmjnXaR8k0Fv7PaM7ryoMujt%2Fe6VIrdGICwnZRiEXM4gjBPhUmcp2fY5FG218Sv4QwwBY2FY9y7VBm6xKIxf%2FZqO%2BcAZRy2PORiLnClsV1R3j2Nz3svk33pl40N97IUPNLq4moXJqkImudQR4xIIzLlwJwyyhFTklvGsIz1%2B8SmOyGWWhx%2BFa%2F0JfqAl4ySuDOyxRhw2Fs%2BrEJbABoaeF3kf61kXGarxWqFAzp9JJCwqP5k%2BBzCxYmPLnTMdm6Yp03wp0N2PACQRH47lH5XUVF1R7m0NbA6Mi6cn5B5idCtPUSXvOvbW9KRvzFqw2pv%2F78Y1xv0oMFz%2BCdHzXIb5GfOUBnxHmCxUNwhmNTjx78Fb0vDU5juASCOhBJfjHbWp%2Fs4ntBHP9JGECIZ38e%2FTMM2T3sMGOqUBA%2BnLlEVAK2mLsAo0glR5RRBrHf3M%2Byy%2Fqj8SJiRNxjmE9sAVmtfGu15iXhgy4R1m5CMuc3vKye%2BHUvHsPVtxa6ykxC16Vj3fqKI1PbS81ckAXdvAvYSuYyAj9h2f5L%2Br6CCAXFbOUPTFvjqv07W2NIm2SX68wnz5L8fp%2FlPyGpNrp6ojgLvPY6l54QH5Yy5T73iPACWURotaRWqess3rLtGcN562&X-Amz-Signature=4ff6bc42467a8c5f474ed434a448440510d799c91933633c487e21e87dc407ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHR4PQG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBxGu3bvYxfNJb4ybMoPpEdXc%2BXXMGF%2FRG9ck1f9L223AiEAk9aiyeVWMI%2BOwhSIcbsW%2FFpo76jzCV4yObx0QgDZTnEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDBb0EbdHxRGeQ6VzCrcA7aS8%2FiX2xOY%2BQ2SCBE76vPws6bfRE1FpUK5cAUNaYcPvcj7l7fGd5g81PWLCmQSYglj0LBNGChYkVIgycy%2BVfE4CDj7xtW%2BuXQHo1ZtNe96dGYdtkY4lgmYlkqCH6ArhJYMetDAF7q9IaOOXGrxAD6cEpS0csbyGByFzvOur14Z9K7uw4M10bxiNXM1933%2B8HFwJxcAymKnhsaEUu9RIAP8JabiBL8H%2FdxTn4Rn%2FmjnXaR8k0Fv7PaM7ryoMujt%2Fe6VIrdGICwnZRiEXM4gjBPhUmcp2fY5FG218Sv4QwwBY2FY9y7VBm6xKIxf%2FZqO%2BcAZRy2PORiLnClsV1R3j2Nz3svk33pl40N97IUPNLq4moXJqkImudQR4xIIzLlwJwyyhFTklvGsIz1%2B8SmOyGWWhx%2BFa%2F0JfqAl4ySuDOyxRhw2Fs%2BrEJbABoaeF3kf61kXGarxWqFAzp9JJCwqP5k%2BBzCxYmPLnTMdm6Yp03wp0N2PACQRH47lH5XUVF1R7m0NbA6Mi6cn5B5idCtPUSXvOvbW9KRvzFqw2pv%2F78Y1xv0oMFz%2BCdHzXIb5GfOUBnxHmCxUNwhmNTjx78Fb0vDU5juASCOhBJfjHbWp%2Fs4ntBHP9JGECIZ38e%2FTMM2T3sMGOqUBA%2BnLlEVAK2mLsAo0glR5RRBrHf3M%2Byy%2Fqj8SJiRNxjmE9sAVmtfGu15iXhgy4R1m5CMuc3vKye%2BHUvHsPVtxa6ykxC16Vj3fqKI1PbS81ckAXdvAvYSuYyAj9h2f5L%2Br6CCAXFbOUPTFvjqv07W2NIm2SX68wnz5L8fp%2FlPyGpNrp6ojgLvPY6l54QH5Yy5T73iPACWURotaRWqess3rLtGcN562&X-Amz-Signature=9e4a67f4a007b5192bf70030b0ecfa0dfbe4bda3eb5ad90b8f0e2214fe3838a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHR4PQG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBxGu3bvYxfNJb4ybMoPpEdXc%2BXXMGF%2FRG9ck1f9L223AiEAk9aiyeVWMI%2BOwhSIcbsW%2FFpo76jzCV4yObx0QgDZTnEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDBb0EbdHxRGeQ6VzCrcA7aS8%2FiX2xOY%2BQ2SCBE76vPws6bfRE1FpUK5cAUNaYcPvcj7l7fGd5g81PWLCmQSYglj0LBNGChYkVIgycy%2BVfE4CDj7xtW%2BuXQHo1ZtNe96dGYdtkY4lgmYlkqCH6ArhJYMetDAF7q9IaOOXGrxAD6cEpS0csbyGByFzvOur14Z9K7uw4M10bxiNXM1933%2B8HFwJxcAymKnhsaEUu9RIAP8JabiBL8H%2FdxTn4Rn%2FmjnXaR8k0Fv7PaM7ryoMujt%2Fe6VIrdGICwnZRiEXM4gjBPhUmcp2fY5FG218Sv4QwwBY2FY9y7VBm6xKIxf%2FZqO%2BcAZRy2PORiLnClsV1R3j2Nz3svk33pl40N97IUPNLq4moXJqkImudQR4xIIzLlwJwyyhFTklvGsIz1%2B8SmOyGWWhx%2BFa%2F0JfqAl4ySuDOyxRhw2Fs%2BrEJbABoaeF3kf61kXGarxWqFAzp9JJCwqP5k%2BBzCxYmPLnTMdm6Yp03wp0N2PACQRH47lH5XUVF1R7m0NbA6Mi6cn5B5idCtPUSXvOvbW9KRvzFqw2pv%2F78Y1xv0oMFz%2BCdHzXIb5GfOUBnxHmCxUNwhmNTjx78Fb0vDU5juASCOhBJfjHbWp%2Fs4ntBHP9JGECIZ38e%2FTMM2T3sMGOqUBA%2BnLlEVAK2mLsAo0glR5RRBrHf3M%2Byy%2Fqj8SJiRNxjmE9sAVmtfGu15iXhgy4R1m5CMuc3vKye%2BHUvHsPVtxa6ykxC16Vj3fqKI1PbS81ckAXdvAvYSuYyAj9h2f5L%2Br6CCAXFbOUPTFvjqv07W2NIm2SX68wnz5L8fp%2FlPyGpNrp6ojgLvPY6l54QH5Yy5T73iPACWURotaRWqess3rLtGcN562&X-Amz-Signature=23c58ec087f7809a1cae946a0b6873b68b45331429a9764c1c8c12132c23d94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHR4PQG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBxGu3bvYxfNJb4ybMoPpEdXc%2BXXMGF%2FRG9ck1f9L223AiEAk9aiyeVWMI%2BOwhSIcbsW%2FFpo76jzCV4yObx0QgDZTnEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDBb0EbdHxRGeQ6VzCrcA7aS8%2FiX2xOY%2BQ2SCBE76vPws6bfRE1FpUK5cAUNaYcPvcj7l7fGd5g81PWLCmQSYglj0LBNGChYkVIgycy%2BVfE4CDj7xtW%2BuXQHo1ZtNe96dGYdtkY4lgmYlkqCH6ArhJYMetDAF7q9IaOOXGrxAD6cEpS0csbyGByFzvOur14Z9K7uw4M10bxiNXM1933%2B8HFwJxcAymKnhsaEUu9RIAP8JabiBL8H%2FdxTn4Rn%2FmjnXaR8k0Fv7PaM7ryoMujt%2Fe6VIrdGICwnZRiEXM4gjBPhUmcp2fY5FG218Sv4QwwBY2FY9y7VBm6xKIxf%2FZqO%2BcAZRy2PORiLnClsV1R3j2Nz3svk33pl40N97IUPNLq4moXJqkImudQR4xIIzLlwJwyyhFTklvGsIz1%2B8SmOyGWWhx%2BFa%2F0JfqAl4ySuDOyxRhw2Fs%2BrEJbABoaeF3kf61kXGarxWqFAzp9JJCwqP5k%2BBzCxYmPLnTMdm6Yp03wp0N2PACQRH47lH5XUVF1R7m0NbA6Mi6cn5B5idCtPUSXvOvbW9KRvzFqw2pv%2F78Y1xv0oMFz%2BCdHzXIb5GfOUBnxHmCxUNwhmNTjx78Fb0vDU5juASCOhBJfjHbWp%2Fs4ntBHP9JGECIZ38e%2FTMM2T3sMGOqUBA%2BnLlEVAK2mLsAo0glR5RRBrHf3M%2Byy%2Fqj8SJiRNxjmE9sAVmtfGu15iXhgy4R1m5CMuc3vKye%2BHUvHsPVtxa6ykxC16Vj3fqKI1PbS81ckAXdvAvYSuYyAj9h2f5L%2Br6CCAXFbOUPTFvjqv07W2NIm2SX68wnz5L8fp%2FlPyGpNrp6ojgLvPY6l54QH5Yy5T73iPACWURotaRWqess3rLtGcN562&X-Amz-Signature=04c76eea866afe454d11049378237db7a17265304b7087f51c147300961f1b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHR4PQG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBxGu3bvYxfNJb4ybMoPpEdXc%2BXXMGF%2FRG9ck1f9L223AiEAk9aiyeVWMI%2BOwhSIcbsW%2FFpo76jzCV4yObx0QgDZTnEq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDBb0EbdHxRGeQ6VzCrcA7aS8%2FiX2xOY%2BQ2SCBE76vPws6bfRE1FpUK5cAUNaYcPvcj7l7fGd5g81PWLCmQSYglj0LBNGChYkVIgycy%2BVfE4CDj7xtW%2BuXQHo1ZtNe96dGYdtkY4lgmYlkqCH6ArhJYMetDAF7q9IaOOXGrxAD6cEpS0csbyGByFzvOur14Z9K7uw4M10bxiNXM1933%2B8HFwJxcAymKnhsaEUu9RIAP8JabiBL8H%2FdxTn4Rn%2FmjnXaR8k0Fv7PaM7ryoMujt%2Fe6VIrdGICwnZRiEXM4gjBPhUmcp2fY5FG218Sv4QwwBY2FY9y7VBm6xKIxf%2FZqO%2BcAZRy2PORiLnClsV1R3j2Nz3svk33pl40N97IUPNLq4moXJqkImudQR4xIIzLlwJwyyhFTklvGsIz1%2B8SmOyGWWhx%2BFa%2F0JfqAl4ySuDOyxRhw2Fs%2BrEJbABoaeF3kf61kXGarxWqFAzp9JJCwqP5k%2BBzCxYmPLnTMdm6Yp03wp0N2PACQRH47lH5XUVF1R7m0NbA6Mi6cn5B5idCtPUSXvOvbW9KRvzFqw2pv%2F78Y1xv0oMFz%2BCdHzXIb5GfOUBnxHmCxUNwhmNTjx78Fb0vDU5juASCOhBJfjHbWp%2Fs4ntBHP9JGECIZ38e%2FTMM2T3sMGOqUBA%2BnLlEVAK2mLsAo0glR5RRBrHf3M%2Byy%2Fqj8SJiRNxjmE9sAVmtfGu15iXhgy4R1m5CMuc3vKye%2BHUvHsPVtxa6ykxC16Vj3fqKI1PbS81ckAXdvAvYSuYyAj9h2f5L%2Br6CCAXFbOUPTFvjqv07W2NIm2SX68wnz5L8fp%2FlPyGpNrp6ojgLvPY6l54QH5Yy5T73iPACWURotaRWqess3rLtGcN562&X-Amz-Signature=8dfecf14afe938451cea2209b319d40a569222c575576632380858a844105e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
