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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIKIUJZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDKhCvEWkDt3qQUCeTPVLt09zV4BJNGfh%2FMYuKuTF4AFAiBzxGeSlO8i6DPWUJEV2rk5wd8x%2B162esCUgG5pXnGk5CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS25mVuU%2BHmhp9sAuKtwDLMvP%2Fu6kRiQChpE9mqr6APVlBy4lXNvV0XFiLzesEAAhCMTZbX1Gtssg2wSDxjBY3eb5aLChWFlFcO3GqqMMVZpGWNPKhwfp9TbJmC8pC%2FdoDA6Ej6Oua%2BABIOUzu6XCCWRVlQ9X0WEoylejG7nI4u7uAEoUcUlcmJpaoHQ8Wgk8N0id2A889K1IUJAQbmQ0GA%2BeUixoyHc0pQg1CnHUBoGwCCXnFk964gU1EcLxNizyeyZg93rMBi%2BMF6H1J8l9hHK0HuXn1fVZwxVFNI5RXNOLoSDyd9PVWaT66Ndlg%2FbAXTUJb06Uatcf8fMLP4qjEYowO2V4gag7kpCqzFwTkBAeUk9W%2Fzwsmhil9pFhvK3mH3nupKwVjelYEGaLjJtMSeFg3P%2BfszXeK3Gt8L%2BgTRK69rVb2Ifsd%2FZ2%2F1i7mziXE2CdMmLhXHDS4%2F%2FQOfSTs9X22XpG7%2BqCd45ImBycF68hujBYKH6Lvo8iHDkj16ZieWL5mSBES2%2B0evwHu4PUZB4rd3zWT3lVIWxd9ivbsobf0uKRofBirVR9Cpe2NHGrSTDLIH7ABEmLcAN75MzTxLWSYTir7DBvVlxnIxPQUrCD7KGR5hJSaPZRVHuVGkmSI7xu2DMAp69pWDowwoGHvgY6pgF5e5KLuquznEtbCoELyP5gBdNSQabNwfUc58CLbgWUyPGd5%2FSNkHmx9hlGJScQibbdaTHckzOygTg0HzGWYe7AQF%2B9ApLRnWDOiq%2BegzGShtmOHD3GoNIgYmr%2FoRwxplL2F9%2FUK9g5LAwEmFKCflu4Mb4ZhIr9UIpMI%2BRyULabVkzlMpwbpkOaKrHIUd9F0iRA%2BtNwvCgvT1%2Bs5KhBosIekCnePLoF&X-Amz-Signature=10aa251588deff0fc527729cd138a3a448905fc7bd802dc3d1ca8e664ffff0f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIKIUJZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDKhCvEWkDt3qQUCeTPVLt09zV4BJNGfh%2FMYuKuTF4AFAiBzxGeSlO8i6DPWUJEV2rk5wd8x%2B162esCUgG5pXnGk5CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS25mVuU%2BHmhp9sAuKtwDLMvP%2Fu6kRiQChpE9mqr6APVlBy4lXNvV0XFiLzesEAAhCMTZbX1Gtssg2wSDxjBY3eb5aLChWFlFcO3GqqMMVZpGWNPKhwfp9TbJmC8pC%2FdoDA6Ej6Oua%2BABIOUzu6XCCWRVlQ9X0WEoylejG7nI4u7uAEoUcUlcmJpaoHQ8Wgk8N0id2A889K1IUJAQbmQ0GA%2BeUixoyHc0pQg1CnHUBoGwCCXnFk964gU1EcLxNizyeyZg93rMBi%2BMF6H1J8l9hHK0HuXn1fVZwxVFNI5RXNOLoSDyd9PVWaT66Ndlg%2FbAXTUJb06Uatcf8fMLP4qjEYowO2V4gag7kpCqzFwTkBAeUk9W%2Fzwsmhil9pFhvK3mH3nupKwVjelYEGaLjJtMSeFg3P%2BfszXeK3Gt8L%2BgTRK69rVb2Ifsd%2FZ2%2F1i7mziXE2CdMmLhXHDS4%2F%2FQOfSTs9X22XpG7%2BqCd45ImBycF68hujBYKH6Lvo8iHDkj16ZieWL5mSBES2%2B0evwHu4PUZB4rd3zWT3lVIWxd9ivbsobf0uKRofBirVR9Cpe2NHGrSTDLIH7ABEmLcAN75MzTxLWSYTir7DBvVlxnIxPQUrCD7KGR5hJSaPZRVHuVGkmSI7xu2DMAp69pWDowwoGHvgY6pgF5e5KLuquznEtbCoELyP5gBdNSQabNwfUc58CLbgWUyPGd5%2FSNkHmx9hlGJScQibbdaTHckzOygTg0HzGWYe7AQF%2B9ApLRnWDOiq%2BegzGShtmOHD3GoNIgYmr%2FoRwxplL2F9%2FUK9g5LAwEmFKCflu4Mb4ZhIr9UIpMI%2BRyULabVkzlMpwbpkOaKrHIUd9F0iRA%2BtNwvCgvT1%2Bs5KhBosIekCnePLoF&X-Amz-Signature=17a49995959f498f06121a525d436f4e27d4babb14a02ac300324b4f9c577a97&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIKIUJZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDKhCvEWkDt3qQUCeTPVLt09zV4BJNGfh%2FMYuKuTF4AFAiBzxGeSlO8i6DPWUJEV2rk5wd8x%2B162esCUgG5pXnGk5CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS25mVuU%2BHmhp9sAuKtwDLMvP%2Fu6kRiQChpE9mqr6APVlBy4lXNvV0XFiLzesEAAhCMTZbX1Gtssg2wSDxjBY3eb5aLChWFlFcO3GqqMMVZpGWNPKhwfp9TbJmC8pC%2FdoDA6Ej6Oua%2BABIOUzu6XCCWRVlQ9X0WEoylejG7nI4u7uAEoUcUlcmJpaoHQ8Wgk8N0id2A889K1IUJAQbmQ0GA%2BeUixoyHc0pQg1CnHUBoGwCCXnFk964gU1EcLxNizyeyZg93rMBi%2BMF6H1J8l9hHK0HuXn1fVZwxVFNI5RXNOLoSDyd9PVWaT66Ndlg%2FbAXTUJb06Uatcf8fMLP4qjEYowO2V4gag7kpCqzFwTkBAeUk9W%2Fzwsmhil9pFhvK3mH3nupKwVjelYEGaLjJtMSeFg3P%2BfszXeK3Gt8L%2BgTRK69rVb2Ifsd%2FZ2%2F1i7mziXE2CdMmLhXHDS4%2F%2FQOfSTs9X22XpG7%2BqCd45ImBycF68hujBYKH6Lvo8iHDkj16ZieWL5mSBES2%2B0evwHu4PUZB4rd3zWT3lVIWxd9ivbsobf0uKRofBirVR9Cpe2NHGrSTDLIH7ABEmLcAN75MzTxLWSYTir7DBvVlxnIxPQUrCD7KGR5hJSaPZRVHuVGkmSI7xu2DMAp69pWDowwoGHvgY6pgF5e5KLuquznEtbCoELyP5gBdNSQabNwfUc58CLbgWUyPGd5%2FSNkHmx9hlGJScQibbdaTHckzOygTg0HzGWYe7AQF%2B9ApLRnWDOiq%2BegzGShtmOHD3GoNIgYmr%2FoRwxplL2F9%2FUK9g5LAwEmFKCflu4Mb4ZhIr9UIpMI%2BRyULabVkzlMpwbpkOaKrHIUd9F0iRA%2BtNwvCgvT1%2Bs5KhBosIekCnePLoF&X-Amz-Signature=e04b9a0ccb4060d3fe3c3b6d76b6bc0ea0edda4ebafbd90882687bcec64850ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIKIUJZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDKhCvEWkDt3qQUCeTPVLt09zV4BJNGfh%2FMYuKuTF4AFAiBzxGeSlO8i6DPWUJEV2rk5wd8x%2B162esCUgG5pXnGk5CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS25mVuU%2BHmhp9sAuKtwDLMvP%2Fu6kRiQChpE9mqr6APVlBy4lXNvV0XFiLzesEAAhCMTZbX1Gtssg2wSDxjBY3eb5aLChWFlFcO3GqqMMVZpGWNPKhwfp9TbJmC8pC%2FdoDA6Ej6Oua%2BABIOUzu6XCCWRVlQ9X0WEoylejG7nI4u7uAEoUcUlcmJpaoHQ8Wgk8N0id2A889K1IUJAQbmQ0GA%2BeUixoyHc0pQg1CnHUBoGwCCXnFk964gU1EcLxNizyeyZg93rMBi%2BMF6H1J8l9hHK0HuXn1fVZwxVFNI5RXNOLoSDyd9PVWaT66Ndlg%2FbAXTUJb06Uatcf8fMLP4qjEYowO2V4gag7kpCqzFwTkBAeUk9W%2Fzwsmhil9pFhvK3mH3nupKwVjelYEGaLjJtMSeFg3P%2BfszXeK3Gt8L%2BgTRK69rVb2Ifsd%2FZ2%2F1i7mziXE2CdMmLhXHDS4%2F%2FQOfSTs9X22XpG7%2BqCd45ImBycF68hujBYKH6Lvo8iHDkj16ZieWL5mSBES2%2B0evwHu4PUZB4rd3zWT3lVIWxd9ivbsobf0uKRofBirVR9Cpe2NHGrSTDLIH7ABEmLcAN75MzTxLWSYTir7DBvVlxnIxPQUrCD7KGR5hJSaPZRVHuVGkmSI7xu2DMAp69pWDowwoGHvgY6pgF5e5KLuquznEtbCoELyP5gBdNSQabNwfUc58CLbgWUyPGd5%2FSNkHmx9hlGJScQibbdaTHckzOygTg0HzGWYe7AQF%2B9ApLRnWDOiq%2BegzGShtmOHD3GoNIgYmr%2FoRwxplL2F9%2FUK9g5LAwEmFKCflu4Mb4ZhIr9UIpMI%2BRyULabVkzlMpwbpkOaKrHIUd9F0iRA%2BtNwvCgvT1%2Bs5KhBosIekCnePLoF&X-Amz-Signature=95c28e50c1d8e1bb1cdc130d029229b0587182c2e7cd10ad8a9619ec877169e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIKIUJZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDKhCvEWkDt3qQUCeTPVLt09zV4BJNGfh%2FMYuKuTF4AFAiBzxGeSlO8i6DPWUJEV2rk5wd8x%2B162esCUgG5pXnGk5CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS25mVuU%2BHmhp9sAuKtwDLMvP%2Fu6kRiQChpE9mqr6APVlBy4lXNvV0XFiLzesEAAhCMTZbX1Gtssg2wSDxjBY3eb5aLChWFlFcO3GqqMMVZpGWNPKhwfp9TbJmC8pC%2FdoDA6Ej6Oua%2BABIOUzu6XCCWRVlQ9X0WEoylejG7nI4u7uAEoUcUlcmJpaoHQ8Wgk8N0id2A889K1IUJAQbmQ0GA%2BeUixoyHc0pQg1CnHUBoGwCCXnFk964gU1EcLxNizyeyZg93rMBi%2BMF6H1J8l9hHK0HuXn1fVZwxVFNI5RXNOLoSDyd9PVWaT66Ndlg%2FbAXTUJb06Uatcf8fMLP4qjEYowO2V4gag7kpCqzFwTkBAeUk9W%2Fzwsmhil9pFhvK3mH3nupKwVjelYEGaLjJtMSeFg3P%2BfszXeK3Gt8L%2BgTRK69rVb2Ifsd%2FZ2%2F1i7mziXE2CdMmLhXHDS4%2F%2FQOfSTs9X22XpG7%2BqCd45ImBycF68hujBYKH6Lvo8iHDkj16ZieWL5mSBES2%2B0evwHu4PUZB4rd3zWT3lVIWxd9ivbsobf0uKRofBirVR9Cpe2NHGrSTDLIH7ABEmLcAN75MzTxLWSYTir7DBvVlxnIxPQUrCD7KGR5hJSaPZRVHuVGkmSI7xu2DMAp69pWDowwoGHvgY6pgF5e5KLuquznEtbCoELyP5gBdNSQabNwfUc58CLbgWUyPGd5%2FSNkHmx9hlGJScQibbdaTHckzOygTg0HzGWYe7AQF%2B9ApLRnWDOiq%2BegzGShtmOHD3GoNIgYmr%2FoRwxplL2F9%2FUK9g5LAwEmFKCflu4Mb4ZhIr9UIpMI%2BRyULabVkzlMpwbpkOaKrHIUd9F0iRA%2BtNwvCgvT1%2Bs5KhBosIekCnePLoF&X-Amz-Signature=5ceecee392a8d6125966eaa4591af725bd53fa00bf1ef993ec3c7cfc292971a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIKIUJZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDKhCvEWkDt3qQUCeTPVLt09zV4BJNGfh%2FMYuKuTF4AFAiBzxGeSlO8i6DPWUJEV2rk5wd8x%2B162esCUgG5pXnGk5CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS25mVuU%2BHmhp9sAuKtwDLMvP%2Fu6kRiQChpE9mqr6APVlBy4lXNvV0XFiLzesEAAhCMTZbX1Gtssg2wSDxjBY3eb5aLChWFlFcO3GqqMMVZpGWNPKhwfp9TbJmC8pC%2FdoDA6Ej6Oua%2BABIOUzu6XCCWRVlQ9X0WEoylejG7nI4u7uAEoUcUlcmJpaoHQ8Wgk8N0id2A889K1IUJAQbmQ0GA%2BeUixoyHc0pQg1CnHUBoGwCCXnFk964gU1EcLxNizyeyZg93rMBi%2BMF6H1J8l9hHK0HuXn1fVZwxVFNI5RXNOLoSDyd9PVWaT66Ndlg%2FbAXTUJb06Uatcf8fMLP4qjEYowO2V4gag7kpCqzFwTkBAeUk9W%2Fzwsmhil9pFhvK3mH3nupKwVjelYEGaLjJtMSeFg3P%2BfszXeK3Gt8L%2BgTRK69rVb2Ifsd%2FZ2%2F1i7mziXE2CdMmLhXHDS4%2F%2FQOfSTs9X22XpG7%2BqCd45ImBycF68hujBYKH6Lvo8iHDkj16ZieWL5mSBES2%2B0evwHu4PUZB4rd3zWT3lVIWxd9ivbsobf0uKRofBirVR9Cpe2NHGrSTDLIH7ABEmLcAN75MzTxLWSYTir7DBvVlxnIxPQUrCD7KGR5hJSaPZRVHuVGkmSI7xu2DMAp69pWDowwoGHvgY6pgF5e5KLuquznEtbCoELyP5gBdNSQabNwfUc58CLbgWUyPGd5%2FSNkHmx9hlGJScQibbdaTHckzOygTg0HzGWYe7AQF%2B9ApLRnWDOiq%2BegzGShtmOHD3GoNIgYmr%2FoRwxplL2F9%2FUK9g5LAwEmFKCflu4Mb4ZhIr9UIpMI%2BRyULabVkzlMpwbpkOaKrHIUd9F0iRA%2BtNwvCgvT1%2Bs5KhBosIekCnePLoF&X-Amz-Signature=faf5635c4cc287ece6c46b1e355f3f199cacbd860ed8b1b64fe5c931d1989038&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIKIUJZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDKhCvEWkDt3qQUCeTPVLt09zV4BJNGfh%2FMYuKuTF4AFAiBzxGeSlO8i6DPWUJEV2rk5wd8x%2B162esCUgG5pXnGk5CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS25mVuU%2BHmhp9sAuKtwDLMvP%2Fu6kRiQChpE9mqr6APVlBy4lXNvV0XFiLzesEAAhCMTZbX1Gtssg2wSDxjBY3eb5aLChWFlFcO3GqqMMVZpGWNPKhwfp9TbJmC8pC%2FdoDA6Ej6Oua%2BABIOUzu6XCCWRVlQ9X0WEoylejG7nI4u7uAEoUcUlcmJpaoHQ8Wgk8N0id2A889K1IUJAQbmQ0GA%2BeUixoyHc0pQg1CnHUBoGwCCXnFk964gU1EcLxNizyeyZg93rMBi%2BMF6H1J8l9hHK0HuXn1fVZwxVFNI5RXNOLoSDyd9PVWaT66Ndlg%2FbAXTUJb06Uatcf8fMLP4qjEYowO2V4gag7kpCqzFwTkBAeUk9W%2Fzwsmhil9pFhvK3mH3nupKwVjelYEGaLjJtMSeFg3P%2BfszXeK3Gt8L%2BgTRK69rVb2Ifsd%2FZ2%2F1i7mziXE2CdMmLhXHDS4%2F%2FQOfSTs9X22XpG7%2BqCd45ImBycF68hujBYKH6Lvo8iHDkj16ZieWL5mSBES2%2B0evwHu4PUZB4rd3zWT3lVIWxd9ivbsobf0uKRofBirVR9Cpe2NHGrSTDLIH7ABEmLcAN75MzTxLWSYTir7DBvVlxnIxPQUrCD7KGR5hJSaPZRVHuVGkmSI7xu2DMAp69pWDowwoGHvgY6pgF5e5KLuquznEtbCoELyP5gBdNSQabNwfUc58CLbgWUyPGd5%2FSNkHmx9hlGJScQibbdaTHckzOygTg0HzGWYe7AQF%2B9ApLRnWDOiq%2BegzGShtmOHD3GoNIgYmr%2FoRwxplL2F9%2FUK9g5LAwEmFKCflu4Mb4ZhIr9UIpMI%2BRyULabVkzlMpwbpkOaKrHIUd9F0iRA%2BtNwvCgvT1%2Bs5KhBosIekCnePLoF&X-Amz-Signature=bae3d3cc7f9f87b24e6608067169fe356b3542d9f89bbbb2e5f2a1cfd9c26bfc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPIKIUJZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIDKhCvEWkDt3qQUCeTPVLt09zV4BJNGfh%2FMYuKuTF4AFAiBzxGeSlO8i6DPWUJEV2rk5wd8x%2B162esCUgG5pXnGk5CqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS25mVuU%2BHmhp9sAuKtwDLMvP%2Fu6kRiQChpE9mqr6APVlBy4lXNvV0XFiLzesEAAhCMTZbX1Gtssg2wSDxjBY3eb5aLChWFlFcO3GqqMMVZpGWNPKhwfp9TbJmC8pC%2FdoDA6Ej6Oua%2BABIOUzu6XCCWRVlQ9X0WEoylejG7nI4u7uAEoUcUlcmJpaoHQ8Wgk8N0id2A889K1IUJAQbmQ0GA%2BeUixoyHc0pQg1CnHUBoGwCCXnFk964gU1EcLxNizyeyZg93rMBi%2BMF6H1J8l9hHK0HuXn1fVZwxVFNI5RXNOLoSDyd9PVWaT66Ndlg%2FbAXTUJb06Uatcf8fMLP4qjEYowO2V4gag7kpCqzFwTkBAeUk9W%2Fzwsmhil9pFhvK3mH3nupKwVjelYEGaLjJtMSeFg3P%2BfszXeK3Gt8L%2BgTRK69rVb2Ifsd%2FZ2%2F1i7mziXE2CdMmLhXHDS4%2F%2FQOfSTs9X22XpG7%2BqCd45ImBycF68hujBYKH6Lvo8iHDkj16ZieWL5mSBES2%2B0evwHu4PUZB4rd3zWT3lVIWxd9ivbsobf0uKRofBirVR9Cpe2NHGrSTDLIH7ABEmLcAN75MzTxLWSYTir7DBvVlxnIxPQUrCD7KGR5hJSaPZRVHuVGkmSI7xu2DMAp69pWDowwoGHvgY6pgF5e5KLuquznEtbCoELyP5gBdNSQabNwfUc58CLbgWUyPGd5%2FSNkHmx9hlGJScQibbdaTHckzOygTg0HzGWYe7AQF%2B9ApLRnWDOiq%2BegzGShtmOHD3GoNIgYmr%2FoRwxplL2F9%2FUK9g5LAwEmFKCflu4Mb4ZhIr9UIpMI%2BRyULabVkzlMpwbpkOaKrHIUd9F0iRA%2BtNwvCgvT1%2Bs5KhBosIekCnePLoF&X-Amz-Signature=05bc1da5b18c38dfa2377f2a89043717c2a89d07122474285ed74383224890ab&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
