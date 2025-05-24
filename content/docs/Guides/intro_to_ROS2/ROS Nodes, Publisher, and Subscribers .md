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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG4BHGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAOSewErqDGnzqx0Fjxch5Wsqs9zAyyOUyTXdr3oNduqAiEAuIhNS0pnOL%2FMyCEietksQn4cBld7aYO66Wm7mkg21sYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNxsJw6D54TDx49rbSrcA5dJsO2Iqx6IozUT%2BhG8bZnoZcrbS4%2BSsXA9y7fsobvriwk%2BNMF3%2FXvYIwVroqArd83ooHIbVOVeJaXX45bLTPuHJLycNcsQGMyInVmxAuaxDkBTu73vqYm5CdUcHg6dF4AsSkr6E3svi6Utl%2B%2BL%2B0tMvaol9jNiXAG1Omi96ya%2FYOSL%2FhWUm4VKVeT6lXAfAq4qhEy%2BhmnElGgQ1kJSCZXqD1AJqLHj5Y9Nu1LH7EXvzwOPAQq2j8RrL9iLCZuD4f%2FmVssJO5U9oiPqgb1s3Wwv9yS7nHH9TsgPEj45Xi9a3YZYeIUDf5RLqQ6q83wSLY7sej7x42STdkxmZJjPV%2FTsOUbxeamsO60p1X1Qg6p2P7Om6fH5cEKE3iXRQhBroEYB0FUI1ESKlKlTBYrwCEfzOFnemqM%2FAcioFopqf2P3DhuMHFNj7ihIqVWseQ8LePg19ImgUp3eZwIYI9BpX9YLVNvyFmw8xEkUZt86W3nTHFzTSKphGmf8t4zVogywaXpchCfkcbITttbPGXe1J3Zi7AIuAslCIjl%2BfbRQNeV%2Bot0V3nrx21iL7GOdZRnsnYXBBtJP8KzkY5PGT6t5Vb61P7ZwP3uM%2BPSBu4d2rschNqyBU2l3OlxfjVV9MJqZxsEGOqUBsRw%2B6kcbJ1Dl2nI0kdrFQ9HLickYKCgPv9Mdh%2BmXOtXbHpg%2B4Cd00yhAvOoloaVZEponiZbOsSg63O%2BLLNBX85Hm8yAZbeOWNaS6VN7qLhDCviE68yfasJ5YnxL9YHBsYwczbGekd6BteTBE2%2BQYsi%2FWuHGLU20SKEGMPhy1bOTN5WLdjipW2VeBMwya%2FE83Za689JRw9eTAFvlEVR7jZhloZF%2BD&X-Amz-Signature=b1582894924ccf03065211c9cd78e24c6564e6c48c93f45cb406ccdbecc796c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG4BHGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAOSewErqDGnzqx0Fjxch5Wsqs9zAyyOUyTXdr3oNduqAiEAuIhNS0pnOL%2FMyCEietksQn4cBld7aYO66Wm7mkg21sYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNxsJw6D54TDx49rbSrcA5dJsO2Iqx6IozUT%2BhG8bZnoZcrbS4%2BSsXA9y7fsobvriwk%2BNMF3%2FXvYIwVroqArd83ooHIbVOVeJaXX45bLTPuHJLycNcsQGMyInVmxAuaxDkBTu73vqYm5CdUcHg6dF4AsSkr6E3svi6Utl%2B%2BL%2B0tMvaol9jNiXAG1Omi96ya%2FYOSL%2FhWUm4VKVeT6lXAfAq4qhEy%2BhmnElGgQ1kJSCZXqD1AJqLHj5Y9Nu1LH7EXvzwOPAQq2j8RrL9iLCZuD4f%2FmVssJO5U9oiPqgb1s3Wwv9yS7nHH9TsgPEj45Xi9a3YZYeIUDf5RLqQ6q83wSLY7sej7x42STdkxmZJjPV%2FTsOUbxeamsO60p1X1Qg6p2P7Om6fH5cEKE3iXRQhBroEYB0FUI1ESKlKlTBYrwCEfzOFnemqM%2FAcioFopqf2P3DhuMHFNj7ihIqVWseQ8LePg19ImgUp3eZwIYI9BpX9YLVNvyFmw8xEkUZt86W3nTHFzTSKphGmf8t4zVogywaXpchCfkcbITttbPGXe1J3Zi7AIuAslCIjl%2BfbRQNeV%2Bot0V3nrx21iL7GOdZRnsnYXBBtJP8KzkY5PGT6t5Vb61P7ZwP3uM%2BPSBu4d2rschNqyBU2l3OlxfjVV9MJqZxsEGOqUBsRw%2B6kcbJ1Dl2nI0kdrFQ9HLickYKCgPv9Mdh%2BmXOtXbHpg%2B4Cd00yhAvOoloaVZEponiZbOsSg63O%2BLLNBX85Hm8yAZbeOWNaS6VN7qLhDCviE68yfasJ5YnxL9YHBsYwczbGekd6BteTBE2%2BQYsi%2FWuHGLU20SKEGMPhy1bOTN5WLdjipW2VeBMwya%2FE83Za689JRw9eTAFvlEVR7jZhloZF%2BD&X-Amz-Signature=08ca94295a9a637144a1289659dca0b2f2b227b45ecbc23c2fa15b874bb82e72&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG4BHGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAOSewErqDGnzqx0Fjxch5Wsqs9zAyyOUyTXdr3oNduqAiEAuIhNS0pnOL%2FMyCEietksQn4cBld7aYO66Wm7mkg21sYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNxsJw6D54TDx49rbSrcA5dJsO2Iqx6IozUT%2BhG8bZnoZcrbS4%2BSsXA9y7fsobvriwk%2BNMF3%2FXvYIwVroqArd83ooHIbVOVeJaXX45bLTPuHJLycNcsQGMyInVmxAuaxDkBTu73vqYm5CdUcHg6dF4AsSkr6E3svi6Utl%2B%2BL%2B0tMvaol9jNiXAG1Omi96ya%2FYOSL%2FhWUm4VKVeT6lXAfAq4qhEy%2BhmnElGgQ1kJSCZXqD1AJqLHj5Y9Nu1LH7EXvzwOPAQq2j8RrL9iLCZuD4f%2FmVssJO5U9oiPqgb1s3Wwv9yS7nHH9TsgPEj45Xi9a3YZYeIUDf5RLqQ6q83wSLY7sej7x42STdkxmZJjPV%2FTsOUbxeamsO60p1X1Qg6p2P7Om6fH5cEKE3iXRQhBroEYB0FUI1ESKlKlTBYrwCEfzOFnemqM%2FAcioFopqf2P3DhuMHFNj7ihIqVWseQ8LePg19ImgUp3eZwIYI9BpX9YLVNvyFmw8xEkUZt86W3nTHFzTSKphGmf8t4zVogywaXpchCfkcbITttbPGXe1J3Zi7AIuAslCIjl%2BfbRQNeV%2Bot0V3nrx21iL7GOdZRnsnYXBBtJP8KzkY5PGT6t5Vb61P7ZwP3uM%2BPSBu4d2rschNqyBU2l3OlxfjVV9MJqZxsEGOqUBsRw%2B6kcbJ1Dl2nI0kdrFQ9HLickYKCgPv9Mdh%2BmXOtXbHpg%2B4Cd00yhAvOoloaVZEponiZbOsSg63O%2BLLNBX85Hm8yAZbeOWNaS6VN7qLhDCviE68yfasJ5YnxL9YHBsYwczbGekd6BteTBE2%2BQYsi%2FWuHGLU20SKEGMPhy1bOTN5WLdjipW2VeBMwya%2FE83Za689JRw9eTAFvlEVR7jZhloZF%2BD&X-Amz-Signature=3ad4b017f545b53b46123a5cad52d408db441cb29fb1265f5ff981592b3de49e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG4BHGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAOSewErqDGnzqx0Fjxch5Wsqs9zAyyOUyTXdr3oNduqAiEAuIhNS0pnOL%2FMyCEietksQn4cBld7aYO66Wm7mkg21sYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNxsJw6D54TDx49rbSrcA5dJsO2Iqx6IozUT%2BhG8bZnoZcrbS4%2BSsXA9y7fsobvriwk%2BNMF3%2FXvYIwVroqArd83ooHIbVOVeJaXX45bLTPuHJLycNcsQGMyInVmxAuaxDkBTu73vqYm5CdUcHg6dF4AsSkr6E3svi6Utl%2B%2BL%2B0tMvaol9jNiXAG1Omi96ya%2FYOSL%2FhWUm4VKVeT6lXAfAq4qhEy%2BhmnElGgQ1kJSCZXqD1AJqLHj5Y9Nu1LH7EXvzwOPAQq2j8RrL9iLCZuD4f%2FmVssJO5U9oiPqgb1s3Wwv9yS7nHH9TsgPEj45Xi9a3YZYeIUDf5RLqQ6q83wSLY7sej7x42STdkxmZJjPV%2FTsOUbxeamsO60p1X1Qg6p2P7Om6fH5cEKE3iXRQhBroEYB0FUI1ESKlKlTBYrwCEfzOFnemqM%2FAcioFopqf2P3DhuMHFNj7ihIqVWseQ8LePg19ImgUp3eZwIYI9BpX9YLVNvyFmw8xEkUZt86W3nTHFzTSKphGmf8t4zVogywaXpchCfkcbITttbPGXe1J3Zi7AIuAslCIjl%2BfbRQNeV%2Bot0V3nrx21iL7GOdZRnsnYXBBtJP8KzkY5PGT6t5Vb61P7ZwP3uM%2BPSBu4d2rschNqyBU2l3OlxfjVV9MJqZxsEGOqUBsRw%2B6kcbJ1Dl2nI0kdrFQ9HLickYKCgPv9Mdh%2BmXOtXbHpg%2B4Cd00yhAvOoloaVZEponiZbOsSg63O%2BLLNBX85Hm8yAZbeOWNaS6VN7qLhDCviE68yfasJ5YnxL9YHBsYwczbGekd6BteTBE2%2BQYsi%2FWuHGLU20SKEGMPhy1bOTN5WLdjipW2VeBMwya%2FE83Za689JRw9eTAFvlEVR7jZhloZF%2BD&X-Amz-Signature=e251ca76468a401ebb3a38838ce5cee6323a9bda5a20003f6607cd94477eec8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG4BHGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAOSewErqDGnzqx0Fjxch5Wsqs9zAyyOUyTXdr3oNduqAiEAuIhNS0pnOL%2FMyCEietksQn4cBld7aYO66Wm7mkg21sYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNxsJw6D54TDx49rbSrcA5dJsO2Iqx6IozUT%2BhG8bZnoZcrbS4%2BSsXA9y7fsobvriwk%2BNMF3%2FXvYIwVroqArd83ooHIbVOVeJaXX45bLTPuHJLycNcsQGMyInVmxAuaxDkBTu73vqYm5CdUcHg6dF4AsSkr6E3svi6Utl%2B%2BL%2B0tMvaol9jNiXAG1Omi96ya%2FYOSL%2FhWUm4VKVeT6lXAfAq4qhEy%2BhmnElGgQ1kJSCZXqD1AJqLHj5Y9Nu1LH7EXvzwOPAQq2j8RrL9iLCZuD4f%2FmVssJO5U9oiPqgb1s3Wwv9yS7nHH9TsgPEj45Xi9a3YZYeIUDf5RLqQ6q83wSLY7sej7x42STdkxmZJjPV%2FTsOUbxeamsO60p1X1Qg6p2P7Om6fH5cEKE3iXRQhBroEYB0FUI1ESKlKlTBYrwCEfzOFnemqM%2FAcioFopqf2P3DhuMHFNj7ihIqVWseQ8LePg19ImgUp3eZwIYI9BpX9YLVNvyFmw8xEkUZt86W3nTHFzTSKphGmf8t4zVogywaXpchCfkcbITttbPGXe1J3Zi7AIuAslCIjl%2BfbRQNeV%2Bot0V3nrx21iL7GOdZRnsnYXBBtJP8KzkY5PGT6t5Vb61P7ZwP3uM%2BPSBu4d2rschNqyBU2l3OlxfjVV9MJqZxsEGOqUBsRw%2B6kcbJ1Dl2nI0kdrFQ9HLickYKCgPv9Mdh%2BmXOtXbHpg%2B4Cd00yhAvOoloaVZEponiZbOsSg63O%2BLLNBX85Hm8yAZbeOWNaS6VN7qLhDCviE68yfasJ5YnxL9YHBsYwczbGekd6BteTBE2%2BQYsi%2FWuHGLU20SKEGMPhy1bOTN5WLdjipW2VeBMwya%2FE83Za689JRw9eTAFvlEVR7jZhloZF%2BD&X-Amz-Signature=576ac3eb79b59bacbe59c9c734bb0b9cdc05b325740325af5b59e5577f8fe6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG4BHGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAOSewErqDGnzqx0Fjxch5Wsqs9zAyyOUyTXdr3oNduqAiEAuIhNS0pnOL%2FMyCEietksQn4cBld7aYO66Wm7mkg21sYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNxsJw6D54TDx49rbSrcA5dJsO2Iqx6IozUT%2BhG8bZnoZcrbS4%2BSsXA9y7fsobvriwk%2BNMF3%2FXvYIwVroqArd83ooHIbVOVeJaXX45bLTPuHJLycNcsQGMyInVmxAuaxDkBTu73vqYm5CdUcHg6dF4AsSkr6E3svi6Utl%2B%2BL%2B0tMvaol9jNiXAG1Omi96ya%2FYOSL%2FhWUm4VKVeT6lXAfAq4qhEy%2BhmnElGgQ1kJSCZXqD1AJqLHj5Y9Nu1LH7EXvzwOPAQq2j8RrL9iLCZuD4f%2FmVssJO5U9oiPqgb1s3Wwv9yS7nHH9TsgPEj45Xi9a3YZYeIUDf5RLqQ6q83wSLY7sej7x42STdkxmZJjPV%2FTsOUbxeamsO60p1X1Qg6p2P7Om6fH5cEKE3iXRQhBroEYB0FUI1ESKlKlTBYrwCEfzOFnemqM%2FAcioFopqf2P3DhuMHFNj7ihIqVWseQ8LePg19ImgUp3eZwIYI9BpX9YLVNvyFmw8xEkUZt86W3nTHFzTSKphGmf8t4zVogywaXpchCfkcbITttbPGXe1J3Zi7AIuAslCIjl%2BfbRQNeV%2Bot0V3nrx21iL7GOdZRnsnYXBBtJP8KzkY5PGT6t5Vb61P7ZwP3uM%2BPSBu4d2rschNqyBU2l3OlxfjVV9MJqZxsEGOqUBsRw%2B6kcbJ1Dl2nI0kdrFQ9HLickYKCgPv9Mdh%2BmXOtXbHpg%2B4Cd00yhAvOoloaVZEponiZbOsSg63O%2BLLNBX85Hm8yAZbeOWNaS6VN7qLhDCviE68yfasJ5YnxL9YHBsYwczbGekd6BteTBE2%2BQYsi%2FWuHGLU20SKEGMPhy1bOTN5WLdjipW2VeBMwya%2FE83Za689JRw9eTAFvlEVR7jZhloZF%2BD&X-Amz-Signature=50870cd8a05317d29122f8ffd22402b7500bd2a803de05fd9061b4e154a941b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG4BHGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAOSewErqDGnzqx0Fjxch5Wsqs9zAyyOUyTXdr3oNduqAiEAuIhNS0pnOL%2FMyCEietksQn4cBld7aYO66Wm7mkg21sYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNxsJw6D54TDx49rbSrcA5dJsO2Iqx6IozUT%2BhG8bZnoZcrbS4%2BSsXA9y7fsobvriwk%2BNMF3%2FXvYIwVroqArd83ooHIbVOVeJaXX45bLTPuHJLycNcsQGMyInVmxAuaxDkBTu73vqYm5CdUcHg6dF4AsSkr6E3svi6Utl%2B%2BL%2B0tMvaol9jNiXAG1Omi96ya%2FYOSL%2FhWUm4VKVeT6lXAfAq4qhEy%2BhmnElGgQ1kJSCZXqD1AJqLHj5Y9Nu1LH7EXvzwOPAQq2j8RrL9iLCZuD4f%2FmVssJO5U9oiPqgb1s3Wwv9yS7nHH9TsgPEj45Xi9a3YZYeIUDf5RLqQ6q83wSLY7sej7x42STdkxmZJjPV%2FTsOUbxeamsO60p1X1Qg6p2P7Om6fH5cEKE3iXRQhBroEYB0FUI1ESKlKlTBYrwCEfzOFnemqM%2FAcioFopqf2P3DhuMHFNj7ihIqVWseQ8LePg19ImgUp3eZwIYI9BpX9YLVNvyFmw8xEkUZt86W3nTHFzTSKphGmf8t4zVogywaXpchCfkcbITttbPGXe1J3Zi7AIuAslCIjl%2BfbRQNeV%2Bot0V3nrx21iL7GOdZRnsnYXBBtJP8KzkY5PGT6t5Vb61P7ZwP3uM%2BPSBu4d2rschNqyBU2l3OlxfjVV9MJqZxsEGOqUBsRw%2B6kcbJ1Dl2nI0kdrFQ9HLickYKCgPv9Mdh%2BmXOtXbHpg%2B4Cd00yhAvOoloaVZEponiZbOsSg63O%2BLLNBX85Hm8yAZbeOWNaS6VN7qLhDCviE68yfasJ5YnxL9YHBsYwczbGekd6BteTBE2%2BQYsi%2FWuHGLU20SKEGMPhy1bOTN5WLdjipW2VeBMwya%2FE83Za689JRw9eTAFvlEVR7jZhloZF%2BD&X-Amz-Signature=e5034be25e5ef7ae1114483ea4e40f31b764306d17e37593aa268c3cecdc82ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNG4BHGU%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T121346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAOSewErqDGnzqx0Fjxch5Wsqs9zAyyOUyTXdr3oNduqAiEAuIhNS0pnOL%2FMyCEietksQn4cBld7aYO66Wm7mkg21sYq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNxsJw6D54TDx49rbSrcA5dJsO2Iqx6IozUT%2BhG8bZnoZcrbS4%2BSsXA9y7fsobvriwk%2BNMF3%2FXvYIwVroqArd83ooHIbVOVeJaXX45bLTPuHJLycNcsQGMyInVmxAuaxDkBTu73vqYm5CdUcHg6dF4AsSkr6E3svi6Utl%2B%2BL%2B0tMvaol9jNiXAG1Omi96ya%2FYOSL%2FhWUm4VKVeT6lXAfAq4qhEy%2BhmnElGgQ1kJSCZXqD1AJqLHj5Y9Nu1LH7EXvzwOPAQq2j8RrL9iLCZuD4f%2FmVssJO5U9oiPqgb1s3Wwv9yS7nHH9TsgPEj45Xi9a3YZYeIUDf5RLqQ6q83wSLY7sej7x42STdkxmZJjPV%2FTsOUbxeamsO60p1X1Qg6p2P7Om6fH5cEKE3iXRQhBroEYB0FUI1ESKlKlTBYrwCEfzOFnemqM%2FAcioFopqf2P3DhuMHFNj7ihIqVWseQ8LePg19ImgUp3eZwIYI9BpX9YLVNvyFmw8xEkUZt86W3nTHFzTSKphGmf8t4zVogywaXpchCfkcbITttbPGXe1J3Zi7AIuAslCIjl%2BfbRQNeV%2Bot0V3nrx21iL7GOdZRnsnYXBBtJP8KzkY5PGT6t5Vb61P7ZwP3uM%2BPSBu4d2rschNqyBU2l3OlxfjVV9MJqZxsEGOqUBsRw%2B6kcbJ1Dl2nI0kdrFQ9HLickYKCgPv9Mdh%2BmXOtXbHpg%2B4Cd00yhAvOoloaVZEponiZbOsSg63O%2BLLNBX85Hm8yAZbeOWNaS6VN7qLhDCviE68yfasJ5YnxL9YHBsYwczbGekd6BteTBE2%2BQYsi%2FWuHGLU20SKEGMPhy1bOTN5WLdjipW2VeBMwya%2FE83Za689JRw9eTAFvlEVR7jZhloZF%2BD&X-Amz-Signature=297e7cbd69f32b53cf4af52a4228dff921a429c46c69ffe53f6e84e50e25871a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
