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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTMDU2G%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCFjXy1HNw3OA3GoTpiYEDLMTgX%2FUBwni7CEez6CXA53wIhAOKzRz%2FbxhAxTJjPGThr7YzTo028LCla5B35r1pmr%2FSXKv8DCEMQABoMNjM3NDIzMTgzODA1Igzh49TbVR%2BseBdVoXwq3AN4e5xbjfS3SHrs00BP9O2%2BEA7CfGn6O31fvxJXU9vYwHQ4hPQ4jTRA7LQAXWyl6phGoAh0jo01IsjAjEY7OogmAvkK81MDNB5lo9By5uKpEYoVFC%2Bf81n%2B85qj4iuTkHbaq5vi%2FG%2Fh66c7x2F4HJwTzia9Bj5ItmK2JLyEMueEtf0IvL%2Bh8Zsa4pSG3NZAGOQv7Fhg8HASDUzSnylHSzPCSpDzBj%2Bw%2FyOkxIHoHLmQTIiEtwBX4jABKjOp0h3Z8MvzWRXD7tO35XNkvjwcopcosyc3SwxSDfsG0Dnk5jE%2BbEtLCM8h2VpKiPdsWWIAzyue0fwWZCyFk9v1iLjiLRX1PydxUWr1vLNj4LpL%2FqZ%2F6n38pFQaiDK98NjVXbgAMQA%2FYpPCzN8nuMeukYOV4AgHOHH4nOlCoLeXgKbuGCCVyGlrQoEUmcwp%2FmHAUOc6vByQbCobzJow2DMfO6%2BI%2F65b%2B21Eh3cqa3EYigR%2BesbwlQwoc%2B6noLX49d34hom9sUcMphM3YSU7hcVV0b8VkQOKgWRS7206ztF8HeHF8Cf0hK1S6PweNZUI8rnIW8KymvX1Nu7JZzlEaot%2Bn9eDFKsXeFjMc%2FxNQ2wUeHyms6Huj%2BMuYoIUZs%2BFiKIa2DD2yoXCBjqkAZUQ2YGfAGqiBYh3gWCHlnwUMiKC37jNyrcW%2BnqJJ0lOo2W8jxcLEXfgXysYlwwq7O2EuTpN3V3K8YPzRyebgNp2XWDA6N4WZLcvt1LkBCs5u69lDz9XtRKW6yVo4Z3CHS4Y6rdJ0JIZ4DhAO%2BkwC6Zq%2BMBJVAZ2HNeWKIBfUtmqIxWpRtKhZx18JUIereie6gxLEags8wmDpLIlZVEzwr%2FeAgVH&X-Amz-Signature=750787520ece8d6332429feb774b17a8473a0da07e76836d2484d0810849d6bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTMDU2G%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCFjXy1HNw3OA3GoTpiYEDLMTgX%2FUBwni7CEez6CXA53wIhAOKzRz%2FbxhAxTJjPGThr7YzTo028LCla5B35r1pmr%2FSXKv8DCEMQABoMNjM3NDIzMTgzODA1Igzh49TbVR%2BseBdVoXwq3AN4e5xbjfS3SHrs00BP9O2%2BEA7CfGn6O31fvxJXU9vYwHQ4hPQ4jTRA7LQAXWyl6phGoAh0jo01IsjAjEY7OogmAvkK81MDNB5lo9By5uKpEYoVFC%2Bf81n%2B85qj4iuTkHbaq5vi%2FG%2Fh66c7x2F4HJwTzia9Bj5ItmK2JLyEMueEtf0IvL%2Bh8Zsa4pSG3NZAGOQv7Fhg8HASDUzSnylHSzPCSpDzBj%2Bw%2FyOkxIHoHLmQTIiEtwBX4jABKjOp0h3Z8MvzWRXD7tO35XNkvjwcopcosyc3SwxSDfsG0Dnk5jE%2BbEtLCM8h2VpKiPdsWWIAzyue0fwWZCyFk9v1iLjiLRX1PydxUWr1vLNj4LpL%2FqZ%2F6n38pFQaiDK98NjVXbgAMQA%2FYpPCzN8nuMeukYOV4AgHOHH4nOlCoLeXgKbuGCCVyGlrQoEUmcwp%2FmHAUOc6vByQbCobzJow2DMfO6%2BI%2F65b%2B21Eh3cqa3EYigR%2BesbwlQwoc%2B6noLX49d34hom9sUcMphM3YSU7hcVV0b8VkQOKgWRS7206ztF8HeHF8Cf0hK1S6PweNZUI8rnIW8KymvX1Nu7JZzlEaot%2Bn9eDFKsXeFjMc%2FxNQ2wUeHyms6Huj%2BMuYoIUZs%2BFiKIa2DD2yoXCBjqkAZUQ2YGfAGqiBYh3gWCHlnwUMiKC37jNyrcW%2BnqJJ0lOo2W8jxcLEXfgXysYlwwq7O2EuTpN3V3K8YPzRyebgNp2XWDA6N4WZLcvt1LkBCs5u69lDz9XtRKW6yVo4Z3CHS4Y6rdJ0JIZ4DhAO%2BkwC6Zq%2BMBJVAZ2HNeWKIBfUtmqIxWpRtKhZx18JUIereie6gxLEags8wmDpLIlZVEzwr%2FeAgVH&X-Amz-Signature=40c21e4dd9cbf07589d2747c2c9b2c7bef91e5fe4c35bb8dc5907abd741bc795&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTMDU2G%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCFjXy1HNw3OA3GoTpiYEDLMTgX%2FUBwni7CEez6CXA53wIhAOKzRz%2FbxhAxTJjPGThr7YzTo028LCla5B35r1pmr%2FSXKv8DCEMQABoMNjM3NDIzMTgzODA1Igzh49TbVR%2BseBdVoXwq3AN4e5xbjfS3SHrs00BP9O2%2BEA7CfGn6O31fvxJXU9vYwHQ4hPQ4jTRA7LQAXWyl6phGoAh0jo01IsjAjEY7OogmAvkK81MDNB5lo9By5uKpEYoVFC%2Bf81n%2B85qj4iuTkHbaq5vi%2FG%2Fh66c7x2F4HJwTzia9Bj5ItmK2JLyEMueEtf0IvL%2Bh8Zsa4pSG3NZAGOQv7Fhg8HASDUzSnylHSzPCSpDzBj%2Bw%2FyOkxIHoHLmQTIiEtwBX4jABKjOp0h3Z8MvzWRXD7tO35XNkvjwcopcosyc3SwxSDfsG0Dnk5jE%2BbEtLCM8h2VpKiPdsWWIAzyue0fwWZCyFk9v1iLjiLRX1PydxUWr1vLNj4LpL%2FqZ%2F6n38pFQaiDK98NjVXbgAMQA%2FYpPCzN8nuMeukYOV4AgHOHH4nOlCoLeXgKbuGCCVyGlrQoEUmcwp%2FmHAUOc6vByQbCobzJow2DMfO6%2BI%2F65b%2B21Eh3cqa3EYigR%2BesbwlQwoc%2B6noLX49d34hom9sUcMphM3YSU7hcVV0b8VkQOKgWRS7206ztF8HeHF8Cf0hK1S6PweNZUI8rnIW8KymvX1Nu7JZzlEaot%2Bn9eDFKsXeFjMc%2FxNQ2wUeHyms6Huj%2BMuYoIUZs%2BFiKIa2DD2yoXCBjqkAZUQ2YGfAGqiBYh3gWCHlnwUMiKC37jNyrcW%2BnqJJ0lOo2W8jxcLEXfgXysYlwwq7O2EuTpN3V3K8YPzRyebgNp2XWDA6N4WZLcvt1LkBCs5u69lDz9XtRKW6yVo4Z3CHS4Y6rdJ0JIZ4DhAO%2BkwC6Zq%2BMBJVAZ2HNeWKIBfUtmqIxWpRtKhZx18JUIereie6gxLEags8wmDpLIlZVEzwr%2FeAgVH&X-Amz-Signature=2157411823bf2447cb75acf149072ebce2f966d934f2425838fece3b7fa11ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTMDU2G%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCFjXy1HNw3OA3GoTpiYEDLMTgX%2FUBwni7CEez6CXA53wIhAOKzRz%2FbxhAxTJjPGThr7YzTo028LCla5B35r1pmr%2FSXKv8DCEMQABoMNjM3NDIzMTgzODA1Igzh49TbVR%2BseBdVoXwq3AN4e5xbjfS3SHrs00BP9O2%2BEA7CfGn6O31fvxJXU9vYwHQ4hPQ4jTRA7LQAXWyl6phGoAh0jo01IsjAjEY7OogmAvkK81MDNB5lo9By5uKpEYoVFC%2Bf81n%2B85qj4iuTkHbaq5vi%2FG%2Fh66c7x2F4HJwTzia9Bj5ItmK2JLyEMueEtf0IvL%2Bh8Zsa4pSG3NZAGOQv7Fhg8HASDUzSnylHSzPCSpDzBj%2Bw%2FyOkxIHoHLmQTIiEtwBX4jABKjOp0h3Z8MvzWRXD7tO35XNkvjwcopcosyc3SwxSDfsG0Dnk5jE%2BbEtLCM8h2VpKiPdsWWIAzyue0fwWZCyFk9v1iLjiLRX1PydxUWr1vLNj4LpL%2FqZ%2F6n38pFQaiDK98NjVXbgAMQA%2FYpPCzN8nuMeukYOV4AgHOHH4nOlCoLeXgKbuGCCVyGlrQoEUmcwp%2FmHAUOc6vByQbCobzJow2DMfO6%2BI%2F65b%2B21Eh3cqa3EYigR%2BesbwlQwoc%2B6noLX49d34hom9sUcMphM3YSU7hcVV0b8VkQOKgWRS7206ztF8HeHF8Cf0hK1S6PweNZUI8rnIW8KymvX1Nu7JZzlEaot%2Bn9eDFKsXeFjMc%2FxNQ2wUeHyms6Huj%2BMuYoIUZs%2BFiKIa2DD2yoXCBjqkAZUQ2YGfAGqiBYh3gWCHlnwUMiKC37jNyrcW%2BnqJJ0lOo2W8jxcLEXfgXysYlwwq7O2EuTpN3V3K8YPzRyebgNp2XWDA6N4WZLcvt1LkBCs5u69lDz9XtRKW6yVo4Z3CHS4Y6rdJ0JIZ4DhAO%2BkwC6Zq%2BMBJVAZ2HNeWKIBfUtmqIxWpRtKhZx18JUIereie6gxLEags8wmDpLIlZVEzwr%2FeAgVH&X-Amz-Signature=cd71964bde03640fda36c19ceb0b4176b11261ae8c390a7d5134582e236baee1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTMDU2G%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCFjXy1HNw3OA3GoTpiYEDLMTgX%2FUBwni7CEez6CXA53wIhAOKzRz%2FbxhAxTJjPGThr7YzTo028LCla5B35r1pmr%2FSXKv8DCEMQABoMNjM3NDIzMTgzODA1Igzh49TbVR%2BseBdVoXwq3AN4e5xbjfS3SHrs00BP9O2%2BEA7CfGn6O31fvxJXU9vYwHQ4hPQ4jTRA7LQAXWyl6phGoAh0jo01IsjAjEY7OogmAvkK81MDNB5lo9By5uKpEYoVFC%2Bf81n%2B85qj4iuTkHbaq5vi%2FG%2Fh66c7x2F4HJwTzia9Bj5ItmK2JLyEMueEtf0IvL%2Bh8Zsa4pSG3NZAGOQv7Fhg8HASDUzSnylHSzPCSpDzBj%2Bw%2FyOkxIHoHLmQTIiEtwBX4jABKjOp0h3Z8MvzWRXD7tO35XNkvjwcopcosyc3SwxSDfsG0Dnk5jE%2BbEtLCM8h2VpKiPdsWWIAzyue0fwWZCyFk9v1iLjiLRX1PydxUWr1vLNj4LpL%2FqZ%2F6n38pFQaiDK98NjVXbgAMQA%2FYpPCzN8nuMeukYOV4AgHOHH4nOlCoLeXgKbuGCCVyGlrQoEUmcwp%2FmHAUOc6vByQbCobzJow2DMfO6%2BI%2F65b%2B21Eh3cqa3EYigR%2BesbwlQwoc%2B6noLX49d34hom9sUcMphM3YSU7hcVV0b8VkQOKgWRS7206ztF8HeHF8Cf0hK1S6PweNZUI8rnIW8KymvX1Nu7JZzlEaot%2Bn9eDFKsXeFjMc%2FxNQ2wUeHyms6Huj%2BMuYoIUZs%2BFiKIa2DD2yoXCBjqkAZUQ2YGfAGqiBYh3gWCHlnwUMiKC37jNyrcW%2BnqJJ0lOo2W8jxcLEXfgXysYlwwq7O2EuTpN3V3K8YPzRyebgNp2XWDA6N4WZLcvt1LkBCs5u69lDz9XtRKW6yVo4Z3CHS4Y6rdJ0JIZ4DhAO%2BkwC6Zq%2BMBJVAZ2HNeWKIBfUtmqIxWpRtKhZx18JUIereie6gxLEags8wmDpLIlZVEzwr%2FeAgVH&X-Amz-Signature=db3e71deeede9784cb7f3d5c62104599a53ff8a6f670dbfc3a25b1ee36871f36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTMDU2G%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCFjXy1HNw3OA3GoTpiYEDLMTgX%2FUBwni7CEez6CXA53wIhAOKzRz%2FbxhAxTJjPGThr7YzTo028LCla5B35r1pmr%2FSXKv8DCEMQABoMNjM3NDIzMTgzODA1Igzh49TbVR%2BseBdVoXwq3AN4e5xbjfS3SHrs00BP9O2%2BEA7CfGn6O31fvxJXU9vYwHQ4hPQ4jTRA7LQAXWyl6phGoAh0jo01IsjAjEY7OogmAvkK81MDNB5lo9By5uKpEYoVFC%2Bf81n%2B85qj4iuTkHbaq5vi%2FG%2Fh66c7x2F4HJwTzia9Bj5ItmK2JLyEMueEtf0IvL%2Bh8Zsa4pSG3NZAGOQv7Fhg8HASDUzSnylHSzPCSpDzBj%2Bw%2FyOkxIHoHLmQTIiEtwBX4jABKjOp0h3Z8MvzWRXD7tO35XNkvjwcopcosyc3SwxSDfsG0Dnk5jE%2BbEtLCM8h2VpKiPdsWWIAzyue0fwWZCyFk9v1iLjiLRX1PydxUWr1vLNj4LpL%2FqZ%2F6n38pFQaiDK98NjVXbgAMQA%2FYpPCzN8nuMeukYOV4AgHOHH4nOlCoLeXgKbuGCCVyGlrQoEUmcwp%2FmHAUOc6vByQbCobzJow2DMfO6%2BI%2F65b%2B21Eh3cqa3EYigR%2BesbwlQwoc%2B6noLX49d34hom9sUcMphM3YSU7hcVV0b8VkQOKgWRS7206ztF8HeHF8Cf0hK1S6PweNZUI8rnIW8KymvX1Nu7JZzlEaot%2Bn9eDFKsXeFjMc%2FxNQ2wUeHyms6Huj%2BMuYoIUZs%2BFiKIa2DD2yoXCBjqkAZUQ2YGfAGqiBYh3gWCHlnwUMiKC37jNyrcW%2BnqJJ0lOo2W8jxcLEXfgXysYlwwq7O2EuTpN3V3K8YPzRyebgNp2XWDA6N4WZLcvt1LkBCs5u69lDz9XtRKW6yVo4Z3CHS4Y6rdJ0JIZ4DhAO%2BkwC6Zq%2BMBJVAZ2HNeWKIBfUtmqIxWpRtKhZx18JUIereie6gxLEags8wmDpLIlZVEzwr%2FeAgVH&X-Amz-Signature=525c850f8698e975c84826f7db36128314f0d8a54006911b7528556609140d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTMDU2G%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCFjXy1HNw3OA3GoTpiYEDLMTgX%2FUBwni7CEez6CXA53wIhAOKzRz%2FbxhAxTJjPGThr7YzTo028LCla5B35r1pmr%2FSXKv8DCEMQABoMNjM3NDIzMTgzODA1Igzh49TbVR%2BseBdVoXwq3AN4e5xbjfS3SHrs00BP9O2%2BEA7CfGn6O31fvxJXU9vYwHQ4hPQ4jTRA7LQAXWyl6phGoAh0jo01IsjAjEY7OogmAvkK81MDNB5lo9By5uKpEYoVFC%2Bf81n%2B85qj4iuTkHbaq5vi%2FG%2Fh66c7x2F4HJwTzia9Bj5ItmK2JLyEMueEtf0IvL%2Bh8Zsa4pSG3NZAGOQv7Fhg8HASDUzSnylHSzPCSpDzBj%2Bw%2FyOkxIHoHLmQTIiEtwBX4jABKjOp0h3Z8MvzWRXD7tO35XNkvjwcopcosyc3SwxSDfsG0Dnk5jE%2BbEtLCM8h2VpKiPdsWWIAzyue0fwWZCyFk9v1iLjiLRX1PydxUWr1vLNj4LpL%2FqZ%2F6n38pFQaiDK98NjVXbgAMQA%2FYpPCzN8nuMeukYOV4AgHOHH4nOlCoLeXgKbuGCCVyGlrQoEUmcwp%2FmHAUOc6vByQbCobzJow2DMfO6%2BI%2F65b%2B21Eh3cqa3EYigR%2BesbwlQwoc%2B6noLX49d34hom9sUcMphM3YSU7hcVV0b8VkQOKgWRS7206ztF8HeHF8Cf0hK1S6PweNZUI8rnIW8KymvX1Nu7JZzlEaot%2Bn9eDFKsXeFjMc%2FxNQ2wUeHyms6Huj%2BMuYoIUZs%2BFiKIa2DD2yoXCBjqkAZUQ2YGfAGqiBYh3gWCHlnwUMiKC37jNyrcW%2BnqJJ0lOo2W8jxcLEXfgXysYlwwq7O2EuTpN3V3K8YPzRyebgNp2XWDA6N4WZLcvt1LkBCs5u69lDz9XtRKW6yVo4Z3CHS4Y6rdJ0JIZ4DhAO%2BkwC6Zq%2BMBJVAZ2HNeWKIBfUtmqIxWpRtKhZx18JUIereie6gxLEags8wmDpLIlZVEzwr%2FeAgVH&X-Amz-Signature=f93a15157431c25f21d0cc93261ee23af5d30adc90ef16787be1ab480d8b1727&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DTMDU2G%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCFjXy1HNw3OA3GoTpiYEDLMTgX%2FUBwni7CEez6CXA53wIhAOKzRz%2FbxhAxTJjPGThr7YzTo028LCla5B35r1pmr%2FSXKv8DCEMQABoMNjM3NDIzMTgzODA1Igzh49TbVR%2BseBdVoXwq3AN4e5xbjfS3SHrs00BP9O2%2BEA7CfGn6O31fvxJXU9vYwHQ4hPQ4jTRA7LQAXWyl6phGoAh0jo01IsjAjEY7OogmAvkK81MDNB5lo9By5uKpEYoVFC%2Bf81n%2B85qj4iuTkHbaq5vi%2FG%2Fh66c7x2F4HJwTzia9Bj5ItmK2JLyEMueEtf0IvL%2Bh8Zsa4pSG3NZAGOQv7Fhg8HASDUzSnylHSzPCSpDzBj%2Bw%2FyOkxIHoHLmQTIiEtwBX4jABKjOp0h3Z8MvzWRXD7tO35XNkvjwcopcosyc3SwxSDfsG0Dnk5jE%2BbEtLCM8h2VpKiPdsWWIAzyue0fwWZCyFk9v1iLjiLRX1PydxUWr1vLNj4LpL%2FqZ%2F6n38pFQaiDK98NjVXbgAMQA%2FYpPCzN8nuMeukYOV4AgHOHH4nOlCoLeXgKbuGCCVyGlrQoEUmcwp%2FmHAUOc6vByQbCobzJow2DMfO6%2BI%2F65b%2B21Eh3cqa3EYigR%2BesbwlQwoc%2B6noLX49d34hom9sUcMphM3YSU7hcVV0b8VkQOKgWRS7206ztF8HeHF8Cf0hK1S6PweNZUI8rnIW8KymvX1Nu7JZzlEaot%2Bn9eDFKsXeFjMc%2FxNQ2wUeHyms6Huj%2BMuYoIUZs%2BFiKIa2DD2yoXCBjqkAZUQ2YGfAGqiBYh3gWCHlnwUMiKC37jNyrcW%2BnqJJ0lOo2W8jxcLEXfgXysYlwwq7O2EuTpN3V3K8YPzRyebgNp2XWDA6N4WZLcvt1LkBCs5u69lDz9XtRKW6yVo4Z3CHS4Y6rdJ0JIZ4DhAO%2BkwC6Zq%2BMBJVAZ2HNeWKIBfUtmqIxWpRtKhZx18JUIereie6gxLEags8wmDpLIlZVEzwr%2FeAgVH&X-Amz-Signature=ab64f6d2d5ae60a2375ab1c6e5e4becb559b43add0153e62c4e45039ce0987cf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
