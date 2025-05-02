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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU2CDHM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCx3NRt5ua0VXp16hMCMi1rsF5UZATbKoMCocS%2F6a7dRQIgTabEUKOutp7RD2Ckv%2BEIT74NF0Ba%2FKCga597ccbQmiYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1G%2FJouWxZ8gVU9BSrcA3c%2FjN%2BJaCbD2%2F9C1VDr4GKTqXT60dOVYBYe1Se3opzRTggV7QAhvkauX%2BXQXHs6AvSwU62oHxXvW0icg09tcI7w%2FrewUGDNpichiDSgRf8IFZiGuAUUj4VL9mtaRAfUzrjM0pmR4m1hrLs8sdAKA1qBOZO0BGiCOe7NcIH6R7tURhR6wLa2o%2FGmYcRt%2BDjagIaqQ9%2Bshegm0b1z9KMQa4S8ybtZy6khCbwZ%2FbJ6uj9g28px0gWnkUf0Fn03rXgMu3Dq2WrBQnBKCwrXk2mo8Si2JL3ORFBFMW3gHqS7OLffDow1S7YtYIK0%2FaoP68kH6JWoNYkwEN49VGwXZ%2Bp5yoWU1ReB8jBkIvkgAgCtnF%2BNNx8AlSV6FNtyBiZS5oMqMGGBN9TCchbfvYePKFvNOyqMkxXlJ4DflO9wVwr%2FGA2t2sm2nxUbBM%2FAhcG9Xtx9oE48Mm1YLYhpzf1EIUe7CcOBRKSBkcHO4kIxNnovrGDQpvj%2B0sPvjiYJNweItZKHyKKKznY6QBqGMx6Bd1%2FgbCFUBlMIzualh6YvHx%2B05G6WBSnIL47MYcGvP4EUrn9bm0O5OX0I6oRTTUNGi0YkAETdWrtXY1NdhFFptXTYrLpfCDioswLW8hC4pKkHMLap0sAGOqUBaM2T3bZKHAw7NZjjHw9TcApqvnUflr2Lp9fv%2FvMnacWybrKx0CvhEi9d7x6hFlCzNYSUqCs6LqIkDSX3IbMkwWtpc%2BBmwnshq6c9s8l0o8IbcQ2SVQwOXTA0OsLlFmGDkF09EstXpi2dwFLGpVkKfVVC%2FfRhewP7Jxi9KUzWTjutoYp35Sg3uY6BBuTm9rhPfXsaYj7Ar5n5%2B1o%2BPbMPXZwG2QnC&X-Amz-Signature=988ca236f363153f942dfa7048a80abdc7578d4816be3d6974037f3b1ac478ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU2CDHM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCx3NRt5ua0VXp16hMCMi1rsF5UZATbKoMCocS%2F6a7dRQIgTabEUKOutp7RD2Ckv%2BEIT74NF0Ba%2FKCga597ccbQmiYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1G%2FJouWxZ8gVU9BSrcA3c%2FjN%2BJaCbD2%2F9C1VDr4GKTqXT60dOVYBYe1Se3opzRTggV7QAhvkauX%2BXQXHs6AvSwU62oHxXvW0icg09tcI7w%2FrewUGDNpichiDSgRf8IFZiGuAUUj4VL9mtaRAfUzrjM0pmR4m1hrLs8sdAKA1qBOZO0BGiCOe7NcIH6R7tURhR6wLa2o%2FGmYcRt%2BDjagIaqQ9%2Bshegm0b1z9KMQa4S8ybtZy6khCbwZ%2FbJ6uj9g28px0gWnkUf0Fn03rXgMu3Dq2WrBQnBKCwrXk2mo8Si2JL3ORFBFMW3gHqS7OLffDow1S7YtYIK0%2FaoP68kH6JWoNYkwEN49VGwXZ%2Bp5yoWU1ReB8jBkIvkgAgCtnF%2BNNx8AlSV6FNtyBiZS5oMqMGGBN9TCchbfvYePKFvNOyqMkxXlJ4DflO9wVwr%2FGA2t2sm2nxUbBM%2FAhcG9Xtx9oE48Mm1YLYhpzf1EIUe7CcOBRKSBkcHO4kIxNnovrGDQpvj%2B0sPvjiYJNweItZKHyKKKznY6QBqGMx6Bd1%2FgbCFUBlMIzualh6YvHx%2B05G6WBSnIL47MYcGvP4EUrn9bm0O5OX0I6oRTTUNGi0YkAETdWrtXY1NdhFFptXTYrLpfCDioswLW8hC4pKkHMLap0sAGOqUBaM2T3bZKHAw7NZjjHw9TcApqvnUflr2Lp9fv%2FvMnacWybrKx0CvhEi9d7x6hFlCzNYSUqCs6LqIkDSX3IbMkwWtpc%2BBmwnshq6c9s8l0o8IbcQ2SVQwOXTA0OsLlFmGDkF09EstXpi2dwFLGpVkKfVVC%2FfRhewP7Jxi9KUzWTjutoYp35Sg3uY6BBuTm9rhPfXsaYj7Ar5n5%2B1o%2BPbMPXZwG2QnC&X-Amz-Signature=d370a911d29e215d38d83e4c7834a303e3a02dd9cac19f0edbb7ce9a80b2f392&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU2CDHM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCx3NRt5ua0VXp16hMCMi1rsF5UZATbKoMCocS%2F6a7dRQIgTabEUKOutp7RD2Ckv%2BEIT74NF0Ba%2FKCga597ccbQmiYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1G%2FJouWxZ8gVU9BSrcA3c%2FjN%2BJaCbD2%2F9C1VDr4GKTqXT60dOVYBYe1Se3opzRTggV7QAhvkauX%2BXQXHs6AvSwU62oHxXvW0icg09tcI7w%2FrewUGDNpichiDSgRf8IFZiGuAUUj4VL9mtaRAfUzrjM0pmR4m1hrLs8sdAKA1qBOZO0BGiCOe7NcIH6R7tURhR6wLa2o%2FGmYcRt%2BDjagIaqQ9%2Bshegm0b1z9KMQa4S8ybtZy6khCbwZ%2FbJ6uj9g28px0gWnkUf0Fn03rXgMu3Dq2WrBQnBKCwrXk2mo8Si2JL3ORFBFMW3gHqS7OLffDow1S7YtYIK0%2FaoP68kH6JWoNYkwEN49VGwXZ%2Bp5yoWU1ReB8jBkIvkgAgCtnF%2BNNx8AlSV6FNtyBiZS5oMqMGGBN9TCchbfvYePKFvNOyqMkxXlJ4DflO9wVwr%2FGA2t2sm2nxUbBM%2FAhcG9Xtx9oE48Mm1YLYhpzf1EIUe7CcOBRKSBkcHO4kIxNnovrGDQpvj%2B0sPvjiYJNweItZKHyKKKznY6QBqGMx6Bd1%2FgbCFUBlMIzualh6YvHx%2B05G6WBSnIL47MYcGvP4EUrn9bm0O5OX0I6oRTTUNGi0YkAETdWrtXY1NdhFFptXTYrLpfCDioswLW8hC4pKkHMLap0sAGOqUBaM2T3bZKHAw7NZjjHw9TcApqvnUflr2Lp9fv%2FvMnacWybrKx0CvhEi9d7x6hFlCzNYSUqCs6LqIkDSX3IbMkwWtpc%2BBmwnshq6c9s8l0o8IbcQ2SVQwOXTA0OsLlFmGDkF09EstXpi2dwFLGpVkKfVVC%2FfRhewP7Jxi9KUzWTjutoYp35Sg3uY6BBuTm9rhPfXsaYj7Ar5n5%2B1o%2BPbMPXZwG2QnC&X-Amz-Signature=f6ee3bd3e13c1350b15df4f0862ac1e36b97b9b2e88146dca470e0b668c0561e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU2CDHM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCx3NRt5ua0VXp16hMCMi1rsF5UZATbKoMCocS%2F6a7dRQIgTabEUKOutp7RD2Ckv%2BEIT74NF0Ba%2FKCga597ccbQmiYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1G%2FJouWxZ8gVU9BSrcA3c%2FjN%2BJaCbD2%2F9C1VDr4GKTqXT60dOVYBYe1Se3opzRTggV7QAhvkauX%2BXQXHs6AvSwU62oHxXvW0icg09tcI7w%2FrewUGDNpichiDSgRf8IFZiGuAUUj4VL9mtaRAfUzrjM0pmR4m1hrLs8sdAKA1qBOZO0BGiCOe7NcIH6R7tURhR6wLa2o%2FGmYcRt%2BDjagIaqQ9%2Bshegm0b1z9KMQa4S8ybtZy6khCbwZ%2FbJ6uj9g28px0gWnkUf0Fn03rXgMu3Dq2WrBQnBKCwrXk2mo8Si2JL3ORFBFMW3gHqS7OLffDow1S7YtYIK0%2FaoP68kH6JWoNYkwEN49VGwXZ%2Bp5yoWU1ReB8jBkIvkgAgCtnF%2BNNx8AlSV6FNtyBiZS5oMqMGGBN9TCchbfvYePKFvNOyqMkxXlJ4DflO9wVwr%2FGA2t2sm2nxUbBM%2FAhcG9Xtx9oE48Mm1YLYhpzf1EIUe7CcOBRKSBkcHO4kIxNnovrGDQpvj%2B0sPvjiYJNweItZKHyKKKznY6QBqGMx6Bd1%2FgbCFUBlMIzualh6YvHx%2B05G6WBSnIL47MYcGvP4EUrn9bm0O5OX0I6oRTTUNGi0YkAETdWrtXY1NdhFFptXTYrLpfCDioswLW8hC4pKkHMLap0sAGOqUBaM2T3bZKHAw7NZjjHw9TcApqvnUflr2Lp9fv%2FvMnacWybrKx0CvhEi9d7x6hFlCzNYSUqCs6LqIkDSX3IbMkwWtpc%2BBmwnshq6c9s8l0o8IbcQ2SVQwOXTA0OsLlFmGDkF09EstXpi2dwFLGpVkKfVVC%2FfRhewP7Jxi9KUzWTjutoYp35Sg3uY6BBuTm9rhPfXsaYj7Ar5n5%2B1o%2BPbMPXZwG2QnC&X-Amz-Signature=489d3d654e3466cddd0f7dedeb9bd9de79604ab74003bf01aec0b022213cb680&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU2CDHM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCx3NRt5ua0VXp16hMCMi1rsF5UZATbKoMCocS%2F6a7dRQIgTabEUKOutp7RD2Ckv%2BEIT74NF0Ba%2FKCga597ccbQmiYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1G%2FJouWxZ8gVU9BSrcA3c%2FjN%2BJaCbD2%2F9C1VDr4GKTqXT60dOVYBYe1Se3opzRTggV7QAhvkauX%2BXQXHs6AvSwU62oHxXvW0icg09tcI7w%2FrewUGDNpichiDSgRf8IFZiGuAUUj4VL9mtaRAfUzrjM0pmR4m1hrLs8sdAKA1qBOZO0BGiCOe7NcIH6R7tURhR6wLa2o%2FGmYcRt%2BDjagIaqQ9%2Bshegm0b1z9KMQa4S8ybtZy6khCbwZ%2FbJ6uj9g28px0gWnkUf0Fn03rXgMu3Dq2WrBQnBKCwrXk2mo8Si2JL3ORFBFMW3gHqS7OLffDow1S7YtYIK0%2FaoP68kH6JWoNYkwEN49VGwXZ%2Bp5yoWU1ReB8jBkIvkgAgCtnF%2BNNx8AlSV6FNtyBiZS5oMqMGGBN9TCchbfvYePKFvNOyqMkxXlJ4DflO9wVwr%2FGA2t2sm2nxUbBM%2FAhcG9Xtx9oE48Mm1YLYhpzf1EIUe7CcOBRKSBkcHO4kIxNnovrGDQpvj%2B0sPvjiYJNweItZKHyKKKznY6QBqGMx6Bd1%2FgbCFUBlMIzualh6YvHx%2B05G6WBSnIL47MYcGvP4EUrn9bm0O5OX0I6oRTTUNGi0YkAETdWrtXY1NdhFFptXTYrLpfCDioswLW8hC4pKkHMLap0sAGOqUBaM2T3bZKHAw7NZjjHw9TcApqvnUflr2Lp9fv%2FvMnacWybrKx0CvhEi9d7x6hFlCzNYSUqCs6LqIkDSX3IbMkwWtpc%2BBmwnshq6c9s8l0o8IbcQ2SVQwOXTA0OsLlFmGDkF09EstXpi2dwFLGpVkKfVVC%2FfRhewP7Jxi9KUzWTjutoYp35Sg3uY6BBuTm9rhPfXsaYj7Ar5n5%2B1o%2BPbMPXZwG2QnC&X-Amz-Signature=97d4980e7575af152fe29a5cabb98df81ec1bae2e0cb6be6235af1142da283d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU2CDHM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCx3NRt5ua0VXp16hMCMi1rsF5UZATbKoMCocS%2F6a7dRQIgTabEUKOutp7RD2Ckv%2BEIT74NF0Ba%2FKCga597ccbQmiYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1G%2FJouWxZ8gVU9BSrcA3c%2FjN%2BJaCbD2%2F9C1VDr4GKTqXT60dOVYBYe1Se3opzRTggV7QAhvkauX%2BXQXHs6AvSwU62oHxXvW0icg09tcI7w%2FrewUGDNpichiDSgRf8IFZiGuAUUj4VL9mtaRAfUzrjM0pmR4m1hrLs8sdAKA1qBOZO0BGiCOe7NcIH6R7tURhR6wLa2o%2FGmYcRt%2BDjagIaqQ9%2Bshegm0b1z9KMQa4S8ybtZy6khCbwZ%2FbJ6uj9g28px0gWnkUf0Fn03rXgMu3Dq2WrBQnBKCwrXk2mo8Si2JL3ORFBFMW3gHqS7OLffDow1S7YtYIK0%2FaoP68kH6JWoNYkwEN49VGwXZ%2Bp5yoWU1ReB8jBkIvkgAgCtnF%2BNNx8AlSV6FNtyBiZS5oMqMGGBN9TCchbfvYePKFvNOyqMkxXlJ4DflO9wVwr%2FGA2t2sm2nxUbBM%2FAhcG9Xtx9oE48Mm1YLYhpzf1EIUe7CcOBRKSBkcHO4kIxNnovrGDQpvj%2B0sPvjiYJNweItZKHyKKKznY6QBqGMx6Bd1%2FgbCFUBlMIzualh6YvHx%2B05G6WBSnIL47MYcGvP4EUrn9bm0O5OX0I6oRTTUNGi0YkAETdWrtXY1NdhFFptXTYrLpfCDioswLW8hC4pKkHMLap0sAGOqUBaM2T3bZKHAw7NZjjHw9TcApqvnUflr2Lp9fv%2FvMnacWybrKx0CvhEi9d7x6hFlCzNYSUqCs6LqIkDSX3IbMkwWtpc%2BBmwnshq6c9s8l0o8IbcQ2SVQwOXTA0OsLlFmGDkF09EstXpi2dwFLGpVkKfVVC%2FfRhewP7Jxi9KUzWTjutoYp35Sg3uY6BBuTm9rhPfXsaYj7Ar5n5%2B1o%2BPbMPXZwG2QnC&X-Amz-Signature=0d4478e5051d28ed661f54e260db67e6297b771d585f481b68b660c5de6db93a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU2CDHM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCx3NRt5ua0VXp16hMCMi1rsF5UZATbKoMCocS%2F6a7dRQIgTabEUKOutp7RD2Ckv%2BEIT74NF0Ba%2FKCga597ccbQmiYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1G%2FJouWxZ8gVU9BSrcA3c%2FjN%2BJaCbD2%2F9C1VDr4GKTqXT60dOVYBYe1Se3opzRTggV7QAhvkauX%2BXQXHs6AvSwU62oHxXvW0icg09tcI7w%2FrewUGDNpichiDSgRf8IFZiGuAUUj4VL9mtaRAfUzrjM0pmR4m1hrLs8sdAKA1qBOZO0BGiCOe7NcIH6R7tURhR6wLa2o%2FGmYcRt%2BDjagIaqQ9%2Bshegm0b1z9KMQa4S8ybtZy6khCbwZ%2FbJ6uj9g28px0gWnkUf0Fn03rXgMu3Dq2WrBQnBKCwrXk2mo8Si2JL3ORFBFMW3gHqS7OLffDow1S7YtYIK0%2FaoP68kH6JWoNYkwEN49VGwXZ%2Bp5yoWU1ReB8jBkIvkgAgCtnF%2BNNx8AlSV6FNtyBiZS5oMqMGGBN9TCchbfvYePKFvNOyqMkxXlJ4DflO9wVwr%2FGA2t2sm2nxUbBM%2FAhcG9Xtx9oE48Mm1YLYhpzf1EIUe7CcOBRKSBkcHO4kIxNnovrGDQpvj%2B0sPvjiYJNweItZKHyKKKznY6QBqGMx6Bd1%2FgbCFUBlMIzualh6YvHx%2B05G6WBSnIL47MYcGvP4EUrn9bm0O5OX0I6oRTTUNGi0YkAETdWrtXY1NdhFFptXTYrLpfCDioswLW8hC4pKkHMLap0sAGOqUBaM2T3bZKHAw7NZjjHw9TcApqvnUflr2Lp9fv%2FvMnacWybrKx0CvhEi9d7x6hFlCzNYSUqCs6LqIkDSX3IbMkwWtpc%2BBmwnshq6c9s8l0o8IbcQ2SVQwOXTA0OsLlFmGDkF09EstXpi2dwFLGpVkKfVVC%2FfRhewP7Jxi9KUzWTjutoYp35Sg3uY6BBuTm9rhPfXsaYj7Ar5n5%2B1o%2BPbMPXZwG2QnC&X-Amz-Signature=6f204ce79872354c9657f104a61b840327e580a49eb69f57c883b2b1f2da4a99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WU2CDHM%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCx3NRt5ua0VXp16hMCMi1rsF5UZATbKoMCocS%2F6a7dRQIgTabEUKOutp7RD2Ckv%2BEIT74NF0Ba%2FKCga597ccbQmiYqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1G%2FJouWxZ8gVU9BSrcA3c%2FjN%2BJaCbD2%2F9C1VDr4GKTqXT60dOVYBYe1Se3opzRTggV7QAhvkauX%2BXQXHs6AvSwU62oHxXvW0icg09tcI7w%2FrewUGDNpichiDSgRf8IFZiGuAUUj4VL9mtaRAfUzrjM0pmR4m1hrLs8sdAKA1qBOZO0BGiCOe7NcIH6R7tURhR6wLa2o%2FGmYcRt%2BDjagIaqQ9%2Bshegm0b1z9KMQa4S8ybtZy6khCbwZ%2FbJ6uj9g28px0gWnkUf0Fn03rXgMu3Dq2WrBQnBKCwrXk2mo8Si2JL3ORFBFMW3gHqS7OLffDow1S7YtYIK0%2FaoP68kH6JWoNYkwEN49VGwXZ%2Bp5yoWU1ReB8jBkIvkgAgCtnF%2BNNx8AlSV6FNtyBiZS5oMqMGGBN9TCchbfvYePKFvNOyqMkxXlJ4DflO9wVwr%2FGA2t2sm2nxUbBM%2FAhcG9Xtx9oE48Mm1YLYhpzf1EIUe7CcOBRKSBkcHO4kIxNnovrGDQpvj%2B0sPvjiYJNweItZKHyKKKznY6QBqGMx6Bd1%2FgbCFUBlMIzualh6YvHx%2B05G6WBSnIL47MYcGvP4EUrn9bm0O5OX0I6oRTTUNGi0YkAETdWrtXY1NdhFFptXTYrLpfCDioswLW8hC4pKkHMLap0sAGOqUBaM2T3bZKHAw7NZjjHw9TcApqvnUflr2Lp9fv%2FvMnacWybrKx0CvhEi9d7x6hFlCzNYSUqCs6LqIkDSX3IbMkwWtpc%2BBmwnshq6c9s8l0o8IbcQ2SVQwOXTA0OsLlFmGDkF09EstXpi2dwFLGpVkKfVVC%2FfRhewP7Jxi9KUzWTjutoYp35Sg3uY6BBuTm9rhPfXsaYj7Ar5n5%2B1o%2BPbMPXZwG2QnC&X-Amz-Signature=39788ec7ac94533854aedf645869871dce5c18a007f5f2bae30fc2fb2fa1eedb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
