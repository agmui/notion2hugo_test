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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKTDEO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDBLargA0JMHNCGXEmANiv5%2FKOWF4%2BdGW87kpm%2B%2BzLtGQIhANSsFjQcJ2eGllGojFR1kfqEvW1fGrVfRMr4D59mGXzHKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw57NfzkmFutLTT3cMq3ANswaDBm2KAPP73dpjFbYC%2FDju8sMEpthADuIGXCkTQgz83wKpSe%2FmLo%2FY0ls8OpmqaqzouJPA9IpXdm2na%2F1NlmF8fMMbn%2FweU8E0E88oiuvqxi4NKCelFzrsaIbmMrFv6I%2B2wE3PdvwRlzbJc6KV1cmS%2B9wt7UwOV2D4xWcweIQ5KmEpJay%2FzD7P2%2FUe%2Fykz3sI6xao8lweNrsUmSLItxEB9qqiBySoc5rnPposFSCDLfSeoeTYeaZzKD95gfIv9nLLmK%2BPvwK8Idn2dPu48%2BI5ev3osNU9lbtqzR%2B1JnV7fHlNUzu%2BkJaHU98HZikHfSfjsYesEHbB18MlzFOdzdop%2FOnfyVa7U8M8atwfIrPvF2bXvdxrdHKlJNfBXAbhsaOrtSLgif0G5HNBrhZQE7bqQzdLq6MsAw9M%2B7h0%2B5ga%2BA1%2FOFFt842bdkm6mwVx10qXgVEcrENXmj2RnF0aBUXsQaau5D%2B6DxRbd4jswRio0IK67c%2FI3RbM7095LsepjBc6bc0OzN0jdP6nxq0gc0JN8jYNMzhv%2F%2BSM%2FDmRoQLohQwIkk8YverCpxH7aeMKf1jWf8amKmZ2%2FBgaCATxOPeO93CSQ83MUWezIaUAi73%2BlLhdCkaZlsT6NT9jDK%2BtLEBjqkAVFcNprufYiiLcZODKB7RoCIVuSRlLOBbQDrlyFx%2BlIjophjj%2F%2FoloKFpexMwwBk%2BF2Bf1tOxoqYd1PFaiEgpbCVBND2eK6ZK96RrQAaTpN94x93wGfInkOTaDMS1UXOS1YHdCabU81x8kXRHbXggtHRjfjqecIjr8z9IruNc3BDsP%2BMA%2Fx%2FHRcPfHOo5IzgUwxK5K2mufpOUo6vlpls2Eqh%2BPi%2B&X-Amz-Signature=3b37ffbe113f01adbb1d412f3a3238ff5e9f6764c962b4e522148f433dff47e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKTDEO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDBLargA0JMHNCGXEmANiv5%2FKOWF4%2BdGW87kpm%2B%2BzLtGQIhANSsFjQcJ2eGllGojFR1kfqEvW1fGrVfRMr4D59mGXzHKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw57NfzkmFutLTT3cMq3ANswaDBm2KAPP73dpjFbYC%2FDju8sMEpthADuIGXCkTQgz83wKpSe%2FmLo%2FY0ls8OpmqaqzouJPA9IpXdm2na%2F1NlmF8fMMbn%2FweU8E0E88oiuvqxi4NKCelFzrsaIbmMrFv6I%2B2wE3PdvwRlzbJc6KV1cmS%2B9wt7UwOV2D4xWcweIQ5KmEpJay%2FzD7P2%2FUe%2Fykz3sI6xao8lweNrsUmSLItxEB9qqiBySoc5rnPposFSCDLfSeoeTYeaZzKD95gfIv9nLLmK%2BPvwK8Idn2dPu48%2BI5ev3osNU9lbtqzR%2B1JnV7fHlNUzu%2BkJaHU98HZikHfSfjsYesEHbB18MlzFOdzdop%2FOnfyVa7U8M8atwfIrPvF2bXvdxrdHKlJNfBXAbhsaOrtSLgif0G5HNBrhZQE7bqQzdLq6MsAw9M%2B7h0%2B5ga%2BA1%2FOFFt842bdkm6mwVx10qXgVEcrENXmj2RnF0aBUXsQaau5D%2B6DxRbd4jswRio0IK67c%2FI3RbM7095LsepjBc6bc0OzN0jdP6nxq0gc0JN8jYNMzhv%2F%2BSM%2FDmRoQLohQwIkk8YverCpxH7aeMKf1jWf8amKmZ2%2FBgaCATxOPeO93CSQ83MUWezIaUAi73%2BlLhdCkaZlsT6NT9jDK%2BtLEBjqkAVFcNprufYiiLcZODKB7RoCIVuSRlLOBbQDrlyFx%2BlIjophjj%2F%2FoloKFpexMwwBk%2BF2Bf1tOxoqYd1PFaiEgpbCVBND2eK6ZK96RrQAaTpN94x93wGfInkOTaDMS1UXOS1YHdCabU81x8kXRHbXggtHRjfjqecIjr8z9IruNc3BDsP%2BMA%2Fx%2FHRcPfHOo5IzgUwxK5K2mufpOUo6vlpls2Eqh%2BPi%2B&X-Amz-Signature=64b312e96bb9d7e0e615515323138c0185e534620ab2d561c979711a495ad28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKTDEO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDBLargA0JMHNCGXEmANiv5%2FKOWF4%2BdGW87kpm%2B%2BzLtGQIhANSsFjQcJ2eGllGojFR1kfqEvW1fGrVfRMr4D59mGXzHKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw57NfzkmFutLTT3cMq3ANswaDBm2KAPP73dpjFbYC%2FDju8sMEpthADuIGXCkTQgz83wKpSe%2FmLo%2FY0ls8OpmqaqzouJPA9IpXdm2na%2F1NlmF8fMMbn%2FweU8E0E88oiuvqxi4NKCelFzrsaIbmMrFv6I%2B2wE3PdvwRlzbJc6KV1cmS%2B9wt7UwOV2D4xWcweIQ5KmEpJay%2FzD7P2%2FUe%2Fykz3sI6xao8lweNrsUmSLItxEB9qqiBySoc5rnPposFSCDLfSeoeTYeaZzKD95gfIv9nLLmK%2BPvwK8Idn2dPu48%2BI5ev3osNU9lbtqzR%2B1JnV7fHlNUzu%2BkJaHU98HZikHfSfjsYesEHbB18MlzFOdzdop%2FOnfyVa7U8M8atwfIrPvF2bXvdxrdHKlJNfBXAbhsaOrtSLgif0G5HNBrhZQE7bqQzdLq6MsAw9M%2B7h0%2B5ga%2BA1%2FOFFt842bdkm6mwVx10qXgVEcrENXmj2RnF0aBUXsQaau5D%2B6DxRbd4jswRio0IK67c%2FI3RbM7095LsepjBc6bc0OzN0jdP6nxq0gc0JN8jYNMzhv%2F%2BSM%2FDmRoQLohQwIkk8YverCpxH7aeMKf1jWf8amKmZ2%2FBgaCATxOPeO93CSQ83MUWezIaUAi73%2BlLhdCkaZlsT6NT9jDK%2BtLEBjqkAVFcNprufYiiLcZODKB7RoCIVuSRlLOBbQDrlyFx%2BlIjophjj%2F%2FoloKFpexMwwBk%2BF2Bf1tOxoqYd1PFaiEgpbCVBND2eK6ZK96RrQAaTpN94x93wGfInkOTaDMS1UXOS1YHdCabU81x8kXRHbXggtHRjfjqecIjr8z9IruNc3BDsP%2BMA%2Fx%2FHRcPfHOo5IzgUwxK5K2mufpOUo6vlpls2Eqh%2BPi%2B&X-Amz-Signature=3bce37e1bf3d969f3e11d3cec61cd9fcb1ec8cdfd1867c1a4801337c8832c7f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKTDEO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDBLargA0JMHNCGXEmANiv5%2FKOWF4%2BdGW87kpm%2B%2BzLtGQIhANSsFjQcJ2eGllGojFR1kfqEvW1fGrVfRMr4D59mGXzHKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw57NfzkmFutLTT3cMq3ANswaDBm2KAPP73dpjFbYC%2FDju8sMEpthADuIGXCkTQgz83wKpSe%2FmLo%2FY0ls8OpmqaqzouJPA9IpXdm2na%2F1NlmF8fMMbn%2FweU8E0E88oiuvqxi4NKCelFzrsaIbmMrFv6I%2B2wE3PdvwRlzbJc6KV1cmS%2B9wt7UwOV2D4xWcweIQ5KmEpJay%2FzD7P2%2FUe%2Fykz3sI6xao8lweNrsUmSLItxEB9qqiBySoc5rnPposFSCDLfSeoeTYeaZzKD95gfIv9nLLmK%2BPvwK8Idn2dPu48%2BI5ev3osNU9lbtqzR%2B1JnV7fHlNUzu%2BkJaHU98HZikHfSfjsYesEHbB18MlzFOdzdop%2FOnfyVa7U8M8atwfIrPvF2bXvdxrdHKlJNfBXAbhsaOrtSLgif0G5HNBrhZQE7bqQzdLq6MsAw9M%2B7h0%2B5ga%2BA1%2FOFFt842bdkm6mwVx10qXgVEcrENXmj2RnF0aBUXsQaau5D%2B6DxRbd4jswRio0IK67c%2FI3RbM7095LsepjBc6bc0OzN0jdP6nxq0gc0JN8jYNMzhv%2F%2BSM%2FDmRoQLohQwIkk8YverCpxH7aeMKf1jWf8amKmZ2%2FBgaCATxOPeO93CSQ83MUWezIaUAi73%2BlLhdCkaZlsT6NT9jDK%2BtLEBjqkAVFcNprufYiiLcZODKB7RoCIVuSRlLOBbQDrlyFx%2BlIjophjj%2F%2FoloKFpexMwwBk%2BF2Bf1tOxoqYd1PFaiEgpbCVBND2eK6ZK96RrQAaTpN94x93wGfInkOTaDMS1UXOS1YHdCabU81x8kXRHbXggtHRjfjqecIjr8z9IruNc3BDsP%2BMA%2Fx%2FHRcPfHOo5IzgUwxK5K2mufpOUo6vlpls2Eqh%2BPi%2B&X-Amz-Signature=04c9fa61a6984c95df47033e7761f58dd31a9209a3237ff74f7dee5378551872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKTDEO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDBLargA0JMHNCGXEmANiv5%2FKOWF4%2BdGW87kpm%2B%2BzLtGQIhANSsFjQcJ2eGllGojFR1kfqEvW1fGrVfRMr4D59mGXzHKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw57NfzkmFutLTT3cMq3ANswaDBm2KAPP73dpjFbYC%2FDju8sMEpthADuIGXCkTQgz83wKpSe%2FmLo%2FY0ls8OpmqaqzouJPA9IpXdm2na%2F1NlmF8fMMbn%2FweU8E0E88oiuvqxi4NKCelFzrsaIbmMrFv6I%2B2wE3PdvwRlzbJc6KV1cmS%2B9wt7UwOV2D4xWcweIQ5KmEpJay%2FzD7P2%2FUe%2Fykz3sI6xao8lweNrsUmSLItxEB9qqiBySoc5rnPposFSCDLfSeoeTYeaZzKD95gfIv9nLLmK%2BPvwK8Idn2dPu48%2BI5ev3osNU9lbtqzR%2B1JnV7fHlNUzu%2BkJaHU98HZikHfSfjsYesEHbB18MlzFOdzdop%2FOnfyVa7U8M8atwfIrPvF2bXvdxrdHKlJNfBXAbhsaOrtSLgif0G5HNBrhZQE7bqQzdLq6MsAw9M%2B7h0%2B5ga%2BA1%2FOFFt842bdkm6mwVx10qXgVEcrENXmj2RnF0aBUXsQaau5D%2B6DxRbd4jswRio0IK67c%2FI3RbM7095LsepjBc6bc0OzN0jdP6nxq0gc0JN8jYNMzhv%2F%2BSM%2FDmRoQLohQwIkk8YverCpxH7aeMKf1jWf8amKmZ2%2FBgaCATxOPeO93CSQ83MUWezIaUAi73%2BlLhdCkaZlsT6NT9jDK%2BtLEBjqkAVFcNprufYiiLcZODKB7RoCIVuSRlLOBbQDrlyFx%2BlIjophjj%2F%2FoloKFpexMwwBk%2BF2Bf1tOxoqYd1PFaiEgpbCVBND2eK6ZK96RrQAaTpN94x93wGfInkOTaDMS1UXOS1YHdCabU81x8kXRHbXggtHRjfjqecIjr8z9IruNc3BDsP%2BMA%2Fx%2FHRcPfHOo5IzgUwxK5K2mufpOUo6vlpls2Eqh%2BPi%2B&X-Amz-Signature=0a9e0c944cab324736227a61a79adbab7bfc50127264293c718048f20b5c57a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKTDEO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDBLargA0JMHNCGXEmANiv5%2FKOWF4%2BdGW87kpm%2B%2BzLtGQIhANSsFjQcJ2eGllGojFR1kfqEvW1fGrVfRMr4D59mGXzHKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw57NfzkmFutLTT3cMq3ANswaDBm2KAPP73dpjFbYC%2FDju8sMEpthADuIGXCkTQgz83wKpSe%2FmLo%2FY0ls8OpmqaqzouJPA9IpXdm2na%2F1NlmF8fMMbn%2FweU8E0E88oiuvqxi4NKCelFzrsaIbmMrFv6I%2B2wE3PdvwRlzbJc6KV1cmS%2B9wt7UwOV2D4xWcweIQ5KmEpJay%2FzD7P2%2FUe%2Fykz3sI6xao8lweNrsUmSLItxEB9qqiBySoc5rnPposFSCDLfSeoeTYeaZzKD95gfIv9nLLmK%2BPvwK8Idn2dPu48%2BI5ev3osNU9lbtqzR%2B1JnV7fHlNUzu%2BkJaHU98HZikHfSfjsYesEHbB18MlzFOdzdop%2FOnfyVa7U8M8atwfIrPvF2bXvdxrdHKlJNfBXAbhsaOrtSLgif0G5HNBrhZQE7bqQzdLq6MsAw9M%2B7h0%2B5ga%2BA1%2FOFFt842bdkm6mwVx10qXgVEcrENXmj2RnF0aBUXsQaau5D%2B6DxRbd4jswRio0IK67c%2FI3RbM7095LsepjBc6bc0OzN0jdP6nxq0gc0JN8jYNMzhv%2F%2BSM%2FDmRoQLohQwIkk8YverCpxH7aeMKf1jWf8amKmZ2%2FBgaCATxOPeO93CSQ83MUWezIaUAi73%2BlLhdCkaZlsT6NT9jDK%2BtLEBjqkAVFcNprufYiiLcZODKB7RoCIVuSRlLOBbQDrlyFx%2BlIjophjj%2F%2FoloKFpexMwwBk%2BF2Bf1tOxoqYd1PFaiEgpbCVBND2eK6ZK96RrQAaTpN94x93wGfInkOTaDMS1UXOS1YHdCabU81x8kXRHbXggtHRjfjqecIjr8z9IruNc3BDsP%2BMA%2Fx%2FHRcPfHOo5IzgUwxK5K2mufpOUo6vlpls2Eqh%2BPi%2B&X-Amz-Signature=018e8459d28875dc664b410cc185ad29b2d7c49cf8ce07aea3413fb75b4f886f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKTDEO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDBLargA0JMHNCGXEmANiv5%2FKOWF4%2BdGW87kpm%2B%2BzLtGQIhANSsFjQcJ2eGllGojFR1kfqEvW1fGrVfRMr4D59mGXzHKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw57NfzkmFutLTT3cMq3ANswaDBm2KAPP73dpjFbYC%2FDju8sMEpthADuIGXCkTQgz83wKpSe%2FmLo%2FY0ls8OpmqaqzouJPA9IpXdm2na%2F1NlmF8fMMbn%2FweU8E0E88oiuvqxi4NKCelFzrsaIbmMrFv6I%2B2wE3PdvwRlzbJc6KV1cmS%2B9wt7UwOV2D4xWcweIQ5KmEpJay%2FzD7P2%2FUe%2Fykz3sI6xao8lweNrsUmSLItxEB9qqiBySoc5rnPposFSCDLfSeoeTYeaZzKD95gfIv9nLLmK%2BPvwK8Idn2dPu48%2BI5ev3osNU9lbtqzR%2B1JnV7fHlNUzu%2BkJaHU98HZikHfSfjsYesEHbB18MlzFOdzdop%2FOnfyVa7U8M8atwfIrPvF2bXvdxrdHKlJNfBXAbhsaOrtSLgif0G5HNBrhZQE7bqQzdLq6MsAw9M%2B7h0%2B5ga%2BA1%2FOFFt842bdkm6mwVx10qXgVEcrENXmj2RnF0aBUXsQaau5D%2B6DxRbd4jswRio0IK67c%2FI3RbM7095LsepjBc6bc0OzN0jdP6nxq0gc0JN8jYNMzhv%2F%2BSM%2FDmRoQLohQwIkk8YverCpxH7aeMKf1jWf8amKmZ2%2FBgaCATxOPeO93CSQ83MUWezIaUAi73%2BlLhdCkaZlsT6NT9jDK%2BtLEBjqkAVFcNprufYiiLcZODKB7RoCIVuSRlLOBbQDrlyFx%2BlIjophjj%2F%2FoloKFpexMwwBk%2BF2Bf1tOxoqYd1PFaiEgpbCVBND2eK6ZK96RrQAaTpN94x93wGfInkOTaDMS1UXOS1YHdCabU81x8kXRHbXggtHRjfjqecIjr8z9IruNc3BDsP%2BMA%2Fx%2FHRcPfHOo5IzgUwxK5K2mufpOUo6vlpls2Eqh%2BPi%2B&X-Amz-Signature=07263157993112750cbd31fbf3493db107404a60c2e18779ca0325d407866679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVCKTDEO%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDBLargA0JMHNCGXEmANiv5%2FKOWF4%2BdGW87kpm%2B%2BzLtGQIhANSsFjQcJ2eGllGojFR1kfqEvW1fGrVfRMr4D59mGXzHKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw57NfzkmFutLTT3cMq3ANswaDBm2KAPP73dpjFbYC%2FDju8sMEpthADuIGXCkTQgz83wKpSe%2FmLo%2FY0ls8OpmqaqzouJPA9IpXdm2na%2F1NlmF8fMMbn%2FweU8E0E88oiuvqxi4NKCelFzrsaIbmMrFv6I%2B2wE3PdvwRlzbJc6KV1cmS%2B9wt7UwOV2D4xWcweIQ5KmEpJay%2FzD7P2%2FUe%2Fykz3sI6xao8lweNrsUmSLItxEB9qqiBySoc5rnPposFSCDLfSeoeTYeaZzKD95gfIv9nLLmK%2BPvwK8Idn2dPu48%2BI5ev3osNU9lbtqzR%2B1JnV7fHlNUzu%2BkJaHU98HZikHfSfjsYesEHbB18MlzFOdzdop%2FOnfyVa7U8M8atwfIrPvF2bXvdxrdHKlJNfBXAbhsaOrtSLgif0G5HNBrhZQE7bqQzdLq6MsAw9M%2B7h0%2B5ga%2BA1%2FOFFt842bdkm6mwVx10qXgVEcrENXmj2RnF0aBUXsQaau5D%2B6DxRbd4jswRio0IK67c%2FI3RbM7095LsepjBc6bc0OzN0jdP6nxq0gc0JN8jYNMzhv%2F%2BSM%2FDmRoQLohQwIkk8YverCpxH7aeMKf1jWf8amKmZ2%2FBgaCATxOPeO93CSQ83MUWezIaUAi73%2BlLhdCkaZlsT6NT9jDK%2BtLEBjqkAVFcNprufYiiLcZODKB7RoCIVuSRlLOBbQDrlyFx%2BlIjophjj%2F%2FoloKFpexMwwBk%2BF2Bf1tOxoqYd1PFaiEgpbCVBND2eK6ZK96RrQAaTpN94x93wGfInkOTaDMS1UXOS1YHdCabU81x8kXRHbXggtHRjfjqecIjr8z9IruNc3BDsP%2BMA%2Fx%2FHRcPfHOo5IzgUwxK5K2mufpOUo6vlpls2Eqh%2BPi%2B&X-Amz-Signature=979a54dc937f23fa9313128a1cdf8827eb39bd1881c91ade45b6efb7c1085f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
