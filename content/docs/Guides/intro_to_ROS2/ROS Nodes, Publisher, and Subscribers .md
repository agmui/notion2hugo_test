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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LFV66X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF01KHDpmzUwiRkXc6NjRCgdcqWCHw7HA4IQrl%2BNQwb3AiA48msbtapjgOluX9eVX3zo1P%2Bbb7hPOjbek3dRXvHy7yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMsRjeBI7isAdhFCmfKtwD0fDplo5gDlP9Z9kExATw5QT2z9AhGzkudNKmeLVSRHdFxvxSjCgJQVCGITNlNOqEpN3AX%2BuWottHY%2FLoBsmw2f53DLondww7PO%2BZHE8YY7bxnH1sl78SFk2WZ6upc2QODIKvE72aSR9nesPpQtbxtmpCDj%2BjZIa4IeiXHrD%2FEBEoWHAH6QNrb6f05S1sR2O8JkdXt5t52%2F8OJoTDSOJHcPkfHp9dLwlEgj7kSfi%2Fk%2FIoX%2B5AIkPukhW%2BmMITWJc4ZwCo0PRRoHQUu0NRQxzffwCpU2sk9qwQ6KPR98GwHkHoNEAHGh6J9QuH040bPO5ICy%2BSLHzB5U2DiUnqf7MWaZDxAPevsTqo%2B9IHH35wji6doTDLf7Fqso2EPJRjhGlCf4lJNfodu2XIVQTHXvRQx%2B5HXTfQjIWTLOV2d%2F2150L8gdyEfN0AvafHBUaWT6Rx5txdrLa8VsHW5MJ%2BexChfx3t%2B%2BjioAvA12Rn2aj42AVodxY%2FaF9tL5oHkdyYuTV19%2BWLgE9JtBICKu1OWL%2Bm7J7Ia45Li65F68s3j6%2BZKu6EPd21BFq712NCcU%2B84XCAk2G0i%2B4iCjpDdOXduoagaZxVTS1kJlQXl8By7kpnrlhJcUQ1fw9sZb%2B%2FXmIwh5bPwwY6pgE6actaKcxHL71xrDKt2WMr207rt4VcFnVjCvQzn1nSHu9xt3%2FkkcT2h7bDjJgzKrCPQuY6xsFXDEwVzIJ9gQtH3boXwGXixFHaEWSd0U8gqjCjz8CAGqazzZa%2B6M2VLEeBKD%2FalOeRqWzXauYzJiIMeKwPGpZjIWpAQqROygGAck4xCS0UA96eQXFCT0Cqj3c3ovN60PWbjNQo%2FYFER90LGmf2BHAu&X-Amz-Signature=a63e1c4f25cbb66296ad38e3cc53a595bdacdc85345171e85cf9cd0c45e3643a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LFV66X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF01KHDpmzUwiRkXc6NjRCgdcqWCHw7HA4IQrl%2BNQwb3AiA48msbtapjgOluX9eVX3zo1P%2Bbb7hPOjbek3dRXvHy7yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMsRjeBI7isAdhFCmfKtwD0fDplo5gDlP9Z9kExATw5QT2z9AhGzkudNKmeLVSRHdFxvxSjCgJQVCGITNlNOqEpN3AX%2BuWottHY%2FLoBsmw2f53DLondww7PO%2BZHE8YY7bxnH1sl78SFk2WZ6upc2QODIKvE72aSR9nesPpQtbxtmpCDj%2BjZIa4IeiXHrD%2FEBEoWHAH6QNrb6f05S1sR2O8JkdXt5t52%2F8OJoTDSOJHcPkfHp9dLwlEgj7kSfi%2Fk%2FIoX%2B5AIkPukhW%2BmMITWJc4ZwCo0PRRoHQUu0NRQxzffwCpU2sk9qwQ6KPR98GwHkHoNEAHGh6J9QuH040bPO5ICy%2BSLHzB5U2DiUnqf7MWaZDxAPevsTqo%2B9IHH35wji6doTDLf7Fqso2EPJRjhGlCf4lJNfodu2XIVQTHXvRQx%2B5HXTfQjIWTLOV2d%2F2150L8gdyEfN0AvafHBUaWT6Rx5txdrLa8VsHW5MJ%2BexChfx3t%2B%2BjioAvA12Rn2aj42AVodxY%2FaF9tL5oHkdyYuTV19%2BWLgE9JtBICKu1OWL%2Bm7J7Ia45Li65F68s3j6%2BZKu6EPd21BFq712NCcU%2B84XCAk2G0i%2B4iCjpDdOXduoagaZxVTS1kJlQXl8By7kpnrlhJcUQ1fw9sZb%2B%2FXmIwh5bPwwY6pgE6actaKcxHL71xrDKt2WMr207rt4VcFnVjCvQzn1nSHu9xt3%2FkkcT2h7bDjJgzKrCPQuY6xsFXDEwVzIJ9gQtH3boXwGXixFHaEWSd0U8gqjCjz8CAGqazzZa%2B6M2VLEeBKD%2FalOeRqWzXauYzJiIMeKwPGpZjIWpAQqROygGAck4xCS0UA96eQXFCT0Cqj3c3ovN60PWbjNQo%2FYFER90LGmf2BHAu&X-Amz-Signature=4371a5f467e057b002023180fad347663282a1b6f031e9fa5d41c6ecd4cdf1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LFV66X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF01KHDpmzUwiRkXc6NjRCgdcqWCHw7HA4IQrl%2BNQwb3AiA48msbtapjgOluX9eVX3zo1P%2Bbb7hPOjbek3dRXvHy7yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMsRjeBI7isAdhFCmfKtwD0fDplo5gDlP9Z9kExATw5QT2z9AhGzkudNKmeLVSRHdFxvxSjCgJQVCGITNlNOqEpN3AX%2BuWottHY%2FLoBsmw2f53DLondww7PO%2BZHE8YY7bxnH1sl78SFk2WZ6upc2QODIKvE72aSR9nesPpQtbxtmpCDj%2BjZIa4IeiXHrD%2FEBEoWHAH6QNrb6f05S1sR2O8JkdXt5t52%2F8OJoTDSOJHcPkfHp9dLwlEgj7kSfi%2Fk%2FIoX%2B5AIkPukhW%2BmMITWJc4ZwCo0PRRoHQUu0NRQxzffwCpU2sk9qwQ6KPR98GwHkHoNEAHGh6J9QuH040bPO5ICy%2BSLHzB5U2DiUnqf7MWaZDxAPevsTqo%2B9IHH35wji6doTDLf7Fqso2EPJRjhGlCf4lJNfodu2XIVQTHXvRQx%2B5HXTfQjIWTLOV2d%2F2150L8gdyEfN0AvafHBUaWT6Rx5txdrLa8VsHW5MJ%2BexChfx3t%2B%2BjioAvA12Rn2aj42AVodxY%2FaF9tL5oHkdyYuTV19%2BWLgE9JtBICKu1OWL%2Bm7J7Ia45Li65F68s3j6%2BZKu6EPd21BFq712NCcU%2B84XCAk2G0i%2B4iCjpDdOXduoagaZxVTS1kJlQXl8By7kpnrlhJcUQ1fw9sZb%2B%2FXmIwh5bPwwY6pgE6actaKcxHL71xrDKt2WMr207rt4VcFnVjCvQzn1nSHu9xt3%2FkkcT2h7bDjJgzKrCPQuY6xsFXDEwVzIJ9gQtH3boXwGXixFHaEWSd0U8gqjCjz8CAGqazzZa%2B6M2VLEeBKD%2FalOeRqWzXauYzJiIMeKwPGpZjIWpAQqROygGAck4xCS0UA96eQXFCT0Cqj3c3ovN60PWbjNQo%2FYFER90LGmf2BHAu&X-Amz-Signature=5f75e4c56cdffc1c55c91a21dbd83b18bcd733d161b944b82a7301b1c504f020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LFV66X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF01KHDpmzUwiRkXc6NjRCgdcqWCHw7HA4IQrl%2BNQwb3AiA48msbtapjgOluX9eVX3zo1P%2Bbb7hPOjbek3dRXvHy7yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMsRjeBI7isAdhFCmfKtwD0fDplo5gDlP9Z9kExATw5QT2z9AhGzkudNKmeLVSRHdFxvxSjCgJQVCGITNlNOqEpN3AX%2BuWottHY%2FLoBsmw2f53DLondww7PO%2BZHE8YY7bxnH1sl78SFk2WZ6upc2QODIKvE72aSR9nesPpQtbxtmpCDj%2BjZIa4IeiXHrD%2FEBEoWHAH6QNrb6f05S1sR2O8JkdXt5t52%2F8OJoTDSOJHcPkfHp9dLwlEgj7kSfi%2Fk%2FIoX%2B5AIkPukhW%2BmMITWJc4ZwCo0PRRoHQUu0NRQxzffwCpU2sk9qwQ6KPR98GwHkHoNEAHGh6J9QuH040bPO5ICy%2BSLHzB5U2DiUnqf7MWaZDxAPevsTqo%2B9IHH35wji6doTDLf7Fqso2EPJRjhGlCf4lJNfodu2XIVQTHXvRQx%2B5HXTfQjIWTLOV2d%2F2150L8gdyEfN0AvafHBUaWT6Rx5txdrLa8VsHW5MJ%2BexChfx3t%2B%2BjioAvA12Rn2aj42AVodxY%2FaF9tL5oHkdyYuTV19%2BWLgE9JtBICKu1OWL%2Bm7J7Ia45Li65F68s3j6%2BZKu6EPd21BFq712NCcU%2B84XCAk2G0i%2B4iCjpDdOXduoagaZxVTS1kJlQXl8By7kpnrlhJcUQ1fw9sZb%2B%2FXmIwh5bPwwY6pgE6actaKcxHL71xrDKt2WMr207rt4VcFnVjCvQzn1nSHu9xt3%2FkkcT2h7bDjJgzKrCPQuY6xsFXDEwVzIJ9gQtH3boXwGXixFHaEWSd0U8gqjCjz8CAGqazzZa%2B6M2VLEeBKD%2FalOeRqWzXauYzJiIMeKwPGpZjIWpAQqROygGAck4xCS0UA96eQXFCT0Cqj3c3ovN60PWbjNQo%2FYFER90LGmf2BHAu&X-Amz-Signature=07173757d500ba7bef7cbaabc12ea02bcf7d537aabaa1d030cbe8d92719d85d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LFV66X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF01KHDpmzUwiRkXc6NjRCgdcqWCHw7HA4IQrl%2BNQwb3AiA48msbtapjgOluX9eVX3zo1P%2Bbb7hPOjbek3dRXvHy7yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMsRjeBI7isAdhFCmfKtwD0fDplo5gDlP9Z9kExATw5QT2z9AhGzkudNKmeLVSRHdFxvxSjCgJQVCGITNlNOqEpN3AX%2BuWottHY%2FLoBsmw2f53DLondww7PO%2BZHE8YY7bxnH1sl78SFk2WZ6upc2QODIKvE72aSR9nesPpQtbxtmpCDj%2BjZIa4IeiXHrD%2FEBEoWHAH6QNrb6f05S1sR2O8JkdXt5t52%2F8OJoTDSOJHcPkfHp9dLwlEgj7kSfi%2Fk%2FIoX%2B5AIkPukhW%2BmMITWJc4ZwCo0PRRoHQUu0NRQxzffwCpU2sk9qwQ6KPR98GwHkHoNEAHGh6J9QuH040bPO5ICy%2BSLHzB5U2DiUnqf7MWaZDxAPevsTqo%2B9IHH35wji6doTDLf7Fqso2EPJRjhGlCf4lJNfodu2XIVQTHXvRQx%2B5HXTfQjIWTLOV2d%2F2150L8gdyEfN0AvafHBUaWT6Rx5txdrLa8VsHW5MJ%2BexChfx3t%2B%2BjioAvA12Rn2aj42AVodxY%2FaF9tL5oHkdyYuTV19%2BWLgE9JtBICKu1OWL%2Bm7J7Ia45Li65F68s3j6%2BZKu6EPd21BFq712NCcU%2B84XCAk2G0i%2B4iCjpDdOXduoagaZxVTS1kJlQXl8By7kpnrlhJcUQ1fw9sZb%2B%2FXmIwh5bPwwY6pgE6actaKcxHL71xrDKt2WMr207rt4VcFnVjCvQzn1nSHu9xt3%2FkkcT2h7bDjJgzKrCPQuY6xsFXDEwVzIJ9gQtH3boXwGXixFHaEWSd0U8gqjCjz8CAGqazzZa%2B6M2VLEeBKD%2FalOeRqWzXauYzJiIMeKwPGpZjIWpAQqROygGAck4xCS0UA96eQXFCT0Cqj3c3ovN60PWbjNQo%2FYFER90LGmf2BHAu&X-Amz-Signature=fed487a824ce86ae9c0e86625c1067e8c95b7f16aa98ac6bd88a562445aa94cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LFV66X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF01KHDpmzUwiRkXc6NjRCgdcqWCHw7HA4IQrl%2BNQwb3AiA48msbtapjgOluX9eVX3zo1P%2Bbb7hPOjbek3dRXvHy7yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMsRjeBI7isAdhFCmfKtwD0fDplo5gDlP9Z9kExATw5QT2z9AhGzkudNKmeLVSRHdFxvxSjCgJQVCGITNlNOqEpN3AX%2BuWottHY%2FLoBsmw2f53DLondww7PO%2BZHE8YY7bxnH1sl78SFk2WZ6upc2QODIKvE72aSR9nesPpQtbxtmpCDj%2BjZIa4IeiXHrD%2FEBEoWHAH6QNrb6f05S1sR2O8JkdXt5t52%2F8OJoTDSOJHcPkfHp9dLwlEgj7kSfi%2Fk%2FIoX%2B5AIkPukhW%2BmMITWJc4ZwCo0PRRoHQUu0NRQxzffwCpU2sk9qwQ6KPR98GwHkHoNEAHGh6J9QuH040bPO5ICy%2BSLHzB5U2DiUnqf7MWaZDxAPevsTqo%2B9IHH35wji6doTDLf7Fqso2EPJRjhGlCf4lJNfodu2XIVQTHXvRQx%2B5HXTfQjIWTLOV2d%2F2150L8gdyEfN0AvafHBUaWT6Rx5txdrLa8VsHW5MJ%2BexChfx3t%2B%2BjioAvA12Rn2aj42AVodxY%2FaF9tL5oHkdyYuTV19%2BWLgE9JtBICKu1OWL%2Bm7J7Ia45Li65F68s3j6%2BZKu6EPd21BFq712NCcU%2B84XCAk2G0i%2B4iCjpDdOXduoagaZxVTS1kJlQXl8By7kpnrlhJcUQ1fw9sZb%2B%2FXmIwh5bPwwY6pgE6actaKcxHL71xrDKt2WMr207rt4VcFnVjCvQzn1nSHu9xt3%2FkkcT2h7bDjJgzKrCPQuY6xsFXDEwVzIJ9gQtH3boXwGXixFHaEWSd0U8gqjCjz8CAGqazzZa%2B6M2VLEeBKD%2FalOeRqWzXauYzJiIMeKwPGpZjIWpAQqROygGAck4xCS0UA96eQXFCT0Cqj3c3ovN60PWbjNQo%2FYFER90LGmf2BHAu&X-Amz-Signature=b0bbe58552b7b446b36e934e3942bd4fe782a4168933e4ecc759c59d93bb6e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LFV66X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF01KHDpmzUwiRkXc6NjRCgdcqWCHw7HA4IQrl%2BNQwb3AiA48msbtapjgOluX9eVX3zo1P%2Bbb7hPOjbek3dRXvHy7yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMsRjeBI7isAdhFCmfKtwD0fDplo5gDlP9Z9kExATw5QT2z9AhGzkudNKmeLVSRHdFxvxSjCgJQVCGITNlNOqEpN3AX%2BuWottHY%2FLoBsmw2f53DLondww7PO%2BZHE8YY7bxnH1sl78SFk2WZ6upc2QODIKvE72aSR9nesPpQtbxtmpCDj%2BjZIa4IeiXHrD%2FEBEoWHAH6QNrb6f05S1sR2O8JkdXt5t52%2F8OJoTDSOJHcPkfHp9dLwlEgj7kSfi%2Fk%2FIoX%2B5AIkPukhW%2BmMITWJc4ZwCo0PRRoHQUu0NRQxzffwCpU2sk9qwQ6KPR98GwHkHoNEAHGh6J9QuH040bPO5ICy%2BSLHzB5U2DiUnqf7MWaZDxAPevsTqo%2B9IHH35wji6doTDLf7Fqso2EPJRjhGlCf4lJNfodu2XIVQTHXvRQx%2B5HXTfQjIWTLOV2d%2F2150L8gdyEfN0AvafHBUaWT6Rx5txdrLa8VsHW5MJ%2BexChfx3t%2B%2BjioAvA12Rn2aj42AVodxY%2FaF9tL5oHkdyYuTV19%2BWLgE9JtBICKu1OWL%2Bm7J7Ia45Li65F68s3j6%2BZKu6EPd21BFq712NCcU%2B84XCAk2G0i%2B4iCjpDdOXduoagaZxVTS1kJlQXl8By7kpnrlhJcUQ1fw9sZb%2B%2FXmIwh5bPwwY6pgE6actaKcxHL71xrDKt2WMr207rt4VcFnVjCvQzn1nSHu9xt3%2FkkcT2h7bDjJgzKrCPQuY6xsFXDEwVzIJ9gQtH3boXwGXixFHaEWSd0U8gqjCjz8CAGqazzZa%2B6M2VLEeBKD%2FalOeRqWzXauYzJiIMeKwPGpZjIWpAQqROygGAck4xCS0UA96eQXFCT0Cqj3c3ovN60PWbjNQo%2FYFER90LGmf2BHAu&X-Amz-Signature=1fe72f48a2cf489b3c08e2f2b27072ac3faa11f793c1372bdb22355f1449d4d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7LFV66X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF01KHDpmzUwiRkXc6NjRCgdcqWCHw7HA4IQrl%2BNQwb3AiA48msbtapjgOluX9eVX3zo1P%2Bbb7hPOjbek3dRXvHy7yr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMsRjeBI7isAdhFCmfKtwD0fDplo5gDlP9Z9kExATw5QT2z9AhGzkudNKmeLVSRHdFxvxSjCgJQVCGITNlNOqEpN3AX%2BuWottHY%2FLoBsmw2f53DLondww7PO%2BZHE8YY7bxnH1sl78SFk2WZ6upc2QODIKvE72aSR9nesPpQtbxtmpCDj%2BjZIa4IeiXHrD%2FEBEoWHAH6QNrb6f05S1sR2O8JkdXt5t52%2F8OJoTDSOJHcPkfHp9dLwlEgj7kSfi%2Fk%2FIoX%2B5AIkPukhW%2BmMITWJc4ZwCo0PRRoHQUu0NRQxzffwCpU2sk9qwQ6KPR98GwHkHoNEAHGh6J9QuH040bPO5ICy%2BSLHzB5U2DiUnqf7MWaZDxAPevsTqo%2B9IHH35wji6doTDLf7Fqso2EPJRjhGlCf4lJNfodu2XIVQTHXvRQx%2B5HXTfQjIWTLOV2d%2F2150L8gdyEfN0AvafHBUaWT6Rx5txdrLa8VsHW5MJ%2BexChfx3t%2B%2BjioAvA12Rn2aj42AVodxY%2FaF9tL5oHkdyYuTV19%2BWLgE9JtBICKu1OWL%2Bm7J7Ia45Li65F68s3j6%2BZKu6EPd21BFq712NCcU%2B84XCAk2G0i%2B4iCjpDdOXduoagaZxVTS1kJlQXl8By7kpnrlhJcUQ1fw9sZb%2B%2FXmIwh5bPwwY6pgE6actaKcxHL71xrDKt2WMr207rt4VcFnVjCvQzn1nSHu9xt3%2FkkcT2h7bDjJgzKrCPQuY6xsFXDEwVzIJ9gQtH3boXwGXixFHaEWSd0U8gqjCjz8CAGqazzZa%2B6M2VLEeBKD%2FalOeRqWzXauYzJiIMeKwPGpZjIWpAQqROygGAck4xCS0UA96eQXFCT0Cqj3c3ovN60PWbjNQo%2FYFER90LGmf2BHAu&X-Amz-Signature=a123057e80b1c0aad47bf29fddd70c922403994d44d972734bb042a302f206ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
