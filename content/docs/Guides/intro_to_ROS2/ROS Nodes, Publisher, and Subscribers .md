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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3AAECF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDl6nKXLyG8VELidc0NNkkHSLm2y8VjKG0j85YFqAvBKAiEAkMt0ciS71LfqTC7D5TDXdb%2F1qk2vShKBfyN0i%2Bt1R40q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFDWsr0HVAfT5%2BYF6SrcA2F17Cq94An5Tc5ZqH8XfpfB5Mx%2FZ%2BzcZo8jHvCZdrgSXkNHwp30jcgWruT%2BYWYTCPMpF%2BLQlQf6Z%2B9tdanq%2FwcYmRw67nlbBp11kyKzSnmYLplavnD82g8g9w%2BWqv6To4n2PRrCfE%2BQ9Dq9zK7rNeJc96fEwEnZ0r5GIfaxkxZYhlQbA6CQW%2BQOLnQP%2BSs9BV8qOz5Eu0KlL0DI8NOwFl5RcZMs88nI1qqkNNeaFyVGmdnpWJmAE48xIFb5nyrhBZLa8pWb6lmOoy3Smz%2BfvZfxFtx2%2FoUq37Ctlt%2BtojiLTsYMX01t1ZqRGE54Y3XqcTzgPPfBUby8V%2FUxY4VuVYq96Vk18fy%2F27SOpvVAkdyU4rBzcxkR%2BsLoci0dk%2Fh1Ub%2FInQQxHxd8cad%2FhhZ96s7yMUs2m7w9cKOyxIWqFd6Xe0NWy8s%2BBwgIuTXoQkIa64qg4DsBkPs7Ue%2F8GQpbyA4D2zWMgoyrpmUJlaDlwnCu3L%2FuEukOk2kadXXH3wP8Gq7W4ZZVlsHUUuDQJmELATCIr849TzUeYf6SWuJ6vt5LId07iKTQkwlrh3TD6YcySkLfsvffPVCC6EI6JW4wQgb0%2Bhb7EcXHZAZf9skOWRbPvYbNbWMVfH4LgplTMPDRqcMGOqUB39ko9lAjcqDSUY6XR4%2Fp4g2zt267bwPGzElntET%2Fc4amxqjV0oKSMpQMRQ7H6dDmWjt9rloNqXOFWDNoCAQEBJfVdwrGNO0FbBUbMy%2B7RK%2BvgLt7ttGmdpSrKYLHYPzl7y2CBUXzzccTMTb04JeCR%2FvdU8Q%2FJBmJ5wtCDp%2B2eYd%2BQGoyWOTjXEaVchQj%2Fn8Ts5CDTFsPmy0UEgUO7mhZGl%2Fgltpl&X-Amz-Signature=9ce08956c29748f3f419feebf10ff161a399669ddc0f2fc61603e5611c07f0d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3AAECF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDl6nKXLyG8VELidc0NNkkHSLm2y8VjKG0j85YFqAvBKAiEAkMt0ciS71LfqTC7D5TDXdb%2F1qk2vShKBfyN0i%2Bt1R40q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFDWsr0HVAfT5%2BYF6SrcA2F17Cq94An5Tc5ZqH8XfpfB5Mx%2FZ%2BzcZo8jHvCZdrgSXkNHwp30jcgWruT%2BYWYTCPMpF%2BLQlQf6Z%2B9tdanq%2FwcYmRw67nlbBp11kyKzSnmYLplavnD82g8g9w%2BWqv6To4n2PRrCfE%2BQ9Dq9zK7rNeJc96fEwEnZ0r5GIfaxkxZYhlQbA6CQW%2BQOLnQP%2BSs9BV8qOz5Eu0KlL0DI8NOwFl5RcZMs88nI1qqkNNeaFyVGmdnpWJmAE48xIFb5nyrhBZLa8pWb6lmOoy3Smz%2BfvZfxFtx2%2FoUq37Ctlt%2BtojiLTsYMX01t1ZqRGE54Y3XqcTzgPPfBUby8V%2FUxY4VuVYq96Vk18fy%2F27SOpvVAkdyU4rBzcxkR%2BsLoci0dk%2Fh1Ub%2FInQQxHxd8cad%2FhhZ96s7yMUs2m7w9cKOyxIWqFd6Xe0NWy8s%2BBwgIuTXoQkIa64qg4DsBkPs7Ue%2F8GQpbyA4D2zWMgoyrpmUJlaDlwnCu3L%2FuEukOk2kadXXH3wP8Gq7W4ZZVlsHUUuDQJmELATCIr849TzUeYf6SWuJ6vt5LId07iKTQkwlrh3TD6YcySkLfsvffPVCC6EI6JW4wQgb0%2Bhb7EcXHZAZf9skOWRbPvYbNbWMVfH4LgplTMPDRqcMGOqUB39ko9lAjcqDSUY6XR4%2Fp4g2zt267bwPGzElntET%2Fc4amxqjV0oKSMpQMRQ7H6dDmWjt9rloNqXOFWDNoCAQEBJfVdwrGNO0FbBUbMy%2B7RK%2BvgLt7ttGmdpSrKYLHYPzl7y2CBUXzzccTMTb04JeCR%2FvdU8Q%2FJBmJ5wtCDp%2B2eYd%2BQGoyWOTjXEaVchQj%2Fn8Ts5CDTFsPmy0UEgUO7mhZGl%2Fgltpl&X-Amz-Signature=1f5c7189f06cae56daf66323796659c415863bfa99d5b2082c8b112b02dd3de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3AAECF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDl6nKXLyG8VELidc0NNkkHSLm2y8VjKG0j85YFqAvBKAiEAkMt0ciS71LfqTC7D5TDXdb%2F1qk2vShKBfyN0i%2Bt1R40q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFDWsr0HVAfT5%2BYF6SrcA2F17Cq94An5Tc5ZqH8XfpfB5Mx%2FZ%2BzcZo8jHvCZdrgSXkNHwp30jcgWruT%2BYWYTCPMpF%2BLQlQf6Z%2B9tdanq%2FwcYmRw67nlbBp11kyKzSnmYLplavnD82g8g9w%2BWqv6To4n2PRrCfE%2BQ9Dq9zK7rNeJc96fEwEnZ0r5GIfaxkxZYhlQbA6CQW%2BQOLnQP%2BSs9BV8qOz5Eu0KlL0DI8NOwFl5RcZMs88nI1qqkNNeaFyVGmdnpWJmAE48xIFb5nyrhBZLa8pWb6lmOoy3Smz%2BfvZfxFtx2%2FoUq37Ctlt%2BtojiLTsYMX01t1ZqRGE54Y3XqcTzgPPfBUby8V%2FUxY4VuVYq96Vk18fy%2F27SOpvVAkdyU4rBzcxkR%2BsLoci0dk%2Fh1Ub%2FInQQxHxd8cad%2FhhZ96s7yMUs2m7w9cKOyxIWqFd6Xe0NWy8s%2BBwgIuTXoQkIa64qg4DsBkPs7Ue%2F8GQpbyA4D2zWMgoyrpmUJlaDlwnCu3L%2FuEukOk2kadXXH3wP8Gq7W4ZZVlsHUUuDQJmELATCIr849TzUeYf6SWuJ6vt5LId07iKTQkwlrh3TD6YcySkLfsvffPVCC6EI6JW4wQgb0%2Bhb7EcXHZAZf9skOWRbPvYbNbWMVfH4LgplTMPDRqcMGOqUB39ko9lAjcqDSUY6XR4%2Fp4g2zt267bwPGzElntET%2Fc4amxqjV0oKSMpQMRQ7H6dDmWjt9rloNqXOFWDNoCAQEBJfVdwrGNO0FbBUbMy%2B7RK%2BvgLt7ttGmdpSrKYLHYPzl7y2CBUXzzccTMTb04JeCR%2FvdU8Q%2FJBmJ5wtCDp%2B2eYd%2BQGoyWOTjXEaVchQj%2Fn8Ts5CDTFsPmy0UEgUO7mhZGl%2Fgltpl&X-Amz-Signature=01bf5ecfe22fab33ca6284dc7669ce8441438a82a570c53bf20ab46668cd7371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3AAECF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDl6nKXLyG8VELidc0NNkkHSLm2y8VjKG0j85YFqAvBKAiEAkMt0ciS71LfqTC7D5TDXdb%2F1qk2vShKBfyN0i%2Bt1R40q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFDWsr0HVAfT5%2BYF6SrcA2F17Cq94An5Tc5ZqH8XfpfB5Mx%2FZ%2BzcZo8jHvCZdrgSXkNHwp30jcgWruT%2BYWYTCPMpF%2BLQlQf6Z%2B9tdanq%2FwcYmRw67nlbBp11kyKzSnmYLplavnD82g8g9w%2BWqv6To4n2PRrCfE%2BQ9Dq9zK7rNeJc96fEwEnZ0r5GIfaxkxZYhlQbA6CQW%2BQOLnQP%2BSs9BV8qOz5Eu0KlL0DI8NOwFl5RcZMs88nI1qqkNNeaFyVGmdnpWJmAE48xIFb5nyrhBZLa8pWb6lmOoy3Smz%2BfvZfxFtx2%2FoUq37Ctlt%2BtojiLTsYMX01t1ZqRGE54Y3XqcTzgPPfBUby8V%2FUxY4VuVYq96Vk18fy%2F27SOpvVAkdyU4rBzcxkR%2BsLoci0dk%2Fh1Ub%2FInQQxHxd8cad%2FhhZ96s7yMUs2m7w9cKOyxIWqFd6Xe0NWy8s%2BBwgIuTXoQkIa64qg4DsBkPs7Ue%2F8GQpbyA4D2zWMgoyrpmUJlaDlwnCu3L%2FuEukOk2kadXXH3wP8Gq7W4ZZVlsHUUuDQJmELATCIr849TzUeYf6SWuJ6vt5LId07iKTQkwlrh3TD6YcySkLfsvffPVCC6EI6JW4wQgb0%2Bhb7EcXHZAZf9skOWRbPvYbNbWMVfH4LgplTMPDRqcMGOqUB39ko9lAjcqDSUY6XR4%2Fp4g2zt267bwPGzElntET%2Fc4amxqjV0oKSMpQMRQ7H6dDmWjt9rloNqXOFWDNoCAQEBJfVdwrGNO0FbBUbMy%2B7RK%2BvgLt7ttGmdpSrKYLHYPzl7y2CBUXzzccTMTb04JeCR%2FvdU8Q%2FJBmJ5wtCDp%2B2eYd%2BQGoyWOTjXEaVchQj%2Fn8Ts5CDTFsPmy0UEgUO7mhZGl%2Fgltpl&X-Amz-Signature=1a1067239fd0c1e79efc4e8cb70f94fcbe581c66a03eecf24da0f65a6d17bad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3AAECF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDl6nKXLyG8VELidc0NNkkHSLm2y8VjKG0j85YFqAvBKAiEAkMt0ciS71LfqTC7D5TDXdb%2F1qk2vShKBfyN0i%2Bt1R40q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFDWsr0HVAfT5%2BYF6SrcA2F17Cq94An5Tc5ZqH8XfpfB5Mx%2FZ%2BzcZo8jHvCZdrgSXkNHwp30jcgWruT%2BYWYTCPMpF%2BLQlQf6Z%2B9tdanq%2FwcYmRw67nlbBp11kyKzSnmYLplavnD82g8g9w%2BWqv6To4n2PRrCfE%2BQ9Dq9zK7rNeJc96fEwEnZ0r5GIfaxkxZYhlQbA6CQW%2BQOLnQP%2BSs9BV8qOz5Eu0KlL0DI8NOwFl5RcZMs88nI1qqkNNeaFyVGmdnpWJmAE48xIFb5nyrhBZLa8pWb6lmOoy3Smz%2BfvZfxFtx2%2FoUq37Ctlt%2BtojiLTsYMX01t1ZqRGE54Y3XqcTzgPPfBUby8V%2FUxY4VuVYq96Vk18fy%2F27SOpvVAkdyU4rBzcxkR%2BsLoci0dk%2Fh1Ub%2FInQQxHxd8cad%2FhhZ96s7yMUs2m7w9cKOyxIWqFd6Xe0NWy8s%2BBwgIuTXoQkIa64qg4DsBkPs7Ue%2F8GQpbyA4D2zWMgoyrpmUJlaDlwnCu3L%2FuEukOk2kadXXH3wP8Gq7W4ZZVlsHUUuDQJmELATCIr849TzUeYf6SWuJ6vt5LId07iKTQkwlrh3TD6YcySkLfsvffPVCC6EI6JW4wQgb0%2Bhb7EcXHZAZf9skOWRbPvYbNbWMVfH4LgplTMPDRqcMGOqUB39ko9lAjcqDSUY6XR4%2Fp4g2zt267bwPGzElntET%2Fc4amxqjV0oKSMpQMRQ7H6dDmWjt9rloNqXOFWDNoCAQEBJfVdwrGNO0FbBUbMy%2B7RK%2BvgLt7ttGmdpSrKYLHYPzl7y2CBUXzzccTMTb04JeCR%2FvdU8Q%2FJBmJ5wtCDp%2B2eYd%2BQGoyWOTjXEaVchQj%2Fn8Ts5CDTFsPmy0UEgUO7mhZGl%2Fgltpl&X-Amz-Signature=d3636df2d610bd0b31bf29f79caef2403a8909b7630a45b5815f62ab939011fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3AAECF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDl6nKXLyG8VELidc0NNkkHSLm2y8VjKG0j85YFqAvBKAiEAkMt0ciS71LfqTC7D5TDXdb%2F1qk2vShKBfyN0i%2Bt1R40q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFDWsr0HVAfT5%2BYF6SrcA2F17Cq94An5Tc5ZqH8XfpfB5Mx%2FZ%2BzcZo8jHvCZdrgSXkNHwp30jcgWruT%2BYWYTCPMpF%2BLQlQf6Z%2B9tdanq%2FwcYmRw67nlbBp11kyKzSnmYLplavnD82g8g9w%2BWqv6To4n2PRrCfE%2BQ9Dq9zK7rNeJc96fEwEnZ0r5GIfaxkxZYhlQbA6CQW%2BQOLnQP%2BSs9BV8qOz5Eu0KlL0DI8NOwFl5RcZMs88nI1qqkNNeaFyVGmdnpWJmAE48xIFb5nyrhBZLa8pWb6lmOoy3Smz%2BfvZfxFtx2%2FoUq37Ctlt%2BtojiLTsYMX01t1ZqRGE54Y3XqcTzgPPfBUby8V%2FUxY4VuVYq96Vk18fy%2F27SOpvVAkdyU4rBzcxkR%2BsLoci0dk%2Fh1Ub%2FInQQxHxd8cad%2FhhZ96s7yMUs2m7w9cKOyxIWqFd6Xe0NWy8s%2BBwgIuTXoQkIa64qg4DsBkPs7Ue%2F8GQpbyA4D2zWMgoyrpmUJlaDlwnCu3L%2FuEukOk2kadXXH3wP8Gq7W4ZZVlsHUUuDQJmELATCIr849TzUeYf6SWuJ6vt5LId07iKTQkwlrh3TD6YcySkLfsvffPVCC6EI6JW4wQgb0%2Bhb7EcXHZAZf9skOWRbPvYbNbWMVfH4LgplTMPDRqcMGOqUB39ko9lAjcqDSUY6XR4%2Fp4g2zt267bwPGzElntET%2Fc4amxqjV0oKSMpQMRQ7H6dDmWjt9rloNqXOFWDNoCAQEBJfVdwrGNO0FbBUbMy%2B7RK%2BvgLt7ttGmdpSrKYLHYPzl7y2CBUXzzccTMTb04JeCR%2FvdU8Q%2FJBmJ5wtCDp%2B2eYd%2BQGoyWOTjXEaVchQj%2Fn8Ts5CDTFsPmy0UEgUO7mhZGl%2Fgltpl&X-Amz-Signature=46972dffd283d6fbc5127872f8264b93ccfc272e69d5daa0cf6de76956d095fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3AAECF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDl6nKXLyG8VELidc0NNkkHSLm2y8VjKG0j85YFqAvBKAiEAkMt0ciS71LfqTC7D5TDXdb%2F1qk2vShKBfyN0i%2Bt1R40q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFDWsr0HVAfT5%2BYF6SrcA2F17Cq94An5Tc5ZqH8XfpfB5Mx%2FZ%2BzcZo8jHvCZdrgSXkNHwp30jcgWruT%2BYWYTCPMpF%2BLQlQf6Z%2B9tdanq%2FwcYmRw67nlbBp11kyKzSnmYLplavnD82g8g9w%2BWqv6To4n2PRrCfE%2BQ9Dq9zK7rNeJc96fEwEnZ0r5GIfaxkxZYhlQbA6CQW%2BQOLnQP%2BSs9BV8qOz5Eu0KlL0DI8NOwFl5RcZMs88nI1qqkNNeaFyVGmdnpWJmAE48xIFb5nyrhBZLa8pWb6lmOoy3Smz%2BfvZfxFtx2%2FoUq37Ctlt%2BtojiLTsYMX01t1ZqRGE54Y3XqcTzgPPfBUby8V%2FUxY4VuVYq96Vk18fy%2F27SOpvVAkdyU4rBzcxkR%2BsLoci0dk%2Fh1Ub%2FInQQxHxd8cad%2FhhZ96s7yMUs2m7w9cKOyxIWqFd6Xe0NWy8s%2BBwgIuTXoQkIa64qg4DsBkPs7Ue%2F8GQpbyA4D2zWMgoyrpmUJlaDlwnCu3L%2FuEukOk2kadXXH3wP8Gq7W4ZZVlsHUUuDQJmELATCIr849TzUeYf6SWuJ6vt5LId07iKTQkwlrh3TD6YcySkLfsvffPVCC6EI6JW4wQgb0%2Bhb7EcXHZAZf9skOWRbPvYbNbWMVfH4LgplTMPDRqcMGOqUB39ko9lAjcqDSUY6XR4%2Fp4g2zt267bwPGzElntET%2Fc4amxqjV0oKSMpQMRQ7H6dDmWjt9rloNqXOFWDNoCAQEBJfVdwrGNO0FbBUbMy%2B7RK%2BvgLt7ttGmdpSrKYLHYPzl7y2CBUXzzccTMTb04JeCR%2FvdU8Q%2FJBmJ5wtCDp%2B2eYd%2BQGoyWOTjXEaVchQj%2Fn8Ts5CDTFsPmy0UEgUO7mhZGl%2Fgltpl&X-Amz-Signature=f89d6d6bfa4c8082c3e763ec26dc1df3abe2d415231b8628df254eaec0eeff52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3AAECF%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDl6nKXLyG8VELidc0NNkkHSLm2y8VjKG0j85YFqAvBKAiEAkMt0ciS71LfqTC7D5TDXdb%2F1qk2vShKBfyN0i%2Bt1R40q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFDWsr0HVAfT5%2BYF6SrcA2F17Cq94An5Tc5ZqH8XfpfB5Mx%2FZ%2BzcZo8jHvCZdrgSXkNHwp30jcgWruT%2BYWYTCPMpF%2BLQlQf6Z%2B9tdanq%2FwcYmRw67nlbBp11kyKzSnmYLplavnD82g8g9w%2BWqv6To4n2PRrCfE%2BQ9Dq9zK7rNeJc96fEwEnZ0r5GIfaxkxZYhlQbA6CQW%2BQOLnQP%2BSs9BV8qOz5Eu0KlL0DI8NOwFl5RcZMs88nI1qqkNNeaFyVGmdnpWJmAE48xIFb5nyrhBZLa8pWb6lmOoy3Smz%2BfvZfxFtx2%2FoUq37Ctlt%2BtojiLTsYMX01t1ZqRGE54Y3XqcTzgPPfBUby8V%2FUxY4VuVYq96Vk18fy%2F27SOpvVAkdyU4rBzcxkR%2BsLoci0dk%2Fh1Ub%2FInQQxHxd8cad%2FhhZ96s7yMUs2m7w9cKOyxIWqFd6Xe0NWy8s%2BBwgIuTXoQkIa64qg4DsBkPs7Ue%2F8GQpbyA4D2zWMgoyrpmUJlaDlwnCu3L%2FuEukOk2kadXXH3wP8Gq7W4ZZVlsHUUuDQJmELATCIr849TzUeYf6SWuJ6vt5LId07iKTQkwlrh3TD6YcySkLfsvffPVCC6EI6JW4wQgb0%2Bhb7EcXHZAZf9skOWRbPvYbNbWMVfH4LgplTMPDRqcMGOqUB39ko9lAjcqDSUY6XR4%2Fp4g2zt267bwPGzElntET%2Fc4amxqjV0oKSMpQMRQ7H6dDmWjt9rloNqXOFWDNoCAQEBJfVdwrGNO0FbBUbMy%2B7RK%2BvgLt7ttGmdpSrKYLHYPzl7y2CBUXzzccTMTb04JeCR%2FvdU8Q%2FJBmJ5wtCDp%2B2eYd%2BQGoyWOTjXEaVchQj%2Fn8Ts5CDTFsPmy0UEgUO7mhZGl%2Fgltpl&X-Amz-Signature=c3c903caadf58899d68a57f3d2dabe473de06f1e7d2229f35a8de5a490d65889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
