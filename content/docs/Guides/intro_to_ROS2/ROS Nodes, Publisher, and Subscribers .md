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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNF2H4R%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDN3Y4joe%2BbcY3i1HCYNpjL%2BJlhbCZpOt7V7BNVR67l6AIhAIegZrECSOYg7Gb%2FQddOr%2BjpBW%2Fz8nPBl73OIQdEsSNwKv8DCCcQABoMNjM3NDIzMTgzODA1IgxItPutE8TPFxY85zkq3AM7wYNha813i9VLYbMhVInLAPyPbtCHAPB0gb7NDe3ZcYen6gJFleWU8sEo9%2F%2F2uM4WeCP7IR4hC2bhbzXAetHATsyXwvKrxKo6puA9Kz%2BiEhzIc%2BK92YfMbyVrrAW%2BtAFTIibWf5ZjmIA7j8DLwO7wCVzaIprBEFDKx9JOPZYD77zJc%2FiTizbQFLHrGdrjExwDYQd43BHYWgrpxJUzvyQnHGy7ozUPC%2F3PHwWmun4aFXf9gESALVJu%2B2YhfMqICq0Y1iIDYNb5srS4SI6Hgy7eV6JzvkeuTJxLq%2B8VA3aCjZQLPg3svqeV6N%2BT7Z1GbCUpoM4k9mYFvNTHQBeyBINNaRuD4KdrYQG5jowDvvi3%2BntStRFgo6eILVWbWQ6Uz43YlVt0xtoh4AL8mBfD7JiZvs7EucFEF4qDMaBAWxiITaIhmb7Ctc19SyjebI8qDf8wf6LOEQCgSeXZ6mcZePUemDWHMkFDZFMjzQUAVatKpw0%2FFJoSUMxRvDGHQeXfWQMBrTWXH1%2B99sbp9eLyEsq%2Bug2DHSNIcOUD3OxD8OqOaM8WPhMBk0Qp%2BbdwcOWrsnT8FH2tmAOiCEGwsImSYBwLXHWprU5UNAmmY%2Bfq2jzEoLI27LLrdu6h4aXpQzDW4J3DBjqkASzBj2TrlP7VUIzZqzqOMt9OLSGB5QY8ttQ5d0%2FLI5RLHt4cV37LXzLuHchVijJ4Oq%2FvSazNlxHYhBVeTOJzOB0v1lzF9YTQ9tPHh%2FGbKOvjxRUQ8tIwVTYuFakto2EUtmkPMytv7ipJ3JzFUDbg%2F%2BDfBMPy7PJo63oJxH%2FDJmPH%2B3jn4BYP45B46xBhU%2F2OQJWh5JG1MpqaBrHVmbLcuopTcSFF&X-Amz-Signature=e8e5b317f88daebadbc5336f94df064de929248338f1d70c08d4c7d30f26df5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNF2H4R%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDN3Y4joe%2BbcY3i1HCYNpjL%2BJlhbCZpOt7V7BNVR67l6AIhAIegZrECSOYg7Gb%2FQddOr%2BjpBW%2Fz8nPBl73OIQdEsSNwKv8DCCcQABoMNjM3NDIzMTgzODA1IgxItPutE8TPFxY85zkq3AM7wYNha813i9VLYbMhVInLAPyPbtCHAPB0gb7NDe3ZcYen6gJFleWU8sEo9%2F%2F2uM4WeCP7IR4hC2bhbzXAetHATsyXwvKrxKo6puA9Kz%2BiEhzIc%2BK92YfMbyVrrAW%2BtAFTIibWf5ZjmIA7j8DLwO7wCVzaIprBEFDKx9JOPZYD77zJc%2FiTizbQFLHrGdrjExwDYQd43BHYWgrpxJUzvyQnHGy7ozUPC%2F3PHwWmun4aFXf9gESALVJu%2B2YhfMqICq0Y1iIDYNb5srS4SI6Hgy7eV6JzvkeuTJxLq%2B8VA3aCjZQLPg3svqeV6N%2BT7Z1GbCUpoM4k9mYFvNTHQBeyBINNaRuD4KdrYQG5jowDvvi3%2BntStRFgo6eILVWbWQ6Uz43YlVt0xtoh4AL8mBfD7JiZvs7EucFEF4qDMaBAWxiITaIhmb7Ctc19SyjebI8qDf8wf6LOEQCgSeXZ6mcZePUemDWHMkFDZFMjzQUAVatKpw0%2FFJoSUMxRvDGHQeXfWQMBrTWXH1%2B99sbp9eLyEsq%2Bug2DHSNIcOUD3OxD8OqOaM8WPhMBk0Qp%2BbdwcOWrsnT8FH2tmAOiCEGwsImSYBwLXHWprU5UNAmmY%2Bfq2jzEoLI27LLrdu6h4aXpQzDW4J3DBjqkASzBj2TrlP7VUIzZqzqOMt9OLSGB5QY8ttQ5d0%2FLI5RLHt4cV37LXzLuHchVijJ4Oq%2FvSazNlxHYhBVeTOJzOB0v1lzF9YTQ9tPHh%2FGbKOvjxRUQ8tIwVTYuFakto2EUtmkPMytv7ipJ3JzFUDbg%2F%2BDfBMPy7PJo63oJxH%2FDJmPH%2B3jn4BYP45B46xBhU%2F2OQJWh5JG1MpqaBrHVmbLcuopTcSFF&X-Amz-Signature=6ef4b90ad837d8d289d0555b64fca12d27f23947f8562ba5642dc9088b57f79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNF2H4R%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDN3Y4joe%2BbcY3i1HCYNpjL%2BJlhbCZpOt7V7BNVR67l6AIhAIegZrECSOYg7Gb%2FQddOr%2BjpBW%2Fz8nPBl73OIQdEsSNwKv8DCCcQABoMNjM3NDIzMTgzODA1IgxItPutE8TPFxY85zkq3AM7wYNha813i9VLYbMhVInLAPyPbtCHAPB0gb7NDe3ZcYen6gJFleWU8sEo9%2F%2F2uM4WeCP7IR4hC2bhbzXAetHATsyXwvKrxKo6puA9Kz%2BiEhzIc%2BK92YfMbyVrrAW%2BtAFTIibWf5ZjmIA7j8DLwO7wCVzaIprBEFDKx9JOPZYD77zJc%2FiTizbQFLHrGdrjExwDYQd43BHYWgrpxJUzvyQnHGy7ozUPC%2F3PHwWmun4aFXf9gESALVJu%2B2YhfMqICq0Y1iIDYNb5srS4SI6Hgy7eV6JzvkeuTJxLq%2B8VA3aCjZQLPg3svqeV6N%2BT7Z1GbCUpoM4k9mYFvNTHQBeyBINNaRuD4KdrYQG5jowDvvi3%2BntStRFgo6eILVWbWQ6Uz43YlVt0xtoh4AL8mBfD7JiZvs7EucFEF4qDMaBAWxiITaIhmb7Ctc19SyjebI8qDf8wf6LOEQCgSeXZ6mcZePUemDWHMkFDZFMjzQUAVatKpw0%2FFJoSUMxRvDGHQeXfWQMBrTWXH1%2B99sbp9eLyEsq%2Bug2DHSNIcOUD3OxD8OqOaM8WPhMBk0Qp%2BbdwcOWrsnT8FH2tmAOiCEGwsImSYBwLXHWprU5UNAmmY%2Bfq2jzEoLI27LLrdu6h4aXpQzDW4J3DBjqkASzBj2TrlP7VUIzZqzqOMt9OLSGB5QY8ttQ5d0%2FLI5RLHt4cV37LXzLuHchVijJ4Oq%2FvSazNlxHYhBVeTOJzOB0v1lzF9YTQ9tPHh%2FGbKOvjxRUQ8tIwVTYuFakto2EUtmkPMytv7ipJ3JzFUDbg%2F%2BDfBMPy7PJo63oJxH%2FDJmPH%2B3jn4BYP45B46xBhU%2F2OQJWh5JG1MpqaBrHVmbLcuopTcSFF&X-Amz-Signature=801d41fb1547dec9e90c242f6d79990fc86cbccb660d46ac97a394e241a32139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNF2H4R%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDN3Y4joe%2BbcY3i1HCYNpjL%2BJlhbCZpOt7V7BNVR67l6AIhAIegZrECSOYg7Gb%2FQddOr%2BjpBW%2Fz8nPBl73OIQdEsSNwKv8DCCcQABoMNjM3NDIzMTgzODA1IgxItPutE8TPFxY85zkq3AM7wYNha813i9VLYbMhVInLAPyPbtCHAPB0gb7NDe3ZcYen6gJFleWU8sEo9%2F%2F2uM4WeCP7IR4hC2bhbzXAetHATsyXwvKrxKo6puA9Kz%2BiEhzIc%2BK92YfMbyVrrAW%2BtAFTIibWf5ZjmIA7j8DLwO7wCVzaIprBEFDKx9JOPZYD77zJc%2FiTizbQFLHrGdrjExwDYQd43BHYWgrpxJUzvyQnHGy7ozUPC%2F3PHwWmun4aFXf9gESALVJu%2B2YhfMqICq0Y1iIDYNb5srS4SI6Hgy7eV6JzvkeuTJxLq%2B8VA3aCjZQLPg3svqeV6N%2BT7Z1GbCUpoM4k9mYFvNTHQBeyBINNaRuD4KdrYQG5jowDvvi3%2BntStRFgo6eILVWbWQ6Uz43YlVt0xtoh4AL8mBfD7JiZvs7EucFEF4qDMaBAWxiITaIhmb7Ctc19SyjebI8qDf8wf6LOEQCgSeXZ6mcZePUemDWHMkFDZFMjzQUAVatKpw0%2FFJoSUMxRvDGHQeXfWQMBrTWXH1%2B99sbp9eLyEsq%2Bug2DHSNIcOUD3OxD8OqOaM8WPhMBk0Qp%2BbdwcOWrsnT8FH2tmAOiCEGwsImSYBwLXHWprU5UNAmmY%2Bfq2jzEoLI27LLrdu6h4aXpQzDW4J3DBjqkASzBj2TrlP7VUIzZqzqOMt9OLSGB5QY8ttQ5d0%2FLI5RLHt4cV37LXzLuHchVijJ4Oq%2FvSazNlxHYhBVeTOJzOB0v1lzF9YTQ9tPHh%2FGbKOvjxRUQ8tIwVTYuFakto2EUtmkPMytv7ipJ3JzFUDbg%2F%2BDfBMPy7PJo63oJxH%2FDJmPH%2B3jn4BYP45B46xBhU%2F2OQJWh5JG1MpqaBrHVmbLcuopTcSFF&X-Amz-Signature=ff673a059a65f7ebd281420701d0928b0e43dfe9920bbfd1efee5020946bb5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNF2H4R%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDN3Y4joe%2BbcY3i1HCYNpjL%2BJlhbCZpOt7V7BNVR67l6AIhAIegZrECSOYg7Gb%2FQddOr%2BjpBW%2Fz8nPBl73OIQdEsSNwKv8DCCcQABoMNjM3NDIzMTgzODA1IgxItPutE8TPFxY85zkq3AM7wYNha813i9VLYbMhVInLAPyPbtCHAPB0gb7NDe3ZcYen6gJFleWU8sEo9%2F%2F2uM4WeCP7IR4hC2bhbzXAetHATsyXwvKrxKo6puA9Kz%2BiEhzIc%2BK92YfMbyVrrAW%2BtAFTIibWf5ZjmIA7j8DLwO7wCVzaIprBEFDKx9JOPZYD77zJc%2FiTizbQFLHrGdrjExwDYQd43BHYWgrpxJUzvyQnHGy7ozUPC%2F3PHwWmun4aFXf9gESALVJu%2B2YhfMqICq0Y1iIDYNb5srS4SI6Hgy7eV6JzvkeuTJxLq%2B8VA3aCjZQLPg3svqeV6N%2BT7Z1GbCUpoM4k9mYFvNTHQBeyBINNaRuD4KdrYQG5jowDvvi3%2BntStRFgo6eILVWbWQ6Uz43YlVt0xtoh4AL8mBfD7JiZvs7EucFEF4qDMaBAWxiITaIhmb7Ctc19SyjebI8qDf8wf6LOEQCgSeXZ6mcZePUemDWHMkFDZFMjzQUAVatKpw0%2FFJoSUMxRvDGHQeXfWQMBrTWXH1%2B99sbp9eLyEsq%2Bug2DHSNIcOUD3OxD8OqOaM8WPhMBk0Qp%2BbdwcOWrsnT8FH2tmAOiCEGwsImSYBwLXHWprU5UNAmmY%2Bfq2jzEoLI27LLrdu6h4aXpQzDW4J3DBjqkASzBj2TrlP7VUIzZqzqOMt9OLSGB5QY8ttQ5d0%2FLI5RLHt4cV37LXzLuHchVijJ4Oq%2FvSazNlxHYhBVeTOJzOB0v1lzF9YTQ9tPHh%2FGbKOvjxRUQ8tIwVTYuFakto2EUtmkPMytv7ipJ3JzFUDbg%2F%2BDfBMPy7PJo63oJxH%2FDJmPH%2B3jn4BYP45B46xBhU%2F2OQJWh5JG1MpqaBrHVmbLcuopTcSFF&X-Amz-Signature=fc426f9f6d373ba074f2130e5dcbdc0223ed60f43abb73d74a7f6ba9686a5602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNF2H4R%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDN3Y4joe%2BbcY3i1HCYNpjL%2BJlhbCZpOt7V7BNVR67l6AIhAIegZrECSOYg7Gb%2FQddOr%2BjpBW%2Fz8nPBl73OIQdEsSNwKv8DCCcQABoMNjM3NDIzMTgzODA1IgxItPutE8TPFxY85zkq3AM7wYNha813i9VLYbMhVInLAPyPbtCHAPB0gb7NDe3ZcYen6gJFleWU8sEo9%2F%2F2uM4WeCP7IR4hC2bhbzXAetHATsyXwvKrxKo6puA9Kz%2BiEhzIc%2BK92YfMbyVrrAW%2BtAFTIibWf5ZjmIA7j8DLwO7wCVzaIprBEFDKx9JOPZYD77zJc%2FiTizbQFLHrGdrjExwDYQd43BHYWgrpxJUzvyQnHGy7ozUPC%2F3PHwWmun4aFXf9gESALVJu%2B2YhfMqICq0Y1iIDYNb5srS4SI6Hgy7eV6JzvkeuTJxLq%2B8VA3aCjZQLPg3svqeV6N%2BT7Z1GbCUpoM4k9mYFvNTHQBeyBINNaRuD4KdrYQG5jowDvvi3%2BntStRFgo6eILVWbWQ6Uz43YlVt0xtoh4AL8mBfD7JiZvs7EucFEF4qDMaBAWxiITaIhmb7Ctc19SyjebI8qDf8wf6LOEQCgSeXZ6mcZePUemDWHMkFDZFMjzQUAVatKpw0%2FFJoSUMxRvDGHQeXfWQMBrTWXH1%2B99sbp9eLyEsq%2Bug2DHSNIcOUD3OxD8OqOaM8WPhMBk0Qp%2BbdwcOWrsnT8FH2tmAOiCEGwsImSYBwLXHWprU5UNAmmY%2Bfq2jzEoLI27LLrdu6h4aXpQzDW4J3DBjqkASzBj2TrlP7VUIzZqzqOMt9OLSGB5QY8ttQ5d0%2FLI5RLHt4cV37LXzLuHchVijJ4Oq%2FvSazNlxHYhBVeTOJzOB0v1lzF9YTQ9tPHh%2FGbKOvjxRUQ8tIwVTYuFakto2EUtmkPMytv7ipJ3JzFUDbg%2F%2BDfBMPy7PJo63oJxH%2FDJmPH%2B3jn4BYP45B46xBhU%2F2OQJWh5JG1MpqaBrHVmbLcuopTcSFF&X-Amz-Signature=cac8f214e67d6925f26dc57376708311bcafdc3bf7ead8bb8fd6112d94287390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNF2H4R%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDN3Y4joe%2BbcY3i1HCYNpjL%2BJlhbCZpOt7V7BNVR67l6AIhAIegZrECSOYg7Gb%2FQddOr%2BjpBW%2Fz8nPBl73OIQdEsSNwKv8DCCcQABoMNjM3NDIzMTgzODA1IgxItPutE8TPFxY85zkq3AM7wYNha813i9VLYbMhVInLAPyPbtCHAPB0gb7NDe3ZcYen6gJFleWU8sEo9%2F%2F2uM4WeCP7IR4hC2bhbzXAetHATsyXwvKrxKo6puA9Kz%2BiEhzIc%2BK92YfMbyVrrAW%2BtAFTIibWf5ZjmIA7j8DLwO7wCVzaIprBEFDKx9JOPZYD77zJc%2FiTizbQFLHrGdrjExwDYQd43BHYWgrpxJUzvyQnHGy7ozUPC%2F3PHwWmun4aFXf9gESALVJu%2B2YhfMqICq0Y1iIDYNb5srS4SI6Hgy7eV6JzvkeuTJxLq%2B8VA3aCjZQLPg3svqeV6N%2BT7Z1GbCUpoM4k9mYFvNTHQBeyBINNaRuD4KdrYQG5jowDvvi3%2BntStRFgo6eILVWbWQ6Uz43YlVt0xtoh4AL8mBfD7JiZvs7EucFEF4qDMaBAWxiITaIhmb7Ctc19SyjebI8qDf8wf6LOEQCgSeXZ6mcZePUemDWHMkFDZFMjzQUAVatKpw0%2FFJoSUMxRvDGHQeXfWQMBrTWXH1%2B99sbp9eLyEsq%2Bug2DHSNIcOUD3OxD8OqOaM8WPhMBk0Qp%2BbdwcOWrsnT8FH2tmAOiCEGwsImSYBwLXHWprU5UNAmmY%2Bfq2jzEoLI27LLrdu6h4aXpQzDW4J3DBjqkASzBj2TrlP7VUIzZqzqOMt9OLSGB5QY8ttQ5d0%2FLI5RLHt4cV37LXzLuHchVijJ4Oq%2FvSazNlxHYhBVeTOJzOB0v1lzF9YTQ9tPHh%2FGbKOvjxRUQ8tIwVTYuFakto2EUtmkPMytv7ipJ3JzFUDbg%2F%2BDfBMPy7PJo63oJxH%2FDJmPH%2B3jn4BYP45B46xBhU%2F2OQJWh5JG1MpqaBrHVmbLcuopTcSFF&X-Amz-Signature=b32f87708322e02e0a5389437208194b322676d1e3cdc886eb54169c4a6caef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNF2H4R%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDN3Y4joe%2BbcY3i1HCYNpjL%2BJlhbCZpOt7V7BNVR67l6AIhAIegZrECSOYg7Gb%2FQddOr%2BjpBW%2Fz8nPBl73OIQdEsSNwKv8DCCcQABoMNjM3NDIzMTgzODA1IgxItPutE8TPFxY85zkq3AM7wYNha813i9VLYbMhVInLAPyPbtCHAPB0gb7NDe3ZcYen6gJFleWU8sEo9%2F%2F2uM4WeCP7IR4hC2bhbzXAetHATsyXwvKrxKo6puA9Kz%2BiEhzIc%2BK92YfMbyVrrAW%2BtAFTIibWf5ZjmIA7j8DLwO7wCVzaIprBEFDKx9JOPZYD77zJc%2FiTizbQFLHrGdrjExwDYQd43BHYWgrpxJUzvyQnHGy7ozUPC%2F3PHwWmun4aFXf9gESALVJu%2B2YhfMqICq0Y1iIDYNb5srS4SI6Hgy7eV6JzvkeuTJxLq%2B8VA3aCjZQLPg3svqeV6N%2BT7Z1GbCUpoM4k9mYFvNTHQBeyBINNaRuD4KdrYQG5jowDvvi3%2BntStRFgo6eILVWbWQ6Uz43YlVt0xtoh4AL8mBfD7JiZvs7EucFEF4qDMaBAWxiITaIhmb7Ctc19SyjebI8qDf8wf6LOEQCgSeXZ6mcZePUemDWHMkFDZFMjzQUAVatKpw0%2FFJoSUMxRvDGHQeXfWQMBrTWXH1%2B99sbp9eLyEsq%2Bug2DHSNIcOUD3OxD8OqOaM8WPhMBk0Qp%2BbdwcOWrsnT8FH2tmAOiCEGwsImSYBwLXHWprU5UNAmmY%2Bfq2jzEoLI27LLrdu6h4aXpQzDW4J3DBjqkASzBj2TrlP7VUIzZqzqOMt9OLSGB5QY8ttQ5d0%2FLI5RLHt4cV37LXzLuHchVijJ4Oq%2FvSazNlxHYhBVeTOJzOB0v1lzF9YTQ9tPHh%2FGbKOvjxRUQ8tIwVTYuFakto2EUtmkPMytv7ipJ3JzFUDbg%2F%2BDfBMPy7PJo63oJxH%2FDJmPH%2B3jn4BYP45B46xBhU%2F2OQJWh5JG1MpqaBrHVmbLcuopTcSFF&X-Amz-Signature=85480074ab20f52c3e1dcf1dced4f1e6dd446760b014752cdec5f9a4aa62f92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
