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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTV7KKN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSrL5Iu7UnU7mCv33XCsqNjOeZIwJLSiUmdz1Pg1fpyQIgUqLYKzZ8PmSx8TwV4zbnnhpZoZXiaFzd0EMymmix4KQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsMsHD4GiXY4PcnoSrcA3cmrqyuibQyIotB2LMucXDHnNZxlHTa%2FDqmE%2Bs5Gubb7tjnDgJxT8eTnZ9tiqvqPZj6fRdTHr8jKn6pI5bzpZQuutf1maedhBEHPNQ8%2BGR02MaYUasNqQRgE3I1QmgqG3br55UWkPeCKm90OOc3LamgnJb9D91CBoiRwonfWR%2F10haMC%2BSxlCtqlqh%2FjQWISg7DrceuYlPif96%2B%2BE4Kc8Haer976EatTSl9cRB1wPagZmWVzsZRIFbx53MX8PRC7sApu7OHDg4PpJgrx1VwtV0XbWpUEHdyOJsgbjW0LIrNCBfmw6p5AePJPKTtlOIbHH7J047O8%2Bzeed3fztu71JO9yGpYZ9%2BTVPzBdY%2FEEMcdfwBklIOmAFrvq1N4LfNq6sOe62%2FZiNvpYE%2BqWCADKkkI6GHqS63tHcxyu6eM6WqYpcCzNAiPFxZqd6GgHvzGoijB%2FiYOpMkUvltcxNiPAyZxRtv1dgVV9mOHLLduXt6zDruARe9oiAtZYaayVe4dTnMbAcvHJe4%2BggVi84vjCJYAUBi7Nfy7wb7X7Js2yz8bx3illhSBQ0o9ep%2FGMBq0epF5ewli9erHmnjWz0F%2BF3iEdrMOf3Qh5neTFVytIkBN7IEDxuDFBIUZ1EP4MLXByr4GOqUBVM4W9DSFlXKn2TU0y7sgU32Fi8ntb6ihIxmTv8H8hOu4R0zDlkgoX4v9LH50gODVHYYYK0hnoGmp8rLfaKQBVEhMSChUmWNOH4k%2BliEyzWpGvib6nsP1PZBEVwECAYY1Nrcr7VyDDMYf8ChnGV79D1onapCl3z%2F6MEakkZccCRrO8wY5oLQpYQ08BlWO88LR3SDpocqcxVVaosVrno4Ka0mws1y2&X-Amz-Signature=fd195840100444abbdc3e4e2220f8c3c80e20f234bc115631451f3b5426dd0ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTV7KKN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSrL5Iu7UnU7mCv33XCsqNjOeZIwJLSiUmdz1Pg1fpyQIgUqLYKzZ8PmSx8TwV4zbnnhpZoZXiaFzd0EMymmix4KQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsMsHD4GiXY4PcnoSrcA3cmrqyuibQyIotB2LMucXDHnNZxlHTa%2FDqmE%2Bs5Gubb7tjnDgJxT8eTnZ9tiqvqPZj6fRdTHr8jKn6pI5bzpZQuutf1maedhBEHPNQ8%2BGR02MaYUasNqQRgE3I1QmgqG3br55UWkPeCKm90OOc3LamgnJb9D91CBoiRwonfWR%2F10haMC%2BSxlCtqlqh%2FjQWISg7DrceuYlPif96%2B%2BE4Kc8Haer976EatTSl9cRB1wPagZmWVzsZRIFbx53MX8PRC7sApu7OHDg4PpJgrx1VwtV0XbWpUEHdyOJsgbjW0LIrNCBfmw6p5AePJPKTtlOIbHH7J047O8%2Bzeed3fztu71JO9yGpYZ9%2BTVPzBdY%2FEEMcdfwBklIOmAFrvq1N4LfNq6sOe62%2FZiNvpYE%2BqWCADKkkI6GHqS63tHcxyu6eM6WqYpcCzNAiPFxZqd6GgHvzGoijB%2FiYOpMkUvltcxNiPAyZxRtv1dgVV9mOHLLduXt6zDruARe9oiAtZYaayVe4dTnMbAcvHJe4%2BggVi84vjCJYAUBi7Nfy7wb7X7Js2yz8bx3illhSBQ0o9ep%2FGMBq0epF5ewli9erHmnjWz0F%2BF3iEdrMOf3Qh5neTFVytIkBN7IEDxuDFBIUZ1EP4MLXByr4GOqUBVM4W9DSFlXKn2TU0y7sgU32Fi8ntb6ihIxmTv8H8hOu4R0zDlkgoX4v9LH50gODVHYYYK0hnoGmp8rLfaKQBVEhMSChUmWNOH4k%2BliEyzWpGvib6nsP1PZBEVwECAYY1Nrcr7VyDDMYf8ChnGV79D1onapCl3z%2F6MEakkZccCRrO8wY5oLQpYQ08BlWO88LR3SDpocqcxVVaosVrno4Ka0mws1y2&X-Amz-Signature=e950f05228341d603d5aac16fcff7ad43d1fe41a85a935902c6bb198d5c0f46a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTV7KKN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSrL5Iu7UnU7mCv33XCsqNjOeZIwJLSiUmdz1Pg1fpyQIgUqLYKzZ8PmSx8TwV4zbnnhpZoZXiaFzd0EMymmix4KQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsMsHD4GiXY4PcnoSrcA3cmrqyuibQyIotB2LMucXDHnNZxlHTa%2FDqmE%2Bs5Gubb7tjnDgJxT8eTnZ9tiqvqPZj6fRdTHr8jKn6pI5bzpZQuutf1maedhBEHPNQ8%2BGR02MaYUasNqQRgE3I1QmgqG3br55UWkPeCKm90OOc3LamgnJb9D91CBoiRwonfWR%2F10haMC%2BSxlCtqlqh%2FjQWISg7DrceuYlPif96%2B%2BE4Kc8Haer976EatTSl9cRB1wPagZmWVzsZRIFbx53MX8PRC7sApu7OHDg4PpJgrx1VwtV0XbWpUEHdyOJsgbjW0LIrNCBfmw6p5AePJPKTtlOIbHH7J047O8%2Bzeed3fztu71JO9yGpYZ9%2BTVPzBdY%2FEEMcdfwBklIOmAFrvq1N4LfNq6sOe62%2FZiNvpYE%2BqWCADKkkI6GHqS63tHcxyu6eM6WqYpcCzNAiPFxZqd6GgHvzGoijB%2FiYOpMkUvltcxNiPAyZxRtv1dgVV9mOHLLduXt6zDruARe9oiAtZYaayVe4dTnMbAcvHJe4%2BggVi84vjCJYAUBi7Nfy7wb7X7Js2yz8bx3illhSBQ0o9ep%2FGMBq0epF5ewli9erHmnjWz0F%2BF3iEdrMOf3Qh5neTFVytIkBN7IEDxuDFBIUZ1EP4MLXByr4GOqUBVM4W9DSFlXKn2TU0y7sgU32Fi8ntb6ihIxmTv8H8hOu4R0zDlkgoX4v9LH50gODVHYYYK0hnoGmp8rLfaKQBVEhMSChUmWNOH4k%2BliEyzWpGvib6nsP1PZBEVwECAYY1Nrcr7VyDDMYf8ChnGV79D1onapCl3z%2F6MEakkZccCRrO8wY5oLQpYQ08BlWO88LR3SDpocqcxVVaosVrno4Ka0mws1y2&X-Amz-Signature=beca048fcb3ea0ec19e5b4016b202e0e00d11ebaf94507352f7bd2d70e210082&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTV7KKN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSrL5Iu7UnU7mCv33XCsqNjOeZIwJLSiUmdz1Pg1fpyQIgUqLYKzZ8PmSx8TwV4zbnnhpZoZXiaFzd0EMymmix4KQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsMsHD4GiXY4PcnoSrcA3cmrqyuibQyIotB2LMucXDHnNZxlHTa%2FDqmE%2Bs5Gubb7tjnDgJxT8eTnZ9tiqvqPZj6fRdTHr8jKn6pI5bzpZQuutf1maedhBEHPNQ8%2BGR02MaYUasNqQRgE3I1QmgqG3br55UWkPeCKm90OOc3LamgnJb9D91CBoiRwonfWR%2F10haMC%2BSxlCtqlqh%2FjQWISg7DrceuYlPif96%2B%2BE4Kc8Haer976EatTSl9cRB1wPagZmWVzsZRIFbx53MX8PRC7sApu7OHDg4PpJgrx1VwtV0XbWpUEHdyOJsgbjW0LIrNCBfmw6p5AePJPKTtlOIbHH7J047O8%2Bzeed3fztu71JO9yGpYZ9%2BTVPzBdY%2FEEMcdfwBklIOmAFrvq1N4LfNq6sOe62%2FZiNvpYE%2BqWCADKkkI6GHqS63tHcxyu6eM6WqYpcCzNAiPFxZqd6GgHvzGoijB%2FiYOpMkUvltcxNiPAyZxRtv1dgVV9mOHLLduXt6zDruARe9oiAtZYaayVe4dTnMbAcvHJe4%2BggVi84vjCJYAUBi7Nfy7wb7X7Js2yz8bx3illhSBQ0o9ep%2FGMBq0epF5ewli9erHmnjWz0F%2BF3iEdrMOf3Qh5neTFVytIkBN7IEDxuDFBIUZ1EP4MLXByr4GOqUBVM4W9DSFlXKn2TU0y7sgU32Fi8ntb6ihIxmTv8H8hOu4R0zDlkgoX4v9LH50gODVHYYYK0hnoGmp8rLfaKQBVEhMSChUmWNOH4k%2BliEyzWpGvib6nsP1PZBEVwECAYY1Nrcr7VyDDMYf8ChnGV79D1onapCl3z%2F6MEakkZccCRrO8wY5oLQpYQ08BlWO88LR3SDpocqcxVVaosVrno4Ka0mws1y2&X-Amz-Signature=8c2d64627e19fe0d81624d098f2a36a02f31227b79c01fc066c5782e11cd3bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTV7KKN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSrL5Iu7UnU7mCv33XCsqNjOeZIwJLSiUmdz1Pg1fpyQIgUqLYKzZ8PmSx8TwV4zbnnhpZoZXiaFzd0EMymmix4KQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsMsHD4GiXY4PcnoSrcA3cmrqyuibQyIotB2LMucXDHnNZxlHTa%2FDqmE%2Bs5Gubb7tjnDgJxT8eTnZ9tiqvqPZj6fRdTHr8jKn6pI5bzpZQuutf1maedhBEHPNQ8%2BGR02MaYUasNqQRgE3I1QmgqG3br55UWkPeCKm90OOc3LamgnJb9D91CBoiRwonfWR%2F10haMC%2BSxlCtqlqh%2FjQWISg7DrceuYlPif96%2B%2BE4Kc8Haer976EatTSl9cRB1wPagZmWVzsZRIFbx53MX8PRC7sApu7OHDg4PpJgrx1VwtV0XbWpUEHdyOJsgbjW0LIrNCBfmw6p5AePJPKTtlOIbHH7J047O8%2Bzeed3fztu71JO9yGpYZ9%2BTVPzBdY%2FEEMcdfwBklIOmAFrvq1N4LfNq6sOe62%2FZiNvpYE%2BqWCADKkkI6GHqS63tHcxyu6eM6WqYpcCzNAiPFxZqd6GgHvzGoijB%2FiYOpMkUvltcxNiPAyZxRtv1dgVV9mOHLLduXt6zDruARe9oiAtZYaayVe4dTnMbAcvHJe4%2BggVi84vjCJYAUBi7Nfy7wb7X7Js2yz8bx3illhSBQ0o9ep%2FGMBq0epF5ewli9erHmnjWz0F%2BF3iEdrMOf3Qh5neTFVytIkBN7IEDxuDFBIUZ1EP4MLXByr4GOqUBVM4W9DSFlXKn2TU0y7sgU32Fi8ntb6ihIxmTv8H8hOu4R0zDlkgoX4v9LH50gODVHYYYK0hnoGmp8rLfaKQBVEhMSChUmWNOH4k%2BliEyzWpGvib6nsP1PZBEVwECAYY1Nrcr7VyDDMYf8ChnGV79D1onapCl3z%2F6MEakkZccCRrO8wY5oLQpYQ08BlWO88LR3SDpocqcxVVaosVrno4Ka0mws1y2&X-Amz-Signature=0cb7ac62082cc71fd3b72fd84446b6e211a6971cdc3d76b39222b9e452f3cc95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTV7KKN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSrL5Iu7UnU7mCv33XCsqNjOeZIwJLSiUmdz1Pg1fpyQIgUqLYKzZ8PmSx8TwV4zbnnhpZoZXiaFzd0EMymmix4KQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsMsHD4GiXY4PcnoSrcA3cmrqyuibQyIotB2LMucXDHnNZxlHTa%2FDqmE%2Bs5Gubb7tjnDgJxT8eTnZ9tiqvqPZj6fRdTHr8jKn6pI5bzpZQuutf1maedhBEHPNQ8%2BGR02MaYUasNqQRgE3I1QmgqG3br55UWkPeCKm90OOc3LamgnJb9D91CBoiRwonfWR%2F10haMC%2BSxlCtqlqh%2FjQWISg7DrceuYlPif96%2B%2BE4Kc8Haer976EatTSl9cRB1wPagZmWVzsZRIFbx53MX8PRC7sApu7OHDg4PpJgrx1VwtV0XbWpUEHdyOJsgbjW0LIrNCBfmw6p5AePJPKTtlOIbHH7J047O8%2Bzeed3fztu71JO9yGpYZ9%2BTVPzBdY%2FEEMcdfwBklIOmAFrvq1N4LfNq6sOe62%2FZiNvpYE%2BqWCADKkkI6GHqS63tHcxyu6eM6WqYpcCzNAiPFxZqd6GgHvzGoijB%2FiYOpMkUvltcxNiPAyZxRtv1dgVV9mOHLLduXt6zDruARe9oiAtZYaayVe4dTnMbAcvHJe4%2BggVi84vjCJYAUBi7Nfy7wb7X7Js2yz8bx3illhSBQ0o9ep%2FGMBq0epF5ewli9erHmnjWz0F%2BF3iEdrMOf3Qh5neTFVytIkBN7IEDxuDFBIUZ1EP4MLXByr4GOqUBVM4W9DSFlXKn2TU0y7sgU32Fi8ntb6ihIxmTv8H8hOu4R0zDlkgoX4v9LH50gODVHYYYK0hnoGmp8rLfaKQBVEhMSChUmWNOH4k%2BliEyzWpGvib6nsP1PZBEVwECAYY1Nrcr7VyDDMYf8ChnGV79D1onapCl3z%2F6MEakkZccCRrO8wY5oLQpYQ08BlWO88LR3SDpocqcxVVaosVrno4Ka0mws1y2&X-Amz-Signature=b277b41447a8802d13909ece6966fa89f10432b65d35ad30c09e78c44355e6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTV7KKN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSrL5Iu7UnU7mCv33XCsqNjOeZIwJLSiUmdz1Pg1fpyQIgUqLYKzZ8PmSx8TwV4zbnnhpZoZXiaFzd0EMymmix4KQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsMsHD4GiXY4PcnoSrcA3cmrqyuibQyIotB2LMucXDHnNZxlHTa%2FDqmE%2Bs5Gubb7tjnDgJxT8eTnZ9tiqvqPZj6fRdTHr8jKn6pI5bzpZQuutf1maedhBEHPNQ8%2BGR02MaYUasNqQRgE3I1QmgqG3br55UWkPeCKm90OOc3LamgnJb9D91CBoiRwonfWR%2F10haMC%2BSxlCtqlqh%2FjQWISg7DrceuYlPif96%2B%2BE4Kc8Haer976EatTSl9cRB1wPagZmWVzsZRIFbx53MX8PRC7sApu7OHDg4PpJgrx1VwtV0XbWpUEHdyOJsgbjW0LIrNCBfmw6p5AePJPKTtlOIbHH7J047O8%2Bzeed3fztu71JO9yGpYZ9%2BTVPzBdY%2FEEMcdfwBklIOmAFrvq1N4LfNq6sOe62%2FZiNvpYE%2BqWCADKkkI6GHqS63tHcxyu6eM6WqYpcCzNAiPFxZqd6GgHvzGoijB%2FiYOpMkUvltcxNiPAyZxRtv1dgVV9mOHLLduXt6zDruARe9oiAtZYaayVe4dTnMbAcvHJe4%2BggVi84vjCJYAUBi7Nfy7wb7X7Js2yz8bx3illhSBQ0o9ep%2FGMBq0epF5ewli9erHmnjWz0F%2BF3iEdrMOf3Qh5neTFVytIkBN7IEDxuDFBIUZ1EP4MLXByr4GOqUBVM4W9DSFlXKn2TU0y7sgU32Fi8ntb6ihIxmTv8H8hOu4R0zDlkgoX4v9LH50gODVHYYYK0hnoGmp8rLfaKQBVEhMSChUmWNOH4k%2BliEyzWpGvib6nsP1PZBEVwECAYY1Nrcr7VyDDMYf8ChnGV79D1onapCl3z%2F6MEakkZccCRrO8wY5oLQpYQ08BlWO88LR3SDpocqcxVVaosVrno4Ka0mws1y2&X-Amz-Signature=e40dd9733e061ac81afc2390c931d78b78cf371ce4529ac1aef6d48a96187c74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTV7KKN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSrL5Iu7UnU7mCv33XCsqNjOeZIwJLSiUmdz1Pg1fpyQIgUqLYKzZ8PmSx8TwV4zbnnhpZoZXiaFzd0EMymmix4KQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsMsHD4GiXY4PcnoSrcA3cmrqyuibQyIotB2LMucXDHnNZxlHTa%2FDqmE%2Bs5Gubb7tjnDgJxT8eTnZ9tiqvqPZj6fRdTHr8jKn6pI5bzpZQuutf1maedhBEHPNQ8%2BGR02MaYUasNqQRgE3I1QmgqG3br55UWkPeCKm90OOc3LamgnJb9D91CBoiRwonfWR%2F10haMC%2BSxlCtqlqh%2FjQWISg7DrceuYlPif96%2B%2BE4Kc8Haer976EatTSl9cRB1wPagZmWVzsZRIFbx53MX8PRC7sApu7OHDg4PpJgrx1VwtV0XbWpUEHdyOJsgbjW0LIrNCBfmw6p5AePJPKTtlOIbHH7J047O8%2Bzeed3fztu71JO9yGpYZ9%2BTVPzBdY%2FEEMcdfwBklIOmAFrvq1N4LfNq6sOe62%2FZiNvpYE%2BqWCADKkkI6GHqS63tHcxyu6eM6WqYpcCzNAiPFxZqd6GgHvzGoijB%2FiYOpMkUvltcxNiPAyZxRtv1dgVV9mOHLLduXt6zDruARe9oiAtZYaayVe4dTnMbAcvHJe4%2BggVi84vjCJYAUBi7Nfy7wb7X7Js2yz8bx3illhSBQ0o9ep%2FGMBq0epF5ewli9erHmnjWz0F%2BF3iEdrMOf3Qh5neTFVytIkBN7IEDxuDFBIUZ1EP4MLXByr4GOqUBVM4W9DSFlXKn2TU0y7sgU32Fi8ntb6ihIxmTv8H8hOu4R0zDlkgoX4v9LH50gODVHYYYK0hnoGmp8rLfaKQBVEhMSChUmWNOH4k%2BliEyzWpGvib6nsP1PZBEVwECAYY1Nrcr7VyDDMYf8ChnGV79D1onapCl3z%2F6MEakkZccCRrO8wY5oLQpYQ08BlWO88LR3SDpocqcxVVaosVrno4Ka0mws1y2&X-Amz-Signature=35804913147857367bc5693819482c3f372caf97e5d08d4bbea4976ee548f8d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
