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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XF7TAN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCRJtIpbcR%2BdeYWNvl%2BoTkh%2BfMuCy%2BLDnltDxDu1cKmFgIhAMFuuAOn%2BlGvKKd9o8qtyKbVyMZxL%2B6LyOD1QJ%2B7o2r5KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNVSFgidXhXTt8GjUq3ANYdDDkB0sPL3lvsbn1GXU%2FyErb5stLX%2FncYlM2qlkv2RhCKHo20OkeCs2xRQ4GPr%2FwiWbW8k65OezZ1dZLfe2ivGtJXbyFVoyMmlUqnZpllw6d%2B0iQrjvmrb9bp5hFeAcXPAURqyf2wqhTKhk0sbCzBDRA99vi1SkZy5VC5ZpZ4%2BFmGqSRWCBWqkSEw26FDwSFEwR8QRyCzIfJtmyLdz%2BnSwaqheoxtbc9M4%2BWrsJODRSjnQiPZSSkrsuzkeBbZAC9uFKV9CK5lfW0c8QPymOZR3OM1FPKDIwqARd7%2BRHV2bdorArHHAbE0t4pIWOxzw%2B%2BHimUAPAMQrHcx0jyvYoXjtx%2FD0dbovv6dsnEanedA8ggKZLEKexRzBqVvbTclPzriotVbks3jUxd30auc9kMwgdI8u6QN8IWyDMyBI2l3DHXbSOYNnqgMxYKm5dMGlOq2YsHxqDqmhjt6TbU6xAAsaeyrLTwA%2Bcpw2eiqwmbpREd0sm9HwoEVW0Vh2KWCZ1bbnplQwJZu3rbL9T1nA7yFMqOb3ztVHbGW2KRtfEDg1lbroqb7PVgJwcZX%2FasaHtFBQtONDxNXglyBq%2BVil%2FUwfucj08%2BEdedVfYwjAAkWNjWkVYslv2UFkWe4jCr28O%2BBjqkAbB%2BeRW3rx4BCn5DUC3nmcFePXtWflZSZzVWTr2ncDkcT9KjjVVbLj2FgvPOjtinlWdYOGg12AkRSBIS1BsAk4t3yXAvGGUd%2FMcvlobogsP6pTfoZfclehAGsTwM%2FiJC7xqHgS01U9Cx841i7YnjfEhfAUFk%2FkibDK7y%2BsbwQpuftnTx8qOC0rTtrmXKn14jPSeD%2F3C55UnOjCCUBho9a1m4kzr3&X-Amz-Signature=52a0c2543ec8bf95e3e98bee3b3081773152194163b97a73a08f09f062f8e2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XF7TAN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCRJtIpbcR%2BdeYWNvl%2BoTkh%2BfMuCy%2BLDnltDxDu1cKmFgIhAMFuuAOn%2BlGvKKd9o8qtyKbVyMZxL%2B6LyOD1QJ%2B7o2r5KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNVSFgidXhXTt8GjUq3ANYdDDkB0sPL3lvsbn1GXU%2FyErb5stLX%2FncYlM2qlkv2RhCKHo20OkeCs2xRQ4GPr%2FwiWbW8k65OezZ1dZLfe2ivGtJXbyFVoyMmlUqnZpllw6d%2B0iQrjvmrb9bp5hFeAcXPAURqyf2wqhTKhk0sbCzBDRA99vi1SkZy5VC5ZpZ4%2BFmGqSRWCBWqkSEw26FDwSFEwR8QRyCzIfJtmyLdz%2BnSwaqheoxtbc9M4%2BWrsJODRSjnQiPZSSkrsuzkeBbZAC9uFKV9CK5lfW0c8QPymOZR3OM1FPKDIwqARd7%2BRHV2bdorArHHAbE0t4pIWOxzw%2B%2BHimUAPAMQrHcx0jyvYoXjtx%2FD0dbovv6dsnEanedA8ggKZLEKexRzBqVvbTclPzriotVbks3jUxd30auc9kMwgdI8u6QN8IWyDMyBI2l3DHXbSOYNnqgMxYKm5dMGlOq2YsHxqDqmhjt6TbU6xAAsaeyrLTwA%2Bcpw2eiqwmbpREd0sm9HwoEVW0Vh2KWCZ1bbnplQwJZu3rbL9T1nA7yFMqOb3ztVHbGW2KRtfEDg1lbroqb7PVgJwcZX%2FasaHtFBQtONDxNXglyBq%2BVil%2FUwfucj08%2BEdedVfYwjAAkWNjWkVYslv2UFkWe4jCr28O%2BBjqkAbB%2BeRW3rx4BCn5DUC3nmcFePXtWflZSZzVWTr2ncDkcT9KjjVVbLj2FgvPOjtinlWdYOGg12AkRSBIS1BsAk4t3yXAvGGUd%2FMcvlobogsP6pTfoZfclehAGsTwM%2FiJC7xqHgS01U9Cx841i7YnjfEhfAUFk%2FkibDK7y%2BsbwQpuftnTx8qOC0rTtrmXKn14jPSeD%2F3C55UnOjCCUBho9a1m4kzr3&X-Amz-Signature=f16255088e09b5e40988b13544fc19047916bab38682aed0d2c33d1032c52827&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XF7TAN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCRJtIpbcR%2BdeYWNvl%2BoTkh%2BfMuCy%2BLDnltDxDu1cKmFgIhAMFuuAOn%2BlGvKKd9o8qtyKbVyMZxL%2B6LyOD1QJ%2B7o2r5KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNVSFgidXhXTt8GjUq3ANYdDDkB0sPL3lvsbn1GXU%2FyErb5stLX%2FncYlM2qlkv2RhCKHo20OkeCs2xRQ4GPr%2FwiWbW8k65OezZ1dZLfe2ivGtJXbyFVoyMmlUqnZpllw6d%2B0iQrjvmrb9bp5hFeAcXPAURqyf2wqhTKhk0sbCzBDRA99vi1SkZy5VC5ZpZ4%2BFmGqSRWCBWqkSEw26FDwSFEwR8QRyCzIfJtmyLdz%2BnSwaqheoxtbc9M4%2BWrsJODRSjnQiPZSSkrsuzkeBbZAC9uFKV9CK5lfW0c8QPymOZR3OM1FPKDIwqARd7%2BRHV2bdorArHHAbE0t4pIWOxzw%2B%2BHimUAPAMQrHcx0jyvYoXjtx%2FD0dbovv6dsnEanedA8ggKZLEKexRzBqVvbTclPzriotVbks3jUxd30auc9kMwgdI8u6QN8IWyDMyBI2l3DHXbSOYNnqgMxYKm5dMGlOq2YsHxqDqmhjt6TbU6xAAsaeyrLTwA%2Bcpw2eiqwmbpREd0sm9HwoEVW0Vh2KWCZ1bbnplQwJZu3rbL9T1nA7yFMqOb3ztVHbGW2KRtfEDg1lbroqb7PVgJwcZX%2FasaHtFBQtONDxNXglyBq%2BVil%2FUwfucj08%2BEdedVfYwjAAkWNjWkVYslv2UFkWe4jCr28O%2BBjqkAbB%2BeRW3rx4BCn5DUC3nmcFePXtWflZSZzVWTr2ncDkcT9KjjVVbLj2FgvPOjtinlWdYOGg12AkRSBIS1BsAk4t3yXAvGGUd%2FMcvlobogsP6pTfoZfclehAGsTwM%2FiJC7xqHgS01U9Cx841i7YnjfEhfAUFk%2FkibDK7y%2BsbwQpuftnTx8qOC0rTtrmXKn14jPSeD%2F3C55UnOjCCUBho9a1m4kzr3&X-Amz-Signature=73c9871419033e784e2cce61505579c194bc8c901ee827e6e12e94f96ba5757e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XF7TAN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCRJtIpbcR%2BdeYWNvl%2BoTkh%2BfMuCy%2BLDnltDxDu1cKmFgIhAMFuuAOn%2BlGvKKd9o8qtyKbVyMZxL%2B6LyOD1QJ%2B7o2r5KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNVSFgidXhXTt8GjUq3ANYdDDkB0sPL3lvsbn1GXU%2FyErb5stLX%2FncYlM2qlkv2RhCKHo20OkeCs2xRQ4GPr%2FwiWbW8k65OezZ1dZLfe2ivGtJXbyFVoyMmlUqnZpllw6d%2B0iQrjvmrb9bp5hFeAcXPAURqyf2wqhTKhk0sbCzBDRA99vi1SkZy5VC5ZpZ4%2BFmGqSRWCBWqkSEw26FDwSFEwR8QRyCzIfJtmyLdz%2BnSwaqheoxtbc9M4%2BWrsJODRSjnQiPZSSkrsuzkeBbZAC9uFKV9CK5lfW0c8QPymOZR3OM1FPKDIwqARd7%2BRHV2bdorArHHAbE0t4pIWOxzw%2B%2BHimUAPAMQrHcx0jyvYoXjtx%2FD0dbovv6dsnEanedA8ggKZLEKexRzBqVvbTclPzriotVbks3jUxd30auc9kMwgdI8u6QN8IWyDMyBI2l3DHXbSOYNnqgMxYKm5dMGlOq2YsHxqDqmhjt6TbU6xAAsaeyrLTwA%2Bcpw2eiqwmbpREd0sm9HwoEVW0Vh2KWCZ1bbnplQwJZu3rbL9T1nA7yFMqOb3ztVHbGW2KRtfEDg1lbroqb7PVgJwcZX%2FasaHtFBQtONDxNXglyBq%2BVil%2FUwfucj08%2BEdedVfYwjAAkWNjWkVYslv2UFkWe4jCr28O%2BBjqkAbB%2BeRW3rx4BCn5DUC3nmcFePXtWflZSZzVWTr2ncDkcT9KjjVVbLj2FgvPOjtinlWdYOGg12AkRSBIS1BsAk4t3yXAvGGUd%2FMcvlobogsP6pTfoZfclehAGsTwM%2FiJC7xqHgS01U9Cx841i7YnjfEhfAUFk%2FkibDK7y%2BsbwQpuftnTx8qOC0rTtrmXKn14jPSeD%2F3C55UnOjCCUBho9a1m4kzr3&X-Amz-Signature=0ee72fbd5a7662389f43dd0ab74179024ae35a54b4a75a8b61ce6e3389466c50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XF7TAN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCRJtIpbcR%2BdeYWNvl%2BoTkh%2BfMuCy%2BLDnltDxDu1cKmFgIhAMFuuAOn%2BlGvKKd9o8qtyKbVyMZxL%2B6LyOD1QJ%2B7o2r5KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNVSFgidXhXTt8GjUq3ANYdDDkB0sPL3lvsbn1GXU%2FyErb5stLX%2FncYlM2qlkv2RhCKHo20OkeCs2xRQ4GPr%2FwiWbW8k65OezZ1dZLfe2ivGtJXbyFVoyMmlUqnZpllw6d%2B0iQrjvmrb9bp5hFeAcXPAURqyf2wqhTKhk0sbCzBDRA99vi1SkZy5VC5ZpZ4%2BFmGqSRWCBWqkSEw26FDwSFEwR8QRyCzIfJtmyLdz%2BnSwaqheoxtbc9M4%2BWrsJODRSjnQiPZSSkrsuzkeBbZAC9uFKV9CK5lfW0c8QPymOZR3OM1FPKDIwqARd7%2BRHV2bdorArHHAbE0t4pIWOxzw%2B%2BHimUAPAMQrHcx0jyvYoXjtx%2FD0dbovv6dsnEanedA8ggKZLEKexRzBqVvbTclPzriotVbks3jUxd30auc9kMwgdI8u6QN8IWyDMyBI2l3DHXbSOYNnqgMxYKm5dMGlOq2YsHxqDqmhjt6TbU6xAAsaeyrLTwA%2Bcpw2eiqwmbpREd0sm9HwoEVW0Vh2KWCZ1bbnplQwJZu3rbL9T1nA7yFMqOb3ztVHbGW2KRtfEDg1lbroqb7PVgJwcZX%2FasaHtFBQtONDxNXglyBq%2BVil%2FUwfucj08%2BEdedVfYwjAAkWNjWkVYslv2UFkWe4jCr28O%2BBjqkAbB%2BeRW3rx4BCn5DUC3nmcFePXtWflZSZzVWTr2ncDkcT9KjjVVbLj2FgvPOjtinlWdYOGg12AkRSBIS1BsAk4t3yXAvGGUd%2FMcvlobogsP6pTfoZfclehAGsTwM%2FiJC7xqHgS01U9Cx841i7YnjfEhfAUFk%2FkibDK7y%2BsbwQpuftnTx8qOC0rTtrmXKn14jPSeD%2F3C55UnOjCCUBho9a1m4kzr3&X-Amz-Signature=5470bc23edfacb6b1d47f6d4d5656f505e21a92da35cf282e0a7333a067042ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XF7TAN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCRJtIpbcR%2BdeYWNvl%2BoTkh%2BfMuCy%2BLDnltDxDu1cKmFgIhAMFuuAOn%2BlGvKKd9o8qtyKbVyMZxL%2B6LyOD1QJ%2B7o2r5KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNVSFgidXhXTt8GjUq3ANYdDDkB0sPL3lvsbn1GXU%2FyErb5stLX%2FncYlM2qlkv2RhCKHo20OkeCs2xRQ4GPr%2FwiWbW8k65OezZ1dZLfe2ivGtJXbyFVoyMmlUqnZpllw6d%2B0iQrjvmrb9bp5hFeAcXPAURqyf2wqhTKhk0sbCzBDRA99vi1SkZy5VC5ZpZ4%2BFmGqSRWCBWqkSEw26FDwSFEwR8QRyCzIfJtmyLdz%2BnSwaqheoxtbc9M4%2BWrsJODRSjnQiPZSSkrsuzkeBbZAC9uFKV9CK5lfW0c8QPymOZR3OM1FPKDIwqARd7%2BRHV2bdorArHHAbE0t4pIWOxzw%2B%2BHimUAPAMQrHcx0jyvYoXjtx%2FD0dbovv6dsnEanedA8ggKZLEKexRzBqVvbTclPzriotVbks3jUxd30auc9kMwgdI8u6QN8IWyDMyBI2l3DHXbSOYNnqgMxYKm5dMGlOq2YsHxqDqmhjt6TbU6xAAsaeyrLTwA%2Bcpw2eiqwmbpREd0sm9HwoEVW0Vh2KWCZ1bbnplQwJZu3rbL9T1nA7yFMqOb3ztVHbGW2KRtfEDg1lbroqb7PVgJwcZX%2FasaHtFBQtONDxNXglyBq%2BVil%2FUwfucj08%2BEdedVfYwjAAkWNjWkVYslv2UFkWe4jCr28O%2BBjqkAbB%2BeRW3rx4BCn5DUC3nmcFePXtWflZSZzVWTr2ncDkcT9KjjVVbLj2FgvPOjtinlWdYOGg12AkRSBIS1BsAk4t3yXAvGGUd%2FMcvlobogsP6pTfoZfclehAGsTwM%2FiJC7xqHgS01U9Cx841i7YnjfEhfAUFk%2FkibDK7y%2BsbwQpuftnTx8qOC0rTtrmXKn14jPSeD%2F3C55UnOjCCUBho9a1m4kzr3&X-Amz-Signature=9b9534c2120a3620ebdeb485d9385b4cc9ed9e7493a456354230fa712cd690d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XF7TAN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCRJtIpbcR%2BdeYWNvl%2BoTkh%2BfMuCy%2BLDnltDxDu1cKmFgIhAMFuuAOn%2BlGvKKd9o8qtyKbVyMZxL%2B6LyOD1QJ%2B7o2r5KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNVSFgidXhXTt8GjUq3ANYdDDkB0sPL3lvsbn1GXU%2FyErb5stLX%2FncYlM2qlkv2RhCKHo20OkeCs2xRQ4GPr%2FwiWbW8k65OezZ1dZLfe2ivGtJXbyFVoyMmlUqnZpllw6d%2B0iQrjvmrb9bp5hFeAcXPAURqyf2wqhTKhk0sbCzBDRA99vi1SkZy5VC5ZpZ4%2BFmGqSRWCBWqkSEw26FDwSFEwR8QRyCzIfJtmyLdz%2BnSwaqheoxtbc9M4%2BWrsJODRSjnQiPZSSkrsuzkeBbZAC9uFKV9CK5lfW0c8QPymOZR3OM1FPKDIwqARd7%2BRHV2bdorArHHAbE0t4pIWOxzw%2B%2BHimUAPAMQrHcx0jyvYoXjtx%2FD0dbovv6dsnEanedA8ggKZLEKexRzBqVvbTclPzriotVbks3jUxd30auc9kMwgdI8u6QN8IWyDMyBI2l3DHXbSOYNnqgMxYKm5dMGlOq2YsHxqDqmhjt6TbU6xAAsaeyrLTwA%2Bcpw2eiqwmbpREd0sm9HwoEVW0Vh2KWCZ1bbnplQwJZu3rbL9T1nA7yFMqOb3ztVHbGW2KRtfEDg1lbroqb7PVgJwcZX%2FasaHtFBQtONDxNXglyBq%2BVil%2FUwfucj08%2BEdedVfYwjAAkWNjWkVYslv2UFkWe4jCr28O%2BBjqkAbB%2BeRW3rx4BCn5DUC3nmcFePXtWflZSZzVWTr2ncDkcT9KjjVVbLj2FgvPOjtinlWdYOGg12AkRSBIS1BsAk4t3yXAvGGUd%2FMcvlobogsP6pTfoZfclehAGsTwM%2FiJC7xqHgS01U9Cx841i7YnjfEhfAUFk%2FkibDK7y%2BsbwQpuftnTx8qOC0rTtrmXKn14jPSeD%2F3C55UnOjCCUBho9a1m4kzr3&X-Amz-Signature=62670d016e156378f4b0256409dda54844a78b6a93db47401b8811089c9cb23c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XF7TAN%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCRJtIpbcR%2BdeYWNvl%2BoTkh%2BfMuCy%2BLDnltDxDu1cKmFgIhAMFuuAOn%2BlGvKKd9o8qtyKbVyMZxL%2B6LyOD1QJ%2B7o2r5KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNVSFgidXhXTt8GjUq3ANYdDDkB0sPL3lvsbn1GXU%2FyErb5stLX%2FncYlM2qlkv2RhCKHo20OkeCs2xRQ4GPr%2FwiWbW8k65OezZ1dZLfe2ivGtJXbyFVoyMmlUqnZpllw6d%2B0iQrjvmrb9bp5hFeAcXPAURqyf2wqhTKhk0sbCzBDRA99vi1SkZy5VC5ZpZ4%2BFmGqSRWCBWqkSEw26FDwSFEwR8QRyCzIfJtmyLdz%2BnSwaqheoxtbc9M4%2BWrsJODRSjnQiPZSSkrsuzkeBbZAC9uFKV9CK5lfW0c8QPymOZR3OM1FPKDIwqARd7%2BRHV2bdorArHHAbE0t4pIWOxzw%2B%2BHimUAPAMQrHcx0jyvYoXjtx%2FD0dbovv6dsnEanedA8ggKZLEKexRzBqVvbTclPzriotVbks3jUxd30auc9kMwgdI8u6QN8IWyDMyBI2l3DHXbSOYNnqgMxYKm5dMGlOq2YsHxqDqmhjt6TbU6xAAsaeyrLTwA%2Bcpw2eiqwmbpREd0sm9HwoEVW0Vh2KWCZ1bbnplQwJZu3rbL9T1nA7yFMqOb3ztVHbGW2KRtfEDg1lbroqb7PVgJwcZX%2FasaHtFBQtONDxNXglyBq%2BVil%2FUwfucj08%2BEdedVfYwjAAkWNjWkVYslv2UFkWe4jCr28O%2BBjqkAbB%2BeRW3rx4BCn5DUC3nmcFePXtWflZSZzVWTr2ncDkcT9KjjVVbLj2FgvPOjtinlWdYOGg12AkRSBIS1BsAk4t3yXAvGGUd%2FMcvlobogsP6pTfoZfclehAGsTwM%2FiJC7xqHgS01U9Cx841i7YnjfEhfAUFk%2FkibDK7y%2BsbwQpuftnTx8qOC0rTtrmXKn14jPSeD%2F3C55UnOjCCUBho9a1m4kzr3&X-Amz-Signature=868fbe5adedbb3a5ff989a50b0f9cc2d02ee82958dc663cb910e952b1c67d0ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
