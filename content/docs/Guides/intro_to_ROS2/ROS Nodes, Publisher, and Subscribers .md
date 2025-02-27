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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKW5EFD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCbBdrr3TwS9EW58ueeoKGd1hEhzEJYtaJS0aInia1ISAIgHR92KnUrc6dB3qNv7Iv%2BliSLpzsioW9vaniiREi%2FH20q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPGSa62O7iaI7HzfjCrcA1kSs3RuaSQKipgpNSx4zGd8Wb6ceQucYZggkSUFNEJJ03jciOV0LumxBnYmJ8CK%2FY1wouglxbPcOlFrnYxq1He7OkAgsSmX1a0UBTTfggUgOwuUsZnjy%2FeXZpU%2Bs7%2BvTimgUf8CNivlpQZWhI1l5ZiOfxGGf8ZV6PqETVfF1k1LsuWQjJryAd3dILql9GhB9VKxDXzX2uLjjcWiW9jo8HeCPTuBB2%2FjJK66i8q3uw3TA28eOTWNWvqRnRkrP1%2BP7bTtCiwU8UwCMAfadfo9zmhRjTKNPvJsV3polVw4DLwms001zN4kQBNXItcoiyZFO1N81f5P6tsT63aYEWlKHWjHBwCay0YisHYnpAgR%2BxStiRkYhr7BovchLoJ6ysgVWGhwbcqHSvLljYPnr58RCwzehhkpb6VQx69%2BPx59Zy%2Fqn%2BP5ZbH4X2ulcTTCLWJR5U8auViERAx2yM3U54WIIudukO7tcUHka4NyUMLaiYXNw0%2FQvCgzEC9YYUbNZsuBdinhy3uP5lqkSkgXgrXVdCGK%2BroiV25WzgKJTE6IsuYJUbzCl%2FvYN9v6dr3Lj8xCpfIbdgpURIyadqdKckZ1hYZoqmcdwo9kVp49mkM2IpIzE6PQ6Ifv3RDr9esQMOaLgL4GOqUBzN1mBDZ1d4Wma5UtWO%2BcqTk8AcN%2FZQPk5u7A6hAWEHQWav9Ku4vdRqOSoRWBhpcEYRfftezHHgxjVBIHOo0gBUptt%2BE1NzjfWt9dWnOfd3wwv%2FQhqCvKmvia62BObx8ht5UOZQUGVjnuQ0rw4kMMR4Jz53RpdqPTBLbv0xQEy%2Fy1Z3RVH1YGr8w1NV%2BMBo2xppwWXP%2BHjaKJamFRWxrbgj8WnnRq&X-Amz-Signature=67cf04295671843784f26f0e7bae7093cafbc557c7a20479172ceee2a789e5e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKW5EFD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCbBdrr3TwS9EW58ueeoKGd1hEhzEJYtaJS0aInia1ISAIgHR92KnUrc6dB3qNv7Iv%2BliSLpzsioW9vaniiREi%2FH20q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPGSa62O7iaI7HzfjCrcA1kSs3RuaSQKipgpNSx4zGd8Wb6ceQucYZggkSUFNEJJ03jciOV0LumxBnYmJ8CK%2FY1wouglxbPcOlFrnYxq1He7OkAgsSmX1a0UBTTfggUgOwuUsZnjy%2FeXZpU%2Bs7%2BvTimgUf8CNivlpQZWhI1l5ZiOfxGGf8ZV6PqETVfF1k1LsuWQjJryAd3dILql9GhB9VKxDXzX2uLjjcWiW9jo8HeCPTuBB2%2FjJK66i8q3uw3TA28eOTWNWvqRnRkrP1%2BP7bTtCiwU8UwCMAfadfo9zmhRjTKNPvJsV3polVw4DLwms001zN4kQBNXItcoiyZFO1N81f5P6tsT63aYEWlKHWjHBwCay0YisHYnpAgR%2BxStiRkYhr7BovchLoJ6ysgVWGhwbcqHSvLljYPnr58RCwzehhkpb6VQx69%2BPx59Zy%2Fqn%2BP5ZbH4X2ulcTTCLWJR5U8auViERAx2yM3U54WIIudukO7tcUHka4NyUMLaiYXNw0%2FQvCgzEC9YYUbNZsuBdinhy3uP5lqkSkgXgrXVdCGK%2BroiV25WzgKJTE6IsuYJUbzCl%2FvYN9v6dr3Lj8xCpfIbdgpURIyadqdKckZ1hYZoqmcdwo9kVp49mkM2IpIzE6PQ6Ifv3RDr9esQMOaLgL4GOqUBzN1mBDZ1d4Wma5UtWO%2BcqTk8AcN%2FZQPk5u7A6hAWEHQWav9Ku4vdRqOSoRWBhpcEYRfftezHHgxjVBIHOo0gBUptt%2BE1NzjfWt9dWnOfd3wwv%2FQhqCvKmvia62BObx8ht5UOZQUGVjnuQ0rw4kMMR4Jz53RpdqPTBLbv0xQEy%2Fy1Z3RVH1YGr8w1NV%2BMBo2xppwWXP%2BHjaKJamFRWxrbgj8WnnRq&X-Amz-Signature=879a3dd559d497ab929c15e602b61c3ec390fc3c63218daaa0ff674618f1c008&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKW5EFD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCbBdrr3TwS9EW58ueeoKGd1hEhzEJYtaJS0aInia1ISAIgHR92KnUrc6dB3qNv7Iv%2BliSLpzsioW9vaniiREi%2FH20q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPGSa62O7iaI7HzfjCrcA1kSs3RuaSQKipgpNSx4zGd8Wb6ceQucYZggkSUFNEJJ03jciOV0LumxBnYmJ8CK%2FY1wouglxbPcOlFrnYxq1He7OkAgsSmX1a0UBTTfggUgOwuUsZnjy%2FeXZpU%2Bs7%2BvTimgUf8CNivlpQZWhI1l5ZiOfxGGf8ZV6PqETVfF1k1LsuWQjJryAd3dILql9GhB9VKxDXzX2uLjjcWiW9jo8HeCPTuBB2%2FjJK66i8q3uw3TA28eOTWNWvqRnRkrP1%2BP7bTtCiwU8UwCMAfadfo9zmhRjTKNPvJsV3polVw4DLwms001zN4kQBNXItcoiyZFO1N81f5P6tsT63aYEWlKHWjHBwCay0YisHYnpAgR%2BxStiRkYhr7BovchLoJ6ysgVWGhwbcqHSvLljYPnr58RCwzehhkpb6VQx69%2BPx59Zy%2Fqn%2BP5ZbH4X2ulcTTCLWJR5U8auViERAx2yM3U54WIIudukO7tcUHka4NyUMLaiYXNw0%2FQvCgzEC9YYUbNZsuBdinhy3uP5lqkSkgXgrXVdCGK%2BroiV25WzgKJTE6IsuYJUbzCl%2FvYN9v6dr3Lj8xCpfIbdgpURIyadqdKckZ1hYZoqmcdwo9kVp49mkM2IpIzE6PQ6Ifv3RDr9esQMOaLgL4GOqUBzN1mBDZ1d4Wma5UtWO%2BcqTk8AcN%2FZQPk5u7A6hAWEHQWav9Ku4vdRqOSoRWBhpcEYRfftezHHgxjVBIHOo0gBUptt%2BE1NzjfWt9dWnOfd3wwv%2FQhqCvKmvia62BObx8ht5UOZQUGVjnuQ0rw4kMMR4Jz53RpdqPTBLbv0xQEy%2Fy1Z3RVH1YGr8w1NV%2BMBo2xppwWXP%2BHjaKJamFRWxrbgj8WnnRq&X-Amz-Signature=799c99bea23da9ec015e20e0dad3beb823889a29b9038924a86708b39e8561c6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKW5EFD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCbBdrr3TwS9EW58ueeoKGd1hEhzEJYtaJS0aInia1ISAIgHR92KnUrc6dB3qNv7Iv%2BliSLpzsioW9vaniiREi%2FH20q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPGSa62O7iaI7HzfjCrcA1kSs3RuaSQKipgpNSx4zGd8Wb6ceQucYZggkSUFNEJJ03jciOV0LumxBnYmJ8CK%2FY1wouglxbPcOlFrnYxq1He7OkAgsSmX1a0UBTTfggUgOwuUsZnjy%2FeXZpU%2Bs7%2BvTimgUf8CNivlpQZWhI1l5ZiOfxGGf8ZV6PqETVfF1k1LsuWQjJryAd3dILql9GhB9VKxDXzX2uLjjcWiW9jo8HeCPTuBB2%2FjJK66i8q3uw3TA28eOTWNWvqRnRkrP1%2BP7bTtCiwU8UwCMAfadfo9zmhRjTKNPvJsV3polVw4DLwms001zN4kQBNXItcoiyZFO1N81f5P6tsT63aYEWlKHWjHBwCay0YisHYnpAgR%2BxStiRkYhr7BovchLoJ6ysgVWGhwbcqHSvLljYPnr58RCwzehhkpb6VQx69%2BPx59Zy%2Fqn%2BP5ZbH4X2ulcTTCLWJR5U8auViERAx2yM3U54WIIudukO7tcUHka4NyUMLaiYXNw0%2FQvCgzEC9YYUbNZsuBdinhy3uP5lqkSkgXgrXVdCGK%2BroiV25WzgKJTE6IsuYJUbzCl%2FvYN9v6dr3Lj8xCpfIbdgpURIyadqdKckZ1hYZoqmcdwo9kVp49mkM2IpIzE6PQ6Ifv3RDr9esQMOaLgL4GOqUBzN1mBDZ1d4Wma5UtWO%2BcqTk8AcN%2FZQPk5u7A6hAWEHQWav9Ku4vdRqOSoRWBhpcEYRfftezHHgxjVBIHOo0gBUptt%2BE1NzjfWt9dWnOfd3wwv%2FQhqCvKmvia62BObx8ht5UOZQUGVjnuQ0rw4kMMR4Jz53RpdqPTBLbv0xQEy%2Fy1Z3RVH1YGr8w1NV%2BMBo2xppwWXP%2BHjaKJamFRWxrbgj8WnnRq&X-Amz-Signature=967efabd08a40b4716d9ed221fddbf2c3f9986689c9a59c26c2b698b6300c0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKW5EFD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCbBdrr3TwS9EW58ueeoKGd1hEhzEJYtaJS0aInia1ISAIgHR92KnUrc6dB3qNv7Iv%2BliSLpzsioW9vaniiREi%2FH20q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPGSa62O7iaI7HzfjCrcA1kSs3RuaSQKipgpNSx4zGd8Wb6ceQucYZggkSUFNEJJ03jciOV0LumxBnYmJ8CK%2FY1wouglxbPcOlFrnYxq1He7OkAgsSmX1a0UBTTfggUgOwuUsZnjy%2FeXZpU%2Bs7%2BvTimgUf8CNivlpQZWhI1l5ZiOfxGGf8ZV6PqETVfF1k1LsuWQjJryAd3dILql9GhB9VKxDXzX2uLjjcWiW9jo8HeCPTuBB2%2FjJK66i8q3uw3TA28eOTWNWvqRnRkrP1%2BP7bTtCiwU8UwCMAfadfo9zmhRjTKNPvJsV3polVw4DLwms001zN4kQBNXItcoiyZFO1N81f5P6tsT63aYEWlKHWjHBwCay0YisHYnpAgR%2BxStiRkYhr7BovchLoJ6ysgVWGhwbcqHSvLljYPnr58RCwzehhkpb6VQx69%2BPx59Zy%2Fqn%2BP5ZbH4X2ulcTTCLWJR5U8auViERAx2yM3U54WIIudukO7tcUHka4NyUMLaiYXNw0%2FQvCgzEC9YYUbNZsuBdinhy3uP5lqkSkgXgrXVdCGK%2BroiV25WzgKJTE6IsuYJUbzCl%2FvYN9v6dr3Lj8xCpfIbdgpURIyadqdKckZ1hYZoqmcdwo9kVp49mkM2IpIzE6PQ6Ifv3RDr9esQMOaLgL4GOqUBzN1mBDZ1d4Wma5UtWO%2BcqTk8AcN%2FZQPk5u7A6hAWEHQWav9Ku4vdRqOSoRWBhpcEYRfftezHHgxjVBIHOo0gBUptt%2BE1NzjfWt9dWnOfd3wwv%2FQhqCvKmvia62BObx8ht5UOZQUGVjnuQ0rw4kMMR4Jz53RpdqPTBLbv0xQEy%2Fy1Z3RVH1YGr8w1NV%2BMBo2xppwWXP%2BHjaKJamFRWxrbgj8WnnRq&X-Amz-Signature=67a77b922c3804778b76829e36f47f03a346edcdcb4f5db54ae8e256db1b01bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKW5EFD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCbBdrr3TwS9EW58ueeoKGd1hEhzEJYtaJS0aInia1ISAIgHR92KnUrc6dB3qNv7Iv%2BliSLpzsioW9vaniiREi%2FH20q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPGSa62O7iaI7HzfjCrcA1kSs3RuaSQKipgpNSx4zGd8Wb6ceQucYZggkSUFNEJJ03jciOV0LumxBnYmJ8CK%2FY1wouglxbPcOlFrnYxq1He7OkAgsSmX1a0UBTTfggUgOwuUsZnjy%2FeXZpU%2Bs7%2BvTimgUf8CNivlpQZWhI1l5ZiOfxGGf8ZV6PqETVfF1k1LsuWQjJryAd3dILql9GhB9VKxDXzX2uLjjcWiW9jo8HeCPTuBB2%2FjJK66i8q3uw3TA28eOTWNWvqRnRkrP1%2BP7bTtCiwU8UwCMAfadfo9zmhRjTKNPvJsV3polVw4DLwms001zN4kQBNXItcoiyZFO1N81f5P6tsT63aYEWlKHWjHBwCay0YisHYnpAgR%2BxStiRkYhr7BovchLoJ6ysgVWGhwbcqHSvLljYPnr58RCwzehhkpb6VQx69%2BPx59Zy%2Fqn%2BP5ZbH4X2ulcTTCLWJR5U8auViERAx2yM3U54WIIudukO7tcUHka4NyUMLaiYXNw0%2FQvCgzEC9YYUbNZsuBdinhy3uP5lqkSkgXgrXVdCGK%2BroiV25WzgKJTE6IsuYJUbzCl%2FvYN9v6dr3Lj8xCpfIbdgpURIyadqdKckZ1hYZoqmcdwo9kVp49mkM2IpIzE6PQ6Ifv3RDr9esQMOaLgL4GOqUBzN1mBDZ1d4Wma5UtWO%2BcqTk8AcN%2FZQPk5u7A6hAWEHQWav9Ku4vdRqOSoRWBhpcEYRfftezHHgxjVBIHOo0gBUptt%2BE1NzjfWt9dWnOfd3wwv%2FQhqCvKmvia62BObx8ht5UOZQUGVjnuQ0rw4kMMR4Jz53RpdqPTBLbv0xQEy%2Fy1Z3RVH1YGr8w1NV%2BMBo2xppwWXP%2BHjaKJamFRWxrbgj8WnnRq&X-Amz-Signature=5563e4ebad317fe3150cbfe374bfbb5b43745b795f95c5697dea8cfd2da74565&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKW5EFD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCbBdrr3TwS9EW58ueeoKGd1hEhzEJYtaJS0aInia1ISAIgHR92KnUrc6dB3qNv7Iv%2BliSLpzsioW9vaniiREi%2FH20q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPGSa62O7iaI7HzfjCrcA1kSs3RuaSQKipgpNSx4zGd8Wb6ceQucYZggkSUFNEJJ03jciOV0LumxBnYmJ8CK%2FY1wouglxbPcOlFrnYxq1He7OkAgsSmX1a0UBTTfggUgOwuUsZnjy%2FeXZpU%2Bs7%2BvTimgUf8CNivlpQZWhI1l5ZiOfxGGf8ZV6PqETVfF1k1LsuWQjJryAd3dILql9GhB9VKxDXzX2uLjjcWiW9jo8HeCPTuBB2%2FjJK66i8q3uw3TA28eOTWNWvqRnRkrP1%2BP7bTtCiwU8UwCMAfadfo9zmhRjTKNPvJsV3polVw4DLwms001zN4kQBNXItcoiyZFO1N81f5P6tsT63aYEWlKHWjHBwCay0YisHYnpAgR%2BxStiRkYhr7BovchLoJ6ysgVWGhwbcqHSvLljYPnr58RCwzehhkpb6VQx69%2BPx59Zy%2Fqn%2BP5ZbH4X2ulcTTCLWJR5U8auViERAx2yM3U54WIIudukO7tcUHka4NyUMLaiYXNw0%2FQvCgzEC9YYUbNZsuBdinhy3uP5lqkSkgXgrXVdCGK%2BroiV25WzgKJTE6IsuYJUbzCl%2FvYN9v6dr3Lj8xCpfIbdgpURIyadqdKckZ1hYZoqmcdwo9kVp49mkM2IpIzE6PQ6Ifv3RDr9esQMOaLgL4GOqUBzN1mBDZ1d4Wma5UtWO%2BcqTk8AcN%2FZQPk5u7A6hAWEHQWav9Ku4vdRqOSoRWBhpcEYRfftezHHgxjVBIHOo0gBUptt%2BE1NzjfWt9dWnOfd3wwv%2FQhqCvKmvia62BObx8ht5UOZQUGVjnuQ0rw4kMMR4Jz53RpdqPTBLbv0xQEy%2Fy1Z3RVH1YGr8w1NV%2BMBo2xppwWXP%2BHjaKJamFRWxrbgj8WnnRq&X-Amz-Signature=82c9714cd6a0c44b6830e59b58e5533a03830b0288fd89c0d2826ee6c58c2b4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CKW5EFD%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCbBdrr3TwS9EW58ueeoKGd1hEhzEJYtaJS0aInia1ISAIgHR92KnUrc6dB3qNv7Iv%2BliSLpzsioW9vaniiREi%2FH20q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPGSa62O7iaI7HzfjCrcA1kSs3RuaSQKipgpNSx4zGd8Wb6ceQucYZggkSUFNEJJ03jciOV0LumxBnYmJ8CK%2FY1wouglxbPcOlFrnYxq1He7OkAgsSmX1a0UBTTfggUgOwuUsZnjy%2FeXZpU%2Bs7%2BvTimgUf8CNivlpQZWhI1l5ZiOfxGGf8ZV6PqETVfF1k1LsuWQjJryAd3dILql9GhB9VKxDXzX2uLjjcWiW9jo8HeCPTuBB2%2FjJK66i8q3uw3TA28eOTWNWvqRnRkrP1%2BP7bTtCiwU8UwCMAfadfo9zmhRjTKNPvJsV3polVw4DLwms001zN4kQBNXItcoiyZFO1N81f5P6tsT63aYEWlKHWjHBwCay0YisHYnpAgR%2BxStiRkYhr7BovchLoJ6ysgVWGhwbcqHSvLljYPnr58RCwzehhkpb6VQx69%2BPx59Zy%2Fqn%2BP5ZbH4X2ulcTTCLWJR5U8auViERAx2yM3U54WIIudukO7tcUHka4NyUMLaiYXNw0%2FQvCgzEC9YYUbNZsuBdinhy3uP5lqkSkgXgrXVdCGK%2BroiV25WzgKJTE6IsuYJUbzCl%2FvYN9v6dr3Lj8xCpfIbdgpURIyadqdKckZ1hYZoqmcdwo9kVp49mkM2IpIzE6PQ6Ifv3RDr9esQMOaLgL4GOqUBzN1mBDZ1d4Wma5UtWO%2BcqTk8AcN%2FZQPk5u7A6hAWEHQWav9Ku4vdRqOSoRWBhpcEYRfftezHHgxjVBIHOo0gBUptt%2BE1NzjfWt9dWnOfd3wwv%2FQhqCvKmvia62BObx8ht5UOZQUGVjnuQ0rw4kMMR4Jz53RpdqPTBLbv0xQEy%2Fy1Z3RVH1YGr8w1NV%2BMBo2xppwWXP%2BHjaKJamFRWxrbgj8WnnRq&X-Amz-Signature=03cae11f7b1e893a99f9bae644f40e859401c1b8429daa545474c66c1da7912d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
