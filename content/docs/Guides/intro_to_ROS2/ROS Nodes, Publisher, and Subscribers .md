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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NXRYP3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEYtYZdg%2BpHyeYIUWDzoPbsMuE6cWnHH9Nmohbrw0OLAIgKCCNR19bDDeW6e8zM13lysv7Dp8qqrgRw3d4SNu3pTAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK%2FvPwmFJk5xV%2FdYKyrcAxL%2F5CIB0smqGRQZd32s6xRwOwYFesznowTx6%2BF%2Fw9K2fCnN4FFhRCy%2BDEQwgPFkFnBKVLqYvBJ3rcq%2BM64Yy0%2FdQ3pZKQH29%2F6DBHras4pueYQysLKr2zv89Eb%2BwWSoazqtNDp2HfTx3YPQnUeRp%2B6I%2BK%2B7yhDL3UDeo6Wn%2FphvNjeuDCbrjKseSIj5QRIL7KjmJPJLGC933rynUCdYCtsqmpJk4uTanqs27BU4DO9reVXdU8ViWKRua9jdMOcVF2D4ED649DguI%2BbB0%2Bn20AzqqxB2wK23YAbPuPM%2FDeEmQetf78AY2Ggl3vlXbbxguY4PbRmThPdeV0U5vKBmjGya5BTJKXw13RCohOXBnfsDZ5AAoxiNdbU%2F8QYBR7q78vW8g5I%2FHFkpqExlOMEW1bz3VtUQ9AbqZXNuvknkWMc8hx9Y7SmrZNqvA9YaRVwsjsesXjdFvtXtETZNhddRtaDaN%2FpnG1kua3U2AEHHlW2XZWBIvgQrepYL0lPAmNlWTF2LjEfLdpxCdhtr9RUPNzlDuja%2BT4QfB8wLt%2Bsr2poQErbJ0Qj%2BFlsjxr6iYE1BD9%2Bf60NcO4AR6PAmqJZQF15cAXcmJMkKq6gO7DQRBg7k5Munq%2F7I4tArugoqMK%2Fx2r4GOqUBhtQ5MmlylI90hMKQkFOYKWZcSPyiN0XH0rK0hQZHvdJgrMywx8mahOlfD8p5Mrs2g0WsySc1xOic6TMpGlD%2FHJgSALU1vtQ7AmiJiQAguI3ENhQehmLIbC2hTj%2FX6rPBm2Sq5U%2B0DeEavDRnF2MVEsXmpGMNLOfZnzca8VACEvsJvZFFsCipZuR6rTA0BkfSkfssTBODd7ojtLV%2BYGSuiv%2FYYAUj&X-Amz-Signature=3188516c064a83b7150ba45ecd74365281e970bb024d66f4152067c5423009e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NXRYP3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEYtYZdg%2BpHyeYIUWDzoPbsMuE6cWnHH9Nmohbrw0OLAIgKCCNR19bDDeW6e8zM13lysv7Dp8qqrgRw3d4SNu3pTAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK%2FvPwmFJk5xV%2FdYKyrcAxL%2F5CIB0smqGRQZd32s6xRwOwYFesznowTx6%2BF%2Fw9K2fCnN4FFhRCy%2BDEQwgPFkFnBKVLqYvBJ3rcq%2BM64Yy0%2FdQ3pZKQH29%2F6DBHras4pueYQysLKr2zv89Eb%2BwWSoazqtNDp2HfTx3YPQnUeRp%2B6I%2BK%2B7yhDL3UDeo6Wn%2FphvNjeuDCbrjKseSIj5QRIL7KjmJPJLGC933rynUCdYCtsqmpJk4uTanqs27BU4DO9reVXdU8ViWKRua9jdMOcVF2D4ED649DguI%2BbB0%2Bn20AzqqxB2wK23YAbPuPM%2FDeEmQetf78AY2Ggl3vlXbbxguY4PbRmThPdeV0U5vKBmjGya5BTJKXw13RCohOXBnfsDZ5AAoxiNdbU%2F8QYBR7q78vW8g5I%2FHFkpqExlOMEW1bz3VtUQ9AbqZXNuvknkWMc8hx9Y7SmrZNqvA9YaRVwsjsesXjdFvtXtETZNhddRtaDaN%2FpnG1kua3U2AEHHlW2XZWBIvgQrepYL0lPAmNlWTF2LjEfLdpxCdhtr9RUPNzlDuja%2BT4QfB8wLt%2Bsr2poQErbJ0Qj%2BFlsjxr6iYE1BD9%2Bf60NcO4AR6PAmqJZQF15cAXcmJMkKq6gO7DQRBg7k5Munq%2F7I4tArugoqMK%2Fx2r4GOqUBhtQ5MmlylI90hMKQkFOYKWZcSPyiN0XH0rK0hQZHvdJgrMywx8mahOlfD8p5Mrs2g0WsySc1xOic6TMpGlD%2FHJgSALU1vtQ7AmiJiQAguI3ENhQehmLIbC2hTj%2FX6rPBm2Sq5U%2B0DeEavDRnF2MVEsXmpGMNLOfZnzca8VACEvsJvZFFsCipZuR6rTA0BkfSkfssTBODd7ojtLV%2BYGSuiv%2FYYAUj&X-Amz-Signature=2576bf458c3ff1e9cec261bb53b0129e3382e825bd54b13aca6d9fc817b41d78&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NXRYP3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEYtYZdg%2BpHyeYIUWDzoPbsMuE6cWnHH9Nmohbrw0OLAIgKCCNR19bDDeW6e8zM13lysv7Dp8qqrgRw3d4SNu3pTAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK%2FvPwmFJk5xV%2FdYKyrcAxL%2F5CIB0smqGRQZd32s6xRwOwYFesznowTx6%2BF%2Fw9K2fCnN4FFhRCy%2BDEQwgPFkFnBKVLqYvBJ3rcq%2BM64Yy0%2FdQ3pZKQH29%2F6DBHras4pueYQysLKr2zv89Eb%2BwWSoazqtNDp2HfTx3YPQnUeRp%2B6I%2BK%2B7yhDL3UDeo6Wn%2FphvNjeuDCbrjKseSIj5QRIL7KjmJPJLGC933rynUCdYCtsqmpJk4uTanqs27BU4DO9reVXdU8ViWKRua9jdMOcVF2D4ED649DguI%2BbB0%2Bn20AzqqxB2wK23YAbPuPM%2FDeEmQetf78AY2Ggl3vlXbbxguY4PbRmThPdeV0U5vKBmjGya5BTJKXw13RCohOXBnfsDZ5AAoxiNdbU%2F8QYBR7q78vW8g5I%2FHFkpqExlOMEW1bz3VtUQ9AbqZXNuvknkWMc8hx9Y7SmrZNqvA9YaRVwsjsesXjdFvtXtETZNhddRtaDaN%2FpnG1kua3U2AEHHlW2XZWBIvgQrepYL0lPAmNlWTF2LjEfLdpxCdhtr9RUPNzlDuja%2BT4QfB8wLt%2Bsr2poQErbJ0Qj%2BFlsjxr6iYE1BD9%2Bf60NcO4AR6PAmqJZQF15cAXcmJMkKq6gO7DQRBg7k5Munq%2F7I4tArugoqMK%2Fx2r4GOqUBhtQ5MmlylI90hMKQkFOYKWZcSPyiN0XH0rK0hQZHvdJgrMywx8mahOlfD8p5Mrs2g0WsySc1xOic6TMpGlD%2FHJgSALU1vtQ7AmiJiQAguI3ENhQehmLIbC2hTj%2FX6rPBm2Sq5U%2B0DeEavDRnF2MVEsXmpGMNLOfZnzca8VACEvsJvZFFsCipZuR6rTA0BkfSkfssTBODd7ojtLV%2BYGSuiv%2FYYAUj&X-Amz-Signature=037ad7b80b54290c8de1ff069b32fa358b09e9a71bd7be9b2d41224d386e294c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NXRYP3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEYtYZdg%2BpHyeYIUWDzoPbsMuE6cWnHH9Nmohbrw0OLAIgKCCNR19bDDeW6e8zM13lysv7Dp8qqrgRw3d4SNu3pTAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK%2FvPwmFJk5xV%2FdYKyrcAxL%2F5CIB0smqGRQZd32s6xRwOwYFesznowTx6%2BF%2Fw9K2fCnN4FFhRCy%2BDEQwgPFkFnBKVLqYvBJ3rcq%2BM64Yy0%2FdQ3pZKQH29%2F6DBHras4pueYQysLKr2zv89Eb%2BwWSoazqtNDp2HfTx3YPQnUeRp%2B6I%2BK%2B7yhDL3UDeo6Wn%2FphvNjeuDCbrjKseSIj5QRIL7KjmJPJLGC933rynUCdYCtsqmpJk4uTanqs27BU4DO9reVXdU8ViWKRua9jdMOcVF2D4ED649DguI%2BbB0%2Bn20AzqqxB2wK23YAbPuPM%2FDeEmQetf78AY2Ggl3vlXbbxguY4PbRmThPdeV0U5vKBmjGya5BTJKXw13RCohOXBnfsDZ5AAoxiNdbU%2F8QYBR7q78vW8g5I%2FHFkpqExlOMEW1bz3VtUQ9AbqZXNuvknkWMc8hx9Y7SmrZNqvA9YaRVwsjsesXjdFvtXtETZNhddRtaDaN%2FpnG1kua3U2AEHHlW2XZWBIvgQrepYL0lPAmNlWTF2LjEfLdpxCdhtr9RUPNzlDuja%2BT4QfB8wLt%2Bsr2poQErbJ0Qj%2BFlsjxr6iYE1BD9%2Bf60NcO4AR6PAmqJZQF15cAXcmJMkKq6gO7DQRBg7k5Munq%2F7I4tArugoqMK%2Fx2r4GOqUBhtQ5MmlylI90hMKQkFOYKWZcSPyiN0XH0rK0hQZHvdJgrMywx8mahOlfD8p5Mrs2g0WsySc1xOic6TMpGlD%2FHJgSALU1vtQ7AmiJiQAguI3ENhQehmLIbC2hTj%2FX6rPBm2Sq5U%2B0DeEavDRnF2MVEsXmpGMNLOfZnzca8VACEvsJvZFFsCipZuR6rTA0BkfSkfssTBODd7ojtLV%2BYGSuiv%2FYYAUj&X-Amz-Signature=9df25f81a50584d2440969ddbdc02923740f2ac557eecfe26feb650122624a95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NXRYP3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEYtYZdg%2BpHyeYIUWDzoPbsMuE6cWnHH9Nmohbrw0OLAIgKCCNR19bDDeW6e8zM13lysv7Dp8qqrgRw3d4SNu3pTAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK%2FvPwmFJk5xV%2FdYKyrcAxL%2F5CIB0smqGRQZd32s6xRwOwYFesznowTx6%2BF%2Fw9K2fCnN4FFhRCy%2BDEQwgPFkFnBKVLqYvBJ3rcq%2BM64Yy0%2FdQ3pZKQH29%2F6DBHras4pueYQysLKr2zv89Eb%2BwWSoazqtNDp2HfTx3YPQnUeRp%2B6I%2BK%2B7yhDL3UDeo6Wn%2FphvNjeuDCbrjKseSIj5QRIL7KjmJPJLGC933rynUCdYCtsqmpJk4uTanqs27BU4DO9reVXdU8ViWKRua9jdMOcVF2D4ED649DguI%2BbB0%2Bn20AzqqxB2wK23YAbPuPM%2FDeEmQetf78AY2Ggl3vlXbbxguY4PbRmThPdeV0U5vKBmjGya5BTJKXw13RCohOXBnfsDZ5AAoxiNdbU%2F8QYBR7q78vW8g5I%2FHFkpqExlOMEW1bz3VtUQ9AbqZXNuvknkWMc8hx9Y7SmrZNqvA9YaRVwsjsesXjdFvtXtETZNhddRtaDaN%2FpnG1kua3U2AEHHlW2XZWBIvgQrepYL0lPAmNlWTF2LjEfLdpxCdhtr9RUPNzlDuja%2BT4QfB8wLt%2Bsr2poQErbJ0Qj%2BFlsjxr6iYE1BD9%2Bf60NcO4AR6PAmqJZQF15cAXcmJMkKq6gO7DQRBg7k5Munq%2F7I4tArugoqMK%2Fx2r4GOqUBhtQ5MmlylI90hMKQkFOYKWZcSPyiN0XH0rK0hQZHvdJgrMywx8mahOlfD8p5Mrs2g0WsySc1xOic6TMpGlD%2FHJgSALU1vtQ7AmiJiQAguI3ENhQehmLIbC2hTj%2FX6rPBm2Sq5U%2B0DeEavDRnF2MVEsXmpGMNLOfZnzca8VACEvsJvZFFsCipZuR6rTA0BkfSkfssTBODd7ojtLV%2BYGSuiv%2FYYAUj&X-Amz-Signature=9f1664dcc10864b2851e05edbb36de70d6f5d278f462c8d0eb45f6e2950c7fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NXRYP3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEYtYZdg%2BpHyeYIUWDzoPbsMuE6cWnHH9Nmohbrw0OLAIgKCCNR19bDDeW6e8zM13lysv7Dp8qqrgRw3d4SNu3pTAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK%2FvPwmFJk5xV%2FdYKyrcAxL%2F5CIB0smqGRQZd32s6xRwOwYFesznowTx6%2BF%2Fw9K2fCnN4FFhRCy%2BDEQwgPFkFnBKVLqYvBJ3rcq%2BM64Yy0%2FdQ3pZKQH29%2F6DBHras4pueYQysLKr2zv89Eb%2BwWSoazqtNDp2HfTx3YPQnUeRp%2B6I%2BK%2B7yhDL3UDeo6Wn%2FphvNjeuDCbrjKseSIj5QRIL7KjmJPJLGC933rynUCdYCtsqmpJk4uTanqs27BU4DO9reVXdU8ViWKRua9jdMOcVF2D4ED649DguI%2BbB0%2Bn20AzqqxB2wK23YAbPuPM%2FDeEmQetf78AY2Ggl3vlXbbxguY4PbRmThPdeV0U5vKBmjGya5BTJKXw13RCohOXBnfsDZ5AAoxiNdbU%2F8QYBR7q78vW8g5I%2FHFkpqExlOMEW1bz3VtUQ9AbqZXNuvknkWMc8hx9Y7SmrZNqvA9YaRVwsjsesXjdFvtXtETZNhddRtaDaN%2FpnG1kua3U2AEHHlW2XZWBIvgQrepYL0lPAmNlWTF2LjEfLdpxCdhtr9RUPNzlDuja%2BT4QfB8wLt%2Bsr2poQErbJ0Qj%2BFlsjxr6iYE1BD9%2Bf60NcO4AR6PAmqJZQF15cAXcmJMkKq6gO7DQRBg7k5Munq%2F7I4tArugoqMK%2Fx2r4GOqUBhtQ5MmlylI90hMKQkFOYKWZcSPyiN0XH0rK0hQZHvdJgrMywx8mahOlfD8p5Mrs2g0WsySc1xOic6TMpGlD%2FHJgSALU1vtQ7AmiJiQAguI3ENhQehmLIbC2hTj%2FX6rPBm2Sq5U%2B0DeEavDRnF2MVEsXmpGMNLOfZnzca8VACEvsJvZFFsCipZuR6rTA0BkfSkfssTBODd7ojtLV%2BYGSuiv%2FYYAUj&X-Amz-Signature=a287be358853bf5633e838e4592434a3369731f5df433828f2ca94bdf96a2d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NXRYP3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEYtYZdg%2BpHyeYIUWDzoPbsMuE6cWnHH9Nmohbrw0OLAIgKCCNR19bDDeW6e8zM13lysv7Dp8qqrgRw3d4SNu3pTAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK%2FvPwmFJk5xV%2FdYKyrcAxL%2F5CIB0smqGRQZd32s6xRwOwYFesznowTx6%2BF%2Fw9K2fCnN4FFhRCy%2BDEQwgPFkFnBKVLqYvBJ3rcq%2BM64Yy0%2FdQ3pZKQH29%2F6DBHras4pueYQysLKr2zv89Eb%2BwWSoazqtNDp2HfTx3YPQnUeRp%2B6I%2BK%2B7yhDL3UDeo6Wn%2FphvNjeuDCbrjKseSIj5QRIL7KjmJPJLGC933rynUCdYCtsqmpJk4uTanqs27BU4DO9reVXdU8ViWKRua9jdMOcVF2D4ED649DguI%2BbB0%2Bn20AzqqxB2wK23YAbPuPM%2FDeEmQetf78AY2Ggl3vlXbbxguY4PbRmThPdeV0U5vKBmjGya5BTJKXw13RCohOXBnfsDZ5AAoxiNdbU%2F8QYBR7q78vW8g5I%2FHFkpqExlOMEW1bz3VtUQ9AbqZXNuvknkWMc8hx9Y7SmrZNqvA9YaRVwsjsesXjdFvtXtETZNhddRtaDaN%2FpnG1kua3U2AEHHlW2XZWBIvgQrepYL0lPAmNlWTF2LjEfLdpxCdhtr9RUPNzlDuja%2BT4QfB8wLt%2Bsr2poQErbJ0Qj%2BFlsjxr6iYE1BD9%2Bf60NcO4AR6PAmqJZQF15cAXcmJMkKq6gO7DQRBg7k5Munq%2F7I4tArugoqMK%2Fx2r4GOqUBhtQ5MmlylI90hMKQkFOYKWZcSPyiN0XH0rK0hQZHvdJgrMywx8mahOlfD8p5Mrs2g0WsySc1xOic6TMpGlD%2FHJgSALU1vtQ7AmiJiQAguI3ENhQehmLIbC2hTj%2FX6rPBm2Sq5U%2B0DeEavDRnF2MVEsXmpGMNLOfZnzca8VACEvsJvZFFsCipZuR6rTA0BkfSkfssTBODd7ojtLV%2BYGSuiv%2FYYAUj&X-Amz-Signature=a5617df226b1b011f6492eb56956190a795f235f1e93e7889dc1b31d58325118&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6NXRYP3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEYtYZdg%2BpHyeYIUWDzoPbsMuE6cWnHH9Nmohbrw0OLAIgKCCNR19bDDeW6e8zM13lysv7Dp8qqrgRw3d4SNu3pTAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDK%2FvPwmFJk5xV%2FdYKyrcAxL%2F5CIB0smqGRQZd32s6xRwOwYFesznowTx6%2BF%2Fw9K2fCnN4FFhRCy%2BDEQwgPFkFnBKVLqYvBJ3rcq%2BM64Yy0%2FdQ3pZKQH29%2F6DBHras4pueYQysLKr2zv89Eb%2BwWSoazqtNDp2HfTx3YPQnUeRp%2B6I%2BK%2B7yhDL3UDeo6Wn%2FphvNjeuDCbrjKseSIj5QRIL7KjmJPJLGC933rynUCdYCtsqmpJk4uTanqs27BU4DO9reVXdU8ViWKRua9jdMOcVF2D4ED649DguI%2BbB0%2Bn20AzqqxB2wK23YAbPuPM%2FDeEmQetf78AY2Ggl3vlXbbxguY4PbRmThPdeV0U5vKBmjGya5BTJKXw13RCohOXBnfsDZ5AAoxiNdbU%2F8QYBR7q78vW8g5I%2FHFkpqExlOMEW1bz3VtUQ9AbqZXNuvknkWMc8hx9Y7SmrZNqvA9YaRVwsjsesXjdFvtXtETZNhddRtaDaN%2FpnG1kua3U2AEHHlW2XZWBIvgQrepYL0lPAmNlWTF2LjEfLdpxCdhtr9RUPNzlDuja%2BT4QfB8wLt%2Bsr2poQErbJ0Qj%2BFlsjxr6iYE1BD9%2Bf60NcO4AR6PAmqJZQF15cAXcmJMkKq6gO7DQRBg7k5Munq%2F7I4tArugoqMK%2Fx2r4GOqUBhtQ5MmlylI90hMKQkFOYKWZcSPyiN0XH0rK0hQZHvdJgrMywx8mahOlfD8p5Mrs2g0WsySc1xOic6TMpGlD%2FHJgSALU1vtQ7AmiJiQAguI3ENhQehmLIbC2hTj%2FX6rPBm2Sq5U%2B0DeEavDRnF2MVEsXmpGMNLOfZnzca8VACEvsJvZFFsCipZuR6rTA0BkfSkfssTBODd7ojtLV%2BYGSuiv%2FYYAUj&X-Amz-Signature=ed4431102b66ff2fcf677dd3a90f89ecc8f50b14f1c52431d6d76856164d5256&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
