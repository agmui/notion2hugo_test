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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BDUHX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH59Xs3sp7gGL%2BYsoL9vox3UuSCFwsBrmNeQJcVPkdIdAiA1Zbnyu8DQwE%2B9Mx5iKVZi3p2Ufw4Gi9EjHdBzIGREMiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HvEM6dHEc4mJNV0KtwDPP5VfvjlHjnLm9Lpr177y1s0769TDmN7LOZFYjL0rem62SP6mhDor3OV2bylbwOvm%2BKfqU%2BtNo5PfdbuOIY9mK%2Ba9CQTKAl%2BNyrXtllBkOQuAmx6OgTFA6Gsve1agavewIz6z16MVPITqccJm1oMpWS4QejnPAi0sTEhRh4gwGNUF%2FFqou077NHrKwy%2F8Yi%2FlYMw9dGV%2BNx3ofJ2%2B7CjEhssY73EvivxWIo%2FWCZsKNMqEzr4Sm%2B0cPVqDDtIKCpoV4qw115%2Fu7YzdXRDCi5ry8Wx%2BjUYDHRRP87jOrpHwzS3HWVgOP%2BlHp2r3%2BBPAbq04ILNl5hiWrdC%2FPM5laePXzdhslP6bOXAH0J4SCl4DURvobRDYeYLziIlrBTHlm7fS1lHW%2B%2Bn3RPr9rw7ColoykFCX93hqJotNPOv1y76HIusSYtoPr5%2BL0duGGQi3N9WoY7cUs7GBMSi%2Fy8cLb4e2m8gM%2B4oZQXEClu5JKhlwD0VHJtfvqHPNTEN0UFnLps6KRNrvhYPJkKP2F46utHyJP5Bhonjol%2BTxSJkVn3gXCH04qhbtyoBX9qimAvQoRV2zIWiwMAC5G2p5U6g%2BfFP530xGs7D1VWVDb2rWqGJhRWxumXzZ79Pmi5oZmUw7OmtxAY6pgHtK27fLOMZzX7DFzQZ52N3cThznZc%2Fd5yzvzWjeAm0t7YzLMdvH6QK7ipaprGYkNQz9GGCzMutob0lS3l1RvCot%2BOBS3FcOwgnWTPp7fhFAfMdfLXXoKOxEI2kCUIJfqm25%2F3%2BoLACkfKwQw3oR%2FICDK2CSV8fUpyALSxYXPJH%2BwU2%2BTeMvx5Nf%2FmArbaBQR6c%2FgpANXpMLtlWREvUMPbJXf0Hr76f&X-Amz-Signature=577a30e464d06df3a50b65f85c5336433eeaeff49790a394fabc51aa9fe5bc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BDUHX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH59Xs3sp7gGL%2BYsoL9vox3UuSCFwsBrmNeQJcVPkdIdAiA1Zbnyu8DQwE%2B9Mx5iKVZi3p2Ufw4Gi9EjHdBzIGREMiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HvEM6dHEc4mJNV0KtwDPP5VfvjlHjnLm9Lpr177y1s0769TDmN7LOZFYjL0rem62SP6mhDor3OV2bylbwOvm%2BKfqU%2BtNo5PfdbuOIY9mK%2Ba9CQTKAl%2BNyrXtllBkOQuAmx6OgTFA6Gsve1agavewIz6z16MVPITqccJm1oMpWS4QejnPAi0sTEhRh4gwGNUF%2FFqou077NHrKwy%2F8Yi%2FlYMw9dGV%2BNx3ofJ2%2B7CjEhssY73EvivxWIo%2FWCZsKNMqEzr4Sm%2B0cPVqDDtIKCpoV4qw115%2Fu7YzdXRDCi5ry8Wx%2BjUYDHRRP87jOrpHwzS3HWVgOP%2BlHp2r3%2BBPAbq04ILNl5hiWrdC%2FPM5laePXzdhslP6bOXAH0J4SCl4DURvobRDYeYLziIlrBTHlm7fS1lHW%2B%2Bn3RPr9rw7ColoykFCX93hqJotNPOv1y76HIusSYtoPr5%2BL0duGGQi3N9WoY7cUs7GBMSi%2Fy8cLb4e2m8gM%2B4oZQXEClu5JKhlwD0VHJtfvqHPNTEN0UFnLps6KRNrvhYPJkKP2F46utHyJP5Bhonjol%2BTxSJkVn3gXCH04qhbtyoBX9qimAvQoRV2zIWiwMAC5G2p5U6g%2BfFP530xGs7D1VWVDb2rWqGJhRWxumXzZ79Pmi5oZmUw7OmtxAY6pgHtK27fLOMZzX7DFzQZ52N3cThznZc%2Fd5yzvzWjeAm0t7YzLMdvH6QK7ipaprGYkNQz9GGCzMutob0lS3l1RvCot%2BOBS3FcOwgnWTPp7fhFAfMdfLXXoKOxEI2kCUIJfqm25%2F3%2BoLACkfKwQw3oR%2FICDK2CSV8fUpyALSxYXPJH%2BwU2%2BTeMvx5Nf%2FmArbaBQR6c%2FgpANXpMLtlWREvUMPbJXf0Hr76f&X-Amz-Signature=ce4844f0cd48aab36041e724209957b410a57632d80893c091f0c6c7c77732f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BDUHX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH59Xs3sp7gGL%2BYsoL9vox3UuSCFwsBrmNeQJcVPkdIdAiA1Zbnyu8DQwE%2B9Mx5iKVZi3p2Ufw4Gi9EjHdBzIGREMiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HvEM6dHEc4mJNV0KtwDPP5VfvjlHjnLm9Lpr177y1s0769TDmN7LOZFYjL0rem62SP6mhDor3OV2bylbwOvm%2BKfqU%2BtNo5PfdbuOIY9mK%2Ba9CQTKAl%2BNyrXtllBkOQuAmx6OgTFA6Gsve1agavewIz6z16MVPITqccJm1oMpWS4QejnPAi0sTEhRh4gwGNUF%2FFqou077NHrKwy%2F8Yi%2FlYMw9dGV%2BNx3ofJ2%2B7CjEhssY73EvivxWIo%2FWCZsKNMqEzr4Sm%2B0cPVqDDtIKCpoV4qw115%2Fu7YzdXRDCi5ry8Wx%2BjUYDHRRP87jOrpHwzS3HWVgOP%2BlHp2r3%2BBPAbq04ILNl5hiWrdC%2FPM5laePXzdhslP6bOXAH0J4SCl4DURvobRDYeYLziIlrBTHlm7fS1lHW%2B%2Bn3RPr9rw7ColoykFCX93hqJotNPOv1y76HIusSYtoPr5%2BL0duGGQi3N9WoY7cUs7GBMSi%2Fy8cLb4e2m8gM%2B4oZQXEClu5JKhlwD0VHJtfvqHPNTEN0UFnLps6KRNrvhYPJkKP2F46utHyJP5Bhonjol%2BTxSJkVn3gXCH04qhbtyoBX9qimAvQoRV2zIWiwMAC5G2p5U6g%2BfFP530xGs7D1VWVDb2rWqGJhRWxumXzZ79Pmi5oZmUw7OmtxAY6pgHtK27fLOMZzX7DFzQZ52N3cThznZc%2Fd5yzvzWjeAm0t7YzLMdvH6QK7ipaprGYkNQz9GGCzMutob0lS3l1RvCot%2BOBS3FcOwgnWTPp7fhFAfMdfLXXoKOxEI2kCUIJfqm25%2F3%2BoLACkfKwQw3oR%2FICDK2CSV8fUpyALSxYXPJH%2BwU2%2BTeMvx5Nf%2FmArbaBQR6c%2FgpANXpMLtlWREvUMPbJXf0Hr76f&X-Amz-Signature=e4181cdce2fb89a2df80ac04c09a2b451d3a037b25ff8deaf922ce0ff2a4d8ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BDUHX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH59Xs3sp7gGL%2BYsoL9vox3UuSCFwsBrmNeQJcVPkdIdAiA1Zbnyu8DQwE%2B9Mx5iKVZi3p2Ufw4Gi9EjHdBzIGREMiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HvEM6dHEc4mJNV0KtwDPP5VfvjlHjnLm9Lpr177y1s0769TDmN7LOZFYjL0rem62SP6mhDor3OV2bylbwOvm%2BKfqU%2BtNo5PfdbuOIY9mK%2Ba9CQTKAl%2BNyrXtllBkOQuAmx6OgTFA6Gsve1agavewIz6z16MVPITqccJm1oMpWS4QejnPAi0sTEhRh4gwGNUF%2FFqou077NHrKwy%2F8Yi%2FlYMw9dGV%2BNx3ofJ2%2B7CjEhssY73EvivxWIo%2FWCZsKNMqEzr4Sm%2B0cPVqDDtIKCpoV4qw115%2Fu7YzdXRDCi5ry8Wx%2BjUYDHRRP87jOrpHwzS3HWVgOP%2BlHp2r3%2BBPAbq04ILNl5hiWrdC%2FPM5laePXzdhslP6bOXAH0J4SCl4DURvobRDYeYLziIlrBTHlm7fS1lHW%2B%2Bn3RPr9rw7ColoykFCX93hqJotNPOv1y76HIusSYtoPr5%2BL0duGGQi3N9WoY7cUs7GBMSi%2Fy8cLb4e2m8gM%2B4oZQXEClu5JKhlwD0VHJtfvqHPNTEN0UFnLps6KRNrvhYPJkKP2F46utHyJP5Bhonjol%2BTxSJkVn3gXCH04qhbtyoBX9qimAvQoRV2zIWiwMAC5G2p5U6g%2BfFP530xGs7D1VWVDb2rWqGJhRWxumXzZ79Pmi5oZmUw7OmtxAY6pgHtK27fLOMZzX7DFzQZ52N3cThznZc%2Fd5yzvzWjeAm0t7YzLMdvH6QK7ipaprGYkNQz9GGCzMutob0lS3l1RvCot%2BOBS3FcOwgnWTPp7fhFAfMdfLXXoKOxEI2kCUIJfqm25%2F3%2BoLACkfKwQw3oR%2FICDK2CSV8fUpyALSxYXPJH%2BwU2%2BTeMvx5Nf%2FmArbaBQR6c%2FgpANXpMLtlWREvUMPbJXf0Hr76f&X-Amz-Signature=4fc7faab107af717a34c1771c8590654d920813be8c53a70a4fa257d792f9ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BDUHX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH59Xs3sp7gGL%2BYsoL9vox3UuSCFwsBrmNeQJcVPkdIdAiA1Zbnyu8DQwE%2B9Mx5iKVZi3p2Ufw4Gi9EjHdBzIGREMiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HvEM6dHEc4mJNV0KtwDPP5VfvjlHjnLm9Lpr177y1s0769TDmN7LOZFYjL0rem62SP6mhDor3OV2bylbwOvm%2BKfqU%2BtNo5PfdbuOIY9mK%2Ba9CQTKAl%2BNyrXtllBkOQuAmx6OgTFA6Gsve1agavewIz6z16MVPITqccJm1oMpWS4QejnPAi0sTEhRh4gwGNUF%2FFqou077NHrKwy%2F8Yi%2FlYMw9dGV%2BNx3ofJ2%2B7CjEhssY73EvivxWIo%2FWCZsKNMqEzr4Sm%2B0cPVqDDtIKCpoV4qw115%2Fu7YzdXRDCi5ry8Wx%2BjUYDHRRP87jOrpHwzS3HWVgOP%2BlHp2r3%2BBPAbq04ILNl5hiWrdC%2FPM5laePXzdhslP6bOXAH0J4SCl4DURvobRDYeYLziIlrBTHlm7fS1lHW%2B%2Bn3RPr9rw7ColoykFCX93hqJotNPOv1y76HIusSYtoPr5%2BL0duGGQi3N9WoY7cUs7GBMSi%2Fy8cLb4e2m8gM%2B4oZQXEClu5JKhlwD0VHJtfvqHPNTEN0UFnLps6KRNrvhYPJkKP2F46utHyJP5Bhonjol%2BTxSJkVn3gXCH04qhbtyoBX9qimAvQoRV2zIWiwMAC5G2p5U6g%2BfFP530xGs7D1VWVDb2rWqGJhRWxumXzZ79Pmi5oZmUw7OmtxAY6pgHtK27fLOMZzX7DFzQZ52N3cThznZc%2Fd5yzvzWjeAm0t7YzLMdvH6QK7ipaprGYkNQz9GGCzMutob0lS3l1RvCot%2BOBS3FcOwgnWTPp7fhFAfMdfLXXoKOxEI2kCUIJfqm25%2F3%2BoLACkfKwQw3oR%2FICDK2CSV8fUpyALSxYXPJH%2BwU2%2BTeMvx5Nf%2FmArbaBQR6c%2FgpANXpMLtlWREvUMPbJXf0Hr76f&X-Amz-Signature=55e4eb7735a89a834bc890cba01487847748ab12518dadd90d732310f3cf5a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BDUHX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH59Xs3sp7gGL%2BYsoL9vox3UuSCFwsBrmNeQJcVPkdIdAiA1Zbnyu8DQwE%2B9Mx5iKVZi3p2Ufw4Gi9EjHdBzIGREMiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HvEM6dHEc4mJNV0KtwDPP5VfvjlHjnLm9Lpr177y1s0769TDmN7LOZFYjL0rem62SP6mhDor3OV2bylbwOvm%2BKfqU%2BtNo5PfdbuOIY9mK%2Ba9CQTKAl%2BNyrXtllBkOQuAmx6OgTFA6Gsve1agavewIz6z16MVPITqccJm1oMpWS4QejnPAi0sTEhRh4gwGNUF%2FFqou077NHrKwy%2F8Yi%2FlYMw9dGV%2BNx3ofJ2%2B7CjEhssY73EvivxWIo%2FWCZsKNMqEzr4Sm%2B0cPVqDDtIKCpoV4qw115%2Fu7YzdXRDCi5ry8Wx%2BjUYDHRRP87jOrpHwzS3HWVgOP%2BlHp2r3%2BBPAbq04ILNl5hiWrdC%2FPM5laePXzdhslP6bOXAH0J4SCl4DURvobRDYeYLziIlrBTHlm7fS1lHW%2B%2Bn3RPr9rw7ColoykFCX93hqJotNPOv1y76HIusSYtoPr5%2BL0duGGQi3N9WoY7cUs7GBMSi%2Fy8cLb4e2m8gM%2B4oZQXEClu5JKhlwD0VHJtfvqHPNTEN0UFnLps6KRNrvhYPJkKP2F46utHyJP5Bhonjol%2BTxSJkVn3gXCH04qhbtyoBX9qimAvQoRV2zIWiwMAC5G2p5U6g%2BfFP530xGs7D1VWVDb2rWqGJhRWxumXzZ79Pmi5oZmUw7OmtxAY6pgHtK27fLOMZzX7DFzQZ52N3cThznZc%2Fd5yzvzWjeAm0t7YzLMdvH6QK7ipaprGYkNQz9GGCzMutob0lS3l1RvCot%2BOBS3FcOwgnWTPp7fhFAfMdfLXXoKOxEI2kCUIJfqm25%2F3%2BoLACkfKwQw3oR%2FICDK2CSV8fUpyALSxYXPJH%2BwU2%2BTeMvx5Nf%2FmArbaBQR6c%2FgpANXpMLtlWREvUMPbJXf0Hr76f&X-Amz-Signature=46cf182a3857d70fdeb411f88aa47980ed5f8061cc134612c633901dc712d641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BDUHX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH59Xs3sp7gGL%2BYsoL9vox3UuSCFwsBrmNeQJcVPkdIdAiA1Zbnyu8DQwE%2B9Mx5iKVZi3p2Ufw4Gi9EjHdBzIGREMiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HvEM6dHEc4mJNV0KtwDPP5VfvjlHjnLm9Lpr177y1s0769TDmN7LOZFYjL0rem62SP6mhDor3OV2bylbwOvm%2BKfqU%2BtNo5PfdbuOIY9mK%2Ba9CQTKAl%2BNyrXtllBkOQuAmx6OgTFA6Gsve1agavewIz6z16MVPITqccJm1oMpWS4QejnPAi0sTEhRh4gwGNUF%2FFqou077NHrKwy%2F8Yi%2FlYMw9dGV%2BNx3ofJ2%2B7CjEhssY73EvivxWIo%2FWCZsKNMqEzr4Sm%2B0cPVqDDtIKCpoV4qw115%2Fu7YzdXRDCi5ry8Wx%2BjUYDHRRP87jOrpHwzS3HWVgOP%2BlHp2r3%2BBPAbq04ILNl5hiWrdC%2FPM5laePXzdhslP6bOXAH0J4SCl4DURvobRDYeYLziIlrBTHlm7fS1lHW%2B%2Bn3RPr9rw7ColoykFCX93hqJotNPOv1y76HIusSYtoPr5%2BL0duGGQi3N9WoY7cUs7GBMSi%2Fy8cLb4e2m8gM%2B4oZQXEClu5JKhlwD0VHJtfvqHPNTEN0UFnLps6KRNrvhYPJkKP2F46utHyJP5Bhonjol%2BTxSJkVn3gXCH04qhbtyoBX9qimAvQoRV2zIWiwMAC5G2p5U6g%2BfFP530xGs7D1VWVDb2rWqGJhRWxumXzZ79Pmi5oZmUw7OmtxAY6pgHtK27fLOMZzX7DFzQZ52N3cThznZc%2Fd5yzvzWjeAm0t7YzLMdvH6QK7ipaprGYkNQz9GGCzMutob0lS3l1RvCot%2BOBS3FcOwgnWTPp7fhFAfMdfLXXoKOxEI2kCUIJfqm25%2F3%2BoLACkfKwQw3oR%2FICDK2CSV8fUpyALSxYXPJH%2BwU2%2BTeMvx5Nf%2FmArbaBQR6c%2FgpANXpMLtlWREvUMPbJXf0Hr76f&X-Amz-Signature=9e8a510839ad331b3ddcaebc2c635aaf63d27a2180114692966e0c77980127f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X26BDUHX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH59Xs3sp7gGL%2BYsoL9vox3UuSCFwsBrmNeQJcVPkdIdAiA1Zbnyu8DQwE%2B9Mx5iKVZi3p2Ufw4Gi9EjHdBzIGREMiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4HvEM6dHEc4mJNV0KtwDPP5VfvjlHjnLm9Lpr177y1s0769TDmN7LOZFYjL0rem62SP6mhDor3OV2bylbwOvm%2BKfqU%2BtNo5PfdbuOIY9mK%2Ba9CQTKAl%2BNyrXtllBkOQuAmx6OgTFA6Gsve1agavewIz6z16MVPITqccJm1oMpWS4QejnPAi0sTEhRh4gwGNUF%2FFqou077NHrKwy%2F8Yi%2FlYMw9dGV%2BNx3ofJ2%2B7CjEhssY73EvivxWIo%2FWCZsKNMqEzr4Sm%2B0cPVqDDtIKCpoV4qw115%2Fu7YzdXRDCi5ry8Wx%2BjUYDHRRP87jOrpHwzS3HWVgOP%2BlHp2r3%2BBPAbq04ILNl5hiWrdC%2FPM5laePXzdhslP6bOXAH0J4SCl4DURvobRDYeYLziIlrBTHlm7fS1lHW%2B%2Bn3RPr9rw7ColoykFCX93hqJotNPOv1y76HIusSYtoPr5%2BL0duGGQi3N9WoY7cUs7GBMSi%2Fy8cLb4e2m8gM%2B4oZQXEClu5JKhlwD0VHJtfvqHPNTEN0UFnLps6KRNrvhYPJkKP2F46utHyJP5Bhonjol%2BTxSJkVn3gXCH04qhbtyoBX9qimAvQoRV2zIWiwMAC5G2p5U6g%2BfFP530xGs7D1VWVDb2rWqGJhRWxumXzZ79Pmi5oZmUw7OmtxAY6pgHtK27fLOMZzX7DFzQZ52N3cThznZc%2Fd5yzvzWjeAm0t7YzLMdvH6QK7ipaprGYkNQz9GGCzMutob0lS3l1RvCot%2BOBS3FcOwgnWTPp7fhFAfMdfLXXoKOxEI2kCUIJfqm25%2F3%2BoLACkfKwQw3oR%2FICDK2CSV8fUpyALSxYXPJH%2BwU2%2BTeMvx5Nf%2FmArbaBQR6c%2FgpANXpMLtlWREvUMPbJXf0Hr76f&X-Amz-Signature=636d337049481918aa45887cdba39e93ba756857712b7953af8962f3fe474352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
