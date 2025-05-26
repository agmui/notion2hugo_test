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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQFV2VV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2FBOWFSfoURO0ezghGKg7UBV3Ydwp8pIezdwARfmQaAiEA1va1E8PbANCu0Do%2BbLNtahuw%2BvsjlI%2BC9dxmtlvV1iwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGK37cHNf75hovs8ZyrcAwOPQtFMrX5pVqzkq%2Ff9RueenGEWVz%2FJ1Ogm07cCQIbVW4CE36pazNaQCg9mijinsGD4VWnc9AxBZ%2F6D8RUw9gFRqbsOcgOk2IzuE3g5lGgBbYWB9Vaq79GEiMgQBG1mRRhV8KHRNz3%2FVqwhTXLCCBcga63vqzvDbfS45i4JWo%2BNIJlYElFjY2s1%2Fudkaj1mbwMCJ7eKZHMLy8UROpTEbc8X%2BGnc4J4Ty5pPod%2F8f88SwEFEBUlVPkMt0Ymjg4tuWJR8L%2BcMw%2FC91Nwzq0ZJGQ3uYV1k4CHGKj%2F4VRaNM43vOSdMHnjHG2qE0rzP2Yzpvg%2FD0Run8UGV%2FNgcH85vUlTz4rIg8Ia%2Bw9j7C4jEBZpDXMv65XmUS%2B7zkI7DOw%2FFpf7bG5ChTwVEib4o0xfAE8Wh4SgOhjarWMJMvTH%2Bc9H5BO%2F8fkl7FUlBmvrJSMOxKoqChU99snp9aZKLPApv5uYcEGhA2yq%2F0%2FtrElBxZN4q1i4aae11%2B40Pek3yr7M1W4hW3%2Fss6s3xu9I3xhsXSy1XJuo%2B8zoEvnEV7T4sTEPcaU0UFBEjybt2sjsPnq9qUHavHdieikDpRknrvYc%2F1GWtAprskHO%2BdrhsC0FX1BCy7e4QAWY%2FsqzjFgJ5MJur0sEGOqUBQWU9wXonMjSGx5ZdPaCEcUemcfr%2BCbLv%2BeQ%2FupK8kjOgWQOl24k439SlOhZSnj%2BNKNXg2rr7z3PBlc9PcLyGe6KFVaiuVelK3XRAa2Cp11RVRJfK7EDJSjxCqs22FwSlbEMWbSpAuwSNyJKPdPngVyCqUATsupXNklIoNsuwy9bl2BCEHE6DTFeAMJsheq7DEvLSdwsIN21FJMNpq6iHD8Bw8%2FmB&X-Amz-Signature=92aa81faaec2667e1cb1f2eb2bd52d597c03f056d9dfc1f7ad2a83a48587f9a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQFV2VV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2FBOWFSfoURO0ezghGKg7UBV3Ydwp8pIezdwARfmQaAiEA1va1E8PbANCu0Do%2BbLNtahuw%2BvsjlI%2BC9dxmtlvV1iwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGK37cHNf75hovs8ZyrcAwOPQtFMrX5pVqzkq%2Ff9RueenGEWVz%2FJ1Ogm07cCQIbVW4CE36pazNaQCg9mijinsGD4VWnc9AxBZ%2F6D8RUw9gFRqbsOcgOk2IzuE3g5lGgBbYWB9Vaq79GEiMgQBG1mRRhV8KHRNz3%2FVqwhTXLCCBcga63vqzvDbfS45i4JWo%2BNIJlYElFjY2s1%2Fudkaj1mbwMCJ7eKZHMLy8UROpTEbc8X%2BGnc4J4Ty5pPod%2F8f88SwEFEBUlVPkMt0Ymjg4tuWJR8L%2BcMw%2FC91Nwzq0ZJGQ3uYV1k4CHGKj%2F4VRaNM43vOSdMHnjHG2qE0rzP2Yzpvg%2FD0Run8UGV%2FNgcH85vUlTz4rIg8Ia%2Bw9j7C4jEBZpDXMv65XmUS%2B7zkI7DOw%2FFpf7bG5ChTwVEib4o0xfAE8Wh4SgOhjarWMJMvTH%2Bc9H5BO%2F8fkl7FUlBmvrJSMOxKoqChU99snp9aZKLPApv5uYcEGhA2yq%2F0%2FtrElBxZN4q1i4aae11%2B40Pek3yr7M1W4hW3%2Fss6s3xu9I3xhsXSy1XJuo%2B8zoEvnEV7T4sTEPcaU0UFBEjybt2sjsPnq9qUHavHdieikDpRknrvYc%2F1GWtAprskHO%2BdrhsC0FX1BCy7e4QAWY%2FsqzjFgJ5MJur0sEGOqUBQWU9wXonMjSGx5ZdPaCEcUemcfr%2BCbLv%2BeQ%2FupK8kjOgWQOl24k439SlOhZSnj%2BNKNXg2rr7z3PBlc9PcLyGe6KFVaiuVelK3XRAa2Cp11RVRJfK7EDJSjxCqs22FwSlbEMWbSpAuwSNyJKPdPngVyCqUATsupXNklIoNsuwy9bl2BCEHE6DTFeAMJsheq7DEvLSdwsIN21FJMNpq6iHD8Bw8%2FmB&X-Amz-Signature=0b970acf3fe9df62c30c3e3de7005b01ba102f91782639840f05b40f0ba51717&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQFV2VV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2FBOWFSfoURO0ezghGKg7UBV3Ydwp8pIezdwARfmQaAiEA1va1E8PbANCu0Do%2BbLNtahuw%2BvsjlI%2BC9dxmtlvV1iwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGK37cHNf75hovs8ZyrcAwOPQtFMrX5pVqzkq%2Ff9RueenGEWVz%2FJ1Ogm07cCQIbVW4CE36pazNaQCg9mijinsGD4VWnc9AxBZ%2F6D8RUw9gFRqbsOcgOk2IzuE3g5lGgBbYWB9Vaq79GEiMgQBG1mRRhV8KHRNz3%2FVqwhTXLCCBcga63vqzvDbfS45i4JWo%2BNIJlYElFjY2s1%2Fudkaj1mbwMCJ7eKZHMLy8UROpTEbc8X%2BGnc4J4Ty5pPod%2F8f88SwEFEBUlVPkMt0Ymjg4tuWJR8L%2BcMw%2FC91Nwzq0ZJGQ3uYV1k4CHGKj%2F4VRaNM43vOSdMHnjHG2qE0rzP2Yzpvg%2FD0Run8UGV%2FNgcH85vUlTz4rIg8Ia%2Bw9j7C4jEBZpDXMv65XmUS%2B7zkI7DOw%2FFpf7bG5ChTwVEib4o0xfAE8Wh4SgOhjarWMJMvTH%2Bc9H5BO%2F8fkl7FUlBmvrJSMOxKoqChU99snp9aZKLPApv5uYcEGhA2yq%2F0%2FtrElBxZN4q1i4aae11%2B40Pek3yr7M1W4hW3%2Fss6s3xu9I3xhsXSy1XJuo%2B8zoEvnEV7T4sTEPcaU0UFBEjybt2sjsPnq9qUHavHdieikDpRknrvYc%2F1GWtAprskHO%2BdrhsC0FX1BCy7e4QAWY%2FsqzjFgJ5MJur0sEGOqUBQWU9wXonMjSGx5ZdPaCEcUemcfr%2BCbLv%2BeQ%2FupK8kjOgWQOl24k439SlOhZSnj%2BNKNXg2rr7z3PBlc9PcLyGe6KFVaiuVelK3XRAa2Cp11RVRJfK7EDJSjxCqs22FwSlbEMWbSpAuwSNyJKPdPngVyCqUATsupXNklIoNsuwy9bl2BCEHE6DTFeAMJsheq7DEvLSdwsIN21FJMNpq6iHD8Bw8%2FmB&X-Amz-Signature=f8395f94f0aa5c2d6b5b9d680c1d5aa292b121e9a624f9ec6c4a2c137b732fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQFV2VV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2FBOWFSfoURO0ezghGKg7UBV3Ydwp8pIezdwARfmQaAiEA1va1E8PbANCu0Do%2BbLNtahuw%2BvsjlI%2BC9dxmtlvV1iwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGK37cHNf75hovs8ZyrcAwOPQtFMrX5pVqzkq%2Ff9RueenGEWVz%2FJ1Ogm07cCQIbVW4CE36pazNaQCg9mijinsGD4VWnc9AxBZ%2F6D8RUw9gFRqbsOcgOk2IzuE3g5lGgBbYWB9Vaq79GEiMgQBG1mRRhV8KHRNz3%2FVqwhTXLCCBcga63vqzvDbfS45i4JWo%2BNIJlYElFjY2s1%2Fudkaj1mbwMCJ7eKZHMLy8UROpTEbc8X%2BGnc4J4Ty5pPod%2F8f88SwEFEBUlVPkMt0Ymjg4tuWJR8L%2BcMw%2FC91Nwzq0ZJGQ3uYV1k4CHGKj%2F4VRaNM43vOSdMHnjHG2qE0rzP2Yzpvg%2FD0Run8UGV%2FNgcH85vUlTz4rIg8Ia%2Bw9j7C4jEBZpDXMv65XmUS%2B7zkI7DOw%2FFpf7bG5ChTwVEib4o0xfAE8Wh4SgOhjarWMJMvTH%2Bc9H5BO%2F8fkl7FUlBmvrJSMOxKoqChU99snp9aZKLPApv5uYcEGhA2yq%2F0%2FtrElBxZN4q1i4aae11%2B40Pek3yr7M1W4hW3%2Fss6s3xu9I3xhsXSy1XJuo%2B8zoEvnEV7T4sTEPcaU0UFBEjybt2sjsPnq9qUHavHdieikDpRknrvYc%2F1GWtAprskHO%2BdrhsC0FX1BCy7e4QAWY%2FsqzjFgJ5MJur0sEGOqUBQWU9wXonMjSGx5ZdPaCEcUemcfr%2BCbLv%2BeQ%2FupK8kjOgWQOl24k439SlOhZSnj%2BNKNXg2rr7z3PBlc9PcLyGe6KFVaiuVelK3XRAa2Cp11RVRJfK7EDJSjxCqs22FwSlbEMWbSpAuwSNyJKPdPngVyCqUATsupXNklIoNsuwy9bl2BCEHE6DTFeAMJsheq7DEvLSdwsIN21FJMNpq6iHD8Bw8%2FmB&X-Amz-Signature=e70bd7fcf1e2cf64c615f71c5ab41fff2ee077f24328d7be8cf0b31dd1380495&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQFV2VV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2FBOWFSfoURO0ezghGKg7UBV3Ydwp8pIezdwARfmQaAiEA1va1E8PbANCu0Do%2BbLNtahuw%2BvsjlI%2BC9dxmtlvV1iwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGK37cHNf75hovs8ZyrcAwOPQtFMrX5pVqzkq%2Ff9RueenGEWVz%2FJ1Ogm07cCQIbVW4CE36pazNaQCg9mijinsGD4VWnc9AxBZ%2F6D8RUw9gFRqbsOcgOk2IzuE3g5lGgBbYWB9Vaq79GEiMgQBG1mRRhV8KHRNz3%2FVqwhTXLCCBcga63vqzvDbfS45i4JWo%2BNIJlYElFjY2s1%2Fudkaj1mbwMCJ7eKZHMLy8UROpTEbc8X%2BGnc4J4Ty5pPod%2F8f88SwEFEBUlVPkMt0Ymjg4tuWJR8L%2BcMw%2FC91Nwzq0ZJGQ3uYV1k4CHGKj%2F4VRaNM43vOSdMHnjHG2qE0rzP2Yzpvg%2FD0Run8UGV%2FNgcH85vUlTz4rIg8Ia%2Bw9j7C4jEBZpDXMv65XmUS%2B7zkI7DOw%2FFpf7bG5ChTwVEib4o0xfAE8Wh4SgOhjarWMJMvTH%2Bc9H5BO%2F8fkl7FUlBmvrJSMOxKoqChU99snp9aZKLPApv5uYcEGhA2yq%2F0%2FtrElBxZN4q1i4aae11%2B40Pek3yr7M1W4hW3%2Fss6s3xu9I3xhsXSy1XJuo%2B8zoEvnEV7T4sTEPcaU0UFBEjybt2sjsPnq9qUHavHdieikDpRknrvYc%2F1GWtAprskHO%2BdrhsC0FX1BCy7e4QAWY%2FsqzjFgJ5MJur0sEGOqUBQWU9wXonMjSGx5ZdPaCEcUemcfr%2BCbLv%2BeQ%2FupK8kjOgWQOl24k439SlOhZSnj%2BNKNXg2rr7z3PBlc9PcLyGe6KFVaiuVelK3XRAa2Cp11RVRJfK7EDJSjxCqs22FwSlbEMWbSpAuwSNyJKPdPngVyCqUATsupXNklIoNsuwy9bl2BCEHE6DTFeAMJsheq7DEvLSdwsIN21FJMNpq6iHD8Bw8%2FmB&X-Amz-Signature=0b6479914e1e2145f5b30b82ee0a24afe35bd70223c6accfb5ebb5a0ba0afdf4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQFV2VV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2FBOWFSfoURO0ezghGKg7UBV3Ydwp8pIezdwARfmQaAiEA1va1E8PbANCu0Do%2BbLNtahuw%2BvsjlI%2BC9dxmtlvV1iwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGK37cHNf75hovs8ZyrcAwOPQtFMrX5pVqzkq%2Ff9RueenGEWVz%2FJ1Ogm07cCQIbVW4CE36pazNaQCg9mijinsGD4VWnc9AxBZ%2F6D8RUw9gFRqbsOcgOk2IzuE3g5lGgBbYWB9Vaq79GEiMgQBG1mRRhV8KHRNz3%2FVqwhTXLCCBcga63vqzvDbfS45i4JWo%2BNIJlYElFjY2s1%2Fudkaj1mbwMCJ7eKZHMLy8UROpTEbc8X%2BGnc4J4Ty5pPod%2F8f88SwEFEBUlVPkMt0Ymjg4tuWJR8L%2BcMw%2FC91Nwzq0ZJGQ3uYV1k4CHGKj%2F4VRaNM43vOSdMHnjHG2qE0rzP2Yzpvg%2FD0Run8UGV%2FNgcH85vUlTz4rIg8Ia%2Bw9j7C4jEBZpDXMv65XmUS%2B7zkI7DOw%2FFpf7bG5ChTwVEib4o0xfAE8Wh4SgOhjarWMJMvTH%2Bc9H5BO%2F8fkl7FUlBmvrJSMOxKoqChU99snp9aZKLPApv5uYcEGhA2yq%2F0%2FtrElBxZN4q1i4aae11%2B40Pek3yr7M1W4hW3%2Fss6s3xu9I3xhsXSy1XJuo%2B8zoEvnEV7T4sTEPcaU0UFBEjybt2sjsPnq9qUHavHdieikDpRknrvYc%2F1GWtAprskHO%2BdrhsC0FX1BCy7e4QAWY%2FsqzjFgJ5MJur0sEGOqUBQWU9wXonMjSGx5ZdPaCEcUemcfr%2BCbLv%2BeQ%2FupK8kjOgWQOl24k439SlOhZSnj%2BNKNXg2rr7z3PBlc9PcLyGe6KFVaiuVelK3XRAa2Cp11RVRJfK7EDJSjxCqs22FwSlbEMWbSpAuwSNyJKPdPngVyCqUATsupXNklIoNsuwy9bl2BCEHE6DTFeAMJsheq7DEvLSdwsIN21FJMNpq6iHD8Bw8%2FmB&X-Amz-Signature=2898750cb154624bc54821380a56fd91a9f3d0a424eec567ba962d41e3956dca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQFV2VV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2FBOWFSfoURO0ezghGKg7UBV3Ydwp8pIezdwARfmQaAiEA1va1E8PbANCu0Do%2BbLNtahuw%2BvsjlI%2BC9dxmtlvV1iwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGK37cHNf75hovs8ZyrcAwOPQtFMrX5pVqzkq%2Ff9RueenGEWVz%2FJ1Ogm07cCQIbVW4CE36pazNaQCg9mijinsGD4VWnc9AxBZ%2F6D8RUw9gFRqbsOcgOk2IzuE3g5lGgBbYWB9Vaq79GEiMgQBG1mRRhV8KHRNz3%2FVqwhTXLCCBcga63vqzvDbfS45i4JWo%2BNIJlYElFjY2s1%2Fudkaj1mbwMCJ7eKZHMLy8UROpTEbc8X%2BGnc4J4Ty5pPod%2F8f88SwEFEBUlVPkMt0Ymjg4tuWJR8L%2BcMw%2FC91Nwzq0ZJGQ3uYV1k4CHGKj%2F4VRaNM43vOSdMHnjHG2qE0rzP2Yzpvg%2FD0Run8UGV%2FNgcH85vUlTz4rIg8Ia%2Bw9j7C4jEBZpDXMv65XmUS%2B7zkI7DOw%2FFpf7bG5ChTwVEib4o0xfAE8Wh4SgOhjarWMJMvTH%2Bc9H5BO%2F8fkl7FUlBmvrJSMOxKoqChU99snp9aZKLPApv5uYcEGhA2yq%2F0%2FtrElBxZN4q1i4aae11%2B40Pek3yr7M1W4hW3%2Fss6s3xu9I3xhsXSy1XJuo%2B8zoEvnEV7T4sTEPcaU0UFBEjybt2sjsPnq9qUHavHdieikDpRknrvYc%2F1GWtAprskHO%2BdrhsC0FX1BCy7e4QAWY%2FsqzjFgJ5MJur0sEGOqUBQWU9wXonMjSGx5ZdPaCEcUemcfr%2BCbLv%2BeQ%2FupK8kjOgWQOl24k439SlOhZSnj%2BNKNXg2rr7z3PBlc9PcLyGe6KFVaiuVelK3XRAa2Cp11RVRJfK7EDJSjxCqs22FwSlbEMWbSpAuwSNyJKPdPngVyCqUATsupXNklIoNsuwy9bl2BCEHE6DTFeAMJsheq7DEvLSdwsIN21FJMNpq6iHD8Bw8%2FmB&X-Amz-Signature=b7ab92d82fc148153e64ae1bc84af96d8d2f850db0eebd724b2b17005d8f1c56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NQFV2VV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBU%2FBOWFSfoURO0ezghGKg7UBV3Ydwp8pIezdwARfmQaAiEA1va1E8PbANCu0Do%2BbLNtahuw%2BvsjlI%2BC9dxmtlvV1iwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGK37cHNf75hovs8ZyrcAwOPQtFMrX5pVqzkq%2Ff9RueenGEWVz%2FJ1Ogm07cCQIbVW4CE36pazNaQCg9mijinsGD4VWnc9AxBZ%2F6D8RUw9gFRqbsOcgOk2IzuE3g5lGgBbYWB9Vaq79GEiMgQBG1mRRhV8KHRNz3%2FVqwhTXLCCBcga63vqzvDbfS45i4JWo%2BNIJlYElFjY2s1%2Fudkaj1mbwMCJ7eKZHMLy8UROpTEbc8X%2BGnc4J4Ty5pPod%2F8f88SwEFEBUlVPkMt0Ymjg4tuWJR8L%2BcMw%2FC91Nwzq0ZJGQ3uYV1k4CHGKj%2F4VRaNM43vOSdMHnjHG2qE0rzP2Yzpvg%2FD0Run8UGV%2FNgcH85vUlTz4rIg8Ia%2Bw9j7C4jEBZpDXMv65XmUS%2B7zkI7DOw%2FFpf7bG5ChTwVEib4o0xfAE8Wh4SgOhjarWMJMvTH%2Bc9H5BO%2F8fkl7FUlBmvrJSMOxKoqChU99snp9aZKLPApv5uYcEGhA2yq%2F0%2FtrElBxZN4q1i4aae11%2B40Pek3yr7M1W4hW3%2Fss6s3xu9I3xhsXSy1XJuo%2B8zoEvnEV7T4sTEPcaU0UFBEjybt2sjsPnq9qUHavHdieikDpRknrvYc%2F1GWtAprskHO%2BdrhsC0FX1BCy7e4QAWY%2FsqzjFgJ5MJur0sEGOqUBQWU9wXonMjSGx5ZdPaCEcUemcfr%2BCbLv%2BeQ%2FupK8kjOgWQOl24k439SlOhZSnj%2BNKNXg2rr7z3PBlc9PcLyGe6KFVaiuVelK3XRAa2Cp11RVRJfK7EDJSjxCqs22FwSlbEMWbSpAuwSNyJKPdPngVyCqUATsupXNklIoNsuwy9bl2BCEHE6DTFeAMJsheq7DEvLSdwsIN21FJMNpq6iHD8Bw8%2FmB&X-Amz-Signature=3b2211dceeda61886cdf6c5f6b009b46758251f026341f924a4fa4b1ac95e67f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
