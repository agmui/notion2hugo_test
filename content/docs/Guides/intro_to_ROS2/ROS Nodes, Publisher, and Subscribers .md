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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUVEAWJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD90RS9xQSl3piZvTtq5vc6DD9VR6uJQWRtbjjTGpGgAwIgXA3YEO1tTPfgaDXC%2B4r5vWbjcHKLk9oiwuNCWpoLNdQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII9aHwY3ajsnlOseircA%2BX7bzpHsgilM2lkRuiaiCA9w9OdtgCse42ZhXjAnhtmIkb%2Bc6s%2Bfx6Nh4SZ1JWXpPxFUxfot5rr49%2FHP7yxLopH4gD5fUPLN%2FcT7J0bMT%2B%2FzVAj%2BVSc0I7PytCObq2h10i1l0uJ%2F9b40FLkoQ2Boal%2FFBVPCDrxfB53URIXLPzr3x1X7xRzpsEqNoBFZzOMnaJIvDgCyFbYoCppGsUVKWNm8nAPEFzGGHjWkMCjbFuLjihWsiTu21vxWbUzkXRTqCaURhHe9o3%2Ft%2BKNqM1TKyhBLiXsC3Yk4g7jgAv6oOwkVXG5J2xk6WDCrXAoo4q3sF%2BOzCgZi9YhZ%2BBhuRnF0cqoVFtdiVEOqF6CoVGdzg1WaLyWlK1m0psaCMLe75%2BQC97coN5%2BWfF9SQD5GwNqk6HrYOcEwDm8%2BL4IYvwQ%2BGOvaBi306dAXvgnh2t%2B0TrH1AUKNpURK1WyNv4Oco3%2B2fXmbOPVlWiqFMkcyuF9EY0MJblgBc4wQZ9fd2bIY5l2ld1UURsbVCxu882w1nuu6k7OMyjobrDn2MJBlV0V4W9Bhw5HadPBBfcSJdlAs5YdUBhH8DVx2dPuqMEPUeOgUWVGrFj%2FttC0OJU8huwp1%2F8GviHh5nNxl0FiRUQaMOak3r8GOqUBuzzfNRKPmuUbnJcRElvHCmM6gKs793WX4Sj7ffzqHdUm%2FX2DqxybNmLyB23CeEKLIMB9JBtTnGEGSsyId5wOSZBdxEBCndkJPXk%2FqT5jzO8heyUpWJiLXmSBiY2fofDViEwH7ABbpVLAusTMPgRIu15S%2BYpOp5ZbP7uUi9lGIy3VjIXEOV2epvPJQKtvwvCDWucuWO1xCtxYXeAHAo1ZKfmuLuag&X-Amz-Signature=36a7ff68ed7bccb75e7085ce78e6e395e244e3e7e050cb094648444ad703e583&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUVEAWJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD90RS9xQSl3piZvTtq5vc6DD9VR6uJQWRtbjjTGpGgAwIgXA3YEO1tTPfgaDXC%2B4r5vWbjcHKLk9oiwuNCWpoLNdQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII9aHwY3ajsnlOseircA%2BX7bzpHsgilM2lkRuiaiCA9w9OdtgCse42ZhXjAnhtmIkb%2Bc6s%2Bfx6Nh4SZ1JWXpPxFUxfot5rr49%2FHP7yxLopH4gD5fUPLN%2FcT7J0bMT%2B%2FzVAj%2BVSc0I7PytCObq2h10i1l0uJ%2F9b40FLkoQ2Boal%2FFBVPCDrxfB53URIXLPzr3x1X7xRzpsEqNoBFZzOMnaJIvDgCyFbYoCppGsUVKWNm8nAPEFzGGHjWkMCjbFuLjihWsiTu21vxWbUzkXRTqCaURhHe9o3%2Ft%2BKNqM1TKyhBLiXsC3Yk4g7jgAv6oOwkVXG5J2xk6WDCrXAoo4q3sF%2BOzCgZi9YhZ%2BBhuRnF0cqoVFtdiVEOqF6CoVGdzg1WaLyWlK1m0psaCMLe75%2BQC97coN5%2BWfF9SQD5GwNqk6HrYOcEwDm8%2BL4IYvwQ%2BGOvaBi306dAXvgnh2t%2B0TrH1AUKNpURK1WyNv4Oco3%2B2fXmbOPVlWiqFMkcyuF9EY0MJblgBc4wQZ9fd2bIY5l2ld1UURsbVCxu882w1nuu6k7OMyjobrDn2MJBlV0V4W9Bhw5HadPBBfcSJdlAs5YdUBhH8DVx2dPuqMEPUeOgUWVGrFj%2FttC0OJU8huwp1%2F8GviHh5nNxl0FiRUQaMOak3r8GOqUBuzzfNRKPmuUbnJcRElvHCmM6gKs793WX4Sj7ffzqHdUm%2FX2DqxybNmLyB23CeEKLIMB9JBtTnGEGSsyId5wOSZBdxEBCndkJPXk%2FqT5jzO8heyUpWJiLXmSBiY2fofDViEwH7ABbpVLAusTMPgRIu15S%2BYpOp5ZbP7uUi9lGIy3VjIXEOV2epvPJQKtvwvCDWucuWO1xCtxYXeAHAo1ZKfmuLuag&X-Amz-Signature=411e22b877402fba63008ccef84d4d94afb04de23cffee11ee7f2db767c39410&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUVEAWJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD90RS9xQSl3piZvTtq5vc6DD9VR6uJQWRtbjjTGpGgAwIgXA3YEO1tTPfgaDXC%2B4r5vWbjcHKLk9oiwuNCWpoLNdQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII9aHwY3ajsnlOseircA%2BX7bzpHsgilM2lkRuiaiCA9w9OdtgCse42ZhXjAnhtmIkb%2Bc6s%2Bfx6Nh4SZ1JWXpPxFUxfot5rr49%2FHP7yxLopH4gD5fUPLN%2FcT7J0bMT%2B%2FzVAj%2BVSc0I7PytCObq2h10i1l0uJ%2F9b40FLkoQ2Boal%2FFBVPCDrxfB53URIXLPzr3x1X7xRzpsEqNoBFZzOMnaJIvDgCyFbYoCppGsUVKWNm8nAPEFzGGHjWkMCjbFuLjihWsiTu21vxWbUzkXRTqCaURhHe9o3%2Ft%2BKNqM1TKyhBLiXsC3Yk4g7jgAv6oOwkVXG5J2xk6WDCrXAoo4q3sF%2BOzCgZi9YhZ%2BBhuRnF0cqoVFtdiVEOqF6CoVGdzg1WaLyWlK1m0psaCMLe75%2BQC97coN5%2BWfF9SQD5GwNqk6HrYOcEwDm8%2BL4IYvwQ%2BGOvaBi306dAXvgnh2t%2B0TrH1AUKNpURK1WyNv4Oco3%2B2fXmbOPVlWiqFMkcyuF9EY0MJblgBc4wQZ9fd2bIY5l2ld1UURsbVCxu882w1nuu6k7OMyjobrDn2MJBlV0V4W9Bhw5HadPBBfcSJdlAs5YdUBhH8DVx2dPuqMEPUeOgUWVGrFj%2FttC0OJU8huwp1%2F8GviHh5nNxl0FiRUQaMOak3r8GOqUBuzzfNRKPmuUbnJcRElvHCmM6gKs793WX4Sj7ffzqHdUm%2FX2DqxybNmLyB23CeEKLIMB9JBtTnGEGSsyId5wOSZBdxEBCndkJPXk%2FqT5jzO8heyUpWJiLXmSBiY2fofDViEwH7ABbpVLAusTMPgRIu15S%2BYpOp5ZbP7uUi9lGIy3VjIXEOV2epvPJQKtvwvCDWucuWO1xCtxYXeAHAo1ZKfmuLuag&X-Amz-Signature=7ae5fcb007cf253e8a50e376d5ceb8ca7e6d6b23016eba7e7da7495f46689d38&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUVEAWJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD90RS9xQSl3piZvTtq5vc6DD9VR6uJQWRtbjjTGpGgAwIgXA3YEO1tTPfgaDXC%2B4r5vWbjcHKLk9oiwuNCWpoLNdQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII9aHwY3ajsnlOseircA%2BX7bzpHsgilM2lkRuiaiCA9w9OdtgCse42ZhXjAnhtmIkb%2Bc6s%2Bfx6Nh4SZ1JWXpPxFUxfot5rr49%2FHP7yxLopH4gD5fUPLN%2FcT7J0bMT%2B%2FzVAj%2BVSc0I7PytCObq2h10i1l0uJ%2F9b40FLkoQ2Boal%2FFBVPCDrxfB53URIXLPzr3x1X7xRzpsEqNoBFZzOMnaJIvDgCyFbYoCppGsUVKWNm8nAPEFzGGHjWkMCjbFuLjihWsiTu21vxWbUzkXRTqCaURhHe9o3%2Ft%2BKNqM1TKyhBLiXsC3Yk4g7jgAv6oOwkVXG5J2xk6WDCrXAoo4q3sF%2BOzCgZi9YhZ%2BBhuRnF0cqoVFtdiVEOqF6CoVGdzg1WaLyWlK1m0psaCMLe75%2BQC97coN5%2BWfF9SQD5GwNqk6HrYOcEwDm8%2BL4IYvwQ%2BGOvaBi306dAXvgnh2t%2B0TrH1AUKNpURK1WyNv4Oco3%2B2fXmbOPVlWiqFMkcyuF9EY0MJblgBc4wQZ9fd2bIY5l2ld1UURsbVCxu882w1nuu6k7OMyjobrDn2MJBlV0V4W9Bhw5HadPBBfcSJdlAs5YdUBhH8DVx2dPuqMEPUeOgUWVGrFj%2FttC0OJU8huwp1%2F8GviHh5nNxl0FiRUQaMOak3r8GOqUBuzzfNRKPmuUbnJcRElvHCmM6gKs793WX4Sj7ffzqHdUm%2FX2DqxybNmLyB23CeEKLIMB9JBtTnGEGSsyId5wOSZBdxEBCndkJPXk%2FqT5jzO8heyUpWJiLXmSBiY2fofDViEwH7ABbpVLAusTMPgRIu15S%2BYpOp5ZbP7uUi9lGIy3VjIXEOV2epvPJQKtvwvCDWucuWO1xCtxYXeAHAo1ZKfmuLuag&X-Amz-Signature=d3204b085317cf72aebe6d6fb91dc8b8af304237d084844ae4a3818b0abbb086&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUVEAWJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD90RS9xQSl3piZvTtq5vc6DD9VR6uJQWRtbjjTGpGgAwIgXA3YEO1tTPfgaDXC%2B4r5vWbjcHKLk9oiwuNCWpoLNdQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII9aHwY3ajsnlOseircA%2BX7bzpHsgilM2lkRuiaiCA9w9OdtgCse42ZhXjAnhtmIkb%2Bc6s%2Bfx6Nh4SZ1JWXpPxFUxfot5rr49%2FHP7yxLopH4gD5fUPLN%2FcT7J0bMT%2B%2FzVAj%2BVSc0I7PytCObq2h10i1l0uJ%2F9b40FLkoQ2Boal%2FFBVPCDrxfB53URIXLPzr3x1X7xRzpsEqNoBFZzOMnaJIvDgCyFbYoCppGsUVKWNm8nAPEFzGGHjWkMCjbFuLjihWsiTu21vxWbUzkXRTqCaURhHe9o3%2Ft%2BKNqM1TKyhBLiXsC3Yk4g7jgAv6oOwkVXG5J2xk6WDCrXAoo4q3sF%2BOzCgZi9YhZ%2BBhuRnF0cqoVFtdiVEOqF6CoVGdzg1WaLyWlK1m0psaCMLe75%2BQC97coN5%2BWfF9SQD5GwNqk6HrYOcEwDm8%2BL4IYvwQ%2BGOvaBi306dAXvgnh2t%2B0TrH1AUKNpURK1WyNv4Oco3%2B2fXmbOPVlWiqFMkcyuF9EY0MJblgBc4wQZ9fd2bIY5l2ld1UURsbVCxu882w1nuu6k7OMyjobrDn2MJBlV0V4W9Bhw5HadPBBfcSJdlAs5YdUBhH8DVx2dPuqMEPUeOgUWVGrFj%2FttC0OJU8huwp1%2F8GviHh5nNxl0FiRUQaMOak3r8GOqUBuzzfNRKPmuUbnJcRElvHCmM6gKs793WX4Sj7ffzqHdUm%2FX2DqxybNmLyB23CeEKLIMB9JBtTnGEGSsyId5wOSZBdxEBCndkJPXk%2FqT5jzO8heyUpWJiLXmSBiY2fofDViEwH7ABbpVLAusTMPgRIu15S%2BYpOp5ZbP7uUi9lGIy3VjIXEOV2epvPJQKtvwvCDWucuWO1xCtxYXeAHAo1ZKfmuLuag&X-Amz-Signature=52ebc52b9974d89ebaeae385410648d3610fd291e2bf9c66a20afcdf6373a539&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUVEAWJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD90RS9xQSl3piZvTtq5vc6DD9VR6uJQWRtbjjTGpGgAwIgXA3YEO1tTPfgaDXC%2B4r5vWbjcHKLk9oiwuNCWpoLNdQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII9aHwY3ajsnlOseircA%2BX7bzpHsgilM2lkRuiaiCA9w9OdtgCse42ZhXjAnhtmIkb%2Bc6s%2Bfx6Nh4SZ1JWXpPxFUxfot5rr49%2FHP7yxLopH4gD5fUPLN%2FcT7J0bMT%2B%2FzVAj%2BVSc0I7PytCObq2h10i1l0uJ%2F9b40FLkoQ2Boal%2FFBVPCDrxfB53URIXLPzr3x1X7xRzpsEqNoBFZzOMnaJIvDgCyFbYoCppGsUVKWNm8nAPEFzGGHjWkMCjbFuLjihWsiTu21vxWbUzkXRTqCaURhHe9o3%2Ft%2BKNqM1TKyhBLiXsC3Yk4g7jgAv6oOwkVXG5J2xk6WDCrXAoo4q3sF%2BOzCgZi9YhZ%2BBhuRnF0cqoVFtdiVEOqF6CoVGdzg1WaLyWlK1m0psaCMLe75%2BQC97coN5%2BWfF9SQD5GwNqk6HrYOcEwDm8%2BL4IYvwQ%2BGOvaBi306dAXvgnh2t%2B0TrH1AUKNpURK1WyNv4Oco3%2B2fXmbOPVlWiqFMkcyuF9EY0MJblgBc4wQZ9fd2bIY5l2ld1UURsbVCxu882w1nuu6k7OMyjobrDn2MJBlV0V4W9Bhw5HadPBBfcSJdlAs5YdUBhH8DVx2dPuqMEPUeOgUWVGrFj%2FttC0OJU8huwp1%2F8GviHh5nNxl0FiRUQaMOak3r8GOqUBuzzfNRKPmuUbnJcRElvHCmM6gKs793WX4Sj7ffzqHdUm%2FX2DqxybNmLyB23CeEKLIMB9JBtTnGEGSsyId5wOSZBdxEBCndkJPXk%2FqT5jzO8heyUpWJiLXmSBiY2fofDViEwH7ABbpVLAusTMPgRIu15S%2BYpOp5ZbP7uUi9lGIy3VjIXEOV2epvPJQKtvwvCDWucuWO1xCtxYXeAHAo1ZKfmuLuag&X-Amz-Signature=9b8533ac629151e81c0bc1d44ab24ee0abfd49b671981f91e9fcff0c1990fae9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUVEAWJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD90RS9xQSl3piZvTtq5vc6DD9VR6uJQWRtbjjTGpGgAwIgXA3YEO1tTPfgaDXC%2B4r5vWbjcHKLk9oiwuNCWpoLNdQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII9aHwY3ajsnlOseircA%2BX7bzpHsgilM2lkRuiaiCA9w9OdtgCse42ZhXjAnhtmIkb%2Bc6s%2Bfx6Nh4SZ1JWXpPxFUxfot5rr49%2FHP7yxLopH4gD5fUPLN%2FcT7J0bMT%2B%2FzVAj%2BVSc0I7PytCObq2h10i1l0uJ%2F9b40FLkoQ2Boal%2FFBVPCDrxfB53URIXLPzr3x1X7xRzpsEqNoBFZzOMnaJIvDgCyFbYoCppGsUVKWNm8nAPEFzGGHjWkMCjbFuLjihWsiTu21vxWbUzkXRTqCaURhHe9o3%2Ft%2BKNqM1TKyhBLiXsC3Yk4g7jgAv6oOwkVXG5J2xk6WDCrXAoo4q3sF%2BOzCgZi9YhZ%2BBhuRnF0cqoVFtdiVEOqF6CoVGdzg1WaLyWlK1m0psaCMLe75%2BQC97coN5%2BWfF9SQD5GwNqk6HrYOcEwDm8%2BL4IYvwQ%2BGOvaBi306dAXvgnh2t%2B0TrH1AUKNpURK1WyNv4Oco3%2B2fXmbOPVlWiqFMkcyuF9EY0MJblgBc4wQZ9fd2bIY5l2ld1UURsbVCxu882w1nuu6k7OMyjobrDn2MJBlV0V4W9Bhw5HadPBBfcSJdlAs5YdUBhH8DVx2dPuqMEPUeOgUWVGrFj%2FttC0OJU8huwp1%2F8GviHh5nNxl0FiRUQaMOak3r8GOqUBuzzfNRKPmuUbnJcRElvHCmM6gKs793WX4Sj7ffzqHdUm%2FX2DqxybNmLyB23CeEKLIMB9JBtTnGEGSsyId5wOSZBdxEBCndkJPXk%2FqT5jzO8heyUpWJiLXmSBiY2fofDViEwH7ABbpVLAusTMPgRIu15S%2BYpOp5ZbP7uUi9lGIy3VjIXEOV2epvPJQKtvwvCDWucuWO1xCtxYXeAHAo1ZKfmuLuag&X-Amz-Signature=fab8ab59fb2a0a00ce617d7ac6d5800b4e5f2012047d0e6689ff8cb6739e05ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUVEAWJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD90RS9xQSl3piZvTtq5vc6DD9VR6uJQWRtbjjTGpGgAwIgXA3YEO1tTPfgaDXC%2B4r5vWbjcHKLk9oiwuNCWpoLNdQqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII9aHwY3ajsnlOseircA%2BX7bzpHsgilM2lkRuiaiCA9w9OdtgCse42ZhXjAnhtmIkb%2Bc6s%2Bfx6Nh4SZ1JWXpPxFUxfot5rr49%2FHP7yxLopH4gD5fUPLN%2FcT7J0bMT%2B%2FzVAj%2BVSc0I7PytCObq2h10i1l0uJ%2F9b40FLkoQ2Boal%2FFBVPCDrxfB53URIXLPzr3x1X7xRzpsEqNoBFZzOMnaJIvDgCyFbYoCppGsUVKWNm8nAPEFzGGHjWkMCjbFuLjihWsiTu21vxWbUzkXRTqCaURhHe9o3%2Ft%2BKNqM1TKyhBLiXsC3Yk4g7jgAv6oOwkVXG5J2xk6WDCrXAoo4q3sF%2BOzCgZi9YhZ%2BBhuRnF0cqoVFtdiVEOqF6CoVGdzg1WaLyWlK1m0psaCMLe75%2BQC97coN5%2BWfF9SQD5GwNqk6HrYOcEwDm8%2BL4IYvwQ%2BGOvaBi306dAXvgnh2t%2B0TrH1AUKNpURK1WyNv4Oco3%2B2fXmbOPVlWiqFMkcyuF9EY0MJblgBc4wQZ9fd2bIY5l2ld1UURsbVCxu882w1nuu6k7OMyjobrDn2MJBlV0V4W9Bhw5HadPBBfcSJdlAs5YdUBhH8DVx2dPuqMEPUeOgUWVGrFj%2FttC0OJU8huwp1%2F8GviHh5nNxl0FiRUQaMOak3r8GOqUBuzzfNRKPmuUbnJcRElvHCmM6gKs793WX4Sj7ffzqHdUm%2FX2DqxybNmLyB23CeEKLIMB9JBtTnGEGSsyId5wOSZBdxEBCndkJPXk%2FqT5jzO8heyUpWJiLXmSBiY2fofDViEwH7ABbpVLAusTMPgRIu15S%2BYpOp5ZbP7uUi9lGIy3VjIXEOV2epvPJQKtvwvCDWucuWO1xCtxYXeAHAo1ZKfmuLuag&X-Amz-Signature=e7ed81dc5e6840eb8f7c82b126ca4744f0e1ca4070fd3e344b094bc3a39ba308&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
