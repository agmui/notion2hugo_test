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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIK6FJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAFnm57TxBi1smxLow8wYzDdeDcYhjOneVkiR7SmpA6AAiAtrUkpVQLq15v7CLxFPg17fY%2B0NXsR9ZCiGblmELDKKyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMERaTPIo7PdaKNuaYKtwDchdCfmMlVldvtAfq4KSqDJCcvGnHnPO4vrltU9vGce5DY9Y%2BcrZF%2Bp3yJyyZFnD2ehfi%2B5nnWstttp4xkoFwpR4TKatewSO4WUBMk3v4XMQIYQ4y8Jdu6Wxgmy%2B8cPGcW01svunXAwo4YcGppA5VdXRqOqjzFMkPRKziMCnTgVYAn%2BQpbpYnJV3Hh1l6B6Wq5OLofPip6HT7P5g%2FbKGkdN7JIpyq%2BALANuqHL8UYUKBUu0J6rdQ2g4uuNa7vIzfODcp50RcieIkmebVDwL5AJWGzYl%2BOUeSJlXceKZN3oNzALN7p66qQvjC5xzH8Q1%2Fi3%2BsYvmFo3gnbdGnwU%2FT08aDtB3YxXrgNv4skRRmmg41UTbtnATgCnnOx0MBy%2BamBjeVngmTx1GzRrXz95%2F9ZlMs2p%2F0HTrOlBbPkP7WLHRPlg4gpGSA%2Fow%2BDBaicoR51KlEvD3%2FwPkBS8U0H9jbwFK4VCGhCSvpuM5ftFb2hLo%2Fg4biwLXwCvGJIcPxuWO2MLorgN3wHQ%2Bj%2BLufRY1aKYO0vOVzvKba4bNeHDy9GoFQXxnfHt7viGBuVhP3PqYlANJtOCcrHeSDM3sskc6J0zVfLfvg6ksyCyKrm6ENwTi9%2FNXvraZN%2BxAp%2FbN4w0P%2FQvQY6pgHPxem2SJjbA9Ox2gIS8LW7D1AgLVR6q4dS6V5qNTLf7VKsXGhS8iAUiyc4OviAL1kkZyze%2FCHmWbxrBE4KJH%2BWtD5aQBSsIYLWtqF1VMqvRXN29X28yuvNiIv9rlZhXhfZiDw3S87gtZyn%2BaSkHgeNi%2BHJGYhlvZr972YRSuwfaA%2BMuYjlOUbgJhy8jKr6mpn3N82xRGzOGv1OlQAlOx93uU%2B5YuAM&X-Amz-Signature=644182f3bb79adf5e513cf3cdaca0f38063c6119527332dc72b7cb1cf562825b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIK6FJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAFnm57TxBi1smxLow8wYzDdeDcYhjOneVkiR7SmpA6AAiAtrUkpVQLq15v7CLxFPg17fY%2B0NXsR9ZCiGblmELDKKyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMERaTPIo7PdaKNuaYKtwDchdCfmMlVldvtAfq4KSqDJCcvGnHnPO4vrltU9vGce5DY9Y%2BcrZF%2Bp3yJyyZFnD2ehfi%2B5nnWstttp4xkoFwpR4TKatewSO4WUBMk3v4XMQIYQ4y8Jdu6Wxgmy%2B8cPGcW01svunXAwo4YcGppA5VdXRqOqjzFMkPRKziMCnTgVYAn%2BQpbpYnJV3Hh1l6B6Wq5OLofPip6HT7P5g%2FbKGkdN7JIpyq%2BALANuqHL8UYUKBUu0J6rdQ2g4uuNa7vIzfODcp50RcieIkmebVDwL5AJWGzYl%2BOUeSJlXceKZN3oNzALN7p66qQvjC5xzH8Q1%2Fi3%2BsYvmFo3gnbdGnwU%2FT08aDtB3YxXrgNv4skRRmmg41UTbtnATgCnnOx0MBy%2BamBjeVngmTx1GzRrXz95%2F9ZlMs2p%2F0HTrOlBbPkP7WLHRPlg4gpGSA%2Fow%2BDBaicoR51KlEvD3%2FwPkBS8U0H9jbwFK4VCGhCSvpuM5ftFb2hLo%2Fg4biwLXwCvGJIcPxuWO2MLorgN3wHQ%2Bj%2BLufRY1aKYO0vOVzvKba4bNeHDy9GoFQXxnfHt7viGBuVhP3PqYlANJtOCcrHeSDM3sskc6J0zVfLfvg6ksyCyKrm6ENwTi9%2FNXvraZN%2BxAp%2FbN4w0P%2FQvQY6pgHPxem2SJjbA9Ox2gIS8LW7D1AgLVR6q4dS6V5qNTLf7VKsXGhS8iAUiyc4OviAL1kkZyze%2FCHmWbxrBE4KJH%2BWtD5aQBSsIYLWtqF1VMqvRXN29X28yuvNiIv9rlZhXhfZiDw3S87gtZyn%2BaSkHgeNi%2BHJGYhlvZr972YRSuwfaA%2BMuYjlOUbgJhy8jKr6mpn3N82xRGzOGv1OlQAlOx93uU%2B5YuAM&X-Amz-Signature=69dc767dba1ce5fd29a6631d981325865d640373a0339bd2638b7da4baca832b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIK6FJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAFnm57TxBi1smxLow8wYzDdeDcYhjOneVkiR7SmpA6AAiAtrUkpVQLq15v7CLxFPg17fY%2B0NXsR9ZCiGblmELDKKyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMERaTPIo7PdaKNuaYKtwDchdCfmMlVldvtAfq4KSqDJCcvGnHnPO4vrltU9vGce5DY9Y%2BcrZF%2Bp3yJyyZFnD2ehfi%2B5nnWstttp4xkoFwpR4TKatewSO4WUBMk3v4XMQIYQ4y8Jdu6Wxgmy%2B8cPGcW01svunXAwo4YcGppA5VdXRqOqjzFMkPRKziMCnTgVYAn%2BQpbpYnJV3Hh1l6B6Wq5OLofPip6HT7P5g%2FbKGkdN7JIpyq%2BALANuqHL8UYUKBUu0J6rdQ2g4uuNa7vIzfODcp50RcieIkmebVDwL5AJWGzYl%2BOUeSJlXceKZN3oNzALN7p66qQvjC5xzH8Q1%2Fi3%2BsYvmFo3gnbdGnwU%2FT08aDtB3YxXrgNv4skRRmmg41UTbtnATgCnnOx0MBy%2BamBjeVngmTx1GzRrXz95%2F9ZlMs2p%2F0HTrOlBbPkP7WLHRPlg4gpGSA%2Fow%2BDBaicoR51KlEvD3%2FwPkBS8U0H9jbwFK4VCGhCSvpuM5ftFb2hLo%2Fg4biwLXwCvGJIcPxuWO2MLorgN3wHQ%2Bj%2BLufRY1aKYO0vOVzvKba4bNeHDy9GoFQXxnfHt7viGBuVhP3PqYlANJtOCcrHeSDM3sskc6J0zVfLfvg6ksyCyKrm6ENwTi9%2FNXvraZN%2BxAp%2FbN4w0P%2FQvQY6pgHPxem2SJjbA9Ox2gIS8LW7D1AgLVR6q4dS6V5qNTLf7VKsXGhS8iAUiyc4OviAL1kkZyze%2FCHmWbxrBE4KJH%2BWtD5aQBSsIYLWtqF1VMqvRXN29X28yuvNiIv9rlZhXhfZiDw3S87gtZyn%2BaSkHgeNi%2BHJGYhlvZr972YRSuwfaA%2BMuYjlOUbgJhy8jKr6mpn3N82xRGzOGv1OlQAlOx93uU%2B5YuAM&X-Amz-Signature=febbd5c3f839a31430ba2d7f290c4394e2a564f01e264170033b14d79ba24156&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIK6FJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAFnm57TxBi1smxLow8wYzDdeDcYhjOneVkiR7SmpA6AAiAtrUkpVQLq15v7CLxFPg17fY%2B0NXsR9ZCiGblmELDKKyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMERaTPIo7PdaKNuaYKtwDchdCfmMlVldvtAfq4KSqDJCcvGnHnPO4vrltU9vGce5DY9Y%2BcrZF%2Bp3yJyyZFnD2ehfi%2B5nnWstttp4xkoFwpR4TKatewSO4WUBMk3v4XMQIYQ4y8Jdu6Wxgmy%2B8cPGcW01svunXAwo4YcGppA5VdXRqOqjzFMkPRKziMCnTgVYAn%2BQpbpYnJV3Hh1l6B6Wq5OLofPip6HT7P5g%2FbKGkdN7JIpyq%2BALANuqHL8UYUKBUu0J6rdQ2g4uuNa7vIzfODcp50RcieIkmebVDwL5AJWGzYl%2BOUeSJlXceKZN3oNzALN7p66qQvjC5xzH8Q1%2Fi3%2BsYvmFo3gnbdGnwU%2FT08aDtB3YxXrgNv4skRRmmg41UTbtnATgCnnOx0MBy%2BamBjeVngmTx1GzRrXz95%2F9ZlMs2p%2F0HTrOlBbPkP7WLHRPlg4gpGSA%2Fow%2BDBaicoR51KlEvD3%2FwPkBS8U0H9jbwFK4VCGhCSvpuM5ftFb2hLo%2Fg4biwLXwCvGJIcPxuWO2MLorgN3wHQ%2Bj%2BLufRY1aKYO0vOVzvKba4bNeHDy9GoFQXxnfHt7viGBuVhP3PqYlANJtOCcrHeSDM3sskc6J0zVfLfvg6ksyCyKrm6ENwTi9%2FNXvraZN%2BxAp%2FbN4w0P%2FQvQY6pgHPxem2SJjbA9Ox2gIS8LW7D1AgLVR6q4dS6V5qNTLf7VKsXGhS8iAUiyc4OviAL1kkZyze%2FCHmWbxrBE4KJH%2BWtD5aQBSsIYLWtqF1VMqvRXN29X28yuvNiIv9rlZhXhfZiDw3S87gtZyn%2BaSkHgeNi%2BHJGYhlvZr972YRSuwfaA%2BMuYjlOUbgJhy8jKr6mpn3N82xRGzOGv1OlQAlOx93uU%2B5YuAM&X-Amz-Signature=835d46daa27c23b6c00ad893e32cd8903789934b5c83b90a86a958db277e5914&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIK6FJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAFnm57TxBi1smxLow8wYzDdeDcYhjOneVkiR7SmpA6AAiAtrUkpVQLq15v7CLxFPg17fY%2B0NXsR9ZCiGblmELDKKyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMERaTPIo7PdaKNuaYKtwDchdCfmMlVldvtAfq4KSqDJCcvGnHnPO4vrltU9vGce5DY9Y%2BcrZF%2Bp3yJyyZFnD2ehfi%2B5nnWstttp4xkoFwpR4TKatewSO4WUBMk3v4XMQIYQ4y8Jdu6Wxgmy%2B8cPGcW01svunXAwo4YcGppA5VdXRqOqjzFMkPRKziMCnTgVYAn%2BQpbpYnJV3Hh1l6B6Wq5OLofPip6HT7P5g%2FbKGkdN7JIpyq%2BALANuqHL8UYUKBUu0J6rdQ2g4uuNa7vIzfODcp50RcieIkmebVDwL5AJWGzYl%2BOUeSJlXceKZN3oNzALN7p66qQvjC5xzH8Q1%2Fi3%2BsYvmFo3gnbdGnwU%2FT08aDtB3YxXrgNv4skRRmmg41UTbtnATgCnnOx0MBy%2BamBjeVngmTx1GzRrXz95%2F9ZlMs2p%2F0HTrOlBbPkP7WLHRPlg4gpGSA%2Fow%2BDBaicoR51KlEvD3%2FwPkBS8U0H9jbwFK4VCGhCSvpuM5ftFb2hLo%2Fg4biwLXwCvGJIcPxuWO2MLorgN3wHQ%2Bj%2BLufRY1aKYO0vOVzvKba4bNeHDy9GoFQXxnfHt7viGBuVhP3PqYlANJtOCcrHeSDM3sskc6J0zVfLfvg6ksyCyKrm6ENwTi9%2FNXvraZN%2BxAp%2FbN4w0P%2FQvQY6pgHPxem2SJjbA9Ox2gIS8LW7D1AgLVR6q4dS6V5qNTLf7VKsXGhS8iAUiyc4OviAL1kkZyze%2FCHmWbxrBE4KJH%2BWtD5aQBSsIYLWtqF1VMqvRXN29X28yuvNiIv9rlZhXhfZiDw3S87gtZyn%2BaSkHgeNi%2BHJGYhlvZr972YRSuwfaA%2BMuYjlOUbgJhy8jKr6mpn3N82xRGzOGv1OlQAlOx93uU%2B5YuAM&X-Amz-Signature=de1afd83e6149b3a0a8488a1edc8d20f3b74ce9aa0357ed623c32f4235209333&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIK6FJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAFnm57TxBi1smxLow8wYzDdeDcYhjOneVkiR7SmpA6AAiAtrUkpVQLq15v7CLxFPg17fY%2B0NXsR9ZCiGblmELDKKyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMERaTPIo7PdaKNuaYKtwDchdCfmMlVldvtAfq4KSqDJCcvGnHnPO4vrltU9vGce5DY9Y%2BcrZF%2Bp3yJyyZFnD2ehfi%2B5nnWstttp4xkoFwpR4TKatewSO4WUBMk3v4XMQIYQ4y8Jdu6Wxgmy%2B8cPGcW01svunXAwo4YcGppA5VdXRqOqjzFMkPRKziMCnTgVYAn%2BQpbpYnJV3Hh1l6B6Wq5OLofPip6HT7P5g%2FbKGkdN7JIpyq%2BALANuqHL8UYUKBUu0J6rdQ2g4uuNa7vIzfODcp50RcieIkmebVDwL5AJWGzYl%2BOUeSJlXceKZN3oNzALN7p66qQvjC5xzH8Q1%2Fi3%2BsYvmFo3gnbdGnwU%2FT08aDtB3YxXrgNv4skRRmmg41UTbtnATgCnnOx0MBy%2BamBjeVngmTx1GzRrXz95%2F9ZlMs2p%2F0HTrOlBbPkP7WLHRPlg4gpGSA%2Fow%2BDBaicoR51KlEvD3%2FwPkBS8U0H9jbwFK4VCGhCSvpuM5ftFb2hLo%2Fg4biwLXwCvGJIcPxuWO2MLorgN3wHQ%2Bj%2BLufRY1aKYO0vOVzvKba4bNeHDy9GoFQXxnfHt7viGBuVhP3PqYlANJtOCcrHeSDM3sskc6J0zVfLfvg6ksyCyKrm6ENwTi9%2FNXvraZN%2BxAp%2FbN4w0P%2FQvQY6pgHPxem2SJjbA9Ox2gIS8LW7D1AgLVR6q4dS6V5qNTLf7VKsXGhS8iAUiyc4OviAL1kkZyze%2FCHmWbxrBE4KJH%2BWtD5aQBSsIYLWtqF1VMqvRXN29X28yuvNiIv9rlZhXhfZiDw3S87gtZyn%2BaSkHgeNi%2BHJGYhlvZr972YRSuwfaA%2BMuYjlOUbgJhy8jKr6mpn3N82xRGzOGv1OlQAlOx93uU%2B5YuAM&X-Amz-Signature=3078c5e464031e33bc7356299c361ff2a6de53dfc42f1ef2b8280de0237a7cde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIK6FJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAFnm57TxBi1smxLow8wYzDdeDcYhjOneVkiR7SmpA6AAiAtrUkpVQLq15v7CLxFPg17fY%2B0NXsR9ZCiGblmELDKKyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMERaTPIo7PdaKNuaYKtwDchdCfmMlVldvtAfq4KSqDJCcvGnHnPO4vrltU9vGce5DY9Y%2BcrZF%2Bp3yJyyZFnD2ehfi%2B5nnWstttp4xkoFwpR4TKatewSO4WUBMk3v4XMQIYQ4y8Jdu6Wxgmy%2B8cPGcW01svunXAwo4YcGppA5VdXRqOqjzFMkPRKziMCnTgVYAn%2BQpbpYnJV3Hh1l6B6Wq5OLofPip6HT7P5g%2FbKGkdN7JIpyq%2BALANuqHL8UYUKBUu0J6rdQ2g4uuNa7vIzfODcp50RcieIkmebVDwL5AJWGzYl%2BOUeSJlXceKZN3oNzALN7p66qQvjC5xzH8Q1%2Fi3%2BsYvmFo3gnbdGnwU%2FT08aDtB3YxXrgNv4skRRmmg41UTbtnATgCnnOx0MBy%2BamBjeVngmTx1GzRrXz95%2F9ZlMs2p%2F0HTrOlBbPkP7WLHRPlg4gpGSA%2Fow%2BDBaicoR51KlEvD3%2FwPkBS8U0H9jbwFK4VCGhCSvpuM5ftFb2hLo%2Fg4biwLXwCvGJIcPxuWO2MLorgN3wHQ%2Bj%2BLufRY1aKYO0vOVzvKba4bNeHDy9GoFQXxnfHt7viGBuVhP3PqYlANJtOCcrHeSDM3sskc6J0zVfLfvg6ksyCyKrm6ENwTi9%2FNXvraZN%2BxAp%2FbN4w0P%2FQvQY6pgHPxem2SJjbA9Ox2gIS8LW7D1AgLVR6q4dS6V5qNTLf7VKsXGhS8iAUiyc4OviAL1kkZyze%2FCHmWbxrBE4KJH%2BWtD5aQBSsIYLWtqF1VMqvRXN29X28yuvNiIv9rlZhXhfZiDw3S87gtZyn%2BaSkHgeNi%2BHJGYhlvZr972YRSuwfaA%2BMuYjlOUbgJhy8jKr6mpn3N82xRGzOGv1OlQAlOx93uU%2B5YuAM&X-Amz-Signature=0ac2d98b0a7b05e24a11783d4d5052740c00e405f7e91faa76229c68195a206e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CHIK6FJ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIAFnm57TxBi1smxLow8wYzDdeDcYhjOneVkiR7SmpA6AAiAtrUkpVQLq15v7CLxFPg17fY%2B0NXsR9ZCiGblmELDKKyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMERaTPIo7PdaKNuaYKtwDchdCfmMlVldvtAfq4KSqDJCcvGnHnPO4vrltU9vGce5DY9Y%2BcrZF%2Bp3yJyyZFnD2ehfi%2B5nnWstttp4xkoFwpR4TKatewSO4WUBMk3v4XMQIYQ4y8Jdu6Wxgmy%2B8cPGcW01svunXAwo4YcGppA5VdXRqOqjzFMkPRKziMCnTgVYAn%2BQpbpYnJV3Hh1l6B6Wq5OLofPip6HT7P5g%2FbKGkdN7JIpyq%2BALANuqHL8UYUKBUu0J6rdQ2g4uuNa7vIzfODcp50RcieIkmebVDwL5AJWGzYl%2BOUeSJlXceKZN3oNzALN7p66qQvjC5xzH8Q1%2Fi3%2BsYvmFo3gnbdGnwU%2FT08aDtB3YxXrgNv4skRRmmg41UTbtnATgCnnOx0MBy%2BamBjeVngmTx1GzRrXz95%2F9ZlMs2p%2F0HTrOlBbPkP7WLHRPlg4gpGSA%2Fow%2BDBaicoR51KlEvD3%2FwPkBS8U0H9jbwFK4VCGhCSvpuM5ftFb2hLo%2Fg4biwLXwCvGJIcPxuWO2MLorgN3wHQ%2Bj%2BLufRY1aKYO0vOVzvKba4bNeHDy9GoFQXxnfHt7viGBuVhP3PqYlANJtOCcrHeSDM3sskc6J0zVfLfvg6ksyCyKrm6ENwTi9%2FNXvraZN%2BxAp%2FbN4w0P%2FQvQY6pgHPxem2SJjbA9Ox2gIS8LW7D1AgLVR6q4dS6V5qNTLf7VKsXGhS8iAUiyc4OviAL1kkZyze%2FCHmWbxrBE4KJH%2BWtD5aQBSsIYLWtqF1VMqvRXN29X28yuvNiIv9rlZhXhfZiDw3S87gtZyn%2BaSkHgeNi%2BHJGYhlvZr972YRSuwfaA%2BMuYjlOUbgJhy8jKr6mpn3N82xRGzOGv1OlQAlOx93uU%2B5YuAM&X-Amz-Signature=278d44e2618ac8cede23ac147966ff50a84b2639e5f51b7d4017202d998ca1fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
