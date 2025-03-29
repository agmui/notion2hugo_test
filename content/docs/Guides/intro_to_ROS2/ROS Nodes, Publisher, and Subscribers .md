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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLEDBSY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCYoS9Lj6qc6Y7ndWK8r%2FPLk7ayD%2BG9yEiLY78LlspsuwIhAK8dBVQXYzPAPn2vDVy7qrnT1IH8iS75pkEJ%2BVxJfmv8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwEAcHqzJbXcO3Y7L8q3ANrv4QuyCUD%2Bcm3hA%2FBnhhHS2%2FK1lGlQ8g1cpT9pizEg8vLF6NJKmjE8p1Nk595Gb1HGqUi8OxW86x1%2FTcgRaNEwKBRi9Evsl5A3KgBOOo86W9XpZxDslYLSzERlbccY2RDFRsNhhWp5frSte4cARuOCkihk%2B9K7%2F6%2BTSnthllAWHHRdXLSCC9QEcgWDj0jRzL%2Bk%2F%2BzfaJia2MllPvl6RDbxN0wmfmbSo9U0OTQb5fuu8CdBKaLHvATRUt2xm48lN2x8EkQeADtstV%2F13p3WnRlu9CKUAajF0SK2eH5juLsow2jkyPEMteVZp3o8mXpYJsxsaNItXgAjBdMS6IVsqcMi%2FN2d4xFdsFFSPnUN8nln4qBnQDVoJosS2NYGsKuzY59DiGn%2BKg8kNQtai%2BcBON%2BoO%2FXZ1oXXiiLigFU9S6OM1iwkHvwZuesxKR%2B2p5ZnubhUzmcwAkQmQvItnMh0jwzHS7cKCUxhNeVfFGobFqUvU6vdJozcy4z14RZ95vNNh3FQIg%2FQqXXOy3lgc4BBsl3RPo0PTKuNbEKrcb1GMvlPpGXW%2FQtUKFy0URh8VPVOsRWzw%2F%2BtfTmoyhwjMB2ie9gN1s4k19rfcLL%2BPU2zkD%2FWqpBe02%2Bz4KQWxDpXzCP4p6%2FBjqkAQqkVERDr5Vc36jCdiJ%2Bzl%2F7mbdSmYl9FU3l5L%2BVVz8cSJRVDxOyJEfo2jq1cHofdk6c8quBNiGBhxxJUv2uB7XfaS7CGrn1VPfGp%2B4F%2BPaLjtZuEDBfn2RpG5SWYRM%2BUk5i1OrpIS7hzolwa3o7OZ3kMomPjWYb%2BdPMxwoubI6cZ4CnSHCfwMKLxqTdvHB5xl%2FQC2lu58whqBy1hG%2F1Bf%2FnUrUC&X-Amz-Signature=37913ee9c2a8726519af3c1d9d8d1bcb244cb8f8cb02f3dd34e3a0f1f2f21407&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLEDBSY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCYoS9Lj6qc6Y7ndWK8r%2FPLk7ayD%2BG9yEiLY78LlspsuwIhAK8dBVQXYzPAPn2vDVy7qrnT1IH8iS75pkEJ%2BVxJfmv8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwEAcHqzJbXcO3Y7L8q3ANrv4QuyCUD%2Bcm3hA%2FBnhhHS2%2FK1lGlQ8g1cpT9pizEg8vLF6NJKmjE8p1Nk595Gb1HGqUi8OxW86x1%2FTcgRaNEwKBRi9Evsl5A3KgBOOo86W9XpZxDslYLSzERlbccY2RDFRsNhhWp5frSte4cARuOCkihk%2B9K7%2F6%2BTSnthllAWHHRdXLSCC9QEcgWDj0jRzL%2Bk%2F%2BzfaJia2MllPvl6RDbxN0wmfmbSo9U0OTQb5fuu8CdBKaLHvATRUt2xm48lN2x8EkQeADtstV%2F13p3WnRlu9CKUAajF0SK2eH5juLsow2jkyPEMteVZp3o8mXpYJsxsaNItXgAjBdMS6IVsqcMi%2FN2d4xFdsFFSPnUN8nln4qBnQDVoJosS2NYGsKuzY59DiGn%2BKg8kNQtai%2BcBON%2BoO%2FXZ1oXXiiLigFU9S6OM1iwkHvwZuesxKR%2B2p5ZnubhUzmcwAkQmQvItnMh0jwzHS7cKCUxhNeVfFGobFqUvU6vdJozcy4z14RZ95vNNh3FQIg%2FQqXXOy3lgc4BBsl3RPo0PTKuNbEKrcb1GMvlPpGXW%2FQtUKFy0URh8VPVOsRWzw%2F%2BtfTmoyhwjMB2ie9gN1s4k19rfcLL%2BPU2zkD%2FWqpBe02%2Bz4KQWxDpXzCP4p6%2FBjqkAQqkVERDr5Vc36jCdiJ%2Bzl%2F7mbdSmYl9FU3l5L%2BVVz8cSJRVDxOyJEfo2jq1cHofdk6c8quBNiGBhxxJUv2uB7XfaS7CGrn1VPfGp%2B4F%2BPaLjtZuEDBfn2RpG5SWYRM%2BUk5i1OrpIS7hzolwa3o7OZ3kMomPjWYb%2BdPMxwoubI6cZ4CnSHCfwMKLxqTdvHB5xl%2FQC2lu58whqBy1hG%2F1Bf%2FnUrUC&X-Amz-Signature=a905ae1781245365fe76c5b88343ed460d99d402bcc642e9d315f529513c9d74&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLEDBSY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCYoS9Lj6qc6Y7ndWK8r%2FPLk7ayD%2BG9yEiLY78LlspsuwIhAK8dBVQXYzPAPn2vDVy7qrnT1IH8iS75pkEJ%2BVxJfmv8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwEAcHqzJbXcO3Y7L8q3ANrv4QuyCUD%2Bcm3hA%2FBnhhHS2%2FK1lGlQ8g1cpT9pizEg8vLF6NJKmjE8p1Nk595Gb1HGqUi8OxW86x1%2FTcgRaNEwKBRi9Evsl5A3KgBOOo86W9XpZxDslYLSzERlbccY2RDFRsNhhWp5frSte4cARuOCkihk%2B9K7%2F6%2BTSnthllAWHHRdXLSCC9QEcgWDj0jRzL%2Bk%2F%2BzfaJia2MllPvl6RDbxN0wmfmbSo9U0OTQb5fuu8CdBKaLHvATRUt2xm48lN2x8EkQeADtstV%2F13p3WnRlu9CKUAajF0SK2eH5juLsow2jkyPEMteVZp3o8mXpYJsxsaNItXgAjBdMS6IVsqcMi%2FN2d4xFdsFFSPnUN8nln4qBnQDVoJosS2NYGsKuzY59DiGn%2BKg8kNQtai%2BcBON%2BoO%2FXZ1oXXiiLigFU9S6OM1iwkHvwZuesxKR%2B2p5ZnubhUzmcwAkQmQvItnMh0jwzHS7cKCUxhNeVfFGobFqUvU6vdJozcy4z14RZ95vNNh3FQIg%2FQqXXOy3lgc4BBsl3RPo0PTKuNbEKrcb1GMvlPpGXW%2FQtUKFy0URh8VPVOsRWzw%2F%2BtfTmoyhwjMB2ie9gN1s4k19rfcLL%2BPU2zkD%2FWqpBe02%2Bz4KQWxDpXzCP4p6%2FBjqkAQqkVERDr5Vc36jCdiJ%2Bzl%2F7mbdSmYl9FU3l5L%2BVVz8cSJRVDxOyJEfo2jq1cHofdk6c8quBNiGBhxxJUv2uB7XfaS7CGrn1VPfGp%2B4F%2BPaLjtZuEDBfn2RpG5SWYRM%2BUk5i1OrpIS7hzolwa3o7OZ3kMomPjWYb%2BdPMxwoubI6cZ4CnSHCfwMKLxqTdvHB5xl%2FQC2lu58whqBy1hG%2F1Bf%2FnUrUC&X-Amz-Signature=2c61ed7e07498fbb61c2b5406bd33fbd8f4eaadfb836e51613f9f6845fdd951b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLEDBSY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCYoS9Lj6qc6Y7ndWK8r%2FPLk7ayD%2BG9yEiLY78LlspsuwIhAK8dBVQXYzPAPn2vDVy7qrnT1IH8iS75pkEJ%2BVxJfmv8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwEAcHqzJbXcO3Y7L8q3ANrv4QuyCUD%2Bcm3hA%2FBnhhHS2%2FK1lGlQ8g1cpT9pizEg8vLF6NJKmjE8p1Nk595Gb1HGqUi8OxW86x1%2FTcgRaNEwKBRi9Evsl5A3KgBOOo86W9XpZxDslYLSzERlbccY2RDFRsNhhWp5frSte4cARuOCkihk%2B9K7%2F6%2BTSnthllAWHHRdXLSCC9QEcgWDj0jRzL%2Bk%2F%2BzfaJia2MllPvl6RDbxN0wmfmbSo9U0OTQb5fuu8CdBKaLHvATRUt2xm48lN2x8EkQeADtstV%2F13p3WnRlu9CKUAajF0SK2eH5juLsow2jkyPEMteVZp3o8mXpYJsxsaNItXgAjBdMS6IVsqcMi%2FN2d4xFdsFFSPnUN8nln4qBnQDVoJosS2NYGsKuzY59DiGn%2BKg8kNQtai%2BcBON%2BoO%2FXZ1oXXiiLigFU9S6OM1iwkHvwZuesxKR%2B2p5ZnubhUzmcwAkQmQvItnMh0jwzHS7cKCUxhNeVfFGobFqUvU6vdJozcy4z14RZ95vNNh3FQIg%2FQqXXOy3lgc4BBsl3RPo0PTKuNbEKrcb1GMvlPpGXW%2FQtUKFy0URh8VPVOsRWzw%2F%2BtfTmoyhwjMB2ie9gN1s4k19rfcLL%2BPU2zkD%2FWqpBe02%2Bz4KQWxDpXzCP4p6%2FBjqkAQqkVERDr5Vc36jCdiJ%2Bzl%2F7mbdSmYl9FU3l5L%2BVVz8cSJRVDxOyJEfo2jq1cHofdk6c8quBNiGBhxxJUv2uB7XfaS7CGrn1VPfGp%2B4F%2BPaLjtZuEDBfn2RpG5SWYRM%2BUk5i1OrpIS7hzolwa3o7OZ3kMomPjWYb%2BdPMxwoubI6cZ4CnSHCfwMKLxqTdvHB5xl%2FQC2lu58whqBy1hG%2F1Bf%2FnUrUC&X-Amz-Signature=88f260445b46a3cccf32f0a361f0a0b25ae3df1fff3366b57a37216d3317db3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLEDBSY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCYoS9Lj6qc6Y7ndWK8r%2FPLk7ayD%2BG9yEiLY78LlspsuwIhAK8dBVQXYzPAPn2vDVy7qrnT1IH8iS75pkEJ%2BVxJfmv8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwEAcHqzJbXcO3Y7L8q3ANrv4QuyCUD%2Bcm3hA%2FBnhhHS2%2FK1lGlQ8g1cpT9pizEg8vLF6NJKmjE8p1Nk595Gb1HGqUi8OxW86x1%2FTcgRaNEwKBRi9Evsl5A3KgBOOo86W9XpZxDslYLSzERlbccY2RDFRsNhhWp5frSte4cARuOCkihk%2B9K7%2F6%2BTSnthllAWHHRdXLSCC9QEcgWDj0jRzL%2Bk%2F%2BzfaJia2MllPvl6RDbxN0wmfmbSo9U0OTQb5fuu8CdBKaLHvATRUt2xm48lN2x8EkQeADtstV%2F13p3WnRlu9CKUAajF0SK2eH5juLsow2jkyPEMteVZp3o8mXpYJsxsaNItXgAjBdMS6IVsqcMi%2FN2d4xFdsFFSPnUN8nln4qBnQDVoJosS2NYGsKuzY59DiGn%2BKg8kNQtai%2BcBON%2BoO%2FXZ1oXXiiLigFU9S6OM1iwkHvwZuesxKR%2B2p5ZnubhUzmcwAkQmQvItnMh0jwzHS7cKCUxhNeVfFGobFqUvU6vdJozcy4z14RZ95vNNh3FQIg%2FQqXXOy3lgc4BBsl3RPo0PTKuNbEKrcb1GMvlPpGXW%2FQtUKFy0URh8VPVOsRWzw%2F%2BtfTmoyhwjMB2ie9gN1s4k19rfcLL%2BPU2zkD%2FWqpBe02%2Bz4KQWxDpXzCP4p6%2FBjqkAQqkVERDr5Vc36jCdiJ%2Bzl%2F7mbdSmYl9FU3l5L%2BVVz8cSJRVDxOyJEfo2jq1cHofdk6c8quBNiGBhxxJUv2uB7XfaS7CGrn1VPfGp%2B4F%2BPaLjtZuEDBfn2RpG5SWYRM%2BUk5i1OrpIS7hzolwa3o7OZ3kMomPjWYb%2BdPMxwoubI6cZ4CnSHCfwMKLxqTdvHB5xl%2FQC2lu58whqBy1hG%2F1Bf%2FnUrUC&X-Amz-Signature=8a741de6eeade2dbfe4f92384aebd1e9e2ab8232c0d18c759b0261e77c21cde1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLEDBSY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCYoS9Lj6qc6Y7ndWK8r%2FPLk7ayD%2BG9yEiLY78LlspsuwIhAK8dBVQXYzPAPn2vDVy7qrnT1IH8iS75pkEJ%2BVxJfmv8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwEAcHqzJbXcO3Y7L8q3ANrv4QuyCUD%2Bcm3hA%2FBnhhHS2%2FK1lGlQ8g1cpT9pizEg8vLF6NJKmjE8p1Nk595Gb1HGqUi8OxW86x1%2FTcgRaNEwKBRi9Evsl5A3KgBOOo86W9XpZxDslYLSzERlbccY2RDFRsNhhWp5frSte4cARuOCkihk%2B9K7%2F6%2BTSnthllAWHHRdXLSCC9QEcgWDj0jRzL%2Bk%2F%2BzfaJia2MllPvl6RDbxN0wmfmbSo9U0OTQb5fuu8CdBKaLHvATRUt2xm48lN2x8EkQeADtstV%2F13p3WnRlu9CKUAajF0SK2eH5juLsow2jkyPEMteVZp3o8mXpYJsxsaNItXgAjBdMS6IVsqcMi%2FN2d4xFdsFFSPnUN8nln4qBnQDVoJosS2NYGsKuzY59DiGn%2BKg8kNQtai%2BcBON%2BoO%2FXZ1oXXiiLigFU9S6OM1iwkHvwZuesxKR%2B2p5ZnubhUzmcwAkQmQvItnMh0jwzHS7cKCUxhNeVfFGobFqUvU6vdJozcy4z14RZ95vNNh3FQIg%2FQqXXOy3lgc4BBsl3RPo0PTKuNbEKrcb1GMvlPpGXW%2FQtUKFy0URh8VPVOsRWzw%2F%2BtfTmoyhwjMB2ie9gN1s4k19rfcLL%2BPU2zkD%2FWqpBe02%2Bz4KQWxDpXzCP4p6%2FBjqkAQqkVERDr5Vc36jCdiJ%2Bzl%2F7mbdSmYl9FU3l5L%2BVVz8cSJRVDxOyJEfo2jq1cHofdk6c8quBNiGBhxxJUv2uB7XfaS7CGrn1VPfGp%2B4F%2BPaLjtZuEDBfn2RpG5SWYRM%2BUk5i1OrpIS7hzolwa3o7OZ3kMomPjWYb%2BdPMxwoubI6cZ4CnSHCfwMKLxqTdvHB5xl%2FQC2lu58whqBy1hG%2F1Bf%2FnUrUC&X-Amz-Signature=da56b248f5b467861501b1722faaf2e3e5788f6763b77dc00c6babcf20238b35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLEDBSY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCYoS9Lj6qc6Y7ndWK8r%2FPLk7ayD%2BG9yEiLY78LlspsuwIhAK8dBVQXYzPAPn2vDVy7qrnT1IH8iS75pkEJ%2BVxJfmv8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwEAcHqzJbXcO3Y7L8q3ANrv4QuyCUD%2Bcm3hA%2FBnhhHS2%2FK1lGlQ8g1cpT9pizEg8vLF6NJKmjE8p1Nk595Gb1HGqUi8OxW86x1%2FTcgRaNEwKBRi9Evsl5A3KgBOOo86W9XpZxDslYLSzERlbccY2RDFRsNhhWp5frSte4cARuOCkihk%2B9K7%2F6%2BTSnthllAWHHRdXLSCC9QEcgWDj0jRzL%2Bk%2F%2BzfaJia2MllPvl6RDbxN0wmfmbSo9U0OTQb5fuu8CdBKaLHvATRUt2xm48lN2x8EkQeADtstV%2F13p3WnRlu9CKUAajF0SK2eH5juLsow2jkyPEMteVZp3o8mXpYJsxsaNItXgAjBdMS6IVsqcMi%2FN2d4xFdsFFSPnUN8nln4qBnQDVoJosS2NYGsKuzY59DiGn%2BKg8kNQtai%2BcBON%2BoO%2FXZ1oXXiiLigFU9S6OM1iwkHvwZuesxKR%2B2p5ZnubhUzmcwAkQmQvItnMh0jwzHS7cKCUxhNeVfFGobFqUvU6vdJozcy4z14RZ95vNNh3FQIg%2FQqXXOy3lgc4BBsl3RPo0PTKuNbEKrcb1GMvlPpGXW%2FQtUKFy0URh8VPVOsRWzw%2F%2BtfTmoyhwjMB2ie9gN1s4k19rfcLL%2BPU2zkD%2FWqpBe02%2Bz4KQWxDpXzCP4p6%2FBjqkAQqkVERDr5Vc36jCdiJ%2Bzl%2F7mbdSmYl9FU3l5L%2BVVz8cSJRVDxOyJEfo2jq1cHofdk6c8quBNiGBhxxJUv2uB7XfaS7CGrn1VPfGp%2B4F%2BPaLjtZuEDBfn2RpG5SWYRM%2BUk5i1OrpIS7hzolwa3o7OZ3kMomPjWYb%2BdPMxwoubI6cZ4CnSHCfwMKLxqTdvHB5xl%2FQC2lu58whqBy1hG%2F1Bf%2FnUrUC&X-Amz-Signature=200a9ebec6bf7afcca4c3aeea2621e0e93c38ebefd72e18bf8f9a980b79e4742&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYLEDBSY%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCYoS9Lj6qc6Y7ndWK8r%2FPLk7ayD%2BG9yEiLY78LlspsuwIhAK8dBVQXYzPAPn2vDVy7qrnT1IH8iS75pkEJ%2BVxJfmv8Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwEAcHqzJbXcO3Y7L8q3ANrv4QuyCUD%2Bcm3hA%2FBnhhHS2%2FK1lGlQ8g1cpT9pizEg8vLF6NJKmjE8p1Nk595Gb1HGqUi8OxW86x1%2FTcgRaNEwKBRi9Evsl5A3KgBOOo86W9XpZxDslYLSzERlbccY2RDFRsNhhWp5frSte4cARuOCkihk%2B9K7%2F6%2BTSnthllAWHHRdXLSCC9QEcgWDj0jRzL%2Bk%2F%2BzfaJia2MllPvl6RDbxN0wmfmbSo9U0OTQb5fuu8CdBKaLHvATRUt2xm48lN2x8EkQeADtstV%2F13p3WnRlu9CKUAajF0SK2eH5juLsow2jkyPEMteVZp3o8mXpYJsxsaNItXgAjBdMS6IVsqcMi%2FN2d4xFdsFFSPnUN8nln4qBnQDVoJosS2NYGsKuzY59DiGn%2BKg8kNQtai%2BcBON%2BoO%2FXZ1oXXiiLigFU9S6OM1iwkHvwZuesxKR%2B2p5ZnubhUzmcwAkQmQvItnMh0jwzHS7cKCUxhNeVfFGobFqUvU6vdJozcy4z14RZ95vNNh3FQIg%2FQqXXOy3lgc4BBsl3RPo0PTKuNbEKrcb1GMvlPpGXW%2FQtUKFy0URh8VPVOsRWzw%2F%2BtfTmoyhwjMB2ie9gN1s4k19rfcLL%2BPU2zkD%2FWqpBe02%2Bz4KQWxDpXzCP4p6%2FBjqkAQqkVERDr5Vc36jCdiJ%2Bzl%2F7mbdSmYl9FU3l5L%2BVVz8cSJRVDxOyJEfo2jq1cHofdk6c8quBNiGBhxxJUv2uB7XfaS7CGrn1VPfGp%2B4F%2BPaLjtZuEDBfn2RpG5SWYRM%2BUk5i1OrpIS7hzolwa3o7OZ3kMomPjWYb%2BdPMxwoubI6cZ4CnSHCfwMKLxqTdvHB5xl%2FQC2lu58whqBy1hG%2F1Bf%2FnUrUC&X-Amz-Signature=1256d0241ed9421c6bcd1319a0324046816e3bf1e62c0e34f107ee3024f245f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
