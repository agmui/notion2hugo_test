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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXCM4MM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDNZWPkfb8tFfP4a%2FgZaj9qJHRgty15I5d4wXT%2BL7VOnAIgAMM9%2FQ%2B3dv3M%2BFAVzHY0nKl6PFza8ypIsr23AjkepLMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Br0Ak%2Fbskr69CYyrcAwPBdGaSiau2MhxCai%2F%2BqQ72S0I4WOUdEK3FfE7%2Ffozh0OkYGcprjqEE6h7v81rCSNZ%2BCINqqir1HVrQcHHKyksBEy0FIsoB6cK7osU2Dul%2F5ckoXvMs2MmHgqv%2FOW%2BE5Dmye%2B9Mhsy56Vs%2FKNb5LwsX%2B5Pgxfk5lGw%2B90iSvKC3uwqWMcvPsvGjNe9RzmH0KD8x81O5LY%2BHWGVqo8MPXs6jgJdESEu25BELI9gXeg9GtNHawzcZ4AVYVPTMtVZ%2Bob4JBofKb78nu5WDtX7ZItt4uv9ipRatwFPWI%2B65eovxZAd6OBQhsC7qs9mbDxtyefdLp%2Bjtd8YA9iau%2BVH6pKwEy6oRMUMW6P2Lw7g8EXr4x9a2iBRKsgyXILfS6l5L8eN%2Bbt2Os7lZx0OI4%2FfXysbTlV9hA%2Ff61AxlFeZJqZF6wr33Hs5UazMunq%2Bs1gf53nAqbyWoWFDqCjh4mjlQ3IHIsIkqETElO2MbR0XGLAoMKlGphf6MSdkL%2BH%2Fa5S7UXJEJL%2F24aJng3PavlNV6pJntX951g83Z9u93uBzNHajMiXuWkhu8qP6%2Br3dWSM%2BDkIgH23Cs14SINrfPjLG51tXFVTiebPAxe%2FWU%2BDYsRoSfwcmlKR7pwFx%2FFqtaMKv%2Bxb4GOqUBhf4fCIsQUt83UkBCTE6HeChPpP2hldEAegeoUDSBB2qbZLS69eTZDL3lfTYWn0%2FeU4o5FMPhV4GGofiuCgdu9cekz7stTVnh3qmp8zYfXe5n1LhjnEhofZaJ0PFruEHYef%2FH38UoK%2BmffpnV9Jw%2BdxqYUWj5N76wj1c1uP9Sc52nvpDQahzIGNSDbCSqD0R7%2BKFqBjAuzxTCaX1lMu2RoYkhliMD&X-Amz-Signature=db03f437c3521867d63c4dd2deb63fc72e75645dc6e4871e35e966dad18ee403&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXCM4MM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDNZWPkfb8tFfP4a%2FgZaj9qJHRgty15I5d4wXT%2BL7VOnAIgAMM9%2FQ%2B3dv3M%2BFAVzHY0nKl6PFza8ypIsr23AjkepLMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Br0Ak%2Fbskr69CYyrcAwPBdGaSiau2MhxCai%2F%2BqQ72S0I4WOUdEK3FfE7%2Ffozh0OkYGcprjqEE6h7v81rCSNZ%2BCINqqir1HVrQcHHKyksBEy0FIsoB6cK7osU2Dul%2F5ckoXvMs2MmHgqv%2FOW%2BE5Dmye%2B9Mhsy56Vs%2FKNb5LwsX%2B5Pgxfk5lGw%2B90iSvKC3uwqWMcvPsvGjNe9RzmH0KD8x81O5LY%2BHWGVqo8MPXs6jgJdESEu25BELI9gXeg9GtNHawzcZ4AVYVPTMtVZ%2Bob4JBofKb78nu5WDtX7ZItt4uv9ipRatwFPWI%2B65eovxZAd6OBQhsC7qs9mbDxtyefdLp%2Bjtd8YA9iau%2BVH6pKwEy6oRMUMW6P2Lw7g8EXr4x9a2iBRKsgyXILfS6l5L8eN%2Bbt2Os7lZx0OI4%2FfXysbTlV9hA%2Ff61AxlFeZJqZF6wr33Hs5UazMunq%2Bs1gf53nAqbyWoWFDqCjh4mjlQ3IHIsIkqETElO2MbR0XGLAoMKlGphf6MSdkL%2BH%2Fa5S7UXJEJL%2F24aJng3PavlNV6pJntX951g83Z9u93uBzNHajMiXuWkhu8qP6%2Br3dWSM%2BDkIgH23Cs14SINrfPjLG51tXFVTiebPAxe%2FWU%2BDYsRoSfwcmlKR7pwFx%2FFqtaMKv%2Bxb4GOqUBhf4fCIsQUt83UkBCTE6HeChPpP2hldEAegeoUDSBB2qbZLS69eTZDL3lfTYWn0%2FeU4o5FMPhV4GGofiuCgdu9cekz7stTVnh3qmp8zYfXe5n1LhjnEhofZaJ0PFruEHYef%2FH38UoK%2BmffpnV9Jw%2BdxqYUWj5N76wj1c1uP9Sc52nvpDQahzIGNSDbCSqD0R7%2BKFqBjAuzxTCaX1lMu2RoYkhliMD&X-Amz-Signature=bd6e04709d50d213705b724312ba537adf5cb6c067d5caa3c0da477793bf0eec&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXCM4MM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDNZWPkfb8tFfP4a%2FgZaj9qJHRgty15I5d4wXT%2BL7VOnAIgAMM9%2FQ%2B3dv3M%2BFAVzHY0nKl6PFza8ypIsr23AjkepLMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Br0Ak%2Fbskr69CYyrcAwPBdGaSiau2MhxCai%2F%2BqQ72S0I4WOUdEK3FfE7%2Ffozh0OkYGcprjqEE6h7v81rCSNZ%2BCINqqir1HVrQcHHKyksBEy0FIsoB6cK7osU2Dul%2F5ckoXvMs2MmHgqv%2FOW%2BE5Dmye%2B9Mhsy56Vs%2FKNb5LwsX%2B5Pgxfk5lGw%2B90iSvKC3uwqWMcvPsvGjNe9RzmH0KD8x81O5LY%2BHWGVqo8MPXs6jgJdESEu25BELI9gXeg9GtNHawzcZ4AVYVPTMtVZ%2Bob4JBofKb78nu5WDtX7ZItt4uv9ipRatwFPWI%2B65eovxZAd6OBQhsC7qs9mbDxtyefdLp%2Bjtd8YA9iau%2BVH6pKwEy6oRMUMW6P2Lw7g8EXr4x9a2iBRKsgyXILfS6l5L8eN%2Bbt2Os7lZx0OI4%2FfXysbTlV9hA%2Ff61AxlFeZJqZF6wr33Hs5UazMunq%2Bs1gf53nAqbyWoWFDqCjh4mjlQ3IHIsIkqETElO2MbR0XGLAoMKlGphf6MSdkL%2BH%2Fa5S7UXJEJL%2F24aJng3PavlNV6pJntX951g83Z9u93uBzNHajMiXuWkhu8qP6%2Br3dWSM%2BDkIgH23Cs14SINrfPjLG51tXFVTiebPAxe%2FWU%2BDYsRoSfwcmlKR7pwFx%2FFqtaMKv%2Bxb4GOqUBhf4fCIsQUt83UkBCTE6HeChPpP2hldEAegeoUDSBB2qbZLS69eTZDL3lfTYWn0%2FeU4o5FMPhV4GGofiuCgdu9cekz7stTVnh3qmp8zYfXe5n1LhjnEhofZaJ0PFruEHYef%2FH38UoK%2BmffpnV9Jw%2BdxqYUWj5N76wj1c1uP9Sc52nvpDQahzIGNSDbCSqD0R7%2BKFqBjAuzxTCaX1lMu2RoYkhliMD&X-Amz-Signature=efb660088cce9acc15dd9b1e94b73bd4d4d14c02f2f402c0cc8b17cbed09b540&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXCM4MM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDNZWPkfb8tFfP4a%2FgZaj9qJHRgty15I5d4wXT%2BL7VOnAIgAMM9%2FQ%2B3dv3M%2BFAVzHY0nKl6PFza8ypIsr23AjkepLMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Br0Ak%2Fbskr69CYyrcAwPBdGaSiau2MhxCai%2F%2BqQ72S0I4WOUdEK3FfE7%2Ffozh0OkYGcprjqEE6h7v81rCSNZ%2BCINqqir1HVrQcHHKyksBEy0FIsoB6cK7osU2Dul%2F5ckoXvMs2MmHgqv%2FOW%2BE5Dmye%2B9Mhsy56Vs%2FKNb5LwsX%2B5Pgxfk5lGw%2B90iSvKC3uwqWMcvPsvGjNe9RzmH0KD8x81O5LY%2BHWGVqo8MPXs6jgJdESEu25BELI9gXeg9GtNHawzcZ4AVYVPTMtVZ%2Bob4JBofKb78nu5WDtX7ZItt4uv9ipRatwFPWI%2B65eovxZAd6OBQhsC7qs9mbDxtyefdLp%2Bjtd8YA9iau%2BVH6pKwEy6oRMUMW6P2Lw7g8EXr4x9a2iBRKsgyXILfS6l5L8eN%2Bbt2Os7lZx0OI4%2FfXysbTlV9hA%2Ff61AxlFeZJqZF6wr33Hs5UazMunq%2Bs1gf53nAqbyWoWFDqCjh4mjlQ3IHIsIkqETElO2MbR0XGLAoMKlGphf6MSdkL%2BH%2Fa5S7UXJEJL%2F24aJng3PavlNV6pJntX951g83Z9u93uBzNHajMiXuWkhu8qP6%2Br3dWSM%2BDkIgH23Cs14SINrfPjLG51tXFVTiebPAxe%2FWU%2BDYsRoSfwcmlKR7pwFx%2FFqtaMKv%2Bxb4GOqUBhf4fCIsQUt83UkBCTE6HeChPpP2hldEAegeoUDSBB2qbZLS69eTZDL3lfTYWn0%2FeU4o5FMPhV4GGofiuCgdu9cekz7stTVnh3qmp8zYfXe5n1LhjnEhofZaJ0PFruEHYef%2FH38UoK%2BmffpnV9Jw%2BdxqYUWj5N76wj1c1uP9Sc52nvpDQahzIGNSDbCSqD0R7%2BKFqBjAuzxTCaX1lMu2RoYkhliMD&X-Amz-Signature=59a98ef10690d1eedd91789b44d4706376aae4245e6d0faefaddbf66f69cc36a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXCM4MM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDNZWPkfb8tFfP4a%2FgZaj9qJHRgty15I5d4wXT%2BL7VOnAIgAMM9%2FQ%2B3dv3M%2BFAVzHY0nKl6PFza8ypIsr23AjkepLMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Br0Ak%2Fbskr69CYyrcAwPBdGaSiau2MhxCai%2F%2BqQ72S0I4WOUdEK3FfE7%2Ffozh0OkYGcprjqEE6h7v81rCSNZ%2BCINqqir1HVrQcHHKyksBEy0FIsoB6cK7osU2Dul%2F5ckoXvMs2MmHgqv%2FOW%2BE5Dmye%2B9Mhsy56Vs%2FKNb5LwsX%2B5Pgxfk5lGw%2B90iSvKC3uwqWMcvPsvGjNe9RzmH0KD8x81O5LY%2BHWGVqo8MPXs6jgJdESEu25BELI9gXeg9GtNHawzcZ4AVYVPTMtVZ%2Bob4JBofKb78nu5WDtX7ZItt4uv9ipRatwFPWI%2B65eovxZAd6OBQhsC7qs9mbDxtyefdLp%2Bjtd8YA9iau%2BVH6pKwEy6oRMUMW6P2Lw7g8EXr4x9a2iBRKsgyXILfS6l5L8eN%2Bbt2Os7lZx0OI4%2FfXysbTlV9hA%2Ff61AxlFeZJqZF6wr33Hs5UazMunq%2Bs1gf53nAqbyWoWFDqCjh4mjlQ3IHIsIkqETElO2MbR0XGLAoMKlGphf6MSdkL%2BH%2Fa5S7UXJEJL%2F24aJng3PavlNV6pJntX951g83Z9u93uBzNHajMiXuWkhu8qP6%2Br3dWSM%2BDkIgH23Cs14SINrfPjLG51tXFVTiebPAxe%2FWU%2BDYsRoSfwcmlKR7pwFx%2FFqtaMKv%2Bxb4GOqUBhf4fCIsQUt83UkBCTE6HeChPpP2hldEAegeoUDSBB2qbZLS69eTZDL3lfTYWn0%2FeU4o5FMPhV4GGofiuCgdu9cekz7stTVnh3qmp8zYfXe5n1LhjnEhofZaJ0PFruEHYef%2FH38UoK%2BmffpnV9Jw%2BdxqYUWj5N76wj1c1uP9Sc52nvpDQahzIGNSDbCSqD0R7%2BKFqBjAuzxTCaX1lMu2RoYkhliMD&X-Amz-Signature=38bf61748bcca223968e30a64db0f6cf12a1e1a6d651e16d4aa7bebb3571b799&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXCM4MM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDNZWPkfb8tFfP4a%2FgZaj9qJHRgty15I5d4wXT%2BL7VOnAIgAMM9%2FQ%2B3dv3M%2BFAVzHY0nKl6PFza8ypIsr23AjkepLMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Br0Ak%2Fbskr69CYyrcAwPBdGaSiau2MhxCai%2F%2BqQ72S0I4WOUdEK3FfE7%2Ffozh0OkYGcprjqEE6h7v81rCSNZ%2BCINqqir1HVrQcHHKyksBEy0FIsoB6cK7osU2Dul%2F5ckoXvMs2MmHgqv%2FOW%2BE5Dmye%2B9Mhsy56Vs%2FKNb5LwsX%2B5Pgxfk5lGw%2B90iSvKC3uwqWMcvPsvGjNe9RzmH0KD8x81O5LY%2BHWGVqo8MPXs6jgJdESEu25BELI9gXeg9GtNHawzcZ4AVYVPTMtVZ%2Bob4JBofKb78nu5WDtX7ZItt4uv9ipRatwFPWI%2B65eovxZAd6OBQhsC7qs9mbDxtyefdLp%2Bjtd8YA9iau%2BVH6pKwEy6oRMUMW6P2Lw7g8EXr4x9a2iBRKsgyXILfS6l5L8eN%2Bbt2Os7lZx0OI4%2FfXysbTlV9hA%2Ff61AxlFeZJqZF6wr33Hs5UazMunq%2Bs1gf53nAqbyWoWFDqCjh4mjlQ3IHIsIkqETElO2MbR0XGLAoMKlGphf6MSdkL%2BH%2Fa5S7UXJEJL%2F24aJng3PavlNV6pJntX951g83Z9u93uBzNHajMiXuWkhu8qP6%2Br3dWSM%2BDkIgH23Cs14SINrfPjLG51tXFVTiebPAxe%2FWU%2BDYsRoSfwcmlKR7pwFx%2FFqtaMKv%2Bxb4GOqUBhf4fCIsQUt83UkBCTE6HeChPpP2hldEAegeoUDSBB2qbZLS69eTZDL3lfTYWn0%2FeU4o5FMPhV4GGofiuCgdu9cekz7stTVnh3qmp8zYfXe5n1LhjnEhofZaJ0PFruEHYef%2FH38UoK%2BmffpnV9Jw%2BdxqYUWj5N76wj1c1uP9Sc52nvpDQahzIGNSDbCSqD0R7%2BKFqBjAuzxTCaX1lMu2RoYkhliMD&X-Amz-Signature=de5edc5e5067b93e053ad2611f65f46a4489991d16f63d019458ad1078e3656d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXCM4MM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDNZWPkfb8tFfP4a%2FgZaj9qJHRgty15I5d4wXT%2BL7VOnAIgAMM9%2FQ%2B3dv3M%2BFAVzHY0nKl6PFza8ypIsr23AjkepLMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Br0Ak%2Fbskr69CYyrcAwPBdGaSiau2MhxCai%2F%2BqQ72S0I4WOUdEK3FfE7%2Ffozh0OkYGcprjqEE6h7v81rCSNZ%2BCINqqir1HVrQcHHKyksBEy0FIsoB6cK7osU2Dul%2F5ckoXvMs2MmHgqv%2FOW%2BE5Dmye%2B9Mhsy56Vs%2FKNb5LwsX%2B5Pgxfk5lGw%2B90iSvKC3uwqWMcvPsvGjNe9RzmH0KD8x81O5LY%2BHWGVqo8MPXs6jgJdESEu25BELI9gXeg9GtNHawzcZ4AVYVPTMtVZ%2Bob4JBofKb78nu5WDtX7ZItt4uv9ipRatwFPWI%2B65eovxZAd6OBQhsC7qs9mbDxtyefdLp%2Bjtd8YA9iau%2BVH6pKwEy6oRMUMW6P2Lw7g8EXr4x9a2iBRKsgyXILfS6l5L8eN%2Bbt2Os7lZx0OI4%2FfXysbTlV9hA%2Ff61AxlFeZJqZF6wr33Hs5UazMunq%2Bs1gf53nAqbyWoWFDqCjh4mjlQ3IHIsIkqETElO2MbR0XGLAoMKlGphf6MSdkL%2BH%2Fa5S7UXJEJL%2F24aJng3PavlNV6pJntX951g83Z9u93uBzNHajMiXuWkhu8qP6%2Br3dWSM%2BDkIgH23Cs14SINrfPjLG51tXFVTiebPAxe%2FWU%2BDYsRoSfwcmlKR7pwFx%2FFqtaMKv%2Bxb4GOqUBhf4fCIsQUt83UkBCTE6HeChPpP2hldEAegeoUDSBB2qbZLS69eTZDL3lfTYWn0%2FeU4o5FMPhV4GGofiuCgdu9cekz7stTVnh3qmp8zYfXe5n1LhjnEhofZaJ0PFruEHYef%2FH38UoK%2BmffpnV9Jw%2BdxqYUWj5N76wj1c1uP9Sc52nvpDQahzIGNSDbCSqD0R7%2BKFqBjAuzxTCaX1lMu2RoYkhliMD&X-Amz-Signature=9fe7f62623f9d97c4f86f9ebc44d114313741a2aa36f5ec7006d6e8df3c14e86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXCM4MM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDNZWPkfb8tFfP4a%2FgZaj9qJHRgty15I5d4wXT%2BL7VOnAIgAMM9%2FQ%2B3dv3M%2BFAVzHY0nKl6PFza8ypIsr23AjkepLMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8Br0Ak%2Fbskr69CYyrcAwPBdGaSiau2MhxCai%2F%2BqQ72S0I4WOUdEK3FfE7%2Ffozh0OkYGcprjqEE6h7v81rCSNZ%2BCINqqir1HVrQcHHKyksBEy0FIsoB6cK7osU2Dul%2F5ckoXvMs2MmHgqv%2FOW%2BE5Dmye%2B9Mhsy56Vs%2FKNb5LwsX%2B5Pgxfk5lGw%2B90iSvKC3uwqWMcvPsvGjNe9RzmH0KD8x81O5LY%2BHWGVqo8MPXs6jgJdESEu25BELI9gXeg9GtNHawzcZ4AVYVPTMtVZ%2Bob4JBofKb78nu5WDtX7ZItt4uv9ipRatwFPWI%2B65eovxZAd6OBQhsC7qs9mbDxtyefdLp%2Bjtd8YA9iau%2BVH6pKwEy6oRMUMW6P2Lw7g8EXr4x9a2iBRKsgyXILfS6l5L8eN%2Bbt2Os7lZx0OI4%2FfXysbTlV9hA%2Ff61AxlFeZJqZF6wr33Hs5UazMunq%2Bs1gf53nAqbyWoWFDqCjh4mjlQ3IHIsIkqETElO2MbR0XGLAoMKlGphf6MSdkL%2BH%2Fa5S7UXJEJL%2F24aJng3PavlNV6pJntX951g83Z9u93uBzNHajMiXuWkhu8qP6%2Br3dWSM%2BDkIgH23Cs14SINrfPjLG51tXFVTiebPAxe%2FWU%2BDYsRoSfwcmlKR7pwFx%2FFqtaMKv%2Bxb4GOqUBhf4fCIsQUt83UkBCTE6HeChPpP2hldEAegeoUDSBB2qbZLS69eTZDL3lfTYWn0%2FeU4o5FMPhV4GGofiuCgdu9cekz7stTVnh3qmp8zYfXe5n1LhjnEhofZaJ0PFruEHYef%2FH38UoK%2BmffpnV9Jw%2BdxqYUWj5N76wj1c1uP9Sc52nvpDQahzIGNSDbCSqD0R7%2BKFqBjAuzxTCaX1lMu2RoYkhliMD&X-Amz-Signature=2d4ceae67d0d886dbe84800e0db38a1c7126cd749a5dc1842af64e126cd1b7d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
