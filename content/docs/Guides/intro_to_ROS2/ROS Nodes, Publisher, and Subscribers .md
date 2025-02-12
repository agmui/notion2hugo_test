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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UNPR7F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHdWMEeHxDRxl%2FrjStrSXBKKQi2aM3vqBgZkhNZ7fa4QIhAOrMmJGh%2BdGA60B3SgAxD8jReRHv4GV3VdGhqDDfk6WFKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyseA%2BMR0psr6pFM4Qq3AMjwqC%2BJP4BAXBCxNFblNAMYV81AbEeMTIHD4BHD7NRH2GfnBgcaA7LuuMgJ65s0ljFb25n2VvXikXxiJu%2Fk8XuoOFSvIuvnv%2B61WgpyfdbWq9vOUfrnhLCsXu191sbcJDbhVuq9b093ggwg4RBA9tVLqDS8KmtW3n%2BvZXYSCWvGLU%2BbYUy%2FNrHUnQxjDWTDBy8w%2FejlH87hoB8%2BmUXbcuc3M0zBu2TrygSUACTMzktgHZWQRKLw9VF7%2FbJN0v6VujI%2BShZwlKGIwnPfJmpl4huaKGMeDvYBCTy7j2GFhLkByo0EWbFHmDAVKd46JbB%2F7suWC6d%2FW5wbXM0RpZO2slOxDearmZX0MaumfldpNWhVpWRFxbf2veCNy%2FhPRCkAp2dQt1EdzDrab6%2BkQ7PKG%2BkmCI7L%2FInDte%2Br7tL1hW4N%2BvX%2BFVncTZhgbtD4ewsU4eZmEefDERPYAJ94YYNRULh3%2BJ3oR9tEuTmBhKvVmix4ouvr2NVGvEkhgZ2NXyDvsoty6q6xHUIzWkT1WZf3TrIi2ogOb29bceNV8iaqdh2C7k1%2BGQmkDbXjW7M2McqMH4aeBw1ZDPraVpxq8snH3kSrK%2BebyDOGd30wRmQWyeXl4z2rfz2p3IhWtF7IzC6yK69BjqkAVrRCrerxlUF26jIb6nInRZrNqU6CwgAHgl5cac%2Bl5PNLg37ZAg2WK%2FG2HFnk%2F5yaXGuaM2Zsm9v3UhR4X3VFMBZTj%2B90fxZef0xa65MWpOIJHFVyZbKZ%2F2NhHu8nx12OpBHwHp7cSQFym8uGQDg2c3RrwAJJnau4rwrbWLBbjM%2FSq18rNVjaZFsTR%2FgmX%2FkcXI%2BiGyrUTZn8z2DjCQqgjJMCa%2Bl&X-Amz-Signature=1b46bc12165318423b31b72cb0a61c356cfe4c20a912b9d980db3cb8657c06ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UNPR7F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHdWMEeHxDRxl%2FrjStrSXBKKQi2aM3vqBgZkhNZ7fa4QIhAOrMmJGh%2BdGA60B3SgAxD8jReRHv4GV3VdGhqDDfk6WFKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyseA%2BMR0psr6pFM4Qq3AMjwqC%2BJP4BAXBCxNFblNAMYV81AbEeMTIHD4BHD7NRH2GfnBgcaA7LuuMgJ65s0ljFb25n2VvXikXxiJu%2Fk8XuoOFSvIuvnv%2B61WgpyfdbWq9vOUfrnhLCsXu191sbcJDbhVuq9b093ggwg4RBA9tVLqDS8KmtW3n%2BvZXYSCWvGLU%2BbYUy%2FNrHUnQxjDWTDBy8w%2FejlH87hoB8%2BmUXbcuc3M0zBu2TrygSUACTMzktgHZWQRKLw9VF7%2FbJN0v6VujI%2BShZwlKGIwnPfJmpl4huaKGMeDvYBCTy7j2GFhLkByo0EWbFHmDAVKd46JbB%2F7suWC6d%2FW5wbXM0RpZO2slOxDearmZX0MaumfldpNWhVpWRFxbf2veCNy%2FhPRCkAp2dQt1EdzDrab6%2BkQ7PKG%2BkmCI7L%2FInDte%2Br7tL1hW4N%2BvX%2BFVncTZhgbtD4ewsU4eZmEefDERPYAJ94YYNRULh3%2BJ3oR9tEuTmBhKvVmix4ouvr2NVGvEkhgZ2NXyDvsoty6q6xHUIzWkT1WZf3TrIi2ogOb29bceNV8iaqdh2C7k1%2BGQmkDbXjW7M2McqMH4aeBw1ZDPraVpxq8snH3kSrK%2BebyDOGd30wRmQWyeXl4z2rfz2p3IhWtF7IzC6yK69BjqkAVrRCrerxlUF26jIb6nInRZrNqU6CwgAHgl5cac%2Bl5PNLg37ZAg2WK%2FG2HFnk%2F5yaXGuaM2Zsm9v3UhR4X3VFMBZTj%2B90fxZef0xa65MWpOIJHFVyZbKZ%2F2NhHu8nx12OpBHwHp7cSQFym8uGQDg2c3RrwAJJnau4rwrbWLBbjM%2FSq18rNVjaZFsTR%2FgmX%2FkcXI%2BiGyrUTZn8z2DjCQqgjJMCa%2Bl&X-Amz-Signature=4b7f1d5012d5a5e0be297a58af5523272450125d9dcae3966a6a42b688653c09&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UNPR7F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHdWMEeHxDRxl%2FrjStrSXBKKQi2aM3vqBgZkhNZ7fa4QIhAOrMmJGh%2BdGA60B3SgAxD8jReRHv4GV3VdGhqDDfk6WFKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyseA%2BMR0psr6pFM4Qq3AMjwqC%2BJP4BAXBCxNFblNAMYV81AbEeMTIHD4BHD7NRH2GfnBgcaA7LuuMgJ65s0ljFb25n2VvXikXxiJu%2Fk8XuoOFSvIuvnv%2B61WgpyfdbWq9vOUfrnhLCsXu191sbcJDbhVuq9b093ggwg4RBA9tVLqDS8KmtW3n%2BvZXYSCWvGLU%2BbYUy%2FNrHUnQxjDWTDBy8w%2FejlH87hoB8%2BmUXbcuc3M0zBu2TrygSUACTMzktgHZWQRKLw9VF7%2FbJN0v6VujI%2BShZwlKGIwnPfJmpl4huaKGMeDvYBCTy7j2GFhLkByo0EWbFHmDAVKd46JbB%2F7suWC6d%2FW5wbXM0RpZO2slOxDearmZX0MaumfldpNWhVpWRFxbf2veCNy%2FhPRCkAp2dQt1EdzDrab6%2BkQ7PKG%2BkmCI7L%2FInDte%2Br7tL1hW4N%2BvX%2BFVncTZhgbtD4ewsU4eZmEefDERPYAJ94YYNRULh3%2BJ3oR9tEuTmBhKvVmix4ouvr2NVGvEkhgZ2NXyDvsoty6q6xHUIzWkT1WZf3TrIi2ogOb29bceNV8iaqdh2C7k1%2BGQmkDbXjW7M2McqMH4aeBw1ZDPraVpxq8snH3kSrK%2BebyDOGd30wRmQWyeXl4z2rfz2p3IhWtF7IzC6yK69BjqkAVrRCrerxlUF26jIb6nInRZrNqU6CwgAHgl5cac%2Bl5PNLg37ZAg2WK%2FG2HFnk%2F5yaXGuaM2Zsm9v3UhR4X3VFMBZTj%2B90fxZef0xa65MWpOIJHFVyZbKZ%2F2NhHu8nx12OpBHwHp7cSQFym8uGQDg2c3RrwAJJnau4rwrbWLBbjM%2FSq18rNVjaZFsTR%2FgmX%2FkcXI%2BiGyrUTZn8z2DjCQqgjJMCa%2Bl&X-Amz-Signature=f047a7ca543d4488665ed6a908e198a482e824d33341dc5c2a6cf927a1bd1998&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UNPR7F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHdWMEeHxDRxl%2FrjStrSXBKKQi2aM3vqBgZkhNZ7fa4QIhAOrMmJGh%2BdGA60B3SgAxD8jReRHv4GV3VdGhqDDfk6WFKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyseA%2BMR0psr6pFM4Qq3AMjwqC%2BJP4BAXBCxNFblNAMYV81AbEeMTIHD4BHD7NRH2GfnBgcaA7LuuMgJ65s0ljFb25n2VvXikXxiJu%2Fk8XuoOFSvIuvnv%2B61WgpyfdbWq9vOUfrnhLCsXu191sbcJDbhVuq9b093ggwg4RBA9tVLqDS8KmtW3n%2BvZXYSCWvGLU%2BbYUy%2FNrHUnQxjDWTDBy8w%2FejlH87hoB8%2BmUXbcuc3M0zBu2TrygSUACTMzktgHZWQRKLw9VF7%2FbJN0v6VujI%2BShZwlKGIwnPfJmpl4huaKGMeDvYBCTy7j2GFhLkByo0EWbFHmDAVKd46JbB%2F7suWC6d%2FW5wbXM0RpZO2slOxDearmZX0MaumfldpNWhVpWRFxbf2veCNy%2FhPRCkAp2dQt1EdzDrab6%2BkQ7PKG%2BkmCI7L%2FInDte%2Br7tL1hW4N%2BvX%2BFVncTZhgbtD4ewsU4eZmEefDERPYAJ94YYNRULh3%2BJ3oR9tEuTmBhKvVmix4ouvr2NVGvEkhgZ2NXyDvsoty6q6xHUIzWkT1WZf3TrIi2ogOb29bceNV8iaqdh2C7k1%2BGQmkDbXjW7M2McqMH4aeBw1ZDPraVpxq8snH3kSrK%2BebyDOGd30wRmQWyeXl4z2rfz2p3IhWtF7IzC6yK69BjqkAVrRCrerxlUF26jIb6nInRZrNqU6CwgAHgl5cac%2Bl5PNLg37ZAg2WK%2FG2HFnk%2F5yaXGuaM2Zsm9v3UhR4X3VFMBZTj%2B90fxZef0xa65MWpOIJHFVyZbKZ%2F2NhHu8nx12OpBHwHp7cSQFym8uGQDg2c3RrwAJJnau4rwrbWLBbjM%2FSq18rNVjaZFsTR%2FgmX%2FkcXI%2BiGyrUTZn8z2DjCQqgjJMCa%2Bl&X-Amz-Signature=74164e9634ddfb2f4d359dc13f2320147a61c86f2ce14fc97b6d580cf9514b54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UNPR7F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHdWMEeHxDRxl%2FrjStrSXBKKQi2aM3vqBgZkhNZ7fa4QIhAOrMmJGh%2BdGA60B3SgAxD8jReRHv4GV3VdGhqDDfk6WFKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyseA%2BMR0psr6pFM4Qq3AMjwqC%2BJP4BAXBCxNFblNAMYV81AbEeMTIHD4BHD7NRH2GfnBgcaA7LuuMgJ65s0ljFb25n2VvXikXxiJu%2Fk8XuoOFSvIuvnv%2B61WgpyfdbWq9vOUfrnhLCsXu191sbcJDbhVuq9b093ggwg4RBA9tVLqDS8KmtW3n%2BvZXYSCWvGLU%2BbYUy%2FNrHUnQxjDWTDBy8w%2FejlH87hoB8%2BmUXbcuc3M0zBu2TrygSUACTMzktgHZWQRKLw9VF7%2FbJN0v6VujI%2BShZwlKGIwnPfJmpl4huaKGMeDvYBCTy7j2GFhLkByo0EWbFHmDAVKd46JbB%2F7suWC6d%2FW5wbXM0RpZO2slOxDearmZX0MaumfldpNWhVpWRFxbf2veCNy%2FhPRCkAp2dQt1EdzDrab6%2BkQ7PKG%2BkmCI7L%2FInDte%2Br7tL1hW4N%2BvX%2BFVncTZhgbtD4ewsU4eZmEefDERPYAJ94YYNRULh3%2BJ3oR9tEuTmBhKvVmix4ouvr2NVGvEkhgZ2NXyDvsoty6q6xHUIzWkT1WZf3TrIi2ogOb29bceNV8iaqdh2C7k1%2BGQmkDbXjW7M2McqMH4aeBw1ZDPraVpxq8snH3kSrK%2BebyDOGd30wRmQWyeXl4z2rfz2p3IhWtF7IzC6yK69BjqkAVrRCrerxlUF26jIb6nInRZrNqU6CwgAHgl5cac%2Bl5PNLg37ZAg2WK%2FG2HFnk%2F5yaXGuaM2Zsm9v3UhR4X3VFMBZTj%2B90fxZef0xa65MWpOIJHFVyZbKZ%2F2NhHu8nx12OpBHwHp7cSQFym8uGQDg2c3RrwAJJnau4rwrbWLBbjM%2FSq18rNVjaZFsTR%2FgmX%2FkcXI%2BiGyrUTZn8z2DjCQqgjJMCa%2Bl&X-Amz-Signature=a67e205abb1c97b4410cb3e6ee4b90a9a91f0a25e1ea5de39192702494d9a57c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UNPR7F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHdWMEeHxDRxl%2FrjStrSXBKKQi2aM3vqBgZkhNZ7fa4QIhAOrMmJGh%2BdGA60B3SgAxD8jReRHv4GV3VdGhqDDfk6WFKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyseA%2BMR0psr6pFM4Qq3AMjwqC%2BJP4BAXBCxNFblNAMYV81AbEeMTIHD4BHD7NRH2GfnBgcaA7LuuMgJ65s0ljFb25n2VvXikXxiJu%2Fk8XuoOFSvIuvnv%2B61WgpyfdbWq9vOUfrnhLCsXu191sbcJDbhVuq9b093ggwg4RBA9tVLqDS8KmtW3n%2BvZXYSCWvGLU%2BbYUy%2FNrHUnQxjDWTDBy8w%2FejlH87hoB8%2BmUXbcuc3M0zBu2TrygSUACTMzktgHZWQRKLw9VF7%2FbJN0v6VujI%2BShZwlKGIwnPfJmpl4huaKGMeDvYBCTy7j2GFhLkByo0EWbFHmDAVKd46JbB%2F7suWC6d%2FW5wbXM0RpZO2slOxDearmZX0MaumfldpNWhVpWRFxbf2veCNy%2FhPRCkAp2dQt1EdzDrab6%2BkQ7PKG%2BkmCI7L%2FInDte%2Br7tL1hW4N%2BvX%2BFVncTZhgbtD4ewsU4eZmEefDERPYAJ94YYNRULh3%2BJ3oR9tEuTmBhKvVmix4ouvr2NVGvEkhgZ2NXyDvsoty6q6xHUIzWkT1WZf3TrIi2ogOb29bceNV8iaqdh2C7k1%2BGQmkDbXjW7M2McqMH4aeBw1ZDPraVpxq8snH3kSrK%2BebyDOGd30wRmQWyeXl4z2rfz2p3IhWtF7IzC6yK69BjqkAVrRCrerxlUF26jIb6nInRZrNqU6CwgAHgl5cac%2Bl5PNLg37ZAg2WK%2FG2HFnk%2F5yaXGuaM2Zsm9v3UhR4X3VFMBZTj%2B90fxZef0xa65MWpOIJHFVyZbKZ%2F2NhHu8nx12OpBHwHp7cSQFym8uGQDg2c3RrwAJJnau4rwrbWLBbjM%2FSq18rNVjaZFsTR%2FgmX%2FkcXI%2BiGyrUTZn8z2DjCQqgjJMCa%2Bl&X-Amz-Signature=8ad803fc4fa32b53a1ae62a838c0204c9d7b55162542be0b7b7ad8c7e3089192&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UNPR7F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHdWMEeHxDRxl%2FrjStrSXBKKQi2aM3vqBgZkhNZ7fa4QIhAOrMmJGh%2BdGA60B3SgAxD8jReRHv4GV3VdGhqDDfk6WFKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyseA%2BMR0psr6pFM4Qq3AMjwqC%2BJP4BAXBCxNFblNAMYV81AbEeMTIHD4BHD7NRH2GfnBgcaA7LuuMgJ65s0ljFb25n2VvXikXxiJu%2Fk8XuoOFSvIuvnv%2B61WgpyfdbWq9vOUfrnhLCsXu191sbcJDbhVuq9b093ggwg4RBA9tVLqDS8KmtW3n%2BvZXYSCWvGLU%2BbYUy%2FNrHUnQxjDWTDBy8w%2FejlH87hoB8%2BmUXbcuc3M0zBu2TrygSUACTMzktgHZWQRKLw9VF7%2FbJN0v6VujI%2BShZwlKGIwnPfJmpl4huaKGMeDvYBCTy7j2GFhLkByo0EWbFHmDAVKd46JbB%2F7suWC6d%2FW5wbXM0RpZO2slOxDearmZX0MaumfldpNWhVpWRFxbf2veCNy%2FhPRCkAp2dQt1EdzDrab6%2BkQ7PKG%2BkmCI7L%2FInDte%2Br7tL1hW4N%2BvX%2BFVncTZhgbtD4ewsU4eZmEefDERPYAJ94YYNRULh3%2BJ3oR9tEuTmBhKvVmix4ouvr2NVGvEkhgZ2NXyDvsoty6q6xHUIzWkT1WZf3TrIi2ogOb29bceNV8iaqdh2C7k1%2BGQmkDbXjW7M2McqMH4aeBw1ZDPraVpxq8snH3kSrK%2BebyDOGd30wRmQWyeXl4z2rfz2p3IhWtF7IzC6yK69BjqkAVrRCrerxlUF26jIb6nInRZrNqU6CwgAHgl5cac%2Bl5PNLg37ZAg2WK%2FG2HFnk%2F5yaXGuaM2Zsm9v3UhR4X3VFMBZTj%2B90fxZef0xa65MWpOIJHFVyZbKZ%2F2NhHu8nx12OpBHwHp7cSQFym8uGQDg2c3RrwAJJnau4rwrbWLBbjM%2FSq18rNVjaZFsTR%2FgmX%2FkcXI%2BiGyrUTZn8z2DjCQqgjJMCa%2Bl&X-Amz-Signature=b06ce59c7e5ad9d22220295f37df3f130999f52fe06685aa6a57afdf3fd74330&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676UNPR7F%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHdWMEeHxDRxl%2FrjStrSXBKKQi2aM3vqBgZkhNZ7fa4QIhAOrMmJGh%2BdGA60B3SgAxD8jReRHv4GV3VdGhqDDfk6WFKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyseA%2BMR0psr6pFM4Qq3AMjwqC%2BJP4BAXBCxNFblNAMYV81AbEeMTIHD4BHD7NRH2GfnBgcaA7LuuMgJ65s0ljFb25n2VvXikXxiJu%2Fk8XuoOFSvIuvnv%2B61WgpyfdbWq9vOUfrnhLCsXu191sbcJDbhVuq9b093ggwg4RBA9tVLqDS8KmtW3n%2BvZXYSCWvGLU%2BbYUy%2FNrHUnQxjDWTDBy8w%2FejlH87hoB8%2BmUXbcuc3M0zBu2TrygSUACTMzktgHZWQRKLw9VF7%2FbJN0v6VujI%2BShZwlKGIwnPfJmpl4huaKGMeDvYBCTy7j2GFhLkByo0EWbFHmDAVKd46JbB%2F7suWC6d%2FW5wbXM0RpZO2slOxDearmZX0MaumfldpNWhVpWRFxbf2veCNy%2FhPRCkAp2dQt1EdzDrab6%2BkQ7PKG%2BkmCI7L%2FInDte%2Br7tL1hW4N%2BvX%2BFVncTZhgbtD4ewsU4eZmEefDERPYAJ94YYNRULh3%2BJ3oR9tEuTmBhKvVmix4ouvr2NVGvEkhgZ2NXyDvsoty6q6xHUIzWkT1WZf3TrIi2ogOb29bceNV8iaqdh2C7k1%2BGQmkDbXjW7M2McqMH4aeBw1ZDPraVpxq8snH3kSrK%2BebyDOGd30wRmQWyeXl4z2rfz2p3IhWtF7IzC6yK69BjqkAVrRCrerxlUF26jIb6nInRZrNqU6CwgAHgl5cac%2Bl5PNLg37ZAg2WK%2FG2HFnk%2F5yaXGuaM2Zsm9v3UhR4X3VFMBZTj%2B90fxZef0xa65MWpOIJHFVyZbKZ%2F2NhHu8nx12OpBHwHp7cSQFym8uGQDg2c3RrwAJJnau4rwrbWLBbjM%2FSq18rNVjaZFsTR%2FgmX%2FkcXI%2BiGyrUTZn8z2DjCQqgjJMCa%2Bl&X-Amz-Signature=b4aa2b95363f8a5baf3c3b6410a564fb582a526b273e231658e7ed9d30fe539b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
