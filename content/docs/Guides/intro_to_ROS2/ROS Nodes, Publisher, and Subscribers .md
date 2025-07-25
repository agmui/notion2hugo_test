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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U557NJ7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDCugJYWgdv5LCBCfLp7%2F8OadqaElLBEBw7qPOfxbVI6gIhAN67X669%2FZ5Lq%2FyLHG9u8o5sVi%2BFyqfbU5Jr9SpELMbZKv8DCEEQABoMNjM3NDIzMTgzODA1IgxnUji0q7jICthIGsUq3ANqExZXfVSUFDUQP4Y5WCra%2BRdp07oQFSXJRPvMBlzew4Qt3jSz6Xf0clXGoN7uiSIyWwE6%2FKpFpJZ4B2MAds1V6S4fh4%2BUlT6d4W40gQVV%2FA2ml3PJ67gG1zTy3sfOSVG%2FH0usxIFrJrUTv2d6efztokeUM0DenvariaQeV4csHdqZs9OBmCD%2B39%2BSilLIWSYOcYIXAoazTl5lfwoal2LffsWHAWN3HWll1ZQVVRVckI0YViQUVh5CTjxRRVKRxBs%2BJJnFf0vOn2RC4HREoTwFrJHn%2BSytDhXmNd8ULvt8UjEiGSFo%2BVpk01lxY58vYLAF3csWfiWl9dDPqaz7iTRB%2FpmYUhjT0aud5qXUNUkX2eizSK3%2BZ8Z7a0OxHrm%2Bf4%2BP2N%2BAb0hG1BV71671bvJw5IXX2OcIFdL%2Ff9Vo%2BXV4876vuKlmaljz6g99mJr%2BqGoGzL1naQFZVvimJDVkL5TMJpohYKijrPdfRV3m%2B%2FZORAYW%2BZjertLiCC3Ox50fNB9brg6Tfq3Y3NS2%2F6fgwvdKQH%2FpUshVXwdoR2SNQHBhdaOkVS9rfgA%2B9s2wFzCahIkRaBB1rcgBVug2LakC1UaoFwGxEzkT4ihHSb%2BoZvxMF47AiusjKvs3%2FjOLqjC96IzEBjqkAeuoYGpS6qv7%2BfI5q3ssi%2BzTbe6cqBtIBNcGiPyM9lR17QP5q6cXHyqng7MCadht974pwtPjaokRmaUFV1IrJdoD9vpeKUQY%2FarPt92MdMmu78pqkW6xHpPM8ffj6xsbe76mlAu5JfnxykGbowVDkF43dMT%2FXoAfHGymU844SE9SyGuSjTaLHZRowQAn31h3CK%2Bm7p9UloNWuytlD4GQZYLiiW%2Bg&X-Amz-Signature=d89d9147e3f3fffe88cd8c28a5899be34dbabae5911a43314364cecc754af686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U557NJ7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDCugJYWgdv5LCBCfLp7%2F8OadqaElLBEBw7qPOfxbVI6gIhAN67X669%2FZ5Lq%2FyLHG9u8o5sVi%2BFyqfbU5Jr9SpELMbZKv8DCEEQABoMNjM3NDIzMTgzODA1IgxnUji0q7jICthIGsUq3ANqExZXfVSUFDUQP4Y5WCra%2BRdp07oQFSXJRPvMBlzew4Qt3jSz6Xf0clXGoN7uiSIyWwE6%2FKpFpJZ4B2MAds1V6S4fh4%2BUlT6d4W40gQVV%2FA2ml3PJ67gG1zTy3sfOSVG%2FH0usxIFrJrUTv2d6efztokeUM0DenvariaQeV4csHdqZs9OBmCD%2B39%2BSilLIWSYOcYIXAoazTl5lfwoal2LffsWHAWN3HWll1ZQVVRVckI0YViQUVh5CTjxRRVKRxBs%2BJJnFf0vOn2RC4HREoTwFrJHn%2BSytDhXmNd8ULvt8UjEiGSFo%2BVpk01lxY58vYLAF3csWfiWl9dDPqaz7iTRB%2FpmYUhjT0aud5qXUNUkX2eizSK3%2BZ8Z7a0OxHrm%2Bf4%2BP2N%2BAb0hG1BV71671bvJw5IXX2OcIFdL%2Ff9Vo%2BXV4876vuKlmaljz6g99mJr%2BqGoGzL1naQFZVvimJDVkL5TMJpohYKijrPdfRV3m%2B%2FZORAYW%2BZjertLiCC3Ox50fNB9brg6Tfq3Y3NS2%2F6fgwvdKQH%2FpUshVXwdoR2SNQHBhdaOkVS9rfgA%2B9s2wFzCahIkRaBB1rcgBVug2LakC1UaoFwGxEzkT4ihHSb%2BoZvxMF47AiusjKvs3%2FjOLqjC96IzEBjqkAeuoYGpS6qv7%2BfI5q3ssi%2BzTbe6cqBtIBNcGiPyM9lR17QP5q6cXHyqng7MCadht974pwtPjaokRmaUFV1IrJdoD9vpeKUQY%2FarPt92MdMmu78pqkW6xHpPM8ffj6xsbe76mlAu5JfnxykGbowVDkF43dMT%2FXoAfHGymU844SE9SyGuSjTaLHZRowQAn31h3CK%2Bm7p9UloNWuytlD4GQZYLiiW%2Bg&X-Amz-Signature=b4dc0eb27c518eb48b53ed126778da7cf8906745e83d4bec422f82b2b8d5e195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U557NJ7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDCugJYWgdv5LCBCfLp7%2F8OadqaElLBEBw7qPOfxbVI6gIhAN67X669%2FZ5Lq%2FyLHG9u8o5sVi%2BFyqfbU5Jr9SpELMbZKv8DCEEQABoMNjM3NDIzMTgzODA1IgxnUji0q7jICthIGsUq3ANqExZXfVSUFDUQP4Y5WCra%2BRdp07oQFSXJRPvMBlzew4Qt3jSz6Xf0clXGoN7uiSIyWwE6%2FKpFpJZ4B2MAds1V6S4fh4%2BUlT6d4W40gQVV%2FA2ml3PJ67gG1zTy3sfOSVG%2FH0usxIFrJrUTv2d6efztokeUM0DenvariaQeV4csHdqZs9OBmCD%2B39%2BSilLIWSYOcYIXAoazTl5lfwoal2LffsWHAWN3HWll1ZQVVRVckI0YViQUVh5CTjxRRVKRxBs%2BJJnFf0vOn2RC4HREoTwFrJHn%2BSytDhXmNd8ULvt8UjEiGSFo%2BVpk01lxY58vYLAF3csWfiWl9dDPqaz7iTRB%2FpmYUhjT0aud5qXUNUkX2eizSK3%2BZ8Z7a0OxHrm%2Bf4%2BP2N%2BAb0hG1BV71671bvJw5IXX2OcIFdL%2Ff9Vo%2BXV4876vuKlmaljz6g99mJr%2BqGoGzL1naQFZVvimJDVkL5TMJpohYKijrPdfRV3m%2B%2FZORAYW%2BZjertLiCC3Ox50fNB9brg6Tfq3Y3NS2%2F6fgwvdKQH%2FpUshVXwdoR2SNQHBhdaOkVS9rfgA%2B9s2wFzCahIkRaBB1rcgBVug2LakC1UaoFwGxEzkT4ihHSb%2BoZvxMF47AiusjKvs3%2FjOLqjC96IzEBjqkAeuoYGpS6qv7%2BfI5q3ssi%2BzTbe6cqBtIBNcGiPyM9lR17QP5q6cXHyqng7MCadht974pwtPjaokRmaUFV1IrJdoD9vpeKUQY%2FarPt92MdMmu78pqkW6xHpPM8ffj6xsbe76mlAu5JfnxykGbowVDkF43dMT%2FXoAfHGymU844SE9SyGuSjTaLHZRowQAn31h3CK%2Bm7p9UloNWuytlD4GQZYLiiW%2Bg&X-Amz-Signature=ef91b52247a907aeda7c041e1760768137343cd4287b348f445454748c3a88ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U557NJ7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDCugJYWgdv5LCBCfLp7%2F8OadqaElLBEBw7qPOfxbVI6gIhAN67X669%2FZ5Lq%2FyLHG9u8o5sVi%2BFyqfbU5Jr9SpELMbZKv8DCEEQABoMNjM3NDIzMTgzODA1IgxnUji0q7jICthIGsUq3ANqExZXfVSUFDUQP4Y5WCra%2BRdp07oQFSXJRPvMBlzew4Qt3jSz6Xf0clXGoN7uiSIyWwE6%2FKpFpJZ4B2MAds1V6S4fh4%2BUlT6d4W40gQVV%2FA2ml3PJ67gG1zTy3sfOSVG%2FH0usxIFrJrUTv2d6efztokeUM0DenvariaQeV4csHdqZs9OBmCD%2B39%2BSilLIWSYOcYIXAoazTl5lfwoal2LffsWHAWN3HWll1ZQVVRVckI0YViQUVh5CTjxRRVKRxBs%2BJJnFf0vOn2RC4HREoTwFrJHn%2BSytDhXmNd8ULvt8UjEiGSFo%2BVpk01lxY58vYLAF3csWfiWl9dDPqaz7iTRB%2FpmYUhjT0aud5qXUNUkX2eizSK3%2BZ8Z7a0OxHrm%2Bf4%2BP2N%2BAb0hG1BV71671bvJw5IXX2OcIFdL%2Ff9Vo%2BXV4876vuKlmaljz6g99mJr%2BqGoGzL1naQFZVvimJDVkL5TMJpohYKijrPdfRV3m%2B%2FZORAYW%2BZjertLiCC3Ox50fNB9brg6Tfq3Y3NS2%2F6fgwvdKQH%2FpUshVXwdoR2SNQHBhdaOkVS9rfgA%2B9s2wFzCahIkRaBB1rcgBVug2LakC1UaoFwGxEzkT4ihHSb%2BoZvxMF47AiusjKvs3%2FjOLqjC96IzEBjqkAeuoYGpS6qv7%2BfI5q3ssi%2BzTbe6cqBtIBNcGiPyM9lR17QP5q6cXHyqng7MCadht974pwtPjaokRmaUFV1IrJdoD9vpeKUQY%2FarPt92MdMmu78pqkW6xHpPM8ffj6xsbe76mlAu5JfnxykGbowVDkF43dMT%2FXoAfHGymU844SE9SyGuSjTaLHZRowQAn31h3CK%2Bm7p9UloNWuytlD4GQZYLiiW%2Bg&X-Amz-Signature=ce37c94dee95307558834543f3109e2d5c75ed033eb020235d4f97a3ee3e6d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U557NJ7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDCugJYWgdv5LCBCfLp7%2F8OadqaElLBEBw7qPOfxbVI6gIhAN67X669%2FZ5Lq%2FyLHG9u8o5sVi%2BFyqfbU5Jr9SpELMbZKv8DCEEQABoMNjM3NDIzMTgzODA1IgxnUji0q7jICthIGsUq3ANqExZXfVSUFDUQP4Y5WCra%2BRdp07oQFSXJRPvMBlzew4Qt3jSz6Xf0clXGoN7uiSIyWwE6%2FKpFpJZ4B2MAds1V6S4fh4%2BUlT6d4W40gQVV%2FA2ml3PJ67gG1zTy3sfOSVG%2FH0usxIFrJrUTv2d6efztokeUM0DenvariaQeV4csHdqZs9OBmCD%2B39%2BSilLIWSYOcYIXAoazTl5lfwoal2LffsWHAWN3HWll1ZQVVRVckI0YViQUVh5CTjxRRVKRxBs%2BJJnFf0vOn2RC4HREoTwFrJHn%2BSytDhXmNd8ULvt8UjEiGSFo%2BVpk01lxY58vYLAF3csWfiWl9dDPqaz7iTRB%2FpmYUhjT0aud5qXUNUkX2eizSK3%2BZ8Z7a0OxHrm%2Bf4%2BP2N%2BAb0hG1BV71671bvJw5IXX2OcIFdL%2Ff9Vo%2BXV4876vuKlmaljz6g99mJr%2BqGoGzL1naQFZVvimJDVkL5TMJpohYKijrPdfRV3m%2B%2FZORAYW%2BZjertLiCC3Ox50fNB9brg6Tfq3Y3NS2%2F6fgwvdKQH%2FpUshVXwdoR2SNQHBhdaOkVS9rfgA%2B9s2wFzCahIkRaBB1rcgBVug2LakC1UaoFwGxEzkT4ihHSb%2BoZvxMF47AiusjKvs3%2FjOLqjC96IzEBjqkAeuoYGpS6qv7%2BfI5q3ssi%2BzTbe6cqBtIBNcGiPyM9lR17QP5q6cXHyqng7MCadht974pwtPjaokRmaUFV1IrJdoD9vpeKUQY%2FarPt92MdMmu78pqkW6xHpPM8ffj6xsbe76mlAu5JfnxykGbowVDkF43dMT%2FXoAfHGymU844SE9SyGuSjTaLHZRowQAn31h3CK%2Bm7p9UloNWuytlD4GQZYLiiW%2Bg&X-Amz-Signature=50ec260053cd146ca4c3b0f982eb50aabc522d6c58b701c7a3fc8365b80b9bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U557NJ7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDCugJYWgdv5LCBCfLp7%2F8OadqaElLBEBw7qPOfxbVI6gIhAN67X669%2FZ5Lq%2FyLHG9u8o5sVi%2BFyqfbU5Jr9SpELMbZKv8DCEEQABoMNjM3NDIzMTgzODA1IgxnUji0q7jICthIGsUq3ANqExZXfVSUFDUQP4Y5WCra%2BRdp07oQFSXJRPvMBlzew4Qt3jSz6Xf0clXGoN7uiSIyWwE6%2FKpFpJZ4B2MAds1V6S4fh4%2BUlT6d4W40gQVV%2FA2ml3PJ67gG1zTy3sfOSVG%2FH0usxIFrJrUTv2d6efztokeUM0DenvariaQeV4csHdqZs9OBmCD%2B39%2BSilLIWSYOcYIXAoazTl5lfwoal2LffsWHAWN3HWll1ZQVVRVckI0YViQUVh5CTjxRRVKRxBs%2BJJnFf0vOn2RC4HREoTwFrJHn%2BSytDhXmNd8ULvt8UjEiGSFo%2BVpk01lxY58vYLAF3csWfiWl9dDPqaz7iTRB%2FpmYUhjT0aud5qXUNUkX2eizSK3%2BZ8Z7a0OxHrm%2Bf4%2BP2N%2BAb0hG1BV71671bvJw5IXX2OcIFdL%2Ff9Vo%2BXV4876vuKlmaljz6g99mJr%2BqGoGzL1naQFZVvimJDVkL5TMJpohYKijrPdfRV3m%2B%2FZORAYW%2BZjertLiCC3Ox50fNB9brg6Tfq3Y3NS2%2F6fgwvdKQH%2FpUshVXwdoR2SNQHBhdaOkVS9rfgA%2B9s2wFzCahIkRaBB1rcgBVug2LakC1UaoFwGxEzkT4ihHSb%2BoZvxMF47AiusjKvs3%2FjOLqjC96IzEBjqkAeuoYGpS6qv7%2BfI5q3ssi%2BzTbe6cqBtIBNcGiPyM9lR17QP5q6cXHyqng7MCadht974pwtPjaokRmaUFV1IrJdoD9vpeKUQY%2FarPt92MdMmu78pqkW6xHpPM8ffj6xsbe76mlAu5JfnxykGbowVDkF43dMT%2FXoAfHGymU844SE9SyGuSjTaLHZRowQAn31h3CK%2Bm7p9UloNWuytlD4GQZYLiiW%2Bg&X-Amz-Signature=18be56cd80035783457c419f878b75100848c4578bfb0d25174667b0a3a6aadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U557NJ7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDCugJYWgdv5LCBCfLp7%2F8OadqaElLBEBw7qPOfxbVI6gIhAN67X669%2FZ5Lq%2FyLHG9u8o5sVi%2BFyqfbU5Jr9SpELMbZKv8DCEEQABoMNjM3NDIzMTgzODA1IgxnUji0q7jICthIGsUq3ANqExZXfVSUFDUQP4Y5WCra%2BRdp07oQFSXJRPvMBlzew4Qt3jSz6Xf0clXGoN7uiSIyWwE6%2FKpFpJZ4B2MAds1V6S4fh4%2BUlT6d4W40gQVV%2FA2ml3PJ67gG1zTy3sfOSVG%2FH0usxIFrJrUTv2d6efztokeUM0DenvariaQeV4csHdqZs9OBmCD%2B39%2BSilLIWSYOcYIXAoazTl5lfwoal2LffsWHAWN3HWll1ZQVVRVckI0YViQUVh5CTjxRRVKRxBs%2BJJnFf0vOn2RC4HREoTwFrJHn%2BSytDhXmNd8ULvt8UjEiGSFo%2BVpk01lxY58vYLAF3csWfiWl9dDPqaz7iTRB%2FpmYUhjT0aud5qXUNUkX2eizSK3%2BZ8Z7a0OxHrm%2Bf4%2BP2N%2BAb0hG1BV71671bvJw5IXX2OcIFdL%2Ff9Vo%2BXV4876vuKlmaljz6g99mJr%2BqGoGzL1naQFZVvimJDVkL5TMJpohYKijrPdfRV3m%2B%2FZORAYW%2BZjertLiCC3Ox50fNB9brg6Tfq3Y3NS2%2F6fgwvdKQH%2FpUshVXwdoR2SNQHBhdaOkVS9rfgA%2B9s2wFzCahIkRaBB1rcgBVug2LakC1UaoFwGxEzkT4ihHSb%2BoZvxMF47AiusjKvs3%2FjOLqjC96IzEBjqkAeuoYGpS6qv7%2BfI5q3ssi%2BzTbe6cqBtIBNcGiPyM9lR17QP5q6cXHyqng7MCadht974pwtPjaokRmaUFV1IrJdoD9vpeKUQY%2FarPt92MdMmu78pqkW6xHpPM8ffj6xsbe76mlAu5JfnxykGbowVDkF43dMT%2FXoAfHGymU844SE9SyGuSjTaLHZRowQAn31h3CK%2Bm7p9UloNWuytlD4GQZYLiiW%2Bg&X-Amz-Signature=14ed8736b911543487262275d2db233109fabdac780cca18ff63b31809fdfad0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U557NJ7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDCugJYWgdv5LCBCfLp7%2F8OadqaElLBEBw7qPOfxbVI6gIhAN67X669%2FZ5Lq%2FyLHG9u8o5sVi%2BFyqfbU5Jr9SpELMbZKv8DCEEQABoMNjM3NDIzMTgzODA1IgxnUji0q7jICthIGsUq3ANqExZXfVSUFDUQP4Y5WCra%2BRdp07oQFSXJRPvMBlzew4Qt3jSz6Xf0clXGoN7uiSIyWwE6%2FKpFpJZ4B2MAds1V6S4fh4%2BUlT6d4W40gQVV%2FA2ml3PJ67gG1zTy3sfOSVG%2FH0usxIFrJrUTv2d6efztokeUM0DenvariaQeV4csHdqZs9OBmCD%2B39%2BSilLIWSYOcYIXAoazTl5lfwoal2LffsWHAWN3HWll1ZQVVRVckI0YViQUVh5CTjxRRVKRxBs%2BJJnFf0vOn2RC4HREoTwFrJHn%2BSytDhXmNd8ULvt8UjEiGSFo%2BVpk01lxY58vYLAF3csWfiWl9dDPqaz7iTRB%2FpmYUhjT0aud5qXUNUkX2eizSK3%2BZ8Z7a0OxHrm%2Bf4%2BP2N%2BAb0hG1BV71671bvJw5IXX2OcIFdL%2Ff9Vo%2BXV4876vuKlmaljz6g99mJr%2BqGoGzL1naQFZVvimJDVkL5TMJpohYKijrPdfRV3m%2B%2FZORAYW%2BZjertLiCC3Ox50fNB9brg6Tfq3Y3NS2%2F6fgwvdKQH%2FpUshVXwdoR2SNQHBhdaOkVS9rfgA%2B9s2wFzCahIkRaBB1rcgBVug2LakC1UaoFwGxEzkT4ihHSb%2BoZvxMF47AiusjKvs3%2FjOLqjC96IzEBjqkAeuoYGpS6qv7%2BfI5q3ssi%2BzTbe6cqBtIBNcGiPyM9lR17QP5q6cXHyqng7MCadht974pwtPjaokRmaUFV1IrJdoD9vpeKUQY%2FarPt92MdMmu78pqkW6xHpPM8ffj6xsbe76mlAu5JfnxykGbowVDkF43dMT%2FXoAfHGymU844SE9SyGuSjTaLHZRowQAn31h3CK%2Bm7p9UloNWuytlD4GQZYLiiW%2Bg&X-Amz-Signature=5de60967624d3210928433207a317edebf5dd79e38a8939229792172987e8bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
