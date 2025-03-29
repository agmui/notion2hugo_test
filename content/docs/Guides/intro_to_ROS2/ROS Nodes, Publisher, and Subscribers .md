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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IH3TLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIETO2VY0xssGN4cNwgjHCdrcJCuf%2F4HMjtEkH5fCSJh7AiEAlc%2BGyu5b9qZoC1ja2%2FObMYEzl6GVybUDTRyKHpGi2EIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWeVR5W77pmtvTMWircA%2BqUwXWEdYtlsCp3GVJCHIUWpn6Luzgx%2BfOxN4KMoYhiuAgOSQUja4MMJNrHI82AdwXABH9WNmWUptcmVsDIgvmk%2Fyvy22RT5UCr0ZsdHKgHX3OiEChbUuFzFz6hfeQ16oLEIiZMcE%2FNMNegEXSLNbtuf6aMRVPZdi7wTBwYu66mS5rxEmvDFm7QoDTr2kzbGNJU55ZhLOxlOOVKU4u1EO%2FFb9zMSeX1jdE%2BJyvgIcKtD442lP4sFjnGgXp9Yp6p6Z%2FvOtwZ5l%2FNSYXX2yD4XYtp3IqdB2lW0VDwZD3e%2BiiSuZlkuluX7enxKKzxtlEYtkTHgCwCICN1fwGiExVFCEk%2B9eBCh0Z6VgNOjmn4o9q1hw8EGKt4KWtaiFE8CIZne9z9MRumccZxl8C%2ByDKfOTLTKNlTBA1FbYvoRXnqPWrVE9fuluBDIX6ManU%2Fa%2BX%2FsWFCWloyPemmAeC2v2bY563inRWWg7jFsF2yUVlZW2%2BsGeq5g3tGHLzYw%2FSqUMsJr5Av2p1qK6ql7gGSUEJZwzwb%2B7JfupY9qWJ97xuCAXFHig%2BIx4je%2F2BlJxS1jTweFlIUSiJBe27tJJ%2FGkrShdnm5c0pN5CIYOjZ7qTwSdXRsNKzf6IuUyIa1KLAXMP%2FenL8GOqUBThLkpyZLToYzxcMjf5HeVMmI1YtFspqUsg0Lfprq1LqrQKDiWO%2BMuWesJsfIbVEJCgeqmRuUHlCSXyvGiTj6DQEohbu82skCSvqyESwKUyPPKhRDw11tmT8qRS5%2BlkfFGjaMOmhVk4et%2Bax1G4YuWYqNEmqZ7BJx1o6E%2BfZ9DnRdGOGmORU1vvfpk3gIHLN2rByQk1pODGs4vasHGPxeye0yjI%2F6&X-Amz-Signature=3858252d4aa38273e0fe457fba59917c75a84f98e6ca9c6c7103261382315781&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IH3TLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIETO2VY0xssGN4cNwgjHCdrcJCuf%2F4HMjtEkH5fCSJh7AiEAlc%2BGyu5b9qZoC1ja2%2FObMYEzl6GVybUDTRyKHpGi2EIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWeVR5W77pmtvTMWircA%2BqUwXWEdYtlsCp3GVJCHIUWpn6Luzgx%2BfOxN4KMoYhiuAgOSQUja4MMJNrHI82AdwXABH9WNmWUptcmVsDIgvmk%2Fyvy22RT5UCr0ZsdHKgHX3OiEChbUuFzFz6hfeQ16oLEIiZMcE%2FNMNegEXSLNbtuf6aMRVPZdi7wTBwYu66mS5rxEmvDFm7QoDTr2kzbGNJU55ZhLOxlOOVKU4u1EO%2FFb9zMSeX1jdE%2BJyvgIcKtD442lP4sFjnGgXp9Yp6p6Z%2FvOtwZ5l%2FNSYXX2yD4XYtp3IqdB2lW0VDwZD3e%2BiiSuZlkuluX7enxKKzxtlEYtkTHgCwCICN1fwGiExVFCEk%2B9eBCh0Z6VgNOjmn4o9q1hw8EGKt4KWtaiFE8CIZne9z9MRumccZxl8C%2ByDKfOTLTKNlTBA1FbYvoRXnqPWrVE9fuluBDIX6ManU%2Fa%2BX%2FsWFCWloyPemmAeC2v2bY563inRWWg7jFsF2yUVlZW2%2BsGeq5g3tGHLzYw%2FSqUMsJr5Av2p1qK6ql7gGSUEJZwzwb%2B7JfupY9qWJ97xuCAXFHig%2BIx4je%2F2BlJxS1jTweFlIUSiJBe27tJJ%2FGkrShdnm5c0pN5CIYOjZ7qTwSdXRsNKzf6IuUyIa1KLAXMP%2FenL8GOqUBThLkpyZLToYzxcMjf5HeVMmI1YtFspqUsg0Lfprq1LqrQKDiWO%2BMuWesJsfIbVEJCgeqmRuUHlCSXyvGiTj6DQEohbu82skCSvqyESwKUyPPKhRDw11tmT8qRS5%2BlkfFGjaMOmhVk4et%2Bax1G4YuWYqNEmqZ7BJx1o6E%2BfZ9DnRdGOGmORU1vvfpk3gIHLN2rByQk1pODGs4vasHGPxeye0yjI%2F6&X-Amz-Signature=d75e66c57e43701189bf6fc82fd5eb26a38615e70aba839e179cb2e07b501678&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IH3TLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIETO2VY0xssGN4cNwgjHCdrcJCuf%2F4HMjtEkH5fCSJh7AiEAlc%2BGyu5b9qZoC1ja2%2FObMYEzl6GVybUDTRyKHpGi2EIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWeVR5W77pmtvTMWircA%2BqUwXWEdYtlsCp3GVJCHIUWpn6Luzgx%2BfOxN4KMoYhiuAgOSQUja4MMJNrHI82AdwXABH9WNmWUptcmVsDIgvmk%2Fyvy22RT5UCr0ZsdHKgHX3OiEChbUuFzFz6hfeQ16oLEIiZMcE%2FNMNegEXSLNbtuf6aMRVPZdi7wTBwYu66mS5rxEmvDFm7QoDTr2kzbGNJU55ZhLOxlOOVKU4u1EO%2FFb9zMSeX1jdE%2BJyvgIcKtD442lP4sFjnGgXp9Yp6p6Z%2FvOtwZ5l%2FNSYXX2yD4XYtp3IqdB2lW0VDwZD3e%2BiiSuZlkuluX7enxKKzxtlEYtkTHgCwCICN1fwGiExVFCEk%2B9eBCh0Z6VgNOjmn4o9q1hw8EGKt4KWtaiFE8CIZne9z9MRumccZxl8C%2ByDKfOTLTKNlTBA1FbYvoRXnqPWrVE9fuluBDIX6ManU%2Fa%2BX%2FsWFCWloyPemmAeC2v2bY563inRWWg7jFsF2yUVlZW2%2BsGeq5g3tGHLzYw%2FSqUMsJr5Av2p1qK6ql7gGSUEJZwzwb%2B7JfupY9qWJ97xuCAXFHig%2BIx4je%2F2BlJxS1jTweFlIUSiJBe27tJJ%2FGkrShdnm5c0pN5CIYOjZ7qTwSdXRsNKzf6IuUyIa1KLAXMP%2FenL8GOqUBThLkpyZLToYzxcMjf5HeVMmI1YtFspqUsg0Lfprq1LqrQKDiWO%2BMuWesJsfIbVEJCgeqmRuUHlCSXyvGiTj6DQEohbu82skCSvqyESwKUyPPKhRDw11tmT8qRS5%2BlkfFGjaMOmhVk4et%2Bax1G4YuWYqNEmqZ7BJx1o6E%2BfZ9DnRdGOGmORU1vvfpk3gIHLN2rByQk1pODGs4vasHGPxeye0yjI%2F6&X-Amz-Signature=6c447b1b420be18e09c4d7f425e17ee565613d0517c5d7f97ba597e39764c78f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IH3TLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIETO2VY0xssGN4cNwgjHCdrcJCuf%2F4HMjtEkH5fCSJh7AiEAlc%2BGyu5b9qZoC1ja2%2FObMYEzl6GVybUDTRyKHpGi2EIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWeVR5W77pmtvTMWircA%2BqUwXWEdYtlsCp3GVJCHIUWpn6Luzgx%2BfOxN4KMoYhiuAgOSQUja4MMJNrHI82AdwXABH9WNmWUptcmVsDIgvmk%2Fyvy22RT5UCr0ZsdHKgHX3OiEChbUuFzFz6hfeQ16oLEIiZMcE%2FNMNegEXSLNbtuf6aMRVPZdi7wTBwYu66mS5rxEmvDFm7QoDTr2kzbGNJU55ZhLOxlOOVKU4u1EO%2FFb9zMSeX1jdE%2BJyvgIcKtD442lP4sFjnGgXp9Yp6p6Z%2FvOtwZ5l%2FNSYXX2yD4XYtp3IqdB2lW0VDwZD3e%2BiiSuZlkuluX7enxKKzxtlEYtkTHgCwCICN1fwGiExVFCEk%2B9eBCh0Z6VgNOjmn4o9q1hw8EGKt4KWtaiFE8CIZne9z9MRumccZxl8C%2ByDKfOTLTKNlTBA1FbYvoRXnqPWrVE9fuluBDIX6ManU%2Fa%2BX%2FsWFCWloyPemmAeC2v2bY563inRWWg7jFsF2yUVlZW2%2BsGeq5g3tGHLzYw%2FSqUMsJr5Av2p1qK6ql7gGSUEJZwzwb%2B7JfupY9qWJ97xuCAXFHig%2BIx4je%2F2BlJxS1jTweFlIUSiJBe27tJJ%2FGkrShdnm5c0pN5CIYOjZ7qTwSdXRsNKzf6IuUyIa1KLAXMP%2FenL8GOqUBThLkpyZLToYzxcMjf5HeVMmI1YtFspqUsg0Lfprq1LqrQKDiWO%2BMuWesJsfIbVEJCgeqmRuUHlCSXyvGiTj6DQEohbu82skCSvqyESwKUyPPKhRDw11tmT8qRS5%2BlkfFGjaMOmhVk4et%2Bax1G4YuWYqNEmqZ7BJx1o6E%2BfZ9DnRdGOGmORU1vvfpk3gIHLN2rByQk1pODGs4vasHGPxeye0yjI%2F6&X-Amz-Signature=1d3b482d0035a503a45fa9303af85245792829bccad7aac8787faedf2e110adf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IH3TLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIETO2VY0xssGN4cNwgjHCdrcJCuf%2F4HMjtEkH5fCSJh7AiEAlc%2BGyu5b9qZoC1ja2%2FObMYEzl6GVybUDTRyKHpGi2EIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWeVR5W77pmtvTMWircA%2BqUwXWEdYtlsCp3GVJCHIUWpn6Luzgx%2BfOxN4KMoYhiuAgOSQUja4MMJNrHI82AdwXABH9WNmWUptcmVsDIgvmk%2Fyvy22RT5UCr0ZsdHKgHX3OiEChbUuFzFz6hfeQ16oLEIiZMcE%2FNMNegEXSLNbtuf6aMRVPZdi7wTBwYu66mS5rxEmvDFm7QoDTr2kzbGNJU55ZhLOxlOOVKU4u1EO%2FFb9zMSeX1jdE%2BJyvgIcKtD442lP4sFjnGgXp9Yp6p6Z%2FvOtwZ5l%2FNSYXX2yD4XYtp3IqdB2lW0VDwZD3e%2BiiSuZlkuluX7enxKKzxtlEYtkTHgCwCICN1fwGiExVFCEk%2B9eBCh0Z6VgNOjmn4o9q1hw8EGKt4KWtaiFE8CIZne9z9MRumccZxl8C%2ByDKfOTLTKNlTBA1FbYvoRXnqPWrVE9fuluBDIX6ManU%2Fa%2BX%2FsWFCWloyPemmAeC2v2bY563inRWWg7jFsF2yUVlZW2%2BsGeq5g3tGHLzYw%2FSqUMsJr5Av2p1qK6ql7gGSUEJZwzwb%2B7JfupY9qWJ97xuCAXFHig%2BIx4je%2F2BlJxS1jTweFlIUSiJBe27tJJ%2FGkrShdnm5c0pN5CIYOjZ7qTwSdXRsNKzf6IuUyIa1KLAXMP%2FenL8GOqUBThLkpyZLToYzxcMjf5HeVMmI1YtFspqUsg0Lfprq1LqrQKDiWO%2BMuWesJsfIbVEJCgeqmRuUHlCSXyvGiTj6DQEohbu82skCSvqyESwKUyPPKhRDw11tmT8qRS5%2BlkfFGjaMOmhVk4et%2Bax1G4YuWYqNEmqZ7BJx1o6E%2BfZ9DnRdGOGmORU1vvfpk3gIHLN2rByQk1pODGs4vasHGPxeye0yjI%2F6&X-Amz-Signature=d7cb078ff357bfeb554b16d098f6e5f4dc8b35996a9a69432deceeb0192e8edf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IH3TLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIETO2VY0xssGN4cNwgjHCdrcJCuf%2F4HMjtEkH5fCSJh7AiEAlc%2BGyu5b9qZoC1ja2%2FObMYEzl6GVybUDTRyKHpGi2EIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWeVR5W77pmtvTMWircA%2BqUwXWEdYtlsCp3GVJCHIUWpn6Luzgx%2BfOxN4KMoYhiuAgOSQUja4MMJNrHI82AdwXABH9WNmWUptcmVsDIgvmk%2Fyvy22RT5UCr0ZsdHKgHX3OiEChbUuFzFz6hfeQ16oLEIiZMcE%2FNMNegEXSLNbtuf6aMRVPZdi7wTBwYu66mS5rxEmvDFm7QoDTr2kzbGNJU55ZhLOxlOOVKU4u1EO%2FFb9zMSeX1jdE%2BJyvgIcKtD442lP4sFjnGgXp9Yp6p6Z%2FvOtwZ5l%2FNSYXX2yD4XYtp3IqdB2lW0VDwZD3e%2BiiSuZlkuluX7enxKKzxtlEYtkTHgCwCICN1fwGiExVFCEk%2B9eBCh0Z6VgNOjmn4o9q1hw8EGKt4KWtaiFE8CIZne9z9MRumccZxl8C%2ByDKfOTLTKNlTBA1FbYvoRXnqPWrVE9fuluBDIX6ManU%2Fa%2BX%2FsWFCWloyPemmAeC2v2bY563inRWWg7jFsF2yUVlZW2%2BsGeq5g3tGHLzYw%2FSqUMsJr5Av2p1qK6ql7gGSUEJZwzwb%2B7JfupY9qWJ97xuCAXFHig%2BIx4je%2F2BlJxS1jTweFlIUSiJBe27tJJ%2FGkrShdnm5c0pN5CIYOjZ7qTwSdXRsNKzf6IuUyIa1KLAXMP%2FenL8GOqUBThLkpyZLToYzxcMjf5HeVMmI1YtFspqUsg0Lfprq1LqrQKDiWO%2BMuWesJsfIbVEJCgeqmRuUHlCSXyvGiTj6DQEohbu82skCSvqyESwKUyPPKhRDw11tmT8qRS5%2BlkfFGjaMOmhVk4et%2Bax1G4YuWYqNEmqZ7BJx1o6E%2BfZ9DnRdGOGmORU1vvfpk3gIHLN2rByQk1pODGs4vasHGPxeye0yjI%2F6&X-Amz-Signature=d04538997186e21e5caca1c9e1272f581661ec2fa8fd6330f4bdec39bad42d35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IH3TLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIETO2VY0xssGN4cNwgjHCdrcJCuf%2F4HMjtEkH5fCSJh7AiEAlc%2BGyu5b9qZoC1ja2%2FObMYEzl6GVybUDTRyKHpGi2EIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWeVR5W77pmtvTMWircA%2BqUwXWEdYtlsCp3GVJCHIUWpn6Luzgx%2BfOxN4KMoYhiuAgOSQUja4MMJNrHI82AdwXABH9WNmWUptcmVsDIgvmk%2Fyvy22RT5UCr0ZsdHKgHX3OiEChbUuFzFz6hfeQ16oLEIiZMcE%2FNMNegEXSLNbtuf6aMRVPZdi7wTBwYu66mS5rxEmvDFm7QoDTr2kzbGNJU55ZhLOxlOOVKU4u1EO%2FFb9zMSeX1jdE%2BJyvgIcKtD442lP4sFjnGgXp9Yp6p6Z%2FvOtwZ5l%2FNSYXX2yD4XYtp3IqdB2lW0VDwZD3e%2BiiSuZlkuluX7enxKKzxtlEYtkTHgCwCICN1fwGiExVFCEk%2B9eBCh0Z6VgNOjmn4o9q1hw8EGKt4KWtaiFE8CIZne9z9MRumccZxl8C%2ByDKfOTLTKNlTBA1FbYvoRXnqPWrVE9fuluBDIX6ManU%2Fa%2BX%2FsWFCWloyPemmAeC2v2bY563inRWWg7jFsF2yUVlZW2%2BsGeq5g3tGHLzYw%2FSqUMsJr5Av2p1qK6ql7gGSUEJZwzwb%2B7JfupY9qWJ97xuCAXFHig%2BIx4je%2F2BlJxS1jTweFlIUSiJBe27tJJ%2FGkrShdnm5c0pN5CIYOjZ7qTwSdXRsNKzf6IuUyIa1KLAXMP%2FenL8GOqUBThLkpyZLToYzxcMjf5HeVMmI1YtFspqUsg0Lfprq1LqrQKDiWO%2BMuWesJsfIbVEJCgeqmRuUHlCSXyvGiTj6DQEohbu82skCSvqyESwKUyPPKhRDw11tmT8qRS5%2BlkfFGjaMOmhVk4et%2Bax1G4YuWYqNEmqZ7BJx1o6E%2BfZ9DnRdGOGmORU1vvfpk3gIHLN2rByQk1pODGs4vasHGPxeye0yjI%2F6&X-Amz-Signature=e6e1a62b251862956fc2383d87bbff674d76fbfa83854c5d4aae23c9afd09288&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IH3TLH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIETO2VY0xssGN4cNwgjHCdrcJCuf%2F4HMjtEkH5fCSJh7AiEAlc%2BGyu5b9qZoC1ja2%2FObMYEzl6GVybUDTRyKHpGi2EIq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDCWeVR5W77pmtvTMWircA%2BqUwXWEdYtlsCp3GVJCHIUWpn6Luzgx%2BfOxN4KMoYhiuAgOSQUja4MMJNrHI82AdwXABH9WNmWUptcmVsDIgvmk%2Fyvy22RT5UCr0ZsdHKgHX3OiEChbUuFzFz6hfeQ16oLEIiZMcE%2FNMNegEXSLNbtuf6aMRVPZdi7wTBwYu66mS5rxEmvDFm7QoDTr2kzbGNJU55ZhLOxlOOVKU4u1EO%2FFb9zMSeX1jdE%2BJyvgIcKtD442lP4sFjnGgXp9Yp6p6Z%2FvOtwZ5l%2FNSYXX2yD4XYtp3IqdB2lW0VDwZD3e%2BiiSuZlkuluX7enxKKzxtlEYtkTHgCwCICN1fwGiExVFCEk%2B9eBCh0Z6VgNOjmn4o9q1hw8EGKt4KWtaiFE8CIZne9z9MRumccZxl8C%2ByDKfOTLTKNlTBA1FbYvoRXnqPWrVE9fuluBDIX6ManU%2Fa%2BX%2FsWFCWloyPemmAeC2v2bY563inRWWg7jFsF2yUVlZW2%2BsGeq5g3tGHLzYw%2FSqUMsJr5Av2p1qK6ql7gGSUEJZwzwb%2B7JfupY9qWJ97xuCAXFHig%2BIx4je%2F2BlJxS1jTweFlIUSiJBe27tJJ%2FGkrShdnm5c0pN5CIYOjZ7qTwSdXRsNKzf6IuUyIa1KLAXMP%2FenL8GOqUBThLkpyZLToYzxcMjf5HeVMmI1YtFspqUsg0Lfprq1LqrQKDiWO%2BMuWesJsfIbVEJCgeqmRuUHlCSXyvGiTj6DQEohbu82skCSvqyESwKUyPPKhRDw11tmT8qRS5%2BlkfFGjaMOmhVk4et%2Bax1G4YuWYqNEmqZ7BJx1o6E%2BfZ9DnRdGOGmORU1vvfpk3gIHLN2rByQk1pODGs4vasHGPxeye0yjI%2F6&X-Amz-Signature=a14ba2e9d6a4f299b4f6256f32e79eb99ad3f5f20001897970401211d7338e45&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
