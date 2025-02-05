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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J3R666A%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBuffVFlpeFDrU8kByJDFkZPxh3W%2FDVCc%2BiaWReADPlpAiEAn%2FDgNaGj5HBzTmhsOOywkyoD831eW4McyE5MzCtukOcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAX4jdTGHWV5gTbnDyrcAzDN7JhxKGNJZkqCvGFKdSUDRwJQzH2%2FmYC1ztwux96l8yE5Sapc3xWLzJAGKtB2mL7INxToJqHMxYRS7GPq9Rfgmq6M2SoOM3%2BP3rTcXENfUHR6kpYhwt9my9P3qqSD3%2BE9FZdDVgU4JVAbItpFuBPSH7T35T5ZMSG0m4Bh1WDB33sMbMRR1TLwX8NGuJgdjV7xufbT4xhj4ZEZhzooTQ6l5czg%2F04iTXxyW0BwV%2B15WdA74UbBk4%2B1g887i5jusoaxQRB8INvnqxVKol2DqiU20RqksNN4Cpt5vyC3yrtjZOL46H9MNXwNltNMNY%2FOWptBN6CDwreLsGyEaWVYkhCWnsD1DBg35lsjwfMcGTLly9JKRQf7HJ1I17hOcRiHZsxRGmjB2D%2Bc05izsF38kHGJwp52OELiVWM%2Fz4yLmaSCYKuwppyMBamQqebJ69EIeBNMrrReeVi5djmGulzMdsHrli4WITtBXr8nF5Rum0J50Eagobwj9D2T5ZmUp64BQets9QjtILGxaConywJlD84SLgjAB09oaVUuLo40gQx8zlONnYpzIavwrKzUNMGTtCoa%2Fqo%2FUUnt0ykM06OJujZQwsrGuyGmwFzOdHydbEsGDb2jjO%2F3n7jUnT0XMObkjb0GOqUBLiiMbzkQodTDtt0gnrYonrQVWwNhNtoFBGyRP%2FxfZ4EQWH8uNNGc9eep8cYHpRIn%2B0HwzYL%2Fhu4QE5Ij2ZOKhs4BMRQXxE55oPBUApvLt%2BkrhckG36JVooLDv06IWlDN9JfqEaUTYeqiCVYR5DNuwxH7WXjZcTS7F9sch8k5x27U5ow7dwP3L90KIthn3h2JI3SWRH0Cxl9MES5MIZDOFVn6CnUy&X-Amz-Signature=3189b9905f0e005a44a1ce1ea85a51f288ba0e7256b167269a332fe235eabe65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J3R666A%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBuffVFlpeFDrU8kByJDFkZPxh3W%2FDVCc%2BiaWReADPlpAiEAn%2FDgNaGj5HBzTmhsOOywkyoD831eW4McyE5MzCtukOcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAX4jdTGHWV5gTbnDyrcAzDN7JhxKGNJZkqCvGFKdSUDRwJQzH2%2FmYC1ztwux96l8yE5Sapc3xWLzJAGKtB2mL7INxToJqHMxYRS7GPq9Rfgmq6M2SoOM3%2BP3rTcXENfUHR6kpYhwt9my9P3qqSD3%2BE9FZdDVgU4JVAbItpFuBPSH7T35T5ZMSG0m4Bh1WDB33sMbMRR1TLwX8NGuJgdjV7xufbT4xhj4ZEZhzooTQ6l5czg%2F04iTXxyW0BwV%2B15WdA74UbBk4%2B1g887i5jusoaxQRB8INvnqxVKol2DqiU20RqksNN4Cpt5vyC3yrtjZOL46H9MNXwNltNMNY%2FOWptBN6CDwreLsGyEaWVYkhCWnsD1DBg35lsjwfMcGTLly9JKRQf7HJ1I17hOcRiHZsxRGmjB2D%2Bc05izsF38kHGJwp52OELiVWM%2Fz4yLmaSCYKuwppyMBamQqebJ69EIeBNMrrReeVi5djmGulzMdsHrli4WITtBXr8nF5Rum0J50Eagobwj9D2T5ZmUp64BQets9QjtILGxaConywJlD84SLgjAB09oaVUuLo40gQx8zlONnYpzIavwrKzUNMGTtCoa%2Fqo%2FUUnt0ykM06OJujZQwsrGuyGmwFzOdHydbEsGDb2jjO%2F3n7jUnT0XMObkjb0GOqUBLiiMbzkQodTDtt0gnrYonrQVWwNhNtoFBGyRP%2FxfZ4EQWH8uNNGc9eep8cYHpRIn%2B0HwzYL%2Fhu4QE5Ij2ZOKhs4BMRQXxE55oPBUApvLt%2BkrhckG36JVooLDv06IWlDN9JfqEaUTYeqiCVYR5DNuwxH7WXjZcTS7F9sch8k5x27U5ow7dwP3L90KIthn3h2JI3SWRH0Cxl9MES5MIZDOFVn6CnUy&X-Amz-Signature=0b50ec4185eeb210d8505b107d3595c88b70de5000534fe1df83486a10c76926&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J3R666A%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBuffVFlpeFDrU8kByJDFkZPxh3W%2FDVCc%2BiaWReADPlpAiEAn%2FDgNaGj5HBzTmhsOOywkyoD831eW4McyE5MzCtukOcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAX4jdTGHWV5gTbnDyrcAzDN7JhxKGNJZkqCvGFKdSUDRwJQzH2%2FmYC1ztwux96l8yE5Sapc3xWLzJAGKtB2mL7INxToJqHMxYRS7GPq9Rfgmq6M2SoOM3%2BP3rTcXENfUHR6kpYhwt9my9P3qqSD3%2BE9FZdDVgU4JVAbItpFuBPSH7T35T5ZMSG0m4Bh1WDB33sMbMRR1TLwX8NGuJgdjV7xufbT4xhj4ZEZhzooTQ6l5czg%2F04iTXxyW0BwV%2B15WdA74UbBk4%2B1g887i5jusoaxQRB8INvnqxVKol2DqiU20RqksNN4Cpt5vyC3yrtjZOL46H9MNXwNltNMNY%2FOWptBN6CDwreLsGyEaWVYkhCWnsD1DBg35lsjwfMcGTLly9JKRQf7HJ1I17hOcRiHZsxRGmjB2D%2Bc05izsF38kHGJwp52OELiVWM%2Fz4yLmaSCYKuwppyMBamQqebJ69EIeBNMrrReeVi5djmGulzMdsHrli4WITtBXr8nF5Rum0J50Eagobwj9D2T5ZmUp64BQets9QjtILGxaConywJlD84SLgjAB09oaVUuLo40gQx8zlONnYpzIavwrKzUNMGTtCoa%2Fqo%2FUUnt0ykM06OJujZQwsrGuyGmwFzOdHydbEsGDb2jjO%2F3n7jUnT0XMObkjb0GOqUBLiiMbzkQodTDtt0gnrYonrQVWwNhNtoFBGyRP%2FxfZ4EQWH8uNNGc9eep8cYHpRIn%2B0HwzYL%2Fhu4QE5Ij2ZOKhs4BMRQXxE55oPBUApvLt%2BkrhckG36JVooLDv06IWlDN9JfqEaUTYeqiCVYR5DNuwxH7WXjZcTS7F9sch8k5x27U5ow7dwP3L90KIthn3h2JI3SWRH0Cxl9MES5MIZDOFVn6CnUy&X-Amz-Signature=cc5008079fa7a869ba3ec45bef476cbc24b97dcb051c54a34878137df8f245c2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J3R666A%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBuffVFlpeFDrU8kByJDFkZPxh3W%2FDVCc%2BiaWReADPlpAiEAn%2FDgNaGj5HBzTmhsOOywkyoD831eW4McyE5MzCtukOcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAX4jdTGHWV5gTbnDyrcAzDN7JhxKGNJZkqCvGFKdSUDRwJQzH2%2FmYC1ztwux96l8yE5Sapc3xWLzJAGKtB2mL7INxToJqHMxYRS7GPq9Rfgmq6M2SoOM3%2BP3rTcXENfUHR6kpYhwt9my9P3qqSD3%2BE9FZdDVgU4JVAbItpFuBPSH7T35T5ZMSG0m4Bh1WDB33sMbMRR1TLwX8NGuJgdjV7xufbT4xhj4ZEZhzooTQ6l5czg%2F04iTXxyW0BwV%2B15WdA74UbBk4%2B1g887i5jusoaxQRB8INvnqxVKol2DqiU20RqksNN4Cpt5vyC3yrtjZOL46H9MNXwNltNMNY%2FOWptBN6CDwreLsGyEaWVYkhCWnsD1DBg35lsjwfMcGTLly9JKRQf7HJ1I17hOcRiHZsxRGmjB2D%2Bc05izsF38kHGJwp52OELiVWM%2Fz4yLmaSCYKuwppyMBamQqebJ69EIeBNMrrReeVi5djmGulzMdsHrli4WITtBXr8nF5Rum0J50Eagobwj9D2T5ZmUp64BQets9QjtILGxaConywJlD84SLgjAB09oaVUuLo40gQx8zlONnYpzIavwrKzUNMGTtCoa%2Fqo%2FUUnt0ykM06OJujZQwsrGuyGmwFzOdHydbEsGDb2jjO%2F3n7jUnT0XMObkjb0GOqUBLiiMbzkQodTDtt0gnrYonrQVWwNhNtoFBGyRP%2FxfZ4EQWH8uNNGc9eep8cYHpRIn%2B0HwzYL%2Fhu4QE5Ij2ZOKhs4BMRQXxE55oPBUApvLt%2BkrhckG36JVooLDv06IWlDN9JfqEaUTYeqiCVYR5DNuwxH7WXjZcTS7F9sch8k5x27U5ow7dwP3L90KIthn3h2JI3SWRH0Cxl9MES5MIZDOFVn6CnUy&X-Amz-Signature=6fe678c8a6d41f9bc43ed9668fd426966e9c6b7e8db2b3f6017c0d55683c13b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J3R666A%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBuffVFlpeFDrU8kByJDFkZPxh3W%2FDVCc%2BiaWReADPlpAiEAn%2FDgNaGj5HBzTmhsOOywkyoD831eW4McyE5MzCtukOcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAX4jdTGHWV5gTbnDyrcAzDN7JhxKGNJZkqCvGFKdSUDRwJQzH2%2FmYC1ztwux96l8yE5Sapc3xWLzJAGKtB2mL7INxToJqHMxYRS7GPq9Rfgmq6M2SoOM3%2BP3rTcXENfUHR6kpYhwt9my9P3qqSD3%2BE9FZdDVgU4JVAbItpFuBPSH7T35T5ZMSG0m4Bh1WDB33sMbMRR1TLwX8NGuJgdjV7xufbT4xhj4ZEZhzooTQ6l5czg%2F04iTXxyW0BwV%2B15WdA74UbBk4%2B1g887i5jusoaxQRB8INvnqxVKol2DqiU20RqksNN4Cpt5vyC3yrtjZOL46H9MNXwNltNMNY%2FOWptBN6CDwreLsGyEaWVYkhCWnsD1DBg35lsjwfMcGTLly9JKRQf7HJ1I17hOcRiHZsxRGmjB2D%2Bc05izsF38kHGJwp52OELiVWM%2Fz4yLmaSCYKuwppyMBamQqebJ69EIeBNMrrReeVi5djmGulzMdsHrli4WITtBXr8nF5Rum0J50Eagobwj9D2T5ZmUp64BQets9QjtILGxaConywJlD84SLgjAB09oaVUuLo40gQx8zlONnYpzIavwrKzUNMGTtCoa%2Fqo%2FUUnt0ykM06OJujZQwsrGuyGmwFzOdHydbEsGDb2jjO%2F3n7jUnT0XMObkjb0GOqUBLiiMbzkQodTDtt0gnrYonrQVWwNhNtoFBGyRP%2FxfZ4EQWH8uNNGc9eep8cYHpRIn%2B0HwzYL%2Fhu4QE5Ij2ZOKhs4BMRQXxE55oPBUApvLt%2BkrhckG36JVooLDv06IWlDN9JfqEaUTYeqiCVYR5DNuwxH7WXjZcTS7F9sch8k5x27U5ow7dwP3L90KIthn3h2JI3SWRH0Cxl9MES5MIZDOFVn6CnUy&X-Amz-Signature=a7f7c4eabb0a1e4f2dbe15c3dc9c39821d08c4169cd6f8a38332e68bd36a4f69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J3R666A%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBuffVFlpeFDrU8kByJDFkZPxh3W%2FDVCc%2BiaWReADPlpAiEAn%2FDgNaGj5HBzTmhsOOywkyoD831eW4McyE5MzCtukOcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAX4jdTGHWV5gTbnDyrcAzDN7JhxKGNJZkqCvGFKdSUDRwJQzH2%2FmYC1ztwux96l8yE5Sapc3xWLzJAGKtB2mL7INxToJqHMxYRS7GPq9Rfgmq6M2SoOM3%2BP3rTcXENfUHR6kpYhwt9my9P3qqSD3%2BE9FZdDVgU4JVAbItpFuBPSH7T35T5ZMSG0m4Bh1WDB33sMbMRR1TLwX8NGuJgdjV7xufbT4xhj4ZEZhzooTQ6l5czg%2F04iTXxyW0BwV%2B15WdA74UbBk4%2B1g887i5jusoaxQRB8INvnqxVKol2DqiU20RqksNN4Cpt5vyC3yrtjZOL46H9MNXwNltNMNY%2FOWptBN6CDwreLsGyEaWVYkhCWnsD1DBg35lsjwfMcGTLly9JKRQf7HJ1I17hOcRiHZsxRGmjB2D%2Bc05izsF38kHGJwp52OELiVWM%2Fz4yLmaSCYKuwppyMBamQqebJ69EIeBNMrrReeVi5djmGulzMdsHrli4WITtBXr8nF5Rum0J50Eagobwj9D2T5ZmUp64BQets9QjtILGxaConywJlD84SLgjAB09oaVUuLo40gQx8zlONnYpzIavwrKzUNMGTtCoa%2Fqo%2FUUnt0ykM06OJujZQwsrGuyGmwFzOdHydbEsGDb2jjO%2F3n7jUnT0XMObkjb0GOqUBLiiMbzkQodTDtt0gnrYonrQVWwNhNtoFBGyRP%2FxfZ4EQWH8uNNGc9eep8cYHpRIn%2B0HwzYL%2Fhu4QE5Ij2ZOKhs4BMRQXxE55oPBUApvLt%2BkrhckG36JVooLDv06IWlDN9JfqEaUTYeqiCVYR5DNuwxH7WXjZcTS7F9sch8k5x27U5ow7dwP3L90KIthn3h2JI3SWRH0Cxl9MES5MIZDOFVn6CnUy&X-Amz-Signature=27438f173c41b386f870f001bc3f4a0e2683a31069b4632a3bd1b7f5a074bb8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J3R666A%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBuffVFlpeFDrU8kByJDFkZPxh3W%2FDVCc%2BiaWReADPlpAiEAn%2FDgNaGj5HBzTmhsOOywkyoD831eW4McyE5MzCtukOcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAX4jdTGHWV5gTbnDyrcAzDN7JhxKGNJZkqCvGFKdSUDRwJQzH2%2FmYC1ztwux96l8yE5Sapc3xWLzJAGKtB2mL7INxToJqHMxYRS7GPq9Rfgmq6M2SoOM3%2BP3rTcXENfUHR6kpYhwt9my9P3qqSD3%2BE9FZdDVgU4JVAbItpFuBPSH7T35T5ZMSG0m4Bh1WDB33sMbMRR1TLwX8NGuJgdjV7xufbT4xhj4ZEZhzooTQ6l5czg%2F04iTXxyW0BwV%2B15WdA74UbBk4%2B1g887i5jusoaxQRB8INvnqxVKol2DqiU20RqksNN4Cpt5vyC3yrtjZOL46H9MNXwNltNMNY%2FOWptBN6CDwreLsGyEaWVYkhCWnsD1DBg35lsjwfMcGTLly9JKRQf7HJ1I17hOcRiHZsxRGmjB2D%2Bc05izsF38kHGJwp52OELiVWM%2Fz4yLmaSCYKuwppyMBamQqebJ69EIeBNMrrReeVi5djmGulzMdsHrli4WITtBXr8nF5Rum0J50Eagobwj9D2T5ZmUp64BQets9QjtILGxaConywJlD84SLgjAB09oaVUuLo40gQx8zlONnYpzIavwrKzUNMGTtCoa%2Fqo%2FUUnt0ykM06OJujZQwsrGuyGmwFzOdHydbEsGDb2jjO%2F3n7jUnT0XMObkjb0GOqUBLiiMbzkQodTDtt0gnrYonrQVWwNhNtoFBGyRP%2FxfZ4EQWH8uNNGc9eep8cYHpRIn%2B0HwzYL%2Fhu4QE5Ij2ZOKhs4BMRQXxE55oPBUApvLt%2BkrhckG36JVooLDv06IWlDN9JfqEaUTYeqiCVYR5DNuwxH7WXjZcTS7F9sch8k5x27U5ow7dwP3L90KIthn3h2JI3SWRH0Cxl9MES5MIZDOFVn6CnUy&X-Amz-Signature=fc3d8be59b9013d026e4b728cc401a0cc654a2e5204ba0ec609f7e0a0ccabf09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J3R666A%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBuffVFlpeFDrU8kByJDFkZPxh3W%2FDVCc%2BiaWReADPlpAiEAn%2FDgNaGj5HBzTmhsOOywkyoD831eW4McyE5MzCtukOcq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAX4jdTGHWV5gTbnDyrcAzDN7JhxKGNJZkqCvGFKdSUDRwJQzH2%2FmYC1ztwux96l8yE5Sapc3xWLzJAGKtB2mL7INxToJqHMxYRS7GPq9Rfgmq6M2SoOM3%2BP3rTcXENfUHR6kpYhwt9my9P3qqSD3%2BE9FZdDVgU4JVAbItpFuBPSH7T35T5ZMSG0m4Bh1WDB33sMbMRR1TLwX8NGuJgdjV7xufbT4xhj4ZEZhzooTQ6l5czg%2F04iTXxyW0BwV%2B15WdA74UbBk4%2B1g887i5jusoaxQRB8INvnqxVKol2DqiU20RqksNN4Cpt5vyC3yrtjZOL46H9MNXwNltNMNY%2FOWptBN6CDwreLsGyEaWVYkhCWnsD1DBg35lsjwfMcGTLly9JKRQf7HJ1I17hOcRiHZsxRGmjB2D%2Bc05izsF38kHGJwp52OELiVWM%2Fz4yLmaSCYKuwppyMBamQqebJ69EIeBNMrrReeVi5djmGulzMdsHrli4WITtBXr8nF5Rum0J50Eagobwj9D2T5ZmUp64BQets9QjtILGxaConywJlD84SLgjAB09oaVUuLo40gQx8zlONnYpzIavwrKzUNMGTtCoa%2Fqo%2FUUnt0ykM06OJujZQwsrGuyGmwFzOdHydbEsGDb2jjO%2F3n7jUnT0XMObkjb0GOqUBLiiMbzkQodTDtt0gnrYonrQVWwNhNtoFBGyRP%2FxfZ4EQWH8uNNGc9eep8cYHpRIn%2B0HwzYL%2Fhu4QE5Ij2ZOKhs4BMRQXxE55oPBUApvLt%2BkrhckG36JVooLDv06IWlDN9JfqEaUTYeqiCVYR5DNuwxH7WXjZcTS7F9sch8k5x27U5ow7dwP3L90KIthn3h2JI3SWRH0Cxl9MES5MIZDOFVn6CnUy&X-Amz-Signature=bff3e13b4c7f23a4352fbd3c4b4ba6ac933d022cc705e90dd36d804eda1369f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
