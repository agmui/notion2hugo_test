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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWELKAIZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIA2P00cKHdRapiQw4Dd7PNldGMnpLCWSW2qMt9Jn3SbfAiEArDFyMRFstu%2BnVnnomsIq%2FdWnwusSnVdgBo%2BLF%2Fy7iIoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcRokrA5j%2FrwCUtlCrcA7SBYwrV54SzNLoa1sZvoOpGsK87i2FkWRQwO64z%2B1nIFnfKN9mi7WO6bRCdzNaqHyWXPAXHfCgDV0mgFe86HSsitJHskVJ2k8qwodmwrwjFhh1k40Mf3OZLqYs0V0bNpsJpQBQvfniUsJ%2BSG1YZpqh9II%2FMbvzGouPK768r2Z2H85eesirAkIhCbSFkNfeyOwZXpqUHvlq2fVrMcuVRRRl1ur4NTrlhkrecZjtZisgbNdVdCljU1vOmQIW1kE%2Bw9bPF9CQyE4k8hJISmMWJUrMT%2BnFrRMZCZNcPLVSIRmswYssGhE6Nau8E%2FNoI6Ic76ZdFbcyQZEby%2FdU1GTfp%2FSD60pykbs9dgOPfK54JUHQ6txrEHmvOCMNyCozpYqbbJbxfUpylI1htkbbHeCaynD%2F0BRjKYrEq4PZ7J%2Bxicj7d899JOMWGV2%2FgCFeYUFqPVglkIMqqtEhN4WyFCpKf5aF1pHGq5qi4%2F3cHOjsGrDHzZcYC8l8Fpux51qicBXgC%2BKsdegtTmn%2F6OZPDjI%2BoMOWkysOzBy63gX3R7sfN10wCML3RBqvKXGm%2F6BZLa4FN34xeQSyAFsdJ8dJ%2FBShiWhof2NAMoZLdb5f7rlU4OUW%2Bq0Ao3T6o6JIAUm6RMJWo4sIGOqUBipaS8XeKmcd4BJ8u7GOu4ZZSN1UahlY1VimalcQPWAwh9d0ijPm2mYvDEsn9ezSugc8TXO7ZCqLfHK3AmR1xZzbogmEBv5WkeBv00fq2lZAVymMwmeY980lZYxCsrTcRO8fHGdSXRhGTA%2B%2BBTMLkp2NVGmn3weP6qmpExOYZQGtNbymOj%2FYOxTz8TgdMxdXRJbSBhY8OEeBGKBpd6mnEUuB2VkQL&X-Amz-Signature=b5e46c97c4e7fa480af482eb7eb35c0167b0e32671fb27153bd43211c0ae584e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWELKAIZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIA2P00cKHdRapiQw4Dd7PNldGMnpLCWSW2qMt9Jn3SbfAiEArDFyMRFstu%2BnVnnomsIq%2FdWnwusSnVdgBo%2BLF%2Fy7iIoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcRokrA5j%2FrwCUtlCrcA7SBYwrV54SzNLoa1sZvoOpGsK87i2FkWRQwO64z%2B1nIFnfKN9mi7WO6bRCdzNaqHyWXPAXHfCgDV0mgFe86HSsitJHskVJ2k8qwodmwrwjFhh1k40Mf3OZLqYs0V0bNpsJpQBQvfniUsJ%2BSG1YZpqh9II%2FMbvzGouPK768r2Z2H85eesirAkIhCbSFkNfeyOwZXpqUHvlq2fVrMcuVRRRl1ur4NTrlhkrecZjtZisgbNdVdCljU1vOmQIW1kE%2Bw9bPF9CQyE4k8hJISmMWJUrMT%2BnFrRMZCZNcPLVSIRmswYssGhE6Nau8E%2FNoI6Ic76ZdFbcyQZEby%2FdU1GTfp%2FSD60pykbs9dgOPfK54JUHQ6txrEHmvOCMNyCozpYqbbJbxfUpylI1htkbbHeCaynD%2F0BRjKYrEq4PZ7J%2Bxicj7d899JOMWGV2%2FgCFeYUFqPVglkIMqqtEhN4WyFCpKf5aF1pHGq5qi4%2F3cHOjsGrDHzZcYC8l8Fpux51qicBXgC%2BKsdegtTmn%2F6OZPDjI%2BoMOWkysOzBy63gX3R7sfN10wCML3RBqvKXGm%2F6BZLa4FN34xeQSyAFsdJ8dJ%2FBShiWhof2NAMoZLdb5f7rlU4OUW%2Bq0Ao3T6o6JIAUm6RMJWo4sIGOqUBipaS8XeKmcd4BJ8u7GOu4ZZSN1UahlY1VimalcQPWAwh9d0ijPm2mYvDEsn9ezSugc8TXO7ZCqLfHK3AmR1xZzbogmEBv5WkeBv00fq2lZAVymMwmeY980lZYxCsrTcRO8fHGdSXRhGTA%2B%2BBTMLkp2NVGmn3weP6qmpExOYZQGtNbymOj%2FYOxTz8TgdMxdXRJbSBhY8OEeBGKBpd6mnEUuB2VkQL&X-Amz-Signature=c42cb636cd7125086f5823cceebe7929ab10a32d3c924fe053aeeb30b4231ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWELKAIZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIA2P00cKHdRapiQw4Dd7PNldGMnpLCWSW2qMt9Jn3SbfAiEArDFyMRFstu%2BnVnnomsIq%2FdWnwusSnVdgBo%2BLF%2Fy7iIoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcRokrA5j%2FrwCUtlCrcA7SBYwrV54SzNLoa1sZvoOpGsK87i2FkWRQwO64z%2B1nIFnfKN9mi7WO6bRCdzNaqHyWXPAXHfCgDV0mgFe86HSsitJHskVJ2k8qwodmwrwjFhh1k40Mf3OZLqYs0V0bNpsJpQBQvfniUsJ%2BSG1YZpqh9II%2FMbvzGouPK768r2Z2H85eesirAkIhCbSFkNfeyOwZXpqUHvlq2fVrMcuVRRRl1ur4NTrlhkrecZjtZisgbNdVdCljU1vOmQIW1kE%2Bw9bPF9CQyE4k8hJISmMWJUrMT%2BnFrRMZCZNcPLVSIRmswYssGhE6Nau8E%2FNoI6Ic76ZdFbcyQZEby%2FdU1GTfp%2FSD60pykbs9dgOPfK54JUHQ6txrEHmvOCMNyCozpYqbbJbxfUpylI1htkbbHeCaynD%2F0BRjKYrEq4PZ7J%2Bxicj7d899JOMWGV2%2FgCFeYUFqPVglkIMqqtEhN4WyFCpKf5aF1pHGq5qi4%2F3cHOjsGrDHzZcYC8l8Fpux51qicBXgC%2BKsdegtTmn%2F6OZPDjI%2BoMOWkysOzBy63gX3R7sfN10wCML3RBqvKXGm%2F6BZLa4FN34xeQSyAFsdJ8dJ%2FBShiWhof2NAMoZLdb5f7rlU4OUW%2Bq0Ao3T6o6JIAUm6RMJWo4sIGOqUBipaS8XeKmcd4BJ8u7GOu4ZZSN1UahlY1VimalcQPWAwh9d0ijPm2mYvDEsn9ezSugc8TXO7ZCqLfHK3AmR1xZzbogmEBv5WkeBv00fq2lZAVymMwmeY980lZYxCsrTcRO8fHGdSXRhGTA%2B%2BBTMLkp2NVGmn3weP6qmpExOYZQGtNbymOj%2FYOxTz8TgdMxdXRJbSBhY8OEeBGKBpd6mnEUuB2VkQL&X-Amz-Signature=70a4bf6599455591947376bb6b3f5b4c654a8290cadb58460822e2f0fd3261a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWELKAIZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIA2P00cKHdRapiQw4Dd7PNldGMnpLCWSW2qMt9Jn3SbfAiEArDFyMRFstu%2BnVnnomsIq%2FdWnwusSnVdgBo%2BLF%2Fy7iIoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcRokrA5j%2FrwCUtlCrcA7SBYwrV54SzNLoa1sZvoOpGsK87i2FkWRQwO64z%2B1nIFnfKN9mi7WO6bRCdzNaqHyWXPAXHfCgDV0mgFe86HSsitJHskVJ2k8qwodmwrwjFhh1k40Mf3OZLqYs0V0bNpsJpQBQvfniUsJ%2BSG1YZpqh9II%2FMbvzGouPK768r2Z2H85eesirAkIhCbSFkNfeyOwZXpqUHvlq2fVrMcuVRRRl1ur4NTrlhkrecZjtZisgbNdVdCljU1vOmQIW1kE%2Bw9bPF9CQyE4k8hJISmMWJUrMT%2BnFrRMZCZNcPLVSIRmswYssGhE6Nau8E%2FNoI6Ic76ZdFbcyQZEby%2FdU1GTfp%2FSD60pykbs9dgOPfK54JUHQ6txrEHmvOCMNyCozpYqbbJbxfUpylI1htkbbHeCaynD%2F0BRjKYrEq4PZ7J%2Bxicj7d899JOMWGV2%2FgCFeYUFqPVglkIMqqtEhN4WyFCpKf5aF1pHGq5qi4%2F3cHOjsGrDHzZcYC8l8Fpux51qicBXgC%2BKsdegtTmn%2F6OZPDjI%2BoMOWkysOzBy63gX3R7sfN10wCML3RBqvKXGm%2F6BZLa4FN34xeQSyAFsdJ8dJ%2FBShiWhof2NAMoZLdb5f7rlU4OUW%2Bq0Ao3T6o6JIAUm6RMJWo4sIGOqUBipaS8XeKmcd4BJ8u7GOu4ZZSN1UahlY1VimalcQPWAwh9d0ijPm2mYvDEsn9ezSugc8TXO7ZCqLfHK3AmR1xZzbogmEBv5WkeBv00fq2lZAVymMwmeY980lZYxCsrTcRO8fHGdSXRhGTA%2B%2BBTMLkp2NVGmn3weP6qmpExOYZQGtNbymOj%2FYOxTz8TgdMxdXRJbSBhY8OEeBGKBpd6mnEUuB2VkQL&X-Amz-Signature=1720a75c6dc924c6db6ec6b0be6abf84139806f1cb31d2435378b8f6c4a61f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWELKAIZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIA2P00cKHdRapiQw4Dd7PNldGMnpLCWSW2qMt9Jn3SbfAiEArDFyMRFstu%2BnVnnomsIq%2FdWnwusSnVdgBo%2BLF%2Fy7iIoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcRokrA5j%2FrwCUtlCrcA7SBYwrV54SzNLoa1sZvoOpGsK87i2FkWRQwO64z%2B1nIFnfKN9mi7WO6bRCdzNaqHyWXPAXHfCgDV0mgFe86HSsitJHskVJ2k8qwodmwrwjFhh1k40Mf3OZLqYs0V0bNpsJpQBQvfniUsJ%2BSG1YZpqh9II%2FMbvzGouPK768r2Z2H85eesirAkIhCbSFkNfeyOwZXpqUHvlq2fVrMcuVRRRl1ur4NTrlhkrecZjtZisgbNdVdCljU1vOmQIW1kE%2Bw9bPF9CQyE4k8hJISmMWJUrMT%2BnFrRMZCZNcPLVSIRmswYssGhE6Nau8E%2FNoI6Ic76ZdFbcyQZEby%2FdU1GTfp%2FSD60pykbs9dgOPfK54JUHQ6txrEHmvOCMNyCozpYqbbJbxfUpylI1htkbbHeCaynD%2F0BRjKYrEq4PZ7J%2Bxicj7d899JOMWGV2%2FgCFeYUFqPVglkIMqqtEhN4WyFCpKf5aF1pHGq5qi4%2F3cHOjsGrDHzZcYC8l8Fpux51qicBXgC%2BKsdegtTmn%2F6OZPDjI%2BoMOWkysOzBy63gX3R7sfN10wCML3RBqvKXGm%2F6BZLa4FN34xeQSyAFsdJ8dJ%2FBShiWhof2NAMoZLdb5f7rlU4OUW%2Bq0Ao3T6o6JIAUm6RMJWo4sIGOqUBipaS8XeKmcd4BJ8u7GOu4ZZSN1UahlY1VimalcQPWAwh9d0ijPm2mYvDEsn9ezSugc8TXO7ZCqLfHK3AmR1xZzbogmEBv5WkeBv00fq2lZAVymMwmeY980lZYxCsrTcRO8fHGdSXRhGTA%2B%2BBTMLkp2NVGmn3weP6qmpExOYZQGtNbymOj%2FYOxTz8TgdMxdXRJbSBhY8OEeBGKBpd6mnEUuB2VkQL&X-Amz-Signature=05b453a910554b6b4f77596b05e29db74f50db216f1be96983d3075b8dbc722e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWELKAIZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIA2P00cKHdRapiQw4Dd7PNldGMnpLCWSW2qMt9Jn3SbfAiEArDFyMRFstu%2BnVnnomsIq%2FdWnwusSnVdgBo%2BLF%2Fy7iIoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcRokrA5j%2FrwCUtlCrcA7SBYwrV54SzNLoa1sZvoOpGsK87i2FkWRQwO64z%2B1nIFnfKN9mi7WO6bRCdzNaqHyWXPAXHfCgDV0mgFe86HSsitJHskVJ2k8qwodmwrwjFhh1k40Mf3OZLqYs0V0bNpsJpQBQvfniUsJ%2BSG1YZpqh9II%2FMbvzGouPK768r2Z2H85eesirAkIhCbSFkNfeyOwZXpqUHvlq2fVrMcuVRRRl1ur4NTrlhkrecZjtZisgbNdVdCljU1vOmQIW1kE%2Bw9bPF9CQyE4k8hJISmMWJUrMT%2BnFrRMZCZNcPLVSIRmswYssGhE6Nau8E%2FNoI6Ic76ZdFbcyQZEby%2FdU1GTfp%2FSD60pykbs9dgOPfK54JUHQ6txrEHmvOCMNyCozpYqbbJbxfUpylI1htkbbHeCaynD%2F0BRjKYrEq4PZ7J%2Bxicj7d899JOMWGV2%2FgCFeYUFqPVglkIMqqtEhN4WyFCpKf5aF1pHGq5qi4%2F3cHOjsGrDHzZcYC8l8Fpux51qicBXgC%2BKsdegtTmn%2F6OZPDjI%2BoMOWkysOzBy63gX3R7sfN10wCML3RBqvKXGm%2F6BZLa4FN34xeQSyAFsdJ8dJ%2FBShiWhof2NAMoZLdb5f7rlU4OUW%2Bq0Ao3T6o6JIAUm6RMJWo4sIGOqUBipaS8XeKmcd4BJ8u7GOu4ZZSN1UahlY1VimalcQPWAwh9d0ijPm2mYvDEsn9ezSugc8TXO7ZCqLfHK3AmR1xZzbogmEBv5WkeBv00fq2lZAVymMwmeY980lZYxCsrTcRO8fHGdSXRhGTA%2B%2BBTMLkp2NVGmn3weP6qmpExOYZQGtNbymOj%2FYOxTz8TgdMxdXRJbSBhY8OEeBGKBpd6mnEUuB2VkQL&X-Amz-Signature=597c5b22263fefecd3464730feb40cb3f8c7fc0f497d314a4a98abfeb2606a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWELKAIZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIA2P00cKHdRapiQw4Dd7PNldGMnpLCWSW2qMt9Jn3SbfAiEArDFyMRFstu%2BnVnnomsIq%2FdWnwusSnVdgBo%2BLF%2Fy7iIoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcRokrA5j%2FrwCUtlCrcA7SBYwrV54SzNLoa1sZvoOpGsK87i2FkWRQwO64z%2B1nIFnfKN9mi7WO6bRCdzNaqHyWXPAXHfCgDV0mgFe86HSsitJHskVJ2k8qwodmwrwjFhh1k40Mf3OZLqYs0V0bNpsJpQBQvfniUsJ%2BSG1YZpqh9II%2FMbvzGouPK768r2Z2H85eesirAkIhCbSFkNfeyOwZXpqUHvlq2fVrMcuVRRRl1ur4NTrlhkrecZjtZisgbNdVdCljU1vOmQIW1kE%2Bw9bPF9CQyE4k8hJISmMWJUrMT%2BnFrRMZCZNcPLVSIRmswYssGhE6Nau8E%2FNoI6Ic76ZdFbcyQZEby%2FdU1GTfp%2FSD60pykbs9dgOPfK54JUHQ6txrEHmvOCMNyCozpYqbbJbxfUpylI1htkbbHeCaynD%2F0BRjKYrEq4PZ7J%2Bxicj7d899JOMWGV2%2FgCFeYUFqPVglkIMqqtEhN4WyFCpKf5aF1pHGq5qi4%2F3cHOjsGrDHzZcYC8l8Fpux51qicBXgC%2BKsdegtTmn%2F6OZPDjI%2BoMOWkysOzBy63gX3R7sfN10wCML3RBqvKXGm%2F6BZLa4FN34xeQSyAFsdJ8dJ%2FBShiWhof2NAMoZLdb5f7rlU4OUW%2Bq0Ao3T6o6JIAUm6RMJWo4sIGOqUBipaS8XeKmcd4BJ8u7GOu4ZZSN1UahlY1VimalcQPWAwh9d0ijPm2mYvDEsn9ezSugc8TXO7ZCqLfHK3AmR1xZzbogmEBv5WkeBv00fq2lZAVymMwmeY980lZYxCsrTcRO8fHGdSXRhGTA%2B%2BBTMLkp2NVGmn3weP6qmpExOYZQGtNbymOj%2FYOxTz8TgdMxdXRJbSBhY8OEeBGKBpd6mnEUuB2VkQL&X-Amz-Signature=8e97a9747f98e8df15c03afc5bda8618c1052f441ccbd3789b588eb926d73282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWELKAIZ%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIA2P00cKHdRapiQw4Dd7PNldGMnpLCWSW2qMt9Jn3SbfAiEArDFyMRFstu%2BnVnnomsIq%2FdWnwusSnVdgBo%2BLF%2Fy7iIoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcRokrA5j%2FrwCUtlCrcA7SBYwrV54SzNLoa1sZvoOpGsK87i2FkWRQwO64z%2B1nIFnfKN9mi7WO6bRCdzNaqHyWXPAXHfCgDV0mgFe86HSsitJHskVJ2k8qwodmwrwjFhh1k40Mf3OZLqYs0V0bNpsJpQBQvfniUsJ%2BSG1YZpqh9II%2FMbvzGouPK768r2Z2H85eesirAkIhCbSFkNfeyOwZXpqUHvlq2fVrMcuVRRRl1ur4NTrlhkrecZjtZisgbNdVdCljU1vOmQIW1kE%2Bw9bPF9CQyE4k8hJISmMWJUrMT%2BnFrRMZCZNcPLVSIRmswYssGhE6Nau8E%2FNoI6Ic76ZdFbcyQZEby%2FdU1GTfp%2FSD60pykbs9dgOPfK54JUHQ6txrEHmvOCMNyCozpYqbbJbxfUpylI1htkbbHeCaynD%2F0BRjKYrEq4PZ7J%2Bxicj7d899JOMWGV2%2FgCFeYUFqPVglkIMqqtEhN4WyFCpKf5aF1pHGq5qi4%2F3cHOjsGrDHzZcYC8l8Fpux51qicBXgC%2BKsdegtTmn%2F6OZPDjI%2BoMOWkysOzBy63gX3R7sfN10wCML3RBqvKXGm%2F6BZLa4FN34xeQSyAFsdJ8dJ%2FBShiWhof2NAMoZLdb5f7rlU4OUW%2Bq0Ao3T6o6JIAUm6RMJWo4sIGOqUBipaS8XeKmcd4BJ8u7GOu4ZZSN1UahlY1VimalcQPWAwh9d0ijPm2mYvDEsn9ezSugc8TXO7ZCqLfHK3AmR1xZzbogmEBv5WkeBv00fq2lZAVymMwmeY980lZYxCsrTcRO8fHGdSXRhGTA%2B%2BBTMLkp2NVGmn3weP6qmpExOYZQGtNbymOj%2FYOxTz8TgdMxdXRJbSBhY8OEeBGKBpd6mnEUuB2VkQL&X-Amz-Signature=b6df5f5b8417cd0e7d1963e0291ae92d5087679d4aa565a795620013148eeb73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
