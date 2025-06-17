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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77MSXUB%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaoFzzhDs1UPEaDkVX%2BoIr4trovSEC8uJKcyS4XkyYgIhAM8eB6DRV3R10OOg7awAQV47prAJkdFUGJD6SEbj75U%2FKv8DCHsQABoMNjM3NDIzMTgzODA1Igy4wVflmWXIfNnGVAgq3AOK9jI8zFHwzrfV%2BjVdIrRO25u9TvGAdPQvRFRkg%2FsII%2BouBC9lcmobFGVDAV7HsV4Y0acz5oKwIfMab88%2FxEjYv9y6STnM7V20USgxScZh%2B8clBPoDK4aX2w2yKIVUjBgiXvDsZGFk6FFV0SzpVqcQZLbxgN3YbRJsAKjPyiSdoMEkuDLYxHQKxBj%2FOsK8O7sGLv9eild%2F6ElkQkj%2BPfOusgMU8VJqjPkknXOjF3iF0jAHLAVrI2NFt%2BY%2FlL%2FsEjGmHBceq2MNSBPIvO%2FoNRtHIIqBA2sfNlpn42PXN%2BIOpumvEAaYFdfhQhKFdvsHcclP5pD8poFj1ecXri3fBzw%2F2c1%2F3BUoOK1O1keYgka1WqwjGxakUxGcIkAU4xAKDt%2FshGCEkEQ7fJrI7snBv%2FiayWlDP4uaHpE4lBJWEhmBTyWL4TQSX8cyvoDRjJ4PhYFCqYn8fG3CqFeLmfpGpu8eFTdXV6Dt6vBBjizwOYoVlmp2Iu84iAk3fCUwxSuC58tmJTHYz13an0dUv5UIDfGrMvOLAEIV6u2IAjGuFN635Lk5M5WJcNwBlQMnQXhtyDfLQtWVdZFNEWg78OaajS3Rp0ESVl7BHE0TbxmWAJZUUsd6YBXK6K2ZzLeV%2FzDF38bCBjqkAT3CKPleld0IvyFJvAGraa5xDKdLlcNCSHwW%2BMjItIdE%2FAdiWTsAKKKCShxlRS4gNOpEgHQIqeclxskfqoutYWBjli0vXSwg%2Bc%2B5SZsh65ZTboaZrh9%2FC4fb1ZtBVlGM8bSI2V22%2BkmiR7pEKYrNq6o4fhCALOZ69x6%2FywpOZcrNf4O%2BDMbJG1zt2U7HRFvu9rr%2BKWF%2BarlpYCoJlvrJs0DD4p3b&X-Amz-Signature=e5d709f700664d48a521b3ef324b3871a2dbb595ad82bfd746105f15f34df11f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77MSXUB%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaoFzzhDs1UPEaDkVX%2BoIr4trovSEC8uJKcyS4XkyYgIhAM8eB6DRV3R10OOg7awAQV47prAJkdFUGJD6SEbj75U%2FKv8DCHsQABoMNjM3NDIzMTgzODA1Igy4wVflmWXIfNnGVAgq3AOK9jI8zFHwzrfV%2BjVdIrRO25u9TvGAdPQvRFRkg%2FsII%2BouBC9lcmobFGVDAV7HsV4Y0acz5oKwIfMab88%2FxEjYv9y6STnM7V20USgxScZh%2B8clBPoDK4aX2w2yKIVUjBgiXvDsZGFk6FFV0SzpVqcQZLbxgN3YbRJsAKjPyiSdoMEkuDLYxHQKxBj%2FOsK8O7sGLv9eild%2F6ElkQkj%2BPfOusgMU8VJqjPkknXOjF3iF0jAHLAVrI2NFt%2BY%2FlL%2FsEjGmHBceq2MNSBPIvO%2FoNRtHIIqBA2sfNlpn42PXN%2BIOpumvEAaYFdfhQhKFdvsHcclP5pD8poFj1ecXri3fBzw%2F2c1%2F3BUoOK1O1keYgka1WqwjGxakUxGcIkAU4xAKDt%2FshGCEkEQ7fJrI7snBv%2FiayWlDP4uaHpE4lBJWEhmBTyWL4TQSX8cyvoDRjJ4PhYFCqYn8fG3CqFeLmfpGpu8eFTdXV6Dt6vBBjizwOYoVlmp2Iu84iAk3fCUwxSuC58tmJTHYz13an0dUv5UIDfGrMvOLAEIV6u2IAjGuFN635Lk5M5WJcNwBlQMnQXhtyDfLQtWVdZFNEWg78OaajS3Rp0ESVl7BHE0TbxmWAJZUUsd6YBXK6K2ZzLeV%2FzDF38bCBjqkAT3CKPleld0IvyFJvAGraa5xDKdLlcNCSHwW%2BMjItIdE%2FAdiWTsAKKKCShxlRS4gNOpEgHQIqeclxskfqoutYWBjli0vXSwg%2Bc%2B5SZsh65ZTboaZrh9%2FC4fb1ZtBVlGM8bSI2V22%2BkmiR7pEKYrNq6o4fhCALOZ69x6%2FywpOZcrNf4O%2BDMbJG1zt2U7HRFvu9rr%2BKWF%2BarlpYCoJlvrJs0DD4p3b&X-Amz-Signature=d002991f06f8486313837070baa6248d42cd96b4275d7ac5b40a19a666750660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77MSXUB%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaoFzzhDs1UPEaDkVX%2BoIr4trovSEC8uJKcyS4XkyYgIhAM8eB6DRV3R10OOg7awAQV47prAJkdFUGJD6SEbj75U%2FKv8DCHsQABoMNjM3NDIzMTgzODA1Igy4wVflmWXIfNnGVAgq3AOK9jI8zFHwzrfV%2BjVdIrRO25u9TvGAdPQvRFRkg%2FsII%2BouBC9lcmobFGVDAV7HsV4Y0acz5oKwIfMab88%2FxEjYv9y6STnM7V20USgxScZh%2B8clBPoDK4aX2w2yKIVUjBgiXvDsZGFk6FFV0SzpVqcQZLbxgN3YbRJsAKjPyiSdoMEkuDLYxHQKxBj%2FOsK8O7sGLv9eild%2F6ElkQkj%2BPfOusgMU8VJqjPkknXOjF3iF0jAHLAVrI2NFt%2BY%2FlL%2FsEjGmHBceq2MNSBPIvO%2FoNRtHIIqBA2sfNlpn42PXN%2BIOpumvEAaYFdfhQhKFdvsHcclP5pD8poFj1ecXri3fBzw%2F2c1%2F3BUoOK1O1keYgka1WqwjGxakUxGcIkAU4xAKDt%2FshGCEkEQ7fJrI7snBv%2FiayWlDP4uaHpE4lBJWEhmBTyWL4TQSX8cyvoDRjJ4PhYFCqYn8fG3CqFeLmfpGpu8eFTdXV6Dt6vBBjizwOYoVlmp2Iu84iAk3fCUwxSuC58tmJTHYz13an0dUv5UIDfGrMvOLAEIV6u2IAjGuFN635Lk5M5WJcNwBlQMnQXhtyDfLQtWVdZFNEWg78OaajS3Rp0ESVl7BHE0TbxmWAJZUUsd6YBXK6K2ZzLeV%2FzDF38bCBjqkAT3CKPleld0IvyFJvAGraa5xDKdLlcNCSHwW%2BMjItIdE%2FAdiWTsAKKKCShxlRS4gNOpEgHQIqeclxskfqoutYWBjli0vXSwg%2Bc%2B5SZsh65ZTboaZrh9%2FC4fb1ZtBVlGM8bSI2V22%2BkmiR7pEKYrNq6o4fhCALOZ69x6%2FywpOZcrNf4O%2BDMbJG1zt2U7HRFvu9rr%2BKWF%2BarlpYCoJlvrJs0DD4p3b&X-Amz-Signature=d5de5e868ab57b4b53dc943a0686beaccd12e7a594bd41c27dd2787eed6155ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77MSXUB%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaoFzzhDs1UPEaDkVX%2BoIr4trovSEC8uJKcyS4XkyYgIhAM8eB6DRV3R10OOg7awAQV47prAJkdFUGJD6SEbj75U%2FKv8DCHsQABoMNjM3NDIzMTgzODA1Igy4wVflmWXIfNnGVAgq3AOK9jI8zFHwzrfV%2BjVdIrRO25u9TvGAdPQvRFRkg%2FsII%2BouBC9lcmobFGVDAV7HsV4Y0acz5oKwIfMab88%2FxEjYv9y6STnM7V20USgxScZh%2B8clBPoDK4aX2w2yKIVUjBgiXvDsZGFk6FFV0SzpVqcQZLbxgN3YbRJsAKjPyiSdoMEkuDLYxHQKxBj%2FOsK8O7sGLv9eild%2F6ElkQkj%2BPfOusgMU8VJqjPkknXOjF3iF0jAHLAVrI2NFt%2BY%2FlL%2FsEjGmHBceq2MNSBPIvO%2FoNRtHIIqBA2sfNlpn42PXN%2BIOpumvEAaYFdfhQhKFdvsHcclP5pD8poFj1ecXri3fBzw%2F2c1%2F3BUoOK1O1keYgka1WqwjGxakUxGcIkAU4xAKDt%2FshGCEkEQ7fJrI7snBv%2FiayWlDP4uaHpE4lBJWEhmBTyWL4TQSX8cyvoDRjJ4PhYFCqYn8fG3CqFeLmfpGpu8eFTdXV6Dt6vBBjizwOYoVlmp2Iu84iAk3fCUwxSuC58tmJTHYz13an0dUv5UIDfGrMvOLAEIV6u2IAjGuFN635Lk5M5WJcNwBlQMnQXhtyDfLQtWVdZFNEWg78OaajS3Rp0ESVl7BHE0TbxmWAJZUUsd6YBXK6K2ZzLeV%2FzDF38bCBjqkAT3CKPleld0IvyFJvAGraa5xDKdLlcNCSHwW%2BMjItIdE%2FAdiWTsAKKKCShxlRS4gNOpEgHQIqeclxskfqoutYWBjli0vXSwg%2Bc%2B5SZsh65ZTboaZrh9%2FC4fb1ZtBVlGM8bSI2V22%2BkmiR7pEKYrNq6o4fhCALOZ69x6%2FywpOZcrNf4O%2BDMbJG1zt2U7HRFvu9rr%2BKWF%2BarlpYCoJlvrJs0DD4p3b&X-Amz-Signature=bcc425e15472d3c18625c2eab669c6dfb7d410965f9b9b8815e7165885fe69a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77MSXUB%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaoFzzhDs1UPEaDkVX%2BoIr4trovSEC8uJKcyS4XkyYgIhAM8eB6DRV3R10OOg7awAQV47prAJkdFUGJD6SEbj75U%2FKv8DCHsQABoMNjM3NDIzMTgzODA1Igy4wVflmWXIfNnGVAgq3AOK9jI8zFHwzrfV%2BjVdIrRO25u9TvGAdPQvRFRkg%2FsII%2BouBC9lcmobFGVDAV7HsV4Y0acz5oKwIfMab88%2FxEjYv9y6STnM7V20USgxScZh%2B8clBPoDK4aX2w2yKIVUjBgiXvDsZGFk6FFV0SzpVqcQZLbxgN3YbRJsAKjPyiSdoMEkuDLYxHQKxBj%2FOsK8O7sGLv9eild%2F6ElkQkj%2BPfOusgMU8VJqjPkknXOjF3iF0jAHLAVrI2NFt%2BY%2FlL%2FsEjGmHBceq2MNSBPIvO%2FoNRtHIIqBA2sfNlpn42PXN%2BIOpumvEAaYFdfhQhKFdvsHcclP5pD8poFj1ecXri3fBzw%2F2c1%2F3BUoOK1O1keYgka1WqwjGxakUxGcIkAU4xAKDt%2FshGCEkEQ7fJrI7snBv%2FiayWlDP4uaHpE4lBJWEhmBTyWL4TQSX8cyvoDRjJ4PhYFCqYn8fG3CqFeLmfpGpu8eFTdXV6Dt6vBBjizwOYoVlmp2Iu84iAk3fCUwxSuC58tmJTHYz13an0dUv5UIDfGrMvOLAEIV6u2IAjGuFN635Lk5M5WJcNwBlQMnQXhtyDfLQtWVdZFNEWg78OaajS3Rp0ESVl7BHE0TbxmWAJZUUsd6YBXK6K2ZzLeV%2FzDF38bCBjqkAT3CKPleld0IvyFJvAGraa5xDKdLlcNCSHwW%2BMjItIdE%2FAdiWTsAKKKCShxlRS4gNOpEgHQIqeclxskfqoutYWBjli0vXSwg%2Bc%2B5SZsh65ZTboaZrh9%2FC4fb1ZtBVlGM8bSI2V22%2BkmiR7pEKYrNq6o4fhCALOZ69x6%2FywpOZcrNf4O%2BDMbJG1zt2U7HRFvu9rr%2BKWF%2BarlpYCoJlvrJs0DD4p3b&X-Amz-Signature=d5b2a93334660ed5e4d991f7cdcf95a329d1046f568f02ca62fe9dacd47d57c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77MSXUB%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaoFzzhDs1UPEaDkVX%2BoIr4trovSEC8uJKcyS4XkyYgIhAM8eB6DRV3R10OOg7awAQV47prAJkdFUGJD6SEbj75U%2FKv8DCHsQABoMNjM3NDIzMTgzODA1Igy4wVflmWXIfNnGVAgq3AOK9jI8zFHwzrfV%2BjVdIrRO25u9TvGAdPQvRFRkg%2FsII%2BouBC9lcmobFGVDAV7HsV4Y0acz5oKwIfMab88%2FxEjYv9y6STnM7V20USgxScZh%2B8clBPoDK4aX2w2yKIVUjBgiXvDsZGFk6FFV0SzpVqcQZLbxgN3YbRJsAKjPyiSdoMEkuDLYxHQKxBj%2FOsK8O7sGLv9eild%2F6ElkQkj%2BPfOusgMU8VJqjPkknXOjF3iF0jAHLAVrI2NFt%2BY%2FlL%2FsEjGmHBceq2MNSBPIvO%2FoNRtHIIqBA2sfNlpn42PXN%2BIOpumvEAaYFdfhQhKFdvsHcclP5pD8poFj1ecXri3fBzw%2F2c1%2F3BUoOK1O1keYgka1WqwjGxakUxGcIkAU4xAKDt%2FshGCEkEQ7fJrI7snBv%2FiayWlDP4uaHpE4lBJWEhmBTyWL4TQSX8cyvoDRjJ4PhYFCqYn8fG3CqFeLmfpGpu8eFTdXV6Dt6vBBjizwOYoVlmp2Iu84iAk3fCUwxSuC58tmJTHYz13an0dUv5UIDfGrMvOLAEIV6u2IAjGuFN635Lk5M5WJcNwBlQMnQXhtyDfLQtWVdZFNEWg78OaajS3Rp0ESVl7BHE0TbxmWAJZUUsd6YBXK6K2ZzLeV%2FzDF38bCBjqkAT3CKPleld0IvyFJvAGraa5xDKdLlcNCSHwW%2BMjItIdE%2FAdiWTsAKKKCShxlRS4gNOpEgHQIqeclxskfqoutYWBjli0vXSwg%2Bc%2B5SZsh65ZTboaZrh9%2FC4fb1ZtBVlGM8bSI2V22%2BkmiR7pEKYrNq6o4fhCALOZ69x6%2FywpOZcrNf4O%2BDMbJG1zt2U7HRFvu9rr%2BKWF%2BarlpYCoJlvrJs0DD4p3b&X-Amz-Signature=0c878c8e327cc681d79b97dedffb99963715da3c7a489f17a90855a5d23d71a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77MSXUB%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaoFzzhDs1UPEaDkVX%2BoIr4trovSEC8uJKcyS4XkyYgIhAM8eB6DRV3R10OOg7awAQV47prAJkdFUGJD6SEbj75U%2FKv8DCHsQABoMNjM3NDIzMTgzODA1Igy4wVflmWXIfNnGVAgq3AOK9jI8zFHwzrfV%2BjVdIrRO25u9TvGAdPQvRFRkg%2FsII%2BouBC9lcmobFGVDAV7HsV4Y0acz5oKwIfMab88%2FxEjYv9y6STnM7V20USgxScZh%2B8clBPoDK4aX2w2yKIVUjBgiXvDsZGFk6FFV0SzpVqcQZLbxgN3YbRJsAKjPyiSdoMEkuDLYxHQKxBj%2FOsK8O7sGLv9eild%2F6ElkQkj%2BPfOusgMU8VJqjPkknXOjF3iF0jAHLAVrI2NFt%2BY%2FlL%2FsEjGmHBceq2MNSBPIvO%2FoNRtHIIqBA2sfNlpn42PXN%2BIOpumvEAaYFdfhQhKFdvsHcclP5pD8poFj1ecXri3fBzw%2F2c1%2F3BUoOK1O1keYgka1WqwjGxakUxGcIkAU4xAKDt%2FshGCEkEQ7fJrI7snBv%2FiayWlDP4uaHpE4lBJWEhmBTyWL4TQSX8cyvoDRjJ4PhYFCqYn8fG3CqFeLmfpGpu8eFTdXV6Dt6vBBjizwOYoVlmp2Iu84iAk3fCUwxSuC58tmJTHYz13an0dUv5UIDfGrMvOLAEIV6u2IAjGuFN635Lk5M5WJcNwBlQMnQXhtyDfLQtWVdZFNEWg78OaajS3Rp0ESVl7BHE0TbxmWAJZUUsd6YBXK6K2ZzLeV%2FzDF38bCBjqkAT3CKPleld0IvyFJvAGraa5xDKdLlcNCSHwW%2BMjItIdE%2FAdiWTsAKKKCShxlRS4gNOpEgHQIqeclxskfqoutYWBjli0vXSwg%2Bc%2B5SZsh65ZTboaZrh9%2FC4fb1ZtBVlGM8bSI2V22%2BkmiR7pEKYrNq6o4fhCALOZ69x6%2FywpOZcrNf4O%2BDMbJG1zt2U7HRFvu9rr%2BKWF%2BarlpYCoJlvrJs0DD4p3b&X-Amz-Signature=47951fca0e956c72b9edddff7454a2be2f874ebcd1df3c5931d74afa1482b883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V77MSXUB%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T190136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaoFzzhDs1UPEaDkVX%2BoIr4trovSEC8uJKcyS4XkyYgIhAM8eB6DRV3R10OOg7awAQV47prAJkdFUGJD6SEbj75U%2FKv8DCHsQABoMNjM3NDIzMTgzODA1Igy4wVflmWXIfNnGVAgq3AOK9jI8zFHwzrfV%2BjVdIrRO25u9TvGAdPQvRFRkg%2FsII%2BouBC9lcmobFGVDAV7HsV4Y0acz5oKwIfMab88%2FxEjYv9y6STnM7V20USgxScZh%2B8clBPoDK4aX2w2yKIVUjBgiXvDsZGFk6FFV0SzpVqcQZLbxgN3YbRJsAKjPyiSdoMEkuDLYxHQKxBj%2FOsK8O7sGLv9eild%2F6ElkQkj%2BPfOusgMU8VJqjPkknXOjF3iF0jAHLAVrI2NFt%2BY%2FlL%2FsEjGmHBceq2MNSBPIvO%2FoNRtHIIqBA2sfNlpn42PXN%2BIOpumvEAaYFdfhQhKFdvsHcclP5pD8poFj1ecXri3fBzw%2F2c1%2F3BUoOK1O1keYgka1WqwjGxakUxGcIkAU4xAKDt%2FshGCEkEQ7fJrI7snBv%2FiayWlDP4uaHpE4lBJWEhmBTyWL4TQSX8cyvoDRjJ4PhYFCqYn8fG3CqFeLmfpGpu8eFTdXV6Dt6vBBjizwOYoVlmp2Iu84iAk3fCUwxSuC58tmJTHYz13an0dUv5UIDfGrMvOLAEIV6u2IAjGuFN635Lk5M5WJcNwBlQMnQXhtyDfLQtWVdZFNEWg78OaajS3Rp0ESVl7BHE0TbxmWAJZUUsd6YBXK6K2ZzLeV%2FzDF38bCBjqkAT3CKPleld0IvyFJvAGraa5xDKdLlcNCSHwW%2BMjItIdE%2FAdiWTsAKKKCShxlRS4gNOpEgHQIqeclxskfqoutYWBjli0vXSwg%2Bc%2B5SZsh65ZTboaZrh9%2FC4fb1ZtBVlGM8bSI2V22%2BkmiR7pEKYrNq6o4fhCALOZ69x6%2FywpOZcrNf4O%2BDMbJG1zt2U7HRFvu9rr%2BKWF%2BarlpYCoJlvrJs0DD4p3b&X-Amz-Signature=7cec3f57c7580139758d6abe7e5ee7d3a122db14497a37f90d59998d5da4c4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
