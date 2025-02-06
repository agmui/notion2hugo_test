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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WYQIZM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCclpnn21LQDLqWLtzli%2Ba9N3oAuElPMig%2Bcjb%2Bf3Fm5AIgA42heiix2p4gqwNIjTd1QAGJC0Uhh9B4VEgV2qVnyREq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEUxjqx7NjiYkJizrSrcA0gPLdQ%2FffXDrgc0wc1b6VcSLV6SgLX%2BJ%2FGysQfvrZUcnfYSGfq7dSOyzvKf66KXjK%2Bj3ycBTavY5dbFGjh0y5l2gz%2BiaVtMfUMtRE1cBSigzZ22%2Btx7TkuF7IJ0KqJckGzogRe2NHadFcfcM4XMhBLcPk21TgnYbhIYwHLNvxeT9k5OOnJ3LUbgNBErG%2BZ7pFOCQXB7DVyRIAdAk2D14oDvlnFE5VU8QdeiT2x9kU5tAdGXUmc3JG3yINF5tY%2BfBqDNygNndW4fbRUoTKWLuurXhR3svkn4fE%2Bg%2BPuFH%2BfQcTrtLHyXi%2BvmxAml6QrSJHmVFpEdmZDa6bmKDVDpnxkPsG8s1aSBuiPy2x%2B3gMkhEhAcV5Y%2BMAdPFByoY8Cp7xgDLLTXvQlEgYJJu5fdFUZGjTEevewZJy3MxKX0WSK6EvhGMwDqcM5eErau3tvqDTrghxLLIXXLK9WhVZ4ptw1oRxPNNlk%2BKf0PgmnGJLr4qKSrZseND5Hcj2yYLI76y2JhgnXsZLKf1DkxgTPCZcDYvUn7RPY8Z5bSiMwBURoypHohX3mEfCa3Mo8R7uxe0ACbQTvAP27P%2B7KiI8ZtFFD4Nh6%2BdRAtTlvYr%2BR7nPaUJ1qj8QDfLDi80biWMKDukb0GOqUBjR4f5AtIx7AZpJqw53rGPwDVcQAYOaJ4ins%2BZjup8sbh7oq4OuKBuU3M5ruUKuAJpg6%2BuoIvOV92dDwHSTnPwasbDcrvZ6Y0VmgJ11icI49%2BcW7eA9636dhJWTDXewDtOX6iMkq6msgCjqiKTRdPOJjoPqxNoTl0k458URBQXGjho8ixrevpW%2FhtQJswLnH5gOutDA77uUsaHN%2BLAKNv54R%2FMMFx&X-Amz-Signature=cae4ed368f436029dfb110d6be89596ebf7155f935b4f21c3a68f0c8d5ef1537&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WYQIZM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCclpnn21LQDLqWLtzli%2Ba9N3oAuElPMig%2Bcjb%2Bf3Fm5AIgA42heiix2p4gqwNIjTd1QAGJC0Uhh9B4VEgV2qVnyREq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEUxjqx7NjiYkJizrSrcA0gPLdQ%2FffXDrgc0wc1b6VcSLV6SgLX%2BJ%2FGysQfvrZUcnfYSGfq7dSOyzvKf66KXjK%2Bj3ycBTavY5dbFGjh0y5l2gz%2BiaVtMfUMtRE1cBSigzZ22%2Btx7TkuF7IJ0KqJckGzogRe2NHadFcfcM4XMhBLcPk21TgnYbhIYwHLNvxeT9k5OOnJ3LUbgNBErG%2BZ7pFOCQXB7DVyRIAdAk2D14oDvlnFE5VU8QdeiT2x9kU5tAdGXUmc3JG3yINF5tY%2BfBqDNygNndW4fbRUoTKWLuurXhR3svkn4fE%2Bg%2BPuFH%2BfQcTrtLHyXi%2BvmxAml6QrSJHmVFpEdmZDa6bmKDVDpnxkPsG8s1aSBuiPy2x%2B3gMkhEhAcV5Y%2BMAdPFByoY8Cp7xgDLLTXvQlEgYJJu5fdFUZGjTEevewZJy3MxKX0WSK6EvhGMwDqcM5eErau3tvqDTrghxLLIXXLK9WhVZ4ptw1oRxPNNlk%2BKf0PgmnGJLr4qKSrZseND5Hcj2yYLI76y2JhgnXsZLKf1DkxgTPCZcDYvUn7RPY8Z5bSiMwBURoypHohX3mEfCa3Mo8R7uxe0ACbQTvAP27P%2B7KiI8ZtFFD4Nh6%2BdRAtTlvYr%2BR7nPaUJ1qj8QDfLDi80biWMKDukb0GOqUBjR4f5AtIx7AZpJqw53rGPwDVcQAYOaJ4ins%2BZjup8sbh7oq4OuKBuU3M5ruUKuAJpg6%2BuoIvOV92dDwHSTnPwasbDcrvZ6Y0VmgJ11icI49%2BcW7eA9636dhJWTDXewDtOX6iMkq6msgCjqiKTRdPOJjoPqxNoTl0k458URBQXGjho8ixrevpW%2FhtQJswLnH5gOutDA77uUsaHN%2BLAKNv54R%2FMMFx&X-Amz-Signature=be9585b038f0db42d5c9f690bcb83dcd7302419ae7853ad28ad67e99f4a20230&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WYQIZM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCclpnn21LQDLqWLtzli%2Ba9N3oAuElPMig%2Bcjb%2Bf3Fm5AIgA42heiix2p4gqwNIjTd1QAGJC0Uhh9B4VEgV2qVnyREq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEUxjqx7NjiYkJizrSrcA0gPLdQ%2FffXDrgc0wc1b6VcSLV6SgLX%2BJ%2FGysQfvrZUcnfYSGfq7dSOyzvKf66KXjK%2Bj3ycBTavY5dbFGjh0y5l2gz%2BiaVtMfUMtRE1cBSigzZ22%2Btx7TkuF7IJ0KqJckGzogRe2NHadFcfcM4XMhBLcPk21TgnYbhIYwHLNvxeT9k5OOnJ3LUbgNBErG%2BZ7pFOCQXB7DVyRIAdAk2D14oDvlnFE5VU8QdeiT2x9kU5tAdGXUmc3JG3yINF5tY%2BfBqDNygNndW4fbRUoTKWLuurXhR3svkn4fE%2Bg%2BPuFH%2BfQcTrtLHyXi%2BvmxAml6QrSJHmVFpEdmZDa6bmKDVDpnxkPsG8s1aSBuiPy2x%2B3gMkhEhAcV5Y%2BMAdPFByoY8Cp7xgDLLTXvQlEgYJJu5fdFUZGjTEevewZJy3MxKX0WSK6EvhGMwDqcM5eErau3tvqDTrghxLLIXXLK9WhVZ4ptw1oRxPNNlk%2BKf0PgmnGJLr4qKSrZseND5Hcj2yYLI76y2JhgnXsZLKf1DkxgTPCZcDYvUn7RPY8Z5bSiMwBURoypHohX3mEfCa3Mo8R7uxe0ACbQTvAP27P%2B7KiI8ZtFFD4Nh6%2BdRAtTlvYr%2BR7nPaUJ1qj8QDfLDi80biWMKDukb0GOqUBjR4f5AtIx7AZpJqw53rGPwDVcQAYOaJ4ins%2BZjup8sbh7oq4OuKBuU3M5ruUKuAJpg6%2BuoIvOV92dDwHSTnPwasbDcrvZ6Y0VmgJ11icI49%2BcW7eA9636dhJWTDXewDtOX6iMkq6msgCjqiKTRdPOJjoPqxNoTl0k458URBQXGjho8ixrevpW%2FhtQJswLnH5gOutDA77uUsaHN%2BLAKNv54R%2FMMFx&X-Amz-Signature=5c5c2d94819e9aa6156b861a5dbc14bcfed72173b931783d73fb20f55140c4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WYQIZM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCclpnn21LQDLqWLtzli%2Ba9N3oAuElPMig%2Bcjb%2Bf3Fm5AIgA42heiix2p4gqwNIjTd1QAGJC0Uhh9B4VEgV2qVnyREq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEUxjqx7NjiYkJizrSrcA0gPLdQ%2FffXDrgc0wc1b6VcSLV6SgLX%2BJ%2FGysQfvrZUcnfYSGfq7dSOyzvKf66KXjK%2Bj3ycBTavY5dbFGjh0y5l2gz%2BiaVtMfUMtRE1cBSigzZ22%2Btx7TkuF7IJ0KqJckGzogRe2NHadFcfcM4XMhBLcPk21TgnYbhIYwHLNvxeT9k5OOnJ3LUbgNBErG%2BZ7pFOCQXB7DVyRIAdAk2D14oDvlnFE5VU8QdeiT2x9kU5tAdGXUmc3JG3yINF5tY%2BfBqDNygNndW4fbRUoTKWLuurXhR3svkn4fE%2Bg%2BPuFH%2BfQcTrtLHyXi%2BvmxAml6QrSJHmVFpEdmZDa6bmKDVDpnxkPsG8s1aSBuiPy2x%2B3gMkhEhAcV5Y%2BMAdPFByoY8Cp7xgDLLTXvQlEgYJJu5fdFUZGjTEevewZJy3MxKX0WSK6EvhGMwDqcM5eErau3tvqDTrghxLLIXXLK9WhVZ4ptw1oRxPNNlk%2BKf0PgmnGJLr4qKSrZseND5Hcj2yYLI76y2JhgnXsZLKf1DkxgTPCZcDYvUn7RPY8Z5bSiMwBURoypHohX3mEfCa3Mo8R7uxe0ACbQTvAP27P%2B7KiI8ZtFFD4Nh6%2BdRAtTlvYr%2BR7nPaUJ1qj8QDfLDi80biWMKDukb0GOqUBjR4f5AtIx7AZpJqw53rGPwDVcQAYOaJ4ins%2BZjup8sbh7oq4OuKBuU3M5ruUKuAJpg6%2BuoIvOV92dDwHSTnPwasbDcrvZ6Y0VmgJ11icI49%2BcW7eA9636dhJWTDXewDtOX6iMkq6msgCjqiKTRdPOJjoPqxNoTl0k458URBQXGjho8ixrevpW%2FhtQJswLnH5gOutDA77uUsaHN%2BLAKNv54R%2FMMFx&X-Amz-Signature=4f16f9c08216ca2d30ed0725b6617a28b1b3917b4e9942fe513327f907b74672&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WYQIZM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCclpnn21LQDLqWLtzli%2Ba9N3oAuElPMig%2Bcjb%2Bf3Fm5AIgA42heiix2p4gqwNIjTd1QAGJC0Uhh9B4VEgV2qVnyREq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEUxjqx7NjiYkJizrSrcA0gPLdQ%2FffXDrgc0wc1b6VcSLV6SgLX%2BJ%2FGysQfvrZUcnfYSGfq7dSOyzvKf66KXjK%2Bj3ycBTavY5dbFGjh0y5l2gz%2BiaVtMfUMtRE1cBSigzZ22%2Btx7TkuF7IJ0KqJckGzogRe2NHadFcfcM4XMhBLcPk21TgnYbhIYwHLNvxeT9k5OOnJ3LUbgNBErG%2BZ7pFOCQXB7DVyRIAdAk2D14oDvlnFE5VU8QdeiT2x9kU5tAdGXUmc3JG3yINF5tY%2BfBqDNygNndW4fbRUoTKWLuurXhR3svkn4fE%2Bg%2BPuFH%2BfQcTrtLHyXi%2BvmxAml6QrSJHmVFpEdmZDa6bmKDVDpnxkPsG8s1aSBuiPy2x%2B3gMkhEhAcV5Y%2BMAdPFByoY8Cp7xgDLLTXvQlEgYJJu5fdFUZGjTEevewZJy3MxKX0WSK6EvhGMwDqcM5eErau3tvqDTrghxLLIXXLK9WhVZ4ptw1oRxPNNlk%2BKf0PgmnGJLr4qKSrZseND5Hcj2yYLI76y2JhgnXsZLKf1DkxgTPCZcDYvUn7RPY8Z5bSiMwBURoypHohX3mEfCa3Mo8R7uxe0ACbQTvAP27P%2B7KiI8ZtFFD4Nh6%2BdRAtTlvYr%2BR7nPaUJ1qj8QDfLDi80biWMKDukb0GOqUBjR4f5AtIx7AZpJqw53rGPwDVcQAYOaJ4ins%2BZjup8sbh7oq4OuKBuU3M5ruUKuAJpg6%2BuoIvOV92dDwHSTnPwasbDcrvZ6Y0VmgJ11icI49%2BcW7eA9636dhJWTDXewDtOX6iMkq6msgCjqiKTRdPOJjoPqxNoTl0k458URBQXGjho8ixrevpW%2FhtQJswLnH5gOutDA77uUsaHN%2BLAKNv54R%2FMMFx&X-Amz-Signature=38b4e47c681981070a8166acc838947545625f4d9241ce923ebe5d2afc574fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WYQIZM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCclpnn21LQDLqWLtzli%2Ba9N3oAuElPMig%2Bcjb%2Bf3Fm5AIgA42heiix2p4gqwNIjTd1QAGJC0Uhh9B4VEgV2qVnyREq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEUxjqx7NjiYkJizrSrcA0gPLdQ%2FffXDrgc0wc1b6VcSLV6SgLX%2BJ%2FGysQfvrZUcnfYSGfq7dSOyzvKf66KXjK%2Bj3ycBTavY5dbFGjh0y5l2gz%2BiaVtMfUMtRE1cBSigzZ22%2Btx7TkuF7IJ0KqJckGzogRe2NHadFcfcM4XMhBLcPk21TgnYbhIYwHLNvxeT9k5OOnJ3LUbgNBErG%2BZ7pFOCQXB7DVyRIAdAk2D14oDvlnFE5VU8QdeiT2x9kU5tAdGXUmc3JG3yINF5tY%2BfBqDNygNndW4fbRUoTKWLuurXhR3svkn4fE%2Bg%2BPuFH%2BfQcTrtLHyXi%2BvmxAml6QrSJHmVFpEdmZDa6bmKDVDpnxkPsG8s1aSBuiPy2x%2B3gMkhEhAcV5Y%2BMAdPFByoY8Cp7xgDLLTXvQlEgYJJu5fdFUZGjTEevewZJy3MxKX0WSK6EvhGMwDqcM5eErau3tvqDTrghxLLIXXLK9WhVZ4ptw1oRxPNNlk%2BKf0PgmnGJLr4qKSrZseND5Hcj2yYLI76y2JhgnXsZLKf1DkxgTPCZcDYvUn7RPY8Z5bSiMwBURoypHohX3mEfCa3Mo8R7uxe0ACbQTvAP27P%2B7KiI8ZtFFD4Nh6%2BdRAtTlvYr%2BR7nPaUJ1qj8QDfLDi80biWMKDukb0GOqUBjR4f5AtIx7AZpJqw53rGPwDVcQAYOaJ4ins%2BZjup8sbh7oq4OuKBuU3M5ruUKuAJpg6%2BuoIvOV92dDwHSTnPwasbDcrvZ6Y0VmgJ11icI49%2BcW7eA9636dhJWTDXewDtOX6iMkq6msgCjqiKTRdPOJjoPqxNoTl0k458URBQXGjho8ixrevpW%2FhtQJswLnH5gOutDA77uUsaHN%2BLAKNv54R%2FMMFx&X-Amz-Signature=8e29f29282eac0f112168ea125d5a2b5514b547c12b163ea82932f43bf4a7e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WYQIZM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCclpnn21LQDLqWLtzli%2Ba9N3oAuElPMig%2Bcjb%2Bf3Fm5AIgA42heiix2p4gqwNIjTd1QAGJC0Uhh9B4VEgV2qVnyREq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEUxjqx7NjiYkJizrSrcA0gPLdQ%2FffXDrgc0wc1b6VcSLV6SgLX%2BJ%2FGysQfvrZUcnfYSGfq7dSOyzvKf66KXjK%2Bj3ycBTavY5dbFGjh0y5l2gz%2BiaVtMfUMtRE1cBSigzZ22%2Btx7TkuF7IJ0KqJckGzogRe2NHadFcfcM4XMhBLcPk21TgnYbhIYwHLNvxeT9k5OOnJ3LUbgNBErG%2BZ7pFOCQXB7DVyRIAdAk2D14oDvlnFE5VU8QdeiT2x9kU5tAdGXUmc3JG3yINF5tY%2BfBqDNygNndW4fbRUoTKWLuurXhR3svkn4fE%2Bg%2BPuFH%2BfQcTrtLHyXi%2BvmxAml6QrSJHmVFpEdmZDa6bmKDVDpnxkPsG8s1aSBuiPy2x%2B3gMkhEhAcV5Y%2BMAdPFByoY8Cp7xgDLLTXvQlEgYJJu5fdFUZGjTEevewZJy3MxKX0WSK6EvhGMwDqcM5eErau3tvqDTrghxLLIXXLK9WhVZ4ptw1oRxPNNlk%2BKf0PgmnGJLr4qKSrZseND5Hcj2yYLI76y2JhgnXsZLKf1DkxgTPCZcDYvUn7RPY8Z5bSiMwBURoypHohX3mEfCa3Mo8R7uxe0ACbQTvAP27P%2B7KiI8ZtFFD4Nh6%2BdRAtTlvYr%2BR7nPaUJ1qj8QDfLDi80biWMKDukb0GOqUBjR4f5AtIx7AZpJqw53rGPwDVcQAYOaJ4ins%2BZjup8sbh7oq4OuKBuU3M5ruUKuAJpg6%2BuoIvOV92dDwHSTnPwasbDcrvZ6Y0VmgJ11icI49%2BcW7eA9636dhJWTDXewDtOX6iMkq6msgCjqiKTRdPOJjoPqxNoTl0k458URBQXGjho8ixrevpW%2FhtQJswLnH5gOutDA77uUsaHN%2BLAKNv54R%2FMMFx&X-Amz-Signature=c6472b390ae9dba5a4e356f9a8d9dfa180b129b4ddb7cc2e6cb2d0a017493608&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643WYQIZM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCclpnn21LQDLqWLtzli%2Ba9N3oAuElPMig%2Bcjb%2Bf3Fm5AIgA42heiix2p4gqwNIjTd1QAGJC0Uhh9B4VEgV2qVnyREq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDEUxjqx7NjiYkJizrSrcA0gPLdQ%2FffXDrgc0wc1b6VcSLV6SgLX%2BJ%2FGysQfvrZUcnfYSGfq7dSOyzvKf66KXjK%2Bj3ycBTavY5dbFGjh0y5l2gz%2BiaVtMfUMtRE1cBSigzZ22%2Btx7TkuF7IJ0KqJckGzogRe2NHadFcfcM4XMhBLcPk21TgnYbhIYwHLNvxeT9k5OOnJ3LUbgNBErG%2BZ7pFOCQXB7DVyRIAdAk2D14oDvlnFE5VU8QdeiT2x9kU5tAdGXUmc3JG3yINF5tY%2BfBqDNygNndW4fbRUoTKWLuurXhR3svkn4fE%2Bg%2BPuFH%2BfQcTrtLHyXi%2BvmxAml6QrSJHmVFpEdmZDa6bmKDVDpnxkPsG8s1aSBuiPy2x%2B3gMkhEhAcV5Y%2BMAdPFByoY8Cp7xgDLLTXvQlEgYJJu5fdFUZGjTEevewZJy3MxKX0WSK6EvhGMwDqcM5eErau3tvqDTrghxLLIXXLK9WhVZ4ptw1oRxPNNlk%2BKf0PgmnGJLr4qKSrZseND5Hcj2yYLI76y2JhgnXsZLKf1DkxgTPCZcDYvUn7RPY8Z5bSiMwBURoypHohX3mEfCa3Mo8R7uxe0ACbQTvAP27P%2B7KiI8ZtFFD4Nh6%2BdRAtTlvYr%2BR7nPaUJ1qj8QDfLDi80biWMKDukb0GOqUBjR4f5AtIx7AZpJqw53rGPwDVcQAYOaJ4ins%2BZjup8sbh7oq4OuKBuU3M5ruUKuAJpg6%2BuoIvOV92dDwHSTnPwasbDcrvZ6Y0VmgJ11icI49%2BcW7eA9636dhJWTDXewDtOX6iMkq6msgCjqiKTRdPOJjoPqxNoTl0k458URBQXGjho8ixrevpW%2FhtQJswLnH5gOutDA77uUsaHN%2BLAKNv54R%2FMMFx&X-Amz-Signature=843ff8ab65ac1c5a05624e5277b66af881c5170718ed8f4d5858d7ad8aa64a83&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
