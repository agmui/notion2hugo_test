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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4YDGUX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg9RsJwg4aOycEb8ORIP2xxHimfBYEoZh1QIfTdndABAiEAq1oL0Rmc9il54QReWwRzUl4HnNL8ywiMj3obfGTOdr4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDF68a%2BbFHE5qrGZoXSrcA%2Bnj8sK%2BrFUkb56VO6RC%2Ft90tx%2Bw2i9q3RhmdnjF37e6xVRNSAQ7BCN5EUDf%2FzSCb4aZyJQC8cNnVGnOYIlfFxOQt1GTPm624nA0nGzama6X5JXQ2mYCDSc9BNqC12pNcI1LGA%2BtJQGxqMxAzF19lzNG%2FR%2BFSPz5nmz3Ye0rOGCO2QuhBnNwbKXH8ELg24JXU0FUfxMRqJhrxFaoQZRIZul2hBj48X4HJ87%2BpIo95m4KEVjJFElnIwXKHSiKFWGDN8a1L6GntDrMFM%2BOKuvnP8yB4q9Q%2B0GVxKrRKzo61i6smBkPlW7VVxe2JlkHyls1HEcQ6hO9fOVBlV8Cjd6ThIWVQ4wJsJsmEhU7cgWtIvoK64NI8gUrARv3Z3E3hv9KJTyGwD3jFRVZz9KQONyv7hLSACZ5D0SJQLIegG7kgrqZQpf5n59GZuaKqawoW6eXouDmvABaSBHISEEBhinjhLj9rLkJDxLmH50grcIzZLKWcgTI1m2xalYZ%2B1yQV2GHSfpgtLQRulDzmPdast2u5Y2uZBP0unNeb3tMh9Bgkw2aQogSarJ4k6BK%2BKl8%2FgnlEPOb%2FiPKQs700%2BzgIMIwFCQCzzrQUzML%2FgLAqSEr%2FyvO71XrCWV8ZJ5dt0OtMMWC9r8GOqUB%2BAXqSIojCwTsRxI%2Bir88hfLNH0Eq4ejh%2FtNCCx9rUWjWTrAdZHnko7rQiQPz8Ik8R%2ByffAfIdMXhtNl6mW19qNznJo%2FBMkmojRoeX%2Fel0Xac8hMaC9qt1%2FuzPDP61wtygPB2VKSQFq2%2FHFT2FLh0dZtWsis52lriM%2F7GWOkvLne0emQFfUCLjrwbh1rpPK5%2FR3ZmNgNux6lAO%2Bj8fcev9oG7Ft%2B4&X-Amz-Signature=24b4d4166bd56fb3b5be9dd88bb3f14b64030cf0adff314e544e52f8e227b471&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4YDGUX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg9RsJwg4aOycEb8ORIP2xxHimfBYEoZh1QIfTdndABAiEAq1oL0Rmc9il54QReWwRzUl4HnNL8ywiMj3obfGTOdr4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDF68a%2BbFHE5qrGZoXSrcA%2Bnj8sK%2BrFUkb56VO6RC%2Ft90tx%2Bw2i9q3RhmdnjF37e6xVRNSAQ7BCN5EUDf%2FzSCb4aZyJQC8cNnVGnOYIlfFxOQt1GTPm624nA0nGzama6X5JXQ2mYCDSc9BNqC12pNcI1LGA%2BtJQGxqMxAzF19lzNG%2FR%2BFSPz5nmz3Ye0rOGCO2QuhBnNwbKXH8ELg24JXU0FUfxMRqJhrxFaoQZRIZul2hBj48X4HJ87%2BpIo95m4KEVjJFElnIwXKHSiKFWGDN8a1L6GntDrMFM%2BOKuvnP8yB4q9Q%2B0GVxKrRKzo61i6smBkPlW7VVxe2JlkHyls1HEcQ6hO9fOVBlV8Cjd6ThIWVQ4wJsJsmEhU7cgWtIvoK64NI8gUrARv3Z3E3hv9KJTyGwD3jFRVZz9KQONyv7hLSACZ5D0SJQLIegG7kgrqZQpf5n59GZuaKqawoW6eXouDmvABaSBHISEEBhinjhLj9rLkJDxLmH50grcIzZLKWcgTI1m2xalYZ%2B1yQV2GHSfpgtLQRulDzmPdast2u5Y2uZBP0unNeb3tMh9Bgkw2aQogSarJ4k6BK%2BKl8%2FgnlEPOb%2FiPKQs700%2BzgIMIwFCQCzzrQUzML%2FgLAqSEr%2FyvO71XrCWV8ZJ5dt0OtMMWC9r8GOqUB%2BAXqSIojCwTsRxI%2Bir88hfLNH0Eq4ejh%2FtNCCx9rUWjWTrAdZHnko7rQiQPz8Ik8R%2ByffAfIdMXhtNl6mW19qNznJo%2FBMkmojRoeX%2Fel0Xac8hMaC9qt1%2FuzPDP61wtygPB2VKSQFq2%2FHFT2FLh0dZtWsis52lriM%2F7GWOkvLne0emQFfUCLjrwbh1rpPK5%2FR3ZmNgNux6lAO%2Bj8fcev9oG7Ft%2B4&X-Amz-Signature=2e329c4eac76ff1c3c49091ba808d1d5863d2055f681396abb602162ffac177d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4YDGUX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg9RsJwg4aOycEb8ORIP2xxHimfBYEoZh1QIfTdndABAiEAq1oL0Rmc9il54QReWwRzUl4HnNL8ywiMj3obfGTOdr4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDF68a%2BbFHE5qrGZoXSrcA%2Bnj8sK%2BrFUkb56VO6RC%2Ft90tx%2Bw2i9q3RhmdnjF37e6xVRNSAQ7BCN5EUDf%2FzSCb4aZyJQC8cNnVGnOYIlfFxOQt1GTPm624nA0nGzama6X5JXQ2mYCDSc9BNqC12pNcI1LGA%2BtJQGxqMxAzF19lzNG%2FR%2BFSPz5nmz3Ye0rOGCO2QuhBnNwbKXH8ELg24JXU0FUfxMRqJhrxFaoQZRIZul2hBj48X4HJ87%2BpIo95m4KEVjJFElnIwXKHSiKFWGDN8a1L6GntDrMFM%2BOKuvnP8yB4q9Q%2B0GVxKrRKzo61i6smBkPlW7VVxe2JlkHyls1HEcQ6hO9fOVBlV8Cjd6ThIWVQ4wJsJsmEhU7cgWtIvoK64NI8gUrARv3Z3E3hv9KJTyGwD3jFRVZz9KQONyv7hLSACZ5D0SJQLIegG7kgrqZQpf5n59GZuaKqawoW6eXouDmvABaSBHISEEBhinjhLj9rLkJDxLmH50grcIzZLKWcgTI1m2xalYZ%2B1yQV2GHSfpgtLQRulDzmPdast2u5Y2uZBP0unNeb3tMh9Bgkw2aQogSarJ4k6BK%2BKl8%2FgnlEPOb%2FiPKQs700%2BzgIMIwFCQCzzrQUzML%2FgLAqSEr%2FyvO71XrCWV8ZJ5dt0OtMMWC9r8GOqUB%2BAXqSIojCwTsRxI%2Bir88hfLNH0Eq4ejh%2FtNCCx9rUWjWTrAdZHnko7rQiQPz8Ik8R%2ByffAfIdMXhtNl6mW19qNznJo%2FBMkmojRoeX%2Fel0Xac8hMaC9qt1%2FuzPDP61wtygPB2VKSQFq2%2FHFT2FLh0dZtWsis52lriM%2F7GWOkvLne0emQFfUCLjrwbh1rpPK5%2FR3ZmNgNux6lAO%2Bj8fcev9oG7Ft%2B4&X-Amz-Signature=131985eec55a406ef50976626a0b133ab13eac63543062a84e08e297e4c3d633&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4YDGUX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg9RsJwg4aOycEb8ORIP2xxHimfBYEoZh1QIfTdndABAiEAq1oL0Rmc9il54QReWwRzUl4HnNL8ywiMj3obfGTOdr4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDF68a%2BbFHE5qrGZoXSrcA%2Bnj8sK%2BrFUkb56VO6RC%2Ft90tx%2Bw2i9q3RhmdnjF37e6xVRNSAQ7BCN5EUDf%2FzSCb4aZyJQC8cNnVGnOYIlfFxOQt1GTPm624nA0nGzama6X5JXQ2mYCDSc9BNqC12pNcI1LGA%2BtJQGxqMxAzF19lzNG%2FR%2BFSPz5nmz3Ye0rOGCO2QuhBnNwbKXH8ELg24JXU0FUfxMRqJhrxFaoQZRIZul2hBj48X4HJ87%2BpIo95m4KEVjJFElnIwXKHSiKFWGDN8a1L6GntDrMFM%2BOKuvnP8yB4q9Q%2B0GVxKrRKzo61i6smBkPlW7VVxe2JlkHyls1HEcQ6hO9fOVBlV8Cjd6ThIWVQ4wJsJsmEhU7cgWtIvoK64NI8gUrARv3Z3E3hv9KJTyGwD3jFRVZz9KQONyv7hLSACZ5D0SJQLIegG7kgrqZQpf5n59GZuaKqawoW6eXouDmvABaSBHISEEBhinjhLj9rLkJDxLmH50grcIzZLKWcgTI1m2xalYZ%2B1yQV2GHSfpgtLQRulDzmPdast2u5Y2uZBP0unNeb3tMh9Bgkw2aQogSarJ4k6BK%2BKl8%2FgnlEPOb%2FiPKQs700%2BzgIMIwFCQCzzrQUzML%2FgLAqSEr%2FyvO71XrCWV8ZJ5dt0OtMMWC9r8GOqUB%2BAXqSIojCwTsRxI%2Bir88hfLNH0Eq4ejh%2FtNCCx9rUWjWTrAdZHnko7rQiQPz8Ik8R%2ByffAfIdMXhtNl6mW19qNznJo%2FBMkmojRoeX%2Fel0Xac8hMaC9qt1%2FuzPDP61wtygPB2VKSQFq2%2FHFT2FLh0dZtWsis52lriM%2F7GWOkvLne0emQFfUCLjrwbh1rpPK5%2FR3ZmNgNux6lAO%2Bj8fcev9oG7Ft%2B4&X-Amz-Signature=71e1f50504b0a6e74ed071ac931a84d877a2742ce37a8b2e967604ed0a1a3b30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4YDGUX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg9RsJwg4aOycEb8ORIP2xxHimfBYEoZh1QIfTdndABAiEAq1oL0Rmc9il54QReWwRzUl4HnNL8ywiMj3obfGTOdr4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDF68a%2BbFHE5qrGZoXSrcA%2Bnj8sK%2BrFUkb56VO6RC%2Ft90tx%2Bw2i9q3RhmdnjF37e6xVRNSAQ7BCN5EUDf%2FzSCb4aZyJQC8cNnVGnOYIlfFxOQt1GTPm624nA0nGzama6X5JXQ2mYCDSc9BNqC12pNcI1LGA%2BtJQGxqMxAzF19lzNG%2FR%2BFSPz5nmz3Ye0rOGCO2QuhBnNwbKXH8ELg24JXU0FUfxMRqJhrxFaoQZRIZul2hBj48X4HJ87%2BpIo95m4KEVjJFElnIwXKHSiKFWGDN8a1L6GntDrMFM%2BOKuvnP8yB4q9Q%2B0GVxKrRKzo61i6smBkPlW7VVxe2JlkHyls1HEcQ6hO9fOVBlV8Cjd6ThIWVQ4wJsJsmEhU7cgWtIvoK64NI8gUrARv3Z3E3hv9KJTyGwD3jFRVZz9KQONyv7hLSACZ5D0SJQLIegG7kgrqZQpf5n59GZuaKqawoW6eXouDmvABaSBHISEEBhinjhLj9rLkJDxLmH50grcIzZLKWcgTI1m2xalYZ%2B1yQV2GHSfpgtLQRulDzmPdast2u5Y2uZBP0unNeb3tMh9Bgkw2aQogSarJ4k6BK%2BKl8%2FgnlEPOb%2FiPKQs700%2BzgIMIwFCQCzzrQUzML%2FgLAqSEr%2FyvO71XrCWV8ZJ5dt0OtMMWC9r8GOqUB%2BAXqSIojCwTsRxI%2Bir88hfLNH0Eq4ejh%2FtNCCx9rUWjWTrAdZHnko7rQiQPz8Ik8R%2ByffAfIdMXhtNl6mW19qNznJo%2FBMkmojRoeX%2Fel0Xac8hMaC9qt1%2FuzPDP61wtygPB2VKSQFq2%2FHFT2FLh0dZtWsis52lriM%2F7GWOkvLne0emQFfUCLjrwbh1rpPK5%2FR3ZmNgNux6lAO%2Bj8fcev9oG7Ft%2B4&X-Amz-Signature=e54858548c51f3f05121ba88d2baf3232bffd475a9ffedecf3d9582a7549c69c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4YDGUX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg9RsJwg4aOycEb8ORIP2xxHimfBYEoZh1QIfTdndABAiEAq1oL0Rmc9il54QReWwRzUl4HnNL8ywiMj3obfGTOdr4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDF68a%2BbFHE5qrGZoXSrcA%2Bnj8sK%2BrFUkb56VO6RC%2Ft90tx%2Bw2i9q3RhmdnjF37e6xVRNSAQ7BCN5EUDf%2FzSCb4aZyJQC8cNnVGnOYIlfFxOQt1GTPm624nA0nGzama6X5JXQ2mYCDSc9BNqC12pNcI1LGA%2BtJQGxqMxAzF19lzNG%2FR%2BFSPz5nmz3Ye0rOGCO2QuhBnNwbKXH8ELg24JXU0FUfxMRqJhrxFaoQZRIZul2hBj48X4HJ87%2BpIo95m4KEVjJFElnIwXKHSiKFWGDN8a1L6GntDrMFM%2BOKuvnP8yB4q9Q%2B0GVxKrRKzo61i6smBkPlW7VVxe2JlkHyls1HEcQ6hO9fOVBlV8Cjd6ThIWVQ4wJsJsmEhU7cgWtIvoK64NI8gUrARv3Z3E3hv9KJTyGwD3jFRVZz9KQONyv7hLSACZ5D0SJQLIegG7kgrqZQpf5n59GZuaKqawoW6eXouDmvABaSBHISEEBhinjhLj9rLkJDxLmH50grcIzZLKWcgTI1m2xalYZ%2B1yQV2GHSfpgtLQRulDzmPdast2u5Y2uZBP0unNeb3tMh9Bgkw2aQogSarJ4k6BK%2BKl8%2FgnlEPOb%2FiPKQs700%2BzgIMIwFCQCzzrQUzML%2FgLAqSEr%2FyvO71XrCWV8ZJ5dt0OtMMWC9r8GOqUB%2BAXqSIojCwTsRxI%2Bir88hfLNH0Eq4ejh%2FtNCCx9rUWjWTrAdZHnko7rQiQPz8Ik8R%2ByffAfIdMXhtNl6mW19qNznJo%2FBMkmojRoeX%2Fel0Xac8hMaC9qt1%2FuzPDP61wtygPB2VKSQFq2%2FHFT2FLh0dZtWsis52lriM%2F7GWOkvLne0emQFfUCLjrwbh1rpPK5%2FR3ZmNgNux6lAO%2Bj8fcev9oG7Ft%2B4&X-Amz-Signature=5f4009c5664e2db5efc4c342beac244ee5379bf53a2296975bd40fb911123717&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4YDGUX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg9RsJwg4aOycEb8ORIP2xxHimfBYEoZh1QIfTdndABAiEAq1oL0Rmc9il54QReWwRzUl4HnNL8ywiMj3obfGTOdr4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDF68a%2BbFHE5qrGZoXSrcA%2Bnj8sK%2BrFUkb56VO6RC%2Ft90tx%2Bw2i9q3RhmdnjF37e6xVRNSAQ7BCN5EUDf%2FzSCb4aZyJQC8cNnVGnOYIlfFxOQt1GTPm624nA0nGzama6X5JXQ2mYCDSc9BNqC12pNcI1LGA%2BtJQGxqMxAzF19lzNG%2FR%2BFSPz5nmz3Ye0rOGCO2QuhBnNwbKXH8ELg24JXU0FUfxMRqJhrxFaoQZRIZul2hBj48X4HJ87%2BpIo95m4KEVjJFElnIwXKHSiKFWGDN8a1L6GntDrMFM%2BOKuvnP8yB4q9Q%2B0GVxKrRKzo61i6smBkPlW7VVxe2JlkHyls1HEcQ6hO9fOVBlV8Cjd6ThIWVQ4wJsJsmEhU7cgWtIvoK64NI8gUrARv3Z3E3hv9KJTyGwD3jFRVZz9KQONyv7hLSACZ5D0SJQLIegG7kgrqZQpf5n59GZuaKqawoW6eXouDmvABaSBHISEEBhinjhLj9rLkJDxLmH50grcIzZLKWcgTI1m2xalYZ%2B1yQV2GHSfpgtLQRulDzmPdast2u5Y2uZBP0unNeb3tMh9Bgkw2aQogSarJ4k6BK%2BKl8%2FgnlEPOb%2FiPKQs700%2BzgIMIwFCQCzzrQUzML%2FgLAqSEr%2FyvO71XrCWV8ZJ5dt0OtMMWC9r8GOqUB%2BAXqSIojCwTsRxI%2Bir88hfLNH0Eq4ejh%2FtNCCx9rUWjWTrAdZHnko7rQiQPz8Ik8R%2ByffAfIdMXhtNl6mW19qNznJo%2FBMkmojRoeX%2Fel0Xac8hMaC9qt1%2FuzPDP61wtygPB2VKSQFq2%2FHFT2FLh0dZtWsis52lriM%2F7GWOkvLne0emQFfUCLjrwbh1rpPK5%2FR3ZmNgNux6lAO%2Bj8fcev9oG7Ft%2B4&X-Amz-Signature=d1c41b6d45b19701c7c4a819186d3af6df839bf34e6e28a123aa8d5cd542f1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4YDGUX%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T220802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg9RsJwg4aOycEb8ORIP2xxHimfBYEoZh1QIfTdndABAiEAq1oL0Rmc9il54QReWwRzUl4HnNL8ywiMj3obfGTOdr4q%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDF68a%2BbFHE5qrGZoXSrcA%2Bnj8sK%2BrFUkb56VO6RC%2Ft90tx%2Bw2i9q3RhmdnjF37e6xVRNSAQ7BCN5EUDf%2FzSCb4aZyJQC8cNnVGnOYIlfFxOQt1GTPm624nA0nGzama6X5JXQ2mYCDSc9BNqC12pNcI1LGA%2BtJQGxqMxAzF19lzNG%2FR%2BFSPz5nmz3Ye0rOGCO2QuhBnNwbKXH8ELg24JXU0FUfxMRqJhrxFaoQZRIZul2hBj48X4HJ87%2BpIo95m4KEVjJFElnIwXKHSiKFWGDN8a1L6GntDrMFM%2BOKuvnP8yB4q9Q%2B0GVxKrRKzo61i6smBkPlW7VVxe2JlkHyls1HEcQ6hO9fOVBlV8Cjd6ThIWVQ4wJsJsmEhU7cgWtIvoK64NI8gUrARv3Z3E3hv9KJTyGwD3jFRVZz9KQONyv7hLSACZ5D0SJQLIegG7kgrqZQpf5n59GZuaKqawoW6eXouDmvABaSBHISEEBhinjhLj9rLkJDxLmH50grcIzZLKWcgTI1m2xalYZ%2B1yQV2GHSfpgtLQRulDzmPdast2u5Y2uZBP0unNeb3tMh9Bgkw2aQogSarJ4k6BK%2BKl8%2FgnlEPOb%2FiPKQs700%2BzgIMIwFCQCzzrQUzML%2FgLAqSEr%2FyvO71XrCWV8ZJ5dt0OtMMWC9r8GOqUB%2BAXqSIojCwTsRxI%2Bir88hfLNH0Eq4ejh%2FtNCCx9rUWjWTrAdZHnko7rQiQPz8Ik8R%2ByffAfIdMXhtNl6mW19qNznJo%2FBMkmojRoeX%2Fel0Xac8hMaC9qt1%2FuzPDP61wtygPB2VKSQFq2%2FHFT2FLh0dZtWsis52lriM%2F7GWOkvLne0emQFfUCLjrwbh1rpPK5%2FR3ZmNgNux6lAO%2Bj8fcev9oG7Ft%2B4&X-Amz-Signature=f94404aab5649ad268a811f4be9b12a5c2e966b4617a985694887b747bb744f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
