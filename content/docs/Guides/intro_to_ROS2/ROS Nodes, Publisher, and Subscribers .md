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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y663S6UH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1H0ACrT0fCOAFgmFkSMSqYtIFxp1E2JU7Sz7WBWOLOAiB5qvBC4hv%2B7q7%2F72ud91kMOVPCHmpJo26oVjVefWmFrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnx3l0eZtmaAssMVIKtwDMbwks7efYmFtJb%2FuqWQw9us2DlfmQBCn2GZLGj8JkpixJs1Mww4tNwyX9r7jHzpZMwM6mKsJVfkCsPyNxXjjGBaEIWilrUlYl3kaA68rDJG7E1bu4GscVEkCbv4muzXhT5DAjO9YFiDqNHFhQHx8fIu%2FqI7bEGfodqOLSBJQZl5WofutdLK7Jz3P7bsCQ9j7wHSNO%2BS%2B9Btno1mISbfMJzlpS0D%2BRT%2BygMNV1%2FBH30lLu5sn96hN1%2BGYT5Pxe2YJEUkFhhA2ANWOzSElz3qKiw0Z8KeGaS4IyMmVi14pAFiZRqHGkBlFWdX66H8JWy9F4x9GGljI5DOfRLK8mlcQfCXQ6gMHKejOgsrcWKFPmOxhgL0xF1dtsy6hKXEqJp9L14BuxJhVp6G4AmSItWovmSS43LlMLff%2FA5xVADodp50dTxhEtl9%2BxhiPqOs%2B8E7tCymf6oGobEe3L3KbMA7p%2BjnxCX%2Fg36BOHwXGy1n%2BzrXxbbcVn4V8ml3%2BodS9FX0L1KdIsG8ABymoFfnCvDY%2FhVyJFo92oUwodvYVqKSzdY8m1vnh4DF8Me05aoOOtqRWrHPJVUsQ4%2FYoYb58JK3vJVql%2BimkiBF%2B7D3Aw53J3HsNdgYahy%2FYouD2b2ww7p%2FivQY6pgEtADeMy3Jx4h6wYKJzA7WRG%2FNUm86lvq%2FbnnslgahflR5DsnEwQmNWESDeegtc1jACALugs65jh8dPK9Q5AOL1MeW%2Bs0F3hybB8rUZwrFsPT4j2%2BGczGvqJQmW%2BgM6GikwGN30xwu9kLu%2BF8L%2F9%2BRVom1Id%2BppqwH6s47j5aDT9ShRAr2%2Bqm%2FyKTA679CpVhn1h7mZSFpOqmvR2tzTvYqn6eergemV&X-Amz-Signature=a0d20dde052bba0683e002608e241858d9f319f9f7731b0b7373ed0ec14e61a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y663S6UH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1H0ACrT0fCOAFgmFkSMSqYtIFxp1E2JU7Sz7WBWOLOAiB5qvBC4hv%2B7q7%2F72ud91kMOVPCHmpJo26oVjVefWmFrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnx3l0eZtmaAssMVIKtwDMbwks7efYmFtJb%2FuqWQw9us2DlfmQBCn2GZLGj8JkpixJs1Mww4tNwyX9r7jHzpZMwM6mKsJVfkCsPyNxXjjGBaEIWilrUlYl3kaA68rDJG7E1bu4GscVEkCbv4muzXhT5DAjO9YFiDqNHFhQHx8fIu%2FqI7bEGfodqOLSBJQZl5WofutdLK7Jz3P7bsCQ9j7wHSNO%2BS%2B9Btno1mISbfMJzlpS0D%2BRT%2BygMNV1%2FBH30lLu5sn96hN1%2BGYT5Pxe2YJEUkFhhA2ANWOzSElz3qKiw0Z8KeGaS4IyMmVi14pAFiZRqHGkBlFWdX66H8JWy9F4x9GGljI5DOfRLK8mlcQfCXQ6gMHKejOgsrcWKFPmOxhgL0xF1dtsy6hKXEqJp9L14BuxJhVp6G4AmSItWovmSS43LlMLff%2FA5xVADodp50dTxhEtl9%2BxhiPqOs%2B8E7tCymf6oGobEe3L3KbMA7p%2BjnxCX%2Fg36BOHwXGy1n%2BzrXxbbcVn4V8ml3%2BodS9FX0L1KdIsG8ABymoFfnCvDY%2FhVyJFo92oUwodvYVqKSzdY8m1vnh4DF8Me05aoOOtqRWrHPJVUsQ4%2FYoYb58JK3vJVql%2BimkiBF%2B7D3Aw53J3HsNdgYahy%2FYouD2b2ww7p%2FivQY6pgEtADeMy3Jx4h6wYKJzA7WRG%2FNUm86lvq%2FbnnslgahflR5DsnEwQmNWESDeegtc1jACALugs65jh8dPK9Q5AOL1MeW%2Bs0F3hybB8rUZwrFsPT4j2%2BGczGvqJQmW%2BgM6GikwGN30xwu9kLu%2BF8L%2F9%2BRVom1Id%2BppqwH6s47j5aDT9ShRAr2%2Bqm%2FyKTA679CpVhn1h7mZSFpOqmvR2tzTvYqn6eergemV&X-Amz-Signature=0a3667bbc3be32154c5bc6a4cb822f973db2687fdeb89e3fe875e99856006d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y663S6UH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1H0ACrT0fCOAFgmFkSMSqYtIFxp1E2JU7Sz7WBWOLOAiB5qvBC4hv%2B7q7%2F72ud91kMOVPCHmpJo26oVjVefWmFrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnx3l0eZtmaAssMVIKtwDMbwks7efYmFtJb%2FuqWQw9us2DlfmQBCn2GZLGj8JkpixJs1Mww4tNwyX9r7jHzpZMwM6mKsJVfkCsPyNxXjjGBaEIWilrUlYl3kaA68rDJG7E1bu4GscVEkCbv4muzXhT5DAjO9YFiDqNHFhQHx8fIu%2FqI7bEGfodqOLSBJQZl5WofutdLK7Jz3P7bsCQ9j7wHSNO%2BS%2B9Btno1mISbfMJzlpS0D%2BRT%2BygMNV1%2FBH30lLu5sn96hN1%2BGYT5Pxe2YJEUkFhhA2ANWOzSElz3qKiw0Z8KeGaS4IyMmVi14pAFiZRqHGkBlFWdX66H8JWy9F4x9GGljI5DOfRLK8mlcQfCXQ6gMHKejOgsrcWKFPmOxhgL0xF1dtsy6hKXEqJp9L14BuxJhVp6G4AmSItWovmSS43LlMLff%2FA5xVADodp50dTxhEtl9%2BxhiPqOs%2B8E7tCymf6oGobEe3L3KbMA7p%2BjnxCX%2Fg36BOHwXGy1n%2BzrXxbbcVn4V8ml3%2BodS9FX0L1KdIsG8ABymoFfnCvDY%2FhVyJFo92oUwodvYVqKSzdY8m1vnh4DF8Me05aoOOtqRWrHPJVUsQ4%2FYoYb58JK3vJVql%2BimkiBF%2B7D3Aw53J3HsNdgYahy%2FYouD2b2ww7p%2FivQY6pgEtADeMy3Jx4h6wYKJzA7WRG%2FNUm86lvq%2FbnnslgahflR5DsnEwQmNWESDeegtc1jACALugs65jh8dPK9Q5AOL1MeW%2Bs0F3hybB8rUZwrFsPT4j2%2BGczGvqJQmW%2BgM6GikwGN30xwu9kLu%2BF8L%2F9%2BRVom1Id%2BppqwH6s47j5aDT9ShRAr2%2Bqm%2FyKTA679CpVhn1h7mZSFpOqmvR2tzTvYqn6eergemV&X-Amz-Signature=c77e0afe70214c85a82144337e7d1830a95391a28055fda78ceced8b6d338ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y663S6UH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1H0ACrT0fCOAFgmFkSMSqYtIFxp1E2JU7Sz7WBWOLOAiB5qvBC4hv%2B7q7%2F72ud91kMOVPCHmpJo26oVjVefWmFrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnx3l0eZtmaAssMVIKtwDMbwks7efYmFtJb%2FuqWQw9us2DlfmQBCn2GZLGj8JkpixJs1Mww4tNwyX9r7jHzpZMwM6mKsJVfkCsPyNxXjjGBaEIWilrUlYl3kaA68rDJG7E1bu4GscVEkCbv4muzXhT5DAjO9YFiDqNHFhQHx8fIu%2FqI7bEGfodqOLSBJQZl5WofutdLK7Jz3P7bsCQ9j7wHSNO%2BS%2B9Btno1mISbfMJzlpS0D%2BRT%2BygMNV1%2FBH30lLu5sn96hN1%2BGYT5Pxe2YJEUkFhhA2ANWOzSElz3qKiw0Z8KeGaS4IyMmVi14pAFiZRqHGkBlFWdX66H8JWy9F4x9GGljI5DOfRLK8mlcQfCXQ6gMHKejOgsrcWKFPmOxhgL0xF1dtsy6hKXEqJp9L14BuxJhVp6G4AmSItWovmSS43LlMLff%2FA5xVADodp50dTxhEtl9%2BxhiPqOs%2B8E7tCymf6oGobEe3L3KbMA7p%2BjnxCX%2Fg36BOHwXGy1n%2BzrXxbbcVn4V8ml3%2BodS9FX0L1KdIsG8ABymoFfnCvDY%2FhVyJFo92oUwodvYVqKSzdY8m1vnh4DF8Me05aoOOtqRWrHPJVUsQ4%2FYoYb58JK3vJVql%2BimkiBF%2B7D3Aw53J3HsNdgYahy%2FYouD2b2ww7p%2FivQY6pgEtADeMy3Jx4h6wYKJzA7WRG%2FNUm86lvq%2FbnnslgahflR5DsnEwQmNWESDeegtc1jACALugs65jh8dPK9Q5AOL1MeW%2Bs0F3hybB8rUZwrFsPT4j2%2BGczGvqJQmW%2BgM6GikwGN30xwu9kLu%2BF8L%2F9%2BRVom1Id%2BppqwH6s47j5aDT9ShRAr2%2Bqm%2FyKTA679CpVhn1h7mZSFpOqmvR2tzTvYqn6eergemV&X-Amz-Signature=6687e646e504c00242b77cddd690bfcb5ba2cf68a54ba46b39daa55d1c1815e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y663S6UH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1H0ACrT0fCOAFgmFkSMSqYtIFxp1E2JU7Sz7WBWOLOAiB5qvBC4hv%2B7q7%2F72ud91kMOVPCHmpJo26oVjVefWmFrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnx3l0eZtmaAssMVIKtwDMbwks7efYmFtJb%2FuqWQw9us2DlfmQBCn2GZLGj8JkpixJs1Mww4tNwyX9r7jHzpZMwM6mKsJVfkCsPyNxXjjGBaEIWilrUlYl3kaA68rDJG7E1bu4GscVEkCbv4muzXhT5DAjO9YFiDqNHFhQHx8fIu%2FqI7bEGfodqOLSBJQZl5WofutdLK7Jz3P7bsCQ9j7wHSNO%2BS%2B9Btno1mISbfMJzlpS0D%2BRT%2BygMNV1%2FBH30lLu5sn96hN1%2BGYT5Pxe2YJEUkFhhA2ANWOzSElz3qKiw0Z8KeGaS4IyMmVi14pAFiZRqHGkBlFWdX66H8JWy9F4x9GGljI5DOfRLK8mlcQfCXQ6gMHKejOgsrcWKFPmOxhgL0xF1dtsy6hKXEqJp9L14BuxJhVp6G4AmSItWovmSS43LlMLff%2FA5xVADodp50dTxhEtl9%2BxhiPqOs%2B8E7tCymf6oGobEe3L3KbMA7p%2BjnxCX%2Fg36BOHwXGy1n%2BzrXxbbcVn4V8ml3%2BodS9FX0L1KdIsG8ABymoFfnCvDY%2FhVyJFo92oUwodvYVqKSzdY8m1vnh4DF8Me05aoOOtqRWrHPJVUsQ4%2FYoYb58JK3vJVql%2BimkiBF%2B7D3Aw53J3HsNdgYahy%2FYouD2b2ww7p%2FivQY6pgEtADeMy3Jx4h6wYKJzA7WRG%2FNUm86lvq%2FbnnslgahflR5DsnEwQmNWESDeegtc1jACALugs65jh8dPK9Q5AOL1MeW%2Bs0F3hybB8rUZwrFsPT4j2%2BGczGvqJQmW%2BgM6GikwGN30xwu9kLu%2BF8L%2F9%2BRVom1Id%2BppqwH6s47j5aDT9ShRAr2%2Bqm%2FyKTA679CpVhn1h7mZSFpOqmvR2tzTvYqn6eergemV&X-Amz-Signature=8a1053bf43caaf2eaf1c0eac8fb91044879fbe7b511da957bd35bc695c19c813&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y663S6UH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1H0ACrT0fCOAFgmFkSMSqYtIFxp1E2JU7Sz7WBWOLOAiB5qvBC4hv%2B7q7%2F72ud91kMOVPCHmpJo26oVjVefWmFrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnx3l0eZtmaAssMVIKtwDMbwks7efYmFtJb%2FuqWQw9us2DlfmQBCn2GZLGj8JkpixJs1Mww4tNwyX9r7jHzpZMwM6mKsJVfkCsPyNxXjjGBaEIWilrUlYl3kaA68rDJG7E1bu4GscVEkCbv4muzXhT5DAjO9YFiDqNHFhQHx8fIu%2FqI7bEGfodqOLSBJQZl5WofutdLK7Jz3P7bsCQ9j7wHSNO%2BS%2B9Btno1mISbfMJzlpS0D%2BRT%2BygMNV1%2FBH30lLu5sn96hN1%2BGYT5Pxe2YJEUkFhhA2ANWOzSElz3qKiw0Z8KeGaS4IyMmVi14pAFiZRqHGkBlFWdX66H8JWy9F4x9GGljI5DOfRLK8mlcQfCXQ6gMHKejOgsrcWKFPmOxhgL0xF1dtsy6hKXEqJp9L14BuxJhVp6G4AmSItWovmSS43LlMLff%2FA5xVADodp50dTxhEtl9%2BxhiPqOs%2B8E7tCymf6oGobEe3L3KbMA7p%2BjnxCX%2Fg36BOHwXGy1n%2BzrXxbbcVn4V8ml3%2BodS9FX0L1KdIsG8ABymoFfnCvDY%2FhVyJFo92oUwodvYVqKSzdY8m1vnh4DF8Me05aoOOtqRWrHPJVUsQ4%2FYoYb58JK3vJVql%2BimkiBF%2B7D3Aw53J3HsNdgYahy%2FYouD2b2ww7p%2FivQY6pgEtADeMy3Jx4h6wYKJzA7WRG%2FNUm86lvq%2FbnnslgahflR5DsnEwQmNWESDeegtc1jACALugs65jh8dPK9Q5AOL1MeW%2Bs0F3hybB8rUZwrFsPT4j2%2BGczGvqJQmW%2BgM6GikwGN30xwu9kLu%2BF8L%2F9%2BRVom1Id%2BppqwH6s47j5aDT9ShRAr2%2Bqm%2FyKTA679CpVhn1h7mZSFpOqmvR2tzTvYqn6eergemV&X-Amz-Signature=1639ebb24f14f6af0e479b2b58d3453a0661eb59454fe83d2103b30c7f8444ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y663S6UH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1H0ACrT0fCOAFgmFkSMSqYtIFxp1E2JU7Sz7WBWOLOAiB5qvBC4hv%2B7q7%2F72ud91kMOVPCHmpJo26oVjVefWmFrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnx3l0eZtmaAssMVIKtwDMbwks7efYmFtJb%2FuqWQw9us2DlfmQBCn2GZLGj8JkpixJs1Mww4tNwyX9r7jHzpZMwM6mKsJVfkCsPyNxXjjGBaEIWilrUlYl3kaA68rDJG7E1bu4GscVEkCbv4muzXhT5DAjO9YFiDqNHFhQHx8fIu%2FqI7bEGfodqOLSBJQZl5WofutdLK7Jz3P7bsCQ9j7wHSNO%2BS%2B9Btno1mISbfMJzlpS0D%2BRT%2BygMNV1%2FBH30lLu5sn96hN1%2BGYT5Pxe2YJEUkFhhA2ANWOzSElz3qKiw0Z8KeGaS4IyMmVi14pAFiZRqHGkBlFWdX66H8JWy9F4x9GGljI5DOfRLK8mlcQfCXQ6gMHKejOgsrcWKFPmOxhgL0xF1dtsy6hKXEqJp9L14BuxJhVp6G4AmSItWovmSS43LlMLff%2FA5xVADodp50dTxhEtl9%2BxhiPqOs%2B8E7tCymf6oGobEe3L3KbMA7p%2BjnxCX%2Fg36BOHwXGy1n%2BzrXxbbcVn4V8ml3%2BodS9FX0L1KdIsG8ABymoFfnCvDY%2FhVyJFo92oUwodvYVqKSzdY8m1vnh4DF8Me05aoOOtqRWrHPJVUsQ4%2FYoYb58JK3vJVql%2BimkiBF%2B7D3Aw53J3HsNdgYahy%2FYouD2b2ww7p%2FivQY6pgEtADeMy3Jx4h6wYKJzA7WRG%2FNUm86lvq%2FbnnslgahflR5DsnEwQmNWESDeegtc1jACALugs65jh8dPK9Q5AOL1MeW%2Bs0F3hybB8rUZwrFsPT4j2%2BGczGvqJQmW%2BgM6GikwGN30xwu9kLu%2BF8L%2F9%2BRVom1Id%2BppqwH6s47j5aDT9ShRAr2%2Bqm%2FyKTA679CpVhn1h7mZSFpOqmvR2tzTvYqn6eergemV&X-Amz-Signature=2d6df0fd5928f69df8df10d62748df3925345671aacfe8ad302a3fc2e03a02ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y663S6UH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1H0ACrT0fCOAFgmFkSMSqYtIFxp1E2JU7Sz7WBWOLOAiB5qvBC4hv%2B7q7%2F72ud91kMOVPCHmpJo26oVjVefWmFrSqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnx3l0eZtmaAssMVIKtwDMbwks7efYmFtJb%2FuqWQw9us2DlfmQBCn2GZLGj8JkpixJs1Mww4tNwyX9r7jHzpZMwM6mKsJVfkCsPyNxXjjGBaEIWilrUlYl3kaA68rDJG7E1bu4GscVEkCbv4muzXhT5DAjO9YFiDqNHFhQHx8fIu%2FqI7bEGfodqOLSBJQZl5WofutdLK7Jz3P7bsCQ9j7wHSNO%2BS%2B9Btno1mISbfMJzlpS0D%2BRT%2BygMNV1%2FBH30lLu5sn96hN1%2BGYT5Pxe2YJEUkFhhA2ANWOzSElz3qKiw0Z8KeGaS4IyMmVi14pAFiZRqHGkBlFWdX66H8JWy9F4x9GGljI5DOfRLK8mlcQfCXQ6gMHKejOgsrcWKFPmOxhgL0xF1dtsy6hKXEqJp9L14BuxJhVp6G4AmSItWovmSS43LlMLff%2FA5xVADodp50dTxhEtl9%2BxhiPqOs%2B8E7tCymf6oGobEe3L3KbMA7p%2BjnxCX%2Fg36BOHwXGy1n%2BzrXxbbcVn4V8ml3%2BodS9FX0L1KdIsG8ABymoFfnCvDY%2FhVyJFo92oUwodvYVqKSzdY8m1vnh4DF8Me05aoOOtqRWrHPJVUsQ4%2FYoYb58JK3vJVql%2BimkiBF%2B7D3Aw53J3HsNdgYahy%2FYouD2b2ww7p%2FivQY6pgEtADeMy3Jx4h6wYKJzA7WRG%2FNUm86lvq%2FbnnslgahflR5DsnEwQmNWESDeegtc1jACALugs65jh8dPK9Q5AOL1MeW%2Bs0F3hybB8rUZwrFsPT4j2%2BGczGvqJQmW%2BgM6GikwGN30xwu9kLu%2BF8L%2F9%2BRVom1Id%2BppqwH6s47j5aDT9ShRAr2%2Bqm%2FyKTA679CpVhn1h7mZSFpOqmvR2tzTvYqn6eergemV&X-Amz-Signature=00dd76d87af9bc283940ab506626e9708ab0b1314df1066434f96253e11001d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
