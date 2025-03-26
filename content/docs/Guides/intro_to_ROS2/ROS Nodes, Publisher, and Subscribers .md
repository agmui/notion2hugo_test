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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLKUKEQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjTYPaE6M4hvvfSNeLauIQOuSbUp4BvFTkCvUUI0IoMgIgYk%2BcnNzrMSmyBAKcaTVm5fBcR8E%2BoxMMSiFK6l4KjzYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC4Sspk9blxVtM%2B3mircAzE5lS67EeZjnWkvgyzW3wSu4tIqAEuW3YIK0WM2luyXDJv1tTpTW7mDKj%2BMVmUnQAEBPC9gXQLv4x4mXO3sNIedzu%2B%2B9qBr%2B%2BWNm5uklt%2Fp9c%2BdROCkZ3VJqxXcus0qs7QJXKujzhu15%2B9hZYRGFjMTLjPNu2RvhtiYHopn1%2BSTrdoVPexXUt%2FyzZLl9KEXA%2F%2FKQIzXEe830JItfQR8GvXkiC%2FO1khoPSso4nWrFJ0tkjX7hTNdlnvR9WRAr5061ILpM9ZrsUDP5%2BACxegAGTGjs6%2B1JMYqaRZu1lsTDwNt05eBou3TRCF7TAVGZWECNwoOBL98hxU000OuLFVbOhaQr01bpZcA%2BkHkllkbXwg3JE4zFVpds9DleWTyffZ%2BWexihubWAw0Nd2qbp31UIvzS203F96WoGqUYs%2B4xJXruPNoKRX8bVhCxwxriEk9FfVIs%2BWAC%2Beh94L%2F3lBplcYHWQAGX8LcMNnq10G8wO6eepebRGPrnIxXXuF5WuCPLbicS1SF0azVVdj01Yc8qMytE8%2FdJqcs7thnqDotic1gViAB%2BUIYYRli52ykkdoELiR91agv8Jn9MGHF0v%2FsT5KTFdwkJhp0nl43Wm%2FV7uhE85gHYURfg7abwZSMHMMf3kL8GOqUBs%2FS0hRDVtUPF4hCgK2acDqGNBtgEkM0D5ILUn%2BJnPe57sJv2X5BfRGXZf%2F0KNm2DScQutWSStOrNP9cxp2oqm0bakjPfeAZfs%2F5SzviDPCVEq4l6PBPTCxqstarRNFuXQ6JjRcS89E4urtznkBTgSsmILTk4BZ6ek68gciPBu1f7EqMzAdy8x2lPSBewM0AHu7pxyKsY5IpfLeGLWq3CoRmN%2BXum&X-Amz-Signature=ff46049f5a04d6fed8815203870a3dd5cd8f690d552fa748de6eb8d910d16a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLKUKEQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjTYPaE6M4hvvfSNeLauIQOuSbUp4BvFTkCvUUI0IoMgIgYk%2BcnNzrMSmyBAKcaTVm5fBcR8E%2BoxMMSiFK6l4KjzYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC4Sspk9blxVtM%2B3mircAzE5lS67EeZjnWkvgyzW3wSu4tIqAEuW3YIK0WM2luyXDJv1tTpTW7mDKj%2BMVmUnQAEBPC9gXQLv4x4mXO3sNIedzu%2B%2B9qBr%2B%2BWNm5uklt%2Fp9c%2BdROCkZ3VJqxXcus0qs7QJXKujzhu15%2B9hZYRGFjMTLjPNu2RvhtiYHopn1%2BSTrdoVPexXUt%2FyzZLl9KEXA%2F%2FKQIzXEe830JItfQR8GvXkiC%2FO1khoPSso4nWrFJ0tkjX7hTNdlnvR9WRAr5061ILpM9ZrsUDP5%2BACxegAGTGjs6%2B1JMYqaRZu1lsTDwNt05eBou3TRCF7TAVGZWECNwoOBL98hxU000OuLFVbOhaQr01bpZcA%2BkHkllkbXwg3JE4zFVpds9DleWTyffZ%2BWexihubWAw0Nd2qbp31UIvzS203F96WoGqUYs%2B4xJXruPNoKRX8bVhCxwxriEk9FfVIs%2BWAC%2Beh94L%2F3lBplcYHWQAGX8LcMNnq10G8wO6eepebRGPrnIxXXuF5WuCPLbicS1SF0azVVdj01Yc8qMytE8%2FdJqcs7thnqDotic1gViAB%2BUIYYRli52ykkdoELiR91agv8Jn9MGHF0v%2FsT5KTFdwkJhp0nl43Wm%2FV7uhE85gHYURfg7abwZSMHMMf3kL8GOqUBs%2FS0hRDVtUPF4hCgK2acDqGNBtgEkM0D5ILUn%2BJnPe57sJv2X5BfRGXZf%2F0KNm2DScQutWSStOrNP9cxp2oqm0bakjPfeAZfs%2F5SzviDPCVEq4l6PBPTCxqstarRNFuXQ6JjRcS89E4urtznkBTgSsmILTk4BZ6ek68gciPBu1f7EqMzAdy8x2lPSBewM0AHu7pxyKsY5IpfLeGLWq3CoRmN%2BXum&X-Amz-Signature=c0794fe703fbe99b9b27b6cc683aa2b8c72fa69ea3ad75350a5fe076a511b30e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLKUKEQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjTYPaE6M4hvvfSNeLauIQOuSbUp4BvFTkCvUUI0IoMgIgYk%2BcnNzrMSmyBAKcaTVm5fBcR8E%2BoxMMSiFK6l4KjzYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC4Sspk9blxVtM%2B3mircAzE5lS67EeZjnWkvgyzW3wSu4tIqAEuW3YIK0WM2luyXDJv1tTpTW7mDKj%2BMVmUnQAEBPC9gXQLv4x4mXO3sNIedzu%2B%2B9qBr%2B%2BWNm5uklt%2Fp9c%2BdROCkZ3VJqxXcus0qs7QJXKujzhu15%2B9hZYRGFjMTLjPNu2RvhtiYHopn1%2BSTrdoVPexXUt%2FyzZLl9KEXA%2F%2FKQIzXEe830JItfQR8GvXkiC%2FO1khoPSso4nWrFJ0tkjX7hTNdlnvR9WRAr5061ILpM9ZrsUDP5%2BACxegAGTGjs6%2B1JMYqaRZu1lsTDwNt05eBou3TRCF7TAVGZWECNwoOBL98hxU000OuLFVbOhaQr01bpZcA%2BkHkllkbXwg3JE4zFVpds9DleWTyffZ%2BWexihubWAw0Nd2qbp31UIvzS203F96WoGqUYs%2B4xJXruPNoKRX8bVhCxwxriEk9FfVIs%2BWAC%2Beh94L%2F3lBplcYHWQAGX8LcMNnq10G8wO6eepebRGPrnIxXXuF5WuCPLbicS1SF0azVVdj01Yc8qMytE8%2FdJqcs7thnqDotic1gViAB%2BUIYYRli52ykkdoELiR91agv8Jn9MGHF0v%2FsT5KTFdwkJhp0nl43Wm%2FV7uhE85gHYURfg7abwZSMHMMf3kL8GOqUBs%2FS0hRDVtUPF4hCgK2acDqGNBtgEkM0D5ILUn%2BJnPe57sJv2X5BfRGXZf%2F0KNm2DScQutWSStOrNP9cxp2oqm0bakjPfeAZfs%2F5SzviDPCVEq4l6PBPTCxqstarRNFuXQ6JjRcS89E4urtznkBTgSsmILTk4BZ6ek68gciPBu1f7EqMzAdy8x2lPSBewM0AHu7pxyKsY5IpfLeGLWq3CoRmN%2BXum&X-Amz-Signature=e02b08be716444b1f40ba727354fb0ed4d0fe01984f7c3d59a1bd9a351db9a19&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLKUKEQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjTYPaE6M4hvvfSNeLauIQOuSbUp4BvFTkCvUUI0IoMgIgYk%2BcnNzrMSmyBAKcaTVm5fBcR8E%2BoxMMSiFK6l4KjzYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC4Sspk9blxVtM%2B3mircAzE5lS67EeZjnWkvgyzW3wSu4tIqAEuW3YIK0WM2luyXDJv1tTpTW7mDKj%2BMVmUnQAEBPC9gXQLv4x4mXO3sNIedzu%2B%2B9qBr%2B%2BWNm5uklt%2Fp9c%2BdROCkZ3VJqxXcus0qs7QJXKujzhu15%2B9hZYRGFjMTLjPNu2RvhtiYHopn1%2BSTrdoVPexXUt%2FyzZLl9KEXA%2F%2FKQIzXEe830JItfQR8GvXkiC%2FO1khoPSso4nWrFJ0tkjX7hTNdlnvR9WRAr5061ILpM9ZrsUDP5%2BACxegAGTGjs6%2B1JMYqaRZu1lsTDwNt05eBou3TRCF7TAVGZWECNwoOBL98hxU000OuLFVbOhaQr01bpZcA%2BkHkllkbXwg3JE4zFVpds9DleWTyffZ%2BWexihubWAw0Nd2qbp31UIvzS203F96WoGqUYs%2B4xJXruPNoKRX8bVhCxwxriEk9FfVIs%2BWAC%2Beh94L%2F3lBplcYHWQAGX8LcMNnq10G8wO6eepebRGPrnIxXXuF5WuCPLbicS1SF0azVVdj01Yc8qMytE8%2FdJqcs7thnqDotic1gViAB%2BUIYYRli52ykkdoELiR91agv8Jn9MGHF0v%2FsT5KTFdwkJhp0nl43Wm%2FV7uhE85gHYURfg7abwZSMHMMf3kL8GOqUBs%2FS0hRDVtUPF4hCgK2acDqGNBtgEkM0D5ILUn%2BJnPe57sJv2X5BfRGXZf%2F0KNm2DScQutWSStOrNP9cxp2oqm0bakjPfeAZfs%2F5SzviDPCVEq4l6PBPTCxqstarRNFuXQ6JjRcS89E4urtznkBTgSsmILTk4BZ6ek68gciPBu1f7EqMzAdy8x2lPSBewM0AHu7pxyKsY5IpfLeGLWq3CoRmN%2BXum&X-Amz-Signature=197dddcf631327edaf6f2181bbc16daa5d954b7d6e53973ab5b1d0520a22f62b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLKUKEQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjTYPaE6M4hvvfSNeLauIQOuSbUp4BvFTkCvUUI0IoMgIgYk%2BcnNzrMSmyBAKcaTVm5fBcR8E%2BoxMMSiFK6l4KjzYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC4Sspk9blxVtM%2B3mircAzE5lS67EeZjnWkvgyzW3wSu4tIqAEuW3YIK0WM2luyXDJv1tTpTW7mDKj%2BMVmUnQAEBPC9gXQLv4x4mXO3sNIedzu%2B%2B9qBr%2B%2BWNm5uklt%2Fp9c%2BdROCkZ3VJqxXcus0qs7QJXKujzhu15%2B9hZYRGFjMTLjPNu2RvhtiYHopn1%2BSTrdoVPexXUt%2FyzZLl9KEXA%2F%2FKQIzXEe830JItfQR8GvXkiC%2FO1khoPSso4nWrFJ0tkjX7hTNdlnvR9WRAr5061ILpM9ZrsUDP5%2BACxegAGTGjs6%2B1JMYqaRZu1lsTDwNt05eBou3TRCF7TAVGZWECNwoOBL98hxU000OuLFVbOhaQr01bpZcA%2BkHkllkbXwg3JE4zFVpds9DleWTyffZ%2BWexihubWAw0Nd2qbp31UIvzS203F96WoGqUYs%2B4xJXruPNoKRX8bVhCxwxriEk9FfVIs%2BWAC%2Beh94L%2F3lBplcYHWQAGX8LcMNnq10G8wO6eepebRGPrnIxXXuF5WuCPLbicS1SF0azVVdj01Yc8qMytE8%2FdJqcs7thnqDotic1gViAB%2BUIYYRli52ykkdoELiR91agv8Jn9MGHF0v%2FsT5KTFdwkJhp0nl43Wm%2FV7uhE85gHYURfg7abwZSMHMMf3kL8GOqUBs%2FS0hRDVtUPF4hCgK2acDqGNBtgEkM0D5ILUn%2BJnPe57sJv2X5BfRGXZf%2F0KNm2DScQutWSStOrNP9cxp2oqm0bakjPfeAZfs%2F5SzviDPCVEq4l6PBPTCxqstarRNFuXQ6JjRcS89E4urtznkBTgSsmILTk4BZ6ek68gciPBu1f7EqMzAdy8x2lPSBewM0AHu7pxyKsY5IpfLeGLWq3CoRmN%2BXum&X-Amz-Signature=238b6648508421ec3a2cbc9108ab3a3704c7c03ea8941cbbce9a3b0021c2bb36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLKUKEQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjTYPaE6M4hvvfSNeLauIQOuSbUp4BvFTkCvUUI0IoMgIgYk%2BcnNzrMSmyBAKcaTVm5fBcR8E%2BoxMMSiFK6l4KjzYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC4Sspk9blxVtM%2B3mircAzE5lS67EeZjnWkvgyzW3wSu4tIqAEuW3YIK0WM2luyXDJv1tTpTW7mDKj%2BMVmUnQAEBPC9gXQLv4x4mXO3sNIedzu%2B%2B9qBr%2B%2BWNm5uklt%2Fp9c%2BdROCkZ3VJqxXcus0qs7QJXKujzhu15%2B9hZYRGFjMTLjPNu2RvhtiYHopn1%2BSTrdoVPexXUt%2FyzZLl9KEXA%2F%2FKQIzXEe830JItfQR8GvXkiC%2FO1khoPSso4nWrFJ0tkjX7hTNdlnvR9WRAr5061ILpM9ZrsUDP5%2BACxegAGTGjs6%2B1JMYqaRZu1lsTDwNt05eBou3TRCF7TAVGZWECNwoOBL98hxU000OuLFVbOhaQr01bpZcA%2BkHkllkbXwg3JE4zFVpds9DleWTyffZ%2BWexihubWAw0Nd2qbp31UIvzS203F96WoGqUYs%2B4xJXruPNoKRX8bVhCxwxriEk9FfVIs%2BWAC%2Beh94L%2F3lBplcYHWQAGX8LcMNnq10G8wO6eepebRGPrnIxXXuF5WuCPLbicS1SF0azVVdj01Yc8qMytE8%2FdJqcs7thnqDotic1gViAB%2BUIYYRli52ykkdoELiR91agv8Jn9MGHF0v%2FsT5KTFdwkJhp0nl43Wm%2FV7uhE85gHYURfg7abwZSMHMMf3kL8GOqUBs%2FS0hRDVtUPF4hCgK2acDqGNBtgEkM0D5ILUn%2BJnPe57sJv2X5BfRGXZf%2F0KNm2DScQutWSStOrNP9cxp2oqm0bakjPfeAZfs%2F5SzviDPCVEq4l6PBPTCxqstarRNFuXQ6JjRcS89E4urtznkBTgSsmILTk4BZ6ek68gciPBu1f7EqMzAdy8x2lPSBewM0AHu7pxyKsY5IpfLeGLWq3CoRmN%2BXum&X-Amz-Signature=dd1b57fbc803749a6b4af8803a8b6c1149bae93ad9d77524006c48dea85158e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLKUKEQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjTYPaE6M4hvvfSNeLauIQOuSbUp4BvFTkCvUUI0IoMgIgYk%2BcnNzrMSmyBAKcaTVm5fBcR8E%2BoxMMSiFK6l4KjzYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC4Sspk9blxVtM%2B3mircAzE5lS67EeZjnWkvgyzW3wSu4tIqAEuW3YIK0WM2luyXDJv1tTpTW7mDKj%2BMVmUnQAEBPC9gXQLv4x4mXO3sNIedzu%2B%2B9qBr%2B%2BWNm5uklt%2Fp9c%2BdROCkZ3VJqxXcus0qs7QJXKujzhu15%2B9hZYRGFjMTLjPNu2RvhtiYHopn1%2BSTrdoVPexXUt%2FyzZLl9KEXA%2F%2FKQIzXEe830JItfQR8GvXkiC%2FO1khoPSso4nWrFJ0tkjX7hTNdlnvR9WRAr5061ILpM9ZrsUDP5%2BACxegAGTGjs6%2B1JMYqaRZu1lsTDwNt05eBou3TRCF7TAVGZWECNwoOBL98hxU000OuLFVbOhaQr01bpZcA%2BkHkllkbXwg3JE4zFVpds9DleWTyffZ%2BWexihubWAw0Nd2qbp31UIvzS203F96WoGqUYs%2B4xJXruPNoKRX8bVhCxwxriEk9FfVIs%2BWAC%2Beh94L%2F3lBplcYHWQAGX8LcMNnq10G8wO6eepebRGPrnIxXXuF5WuCPLbicS1SF0azVVdj01Yc8qMytE8%2FdJqcs7thnqDotic1gViAB%2BUIYYRli52ykkdoELiR91agv8Jn9MGHF0v%2FsT5KTFdwkJhp0nl43Wm%2FV7uhE85gHYURfg7abwZSMHMMf3kL8GOqUBs%2FS0hRDVtUPF4hCgK2acDqGNBtgEkM0D5ILUn%2BJnPe57sJv2X5BfRGXZf%2F0KNm2DScQutWSStOrNP9cxp2oqm0bakjPfeAZfs%2F5SzviDPCVEq4l6PBPTCxqstarRNFuXQ6JjRcS89E4urtznkBTgSsmILTk4BZ6ek68gciPBu1f7EqMzAdy8x2lPSBewM0AHu7pxyKsY5IpfLeGLWq3CoRmN%2BXum&X-Amz-Signature=b0216ff00e791fbf455bc4fb52ba35d764e65ac49aa93be6d6f181313466beb7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YLKUKEQ%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T181129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjTYPaE6M4hvvfSNeLauIQOuSbUp4BvFTkCvUUI0IoMgIgYk%2BcnNzrMSmyBAKcaTVm5fBcR8E%2BoxMMSiFK6l4KjzYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDC4Sspk9blxVtM%2B3mircAzE5lS67EeZjnWkvgyzW3wSu4tIqAEuW3YIK0WM2luyXDJv1tTpTW7mDKj%2BMVmUnQAEBPC9gXQLv4x4mXO3sNIedzu%2B%2B9qBr%2B%2BWNm5uklt%2Fp9c%2BdROCkZ3VJqxXcus0qs7QJXKujzhu15%2B9hZYRGFjMTLjPNu2RvhtiYHopn1%2BSTrdoVPexXUt%2FyzZLl9KEXA%2F%2FKQIzXEe830JItfQR8GvXkiC%2FO1khoPSso4nWrFJ0tkjX7hTNdlnvR9WRAr5061ILpM9ZrsUDP5%2BACxegAGTGjs6%2B1JMYqaRZu1lsTDwNt05eBou3TRCF7TAVGZWECNwoOBL98hxU000OuLFVbOhaQr01bpZcA%2BkHkllkbXwg3JE4zFVpds9DleWTyffZ%2BWexihubWAw0Nd2qbp31UIvzS203F96WoGqUYs%2B4xJXruPNoKRX8bVhCxwxriEk9FfVIs%2BWAC%2Beh94L%2F3lBplcYHWQAGX8LcMNnq10G8wO6eepebRGPrnIxXXuF5WuCPLbicS1SF0azVVdj01Yc8qMytE8%2FdJqcs7thnqDotic1gViAB%2BUIYYRli52ykkdoELiR91agv8Jn9MGHF0v%2FsT5KTFdwkJhp0nl43Wm%2FV7uhE85gHYURfg7abwZSMHMMf3kL8GOqUBs%2FS0hRDVtUPF4hCgK2acDqGNBtgEkM0D5ILUn%2BJnPe57sJv2X5BfRGXZf%2F0KNm2DScQutWSStOrNP9cxp2oqm0bakjPfeAZfs%2F5SzviDPCVEq4l6PBPTCxqstarRNFuXQ6JjRcS89E4urtznkBTgSsmILTk4BZ6ek68gciPBu1f7EqMzAdy8x2lPSBewM0AHu7pxyKsY5IpfLeGLWq3CoRmN%2BXum&X-Amz-Signature=aef229919eeb4c21c724658ebd9d0bbe3e868da60964ca5e4698349e7602d9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
