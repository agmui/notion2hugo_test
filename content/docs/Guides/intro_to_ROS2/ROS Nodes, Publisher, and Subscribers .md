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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBZ54N2%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDsW6AAOEBbtopqVULcpYYsV1UMoyrDFrQGSsU8l4dSjwIgI3869FUqTfAv7D6EsscPDpqiWGIId7Wf8rY3W3zNbb8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMV6g7wrlUniqgKveSrcA%2BM5jtXxuaSd7q2aO2e%2FYcalLNP7mGC0AwVY9AKpeJlZsdbfwJaIIJbYBJtP9RCOfsqbex0YfKq0g%2FbMp9gYcnOHuZbIfnIL3oCL8ZdXPfxOy4JVlyl9npmmZbq%2BE3D6SX2ZSe7R94SEa%2BTqdeyTf8BoLtaZHRH9I26MRJkL37IX4DytKZVb0OokwEok4uQP1qKnoBi0fnp3NDIM0AgrHn5pi8CidnMcfN7Qnl0Ssy8uAOZdNaR0v7e2a6PWxwDE3WvCqln6xadF1vsbmyiOJL3IcKHJxP1P%2BVdUVdxMfcYbwl1mB4ZiDEo%2FcOP1a9gLHWdlP1IaLAWRQwBk4btbPYFMTlVgJCeAj6HSww%2F%2BN4G0F7HcAi1R8nYALNHoviuQrHNFLve%2F%2BVL70pJiBKWVgeakH%2FReT6UtO9Ib%2B6qOHiugwd08ZU8bSN9IoYCy3O35KOOMR%2BNOpMIoATUisSrjCVMUVKYxBBiLD80hddD%2FbBdkpMHyi7asn2ptpxCDBbNuOowS17q7rz1s2r9xhP6QMgxEFd%2F2YEgWBxfE5oBQEh3TkeeVXaMl%2BCQdd%2F5Fhxhal1TRMI812C0VImo5kUtx1xkpVa6j0l1bFtpZWJbJZlUJOlH9H3wNKjXf%2Bw6zMKT6lMgGOqUBGGGO02zuOnusYVfl9x9duwQSNSKyF4ZJm1dmHrGeztwBHYfTdULEETsaTq1PartaLjhuHVrGdwSQk4vr8aVP7G2RGxOCo2ETv%2FRvVqTVUrqNzxK2UaQss%2Bu5uLOCHAHen82jY4g4SjPvL7PM0ACW7KekvvUX46WBEH9xVqZGNA865e28BJYFwE8RCsvngjO5E%2B3UD1kqe5IzqNA7fcaEMzCjylU2&X-Amz-Signature=0223ed5e9ef650d88c382bd135b65e7b18d3fa1e8dc4da535247f8443cb5846e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBZ54N2%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDsW6AAOEBbtopqVULcpYYsV1UMoyrDFrQGSsU8l4dSjwIgI3869FUqTfAv7D6EsscPDpqiWGIId7Wf8rY3W3zNbb8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMV6g7wrlUniqgKveSrcA%2BM5jtXxuaSd7q2aO2e%2FYcalLNP7mGC0AwVY9AKpeJlZsdbfwJaIIJbYBJtP9RCOfsqbex0YfKq0g%2FbMp9gYcnOHuZbIfnIL3oCL8ZdXPfxOy4JVlyl9npmmZbq%2BE3D6SX2ZSe7R94SEa%2BTqdeyTf8BoLtaZHRH9I26MRJkL37IX4DytKZVb0OokwEok4uQP1qKnoBi0fnp3NDIM0AgrHn5pi8CidnMcfN7Qnl0Ssy8uAOZdNaR0v7e2a6PWxwDE3WvCqln6xadF1vsbmyiOJL3IcKHJxP1P%2BVdUVdxMfcYbwl1mB4ZiDEo%2FcOP1a9gLHWdlP1IaLAWRQwBk4btbPYFMTlVgJCeAj6HSww%2F%2BN4G0F7HcAi1R8nYALNHoviuQrHNFLve%2F%2BVL70pJiBKWVgeakH%2FReT6UtO9Ib%2B6qOHiugwd08ZU8bSN9IoYCy3O35KOOMR%2BNOpMIoATUisSrjCVMUVKYxBBiLD80hddD%2FbBdkpMHyi7asn2ptpxCDBbNuOowS17q7rz1s2r9xhP6QMgxEFd%2F2YEgWBxfE5oBQEh3TkeeVXaMl%2BCQdd%2F5Fhxhal1TRMI812C0VImo5kUtx1xkpVa6j0l1bFtpZWJbJZlUJOlH9H3wNKjXf%2Bw6zMKT6lMgGOqUBGGGO02zuOnusYVfl9x9duwQSNSKyF4ZJm1dmHrGeztwBHYfTdULEETsaTq1PartaLjhuHVrGdwSQk4vr8aVP7G2RGxOCo2ETv%2FRvVqTVUrqNzxK2UaQss%2Bu5uLOCHAHen82jY4g4SjPvL7PM0ACW7KekvvUX46WBEH9xVqZGNA865e28BJYFwE8RCsvngjO5E%2B3UD1kqe5IzqNA7fcaEMzCjylU2&X-Amz-Signature=473d86828b29fafa93de7393673c944ff9b16dc234a592ea1536bd85c1aff219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBZ54N2%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDsW6AAOEBbtopqVULcpYYsV1UMoyrDFrQGSsU8l4dSjwIgI3869FUqTfAv7D6EsscPDpqiWGIId7Wf8rY3W3zNbb8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMV6g7wrlUniqgKveSrcA%2BM5jtXxuaSd7q2aO2e%2FYcalLNP7mGC0AwVY9AKpeJlZsdbfwJaIIJbYBJtP9RCOfsqbex0YfKq0g%2FbMp9gYcnOHuZbIfnIL3oCL8ZdXPfxOy4JVlyl9npmmZbq%2BE3D6SX2ZSe7R94SEa%2BTqdeyTf8BoLtaZHRH9I26MRJkL37IX4DytKZVb0OokwEok4uQP1qKnoBi0fnp3NDIM0AgrHn5pi8CidnMcfN7Qnl0Ssy8uAOZdNaR0v7e2a6PWxwDE3WvCqln6xadF1vsbmyiOJL3IcKHJxP1P%2BVdUVdxMfcYbwl1mB4ZiDEo%2FcOP1a9gLHWdlP1IaLAWRQwBk4btbPYFMTlVgJCeAj6HSww%2F%2BN4G0F7HcAi1R8nYALNHoviuQrHNFLve%2F%2BVL70pJiBKWVgeakH%2FReT6UtO9Ib%2B6qOHiugwd08ZU8bSN9IoYCy3O35KOOMR%2BNOpMIoATUisSrjCVMUVKYxBBiLD80hddD%2FbBdkpMHyi7asn2ptpxCDBbNuOowS17q7rz1s2r9xhP6QMgxEFd%2F2YEgWBxfE5oBQEh3TkeeVXaMl%2BCQdd%2F5Fhxhal1TRMI812C0VImo5kUtx1xkpVa6j0l1bFtpZWJbJZlUJOlH9H3wNKjXf%2Bw6zMKT6lMgGOqUBGGGO02zuOnusYVfl9x9duwQSNSKyF4ZJm1dmHrGeztwBHYfTdULEETsaTq1PartaLjhuHVrGdwSQk4vr8aVP7G2RGxOCo2ETv%2FRvVqTVUrqNzxK2UaQss%2Bu5uLOCHAHen82jY4g4SjPvL7PM0ACW7KekvvUX46WBEH9xVqZGNA865e28BJYFwE8RCsvngjO5E%2B3UD1kqe5IzqNA7fcaEMzCjylU2&X-Amz-Signature=3e38bb2442307e143390c6622117436014ac15f4564b9bd03a722e19b600d823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBZ54N2%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDsW6AAOEBbtopqVULcpYYsV1UMoyrDFrQGSsU8l4dSjwIgI3869FUqTfAv7D6EsscPDpqiWGIId7Wf8rY3W3zNbb8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMV6g7wrlUniqgKveSrcA%2BM5jtXxuaSd7q2aO2e%2FYcalLNP7mGC0AwVY9AKpeJlZsdbfwJaIIJbYBJtP9RCOfsqbex0YfKq0g%2FbMp9gYcnOHuZbIfnIL3oCL8ZdXPfxOy4JVlyl9npmmZbq%2BE3D6SX2ZSe7R94SEa%2BTqdeyTf8BoLtaZHRH9I26MRJkL37IX4DytKZVb0OokwEok4uQP1qKnoBi0fnp3NDIM0AgrHn5pi8CidnMcfN7Qnl0Ssy8uAOZdNaR0v7e2a6PWxwDE3WvCqln6xadF1vsbmyiOJL3IcKHJxP1P%2BVdUVdxMfcYbwl1mB4ZiDEo%2FcOP1a9gLHWdlP1IaLAWRQwBk4btbPYFMTlVgJCeAj6HSww%2F%2BN4G0F7HcAi1R8nYALNHoviuQrHNFLve%2F%2BVL70pJiBKWVgeakH%2FReT6UtO9Ib%2B6qOHiugwd08ZU8bSN9IoYCy3O35KOOMR%2BNOpMIoATUisSrjCVMUVKYxBBiLD80hddD%2FbBdkpMHyi7asn2ptpxCDBbNuOowS17q7rz1s2r9xhP6QMgxEFd%2F2YEgWBxfE5oBQEh3TkeeVXaMl%2BCQdd%2F5Fhxhal1TRMI812C0VImo5kUtx1xkpVa6j0l1bFtpZWJbJZlUJOlH9H3wNKjXf%2Bw6zMKT6lMgGOqUBGGGO02zuOnusYVfl9x9duwQSNSKyF4ZJm1dmHrGeztwBHYfTdULEETsaTq1PartaLjhuHVrGdwSQk4vr8aVP7G2RGxOCo2ETv%2FRvVqTVUrqNzxK2UaQss%2Bu5uLOCHAHen82jY4g4SjPvL7PM0ACW7KekvvUX46WBEH9xVqZGNA865e28BJYFwE8RCsvngjO5E%2B3UD1kqe5IzqNA7fcaEMzCjylU2&X-Amz-Signature=9b2d45ee604472d14bc9cc699bca21532db6c851561bd33eba26fab5f0e99ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBZ54N2%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDsW6AAOEBbtopqVULcpYYsV1UMoyrDFrQGSsU8l4dSjwIgI3869FUqTfAv7D6EsscPDpqiWGIId7Wf8rY3W3zNbb8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMV6g7wrlUniqgKveSrcA%2BM5jtXxuaSd7q2aO2e%2FYcalLNP7mGC0AwVY9AKpeJlZsdbfwJaIIJbYBJtP9RCOfsqbex0YfKq0g%2FbMp9gYcnOHuZbIfnIL3oCL8ZdXPfxOy4JVlyl9npmmZbq%2BE3D6SX2ZSe7R94SEa%2BTqdeyTf8BoLtaZHRH9I26MRJkL37IX4DytKZVb0OokwEok4uQP1qKnoBi0fnp3NDIM0AgrHn5pi8CidnMcfN7Qnl0Ssy8uAOZdNaR0v7e2a6PWxwDE3WvCqln6xadF1vsbmyiOJL3IcKHJxP1P%2BVdUVdxMfcYbwl1mB4ZiDEo%2FcOP1a9gLHWdlP1IaLAWRQwBk4btbPYFMTlVgJCeAj6HSww%2F%2BN4G0F7HcAi1R8nYALNHoviuQrHNFLve%2F%2BVL70pJiBKWVgeakH%2FReT6UtO9Ib%2B6qOHiugwd08ZU8bSN9IoYCy3O35KOOMR%2BNOpMIoATUisSrjCVMUVKYxBBiLD80hddD%2FbBdkpMHyi7asn2ptpxCDBbNuOowS17q7rz1s2r9xhP6QMgxEFd%2F2YEgWBxfE5oBQEh3TkeeVXaMl%2BCQdd%2F5Fhxhal1TRMI812C0VImo5kUtx1xkpVa6j0l1bFtpZWJbJZlUJOlH9H3wNKjXf%2Bw6zMKT6lMgGOqUBGGGO02zuOnusYVfl9x9duwQSNSKyF4ZJm1dmHrGeztwBHYfTdULEETsaTq1PartaLjhuHVrGdwSQk4vr8aVP7G2RGxOCo2ETv%2FRvVqTVUrqNzxK2UaQss%2Bu5uLOCHAHen82jY4g4SjPvL7PM0ACW7KekvvUX46WBEH9xVqZGNA865e28BJYFwE8RCsvngjO5E%2B3UD1kqe5IzqNA7fcaEMzCjylU2&X-Amz-Signature=067e17f3694fe216ae099e41ebc3e858aefaf7106ffc67bb6128719446493d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBZ54N2%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDsW6AAOEBbtopqVULcpYYsV1UMoyrDFrQGSsU8l4dSjwIgI3869FUqTfAv7D6EsscPDpqiWGIId7Wf8rY3W3zNbb8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMV6g7wrlUniqgKveSrcA%2BM5jtXxuaSd7q2aO2e%2FYcalLNP7mGC0AwVY9AKpeJlZsdbfwJaIIJbYBJtP9RCOfsqbex0YfKq0g%2FbMp9gYcnOHuZbIfnIL3oCL8ZdXPfxOy4JVlyl9npmmZbq%2BE3D6SX2ZSe7R94SEa%2BTqdeyTf8BoLtaZHRH9I26MRJkL37IX4DytKZVb0OokwEok4uQP1qKnoBi0fnp3NDIM0AgrHn5pi8CidnMcfN7Qnl0Ssy8uAOZdNaR0v7e2a6PWxwDE3WvCqln6xadF1vsbmyiOJL3IcKHJxP1P%2BVdUVdxMfcYbwl1mB4ZiDEo%2FcOP1a9gLHWdlP1IaLAWRQwBk4btbPYFMTlVgJCeAj6HSww%2F%2BN4G0F7HcAi1R8nYALNHoviuQrHNFLve%2F%2BVL70pJiBKWVgeakH%2FReT6UtO9Ib%2B6qOHiugwd08ZU8bSN9IoYCy3O35KOOMR%2BNOpMIoATUisSrjCVMUVKYxBBiLD80hddD%2FbBdkpMHyi7asn2ptpxCDBbNuOowS17q7rz1s2r9xhP6QMgxEFd%2F2YEgWBxfE5oBQEh3TkeeVXaMl%2BCQdd%2F5Fhxhal1TRMI812C0VImo5kUtx1xkpVa6j0l1bFtpZWJbJZlUJOlH9H3wNKjXf%2Bw6zMKT6lMgGOqUBGGGO02zuOnusYVfl9x9duwQSNSKyF4ZJm1dmHrGeztwBHYfTdULEETsaTq1PartaLjhuHVrGdwSQk4vr8aVP7G2RGxOCo2ETv%2FRvVqTVUrqNzxK2UaQss%2Bu5uLOCHAHen82jY4g4SjPvL7PM0ACW7KekvvUX46WBEH9xVqZGNA865e28BJYFwE8RCsvngjO5E%2B3UD1kqe5IzqNA7fcaEMzCjylU2&X-Amz-Signature=8bb041e546d8960a007eabb6763c44ae42f82b2a964eccfd20d7d9b48d4f5157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBZ54N2%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDsW6AAOEBbtopqVULcpYYsV1UMoyrDFrQGSsU8l4dSjwIgI3869FUqTfAv7D6EsscPDpqiWGIId7Wf8rY3W3zNbb8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMV6g7wrlUniqgKveSrcA%2BM5jtXxuaSd7q2aO2e%2FYcalLNP7mGC0AwVY9AKpeJlZsdbfwJaIIJbYBJtP9RCOfsqbex0YfKq0g%2FbMp9gYcnOHuZbIfnIL3oCL8ZdXPfxOy4JVlyl9npmmZbq%2BE3D6SX2ZSe7R94SEa%2BTqdeyTf8BoLtaZHRH9I26MRJkL37IX4DytKZVb0OokwEok4uQP1qKnoBi0fnp3NDIM0AgrHn5pi8CidnMcfN7Qnl0Ssy8uAOZdNaR0v7e2a6PWxwDE3WvCqln6xadF1vsbmyiOJL3IcKHJxP1P%2BVdUVdxMfcYbwl1mB4ZiDEo%2FcOP1a9gLHWdlP1IaLAWRQwBk4btbPYFMTlVgJCeAj6HSww%2F%2BN4G0F7HcAi1R8nYALNHoviuQrHNFLve%2F%2BVL70pJiBKWVgeakH%2FReT6UtO9Ib%2B6qOHiugwd08ZU8bSN9IoYCy3O35KOOMR%2BNOpMIoATUisSrjCVMUVKYxBBiLD80hddD%2FbBdkpMHyi7asn2ptpxCDBbNuOowS17q7rz1s2r9xhP6QMgxEFd%2F2YEgWBxfE5oBQEh3TkeeVXaMl%2BCQdd%2F5Fhxhal1TRMI812C0VImo5kUtx1xkpVa6j0l1bFtpZWJbJZlUJOlH9H3wNKjXf%2Bw6zMKT6lMgGOqUBGGGO02zuOnusYVfl9x9duwQSNSKyF4ZJm1dmHrGeztwBHYfTdULEETsaTq1PartaLjhuHVrGdwSQk4vr8aVP7G2RGxOCo2ETv%2FRvVqTVUrqNzxK2UaQss%2Bu5uLOCHAHen82jY4g4SjPvL7PM0ACW7KekvvUX46WBEH9xVqZGNA865e28BJYFwE8RCsvngjO5E%2B3UD1kqe5IzqNA7fcaEMzCjylU2&X-Amz-Signature=7de8a91289fab1637e55c19bb485e663604dd05a6df6e0606b24d42b1d0181d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBBZ54N2%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDsW6AAOEBbtopqVULcpYYsV1UMoyrDFrQGSsU8l4dSjwIgI3869FUqTfAv7D6EsscPDpqiWGIId7Wf8rY3W3zNbb8q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMV6g7wrlUniqgKveSrcA%2BM5jtXxuaSd7q2aO2e%2FYcalLNP7mGC0AwVY9AKpeJlZsdbfwJaIIJbYBJtP9RCOfsqbex0YfKq0g%2FbMp9gYcnOHuZbIfnIL3oCL8ZdXPfxOy4JVlyl9npmmZbq%2BE3D6SX2ZSe7R94SEa%2BTqdeyTf8BoLtaZHRH9I26MRJkL37IX4DytKZVb0OokwEok4uQP1qKnoBi0fnp3NDIM0AgrHn5pi8CidnMcfN7Qnl0Ssy8uAOZdNaR0v7e2a6PWxwDE3WvCqln6xadF1vsbmyiOJL3IcKHJxP1P%2BVdUVdxMfcYbwl1mB4ZiDEo%2FcOP1a9gLHWdlP1IaLAWRQwBk4btbPYFMTlVgJCeAj6HSww%2F%2BN4G0F7HcAi1R8nYALNHoviuQrHNFLve%2F%2BVL70pJiBKWVgeakH%2FReT6UtO9Ib%2B6qOHiugwd08ZU8bSN9IoYCy3O35KOOMR%2BNOpMIoATUisSrjCVMUVKYxBBiLD80hddD%2FbBdkpMHyi7asn2ptpxCDBbNuOowS17q7rz1s2r9xhP6QMgxEFd%2F2YEgWBxfE5oBQEh3TkeeVXaMl%2BCQdd%2F5Fhxhal1TRMI812C0VImo5kUtx1xkpVa6j0l1bFtpZWJbJZlUJOlH9H3wNKjXf%2Bw6zMKT6lMgGOqUBGGGO02zuOnusYVfl9x9duwQSNSKyF4ZJm1dmHrGeztwBHYfTdULEETsaTq1PartaLjhuHVrGdwSQk4vr8aVP7G2RGxOCo2ETv%2FRvVqTVUrqNzxK2UaQss%2Bu5uLOCHAHen82jY4g4SjPvL7PM0ACW7KekvvUX46WBEH9xVqZGNA865e28BJYFwE8RCsvngjO5E%2B3UD1kqe5IzqNA7fcaEMzCjylU2&X-Amz-Signature=0777814368895a99b83fe9673801fc6bac44cc09a187ca6af5c0ad1953774e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
