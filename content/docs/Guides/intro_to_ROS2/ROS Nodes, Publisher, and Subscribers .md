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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WONADOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHwSplVUtdl5Lb%2FTWxzUG%2FW975%2FPph9Mr%2BMS9jEIKDgICICAVk1%2Bl%2BIOVJC%2BklEbZdS4vK8b1YjjZIpktYagK5sGNKv8DCHgQABoMNjM3NDIzMTgzODA1IgyvgmuJa0QmLLcOZe0q3AMlPugzb9XcuGN5IxT6sDY70Kugcc4vSCh%2F7INzBpDEW87wsQbyKVkR7Irf%2BKz5lHUQt92poZ2DbqGUfzFT29ZF%2FetcgLd%2BhUHNcGxu%2BOXlk228%2Btsejqmqr3GU7q47y%2F97dNit0MO9rDD6I%2BLjDtQx79vFGjAZyCDjUIIdBh7IkkUw6Cms9b0pVQ4EB0ptPOvASRQIk9Ah3yYDrkCcAtCdlR1YLCZg99Z%2Bj7a5ZEnlZfBwOCNvhpL0x7YcP3Ts7CJS5%2BqsItQCTiDLfpp7CjUu%2BVDg83NPozmfh9ee9oKo%2BZTaGnXoI%2B8HYNGSbezN4%2F%2BOuPgFBPt1iBnSZlj79Rc5hVs7p704TSTRqK5SsnUKKBZ99HMcEGzqzYdxsIMdRZcFA3ZCNOqMVlh7u7vtCiEu2KEkRx5kN%2FJPH2QkO%2FSkA2X4%2BbUxXrx9DgRH5FXcofbqE92vsRhOB659m7jLgY3ZWG3pVBFj%2BsZ0kAklv08hYzkS493aFzgNOYUmMlwLcJwGOf%2B5z7wirWXZBzgRJFcTqMWOu1ech6CNzyE4QhQ0USZlLlIJwFs4hNPMPCuYEn%2FRT5AaJirimgUZshcJrF28cgdmFVv2Ly2arbDdHZMC74QuSzp1y%2BP8lQXrizCRvOu%2BBjqnARCRdyYH0n8SSog1N%2BbptfdUsHYwYc8nwyDfFKYAp%2FNK38ZpgCNRN25G0K0a6FipVCbvF7ZJs%2F7vMW6DQA09VJonsODt9v9ee8etAnociIT21UTXZ8EXM3Ve%2F18pCNdpeJ0CizeXkMn0OB0ofZsJRik0Uw5B2uRAjxptbHZYQuAfdD4Ze5YmQ67ZsBblEgt4hhLFiz3klbT%2FdtsqHn02JP1BvhIPR3T8&X-Amz-Signature=bcc5e56344b47c99ec8125475eb56eac0066927ea8315952001fcd0751c39ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WONADOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHwSplVUtdl5Lb%2FTWxzUG%2FW975%2FPph9Mr%2BMS9jEIKDgICICAVk1%2Bl%2BIOVJC%2BklEbZdS4vK8b1YjjZIpktYagK5sGNKv8DCHgQABoMNjM3NDIzMTgzODA1IgyvgmuJa0QmLLcOZe0q3AMlPugzb9XcuGN5IxT6sDY70Kugcc4vSCh%2F7INzBpDEW87wsQbyKVkR7Irf%2BKz5lHUQt92poZ2DbqGUfzFT29ZF%2FetcgLd%2BhUHNcGxu%2BOXlk228%2Btsejqmqr3GU7q47y%2F97dNit0MO9rDD6I%2BLjDtQx79vFGjAZyCDjUIIdBh7IkkUw6Cms9b0pVQ4EB0ptPOvASRQIk9Ah3yYDrkCcAtCdlR1YLCZg99Z%2Bj7a5ZEnlZfBwOCNvhpL0x7YcP3Ts7CJS5%2BqsItQCTiDLfpp7CjUu%2BVDg83NPozmfh9ee9oKo%2BZTaGnXoI%2B8HYNGSbezN4%2F%2BOuPgFBPt1iBnSZlj79Rc5hVs7p704TSTRqK5SsnUKKBZ99HMcEGzqzYdxsIMdRZcFA3ZCNOqMVlh7u7vtCiEu2KEkRx5kN%2FJPH2QkO%2FSkA2X4%2BbUxXrx9DgRH5FXcofbqE92vsRhOB659m7jLgY3ZWG3pVBFj%2BsZ0kAklv08hYzkS493aFzgNOYUmMlwLcJwGOf%2B5z7wirWXZBzgRJFcTqMWOu1ech6CNzyE4QhQ0USZlLlIJwFs4hNPMPCuYEn%2FRT5AaJirimgUZshcJrF28cgdmFVv2Ly2arbDdHZMC74QuSzp1y%2BP8lQXrizCRvOu%2BBjqnARCRdyYH0n8SSog1N%2BbptfdUsHYwYc8nwyDfFKYAp%2FNK38ZpgCNRN25G0K0a6FipVCbvF7ZJs%2F7vMW6DQA09VJonsODt9v9ee8etAnociIT21UTXZ8EXM3Ve%2F18pCNdpeJ0CizeXkMn0OB0ofZsJRik0Uw5B2uRAjxptbHZYQuAfdD4Ze5YmQ67ZsBblEgt4hhLFiz3klbT%2FdtsqHn02JP1BvhIPR3T8&X-Amz-Signature=d600612c2adb6d949e5336f300717947b4437923536bada011278e896a480aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WONADOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHwSplVUtdl5Lb%2FTWxzUG%2FW975%2FPph9Mr%2BMS9jEIKDgICICAVk1%2Bl%2BIOVJC%2BklEbZdS4vK8b1YjjZIpktYagK5sGNKv8DCHgQABoMNjM3NDIzMTgzODA1IgyvgmuJa0QmLLcOZe0q3AMlPugzb9XcuGN5IxT6sDY70Kugcc4vSCh%2F7INzBpDEW87wsQbyKVkR7Irf%2BKz5lHUQt92poZ2DbqGUfzFT29ZF%2FetcgLd%2BhUHNcGxu%2BOXlk228%2Btsejqmqr3GU7q47y%2F97dNit0MO9rDD6I%2BLjDtQx79vFGjAZyCDjUIIdBh7IkkUw6Cms9b0pVQ4EB0ptPOvASRQIk9Ah3yYDrkCcAtCdlR1YLCZg99Z%2Bj7a5ZEnlZfBwOCNvhpL0x7YcP3Ts7CJS5%2BqsItQCTiDLfpp7CjUu%2BVDg83NPozmfh9ee9oKo%2BZTaGnXoI%2B8HYNGSbezN4%2F%2BOuPgFBPt1iBnSZlj79Rc5hVs7p704TSTRqK5SsnUKKBZ99HMcEGzqzYdxsIMdRZcFA3ZCNOqMVlh7u7vtCiEu2KEkRx5kN%2FJPH2QkO%2FSkA2X4%2BbUxXrx9DgRH5FXcofbqE92vsRhOB659m7jLgY3ZWG3pVBFj%2BsZ0kAklv08hYzkS493aFzgNOYUmMlwLcJwGOf%2B5z7wirWXZBzgRJFcTqMWOu1ech6CNzyE4QhQ0USZlLlIJwFs4hNPMPCuYEn%2FRT5AaJirimgUZshcJrF28cgdmFVv2Ly2arbDdHZMC74QuSzp1y%2BP8lQXrizCRvOu%2BBjqnARCRdyYH0n8SSog1N%2BbptfdUsHYwYc8nwyDfFKYAp%2FNK38ZpgCNRN25G0K0a6FipVCbvF7ZJs%2F7vMW6DQA09VJonsODt9v9ee8etAnociIT21UTXZ8EXM3Ve%2F18pCNdpeJ0CizeXkMn0OB0ofZsJRik0Uw5B2uRAjxptbHZYQuAfdD4Ze5YmQ67ZsBblEgt4hhLFiz3klbT%2FdtsqHn02JP1BvhIPR3T8&X-Amz-Signature=af4a726b636ed1fadcc717bcbfeae3928eb6809dadde91b60c0e115771e43e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WONADOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHwSplVUtdl5Lb%2FTWxzUG%2FW975%2FPph9Mr%2BMS9jEIKDgICICAVk1%2Bl%2BIOVJC%2BklEbZdS4vK8b1YjjZIpktYagK5sGNKv8DCHgQABoMNjM3NDIzMTgzODA1IgyvgmuJa0QmLLcOZe0q3AMlPugzb9XcuGN5IxT6sDY70Kugcc4vSCh%2F7INzBpDEW87wsQbyKVkR7Irf%2BKz5lHUQt92poZ2DbqGUfzFT29ZF%2FetcgLd%2BhUHNcGxu%2BOXlk228%2Btsejqmqr3GU7q47y%2F97dNit0MO9rDD6I%2BLjDtQx79vFGjAZyCDjUIIdBh7IkkUw6Cms9b0pVQ4EB0ptPOvASRQIk9Ah3yYDrkCcAtCdlR1YLCZg99Z%2Bj7a5ZEnlZfBwOCNvhpL0x7YcP3Ts7CJS5%2BqsItQCTiDLfpp7CjUu%2BVDg83NPozmfh9ee9oKo%2BZTaGnXoI%2B8HYNGSbezN4%2F%2BOuPgFBPt1iBnSZlj79Rc5hVs7p704TSTRqK5SsnUKKBZ99HMcEGzqzYdxsIMdRZcFA3ZCNOqMVlh7u7vtCiEu2KEkRx5kN%2FJPH2QkO%2FSkA2X4%2BbUxXrx9DgRH5FXcofbqE92vsRhOB659m7jLgY3ZWG3pVBFj%2BsZ0kAklv08hYzkS493aFzgNOYUmMlwLcJwGOf%2B5z7wirWXZBzgRJFcTqMWOu1ech6CNzyE4QhQ0USZlLlIJwFs4hNPMPCuYEn%2FRT5AaJirimgUZshcJrF28cgdmFVv2Ly2arbDdHZMC74QuSzp1y%2BP8lQXrizCRvOu%2BBjqnARCRdyYH0n8SSog1N%2BbptfdUsHYwYc8nwyDfFKYAp%2FNK38ZpgCNRN25G0K0a6FipVCbvF7ZJs%2F7vMW6DQA09VJonsODt9v9ee8etAnociIT21UTXZ8EXM3Ve%2F18pCNdpeJ0CizeXkMn0OB0ofZsJRik0Uw5B2uRAjxptbHZYQuAfdD4Ze5YmQ67ZsBblEgt4hhLFiz3klbT%2FdtsqHn02JP1BvhIPR3T8&X-Amz-Signature=46720e34f95290a1743fdd8fcd1cfb9e9a17d2478e43f089b7a181dbf962a285&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WONADOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHwSplVUtdl5Lb%2FTWxzUG%2FW975%2FPph9Mr%2BMS9jEIKDgICICAVk1%2Bl%2BIOVJC%2BklEbZdS4vK8b1YjjZIpktYagK5sGNKv8DCHgQABoMNjM3NDIzMTgzODA1IgyvgmuJa0QmLLcOZe0q3AMlPugzb9XcuGN5IxT6sDY70Kugcc4vSCh%2F7INzBpDEW87wsQbyKVkR7Irf%2BKz5lHUQt92poZ2DbqGUfzFT29ZF%2FetcgLd%2BhUHNcGxu%2BOXlk228%2Btsejqmqr3GU7q47y%2F97dNit0MO9rDD6I%2BLjDtQx79vFGjAZyCDjUIIdBh7IkkUw6Cms9b0pVQ4EB0ptPOvASRQIk9Ah3yYDrkCcAtCdlR1YLCZg99Z%2Bj7a5ZEnlZfBwOCNvhpL0x7YcP3Ts7CJS5%2BqsItQCTiDLfpp7CjUu%2BVDg83NPozmfh9ee9oKo%2BZTaGnXoI%2B8HYNGSbezN4%2F%2BOuPgFBPt1iBnSZlj79Rc5hVs7p704TSTRqK5SsnUKKBZ99HMcEGzqzYdxsIMdRZcFA3ZCNOqMVlh7u7vtCiEu2KEkRx5kN%2FJPH2QkO%2FSkA2X4%2BbUxXrx9DgRH5FXcofbqE92vsRhOB659m7jLgY3ZWG3pVBFj%2BsZ0kAklv08hYzkS493aFzgNOYUmMlwLcJwGOf%2B5z7wirWXZBzgRJFcTqMWOu1ech6CNzyE4QhQ0USZlLlIJwFs4hNPMPCuYEn%2FRT5AaJirimgUZshcJrF28cgdmFVv2Ly2arbDdHZMC74QuSzp1y%2BP8lQXrizCRvOu%2BBjqnARCRdyYH0n8SSog1N%2BbptfdUsHYwYc8nwyDfFKYAp%2FNK38ZpgCNRN25G0K0a6FipVCbvF7ZJs%2F7vMW6DQA09VJonsODt9v9ee8etAnociIT21UTXZ8EXM3Ve%2F18pCNdpeJ0CizeXkMn0OB0ofZsJRik0Uw5B2uRAjxptbHZYQuAfdD4Ze5YmQ67ZsBblEgt4hhLFiz3klbT%2FdtsqHn02JP1BvhIPR3T8&X-Amz-Signature=c2012633401e0a16b85ebca2726417bf7b7fa210f30d1164ec5605c022fea9b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WONADOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHwSplVUtdl5Lb%2FTWxzUG%2FW975%2FPph9Mr%2BMS9jEIKDgICICAVk1%2Bl%2BIOVJC%2BklEbZdS4vK8b1YjjZIpktYagK5sGNKv8DCHgQABoMNjM3NDIzMTgzODA1IgyvgmuJa0QmLLcOZe0q3AMlPugzb9XcuGN5IxT6sDY70Kugcc4vSCh%2F7INzBpDEW87wsQbyKVkR7Irf%2BKz5lHUQt92poZ2DbqGUfzFT29ZF%2FetcgLd%2BhUHNcGxu%2BOXlk228%2Btsejqmqr3GU7q47y%2F97dNit0MO9rDD6I%2BLjDtQx79vFGjAZyCDjUIIdBh7IkkUw6Cms9b0pVQ4EB0ptPOvASRQIk9Ah3yYDrkCcAtCdlR1YLCZg99Z%2Bj7a5ZEnlZfBwOCNvhpL0x7YcP3Ts7CJS5%2BqsItQCTiDLfpp7CjUu%2BVDg83NPozmfh9ee9oKo%2BZTaGnXoI%2B8HYNGSbezN4%2F%2BOuPgFBPt1iBnSZlj79Rc5hVs7p704TSTRqK5SsnUKKBZ99HMcEGzqzYdxsIMdRZcFA3ZCNOqMVlh7u7vtCiEu2KEkRx5kN%2FJPH2QkO%2FSkA2X4%2BbUxXrx9DgRH5FXcofbqE92vsRhOB659m7jLgY3ZWG3pVBFj%2BsZ0kAklv08hYzkS493aFzgNOYUmMlwLcJwGOf%2B5z7wirWXZBzgRJFcTqMWOu1ech6CNzyE4QhQ0USZlLlIJwFs4hNPMPCuYEn%2FRT5AaJirimgUZshcJrF28cgdmFVv2Ly2arbDdHZMC74QuSzp1y%2BP8lQXrizCRvOu%2BBjqnARCRdyYH0n8SSog1N%2BbptfdUsHYwYc8nwyDfFKYAp%2FNK38ZpgCNRN25G0K0a6FipVCbvF7ZJs%2F7vMW6DQA09VJonsODt9v9ee8etAnociIT21UTXZ8EXM3Ve%2F18pCNdpeJ0CizeXkMn0OB0ofZsJRik0Uw5B2uRAjxptbHZYQuAfdD4Ze5YmQ67ZsBblEgt4hhLFiz3klbT%2FdtsqHn02JP1BvhIPR3T8&X-Amz-Signature=70b0c50ceddd8677f4ef5f703957a8c85a8038573105ac91e4b95b9ffed9edea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WONADOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHwSplVUtdl5Lb%2FTWxzUG%2FW975%2FPph9Mr%2BMS9jEIKDgICICAVk1%2Bl%2BIOVJC%2BklEbZdS4vK8b1YjjZIpktYagK5sGNKv8DCHgQABoMNjM3NDIzMTgzODA1IgyvgmuJa0QmLLcOZe0q3AMlPugzb9XcuGN5IxT6sDY70Kugcc4vSCh%2F7INzBpDEW87wsQbyKVkR7Irf%2BKz5lHUQt92poZ2DbqGUfzFT29ZF%2FetcgLd%2BhUHNcGxu%2BOXlk228%2Btsejqmqr3GU7q47y%2F97dNit0MO9rDD6I%2BLjDtQx79vFGjAZyCDjUIIdBh7IkkUw6Cms9b0pVQ4EB0ptPOvASRQIk9Ah3yYDrkCcAtCdlR1YLCZg99Z%2Bj7a5ZEnlZfBwOCNvhpL0x7YcP3Ts7CJS5%2BqsItQCTiDLfpp7CjUu%2BVDg83NPozmfh9ee9oKo%2BZTaGnXoI%2B8HYNGSbezN4%2F%2BOuPgFBPt1iBnSZlj79Rc5hVs7p704TSTRqK5SsnUKKBZ99HMcEGzqzYdxsIMdRZcFA3ZCNOqMVlh7u7vtCiEu2KEkRx5kN%2FJPH2QkO%2FSkA2X4%2BbUxXrx9DgRH5FXcofbqE92vsRhOB659m7jLgY3ZWG3pVBFj%2BsZ0kAklv08hYzkS493aFzgNOYUmMlwLcJwGOf%2B5z7wirWXZBzgRJFcTqMWOu1ech6CNzyE4QhQ0USZlLlIJwFs4hNPMPCuYEn%2FRT5AaJirimgUZshcJrF28cgdmFVv2Ly2arbDdHZMC74QuSzp1y%2BP8lQXrizCRvOu%2BBjqnARCRdyYH0n8SSog1N%2BbptfdUsHYwYc8nwyDfFKYAp%2FNK38ZpgCNRN25G0K0a6FipVCbvF7ZJs%2F7vMW6DQA09VJonsODt9v9ee8etAnociIT21UTXZ8EXM3Ve%2F18pCNdpeJ0CizeXkMn0OB0ofZsJRik0Uw5B2uRAjxptbHZYQuAfdD4Ze5YmQ67ZsBblEgt4hhLFiz3klbT%2FdtsqHn02JP1BvhIPR3T8&X-Amz-Signature=f986b074c93c04f500e11e476d5bbe1890be4c3df54f6d9b2996ba49893fefdc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WONADOG%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHwSplVUtdl5Lb%2FTWxzUG%2FW975%2FPph9Mr%2BMS9jEIKDgICICAVk1%2Bl%2BIOVJC%2BklEbZdS4vK8b1YjjZIpktYagK5sGNKv8DCHgQABoMNjM3NDIzMTgzODA1IgyvgmuJa0QmLLcOZe0q3AMlPugzb9XcuGN5IxT6sDY70Kugcc4vSCh%2F7INzBpDEW87wsQbyKVkR7Irf%2BKz5lHUQt92poZ2DbqGUfzFT29ZF%2FetcgLd%2BhUHNcGxu%2BOXlk228%2Btsejqmqr3GU7q47y%2F97dNit0MO9rDD6I%2BLjDtQx79vFGjAZyCDjUIIdBh7IkkUw6Cms9b0pVQ4EB0ptPOvASRQIk9Ah3yYDrkCcAtCdlR1YLCZg99Z%2Bj7a5ZEnlZfBwOCNvhpL0x7YcP3Ts7CJS5%2BqsItQCTiDLfpp7CjUu%2BVDg83NPozmfh9ee9oKo%2BZTaGnXoI%2B8HYNGSbezN4%2F%2BOuPgFBPt1iBnSZlj79Rc5hVs7p704TSTRqK5SsnUKKBZ99HMcEGzqzYdxsIMdRZcFA3ZCNOqMVlh7u7vtCiEu2KEkRx5kN%2FJPH2QkO%2FSkA2X4%2BbUxXrx9DgRH5FXcofbqE92vsRhOB659m7jLgY3ZWG3pVBFj%2BsZ0kAklv08hYzkS493aFzgNOYUmMlwLcJwGOf%2B5z7wirWXZBzgRJFcTqMWOu1ech6CNzyE4QhQ0USZlLlIJwFs4hNPMPCuYEn%2FRT5AaJirimgUZshcJrF28cgdmFVv2Ly2arbDdHZMC74QuSzp1y%2BP8lQXrizCRvOu%2BBjqnARCRdyYH0n8SSog1N%2BbptfdUsHYwYc8nwyDfFKYAp%2FNK38ZpgCNRN25G0K0a6FipVCbvF7ZJs%2F7vMW6DQA09VJonsODt9v9ee8etAnociIT21UTXZ8EXM3Ve%2F18pCNdpeJ0CizeXkMn0OB0ofZsJRik0Uw5B2uRAjxptbHZYQuAfdD4Ze5YmQ67ZsBblEgt4hhLFiz3klbT%2FdtsqHn02JP1BvhIPR3T8&X-Amz-Signature=79e75c55f8e130da696e0d1a1bccbcfd0a6a4ea2e1dfd1d6d35c63b84ca15d0a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
