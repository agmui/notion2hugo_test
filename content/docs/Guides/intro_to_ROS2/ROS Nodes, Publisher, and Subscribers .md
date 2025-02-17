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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW76SQE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCPwQQz5BKcaazym%2B505Jxbc7GGyAcKUANLlxO5XkwvbQIgGBGEYGc2eQVsO5HD5ChwhaYejjwhDmtayKYaMMGvqjwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLcIW2wKuc77GaSebyrcA2AMoZo1ULU8XyF6HGves7ZK7uW6hqF%2FyJstbUTQYkb05QdO3t%2FQVADjg3d4fFbEbyRRNMC0ultmjhuIx5adHXP34V%2BdLozTZYPVkcGIODoJzpYOI0Nw341AxQGKii2Au%2Bi5TdLMraiqW1RpA4XQeM5jX0KqbO%2FrnxL44%2BF62TbpFcSciFmdRpk4H%2Bfp%2BsflVfOTueQamArzTgzUPsIsIce3CRArLRwH1KF65w511sz%2Fn0X3JI%2FWd32E7uiGNRaomTV%2Fvb5DKVTTRy%2B5GpJT4vpAdlCGiTIChPPMLpQYxXDK7gne6BZV6DjJeX31wU83x2iLhcbMMYCTqjP3BGraxAO5chKf51yApB7EGDOSsCXYcq01%2FxhT2%2F031qzOBr4y4xom%2Fq4Is4q709xO9O7Ucg3ES%2BHiyUPN%2F4N8nFOptFa1vf0j76VY3MNPWqHllWL9UDTPK9LAZs%2FPjSjiCjbfD9oMB34ocrbkf2%2BgxDdy6Y1i9Mp%2FjpgwZgHogDjfJTsU3n%2F8LpkenWrIlCvNlnN9CDB41%2FGGqVNbmaZJVMwKY2tek1RfGaBFwnEt6GxyNpLrDQ7fmqmKkzzEY4wivC3GrmQSqU4h6bbIjylpVKXJL6rkgK0GfjaRn6nBo1GBMLzqzr0GOqUBA9LnsjamhPpc6z7%2FOBe5KoH2rBEbPTreDkJzX4e6g1rsLxLWKzFgPTEz6FttycQ7B%2Bx%2Fx5WX12h1I%2FcZlBHBzvlJs8S00LxCNm34AqKs0lql07ZAFIw2hPDx4JpvLVFvbEEyYqh9MQgO1AIEXfYsDwPIxgVLLmTkTC70iZJDc8JYC3xi%2BmBMdSQqSkaHb2gv4chOnCwjnLt45yCjJsxQvloYaOHi&X-Amz-Signature=e5d4c130d63bd4c6b81e6d2c640f4955fc192dd298040a0fd6a62e36a389d8a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW76SQE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCPwQQz5BKcaazym%2B505Jxbc7GGyAcKUANLlxO5XkwvbQIgGBGEYGc2eQVsO5HD5ChwhaYejjwhDmtayKYaMMGvqjwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLcIW2wKuc77GaSebyrcA2AMoZo1ULU8XyF6HGves7ZK7uW6hqF%2FyJstbUTQYkb05QdO3t%2FQVADjg3d4fFbEbyRRNMC0ultmjhuIx5adHXP34V%2BdLozTZYPVkcGIODoJzpYOI0Nw341AxQGKii2Au%2Bi5TdLMraiqW1RpA4XQeM5jX0KqbO%2FrnxL44%2BF62TbpFcSciFmdRpk4H%2Bfp%2BsflVfOTueQamArzTgzUPsIsIce3CRArLRwH1KF65w511sz%2Fn0X3JI%2FWd32E7uiGNRaomTV%2Fvb5DKVTTRy%2B5GpJT4vpAdlCGiTIChPPMLpQYxXDK7gne6BZV6DjJeX31wU83x2iLhcbMMYCTqjP3BGraxAO5chKf51yApB7EGDOSsCXYcq01%2FxhT2%2F031qzOBr4y4xom%2Fq4Is4q709xO9O7Ucg3ES%2BHiyUPN%2F4N8nFOptFa1vf0j76VY3MNPWqHllWL9UDTPK9LAZs%2FPjSjiCjbfD9oMB34ocrbkf2%2BgxDdy6Y1i9Mp%2FjpgwZgHogDjfJTsU3n%2F8LpkenWrIlCvNlnN9CDB41%2FGGqVNbmaZJVMwKY2tek1RfGaBFwnEt6GxyNpLrDQ7fmqmKkzzEY4wivC3GrmQSqU4h6bbIjylpVKXJL6rkgK0GfjaRn6nBo1GBMLzqzr0GOqUBA9LnsjamhPpc6z7%2FOBe5KoH2rBEbPTreDkJzX4e6g1rsLxLWKzFgPTEz6FttycQ7B%2Bx%2Fx5WX12h1I%2FcZlBHBzvlJs8S00LxCNm34AqKs0lql07ZAFIw2hPDx4JpvLVFvbEEyYqh9MQgO1AIEXfYsDwPIxgVLLmTkTC70iZJDc8JYC3xi%2BmBMdSQqSkaHb2gv4chOnCwjnLt45yCjJsxQvloYaOHi&X-Amz-Signature=26c8b1a84c2379d9af98b105b801c790d44fe138975735fb056e8e0cb84cec54&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW76SQE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCPwQQz5BKcaazym%2B505Jxbc7GGyAcKUANLlxO5XkwvbQIgGBGEYGc2eQVsO5HD5ChwhaYejjwhDmtayKYaMMGvqjwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLcIW2wKuc77GaSebyrcA2AMoZo1ULU8XyF6HGves7ZK7uW6hqF%2FyJstbUTQYkb05QdO3t%2FQVADjg3d4fFbEbyRRNMC0ultmjhuIx5adHXP34V%2BdLozTZYPVkcGIODoJzpYOI0Nw341AxQGKii2Au%2Bi5TdLMraiqW1RpA4XQeM5jX0KqbO%2FrnxL44%2BF62TbpFcSciFmdRpk4H%2Bfp%2BsflVfOTueQamArzTgzUPsIsIce3CRArLRwH1KF65w511sz%2Fn0X3JI%2FWd32E7uiGNRaomTV%2Fvb5DKVTTRy%2B5GpJT4vpAdlCGiTIChPPMLpQYxXDK7gne6BZV6DjJeX31wU83x2iLhcbMMYCTqjP3BGraxAO5chKf51yApB7EGDOSsCXYcq01%2FxhT2%2F031qzOBr4y4xom%2Fq4Is4q709xO9O7Ucg3ES%2BHiyUPN%2F4N8nFOptFa1vf0j76VY3MNPWqHllWL9UDTPK9LAZs%2FPjSjiCjbfD9oMB34ocrbkf2%2BgxDdy6Y1i9Mp%2FjpgwZgHogDjfJTsU3n%2F8LpkenWrIlCvNlnN9CDB41%2FGGqVNbmaZJVMwKY2tek1RfGaBFwnEt6GxyNpLrDQ7fmqmKkzzEY4wivC3GrmQSqU4h6bbIjylpVKXJL6rkgK0GfjaRn6nBo1GBMLzqzr0GOqUBA9LnsjamhPpc6z7%2FOBe5KoH2rBEbPTreDkJzX4e6g1rsLxLWKzFgPTEz6FttycQ7B%2Bx%2Fx5WX12h1I%2FcZlBHBzvlJs8S00LxCNm34AqKs0lql07ZAFIw2hPDx4JpvLVFvbEEyYqh9MQgO1AIEXfYsDwPIxgVLLmTkTC70iZJDc8JYC3xi%2BmBMdSQqSkaHb2gv4chOnCwjnLt45yCjJsxQvloYaOHi&X-Amz-Signature=bdb668f2c1e7aaaab43d3f3e68316aebb5b2b340d2af66eaf3ca26533f46d0cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW76SQE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCPwQQz5BKcaazym%2B505Jxbc7GGyAcKUANLlxO5XkwvbQIgGBGEYGc2eQVsO5HD5ChwhaYejjwhDmtayKYaMMGvqjwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLcIW2wKuc77GaSebyrcA2AMoZo1ULU8XyF6HGves7ZK7uW6hqF%2FyJstbUTQYkb05QdO3t%2FQVADjg3d4fFbEbyRRNMC0ultmjhuIx5adHXP34V%2BdLozTZYPVkcGIODoJzpYOI0Nw341AxQGKii2Au%2Bi5TdLMraiqW1RpA4XQeM5jX0KqbO%2FrnxL44%2BF62TbpFcSciFmdRpk4H%2Bfp%2BsflVfOTueQamArzTgzUPsIsIce3CRArLRwH1KF65w511sz%2Fn0X3JI%2FWd32E7uiGNRaomTV%2Fvb5DKVTTRy%2B5GpJT4vpAdlCGiTIChPPMLpQYxXDK7gne6BZV6DjJeX31wU83x2iLhcbMMYCTqjP3BGraxAO5chKf51yApB7EGDOSsCXYcq01%2FxhT2%2F031qzOBr4y4xom%2Fq4Is4q709xO9O7Ucg3ES%2BHiyUPN%2F4N8nFOptFa1vf0j76VY3MNPWqHllWL9UDTPK9LAZs%2FPjSjiCjbfD9oMB34ocrbkf2%2BgxDdy6Y1i9Mp%2FjpgwZgHogDjfJTsU3n%2F8LpkenWrIlCvNlnN9CDB41%2FGGqVNbmaZJVMwKY2tek1RfGaBFwnEt6GxyNpLrDQ7fmqmKkzzEY4wivC3GrmQSqU4h6bbIjylpVKXJL6rkgK0GfjaRn6nBo1GBMLzqzr0GOqUBA9LnsjamhPpc6z7%2FOBe5KoH2rBEbPTreDkJzX4e6g1rsLxLWKzFgPTEz6FttycQ7B%2Bx%2Fx5WX12h1I%2FcZlBHBzvlJs8S00LxCNm34AqKs0lql07ZAFIw2hPDx4JpvLVFvbEEyYqh9MQgO1AIEXfYsDwPIxgVLLmTkTC70iZJDc8JYC3xi%2BmBMdSQqSkaHb2gv4chOnCwjnLt45yCjJsxQvloYaOHi&X-Amz-Signature=f6677b8df1a9df9e08957bb93dfce7159b53af3aa8690408f05d5cd522b6daf9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW76SQE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCPwQQz5BKcaazym%2B505Jxbc7GGyAcKUANLlxO5XkwvbQIgGBGEYGc2eQVsO5HD5ChwhaYejjwhDmtayKYaMMGvqjwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLcIW2wKuc77GaSebyrcA2AMoZo1ULU8XyF6HGves7ZK7uW6hqF%2FyJstbUTQYkb05QdO3t%2FQVADjg3d4fFbEbyRRNMC0ultmjhuIx5adHXP34V%2BdLozTZYPVkcGIODoJzpYOI0Nw341AxQGKii2Au%2Bi5TdLMraiqW1RpA4XQeM5jX0KqbO%2FrnxL44%2BF62TbpFcSciFmdRpk4H%2Bfp%2BsflVfOTueQamArzTgzUPsIsIce3CRArLRwH1KF65w511sz%2Fn0X3JI%2FWd32E7uiGNRaomTV%2Fvb5DKVTTRy%2B5GpJT4vpAdlCGiTIChPPMLpQYxXDK7gne6BZV6DjJeX31wU83x2iLhcbMMYCTqjP3BGraxAO5chKf51yApB7EGDOSsCXYcq01%2FxhT2%2F031qzOBr4y4xom%2Fq4Is4q709xO9O7Ucg3ES%2BHiyUPN%2F4N8nFOptFa1vf0j76VY3MNPWqHllWL9UDTPK9LAZs%2FPjSjiCjbfD9oMB34ocrbkf2%2BgxDdy6Y1i9Mp%2FjpgwZgHogDjfJTsU3n%2F8LpkenWrIlCvNlnN9CDB41%2FGGqVNbmaZJVMwKY2tek1RfGaBFwnEt6GxyNpLrDQ7fmqmKkzzEY4wivC3GrmQSqU4h6bbIjylpVKXJL6rkgK0GfjaRn6nBo1GBMLzqzr0GOqUBA9LnsjamhPpc6z7%2FOBe5KoH2rBEbPTreDkJzX4e6g1rsLxLWKzFgPTEz6FttycQ7B%2Bx%2Fx5WX12h1I%2FcZlBHBzvlJs8S00LxCNm34AqKs0lql07ZAFIw2hPDx4JpvLVFvbEEyYqh9MQgO1AIEXfYsDwPIxgVLLmTkTC70iZJDc8JYC3xi%2BmBMdSQqSkaHb2gv4chOnCwjnLt45yCjJsxQvloYaOHi&X-Amz-Signature=1a732bf7b8e5604ae863b9f0e8d54be4482e1abc942856736e656036c0530782&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW76SQE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCPwQQz5BKcaazym%2B505Jxbc7GGyAcKUANLlxO5XkwvbQIgGBGEYGc2eQVsO5HD5ChwhaYejjwhDmtayKYaMMGvqjwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLcIW2wKuc77GaSebyrcA2AMoZo1ULU8XyF6HGves7ZK7uW6hqF%2FyJstbUTQYkb05QdO3t%2FQVADjg3d4fFbEbyRRNMC0ultmjhuIx5adHXP34V%2BdLozTZYPVkcGIODoJzpYOI0Nw341AxQGKii2Au%2Bi5TdLMraiqW1RpA4XQeM5jX0KqbO%2FrnxL44%2BF62TbpFcSciFmdRpk4H%2Bfp%2BsflVfOTueQamArzTgzUPsIsIce3CRArLRwH1KF65w511sz%2Fn0X3JI%2FWd32E7uiGNRaomTV%2Fvb5DKVTTRy%2B5GpJT4vpAdlCGiTIChPPMLpQYxXDK7gne6BZV6DjJeX31wU83x2iLhcbMMYCTqjP3BGraxAO5chKf51yApB7EGDOSsCXYcq01%2FxhT2%2F031qzOBr4y4xom%2Fq4Is4q709xO9O7Ucg3ES%2BHiyUPN%2F4N8nFOptFa1vf0j76VY3MNPWqHllWL9UDTPK9LAZs%2FPjSjiCjbfD9oMB34ocrbkf2%2BgxDdy6Y1i9Mp%2FjpgwZgHogDjfJTsU3n%2F8LpkenWrIlCvNlnN9CDB41%2FGGqVNbmaZJVMwKY2tek1RfGaBFwnEt6GxyNpLrDQ7fmqmKkzzEY4wivC3GrmQSqU4h6bbIjylpVKXJL6rkgK0GfjaRn6nBo1GBMLzqzr0GOqUBA9LnsjamhPpc6z7%2FOBe5KoH2rBEbPTreDkJzX4e6g1rsLxLWKzFgPTEz6FttycQ7B%2Bx%2Fx5WX12h1I%2FcZlBHBzvlJs8S00LxCNm34AqKs0lql07ZAFIw2hPDx4JpvLVFvbEEyYqh9MQgO1AIEXfYsDwPIxgVLLmTkTC70iZJDc8JYC3xi%2BmBMdSQqSkaHb2gv4chOnCwjnLt45yCjJsxQvloYaOHi&X-Amz-Signature=d43ce71c543bfc9583c098d7d4bad20a989e1d96f88e9bc13dddbdfb4d3e9403&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW76SQE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCPwQQz5BKcaazym%2B505Jxbc7GGyAcKUANLlxO5XkwvbQIgGBGEYGc2eQVsO5HD5ChwhaYejjwhDmtayKYaMMGvqjwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLcIW2wKuc77GaSebyrcA2AMoZo1ULU8XyF6HGves7ZK7uW6hqF%2FyJstbUTQYkb05QdO3t%2FQVADjg3d4fFbEbyRRNMC0ultmjhuIx5adHXP34V%2BdLozTZYPVkcGIODoJzpYOI0Nw341AxQGKii2Au%2Bi5TdLMraiqW1RpA4XQeM5jX0KqbO%2FrnxL44%2BF62TbpFcSciFmdRpk4H%2Bfp%2BsflVfOTueQamArzTgzUPsIsIce3CRArLRwH1KF65w511sz%2Fn0X3JI%2FWd32E7uiGNRaomTV%2Fvb5DKVTTRy%2B5GpJT4vpAdlCGiTIChPPMLpQYxXDK7gne6BZV6DjJeX31wU83x2iLhcbMMYCTqjP3BGraxAO5chKf51yApB7EGDOSsCXYcq01%2FxhT2%2F031qzOBr4y4xom%2Fq4Is4q709xO9O7Ucg3ES%2BHiyUPN%2F4N8nFOptFa1vf0j76VY3MNPWqHllWL9UDTPK9LAZs%2FPjSjiCjbfD9oMB34ocrbkf2%2BgxDdy6Y1i9Mp%2FjpgwZgHogDjfJTsU3n%2F8LpkenWrIlCvNlnN9CDB41%2FGGqVNbmaZJVMwKY2tek1RfGaBFwnEt6GxyNpLrDQ7fmqmKkzzEY4wivC3GrmQSqU4h6bbIjylpVKXJL6rkgK0GfjaRn6nBo1GBMLzqzr0GOqUBA9LnsjamhPpc6z7%2FOBe5KoH2rBEbPTreDkJzX4e6g1rsLxLWKzFgPTEz6FttycQ7B%2Bx%2Fx5WX12h1I%2FcZlBHBzvlJs8S00LxCNm34AqKs0lql07ZAFIw2hPDx4JpvLVFvbEEyYqh9MQgO1AIEXfYsDwPIxgVLLmTkTC70iZJDc8JYC3xi%2BmBMdSQqSkaHb2gv4chOnCwjnLt45yCjJsxQvloYaOHi&X-Amz-Signature=41f1eebb4b152aee9ea2cd21a9e434433b3e66bd5a436a20b946a910ad8102b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOW76SQE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCPwQQz5BKcaazym%2B505Jxbc7GGyAcKUANLlxO5XkwvbQIgGBGEYGc2eQVsO5HD5ChwhaYejjwhDmtayKYaMMGvqjwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLcIW2wKuc77GaSebyrcA2AMoZo1ULU8XyF6HGves7ZK7uW6hqF%2FyJstbUTQYkb05QdO3t%2FQVADjg3d4fFbEbyRRNMC0ultmjhuIx5adHXP34V%2BdLozTZYPVkcGIODoJzpYOI0Nw341AxQGKii2Au%2Bi5TdLMraiqW1RpA4XQeM5jX0KqbO%2FrnxL44%2BF62TbpFcSciFmdRpk4H%2Bfp%2BsflVfOTueQamArzTgzUPsIsIce3CRArLRwH1KF65w511sz%2Fn0X3JI%2FWd32E7uiGNRaomTV%2Fvb5DKVTTRy%2B5GpJT4vpAdlCGiTIChPPMLpQYxXDK7gne6BZV6DjJeX31wU83x2iLhcbMMYCTqjP3BGraxAO5chKf51yApB7EGDOSsCXYcq01%2FxhT2%2F031qzOBr4y4xom%2Fq4Is4q709xO9O7Ucg3ES%2BHiyUPN%2F4N8nFOptFa1vf0j76VY3MNPWqHllWL9UDTPK9LAZs%2FPjSjiCjbfD9oMB34ocrbkf2%2BgxDdy6Y1i9Mp%2FjpgwZgHogDjfJTsU3n%2F8LpkenWrIlCvNlnN9CDB41%2FGGqVNbmaZJVMwKY2tek1RfGaBFwnEt6GxyNpLrDQ7fmqmKkzzEY4wivC3GrmQSqU4h6bbIjylpVKXJL6rkgK0GfjaRn6nBo1GBMLzqzr0GOqUBA9LnsjamhPpc6z7%2FOBe5KoH2rBEbPTreDkJzX4e6g1rsLxLWKzFgPTEz6FttycQ7B%2Bx%2Fx5WX12h1I%2FcZlBHBzvlJs8S00LxCNm34AqKs0lql07ZAFIw2hPDx4JpvLVFvbEEyYqh9MQgO1AIEXfYsDwPIxgVLLmTkTC70iZJDc8JYC3xi%2BmBMdSQqSkaHb2gv4chOnCwjnLt45yCjJsxQvloYaOHi&X-Amz-Signature=96df0ecdc72de52c7326b866dccf920f961fb4dc6d2e7226b05155890afb26a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
