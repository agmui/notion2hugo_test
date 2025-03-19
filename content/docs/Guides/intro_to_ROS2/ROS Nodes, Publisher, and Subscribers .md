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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDHDE7K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAH5PP9iz%2B%2FCw85bqjk5AscFmLav9E4icQ7abTP6VFAtAiEAr0GmtkYbrFUvj0to5wnPdLMR6PQBymcUNXfcEbaokKUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHbct%2B1nHM9IvTJzDCrcA8kC%2FQQOLZOD%2FzvO85iT9HQQiKwzDlFADLu5czKRCvGpdqc2KaUokeJU7eW59W17QJHBN9nKWKF7AYoydyngrdeXHlaHFiz5g25h9UAp4yV38HkmTH2zYPD6TTPPD1QOmkzQ42poFrDZ72Aod0%2BGPXA2tBcDR%2BvMO1VvkTdZKrQj0YiDF0wRZOmSpjzsw3P4TPo6sSlHP0muy9rZWXCC482iiiVhg2J6aI%2F7bhGeT9jTGsg19whP4ed%2BzmBFTLPci0Pj3aQBtAQffhsy5a8%2FktU0HCSQJNoxM1uwWYDJz0GvmVbOtkvfKPm%2BpBqAFuJY%2B4po9%2Fv66%2FcGpSV4nKSWX8ShfWT9tOFxGnFMkcYF3ZVMqW04yKWyDT0E4gz%2BQHzN55pNomDH%2FvKXk5q0o2TSWhIXpBpSQRUYr3%2FTgD%2FmLw4pfyh%2BuAqc%2FcMgXWcjbbRqTkr78ffVS6mz4kTVOIkedPEgbZZuPMkCslw99KeLiN2cHAMJT1s2VZ18CoqXYy3zt8L1Glhq%2FxIEjTwZ3n48WU%2FtlA79lLqSsbLIH1bf4vAz%2BkG3MSogJPrgg%2BqWnhsbkaK3zrkDAUx%2FkA0sRV2f%2FT4teqf%2B%2Bc5%2BTT6lPoJjU31yyO9%2F%2FgrBCKBEvXm4MNyx574GOqUBdwm04xrmmVDCK5LMiRpEiopNEolygLG3o84v5yhLUVmdT4C0Bt15j2xOBYUiUsLmzVZ02oSXHs4Q89qwjW9zEgbKzdYU2ooY0H6Nrkn%2F%2FGoSJmq3WrLrUgsqFifROV48e2KRsPFfd6w8wpQO0%2FBFdBMkMFwSgnApMmh6w%2BvwJRteMOGpkA5Qxq8PQ0MoP5lU4pl77JU%2F57KldqnCz1Eb1VJT%2BCqA&X-Amz-Signature=128557e68dfb0aac0c90f7358ed998aa42fe088e0e9a62746615da10ce92c93e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDHDE7K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAH5PP9iz%2B%2FCw85bqjk5AscFmLav9E4icQ7abTP6VFAtAiEAr0GmtkYbrFUvj0to5wnPdLMR6PQBymcUNXfcEbaokKUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHbct%2B1nHM9IvTJzDCrcA8kC%2FQQOLZOD%2FzvO85iT9HQQiKwzDlFADLu5czKRCvGpdqc2KaUokeJU7eW59W17QJHBN9nKWKF7AYoydyngrdeXHlaHFiz5g25h9UAp4yV38HkmTH2zYPD6TTPPD1QOmkzQ42poFrDZ72Aod0%2BGPXA2tBcDR%2BvMO1VvkTdZKrQj0YiDF0wRZOmSpjzsw3P4TPo6sSlHP0muy9rZWXCC482iiiVhg2J6aI%2F7bhGeT9jTGsg19whP4ed%2BzmBFTLPci0Pj3aQBtAQffhsy5a8%2FktU0HCSQJNoxM1uwWYDJz0GvmVbOtkvfKPm%2BpBqAFuJY%2B4po9%2Fv66%2FcGpSV4nKSWX8ShfWT9tOFxGnFMkcYF3ZVMqW04yKWyDT0E4gz%2BQHzN55pNomDH%2FvKXk5q0o2TSWhIXpBpSQRUYr3%2FTgD%2FmLw4pfyh%2BuAqc%2FcMgXWcjbbRqTkr78ffVS6mz4kTVOIkedPEgbZZuPMkCslw99KeLiN2cHAMJT1s2VZ18CoqXYy3zt8L1Glhq%2FxIEjTwZ3n48WU%2FtlA79lLqSsbLIH1bf4vAz%2BkG3MSogJPrgg%2BqWnhsbkaK3zrkDAUx%2FkA0sRV2f%2FT4teqf%2B%2Bc5%2BTT6lPoJjU31yyO9%2F%2FgrBCKBEvXm4MNyx574GOqUBdwm04xrmmVDCK5LMiRpEiopNEolygLG3o84v5yhLUVmdT4C0Bt15j2xOBYUiUsLmzVZ02oSXHs4Q89qwjW9zEgbKzdYU2ooY0H6Nrkn%2F%2FGoSJmq3WrLrUgsqFifROV48e2KRsPFfd6w8wpQO0%2FBFdBMkMFwSgnApMmh6w%2BvwJRteMOGpkA5Qxq8PQ0MoP5lU4pl77JU%2F57KldqnCz1Eb1VJT%2BCqA&X-Amz-Signature=caa5ef53c543125732912b6200e166d40b59e11b58e87ec703c76173d6d56156&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDHDE7K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAH5PP9iz%2B%2FCw85bqjk5AscFmLav9E4icQ7abTP6VFAtAiEAr0GmtkYbrFUvj0to5wnPdLMR6PQBymcUNXfcEbaokKUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHbct%2B1nHM9IvTJzDCrcA8kC%2FQQOLZOD%2FzvO85iT9HQQiKwzDlFADLu5czKRCvGpdqc2KaUokeJU7eW59W17QJHBN9nKWKF7AYoydyngrdeXHlaHFiz5g25h9UAp4yV38HkmTH2zYPD6TTPPD1QOmkzQ42poFrDZ72Aod0%2BGPXA2tBcDR%2BvMO1VvkTdZKrQj0YiDF0wRZOmSpjzsw3P4TPo6sSlHP0muy9rZWXCC482iiiVhg2J6aI%2F7bhGeT9jTGsg19whP4ed%2BzmBFTLPci0Pj3aQBtAQffhsy5a8%2FktU0HCSQJNoxM1uwWYDJz0GvmVbOtkvfKPm%2BpBqAFuJY%2B4po9%2Fv66%2FcGpSV4nKSWX8ShfWT9tOFxGnFMkcYF3ZVMqW04yKWyDT0E4gz%2BQHzN55pNomDH%2FvKXk5q0o2TSWhIXpBpSQRUYr3%2FTgD%2FmLw4pfyh%2BuAqc%2FcMgXWcjbbRqTkr78ffVS6mz4kTVOIkedPEgbZZuPMkCslw99KeLiN2cHAMJT1s2VZ18CoqXYy3zt8L1Glhq%2FxIEjTwZ3n48WU%2FtlA79lLqSsbLIH1bf4vAz%2BkG3MSogJPrgg%2BqWnhsbkaK3zrkDAUx%2FkA0sRV2f%2FT4teqf%2B%2Bc5%2BTT6lPoJjU31yyO9%2F%2FgrBCKBEvXm4MNyx574GOqUBdwm04xrmmVDCK5LMiRpEiopNEolygLG3o84v5yhLUVmdT4C0Bt15j2xOBYUiUsLmzVZ02oSXHs4Q89qwjW9zEgbKzdYU2ooY0H6Nrkn%2F%2FGoSJmq3WrLrUgsqFifROV48e2KRsPFfd6w8wpQO0%2FBFdBMkMFwSgnApMmh6w%2BvwJRteMOGpkA5Qxq8PQ0MoP5lU4pl77JU%2F57KldqnCz1Eb1VJT%2BCqA&X-Amz-Signature=a6e943021b41845b405271e3a05b27296908dac26115736cd4bc4d0224e1eadd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDHDE7K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAH5PP9iz%2B%2FCw85bqjk5AscFmLav9E4icQ7abTP6VFAtAiEAr0GmtkYbrFUvj0to5wnPdLMR6PQBymcUNXfcEbaokKUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHbct%2B1nHM9IvTJzDCrcA8kC%2FQQOLZOD%2FzvO85iT9HQQiKwzDlFADLu5czKRCvGpdqc2KaUokeJU7eW59W17QJHBN9nKWKF7AYoydyngrdeXHlaHFiz5g25h9UAp4yV38HkmTH2zYPD6TTPPD1QOmkzQ42poFrDZ72Aod0%2BGPXA2tBcDR%2BvMO1VvkTdZKrQj0YiDF0wRZOmSpjzsw3P4TPo6sSlHP0muy9rZWXCC482iiiVhg2J6aI%2F7bhGeT9jTGsg19whP4ed%2BzmBFTLPci0Pj3aQBtAQffhsy5a8%2FktU0HCSQJNoxM1uwWYDJz0GvmVbOtkvfKPm%2BpBqAFuJY%2B4po9%2Fv66%2FcGpSV4nKSWX8ShfWT9tOFxGnFMkcYF3ZVMqW04yKWyDT0E4gz%2BQHzN55pNomDH%2FvKXk5q0o2TSWhIXpBpSQRUYr3%2FTgD%2FmLw4pfyh%2BuAqc%2FcMgXWcjbbRqTkr78ffVS6mz4kTVOIkedPEgbZZuPMkCslw99KeLiN2cHAMJT1s2VZ18CoqXYy3zt8L1Glhq%2FxIEjTwZ3n48WU%2FtlA79lLqSsbLIH1bf4vAz%2BkG3MSogJPrgg%2BqWnhsbkaK3zrkDAUx%2FkA0sRV2f%2FT4teqf%2B%2Bc5%2BTT6lPoJjU31yyO9%2F%2FgrBCKBEvXm4MNyx574GOqUBdwm04xrmmVDCK5LMiRpEiopNEolygLG3o84v5yhLUVmdT4C0Bt15j2xOBYUiUsLmzVZ02oSXHs4Q89qwjW9zEgbKzdYU2ooY0H6Nrkn%2F%2FGoSJmq3WrLrUgsqFifROV48e2KRsPFfd6w8wpQO0%2FBFdBMkMFwSgnApMmh6w%2BvwJRteMOGpkA5Qxq8PQ0MoP5lU4pl77JU%2F57KldqnCz1Eb1VJT%2BCqA&X-Amz-Signature=34bda3604f5a93159844fd887682539f78541bc45857e9012d4a61968d1d69c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDHDE7K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAH5PP9iz%2B%2FCw85bqjk5AscFmLav9E4icQ7abTP6VFAtAiEAr0GmtkYbrFUvj0to5wnPdLMR6PQBymcUNXfcEbaokKUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHbct%2B1nHM9IvTJzDCrcA8kC%2FQQOLZOD%2FzvO85iT9HQQiKwzDlFADLu5czKRCvGpdqc2KaUokeJU7eW59W17QJHBN9nKWKF7AYoydyngrdeXHlaHFiz5g25h9UAp4yV38HkmTH2zYPD6TTPPD1QOmkzQ42poFrDZ72Aod0%2BGPXA2tBcDR%2BvMO1VvkTdZKrQj0YiDF0wRZOmSpjzsw3P4TPo6sSlHP0muy9rZWXCC482iiiVhg2J6aI%2F7bhGeT9jTGsg19whP4ed%2BzmBFTLPci0Pj3aQBtAQffhsy5a8%2FktU0HCSQJNoxM1uwWYDJz0GvmVbOtkvfKPm%2BpBqAFuJY%2B4po9%2Fv66%2FcGpSV4nKSWX8ShfWT9tOFxGnFMkcYF3ZVMqW04yKWyDT0E4gz%2BQHzN55pNomDH%2FvKXk5q0o2TSWhIXpBpSQRUYr3%2FTgD%2FmLw4pfyh%2BuAqc%2FcMgXWcjbbRqTkr78ffVS6mz4kTVOIkedPEgbZZuPMkCslw99KeLiN2cHAMJT1s2VZ18CoqXYy3zt8L1Glhq%2FxIEjTwZ3n48WU%2FtlA79lLqSsbLIH1bf4vAz%2BkG3MSogJPrgg%2BqWnhsbkaK3zrkDAUx%2FkA0sRV2f%2FT4teqf%2B%2Bc5%2BTT6lPoJjU31yyO9%2F%2FgrBCKBEvXm4MNyx574GOqUBdwm04xrmmVDCK5LMiRpEiopNEolygLG3o84v5yhLUVmdT4C0Bt15j2xOBYUiUsLmzVZ02oSXHs4Q89qwjW9zEgbKzdYU2ooY0H6Nrkn%2F%2FGoSJmq3WrLrUgsqFifROV48e2KRsPFfd6w8wpQO0%2FBFdBMkMFwSgnApMmh6w%2BvwJRteMOGpkA5Qxq8PQ0MoP5lU4pl77JU%2F57KldqnCz1Eb1VJT%2BCqA&X-Amz-Signature=e61e549b5cef242abc6b994e623a951796316d6fb0bd597f0762da49a24d09f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDHDE7K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAH5PP9iz%2B%2FCw85bqjk5AscFmLav9E4icQ7abTP6VFAtAiEAr0GmtkYbrFUvj0to5wnPdLMR6PQBymcUNXfcEbaokKUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHbct%2B1nHM9IvTJzDCrcA8kC%2FQQOLZOD%2FzvO85iT9HQQiKwzDlFADLu5czKRCvGpdqc2KaUokeJU7eW59W17QJHBN9nKWKF7AYoydyngrdeXHlaHFiz5g25h9UAp4yV38HkmTH2zYPD6TTPPD1QOmkzQ42poFrDZ72Aod0%2BGPXA2tBcDR%2BvMO1VvkTdZKrQj0YiDF0wRZOmSpjzsw3P4TPo6sSlHP0muy9rZWXCC482iiiVhg2J6aI%2F7bhGeT9jTGsg19whP4ed%2BzmBFTLPci0Pj3aQBtAQffhsy5a8%2FktU0HCSQJNoxM1uwWYDJz0GvmVbOtkvfKPm%2BpBqAFuJY%2B4po9%2Fv66%2FcGpSV4nKSWX8ShfWT9tOFxGnFMkcYF3ZVMqW04yKWyDT0E4gz%2BQHzN55pNomDH%2FvKXk5q0o2TSWhIXpBpSQRUYr3%2FTgD%2FmLw4pfyh%2BuAqc%2FcMgXWcjbbRqTkr78ffVS6mz4kTVOIkedPEgbZZuPMkCslw99KeLiN2cHAMJT1s2VZ18CoqXYy3zt8L1Glhq%2FxIEjTwZ3n48WU%2FtlA79lLqSsbLIH1bf4vAz%2BkG3MSogJPrgg%2BqWnhsbkaK3zrkDAUx%2FkA0sRV2f%2FT4teqf%2B%2Bc5%2BTT6lPoJjU31yyO9%2F%2FgrBCKBEvXm4MNyx574GOqUBdwm04xrmmVDCK5LMiRpEiopNEolygLG3o84v5yhLUVmdT4C0Bt15j2xOBYUiUsLmzVZ02oSXHs4Q89qwjW9zEgbKzdYU2ooY0H6Nrkn%2F%2FGoSJmq3WrLrUgsqFifROV48e2KRsPFfd6w8wpQO0%2FBFdBMkMFwSgnApMmh6w%2BvwJRteMOGpkA5Qxq8PQ0MoP5lU4pl77JU%2F57KldqnCz1Eb1VJT%2BCqA&X-Amz-Signature=a63e3b7f9778e69bd572b8fbfe80d9de882f8bec80618d895feeea023b57a8e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDHDE7K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAH5PP9iz%2B%2FCw85bqjk5AscFmLav9E4icQ7abTP6VFAtAiEAr0GmtkYbrFUvj0to5wnPdLMR6PQBymcUNXfcEbaokKUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHbct%2B1nHM9IvTJzDCrcA8kC%2FQQOLZOD%2FzvO85iT9HQQiKwzDlFADLu5czKRCvGpdqc2KaUokeJU7eW59W17QJHBN9nKWKF7AYoydyngrdeXHlaHFiz5g25h9UAp4yV38HkmTH2zYPD6TTPPD1QOmkzQ42poFrDZ72Aod0%2BGPXA2tBcDR%2BvMO1VvkTdZKrQj0YiDF0wRZOmSpjzsw3P4TPo6sSlHP0muy9rZWXCC482iiiVhg2J6aI%2F7bhGeT9jTGsg19whP4ed%2BzmBFTLPci0Pj3aQBtAQffhsy5a8%2FktU0HCSQJNoxM1uwWYDJz0GvmVbOtkvfKPm%2BpBqAFuJY%2B4po9%2Fv66%2FcGpSV4nKSWX8ShfWT9tOFxGnFMkcYF3ZVMqW04yKWyDT0E4gz%2BQHzN55pNomDH%2FvKXk5q0o2TSWhIXpBpSQRUYr3%2FTgD%2FmLw4pfyh%2BuAqc%2FcMgXWcjbbRqTkr78ffVS6mz4kTVOIkedPEgbZZuPMkCslw99KeLiN2cHAMJT1s2VZ18CoqXYy3zt8L1Glhq%2FxIEjTwZ3n48WU%2FtlA79lLqSsbLIH1bf4vAz%2BkG3MSogJPrgg%2BqWnhsbkaK3zrkDAUx%2FkA0sRV2f%2FT4teqf%2B%2Bc5%2BTT6lPoJjU31yyO9%2F%2FgrBCKBEvXm4MNyx574GOqUBdwm04xrmmVDCK5LMiRpEiopNEolygLG3o84v5yhLUVmdT4C0Bt15j2xOBYUiUsLmzVZ02oSXHs4Q89qwjW9zEgbKzdYU2ooY0H6Nrkn%2F%2FGoSJmq3WrLrUgsqFifROV48e2KRsPFfd6w8wpQO0%2FBFdBMkMFwSgnApMmh6w%2BvwJRteMOGpkA5Qxq8PQ0MoP5lU4pl77JU%2F57KldqnCz1Eb1VJT%2BCqA&X-Amz-Signature=ed6ea3554aeae730f925c39eef6f901b32a5c784b3657906b0b06f9356393f55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUDHDE7K%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAH5PP9iz%2B%2FCw85bqjk5AscFmLav9E4icQ7abTP6VFAtAiEAr0GmtkYbrFUvj0to5wnPdLMR6PQBymcUNXfcEbaokKUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDHbct%2B1nHM9IvTJzDCrcA8kC%2FQQOLZOD%2FzvO85iT9HQQiKwzDlFADLu5czKRCvGpdqc2KaUokeJU7eW59W17QJHBN9nKWKF7AYoydyngrdeXHlaHFiz5g25h9UAp4yV38HkmTH2zYPD6TTPPD1QOmkzQ42poFrDZ72Aod0%2BGPXA2tBcDR%2BvMO1VvkTdZKrQj0YiDF0wRZOmSpjzsw3P4TPo6sSlHP0muy9rZWXCC482iiiVhg2J6aI%2F7bhGeT9jTGsg19whP4ed%2BzmBFTLPci0Pj3aQBtAQffhsy5a8%2FktU0HCSQJNoxM1uwWYDJz0GvmVbOtkvfKPm%2BpBqAFuJY%2B4po9%2Fv66%2FcGpSV4nKSWX8ShfWT9tOFxGnFMkcYF3ZVMqW04yKWyDT0E4gz%2BQHzN55pNomDH%2FvKXk5q0o2TSWhIXpBpSQRUYr3%2FTgD%2FmLw4pfyh%2BuAqc%2FcMgXWcjbbRqTkr78ffVS6mz4kTVOIkedPEgbZZuPMkCslw99KeLiN2cHAMJT1s2VZ18CoqXYy3zt8L1Glhq%2FxIEjTwZ3n48WU%2FtlA79lLqSsbLIH1bf4vAz%2BkG3MSogJPrgg%2BqWnhsbkaK3zrkDAUx%2FkA0sRV2f%2FT4teqf%2B%2Bc5%2BTT6lPoJjU31yyO9%2F%2FgrBCKBEvXm4MNyx574GOqUBdwm04xrmmVDCK5LMiRpEiopNEolygLG3o84v5yhLUVmdT4C0Bt15j2xOBYUiUsLmzVZ02oSXHs4Q89qwjW9zEgbKzdYU2ooY0H6Nrkn%2F%2FGoSJmq3WrLrUgsqFifROV48e2KRsPFfd6w8wpQO0%2FBFdBMkMFwSgnApMmh6w%2BvwJRteMOGpkA5Qxq8PQ0MoP5lU4pl77JU%2F57KldqnCz1Eb1VJT%2BCqA&X-Amz-Signature=12f8eeccc6d76889e92902d8b56e2e833c5fe13202a7ae46305745cf32a217b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
