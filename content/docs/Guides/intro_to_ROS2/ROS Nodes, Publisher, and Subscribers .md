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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=5888042643c1ca1aa28bf6cf95812ef486c9904274349ba9ca75c1cc3369c89b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=8dc94f6d85c5217982aed0835dfdd53c40490ed2358dbed1f5931d451b8912b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=46d79002a61868a65360dc37ae6bbe37c37b0c90231578098facf90482babbc5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=bbefe9da2518b84f01887f90594de106db21baa6cdba92e11dc6a13f9be0ed55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=3feefa15349f37baf16875d89d2e0940aa18622ba39f320ff1f6f267d15096bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=ac6eb1f8127591b157e54c362d691d798c7d78b97cb56da3b9aee43a45f4f46b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=269c4e3bada3e417719fede45fa5fdf68842f60e0c636fd5f3f1dfdc2c663f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCD3BEKP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T031145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2B7vHemnqxYfv3QQ3FA2RWr2%2FHLsaCkIploqIEboQUuAiEAyzmXGObMbifkjK57USOy8XCChw6kw%2B5cVoBhclvsvBEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE81DsMUOf%2FbX53V7yrcA%2FF7QZlb5mjtOUQByrVhF3GZzPARaGtsuiSNUhWCQOwZLtCthEXguDi5AztXtlwwWOU47W240WosWXy%2FIRogT2700%2Btr%2BbvOFdu3eFj2dkMqWH11VcXvQsyIONCta4Fpr%2BDZPe3KCkklEZ%2FVlszGQ50gZG3U0Ulht7L4wxS%2Bsp699y%2FsXsif9dSSmFZwFUM3eRvlYbk9yI7ju%2BtEGJMxKn7SpAKMhNgJycmcmus%2Bk75E4Z5W8WSkuYIMzyjbx0m5XWHevpSvDVq5N0pDU0frQ08uG5v9qZWSKF1P1xupna5407QIqV4HmKT6eeclLf3w7T3j%2FlI1rxW6LKabbjDnrh4sA41IjEE8GvK97f29%2FTZBir%2BTjvr8qDB9hddF%2F26sfxa3lZnoP5B1rE9A3EriaSJ%2FCMIaDFyNGdAXacKDtdDX8aiPc2gV8pFhVkLYK6MGIpinwDHs0%2FA3oQW1NJjLHorw1Ce5rqwwDPoi0aRZdK8n7QsI5EbVfSUW5ge5MnzgCa4J%2FvpIy3Tl27sZ3WRyDEIpXCkyPa9iUTEAXZlN8qSiMmAoYBRLIlqDlJwUe5%2BOgnLQoD8XVFwQDDpHXuSHCnhZuPHV81vHekUKy%2Fvd%2FoQWxFJtzzIKurbr2MW2MNHur70GOqUBuAybb9qaKftsnexRpVv%2F9U3yZC2QkKtHNGShUOgBmnseMoUtgRyEqIlenjJZ%2FlfyoQoOI8R7Y6425iOwFYaZQiSIJoHlw7TRExg7ulMlvwSl7IINjSatgRnbwQ54Vw8adsxwSw2AzctWFbif0sGHYEXwx74nR%2BN0bEGw42SDbAEPkYJxKb2jBvEsHpEMoV3q34t5GqhNf4Ok8Osj%2BnnhMnMPcTA3&X-Amz-Signature=1e98ea2753e4eac9c11ccae668cfad3920d9a44138a193312755ad4db4d46c18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
