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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GUR32N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Ny0ZpwaIdPSdPCPJCuWGjH48G2tDvVnMi8GYk3NoOAIgd3CRF%2F6KTAz04t8R4OlV1HhzV9kjvDto8DWHglbjAakqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMysSZg3UJ%2FiQ6L9TSrcAyCy1jEp8LbG5%2FiR1nafx0dnqp459Xix%2BmJ3me8O3lIk40UB0PjeheepJnNjH1WshRpQDkYCW1NLKrTcFdQSo3USL4M%2FZvXervZzrth748tqY4s7cjqOuxyVUL48dMeIHS96N4NfYOdCGVQ011t%2BQ9RX8oXAhacz5qqmY9KvyTcmIAwP3qxHO3XaVi%2BIUrqkYfQ6OtWBUwEob%2FNeLGHHN1YG40REWt1mt4rZKbWsr0WiGEwWI9hwRJ7DY6eOcMB6Nky8Kk2l%2Bn8hLnjJwOdXbMxBrKJ9FT9tE%2Fq4BWIeLWTWQ1W4SQlx0hT3HTHYSb8bpDtnk968kPhoIgoSsfuaOIdnR1c9J9wwN070Zw1nrzanzj%2FKgLnMeytwCRG%2F5PmwgxND23sgf0ZgKmbearsS4viIddwJbnRm%2FtJ7jibIK2vqfcMmXWBfa%2Fsbz3g0eJR%2BYAReB6OKtYCXexld4Ejm4rLiZ0AsijOa5%2BlFaA5eqO1tBbduJTagqV6Y28klDoy8Q71wZEBVcN5XPFIDAOSUKNKmEaeS1oJc%2B1fCgFaFY1V9wayymJ0urieTcZv%2BVyMrilXhYSHg3vjsgNE2UlK6SBgLK%2F3UdCsTkdvdUflgzTOAU0LuAiQwkeigP52sMLWV3b0GOqUB7SW89UwMAgfQqVYXljsaA%2FF7tz1W7UQWdZRXAK95l8dAF%2BmS%2FDFYGpcHEBDE3NVxJlfiwmrAO6RPWtXbKhKXZrY6i%2Fc%2FSZfNCNpayEC7Zv0%2F9GmyZqCnxdkPmmZqvchbSJ9tLAAg6LMXgXKyFlzKMzWPgHeddFObyxRPqrv8dtUehKDogmTt76tDtvpJuHFxeDRIlfAcBEe9OuimjdfrekLY0Hmr&X-Amz-Signature=d589ed578585cc0985129bc1e50f5f43f9a8b8b2770f141ab225e3d0531013f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GUR32N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Ny0ZpwaIdPSdPCPJCuWGjH48G2tDvVnMi8GYk3NoOAIgd3CRF%2F6KTAz04t8R4OlV1HhzV9kjvDto8DWHglbjAakqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMysSZg3UJ%2FiQ6L9TSrcAyCy1jEp8LbG5%2FiR1nafx0dnqp459Xix%2BmJ3me8O3lIk40UB0PjeheepJnNjH1WshRpQDkYCW1NLKrTcFdQSo3USL4M%2FZvXervZzrth748tqY4s7cjqOuxyVUL48dMeIHS96N4NfYOdCGVQ011t%2BQ9RX8oXAhacz5qqmY9KvyTcmIAwP3qxHO3XaVi%2BIUrqkYfQ6OtWBUwEob%2FNeLGHHN1YG40REWt1mt4rZKbWsr0WiGEwWI9hwRJ7DY6eOcMB6Nky8Kk2l%2Bn8hLnjJwOdXbMxBrKJ9FT9tE%2Fq4BWIeLWTWQ1W4SQlx0hT3HTHYSb8bpDtnk968kPhoIgoSsfuaOIdnR1c9J9wwN070Zw1nrzanzj%2FKgLnMeytwCRG%2F5PmwgxND23sgf0ZgKmbearsS4viIddwJbnRm%2FtJ7jibIK2vqfcMmXWBfa%2Fsbz3g0eJR%2BYAReB6OKtYCXexld4Ejm4rLiZ0AsijOa5%2BlFaA5eqO1tBbduJTagqV6Y28klDoy8Q71wZEBVcN5XPFIDAOSUKNKmEaeS1oJc%2B1fCgFaFY1V9wayymJ0urieTcZv%2BVyMrilXhYSHg3vjsgNE2UlK6SBgLK%2F3UdCsTkdvdUflgzTOAU0LuAiQwkeigP52sMLWV3b0GOqUB7SW89UwMAgfQqVYXljsaA%2FF7tz1W7UQWdZRXAK95l8dAF%2BmS%2FDFYGpcHEBDE3NVxJlfiwmrAO6RPWtXbKhKXZrY6i%2Fc%2FSZfNCNpayEC7Zv0%2F9GmyZqCnxdkPmmZqvchbSJ9tLAAg6LMXgXKyFlzKMzWPgHeddFObyxRPqrv8dtUehKDogmTt76tDtvpJuHFxeDRIlfAcBEe9OuimjdfrekLY0Hmr&X-Amz-Signature=d5b948c4e7ceb7c66d8a58695cc83875932d5bb77d3b1f7468702bda859bef25&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GUR32N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Ny0ZpwaIdPSdPCPJCuWGjH48G2tDvVnMi8GYk3NoOAIgd3CRF%2F6KTAz04t8R4OlV1HhzV9kjvDto8DWHglbjAakqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMysSZg3UJ%2FiQ6L9TSrcAyCy1jEp8LbG5%2FiR1nafx0dnqp459Xix%2BmJ3me8O3lIk40UB0PjeheepJnNjH1WshRpQDkYCW1NLKrTcFdQSo3USL4M%2FZvXervZzrth748tqY4s7cjqOuxyVUL48dMeIHS96N4NfYOdCGVQ011t%2BQ9RX8oXAhacz5qqmY9KvyTcmIAwP3qxHO3XaVi%2BIUrqkYfQ6OtWBUwEob%2FNeLGHHN1YG40REWt1mt4rZKbWsr0WiGEwWI9hwRJ7DY6eOcMB6Nky8Kk2l%2Bn8hLnjJwOdXbMxBrKJ9FT9tE%2Fq4BWIeLWTWQ1W4SQlx0hT3HTHYSb8bpDtnk968kPhoIgoSsfuaOIdnR1c9J9wwN070Zw1nrzanzj%2FKgLnMeytwCRG%2F5PmwgxND23sgf0ZgKmbearsS4viIddwJbnRm%2FtJ7jibIK2vqfcMmXWBfa%2Fsbz3g0eJR%2BYAReB6OKtYCXexld4Ejm4rLiZ0AsijOa5%2BlFaA5eqO1tBbduJTagqV6Y28klDoy8Q71wZEBVcN5XPFIDAOSUKNKmEaeS1oJc%2B1fCgFaFY1V9wayymJ0urieTcZv%2BVyMrilXhYSHg3vjsgNE2UlK6SBgLK%2F3UdCsTkdvdUflgzTOAU0LuAiQwkeigP52sMLWV3b0GOqUB7SW89UwMAgfQqVYXljsaA%2FF7tz1W7UQWdZRXAK95l8dAF%2BmS%2FDFYGpcHEBDE3NVxJlfiwmrAO6RPWtXbKhKXZrY6i%2Fc%2FSZfNCNpayEC7Zv0%2F9GmyZqCnxdkPmmZqvchbSJ9tLAAg6LMXgXKyFlzKMzWPgHeddFObyxRPqrv8dtUehKDogmTt76tDtvpJuHFxeDRIlfAcBEe9OuimjdfrekLY0Hmr&X-Amz-Signature=fabe611084ecc6fd46fff57624560cc2efdafc44977f466bc6f497416eb8a4f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GUR32N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Ny0ZpwaIdPSdPCPJCuWGjH48G2tDvVnMi8GYk3NoOAIgd3CRF%2F6KTAz04t8R4OlV1HhzV9kjvDto8DWHglbjAakqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMysSZg3UJ%2FiQ6L9TSrcAyCy1jEp8LbG5%2FiR1nafx0dnqp459Xix%2BmJ3me8O3lIk40UB0PjeheepJnNjH1WshRpQDkYCW1NLKrTcFdQSo3USL4M%2FZvXervZzrth748tqY4s7cjqOuxyVUL48dMeIHS96N4NfYOdCGVQ011t%2BQ9RX8oXAhacz5qqmY9KvyTcmIAwP3qxHO3XaVi%2BIUrqkYfQ6OtWBUwEob%2FNeLGHHN1YG40REWt1mt4rZKbWsr0WiGEwWI9hwRJ7DY6eOcMB6Nky8Kk2l%2Bn8hLnjJwOdXbMxBrKJ9FT9tE%2Fq4BWIeLWTWQ1W4SQlx0hT3HTHYSb8bpDtnk968kPhoIgoSsfuaOIdnR1c9J9wwN070Zw1nrzanzj%2FKgLnMeytwCRG%2F5PmwgxND23sgf0ZgKmbearsS4viIddwJbnRm%2FtJ7jibIK2vqfcMmXWBfa%2Fsbz3g0eJR%2BYAReB6OKtYCXexld4Ejm4rLiZ0AsijOa5%2BlFaA5eqO1tBbduJTagqV6Y28klDoy8Q71wZEBVcN5XPFIDAOSUKNKmEaeS1oJc%2B1fCgFaFY1V9wayymJ0urieTcZv%2BVyMrilXhYSHg3vjsgNE2UlK6SBgLK%2F3UdCsTkdvdUflgzTOAU0LuAiQwkeigP52sMLWV3b0GOqUB7SW89UwMAgfQqVYXljsaA%2FF7tz1W7UQWdZRXAK95l8dAF%2BmS%2FDFYGpcHEBDE3NVxJlfiwmrAO6RPWtXbKhKXZrY6i%2Fc%2FSZfNCNpayEC7Zv0%2F9GmyZqCnxdkPmmZqvchbSJ9tLAAg6LMXgXKyFlzKMzWPgHeddFObyxRPqrv8dtUehKDogmTt76tDtvpJuHFxeDRIlfAcBEe9OuimjdfrekLY0Hmr&X-Amz-Signature=af58e5961b4e862ef2aba14142602f728a4850feffb45c00fdc0875df46e5396&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GUR32N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Ny0ZpwaIdPSdPCPJCuWGjH48G2tDvVnMi8GYk3NoOAIgd3CRF%2F6KTAz04t8R4OlV1HhzV9kjvDto8DWHglbjAakqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMysSZg3UJ%2FiQ6L9TSrcAyCy1jEp8LbG5%2FiR1nafx0dnqp459Xix%2BmJ3me8O3lIk40UB0PjeheepJnNjH1WshRpQDkYCW1NLKrTcFdQSo3USL4M%2FZvXervZzrth748tqY4s7cjqOuxyVUL48dMeIHS96N4NfYOdCGVQ011t%2BQ9RX8oXAhacz5qqmY9KvyTcmIAwP3qxHO3XaVi%2BIUrqkYfQ6OtWBUwEob%2FNeLGHHN1YG40REWt1mt4rZKbWsr0WiGEwWI9hwRJ7DY6eOcMB6Nky8Kk2l%2Bn8hLnjJwOdXbMxBrKJ9FT9tE%2Fq4BWIeLWTWQ1W4SQlx0hT3HTHYSb8bpDtnk968kPhoIgoSsfuaOIdnR1c9J9wwN070Zw1nrzanzj%2FKgLnMeytwCRG%2F5PmwgxND23sgf0ZgKmbearsS4viIddwJbnRm%2FtJ7jibIK2vqfcMmXWBfa%2Fsbz3g0eJR%2BYAReB6OKtYCXexld4Ejm4rLiZ0AsijOa5%2BlFaA5eqO1tBbduJTagqV6Y28klDoy8Q71wZEBVcN5XPFIDAOSUKNKmEaeS1oJc%2B1fCgFaFY1V9wayymJ0urieTcZv%2BVyMrilXhYSHg3vjsgNE2UlK6SBgLK%2F3UdCsTkdvdUflgzTOAU0LuAiQwkeigP52sMLWV3b0GOqUB7SW89UwMAgfQqVYXljsaA%2FF7tz1W7UQWdZRXAK95l8dAF%2BmS%2FDFYGpcHEBDE3NVxJlfiwmrAO6RPWtXbKhKXZrY6i%2Fc%2FSZfNCNpayEC7Zv0%2F9GmyZqCnxdkPmmZqvchbSJ9tLAAg6LMXgXKyFlzKMzWPgHeddFObyxRPqrv8dtUehKDogmTt76tDtvpJuHFxeDRIlfAcBEe9OuimjdfrekLY0Hmr&X-Amz-Signature=922967df81020583ab8ef7b4975c16441218a3aefa1b97355e4364fef0a2683a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GUR32N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Ny0ZpwaIdPSdPCPJCuWGjH48G2tDvVnMi8GYk3NoOAIgd3CRF%2F6KTAz04t8R4OlV1HhzV9kjvDto8DWHglbjAakqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMysSZg3UJ%2FiQ6L9TSrcAyCy1jEp8LbG5%2FiR1nafx0dnqp459Xix%2BmJ3me8O3lIk40UB0PjeheepJnNjH1WshRpQDkYCW1NLKrTcFdQSo3USL4M%2FZvXervZzrth748tqY4s7cjqOuxyVUL48dMeIHS96N4NfYOdCGVQ011t%2BQ9RX8oXAhacz5qqmY9KvyTcmIAwP3qxHO3XaVi%2BIUrqkYfQ6OtWBUwEob%2FNeLGHHN1YG40REWt1mt4rZKbWsr0WiGEwWI9hwRJ7DY6eOcMB6Nky8Kk2l%2Bn8hLnjJwOdXbMxBrKJ9FT9tE%2Fq4BWIeLWTWQ1W4SQlx0hT3HTHYSb8bpDtnk968kPhoIgoSsfuaOIdnR1c9J9wwN070Zw1nrzanzj%2FKgLnMeytwCRG%2F5PmwgxND23sgf0ZgKmbearsS4viIddwJbnRm%2FtJ7jibIK2vqfcMmXWBfa%2Fsbz3g0eJR%2BYAReB6OKtYCXexld4Ejm4rLiZ0AsijOa5%2BlFaA5eqO1tBbduJTagqV6Y28klDoy8Q71wZEBVcN5XPFIDAOSUKNKmEaeS1oJc%2B1fCgFaFY1V9wayymJ0urieTcZv%2BVyMrilXhYSHg3vjsgNE2UlK6SBgLK%2F3UdCsTkdvdUflgzTOAU0LuAiQwkeigP52sMLWV3b0GOqUB7SW89UwMAgfQqVYXljsaA%2FF7tz1W7UQWdZRXAK95l8dAF%2BmS%2FDFYGpcHEBDE3NVxJlfiwmrAO6RPWtXbKhKXZrY6i%2Fc%2FSZfNCNpayEC7Zv0%2F9GmyZqCnxdkPmmZqvchbSJ9tLAAg6LMXgXKyFlzKMzWPgHeddFObyxRPqrv8dtUehKDogmTt76tDtvpJuHFxeDRIlfAcBEe9OuimjdfrekLY0Hmr&X-Amz-Signature=531449043225456d60263e3414d4b4ed4b2b84bb19fbec6ba1d0dc54842dc676&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GUR32N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Ny0ZpwaIdPSdPCPJCuWGjH48G2tDvVnMi8GYk3NoOAIgd3CRF%2F6KTAz04t8R4OlV1HhzV9kjvDto8DWHglbjAakqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMysSZg3UJ%2FiQ6L9TSrcAyCy1jEp8LbG5%2FiR1nafx0dnqp459Xix%2BmJ3me8O3lIk40UB0PjeheepJnNjH1WshRpQDkYCW1NLKrTcFdQSo3USL4M%2FZvXervZzrth748tqY4s7cjqOuxyVUL48dMeIHS96N4NfYOdCGVQ011t%2BQ9RX8oXAhacz5qqmY9KvyTcmIAwP3qxHO3XaVi%2BIUrqkYfQ6OtWBUwEob%2FNeLGHHN1YG40REWt1mt4rZKbWsr0WiGEwWI9hwRJ7DY6eOcMB6Nky8Kk2l%2Bn8hLnjJwOdXbMxBrKJ9FT9tE%2Fq4BWIeLWTWQ1W4SQlx0hT3HTHYSb8bpDtnk968kPhoIgoSsfuaOIdnR1c9J9wwN070Zw1nrzanzj%2FKgLnMeytwCRG%2F5PmwgxND23sgf0ZgKmbearsS4viIddwJbnRm%2FtJ7jibIK2vqfcMmXWBfa%2Fsbz3g0eJR%2BYAReB6OKtYCXexld4Ejm4rLiZ0AsijOa5%2BlFaA5eqO1tBbduJTagqV6Y28klDoy8Q71wZEBVcN5XPFIDAOSUKNKmEaeS1oJc%2B1fCgFaFY1V9wayymJ0urieTcZv%2BVyMrilXhYSHg3vjsgNE2UlK6SBgLK%2F3UdCsTkdvdUflgzTOAU0LuAiQwkeigP52sMLWV3b0GOqUB7SW89UwMAgfQqVYXljsaA%2FF7tz1W7UQWdZRXAK95l8dAF%2BmS%2FDFYGpcHEBDE3NVxJlfiwmrAO6RPWtXbKhKXZrY6i%2Fc%2FSZfNCNpayEC7Zv0%2F9GmyZqCnxdkPmmZqvchbSJ9tLAAg6LMXgXKyFlzKMzWPgHeddFObyxRPqrv8dtUehKDogmTt76tDtvpJuHFxeDRIlfAcBEe9OuimjdfrekLY0Hmr&X-Amz-Signature=36dff292b5c72f07e61e497ef6702ec57d37bbf86e58f8309d271ec228c94aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7GUR32N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Ny0ZpwaIdPSdPCPJCuWGjH48G2tDvVnMi8GYk3NoOAIgd3CRF%2F6KTAz04t8R4OlV1HhzV9kjvDto8DWHglbjAakqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMysSZg3UJ%2FiQ6L9TSrcAyCy1jEp8LbG5%2FiR1nafx0dnqp459Xix%2BmJ3me8O3lIk40UB0PjeheepJnNjH1WshRpQDkYCW1NLKrTcFdQSo3USL4M%2FZvXervZzrth748tqY4s7cjqOuxyVUL48dMeIHS96N4NfYOdCGVQ011t%2BQ9RX8oXAhacz5qqmY9KvyTcmIAwP3qxHO3XaVi%2BIUrqkYfQ6OtWBUwEob%2FNeLGHHN1YG40REWt1mt4rZKbWsr0WiGEwWI9hwRJ7DY6eOcMB6Nky8Kk2l%2Bn8hLnjJwOdXbMxBrKJ9FT9tE%2Fq4BWIeLWTWQ1W4SQlx0hT3HTHYSb8bpDtnk968kPhoIgoSsfuaOIdnR1c9J9wwN070Zw1nrzanzj%2FKgLnMeytwCRG%2F5PmwgxND23sgf0ZgKmbearsS4viIddwJbnRm%2FtJ7jibIK2vqfcMmXWBfa%2Fsbz3g0eJR%2BYAReB6OKtYCXexld4Ejm4rLiZ0AsijOa5%2BlFaA5eqO1tBbduJTagqV6Y28klDoy8Q71wZEBVcN5XPFIDAOSUKNKmEaeS1oJc%2B1fCgFaFY1V9wayymJ0urieTcZv%2BVyMrilXhYSHg3vjsgNE2UlK6SBgLK%2F3UdCsTkdvdUflgzTOAU0LuAiQwkeigP52sMLWV3b0GOqUB7SW89UwMAgfQqVYXljsaA%2FF7tz1W7UQWdZRXAK95l8dAF%2BmS%2FDFYGpcHEBDE3NVxJlfiwmrAO6RPWtXbKhKXZrY6i%2Fc%2FSZfNCNpayEC7Zv0%2F9GmyZqCnxdkPmmZqvchbSJ9tLAAg6LMXgXKyFlzKMzWPgHeddFObyxRPqrv8dtUehKDogmTt76tDtvpJuHFxeDRIlfAcBEe9OuimjdfrekLY0Hmr&X-Amz-Signature=c0a8900f12fa2ebffa4fa273d23f039e54fb370865bdc425496c580711a2fe5c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
