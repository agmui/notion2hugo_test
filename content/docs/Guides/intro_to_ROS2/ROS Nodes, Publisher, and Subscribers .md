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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEF4HLE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID5TIJbZlW2lEzMF0OuJXNmnb2CRfCRhPtONbc4TLMM6AiEAlMEdKmoENstEJXUzo2EkdyLMh7hKfGVjM%2Fjadm0SROAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGaPrEwAP9MjImZscircA6dJpm1%2BTTo6SFao%2BeGy2cui3cF4UVYDYO%2BiYn1JSVnjpZGVVHI2J8ro%2B3epcScSntXJyfMrjsFbSXrZpF2S6LreCkYefaj%2BQ1YDj4jQQAjVjeQemWJgvgz8jDEJWQSiKzrUMjFdsUujwlJdaojVINQxSWrgjtWHlJBDeU0F9nzIOoc1ACF4xLCx5McCly1dT89SbxzBRoldlmtBd1dWGmJ8Gr9eQn7JnmoAyxquDijrfWRSZ7JbnIuBBjXveeInLwBMPBmAMp%2F8rtS10BACVAuNbpE8OtYwCFCzBTk9cNfYDbiE0NPB%2FnjaIZJVYZMGxfywAyNTG7xdIsHxOZkmYI56WVfsGlEfcyScmW0%2FicxGiJIc%2BTWFu7WcAoMT3GCUhBAyFL6KkgqyVi7aCq130tHi7beoDosMzyBmOD73yfHVspSreAepSGnZzrRguotliEMJBbw58uKViBKiueaNfd0kD8WAd8JUHqDXevWSz6ajeqD4nsOJZbkfgQUAfI1mkixiJsVW5tSvuKnFjMdn%2BilJP3vOp3GP4hLCVaGyNSd76KSoNHtjjUoNQqmhWts5L19PUWlsyCaId9dMMx3PLrjtw4iR%2FB3dkntjmG4gT5Hw3OgJOqioX4Hdv%2F5gMNjnpcMGOqUBE%2BdhRhjmH4ppvUCK3BzuD57WY%2BG5DruV0I4dzwrPko4ec%2Ffng3iLpnCD8q%2BbgDfw6KcQRvVu63Hjx%2BPL1fPuBxDqQ0BtdvUra7kGEWNHmueEsmGwYVmNEZQlsNn0f1VBJgTVHdExBm3051QqOjRyYOxi4lPJYApzEGifzINudL4YPC5a47vVoTJCOxuRRqdMRTQ5W3eJQK36FYfjXtBKrriLqp4i&X-Amz-Signature=51de452769d5e22b35f9ed65a06aad0a451e426c2d141710b0f64cb93622c6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEF4HLE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID5TIJbZlW2lEzMF0OuJXNmnb2CRfCRhPtONbc4TLMM6AiEAlMEdKmoENstEJXUzo2EkdyLMh7hKfGVjM%2Fjadm0SROAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGaPrEwAP9MjImZscircA6dJpm1%2BTTo6SFao%2BeGy2cui3cF4UVYDYO%2BiYn1JSVnjpZGVVHI2J8ro%2B3epcScSntXJyfMrjsFbSXrZpF2S6LreCkYefaj%2BQ1YDj4jQQAjVjeQemWJgvgz8jDEJWQSiKzrUMjFdsUujwlJdaojVINQxSWrgjtWHlJBDeU0F9nzIOoc1ACF4xLCx5McCly1dT89SbxzBRoldlmtBd1dWGmJ8Gr9eQn7JnmoAyxquDijrfWRSZ7JbnIuBBjXveeInLwBMPBmAMp%2F8rtS10BACVAuNbpE8OtYwCFCzBTk9cNfYDbiE0NPB%2FnjaIZJVYZMGxfywAyNTG7xdIsHxOZkmYI56WVfsGlEfcyScmW0%2FicxGiJIc%2BTWFu7WcAoMT3GCUhBAyFL6KkgqyVi7aCq130tHi7beoDosMzyBmOD73yfHVspSreAepSGnZzrRguotliEMJBbw58uKViBKiueaNfd0kD8WAd8JUHqDXevWSz6ajeqD4nsOJZbkfgQUAfI1mkixiJsVW5tSvuKnFjMdn%2BilJP3vOp3GP4hLCVaGyNSd76KSoNHtjjUoNQqmhWts5L19PUWlsyCaId9dMMx3PLrjtw4iR%2FB3dkntjmG4gT5Hw3OgJOqioX4Hdv%2F5gMNjnpcMGOqUBE%2BdhRhjmH4ppvUCK3BzuD57WY%2BG5DruV0I4dzwrPko4ec%2Ffng3iLpnCD8q%2BbgDfw6KcQRvVu63Hjx%2BPL1fPuBxDqQ0BtdvUra7kGEWNHmueEsmGwYVmNEZQlsNn0f1VBJgTVHdExBm3051QqOjRyYOxi4lPJYApzEGifzINudL4YPC5a47vVoTJCOxuRRqdMRTQ5W3eJQK36FYfjXtBKrriLqp4i&X-Amz-Signature=523a33bffba8358d2a38af715f52ecf8489eff1f2b7fc4bd871b6d9b92ae1ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEF4HLE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID5TIJbZlW2lEzMF0OuJXNmnb2CRfCRhPtONbc4TLMM6AiEAlMEdKmoENstEJXUzo2EkdyLMh7hKfGVjM%2Fjadm0SROAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGaPrEwAP9MjImZscircA6dJpm1%2BTTo6SFao%2BeGy2cui3cF4UVYDYO%2BiYn1JSVnjpZGVVHI2J8ro%2B3epcScSntXJyfMrjsFbSXrZpF2S6LreCkYefaj%2BQ1YDj4jQQAjVjeQemWJgvgz8jDEJWQSiKzrUMjFdsUujwlJdaojVINQxSWrgjtWHlJBDeU0F9nzIOoc1ACF4xLCx5McCly1dT89SbxzBRoldlmtBd1dWGmJ8Gr9eQn7JnmoAyxquDijrfWRSZ7JbnIuBBjXveeInLwBMPBmAMp%2F8rtS10BACVAuNbpE8OtYwCFCzBTk9cNfYDbiE0NPB%2FnjaIZJVYZMGxfywAyNTG7xdIsHxOZkmYI56WVfsGlEfcyScmW0%2FicxGiJIc%2BTWFu7WcAoMT3GCUhBAyFL6KkgqyVi7aCq130tHi7beoDosMzyBmOD73yfHVspSreAepSGnZzrRguotliEMJBbw58uKViBKiueaNfd0kD8WAd8JUHqDXevWSz6ajeqD4nsOJZbkfgQUAfI1mkixiJsVW5tSvuKnFjMdn%2BilJP3vOp3GP4hLCVaGyNSd76KSoNHtjjUoNQqmhWts5L19PUWlsyCaId9dMMx3PLrjtw4iR%2FB3dkntjmG4gT5Hw3OgJOqioX4Hdv%2F5gMNjnpcMGOqUBE%2BdhRhjmH4ppvUCK3BzuD57WY%2BG5DruV0I4dzwrPko4ec%2Ffng3iLpnCD8q%2BbgDfw6KcQRvVu63Hjx%2BPL1fPuBxDqQ0BtdvUra7kGEWNHmueEsmGwYVmNEZQlsNn0f1VBJgTVHdExBm3051QqOjRyYOxi4lPJYApzEGifzINudL4YPC5a47vVoTJCOxuRRqdMRTQ5W3eJQK36FYfjXtBKrriLqp4i&X-Amz-Signature=b977ff13a77d5d4c907f72d71eb56defbadab53650e8e6f6930605fab49120f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEF4HLE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID5TIJbZlW2lEzMF0OuJXNmnb2CRfCRhPtONbc4TLMM6AiEAlMEdKmoENstEJXUzo2EkdyLMh7hKfGVjM%2Fjadm0SROAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGaPrEwAP9MjImZscircA6dJpm1%2BTTo6SFao%2BeGy2cui3cF4UVYDYO%2BiYn1JSVnjpZGVVHI2J8ro%2B3epcScSntXJyfMrjsFbSXrZpF2S6LreCkYefaj%2BQ1YDj4jQQAjVjeQemWJgvgz8jDEJWQSiKzrUMjFdsUujwlJdaojVINQxSWrgjtWHlJBDeU0F9nzIOoc1ACF4xLCx5McCly1dT89SbxzBRoldlmtBd1dWGmJ8Gr9eQn7JnmoAyxquDijrfWRSZ7JbnIuBBjXveeInLwBMPBmAMp%2F8rtS10BACVAuNbpE8OtYwCFCzBTk9cNfYDbiE0NPB%2FnjaIZJVYZMGxfywAyNTG7xdIsHxOZkmYI56WVfsGlEfcyScmW0%2FicxGiJIc%2BTWFu7WcAoMT3GCUhBAyFL6KkgqyVi7aCq130tHi7beoDosMzyBmOD73yfHVspSreAepSGnZzrRguotliEMJBbw58uKViBKiueaNfd0kD8WAd8JUHqDXevWSz6ajeqD4nsOJZbkfgQUAfI1mkixiJsVW5tSvuKnFjMdn%2BilJP3vOp3GP4hLCVaGyNSd76KSoNHtjjUoNQqmhWts5L19PUWlsyCaId9dMMx3PLrjtw4iR%2FB3dkntjmG4gT5Hw3OgJOqioX4Hdv%2F5gMNjnpcMGOqUBE%2BdhRhjmH4ppvUCK3BzuD57WY%2BG5DruV0I4dzwrPko4ec%2Ffng3iLpnCD8q%2BbgDfw6KcQRvVu63Hjx%2BPL1fPuBxDqQ0BtdvUra7kGEWNHmueEsmGwYVmNEZQlsNn0f1VBJgTVHdExBm3051QqOjRyYOxi4lPJYApzEGifzINudL4YPC5a47vVoTJCOxuRRqdMRTQ5W3eJQK36FYfjXtBKrriLqp4i&X-Amz-Signature=fd3414c66da906f252398fe9bbc3d1e2e4964709fefec4b38c942d2c36f4bb08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEF4HLE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID5TIJbZlW2lEzMF0OuJXNmnb2CRfCRhPtONbc4TLMM6AiEAlMEdKmoENstEJXUzo2EkdyLMh7hKfGVjM%2Fjadm0SROAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGaPrEwAP9MjImZscircA6dJpm1%2BTTo6SFao%2BeGy2cui3cF4UVYDYO%2BiYn1JSVnjpZGVVHI2J8ro%2B3epcScSntXJyfMrjsFbSXrZpF2S6LreCkYefaj%2BQ1YDj4jQQAjVjeQemWJgvgz8jDEJWQSiKzrUMjFdsUujwlJdaojVINQxSWrgjtWHlJBDeU0F9nzIOoc1ACF4xLCx5McCly1dT89SbxzBRoldlmtBd1dWGmJ8Gr9eQn7JnmoAyxquDijrfWRSZ7JbnIuBBjXveeInLwBMPBmAMp%2F8rtS10BACVAuNbpE8OtYwCFCzBTk9cNfYDbiE0NPB%2FnjaIZJVYZMGxfywAyNTG7xdIsHxOZkmYI56WVfsGlEfcyScmW0%2FicxGiJIc%2BTWFu7WcAoMT3GCUhBAyFL6KkgqyVi7aCq130tHi7beoDosMzyBmOD73yfHVspSreAepSGnZzrRguotliEMJBbw58uKViBKiueaNfd0kD8WAd8JUHqDXevWSz6ajeqD4nsOJZbkfgQUAfI1mkixiJsVW5tSvuKnFjMdn%2BilJP3vOp3GP4hLCVaGyNSd76KSoNHtjjUoNQqmhWts5L19PUWlsyCaId9dMMx3PLrjtw4iR%2FB3dkntjmG4gT5Hw3OgJOqioX4Hdv%2F5gMNjnpcMGOqUBE%2BdhRhjmH4ppvUCK3BzuD57WY%2BG5DruV0I4dzwrPko4ec%2Ffng3iLpnCD8q%2BbgDfw6KcQRvVu63Hjx%2BPL1fPuBxDqQ0BtdvUra7kGEWNHmueEsmGwYVmNEZQlsNn0f1VBJgTVHdExBm3051QqOjRyYOxi4lPJYApzEGifzINudL4YPC5a47vVoTJCOxuRRqdMRTQ5W3eJQK36FYfjXtBKrriLqp4i&X-Amz-Signature=73901358da0279dd5f9e2d6cc59aed8b0a4df289d3ab0faf90ef0723259911fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEF4HLE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID5TIJbZlW2lEzMF0OuJXNmnb2CRfCRhPtONbc4TLMM6AiEAlMEdKmoENstEJXUzo2EkdyLMh7hKfGVjM%2Fjadm0SROAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGaPrEwAP9MjImZscircA6dJpm1%2BTTo6SFao%2BeGy2cui3cF4UVYDYO%2BiYn1JSVnjpZGVVHI2J8ro%2B3epcScSntXJyfMrjsFbSXrZpF2S6LreCkYefaj%2BQ1YDj4jQQAjVjeQemWJgvgz8jDEJWQSiKzrUMjFdsUujwlJdaojVINQxSWrgjtWHlJBDeU0F9nzIOoc1ACF4xLCx5McCly1dT89SbxzBRoldlmtBd1dWGmJ8Gr9eQn7JnmoAyxquDijrfWRSZ7JbnIuBBjXveeInLwBMPBmAMp%2F8rtS10BACVAuNbpE8OtYwCFCzBTk9cNfYDbiE0NPB%2FnjaIZJVYZMGxfywAyNTG7xdIsHxOZkmYI56WVfsGlEfcyScmW0%2FicxGiJIc%2BTWFu7WcAoMT3GCUhBAyFL6KkgqyVi7aCq130tHi7beoDosMzyBmOD73yfHVspSreAepSGnZzrRguotliEMJBbw58uKViBKiueaNfd0kD8WAd8JUHqDXevWSz6ajeqD4nsOJZbkfgQUAfI1mkixiJsVW5tSvuKnFjMdn%2BilJP3vOp3GP4hLCVaGyNSd76KSoNHtjjUoNQqmhWts5L19PUWlsyCaId9dMMx3PLrjtw4iR%2FB3dkntjmG4gT5Hw3OgJOqioX4Hdv%2F5gMNjnpcMGOqUBE%2BdhRhjmH4ppvUCK3BzuD57WY%2BG5DruV0I4dzwrPko4ec%2Ffng3iLpnCD8q%2BbgDfw6KcQRvVu63Hjx%2BPL1fPuBxDqQ0BtdvUra7kGEWNHmueEsmGwYVmNEZQlsNn0f1VBJgTVHdExBm3051QqOjRyYOxi4lPJYApzEGifzINudL4YPC5a47vVoTJCOxuRRqdMRTQ5W3eJQK36FYfjXtBKrriLqp4i&X-Amz-Signature=69faa04f856dbeb6793d30b32fd475cecbf06c7a07d74a1534ea6d166eb29a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEF4HLE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID5TIJbZlW2lEzMF0OuJXNmnb2CRfCRhPtONbc4TLMM6AiEAlMEdKmoENstEJXUzo2EkdyLMh7hKfGVjM%2Fjadm0SROAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGaPrEwAP9MjImZscircA6dJpm1%2BTTo6SFao%2BeGy2cui3cF4UVYDYO%2BiYn1JSVnjpZGVVHI2J8ro%2B3epcScSntXJyfMrjsFbSXrZpF2S6LreCkYefaj%2BQ1YDj4jQQAjVjeQemWJgvgz8jDEJWQSiKzrUMjFdsUujwlJdaojVINQxSWrgjtWHlJBDeU0F9nzIOoc1ACF4xLCx5McCly1dT89SbxzBRoldlmtBd1dWGmJ8Gr9eQn7JnmoAyxquDijrfWRSZ7JbnIuBBjXveeInLwBMPBmAMp%2F8rtS10BACVAuNbpE8OtYwCFCzBTk9cNfYDbiE0NPB%2FnjaIZJVYZMGxfywAyNTG7xdIsHxOZkmYI56WVfsGlEfcyScmW0%2FicxGiJIc%2BTWFu7WcAoMT3GCUhBAyFL6KkgqyVi7aCq130tHi7beoDosMzyBmOD73yfHVspSreAepSGnZzrRguotliEMJBbw58uKViBKiueaNfd0kD8WAd8JUHqDXevWSz6ajeqD4nsOJZbkfgQUAfI1mkixiJsVW5tSvuKnFjMdn%2BilJP3vOp3GP4hLCVaGyNSd76KSoNHtjjUoNQqmhWts5L19PUWlsyCaId9dMMx3PLrjtw4iR%2FB3dkntjmG4gT5Hw3OgJOqioX4Hdv%2F5gMNjnpcMGOqUBE%2BdhRhjmH4ppvUCK3BzuD57WY%2BG5DruV0I4dzwrPko4ec%2Ffng3iLpnCD8q%2BbgDfw6KcQRvVu63Hjx%2BPL1fPuBxDqQ0BtdvUra7kGEWNHmueEsmGwYVmNEZQlsNn0f1VBJgTVHdExBm3051QqOjRyYOxi4lPJYApzEGifzINudL4YPC5a47vVoTJCOxuRRqdMRTQ5W3eJQK36FYfjXtBKrriLqp4i&X-Amz-Signature=1896c85fa57fbdc5be059c0786b300ded78a5ba993a069297eedbe1686bc179e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBEF4HLE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T210817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCID5TIJbZlW2lEzMF0OuJXNmnb2CRfCRhPtONbc4TLMM6AiEAlMEdKmoENstEJXUzo2EkdyLMh7hKfGVjM%2Fjadm0SROAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGaPrEwAP9MjImZscircA6dJpm1%2BTTo6SFao%2BeGy2cui3cF4UVYDYO%2BiYn1JSVnjpZGVVHI2J8ro%2B3epcScSntXJyfMrjsFbSXrZpF2S6LreCkYefaj%2BQ1YDj4jQQAjVjeQemWJgvgz8jDEJWQSiKzrUMjFdsUujwlJdaojVINQxSWrgjtWHlJBDeU0F9nzIOoc1ACF4xLCx5McCly1dT89SbxzBRoldlmtBd1dWGmJ8Gr9eQn7JnmoAyxquDijrfWRSZ7JbnIuBBjXveeInLwBMPBmAMp%2F8rtS10BACVAuNbpE8OtYwCFCzBTk9cNfYDbiE0NPB%2FnjaIZJVYZMGxfywAyNTG7xdIsHxOZkmYI56WVfsGlEfcyScmW0%2FicxGiJIc%2BTWFu7WcAoMT3GCUhBAyFL6KkgqyVi7aCq130tHi7beoDosMzyBmOD73yfHVspSreAepSGnZzrRguotliEMJBbw58uKViBKiueaNfd0kD8WAd8JUHqDXevWSz6ajeqD4nsOJZbkfgQUAfI1mkixiJsVW5tSvuKnFjMdn%2BilJP3vOp3GP4hLCVaGyNSd76KSoNHtjjUoNQqmhWts5L19PUWlsyCaId9dMMx3PLrjtw4iR%2FB3dkntjmG4gT5Hw3OgJOqioX4Hdv%2F5gMNjnpcMGOqUBE%2BdhRhjmH4ppvUCK3BzuD57WY%2BG5DruV0I4dzwrPko4ec%2Ffng3iLpnCD8q%2BbgDfw6KcQRvVu63Hjx%2BPL1fPuBxDqQ0BtdvUra7kGEWNHmueEsmGwYVmNEZQlsNn0f1VBJgTVHdExBm3051QqOjRyYOxi4lPJYApzEGifzINudL4YPC5a47vVoTJCOxuRRqdMRTQ5W3eJQK36FYfjXtBKrriLqp4i&X-Amz-Signature=dec746f8bb3ff47202d787d45099da6dc12ee73163368191abeebacd737081a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
