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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNKJQRD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs1frA5b1sYCyyhH2LOwp6RA3RIpf2lGRPUYC7UgoQwIgZm4q7Ajrik0aSQiXpP5Q2uta8GDNrypMD5%2FKlzaKSjkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDK00x1ONXpJWXDLebircA2fFUd0P0iz%2B3UnqVxJF%2Bw2k2ud%2BSZ%2FoY79KIv1pGwCDHXM8NW9x%2BswtgxWj1lhk4znbWgyZZM7XndM0imG92hsA1kASTgRgZhdzcWbYlEO%2F1FvAbXwiFLv3zEcijVAV4Dug%2BEl3tQTT%2B1hpeQqQafnYI1UTT9qZC%2Ftu7uihaDYXW0uX0puvNphMpOIZs%2FAAN2mlFtI4YDlUaPVPv0nVkp2Av0XUX9nMTuc4CKDuZH23906GrWlXXBnqAXN6GOSi8dAGt7fDTgKOy%2FRJ98LHKuzfDXzW7xdnbpOiz0CGVHe%2FYg4MHk1M374yUlvkGA52Cl%2B7OCKVAQRWXqOdfBiTpcoPb3yFkXEST%2F3XOHpfihYbdFj46DEp6mD%2Fycuahw4FVfA%2BlvC5gNfTcJ33Ga13pH67dEK3MHa6ApH%2FIvJOvC4r3DdkuQpiR%2Bcs71iNpfIdxyC%2FCphvASJlPDWHSLPy0x%2BWgz95oqidoGjjm6%2Bt%2FnwIbW7P7FpTyAEhmGYCAtQBf8I5jLSpRvtpq9hGkzyY3xtPCPidoow4OXhZBfjJbuUIHP6Ey1k2eoWN%2BJ0aY5Acb%2BKVWXO35MeX5nn3vGq59Lxpg5IASCYUquARuhqrBxP0saMdiA1Gk8FxrQISMK2AusQGOqUBOD5ioS1plHJeoVUGwviGwvtGYswvGSsnoKo2GltbFOeps3HrAUVQtl64S71mqKbP%2FL5xxUMWZzogEdWJWh4jGs5M3NEyuvovhnLqFOsQdJqL%2F0BMd8U%2FTKSTu7VHfcAovYPHhtQEc2xurm1J8ruX2ELInGBAcvyWARTitqLEm8xc8XXsZOkeySgKXo5HP%2BJ9V%2FTI1NAZJY1Qje3yGZ1FQW15qxqe&X-Amz-Signature=dedaaa65249e0381206ffd6924e3d56b420ef8a0c9297684bc5cda3081d5cc7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNKJQRD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs1frA5b1sYCyyhH2LOwp6RA3RIpf2lGRPUYC7UgoQwIgZm4q7Ajrik0aSQiXpP5Q2uta8GDNrypMD5%2FKlzaKSjkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDK00x1ONXpJWXDLebircA2fFUd0P0iz%2B3UnqVxJF%2Bw2k2ud%2BSZ%2FoY79KIv1pGwCDHXM8NW9x%2BswtgxWj1lhk4znbWgyZZM7XndM0imG92hsA1kASTgRgZhdzcWbYlEO%2F1FvAbXwiFLv3zEcijVAV4Dug%2BEl3tQTT%2B1hpeQqQafnYI1UTT9qZC%2Ftu7uihaDYXW0uX0puvNphMpOIZs%2FAAN2mlFtI4YDlUaPVPv0nVkp2Av0XUX9nMTuc4CKDuZH23906GrWlXXBnqAXN6GOSi8dAGt7fDTgKOy%2FRJ98LHKuzfDXzW7xdnbpOiz0CGVHe%2FYg4MHk1M374yUlvkGA52Cl%2B7OCKVAQRWXqOdfBiTpcoPb3yFkXEST%2F3XOHpfihYbdFj46DEp6mD%2Fycuahw4FVfA%2BlvC5gNfTcJ33Ga13pH67dEK3MHa6ApH%2FIvJOvC4r3DdkuQpiR%2Bcs71iNpfIdxyC%2FCphvASJlPDWHSLPy0x%2BWgz95oqidoGjjm6%2Bt%2FnwIbW7P7FpTyAEhmGYCAtQBf8I5jLSpRvtpq9hGkzyY3xtPCPidoow4OXhZBfjJbuUIHP6Ey1k2eoWN%2BJ0aY5Acb%2BKVWXO35MeX5nn3vGq59Lxpg5IASCYUquARuhqrBxP0saMdiA1Gk8FxrQISMK2AusQGOqUBOD5ioS1plHJeoVUGwviGwvtGYswvGSsnoKo2GltbFOeps3HrAUVQtl64S71mqKbP%2FL5xxUMWZzogEdWJWh4jGs5M3NEyuvovhnLqFOsQdJqL%2F0BMd8U%2FTKSTu7VHfcAovYPHhtQEc2xurm1J8ruX2ELInGBAcvyWARTitqLEm8xc8XXsZOkeySgKXo5HP%2BJ9V%2FTI1NAZJY1Qje3yGZ1FQW15qxqe&X-Amz-Signature=59214b6ee00036c3eaa4ed75565dbf0fa737bdeebaa2c4f6663d3a72232ad52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNKJQRD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs1frA5b1sYCyyhH2LOwp6RA3RIpf2lGRPUYC7UgoQwIgZm4q7Ajrik0aSQiXpP5Q2uta8GDNrypMD5%2FKlzaKSjkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDK00x1ONXpJWXDLebircA2fFUd0P0iz%2B3UnqVxJF%2Bw2k2ud%2BSZ%2FoY79KIv1pGwCDHXM8NW9x%2BswtgxWj1lhk4znbWgyZZM7XndM0imG92hsA1kASTgRgZhdzcWbYlEO%2F1FvAbXwiFLv3zEcijVAV4Dug%2BEl3tQTT%2B1hpeQqQafnYI1UTT9qZC%2Ftu7uihaDYXW0uX0puvNphMpOIZs%2FAAN2mlFtI4YDlUaPVPv0nVkp2Av0XUX9nMTuc4CKDuZH23906GrWlXXBnqAXN6GOSi8dAGt7fDTgKOy%2FRJ98LHKuzfDXzW7xdnbpOiz0CGVHe%2FYg4MHk1M374yUlvkGA52Cl%2B7OCKVAQRWXqOdfBiTpcoPb3yFkXEST%2F3XOHpfihYbdFj46DEp6mD%2Fycuahw4FVfA%2BlvC5gNfTcJ33Ga13pH67dEK3MHa6ApH%2FIvJOvC4r3DdkuQpiR%2Bcs71iNpfIdxyC%2FCphvASJlPDWHSLPy0x%2BWgz95oqidoGjjm6%2Bt%2FnwIbW7P7FpTyAEhmGYCAtQBf8I5jLSpRvtpq9hGkzyY3xtPCPidoow4OXhZBfjJbuUIHP6Ey1k2eoWN%2BJ0aY5Acb%2BKVWXO35MeX5nn3vGq59Lxpg5IASCYUquARuhqrBxP0saMdiA1Gk8FxrQISMK2AusQGOqUBOD5ioS1plHJeoVUGwviGwvtGYswvGSsnoKo2GltbFOeps3HrAUVQtl64S71mqKbP%2FL5xxUMWZzogEdWJWh4jGs5M3NEyuvovhnLqFOsQdJqL%2F0BMd8U%2FTKSTu7VHfcAovYPHhtQEc2xurm1J8ruX2ELInGBAcvyWARTitqLEm8xc8XXsZOkeySgKXo5HP%2BJ9V%2FTI1NAZJY1Qje3yGZ1FQW15qxqe&X-Amz-Signature=5c76762ba1fed7daec6eb0350919faa89685b3926da9cd7edf891db99e0b73b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNKJQRD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs1frA5b1sYCyyhH2LOwp6RA3RIpf2lGRPUYC7UgoQwIgZm4q7Ajrik0aSQiXpP5Q2uta8GDNrypMD5%2FKlzaKSjkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDK00x1ONXpJWXDLebircA2fFUd0P0iz%2B3UnqVxJF%2Bw2k2ud%2BSZ%2FoY79KIv1pGwCDHXM8NW9x%2BswtgxWj1lhk4znbWgyZZM7XndM0imG92hsA1kASTgRgZhdzcWbYlEO%2F1FvAbXwiFLv3zEcijVAV4Dug%2BEl3tQTT%2B1hpeQqQafnYI1UTT9qZC%2Ftu7uihaDYXW0uX0puvNphMpOIZs%2FAAN2mlFtI4YDlUaPVPv0nVkp2Av0XUX9nMTuc4CKDuZH23906GrWlXXBnqAXN6GOSi8dAGt7fDTgKOy%2FRJ98LHKuzfDXzW7xdnbpOiz0CGVHe%2FYg4MHk1M374yUlvkGA52Cl%2B7OCKVAQRWXqOdfBiTpcoPb3yFkXEST%2F3XOHpfihYbdFj46DEp6mD%2Fycuahw4FVfA%2BlvC5gNfTcJ33Ga13pH67dEK3MHa6ApH%2FIvJOvC4r3DdkuQpiR%2Bcs71iNpfIdxyC%2FCphvASJlPDWHSLPy0x%2BWgz95oqidoGjjm6%2Bt%2FnwIbW7P7FpTyAEhmGYCAtQBf8I5jLSpRvtpq9hGkzyY3xtPCPidoow4OXhZBfjJbuUIHP6Ey1k2eoWN%2BJ0aY5Acb%2BKVWXO35MeX5nn3vGq59Lxpg5IASCYUquARuhqrBxP0saMdiA1Gk8FxrQISMK2AusQGOqUBOD5ioS1plHJeoVUGwviGwvtGYswvGSsnoKo2GltbFOeps3HrAUVQtl64S71mqKbP%2FL5xxUMWZzogEdWJWh4jGs5M3NEyuvovhnLqFOsQdJqL%2F0BMd8U%2FTKSTu7VHfcAovYPHhtQEc2xurm1J8ruX2ELInGBAcvyWARTitqLEm8xc8XXsZOkeySgKXo5HP%2BJ9V%2FTI1NAZJY1Qje3yGZ1FQW15qxqe&X-Amz-Signature=a1d83b10dc702dac6d899111612975f6ffc6943f38dc60c905ce0451d8a7b7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNKJQRD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs1frA5b1sYCyyhH2LOwp6RA3RIpf2lGRPUYC7UgoQwIgZm4q7Ajrik0aSQiXpP5Q2uta8GDNrypMD5%2FKlzaKSjkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDK00x1ONXpJWXDLebircA2fFUd0P0iz%2B3UnqVxJF%2Bw2k2ud%2BSZ%2FoY79KIv1pGwCDHXM8NW9x%2BswtgxWj1lhk4znbWgyZZM7XndM0imG92hsA1kASTgRgZhdzcWbYlEO%2F1FvAbXwiFLv3zEcijVAV4Dug%2BEl3tQTT%2B1hpeQqQafnYI1UTT9qZC%2Ftu7uihaDYXW0uX0puvNphMpOIZs%2FAAN2mlFtI4YDlUaPVPv0nVkp2Av0XUX9nMTuc4CKDuZH23906GrWlXXBnqAXN6GOSi8dAGt7fDTgKOy%2FRJ98LHKuzfDXzW7xdnbpOiz0CGVHe%2FYg4MHk1M374yUlvkGA52Cl%2B7OCKVAQRWXqOdfBiTpcoPb3yFkXEST%2F3XOHpfihYbdFj46DEp6mD%2Fycuahw4FVfA%2BlvC5gNfTcJ33Ga13pH67dEK3MHa6ApH%2FIvJOvC4r3DdkuQpiR%2Bcs71iNpfIdxyC%2FCphvASJlPDWHSLPy0x%2BWgz95oqidoGjjm6%2Bt%2FnwIbW7P7FpTyAEhmGYCAtQBf8I5jLSpRvtpq9hGkzyY3xtPCPidoow4OXhZBfjJbuUIHP6Ey1k2eoWN%2BJ0aY5Acb%2BKVWXO35MeX5nn3vGq59Lxpg5IASCYUquARuhqrBxP0saMdiA1Gk8FxrQISMK2AusQGOqUBOD5ioS1plHJeoVUGwviGwvtGYswvGSsnoKo2GltbFOeps3HrAUVQtl64S71mqKbP%2FL5xxUMWZzogEdWJWh4jGs5M3NEyuvovhnLqFOsQdJqL%2F0BMd8U%2FTKSTu7VHfcAovYPHhtQEc2xurm1J8ruX2ELInGBAcvyWARTitqLEm8xc8XXsZOkeySgKXo5HP%2BJ9V%2FTI1NAZJY1Qje3yGZ1FQW15qxqe&X-Amz-Signature=b2b583213962b4d79990964252ac2c58489c2ac0169dbe1c727b99e859ee23ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNKJQRD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs1frA5b1sYCyyhH2LOwp6RA3RIpf2lGRPUYC7UgoQwIgZm4q7Ajrik0aSQiXpP5Q2uta8GDNrypMD5%2FKlzaKSjkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDK00x1ONXpJWXDLebircA2fFUd0P0iz%2B3UnqVxJF%2Bw2k2ud%2BSZ%2FoY79KIv1pGwCDHXM8NW9x%2BswtgxWj1lhk4znbWgyZZM7XndM0imG92hsA1kASTgRgZhdzcWbYlEO%2F1FvAbXwiFLv3zEcijVAV4Dug%2BEl3tQTT%2B1hpeQqQafnYI1UTT9qZC%2Ftu7uihaDYXW0uX0puvNphMpOIZs%2FAAN2mlFtI4YDlUaPVPv0nVkp2Av0XUX9nMTuc4CKDuZH23906GrWlXXBnqAXN6GOSi8dAGt7fDTgKOy%2FRJ98LHKuzfDXzW7xdnbpOiz0CGVHe%2FYg4MHk1M374yUlvkGA52Cl%2B7OCKVAQRWXqOdfBiTpcoPb3yFkXEST%2F3XOHpfihYbdFj46DEp6mD%2Fycuahw4FVfA%2BlvC5gNfTcJ33Ga13pH67dEK3MHa6ApH%2FIvJOvC4r3DdkuQpiR%2Bcs71iNpfIdxyC%2FCphvASJlPDWHSLPy0x%2BWgz95oqidoGjjm6%2Bt%2FnwIbW7P7FpTyAEhmGYCAtQBf8I5jLSpRvtpq9hGkzyY3xtPCPidoow4OXhZBfjJbuUIHP6Ey1k2eoWN%2BJ0aY5Acb%2BKVWXO35MeX5nn3vGq59Lxpg5IASCYUquARuhqrBxP0saMdiA1Gk8FxrQISMK2AusQGOqUBOD5ioS1plHJeoVUGwviGwvtGYswvGSsnoKo2GltbFOeps3HrAUVQtl64S71mqKbP%2FL5xxUMWZzogEdWJWh4jGs5M3NEyuvovhnLqFOsQdJqL%2F0BMd8U%2FTKSTu7VHfcAovYPHhtQEc2xurm1J8ruX2ELInGBAcvyWARTitqLEm8xc8XXsZOkeySgKXo5HP%2BJ9V%2FTI1NAZJY1Qje3yGZ1FQW15qxqe&X-Amz-Signature=b3201e1f3dc4d4a96f2044524da16aaf6e3c1d8699a91831413b157c37abdc9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNKJQRD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs1frA5b1sYCyyhH2LOwp6RA3RIpf2lGRPUYC7UgoQwIgZm4q7Ajrik0aSQiXpP5Q2uta8GDNrypMD5%2FKlzaKSjkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDK00x1ONXpJWXDLebircA2fFUd0P0iz%2B3UnqVxJF%2Bw2k2ud%2BSZ%2FoY79KIv1pGwCDHXM8NW9x%2BswtgxWj1lhk4znbWgyZZM7XndM0imG92hsA1kASTgRgZhdzcWbYlEO%2F1FvAbXwiFLv3zEcijVAV4Dug%2BEl3tQTT%2B1hpeQqQafnYI1UTT9qZC%2Ftu7uihaDYXW0uX0puvNphMpOIZs%2FAAN2mlFtI4YDlUaPVPv0nVkp2Av0XUX9nMTuc4CKDuZH23906GrWlXXBnqAXN6GOSi8dAGt7fDTgKOy%2FRJ98LHKuzfDXzW7xdnbpOiz0CGVHe%2FYg4MHk1M374yUlvkGA52Cl%2B7OCKVAQRWXqOdfBiTpcoPb3yFkXEST%2F3XOHpfihYbdFj46DEp6mD%2Fycuahw4FVfA%2BlvC5gNfTcJ33Ga13pH67dEK3MHa6ApH%2FIvJOvC4r3DdkuQpiR%2Bcs71iNpfIdxyC%2FCphvASJlPDWHSLPy0x%2BWgz95oqidoGjjm6%2Bt%2FnwIbW7P7FpTyAEhmGYCAtQBf8I5jLSpRvtpq9hGkzyY3xtPCPidoow4OXhZBfjJbuUIHP6Ey1k2eoWN%2BJ0aY5Acb%2BKVWXO35MeX5nn3vGq59Lxpg5IASCYUquARuhqrBxP0saMdiA1Gk8FxrQISMK2AusQGOqUBOD5ioS1plHJeoVUGwviGwvtGYswvGSsnoKo2GltbFOeps3HrAUVQtl64S71mqKbP%2FL5xxUMWZzogEdWJWh4jGs5M3NEyuvovhnLqFOsQdJqL%2F0BMd8U%2FTKSTu7VHfcAovYPHhtQEc2xurm1J8ruX2ELInGBAcvyWARTitqLEm8xc8XXsZOkeySgKXo5HP%2BJ9V%2FTI1NAZJY1Qje3yGZ1FQW15qxqe&X-Amz-Signature=3d1e1337c81342460e4d51290b968f6f963e63fa909386a258cebbed88ba10e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNKJQRD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYs1frA5b1sYCyyhH2LOwp6RA3RIpf2lGRPUYC7UgoQwIgZm4q7Ajrik0aSQiXpP5Q2uta8GDNrypMD5%2FKlzaKSjkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDK00x1ONXpJWXDLebircA2fFUd0P0iz%2B3UnqVxJF%2Bw2k2ud%2BSZ%2FoY79KIv1pGwCDHXM8NW9x%2BswtgxWj1lhk4znbWgyZZM7XndM0imG92hsA1kASTgRgZhdzcWbYlEO%2F1FvAbXwiFLv3zEcijVAV4Dug%2BEl3tQTT%2B1hpeQqQafnYI1UTT9qZC%2Ftu7uihaDYXW0uX0puvNphMpOIZs%2FAAN2mlFtI4YDlUaPVPv0nVkp2Av0XUX9nMTuc4CKDuZH23906GrWlXXBnqAXN6GOSi8dAGt7fDTgKOy%2FRJ98LHKuzfDXzW7xdnbpOiz0CGVHe%2FYg4MHk1M374yUlvkGA52Cl%2B7OCKVAQRWXqOdfBiTpcoPb3yFkXEST%2F3XOHpfihYbdFj46DEp6mD%2Fycuahw4FVfA%2BlvC5gNfTcJ33Ga13pH67dEK3MHa6ApH%2FIvJOvC4r3DdkuQpiR%2Bcs71iNpfIdxyC%2FCphvASJlPDWHSLPy0x%2BWgz95oqidoGjjm6%2Bt%2FnwIbW7P7FpTyAEhmGYCAtQBf8I5jLSpRvtpq9hGkzyY3xtPCPidoow4OXhZBfjJbuUIHP6Ey1k2eoWN%2BJ0aY5Acb%2BKVWXO35MeX5nn3vGq59Lxpg5IASCYUquARuhqrBxP0saMdiA1Gk8FxrQISMK2AusQGOqUBOD5ioS1plHJeoVUGwviGwvtGYswvGSsnoKo2GltbFOeps3HrAUVQtl64S71mqKbP%2FL5xxUMWZzogEdWJWh4jGs5M3NEyuvovhnLqFOsQdJqL%2F0BMd8U%2FTKSTu7VHfcAovYPHhtQEc2xurm1J8ruX2ELInGBAcvyWARTitqLEm8xc8XXsZOkeySgKXo5HP%2BJ9V%2FTI1NAZJY1Qje3yGZ1FQW15qxqe&X-Amz-Signature=3866c2a4e119b383137c959222ba9959f75748548ace9ac4d0790a1d3c2537fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
