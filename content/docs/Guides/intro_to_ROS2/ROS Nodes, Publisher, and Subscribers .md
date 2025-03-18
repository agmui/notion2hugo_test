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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHVQ2XA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0nnQJtdJGAl%2Ff3nq1pOQbocdB7AL2Ti%2B4qZRv7JxZAIhAOyVaXKTb0GZ%2B6n4wCQLi8OT%2BKnD1euh8GjzY7it142LKv8DCFcQABoMNjM3NDIzMTgzODA1Igy774INUHRHE2vJ84Aq3AOe84oeGlUifAvy38DvqBQu1mn66lFHmV%2BIc55sjvy3V56L1484KWOJf5WVvGqWeLKXXOR%2FKtzrHbQFFawGY%2BTd1Vvsf2P7LsQZtfLk5zdvCQ92PovN3Losu%2BPFgKiottU9BmIx1XSic04HbdPnsn3eYBlUSTlNRmykgta8ZJRDgTR0g2Fq5dvwBHoiLLK5qDStpNRe9vnGyZ28WK0hzcaqIJY2WMWlLGrMpwyQ4ffHZ1vEfkQ2g3OONUFQUHpM2%2BVGI6eQuBOZPpQxsglUjlnAPniOATUf%2FyyOTTgwUKcr8%2BdCogUiv8cRT5NdRg7FB%2FgRsFi4NbwK95ky30ALCXt%2B%2FTcP%2BqpHIzP%2BTdWYRd0KOCDLrhubbLKqedlyly3LmEfQnJ4ykhn1s3eRAEl0PNLZW9pNPNhpqULoB9XGl0nxvvaL0eZBwoF5Fglo7%2FqvLRm6%2BxtjlaSwLXv5Rk4J3i5V2cwqtPm6PHaXcQxNFXuQLmjCWhwMmZhCIapwLecPPdxO2yJr2idNpMuW2xQAFYqjWWVwrAsqR%2BiRCXj8Qq%2BIWAQT4iK31Jn1QcypaPxX4XQEAgeQX1MiNV1irQIeHvqlqrvP0nbJCEGniKDorpSPcbAiu4CVOQMK1CU2bDDXh%2BS%2BBjqkAQrDgwCARCScM6EyNYrLVu8JXZgg9C5DqaXIjVG%2B2eHVBLSUH4oDpuIdzhDt%2Fo0%2FssWGOmzR%2FE8FsrXsQgAku06wG6WxyLmIOR3QvZZ0xmMybDLBs0BaZ533LYkqs5gmHknsVABUBHD7l0qRgercdKi75X1IBq5CVSl3gjDW%2Bu%2FgiWB4M%2F%2F159akoGe1OIRtkX%2FpGm77XEGIJFVs8hV%2F4ES3D8zV&X-Amz-Signature=b291227564e50fd9726c4f5b87a6a90faaf01868958408529922953b94739fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHVQ2XA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0nnQJtdJGAl%2Ff3nq1pOQbocdB7AL2Ti%2B4qZRv7JxZAIhAOyVaXKTb0GZ%2B6n4wCQLi8OT%2BKnD1euh8GjzY7it142LKv8DCFcQABoMNjM3NDIzMTgzODA1Igy774INUHRHE2vJ84Aq3AOe84oeGlUifAvy38DvqBQu1mn66lFHmV%2BIc55sjvy3V56L1484KWOJf5WVvGqWeLKXXOR%2FKtzrHbQFFawGY%2BTd1Vvsf2P7LsQZtfLk5zdvCQ92PovN3Losu%2BPFgKiottU9BmIx1XSic04HbdPnsn3eYBlUSTlNRmykgta8ZJRDgTR0g2Fq5dvwBHoiLLK5qDStpNRe9vnGyZ28WK0hzcaqIJY2WMWlLGrMpwyQ4ffHZ1vEfkQ2g3OONUFQUHpM2%2BVGI6eQuBOZPpQxsglUjlnAPniOATUf%2FyyOTTgwUKcr8%2BdCogUiv8cRT5NdRg7FB%2FgRsFi4NbwK95ky30ALCXt%2B%2FTcP%2BqpHIzP%2BTdWYRd0KOCDLrhubbLKqedlyly3LmEfQnJ4ykhn1s3eRAEl0PNLZW9pNPNhpqULoB9XGl0nxvvaL0eZBwoF5Fglo7%2FqvLRm6%2BxtjlaSwLXv5Rk4J3i5V2cwqtPm6PHaXcQxNFXuQLmjCWhwMmZhCIapwLecPPdxO2yJr2idNpMuW2xQAFYqjWWVwrAsqR%2BiRCXj8Qq%2BIWAQT4iK31Jn1QcypaPxX4XQEAgeQX1MiNV1irQIeHvqlqrvP0nbJCEGniKDorpSPcbAiu4CVOQMK1CU2bDDXh%2BS%2BBjqkAQrDgwCARCScM6EyNYrLVu8JXZgg9C5DqaXIjVG%2B2eHVBLSUH4oDpuIdzhDt%2Fo0%2FssWGOmzR%2FE8FsrXsQgAku06wG6WxyLmIOR3QvZZ0xmMybDLBs0BaZ533LYkqs5gmHknsVABUBHD7l0qRgercdKi75X1IBq5CVSl3gjDW%2Bu%2FgiWB4M%2F%2F159akoGe1OIRtkX%2FpGm77XEGIJFVs8hV%2F4ES3D8zV&X-Amz-Signature=9359c2b4b89fa99069b33f10ce8910b395b13e1add37479e52300164f130f258&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHVQ2XA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0nnQJtdJGAl%2Ff3nq1pOQbocdB7AL2Ti%2B4qZRv7JxZAIhAOyVaXKTb0GZ%2B6n4wCQLi8OT%2BKnD1euh8GjzY7it142LKv8DCFcQABoMNjM3NDIzMTgzODA1Igy774INUHRHE2vJ84Aq3AOe84oeGlUifAvy38DvqBQu1mn66lFHmV%2BIc55sjvy3V56L1484KWOJf5WVvGqWeLKXXOR%2FKtzrHbQFFawGY%2BTd1Vvsf2P7LsQZtfLk5zdvCQ92PovN3Losu%2BPFgKiottU9BmIx1XSic04HbdPnsn3eYBlUSTlNRmykgta8ZJRDgTR0g2Fq5dvwBHoiLLK5qDStpNRe9vnGyZ28WK0hzcaqIJY2WMWlLGrMpwyQ4ffHZ1vEfkQ2g3OONUFQUHpM2%2BVGI6eQuBOZPpQxsglUjlnAPniOATUf%2FyyOTTgwUKcr8%2BdCogUiv8cRT5NdRg7FB%2FgRsFi4NbwK95ky30ALCXt%2B%2FTcP%2BqpHIzP%2BTdWYRd0KOCDLrhubbLKqedlyly3LmEfQnJ4ykhn1s3eRAEl0PNLZW9pNPNhpqULoB9XGl0nxvvaL0eZBwoF5Fglo7%2FqvLRm6%2BxtjlaSwLXv5Rk4J3i5V2cwqtPm6PHaXcQxNFXuQLmjCWhwMmZhCIapwLecPPdxO2yJr2idNpMuW2xQAFYqjWWVwrAsqR%2BiRCXj8Qq%2BIWAQT4iK31Jn1QcypaPxX4XQEAgeQX1MiNV1irQIeHvqlqrvP0nbJCEGniKDorpSPcbAiu4CVOQMK1CU2bDDXh%2BS%2BBjqkAQrDgwCARCScM6EyNYrLVu8JXZgg9C5DqaXIjVG%2B2eHVBLSUH4oDpuIdzhDt%2Fo0%2FssWGOmzR%2FE8FsrXsQgAku06wG6WxyLmIOR3QvZZ0xmMybDLBs0BaZ533LYkqs5gmHknsVABUBHD7l0qRgercdKi75X1IBq5CVSl3gjDW%2Bu%2FgiWB4M%2F%2F159akoGe1OIRtkX%2FpGm77XEGIJFVs8hV%2F4ES3D8zV&X-Amz-Signature=49f6605fa948d89f959544799de3b31509a85cdf9223d630fc9918665c1d36f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHVQ2XA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0nnQJtdJGAl%2Ff3nq1pOQbocdB7AL2Ti%2B4qZRv7JxZAIhAOyVaXKTb0GZ%2B6n4wCQLi8OT%2BKnD1euh8GjzY7it142LKv8DCFcQABoMNjM3NDIzMTgzODA1Igy774INUHRHE2vJ84Aq3AOe84oeGlUifAvy38DvqBQu1mn66lFHmV%2BIc55sjvy3V56L1484KWOJf5WVvGqWeLKXXOR%2FKtzrHbQFFawGY%2BTd1Vvsf2P7LsQZtfLk5zdvCQ92PovN3Losu%2BPFgKiottU9BmIx1XSic04HbdPnsn3eYBlUSTlNRmykgta8ZJRDgTR0g2Fq5dvwBHoiLLK5qDStpNRe9vnGyZ28WK0hzcaqIJY2WMWlLGrMpwyQ4ffHZ1vEfkQ2g3OONUFQUHpM2%2BVGI6eQuBOZPpQxsglUjlnAPniOATUf%2FyyOTTgwUKcr8%2BdCogUiv8cRT5NdRg7FB%2FgRsFi4NbwK95ky30ALCXt%2B%2FTcP%2BqpHIzP%2BTdWYRd0KOCDLrhubbLKqedlyly3LmEfQnJ4ykhn1s3eRAEl0PNLZW9pNPNhpqULoB9XGl0nxvvaL0eZBwoF5Fglo7%2FqvLRm6%2BxtjlaSwLXv5Rk4J3i5V2cwqtPm6PHaXcQxNFXuQLmjCWhwMmZhCIapwLecPPdxO2yJr2idNpMuW2xQAFYqjWWVwrAsqR%2BiRCXj8Qq%2BIWAQT4iK31Jn1QcypaPxX4XQEAgeQX1MiNV1irQIeHvqlqrvP0nbJCEGniKDorpSPcbAiu4CVOQMK1CU2bDDXh%2BS%2BBjqkAQrDgwCARCScM6EyNYrLVu8JXZgg9C5DqaXIjVG%2B2eHVBLSUH4oDpuIdzhDt%2Fo0%2FssWGOmzR%2FE8FsrXsQgAku06wG6WxyLmIOR3QvZZ0xmMybDLBs0BaZ533LYkqs5gmHknsVABUBHD7l0qRgercdKi75X1IBq5CVSl3gjDW%2Bu%2FgiWB4M%2F%2F159akoGe1OIRtkX%2FpGm77XEGIJFVs8hV%2F4ES3D8zV&X-Amz-Signature=dcd1fb0bde0743db1565a2ec508efccb0304d19e686f8bc23a37b0e8d120add5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHVQ2XA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0nnQJtdJGAl%2Ff3nq1pOQbocdB7AL2Ti%2B4qZRv7JxZAIhAOyVaXKTb0GZ%2B6n4wCQLi8OT%2BKnD1euh8GjzY7it142LKv8DCFcQABoMNjM3NDIzMTgzODA1Igy774INUHRHE2vJ84Aq3AOe84oeGlUifAvy38DvqBQu1mn66lFHmV%2BIc55sjvy3V56L1484KWOJf5WVvGqWeLKXXOR%2FKtzrHbQFFawGY%2BTd1Vvsf2P7LsQZtfLk5zdvCQ92PovN3Losu%2BPFgKiottU9BmIx1XSic04HbdPnsn3eYBlUSTlNRmykgta8ZJRDgTR0g2Fq5dvwBHoiLLK5qDStpNRe9vnGyZ28WK0hzcaqIJY2WMWlLGrMpwyQ4ffHZ1vEfkQ2g3OONUFQUHpM2%2BVGI6eQuBOZPpQxsglUjlnAPniOATUf%2FyyOTTgwUKcr8%2BdCogUiv8cRT5NdRg7FB%2FgRsFi4NbwK95ky30ALCXt%2B%2FTcP%2BqpHIzP%2BTdWYRd0KOCDLrhubbLKqedlyly3LmEfQnJ4ykhn1s3eRAEl0PNLZW9pNPNhpqULoB9XGl0nxvvaL0eZBwoF5Fglo7%2FqvLRm6%2BxtjlaSwLXv5Rk4J3i5V2cwqtPm6PHaXcQxNFXuQLmjCWhwMmZhCIapwLecPPdxO2yJr2idNpMuW2xQAFYqjWWVwrAsqR%2BiRCXj8Qq%2BIWAQT4iK31Jn1QcypaPxX4XQEAgeQX1MiNV1irQIeHvqlqrvP0nbJCEGniKDorpSPcbAiu4CVOQMK1CU2bDDXh%2BS%2BBjqkAQrDgwCARCScM6EyNYrLVu8JXZgg9C5DqaXIjVG%2B2eHVBLSUH4oDpuIdzhDt%2Fo0%2FssWGOmzR%2FE8FsrXsQgAku06wG6WxyLmIOR3QvZZ0xmMybDLBs0BaZ533LYkqs5gmHknsVABUBHD7l0qRgercdKi75X1IBq5CVSl3gjDW%2Bu%2FgiWB4M%2F%2F159akoGe1OIRtkX%2FpGm77XEGIJFVs8hV%2F4ES3D8zV&X-Amz-Signature=be9df512095aeba48793cfc1ceb6836b2c678b9f619f389cdd4c0b43a3fd0ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHVQ2XA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0nnQJtdJGAl%2Ff3nq1pOQbocdB7AL2Ti%2B4qZRv7JxZAIhAOyVaXKTb0GZ%2B6n4wCQLi8OT%2BKnD1euh8GjzY7it142LKv8DCFcQABoMNjM3NDIzMTgzODA1Igy774INUHRHE2vJ84Aq3AOe84oeGlUifAvy38DvqBQu1mn66lFHmV%2BIc55sjvy3V56L1484KWOJf5WVvGqWeLKXXOR%2FKtzrHbQFFawGY%2BTd1Vvsf2P7LsQZtfLk5zdvCQ92PovN3Losu%2BPFgKiottU9BmIx1XSic04HbdPnsn3eYBlUSTlNRmykgta8ZJRDgTR0g2Fq5dvwBHoiLLK5qDStpNRe9vnGyZ28WK0hzcaqIJY2WMWlLGrMpwyQ4ffHZ1vEfkQ2g3OONUFQUHpM2%2BVGI6eQuBOZPpQxsglUjlnAPniOATUf%2FyyOTTgwUKcr8%2BdCogUiv8cRT5NdRg7FB%2FgRsFi4NbwK95ky30ALCXt%2B%2FTcP%2BqpHIzP%2BTdWYRd0KOCDLrhubbLKqedlyly3LmEfQnJ4ykhn1s3eRAEl0PNLZW9pNPNhpqULoB9XGl0nxvvaL0eZBwoF5Fglo7%2FqvLRm6%2BxtjlaSwLXv5Rk4J3i5V2cwqtPm6PHaXcQxNFXuQLmjCWhwMmZhCIapwLecPPdxO2yJr2idNpMuW2xQAFYqjWWVwrAsqR%2BiRCXj8Qq%2BIWAQT4iK31Jn1QcypaPxX4XQEAgeQX1MiNV1irQIeHvqlqrvP0nbJCEGniKDorpSPcbAiu4CVOQMK1CU2bDDXh%2BS%2BBjqkAQrDgwCARCScM6EyNYrLVu8JXZgg9C5DqaXIjVG%2B2eHVBLSUH4oDpuIdzhDt%2Fo0%2FssWGOmzR%2FE8FsrXsQgAku06wG6WxyLmIOR3QvZZ0xmMybDLBs0BaZ533LYkqs5gmHknsVABUBHD7l0qRgercdKi75X1IBq5CVSl3gjDW%2Bu%2FgiWB4M%2F%2F159akoGe1OIRtkX%2FpGm77XEGIJFVs8hV%2F4ES3D8zV&X-Amz-Signature=93b79f67409e6bdcb3d9e02ef322a38000fcf72d2167335a5ad92403d2f06a53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHVQ2XA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0nnQJtdJGAl%2Ff3nq1pOQbocdB7AL2Ti%2B4qZRv7JxZAIhAOyVaXKTb0GZ%2B6n4wCQLi8OT%2BKnD1euh8GjzY7it142LKv8DCFcQABoMNjM3NDIzMTgzODA1Igy774INUHRHE2vJ84Aq3AOe84oeGlUifAvy38DvqBQu1mn66lFHmV%2BIc55sjvy3V56L1484KWOJf5WVvGqWeLKXXOR%2FKtzrHbQFFawGY%2BTd1Vvsf2P7LsQZtfLk5zdvCQ92PovN3Losu%2BPFgKiottU9BmIx1XSic04HbdPnsn3eYBlUSTlNRmykgta8ZJRDgTR0g2Fq5dvwBHoiLLK5qDStpNRe9vnGyZ28WK0hzcaqIJY2WMWlLGrMpwyQ4ffHZ1vEfkQ2g3OONUFQUHpM2%2BVGI6eQuBOZPpQxsglUjlnAPniOATUf%2FyyOTTgwUKcr8%2BdCogUiv8cRT5NdRg7FB%2FgRsFi4NbwK95ky30ALCXt%2B%2FTcP%2BqpHIzP%2BTdWYRd0KOCDLrhubbLKqedlyly3LmEfQnJ4ykhn1s3eRAEl0PNLZW9pNPNhpqULoB9XGl0nxvvaL0eZBwoF5Fglo7%2FqvLRm6%2BxtjlaSwLXv5Rk4J3i5V2cwqtPm6PHaXcQxNFXuQLmjCWhwMmZhCIapwLecPPdxO2yJr2idNpMuW2xQAFYqjWWVwrAsqR%2BiRCXj8Qq%2BIWAQT4iK31Jn1QcypaPxX4XQEAgeQX1MiNV1irQIeHvqlqrvP0nbJCEGniKDorpSPcbAiu4CVOQMK1CU2bDDXh%2BS%2BBjqkAQrDgwCARCScM6EyNYrLVu8JXZgg9C5DqaXIjVG%2B2eHVBLSUH4oDpuIdzhDt%2Fo0%2FssWGOmzR%2FE8FsrXsQgAku06wG6WxyLmIOR3QvZZ0xmMybDLBs0BaZ533LYkqs5gmHknsVABUBHD7l0qRgercdKi75X1IBq5CVSl3gjDW%2Bu%2FgiWB4M%2F%2F159akoGe1OIRtkX%2FpGm77XEGIJFVs8hV%2F4ES3D8zV&X-Amz-Signature=0bfcfff1903ca106fe4c3e4e3b8af4c33fde00d20faefef9d64ba9be147ba6df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWHVQ2XA%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0nnQJtdJGAl%2Ff3nq1pOQbocdB7AL2Ti%2B4qZRv7JxZAIhAOyVaXKTb0GZ%2B6n4wCQLi8OT%2BKnD1euh8GjzY7it142LKv8DCFcQABoMNjM3NDIzMTgzODA1Igy774INUHRHE2vJ84Aq3AOe84oeGlUifAvy38DvqBQu1mn66lFHmV%2BIc55sjvy3V56L1484KWOJf5WVvGqWeLKXXOR%2FKtzrHbQFFawGY%2BTd1Vvsf2P7LsQZtfLk5zdvCQ92PovN3Losu%2BPFgKiottU9BmIx1XSic04HbdPnsn3eYBlUSTlNRmykgta8ZJRDgTR0g2Fq5dvwBHoiLLK5qDStpNRe9vnGyZ28WK0hzcaqIJY2WMWlLGrMpwyQ4ffHZ1vEfkQ2g3OONUFQUHpM2%2BVGI6eQuBOZPpQxsglUjlnAPniOATUf%2FyyOTTgwUKcr8%2BdCogUiv8cRT5NdRg7FB%2FgRsFi4NbwK95ky30ALCXt%2B%2FTcP%2BqpHIzP%2BTdWYRd0KOCDLrhubbLKqedlyly3LmEfQnJ4ykhn1s3eRAEl0PNLZW9pNPNhpqULoB9XGl0nxvvaL0eZBwoF5Fglo7%2FqvLRm6%2BxtjlaSwLXv5Rk4J3i5V2cwqtPm6PHaXcQxNFXuQLmjCWhwMmZhCIapwLecPPdxO2yJr2idNpMuW2xQAFYqjWWVwrAsqR%2BiRCXj8Qq%2BIWAQT4iK31Jn1QcypaPxX4XQEAgeQX1MiNV1irQIeHvqlqrvP0nbJCEGniKDorpSPcbAiu4CVOQMK1CU2bDDXh%2BS%2BBjqkAQrDgwCARCScM6EyNYrLVu8JXZgg9C5DqaXIjVG%2B2eHVBLSUH4oDpuIdzhDt%2Fo0%2FssWGOmzR%2FE8FsrXsQgAku06wG6WxyLmIOR3QvZZ0xmMybDLBs0BaZ533LYkqs5gmHknsVABUBHD7l0qRgercdKi75X1IBq5CVSl3gjDW%2Bu%2FgiWB4M%2F%2F159akoGe1OIRtkX%2FpGm77XEGIJFVs8hV%2F4ES3D8zV&X-Amz-Signature=224b8054f9f85ae1b24d17fd9d4c532bedfc97256133587f21799de45fd34474&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
