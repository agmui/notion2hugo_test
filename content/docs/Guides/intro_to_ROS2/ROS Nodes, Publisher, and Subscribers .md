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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIORJV24%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2FJsHAIuV7y9xrsCWdRCcqX1AYeOjNy%2BntM42QLmyQAIgUFIhlfF8T8WHiDNfubDWEmqGH0cmU0sFtu%2BEuTRyu8YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrEQvU9OHw2moKM3CrcA1dmtsha21u0yEG54crhInkzPyXqhTY83kZHNQOmiQc5QcS5fT8U5ljx33KnNGG3uA30uwTG9rBKaKolRW0KoyC%2FKLI86FrQ13SNX9MhLudTrijxpU3wwQwHO%2FQDhlyGTpG14Xabb9hHRTodgnQfzgfsesjeXnosu17PTvdYeebRcNZpcZw5Jf2apfrhebcrtLz3ot7nvzk2zLhMoMQFgrU36x8wy3kpy%2BcoA2eTv8FYUsnWAibxFwktOnvEKNk36Qkm8t0rlFKqH35uZ22%2FeFAFzfE3oh4biikI%2BEpHk%2F1sZOCb%2FSnZQ1Zszc7dk1yuYDgCOnQIG3uEukNESYCCdOGIFot9LOA5%2BkzHvCxTLLfD8gwo8Glg9qOKyKYMM7Fa2jWqOtVqy9OQvG56ZVhsK%2Fw5IWKEU%2BEIPlXdJ7B1Cvqdgs3gKy%2BD%2BdMIB%2B4Mepe48a7fxkEtzkIOa%2BYJ3RN%2FeocPEf959mEw62cGEqiOtJzaWztY0kmaM4X2T0btLEpkJpHB7CrrVjzQnOXcNS4QLfvXRBfWhKWzSOOgI1k%2FtVNSI3lvVywMNe%2FlAWyrBXefUvF3DCuWSX8JfJ3MMl0qYxRYnnvqcngObjmVdIWLwoXsV4noqDKsz3uMPCOHMLW%2F4sQGOqUBLRQ2MrnF1oHhHA0tbL%2F6ZZYlSsniiLq3usCiw89xTlXm8cy8cbDo%2BMJsaY%2FvsU7VV0zgnzBw1QfuP6vN%2FTxmQiJuO%2BY36EsFnWi%2FEGfFKnER0ZhaaGfvi2qHx6DGMRbP%2BcKnuW91D%2BhZGzMXBqLHRY9ZNonjI1YSt1WB7E2uWQ9g2zPhpXtMqYWeJQS%2Fc7Xghz8%2BKgHus1ypJZ9gQFHiC9ioJCBo&X-Amz-Signature=9c760f0b77c6675d5830349570a885a043182377472c09c9c358c598dea6a802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIORJV24%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2FJsHAIuV7y9xrsCWdRCcqX1AYeOjNy%2BntM42QLmyQAIgUFIhlfF8T8WHiDNfubDWEmqGH0cmU0sFtu%2BEuTRyu8YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrEQvU9OHw2moKM3CrcA1dmtsha21u0yEG54crhInkzPyXqhTY83kZHNQOmiQc5QcS5fT8U5ljx33KnNGG3uA30uwTG9rBKaKolRW0KoyC%2FKLI86FrQ13SNX9MhLudTrijxpU3wwQwHO%2FQDhlyGTpG14Xabb9hHRTodgnQfzgfsesjeXnosu17PTvdYeebRcNZpcZw5Jf2apfrhebcrtLz3ot7nvzk2zLhMoMQFgrU36x8wy3kpy%2BcoA2eTv8FYUsnWAibxFwktOnvEKNk36Qkm8t0rlFKqH35uZ22%2FeFAFzfE3oh4biikI%2BEpHk%2F1sZOCb%2FSnZQ1Zszc7dk1yuYDgCOnQIG3uEukNESYCCdOGIFot9LOA5%2BkzHvCxTLLfD8gwo8Glg9qOKyKYMM7Fa2jWqOtVqy9OQvG56ZVhsK%2Fw5IWKEU%2BEIPlXdJ7B1Cvqdgs3gKy%2BD%2BdMIB%2B4Mepe48a7fxkEtzkIOa%2BYJ3RN%2FeocPEf959mEw62cGEqiOtJzaWztY0kmaM4X2T0btLEpkJpHB7CrrVjzQnOXcNS4QLfvXRBfWhKWzSOOgI1k%2FtVNSI3lvVywMNe%2FlAWyrBXefUvF3DCuWSX8JfJ3MMl0qYxRYnnvqcngObjmVdIWLwoXsV4noqDKsz3uMPCOHMLW%2F4sQGOqUBLRQ2MrnF1oHhHA0tbL%2F6ZZYlSsniiLq3usCiw89xTlXm8cy8cbDo%2BMJsaY%2FvsU7VV0zgnzBw1QfuP6vN%2FTxmQiJuO%2BY36EsFnWi%2FEGfFKnER0ZhaaGfvi2qHx6DGMRbP%2BcKnuW91D%2BhZGzMXBqLHRY9ZNonjI1YSt1WB7E2uWQ9g2zPhpXtMqYWeJQS%2Fc7Xghz8%2BKgHus1ypJZ9gQFHiC9ioJCBo&X-Amz-Signature=cfd032527e5b9e7be6393c568ce66f69e40c19f872d907c207082722a0212fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIORJV24%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2FJsHAIuV7y9xrsCWdRCcqX1AYeOjNy%2BntM42QLmyQAIgUFIhlfF8T8WHiDNfubDWEmqGH0cmU0sFtu%2BEuTRyu8YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrEQvU9OHw2moKM3CrcA1dmtsha21u0yEG54crhInkzPyXqhTY83kZHNQOmiQc5QcS5fT8U5ljx33KnNGG3uA30uwTG9rBKaKolRW0KoyC%2FKLI86FrQ13SNX9MhLudTrijxpU3wwQwHO%2FQDhlyGTpG14Xabb9hHRTodgnQfzgfsesjeXnosu17PTvdYeebRcNZpcZw5Jf2apfrhebcrtLz3ot7nvzk2zLhMoMQFgrU36x8wy3kpy%2BcoA2eTv8FYUsnWAibxFwktOnvEKNk36Qkm8t0rlFKqH35uZ22%2FeFAFzfE3oh4biikI%2BEpHk%2F1sZOCb%2FSnZQ1Zszc7dk1yuYDgCOnQIG3uEukNESYCCdOGIFot9LOA5%2BkzHvCxTLLfD8gwo8Glg9qOKyKYMM7Fa2jWqOtVqy9OQvG56ZVhsK%2Fw5IWKEU%2BEIPlXdJ7B1Cvqdgs3gKy%2BD%2BdMIB%2B4Mepe48a7fxkEtzkIOa%2BYJ3RN%2FeocPEf959mEw62cGEqiOtJzaWztY0kmaM4X2T0btLEpkJpHB7CrrVjzQnOXcNS4QLfvXRBfWhKWzSOOgI1k%2FtVNSI3lvVywMNe%2FlAWyrBXefUvF3DCuWSX8JfJ3MMl0qYxRYnnvqcngObjmVdIWLwoXsV4noqDKsz3uMPCOHMLW%2F4sQGOqUBLRQ2MrnF1oHhHA0tbL%2F6ZZYlSsniiLq3usCiw89xTlXm8cy8cbDo%2BMJsaY%2FvsU7VV0zgnzBw1QfuP6vN%2FTxmQiJuO%2BY36EsFnWi%2FEGfFKnER0ZhaaGfvi2qHx6DGMRbP%2BcKnuW91D%2BhZGzMXBqLHRY9ZNonjI1YSt1WB7E2uWQ9g2zPhpXtMqYWeJQS%2Fc7Xghz8%2BKgHus1ypJZ9gQFHiC9ioJCBo&X-Amz-Signature=f72968ab231c994d53534d9a2abc42f8b35fcadd3aca188516ae5855fa996c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIORJV24%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2FJsHAIuV7y9xrsCWdRCcqX1AYeOjNy%2BntM42QLmyQAIgUFIhlfF8T8WHiDNfubDWEmqGH0cmU0sFtu%2BEuTRyu8YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrEQvU9OHw2moKM3CrcA1dmtsha21u0yEG54crhInkzPyXqhTY83kZHNQOmiQc5QcS5fT8U5ljx33KnNGG3uA30uwTG9rBKaKolRW0KoyC%2FKLI86FrQ13SNX9MhLudTrijxpU3wwQwHO%2FQDhlyGTpG14Xabb9hHRTodgnQfzgfsesjeXnosu17PTvdYeebRcNZpcZw5Jf2apfrhebcrtLz3ot7nvzk2zLhMoMQFgrU36x8wy3kpy%2BcoA2eTv8FYUsnWAibxFwktOnvEKNk36Qkm8t0rlFKqH35uZ22%2FeFAFzfE3oh4biikI%2BEpHk%2F1sZOCb%2FSnZQ1Zszc7dk1yuYDgCOnQIG3uEukNESYCCdOGIFot9LOA5%2BkzHvCxTLLfD8gwo8Glg9qOKyKYMM7Fa2jWqOtVqy9OQvG56ZVhsK%2Fw5IWKEU%2BEIPlXdJ7B1Cvqdgs3gKy%2BD%2BdMIB%2B4Mepe48a7fxkEtzkIOa%2BYJ3RN%2FeocPEf959mEw62cGEqiOtJzaWztY0kmaM4X2T0btLEpkJpHB7CrrVjzQnOXcNS4QLfvXRBfWhKWzSOOgI1k%2FtVNSI3lvVywMNe%2FlAWyrBXefUvF3DCuWSX8JfJ3MMl0qYxRYnnvqcngObjmVdIWLwoXsV4noqDKsz3uMPCOHMLW%2F4sQGOqUBLRQ2MrnF1oHhHA0tbL%2F6ZZYlSsniiLq3usCiw89xTlXm8cy8cbDo%2BMJsaY%2FvsU7VV0zgnzBw1QfuP6vN%2FTxmQiJuO%2BY36EsFnWi%2FEGfFKnER0ZhaaGfvi2qHx6DGMRbP%2BcKnuW91D%2BhZGzMXBqLHRY9ZNonjI1YSt1WB7E2uWQ9g2zPhpXtMqYWeJQS%2Fc7Xghz8%2BKgHus1ypJZ9gQFHiC9ioJCBo&X-Amz-Signature=cfe5abb5624abefcdf8a5fed0fe0e31b0a04b823d6c8e4cfcd9d14b19ea4f680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIORJV24%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2FJsHAIuV7y9xrsCWdRCcqX1AYeOjNy%2BntM42QLmyQAIgUFIhlfF8T8WHiDNfubDWEmqGH0cmU0sFtu%2BEuTRyu8YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrEQvU9OHw2moKM3CrcA1dmtsha21u0yEG54crhInkzPyXqhTY83kZHNQOmiQc5QcS5fT8U5ljx33KnNGG3uA30uwTG9rBKaKolRW0KoyC%2FKLI86FrQ13SNX9MhLudTrijxpU3wwQwHO%2FQDhlyGTpG14Xabb9hHRTodgnQfzgfsesjeXnosu17PTvdYeebRcNZpcZw5Jf2apfrhebcrtLz3ot7nvzk2zLhMoMQFgrU36x8wy3kpy%2BcoA2eTv8FYUsnWAibxFwktOnvEKNk36Qkm8t0rlFKqH35uZ22%2FeFAFzfE3oh4biikI%2BEpHk%2F1sZOCb%2FSnZQ1Zszc7dk1yuYDgCOnQIG3uEukNESYCCdOGIFot9LOA5%2BkzHvCxTLLfD8gwo8Glg9qOKyKYMM7Fa2jWqOtVqy9OQvG56ZVhsK%2Fw5IWKEU%2BEIPlXdJ7B1Cvqdgs3gKy%2BD%2BdMIB%2B4Mepe48a7fxkEtzkIOa%2BYJ3RN%2FeocPEf959mEw62cGEqiOtJzaWztY0kmaM4X2T0btLEpkJpHB7CrrVjzQnOXcNS4QLfvXRBfWhKWzSOOgI1k%2FtVNSI3lvVywMNe%2FlAWyrBXefUvF3DCuWSX8JfJ3MMl0qYxRYnnvqcngObjmVdIWLwoXsV4noqDKsz3uMPCOHMLW%2F4sQGOqUBLRQ2MrnF1oHhHA0tbL%2F6ZZYlSsniiLq3usCiw89xTlXm8cy8cbDo%2BMJsaY%2FvsU7VV0zgnzBw1QfuP6vN%2FTxmQiJuO%2BY36EsFnWi%2FEGfFKnER0ZhaaGfvi2qHx6DGMRbP%2BcKnuW91D%2BhZGzMXBqLHRY9ZNonjI1YSt1WB7E2uWQ9g2zPhpXtMqYWeJQS%2Fc7Xghz8%2BKgHus1ypJZ9gQFHiC9ioJCBo&X-Amz-Signature=6bc9031a1160b8221441fda316ce01e8872b8e9e49fae9bbf0c95c1c2ea3edfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIORJV24%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2FJsHAIuV7y9xrsCWdRCcqX1AYeOjNy%2BntM42QLmyQAIgUFIhlfF8T8WHiDNfubDWEmqGH0cmU0sFtu%2BEuTRyu8YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrEQvU9OHw2moKM3CrcA1dmtsha21u0yEG54crhInkzPyXqhTY83kZHNQOmiQc5QcS5fT8U5ljx33KnNGG3uA30uwTG9rBKaKolRW0KoyC%2FKLI86FrQ13SNX9MhLudTrijxpU3wwQwHO%2FQDhlyGTpG14Xabb9hHRTodgnQfzgfsesjeXnosu17PTvdYeebRcNZpcZw5Jf2apfrhebcrtLz3ot7nvzk2zLhMoMQFgrU36x8wy3kpy%2BcoA2eTv8FYUsnWAibxFwktOnvEKNk36Qkm8t0rlFKqH35uZ22%2FeFAFzfE3oh4biikI%2BEpHk%2F1sZOCb%2FSnZQ1Zszc7dk1yuYDgCOnQIG3uEukNESYCCdOGIFot9LOA5%2BkzHvCxTLLfD8gwo8Glg9qOKyKYMM7Fa2jWqOtVqy9OQvG56ZVhsK%2Fw5IWKEU%2BEIPlXdJ7B1Cvqdgs3gKy%2BD%2BdMIB%2B4Mepe48a7fxkEtzkIOa%2BYJ3RN%2FeocPEf959mEw62cGEqiOtJzaWztY0kmaM4X2T0btLEpkJpHB7CrrVjzQnOXcNS4QLfvXRBfWhKWzSOOgI1k%2FtVNSI3lvVywMNe%2FlAWyrBXefUvF3DCuWSX8JfJ3MMl0qYxRYnnvqcngObjmVdIWLwoXsV4noqDKsz3uMPCOHMLW%2F4sQGOqUBLRQ2MrnF1oHhHA0tbL%2F6ZZYlSsniiLq3usCiw89xTlXm8cy8cbDo%2BMJsaY%2FvsU7VV0zgnzBw1QfuP6vN%2FTxmQiJuO%2BY36EsFnWi%2FEGfFKnER0ZhaaGfvi2qHx6DGMRbP%2BcKnuW91D%2BhZGzMXBqLHRY9ZNonjI1YSt1WB7E2uWQ9g2zPhpXtMqYWeJQS%2Fc7Xghz8%2BKgHus1ypJZ9gQFHiC9ioJCBo&X-Amz-Signature=69eae44473c59ca1cd975f449dca6558aa8d423946bb2e4246ede6abb8e126e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIORJV24%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2FJsHAIuV7y9xrsCWdRCcqX1AYeOjNy%2BntM42QLmyQAIgUFIhlfF8T8WHiDNfubDWEmqGH0cmU0sFtu%2BEuTRyu8YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrEQvU9OHw2moKM3CrcA1dmtsha21u0yEG54crhInkzPyXqhTY83kZHNQOmiQc5QcS5fT8U5ljx33KnNGG3uA30uwTG9rBKaKolRW0KoyC%2FKLI86FrQ13SNX9MhLudTrijxpU3wwQwHO%2FQDhlyGTpG14Xabb9hHRTodgnQfzgfsesjeXnosu17PTvdYeebRcNZpcZw5Jf2apfrhebcrtLz3ot7nvzk2zLhMoMQFgrU36x8wy3kpy%2BcoA2eTv8FYUsnWAibxFwktOnvEKNk36Qkm8t0rlFKqH35uZ22%2FeFAFzfE3oh4biikI%2BEpHk%2F1sZOCb%2FSnZQ1Zszc7dk1yuYDgCOnQIG3uEukNESYCCdOGIFot9LOA5%2BkzHvCxTLLfD8gwo8Glg9qOKyKYMM7Fa2jWqOtVqy9OQvG56ZVhsK%2Fw5IWKEU%2BEIPlXdJ7B1Cvqdgs3gKy%2BD%2BdMIB%2B4Mepe48a7fxkEtzkIOa%2BYJ3RN%2FeocPEf959mEw62cGEqiOtJzaWztY0kmaM4X2T0btLEpkJpHB7CrrVjzQnOXcNS4QLfvXRBfWhKWzSOOgI1k%2FtVNSI3lvVywMNe%2FlAWyrBXefUvF3DCuWSX8JfJ3MMl0qYxRYnnvqcngObjmVdIWLwoXsV4noqDKsz3uMPCOHMLW%2F4sQGOqUBLRQ2MrnF1oHhHA0tbL%2F6ZZYlSsniiLq3usCiw89xTlXm8cy8cbDo%2BMJsaY%2FvsU7VV0zgnzBw1QfuP6vN%2FTxmQiJuO%2BY36EsFnWi%2FEGfFKnER0ZhaaGfvi2qHx6DGMRbP%2BcKnuW91D%2BhZGzMXBqLHRY9ZNonjI1YSt1WB7E2uWQ9g2zPhpXtMqYWeJQS%2Fc7Xghz8%2BKgHus1ypJZ9gQFHiC9ioJCBo&X-Amz-Signature=297a2f282e7c93765c41c04711110c48c28b61d77e699738dd1bf58b7d98b86d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIORJV24%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2FJsHAIuV7y9xrsCWdRCcqX1AYeOjNy%2BntM42QLmyQAIgUFIhlfF8T8WHiDNfubDWEmqGH0cmU0sFtu%2BEuTRyu8YqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDrEQvU9OHw2moKM3CrcA1dmtsha21u0yEG54crhInkzPyXqhTY83kZHNQOmiQc5QcS5fT8U5ljx33KnNGG3uA30uwTG9rBKaKolRW0KoyC%2FKLI86FrQ13SNX9MhLudTrijxpU3wwQwHO%2FQDhlyGTpG14Xabb9hHRTodgnQfzgfsesjeXnosu17PTvdYeebRcNZpcZw5Jf2apfrhebcrtLz3ot7nvzk2zLhMoMQFgrU36x8wy3kpy%2BcoA2eTv8FYUsnWAibxFwktOnvEKNk36Qkm8t0rlFKqH35uZ22%2FeFAFzfE3oh4biikI%2BEpHk%2F1sZOCb%2FSnZQ1Zszc7dk1yuYDgCOnQIG3uEukNESYCCdOGIFot9LOA5%2BkzHvCxTLLfD8gwo8Glg9qOKyKYMM7Fa2jWqOtVqy9OQvG56ZVhsK%2Fw5IWKEU%2BEIPlXdJ7B1Cvqdgs3gKy%2BD%2BdMIB%2B4Mepe48a7fxkEtzkIOa%2BYJ3RN%2FeocPEf959mEw62cGEqiOtJzaWztY0kmaM4X2T0btLEpkJpHB7CrrVjzQnOXcNS4QLfvXRBfWhKWzSOOgI1k%2FtVNSI3lvVywMNe%2FlAWyrBXefUvF3DCuWSX8JfJ3MMl0qYxRYnnvqcngObjmVdIWLwoXsV4noqDKsz3uMPCOHMLW%2F4sQGOqUBLRQ2MrnF1oHhHA0tbL%2F6ZZYlSsniiLq3usCiw89xTlXm8cy8cbDo%2BMJsaY%2FvsU7VV0zgnzBw1QfuP6vN%2FTxmQiJuO%2BY36EsFnWi%2FEGfFKnER0ZhaaGfvi2qHx6DGMRbP%2BcKnuW91D%2BhZGzMXBqLHRY9ZNonjI1YSt1WB7E2uWQ9g2zPhpXtMqYWeJQS%2Fc7Xghz8%2BKgHus1ypJZ9gQFHiC9ioJCBo&X-Amz-Signature=283ce3cad5f35cbfe67ebdacc9311af02c626ab3a5cc5f0e980c857c21f7abea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
