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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKLZFFF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTZY%2FgxEwmRfPpyf3VvS9hygJbiHwbzIzHK5HHINL7MwIhAOhL4d6LoHzQulJeEa9nbrQMvwAKICWzWuorrKkdCLiYKv8DCBMQABoMNjM3NDIzMTgzODA1IgwBXEzpjH8VPfdHJlsq3AMqurvcdCYeUgUIzlkKPQQ90ZYmph%2Bmhmo%2ByzQSMGtE14h3%2B8X0XKrNO4nB2ID5qe9qOsUHj9w6MMSYB%2F05cpsl5kZViCbFWT9PweGawzKFjB3dW5jqK3gy6LFnM2MWmjzPpDYfyP1ma%2Fx93mI9XJY2RfMF6yXIpfX62JSMedKcb3SXaXeJ5zkqkmIIQTv1Ewc08W4iijf5dgt3LlbXJ%2BwqtsxHyFInQu4iFLwderCy%2BHIpG7W9ZIWGeJOoC3rzcNA4O8coDP5doflOTNK5cTnb%2FyohY%2BqJC8XCNu9pBSsGjam0TSz9ArtEzoEYax2uPmC08p2JNSmzL73XhkxId4cX1wNnlhgwn6z7fJS9XF9L9sO%2BMLKRHJdQ5rWQFnghBs%2F5d1w%2FDGLyvELY%2BwuA7qLCrai4NHh4DCFkkZxsKUXntWQWpmtGuA2vdIOEvLcLkf9QKAXvcmKEkachIOzj5bcUfVOy5BTF2pWjguYIPGkw%2BNSRUL6BDBZT6MJIcRIJUivjaMLKV38R%2BzQNU6ajku7XD3bkwIjenfoHBV0i%2FdwSHHiIKbRtmXeSpiQPCKeW2DysrKWiXCAEvlk0ykcT3VRjLXL34T1vg9fSIC0qddmn%2B2X5eab%2BaLvB7qq8KTCK5uu9BjqkAZ3pO7GU68Fd7a%2Bc4WjNwkfAIQkmZ9VWNaJy8zEasd0YJmJCwivSzjhkBvew65swctqe7dhOrj%2F3e9r%2FmpO3WqdBoSCbE8m%2FEhljwVvcYK8S0y0HQh6EXmnAyOe%2FDmAPDKMSukA9B%2BXic4zWyv3l6wcKkj8ZGJkghyamfDrKdoMbJRZciDu%2BZyOJwTPsbEQa2Z3eg2VvxIqyhGpqOmvaBG6M9512&X-Amz-Signature=ae814f9b6e60a9c4aae5375c20a40074cbd55e7afd0091d28357c2388e2304ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKLZFFF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTZY%2FgxEwmRfPpyf3VvS9hygJbiHwbzIzHK5HHINL7MwIhAOhL4d6LoHzQulJeEa9nbrQMvwAKICWzWuorrKkdCLiYKv8DCBMQABoMNjM3NDIzMTgzODA1IgwBXEzpjH8VPfdHJlsq3AMqurvcdCYeUgUIzlkKPQQ90ZYmph%2Bmhmo%2ByzQSMGtE14h3%2B8X0XKrNO4nB2ID5qe9qOsUHj9w6MMSYB%2F05cpsl5kZViCbFWT9PweGawzKFjB3dW5jqK3gy6LFnM2MWmjzPpDYfyP1ma%2Fx93mI9XJY2RfMF6yXIpfX62JSMedKcb3SXaXeJ5zkqkmIIQTv1Ewc08W4iijf5dgt3LlbXJ%2BwqtsxHyFInQu4iFLwderCy%2BHIpG7W9ZIWGeJOoC3rzcNA4O8coDP5doflOTNK5cTnb%2FyohY%2BqJC8XCNu9pBSsGjam0TSz9ArtEzoEYax2uPmC08p2JNSmzL73XhkxId4cX1wNnlhgwn6z7fJS9XF9L9sO%2BMLKRHJdQ5rWQFnghBs%2F5d1w%2FDGLyvELY%2BwuA7qLCrai4NHh4DCFkkZxsKUXntWQWpmtGuA2vdIOEvLcLkf9QKAXvcmKEkachIOzj5bcUfVOy5BTF2pWjguYIPGkw%2BNSRUL6BDBZT6MJIcRIJUivjaMLKV38R%2BzQNU6ajku7XD3bkwIjenfoHBV0i%2FdwSHHiIKbRtmXeSpiQPCKeW2DysrKWiXCAEvlk0ykcT3VRjLXL34T1vg9fSIC0qddmn%2B2X5eab%2BaLvB7qq8KTCK5uu9BjqkAZ3pO7GU68Fd7a%2Bc4WjNwkfAIQkmZ9VWNaJy8zEasd0YJmJCwivSzjhkBvew65swctqe7dhOrj%2F3e9r%2FmpO3WqdBoSCbE8m%2FEhljwVvcYK8S0y0HQh6EXmnAyOe%2FDmAPDKMSukA9B%2BXic4zWyv3l6wcKkj8ZGJkghyamfDrKdoMbJRZciDu%2BZyOJwTPsbEQa2Z3eg2VvxIqyhGpqOmvaBG6M9512&X-Amz-Signature=29354b182ad1808a306c21e268508066bda578a977c176c24143781827d6e8b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKLZFFF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTZY%2FgxEwmRfPpyf3VvS9hygJbiHwbzIzHK5HHINL7MwIhAOhL4d6LoHzQulJeEa9nbrQMvwAKICWzWuorrKkdCLiYKv8DCBMQABoMNjM3NDIzMTgzODA1IgwBXEzpjH8VPfdHJlsq3AMqurvcdCYeUgUIzlkKPQQ90ZYmph%2Bmhmo%2ByzQSMGtE14h3%2B8X0XKrNO4nB2ID5qe9qOsUHj9w6MMSYB%2F05cpsl5kZViCbFWT9PweGawzKFjB3dW5jqK3gy6LFnM2MWmjzPpDYfyP1ma%2Fx93mI9XJY2RfMF6yXIpfX62JSMedKcb3SXaXeJ5zkqkmIIQTv1Ewc08W4iijf5dgt3LlbXJ%2BwqtsxHyFInQu4iFLwderCy%2BHIpG7W9ZIWGeJOoC3rzcNA4O8coDP5doflOTNK5cTnb%2FyohY%2BqJC8XCNu9pBSsGjam0TSz9ArtEzoEYax2uPmC08p2JNSmzL73XhkxId4cX1wNnlhgwn6z7fJS9XF9L9sO%2BMLKRHJdQ5rWQFnghBs%2F5d1w%2FDGLyvELY%2BwuA7qLCrai4NHh4DCFkkZxsKUXntWQWpmtGuA2vdIOEvLcLkf9QKAXvcmKEkachIOzj5bcUfVOy5BTF2pWjguYIPGkw%2BNSRUL6BDBZT6MJIcRIJUivjaMLKV38R%2BzQNU6ajku7XD3bkwIjenfoHBV0i%2FdwSHHiIKbRtmXeSpiQPCKeW2DysrKWiXCAEvlk0ykcT3VRjLXL34T1vg9fSIC0qddmn%2B2X5eab%2BaLvB7qq8KTCK5uu9BjqkAZ3pO7GU68Fd7a%2Bc4WjNwkfAIQkmZ9VWNaJy8zEasd0YJmJCwivSzjhkBvew65swctqe7dhOrj%2F3e9r%2FmpO3WqdBoSCbE8m%2FEhljwVvcYK8S0y0HQh6EXmnAyOe%2FDmAPDKMSukA9B%2BXic4zWyv3l6wcKkj8ZGJkghyamfDrKdoMbJRZciDu%2BZyOJwTPsbEQa2Z3eg2VvxIqyhGpqOmvaBG6M9512&X-Amz-Signature=344638e163ffc7d9d45e4e2df293b76d711856368e1e164c4a4b39239d217bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKLZFFF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTZY%2FgxEwmRfPpyf3VvS9hygJbiHwbzIzHK5HHINL7MwIhAOhL4d6LoHzQulJeEa9nbrQMvwAKICWzWuorrKkdCLiYKv8DCBMQABoMNjM3NDIzMTgzODA1IgwBXEzpjH8VPfdHJlsq3AMqurvcdCYeUgUIzlkKPQQ90ZYmph%2Bmhmo%2ByzQSMGtE14h3%2B8X0XKrNO4nB2ID5qe9qOsUHj9w6MMSYB%2F05cpsl5kZViCbFWT9PweGawzKFjB3dW5jqK3gy6LFnM2MWmjzPpDYfyP1ma%2Fx93mI9XJY2RfMF6yXIpfX62JSMedKcb3SXaXeJ5zkqkmIIQTv1Ewc08W4iijf5dgt3LlbXJ%2BwqtsxHyFInQu4iFLwderCy%2BHIpG7W9ZIWGeJOoC3rzcNA4O8coDP5doflOTNK5cTnb%2FyohY%2BqJC8XCNu9pBSsGjam0TSz9ArtEzoEYax2uPmC08p2JNSmzL73XhkxId4cX1wNnlhgwn6z7fJS9XF9L9sO%2BMLKRHJdQ5rWQFnghBs%2F5d1w%2FDGLyvELY%2BwuA7qLCrai4NHh4DCFkkZxsKUXntWQWpmtGuA2vdIOEvLcLkf9QKAXvcmKEkachIOzj5bcUfVOy5BTF2pWjguYIPGkw%2BNSRUL6BDBZT6MJIcRIJUivjaMLKV38R%2BzQNU6ajku7XD3bkwIjenfoHBV0i%2FdwSHHiIKbRtmXeSpiQPCKeW2DysrKWiXCAEvlk0ykcT3VRjLXL34T1vg9fSIC0qddmn%2B2X5eab%2BaLvB7qq8KTCK5uu9BjqkAZ3pO7GU68Fd7a%2Bc4WjNwkfAIQkmZ9VWNaJy8zEasd0YJmJCwivSzjhkBvew65swctqe7dhOrj%2F3e9r%2FmpO3WqdBoSCbE8m%2FEhljwVvcYK8S0y0HQh6EXmnAyOe%2FDmAPDKMSukA9B%2BXic4zWyv3l6wcKkj8ZGJkghyamfDrKdoMbJRZciDu%2BZyOJwTPsbEQa2Z3eg2VvxIqyhGpqOmvaBG6M9512&X-Amz-Signature=ad83a585fd746cedfaaf114c6a49dee40c81da5753d960eed741d0dea309b71a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKLZFFF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTZY%2FgxEwmRfPpyf3VvS9hygJbiHwbzIzHK5HHINL7MwIhAOhL4d6LoHzQulJeEa9nbrQMvwAKICWzWuorrKkdCLiYKv8DCBMQABoMNjM3NDIzMTgzODA1IgwBXEzpjH8VPfdHJlsq3AMqurvcdCYeUgUIzlkKPQQ90ZYmph%2Bmhmo%2ByzQSMGtE14h3%2B8X0XKrNO4nB2ID5qe9qOsUHj9w6MMSYB%2F05cpsl5kZViCbFWT9PweGawzKFjB3dW5jqK3gy6LFnM2MWmjzPpDYfyP1ma%2Fx93mI9XJY2RfMF6yXIpfX62JSMedKcb3SXaXeJ5zkqkmIIQTv1Ewc08W4iijf5dgt3LlbXJ%2BwqtsxHyFInQu4iFLwderCy%2BHIpG7W9ZIWGeJOoC3rzcNA4O8coDP5doflOTNK5cTnb%2FyohY%2BqJC8XCNu9pBSsGjam0TSz9ArtEzoEYax2uPmC08p2JNSmzL73XhkxId4cX1wNnlhgwn6z7fJS9XF9L9sO%2BMLKRHJdQ5rWQFnghBs%2F5d1w%2FDGLyvELY%2BwuA7qLCrai4NHh4DCFkkZxsKUXntWQWpmtGuA2vdIOEvLcLkf9QKAXvcmKEkachIOzj5bcUfVOy5BTF2pWjguYIPGkw%2BNSRUL6BDBZT6MJIcRIJUivjaMLKV38R%2BzQNU6ajku7XD3bkwIjenfoHBV0i%2FdwSHHiIKbRtmXeSpiQPCKeW2DysrKWiXCAEvlk0ykcT3VRjLXL34T1vg9fSIC0qddmn%2B2X5eab%2BaLvB7qq8KTCK5uu9BjqkAZ3pO7GU68Fd7a%2Bc4WjNwkfAIQkmZ9VWNaJy8zEasd0YJmJCwivSzjhkBvew65swctqe7dhOrj%2F3e9r%2FmpO3WqdBoSCbE8m%2FEhljwVvcYK8S0y0HQh6EXmnAyOe%2FDmAPDKMSukA9B%2BXic4zWyv3l6wcKkj8ZGJkghyamfDrKdoMbJRZciDu%2BZyOJwTPsbEQa2Z3eg2VvxIqyhGpqOmvaBG6M9512&X-Amz-Signature=538a26a480ef86d5d3aae88ff48ad34e92f4a9ba2696441a48affde31a763f28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKLZFFF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTZY%2FgxEwmRfPpyf3VvS9hygJbiHwbzIzHK5HHINL7MwIhAOhL4d6LoHzQulJeEa9nbrQMvwAKICWzWuorrKkdCLiYKv8DCBMQABoMNjM3NDIzMTgzODA1IgwBXEzpjH8VPfdHJlsq3AMqurvcdCYeUgUIzlkKPQQ90ZYmph%2Bmhmo%2ByzQSMGtE14h3%2B8X0XKrNO4nB2ID5qe9qOsUHj9w6MMSYB%2F05cpsl5kZViCbFWT9PweGawzKFjB3dW5jqK3gy6LFnM2MWmjzPpDYfyP1ma%2Fx93mI9XJY2RfMF6yXIpfX62JSMedKcb3SXaXeJ5zkqkmIIQTv1Ewc08W4iijf5dgt3LlbXJ%2BwqtsxHyFInQu4iFLwderCy%2BHIpG7W9ZIWGeJOoC3rzcNA4O8coDP5doflOTNK5cTnb%2FyohY%2BqJC8XCNu9pBSsGjam0TSz9ArtEzoEYax2uPmC08p2JNSmzL73XhkxId4cX1wNnlhgwn6z7fJS9XF9L9sO%2BMLKRHJdQ5rWQFnghBs%2F5d1w%2FDGLyvELY%2BwuA7qLCrai4NHh4DCFkkZxsKUXntWQWpmtGuA2vdIOEvLcLkf9QKAXvcmKEkachIOzj5bcUfVOy5BTF2pWjguYIPGkw%2BNSRUL6BDBZT6MJIcRIJUivjaMLKV38R%2BzQNU6ajku7XD3bkwIjenfoHBV0i%2FdwSHHiIKbRtmXeSpiQPCKeW2DysrKWiXCAEvlk0ykcT3VRjLXL34T1vg9fSIC0qddmn%2B2X5eab%2BaLvB7qq8KTCK5uu9BjqkAZ3pO7GU68Fd7a%2Bc4WjNwkfAIQkmZ9VWNaJy8zEasd0YJmJCwivSzjhkBvew65swctqe7dhOrj%2F3e9r%2FmpO3WqdBoSCbE8m%2FEhljwVvcYK8S0y0HQh6EXmnAyOe%2FDmAPDKMSukA9B%2BXic4zWyv3l6wcKkj8ZGJkghyamfDrKdoMbJRZciDu%2BZyOJwTPsbEQa2Z3eg2VvxIqyhGpqOmvaBG6M9512&X-Amz-Signature=c00bd19eb66701d5a114b7f6ecb68711ff8e8893b76d803d584c4f44271ce60b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKLZFFF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTZY%2FgxEwmRfPpyf3VvS9hygJbiHwbzIzHK5HHINL7MwIhAOhL4d6LoHzQulJeEa9nbrQMvwAKICWzWuorrKkdCLiYKv8DCBMQABoMNjM3NDIzMTgzODA1IgwBXEzpjH8VPfdHJlsq3AMqurvcdCYeUgUIzlkKPQQ90ZYmph%2Bmhmo%2ByzQSMGtE14h3%2B8X0XKrNO4nB2ID5qe9qOsUHj9w6MMSYB%2F05cpsl5kZViCbFWT9PweGawzKFjB3dW5jqK3gy6LFnM2MWmjzPpDYfyP1ma%2Fx93mI9XJY2RfMF6yXIpfX62JSMedKcb3SXaXeJ5zkqkmIIQTv1Ewc08W4iijf5dgt3LlbXJ%2BwqtsxHyFInQu4iFLwderCy%2BHIpG7W9ZIWGeJOoC3rzcNA4O8coDP5doflOTNK5cTnb%2FyohY%2BqJC8XCNu9pBSsGjam0TSz9ArtEzoEYax2uPmC08p2JNSmzL73XhkxId4cX1wNnlhgwn6z7fJS9XF9L9sO%2BMLKRHJdQ5rWQFnghBs%2F5d1w%2FDGLyvELY%2BwuA7qLCrai4NHh4DCFkkZxsKUXntWQWpmtGuA2vdIOEvLcLkf9QKAXvcmKEkachIOzj5bcUfVOy5BTF2pWjguYIPGkw%2BNSRUL6BDBZT6MJIcRIJUivjaMLKV38R%2BzQNU6ajku7XD3bkwIjenfoHBV0i%2FdwSHHiIKbRtmXeSpiQPCKeW2DysrKWiXCAEvlk0ykcT3VRjLXL34T1vg9fSIC0qddmn%2B2X5eab%2BaLvB7qq8KTCK5uu9BjqkAZ3pO7GU68Fd7a%2Bc4WjNwkfAIQkmZ9VWNaJy8zEasd0YJmJCwivSzjhkBvew65swctqe7dhOrj%2F3e9r%2FmpO3WqdBoSCbE8m%2FEhljwVvcYK8S0y0HQh6EXmnAyOe%2FDmAPDKMSukA9B%2BXic4zWyv3l6wcKkj8ZGJkghyamfDrKdoMbJRZciDu%2BZyOJwTPsbEQa2Z3eg2VvxIqyhGpqOmvaBG6M9512&X-Amz-Signature=d6f05e37d6fb84a32c22118a468da39acd29126720d3f6022b887bcc50f5e614&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PKLZFFF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTZY%2FgxEwmRfPpyf3VvS9hygJbiHwbzIzHK5HHINL7MwIhAOhL4d6LoHzQulJeEa9nbrQMvwAKICWzWuorrKkdCLiYKv8DCBMQABoMNjM3NDIzMTgzODA1IgwBXEzpjH8VPfdHJlsq3AMqurvcdCYeUgUIzlkKPQQ90ZYmph%2Bmhmo%2ByzQSMGtE14h3%2B8X0XKrNO4nB2ID5qe9qOsUHj9w6MMSYB%2F05cpsl5kZViCbFWT9PweGawzKFjB3dW5jqK3gy6LFnM2MWmjzPpDYfyP1ma%2Fx93mI9XJY2RfMF6yXIpfX62JSMedKcb3SXaXeJ5zkqkmIIQTv1Ewc08W4iijf5dgt3LlbXJ%2BwqtsxHyFInQu4iFLwderCy%2BHIpG7W9ZIWGeJOoC3rzcNA4O8coDP5doflOTNK5cTnb%2FyohY%2BqJC8XCNu9pBSsGjam0TSz9ArtEzoEYax2uPmC08p2JNSmzL73XhkxId4cX1wNnlhgwn6z7fJS9XF9L9sO%2BMLKRHJdQ5rWQFnghBs%2F5d1w%2FDGLyvELY%2BwuA7qLCrai4NHh4DCFkkZxsKUXntWQWpmtGuA2vdIOEvLcLkf9QKAXvcmKEkachIOzj5bcUfVOy5BTF2pWjguYIPGkw%2BNSRUL6BDBZT6MJIcRIJUivjaMLKV38R%2BzQNU6ajku7XD3bkwIjenfoHBV0i%2FdwSHHiIKbRtmXeSpiQPCKeW2DysrKWiXCAEvlk0ykcT3VRjLXL34T1vg9fSIC0qddmn%2B2X5eab%2BaLvB7qq8KTCK5uu9BjqkAZ3pO7GU68Fd7a%2Bc4WjNwkfAIQkmZ9VWNaJy8zEasd0YJmJCwivSzjhkBvew65swctqe7dhOrj%2F3e9r%2FmpO3WqdBoSCbE8m%2FEhljwVvcYK8S0y0HQh6EXmnAyOe%2FDmAPDKMSukA9B%2BXic4zWyv3l6wcKkj8ZGJkghyamfDrKdoMbJRZciDu%2BZyOJwTPsbEQa2Z3eg2VvxIqyhGpqOmvaBG6M9512&X-Amz-Signature=a40e916bee2b27a5278d2cc12a32bba2e530699ee7f62f6d37d742929e7254b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
