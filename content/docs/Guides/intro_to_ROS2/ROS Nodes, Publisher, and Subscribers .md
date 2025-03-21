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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKQW7VO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCgrvWR2tq12jFs87S9BaiMpPaW5uwZpp1O1aktvfTLrQIgEQSM6I%2BqjB5GBTkeaCx3F6JPBLVFOld%2FkfD0PCl97SMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd%2B625iWuNsQO3OACrcAy5Ibh0OOAszWC0LcMlx5Ot1i5DEZ%2BXcYOZkNSI4DriNxEB3gNdJBNsIzrGcZDsbCuj%2F20dA3xXBdpzbEfe3LNngLXGzOEXWgt1%2FlmFYLym3h5GU7m7FmU2XRsPKOqtmy%2BHcda3qaTDVIu3KYSKOvf9OVW1gM%2BrOFHgknzWe9aI7czJlpUrW1%2FnAvBxjfl681hc%2B2qxrSDQ5XZRcRmpS%2Bic6kXq16xeFMfKDJMY%2BKMFdjzsVtrslGg8cRESTPTNKl9lzmCOdLIdQxHjxyxXXSVMu6h9lp4lztX3zkHaJsYg7KeMVotcEbxKKDqlFILJB4Y4TDz62rJ7M3YERH3CFwqk5GeKDPZ3B%2Fo5kSbXet8paRaWIA86TEgfSlvn4KyQv1SZSpJD%2BeAFd3LzXef4hDe%2F%2Fd4AQa%2BZoAZ9LRynG4uiF7rg8jvwnI%2FwAyY28v1ApBseCwtD4pZ3jAns4CJVqYgznLl2bTpy26DSAyDG8XG%2BX2GR%2BLJsJ9lkYgfHtkb%2B8UQFf911eWw71QO%2FCsdw8tKMJYz%2FIX8WgiT%2B88rAqcGtFBG%2FKAILKWbDIzuHlQbJmWKDwxaa3F5VC%2FwBfafK%2BVFup0vMfp3rXnpp%2BJS9fHUR6J%2FSH1IDVAfjoD0KwMJqn8r4GOqUBhF1F2qQ4I8tlh%2Fd2XuKN%2FyYR9AI9pTvsLBWbjm8YIjhRN6duz9YeAxlluJxeiTi%2BPlAEgnWLPg%2FAqS6M3%2FHzwz2700yblhpgl%2Fa89erJLGqF3o2WuPneU9G5t4czZ5FH9rk02rh0bToXmAwkADPAfHbDwGzJNSDELUo0Ho6z8OYm9V4VL3pW6ybJDAyxnmo5Xh7yKKwde7IycFHGt34z3BfMF7t0&X-Amz-Signature=97835126c245ccf12cd66003e264eb1ff8d6cdd5dbcf13fed9ab26d6d2a1dd85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKQW7VO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCgrvWR2tq12jFs87S9BaiMpPaW5uwZpp1O1aktvfTLrQIgEQSM6I%2BqjB5GBTkeaCx3F6JPBLVFOld%2FkfD0PCl97SMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd%2B625iWuNsQO3OACrcAy5Ibh0OOAszWC0LcMlx5Ot1i5DEZ%2BXcYOZkNSI4DriNxEB3gNdJBNsIzrGcZDsbCuj%2F20dA3xXBdpzbEfe3LNngLXGzOEXWgt1%2FlmFYLym3h5GU7m7FmU2XRsPKOqtmy%2BHcda3qaTDVIu3KYSKOvf9OVW1gM%2BrOFHgknzWe9aI7czJlpUrW1%2FnAvBxjfl681hc%2B2qxrSDQ5XZRcRmpS%2Bic6kXq16xeFMfKDJMY%2BKMFdjzsVtrslGg8cRESTPTNKl9lzmCOdLIdQxHjxyxXXSVMu6h9lp4lztX3zkHaJsYg7KeMVotcEbxKKDqlFILJB4Y4TDz62rJ7M3YERH3CFwqk5GeKDPZ3B%2Fo5kSbXet8paRaWIA86TEgfSlvn4KyQv1SZSpJD%2BeAFd3LzXef4hDe%2F%2Fd4AQa%2BZoAZ9LRynG4uiF7rg8jvwnI%2FwAyY28v1ApBseCwtD4pZ3jAns4CJVqYgznLl2bTpy26DSAyDG8XG%2BX2GR%2BLJsJ9lkYgfHtkb%2B8UQFf911eWw71QO%2FCsdw8tKMJYz%2FIX8WgiT%2B88rAqcGtFBG%2FKAILKWbDIzuHlQbJmWKDwxaa3F5VC%2FwBfafK%2BVFup0vMfp3rXnpp%2BJS9fHUR6J%2FSH1IDVAfjoD0KwMJqn8r4GOqUBhF1F2qQ4I8tlh%2Fd2XuKN%2FyYR9AI9pTvsLBWbjm8YIjhRN6duz9YeAxlluJxeiTi%2BPlAEgnWLPg%2FAqS6M3%2FHzwz2700yblhpgl%2Fa89erJLGqF3o2WuPneU9G5t4czZ5FH9rk02rh0bToXmAwkADPAfHbDwGzJNSDELUo0Ho6z8OYm9V4VL3pW6ybJDAyxnmo5Xh7yKKwde7IycFHGt34z3BfMF7t0&X-Amz-Signature=279cf4d60fead37fa9304ca2e97ef8cd383a7f9a6c37d1f58309688e700bc718&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKQW7VO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCgrvWR2tq12jFs87S9BaiMpPaW5uwZpp1O1aktvfTLrQIgEQSM6I%2BqjB5GBTkeaCx3F6JPBLVFOld%2FkfD0PCl97SMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd%2B625iWuNsQO3OACrcAy5Ibh0OOAszWC0LcMlx5Ot1i5DEZ%2BXcYOZkNSI4DriNxEB3gNdJBNsIzrGcZDsbCuj%2F20dA3xXBdpzbEfe3LNngLXGzOEXWgt1%2FlmFYLym3h5GU7m7FmU2XRsPKOqtmy%2BHcda3qaTDVIu3KYSKOvf9OVW1gM%2BrOFHgknzWe9aI7czJlpUrW1%2FnAvBxjfl681hc%2B2qxrSDQ5XZRcRmpS%2Bic6kXq16xeFMfKDJMY%2BKMFdjzsVtrslGg8cRESTPTNKl9lzmCOdLIdQxHjxyxXXSVMu6h9lp4lztX3zkHaJsYg7KeMVotcEbxKKDqlFILJB4Y4TDz62rJ7M3YERH3CFwqk5GeKDPZ3B%2Fo5kSbXet8paRaWIA86TEgfSlvn4KyQv1SZSpJD%2BeAFd3LzXef4hDe%2F%2Fd4AQa%2BZoAZ9LRynG4uiF7rg8jvwnI%2FwAyY28v1ApBseCwtD4pZ3jAns4CJVqYgznLl2bTpy26DSAyDG8XG%2BX2GR%2BLJsJ9lkYgfHtkb%2B8UQFf911eWw71QO%2FCsdw8tKMJYz%2FIX8WgiT%2B88rAqcGtFBG%2FKAILKWbDIzuHlQbJmWKDwxaa3F5VC%2FwBfafK%2BVFup0vMfp3rXnpp%2BJS9fHUR6J%2FSH1IDVAfjoD0KwMJqn8r4GOqUBhF1F2qQ4I8tlh%2Fd2XuKN%2FyYR9AI9pTvsLBWbjm8YIjhRN6duz9YeAxlluJxeiTi%2BPlAEgnWLPg%2FAqS6M3%2FHzwz2700yblhpgl%2Fa89erJLGqF3o2WuPneU9G5t4czZ5FH9rk02rh0bToXmAwkADPAfHbDwGzJNSDELUo0Ho6z8OYm9V4VL3pW6ybJDAyxnmo5Xh7yKKwde7IycFHGt34z3BfMF7t0&X-Amz-Signature=9986a032564a21bbd51cafdd0fab59f88919d6e6809f91731b8a263183ea484c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKQW7VO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCgrvWR2tq12jFs87S9BaiMpPaW5uwZpp1O1aktvfTLrQIgEQSM6I%2BqjB5GBTkeaCx3F6JPBLVFOld%2FkfD0PCl97SMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd%2B625iWuNsQO3OACrcAy5Ibh0OOAszWC0LcMlx5Ot1i5DEZ%2BXcYOZkNSI4DriNxEB3gNdJBNsIzrGcZDsbCuj%2F20dA3xXBdpzbEfe3LNngLXGzOEXWgt1%2FlmFYLym3h5GU7m7FmU2XRsPKOqtmy%2BHcda3qaTDVIu3KYSKOvf9OVW1gM%2BrOFHgknzWe9aI7czJlpUrW1%2FnAvBxjfl681hc%2B2qxrSDQ5XZRcRmpS%2Bic6kXq16xeFMfKDJMY%2BKMFdjzsVtrslGg8cRESTPTNKl9lzmCOdLIdQxHjxyxXXSVMu6h9lp4lztX3zkHaJsYg7KeMVotcEbxKKDqlFILJB4Y4TDz62rJ7M3YERH3CFwqk5GeKDPZ3B%2Fo5kSbXet8paRaWIA86TEgfSlvn4KyQv1SZSpJD%2BeAFd3LzXef4hDe%2F%2Fd4AQa%2BZoAZ9LRynG4uiF7rg8jvwnI%2FwAyY28v1ApBseCwtD4pZ3jAns4CJVqYgznLl2bTpy26DSAyDG8XG%2BX2GR%2BLJsJ9lkYgfHtkb%2B8UQFf911eWw71QO%2FCsdw8tKMJYz%2FIX8WgiT%2B88rAqcGtFBG%2FKAILKWbDIzuHlQbJmWKDwxaa3F5VC%2FwBfafK%2BVFup0vMfp3rXnpp%2BJS9fHUR6J%2FSH1IDVAfjoD0KwMJqn8r4GOqUBhF1F2qQ4I8tlh%2Fd2XuKN%2FyYR9AI9pTvsLBWbjm8YIjhRN6duz9YeAxlluJxeiTi%2BPlAEgnWLPg%2FAqS6M3%2FHzwz2700yblhpgl%2Fa89erJLGqF3o2WuPneU9G5t4czZ5FH9rk02rh0bToXmAwkADPAfHbDwGzJNSDELUo0Ho6z8OYm9V4VL3pW6ybJDAyxnmo5Xh7yKKwde7IycFHGt34z3BfMF7t0&X-Amz-Signature=64dc759a674451a8cc2135690c156dcb74cb7d62bdd977b14409c6f88810051e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKQW7VO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCgrvWR2tq12jFs87S9BaiMpPaW5uwZpp1O1aktvfTLrQIgEQSM6I%2BqjB5GBTkeaCx3F6JPBLVFOld%2FkfD0PCl97SMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd%2B625iWuNsQO3OACrcAy5Ibh0OOAszWC0LcMlx5Ot1i5DEZ%2BXcYOZkNSI4DriNxEB3gNdJBNsIzrGcZDsbCuj%2F20dA3xXBdpzbEfe3LNngLXGzOEXWgt1%2FlmFYLym3h5GU7m7FmU2XRsPKOqtmy%2BHcda3qaTDVIu3KYSKOvf9OVW1gM%2BrOFHgknzWe9aI7czJlpUrW1%2FnAvBxjfl681hc%2B2qxrSDQ5XZRcRmpS%2Bic6kXq16xeFMfKDJMY%2BKMFdjzsVtrslGg8cRESTPTNKl9lzmCOdLIdQxHjxyxXXSVMu6h9lp4lztX3zkHaJsYg7KeMVotcEbxKKDqlFILJB4Y4TDz62rJ7M3YERH3CFwqk5GeKDPZ3B%2Fo5kSbXet8paRaWIA86TEgfSlvn4KyQv1SZSpJD%2BeAFd3LzXef4hDe%2F%2Fd4AQa%2BZoAZ9LRynG4uiF7rg8jvwnI%2FwAyY28v1ApBseCwtD4pZ3jAns4CJVqYgznLl2bTpy26DSAyDG8XG%2BX2GR%2BLJsJ9lkYgfHtkb%2B8UQFf911eWw71QO%2FCsdw8tKMJYz%2FIX8WgiT%2B88rAqcGtFBG%2FKAILKWbDIzuHlQbJmWKDwxaa3F5VC%2FwBfafK%2BVFup0vMfp3rXnpp%2BJS9fHUR6J%2FSH1IDVAfjoD0KwMJqn8r4GOqUBhF1F2qQ4I8tlh%2Fd2XuKN%2FyYR9AI9pTvsLBWbjm8YIjhRN6duz9YeAxlluJxeiTi%2BPlAEgnWLPg%2FAqS6M3%2FHzwz2700yblhpgl%2Fa89erJLGqF3o2WuPneU9G5t4czZ5FH9rk02rh0bToXmAwkADPAfHbDwGzJNSDELUo0Ho6z8OYm9V4VL3pW6ybJDAyxnmo5Xh7yKKwde7IycFHGt34z3BfMF7t0&X-Amz-Signature=589e7cb37fd6b35ff17dc88875ccb0aef406aaef8910055506777443fa9ea7a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKQW7VO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCgrvWR2tq12jFs87S9BaiMpPaW5uwZpp1O1aktvfTLrQIgEQSM6I%2BqjB5GBTkeaCx3F6JPBLVFOld%2FkfD0PCl97SMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd%2B625iWuNsQO3OACrcAy5Ibh0OOAszWC0LcMlx5Ot1i5DEZ%2BXcYOZkNSI4DriNxEB3gNdJBNsIzrGcZDsbCuj%2F20dA3xXBdpzbEfe3LNngLXGzOEXWgt1%2FlmFYLym3h5GU7m7FmU2XRsPKOqtmy%2BHcda3qaTDVIu3KYSKOvf9OVW1gM%2BrOFHgknzWe9aI7czJlpUrW1%2FnAvBxjfl681hc%2B2qxrSDQ5XZRcRmpS%2Bic6kXq16xeFMfKDJMY%2BKMFdjzsVtrslGg8cRESTPTNKl9lzmCOdLIdQxHjxyxXXSVMu6h9lp4lztX3zkHaJsYg7KeMVotcEbxKKDqlFILJB4Y4TDz62rJ7M3YERH3CFwqk5GeKDPZ3B%2Fo5kSbXet8paRaWIA86TEgfSlvn4KyQv1SZSpJD%2BeAFd3LzXef4hDe%2F%2Fd4AQa%2BZoAZ9LRynG4uiF7rg8jvwnI%2FwAyY28v1ApBseCwtD4pZ3jAns4CJVqYgznLl2bTpy26DSAyDG8XG%2BX2GR%2BLJsJ9lkYgfHtkb%2B8UQFf911eWw71QO%2FCsdw8tKMJYz%2FIX8WgiT%2B88rAqcGtFBG%2FKAILKWbDIzuHlQbJmWKDwxaa3F5VC%2FwBfafK%2BVFup0vMfp3rXnpp%2BJS9fHUR6J%2FSH1IDVAfjoD0KwMJqn8r4GOqUBhF1F2qQ4I8tlh%2Fd2XuKN%2FyYR9AI9pTvsLBWbjm8YIjhRN6duz9YeAxlluJxeiTi%2BPlAEgnWLPg%2FAqS6M3%2FHzwz2700yblhpgl%2Fa89erJLGqF3o2WuPneU9G5t4czZ5FH9rk02rh0bToXmAwkADPAfHbDwGzJNSDELUo0Ho6z8OYm9V4VL3pW6ybJDAyxnmo5Xh7yKKwde7IycFHGt34z3BfMF7t0&X-Amz-Signature=35616acb4fa2e5a7e65567496d4355b4711073d558290b4b03decb560a984c59&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKQW7VO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCgrvWR2tq12jFs87S9BaiMpPaW5uwZpp1O1aktvfTLrQIgEQSM6I%2BqjB5GBTkeaCx3F6JPBLVFOld%2FkfD0PCl97SMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd%2B625iWuNsQO3OACrcAy5Ibh0OOAszWC0LcMlx5Ot1i5DEZ%2BXcYOZkNSI4DriNxEB3gNdJBNsIzrGcZDsbCuj%2F20dA3xXBdpzbEfe3LNngLXGzOEXWgt1%2FlmFYLym3h5GU7m7FmU2XRsPKOqtmy%2BHcda3qaTDVIu3KYSKOvf9OVW1gM%2BrOFHgknzWe9aI7czJlpUrW1%2FnAvBxjfl681hc%2B2qxrSDQ5XZRcRmpS%2Bic6kXq16xeFMfKDJMY%2BKMFdjzsVtrslGg8cRESTPTNKl9lzmCOdLIdQxHjxyxXXSVMu6h9lp4lztX3zkHaJsYg7KeMVotcEbxKKDqlFILJB4Y4TDz62rJ7M3YERH3CFwqk5GeKDPZ3B%2Fo5kSbXet8paRaWIA86TEgfSlvn4KyQv1SZSpJD%2BeAFd3LzXef4hDe%2F%2Fd4AQa%2BZoAZ9LRynG4uiF7rg8jvwnI%2FwAyY28v1ApBseCwtD4pZ3jAns4CJVqYgznLl2bTpy26DSAyDG8XG%2BX2GR%2BLJsJ9lkYgfHtkb%2B8UQFf911eWw71QO%2FCsdw8tKMJYz%2FIX8WgiT%2B88rAqcGtFBG%2FKAILKWbDIzuHlQbJmWKDwxaa3F5VC%2FwBfafK%2BVFup0vMfp3rXnpp%2BJS9fHUR6J%2FSH1IDVAfjoD0KwMJqn8r4GOqUBhF1F2qQ4I8tlh%2Fd2XuKN%2FyYR9AI9pTvsLBWbjm8YIjhRN6duz9YeAxlluJxeiTi%2BPlAEgnWLPg%2FAqS6M3%2FHzwz2700yblhpgl%2Fa89erJLGqF3o2WuPneU9G5t4czZ5FH9rk02rh0bToXmAwkADPAfHbDwGzJNSDELUo0Ho6z8OYm9V4VL3pW6ybJDAyxnmo5Xh7yKKwde7IycFHGt34z3BfMF7t0&X-Amz-Signature=dab8ba57c2218160453e6cab765539971701355b8cd67557ebb3955fe775b920&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBKQW7VO%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCgrvWR2tq12jFs87S9BaiMpPaW5uwZpp1O1aktvfTLrQIgEQSM6I%2BqjB5GBTkeaCx3F6JPBLVFOld%2FkfD0PCl97SMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGd%2B625iWuNsQO3OACrcAy5Ibh0OOAszWC0LcMlx5Ot1i5DEZ%2BXcYOZkNSI4DriNxEB3gNdJBNsIzrGcZDsbCuj%2F20dA3xXBdpzbEfe3LNngLXGzOEXWgt1%2FlmFYLym3h5GU7m7FmU2XRsPKOqtmy%2BHcda3qaTDVIu3KYSKOvf9OVW1gM%2BrOFHgknzWe9aI7czJlpUrW1%2FnAvBxjfl681hc%2B2qxrSDQ5XZRcRmpS%2Bic6kXq16xeFMfKDJMY%2BKMFdjzsVtrslGg8cRESTPTNKl9lzmCOdLIdQxHjxyxXXSVMu6h9lp4lztX3zkHaJsYg7KeMVotcEbxKKDqlFILJB4Y4TDz62rJ7M3YERH3CFwqk5GeKDPZ3B%2Fo5kSbXet8paRaWIA86TEgfSlvn4KyQv1SZSpJD%2BeAFd3LzXef4hDe%2F%2Fd4AQa%2BZoAZ9LRynG4uiF7rg8jvwnI%2FwAyY28v1ApBseCwtD4pZ3jAns4CJVqYgznLl2bTpy26DSAyDG8XG%2BX2GR%2BLJsJ9lkYgfHtkb%2B8UQFf911eWw71QO%2FCsdw8tKMJYz%2FIX8WgiT%2B88rAqcGtFBG%2FKAILKWbDIzuHlQbJmWKDwxaa3F5VC%2FwBfafK%2BVFup0vMfp3rXnpp%2BJS9fHUR6J%2FSH1IDVAfjoD0KwMJqn8r4GOqUBhF1F2qQ4I8tlh%2Fd2XuKN%2FyYR9AI9pTvsLBWbjm8YIjhRN6duz9YeAxlluJxeiTi%2BPlAEgnWLPg%2FAqS6M3%2FHzwz2700yblhpgl%2Fa89erJLGqF3o2WuPneU9G5t4czZ5FH9rk02rh0bToXmAwkADPAfHbDwGzJNSDELUo0Ho6z8OYm9V4VL3pW6ybJDAyxnmo5Xh7yKKwde7IycFHGt34z3BfMF7t0&X-Amz-Signature=b033f3dfef11c79907c9f4da0edbcc481b3fc6742d332c9c5abc71efd5b471d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
