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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NURUK7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX8W74445tveJ9F5SdWnKQFarCvn0X3zq8qNkzLcF5AAIhAOONrMdKutXAOcEXuRqOEG5nLi9FYHoUbMCoTE4LUmbRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnfVRvINwO9%2BON2Swq3APhg7%2BqA1T23uUlgop7lyp7C0Eq%2Fbgcd5nk%2B%2F1Dln7pBg45D%2Bb54rhKzUUo6Ky7SM%2Bkrnt0SWfRUBb0Pmkq2dS3epaKA3J9K082mU5ka6AG2L%2B%2BrQo3mrzN%2BadNY%2BUyp%2BwK9Ilyaxie8TuQPMwLStmYH0NiwGViCY2EyhOr70FN%2FQi6m7OEtvUiCTIMbO5ujJa4V3S5FtKB9WNYT68t5E1YDUJWd%2F74nstOH4vq1p40wbpUHufojus2f839s3toNboxRK8aNim9gETZLc9TzGvpOoWm0h%2FOmSKfZ8yG4PJwSGytlRWXGTGI4TV2VAekVwsDXD1vsnog22gNG836xEMmFAqu9ycoEiISyD8ZQ%2FMi5a6ZlOrTD7wvhIdx5QhhR%2FBQOki0QiB0xdZry0ZiZE4o69QWb2DfO253MOY%2FTaSxTsXhj6JWKi3wC5745bEY7MiFWGgmh%2BcPGYWkmOIO4Syhbp%2FfC%2FUfc9%2FBwpwmMQNJ741mQnODczFAfh2tj9BQhlz7bQ4MqjQv8GdnbU0PO%2BB46RR6hKOleGmGw3dVj1fwyhZ4O6RUtpoO8laikksxdk4waYM4ipfq1rbgE1Cw1bn%2BBvML2Wp6fSclF76ETDLurSrhlNYhcQF1d9Ha2TCVkO%2B8BjqkAZTphYXDP9ucPRW8Mcj0uYFPQMGORfRhLY2BVjNhQ6kbF2QO1RbNh9jv26NPC89KLNsqMl4vnN%2BQyq2IXJV9TQRY4W3GBH7WSZBMUa2Y4ucEezdgfRGPdDbuEZ3M%2FdeQ7Q%2Fw9e%2FPgqfoL9GIFzlwMN7vMehXJ7uILOvfwZGvGz4VOZahZVVCL6ORF2I9f9QAHXakbpJF1BPygxnZTfCOJSXIJQvs&X-Amz-Signature=5c286b123cf97a6bbbd480a7a968d77a98851d39725565dedbd952b24ab8bb11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NURUK7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX8W74445tveJ9F5SdWnKQFarCvn0X3zq8qNkzLcF5AAIhAOONrMdKutXAOcEXuRqOEG5nLi9FYHoUbMCoTE4LUmbRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnfVRvINwO9%2BON2Swq3APhg7%2BqA1T23uUlgop7lyp7C0Eq%2Fbgcd5nk%2B%2F1Dln7pBg45D%2Bb54rhKzUUo6Ky7SM%2Bkrnt0SWfRUBb0Pmkq2dS3epaKA3J9K082mU5ka6AG2L%2B%2BrQo3mrzN%2BadNY%2BUyp%2BwK9Ilyaxie8TuQPMwLStmYH0NiwGViCY2EyhOr70FN%2FQi6m7OEtvUiCTIMbO5ujJa4V3S5FtKB9WNYT68t5E1YDUJWd%2F74nstOH4vq1p40wbpUHufojus2f839s3toNboxRK8aNim9gETZLc9TzGvpOoWm0h%2FOmSKfZ8yG4PJwSGytlRWXGTGI4TV2VAekVwsDXD1vsnog22gNG836xEMmFAqu9ycoEiISyD8ZQ%2FMi5a6ZlOrTD7wvhIdx5QhhR%2FBQOki0QiB0xdZry0ZiZE4o69QWb2DfO253MOY%2FTaSxTsXhj6JWKi3wC5745bEY7MiFWGgmh%2BcPGYWkmOIO4Syhbp%2FfC%2FUfc9%2FBwpwmMQNJ741mQnODczFAfh2tj9BQhlz7bQ4MqjQv8GdnbU0PO%2BB46RR6hKOleGmGw3dVj1fwyhZ4O6RUtpoO8laikksxdk4waYM4ipfq1rbgE1Cw1bn%2BBvML2Wp6fSclF76ETDLurSrhlNYhcQF1d9Ha2TCVkO%2B8BjqkAZTphYXDP9ucPRW8Mcj0uYFPQMGORfRhLY2BVjNhQ6kbF2QO1RbNh9jv26NPC89KLNsqMl4vnN%2BQyq2IXJV9TQRY4W3GBH7WSZBMUa2Y4ucEezdgfRGPdDbuEZ3M%2FdeQ7Q%2Fw9e%2FPgqfoL9GIFzlwMN7vMehXJ7uILOvfwZGvGz4VOZahZVVCL6ORF2I9f9QAHXakbpJF1BPygxnZTfCOJSXIJQvs&X-Amz-Signature=10f9991855bcf0ce70de1741a224b6d0e85d48f724225b5ab5fefc57a62fc412&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NURUK7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX8W74445tveJ9F5SdWnKQFarCvn0X3zq8qNkzLcF5AAIhAOONrMdKutXAOcEXuRqOEG5nLi9FYHoUbMCoTE4LUmbRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnfVRvINwO9%2BON2Swq3APhg7%2BqA1T23uUlgop7lyp7C0Eq%2Fbgcd5nk%2B%2F1Dln7pBg45D%2Bb54rhKzUUo6Ky7SM%2Bkrnt0SWfRUBb0Pmkq2dS3epaKA3J9K082mU5ka6AG2L%2B%2BrQo3mrzN%2BadNY%2BUyp%2BwK9Ilyaxie8TuQPMwLStmYH0NiwGViCY2EyhOr70FN%2FQi6m7OEtvUiCTIMbO5ujJa4V3S5FtKB9WNYT68t5E1YDUJWd%2F74nstOH4vq1p40wbpUHufojus2f839s3toNboxRK8aNim9gETZLc9TzGvpOoWm0h%2FOmSKfZ8yG4PJwSGytlRWXGTGI4TV2VAekVwsDXD1vsnog22gNG836xEMmFAqu9ycoEiISyD8ZQ%2FMi5a6ZlOrTD7wvhIdx5QhhR%2FBQOki0QiB0xdZry0ZiZE4o69QWb2DfO253MOY%2FTaSxTsXhj6JWKi3wC5745bEY7MiFWGgmh%2BcPGYWkmOIO4Syhbp%2FfC%2FUfc9%2FBwpwmMQNJ741mQnODczFAfh2tj9BQhlz7bQ4MqjQv8GdnbU0PO%2BB46RR6hKOleGmGw3dVj1fwyhZ4O6RUtpoO8laikksxdk4waYM4ipfq1rbgE1Cw1bn%2BBvML2Wp6fSclF76ETDLurSrhlNYhcQF1d9Ha2TCVkO%2B8BjqkAZTphYXDP9ucPRW8Mcj0uYFPQMGORfRhLY2BVjNhQ6kbF2QO1RbNh9jv26NPC89KLNsqMl4vnN%2BQyq2IXJV9TQRY4W3GBH7WSZBMUa2Y4ucEezdgfRGPdDbuEZ3M%2FdeQ7Q%2Fw9e%2FPgqfoL9GIFzlwMN7vMehXJ7uILOvfwZGvGz4VOZahZVVCL6ORF2I9f9QAHXakbpJF1BPygxnZTfCOJSXIJQvs&X-Amz-Signature=060a804657ec0ca7d7b12de35bc638ab3f0b7410e6463a3279ad0e3342dc85ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NURUK7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX8W74445tveJ9F5SdWnKQFarCvn0X3zq8qNkzLcF5AAIhAOONrMdKutXAOcEXuRqOEG5nLi9FYHoUbMCoTE4LUmbRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnfVRvINwO9%2BON2Swq3APhg7%2BqA1T23uUlgop7lyp7C0Eq%2Fbgcd5nk%2B%2F1Dln7pBg45D%2Bb54rhKzUUo6Ky7SM%2Bkrnt0SWfRUBb0Pmkq2dS3epaKA3J9K082mU5ka6AG2L%2B%2BrQo3mrzN%2BadNY%2BUyp%2BwK9Ilyaxie8TuQPMwLStmYH0NiwGViCY2EyhOr70FN%2FQi6m7OEtvUiCTIMbO5ujJa4V3S5FtKB9WNYT68t5E1YDUJWd%2F74nstOH4vq1p40wbpUHufojus2f839s3toNboxRK8aNim9gETZLc9TzGvpOoWm0h%2FOmSKfZ8yG4PJwSGytlRWXGTGI4TV2VAekVwsDXD1vsnog22gNG836xEMmFAqu9ycoEiISyD8ZQ%2FMi5a6ZlOrTD7wvhIdx5QhhR%2FBQOki0QiB0xdZry0ZiZE4o69QWb2DfO253MOY%2FTaSxTsXhj6JWKi3wC5745bEY7MiFWGgmh%2BcPGYWkmOIO4Syhbp%2FfC%2FUfc9%2FBwpwmMQNJ741mQnODczFAfh2tj9BQhlz7bQ4MqjQv8GdnbU0PO%2BB46RR6hKOleGmGw3dVj1fwyhZ4O6RUtpoO8laikksxdk4waYM4ipfq1rbgE1Cw1bn%2BBvML2Wp6fSclF76ETDLurSrhlNYhcQF1d9Ha2TCVkO%2B8BjqkAZTphYXDP9ucPRW8Mcj0uYFPQMGORfRhLY2BVjNhQ6kbF2QO1RbNh9jv26NPC89KLNsqMl4vnN%2BQyq2IXJV9TQRY4W3GBH7WSZBMUa2Y4ucEezdgfRGPdDbuEZ3M%2FdeQ7Q%2Fw9e%2FPgqfoL9GIFzlwMN7vMehXJ7uILOvfwZGvGz4VOZahZVVCL6ORF2I9f9QAHXakbpJF1BPygxnZTfCOJSXIJQvs&X-Amz-Signature=723aae2862f6ec22a5fbaa9f5ca21cecc2b831f78de87faa848a43d46cf3b205&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NURUK7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX8W74445tveJ9F5SdWnKQFarCvn0X3zq8qNkzLcF5AAIhAOONrMdKutXAOcEXuRqOEG5nLi9FYHoUbMCoTE4LUmbRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnfVRvINwO9%2BON2Swq3APhg7%2BqA1T23uUlgop7lyp7C0Eq%2Fbgcd5nk%2B%2F1Dln7pBg45D%2Bb54rhKzUUo6Ky7SM%2Bkrnt0SWfRUBb0Pmkq2dS3epaKA3J9K082mU5ka6AG2L%2B%2BrQo3mrzN%2BadNY%2BUyp%2BwK9Ilyaxie8TuQPMwLStmYH0NiwGViCY2EyhOr70FN%2FQi6m7OEtvUiCTIMbO5ujJa4V3S5FtKB9WNYT68t5E1YDUJWd%2F74nstOH4vq1p40wbpUHufojus2f839s3toNboxRK8aNim9gETZLc9TzGvpOoWm0h%2FOmSKfZ8yG4PJwSGytlRWXGTGI4TV2VAekVwsDXD1vsnog22gNG836xEMmFAqu9ycoEiISyD8ZQ%2FMi5a6ZlOrTD7wvhIdx5QhhR%2FBQOki0QiB0xdZry0ZiZE4o69QWb2DfO253MOY%2FTaSxTsXhj6JWKi3wC5745bEY7MiFWGgmh%2BcPGYWkmOIO4Syhbp%2FfC%2FUfc9%2FBwpwmMQNJ741mQnODczFAfh2tj9BQhlz7bQ4MqjQv8GdnbU0PO%2BB46RR6hKOleGmGw3dVj1fwyhZ4O6RUtpoO8laikksxdk4waYM4ipfq1rbgE1Cw1bn%2BBvML2Wp6fSclF76ETDLurSrhlNYhcQF1d9Ha2TCVkO%2B8BjqkAZTphYXDP9ucPRW8Mcj0uYFPQMGORfRhLY2BVjNhQ6kbF2QO1RbNh9jv26NPC89KLNsqMl4vnN%2BQyq2IXJV9TQRY4W3GBH7WSZBMUa2Y4ucEezdgfRGPdDbuEZ3M%2FdeQ7Q%2Fw9e%2FPgqfoL9GIFzlwMN7vMehXJ7uILOvfwZGvGz4VOZahZVVCL6ORF2I9f9QAHXakbpJF1BPygxnZTfCOJSXIJQvs&X-Amz-Signature=9d0a2495c69f60ce75b4cb750b59a5551929420cb2f95fc1a1e5e2a77fb0b205&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NURUK7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX8W74445tveJ9F5SdWnKQFarCvn0X3zq8qNkzLcF5AAIhAOONrMdKutXAOcEXuRqOEG5nLi9FYHoUbMCoTE4LUmbRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnfVRvINwO9%2BON2Swq3APhg7%2BqA1T23uUlgop7lyp7C0Eq%2Fbgcd5nk%2B%2F1Dln7pBg45D%2Bb54rhKzUUo6Ky7SM%2Bkrnt0SWfRUBb0Pmkq2dS3epaKA3J9K082mU5ka6AG2L%2B%2BrQo3mrzN%2BadNY%2BUyp%2BwK9Ilyaxie8TuQPMwLStmYH0NiwGViCY2EyhOr70FN%2FQi6m7OEtvUiCTIMbO5ujJa4V3S5FtKB9WNYT68t5E1YDUJWd%2F74nstOH4vq1p40wbpUHufojus2f839s3toNboxRK8aNim9gETZLc9TzGvpOoWm0h%2FOmSKfZ8yG4PJwSGytlRWXGTGI4TV2VAekVwsDXD1vsnog22gNG836xEMmFAqu9ycoEiISyD8ZQ%2FMi5a6ZlOrTD7wvhIdx5QhhR%2FBQOki0QiB0xdZry0ZiZE4o69QWb2DfO253MOY%2FTaSxTsXhj6JWKi3wC5745bEY7MiFWGgmh%2BcPGYWkmOIO4Syhbp%2FfC%2FUfc9%2FBwpwmMQNJ741mQnODczFAfh2tj9BQhlz7bQ4MqjQv8GdnbU0PO%2BB46RR6hKOleGmGw3dVj1fwyhZ4O6RUtpoO8laikksxdk4waYM4ipfq1rbgE1Cw1bn%2BBvML2Wp6fSclF76ETDLurSrhlNYhcQF1d9Ha2TCVkO%2B8BjqkAZTphYXDP9ucPRW8Mcj0uYFPQMGORfRhLY2BVjNhQ6kbF2QO1RbNh9jv26NPC89KLNsqMl4vnN%2BQyq2IXJV9TQRY4W3GBH7WSZBMUa2Y4ucEezdgfRGPdDbuEZ3M%2FdeQ7Q%2Fw9e%2FPgqfoL9GIFzlwMN7vMehXJ7uILOvfwZGvGz4VOZahZVVCL6ORF2I9f9QAHXakbpJF1BPygxnZTfCOJSXIJQvs&X-Amz-Signature=dde501b409215780fa796f874efed5eb3d36f4f448dd789e92d996dc89c59959&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NURUK7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX8W74445tveJ9F5SdWnKQFarCvn0X3zq8qNkzLcF5AAIhAOONrMdKutXAOcEXuRqOEG5nLi9FYHoUbMCoTE4LUmbRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnfVRvINwO9%2BON2Swq3APhg7%2BqA1T23uUlgop7lyp7C0Eq%2Fbgcd5nk%2B%2F1Dln7pBg45D%2Bb54rhKzUUo6Ky7SM%2Bkrnt0SWfRUBb0Pmkq2dS3epaKA3J9K082mU5ka6AG2L%2B%2BrQo3mrzN%2BadNY%2BUyp%2BwK9Ilyaxie8TuQPMwLStmYH0NiwGViCY2EyhOr70FN%2FQi6m7OEtvUiCTIMbO5ujJa4V3S5FtKB9WNYT68t5E1YDUJWd%2F74nstOH4vq1p40wbpUHufojus2f839s3toNboxRK8aNim9gETZLc9TzGvpOoWm0h%2FOmSKfZ8yG4PJwSGytlRWXGTGI4TV2VAekVwsDXD1vsnog22gNG836xEMmFAqu9ycoEiISyD8ZQ%2FMi5a6ZlOrTD7wvhIdx5QhhR%2FBQOki0QiB0xdZry0ZiZE4o69QWb2DfO253MOY%2FTaSxTsXhj6JWKi3wC5745bEY7MiFWGgmh%2BcPGYWkmOIO4Syhbp%2FfC%2FUfc9%2FBwpwmMQNJ741mQnODczFAfh2tj9BQhlz7bQ4MqjQv8GdnbU0PO%2BB46RR6hKOleGmGw3dVj1fwyhZ4O6RUtpoO8laikksxdk4waYM4ipfq1rbgE1Cw1bn%2BBvML2Wp6fSclF76ETDLurSrhlNYhcQF1d9Ha2TCVkO%2B8BjqkAZTphYXDP9ucPRW8Mcj0uYFPQMGORfRhLY2BVjNhQ6kbF2QO1RbNh9jv26NPC89KLNsqMl4vnN%2BQyq2IXJV9TQRY4W3GBH7WSZBMUa2Y4ucEezdgfRGPdDbuEZ3M%2FdeQ7Q%2Fw9e%2FPgqfoL9GIFzlwMN7vMehXJ7uILOvfwZGvGz4VOZahZVVCL6ORF2I9f9QAHXakbpJF1BPygxnZTfCOJSXIJQvs&X-Amz-Signature=7d89b4f9d78df9cc67d32c6982e6db4f8aa2dc17653e233bc03aedaa481d20a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NURUK7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX8W74445tveJ9F5SdWnKQFarCvn0X3zq8qNkzLcF5AAIhAOONrMdKutXAOcEXuRqOEG5nLi9FYHoUbMCoTE4LUmbRKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnfVRvINwO9%2BON2Swq3APhg7%2BqA1T23uUlgop7lyp7C0Eq%2Fbgcd5nk%2B%2F1Dln7pBg45D%2Bb54rhKzUUo6Ky7SM%2Bkrnt0SWfRUBb0Pmkq2dS3epaKA3J9K082mU5ka6AG2L%2B%2BrQo3mrzN%2BadNY%2BUyp%2BwK9Ilyaxie8TuQPMwLStmYH0NiwGViCY2EyhOr70FN%2FQi6m7OEtvUiCTIMbO5ujJa4V3S5FtKB9WNYT68t5E1YDUJWd%2F74nstOH4vq1p40wbpUHufojus2f839s3toNboxRK8aNim9gETZLc9TzGvpOoWm0h%2FOmSKfZ8yG4PJwSGytlRWXGTGI4TV2VAekVwsDXD1vsnog22gNG836xEMmFAqu9ycoEiISyD8ZQ%2FMi5a6ZlOrTD7wvhIdx5QhhR%2FBQOki0QiB0xdZry0ZiZE4o69QWb2DfO253MOY%2FTaSxTsXhj6JWKi3wC5745bEY7MiFWGgmh%2BcPGYWkmOIO4Syhbp%2FfC%2FUfc9%2FBwpwmMQNJ741mQnODczFAfh2tj9BQhlz7bQ4MqjQv8GdnbU0PO%2BB46RR6hKOleGmGw3dVj1fwyhZ4O6RUtpoO8laikksxdk4waYM4ipfq1rbgE1Cw1bn%2BBvML2Wp6fSclF76ETDLurSrhlNYhcQF1d9Ha2TCVkO%2B8BjqkAZTphYXDP9ucPRW8Mcj0uYFPQMGORfRhLY2BVjNhQ6kbF2QO1RbNh9jv26NPC89KLNsqMl4vnN%2BQyq2IXJV9TQRY4W3GBH7WSZBMUa2Y4ucEezdgfRGPdDbuEZ3M%2FdeQ7Q%2Fw9e%2FPgqfoL9GIFzlwMN7vMehXJ7uILOvfwZGvGz4VOZahZVVCL6ORF2I9f9QAHXakbpJF1BPygxnZTfCOJSXIJQvs&X-Amz-Signature=e693b142576af1354436fb4e575c9dfa9eec380cd4af4fa0461a158b319410ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
