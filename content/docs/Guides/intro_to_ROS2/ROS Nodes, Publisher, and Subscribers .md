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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ZT3TJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDJyuw33QdYlptuwm3YcIRfUQ6144Vx7D6BbqHoAUdmpwIgBUK0tQXKBrNXXjFJmmzFFw%2FvFV5%2B9UtemD2F8gCjcPwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ6Y29eFDjcIvsvOqyrcA6yg2ifkCd6MCFiFcL3x4WhG9i6HVeSQknBn9k1eQfHgItnZMqFsgKmT%2BnFL3hxClC2YtEJ7ntyFIYQNMqCQuRlJh9QVbF3gGWFp2seExsx8iLS8NLNT%2FuDoZlcGguozwCY4uinJeJ4AvGkuZn%2FiZA7l5C1X3%2BOgInphDcol3ZNPjyYGACdyPOSrXyyYmMjkzt4R8PRR5SVnYEpySqaV7oC2w85NVxUug3S%2FkNSmiL68zmUWEI4LoGWpHwaDuz4wyZXSRCfQNG5o%2FNR7X8fBpsO3pA3HaDV%2FJ4%2F0xtw1d86MgZvpYnS8GIrr8T5xLc0Fk2e0AthGRvIx4PHKa8sBTPH1JeHYZ25tvTSNP5qajqqvfvX6t7i0lws7ttBN1dbbdco4EFXo0D4%2FnoZuskqo5H8SQpynb0EXJv8TMRfnSTEeH%2Fpyg5xSE0ykshT%2B9b4lYt1ozFQcO%2F4ifQL6Qx3jCm9pl7jEYO18GA07C95fxSn%2FeTHNe7Si8A9HSf5oVn4Os%2BKpzAEwKr5jsFT3yFNPlW5FKQ8dmPoL8vsLpUwX7itHvDnQanQhZbeRVV61iUlhuuVPwwLAPEbQwxMfGJiKSQjrbwmDVJNObeP%2Fknc6liVqixz4aLocogs0xSgJMJiVhb0GOqUBwFEAQnWwJzwMAuc8HZLh7K7ovJxY6ExCGOu%2BjDk4sSOco2C9OSUKunvZGCzZZYeuGyO9S%2FWtUHb%2FVFQjC%2BQz32DkgIqpNF%2FpnrEmVYQpLkoTzqyZnQy9rWqhXnOw81w0V7Ksry6Vy2K1jb8KFvBidC7Ov%2BwQj3mNmOvaoG8RjpE6tUZ5E%2Bi49yMxE00O5Df40B67bufJ4KIZpDG6TH92Dnoet1IM&X-Amz-Signature=2efda4ce0218d5c94c6281cc0f483c564227c5693c7b8f5ff52989ac08520bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ZT3TJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDJyuw33QdYlptuwm3YcIRfUQ6144Vx7D6BbqHoAUdmpwIgBUK0tQXKBrNXXjFJmmzFFw%2FvFV5%2B9UtemD2F8gCjcPwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ6Y29eFDjcIvsvOqyrcA6yg2ifkCd6MCFiFcL3x4WhG9i6HVeSQknBn9k1eQfHgItnZMqFsgKmT%2BnFL3hxClC2YtEJ7ntyFIYQNMqCQuRlJh9QVbF3gGWFp2seExsx8iLS8NLNT%2FuDoZlcGguozwCY4uinJeJ4AvGkuZn%2FiZA7l5C1X3%2BOgInphDcol3ZNPjyYGACdyPOSrXyyYmMjkzt4R8PRR5SVnYEpySqaV7oC2w85NVxUug3S%2FkNSmiL68zmUWEI4LoGWpHwaDuz4wyZXSRCfQNG5o%2FNR7X8fBpsO3pA3HaDV%2FJ4%2F0xtw1d86MgZvpYnS8GIrr8T5xLc0Fk2e0AthGRvIx4PHKa8sBTPH1JeHYZ25tvTSNP5qajqqvfvX6t7i0lws7ttBN1dbbdco4EFXo0D4%2FnoZuskqo5H8SQpynb0EXJv8TMRfnSTEeH%2Fpyg5xSE0ykshT%2B9b4lYt1ozFQcO%2F4ifQL6Qx3jCm9pl7jEYO18GA07C95fxSn%2FeTHNe7Si8A9HSf5oVn4Os%2BKpzAEwKr5jsFT3yFNPlW5FKQ8dmPoL8vsLpUwX7itHvDnQanQhZbeRVV61iUlhuuVPwwLAPEbQwxMfGJiKSQjrbwmDVJNObeP%2Fknc6liVqixz4aLocogs0xSgJMJiVhb0GOqUBwFEAQnWwJzwMAuc8HZLh7K7ovJxY6ExCGOu%2BjDk4sSOco2C9OSUKunvZGCzZZYeuGyO9S%2FWtUHb%2FVFQjC%2BQz32DkgIqpNF%2FpnrEmVYQpLkoTzqyZnQy9rWqhXnOw81w0V7Ksry6Vy2K1jb8KFvBidC7Ov%2BwQj3mNmOvaoG8RjpE6tUZ5E%2Bi49yMxE00O5Df40B67bufJ4KIZpDG6TH92Dnoet1IM&X-Amz-Signature=05a1c7904bf148f35c37843f14213d9cca9d13c1d6d8d3574fcc08e8d20eb207&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ZT3TJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDJyuw33QdYlptuwm3YcIRfUQ6144Vx7D6BbqHoAUdmpwIgBUK0tQXKBrNXXjFJmmzFFw%2FvFV5%2B9UtemD2F8gCjcPwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ6Y29eFDjcIvsvOqyrcA6yg2ifkCd6MCFiFcL3x4WhG9i6HVeSQknBn9k1eQfHgItnZMqFsgKmT%2BnFL3hxClC2YtEJ7ntyFIYQNMqCQuRlJh9QVbF3gGWFp2seExsx8iLS8NLNT%2FuDoZlcGguozwCY4uinJeJ4AvGkuZn%2FiZA7l5C1X3%2BOgInphDcol3ZNPjyYGACdyPOSrXyyYmMjkzt4R8PRR5SVnYEpySqaV7oC2w85NVxUug3S%2FkNSmiL68zmUWEI4LoGWpHwaDuz4wyZXSRCfQNG5o%2FNR7X8fBpsO3pA3HaDV%2FJ4%2F0xtw1d86MgZvpYnS8GIrr8T5xLc0Fk2e0AthGRvIx4PHKa8sBTPH1JeHYZ25tvTSNP5qajqqvfvX6t7i0lws7ttBN1dbbdco4EFXo0D4%2FnoZuskqo5H8SQpynb0EXJv8TMRfnSTEeH%2Fpyg5xSE0ykshT%2B9b4lYt1ozFQcO%2F4ifQL6Qx3jCm9pl7jEYO18GA07C95fxSn%2FeTHNe7Si8A9HSf5oVn4Os%2BKpzAEwKr5jsFT3yFNPlW5FKQ8dmPoL8vsLpUwX7itHvDnQanQhZbeRVV61iUlhuuVPwwLAPEbQwxMfGJiKSQjrbwmDVJNObeP%2Fknc6liVqixz4aLocogs0xSgJMJiVhb0GOqUBwFEAQnWwJzwMAuc8HZLh7K7ovJxY6ExCGOu%2BjDk4sSOco2C9OSUKunvZGCzZZYeuGyO9S%2FWtUHb%2FVFQjC%2BQz32DkgIqpNF%2FpnrEmVYQpLkoTzqyZnQy9rWqhXnOw81w0V7Ksry6Vy2K1jb8KFvBidC7Ov%2BwQj3mNmOvaoG8RjpE6tUZ5E%2Bi49yMxE00O5Df40B67bufJ4KIZpDG6TH92Dnoet1IM&X-Amz-Signature=1c7aa60f3e977b14e6668dc22626a9bfc739d78a6f7d502db187b1848b6c419d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ZT3TJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDJyuw33QdYlptuwm3YcIRfUQ6144Vx7D6BbqHoAUdmpwIgBUK0tQXKBrNXXjFJmmzFFw%2FvFV5%2B9UtemD2F8gCjcPwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ6Y29eFDjcIvsvOqyrcA6yg2ifkCd6MCFiFcL3x4WhG9i6HVeSQknBn9k1eQfHgItnZMqFsgKmT%2BnFL3hxClC2YtEJ7ntyFIYQNMqCQuRlJh9QVbF3gGWFp2seExsx8iLS8NLNT%2FuDoZlcGguozwCY4uinJeJ4AvGkuZn%2FiZA7l5C1X3%2BOgInphDcol3ZNPjyYGACdyPOSrXyyYmMjkzt4R8PRR5SVnYEpySqaV7oC2w85NVxUug3S%2FkNSmiL68zmUWEI4LoGWpHwaDuz4wyZXSRCfQNG5o%2FNR7X8fBpsO3pA3HaDV%2FJ4%2F0xtw1d86MgZvpYnS8GIrr8T5xLc0Fk2e0AthGRvIx4PHKa8sBTPH1JeHYZ25tvTSNP5qajqqvfvX6t7i0lws7ttBN1dbbdco4EFXo0D4%2FnoZuskqo5H8SQpynb0EXJv8TMRfnSTEeH%2Fpyg5xSE0ykshT%2B9b4lYt1ozFQcO%2F4ifQL6Qx3jCm9pl7jEYO18GA07C95fxSn%2FeTHNe7Si8A9HSf5oVn4Os%2BKpzAEwKr5jsFT3yFNPlW5FKQ8dmPoL8vsLpUwX7itHvDnQanQhZbeRVV61iUlhuuVPwwLAPEbQwxMfGJiKSQjrbwmDVJNObeP%2Fknc6liVqixz4aLocogs0xSgJMJiVhb0GOqUBwFEAQnWwJzwMAuc8HZLh7K7ovJxY6ExCGOu%2BjDk4sSOco2C9OSUKunvZGCzZZYeuGyO9S%2FWtUHb%2FVFQjC%2BQz32DkgIqpNF%2FpnrEmVYQpLkoTzqyZnQy9rWqhXnOw81w0V7Ksry6Vy2K1jb8KFvBidC7Ov%2BwQj3mNmOvaoG8RjpE6tUZ5E%2Bi49yMxE00O5Df40B67bufJ4KIZpDG6TH92Dnoet1IM&X-Amz-Signature=0d277520275f464a964329cbf3f713abb633ea4fc147d4aa45c3fcd921b7467b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ZT3TJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDJyuw33QdYlptuwm3YcIRfUQ6144Vx7D6BbqHoAUdmpwIgBUK0tQXKBrNXXjFJmmzFFw%2FvFV5%2B9UtemD2F8gCjcPwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ6Y29eFDjcIvsvOqyrcA6yg2ifkCd6MCFiFcL3x4WhG9i6HVeSQknBn9k1eQfHgItnZMqFsgKmT%2BnFL3hxClC2YtEJ7ntyFIYQNMqCQuRlJh9QVbF3gGWFp2seExsx8iLS8NLNT%2FuDoZlcGguozwCY4uinJeJ4AvGkuZn%2FiZA7l5C1X3%2BOgInphDcol3ZNPjyYGACdyPOSrXyyYmMjkzt4R8PRR5SVnYEpySqaV7oC2w85NVxUug3S%2FkNSmiL68zmUWEI4LoGWpHwaDuz4wyZXSRCfQNG5o%2FNR7X8fBpsO3pA3HaDV%2FJ4%2F0xtw1d86MgZvpYnS8GIrr8T5xLc0Fk2e0AthGRvIx4PHKa8sBTPH1JeHYZ25tvTSNP5qajqqvfvX6t7i0lws7ttBN1dbbdco4EFXo0D4%2FnoZuskqo5H8SQpynb0EXJv8TMRfnSTEeH%2Fpyg5xSE0ykshT%2B9b4lYt1ozFQcO%2F4ifQL6Qx3jCm9pl7jEYO18GA07C95fxSn%2FeTHNe7Si8A9HSf5oVn4Os%2BKpzAEwKr5jsFT3yFNPlW5FKQ8dmPoL8vsLpUwX7itHvDnQanQhZbeRVV61iUlhuuVPwwLAPEbQwxMfGJiKSQjrbwmDVJNObeP%2Fknc6liVqixz4aLocogs0xSgJMJiVhb0GOqUBwFEAQnWwJzwMAuc8HZLh7K7ovJxY6ExCGOu%2BjDk4sSOco2C9OSUKunvZGCzZZYeuGyO9S%2FWtUHb%2FVFQjC%2BQz32DkgIqpNF%2FpnrEmVYQpLkoTzqyZnQy9rWqhXnOw81w0V7Ksry6Vy2K1jb8KFvBidC7Ov%2BwQj3mNmOvaoG8RjpE6tUZ5E%2Bi49yMxE00O5Df40B67bufJ4KIZpDG6TH92Dnoet1IM&X-Amz-Signature=4ca3aeb779ff2e55599f1f6bc58b165b6b273f4deb015c85e7b83cfa225b7daa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ZT3TJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDJyuw33QdYlptuwm3YcIRfUQ6144Vx7D6BbqHoAUdmpwIgBUK0tQXKBrNXXjFJmmzFFw%2FvFV5%2B9UtemD2F8gCjcPwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ6Y29eFDjcIvsvOqyrcA6yg2ifkCd6MCFiFcL3x4WhG9i6HVeSQknBn9k1eQfHgItnZMqFsgKmT%2BnFL3hxClC2YtEJ7ntyFIYQNMqCQuRlJh9QVbF3gGWFp2seExsx8iLS8NLNT%2FuDoZlcGguozwCY4uinJeJ4AvGkuZn%2FiZA7l5C1X3%2BOgInphDcol3ZNPjyYGACdyPOSrXyyYmMjkzt4R8PRR5SVnYEpySqaV7oC2w85NVxUug3S%2FkNSmiL68zmUWEI4LoGWpHwaDuz4wyZXSRCfQNG5o%2FNR7X8fBpsO3pA3HaDV%2FJ4%2F0xtw1d86MgZvpYnS8GIrr8T5xLc0Fk2e0AthGRvIx4PHKa8sBTPH1JeHYZ25tvTSNP5qajqqvfvX6t7i0lws7ttBN1dbbdco4EFXo0D4%2FnoZuskqo5H8SQpynb0EXJv8TMRfnSTEeH%2Fpyg5xSE0ykshT%2B9b4lYt1ozFQcO%2F4ifQL6Qx3jCm9pl7jEYO18GA07C95fxSn%2FeTHNe7Si8A9HSf5oVn4Os%2BKpzAEwKr5jsFT3yFNPlW5FKQ8dmPoL8vsLpUwX7itHvDnQanQhZbeRVV61iUlhuuVPwwLAPEbQwxMfGJiKSQjrbwmDVJNObeP%2Fknc6liVqixz4aLocogs0xSgJMJiVhb0GOqUBwFEAQnWwJzwMAuc8HZLh7K7ovJxY6ExCGOu%2BjDk4sSOco2C9OSUKunvZGCzZZYeuGyO9S%2FWtUHb%2FVFQjC%2BQz32DkgIqpNF%2FpnrEmVYQpLkoTzqyZnQy9rWqhXnOw81w0V7Ksry6Vy2K1jb8KFvBidC7Ov%2BwQj3mNmOvaoG8RjpE6tUZ5E%2Bi49yMxE00O5Df40B67bufJ4KIZpDG6TH92Dnoet1IM&X-Amz-Signature=bd6ec69226b58ffdbef1b7a4981a44edf64680c7237ac837b5704841f4b33cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ZT3TJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDJyuw33QdYlptuwm3YcIRfUQ6144Vx7D6BbqHoAUdmpwIgBUK0tQXKBrNXXjFJmmzFFw%2FvFV5%2B9UtemD2F8gCjcPwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ6Y29eFDjcIvsvOqyrcA6yg2ifkCd6MCFiFcL3x4WhG9i6HVeSQknBn9k1eQfHgItnZMqFsgKmT%2BnFL3hxClC2YtEJ7ntyFIYQNMqCQuRlJh9QVbF3gGWFp2seExsx8iLS8NLNT%2FuDoZlcGguozwCY4uinJeJ4AvGkuZn%2FiZA7l5C1X3%2BOgInphDcol3ZNPjyYGACdyPOSrXyyYmMjkzt4R8PRR5SVnYEpySqaV7oC2w85NVxUug3S%2FkNSmiL68zmUWEI4LoGWpHwaDuz4wyZXSRCfQNG5o%2FNR7X8fBpsO3pA3HaDV%2FJ4%2F0xtw1d86MgZvpYnS8GIrr8T5xLc0Fk2e0AthGRvIx4PHKa8sBTPH1JeHYZ25tvTSNP5qajqqvfvX6t7i0lws7ttBN1dbbdco4EFXo0D4%2FnoZuskqo5H8SQpynb0EXJv8TMRfnSTEeH%2Fpyg5xSE0ykshT%2B9b4lYt1ozFQcO%2F4ifQL6Qx3jCm9pl7jEYO18GA07C95fxSn%2FeTHNe7Si8A9HSf5oVn4Os%2BKpzAEwKr5jsFT3yFNPlW5FKQ8dmPoL8vsLpUwX7itHvDnQanQhZbeRVV61iUlhuuVPwwLAPEbQwxMfGJiKSQjrbwmDVJNObeP%2Fknc6liVqixz4aLocogs0xSgJMJiVhb0GOqUBwFEAQnWwJzwMAuc8HZLh7K7ovJxY6ExCGOu%2BjDk4sSOco2C9OSUKunvZGCzZZYeuGyO9S%2FWtUHb%2FVFQjC%2BQz32DkgIqpNF%2FpnrEmVYQpLkoTzqyZnQy9rWqhXnOw81w0V7Ksry6Vy2K1jb8KFvBidC7Ov%2BwQj3mNmOvaoG8RjpE6tUZ5E%2Bi49yMxE00O5Df40B67bufJ4KIZpDG6TH92Dnoet1IM&X-Amz-Signature=a2d6ca8932516349ffb1df7974daa4953436184ad4705e6b94908ddfd32641a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RP5ZT3TJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDJyuw33QdYlptuwm3YcIRfUQ6144Vx7D6BbqHoAUdmpwIgBUK0tQXKBrNXXjFJmmzFFw%2FvFV5%2B9UtemD2F8gCjcPwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ6Y29eFDjcIvsvOqyrcA6yg2ifkCd6MCFiFcL3x4WhG9i6HVeSQknBn9k1eQfHgItnZMqFsgKmT%2BnFL3hxClC2YtEJ7ntyFIYQNMqCQuRlJh9QVbF3gGWFp2seExsx8iLS8NLNT%2FuDoZlcGguozwCY4uinJeJ4AvGkuZn%2FiZA7l5C1X3%2BOgInphDcol3ZNPjyYGACdyPOSrXyyYmMjkzt4R8PRR5SVnYEpySqaV7oC2w85NVxUug3S%2FkNSmiL68zmUWEI4LoGWpHwaDuz4wyZXSRCfQNG5o%2FNR7X8fBpsO3pA3HaDV%2FJ4%2F0xtw1d86MgZvpYnS8GIrr8T5xLc0Fk2e0AthGRvIx4PHKa8sBTPH1JeHYZ25tvTSNP5qajqqvfvX6t7i0lws7ttBN1dbbdco4EFXo0D4%2FnoZuskqo5H8SQpynb0EXJv8TMRfnSTEeH%2Fpyg5xSE0ykshT%2B9b4lYt1ozFQcO%2F4ifQL6Qx3jCm9pl7jEYO18GA07C95fxSn%2FeTHNe7Si8A9HSf5oVn4Os%2BKpzAEwKr5jsFT3yFNPlW5FKQ8dmPoL8vsLpUwX7itHvDnQanQhZbeRVV61iUlhuuVPwwLAPEbQwxMfGJiKSQjrbwmDVJNObeP%2Fknc6liVqixz4aLocogs0xSgJMJiVhb0GOqUBwFEAQnWwJzwMAuc8HZLh7K7ovJxY6ExCGOu%2BjDk4sSOco2C9OSUKunvZGCzZZYeuGyO9S%2FWtUHb%2FVFQjC%2BQz32DkgIqpNF%2FpnrEmVYQpLkoTzqyZnQy9rWqhXnOw81w0V7Ksry6Vy2K1jb8KFvBidC7Ov%2BwQj3mNmOvaoG8RjpE6tUZ5E%2Bi49yMxE00O5Df40B67bufJ4KIZpDG6TH92Dnoet1IM&X-Amz-Signature=cfd7999bacd2cad18f5e744d8f75cc15528cf95e36f79180cfca20570381a58b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
