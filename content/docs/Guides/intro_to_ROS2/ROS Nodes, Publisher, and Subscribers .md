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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ETFIL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD9Ia80Ngb2Ix4wfSufqDuINkesawRRRH%2FmHSjw%2FpwCBwIgHjGdE6W69eSX9z65t8wIGReweKKye%2BQ4gXRfywZevWQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDISqFpLqvSxrSXSrTCrcA64NwC9MFOlNZI4ipZBLh9PDItbKwcwPGQDldsfKD26rSFyiKiMq8J0k%2FSjhnjR2Uv05NF9Mpu6kvRrj9yxT7KR%2BvYahwPV8cGAtkZi86n9PHCGIWJOT%2FJHJWvOsJt5IZKn2hbReGxLGBWvSEdFeAgEem6HbVv58E394ez5YNoBf%2F%2BEmr7mXUMHAnEiOnJ0PQdYEsIP2nDt8JDkMcVsT9E%2FKJEHeTqnfW2URkd5NFH20dq7LYy6nC7KbucpyKZIscPf8tXj72ZZA6AUUE8S1SUwiYx8rVVgFGIdxTC7H1uncNs8KdfKCv221%2B5bEPfEopYCZQnYoDiHDAR0%2BQkzKSzasRIKbfXQdY8Pg%2BgYmDP1iMxKhTnjtYdo9d0%2B3%2BdDVN2MzfdQorxN8koOhjCpGrW1RewxLf%2FnHgkOwidDTe30oP60rBO%2BgS13PIcQ%2BdIGPmlaGdQN62muaEqpQGy9CPfjtwF3H3qN9KGJoGKVdCcpmKiiX19qg%2FQceKtQfnDr1sc6iUTQVHUEym94EKKcgYZ2hFy0mHD24mPWqUxrckVpQTQyCJQ9ckdtZd5WXcKW%2Bn90B12pTTmdCaTwiQfTqB5OwojuOmLNFK8cZgUlcVoMFspO4mIw4Iognx5RWML731cMGOqUBQAgFkA36DzCjcI3Eot3Vs9YoDDGE0NVCxQOynAO2xQtEocv3JeDfJJt%2FzXvCfNKXoLAzaNsVxCf7He2J%2F5LEiWcpLQ1lrF7LRBqIYKGKdnt1YU2%2BNRsjAg9O4zuixrpJ5676YnH8SekWDa%2FABVj3e%2FRs3a304ViUOeUD%2Bv8Nx92FEWh1OnV3BvfyuB92YAlYp7Rj%2FGyU2NOpnOTTwb5xvjdk1A3T&X-Amz-Signature=141ce134dfd989446ce9bc688a10223aeea251abc9b998ff25c531c2be46aaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ETFIL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD9Ia80Ngb2Ix4wfSufqDuINkesawRRRH%2FmHSjw%2FpwCBwIgHjGdE6W69eSX9z65t8wIGReweKKye%2BQ4gXRfywZevWQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDISqFpLqvSxrSXSrTCrcA64NwC9MFOlNZI4ipZBLh9PDItbKwcwPGQDldsfKD26rSFyiKiMq8J0k%2FSjhnjR2Uv05NF9Mpu6kvRrj9yxT7KR%2BvYahwPV8cGAtkZi86n9PHCGIWJOT%2FJHJWvOsJt5IZKn2hbReGxLGBWvSEdFeAgEem6HbVv58E394ez5YNoBf%2F%2BEmr7mXUMHAnEiOnJ0PQdYEsIP2nDt8JDkMcVsT9E%2FKJEHeTqnfW2URkd5NFH20dq7LYy6nC7KbucpyKZIscPf8tXj72ZZA6AUUE8S1SUwiYx8rVVgFGIdxTC7H1uncNs8KdfKCv221%2B5bEPfEopYCZQnYoDiHDAR0%2BQkzKSzasRIKbfXQdY8Pg%2BgYmDP1iMxKhTnjtYdo9d0%2B3%2BdDVN2MzfdQorxN8koOhjCpGrW1RewxLf%2FnHgkOwidDTe30oP60rBO%2BgS13PIcQ%2BdIGPmlaGdQN62muaEqpQGy9CPfjtwF3H3qN9KGJoGKVdCcpmKiiX19qg%2FQceKtQfnDr1sc6iUTQVHUEym94EKKcgYZ2hFy0mHD24mPWqUxrckVpQTQyCJQ9ckdtZd5WXcKW%2Bn90B12pTTmdCaTwiQfTqB5OwojuOmLNFK8cZgUlcVoMFspO4mIw4Iognx5RWML731cMGOqUBQAgFkA36DzCjcI3Eot3Vs9YoDDGE0NVCxQOynAO2xQtEocv3JeDfJJt%2FzXvCfNKXoLAzaNsVxCf7He2J%2F5LEiWcpLQ1lrF7LRBqIYKGKdnt1YU2%2BNRsjAg9O4zuixrpJ5676YnH8SekWDa%2FABVj3e%2FRs3a304ViUOeUD%2Bv8Nx92FEWh1OnV3BvfyuB92YAlYp7Rj%2FGyU2NOpnOTTwb5xvjdk1A3T&X-Amz-Signature=5170db72a4f88126ee56e8ac14b28fcbc5820f3eea10050fae33a50dced39cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ETFIL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD9Ia80Ngb2Ix4wfSufqDuINkesawRRRH%2FmHSjw%2FpwCBwIgHjGdE6W69eSX9z65t8wIGReweKKye%2BQ4gXRfywZevWQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDISqFpLqvSxrSXSrTCrcA64NwC9MFOlNZI4ipZBLh9PDItbKwcwPGQDldsfKD26rSFyiKiMq8J0k%2FSjhnjR2Uv05NF9Mpu6kvRrj9yxT7KR%2BvYahwPV8cGAtkZi86n9PHCGIWJOT%2FJHJWvOsJt5IZKn2hbReGxLGBWvSEdFeAgEem6HbVv58E394ez5YNoBf%2F%2BEmr7mXUMHAnEiOnJ0PQdYEsIP2nDt8JDkMcVsT9E%2FKJEHeTqnfW2URkd5NFH20dq7LYy6nC7KbucpyKZIscPf8tXj72ZZA6AUUE8S1SUwiYx8rVVgFGIdxTC7H1uncNs8KdfKCv221%2B5bEPfEopYCZQnYoDiHDAR0%2BQkzKSzasRIKbfXQdY8Pg%2BgYmDP1iMxKhTnjtYdo9d0%2B3%2BdDVN2MzfdQorxN8koOhjCpGrW1RewxLf%2FnHgkOwidDTe30oP60rBO%2BgS13PIcQ%2BdIGPmlaGdQN62muaEqpQGy9CPfjtwF3H3qN9KGJoGKVdCcpmKiiX19qg%2FQceKtQfnDr1sc6iUTQVHUEym94EKKcgYZ2hFy0mHD24mPWqUxrckVpQTQyCJQ9ckdtZd5WXcKW%2Bn90B12pTTmdCaTwiQfTqB5OwojuOmLNFK8cZgUlcVoMFspO4mIw4Iognx5RWML731cMGOqUBQAgFkA36DzCjcI3Eot3Vs9YoDDGE0NVCxQOynAO2xQtEocv3JeDfJJt%2FzXvCfNKXoLAzaNsVxCf7He2J%2F5LEiWcpLQ1lrF7LRBqIYKGKdnt1YU2%2BNRsjAg9O4zuixrpJ5676YnH8SekWDa%2FABVj3e%2FRs3a304ViUOeUD%2Bv8Nx92FEWh1OnV3BvfyuB92YAlYp7Rj%2FGyU2NOpnOTTwb5xvjdk1A3T&X-Amz-Signature=3fa221d8f74a8ec2dcd1639c5aad752953544a37c2640829fb6a88a91f487599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ETFIL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD9Ia80Ngb2Ix4wfSufqDuINkesawRRRH%2FmHSjw%2FpwCBwIgHjGdE6W69eSX9z65t8wIGReweKKye%2BQ4gXRfywZevWQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDISqFpLqvSxrSXSrTCrcA64NwC9MFOlNZI4ipZBLh9PDItbKwcwPGQDldsfKD26rSFyiKiMq8J0k%2FSjhnjR2Uv05NF9Mpu6kvRrj9yxT7KR%2BvYahwPV8cGAtkZi86n9PHCGIWJOT%2FJHJWvOsJt5IZKn2hbReGxLGBWvSEdFeAgEem6HbVv58E394ez5YNoBf%2F%2BEmr7mXUMHAnEiOnJ0PQdYEsIP2nDt8JDkMcVsT9E%2FKJEHeTqnfW2URkd5NFH20dq7LYy6nC7KbucpyKZIscPf8tXj72ZZA6AUUE8S1SUwiYx8rVVgFGIdxTC7H1uncNs8KdfKCv221%2B5bEPfEopYCZQnYoDiHDAR0%2BQkzKSzasRIKbfXQdY8Pg%2BgYmDP1iMxKhTnjtYdo9d0%2B3%2BdDVN2MzfdQorxN8koOhjCpGrW1RewxLf%2FnHgkOwidDTe30oP60rBO%2BgS13PIcQ%2BdIGPmlaGdQN62muaEqpQGy9CPfjtwF3H3qN9KGJoGKVdCcpmKiiX19qg%2FQceKtQfnDr1sc6iUTQVHUEym94EKKcgYZ2hFy0mHD24mPWqUxrckVpQTQyCJQ9ckdtZd5WXcKW%2Bn90B12pTTmdCaTwiQfTqB5OwojuOmLNFK8cZgUlcVoMFspO4mIw4Iognx5RWML731cMGOqUBQAgFkA36DzCjcI3Eot3Vs9YoDDGE0NVCxQOynAO2xQtEocv3JeDfJJt%2FzXvCfNKXoLAzaNsVxCf7He2J%2F5LEiWcpLQ1lrF7LRBqIYKGKdnt1YU2%2BNRsjAg9O4zuixrpJ5676YnH8SekWDa%2FABVj3e%2FRs3a304ViUOeUD%2Bv8Nx92FEWh1OnV3BvfyuB92YAlYp7Rj%2FGyU2NOpnOTTwb5xvjdk1A3T&X-Amz-Signature=c207a39ba1e548225eb7a0059cec9cf09daf0892a08a098f0af1a0cb0be2f4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ETFIL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD9Ia80Ngb2Ix4wfSufqDuINkesawRRRH%2FmHSjw%2FpwCBwIgHjGdE6W69eSX9z65t8wIGReweKKye%2BQ4gXRfywZevWQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDISqFpLqvSxrSXSrTCrcA64NwC9MFOlNZI4ipZBLh9PDItbKwcwPGQDldsfKD26rSFyiKiMq8J0k%2FSjhnjR2Uv05NF9Mpu6kvRrj9yxT7KR%2BvYahwPV8cGAtkZi86n9PHCGIWJOT%2FJHJWvOsJt5IZKn2hbReGxLGBWvSEdFeAgEem6HbVv58E394ez5YNoBf%2F%2BEmr7mXUMHAnEiOnJ0PQdYEsIP2nDt8JDkMcVsT9E%2FKJEHeTqnfW2URkd5NFH20dq7LYy6nC7KbucpyKZIscPf8tXj72ZZA6AUUE8S1SUwiYx8rVVgFGIdxTC7H1uncNs8KdfKCv221%2B5bEPfEopYCZQnYoDiHDAR0%2BQkzKSzasRIKbfXQdY8Pg%2BgYmDP1iMxKhTnjtYdo9d0%2B3%2BdDVN2MzfdQorxN8koOhjCpGrW1RewxLf%2FnHgkOwidDTe30oP60rBO%2BgS13PIcQ%2BdIGPmlaGdQN62muaEqpQGy9CPfjtwF3H3qN9KGJoGKVdCcpmKiiX19qg%2FQceKtQfnDr1sc6iUTQVHUEym94EKKcgYZ2hFy0mHD24mPWqUxrckVpQTQyCJQ9ckdtZd5WXcKW%2Bn90B12pTTmdCaTwiQfTqB5OwojuOmLNFK8cZgUlcVoMFspO4mIw4Iognx5RWML731cMGOqUBQAgFkA36DzCjcI3Eot3Vs9YoDDGE0NVCxQOynAO2xQtEocv3JeDfJJt%2FzXvCfNKXoLAzaNsVxCf7He2J%2F5LEiWcpLQ1lrF7LRBqIYKGKdnt1YU2%2BNRsjAg9O4zuixrpJ5676YnH8SekWDa%2FABVj3e%2FRs3a304ViUOeUD%2Bv8Nx92FEWh1OnV3BvfyuB92YAlYp7Rj%2FGyU2NOpnOTTwb5xvjdk1A3T&X-Amz-Signature=efd3b011652312628366267d14dee51b54e1191d8700678ed303a8212c8e52d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ETFIL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD9Ia80Ngb2Ix4wfSufqDuINkesawRRRH%2FmHSjw%2FpwCBwIgHjGdE6W69eSX9z65t8wIGReweKKye%2BQ4gXRfywZevWQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDISqFpLqvSxrSXSrTCrcA64NwC9MFOlNZI4ipZBLh9PDItbKwcwPGQDldsfKD26rSFyiKiMq8J0k%2FSjhnjR2Uv05NF9Mpu6kvRrj9yxT7KR%2BvYahwPV8cGAtkZi86n9PHCGIWJOT%2FJHJWvOsJt5IZKn2hbReGxLGBWvSEdFeAgEem6HbVv58E394ez5YNoBf%2F%2BEmr7mXUMHAnEiOnJ0PQdYEsIP2nDt8JDkMcVsT9E%2FKJEHeTqnfW2URkd5NFH20dq7LYy6nC7KbucpyKZIscPf8tXj72ZZA6AUUE8S1SUwiYx8rVVgFGIdxTC7H1uncNs8KdfKCv221%2B5bEPfEopYCZQnYoDiHDAR0%2BQkzKSzasRIKbfXQdY8Pg%2BgYmDP1iMxKhTnjtYdo9d0%2B3%2BdDVN2MzfdQorxN8koOhjCpGrW1RewxLf%2FnHgkOwidDTe30oP60rBO%2BgS13PIcQ%2BdIGPmlaGdQN62muaEqpQGy9CPfjtwF3H3qN9KGJoGKVdCcpmKiiX19qg%2FQceKtQfnDr1sc6iUTQVHUEym94EKKcgYZ2hFy0mHD24mPWqUxrckVpQTQyCJQ9ckdtZd5WXcKW%2Bn90B12pTTmdCaTwiQfTqB5OwojuOmLNFK8cZgUlcVoMFspO4mIw4Iognx5RWML731cMGOqUBQAgFkA36DzCjcI3Eot3Vs9YoDDGE0NVCxQOynAO2xQtEocv3JeDfJJt%2FzXvCfNKXoLAzaNsVxCf7He2J%2F5LEiWcpLQ1lrF7LRBqIYKGKdnt1YU2%2BNRsjAg9O4zuixrpJ5676YnH8SekWDa%2FABVj3e%2FRs3a304ViUOeUD%2Bv8Nx92FEWh1OnV3BvfyuB92YAlYp7Rj%2FGyU2NOpnOTTwb5xvjdk1A3T&X-Amz-Signature=f065fec79f4d58afe3688e20341bf1ca72f6ec349a4587dc658c258f7c08cbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ETFIL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD9Ia80Ngb2Ix4wfSufqDuINkesawRRRH%2FmHSjw%2FpwCBwIgHjGdE6W69eSX9z65t8wIGReweKKye%2BQ4gXRfywZevWQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDISqFpLqvSxrSXSrTCrcA64NwC9MFOlNZI4ipZBLh9PDItbKwcwPGQDldsfKD26rSFyiKiMq8J0k%2FSjhnjR2Uv05NF9Mpu6kvRrj9yxT7KR%2BvYahwPV8cGAtkZi86n9PHCGIWJOT%2FJHJWvOsJt5IZKn2hbReGxLGBWvSEdFeAgEem6HbVv58E394ez5YNoBf%2F%2BEmr7mXUMHAnEiOnJ0PQdYEsIP2nDt8JDkMcVsT9E%2FKJEHeTqnfW2URkd5NFH20dq7LYy6nC7KbucpyKZIscPf8tXj72ZZA6AUUE8S1SUwiYx8rVVgFGIdxTC7H1uncNs8KdfKCv221%2B5bEPfEopYCZQnYoDiHDAR0%2BQkzKSzasRIKbfXQdY8Pg%2BgYmDP1iMxKhTnjtYdo9d0%2B3%2BdDVN2MzfdQorxN8koOhjCpGrW1RewxLf%2FnHgkOwidDTe30oP60rBO%2BgS13PIcQ%2BdIGPmlaGdQN62muaEqpQGy9CPfjtwF3H3qN9KGJoGKVdCcpmKiiX19qg%2FQceKtQfnDr1sc6iUTQVHUEym94EKKcgYZ2hFy0mHD24mPWqUxrckVpQTQyCJQ9ckdtZd5WXcKW%2Bn90B12pTTmdCaTwiQfTqB5OwojuOmLNFK8cZgUlcVoMFspO4mIw4Iognx5RWML731cMGOqUBQAgFkA36DzCjcI3Eot3Vs9YoDDGE0NVCxQOynAO2xQtEocv3JeDfJJt%2FzXvCfNKXoLAzaNsVxCf7He2J%2F5LEiWcpLQ1lrF7LRBqIYKGKdnt1YU2%2BNRsjAg9O4zuixrpJ5676YnH8SekWDa%2FABVj3e%2FRs3a304ViUOeUD%2Bv8Nx92FEWh1OnV3BvfyuB92YAlYp7Rj%2FGyU2NOpnOTTwb5xvjdk1A3T&X-Amz-Signature=052773681dd202b5bdf9985ce26bff50eddbe84d487a39c2bb95bb29a646bbc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L4ETFIL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD9Ia80Ngb2Ix4wfSufqDuINkesawRRRH%2FmHSjw%2FpwCBwIgHjGdE6W69eSX9z65t8wIGReweKKye%2BQ4gXRfywZevWQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDISqFpLqvSxrSXSrTCrcA64NwC9MFOlNZI4ipZBLh9PDItbKwcwPGQDldsfKD26rSFyiKiMq8J0k%2FSjhnjR2Uv05NF9Mpu6kvRrj9yxT7KR%2BvYahwPV8cGAtkZi86n9PHCGIWJOT%2FJHJWvOsJt5IZKn2hbReGxLGBWvSEdFeAgEem6HbVv58E394ez5YNoBf%2F%2BEmr7mXUMHAnEiOnJ0PQdYEsIP2nDt8JDkMcVsT9E%2FKJEHeTqnfW2URkd5NFH20dq7LYy6nC7KbucpyKZIscPf8tXj72ZZA6AUUE8S1SUwiYx8rVVgFGIdxTC7H1uncNs8KdfKCv221%2B5bEPfEopYCZQnYoDiHDAR0%2BQkzKSzasRIKbfXQdY8Pg%2BgYmDP1iMxKhTnjtYdo9d0%2B3%2BdDVN2MzfdQorxN8koOhjCpGrW1RewxLf%2FnHgkOwidDTe30oP60rBO%2BgS13PIcQ%2BdIGPmlaGdQN62muaEqpQGy9CPfjtwF3H3qN9KGJoGKVdCcpmKiiX19qg%2FQceKtQfnDr1sc6iUTQVHUEym94EKKcgYZ2hFy0mHD24mPWqUxrckVpQTQyCJQ9ckdtZd5WXcKW%2Bn90B12pTTmdCaTwiQfTqB5OwojuOmLNFK8cZgUlcVoMFspO4mIw4Iognx5RWML731cMGOqUBQAgFkA36DzCjcI3Eot3Vs9YoDDGE0NVCxQOynAO2xQtEocv3JeDfJJt%2FzXvCfNKXoLAzaNsVxCf7He2J%2F5LEiWcpLQ1lrF7LRBqIYKGKdnt1YU2%2BNRsjAg9O4zuixrpJ5676YnH8SekWDa%2FABVj3e%2FRs3a304ViUOeUD%2Bv8Nx92FEWh1OnV3BvfyuB92YAlYp7Rj%2FGyU2NOpnOTTwb5xvjdk1A3T&X-Amz-Signature=43b12c2b68683555f2742233f85383d85e1d4a45097d730d6ab871f7f2264b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
