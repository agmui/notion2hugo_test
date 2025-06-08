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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2EX7WH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzdkO7hlChDqdRH6NvfVDV6M78MtrO2w2LJ92O3pLrEAiAEtQD39ytOAua1gs1bYmZsXKGqj0bJCzh%2FBZ7lOPqoOSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcA7W%2BLrSAD2xTBwKtwDxqwS5a4ZwAX8awArWziJTscVJU9IGPsLZnkC9cRhU3iOt1y5tV8Md0UWBWawTFScNUhSf2dK6i4woTLS%2B%2Bo6jlZ%2BslJdZWRH1PFJ4NsWm37N6ousvv7YQzrtw3KPDCwPr4bRpMUktWZee5M31oVTT7nn2hVnk2Ra%2BD9MQC9qHlGdGNvyhoQ4BUR00WI2pZPmOjV6qgeqQDbCQnXH99bvvo13BYt8bgnE1%2F73F7vIKOeKxAjdJzsXMld%2BbHStp3xYmXSf0MPlDh7H1CVye66KgQutaIsYY8Wijfi0hI63PlYNVNYJe9kLr181pWUQ0fPvIEloXhl1cmBVaTy6rjxT1kHC7TeFea2ouLZfs2eY26chI3Wg0oHb1zsRO3Ds6kO1zOmahHeKMGA5AD39Sl%2FaEIQEaS3L%2FIytWB%2Fg%2F%2BulphS1A%2FRD%2BijrQ6eh%2BkD2GVn06k8sQXSXNA7VY4Vj%2BHN%2FEHxqzACNspgTttaufjwCek50unC3DFRPuKpcbxmJTZKeu1ZCTlv4WGkJhNM5wHZU2OutWuhq8uJnJjweTkSzE1Tq4wj2oSG3z8XcGRNH1LRYj%2BSBHdS%2BKM%2F5jaaAT3ilgQMN%2F7PcZwzFSl48zgiKa2AQZSvJ1apK8Ubd1PMwueKXwgY6pgEpoq2TX17KxLdjBcz1uSBnTj5AosWz34WEBa%2FtYVDV4OjBWOroQgVRLyFARMXAtTrK%2B6HRodMmSB4LWMIIOVbcwPQtOjffewfYZfTuGvMJahsBkER2kpKh0x1xPiFDLS18oVjYo293y%2Fv7RPFdplOFdV%2BFBd702LAs2Co5heGmnjM4qPFaunLl8IEnmCzZ2PytUu0C5o%2FMKNTRzLs20uPP0F%2F%2FtjMx&X-Amz-Signature=62d9df4d07cbf2e34c44ff9f113c22ea248675c4d904a250cbdf2d748e2e13bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2EX7WH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzdkO7hlChDqdRH6NvfVDV6M78MtrO2w2LJ92O3pLrEAiAEtQD39ytOAua1gs1bYmZsXKGqj0bJCzh%2FBZ7lOPqoOSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcA7W%2BLrSAD2xTBwKtwDxqwS5a4ZwAX8awArWziJTscVJU9IGPsLZnkC9cRhU3iOt1y5tV8Md0UWBWawTFScNUhSf2dK6i4woTLS%2B%2Bo6jlZ%2BslJdZWRH1PFJ4NsWm37N6ousvv7YQzrtw3KPDCwPr4bRpMUktWZee5M31oVTT7nn2hVnk2Ra%2BD9MQC9qHlGdGNvyhoQ4BUR00WI2pZPmOjV6qgeqQDbCQnXH99bvvo13BYt8bgnE1%2F73F7vIKOeKxAjdJzsXMld%2BbHStp3xYmXSf0MPlDh7H1CVye66KgQutaIsYY8Wijfi0hI63PlYNVNYJe9kLr181pWUQ0fPvIEloXhl1cmBVaTy6rjxT1kHC7TeFea2ouLZfs2eY26chI3Wg0oHb1zsRO3Ds6kO1zOmahHeKMGA5AD39Sl%2FaEIQEaS3L%2FIytWB%2Fg%2F%2BulphS1A%2FRD%2BijrQ6eh%2BkD2GVn06k8sQXSXNA7VY4Vj%2BHN%2FEHxqzACNspgTttaufjwCek50unC3DFRPuKpcbxmJTZKeu1ZCTlv4WGkJhNM5wHZU2OutWuhq8uJnJjweTkSzE1Tq4wj2oSG3z8XcGRNH1LRYj%2BSBHdS%2BKM%2F5jaaAT3ilgQMN%2F7PcZwzFSl48zgiKa2AQZSvJ1apK8Ubd1PMwueKXwgY6pgEpoq2TX17KxLdjBcz1uSBnTj5AosWz34WEBa%2FtYVDV4OjBWOroQgVRLyFARMXAtTrK%2B6HRodMmSB4LWMIIOVbcwPQtOjffewfYZfTuGvMJahsBkER2kpKh0x1xPiFDLS18oVjYo293y%2Fv7RPFdplOFdV%2BFBd702LAs2Co5heGmnjM4qPFaunLl8IEnmCzZ2PytUu0C5o%2FMKNTRzLs20uPP0F%2F%2FtjMx&X-Amz-Signature=654512a4c07b801e1889022221d0bcc7a288106cb78f5f4c453527393594e53c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2EX7WH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzdkO7hlChDqdRH6NvfVDV6M78MtrO2w2LJ92O3pLrEAiAEtQD39ytOAua1gs1bYmZsXKGqj0bJCzh%2FBZ7lOPqoOSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcA7W%2BLrSAD2xTBwKtwDxqwS5a4ZwAX8awArWziJTscVJU9IGPsLZnkC9cRhU3iOt1y5tV8Md0UWBWawTFScNUhSf2dK6i4woTLS%2B%2Bo6jlZ%2BslJdZWRH1PFJ4NsWm37N6ousvv7YQzrtw3KPDCwPr4bRpMUktWZee5M31oVTT7nn2hVnk2Ra%2BD9MQC9qHlGdGNvyhoQ4BUR00WI2pZPmOjV6qgeqQDbCQnXH99bvvo13BYt8bgnE1%2F73F7vIKOeKxAjdJzsXMld%2BbHStp3xYmXSf0MPlDh7H1CVye66KgQutaIsYY8Wijfi0hI63PlYNVNYJe9kLr181pWUQ0fPvIEloXhl1cmBVaTy6rjxT1kHC7TeFea2ouLZfs2eY26chI3Wg0oHb1zsRO3Ds6kO1zOmahHeKMGA5AD39Sl%2FaEIQEaS3L%2FIytWB%2Fg%2F%2BulphS1A%2FRD%2BijrQ6eh%2BkD2GVn06k8sQXSXNA7VY4Vj%2BHN%2FEHxqzACNspgTttaufjwCek50unC3DFRPuKpcbxmJTZKeu1ZCTlv4WGkJhNM5wHZU2OutWuhq8uJnJjweTkSzE1Tq4wj2oSG3z8XcGRNH1LRYj%2BSBHdS%2BKM%2F5jaaAT3ilgQMN%2F7PcZwzFSl48zgiKa2AQZSvJ1apK8Ubd1PMwueKXwgY6pgEpoq2TX17KxLdjBcz1uSBnTj5AosWz34WEBa%2FtYVDV4OjBWOroQgVRLyFARMXAtTrK%2B6HRodMmSB4LWMIIOVbcwPQtOjffewfYZfTuGvMJahsBkER2kpKh0x1xPiFDLS18oVjYo293y%2Fv7RPFdplOFdV%2BFBd702LAs2Co5heGmnjM4qPFaunLl8IEnmCzZ2PytUu0C5o%2FMKNTRzLs20uPP0F%2F%2FtjMx&X-Amz-Signature=e2190828b5278311ba432b46ac39d7a83221303eca6a7d7a0d343690ee4c62e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2EX7WH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzdkO7hlChDqdRH6NvfVDV6M78MtrO2w2LJ92O3pLrEAiAEtQD39ytOAua1gs1bYmZsXKGqj0bJCzh%2FBZ7lOPqoOSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcA7W%2BLrSAD2xTBwKtwDxqwS5a4ZwAX8awArWziJTscVJU9IGPsLZnkC9cRhU3iOt1y5tV8Md0UWBWawTFScNUhSf2dK6i4woTLS%2B%2Bo6jlZ%2BslJdZWRH1PFJ4NsWm37N6ousvv7YQzrtw3KPDCwPr4bRpMUktWZee5M31oVTT7nn2hVnk2Ra%2BD9MQC9qHlGdGNvyhoQ4BUR00WI2pZPmOjV6qgeqQDbCQnXH99bvvo13BYt8bgnE1%2F73F7vIKOeKxAjdJzsXMld%2BbHStp3xYmXSf0MPlDh7H1CVye66KgQutaIsYY8Wijfi0hI63PlYNVNYJe9kLr181pWUQ0fPvIEloXhl1cmBVaTy6rjxT1kHC7TeFea2ouLZfs2eY26chI3Wg0oHb1zsRO3Ds6kO1zOmahHeKMGA5AD39Sl%2FaEIQEaS3L%2FIytWB%2Fg%2F%2BulphS1A%2FRD%2BijrQ6eh%2BkD2GVn06k8sQXSXNA7VY4Vj%2BHN%2FEHxqzACNspgTttaufjwCek50unC3DFRPuKpcbxmJTZKeu1ZCTlv4WGkJhNM5wHZU2OutWuhq8uJnJjweTkSzE1Tq4wj2oSG3z8XcGRNH1LRYj%2BSBHdS%2BKM%2F5jaaAT3ilgQMN%2F7PcZwzFSl48zgiKa2AQZSvJ1apK8Ubd1PMwueKXwgY6pgEpoq2TX17KxLdjBcz1uSBnTj5AosWz34WEBa%2FtYVDV4OjBWOroQgVRLyFARMXAtTrK%2B6HRodMmSB4LWMIIOVbcwPQtOjffewfYZfTuGvMJahsBkER2kpKh0x1xPiFDLS18oVjYo293y%2Fv7RPFdplOFdV%2BFBd702LAs2Co5heGmnjM4qPFaunLl8IEnmCzZ2PytUu0C5o%2FMKNTRzLs20uPP0F%2F%2FtjMx&X-Amz-Signature=579190c1dc2c7035123fbfa3067d3b210ecc9e4a0e0f6d115dc7faeba3dc6dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2EX7WH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzdkO7hlChDqdRH6NvfVDV6M78MtrO2w2LJ92O3pLrEAiAEtQD39ytOAua1gs1bYmZsXKGqj0bJCzh%2FBZ7lOPqoOSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcA7W%2BLrSAD2xTBwKtwDxqwS5a4ZwAX8awArWziJTscVJU9IGPsLZnkC9cRhU3iOt1y5tV8Md0UWBWawTFScNUhSf2dK6i4woTLS%2B%2Bo6jlZ%2BslJdZWRH1PFJ4NsWm37N6ousvv7YQzrtw3KPDCwPr4bRpMUktWZee5M31oVTT7nn2hVnk2Ra%2BD9MQC9qHlGdGNvyhoQ4BUR00WI2pZPmOjV6qgeqQDbCQnXH99bvvo13BYt8bgnE1%2F73F7vIKOeKxAjdJzsXMld%2BbHStp3xYmXSf0MPlDh7H1CVye66KgQutaIsYY8Wijfi0hI63PlYNVNYJe9kLr181pWUQ0fPvIEloXhl1cmBVaTy6rjxT1kHC7TeFea2ouLZfs2eY26chI3Wg0oHb1zsRO3Ds6kO1zOmahHeKMGA5AD39Sl%2FaEIQEaS3L%2FIytWB%2Fg%2F%2BulphS1A%2FRD%2BijrQ6eh%2BkD2GVn06k8sQXSXNA7VY4Vj%2BHN%2FEHxqzACNspgTttaufjwCek50unC3DFRPuKpcbxmJTZKeu1ZCTlv4WGkJhNM5wHZU2OutWuhq8uJnJjweTkSzE1Tq4wj2oSG3z8XcGRNH1LRYj%2BSBHdS%2BKM%2F5jaaAT3ilgQMN%2F7PcZwzFSl48zgiKa2AQZSvJ1apK8Ubd1PMwueKXwgY6pgEpoq2TX17KxLdjBcz1uSBnTj5AosWz34WEBa%2FtYVDV4OjBWOroQgVRLyFARMXAtTrK%2B6HRodMmSB4LWMIIOVbcwPQtOjffewfYZfTuGvMJahsBkER2kpKh0x1xPiFDLS18oVjYo293y%2Fv7RPFdplOFdV%2BFBd702LAs2Co5heGmnjM4qPFaunLl8IEnmCzZ2PytUu0C5o%2FMKNTRzLs20uPP0F%2F%2FtjMx&X-Amz-Signature=6db97796f95b7610c3095b01698bb50961f52f25c1e44ebf149237b0960c296d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2EX7WH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzdkO7hlChDqdRH6NvfVDV6M78MtrO2w2LJ92O3pLrEAiAEtQD39ytOAua1gs1bYmZsXKGqj0bJCzh%2FBZ7lOPqoOSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcA7W%2BLrSAD2xTBwKtwDxqwS5a4ZwAX8awArWziJTscVJU9IGPsLZnkC9cRhU3iOt1y5tV8Md0UWBWawTFScNUhSf2dK6i4woTLS%2B%2Bo6jlZ%2BslJdZWRH1PFJ4NsWm37N6ousvv7YQzrtw3KPDCwPr4bRpMUktWZee5M31oVTT7nn2hVnk2Ra%2BD9MQC9qHlGdGNvyhoQ4BUR00WI2pZPmOjV6qgeqQDbCQnXH99bvvo13BYt8bgnE1%2F73F7vIKOeKxAjdJzsXMld%2BbHStp3xYmXSf0MPlDh7H1CVye66KgQutaIsYY8Wijfi0hI63PlYNVNYJe9kLr181pWUQ0fPvIEloXhl1cmBVaTy6rjxT1kHC7TeFea2ouLZfs2eY26chI3Wg0oHb1zsRO3Ds6kO1zOmahHeKMGA5AD39Sl%2FaEIQEaS3L%2FIytWB%2Fg%2F%2BulphS1A%2FRD%2BijrQ6eh%2BkD2GVn06k8sQXSXNA7VY4Vj%2BHN%2FEHxqzACNspgTttaufjwCek50unC3DFRPuKpcbxmJTZKeu1ZCTlv4WGkJhNM5wHZU2OutWuhq8uJnJjweTkSzE1Tq4wj2oSG3z8XcGRNH1LRYj%2BSBHdS%2BKM%2F5jaaAT3ilgQMN%2F7PcZwzFSl48zgiKa2AQZSvJ1apK8Ubd1PMwueKXwgY6pgEpoq2TX17KxLdjBcz1uSBnTj5AosWz34WEBa%2FtYVDV4OjBWOroQgVRLyFARMXAtTrK%2B6HRodMmSB4LWMIIOVbcwPQtOjffewfYZfTuGvMJahsBkER2kpKh0x1xPiFDLS18oVjYo293y%2Fv7RPFdplOFdV%2BFBd702LAs2Co5heGmnjM4qPFaunLl8IEnmCzZ2PytUu0C5o%2FMKNTRzLs20uPP0F%2F%2FtjMx&X-Amz-Signature=d23bd27c3bcf298dc7e074ec18daa1448b4723b719313bcd177cc6cad1650b65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2EX7WH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzdkO7hlChDqdRH6NvfVDV6M78MtrO2w2LJ92O3pLrEAiAEtQD39ytOAua1gs1bYmZsXKGqj0bJCzh%2FBZ7lOPqoOSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcA7W%2BLrSAD2xTBwKtwDxqwS5a4ZwAX8awArWziJTscVJU9IGPsLZnkC9cRhU3iOt1y5tV8Md0UWBWawTFScNUhSf2dK6i4woTLS%2B%2Bo6jlZ%2BslJdZWRH1PFJ4NsWm37N6ousvv7YQzrtw3KPDCwPr4bRpMUktWZee5M31oVTT7nn2hVnk2Ra%2BD9MQC9qHlGdGNvyhoQ4BUR00WI2pZPmOjV6qgeqQDbCQnXH99bvvo13BYt8bgnE1%2F73F7vIKOeKxAjdJzsXMld%2BbHStp3xYmXSf0MPlDh7H1CVye66KgQutaIsYY8Wijfi0hI63PlYNVNYJe9kLr181pWUQ0fPvIEloXhl1cmBVaTy6rjxT1kHC7TeFea2ouLZfs2eY26chI3Wg0oHb1zsRO3Ds6kO1zOmahHeKMGA5AD39Sl%2FaEIQEaS3L%2FIytWB%2Fg%2F%2BulphS1A%2FRD%2BijrQ6eh%2BkD2GVn06k8sQXSXNA7VY4Vj%2BHN%2FEHxqzACNspgTttaufjwCek50unC3DFRPuKpcbxmJTZKeu1ZCTlv4WGkJhNM5wHZU2OutWuhq8uJnJjweTkSzE1Tq4wj2oSG3z8XcGRNH1LRYj%2BSBHdS%2BKM%2F5jaaAT3ilgQMN%2F7PcZwzFSl48zgiKa2AQZSvJ1apK8Ubd1PMwueKXwgY6pgEpoq2TX17KxLdjBcz1uSBnTj5AosWz34WEBa%2FtYVDV4OjBWOroQgVRLyFARMXAtTrK%2B6HRodMmSB4LWMIIOVbcwPQtOjffewfYZfTuGvMJahsBkER2kpKh0x1xPiFDLS18oVjYo293y%2Fv7RPFdplOFdV%2BFBd702LAs2Co5heGmnjM4qPFaunLl8IEnmCzZ2PytUu0C5o%2FMKNTRzLs20uPP0F%2F%2FtjMx&X-Amz-Signature=dc38e4762194ab08d03265042b7d8a296c18a58ad3c5d7a34fa9303bb6aaa3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C2EX7WH%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T220741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzdkO7hlChDqdRH6NvfVDV6M78MtrO2w2LJ92O3pLrEAiAEtQD39ytOAua1gs1bYmZsXKGqj0bJCzh%2FBZ7lOPqoOSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcA7W%2BLrSAD2xTBwKtwDxqwS5a4ZwAX8awArWziJTscVJU9IGPsLZnkC9cRhU3iOt1y5tV8Md0UWBWawTFScNUhSf2dK6i4woTLS%2B%2Bo6jlZ%2BslJdZWRH1PFJ4NsWm37N6ousvv7YQzrtw3KPDCwPr4bRpMUktWZee5M31oVTT7nn2hVnk2Ra%2BD9MQC9qHlGdGNvyhoQ4BUR00WI2pZPmOjV6qgeqQDbCQnXH99bvvo13BYt8bgnE1%2F73F7vIKOeKxAjdJzsXMld%2BbHStp3xYmXSf0MPlDh7H1CVye66KgQutaIsYY8Wijfi0hI63PlYNVNYJe9kLr181pWUQ0fPvIEloXhl1cmBVaTy6rjxT1kHC7TeFea2ouLZfs2eY26chI3Wg0oHb1zsRO3Ds6kO1zOmahHeKMGA5AD39Sl%2FaEIQEaS3L%2FIytWB%2Fg%2F%2BulphS1A%2FRD%2BijrQ6eh%2BkD2GVn06k8sQXSXNA7VY4Vj%2BHN%2FEHxqzACNspgTttaufjwCek50unC3DFRPuKpcbxmJTZKeu1ZCTlv4WGkJhNM5wHZU2OutWuhq8uJnJjweTkSzE1Tq4wj2oSG3z8XcGRNH1LRYj%2BSBHdS%2BKM%2F5jaaAT3ilgQMN%2F7PcZwzFSl48zgiKa2AQZSvJ1apK8Ubd1PMwueKXwgY6pgEpoq2TX17KxLdjBcz1uSBnTj5AosWz34WEBa%2FtYVDV4OjBWOroQgVRLyFARMXAtTrK%2B6HRodMmSB4LWMIIOVbcwPQtOjffewfYZfTuGvMJahsBkER2kpKh0x1xPiFDLS18oVjYo293y%2Fv7RPFdplOFdV%2BFBd702LAs2Co5heGmnjM4qPFaunLl8IEnmCzZ2PytUu0C5o%2FMKNTRzLs20uPP0F%2F%2FtjMx&X-Amz-Signature=ebd23ee71a3229bd11d467b4c2df80c6b38c9a549207ee47519c11e068e24281&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
