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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGQVJQE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvOtglAOay5Wi02S4%2BFSN5JCkNTABWalI3KEmZbfCQEAiBu0Wbc6Qs%2FpKdqRV7fzQy4foaTNeD2aMKTUJ5utQgv%2FSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMWsNIvBgTb86%2BjQsPKtwDHR3yNHa4%2FRLGMh8eULMpe5DOPetevSRo9yqa8Hxqvqb8ch9RBJduhCRoWHuDEGKioewvyD%2FS976zdBPTOwppY9uG9mn9Kl4jPCxp%2B4WjWzbOmZhrIpaiemmmVFQDVsjzEaQjY0%2BMEd85NlSMkFHQCitCoKZUUd%2Fko51h5Ho0UTSU4gWQ4wzogc%2BdOAlIYAy3n%2BG4Q6Wyu7CVq%2FiSZqeKwkg60fB4QXwP864WMmPl3tmAYFJzHtwW4RFBn7AWCrCtVX8Xy8b4HR5PV1sQTlIOWcKlEDXDJYgIBCEs9JE9K0XLWFdrn%2BnnaqprzdT%2BVzLg749DSSxZirqjE8ErZii0TugWrysH5%2FeBgLVhUKvoJ58bN8b1uCmp86chG3e97acpK6LsbITxY%2FzKdxEOYJS3FMIACXjQDJlod82fySAUd6Di4D0nUvwS9yUym6NhqyYDe1XsEc2fBJAPB8tQoOMCM%2FeT7vHXTSK%2FDnljjryPzoZb3mesFDjKPBlABI4UoCMtyJ2Yc%2F7moX20ZNxEXsbGvrn9ihEc4%2Bb74vqrRUJDpv4LEgwCoYc%2BpAUKYwVTTop3%2FbzikAOmykffzQImkqQVPBXc7Mqr8QAtL1Hz5TLl6O9Iv0bqWUsscghkHgkw36iKvwY6pgEz5SR6rzvS0osTMTEV%2FUbrSYfTiU6nB8zQk4SLHBsnPmeBPzBvvURwVBJh6OfP30L%2FLUeJBM8YLC2TmWdtYfaicZx53GEVA0HozZeIo5tXIT40FBBwUMHimyh0tZMtoim9AJOwMYuLBNM4g1PSxtveoDnPrlIPIgJWHy0Yde6sQ%2FCetDmgLwtskb1h5DvTr2yPxwUipnKcRuFJwnC5x6n9grhu95y9&X-Amz-Signature=8e707771877cd5bad5bac76823cafe8a294ee933a3d6881726a88079a00f6c55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGQVJQE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvOtglAOay5Wi02S4%2BFSN5JCkNTABWalI3KEmZbfCQEAiBu0Wbc6Qs%2FpKdqRV7fzQy4foaTNeD2aMKTUJ5utQgv%2FSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMWsNIvBgTb86%2BjQsPKtwDHR3yNHa4%2FRLGMh8eULMpe5DOPetevSRo9yqa8Hxqvqb8ch9RBJduhCRoWHuDEGKioewvyD%2FS976zdBPTOwppY9uG9mn9Kl4jPCxp%2B4WjWzbOmZhrIpaiemmmVFQDVsjzEaQjY0%2BMEd85NlSMkFHQCitCoKZUUd%2Fko51h5Ho0UTSU4gWQ4wzogc%2BdOAlIYAy3n%2BG4Q6Wyu7CVq%2FiSZqeKwkg60fB4QXwP864WMmPl3tmAYFJzHtwW4RFBn7AWCrCtVX8Xy8b4HR5PV1sQTlIOWcKlEDXDJYgIBCEs9JE9K0XLWFdrn%2BnnaqprzdT%2BVzLg749DSSxZirqjE8ErZii0TugWrysH5%2FeBgLVhUKvoJ58bN8b1uCmp86chG3e97acpK6LsbITxY%2FzKdxEOYJS3FMIACXjQDJlod82fySAUd6Di4D0nUvwS9yUym6NhqyYDe1XsEc2fBJAPB8tQoOMCM%2FeT7vHXTSK%2FDnljjryPzoZb3mesFDjKPBlABI4UoCMtyJ2Yc%2F7moX20ZNxEXsbGvrn9ihEc4%2Bb74vqrRUJDpv4LEgwCoYc%2BpAUKYwVTTop3%2FbzikAOmykffzQImkqQVPBXc7Mqr8QAtL1Hz5TLl6O9Iv0bqWUsscghkHgkw36iKvwY6pgEz5SR6rzvS0osTMTEV%2FUbrSYfTiU6nB8zQk4SLHBsnPmeBPzBvvURwVBJh6OfP30L%2FLUeJBM8YLC2TmWdtYfaicZx53GEVA0HozZeIo5tXIT40FBBwUMHimyh0tZMtoim9AJOwMYuLBNM4g1PSxtveoDnPrlIPIgJWHy0Yde6sQ%2FCetDmgLwtskb1h5DvTr2yPxwUipnKcRuFJwnC5x6n9grhu95y9&X-Amz-Signature=053966d5d286eab05d86b1ee6748604155c5dab15eaa05066fef795433fde636&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGQVJQE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvOtglAOay5Wi02S4%2BFSN5JCkNTABWalI3KEmZbfCQEAiBu0Wbc6Qs%2FpKdqRV7fzQy4foaTNeD2aMKTUJ5utQgv%2FSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMWsNIvBgTb86%2BjQsPKtwDHR3yNHa4%2FRLGMh8eULMpe5DOPetevSRo9yqa8Hxqvqb8ch9RBJduhCRoWHuDEGKioewvyD%2FS976zdBPTOwppY9uG9mn9Kl4jPCxp%2B4WjWzbOmZhrIpaiemmmVFQDVsjzEaQjY0%2BMEd85NlSMkFHQCitCoKZUUd%2Fko51h5Ho0UTSU4gWQ4wzogc%2BdOAlIYAy3n%2BG4Q6Wyu7CVq%2FiSZqeKwkg60fB4QXwP864WMmPl3tmAYFJzHtwW4RFBn7AWCrCtVX8Xy8b4HR5PV1sQTlIOWcKlEDXDJYgIBCEs9JE9K0XLWFdrn%2BnnaqprzdT%2BVzLg749DSSxZirqjE8ErZii0TugWrysH5%2FeBgLVhUKvoJ58bN8b1uCmp86chG3e97acpK6LsbITxY%2FzKdxEOYJS3FMIACXjQDJlod82fySAUd6Di4D0nUvwS9yUym6NhqyYDe1XsEc2fBJAPB8tQoOMCM%2FeT7vHXTSK%2FDnljjryPzoZb3mesFDjKPBlABI4UoCMtyJ2Yc%2F7moX20ZNxEXsbGvrn9ihEc4%2Bb74vqrRUJDpv4LEgwCoYc%2BpAUKYwVTTop3%2FbzikAOmykffzQImkqQVPBXc7Mqr8QAtL1Hz5TLl6O9Iv0bqWUsscghkHgkw36iKvwY6pgEz5SR6rzvS0osTMTEV%2FUbrSYfTiU6nB8zQk4SLHBsnPmeBPzBvvURwVBJh6OfP30L%2FLUeJBM8YLC2TmWdtYfaicZx53GEVA0HozZeIo5tXIT40FBBwUMHimyh0tZMtoim9AJOwMYuLBNM4g1PSxtveoDnPrlIPIgJWHy0Yde6sQ%2FCetDmgLwtskb1h5DvTr2yPxwUipnKcRuFJwnC5x6n9grhu95y9&X-Amz-Signature=638c58a102387f5674bfb093e955c9989f4a49a93dfa9642b1359fd485289308&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGQVJQE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvOtglAOay5Wi02S4%2BFSN5JCkNTABWalI3KEmZbfCQEAiBu0Wbc6Qs%2FpKdqRV7fzQy4foaTNeD2aMKTUJ5utQgv%2FSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMWsNIvBgTb86%2BjQsPKtwDHR3yNHa4%2FRLGMh8eULMpe5DOPetevSRo9yqa8Hxqvqb8ch9RBJduhCRoWHuDEGKioewvyD%2FS976zdBPTOwppY9uG9mn9Kl4jPCxp%2B4WjWzbOmZhrIpaiemmmVFQDVsjzEaQjY0%2BMEd85NlSMkFHQCitCoKZUUd%2Fko51h5Ho0UTSU4gWQ4wzogc%2BdOAlIYAy3n%2BG4Q6Wyu7CVq%2FiSZqeKwkg60fB4QXwP864WMmPl3tmAYFJzHtwW4RFBn7AWCrCtVX8Xy8b4HR5PV1sQTlIOWcKlEDXDJYgIBCEs9JE9K0XLWFdrn%2BnnaqprzdT%2BVzLg749DSSxZirqjE8ErZii0TugWrysH5%2FeBgLVhUKvoJ58bN8b1uCmp86chG3e97acpK6LsbITxY%2FzKdxEOYJS3FMIACXjQDJlod82fySAUd6Di4D0nUvwS9yUym6NhqyYDe1XsEc2fBJAPB8tQoOMCM%2FeT7vHXTSK%2FDnljjryPzoZb3mesFDjKPBlABI4UoCMtyJ2Yc%2F7moX20ZNxEXsbGvrn9ihEc4%2Bb74vqrRUJDpv4LEgwCoYc%2BpAUKYwVTTop3%2FbzikAOmykffzQImkqQVPBXc7Mqr8QAtL1Hz5TLl6O9Iv0bqWUsscghkHgkw36iKvwY6pgEz5SR6rzvS0osTMTEV%2FUbrSYfTiU6nB8zQk4SLHBsnPmeBPzBvvURwVBJh6OfP30L%2FLUeJBM8YLC2TmWdtYfaicZx53GEVA0HozZeIo5tXIT40FBBwUMHimyh0tZMtoim9AJOwMYuLBNM4g1PSxtveoDnPrlIPIgJWHy0Yde6sQ%2FCetDmgLwtskb1h5DvTr2yPxwUipnKcRuFJwnC5x6n9grhu95y9&X-Amz-Signature=0b2bc58c3eccc6067eb0e05e14b7c0562cd562413953984d6c2e32bf47047819&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGQVJQE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvOtglAOay5Wi02S4%2BFSN5JCkNTABWalI3KEmZbfCQEAiBu0Wbc6Qs%2FpKdqRV7fzQy4foaTNeD2aMKTUJ5utQgv%2FSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMWsNIvBgTb86%2BjQsPKtwDHR3yNHa4%2FRLGMh8eULMpe5DOPetevSRo9yqa8Hxqvqb8ch9RBJduhCRoWHuDEGKioewvyD%2FS976zdBPTOwppY9uG9mn9Kl4jPCxp%2B4WjWzbOmZhrIpaiemmmVFQDVsjzEaQjY0%2BMEd85NlSMkFHQCitCoKZUUd%2Fko51h5Ho0UTSU4gWQ4wzogc%2BdOAlIYAy3n%2BG4Q6Wyu7CVq%2FiSZqeKwkg60fB4QXwP864WMmPl3tmAYFJzHtwW4RFBn7AWCrCtVX8Xy8b4HR5PV1sQTlIOWcKlEDXDJYgIBCEs9JE9K0XLWFdrn%2BnnaqprzdT%2BVzLg749DSSxZirqjE8ErZii0TugWrysH5%2FeBgLVhUKvoJ58bN8b1uCmp86chG3e97acpK6LsbITxY%2FzKdxEOYJS3FMIACXjQDJlod82fySAUd6Di4D0nUvwS9yUym6NhqyYDe1XsEc2fBJAPB8tQoOMCM%2FeT7vHXTSK%2FDnljjryPzoZb3mesFDjKPBlABI4UoCMtyJ2Yc%2F7moX20ZNxEXsbGvrn9ihEc4%2Bb74vqrRUJDpv4LEgwCoYc%2BpAUKYwVTTop3%2FbzikAOmykffzQImkqQVPBXc7Mqr8QAtL1Hz5TLl6O9Iv0bqWUsscghkHgkw36iKvwY6pgEz5SR6rzvS0osTMTEV%2FUbrSYfTiU6nB8zQk4SLHBsnPmeBPzBvvURwVBJh6OfP30L%2FLUeJBM8YLC2TmWdtYfaicZx53GEVA0HozZeIo5tXIT40FBBwUMHimyh0tZMtoim9AJOwMYuLBNM4g1PSxtveoDnPrlIPIgJWHy0Yde6sQ%2FCetDmgLwtskb1h5DvTr2yPxwUipnKcRuFJwnC5x6n9grhu95y9&X-Amz-Signature=eaa10da19692b08995ff0765af4cc7ea32934caa082c1f92a472492c36e59268&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGQVJQE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvOtglAOay5Wi02S4%2BFSN5JCkNTABWalI3KEmZbfCQEAiBu0Wbc6Qs%2FpKdqRV7fzQy4foaTNeD2aMKTUJ5utQgv%2FSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMWsNIvBgTb86%2BjQsPKtwDHR3yNHa4%2FRLGMh8eULMpe5DOPetevSRo9yqa8Hxqvqb8ch9RBJduhCRoWHuDEGKioewvyD%2FS976zdBPTOwppY9uG9mn9Kl4jPCxp%2B4WjWzbOmZhrIpaiemmmVFQDVsjzEaQjY0%2BMEd85NlSMkFHQCitCoKZUUd%2Fko51h5Ho0UTSU4gWQ4wzogc%2BdOAlIYAy3n%2BG4Q6Wyu7CVq%2FiSZqeKwkg60fB4QXwP864WMmPl3tmAYFJzHtwW4RFBn7AWCrCtVX8Xy8b4HR5PV1sQTlIOWcKlEDXDJYgIBCEs9JE9K0XLWFdrn%2BnnaqprzdT%2BVzLg749DSSxZirqjE8ErZii0TugWrysH5%2FeBgLVhUKvoJ58bN8b1uCmp86chG3e97acpK6LsbITxY%2FzKdxEOYJS3FMIACXjQDJlod82fySAUd6Di4D0nUvwS9yUym6NhqyYDe1XsEc2fBJAPB8tQoOMCM%2FeT7vHXTSK%2FDnljjryPzoZb3mesFDjKPBlABI4UoCMtyJ2Yc%2F7moX20ZNxEXsbGvrn9ihEc4%2Bb74vqrRUJDpv4LEgwCoYc%2BpAUKYwVTTop3%2FbzikAOmykffzQImkqQVPBXc7Mqr8QAtL1Hz5TLl6O9Iv0bqWUsscghkHgkw36iKvwY6pgEz5SR6rzvS0osTMTEV%2FUbrSYfTiU6nB8zQk4SLHBsnPmeBPzBvvURwVBJh6OfP30L%2FLUeJBM8YLC2TmWdtYfaicZx53GEVA0HozZeIo5tXIT40FBBwUMHimyh0tZMtoim9AJOwMYuLBNM4g1PSxtveoDnPrlIPIgJWHy0Yde6sQ%2FCetDmgLwtskb1h5DvTr2yPxwUipnKcRuFJwnC5x6n9grhu95y9&X-Amz-Signature=3dae5ad09002def9c759abb31e351642fbed6fd3e119a6659334e584042a095b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGQVJQE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvOtglAOay5Wi02S4%2BFSN5JCkNTABWalI3KEmZbfCQEAiBu0Wbc6Qs%2FpKdqRV7fzQy4foaTNeD2aMKTUJ5utQgv%2FSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMWsNIvBgTb86%2BjQsPKtwDHR3yNHa4%2FRLGMh8eULMpe5DOPetevSRo9yqa8Hxqvqb8ch9RBJduhCRoWHuDEGKioewvyD%2FS976zdBPTOwppY9uG9mn9Kl4jPCxp%2B4WjWzbOmZhrIpaiemmmVFQDVsjzEaQjY0%2BMEd85NlSMkFHQCitCoKZUUd%2Fko51h5Ho0UTSU4gWQ4wzogc%2BdOAlIYAy3n%2BG4Q6Wyu7CVq%2FiSZqeKwkg60fB4QXwP864WMmPl3tmAYFJzHtwW4RFBn7AWCrCtVX8Xy8b4HR5PV1sQTlIOWcKlEDXDJYgIBCEs9JE9K0XLWFdrn%2BnnaqprzdT%2BVzLg749DSSxZirqjE8ErZii0TugWrysH5%2FeBgLVhUKvoJ58bN8b1uCmp86chG3e97acpK6LsbITxY%2FzKdxEOYJS3FMIACXjQDJlod82fySAUd6Di4D0nUvwS9yUym6NhqyYDe1XsEc2fBJAPB8tQoOMCM%2FeT7vHXTSK%2FDnljjryPzoZb3mesFDjKPBlABI4UoCMtyJ2Yc%2F7moX20ZNxEXsbGvrn9ihEc4%2Bb74vqrRUJDpv4LEgwCoYc%2BpAUKYwVTTop3%2FbzikAOmykffzQImkqQVPBXc7Mqr8QAtL1Hz5TLl6O9Iv0bqWUsscghkHgkw36iKvwY6pgEz5SR6rzvS0osTMTEV%2FUbrSYfTiU6nB8zQk4SLHBsnPmeBPzBvvURwVBJh6OfP30L%2FLUeJBM8YLC2TmWdtYfaicZx53GEVA0HozZeIo5tXIT40FBBwUMHimyh0tZMtoim9AJOwMYuLBNM4g1PSxtveoDnPrlIPIgJWHy0Yde6sQ%2FCetDmgLwtskb1h5DvTr2yPxwUipnKcRuFJwnC5x6n9grhu95y9&X-Amz-Signature=e8d807530c1a6de937943fefcd6e49d4a16dc586d07b3219dd992533158ece87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGQVJQE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T121452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvOtglAOay5Wi02S4%2BFSN5JCkNTABWalI3KEmZbfCQEAiBu0Wbc6Qs%2FpKdqRV7fzQy4foaTNeD2aMKTUJ5utQgv%2FSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMWsNIvBgTb86%2BjQsPKtwDHR3yNHa4%2FRLGMh8eULMpe5DOPetevSRo9yqa8Hxqvqb8ch9RBJduhCRoWHuDEGKioewvyD%2FS976zdBPTOwppY9uG9mn9Kl4jPCxp%2B4WjWzbOmZhrIpaiemmmVFQDVsjzEaQjY0%2BMEd85NlSMkFHQCitCoKZUUd%2Fko51h5Ho0UTSU4gWQ4wzogc%2BdOAlIYAy3n%2BG4Q6Wyu7CVq%2FiSZqeKwkg60fB4QXwP864WMmPl3tmAYFJzHtwW4RFBn7AWCrCtVX8Xy8b4HR5PV1sQTlIOWcKlEDXDJYgIBCEs9JE9K0XLWFdrn%2BnnaqprzdT%2BVzLg749DSSxZirqjE8ErZii0TugWrysH5%2FeBgLVhUKvoJ58bN8b1uCmp86chG3e97acpK6LsbITxY%2FzKdxEOYJS3FMIACXjQDJlod82fySAUd6Di4D0nUvwS9yUym6NhqyYDe1XsEc2fBJAPB8tQoOMCM%2FeT7vHXTSK%2FDnljjryPzoZb3mesFDjKPBlABI4UoCMtyJ2Yc%2F7moX20ZNxEXsbGvrn9ihEc4%2Bb74vqrRUJDpv4LEgwCoYc%2BpAUKYwVTTop3%2FbzikAOmykffzQImkqQVPBXc7Mqr8QAtL1Hz5TLl6O9Iv0bqWUsscghkHgkw36iKvwY6pgEz5SR6rzvS0osTMTEV%2FUbrSYfTiU6nB8zQk4SLHBsnPmeBPzBvvURwVBJh6OfP30L%2FLUeJBM8YLC2TmWdtYfaicZx53GEVA0HozZeIo5tXIT40FBBwUMHimyh0tZMtoim9AJOwMYuLBNM4g1PSxtveoDnPrlIPIgJWHy0Yde6sQ%2FCetDmgLwtskb1h5DvTr2yPxwUipnKcRuFJwnC5x6n9grhu95y9&X-Amz-Signature=467b26690df4136b958f31775a786884ad003e52f8f647229cdbda2cfbad0088&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
