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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EDL7PF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICRdNIMbcmCad0u8uffySf0RLxg8xsMkyCYOUhkrvCrSAiEA97L03OORw7WgS3%2BeHQfZfPYtN9Y54wKNgpZEVSRZEAcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLL5lOJXsitoOcwTCyrcAzyAggWwDWeIJ5P55M99y7KTYh4S4RYqc%2FjPqL3RnUexfsxyQuCVvSjKw4JyRwT1ompM3S2tIAuaskubCzJClDHOBD0WmCzFCL8XFQeerV3IuLb5Vl7BIUD2m1uiXRfPDAkS9f7fToGhbcTCyAHJz%2B1iSyM0qvMdD0wHug7dLvd0KFc%2BPZ7huv1QYHSgbk2iD4f8MOfrUyAEx9soFaufrkNcBS%2FnjdG6H4w%2FniHcWli1ZZf74tyYnlQm%2BYIeza6xQL5ccct2KNyOeyZD0QxGlJs7CLF0bqi8jEqVkvODP9FxwZ5Pj1AubHZUnY8qM6hdB1LKyJvzFcnXREcyznIYgRY%2F%2F3kq9JSLV3ZO3Bf23AvTf%2B9hz2NBPW2KrJ%2BwXmIow%2F6rvMy0NkdwmvJH2GBgipoD3U%2FkF9eQ7NlyHq4ruFaHobq37WVfRuRNmMbBamXdGW1zW3fHpnNU6VziZ1AT%2BJSCw%2F%2Be0elyHJ1XK9bS%2FB2x6T7EuFIyu%2FYIQsD0o6I3ol9gFs73idEdA27mSSb9W3yXt1I2Il0nHl0TwbJVPJzaelIFNfwnlGqEjGn02DgmB1UdIycbUEiNxSxjjP1SDflGo6%2BrK3oRQUup6gB09LPNoQhM%2Fd805xmUKP2nMIXs4sMGOqUBi6COfhHugq%2FSA3ep8sxjB3X%2FKjy%2BZMMC65OE39aB%2FeXGgawsZN3ilNm9E8Wvdn6dRzZG3J9zkvyWUwdWSWuQ8mtMMbgXYx98ZQw%2FNV2PO85%2FD2hkRN9LD3DZXP6iXFxmnIzfgWruYM62S9aO5oSEqc2WDznyC4JSThR5xqyoJKJhRmNycTvy%2Br7hC9B1mVyYHTtsBC9kCM3VdbOUJRt9N9GK5gwr&X-Amz-Signature=15b0df98bbee3147bf657baa61d1a1e5e22fa8df310d8014e1d24b58954bae01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EDL7PF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICRdNIMbcmCad0u8uffySf0RLxg8xsMkyCYOUhkrvCrSAiEA97L03OORw7WgS3%2BeHQfZfPYtN9Y54wKNgpZEVSRZEAcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLL5lOJXsitoOcwTCyrcAzyAggWwDWeIJ5P55M99y7KTYh4S4RYqc%2FjPqL3RnUexfsxyQuCVvSjKw4JyRwT1ompM3S2tIAuaskubCzJClDHOBD0WmCzFCL8XFQeerV3IuLb5Vl7BIUD2m1uiXRfPDAkS9f7fToGhbcTCyAHJz%2B1iSyM0qvMdD0wHug7dLvd0KFc%2BPZ7huv1QYHSgbk2iD4f8MOfrUyAEx9soFaufrkNcBS%2FnjdG6H4w%2FniHcWli1ZZf74tyYnlQm%2BYIeza6xQL5ccct2KNyOeyZD0QxGlJs7CLF0bqi8jEqVkvODP9FxwZ5Pj1AubHZUnY8qM6hdB1LKyJvzFcnXREcyznIYgRY%2F%2F3kq9JSLV3ZO3Bf23AvTf%2B9hz2NBPW2KrJ%2BwXmIow%2F6rvMy0NkdwmvJH2GBgipoD3U%2FkF9eQ7NlyHq4ruFaHobq37WVfRuRNmMbBamXdGW1zW3fHpnNU6VziZ1AT%2BJSCw%2F%2Be0elyHJ1XK9bS%2FB2x6T7EuFIyu%2FYIQsD0o6I3ol9gFs73idEdA27mSSb9W3yXt1I2Il0nHl0TwbJVPJzaelIFNfwnlGqEjGn02DgmB1UdIycbUEiNxSxjjP1SDflGo6%2BrK3oRQUup6gB09LPNoQhM%2Fd805xmUKP2nMIXs4sMGOqUBi6COfhHugq%2FSA3ep8sxjB3X%2FKjy%2BZMMC65OE39aB%2FeXGgawsZN3ilNm9E8Wvdn6dRzZG3J9zkvyWUwdWSWuQ8mtMMbgXYx98ZQw%2FNV2PO85%2FD2hkRN9LD3DZXP6iXFxmnIzfgWruYM62S9aO5oSEqc2WDznyC4JSThR5xqyoJKJhRmNycTvy%2Br7hC9B1mVyYHTtsBC9kCM3VdbOUJRt9N9GK5gwr&X-Amz-Signature=cc5b0593cec48b965a895b39e066d4de9e09d32e85feeac5a04426413b965933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EDL7PF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICRdNIMbcmCad0u8uffySf0RLxg8xsMkyCYOUhkrvCrSAiEA97L03OORw7WgS3%2BeHQfZfPYtN9Y54wKNgpZEVSRZEAcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLL5lOJXsitoOcwTCyrcAzyAggWwDWeIJ5P55M99y7KTYh4S4RYqc%2FjPqL3RnUexfsxyQuCVvSjKw4JyRwT1ompM3S2tIAuaskubCzJClDHOBD0WmCzFCL8XFQeerV3IuLb5Vl7BIUD2m1uiXRfPDAkS9f7fToGhbcTCyAHJz%2B1iSyM0qvMdD0wHug7dLvd0KFc%2BPZ7huv1QYHSgbk2iD4f8MOfrUyAEx9soFaufrkNcBS%2FnjdG6H4w%2FniHcWli1ZZf74tyYnlQm%2BYIeza6xQL5ccct2KNyOeyZD0QxGlJs7CLF0bqi8jEqVkvODP9FxwZ5Pj1AubHZUnY8qM6hdB1LKyJvzFcnXREcyznIYgRY%2F%2F3kq9JSLV3ZO3Bf23AvTf%2B9hz2NBPW2KrJ%2BwXmIow%2F6rvMy0NkdwmvJH2GBgipoD3U%2FkF9eQ7NlyHq4ruFaHobq37WVfRuRNmMbBamXdGW1zW3fHpnNU6VziZ1AT%2BJSCw%2F%2Be0elyHJ1XK9bS%2FB2x6T7EuFIyu%2FYIQsD0o6I3ol9gFs73idEdA27mSSb9W3yXt1I2Il0nHl0TwbJVPJzaelIFNfwnlGqEjGn02DgmB1UdIycbUEiNxSxjjP1SDflGo6%2BrK3oRQUup6gB09LPNoQhM%2Fd805xmUKP2nMIXs4sMGOqUBi6COfhHugq%2FSA3ep8sxjB3X%2FKjy%2BZMMC65OE39aB%2FeXGgawsZN3ilNm9E8Wvdn6dRzZG3J9zkvyWUwdWSWuQ8mtMMbgXYx98ZQw%2FNV2PO85%2FD2hkRN9LD3DZXP6iXFxmnIzfgWruYM62S9aO5oSEqc2WDznyC4JSThR5xqyoJKJhRmNycTvy%2Br7hC9B1mVyYHTtsBC9kCM3VdbOUJRt9N9GK5gwr&X-Amz-Signature=9b2f0b728f68c8531efa7b7a3ba45a60ba7c7814513d47f8a36709799ec69a99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EDL7PF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICRdNIMbcmCad0u8uffySf0RLxg8xsMkyCYOUhkrvCrSAiEA97L03OORw7WgS3%2BeHQfZfPYtN9Y54wKNgpZEVSRZEAcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLL5lOJXsitoOcwTCyrcAzyAggWwDWeIJ5P55M99y7KTYh4S4RYqc%2FjPqL3RnUexfsxyQuCVvSjKw4JyRwT1ompM3S2tIAuaskubCzJClDHOBD0WmCzFCL8XFQeerV3IuLb5Vl7BIUD2m1uiXRfPDAkS9f7fToGhbcTCyAHJz%2B1iSyM0qvMdD0wHug7dLvd0KFc%2BPZ7huv1QYHSgbk2iD4f8MOfrUyAEx9soFaufrkNcBS%2FnjdG6H4w%2FniHcWli1ZZf74tyYnlQm%2BYIeza6xQL5ccct2KNyOeyZD0QxGlJs7CLF0bqi8jEqVkvODP9FxwZ5Pj1AubHZUnY8qM6hdB1LKyJvzFcnXREcyznIYgRY%2F%2F3kq9JSLV3ZO3Bf23AvTf%2B9hz2NBPW2KrJ%2BwXmIow%2F6rvMy0NkdwmvJH2GBgipoD3U%2FkF9eQ7NlyHq4ruFaHobq37WVfRuRNmMbBamXdGW1zW3fHpnNU6VziZ1AT%2BJSCw%2F%2Be0elyHJ1XK9bS%2FB2x6T7EuFIyu%2FYIQsD0o6I3ol9gFs73idEdA27mSSb9W3yXt1I2Il0nHl0TwbJVPJzaelIFNfwnlGqEjGn02DgmB1UdIycbUEiNxSxjjP1SDflGo6%2BrK3oRQUup6gB09LPNoQhM%2Fd805xmUKP2nMIXs4sMGOqUBi6COfhHugq%2FSA3ep8sxjB3X%2FKjy%2BZMMC65OE39aB%2FeXGgawsZN3ilNm9E8Wvdn6dRzZG3J9zkvyWUwdWSWuQ8mtMMbgXYx98ZQw%2FNV2PO85%2FD2hkRN9LD3DZXP6iXFxmnIzfgWruYM62S9aO5oSEqc2WDznyC4JSThR5xqyoJKJhRmNycTvy%2Br7hC9B1mVyYHTtsBC9kCM3VdbOUJRt9N9GK5gwr&X-Amz-Signature=71a1b8a4564777e4cc28ddbcb879b771a39d723babcfafe505186f294905518b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EDL7PF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICRdNIMbcmCad0u8uffySf0RLxg8xsMkyCYOUhkrvCrSAiEA97L03OORw7WgS3%2BeHQfZfPYtN9Y54wKNgpZEVSRZEAcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLL5lOJXsitoOcwTCyrcAzyAggWwDWeIJ5P55M99y7KTYh4S4RYqc%2FjPqL3RnUexfsxyQuCVvSjKw4JyRwT1ompM3S2tIAuaskubCzJClDHOBD0WmCzFCL8XFQeerV3IuLb5Vl7BIUD2m1uiXRfPDAkS9f7fToGhbcTCyAHJz%2B1iSyM0qvMdD0wHug7dLvd0KFc%2BPZ7huv1QYHSgbk2iD4f8MOfrUyAEx9soFaufrkNcBS%2FnjdG6H4w%2FniHcWli1ZZf74tyYnlQm%2BYIeza6xQL5ccct2KNyOeyZD0QxGlJs7CLF0bqi8jEqVkvODP9FxwZ5Pj1AubHZUnY8qM6hdB1LKyJvzFcnXREcyznIYgRY%2F%2F3kq9JSLV3ZO3Bf23AvTf%2B9hz2NBPW2KrJ%2BwXmIow%2F6rvMy0NkdwmvJH2GBgipoD3U%2FkF9eQ7NlyHq4ruFaHobq37WVfRuRNmMbBamXdGW1zW3fHpnNU6VziZ1AT%2BJSCw%2F%2Be0elyHJ1XK9bS%2FB2x6T7EuFIyu%2FYIQsD0o6I3ol9gFs73idEdA27mSSb9W3yXt1I2Il0nHl0TwbJVPJzaelIFNfwnlGqEjGn02DgmB1UdIycbUEiNxSxjjP1SDflGo6%2BrK3oRQUup6gB09LPNoQhM%2Fd805xmUKP2nMIXs4sMGOqUBi6COfhHugq%2FSA3ep8sxjB3X%2FKjy%2BZMMC65OE39aB%2FeXGgawsZN3ilNm9E8Wvdn6dRzZG3J9zkvyWUwdWSWuQ8mtMMbgXYx98ZQw%2FNV2PO85%2FD2hkRN9LD3DZXP6iXFxmnIzfgWruYM62S9aO5oSEqc2WDznyC4JSThR5xqyoJKJhRmNycTvy%2Br7hC9B1mVyYHTtsBC9kCM3VdbOUJRt9N9GK5gwr&X-Amz-Signature=5b0f00401088d890c5ce47ee65cbfd440654ed38f9e06187520024f540830368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EDL7PF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICRdNIMbcmCad0u8uffySf0RLxg8xsMkyCYOUhkrvCrSAiEA97L03OORw7WgS3%2BeHQfZfPYtN9Y54wKNgpZEVSRZEAcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLL5lOJXsitoOcwTCyrcAzyAggWwDWeIJ5P55M99y7KTYh4S4RYqc%2FjPqL3RnUexfsxyQuCVvSjKw4JyRwT1ompM3S2tIAuaskubCzJClDHOBD0WmCzFCL8XFQeerV3IuLb5Vl7BIUD2m1uiXRfPDAkS9f7fToGhbcTCyAHJz%2B1iSyM0qvMdD0wHug7dLvd0KFc%2BPZ7huv1QYHSgbk2iD4f8MOfrUyAEx9soFaufrkNcBS%2FnjdG6H4w%2FniHcWli1ZZf74tyYnlQm%2BYIeza6xQL5ccct2KNyOeyZD0QxGlJs7CLF0bqi8jEqVkvODP9FxwZ5Pj1AubHZUnY8qM6hdB1LKyJvzFcnXREcyznIYgRY%2F%2F3kq9JSLV3ZO3Bf23AvTf%2B9hz2NBPW2KrJ%2BwXmIow%2F6rvMy0NkdwmvJH2GBgipoD3U%2FkF9eQ7NlyHq4ruFaHobq37WVfRuRNmMbBamXdGW1zW3fHpnNU6VziZ1AT%2BJSCw%2F%2Be0elyHJ1XK9bS%2FB2x6T7EuFIyu%2FYIQsD0o6I3ol9gFs73idEdA27mSSb9W3yXt1I2Il0nHl0TwbJVPJzaelIFNfwnlGqEjGn02DgmB1UdIycbUEiNxSxjjP1SDflGo6%2BrK3oRQUup6gB09LPNoQhM%2Fd805xmUKP2nMIXs4sMGOqUBi6COfhHugq%2FSA3ep8sxjB3X%2FKjy%2BZMMC65OE39aB%2FeXGgawsZN3ilNm9E8Wvdn6dRzZG3J9zkvyWUwdWSWuQ8mtMMbgXYx98ZQw%2FNV2PO85%2FD2hkRN9LD3DZXP6iXFxmnIzfgWruYM62S9aO5oSEqc2WDznyC4JSThR5xqyoJKJhRmNycTvy%2Br7hC9B1mVyYHTtsBC9kCM3VdbOUJRt9N9GK5gwr&X-Amz-Signature=91cdefe4591ccf6aa2225f04f4f32f33fd8c49e8ac0f0fa295375816bebaebe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EDL7PF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICRdNIMbcmCad0u8uffySf0RLxg8xsMkyCYOUhkrvCrSAiEA97L03OORw7WgS3%2BeHQfZfPYtN9Y54wKNgpZEVSRZEAcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLL5lOJXsitoOcwTCyrcAzyAggWwDWeIJ5P55M99y7KTYh4S4RYqc%2FjPqL3RnUexfsxyQuCVvSjKw4JyRwT1ompM3S2tIAuaskubCzJClDHOBD0WmCzFCL8XFQeerV3IuLb5Vl7BIUD2m1uiXRfPDAkS9f7fToGhbcTCyAHJz%2B1iSyM0qvMdD0wHug7dLvd0KFc%2BPZ7huv1QYHSgbk2iD4f8MOfrUyAEx9soFaufrkNcBS%2FnjdG6H4w%2FniHcWli1ZZf74tyYnlQm%2BYIeza6xQL5ccct2KNyOeyZD0QxGlJs7CLF0bqi8jEqVkvODP9FxwZ5Pj1AubHZUnY8qM6hdB1LKyJvzFcnXREcyznIYgRY%2F%2F3kq9JSLV3ZO3Bf23AvTf%2B9hz2NBPW2KrJ%2BwXmIow%2F6rvMy0NkdwmvJH2GBgipoD3U%2FkF9eQ7NlyHq4ruFaHobq37WVfRuRNmMbBamXdGW1zW3fHpnNU6VziZ1AT%2BJSCw%2F%2Be0elyHJ1XK9bS%2FB2x6T7EuFIyu%2FYIQsD0o6I3ol9gFs73idEdA27mSSb9W3yXt1I2Il0nHl0TwbJVPJzaelIFNfwnlGqEjGn02DgmB1UdIycbUEiNxSxjjP1SDflGo6%2BrK3oRQUup6gB09LPNoQhM%2Fd805xmUKP2nMIXs4sMGOqUBi6COfhHugq%2FSA3ep8sxjB3X%2FKjy%2BZMMC65OE39aB%2FeXGgawsZN3ilNm9E8Wvdn6dRzZG3J9zkvyWUwdWSWuQ8mtMMbgXYx98ZQw%2FNV2PO85%2FD2hkRN9LD3DZXP6iXFxmnIzfgWruYM62S9aO5oSEqc2WDznyC4JSThR5xqyoJKJhRmNycTvy%2Br7hC9B1mVyYHTtsBC9kCM3VdbOUJRt9N9GK5gwr&X-Amz-Signature=efd1df07381475e2d8b5c190ae30f524e0f99ccf9b0e867d91663f3627b22a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2EDL7PF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICRdNIMbcmCad0u8uffySf0RLxg8xsMkyCYOUhkrvCrSAiEA97L03OORw7WgS3%2BeHQfZfPYtN9Y54wKNgpZEVSRZEAcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLL5lOJXsitoOcwTCyrcAzyAggWwDWeIJ5P55M99y7KTYh4S4RYqc%2FjPqL3RnUexfsxyQuCVvSjKw4JyRwT1ompM3S2tIAuaskubCzJClDHOBD0WmCzFCL8XFQeerV3IuLb5Vl7BIUD2m1uiXRfPDAkS9f7fToGhbcTCyAHJz%2B1iSyM0qvMdD0wHug7dLvd0KFc%2BPZ7huv1QYHSgbk2iD4f8MOfrUyAEx9soFaufrkNcBS%2FnjdG6H4w%2FniHcWli1ZZf74tyYnlQm%2BYIeza6xQL5ccct2KNyOeyZD0QxGlJs7CLF0bqi8jEqVkvODP9FxwZ5Pj1AubHZUnY8qM6hdB1LKyJvzFcnXREcyznIYgRY%2F%2F3kq9JSLV3ZO3Bf23AvTf%2B9hz2NBPW2KrJ%2BwXmIow%2F6rvMy0NkdwmvJH2GBgipoD3U%2FkF9eQ7NlyHq4ruFaHobq37WVfRuRNmMbBamXdGW1zW3fHpnNU6VziZ1AT%2BJSCw%2F%2Be0elyHJ1XK9bS%2FB2x6T7EuFIyu%2FYIQsD0o6I3ol9gFs73idEdA27mSSb9W3yXt1I2Il0nHl0TwbJVPJzaelIFNfwnlGqEjGn02DgmB1UdIycbUEiNxSxjjP1SDflGo6%2BrK3oRQUup6gB09LPNoQhM%2Fd805xmUKP2nMIXs4sMGOqUBi6COfhHugq%2FSA3ep8sxjB3X%2FKjy%2BZMMC65OE39aB%2FeXGgawsZN3ilNm9E8Wvdn6dRzZG3J9zkvyWUwdWSWuQ8mtMMbgXYx98ZQw%2FNV2PO85%2FD2hkRN9LD3DZXP6iXFxmnIzfgWruYM62S9aO5oSEqc2WDznyC4JSThR5xqyoJKJhRmNycTvy%2Br7hC9B1mVyYHTtsBC9kCM3VdbOUJRt9N9GK5gwr&X-Amz-Signature=6add20ecea5ed0be2f81ce8595efad460dd7c6796e14d70bd06b06c13b1edb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
