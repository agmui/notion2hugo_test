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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDN63DG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCic6sVMKsf6yP1Tb3lGmhQ8ufNE6d98mRzpQtHZsxL3gIhAPnn4w%2FZp0%2BOdNhcM3eExWBxCJh07njviPKDmMhNN7IPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyfH1abDUkVStDoIlgq3APpmB3VT%2Ft%2BQBE0Qa%2BWF1AOeEzZR7EkB26189MgA4L%2FtZu27yfE2t9d0WzINsr560pFZ%2BRWtWxujONzh6UOUE2zwv81nMvzoiKMfNxF6P4DJ61Cyt0ZbjJFzQGBXezFzCdrYvMRPtqdekqOE0RZokSuh3Ai7bQ3mzk2HJPXbfmmzSkxZ1bLnY5xfrOZ2g1socK2rcFzDRRafR0b6TPSBIN8pxwezEz8Zi6op0hF5H37rEkcOEFlb546s4rX13GE%2FTqjWTsI7xzKj1IKfXaPqYC6Nfntkd4sPPBk0L0YvKWjH0%2FGwbOD4tJzSWJ3SoFiBoFQTc%2BS7W4uP%2B49F9WdRcJVoFf%2FQNIIIfGGUvUvITHA90aLxnXlHJWE7bWlm2Yp1ZJrCqCzZYSeoKWdM2FnVyj9hjwu3UIIZgPVdXLVs3QHuO0SN9gJS4QyNViACG3g603QPHUoilzEwX%2Fg2Zdp8Q5cn7NPmjuK0f0MWnFNLQ6jW5gP3SmL1PrKEJvkZw0U75MbeFbrfMHJ9Iip6Hassb%2BK9n1i88l3Sk8OjOyOgowrDuk7lLgvlKw7U9L85AYwKVaaJ%2BEEBxgSzMoZGxbv7ivQrm0X3Gs%2FkDEGSmoKiIkeC9PZ1ImaFo70A%2F%2Be8DCsxJjBBjqkAST%2FOCopVz6BHHxnTMgNtrQqYQCg9pTzJfgg05uLTP8i1Lc%2B6%2BYSUswLvhQvzhhdkVFR51Ym5iCjFG%2B%2BiWtFyjqyDPBF%2BFDgOz76BNJy1%2BWP%2FgSmStxbAqGxv1iXbixqLbv0Hpeg8tiHx4DWXctp5OcFfMVg7SVK%2BUfknh2gJsxGTJuMhrFcEgqgB%2BOpn8R%2BKce6cbCrGgrVAWRHziW3cUyRAvMA&X-Amz-Signature=a5fe3eb9fe2327c16ca52dde19e6b422cbdecf3f5a70457535227b248e215d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDN63DG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCic6sVMKsf6yP1Tb3lGmhQ8ufNE6d98mRzpQtHZsxL3gIhAPnn4w%2FZp0%2BOdNhcM3eExWBxCJh07njviPKDmMhNN7IPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyfH1abDUkVStDoIlgq3APpmB3VT%2Ft%2BQBE0Qa%2BWF1AOeEzZR7EkB26189MgA4L%2FtZu27yfE2t9d0WzINsr560pFZ%2BRWtWxujONzh6UOUE2zwv81nMvzoiKMfNxF6P4DJ61Cyt0ZbjJFzQGBXezFzCdrYvMRPtqdekqOE0RZokSuh3Ai7bQ3mzk2HJPXbfmmzSkxZ1bLnY5xfrOZ2g1socK2rcFzDRRafR0b6TPSBIN8pxwezEz8Zi6op0hF5H37rEkcOEFlb546s4rX13GE%2FTqjWTsI7xzKj1IKfXaPqYC6Nfntkd4sPPBk0L0YvKWjH0%2FGwbOD4tJzSWJ3SoFiBoFQTc%2BS7W4uP%2B49F9WdRcJVoFf%2FQNIIIfGGUvUvITHA90aLxnXlHJWE7bWlm2Yp1ZJrCqCzZYSeoKWdM2FnVyj9hjwu3UIIZgPVdXLVs3QHuO0SN9gJS4QyNViACG3g603QPHUoilzEwX%2Fg2Zdp8Q5cn7NPmjuK0f0MWnFNLQ6jW5gP3SmL1PrKEJvkZw0U75MbeFbrfMHJ9Iip6Hassb%2BK9n1i88l3Sk8OjOyOgowrDuk7lLgvlKw7U9L85AYwKVaaJ%2BEEBxgSzMoZGxbv7ivQrm0X3Gs%2FkDEGSmoKiIkeC9PZ1ImaFo70A%2F%2Be8DCsxJjBBjqkAST%2FOCopVz6BHHxnTMgNtrQqYQCg9pTzJfgg05uLTP8i1Lc%2B6%2BYSUswLvhQvzhhdkVFR51Ym5iCjFG%2B%2BiWtFyjqyDPBF%2BFDgOz76BNJy1%2BWP%2FgSmStxbAqGxv1iXbixqLbv0Hpeg8tiHx4DWXctp5OcFfMVg7SVK%2BUfknh2gJsxGTJuMhrFcEgqgB%2BOpn8R%2BKce6cbCrGgrVAWRHziW3cUyRAvMA&X-Amz-Signature=e0e8f8448803132162dfd90d33fc7acaf2b3eaf04d831cf37830c41336ba2da6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDN63DG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCic6sVMKsf6yP1Tb3lGmhQ8ufNE6d98mRzpQtHZsxL3gIhAPnn4w%2FZp0%2BOdNhcM3eExWBxCJh07njviPKDmMhNN7IPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyfH1abDUkVStDoIlgq3APpmB3VT%2Ft%2BQBE0Qa%2BWF1AOeEzZR7EkB26189MgA4L%2FtZu27yfE2t9d0WzINsr560pFZ%2BRWtWxujONzh6UOUE2zwv81nMvzoiKMfNxF6P4DJ61Cyt0ZbjJFzQGBXezFzCdrYvMRPtqdekqOE0RZokSuh3Ai7bQ3mzk2HJPXbfmmzSkxZ1bLnY5xfrOZ2g1socK2rcFzDRRafR0b6TPSBIN8pxwezEz8Zi6op0hF5H37rEkcOEFlb546s4rX13GE%2FTqjWTsI7xzKj1IKfXaPqYC6Nfntkd4sPPBk0L0YvKWjH0%2FGwbOD4tJzSWJ3SoFiBoFQTc%2BS7W4uP%2B49F9WdRcJVoFf%2FQNIIIfGGUvUvITHA90aLxnXlHJWE7bWlm2Yp1ZJrCqCzZYSeoKWdM2FnVyj9hjwu3UIIZgPVdXLVs3QHuO0SN9gJS4QyNViACG3g603QPHUoilzEwX%2Fg2Zdp8Q5cn7NPmjuK0f0MWnFNLQ6jW5gP3SmL1PrKEJvkZw0U75MbeFbrfMHJ9Iip6Hassb%2BK9n1i88l3Sk8OjOyOgowrDuk7lLgvlKw7U9L85AYwKVaaJ%2BEEBxgSzMoZGxbv7ivQrm0X3Gs%2FkDEGSmoKiIkeC9PZ1ImaFo70A%2F%2Be8DCsxJjBBjqkAST%2FOCopVz6BHHxnTMgNtrQqYQCg9pTzJfgg05uLTP8i1Lc%2B6%2BYSUswLvhQvzhhdkVFR51Ym5iCjFG%2B%2BiWtFyjqyDPBF%2BFDgOz76BNJy1%2BWP%2FgSmStxbAqGxv1iXbixqLbv0Hpeg8tiHx4DWXctp5OcFfMVg7SVK%2BUfknh2gJsxGTJuMhrFcEgqgB%2BOpn8R%2BKce6cbCrGgrVAWRHziW3cUyRAvMA&X-Amz-Signature=44e38ff6ac9f235bfc0a745968be7aa25cb1977dd640ab35e7231d89e309b357&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDN63DG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCic6sVMKsf6yP1Tb3lGmhQ8ufNE6d98mRzpQtHZsxL3gIhAPnn4w%2FZp0%2BOdNhcM3eExWBxCJh07njviPKDmMhNN7IPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyfH1abDUkVStDoIlgq3APpmB3VT%2Ft%2BQBE0Qa%2BWF1AOeEzZR7EkB26189MgA4L%2FtZu27yfE2t9d0WzINsr560pFZ%2BRWtWxujONzh6UOUE2zwv81nMvzoiKMfNxF6P4DJ61Cyt0ZbjJFzQGBXezFzCdrYvMRPtqdekqOE0RZokSuh3Ai7bQ3mzk2HJPXbfmmzSkxZ1bLnY5xfrOZ2g1socK2rcFzDRRafR0b6TPSBIN8pxwezEz8Zi6op0hF5H37rEkcOEFlb546s4rX13GE%2FTqjWTsI7xzKj1IKfXaPqYC6Nfntkd4sPPBk0L0YvKWjH0%2FGwbOD4tJzSWJ3SoFiBoFQTc%2BS7W4uP%2B49F9WdRcJVoFf%2FQNIIIfGGUvUvITHA90aLxnXlHJWE7bWlm2Yp1ZJrCqCzZYSeoKWdM2FnVyj9hjwu3UIIZgPVdXLVs3QHuO0SN9gJS4QyNViACG3g603QPHUoilzEwX%2Fg2Zdp8Q5cn7NPmjuK0f0MWnFNLQ6jW5gP3SmL1PrKEJvkZw0U75MbeFbrfMHJ9Iip6Hassb%2BK9n1i88l3Sk8OjOyOgowrDuk7lLgvlKw7U9L85AYwKVaaJ%2BEEBxgSzMoZGxbv7ivQrm0X3Gs%2FkDEGSmoKiIkeC9PZ1ImaFo70A%2F%2Be8DCsxJjBBjqkAST%2FOCopVz6BHHxnTMgNtrQqYQCg9pTzJfgg05uLTP8i1Lc%2B6%2BYSUswLvhQvzhhdkVFR51Ym5iCjFG%2B%2BiWtFyjqyDPBF%2BFDgOz76BNJy1%2BWP%2FgSmStxbAqGxv1iXbixqLbv0Hpeg8tiHx4DWXctp5OcFfMVg7SVK%2BUfknh2gJsxGTJuMhrFcEgqgB%2BOpn8R%2BKce6cbCrGgrVAWRHziW3cUyRAvMA&X-Amz-Signature=1fc1eeda0845f8462afbcbf09b09073e2abc9ecdbaa6dc087af7e94c5e9e9f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDN63DG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCic6sVMKsf6yP1Tb3lGmhQ8ufNE6d98mRzpQtHZsxL3gIhAPnn4w%2FZp0%2BOdNhcM3eExWBxCJh07njviPKDmMhNN7IPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyfH1abDUkVStDoIlgq3APpmB3VT%2Ft%2BQBE0Qa%2BWF1AOeEzZR7EkB26189MgA4L%2FtZu27yfE2t9d0WzINsr560pFZ%2BRWtWxujONzh6UOUE2zwv81nMvzoiKMfNxF6P4DJ61Cyt0ZbjJFzQGBXezFzCdrYvMRPtqdekqOE0RZokSuh3Ai7bQ3mzk2HJPXbfmmzSkxZ1bLnY5xfrOZ2g1socK2rcFzDRRafR0b6TPSBIN8pxwezEz8Zi6op0hF5H37rEkcOEFlb546s4rX13GE%2FTqjWTsI7xzKj1IKfXaPqYC6Nfntkd4sPPBk0L0YvKWjH0%2FGwbOD4tJzSWJ3SoFiBoFQTc%2BS7W4uP%2B49F9WdRcJVoFf%2FQNIIIfGGUvUvITHA90aLxnXlHJWE7bWlm2Yp1ZJrCqCzZYSeoKWdM2FnVyj9hjwu3UIIZgPVdXLVs3QHuO0SN9gJS4QyNViACG3g603QPHUoilzEwX%2Fg2Zdp8Q5cn7NPmjuK0f0MWnFNLQ6jW5gP3SmL1PrKEJvkZw0U75MbeFbrfMHJ9Iip6Hassb%2BK9n1i88l3Sk8OjOyOgowrDuk7lLgvlKw7U9L85AYwKVaaJ%2BEEBxgSzMoZGxbv7ivQrm0X3Gs%2FkDEGSmoKiIkeC9PZ1ImaFo70A%2F%2Be8DCsxJjBBjqkAST%2FOCopVz6BHHxnTMgNtrQqYQCg9pTzJfgg05uLTP8i1Lc%2B6%2BYSUswLvhQvzhhdkVFR51Ym5iCjFG%2B%2BiWtFyjqyDPBF%2BFDgOz76BNJy1%2BWP%2FgSmStxbAqGxv1iXbixqLbv0Hpeg8tiHx4DWXctp5OcFfMVg7SVK%2BUfknh2gJsxGTJuMhrFcEgqgB%2BOpn8R%2BKce6cbCrGgrVAWRHziW3cUyRAvMA&X-Amz-Signature=19bb5e7a034975382678a832c6001058b10a00f1390baa048f2f0d9069b64d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDN63DG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCic6sVMKsf6yP1Tb3lGmhQ8ufNE6d98mRzpQtHZsxL3gIhAPnn4w%2FZp0%2BOdNhcM3eExWBxCJh07njviPKDmMhNN7IPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyfH1abDUkVStDoIlgq3APpmB3VT%2Ft%2BQBE0Qa%2BWF1AOeEzZR7EkB26189MgA4L%2FtZu27yfE2t9d0WzINsr560pFZ%2BRWtWxujONzh6UOUE2zwv81nMvzoiKMfNxF6P4DJ61Cyt0ZbjJFzQGBXezFzCdrYvMRPtqdekqOE0RZokSuh3Ai7bQ3mzk2HJPXbfmmzSkxZ1bLnY5xfrOZ2g1socK2rcFzDRRafR0b6TPSBIN8pxwezEz8Zi6op0hF5H37rEkcOEFlb546s4rX13GE%2FTqjWTsI7xzKj1IKfXaPqYC6Nfntkd4sPPBk0L0YvKWjH0%2FGwbOD4tJzSWJ3SoFiBoFQTc%2BS7W4uP%2B49F9WdRcJVoFf%2FQNIIIfGGUvUvITHA90aLxnXlHJWE7bWlm2Yp1ZJrCqCzZYSeoKWdM2FnVyj9hjwu3UIIZgPVdXLVs3QHuO0SN9gJS4QyNViACG3g603QPHUoilzEwX%2Fg2Zdp8Q5cn7NPmjuK0f0MWnFNLQ6jW5gP3SmL1PrKEJvkZw0U75MbeFbrfMHJ9Iip6Hassb%2BK9n1i88l3Sk8OjOyOgowrDuk7lLgvlKw7U9L85AYwKVaaJ%2BEEBxgSzMoZGxbv7ivQrm0X3Gs%2FkDEGSmoKiIkeC9PZ1ImaFo70A%2F%2Be8DCsxJjBBjqkAST%2FOCopVz6BHHxnTMgNtrQqYQCg9pTzJfgg05uLTP8i1Lc%2B6%2BYSUswLvhQvzhhdkVFR51Ym5iCjFG%2B%2BiWtFyjqyDPBF%2BFDgOz76BNJy1%2BWP%2FgSmStxbAqGxv1iXbixqLbv0Hpeg8tiHx4DWXctp5OcFfMVg7SVK%2BUfknh2gJsxGTJuMhrFcEgqgB%2BOpn8R%2BKce6cbCrGgrVAWRHziW3cUyRAvMA&X-Amz-Signature=8860c5eafcc5a8075a5ba01fe51fab9b3cd20cf3f1656a2cca13268d2ce50337&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDN63DG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCic6sVMKsf6yP1Tb3lGmhQ8ufNE6d98mRzpQtHZsxL3gIhAPnn4w%2FZp0%2BOdNhcM3eExWBxCJh07njviPKDmMhNN7IPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyfH1abDUkVStDoIlgq3APpmB3VT%2Ft%2BQBE0Qa%2BWF1AOeEzZR7EkB26189MgA4L%2FtZu27yfE2t9d0WzINsr560pFZ%2BRWtWxujONzh6UOUE2zwv81nMvzoiKMfNxF6P4DJ61Cyt0ZbjJFzQGBXezFzCdrYvMRPtqdekqOE0RZokSuh3Ai7bQ3mzk2HJPXbfmmzSkxZ1bLnY5xfrOZ2g1socK2rcFzDRRafR0b6TPSBIN8pxwezEz8Zi6op0hF5H37rEkcOEFlb546s4rX13GE%2FTqjWTsI7xzKj1IKfXaPqYC6Nfntkd4sPPBk0L0YvKWjH0%2FGwbOD4tJzSWJ3SoFiBoFQTc%2BS7W4uP%2B49F9WdRcJVoFf%2FQNIIIfGGUvUvITHA90aLxnXlHJWE7bWlm2Yp1ZJrCqCzZYSeoKWdM2FnVyj9hjwu3UIIZgPVdXLVs3QHuO0SN9gJS4QyNViACG3g603QPHUoilzEwX%2Fg2Zdp8Q5cn7NPmjuK0f0MWnFNLQ6jW5gP3SmL1PrKEJvkZw0U75MbeFbrfMHJ9Iip6Hassb%2BK9n1i88l3Sk8OjOyOgowrDuk7lLgvlKw7U9L85AYwKVaaJ%2BEEBxgSzMoZGxbv7ivQrm0X3Gs%2FkDEGSmoKiIkeC9PZ1ImaFo70A%2F%2Be8DCsxJjBBjqkAST%2FOCopVz6BHHxnTMgNtrQqYQCg9pTzJfgg05uLTP8i1Lc%2B6%2BYSUswLvhQvzhhdkVFR51Ym5iCjFG%2B%2BiWtFyjqyDPBF%2BFDgOz76BNJy1%2BWP%2FgSmStxbAqGxv1iXbixqLbv0Hpeg8tiHx4DWXctp5OcFfMVg7SVK%2BUfknh2gJsxGTJuMhrFcEgqgB%2BOpn8R%2BKce6cbCrGgrVAWRHziW3cUyRAvMA&X-Amz-Signature=b50c79f25e7036c50a125cf542f3c7b1e0eaa5542bb944fff799c5540c4ffee1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDN63DG%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCic6sVMKsf6yP1Tb3lGmhQ8ufNE6d98mRzpQtHZsxL3gIhAPnn4w%2FZp0%2BOdNhcM3eExWBxCJh07njviPKDmMhNN7IPKv8DCDIQABoMNjM3NDIzMTgzODA1IgyfH1abDUkVStDoIlgq3APpmB3VT%2Ft%2BQBE0Qa%2BWF1AOeEzZR7EkB26189MgA4L%2FtZu27yfE2t9d0WzINsr560pFZ%2BRWtWxujONzh6UOUE2zwv81nMvzoiKMfNxF6P4DJ61Cyt0ZbjJFzQGBXezFzCdrYvMRPtqdekqOE0RZokSuh3Ai7bQ3mzk2HJPXbfmmzSkxZ1bLnY5xfrOZ2g1socK2rcFzDRRafR0b6TPSBIN8pxwezEz8Zi6op0hF5H37rEkcOEFlb546s4rX13GE%2FTqjWTsI7xzKj1IKfXaPqYC6Nfntkd4sPPBk0L0YvKWjH0%2FGwbOD4tJzSWJ3SoFiBoFQTc%2BS7W4uP%2B49F9WdRcJVoFf%2FQNIIIfGGUvUvITHA90aLxnXlHJWE7bWlm2Yp1ZJrCqCzZYSeoKWdM2FnVyj9hjwu3UIIZgPVdXLVs3QHuO0SN9gJS4QyNViACG3g603QPHUoilzEwX%2Fg2Zdp8Q5cn7NPmjuK0f0MWnFNLQ6jW5gP3SmL1PrKEJvkZw0U75MbeFbrfMHJ9Iip6Hassb%2BK9n1i88l3Sk8OjOyOgowrDuk7lLgvlKw7U9L85AYwKVaaJ%2BEEBxgSzMoZGxbv7ivQrm0X3Gs%2FkDEGSmoKiIkeC9PZ1ImaFo70A%2F%2Be8DCsxJjBBjqkAST%2FOCopVz6BHHxnTMgNtrQqYQCg9pTzJfgg05uLTP8i1Lc%2B6%2BYSUswLvhQvzhhdkVFR51Ym5iCjFG%2B%2BiWtFyjqyDPBF%2BFDgOz76BNJy1%2BWP%2FgSmStxbAqGxv1iXbixqLbv0Hpeg8tiHx4DWXctp5OcFfMVg7SVK%2BUfknh2gJsxGTJuMhrFcEgqgB%2BOpn8R%2BKce6cbCrGgrVAWRHziW3cUyRAvMA&X-Amz-Signature=5506a370043030bcb5b88305d79a2e68d4abb677dff90fdc8a222284eb2c0155&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
