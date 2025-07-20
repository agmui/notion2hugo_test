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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSYPPQX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtWDYh8Ww9S6xrbQkSZpaaJaR8zVFvKbU7fQPWgEpDrAIgEhk4e0c%2FijrgWTJB8lRwefNlpTJwqopbDHUzBbYXKXEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw3vi7Mig%2B4FmyiCCrcAxrV%2FqfWFTnOrFgBZaJbkbdyQdAIBpDvFzysY5OzPRf5t6tO2kGxHu8o%2B2d3ct0MkNyDFlwIyNnEq%2F4ua4yxP8gTyAMiJzgx6oOvMa9Penz8T33Fh4VylF28LI%2B7s897jWUy56X4LFe%2Bfvj8xZ7A2LpL6nFshArWXmTSn2%2B8nR4yz%2B4yEgoYaX%2B3zjrEPGxS5qdms7K6rk5ZhSs3ThEdUhnZyEEt0OSQW55hZEvEuh4jN80dTkjoozkLzAFsS1dXpjhQzgfqfX8jKyDFEI3xY3U2nQMg4%2FQj2E0CmVUGjRTn%2B1dq07UTKBIEXyS7MHtuaJVFeqOqClYKPrpcuyhfFdlMMc9r9m%2BYZk6Q5Y8Bfpht0XOpM3D%2Fmn1aKqCYaowemqawRUcOaNgq7Wd%2F4Ct5t4hZmX0Gpruzchmjjh3Z6e%2BUtkeW7%2Fa%2B74UiD7G1l6pZDW%2FUWxRowZaBGZOaLoo0Rn5H5rBeLuXppk4N2eX5WdTQ%2FiLeHhOf2aPf2eE09kbk0oW7SISUHfTanM82qLkk0uEt4%2BnH2c9lXTCH7mi49OFOKmBZDAeJc7BmyD5ki2Q41%2BgwCJCtKkblzdxPAQg9f6XxJ22DTejLfFkrYSoBO6bo4Lx49ve6GtNoR44hMNGb8cMGOqUBB6r2eAZYQdrE6wzMT0o0FT3kSZIqikdpFBZ1o%2ByYkzNaHZGf7u0%2FHaR23a84YyoabDBAElpCHmB2IiZjDQctzJ2PCEvX2X7oCTm99u0GLRVaoUtud%2BosXWWy2akapGPxgARWnoTBOdZlVozYLGg7YJUb0fppgcYNS6CWfmVGV8AUbXsS0LuGgO5YqyzCZxjNSN4iNk82GrTwSGkkCcgCpkwThOyL&X-Amz-Signature=a62b45ed19da24536a3ba24c113f166690d41fe5317c6ab57ee995e9ec31e018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSYPPQX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtWDYh8Ww9S6xrbQkSZpaaJaR8zVFvKbU7fQPWgEpDrAIgEhk4e0c%2FijrgWTJB8lRwefNlpTJwqopbDHUzBbYXKXEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw3vi7Mig%2B4FmyiCCrcAxrV%2FqfWFTnOrFgBZaJbkbdyQdAIBpDvFzysY5OzPRf5t6tO2kGxHu8o%2B2d3ct0MkNyDFlwIyNnEq%2F4ua4yxP8gTyAMiJzgx6oOvMa9Penz8T33Fh4VylF28LI%2B7s897jWUy56X4LFe%2Bfvj8xZ7A2LpL6nFshArWXmTSn2%2B8nR4yz%2B4yEgoYaX%2B3zjrEPGxS5qdms7K6rk5ZhSs3ThEdUhnZyEEt0OSQW55hZEvEuh4jN80dTkjoozkLzAFsS1dXpjhQzgfqfX8jKyDFEI3xY3U2nQMg4%2FQj2E0CmVUGjRTn%2B1dq07UTKBIEXyS7MHtuaJVFeqOqClYKPrpcuyhfFdlMMc9r9m%2BYZk6Q5Y8Bfpht0XOpM3D%2Fmn1aKqCYaowemqawRUcOaNgq7Wd%2F4Ct5t4hZmX0Gpruzchmjjh3Z6e%2BUtkeW7%2Fa%2B74UiD7G1l6pZDW%2FUWxRowZaBGZOaLoo0Rn5H5rBeLuXppk4N2eX5WdTQ%2FiLeHhOf2aPf2eE09kbk0oW7SISUHfTanM82qLkk0uEt4%2BnH2c9lXTCH7mi49OFOKmBZDAeJc7BmyD5ki2Q41%2BgwCJCtKkblzdxPAQg9f6XxJ22DTejLfFkrYSoBO6bo4Lx49ve6GtNoR44hMNGb8cMGOqUBB6r2eAZYQdrE6wzMT0o0FT3kSZIqikdpFBZ1o%2ByYkzNaHZGf7u0%2FHaR23a84YyoabDBAElpCHmB2IiZjDQctzJ2PCEvX2X7oCTm99u0GLRVaoUtud%2BosXWWy2akapGPxgARWnoTBOdZlVozYLGg7YJUb0fppgcYNS6CWfmVGV8AUbXsS0LuGgO5YqyzCZxjNSN4iNk82GrTwSGkkCcgCpkwThOyL&X-Amz-Signature=6a71feb976d17cd664b9170d3fed2489a6ed003ba84a16d5163186422e506d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSYPPQX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtWDYh8Ww9S6xrbQkSZpaaJaR8zVFvKbU7fQPWgEpDrAIgEhk4e0c%2FijrgWTJB8lRwefNlpTJwqopbDHUzBbYXKXEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw3vi7Mig%2B4FmyiCCrcAxrV%2FqfWFTnOrFgBZaJbkbdyQdAIBpDvFzysY5OzPRf5t6tO2kGxHu8o%2B2d3ct0MkNyDFlwIyNnEq%2F4ua4yxP8gTyAMiJzgx6oOvMa9Penz8T33Fh4VylF28LI%2B7s897jWUy56X4LFe%2Bfvj8xZ7A2LpL6nFshArWXmTSn2%2B8nR4yz%2B4yEgoYaX%2B3zjrEPGxS5qdms7K6rk5ZhSs3ThEdUhnZyEEt0OSQW55hZEvEuh4jN80dTkjoozkLzAFsS1dXpjhQzgfqfX8jKyDFEI3xY3U2nQMg4%2FQj2E0CmVUGjRTn%2B1dq07UTKBIEXyS7MHtuaJVFeqOqClYKPrpcuyhfFdlMMc9r9m%2BYZk6Q5Y8Bfpht0XOpM3D%2Fmn1aKqCYaowemqawRUcOaNgq7Wd%2F4Ct5t4hZmX0Gpruzchmjjh3Z6e%2BUtkeW7%2Fa%2B74UiD7G1l6pZDW%2FUWxRowZaBGZOaLoo0Rn5H5rBeLuXppk4N2eX5WdTQ%2FiLeHhOf2aPf2eE09kbk0oW7SISUHfTanM82qLkk0uEt4%2BnH2c9lXTCH7mi49OFOKmBZDAeJc7BmyD5ki2Q41%2BgwCJCtKkblzdxPAQg9f6XxJ22DTejLfFkrYSoBO6bo4Lx49ve6GtNoR44hMNGb8cMGOqUBB6r2eAZYQdrE6wzMT0o0FT3kSZIqikdpFBZ1o%2ByYkzNaHZGf7u0%2FHaR23a84YyoabDBAElpCHmB2IiZjDQctzJ2PCEvX2X7oCTm99u0GLRVaoUtud%2BosXWWy2akapGPxgARWnoTBOdZlVozYLGg7YJUb0fppgcYNS6CWfmVGV8AUbXsS0LuGgO5YqyzCZxjNSN4iNk82GrTwSGkkCcgCpkwThOyL&X-Amz-Signature=6ff4fa735975361aa0016e9fbe8e9f3ca264acce4aa92ecd2cbfd5b2a0262951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSYPPQX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtWDYh8Ww9S6xrbQkSZpaaJaR8zVFvKbU7fQPWgEpDrAIgEhk4e0c%2FijrgWTJB8lRwefNlpTJwqopbDHUzBbYXKXEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw3vi7Mig%2B4FmyiCCrcAxrV%2FqfWFTnOrFgBZaJbkbdyQdAIBpDvFzysY5OzPRf5t6tO2kGxHu8o%2B2d3ct0MkNyDFlwIyNnEq%2F4ua4yxP8gTyAMiJzgx6oOvMa9Penz8T33Fh4VylF28LI%2B7s897jWUy56X4LFe%2Bfvj8xZ7A2LpL6nFshArWXmTSn2%2B8nR4yz%2B4yEgoYaX%2B3zjrEPGxS5qdms7K6rk5ZhSs3ThEdUhnZyEEt0OSQW55hZEvEuh4jN80dTkjoozkLzAFsS1dXpjhQzgfqfX8jKyDFEI3xY3U2nQMg4%2FQj2E0CmVUGjRTn%2B1dq07UTKBIEXyS7MHtuaJVFeqOqClYKPrpcuyhfFdlMMc9r9m%2BYZk6Q5Y8Bfpht0XOpM3D%2Fmn1aKqCYaowemqawRUcOaNgq7Wd%2F4Ct5t4hZmX0Gpruzchmjjh3Z6e%2BUtkeW7%2Fa%2B74UiD7G1l6pZDW%2FUWxRowZaBGZOaLoo0Rn5H5rBeLuXppk4N2eX5WdTQ%2FiLeHhOf2aPf2eE09kbk0oW7SISUHfTanM82qLkk0uEt4%2BnH2c9lXTCH7mi49OFOKmBZDAeJc7BmyD5ki2Q41%2BgwCJCtKkblzdxPAQg9f6XxJ22DTejLfFkrYSoBO6bo4Lx49ve6GtNoR44hMNGb8cMGOqUBB6r2eAZYQdrE6wzMT0o0FT3kSZIqikdpFBZ1o%2ByYkzNaHZGf7u0%2FHaR23a84YyoabDBAElpCHmB2IiZjDQctzJ2PCEvX2X7oCTm99u0GLRVaoUtud%2BosXWWy2akapGPxgARWnoTBOdZlVozYLGg7YJUb0fppgcYNS6CWfmVGV8AUbXsS0LuGgO5YqyzCZxjNSN4iNk82GrTwSGkkCcgCpkwThOyL&X-Amz-Signature=68905fa425addb4449f79e3183d43e16449455b88641b2d060f6d01f075e1992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSYPPQX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtWDYh8Ww9S6xrbQkSZpaaJaR8zVFvKbU7fQPWgEpDrAIgEhk4e0c%2FijrgWTJB8lRwefNlpTJwqopbDHUzBbYXKXEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw3vi7Mig%2B4FmyiCCrcAxrV%2FqfWFTnOrFgBZaJbkbdyQdAIBpDvFzysY5OzPRf5t6tO2kGxHu8o%2B2d3ct0MkNyDFlwIyNnEq%2F4ua4yxP8gTyAMiJzgx6oOvMa9Penz8T33Fh4VylF28LI%2B7s897jWUy56X4LFe%2Bfvj8xZ7A2LpL6nFshArWXmTSn2%2B8nR4yz%2B4yEgoYaX%2B3zjrEPGxS5qdms7K6rk5ZhSs3ThEdUhnZyEEt0OSQW55hZEvEuh4jN80dTkjoozkLzAFsS1dXpjhQzgfqfX8jKyDFEI3xY3U2nQMg4%2FQj2E0CmVUGjRTn%2B1dq07UTKBIEXyS7MHtuaJVFeqOqClYKPrpcuyhfFdlMMc9r9m%2BYZk6Q5Y8Bfpht0XOpM3D%2Fmn1aKqCYaowemqawRUcOaNgq7Wd%2F4Ct5t4hZmX0Gpruzchmjjh3Z6e%2BUtkeW7%2Fa%2B74UiD7G1l6pZDW%2FUWxRowZaBGZOaLoo0Rn5H5rBeLuXppk4N2eX5WdTQ%2FiLeHhOf2aPf2eE09kbk0oW7SISUHfTanM82qLkk0uEt4%2BnH2c9lXTCH7mi49OFOKmBZDAeJc7BmyD5ki2Q41%2BgwCJCtKkblzdxPAQg9f6XxJ22DTejLfFkrYSoBO6bo4Lx49ve6GtNoR44hMNGb8cMGOqUBB6r2eAZYQdrE6wzMT0o0FT3kSZIqikdpFBZ1o%2ByYkzNaHZGf7u0%2FHaR23a84YyoabDBAElpCHmB2IiZjDQctzJ2PCEvX2X7oCTm99u0GLRVaoUtud%2BosXWWy2akapGPxgARWnoTBOdZlVozYLGg7YJUb0fppgcYNS6CWfmVGV8AUbXsS0LuGgO5YqyzCZxjNSN4iNk82GrTwSGkkCcgCpkwThOyL&X-Amz-Signature=efddde3ffc392ba060abde1dc21299ae02a47507cebf0a86df7ec1f92826d3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSYPPQX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtWDYh8Ww9S6xrbQkSZpaaJaR8zVFvKbU7fQPWgEpDrAIgEhk4e0c%2FijrgWTJB8lRwefNlpTJwqopbDHUzBbYXKXEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw3vi7Mig%2B4FmyiCCrcAxrV%2FqfWFTnOrFgBZaJbkbdyQdAIBpDvFzysY5OzPRf5t6tO2kGxHu8o%2B2d3ct0MkNyDFlwIyNnEq%2F4ua4yxP8gTyAMiJzgx6oOvMa9Penz8T33Fh4VylF28LI%2B7s897jWUy56X4LFe%2Bfvj8xZ7A2LpL6nFshArWXmTSn2%2B8nR4yz%2B4yEgoYaX%2B3zjrEPGxS5qdms7K6rk5ZhSs3ThEdUhnZyEEt0OSQW55hZEvEuh4jN80dTkjoozkLzAFsS1dXpjhQzgfqfX8jKyDFEI3xY3U2nQMg4%2FQj2E0CmVUGjRTn%2B1dq07UTKBIEXyS7MHtuaJVFeqOqClYKPrpcuyhfFdlMMc9r9m%2BYZk6Q5Y8Bfpht0XOpM3D%2Fmn1aKqCYaowemqawRUcOaNgq7Wd%2F4Ct5t4hZmX0Gpruzchmjjh3Z6e%2BUtkeW7%2Fa%2B74UiD7G1l6pZDW%2FUWxRowZaBGZOaLoo0Rn5H5rBeLuXppk4N2eX5WdTQ%2FiLeHhOf2aPf2eE09kbk0oW7SISUHfTanM82qLkk0uEt4%2BnH2c9lXTCH7mi49OFOKmBZDAeJc7BmyD5ki2Q41%2BgwCJCtKkblzdxPAQg9f6XxJ22DTejLfFkrYSoBO6bo4Lx49ve6GtNoR44hMNGb8cMGOqUBB6r2eAZYQdrE6wzMT0o0FT3kSZIqikdpFBZ1o%2ByYkzNaHZGf7u0%2FHaR23a84YyoabDBAElpCHmB2IiZjDQctzJ2PCEvX2X7oCTm99u0GLRVaoUtud%2BosXWWy2akapGPxgARWnoTBOdZlVozYLGg7YJUb0fppgcYNS6CWfmVGV8AUbXsS0LuGgO5YqyzCZxjNSN4iNk82GrTwSGkkCcgCpkwThOyL&X-Amz-Signature=488f6d087ef1cc3921c88e2a2f023310d636e44cb9235faa23c87f8f42d7b945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSYPPQX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtWDYh8Ww9S6xrbQkSZpaaJaR8zVFvKbU7fQPWgEpDrAIgEhk4e0c%2FijrgWTJB8lRwefNlpTJwqopbDHUzBbYXKXEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw3vi7Mig%2B4FmyiCCrcAxrV%2FqfWFTnOrFgBZaJbkbdyQdAIBpDvFzysY5OzPRf5t6tO2kGxHu8o%2B2d3ct0MkNyDFlwIyNnEq%2F4ua4yxP8gTyAMiJzgx6oOvMa9Penz8T33Fh4VylF28LI%2B7s897jWUy56X4LFe%2Bfvj8xZ7A2LpL6nFshArWXmTSn2%2B8nR4yz%2B4yEgoYaX%2B3zjrEPGxS5qdms7K6rk5ZhSs3ThEdUhnZyEEt0OSQW55hZEvEuh4jN80dTkjoozkLzAFsS1dXpjhQzgfqfX8jKyDFEI3xY3U2nQMg4%2FQj2E0CmVUGjRTn%2B1dq07UTKBIEXyS7MHtuaJVFeqOqClYKPrpcuyhfFdlMMc9r9m%2BYZk6Q5Y8Bfpht0XOpM3D%2Fmn1aKqCYaowemqawRUcOaNgq7Wd%2F4Ct5t4hZmX0Gpruzchmjjh3Z6e%2BUtkeW7%2Fa%2B74UiD7G1l6pZDW%2FUWxRowZaBGZOaLoo0Rn5H5rBeLuXppk4N2eX5WdTQ%2FiLeHhOf2aPf2eE09kbk0oW7SISUHfTanM82qLkk0uEt4%2BnH2c9lXTCH7mi49OFOKmBZDAeJc7BmyD5ki2Q41%2BgwCJCtKkblzdxPAQg9f6XxJ22DTejLfFkrYSoBO6bo4Lx49ve6GtNoR44hMNGb8cMGOqUBB6r2eAZYQdrE6wzMT0o0FT3kSZIqikdpFBZ1o%2ByYkzNaHZGf7u0%2FHaR23a84YyoabDBAElpCHmB2IiZjDQctzJ2PCEvX2X7oCTm99u0GLRVaoUtud%2BosXWWy2akapGPxgARWnoTBOdZlVozYLGg7YJUb0fppgcYNS6CWfmVGV8AUbXsS0LuGgO5YqyzCZxjNSN4iNk82GrTwSGkkCcgCpkwThOyL&X-Amz-Signature=cab89e899c0f95c0190a190fb712ba0638dce1ee8cb828d946f9fc691a053b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSYPPQX%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T070907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtWDYh8Ww9S6xrbQkSZpaaJaR8zVFvKbU7fQPWgEpDrAIgEhk4e0c%2FijrgWTJB8lRwefNlpTJwqopbDHUzBbYXKXEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEw3vi7Mig%2B4FmyiCCrcAxrV%2FqfWFTnOrFgBZaJbkbdyQdAIBpDvFzysY5OzPRf5t6tO2kGxHu8o%2B2d3ct0MkNyDFlwIyNnEq%2F4ua4yxP8gTyAMiJzgx6oOvMa9Penz8T33Fh4VylF28LI%2B7s897jWUy56X4LFe%2Bfvj8xZ7A2LpL6nFshArWXmTSn2%2B8nR4yz%2B4yEgoYaX%2B3zjrEPGxS5qdms7K6rk5ZhSs3ThEdUhnZyEEt0OSQW55hZEvEuh4jN80dTkjoozkLzAFsS1dXpjhQzgfqfX8jKyDFEI3xY3U2nQMg4%2FQj2E0CmVUGjRTn%2B1dq07UTKBIEXyS7MHtuaJVFeqOqClYKPrpcuyhfFdlMMc9r9m%2BYZk6Q5Y8Bfpht0XOpM3D%2Fmn1aKqCYaowemqawRUcOaNgq7Wd%2F4Ct5t4hZmX0Gpruzchmjjh3Z6e%2BUtkeW7%2Fa%2B74UiD7G1l6pZDW%2FUWxRowZaBGZOaLoo0Rn5H5rBeLuXppk4N2eX5WdTQ%2FiLeHhOf2aPf2eE09kbk0oW7SISUHfTanM82qLkk0uEt4%2BnH2c9lXTCH7mi49OFOKmBZDAeJc7BmyD5ki2Q41%2BgwCJCtKkblzdxPAQg9f6XxJ22DTejLfFkrYSoBO6bo4Lx49ve6GtNoR44hMNGb8cMGOqUBB6r2eAZYQdrE6wzMT0o0FT3kSZIqikdpFBZ1o%2ByYkzNaHZGf7u0%2FHaR23a84YyoabDBAElpCHmB2IiZjDQctzJ2PCEvX2X7oCTm99u0GLRVaoUtud%2BosXWWy2akapGPxgARWnoTBOdZlVozYLGg7YJUb0fppgcYNS6CWfmVGV8AUbXsS0LuGgO5YqyzCZxjNSN4iNk82GrTwSGkkCcgCpkwThOyL&X-Amz-Signature=efc9c320dd0c436e1030df1b9f3662d83970c2ecbfd17925b32b0bba2454d549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
