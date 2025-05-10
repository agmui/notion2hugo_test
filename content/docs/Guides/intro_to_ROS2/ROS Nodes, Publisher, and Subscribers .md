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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGCOKH2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMdsZx%2BnnYQlB1kDHfm5WA85wb66CWR%2BH3%2FWXfL49%2F%2BAiEAupr00k0i46VwnRV%2B1bXezAS9pVDcE1qCtZmntnYmJjAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJKEIRhppvhQxRiSrcAwBgld1q09a6yL4KSQGDCgMch9IvKigSiJaEQj2Z85o3JZrw6qN9VAzBtQh%2FK5E1ZN9CxPVUFuSvNGLnQvdxhEh5%2BK%2FRU6OrBRkFqzsWcNh3LpRqhdSqIInsnTKbtBDyMbK7UBoCqAb5Stkwx%2BnEOmp3SMm8cuak27tF2tU%2BevLIwJVj6GYCmTZqWFiUL%2FNZfKnt6Xk4rybvBxgtwdAhm3VABSqtH5c1VmjD4tfPsJ769XTW1x1AX1a%2BItqW88QwLy5TTRnZKXIxMuGEYHpi0H%2BR58OnUzo3jq6boSktG9LGCRCz2smMHgIXLc2W%2Fvi1jUGh%2By3Zjn%2BjZlGp%2Fbcy1%2B7xqgcvctmZRmSuhKEt49btp8ZcIHH0I%2FuHnpT3Q7A74rvNLgo6Gnq%2B4%2BK7c1oPqb4uGdCGxXvkxHsOFLgq1ojFni5abTzCNsO%2BlaVEI7tMehMt%2FeSXsCbW9tGD61yCn3062nfNnTctQvbq9SHeReiRu0i9rAU1rFcQl%2BM2qxllFl6606LUb%2FuVu61sWYNtRe3he6UYLvMsTMCb9A2kVBIl0mzcOn%2BpG%2BgjWe1lkg6eqogkp6y2mYngPqeo9eKbAa8d2uZCfpRMXAnu%2FQPDlfEHHGXUjGAZV9c9dpOkML6P%2FMAGOqUB8Yh%2B6iAYx01zOKgTQPamODst2H2t2cC9zUQtH6ve7YdyzTKeCWwnaOIR9q%2BuzZHPjWRjQt5Dj%2Bd5Ucyi9T2U7VocpgSWmQZZ%2BdKz0C%2FaqEh%2FEEUWllCt1F5Y54DNlh6hlkzrWzcdIxZ2iy2gqkq20GxAA18YfEB%2BfpdU66SLCqQ%2FCrQYT1V63LIgs1MPImfaQi%2F6HnBELAncQzdYV2mJkTtql3hS&X-Amz-Signature=1af6c1c82d79a1ac4bc0a57d3ab4d45767e6f668e218b6b9732a53f89d5574fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGCOKH2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMdsZx%2BnnYQlB1kDHfm5WA85wb66CWR%2BH3%2FWXfL49%2F%2BAiEAupr00k0i46VwnRV%2B1bXezAS9pVDcE1qCtZmntnYmJjAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJKEIRhppvhQxRiSrcAwBgld1q09a6yL4KSQGDCgMch9IvKigSiJaEQj2Z85o3JZrw6qN9VAzBtQh%2FK5E1ZN9CxPVUFuSvNGLnQvdxhEh5%2BK%2FRU6OrBRkFqzsWcNh3LpRqhdSqIInsnTKbtBDyMbK7UBoCqAb5Stkwx%2BnEOmp3SMm8cuak27tF2tU%2BevLIwJVj6GYCmTZqWFiUL%2FNZfKnt6Xk4rybvBxgtwdAhm3VABSqtH5c1VmjD4tfPsJ769XTW1x1AX1a%2BItqW88QwLy5TTRnZKXIxMuGEYHpi0H%2BR58OnUzo3jq6boSktG9LGCRCz2smMHgIXLc2W%2Fvi1jUGh%2By3Zjn%2BjZlGp%2Fbcy1%2B7xqgcvctmZRmSuhKEt49btp8ZcIHH0I%2FuHnpT3Q7A74rvNLgo6Gnq%2B4%2BK7c1oPqb4uGdCGxXvkxHsOFLgq1ojFni5abTzCNsO%2BlaVEI7tMehMt%2FeSXsCbW9tGD61yCn3062nfNnTctQvbq9SHeReiRu0i9rAU1rFcQl%2BM2qxllFl6606LUb%2FuVu61sWYNtRe3he6UYLvMsTMCb9A2kVBIl0mzcOn%2BpG%2BgjWe1lkg6eqogkp6y2mYngPqeo9eKbAa8d2uZCfpRMXAnu%2FQPDlfEHHGXUjGAZV9c9dpOkML6P%2FMAGOqUB8Yh%2B6iAYx01zOKgTQPamODst2H2t2cC9zUQtH6ve7YdyzTKeCWwnaOIR9q%2BuzZHPjWRjQt5Dj%2Bd5Ucyi9T2U7VocpgSWmQZZ%2BdKz0C%2FaqEh%2FEEUWllCt1F5Y54DNlh6hlkzrWzcdIxZ2iy2gqkq20GxAA18YfEB%2BfpdU66SLCqQ%2FCrQYT1V63LIgs1MPImfaQi%2F6HnBELAncQzdYV2mJkTtql3hS&X-Amz-Signature=c13dc348614ece6c3a01c8e7bdff3899613ce60ae5dad1c9a8ad2ce205ad659f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGCOKH2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMdsZx%2BnnYQlB1kDHfm5WA85wb66CWR%2BH3%2FWXfL49%2F%2BAiEAupr00k0i46VwnRV%2B1bXezAS9pVDcE1qCtZmntnYmJjAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJKEIRhppvhQxRiSrcAwBgld1q09a6yL4KSQGDCgMch9IvKigSiJaEQj2Z85o3JZrw6qN9VAzBtQh%2FK5E1ZN9CxPVUFuSvNGLnQvdxhEh5%2BK%2FRU6OrBRkFqzsWcNh3LpRqhdSqIInsnTKbtBDyMbK7UBoCqAb5Stkwx%2BnEOmp3SMm8cuak27tF2tU%2BevLIwJVj6GYCmTZqWFiUL%2FNZfKnt6Xk4rybvBxgtwdAhm3VABSqtH5c1VmjD4tfPsJ769XTW1x1AX1a%2BItqW88QwLy5TTRnZKXIxMuGEYHpi0H%2BR58OnUzo3jq6boSktG9LGCRCz2smMHgIXLc2W%2Fvi1jUGh%2By3Zjn%2BjZlGp%2Fbcy1%2B7xqgcvctmZRmSuhKEt49btp8ZcIHH0I%2FuHnpT3Q7A74rvNLgo6Gnq%2B4%2BK7c1oPqb4uGdCGxXvkxHsOFLgq1ojFni5abTzCNsO%2BlaVEI7tMehMt%2FeSXsCbW9tGD61yCn3062nfNnTctQvbq9SHeReiRu0i9rAU1rFcQl%2BM2qxllFl6606LUb%2FuVu61sWYNtRe3he6UYLvMsTMCb9A2kVBIl0mzcOn%2BpG%2BgjWe1lkg6eqogkp6y2mYngPqeo9eKbAa8d2uZCfpRMXAnu%2FQPDlfEHHGXUjGAZV9c9dpOkML6P%2FMAGOqUB8Yh%2B6iAYx01zOKgTQPamODst2H2t2cC9zUQtH6ve7YdyzTKeCWwnaOIR9q%2BuzZHPjWRjQt5Dj%2Bd5Ucyi9T2U7VocpgSWmQZZ%2BdKz0C%2FaqEh%2FEEUWllCt1F5Y54DNlh6hlkzrWzcdIxZ2iy2gqkq20GxAA18YfEB%2BfpdU66SLCqQ%2FCrQYT1V63LIgs1MPImfaQi%2F6HnBELAncQzdYV2mJkTtql3hS&X-Amz-Signature=886997c78e885677843d60c5a6db6df9f43d9a8a3639176dd25f2c08dba45082&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGCOKH2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMdsZx%2BnnYQlB1kDHfm5WA85wb66CWR%2BH3%2FWXfL49%2F%2BAiEAupr00k0i46VwnRV%2B1bXezAS9pVDcE1qCtZmntnYmJjAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJKEIRhppvhQxRiSrcAwBgld1q09a6yL4KSQGDCgMch9IvKigSiJaEQj2Z85o3JZrw6qN9VAzBtQh%2FK5E1ZN9CxPVUFuSvNGLnQvdxhEh5%2BK%2FRU6OrBRkFqzsWcNh3LpRqhdSqIInsnTKbtBDyMbK7UBoCqAb5Stkwx%2BnEOmp3SMm8cuak27tF2tU%2BevLIwJVj6GYCmTZqWFiUL%2FNZfKnt6Xk4rybvBxgtwdAhm3VABSqtH5c1VmjD4tfPsJ769XTW1x1AX1a%2BItqW88QwLy5TTRnZKXIxMuGEYHpi0H%2BR58OnUzo3jq6boSktG9LGCRCz2smMHgIXLc2W%2Fvi1jUGh%2By3Zjn%2BjZlGp%2Fbcy1%2B7xqgcvctmZRmSuhKEt49btp8ZcIHH0I%2FuHnpT3Q7A74rvNLgo6Gnq%2B4%2BK7c1oPqb4uGdCGxXvkxHsOFLgq1ojFni5abTzCNsO%2BlaVEI7tMehMt%2FeSXsCbW9tGD61yCn3062nfNnTctQvbq9SHeReiRu0i9rAU1rFcQl%2BM2qxllFl6606LUb%2FuVu61sWYNtRe3he6UYLvMsTMCb9A2kVBIl0mzcOn%2BpG%2BgjWe1lkg6eqogkp6y2mYngPqeo9eKbAa8d2uZCfpRMXAnu%2FQPDlfEHHGXUjGAZV9c9dpOkML6P%2FMAGOqUB8Yh%2B6iAYx01zOKgTQPamODst2H2t2cC9zUQtH6ve7YdyzTKeCWwnaOIR9q%2BuzZHPjWRjQt5Dj%2Bd5Ucyi9T2U7VocpgSWmQZZ%2BdKz0C%2FaqEh%2FEEUWllCt1F5Y54DNlh6hlkzrWzcdIxZ2iy2gqkq20GxAA18YfEB%2BfpdU66SLCqQ%2FCrQYT1V63LIgs1MPImfaQi%2F6HnBELAncQzdYV2mJkTtql3hS&X-Amz-Signature=a5f073a5e4583bece5be2bda0d32d42007f0313fc1dd413f1e4af9b09de1a209&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGCOKH2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMdsZx%2BnnYQlB1kDHfm5WA85wb66CWR%2BH3%2FWXfL49%2F%2BAiEAupr00k0i46VwnRV%2B1bXezAS9pVDcE1qCtZmntnYmJjAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJKEIRhppvhQxRiSrcAwBgld1q09a6yL4KSQGDCgMch9IvKigSiJaEQj2Z85o3JZrw6qN9VAzBtQh%2FK5E1ZN9CxPVUFuSvNGLnQvdxhEh5%2BK%2FRU6OrBRkFqzsWcNh3LpRqhdSqIInsnTKbtBDyMbK7UBoCqAb5Stkwx%2BnEOmp3SMm8cuak27tF2tU%2BevLIwJVj6GYCmTZqWFiUL%2FNZfKnt6Xk4rybvBxgtwdAhm3VABSqtH5c1VmjD4tfPsJ769XTW1x1AX1a%2BItqW88QwLy5TTRnZKXIxMuGEYHpi0H%2BR58OnUzo3jq6boSktG9LGCRCz2smMHgIXLc2W%2Fvi1jUGh%2By3Zjn%2BjZlGp%2Fbcy1%2B7xqgcvctmZRmSuhKEt49btp8ZcIHH0I%2FuHnpT3Q7A74rvNLgo6Gnq%2B4%2BK7c1oPqb4uGdCGxXvkxHsOFLgq1ojFni5abTzCNsO%2BlaVEI7tMehMt%2FeSXsCbW9tGD61yCn3062nfNnTctQvbq9SHeReiRu0i9rAU1rFcQl%2BM2qxllFl6606LUb%2FuVu61sWYNtRe3he6UYLvMsTMCb9A2kVBIl0mzcOn%2BpG%2BgjWe1lkg6eqogkp6y2mYngPqeo9eKbAa8d2uZCfpRMXAnu%2FQPDlfEHHGXUjGAZV9c9dpOkML6P%2FMAGOqUB8Yh%2B6iAYx01zOKgTQPamODst2H2t2cC9zUQtH6ve7YdyzTKeCWwnaOIR9q%2BuzZHPjWRjQt5Dj%2Bd5Ucyi9T2U7VocpgSWmQZZ%2BdKz0C%2FaqEh%2FEEUWllCt1F5Y54DNlh6hlkzrWzcdIxZ2iy2gqkq20GxAA18YfEB%2BfpdU66SLCqQ%2FCrQYT1V63LIgs1MPImfaQi%2F6HnBELAncQzdYV2mJkTtql3hS&X-Amz-Signature=78f100a69eede6831e5037da30924d10c9ffe92d15f87a5890c202ece171a48f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGCOKH2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMdsZx%2BnnYQlB1kDHfm5WA85wb66CWR%2BH3%2FWXfL49%2F%2BAiEAupr00k0i46VwnRV%2B1bXezAS9pVDcE1qCtZmntnYmJjAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJKEIRhppvhQxRiSrcAwBgld1q09a6yL4KSQGDCgMch9IvKigSiJaEQj2Z85o3JZrw6qN9VAzBtQh%2FK5E1ZN9CxPVUFuSvNGLnQvdxhEh5%2BK%2FRU6OrBRkFqzsWcNh3LpRqhdSqIInsnTKbtBDyMbK7UBoCqAb5Stkwx%2BnEOmp3SMm8cuak27tF2tU%2BevLIwJVj6GYCmTZqWFiUL%2FNZfKnt6Xk4rybvBxgtwdAhm3VABSqtH5c1VmjD4tfPsJ769XTW1x1AX1a%2BItqW88QwLy5TTRnZKXIxMuGEYHpi0H%2BR58OnUzo3jq6boSktG9LGCRCz2smMHgIXLc2W%2Fvi1jUGh%2By3Zjn%2BjZlGp%2Fbcy1%2B7xqgcvctmZRmSuhKEt49btp8ZcIHH0I%2FuHnpT3Q7A74rvNLgo6Gnq%2B4%2BK7c1oPqb4uGdCGxXvkxHsOFLgq1ojFni5abTzCNsO%2BlaVEI7tMehMt%2FeSXsCbW9tGD61yCn3062nfNnTctQvbq9SHeReiRu0i9rAU1rFcQl%2BM2qxllFl6606LUb%2FuVu61sWYNtRe3he6UYLvMsTMCb9A2kVBIl0mzcOn%2BpG%2BgjWe1lkg6eqogkp6y2mYngPqeo9eKbAa8d2uZCfpRMXAnu%2FQPDlfEHHGXUjGAZV9c9dpOkML6P%2FMAGOqUB8Yh%2B6iAYx01zOKgTQPamODst2H2t2cC9zUQtH6ve7YdyzTKeCWwnaOIR9q%2BuzZHPjWRjQt5Dj%2Bd5Ucyi9T2U7VocpgSWmQZZ%2BdKz0C%2FaqEh%2FEEUWllCt1F5Y54DNlh6hlkzrWzcdIxZ2iy2gqkq20GxAA18YfEB%2BfpdU66SLCqQ%2FCrQYT1V63LIgs1MPImfaQi%2F6HnBELAncQzdYV2mJkTtql3hS&X-Amz-Signature=dc0f6dfef49b379d08f71f6c7012dfd1b2de374a2b6f27cfab875bdbc1fd8aac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGCOKH2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMdsZx%2BnnYQlB1kDHfm5WA85wb66CWR%2BH3%2FWXfL49%2F%2BAiEAupr00k0i46VwnRV%2B1bXezAS9pVDcE1qCtZmntnYmJjAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJKEIRhppvhQxRiSrcAwBgld1q09a6yL4KSQGDCgMch9IvKigSiJaEQj2Z85o3JZrw6qN9VAzBtQh%2FK5E1ZN9CxPVUFuSvNGLnQvdxhEh5%2BK%2FRU6OrBRkFqzsWcNh3LpRqhdSqIInsnTKbtBDyMbK7UBoCqAb5Stkwx%2BnEOmp3SMm8cuak27tF2tU%2BevLIwJVj6GYCmTZqWFiUL%2FNZfKnt6Xk4rybvBxgtwdAhm3VABSqtH5c1VmjD4tfPsJ769XTW1x1AX1a%2BItqW88QwLy5TTRnZKXIxMuGEYHpi0H%2BR58OnUzo3jq6boSktG9LGCRCz2smMHgIXLc2W%2Fvi1jUGh%2By3Zjn%2BjZlGp%2Fbcy1%2B7xqgcvctmZRmSuhKEt49btp8ZcIHH0I%2FuHnpT3Q7A74rvNLgo6Gnq%2B4%2BK7c1oPqb4uGdCGxXvkxHsOFLgq1ojFni5abTzCNsO%2BlaVEI7tMehMt%2FeSXsCbW9tGD61yCn3062nfNnTctQvbq9SHeReiRu0i9rAU1rFcQl%2BM2qxllFl6606LUb%2FuVu61sWYNtRe3he6UYLvMsTMCb9A2kVBIl0mzcOn%2BpG%2BgjWe1lkg6eqogkp6y2mYngPqeo9eKbAa8d2uZCfpRMXAnu%2FQPDlfEHHGXUjGAZV9c9dpOkML6P%2FMAGOqUB8Yh%2B6iAYx01zOKgTQPamODst2H2t2cC9zUQtH6ve7YdyzTKeCWwnaOIR9q%2BuzZHPjWRjQt5Dj%2Bd5Ucyi9T2U7VocpgSWmQZZ%2BdKz0C%2FaqEh%2FEEUWllCt1F5Y54DNlh6hlkzrWzcdIxZ2iy2gqkq20GxAA18YfEB%2BfpdU66SLCqQ%2FCrQYT1V63LIgs1MPImfaQi%2F6HnBELAncQzdYV2mJkTtql3hS&X-Amz-Signature=0e1b54b06df27c8ffe36125fba33b3aa17ecf903ba89f688aa2798d5b1bd7dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CGCOKH2%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMdsZx%2BnnYQlB1kDHfm5WA85wb66CWR%2BH3%2FWXfL49%2F%2BAiEAupr00k0i46VwnRV%2B1bXezAS9pVDcE1qCtZmntnYmJjAqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFJKEIRhppvhQxRiSrcAwBgld1q09a6yL4KSQGDCgMch9IvKigSiJaEQj2Z85o3JZrw6qN9VAzBtQh%2FK5E1ZN9CxPVUFuSvNGLnQvdxhEh5%2BK%2FRU6OrBRkFqzsWcNh3LpRqhdSqIInsnTKbtBDyMbK7UBoCqAb5Stkwx%2BnEOmp3SMm8cuak27tF2tU%2BevLIwJVj6GYCmTZqWFiUL%2FNZfKnt6Xk4rybvBxgtwdAhm3VABSqtH5c1VmjD4tfPsJ769XTW1x1AX1a%2BItqW88QwLy5TTRnZKXIxMuGEYHpi0H%2BR58OnUzo3jq6boSktG9LGCRCz2smMHgIXLc2W%2Fvi1jUGh%2By3Zjn%2BjZlGp%2Fbcy1%2B7xqgcvctmZRmSuhKEt49btp8ZcIHH0I%2FuHnpT3Q7A74rvNLgo6Gnq%2B4%2BK7c1oPqb4uGdCGxXvkxHsOFLgq1ojFni5abTzCNsO%2BlaVEI7tMehMt%2FeSXsCbW9tGD61yCn3062nfNnTctQvbq9SHeReiRu0i9rAU1rFcQl%2BM2qxllFl6606LUb%2FuVu61sWYNtRe3he6UYLvMsTMCb9A2kVBIl0mzcOn%2BpG%2BgjWe1lkg6eqogkp6y2mYngPqeo9eKbAa8d2uZCfpRMXAnu%2FQPDlfEHHGXUjGAZV9c9dpOkML6P%2FMAGOqUB8Yh%2B6iAYx01zOKgTQPamODst2H2t2cC9zUQtH6ve7YdyzTKeCWwnaOIR9q%2BuzZHPjWRjQt5Dj%2Bd5Ucyi9T2U7VocpgSWmQZZ%2BdKz0C%2FaqEh%2FEEUWllCt1F5Y54DNlh6hlkzrWzcdIxZ2iy2gqkq20GxAA18YfEB%2BfpdU66SLCqQ%2FCrQYT1V63LIgs1MPImfaQi%2F6HnBELAncQzdYV2mJkTtql3hS&X-Amz-Signature=f75b5303b009bc55be73f749f919804ebd5f873b81742edff313c67d2b246a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
