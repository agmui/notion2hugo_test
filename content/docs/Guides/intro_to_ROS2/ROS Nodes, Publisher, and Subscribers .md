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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSJFTJ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICB7dmeFbeyojgEs6MnyfOtihJnidwOncHVHvARcmCZCAiEA%2FiiyK6T%2FfxMJ6v%2FEKcmh6cwT9qJxab59k1KwEe6SESoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDNdKqic6mPJChfeFCrcAzhi3Y7RwEBFCgZtIoLvY1mhUc3scEOh2duQfpqYBh4lAj3Sk2MI2LYUZGG1XsD6%2B1OyEszL5Coto85MZWb%2FDwER4r7BHH%2Fd1qYIXxhSrSbcC8sgbFVDCLCL%2FuqbquhIVbnXtr1sLxOB0miUW%2FNAHyHcfqor4oawZHMv9EKDZp4JVMUDUrhyTN4A02x%2FWxGuYaOi1h1MbLhNCXwJZd9BSPwTewoIPYE%2FMfxF7upv%2BWxyPqOwuINqf5lPkSdb6N6QUkz5oisoumCdHnsMI%2FkC%2BICnlB%2F6Os9sxblJ947VGGCrALzn%2FKi%2FXTKEPomfbeV%2FVPOQLAeMlJuFSBLD7JHRIWS3Xd4S4Ci8jqj8xvUTzJZU8sZ4gx8DhgIzeriAxN90wa1iLr%2FAgxXVirSfpFh6KqydIvSqsvo9o0a23F%2F%2FOYSvO%2BZe3ib7KlhS2ocG3n8p5vWKQ99Vr2oL9RnS0x5rh%2FCBU5rfxg8SPILTmu2TQK46ls4PboKTscnp45XbRXXxYcdtT0BoN6r%2F7UUAeg6Jgg%2F6Kz368FBEpcQLIDkYZIY%2BweYyV6vvR7VUc%2FtMTwWpcWygy229iKTULGaQTcV2hdlxc4VazJUHLudVTpo8vb1zazClkABKwbBtxEoOMPO61b8GOqUBXh9qRpZMneSXJxiAhzi8T%2Bt99S8G5A01xcO1BC7RfyUlxNCniBX%2BJxlv5oTR%2F5IZIQRAS4K6tz6BFOVXpxsZLaqKXHRv%2FWVG8QXfAgH6E%2FtS5NXfCO8%2FSuNS2vXwl00gvqhImIyGwdAzVfme2yx6YHA7MbTpeP3gvSZ8UR74qyd%2B5KR0b1e%2BdPAF5KPpTLUz9Db1WB5P%2F%2FHfUdJ3LNARQ5pt2m3z&X-Amz-Signature=d401f9067c9e36dfc0de0ec1f38e2dc4ff764b5b7a4d83a7acf86b75107364c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSJFTJ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICB7dmeFbeyojgEs6MnyfOtihJnidwOncHVHvARcmCZCAiEA%2FiiyK6T%2FfxMJ6v%2FEKcmh6cwT9qJxab59k1KwEe6SESoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDNdKqic6mPJChfeFCrcAzhi3Y7RwEBFCgZtIoLvY1mhUc3scEOh2duQfpqYBh4lAj3Sk2MI2LYUZGG1XsD6%2B1OyEszL5Coto85MZWb%2FDwER4r7BHH%2Fd1qYIXxhSrSbcC8sgbFVDCLCL%2FuqbquhIVbnXtr1sLxOB0miUW%2FNAHyHcfqor4oawZHMv9EKDZp4JVMUDUrhyTN4A02x%2FWxGuYaOi1h1MbLhNCXwJZd9BSPwTewoIPYE%2FMfxF7upv%2BWxyPqOwuINqf5lPkSdb6N6QUkz5oisoumCdHnsMI%2FkC%2BICnlB%2F6Os9sxblJ947VGGCrALzn%2FKi%2FXTKEPomfbeV%2FVPOQLAeMlJuFSBLD7JHRIWS3Xd4S4Ci8jqj8xvUTzJZU8sZ4gx8DhgIzeriAxN90wa1iLr%2FAgxXVirSfpFh6KqydIvSqsvo9o0a23F%2F%2FOYSvO%2BZe3ib7KlhS2ocG3n8p5vWKQ99Vr2oL9RnS0x5rh%2FCBU5rfxg8SPILTmu2TQK46ls4PboKTscnp45XbRXXxYcdtT0BoN6r%2F7UUAeg6Jgg%2F6Kz368FBEpcQLIDkYZIY%2BweYyV6vvR7VUc%2FtMTwWpcWygy229iKTULGaQTcV2hdlxc4VazJUHLudVTpo8vb1zazClkABKwbBtxEoOMPO61b8GOqUBXh9qRpZMneSXJxiAhzi8T%2Bt99S8G5A01xcO1BC7RfyUlxNCniBX%2BJxlv5oTR%2F5IZIQRAS4K6tz6BFOVXpxsZLaqKXHRv%2FWVG8QXfAgH6E%2FtS5NXfCO8%2FSuNS2vXwl00gvqhImIyGwdAzVfme2yx6YHA7MbTpeP3gvSZ8UR74qyd%2B5KR0b1e%2BdPAF5KPpTLUz9Db1WB5P%2F%2FHfUdJ3LNARQ5pt2m3z&X-Amz-Signature=3765f1f55b1c7c51147e423d037e69b7b7211ff6b5bb4ecb42db7da90966dd45&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSJFTJ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICB7dmeFbeyojgEs6MnyfOtihJnidwOncHVHvARcmCZCAiEA%2FiiyK6T%2FfxMJ6v%2FEKcmh6cwT9qJxab59k1KwEe6SESoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDNdKqic6mPJChfeFCrcAzhi3Y7RwEBFCgZtIoLvY1mhUc3scEOh2duQfpqYBh4lAj3Sk2MI2LYUZGG1XsD6%2B1OyEszL5Coto85MZWb%2FDwER4r7BHH%2Fd1qYIXxhSrSbcC8sgbFVDCLCL%2FuqbquhIVbnXtr1sLxOB0miUW%2FNAHyHcfqor4oawZHMv9EKDZp4JVMUDUrhyTN4A02x%2FWxGuYaOi1h1MbLhNCXwJZd9BSPwTewoIPYE%2FMfxF7upv%2BWxyPqOwuINqf5lPkSdb6N6QUkz5oisoumCdHnsMI%2FkC%2BICnlB%2F6Os9sxblJ947VGGCrALzn%2FKi%2FXTKEPomfbeV%2FVPOQLAeMlJuFSBLD7JHRIWS3Xd4S4Ci8jqj8xvUTzJZU8sZ4gx8DhgIzeriAxN90wa1iLr%2FAgxXVirSfpFh6KqydIvSqsvo9o0a23F%2F%2FOYSvO%2BZe3ib7KlhS2ocG3n8p5vWKQ99Vr2oL9RnS0x5rh%2FCBU5rfxg8SPILTmu2TQK46ls4PboKTscnp45XbRXXxYcdtT0BoN6r%2F7UUAeg6Jgg%2F6Kz368FBEpcQLIDkYZIY%2BweYyV6vvR7VUc%2FtMTwWpcWygy229iKTULGaQTcV2hdlxc4VazJUHLudVTpo8vb1zazClkABKwbBtxEoOMPO61b8GOqUBXh9qRpZMneSXJxiAhzi8T%2Bt99S8G5A01xcO1BC7RfyUlxNCniBX%2BJxlv5oTR%2F5IZIQRAS4K6tz6BFOVXpxsZLaqKXHRv%2FWVG8QXfAgH6E%2FtS5NXfCO8%2FSuNS2vXwl00gvqhImIyGwdAzVfme2yx6YHA7MbTpeP3gvSZ8UR74qyd%2B5KR0b1e%2BdPAF5KPpTLUz9Db1WB5P%2F%2FHfUdJ3LNARQ5pt2m3z&X-Amz-Signature=caddb8459503b0c274be867f8756d038b39cf017aa70fc506b34cd0f2481d593&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSJFTJ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICB7dmeFbeyojgEs6MnyfOtihJnidwOncHVHvARcmCZCAiEA%2FiiyK6T%2FfxMJ6v%2FEKcmh6cwT9qJxab59k1KwEe6SESoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDNdKqic6mPJChfeFCrcAzhi3Y7RwEBFCgZtIoLvY1mhUc3scEOh2duQfpqYBh4lAj3Sk2MI2LYUZGG1XsD6%2B1OyEszL5Coto85MZWb%2FDwER4r7BHH%2Fd1qYIXxhSrSbcC8sgbFVDCLCL%2FuqbquhIVbnXtr1sLxOB0miUW%2FNAHyHcfqor4oawZHMv9EKDZp4JVMUDUrhyTN4A02x%2FWxGuYaOi1h1MbLhNCXwJZd9BSPwTewoIPYE%2FMfxF7upv%2BWxyPqOwuINqf5lPkSdb6N6QUkz5oisoumCdHnsMI%2FkC%2BICnlB%2F6Os9sxblJ947VGGCrALzn%2FKi%2FXTKEPomfbeV%2FVPOQLAeMlJuFSBLD7JHRIWS3Xd4S4Ci8jqj8xvUTzJZU8sZ4gx8DhgIzeriAxN90wa1iLr%2FAgxXVirSfpFh6KqydIvSqsvo9o0a23F%2F%2FOYSvO%2BZe3ib7KlhS2ocG3n8p5vWKQ99Vr2oL9RnS0x5rh%2FCBU5rfxg8SPILTmu2TQK46ls4PboKTscnp45XbRXXxYcdtT0BoN6r%2F7UUAeg6Jgg%2F6Kz368FBEpcQLIDkYZIY%2BweYyV6vvR7VUc%2FtMTwWpcWygy229iKTULGaQTcV2hdlxc4VazJUHLudVTpo8vb1zazClkABKwbBtxEoOMPO61b8GOqUBXh9qRpZMneSXJxiAhzi8T%2Bt99S8G5A01xcO1BC7RfyUlxNCniBX%2BJxlv5oTR%2F5IZIQRAS4K6tz6BFOVXpxsZLaqKXHRv%2FWVG8QXfAgH6E%2FtS5NXfCO8%2FSuNS2vXwl00gvqhImIyGwdAzVfme2yx6YHA7MbTpeP3gvSZ8UR74qyd%2B5KR0b1e%2BdPAF5KPpTLUz9Db1WB5P%2F%2FHfUdJ3LNARQ5pt2m3z&X-Amz-Signature=ea88f4b99ddcb214d87c27ab747aee83b649bfda4d48b1a1e4202dad9364c46e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSJFTJ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICB7dmeFbeyojgEs6MnyfOtihJnidwOncHVHvARcmCZCAiEA%2FiiyK6T%2FfxMJ6v%2FEKcmh6cwT9qJxab59k1KwEe6SESoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDNdKqic6mPJChfeFCrcAzhi3Y7RwEBFCgZtIoLvY1mhUc3scEOh2duQfpqYBh4lAj3Sk2MI2LYUZGG1XsD6%2B1OyEszL5Coto85MZWb%2FDwER4r7BHH%2Fd1qYIXxhSrSbcC8sgbFVDCLCL%2FuqbquhIVbnXtr1sLxOB0miUW%2FNAHyHcfqor4oawZHMv9EKDZp4JVMUDUrhyTN4A02x%2FWxGuYaOi1h1MbLhNCXwJZd9BSPwTewoIPYE%2FMfxF7upv%2BWxyPqOwuINqf5lPkSdb6N6QUkz5oisoumCdHnsMI%2FkC%2BICnlB%2F6Os9sxblJ947VGGCrALzn%2FKi%2FXTKEPomfbeV%2FVPOQLAeMlJuFSBLD7JHRIWS3Xd4S4Ci8jqj8xvUTzJZU8sZ4gx8DhgIzeriAxN90wa1iLr%2FAgxXVirSfpFh6KqydIvSqsvo9o0a23F%2F%2FOYSvO%2BZe3ib7KlhS2ocG3n8p5vWKQ99Vr2oL9RnS0x5rh%2FCBU5rfxg8SPILTmu2TQK46ls4PboKTscnp45XbRXXxYcdtT0BoN6r%2F7UUAeg6Jgg%2F6Kz368FBEpcQLIDkYZIY%2BweYyV6vvR7VUc%2FtMTwWpcWygy229iKTULGaQTcV2hdlxc4VazJUHLudVTpo8vb1zazClkABKwbBtxEoOMPO61b8GOqUBXh9qRpZMneSXJxiAhzi8T%2Bt99S8G5A01xcO1BC7RfyUlxNCniBX%2BJxlv5oTR%2F5IZIQRAS4K6tz6BFOVXpxsZLaqKXHRv%2FWVG8QXfAgH6E%2FtS5NXfCO8%2FSuNS2vXwl00gvqhImIyGwdAzVfme2yx6YHA7MbTpeP3gvSZ8UR74qyd%2B5KR0b1e%2BdPAF5KPpTLUz9Db1WB5P%2F%2FHfUdJ3LNARQ5pt2m3z&X-Amz-Signature=298547fe8675fa81ceaa374a05faaf6af044ed8b292638378d906676d42ffb8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSJFTJ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICB7dmeFbeyojgEs6MnyfOtihJnidwOncHVHvARcmCZCAiEA%2FiiyK6T%2FfxMJ6v%2FEKcmh6cwT9qJxab59k1KwEe6SESoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDNdKqic6mPJChfeFCrcAzhi3Y7RwEBFCgZtIoLvY1mhUc3scEOh2duQfpqYBh4lAj3Sk2MI2LYUZGG1XsD6%2B1OyEszL5Coto85MZWb%2FDwER4r7BHH%2Fd1qYIXxhSrSbcC8sgbFVDCLCL%2FuqbquhIVbnXtr1sLxOB0miUW%2FNAHyHcfqor4oawZHMv9EKDZp4JVMUDUrhyTN4A02x%2FWxGuYaOi1h1MbLhNCXwJZd9BSPwTewoIPYE%2FMfxF7upv%2BWxyPqOwuINqf5lPkSdb6N6QUkz5oisoumCdHnsMI%2FkC%2BICnlB%2F6Os9sxblJ947VGGCrALzn%2FKi%2FXTKEPomfbeV%2FVPOQLAeMlJuFSBLD7JHRIWS3Xd4S4Ci8jqj8xvUTzJZU8sZ4gx8DhgIzeriAxN90wa1iLr%2FAgxXVirSfpFh6KqydIvSqsvo9o0a23F%2F%2FOYSvO%2BZe3ib7KlhS2ocG3n8p5vWKQ99Vr2oL9RnS0x5rh%2FCBU5rfxg8SPILTmu2TQK46ls4PboKTscnp45XbRXXxYcdtT0BoN6r%2F7UUAeg6Jgg%2F6Kz368FBEpcQLIDkYZIY%2BweYyV6vvR7VUc%2FtMTwWpcWygy229iKTULGaQTcV2hdlxc4VazJUHLudVTpo8vb1zazClkABKwbBtxEoOMPO61b8GOqUBXh9qRpZMneSXJxiAhzi8T%2Bt99S8G5A01xcO1BC7RfyUlxNCniBX%2BJxlv5oTR%2F5IZIQRAS4K6tz6BFOVXpxsZLaqKXHRv%2FWVG8QXfAgH6E%2FtS5NXfCO8%2FSuNS2vXwl00gvqhImIyGwdAzVfme2yx6YHA7MbTpeP3gvSZ8UR74qyd%2B5KR0b1e%2BdPAF5KPpTLUz9Db1WB5P%2F%2FHfUdJ3LNARQ5pt2m3z&X-Amz-Signature=a06d832b9fd525b6bf08a9b42b438b0f68514eaf209ea4ead6f73ba2be7f9b39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSJFTJ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICB7dmeFbeyojgEs6MnyfOtihJnidwOncHVHvARcmCZCAiEA%2FiiyK6T%2FfxMJ6v%2FEKcmh6cwT9qJxab59k1KwEe6SESoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDNdKqic6mPJChfeFCrcAzhi3Y7RwEBFCgZtIoLvY1mhUc3scEOh2duQfpqYBh4lAj3Sk2MI2LYUZGG1XsD6%2B1OyEszL5Coto85MZWb%2FDwER4r7BHH%2Fd1qYIXxhSrSbcC8sgbFVDCLCL%2FuqbquhIVbnXtr1sLxOB0miUW%2FNAHyHcfqor4oawZHMv9EKDZp4JVMUDUrhyTN4A02x%2FWxGuYaOi1h1MbLhNCXwJZd9BSPwTewoIPYE%2FMfxF7upv%2BWxyPqOwuINqf5lPkSdb6N6QUkz5oisoumCdHnsMI%2FkC%2BICnlB%2F6Os9sxblJ947VGGCrALzn%2FKi%2FXTKEPomfbeV%2FVPOQLAeMlJuFSBLD7JHRIWS3Xd4S4Ci8jqj8xvUTzJZU8sZ4gx8DhgIzeriAxN90wa1iLr%2FAgxXVirSfpFh6KqydIvSqsvo9o0a23F%2F%2FOYSvO%2BZe3ib7KlhS2ocG3n8p5vWKQ99Vr2oL9RnS0x5rh%2FCBU5rfxg8SPILTmu2TQK46ls4PboKTscnp45XbRXXxYcdtT0BoN6r%2F7UUAeg6Jgg%2F6Kz368FBEpcQLIDkYZIY%2BweYyV6vvR7VUc%2FtMTwWpcWygy229iKTULGaQTcV2hdlxc4VazJUHLudVTpo8vb1zazClkABKwbBtxEoOMPO61b8GOqUBXh9qRpZMneSXJxiAhzi8T%2Bt99S8G5A01xcO1BC7RfyUlxNCniBX%2BJxlv5oTR%2F5IZIQRAS4K6tz6BFOVXpxsZLaqKXHRv%2FWVG8QXfAgH6E%2FtS5NXfCO8%2FSuNS2vXwl00gvqhImIyGwdAzVfme2yx6YHA7MbTpeP3gvSZ8UR74qyd%2B5KR0b1e%2BdPAF5KPpTLUz9Db1WB5P%2F%2FHfUdJ3LNARQ5pt2m3z&X-Amz-Signature=98e801fab6a6ec77d58172ce365be5f8dcfc30fa7bab1b4bb4b7dd1e13288b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSJFTJ5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICB7dmeFbeyojgEs6MnyfOtihJnidwOncHVHvARcmCZCAiEA%2FiiyK6T%2FfxMJ6v%2FEKcmh6cwT9qJxab59k1KwEe6SESoq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDNdKqic6mPJChfeFCrcAzhi3Y7RwEBFCgZtIoLvY1mhUc3scEOh2duQfpqYBh4lAj3Sk2MI2LYUZGG1XsD6%2B1OyEszL5Coto85MZWb%2FDwER4r7BHH%2Fd1qYIXxhSrSbcC8sgbFVDCLCL%2FuqbquhIVbnXtr1sLxOB0miUW%2FNAHyHcfqor4oawZHMv9EKDZp4JVMUDUrhyTN4A02x%2FWxGuYaOi1h1MbLhNCXwJZd9BSPwTewoIPYE%2FMfxF7upv%2BWxyPqOwuINqf5lPkSdb6N6QUkz5oisoumCdHnsMI%2FkC%2BICnlB%2F6Os9sxblJ947VGGCrALzn%2FKi%2FXTKEPomfbeV%2FVPOQLAeMlJuFSBLD7JHRIWS3Xd4S4Ci8jqj8xvUTzJZU8sZ4gx8DhgIzeriAxN90wa1iLr%2FAgxXVirSfpFh6KqydIvSqsvo9o0a23F%2F%2FOYSvO%2BZe3ib7KlhS2ocG3n8p5vWKQ99Vr2oL9RnS0x5rh%2FCBU5rfxg8SPILTmu2TQK46ls4PboKTscnp45XbRXXxYcdtT0BoN6r%2F7UUAeg6Jgg%2F6Kz368FBEpcQLIDkYZIY%2BweYyV6vvR7VUc%2FtMTwWpcWygy229iKTULGaQTcV2hdlxc4VazJUHLudVTpo8vb1zazClkABKwbBtxEoOMPO61b8GOqUBXh9qRpZMneSXJxiAhzi8T%2Bt99S8G5A01xcO1BC7RfyUlxNCniBX%2BJxlv5oTR%2F5IZIQRAS4K6tz6BFOVXpxsZLaqKXHRv%2FWVG8QXfAgH6E%2FtS5NXfCO8%2FSuNS2vXwl00gvqhImIyGwdAzVfme2yx6YHA7MbTpeP3gvSZ8UR74qyd%2B5KR0b1e%2BdPAF5KPpTLUz9Db1WB5P%2F%2FHfUdJ3LNARQ5pt2m3z&X-Amz-Signature=2bda1fa20abfd7f6aa0009a869ad1cef1d6fa1291358279a901bf290d3ddadcd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
