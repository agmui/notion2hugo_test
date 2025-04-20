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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LN2YBA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGpASawL%2FrACZv8vl7mOKWoiWbGiYAUsVS0J9ntzcduoAiAI77Pfcm5fTCj3SMO5pWiX7klJDPDnJrt7l81LSkS1WCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs2WChWcWZrWzjOTKtwDRgmkVUWo9HHZmrwLEHm7BvuyerSpUY4cdDMuxDofkUwtfkYF175LKv9K86FZuIk5cbv9TZErEkjzYB9EjQtqOtqfDCMR71ruVuI5fpfFAVH1PrT0dhmRV6GXc6PmoGihQwmhze8iNbyh5RGEkst4bFwsXhqzEdh4WeOhINK7WJcjNlpkcqspcVC624GhNIyHAMDD742%2F0pisJb0imQHdY7XpewiqvvVoediQsZ43f2tIH67MkjvwrlusG8hKDDZnCqSCxaqHCIfqN4dY8BLGqaoeG8AQQNULpKvbBgpDqgxOFYBXiv9qUNr3L4vye%2BJEbcTgsPGCwzkgKSbWNSlF62qQDkT%2B0%2BkfSZxhRnk6L%2BB8OK9Q8Gh0WYOcStvGullAa%2BtbXViMkY0Adt6xro%2BR3yGAGTTrUzSjs2qsDQGrmq4J5%2BQ0tIK4Y5%2FOMCjiyMEmKcDCk1JAp9CwIpfLjFIFw1w8Hnq4rvkRmY8iQuJXC44tKeMXxh60YO1oZzdGfaH%2BzH%2F0XU7wc%2F421GPwoXyg6CypQEOaW2FAPo0aiesCZMREAdaQwVdELZk%2B4BG3Maf5dtxlbb9u07vY5%2BucW8K384l%2Fyv7CWXpzLr5S%2BXRYvCGVqYFtecSUi4CwhPYwgN2SwAY6pgE9L8oXUt7pAT6lWFHgqOnZJDQyzErKqLO9Bgo9HYBcOcamzvufF7QDJyJ12kXNeUyZs9TixZ7szeCBbH1S5jaRm4X1A7cntJF1GJuD8liNquEGYE601TLkHVgRVJ5Ga3cIkI2xHOiRD5CGT8tMHrI3UfPWgjprlqdL6yCQGd0%2FD7uHFM5sbc2xwQ%2BEhTeEvmDeCbDgw301VXh7XStCEgxTe4Cy0j7L&X-Amz-Signature=a9282c80f851f2ee876d5bf65943476855472253c9e5e9d1effaca8cff9f5b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LN2YBA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGpASawL%2FrACZv8vl7mOKWoiWbGiYAUsVS0J9ntzcduoAiAI77Pfcm5fTCj3SMO5pWiX7klJDPDnJrt7l81LSkS1WCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs2WChWcWZrWzjOTKtwDRgmkVUWo9HHZmrwLEHm7BvuyerSpUY4cdDMuxDofkUwtfkYF175LKv9K86FZuIk5cbv9TZErEkjzYB9EjQtqOtqfDCMR71ruVuI5fpfFAVH1PrT0dhmRV6GXc6PmoGihQwmhze8iNbyh5RGEkst4bFwsXhqzEdh4WeOhINK7WJcjNlpkcqspcVC624GhNIyHAMDD742%2F0pisJb0imQHdY7XpewiqvvVoediQsZ43f2tIH67MkjvwrlusG8hKDDZnCqSCxaqHCIfqN4dY8BLGqaoeG8AQQNULpKvbBgpDqgxOFYBXiv9qUNr3L4vye%2BJEbcTgsPGCwzkgKSbWNSlF62qQDkT%2B0%2BkfSZxhRnk6L%2BB8OK9Q8Gh0WYOcStvGullAa%2BtbXViMkY0Adt6xro%2BR3yGAGTTrUzSjs2qsDQGrmq4J5%2BQ0tIK4Y5%2FOMCjiyMEmKcDCk1JAp9CwIpfLjFIFw1w8Hnq4rvkRmY8iQuJXC44tKeMXxh60YO1oZzdGfaH%2BzH%2F0XU7wc%2F421GPwoXyg6CypQEOaW2FAPo0aiesCZMREAdaQwVdELZk%2B4BG3Maf5dtxlbb9u07vY5%2BucW8K384l%2Fyv7CWXpzLr5S%2BXRYvCGVqYFtecSUi4CwhPYwgN2SwAY6pgE9L8oXUt7pAT6lWFHgqOnZJDQyzErKqLO9Bgo9HYBcOcamzvufF7QDJyJ12kXNeUyZs9TixZ7szeCBbH1S5jaRm4X1A7cntJF1GJuD8liNquEGYE601TLkHVgRVJ5Ga3cIkI2xHOiRD5CGT8tMHrI3UfPWgjprlqdL6yCQGd0%2FD7uHFM5sbc2xwQ%2BEhTeEvmDeCbDgw301VXh7XStCEgxTe4Cy0j7L&X-Amz-Signature=2c9a9029ccf536f505ab05f01637319ee8ce21c7a987a232149463094b5e45a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LN2YBA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGpASawL%2FrACZv8vl7mOKWoiWbGiYAUsVS0J9ntzcduoAiAI77Pfcm5fTCj3SMO5pWiX7klJDPDnJrt7l81LSkS1WCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs2WChWcWZrWzjOTKtwDRgmkVUWo9HHZmrwLEHm7BvuyerSpUY4cdDMuxDofkUwtfkYF175LKv9K86FZuIk5cbv9TZErEkjzYB9EjQtqOtqfDCMR71ruVuI5fpfFAVH1PrT0dhmRV6GXc6PmoGihQwmhze8iNbyh5RGEkst4bFwsXhqzEdh4WeOhINK7WJcjNlpkcqspcVC624GhNIyHAMDD742%2F0pisJb0imQHdY7XpewiqvvVoediQsZ43f2tIH67MkjvwrlusG8hKDDZnCqSCxaqHCIfqN4dY8BLGqaoeG8AQQNULpKvbBgpDqgxOFYBXiv9qUNr3L4vye%2BJEbcTgsPGCwzkgKSbWNSlF62qQDkT%2B0%2BkfSZxhRnk6L%2BB8OK9Q8Gh0WYOcStvGullAa%2BtbXViMkY0Adt6xro%2BR3yGAGTTrUzSjs2qsDQGrmq4J5%2BQ0tIK4Y5%2FOMCjiyMEmKcDCk1JAp9CwIpfLjFIFw1w8Hnq4rvkRmY8iQuJXC44tKeMXxh60YO1oZzdGfaH%2BzH%2F0XU7wc%2F421GPwoXyg6CypQEOaW2FAPo0aiesCZMREAdaQwVdELZk%2B4BG3Maf5dtxlbb9u07vY5%2BucW8K384l%2Fyv7CWXpzLr5S%2BXRYvCGVqYFtecSUi4CwhPYwgN2SwAY6pgE9L8oXUt7pAT6lWFHgqOnZJDQyzErKqLO9Bgo9HYBcOcamzvufF7QDJyJ12kXNeUyZs9TixZ7szeCBbH1S5jaRm4X1A7cntJF1GJuD8liNquEGYE601TLkHVgRVJ5Ga3cIkI2xHOiRD5CGT8tMHrI3UfPWgjprlqdL6yCQGd0%2FD7uHFM5sbc2xwQ%2BEhTeEvmDeCbDgw301VXh7XStCEgxTe4Cy0j7L&X-Amz-Signature=5d7cd390928789f47bb66cab33d0ce69d6cdacae17c3f0f581626969f14a5c09&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LN2YBA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGpASawL%2FrACZv8vl7mOKWoiWbGiYAUsVS0J9ntzcduoAiAI77Pfcm5fTCj3SMO5pWiX7klJDPDnJrt7l81LSkS1WCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs2WChWcWZrWzjOTKtwDRgmkVUWo9HHZmrwLEHm7BvuyerSpUY4cdDMuxDofkUwtfkYF175LKv9K86FZuIk5cbv9TZErEkjzYB9EjQtqOtqfDCMR71ruVuI5fpfFAVH1PrT0dhmRV6GXc6PmoGihQwmhze8iNbyh5RGEkst4bFwsXhqzEdh4WeOhINK7WJcjNlpkcqspcVC624GhNIyHAMDD742%2F0pisJb0imQHdY7XpewiqvvVoediQsZ43f2tIH67MkjvwrlusG8hKDDZnCqSCxaqHCIfqN4dY8BLGqaoeG8AQQNULpKvbBgpDqgxOFYBXiv9qUNr3L4vye%2BJEbcTgsPGCwzkgKSbWNSlF62qQDkT%2B0%2BkfSZxhRnk6L%2BB8OK9Q8Gh0WYOcStvGullAa%2BtbXViMkY0Adt6xro%2BR3yGAGTTrUzSjs2qsDQGrmq4J5%2BQ0tIK4Y5%2FOMCjiyMEmKcDCk1JAp9CwIpfLjFIFw1w8Hnq4rvkRmY8iQuJXC44tKeMXxh60YO1oZzdGfaH%2BzH%2F0XU7wc%2F421GPwoXyg6CypQEOaW2FAPo0aiesCZMREAdaQwVdELZk%2B4BG3Maf5dtxlbb9u07vY5%2BucW8K384l%2Fyv7CWXpzLr5S%2BXRYvCGVqYFtecSUi4CwhPYwgN2SwAY6pgE9L8oXUt7pAT6lWFHgqOnZJDQyzErKqLO9Bgo9HYBcOcamzvufF7QDJyJ12kXNeUyZs9TixZ7szeCBbH1S5jaRm4X1A7cntJF1GJuD8liNquEGYE601TLkHVgRVJ5Ga3cIkI2xHOiRD5CGT8tMHrI3UfPWgjprlqdL6yCQGd0%2FD7uHFM5sbc2xwQ%2BEhTeEvmDeCbDgw301VXh7XStCEgxTe4Cy0j7L&X-Amz-Signature=f8cf46835be1cc6f85bab8f5a81b7ffe6047db210ec5e9938d33d2520295feac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LN2YBA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGpASawL%2FrACZv8vl7mOKWoiWbGiYAUsVS0J9ntzcduoAiAI77Pfcm5fTCj3SMO5pWiX7klJDPDnJrt7l81LSkS1WCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs2WChWcWZrWzjOTKtwDRgmkVUWo9HHZmrwLEHm7BvuyerSpUY4cdDMuxDofkUwtfkYF175LKv9K86FZuIk5cbv9TZErEkjzYB9EjQtqOtqfDCMR71ruVuI5fpfFAVH1PrT0dhmRV6GXc6PmoGihQwmhze8iNbyh5RGEkst4bFwsXhqzEdh4WeOhINK7WJcjNlpkcqspcVC624GhNIyHAMDD742%2F0pisJb0imQHdY7XpewiqvvVoediQsZ43f2tIH67MkjvwrlusG8hKDDZnCqSCxaqHCIfqN4dY8BLGqaoeG8AQQNULpKvbBgpDqgxOFYBXiv9qUNr3L4vye%2BJEbcTgsPGCwzkgKSbWNSlF62qQDkT%2B0%2BkfSZxhRnk6L%2BB8OK9Q8Gh0WYOcStvGullAa%2BtbXViMkY0Adt6xro%2BR3yGAGTTrUzSjs2qsDQGrmq4J5%2BQ0tIK4Y5%2FOMCjiyMEmKcDCk1JAp9CwIpfLjFIFw1w8Hnq4rvkRmY8iQuJXC44tKeMXxh60YO1oZzdGfaH%2BzH%2F0XU7wc%2F421GPwoXyg6CypQEOaW2FAPo0aiesCZMREAdaQwVdELZk%2B4BG3Maf5dtxlbb9u07vY5%2BucW8K384l%2Fyv7CWXpzLr5S%2BXRYvCGVqYFtecSUi4CwhPYwgN2SwAY6pgE9L8oXUt7pAT6lWFHgqOnZJDQyzErKqLO9Bgo9HYBcOcamzvufF7QDJyJ12kXNeUyZs9TixZ7szeCBbH1S5jaRm4X1A7cntJF1GJuD8liNquEGYE601TLkHVgRVJ5Ga3cIkI2xHOiRD5CGT8tMHrI3UfPWgjprlqdL6yCQGd0%2FD7uHFM5sbc2xwQ%2BEhTeEvmDeCbDgw301VXh7XStCEgxTe4Cy0j7L&X-Amz-Signature=75e3bf91803714297a85a2209ee045172e081dea2a6d54664cf7f5e3e0552993&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LN2YBA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGpASawL%2FrACZv8vl7mOKWoiWbGiYAUsVS0J9ntzcduoAiAI77Pfcm5fTCj3SMO5pWiX7klJDPDnJrt7l81LSkS1WCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs2WChWcWZrWzjOTKtwDRgmkVUWo9HHZmrwLEHm7BvuyerSpUY4cdDMuxDofkUwtfkYF175LKv9K86FZuIk5cbv9TZErEkjzYB9EjQtqOtqfDCMR71ruVuI5fpfFAVH1PrT0dhmRV6GXc6PmoGihQwmhze8iNbyh5RGEkst4bFwsXhqzEdh4WeOhINK7WJcjNlpkcqspcVC624GhNIyHAMDD742%2F0pisJb0imQHdY7XpewiqvvVoediQsZ43f2tIH67MkjvwrlusG8hKDDZnCqSCxaqHCIfqN4dY8BLGqaoeG8AQQNULpKvbBgpDqgxOFYBXiv9qUNr3L4vye%2BJEbcTgsPGCwzkgKSbWNSlF62qQDkT%2B0%2BkfSZxhRnk6L%2BB8OK9Q8Gh0WYOcStvGullAa%2BtbXViMkY0Adt6xro%2BR3yGAGTTrUzSjs2qsDQGrmq4J5%2BQ0tIK4Y5%2FOMCjiyMEmKcDCk1JAp9CwIpfLjFIFw1w8Hnq4rvkRmY8iQuJXC44tKeMXxh60YO1oZzdGfaH%2BzH%2F0XU7wc%2F421GPwoXyg6CypQEOaW2FAPo0aiesCZMREAdaQwVdELZk%2B4BG3Maf5dtxlbb9u07vY5%2BucW8K384l%2Fyv7CWXpzLr5S%2BXRYvCGVqYFtecSUi4CwhPYwgN2SwAY6pgE9L8oXUt7pAT6lWFHgqOnZJDQyzErKqLO9Bgo9HYBcOcamzvufF7QDJyJ12kXNeUyZs9TixZ7szeCBbH1S5jaRm4X1A7cntJF1GJuD8liNquEGYE601TLkHVgRVJ5Ga3cIkI2xHOiRD5CGT8tMHrI3UfPWgjprlqdL6yCQGd0%2FD7uHFM5sbc2xwQ%2BEhTeEvmDeCbDgw301VXh7XStCEgxTe4Cy0j7L&X-Amz-Signature=b9f01d1df49af058ba7afb184e900e114d592de1e89bc4f2cfe61f1f6b35c5e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LN2YBA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGpASawL%2FrACZv8vl7mOKWoiWbGiYAUsVS0J9ntzcduoAiAI77Pfcm5fTCj3SMO5pWiX7klJDPDnJrt7l81LSkS1WCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs2WChWcWZrWzjOTKtwDRgmkVUWo9HHZmrwLEHm7BvuyerSpUY4cdDMuxDofkUwtfkYF175LKv9K86FZuIk5cbv9TZErEkjzYB9EjQtqOtqfDCMR71ruVuI5fpfFAVH1PrT0dhmRV6GXc6PmoGihQwmhze8iNbyh5RGEkst4bFwsXhqzEdh4WeOhINK7WJcjNlpkcqspcVC624GhNIyHAMDD742%2F0pisJb0imQHdY7XpewiqvvVoediQsZ43f2tIH67MkjvwrlusG8hKDDZnCqSCxaqHCIfqN4dY8BLGqaoeG8AQQNULpKvbBgpDqgxOFYBXiv9qUNr3L4vye%2BJEbcTgsPGCwzkgKSbWNSlF62qQDkT%2B0%2BkfSZxhRnk6L%2BB8OK9Q8Gh0WYOcStvGullAa%2BtbXViMkY0Adt6xro%2BR3yGAGTTrUzSjs2qsDQGrmq4J5%2BQ0tIK4Y5%2FOMCjiyMEmKcDCk1JAp9CwIpfLjFIFw1w8Hnq4rvkRmY8iQuJXC44tKeMXxh60YO1oZzdGfaH%2BzH%2F0XU7wc%2F421GPwoXyg6CypQEOaW2FAPo0aiesCZMREAdaQwVdELZk%2B4BG3Maf5dtxlbb9u07vY5%2BucW8K384l%2Fyv7CWXpzLr5S%2BXRYvCGVqYFtecSUi4CwhPYwgN2SwAY6pgE9L8oXUt7pAT6lWFHgqOnZJDQyzErKqLO9Bgo9HYBcOcamzvufF7QDJyJ12kXNeUyZs9TixZ7szeCBbH1S5jaRm4X1A7cntJF1GJuD8liNquEGYE601TLkHVgRVJ5Ga3cIkI2xHOiRD5CGT8tMHrI3UfPWgjprlqdL6yCQGd0%2FD7uHFM5sbc2xwQ%2BEhTeEvmDeCbDgw301VXh7XStCEgxTe4Cy0j7L&X-Amz-Signature=c7059728fd49aae58fe1b5f4756c04f61c003b79b488fb9eba2b2fc5749b84f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LN2YBA%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIGpASawL%2FrACZv8vl7mOKWoiWbGiYAUsVS0J9ntzcduoAiAI77Pfcm5fTCj3SMO5pWiX7klJDPDnJrt7l81LSkS1WCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFs2WChWcWZrWzjOTKtwDRgmkVUWo9HHZmrwLEHm7BvuyerSpUY4cdDMuxDofkUwtfkYF175LKv9K86FZuIk5cbv9TZErEkjzYB9EjQtqOtqfDCMR71ruVuI5fpfFAVH1PrT0dhmRV6GXc6PmoGihQwmhze8iNbyh5RGEkst4bFwsXhqzEdh4WeOhINK7WJcjNlpkcqspcVC624GhNIyHAMDD742%2F0pisJb0imQHdY7XpewiqvvVoediQsZ43f2tIH67MkjvwrlusG8hKDDZnCqSCxaqHCIfqN4dY8BLGqaoeG8AQQNULpKvbBgpDqgxOFYBXiv9qUNr3L4vye%2BJEbcTgsPGCwzkgKSbWNSlF62qQDkT%2B0%2BkfSZxhRnk6L%2BB8OK9Q8Gh0WYOcStvGullAa%2BtbXViMkY0Adt6xro%2BR3yGAGTTrUzSjs2qsDQGrmq4J5%2BQ0tIK4Y5%2FOMCjiyMEmKcDCk1JAp9CwIpfLjFIFw1w8Hnq4rvkRmY8iQuJXC44tKeMXxh60YO1oZzdGfaH%2BzH%2F0XU7wc%2F421GPwoXyg6CypQEOaW2FAPo0aiesCZMREAdaQwVdELZk%2B4BG3Maf5dtxlbb9u07vY5%2BucW8K384l%2Fyv7CWXpzLr5S%2BXRYvCGVqYFtecSUi4CwhPYwgN2SwAY6pgE9L8oXUt7pAT6lWFHgqOnZJDQyzErKqLO9Bgo9HYBcOcamzvufF7QDJyJ12kXNeUyZs9TixZ7szeCBbH1S5jaRm4X1A7cntJF1GJuD8liNquEGYE601TLkHVgRVJ5Ga3cIkI2xHOiRD5CGT8tMHrI3UfPWgjprlqdL6yCQGd0%2FD7uHFM5sbc2xwQ%2BEhTeEvmDeCbDgw301VXh7XStCEgxTe4Cy0j7L&X-Amz-Signature=0fe37bc8e352a9d871ade066032138236dab6b3c7664a2d5a9d2337cc289a107&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
