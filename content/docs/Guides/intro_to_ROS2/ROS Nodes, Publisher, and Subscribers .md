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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ2UNIM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDnqsMat7EwY2jJntrnLH1rIxfPW9TOWjXHsbCB6qj9KwIgD2VE0aE%2B%2B2VRy5JVGNcl%2Fv%2FVo5BPueHkPhDpAa2plWcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOrB6o2TUOb1KMYDircA0Vo%2BNd%2Be9nn0BYq%2FsPqVwIZAbpPAdB7REQ0mmMUL0ZVmGPFxR%2Feg1xCprMALR4tGCtyx0fet480TOQ2nah3MT3FVNn%2FEieo6TENEXkb5mF84TCt6FSodhJJthp5Jt2ryb3TLtmyD1Pli71zqylpvtCE9Kd56oWUEcfqQ1ckPdKvzNNB6JeOoLbxUBpb8tvqiyH8LVeKXfPyumMyMc9Mvgw%2B1tltY0z3iXVaGWAAekDe4U1ejIZ%2Bq1LdFgjj1621nhEcn1VAAEUjXFhBmxCF2j2P%2FVltDTwjnJH6Idkj7QnZ1z2GqO31QJc4SZl5gYwuttUprp3ZoNYX02BV228Val%2Ft1PbGaSO%2FpVd6m3V3QkMx4U1nSqF6uMd40ox0u1nHwGWS7d%2FuuBaf9M2XRRcGtdmUQO9P1GSDfb1B9JqKy8pjrymzh%2Fgsb24WaOl7uQwwTEsoKW%2FDhWTp7LPdUM%2BiQLMZlRVa4qJ6UfU4FWJ5d0aW%2BPn83iPJS7Rz8DTIzM1Ktoi4jjfNo2N9NbSgntBy3ox1F4yn6OO%2BAQNwU4p29kfS3dE0zErbaAFDZAA1gzNwISfa5qTMv4WI5yvR6k%2F2fFR3sf7ben11Kkniiynfu5baTZD21zOIuBumiTp5MLvQsr8GOqUBwM%2F6yXMFyDRrsNC0y12DClRQ1NqhK99MhzhQQn8e2sNdKnRfLEyMDUAO2RozUKDb3JKJdz0UCQm2x65fNNRGQ9RUYgmHQ8Q6B9qK7WBlMhkJxKfc%2FROUMW4zNfYNGtwCN6aJ1AjRaNBME9vIyRFRbIvqHn4q83W6UGp1S2TvfNTD8OJyMNr7R6APoYGQscZdOokXGOYuLOilnBbbf1Fb5sshUMW%2F&X-Amz-Signature=66397018657af714efe370b3dde6c4655910b1969b3414d94e2d23da68fc8fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ2UNIM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDnqsMat7EwY2jJntrnLH1rIxfPW9TOWjXHsbCB6qj9KwIgD2VE0aE%2B%2B2VRy5JVGNcl%2Fv%2FVo5BPueHkPhDpAa2plWcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOrB6o2TUOb1KMYDircA0Vo%2BNd%2Be9nn0BYq%2FsPqVwIZAbpPAdB7REQ0mmMUL0ZVmGPFxR%2Feg1xCprMALR4tGCtyx0fet480TOQ2nah3MT3FVNn%2FEieo6TENEXkb5mF84TCt6FSodhJJthp5Jt2ryb3TLtmyD1Pli71zqylpvtCE9Kd56oWUEcfqQ1ckPdKvzNNB6JeOoLbxUBpb8tvqiyH8LVeKXfPyumMyMc9Mvgw%2B1tltY0z3iXVaGWAAekDe4U1ejIZ%2Bq1LdFgjj1621nhEcn1VAAEUjXFhBmxCF2j2P%2FVltDTwjnJH6Idkj7QnZ1z2GqO31QJc4SZl5gYwuttUprp3ZoNYX02BV228Val%2Ft1PbGaSO%2FpVd6m3V3QkMx4U1nSqF6uMd40ox0u1nHwGWS7d%2FuuBaf9M2XRRcGtdmUQO9P1GSDfb1B9JqKy8pjrymzh%2Fgsb24WaOl7uQwwTEsoKW%2FDhWTp7LPdUM%2BiQLMZlRVa4qJ6UfU4FWJ5d0aW%2BPn83iPJS7Rz8DTIzM1Ktoi4jjfNo2N9NbSgntBy3ox1F4yn6OO%2BAQNwU4p29kfS3dE0zErbaAFDZAA1gzNwISfa5qTMv4WI5yvR6k%2F2fFR3sf7ben11Kkniiynfu5baTZD21zOIuBumiTp5MLvQsr8GOqUBwM%2F6yXMFyDRrsNC0y12DClRQ1NqhK99MhzhQQn8e2sNdKnRfLEyMDUAO2RozUKDb3JKJdz0UCQm2x65fNNRGQ9RUYgmHQ8Q6B9qK7WBlMhkJxKfc%2FROUMW4zNfYNGtwCN6aJ1AjRaNBME9vIyRFRbIvqHn4q83W6UGp1S2TvfNTD8OJyMNr7R6APoYGQscZdOokXGOYuLOilnBbbf1Fb5sshUMW%2F&X-Amz-Signature=427f483fe6a3c00e7b0aec8c75314a60d3593670b8302b8e00d2d99cca44b98c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ2UNIM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDnqsMat7EwY2jJntrnLH1rIxfPW9TOWjXHsbCB6qj9KwIgD2VE0aE%2B%2B2VRy5JVGNcl%2Fv%2FVo5BPueHkPhDpAa2plWcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOrB6o2TUOb1KMYDircA0Vo%2BNd%2Be9nn0BYq%2FsPqVwIZAbpPAdB7REQ0mmMUL0ZVmGPFxR%2Feg1xCprMALR4tGCtyx0fet480TOQ2nah3MT3FVNn%2FEieo6TENEXkb5mF84TCt6FSodhJJthp5Jt2ryb3TLtmyD1Pli71zqylpvtCE9Kd56oWUEcfqQ1ckPdKvzNNB6JeOoLbxUBpb8tvqiyH8LVeKXfPyumMyMc9Mvgw%2B1tltY0z3iXVaGWAAekDe4U1ejIZ%2Bq1LdFgjj1621nhEcn1VAAEUjXFhBmxCF2j2P%2FVltDTwjnJH6Idkj7QnZ1z2GqO31QJc4SZl5gYwuttUprp3ZoNYX02BV228Val%2Ft1PbGaSO%2FpVd6m3V3QkMx4U1nSqF6uMd40ox0u1nHwGWS7d%2FuuBaf9M2XRRcGtdmUQO9P1GSDfb1B9JqKy8pjrymzh%2Fgsb24WaOl7uQwwTEsoKW%2FDhWTp7LPdUM%2BiQLMZlRVa4qJ6UfU4FWJ5d0aW%2BPn83iPJS7Rz8DTIzM1Ktoi4jjfNo2N9NbSgntBy3ox1F4yn6OO%2BAQNwU4p29kfS3dE0zErbaAFDZAA1gzNwISfa5qTMv4WI5yvR6k%2F2fFR3sf7ben11Kkniiynfu5baTZD21zOIuBumiTp5MLvQsr8GOqUBwM%2F6yXMFyDRrsNC0y12DClRQ1NqhK99MhzhQQn8e2sNdKnRfLEyMDUAO2RozUKDb3JKJdz0UCQm2x65fNNRGQ9RUYgmHQ8Q6B9qK7WBlMhkJxKfc%2FROUMW4zNfYNGtwCN6aJ1AjRaNBME9vIyRFRbIvqHn4q83W6UGp1S2TvfNTD8OJyMNr7R6APoYGQscZdOokXGOYuLOilnBbbf1Fb5sshUMW%2F&X-Amz-Signature=534c25d3887a561a200f35531c80e898668d54748805d2a900f625709e056ac5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ2UNIM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDnqsMat7EwY2jJntrnLH1rIxfPW9TOWjXHsbCB6qj9KwIgD2VE0aE%2B%2B2VRy5JVGNcl%2Fv%2FVo5BPueHkPhDpAa2plWcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOrB6o2TUOb1KMYDircA0Vo%2BNd%2Be9nn0BYq%2FsPqVwIZAbpPAdB7REQ0mmMUL0ZVmGPFxR%2Feg1xCprMALR4tGCtyx0fet480TOQ2nah3MT3FVNn%2FEieo6TENEXkb5mF84TCt6FSodhJJthp5Jt2ryb3TLtmyD1Pli71zqylpvtCE9Kd56oWUEcfqQ1ckPdKvzNNB6JeOoLbxUBpb8tvqiyH8LVeKXfPyumMyMc9Mvgw%2B1tltY0z3iXVaGWAAekDe4U1ejIZ%2Bq1LdFgjj1621nhEcn1VAAEUjXFhBmxCF2j2P%2FVltDTwjnJH6Idkj7QnZ1z2GqO31QJc4SZl5gYwuttUprp3ZoNYX02BV228Val%2Ft1PbGaSO%2FpVd6m3V3QkMx4U1nSqF6uMd40ox0u1nHwGWS7d%2FuuBaf9M2XRRcGtdmUQO9P1GSDfb1B9JqKy8pjrymzh%2Fgsb24WaOl7uQwwTEsoKW%2FDhWTp7LPdUM%2BiQLMZlRVa4qJ6UfU4FWJ5d0aW%2BPn83iPJS7Rz8DTIzM1Ktoi4jjfNo2N9NbSgntBy3ox1F4yn6OO%2BAQNwU4p29kfS3dE0zErbaAFDZAA1gzNwISfa5qTMv4WI5yvR6k%2F2fFR3sf7ben11Kkniiynfu5baTZD21zOIuBumiTp5MLvQsr8GOqUBwM%2F6yXMFyDRrsNC0y12DClRQ1NqhK99MhzhQQn8e2sNdKnRfLEyMDUAO2RozUKDb3JKJdz0UCQm2x65fNNRGQ9RUYgmHQ8Q6B9qK7WBlMhkJxKfc%2FROUMW4zNfYNGtwCN6aJ1AjRaNBME9vIyRFRbIvqHn4q83W6UGp1S2TvfNTD8OJyMNr7R6APoYGQscZdOokXGOYuLOilnBbbf1Fb5sshUMW%2F&X-Amz-Signature=3e317fe3a6bb030a526b2f1710fa6f321e6d2da09df48393bfa91a7986258ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ2UNIM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDnqsMat7EwY2jJntrnLH1rIxfPW9TOWjXHsbCB6qj9KwIgD2VE0aE%2B%2B2VRy5JVGNcl%2Fv%2FVo5BPueHkPhDpAa2plWcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOrB6o2TUOb1KMYDircA0Vo%2BNd%2Be9nn0BYq%2FsPqVwIZAbpPAdB7REQ0mmMUL0ZVmGPFxR%2Feg1xCprMALR4tGCtyx0fet480TOQ2nah3MT3FVNn%2FEieo6TENEXkb5mF84TCt6FSodhJJthp5Jt2ryb3TLtmyD1Pli71zqylpvtCE9Kd56oWUEcfqQ1ckPdKvzNNB6JeOoLbxUBpb8tvqiyH8LVeKXfPyumMyMc9Mvgw%2B1tltY0z3iXVaGWAAekDe4U1ejIZ%2Bq1LdFgjj1621nhEcn1VAAEUjXFhBmxCF2j2P%2FVltDTwjnJH6Idkj7QnZ1z2GqO31QJc4SZl5gYwuttUprp3ZoNYX02BV228Val%2Ft1PbGaSO%2FpVd6m3V3QkMx4U1nSqF6uMd40ox0u1nHwGWS7d%2FuuBaf9M2XRRcGtdmUQO9P1GSDfb1B9JqKy8pjrymzh%2Fgsb24WaOl7uQwwTEsoKW%2FDhWTp7LPdUM%2BiQLMZlRVa4qJ6UfU4FWJ5d0aW%2BPn83iPJS7Rz8DTIzM1Ktoi4jjfNo2N9NbSgntBy3ox1F4yn6OO%2BAQNwU4p29kfS3dE0zErbaAFDZAA1gzNwISfa5qTMv4WI5yvR6k%2F2fFR3sf7ben11Kkniiynfu5baTZD21zOIuBumiTp5MLvQsr8GOqUBwM%2F6yXMFyDRrsNC0y12DClRQ1NqhK99MhzhQQn8e2sNdKnRfLEyMDUAO2RozUKDb3JKJdz0UCQm2x65fNNRGQ9RUYgmHQ8Q6B9qK7WBlMhkJxKfc%2FROUMW4zNfYNGtwCN6aJ1AjRaNBME9vIyRFRbIvqHn4q83W6UGp1S2TvfNTD8OJyMNr7R6APoYGQscZdOokXGOYuLOilnBbbf1Fb5sshUMW%2F&X-Amz-Signature=3ec49c85aefada19c8e8fe76fddbd41f31f055bbb3551467b247aea5a7aba585&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ2UNIM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDnqsMat7EwY2jJntrnLH1rIxfPW9TOWjXHsbCB6qj9KwIgD2VE0aE%2B%2B2VRy5JVGNcl%2Fv%2FVo5BPueHkPhDpAa2plWcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOrB6o2TUOb1KMYDircA0Vo%2BNd%2Be9nn0BYq%2FsPqVwIZAbpPAdB7REQ0mmMUL0ZVmGPFxR%2Feg1xCprMALR4tGCtyx0fet480TOQ2nah3MT3FVNn%2FEieo6TENEXkb5mF84TCt6FSodhJJthp5Jt2ryb3TLtmyD1Pli71zqylpvtCE9Kd56oWUEcfqQ1ckPdKvzNNB6JeOoLbxUBpb8tvqiyH8LVeKXfPyumMyMc9Mvgw%2B1tltY0z3iXVaGWAAekDe4U1ejIZ%2Bq1LdFgjj1621nhEcn1VAAEUjXFhBmxCF2j2P%2FVltDTwjnJH6Idkj7QnZ1z2GqO31QJc4SZl5gYwuttUprp3ZoNYX02BV228Val%2Ft1PbGaSO%2FpVd6m3V3QkMx4U1nSqF6uMd40ox0u1nHwGWS7d%2FuuBaf9M2XRRcGtdmUQO9P1GSDfb1B9JqKy8pjrymzh%2Fgsb24WaOl7uQwwTEsoKW%2FDhWTp7LPdUM%2BiQLMZlRVa4qJ6UfU4FWJ5d0aW%2BPn83iPJS7Rz8DTIzM1Ktoi4jjfNo2N9NbSgntBy3ox1F4yn6OO%2BAQNwU4p29kfS3dE0zErbaAFDZAA1gzNwISfa5qTMv4WI5yvR6k%2F2fFR3sf7ben11Kkniiynfu5baTZD21zOIuBumiTp5MLvQsr8GOqUBwM%2F6yXMFyDRrsNC0y12DClRQ1NqhK99MhzhQQn8e2sNdKnRfLEyMDUAO2RozUKDb3JKJdz0UCQm2x65fNNRGQ9RUYgmHQ8Q6B9qK7WBlMhkJxKfc%2FROUMW4zNfYNGtwCN6aJ1AjRaNBME9vIyRFRbIvqHn4q83W6UGp1S2TvfNTD8OJyMNr7R6APoYGQscZdOokXGOYuLOilnBbbf1Fb5sshUMW%2F&X-Amz-Signature=f8a063a953bfe077741ed2871340589a4d53af83b342d69da3c60ef4b6370a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ2UNIM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDnqsMat7EwY2jJntrnLH1rIxfPW9TOWjXHsbCB6qj9KwIgD2VE0aE%2B%2B2VRy5JVGNcl%2Fv%2FVo5BPueHkPhDpAa2plWcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOrB6o2TUOb1KMYDircA0Vo%2BNd%2Be9nn0BYq%2FsPqVwIZAbpPAdB7REQ0mmMUL0ZVmGPFxR%2Feg1xCprMALR4tGCtyx0fet480TOQ2nah3MT3FVNn%2FEieo6TENEXkb5mF84TCt6FSodhJJthp5Jt2ryb3TLtmyD1Pli71zqylpvtCE9Kd56oWUEcfqQ1ckPdKvzNNB6JeOoLbxUBpb8tvqiyH8LVeKXfPyumMyMc9Mvgw%2B1tltY0z3iXVaGWAAekDe4U1ejIZ%2Bq1LdFgjj1621nhEcn1VAAEUjXFhBmxCF2j2P%2FVltDTwjnJH6Idkj7QnZ1z2GqO31QJc4SZl5gYwuttUprp3ZoNYX02BV228Val%2Ft1PbGaSO%2FpVd6m3V3QkMx4U1nSqF6uMd40ox0u1nHwGWS7d%2FuuBaf9M2XRRcGtdmUQO9P1GSDfb1B9JqKy8pjrymzh%2Fgsb24WaOl7uQwwTEsoKW%2FDhWTp7LPdUM%2BiQLMZlRVa4qJ6UfU4FWJ5d0aW%2BPn83iPJS7Rz8DTIzM1Ktoi4jjfNo2N9NbSgntBy3ox1F4yn6OO%2BAQNwU4p29kfS3dE0zErbaAFDZAA1gzNwISfa5qTMv4WI5yvR6k%2F2fFR3sf7ben11Kkniiynfu5baTZD21zOIuBumiTp5MLvQsr8GOqUBwM%2F6yXMFyDRrsNC0y12DClRQ1NqhK99MhzhQQn8e2sNdKnRfLEyMDUAO2RozUKDb3JKJdz0UCQm2x65fNNRGQ9RUYgmHQ8Q6B9qK7WBlMhkJxKfc%2FROUMW4zNfYNGtwCN6aJ1AjRaNBME9vIyRFRbIvqHn4q83W6UGp1S2TvfNTD8OJyMNr7R6APoYGQscZdOokXGOYuLOilnBbbf1Fb5sshUMW%2F&X-Amz-Signature=31be5cddb53f82a40c9bf190dd5b073a0d0abca5dae12531869d05705241b66b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQ2UNIM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDnqsMat7EwY2jJntrnLH1rIxfPW9TOWjXHsbCB6qj9KwIgD2VE0aE%2B%2B2VRy5JVGNcl%2Fv%2FVo5BPueHkPhDpAa2plWcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOrB6o2TUOb1KMYDircA0Vo%2BNd%2Be9nn0BYq%2FsPqVwIZAbpPAdB7REQ0mmMUL0ZVmGPFxR%2Feg1xCprMALR4tGCtyx0fet480TOQ2nah3MT3FVNn%2FEieo6TENEXkb5mF84TCt6FSodhJJthp5Jt2ryb3TLtmyD1Pli71zqylpvtCE9Kd56oWUEcfqQ1ckPdKvzNNB6JeOoLbxUBpb8tvqiyH8LVeKXfPyumMyMc9Mvgw%2B1tltY0z3iXVaGWAAekDe4U1ejIZ%2Bq1LdFgjj1621nhEcn1VAAEUjXFhBmxCF2j2P%2FVltDTwjnJH6Idkj7QnZ1z2GqO31QJc4SZl5gYwuttUprp3ZoNYX02BV228Val%2Ft1PbGaSO%2FpVd6m3V3QkMx4U1nSqF6uMd40ox0u1nHwGWS7d%2FuuBaf9M2XRRcGtdmUQO9P1GSDfb1B9JqKy8pjrymzh%2Fgsb24WaOl7uQwwTEsoKW%2FDhWTp7LPdUM%2BiQLMZlRVa4qJ6UfU4FWJ5d0aW%2BPn83iPJS7Rz8DTIzM1Ktoi4jjfNo2N9NbSgntBy3ox1F4yn6OO%2BAQNwU4p29kfS3dE0zErbaAFDZAA1gzNwISfa5qTMv4WI5yvR6k%2F2fFR3sf7ben11Kkniiynfu5baTZD21zOIuBumiTp5MLvQsr8GOqUBwM%2F6yXMFyDRrsNC0y12DClRQ1NqhK99MhzhQQn8e2sNdKnRfLEyMDUAO2RozUKDb3JKJdz0UCQm2x65fNNRGQ9RUYgmHQ8Q6B9qK7WBlMhkJxKfc%2FROUMW4zNfYNGtwCN6aJ1AjRaNBME9vIyRFRbIvqHn4q83W6UGp1S2TvfNTD8OJyMNr7R6APoYGQscZdOokXGOYuLOilnBbbf1Fb5sshUMW%2F&X-Amz-Signature=6b2e3da798635a0685c70a03562710328009e3c5e1933c3aa0b6109fb2471f34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
