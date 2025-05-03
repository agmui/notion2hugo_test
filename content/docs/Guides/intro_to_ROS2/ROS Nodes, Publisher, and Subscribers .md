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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44DIMOH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC62chbh%2Fyx4ahsuY0d4GcXiA74p4w59iBrcI98YLknRwIgGlIoiELp1NQsYtH6x%2Fj7Y1jRhPEpO8SehL1Y5B%2F3QzEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuNaLJppbJmR6ARvSrcA2%2FzDbFeB%2Bxtut1KZBK75exHCi361kJR0t4xxbHZcLC%2FgdamFEBBjFKBqg7i69rMtxjuO4TroIqof6Iqr%2BpovOYuj3So1mPsJId4ZNm3VPeudqPa08gYmlDYtEqz%2B8tzkEG%2BP%2F5jUHEfkO1ZsUeQxFlgyKCPMHf%2BanuCWomnbYSRQ4vR7kb5sR4xKFJDNxm93DgXIs4pZnlAuTR1QlV6VJpK%2BKW108As19aBss2W1pQSmkt1VdZfTJ8vjUL0QtJFIwXyPpcZENIXzxgbgZHlC8yBUknvqdi1SWKELA5CLXjANkjQZl1rmGxqyWrjdbOhsN4DgSF40z67QQEOtrVXnibpqfSs8Um3BVC8jlFAlW2ZsVm%2B3RtsywyQTdQP2BIoJIruF%2BSzooxPGZxgbDt9pDhBJ9eeapjQvCMjQDvuA1TuNfKuJHYeu4y5hi8HvCo7etLgboM0VrrmFlhwAs4C6Ldord%2BQ1ZG4vfcdPEiMrj1vzr1ATWiBHRfDNrmL9OKtc7CHZ9lk6H2S4TEgzlTrjWY5lZC0dw5looIEjfMzVagr7nQ7rKkVGhKOFzV234U1%2FZROd%2BynoMysxpSSwLU8OxBjfuZ1EfKMLmRIuWB4PPi2yec1z2xr9owGwQDHMPnB2cAGOqUBV%2FARtGs%2FQMiRV8%2FNPZq5YOEmbestS5LGT%2FRV1kPtARXArzMhp%2BVsVjJM2z2mtVC4lsxj76aK4xyJn%2Bl%2Fn6%2B4iCSINQuQlKK1qp6tMb9uvtQhc8V%2FA6jW0Z5vAn3zXCpWAucMg8ToX8LF4bJ7NsDFD73l821Bip1dN3XL7ZWcyTw9Nw%2FtquB%2BUWs89Atd2tMHxmudA9KsuhoF5YLKgunbj76OAnzo&X-Amz-Signature=7b250e5e5cacad029d4baaa9975d866417b6afedf1421ed79953ee59669c6a18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44DIMOH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC62chbh%2Fyx4ahsuY0d4GcXiA74p4w59iBrcI98YLknRwIgGlIoiELp1NQsYtH6x%2Fj7Y1jRhPEpO8SehL1Y5B%2F3QzEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuNaLJppbJmR6ARvSrcA2%2FzDbFeB%2Bxtut1KZBK75exHCi361kJR0t4xxbHZcLC%2FgdamFEBBjFKBqg7i69rMtxjuO4TroIqof6Iqr%2BpovOYuj3So1mPsJId4ZNm3VPeudqPa08gYmlDYtEqz%2B8tzkEG%2BP%2F5jUHEfkO1ZsUeQxFlgyKCPMHf%2BanuCWomnbYSRQ4vR7kb5sR4xKFJDNxm93DgXIs4pZnlAuTR1QlV6VJpK%2BKW108As19aBss2W1pQSmkt1VdZfTJ8vjUL0QtJFIwXyPpcZENIXzxgbgZHlC8yBUknvqdi1SWKELA5CLXjANkjQZl1rmGxqyWrjdbOhsN4DgSF40z67QQEOtrVXnibpqfSs8Um3BVC8jlFAlW2ZsVm%2B3RtsywyQTdQP2BIoJIruF%2BSzooxPGZxgbDt9pDhBJ9eeapjQvCMjQDvuA1TuNfKuJHYeu4y5hi8HvCo7etLgboM0VrrmFlhwAs4C6Ldord%2BQ1ZG4vfcdPEiMrj1vzr1ATWiBHRfDNrmL9OKtc7CHZ9lk6H2S4TEgzlTrjWY5lZC0dw5looIEjfMzVagr7nQ7rKkVGhKOFzV234U1%2FZROd%2BynoMysxpSSwLU8OxBjfuZ1EfKMLmRIuWB4PPi2yec1z2xr9owGwQDHMPnB2cAGOqUBV%2FARtGs%2FQMiRV8%2FNPZq5YOEmbestS5LGT%2FRV1kPtARXArzMhp%2BVsVjJM2z2mtVC4lsxj76aK4xyJn%2Bl%2Fn6%2B4iCSINQuQlKK1qp6tMb9uvtQhc8V%2FA6jW0Z5vAn3zXCpWAucMg8ToX8LF4bJ7NsDFD73l821Bip1dN3XL7ZWcyTw9Nw%2FtquB%2BUWs89Atd2tMHxmudA9KsuhoF5YLKgunbj76OAnzo&X-Amz-Signature=6fb0c6791d4c660f32c6f4f2f602ba9c76b05744d527f434e188025c83fcf34a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44DIMOH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC62chbh%2Fyx4ahsuY0d4GcXiA74p4w59iBrcI98YLknRwIgGlIoiELp1NQsYtH6x%2Fj7Y1jRhPEpO8SehL1Y5B%2F3QzEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuNaLJppbJmR6ARvSrcA2%2FzDbFeB%2Bxtut1KZBK75exHCi361kJR0t4xxbHZcLC%2FgdamFEBBjFKBqg7i69rMtxjuO4TroIqof6Iqr%2BpovOYuj3So1mPsJId4ZNm3VPeudqPa08gYmlDYtEqz%2B8tzkEG%2BP%2F5jUHEfkO1ZsUeQxFlgyKCPMHf%2BanuCWomnbYSRQ4vR7kb5sR4xKFJDNxm93DgXIs4pZnlAuTR1QlV6VJpK%2BKW108As19aBss2W1pQSmkt1VdZfTJ8vjUL0QtJFIwXyPpcZENIXzxgbgZHlC8yBUknvqdi1SWKELA5CLXjANkjQZl1rmGxqyWrjdbOhsN4DgSF40z67QQEOtrVXnibpqfSs8Um3BVC8jlFAlW2ZsVm%2B3RtsywyQTdQP2BIoJIruF%2BSzooxPGZxgbDt9pDhBJ9eeapjQvCMjQDvuA1TuNfKuJHYeu4y5hi8HvCo7etLgboM0VrrmFlhwAs4C6Ldord%2BQ1ZG4vfcdPEiMrj1vzr1ATWiBHRfDNrmL9OKtc7CHZ9lk6H2S4TEgzlTrjWY5lZC0dw5looIEjfMzVagr7nQ7rKkVGhKOFzV234U1%2FZROd%2BynoMysxpSSwLU8OxBjfuZ1EfKMLmRIuWB4PPi2yec1z2xr9owGwQDHMPnB2cAGOqUBV%2FARtGs%2FQMiRV8%2FNPZq5YOEmbestS5LGT%2FRV1kPtARXArzMhp%2BVsVjJM2z2mtVC4lsxj76aK4xyJn%2Bl%2Fn6%2B4iCSINQuQlKK1qp6tMb9uvtQhc8V%2FA6jW0Z5vAn3zXCpWAucMg8ToX8LF4bJ7NsDFD73l821Bip1dN3XL7ZWcyTw9Nw%2FtquB%2BUWs89Atd2tMHxmudA9KsuhoF5YLKgunbj76OAnzo&X-Amz-Signature=8fdd8931550e09dbb21f3a10658e866d30cc8b5735be985c038d17e308250bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44DIMOH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC62chbh%2Fyx4ahsuY0d4GcXiA74p4w59iBrcI98YLknRwIgGlIoiELp1NQsYtH6x%2Fj7Y1jRhPEpO8SehL1Y5B%2F3QzEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuNaLJppbJmR6ARvSrcA2%2FzDbFeB%2Bxtut1KZBK75exHCi361kJR0t4xxbHZcLC%2FgdamFEBBjFKBqg7i69rMtxjuO4TroIqof6Iqr%2BpovOYuj3So1mPsJId4ZNm3VPeudqPa08gYmlDYtEqz%2B8tzkEG%2BP%2F5jUHEfkO1ZsUeQxFlgyKCPMHf%2BanuCWomnbYSRQ4vR7kb5sR4xKFJDNxm93DgXIs4pZnlAuTR1QlV6VJpK%2BKW108As19aBss2W1pQSmkt1VdZfTJ8vjUL0QtJFIwXyPpcZENIXzxgbgZHlC8yBUknvqdi1SWKELA5CLXjANkjQZl1rmGxqyWrjdbOhsN4DgSF40z67QQEOtrVXnibpqfSs8Um3BVC8jlFAlW2ZsVm%2B3RtsywyQTdQP2BIoJIruF%2BSzooxPGZxgbDt9pDhBJ9eeapjQvCMjQDvuA1TuNfKuJHYeu4y5hi8HvCo7etLgboM0VrrmFlhwAs4C6Ldord%2BQ1ZG4vfcdPEiMrj1vzr1ATWiBHRfDNrmL9OKtc7CHZ9lk6H2S4TEgzlTrjWY5lZC0dw5looIEjfMzVagr7nQ7rKkVGhKOFzV234U1%2FZROd%2BynoMysxpSSwLU8OxBjfuZ1EfKMLmRIuWB4PPi2yec1z2xr9owGwQDHMPnB2cAGOqUBV%2FARtGs%2FQMiRV8%2FNPZq5YOEmbestS5LGT%2FRV1kPtARXArzMhp%2BVsVjJM2z2mtVC4lsxj76aK4xyJn%2Bl%2Fn6%2B4iCSINQuQlKK1qp6tMb9uvtQhc8V%2FA6jW0Z5vAn3zXCpWAucMg8ToX8LF4bJ7NsDFD73l821Bip1dN3XL7ZWcyTw9Nw%2FtquB%2BUWs89Atd2tMHxmudA9KsuhoF5YLKgunbj76OAnzo&X-Amz-Signature=98c52c7ce1485fe989ca690801e11909c1c9edce537ad4c384b3721ed03edd79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44DIMOH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC62chbh%2Fyx4ahsuY0d4GcXiA74p4w59iBrcI98YLknRwIgGlIoiELp1NQsYtH6x%2Fj7Y1jRhPEpO8SehL1Y5B%2F3QzEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuNaLJppbJmR6ARvSrcA2%2FzDbFeB%2Bxtut1KZBK75exHCi361kJR0t4xxbHZcLC%2FgdamFEBBjFKBqg7i69rMtxjuO4TroIqof6Iqr%2BpovOYuj3So1mPsJId4ZNm3VPeudqPa08gYmlDYtEqz%2B8tzkEG%2BP%2F5jUHEfkO1ZsUeQxFlgyKCPMHf%2BanuCWomnbYSRQ4vR7kb5sR4xKFJDNxm93DgXIs4pZnlAuTR1QlV6VJpK%2BKW108As19aBss2W1pQSmkt1VdZfTJ8vjUL0QtJFIwXyPpcZENIXzxgbgZHlC8yBUknvqdi1SWKELA5CLXjANkjQZl1rmGxqyWrjdbOhsN4DgSF40z67QQEOtrVXnibpqfSs8Um3BVC8jlFAlW2ZsVm%2B3RtsywyQTdQP2BIoJIruF%2BSzooxPGZxgbDt9pDhBJ9eeapjQvCMjQDvuA1TuNfKuJHYeu4y5hi8HvCo7etLgboM0VrrmFlhwAs4C6Ldord%2BQ1ZG4vfcdPEiMrj1vzr1ATWiBHRfDNrmL9OKtc7CHZ9lk6H2S4TEgzlTrjWY5lZC0dw5looIEjfMzVagr7nQ7rKkVGhKOFzV234U1%2FZROd%2BynoMysxpSSwLU8OxBjfuZ1EfKMLmRIuWB4PPi2yec1z2xr9owGwQDHMPnB2cAGOqUBV%2FARtGs%2FQMiRV8%2FNPZq5YOEmbestS5LGT%2FRV1kPtARXArzMhp%2BVsVjJM2z2mtVC4lsxj76aK4xyJn%2Bl%2Fn6%2B4iCSINQuQlKK1qp6tMb9uvtQhc8V%2FA6jW0Z5vAn3zXCpWAucMg8ToX8LF4bJ7NsDFD73l821Bip1dN3XL7ZWcyTw9Nw%2FtquB%2BUWs89Atd2tMHxmudA9KsuhoF5YLKgunbj76OAnzo&X-Amz-Signature=0b83fa84047b35eda440a2e3846c63fad9e0b09f3c517eb933efbdb3e3098315&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44DIMOH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC62chbh%2Fyx4ahsuY0d4GcXiA74p4w59iBrcI98YLknRwIgGlIoiELp1NQsYtH6x%2Fj7Y1jRhPEpO8SehL1Y5B%2F3QzEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuNaLJppbJmR6ARvSrcA2%2FzDbFeB%2Bxtut1KZBK75exHCi361kJR0t4xxbHZcLC%2FgdamFEBBjFKBqg7i69rMtxjuO4TroIqof6Iqr%2BpovOYuj3So1mPsJId4ZNm3VPeudqPa08gYmlDYtEqz%2B8tzkEG%2BP%2F5jUHEfkO1ZsUeQxFlgyKCPMHf%2BanuCWomnbYSRQ4vR7kb5sR4xKFJDNxm93DgXIs4pZnlAuTR1QlV6VJpK%2BKW108As19aBss2W1pQSmkt1VdZfTJ8vjUL0QtJFIwXyPpcZENIXzxgbgZHlC8yBUknvqdi1SWKELA5CLXjANkjQZl1rmGxqyWrjdbOhsN4DgSF40z67QQEOtrVXnibpqfSs8Um3BVC8jlFAlW2ZsVm%2B3RtsywyQTdQP2BIoJIruF%2BSzooxPGZxgbDt9pDhBJ9eeapjQvCMjQDvuA1TuNfKuJHYeu4y5hi8HvCo7etLgboM0VrrmFlhwAs4C6Ldord%2BQ1ZG4vfcdPEiMrj1vzr1ATWiBHRfDNrmL9OKtc7CHZ9lk6H2S4TEgzlTrjWY5lZC0dw5looIEjfMzVagr7nQ7rKkVGhKOFzV234U1%2FZROd%2BynoMysxpSSwLU8OxBjfuZ1EfKMLmRIuWB4PPi2yec1z2xr9owGwQDHMPnB2cAGOqUBV%2FARtGs%2FQMiRV8%2FNPZq5YOEmbestS5LGT%2FRV1kPtARXArzMhp%2BVsVjJM2z2mtVC4lsxj76aK4xyJn%2Bl%2Fn6%2B4iCSINQuQlKK1qp6tMb9uvtQhc8V%2FA6jW0Z5vAn3zXCpWAucMg8ToX8LF4bJ7NsDFD73l821Bip1dN3XL7ZWcyTw9Nw%2FtquB%2BUWs89Atd2tMHxmudA9KsuhoF5YLKgunbj76OAnzo&X-Amz-Signature=bc7a97a5c7515377980aa9c5155e260965aea5c34b9661aea336c4c91a00f649&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44DIMOH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC62chbh%2Fyx4ahsuY0d4GcXiA74p4w59iBrcI98YLknRwIgGlIoiELp1NQsYtH6x%2Fj7Y1jRhPEpO8SehL1Y5B%2F3QzEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuNaLJppbJmR6ARvSrcA2%2FzDbFeB%2Bxtut1KZBK75exHCi361kJR0t4xxbHZcLC%2FgdamFEBBjFKBqg7i69rMtxjuO4TroIqof6Iqr%2BpovOYuj3So1mPsJId4ZNm3VPeudqPa08gYmlDYtEqz%2B8tzkEG%2BP%2F5jUHEfkO1ZsUeQxFlgyKCPMHf%2BanuCWomnbYSRQ4vR7kb5sR4xKFJDNxm93DgXIs4pZnlAuTR1QlV6VJpK%2BKW108As19aBss2W1pQSmkt1VdZfTJ8vjUL0QtJFIwXyPpcZENIXzxgbgZHlC8yBUknvqdi1SWKELA5CLXjANkjQZl1rmGxqyWrjdbOhsN4DgSF40z67QQEOtrVXnibpqfSs8Um3BVC8jlFAlW2ZsVm%2B3RtsywyQTdQP2BIoJIruF%2BSzooxPGZxgbDt9pDhBJ9eeapjQvCMjQDvuA1TuNfKuJHYeu4y5hi8HvCo7etLgboM0VrrmFlhwAs4C6Ldord%2BQ1ZG4vfcdPEiMrj1vzr1ATWiBHRfDNrmL9OKtc7CHZ9lk6H2S4TEgzlTrjWY5lZC0dw5looIEjfMzVagr7nQ7rKkVGhKOFzV234U1%2FZROd%2BynoMysxpSSwLU8OxBjfuZ1EfKMLmRIuWB4PPi2yec1z2xr9owGwQDHMPnB2cAGOqUBV%2FARtGs%2FQMiRV8%2FNPZq5YOEmbestS5LGT%2FRV1kPtARXArzMhp%2BVsVjJM2z2mtVC4lsxj76aK4xyJn%2Bl%2Fn6%2B4iCSINQuQlKK1qp6tMb9uvtQhc8V%2FA6jW0Z5vAn3zXCpWAucMg8ToX8LF4bJ7NsDFD73l821Bip1dN3XL7ZWcyTw9Nw%2FtquB%2BUWs89Atd2tMHxmudA9KsuhoF5YLKgunbj76OAnzo&X-Amz-Signature=5bb577f27d2b374afe97359c779e29d083918a00c264728335cd93dd2209ad5b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U44DIMOH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC62chbh%2Fyx4ahsuY0d4GcXiA74p4w59iBrcI98YLknRwIgGlIoiELp1NQsYtH6x%2Fj7Y1jRhPEpO8SehL1Y5B%2F3QzEqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEuNaLJppbJmR6ARvSrcA2%2FzDbFeB%2Bxtut1KZBK75exHCi361kJR0t4xxbHZcLC%2FgdamFEBBjFKBqg7i69rMtxjuO4TroIqof6Iqr%2BpovOYuj3So1mPsJId4ZNm3VPeudqPa08gYmlDYtEqz%2B8tzkEG%2BP%2F5jUHEfkO1ZsUeQxFlgyKCPMHf%2BanuCWomnbYSRQ4vR7kb5sR4xKFJDNxm93DgXIs4pZnlAuTR1QlV6VJpK%2BKW108As19aBss2W1pQSmkt1VdZfTJ8vjUL0QtJFIwXyPpcZENIXzxgbgZHlC8yBUknvqdi1SWKELA5CLXjANkjQZl1rmGxqyWrjdbOhsN4DgSF40z67QQEOtrVXnibpqfSs8Um3BVC8jlFAlW2ZsVm%2B3RtsywyQTdQP2BIoJIruF%2BSzooxPGZxgbDt9pDhBJ9eeapjQvCMjQDvuA1TuNfKuJHYeu4y5hi8HvCo7etLgboM0VrrmFlhwAs4C6Ldord%2BQ1ZG4vfcdPEiMrj1vzr1ATWiBHRfDNrmL9OKtc7CHZ9lk6H2S4TEgzlTrjWY5lZC0dw5looIEjfMzVagr7nQ7rKkVGhKOFzV234U1%2FZROd%2BynoMysxpSSwLU8OxBjfuZ1EfKMLmRIuWB4PPi2yec1z2xr9owGwQDHMPnB2cAGOqUBV%2FARtGs%2FQMiRV8%2FNPZq5YOEmbestS5LGT%2FRV1kPtARXArzMhp%2BVsVjJM2z2mtVC4lsxj76aK4xyJn%2Bl%2Fn6%2B4iCSINQuQlKK1qp6tMb9uvtQhc8V%2FA6jW0Z5vAn3zXCpWAucMg8ToX8LF4bJ7NsDFD73l821Bip1dN3XL7ZWcyTw9Nw%2FtquB%2BUWs89Atd2tMHxmudA9KsuhoF5YLKgunbj76OAnzo&X-Amz-Signature=c014bc890d5282f458a38b09581b5785a8c1bce9ecac01931920839842e3c51c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
