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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WW65SQL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDhhcsvZ2tsDcJXCkIfVpyOAu7qU17A206sHr393P8axAiB0Ai%2F6H06kAlAK8ew4ShjMNLpG8UbfPPp7NgZ%2B6g%2FLgSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJRcJFCVgNTXl7f2jKtwDxspLdS6lA6fPo6qSu4%2FUbgJ%2FOHK3cpAVnFzwTxTvK7IVeO4UMwCyacdJ8cFZsSyZhXT5U7DZ70Z6%2BNu7W4okK17lsFTSLQsvPAgOzcRDDPT3yiCfsqOGKAeR4C8FvIGjAANqsSqDPk9sqiv9nTlm1zyiB5XgBy1TzIREgv8esDQxCEfftqertSxErKdwhU3MECD%2BPm1%2BNTEiqJ%2FQwBRZDwhYU87h1aDlCVWEcTMZaxnTruuygZECyYZTyhuaMZUQKpf25EgoYHGlTk5FhWKcx8YcS0cWSdSsAjeY2024NZ1K%2FU2m4BP7Zp7VkHP7PJ%2BkTmSEEHKCMmZ3b6qlU9pXOlIKzKp7Vn6EzW%2FsDEhuOWX61kavuY0n4qu4oSglCuMpNmIUylOeC5oouNDCdf%2BCrbzqD4crs6oi20h4F6UMrv4K88WOVqG5OsCyrTKsSnEh7w0yDFc2fJFJhg2azr1zQ8St%2BJMd8v1eXDoaSZzlTOqfcO%2FDOYODrQqpZ8hvqfL2BdeTZp0GBR1b0rY3UVuYjDNl93A%2Ff44QydtsGq%2BQsplwZGSjqnrIG1vKOhQYl3POko%2FdwI%2B%2B0hC6hBBlBCnYBL4J2Nht6BVCcDD7JRY5xJfr%2FF1rQjdWs3EpLcswmNWCwgY6pgHSKh3W4aFHzZccusZ1ChoNL71DBIO4%2F3yGTWAaobaw6NIuoWoYwlvkZUS%2BLSJLhymJF4Pgbhfsf9M2tq4Ag59dQwHeuE9RmUW1zb01CJi3K%2BUvb8vKWBFdzdKQMYRcXebigjC1D1U%2FHLqK8Lsc9zF%2F7EnQ5%2BR5aUbf8kQFjqRsndeaFdpZKPFnJD1QqrIwJy%2F86Z9XI4sHfSK00%2FA5k4qJrxX4ZrJd&X-Amz-Signature=3c3b7ff78ce92c716c0dac01048377e6bca946b6775ad9d5bdc7feaad4236d51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WW65SQL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDhhcsvZ2tsDcJXCkIfVpyOAu7qU17A206sHr393P8axAiB0Ai%2F6H06kAlAK8ew4ShjMNLpG8UbfPPp7NgZ%2B6g%2FLgSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJRcJFCVgNTXl7f2jKtwDxspLdS6lA6fPo6qSu4%2FUbgJ%2FOHK3cpAVnFzwTxTvK7IVeO4UMwCyacdJ8cFZsSyZhXT5U7DZ70Z6%2BNu7W4okK17lsFTSLQsvPAgOzcRDDPT3yiCfsqOGKAeR4C8FvIGjAANqsSqDPk9sqiv9nTlm1zyiB5XgBy1TzIREgv8esDQxCEfftqertSxErKdwhU3MECD%2BPm1%2BNTEiqJ%2FQwBRZDwhYU87h1aDlCVWEcTMZaxnTruuygZECyYZTyhuaMZUQKpf25EgoYHGlTk5FhWKcx8YcS0cWSdSsAjeY2024NZ1K%2FU2m4BP7Zp7VkHP7PJ%2BkTmSEEHKCMmZ3b6qlU9pXOlIKzKp7Vn6EzW%2FsDEhuOWX61kavuY0n4qu4oSglCuMpNmIUylOeC5oouNDCdf%2BCrbzqD4crs6oi20h4F6UMrv4K88WOVqG5OsCyrTKsSnEh7w0yDFc2fJFJhg2azr1zQ8St%2BJMd8v1eXDoaSZzlTOqfcO%2FDOYODrQqpZ8hvqfL2BdeTZp0GBR1b0rY3UVuYjDNl93A%2Ff44QydtsGq%2BQsplwZGSjqnrIG1vKOhQYl3POko%2FdwI%2B%2B0hC6hBBlBCnYBL4J2Nht6BVCcDD7JRY5xJfr%2FF1rQjdWs3EpLcswmNWCwgY6pgHSKh3W4aFHzZccusZ1ChoNL71DBIO4%2F3yGTWAaobaw6NIuoWoYwlvkZUS%2BLSJLhymJF4Pgbhfsf9M2tq4Ag59dQwHeuE9RmUW1zb01CJi3K%2BUvb8vKWBFdzdKQMYRcXebigjC1D1U%2FHLqK8Lsc9zF%2F7EnQ5%2BR5aUbf8kQFjqRsndeaFdpZKPFnJD1QqrIwJy%2F86Z9XI4sHfSK00%2FA5k4qJrxX4ZrJd&X-Amz-Signature=c9f66acb529139d311dd2d6427856b8100070853e4d5f11e20b9bec84e5e9a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WW65SQL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDhhcsvZ2tsDcJXCkIfVpyOAu7qU17A206sHr393P8axAiB0Ai%2F6H06kAlAK8ew4ShjMNLpG8UbfPPp7NgZ%2B6g%2FLgSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJRcJFCVgNTXl7f2jKtwDxspLdS6lA6fPo6qSu4%2FUbgJ%2FOHK3cpAVnFzwTxTvK7IVeO4UMwCyacdJ8cFZsSyZhXT5U7DZ70Z6%2BNu7W4okK17lsFTSLQsvPAgOzcRDDPT3yiCfsqOGKAeR4C8FvIGjAANqsSqDPk9sqiv9nTlm1zyiB5XgBy1TzIREgv8esDQxCEfftqertSxErKdwhU3MECD%2BPm1%2BNTEiqJ%2FQwBRZDwhYU87h1aDlCVWEcTMZaxnTruuygZECyYZTyhuaMZUQKpf25EgoYHGlTk5FhWKcx8YcS0cWSdSsAjeY2024NZ1K%2FU2m4BP7Zp7VkHP7PJ%2BkTmSEEHKCMmZ3b6qlU9pXOlIKzKp7Vn6EzW%2FsDEhuOWX61kavuY0n4qu4oSglCuMpNmIUylOeC5oouNDCdf%2BCrbzqD4crs6oi20h4F6UMrv4K88WOVqG5OsCyrTKsSnEh7w0yDFc2fJFJhg2azr1zQ8St%2BJMd8v1eXDoaSZzlTOqfcO%2FDOYODrQqpZ8hvqfL2BdeTZp0GBR1b0rY3UVuYjDNl93A%2Ff44QydtsGq%2BQsplwZGSjqnrIG1vKOhQYl3POko%2FdwI%2B%2B0hC6hBBlBCnYBL4J2Nht6BVCcDD7JRY5xJfr%2FF1rQjdWs3EpLcswmNWCwgY6pgHSKh3W4aFHzZccusZ1ChoNL71DBIO4%2F3yGTWAaobaw6NIuoWoYwlvkZUS%2BLSJLhymJF4Pgbhfsf9M2tq4Ag59dQwHeuE9RmUW1zb01CJi3K%2BUvb8vKWBFdzdKQMYRcXebigjC1D1U%2FHLqK8Lsc9zF%2F7EnQ5%2BR5aUbf8kQFjqRsndeaFdpZKPFnJD1QqrIwJy%2F86Z9XI4sHfSK00%2FA5k4qJrxX4ZrJd&X-Amz-Signature=c588d8c3eb5ca0ed37e4435e3a28b7e9a7ad1898ef883c7b8980783b553bd723&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WW65SQL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDhhcsvZ2tsDcJXCkIfVpyOAu7qU17A206sHr393P8axAiB0Ai%2F6H06kAlAK8ew4ShjMNLpG8UbfPPp7NgZ%2B6g%2FLgSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJRcJFCVgNTXl7f2jKtwDxspLdS6lA6fPo6qSu4%2FUbgJ%2FOHK3cpAVnFzwTxTvK7IVeO4UMwCyacdJ8cFZsSyZhXT5U7DZ70Z6%2BNu7W4okK17lsFTSLQsvPAgOzcRDDPT3yiCfsqOGKAeR4C8FvIGjAANqsSqDPk9sqiv9nTlm1zyiB5XgBy1TzIREgv8esDQxCEfftqertSxErKdwhU3MECD%2BPm1%2BNTEiqJ%2FQwBRZDwhYU87h1aDlCVWEcTMZaxnTruuygZECyYZTyhuaMZUQKpf25EgoYHGlTk5FhWKcx8YcS0cWSdSsAjeY2024NZ1K%2FU2m4BP7Zp7VkHP7PJ%2BkTmSEEHKCMmZ3b6qlU9pXOlIKzKp7Vn6EzW%2FsDEhuOWX61kavuY0n4qu4oSglCuMpNmIUylOeC5oouNDCdf%2BCrbzqD4crs6oi20h4F6UMrv4K88WOVqG5OsCyrTKsSnEh7w0yDFc2fJFJhg2azr1zQ8St%2BJMd8v1eXDoaSZzlTOqfcO%2FDOYODrQqpZ8hvqfL2BdeTZp0GBR1b0rY3UVuYjDNl93A%2Ff44QydtsGq%2BQsplwZGSjqnrIG1vKOhQYl3POko%2FdwI%2B%2B0hC6hBBlBCnYBL4J2Nht6BVCcDD7JRY5xJfr%2FF1rQjdWs3EpLcswmNWCwgY6pgHSKh3W4aFHzZccusZ1ChoNL71DBIO4%2F3yGTWAaobaw6NIuoWoYwlvkZUS%2BLSJLhymJF4Pgbhfsf9M2tq4Ag59dQwHeuE9RmUW1zb01CJi3K%2BUvb8vKWBFdzdKQMYRcXebigjC1D1U%2FHLqK8Lsc9zF%2F7EnQ5%2BR5aUbf8kQFjqRsndeaFdpZKPFnJD1QqrIwJy%2F86Z9XI4sHfSK00%2FA5k4qJrxX4ZrJd&X-Amz-Signature=4b40c0f1e98e1e15bdaf9b45f68cc7beacf3a3c33ce7c6deb9e4378c8ac1140e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WW65SQL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDhhcsvZ2tsDcJXCkIfVpyOAu7qU17A206sHr393P8axAiB0Ai%2F6H06kAlAK8ew4ShjMNLpG8UbfPPp7NgZ%2B6g%2FLgSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJRcJFCVgNTXl7f2jKtwDxspLdS6lA6fPo6qSu4%2FUbgJ%2FOHK3cpAVnFzwTxTvK7IVeO4UMwCyacdJ8cFZsSyZhXT5U7DZ70Z6%2BNu7W4okK17lsFTSLQsvPAgOzcRDDPT3yiCfsqOGKAeR4C8FvIGjAANqsSqDPk9sqiv9nTlm1zyiB5XgBy1TzIREgv8esDQxCEfftqertSxErKdwhU3MECD%2BPm1%2BNTEiqJ%2FQwBRZDwhYU87h1aDlCVWEcTMZaxnTruuygZECyYZTyhuaMZUQKpf25EgoYHGlTk5FhWKcx8YcS0cWSdSsAjeY2024NZ1K%2FU2m4BP7Zp7VkHP7PJ%2BkTmSEEHKCMmZ3b6qlU9pXOlIKzKp7Vn6EzW%2FsDEhuOWX61kavuY0n4qu4oSglCuMpNmIUylOeC5oouNDCdf%2BCrbzqD4crs6oi20h4F6UMrv4K88WOVqG5OsCyrTKsSnEh7w0yDFc2fJFJhg2azr1zQ8St%2BJMd8v1eXDoaSZzlTOqfcO%2FDOYODrQqpZ8hvqfL2BdeTZp0GBR1b0rY3UVuYjDNl93A%2Ff44QydtsGq%2BQsplwZGSjqnrIG1vKOhQYl3POko%2FdwI%2B%2B0hC6hBBlBCnYBL4J2Nht6BVCcDD7JRY5xJfr%2FF1rQjdWs3EpLcswmNWCwgY6pgHSKh3W4aFHzZccusZ1ChoNL71DBIO4%2F3yGTWAaobaw6NIuoWoYwlvkZUS%2BLSJLhymJF4Pgbhfsf9M2tq4Ag59dQwHeuE9RmUW1zb01CJi3K%2BUvb8vKWBFdzdKQMYRcXebigjC1D1U%2FHLqK8Lsc9zF%2F7EnQ5%2BR5aUbf8kQFjqRsndeaFdpZKPFnJD1QqrIwJy%2F86Z9XI4sHfSK00%2FA5k4qJrxX4ZrJd&X-Amz-Signature=a350ff63f7cce6e92c1c4cf3b3e614c310b03351f211c9fd7420f36340d98686&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WW65SQL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDhhcsvZ2tsDcJXCkIfVpyOAu7qU17A206sHr393P8axAiB0Ai%2F6H06kAlAK8ew4ShjMNLpG8UbfPPp7NgZ%2B6g%2FLgSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJRcJFCVgNTXl7f2jKtwDxspLdS6lA6fPo6qSu4%2FUbgJ%2FOHK3cpAVnFzwTxTvK7IVeO4UMwCyacdJ8cFZsSyZhXT5U7DZ70Z6%2BNu7W4okK17lsFTSLQsvPAgOzcRDDPT3yiCfsqOGKAeR4C8FvIGjAANqsSqDPk9sqiv9nTlm1zyiB5XgBy1TzIREgv8esDQxCEfftqertSxErKdwhU3MECD%2BPm1%2BNTEiqJ%2FQwBRZDwhYU87h1aDlCVWEcTMZaxnTruuygZECyYZTyhuaMZUQKpf25EgoYHGlTk5FhWKcx8YcS0cWSdSsAjeY2024NZ1K%2FU2m4BP7Zp7VkHP7PJ%2BkTmSEEHKCMmZ3b6qlU9pXOlIKzKp7Vn6EzW%2FsDEhuOWX61kavuY0n4qu4oSglCuMpNmIUylOeC5oouNDCdf%2BCrbzqD4crs6oi20h4F6UMrv4K88WOVqG5OsCyrTKsSnEh7w0yDFc2fJFJhg2azr1zQ8St%2BJMd8v1eXDoaSZzlTOqfcO%2FDOYODrQqpZ8hvqfL2BdeTZp0GBR1b0rY3UVuYjDNl93A%2Ff44QydtsGq%2BQsplwZGSjqnrIG1vKOhQYl3POko%2FdwI%2B%2B0hC6hBBlBCnYBL4J2Nht6BVCcDD7JRY5xJfr%2FF1rQjdWs3EpLcswmNWCwgY6pgHSKh3W4aFHzZccusZ1ChoNL71DBIO4%2F3yGTWAaobaw6NIuoWoYwlvkZUS%2BLSJLhymJF4Pgbhfsf9M2tq4Ag59dQwHeuE9RmUW1zb01CJi3K%2BUvb8vKWBFdzdKQMYRcXebigjC1D1U%2FHLqK8Lsc9zF%2F7EnQ5%2BR5aUbf8kQFjqRsndeaFdpZKPFnJD1QqrIwJy%2F86Z9XI4sHfSK00%2FA5k4qJrxX4ZrJd&X-Amz-Signature=c2199c111111fef6d091a7f598912a7743f988490fe4060198ae4b4c45bc4070&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WW65SQL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDhhcsvZ2tsDcJXCkIfVpyOAu7qU17A206sHr393P8axAiB0Ai%2F6H06kAlAK8ew4ShjMNLpG8UbfPPp7NgZ%2B6g%2FLgSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJRcJFCVgNTXl7f2jKtwDxspLdS6lA6fPo6qSu4%2FUbgJ%2FOHK3cpAVnFzwTxTvK7IVeO4UMwCyacdJ8cFZsSyZhXT5U7DZ70Z6%2BNu7W4okK17lsFTSLQsvPAgOzcRDDPT3yiCfsqOGKAeR4C8FvIGjAANqsSqDPk9sqiv9nTlm1zyiB5XgBy1TzIREgv8esDQxCEfftqertSxErKdwhU3MECD%2BPm1%2BNTEiqJ%2FQwBRZDwhYU87h1aDlCVWEcTMZaxnTruuygZECyYZTyhuaMZUQKpf25EgoYHGlTk5FhWKcx8YcS0cWSdSsAjeY2024NZ1K%2FU2m4BP7Zp7VkHP7PJ%2BkTmSEEHKCMmZ3b6qlU9pXOlIKzKp7Vn6EzW%2FsDEhuOWX61kavuY0n4qu4oSglCuMpNmIUylOeC5oouNDCdf%2BCrbzqD4crs6oi20h4F6UMrv4K88WOVqG5OsCyrTKsSnEh7w0yDFc2fJFJhg2azr1zQ8St%2BJMd8v1eXDoaSZzlTOqfcO%2FDOYODrQqpZ8hvqfL2BdeTZp0GBR1b0rY3UVuYjDNl93A%2Ff44QydtsGq%2BQsplwZGSjqnrIG1vKOhQYl3POko%2FdwI%2B%2B0hC6hBBlBCnYBL4J2Nht6BVCcDD7JRY5xJfr%2FF1rQjdWs3EpLcswmNWCwgY6pgHSKh3W4aFHzZccusZ1ChoNL71DBIO4%2F3yGTWAaobaw6NIuoWoYwlvkZUS%2BLSJLhymJF4Pgbhfsf9M2tq4Ag59dQwHeuE9RmUW1zb01CJi3K%2BUvb8vKWBFdzdKQMYRcXebigjC1D1U%2FHLqK8Lsc9zF%2F7EnQ5%2BR5aUbf8kQFjqRsndeaFdpZKPFnJD1QqrIwJy%2F86Z9XI4sHfSK00%2FA5k4qJrxX4ZrJd&X-Amz-Signature=a4cdd02dba59dba408ebfc2dd13a63eda505a0349896e9489afc3e1c4a187877&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WW65SQL%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDhhcsvZ2tsDcJXCkIfVpyOAu7qU17A206sHr393P8axAiB0Ai%2F6H06kAlAK8ew4ShjMNLpG8UbfPPp7NgZ%2B6g%2FLgSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMJRcJFCVgNTXl7f2jKtwDxspLdS6lA6fPo6qSu4%2FUbgJ%2FOHK3cpAVnFzwTxTvK7IVeO4UMwCyacdJ8cFZsSyZhXT5U7DZ70Z6%2BNu7W4okK17lsFTSLQsvPAgOzcRDDPT3yiCfsqOGKAeR4C8FvIGjAANqsSqDPk9sqiv9nTlm1zyiB5XgBy1TzIREgv8esDQxCEfftqertSxErKdwhU3MECD%2BPm1%2BNTEiqJ%2FQwBRZDwhYU87h1aDlCVWEcTMZaxnTruuygZECyYZTyhuaMZUQKpf25EgoYHGlTk5FhWKcx8YcS0cWSdSsAjeY2024NZ1K%2FU2m4BP7Zp7VkHP7PJ%2BkTmSEEHKCMmZ3b6qlU9pXOlIKzKp7Vn6EzW%2FsDEhuOWX61kavuY0n4qu4oSglCuMpNmIUylOeC5oouNDCdf%2BCrbzqD4crs6oi20h4F6UMrv4K88WOVqG5OsCyrTKsSnEh7w0yDFc2fJFJhg2azr1zQ8St%2BJMd8v1eXDoaSZzlTOqfcO%2FDOYODrQqpZ8hvqfL2BdeTZp0GBR1b0rY3UVuYjDNl93A%2Ff44QydtsGq%2BQsplwZGSjqnrIG1vKOhQYl3POko%2FdwI%2B%2B0hC6hBBlBCnYBL4J2Nht6BVCcDD7JRY5xJfr%2FF1rQjdWs3EpLcswmNWCwgY6pgHSKh3W4aFHzZccusZ1ChoNL71DBIO4%2F3yGTWAaobaw6NIuoWoYwlvkZUS%2BLSJLhymJF4Pgbhfsf9M2tq4Ag59dQwHeuE9RmUW1zb01CJi3K%2BUvb8vKWBFdzdKQMYRcXebigjC1D1U%2FHLqK8Lsc9zF%2F7EnQ5%2BR5aUbf8kQFjqRsndeaFdpZKPFnJD1QqrIwJy%2F86Z9XI4sHfSK00%2FA5k4qJrxX4ZrJd&X-Amz-Signature=b5336d59343750de48a6896b841f9c26bf381eda157043357ec2281ee5f873fd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
