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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKTOUXR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD07NT7wvfVNo%2FvkhfROPUKiyB%2FCAGXXOQD6z%2FCXEAeSAIgWo%2FmZtkCCnMhZnR7WWUxjo53HHh0fbDB5FL5MTvhoZAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPGD5FoddMZulZsvXyrcAxw3tC4dk3cWqNwVXNBuYs8ootVXg66b9b3Or5%2BxMo13Jkf0yqC4zLyufPtJMFk0ytgZ6ktiws%2FWk7YnX8t4sFNUmlJ3pqWAVSTVkJ%2BAwpD%2FBvNyw1aqqM6m%2FAWXprxg4wrwppeXllzoJTGRSQAdHnWfLNzUrNQco1uddzrqKB3K%2BnYqbQQu4nhZA%2FTyvXjvM5EdjySJYXIflHQoPBf2Eu39g%2FtVeLiLyqI9JEJfADmw%2BF7J898HOmL4yiGXTb3kLG4ujWkUosP2v2sk1NCk33sIbreDekGc99af9yEFQfirGYolQntgvMpJ35x%2F9y1tWsb5DarCY9AYPNqgpOXLg5hWiGcZYNqyeib04Utl7GXnnuOO3gdS0IZTUmabTLNqDECTylTsqYbtEfgyPDlFnCWk48ASVy3USY85QNNcNIagW%2FiPhRo%2BIuFXY%2FdA1eZZDkWVQvXowqm1GDUmTmtluSzor4PMczf6PHBBq72QHlr9BNogMbv3sqikKoNabrN62%2FpCyv%2FkREvFolB5wthZ0%2FbvlvoVFgLAZc7HaPvSZtW8wCwuHl%2FqNUgWdL7wpuIzton%2B%2Fbe56k4Hsn3vcJu3gA3DbZnuflPLxkEcDfpFutt9SX5NfL50%2BiF7llynMPSE1MMGOqUByxaw3ieh1H5YWjcqTOiPSaIjdoj9p3hj%2FgS0%2BBLwG%2FNYcyT3AsgPnk1%2Beon2UCmd7EbDGu1xFaMq14CXaxf%2BLd2YfscMFSqQ7dHXhLcCxEIa%2Bqb44EfNb45aosWsYDx7zrGsKCQqYCqBz7%2ByyMLdWIsIaasBSjTb3uSmd0l76f8a2VqzJwcFI%2BZtra61tcBPDz%2BksBxJUUsKQ7Hzz4lQss7nqc%2BF&X-Amz-Signature=e7214e9e90d87e83709a58ab25100886e83150aefa9795d82eb911dfbfc43bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKTOUXR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD07NT7wvfVNo%2FvkhfROPUKiyB%2FCAGXXOQD6z%2FCXEAeSAIgWo%2FmZtkCCnMhZnR7WWUxjo53HHh0fbDB5FL5MTvhoZAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPGD5FoddMZulZsvXyrcAxw3tC4dk3cWqNwVXNBuYs8ootVXg66b9b3Or5%2BxMo13Jkf0yqC4zLyufPtJMFk0ytgZ6ktiws%2FWk7YnX8t4sFNUmlJ3pqWAVSTVkJ%2BAwpD%2FBvNyw1aqqM6m%2FAWXprxg4wrwppeXllzoJTGRSQAdHnWfLNzUrNQco1uddzrqKB3K%2BnYqbQQu4nhZA%2FTyvXjvM5EdjySJYXIflHQoPBf2Eu39g%2FtVeLiLyqI9JEJfADmw%2BF7J898HOmL4yiGXTb3kLG4ujWkUosP2v2sk1NCk33sIbreDekGc99af9yEFQfirGYolQntgvMpJ35x%2F9y1tWsb5DarCY9AYPNqgpOXLg5hWiGcZYNqyeib04Utl7GXnnuOO3gdS0IZTUmabTLNqDECTylTsqYbtEfgyPDlFnCWk48ASVy3USY85QNNcNIagW%2FiPhRo%2BIuFXY%2FdA1eZZDkWVQvXowqm1GDUmTmtluSzor4PMczf6PHBBq72QHlr9BNogMbv3sqikKoNabrN62%2FpCyv%2FkREvFolB5wthZ0%2FbvlvoVFgLAZc7HaPvSZtW8wCwuHl%2FqNUgWdL7wpuIzton%2B%2Fbe56k4Hsn3vcJu3gA3DbZnuflPLxkEcDfpFutt9SX5NfL50%2BiF7llynMPSE1MMGOqUByxaw3ieh1H5YWjcqTOiPSaIjdoj9p3hj%2FgS0%2BBLwG%2FNYcyT3AsgPnk1%2Beon2UCmd7EbDGu1xFaMq14CXaxf%2BLd2YfscMFSqQ7dHXhLcCxEIa%2Bqb44EfNb45aosWsYDx7zrGsKCQqYCqBz7%2ByyMLdWIsIaasBSjTb3uSmd0l76f8a2VqzJwcFI%2BZtra61tcBPDz%2BksBxJUUsKQ7Hzz4lQss7nqc%2BF&X-Amz-Signature=cbfe6a119d58306c9b52cb18f0629657d4653b7b94d21f5c1adabf0b6248e9fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKTOUXR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD07NT7wvfVNo%2FvkhfROPUKiyB%2FCAGXXOQD6z%2FCXEAeSAIgWo%2FmZtkCCnMhZnR7WWUxjo53HHh0fbDB5FL5MTvhoZAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPGD5FoddMZulZsvXyrcAxw3tC4dk3cWqNwVXNBuYs8ootVXg66b9b3Or5%2BxMo13Jkf0yqC4zLyufPtJMFk0ytgZ6ktiws%2FWk7YnX8t4sFNUmlJ3pqWAVSTVkJ%2BAwpD%2FBvNyw1aqqM6m%2FAWXprxg4wrwppeXllzoJTGRSQAdHnWfLNzUrNQco1uddzrqKB3K%2BnYqbQQu4nhZA%2FTyvXjvM5EdjySJYXIflHQoPBf2Eu39g%2FtVeLiLyqI9JEJfADmw%2BF7J898HOmL4yiGXTb3kLG4ujWkUosP2v2sk1NCk33sIbreDekGc99af9yEFQfirGYolQntgvMpJ35x%2F9y1tWsb5DarCY9AYPNqgpOXLg5hWiGcZYNqyeib04Utl7GXnnuOO3gdS0IZTUmabTLNqDECTylTsqYbtEfgyPDlFnCWk48ASVy3USY85QNNcNIagW%2FiPhRo%2BIuFXY%2FdA1eZZDkWVQvXowqm1GDUmTmtluSzor4PMczf6PHBBq72QHlr9BNogMbv3sqikKoNabrN62%2FpCyv%2FkREvFolB5wthZ0%2FbvlvoVFgLAZc7HaPvSZtW8wCwuHl%2FqNUgWdL7wpuIzton%2B%2Fbe56k4Hsn3vcJu3gA3DbZnuflPLxkEcDfpFutt9SX5NfL50%2BiF7llynMPSE1MMGOqUByxaw3ieh1H5YWjcqTOiPSaIjdoj9p3hj%2FgS0%2BBLwG%2FNYcyT3AsgPnk1%2Beon2UCmd7EbDGu1xFaMq14CXaxf%2BLd2YfscMFSqQ7dHXhLcCxEIa%2Bqb44EfNb45aosWsYDx7zrGsKCQqYCqBz7%2ByyMLdWIsIaasBSjTb3uSmd0l76f8a2VqzJwcFI%2BZtra61tcBPDz%2BksBxJUUsKQ7Hzz4lQss7nqc%2BF&X-Amz-Signature=9240141a6ce8d538aadf50c131e287c06c4571fad8ef25b7e181d1bad2fb0913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKTOUXR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD07NT7wvfVNo%2FvkhfROPUKiyB%2FCAGXXOQD6z%2FCXEAeSAIgWo%2FmZtkCCnMhZnR7WWUxjo53HHh0fbDB5FL5MTvhoZAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPGD5FoddMZulZsvXyrcAxw3tC4dk3cWqNwVXNBuYs8ootVXg66b9b3Or5%2BxMo13Jkf0yqC4zLyufPtJMFk0ytgZ6ktiws%2FWk7YnX8t4sFNUmlJ3pqWAVSTVkJ%2BAwpD%2FBvNyw1aqqM6m%2FAWXprxg4wrwppeXllzoJTGRSQAdHnWfLNzUrNQco1uddzrqKB3K%2BnYqbQQu4nhZA%2FTyvXjvM5EdjySJYXIflHQoPBf2Eu39g%2FtVeLiLyqI9JEJfADmw%2BF7J898HOmL4yiGXTb3kLG4ujWkUosP2v2sk1NCk33sIbreDekGc99af9yEFQfirGYolQntgvMpJ35x%2F9y1tWsb5DarCY9AYPNqgpOXLg5hWiGcZYNqyeib04Utl7GXnnuOO3gdS0IZTUmabTLNqDECTylTsqYbtEfgyPDlFnCWk48ASVy3USY85QNNcNIagW%2FiPhRo%2BIuFXY%2FdA1eZZDkWVQvXowqm1GDUmTmtluSzor4PMczf6PHBBq72QHlr9BNogMbv3sqikKoNabrN62%2FpCyv%2FkREvFolB5wthZ0%2FbvlvoVFgLAZc7HaPvSZtW8wCwuHl%2FqNUgWdL7wpuIzton%2B%2Fbe56k4Hsn3vcJu3gA3DbZnuflPLxkEcDfpFutt9SX5NfL50%2BiF7llynMPSE1MMGOqUByxaw3ieh1H5YWjcqTOiPSaIjdoj9p3hj%2FgS0%2BBLwG%2FNYcyT3AsgPnk1%2Beon2UCmd7EbDGu1xFaMq14CXaxf%2BLd2YfscMFSqQ7dHXhLcCxEIa%2Bqb44EfNb45aosWsYDx7zrGsKCQqYCqBz7%2ByyMLdWIsIaasBSjTb3uSmd0l76f8a2VqzJwcFI%2BZtra61tcBPDz%2BksBxJUUsKQ7Hzz4lQss7nqc%2BF&X-Amz-Signature=910891cb62c3bef1efb5e504f2f3261107409d11ff6454c970f130d7c3f55370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKTOUXR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD07NT7wvfVNo%2FvkhfROPUKiyB%2FCAGXXOQD6z%2FCXEAeSAIgWo%2FmZtkCCnMhZnR7WWUxjo53HHh0fbDB5FL5MTvhoZAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPGD5FoddMZulZsvXyrcAxw3tC4dk3cWqNwVXNBuYs8ootVXg66b9b3Or5%2BxMo13Jkf0yqC4zLyufPtJMFk0ytgZ6ktiws%2FWk7YnX8t4sFNUmlJ3pqWAVSTVkJ%2BAwpD%2FBvNyw1aqqM6m%2FAWXprxg4wrwppeXllzoJTGRSQAdHnWfLNzUrNQco1uddzrqKB3K%2BnYqbQQu4nhZA%2FTyvXjvM5EdjySJYXIflHQoPBf2Eu39g%2FtVeLiLyqI9JEJfADmw%2BF7J898HOmL4yiGXTb3kLG4ujWkUosP2v2sk1NCk33sIbreDekGc99af9yEFQfirGYolQntgvMpJ35x%2F9y1tWsb5DarCY9AYPNqgpOXLg5hWiGcZYNqyeib04Utl7GXnnuOO3gdS0IZTUmabTLNqDECTylTsqYbtEfgyPDlFnCWk48ASVy3USY85QNNcNIagW%2FiPhRo%2BIuFXY%2FdA1eZZDkWVQvXowqm1GDUmTmtluSzor4PMczf6PHBBq72QHlr9BNogMbv3sqikKoNabrN62%2FpCyv%2FkREvFolB5wthZ0%2FbvlvoVFgLAZc7HaPvSZtW8wCwuHl%2FqNUgWdL7wpuIzton%2B%2Fbe56k4Hsn3vcJu3gA3DbZnuflPLxkEcDfpFutt9SX5NfL50%2BiF7llynMPSE1MMGOqUByxaw3ieh1H5YWjcqTOiPSaIjdoj9p3hj%2FgS0%2BBLwG%2FNYcyT3AsgPnk1%2Beon2UCmd7EbDGu1xFaMq14CXaxf%2BLd2YfscMFSqQ7dHXhLcCxEIa%2Bqb44EfNb45aosWsYDx7zrGsKCQqYCqBz7%2ByyMLdWIsIaasBSjTb3uSmd0l76f8a2VqzJwcFI%2BZtra61tcBPDz%2BksBxJUUsKQ7Hzz4lQss7nqc%2BF&X-Amz-Signature=5ae2ecebe0625eff14877d151a370a638daca7e4431e8cc886621c6311cd548e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKTOUXR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD07NT7wvfVNo%2FvkhfROPUKiyB%2FCAGXXOQD6z%2FCXEAeSAIgWo%2FmZtkCCnMhZnR7WWUxjo53HHh0fbDB5FL5MTvhoZAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPGD5FoddMZulZsvXyrcAxw3tC4dk3cWqNwVXNBuYs8ootVXg66b9b3Or5%2BxMo13Jkf0yqC4zLyufPtJMFk0ytgZ6ktiws%2FWk7YnX8t4sFNUmlJ3pqWAVSTVkJ%2BAwpD%2FBvNyw1aqqM6m%2FAWXprxg4wrwppeXllzoJTGRSQAdHnWfLNzUrNQco1uddzrqKB3K%2BnYqbQQu4nhZA%2FTyvXjvM5EdjySJYXIflHQoPBf2Eu39g%2FtVeLiLyqI9JEJfADmw%2BF7J898HOmL4yiGXTb3kLG4ujWkUosP2v2sk1NCk33sIbreDekGc99af9yEFQfirGYolQntgvMpJ35x%2F9y1tWsb5DarCY9AYPNqgpOXLg5hWiGcZYNqyeib04Utl7GXnnuOO3gdS0IZTUmabTLNqDECTylTsqYbtEfgyPDlFnCWk48ASVy3USY85QNNcNIagW%2FiPhRo%2BIuFXY%2FdA1eZZDkWVQvXowqm1GDUmTmtluSzor4PMczf6PHBBq72QHlr9BNogMbv3sqikKoNabrN62%2FpCyv%2FkREvFolB5wthZ0%2FbvlvoVFgLAZc7HaPvSZtW8wCwuHl%2FqNUgWdL7wpuIzton%2B%2Fbe56k4Hsn3vcJu3gA3DbZnuflPLxkEcDfpFutt9SX5NfL50%2BiF7llynMPSE1MMGOqUByxaw3ieh1H5YWjcqTOiPSaIjdoj9p3hj%2FgS0%2BBLwG%2FNYcyT3AsgPnk1%2Beon2UCmd7EbDGu1xFaMq14CXaxf%2BLd2YfscMFSqQ7dHXhLcCxEIa%2Bqb44EfNb45aosWsYDx7zrGsKCQqYCqBz7%2ByyMLdWIsIaasBSjTb3uSmd0l76f8a2VqzJwcFI%2BZtra61tcBPDz%2BksBxJUUsKQ7Hzz4lQss7nqc%2BF&X-Amz-Signature=6e3ff780c3d400ec88c246a4cdf17aa5b476dc858b8f8aab54397ebcea4fafb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKTOUXR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD07NT7wvfVNo%2FvkhfROPUKiyB%2FCAGXXOQD6z%2FCXEAeSAIgWo%2FmZtkCCnMhZnR7WWUxjo53HHh0fbDB5FL5MTvhoZAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPGD5FoddMZulZsvXyrcAxw3tC4dk3cWqNwVXNBuYs8ootVXg66b9b3Or5%2BxMo13Jkf0yqC4zLyufPtJMFk0ytgZ6ktiws%2FWk7YnX8t4sFNUmlJ3pqWAVSTVkJ%2BAwpD%2FBvNyw1aqqM6m%2FAWXprxg4wrwppeXllzoJTGRSQAdHnWfLNzUrNQco1uddzrqKB3K%2BnYqbQQu4nhZA%2FTyvXjvM5EdjySJYXIflHQoPBf2Eu39g%2FtVeLiLyqI9JEJfADmw%2BF7J898HOmL4yiGXTb3kLG4ujWkUosP2v2sk1NCk33sIbreDekGc99af9yEFQfirGYolQntgvMpJ35x%2F9y1tWsb5DarCY9AYPNqgpOXLg5hWiGcZYNqyeib04Utl7GXnnuOO3gdS0IZTUmabTLNqDECTylTsqYbtEfgyPDlFnCWk48ASVy3USY85QNNcNIagW%2FiPhRo%2BIuFXY%2FdA1eZZDkWVQvXowqm1GDUmTmtluSzor4PMczf6PHBBq72QHlr9BNogMbv3sqikKoNabrN62%2FpCyv%2FkREvFolB5wthZ0%2FbvlvoVFgLAZc7HaPvSZtW8wCwuHl%2FqNUgWdL7wpuIzton%2B%2Fbe56k4Hsn3vcJu3gA3DbZnuflPLxkEcDfpFutt9SX5NfL50%2BiF7llynMPSE1MMGOqUByxaw3ieh1H5YWjcqTOiPSaIjdoj9p3hj%2FgS0%2BBLwG%2FNYcyT3AsgPnk1%2Beon2UCmd7EbDGu1xFaMq14CXaxf%2BLd2YfscMFSqQ7dHXhLcCxEIa%2Bqb44EfNb45aosWsYDx7zrGsKCQqYCqBz7%2ByyMLdWIsIaasBSjTb3uSmd0l76f8a2VqzJwcFI%2BZtra61tcBPDz%2BksBxJUUsKQ7Hzz4lQss7nqc%2BF&X-Amz-Signature=02c00922edf0b70db328cf6de9b0f8cd2904f8ba42728b8d6c164e57210ab471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CKTOUXR%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQD07NT7wvfVNo%2FvkhfROPUKiyB%2FCAGXXOQD6z%2FCXEAeSAIgWo%2FmZtkCCnMhZnR7WWUxjo53HHh0fbDB5FL5MTvhoZAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDPGD5FoddMZulZsvXyrcAxw3tC4dk3cWqNwVXNBuYs8ootVXg66b9b3Or5%2BxMo13Jkf0yqC4zLyufPtJMFk0ytgZ6ktiws%2FWk7YnX8t4sFNUmlJ3pqWAVSTVkJ%2BAwpD%2FBvNyw1aqqM6m%2FAWXprxg4wrwppeXllzoJTGRSQAdHnWfLNzUrNQco1uddzrqKB3K%2BnYqbQQu4nhZA%2FTyvXjvM5EdjySJYXIflHQoPBf2Eu39g%2FtVeLiLyqI9JEJfADmw%2BF7J898HOmL4yiGXTb3kLG4ujWkUosP2v2sk1NCk33sIbreDekGc99af9yEFQfirGYolQntgvMpJ35x%2F9y1tWsb5DarCY9AYPNqgpOXLg5hWiGcZYNqyeib04Utl7GXnnuOO3gdS0IZTUmabTLNqDECTylTsqYbtEfgyPDlFnCWk48ASVy3USY85QNNcNIagW%2FiPhRo%2BIuFXY%2FdA1eZZDkWVQvXowqm1GDUmTmtluSzor4PMczf6PHBBq72QHlr9BNogMbv3sqikKoNabrN62%2FpCyv%2FkREvFolB5wthZ0%2FbvlvoVFgLAZc7HaPvSZtW8wCwuHl%2FqNUgWdL7wpuIzton%2B%2Fbe56k4Hsn3vcJu3gA3DbZnuflPLxkEcDfpFutt9SX5NfL50%2BiF7llynMPSE1MMGOqUByxaw3ieh1H5YWjcqTOiPSaIjdoj9p3hj%2FgS0%2BBLwG%2FNYcyT3AsgPnk1%2Beon2UCmd7EbDGu1xFaMq14CXaxf%2BLd2YfscMFSqQ7dHXhLcCxEIa%2Bqb44EfNb45aosWsYDx7zrGsKCQqYCqBz7%2ByyMLdWIsIaasBSjTb3uSmd0l76f8a2VqzJwcFI%2BZtra61tcBPDz%2BksBxJUUsKQ7Hzz4lQss7nqc%2BF&X-Amz-Signature=121e59ce6592f7e34deabe4971f19b5dff5856ef123b055f626512de8db8bb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
