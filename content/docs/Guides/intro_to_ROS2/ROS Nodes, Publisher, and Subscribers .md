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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBUAPRL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKa%2FepZaHG7MB%2BMwAac%2F%2Fp0874tOwpZ6EIOdwqRONXAIgdoFwHOzbF6EuMHS6y9nrN8mcvWWGWBEiKHoVHRBZBqQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVFQZtXbXxBzdsPvSrcA9Ku8u1KfjohT9ihiaXxbsISBGLTU53MYHL2J0KTQAQNXrz2juiT%2FiT8jHqZBjMoXEJSw2Mhf%2BUj1TTaD7LLOVE0Mp4M447qArPHG0KOsvWVwWduK05KNV1yUb3PLPiAi0tfVR3wwolsTGqdgtx8Y%2BD0zvxD3P8dlWKBlpPDrMzoXCTVcls%2FEfFTukmHPBIQOPv4R%2F4vHa4AgO4dHd0yyb46XJ4GKVbjQfH3OwvwGVwuYA8ZdmxzvyLezIlYBePpjQnTDf%2BaqBs38eSFDS%2FTW1B7SVVRPNPVfwhJBFXFFltp%2FtPIB%2FP3FxN60QhzTfICrtcsGBaZWG62GDayC05%2BdPC1UMdJmS8cgRzlfWZchGCcUarbMwH93zsFAZCJiZJGImIPDRzZOEsywJLmSLhjhe4%2B%2FJQNkbVcii6IuJwOocfVhq9oGQ8LpiQdGhWbGlnSOx%2Fx3WrCMHN0BwTfAaB9Lrg%2FZlkttysLP5x0OBimYZZ4T0aNVxgZPV9x9qisc%2BSjKhpIe9ECLx1QmVU3pmLc8dthpBdpQFccPVY9kPVF2Qw4L9GETDXjn1on%2BG%2FZq7QBmFvYVFdAxErlgkF8Ft28pzHzdEeblaswAceZz32sRedP6NFD%2BYC%2B0UDF9GfJMLvZpr0GOqUBFas7XkqSHEJL5fhyNdgTsUSn04ZJ6u0d%2F4aX4RWocU0ZjS6fglOrNWJDtXYewfHCdCkDjF0Sc3LLVG3oSahp3dkWtse4xMIa%2BTJuYRLExD%2FoJ8tXgjzchNxccYBLcQ%2BTuEjqjIoWL%2BevmINuqSYaljrWR5jxLCS4eq%2BnoUzDJOkxxlyJoRPbkJedvqJMs3ruqJmv70a%2FZfZw2uE8375fVhK8Z%2B2h&X-Amz-Signature=2cc9c0d3b9777c2ebb0650dd6b8292ee8ad39dd5f0d052a57d241327194859ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBUAPRL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKa%2FepZaHG7MB%2BMwAac%2F%2Fp0874tOwpZ6EIOdwqRONXAIgdoFwHOzbF6EuMHS6y9nrN8mcvWWGWBEiKHoVHRBZBqQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVFQZtXbXxBzdsPvSrcA9Ku8u1KfjohT9ihiaXxbsISBGLTU53MYHL2J0KTQAQNXrz2juiT%2FiT8jHqZBjMoXEJSw2Mhf%2BUj1TTaD7LLOVE0Mp4M447qArPHG0KOsvWVwWduK05KNV1yUb3PLPiAi0tfVR3wwolsTGqdgtx8Y%2BD0zvxD3P8dlWKBlpPDrMzoXCTVcls%2FEfFTukmHPBIQOPv4R%2F4vHa4AgO4dHd0yyb46XJ4GKVbjQfH3OwvwGVwuYA8ZdmxzvyLezIlYBePpjQnTDf%2BaqBs38eSFDS%2FTW1B7SVVRPNPVfwhJBFXFFltp%2FtPIB%2FP3FxN60QhzTfICrtcsGBaZWG62GDayC05%2BdPC1UMdJmS8cgRzlfWZchGCcUarbMwH93zsFAZCJiZJGImIPDRzZOEsywJLmSLhjhe4%2B%2FJQNkbVcii6IuJwOocfVhq9oGQ8LpiQdGhWbGlnSOx%2Fx3WrCMHN0BwTfAaB9Lrg%2FZlkttysLP5x0OBimYZZ4T0aNVxgZPV9x9qisc%2BSjKhpIe9ECLx1QmVU3pmLc8dthpBdpQFccPVY9kPVF2Qw4L9GETDXjn1on%2BG%2FZq7QBmFvYVFdAxErlgkF8Ft28pzHzdEeblaswAceZz32sRedP6NFD%2BYC%2B0UDF9GfJMLvZpr0GOqUBFas7XkqSHEJL5fhyNdgTsUSn04ZJ6u0d%2F4aX4RWocU0ZjS6fglOrNWJDtXYewfHCdCkDjF0Sc3LLVG3oSahp3dkWtse4xMIa%2BTJuYRLExD%2FoJ8tXgjzchNxccYBLcQ%2BTuEjqjIoWL%2BevmINuqSYaljrWR5jxLCS4eq%2BnoUzDJOkxxlyJoRPbkJedvqJMs3ruqJmv70a%2FZfZw2uE8375fVhK8Z%2B2h&X-Amz-Signature=0b352d1a8f5dff22874dd8fac991da61d26d3834ff07e72be15f89d5b2071100&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBUAPRL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKa%2FepZaHG7MB%2BMwAac%2F%2Fp0874tOwpZ6EIOdwqRONXAIgdoFwHOzbF6EuMHS6y9nrN8mcvWWGWBEiKHoVHRBZBqQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVFQZtXbXxBzdsPvSrcA9Ku8u1KfjohT9ihiaXxbsISBGLTU53MYHL2J0KTQAQNXrz2juiT%2FiT8jHqZBjMoXEJSw2Mhf%2BUj1TTaD7LLOVE0Mp4M447qArPHG0KOsvWVwWduK05KNV1yUb3PLPiAi0tfVR3wwolsTGqdgtx8Y%2BD0zvxD3P8dlWKBlpPDrMzoXCTVcls%2FEfFTukmHPBIQOPv4R%2F4vHa4AgO4dHd0yyb46XJ4GKVbjQfH3OwvwGVwuYA8ZdmxzvyLezIlYBePpjQnTDf%2BaqBs38eSFDS%2FTW1B7SVVRPNPVfwhJBFXFFltp%2FtPIB%2FP3FxN60QhzTfICrtcsGBaZWG62GDayC05%2BdPC1UMdJmS8cgRzlfWZchGCcUarbMwH93zsFAZCJiZJGImIPDRzZOEsywJLmSLhjhe4%2B%2FJQNkbVcii6IuJwOocfVhq9oGQ8LpiQdGhWbGlnSOx%2Fx3WrCMHN0BwTfAaB9Lrg%2FZlkttysLP5x0OBimYZZ4T0aNVxgZPV9x9qisc%2BSjKhpIe9ECLx1QmVU3pmLc8dthpBdpQFccPVY9kPVF2Qw4L9GETDXjn1on%2BG%2FZq7QBmFvYVFdAxErlgkF8Ft28pzHzdEeblaswAceZz32sRedP6NFD%2BYC%2B0UDF9GfJMLvZpr0GOqUBFas7XkqSHEJL5fhyNdgTsUSn04ZJ6u0d%2F4aX4RWocU0ZjS6fglOrNWJDtXYewfHCdCkDjF0Sc3LLVG3oSahp3dkWtse4xMIa%2BTJuYRLExD%2FoJ8tXgjzchNxccYBLcQ%2BTuEjqjIoWL%2BevmINuqSYaljrWR5jxLCS4eq%2BnoUzDJOkxxlyJoRPbkJedvqJMs3ruqJmv70a%2FZfZw2uE8375fVhK8Z%2B2h&X-Amz-Signature=813ad9272a77bcd844ab4ea6dc495ec67943a5855a354f13e62689611bb34ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBUAPRL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKa%2FepZaHG7MB%2BMwAac%2F%2Fp0874tOwpZ6EIOdwqRONXAIgdoFwHOzbF6EuMHS6y9nrN8mcvWWGWBEiKHoVHRBZBqQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVFQZtXbXxBzdsPvSrcA9Ku8u1KfjohT9ihiaXxbsISBGLTU53MYHL2J0KTQAQNXrz2juiT%2FiT8jHqZBjMoXEJSw2Mhf%2BUj1TTaD7LLOVE0Mp4M447qArPHG0KOsvWVwWduK05KNV1yUb3PLPiAi0tfVR3wwolsTGqdgtx8Y%2BD0zvxD3P8dlWKBlpPDrMzoXCTVcls%2FEfFTukmHPBIQOPv4R%2F4vHa4AgO4dHd0yyb46XJ4GKVbjQfH3OwvwGVwuYA8ZdmxzvyLezIlYBePpjQnTDf%2BaqBs38eSFDS%2FTW1B7SVVRPNPVfwhJBFXFFltp%2FtPIB%2FP3FxN60QhzTfICrtcsGBaZWG62GDayC05%2BdPC1UMdJmS8cgRzlfWZchGCcUarbMwH93zsFAZCJiZJGImIPDRzZOEsywJLmSLhjhe4%2B%2FJQNkbVcii6IuJwOocfVhq9oGQ8LpiQdGhWbGlnSOx%2Fx3WrCMHN0BwTfAaB9Lrg%2FZlkttysLP5x0OBimYZZ4T0aNVxgZPV9x9qisc%2BSjKhpIe9ECLx1QmVU3pmLc8dthpBdpQFccPVY9kPVF2Qw4L9GETDXjn1on%2BG%2FZq7QBmFvYVFdAxErlgkF8Ft28pzHzdEeblaswAceZz32sRedP6NFD%2BYC%2B0UDF9GfJMLvZpr0GOqUBFas7XkqSHEJL5fhyNdgTsUSn04ZJ6u0d%2F4aX4RWocU0ZjS6fglOrNWJDtXYewfHCdCkDjF0Sc3LLVG3oSahp3dkWtse4xMIa%2BTJuYRLExD%2FoJ8tXgjzchNxccYBLcQ%2BTuEjqjIoWL%2BevmINuqSYaljrWR5jxLCS4eq%2BnoUzDJOkxxlyJoRPbkJedvqJMs3ruqJmv70a%2FZfZw2uE8375fVhK8Z%2B2h&X-Amz-Signature=b67a9beaee81577b5cb149a573bf278e7ff6bc03e31a5d546a423ded9b6ff534&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBUAPRL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKa%2FepZaHG7MB%2BMwAac%2F%2Fp0874tOwpZ6EIOdwqRONXAIgdoFwHOzbF6EuMHS6y9nrN8mcvWWGWBEiKHoVHRBZBqQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVFQZtXbXxBzdsPvSrcA9Ku8u1KfjohT9ihiaXxbsISBGLTU53MYHL2J0KTQAQNXrz2juiT%2FiT8jHqZBjMoXEJSw2Mhf%2BUj1TTaD7LLOVE0Mp4M447qArPHG0KOsvWVwWduK05KNV1yUb3PLPiAi0tfVR3wwolsTGqdgtx8Y%2BD0zvxD3P8dlWKBlpPDrMzoXCTVcls%2FEfFTukmHPBIQOPv4R%2F4vHa4AgO4dHd0yyb46XJ4GKVbjQfH3OwvwGVwuYA8ZdmxzvyLezIlYBePpjQnTDf%2BaqBs38eSFDS%2FTW1B7SVVRPNPVfwhJBFXFFltp%2FtPIB%2FP3FxN60QhzTfICrtcsGBaZWG62GDayC05%2BdPC1UMdJmS8cgRzlfWZchGCcUarbMwH93zsFAZCJiZJGImIPDRzZOEsywJLmSLhjhe4%2B%2FJQNkbVcii6IuJwOocfVhq9oGQ8LpiQdGhWbGlnSOx%2Fx3WrCMHN0BwTfAaB9Lrg%2FZlkttysLP5x0OBimYZZ4T0aNVxgZPV9x9qisc%2BSjKhpIe9ECLx1QmVU3pmLc8dthpBdpQFccPVY9kPVF2Qw4L9GETDXjn1on%2BG%2FZq7QBmFvYVFdAxErlgkF8Ft28pzHzdEeblaswAceZz32sRedP6NFD%2BYC%2B0UDF9GfJMLvZpr0GOqUBFas7XkqSHEJL5fhyNdgTsUSn04ZJ6u0d%2F4aX4RWocU0ZjS6fglOrNWJDtXYewfHCdCkDjF0Sc3LLVG3oSahp3dkWtse4xMIa%2BTJuYRLExD%2FoJ8tXgjzchNxccYBLcQ%2BTuEjqjIoWL%2BevmINuqSYaljrWR5jxLCS4eq%2BnoUzDJOkxxlyJoRPbkJedvqJMs3ruqJmv70a%2FZfZw2uE8375fVhK8Z%2B2h&X-Amz-Signature=45fc266b6087d71e0030c58674c0b2b3772b0d5214ca28a4d13350968a6f1a72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBUAPRL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKa%2FepZaHG7MB%2BMwAac%2F%2Fp0874tOwpZ6EIOdwqRONXAIgdoFwHOzbF6EuMHS6y9nrN8mcvWWGWBEiKHoVHRBZBqQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVFQZtXbXxBzdsPvSrcA9Ku8u1KfjohT9ihiaXxbsISBGLTU53MYHL2J0KTQAQNXrz2juiT%2FiT8jHqZBjMoXEJSw2Mhf%2BUj1TTaD7LLOVE0Mp4M447qArPHG0KOsvWVwWduK05KNV1yUb3PLPiAi0tfVR3wwolsTGqdgtx8Y%2BD0zvxD3P8dlWKBlpPDrMzoXCTVcls%2FEfFTukmHPBIQOPv4R%2F4vHa4AgO4dHd0yyb46XJ4GKVbjQfH3OwvwGVwuYA8ZdmxzvyLezIlYBePpjQnTDf%2BaqBs38eSFDS%2FTW1B7SVVRPNPVfwhJBFXFFltp%2FtPIB%2FP3FxN60QhzTfICrtcsGBaZWG62GDayC05%2BdPC1UMdJmS8cgRzlfWZchGCcUarbMwH93zsFAZCJiZJGImIPDRzZOEsywJLmSLhjhe4%2B%2FJQNkbVcii6IuJwOocfVhq9oGQ8LpiQdGhWbGlnSOx%2Fx3WrCMHN0BwTfAaB9Lrg%2FZlkttysLP5x0OBimYZZ4T0aNVxgZPV9x9qisc%2BSjKhpIe9ECLx1QmVU3pmLc8dthpBdpQFccPVY9kPVF2Qw4L9GETDXjn1on%2BG%2FZq7QBmFvYVFdAxErlgkF8Ft28pzHzdEeblaswAceZz32sRedP6NFD%2BYC%2B0UDF9GfJMLvZpr0GOqUBFas7XkqSHEJL5fhyNdgTsUSn04ZJ6u0d%2F4aX4RWocU0ZjS6fglOrNWJDtXYewfHCdCkDjF0Sc3LLVG3oSahp3dkWtse4xMIa%2BTJuYRLExD%2FoJ8tXgjzchNxccYBLcQ%2BTuEjqjIoWL%2BevmINuqSYaljrWR5jxLCS4eq%2BnoUzDJOkxxlyJoRPbkJedvqJMs3ruqJmv70a%2FZfZw2uE8375fVhK8Z%2B2h&X-Amz-Signature=5aecf376781b30ad6d45098198556387bd6b92f128a555231ddc92db064f9578&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBUAPRL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKa%2FepZaHG7MB%2BMwAac%2F%2Fp0874tOwpZ6EIOdwqRONXAIgdoFwHOzbF6EuMHS6y9nrN8mcvWWGWBEiKHoVHRBZBqQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVFQZtXbXxBzdsPvSrcA9Ku8u1KfjohT9ihiaXxbsISBGLTU53MYHL2J0KTQAQNXrz2juiT%2FiT8jHqZBjMoXEJSw2Mhf%2BUj1TTaD7LLOVE0Mp4M447qArPHG0KOsvWVwWduK05KNV1yUb3PLPiAi0tfVR3wwolsTGqdgtx8Y%2BD0zvxD3P8dlWKBlpPDrMzoXCTVcls%2FEfFTukmHPBIQOPv4R%2F4vHa4AgO4dHd0yyb46XJ4GKVbjQfH3OwvwGVwuYA8ZdmxzvyLezIlYBePpjQnTDf%2BaqBs38eSFDS%2FTW1B7SVVRPNPVfwhJBFXFFltp%2FtPIB%2FP3FxN60QhzTfICrtcsGBaZWG62GDayC05%2BdPC1UMdJmS8cgRzlfWZchGCcUarbMwH93zsFAZCJiZJGImIPDRzZOEsywJLmSLhjhe4%2B%2FJQNkbVcii6IuJwOocfVhq9oGQ8LpiQdGhWbGlnSOx%2Fx3WrCMHN0BwTfAaB9Lrg%2FZlkttysLP5x0OBimYZZ4T0aNVxgZPV9x9qisc%2BSjKhpIe9ECLx1QmVU3pmLc8dthpBdpQFccPVY9kPVF2Qw4L9GETDXjn1on%2BG%2FZq7QBmFvYVFdAxErlgkF8Ft28pzHzdEeblaswAceZz32sRedP6NFD%2BYC%2B0UDF9GfJMLvZpr0GOqUBFas7XkqSHEJL5fhyNdgTsUSn04ZJ6u0d%2F4aX4RWocU0ZjS6fglOrNWJDtXYewfHCdCkDjF0Sc3LLVG3oSahp3dkWtse4xMIa%2BTJuYRLExD%2FoJ8tXgjzchNxccYBLcQ%2BTuEjqjIoWL%2BevmINuqSYaljrWR5jxLCS4eq%2BnoUzDJOkxxlyJoRPbkJedvqJMs3ruqJmv70a%2FZfZw2uE8375fVhK8Z%2B2h&X-Amz-Signature=cac2d1ae8197dac78363813afdb3fe3b6074cd58696a67fd012075210b11d658&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIBUAPRL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKa%2FepZaHG7MB%2BMwAac%2F%2Fp0874tOwpZ6EIOdwqRONXAIgdoFwHOzbF6EuMHS6y9nrN8mcvWWGWBEiKHoVHRBZBqQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVFQZtXbXxBzdsPvSrcA9Ku8u1KfjohT9ihiaXxbsISBGLTU53MYHL2J0KTQAQNXrz2juiT%2FiT8jHqZBjMoXEJSw2Mhf%2BUj1TTaD7LLOVE0Mp4M447qArPHG0KOsvWVwWduK05KNV1yUb3PLPiAi0tfVR3wwolsTGqdgtx8Y%2BD0zvxD3P8dlWKBlpPDrMzoXCTVcls%2FEfFTukmHPBIQOPv4R%2F4vHa4AgO4dHd0yyb46XJ4GKVbjQfH3OwvwGVwuYA8ZdmxzvyLezIlYBePpjQnTDf%2BaqBs38eSFDS%2FTW1B7SVVRPNPVfwhJBFXFFltp%2FtPIB%2FP3FxN60QhzTfICrtcsGBaZWG62GDayC05%2BdPC1UMdJmS8cgRzlfWZchGCcUarbMwH93zsFAZCJiZJGImIPDRzZOEsywJLmSLhjhe4%2B%2FJQNkbVcii6IuJwOocfVhq9oGQ8LpiQdGhWbGlnSOx%2Fx3WrCMHN0BwTfAaB9Lrg%2FZlkttysLP5x0OBimYZZ4T0aNVxgZPV9x9qisc%2BSjKhpIe9ECLx1QmVU3pmLc8dthpBdpQFccPVY9kPVF2Qw4L9GETDXjn1on%2BG%2FZq7QBmFvYVFdAxErlgkF8Ft28pzHzdEeblaswAceZz32sRedP6NFD%2BYC%2B0UDF9GfJMLvZpr0GOqUBFas7XkqSHEJL5fhyNdgTsUSn04ZJ6u0d%2F4aX4RWocU0ZjS6fglOrNWJDtXYewfHCdCkDjF0Sc3LLVG3oSahp3dkWtse4xMIa%2BTJuYRLExD%2FoJ8tXgjzchNxccYBLcQ%2BTuEjqjIoWL%2BevmINuqSYaljrWR5jxLCS4eq%2BnoUzDJOkxxlyJoRPbkJedvqJMs3ruqJmv70a%2FZfZw2uE8375fVhK8Z%2B2h&X-Amz-Signature=af73b7b2fc483e0aa31ceb88d0805b0909189b9cd7b0cd520eba0a9b6adc97a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
