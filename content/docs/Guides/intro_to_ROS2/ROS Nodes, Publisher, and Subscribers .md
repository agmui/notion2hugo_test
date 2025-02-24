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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJFJEYD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3VX4khclu94g8h9PYMG8KfA81%2Fzq6oO06LKOn47y0QIhALtBILLjJiH8j2wyJ1jG%2FJSA4VgpHofwJ5pbMhgyncggKv8DCCEQABoMNjM3NDIzMTgzODA1IgxD%2FtDe%2Bjdc4WRTabMq3AMxxj68DS59J31%2Fb4%2BHoVC9MQsVbJnVCFaMZS1eL95jTZ8GGTOPs1M5w55CzIg7oKWRaJ7x1fw618zkO9PEH0M%2B5DNn8sfSGkdHHYCViGe3PyTHegWFQGIkieVZcZIYixj2Fp904yQRyEIEsxYAVbSP%2ByrjciLrOvtRD8U1gxoFHHUlwTfbnNVUaY9wMeR9KpUlKfvY3mYvX5my4CGtlupoPjn%2BMQr%2BtsAWLlq%2BuW06l%2FP%2FKGJUy32vWV4VlYgtXKJPKApcXnCiWFZjZE%2B3fpZy71nnqUwUf7I3ZunHxCnfz37dIJDg72kmolmwHxahsS8sWM9JcBD0MqYPXCqJ5urtSN9iHXJYlBSmc8SeL44A%2BSaXMqSErps%2B0e5n4%2BdGO3ISRj1W0fNoiysuE59rWSQAyQ7NtGbtnlVon2%2FvZQB0yZ0Ij1ZNY1iWHpMIKpnRMzZk6Tu2MqdYE0g8pC%2BGa1g%2BG%2BACDQv2CzXoH8a4IxHB7iKQVPA9R7yUU8286ik7o1BS1M9EDnKeVbAoqgNgAaBpLgbhDOWH8mW%2B%2Bj6qnb6wMNyDRKSmNNPq7I6iJgGBa7mj7iYsCWrROTQC8TKlxw%2Btv%2BHSoXVchGNmPKLy9kK9SpNRrPq5%2FFUNi9uopjCj8e69BjqkAbXUczJ17QxA8b2sPElia8dELQ1xrlePwaTBeFFeo6T69ZrOHaSKQk%2FXmtInqStpEWiumk%2FQbsksZ1P18rmZliLnBvuImJBC%2BPNTcFY3GskX9ikE%2BOZTlYX5fpBqcurfYSgbEXyjW4ioHgyFv8ogsA%2FcW2SA9BAgsKetpkRY7j9ldLdL61A2hYgQ3xe8rFdRbDVQsBXn04FGtPGNDkuIjmvwhy0V&X-Amz-Signature=eed5462a534e98b1843e8cbc918399fe4679c45771bf7f27add202306c07c6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJFJEYD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3VX4khclu94g8h9PYMG8KfA81%2Fzq6oO06LKOn47y0QIhALtBILLjJiH8j2wyJ1jG%2FJSA4VgpHofwJ5pbMhgyncggKv8DCCEQABoMNjM3NDIzMTgzODA1IgxD%2FtDe%2Bjdc4WRTabMq3AMxxj68DS59J31%2Fb4%2BHoVC9MQsVbJnVCFaMZS1eL95jTZ8GGTOPs1M5w55CzIg7oKWRaJ7x1fw618zkO9PEH0M%2B5DNn8sfSGkdHHYCViGe3PyTHegWFQGIkieVZcZIYixj2Fp904yQRyEIEsxYAVbSP%2ByrjciLrOvtRD8U1gxoFHHUlwTfbnNVUaY9wMeR9KpUlKfvY3mYvX5my4CGtlupoPjn%2BMQr%2BtsAWLlq%2BuW06l%2FP%2FKGJUy32vWV4VlYgtXKJPKApcXnCiWFZjZE%2B3fpZy71nnqUwUf7I3ZunHxCnfz37dIJDg72kmolmwHxahsS8sWM9JcBD0MqYPXCqJ5urtSN9iHXJYlBSmc8SeL44A%2BSaXMqSErps%2B0e5n4%2BdGO3ISRj1W0fNoiysuE59rWSQAyQ7NtGbtnlVon2%2FvZQB0yZ0Ij1ZNY1iWHpMIKpnRMzZk6Tu2MqdYE0g8pC%2BGa1g%2BG%2BACDQv2CzXoH8a4IxHB7iKQVPA9R7yUU8286ik7o1BS1M9EDnKeVbAoqgNgAaBpLgbhDOWH8mW%2B%2Bj6qnb6wMNyDRKSmNNPq7I6iJgGBa7mj7iYsCWrROTQC8TKlxw%2Btv%2BHSoXVchGNmPKLy9kK9SpNRrPq5%2FFUNi9uopjCj8e69BjqkAbXUczJ17QxA8b2sPElia8dELQ1xrlePwaTBeFFeo6T69ZrOHaSKQk%2FXmtInqStpEWiumk%2FQbsksZ1P18rmZliLnBvuImJBC%2BPNTcFY3GskX9ikE%2BOZTlYX5fpBqcurfYSgbEXyjW4ioHgyFv8ogsA%2FcW2SA9BAgsKetpkRY7j9ldLdL61A2hYgQ3xe8rFdRbDVQsBXn04FGtPGNDkuIjmvwhy0V&X-Amz-Signature=ead7b6a8cc909a7ec5793ec5bcb2569fdd97f76e9f4ce3e737779dc6a3a11514&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJFJEYD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3VX4khclu94g8h9PYMG8KfA81%2Fzq6oO06LKOn47y0QIhALtBILLjJiH8j2wyJ1jG%2FJSA4VgpHofwJ5pbMhgyncggKv8DCCEQABoMNjM3NDIzMTgzODA1IgxD%2FtDe%2Bjdc4WRTabMq3AMxxj68DS59J31%2Fb4%2BHoVC9MQsVbJnVCFaMZS1eL95jTZ8GGTOPs1M5w55CzIg7oKWRaJ7x1fw618zkO9PEH0M%2B5DNn8sfSGkdHHYCViGe3PyTHegWFQGIkieVZcZIYixj2Fp904yQRyEIEsxYAVbSP%2ByrjciLrOvtRD8U1gxoFHHUlwTfbnNVUaY9wMeR9KpUlKfvY3mYvX5my4CGtlupoPjn%2BMQr%2BtsAWLlq%2BuW06l%2FP%2FKGJUy32vWV4VlYgtXKJPKApcXnCiWFZjZE%2B3fpZy71nnqUwUf7I3ZunHxCnfz37dIJDg72kmolmwHxahsS8sWM9JcBD0MqYPXCqJ5urtSN9iHXJYlBSmc8SeL44A%2BSaXMqSErps%2B0e5n4%2BdGO3ISRj1W0fNoiysuE59rWSQAyQ7NtGbtnlVon2%2FvZQB0yZ0Ij1ZNY1iWHpMIKpnRMzZk6Tu2MqdYE0g8pC%2BGa1g%2BG%2BACDQv2CzXoH8a4IxHB7iKQVPA9R7yUU8286ik7o1BS1M9EDnKeVbAoqgNgAaBpLgbhDOWH8mW%2B%2Bj6qnb6wMNyDRKSmNNPq7I6iJgGBa7mj7iYsCWrROTQC8TKlxw%2Btv%2BHSoXVchGNmPKLy9kK9SpNRrPq5%2FFUNi9uopjCj8e69BjqkAbXUczJ17QxA8b2sPElia8dELQ1xrlePwaTBeFFeo6T69ZrOHaSKQk%2FXmtInqStpEWiumk%2FQbsksZ1P18rmZliLnBvuImJBC%2BPNTcFY3GskX9ikE%2BOZTlYX5fpBqcurfYSgbEXyjW4ioHgyFv8ogsA%2FcW2SA9BAgsKetpkRY7j9ldLdL61A2hYgQ3xe8rFdRbDVQsBXn04FGtPGNDkuIjmvwhy0V&X-Amz-Signature=84a97610c2c870acf93f74c001c300df6085f5affcc38e4a364be3546fadbc27&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJFJEYD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3VX4khclu94g8h9PYMG8KfA81%2Fzq6oO06LKOn47y0QIhALtBILLjJiH8j2wyJ1jG%2FJSA4VgpHofwJ5pbMhgyncggKv8DCCEQABoMNjM3NDIzMTgzODA1IgxD%2FtDe%2Bjdc4WRTabMq3AMxxj68DS59J31%2Fb4%2BHoVC9MQsVbJnVCFaMZS1eL95jTZ8GGTOPs1M5w55CzIg7oKWRaJ7x1fw618zkO9PEH0M%2B5DNn8sfSGkdHHYCViGe3PyTHegWFQGIkieVZcZIYixj2Fp904yQRyEIEsxYAVbSP%2ByrjciLrOvtRD8U1gxoFHHUlwTfbnNVUaY9wMeR9KpUlKfvY3mYvX5my4CGtlupoPjn%2BMQr%2BtsAWLlq%2BuW06l%2FP%2FKGJUy32vWV4VlYgtXKJPKApcXnCiWFZjZE%2B3fpZy71nnqUwUf7I3ZunHxCnfz37dIJDg72kmolmwHxahsS8sWM9JcBD0MqYPXCqJ5urtSN9iHXJYlBSmc8SeL44A%2BSaXMqSErps%2B0e5n4%2BdGO3ISRj1W0fNoiysuE59rWSQAyQ7NtGbtnlVon2%2FvZQB0yZ0Ij1ZNY1iWHpMIKpnRMzZk6Tu2MqdYE0g8pC%2BGa1g%2BG%2BACDQv2CzXoH8a4IxHB7iKQVPA9R7yUU8286ik7o1BS1M9EDnKeVbAoqgNgAaBpLgbhDOWH8mW%2B%2Bj6qnb6wMNyDRKSmNNPq7I6iJgGBa7mj7iYsCWrROTQC8TKlxw%2Btv%2BHSoXVchGNmPKLy9kK9SpNRrPq5%2FFUNi9uopjCj8e69BjqkAbXUczJ17QxA8b2sPElia8dELQ1xrlePwaTBeFFeo6T69ZrOHaSKQk%2FXmtInqStpEWiumk%2FQbsksZ1P18rmZliLnBvuImJBC%2BPNTcFY3GskX9ikE%2BOZTlYX5fpBqcurfYSgbEXyjW4ioHgyFv8ogsA%2FcW2SA9BAgsKetpkRY7j9ldLdL61A2hYgQ3xe8rFdRbDVQsBXn04FGtPGNDkuIjmvwhy0V&X-Amz-Signature=e1bdc45d4b9b7028c6ec6ee904d74aa94121d135d992bd736c55dc17a46c1234&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJFJEYD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3VX4khclu94g8h9PYMG8KfA81%2Fzq6oO06LKOn47y0QIhALtBILLjJiH8j2wyJ1jG%2FJSA4VgpHofwJ5pbMhgyncggKv8DCCEQABoMNjM3NDIzMTgzODA1IgxD%2FtDe%2Bjdc4WRTabMq3AMxxj68DS59J31%2Fb4%2BHoVC9MQsVbJnVCFaMZS1eL95jTZ8GGTOPs1M5w55CzIg7oKWRaJ7x1fw618zkO9PEH0M%2B5DNn8sfSGkdHHYCViGe3PyTHegWFQGIkieVZcZIYixj2Fp904yQRyEIEsxYAVbSP%2ByrjciLrOvtRD8U1gxoFHHUlwTfbnNVUaY9wMeR9KpUlKfvY3mYvX5my4CGtlupoPjn%2BMQr%2BtsAWLlq%2BuW06l%2FP%2FKGJUy32vWV4VlYgtXKJPKApcXnCiWFZjZE%2B3fpZy71nnqUwUf7I3ZunHxCnfz37dIJDg72kmolmwHxahsS8sWM9JcBD0MqYPXCqJ5urtSN9iHXJYlBSmc8SeL44A%2BSaXMqSErps%2B0e5n4%2BdGO3ISRj1W0fNoiysuE59rWSQAyQ7NtGbtnlVon2%2FvZQB0yZ0Ij1ZNY1iWHpMIKpnRMzZk6Tu2MqdYE0g8pC%2BGa1g%2BG%2BACDQv2CzXoH8a4IxHB7iKQVPA9R7yUU8286ik7o1BS1M9EDnKeVbAoqgNgAaBpLgbhDOWH8mW%2B%2Bj6qnb6wMNyDRKSmNNPq7I6iJgGBa7mj7iYsCWrROTQC8TKlxw%2Btv%2BHSoXVchGNmPKLy9kK9SpNRrPq5%2FFUNi9uopjCj8e69BjqkAbXUczJ17QxA8b2sPElia8dELQ1xrlePwaTBeFFeo6T69ZrOHaSKQk%2FXmtInqStpEWiumk%2FQbsksZ1P18rmZliLnBvuImJBC%2BPNTcFY3GskX9ikE%2BOZTlYX5fpBqcurfYSgbEXyjW4ioHgyFv8ogsA%2FcW2SA9BAgsKetpkRY7j9ldLdL61A2hYgQ3xe8rFdRbDVQsBXn04FGtPGNDkuIjmvwhy0V&X-Amz-Signature=c76d39e075eda4dbc4fd009f980aad0031c8a1733e07bf6e32d4b8c963ead34a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJFJEYD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3VX4khclu94g8h9PYMG8KfA81%2Fzq6oO06LKOn47y0QIhALtBILLjJiH8j2wyJ1jG%2FJSA4VgpHofwJ5pbMhgyncggKv8DCCEQABoMNjM3NDIzMTgzODA1IgxD%2FtDe%2Bjdc4WRTabMq3AMxxj68DS59J31%2Fb4%2BHoVC9MQsVbJnVCFaMZS1eL95jTZ8GGTOPs1M5w55CzIg7oKWRaJ7x1fw618zkO9PEH0M%2B5DNn8sfSGkdHHYCViGe3PyTHegWFQGIkieVZcZIYixj2Fp904yQRyEIEsxYAVbSP%2ByrjciLrOvtRD8U1gxoFHHUlwTfbnNVUaY9wMeR9KpUlKfvY3mYvX5my4CGtlupoPjn%2BMQr%2BtsAWLlq%2BuW06l%2FP%2FKGJUy32vWV4VlYgtXKJPKApcXnCiWFZjZE%2B3fpZy71nnqUwUf7I3ZunHxCnfz37dIJDg72kmolmwHxahsS8sWM9JcBD0MqYPXCqJ5urtSN9iHXJYlBSmc8SeL44A%2BSaXMqSErps%2B0e5n4%2BdGO3ISRj1W0fNoiysuE59rWSQAyQ7NtGbtnlVon2%2FvZQB0yZ0Ij1ZNY1iWHpMIKpnRMzZk6Tu2MqdYE0g8pC%2BGa1g%2BG%2BACDQv2CzXoH8a4IxHB7iKQVPA9R7yUU8286ik7o1BS1M9EDnKeVbAoqgNgAaBpLgbhDOWH8mW%2B%2Bj6qnb6wMNyDRKSmNNPq7I6iJgGBa7mj7iYsCWrROTQC8TKlxw%2Btv%2BHSoXVchGNmPKLy9kK9SpNRrPq5%2FFUNi9uopjCj8e69BjqkAbXUczJ17QxA8b2sPElia8dELQ1xrlePwaTBeFFeo6T69ZrOHaSKQk%2FXmtInqStpEWiumk%2FQbsksZ1P18rmZliLnBvuImJBC%2BPNTcFY3GskX9ikE%2BOZTlYX5fpBqcurfYSgbEXyjW4ioHgyFv8ogsA%2FcW2SA9BAgsKetpkRY7j9ldLdL61A2hYgQ3xe8rFdRbDVQsBXn04FGtPGNDkuIjmvwhy0V&X-Amz-Signature=95997a9644c1a1c99d5d070ef991d0705f8ab2493c0fc85693183146a633de91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJFJEYD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3VX4khclu94g8h9PYMG8KfA81%2Fzq6oO06LKOn47y0QIhALtBILLjJiH8j2wyJ1jG%2FJSA4VgpHofwJ5pbMhgyncggKv8DCCEQABoMNjM3NDIzMTgzODA1IgxD%2FtDe%2Bjdc4WRTabMq3AMxxj68DS59J31%2Fb4%2BHoVC9MQsVbJnVCFaMZS1eL95jTZ8GGTOPs1M5w55CzIg7oKWRaJ7x1fw618zkO9PEH0M%2B5DNn8sfSGkdHHYCViGe3PyTHegWFQGIkieVZcZIYixj2Fp904yQRyEIEsxYAVbSP%2ByrjciLrOvtRD8U1gxoFHHUlwTfbnNVUaY9wMeR9KpUlKfvY3mYvX5my4CGtlupoPjn%2BMQr%2BtsAWLlq%2BuW06l%2FP%2FKGJUy32vWV4VlYgtXKJPKApcXnCiWFZjZE%2B3fpZy71nnqUwUf7I3ZunHxCnfz37dIJDg72kmolmwHxahsS8sWM9JcBD0MqYPXCqJ5urtSN9iHXJYlBSmc8SeL44A%2BSaXMqSErps%2B0e5n4%2BdGO3ISRj1W0fNoiysuE59rWSQAyQ7NtGbtnlVon2%2FvZQB0yZ0Ij1ZNY1iWHpMIKpnRMzZk6Tu2MqdYE0g8pC%2BGa1g%2BG%2BACDQv2CzXoH8a4IxHB7iKQVPA9R7yUU8286ik7o1BS1M9EDnKeVbAoqgNgAaBpLgbhDOWH8mW%2B%2Bj6qnb6wMNyDRKSmNNPq7I6iJgGBa7mj7iYsCWrROTQC8TKlxw%2Btv%2BHSoXVchGNmPKLy9kK9SpNRrPq5%2FFUNi9uopjCj8e69BjqkAbXUczJ17QxA8b2sPElia8dELQ1xrlePwaTBeFFeo6T69ZrOHaSKQk%2FXmtInqStpEWiumk%2FQbsksZ1P18rmZliLnBvuImJBC%2BPNTcFY3GskX9ikE%2BOZTlYX5fpBqcurfYSgbEXyjW4ioHgyFv8ogsA%2FcW2SA9BAgsKetpkRY7j9ldLdL61A2hYgQ3xe8rFdRbDVQsBXn04FGtPGNDkuIjmvwhy0V&X-Amz-Signature=d33d944c3e62e26de9a4d23d7af65a3bab3afb1d054034b103d32f9cc93fbc1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJFJEYD%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm3VX4khclu94g8h9PYMG8KfA81%2Fzq6oO06LKOn47y0QIhALtBILLjJiH8j2wyJ1jG%2FJSA4VgpHofwJ5pbMhgyncggKv8DCCEQABoMNjM3NDIzMTgzODA1IgxD%2FtDe%2Bjdc4WRTabMq3AMxxj68DS59J31%2Fb4%2BHoVC9MQsVbJnVCFaMZS1eL95jTZ8GGTOPs1M5w55CzIg7oKWRaJ7x1fw618zkO9PEH0M%2B5DNn8sfSGkdHHYCViGe3PyTHegWFQGIkieVZcZIYixj2Fp904yQRyEIEsxYAVbSP%2ByrjciLrOvtRD8U1gxoFHHUlwTfbnNVUaY9wMeR9KpUlKfvY3mYvX5my4CGtlupoPjn%2BMQr%2BtsAWLlq%2BuW06l%2FP%2FKGJUy32vWV4VlYgtXKJPKApcXnCiWFZjZE%2B3fpZy71nnqUwUf7I3ZunHxCnfz37dIJDg72kmolmwHxahsS8sWM9JcBD0MqYPXCqJ5urtSN9iHXJYlBSmc8SeL44A%2BSaXMqSErps%2B0e5n4%2BdGO3ISRj1W0fNoiysuE59rWSQAyQ7NtGbtnlVon2%2FvZQB0yZ0Ij1ZNY1iWHpMIKpnRMzZk6Tu2MqdYE0g8pC%2BGa1g%2BG%2BACDQv2CzXoH8a4IxHB7iKQVPA9R7yUU8286ik7o1BS1M9EDnKeVbAoqgNgAaBpLgbhDOWH8mW%2B%2Bj6qnb6wMNyDRKSmNNPq7I6iJgGBa7mj7iYsCWrROTQC8TKlxw%2Btv%2BHSoXVchGNmPKLy9kK9SpNRrPq5%2FFUNi9uopjCj8e69BjqkAbXUczJ17QxA8b2sPElia8dELQ1xrlePwaTBeFFeo6T69ZrOHaSKQk%2FXmtInqStpEWiumk%2FQbsksZ1P18rmZliLnBvuImJBC%2BPNTcFY3GskX9ikE%2BOZTlYX5fpBqcurfYSgbEXyjW4ioHgyFv8ogsA%2FcW2SA9BAgsKetpkRY7j9ldLdL61A2hYgQ3xe8rFdRbDVQsBXn04FGtPGNDkuIjmvwhy0V&X-Amz-Signature=73250cbb3749720433135501dbfe18ffe0895de6f1455bfcd7af0699349f4c64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
