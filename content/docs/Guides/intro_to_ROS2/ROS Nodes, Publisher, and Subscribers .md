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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNJ6WUL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDlkHcazyVssa4%2FuvnM6MM7J0CaarjJS16XoAEd%2FCnBAQIhAK13%2BU7HV8uyJi5puFIFlnB2KSESQSKfFoFk392V7dCBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs4ZGCvQg7Xnz68tUq3AO3m%2BcGfpcuB68mYzvzWVmsfeuRPkVvqUjSGo9PV4QFgN%2BQLE0LwDBQ5X73qqz8mkCgwfTS28lu4WboW%2BxBK8A81g6zzvEljObEYeB4iavXL%2FMLxZF8ZhXWZovZTLg%2BMQshiEw1QFg6GwjTfWW%2BDLTEPuaYMs6xbnNxQcg72wkUo38eecFASUxpHa04lScF3kM%2FZX%2F5MwVJkz%2FZu065P9BVRzlkdfF7%2BoQeiDxz0to8WOVgJj9SyMvbIcpw4HkkotroNdvCtq2pJQuv5b7nr%2FwLPu6BPcReQzURCRK0rE%2FsZl182ZExHGT7B7TV5l4Ql%2FRwu2BtrMLwvpkKyw%2FBLomqcvnrEMnZmhASaiV%2BpowV2eTXM9Rh9aH0paT%2FOa61muBD8PF7Tlktmnpgn0C%2FxKZouPM6X%2FMu0TWJz7OCjUbcpuj0yyo96YAfKv6rMCM0NXGQe%2FQ615CCYuxMHkp2EBiUU9pf1W7RJnwSR6rWHNcN6RGvWm0S%2BYAuBCy57OPTydrSqMSC1hG0DIdm9WZ%2F%2BLsnLB0lXdHeKewlcdFGIdWZ%2FjuZr0Tov3bxnpDIpLeDLMbrSVtPqNfGaofNjhCUfuFPM9CV7nZuTXHJCSctZ8BJUytZ%2B6JQxxEvXfnDEjC0orjBBjqkAWkOG6TIezMwc2XQ5HzhQZyVQmBoEihBXFRHj80LJklev7sbKQ959K9kab3uBi6xddonFgIvE03tfUzxMk5ewZ8UQ2z10HdJg%2BDcJV1YJnaCUFIdEpHYOthGsYtPxzIv%2BKeDI0PnGLLPu91arF4f%2BEW3UF4iCwa%2Bl2R8ZSH%2F%2FFJ5ZHi3x71lf%2Fdg9boYxbtTh%2BPhhN%2BSL5N%2F7ja95cMJplp6szoc&X-Amz-Signature=6f10992b814cf32f1731b4406a24945088f1d497f7261220a61a926bb58c431b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNJ6WUL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDlkHcazyVssa4%2FuvnM6MM7J0CaarjJS16XoAEd%2FCnBAQIhAK13%2BU7HV8uyJi5puFIFlnB2KSESQSKfFoFk392V7dCBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs4ZGCvQg7Xnz68tUq3AO3m%2BcGfpcuB68mYzvzWVmsfeuRPkVvqUjSGo9PV4QFgN%2BQLE0LwDBQ5X73qqz8mkCgwfTS28lu4WboW%2BxBK8A81g6zzvEljObEYeB4iavXL%2FMLxZF8ZhXWZovZTLg%2BMQshiEw1QFg6GwjTfWW%2BDLTEPuaYMs6xbnNxQcg72wkUo38eecFASUxpHa04lScF3kM%2FZX%2F5MwVJkz%2FZu065P9BVRzlkdfF7%2BoQeiDxz0to8WOVgJj9SyMvbIcpw4HkkotroNdvCtq2pJQuv5b7nr%2FwLPu6BPcReQzURCRK0rE%2FsZl182ZExHGT7B7TV5l4Ql%2FRwu2BtrMLwvpkKyw%2FBLomqcvnrEMnZmhASaiV%2BpowV2eTXM9Rh9aH0paT%2FOa61muBD8PF7Tlktmnpgn0C%2FxKZouPM6X%2FMu0TWJz7OCjUbcpuj0yyo96YAfKv6rMCM0NXGQe%2FQ615CCYuxMHkp2EBiUU9pf1W7RJnwSR6rWHNcN6RGvWm0S%2BYAuBCy57OPTydrSqMSC1hG0DIdm9WZ%2F%2BLsnLB0lXdHeKewlcdFGIdWZ%2FjuZr0Tov3bxnpDIpLeDLMbrSVtPqNfGaofNjhCUfuFPM9CV7nZuTXHJCSctZ8BJUytZ%2B6JQxxEvXfnDEjC0orjBBjqkAWkOG6TIezMwc2XQ5HzhQZyVQmBoEihBXFRHj80LJklev7sbKQ959K9kab3uBi6xddonFgIvE03tfUzxMk5ewZ8UQ2z10HdJg%2BDcJV1YJnaCUFIdEpHYOthGsYtPxzIv%2BKeDI0PnGLLPu91arF4f%2BEW3UF4iCwa%2Bl2R8ZSH%2F%2FFJ5ZHi3x71lf%2Fdg9boYxbtTh%2BPhhN%2BSL5N%2F7ja95cMJplp6szoc&X-Amz-Signature=9a2ae720075e9a557f2832c1b8d096cc0d03465717b73a85d9a4a0bd0018611b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNJ6WUL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDlkHcazyVssa4%2FuvnM6MM7J0CaarjJS16XoAEd%2FCnBAQIhAK13%2BU7HV8uyJi5puFIFlnB2KSESQSKfFoFk392V7dCBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs4ZGCvQg7Xnz68tUq3AO3m%2BcGfpcuB68mYzvzWVmsfeuRPkVvqUjSGo9PV4QFgN%2BQLE0LwDBQ5X73qqz8mkCgwfTS28lu4WboW%2BxBK8A81g6zzvEljObEYeB4iavXL%2FMLxZF8ZhXWZovZTLg%2BMQshiEw1QFg6GwjTfWW%2BDLTEPuaYMs6xbnNxQcg72wkUo38eecFASUxpHa04lScF3kM%2FZX%2F5MwVJkz%2FZu065P9BVRzlkdfF7%2BoQeiDxz0to8WOVgJj9SyMvbIcpw4HkkotroNdvCtq2pJQuv5b7nr%2FwLPu6BPcReQzURCRK0rE%2FsZl182ZExHGT7B7TV5l4Ql%2FRwu2BtrMLwvpkKyw%2FBLomqcvnrEMnZmhASaiV%2BpowV2eTXM9Rh9aH0paT%2FOa61muBD8PF7Tlktmnpgn0C%2FxKZouPM6X%2FMu0TWJz7OCjUbcpuj0yyo96YAfKv6rMCM0NXGQe%2FQ615CCYuxMHkp2EBiUU9pf1W7RJnwSR6rWHNcN6RGvWm0S%2BYAuBCy57OPTydrSqMSC1hG0DIdm9WZ%2F%2BLsnLB0lXdHeKewlcdFGIdWZ%2FjuZr0Tov3bxnpDIpLeDLMbrSVtPqNfGaofNjhCUfuFPM9CV7nZuTXHJCSctZ8BJUytZ%2B6JQxxEvXfnDEjC0orjBBjqkAWkOG6TIezMwc2XQ5HzhQZyVQmBoEihBXFRHj80LJklev7sbKQ959K9kab3uBi6xddonFgIvE03tfUzxMk5ewZ8UQ2z10HdJg%2BDcJV1YJnaCUFIdEpHYOthGsYtPxzIv%2BKeDI0PnGLLPu91arF4f%2BEW3UF4iCwa%2Bl2R8ZSH%2F%2FFJ5ZHi3x71lf%2Fdg9boYxbtTh%2BPhhN%2BSL5N%2F7ja95cMJplp6szoc&X-Amz-Signature=30fa931f961a8f270431c16c7baa4839b30866eb24baf3a8675a0479265f6dff&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNJ6WUL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDlkHcazyVssa4%2FuvnM6MM7J0CaarjJS16XoAEd%2FCnBAQIhAK13%2BU7HV8uyJi5puFIFlnB2KSESQSKfFoFk392V7dCBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs4ZGCvQg7Xnz68tUq3AO3m%2BcGfpcuB68mYzvzWVmsfeuRPkVvqUjSGo9PV4QFgN%2BQLE0LwDBQ5X73qqz8mkCgwfTS28lu4WboW%2BxBK8A81g6zzvEljObEYeB4iavXL%2FMLxZF8ZhXWZovZTLg%2BMQshiEw1QFg6GwjTfWW%2BDLTEPuaYMs6xbnNxQcg72wkUo38eecFASUxpHa04lScF3kM%2FZX%2F5MwVJkz%2FZu065P9BVRzlkdfF7%2BoQeiDxz0to8WOVgJj9SyMvbIcpw4HkkotroNdvCtq2pJQuv5b7nr%2FwLPu6BPcReQzURCRK0rE%2FsZl182ZExHGT7B7TV5l4Ql%2FRwu2BtrMLwvpkKyw%2FBLomqcvnrEMnZmhASaiV%2BpowV2eTXM9Rh9aH0paT%2FOa61muBD8PF7Tlktmnpgn0C%2FxKZouPM6X%2FMu0TWJz7OCjUbcpuj0yyo96YAfKv6rMCM0NXGQe%2FQ615CCYuxMHkp2EBiUU9pf1W7RJnwSR6rWHNcN6RGvWm0S%2BYAuBCy57OPTydrSqMSC1hG0DIdm9WZ%2F%2BLsnLB0lXdHeKewlcdFGIdWZ%2FjuZr0Tov3bxnpDIpLeDLMbrSVtPqNfGaofNjhCUfuFPM9CV7nZuTXHJCSctZ8BJUytZ%2B6JQxxEvXfnDEjC0orjBBjqkAWkOG6TIezMwc2XQ5HzhQZyVQmBoEihBXFRHj80LJklev7sbKQ959K9kab3uBi6xddonFgIvE03tfUzxMk5ewZ8UQ2z10HdJg%2BDcJV1YJnaCUFIdEpHYOthGsYtPxzIv%2BKeDI0PnGLLPu91arF4f%2BEW3UF4iCwa%2Bl2R8ZSH%2F%2FFJ5ZHi3x71lf%2Fdg9boYxbtTh%2BPhhN%2BSL5N%2F7ja95cMJplp6szoc&X-Amz-Signature=b909153520f231eda3867ad7ee7793715a91e9d64baaaf22ff4ca7c55e2dfc19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNJ6WUL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDlkHcazyVssa4%2FuvnM6MM7J0CaarjJS16XoAEd%2FCnBAQIhAK13%2BU7HV8uyJi5puFIFlnB2KSESQSKfFoFk392V7dCBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs4ZGCvQg7Xnz68tUq3AO3m%2BcGfpcuB68mYzvzWVmsfeuRPkVvqUjSGo9PV4QFgN%2BQLE0LwDBQ5X73qqz8mkCgwfTS28lu4WboW%2BxBK8A81g6zzvEljObEYeB4iavXL%2FMLxZF8ZhXWZovZTLg%2BMQshiEw1QFg6GwjTfWW%2BDLTEPuaYMs6xbnNxQcg72wkUo38eecFASUxpHa04lScF3kM%2FZX%2F5MwVJkz%2FZu065P9BVRzlkdfF7%2BoQeiDxz0to8WOVgJj9SyMvbIcpw4HkkotroNdvCtq2pJQuv5b7nr%2FwLPu6BPcReQzURCRK0rE%2FsZl182ZExHGT7B7TV5l4Ql%2FRwu2BtrMLwvpkKyw%2FBLomqcvnrEMnZmhASaiV%2BpowV2eTXM9Rh9aH0paT%2FOa61muBD8PF7Tlktmnpgn0C%2FxKZouPM6X%2FMu0TWJz7OCjUbcpuj0yyo96YAfKv6rMCM0NXGQe%2FQ615CCYuxMHkp2EBiUU9pf1W7RJnwSR6rWHNcN6RGvWm0S%2BYAuBCy57OPTydrSqMSC1hG0DIdm9WZ%2F%2BLsnLB0lXdHeKewlcdFGIdWZ%2FjuZr0Tov3bxnpDIpLeDLMbrSVtPqNfGaofNjhCUfuFPM9CV7nZuTXHJCSctZ8BJUytZ%2B6JQxxEvXfnDEjC0orjBBjqkAWkOG6TIezMwc2XQ5HzhQZyVQmBoEihBXFRHj80LJklev7sbKQ959K9kab3uBi6xddonFgIvE03tfUzxMk5ewZ8UQ2z10HdJg%2BDcJV1YJnaCUFIdEpHYOthGsYtPxzIv%2BKeDI0PnGLLPu91arF4f%2BEW3UF4iCwa%2Bl2R8ZSH%2F%2FFJ5ZHi3x71lf%2Fdg9boYxbtTh%2BPhhN%2BSL5N%2F7ja95cMJplp6szoc&X-Amz-Signature=bff2fdae79f581b760dc25fcd20a874ab6cd83d3531d5e801d779d702ee90231&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNJ6WUL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDlkHcazyVssa4%2FuvnM6MM7J0CaarjJS16XoAEd%2FCnBAQIhAK13%2BU7HV8uyJi5puFIFlnB2KSESQSKfFoFk392V7dCBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs4ZGCvQg7Xnz68tUq3AO3m%2BcGfpcuB68mYzvzWVmsfeuRPkVvqUjSGo9PV4QFgN%2BQLE0LwDBQ5X73qqz8mkCgwfTS28lu4WboW%2BxBK8A81g6zzvEljObEYeB4iavXL%2FMLxZF8ZhXWZovZTLg%2BMQshiEw1QFg6GwjTfWW%2BDLTEPuaYMs6xbnNxQcg72wkUo38eecFASUxpHa04lScF3kM%2FZX%2F5MwVJkz%2FZu065P9BVRzlkdfF7%2BoQeiDxz0to8WOVgJj9SyMvbIcpw4HkkotroNdvCtq2pJQuv5b7nr%2FwLPu6BPcReQzURCRK0rE%2FsZl182ZExHGT7B7TV5l4Ql%2FRwu2BtrMLwvpkKyw%2FBLomqcvnrEMnZmhASaiV%2BpowV2eTXM9Rh9aH0paT%2FOa61muBD8PF7Tlktmnpgn0C%2FxKZouPM6X%2FMu0TWJz7OCjUbcpuj0yyo96YAfKv6rMCM0NXGQe%2FQ615CCYuxMHkp2EBiUU9pf1W7RJnwSR6rWHNcN6RGvWm0S%2BYAuBCy57OPTydrSqMSC1hG0DIdm9WZ%2F%2BLsnLB0lXdHeKewlcdFGIdWZ%2FjuZr0Tov3bxnpDIpLeDLMbrSVtPqNfGaofNjhCUfuFPM9CV7nZuTXHJCSctZ8BJUytZ%2B6JQxxEvXfnDEjC0orjBBjqkAWkOG6TIezMwc2XQ5HzhQZyVQmBoEihBXFRHj80LJklev7sbKQ959K9kab3uBi6xddonFgIvE03tfUzxMk5ewZ8UQ2z10HdJg%2BDcJV1YJnaCUFIdEpHYOthGsYtPxzIv%2BKeDI0PnGLLPu91arF4f%2BEW3UF4iCwa%2Bl2R8ZSH%2F%2FFJ5ZHi3x71lf%2Fdg9boYxbtTh%2BPhhN%2BSL5N%2F7ja95cMJplp6szoc&X-Amz-Signature=0597e4d229ba16c8b7ebe255af4b0372f102c520133504c748c32c4c63094816&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNJ6WUL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDlkHcazyVssa4%2FuvnM6MM7J0CaarjJS16XoAEd%2FCnBAQIhAK13%2BU7HV8uyJi5puFIFlnB2KSESQSKfFoFk392V7dCBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs4ZGCvQg7Xnz68tUq3AO3m%2BcGfpcuB68mYzvzWVmsfeuRPkVvqUjSGo9PV4QFgN%2BQLE0LwDBQ5X73qqz8mkCgwfTS28lu4WboW%2BxBK8A81g6zzvEljObEYeB4iavXL%2FMLxZF8ZhXWZovZTLg%2BMQshiEw1QFg6GwjTfWW%2BDLTEPuaYMs6xbnNxQcg72wkUo38eecFASUxpHa04lScF3kM%2FZX%2F5MwVJkz%2FZu065P9BVRzlkdfF7%2BoQeiDxz0to8WOVgJj9SyMvbIcpw4HkkotroNdvCtq2pJQuv5b7nr%2FwLPu6BPcReQzURCRK0rE%2FsZl182ZExHGT7B7TV5l4Ql%2FRwu2BtrMLwvpkKyw%2FBLomqcvnrEMnZmhASaiV%2BpowV2eTXM9Rh9aH0paT%2FOa61muBD8PF7Tlktmnpgn0C%2FxKZouPM6X%2FMu0TWJz7OCjUbcpuj0yyo96YAfKv6rMCM0NXGQe%2FQ615CCYuxMHkp2EBiUU9pf1W7RJnwSR6rWHNcN6RGvWm0S%2BYAuBCy57OPTydrSqMSC1hG0DIdm9WZ%2F%2BLsnLB0lXdHeKewlcdFGIdWZ%2FjuZr0Tov3bxnpDIpLeDLMbrSVtPqNfGaofNjhCUfuFPM9CV7nZuTXHJCSctZ8BJUytZ%2B6JQxxEvXfnDEjC0orjBBjqkAWkOG6TIezMwc2XQ5HzhQZyVQmBoEihBXFRHj80LJklev7sbKQ959K9kab3uBi6xddonFgIvE03tfUzxMk5ewZ8UQ2z10HdJg%2BDcJV1YJnaCUFIdEpHYOthGsYtPxzIv%2BKeDI0PnGLLPu91arF4f%2BEW3UF4iCwa%2Bl2R8ZSH%2F%2FFJ5ZHi3x71lf%2Fdg9boYxbtTh%2BPhhN%2BSL5N%2F7ja95cMJplp6szoc&X-Amz-Signature=78ce19b86d6c125cff6b5f39ea8622a933867f0ad925213cd83311eb15ea2a72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVNJ6WUL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDlkHcazyVssa4%2FuvnM6MM7J0CaarjJS16XoAEd%2FCnBAQIhAK13%2BU7HV8uyJi5puFIFlnB2KSESQSKfFoFk392V7dCBKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxs4ZGCvQg7Xnz68tUq3AO3m%2BcGfpcuB68mYzvzWVmsfeuRPkVvqUjSGo9PV4QFgN%2BQLE0LwDBQ5X73qqz8mkCgwfTS28lu4WboW%2BxBK8A81g6zzvEljObEYeB4iavXL%2FMLxZF8ZhXWZovZTLg%2BMQshiEw1QFg6GwjTfWW%2BDLTEPuaYMs6xbnNxQcg72wkUo38eecFASUxpHa04lScF3kM%2FZX%2F5MwVJkz%2FZu065P9BVRzlkdfF7%2BoQeiDxz0to8WOVgJj9SyMvbIcpw4HkkotroNdvCtq2pJQuv5b7nr%2FwLPu6BPcReQzURCRK0rE%2FsZl182ZExHGT7B7TV5l4Ql%2FRwu2BtrMLwvpkKyw%2FBLomqcvnrEMnZmhASaiV%2BpowV2eTXM9Rh9aH0paT%2FOa61muBD8PF7Tlktmnpgn0C%2FxKZouPM6X%2FMu0TWJz7OCjUbcpuj0yyo96YAfKv6rMCM0NXGQe%2FQ615CCYuxMHkp2EBiUU9pf1W7RJnwSR6rWHNcN6RGvWm0S%2BYAuBCy57OPTydrSqMSC1hG0DIdm9WZ%2F%2BLsnLB0lXdHeKewlcdFGIdWZ%2FjuZr0Tov3bxnpDIpLeDLMbrSVtPqNfGaofNjhCUfuFPM9CV7nZuTXHJCSctZ8BJUytZ%2B6JQxxEvXfnDEjC0orjBBjqkAWkOG6TIezMwc2XQ5HzhQZyVQmBoEihBXFRHj80LJklev7sbKQ959K9kab3uBi6xddonFgIvE03tfUzxMk5ewZ8UQ2z10HdJg%2BDcJV1YJnaCUFIdEpHYOthGsYtPxzIv%2BKeDI0PnGLLPu91arF4f%2BEW3UF4iCwa%2Bl2R8ZSH%2F%2FFJ5ZHi3x71lf%2Fdg9boYxbtTh%2BPhhN%2BSL5N%2F7ja95cMJplp6szoc&X-Amz-Signature=d0c034e5a8126bf317d70403ba3966f1bb7d3ec53a9f80c5b0c8e02b09132ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
