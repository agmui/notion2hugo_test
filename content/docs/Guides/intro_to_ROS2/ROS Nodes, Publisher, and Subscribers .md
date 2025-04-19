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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADKWTJT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNgp8nVV%2FWqAWuBS%2B2Oco56vUhj3UDN1yU5mmQ1e3JXAIgAeTZFTaVZ8keu%2BZeW4SPKnsyKLN%2F%2BFzB%2B7pTJSLpUcMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp4do3NvdVaGJPAZCrcA5oQIvVL5XcvjmMp912q9m4VD5DYfGA4wz%2FC%2BZLSOBXo9d6an%2F5CRi41fMBanOvuca%2BrxX2lvicUhir9OP72dcVBoH%2B0NrSR2woKD75RD%2FL0wLDQA839SnZJhgsD2S14GhGgLm3paprCiJC%2Fct0sSaMsZjVwopK01uhpIXVjPIIAPf6deg%2FryoWearU3eWdeyO8AUM6m3vHyORnrC5MAQtIGPfVEjIFVuuK9KDOrKB%2FGKoo7DwjwN5GkvoWlTEfdMnk1f1nr7JmfrErziQ4cDaunUSydfYVgRQUYFR4o%2BoQw1m3XDOcSt3GnQfY13KNV8vACIXbuE0AcMTbr%2BAaDSrjChISZLAwY4EkcUrepKxgYXd3LUVBwQ7LOKo5XAWqlKHiuzhWWFqke2L1SHIwSf06XPmv5JrSgwVFXksJswMo8ZxjMA%2FkDvPZBf8n2aQ4ipIkG47FPVJHaz5VoxL0PQJMvUiQKlsMj%2F0pAA7tePBc6QZXVSW1DJSkVsHQH5DEaZQssMI9eQjJDz%2F5oESUg7xG8FCAEwnytZqyeJdi6%2FpvDuqp8pcgtGp8mZ6%2FVkRjxLsYi322GGIBuowAFnS4Ln0QqVCtkRMtbRjYZEbRr3ds1wQiJ%2B1dbKdPiNSrOMLn8jMAGOqUB7JOACaVGntpGrjsCvSpHf5FHvNifTnYjBEwt9g0tDmHdVDqrk7LrNVxQfjWypeb6LQGtf7eZOouck%2F29rqXqtEaPcdIqL3%2BVBs6ymxgqc6CzfYn5rqH%2Fp6IUfKa5aa%2BhcfOy6nrOErqZKAjJfr6N4SUs7JHbnhXrZOgrvZNW3imsNhYDpcccWCYNNUSfCI0G7goHx%2BIpLsn26lMbaZjkkwWDe610&X-Amz-Signature=939af754044c130b60d85b82daca661e3d6c2a61cb1f30d5e33069ab9fce99c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADKWTJT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNgp8nVV%2FWqAWuBS%2B2Oco56vUhj3UDN1yU5mmQ1e3JXAIgAeTZFTaVZ8keu%2BZeW4SPKnsyKLN%2F%2BFzB%2B7pTJSLpUcMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp4do3NvdVaGJPAZCrcA5oQIvVL5XcvjmMp912q9m4VD5DYfGA4wz%2FC%2BZLSOBXo9d6an%2F5CRi41fMBanOvuca%2BrxX2lvicUhir9OP72dcVBoH%2B0NrSR2woKD75RD%2FL0wLDQA839SnZJhgsD2S14GhGgLm3paprCiJC%2Fct0sSaMsZjVwopK01uhpIXVjPIIAPf6deg%2FryoWearU3eWdeyO8AUM6m3vHyORnrC5MAQtIGPfVEjIFVuuK9KDOrKB%2FGKoo7DwjwN5GkvoWlTEfdMnk1f1nr7JmfrErziQ4cDaunUSydfYVgRQUYFR4o%2BoQw1m3XDOcSt3GnQfY13KNV8vACIXbuE0AcMTbr%2BAaDSrjChISZLAwY4EkcUrepKxgYXd3LUVBwQ7LOKo5XAWqlKHiuzhWWFqke2L1SHIwSf06XPmv5JrSgwVFXksJswMo8ZxjMA%2FkDvPZBf8n2aQ4ipIkG47FPVJHaz5VoxL0PQJMvUiQKlsMj%2F0pAA7tePBc6QZXVSW1DJSkVsHQH5DEaZQssMI9eQjJDz%2F5oESUg7xG8FCAEwnytZqyeJdi6%2FpvDuqp8pcgtGp8mZ6%2FVkRjxLsYi322GGIBuowAFnS4Ln0QqVCtkRMtbRjYZEbRr3ds1wQiJ%2B1dbKdPiNSrOMLn8jMAGOqUB7JOACaVGntpGrjsCvSpHf5FHvNifTnYjBEwt9g0tDmHdVDqrk7LrNVxQfjWypeb6LQGtf7eZOouck%2F29rqXqtEaPcdIqL3%2BVBs6ymxgqc6CzfYn5rqH%2Fp6IUfKa5aa%2BhcfOy6nrOErqZKAjJfr6N4SUs7JHbnhXrZOgrvZNW3imsNhYDpcccWCYNNUSfCI0G7goHx%2BIpLsn26lMbaZjkkwWDe610&X-Amz-Signature=8b97769a552e08981ee42205cd768a689fc5f910b8a2abd97071e10d289102fa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADKWTJT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNgp8nVV%2FWqAWuBS%2B2Oco56vUhj3UDN1yU5mmQ1e3JXAIgAeTZFTaVZ8keu%2BZeW4SPKnsyKLN%2F%2BFzB%2B7pTJSLpUcMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp4do3NvdVaGJPAZCrcA5oQIvVL5XcvjmMp912q9m4VD5DYfGA4wz%2FC%2BZLSOBXo9d6an%2F5CRi41fMBanOvuca%2BrxX2lvicUhir9OP72dcVBoH%2B0NrSR2woKD75RD%2FL0wLDQA839SnZJhgsD2S14GhGgLm3paprCiJC%2Fct0sSaMsZjVwopK01uhpIXVjPIIAPf6deg%2FryoWearU3eWdeyO8AUM6m3vHyORnrC5MAQtIGPfVEjIFVuuK9KDOrKB%2FGKoo7DwjwN5GkvoWlTEfdMnk1f1nr7JmfrErziQ4cDaunUSydfYVgRQUYFR4o%2BoQw1m3XDOcSt3GnQfY13KNV8vACIXbuE0AcMTbr%2BAaDSrjChISZLAwY4EkcUrepKxgYXd3LUVBwQ7LOKo5XAWqlKHiuzhWWFqke2L1SHIwSf06XPmv5JrSgwVFXksJswMo8ZxjMA%2FkDvPZBf8n2aQ4ipIkG47FPVJHaz5VoxL0PQJMvUiQKlsMj%2F0pAA7tePBc6QZXVSW1DJSkVsHQH5DEaZQssMI9eQjJDz%2F5oESUg7xG8FCAEwnytZqyeJdi6%2FpvDuqp8pcgtGp8mZ6%2FVkRjxLsYi322GGIBuowAFnS4Ln0QqVCtkRMtbRjYZEbRr3ds1wQiJ%2B1dbKdPiNSrOMLn8jMAGOqUB7JOACaVGntpGrjsCvSpHf5FHvNifTnYjBEwt9g0tDmHdVDqrk7LrNVxQfjWypeb6LQGtf7eZOouck%2F29rqXqtEaPcdIqL3%2BVBs6ymxgqc6CzfYn5rqH%2Fp6IUfKa5aa%2BhcfOy6nrOErqZKAjJfr6N4SUs7JHbnhXrZOgrvZNW3imsNhYDpcccWCYNNUSfCI0G7goHx%2BIpLsn26lMbaZjkkwWDe610&X-Amz-Signature=7c3700cc6016755cbe88345be968c05aad8878e545576d682ec18a41c0ef5f29&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADKWTJT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNgp8nVV%2FWqAWuBS%2B2Oco56vUhj3UDN1yU5mmQ1e3JXAIgAeTZFTaVZ8keu%2BZeW4SPKnsyKLN%2F%2BFzB%2B7pTJSLpUcMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp4do3NvdVaGJPAZCrcA5oQIvVL5XcvjmMp912q9m4VD5DYfGA4wz%2FC%2BZLSOBXo9d6an%2F5CRi41fMBanOvuca%2BrxX2lvicUhir9OP72dcVBoH%2B0NrSR2woKD75RD%2FL0wLDQA839SnZJhgsD2S14GhGgLm3paprCiJC%2Fct0sSaMsZjVwopK01uhpIXVjPIIAPf6deg%2FryoWearU3eWdeyO8AUM6m3vHyORnrC5MAQtIGPfVEjIFVuuK9KDOrKB%2FGKoo7DwjwN5GkvoWlTEfdMnk1f1nr7JmfrErziQ4cDaunUSydfYVgRQUYFR4o%2BoQw1m3XDOcSt3GnQfY13KNV8vACIXbuE0AcMTbr%2BAaDSrjChISZLAwY4EkcUrepKxgYXd3LUVBwQ7LOKo5XAWqlKHiuzhWWFqke2L1SHIwSf06XPmv5JrSgwVFXksJswMo8ZxjMA%2FkDvPZBf8n2aQ4ipIkG47FPVJHaz5VoxL0PQJMvUiQKlsMj%2F0pAA7tePBc6QZXVSW1DJSkVsHQH5DEaZQssMI9eQjJDz%2F5oESUg7xG8FCAEwnytZqyeJdi6%2FpvDuqp8pcgtGp8mZ6%2FVkRjxLsYi322GGIBuowAFnS4Ln0QqVCtkRMtbRjYZEbRr3ds1wQiJ%2B1dbKdPiNSrOMLn8jMAGOqUB7JOACaVGntpGrjsCvSpHf5FHvNifTnYjBEwt9g0tDmHdVDqrk7LrNVxQfjWypeb6LQGtf7eZOouck%2F29rqXqtEaPcdIqL3%2BVBs6ymxgqc6CzfYn5rqH%2Fp6IUfKa5aa%2BhcfOy6nrOErqZKAjJfr6N4SUs7JHbnhXrZOgrvZNW3imsNhYDpcccWCYNNUSfCI0G7goHx%2BIpLsn26lMbaZjkkwWDe610&X-Amz-Signature=9843d65cb4024f4f1f4fb6a46ec59e79af9d27fdd8b3e1c9fc42aaaa00798ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADKWTJT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNgp8nVV%2FWqAWuBS%2B2Oco56vUhj3UDN1yU5mmQ1e3JXAIgAeTZFTaVZ8keu%2BZeW4SPKnsyKLN%2F%2BFzB%2B7pTJSLpUcMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp4do3NvdVaGJPAZCrcA5oQIvVL5XcvjmMp912q9m4VD5DYfGA4wz%2FC%2BZLSOBXo9d6an%2F5CRi41fMBanOvuca%2BrxX2lvicUhir9OP72dcVBoH%2B0NrSR2woKD75RD%2FL0wLDQA839SnZJhgsD2S14GhGgLm3paprCiJC%2Fct0sSaMsZjVwopK01uhpIXVjPIIAPf6deg%2FryoWearU3eWdeyO8AUM6m3vHyORnrC5MAQtIGPfVEjIFVuuK9KDOrKB%2FGKoo7DwjwN5GkvoWlTEfdMnk1f1nr7JmfrErziQ4cDaunUSydfYVgRQUYFR4o%2BoQw1m3XDOcSt3GnQfY13KNV8vACIXbuE0AcMTbr%2BAaDSrjChISZLAwY4EkcUrepKxgYXd3LUVBwQ7LOKo5XAWqlKHiuzhWWFqke2L1SHIwSf06XPmv5JrSgwVFXksJswMo8ZxjMA%2FkDvPZBf8n2aQ4ipIkG47FPVJHaz5VoxL0PQJMvUiQKlsMj%2F0pAA7tePBc6QZXVSW1DJSkVsHQH5DEaZQssMI9eQjJDz%2F5oESUg7xG8FCAEwnytZqyeJdi6%2FpvDuqp8pcgtGp8mZ6%2FVkRjxLsYi322GGIBuowAFnS4Ln0QqVCtkRMtbRjYZEbRr3ds1wQiJ%2B1dbKdPiNSrOMLn8jMAGOqUB7JOACaVGntpGrjsCvSpHf5FHvNifTnYjBEwt9g0tDmHdVDqrk7LrNVxQfjWypeb6LQGtf7eZOouck%2F29rqXqtEaPcdIqL3%2BVBs6ymxgqc6CzfYn5rqH%2Fp6IUfKa5aa%2BhcfOy6nrOErqZKAjJfr6N4SUs7JHbnhXrZOgrvZNW3imsNhYDpcccWCYNNUSfCI0G7goHx%2BIpLsn26lMbaZjkkwWDe610&X-Amz-Signature=c25629429ceeed03ca496ac2b6239e73881c0d8d4f83a8ec47d34ca9231b1713&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADKWTJT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNgp8nVV%2FWqAWuBS%2B2Oco56vUhj3UDN1yU5mmQ1e3JXAIgAeTZFTaVZ8keu%2BZeW4SPKnsyKLN%2F%2BFzB%2B7pTJSLpUcMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp4do3NvdVaGJPAZCrcA5oQIvVL5XcvjmMp912q9m4VD5DYfGA4wz%2FC%2BZLSOBXo9d6an%2F5CRi41fMBanOvuca%2BrxX2lvicUhir9OP72dcVBoH%2B0NrSR2woKD75RD%2FL0wLDQA839SnZJhgsD2S14GhGgLm3paprCiJC%2Fct0sSaMsZjVwopK01uhpIXVjPIIAPf6deg%2FryoWearU3eWdeyO8AUM6m3vHyORnrC5MAQtIGPfVEjIFVuuK9KDOrKB%2FGKoo7DwjwN5GkvoWlTEfdMnk1f1nr7JmfrErziQ4cDaunUSydfYVgRQUYFR4o%2BoQw1m3XDOcSt3GnQfY13KNV8vACIXbuE0AcMTbr%2BAaDSrjChISZLAwY4EkcUrepKxgYXd3LUVBwQ7LOKo5XAWqlKHiuzhWWFqke2L1SHIwSf06XPmv5JrSgwVFXksJswMo8ZxjMA%2FkDvPZBf8n2aQ4ipIkG47FPVJHaz5VoxL0PQJMvUiQKlsMj%2F0pAA7tePBc6QZXVSW1DJSkVsHQH5DEaZQssMI9eQjJDz%2F5oESUg7xG8FCAEwnytZqyeJdi6%2FpvDuqp8pcgtGp8mZ6%2FVkRjxLsYi322GGIBuowAFnS4Ln0QqVCtkRMtbRjYZEbRr3ds1wQiJ%2B1dbKdPiNSrOMLn8jMAGOqUB7JOACaVGntpGrjsCvSpHf5FHvNifTnYjBEwt9g0tDmHdVDqrk7LrNVxQfjWypeb6LQGtf7eZOouck%2F29rqXqtEaPcdIqL3%2BVBs6ymxgqc6CzfYn5rqH%2Fp6IUfKa5aa%2BhcfOy6nrOErqZKAjJfr6N4SUs7JHbnhXrZOgrvZNW3imsNhYDpcccWCYNNUSfCI0G7goHx%2BIpLsn26lMbaZjkkwWDe610&X-Amz-Signature=789f9c41e4e7870accb0dbd6ae135e046277e68096a04884cb2e38c1fbfc74a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADKWTJT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNgp8nVV%2FWqAWuBS%2B2Oco56vUhj3UDN1yU5mmQ1e3JXAIgAeTZFTaVZ8keu%2BZeW4SPKnsyKLN%2F%2BFzB%2B7pTJSLpUcMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp4do3NvdVaGJPAZCrcA5oQIvVL5XcvjmMp912q9m4VD5DYfGA4wz%2FC%2BZLSOBXo9d6an%2F5CRi41fMBanOvuca%2BrxX2lvicUhir9OP72dcVBoH%2B0NrSR2woKD75RD%2FL0wLDQA839SnZJhgsD2S14GhGgLm3paprCiJC%2Fct0sSaMsZjVwopK01uhpIXVjPIIAPf6deg%2FryoWearU3eWdeyO8AUM6m3vHyORnrC5MAQtIGPfVEjIFVuuK9KDOrKB%2FGKoo7DwjwN5GkvoWlTEfdMnk1f1nr7JmfrErziQ4cDaunUSydfYVgRQUYFR4o%2BoQw1m3XDOcSt3GnQfY13KNV8vACIXbuE0AcMTbr%2BAaDSrjChISZLAwY4EkcUrepKxgYXd3LUVBwQ7LOKo5XAWqlKHiuzhWWFqke2L1SHIwSf06XPmv5JrSgwVFXksJswMo8ZxjMA%2FkDvPZBf8n2aQ4ipIkG47FPVJHaz5VoxL0PQJMvUiQKlsMj%2F0pAA7tePBc6QZXVSW1DJSkVsHQH5DEaZQssMI9eQjJDz%2F5oESUg7xG8FCAEwnytZqyeJdi6%2FpvDuqp8pcgtGp8mZ6%2FVkRjxLsYi322GGIBuowAFnS4Ln0QqVCtkRMtbRjYZEbRr3ds1wQiJ%2B1dbKdPiNSrOMLn8jMAGOqUB7JOACaVGntpGrjsCvSpHf5FHvNifTnYjBEwt9g0tDmHdVDqrk7LrNVxQfjWypeb6LQGtf7eZOouck%2F29rqXqtEaPcdIqL3%2BVBs6ymxgqc6CzfYn5rqH%2Fp6IUfKa5aa%2BhcfOy6nrOErqZKAjJfr6N4SUs7JHbnhXrZOgrvZNW3imsNhYDpcccWCYNNUSfCI0G7goHx%2BIpLsn26lMbaZjkkwWDe610&X-Amz-Signature=1d5ded0c963f09b5e39325d4cf0fb2b7fcfed3aad6996276189921f628c787cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ADKWTJT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNgp8nVV%2FWqAWuBS%2B2Oco56vUhj3UDN1yU5mmQ1e3JXAIgAeTZFTaVZ8keu%2BZeW4SPKnsyKLN%2F%2BFzB%2B7pTJSLpUcMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp4do3NvdVaGJPAZCrcA5oQIvVL5XcvjmMp912q9m4VD5DYfGA4wz%2FC%2BZLSOBXo9d6an%2F5CRi41fMBanOvuca%2BrxX2lvicUhir9OP72dcVBoH%2B0NrSR2woKD75RD%2FL0wLDQA839SnZJhgsD2S14GhGgLm3paprCiJC%2Fct0sSaMsZjVwopK01uhpIXVjPIIAPf6deg%2FryoWearU3eWdeyO8AUM6m3vHyORnrC5MAQtIGPfVEjIFVuuK9KDOrKB%2FGKoo7DwjwN5GkvoWlTEfdMnk1f1nr7JmfrErziQ4cDaunUSydfYVgRQUYFR4o%2BoQw1m3XDOcSt3GnQfY13KNV8vACIXbuE0AcMTbr%2BAaDSrjChISZLAwY4EkcUrepKxgYXd3LUVBwQ7LOKo5XAWqlKHiuzhWWFqke2L1SHIwSf06XPmv5JrSgwVFXksJswMo8ZxjMA%2FkDvPZBf8n2aQ4ipIkG47FPVJHaz5VoxL0PQJMvUiQKlsMj%2F0pAA7tePBc6QZXVSW1DJSkVsHQH5DEaZQssMI9eQjJDz%2F5oESUg7xG8FCAEwnytZqyeJdi6%2FpvDuqp8pcgtGp8mZ6%2FVkRjxLsYi322GGIBuowAFnS4Ln0QqVCtkRMtbRjYZEbRr3ds1wQiJ%2B1dbKdPiNSrOMLn8jMAGOqUB7JOACaVGntpGrjsCvSpHf5FHvNifTnYjBEwt9g0tDmHdVDqrk7LrNVxQfjWypeb6LQGtf7eZOouck%2F29rqXqtEaPcdIqL3%2BVBs6ymxgqc6CzfYn5rqH%2Fp6IUfKa5aa%2BhcfOy6nrOErqZKAjJfr6N4SUs7JHbnhXrZOgrvZNW3imsNhYDpcccWCYNNUSfCI0G7goHx%2BIpLsn26lMbaZjkkwWDe610&X-Amz-Signature=9db84105619b3ffee94cae48f4d6d4ef5dcb4f4afb04b4b1f45ca10c0b1b8788&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
