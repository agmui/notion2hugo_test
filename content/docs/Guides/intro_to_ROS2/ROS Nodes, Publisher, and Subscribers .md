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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNT4R63%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID0tFMxcHuD%2B2ZvSWKx2mBRBD1E91i864h26QuMRnRO6AiEA9mos0hMHR%2BARB9rbNYjvOtw0XTc8NlujZVB9b4TsCX0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw4OkRJvDmosLelByrcA2GO%2BV1hoKs9cnnDRASf8cygpEXlCkj0D7fRzkJTYAncDWoNfD8sKWhJpJKXApGk%2FjY682Tq1k3PxtUF7r1I5aYxwLy6B8GOC7dNuMcS%2F5Z4cYmyVCxT%2F8FvNVKpIRYsMqem8FZTJkq%2B%2BP12CP5nN%2B7zx2NjQWeUKUKFvgqYIjQ2Oa8gcjiEWg0d0JJQEpgXq9odngiMIBm6GepcQyujKUCNpyTF9q2K1jOzpCdOxof8CaJGrO2uZoQYE74poxm0xQRpB07auyPkesSQOaTDuTrWi%2FuaxQMZYVChxbDNuVXu9eeRId4APggdXGISZ1NHl8CjFLPSwYWfPXTXK38p6OY7ODlGZ7gtCuezPmYwdpyp66JbbAfbTFRuDIi8tUPFKZLG4GzJxjB3KDG5Kkz1KW5d0PIeGCkioS4iKss0K55gtPte4NdLLucuFyL6Iidk7gt4Df7h1BTl17KSVQijj%2Bfb%2Fe9mZ8BdNyPZgDs2aWk92mI6r8%2FFi4cy9VRTtEktfqmSOdlXExN%2BkVUR9XBap4OaVBHcFTj3TQ1Xla02Awk6bPiMkDfsuiOf4HFuapqGVrO%2F0dNZZBxMGXHPU%2Fnc3wh1Wr0OvMpBDLXQBZfeuB77O%2F6YBwzgbCEv5Nm%2FML7Qhr4GOqUB0Eugt4k0HgGqqqD3xbmfvwazFzioVtDOzg1t6%2BQ%2FWzgrY4Ke0wy9FIxCi3dnQSoH74sHPb7p6der6rUKux6m46vYnUqsXHPRD%2B3GLJ2JJmhGaHtGCf%2BGi81BNlSodWbjrJ7WYGuw9iEYyskGj23965oV5vJ19PE8UJ8%2FJb4EzBM1ZFmWpHz%2BUCe4fuNv4hZI9%2FbODUqu463bfXuAqvKzn3XyuS2n&X-Amz-Signature=0c4d3a8bab48e00d20187beb792ec72f69b2aa8292354869b1180518c1a216ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNT4R63%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID0tFMxcHuD%2B2ZvSWKx2mBRBD1E91i864h26QuMRnRO6AiEA9mos0hMHR%2BARB9rbNYjvOtw0XTc8NlujZVB9b4TsCX0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw4OkRJvDmosLelByrcA2GO%2BV1hoKs9cnnDRASf8cygpEXlCkj0D7fRzkJTYAncDWoNfD8sKWhJpJKXApGk%2FjY682Tq1k3PxtUF7r1I5aYxwLy6B8GOC7dNuMcS%2F5Z4cYmyVCxT%2F8FvNVKpIRYsMqem8FZTJkq%2B%2BP12CP5nN%2B7zx2NjQWeUKUKFvgqYIjQ2Oa8gcjiEWg0d0JJQEpgXq9odngiMIBm6GepcQyujKUCNpyTF9q2K1jOzpCdOxof8CaJGrO2uZoQYE74poxm0xQRpB07auyPkesSQOaTDuTrWi%2FuaxQMZYVChxbDNuVXu9eeRId4APggdXGISZ1NHl8CjFLPSwYWfPXTXK38p6OY7ODlGZ7gtCuezPmYwdpyp66JbbAfbTFRuDIi8tUPFKZLG4GzJxjB3KDG5Kkz1KW5d0PIeGCkioS4iKss0K55gtPte4NdLLucuFyL6Iidk7gt4Df7h1BTl17KSVQijj%2Bfb%2Fe9mZ8BdNyPZgDs2aWk92mI6r8%2FFi4cy9VRTtEktfqmSOdlXExN%2BkVUR9XBap4OaVBHcFTj3TQ1Xla02Awk6bPiMkDfsuiOf4HFuapqGVrO%2F0dNZZBxMGXHPU%2Fnc3wh1Wr0OvMpBDLXQBZfeuB77O%2F6YBwzgbCEv5Nm%2FML7Qhr4GOqUB0Eugt4k0HgGqqqD3xbmfvwazFzioVtDOzg1t6%2BQ%2FWzgrY4Ke0wy9FIxCi3dnQSoH74sHPb7p6der6rUKux6m46vYnUqsXHPRD%2B3GLJ2JJmhGaHtGCf%2BGi81BNlSodWbjrJ7WYGuw9iEYyskGj23965oV5vJ19PE8UJ8%2FJb4EzBM1ZFmWpHz%2BUCe4fuNv4hZI9%2FbODUqu463bfXuAqvKzn3XyuS2n&X-Amz-Signature=1adc47c401a2d9835d018f7168eb6030eb7766cea186296f271f2865ff79db4f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNT4R63%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID0tFMxcHuD%2B2ZvSWKx2mBRBD1E91i864h26QuMRnRO6AiEA9mos0hMHR%2BARB9rbNYjvOtw0XTc8NlujZVB9b4TsCX0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw4OkRJvDmosLelByrcA2GO%2BV1hoKs9cnnDRASf8cygpEXlCkj0D7fRzkJTYAncDWoNfD8sKWhJpJKXApGk%2FjY682Tq1k3PxtUF7r1I5aYxwLy6B8GOC7dNuMcS%2F5Z4cYmyVCxT%2F8FvNVKpIRYsMqem8FZTJkq%2B%2BP12CP5nN%2B7zx2NjQWeUKUKFvgqYIjQ2Oa8gcjiEWg0d0JJQEpgXq9odngiMIBm6GepcQyujKUCNpyTF9q2K1jOzpCdOxof8CaJGrO2uZoQYE74poxm0xQRpB07auyPkesSQOaTDuTrWi%2FuaxQMZYVChxbDNuVXu9eeRId4APggdXGISZ1NHl8CjFLPSwYWfPXTXK38p6OY7ODlGZ7gtCuezPmYwdpyp66JbbAfbTFRuDIi8tUPFKZLG4GzJxjB3KDG5Kkz1KW5d0PIeGCkioS4iKss0K55gtPte4NdLLucuFyL6Iidk7gt4Df7h1BTl17KSVQijj%2Bfb%2Fe9mZ8BdNyPZgDs2aWk92mI6r8%2FFi4cy9VRTtEktfqmSOdlXExN%2BkVUR9XBap4OaVBHcFTj3TQ1Xla02Awk6bPiMkDfsuiOf4HFuapqGVrO%2F0dNZZBxMGXHPU%2Fnc3wh1Wr0OvMpBDLXQBZfeuB77O%2F6YBwzgbCEv5Nm%2FML7Qhr4GOqUB0Eugt4k0HgGqqqD3xbmfvwazFzioVtDOzg1t6%2BQ%2FWzgrY4Ke0wy9FIxCi3dnQSoH74sHPb7p6der6rUKux6m46vYnUqsXHPRD%2B3GLJ2JJmhGaHtGCf%2BGi81BNlSodWbjrJ7WYGuw9iEYyskGj23965oV5vJ19PE8UJ8%2FJb4EzBM1ZFmWpHz%2BUCe4fuNv4hZI9%2FbODUqu463bfXuAqvKzn3XyuS2n&X-Amz-Signature=771f14bbcea55f0a70b5302e743014a0d15772cd91cf4c3f72f7a324938b5937&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNT4R63%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID0tFMxcHuD%2B2ZvSWKx2mBRBD1E91i864h26QuMRnRO6AiEA9mos0hMHR%2BARB9rbNYjvOtw0XTc8NlujZVB9b4TsCX0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw4OkRJvDmosLelByrcA2GO%2BV1hoKs9cnnDRASf8cygpEXlCkj0D7fRzkJTYAncDWoNfD8sKWhJpJKXApGk%2FjY682Tq1k3PxtUF7r1I5aYxwLy6B8GOC7dNuMcS%2F5Z4cYmyVCxT%2F8FvNVKpIRYsMqem8FZTJkq%2B%2BP12CP5nN%2B7zx2NjQWeUKUKFvgqYIjQ2Oa8gcjiEWg0d0JJQEpgXq9odngiMIBm6GepcQyujKUCNpyTF9q2K1jOzpCdOxof8CaJGrO2uZoQYE74poxm0xQRpB07auyPkesSQOaTDuTrWi%2FuaxQMZYVChxbDNuVXu9eeRId4APggdXGISZ1NHl8CjFLPSwYWfPXTXK38p6OY7ODlGZ7gtCuezPmYwdpyp66JbbAfbTFRuDIi8tUPFKZLG4GzJxjB3KDG5Kkz1KW5d0PIeGCkioS4iKss0K55gtPte4NdLLucuFyL6Iidk7gt4Df7h1BTl17KSVQijj%2Bfb%2Fe9mZ8BdNyPZgDs2aWk92mI6r8%2FFi4cy9VRTtEktfqmSOdlXExN%2BkVUR9XBap4OaVBHcFTj3TQ1Xla02Awk6bPiMkDfsuiOf4HFuapqGVrO%2F0dNZZBxMGXHPU%2Fnc3wh1Wr0OvMpBDLXQBZfeuB77O%2F6YBwzgbCEv5Nm%2FML7Qhr4GOqUB0Eugt4k0HgGqqqD3xbmfvwazFzioVtDOzg1t6%2BQ%2FWzgrY4Ke0wy9FIxCi3dnQSoH74sHPb7p6der6rUKux6m46vYnUqsXHPRD%2B3GLJ2JJmhGaHtGCf%2BGi81BNlSodWbjrJ7WYGuw9iEYyskGj23965oV5vJ19PE8UJ8%2FJb4EzBM1ZFmWpHz%2BUCe4fuNv4hZI9%2FbODUqu463bfXuAqvKzn3XyuS2n&X-Amz-Signature=78fde4b79877c3c484ffb72b5f267b2cce90d43f334c264104c9f971d3fec321&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNT4R63%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID0tFMxcHuD%2B2ZvSWKx2mBRBD1E91i864h26QuMRnRO6AiEA9mos0hMHR%2BARB9rbNYjvOtw0XTc8NlujZVB9b4TsCX0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw4OkRJvDmosLelByrcA2GO%2BV1hoKs9cnnDRASf8cygpEXlCkj0D7fRzkJTYAncDWoNfD8sKWhJpJKXApGk%2FjY682Tq1k3PxtUF7r1I5aYxwLy6B8GOC7dNuMcS%2F5Z4cYmyVCxT%2F8FvNVKpIRYsMqem8FZTJkq%2B%2BP12CP5nN%2B7zx2NjQWeUKUKFvgqYIjQ2Oa8gcjiEWg0d0JJQEpgXq9odngiMIBm6GepcQyujKUCNpyTF9q2K1jOzpCdOxof8CaJGrO2uZoQYE74poxm0xQRpB07auyPkesSQOaTDuTrWi%2FuaxQMZYVChxbDNuVXu9eeRId4APggdXGISZ1NHl8CjFLPSwYWfPXTXK38p6OY7ODlGZ7gtCuezPmYwdpyp66JbbAfbTFRuDIi8tUPFKZLG4GzJxjB3KDG5Kkz1KW5d0PIeGCkioS4iKss0K55gtPte4NdLLucuFyL6Iidk7gt4Df7h1BTl17KSVQijj%2Bfb%2Fe9mZ8BdNyPZgDs2aWk92mI6r8%2FFi4cy9VRTtEktfqmSOdlXExN%2BkVUR9XBap4OaVBHcFTj3TQ1Xla02Awk6bPiMkDfsuiOf4HFuapqGVrO%2F0dNZZBxMGXHPU%2Fnc3wh1Wr0OvMpBDLXQBZfeuB77O%2F6YBwzgbCEv5Nm%2FML7Qhr4GOqUB0Eugt4k0HgGqqqD3xbmfvwazFzioVtDOzg1t6%2BQ%2FWzgrY4Ke0wy9FIxCi3dnQSoH74sHPb7p6der6rUKux6m46vYnUqsXHPRD%2B3GLJ2JJmhGaHtGCf%2BGi81BNlSodWbjrJ7WYGuw9iEYyskGj23965oV5vJ19PE8UJ8%2FJb4EzBM1ZFmWpHz%2BUCe4fuNv4hZI9%2FbODUqu463bfXuAqvKzn3XyuS2n&X-Amz-Signature=0ea8552c8edd241460b89d55fc492a2f66c101249e26529428393345bad22f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNT4R63%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID0tFMxcHuD%2B2ZvSWKx2mBRBD1E91i864h26QuMRnRO6AiEA9mos0hMHR%2BARB9rbNYjvOtw0XTc8NlujZVB9b4TsCX0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw4OkRJvDmosLelByrcA2GO%2BV1hoKs9cnnDRASf8cygpEXlCkj0D7fRzkJTYAncDWoNfD8sKWhJpJKXApGk%2FjY682Tq1k3PxtUF7r1I5aYxwLy6B8GOC7dNuMcS%2F5Z4cYmyVCxT%2F8FvNVKpIRYsMqem8FZTJkq%2B%2BP12CP5nN%2B7zx2NjQWeUKUKFvgqYIjQ2Oa8gcjiEWg0d0JJQEpgXq9odngiMIBm6GepcQyujKUCNpyTF9q2K1jOzpCdOxof8CaJGrO2uZoQYE74poxm0xQRpB07auyPkesSQOaTDuTrWi%2FuaxQMZYVChxbDNuVXu9eeRId4APggdXGISZ1NHl8CjFLPSwYWfPXTXK38p6OY7ODlGZ7gtCuezPmYwdpyp66JbbAfbTFRuDIi8tUPFKZLG4GzJxjB3KDG5Kkz1KW5d0PIeGCkioS4iKss0K55gtPte4NdLLucuFyL6Iidk7gt4Df7h1BTl17KSVQijj%2Bfb%2Fe9mZ8BdNyPZgDs2aWk92mI6r8%2FFi4cy9VRTtEktfqmSOdlXExN%2BkVUR9XBap4OaVBHcFTj3TQ1Xla02Awk6bPiMkDfsuiOf4HFuapqGVrO%2F0dNZZBxMGXHPU%2Fnc3wh1Wr0OvMpBDLXQBZfeuB77O%2F6YBwzgbCEv5Nm%2FML7Qhr4GOqUB0Eugt4k0HgGqqqD3xbmfvwazFzioVtDOzg1t6%2BQ%2FWzgrY4Ke0wy9FIxCi3dnQSoH74sHPb7p6der6rUKux6m46vYnUqsXHPRD%2B3GLJ2JJmhGaHtGCf%2BGi81BNlSodWbjrJ7WYGuw9iEYyskGj23965oV5vJ19PE8UJ8%2FJb4EzBM1ZFmWpHz%2BUCe4fuNv4hZI9%2FbODUqu463bfXuAqvKzn3XyuS2n&X-Amz-Signature=4efcc87511fed127c667a5f4cc033ccf62944e0b16a0588be29854a08ca6f6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNT4R63%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID0tFMxcHuD%2B2ZvSWKx2mBRBD1E91i864h26QuMRnRO6AiEA9mos0hMHR%2BARB9rbNYjvOtw0XTc8NlujZVB9b4TsCX0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw4OkRJvDmosLelByrcA2GO%2BV1hoKs9cnnDRASf8cygpEXlCkj0D7fRzkJTYAncDWoNfD8sKWhJpJKXApGk%2FjY682Tq1k3PxtUF7r1I5aYxwLy6B8GOC7dNuMcS%2F5Z4cYmyVCxT%2F8FvNVKpIRYsMqem8FZTJkq%2B%2BP12CP5nN%2B7zx2NjQWeUKUKFvgqYIjQ2Oa8gcjiEWg0d0JJQEpgXq9odngiMIBm6GepcQyujKUCNpyTF9q2K1jOzpCdOxof8CaJGrO2uZoQYE74poxm0xQRpB07auyPkesSQOaTDuTrWi%2FuaxQMZYVChxbDNuVXu9eeRId4APggdXGISZ1NHl8CjFLPSwYWfPXTXK38p6OY7ODlGZ7gtCuezPmYwdpyp66JbbAfbTFRuDIi8tUPFKZLG4GzJxjB3KDG5Kkz1KW5d0PIeGCkioS4iKss0K55gtPte4NdLLucuFyL6Iidk7gt4Df7h1BTl17KSVQijj%2Bfb%2Fe9mZ8BdNyPZgDs2aWk92mI6r8%2FFi4cy9VRTtEktfqmSOdlXExN%2BkVUR9XBap4OaVBHcFTj3TQ1Xla02Awk6bPiMkDfsuiOf4HFuapqGVrO%2F0dNZZBxMGXHPU%2Fnc3wh1Wr0OvMpBDLXQBZfeuB77O%2F6YBwzgbCEv5Nm%2FML7Qhr4GOqUB0Eugt4k0HgGqqqD3xbmfvwazFzioVtDOzg1t6%2BQ%2FWzgrY4Ke0wy9FIxCi3dnQSoH74sHPb7p6der6rUKux6m46vYnUqsXHPRD%2B3GLJ2JJmhGaHtGCf%2BGi81BNlSodWbjrJ7WYGuw9iEYyskGj23965oV5vJ19PE8UJ8%2FJb4EzBM1ZFmWpHz%2BUCe4fuNv4hZI9%2FbODUqu463bfXuAqvKzn3XyuS2n&X-Amz-Signature=96c366a3ecd6b447f2003f2ff0b39cba9d7a927fe07da506b85f0bd268250a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNT4R63%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID0tFMxcHuD%2B2ZvSWKx2mBRBD1E91i864h26QuMRnRO6AiEA9mos0hMHR%2BARB9rbNYjvOtw0XTc8NlujZVB9b4TsCX0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNw4OkRJvDmosLelByrcA2GO%2BV1hoKs9cnnDRASf8cygpEXlCkj0D7fRzkJTYAncDWoNfD8sKWhJpJKXApGk%2FjY682Tq1k3PxtUF7r1I5aYxwLy6B8GOC7dNuMcS%2F5Z4cYmyVCxT%2F8FvNVKpIRYsMqem8FZTJkq%2B%2BP12CP5nN%2B7zx2NjQWeUKUKFvgqYIjQ2Oa8gcjiEWg0d0JJQEpgXq9odngiMIBm6GepcQyujKUCNpyTF9q2K1jOzpCdOxof8CaJGrO2uZoQYE74poxm0xQRpB07auyPkesSQOaTDuTrWi%2FuaxQMZYVChxbDNuVXu9eeRId4APggdXGISZ1NHl8CjFLPSwYWfPXTXK38p6OY7ODlGZ7gtCuezPmYwdpyp66JbbAfbTFRuDIi8tUPFKZLG4GzJxjB3KDG5Kkz1KW5d0PIeGCkioS4iKss0K55gtPte4NdLLucuFyL6Iidk7gt4Df7h1BTl17KSVQijj%2Bfb%2Fe9mZ8BdNyPZgDs2aWk92mI6r8%2FFi4cy9VRTtEktfqmSOdlXExN%2BkVUR9XBap4OaVBHcFTj3TQ1Xla02Awk6bPiMkDfsuiOf4HFuapqGVrO%2F0dNZZBxMGXHPU%2Fnc3wh1Wr0OvMpBDLXQBZfeuB77O%2F6YBwzgbCEv5Nm%2FML7Qhr4GOqUB0Eugt4k0HgGqqqD3xbmfvwazFzioVtDOzg1t6%2BQ%2FWzgrY4Ke0wy9FIxCi3dnQSoH74sHPb7p6der6rUKux6m46vYnUqsXHPRD%2B3GLJ2JJmhGaHtGCf%2BGi81BNlSodWbjrJ7WYGuw9iEYyskGj23965oV5vJ19PE8UJ8%2FJb4EzBM1ZFmWpHz%2BUCe4fuNv4hZI9%2FbODUqu463bfXuAqvKzn3XyuS2n&X-Amz-Signature=52594d39e6641237a9f5f7fdc6b31641020aa82ebdfc4321e138a2772f077251&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
