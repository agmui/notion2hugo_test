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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKO4DPF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcREJI4EzCFBOHYzUBc3QNkcA776O2lc46z2DsU3iQ8wIgV5ilkrV%2BFoNYzf8o5fCZvgxZNq6sLPaUjxakNM%2FJYvAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBw%2FlfVGmdEZuFJA3ircA8GAzg7sCBzpESs%2Bg9sjca4qc25IJXBBXEa5skYYE955db7vYJal1aLqybHb12Mkfw1ISTKnazktJikCA1296whtVNWgw%2FOfqz%2F%2FpQWOQw67bSAypvRSsxqympPbkopZv43aCqRLBpX5%2Fig%2Bbb1rKHDlo2w6t2U%2ByLFsQU5ZTe0JxHTMVFXVNBrPCJ%2BVtjxmjbJQ6fCYtWAKHeNHAvsvtbLfZ6aXq7ZVyVPARk25hC20FjykzP7LgOL1NKfjT3WZYvW0rvKv8bLojpHPakUh5A8E6q%2BpMSALOomM5SXkNEfn8xsJ1HoYtjG9Ph%2FNRbJcIvzMeBXrs3tTKUL%2BpbaQ%2FsMu1Q%2BVfb2sxru8bsZZV8sEewvSlYCPGO35HN1XfQRXV2CjmNDCvrcqpYBaKtIthZLcySHo0ExJ4CywUgpKzwX4Qq6lt3AasrBN2lnd5holbN2wyzSqiQLxr9YjwzjejO%2FTNJW%2B3R%2BmdaNktdotmListzFuqJpEe45GKhIqdcNYMtATHyLfvBOmd%2Bt%2B%2FjmPfAnndDrcO1c9GqdA4puXrAdnPmz0xE4m5X3a28HNVkRPqXAVrCtYGP1QwiRQojwogH%2Fu6OeBOH4aKPYxhIFEhqd8qSPw%2FM7FdxfGyykdMIm1xsIGOqUBtWEr%2BGxwrrHzOFmtqt8U5FhonxI%2F3aO41KztcbP6xiintywbaCNrA%2BF%2BmfA7SCIHGcyjixSUWaNUdgD8fG8GFXWJosDzRIGJL6mlzn5psITJ5dRJaL6L0v00PFmGCQNXN8k732oqLM1ObdHJdIgu99p4kZaxM5D3lxrooEXd1m8az%2B1LbM%2BrNzLTwIMDhf6P%2Ft7JrXQWpl%2Fyc37Gn0fBbrM4T5wI&X-Amz-Signature=64d2bb7a71ddf98a0298c10709017cc604a0fbd2db22d9197eebec95a90e1f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKO4DPF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcREJI4EzCFBOHYzUBc3QNkcA776O2lc46z2DsU3iQ8wIgV5ilkrV%2BFoNYzf8o5fCZvgxZNq6sLPaUjxakNM%2FJYvAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBw%2FlfVGmdEZuFJA3ircA8GAzg7sCBzpESs%2Bg9sjca4qc25IJXBBXEa5skYYE955db7vYJal1aLqybHb12Mkfw1ISTKnazktJikCA1296whtVNWgw%2FOfqz%2F%2FpQWOQw67bSAypvRSsxqympPbkopZv43aCqRLBpX5%2Fig%2Bbb1rKHDlo2w6t2U%2ByLFsQU5ZTe0JxHTMVFXVNBrPCJ%2BVtjxmjbJQ6fCYtWAKHeNHAvsvtbLfZ6aXq7ZVyVPARk25hC20FjykzP7LgOL1NKfjT3WZYvW0rvKv8bLojpHPakUh5A8E6q%2BpMSALOomM5SXkNEfn8xsJ1HoYtjG9Ph%2FNRbJcIvzMeBXrs3tTKUL%2BpbaQ%2FsMu1Q%2BVfb2sxru8bsZZV8sEewvSlYCPGO35HN1XfQRXV2CjmNDCvrcqpYBaKtIthZLcySHo0ExJ4CywUgpKzwX4Qq6lt3AasrBN2lnd5holbN2wyzSqiQLxr9YjwzjejO%2FTNJW%2B3R%2BmdaNktdotmListzFuqJpEe45GKhIqdcNYMtATHyLfvBOmd%2Bt%2B%2FjmPfAnndDrcO1c9GqdA4puXrAdnPmz0xE4m5X3a28HNVkRPqXAVrCtYGP1QwiRQojwogH%2Fu6OeBOH4aKPYxhIFEhqd8qSPw%2FM7FdxfGyykdMIm1xsIGOqUBtWEr%2BGxwrrHzOFmtqt8U5FhonxI%2F3aO41KztcbP6xiintywbaCNrA%2BF%2BmfA7SCIHGcyjixSUWaNUdgD8fG8GFXWJosDzRIGJL6mlzn5psITJ5dRJaL6L0v00PFmGCQNXN8k732oqLM1ObdHJdIgu99p4kZaxM5D3lxrooEXd1m8az%2B1LbM%2BrNzLTwIMDhf6P%2Ft7JrXQWpl%2Fyc37Gn0fBbrM4T5wI&X-Amz-Signature=b311a1da928d78f742e1b1ff7df00a1c7b7c7f4c598bd6916d44722270abba7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKO4DPF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcREJI4EzCFBOHYzUBc3QNkcA776O2lc46z2DsU3iQ8wIgV5ilkrV%2BFoNYzf8o5fCZvgxZNq6sLPaUjxakNM%2FJYvAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBw%2FlfVGmdEZuFJA3ircA8GAzg7sCBzpESs%2Bg9sjca4qc25IJXBBXEa5skYYE955db7vYJal1aLqybHb12Mkfw1ISTKnazktJikCA1296whtVNWgw%2FOfqz%2F%2FpQWOQw67bSAypvRSsxqympPbkopZv43aCqRLBpX5%2Fig%2Bbb1rKHDlo2w6t2U%2ByLFsQU5ZTe0JxHTMVFXVNBrPCJ%2BVtjxmjbJQ6fCYtWAKHeNHAvsvtbLfZ6aXq7ZVyVPARk25hC20FjykzP7LgOL1NKfjT3WZYvW0rvKv8bLojpHPakUh5A8E6q%2BpMSALOomM5SXkNEfn8xsJ1HoYtjG9Ph%2FNRbJcIvzMeBXrs3tTKUL%2BpbaQ%2FsMu1Q%2BVfb2sxru8bsZZV8sEewvSlYCPGO35HN1XfQRXV2CjmNDCvrcqpYBaKtIthZLcySHo0ExJ4CywUgpKzwX4Qq6lt3AasrBN2lnd5holbN2wyzSqiQLxr9YjwzjejO%2FTNJW%2B3R%2BmdaNktdotmListzFuqJpEe45GKhIqdcNYMtATHyLfvBOmd%2Bt%2B%2FjmPfAnndDrcO1c9GqdA4puXrAdnPmz0xE4m5X3a28HNVkRPqXAVrCtYGP1QwiRQojwogH%2Fu6OeBOH4aKPYxhIFEhqd8qSPw%2FM7FdxfGyykdMIm1xsIGOqUBtWEr%2BGxwrrHzOFmtqt8U5FhonxI%2F3aO41KztcbP6xiintywbaCNrA%2BF%2BmfA7SCIHGcyjixSUWaNUdgD8fG8GFXWJosDzRIGJL6mlzn5psITJ5dRJaL6L0v00PFmGCQNXN8k732oqLM1ObdHJdIgu99p4kZaxM5D3lxrooEXd1m8az%2B1LbM%2BrNzLTwIMDhf6P%2Ft7JrXQWpl%2Fyc37Gn0fBbrM4T5wI&X-Amz-Signature=b6316b35dad5d2ce3fcce4851f98b55f2fbac94f7b41bf8fd5d53693cf07b166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKO4DPF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcREJI4EzCFBOHYzUBc3QNkcA776O2lc46z2DsU3iQ8wIgV5ilkrV%2BFoNYzf8o5fCZvgxZNq6sLPaUjxakNM%2FJYvAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBw%2FlfVGmdEZuFJA3ircA8GAzg7sCBzpESs%2Bg9sjca4qc25IJXBBXEa5skYYE955db7vYJal1aLqybHb12Mkfw1ISTKnazktJikCA1296whtVNWgw%2FOfqz%2F%2FpQWOQw67bSAypvRSsxqympPbkopZv43aCqRLBpX5%2Fig%2Bbb1rKHDlo2w6t2U%2ByLFsQU5ZTe0JxHTMVFXVNBrPCJ%2BVtjxmjbJQ6fCYtWAKHeNHAvsvtbLfZ6aXq7ZVyVPARk25hC20FjykzP7LgOL1NKfjT3WZYvW0rvKv8bLojpHPakUh5A8E6q%2BpMSALOomM5SXkNEfn8xsJ1HoYtjG9Ph%2FNRbJcIvzMeBXrs3tTKUL%2BpbaQ%2FsMu1Q%2BVfb2sxru8bsZZV8sEewvSlYCPGO35HN1XfQRXV2CjmNDCvrcqpYBaKtIthZLcySHo0ExJ4CywUgpKzwX4Qq6lt3AasrBN2lnd5holbN2wyzSqiQLxr9YjwzjejO%2FTNJW%2B3R%2BmdaNktdotmListzFuqJpEe45GKhIqdcNYMtATHyLfvBOmd%2Bt%2B%2FjmPfAnndDrcO1c9GqdA4puXrAdnPmz0xE4m5X3a28HNVkRPqXAVrCtYGP1QwiRQojwogH%2Fu6OeBOH4aKPYxhIFEhqd8qSPw%2FM7FdxfGyykdMIm1xsIGOqUBtWEr%2BGxwrrHzOFmtqt8U5FhonxI%2F3aO41KztcbP6xiintywbaCNrA%2BF%2BmfA7SCIHGcyjixSUWaNUdgD8fG8GFXWJosDzRIGJL6mlzn5psITJ5dRJaL6L0v00PFmGCQNXN8k732oqLM1ObdHJdIgu99p4kZaxM5D3lxrooEXd1m8az%2B1LbM%2BrNzLTwIMDhf6P%2Ft7JrXQWpl%2Fyc37Gn0fBbrM4T5wI&X-Amz-Signature=0cfd10e67ab3375b780d0e138aa0b28fb07af7b95b22fe378660c6b520d22dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKO4DPF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcREJI4EzCFBOHYzUBc3QNkcA776O2lc46z2DsU3iQ8wIgV5ilkrV%2BFoNYzf8o5fCZvgxZNq6sLPaUjxakNM%2FJYvAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBw%2FlfVGmdEZuFJA3ircA8GAzg7sCBzpESs%2Bg9sjca4qc25IJXBBXEa5skYYE955db7vYJal1aLqybHb12Mkfw1ISTKnazktJikCA1296whtVNWgw%2FOfqz%2F%2FpQWOQw67bSAypvRSsxqympPbkopZv43aCqRLBpX5%2Fig%2Bbb1rKHDlo2w6t2U%2ByLFsQU5ZTe0JxHTMVFXVNBrPCJ%2BVtjxmjbJQ6fCYtWAKHeNHAvsvtbLfZ6aXq7ZVyVPARk25hC20FjykzP7LgOL1NKfjT3WZYvW0rvKv8bLojpHPakUh5A8E6q%2BpMSALOomM5SXkNEfn8xsJ1HoYtjG9Ph%2FNRbJcIvzMeBXrs3tTKUL%2BpbaQ%2FsMu1Q%2BVfb2sxru8bsZZV8sEewvSlYCPGO35HN1XfQRXV2CjmNDCvrcqpYBaKtIthZLcySHo0ExJ4CywUgpKzwX4Qq6lt3AasrBN2lnd5holbN2wyzSqiQLxr9YjwzjejO%2FTNJW%2B3R%2BmdaNktdotmListzFuqJpEe45GKhIqdcNYMtATHyLfvBOmd%2Bt%2B%2FjmPfAnndDrcO1c9GqdA4puXrAdnPmz0xE4m5X3a28HNVkRPqXAVrCtYGP1QwiRQojwogH%2Fu6OeBOH4aKPYxhIFEhqd8qSPw%2FM7FdxfGyykdMIm1xsIGOqUBtWEr%2BGxwrrHzOFmtqt8U5FhonxI%2F3aO41KztcbP6xiintywbaCNrA%2BF%2BmfA7SCIHGcyjixSUWaNUdgD8fG8GFXWJosDzRIGJL6mlzn5psITJ5dRJaL6L0v00PFmGCQNXN8k732oqLM1ObdHJdIgu99p4kZaxM5D3lxrooEXd1m8az%2B1LbM%2BrNzLTwIMDhf6P%2Ft7JrXQWpl%2Fyc37Gn0fBbrM4T5wI&X-Amz-Signature=413a94659f88e700b67c63a93ea512dff4cd57ffa114adf008f3a558f1f82dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKO4DPF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcREJI4EzCFBOHYzUBc3QNkcA776O2lc46z2DsU3iQ8wIgV5ilkrV%2BFoNYzf8o5fCZvgxZNq6sLPaUjxakNM%2FJYvAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBw%2FlfVGmdEZuFJA3ircA8GAzg7sCBzpESs%2Bg9sjca4qc25IJXBBXEa5skYYE955db7vYJal1aLqybHb12Mkfw1ISTKnazktJikCA1296whtVNWgw%2FOfqz%2F%2FpQWOQw67bSAypvRSsxqympPbkopZv43aCqRLBpX5%2Fig%2Bbb1rKHDlo2w6t2U%2ByLFsQU5ZTe0JxHTMVFXVNBrPCJ%2BVtjxmjbJQ6fCYtWAKHeNHAvsvtbLfZ6aXq7ZVyVPARk25hC20FjykzP7LgOL1NKfjT3WZYvW0rvKv8bLojpHPakUh5A8E6q%2BpMSALOomM5SXkNEfn8xsJ1HoYtjG9Ph%2FNRbJcIvzMeBXrs3tTKUL%2BpbaQ%2FsMu1Q%2BVfb2sxru8bsZZV8sEewvSlYCPGO35HN1XfQRXV2CjmNDCvrcqpYBaKtIthZLcySHo0ExJ4CywUgpKzwX4Qq6lt3AasrBN2lnd5holbN2wyzSqiQLxr9YjwzjejO%2FTNJW%2B3R%2BmdaNktdotmListzFuqJpEe45GKhIqdcNYMtATHyLfvBOmd%2Bt%2B%2FjmPfAnndDrcO1c9GqdA4puXrAdnPmz0xE4m5X3a28HNVkRPqXAVrCtYGP1QwiRQojwogH%2Fu6OeBOH4aKPYxhIFEhqd8qSPw%2FM7FdxfGyykdMIm1xsIGOqUBtWEr%2BGxwrrHzOFmtqt8U5FhonxI%2F3aO41KztcbP6xiintywbaCNrA%2BF%2BmfA7SCIHGcyjixSUWaNUdgD8fG8GFXWJosDzRIGJL6mlzn5psITJ5dRJaL6L0v00PFmGCQNXN8k732oqLM1ObdHJdIgu99p4kZaxM5D3lxrooEXd1m8az%2B1LbM%2BrNzLTwIMDhf6P%2Ft7JrXQWpl%2Fyc37Gn0fBbrM4T5wI&X-Amz-Signature=abeed3c3d8f7cd73a3e019fbdeceb943a23309c55a84bed26ac17cbbe56f1ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKO4DPF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcREJI4EzCFBOHYzUBc3QNkcA776O2lc46z2DsU3iQ8wIgV5ilkrV%2BFoNYzf8o5fCZvgxZNq6sLPaUjxakNM%2FJYvAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBw%2FlfVGmdEZuFJA3ircA8GAzg7sCBzpESs%2Bg9sjca4qc25IJXBBXEa5skYYE955db7vYJal1aLqybHb12Mkfw1ISTKnazktJikCA1296whtVNWgw%2FOfqz%2F%2FpQWOQw67bSAypvRSsxqympPbkopZv43aCqRLBpX5%2Fig%2Bbb1rKHDlo2w6t2U%2ByLFsQU5ZTe0JxHTMVFXVNBrPCJ%2BVtjxmjbJQ6fCYtWAKHeNHAvsvtbLfZ6aXq7ZVyVPARk25hC20FjykzP7LgOL1NKfjT3WZYvW0rvKv8bLojpHPakUh5A8E6q%2BpMSALOomM5SXkNEfn8xsJ1HoYtjG9Ph%2FNRbJcIvzMeBXrs3tTKUL%2BpbaQ%2FsMu1Q%2BVfb2sxru8bsZZV8sEewvSlYCPGO35HN1XfQRXV2CjmNDCvrcqpYBaKtIthZLcySHo0ExJ4CywUgpKzwX4Qq6lt3AasrBN2lnd5holbN2wyzSqiQLxr9YjwzjejO%2FTNJW%2B3R%2BmdaNktdotmListzFuqJpEe45GKhIqdcNYMtATHyLfvBOmd%2Bt%2B%2FjmPfAnndDrcO1c9GqdA4puXrAdnPmz0xE4m5X3a28HNVkRPqXAVrCtYGP1QwiRQojwogH%2Fu6OeBOH4aKPYxhIFEhqd8qSPw%2FM7FdxfGyykdMIm1xsIGOqUBtWEr%2BGxwrrHzOFmtqt8U5FhonxI%2F3aO41KztcbP6xiintywbaCNrA%2BF%2BmfA7SCIHGcyjixSUWaNUdgD8fG8GFXWJosDzRIGJL6mlzn5psITJ5dRJaL6L0v00PFmGCQNXN8k732oqLM1ObdHJdIgu99p4kZaxM5D3lxrooEXd1m8az%2B1LbM%2BrNzLTwIMDhf6P%2Ft7JrXQWpl%2Fyc37Gn0fBbrM4T5wI&X-Amz-Signature=5f6c3bf6996a0afe78e46f534f46524835ca6e7d33b5dcaa96ffa922a00101d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKO4DPF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T171003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcREJI4EzCFBOHYzUBc3QNkcA776O2lc46z2DsU3iQ8wIgV5ilkrV%2BFoNYzf8o5fCZvgxZNq6sLPaUjxakNM%2FJYvAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBw%2FlfVGmdEZuFJA3ircA8GAzg7sCBzpESs%2Bg9sjca4qc25IJXBBXEa5skYYE955db7vYJal1aLqybHb12Mkfw1ISTKnazktJikCA1296whtVNWgw%2FOfqz%2F%2FpQWOQw67bSAypvRSsxqympPbkopZv43aCqRLBpX5%2Fig%2Bbb1rKHDlo2w6t2U%2ByLFsQU5ZTe0JxHTMVFXVNBrPCJ%2BVtjxmjbJQ6fCYtWAKHeNHAvsvtbLfZ6aXq7ZVyVPARk25hC20FjykzP7LgOL1NKfjT3WZYvW0rvKv8bLojpHPakUh5A8E6q%2BpMSALOomM5SXkNEfn8xsJ1HoYtjG9Ph%2FNRbJcIvzMeBXrs3tTKUL%2BpbaQ%2FsMu1Q%2BVfb2sxru8bsZZV8sEewvSlYCPGO35HN1XfQRXV2CjmNDCvrcqpYBaKtIthZLcySHo0ExJ4CywUgpKzwX4Qq6lt3AasrBN2lnd5holbN2wyzSqiQLxr9YjwzjejO%2FTNJW%2B3R%2BmdaNktdotmListzFuqJpEe45GKhIqdcNYMtATHyLfvBOmd%2Bt%2B%2FjmPfAnndDrcO1c9GqdA4puXrAdnPmz0xE4m5X3a28HNVkRPqXAVrCtYGP1QwiRQojwogH%2Fu6OeBOH4aKPYxhIFEhqd8qSPw%2FM7FdxfGyykdMIm1xsIGOqUBtWEr%2BGxwrrHzOFmtqt8U5FhonxI%2F3aO41KztcbP6xiintywbaCNrA%2BF%2BmfA7SCIHGcyjixSUWaNUdgD8fG8GFXWJosDzRIGJL6mlzn5psITJ5dRJaL6L0v00PFmGCQNXN8k732oqLM1ObdHJdIgu99p4kZaxM5D3lxrooEXd1m8az%2B1LbM%2BrNzLTwIMDhf6P%2Ft7JrXQWpl%2Fyc37Gn0fBbrM4T5wI&X-Amz-Signature=631e9cda5902f2b95293d8a4e81b6964c54dd0b33d64f14c43d2369e851274d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
