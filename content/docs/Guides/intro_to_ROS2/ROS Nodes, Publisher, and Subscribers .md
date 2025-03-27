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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTO4BR63%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO5EAZlxRLW61QHJvPoe39EHW66OM4Ks3HSGnE2hg4gIgAc8ncC9NEcoSjXSu61YdoTvt1hfBt2uU%2F2AHkotHFcwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLQEw%2FZnu4QWO5G06CrcA8ho54uinDtoenxrGQTz5H2%2BoR%2BqOL%2FeOJIG56sPzOaHpOYSXP1JZOKw3JPu9QehEQnsXEejUSzttQmLJ%2B5nLg2kJoF%2BxlP4LcovJyuZC7flULE8QycFARgdQvRIlpP3UuVT9dMSHWAdTM5egJdVk6bmcK7wQ2PRtwAxyt%2FmA0JHjexG2SSnUpytkHCB38bjFv8E8VlZdcEUlyTf9ncBXFth%2BTbwCAQYgPXA8qnv13llg2rihY1aYMwAuG8JyqTh5ZxI3xSuVJ%2Fs2wJAYuEGOO4qDRo0%2FH5qPj219jjG8rWQ%2FBybOKXaEYUXMmMNkPZxZ2luDU2c5bZodbYfVsIBFrJ5p1rWqZsTK00H5t7%2BYxJDSvFTFWs10LMlPNbxU%2FyE4SchrdhEy5Pchy7HrFpZUadqjkO7cKJ%2FrSe2vkBx66HRUtILXa%2FLXOtihNnwsR3RRxreremOf7IrN9EIkzg0LaMCfNYS23%2BiIDR0b65FY%2BaLNhv%2Fs%2BHvTECfRDOzyUfVYzX7WOgsJ2pCjPIrDJuYNETs6JZtCCH07sZJCccyRhLEK6wIDCq54Fjc5gCfeJ3lXpSg7yodUxyXL2HWbkiL5b%2FUBGVfeKuzVgKi3G6SQqCvv5OEFT2g22P76onFMM6Jk78GOqUBbzl9A0PnXTtwaWa86hGxN2xMzjPZ0fkolO13Pq1noXUk8xbQFdnh4iQkNSqu4sr58yRNX8kht5MVd01JaQzd62hzeUGUHbNLDAtQCmzPlrdC0XZ3oOYN84ZCgSLhtMN6m5fizs9T8w5x%2Bt7N2dOuHqLtYHPz90zE7rpUcRj8FfsjhqXFTVMfIBkx%2BgmLb0wPHP64OOgyWi7FWlITVMJF%2FrAFk41K&X-Amz-Signature=c27376f0078fcd57149502a0dbdc2dda4e45cb20186b025d5706fa6827a18976&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTO4BR63%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO5EAZlxRLW61QHJvPoe39EHW66OM4Ks3HSGnE2hg4gIgAc8ncC9NEcoSjXSu61YdoTvt1hfBt2uU%2F2AHkotHFcwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLQEw%2FZnu4QWO5G06CrcA8ho54uinDtoenxrGQTz5H2%2BoR%2BqOL%2FeOJIG56sPzOaHpOYSXP1JZOKw3JPu9QehEQnsXEejUSzttQmLJ%2B5nLg2kJoF%2BxlP4LcovJyuZC7flULE8QycFARgdQvRIlpP3UuVT9dMSHWAdTM5egJdVk6bmcK7wQ2PRtwAxyt%2FmA0JHjexG2SSnUpytkHCB38bjFv8E8VlZdcEUlyTf9ncBXFth%2BTbwCAQYgPXA8qnv13llg2rihY1aYMwAuG8JyqTh5ZxI3xSuVJ%2Fs2wJAYuEGOO4qDRo0%2FH5qPj219jjG8rWQ%2FBybOKXaEYUXMmMNkPZxZ2luDU2c5bZodbYfVsIBFrJ5p1rWqZsTK00H5t7%2BYxJDSvFTFWs10LMlPNbxU%2FyE4SchrdhEy5Pchy7HrFpZUadqjkO7cKJ%2FrSe2vkBx66HRUtILXa%2FLXOtihNnwsR3RRxreremOf7IrN9EIkzg0LaMCfNYS23%2BiIDR0b65FY%2BaLNhv%2Fs%2BHvTECfRDOzyUfVYzX7WOgsJ2pCjPIrDJuYNETs6JZtCCH07sZJCccyRhLEK6wIDCq54Fjc5gCfeJ3lXpSg7yodUxyXL2HWbkiL5b%2FUBGVfeKuzVgKi3G6SQqCvv5OEFT2g22P76onFMM6Jk78GOqUBbzl9A0PnXTtwaWa86hGxN2xMzjPZ0fkolO13Pq1noXUk8xbQFdnh4iQkNSqu4sr58yRNX8kht5MVd01JaQzd62hzeUGUHbNLDAtQCmzPlrdC0XZ3oOYN84ZCgSLhtMN6m5fizs9T8w5x%2Bt7N2dOuHqLtYHPz90zE7rpUcRj8FfsjhqXFTVMfIBkx%2BgmLb0wPHP64OOgyWi7FWlITVMJF%2FrAFk41K&X-Amz-Signature=6f93d744eb1796c33e7c00b3ab8e098f6d34353d4833217fe9d8260cd8c09d63&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTO4BR63%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO5EAZlxRLW61QHJvPoe39EHW66OM4Ks3HSGnE2hg4gIgAc8ncC9NEcoSjXSu61YdoTvt1hfBt2uU%2F2AHkotHFcwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLQEw%2FZnu4QWO5G06CrcA8ho54uinDtoenxrGQTz5H2%2BoR%2BqOL%2FeOJIG56sPzOaHpOYSXP1JZOKw3JPu9QehEQnsXEejUSzttQmLJ%2B5nLg2kJoF%2BxlP4LcovJyuZC7flULE8QycFARgdQvRIlpP3UuVT9dMSHWAdTM5egJdVk6bmcK7wQ2PRtwAxyt%2FmA0JHjexG2SSnUpytkHCB38bjFv8E8VlZdcEUlyTf9ncBXFth%2BTbwCAQYgPXA8qnv13llg2rihY1aYMwAuG8JyqTh5ZxI3xSuVJ%2Fs2wJAYuEGOO4qDRo0%2FH5qPj219jjG8rWQ%2FBybOKXaEYUXMmMNkPZxZ2luDU2c5bZodbYfVsIBFrJ5p1rWqZsTK00H5t7%2BYxJDSvFTFWs10LMlPNbxU%2FyE4SchrdhEy5Pchy7HrFpZUadqjkO7cKJ%2FrSe2vkBx66HRUtILXa%2FLXOtihNnwsR3RRxreremOf7IrN9EIkzg0LaMCfNYS23%2BiIDR0b65FY%2BaLNhv%2Fs%2BHvTECfRDOzyUfVYzX7WOgsJ2pCjPIrDJuYNETs6JZtCCH07sZJCccyRhLEK6wIDCq54Fjc5gCfeJ3lXpSg7yodUxyXL2HWbkiL5b%2FUBGVfeKuzVgKi3G6SQqCvv5OEFT2g22P76onFMM6Jk78GOqUBbzl9A0PnXTtwaWa86hGxN2xMzjPZ0fkolO13Pq1noXUk8xbQFdnh4iQkNSqu4sr58yRNX8kht5MVd01JaQzd62hzeUGUHbNLDAtQCmzPlrdC0XZ3oOYN84ZCgSLhtMN6m5fizs9T8w5x%2Bt7N2dOuHqLtYHPz90zE7rpUcRj8FfsjhqXFTVMfIBkx%2BgmLb0wPHP64OOgyWi7FWlITVMJF%2FrAFk41K&X-Amz-Signature=aadc9dabb89b6115356c008bfebd5ec97af892243c08a29b71a44abda29766e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTO4BR63%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO5EAZlxRLW61QHJvPoe39EHW66OM4Ks3HSGnE2hg4gIgAc8ncC9NEcoSjXSu61YdoTvt1hfBt2uU%2F2AHkotHFcwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLQEw%2FZnu4QWO5G06CrcA8ho54uinDtoenxrGQTz5H2%2BoR%2BqOL%2FeOJIG56sPzOaHpOYSXP1JZOKw3JPu9QehEQnsXEejUSzttQmLJ%2B5nLg2kJoF%2BxlP4LcovJyuZC7flULE8QycFARgdQvRIlpP3UuVT9dMSHWAdTM5egJdVk6bmcK7wQ2PRtwAxyt%2FmA0JHjexG2SSnUpytkHCB38bjFv8E8VlZdcEUlyTf9ncBXFth%2BTbwCAQYgPXA8qnv13llg2rihY1aYMwAuG8JyqTh5ZxI3xSuVJ%2Fs2wJAYuEGOO4qDRo0%2FH5qPj219jjG8rWQ%2FBybOKXaEYUXMmMNkPZxZ2luDU2c5bZodbYfVsIBFrJ5p1rWqZsTK00H5t7%2BYxJDSvFTFWs10LMlPNbxU%2FyE4SchrdhEy5Pchy7HrFpZUadqjkO7cKJ%2FrSe2vkBx66HRUtILXa%2FLXOtihNnwsR3RRxreremOf7IrN9EIkzg0LaMCfNYS23%2BiIDR0b65FY%2BaLNhv%2Fs%2BHvTECfRDOzyUfVYzX7WOgsJ2pCjPIrDJuYNETs6JZtCCH07sZJCccyRhLEK6wIDCq54Fjc5gCfeJ3lXpSg7yodUxyXL2HWbkiL5b%2FUBGVfeKuzVgKi3G6SQqCvv5OEFT2g22P76onFMM6Jk78GOqUBbzl9A0PnXTtwaWa86hGxN2xMzjPZ0fkolO13Pq1noXUk8xbQFdnh4iQkNSqu4sr58yRNX8kht5MVd01JaQzd62hzeUGUHbNLDAtQCmzPlrdC0XZ3oOYN84ZCgSLhtMN6m5fizs9T8w5x%2Bt7N2dOuHqLtYHPz90zE7rpUcRj8FfsjhqXFTVMfIBkx%2BgmLb0wPHP64OOgyWi7FWlITVMJF%2FrAFk41K&X-Amz-Signature=8d3132a3b971e7f7326ac2013d56c8e9dfdff203151d41ef74c558a056dfb376&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTO4BR63%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO5EAZlxRLW61QHJvPoe39EHW66OM4Ks3HSGnE2hg4gIgAc8ncC9NEcoSjXSu61YdoTvt1hfBt2uU%2F2AHkotHFcwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLQEw%2FZnu4QWO5G06CrcA8ho54uinDtoenxrGQTz5H2%2BoR%2BqOL%2FeOJIG56sPzOaHpOYSXP1JZOKw3JPu9QehEQnsXEejUSzttQmLJ%2B5nLg2kJoF%2BxlP4LcovJyuZC7flULE8QycFARgdQvRIlpP3UuVT9dMSHWAdTM5egJdVk6bmcK7wQ2PRtwAxyt%2FmA0JHjexG2SSnUpytkHCB38bjFv8E8VlZdcEUlyTf9ncBXFth%2BTbwCAQYgPXA8qnv13llg2rihY1aYMwAuG8JyqTh5ZxI3xSuVJ%2Fs2wJAYuEGOO4qDRo0%2FH5qPj219jjG8rWQ%2FBybOKXaEYUXMmMNkPZxZ2luDU2c5bZodbYfVsIBFrJ5p1rWqZsTK00H5t7%2BYxJDSvFTFWs10LMlPNbxU%2FyE4SchrdhEy5Pchy7HrFpZUadqjkO7cKJ%2FrSe2vkBx66HRUtILXa%2FLXOtihNnwsR3RRxreremOf7IrN9EIkzg0LaMCfNYS23%2BiIDR0b65FY%2BaLNhv%2Fs%2BHvTECfRDOzyUfVYzX7WOgsJ2pCjPIrDJuYNETs6JZtCCH07sZJCccyRhLEK6wIDCq54Fjc5gCfeJ3lXpSg7yodUxyXL2HWbkiL5b%2FUBGVfeKuzVgKi3G6SQqCvv5OEFT2g22P76onFMM6Jk78GOqUBbzl9A0PnXTtwaWa86hGxN2xMzjPZ0fkolO13Pq1noXUk8xbQFdnh4iQkNSqu4sr58yRNX8kht5MVd01JaQzd62hzeUGUHbNLDAtQCmzPlrdC0XZ3oOYN84ZCgSLhtMN6m5fizs9T8w5x%2Bt7N2dOuHqLtYHPz90zE7rpUcRj8FfsjhqXFTVMfIBkx%2BgmLb0wPHP64OOgyWi7FWlITVMJF%2FrAFk41K&X-Amz-Signature=f8ed59a8e3ce2b46f2d7209ec90c3513fd9ac6e306a6990f26ceb55a312a28ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTO4BR63%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO5EAZlxRLW61QHJvPoe39EHW66OM4Ks3HSGnE2hg4gIgAc8ncC9NEcoSjXSu61YdoTvt1hfBt2uU%2F2AHkotHFcwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLQEw%2FZnu4QWO5G06CrcA8ho54uinDtoenxrGQTz5H2%2BoR%2BqOL%2FeOJIG56sPzOaHpOYSXP1JZOKw3JPu9QehEQnsXEejUSzttQmLJ%2B5nLg2kJoF%2BxlP4LcovJyuZC7flULE8QycFARgdQvRIlpP3UuVT9dMSHWAdTM5egJdVk6bmcK7wQ2PRtwAxyt%2FmA0JHjexG2SSnUpytkHCB38bjFv8E8VlZdcEUlyTf9ncBXFth%2BTbwCAQYgPXA8qnv13llg2rihY1aYMwAuG8JyqTh5ZxI3xSuVJ%2Fs2wJAYuEGOO4qDRo0%2FH5qPj219jjG8rWQ%2FBybOKXaEYUXMmMNkPZxZ2luDU2c5bZodbYfVsIBFrJ5p1rWqZsTK00H5t7%2BYxJDSvFTFWs10LMlPNbxU%2FyE4SchrdhEy5Pchy7HrFpZUadqjkO7cKJ%2FrSe2vkBx66HRUtILXa%2FLXOtihNnwsR3RRxreremOf7IrN9EIkzg0LaMCfNYS23%2BiIDR0b65FY%2BaLNhv%2Fs%2BHvTECfRDOzyUfVYzX7WOgsJ2pCjPIrDJuYNETs6JZtCCH07sZJCccyRhLEK6wIDCq54Fjc5gCfeJ3lXpSg7yodUxyXL2HWbkiL5b%2FUBGVfeKuzVgKi3G6SQqCvv5OEFT2g22P76onFMM6Jk78GOqUBbzl9A0PnXTtwaWa86hGxN2xMzjPZ0fkolO13Pq1noXUk8xbQFdnh4iQkNSqu4sr58yRNX8kht5MVd01JaQzd62hzeUGUHbNLDAtQCmzPlrdC0XZ3oOYN84ZCgSLhtMN6m5fizs9T8w5x%2Bt7N2dOuHqLtYHPz90zE7rpUcRj8FfsjhqXFTVMfIBkx%2BgmLb0wPHP64OOgyWi7FWlITVMJF%2FrAFk41K&X-Amz-Signature=4d2438caaa834c9c18fd80d199f9b76ccf69dd6a4a4c9401a14491a43aa9dea5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTO4BR63%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO5EAZlxRLW61QHJvPoe39EHW66OM4Ks3HSGnE2hg4gIgAc8ncC9NEcoSjXSu61YdoTvt1hfBt2uU%2F2AHkotHFcwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLQEw%2FZnu4QWO5G06CrcA8ho54uinDtoenxrGQTz5H2%2BoR%2BqOL%2FeOJIG56sPzOaHpOYSXP1JZOKw3JPu9QehEQnsXEejUSzttQmLJ%2B5nLg2kJoF%2BxlP4LcovJyuZC7flULE8QycFARgdQvRIlpP3UuVT9dMSHWAdTM5egJdVk6bmcK7wQ2PRtwAxyt%2FmA0JHjexG2SSnUpytkHCB38bjFv8E8VlZdcEUlyTf9ncBXFth%2BTbwCAQYgPXA8qnv13llg2rihY1aYMwAuG8JyqTh5ZxI3xSuVJ%2Fs2wJAYuEGOO4qDRo0%2FH5qPj219jjG8rWQ%2FBybOKXaEYUXMmMNkPZxZ2luDU2c5bZodbYfVsIBFrJ5p1rWqZsTK00H5t7%2BYxJDSvFTFWs10LMlPNbxU%2FyE4SchrdhEy5Pchy7HrFpZUadqjkO7cKJ%2FrSe2vkBx66HRUtILXa%2FLXOtihNnwsR3RRxreremOf7IrN9EIkzg0LaMCfNYS23%2BiIDR0b65FY%2BaLNhv%2Fs%2BHvTECfRDOzyUfVYzX7WOgsJ2pCjPIrDJuYNETs6JZtCCH07sZJCccyRhLEK6wIDCq54Fjc5gCfeJ3lXpSg7yodUxyXL2HWbkiL5b%2FUBGVfeKuzVgKi3G6SQqCvv5OEFT2g22P76onFMM6Jk78GOqUBbzl9A0PnXTtwaWa86hGxN2xMzjPZ0fkolO13Pq1noXUk8xbQFdnh4iQkNSqu4sr58yRNX8kht5MVd01JaQzd62hzeUGUHbNLDAtQCmzPlrdC0XZ3oOYN84ZCgSLhtMN6m5fizs9T8w5x%2Bt7N2dOuHqLtYHPz90zE7rpUcRj8FfsjhqXFTVMfIBkx%2BgmLb0wPHP64OOgyWi7FWlITVMJF%2FrAFk41K&X-Amz-Signature=0a11388c87c46d060d7277a326bd1fc360df2d90a42845306839d03ee2d2d02c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTO4BR63%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFO5EAZlxRLW61QHJvPoe39EHW66OM4Ks3HSGnE2hg4gIgAc8ncC9NEcoSjXSu61YdoTvt1hfBt2uU%2F2AHkotHFcwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLQEw%2FZnu4QWO5G06CrcA8ho54uinDtoenxrGQTz5H2%2BoR%2BqOL%2FeOJIG56sPzOaHpOYSXP1JZOKw3JPu9QehEQnsXEejUSzttQmLJ%2B5nLg2kJoF%2BxlP4LcovJyuZC7flULE8QycFARgdQvRIlpP3UuVT9dMSHWAdTM5egJdVk6bmcK7wQ2PRtwAxyt%2FmA0JHjexG2SSnUpytkHCB38bjFv8E8VlZdcEUlyTf9ncBXFth%2BTbwCAQYgPXA8qnv13llg2rihY1aYMwAuG8JyqTh5ZxI3xSuVJ%2Fs2wJAYuEGOO4qDRo0%2FH5qPj219jjG8rWQ%2FBybOKXaEYUXMmMNkPZxZ2luDU2c5bZodbYfVsIBFrJ5p1rWqZsTK00H5t7%2BYxJDSvFTFWs10LMlPNbxU%2FyE4SchrdhEy5Pchy7HrFpZUadqjkO7cKJ%2FrSe2vkBx66HRUtILXa%2FLXOtihNnwsR3RRxreremOf7IrN9EIkzg0LaMCfNYS23%2BiIDR0b65FY%2BaLNhv%2Fs%2BHvTECfRDOzyUfVYzX7WOgsJ2pCjPIrDJuYNETs6JZtCCH07sZJCccyRhLEK6wIDCq54Fjc5gCfeJ3lXpSg7yodUxyXL2HWbkiL5b%2FUBGVfeKuzVgKi3G6SQqCvv5OEFT2g22P76onFMM6Jk78GOqUBbzl9A0PnXTtwaWa86hGxN2xMzjPZ0fkolO13Pq1noXUk8xbQFdnh4iQkNSqu4sr58yRNX8kht5MVd01JaQzd62hzeUGUHbNLDAtQCmzPlrdC0XZ3oOYN84ZCgSLhtMN6m5fizs9T8w5x%2Bt7N2dOuHqLtYHPz90zE7rpUcRj8FfsjhqXFTVMfIBkx%2BgmLb0wPHP64OOgyWi7FWlITVMJF%2FrAFk41K&X-Amz-Signature=c0f59dcbf85321ef47218681ea52f9c94bfd2f897a52d2a30b01718ae9bc4b96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
