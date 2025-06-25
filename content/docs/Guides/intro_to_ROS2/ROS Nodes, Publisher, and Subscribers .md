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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMZZFPJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDK98YAdjMJwas%2FgaBoOJmcKvAzIyMYleetML%2FHfOVdzQIhANju21UeYLzG%2B5NgSVxQ9enPdOmHguZYfAF3PjsmZJGCKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNSiuBc241K%2BIpZPkq3AOZeOAwNkCu21DmNsQ%2BUt6ZoI2Zqj8rOANesFUZlx5gSELY0neC%2BhY1KpajloQV%2Bb197uLbZdnfuMfB9zr00gYMsw8gtlz8%2FCCllJ%2B7WxQ5AfHTr6dMTBs2wBAEE9PkV%2BJUdAIHMVw7KvWrgn7%2Flp4vd81YHQebh4clIvZARjisRDyWS8J7IR79%2BmaSFK2h1vzNDew%2FaIfMFR0X27to%2F5fC9HP2ARbmSKEAqMH3jhuDhQbEoij4ZiEsypAHZqDFSsCQcvYsSCsjWv3YRpcXFJhH7RtSewZ4BGFMexGH3A0ZkktSoHdn5IjhMt8s8V2R4TZgXoLBC7%2F%2FMOGkAnKoJEyetXCqzVBvl7YiaZfpmVs6Ntw2WRxaq30xg3wmBLqEsr3hOqa8QKagthWGykiddT3P%2BY%2Fjc8WYxY0LyO1p4GXRC81DJWcD0X%2B%2BUlcoflzJnLeE72p3D%2BkPkCRJKLPmNbQ7J0hb%2BrFIoqOFTpZbbTCYrqbBq%2Bv0OSIeHI7%2FfJ%2FEly9ddNmTJHS5b9whlSk09NsFtaULPBpC1v4a5qBiHsnWsBVbXprELtrRatfj4UrkHlUwihJRv1OH7WU5ZD357S2iVeKrZgI%2Bkw9RMZMGtXkTvhMBTzw0Il4%2FKc0oGDCgj%2B%2FCBjqkAa8eoOq%2BmRRYLR%2FjDDpVUnNmya5auMafou1OnKWa6h0HWsmZbPIJMZlS%2F2bBWV57GS8Wfv1cRJaUw1uLJph1yVTU8kJnidhJUEe44bxn6YNapGKQpmy%2BJy%2FBsgS1QiuJZhoLD17j1vu9%2FFYaRWsnoUACYP9llHHtqSjy0MwPCTopvO08hTFAtpKYY1VjqmLKcaL4NudcIawZdvK%2BCD0oq2M1NPYN&X-Amz-Signature=4ee32fac7fbf3e1f52fd5127d0a89dfd6eefa029dd112bb96be0f28027fd6c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMZZFPJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDK98YAdjMJwas%2FgaBoOJmcKvAzIyMYleetML%2FHfOVdzQIhANju21UeYLzG%2B5NgSVxQ9enPdOmHguZYfAF3PjsmZJGCKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNSiuBc241K%2BIpZPkq3AOZeOAwNkCu21DmNsQ%2BUt6ZoI2Zqj8rOANesFUZlx5gSELY0neC%2BhY1KpajloQV%2Bb197uLbZdnfuMfB9zr00gYMsw8gtlz8%2FCCllJ%2B7WxQ5AfHTr6dMTBs2wBAEE9PkV%2BJUdAIHMVw7KvWrgn7%2Flp4vd81YHQebh4clIvZARjisRDyWS8J7IR79%2BmaSFK2h1vzNDew%2FaIfMFR0X27to%2F5fC9HP2ARbmSKEAqMH3jhuDhQbEoij4ZiEsypAHZqDFSsCQcvYsSCsjWv3YRpcXFJhH7RtSewZ4BGFMexGH3A0ZkktSoHdn5IjhMt8s8V2R4TZgXoLBC7%2F%2FMOGkAnKoJEyetXCqzVBvl7YiaZfpmVs6Ntw2WRxaq30xg3wmBLqEsr3hOqa8QKagthWGykiddT3P%2BY%2Fjc8WYxY0LyO1p4GXRC81DJWcD0X%2B%2BUlcoflzJnLeE72p3D%2BkPkCRJKLPmNbQ7J0hb%2BrFIoqOFTpZbbTCYrqbBq%2Bv0OSIeHI7%2FfJ%2FEly9ddNmTJHS5b9whlSk09NsFtaULPBpC1v4a5qBiHsnWsBVbXprELtrRatfj4UrkHlUwihJRv1OH7WU5ZD357S2iVeKrZgI%2Bkw9RMZMGtXkTvhMBTzw0Il4%2FKc0oGDCgj%2B%2FCBjqkAa8eoOq%2BmRRYLR%2FjDDpVUnNmya5auMafou1OnKWa6h0HWsmZbPIJMZlS%2F2bBWV57GS8Wfv1cRJaUw1uLJph1yVTU8kJnidhJUEe44bxn6YNapGKQpmy%2BJy%2FBsgS1QiuJZhoLD17j1vu9%2FFYaRWsnoUACYP9llHHtqSjy0MwPCTopvO08hTFAtpKYY1VjqmLKcaL4NudcIawZdvK%2BCD0oq2M1NPYN&X-Amz-Signature=b1861468b7942115841b8cc2f98594d8c4ab6ffb0e28bbc69a790ac3b2d3094b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMZZFPJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDK98YAdjMJwas%2FgaBoOJmcKvAzIyMYleetML%2FHfOVdzQIhANju21UeYLzG%2B5NgSVxQ9enPdOmHguZYfAF3PjsmZJGCKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNSiuBc241K%2BIpZPkq3AOZeOAwNkCu21DmNsQ%2BUt6ZoI2Zqj8rOANesFUZlx5gSELY0neC%2BhY1KpajloQV%2Bb197uLbZdnfuMfB9zr00gYMsw8gtlz8%2FCCllJ%2B7WxQ5AfHTr6dMTBs2wBAEE9PkV%2BJUdAIHMVw7KvWrgn7%2Flp4vd81YHQebh4clIvZARjisRDyWS8J7IR79%2BmaSFK2h1vzNDew%2FaIfMFR0X27to%2F5fC9HP2ARbmSKEAqMH3jhuDhQbEoij4ZiEsypAHZqDFSsCQcvYsSCsjWv3YRpcXFJhH7RtSewZ4BGFMexGH3A0ZkktSoHdn5IjhMt8s8V2R4TZgXoLBC7%2F%2FMOGkAnKoJEyetXCqzVBvl7YiaZfpmVs6Ntw2WRxaq30xg3wmBLqEsr3hOqa8QKagthWGykiddT3P%2BY%2Fjc8WYxY0LyO1p4GXRC81DJWcD0X%2B%2BUlcoflzJnLeE72p3D%2BkPkCRJKLPmNbQ7J0hb%2BrFIoqOFTpZbbTCYrqbBq%2Bv0OSIeHI7%2FfJ%2FEly9ddNmTJHS5b9whlSk09NsFtaULPBpC1v4a5qBiHsnWsBVbXprELtrRatfj4UrkHlUwihJRv1OH7WU5ZD357S2iVeKrZgI%2Bkw9RMZMGtXkTvhMBTzw0Il4%2FKc0oGDCgj%2B%2FCBjqkAa8eoOq%2BmRRYLR%2FjDDpVUnNmya5auMafou1OnKWa6h0HWsmZbPIJMZlS%2F2bBWV57GS8Wfv1cRJaUw1uLJph1yVTU8kJnidhJUEe44bxn6YNapGKQpmy%2BJy%2FBsgS1QiuJZhoLD17j1vu9%2FFYaRWsnoUACYP9llHHtqSjy0MwPCTopvO08hTFAtpKYY1VjqmLKcaL4NudcIawZdvK%2BCD0oq2M1NPYN&X-Amz-Signature=941742c288cb7502864b28474a92a84ef50ae7ff0899d9f24f4d2904a8ac2045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMZZFPJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDK98YAdjMJwas%2FgaBoOJmcKvAzIyMYleetML%2FHfOVdzQIhANju21UeYLzG%2B5NgSVxQ9enPdOmHguZYfAF3PjsmZJGCKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNSiuBc241K%2BIpZPkq3AOZeOAwNkCu21DmNsQ%2BUt6ZoI2Zqj8rOANesFUZlx5gSELY0neC%2BhY1KpajloQV%2Bb197uLbZdnfuMfB9zr00gYMsw8gtlz8%2FCCllJ%2B7WxQ5AfHTr6dMTBs2wBAEE9PkV%2BJUdAIHMVw7KvWrgn7%2Flp4vd81YHQebh4clIvZARjisRDyWS8J7IR79%2BmaSFK2h1vzNDew%2FaIfMFR0X27to%2F5fC9HP2ARbmSKEAqMH3jhuDhQbEoij4ZiEsypAHZqDFSsCQcvYsSCsjWv3YRpcXFJhH7RtSewZ4BGFMexGH3A0ZkktSoHdn5IjhMt8s8V2R4TZgXoLBC7%2F%2FMOGkAnKoJEyetXCqzVBvl7YiaZfpmVs6Ntw2WRxaq30xg3wmBLqEsr3hOqa8QKagthWGykiddT3P%2BY%2Fjc8WYxY0LyO1p4GXRC81DJWcD0X%2B%2BUlcoflzJnLeE72p3D%2BkPkCRJKLPmNbQ7J0hb%2BrFIoqOFTpZbbTCYrqbBq%2Bv0OSIeHI7%2FfJ%2FEly9ddNmTJHS5b9whlSk09NsFtaULPBpC1v4a5qBiHsnWsBVbXprELtrRatfj4UrkHlUwihJRv1OH7WU5ZD357S2iVeKrZgI%2Bkw9RMZMGtXkTvhMBTzw0Il4%2FKc0oGDCgj%2B%2FCBjqkAa8eoOq%2BmRRYLR%2FjDDpVUnNmya5auMafou1OnKWa6h0HWsmZbPIJMZlS%2F2bBWV57GS8Wfv1cRJaUw1uLJph1yVTU8kJnidhJUEe44bxn6YNapGKQpmy%2BJy%2FBsgS1QiuJZhoLD17j1vu9%2FFYaRWsnoUACYP9llHHtqSjy0MwPCTopvO08hTFAtpKYY1VjqmLKcaL4NudcIawZdvK%2BCD0oq2M1NPYN&X-Amz-Signature=42889468377ee105f7cab05df5f96bd6d1c608b979b503d8542eefeaed3328a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMZZFPJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDK98YAdjMJwas%2FgaBoOJmcKvAzIyMYleetML%2FHfOVdzQIhANju21UeYLzG%2B5NgSVxQ9enPdOmHguZYfAF3PjsmZJGCKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNSiuBc241K%2BIpZPkq3AOZeOAwNkCu21DmNsQ%2BUt6ZoI2Zqj8rOANesFUZlx5gSELY0neC%2BhY1KpajloQV%2Bb197uLbZdnfuMfB9zr00gYMsw8gtlz8%2FCCllJ%2B7WxQ5AfHTr6dMTBs2wBAEE9PkV%2BJUdAIHMVw7KvWrgn7%2Flp4vd81YHQebh4clIvZARjisRDyWS8J7IR79%2BmaSFK2h1vzNDew%2FaIfMFR0X27to%2F5fC9HP2ARbmSKEAqMH3jhuDhQbEoij4ZiEsypAHZqDFSsCQcvYsSCsjWv3YRpcXFJhH7RtSewZ4BGFMexGH3A0ZkktSoHdn5IjhMt8s8V2R4TZgXoLBC7%2F%2FMOGkAnKoJEyetXCqzVBvl7YiaZfpmVs6Ntw2WRxaq30xg3wmBLqEsr3hOqa8QKagthWGykiddT3P%2BY%2Fjc8WYxY0LyO1p4GXRC81DJWcD0X%2B%2BUlcoflzJnLeE72p3D%2BkPkCRJKLPmNbQ7J0hb%2BrFIoqOFTpZbbTCYrqbBq%2Bv0OSIeHI7%2FfJ%2FEly9ddNmTJHS5b9whlSk09NsFtaULPBpC1v4a5qBiHsnWsBVbXprELtrRatfj4UrkHlUwihJRv1OH7WU5ZD357S2iVeKrZgI%2Bkw9RMZMGtXkTvhMBTzw0Il4%2FKc0oGDCgj%2B%2FCBjqkAa8eoOq%2BmRRYLR%2FjDDpVUnNmya5auMafou1OnKWa6h0HWsmZbPIJMZlS%2F2bBWV57GS8Wfv1cRJaUw1uLJph1yVTU8kJnidhJUEe44bxn6YNapGKQpmy%2BJy%2FBsgS1QiuJZhoLD17j1vu9%2FFYaRWsnoUACYP9llHHtqSjy0MwPCTopvO08hTFAtpKYY1VjqmLKcaL4NudcIawZdvK%2BCD0oq2M1NPYN&X-Amz-Signature=aa68264bae2d2eba9edccc7b25f1faea73a29562e436324498dc1510d0e177d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMZZFPJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDK98YAdjMJwas%2FgaBoOJmcKvAzIyMYleetML%2FHfOVdzQIhANju21UeYLzG%2B5NgSVxQ9enPdOmHguZYfAF3PjsmZJGCKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNSiuBc241K%2BIpZPkq3AOZeOAwNkCu21DmNsQ%2BUt6ZoI2Zqj8rOANesFUZlx5gSELY0neC%2BhY1KpajloQV%2Bb197uLbZdnfuMfB9zr00gYMsw8gtlz8%2FCCllJ%2B7WxQ5AfHTr6dMTBs2wBAEE9PkV%2BJUdAIHMVw7KvWrgn7%2Flp4vd81YHQebh4clIvZARjisRDyWS8J7IR79%2BmaSFK2h1vzNDew%2FaIfMFR0X27to%2F5fC9HP2ARbmSKEAqMH3jhuDhQbEoij4ZiEsypAHZqDFSsCQcvYsSCsjWv3YRpcXFJhH7RtSewZ4BGFMexGH3A0ZkktSoHdn5IjhMt8s8V2R4TZgXoLBC7%2F%2FMOGkAnKoJEyetXCqzVBvl7YiaZfpmVs6Ntw2WRxaq30xg3wmBLqEsr3hOqa8QKagthWGykiddT3P%2BY%2Fjc8WYxY0LyO1p4GXRC81DJWcD0X%2B%2BUlcoflzJnLeE72p3D%2BkPkCRJKLPmNbQ7J0hb%2BrFIoqOFTpZbbTCYrqbBq%2Bv0OSIeHI7%2FfJ%2FEly9ddNmTJHS5b9whlSk09NsFtaULPBpC1v4a5qBiHsnWsBVbXprELtrRatfj4UrkHlUwihJRv1OH7WU5ZD357S2iVeKrZgI%2Bkw9RMZMGtXkTvhMBTzw0Il4%2FKc0oGDCgj%2B%2FCBjqkAa8eoOq%2BmRRYLR%2FjDDpVUnNmya5auMafou1OnKWa6h0HWsmZbPIJMZlS%2F2bBWV57GS8Wfv1cRJaUw1uLJph1yVTU8kJnidhJUEe44bxn6YNapGKQpmy%2BJy%2FBsgS1QiuJZhoLD17j1vu9%2FFYaRWsnoUACYP9llHHtqSjy0MwPCTopvO08hTFAtpKYY1VjqmLKcaL4NudcIawZdvK%2BCD0oq2M1NPYN&X-Amz-Signature=7a182c63bf8141a604c674a5d1fc7017de7f3cc43b2e214bd6d0369c7693b1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMZZFPJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDK98YAdjMJwas%2FgaBoOJmcKvAzIyMYleetML%2FHfOVdzQIhANju21UeYLzG%2B5NgSVxQ9enPdOmHguZYfAF3PjsmZJGCKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNSiuBc241K%2BIpZPkq3AOZeOAwNkCu21DmNsQ%2BUt6ZoI2Zqj8rOANesFUZlx5gSELY0neC%2BhY1KpajloQV%2Bb197uLbZdnfuMfB9zr00gYMsw8gtlz8%2FCCllJ%2B7WxQ5AfHTr6dMTBs2wBAEE9PkV%2BJUdAIHMVw7KvWrgn7%2Flp4vd81YHQebh4clIvZARjisRDyWS8J7IR79%2BmaSFK2h1vzNDew%2FaIfMFR0X27to%2F5fC9HP2ARbmSKEAqMH3jhuDhQbEoij4ZiEsypAHZqDFSsCQcvYsSCsjWv3YRpcXFJhH7RtSewZ4BGFMexGH3A0ZkktSoHdn5IjhMt8s8V2R4TZgXoLBC7%2F%2FMOGkAnKoJEyetXCqzVBvl7YiaZfpmVs6Ntw2WRxaq30xg3wmBLqEsr3hOqa8QKagthWGykiddT3P%2BY%2Fjc8WYxY0LyO1p4GXRC81DJWcD0X%2B%2BUlcoflzJnLeE72p3D%2BkPkCRJKLPmNbQ7J0hb%2BrFIoqOFTpZbbTCYrqbBq%2Bv0OSIeHI7%2FfJ%2FEly9ddNmTJHS5b9whlSk09NsFtaULPBpC1v4a5qBiHsnWsBVbXprELtrRatfj4UrkHlUwihJRv1OH7WU5ZD357S2iVeKrZgI%2Bkw9RMZMGtXkTvhMBTzw0Il4%2FKc0oGDCgj%2B%2FCBjqkAa8eoOq%2BmRRYLR%2FjDDpVUnNmya5auMafou1OnKWa6h0HWsmZbPIJMZlS%2F2bBWV57GS8Wfv1cRJaUw1uLJph1yVTU8kJnidhJUEe44bxn6YNapGKQpmy%2BJy%2FBsgS1QiuJZhoLD17j1vu9%2FFYaRWsnoUACYP9llHHtqSjy0MwPCTopvO08hTFAtpKYY1VjqmLKcaL4NudcIawZdvK%2BCD0oq2M1NPYN&X-Amz-Signature=bd056e1268e129f185dca670168e8ae4c0416c391aa4e66bc138610bf5d98d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMZZFPJ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDK98YAdjMJwas%2FgaBoOJmcKvAzIyMYleetML%2FHfOVdzQIhANju21UeYLzG%2B5NgSVxQ9enPdOmHguZYfAF3PjsmZJGCKv8DCEMQABoMNjM3NDIzMTgzODA1IgzNSiuBc241K%2BIpZPkq3AOZeOAwNkCu21DmNsQ%2BUt6ZoI2Zqj8rOANesFUZlx5gSELY0neC%2BhY1KpajloQV%2Bb197uLbZdnfuMfB9zr00gYMsw8gtlz8%2FCCllJ%2B7WxQ5AfHTr6dMTBs2wBAEE9PkV%2BJUdAIHMVw7KvWrgn7%2Flp4vd81YHQebh4clIvZARjisRDyWS8J7IR79%2BmaSFK2h1vzNDew%2FaIfMFR0X27to%2F5fC9HP2ARbmSKEAqMH3jhuDhQbEoij4ZiEsypAHZqDFSsCQcvYsSCsjWv3YRpcXFJhH7RtSewZ4BGFMexGH3A0ZkktSoHdn5IjhMt8s8V2R4TZgXoLBC7%2F%2FMOGkAnKoJEyetXCqzVBvl7YiaZfpmVs6Ntw2WRxaq30xg3wmBLqEsr3hOqa8QKagthWGykiddT3P%2BY%2Fjc8WYxY0LyO1p4GXRC81DJWcD0X%2B%2BUlcoflzJnLeE72p3D%2BkPkCRJKLPmNbQ7J0hb%2BrFIoqOFTpZbbTCYrqbBq%2Bv0OSIeHI7%2FfJ%2FEly9ddNmTJHS5b9whlSk09NsFtaULPBpC1v4a5qBiHsnWsBVbXprELtrRatfj4UrkHlUwihJRv1OH7WU5ZD357S2iVeKrZgI%2Bkw9RMZMGtXkTvhMBTzw0Il4%2FKc0oGDCgj%2B%2FCBjqkAa8eoOq%2BmRRYLR%2FjDDpVUnNmya5auMafou1OnKWa6h0HWsmZbPIJMZlS%2F2bBWV57GS8Wfv1cRJaUw1uLJph1yVTU8kJnidhJUEe44bxn6YNapGKQpmy%2BJy%2FBsgS1QiuJZhoLD17j1vu9%2FFYaRWsnoUACYP9llHHtqSjy0MwPCTopvO08hTFAtpKYY1VjqmLKcaL4NudcIawZdvK%2BCD0oq2M1NPYN&X-Amz-Signature=7dad341787ba8355df932dc11fb5ef10ab8999503d5df0298762624e8476da56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
