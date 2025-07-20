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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQ4B7QI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg7jyTGEdw5vMyGxI9wxDQLMwsHoORogDIp7ywcwTGQAiEAo9b2biWfbSt4ujQjjk33f6Ajora0QpG1y8F%2BXRyMkTwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQBMN4kfS%2FDPwxiuSrcA0%2B%2BepP4ndndEhf%2B%2FFhD%2BmQfXUV4VIkcOnHE%2BcwA2GfqLicXCSI8t9rLQSNxmS8DCuNu6VF3kPDg3I3kuUzsSVDJLubde2xj8Vds01dWuZ9RJfkyQLCTc6uqoDcliui2DZf7pd7yM9xpA1%2BeSYo5EqTvq1xK%2Bc2193dlmcuWtcckSfGnw%2Fq3qzyDWAGIKoDacjSwOJajQjUsA33tPVHmTSj1JE2t%2B%2B9U31lK7m3o9wvne5L4wbH0yLtLWsX5HqKuxmljFFK5%2BsCF%2FrV94kvL%2BwAAQKDWWdhJNCNFJYL2V3bYqAKq09LZPIFf1dnptoPmeDQmZ28BLp3mTsZwsyOPCNLHct3m4VL3tqxi3ywGRDBIvPuLLfrM%2BtwzfwtZSqF1Il44ZyTAvoFUMLAnpXS6%2FnPrlmg6Q%2Bnj3iNlY8zg6iByUdVAS2JKH%2BkvLWfM2g453Jodc%2FWaLpOOMX1oVya5MgRet1HhzVp%2BmV%2FrHvF%2BdKcCPKPfHvt2ycjaB%2FtVZTYDXbjdOLunERzDaAus6tKQZbb2uibNTv0tTx6689OGA2H13SDjF6z1Xlomn%2BaFlIZO2KYOX6TjYi0YVJVyX6BBACBg5knZP%2F5%2FOQWa16fa%2Bd98A9Mc4EuzcuiiYlJSMN7b88MGOqUBVZUcEOpCTaFHvOc3H0%2FLmQlRqo%2BnuEcnHH1tjn1gH3OtPQTg5GKbu4mSXeTY0ni5qwpOZ%2F0J%2BrAVN%2FrQQt6dC0iMhdNx871vLM3iOc1Mx835dg7uo%2BZ5FXNJoFCjUHi9TuGnIggvc0bFpYDMLI%2FEELKzmN1guM38y1b7%2FgcoyKdFWheHnaPEcXD%2Ffr0j7vmScZNR%2F5nqNadY6ExJ1qx4yetuSzqP&X-Amz-Signature=d62bc695f0facfc6f574cbd2204313b99d1a226422d7ce87f97e4494517e0cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQ4B7QI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg7jyTGEdw5vMyGxI9wxDQLMwsHoORogDIp7ywcwTGQAiEAo9b2biWfbSt4ujQjjk33f6Ajora0QpG1y8F%2BXRyMkTwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQBMN4kfS%2FDPwxiuSrcA0%2B%2BepP4ndndEhf%2B%2FFhD%2BmQfXUV4VIkcOnHE%2BcwA2GfqLicXCSI8t9rLQSNxmS8DCuNu6VF3kPDg3I3kuUzsSVDJLubde2xj8Vds01dWuZ9RJfkyQLCTc6uqoDcliui2DZf7pd7yM9xpA1%2BeSYo5EqTvq1xK%2Bc2193dlmcuWtcckSfGnw%2Fq3qzyDWAGIKoDacjSwOJajQjUsA33tPVHmTSj1JE2t%2B%2B9U31lK7m3o9wvne5L4wbH0yLtLWsX5HqKuxmljFFK5%2BsCF%2FrV94kvL%2BwAAQKDWWdhJNCNFJYL2V3bYqAKq09LZPIFf1dnptoPmeDQmZ28BLp3mTsZwsyOPCNLHct3m4VL3tqxi3ywGRDBIvPuLLfrM%2BtwzfwtZSqF1Il44ZyTAvoFUMLAnpXS6%2FnPrlmg6Q%2Bnj3iNlY8zg6iByUdVAS2JKH%2BkvLWfM2g453Jodc%2FWaLpOOMX1oVya5MgRet1HhzVp%2BmV%2FrHvF%2BdKcCPKPfHvt2ycjaB%2FtVZTYDXbjdOLunERzDaAus6tKQZbb2uibNTv0tTx6689OGA2H13SDjF6z1Xlomn%2BaFlIZO2KYOX6TjYi0YVJVyX6BBACBg5knZP%2F5%2FOQWa16fa%2Bd98A9Mc4EuzcuiiYlJSMN7b88MGOqUBVZUcEOpCTaFHvOc3H0%2FLmQlRqo%2BnuEcnHH1tjn1gH3OtPQTg5GKbu4mSXeTY0ni5qwpOZ%2F0J%2BrAVN%2FrQQt6dC0iMhdNx871vLM3iOc1Mx835dg7uo%2BZ5FXNJoFCjUHi9TuGnIggvc0bFpYDMLI%2FEELKzmN1guM38y1b7%2FgcoyKdFWheHnaPEcXD%2Ffr0j7vmScZNR%2F5nqNadY6ExJ1qx4yetuSzqP&X-Amz-Signature=139e91576388c3cff1e124ff391d6496ed803965e665d359769d042756a32027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQ4B7QI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg7jyTGEdw5vMyGxI9wxDQLMwsHoORogDIp7ywcwTGQAiEAo9b2biWfbSt4ujQjjk33f6Ajora0QpG1y8F%2BXRyMkTwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQBMN4kfS%2FDPwxiuSrcA0%2B%2BepP4ndndEhf%2B%2FFhD%2BmQfXUV4VIkcOnHE%2BcwA2GfqLicXCSI8t9rLQSNxmS8DCuNu6VF3kPDg3I3kuUzsSVDJLubde2xj8Vds01dWuZ9RJfkyQLCTc6uqoDcliui2DZf7pd7yM9xpA1%2BeSYo5EqTvq1xK%2Bc2193dlmcuWtcckSfGnw%2Fq3qzyDWAGIKoDacjSwOJajQjUsA33tPVHmTSj1JE2t%2B%2B9U31lK7m3o9wvne5L4wbH0yLtLWsX5HqKuxmljFFK5%2BsCF%2FrV94kvL%2BwAAQKDWWdhJNCNFJYL2V3bYqAKq09LZPIFf1dnptoPmeDQmZ28BLp3mTsZwsyOPCNLHct3m4VL3tqxi3ywGRDBIvPuLLfrM%2BtwzfwtZSqF1Il44ZyTAvoFUMLAnpXS6%2FnPrlmg6Q%2Bnj3iNlY8zg6iByUdVAS2JKH%2BkvLWfM2g453Jodc%2FWaLpOOMX1oVya5MgRet1HhzVp%2BmV%2FrHvF%2BdKcCPKPfHvt2ycjaB%2FtVZTYDXbjdOLunERzDaAus6tKQZbb2uibNTv0tTx6689OGA2H13SDjF6z1Xlomn%2BaFlIZO2KYOX6TjYi0YVJVyX6BBACBg5knZP%2F5%2FOQWa16fa%2Bd98A9Mc4EuzcuiiYlJSMN7b88MGOqUBVZUcEOpCTaFHvOc3H0%2FLmQlRqo%2BnuEcnHH1tjn1gH3OtPQTg5GKbu4mSXeTY0ni5qwpOZ%2F0J%2BrAVN%2FrQQt6dC0iMhdNx871vLM3iOc1Mx835dg7uo%2BZ5FXNJoFCjUHi9TuGnIggvc0bFpYDMLI%2FEELKzmN1guM38y1b7%2FgcoyKdFWheHnaPEcXD%2Ffr0j7vmScZNR%2F5nqNadY6ExJ1qx4yetuSzqP&X-Amz-Signature=9b4db1dc955af9782c17b69f95c655dfc1eb627c9cadad24745bf2e86a419915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQ4B7QI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg7jyTGEdw5vMyGxI9wxDQLMwsHoORogDIp7ywcwTGQAiEAo9b2biWfbSt4ujQjjk33f6Ajora0QpG1y8F%2BXRyMkTwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQBMN4kfS%2FDPwxiuSrcA0%2B%2BepP4ndndEhf%2B%2FFhD%2BmQfXUV4VIkcOnHE%2BcwA2GfqLicXCSI8t9rLQSNxmS8DCuNu6VF3kPDg3I3kuUzsSVDJLubde2xj8Vds01dWuZ9RJfkyQLCTc6uqoDcliui2DZf7pd7yM9xpA1%2BeSYo5EqTvq1xK%2Bc2193dlmcuWtcckSfGnw%2Fq3qzyDWAGIKoDacjSwOJajQjUsA33tPVHmTSj1JE2t%2B%2B9U31lK7m3o9wvne5L4wbH0yLtLWsX5HqKuxmljFFK5%2BsCF%2FrV94kvL%2BwAAQKDWWdhJNCNFJYL2V3bYqAKq09LZPIFf1dnptoPmeDQmZ28BLp3mTsZwsyOPCNLHct3m4VL3tqxi3ywGRDBIvPuLLfrM%2BtwzfwtZSqF1Il44ZyTAvoFUMLAnpXS6%2FnPrlmg6Q%2Bnj3iNlY8zg6iByUdVAS2JKH%2BkvLWfM2g453Jodc%2FWaLpOOMX1oVya5MgRet1HhzVp%2BmV%2FrHvF%2BdKcCPKPfHvt2ycjaB%2FtVZTYDXbjdOLunERzDaAus6tKQZbb2uibNTv0tTx6689OGA2H13SDjF6z1Xlomn%2BaFlIZO2KYOX6TjYi0YVJVyX6BBACBg5knZP%2F5%2FOQWa16fa%2Bd98A9Mc4EuzcuiiYlJSMN7b88MGOqUBVZUcEOpCTaFHvOc3H0%2FLmQlRqo%2BnuEcnHH1tjn1gH3OtPQTg5GKbu4mSXeTY0ni5qwpOZ%2F0J%2BrAVN%2FrQQt6dC0iMhdNx871vLM3iOc1Mx835dg7uo%2BZ5FXNJoFCjUHi9TuGnIggvc0bFpYDMLI%2FEELKzmN1guM38y1b7%2FgcoyKdFWheHnaPEcXD%2Ffr0j7vmScZNR%2F5nqNadY6ExJ1qx4yetuSzqP&X-Amz-Signature=a5a7db180b426ec3592684d26b59e20618c30d35d9ab12c579520e26b69b5b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQ4B7QI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg7jyTGEdw5vMyGxI9wxDQLMwsHoORogDIp7ywcwTGQAiEAo9b2biWfbSt4ujQjjk33f6Ajora0QpG1y8F%2BXRyMkTwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQBMN4kfS%2FDPwxiuSrcA0%2B%2BepP4ndndEhf%2B%2FFhD%2BmQfXUV4VIkcOnHE%2BcwA2GfqLicXCSI8t9rLQSNxmS8DCuNu6VF3kPDg3I3kuUzsSVDJLubde2xj8Vds01dWuZ9RJfkyQLCTc6uqoDcliui2DZf7pd7yM9xpA1%2BeSYo5EqTvq1xK%2Bc2193dlmcuWtcckSfGnw%2Fq3qzyDWAGIKoDacjSwOJajQjUsA33tPVHmTSj1JE2t%2B%2B9U31lK7m3o9wvne5L4wbH0yLtLWsX5HqKuxmljFFK5%2BsCF%2FrV94kvL%2BwAAQKDWWdhJNCNFJYL2V3bYqAKq09LZPIFf1dnptoPmeDQmZ28BLp3mTsZwsyOPCNLHct3m4VL3tqxi3ywGRDBIvPuLLfrM%2BtwzfwtZSqF1Il44ZyTAvoFUMLAnpXS6%2FnPrlmg6Q%2Bnj3iNlY8zg6iByUdVAS2JKH%2BkvLWfM2g453Jodc%2FWaLpOOMX1oVya5MgRet1HhzVp%2BmV%2FrHvF%2BdKcCPKPfHvt2ycjaB%2FtVZTYDXbjdOLunERzDaAus6tKQZbb2uibNTv0tTx6689OGA2H13SDjF6z1Xlomn%2BaFlIZO2KYOX6TjYi0YVJVyX6BBACBg5knZP%2F5%2FOQWa16fa%2Bd98A9Mc4EuzcuiiYlJSMN7b88MGOqUBVZUcEOpCTaFHvOc3H0%2FLmQlRqo%2BnuEcnHH1tjn1gH3OtPQTg5GKbu4mSXeTY0ni5qwpOZ%2F0J%2BrAVN%2FrQQt6dC0iMhdNx871vLM3iOc1Mx835dg7uo%2BZ5FXNJoFCjUHi9TuGnIggvc0bFpYDMLI%2FEELKzmN1guM38y1b7%2FgcoyKdFWheHnaPEcXD%2Ffr0j7vmScZNR%2F5nqNadY6ExJ1qx4yetuSzqP&X-Amz-Signature=201a439d91953799333015ed4d8ebd9db0629019d970cabaf6ff87cd38b7f677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQ4B7QI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg7jyTGEdw5vMyGxI9wxDQLMwsHoORogDIp7ywcwTGQAiEAo9b2biWfbSt4ujQjjk33f6Ajora0QpG1y8F%2BXRyMkTwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQBMN4kfS%2FDPwxiuSrcA0%2B%2BepP4ndndEhf%2B%2FFhD%2BmQfXUV4VIkcOnHE%2BcwA2GfqLicXCSI8t9rLQSNxmS8DCuNu6VF3kPDg3I3kuUzsSVDJLubde2xj8Vds01dWuZ9RJfkyQLCTc6uqoDcliui2DZf7pd7yM9xpA1%2BeSYo5EqTvq1xK%2Bc2193dlmcuWtcckSfGnw%2Fq3qzyDWAGIKoDacjSwOJajQjUsA33tPVHmTSj1JE2t%2B%2B9U31lK7m3o9wvne5L4wbH0yLtLWsX5HqKuxmljFFK5%2BsCF%2FrV94kvL%2BwAAQKDWWdhJNCNFJYL2V3bYqAKq09LZPIFf1dnptoPmeDQmZ28BLp3mTsZwsyOPCNLHct3m4VL3tqxi3ywGRDBIvPuLLfrM%2BtwzfwtZSqF1Il44ZyTAvoFUMLAnpXS6%2FnPrlmg6Q%2Bnj3iNlY8zg6iByUdVAS2JKH%2BkvLWfM2g453Jodc%2FWaLpOOMX1oVya5MgRet1HhzVp%2BmV%2FrHvF%2BdKcCPKPfHvt2ycjaB%2FtVZTYDXbjdOLunERzDaAus6tKQZbb2uibNTv0tTx6689OGA2H13SDjF6z1Xlomn%2BaFlIZO2KYOX6TjYi0YVJVyX6BBACBg5knZP%2F5%2FOQWa16fa%2Bd98A9Mc4EuzcuiiYlJSMN7b88MGOqUBVZUcEOpCTaFHvOc3H0%2FLmQlRqo%2BnuEcnHH1tjn1gH3OtPQTg5GKbu4mSXeTY0ni5qwpOZ%2F0J%2BrAVN%2FrQQt6dC0iMhdNx871vLM3iOc1Mx835dg7uo%2BZ5FXNJoFCjUHi9TuGnIggvc0bFpYDMLI%2FEELKzmN1guM38y1b7%2FgcoyKdFWheHnaPEcXD%2Ffr0j7vmScZNR%2F5nqNadY6ExJ1qx4yetuSzqP&X-Amz-Signature=d4e0481a58d8267b94cbe601b25d60f7f7823df2f02e739ede88e9efb1061098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQ4B7QI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg7jyTGEdw5vMyGxI9wxDQLMwsHoORogDIp7ywcwTGQAiEAo9b2biWfbSt4ujQjjk33f6Ajora0QpG1y8F%2BXRyMkTwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQBMN4kfS%2FDPwxiuSrcA0%2B%2BepP4ndndEhf%2B%2FFhD%2BmQfXUV4VIkcOnHE%2BcwA2GfqLicXCSI8t9rLQSNxmS8DCuNu6VF3kPDg3I3kuUzsSVDJLubde2xj8Vds01dWuZ9RJfkyQLCTc6uqoDcliui2DZf7pd7yM9xpA1%2BeSYo5EqTvq1xK%2Bc2193dlmcuWtcckSfGnw%2Fq3qzyDWAGIKoDacjSwOJajQjUsA33tPVHmTSj1JE2t%2B%2B9U31lK7m3o9wvne5L4wbH0yLtLWsX5HqKuxmljFFK5%2BsCF%2FrV94kvL%2BwAAQKDWWdhJNCNFJYL2V3bYqAKq09LZPIFf1dnptoPmeDQmZ28BLp3mTsZwsyOPCNLHct3m4VL3tqxi3ywGRDBIvPuLLfrM%2BtwzfwtZSqF1Il44ZyTAvoFUMLAnpXS6%2FnPrlmg6Q%2Bnj3iNlY8zg6iByUdVAS2JKH%2BkvLWfM2g453Jodc%2FWaLpOOMX1oVya5MgRet1HhzVp%2BmV%2FrHvF%2BdKcCPKPfHvt2ycjaB%2FtVZTYDXbjdOLunERzDaAus6tKQZbb2uibNTv0tTx6689OGA2H13SDjF6z1Xlomn%2BaFlIZO2KYOX6TjYi0YVJVyX6BBACBg5knZP%2F5%2FOQWa16fa%2Bd98A9Mc4EuzcuiiYlJSMN7b88MGOqUBVZUcEOpCTaFHvOc3H0%2FLmQlRqo%2BnuEcnHH1tjn1gH3OtPQTg5GKbu4mSXeTY0ni5qwpOZ%2F0J%2BrAVN%2FrQQt6dC0iMhdNx871vLM3iOc1Mx835dg7uo%2BZ5FXNJoFCjUHi9TuGnIggvc0bFpYDMLI%2FEELKzmN1guM38y1b7%2FgcoyKdFWheHnaPEcXD%2Ffr0j7vmScZNR%2F5nqNadY6ExJ1qx4yetuSzqP&X-Amz-Signature=2a4560a31a25c61ad6ca768491ea92008bf45c4e3e88438fac389d482b0f52fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NQ4B7QI%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg7jyTGEdw5vMyGxI9wxDQLMwsHoORogDIp7ywcwTGQAiEAo9b2biWfbSt4ujQjjk33f6Ajora0QpG1y8F%2BXRyMkTwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQBMN4kfS%2FDPwxiuSrcA0%2B%2BepP4ndndEhf%2B%2FFhD%2BmQfXUV4VIkcOnHE%2BcwA2GfqLicXCSI8t9rLQSNxmS8DCuNu6VF3kPDg3I3kuUzsSVDJLubde2xj8Vds01dWuZ9RJfkyQLCTc6uqoDcliui2DZf7pd7yM9xpA1%2BeSYo5EqTvq1xK%2Bc2193dlmcuWtcckSfGnw%2Fq3qzyDWAGIKoDacjSwOJajQjUsA33tPVHmTSj1JE2t%2B%2B9U31lK7m3o9wvne5L4wbH0yLtLWsX5HqKuxmljFFK5%2BsCF%2FrV94kvL%2BwAAQKDWWdhJNCNFJYL2V3bYqAKq09LZPIFf1dnptoPmeDQmZ28BLp3mTsZwsyOPCNLHct3m4VL3tqxi3ywGRDBIvPuLLfrM%2BtwzfwtZSqF1Il44ZyTAvoFUMLAnpXS6%2FnPrlmg6Q%2Bnj3iNlY8zg6iByUdVAS2JKH%2BkvLWfM2g453Jodc%2FWaLpOOMX1oVya5MgRet1HhzVp%2BmV%2FrHvF%2BdKcCPKPfHvt2ycjaB%2FtVZTYDXbjdOLunERzDaAus6tKQZbb2uibNTv0tTx6689OGA2H13SDjF6z1Xlomn%2BaFlIZO2KYOX6TjYi0YVJVyX6BBACBg5knZP%2F5%2FOQWa16fa%2Bd98A9Mc4EuzcuiiYlJSMN7b88MGOqUBVZUcEOpCTaFHvOc3H0%2FLmQlRqo%2BnuEcnHH1tjn1gH3OtPQTg5GKbu4mSXeTY0ni5qwpOZ%2F0J%2BrAVN%2FrQQt6dC0iMhdNx871vLM3iOc1Mx835dg7uo%2BZ5FXNJoFCjUHi9TuGnIggvc0bFpYDMLI%2FEELKzmN1guM38y1b7%2FgcoyKdFWheHnaPEcXD%2Ffr0j7vmScZNR%2F5nqNadY6ExJ1qx4yetuSzqP&X-Amz-Signature=42235acb6c50fc83008810f318b05cf4114ab411eff9097c5ba2cb9c44998fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
