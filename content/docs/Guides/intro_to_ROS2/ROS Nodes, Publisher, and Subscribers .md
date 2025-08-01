---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QESS6ND%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC19e6OPLMuw2%2Fl05dwwhU9r9kcqq7NrZcJOUEvEs50AIgXTKkqbFQDyO0J42vz9IQw0wKebKQ73Elr9ARNpQI6ewqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG03AFuNlBXZJHjMSrcA23J6DbMcU3BKPNueBXzoDHYAAVrXoSafapUjI5%2BWEHwy7fOsM5IqREJovPPYysyZ3worfJdrTgZ7IOY2jeiRVBBCzbIYlkTMIZwglCSlfD62QmgIQTcsmQseMgcoq6becWwNobimUX8rPoR4Y4cheA0vpCYVqGsHJ%2FT6KfUK%2FcIsRhU54GvGogkNE5FDmatNTNmoNeU2GMzn70BqbMwKoMhUIKbLW%2BM7dsIJc%2BSTMHmRwi6CnbihEIkn%2F0i1UtVwzNJ3GdctOBL%2FISQiZzwKRWHMtd96YFCSCmyYStpBOF6UASk5pP4uRifseYygV7RM2sTdR5PGUrTtrN7qVuJN8Q4Zw%2F2C2ajvj7lkksmoHEEEUIDd8wFsDvozSANQTgc%2BfARWt%2BlF6H5aunXLCLMX6JOVf2RJ26VDpLhibKJMemp3YVQrlIGmCFFeIGjNB5vm5sMk7wv38%2FvNl7DH8JY9cE7NATeJRS9XLyEWOaGYK36DyZ4QXJ4Dt5%2Bbz9CHhrdTFLk%2BKnCTuEAaeiQqp%2Fp%2BliDOt7WC%2Bh1EgoHenyevjGer5epP2vcrDTNwDFrk1fhYErj1XIbH76vx3DhJv2eoF35sxllX6HOChgjzYMNCW%2BU78cyaflJOimC1G%2FZMPjttMQGOqUB0NKzqqFDNNY8KDcMhI7lgz7PKzkKQNq%2B%2FgfyusC73tNB1mfFFn8xzcNbER6Vn4F%2B57aRwo1WlZAGQCTAa6HjlPbmbPbuId4quridoKsFHPWsfhCnHFR%2FTjpTRB4YAMvYLgxc7VTwHCEAi7dxfX8qi3Grz8yjzdUwMo9geqBlPSQr98ngdtgAa1OO0aETlgEK2C4QpFesyRB8zzf%2Fp%2FB%2BAglcxhsD&X-Amz-Signature=da1d11c6ed8e601608b38d97c30d6323bc9fecfebbd449804fec52f2d0426d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QESS6ND%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC19e6OPLMuw2%2Fl05dwwhU9r9kcqq7NrZcJOUEvEs50AIgXTKkqbFQDyO0J42vz9IQw0wKebKQ73Elr9ARNpQI6ewqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG03AFuNlBXZJHjMSrcA23J6DbMcU3BKPNueBXzoDHYAAVrXoSafapUjI5%2BWEHwy7fOsM5IqREJovPPYysyZ3worfJdrTgZ7IOY2jeiRVBBCzbIYlkTMIZwglCSlfD62QmgIQTcsmQseMgcoq6becWwNobimUX8rPoR4Y4cheA0vpCYVqGsHJ%2FT6KfUK%2FcIsRhU54GvGogkNE5FDmatNTNmoNeU2GMzn70BqbMwKoMhUIKbLW%2BM7dsIJc%2BSTMHmRwi6CnbihEIkn%2F0i1UtVwzNJ3GdctOBL%2FISQiZzwKRWHMtd96YFCSCmyYStpBOF6UASk5pP4uRifseYygV7RM2sTdR5PGUrTtrN7qVuJN8Q4Zw%2F2C2ajvj7lkksmoHEEEUIDd8wFsDvozSANQTgc%2BfARWt%2BlF6H5aunXLCLMX6JOVf2RJ26VDpLhibKJMemp3YVQrlIGmCFFeIGjNB5vm5sMk7wv38%2FvNl7DH8JY9cE7NATeJRS9XLyEWOaGYK36DyZ4QXJ4Dt5%2Bbz9CHhrdTFLk%2BKnCTuEAaeiQqp%2Fp%2BliDOt7WC%2Bh1EgoHenyevjGer5epP2vcrDTNwDFrk1fhYErj1XIbH76vx3DhJv2eoF35sxllX6HOChgjzYMNCW%2BU78cyaflJOimC1G%2FZMPjttMQGOqUB0NKzqqFDNNY8KDcMhI7lgz7PKzkKQNq%2B%2FgfyusC73tNB1mfFFn8xzcNbER6Vn4F%2B57aRwo1WlZAGQCTAa6HjlPbmbPbuId4quridoKsFHPWsfhCnHFR%2FTjpTRB4YAMvYLgxc7VTwHCEAi7dxfX8qi3Grz8yjzdUwMo9geqBlPSQr98ngdtgAa1OO0aETlgEK2C4QpFesyRB8zzf%2Fp%2FB%2BAglcxhsD&X-Amz-Signature=865253cd4fdcc118568dfc7cf312ff33c0dbaa44dae670772ac0c86b8b51af15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QESS6ND%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC19e6OPLMuw2%2Fl05dwwhU9r9kcqq7NrZcJOUEvEs50AIgXTKkqbFQDyO0J42vz9IQw0wKebKQ73Elr9ARNpQI6ewqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG03AFuNlBXZJHjMSrcA23J6DbMcU3BKPNueBXzoDHYAAVrXoSafapUjI5%2BWEHwy7fOsM5IqREJovPPYysyZ3worfJdrTgZ7IOY2jeiRVBBCzbIYlkTMIZwglCSlfD62QmgIQTcsmQseMgcoq6becWwNobimUX8rPoR4Y4cheA0vpCYVqGsHJ%2FT6KfUK%2FcIsRhU54GvGogkNE5FDmatNTNmoNeU2GMzn70BqbMwKoMhUIKbLW%2BM7dsIJc%2BSTMHmRwi6CnbihEIkn%2F0i1UtVwzNJ3GdctOBL%2FISQiZzwKRWHMtd96YFCSCmyYStpBOF6UASk5pP4uRifseYygV7RM2sTdR5PGUrTtrN7qVuJN8Q4Zw%2F2C2ajvj7lkksmoHEEEUIDd8wFsDvozSANQTgc%2BfARWt%2BlF6H5aunXLCLMX6JOVf2RJ26VDpLhibKJMemp3YVQrlIGmCFFeIGjNB5vm5sMk7wv38%2FvNl7DH8JY9cE7NATeJRS9XLyEWOaGYK36DyZ4QXJ4Dt5%2Bbz9CHhrdTFLk%2BKnCTuEAaeiQqp%2Fp%2BliDOt7WC%2Bh1EgoHenyevjGer5epP2vcrDTNwDFrk1fhYErj1XIbH76vx3DhJv2eoF35sxllX6HOChgjzYMNCW%2BU78cyaflJOimC1G%2FZMPjttMQGOqUB0NKzqqFDNNY8KDcMhI7lgz7PKzkKQNq%2B%2FgfyusC73tNB1mfFFn8xzcNbER6Vn4F%2B57aRwo1WlZAGQCTAa6HjlPbmbPbuId4quridoKsFHPWsfhCnHFR%2FTjpTRB4YAMvYLgxc7VTwHCEAi7dxfX8qi3Grz8yjzdUwMo9geqBlPSQr98ngdtgAa1OO0aETlgEK2C4QpFesyRB8zzf%2Fp%2FB%2BAglcxhsD&X-Amz-Signature=130d4dc828985f28942605e16772a73afbf675443c7ef7150dbf2cb7454a74ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QESS6ND%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC19e6OPLMuw2%2Fl05dwwhU9r9kcqq7NrZcJOUEvEs50AIgXTKkqbFQDyO0J42vz9IQw0wKebKQ73Elr9ARNpQI6ewqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG03AFuNlBXZJHjMSrcA23J6DbMcU3BKPNueBXzoDHYAAVrXoSafapUjI5%2BWEHwy7fOsM5IqREJovPPYysyZ3worfJdrTgZ7IOY2jeiRVBBCzbIYlkTMIZwglCSlfD62QmgIQTcsmQseMgcoq6becWwNobimUX8rPoR4Y4cheA0vpCYVqGsHJ%2FT6KfUK%2FcIsRhU54GvGogkNE5FDmatNTNmoNeU2GMzn70BqbMwKoMhUIKbLW%2BM7dsIJc%2BSTMHmRwi6CnbihEIkn%2F0i1UtVwzNJ3GdctOBL%2FISQiZzwKRWHMtd96YFCSCmyYStpBOF6UASk5pP4uRifseYygV7RM2sTdR5PGUrTtrN7qVuJN8Q4Zw%2F2C2ajvj7lkksmoHEEEUIDd8wFsDvozSANQTgc%2BfARWt%2BlF6H5aunXLCLMX6JOVf2RJ26VDpLhibKJMemp3YVQrlIGmCFFeIGjNB5vm5sMk7wv38%2FvNl7DH8JY9cE7NATeJRS9XLyEWOaGYK36DyZ4QXJ4Dt5%2Bbz9CHhrdTFLk%2BKnCTuEAaeiQqp%2Fp%2BliDOt7WC%2Bh1EgoHenyevjGer5epP2vcrDTNwDFrk1fhYErj1XIbH76vx3DhJv2eoF35sxllX6HOChgjzYMNCW%2BU78cyaflJOimC1G%2FZMPjttMQGOqUB0NKzqqFDNNY8KDcMhI7lgz7PKzkKQNq%2B%2FgfyusC73tNB1mfFFn8xzcNbER6Vn4F%2B57aRwo1WlZAGQCTAa6HjlPbmbPbuId4quridoKsFHPWsfhCnHFR%2FTjpTRB4YAMvYLgxc7VTwHCEAi7dxfX8qi3Grz8yjzdUwMo9geqBlPSQr98ngdtgAa1OO0aETlgEK2C4QpFesyRB8zzf%2Fp%2FB%2BAglcxhsD&X-Amz-Signature=5386678844b86caedbbdd12c0fe5303004eda755ec99ab67a4e2dab84f6e5b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QESS6ND%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC19e6OPLMuw2%2Fl05dwwhU9r9kcqq7NrZcJOUEvEs50AIgXTKkqbFQDyO0J42vz9IQw0wKebKQ73Elr9ARNpQI6ewqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG03AFuNlBXZJHjMSrcA23J6DbMcU3BKPNueBXzoDHYAAVrXoSafapUjI5%2BWEHwy7fOsM5IqREJovPPYysyZ3worfJdrTgZ7IOY2jeiRVBBCzbIYlkTMIZwglCSlfD62QmgIQTcsmQseMgcoq6becWwNobimUX8rPoR4Y4cheA0vpCYVqGsHJ%2FT6KfUK%2FcIsRhU54GvGogkNE5FDmatNTNmoNeU2GMzn70BqbMwKoMhUIKbLW%2BM7dsIJc%2BSTMHmRwi6CnbihEIkn%2F0i1UtVwzNJ3GdctOBL%2FISQiZzwKRWHMtd96YFCSCmyYStpBOF6UASk5pP4uRifseYygV7RM2sTdR5PGUrTtrN7qVuJN8Q4Zw%2F2C2ajvj7lkksmoHEEEUIDd8wFsDvozSANQTgc%2BfARWt%2BlF6H5aunXLCLMX6JOVf2RJ26VDpLhibKJMemp3YVQrlIGmCFFeIGjNB5vm5sMk7wv38%2FvNl7DH8JY9cE7NATeJRS9XLyEWOaGYK36DyZ4QXJ4Dt5%2Bbz9CHhrdTFLk%2BKnCTuEAaeiQqp%2Fp%2BliDOt7WC%2Bh1EgoHenyevjGer5epP2vcrDTNwDFrk1fhYErj1XIbH76vx3DhJv2eoF35sxllX6HOChgjzYMNCW%2BU78cyaflJOimC1G%2FZMPjttMQGOqUB0NKzqqFDNNY8KDcMhI7lgz7PKzkKQNq%2B%2FgfyusC73tNB1mfFFn8xzcNbER6Vn4F%2B57aRwo1WlZAGQCTAa6HjlPbmbPbuId4quridoKsFHPWsfhCnHFR%2FTjpTRB4YAMvYLgxc7VTwHCEAi7dxfX8qi3Grz8yjzdUwMo9geqBlPSQr98ngdtgAa1OO0aETlgEK2C4QpFesyRB8zzf%2Fp%2FB%2BAglcxhsD&X-Amz-Signature=e2e48c2a288e2bfcdf8333b9c638ca0dc76f590b198b3b3b9c65a6d1dd1abc4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QESS6ND%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC19e6OPLMuw2%2Fl05dwwhU9r9kcqq7NrZcJOUEvEs50AIgXTKkqbFQDyO0J42vz9IQw0wKebKQ73Elr9ARNpQI6ewqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG03AFuNlBXZJHjMSrcA23J6DbMcU3BKPNueBXzoDHYAAVrXoSafapUjI5%2BWEHwy7fOsM5IqREJovPPYysyZ3worfJdrTgZ7IOY2jeiRVBBCzbIYlkTMIZwglCSlfD62QmgIQTcsmQseMgcoq6becWwNobimUX8rPoR4Y4cheA0vpCYVqGsHJ%2FT6KfUK%2FcIsRhU54GvGogkNE5FDmatNTNmoNeU2GMzn70BqbMwKoMhUIKbLW%2BM7dsIJc%2BSTMHmRwi6CnbihEIkn%2F0i1UtVwzNJ3GdctOBL%2FISQiZzwKRWHMtd96YFCSCmyYStpBOF6UASk5pP4uRifseYygV7RM2sTdR5PGUrTtrN7qVuJN8Q4Zw%2F2C2ajvj7lkksmoHEEEUIDd8wFsDvozSANQTgc%2BfARWt%2BlF6H5aunXLCLMX6JOVf2RJ26VDpLhibKJMemp3YVQrlIGmCFFeIGjNB5vm5sMk7wv38%2FvNl7DH8JY9cE7NATeJRS9XLyEWOaGYK36DyZ4QXJ4Dt5%2Bbz9CHhrdTFLk%2BKnCTuEAaeiQqp%2Fp%2BliDOt7WC%2Bh1EgoHenyevjGer5epP2vcrDTNwDFrk1fhYErj1XIbH76vx3DhJv2eoF35sxllX6HOChgjzYMNCW%2BU78cyaflJOimC1G%2FZMPjttMQGOqUB0NKzqqFDNNY8KDcMhI7lgz7PKzkKQNq%2B%2FgfyusC73tNB1mfFFn8xzcNbER6Vn4F%2B57aRwo1WlZAGQCTAa6HjlPbmbPbuId4quridoKsFHPWsfhCnHFR%2FTjpTRB4YAMvYLgxc7VTwHCEAi7dxfX8qi3Grz8yjzdUwMo9geqBlPSQr98ngdtgAa1OO0aETlgEK2C4QpFesyRB8zzf%2Fp%2FB%2BAglcxhsD&X-Amz-Signature=144847322e50c73cc740dc94481a992aec07b3e354c2cd9acbbb179301b67a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QESS6ND%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC19e6OPLMuw2%2Fl05dwwhU9r9kcqq7NrZcJOUEvEs50AIgXTKkqbFQDyO0J42vz9IQw0wKebKQ73Elr9ARNpQI6ewqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG03AFuNlBXZJHjMSrcA23J6DbMcU3BKPNueBXzoDHYAAVrXoSafapUjI5%2BWEHwy7fOsM5IqREJovPPYysyZ3worfJdrTgZ7IOY2jeiRVBBCzbIYlkTMIZwglCSlfD62QmgIQTcsmQseMgcoq6becWwNobimUX8rPoR4Y4cheA0vpCYVqGsHJ%2FT6KfUK%2FcIsRhU54GvGogkNE5FDmatNTNmoNeU2GMzn70BqbMwKoMhUIKbLW%2BM7dsIJc%2BSTMHmRwi6CnbihEIkn%2F0i1UtVwzNJ3GdctOBL%2FISQiZzwKRWHMtd96YFCSCmyYStpBOF6UASk5pP4uRifseYygV7RM2sTdR5PGUrTtrN7qVuJN8Q4Zw%2F2C2ajvj7lkksmoHEEEUIDd8wFsDvozSANQTgc%2BfARWt%2BlF6H5aunXLCLMX6JOVf2RJ26VDpLhibKJMemp3YVQrlIGmCFFeIGjNB5vm5sMk7wv38%2FvNl7DH8JY9cE7NATeJRS9XLyEWOaGYK36DyZ4QXJ4Dt5%2Bbz9CHhrdTFLk%2BKnCTuEAaeiQqp%2Fp%2BliDOt7WC%2Bh1EgoHenyevjGer5epP2vcrDTNwDFrk1fhYErj1XIbH76vx3DhJv2eoF35sxllX6HOChgjzYMNCW%2BU78cyaflJOimC1G%2FZMPjttMQGOqUB0NKzqqFDNNY8KDcMhI7lgz7PKzkKQNq%2B%2FgfyusC73tNB1mfFFn8xzcNbER6Vn4F%2B57aRwo1WlZAGQCTAa6HjlPbmbPbuId4quridoKsFHPWsfhCnHFR%2FTjpTRB4YAMvYLgxc7VTwHCEAi7dxfX8qi3Grz8yjzdUwMo9geqBlPSQr98ngdtgAa1OO0aETlgEK2C4QpFesyRB8zzf%2Fp%2FB%2BAglcxhsD&X-Amz-Signature=048ef0bcafb01fdb256f376bda043f95a75ee77a23288552492c26253285f5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QESS6ND%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T230938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC19e6OPLMuw2%2Fl05dwwhU9r9kcqq7NrZcJOUEvEs50AIgXTKkqbFQDyO0J42vz9IQw0wKebKQ73Elr9ARNpQI6ewqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCG03AFuNlBXZJHjMSrcA23J6DbMcU3BKPNueBXzoDHYAAVrXoSafapUjI5%2BWEHwy7fOsM5IqREJovPPYysyZ3worfJdrTgZ7IOY2jeiRVBBCzbIYlkTMIZwglCSlfD62QmgIQTcsmQseMgcoq6becWwNobimUX8rPoR4Y4cheA0vpCYVqGsHJ%2FT6KfUK%2FcIsRhU54GvGogkNE5FDmatNTNmoNeU2GMzn70BqbMwKoMhUIKbLW%2BM7dsIJc%2BSTMHmRwi6CnbihEIkn%2F0i1UtVwzNJ3GdctOBL%2FISQiZzwKRWHMtd96YFCSCmyYStpBOF6UASk5pP4uRifseYygV7RM2sTdR5PGUrTtrN7qVuJN8Q4Zw%2F2C2ajvj7lkksmoHEEEUIDd8wFsDvozSANQTgc%2BfARWt%2BlF6H5aunXLCLMX6JOVf2RJ26VDpLhibKJMemp3YVQrlIGmCFFeIGjNB5vm5sMk7wv38%2FvNl7DH8JY9cE7NATeJRS9XLyEWOaGYK36DyZ4QXJ4Dt5%2Bbz9CHhrdTFLk%2BKnCTuEAaeiQqp%2Fp%2BliDOt7WC%2Bh1EgoHenyevjGer5epP2vcrDTNwDFrk1fhYErj1XIbH76vx3DhJv2eoF35sxllX6HOChgjzYMNCW%2BU78cyaflJOimC1G%2FZMPjttMQGOqUB0NKzqqFDNNY8KDcMhI7lgz7PKzkKQNq%2B%2FgfyusC73tNB1mfFFn8xzcNbER6Vn4F%2B57aRwo1WlZAGQCTAa6HjlPbmbPbuId4quridoKsFHPWsfhCnHFR%2FTjpTRB4YAMvYLgxc7VTwHCEAi7dxfX8qi3Grz8yjzdUwMo9geqBlPSQr98ngdtgAa1OO0aETlgEK2C4QpFesyRB8zzf%2Fp%2FB%2BAglcxhsD&X-Amz-Signature=b1c60574c8fde1e6686b02a47d608ff7346b59aa8a0a7f644b7afc3a198f045f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
