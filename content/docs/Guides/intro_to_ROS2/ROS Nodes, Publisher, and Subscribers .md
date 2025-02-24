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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY23ODQJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAQTKFghnZnUcjY6QfJT5EPzGChnmB2VnQpr2G9AQvmgIhAMRO4U8l%2F08lM6CNz6m46Lovw9Xqaf6irWoXc%2Fxw3%2B6SKv8DCDQQABoMNjM3NDIzMTgzODA1Igxj46Md%2BQc2xTptaSEq3AMsULq%2B0etVF6dVzEmCUNmlv%2Fg94eVh5Fx1QIeUrgE7wvEdNFpNnM5Yd2hnKTe3IjPJ1NPtvkCUQ5wtsoDj1drCdSeDGBWJnJV%2BOKiGDeB3MrIpqJJ6ba9W2YV3XhKreHG%2ByErUl1xnekBf3yMK8OvAWSRHeeDIveEfZgUDb4Qq8aUz5Us0Eikp1AzRAp7MrywtFafjkdFGLGKw3QWZFGmPQZ%2BUKZkyMOFFAaeg1hjdphFL2tZxOCsDTy7raAUrzFbmTWfeCC%2FoExpCBhU9yNgaek8OlVF%2BLMYfzkCUuMsTFMQdPtosBQVTykmKumrdmIFDLCKQ77HN7yuw3uuTRkwMXRe1AOfdFQ3pvMz9SDWTO8WE2Y%2B4MZQwKoVSi7cq0D6opnns7S3a0bTqQVtYBi362qEaoiUecYkD4PjRH4Qxy4q1BxkEZB5GsHlMhJctIjuiLDJMUMCunkV21FH5IiNPgwEQehmtZpGm7Ks9clGOq5ZSogEXFb2Twxkhsv%2FmuqtwdUJylviCvAEzfq%2BV8KRHFMJcXAGcG42pTDpzu%2FrvC6vJ6Z0UF3v4NLr8uQZJlYiTgoFS1qkBdTqeGVhrx93hk0mHEW6jQH0NKsF7%2Fv%2B%2Fka9TFpWunwXJFZudLjCb%2FfK9BjqkAfFlfHISOH8aAToDnMMDljVLYQ5FItzICOm0YMhXOfCuDaeT0mFWYt4HLlqTCfACMo3brAS8UoTEkjwk00iss3zEyuLVWQVCY5UK%2FdXn6iwYXcAsDZ0BEWPnlFtWX%2BGp0ga2dO1xITc%2Fsw47f44zFITArhHe6omI53jL%2BBVGg0VUI9%2BqAo%2BBOL1iGV3tXV7Gz65CcdeYfDXVe3j7g%2Fc2L6%2Bymn6A&X-Amz-Signature=fb4d113fd0f6e5599699ad554ff9cfdd504d470c1b0b7b6d0677608e5d7303c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY23ODQJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAQTKFghnZnUcjY6QfJT5EPzGChnmB2VnQpr2G9AQvmgIhAMRO4U8l%2F08lM6CNz6m46Lovw9Xqaf6irWoXc%2Fxw3%2B6SKv8DCDQQABoMNjM3NDIzMTgzODA1Igxj46Md%2BQc2xTptaSEq3AMsULq%2B0etVF6dVzEmCUNmlv%2Fg94eVh5Fx1QIeUrgE7wvEdNFpNnM5Yd2hnKTe3IjPJ1NPtvkCUQ5wtsoDj1drCdSeDGBWJnJV%2BOKiGDeB3MrIpqJJ6ba9W2YV3XhKreHG%2ByErUl1xnekBf3yMK8OvAWSRHeeDIveEfZgUDb4Qq8aUz5Us0Eikp1AzRAp7MrywtFafjkdFGLGKw3QWZFGmPQZ%2BUKZkyMOFFAaeg1hjdphFL2tZxOCsDTy7raAUrzFbmTWfeCC%2FoExpCBhU9yNgaek8OlVF%2BLMYfzkCUuMsTFMQdPtosBQVTykmKumrdmIFDLCKQ77HN7yuw3uuTRkwMXRe1AOfdFQ3pvMz9SDWTO8WE2Y%2B4MZQwKoVSi7cq0D6opnns7S3a0bTqQVtYBi362qEaoiUecYkD4PjRH4Qxy4q1BxkEZB5GsHlMhJctIjuiLDJMUMCunkV21FH5IiNPgwEQehmtZpGm7Ks9clGOq5ZSogEXFb2Twxkhsv%2FmuqtwdUJylviCvAEzfq%2BV8KRHFMJcXAGcG42pTDpzu%2FrvC6vJ6Z0UF3v4NLr8uQZJlYiTgoFS1qkBdTqeGVhrx93hk0mHEW6jQH0NKsF7%2Fv%2B%2Fka9TFpWunwXJFZudLjCb%2FfK9BjqkAfFlfHISOH8aAToDnMMDljVLYQ5FItzICOm0YMhXOfCuDaeT0mFWYt4HLlqTCfACMo3brAS8UoTEkjwk00iss3zEyuLVWQVCY5UK%2FdXn6iwYXcAsDZ0BEWPnlFtWX%2BGp0ga2dO1xITc%2Fsw47f44zFITArhHe6omI53jL%2BBVGg0VUI9%2BqAo%2BBOL1iGV3tXV7Gz65CcdeYfDXVe3j7g%2Fc2L6%2Bymn6A&X-Amz-Signature=26bcc6e2ba6fcffbf0a5624f0f71e91a19aa9275184996de0ee8f434d7f37572&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY23ODQJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAQTKFghnZnUcjY6QfJT5EPzGChnmB2VnQpr2G9AQvmgIhAMRO4U8l%2F08lM6CNz6m46Lovw9Xqaf6irWoXc%2Fxw3%2B6SKv8DCDQQABoMNjM3NDIzMTgzODA1Igxj46Md%2BQc2xTptaSEq3AMsULq%2B0etVF6dVzEmCUNmlv%2Fg94eVh5Fx1QIeUrgE7wvEdNFpNnM5Yd2hnKTe3IjPJ1NPtvkCUQ5wtsoDj1drCdSeDGBWJnJV%2BOKiGDeB3MrIpqJJ6ba9W2YV3XhKreHG%2ByErUl1xnekBf3yMK8OvAWSRHeeDIveEfZgUDb4Qq8aUz5Us0Eikp1AzRAp7MrywtFafjkdFGLGKw3QWZFGmPQZ%2BUKZkyMOFFAaeg1hjdphFL2tZxOCsDTy7raAUrzFbmTWfeCC%2FoExpCBhU9yNgaek8OlVF%2BLMYfzkCUuMsTFMQdPtosBQVTykmKumrdmIFDLCKQ77HN7yuw3uuTRkwMXRe1AOfdFQ3pvMz9SDWTO8WE2Y%2B4MZQwKoVSi7cq0D6opnns7S3a0bTqQVtYBi362qEaoiUecYkD4PjRH4Qxy4q1BxkEZB5GsHlMhJctIjuiLDJMUMCunkV21FH5IiNPgwEQehmtZpGm7Ks9clGOq5ZSogEXFb2Twxkhsv%2FmuqtwdUJylviCvAEzfq%2BV8KRHFMJcXAGcG42pTDpzu%2FrvC6vJ6Z0UF3v4NLr8uQZJlYiTgoFS1qkBdTqeGVhrx93hk0mHEW6jQH0NKsF7%2Fv%2B%2Fka9TFpWunwXJFZudLjCb%2FfK9BjqkAfFlfHISOH8aAToDnMMDljVLYQ5FItzICOm0YMhXOfCuDaeT0mFWYt4HLlqTCfACMo3brAS8UoTEkjwk00iss3zEyuLVWQVCY5UK%2FdXn6iwYXcAsDZ0BEWPnlFtWX%2BGp0ga2dO1xITc%2Fsw47f44zFITArhHe6omI53jL%2BBVGg0VUI9%2BqAo%2BBOL1iGV3tXV7Gz65CcdeYfDXVe3j7g%2Fc2L6%2Bymn6A&X-Amz-Signature=56aecb9b4ea31c4e0de8d5cb727f76e064cabfd67a441ac8862ea81e273e1e46&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY23ODQJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAQTKFghnZnUcjY6QfJT5EPzGChnmB2VnQpr2G9AQvmgIhAMRO4U8l%2F08lM6CNz6m46Lovw9Xqaf6irWoXc%2Fxw3%2B6SKv8DCDQQABoMNjM3NDIzMTgzODA1Igxj46Md%2BQc2xTptaSEq3AMsULq%2B0etVF6dVzEmCUNmlv%2Fg94eVh5Fx1QIeUrgE7wvEdNFpNnM5Yd2hnKTe3IjPJ1NPtvkCUQ5wtsoDj1drCdSeDGBWJnJV%2BOKiGDeB3MrIpqJJ6ba9W2YV3XhKreHG%2ByErUl1xnekBf3yMK8OvAWSRHeeDIveEfZgUDb4Qq8aUz5Us0Eikp1AzRAp7MrywtFafjkdFGLGKw3QWZFGmPQZ%2BUKZkyMOFFAaeg1hjdphFL2tZxOCsDTy7raAUrzFbmTWfeCC%2FoExpCBhU9yNgaek8OlVF%2BLMYfzkCUuMsTFMQdPtosBQVTykmKumrdmIFDLCKQ77HN7yuw3uuTRkwMXRe1AOfdFQ3pvMz9SDWTO8WE2Y%2B4MZQwKoVSi7cq0D6opnns7S3a0bTqQVtYBi362qEaoiUecYkD4PjRH4Qxy4q1BxkEZB5GsHlMhJctIjuiLDJMUMCunkV21FH5IiNPgwEQehmtZpGm7Ks9clGOq5ZSogEXFb2Twxkhsv%2FmuqtwdUJylviCvAEzfq%2BV8KRHFMJcXAGcG42pTDpzu%2FrvC6vJ6Z0UF3v4NLr8uQZJlYiTgoFS1qkBdTqeGVhrx93hk0mHEW6jQH0NKsF7%2Fv%2B%2Fka9TFpWunwXJFZudLjCb%2FfK9BjqkAfFlfHISOH8aAToDnMMDljVLYQ5FItzICOm0YMhXOfCuDaeT0mFWYt4HLlqTCfACMo3brAS8UoTEkjwk00iss3zEyuLVWQVCY5UK%2FdXn6iwYXcAsDZ0BEWPnlFtWX%2BGp0ga2dO1xITc%2Fsw47f44zFITArhHe6omI53jL%2BBVGg0VUI9%2BqAo%2BBOL1iGV3tXV7Gz65CcdeYfDXVe3j7g%2Fc2L6%2Bymn6A&X-Amz-Signature=d7e73af37120422b5a187df61cc2924655648cf7cbbdd3f9156220bbac4cdf08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY23ODQJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAQTKFghnZnUcjY6QfJT5EPzGChnmB2VnQpr2G9AQvmgIhAMRO4U8l%2F08lM6CNz6m46Lovw9Xqaf6irWoXc%2Fxw3%2B6SKv8DCDQQABoMNjM3NDIzMTgzODA1Igxj46Md%2BQc2xTptaSEq3AMsULq%2B0etVF6dVzEmCUNmlv%2Fg94eVh5Fx1QIeUrgE7wvEdNFpNnM5Yd2hnKTe3IjPJ1NPtvkCUQ5wtsoDj1drCdSeDGBWJnJV%2BOKiGDeB3MrIpqJJ6ba9W2YV3XhKreHG%2ByErUl1xnekBf3yMK8OvAWSRHeeDIveEfZgUDb4Qq8aUz5Us0Eikp1AzRAp7MrywtFafjkdFGLGKw3QWZFGmPQZ%2BUKZkyMOFFAaeg1hjdphFL2tZxOCsDTy7raAUrzFbmTWfeCC%2FoExpCBhU9yNgaek8OlVF%2BLMYfzkCUuMsTFMQdPtosBQVTykmKumrdmIFDLCKQ77HN7yuw3uuTRkwMXRe1AOfdFQ3pvMz9SDWTO8WE2Y%2B4MZQwKoVSi7cq0D6opnns7S3a0bTqQVtYBi362qEaoiUecYkD4PjRH4Qxy4q1BxkEZB5GsHlMhJctIjuiLDJMUMCunkV21FH5IiNPgwEQehmtZpGm7Ks9clGOq5ZSogEXFb2Twxkhsv%2FmuqtwdUJylviCvAEzfq%2BV8KRHFMJcXAGcG42pTDpzu%2FrvC6vJ6Z0UF3v4NLr8uQZJlYiTgoFS1qkBdTqeGVhrx93hk0mHEW6jQH0NKsF7%2Fv%2B%2Fka9TFpWunwXJFZudLjCb%2FfK9BjqkAfFlfHISOH8aAToDnMMDljVLYQ5FItzICOm0YMhXOfCuDaeT0mFWYt4HLlqTCfACMo3brAS8UoTEkjwk00iss3zEyuLVWQVCY5UK%2FdXn6iwYXcAsDZ0BEWPnlFtWX%2BGp0ga2dO1xITc%2Fsw47f44zFITArhHe6omI53jL%2BBVGg0VUI9%2BqAo%2BBOL1iGV3tXV7Gz65CcdeYfDXVe3j7g%2Fc2L6%2Bymn6A&X-Amz-Signature=6aea9aa3909e4a197ff0b648fa73b92ea8afc2a3f28d6c1b6df5cbc56920190e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY23ODQJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAQTKFghnZnUcjY6QfJT5EPzGChnmB2VnQpr2G9AQvmgIhAMRO4U8l%2F08lM6CNz6m46Lovw9Xqaf6irWoXc%2Fxw3%2B6SKv8DCDQQABoMNjM3NDIzMTgzODA1Igxj46Md%2BQc2xTptaSEq3AMsULq%2B0etVF6dVzEmCUNmlv%2Fg94eVh5Fx1QIeUrgE7wvEdNFpNnM5Yd2hnKTe3IjPJ1NPtvkCUQ5wtsoDj1drCdSeDGBWJnJV%2BOKiGDeB3MrIpqJJ6ba9W2YV3XhKreHG%2ByErUl1xnekBf3yMK8OvAWSRHeeDIveEfZgUDb4Qq8aUz5Us0Eikp1AzRAp7MrywtFafjkdFGLGKw3QWZFGmPQZ%2BUKZkyMOFFAaeg1hjdphFL2tZxOCsDTy7raAUrzFbmTWfeCC%2FoExpCBhU9yNgaek8OlVF%2BLMYfzkCUuMsTFMQdPtosBQVTykmKumrdmIFDLCKQ77HN7yuw3uuTRkwMXRe1AOfdFQ3pvMz9SDWTO8WE2Y%2B4MZQwKoVSi7cq0D6opnns7S3a0bTqQVtYBi362qEaoiUecYkD4PjRH4Qxy4q1BxkEZB5GsHlMhJctIjuiLDJMUMCunkV21FH5IiNPgwEQehmtZpGm7Ks9clGOq5ZSogEXFb2Twxkhsv%2FmuqtwdUJylviCvAEzfq%2BV8KRHFMJcXAGcG42pTDpzu%2FrvC6vJ6Z0UF3v4NLr8uQZJlYiTgoFS1qkBdTqeGVhrx93hk0mHEW6jQH0NKsF7%2Fv%2B%2Fka9TFpWunwXJFZudLjCb%2FfK9BjqkAfFlfHISOH8aAToDnMMDljVLYQ5FItzICOm0YMhXOfCuDaeT0mFWYt4HLlqTCfACMo3brAS8UoTEkjwk00iss3zEyuLVWQVCY5UK%2FdXn6iwYXcAsDZ0BEWPnlFtWX%2BGp0ga2dO1xITc%2Fsw47f44zFITArhHe6omI53jL%2BBVGg0VUI9%2BqAo%2BBOL1iGV3tXV7Gz65CcdeYfDXVe3j7g%2Fc2L6%2Bymn6A&X-Amz-Signature=319709aa6e5b80306fe94a37b53ac383e542ba27dc0dead27102f9fe62f11067&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY23ODQJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAQTKFghnZnUcjY6QfJT5EPzGChnmB2VnQpr2G9AQvmgIhAMRO4U8l%2F08lM6CNz6m46Lovw9Xqaf6irWoXc%2Fxw3%2B6SKv8DCDQQABoMNjM3NDIzMTgzODA1Igxj46Md%2BQc2xTptaSEq3AMsULq%2B0etVF6dVzEmCUNmlv%2Fg94eVh5Fx1QIeUrgE7wvEdNFpNnM5Yd2hnKTe3IjPJ1NPtvkCUQ5wtsoDj1drCdSeDGBWJnJV%2BOKiGDeB3MrIpqJJ6ba9W2YV3XhKreHG%2ByErUl1xnekBf3yMK8OvAWSRHeeDIveEfZgUDb4Qq8aUz5Us0Eikp1AzRAp7MrywtFafjkdFGLGKw3QWZFGmPQZ%2BUKZkyMOFFAaeg1hjdphFL2tZxOCsDTy7raAUrzFbmTWfeCC%2FoExpCBhU9yNgaek8OlVF%2BLMYfzkCUuMsTFMQdPtosBQVTykmKumrdmIFDLCKQ77HN7yuw3uuTRkwMXRe1AOfdFQ3pvMz9SDWTO8WE2Y%2B4MZQwKoVSi7cq0D6opnns7S3a0bTqQVtYBi362qEaoiUecYkD4PjRH4Qxy4q1BxkEZB5GsHlMhJctIjuiLDJMUMCunkV21FH5IiNPgwEQehmtZpGm7Ks9clGOq5ZSogEXFb2Twxkhsv%2FmuqtwdUJylviCvAEzfq%2BV8KRHFMJcXAGcG42pTDpzu%2FrvC6vJ6Z0UF3v4NLr8uQZJlYiTgoFS1qkBdTqeGVhrx93hk0mHEW6jQH0NKsF7%2Fv%2B%2Fka9TFpWunwXJFZudLjCb%2FfK9BjqkAfFlfHISOH8aAToDnMMDljVLYQ5FItzICOm0YMhXOfCuDaeT0mFWYt4HLlqTCfACMo3brAS8UoTEkjwk00iss3zEyuLVWQVCY5UK%2FdXn6iwYXcAsDZ0BEWPnlFtWX%2BGp0ga2dO1xITc%2Fsw47f44zFITArhHe6omI53jL%2BBVGg0VUI9%2BqAo%2BBOL1iGV3tXV7Gz65CcdeYfDXVe3j7g%2Fc2L6%2Bymn6A&X-Amz-Signature=9fab376fce828cd63c9d490357f96618b9c9dcf691dcd9a48a471bdfbdc7827d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY23ODQJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAQTKFghnZnUcjY6QfJT5EPzGChnmB2VnQpr2G9AQvmgIhAMRO4U8l%2F08lM6CNz6m46Lovw9Xqaf6irWoXc%2Fxw3%2B6SKv8DCDQQABoMNjM3NDIzMTgzODA1Igxj46Md%2BQc2xTptaSEq3AMsULq%2B0etVF6dVzEmCUNmlv%2Fg94eVh5Fx1QIeUrgE7wvEdNFpNnM5Yd2hnKTe3IjPJ1NPtvkCUQ5wtsoDj1drCdSeDGBWJnJV%2BOKiGDeB3MrIpqJJ6ba9W2YV3XhKreHG%2ByErUl1xnekBf3yMK8OvAWSRHeeDIveEfZgUDb4Qq8aUz5Us0Eikp1AzRAp7MrywtFafjkdFGLGKw3QWZFGmPQZ%2BUKZkyMOFFAaeg1hjdphFL2tZxOCsDTy7raAUrzFbmTWfeCC%2FoExpCBhU9yNgaek8OlVF%2BLMYfzkCUuMsTFMQdPtosBQVTykmKumrdmIFDLCKQ77HN7yuw3uuTRkwMXRe1AOfdFQ3pvMz9SDWTO8WE2Y%2B4MZQwKoVSi7cq0D6opnns7S3a0bTqQVtYBi362qEaoiUecYkD4PjRH4Qxy4q1BxkEZB5GsHlMhJctIjuiLDJMUMCunkV21FH5IiNPgwEQehmtZpGm7Ks9clGOq5ZSogEXFb2Twxkhsv%2FmuqtwdUJylviCvAEzfq%2BV8KRHFMJcXAGcG42pTDpzu%2FrvC6vJ6Z0UF3v4NLr8uQZJlYiTgoFS1qkBdTqeGVhrx93hk0mHEW6jQH0NKsF7%2Fv%2B%2Fka9TFpWunwXJFZudLjCb%2FfK9BjqkAfFlfHISOH8aAToDnMMDljVLYQ5FItzICOm0YMhXOfCuDaeT0mFWYt4HLlqTCfACMo3brAS8UoTEkjwk00iss3zEyuLVWQVCY5UK%2FdXn6iwYXcAsDZ0BEWPnlFtWX%2BGp0ga2dO1xITc%2Fsw47f44zFITArhHe6omI53jL%2BBVGg0VUI9%2BqAo%2BBOL1iGV3tXV7Gz65CcdeYfDXVe3j7g%2Fc2L6%2Bymn6A&X-Amz-Signature=d6bb2179ae98ee5deeafd01f98046c34b04bb5ae4210cfbfdd03dbff1890dd24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
