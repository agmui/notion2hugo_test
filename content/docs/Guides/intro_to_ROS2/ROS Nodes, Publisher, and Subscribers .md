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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5MONER%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCummO3rdm%2FyIOoOrvUh0CvsvHZCG5A8APWmpI8MO5bHgIhAJ%2Bz5nUEBj8BhH1XpzpnEKA8r6gHE6f8ipc4pGQgc6zyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwdcUtdZpp3H0QdojAq3AOL5sXHIf5dzsH6xQosY1z04XopOZk3IrCkadUOFlX8wCiJCwTKOizAOuDjdy80p%2F7OADLvn9r68D%2FsXO8SHvr6nOlyFc2TjOsW2jq%2Fhi98Y%2Bw%2BhyF8eE8Bhqh237V5pwKpzSYirnTq%2FUmfvXgsPp2yi1WrQMV%2FTyBp69WFZcCwJp4yU1uCqazTt9m0nCN644gUsFQbzDGKW2qVFGqhBK1WCXSwJKl6xrmxB6iGj%2BV%2F25PgA4cmDsN2jOZlEofuVINAIWNQZAiOBNanPl7aAWnPZ%2B9xJjKjy4NIc%2F9x7qoy2AFv28sL%2FlzeSs22A%2BFFl%2FqN9PJpLsunfJFUkHsW2afQLVI1%2BpD%2F9jDwYFewpY35HLQGqJr57U%2Bvw2vCvBYYtPojRhd8jsxrsXlP7aUDasXgnKljobkaGX5Wz6yE%2FT%2Bb7z%2FNT5KFqGByJiFsI6fvIkCo69bQI6mYTv5GDBYmaEOL3A6Z8mLOq1IykXk%2BRuq0rwg8Qiu6uN%2B9hDwvvN1t0lNPwGzvuU4z4mutbuWdTTtbEXWsprskn3uSEu8aOc1xmAuWXGxrMHA2IkxVCBCtfE7FOM0N59w97rZNZ8zavCu0rO3eDjB6A3%2F%2FQX3zOS9Q5hu7rJ7%2FO0Qzp6kHVTDn16TBBjqkAQpLybRk%2B6Tf%2FvGVXhJt4ua7RC42SBEraV3e2jEgeOIEIMSrx7747XCT5Ie%2FP4CUchFKGmjURFE6bbmk%2FOoMqIMwwIIAvpPOJTQLJye7x7HWUIOCuhLohIpay83YZ%2Bl0OkxVR2pB40nu1aOwwrSfLQxe%2BZCPze7cB8FItpWK7cMMLOmY2d2j9%2Fw%2BvdQnNFcgTMD96P%2F%2FA1poL8dhTbN%2BvEku8F%2FB&X-Amz-Signature=39e68b34711a59c929579ae0c505c577c399dd664fcd59faef0051252e66f0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5MONER%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCummO3rdm%2FyIOoOrvUh0CvsvHZCG5A8APWmpI8MO5bHgIhAJ%2Bz5nUEBj8BhH1XpzpnEKA8r6gHE6f8ipc4pGQgc6zyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwdcUtdZpp3H0QdojAq3AOL5sXHIf5dzsH6xQosY1z04XopOZk3IrCkadUOFlX8wCiJCwTKOizAOuDjdy80p%2F7OADLvn9r68D%2FsXO8SHvr6nOlyFc2TjOsW2jq%2Fhi98Y%2Bw%2BhyF8eE8Bhqh237V5pwKpzSYirnTq%2FUmfvXgsPp2yi1WrQMV%2FTyBp69WFZcCwJp4yU1uCqazTt9m0nCN644gUsFQbzDGKW2qVFGqhBK1WCXSwJKl6xrmxB6iGj%2BV%2F25PgA4cmDsN2jOZlEofuVINAIWNQZAiOBNanPl7aAWnPZ%2B9xJjKjy4NIc%2F9x7qoy2AFv28sL%2FlzeSs22A%2BFFl%2FqN9PJpLsunfJFUkHsW2afQLVI1%2BpD%2F9jDwYFewpY35HLQGqJr57U%2Bvw2vCvBYYtPojRhd8jsxrsXlP7aUDasXgnKljobkaGX5Wz6yE%2FT%2Bb7z%2FNT5KFqGByJiFsI6fvIkCo69bQI6mYTv5GDBYmaEOL3A6Z8mLOq1IykXk%2BRuq0rwg8Qiu6uN%2B9hDwvvN1t0lNPwGzvuU4z4mutbuWdTTtbEXWsprskn3uSEu8aOc1xmAuWXGxrMHA2IkxVCBCtfE7FOM0N59w97rZNZ8zavCu0rO3eDjB6A3%2F%2FQX3zOS9Q5hu7rJ7%2FO0Qzp6kHVTDn16TBBjqkAQpLybRk%2B6Tf%2FvGVXhJt4ua7RC42SBEraV3e2jEgeOIEIMSrx7747XCT5Ie%2FP4CUchFKGmjURFE6bbmk%2FOoMqIMwwIIAvpPOJTQLJye7x7HWUIOCuhLohIpay83YZ%2Bl0OkxVR2pB40nu1aOwwrSfLQxe%2BZCPze7cB8FItpWK7cMMLOmY2d2j9%2Fw%2BvdQnNFcgTMD96P%2F%2FA1poL8dhTbN%2BvEku8F%2FB&X-Amz-Signature=b8e564fd977030c436e3ce82a3e195c55935490ad76dfb294aff698f3caa3f88&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5MONER%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCummO3rdm%2FyIOoOrvUh0CvsvHZCG5A8APWmpI8MO5bHgIhAJ%2Bz5nUEBj8BhH1XpzpnEKA8r6gHE6f8ipc4pGQgc6zyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwdcUtdZpp3H0QdojAq3AOL5sXHIf5dzsH6xQosY1z04XopOZk3IrCkadUOFlX8wCiJCwTKOizAOuDjdy80p%2F7OADLvn9r68D%2FsXO8SHvr6nOlyFc2TjOsW2jq%2Fhi98Y%2Bw%2BhyF8eE8Bhqh237V5pwKpzSYirnTq%2FUmfvXgsPp2yi1WrQMV%2FTyBp69WFZcCwJp4yU1uCqazTt9m0nCN644gUsFQbzDGKW2qVFGqhBK1WCXSwJKl6xrmxB6iGj%2BV%2F25PgA4cmDsN2jOZlEofuVINAIWNQZAiOBNanPl7aAWnPZ%2B9xJjKjy4NIc%2F9x7qoy2AFv28sL%2FlzeSs22A%2BFFl%2FqN9PJpLsunfJFUkHsW2afQLVI1%2BpD%2F9jDwYFewpY35HLQGqJr57U%2Bvw2vCvBYYtPojRhd8jsxrsXlP7aUDasXgnKljobkaGX5Wz6yE%2FT%2Bb7z%2FNT5KFqGByJiFsI6fvIkCo69bQI6mYTv5GDBYmaEOL3A6Z8mLOq1IykXk%2BRuq0rwg8Qiu6uN%2B9hDwvvN1t0lNPwGzvuU4z4mutbuWdTTtbEXWsprskn3uSEu8aOc1xmAuWXGxrMHA2IkxVCBCtfE7FOM0N59w97rZNZ8zavCu0rO3eDjB6A3%2F%2FQX3zOS9Q5hu7rJ7%2FO0Qzp6kHVTDn16TBBjqkAQpLybRk%2B6Tf%2FvGVXhJt4ua7RC42SBEraV3e2jEgeOIEIMSrx7747XCT5Ie%2FP4CUchFKGmjURFE6bbmk%2FOoMqIMwwIIAvpPOJTQLJye7x7HWUIOCuhLohIpay83YZ%2Bl0OkxVR2pB40nu1aOwwrSfLQxe%2BZCPze7cB8FItpWK7cMMLOmY2d2j9%2Fw%2BvdQnNFcgTMD96P%2F%2FA1poL8dhTbN%2BvEku8F%2FB&X-Amz-Signature=3b1dd943e0fb684dccbf6b1233a61f6c58719463c3887c3c496d8da7a24b2215&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5MONER%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCummO3rdm%2FyIOoOrvUh0CvsvHZCG5A8APWmpI8MO5bHgIhAJ%2Bz5nUEBj8BhH1XpzpnEKA8r6gHE6f8ipc4pGQgc6zyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwdcUtdZpp3H0QdojAq3AOL5sXHIf5dzsH6xQosY1z04XopOZk3IrCkadUOFlX8wCiJCwTKOizAOuDjdy80p%2F7OADLvn9r68D%2FsXO8SHvr6nOlyFc2TjOsW2jq%2Fhi98Y%2Bw%2BhyF8eE8Bhqh237V5pwKpzSYirnTq%2FUmfvXgsPp2yi1WrQMV%2FTyBp69WFZcCwJp4yU1uCqazTt9m0nCN644gUsFQbzDGKW2qVFGqhBK1WCXSwJKl6xrmxB6iGj%2BV%2F25PgA4cmDsN2jOZlEofuVINAIWNQZAiOBNanPl7aAWnPZ%2B9xJjKjy4NIc%2F9x7qoy2AFv28sL%2FlzeSs22A%2BFFl%2FqN9PJpLsunfJFUkHsW2afQLVI1%2BpD%2F9jDwYFewpY35HLQGqJr57U%2Bvw2vCvBYYtPojRhd8jsxrsXlP7aUDasXgnKljobkaGX5Wz6yE%2FT%2Bb7z%2FNT5KFqGByJiFsI6fvIkCo69bQI6mYTv5GDBYmaEOL3A6Z8mLOq1IykXk%2BRuq0rwg8Qiu6uN%2B9hDwvvN1t0lNPwGzvuU4z4mutbuWdTTtbEXWsprskn3uSEu8aOc1xmAuWXGxrMHA2IkxVCBCtfE7FOM0N59w97rZNZ8zavCu0rO3eDjB6A3%2F%2FQX3zOS9Q5hu7rJ7%2FO0Qzp6kHVTDn16TBBjqkAQpLybRk%2B6Tf%2FvGVXhJt4ua7RC42SBEraV3e2jEgeOIEIMSrx7747XCT5Ie%2FP4CUchFKGmjURFE6bbmk%2FOoMqIMwwIIAvpPOJTQLJye7x7HWUIOCuhLohIpay83YZ%2Bl0OkxVR2pB40nu1aOwwrSfLQxe%2BZCPze7cB8FItpWK7cMMLOmY2d2j9%2Fw%2BvdQnNFcgTMD96P%2F%2FA1poL8dhTbN%2BvEku8F%2FB&X-Amz-Signature=3669f50d5943d2421669eb9e6700f0d39a7b18f812a9dfdbf72701102f834329&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5MONER%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCummO3rdm%2FyIOoOrvUh0CvsvHZCG5A8APWmpI8MO5bHgIhAJ%2Bz5nUEBj8BhH1XpzpnEKA8r6gHE6f8ipc4pGQgc6zyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwdcUtdZpp3H0QdojAq3AOL5sXHIf5dzsH6xQosY1z04XopOZk3IrCkadUOFlX8wCiJCwTKOizAOuDjdy80p%2F7OADLvn9r68D%2FsXO8SHvr6nOlyFc2TjOsW2jq%2Fhi98Y%2Bw%2BhyF8eE8Bhqh237V5pwKpzSYirnTq%2FUmfvXgsPp2yi1WrQMV%2FTyBp69WFZcCwJp4yU1uCqazTt9m0nCN644gUsFQbzDGKW2qVFGqhBK1WCXSwJKl6xrmxB6iGj%2BV%2F25PgA4cmDsN2jOZlEofuVINAIWNQZAiOBNanPl7aAWnPZ%2B9xJjKjy4NIc%2F9x7qoy2AFv28sL%2FlzeSs22A%2BFFl%2FqN9PJpLsunfJFUkHsW2afQLVI1%2BpD%2F9jDwYFewpY35HLQGqJr57U%2Bvw2vCvBYYtPojRhd8jsxrsXlP7aUDasXgnKljobkaGX5Wz6yE%2FT%2Bb7z%2FNT5KFqGByJiFsI6fvIkCo69bQI6mYTv5GDBYmaEOL3A6Z8mLOq1IykXk%2BRuq0rwg8Qiu6uN%2B9hDwvvN1t0lNPwGzvuU4z4mutbuWdTTtbEXWsprskn3uSEu8aOc1xmAuWXGxrMHA2IkxVCBCtfE7FOM0N59w97rZNZ8zavCu0rO3eDjB6A3%2F%2FQX3zOS9Q5hu7rJ7%2FO0Qzp6kHVTDn16TBBjqkAQpLybRk%2B6Tf%2FvGVXhJt4ua7RC42SBEraV3e2jEgeOIEIMSrx7747XCT5Ie%2FP4CUchFKGmjURFE6bbmk%2FOoMqIMwwIIAvpPOJTQLJye7x7HWUIOCuhLohIpay83YZ%2Bl0OkxVR2pB40nu1aOwwrSfLQxe%2BZCPze7cB8FItpWK7cMMLOmY2d2j9%2Fw%2BvdQnNFcgTMD96P%2F%2FA1poL8dhTbN%2BvEku8F%2FB&X-Amz-Signature=a6224422523870542d071ea1c9127876eef94994a7eccea88b9b43779bcffb95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5MONER%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCummO3rdm%2FyIOoOrvUh0CvsvHZCG5A8APWmpI8MO5bHgIhAJ%2Bz5nUEBj8BhH1XpzpnEKA8r6gHE6f8ipc4pGQgc6zyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwdcUtdZpp3H0QdojAq3AOL5sXHIf5dzsH6xQosY1z04XopOZk3IrCkadUOFlX8wCiJCwTKOizAOuDjdy80p%2F7OADLvn9r68D%2FsXO8SHvr6nOlyFc2TjOsW2jq%2Fhi98Y%2Bw%2BhyF8eE8Bhqh237V5pwKpzSYirnTq%2FUmfvXgsPp2yi1WrQMV%2FTyBp69WFZcCwJp4yU1uCqazTt9m0nCN644gUsFQbzDGKW2qVFGqhBK1WCXSwJKl6xrmxB6iGj%2BV%2F25PgA4cmDsN2jOZlEofuVINAIWNQZAiOBNanPl7aAWnPZ%2B9xJjKjy4NIc%2F9x7qoy2AFv28sL%2FlzeSs22A%2BFFl%2FqN9PJpLsunfJFUkHsW2afQLVI1%2BpD%2F9jDwYFewpY35HLQGqJr57U%2Bvw2vCvBYYtPojRhd8jsxrsXlP7aUDasXgnKljobkaGX5Wz6yE%2FT%2Bb7z%2FNT5KFqGByJiFsI6fvIkCo69bQI6mYTv5GDBYmaEOL3A6Z8mLOq1IykXk%2BRuq0rwg8Qiu6uN%2B9hDwvvN1t0lNPwGzvuU4z4mutbuWdTTtbEXWsprskn3uSEu8aOc1xmAuWXGxrMHA2IkxVCBCtfE7FOM0N59w97rZNZ8zavCu0rO3eDjB6A3%2F%2FQX3zOS9Q5hu7rJ7%2FO0Qzp6kHVTDn16TBBjqkAQpLybRk%2B6Tf%2FvGVXhJt4ua7RC42SBEraV3e2jEgeOIEIMSrx7747XCT5Ie%2FP4CUchFKGmjURFE6bbmk%2FOoMqIMwwIIAvpPOJTQLJye7x7HWUIOCuhLohIpay83YZ%2Bl0OkxVR2pB40nu1aOwwrSfLQxe%2BZCPze7cB8FItpWK7cMMLOmY2d2j9%2Fw%2BvdQnNFcgTMD96P%2F%2FA1poL8dhTbN%2BvEku8F%2FB&X-Amz-Signature=53cadbff82f5e2c60691f55c29751f97b65c977f34165b89128c054a2e522db2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5MONER%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCummO3rdm%2FyIOoOrvUh0CvsvHZCG5A8APWmpI8MO5bHgIhAJ%2Bz5nUEBj8BhH1XpzpnEKA8r6gHE6f8ipc4pGQgc6zyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwdcUtdZpp3H0QdojAq3AOL5sXHIf5dzsH6xQosY1z04XopOZk3IrCkadUOFlX8wCiJCwTKOizAOuDjdy80p%2F7OADLvn9r68D%2FsXO8SHvr6nOlyFc2TjOsW2jq%2Fhi98Y%2Bw%2BhyF8eE8Bhqh237V5pwKpzSYirnTq%2FUmfvXgsPp2yi1WrQMV%2FTyBp69WFZcCwJp4yU1uCqazTt9m0nCN644gUsFQbzDGKW2qVFGqhBK1WCXSwJKl6xrmxB6iGj%2BV%2F25PgA4cmDsN2jOZlEofuVINAIWNQZAiOBNanPl7aAWnPZ%2B9xJjKjy4NIc%2F9x7qoy2AFv28sL%2FlzeSs22A%2BFFl%2FqN9PJpLsunfJFUkHsW2afQLVI1%2BpD%2F9jDwYFewpY35HLQGqJr57U%2Bvw2vCvBYYtPojRhd8jsxrsXlP7aUDasXgnKljobkaGX5Wz6yE%2FT%2Bb7z%2FNT5KFqGByJiFsI6fvIkCo69bQI6mYTv5GDBYmaEOL3A6Z8mLOq1IykXk%2BRuq0rwg8Qiu6uN%2B9hDwvvN1t0lNPwGzvuU4z4mutbuWdTTtbEXWsprskn3uSEu8aOc1xmAuWXGxrMHA2IkxVCBCtfE7FOM0N59w97rZNZ8zavCu0rO3eDjB6A3%2F%2FQX3zOS9Q5hu7rJ7%2FO0Qzp6kHVTDn16TBBjqkAQpLybRk%2B6Tf%2FvGVXhJt4ua7RC42SBEraV3e2jEgeOIEIMSrx7747XCT5Ie%2FP4CUchFKGmjURFE6bbmk%2FOoMqIMwwIIAvpPOJTQLJye7x7HWUIOCuhLohIpay83YZ%2Bl0OkxVR2pB40nu1aOwwrSfLQxe%2BZCPze7cB8FItpWK7cMMLOmY2d2j9%2Fw%2BvdQnNFcgTMD96P%2F%2FA1poL8dhTbN%2BvEku8F%2FB&X-Amz-Signature=a50015bdbf9afebbf035809efb37671e68b588bb3cbebb0886b9e8770f9a6c29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5MONER%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCummO3rdm%2FyIOoOrvUh0CvsvHZCG5A8APWmpI8MO5bHgIhAJ%2Bz5nUEBj8BhH1XpzpnEKA8r6gHE6f8ipc4pGQgc6zyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwdcUtdZpp3H0QdojAq3AOL5sXHIf5dzsH6xQosY1z04XopOZk3IrCkadUOFlX8wCiJCwTKOizAOuDjdy80p%2F7OADLvn9r68D%2FsXO8SHvr6nOlyFc2TjOsW2jq%2Fhi98Y%2Bw%2BhyF8eE8Bhqh237V5pwKpzSYirnTq%2FUmfvXgsPp2yi1WrQMV%2FTyBp69WFZcCwJp4yU1uCqazTt9m0nCN644gUsFQbzDGKW2qVFGqhBK1WCXSwJKl6xrmxB6iGj%2BV%2F25PgA4cmDsN2jOZlEofuVINAIWNQZAiOBNanPl7aAWnPZ%2B9xJjKjy4NIc%2F9x7qoy2AFv28sL%2FlzeSs22A%2BFFl%2FqN9PJpLsunfJFUkHsW2afQLVI1%2BpD%2F9jDwYFewpY35HLQGqJr57U%2Bvw2vCvBYYtPojRhd8jsxrsXlP7aUDasXgnKljobkaGX5Wz6yE%2FT%2Bb7z%2FNT5KFqGByJiFsI6fvIkCo69bQI6mYTv5GDBYmaEOL3A6Z8mLOq1IykXk%2BRuq0rwg8Qiu6uN%2B9hDwvvN1t0lNPwGzvuU4z4mutbuWdTTtbEXWsprskn3uSEu8aOc1xmAuWXGxrMHA2IkxVCBCtfE7FOM0N59w97rZNZ8zavCu0rO3eDjB6A3%2F%2FQX3zOS9Q5hu7rJ7%2FO0Qzp6kHVTDn16TBBjqkAQpLybRk%2B6Tf%2FvGVXhJt4ua7RC42SBEraV3e2jEgeOIEIMSrx7747XCT5Ie%2FP4CUchFKGmjURFE6bbmk%2FOoMqIMwwIIAvpPOJTQLJye7x7HWUIOCuhLohIpay83YZ%2Bl0OkxVR2pB40nu1aOwwrSfLQxe%2BZCPze7cB8FItpWK7cMMLOmY2d2j9%2Fw%2BvdQnNFcgTMD96P%2F%2FA1poL8dhTbN%2BvEku8F%2FB&X-Amz-Signature=a2bdf48b70ad8149c5d7a9752038c8bc997464233354ca16b41465816d0f4ded&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
