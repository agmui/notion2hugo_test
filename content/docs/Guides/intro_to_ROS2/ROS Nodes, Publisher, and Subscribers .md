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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VLLPQY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIG07FPH4jmEdNTnER1uJanAmhIuU96%2F0BYIOHmVCJ0jnAiEA6vtp5VwtYuaQkoPc%2B1CBvLeJXszR84gjEo26x3awMjgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDfU786aJhfVMEQrFyrcAy%2FWNEaG1%2BQ8D9bkCeOVaUAsCMy%2B5AZWXtrMHRZQHnGpyPc2vv0NFjW5AMH9ieNtDyPS0XWWDJ%2BdTjN4NHLAdkwfZ5jTNR%2Blww7B4vw7xC9wJeiU5KrUHNYkySOs31wPNrjfnCywIEi%2FRLZ70zALL7x%2F%2B7mk8TSVeCsAtl1zIML6cA%2ByV672wUUiZNz9C3SuMPtRSZU%2BNSAUKeQnqhDJhWYzRs9zRBlKnvWapVsNiE2IkEySczfbSSm7fOUcsYnquNbodhJJVZRK3enPBFcR0F1y%2BdNLqFbPp11e20PzTAwLRPEsIQR89HuWIRtUMHZoplhoribTyHqnnQmqM%2Fdn5x33%2FRopUutDrLSNlkw%2BpPuEz33pzPkch5gbDTXBLM6SMCVem%2BXCFIV3Uj01HQz5F%2FNvfVIR4awpMFWxsCSoSlWPMppvdGrvVp1fc6o0OnqMDDD7wJhC4TGpZAjD5DxcTNAy5AXzGcpezZsa8QFDY9XU6QHA52p5m4IhVm23I3ugCrc67auMPUjdybkXjpNbtf%2FhIO7b8kXRV%2Bl5EAMG0r6B4Rq18sWwsjccwsQ5226QsMnfm6npzKUzvniKxnM43Y9vB%2F5uf1jLqXPQGKXdIcDfb%2FNg7cloHRl8UVt4MOL%2BvcIGOqUBw3pmHdr%2FDECg4g0le08CvhgKaJyzEVEtItdoxTCUDDs3KjCuvIBUIMTnwmDAWvEoh4MKXVUYY3ZnEPeMOCfPu9sHkzPVtxkFMRZoRtwnsngxmTHVv8VoACrhqQsEsiJcYB8qkzhD8Z9GSoyIM7mc5MW08XMjX5AXwNsLiiTT5uRyU%2FKEiN7akXzGvji0IiQ9dzsV85sOQIou1W4jamr0D5I0M4QA&X-Amz-Signature=aebc21e58fa87b3288c326c77e8a9c6d9618dbaff28f417f2dded0ae8f21eefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VLLPQY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIG07FPH4jmEdNTnER1uJanAmhIuU96%2F0BYIOHmVCJ0jnAiEA6vtp5VwtYuaQkoPc%2B1CBvLeJXszR84gjEo26x3awMjgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDfU786aJhfVMEQrFyrcAy%2FWNEaG1%2BQ8D9bkCeOVaUAsCMy%2B5AZWXtrMHRZQHnGpyPc2vv0NFjW5AMH9ieNtDyPS0XWWDJ%2BdTjN4NHLAdkwfZ5jTNR%2Blww7B4vw7xC9wJeiU5KrUHNYkySOs31wPNrjfnCywIEi%2FRLZ70zALL7x%2F%2B7mk8TSVeCsAtl1zIML6cA%2ByV672wUUiZNz9C3SuMPtRSZU%2BNSAUKeQnqhDJhWYzRs9zRBlKnvWapVsNiE2IkEySczfbSSm7fOUcsYnquNbodhJJVZRK3enPBFcR0F1y%2BdNLqFbPp11e20PzTAwLRPEsIQR89HuWIRtUMHZoplhoribTyHqnnQmqM%2Fdn5x33%2FRopUutDrLSNlkw%2BpPuEz33pzPkch5gbDTXBLM6SMCVem%2BXCFIV3Uj01HQz5F%2FNvfVIR4awpMFWxsCSoSlWPMppvdGrvVp1fc6o0OnqMDDD7wJhC4TGpZAjD5DxcTNAy5AXzGcpezZsa8QFDY9XU6QHA52p5m4IhVm23I3ugCrc67auMPUjdybkXjpNbtf%2FhIO7b8kXRV%2Bl5EAMG0r6B4Rq18sWwsjccwsQ5226QsMnfm6npzKUzvniKxnM43Y9vB%2F5uf1jLqXPQGKXdIcDfb%2FNg7cloHRl8UVt4MOL%2BvcIGOqUBw3pmHdr%2FDECg4g0le08CvhgKaJyzEVEtItdoxTCUDDs3KjCuvIBUIMTnwmDAWvEoh4MKXVUYY3ZnEPeMOCfPu9sHkzPVtxkFMRZoRtwnsngxmTHVv8VoACrhqQsEsiJcYB8qkzhD8Z9GSoyIM7mc5MW08XMjX5AXwNsLiiTT5uRyU%2FKEiN7akXzGvji0IiQ9dzsV85sOQIou1W4jamr0D5I0M4QA&X-Amz-Signature=2b22c2fb5a77a27277811de549cd1f314731cc0f659ecadd1e92e96fe5100da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VLLPQY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIG07FPH4jmEdNTnER1uJanAmhIuU96%2F0BYIOHmVCJ0jnAiEA6vtp5VwtYuaQkoPc%2B1CBvLeJXszR84gjEo26x3awMjgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDfU786aJhfVMEQrFyrcAy%2FWNEaG1%2BQ8D9bkCeOVaUAsCMy%2B5AZWXtrMHRZQHnGpyPc2vv0NFjW5AMH9ieNtDyPS0XWWDJ%2BdTjN4NHLAdkwfZ5jTNR%2Blww7B4vw7xC9wJeiU5KrUHNYkySOs31wPNrjfnCywIEi%2FRLZ70zALL7x%2F%2B7mk8TSVeCsAtl1zIML6cA%2ByV672wUUiZNz9C3SuMPtRSZU%2BNSAUKeQnqhDJhWYzRs9zRBlKnvWapVsNiE2IkEySczfbSSm7fOUcsYnquNbodhJJVZRK3enPBFcR0F1y%2BdNLqFbPp11e20PzTAwLRPEsIQR89HuWIRtUMHZoplhoribTyHqnnQmqM%2Fdn5x33%2FRopUutDrLSNlkw%2BpPuEz33pzPkch5gbDTXBLM6SMCVem%2BXCFIV3Uj01HQz5F%2FNvfVIR4awpMFWxsCSoSlWPMppvdGrvVp1fc6o0OnqMDDD7wJhC4TGpZAjD5DxcTNAy5AXzGcpezZsa8QFDY9XU6QHA52p5m4IhVm23I3ugCrc67auMPUjdybkXjpNbtf%2FhIO7b8kXRV%2Bl5EAMG0r6B4Rq18sWwsjccwsQ5226QsMnfm6npzKUzvniKxnM43Y9vB%2F5uf1jLqXPQGKXdIcDfb%2FNg7cloHRl8UVt4MOL%2BvcIGOqUBw3pmHdr%2FDECg4g0le08CvhgKaJyzEVEtItdoxTCUDDs3KjCuvIBUIMTnwmDAWvEoh4MKXVUYY3ZnEPeMOCfPu9sHkzPVtxkFMRZoRtwnsngxmTHVv8VoACrhqQsEsiJcYB8qkzhD8Z9GSoyIM7mc5MW08XMjX5AXwNsLiiTT5uRyU%2FKEiN7akXzGvji0IiQ9dzsV85sOQIou1W4jamr0D5I0M4QA&X-Amz-Signature=5af281f9039d4b619732a1a28eef35ab68d69612b9edc98b70e157c31f1df821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VLLPQY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIG07FPH4jmEdNTnER1uJanAmhIuU96%2F0BYIOHmVCJ0jnAiEA6vtp5VwtYuaQkoPc%2B1CBvLeJXszR84gjEo26x3awMjgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDfU786aJhfVMEQrFyrcAy%2FWNEaG1%2BQ8D9bkCeOVaUAsCMy%2B5AZWXtrMHRZQHnGpyPc2vv0NFjW5AMH9ieNtDyPS0XWWDJ%2BdTjN4NHLAdkwfZ5jTNR%2Blww7B4vw7xC9wJeiU5KrUHNYkySOs31wPNrjfnCywIEi%2FRLZ70zALL7x%2F%2B7mk8TSVeCsAtl1zIML6cA%2ByV672wUUiZNz9C3SuMPtRSZU%2BNSAUKeQnqhDJhWYzRs9zRBlKnvWapVsNiE2IkEySczfbSSm7fOUcsYnquNbodhJJVZRK3enPBFcR0F1y%2BdNLqFbPp11e20PzTAwLRPEsIQR89HuWIRtUMHZoplhoribTyHqnnQmqM%2Fdn5x33%2FRopUutDrLSNlkw%2BpPuEz33pzPkch5gbDTXBLM6SMCVem%2BXCFIV3Uj01HQz5F%2FNvfVIR4awpMFWxsCSoSlWPMppvdGrvVp1fc6o0OnqMDDD7wJhC4TGpZAjD5DxcTNAy5AXzGcpezZsa8QFDY9XU6QHA52p5m4IhVm23I3ugCrc67auMPUjdybkXjpNbtf%2FhIO7b8kXRV%2Bl5EAMG0r6B4Rq18sWwsjccwsQ5226QsMnfm6npzKUzvniKxnM43Y9vB%2F5uf1jLqXPQGKXdIcDfb%2FNg7cloHRl8UVt4MOL%2BvcIGOqUBw3pmHdr%2FDECg4g0le08CvhgKaJyzEVEtItdoxTCUDDs3KjCuvIBUIMTnwmDAWvEoh4MKXVUYY3ZnEPeMOCfPu9sHkzPVtxkFMRZoRtwnsngxmTHVv8VoACrhqQsEsiJcYB8qkzhD8Z9GSoyIM7mc5MW08XMjX5AXwNsLiiTT5uRyU%2FKEiN7akXzGvji0IiQ9dzsV85sOQIou1W4jamr0D5I0M4QA&X-Amz-Signature=6fa719f23a712a96a2977e7a60e1e22091568879dbc0bf69c09087ecdbb8fff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VLLPQY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIG07FPH4jmEdNTnER1uJanAmhIuU96%2F0BYIOHmVCJ0jnAiEA6vtp5VwtYuaQkoPc%2B1CBvLeJXszR84gjEo26x3awMjgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDfU786aJhfVMEQrFyrcAy%2FWNEaG1%2BQ8D9bkCeOVaUAsCMy%2B5AZWXtrMHRZQHnGpyPc2vv0NFjW5AMH9ieNtDyPS0XWWDJ%2BdTjN4NHLAdkwfZ5jTNR%2Blww7B4vw7xC9wJeiU5KrUHNYkySOs31wPNrjfnCywIEi%2FRLZ70zALL7x%2F%2B7mk8TSVeCsAtl1zIML6cA%2ByV672wUUiZNz9C3SuMPtRSZU%2BNSAUKeQnqhDJhWYzRs9zRBlKnvWapVsNiE2IkEySczfbSSm7fOUcsYnquNbodhJJVZRK3enPBFcR0F1y%2BdNLqFbPp11e20PzTAwLRPEsIQR89HuWIRtUMHZoplhoribTyHqnnQmqM%2Fdn5x33%2FRopUutDrLSNlkw%2BpPuEz33pzPkch5gbDTXBLM6SMCVem%2BXCFIV3Uj01HQz5F%2FNvfVIR4awpMFWxsCSoSlWPMppvdGrvVp1fc6o0OnqMDDD7wJhC4TGpZAjD5DxcTNAy5AXzGcpezZsa8QFDY9XU6QHA52p5m4IhVm23I3ugCrc67auMPUjdybkXjpNbtf%2FhIO7b8kXRV%2Bl5EAMG0r6B4Rq18sWwsjccwsQ5226QsMnfm6npzKUzvniKxnM43Y9vB%2F5uf1jLqXPQGKXdIcDfb%2FNg7cloHRl8UVt4MOL%2BvcIGOqUBw3pmHdr%2FDECg4g0le08CvhgKaJyzEVEtItdoxTCUDDs3KjCuvIBUIMTnwmDAWvEoh4MKXVUYY3ZnEPeMOCfPu9sHkzPVtxkFMRZoRtwnsngxmTHVv8VoACrhqQsEsiJcYB8qkzhD8Z9GSoyIM7mc5MW08XMjX5AXwNsLiiTT5uRyU%2FKEiN7akXzGvji0IiQ9dzsV85sOQIou1W4jamr0D5I0M4QA&X-Amz-Signature=9f5d6376078732756213a74a95a84d5125e3e020e495645dd22af999b85e75a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VLLPQY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIG07FPH4jmEdNTnER1uJanAmhIuU96%2F0BYIOHmVCJ0jnAiEA6vtp5VwtYuaQkoPc%2B1CBvLeJXszR84gjEo26x3awMjgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDfU786aJhfVMEQrFyrcAy%2FWNEaG1%2BQ8D9bkCeOVaUAsCMy%2B5AZWXtrMHRZQHnGpyPc2vv0NFjW5AMH9ieNtDyPS0XWWDJ%2BdTjN4NHLAdkwfZ5jTNR%2Blww7B4vw7xC9wJeiU5KrUHNYkySOs31wPNrjfnCywIEi%2FRLZ70zALL7x%2F%2B7mk8TSVeCsAtl1zIML6cA%2ByV672wUUiZNz9C3SuMPtRSZU%2BNSAUKeQnqhDJhWYzRs9zRBlKnvWapVsNiE2IkEySczfbSSm7fOUcsYnquNbodhJJVZRK3enPBFcR0F1y%2BdNLqFbPp11e20PzTAwLRPEsIQR89HuWIRtUMHZoplhoribTyHqnnQmqM%2Fdn5x33%2FRopUutDrLSNlkw%2BpPuEz33pzPkch5gbDTXBLM6SMCVem%2BXCFIV3Uj01HQz5F%2FNvfVIR4awpMFWxsCSoSlWPMppvdGrvVp1fc6o0OnqMDDD7wJhC4TGpZAjD5DxcTNAy5AXzGcpezZsa8QFDY9XU6QHA52p5m4IhVm23I3ugCrc67auMPUjdybkXjpNbtf%2FhIO7b8kXRV%2Bl5EAMG0r6B4Rq18sWwsjccwsQ5226QsMnfm6npzKUzvniKxnM43Y9vB%2F5uf1jLqXPQGKXdIcDfb%2FNg7cloHRl8UVt4MOL%2BvcIGOqUBw3pmHdr%2FDECg4g0le08CvhgKaJyzEVEtItdoxTCUDDs3KjCuvIBUIMTnwmDAWvEoh4MKXVUYY3ZnEPeMOCfPu9sHkzPVtxkFMRZoRtwnsngxmTHVv8VoACrhqQsEsiJcYB8qkzhD8Z9GSoyIM7mc5MW08XMjX5AXwNsLiiTT5uRyU%2FKEiN7akXzGvji0IiQ9dzsV85sOQIou1W4jamr0D5I0M4QA&X-Amz-Signature=127e67080675ac5425fe4883224e2a9047b8b278a31d935a2d3d9f7be0950822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VLLPQY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIG07FPH4jmEdNTnER1uJanAmhIuU96%2F0BYIOHmVCJ0jnAiEA6vtp5VwtYuaQkoPc%2B1CBvLeJXszR84gjEo26x3awMjgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDfU786aJhfVMEQrFyrcAy%2FWNEaG1%2BQ8D9bkCeOVaUAsCMy%2B5AZWXtrMHRZQHnGpyPc2vv0NFjW5AMH9ieNtDyPS0XWWDJ%2BdTjN4NHLAdkwfZ5jTNR%2Blww7B4vw7xC9wJeiU5KrUHNYkySOs31wPNrjfnCywIEi%2FRLZ70zALL7x%2F%2B7mk8TSVeCsAtl1zIML6cA%2ByV672wUUiZNz9C3SuMPtRSZU%2BNSAUKeQnqhDJhWYzRs9zRBlKnvWapVsNiE2IkEySczfbSSm7fOUcsYnquNbodhJJVZRK3enPBFcR0F1y%2BdNLqFbPp11e20PzTAwLRPEsIQR89HuWIRtUMHZoplhoribTyHqnnQmqM%2Fdn5x33%2FRopUutDrLSNlkw%2BpPuEz33pzPkch5gbDTXBLM6SMCVem%2BXCFIV3Uj01HQz5F%2FNvfVIR4awpMFWxsCSoSlWPMppvdGrvVp1fc6o0OnqMDDD7wJhC4TGpZAjD5DxcTNAy5AXzGcpezZsa8QFDY9XU6QHA52p5m4IhVm23I3ugCrc67auMPUjdybkXjpNbtf%2FhIO7b8kXRV%2Bl5EAMG0r6B4Rq18sWwsjccwsQ5226QsMnfm6npzKUzvniKxnM43Y9vB%2F5uf1jLqXPQGKXdIcDfb%2FNg7cloHRl8UVt4MOL%2BvcIGOqUBw3pmHdr%2FDECg4g0le08CvhgKaJyzEVEtItdoxTCUDDs3KjCuvIBUIMTnwmDAWvEoh4MKXVUYY3ZnEPeMOCfPu9sHkzPVtxkFMRZoRtwnsngxmTHVv8VoACrhqQsEsiJcYB8qkzhD8Z9GSoyIM7mc5MW08XMjX5AXwNsLiiTT5uRyU%2FKEiN7akXzGvji0IiQ9dzsV85sOQIou1W4jamr0D5I0M4QA&X-Amz-Signature=077586e4e1db51a38f5433f42601b32798ee191a5023007c6b0eace660871959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6VLLPQY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIG07FPH4jmEdNTnER1uJanAmhIuU96%2F0BYIOHmVCJ0jnAiEA6vtp5VwtYuaQkoPc%2B1CBvLeJXszR84gjEo26x3awMjgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDfU786aJhfVMEQrFyrcAy%2FWNEaG1%2BQ8D9bkCeOVaUAsCMy%2B5AZWXtrMHRZQHnGpyPc2vv0NFjW5AMH9ieNtDyPS0XWWDJ%2BdTjN4NHLAdkwfZ5jTNR%2Blww7B4vw7xC9wJeiU5KrUHNYkySOs31wPNrjfnCywIEi%2FRLZ70zALL7x%2F%2B7mk8TSVeCsAtl1zIML6cA%2ByV672wUUiZNz9C3SuMPtRSZU%2BNSAUKeQnqhDJhWYzRs9zRBlKnvWapVsNiE2IkEySczfbSSm7fOUcsYnquNbodhJJVZRK3enPBFcR0F1y%2BdNLqFbPp11e20PzTAwLRPEsIQR89HuWIRtUMHZoplhoribTyHqnnQmqM%2Fdn5x33%2FRopUutDrLSNlkw%2BpPuEz33pzPkch5gbDTXBLM6SMCVem%2BXCFIV3Uj01HQz5F%2FNvfVIR4awpMFWxsCSoSlWPMppvdGrvVp1fc6o0OnqMDDD7wJhC4TGpZAjD5DxcTNAy5AXzGcpezZsa8QFDY9XU6QHA52p5m4IhVm23I3ugCrc67auMPUjdybkXjpNbtf%2FhIO7b8kXRV%2Bl5EAMG0r6B4Rq18sWwsjccwsQ5226QsMnfm6npzKUzvniKxnM43Y9vB%2F5uf1jLqXPQGKXdIcDfb%2FNg7cloHRl8UVt4MOL%2BvcIGOqUBw3pmHdr%2FDECg4g0le08CvhgKaJyzEVEtItdoxTCUDDs3KjCuvIBUIMTnwmDAWvEoh4MKXVUYY3ZnEPeMOCfPu9sHkzPVtxkFMRZoRtwnsngxmTHVv8VoACrhqQsEsiJcYB8qkzhD8Z9GSoyIM7mc5MW08XMjX5AXwNsLiiTT5uRyU%2FKEiN7akXzGvji0IiQ9dzsV85sOQIou1W4jamr0D5I0M4QA&X-Amz-Signature=3bee2cf7402e4323c1174ccbacfe9d7b7660232bb72366e273fe45ac7bcfe974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
