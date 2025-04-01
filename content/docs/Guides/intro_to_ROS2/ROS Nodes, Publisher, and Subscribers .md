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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWIZNT6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClfwZjGoSiAfOkdZ1s163wUt5%2FoC9YdmMACzxAyNY1nQIhAMET8dtvBaEnd09N2iEH%2BgrmNMYaZ%2FbAaG7wt5FpObeiKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BF6Zk9LW95TCv1PIq3ANY1y6%2B7AFz4SYS3SgNd7WOM8ibDPio%2BnWR0hghS9DAJJDpCtZUNbopHUEAdk0j%2FbiKfRUAAp7If1Pf%2BHr2RJ6M9Ol6kFytRn5CHNyHKIYY9zczLI1vRT7rFqqxGsrBweHY7YtAly7nRkYvW%2Bw8fIuTeFhAKjRfS4D04%2BFMD9pa%2FrroE2sTeu%2Ba3UjX0Zi7utzXT3O%2F1vtQbw2xw2EvwJ6VZVgtwxi1%2FYKZt8krKZ3oixNiGOp8u134AqwLTcqP6tSTpO5ZrAqi2O%2FIzvZ5WS9w8T72kTaiUWdHFYFBJRPR1C386gQ73ztwWbDB5iEiZcLTodmPiMsrgfMKw%2FCezqieZJxvW3NPYAH7j%2B0EtF%2FVAMAXZt6VVUIJKPi6ACulvDncvi24N%2ByB%2BwNgfkIE0gjJa2gdDZ33NsZGVk5deKRgCdn5vxOuwtloH1bWLTsOjmPUatdmq00txzD8GlhqB%2FMQ%2BO3G%2Bo7XLktFiqeKN3%2BASj4jrp6%2BC%2FCvV9x4MwSc%2FHScbg03f1uAIev%2F22XUGUZuAGc22bfA4GFiaBM%2Bw%2Bb95vgoKQk3HJ5DUXyiZkaT5AvHU4nzg97mAbLDeHwuQWhMD1C0XX3rLaAzFe7pgpxUMU5kAge2GTghhbuU1zDJ7K%2B%2FBjqkAVRWoy536hEufw0a68jBf0QlFoUbJbh0TJId79FyjgWEg6MHyx5yNvLTIoh%2Bpp3wqTXVZ%2FXfOeJDcmWdoy%2BzkPyg9SiQa2x7LKLlRrMybgiddosTVHx%2FkY9UAoTSaHJEUs7bcImvjCUtoD0hYRFKL38ixdwTdL9GItU%2B1Zojqv9ZfKP9TgtOCTGl3YXukJ7rzkq7Nu0mOkmA7MB%2FmPzgroZkMM1v&X-Amz-Signature=76c40e409a8170495b13270b80ef2d5348ad6a80a29f47e37c1008d55e30b4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWIZNT6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClfwZjGoSiAfOkdZ1s163wUt5%2FoC9YdmMACzxAyNY1nQIhAMET8dtvBaEnd09N2iEH%2BgrmNMYaZ%2FbAaG7wt5FpObeiKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BF6Zk9LW95TCv1PIq3ANY1y6%2B7AFz4SYS3SgNd7WOM8ibDPio%2BnWR0hghS9DAJJDpCtZUNbopHUEAdk0j%2FbiKfRUAAp7If1Pf%2BHr2RJ6M9Ol6kFytRn5CHNyHKIYY9zczLI1vRT7rFqqxGsrBweHY7YtAly7nRkYvW%2Bw8fIuTeFhAKjRfS4D04%2BFMD9pa%2FrroE2sTeu%2Ba3UjX0Zi7utzXT3O%2F1vtQbw2xw2EvwJ6VZVgtwxi1%2FYKZt8krKZ3oixNiGOp8u134AqwLTcqP6tSTpO5ZrAqi2O%2FIzvZ5WS9w8T72kTaiUWdHFYFBJRPR1C386gQ73ztwWbDB5iEiZcLTodmPiMsrgfMKw%2FCezqieZJxvW3NPYAH7j%2B0EtF%2FVAMAXZt6VVUIJKPi6ACulvDncvi24N%2ByB%2BwNgfkIE0gjJa2gdDZ33NsZGVk5deKRgCdn5vxOuwtloH1bWLTsOjmPUatdmq00txzD8GlhqB%2FMQ%2BO3G%2Bo7XLktFiqeKN3%2BASj4jrp6%2BC%2FCvV9x4MwSc%2FHScbg03f1uAIev%2F22XUGUZuAGc22bfA4GFiaBM%2Bw%2Bb95vgoKQk3HJ5DUXyiZkaT5AvHU4nzg97mAbLDeHwuQWhMD1C0XX3rLaAzFe7pgpxUMU5kAge2GTghhbuU1zDJ7K%2B%2FBjqkAVRWoy536hEufw0a68jBf0QlFoUbJbh0TJId79FyjgWEg6MHyx5yNvLTIoh%2Bpp3wqTXVZ%2FXfOeJDcmWdoy%2BzkPyg9SiQa2x7LKLlRrMybgiddosTVHx%2FkY9UAoTSaHJEUs7bcImvjCUtoD0hYRFKL38ixdwTdL9GItU%2B1Zojqv9ZfKP9TgtOCTGl3YXukJ7rzkq7Nu0mOkmA7MB%2FmPzgroZkMM1v&X-Amz-Signature=94a729b86d4c614c94240c5d2603fdefa2d20287283480c3a9c6e2894cd2469a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWIZNT6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClfwZjGoSiAfOkdZ1s163wUt5%2FoC9YdmMACzxAyNY1nQIhAMET8dtvBaEnd09N2iEH%2BgrmNMYaZ%2FbAaG7wt5FpObeiKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BF6Zk9LW95TCv1PIq3ANY1y6%2B7AFz4SYS3SgNd7WOM8ibDPio%2BnWR0hghS9DAJJDpCtZUNbopHUEAdk0j%2FbiKfRUAAp7If1Pf%2BHr2RJ6M9Ol6kFytRn5CHNyHKIYY9zczLI1vRT7rFqqxGsrBweHY7YtAly7nRkYvW%2Bw8fIuTeFhAKjRfS4D04%2BFMD9pa%2FrroE2sTeu%2Ba3UjX0Zi7utzXT3O%2F1vtQbw2xw2EvwJ6VZVgtwxi1%2FYKZt8krKZ3oixNiGOp8u134AqwLTcqP6tSTpO5ZrAqi2O%2FIzvZ5WS9w8T72kTaiUWdHFYFBJRPR1C386gQ73ztwWbDB5iEiZcLTodmPiMsrgfMKw%2FCezqieZJxvW3NPYAH7j%2B0EtF%2FVAMAXZt6VVUIJKPi6ACulvDncvi24N%2ByB%2BwNgfkIE0gjJa2gdDZ33NsZGVk5deKRgCdn5vxOuwtloH1bWLTsOjmPUatdmq00txzD8GlhqB%2FMQ%2BO3G%2Bo7XLktFiqeKN3%2BASj4jrp6%2BC%2FCvV9x4MwSc%2FHScbg03f1uAIev%2F22XUGUZuAGc22bfA4GFiaBM%2Bw%2Bb95vgoKQk3HJ5DUXyiZkaT5AvHU4nzg97mAbLDeHwuQWhMD1C0XX3rLaAzFe7pgpxUMU5kAge2GTghhbuU1zDJ7K%2B%2FBjqkAVRWoy536hEufw0a68jBf0QlFoUbJbh0TJId79FyjgWEg6MHyx5yNvLTIoh%2Bpp3wqTXVZ%2FXfOeJDcmWdoy%2BzkPyg9SiQa2x7LKLlRrMybgiddosTVHx%2FkY9UAoTSaHJEUs7bcImvjCUtoD0hYRFKL38ixdwTdL9GItU%2B1Zojqv9ZfKP9TgtOCTGl3YXukJ7rzkq7Nu0mOkmA7MB%2FmPzgroZkMM1v&X-Amz-Signature=aae922ac97dcf21429fe67b60f6280f1dce37bb5535b99344d1eaa845c9d8604&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWIZNT6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClfwZjGoSiAfOkdZ1s163wUt5%2FoC9YdmMACzxAyNY1nQIhAMET8dtvBaEnd09N2iEH%2BgrmNMYaZ%2FbAaG7wt5FpObeiKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BF6Zk9LW95TCv1PIq3ANY1y6%2B7AFz4SYS3SgNd7WOM8ibDPio%2BnWR0hghS9DAJJDpCtZUNbopHUEAdk0j%2FbiKfRUAAp7If1Pf%2BHr2RJ6M9Ol6kFytRn5CHNyHKIYY9zczLI1vRT7rFqqxGsrBweHY7YtAly7nRkYvW%2Bw8fIuTeFhAKjRfS4D04%2BFMD9pa%2FrroE2sTeu%2Ba3UjX0Zi7utzXT3O%2F1vtQbw2xw2EvwJ6VZVgtwxi1%2FYKZt8krKZ3oixNiGOp8u134AqwLTcqP6tSTpO5ZrAqi2O%2FIzvZ5WS9w8T72kTaiUWdHFYFBJRPR1C386gQ73ztwWbDB5iEiZcLTodmPiMsrgfMKw%2FCezqieZJxvW3NPYAH7j%2B0EtF%2FVAMAXZt6VVUIJKPi6ACulvDncvi24N%2ByB%2BwNgfkIE0gjJa2gdDZ33NsZGVk5deKRgCdn5vxOuwtloH1bWLTsOjmPUatdmq00txzD8GlhqB%2FMQ%2BO3G%2Bo7XLktFiqeKN3%2BASj4jrp6%2BC%2FCvV9x4MwSc%2FHScbg03f1uAIev%2F22XUGUZuAGc22bfA4GFiaBM%2Bw%2Bb95vgoKQk3HJ5DUXyiZkaT5AvHU4nzg97mAbLDeHwuQWhMD1C0XX3rLaAzFe7pgpxUMU5kAge2GTghhbuU1zDJ7K%2B%2FBjqkAVRWoy536hEufw0a68jBf0QlFoUbJbh0TJId79FyjgWEg6MHyx5yNvLTIoh%2Bpp3wqTXVZ%2FXfOeJDcmWdoy%2BzkPyg9SiQa2x7LKLlRrMybgiddosTVHx%2FkY9UAoTSaHJEUs7bcImvjCUtoD0hYRFKL38ixdwTdL9GItU%2B1Zojqv9ZfKP9TgtOCTGl3YXukJ7rzkq7Nu0mOkmA7MB%2FmPzgroZkMM1v&X-Amz-Signature=a2c6f13a4177d97b9ec24a68fbd53c55c09068c8ff8d5aafd01e180456217e23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWIZNT6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClfwZjGoSiAfOkdZ1s163wUt5%2FoC9YdmMACzxAyNY1nQIhAMET8dtvBaEnd09N2iEH%2BgrmNMYaZ%2FbAaG7wt5FpObeiKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BF6Zk9LW95TCv1PIq3ANY1y6%2B7AFz4SYS3SgNd7WOM8ibDPio%2BnWR0hghS9DAJJDpCtZUNbopHUEAdk0j%2FbiKfRUAAp7If1Pf%2BHr2RJ6M9Ol6kFytRn5CHNyHKIYY9zczLI1vRT7rFqqxGsrBweHY7YtAly7nRkYvW%2Bw8fIuTeFhAKjRfS4D04%2BFMD9pa%2FrroE2sTeu%2Ba3UjX0Zi7utzXT3O%2F1vtQbw2xw2EvwJ6VZVgtwxi1%2FYKZt8krKZ3oixNiGOp8u134AqwLTcqP6tSTpO5ZrAqi2O%2FIzvZ5WS9w8T72kTaiUWdHFYFBJRPR1C386gQ73ztwWbDB5iEiZcLTodmPiMsrgfMKw%2FCezqieZJxvW3NPYAH7j%2B0EtF%2FVAMAXZt6VVUIJKPi6ACulvDncvi24N%2ByB%2BwNgfkIE0gjJa2gdDZ33NsZGVk5deKRgCdn5vxOuwtloH1bWLTsOjmPUatdmq00txzD8GlhqB%2FMQ%2BO3G%2Bo7XLktFiqeKN3%2BASj4jrp6%2BC%2FCvV9x4MwSc%2FHScbg03f1uAIev%2F22XUGUZuAGc22bfA4GFiaBM%2Bw%2Bb95vgoKQk3HJ5DUXyiZkaT5AvHU4nzg97mAbLDeHwuQWhMD1C0XX3rLaAzFe7pgpxUMU5kAge2GTghhbuU1zDJ7K%2B%2FBjqkAVRWoy536hEufw0a68jBf0QlFoUbJbh0TJId79FyjgWEg6MHyx5yNvLTIoh%2Bpp3wqTXVZ%2FXfOeJDcmWdoy%2BzkPyg9SiQa2x7LKLlRrMybgiddosTVHx%2FkY9UAoTSaHJEUs7bcImvjCUtoD0hYRFKL38ixdwTdL9GItU%2B1Zojqv9ZfKP9TgtOCTGl3YXukJ7rzkq7Nu0mOkmA7MB%2FmPzgroZkMM1v&X-Amz-Signature=5e7f5f9db24482fcd6cea11a1e22eed7dfd364403f2cba5bf057ed6294ff8b66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWIZNT6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClfwZjGoSiAfOkdZ1s163wUt5%2FoC9YdmMACzxAyNY1nQIhAMET8dtvBaEnd09N2iEH%2BgrmNMYaZ%2FbAaG7wt5FpObeiKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BF6Zk9LW95TCv1PIq3ANY1y6%2B7AFz4SYS3SgNd7WOM8ibDPio%2BnWR0hghS9DAJJDpCtZUNbopHUEAdk0j%2FbiKfRUAAp7If1Pf%2BHr2RJ6M9Ol6kFytRn5CHNyHKIYY9zczLI1vRT7rFqqxGsrBweHY7YtAly7nRkYvW%2Bw8fIuTeFhAKjRfS4D04%2BFMD9pa%2FrroE2sTeu%2Ba3UjX0Zi7utzXT3O%2F1vtQbw2xw2EvwJ6VZVgtwxi1%2FYKZt8krKZ3oixNiGOp8u134AqwLTcqP6tSTpO5ZrAqi2O%2FIzvZ5WS9w8T72kTaiUWdHFYFBJRPR1C386gQ73ztwWbDB5iEiZcLTodmPiMsrgfMKw%2FCezqieZJxvW3NPYAH7j%2B0EtF%2FVAMAXZt6VVUIJKPi6ACulvDncvi24N%2ByB%2BwNgfkIE0gjJa2gdDZ33NsZGVk5deKRgCdn5vxOuwtloH1bWLTsOjmPUatdmq00txzD8GlhqB%2FMQ%2BO3G%2Bo7XLktFiqeKN3%2BASj4jrp6%2BC%2FCvV9x4MwSc%2FHScbg03f1uAIev%2F22XUGUZuAGc22bfA4GFiaBM%2Bw%2Bb95vgoKQk3HJ5DUXyiZkaT5AvHU4nzg97mAbLDeHwuQWhMD1C0XX3rLaAzFe7pgpxUMU5kAge2GTghhbuU1zDJ7K%2B%2FBjqkAVRWoy536hEufw0a68jBf0QlFoUbJbh0TJId79FyjgWEg6MHyx5yNvLTIoh%2Bpp3wqTXVZ%2FXfOeJDcmWdoy%2BzkPyg9SiQa2x7LKLlRrMybgiddosTVHx%2FkY9UAoTSaHJEUs7bcImvjCUtoD0hYRFKL38ixdwTdL9GItU%2B1Zojqv9ZfKP9TgtOCTGl3YXukJ7rzkq7Nu0mOkmA7MB%2FmPzgroZkMM1v&X-Amz-Signature=c3ffc5308167ecbc32965189a703ffcda199d6b8122a1c1ffa850b87aba15cec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWIZNT6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClfwZjGoSiAfOkdZ1s163wUt5%2FoC9YdmMACzxAyNY1nQIhAMET8dtvBaEnd09N2iEH%2BgrmNMYaZ%2FbAaG7wt5FpObeiKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BF6Zk9LW95TCv1PIq3ANY1y6%2B7AFz4SYS3SgNd7WOM8ibDPio%2BnWR0hghS9DAJJDpCtZUNbopHUEAdk0j%2FbiKfRUAAp7If1Pf%2BHr2RJ6M9Ol6kFytRn5CHNyHKIYY9zczLI1vRT7rFqqxGsrBweHY7YtAly7nRkYvW%2Bw8fIuTeFhAKjRfS4D04%2BFMD9pa%2FrroE2sTeu%2Ba3UjX0Zi7utzXT3O%2F1vtQbw2xw2EvwJ6VZVgtwxi1%2FYKZt8krKZ3oixNiGOp8u134AqwLTcqP6tSTpO5ZrAqi2O%2FIzvZ5WS9w8T72kTaiUWdHFYFBJRPR1C386gQ73ztwWbDB5iEiZcLTodmPiMsrgfMKw%2FCezqieZJxvW3NPYAH7j%2B0EtF%2FVAMAXZt6VVUIJKPi6ACulvDncvi24N%2ByB%2BwNgfkIE0gjJa2gdDZ33NsZGVk5deKRgCdn5vxOuwtloH1bWLTsOjmPUatdmq00txzD8GlhqB%2FMQ%2BO3G%2Bo7XLktFiqeKN3%2BASj4jrp6%2BC%2FCvV9x4MwSc%2FHScbg03f1uAIev%2F22XUGUZuAGc22bfA4GFiaBM%2Bw%2Bb95vgoKQk3HJ5DUXyiZkaT5AvHU4nzg97mAbLDeHwuQWhMD1C0XX3rLaAzFe7pgpxUMU5kAge2GTghhbuU1zDJ7K%2B%2FBjqkAVRWoy536hEufw0a68jBf0QlFoUbJbh0TJId79FyjgWEg6MHyx5yNvLTIoh%2Bpp3wqTXVZ%2FXfOeJDcmWdoy%2BzkPyg9SiQa2x7LKLlRrMybgiddosTVHx%2FkY9UAoTSaHJEUs7bcImvjCUtoD0hYRFKL38ixdwTdL9GItU%2B1Zojqv9ZfKP9TgtOCTGl3YXukJ7rzkq7Nu0mOkmA7MB%2FmPzgroZkMM1v&X-Amz-Signature=6324aa1a99e412fe805489acc5938c99c5f8a8317f14c1cdc8620d35759b7db3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWIZNT6%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQClfwZjGoSiAfOkdZ1s163wUt5%2FoC9YdmMACzxAyNY1nQIhAMET8dtvBaEnd09N2iEH%2BgrmNMYaZ%2FbAaG7wt5FpObeiKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BF6Zk9LW95TCv1PIq3ANY1y6%2B7AFz4SYS3SgNd7WOM8ibDPio%2BnWR0hghS9DAJJDpCtZUNbopHUEAdk0j%2FbiKfRUAAp7If1Pf%2BHr2RJ6M9Ol6kFytRn5CHNyHKIYY9zczLI1vRT7rFqqxGsrBweHY7YtAly7nRkYvW%2Bw8fIuTeFhAKjRfS4D04%2BFMD9pa%2FrroE2sTeu%2Ba3UjX0Zi7utzXT3O%2F1vtQbw2xw2EvwJ6VZVgtwxi1%2FYKZt8krKZ3oixNiGOp8u134AqwLTcqP6tSTpO5ZrAqi2O%2FIzvZ5WS9w8T72kTaiUWdHFYFBJRPR1C386gQ73ztwWbDB5iEiZcLTodmPiMsrgfMKw%2FCezqieZJxvW3NPYAH7j%2B0EtF%2FVAMAXZt6VVUIJKPi6ACulvDncvi24N%2ByB%2BwNgfkIE0gjJa2gdDZ33NsZGVk5deKRgCdn5vxOuwtloH1bWLTsOjmPUatdmq00txzD8GlhqB%2FMQ%2BO3G%2Bo7XLktFiqeKN3%2BASj4jrp6%2BC%2FCvV9x4MwSc%2FHScbg03f1uAIev%2F22XUGUZuAGc22bfA4GFiaBM%2Bw%2Bb95vgoKQk3HJ5DUXyiZkaT5AvHU4nzg97mAbLDeHwuQWhMD1C0XX3rLaAzFe7pgpxUMU5kAge2GTghhbuU1zDJ7K%2B%2FBjqkAVRWoy536hEufw0a68jBf0QlFoUbJbh0TJId79FyjgWEg6MHyx5yNvLTIoh%2Bpp3wqTXVZ%2FXfOeJDcmWdoy%2BzkPyg9SiQa2x7LKLlRrMybgiddosTVHx%2FkY9UAoTSaHJEUs7bcImvjCUtoD0hYRFKL38ixdwTdL9GItU%2B1Zojqv9ZfKP9TgtOCTGl3YXukJ7rzkq7Nu0mOkmA7MB%2FmPzgroZkMM1v&X-Amz-Signature=b4abed35c4ce95973ab6e451de118e770b20239c552aa95377bee205fab5eed2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
