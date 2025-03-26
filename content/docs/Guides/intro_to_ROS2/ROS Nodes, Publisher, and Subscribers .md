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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIXFVV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzzVAapk1inmWdIHkcwjXcKJVKZKnxI7tLOp%2FbOJ4tPAiBjk9pNwmQ0EYFk%2BI6G5K2umvUpuTuYmZA1O5jXZOmx9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMxJ5SfylcoBNKT1PSKtwDHgvXpzoazDt4gbynTEKHyiHCJj3FnCVkrR0%2B8N8CPGp%2BK81b5Yw3Oa9a4dVLZkoXYP0hRpc1q4rv0hWOz24lihjdjI%2BmgDYH8EadHDdPxnTtjFdjWoHqsZ8eM9sS1A1qsHgF%2Fw0yB9gBoZTQf%2F8ua2Fah1RwvZU7upZVnrZnry8z71ghZGmxQjeLQJkDHn7BMsE7AaR6%2FEDVrLdVthMf77wZbAXN0YpB7rXj%2FDJmOCtbd1gq4waekZ1xHYeFc%2BMM5M%2Ft09e%2Fx0E%2B2YoQLw3uttFB1ngMq0GBXJvKXpTzPcu3kNNoA2B60o1ccJMrjoogezFD8N3mepBkDLMXinty52eXyfQdjoVwDtVZS7hTnSrrT7oTiq%2ByFcaOMyzsrb484DS1yZkr%2BoUqO7ApJscHbNSzmI20d50Fv8keG6peB5KnbtBqkRy6OCy3vMMlHwUaLnu4gOZ8HneVxOdcCBdqcIQPQHqzR8Gqoe6SuihFFPihjHrhD55vACva3Goz82ZKcbl4F9whG7hy0K5nSoZm0LFc5nnw2OtQObpwW%2BIPIADfluBAqeTW6JvXOTWuUPRqmqiKDEpaDQG6S89hK4I4BafPpOYgftyfuOUHAj2idjj22PmREb2jEMWrhz8wgtuPvwY6pgG%2FFPfUI%2FvkED5mlLv4WusD8nJlFDfxBTI0YIserP15ah%2FD4t2em8CGYIjZYNWiZxue41pkYR8%2BY2WQG9YAYVv8hmkIFXnALDsl4Gz9ELgaeQrs8Toubtn%2F%2Bnl0%2FUo2EAHqztkJTM%2For8qTQMY5%2Bkzml%2BqEdt%2FLd4DzmRuiOnauzOqPNNTiuhlt%2B6u7OVjOR%2FZ3og%2BRePtB8crNOsU5GgoVM7y%2BWbUf&X-Amz-Signature=af925a8b490fc9b2fe4550a6d6c7601bb292e389a0b616aedc095a0a0359a8f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIXFVV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzzVAapk1inmWdIHkcwjXcKJVKZKnxI7tLOp%2FbOJ4tPAiBjk9pNwmQ0EYFk%2BI6G5K2umvUpuTuYmZA1O5jXZOmx9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMxJ5SfylcoBNKT1PSKtwDHgvXpzoazDt4gbynTEKHyiHCJj3FnCVkrR0%2B8N8CPGp%2BK81b5Yw3Oa9a4dVLZkoXYP0hRpc1q4rv0hWOz24lihjdjI%2BmgDYH8EadHDdPxnTtjFdjWoHqsZ8eM9sS1A1qsHgF%2Fw0yB9gBoZTQf%2F8ua2Fah1RwvZU7upZVnrZnry8z71ghZGmxQjeLQJkDHn7BMsE7AaR6%2FEDVrLdVthMf77wZbAXN0YpB7rXj%2FDJmOCtbd1gq4waekZ1xHYeFc%2BMM5M%2Ft09e%2Fx0E%2B2YoQLw3uttFB1ngMq0GBXJvKXpTzPcu3kNNoA2B60o1ccJMrjoogezFD8N3mepBkDLMXinty52eXyfQdjoVwDtVZS7hTnSrrT7oTiq%2ByFcaOMyzsrb484DS1yZkr%2BoUqO7ApJscHbNSzmI20d50Fv8keG6peB5KnbtBqkRy6OCy3vMMlHwUaLnu4gOZ8HneVxOdcCBdqcIQPQHqzR8Gqoe6SuihFFPihjHrhD55vACva3Goz82ZKcbl4F9whG7hy0K5nSoZm0LFc5nnw2OtQObpwW%2BIPIADfluBAqeTW6JvXOTWuUPRqmqiKDEpaDQG6S89hK4I4BafPpOYgftyfuOUHAj2idjj22PmREb2jEMWrhz8wgtuPvwY6pgG%2FFPfUI%2FvkED5mlLv4WusD8nJlFDfxBTI0YIserP15ah%2FD4t2em8CGYIjZYNWiZxue41pkYR8%2BY2WQG9YAYVv8hmkIFXnALDsl4Gz9ELgaeQrs8Toubtn%2F%2Bnl0%2FUo2EAHqztkJTM%2For8qTQMY5%2Bkzml%2BqEdt%2FLd4DzmRuiOnauzOqPNNTiuhlt%2B6u7OVjOR%2FZ3og%2BRePtB8crNOsU5GgoVM7y%2BWbUf&X-Amz-Signature=69e11f751fa0e54bb680b3d16d9296b55397e53c4fc2b361f73a78b521cdb3c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIXFVV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzzVAapk1inmWdIHkcwjXcKJVKZKnxI7tLOp%2FbOJ4tPAiBjk9pNwmQ0EYFk%2BI6G5K2umvUpuTuYmZA1O5jXZOmx9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMxJ5SfylcoBNKT1PSKtwDHgvXpzoazDt4gbynTEKHyiHCJj3FnCVkrR0%2B8N8CPGp%2BK81b5Yw3Oa9a4dVLZkoXYP0hRpc1q4rv0hWOz24lihjdjI%2BmgDYH8EadHDdPxnTtjFdjWoHqsZ8eM9sS1A1qsHgF%2Fw0yB9gBoZTQf%2F8ua2Fah1RwvZU7upZVnrZnry8z71ghZGmxQjeLQJkDHn7BMsE7AaR6%2FEDVrLdVthMf77wZbAXN0YpB7rXj%2FDJmOCtbd1gq4waekZ1xHYeFc%2BMM5M%2Ft09e%2Fx0E%2B2YoQLw3uttFB1ngMq0GBXJvKXpTzPcu3kNNoA2B60o1ccJMrjoogezFD8N3mepBkDLMXinty52eXyfQdjoVwDtVZS7hTnSrrT7oTiq%2ByFcaOMyzsrb484DS1yZkr%2BoUqO7ApJscHbNSzmI20d50Fv8keG6peB5KnbtBqkRy6OCy3vMMlHwUaLnu4gOZ8HneVxOdcCBdqcIQPQHqzR8Gqoe6SuihFFPihjHrhD55vACva3Goz82ZKcbl4F9whG7hy0K5nSoZm0LFc5nnw2OtQObpwW%2BIPIADfluBAqeTW6JvXOTWuUPRqmqiKDEpaDQG6S89hK4I4BafPpOYgftyfuOUHAj2idjj22PmREb2jEMWrhz8wgtuPvwY6pgG%2FFPfUI%2FvkED5mlLv4WusD8nJlFDfxBTI0YIserP15ah%2FD4t2em8CGYIjZYNWiZxue41pkYR8%2BY2WQG9YAYVv8hmkIFXnALDsl4Gz9ELgaeQrs8Toubtn%2F%2Bnl0%2FUo2EAHqztkJTM%2For8qTQMY5%2Bkzml%2BqEdt%2FLd4DzmRuiOnauzOqPNNTiuhlt%2B6u7OVjOR%2FZ3og%2BRePtB8crNOsU5GgoVM7y%2BWbUf&X-Amz-Signature=7fe712049e9d66bdaf5f89a19453d81c39a6e0aa3e5500d9b13618d9e5e9d30d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIXFVV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzzVAapk1inmWdIHkcwjXcKJVKZKnxI7tLOp%2FbOJ4tPAiBjk9pNwmQ0EYFk%2BI6G5K2umvUpuTuYmZA1O5jXZOmx9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMxJ5SfylcoBNKT1PSKtwDHgvXpzoazDt4gbynTEKHyiHCJj3FnCVkrR0%2B8N8CPGp%2BK81b5Yw3Oa9a4dVLZkoXYP0hRpc1q4rv0hWOz24lihjdjI%2BmgDYH8EadHDdPxnTtjFdjWoHqsZ8eM9sS1A1qsHgF%2Fw0yB9gBoZTQf%2F8ua2Fah1RwvZU7upZVnrZnry8z71ghZGmxQjeLQJkDHn7BMsE7AaR6%2FEDVrLdVthMf77wZbAXN0YpB7rXj%2FDJmOCtbd1gq4waekZ1xHYeFc%2BMM5M%2Ft09e%2Fx0E%2B2YoQLw3uttFB1ngMq0GBXJvKXpTzPcu3kNNoA2B60o1ccJMrjoogezFD8N3mepBkDLMXinty52eXyfQdjoVwDtVZS7hTnSrrT7oTiq%2ByFcaOMyzsrb484DS1yZkr%2BoUqO7ApJscHbNSzmI20d50Fv8keG6peB5KnbtBqkRy6OCy3vMMlHwUaLnu4gOZ8HneVxOdcCBdqcIQPQHqzR8Gqoe6SuihFFPihjHrhD55vACva3Goz82ZKcbl4F9whG7hy0K5nSoZm0LFc5nnw2OtQObpwW%2BIPIADfluBAqeTW6JvXOTWuUPRqmqiKDEpaDQG6S89hK4I4BafPpOYgftyfuOUHAj2idjj22PmREb2jEMWrhz8wgtuPvwY6pgG%2FFPfUI%2FvkED5mlLv4WusD8nJlFDfxBTI0YIserP15ah%2FD4t2em8CGYIjZYNWiZxue41pkYR8%2BY2WQG9YAYVv8hmkIFXnALDsl4Gz9ELgaeQrs8Toubtn%2F%2Bnl0%2FUo2EAHqztkJTM%2For8qTQMY5%2Bkzml%2BqEdt%2FLd4DzmRuiOnauzOqPNNTiuhlt%2B6u7OVjOR%2FZ3og%2BRePtB8crNOsU5GgoVM7y%2BWbUf&X-Amz-Signature=d27c370460fb0ded3c60e15507993829268dbdc47833bd7425b016c1bfcb2c83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIXFVV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzzVAapk1inmWdIHkcwjXcKJVKZKnxI7tLOp%2FbOJ4tPAiBjk9pNwmQ0EYFk%2BI6G5K2umvUpuTuYmZA1O5jXZOmx9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMxJ5SfylcoBNKT1PSKtwDHgvXpzoazDt4gbynTEKHyiHCJj3FnCVkrR0%2B8N8CPGp%2BK81b5Yw3Oa9a4dVLZkoXYP0hRpc1q4rv0hWOz24lihjdjI%2BmgDYH8EadHDdPxnTtjFdjWoHqsZ8eM9sS1A1qsHgF%2Fw0yB9gBoZTQf%2F8ua2Fah1RwvZU7upZVnrZnry8z71ghZGmxQjeLQJkDHn7BMsE7AaR6%2FEDVrLdVthMf77wZbAXN0YpB7rXj%2FDJmOCtbd1gq4waekZ1xHYeFc%2BMM5M%2Ft09e%2Fx0E%2B2YoQLw3uttFB1ngMq0GBXJvKXpTzPcu3kNNoA2B60o1ccJMrjoogezFD8N3mepBkDLMXinty52eXyfQdjoVwDtVZS7hTnSrrT7oTiq%2ByFcaOMyzsrb484DS1yZkr%2BoUqO7ApJscHbNSzmI20d50Fv8keG6peB5KnbtBqkRy6OCy3vMMlHwUaLnu4gOZ8HneVxOdcCBdqcIQPQHqzR8Gqoe6SuihFFPihjHrhD55vACva3Goz82ZKcbl4F9whG7hy0K5nSoZm0LFc5nnw2OtQObpwW%2BIPIADfluBAqeTW6JvXOTWuUPRqmqiKDEpaDQG6S89hK4I4BafPpOYgftyfuOUHAj2idjj22PmREb2jEMWrhz8wgtuPvwY6pgG%2FFPfUI%2FvkED5mlLv4WusD8nJlFDfxBTI0YIserP15ah%2FD4t2em8CGYIjZYNWiZxue41pkYR8%2BY2WQG9YAYVv8hmkIFXnALDsl4Gz9ELgaeQrs8Toubtn%2F%2Bnl0%2FUo2EAHqztkJTM%2For8qTQMY5%2Bkzml%2BqEdt%2FLd4DzmRuiOnauzOqPNNTiuhlt%2B6u7OVjOR%2FZ3og%2BRePtB8crNOsU5GgoVM7y%2BWbUf&X-Amz-Signature=0b0ccbe791f6ed0d8f432bbeb1937af58d43819e07bef4927fe68d6e9f3632df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIXFVV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzzVAapk1inmWdIHkcwjXcKJVKZKnxI7tLOp%2FbOJ4tPAiBjk9pNwmQ0EYFk%2BI6G5K2umvUpuTuYmZA1O5jXZOmx9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMxJ5SfylcoBNKT1PSKtwDHgvXpzoazDt4gbynTEKHyiHCJj3FnCVkrR0%2B8N8CPGp%2BK81b5Yw3Oa9a4dVLZkoXYP0hRpc1q4rv0hWOz24lihjdjI%2BmgDYH8EadHDdPxnTtjFdjWoHqsZ8eM9sS1A1qsHgF%2Fw0yB9gBoZTQf%2F8ua2Fah1RwvZU7upZVnrZnry8z71ghZGmxQjeLQJkDHn7BMsE7AaR6%2FEDVrLdVthMf77wZbAXN0YpB7rXj%2FDJmOCtbd1gq4waekZ1xHYeFc%2BMM5M%2Ft09e%2Fx0E%2B2YoQLw3uttFB1ngMq0GBXJvKXpTzPcu3kNNoA2B60o1ccJMrjoogezFD8N3mepBkDLMXinty52eXyfQdjoVwDtVZS7hTnSrrT7oTiq%2ByFcaOMyzsrb484DS1yZkr%2BoUqO7ApJscHbNSzmI20d50Fv8keG6peB5KnbtBqkRy6OCy3vMMlHwUaLnu4gOZ8HneVxOdcCBdqcIQPQHqzR8Gqoe6SuihFFPihjHrhD55vACva3Goz82ZKcbl4F9whG7hy0K5nSoZm0LFc5nnw2OtQObpwW%2BIPIADfluBAqeTW6JvXOTWuUPRqmqiKDEpaDQG6S89hK4I4BafPpOYgftyfuOUHAj2idjj22PmREb2jEMWrhz8wgtuPvwY6pgG%2FFPfUI%2FvkED5mlLv4WusD8nJlFDfxBTI0YIserP15ah%2FD4t2em8CGYIjZYNWiZxue41pkYR8%2BY2WQG9YAYVv8hmkIFXnALDsl4Gz9ELgaeQrs8Toubtn%2F%2Bnl0%2FUo2EAHqztkJTM%2For8qTQMY5%2Bkzml%2BqEdt%2FLd4DzmRuiOnauzOqPNNTiuhlt%2B6u7OVjOR%2FZ3og%2BRePtB8crNOsU5GgoVM7y%2BWbUf&X-Amz-Signature=493e709844ec9d7e01210ce36e16a65377fda58873fb01c61f06ed2ca8794849&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIXFVV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzzVAapk1inmWdIHkcwjXcKJVKZKnxI7tLOp%2FbOJ4tPAiBjk9pNwmQ0EYFk%2BI6G5K2umvUpuTuYmZA1O5jXZOmx9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMxJ5SfylcoBNKT1PSKtwDHgvXpzoazDt4gbynTEKHyiHCJj3FnCVkrR0%2B8N8CPGp%2BK81b5Yw3Oa9a4dVLZkoXYP0hRpc1q4rv0hWOz24lihjdjI%2BmgDYH8EadHDdPxnTtjFdjWoHqsZ8eM9sS1A1qsHgF%2Fw0yB9gBoZTQf%2F8ua2Fah1RwvZU7upZVnrZnry8z71ghZGmxQjeLQJkDHn7BMsE7AaR6%2FEDVrLdVthMf77wZbAXN0YpB7rXj%2FDJmOCtbd1gq4waekZ1xHYeFc%2BMM5M%2Ft09e%2Fx0E%2B2YoQLw3uttFB1ngMq0GBXJvKXpTzPcu3kNNoA2B60o1ccJMrjoogezFD8N3mepBkDLMXinty52eXyfQdjoVwDtVZS7hTnSrrT7oTiq%2ByFcaOMyzsrb484DS1yZkr%2BoUqO7ApJscHbNSzmI20d50Fv8keG6peB5KnbtBqkRy6OCy3vMMlHwUaLnu4gOZ8HneVxOdcCBdqcIQPQHqzR8Gqoe6SuihFFPihjHrhD55vACva3Goz82ZKcbl4F9whG7hy0K5nSoZm0LFc5nnw2OtQObpwW%2BIPIADfluBAqeTW6JvXOTWuUPRqmqiKDEpaDQG6S89hK4I4BafPpOYgftyfuOUHAj2idjj22PmREb2jEMWrhz8wgtuPvwY6pgG%2FFPfUI%2FvkED5mlLv4WusD8nJlFDfxBTI0YIserP15ah%2FD4t2em8CGYIjZYNWiZxue41pkYR8%2BY2WQG9YAYVv8hmkIFXnALDsl4Gz9ELgaeQrs8Toubtn%2F%2Bnl0%2FUo2EAHqztkJTM%2For8qTQMY5%2Bkzml%2BqEdt%2FLd4DzmRuiOnauzOqPNNTiuhlt%2B6u7OVjOR%2FZ3og%2BRePtB8crNOsU5GgoVM7y%2BWbUf&X-Amz-Signature=84b86548f298471e783e7bec2e0cdbd931afb26846e9bf16b1ea1fe9e92bd4d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIXFVV%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzzVAapk1inmWdIHkcwjXcKJVKZKnxI7tLOp%2FbOJ4tPAiBjk9pNwmQ0EYFk%2BI6G5K2umvUpuTuYmZA1O5jXZOmx9yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMxJ5SfylcoBNKT1PSKtwDHgvXpzoazDt4gbynTEKHyiHCJj3FnCVkrR0%2B8N8CPGp%2BK81b5Yw3Oa9a4dVLZkoXYP0hRpc1q4rv0hWOz24lihjdjI%2BmgDYH8EadHDdPxnTtjFdjWoHqsZ8eM9sS1A1qsHgF%2Fw0yB9gBoZTQf%2F8ua2Fah1RwvZU7upZVnrZnry8z71ghZGmxQjeLQJkDHn7BMsE7AaR6%2FEDVrLdVthMf77wZbAXN0YpB7rXj%2FDJmOCtbd1gq4waekZ1xHYeFc%2BMM5M%2Ft09e%2Fx0E%2B2YoQLw3uttFB1ngMq0GBXJvKXpTzPcu3kNNoA2B60o1ccJMrjoogezFD8N3mepBkDLMXinty52eXyfQdjoVwDtVZS7hTnSrrT7oTiq%2ByFcaOMyzsrb484DS1yZkr%2BoUqO7ApJscHbNSzmI20d50Fv8keG6peB5KnbtBqkRy6OCy3vMMlHwUaLnu4gOZ8HneVxOdcCBdqcIQPQHqzR8Gqoe6SuihFFPihjHrhD55vACva3Goz82ZKcbl4F9whG7hy0K5nSoZm0LFc5nnw2OtQObpwW%2BIPIADfluBAqeTW6JvXOTWuUPRqmqiKDEpaDQG6S89hK4I4BafPpOYgftyfuOUHAj2idjj22PmREb2jEMWrhz8wgtuPvwY6pgG%2FFPfUI%2FvkED5mlLv4WusD8nJlFDfxBTI0YIserP15ah%2FD4t2em8CGYIjZYNWiZxue41pkYR8%2BY2WQG9YAYVv8hmkIFXnALDsl4Gz9ELgaeQrs8Toubtn%2F%2Bnl0%2FUo2EAHqztkJTM%2For8qTQMY5%2Bkzml%2BqEdt%2FLd4DzmRuiOnauzOqPNNTiuhlt%2B6u7OVjOR%2FZ3og%2BRePtB8crNOsU5GgoVM7y%2BWbUf&X-Amz-Signature=c697136a47f6bdf84953bad4f859800f2ec49b561108091c093990bd43b8d172&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
