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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP3FGW3V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUVbmByw6LrILWL%2B6N52fP6f56XMSdymecgrMRyOIehgIhAO04umxNiqjpLKi7QfUBXI05Hl82uA6oq%2BISYxtkn7oWKv8DCF0QABoMNjM3NDIzMTgzODA1Igy2iQ7P2jUh5aBpDH8q3AMoM2Ic9Sc8MtIgfXiI08mXZL8sp35jBtlczcDoh1Kr2ifcl0vgcWaRYOdzzoIi2oc8JQvni39I5Rn3SqNUDlP7fsJAzOAPlrlDQOAZNCW38yVtPZkaiADSMb7XzVwOKVq2%2Fjg3kbh9SnFFxNB9VlbKCeVY3NvqFQzz%2Bv6uwrdTxxyc%2FXnZU%2B5F82VwcX1HLglYatq6ew0zZlvXbEi1%2BzgklsNy6SlY3758qljjWM0kcTgOmV7%2BUi2Kztoc4GMvgc76XaYE%2BeZVjYPgBeINM1MC0Qf18i6rEmV1roYgDMPleu06IMC5zogjIki8KD7tcFbxM5me08EHLbZbiFFh2MyXa7LRKPOxy29DyQP0m%2FfjwyQ86q1GXvVa5rWkMpcSZQD0aWzyY%2F0IGF6XbQlJlHSNcAK5%2BlPuXC%2B9IAqapioBDDqkEOmDTVipsyYTiVHyShmSfDJOwmICodHUxSS26Nxdihw5sObto7n564PP9xhd9kF4q0%2BP2EcIElL%2BBBIoBCdbU4UYsVVi89jug5U1glEad4aowSNMKaJTaKMMFmHqD0giRBFqrGks1Vj2si7rJIp93vKMLEAZENku0FeiDh2%2Fkzz28Ohx0aQzK3Wg27xJl9IOri8q8pDI2jOjfTDQ%2BpLEBjqkAdp29zbnNDbGoKWRH37hCF%2BxyPZcuCnHLAo1B7Bh7IKs%2Busj1D7r%2BOpmIM5fKJTVwHE65BwdddEYPEi2qmmXyrGzCb1KcoSAS%2Ffvfj8Im4Ir8WmiDCN0SfZHdumeCsrw493bW%2FcuAyEdEdFF6jHZa2Fsg9PtdFjOw5epyDUu2o3r%2FCdWB4p5Bq6XFyHRyWgVvvIjMZwOmpiYjckvtNxPCqHk7DGZ&X-Amz-Signature=873e77f3006fffaf9cc5a1fe796245c8ceec4bc37ed0df4d1afbf695cee7aec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP3FGW3V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUVbmByw6LrILWL%2B6N52fP6f56XMSdymecgrMRyOIehgIhAO04umxNiqjpLKi7QfUBXI05Hl82uA6oq%2BISYxtkn7oWKv8DCF0QABoMNjM3NDIzMTgzODA1Igy2iQ7P2jUh5aBpDH8q3AMoM2Ic9Sc8MtIgfXiI08mXZL8sp35jBtlczcDoh1Kr2ifcl0vgcWaRYOdzzoIi2oc8JQvni39I5Rn3SqNUDlP7fsJAzOAPlrlDQOAZNCW38yVtPZkaiADSMb7XzVwOKVq2%2Fjg3kbh9SnFFxNB9VlbKCeVY3NvqFQzz%2Bv6uwrdTxxyc%2FXnZU%2B5F82VwcX1HLglYatq6ew0zZlvXbEi1%2BzgklsNy6SlY3758qljjWM0kcTgOmV7%2BUi2Kztoc4GMvgc76XaYE%2BeZVjYPgBeINM1MC0Qf18i6rEmV1roYgDMPleu06IMC5zogjIki8KD7tcFbxM5me08EHLbZbiFFh2MyXa7LRKPOxy29DyQP0m%2FfjwyQ86q1GXvVa5rWkMpcSZQD0aWzyY%2F0IGF6XbQlJlHSNcAK5%2BlPuXC%2B9IAqapioBDDqkEOmDTVipsyYTiVHyShmSfDJOwmICodHUxSS26Nxdihw5sObto7n564PP9xhd9kF4q0%2BP2EcIElL%2BBBIoBCdbU4UYsVVi89jug5U1glEad4aowSNMKaJTaKMMFmHqD0giRBFqrGks1Vj2si7rJIp93vKMLEAZENku0FeiDh2%2Fkzz28Ohx0aQzK3Wg27xJl9IOri8q8pDI2jOjfTDQ%2BpLEBjqkAdp29zbnNDbGoKWRH37hCF%2BxyPZcuCnHLAo1B7Bh7IKs%2Busj1D7r%2BOpmIM5fKJTVwHE65BwdddEYPEi2qmmXyrGzCb1KcoSAS%2Ffvfj8Im4Ir8WmiDCN0SfZHdumeCsrw493bW%2FcuAyEdEdFF6jHZa2Fsg9PtdFjOw5epyDUu2o3r%2FCdWB4p5Bq6XFyHRyWgVvvIjMZwOmpiYjckvtNxPCqHk7DGZ&X-Amz-Signature=467884d127bd732b84882250a7dcca4c1e98d5c4ed1c3f51bae41c2ebfd72b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP3FGW3V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUVbmByw6LrILWL%2B6N52fP6f56XMSdymecgrMRyOIehgIhAO04umxNiqjpLKi7QfUBXI05Hl82uA6oq%2BISYxtkn7oWKv8DCF0QABoMNjM3NDIzMTgzODA1Igy2iQ7P2jUh5aBpDH8q3AMoM2Ic9Sc8MtIgfXiI08mXZL8sp35jBtlczcDoh1Kr2ifcl0vgcWaRYOdzzoIi2oc8JQvni39I5Rn3SqNUDlP7fsJAzOAPlrlDQOAZNCW38yVtPZkaiADSMb7XzVwOKVq2%2Fjg3kbh9SnFFxNB9VlbKCeVY3NvqFQzz%2Bv6uwrdTxxyc%2FXnZU%2B5F82VwcX1HLglYatq6ew0zZlvXbEi1%2BzgklsNy6SlY3758qljjWM0kcTgOmV7%2BUi2Kztoc4GMvgc76XaYE%2BeZVjYPgBeINM1MC0Qf18i6rEmV1roYgDMPleu06IMC5zogjIki8KD7tcFbxM5me08EHLbZbiFFh2MyXa7LRKPOxy29DyQP0m%2FfjwyQ86q1GXvVa5rWkMpcSZQD0aWzyY%2F0IGF6XbQlJlHSNcAK5%2BlPuXC%2B9IAqapioBDDqkEOmDTVipsyYTiVHyShmSfDJOwmICodHUxSS26Nxdihw5sObto7n564PP9xhd9kF4q0%2BP2EcIElL%2BBBIoBCdbU4UYsVVi89jug5U1glEad4aowSNMKaJTaKMMFmHqD0giRBFqrGks1Vj2si7rJIp93vKMLEAZENku0FeiDh2%2Fkzz28Ohx0aQzK3Wg27xJl9IOri8q8pDI2jOjfTDQ%2BpLEBjqkAdp29zbnNDbGoKWRH37hCF%2BxyPZcuCnHLAo1B7Bh7IKs%2Busj1D7r%2BOpmIM5fKJTVwHE65BwdddEYPEi2qmmXyrGzCb1KcoSAS%2Ffvfj8Im4Ir8WmiDCN0SfZHdumeCsrw493bW%2FcuAyEdEdFF6jHZa2Fsg9PtdFjOw5epyDUu2o3r%2FCdWB4p5Bq6XFyHRyWgVvvIjMZwOmpiYjckvtNxPCqHk7DGZ&X-Amz-Signature=1aa1dcd364a38fb6dd4708aee4f41f2039fd859df060617f49d5b670981a4566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP3FGW3V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUVbmByw6LrILWL%2B6N52fP6f56XMSdymecgrMRyOIehgIhAO04umxNiqjpLKi7QfUBXI05Hl82uA6oq%2BISYxtkn7oWKv8DCF0QABoMNjM3NDIzMTgzODA1Igy2iQ7P2jUh5aBpDH8q3AMoM2Ic9Sc8MtIgfXiI08mXZL8sp35jBtlczcDoh1Kr2ifcl0vgcWaRYOdzzoIi2oc8JQvni39I5Rn3SqNUDlP7fsJAzOAPlrlDQOAZNCW38yVtPZkaiADSMb7XzVwOKVq2%2Fjg3kbh9SnFFxNB9VlbKCeVY3NvqFQzz%2Bv6uwrdTxxyc%2FXnZU%2B5F82VwcX1HLglYatq6ew0zZlvXbEi1%2BzgklsNy6SlY3758qljjWM0kcTgOmV7%2BUi2Kztoc4GMvgc76XaYE%2BeZVjYPgBeINM1MC0Qf18i6rEmV1roYgDMPleu06IMC5zogjIki8KD7tcFbxM5me08EHLbZbiFFh2MyXa7LRKPOxy29DyQP0m%2FfjwyQ86q1GXvVa5rWkMpcSZQD0aWzyY%2F0IGF6XbQlJlHSNcAK5%2BlPuXC%2B9IAqapioBDDqkEOmDTVipsyYTiVHyShmSfDJOwmICodHUxSS26Nxdihw5sObto7n564PP9xhd9kF4q0%2BP2EcIElL%2BBBIoBCdbU4UYsVVi89jug5U1glEad4aowSNMKaJTaKMMFmHqD0giRBFqrGks1Vj2si7rJIp93vKMLEAZENku0FeiDh2%2Fkzz28Ohx0aQzK3Wg27xJl9IOri8q8pDI2jOjfTDQ%2BpLEBjqkAdp29zbnNDbGoKWRH37hCF%2BxyPZcuCnHLAo1B7Bh7IKs%2Busj1D7r%2BOpmIM5fKJTVwHE65BwdddEYPEi2qmmXyrGzCb1KcoSAS%2Ffvfj8Im4Ir8WmiDCN0SfZHdumeCsrw493bW%2FcuAyEdEdFF6jHZa2Fsg9PtdFjOw5epyDUu2o3r%2FCdWB4p5Bq6XFyHRyWgVvvIjMZwOmpiYjckvtNxPCqHk7DGZ&X-Amz-Signature=dd319ae96197ebd7990ca02321e56338841ed797ac1e4a559df5b1a291340457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP3FGW3V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUVbmByw6LrILWL%2B6N52fP6f56XMSdymecgrMRyOIehgIhAO04umxNiqjpLKi7QfUBXI05Hl82uA6oq%2BISYxtkn7oWKv8DCF0QABoMNjM3NDIzMTgzODA1Igy2iQ7P2jUh5aBpDH8q3AMoM2Ic9Sc8MtIgfXiI08mXZL8sp35jBtlczcDoh1Kr2ifcl0vgcWaRYOdzzoIi2oc8JQvni39I5Rn3SqNUDlP7fsJAzOAPlrlDQOAZNCW38yVtPZkaiADSMb7XzVwOKVq2%2Fjg3kbh9SnFFxNB9VlbKCeVY3NvqFQzz%2Bv6uwrdTxxyc%2FXnZU%2B5F82VwcX1HLglYatq6ew0zZlvXbEi1%2BzgklsNy6SlY3758qljjWM0kcTgOmV7%2BUi2Kztoc4GMvgc76XaYE%2BeZVjYPgBeINM1MC0Qf18i6rEmV1roYgDMPleu06IMC5zogjIki8KD7tcFbxM5me08EHLbZbiFFh2MyXa7LRKPOxy29DyQP0m%2FfjwyQ86q1GXvVa5rWkMpcSZQD0aWzyY%2F0IGF6XbQlJlHSNcAK5%2BlPuXC%2B9IAqapioBDDqkEOmDTVipsyYTiVHyShmSfDJOwmICodHUxSS26Nxdihw5sObto7n564PP9xhd9kF4q0%2BP2EcIElL%2BBBIoBCdbU4UYsVVi89jug5U1glEad4aowSNMKaJTaKMMFmHqD0giRBFqrGks1Vj2si7rJIp93vKMLEAZENku0FeiDh2%2Fkzz28Ohx0aQzK3Wg27xJl9IOri8q8pDI2jOjfTDQ%2BpLEBjqkAdp29zbnNDbGoKWRH37hCF%2BxyPZcuCnHLAo1B7Bh7IKs%2Busj1D7r%2BOpmIM5fKJTVwHE65BwdddEYPEi2qmmXyrGzCb1KcoSAS%2Ffvfj8Im4Ir8WmiDCN0SfZHdumeCsrw493bW%2FcuAyEdEdFF6jHZa2Fsg9PtdFjOw5epyDUu2o3r%2FCdWB4p5Bq6XFyHRyWgVvvIjMZwOmpiYjckvtNxPCqHk7DGZ&X-Amz-Signature=4e82781234e6aa4a5697c6e9f6fdcc96d6c81eb79efdbd838ce5a27965ccce89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP3FGW3V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUVbmByw6LrILWL%2B6N52fP6f56XMSdymecgrMRyOIehgIhAO04umxNiqjpLKi7QfUBXI05Hl82uA6oq%2BISYxtkn7oWKv8DCF0QABoMNjM3NDIzMTgzODA1Igy2iQ7P2jUh5aBpDH8q3AMoM2Ic9Sc8MtIgfXiI08mXZL8sp35jBtlczcDoh1Kr2ifcl0vgcWaRYOdzzoIi2oc8JQvni39I5Rn3SqNUDlP7fsJAzOAPlrlDQOAZNCW38yVtPZkaiADSMb7XzVwOKVq2%2Fjg3kbh9SnFFxNB9VlbKCeVY3NvqFQzz%2Bv6uwrdTxxyc%2FXnZU%2B5F82VwcX1HLglYatq6ew0zZlvXbEi1%2BzgklsNy6SlY3758qljjWM0kcTgOmV7%2BUi2Kztoc4GMvgc76XaYE%2BeZVjYPgBeINM1MC0Qf18i6rEmV1roYgDMPleu06IMC5zogjIki8KD7tcFbxM5me08EHLbZbiFFh2MyXa7LRKPOxy29DyQP0m%2FfjwyQ86q1GXvVa5rWkMpcSZQD0aWzyY%2F0IGF6XbQlJlHSNcAK5%2BlPuXC%2B9IAqapioBDDqkEOmDTVipsyYTiVHyShmSfDJOwmICodHUxSS26Nxdihw5sObto7n564PP9xhd9kF4q0%2BP2EcIElL%2BBBIoBCdbU4UYsVVi89jug5U1glEad4aowSNMKaJTaKMMFmHqD0giRBFqrGks1Vj2si7rJIp93vKMLEAZENku0FeiDh2%2Fkzz28Ohx0aQzK3Wg27xJl9IOri8q8pDI2jOjfTDQ%2BpLEBjqkAdp29zbnNDbGoKWRH37hCF%2BxyPZcuCnHLAo1B7Bh7IKs%2Busj1D7r%2BOpmIM5fKJTVwHE65BwdddEYPEi2qmmXyrGzCb1KcoSAS%2Ffvfj8Im4Ir8WmiDCN0SfZHdumeCsrw493bW%2FcuAyEdEdFF6jHZa2Fsg9PtdFjOw5epyDUu2o3r%2FCdWB4p5Bq6XFyHRyWgVvvIjMZwOmpiYjckvtNxPCqHk7DGZ&X-Amz-Signature=ca0f5dff2d08790e247c6471f9091649f811188db59f73a85ff3256b4f8df48f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP3FGW3V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUVbmByw6LrILWL%2B6N52fP6f56XMSdymecgrMRyOIehgIhAO04umxNiqjpLKi7QfUBXI05Hl82uA6oq%2BISYxtkn7oWKv8DCF0QABoMNjM3NDIzMTgzODA1Igy2iQ7P2jUh5aBpDH8q3AMoM2Ic9Sc8MtIgfXiI08mXZL8sp35jBtlczcDoh1Kr2ifcl0vgcWaRYOdzzoIi2oc8JQvni39I5Rn3SqNUDlP7fsJAzOAPlrlDQOAZNCW38yVtPZkaiADSMb7XzVwOKVq2%2Fjg3kbh9SnFFxNB9VlbKCeVY3NvqFQzz%2Bv6uwrdTxxyc%2FXnZU%2B5F82VwcX1HLglYatq6ew0zZlvXbEi1%2BzgklsNy6SlY3758qljjWM0kcTgOmV7%2BUi2Kztoc4GMvgc76XaYE%2BeZVjYPgBeINM1MC0Qf18i6rEmV1roYgDMPleu06IMC5zogjIki8KD7tcFbxM5me08EHLbZbiFFh2MyXa7LRKPOxy29DyQP0m%2FfjwyQ86q1GXvVa5rWkMpcSZQD0aWzyY%2F0IGF6XbQlJlHSNcAK5%2BlPuXC%2B9IAqapioBDDqkEOmDTVipsyYTiVHyShmSfDJOwmICodHUxSS26Nxdihw5sObto7n564PP9xhd9kF4q0%2BP2EcIElL%2BBBIoBCdbU4UYsVVi89jug5U1glEad4aowSNMKaJTaKMMFmHqD0giRBFqrGks1Vj2si7rJIp93vKMLEAZENku0FeiDh2%2Fkzz28Ohx0aQzK3Wg27xJl9IOri8q8pDI2jOjfTDQ%2BpLEBjqkAdp29zbnNDbGoKWRH37hCF%2BxyPZcuCnHLAo1B7Bh7IKs%2Busj1D7r%2BOpmIM5fKJTVwHE65BwdddEYPEi2qmmXyrGzCb1KcoSAS%2Ffvfj8Im4Ir8WmiDCN0SfZHdumeCsrw493bW%2FcuAyEdEdFF6jHZa2Fsg9PtdFjOw5epyDUu2o3r%2FCdWB4p5Bq6XFyHRyWgVvvIjMZwOmpiYjckvtNxPCqHk7DGZ&X-Amz-Signature=d3bb09ee5ae3fafcd9100d03f7be2632d728fe14163853ca71d317e01b882e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZP3FGW3V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDUVbmByw6LrILWL%2B6N52fP6f56XMSdymecgrMRyOIehgIhAO04umxNiqjpLKi7QfUBXI05Hl82uA6oq%2BISYxtkn7oWKv8DCF0QABoMNjM3NDIzMTgzODA1Igy2iQ7P2jUh5aBpDH8q3AMoM2Ic9Sc8MtIgfXiI08mXZL8sp35jBtlczcDoh1Kr2ifcl0vgcWaRYOdzzoIi2oc8JQvni39I5Rn3SqNUDlP7fsJAzOAPlrlDQOAZNCW38yVtPZkaiADSMb7XzVwOKVq2%2Fjg3kbh9SnFFxNB9VlbKCeVY3NvqFQzz%2Bv6uwrdTxxyc%2FXnZU%2B5F82VwcX1HLglYatq6ew0zZlvXbEi1%2BzgklsNy6SlY3758qljjWM0kcTgOmV7%2BUi2Kztoc4GMvgc76XaYE%2BeZVjYPgBeINM1MC0Qf18i6rEmV1roYgDMPleu06IMC5zogjIki8KD7tcFbxM5me08EHLbZbiFFh2MyXa7LRKPOxy29DyQP0m%2FfjwyQ86q1GXvVa5rWkMpcSZQD0aWzyY%2F0IGF6XbQlJlHSNcAK5%2BlPuXC%2B9IAqapioBDDqkEOmDTVipsyYTiVHyShmSfDJOwmICodHUxSS26Nxdihw5sObto7n564PP9xhd9kF4q0%2BP2EcIElL%2BBBIoBCdbU4UYsVVi89jug5U1glEad4aowSNMKaJTaKMMFmHqD0giRBFqrGks1Vj2si7rJIp93vKMLEAZENku0FeiDh2%2Fkzz28Ohx0aQzK3Wg27xJl9IOri8q8pDI2jOjfTDQ%2BpLEBjqkAdp29zbnNDbGoKWRH37hCF%2BxyPZcuCnHLAo1B7Bh7IKs%2Busj1D7r%2BOpmIM5fKJTVwHE65BwdddEYPEi2qmmXyrGzCb1KcoSAS%2Ffvfj8Im4Ir8WmiDCN0SfZHdumeCsrw493bW%2FcuAyEdEdFF6jHZa2Fsg9PtdFjOw5epyDUu2o3r%2FCdWB4p5Bq6XFyHRyWgVvvIjMZwOmpiYjckvtNxPCqHk7DGZ&X-Amz-Signature=e9584f059d30f0a4ca8e1f4195e68d6048be2e9a896e6b9818e546ad9922f9f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
