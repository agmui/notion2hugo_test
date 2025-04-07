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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKJWOKG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FbB%2BGrlSykppXL0eHEmLxiWWwZltiNucxRTnfoirVQIhANyPde1V4eDfRXjPJVA%2FbwM4g86PzROh0gXE9T51KW%2FmKv8DCFsQABoMNjM3NDIzMTgzODA1IgykZ7PG1GtY%2FZu3qaEq3AOuIYYAgjmsdm%2B9Wt8eU%2F3HdXnRqDKhFviNcUyvtUU4ayDGhh7REr1QTiWXLghIFKOt6yb1Sdmyfw36bjN1JWKy5bs5Gs5tCBH1zoBapMN5dsaBlWpHz%2FAWx2NNJlDS9XOUszInsKrJ63jOz7QmYuvLnlsKJXCiEy2%2B7%2Bi%2FUYdS5tGNtPGWkkJJUHcIo2gU1F8Pus1PXvE0DE%2BktfK%2FBmvWCGKO0n%2FQ9X1c%2BFH8RdbV62bfI5ML3QCJCnNVpULLldnUJ5BGTOHV9U%2FBjyBT3%2F85xOaSH8lGODSA%2BIajJq2yFKRtWL2fYMA0kfXmUvhah%2B9K2WxTnGgGi9zS6QSFZtrbiiaRzqwnIKaCfFDQg45S2DiNVwErjMbj%2Fdj1mRQlj2Ip5khaFY1GuVN27%2BOX7PH331aVSAYODlbrRA0qYApCKKWW7%2BwT9DZRX4IoNKc3f2WD8bE5x2mGZZN%2BA4or7xlYJbmRx%2BzJeZxI9LtfZQwWATh33s7le0QxyQwbRltBpGeinfk8lVSCZTBchFwI2w3M3Muchi55me2Na%2BP1iYxfWvokSKCi9iUarnPbPFRjokAyoHSO4j5AELLb2SM%2B3Kb6exqerXFQG8IOdJz5gJ3v8sXuz%2Bu1vYWOEv%2F3pjCuus6%2FBjqkAQmRoVpzka3dJf%2BaHCCcLb81CScyvheUwi89c%2FWamaQJY1VYOJSDS2gx2N7DJruNUI5SwQaF%2FRdXxZEorVRId7xOW0X%2Bqo9dPwQECf196fyPwNZ4j%2FwdZk20YpwgDDp3AKWr1fwgV3erKjXqeLMiBWYtbu8mw44W9oRrFPQVNTCBaFqp7HIOaoOAFb1rDkuV2nZt%2FZKaGvSqz3R1HuOc6qEyplsD&X-Amz-Signature=5d7b2059029e5001b04c95d90884bda23e6a2a953561f09d364add25ae42fa67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKJWOKG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FbB%2BGrlSykppXL0eHEmLxiWWwZltiNucxRTnfoirVQIhANyPde1V4eDfRXjPJVA%2FbwM4g86PzROh0gXE9T51KW%2FmKv8DCFsQABoMNjM3NDIzMTgzODA1IgykZ7PG1GtY%2FZu3qaEq3AOuIYYAgjmsdm%2B9Wt8eU%2F3HdXnRqDKhFviNcUyvtUU4ayDGhh7REr1QTiWXLghIFKOt6yb1Sdmyfw36bjN1JWKy5bs5Gs5tCBH1zoBapMN5dsaBlWpHz%2FAWx2NNJlDS9XOUszInsKrJ63jOz7QmYuvLnlsKJXCiEy2%2B7%2Bi%2FUYdS5tGNtPGWkkJJUHcIo2gU1F8Pus1PXvE0DE%2BktfK%2FBmvWCGKO0n%2FQ9X1c%2BFH8RdbV62bfI5ML3QCJCnNVpULLldnUJ5BGTOHV9U%2FBjyBT3%2F85xOaSH8lGODSA%2BIajJq2yFKRtWL2fYMA0kfXmUvhah%2B9K2WxTnGgGi9zS6QSFZtrbiiaRzqwnIKaCfFDQg45S2DiNVwErjMbj%2Fdj1mRQlj2Ip5khaFY1GuVN27%2BOX7PH331aVSAYODlbrRA0qYApCKKWW7%2BwT9DZRX4IoNKc3f2WD8bE5x2mGZZN%2BA4or7xlYJbmRx%2BzJeZxI9LtfZQwWATh33s7le0QxyQwbRltBpGeinfk8lVSCZTBchFwI2w3M3Muchi55me2Na%2BP1iYxfWvokSKCi9iUarnPbPFRjokAyoHSO4j5AELLb2SM%2B3Kb6exqerXFQG8IOdJz5gJ3v8sXuz%2Bu1vYWOEv%2F3pjCuus6%2FBjqkAQmRoVpzka3dJf%2BaHCCcLb81CScyvheUwi89c%2FWamaQJY1VYOJSDS2gx2N7DJruNUI5SwQaF%2FRdXxZEorVRId7xOW0X%2Bqo9dPwQECf196fyPwNZ4j%2FwdZk20YpwgDDp3AKWr1fwgV3erKjXqeLMiBWYtbu8mw44W9oRrFPQVNTCBaFqp7HIOaoOAFb1rDkuV2nZt%2FZKaGvSqz3R1HuOc6qEyplsD&X-Amz-Signature=5f1e63bcd7c6e370d25a33acee1c239be18fd7ee5ab8f9f88b9fb9acbdd250c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKJWOKG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FbB%2BGrlSykppXL0eHEmLxiWWwZltiNucxRTnfoirVQIhANyPde1V4eDfRXjPJVA%2FbwM4g86PzROh0gXE9T51KW%2FmKv8DCFsQABoMNjM3NDIzMTgzODA1IgykZ7PG1GtY%2FZu3qaEq3AOuIYYAgjmsdm%2B9Wt8eU%2F3HdXnRqDKhFviNcUyvtUU4ayDGhh7REr1QTiWXLghIFKOt6yb1Sdmyfw36bjN1JWKy5bs5Gs5tCBH1zoBapMN5dsaBlWpHz%2FAWx2NNJlDS9XOUszInsKrJ63jOz7QmYuvLnlsKJXCiEy2%2B7%2Bi%2FUYdS5tGNtPGWkkJJUHcIo2gU1F8Pus1PXvE0DE%2BktfK%2FBmvWCGKO0n%2FQ9X1c%2BFH8RdbV62bfI5ML3QCJCnNVpULLldnUJ5BGTOHV9U%2FBjyBT3%2F85xOaSH8lGODSA%2BIajJq2yFKRtWL2fYMA0kfXmUvhah%2B9K2WxTnGgGi9zS6QSFZtrbiiaRzqwnIKaCfFDQg45S2DiNVwErjMbj%2Fdj1mRQlj2Ip5khaFY1GuVN27%2BOX7PH331aVSAYODlbrRA0qYApCKKWW7%2BwT9DZRX4IoNKc3f2WD8bE5x2mGZZN%2BA4or7xlYJbmRx%2BzJeZxI9LtfZQwWATh33s7le0QxyQwbRltBpGeinfk8lVSCZTBchFwI2w3M3Muchi55me2Na%2BP1iYxfWvokSKCi9iUarnPbPFRjokAyoHSO4j5AELLb2SM%2B3Kb6exqerXFQG8IOdJz5gJ3v8sXuz%2Bu1vYWOEv%2F3pjCuus6%2FBjqkAQmRoVpzka3dJf%2BaHCCcLb81CScyvheUwi89c%2FWamaQJY1VYOJSDS2gx2N7DJruNUI5SwQaF%2FRdXxZEorVRId7xOW0X%2Bqo9dPwQECf196fyPwNZ4j%2FwdZk20YpwgDDp3AKWr1fwgV3erKjXqeLMiBWYtbu8mw44W9oRrFPQVNTCBaFqp7HIOaoOAFb1rDkuV2nZt%2FZKaGvSqz3R1HuOc6qEyplsD&X-Amz-Signature=06922d97b901e851872377109237b8a2574e135a3f83e4517b646a84e43594ce&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKJWOKG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FbB%2BGrlSykppXL0eHEmLxiWWwZltiNucxRTnfoirVQIhANyPde1V4eDfRXjPJVA%2FbwM4g86PzROh0gXE9T51KW%2FmKv8DCFsQABoMNjM3NDIzMTgzODA1IgykZ7PG1GtY%2FZu3qaEq3AOuIYYAgjmsdm%2B9Wt8eU%2F3HdXnRqDKhFviNcUyvtUU4ayDGhh7REr1QTiWXLghIFKOt6yb1Sdmyfw36bjN1JWKy5bs5Gs5tCBH1zoBapMN5dsaBlWpHz%2FAWx2NNJlDS9XOUszInsKrJ63jOz7QmYuvLnlsKJXCiEy2%2B7%2Bi%2FUYdS5tGNtPGWkkJJUHcIo2gU1F8Pus1PXvE0DE%2BktfK%2FBmvWCGKO0n%2FQ9X1c%2BFH8RdbV62bfI5ML3QCJCnNVpULLldnUJ5BGTOHV9U%2FBjyBT3%2F85xOaSH8lGODSA%2BIajJq2yFKRtWL2fYMA0kfXmUvhah%2B9K2WxTnGgGi9zS6QSFZtrbiiaRzqwnIKaCfFDQg45S2DiNVwErjMbj%2Fdj1mRQlj2Ip5khaFY1GuVN27%2BOX7PH331aVSAYODlbrRA0qYApCKKWW7%2BwT9DZRX4IoNKc3f2WD8bE5x2mGZZN%2BA4or7xlYJbmRx%2BzJeZxI9LtfZQwWATh33s7le0QxyQwbRltBpGeinfk8lVSCZTBchFwI2w3M3Muchi55me2Na%2BP1iYxfWvokSKCi9iUarnPbPFRjokAyoHSO4j5AELLb2SM%2B3Kb6exqerXFQG8IOdJz5gJ3v8sXuz%2Bu1vYWOEv%2F3pjCuus6%2FBjqkAQmRoVpzka3dJf%2BaHCCcLb81CScyvheUwi89c%2FWamaQJY1VYOJSDS2gx2N7DJruNUI5SwQaF%2FRdXxZEorVRId7xOW0X%2Bqo9dPwQECf196fyPwNZ4j%2FwdZk20YpwgDDp3AKWr1fwgV3erKjXqeLMiBWYtbu8mw44W9oRrFPQVNTCBaFqp7HIOaoOAFb1rDkuV2nZt%2FZKaGvSqz3R1HuOc6qEyplsD&X-Amz-Signature=0d29914b22df9660955e132ccf4d7f86cc211ce28ced784b1f57b842fa8464ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKJWOKG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FbB%2BGrlSykppXL0eHEmLxiWWwZltiNucxRTnfoirVQIhANyPde1V4eDfRXjPJVA%2FbwM4g86PzROh0gXE9T51KW%2FmKv8DCFsQABoMNjM3NDIzMTgzODA1IgykZ7PG1GtY%2FZu3qaEq3AOuIYYAgjmsdm%2B9Wt8eU%2F3HdXnRqDKhFviNcUyvtUU4ayDGhh7REr1QTiWXLghIFKOt6yb1Sdmyfw36bjN1JWKy5bs5Gs5tCBH1zoBapMN5dsaBlWpHz%2FAWx2NNJlDS9XOUszInsKrJ63jOz7QmYuvLnlsKJXCiEy2%2B7%2Bi%2FUYdS5tGNtPGWkkJJUHcIo2gU1F8Pus1PXvE0DE%2BktfK%2FBmvWCGKO0n%2FQ9X1c%2BFH8RdbV62bfI5ML3QCJCnNVpULLldnUJ5BGTOHV9U%2FBjyBT3%2F85xOaSH8lGODSA%2BIajJq2yFKRtWL2fYMA0kfXmUvhah%2B9K2WxTnGgGi9zS6QSFZtrbiiaRzqwnIKaCfFDQg45S2DiNVwErjMbj%2Fdj1mRQlj2Ip5khaFY1GuVN27%2BOX7PH331aVSAYODlbrRA0qYApCKKWW7%2BwT9DZRX4IoNKc3f2WD8bE5x2mGZZN%2BA4or7xlYJbmRx%2BzJeZxI9LtfZQwWATh33s7le0QxyQwbRltBpGeinfk8lVSCZTBchFwI2w3M3Muchi55me2Na%2BP1iYxfWvokSKCi9iUarnPbPFRjokAyoHSO4j5AELLb2SM%2B3Kb6exqerXFQG8IOdJz5gJ3v8sXuz%2Bu1vYWOEv%2F3pjCuus6%2FBjqkAQmRoVpzka3dJf%2BaHCCcLb81CScyvheUwi89c%2FWamaQJY1VYOJSDS2gx2N7DJruNUI5SwQaF%2FRdXxZEorVRId7xOW0X%2Bqo9dPwQECf196fyPwNZ4j%2FwdZk20YpwgDDp3AKWr1fwgV3erKjXqeLMiBWYtbu8mw44W9oRrFPQVNTCBaFqp7HIOaoOAFb1rDkuV2nZt%2FZKaGvSqz3R1HuOc6qEyplsD&X-Amz-Signature=ea84f06e49bda3d8becd21efb819166e3f4bdc4eed49117b96584a17b9e431e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKJWOKG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FbB%2BGrlSykppXL0eHEmLxiWWwZltiNucxRTnfoirVQIhANyPde1V4eDfRXjPJVA%2FbwM4g86PzROh0gXE9T51KW%2FmKv8DCFsQABoMNjM3NDIzMTgzODA1IgykZ7PG1GtY%2FZu3qaEq3AOuIYYAgjmsdm%2B9Wt8eU%2F3HdXnRqDKhFviNcUyvtUU4ayDGhh7REr1QTiWXLghIFKOt6yb1Sdmyfw36bjN1JWKy5bs5Gs5tCBH1zoBapMN5dsaBlWpHz%2FAWx2NNJlDS9XOUszInsKrJ63jOz7QmYuvLnlsKJXCiEy2%2B7%2Bi%2FUYdS5tGNtPGWkkJJUHcIo2gU1F8Pus1PXvE0DE%2BktfK%2FBmvWCGKO0n%2FQ9X1c%2BFH8RdbV62bfI5ML3QCJCnNVpULLldnUJ5BGTOHV9U%2FBjyBT3%2F85xOaSH8lGODSA%2BIajJq2yFKRtWL2fYMA0kfXmUvhah%2B9K2WxTnGgGi9zS6QSFZtrbiiaRzqwnIKaCfFDQg45S2DiNVwErjMbj%2Fdj1mRQlj2Ip5khaFY1GuVN27%2BOX7PH331aVSAYODlbrRA0qYApCKKWW7%2BwT9DZRX4IoNKc3f2WD8bE5x2mGZZN%2BA4or7xlYJbmRx%2BzJeZxI9LtfZQwWATh33s7le0QxyQwbRltBpGeinfk8lVSCZTBchFwI2w3M3Muchi55me2Na%2BP1iYxfWvokSKCi9iUarnPbPFRjokAyoHSO4j5AELLb2SM%2B3Kb6exqerXFQG8IOdJz5gJ3v8sXuz%2Bu1vYWOEv%2F3pjCuus6%2FBjqkAQmRoVpzka3dJf%2BaHCCcLb81CScyvheUwi89c%2FWamaQJY1VYOJSDS2gx2N7DJruNUI5SwQaF%2FRdXxZEorVRId7xOW0X%2Bqo9dPwQECf196fyPwNZ4j%2FwdZk20YpwgDDp3AKWr1fwgV3erKjXqeLMiBWYtbu8mw44W9oRrFPQVNTCBaFqp7HIOaoOAFb1rDkuV2nZt%2FZKaGvSqz3R1HuOc6qEyplsD&X-Amz-Signature=c65c03f284ac7161eca1f1bfafb09f6dc35a8e898c3bf84ad88f39eb99be9036&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKJWOKG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FbB%2BGrlSykppXL0eHEmLxiWWwZltiNucxRTnfoirVQIhANyPde1V4eDfRXjPJVA%2FbwM4g86PzROh0gXE9T51KW%2FmKv8DCFsQABoMNjM3NDIzMTgzODA1IgykZ7PG1GtY%2FZu3qaEq3AOuIYYAgjmsdm%2B9Wt8eU%2F3HdXnRqDKhFviNcUyvtUU4ayDGhh7REr1QTiWXLghIFKOt6yb1Sdmyfw36bjN1JWKy5bs5Gs5tCBH1zoBapMN5dsaBlWpHz%2FAWx2NNJlDS9XOUszInsKrJ63jOz7QmYuvLnlsKJXCiEy2%2B7%2Bi%2FUYdS5tGNtPGWkkJJUHcIo2gU1F8Pus1PXvE0DE%2BktfK%2FBmvWCGKO0n%2FQ9X1c%2BFH8RdbV62bfI5ML3QCJCnNVpULLldnUJ5BGTOHV9U%2FBjyBT3%2F85xOaSH8lGODSA%2BIajJq2yFKRtWL2fYMA0kfXmUvhah%2B9K2WxTnGgGi9zS6QSFZtrbiiaRzqwnIKaCfFDQg45S2DiNVwErjMbj%2Fdj1mRQlj2Ip5khaFY1GuVN27%2BOX7PH331aVSAYODlbrRA0qYApCKKWW7%2BwT9DZRX4IoNKc3f2WD8bE5x2mGZZN%2BA4or7xlYJbmRx%2BzJeZxI9LtfZQwWATh33s7le0QxyQwbRltBpGeinfk8lVSCZTBchFwI2w3M3Muchi55me2Na%2BP1iYxfWvokSKCi9iUarnPbPFRjokAyoHSO4j5AELLb2SM%2B3Kb6exqerXFQG8IOdJz5gJ3v8sXuz%2Bu1vYWOEv%2F3pjCuus6%2FBjqkAQmRoVpzka3dJf%2BaHCCcLb81CScyvheUwi89c%2FWamaQJY1VYOJSDS2gx2N7DJruNUI5SwQaF%2FRdXxZEorVRId7xOW0X%2Bqo9dPwQECf196fyPwNZ4j%2FwdZk20YpwgDDp3AKWr1fwgV3erKjXqeLMiBWYtbu8mw44W9oRrFPQVNTCBaFqp7HIOaoOAFb1rDkuV2nZt%2FZKaGvSqz3R1HuOc6qEyplsD&X-Amz-Signature=714777ec119963b25d95be6b9b948fe5c818f4c02d270e4bdb60b846ee982483&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKJWOKG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe%2FbB%2BGrlSykppXL0eHEmLxiWWwZltiNucxRTnfoirVQIhANyPde1V4eDfRXjPJVA%2FbwM4g86PzROh0gXE9T51KW%2FmKv8DCFsQABoMNjM3NDIzMTgzODA1IgykZ7PG1GtY%2FZu3qaEq3AOuIYYAgjmsdm%2B9Wt8eU%2F3HdXnRqDKhFviNcUyvtUU4ayDGhh7REr1QTiWXLghIFKOt6yb1Sdmyfw36bjN1JWKy5bs5Gs5tCBH1zoBapMN5dsaBlWpHz%2FAWx2NNJlDS9XOUszInsKrJ63jOz7QmYuvLnlsKJXCiEy2%2B7%2Bi%2FUYdS5tGNtPGWkkJJUHcIo2gU1F8Pus1PXvE0DE%2BktfK%2FBmvWCGKO0n%2FQ9X1c%2BFH8RdbV62bfI5ML3QCJCnNVpULLldnUJ5BGTOHV9U%2FBjyBT3%2F85xOaSH8lGODSA%2BIajJq2yFKRtWL2fYMA0kfXmUvhah%2B9K2WxTnGgGi9zS6QSFZtrbiiaRzqwnIKaCfFDQg45S2DiNVwErjMbj%2Fdj1mRQlj2Ip5khaFY1GuVN27%2BOX7PH331aVSAYODlbrRA0qYApCKKWW7%2BwT9DZRX4IoNKc3f2WD8bE5x2mGZZN%2BA4or7xlYJbmRx%2BzJeZxI9LtfZQwWATh33s7le0QxyQwbRltBpGeinfk8lVSCZTBchFwI2w3M3Muchi55me2Na%2BP1iYxfWvokSKCi9iUarnPbPFRjokAyoHSO4j5AELLb2SM%2B3Kb6exqerXFQG8IOdJz5gJ3v8sXuz%2Bu1vYWOEv%2F3pjCuus6%2FBjqkAQmRoVpzka3dJf%2BaHCCcLb81CScyvheUwi89c%2FWamaQJY1VYOJSDS2gx2N7DJruNUI5SwQaF%2FRdXxZEorVRId7xOW0X%2Bqo9dPwQECf196fyPwNZ4j%2FwdZk20YpwgDDp3AKWr1fwgV3erKjXqeLMiBWYtbu8mw44W9oRrFPQVNTCBaFqp7HIOaoOAFb1rDkuV2nZt%2FZKaGvSqz3R1HuOc6qEyplsD&X-Amz-Signature=48ca7b0028ba941eeba235c01c8334377573ba1ef0ed964eaec2fcce16d36646&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
