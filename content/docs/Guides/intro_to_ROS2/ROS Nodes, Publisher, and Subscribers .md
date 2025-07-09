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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDRANLV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO5Mc01u83RahKsaB5h3VXhYwdORl71EVP%2BMAHtfz4PAiEAnADFzH1U9j20rkuYnPrWPFd0YrfLuyg%2BjZoTSg1sRzIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJwLwr%2F8RSvMOEDIircA60o3seHdYk71H4nqkZ48%2BHPSVhdKFi5vXBNSpVq18JFoKUBzsgjMcam7CXqdlLml2HESNQ51TkkGHR6CtleQrsvS6qERs13MDiaDfAI5PD1a0bAutJIXPk0HKpYINGxl%2Fa0OTsL13tvzVM52tGPi0OFLLr0GxrBSP%2F1O4tTxpcGRWwvmInwhZvlgKNF4mK%2BfHkVHBrnd5V2%2FqaOHbtuD05tIgi6sSoPU5CW8WCJgudV%2FLjXXAXn8meUhGQd%2BNLRnxQmQ%2FYyOcv3R%2Ba1rDGQvT%2BlnNLJQO4BSq75IqWEunTHNcWIcpDg0ocGtD%2BouoCYAZyelNKiT0C6Sy3XPl6LQCs1oknbCH7O71%2FtfeuZnCuWM5KrDOmgZSJ2ncDtcVWGnvc3gd%2Bu%2BrOZUt5kpDCjS%2BaMc1RHdN%2FnYtwmguthFl3RbwDE1Qudh%2FgJaWiMTayWtm7z6TgkAaa1DVvOhNtkKdCVCMvcTQeGLQgzHtBKeZoN8dFTgeuxVz6rTmb9yGZihCLmi%2FxV2nDQ%2BVjsB3RIOzrYniPXuQObPQLMBXiwmI3bAIhyjO42YvpqVdhLRLMzkehLhkh%2Bn4beBWHg1pav7XgDAjGFDTkhG9Tjaw5YaSFwSgao5xq0psFIftViMPT1t8MGOqUBxv4Z2HrvNbSEXrwRgJtTeW4J%2BzpWbuVaU8kLkNzhoKdspqmJ3VzNT9ezmSEO1t3QAHR4HffE0MmOcTwt3Q00v5vEhrQo0TJekmfbl%2FJ%2BpccG5t5xp7DIRwwE2rlCubwo7YjHqEwYkBHii8muvRk48uxZv7A%2FwgdMVcj%2BXkvfVRERz9ShJNXKc6vCbx7mOfliloUW%2FZgRea93eN%2BikRm1mv2vxwRe&X-Amz-Signature=5c81e0ce50439c92ff8065405e0b26aa0e42ca0f10902e4fd57943b65bfee4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDRANLV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO5Mc01u83RahKsaB5h3VXhYwdORl71EVP%2BMAHtfz4PAiEAnADFzH1U9j20rkuYnPrWPFd0YrfLuyg%2BjZoTSg1sRzIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJwLwr%2F8RSvMOEDIircA60o3seHdYk71H4nqkZ48%2BHPSVhdKFi5vXBNSpVq18JFoKUBzsgjMcam7CXqdlLml2HESNQ51TkkGHR6CtleQrsvS6qERs13MDiaDfAI5PD1a0bAutJIXPk0HKpYINGxl%2Fa0OTsL13tvzVM52tGPi0OFLLr0GxrBSP%2F1O4tTxpcGRWwvmInwhZvlgKNF4mK%2BfHkVHBrnd5V2%2FqaOHbtuD05tIgi6sSoPU5CW8WCJgudV%2FLjXXAXn8meUhGQd%2BNLRnxQmQ%2FYyOcv3R%2Ba1rDGQvT%2BlnNLJQO4BSq75IqWEunTHNcWIcpDg0ocGtD%2BouoCYAZyelNKiT0C6Sy3XPl6LQCs1oknbCH7O71%2FtfeuZnCuWM5KrDOmgZSJ2ncDtcVWGnvc3gd%2Bu%2BrOZUt5kpDCjS%2BaMc1RHdN%2FnYtwmguthFl3RbwDE1Qudh%2FgJaWiMTayWtm7z6TgkAaa1DVvOhNtkKdCVCMvcTQeGLQgzHtBKeZoN8dFTgeuxVz6rTmb9yGZihCLmi%2FxV2nDQ%2BVjsB3RIOzrYniPXuQObPQLMBXiwmI3bAIhyjO42YvpqVdhLRLMzkehLhkh%2Bn4beBWHg1pav7XgDAjGFDTkhG9Tjaw5YaSFwSgao5xq0psFIftViMPT1t8MGOqUBxv4Z2HrvNbSEXrwRgJtTeW4J%2BzpWbuVaU8kLkNzhoKdspqmJ3VzNT9ezmSEO1t3QAHR4HffE0MmOcTwt3Q00v5vEhrQo0TJekmfbl%2FJ%2BpccG5t5xp7DIRwwE2rlCubwo7YjHqEwYkBHii8muvRk48uxZv7A%2FwgdMVcj%2BXkvfVRERz9ShJNXKc6vCbx7mOfliloUW%2FZgRea93eN%2BikRm1mv2vxwRe&X-Amz-Signature=05dba5b2f29c8843094886b185d38f31358b9132520bb1b016c801fe4ab873f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDRANLV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO5Mc01u83RahKsaB5h3VXhYwdORl71EVP%2BMAHtfz4PAiEAnADFzH1U9j20rkuYnPrWPFd0YrfLuyg%2BjZoTSg1sRzIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJwLwr%2F8RSvMOEDIircA60o3seHdYk71H4nqkZ48%2BHPSVhdKFi5vXBNSpVq18JFoKUBzsgjMcam7CXqdlLml2HESNQ51TkkGHR6CtleQrsvS6qERs13MDiaDfAI5PD1a0bAutJIXPk0HKpYINGxl%2Fa0OTsL13tvzVM52tGPi0OFLLr0GxrBSP%2F1O4tTxpcGRWwvmInwhZvlgKNF4mK%2BfHkVHBrnd5V2%2FqaOHbtuD05tIgi6sSoPU5CW8WCJgudV%2FLjXXAXn8meUhGQd%2BNLRnxQmQ%2FYyOcv3R%2Ba1rDGQvT%2BlnNLJQO4BSq75IqWEunTHNcWIcpDg0ocGtD%2BouoCYAZyelNKiT0C6Sy3XPl6LQCs1oknbCH7O71%2FtfeuZnCuWM5KrDOmgZSJ2ncDtcVWGnvc3gd%2Bu%2BrOZUt5kpDCjS%2BaMc1RHdN%2FnYtwmguthFl3RbwDE1Qudh%2FgJaWiMTayWtm7z6TgkAaa1DVvOhNtkKdCVCMvcTQeGLQgzHtBKeZoN8dFTgeuxVz6rTmb9yGZihCLmi%2FxV2nDQ%2BVjsB3RIOzrYniPXuQObPQLMBXiwmI3bAIhyjO42YvpqVdhLRLMzkehLhkh%2Bn4beBWHg1pav7XgDAjGFDTkhG9Tjaw5YaSFwSgao5xq0psFIftViMPT1t8MGOqUBxv4Z2HrvNbSEXrwRgJtTeW4J%2BzpWbuVaU8kLkNzhoKdspqmJ3VzNT9ezmSEO1t3QAHR4HffE0MmOcTwt3Q00v5vEhrQo0TJekmfbl%2FJ%2BpccG5t5xp7DIRwwE2rlCubwo7YjHqEwYkBHii8muvRk48uxZv7A%2FwgdMVcj%2BXkvfVRERz9ShJNXKc6vCbx7mOfliloUW%2FZgRea93eN%2BikRm1mv2vxwRe&X-Amz-Signature=f77229638c2253f26a830553e4ffd30c53f91d2b37b9416a0823e2c09e0944ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDRANLV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO5Mc01u83RahKsaB5h3VXhYwdORl71EVP%2BMAHtfz4PAiEAnADFzH1U9j20rkuYnPrWPFd0YrfLuyg%2BjZoTSg1sRzIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJwLwr%2F8RSvMOEDIircA60o3seHdYk71H4nqkZ48%2BHPSVhdKFi5vXBNSpVq18JFoKUBzsgjMcam7CXqdlLml2HESNQ51TkkGHR6CtleQrsvS6qERs13MDiaDfAI5PD1a0bAutJIXPk0HKpYINGxl%2Fa0OTsL13tvzVM52tGPi0OFLLr0GxrBSP%2F1O4tTxpcGRWwvmInwhZvlgKNF4mK%2BfHkVHBrnd5V2%2FqaOHbtuD05tIgi6sSoPU5CW8WCJgudV%2FLjXXAXn8meUhGQd%2BNLRnxQmQ%2FYyOcv3R%2Ba1rDGQvT%2BlnNLJQO4BSq75IqWEunTHNcWIcpDg0ocGtD%2BouoCYAZyelNKiT0C6Sy3XPl6LQCs1oknbCH7O71%2FtfeuZnCuWM5KrDOmgZSJ2ncDtcVWGnvc3gd%2Bu%2BrOZUt5kpDCjS%2BaMc1RHdN%2FnYtwmguthFl3RbwDE1Qudh%2FgJaWiMTayWtm7z6TgkAaa1DVvOhNtkKdCVCMvcTQeGLQgzHtBKeZoN8dFTgeuxVz6rTmb9yGZihCLmi%2FxV2nDQ%2BVjsB3RIOzrYniPXuQObPQLMBXiwmI3bAIhyjO42YvpqVdhLRLMzkehLhkh%2Bn4beBWHg1pav7XgDAjGFDTkhG9Tjaw5YaSFwSgao5xq0psFIftViMPT1t8MGOqUBxv4Z2HrvNbSEXrwRgJtTeW4J%2BzpWbuVaU8kLkNzhoKdspqmJ3VzNT9ezmSEO1t3QAHR4HffE0MmOcTwt3Q00v5vEhrQo0TJekmfbl%2FJ%2BpccG5t5xp7DIRwwE2rlCubwo7YjHqEwYkBHii8muvRk48uxZv7A%2FwgdMVcj%2BXkvfVRERz9ShJNXKc6vCbx7mOfliloUW%2FZgRea93eN%2BikRm1mv2vxwRe&X-Amz-Signature=a8a2432f5c37a0199c1862204817d1292d32237d21e313c6720c62565d817854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDRANLV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO5Mc01u83RahKsaB5h3VXhYwdORl71EVP%2BMAHtfz4PAiEAnADFzH1U9j20rkuYnPrWPFd0YrfLuyg%2BjZoTSg1sRzIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJwLwr%2F8RSvMOEDIircA60o3seHdYk71H4nqkZ48%2BHPSVhdKFi5vXBNSpVq18JFoKUBzsgjMcam7CXqdlLml2HESNQ51TkkGHR6CtleQrsvS6qERs13MDiaDfAI5PD1a0bAutJIXPk0HKpYINGxl%2Fa0OTsL13tvzVM52tGPi0OFLLr0GxrBSP%2F1O4tTxpcGRWwvmInwhZvlgKNF4mK%2BfHkVHBrnd5V2%2FqaOHbtuD05tIgi6sSoPU5CW8WCJgudV%2FLjXXAXn8meUhGQd%2BNLRnxQmQ%2FYyOcv3R%2Ba1rDGQvT%2BlnNLJQO4BSq75IqWEunTHNcWIcpDg0ocGtD%2BouoCYAZyelNKiT0C6Sy3XPl6LQCs1oknbCH7O71%2FtfeuZnCuWM5KrDOmgZSJ2ncDtcVWGnvc3gd%2Bu%2BrOZUt5kpDCjS%2BaMc1RHdN%2FnYtwmguthFl3RbwDE1Qudh%2FgJaWiMTayWtm7z6TgkAaa1DVvOhNtkKdCVCMvcTQeGLQgzHtBKeZoN8dFTgeuxVz6rTmb9yGZihCLmi%2FxV2nDQ%2BVjsB3RIOzrYniPXuQObPQLMBXiwmI3bAIhyjO42YvpqVdhLRLMzkehLhkh%2Bn4beBWHg1pav7XgDAjGFDTkhG9Tjaw5YaSFwSgao5xq0psFIftViMPT1t8MGOqUBxv4Z2HrvNbSEXrwRgJtTeW4J%2BzpWbuVaU8kLkNzhoKdspqmJ3VzNT9ezmSEO1t3QAHR4HffE0MmOcTwt3Q00v5vEhrQo0TJekmfbl%2FJ%2BpccG5t5xp7DIRwwE2rlCubwo7YjHqEwYkBHii8muvRk48uxZv7A%2FwgdMVcj%2BXkvfVRERz9ShJNXKc6vCbx7mOfliloUW%2FZgRea93eN%2BikRm1mv2vxwRe&X-Amz-Signature=2ba6dda43b3fef26c4522c00771cce2cbad0853ccb08e2e40e5977a3cd32345b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDRANLV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO5Mc01u83RahKsaB5h3VXhYwdORl71EVP%2BMAHtfz4PAiEAnADFzH1U9j20rkuYnPrWPFd0YrfLuyg%2BjZoTSg1sRzIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJwLwr%2F8RSvMOEDIircA60o3seHdYk71H4nqkZ48%2BHPSVhdKFi5vXBNSpVq18JFoKUBzsgjMcam7CXqdlLml2HESNQ51TkkGHR6CtleQrsvS6qERs13MDiaDfAI5PD1a0bAutJIXPk0HKpYINGxl%2Fa0OTsL13tvzVM52tGPi0OFLLr0GxrBSP%2F1O4tTxpcGRWwvmInwhZvlgKNF4mK%2BfHkVHBrnd5V2%2FqaOHbtuD05tIgi6sSoPU5CW8WCJgudV%2FLjXXAXn8meUhGQd%2BNLRnxQmQ%2FYyOcv3R%2Ba1rDGQvT%2BlnNLJQO4BSq75IqWEunTHNcWIcpDg0ocGtD%2BouoCYAZyelNKiT0C6Sy3XPl6LQCs1oknbCH7O71%2FtfeuZnCuWM5KrDOmgZSJ2ncDtcVWGnvc3gd%2Bu%2BrOZUt5kpDCjS%2BaMc1RHdN%2FnYtwmguthFl3RbwDE1Qudh%2FgJaWiMTayWtm7z6TgkAaa1DVvOhNtkKdCVCMvcTQeGLQgzHtBKeZoN8dFTgeuxVz6rTmb9yGZihCLmi%2FxV2nDQ%2BVjsB3RIOzrYniPXuQObPQLMBXiwmI3bAIhyjO42YvpqVdhLRLMzkehLhkh%2Bn4beBWHg1pav7XgDAjGFDTkhG9Tjaw5YaSFwSgao5xq0psFIftViMPT1t8MGOqUBxv4Z2HrvNbSEXrwRgJtTeW4J%2BzpWbuVaU8kLkNzhoKdspqmJ3VzNT9ezmSEO1t3QAHR4HffE0MmOcTwt3Q00v5vEhrQo0TJekmfbl%2FJ%2BpccG5t5xp7DIRwwE2rlCubwo7YjHqEwYkBHii8muvRk48uxZv7A%2FwgdMVcj%2BXkvfVRERz9ShJNXKc6vCbx7mOfliloUW%2FZgRea93eN%2BikRm1mv2vxwRe&X-Amz-Signature=13e8363a1866089f992f5378ab72cf81fff742f84e3d979cc8e926c042face22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDRANLV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO5Mc01u83RahKsaB5h3VXhYwdORl71EVP%2BMAHtfz4PAiEAnADFzH1U9j20rkuYnPrWPFd0YrfLuyg%2BjZoTSg1sRzIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJwLwr%2F8RSvMOEDIircA60o3seHdYk71H4nqkZ48%2BHPSVhdKFi5vXBNSpVq18JFoKUBzsgjMcam7CXqdlLml2HESNQ51TkkGHR6CtleQrsvS6qERs13MDiaDfAI5PD1a0bAutJIXPk0HKpYINGxl%2Fa0OTsL13tvzVM52tGPi0OFLLr0GxrBSP%2F1O4tTxpcGRWwvmInwhZvlgKNF4mK%2BfHkVHBrnd5V2%2FqaOHbtuD05tIgi6sSoPU5CW8WCJgudV%2FLjXXAXn8meUhGQd%2BNLRnxQmQ%2FYyOcv3R%2Ba1rDGQvT%2BlnNLJQO4BSq75IqWEunTHNcWIcpDg0ocGtD%2BouoCYAZyelNKiT0C6Sy3XPl6LQCs1oknbCH7O71%2FtfeuZnCuWM5KrDOmgZSJ2ncDtcVWGnvc3gd%2Bu%2BrOZUt5kpDCjS%2BaMc1RHdN%2FnYtwmguthFl3RbwDE1Qudh%2FgJaWiMTayWtm7z6TgkAaa1DVvOhNtkKdCVCMvcTQeGLQgzHtBKeZoN8dFTgeuxVz6rTmb9yGZihCLmi%2FxV2nDQ%2BVjsB3RIOzrYniPXuQObPQLMBXiwmI3bAIhyjO42YvpqVdhLRLMzkehLhkh%2Bn4beBWHg1pav7XgDAjGFDTkhG9Tjaw5YaSFwSgao5xq0psFIftViMPT1t8MGOqUBxv4Z2HrvNbSEXrwRgJtTeW4J%2BzpWbuVaU8kLkNzhoKdspqmJ3VzNT9ezmSEO1t3QAHR4HffE0MmOcTwt3Q00v5vEhrQo0TJekmfbl%2FJ%2BpccG5t5xp7DIRwwE2rlCubwo7YjHqEwYkBHii8muvRk48uxZv7A%2FwgdMVcj%2BXkvfVRERz9ShJNXKc6vCbx7mOfliloUW%2FZgRea93eN%2BikRm1mv2vxwRe&X-Amz-Signature=aeca62ed4e916331240390aa4c2f828dba0c4352c251b70104571bf7aca85251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDRANLV%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAO5Mc01u83RahKsaB5h3VXhYwdORl71EVP%2BMAHtfz4PAiEAnADFzH1U9j20rkuYnPrWPFd0YrfLuyg%2BjZoTSg1sRzIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJwLwr%2F8RSvMOEDIircA60o3seHdYk71H4nqkZ48%2BHPSVhdKFi5vXBNSpVq18JFoKUBzsgjMcam7CXqdlLml2HESNQ51TkkGHR6CtleQrsvS6qERs13MDiaDfAI5PD1a0bAutJIXPk0HKpYINGxl%2Fa0OTsL13tvzVM52tGPi0OFLLr0GxrBSP%2F1O4tTxpcGRWwvmInwhZvlgKNF4mK%2BfHkVHBrnd5V2%2FqaOHbtuD05tIgi6sSoPU5CW8WCJgudV%2FLjXXAXn8meUhGQd%2BNLRnxQmQ%2FYyOcv3R%2Ba1rDGQvT%2BlnNLJQO4BSq75IqWEunTHNcWIcpDg0ocGtD%2BouoCYAZyelNKiT0C6Sy3XPl6LQCs1oknbCH7O71%2FtfeuZnCuWM5KrDOmgZSJ2ncDtcVWGnvc3gd%2Bu%2BrOZUt5kpDCjS%2BaMc1RHdN%2FnYtwmguthFl3RbwDE1Qudh%2FgJaWiMTayWtm7z6TgkAaa1DVvOhNtkKdCVCMvcTQeGLQgzHtBKeZoN8dFTgeuxVz6rTmb9yGZihCLmi%2FxV2nDQ%2BVjsB3RIOzrYniPXuQObPQLMBXiwmI3bAIhyjO42YvpqVdhLRLMzkehLhkh%2Bn4beBWHg1pav7XgDAjGFDTkhG9Tjaw5YaSFwSgao5xq0psFIftViMPT1t8MGOqUBxv4Z2HrvNbSEXrwRgJtTeW4J%2BzpWbuVaU8kLkNzhoKdspqmJ3VzNT9ezmSEO1t3QAHR4HffE0MmOcTwt3Q00v5vEhrQo0TJekmfbl%2FJ%2BpccG5t5xp7DIRwwE2rlCubwo7YjHqEwYkBHii8muvRk48uxZv7A%2FwgdMVcj%2BXkvfVRERz9ShJNXKc6vCbx7mOfliloUW%2FZgRea93eN%2BikRm1mv2vxwRe&X-Amz-Signature=56f549dac74e9b88b71548589240b3292257395e4aabfa0af7eab6cc2f432c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
