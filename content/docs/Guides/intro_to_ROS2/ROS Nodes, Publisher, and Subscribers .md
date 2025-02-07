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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHNNEHS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0zi9alPjxa9tQeUOft6TjFsWLGZ4ZjQErPPu15N53PgIhANbgJzXp7NjIdNlZpHKPLVKVhcu%2Fx%2BTC20utFziEXgpzKv8DCG4QABoMNjM3NDIzMTgzODA1IgyAR9BeWn0N%2BPhrYhwq3AMckQdCr7liN7V%2Fi64TZZ8YM42uHmT9C%2FiidAfMzVgk06a7NZAV38ekRkqMFQkIfPqin5RXML43sABeCf6cWadiyFl2q6zFY7Ge0px2nI7a%2FVhgx6S7cQYkpJFxo9Bs9mM0u6c3Ab356vYy%2BspZRgmr5nNRh793j7BK8QogvmydPqXNr8OZEV5eqqws0KqX16CAXE75PgITRY29jk2GoReycnqUC%2FJJHUIPyJy%2FXjWYHKoC4VEM41PHv%2FpXg1ceuNAVhiB8GCGRB9y05K5daqx0V1vYY63TDmEDTBwALH6VCEbh2XaO8V0GnS9PON1155GyPMKoBQUdAkVmErPYYgA3bGcrnLQvMZarh4vxqD4L7MY6gX06z5buELVUL1tv0yaE8ElUpeX3hzvnDf2aLYS1Ftg0VdGef1poc2IixxwK%2FSivOU1F9Y9Jrlmt%2BQ1R65ar74iaejbzwPNMeTH8IhBZWtInD3A5AkXho63L4tKXexT0tIFIEta5dC5zCbIIxASbU19oEG9WeA6F4MCpXk4KRkJecppnjka70ZcwvthUXc%2BUHYxYunVMTVJyb4pj1L5tRWd51vPlddGebJDF6cxJwsN16Z%2FFOCjvAVq5XdyL%2BnfEiZB5Y5yu7ZFBozCSo5a9BjqkAVCz%2FvCok7uUfA%2FoZYvkQodT5ORY6d1T4c3OS4zjbWREhtFxWuC6dSrMXirwf%2B4at9uee%2FTpKSycrXs4EZuLektbo0huV9EbaOXcg%2FS6RfjLp74lyUChkyxs7kr%2FdnMJJqdqMzOShkkjbTFEY4BneP91p75n7IRXyv5Ex0cbudG5X4CKkVMExIcPLQIooNAZmyPBasnvt3LK7HdhDu9zT%2BzqDiSa&X-Amz-Signature=442905d46de0a233959244d299551189c8760a092508b4ce26783e99695cd6e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHNNEHS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0zi9alPjxa9tQeUOft6TjFsWLGZ4ZjQErPPu15N53PgIhANbgJzXp7NjIdNlZpHKPLVKVhcu%2Fx%2BTC20utFziEXgpzKv8DCG4QABoMNjM3NDIzMTgzODA1IgyAR9BeWn0N%2BPhrYhwq3AMckQdCr7liN7V%2Fi64TZZ8YM42uHmT9C%2FiidAfMzVgk06a7NZAV38ekRkqMFQkIfPqin5RXML43sABeCf6cWadiyFl2q6zFY7Ge0px2nI7a%2FVhgx6S7cQYkpJFxo9Bs9mM0u6c3Ab356vYy%2BspZRgmr5nNRh793j7BK8QogvmydPqXNr8OZEV5eqqws0KqX16CAXE75PgITRY29jk2GoReycnqUC%2FJJHUIPyJy%2FXjWYHKoC4VEM41PHv%2FpXg1ceuNAVhiB8GCGRB9y05K5daqx0V1vYY63TDmEDTBwALH6VCEbh2XaO8V0GnS9PON1155GyPMKoBQUdAkVmErPYYgA3bGcrnLQvMZarh4vxqD4L7MY6gX06z5buELVUL1tv0yaE8ElUpeX3hzvnDf2aLYS1Ftg0VdGef1poc2IixxwK%2FSivOU1F9Y9Jrlmt%2BQ1R65ar74iaejbzwPNMeTH8IhBZWtInD3A5AkXho63L4tKXexT0tIFIEta5dC5zCbIIxASbU19oEG9WeA6F4MCpXk4KRkJecppnjka70ZcwvthUXc%2BUHYxYunVMTVJyb4pj1L5tRWd51vPlddGebJDF6cxJwsN16Z%2FFOCjvAVq5XdyL%2BnfEiZB5Y5yu7ZFBozCSo5a9BjqkAVCz%2FvCok7uUfA%2FoZYvkQodT5ORY6d1T4c3OS4zjbWREhtFxWuC6dSrMXirwf%2B4at9uee%2FTpKSycrXs4EZuLektbo0huV9EbaOXcg%2FS6RfjLp74lyUChkyxs7kr%2FdnMJJqdqMzOShkkjbTFEY4BneP91p75n7IRXyv5Ex0cbudG5X4CKkVMExIcPLQIooNAZmyPBasnvt3LK7HdhDu9zT%2BzqDiSa&X-Amz-Signature=c0e7b82c12d6c58866701c640816a59c7c1e0de9ef5d4efba87a731efa83ab89&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHNNEHS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0zi9alPjxa9tQeUOft6TjFsWLGZ4ZjQErPPu15N53PgIhANbgJzXp7NjIdNlZpHKPLVKVhcu%2Fx%2BTC20utFziEXgpzKv8DCG4QABoMNjM3NDIzMTgzODA1IgyAR9BeWn0N%2BPhrYhwq3AMckQdCr7liN7V%2Fi64TZZ8YM42uHmT9C%2FiidAfMzVgk06a7NZAV38ekRkqMFQkIfPqin5RXML43sABeCf6cWadiyFl2q6zFY7Ge0px2nI7a%2FVhgx6S7cQYkpJFxo9Bs9mM0u6c3Ab356vYy%2BspZRgmr5nNRh793j7BK8QogvmydPqXNr8OZEV5eqqws0KqX16CAXE75PgITRY29jk2GoReycnqUC%2FJJHUIPyJy%2FXjWYHKoC4VEM41PHv%2FpXg1ceuNAVhiB8GCGRB9y05K5daqx0V1vYY63TDmEDTBwALH6VCEbh2XaO8V0GnS9PON1155GyPMKoBQUdAkVmErPYYgA3bGcrnLQvMZarh4vxqD4L7MY6gX06z5buELVUL1tv0yaE8ElUpeX3hzvnDf2aLYS1Ftg0VdGef1poc2IixxwK%2FSivOU1F9Y9Jrlmt%2BQ1R65ar74iaejbzwPNMeTH8IhBZWtInD3A5AkXho63L4tKXexT0tIFIEta5dC5zCbIIxASbU19oEG9WeA6F4MCpXk4KRkJecppnjka70ZcwvthUXc%2BUHYxYunVMTVJyb4pj1L5tRWd51vPlddGebJDF6cxJwsN16Z%2FFOCjvAVq5XdyL%2BnfEiZB5Y5yu7ZFBozCSo5a9BjqkAVCz%2FvCok7uUfA%2FoZYvkQodT5ORY6d1T4c3OS4zjbWREhtFxWuC6dSrMXirwf%2B4at9uee%2FTpKSycrXs4EZuLektbo0huV9EbaOXcg%2FS6RfjLp74lyUChkyxs7kr%2FdnMJJqdqMzOShkkjbTFEY4BneP91p75n7IRXyv5Ex0cbudG5X4CKkVMExIcPLQIooNAZmyPBasnvt3LK7HdhDu9zT%2BzqDiSa&X-Amz-Signature=36512945f7d1cc32566697348b60fa20414ab628f1c70d6f647437984aea8889&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHNNEHS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0zi9alPjxa9tQeUOft6TjFsWLGZ4ZjQErPPu15N53PgIhANbgJzXp7NjIdNlZpHKPLVKVhcu%2Fx%2BTC20utFziEXgpzKv8DCG4QABoMNjM3NDIzMTgzODA1IgyAR9BeWn0N%2BPhrYhwq3AMckQdCr7liN7V%2Fi64TZZ8YM42uHmT9C%2FiidAfMzVgk06a7NZAV38ekRkqMFQkIfPqin5RXML43sABeCf6cWadiyFl2q6zFY7Ge0px2nI7a%2FVhgx6S7cQYkpJFxo9Bs9mM0u6c3Ab356vYy%2BspZRgmr5nNRh793j7BK8QogvmydPqXNr8OZEV5eqqws0KqX16CAXE75PgITRY29jk2GoReycnqUC%2FJJHUIPyJy%2FXjWYHKoC4VEM41PHv%2FpXg1ceuNAVhiB8GCGRB9y05K5daqx0V1vYY63TDmEDTBwALH6VCEbh2XaO8V0GnS9PON1155GyPMKoBQUdAkVmErPYYgA3bGcrnLQvMZarh4vxqD4L7MY6gX06z5buELVUL1tv0yaE8ElUpeX3hzvnDf2aLYS1Ftg0VdGef1poc2IixxwK%2FSivOU1F9Y9Jrlmt%2BQ1R65ar74iaejbzwPNMeTH8IhBZWtInD3A5AkXho63L4tKXexT0tIFIEta5dC5zCbIIxASbU19oEG9WeA6F4MCpXk4KRkJecppnjka70ZcwvthUXc%2BUHYxYunVMTVJyb4pj1L5tRWd51vPlddGebJDF6cxJwsN16Z%2FFOCjvAVq5XdyL%2BnfEiZB5Y5yu7ZFBozCSo5a9BjqkAVCz%2FvCok7uUfA%2FoZYvkQodT5ORY6d1T4c3OS4zjbWREhtFxWuC6dSrMXirwf%2B4at9uee%2FTpKSycrXs4EZuLektbo0huV9EbaOXcg%2FS6RfjLp74lyUChkyxs7kr%2FdnMJJqdqMzOShkkjbTFEY4BneP91p75n7IRXyv5Ex0cbudG5X4CKkVMExIcPLQIooNAZmyPBasnvt3LK7HdhDu9zT%2BzqDiSa&X-Amz-Signature=2b43f0d96dfcefdd0db377275b075e799a946bbb5b2425cc5be30ce8078aa0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHNNEHS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0zi9alPjxa9tQeUOft6TjFsWLGZ4ZjQErPPu15N53PgIhANbgJzXp7NjIdNlZpHKPLVKVhcu%2Fx%2BTC20utFziEXgpzKv8DCG4QABoMNjM3NDIzMTgzODA1IgyAR9BeWn0N%2BPhrYhwq3AMckQdCr7liN7V%2Fi64TZZ8YM42uHmT9C%2FiidAfMzVgk06a7NZAV38ekRkqMFQkIfPqin5RXML43sABeCf6cWadiyFl2q6zFY7Ge0px2nI7a%2FVhgx6S7cQYkpJFxo9Bs9mM0u6c3Ab356vYy%2BspZRgmr5nNRh793j7BK8QogvmydPqXNr8OZEV5eqqws0KqX16CAXE75PgITRY29jk2GoReycnqUC%2FJJHUIPyJy%2FXjWYHKoC4VEM41PHv%2FpXg1ceuNAVhiB8GCGRB9y05K5daqx0V1vYY63TDmEDTBwALH6VCEbh2XaO8V0GnS9PON1155GyPMKoBQUdAkVmErPYYgA3bGcrnLQvMZarh4vxqD4L7MY6gX06z5buELVUL1tv0yaE8ElUpeX3hzvnDf2aLYS1Ftg0VdGef1poc2IixxwK%2FSivOU1F9Y9Jrlmt%2BQ1R65ar74iaejbzwPNMeTH8IhBZWtInD3A5AkXho63L4tKXexT0tIFIEta5dC5zCbIIxASbU19oEG9WeA6F4MCpXk4KRkJecppnjka70ZcwvthUXc%2BUHYxYunVMTVJyb4pj1L5tRWd51vPlddGebJDF6cxJwsN16Z%2FFOCjvAVq5XdyL%2BnfEiZB5Y5yu7ZFBozCSo5a9BjqkAVCz%2FvCok7uUfA%2FoZYvkQodT5ORY6d1T4c3OS4zjbWREhtFxWuC6dSrMXirwf%2B4at9uee%2FTpKSycrXs4EZuLektbo0huV9EbaOXcg%2FS6RfjLp74lyUChkyxs7kr%2FdnMJJqdqMzOShkkjbTFEY4BneP91p75n7IRXyv5Ex0cbudG5X4CKkVMExIcPLQIooNAZmyPBasnvt3LK7HdhDu9zT%2BzqDiSa&X-Amz-Signature=059d91f87b8defe9f97ebaa0e8a6d9e5a304cd26aa01dd0b1c7cca271a00bdf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHNNEHS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0zi9alPjxa9tQeUOft6TjFsWLGZ4ZjQErPPu15N53PgIhANbgJzXp7NjIdNlZpHKPLVKVhcu%2Fx%2BTC20utFziEXgpzKv8DCG4QABoMNjM3NDIzMTgzODA1IgyAR9BeWn0N%2BPhrYhwq3AMckQdCr7liN7V%2Fi64TZZ8YM42uHmT9C%2FiidAfMzVgk06a7NZAV38ekRkqMFQkIfPqin5RXML43sABeCf6cWadiyFl2q6zFY7Ge0px2nI7a%2FVhgx6S7cQYkpJFxo9Bs9mM0u6c3Ab356vYy%2BspZRgmr5nNRh793j7BK8QogvmydPqXNr8OZEV5eqqws0KqX16CAXE75PgITRY29jk2GoReycnqUC%2FJJHUIPyJy%2FXjWYHKoC4VEM41PHv%2FpXg1ceuNAVhiB8GCGRB9y05K5daqx0V1vYY63TDmEDTBwALH6VCEbh2XaO8V0GnS9PON1155GyPMKoBQUdAkVmErPYYgA3bGcrnLQvMZarh4vxqD4L7MY6gX06z5buELVUL1tv0yaE8ElUpeX3hzvnDf2aLYS1Ftg0VdGef1poc2IixxwK%2FSivOU1F9Y9Jrlmt%2BQ1R65ar74iaejbzwPNMeTH8IhBZWtInD3A5AkXho63L4tKXexT0tIFIEta5dC5zCbIIxASbU19oEG9WeA6F4MCpXk4KRkJecppnjka70ZcwvthUXc%2BUHYxYunVMTVJyb4pj1L5tRWd51vPlddGebJDF6cxJwsN16Z%2FFOCjvAVq5XdyL%2BnfEiZB5Y5yu7ZFBozCSo5a9BjqkAVCz%2FvCok7uUfA%2FoZYvkQodT5ORY6d1T4c3OS4zjbWREhtFxWuC6dSrMXirwf%2B4at9uee%2FTpKSycrXs4EZuLektbo0huV9EbaOXcg%2FS6RfjLp74lyUChkyxs7kr%2FdnMJJqdqMzOShkkjbTFEY4BneP91p75n7IRXyv5Ex0cbudG5X4CKkVMExIcPLQIooNAZmyPBasnvt3LK7HdhDu9zT%2BzqDiSa&X-Amz-Signature=12aa93c6a5b60db1e2c8e1002573d98ee0a51cd2d0f137df34287f6c49212ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHNNEHS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0zi9alPjxa9tQeUOft6TjFsWLGZ4ZjQErPPu15N53PgIhANbgJzXp7NjIdNlZpHKPLVKVhcu%2Fx%2BTC20utFziEXgpzKv8DCG4QABoMNjM3NDIzMTgzODA1IgyAR9BeWn0N%2BPhrYhwq3AMckQdCr7liN7V%2Fi64TZZ8YM42uHmT9C%2FiidAfMzVgk06a7NZAV38ekRkqMFQkIfPqin5RXML43sABeCf6cWadiyFl2q6zFY7Ge0px2nI7a%2FVhgx6S7cQYkpJFxo9Bs9mM0u6c3Ab356vYy%2BspZRgmr5nNRh793j7BK8QogvmydPqXNr8OZEV5eqqws0KqX16CAXE75PgITRY29jk2GoReycnqUC%2FJJHUIPyJy%2FXjWYHKoC4VEM41PHv%2FpXg1ceuNAVhiB8GCGRB9y05K5daqx0V1vYY63TDmEDTBwALH6VCEbh2XaO8V0GnS9PON1155GyPMKoBQUdAkVmErPYYgA3bGcrnLQvMZarh4vxqD4L7MY6gX06z5buELVUL1tv0yaE8ElUpeX3hzvnDf2aLYS1Ftg0VdGef1poc2IixxwK%2FSivOU1F9Y9Jrlmt%2BQ1R65ar74iaejbzwPNMeTH8IhBZWtInD3A5AkXho63L4tKXexT0tIFIEta5dC5zCbIIxASbU19oEG9WeA6F4MCpXk4KRkJecppnjka70ZcwvthUXc%2BUHYxYunVMTVJyb4pj1L5tRWd51vPlddGebJDF6cxJwsN16Z%2FFOCjvAVq5XdyL%2BnfEiZB5Y5yu7ZFBozCSo5a9BjqkAVCz%2FvCok7uUfA%2FoZYvkQodT5ORY6d1T4c3OS4zjbWREhtFxWuC6dSrMXirwf%2B4at9uee%2FTpKSycrXs4EZuLektbo0huV9EbaOXcg%2FS6RfjLp74lyUChkyxs7kr%2FdnMJJqdqMzOShkkjbTFEY4BneP91p75n7IRXyv5Ex0cbudG5X4CKkVMExIcPLQIooNAZmyPBasnvt3LK7HdhDu9zT%2BzqDiSa&X-Amz-Signature=37dbf406f410fe763e4e771d5e3f5a36748b8156a86f054bcec86cd001192da2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHNNEHS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T050812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQD0zi9alPjxa9tQeUOft6TjFsWLGZ4ZjQErPPu15N53PgIhANbgJzXp7NjIdNlZpHKPLVKVhcu%2Fx%2BTC20utFziEXgpzKv8DCG4QABoMNjM3NDIzMTgzODA1IgyAR9BeWn0N%2BPhrYhwq3AMckQdCr7liN7V%2Fi64TZZ8YM42uHmT9C%2FiidAfMzVgk06a7NZAV38ekRkqMFQkIfPqin5RXML43sABeCf6cWadiyFl2q6zFY7Ge0px2nI7a%2FVhgx6S7cQYkpJFxo9Bs9mM0u6c3Ab356vYy%2BspZRgmr5nNRh793j7BK8QogvmydPqXNr8OZEV5eqqws0KqX16CAXE75PgITRY29jk2GoReycnqUC%2FJJHUIPyJy%2FXjWYHKoC4VEM41PHv%2FpXg1ceuNAVhiB8GCGRB9y05K5daqx0V1vYY63TDmEDTBwALH6VCEbh2XaO8V0GnS9PON1155GyPMKoBQUdAkVmErPYYgA3bGcrnLQvMZarh4vxqD4L7MY6gX06z5buELVUL1tv0yaE8ElUpeX3hzvnDf2aLYS1Ftg0VdGef1poc2IixxwK%2FSivOU1F9Y9Jrlmt%2BQ1R65ar74iaejbzwPNMeTH8IhBZWtInD3A5AkXho63L4tKXexT0tIFIEta5dC5zCbIIxASbU19oEG9WeA6F4MCpXk4KRkJecppnjka70ZcwvthUXc%2BUHYxYunVMTVJyb4pj1L5tRWd51vPlddGebJDF6cxJwsN16Z%2FFOCjvAVq5XdyL%2BnfEiZB5Y5yu7ZFBozCSo5a9BjqkAVCz%2FvCok7uUfA%2FoZYvkQodT5ORY6d1T4c3OS4zjbWREhtFxWuC6dSrMXirwf%2B4at9uee%2FTpKSycrXs4EZuLektbo0huV9EbaOXcg%2FS6RfjLp74lyUChkyxs7kr%2FdnMJJqdqMzOShkkjbTFEY4BneP91p75n7IRXyv5Ex0cbudG5X4CKkVMExIcPLQIooNAZmyPBasnvt3LK7HdhDu9zT%2BzqDiSa&X-Amz-Signature=c4b407a14eb84f320274d6b12270e312e6537e07af5ccb67ae122a761f82d3d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
