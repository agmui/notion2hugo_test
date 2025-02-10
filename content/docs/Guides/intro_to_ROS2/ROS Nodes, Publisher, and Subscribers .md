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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXNMJ6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU34OZKQPmdQOKgC%2FBVZKaqcqTRje63iTvtETEew8cQIgNY4p1R1jgN%2BPx2B8u0K1ry8U5ifXXmQCoUG1VYQ65a8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERQJH8h8UTvrm8lAyrcA6Q8N%2B0n3L6med1Syl12QLiK0JuzmO4WoTXhEMHcl6SrfsXgSUyTxwYuFIcam7EjLfjFv1etP9xD9wt9gk2vXguKxAWFc3OLbNLt92LYDlNymDXPMdqbiSXnj%2FLbG2zAyvhuoIw65VRZO5fbyuyfymQfm4SWvhDadYQVFA4EaotzJNz3YWa%2FoikE4%2FCkKs1P%2F8%2BOqA0pbaIHvoztFXLwAVt8PhZzIAnyaXKYh7IrITQV04NLiZQva4cUyXlg3oYIj%2FON7S3tAoDTVvVdsJxos%2BZb1dhkXHVEAC6unRBKPWbMLOJ%2BOH3pQUWAL7T4rmUsP%2Bt5cs57lr9d8Cf62JCZvUJyzRRO3V%2BodLtptBFMdhJSZRcxXQwUW2FMGMjnZpaZrUe0CCDpWiwpWYxGCKfT9sytYHw7dJk7ndN0DIqRAe2vJ9gkp4ZjPJIQClmxjqJQv5bWXCn7S8Ebx8jRhustb1I6m3VzlTPOJ%2BE7kjDUNA%2FePMyUQHZgtoPv4gcZnqvbBJKp%2BtPWiYpcImCLdvjmarVwvAGar8ANQxU7DHODjutrivhqe0fm8EB7Gk9M5bidN%2FJDlpIOW%2FEaFdBepw%2BroqKPtQygsPfX4LwLOFy3iFan6i8uPpT9fD3y1k8QMOebpb0GOqUBiuhzPVSxwrlA1HDXi6oVYVznqUJ917Tr473GevGiFclL70E6hVlAY4CLBmE1puGzeJU7mSobimGf3J7bLLMfPodyrYuymy5xHqNw3oWH23cABhpdJgHQ4cxPlNHPhmuM1liQVby55BZHulVrg7whW63xRNfqhVdhIS2AXX6Lu1kJ5ItC5NvF7lJgqPuLRBjr%2B80meep4iEqecjZRONukxWeouXUr&X-Amz-Signature=1b319ae15b91b10287f453641b41c7db3b7086f7337268e9277ad33ff69b1669&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXNMJ6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU34OZKQPmdQOKgC%2FBVZKaqcqTRje63iTvtETEew8cQIgNY4p1R1jgN%2BPx2B8u0K1ry8U5ifXXmQCoUG1VYQ65a8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERQJH8h8UTvrm8lAyrcA6Q8N%2B0n3L6med1Syl12QLiK0JuzmO4WoTXhEMHcl6SrfsXgSUyTxwYuFIcam7EjLfjFv1etP9xD9wt9gk2vXguKxAWFc3OLbNLt92LYDlNymDXPMdqbiSXnj%2FLbG2zAyvhuoIw65VRZO5fbyuyfymQfm4SWvhDadYQVFA4EaotzJNz3YWa%2FoikE4%2FCkKs1P%2F8%2BOqA0pbaIHvoztFXLwAVt8PhZzIAnyaXKYh7IrITQV04NLiZQva4cUyXlg3oYIj%2FON7S3tAoDTVvVdsJxos%2BZb1dhkXHVEAC6unRBKPWbMLOJ%2BOH3pQUWAL7T4rmUsP%2Bt5cs57lr9d8Cf62JCZvUJyzRRO3V%2BodLtptBFMdhJSZRcxXQwUW2FMGMjnZpaZrUe0CCDpWiwpWYxGCKfT9sytYHw7dJk7ndN0DIqRAe2vJ9gkp4ZjPJIQClmxjqJQv5bWXCn7S8Ebx8jRhustb1I6m3VzlTPOJ%2BE7kjDUNA%2FePMyUQHZgtoPv4gcZnqvbBJKp%2BtPWiYpcImCLdvjmarVwvAGar8ANQxU7DHODjutrivhqe0fm8EB7Gk9M5bidN%2FJDlpIOW%2FEaFdBepw%2BroqKPtQygsPfX4LwLOFy3iFan6i8uPpT9fD3y1k8QMOebpb0GOqUBiuhzPVSxwrlA1HDXi6oVYVznqUJ917Tr473GevGiFclL70E6hVlAY4CLBmE1puGzeJU7mSobimGf3J7bLLMfPodyrYuymy5xHqNw3oWH23cABhpdJgHQ4cxPlNHPhmuM1liQVby55BZHulVrg7whW63xRNfqhVdhIS2AXX6Lu1kJ5ItC5NvF7lJgqPuLRBjr%2B80meep4iEqecjZRONukxWeouXUr&X-Amz-Signature=5bc9647c46f68d55048c5ab224638ddb7bd3770ca780c32ccbabf6ee43f1b5ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXNMJ6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU34OZKQPmdQOKgC%2FBVZKaqcqTRje63iTvtETEew8cQIgNY4p1R1jgN%2BPx2B8u0K1ry8U5ifXXmQCoUG1VYQ65a8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERQJH8h8UTvrm8lAyrcA6Q8N%2B0n3L6med1Syl12QLiK0JuzmO4WoTXhEMHcl6SrfsXgSUyTxwYuFIcam7EjLfjFv1etP9xD9wt9gk2vXguKxAWFc3OLbNLt92LYDlNymDXPMdqbiSXnj%2FLbG2zAyvhuoIw65VRZO5fbyuyfymQfm4SWvhDadYQVFA4EaotzJNz3YWa%2FoikE4%2FCkKs1P%2F8%2BOqA0pbaIHvoztFXLwAVt8PhZzIAnyaXKYh7IrITQV04NLiZQva4cUyXlg3oYIj%2FON7S3tAoDTVvVdsJxos%2BZb1dhkXHVEAC6unRBKPWbMLOJ%2BOH3pQUWAL7T4rmUsP%2Bt5cs57lr9d8Cf62JCZvUJyzRRO3V%2BodLtptBFMdhJSZRcxXQwUW2FMGMjnZpaZrUe0CCDpWiwpWYxGCKfT9sytYHw7dJk7ndN0DIqRAe2vJ9gkp4ZjPJIQClmxjqJQv5bWXCn7S8Ebx8jRhustb1I6m3VzlTPOJ%2BE7kjDUNA%2FePMyUQHZgtoPv4gcZnqvbBJKp%2BtPWiYpcImCLdvjmarVwvAGar8ANQxU7DHODjutrivhqe0fm8EB7Gk9M5bidN%2FJDlpIOW%2FEaFdBepw%2BroqKPtQygsPfX4LwLOFy3iFan6i8uPpT9fD3y1k8QMOebpb0GOqUBiuhzPVSxwrlA1HDXi6oVYVznqUJ917Tr473GevGiFclL70E6hVlAY4CLBmE1puGzeJU7mSobimGf3J7bLLMfPodyrYuymy5xHqNw3oWH23cABhpdJgHQ4cxPlNHPhmuM1liQVby55BZHulVrg7whW63xRNfqhVdhIS2AXX6Lu1kJ5ItC5NvF7lJgqPuLRBjr%2B80meep4iEqecjZRONukxWeouXUr&X-Amz-Signature=bee96ec5dc4a6d411bbf9ba9a75af5a6ebf0a4296891bdca2c0c34d39373d457&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXNMJ6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU34OZKQPmdQOKgC%2FBVZKaqcqTRje63iTvtETEew8cQIgNY4p1R1jgN%2BPx2B8u0K1ry8U5ifXXmQCoUG1VYQ65a8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERQJH8h8UTvrm8lAyrcA6Q8N%2B0n3L6med1Syl12QLiK0JuzmO4WoTXhEMHcl6SrfsXgSUyTxwYuFIcam7EjLfjFv1etP9xD9wt9gk2vXguKxAWFc3OLbNLt92LYDlNymDXPMdqbiSXnj%2FLbG2zAyvhuoIw65VRZO5fbyuyfymQfm4SWvhDadYQVFA4EaotzJNz3YWa%2FoikE4%2FCkKs1P%2F8%2BOqA0pbaIHvoztFXLwAVt8PhZzIAnyaXKYh7IrITQV04NLiZQva4cUyXlg3oYIj%2FON7S3tAoDTVvVdsJxos%2BZb1dhkXHVEAC6unRBKPWbMLOJ%2BOH3pQUWAL7T4rmUsP%2Bt5cs57lr9d8Cf62JCZvUJyzRRO3V%2BodLtptBFMdhJSZRcxXQwUW2FMGMjnZpaZrUe0CCDpWiwpWYxGCKfT9sytYHw7dJk7ndN0DIqRAe2vJ9gkp4ZjPJIQClmxjqJQv5bWXCn7S8Ebx8jRhustb1I6m3VzlTPOJ%2BE7kjDUNA%2FePMyUQHZgtoPv4gcZnqvbBJKp%2BtPWiYpcImCLdvjmarVwvAGar8ANQxU7DHODjutrivhqe0fm8EB7Gk9M5bidN%2FJDlpIOW%2FEaFdBepw%2BroqKPtQygsPfX4LwLOFy3iFan6i8uPpT9fD3y1k8QMOebpb0GOqUBiuhzPVSxwrlA1HDXi6oVYVznqUJ917Tr473GevGiFclL70E6hVlAY4CLBmE1puGzeJU7mSobimGf3J7bLLMfPodyrYuymy5xHqNw3oWH23cABhpdJgHQ4cxPlNHPhmuM1liQVby55BZHulVrg7whW63xRNfqhVdhIS2AXX6Lu1kJ5ItC5NvF7lJgqPuLRBjr%2B80meep4iEqecjZRONukxWeouXUr&X-Amz-Signature=87a34a63967317c4934c4439c367f9ea35a7c2276fe6143b172d4dfc07f32b27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXNMJ6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU34OZKQPmdQOKgC%2FBVZKaqcqTRje63iTvtETEew8cQIgNY4p1R1jgN%2BPx2B8u0K1ry8U5ifXXmQCoUG1VYQ65a8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERQJH8h8UTvrm8lAyrcA6Q8N%2B0n3L6med1Syl12QLiK0JuzmO4WoTXhEMHcl6SrfsXgSUyTxwYuFIcam7EjLfjFv1etP9xD9wt9gk2vXguKxAWFc3OLbNLt92LYDlNymDXPMdqbiSXnj%2FLbG2zAyvhuoIw65VRZO5fbyuyfymQfm4SWvhDadYQVFA4EaotzJNz3YWa%2FoikE4%2FCkKs1P%2F8%2BOqA0pbaIHvoztFXLwAVt8PhZzIAnyaXKYh7IrITQV04NLiZQva4cUyXlg3oYIj%2FON7S3tAoDTVvVdsJxos%2BZb1dhkXHVEAC6unRBKPWbMLOJ%2BOH3pQUWAL7T4rmUsP%2Bt5cs57lr9d8Cf62JCZvUJyzRRO3V%2BodLtptBFMdhJSZRcxXQwUW2FMGMjnZpaZrUe0CCDpWiwpWYxGCKfT9sytYHw7dJk7ndN0DIqRAe2vJ9gkp4ZjPJIQClmxjqJQv5bWXCn7S8Ebx8jRhustb1I6m3VzlTPOJ%2BE7kjDUNA%2FePMyUQHZgtoPv4gcZnqvbBJKp%2BtPWiYpcImCLdvjmarVwvAGar8ANQxU7DHODjutrivhqe0fm8EB7Gk9M5bidN%2FJDlpIOW%2FEaFdBepw%2BroqKPtQygsPfX4LwLOFy3iFan6i8uPpT9fD3y1k8QMOebpb0GOqUBiuhzPVSxwrlA1HDXi6oVYVznqUJ917Tr473GevGiFclL70E6hVlAY4CLBmE1puGzeJU7mSobimGf3J7bLLMfPodyrYuymy5xHqNw3oWH23cABhpdJgHQ4cxPlNHPhmuM1liQVby55BZHulVrg7whW63xRNfqhVdhIS2AXX6Lu1kJ5ItC5NvF7lJgqPuLRBjr%2B80meep4iEqecjZRONukxWeouXUr&X-Amz-Signature=22d8ff308ddb604d8c4490900aee575e98ef85e875c1cfc10622a47092df5b4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXNMJ6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU34OZKQPmdQOKgC%2FBVZKaqcqTRje63iTvtETEew8cQIgNY4p1R1jgN%2BPx2B8u0K1ry8U5ifXXmQCoUG1VYQ65a8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERQJH8h8UTvrm8lAyrcA6Q8N%2B0n3L6med1Syl12QLiK0JuzmO4WoTXhEMHcl6SrfsXgSUyTxwYuFIcam7EjLfjFv1etP9xD9wt9gk2vXguKxAWFc3OLbNLt92LYDlNymDXPMdqbiSXnj%2FLbG2zAyvhuoIw65VRZO5fbyuyfymQfm4SWvhDadYQVFA4EaotzJNz3YWa%2FoikE4%2FCkKs1P%2F8%2BOqA0pbaIHvoztFXLwAVt8PhZzIAnyaXKYh7IrITQV04NLiZQva4cUyXlg3oYIj%2FON7S3tAoDTVvVdsJxos%2BZb1dhkXHVEAC6unRBKPWbMLOJ%2BOH3pQUWAL7T4rmUsP%2Bt5cs57lr9d8Cf62JCZvUJyzRRO3V%2BodLtptBFMdhJSZRcxXQwUW2FMGMjnZpaZrUe0CCDpWiwpWYxGCKfT9sytYHw7dJk7ndN0DIqRAe2vJ9gkp4ZjPJIQClmxjqJQv5bWXCn7S8Ebx8jRhustb1I6m3VzlTPOJ%2BE7kjDUNA%2FePMyUQHZgtoPv4gcZnqvbBJKp%2BtPWiYpcImCLdvjmarVwvAGar8ANQxU7DHODjutrivhqe0fm8EB7Gk9M5bidN%2FJDlpIOW%2FEaFdBepw%2BroqKPtQygsPfX4LwLOFy3iFan6i8uPpT9fD3y1k8QMOebpb0GOqUBiuhzPVSxwrlA1HDXi6oVYVznqUJ917Tr473GevGiFclL70E6hVlAY4CLBmE1puGzeJU7mSobimGf3J7bLLMfPodyrYuymy5xHqNw3oWH23cABhpdJgHQ4cxPlNHPhmuM1liQVby55BZHulVrg7whW63xRNfqhVdhIS2AXX6Lu1kJ5ItC5NvF7lJgqPuLRBjr%2B80meep4iEqecjZRONukxWeouXUr&X-Amz-Signature=53441423f14f19e2f914a488508feab0f7726af819581e43a710fb7ca929ef34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXNMJ6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU34OZKQPmdQOKgC%2FBVZKaqcqTRje63iTvtETEew8cQIgNY4p1R1jgN%2BPx2B8u0K1ry8U5ifXXmQCoUG1VYQ65a8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERQJH8h8UTvrm8lAyrcA6Q8N%2B0n3L6med1Syl12QLiK0JuzmO4WoTXhEMHcl6SrfsXgSUyTxwYuFIcam7EjLfjFv1etP9xD9wt9gk2vXguKxAWFc3OLbNLt92LYDlNymDXPMdqbiSXnj%2FLbG2zAyvhuoIw65VRZO5fbyuyfymQfm4SWvhDadYQVFA4EaotzJNz3YWa%2FoikE4%2FCkKs1P%2F8%2BOqA0pbaIHvoztFXLwAVt8PhZzIAnyaXKYh7IrITQV04NLiZQva4cUyXlg3oYIj%2FON7S3tAoDTVvVdsJxos%2BZb1dhkXHVEAC6unRBKPWbMLOJ%2BOH3pQUWAL7T4rmUsP%2Bt5cs57lr9d8Cf62JCZvUJyzRRO3V%2BodLtptBFMdhJSZRcxXQwUW2FMGMjnZpaZrUe0CCDpWiwpWYxGCKfT9sytYHw7dJk7ndN0DIqRAe2vJ9gkp4ZjPJIQClmxjqJQv5bWXCn7S8Ebx8jRhustb1I6m3VzlTPOJ%2BE7kjDUNA%2FePMyUQHZgtoPv4gcZnqvbBJKp%2BtPWiYpcImCLdvjmarVwvAGar8ANQxU7DHODjutrivhqe0fm8EB7Gk9M5bidN%2FJDlpIOW%2FEaFdBepw%2BroqKPtQygsPfX4LwLOFy3iFan6i8uPpT9fD3y1k8QMOebpb0GOqUBiuhzPVSxwrlA1HDXi6oVYVznqUJ917Tr473GevGiFclL70E6hVlAY4CLBmE1puGzeJU7mSobimGf3J7bLLMfPodyrYuymy5xHqNw3oWH23cABhpdJgHQ4cxPlNHPhmuM1liQVby55BZHulVrg7whW63xRNfqhVdhIS2AXX6Lu1kJ5ItC5NvF7lJgqPuLRBjr%2B80meep4iEqecjZRONukxWeouXUr&X-Amz-Signature=c5ad9fe595679cf23f1853c8c63519a9565b45aa7b4f8334731eb2bc0efda1d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTXNMJ6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnU34OZKQPmdQOKgC%2FBVZKaqcqTRje63iTvtETEew8cQIgNY4p1R1jgN%2BPx2B8u0K1ry8U5ifXXmQCoUG1VYQ65a8qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDERQJH8h8UTvrm8lAyrcA6Q8N%2B0n3L6med1Syl12QLiK0JuzmO4WoTXhEMHcl6SrfsXgSUyTxwYuFIcam7EjLfjFv1etP9xD9wt9gk2vXguKxAWFc3OLbNLt92LYDlNymDXPMdqbiSXnj%2FLbG2zAyvhuoIw65VRZO5fbyuyfymQfm4SWvhDadYQVFA4EaotzJNz3YWa%2FoikE4%2FCkKs1P%2F8%2BOqA0pbaIHvoztFXLwAVt8PhZzIAnyaXKYh7IrITQV04NLiZQva4cUyXlg3oYIj%2FON7S3tAoDTVvVdsJxos%2BZb1dhkXHVEAC6unRBKPWbMLOJ%2BOH3pQUWAL7T4rmUsP%2Bt5cs57lr9d8Cf62JCZvUJyzRRO3V%2BodLtptBFMdhJSZRcxXQwUW2FMGMjnZpaZrUe0CCDpWiwpWYxGCKfT9sytYHw7dJk7ndN0DIqRAe2vJ9gkp4ZjPJIQClmxjqJQv5bWXCn7S8Ebx8jRhustb1I6m3VzlTPOJ%2BE7kjDUNA%2FePMyUQHZgtoPv4gcZnqvbBJKp%2BtPWiYpcImCLdvjmarVwvAGar8ANQxU7DHODjutrivhqe0fm8EB7Gk9M5bidN%2FJDlpIOW%2FEaFdBepw%2BroqKPtQygsPfX4LwLOFy3iFan6i8uPpT9fD3y1k8QMOebpb0GOqUBiuhzPVSxwrlA1HDXi6oVYVznqUJ917Tr473GevGiFclL70E6hVlAY4CLBmE1puGzeJU7mSobimGf3J7bLLMfPodyrYuymy5xHqNw3oWH23cABhpdJgHQ4cxPlNHPhmuM1liQVby55BZHulVrg7whW63xRNfqhVdhIS2AXX6Lu1kJ5ItC5NvF7lJgqPuLRBjr%2B80meep4iEqecjZRONukxWeouXUr&X-Amz-Signature=4b215b727ecaacfdcd8ae272054831fea6739b74c46b3f166eac0e0e4d2000c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
