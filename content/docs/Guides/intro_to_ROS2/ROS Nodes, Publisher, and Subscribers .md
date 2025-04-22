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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCOYPQS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDiRK3IVXkQrr1junuR42GuHwHuBPWL%2BanPs2NuuFryqgIhAPkClTR%2BeAKSZ91KeF9BPG82KWnMcaloHGA0586mJLLdKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2F4i3W%2FSMO%2BDRJxoq3ANHtBE8CjoKBsNC7FlIlU%2FP4L8gy%2B7W4ixd2%2BE1DlDWozcHsTR8mP3GOqWXb3h4Cc09FFF7RN0czcUvejIF7JrgiY7PUDRLqWz08Vr9u4Xa7UsHFuacg1dnwIW%2BkALnP%2Bscc0IyvSvN9%2FsZNidxiUyhb5ok7LNCyE4ibHrRPtAIJIVBLQvBglCs0yV1PktAO7VZGTwKoKc30RXl4JdqjrqrpQW1ovGzU8Ki6OP8FF78ahwsxOfZs2n4lE3YnNiOBY99nc6w3z9bSIc5qSM1NDvcSoUCDBTRaCcIqQnsp8M9T3NYOHniqf%2FJ5k5ymv0JIpu%2BpQuQLoL%2B7tKYnw2xDHWeHJJ1sBqU2lKwicZHV%2F58rGedb1BSALyjBr%2FYslqfa0hQOvukq06b%2BUS4%2Bsqhm8JyacMfx1xS6SYt4pj%2Fso9lI%2B7xmCMucMHPoPlSxtd6pgI5iZ0UMLFA2IfJlQjUtFX0UV0%2FRtL1tkji2oMt3b3HkffYrxZJbTlJ1Ejictx1rw%2Buq6fYwapsWK5y7VfYmgZeZ8soOapIDDIhLLwW538JbGt3MONQHxO8b6VBrbXEwMc%2F%2BL0FmJAnAnXMVtUxiKII6FrTyZGXU0LMn%2FjwiuzsGAikNkNC%2FikHY9ZEBjCGi53ABjqkAeRq31qjtuuhgQk65XQ2%2BtdwpcGP%2BxODuPEi%2B830uf%2FzpWwktWEc7nrd0jffDZbgA%2BIRH0qt6RTyWRUCJLpkuJLEV%2BQvjqAHDZKiXvEgHaaAetDw2PbhVV3ZPwNdItE48OVocEMiQHD1fyLIQwb6n2OTvoiL5l%2Fh8RTFeAULi2WLuH1HOcRyxX%2FDWU5eg%2FMGNfs30jggrup4CArMRtnLrsfTotUJ&X-Amz-Signature=f7ea6852f5203e64599d200c6e4b42991099f9b8a66e0c6b0ee62888c6e3ccf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCOYPQS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDiRK3IVXkQrr1junuR42GuHwHuBPWL%2BanPs2NuuFryqgIhAPkClTR%2BeAKSZ91KeF9BPG82KWnMcaloHGA0586mJLLdKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2F4i3W%2FSMO%2BDRJxoq3ANHtBE8CjoKBsNC7FlIlU%2FP4L8gy%2B7W4ixd2%2BE1DlDWozcHsTR8mP3GOqWXb3h4Cc09FFF7RN0czcUvejIF7JrgiY7PUDRLqWz08Vr9u4Xa7UsHFuacg1dnwIW%2BkALnP%2Bscc0IyvSvN9%2FsZNidxiUyhb5ok7LNCyE4ibHrRPtAIJIVBLQvBglCs0yV1PktAO7VZGTwKoKc30RXl4JdqjrqrpQW1ovGzU8Ki6OP8FF78ahwsxOfZs2n4lE3YnNiOBY99nc6w3z9bSIc5qSM1NDvcSoUCDBTRaCcIqQnsp8M9T3NYOHniqf%2FJ5k5ymv0JIpu%2BpQuQLoL%2B7tKYnw2xDHWeHJJ1sBqU2lKwicZHV%2F58rGedb1BSALyjBr%2FYslqfa0hQOvukq06b%2BUS4%2Bsqhm8JyacMfx1xS6SYt4pj%2Fso9lI%2B7xmCMucMHPoPlSxtd6pgI5iZ0UMLFA2IfJlQjUtFX0UV0%2FRtL1tkji2oMt3b3HkffYrxZJbTlJ1Ejictx1rw%2Buq6fYwapsWK5y7VfYmgZeZ8soOapIDDIhLLwW538JbGt3MONQHxO8b6VBrbXEwMc%2F%2BL0FmJAnAnXMVtUxiKII6FrTyZGXU0LMn%2FjwiuzsGAikNkNC%2FikHY9ZEBjCGi53ABjqkAeRq31qjtuuhgQk65XQ2%2BtdwpcGP%2BxODuPEi%2B830uf%2FzpWwktWEc7nrd0jffDZbgA%2BIRH0qt6RTyWRUCJLpkuJLEV%2BQvjqAHDZKiXvEgHaaAetDw2PbhVV3ZPwNdItE48OVocEMiQHD1fyLIQwb6n2OTvoiL5l%2Fh8RTFeAULi2WLuH1HOcRyxX%2FDWU5eg%2FMGNfs30jggrup4CArMRtnLrsfTotUJ&X-Amz-Signature=4f1cffe41bde2f33a13b49c9c613cd9cbd4b258d0c75c0b9bd2d6343a3590a03&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCOYPQS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDiRK3IVXkQrr1junuR42GuHwHuBPWL%2BanPs2NuuFryqgIhAPkClTR%2BeAKSZ91KeF9BPG82KWnMcaloHGA0586mJLLdKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2F4i3W%2FSMO%2BDRJxoq3ANHtBE8CjoKBsNC7FlIlU%2FP4L8gy%2B7W4ixd2%2BE1DlDWozcHsTR8mP3GOqWXb3h4Cc09FFF7RN0czcUvejIF7JrgiY7PUDRLqWz08Vr9u4Xa7UsHFuacg1dnwIW%2BkALnP%2Bscc0IyvSvN9%2FsZNidxiUyhb5ok7LNCyE4ibHrRPtAIJIVBLQvBglCs0yV1PktAO7VZGTwKoKc30RXl4JdqjrqrpQW1ovGzU8Ki6OP8FF78ahwsxOfZs2n4lE3YnNiOBY99nc6w3z9bSIc5qSM1NDvcSoUCDBTRaCcIqQnsp8M9T3NYOHniqf%2FJ5k5ymv0JIpu%2BpQuQLoL%2B7tKYnw2xDHWeHJJ1sBqU2lKwicZHV%2F58rGedb1BSALyjBr%2FYslqfa0hQOvukq06b%2BUS4%2Bsqhm8JyacMfx1xS6SYt4pj%2Fso9lI%2B7xmCMucMHPoPlSxtd6pgI5iZ0UMLFA2IfJlQjUtFX0UV0%2FRtL1tkji2oMt3b3HkffYrxZJbTlJ1Ejictx1rw%2Buq6fYwapsWK5y7VfYmgZeZ8soOapIDDIhLLwW538JbGt3MONQHxO8b6VBrbXEwMc%2F%2BL0FmJAnAnXMVtUxiKII6FrTyZGXU0LMn%2FjwiuzsGAikNkNC%2FikHY9ZEBjCGi53ABjqkAeRq31qjtuuhgQk65XQ2%2BtdwpcGP%2BxODuPEi%2B830uf%2FzpWwktWEc7nrd0jffDZbgA%2BIRH0qt6RTyWRUCJLpkuJLEV%2BQvjqAHDZKiXvEgHaaAetDw2PbhVV3ZPwNdItE48OVocEMiQHD1fyLIQwb6n2OTvoiL5l%2Fh8RTFeAULi2WLuH1HOcRyxX%2FDWU5eg%2FMGNfs30jggrup4CArMRtnLrsfTotUJ&X-Amz-Signature=1e4ba9d90496602914060daa4c31fd67c5127f102b23cc6bfaae8a9973735292&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCOYPQS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDiRK3IVXkQrr1junuR42GuHwHuBPWL%2BanPs2NuuFryqgIhAPkClTR%2BeAKSZ91KeF9BPG82KWnMcaloHGA0586mJLLdKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2F4i3W%2FSMO%2BDRJxoq3ANHtBE8CjoKBsNC7FlIlU%2FP4L8gy%2B7W4ixd2%2BE1DlDWozcHsTR8mP3GOqWXb3h4Cc09FFF7RN0czcUvejIF7JrgiY7PUDRLqWz08Vr9u4Xa7UsHFuacg1dnwIW%2BkALnP%2Bscc0IyvSvN9%2FsZNidxiUyhb5ok7LNCyE4ibHrRPtAIJIVBLQvBglCs0yV1PktAO7VZGTwKoKc30RXl4JdqjrqrpQW1ovGzU8Ki6OP8FF78ahwsxOfZs2n4lE3YnNiOBY99nc6w3z9bSIc5qSM1NDvcSoUCDBTRaCcIqQnsp8M9T3NYOHniqf%2FJ5k5ymv0JIpu%2BpQuQLoL%2B7tKYnw2xDHWeHJJ1sBqU2lKwicZHV%2F58rGedb1BSALyjBr%2FYslqfa0hQOvukq06b%2BUS4%2Bsqhm8JyacMfx1xS6SYt4pj%2Fso9lI%2B7xmCMucMHPoPlSxtd6pgI5iZ0UMLFA2IfJlQjUtFX0UV0%2FRtL1tkji2oMt3b3HkffYrxZJbTlJ1Ejictx1rw%2Buq6fYwapsWK5y7VfYmgZeZ8soOapIDDIhLLwW538JbGt3MONQHxO8b6VBrbXEwMc%2F%2BL0FmJAnAnXMVtUxiKII6FrTyZGXU0LMn%2FjwiuzsGAikNkNC%2FikHY9ZEBjCGi53ABjqkAeRq31qjtuuhgQk65XQ2%2BtdwpcGP%2BxODuPEi%2B830uf%2FzpWwktWEc7nrd0jffDZbgA%2BIRH0qt6RTyWRUCJLpkuJLEV%2BQvjqAHDZKiXvEgHaaAetDw2PbhVV3ZPwNdItE48OVocEMiQHD1fyLIQwb6n2OTvoiL5l%2Fh8RTFeAULi2WLuH1HOcRyxX%2FDWU5eg%2FMGNfs30jggrup4CArMRtnLrsfTotUJ&X-Amz-Signature=6964b330067b1e0fb1cefdacc3fa09a32f6b3090a1359747c8da8f6ab6474da1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCOYPQS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDiRK3IVXkQrr1junuR42GuHwHuBPWL%2BanPs2NuuFryqgIhAPkClTR%2BeAKSZ91KeF9BPG82KWnMcaloHGA0586mJLLdKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2F4i3W%2FSMO%2BDRJxoq3ANHtBE8CjoKBsNC7FlIlU%2FP4L8gy%2B7W4ixd2%2BE1DlDWozcHsTR8mP3GOqWXb3h4Cc09FFF7RN0czcUvejIF7JrgiY7PUDRLqWz08Vr9u4Xa7UsHFuacg1dnwIW%2BkALnP%2Bscc0IyvSvN9%2FsZNidxiUyhb5ok7LNCyE4ibHrRPtAIJIVBLQvBglCs0yV1PktAO7VZGTwKoKc30RXl4JdqjrqrpQW1ovGzU8Ki6OP8FF78ahwsxOfZs2n4lE3YnNiOBY99nc6w3z9bSIc5qSM1NDvcSoUCDBTRaCcIqQnsp8M9T3NYOHniqf%2FJ5k5ymv0JIpu%2BpQuQLoL%2B7tKYnw2xDHWeHJJ1sBqU2lKwicZHV%2F58rGedb1BSALyjBr%2FYslqfa0hQOvukq06b%2BUS4%2Bsqhm8JyacMfx1xS6SYt4pj%2Fso9lI%2B7xmCMucMHPoPlSxtd6pgI5iZ0UMLFA2IfJlQjUtFX0UV0%2FRtL1tkji2oMt3b3HkffYrxZJbTlJ1Ejictx1rw%2Buq6fYwapsWK5y7VfYmgZeZ8soOapIDDIhLLwW538JbGt3MONQHxO8b6VBrbXEwMc%2F%2BL0FmJAnAnXMVtUxiKII6FrTyZGXU0LMn%2FjwiuzsGAikNkNC%2FikHY9ZEBjCGi53ABjqkAeRq31qjtuuhgQk65XQ2%2BtdwpcGP%2BxODuPEi%2B830uf%2FzpWwktWEc7nrd0jffDZbgA%2BIRH0qt6RTyWRUCJLpkuJLEV%2BQvjqAHDZKiXvEgHaaAetDw2PbhVV3ZPwNdItE48OVocEMiQHD1fyLIQwb6n2OTvoiL5l%2Fh8RTFeAULi2WLuH1HOcRyxX%2FDWU5eg%2FMGNfs30jggrup4CArMRtnLrsfTotUJ&X-Amz-Signature=fa9ab99f297912d8a7998033e68ccd9f2bb50ecbd8d61a0fbb45091061692c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCOYPQS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDiRK3IVXkQrr1junuR42GuHwHuBPWL%2BanPs2NuuFryqgIhAPkClTR%2BeAKSZ91KeF9BPG82KWnMcaloHGA0586mJLLdKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2F4i3W%2FSMO%2BDRJxoq3ANHtBE8CjoKBsNC7FlIlU%2FP4L8gy%2B7W4ixd2%2BE1DlDWozcHsTR8mP3GOqWXb3h4Cc09FFF7RN0czcUvejIF7JrgiY7PUDRLqWz08Vr9u4Xa7UsHFuacg1dnwIW%2BkALnP%2Bscc0IyvSvN9%2FsZNidxiUyhb5ok7LNCyE4ibHrRPtAIJIVBLQvBglCs0yV1PktAO7VZGTwKoKc30RXl4JdqjrqrpQW1ovGzU8Ki6OP8FF78ahwsxOfZs2n4lE3YnNiOBY99nc6w3z9bSIc5qSM1NDvcSoUCDBTRaCcIqQnsp8M9T3NYOHniqf%2FJ5k5ymv0JIpu%2BpQuQLoL%2B7tKYnw2xDHWeHJJ1sBqU2lKwicZHV%2F58rGedb1BSALyjBr%2FYslqfa0hQOvukq06b%2BUS4%2Bsqhm8JyacMfx1xS6SYt4pj%2Fso9lI%2B7xmCMucMHPoPlSxtd6pgI5iZ0UMLFA2IfJlQjUtFX0UV0%2FRtL1tkji2oMt3b3HkffYrxZJbTlJ1Ejictx1rw%2Buq6fYwapsWK5y7VfYmgZeZ8soOapIDDIhLLwW538JbGt3MONQHxO8b6VBrbXEwMc%2F%2BL0FmJAnAnXMVtUxiKII6FrTyZGXU0LMn%2FjwiuzsGAikNkNC%2FikHY9ZEBjCGi53ABjqkAeRq31qjtuuhgQk65XQ2%2BtdwpcGP%2BxODuPEi%2B830uf%2FzpWwktWEc7nrd0jffDZbgA%2BIRH0qt6RTyWRUCJLpkuJLEV%2BQvjqAHDZKiXvEgHaaAetDw2PbhVV3ZPwNdItE48OVocEMiQHD1fyLIQwb6n2OTvoiL5l%2Fh8RTFeAULi2WLuH1HOcRyxX%2FDWU5eg%2FMGNfs30jggrup4CArMRtnLrsfTotUJ&X-Amz-Signature=13aa7b2e9ad60b8b045439d120ab4f1b5f04a545b7ba340b2ca86ddaf18e07ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCOYPQS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDiRK3IVXkQrr1junuR42GuHwHuBPWL%2BanPs2NuuFryqgIhAPkClTR%2BeAKSZ91KeF9BPG82KWnMcaloHGA0586mJLLdKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2F4i3W%2FSMO%2BDRJxoq3ANHtBE8CjoKBsNC7FlIlU%2FP4L8gy%2B7W4ixd2%2BE1DlDWozcHsTR8mP3GOqWXb3h4Cc09FFF7RN0czcUvejIF7JrgiY7PUDRLqWz08Vr9u4Xa7UsHFuacg1dnwIW%2BkALnP%2Bscc0IyvSvN9%2FsZNidxiUyhb5ok7LNCyE4ibHrRPtAIJIVBLQvBglCs0yV1PktAO7VZGTwKoKc30RXl4JdqjrqrpQW1ovGzU8Ki6OP8FF78ahwsxOfZs2n4lE3YnNiOBY99nc6w3z9bSIc5qSM1NDvcSoUCDBTRaCcIqQnsp8M9T3NYOHniqf%2FJ5k5ymv0JIpu%2BpQuQLoL%2B7tKYnw2xDHWeHJJ1sBqU2lKwicZHV%2F58rGedb1BSALyjBr%2FYslqfa0hQOvukq06b%2BUS4%2Bsqhm8JyacMfx1xS6SYt4pj%2Fso9lI%2B7xmCMucMHPoPlSxtd6pgI5iZ0UMLFA2IfJlQjUtFX0UV0%2FRtL1tkji2oMt3b3HkffYrxZJbTlJ1Ejictx1rw%2Buq6fYwapsWK5y7VfYmgZeZ8soOapIDDIhLLwW538JbGt3MONQHxO8b6VBrbXEwMc%2F%2BL0FmJAnAnXMVtUxiKII6FrTyZGXU0LMn%2FjwiuzsGAikNkNC%2FikHY9ZEBjCGi53ABjqkAeRq31qjtuuhgQk65XQ2%2BtdwpcGP%2BxODuPEi%2B830uf%2FzpWwktWEc7nrd0jffDZbgA%2BIRH0qt6RTyWRUCJLpkuJLEV%2BQvjqAHDZKiXvEgHaaAetDw2PbhVV3ZPwNdItE48OVocEMiQHD1fyLIQwb6n2OTvoiL5l%2Fh8RTFeAULi2WLuH1HOcRyxX%2FDWU5eg%2FMGNfs30jggrup4CArMRtnLrsfTotUJ&X-Amz-Signature=904501b6557fa5fd69bfcdf5620e7230609e80882d46b3d24a16ac3484d1f843&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSCOYPQS%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDiRK3IVXkQrr1junuR42GuHwHuBPWL%2BanPs2NuuFryqgIhAPkClTR%2BeAKSZ91KeF9BPG82KWnMcaloHGA0586mJLLdKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2F4i3W%2FSMO%2BDRJxoq3ANHtBE8CjoKBsNC7FlIlU%2FP4L8gy%2B7W4ixd2%2BE1DlDWozcHsTR8mP3GOqWXb3h4Cc09FFF7RN0czcUvejIF7JrgiY7PUDRLqWz08Vr9u4Xa7UsHFuacg1dnwIW%2BkALnP%2Bscc0IyvSvN9%2FsZNidxiUyhb5ok7LNCyE4ibHrRPtAIJIVBLQvBglCs0yV1PktAO7VZGTwKoKc30RXl4JdqjrqrpQW1ovGzU8Ki6OP8FF78ahwsxOfZs2n4lE3YnNiOBY99nc6w3z9bSIc5qSM1NDvcSoUCDBTRaCcIqQnsp8M9T3NYOHniqf%2FJ5k5ymv0JIpu%2BpQuQLoL%2B7tKYnw2xDHWeHJJ1sBqU2lKwicZHV%2F58rGedb1BSALyjBr%2FYslqfa0hQOvukq06b%2BUS4%2Bsqhm8JyacMfx1xS6SYt4pj%2Fso9lI%2B7xmCMucMHPoPlSxtd6pgI5iZ0UMLFA2IfJlQjUtFX0UV0%2FRtL1tkji2oMt3b3HkffYrxZJbTlJ1Ejictx1rw%2Buq6fYwapsWK5y7VfYmgZeZ8soOapIDDIhLLwW538JbGt3MONQHxO8b6VBrbXEwMc%2F%2BL0FmJAnAnXMVtUxiKII6FrTyZGXU0LMn%2FjwiuzsGAikNkNC%2FikHY9ZEBjCGi53ABjqkAeRq31qjtuuhgQk65XQ2%2BtdwpcGP%2BxODuPEi%2B830uf%2FzpWwktWEc7nrd0jffDZbgA%2BIRH0qt6RTyWRUCJLpkuJLEV%2BQvjqAHDZKiXvEgHaaAetDw2PbhVV3ZPwNdItE48OVocEMiQHD1fyLIQwb6n2OTvoiL5l%2Fh8RTFeAULi2WLuH1HOcRyxX%2FDWU5eg%2FMGNfs30jggrup4CArMRtnLrsfTotUJ&X-Amz-Signature=390f3751231402153b9f4e00bc9a3e36bae82c0e940ea63db5ea0d98aa695e75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
