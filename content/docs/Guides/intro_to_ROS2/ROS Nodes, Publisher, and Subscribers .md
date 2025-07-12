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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ56M4TF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC97Rf3KzFDQdmzMK02pVN9RF%2BkkX6xprnFCCn0XKjCHAiEA2v0YOowwpI7DNByNgGQ4YyXQdezWwIlRUAIhk1%2BWTu8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZNleQMvSNFu%2FAvzyrcAzropjWuxv9IIEGGr3FCsoFgIEABMRCk7ScVhxYUZb61AJhUVfR6yUTZ5x4awORyreHHdfs0l0ma%2BOr%2Fh8bAX9PMIy58e8r7HoU1D0Vq2BeZNp7NBnFFuYwQK2pv7A9Nw6v6tqrp5EtM8XRz0TXQWWUOGavK8QiExk6morwSbEGyxg43LjHmrXAQq2gXeUAaEXJxLA3NUEG1bunXyQQzy1vNcA0s5DeZXe2HRSPZY4AiEB5jG%2BcURh6EDLAw7h8NqFIepmsSb2LsoCY4aluXjAmocV3jQa78I09aGy5Kr8gDTtCazQedVFobjfcUChrzvwv0xn8rTgcPavs6HKQS9BTVnirogSVP6Xb3mykEq9o6QGE6AGkhnF6OzMTkJrKL8WKVrMv8NyOi%2BvoHZXNY34K9WUx6SG5mx61usM97qeV5DPakYTceOonzZ%2BNOCOvhY8QdZLhfQCo%2FZKUDJlKD7mCKGVHC4CXGCd8uYZ4wRF%2FN0LUgk%2FBpmQjrxkqMdtRFhXXNyYYrCuMx3rH3IbD9%2BGu12IqNSj%2BPFMt6OSK3SvLmmIIuZrqRIQWmLuzY34GXXYXN92E0aTIUJE3KtNSPzOzOp%2F2ovR523%2B42uty7Oaf7clzrC1V9XcWtK%2F3%2BMOnLyMMGOqUB%2BQswZms%2FXIZPVTAzhXU1ubTMvmBCZWbyA6ksACAEoXrQMBGPojK8azR7jgvHuKR6IRkntORTLnu8j767s9ZA9WPWCEJsLPqm7RBk5T76K%2B6affdNlrZ%2FW48FzdBh6YGU2hJyBTHBU1nUjiq5Cq%2BfOmiRl8Cg9EcNzUO%2B8JZ%2Befpbmpg%2F20PlqF%2BZ3pCgKi45DJH165N8kX5WP0p2rALglKH16OYd&X-Amz-Signature=b64cc482c4c9063c312dc66191aede1c7fc7d74f9c81e524639b2f033bed7d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ56M4TF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC97Rf3KzFDQdmzMK02pVN9RF%2BkkX6xprnFCCn0XKjCHAiEA2v0YOowwpI7DNByNgGQ4YyXQdezWwIlRUAIhk1%2BWTu8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZNleQMvSNFu%2FAvzyrcAzropjWuxv9IIEGGr3FCsoFgIEABMRCk7ScVhxYUZb61AJhUVfR6yUTZ5x4awORyreHHdfs0l0ma%2BOr%2Fh8bAX9PMIy58e8r7HoU1D0Vq2BeZNp7NBnFFuYwQK2pv7A9Nw6v6tqrp5EtM8XRz0TXQWWUOGavK8QiExk6morwSbEGyxg43LjHmrXAQq2gXeUAaEXJxLA3NUEG1bunXyQQzy1vNcA0s5DeZXe2HRSPZY4AiEB5jG%2BcURh6EDLAw7h8NqFIepmsSb2LsoCY4aluXjAmocV3jQa78I09aGy5Kr8gDTtCazQedVFobjfcUChrzvwv0xn8rTgcPavs6HKQS9BTVnirogSVP6Xb3mykEq9o6QGE6AGkhnF6OzMTkJrKL8WKVrMv8NyOi%2BvoHZXNY34K9WUx6SG5mx61usM97qeV5DPakYTceOonzZ%2BNOCOvhY8QdZLhfQCo%2FZKUDJlKD7mCKGVHC4CXGCd8uYZ4wRF%2FN0LUgk%2FBpmQjrxkqMdtRFhXXNyYYrCuMx3rH3IbD9%2BGu12IqNSj%2BPFMt6OSK3SvLmmIIuZrqRIQWmLuzY34GXXYXN92E0aTIUJE3KtNSPzOzOp%2F2ovR523%2B42uty7Oaf7clzrC1V9XcWtK%2F3%2BMOnLyMMGOqUB%2BQswZms%2FXIZPVTAzhXU1ubTMvmBCZWbyA6ksACAEoXrQMBGPojK8azR7jgvHuKR6IRkntORTLnu8j767s9ZA9WPWCEJsLPqm7RBk5T76K%2B6affdNlrZ%2FW48FzdBh6YGU2hJyBTHBU1nUjiq5Cq%2BfOmiRl8Cg9EcNzUO%2B8JZ%2Befpbmpg%2F20PlqF%2BZ3pCgKi45DJH165N8kX5WP0p2rALglKH16OYd&X-Amz-Signature=9a3a2d94ce57991dccaa29598257492ef4bff399ab49b9c974cd8fb21ca65b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ56M4TF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC97Rf3KzFDQdmzMK02pVN9RF%2BkkX6xprnFCCn0XKjCHAiEA2v0YOowwpI7DNByNgGQ4YyXQdezWwIlRUAIhk1%2BWTu8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZNleQMvSNFu%2FAvzyrcAzropjWuxv9IIEGGr3FCsoFgIEABMRCk7ScVhxYUZb61AJhUVfR6yUTZ5x4awORyreHHdfs0l0ma%2BOr%2Fh8bAX9PMIy58e8r7HoU1D0Vq2BeZNp7NBnFFuYwQK2pv7A9Nw6v6tqrp5EtM8XRz0TXQWWUOGavK8QiExk6morwSbEGyxg43LjHmrXAQq2gXeUAaEXJxLA3NUEG1bunXyQQzy1vNcA0s5DeZXe2HRSPZY4AiEB5jG%2BcURh6EDLAw7h8NqFIepmsSb2LsoCY4aluXjAmocV3jQa78I09aGy5Kr8gDTtCazQedVFobjfcUChrzvwv0xn8rTgcPavs6HKQS9BTVnirogSVP6Xb3mykEq9o6QGE6AGkhnF6OzMTkJrKL8WKVrMv8NyOi%2BvoHZXNY34K9WUx6SG5mx61usM97qeV5DPakYTceOonzZ%2BNOCOvhY8QdZLhfQCo%2FZKUDJlKD7mCKGVHC4CXGCd8uYZ4wRF%2FN0LUgk%2FBpmQjrxkqMdtRFhXXNyYYrCuMx3rH3IbD9%2BGu12IqNSj%2BPFMt6OSK3SvLmmIIuZrqRIQWmLuzY34GXXYXN92E0aTIUJE3KtNSPzOzOp%2F2ovR523%2B42uty7Oaf7clzrC1V9XcWtK%2F3%2BMOnLyMMGOqUB%2BQswZms%2FXIZPVTAzhXU1ubTMvmBCZWbyA6ksACAEoXrQMBGPojK8azR7jgvHuKR6IRkntORTLnu8j767s9ZA9WPWCEJsLPqm7RBk5T76K%2B6affdNlrZ%2FW48FzdBh6YGU2hJyBTHBU1nUjiq5Cq%2BfOmiRl8Cg9EcNzUO%2B8JZ%2Befpbmpg%2F20PlqF%2BZ3pCgKi45DJH165N8kX5WP0p2rALglKH16OYd&X-Amz-Signature=9617f6ad016d88804340ddc2543f37dc4780dd56f051a3444563810d4a6c7609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ56M4TF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC97Rf3KzFDQdmzMK02pVN9RF%2BkkX6xprnFCCn0XKjCHAiEA2v0YOowwpI7DNByNgGQ4YyXQdezWwIlRUAIhk1%2BWTu8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZNleQMvSNFu%2FAvzyrcAzropjWuxv9IIEGGr3FCsoFgIEABMRCk7ScVhxYUZb61AJhUVfR6yUTZ5x4awORyreHHdfs0l0ma%2BOr%2Fh8bAX9PMIy58e8r7HoU1D0Vq2BeZNp7NBnFFuYwQK2pv7A9Nw6v6tqrp5EtM8XRz0TXQWWUOGavK8QiExk6morwSbEGyxg43LjHmrXAQq2gXeUAaEXJxLA3NUEG1bunXyQQzy1vNcA0s5DeZXe2HRSPZY4AiEB5jG%2BcURh6EDLAw7h8NqFIepmsSb2LsoCY4aluXjAmocV3jQa78I09aGy5Kr8gDTtCazQedVFobjfcUChrzvwv0xn8rTgcPavs6HKQS9BTVnirogSVP6Xb3mykEq9o6QGE6AGkhnF6OzMTkJrKL8WKVrMv8NyOi%2BvoHZXNY34K9WUx6SG5mx61usM97qeV5DPakYTceOonzZ%2BNOCOvhY8QdZLhfQCo%2FZKUDJlKD7mCKGVHC4CXGCd8uYZ4wRF%2FN0LUgk%2FBpmQjrxkqMdtRFhXXNyYYrCuMx3rH3IbD9%2BGu12IqNSj%2BPFMt6OSK3SvLmmIIuZrqRIQWmLuzY34GXXYXN92E0aTIUJE3KtNSPzOzOp%2F2ovR523%2B42uty7Oaf7clzrC1V9XcWtK%2F3%2BMOnLyMMGOqUB%2BQswZms%2FXIZPVTAzhXU1ubTMvmBCZWbyA6ksACAEoXrQMBGPojK8azR7jgvHuKR6IRkntORTLnu8j767s9ZA9WPWCEJsLPqm7RBk5T76K%2B6affdNlrZ%2FW48FzdBh6YGU2hJyBTHBU1nUjiq5Cq%2BfOmiRl8Cg9EcNzUO%2B8JZ%2Befpbmpg%2F20PlqF%2BZ3pCgKi45DJH165N8kX5WP0p2rALglKH16OYd&X-Amz-Signature=81a10da04f9a01d883ac0db6fce2acfd990d63d02bcab7971e554e79094276e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ56M4TF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC97Rf3KzFDQdmzMK02pVN9RF%2BkkX6xprnFCCn0XKjCHAiEA2v0YOowwpI7DNByNgGQ4YyXQdezWwIlRUAIhk1%2BWTu8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZNleQMvSNFu%2FAvzyrcAzropjWuxv9IIEGGr3FCsoFgIEABMRCk7ScVhxYUZb61AJhUVfR6yUTZ5x4awORyreHHdfs0l0ma%2BOr%2Fh8bAX9PMIy58e8r7HoU1D0Vq2BeZNp7NBnFFuYwQK2pv7A9Nw6v6tqrp5EtM8XRz0TXQWWUOGavK8QiExk6morwSbEGyxg43LjHmrXAQq2gXeUAaEXJxLA3NUEG1bunXyQQzy1vNcA0s5DeZXe2HRSPZY4AiEB5jG%2BcURh6EDLAw7h8NqFIepmsSb2LsoCY4aluXjAmocV3jQa78I09aGy5Kr8gDTtCazQedVFobjfcUChrzvwv0xn8rTgcPavs6HKQS9BTVnirogSVP6Xb3mykEq9o6QGE6AGkhnF6OzMTkJrKL8WKVrMv8NyOi%2BvoHZXNY34K9WUx6SG5mx61usM97qeV5DPakYTceOonzZ%2BNOCOvhY8QdZLhfQCo%2FZKUDJlKD7mCKGVHC4CXGCd8uYZ4wRF%2FN0LUgk%2FBpmQjrxkqMdtRFhXXNyYYrCuMx3rH3IbD9%2BGu12IqNSj%2BPFMt6OSK3SvLmmIIuZrqRIQWmLuzY34GXXYXN92E0aTIUJE3KtNSPzOzOp%2F2ovR523%2B42uty7Oaf7clzrC1V9XcWtK%2F3%2BMOnLyMMGOqUB%2BQswZms%2FXIZPVTAzhXU1ubTMvmBCZWbyA6ksACAEoXrQMBGPojK8azR7jgvHuKR6IRkntORTLnu8j767s9ZA9WPWCEJsLPqm7RBk5T76K%2B6affdNlrZ%2FW48FzdBh6YGU2hJyBTHBU1nUjiq5Cq%2BfOmiRl8Cg9EcNzUO%2B8JZ%2Befpbmpg%2F20PlqF%2BZ3pCgKi45DJH165N8kX5WP0p2rALglKH16OYd&X-Amz-Signature=04dece0aa190c9ea52dadeaa0093f82068a8cb3904864ebfc3d4b2e168939f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ56M4TF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC97Rf3KzFDQdmzMK02pVN9RF%2BkkX6xprnFCCn0XKjCHAiEA2v0YOowwpI7DNByNgGQ4YyXQdezWwIlRUAIhk1%2BWTu8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZNleQMvSNFu%2FAvzyrcAzropjWuxv9IIEGGr3FCsoFgIEABMRCk7ScVhxYUZb61AJhUVfR6yUTZ5x4awORyreHHdfs0l0ma%2BOr%2Fh8bAX9PMIy58e8r7HoU1D0Vq2BeZNp7NBnFFuYwQK2pv7A9Nw6v6tqrp5EtM8XRz0TXQWWUOGavK8QiExk6morwSbEGyxg43LjHmrXAQq2gXeUAaEXJxLA3NUEG1bunXyQQzy1vNcA0s5DeZXe2HRSPZY4AiEB5jG%2BcURh6EDLAw7h8NqFIepmsSb2LsoCY4aluXjAmocV3jQa78I09aGy5Kr8gDTtCazQedVFobjfcUChrzvwv0xn8rTgcPavs6HKQS9BTVnirogSVP6Xb3mykEq9o6QGE6AGkhnF6OzMTkJrKL8WKVrMv8NyOi%2BvoHZXNY34K9WUx6SG5mx61usM97qeV5DPakYTceOonzZ%2BNOCOvhY8QdZLhfQCo%2FZKUDJlKD7mCKGVHC4CXGCd8uYZ4wRF%2FN0LUgk%2FBpmQjrxkqMdtRFhXXNyYYrCuMx3rH3IbD9%2BGu12IqNSj%2BPFMt6OSK3SvLmmIIuZrqRIQWmLuzY34GXXYXN92E0aTIUJE3KtNSPzOzOp%2F2ovR523%2B42uty7Oaf7clzrC1V9XcWtK%2F3%2BMOnLyMMGOqUB%2BQswZms%2FXIZPVTAzhXU1ubTMvmBCZWbyA6ksACAEoXrQMBGPojK8azR7jgvHuKR6IRkntORTLnu8j767s9ZA9WPWCEJsLPqm7RBk5T76K%2B6affdNlrZ%2FW48FzdBh6YGU2hJyBTHBU1nUjiq5Cq%2BfOmiRl8Cg9EcNzUO%2B8JZ%2Befpbmpg%2F20PlqF%2BZ3pCgKi45DJH165N8kX5WP0p2rALglKH16OYd&X-Amz-Signature=bb3b7fca1513bc0a00f9523be43dded4a969478ce57488a7b478d49f65d4e0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ56M4TF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC97Rf3KzFDQdmzMK02pVN9RF%2BkkX6xprnFCCn0XKjCHAiEA2v0YOowwpI7DNByNgGQ4YyXQdezWwIlRUAIhk1%2BWTu8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZNleQMvSNFu%2FAvzyrcAzropjWuxv9IIEGGr3FCsoFgIEABMRCk7ScVhxYUZb61AJhUVfR6yUTZ5x4awORyreHHdfs0l0ma%2BOr%2Fh8bAX9PMIy58e8r7HoU1D0Vq2BeZNp7NBnFFuYwQK2pv7A9Nw6v6tqrp5EtM8XRz0TXQWWUOGavK8QiExk6morwSbEGyxg43LjHmrXAQq2gXeUAaEXJxLA3NUEG1bunXyQQzy1vNcA0s5DeZXe2HRSPZY4AiEB5jG%2BcURh6EDLAw7h8NqFIepmsSb2LsoCY4aluXjAmocV3jQa78I09aGy5Kr8gDTtCazQedVFobjfcUChrzvwv0xn8rTgcPavs6HKQS9BTVnirogSVP6Xb3mykEq9o6QGE6AGkhnF6OzMTkJrKL8WKVrMv8NyOi%2BvoHZXNY34K9WUx6SG5mx61usM97qeV5DPakYTceOonzZ%2BNOCOvhY8QdZLhfQCo%2FZKUDJlKD7mCKGVHC4CXGCd8uYZ4wRF%2FN0LUgk%2FBpmQjrxkqMdtRFhXXNyYYrCuMx3rH3IbD9%2BGu12IqNSj%2BPFMt6OSK3SvLmmIIuZrqRIQWmLuzY34GXXYXN92E0aTIUJE3KtNSPzOzOp%2F2ovR523%2B42uty7Oaf7clzrC1V9XcWtK%2F3%2BMOnLyMMGOqUB%2BQswZms%2FXIZPVTAzhXU1ubTMvmBCZWbyA6ksACAEoXrQMBGPojK8azR7jgvHuKR6IRkntORTLnu8j767s9ZA9WPWCEJsLPqm7RBk5T76K%2B6affdNlrZ%2FW48FzdBh6YGU2hJyBTHBU1nUjiq5Cq%2BfOmiRl8Cg9EcNzUO%2B8JZ%2Befpbmpg%2F20PlqF%2BZ3pCgKi45DJH165N8kX5WP0p2rALglKH16OYd&X-Amz-Signature=0c5dd133920aa8b59a1fd2cbdf4a75ef201659f711020b879de215d84f8bfc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJ56M4TF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC97Rf3KzFDQdmzMK02pVN9RF%2BkkX6xprnFCCn0XKjCHAiEA2v0YOowwpI7DNByNgGQ4YyXQdezWwIlRUAIhk1%2BWTu8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZNleQMvSNFu%2FAvzyrcAzropjWuxv9IIEGGr3FCsoFgIEABMRCk7ScVhxYUZb61AJhUVfR6yUTZ5x4awORyreHHdfs0l0ma%2BOr%2Fh8bAX9PMIy58e8r7HoU1D0Vq2BeZNp7NBnFFuYwQK2pv7A9Nw6v6tqrp5EtM8XRz0TXQWWUOGavK8QiExk6morwSbEGyxg43LjHmrXAQq2gXeUAaEXJxLA3NUEG1bunXyQQzy1vNcA0s5DeZXe2HRSPZY4AiEB5jG%2BcURh6EDLAw7h8NqFIepmsSb2LsoCY4aluXjAmocV3jQa78I09aGy5Kr8gDTtCazQedVFobjfcUChrzvwv0xn8rTgcPavs6HKQS9BTVnirogSVP6Xb3mykEq9o6QGE6AGkhnF6OzMTkJrKL8WKVrMv8NyOi%2BvoHZXNY34K9WUx6SG5mx61usM97qeV5DPakYTceOonzZ%2BNOCOvhY8QdZLhfQCo%2FZKUDJlKD7mCKGVHC4CXGCd8uYZ4wRF%2FN0LUgk%2FBpmQjrxkqMdtRFhXXNyYYrCuMx3rH3IbD9%2BGu12IqNSj%2BPFMt6OSK3SvLmmIIuZrqRIQWmLuzY34GXXYXN92E0aTIUJE3KtNSPzOzOp%2F2ovR523%2B42uty7Oaf7clzrC1V9XcWtK%2F3%2BMOnLyMMGOqUB%2BQswZms%2FXIZPVTAzhXU1ubTMvmBCZWbyA6ksACAEoXrQMBGPojK8azR7jgvHuKR6IRkntORTLnu8j767s9ZA9WPWCEJsLPqm7RBk5T76K%2B6affdNlrZ%2FW48FzdBh6YGU2hJyBTHBU1nUjiq5Cq%2BfOmiRl8Cg9EcNzUO%2B8JZ%2Befpbmpg%2F20PlqF%2BZ3pCgKi45DJH165N8kX5WP0p2rALglKH16OYd&X-Amz-Signature=e24c35a118144bf6c573b84612d51fe974d86dad3f8114a704caed80ad814ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
