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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3R7DC6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6se87zDoDGchENnmwvfll5djCa%2BJYTHdyk6IP4oC%2ByAIhAPdzSc%2BBt7B0SbXXCCtjdLmSOGucmwbMyx6AkYVlbE%2BHKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTdkOCh%2BsmgNUOCiMq3AMWzs%2FSdCmwYqD6RlKMA1XHmRMSupM%2BefPyuHfIQcUuPh9a%2BDZJwGk5Oj3mTzqr1CImyA1GR4J1jWA19E5JN7U5r2%2FBdo1M9%2FfkKKmHBv3X0vsywilR5uRjeNrwBpr8SJS7iMnCH721OGCMSdtLoJaJMe039dnigbuKjyAw9RZtFU7rdxWEGW4SRZmd7boxvlY41YYr%2BqB00eiy16mbJQyVLkNUxWRnJnth5epuTY%2F9bBeO8%2Fu7t91gaC33bRRmLfj2VpcIBpbA7hSo11MVd9kSSQReX4XBeUP3uYSUFTUQpc1WCKizpVFTKTwbrkvubUn16b1P1fP3eQqqyWAgsaVUWb65CcK0CuRR%2BaylgyLjS7DKusCIFl2nWkzKxrmSqUNhV7bq8JWXgukTGLdQ8FNQjAnziu83zs%2BroVpuyeXkPLIcGehCOP%2BcawryfIUNrCGLlSxAsBRfhlwj8zXsmb4EIhlBanufB0Kuc8vsS4%2FjkSushb7k8GOHUucKrx3Uj9GJP4Vvk%2FNyocyONrOrKzpQX46bGWNfzI%2F7cUUzb960v2TsYkGJGdqjT027Db6vTJnMl1YfuiQJBR1r9x%2FASJawggt1VGfN2uHBArmcBNKmLfE0oAYrFyYicr2xhDCDxvi8BjqkARPRdORZNW8HyFURa4KcW5Uouwvlaq0GHRi%2B7mrPyBv2QASfJyx8Lfg8kD88QfmNua07DQETG0JICJSfAcnkXAxn6X2qCHNzcoUKrNBVTDBAXtzhj3x6Bf2yn0JG%2FimZXUZX1n7rPSWADGhl4k%2BwuAHboi4CNL02J3SNlxPuk3d%2F7O2R4oDGmiRpqacDQE1S8PM7uzlp9XzSG0LXwNFAyB6Bb9k7&X-Amz-Signature=8b1a8597db7bee0146fa2f41d099839a129b93a55d3042da8332dfcb440234c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3R7DC6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6se87zDoDGchENnmwvfll5djCa%2BJYTHdyk6IP4oC%2ByAIhAPdzSc%2BBt7B0SbXXCCtjdLmSOGucmwbMyx6AkYVlbE%2BHKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTdkOCh%2BsmgNUOCiMq3AMWzs%2FSdCmwYqD6RlKMA1XHmRMSupM%2BefPyuHfIQcUuPh9a%2BDZJwGk5Oj3mTzqr1CImyA1GR4J1jWA19E5JN7U5r2%2FBdo1M9%2FfkKKmHBv3X0vsywilR5uRjeNrwBpr8SJS7iMnCH721OGCMSdtLoJaJMe039dnigbuKjyAw9RZtFU7rdxWEGW4SRZmd7boxvlY41YYr%2BqB00eiy16mbJQyVLkNUxWRnJnth5epuTY%2F9bBeO8%2Fu7t91gaC33bRRmLfj2VpcIBpbA7hSo11MVd9kSSQReX4XBeUP3uYSUFTUQpc1WCKizpVFTKTwbrkvubUn16b1P1fP3eQqqyWAgsaVUWb65CcK0CuRR%2BaylgyLjS7DKusCIFl2nWkzKxrmSqUNhV7bq8JWXgukTGLdQ8FNQjAnziu83zs%2BroVpuyeXkPLIcGehCOP%2BcawryfIUNrCGLlSxAsBRfhlwj8zXsmb4EIhlBanufB0Kuc8vsS4%2FjkSushb7k8GOHUucKrx3Uj9GJP4Vvk%2FNyocyONrOrKzpQX46bGWNfzI%2F7cUUzb960v2TsYkGJGdqjT027Db6vTJnMl1YfuiQJBR1r9x%2FASJawggt1VGfN2uHBArmcBNKmLfE0oAYrFyYicr2xhDCDxvi8BjqkARPRdORZNW8HyFURa4KcW5Uouwvlaq0GHRi%2B7mrPyBv2QASfJyx8Lfg8kD88QfmNua07DQETG0JICJSfAcnkXAxn6X2qCHNzcoUKrNBVTDBAXtzhj3x6Bf2yn0JG%2FimZXUZX1n7rPSWADGhl4k%2BwuAHboi4CNL02J3SNlxPuk3d%2F7O2R4oDGmiRpqacDQE1S8PM7uzlp9XzSG0LXwNFAyB6Bb9k7&X-Amz-Signature=c43b224390e39e29fdd36587ccf016378379e05fb4589278bf4227d3dee40474&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3R7DC6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6se87zDoDGchENnmwvfll5djCa%2BJYTHdyk6IP4oC%2ByAIhAPdzSc%2BBt7B0SbXXCCtjdLmSOGucmwbMyx6AkYVlbE%2BHKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTdkOCh%2BsmgNUOCiMq3AMWzs%2FSdCmwYqD6RlKMA1XHmRMSupM%2BefPyuHfIQcUuPh9a%2BDZJwGk5Oj3mTzqr1CImyA1GR4J1jWA19E5JN7U5r2%2FBdo1M9%2FfkKKmHBv3X0vsywilR5uRjeNrwBpr8SJS7iMnCH721OGCMSdtLoJaJMe039dnigbuKjyAw9RZtFU7rdxWEGW4SRZmd7boxvlY41YYr%2BqB00eiy16mbJQyVLkNUxWRnJnth5epuTY%2F9bBeO8%2Fu7t91gaC33bRRmLfj2VpcIBpbA7hSo11MVd9kSSQReX4XBeUP3uYSUFTUQpc1WCKizpVFTKTwbrkvubUn16b1P1fP3eQqqyWAgsaVUWb65CcK0CuRR%2BaylgyLjS7DKusCIFl2nWkzKxrmSqUNhV7bq8JWXgukTGLdQ8FNQjAnziu83zs%2BroVpuyeXkPLIcGehCOP%2BcawryfIUNrCGLlSxAsBRfhlwj8zXsmb4EIhlBanufB0Kuc8vsS4%2FjkSushb7k8GOHUucKrx3Uj9GJP4Vvk%2FNyocyONrOrKzpQX46bGWNfzI%2F7cUUzb960v2TsYkGJGdqjT027Db6vTJnMl1YfuiQJBR1r9x%2FASJawggt1VGfN2uHBArmcBNKmLfE0oAYrFyYicr2xhDCDxvi8BjqkARPRdORZNW8HyFURa4KcW5Uouwvlaq0GHRi%2B7mrPyBv2QASfJyx8Lfg8kD88QfmNua07DQETG0JICJSfAcnkXAxn6X2qCHNzcoUKrNBVTDBAXtzhj3x6Bf2yn0JG%2FimZXUZX1n7rPSWADGhl4k%2BwuAHboi4CNL02J3SNlxPuk3d%2F7O2R4oDGmiRpqacDQE1S8PM7uzlp9XzSG0LXwNFAyB6Bb9k7&X-Amz-Signature=64a174e3a390ff4b80350b8e6fe55e66f01a6bf4cc5f0efeeee847b5069bdef5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3R7DC6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6se87zDoDGchENnmwvfll5djCa%2BJYTHdyk6IP4oC%2ByAIhAPdzSc%2BBt7B0SbXXCCtjdLmSOGucmwbMyx6AkYVlbE%2BHKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTdkOCh%2BsmgNUOCiMq3AMWzs%2FSdCmwYqD6RlKMA1XHmRMSupM%2BefPyuHfIQcUuPh9a%2BDZJwGk5Oj3mTzqr1CImyA1GR4J1jWA19E5JN7U5r2%2FBdo1M9%2FfkKKmHBv3X0vsywilR5uRjeNrwBpr8SJS7iMnCH721OGCMSdtLoJaJMe039dnigbuKjyAw9RZtFU7rdxWEGW4SRZmd7boxvlY41YYr%2BqB00eiy16mbJQyVLkNUxWRnJnth5epuTY%2F9bBeO8%2Fu7t91gaC33bRRmLfj2VpcIBpbA7hSo11MVd9kSSQReX4XBeUP3uYSUFTUQpc1WCKizpVFTKTwbrkvubUn16b1P1fP3eQqqyWAgsaVUWb65CcK0CuRR%2BaylgyLjS7DKusCIFl2nWkzKxrmSqUNhV7bq8JWXgukTGLdQ8FNQjAnziu83zs%2BroVpuyeXkPLIcGehCOP%2BcawryfIUNrCGLlSxAsBRfhlwj8zXsmb4EIhlBanufB0Kuc8vsS4%2FjkSushb7k8GOHUucKrx3Uj9GJP4Vvk%2FNyocyONrOrKzpQX46bGWNfzI%2F7cUUzb960v2TsYkGJGdqjT027Db6vTJnMl1YfuiQJBR1r9x%2FASJawggt1VGfN2uHBArmcBNKmLfE0oAYrFyYicr2xhDCDxvi8BjqkARPRdORZNW8HyFURa4KcW5Uouwvlaq0GHRi%2B7mrPyBv2QASfJyx8Lfg8kD88QfmNua07DQETG0JICJSfAcnkXAxn6X2qCHNzcoUKrNBVTDBAXtzhj3x6Bf2yn0JG%2FimZXUZX1n7rPSWADGhl4k%2BwuAHboi4CNL02J3SNlxPuk3d%2F7O2R4oDGmiRpqacDQE1S8PM7uzlp9XzSG0LXwNFAyB6Bb9k7&X-Amz-Signature=48689709bac0eeeb61eefc1220c3d0fd498149000520bf247ca948a3fdd1150d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3R7DC6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6se87zDoDGchENnmwvfll5djCa%2BJYTHdyk6IP4oC%2ByAIhAPdzSc%2BBt7B0SbXXCCtjdLmSOGucmwbMyx6AkYVlbE%2BHKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTdkOCh%2BsmgNUOCiMq3AMWzs%2FSdCmwYqD6RlKMA1XHmRMSupM%2BefPyuHfIQcUuPh9a%2BDZJwGk5Oj3mTzqr1CImyA1GR4J1jWA19E5JN7U5r2%2FBdo1M9%2FfkKKmHBv3X0vsywilR5uRjeNrwBpr8SJS7iMnCH721OGCMSdtLoJaJMe039dnigbuKjyAw9RZtFU7rdxWEGW4SRZmd7boxvlY41YYr%2BqB00eiy16mbJQyVLkNUxWRnJnth5epuTY%2F9bBeO8%2Fu7t91gaC33bRRmLfj2VpcIBpbA7hSo11MVd9kSSQReX4XBeUP3uYSUFTUQpc1WCKizpVFTKTwbrkvubUn16b1P1fP3eQqqyWAgsaVUWb65CcK0CuRR%2BaylgyLjS7DKusCIFl2nWkzKxrmSqUNhV7bq8JWXgukTGLdQ8FNQjAnziu83zs%2BroVpuyeXkPLIcGehCOP%2BcawryfIUNrCGLlSxAsBRfhlwj8zXsmb4EIhlBanufB0Kuc8vsS4%2FjkSushb7k8GOHUucKrx3Uj9GJP4Vvk%2FNyocyONrOrKzpQX46bGWNfzI%2F7cUUzb960v2TsYkGJGdqjT027Db6vTJnMl1YfuiQJBR1r9x%2FASJawggt1VGfN2uHBArmcBNKmLfE0oAYrFyYicr2xhDCDxvi8BjqkARPRdORZNW8HyFURa4KcW5Uouwvlaq0GHRi%2B7mrPyBv2QASfJyx8Lfg8kD88QfmNua07DQETG0JICJSfAcnkXAxn6X2qCHNzcoUKrNBVTDBAXtzhj3x6Bf2yn0JG%2FimZXUZX1n7rPSWADGhl4k%2BwuAHboi4CNL02J3SNlxPuk3d%2F7O2R4oDGmiRpqacDQE1S8PM7uzlp9XzSG0LXwNFAyB6Bb9k7&X-Amz-Signature=8678a6ad18f95b1f23d26e4eb17fa1eb384cc1f2af44c5701523928b281564e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3R7DC6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6se87zDoDGchENnmwvfll5djCa%2BJYTHdyk6IP4oC%2ByAIhAPdzSc%2BBt7B0SbXXCCtjdLmSOGucmwbMyx6AkYVlbE%2BHKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTdkOCh%2BsmgNUOCiMq3AMWzs%2FSdCmwYqD6RlKMA1XHmRMSupM%2BefPyuHfIQcUuPh9a%2BDZJwGk5Oj3mTzqr1CImyA1GR4J1jWA19E5JN7U5r2%2FBdo1M9%2FfkKKmHBv3X0vsywilR5uRjeNrwBpr8SJS7iMnCH721OGCMSdtLoJaJMe039dnigbuKjyAw9RZtFU7rdxWEGW4SRZmd7boxvlY41YYr%2BqB00eiy16mbJQyVLkNUxWRnJnth5epuTY%2F9bBeO8%2Fu7t91gaC33bRRmLfj2VpcIBpbA7hSo11MVd9kSSQReX4XBeUP3uYSUFTUQpc1WCKizpVFTKTwbrkvubUn16b1P1fP3eQqqyWAgsaVUWb65CcK0CuRR%2BaylgyLjS7DKusCIFl2nWkzKxrmSqUNhV7bq8JWXgukTGLdQ8FNQjAnziu83zs%2BroVpuyeXkPLIcGehCOP%2BcawryfIUNrCGLlSxAsBRfhlwj8zXsmb4EIhlBanufB0Kuc8vsS4%2FjkSushb7k8GOHUucKrx3Uj9GJP4Vvk%2FNyocyONrOrKzpQX46bGWNfzI%2F7cUUzb960v2TsYkGJGdqjT027Db6vTJnMl1YfuiQJBR1r9x%2FASJawggt1VGfN2uHBArmcBNKmLfE0oAYrFyYicr2xhDCDxvi8BjqkARPRdORZNW8HyFURa4KcW5Uouwvlaq0GHRi%2B7mrPyBv2QASfJyx8Lfg8kD88QfmNua07DQETG0JICJSfAcnkXAxn6X2qCHNzcoUKrNBVTDBAXtzhj3x6Bf2yn0JG%2FimZXUZX1n7rPSWADGhl4k%2BwuAHboi4CNL02J3SNlxPuk3d%2F7O2R4oDGmiRpqacDQE1S8PM7uzlp9XzSG0LXwNFAyB6Bb9k7&X-Amz-Signature=7f5729a655b5d991567fb9b5ae251409f71b90e6aaeb5041247c5a3c0de68773&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3R7DC6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6se87zDoDGchENnmwvfll5djCa%2BJYTHdyk6IP4oC%2ByAIhAPdzSc%2BBt7B0SbXXCCtjdLmSOGucmwbMyx6AkYVlbE%2BHKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTdkOCh%2BsmgNUOCiMq3AMWzs%2FSdCmwYqD6RlKMA1XHmRMSupM%2BefPyuHfIQcUuPh9a%2BDZJwGk5Oj3mTzqr1CImyA1GR4J1jWA19E5JN7U5r2%2FBdo1M9%2FfkKKmHBv3X0vsywilR5uRjeNrwBpr8SJS7iMnCH721OGCMSdtLoJaJMe039dnigbuKjyAw9RZtFU7rdxWEGW4SRZmd7boxvlY41YYr%2BqB00eiy16mbJQyVLkNUxWRnJnth5epuTY%2F9bBeO8%2Fu7t91gaC33bRRmLfj2VpcIBpbA7hSo11MVd9kSSQReX4XBeUP3uYSUFTUQpc1WCKizpVFTKTwbrkvubUn16b1P1fP3eQqqyWAgsaVUWb65CcK0CuRR%2BaylgyLjS7DKusCIFl2nWkzKxrmSqUNhV7bq8JWXgukTGLdQ8FNQjAnziu83zs%2BroVpuyeXkPLIcGehCOP%2BcawryfIUNrCGLlSxAsBRfhlwj8zXsmb4EIhlBanufB0Kuc8vsS4%2FjkSushb7k8GOHUucKrx3Uj9GJP4Vvk%2FNyocyONrOrKzpQX46bGWNfzI%2F7cUUzb960v2TsYkGJGdqjT027Db6vTJnMl1YfuiQJBR1r9x%2FASJawggt1VGfN2uHBArmcBNKmLfE0oAYrFyYicr2xhDCDxvi8BjqkARPRdORZNW8HyFURa4KcW5Uouwvlaq0GHRi%2B7mrPyBv2QASfJyx8Lfg8kD88QfmNua07DQETG0JICJSfAcnkXAxn6X2qCHNzcoUKrNBVTDBAXtzhj3x6Bf2yn0JG%2FimZXUZX1n7rPSWADGhl4k%2BwuAHboi4CNL02J3SNlxPuk3d%2F7O2R4oDGmiRpqacDQE1S8PM7uzlp9XzSG0LXwNFAyB6Bb9k7&X-Amz-Signature=4fb082674972c957ae5b4fc3debaf1c41efc0cd01f0cf6e798bc4e177d5eef82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3R7DC6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6se87zDoDGchENnmwvfll5djCa%2BJYTHdyk6IP4oC%2ByAIhAPdzSc%2BBt7B0SbXXCCtjdLmSOGucmwbMyx6AkYVlbE%2BHKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTdkOCh%2BsmgNUOCiMq3AMWzs%2FSdCmwYqD6RlKMA1XHmRMSupM%2BefPyuHfIQcUuPh9a%2BDZJwGk5Oj3mTzqr1CImyA1GR4J1jWA19E5JN7U5r2%2FBdo1M9%2FfkKKmHBv3X0vsywilR5uRjeNrwBpr8SJS7iMnCH721OGCMSdtLoJaJMe039dnigbuKjyAw9RZtFU7rdxWEGW4SRZmd7boxvlY41YYr%2BqB00eiy16mbJQyVLkNUxWRnJnth5epuTY%2F9bBeO8%2Fu7t91gaC33bRRmLfj2VpcIBpbA7hSo11MVd9kSSQReX4XBeUP3uYSUFTUQpc1WCKizpVFTKTwbrkvubUn16b1P1fP3eQqqyWAgsaVUWb65CcK0CuRR%2BaylgyLjS7DKusCIFl2nWkzKxrmSqUNhV7bq8JWXgukTGLdQ8FNQjAnziu83zs%2BroVpuyeXkPLIcGehCOP%2BcawryfIUNrCGLlSxAsBRfhlwj8zXsmb4EIhlBanufB0Kuc8vsS4%2FjkSushb7k8GOHUucKrx3Uj9GJP4Vvk%2FNyocyONrOrKzpQX46bGWNfzI%2F7cUUzb960v2TsYkGJGdqjT027Db6vTJnMl1YfuiQJBR1r9x%2FASJawggt1VGfN2uHBArmcBNKmLfE0oAYrFyYicr2xhDCDxvi8BjqkARPRdORZNW8HyFURa4KcW5Uouwvlaq0GHRi%2B7mrPyBv2QASfJyx8Lfg8kD88QfmNua07DQETG0JICJSfAcnkXAxn6X2qCHNzcoUKrNBVTDBAXtzhj3x6Bf2yn0JG%2FimZXUZX1n7rPSWADGhl4k%2BwuAHboi4CNL02J3SNlxPuk3d%2F7O2R4oDGmiRpqacDQE1S8PM7uzlp9XzSG0LXwNFAyB6Bb9k7&X-Amz-Signature=3610b03da893e946992c481dfefbdd429bd0ef2fad0c6275166ec6b331cd68d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
