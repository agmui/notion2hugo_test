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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3DT7X7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B8fW4l0BDptLLkgku9NNQCvrACf8caEY5fXp3g6laNwIhAKCTuKi1l6fmiVhVSB0t7lN7alqg5jB7ZgZpXHWd3KopKv8DCHIQABoMNjM3NDIzMTgzODA1IgzNNAERP0MD9SqHoiUq3AMAA9qXrh5q2SPu6py0tMu4t%2F7w83HCD4kwerAvgAU2GKXMjuam8V23%2FAVk4lojpKQBci2vkPMy3UTksuB8ftGvJrytbr72wRshrb9U2oyFhRP09YQIuufYbp7CZoQDVMr0c%2FV0%2Bd4O750Hr5VueW88Tm3S96KlqEjSWe1DwXJghu2JfvahhvpQvQH28mz3XopBi12SJGj60tWWHLsy33ZZsBbm1ZBispmJB89RXIbQ3rmSrWRza3YcbQCer943qMBqc0VAVjQbnkGdw8rrtgIFpkjsCc62n86Lmn7yjJ6%2F4qXKvQzt%2BYgMrQfY%2Bcr5A0d4%2FnGBKmggQTdKgpu0%2FlWg0wfmSI4m%2BzZ%2B7ufhZTaUvtFon4mnGwh8z8C%2F%2BUx20budH8SoO5g3RNkpJXmLsikU4HhE1aVI76FzuXJliPOLHNyR4%2BghJoUxIH6PW%2FEjH2qv%2F1RvBQvkJ84i00v2HxBztcxSARGW90UwwAuLLqJK%2FDRH%2FX%2FJiWEafjFstfO%2B8WMgwSVM1PAHUqNyTa1KuLt%2FU%2BQXVCFxEZHJH37BQM9v9gwgnPc8WtB%2FtkxRs8kHOqf0ID3VKvnJklqsb4fQU7RhMget%2F8rQrPT%2FLGqHrrq7OBS%2BBnEzhvMV6y5iyjDc1dO%2FBjqkAXyd6rKUsUyos%2BlGSVzSkqEqUl4wrVRnwr1t4bCeLtfX%2FJ9VbhdZ4%2B%2FX%2BKurkdY8LvAt4P5yOJGS%2BmB7Ep7IC4KG4XsHWpXu6%2BTAY4YEKxzHTD3OtvBT6z0ztGi0oHEinxoQcs9OoGr%2BFDPODrAChRAadvcwJFwtlGF235pWZ0wi28O6IU2e8VjO8TJNh99olWR9myC6gTIY2UF5wvGSpb3Fsf1x&X-Amz-Signature=2c2024b02fe12e0eb9236a19f8113dc4785632490a33f9f65ed14f7cb1d51807&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3DT7X7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B8fW4l0BDptLLkgku9NNQCvrACf8caEY5fXp3g6laNwIhAKCTuKi1l6fmiVhVSB0t7lN7alqg5jB7ZgZpXHWd3KopKv8DCHIQABoMNjM3NDIzMTgzODA1IgzNNAERP0MD9SqHoiUq3AMAA9qXrh5q2SPu6py0tMu4t%2F7w83HCD4kwerAvgAU2GKXMjuam8V23%2FAVk4lojpKQBci2vkPMy3UTksuB8ftGvJrytbr72wRshrb9U2oyFhRP09YQIuufYbp7CZoQDVMr0c%2FV0%2Bd4O750Hr5VueW88Tm3S96KlqEjSWe1DwXJghu2JfvahhvpQvQH28mz3XopBi12SJGj60tWWHLsy33ZZsBbm1ZBispmJB89RXIbQ3rmSrWRza3YcbQCer943qMBqc0VAVjQbnkGdw8rrtgIFpkjsCc62n86Lmn7yjJ6%2F4qXKvQzt%2BYgMrQfY%2Bcr5A0d4%2FnGBKmggQTdKgpu0%2FlWg0wfmSI4m%2BzZ%2B7ufhZTaUvtFon4mnGwh8z8C%2F%2BUx20budH8SoO5g3RNkpJXmLsikU4HhE1aVI76FzuXJliPOLHNyR4%2BghJoUxIH6PW%2FEjH2qv%2F1RvBQvkJ84i00v2HxBztcxSARGW90UwwAuLLqJK%2FDRH%2FX%2FJiWEafjFstfO%2B8WMgwSVM1PAHUqNyTa1KuLt%2FU%2BQXVCFxEZHJH37BQM9v9gwgnPc8WtB%2FtkxRs8kHOqf0ID3VKvnJklqsb4fQU7RhMget%2F8rQrPT%2FLGqHrrq7OBS%2BBnEzhvMV6y5iyjDc1dO%2FBjqkAXyd6rKUsUyos%2BlGSVzSkqEqUl4wrVRnwr1t4bCeLtfX%2FJ9VbhdZ4%2B%2FX%2BKurkdY8LvAt4P5yOJGS%2BmB7Ep7IC4KG4XsHWpXu6%2BTAY4YEKxzHTD3OtvBT6z0ztGi0oHEinxoQcs9OoGr%2BFDPODrAChRAadvcwJFwtlGF235pWZ0wi28O6IU2e8VjO8TJNh99olWR9myC6gTIY2UF5wvGSpb3Fsf1x&X-Amz-Signature=29aaa88dff157f48219363e545fa8f119a6e8b8e265b07bea0a95415ab5d0fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3DT7X7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B8fW4l0BDptLLkgku9NNQCvrACf8caEY5fXp3g6laNwIhAKCTuKi1l6fmiVhVSB0t7lN7alqg5jB7ZgZpXHWd3KopKv8DCHIQABoMNjM3NDIzMTgzODA1IgzNNAERP0MD9SqHoiUq3AMAA9qXrh5q2SPu6py0tMu4t%2F7w83HCD4kwerAvgAU2GKXMjuam8V23%2FAVk4lojpKQBci2vkPMy3UTksuB8ftGvJrytbr72wRshrb9U2oyFhRP09YQIuufYbp7CZoQDVMr0c%2FV0%2Bd4O750Hr5VueW88Tm3S96KlqEjSWe1DwXJghu2JfvahhvpQvQH28mz3XopBi12SJGj60tWWHLsy33ZZsBbm1ZBispmJB89RXIbQ3rmSrWRza3YcbQCer943qMBqc0VAVjQbnkGdw8rrtgIFpkjsCc62n86Lmn7yjJ6%2F4qXKvQzt%2BYgMrQfY%2Bcr5A0d4%2FnGBKmggQTdKgpu0%2FlWg0wfmSI4m%2BzZ%2B7ufhZTaUvtFon4mnGwh8z8C%2F%2BUx20budH8SoO5g3RNkpJXmLsikU4HhE1aVI76FzuXJliPOLHNyR4%2BghJoUxIH6PW%2FEjH2qv%2F1RvBQvkJ84i00v2HxBztcxSARGW90UwwAuLLqJK%2FDRH%2FX%2FJiWEafjFstfO%2B8WMgwSVM1PAHUqNyTa1KuLt%2FU%2BQXVCFxEZHJH37BQM9v9gwgnPc8WtB%2FtkxRs8kHOqf0ID3VKvnJklqsb4fQU7RhMget%2F8rQrPT%2FLGqHrrq7OBS%2BBnEzhvMV6y5iyjDc1dO%2FBjqkAXyd6rKUsUyos%2BlGSVzSkqEqUl4wrVRnwr1t4bCeLtfX%2FJ9VbhdZ4%2B%2FX%2BKurkdY8LvAt4P5yOJGS%2BmB7Ep7IC4KG4XsHWpXu6%2BTAY4YEKxzHTD3OtvBT6z0ztGi0oHEinxoQcs9OoGr%2BFDPODrAChRAadvcwJFwtlGF235pWZ0wi28O6IU2e8VjO8TJNh99olWR9myC6gTIY2UF5wvGSpb3Fsf1x&X-Amz-Signature=3ed559fb9a4f08e8b94ff498a0e63909d79bbc5d9ddfb955873cff478715c980&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3DT7X7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B8fW4l0BDptLLkgku9NNQCvrACf8caEY5fXp3g6laNwIhAKCTuKi1l6fmiVhVSB0t7lN7alqg5jB7ZgZpXHWd3KopKv8DCHIQABoMNjM3NDIzMTgzODA1IgzNNAERP0MD9SqHoiUq3AMAA9qXrh5q2SPu6py0tMu4t%2F7w83HCD4kwerAvgAU2GKXMjuam8V23%2FAVk4lojpKQBci2vkPMy3UTksuB8ftGvJrytbr72wRshrb9U2oyFhRP09YQIuufYbp7CZoQDVMr0c%2FV0%2Bd4O750Hr5VueW88Tm3S96KlqEjSWe1DwXJghu2JfvahhvpQvQH28mz3XopBi12SJGj60tWWHLsy33ZZsBbm1ZBispmJB89RXIbQ3rmSrWRza3YcbQCer943qMBqc0VAVjQbnkGdw8rrtgIFpkjsCc62n86Lmn7yjJ6%2F4qXKvQzt%2BYgMrQfY%2Bcr5A0d4%2FnGBKmggQTdKgpu0%2FlWg0wfmSI4m%2BzZ%2B7ufhZTaUvtFon4mnGwh8z8C%2F%2BUx20budH8SoO5g3RNkpJXmLsikU4HhE1aVI76FzuXJliPOLHNyR4%2BghJoUxIH6PW%2FEjH2qv%2F1RvBQvkJ84i00v2HxBztcxSARGW90UwwAuLLqJK%2FDRH%2FX%2FJiWEafjFstfO%2B8WMgwSVM1PAHUqNyTa1KuLt%2FU%2BQXVCFxEZHJH37BQM9v9gwgnPc8WtB%2FtkxRs8kHOqf0ID3VKvnJklqsb4fQU7RhMget%2F8rQrPT%2FLGqHrrq7OBS%2BBnEzhvMV6y5iyjDc1dO%2FBjqkAXyd6rKUsUyos%2BlGSVzSkqEqUl4wrVRnwr1t4bCeLtfX%2FJ9VbhdZ4%2B%2FX%2BKurkdY8LvAt4P5yOJGS%2BmB7Ep7IC4KG4XsHWpXu6%2BTAY4YEKxzHTD3OtvBT6z0ztGi0oHEinxoQcs9OoGr%2BFDPODrAChRAadvcwJFwtlGF235pWZ0wi28O6IU2e8VjO8TJNh99olWR9myC6gTIY2UF5wvGSpb3Fsf1x&X-Amz-Signature=d31fbc6c268394cc0b4ca7b5de8641ab255e74ab1e970c700cd9b6213b146825&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3DT7X7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B8fW4l0BDptLLkgku9NNQCvrACf8caEY5fXp3g6laNwIhAKCTuKi1l6fmiVhVSB0t7lN7alqg5jB7ZgZpXHWd3KopKv8DCHIQABoMNjM3NDIzMTgzODA1IgzNNAERP0MD9SqHoiUq3AMAA9qXrh5q2SPu6py0tMu4t%2F7w83HCD4kwerAvgAU2GKXMjuam8V23%2FAVk4lojpKQBci2vkPMy3UTksuB8ftGvJrytbr72wRshrb9U2oyFhRP09YQIuufYbp7CZoQDVMr0c%2FV0%2Bd4O750Hr5VueW88Tm3S96KlqEjSWe1DwXJghu2JfvahhvpQvQH28mz3XopBi12SJGj60tWWHLsy33ZZsBbm1ZBispmJB89RXIbQ3rmSrWRza3YcbQCer943qMBqc0VAVjQbnkGdw8rrtgIFpkjsCc62n86Lmn7yjJ6%2F4qXKvQzt%2BYgMrQfY%2Bcr5A0d4%2FnGBKmggQTdKgpu0%2FlWg0wfmSI4m%2BzZ%2B7ufhZTaUvtFon4mnGwh8z8C%2F%2BUx20budH8SoO5g3RNkpJXmLsikU4HhE1aVI76FzuXJliPOLHNyR4%2BghJoUxIH6PW%2FEjH2qv%2F1RvBQvkJ84i00v2HxBztcxSARGW90UwwAuLLqJK%2FDRH%2FX%2FJiWEafjFstfO%2B8WMgwSVM1PAHUqNyTa1KuLt%2FU%2BQXVCFxEZHJH37BQM9v9gwgnPc8WtB%2FtkxRs8kHOqf0ID3VKvnJklqsb4fQU7RhMget%2F8rQrPT%2FLGqHrrq7OBS%2BBnEzhvMV6y5iyjDc1dO%2FBjqkAXyd6rKUsUyos%2BlGSVzSkqEqUl4wrVRnwr1t4bCeLtfX%2FJ9VbhdZ4%2B%2FX%2BKurkdY8LvAt4P5yOJGS%2BmB7Ep7IC4KG4XsHWpXu6%2BTAY4YEKxzHTD3OtvBT6z0ztGi0oHEinxoQcs9OoGr%2BFDPODrAChRAadvcwJFwtlGF235pWZ0wi28O6IU2e8VjO8TJNh99olWR9myC6gTIY2UF5wvGSpb3Fsf1x&X-Amz-Signature=107e29ee8fdc54fecb584e33049c8ed763d878179f7c32312984145bc23c4443&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3DT7X7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B8fW4l0BDptLLkgku9NNQCvrACf8caEY5fXp3g6laNwIhAKCTuKi1l6fmiVhVSB0t7lN7alqg5jB7ZgZpXHWd3KopKv8DCHIQABoMNjM3NDIzMTgzODA1IgzNNAERP0MD9SqHoiUq3AMAA9qXrh5q2SPu6py0tMu4t%2F7w83HCD4kwerAvgAU2GKXMjuam8V23%2FAVk4lojpKQBci2vkPMy3UTksuB8ftGvJrytbr72wRshrb9U2oyFhRP09YQIuufYbp7CZoQDVMr0c%2FV0%2Bd4O750Hr5VueW88Tm3S96KlqEjSWe1DwXJghu2JfvahhvpQvQH28mz3XopBi12SJGj60tWWHLsy33ZZsBbm1ZBispmJB89RXIbQ3rmSrWRza3YcbQCer943qMBqc0VAVjQbnkGdw8rrtgIFpkjsCc62n86Lmn7yjJ6%2F4qXKvQzt%2BYgMrQfY%2Bcr5A0d4%2FnGBKmggQTdKgpu0%2FlWg0wfmSI4m%2BzZ%2B7ufhZTaUvtFon4mnGwh8z8C%2F%2BUx20budH8SoO5g3RNkpJXmLsikU4HhE1aVI76FzuXJliPOLHNyR4%2BghJoUxIH6PW%2FEjH2qv%2F1RvBQvkJ84i00v2HxBztcxSARGW90UwwAuLLqJK%2FDRH%2FX%2FJiWEafjFstfO%2B8WMgwSVM1PAHUqNyTa1KuLt%2FU%2BQXVCFxEZHJH37BQM9v9gwgnPc8WtB%2FtkxRs8kHOqf0ID3VKvnJklqsb4fQU7RhMget%2F8rQrPT%2FLGqHrrq7OBS%2BBnEzhvMV6y5iyjDc1dO%2FBjqkAXyd6rKUsUyos%2BlGSVzSkqEqUl4wrVRnwr1t4bCeLtfX%2FJ9VbhdZ4%2B%2FX%2BKurkdY8LvAt4P5yOJGS%2BmB7Ep7IC4KG4XsHWpXu6%2BTAY4YEKxzHTD3OtvBT6z0ztGi0oHEinxoQcs9OoGr%2BFDPODrAChRAadvcwJFwtlGF235pWZ0wi28O6IU2e8VjO8TJNh99olWR9myC6gTIY2UF5wvGSpb3Fsf1x&X-Amz-Signature=e8d01ecb8c0fa22aec3dd5013affc4351ef46373317d89fe2d420e0fc9d45af2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3DT7X7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B8fW4l0BDptLLkgku9NNQCvrACf8caEY5fXp3g6laNwIhAKCTuKi1l6fmiVhVSB0t7lN7alqg5jB7ZgZpXHWd3KopKv8DCHIQABoMNjM3NDIzMTgzODA1IgzNNAERP0MD9SqHoiUq3AMAA9qXrh5q2SPu6py0tMu4t%2F7w83HCD4kwerAvgAU2GKXMjuam8V23%2FAVk4lojpKQBci2vkPMy3UTksuB8ftGvJrytbr72wRshrb9U2oyFhRP09YQIuufYbp7CZoQDVMr0c%2FV0%2Bd4O750Hr5VueW88Tm3S96KlqEjSWe1DwXJghu2JfvahhvpQvQH28mz3XopBi12SJGj60tWWHLsy33ZZsBbm1ZBispmJB89RXIbQ3rmSrWRza3YcbQCer943qMBqc0VAVjQbnkGdw8rrtgIFpkjsCc62n86Lmn7yjJ6%2F4qXKvQzt%2BYgMrQfY%2Bcr5A0d4%2FnGBKmggQTdKgpu0%2FlWg0wfmSI4m%2BzZ%2B7ufhZTaUvtFon4mnGwh8z8C%2F%2BUx20budH8SoO5g3RNkpJXmLsikU4HhE1aVI76FzuXJliPOLHNyR4%2BghJoUxIH6PW%2FEjH2qv%2F1RvBQvkJ84i00v2HxBztcxSARGW90UwwAuLLqJK%2FDRH%2FX%2FJiWEafjFstfO%2B8WMgwSVM1PAHUqNyTa1KuLt%2FU%2BQXVCFxEZHJH37BQM9v9gwgnPc8WtB%2FtkxRs8kHOqf0ID3VKvnJklqsb4fQU7RhMget%2F8rQrPT%2FLGqHrrq7OBS%2BBnEzhvMV6y5iyjDc1dO%2FBjqkAXyd6rKUsUyos%2BlGSVzSkqEqUl4wrVRnwr1t4bCeLtfX%2FJ9VbhdZ4%2B%2FX%2BKurkdY8LvAt4P5yOJGS%2BmB7Ep7IC4KG4XsHWpXu6%2BTAY4YEKxzHTD3OtvBT6z0ztGi0oHEinxoQcs9OoGr%2BFDPODrAChRAadvcwJFwtlGF235pWZ0wi28O6IU2e8VjO8TJNh99olWR9myC6gTIY2UF5wvGSpb3Fsf1x&X-Amz-Signature=0fd4267e439196c50560e71c44dc3294bb141aaf4a53953b439ad62264cd31bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD3DT7X7%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2B8fW4l0BDptLLkgku9NNQCvrACf8caEY5fXp3g6laNwIhAKCTuKi1l6fmiVhVSB0t7lN7alqg5jB7ZgZpXHWd3KopKv8DCHIQABoMNjM3NDIzMTgzODA1IgzNNAERP0MD9SqHoiUq3AMAA9qXrh5q2SPu6py0tMu4t%2F7w83HCD4kwerAvgAU2GKXMjuam8V23%2FAVk4lojpKQBci2vkPMy3UTksuB8ftGvJrytbr72wRshrb9U2oyFhRP09YQIuufYbp7CZoQDVMr0c%2FV0%2Bd4O750Hr5VueW88Tm3S96KlqEjSWe1DwXJghu2JfvahhvpQvQH28mz3XopBi12SJGj60tWWHLsy33ZZsBbm1ZBispmJB89RXIbQ3rmSrWRza3YcbQCer943qMBqc0VAVjQbnkGdw8rrtgIFpkjsCc62n86Lmn7yjJ6%2F4qXKvQzt%2BYgMrQfY%2Bcr5A0d4%2FnGBKmggQTdKgpu0%2FlWg0wfmSI4m%2BzZ%2B7ufhZTaUvtFon4mnGwh8z8C%2F%2BUx20budH8SoO5g3RNkpJXmLsikU4HhE1aVI76FzuXJliPOLHNyR4%2BghJoUxIH6PW%2FEjH2qv%2F1RvBQvkJ84i00v2HxBztcxSARGW90UwwAuLLqJK%2FDRH%2FX%2FJiWEafjFstfO%2B8WMgwSVM1PAHUqNyTa1KuLt%2FU%2BQXVCFxEZHJH37BQM9v9gwgnPc8WtB%2FtkxRs8kHOqf0ID3VKvnJklqsb4fQU7RhMget%2F8rQrPT%2FLGqHrrq7OBS%2BBnEzhvMV6y5iyjDc1dO%2FBjqkAXyd6rKUsUyos%2BlGSVzSkqEqUl4wrVRnwr1t4bCeLtfX%2FJ9VbhdZ4%2B%2FX%2BKurkdY8LvAt4P5yOJGS%2BmB7Ep7IC4KG4XsHWpXu6%2BTAY4YEKxzHTD3OtvBT6z0ztGi0oHEinxoQcs9OoGr%2BFDPODrAChRAadvcwJFwtlGF235pWZ0wi28O6IU2e8VjO8TJNh99olWR9myC6gTIY2UF5wvGSpb3Fsf1x&X-Amz-Signature=ab1a8004a013387538e101a7a02856a007611c83e9cd42bafc40b6d37ab8d7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
