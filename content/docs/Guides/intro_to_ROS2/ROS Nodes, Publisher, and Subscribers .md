---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PM6K7RY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID%2BJeftPSd098W3sfn8YAGgNC4dsv0Bs1R0jg%2BeXYebLAiAn%2B0i3VcY33YjM3kwdxwuvU6hW83dC0WsT5ZQ2vUBn8ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMX8WJ%2FSDXkW56AdO2KtwDGKf9Dox%2BzA5VPfI6KfEQKgtsr7nccZSM9zliEm9P%2FJfYKPE9zZGF4Wz9ogorSGZ%2BmeGWRpsxXzJ4UvpYonyLqYmmZ8TUCCppcfUA8qpl4SbLTOvsaaEMBbp6hp74OnSn8FwdvXgChcIv0O7%2F79jYucnIQDh03NWPBW3JPx0AUX6MRN2Q9W6%2F8gHxF6WmhOw2g%2B879DgtNAVxpMHjhDnTrCeRKhT%2BpW1RJH3aciX9Yo4LFQf9XOBKvFVC6iSvEBAnUUfd1wqlpKpgIvy3rhBuIk%2BmTZUfQ1brTi5FQYY3V8n%2B3CqirGUV4sFwrLC8NWtPBRTm9bZ57sE8%2F2sC%2Fcx%2BsYvNqBXcek8olY4nfcHZkQT2FdJYbjvVrBLs6oSKwujSv2YEu7mFMD6YlU4GTPXb2T9BGhrujxXuBsa7l25HQ92zyKIlSwYMaZkTpdZdtCKciZadlksAmnt%2FOSmKjPTDQHoS2D838jPyKaEf%2FpBTe4NRJrCobL9Rmtlt5FEn6N5ao2UIZWksxk8ZLeFa6bHsLqcmydQI4n%2B9Trj5i2IU%2F3LcOo%2BEd0AJOvm9uC277Wp2u2OTG0zoPT22MTZ0UQ5Ek7WkfkkkBHY6XBE285z63A9J9HTR0YicnR%2BDHpIwju%2F7xAY6pgEOUpWI6k190bkSCATIYKja2F7SNKXdrlzuhc40JeA05LfBAE5gI1q8NCvyKMqo%2FLGhkSu9U5MsKSTREcOEGMcqalE4j1EX1YQqwHLmAA2556zEgIDNVkeF5yZYsvVR70LXWRepQgey2J0%2Femgs0JD9as1sCLyDIBlLBP5jrGr14oeQADYHXu9qTGoSjilXaUbIVfE3u7z3eK69useyA4PtJnmEoGRU&X-Amz-Signature=ec4f2622aa860c26d488203ffe6e7c88ccf4817c56961ef5ff568e96aea91e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PM6K7RY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID%2BJeftPSd098W3sfn8YAGgNC4dsv0Bs1R0jg%2BeXYebLAiAn%2B0i3VcY33YjM3kwdxwuvU6hW83dC0WsT5ZQ2vUBn8ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMX8WJ%2FSDXkW56AdO2KtwDGKf9Dox%2BzA5VPfI6KfEQKgtsr7nccZSM9zliEm9P%2FJfYKPE9zZGF4Wz9ogorSGZ%2BmeGWRpsxXzJ4UvpYonyLqYmmZ8TUCCppcfUA8qpl4SbLTOvsaaEMBbp6hp74OnSn8FwdvXgChcIv0O7%2F79jYucnIQDh03NWPBW3JPx0AUX6MRN2Q9W6%2F8gHxF6WmhOw2g%2B879DgtNAVxpMHjhDnTrCeRKhT%2BpW1RJH3aciX9Yo4LFQf9XOBKvFVC6iSvEBAnUUfd1wqlpKpgIvy3rhBuIk%2BmTZUfQ1brTi5FQYY3V8n%2B3CqirGUV4sFwrLC8NWtPBRTm9bZ57sE8%2F2sC%2Fcx%2BsYvNqBXcek8olY4nfcHZkQT2FdJYbjvVrBLs6oSKwujSv2YEu7mFMD6YlU4GTPXb2T9BGhrujxXuBsa7l25HQ92zyKIlSwYMaZkTpdZdtCKciZadlksAmnt%2FOSmKjPTDQHoS2D838jPyKaEf%2FpBTe4NRJrCobL9Rmtlt5FEn6N5ao2UIZWksxk8ZLeFa6bHsLqcmydQI4n%2B9Trj5i2IU%2F3LcOo%2BEd0AJOvm9uC277Wp2u2OTG0zoPT22MTZ0UQ5Ek7WkfkkkBHY6XBE285z63A9J9HTR0YicnR%2BDHpIwju%2F7xAY6pgEOUpWI6k190bkSCATIYKja2F7SNKXdrlzuhc40JeA05LfBAE5gI1q8NCvyKMqo%2FLGhkSu9U5MsKSTREcOEGMcqalE4j1EX1YQqwHLmAA2556zEgIDNVkeF5yZYsvVR70LXWRepQgey2J0%2Femgs0JD9as1sCLyDIBlLBP5jrGr14oeQADYHXu9qTGoSjilXaUbIVfE3u7z3eK69useyA4PtJnmEoGRU&X-Amz-Signature=4219be3b19d37ca843e8828a74fae6b04a34db2fe6d3c15d8d0f8effdf6e876a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PM6K7RY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID%2BJeftPSd098W3sfn8YAGgNC4dsv0Bs1R0jg%2BeXYebLAiAn%2B0i3VcY33YjM3kwdxwuvU6hW83dC0WsT5ZQ2vUBn8ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMX8WJ%2FSDXkW56AdO2KtwDGKf9Dox%2BzA5VPfI6KfEQKgtsr7nccZSM9zliEm9P%2FJfYKPE9zZGF4Wz9ogorSGZ%2BmeGWRpsxXzJ4UvpYonyLqYmmZ8TUCCppcfUA8qpl4SbLTOvsaaEMBbp6hp74OnSn8FwdvXgChcIv0O7%2F79jYucnIQDh03NWPBW3JPx0AUX6MRN2Q9W6%2F8gHxF6WmhOw2g%2B879DgtNAVxpMHjhDnTrCeRKhT%2BpW1RJH3aciX9Yo4LFQf9XOBKvFVC6iSvEBAnUUfd1wqlpKpgIvy3rhBuIk%2BmTZUfQ1brTi5FQYY3V8n%2B3CqirGUV4sFwrLC8NWtPBRTm9bZ57sE8%2F2sC%2Fcx%2BsYvNqBXcek8olY4nfcHZkQT2FdJYbjvVrBLs6oSKwujSv2YEu7mFMD6YlU4GTPXb2T9BGhrujxXuBsa7l25HQ92zyKIlSwYMaZkTpdZdtCKciZadlksAmnt%2FOSmKjPTDQHoS2D838jPyKaEf%2FpBTe4NRJrCobL9Rmtlt5FEn6N5ao2UIZWksxk8ZLeFa6bHsLqcmydQI4n%2B9Trj5i2IU%2F3LcOo%2BEd0AJOvm9uC277Wp2u2OTG0zoPT22MTZ0UQ5Ek7WkfkkkBHY6XBE285z63A9J9HTR0YicnR%2BDHpIwju%2F7xAY6pgEOUpWI6k190bkSCATIYKja2F7SNKXdrlzuhc40JeA05LfBAE5gI1q8NCvyKMqo%2FLGhkSu9U5MsKSTREcOEGMcqalE4j1EX1YQqwHLmAA2556zEgIDNVkeF5yZYsvVR70LXWRepQgey2J0%2Femgs0JD9as1sCLyDIBlLBP5jrGr14oeQADYHXu9qTGoSjilXaUbIVfE3u7z3eK69useyA4PtJnmEoGRU&X-Amz-Signature=e2861da1babd668b86037c96fb70844766ad80eda77248a812415ceaf2e86e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PM6K7RY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID%2BJeftPSd098W3sfn8YAGgNC4dsv0Bs1R0jg%2BeXYebLAiAn%2B0i3VcY33YjM3kwdxwuvU6hW83dC0WsT5ZQ2vUBn8ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMX8WJ%2FSDXkW56AdO2KtwDGKf9Dox%2BzA5VPfI6KfEQKgtsr7nccZSM9zliEm9P%2FJfYKPE9zZGF4Wz9ogorSGZ%2BmeGWRpsxXzJ4UvpYonyLqYmmZ8TUCCppcfUA8qpl4SbLTOvsaaEMBbp6hp74OnSn8FwdvXgChcIv0O7%2F79jYucnIQDh03NWPBW3JPx0AUX6MRN2Q9W6%2F8gHxF6WmhOw2g%2B879DgtNAVxpMHjhDnTrCeRKhT%2BpW1RJH3aciX9Yo4LFQf9XOBKvFVC6iSvEBAnUUfd1wqlpKpgIvy3rhBuIk%2BmTZUfQ1brTi5FQYY3V8n%2B3CqirGUV4sFwrLC8NWtPBRTm9bZ57sE8%2F2sC%2Fcx%2BsYvNqBXcek8olY4nfcHZkQT2FdJYbjvVrBLs6oSKwujSv2YEu7mFMD6YlU4GTPXb2T9BGhrujxXuBsa7l25HQ92zyKIlSwYMaZkTpdZdtCKciZadlksAmnt%2FOSmKjPTDQHoS2D838jPyKaEf%2FpBTe4NRJrCobL9Rmtlt5FEn6N5ao2UIZWksxk8ZLeFa6bHsLqcmydQI4n%2B9Trj5i2IU%2F3LcOo%2BEd0AJOvm9uC277Wp2u2OTG0zoPT22MTZ0UQ5Ek7WkfkkkBHY6XBE285z63A9J9HTR0YicnR%2BDHpIwju%2F7xAY6pgEOUpWI6k190bkSCATIYKja2F7SNKXdrlzuhc40JeA05LfBAE5gI1q8NCvyKMqo%2FLGhkSu9U5MsKSTREcOEGMcqalE4j1EX1YQqwHLmAA2556zEgIDNVkeF5yZYsvVR70LXWRepQgey2J0%2Femgs0JD9as1sCLyDIBlLBP5jrGr14oeQADYHXu9qTGoSjilXaUbIVfE3u7z3eK69useyA4PtJnmEoGRU&X-Amz-Signature=25ebc52723d2e7a39f6ed32e001f628e02548e996ceb0550044d9dc9a9d209c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PM6K7RY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID%2BJeftPSd098W3sfn8YAGgNC4dsv0Bs1R0jg%2BeXYebLAiAn%2B0i3VcY33YjM3kwdxwuvU6hW83dC0WsT5ZQ2vUBn8ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMX8WJ%2FSDXkW56AdO2KtwDGKf9Dox%2BzA5VPfI6KfEQKgtsr7nccZSM9zliEm9P%2FJfYKPE9zZGF4Wz9ogorSGZ%2BmeGWRpsxXzJ4UvpYonyLqYmmZ8TUCCppcfUA8qpl4SbLTOvsaaEMBbp6hp74OnSn8FwdvXgChcIv0O7%2F79jYucnIQDh03NWPBW3JPx0AUX6MRN2Q9W6%2F8gHxF6WmhOw2g%2B879DgtNAVxpMHjhDnTrCeRKhT%2BpW1RJH3aciX9Yo4LFQf9XOBKvFVC6iSvEBAnUUfd1wqlpKpgIvy3rhBuIk%2BmTZUfQ1brTi5FQYY3V8n%2B3CqirGUV4sFwrLC8NWtPBRTm9bZ57sE8%2F2sC%2Fcx%2BsYvNqBXcek8olY4nfcHZkQT2FdJYbjvVrBLs6oSKwujSv2YEu7mFMD6YlU4GTPXb2T9BGhrujxXuBsa7l25HQ92zyKIlSwYMaZkTpdZdtCKciZadlksAmnt%2FOSmKjPTDQHoS2D838jPyKaEf%2FpBTe4NRJrCobL9Rmtlt5FEn6N5ao2UIZWksxk8ZLeFa6bHsLqcmydQI4n%2B9Trj5i2IU%2F3LcOo%2BEd0AJOvm9uC277Wp2u2OTG0zoPT22MTZ0UQ5Ek7WkfkkkBHY6XBE285z63A9J9HTR0YicnR%2BDHpIwju%2F7xAY6pgEOUpWI6k190bkSCATIYKja2F7SNKXdrlzuhc40JeA05LfBAE5gI1q8NCvyKMqo%2FLGhkSu9U5MsKSTREcOEGMcqalE4j1EX1YQqwHLmAA2556zEgIDNVkeF5yZYsvVR70LXWRepQgey2J0%2Femgs0JD9as1sCLyDIBlLBP5jrGr14oeQADYHXu9qTGoSjilXaUbIVfE3u7z3eK69useyA4PtJnmEoGRU&X-Amz-Signature=1b3eb22e81b939a2f2cbf5776531300f3012a38e6a054cdbaef242d9f586fe52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PM6K7RY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID%2BJeftPSd098W3sfn8YAGgNC4dsv0Bs1R0jg%2BeXYebLAiAn%2B0i3VcY33YjM3kwdxwuvU6hW83dC0WsT5ZQ2vUBn8ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMX8WJ%2FSDXkW56AdO2KtwDGKf9Dox%2BzA5VPfI6KfEQKgtsr7nccZSM9zliEm9P%2FJfYKPE9zZGF4Wz9ogorSGZ%2BmeGWRpsxXzJ4UvpYonyLqYmmZ8TUCCppcfUA8qpl4SbLTOvsaaEMBbp6hp74OnSn8FwdvXgChcIv0O7%2F79jYucnIQDh03NWPBW3JPx0AUX6MRN2Q9W6%2F8gHxF6WmhOw2g%2B879DgtNAVxpMHjhDnTrCeRKhT%2BpW1RJH3aciX9Yo4LFQf9XOBKvFVC6iSvEBAnUUfd1wqlpKpgIvy3rhBuIk%2BmTZUfQ1brTi5FQYY3V8n%2B3CqirGUV4sFwrLC8NWtPBRTm9bZ57sE8%2F2sC%2Fcx%2BsYvNqBXcek8olY4nfcHZkQT2FdJYbjvVrBLs6oSKwujSv2YEu7mFMD6YlU4GTPXb2T9BGhrujxXuBsa7l25HQ92zyKIlSwYMaZkTpdZdtCKciZadlksAmnt%2FOSmKjPTDQHoS2D838jPyKaEf%2FpBTe4NRJrCobL9Rmtlt5FEn6N5ao2UIZWksxk8ZLeFa6bHsLqcmydQI4n%2B9Trj5i2IU%2F3LcOo%2BEd0AJOvm9uC277Wp2u2OTG0zoPT22MTZ0UQ5Ek7WkfkkkBHY6XBE285z63A9J9HTR0YicnR%2BDHpIwju%2F7xAY6pgEOUpWI6k190bkSCATIYKja2F7SNKXdrlzuhc40JeA05LfBAE5gI1q8NCvyKMqo%2FLGhkSu9U5MsKSTREcOEGMcqalE4j1EX1YQqwHLmAA2556zEgIDNVkeF5yZYsvVR70LXWRepQgey2J0%2Femgs0JD9as1sCLyDIBlLBP5jrGr14oeQADYHXu9qTGoSjilXaUbIVfE3u7z3eK69useyA4PtJnmEoGRU&X-Amz-Signature=a3bb6d0b0513e671f7b6ac6e747a208c5b7154f44b5caacd55358f168320e8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PM6K7RY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID%2BJeftPSd098W3sfn8YAGgNC4dsv0Bs1R0jg%2BeXYebLAiAn%2B0i3VcY33YjM3kwdxwuvU6hW83dC0WsT5ZQ2vUBn8ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMX8WJ%2FSDXkW56AdO2KtwDGKf9Dox%2BzA5VPfI6KfEQKgtsr7nccZSM9zliEm9P%2FJfYKPE9zZGF4Wz9ogorSGZ%2BmeGWRpsxXzJ4UvpYonyLqYmmZ8TUCCppcfUA8qpl4SbLTOvsaaEMBbp6hp74OnSn8FwdvXgChcIv0O7%2F79jYucnIQDh03NWPBW3JPx0AUX6MRN2Q9W6%2F8gHxF6WmhOw2g%2B879DgtNAVxpMHjhDnTrCeRKhT%2BpW1RJH3aciX9Yo4LFQf9XOBKvFVC6iSvEBAnUUfd1wqlpKpgIvy3rhBuIk%2BmTZUfQ1brTi5FQYY3V8n%2B3CqirGUV4sFwrLC8NWtPBRTm9bZ57sE8%2F2sC%2Fcx%2BsYvNqBXcek8olY4nfcHZkQT2FdJYbjvVrBLs6oSKwujSv2YEu7mFMD6YlU4GTPXb2T9BGhrujxXuBsa7l25HQ92zyKIlSwYMaZkTpdZdtCKciZadlksAmnt%2FOSmKjPTDQHoS2D838jPyKaEf%2FpBTe4NRJrCobL9Rmtlt5FEn6N5ao2UIZWksxk8ZLeFa6bHsLqcmydQI4n%2B9Trj5i2IU%2F3LcOo%2BEd0AJOvm9uC277Wp2u2OTG0zoPT22MTZ0UQ5Ek7WkfkkkBHY6XBE285z63A9J9HTR0YicnR%2BDHpIwju%2F7xAY6pgEOUpWI6k190bkSCATIYKja2F7SNKXdrlzuhc40JeA05LfBAE5gI1q8NCvyKMqo%2FLGhkSu9U5MsKSTREcOEGMcqalE4j1EX1YQqwHLmAA2556zEgIDNVkeF5yZYsvVR70LXWRepQgey2J0%2Femgs0JD9as1sCLyDIBlLBP5jrGr14oeQADYHXu9qTGoSjilXaUbIVfE3u7z3eK69useyA4PtJnmEoGRU&X-Amz-Signature=da58781bb15ab73101d6f7512adfa6a14bca8bf1b8f5d0784c9bf54cf694145a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PM6K7RY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCID%2BJeftPSd098W3sfn8YAGgNC4dsv0Bs1R0jg%2BeXYebLAiAn%2B0i3VcY33YjM3kwdxwuvU6hW83dC0WsT5ZQ2vUBn8ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMX8WJ%2FSDXkW56AdO2KtwDGKf9Dox%2BzA5VPfI6KfEQKgtsr7nccZSM9zliEm9P%2FJfYKPE9zZGF4Wz9ogorSGZ%2BmeGWRpsxXzJ4UvpYonyLqYmmZ8TUCCppcfUA8qpl4SbLTOvsaaEMBbp6hp74OnSn8FwdvXgChcIv0O7%2F79jYucnIQDh03NWPBW3JPx0AUX6MRN2Q9W6%2F8gHxF6WmhOw2g%2B879DgtNAVxpMHjhDnTrCeRKhT%2BpW1RJH3aciX9Yo4LFQf9XOBKvFVC6iSvEBAnUUfd1wqlpKpgIvy3rhBuIk%2BmTZUfQ1brTi5FQYY3V8n%2B3CqirGUV4sFwrLC8NWtPBRTm9bZ57sE8%2F2sC%2Fcx%2BsYvNqBXcek8olY4nfcHZkQT2FdJYbjvVrBLs6oSKwujSv2YEu7mFMD6YlU4GTPXb2T9BGhrujxXuBsa7l25HQ92zyKIlSwYMaZkTpdZdtCKciZadlksAmnt%2FOSmKjPTDQHoS2D838jPyKaEf%2FpBTe4NRJrCobL9Rmtlt5FEn6N5ao2UIZWksxk8ZLeFa6bHsLqcmydQI4n%2B9Trj5i2IU%2F3LcOo%2BEd0AJOvm9uC277Wp2u2OTG0zoPT22MTZ0UQ5Ek7WkfkkkBHY6XBE285z63A9J9HTR0YicnR%2BDHpIwju%2F7xAY6pgEOUpWI6k190bkSCATIYKja2F7SNKXdrlzuhc40JeA05LfBAE5gI1q8NCvyKMqo%2FLGhkSu9U5MsKSTREcOEGMcqalE4j1EX1YQqwHLmAA2556zEgIDNVkeF5yZYsvVR70LXWRepQgey2J0%2Femgs0JD9as1sCLyDIBlLBP5jrGr14oeQADYHXu9qTGoSjilXaUbIVfE3u7z3eK69useyA4PtJnmEoGRU&X-Amz-Signature=ffd4002443cf71dcc5d6d4f22d9a4d2c6c069811fcc4cf43fae2f6a5fddc3e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
