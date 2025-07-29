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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GYJK2G%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGeOC2wkCNGEAyT8Qzfila5gWi2IWygQirpgrIKBtRX2AiEAvDgX6BfkZH5687ozs1AeTsozIYblAHKJyE1I6dGO0H4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRlxcBlPQvoghHpkCrcA1GRAWtC5OLHQXyq9FNNbbTmMH%2BIH4cC6RI3GcrBAz6wz%2B%2BEq6Ie2kcsI%2FrDWVy7a1S4pp2v3lIvFNag0egyJqKQmYThN2tms1LjeedBz7ACReLzX%2FyKT2fbqBio4xdTM5I2OXbJ9RCT2LvUm%2F1qrSfNLHmydjX4w9fAtYwRbWGv6c3Rd0Y1n%2FeN%2FLTGWpOOWrQKlOMstlF3JqcZSOn6tkTq2rMxm29D2apMIgo4y5APANdVtwFgRu30iBVulPjVx1EoimCWk1sBAEVDSLwb1%2B%2Fr9S3YlNGdW4wPO1DEKSJoJQjFpZgXf5LnyKIL5fMFwMCcizhtgD80sJS6Iuy%2BsoFt9sZYWYx60q1BqA4qKSt8E8eq2Cae6f7Pf7RsQbDK7MN8jrKnTfpnCwUv9NFGN9naxI8OfJb1JRAdoI5mlwrya3JWRyFxcoWJrRMZy5uV%2FsqvvfeAXH2i2L0jwxJ91OYh3Xlk4MAXPREJbAaNmm5%2FMQIU%2FMb9VgVVMgktb201AhgZRtADZgHWJdGgcIolBMNkbCDicQk0W6LnB%2BwaPdj0fZMGWpgRAaSga%2BC7He3JHyg7L%2FojqqzlwcoiQozTmtH5dZwLC4BIFLnVlsXqmQtK84NYMkcXEKrN%2BjuFMMyYo8QGOqUBDQkElvEe6X5y807qSlIxt%2BgQJGsr9Viwr0NkUpRvpAxoZvymkfuYWDVUNmyAHADL98AryyformawXKrfMxle9fdzkHuUSMgPWHz3WCWvGPRK9n%2FEmys3BCrdkE%2F7EDCUl0%2Fiz2duXMfJHbWKqnxfrtpUdXHdOE2cD%2BiC6Wyw3ZUCy%2BsoTbiYzVZAkeESaqGj5ZN%2BFaH5R%2BScmsDGjZEwEqUoplij&X-Amz-Signature=8ffac1191f6c9df1147a67db554f3ba10e30fd7b238997cf351353d7401d6169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GYJK2G%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGeOC2wkCNGEAyT8Qzfila5gWi2IWygQirpgrIKBtRX2AiEAvDgX6BfkZH5687ozs1AeTsozIYblAHKJyE1I6dGO0H4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRlxcBlPQvoghHpkCrcA1GRAWtC5OLHQXyq9FNNbbTmMH%2BIH4cC6RI3GcrBAz6wz%2B%2BEq6Ie2kcsI%2FrDWVy7a1S4pp2v3lIvFNag0egyJqKQmYThN2tms1LjeedBz7ACReLzX%2FyKT2fbqBio4xdTM5I2OXbJ9RCT2LvUm%2F1qrSfNLHmydjX4w9fAtYwRbWGv6c3Rd0Y1n%2FeN%2FLTGWpOOWrQKlOMstlF3JqcZSOn6tkTq2rMxm29D2apMIgo4y5APANdVtwFgRu30iBVulPjVx1EoimCWk1sBAEVDSLwb1%2B%2Fr9S3YlNGdW4wPO1DEKSJoJQjFpZgXf5LnyKIL5fMFwMCcizhtgD80sJS6Iuy%2BsoFt9sZYWYx60q1BqA4qKSt8E8eq2Cae6f7Pf7RsQbDK7MN8jrKnTfpnCwUv9NFGN9naxI8OfJb1JRAdoI5mlwrya3JWRyFxcoWJrRMZy5uV%2FsqvvfeAXH2i2L0jwxJ91OYh3Xlk4MAXPREJbAaNmm5%2FMQIU%2FMb9VgVVMgktb201AhgZRtADZgHWJdGgcIolBMNkbCDicQk0W6LnB%2BwaPdj0fZMGWpgRAaSga%2BC7He3JHyg7L%2FojqqzlwcoiQozTmtH5dZwLC4BIFLnVlsXqmQtK84NYMkcXEKrN%2BjuFMMyYo8QGOqUBDQkElvEe6X5y807qSlIxt%2BgQJGsr9Viwr0NkUpRvpAxoZvymkfuYWDVUNmyAHADL98AryyformawXKrfMxle9fdzkHuUSMgPWHz3WCWvGPRK9n%2FEmys3BCrdkE%2F7EDCUl0%2Fiz2duXMfJHbWKqnxfrtpUdXHdOE2cD%2BiC6Wyw3ZUCy%2BsoTbiYzVZAkeESaqGj5ZN%2BFaH5R%2BScmsDGjZEwEqUoplij&X-Amz-Signature=e1409be4130de437375e9bef1f5fe19d74fd5112327a280139710c1c7e0f0ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GYJK2G%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGeOC2wkCNGEAyT8Qzfila5gWi2IWygQirpgrIKBtRX2AiEAvDgX6BfkZH5687ozs1AeTsozIYblAHKJyE1I6dGO0H4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRlxcBlPQvoghHpkCrcA1GRAWtC5OLHQXyq9FNNbbTmMH%2BIH4cC6RI3GcrBAz6wz%2B%2BEq6Ie2kcsI%2FrDWVy7a1S4pp2v3lIvFNag0egyJqKQmYThN2tms1LjeedBz7ACReLzX%2FyKT2fbqBio4xdTM5I2OXbJ9RCT2LvUm%2F1qrSfNLHmydjX4w9fAtYwRbWGv6c3Rd0Y1n%2FeN%2FLTGWpOOWrQKlOMstlF3JqcZSOn6tkTq2rMxm29D2apMIgo4y5APANdVtwFgRu30iBVulPjVx1EoimCWk1sBAEVDSLwb1%2B%2Fr9S3YlNGdW4wPO1DEKSJoJQjFpZgXf5LnyKIL5fMFwMCcizhtgD80sJS6Iuy%2BsoFt9sZYWYx60q1BqA4qKSt8E8eq2Cae6f7Pf7RsQbDK7MN8jrKnTfpnCwUv9NFGN9naxI8OfJb1JRAdoI5mlwrya3JWRyFxcoWJrRMZy5uV%2FsqvvfeAXH2i2L0jwxJ91OYh3Xlk4MAXPREJbAaNmm5%2FMQIU%2FMb9VgVVMgktb201AhgZRtADZgHWJdGgcIolBMNkbCDicQk0W6LnB%2BwaPdj0fZMGWpgRAaSga%2BC7He3JHyg7L%2FojqqzlwcoiQozTmtH5dZwLC4BIFLnVlsXqmQtK84NYMkcXEKrN%2BjuFMMyYo8QGOqUBDQkElvEe6X5y807qSlIxt%2BgQJGsr9Viwr0NkUpRvpAxoZvymkfuYWDVUNmyAHADL98AryyformawXKrfMxle9fdzkHuUSMgPWHz3WCWvGPRK9n%2FEmys3BCrdkE%2F7EDCUl0%2Fiz2duXMfJHbWKqnxfrtpUdXHdOE2cD%2BiC6Wyw3ZUCy%2BsoTbiYzVZAkeESaqGj5ZN%2BFaH5R%2BScmsDGjZEwEqUoplij&X-Amz-Signature=35fe61d34d888b07d47028311143f747785a6fb83db8d062b7b8aed124996527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GYJK2G%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGeOC2wkCNGEAyT8Qzfila5gWi2IWygQirpgrIKBtRX2AiEAvDgX6BfkZH5687ozs1AeTsozIYblAHKJyE1I6dGO0H4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRlxcBlPQvoghHpkCrcA1GRAWtC5OLHQXyq9FNNbbTmMH%2BIH4cC6RI3GcrBAz6wz%2B%2BEq6Ie2kcsI%2FrDWVy7a1S4pp2v3lIvFNag0egyJqKQmYThN2tms1LjeedBz7ACReLzX%2FyKT2fbqBio4xdTM5I2OXbJ9RCT2LvUm%2F1qrSfNLHmydjX4w9fAtYwRbWGv6c3Rd0Y1n%2FeN%2FLTGWpOOWrQKlOMstlF3JqcZSOn6tkTq2rMxm29D2apMIgo4y5APANdVtwFgRu30iBVulPjVx1EoimCWk1sBAEVDSLwb1%2B%2Fr9S3YlNGdW4wPO1DEKSJoJQjFpZgXf5LnyKIL5fMFwMCcizhtgD80sJS6Iuy%2BsoFt9sZYWYx60q1BqA4qKSt8E8eq2Cae6f7Pf7RsQbDK7MN8jrKnTfpnCwUv9NFGN9naxI8OfJb1JRAdoI5mlwrya3JWRyFxcoWJrRMZy5uV%2FsqvvfeAXH2i2L0jwxJ91OYh3Xlk4MAXPREJbAaNmm5%2FMQIU%2FMb9VgVVMgktb201AhgZRtADZgHWJdGgcIolBMNkbCDicQk0W6LnB%2BwaPdj0fZMGWpgRAaSga%2BC7He3JHyg7L%2FojqqzlwcoiQozTmtH5dZwLC4BIFLnVlsXqmQtK84NYMkcXEKrN%2BjuFMMyYo8QGOqUBDQkElvEe6X5y807qSlIxt%2BgQJGsr9Viwr0NkUpRvpAxoZvymkfuYWDVUNmyAHADL98AryyformawXKrfMxle9fdzkHuUSMgPWHz3WCWvGPRK9n%2FEmys3BCrdkE%2F7EDCUl0%2Fiz2duXMfJHbWKqnxfrtpUdXHdOE2cD%2BiC6Wyw3ZUCy%2BsoTbiYzVZAkeESaqGj5ZN%2BFaH5R%2BScmsDGjZEwEqUoplij&X-Amz-Signature=568a5603bac488cbe0a5363046672edafd669a40ce2be45402624295ac8e9d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GYJK2G%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGeOC2wkCNGEAyT8Qzfila5gWi2IWygQirpgrIKBtRX2AiEAvDgX6BfkZH5687ozs1AeTsozIYblAHKJyE1I6dGO0H4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRlxcBlPQvoghHpkCrcA1GRAWtC5OLHQXyq9FNNbbTmMH%2BIH4cC6RI3GcrBAz6wz%2B%2BEq6Ie2kcsI%2FrDWVy7a1S4pp2v3lIvFNag0egyJqKQmYThN2tms1LjeedBz7ACReLzX%2FyKT2fbqBio4xdTM5I2OXbJ9RCT2LvUm%2F1qrSfNLHmydjX4w9fAtYwRbWGv6c3Rd0Y1n%2FeN%2FLTGWpOOWrQKlOMstlF3JqcZSOn6tkTq2rMxm29D2apMIgo4y5APANdVtwFgRu30iBVulPjVx1EoimCWk1sBAEVDSLwb1%2B%2Fr9S3YlNGdW4wPO1DEKSJoJQjFpZgXf5LnyKIL5fMFwMCcizhtgD80sJS6Iuy%2BsoFt9sZYWYx60q1BqA4qKSt8E8eq2Cae6f7Pf7RsQbDK7MN8jrKnTfpnCwUv9NFGN9naxI8OfJb1JRAdoI5mlwrya3JWRyFxcoWJrRMZy5uV%2FsqvvfeAXH2i2L0jwxJ91OYh3Xlk4MAXPREJbAaNmm5%2FMQIU%2FMb9VgVVMgktb201AhgZRtADZgHWJdGgcIolBMNkbCDicQk0W6LnB%2BwaPdj0fZMGWpgRAaSga%2BC7He3JHyg7L%2FojqqzlwcoiQozTmtH5dZwLC4BIFLnVlsXqmQtK84NYMkcXEKrN%2BjuFMMyYo8QGOqUBDQkElvEe6X5y807qSlIxt%2BgQJGsr9Viwr0NkUpRvpAxoZvymkfuYWDVUNmyAHADL98AryyformawXKrfMxle9fdzkHuUSMgPWHz3WCWvGPRK9n%2FEmys3BCrdkE%2F7EDCUl0%2Fiz2duXMfJHbWKqnxfrtpUdXHdOE2cD%2BiC6Wyw3ZUCy%2BsoTbiYzVZAkeESaqGj5ZN%2BFaH5R%2BScmsDGjZEwEqUoplij&X-Amz-Signature=b85c1f861dccdeed5bdb1d6fda51eb2545d4e1fc4edec5ffb1c02790ef21c340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GYJK2G%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGeOC2wkCNGEAyT8Qzfila5gWi2IWygQirpgrIKBtRX2AiEAvDgX6BfkZH5687ozs1AeTsozIYblAHKJyE1I6dGO0H4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRlxcBlPQvoghHpkCrcA1GRAWtC5OLHQXyq9FNNbbTmMH%2BIH4cC6RI3GcrBAz6wz%2B%2BEq6Ie2kcsI%2FrDWVy7a1S4pp2v3lIvFNag0egyJqKQmYThN2tms1LjeedBz7ACReLzX%2FyKT2fbqBio4xdTM5I2OXbJ9RCT2LvUm%2F1qrSfNLHmydjX4w9fAtYwRbWGv6c3Rd0Y1n%2FeN%2FLTGWpOOWrQKlOMstlF3JqcZSOn6tkTq2rMxm29D2apMIgo4y5APANdVtwFgRu30iBVulPjVx1EoimCWk1sBAEVDSLwb1%2B%2Fr9S3YlNGdW4wPO1DEKSJoJQjFpZgXf5LnyKIL5fMFwMCcizhtgD80sJS6Iuy%2BsoFt9sZYWYx60q1BqA4qKSt8E8eq2Cae6f7Pf7RsQbDK7MN8jrKnTfpnCwUv9NFGN9naxI8OfJb1JRAdoI5mlwrya3JWRyFxcoWJrRMZy5uV%2FsqvvfeAXH2i2L0jwxJ91OYh3Xlk4MAXPREJbAaNmm5%2FMQIU%2FMb9VgVVMgktb201AhgZRtADZgHWJdGgcIolBMNkbCDicQk0W6LnB%2BwaPdj0fZMGWpgRAaSga%2BC7He3JHyg7L%2FojqqzlwcoiQozTmtH5dZwLC4BIFLnVlsXqmQtK84NYMkcXEKrN%2BjuFMMyYo8QGOqUBDQkElvEe6X5y807qSlIxt%2BgQJGsr9Viwr0NkUpRvpAxoZvymkfuYWDVUNmyAHADL98AryyformawXKrfMxle9fdzkHuUSMgPWHz3WCWvGPRK9n%2FEmys3BCrdkE%2F7EDCUl0%2Fiz2duXMfJHbWKqnxfrtpUdXHdOE2cD%2BiC6Wyw3ZUCy%2BsoTbiYzVZAkeESaqGj5ZN%2BFaH5R%2BScmsDGjZEwEqUoplij&X-Amz-Signature=1dcae9cd679b9cbb2c4240732e7540214b1a41c7e0d592707a23ce36b8eea479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GYJK2G%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGeOC2wkCNGEAyT8Qzfila5gWi2IWygQirpgrIKBtRX2AiEAvDgX6BfkZH5687ozs1AeTsozIYblAHKJyE1I6dGO0H4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRlxcBlPQvoghHpkCrcA1GRAWtC5OLHQXyq9FNNbbTmMH%2BIH4cC6RI3GcrBAz6wz%2B%2BEq6Ie2kcsI%2FrDWVy7a1S4pp2v3lIvFNag0egyJqKQmYThN2tms1LjeedBz7ACReLzX%2FyKT2fbqBio4xdTM5I2OXbJ9RCT2LvUm%2F1qrSfNLHmydjX4w9fAtYwRbWGv6c3Rd0Y1n%2FeN%2FLTGWpOOWrQKlOMstlF3JqcZSOn6tkTq2rMxm29D2apMIgo4y5APANdVtwFgRu30iBVulPjVx1EoimCWk1sBAEVDSLwb1%2B%2Fr9S3YlNGdW4wPO1DEKSJoJQjFpZgXf5LnyKIL5fMFwMCcizhtgD80sJS6Iuy%2BsoFt9sZYWYx60q1BqA4qKSt8E8eq2Cae6f7Pf7RsQbDK7MN8jrKnTfpnCwUv9NFGN9naxI8OfJb1JRAdoI5mlwrya3JWRyFxcoWJrRMZy5uV%2FsqvvfeAXH2i2L0jwxJ91OYh3Xlk4MAXPREJbAaNmm5%2FMQIU%2FMb9VgVVMgktb201AhgZRtADZgHWJdGgcIolBMNkbCDicQk0W6LnB%2BwaPdj0fZMGWpgRAaSga%2BC7He3JHyg7L%2FojqqzlwcoiQozTmtH5dZwLC4BIFLnVlsXqmQtK84NYMkcXEKrN%2BjuFMMyYo8QGOqUBDQkElvEe6X5y807qSlIxt%2BgQJGsr9Viwr0NkUpRvpAxoZvymkfuYWDVUNmyAHADL98AryyformawXKrfMxle9fdzkHuUSMgPWHz3WCWvGPRK9n%2FEmys3BCrdkE%2F7EDCUl0%2Fiz2duXMfJHbWKqnxfrtpUdXHdOE2cD%2BiC6Wyw3ZUCy%2BsoTbiYzVZAkeESaqGj5ZN%2BFaH5R%2BScmsDGjZEwEqUoplij&X-Amz-Signature=3e2bbcbf9905ca4879e54d3a8f475d5871eaf7db1093614ffd7cf2f06a9e46d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GYJK2G%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGeOC2wkCNGEAyT8Qzfila5gWi2IWygQirpgrIKBtRX2AiEAvDgX6BfkZH5687ozs1AeTsozIYblAHKJyE1I6dGO0H4qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRlxcBlPQvoghHpkCrcA1GRAWtC5OLHQXyq9FNNbbTmMH%2BIH4cC6RI3GcrBAz6wz%2B%2BEq6Ie2kcsI%2FrDWVy7a1S4pp2v3lIvFNag0egyJqKQmYThN2tms1LjeedBz7ACReLzX%2FyKT2fbqBio4xdTM5I2OXbJ9RCT2LvUm%2F1qrSfNLHmydjX4w9fAtYwRbWGv6c3Rd0Y1n%2FeN%2FLTGWpOOWrQKlOMstlF3JqcZSOn6tkTq2rMxm29D2apMIgo4y5APANdVtwFgRu30iBVulPjVx1EoimCWk1sBAEVDSLwb1%2B%2Fr9S3YlNGdW4wPO1DEKSJoJQjFpZgXf5LnyKIL5fMFwMCcizhtgD80sJS6Iuy%2BsoFt9sZYWYx60q1BqA4qKSt8E8eq2Cae6f7Pf7RsQbDK7MN8jrKnTfpnCwUv9NFGN9naxI8OfJb1JRAdoI5mlwrya3JWRyFxcoWJrRMZy5uV%2FsqvvfeAXH2i2L0jwxJ91OYh3Xlk4MAXPREJbAaNmm5%2FMQIU%2FMb9VgVVMgktb201AhgZRtADZgHWJdGgcIolBMNkbCDicQk0W6LnB%2BwaPdj0fZMGWpgRAaSga%2BC7He3JHyg7L%2FojqqzlwcoiQozTmtH5dZwLC4BIFLnVlsXqmQtK84NYMkcXEKrN%2BjuFMMyYo8QGOqUBDQkElvEe6X5y807qSlIxt%2BgQJGsr9Viwr0NkUpRvpAxoZvymkfuYWDVUNmyAHADL98AryyformawXKrfMxle9fdzkHuUSMgPWHz3WCWvGPRK9n%2FEmys3BCrdkE%2F7EDCUl0%2Fiz2duXMfJHbWKqnxfrtpUdXHdOE2cD%2BiC6Wyw3ZUCy%2BsoTbiYzVZAkeESaqGj5ZN%2BFaH5R%2BScmsDGjZEwEqUoplij&X-Amz-Signature=d1c722c2fc1253b04fd094f754ef447280e719bc35166c7d90b3aa22cf8ac378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
