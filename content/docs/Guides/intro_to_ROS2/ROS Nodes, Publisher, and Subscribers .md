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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIHVI2V%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPrF9HD7df2%2BqkZ0Mzr75tHBtubjaJeA%2Fn7xDIK%2BxOAIgLaXragHw5fsxclY7TzkcFQnwVLYRASK1HzKcGLZGj%2BkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC0ZpI9ujBwnVjAQircA8RoFzUIOQ3iwccyyoU32SWYXS%2BIgMOQvuhmpqeH7TFVWEp9Bz39BozFJN2oBW2oPAlSrytsf%2FTAK9CwMjadOjE92AvKL7zVTULIcMvaQUUNL5cGqKQFEbK4dcLKpWhrkmiA8BH2x%2FmCwoOacQaifTc%2BvThsNtZ4f%2B7gW4uC%2FFblny%2BL6mIToI2Fzf9vHKaRImvy%2BjKViLLhDXd7RMnt5ZAMx23G%2BsPO8QEEW685fwcx4V4f9H4UTZvuJmHahXGrUqq%2Bq7DM%2FYZKgwovYTxVJ9g8%2FTpm5FwBViDiz6Alnu95Tlr4sI2J%2FwMXd1aep%2BR36fZ4Ek5KXBEJgXCizVnap%2FGybIIKFi2k7ltjWDrLwf%2BWCRZSDmrkkKdVjRg51%2B0Jnl1Z2UNhpkH9FQSDGbvMEivGc%2BcQIo2lq0tCw2rrG9AhoDK0ERIxn9IhGFMMsVWmEhXNN0jesn3UfhvOXlRPMW12eq7WfydlxNGF9EMf5QgGJu4g%2BALBRBtvS1bYFZZCxPRGqWrZ7LFLJJfriU6obqRZ%2FYrCvJvBWu2hy5xxy1%2FwouwGx1q7R7MC9mxfy7O%2FrMHjCMFDjFqmArAyJ1l%2FpsEMzyIzzwFxdeX8mmgOHKVU2d22F8ds8siApIO%2BMPnJ87wGOqUBm94OHGoH11mUDh7ACGGL65BeOd0ZFCrq4HbIh8VfCibZgFLdpVQfOXayF5qxeTqLQEoHma3mJX9DFcBk%2BS4mr0qh9v0urexjns9H3ZMQtZ4HZxg7hO7jfDtw2cvp%2Fr5mw4H018R7KTtvbU2XGBjJoz5Lt8wtJy3dZsLipaoZ3HQuVPxD1GL%2FhsS1v%2BxaxXD3sZhTkQatYC9MoWrdvtn5pxCNG0T2&X-Amz-Signature=341b4bba004ec02b02c92423d53acf9f65c168464f68e3a6301fa797bab4416d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIHVI2V%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPrF9HD7df2%2BqkZ0Mzr75tHBtubjaJeA%2Fn7xDIK%2BxOAIgLaXragHw5fsxclY7TzkcFQnwVLYRASK1HzKcGLZGj%2BkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC0ZpI9ujBwnVjAQircA8RoFzUIOQ3iwccyyoU32SWYXS%2BIgMOQvuhmpqeH7TFVWEp9Bz39BozFJN2oBW2oPAlSrytsf%2FTAK9CwMjadOjE92AvKL7zVTULIcMvaQUUNL5cGqKQFEbK4dcLKpWhrkmiA8BH2x%2FmCwoOacQaifTc%2BvThsNtZ4f%2B7gW4uC%2FFblny%2BL6mIToI2Fzf9vHKaRImvy%2BjKViLLhDXd7RMnt5ZAMx23G%2BsPO8QEEW685fwcx4V4f9H4UTZvuJmHahXGrUqq%2Bq7DM%2FYZKgwovYTxVJ9g8%2FTpm5FwBViDiz6Alnu95Tlr4sI2J%2FwMXd1aep%2BR36fZ4Ek5KXBEJgXCizVnap%2FGybIIKFi2k7ltjWDrLwf%2BWCRZSDmrkkKdVjRg51%2B0Jnl1Z2UNhpkH9FQSDGbvMEivGc%2BcQIo2lq0tCw2rrG9AhoDK0ERIxn9IhGFMMsVWmEhXNN0jesn3UfhvOXlRPMW12eq7WfydlxNGF9EMf5QgGJu4g%2BALBRBtvS1bYFZZCxPRGqWrZ7LFLJJfriU6obqRZ%2FYrCvJvBWu2hy5xxy1%2FwouwGx1q7R7MC9mxfy7O%2FrMHjCMFDjFqmArAyJ1l%2FpsEMzyIzzwFxdeX8mmgOHKVU2d22F8ds8siApIO%2BMPnJ87wGOqUBm94OHGoH11mUDh7ACGGL65BeOd0ZFCrq4HbIh8VfCibZgFLdpVQfOXayF5qxeTqLQEoHma3mJX9DFcBk%2BS4mr0qh9v0urexjns9H3ZMQtZ4HZxg7hO7jfDtw2cvp%2Fr5mw4H018R7KTtvbU2XGBjJoz5Lt8wtJy3dZsLipaoZ3HQuVPxD1GL%2FhsS1v%2BxaxXD3sZhTkQatYC9MoWrdvtn5pxCNG0T2&X-Amz-Signature=39325fd2d2d444db4e68fa317ad9037f395201120b10745676b0322b733b3eee&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIHVI2V%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPrF9HD7df2%2BqkZ0Mzr75tHBtubjaJeA%2Fn7xDIK%2BxOAIgLaXragHw5fsxclY7TzkcFQnwVLYRASK1HzKcGLZGj%2BkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC0ZpI9ujBwnVjAQircA8RoFzUIOQ3iwccyyoU32SWYXS%2BIgMOQvuhmpqeH7TFVWEp9Bz39BozFJN2oBW2oPAlSrytsf%2FTAK9CwMjadOjE92AvKL7zVTULIcMvaQUUNL5cGqKQFEbK4dcLKpWhrkmiA8BH2x%2FmCwoOacQaifTc%2BvThsNtZ4f%2B7gW4uC%2FFblny%2BL6mIToI2Fzf9vHKaRImvy%2BjKViLLhDXd7RMnt5ZAMx23G%2BsPO8QEEW685fwcx4V4f9H4UTZvuJmHahXGrUqq%2Bq7DM%2FYZKgwovYTxVJ9g8%2FTpm5FwBViDiz6Alnu95Tlr4sI2J%2FwMXd1aep%2BR36fZ4Ek5KXBEJgXCizVnap%2FGybIIKFi2k7ltjWDrLwf%2BWCRZSDmrkkKdVjRg51%2B0Jnl1Z2UNhpkH9FQSDGbvMEivGc%2BcQIo2lq0tCw2rrG9AhoDK0ERIxn9IhGFMMsVWmEhXNN0jesn3UfhvOXlRPMW12eq7WfydlxNGF9EMf5QgGJu4g%2BALBRBtvS1bYFZZCxPRGqWrZ7LFLJJfriU6obqRZ%2FYrCvJvBWu2hy5xxy1%2FwouwGx1q7R7MC9mxfy7O%2FrMHjCMFDjFqmArAyJ1l%2FpsEMzyIzzwFxdeX8mmgOHKVU2d22F8ds8siApIO%2BMPnJ87wGOqUBm94OHGoH11mUDh7ACGGL65BeOd0ZFCrq4HbIh8VfCibZgFLdpVQfOXayF5qxeTqLQEoHma3mJX9DFcBk%2BS4mr0qh9v0urexjns9H3ZMQtZ4HZxg7hO7jfDtw2cvp%2Fr5mw4H018R7KTtvbU2XGBjJoz5Lt8wtJy3dZsLipaoZ3HQuVPxD1GL%2FhsS1v%2BxaxXD3sZhTkQatYC9MoWrdvtn5pxCNG0T2&X-Amz-Signature=f06543839b67015ab631cea140e2e63618f1a8bee313121669bf190f10ca9514&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIHVI2V%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPrF9HD7df2%2BqkZ0Mzr75tHBtubjaJeA%2Fn7xDIK%2BxOAIgLaXragHw5fsxclY7TzkcFQnwVLYRASK1HzKcGLZGj%2BkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC0ZpI9ujBwnVjAQircA8RoFzUIOQ3iwccyyoU32SWYXS%2BIgMOQvuhmpqeH7TFVWEp9Bz39BozFJN2oBW2oPAlSrytsf%2FTAK9CwMjadOjE92AvKL7zVTULIcMvaQUUNL5cGqKQFEbK4dcLKpWhrkmiA8BH2x%2FmCwoOacQaifTc%2BvThsNtZ4f%2B7gW4uC%2FFblny%2BL6mIToI2Fzf9vHKaRImvy%2BjKViLLhDXd7RMnt5ZAMx23G%2BsPO8QEEW685fwcx4V4f9H4UTZvuJmHahXGrUqq%2Bq7DM%2FYZKgwovYTxVJ9g8%2FTpm5FwBViDiz6Alnu95Tlr4sI2J%2FwMXd1aep%2BR36fZ4Ek5KXBEJgXCizVnap%2FGybIIKFi2k7ltjWDrLwf%2BWCRZSDmrkkKdVjRg51%2B0Jnl1Z2UNhpkH9FQSDGbvMEivGc%2BcQIo2lq0tCw2rrG9AhoDK0ERIxn9IhGFMMsVWmEhXNN0jesn3UfhvOXlRPMW12eq7WfydlxNGF9EMf5QgGJu4g%2BALBRBtvS1bYFZZCxPRGqWrZ7LFLJJfriU6obqRZ%2FYrCvJvBWu2hy5xxy1%2FwouwGx1q7R7MC9mxfy7O%2FrMHjCMFDjFqmArAyJ1l%2FpsEMzyIzzwFxdeX8mmgOHKVU2d22F8ds8siApIO%2BMPnJ87wGOqUBm94OHGoH11mUDh7ACGGL65BeOd0ZFCrq4HbIh8VfCibZgFLdpVQfOXayF5qxeTqLQEoHma3mJX9DFcBk%2BS4mr0qh9v0urexjns9H3ZMQtZ4HZxg7hO7jfDtw2cvp%2Fr5mw4H018R7KTtvbU2XGBjJoz5Lt8wtJy3dZsLipaoZ3HQuVPxD1GL%2FhsS1v%2BxaxXD3sZhTkQatYC9MoWrdvtn5pxCNG0T2&X-Amz-Signature=1440e684ed7b04efad3d3be0455dd7a7fe7a57e9290658ecedbf429759167019&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIHVI2V%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPrF9HD7df2%2BqkZ0Mzr75tHBtubjaJeA%2Fn7xDIK%2BxOAIgLaXragHw5fsxclY7TzkcFQnwVLYRASK1HzKcGLZGj%2BkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC0ZpI9ujBwnVjAQircA8RoFzUIOQ3iwccyyoU32SWYXS%2BIgMOQvuhmpqeH7TFVWEp9Bz39BozFJN2oBW2oPAlSrytsf%2FTAK9CwMjadOjE92AvKL7zVTULIcMvaQUUNL5cGqKQFEbK4dcLKpWhrkmiA8BH2x%2FmCwoOacQaifTc%2BvThsNtZ4f%2B7gW4uC%2FFblny%2BL6mIToI2Fzf9vHKaRImvy%2BjKViLLhDXd7RMnt5ZAMx23G%2BsPO8QEEW685fwcx4V4f9H4UTZvuJmHahXGrUqq%2Bq7DM%2FYZKgwovYTxVJ9g8%2FTpm5FwBViDiz6Alnu95Tlr4sI2J%2FwMXd1aep%2BR36fZ4Ek5KXBEJgXCizVnap%2FGybIIKFi2k7ltjWDrLwf%2BWCRZSDmrkkKdVjRg51%2B0Jnl1Z2UNhpkH9FQSDGbvMEivGc%2BcQIo2lq0tCw2rrG9AhoDK0ERIxn9IhGFMMsVWmEhXNN0jesn3UfhvOXlRPMW12eq7WfydlxNGF9EMf5QgGJu4g%2BALBRBtvS1bYFZZCxPRGqWrZ7LFLJJfriU6obqRZ%2FYrCvJvBWu2hy5xxy1%2FwouwGx1q7R7MC9mxfy7O%2FrMHjCMFDjFqmArAyJ1l%2FpsEMzyIzzwFxdeX8mmgOHKVU2d22F8ds8siApIO%2BMPnJ87wGOqUBm94OHGoH11mUDh7ACGGL65BeOd0ZFCrq4HbIh8VfCibZgFLdpVQfOXayF5qxeTqLQEoHma3mJX9DFcBk%2BS4mr0qh9v0urexjns9H3ZMQtZ4HZxg7hO7jfDtw2cvp%2Fr5mw4H018R7KTtvbU2XGBjJoz5Lt8wtJy3dZsLipaoZ3HQuVPxD1GL%2FhsS1v%2BxaxXD3sZhTkQatYC9MoWrdvtn5pxCNG0T2&X-Amz-Signature=e9ce50bb0e4e49ecaaa3bca2a4cb9f53afe139c413780d82f5689948f65b6022&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIHVI2V%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPrF9HD7df2%2BqkZ0Mzr75tHBtubjaJeA%2Fn7xDIK%2BxOAIgLaXragHw5fsxclY7TzkcFQnwVLYRASK1HzKcGLZGj%2BkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC0ZpI9ujBwnVjAQircA8RoFzUIOQ3iwccyyoU32SWYXS%2BIgMOQvuhmpqeH7TFVWEp9Bz39BozFJN2oBW2oPAlSrytsf%2FTAK9CwMjadOjE92AvKL7zVTULIcMvaQUUNL5cGqKQFEbK4dcLKpWhrkmiA8BH2x%2FmCwoOacQaifTc%2BvThsNtZ4f%2B7gW4uC%2FFblny%2BL6mIToI2Fzf9vHKaRImvy%2BjKViLLhDXd7RMnt5ZAMx23G%2BsPO8QEEW685fwcx4V4f9H4UTZvuJmHahXGrUqq%2Bq7DM%2FYZKgwovYTxVJ9g8%2FTpm5FwBViDiz6Alnu95Tlr4sI2J%2FwMXd1aep%2BR36fZ4Ek5KXBEJgXCizVnap%2FGybIIKFi2k7ltjWDrLwf%2BWCRZSDmrkkKdVjRg51%2B0Jnl1Z2UNhpkH9FQSDGbvMEivGc%2BcQIo2lq0tCw2rrG9AhoDK0ERIxn9IhGFMMsVWmEhXNN0jesn3UfhvOXlRPMW12eq7WfydlxNGF9EMf5QgGJu4g%2BALBRBtvS1bYFZZCxPRGqWrZ7LFLJJfriU6obqRZ%2FYrCvJvBWu2hy5xxy1%2FwouwGx1q7R7MC9mxfy7O%2FrMHjCMFDjFqmArAyJ1l%2FpsEMzyIzzwFxdeX8mmgOHKVU2d22F8ds8siApIO%2BMPnJ87wGOqUBm94OHGoH11mUDh7ACGGL65BeOd0ZFCrq4HbIh8VfCibZgFLdpVQfOXayF5qxeTqLQEoHma3mJX9DFcBk%2BS4mr0qh9v0urexjns9H3ZMQtZ4HZxg7hO7jfDtw2cvp%2Fr5mw4H018R7KTtvbU2XGBjJoz5Lt8wtJy3dZsLipaoZ3HQuVPxD1GL%2FhsS1v%2BxaxXD3sZhTkQatYC9MoWrdvtn5pxCNG0T2&X-Amz-Signature=2c434ad51dd843e56205a5cf1bc7fcba015caabc14a44cd7a48c80b6ab4323a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIHVI2V%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPrF9HD7df2%2BqkZ0Mzr75tHBtubjaJeA%2Fn7xDIK%2BxOAIgLaXragHw5fsxclY7TzkcFQnwVLYRASK1HzKcGLZGj%2BkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC0ZpI9ujBwnVjAQircA8RoFzUIOQ3iwccyyoU32SWYXS%2BIgMOQvuhmpqeH7TFVWEp9Bz39BozFJN2oBW2oPAlSrytsf%2FTAK9CwMjadOjE92AvKL7zVTULIcMvaQUUNL5cGqKQFEbK4dcLKpWhrkmiA8BH2x%2FmCwoOacQaifTc%2BvThsNtZ4f%2B7gW4uC%2FFblny%2BL6mIToI2Fzf9vHKaRImvy%2BjKViLLhDXd7RMnt5ZAMx23G%2BsPO8QEEW685fwcx4V4f9H4UTZvuJmHahXGrUqq%2Bq7DM%2FYZKgwovYTxVJ9g8%2FTpm5FwBViDiz6Alnu95Tlr4sI2J%2FwMXd1aep%2BR36fZ4Ek5KXBEJgXCizVnap%2FGybIIKFi2k7ltjWDrLwf%2BWCRZSDmrkkKdVjRg51%2B0Jnl1Z2UNhpkH9FQSDGbvMEivGc%2BcQIo2lq0tCw2rrG9AhoDK0ERIxn9IhGFMMsVWmEhXNN0jesn3UfhvOXlRPMW12eq7WfydlxNGF9EMf5QgGJu4g%2BALBRBtvS1bYFZZCxPRGqWrZ7LFLJJfriU6obqRZ%2FYrCvJvBWu2hy5xxy1%2FwouwGx1q7R7MC9mxfy7O%2FrMHjCMFDjFqmArAyJ1l%2FpsEMzyIzzwFxdeX8mmgOHKVU2d22F8ds8siApIO%2BMPnJ87wGOqUBm94OHGoH11mUDh7ACGGL65BeOd0ZFCrq4HbIh8VfCibZgFLdpVQfOXayF5qxeTqLQEoHma3mJX9DFcBk%2BS4mr0qh9v0urexjns9H3ZMQtZ4HZxg7hO7jfDtw2cvp%2Fr5mw4H018R7KTtvbU2XGBjJoz5Lt8wtJy3dZsLipaoZ3HQuVPxD1GL%2FhsS1v%2BxaxXD3sZhTkQatYC9MoWrdvtn5pxCNG0T2&X-Amz-Signature=b4bc17efb40bb3ccd6a5356e23583c25beb63eb9fd81d1a2089754048a07cf0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEIHVI2V%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FPrF9HD7df2%2BqkZ0Mzr75tHBtubjaJeA%2Fn7xDIK%2BxOAIgLaXragHw5fsxclY7TzkcFQnwVLYRASK1HzKcGLZGj%2BkqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAC0ZpI9ujBwnVjAQircA8RoFzUIOQ3iwccyyoU32SWYXS%2BIgMOQvuhmpqeH7TFVWEp9Bz39BozFJN2oBW2oPAlSrytsf%2FTAK9CwMjadOjE92AvKL7zVTULIcMvaQUUNL5cGqKQFEbK4dcLKpWhrkmiA8BH2x%2FmCwoOacQaifTc%2BvThsNtZ4f%2B7gW4uC%2FFblny%2BL6mIToI2Fzf9vHKaRImvy%2BjKViLLhDXd7RMnt5ZAMx23G%2BsPO8QEEW685fwcx4V4f9H4UTZvuJmHahXGrUqq%2Bq7DM%2FYZKgwovYTxVJ9g8%2FTpm5FwBViDiz6Alnu95Tlr4sI2J%2FwMXd1aep%2BR36fZ4Ek5KXBEJgXCizVnap%2FGybIIKFi2k7ltjWDrLwf%2BWCRZSDmrkkKdVjRg51%2B0Jnl1Z2UNhpkH9FQSDGbvMEivGc%2BcQIo2lq0tCw2rrG9AhoDK0ERIxn9IhGFMMsVWmEhXNN0jesn3UfhvOXlRPMW12eq7WfydlxNGF9EMf5QgGJu4g%2BALBRBtvS1bYFZZCxPRGqWrZ7LFLJJfriU6obqRZ%2FYrCvJvBWu2hy5xxy1%2FwouwGx1q7R7MC9mxfy7O%2FrMHjCMFDjFqmArAyJ1l%2FpsEMzyIzzwFxdeX8mmgOHKVU2d22F8ds8siApIO%2BMPnJ87wGOqUBm94OHGoH11mUDh7ACGGL65BeOd0ZFCrq4HbIh8VfCibZgFLdpVQfOXayF5qxeTqLQEoHma3mJX9DFcBk%2BS4mr0qh9v0urexjns9H3ZMQtZ4HZxg7hO7jfDtw2cvp%2Fr5mw4H018R7KTtvbU2XGBjJoz5Lt8wtJy3dZsLipaoZ3HQuVPxD1GL%2FhsS1v%2BxaxXD3sZhTkQatYC9MoWrdvtn5pxCNG0T2&X-Amz-Signature=13b6db89658ca1aa37d5e640e70bbda8b9ea66bb1c3accac2edac8cef4476042&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
