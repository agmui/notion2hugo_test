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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2SBIDS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCneSa2827VD2hUAzwUJ7va9ssFQhs%2FXIatMX7qUB6%2FLQIgS2h8XD%2FGZHoeQp%2Bj0mjv6Vxg%2FSMTGnx1CjjHeRbjdOsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiytRCVpb5dVAGuSircAwywtUXuni770uheXPCpmQcy1oefqHs088Jijw30NVvY0xIjI4X87xIZuY0t7NOliU1JMwuaRIRMNK4QQiCOcX6r%2FJUYUGUT1VgWShDX%2BXH5MbxeZd%2BJVTLQ11KZjPLB%2FIN6yQrzJT8JhQYc8h5C6PKOnE5QAp%2BApowSouhMwkchlB1rIJFbHfw4ScmX1R5pQkuebfZLI1lR%2FxbGMYK72mQSi0upIal6%2BBB5Q2osEpb26sI%2BTULEmEFp9B2Xss9rWgOJOQE%2FyoaiCIfgjr7wJrMZ5sJNlsm78tVZTk%2BVjaUXXrisoU176SQCTw5me4Z0BWOKebnV0RCjVO3HvzjJ5U6X50Mi3A3ypJvLk4hUjONExvUGRE2KTb6qt3LavO6muFRBC3WozwO3gB0%2BU0WNIx2ndXjt8zeBQL%2FKW3k44lY0yatuykO7cxIXJW67zc%2BaWnx%2FYEqK4PR4AmIwvnkKfhYGrbSXs%2BedNt%2FnUnZmNg4yUTI5hXTmRog7Ncc6ccA46wQZ8zwdI2uELRKD211YB2DBRjdKNW5p2OSC0PqSeiPUAFkB2IvONJ95egVOCv%2FpAP5YiQg0KKDyV86t80CI9rE1Tp0sUXB5mg008H0dmdKYBOBGWb5tDonoe9KdMK3j%2Fb4GOqUBw3QPhNJx7%2F38WUYmadKG2H42ODIQypGfx%2B%2BaZqNeQEFf9gw0CzhNnFvQhkGlTfsufTKKx36bbiIraHij8SS6V183pVw61cL61Bqg8aIoUmyMFkeWku8o%2FtaL9RggVoPV3FWr73i%2B5O8RB87Io89VegwTaxAfO%2BpDV6jtVIrd9B743hSYg%2B3ozXqzdTn%2B5GVvXGa1Smo1DHLRhEdapXQfRTcc11Kq&X-Amz-Signature=e37fa822f18dd6b18c8f82df39b780e9416c7c2cd105c9a73fbad946542d674f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2SBIDS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCneSa2827VD2hUAzwUJ7va9ssFQhs%2FXIatMX7qUB6%2FLQIgS2h8XD%2FGZHoeQp%2Bj0mjv6Vxg%2FSMTGnx1CjjHeRbjdOsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiytRCVpb5dVAGuSircAwywtUXuni770uheXPCpmQcy1oefqHs088Jijw30NVvY0xIjI4X87xIZuY0t7NOliU1JMwuaRIRMNK4QQiCOcX6r%2FJUYUGUT1VgWShDX%2BXH5MbxeZd%2BJVTLQ11KZjPLB%2FIN6yQrzJT8JhQYc8h5C6PKOnE5QAp%2BApowSouhMwkchlB1rIJFbHfw4ScmX1R5pQkuebfZLI1lR%2FxbGMYK72mQSi0upIal6%2BBB5Q2osEpb26sI%2BTULEmEFp9B2Xss9rWgOJOQE%2FyoaiCIfgjr7wJrMZ5sJNlsm78tVZTk%2BVjaUXXrisoU176SQCTw5me4Z0BWOKebnV0RCjVO3HvzjJ5U6X50Mi3A3ypJvLk4hUjONExvUGRE2KTb6qt3LavO6muFRBC3WozwO3gB0%2BU0WNIx2ndXjt8zeBQL%2FKW3k44lY0yatuykO7cxIXJW67zc%2BaWnx%2FYEqK4PR4AmIwvnkKfhYGrbSXs%2BedNt%2FnUnZmNg4yUTI5hXTmRog7Ncc6ccA46wQZ8zwdI2uELRKD211YB2DBRjdKNW5p2OSC0PqSeiPUAFkB2IvONJ95egVOCv%2FpAP5YiQg0KKDyV86t80CI9rE1Tp0sUXB5mg008H0dmdKYBOBGWb5tDonoe9KdMK3j%2Fb4GOqUBw3QPhNJx7%2F38WUYmadKG2H42ODIQypGfx%2B%2BaZqNeQEFf9gw0CzhNnFvQhkGlTfsufTKKx36bbiIraHij8SS6V183pVw61cL61Bqg8aIoUmyMFkeWku8o%2FtaL9RggVoPV3FWr73i%2B5O8RB87Io89VegwTaxAfO%2BpDV6jtVIrd9B743hSYg%2B3ozXqzdTn%2B5GVvXGa1Smo1DHLRhEdapXQfRTcc11Kq&X-Amz-Signature=7524651b84cec952a858e65a355f97d6737938e71ecc5d7ea267425030162925&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2SBIDS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCneSa2827VD2hUAzwUJ7va9ssFQhs%2FXIatMX7qUB6%2FLQIgS2h8XD%2FGZHoeQp%2Bj0mjv6Vxg%2FSMTGnx1CjjHeRbjdOsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiytRCVpb5dVAGuSircAwywtUXuni770uheXPCpmQcy1oefqHs088Jijw30NVvY0xIjI4X87xIZuY0t7NOliU1JMwuaRIRMNK4QQiCOcX6r%2FJUYUGUT1VgWShDX%2BXH5MbxeZd%2BJVTLQ11KZjPLB%2FIN6yQrzJT8JhQYc8h5C6PKOnE5QAp%2BApowSouhMwkchlB1rIJFbHfw4ScmX1R5pQkuebfZLI1lR%2FxbGMYK72mQSi0upIal6%2BBB5Q2osEpb26sI%2BTULEmEFp9B2Xss9rWgOJOQE%2FyoaiCIfgjr7wJrMZ5sJNlsm78tVZTk%2BVjaUXXrisoU176SQCTw5me4Z0BWOKebnV0RCjVO3HvzjJ5U6X50Mi3A3ypJvLk4hUjONExvUGRE2KTb6qt3LavO6muFRBC3WozwO3gB0%2BU0WNIx2ndXjt8zeBQL%2FKW3k44lY0yatuykO7cxIXJW67zc%2BaWnx%2FYEqK4PR4AmIwvnkKfhYGrbSXs%2BedNt%2FnUnZmNg4yUTI5hXTmRog7Ncc6ccA46wQZ8zwdI2uELRKD211YB2DBRjdKNW5p2OSC0PqSeiPUAFkB2IvONJ95egVOCv%2FpAP5YiQg0KKDyV86t80CI9rE1Tp0sUXB5mg008H0dmdKYBOBGWb5tDonoe9KdMK3j%2Fb4GOqUBw3QPhNJx7%2F38WUYmadKG2H42ODIQypGfx%2B%2BaZqNeQEFf9gw0CzhNnFvQhkGlTfsufTKKx36bbiIraHij8SS6V183pVw61cL61Bqg8aIoUmyMFkeWku8o%2FtaL9RggVoPV3FWr73i%2B5O8RB87Io89VegwTaxAfO%2BpDV6jtVIrd9B743hSYg%2B3ozXqzdTn%2B5GVvXGa1Smo1DHLRhEdapXQfRTcc11Kq&X-Amz-Signature=1856246acff0fba4e71d80bbf37e3984df5ba54c2b8091ff69a9d7112f447801&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2SBIDS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCneSa2827VD2hUAzwUJ7va9ssFQhs%2FXIatMX7qUB6%2FLQIgS2h8XD%2FGZHoeQp%2Bj0mjv6Vxg%2FSMTGnx1CjjHeRbjdOsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiytRCVpb5dVAGuSircAwywtUXuni770uheXPCpmQcy1oefqHs088Jijw30NVvY0xIjI4X87xIZuY0t7NOliU1JMwuaRIRMNK4QQiCOcX6r%2FJUYUGUT1VgWShDX%2BXH5MbxeZd%2BJVTLQ11KZjPLB%2FIN6yQrzJT8JhQYc8h5C6PKOnE5QAp%2BApowSouhMwkchlB1rIJFbHfw4ScmX1R5pQkuebfZLI1lR%2FxbGMYK72mQSi0upIal6%2BBB5Q2osEpb26sI%2BTULEmEFp9B2Xss9rWgOJOQE%2FyoaiCIfgjr7wJrMZ5sJNlsm78tVZTk%2BVjaUXXrisoU176SQCTw5me4Z0BWOKebnV0RCjVO3HvzjJ5U6X50Mi3A3ypJvLk4hUjONExvUGRE2KTb6qt3LavO6muFRBC3WozwO3gB0%2BU0WNIx2ndXjt8zeBQL%2FKW3k44lY0yatuykO7cxIXJW67zc%2BaWnx%2FYEqK4PR4AmIwvnkKfhYGrbSXs%2BedNt%2FnUnZmNg4yUTI5hXTmRog7Ncc6ccA46wQZ8zwdI2uELRKD211YB2DBRjdKNW5p2OSC0PqSeiPUAFkB2IvONJ95egVOCv%2FpAP5YiQg0KKDyV86t80CI9rE1Tp0sUXB5mg008H0dmdKYBOBGWb5tDonoe9KdMK3j%2Fb4GOqUBw3QPhNJx7%2F38WUYmadKG2H42ODIQypGfx%2B%2BaZqNeQEFf9gw0CzhNnFvQhkGlTfsufTKKx36bbiIraHij8SS6V183pVw61cL61Bqg8aIoUmyMFkeWku8o%2FtaL9RggVoPV3FWr73i%2B5O8RB87Io89VegwTaxAfO%2BpDV6jtVIrd9B743hSYg%2B3ozXqzdTn%2B5GVvXGa1Smo1DHLRhEdapXQfRTcc11Kq&X-Amz-Signature=07820c995ec1cdc46a4a9613fa88aefc3397da6960ced1b2c429cab1206c5844&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2SBIDS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCneSa2827VD2hUAzwUJ7va9ssFQhs%2FXIatMX7qUB6%2FLQIgS2h8XD%2FGZHoeQp%2Bj0mjv6Vxg%2FSMTGnx1CjjHeRbjdOsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiytRCVpb5dVAGuSircAwywtUXuni770uheXPCpmQcy1oefqHs088Jijw30NVvY0xIjI4X87xIZuY0t7NOliU1JMwuaRIRMNK4QQiCOcX6r%2FJUYUGUT1VgWShDX%2BXH5MbxeZd%2BJVTLQ11KZjPLB%2FIN6yQrzJT8JhQYc8h5C6PKOnE5QAp%2BApowSouhMwkchlB1rIJFbHfw4ScmX1R5pQkuebfZLI1lR%2FxbGMYK72mQSi0upIal6%2BBB5Q2osEpb26sI%2BTULEmEFp9B2Xss9rWgOJOQE%2FyoaiCIfgjr7wJrMZ5sJNlsm78tVZTk%2BVjaUXXrisoU176SQCTw5me4Z0BWOKebnV0RCjVO3HvzjJ5U6X50Mi3A3ypJvLk4hUjONExvUGRE2KTb6qt3LavO6muFRBC3WozwO3gB0%2BU0WNIx2ndXjt8zeBQL%2FKW3k44lY0yatuykO7cxIXJW67zc%2BaWnx%2FYEqK4PR4AmIwvnkKfhYGrbSXs%2BedNt%2FnUnZmNg4yUTI5hXTmRog7Ncc6ccA46wQZ8zwdI2uELRKD211YB2DBRjdKNW5p2OSC0PqSeiPUAFkB2IvONJ95egVOCv%2FpAP5YiQg0KKDyV86t80CI9rE1Tp0sUXB5mg008H0dmdKYBOBGWb5tDonoe9KdMK3j%2Fb4GOqUBw3QPhNJx7%2F38WUYmadKG2H42ODIQypGfx%2B%2BaZqNeQEFf9gw0CzhNnFvQhkGlTfsufTKKx36bbiIraHij8SS6V183pVw61cL61Bqg8aIoUmyMFkeWku8o%2FtaL9RggVoPV3FWr73i%2B5O8RB87Io89VegwTaxAfO%2BpDV6jtVIrd9B743hSYg%2B3ozXqzdTn%2B5GVvXGa1Smo1DHLRhEdapXQfRTcc11Kq&X-Amz-Signature=6f96fa32faf4fb6de55d498ba45604c07ee0f674bc1f8be57dcfd4b6a4c1ed41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2SBIDS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCneSa2827VD2hUAzwUJ7va9ssFQhs%2FXIatMX7qUB6%2FLQIgS2h8XD%2FGZHoeQp%2Bj0mjv6Vxg%2FSMTGnx1CjjHeRbjdOsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiytRCVpb5dVAGuSircAwywtUXuni770uheXPCpmQcy1oefqHs088Jijw30NVvY0xIjI4X87xIZuY0t7NOliU1JMwuaRIRMNK4QQiCOcX6r%2FJUYUGUT1VgWShDX%2BXH5MbxeZd%2BJVTLQ11KZjPLB%2FIN6yQrzJT8JhQYc8h5C6PKOnE5QAp%2BApowSouhMwkchlB1rIJFbHfw4ScmX1R5pQkuebfZLI1lR%2FxbGMYK72mQSi0upIal6%2BBB5Q2osEpb26sI%2BTULEmEFp9B2Xss9rWgOJOQE%2FyoaiCIfgjr7wJrMZ5sJNlsm78tVZTk%2BVjaUXXrisoU176SQCTw5me4Z0BWOKebnV0RCjVO3HvzjJ5U6X50Mi3A3ypJvLk4hUjONExvUGRE2KTb6qt3LavO6muFRBC3WozwO3gB0%2BU0WNIx2ndXjt8zeBQL%2FKW3k44lY0yatuykO7cxIXJW67zc%2BaWnx%2FYEqK4PR4AmIwvnkKfhYGrbSXs%2BedNt%2FnUnZmNg4yUTI5hXTmRog7Ncc6ccA46wQZ8zwdI2uELRKD211YB2DBRjdKNW5p2OSC0PqSeiPUAFkB2IvONJ95egVOCv%2FpAP5YiQg0KKDyV86t80CI9rE1Tp0sUXB5mg008H0dmdKYBOBGWb5tDonoe9KdMK3j%2Fb4GOqUBw3QPhNJx7%2F38WUYmadKG2H42ODIQypGfx%2B%2BaZqNeQEFf9gw0CzhNnFvQhkGlTfsufTKKx36bbiIraHij8SS6V183pVw61cL61Bqg8aIoUmyMFkeWku8o%2FtaL9RggVoPV3FWr73i%2B5O8RB87Io89VegwTaxAfO%2BpDV6jtVIrd9B743hSYg%2B3ozXqzdTn%2B5GVvXGa1Smo1DHLRhEdapXQfRTcc11Kq&X-Amz-Signature=b005c36fad5660ee3571b2fdf319ad79bf34dfb6c2875e024d04cc0860ec4398&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2SBIDS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCneSa2827VD2hUAzwUJ7va9ssFQhs%2FXIatMX7qUB6%2FLQIgS2h8XD%2FGZHoeQp%2Bj0mjv6Vxg%2FSMTGnx1CjjHeRbjdOsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiytRCVpb5dVAGuSircAwywtUXuni770uheXPCpmQcy1oefqHs088Jijw30NVvY0xIjI4X87xIZuY0t7NOliU1JMwuaRIRMNK4QQiCOcX6r%2FJUYUGUT1VgWShDX%2BXH5MbxeZd%2BJVTLQ11KZjPLB%2FIN6yQrzJT8JhQYc8h5C6PKOnE5QAp%2BApowSouhMwkchlB1rIJFbHfw4ScmX1R5pQkuebfZLI1lR%2FxbGMYK72mQSi0upIal6%2BBB5Q2osEpb26sI%2BTULEmEFp9B2Xss9rWgOJOQE%2FyoaiCIfgjr7wJrMZ5sJNlsm78tVZTk%2BVjaUXXrisoU176SQCTw5me4Z0BWOKebnV0RCjVO3HvzjJ5U6X50Mi3A3ypJvLk4hUjONExvUGRE2KTb6qt3LavO6muFRBC3WozwO3gB0%2BU0WNIx2ndXjt8zeBQL%2FKW3k44lY0yatuykO7cxIXJW67zc%2BaWnx%2FYEqK4PR4AmIwvnkKfhYGrbSXs%2BedNt%2FnUnZmNg4yUTI5hXTmRog7Ncc6ccA46wQZ8zwdI2uELRKD211YB2DBRjdKNW5p2OSC0PqSeiPUAFkB2IvONJ95egVOCv%2FpAP5YiQg0KKDyV86t80CI9rE1Tp0sUXB5mg008H0dmdKYBOBGWb5tDonoe9KdMK3j%2Fb4GOqUBw3QPhNJx7%2F38WUYmadKG2H42ODIQypGfx%2B%2BaZqNeQEFf9gw0CzhNnFvQhkGlTfsufTKKx36bbiIraHij8SS6V183pVw61cL61Bqg8aIoUmyMFkeWku8o%2FtaL9RggVoPV3FWr73i%2B5O8RB87Io89VegwTaxAfO%2BpDV6jtVIrd9B743hSYg%2B3ozXqzdTn%2B5GVvXGa1Smo1DHLRhEdapXQfRTcc11Kq&X-Amz-Signature=9348b04d4909ef80a66cd9ac1d4ef797e21888353b762a43c7bc244b77853465&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2SBIDS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCneSa2827VD2hUAzwUJ7va9ssFQhs%2FXIatMX7qUB6%2FLQIgS2h8XD%2FGZHoeQp%2Bj0mjv6Vxg%2FSMTGnx1CjjHeRbjdOsqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiytRCVpb5dVAGuSircAwywtUXuni770uheXPCpmQcy1oefqHs088Jijw30NVvY0xIjI4X87xIZuY0t7NOliU1JMwuaRIRMNK4QQiCOcX6r%2FJUYUGUT1VgWShDX%2BXH5MbxeZd%2BJVTLQ11KZjPLB%2FIN6yQrzJT8JhQYc8h5C6PKOnE5QAp%2BApowSouhMwkchlB1rIJFbHfw4ScmX1R5pQkuebfZLI1lR%2FxbGMYK72mQSi0upIal6%2BBB5Q2osEpb26sI%2BTULEmEFp9B2Xss9rWgOJOQE%2FyoaiCIfgjr7wJrMZ5sJNlsm78tVZTk%2BVjaUXXrisoU176SQCTw5me4Z0BWOKebnV0RCjVO3HvzjJ5U6X50Mi3A3ypJvLk4hUjONExvUGRE2KTb6qt3LavO6muFRBC3WozwO3gB0%2BU0WNIx2ndXjt8zeBQL%2FKW3k44lY0yatuykO7cxIXJW67zc%2BaWnx%2FYEqK4PR4AmIwvnkKfhYGrbSXs%2BedNt%2FnUnZmNg4yUTI5hXTmRog7Ncc6ccA46wQZ8zwdI2uELRKD211YB2DBRjdKNW5p2OSC0PqSeiPUAFkB2IvONJ95egVOCv%2FpAP5YiQg0KKDyV86t80CI9rE1Tp0sUXB5mg008H0dmdKYBOBGWb5tDonoe9KdMK3j%2Fb4GOqUBw3QPhNJx7%2F38WUYmadKG2H42ODIQypGfx%2B%2BaZqNeQEFf9gw0CzhNnFvQhkGlTfsufTKKx36bbiIraHij8SS6V183pVw61cL61Bqg8aIoUmyMFkeWku8o%2FtaL9RggVoPV3FWr73i%2B5O8RB87Io89VegwTaxAfO%2BpDV6jtVIrd9B743hSYg%2B3ozXqzdTn%2B5GVvXGa1Smo1DHLRhEdapXQfRTcc11Kq&X-Amz-Signature=2b0e73166e2687f7b0ec1e8116407d9fc402e12bcaa672ec67fcc42f81a204ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
