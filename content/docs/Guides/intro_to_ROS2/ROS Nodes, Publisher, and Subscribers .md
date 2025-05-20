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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YI7BEJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCsTZEv%2FV%2FEqH8xUTBjjcN4XX7v6FxEPkJzPJL%2BAbW5AIhAO79rwvxA6dB4%2FPAclK314NY2fONkPbBoWOElIMkm%2BNYKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhTa4m%2BxxLnCJGDuUq3APrH3gXLws3P5W6iOTV%2BT%2Fhw3%2B%2BJnYY5KmdWH9QMavMpYYNSG8PJFlTAFMMY4jZfLe%2FWHeZIVm4N8WZ3CeJj4pt1c3KEVSYGyL5GEiPovne0SAzBqllIsZaNBnYgBCPy%2FHKHUT%2B4EP6JoDv7rcolWcUVRrLE4i4ey6Tzm0FInIDdQ5K3ikLh0h%2Fpn4kd7JpMbNlKzvdjvq5aw%2BFs0dT1SNII9MBCmU4FIHkoPu8nej8LgLs2AO4RYrK1fqgZWSGpdAa58upLsUQSVrvkibsyeNFAkVKnBWWKY3dfaDlQQE05CvjSuqJwzsgyOVCq8Gl4UR53wYG4dX9ccbiSSRDpsLyIOJw%2B5JSJ3Al3AfQh53N0C19TKX484ftv9JVkFNgDtq%2BRmmKV%2B7Mn%2Bc%2Fi8rEfovcN0Ta9cnEAQ84dj%2B%2F5%2F2UcGxwCG5MKePvOtezAryH1OyoHJbyjbgn0FZhbR%2FDIaJ%2BviWGY2xIliIUrMb1OtR4EQht01qf4d%2FE2agI2B95EH5ejn4OIYoZF6MxQmPqmmAaJuAwbsSS2EgZxvEZjRAxICvsmWGS7%2FobJ0LDgVHU0PaGlh4VZ1dvZ4aBxd%2B%2BgZ%2B4T%2FPg4sU7afP%2BAtcehZKcHymaUz0U84GZa%2BYP2DCq46%2FBBjqkAd8TJazo5BgEgwcH3%2BozesGTx7JPRlofGMXbB6Ox7V%2B0l8nadhr1RKJYahZoOB8Wr4JxLKS2Bbg%2BbYXPMsm53mnjs2%2FjBr4XFvq14VtwPQb6jAtJwlZwn5axuJDdW9mXC0Ymwv9PkRCesPq3njWb3ITEsC9DiRuWQgM2op58S2kL6bM4rtL%2FN%2BQapNTx9tKDzfUUFrvCoNLfn%2BJpKPX%2BrEpOfD0B&X-Amz-Signature=c389f5120bc798a96e4fd8c953c70b2b2a8358ab53b0ed69e12cef84d686ffc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YI7BEJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCsTZEv%2FV%2FEqH8xUTBjjcN4XX7v6FxEPkJzPJL%2BAbW5AIhAO79rwvxA6dB4%2FPAclK314NY2fONkPbBoWOElIMkm%2BNYKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhTa4m%2BxxLnCJGDuUq3APrH3gXLws3P5W6iOTV%2BT%2Fhw3%2B%2BJnYY5KmdWH9QMavMpYYNSG8PJFlTAFMMY4jZfLe%2FWHeZIVm4N8WZ3CeJj4pt1c3KEVSYGyL5GEiPovne0SAzBqllIsZaNBnYgBCPy%2FHKHUT%2B4EP6JoDv7rcolWcUVRrLE4i4ey6Tzm0FInIDdQ5K3ikLh0h%2Fpn4kd7JpMbNlKzvdjvq5aw%2BFs0dT1SNII9MBCmU4FIHkoPu8nej8LgLs2AO4RYrK1fqgZWSGpdAa58upLsUQSVrvkibsyeNFAkVKnBWWKY3dfaDlQQE05CvjSuqJwzsgyOVCq8Gl4UR53wYG4dX9ccbiSSRDpsLyIOJw%2B5JSJ3Al3AfQh53N0C19TKX484ftv9JVkFNgDtq%2BRmmKV%2B7Mn%2Bc%2Fi8rEfovcN0Ta9cnEAQ84dj%2B%2F5%2F2UcGxwCG5MKePvOtezAryH1OyoHJbyjbgn0FZhbR%2FDIaJ%2BviWGY2xIliIUrMb1OtR4EQht01qf4d%2FE2agI2B95EH5ejn4OIYoZF6MxQmPqmmAaJuAwbsSS2EgZxvEZjRAxICvsmWGS7%2FobJ0LDgVHU0PaGlh4VZ1dvZ4aBxd%2B%2BgZ%2B4T%2FPg4sU7afP%2BAtcehZKcHymaUz0U84GZa%2BYP2DCq46%2FBBjqkAd8TJazo5BgEgwcH3%2BozesGTx7JPRlofGMXbB6Ox7V%2B0l8nadhr1RKJYahZoOB8Wr4JxLKS2Bbg%2BbYXPMsm53mnjs2%2FjBr4XFvq14VtwPQb6jAtJwlZwn5axuJDdW9mXC0Ymwv9PkRCesPq3njWb3ITEsC9DiRuWQgM2op58S2kL6bM4rtL%2FN%2BQapNTx9tKDzfUUFrvCoNLfn%2BJpKPX%2BrEpOfD0B&X-Amz-Signature=7cf6109fed5e854ea24fe2a5290f9200c0db7f24a9f47a73b3d13a86e4e6ab88&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YI7BEJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCsTZEv%2FV%2FEqH8xUTBjjcN4XX7v6FxEPkJzPJL%2BAbW5AIhAO79rwvxA6dB4%2FPAclK314NY2fONkPbBoWOElIMkm%2BNYKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhTa4m%2BxxLnCJGDuUq3APrH3gXLws3P5W6iOTV%2BT%2Fhw3%2B%2BJnYY5KmdWH9QMavMpYYNSG8PJFlTAFMMY4jZfLe%2FWHeZIVm4N8WZ3CeJj4pt1c3KEVSYGyL5GEiPovne0SAzBqllIsZaNBnYgBCPy%2FHKHUT%2B4EP6JoDv7rcolWcUVRrLE4i4ey6Tzm0FInIDdQ5K3ikLh0h%2Fpn4kd7JpMbNlKzvdjvq5aw%2BFs0dT1SNII9MBCmU4FIHkoPu8nej8LgLs2AO4RYrK1fqgZWSGpdAa58upLsUQSVrvkibsyeNFAkVKnBWWKY3dfaDlQQE05CvjSuqJwzsgyOVCq8Gl4UR53wYG4dX9ccbiSSRDpsLyIOJw%2B5JSJ3Al3AfQh53N0C19TKX484ftv9JVkFNgDtq%2BRmmKV%2B7Mn%2Bc%2Fi8rEfovcN0Ta9cnEAQ84dj%2B%2F5%2F2UcGxwCG5MKePvOtezAryH1OyoHJbyjbgn0FZhbR%2FDIaJ%2BviWGY2xIliIUrMb1OtR4EQht01qf4d%2FE2agI2B95EH5ejn4OIYoZF6MxQmPqmmAaJuAwbsSS2EgZxvEZjRAxICvsmWGS7%2FobJ0LDgVHU0PaGlh4VZ1dvZ4aBxd%2B%2BgZ%2B4T%2FPg4sU7afP%2BAtcehZKcHymaUz0U84GZa%2BYP2DCq46%2FBBjqkAd8TJazo5BgEgwcH3%2BozesGTx7JPRlofGMXbB6Ox7V%2B0l8nadhr1RKJYahZoOB8Wr4JxLKS2Bbg%2BbYXPMsm53mnjs2%2FjBr4XFvq14VtwPQb6jAtJwlZwn5axuJDdW9mXC0Ymwv9PkRCesPq3njWb3ITEsC9DiRuWQgM2op58S2kL6bM4rtL%2FN%2BQapNTx9tKDzfUUFrvCoNLfn%2BJpKPX%2BrEpOfD0B&X-Amz-Signature=302b2ffe72b80039c3124f115eb55476915c34019987bda1a062ef07308cfaec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YI7BEJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCsTZEv%2FV%2FEqH8xUTBjjcN4XX7v6FxEPkJzPJL%2BAbW5AIhAO79rwvxA6dB4%2FPAclK314NY2fONkPbBoWOElIMkm%2BNYKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhTa4m%2BxxLnCJGDuUq3APrH3gXLws3P5W6iOTV%2BT%2Fhw3%2B%2BJnYY5KmdWH9QMavMpYYNSG8PJFlTAFMMY4jZfLe%2FWHeZIVm4N8WZ3CeJj4pt1c3KEVSYGyL5GEiPovne0SAzBqllIsZaNBnYgBCPy%2FHKHUT%2B4EP6JoDv7rcolWcUVRrLE4i4ey6Tzm0FInIDdQ5K3ikLh0h%2Fpn4kd7JpMbNlKzvdjvq5aw%2BFs0dT1SNII9MBCmU4FIHkoPu8nej8LgLs2AO4RYrK1fqgZWSGpdAa58upLsUQSVrvkibsyeNFAkVKnBWWKY3dfaDlQQE05CvjSuqJwzsgyOVCq8Gl4UR53wYG4dX9ccbiSSRDpsLyIOJw%2B5JSJ3Al3AfQh53N0C19TKX484ftv9JVkFNgDtq%2BRmmKV%2B7Mn%2Bc%2Fi8rEfovcN0Ta9cnEAQ84dj%2B%2F5%2F2UcGxwCG5MKePvOtezAryH1OyoHJbyjbgn0FZhbR%2FDIaJ%2BviWGY2xIliIUrMb1OtR4EQht01qf4d%2FE2agI2B95EH5ejn4OIYoZF6MxQmPqmmAaJuAwbsSS2EgZxvEZjRAxICvsmWGS7%2FobJ0LDgVHU0PaGlh4VZ1dvZ4aBxd%2B%2BgZ%2B4T%2FPg4sU7afP%2BAtcehZKcHymaUz0U84GZa%2BYP2DCq46%2FBBjqkAd8TJazo5BgEgwcH3%2BozesGTx7JPRlofGMXbB6Ox7V%2B0l8nadhr1RKJYahZoOB8Wr4JxLKS2Bbg%2BbYXPMsm53mnjs2%2FjBr4XFvq14VtwPQb6jAtJwlZwn5axuJDdW9mXC0Ymwv9PkRCesPq3njWb3ITEsC9DiRuWQgM2op58S2kL6bM4rtL%2FN%2BQapNTx9tKDzfUUFrvCoNLfn%2BJpKPX%2BrEpOfD0B&X-Amz-Signature=d0d0b1e8fe141ae02b52edb9a55e1ac29a5dce3c5eebfc040e206ae82cbaf65d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YI7BEJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCsTZEv%2FV%2FEqH8xUTBjjcN4XX7v6FxEPkJzPJL%2BAbW5AIhAO79rwvxA6dB4%2FPAclK314NY2fONkPbBoWOElIMkm%2BNYKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhTa4m%2BxxLnCJGDuUq3APrH3gXLws3P5W6iOTV%2BT%2Fhw3%2B%2BJnYY5KmdWH9QMavMpYYNSG8PJFlTAFMMY4jZfLe%2FWHeZIVm4N8WZ3CeJj4pt1c3KEVSYGyL5GEiPovne0SAzBqllIsZaNBnYgBCPy%2FHKHUT%2B4EP6JoDv7rcolWcUVRrLE4i4ey6Tzm0FInIDdQ5K3ikLh0h%2Fpn4kd7JpMbNlKzvdjvq5aw%2BFs0dT1SNII9MBCmU4FIHkoPu8nej8LgLs2AO4RYrK1fqgZWSGpdAa58upLsUQSVrvkibsyeNFAkVKnBWWKY3dfaDlQQE05CvjSuqJwzsgyOVCq8Gl4UR53wYG4dX9ccbiSSRDpsLyIOJw%2B5JSJ3Al3AfQh53N0C19TKX484ftv9JVkFNgDtq%2BRmmKV%2B7Mn%2Bc%2Fi8rEfovcN0Ta9cnEAQ84dj%2B%2F5%2F2UcGxwCG5MKePvOtezAryH1OyoHJbyjbgn0FZhbR%2FDIaJ%2BviWGY2xIliIUrMb1OtR4EQht01qf4d%2FE2agI2B95EH5ejn4OIYoZF6MxQmPqmmAaJuAwbsSS2EgZxvEZjRAxICvsmWGS7%2FobJ0LDgVHU0PaGlh4VZ1dvZ4aBxd%2B%2BgZ%2B4T%2FPg4sU7afP%2BAtcehZKcHymaUz0U84GZa%2BYP2DCq46%2FBBjqkAd8TJazo5BgEgwcH3%2BozesGTx7JPRlofGMXbB6Ox7V%2B0l8nadhr1RKJYahZoOB8Wr4JxLKS2Bbg%2BbYXPMsm53mnjs2%2FjBr4XFvq14VtwPQb6jAtJwlZwn5axuJDdW9mXC0Ymwv9PkRCesPq3njWb3ITEsC9DiRuWQgM2op58S2kL6bM4rtL%2FN%2BQapNTx9tKDzfUUFrvCoNLfn%2BJpKPX%2BrEpOfD0B&X-Amz-Signature=d6bdf3a38a559a9544e61f251b34baa48f7579e2a13e4502be62017d86410255&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YI7BEJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCsTZEv%2FV%2FEqH8xUTBjjcN4XX7v6FxEPkJzPJL%2BAbW5AIhAO79rwvxA6dB4%2FPAclK314NY2fONkPbBoWOElIMkm%2BNYKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhTa4m%2BxxLnCJGDuUq3APrH3gXLws3P5W6iOTV%2BT%2Fhw3%2B%2BJnYY5KmdWH9QMavMpYYNSG8PJFlTAFMMY4jZfLe%2FWHeZIVm4N8WZ3CeJj4pt1c3KEVSYGyL5GEiPovne0SAzBqllIsZaNBnYgBCPy%2FHKHUT%2B4EP6JoDv7rcolWcUVRrLE4i4ey6Tzm0FInIDdQ5K3ikLh0h%2Fpn4kd7JpMbNlKzvdjvq5aw%2BFs0dT1SNII9MBCmU4FIHkoPu8nej8LgLs2AO4RYrK1fqgZWSGpdAa58upLsUQSVrvkibsyeNFAkVKnBWWKY3dfaDlQQE05CvjSuqJwzsgyOVCq8Gl4UR53wYG4dX9ccbiSSRDpsLyIOJw%2B5JSJ3Al3AfQh53N0C19TKX484ftv9JVkFNgDtq%2BRmmKV%2B7Mn%2Bc%2Fi8rEfovcN0Ta9cnEAQ84dj%2B%2F5%2F2UcGxwCG5MKePvOtezAryH1OyoHJbyjbgn0FZhbR%2FDIaJ%2BviWGY2xIliIUrMb1OtR4EQht01qf4d%2FE2agI2B95EH5ejn4OIYoZF6MxQmPqmmAaJuAwbsSS2EgZxvEZjRAxICvsmWGS7%2FobJ0LDgVHU0PaGlh4VZ1dvZ4aBxd%2B%2BgZ%2B4T%2FPg4sU7afP%2BAtcehZKcHymaUz0U84GZa%2BYP2DCq46%2FBBjqkAd8TJazo5BgEgwcH3%2BozesGTx7JPRlofGMXbB6Ox7V%2B0l8nadhr1RKJYahZoOB8Wr4JxLKS2Bbg%2BbYXPMsm53mnjs2%2FjBr4XFvq14VtwPQb6jAtJwlZwn5axuJDdW9mXC0Ymwv9PkRCesPq3njWb3ITEsC9DiRuWQgM2op58S2kL6bM4rtL%2FN%2BQapNTx9tKDzfUUFrvCoNLfn%2BJpKPX%2BrEpOfD0B&X-Amz-Signature=83a5f3d67ae557c893b7109e10ee501cfb4ca4511036f1d6a4b3c6e356418542&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YI7BEJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCsTZEv%2FV%2FEqH8xUTBjjcN4XX7v6FxEPkJzPJL%2BAbW5AIhAO79rwvxA6dB4%2FPAclK314NY2fONkPbBoWOElIMkm%2BNYKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhTa4m%2BxxLnCJGDuUq3APrH3gXLws3P5W6iOTV%2BT%2Fhw3%2B%2BJnYY5KmdWH9QMavMpYYNSG8PJFlTAFMMY4jZfLe%2FWHeZIVm4N8WZ3CeJj4pt1c3KEVSYGyL5GEiPovne0SAzBqllIsZaNBnYgBCPy%2FHKHUT%2B4EP6JoDv7rcolWcUVRrLE4i4ey6Tzm0FInIDdQ5K3ikLh0h%2Fpn4kd7JpMbNlKzvdjvq5aw%2BFs0dT1SNII9MBCmU4FIHkoPu8nej8LgLs2AO4RYrK1fqgZWSGpdAa58upLsUQSVrvkibsyeNFAkVKnBWWKY3dfaDlQQE05CvjSuqJwzsgyOVCq8Gl4UR53wYG4dX9ccbiSSRDpsLyIOJw%2B5JSJ3Al3AfQh53N0C19TKX484ftv9JVkFNgDtq%2BRmmKV%2B7Mn%2Bc%2Fi8rEfovcN0Ta9cnEAQ84dj%2B%2F5%2F2UcGxwCG5MKePvOtezAryH1OyoHJbyjbgn0FZhbR%2FDIaJ%2BviWGY2xIliIUrMb1OtR4EQht01qf4d%2FE2agI2B95EH5ejn4OIYoZF6MxQmPqmmAaJuAwbsSS2EgZxvEZjRAxICvsmWGS7%2FobJ0LDgVHU0PaGlh4VZ1dvZ4aBxd%2B%2BgZ%2B4T%2FPg4sU7afP%2BAtcehZKcHymaUz0U84GZa%2BYP2DCq46%2FBBjqkAd8TJazo5BgEgwcH3%2BozesGTx7JPRlofGMXbB6Ox7V%2B0l8nadhr1RKJYahZoOB8Wr4JxLKS2Bbg%2BbYXPMsm53mnjs2%2FjBr4XFvq14VtwPQb6jAtJwlZwn5axuJDdW9mXC0Ymwv9PkRCesPq3njWb3ITEsC9DiRuWQgM2op58S2kL6bM4rtL%2FN%2BQapNTx9tKDzfUUFrvCoNLfn%2BJpKPX%2BrEpOfD0B&X-Amz-Signature=49a64862e11f9357b4fca614c18c4f7c7702da1878e9ced8e30b186d3abe0f66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YI7BEJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCsTZEv%2FV%2FEqH8xUTBjjcN4XX7v6FxEPkJzPJL%2BAbW5AIhAO79rwvxA6dB4%2FPAclK314NY2fONkPbBoWOElIMkm%2BNYKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhTa4m%2BxxLnCJGDuUq3APrH3gXLws3P5W6iOTV%2BT%2Fhw3%2B%2BJnYY5KmdWH9QMavMpYYNSG8PJFlTAFMMY4jZfLe%2FWHeZIVm4N8WZ3CeJj4pt1c3KEVSYGyL5GEiPovne0SAzBqllIsZaNBnYgBCPy%2FHKHUT%2B4EP6JoDv7rcolWcUVRrLE4i4ey6Tzm0FInIDdQ5K3ikLh0h%2Fpn4kd7JpMbNlKzvdjvq5aw%2BFs0dT1SNII9MBCmU4FIHkoPu8nej8LgLs2AO4RYrK1fqgZWSGpdAa58upLsUQSVrvkibsyeNFAkVKnBWWKY3dfaDlQQE05CvjSuqJwzsgyOVCq8Gl4UR53wYG4dX9ccbiSSRDpsLyIOJw%2B5JSJ3Al3AfQh53N0C19TKX484ftv9JVkFNgDtq%2BRmmKV%2B7Mn%2Bc%2Fi8rEfovcN0Ta9cnEAQ84dj%2B%2F5%2F2UcGxwCG5MKePvOtezAryH1OyoHJbyjbgn0FZhbR%2FDIaJ%2BviWGY2xIliIUrMb1OtR4EQht01qf4d%2FE2agI2B95EH5ejn4OIYoZF6MxQmPqmmAaJuAwbsSS2EgZxvEZjRAxICvsmWGS7%2FobJ0LDgVHU0PaGlh4VZ1dvZ4aBxd%2B%2BgZ%2B4T%2FPg4sU7afP%2BAtcehZKcHymaUz0U84GZa%2BYP2DCq46%2FBBjqkAd8TJazo5BgEgwcH3%2BozesGTx7JPRlofGMXbB6Ox7V%2B0l8nadhr1RKJYahZoOB8Wr4JxLKS2Bbg%2BbYXPMsm53mnjs2%2FjBr4XFvq14VtwPQb6jAtJwlZwn5axuJDdW9mXC0Ymwv9PkRCesPq3njWb3ITEsC9DiRuWQgM2op58S2kL6bM4rtL%2FN%2BQapNTx9tKDzfUUFrvCoNLfn%2BJpKPX%2BrEpOfD0B&X-Amz-Signature=94bb8f63d074a6db428fe47b59f2140ebb62ca1aacd1d3ede7c251d40b5049be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
