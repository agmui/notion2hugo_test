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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLS3FCD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCv6lY50%2FtOfLJyQ2r8NZu8%2BBQiFTNvo%2B88jD6o380EwQIgXMULpG5a7j1neuABqZGbJHU2%2B5ZI3E%2BzN621evkkL%2BsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjCpi8GjDBZnAbzvCrcA4jPTiUNgSTW0K1LltwFqcQc9ghAnNGZIsPaDIj76clA7LhVLQIK9kpEMp%2BD8VzD5WVQ05Eq6xu6O2MgB6YWnc2ON6%2BDNrucHlk0AzbLrwev4WuipOqXzQtmm%2BbSHzpqSZDKrktflJq4nGUTm%2F4hr%2F6x2ODpylqRFAMJyBUJL7w2x08xqjOilU1xZcuHlqLvwBr6YikDKvTYaqfroqQBD%2F9wxpcr4VaVArVCNmKBlwc24U20rOfhwSZWPXnKcAZ7xB8PYNcnzt3Y%2FUViRvJnuvts2jdlnmxoFx8gis9fOWEQYi29xL%2FuyIgoMbyyazCd90vTMxQ4vVpGYPS8IjRfPcBAsefF7fLtJyNCo8aOTB4FI3XSTQNilkRrk0gRs8iMb2w2V5zkxRY%2FJ8s6XL8UwD14Ph6yorUMCs3ipJaQTjjTdO2PPRSOFdUbXDP4GLotmwqU1%2Bc8ClMCRA%2BwTk4qCbHiIj7eKrWBzJWjX8XqmAN5VGAVLCSY1zH0GIM7HhEBaHAi%2FeelMCZOL9zH%2Bu4ZsgQkCF3Oa3AJaLnMiZXMS9BFal8DlAFYMuG3V%2FZ%2BGEVe4n4IbplRKWU5fE5UfLGw16FDMDHGKHGRdr33AIzz%2B02OqupGVBZ8UCfySTicMLf82L8GOqUBr09njLXel1IqlLUvhcmx2zluKd4P891yi31drR8Tty6tyu6qqqYEKN03%2BRnWf%2FpvjSTuM4wvryUQLhixn7GVtqf%2FOJmhxaw8OwLJVZGCryFY64NIP7HPLQV6Z0lk9G1sZ3d2oz9pM5OJamLbRbxlVErcf7Vpl3a%2FgPnoqMYHGVID7SIe5BmDFtSEH4itXgIedU70mno50uit7SrDSNc28Auog2M9&X-Amz-Signature=4c26e2dae0c841756a210ca29a217b292c5dfad85119a3555030e08f6046c6db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLS3FCD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCv6lY50%2FtOfLJyQ2r8NZu8%2BBQiFTNvo%2B88jD6o380EwQIgXMULpG5a7j1neuABqZGbJHU2%2B5ZI3E%2BzN621evkkL%2BsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjCpi8GjDBZnAbzvCrcA4jPTiUNgSTW0K1LltwFqcQc9ghAnNGZIsPaDIj76clA7LhVLQIK9kpEMp%2BD8VzD5WVQ05Eq6xu6O2MgB6YWnc2ON6%2BDNrucHlk0AzbLrwev4WuipOqXzQtmm%2BbSHzpqSZDKrktflJq4nGUTm%2F4hr%2F6x2ODpylqRFAMJyBUJL7w2x08xqjOilU1xZcuHlqLvwBr6YikDKvTYaqfroqQBD%2F9wxpcr4VaVArVCNmKBlwc24U20rOfhwSZWPXnKcAZ7xB8PYNcnzt3Y%2FUViRvJnuvts2jdlnmxoFx8gis9fOWEQYi29xL%2FuyIgoMbyyazCd90vTMxQ4vVpGYPS8IjRfPcBAsefF7fLtJyNCo8aOTB4FI3XSTQNilkRrk0gRs8iMb2w2V5zkxRY%2FJ8s6XL8UwD14Ph6yorUMCs3ipJaQTjjTdO2PPRSOFdUbXDP4GLotmwqU1%2Bc8ClMCRA%2BwTk4qCbHiIj7eKrWBzJWjX8XqmAN5VGAVLCSY1zH0GIM7HhEBaHAi%2FeelMCZOL9zH%2Bu4ZsgQkCF3Oa3AJaLnMiZXMS9BFal8DlAFYMuG3V%2FZ%2BGEVe4n4IbplRKWU5fE5UfLGw16FDMDHGKHGRdr33AIzz%2B02OqupGVBZ8UCfySTicMLf82L8GOqUBr09njLXel1IqlLUvhcmx2zluKd4P891yi31drR8Tty6tyu6qqqYEKN03%2BRnWf%2FpvjSTuM4wvryUQLhixn7GVtqf%2FOJmhxaw8OwLJVZGCryFY64NIP7HPLQV6Z0lk9G1sZ3d2oz9pM5OJamLbRbxlVErcf7Vpl3a%2FgPnoqMYHGVID7SIe5BmDFtSEH4itXgIedU70mno50uit7SrDSNc28Auog2M9&X-Amz-Signature=188c97f1183e968cacd53b13c8ad435ebea1243a5f365d8225ebd7913d6d74e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLS3FCD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCv6lY50%2FtOfLJyQ2r8NZu8%2BBQiFTNvo%2B88jD6o380EwQIgXMULpG5a7j1neuABqZGbJHU2%2B5ZI3E%2BzN621evkkL%2BsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjCpi8GjDBZnAbzvCrcA4jPTiUNgSTW0K1LltwFqcQc9ghAnNGZIsPaDIj76clA7LhVLQIK9kpEMp%2BD8VzD5WVQ05Eq6xu6O2MgB6YWnc2ON6%2BDNrucHlk0AzbLrwev4WuipOqXzQtmm%2BbSHzpqSZDKrktflJq4nGUTm%2F4hr%2F6x2ODpylqRFAMJyBUJL7w2x08xqjOilU1xZcuHlqLvwBr6YikDKvTYaqfroqQBD%2F9wxpcr4VaVArVCNmKBlwc24U20rOfhwSZWPXnKcAZ7xB8PYNcnzt3Y%2FUViRvJnuvts2jdlnmxoFx8gis9fOWEQYi29xL%2FuyIgoMbyyazCd90vTMxQ4vVpGYPS8IjRfPcBAsefF7fLtJyNCo8aOTB4FI3XSTQNilkRrk0gRs8iMb2w2V5zkxRY%2FJ8s6XL8UwD14Ph6yorUMCs3ipJaQTjjTdO2PPRSOFdUbXDP4GLotmwqU1%2Bc8ClMCRA%2BwTk4qCbHiIj7eKrWBzJWjX8XqmAN5VGAVLCSY1zH0GIM7HhEBaHAi%2FeelMCZOL9zH%2Bu4ZsgQkCF3Oa3AJaLnMiZXMS9BFal8DlAFYMuG3V%2FZ%2BGEVe4n4IbplRKWU5fE5UfLGw16FDMDHGKHGRdr33AIzz%2B02OqupGVBZ8UCfySTicMLf82L8GOqUBr09njLXel1IqlLUvhcmx2zluKd4P891yi31drR8Tty6tyu6qqqYEKN03%2BRnWf%2FpvjSTuM4wvryUQLhixn7GVtqf%2FOJmhxaw8OwLJVZGCryFY64NIP7HPLQV6Z0lk9G1sZ3d2oz9pM5OJamLbRbxlVErcf7Vpl3a%2FgPnoqMYHGVID7SIe5BmDFtSEH4itXgIedU70mno50uit7SrDSNc28Auog2M9&X-Amz-Signature=7e0f05501f56bb04a1db2f9fedde8b9bc2a5b7e9f2df52fdbaaafb5cc1e87e06&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLS3FCD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCv6lY50%2FtOfLJyQ2r8NZu8%2BBQiFTNvo%2B88jD6o380EwQIgXMULpG5a7j1neuABqZGbJHU2%2B5ZI3E%2BzN621evkkL%2BsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjCpi8GjDBZnAbzvCrcA4jPTiUNgSTW0K1LltwFqcQc9ghAnNGZIsPaDIj76clA7LhVLQIK9kpEMp%2BD8VzD5WVQ05Eq6xu6O2MgB6YWnc2ON6%2BDNrucHlk0AzbLrwev4WuipOqXzQtmm%2BbSHzpqSZDKrktflJq4nGUTm%2F4hr%2F6x2ODpylqRFAMJyBUJL7w2x08xqjOilU1xZcuHlqLvwBr6YikDKvTYaqfroqQBD%2F9wxpcr4VaVArVCNmKBlwc24U20rOfhwSZWPXnKcAZ7xB8PYNcnzt3Y%2FUViRvJnuvts2jdlnmxoFx8gis9fOWEQYi29xL%2FuyIgoMbyyazCd90vTMxQ4vVpGYPS8IjRfPcBAsefF7fLtJyNCo8aOTB4FI3XSTQNilkRrk0gRs8iMb2w2V5zkxRY%2FJ8s6XL8UwD14Ph6yorUMCs3ipJaQTjjTdO2PPRSOFdUbXDP4GLotmwqU1%2Bc8ClMCRA%2BwTk4qCbHiIj7eKrWBzJWjX8XqmAN5VGAVLCSY1zH0GIM7HhEBaHAi%2FeelMCZOL9zH%2Bu4ZsgQkCF3Oa3AJaLnMiZXMS9BFal8DlAFYMuG3V%2FZ%2BGEVe4n4IbplRKWU5fE5UfLGw16FDMDHGKHGRdr33AIzz%2B02OqupGVBZ8UCfySTicMLf82L8GOqUBr09njLXel1IqlLUvhcmx2zluKd4P891yi31drR8Tty6tyu6qqqYEKN03%2BRnWf%2FpvjSTuM4wvryUQLhixn7GVtqf%2FOJmhxaw8OwLJVZGCryFY64NIP7HPLQV6Z0lk9G1sZ3d2oz9pM5OJamLbRbxlVErcf7Vpl3a%2FgPnoqMYHGVID7SIe5BmDFtSEH4itXgIedU70mno50uit7SrDSNc28Auog2M9&X-Amz-Signature=18edfe3a5111966f6d9af9a676accbdd63eada897c942dde44feed2f50066d58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLS3FCD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCv6lY50%2FtOfLJyQ2r8NZu8%2BBQiFTNvo%2B88jD6o380EwQIgXMULpG5a7j1neuABqZGbJHU2%2B5ZI3E%2BzN621evkkL%2BsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjCpi8GjDBZnAbzvCrcA4jPTiUNgSTW0K1LltwFqcQc9ghAnNGZIsPaDIj76clA7LhVLQIK9kpEMp%2BD8VzD5WVQ05Eq6xu6O2MgB6YWnc2ON6%2BDNrucHlk0AzbLrwev4WuipOqXzQtmm%2BbSHzpqSZDKrktflJq4nGUTm%2F4hr%2F6x2ODpylqRFAMJyBUJL7w2x08xqjOilU1xZcuHlqLvwBr6YikDKvTYaqfroqQBD%2F9wxpcr4VaVArVCNmKBlwc24U20rOfhwSZWPXnKcAZ7xB8PYNcnzt3Y%2FUViRvJnuvts2jdlnmxoFx8gis9fOWEQYi29xL%2FuyIgoMbyyazCd90vTMxQ4vVpGYPS8IjRfPcBAsefF7fLtJyNCo8aOTB4FI3XSTQNilkRrk0gRs8iMb2w2V5zkxRY%2FJ8s6XL8UwD14Ph6yorUMCs3ipJaQTjjTdO2PPRSOFdUbXDP4GLotmwqU1%2Bc8ClMCRA%2BwTk4qCbHiIj7eKrWBzJWjX8XqmAN5VGAVLCSY1zH0GIM7HhEBaHAi%2FeelMCZOL9zH%2Bu4ZsgQkCF3Oa3AJaLnMiZXMS9BFal8DlAFYMuG3V%2FZ%2BGEVe4n4IbplRKWU5fE5UfLGw16FDMDHGKHGRdr33AIzz%2B02OqupGVBZ8UCfySTicMLf82L8GOqUBr09njLXel1IqlLUvhcmx2zluKd4P891yi31drR8Tty6tyu6qqqYEKN03%2BRnWf%2FpvjSTuM4wvryUQLhixn7GVtqf%2FOJmhxaw8OwLJVZGCryFY64NIP7HPLQV6Z0lk9G1sZ3d2oz9pM5OJamLbRbxlVErcf7Vpl3a%2FgPnoqMYHGVID7SIe5BmDFtSEH4itXgIedU70mno50uit7SrDSNc28Auog2M9&X-Amz-Signature=9b9c88558d5ca178302b4c775d833b61fc5a2b02f215bb08b080e6aa703841f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLS3FCD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCv6lY50%2FtOfLJyQ2r8NZu8%2BBQiFTNvo%2B88jD6o380EwQIgXMULpG5a7j1neuABqZGbJHU2%2B5ZI3E%2BzN621evkkL%2BsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjCpi8GjDBZnAbzvCrcA4jPTiUNgSTW0K1LltwFqcQc9ghAnNGZIsPaDIj76clA7LhVLQIK9kpEMp%2BD8VzD5WVQ05Eq6xu6O2MgB6YWnc2ON6%2BDNrucHlk0AzbLrwev4WuipOqXzQtmm%2BbSHzpqSZDKrktflJq4nGUTm%2F4hr%2F6x2ODpylqRFAMJyBUJL7w2x08xqjOilU1xZcuHlqLvwBr6YikDKvTYaqfroqQBD%2F9wxpcr4VaVArVCNmKBlwc24U20rOfhwSZWPXnKcAZ7xB8PYNcnzt3Y%2FUViRvJnuvts2jdlnmxoFx8gis9fOWEQYi29xL%2FuyIgoMbyyazCd90vTMxQ4vVpGYPS8IjRfPcBAsefF7fLtJyNCo8aOTB4FI3XSTQNilkRrk0gRs8iMb2w2V5zkxRY%2FJ8s6XL8UwD14Ph6yorUMCs3ipJaQTjjTdO2PPRSOFdUbXDP4GLotmwqU1%2Bc8ClMCRA%2BwTk4qCbHiIj7eKrWBzJWjX8XqmAN5VGAVLCSY1zH0GIM7HhEBaHAi%2FeelMCZOL9zH%2Bu4ZsgQkCF3Oa3AJaLnMiZXMS9BFal8DlAFYMuG3V%2FZ%2BGEVe4n4IbplRKWU5fE5UfLGw16FDMDHGKHGRdr33AIzz%2B02OqupGVBZ8UCfySTicMLf82L8GOqUBr09njLXel1IqlLUvhcmx2zluKd4P891yi31drR8Tty6tyu6qqqYEKN03%2BRnWf%2FpvjSTuM4wvryUQLhixn7GVtqf%2FOJmhxaw8OwLJVZGCryFY64NIP7HPLQV6Z0lk9G1sZ3d2oz9pM5OJamLbRbxlVErcf7Vpl3a%2FgPnoqMYHGVID7SIe5BmDFtSEH4itXgIedU70mno50uit7SrDSNc28Auog2M9&X-Amz-Signature=0a6c1ae889a12f371f834e496aeb61da4b773dedac68d4ab98cd64ee77f24102&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLS3FCD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCv6lY50%2FtOfLJyQ2r8NZu8%2BBQiFTNvo%2B88jD6o380EwQIgXMULpG5a7j1neuABqZGbJHU2%2B5ZI3E%2BzN621evkkL%2BsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjCpi8GjDBZnAbzvCrcA4jPTiUNgSTW0K1LltwFqcQc9ghAnNGZIsPaDIj76clA7LhVLQIK9kpEMp%2BD8VzD5WVQ05Eq6xu6O2MgB6YWnc2ON6%2BDNrucHlk0AzbLrwev4WuipOqXzQtmm%2BbSHzpqSZDKrktflJq4nGUTm%2F4hr%2F6x2ODpylqRFAMJyBUJL7w2x08xqjOilU1xZcuHlqLvwBr6YikDKvTYaqfroqQBD%2F9wxpcr4VaVArVCNmKBlwc24U20rOfhwSZWPXnKcAZ7xB8PYNcnzt3Y%2FUViRvJnuvts2jdlnmxoFx8gis9fOWEQYi29xL%2FuyIgoMbyyazCd90vTMxQ4vVpGYPS8IjRfPcBAsefF7fLtJyNCo8aOTB4FI3XSTQNilkRrk0gRs8iMb2w2V5zkxRY%2FJ8s6XL8UwD14Ph6yorUMCs3ipJaQTjjTdO2PPRSOFdUbXDP4GLotmwqU1%2Bc8ClMCRA%2BwTk4qCbHiIj7eKrWBzJWjX8XqmAN5VGAVLCSY1zH0GIM7HhEBaHAi%2FeelMCZOL9zH%2Bu4ZsgQkCF3Oa3AJaLnMiZXMS9BFal8DlAFYMuG3V%2FZ%2BGEVe4n4IbplRKWU5fE5UfLGw16FDMDHGKHGRdr33AIzz%2B02OqupGVBZ8UCfySTicMLf82L8GOqUBr09njLXel1IqlLUvhcmx2zluKd4P891yi31drR8Tty6tyu6qqqYEKN03%2BRnWf%2FpvjSTuM4wvryUQLhixn7GVtqf%2FOJmhxaw8OwLJVZGCryFY64NIP7HPLQV6Z0lk9G1sZ3d2oz9pM5OJamLbRbxlVErcf7Vpl3a%2FgPnoqMYHGVID7SIe5BmDFtSEH4itXgIedU70mno50uit7SrDSNc28Auog2M9&X-Amz-Signature=2ee456d6bd40faa5981daf81ad742c93964deaa78af279256d8522d7de263f52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SLS3FCD%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCv6lY50%2FtOfLJyQ2r8NZu8%2BBQiFTNvo%2B88jD6o380EwQIgXMULpG5a7j1neuABqZGbJHU2%2B5ZI3E%2BzN621evkkL%2BsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFjCpi8GjDBZnAbzvCrcA4jPTiUNgSTW0K1LltwFqcQc9ghAnNGZIsPaDIj76clA7LhVLQIK9kpEMp%2BD8VzD5WVQ05Eq6xu6O2MgB6YWnc2ON6%2BDNrucHlk0AzbLrwev4WuipOqXzQtmm%2BbSHzpqSZDKrktflJq4nGUTm%2F4hr%2F6x2ODpylqRFAMJyBUJL7w2x08xqjOilU1xZcuHlqLvwBr6YikDKvTYaqfroqQBD%2F9wxpcr4VaVArVCNmKBlwc24U20rOfhwSZWPXnKcAZ7xB8PYNcnzt3Y%2FUViRvJnuvts2jdlnmxoFx8gis9fOWEQYi29xL%2FuyIgoMbyyazCd90vTMxQ4vVpGYPS8IjRfPcBAsefF7fLtJyNCo8aOTB4FI3XSTQNilkRrk0gRs8iMb2w2V5zkxRY%2FJ8s6XL8UwD14Ph6yorUMCs3ipJaQTjjTdO2PPRSOFdUbXDP4GLotmwqU1%2Bc8ClMCRA%2BwTk4qCbHiIj7eKrWBzJWjX8XqmAN5VGAVLCSY1zH0GIM7HhEBaHAi%2FeelMCZOL9zH%2Bu4ZsgQkCF3Oa3AJaLnMiZXMS9BFal8DlAFYMuG3V%2FZ%2BGEVe4n4IbplRKWU5fE5UfLGw16FDMDHGKHGRdr33AIzz%2B02OqupGVBZ8UCfySTicMLf82L8GOqUBr09njLXel1IqlLUvhcmx2zluKd4P891yi31drR8Tty6tyu6qqqYEKN03%2BRnWf%2FpvjSTuM4wvryUQLhixn7GVtqf%2FOJmhxaw8OwLJVZGCryFY64NIP7HPLQV6Z0lk9G1sZ3d2oz9pM5OJamLbRbxlVErcf7Vpl3a%2FgPnoqMYHGVID7SIe5BmDFtSEH4itXgIedU70mno50uit7SrDSNc28Auog2M9&X-Amz-Signature=a1c98dd3871cebde658f9a507a3bfd1027a7060449f778806ba1dfe33147b656&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
