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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ776XF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXdP%2F3FP0czck9Gi0nLWuajVweDmS9MJGPIr49e6U1EAiEA2LvAxsY3dd9AMimFAM5BfreWpQn5FojJJ0wMYQLRWCcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwa525RUmCvPjJyrcA80IKHSJ2gn%2F9JKvrmN%2FmwOyFZ8nIihZ9UsW3tWQydZLqa0AQP4dG3JOE6S6sZb06H%2FHQEMZfngGPx68TZp8Cz0KpkiGwtcqOypqFwL1KaAVS%2FWydFY9OpCzsVCdfi%2BsEITMjLEqyTFsQIsEousP4jFomfQf05EbGMYrKGEJW914h7yoC9CElDzc5ZHLsKw0SLefTuzaE6ULGqnXeY%2B%2F8Q216YSbRPKxbiojmDSg4%2Bp%2B3ySOlktMeW44x2LD1CSmsanWiCt%2F5V1ztmwJKzvrdnBJXt3yIClk3VhI8gpCXpfrzyvEf7xk6HoygE1Etq1NgkEUmkadJdVvQrf2Ko199sWomganiReEbVOhKeCgZeMGVtOR2g98vWl2%2FdHnYIkf1pPOB7UoRU54ePuZOYHLHKVaUbB4aWoBqSkjIIzswsw6x%2FxvkEyas%2FqwVORpWrG%2B5HVSBSNztjPhoWjmjkd9OPtMIYXaaQOrzIYn1qClNcRRU28WQsBcPtMIbHBs2Ho610CYbpg9pwRQcWa3hP%2FMt161Evr3Ieqt5ERLLZBCrW6Bhgl7PR6UCihTSCzGA9vWVBfa8EVChW%2BuuYLVoCt6wbXsyJzctX5HMqPcdtrI13Opd2Io%2BzDBNwRGTTh8MJ%2F%2Bhb8GOqUBiNalkEf84kUO9FckyPOTNtGUfK3mT0y2n1oZRCcGNIuu4%2FW%2BNquc1ynpabFlZMQwLfr427Egin5gFYqTFk5jZAfLOLl9E2Bg0ch%2Fnp4SFOLYNN2LhqPyc3K5Hb2FV%2BCzE3L1hFlCokXaYd2XSdB%2FCGTTmZhyMfK9a6eXrPSUAH62lwLeZH4jIqNhNYtXZqs%2FSxuVPq5pMj9xE9NQE6Z7atCD3eo1&X-Amz-Signature=2f948955f04c9fd1ca70b28646f66137a3de6b18e2a7104091509ba20de15695&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ776XF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXdP%2F3FP0czck9Gi0nLWuajVweDmS9MJGPIr49e6U1EAiEA2LvAxsY3dd9AMimFAM5BfreWpQn5FojJJ0wMYQLRWCcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwa525RUmCvPjJyrcA80IKHSJ2gn%2F9JKvrmN%2FmwOyFZ8nIihZ9UsW3tWQydZLqa0AQP4dG3JOE6S6sZb06H%2FHQEMZfngGPx68TZp8Cz0KpkiGwtcqOypqFwL1KaAVS%2FWydFY9OpCzsVCdfi%2BsEITMjLEqyTFsQIsEousP4jFomfQf05EbGMYrKGEJW914h7yoC9CElDzc5ZHLsKw0SLefTuzaE6ULGqnXeY%2B%2F8Q216YSbRPKxbiojmDSg4%2Bp%2B3ySOlktMeW44x2LD1CSmsanWiCt%2F5V1ztmwJKzvrdnBJXt3yIClk3VhI8gpCXpfrzyvEf7xk6HoygE1Etq1NgkEUmkadJdVvQrf2Ko199sWomganiReEbVOhKeCgZeMGVtOR2g98vWl2%2FdHnYIkf1pPOB7UoRU54ePuZOYHLHKVaUbB4aWoBqSkjIIzswsw6x%2FxvkEyas%2FqwVORpWrG%2B5HVSBSNztjPhoWjmjkd9OPtMIYXaaQOrzIYn1qClNcRRU28WQsBcPtMIbHBs2Ho610CYbpg9pwRQcWa3hP%2FMt161Evr3Ieqt5ERLLZBCrW6Bhgl7PR6UCihTSCzGA9vWVBfa8EVChW%2BuuYLVoCt6wbXsyJzctX5HMqPcdtrI13Opd2Io%2BzDBNwRGTTh8MJ%2F%2Bhb8GOqUBiNalkEf84kUO9FckyPOTNtGUfK3mT0y2n1oZRCcGNIuu4%2FW%2BNquc1ynpabFlZMQwLfr427Egin5gFYqTFk5jZAfLOLl9E2Bg0ch%2Fnp4SFOLYNN2LhqPyc3K5Hb2FV%2BCzE3L1hFlCokXaYd2XSdB%2FCGTTmZhyMfK9a6eXrPSUAH62lwLeZH4jIqNhNYtXZqs%2FSxuVPq5pMj9xE9NQE6Z7atCD3eo1&X-Amz-Signature=f95757c58710aa89dd3f488a1cc738ecfe232666613fab12a80218b6c867ea3b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ776XF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXdP%2F3FP0czck9Gi0nLWuajVweDmS9MJGPIr49e6U1EAiEA2LvAxsY3dd9AMimFAM5BfreWpQn5FojJJ0wMYQLRWCcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwa525RUmCvPjJyrcA80IKHSJ2gn%2F9JKvrmN%2FmwOyFZ8nIihZ9UsW3tWQydZLqa0AQP4dG3JOE6S6sZb06H%2FHQEMZfngGPx68TZp8Cz0KpkiGwtcqOypqFwL1KaAVS%2FWydFY9OpCzsVCdfi%2BsEITMjLEqyTFsQIsEousP4jFomfQf05EbGMYrKGEJW914h7yoC9CElDzc5ZHLsKw0SLefTuzaE6ULGqnXeY%2B%2F8Q216YSbRPKxbiojmDSg4%2Bp%2B3ySOlktMeW44x2LD1CSmsanWiCt%2F5V1ztmwJKzvrdnBJXt3yIClk3VhI8gpCXpfrzyvEf7xk6HoygE1Etq1NgkEUmkadJdVvQrf2Ko199sWomganiReEbVOhKeCgZeMGVtOR2g98vWl2%2FdHnYIkf1pPOB7UoRU54ePuZOYHLHKVaUbB4aWoBqSkjIIzswsw6x%2FxvkEyas%2FqwVORpWrG%2B5HVSBSNztjPhoWjmjkd9OPtMIYXaaQOrzIYn1qClNcRRU28WQsBcPtMIbHBs2Ho610CYbpg9pwRQcWa3hP%2FMt161Evr3Ieqt5ERLLZBCrW6Bhgl7PR6UCihTSCzGA9vWVBfa8EVChW%2BuuYLVoCt6wbXsyJzctX5HMqPcdtrI13Opd2Io%2BzDBNwRGTTh8MJ%2F%2Bhb8GOqUBiNalkEf84kUO9FckyPOTNtGUfK3mT0y2n1oZRCcGNIuu4%2FW%2BNquc1ynpabFlZMQwLfr427Egin5gFYqTFk5jZAfLOLl9E2Bg0ch%2Fnp4SFOLYNN2LhqPyc3K5Hb2FV%2BCzE3L1hFlCokXaYd2XSdB%2FCGTTmZhyMfK9a6eXrPSUAH62lwLeZH4jIqNhNYtXZqs%2FSxuVPq5pMj9xE9NQE6Z7atCD3eo1&X-Amz-Signature=33611f8447730605dd4c45f62aaebea3623f30ed3e24b607905e94de4171fdd2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ776XF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXdP%2F3FP0czck9Gi0nLWuajVweDmS9MJGPIr49e6U1EAiEA2LvAxsY3dd9AMimFAM5BfreWpQn5FojJJ0wMYQLRWCcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwa525RUmCvPjJyrcA80IKHSJ2gn%2F9JKvrmN%2FmwOyFZ8nIihZ9UsW3tWQydZLqa0AQP4dG3JOE6S6sZb06H%2FHQEMZfngGPx68TZp8Cz0KpkiGwtcqOypqFwL1KaAVS%2FWydFY9OpCzsVCdfi%2BsEITMjLEqyTFsQIsEousP4jFomfQf05EbGMYrKGEJW914h7yoC9CElDzc5ZHLsKw0SLefTuzaE6ULGqnXeY%2B%2F8Q216YSbRPKxbiojmDSg4%2Bp%2B3ySOlktMeW44x2LD1CSmsanWiCt%2F5V1ztmwJKzvrdnBJXt3yIClk3VhI8gpCXpfrzyvEf7xk6HoygE1Etq1NgkEUmkadJdVvQrf2Ko199sWomganiReEbVOhKeCgZeMGVtOR2g98vWl2%2FdHnYIkf1pPOB7UoRU54ePuZOYHLHKVaUbB4aWoBqSkjIIzswsw6x%2FxvkEyas%2FqwVORpWrG%2B5HVSBSNztjPhoWjmjkd9OPtMIYXaaQOrzIYn1qClNcRRU28WQsBcPtMIbHBs2Ho610CYbpg9pwRQcWa3hP%2FMt161Evr3Ieqt5ERLLZBCrW6Bhgl7PR6UCihTSCzGA9vWVBfa8EVChW%2BuuYLVoCt6wbXsyJzctX5HMqPcdtrI13Opd2Io%2BzDBNwRGTTh8MJ%2F%2Bhb8GOqUBiNalkEf84kUO9FckyPOTNtGUfK3mT0y2n1oZRCcGNIuu4%2FW%2BNquc1ynpabFlZMQwLfr427Egin5gFYqTFk5jZAfLOLl9E2Bg0ch%2Fnp4SFOLYNN2LhqPyc3K5Hb2FV%2BCzE3L1hFlCokXaYd2XSdB%2FCGTTmZhyMfK9a6eXrPSUAH62lwLeZH4jIqNhNYtXZqs%2FSxuVPq5pMj9xE9NQE6Z7atCD3eo1&X-Amz-Signature=164f6ed3d487a9c9de378757b23f4671393099ae8bf1936e330b930b978c8b86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ776XF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXdP%2F3FP0czck9Gi0nLWuajVweDmS9MJGPIr49e6U1EAiEA2LvAxsY3dd9AMimFAM5BfreWpQn5FojJJ0wMYQLRWCcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwa525RUmCvPjJyrcA80IKHSJ2gn%2F9JKvrmN%2FmwOyFZ8nIihZ9UsW3tWQydZLqa0AQP4dG3JOE6S6sZb06H%2FHQEMZfngGPx68TZp8Cz0KpkiGwtcqOypqFwL1KaAVS%2FWydFY9OpCzsVCdfi%2BsEITMjLEqyTFsQIsEousP4jFomfQf05EbGMYrKGEJW914h7yoC9CElDzc5ZHLsKw0SLefTuzaE6ULGqnXeY%2B%2F8Q216YSbRPKxbiojmDSg4%2Bp%2B3ySOlktMeW44x2LD1CSmsanWiCt%2F5V1ztmwJKzvrdnBJXt3yIClk3VhI8gpCXpfrzyvEf7xk6HoygE1Etq1NgkEUmkadJdVvQrf2Ko199sWomganiReEbVOhKeCgZeMGVtOR2g98vWl2%2FdHnYIkf1pPOB7UoRU54ePuZOYHLHKVaUbB4aWoBqSkjIIzswsw6x%2FxvkEyas%2FqwVORpWrG%2B5HVSBSNztjPhoWjmjkd9OPtMIYXaaQOrzIYn1qClNcRRU28WQsBcPtMIbHBs2Ho610CYbpg9pwRQcWa3hP%2FMt161Evr3Ieqt5ERLLZBCrW6Bhgl7PR6UCihTSCzGA9vWVBfa8EVChW%2BuuYLVoCt6wbXsyJzctX5HMqPcdtrI13Opd2Io%2BzDBNwRGTTh8MJ%2F%2Bhb8GOqUBiNalkEf84kUO9FckyPOTNtGUfK3mT0y2n1oZRCcGNIuu4%2FW%2BNquc1ynpabFlZMQwLfr427Egin5gFYqTFk5jZAfLOLl9E2Bg0ch%2Fnp4SFOLYNN2LhqPyc3K5Hb2FV%2BCzE3L1hFlCokXaYd2XSdB%2FCGTTmZhyMfK9a6eXrPSUAH62lwLeZH4jIqNhNYtXZqs%2FSxuVPq5pMj9xE9NQE6Z7atCD3eo1&X-Amz-Signature=2e1eff939537d20960964c529653d6aa6ae140a5d08b93886ce29d20a098912f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ776XF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXdP%2F3FP0czck9Gi0nLWuajVweDmS9MJGPIr49e6U1EAiEA2LvAxsY3dd9AMimFAM5BfreWpQn5FojJJ0wMYQLRWCcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwa525RUmCvPjJyrcA80IKHSJ2gn%2F9JKvrmN%2FmwOyFZ8nIihZ9UsW3tWQydZLqa0AQP4dG3JOE6S6sZb06H%2FHQEMZfngGPx68TZp8Cz0KpkiGwtcqOypqFwL1KaAVS%2FWydFY9OpCzsVCdfi%2BsEITMjLEqyTFsQIsEousP4jFomfQf05EbGMYrKGEJW914h7yoC9CElDzc5ZHLsKw0SLefTuzaE6ULGqnXeY%2B%2F8Q216YSbRPKxbiojmDSg4%2Bp%2B3ySOlktMeW44x2LD1CSmsanWiCt%2F5V1ztmwJKzvrdnBJXt3yIClk3VhI8gpCXpfrzyvEf7xk6HoygE1Etq1NgkEUmkadJdVvQrf2Ko199sWomganiReEbVOhKeCgZeMGVtOR2g98vWl2%2FdHnYIkf1pPOB7UoRU54ePuZOYHLHKVaUbB4aWoBqSkjIIzswsw6x%2FxvkEyas%2FqwVORpWrG%2B5HVSBSNztjPhoWjmjkd9OPtMIYXaaQOrzIYn1qClNcRRU28WQsBcPtMIbHBs2Ho610CYbpg9pwRQcWa3hP%2FMt161Evr3Ieqt5ERLLZBCrW6Bhgl7PR6UCihTSCzGA9vWVBfa8EVChW%2BuuYLVoCt6wbXsyJzctX5HMqPcdtrI13Opd2Io%2BzDBNwRGTTh8MJ%2F%2Bhb8GOqUBiNalkEf84kUO9FckyPOTNtGUfK3mT0y2n1oZRCcGNIuu4%2FW%2BNquc1ynpabFlZMQwLfr427Egin5gFYqTFk5jZAfLOLl9E2Bg0ch%2Fnp4SFOLYNN2LhqPyc3K5Hb2FV%2BCzE3L1hFlCokXaYd2XSdB%2FCGTTmZhyMfK9a6eXrPSUAH62lwLeZH4jIqNhNYtXZqs%2FSxuVPq5pMj9xE9NQE6Z7atCD3eo1&X-Amz-Signature=75d650db0bb77bd338acb6592979ae2aa1f3d63e2d961fcbb29ca4dcdef8b888&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ776XF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXdP%2F3FP0czck9Gi0nLWuajVweDmS9MJGPIr49e6U1EAiEA2LvAxsY3dd9AMimFAM5BfreWpQn5FojJJ0wMYQLRWCcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwa525RUmCvPjJyrcA80IKHSJ2gn%2F9JKvrmN%2FmwOyFZ8nIihZ9UsW3tWQydZLqa0AQP4dG3JOE6S6sZb06H%2FHQEMZfngGPx68TZp8Cz0KpkiGwtcqOypqFwL1KaAVS%2FWydFY9OpCzsVCdfi%2BsEITMjLEqyTFsQIsEousP4jFomfQf05EbGMYrKGEJW914h7yoC9CElDzc5ZHLsKw0SLefTuzaE6ULGqnXeY%2B%2F8Q216YSbRPKxbiojmDSg4%2Bp%2B3ySOlktMeW44x2LD1CSmsanWiCt%2F5V1ztmwJKzvrdnBJXt3yIClk3VhI8gpCXpfrzyvEf7xk6HoygE1Etq1NgkEUmkadJdVvQrf2Ko199sWomganiReEbVOhKeCgZeMGVtOR2g98vWl2%2FdHnYIkf1pPOB7UoRU54ePuZOYHLHKVaUbB4aWoBqSkjIIzswsw6x%2FxvkEyas%2FqwVORpWrG%2B5HVSBSNztjPhoWjmjkd9OPtMIYXaaQOrzIYn1qClNcRRU28WQsBcPtMIbHBs2Ho610CYbpg9pwRQcWa3hP%2FMt161Evr3Ieqt5ERLLZBCrW6Bhgl7PR6UCihTSCzGA9vWVBfa8EVChW%2BuuYLVoCt6wbXsyJzctX5HMqPcdtrI13Opd2Io%2BzDBNwRGTTh8MJ%2F%2Bhb8GOqUBiNalkEf84kUO9FckyPOTNtGUfK3mT0y2n1oZRCcGNIuu4%2FW%2BNquc1ynpabFlZMQwLfr427Egin5gFYqTFk5jZAfLOLl9E2Bg0ch%2Fnp4SFOLYNN2LhqPyc3K5Hb2FV%2BCzE3L1hFlCokXaYd2XSdB%2FCGTTmZhyMfK9a6eXrPSUAH62lwLeZH4jIqNhNYtXZqs%2FSxuVPq5pMj9xE9NQE6Z7atCD3eo1&X-Amz-Signature=ccfb2bc128b892f5c8bc3f067f6a1a0b2b9965f414c23518dcc9987b71eae137&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XJ776XF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXdP%2F3FP0czck9Gi0nLWuajVweDmS9MJGPIr49e6U1EAiEA2LvAxsY3dd9AMimFAM5BfreWpQn5FojJJ0wMYQLRWCcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELIwa525RUmCvPjJyrcA80IKHSJ2gn%2F9JKvrmN%2FmwOyFZ8nIihZ9UsW3tWQydZLqa0AQP4dG3JOE6S6sZb06H%2FHQEMZfngGPx68TZp8Cz0KpkiGwtcqOypqFwL1KaAVS%2FWydFY9OpCzsVCdfi%2BsEITMjLEqyTFsQIsEousP4jFomfQf05EbGMYrKGEJW914h7yoC9CElDzc5ZHLsKw0SLefTuzaE6ULGqnXeY%2B%2F8Q216YSbRPKxbiojmDSg4%2Bp%2B3ySOlktMeW44x2LD1CSmsanWiCt%2F5V1ztmwJKzvrdnBJXt3yIClk3VhI8gpCXpfrzyvEf7xk6HoygE1Etq1NgkEUmkadJdVvQrf2Ko199sWomganiReEbVOhKeCgZeMGVtOR2g98vWl2%2FdHnYIkf1pPOB7UoRU54ePuZOYHLHKVaUbB4aWoBqSkjIIzswsw6x%2FxvkEyas%2FqwVORpWrG%2B5HVSBSNztjPhoWjmjkd9OPtMIYXaaQOrzIYn1qClNcRRU28WQsBcPtMIbHBs2Ho610CYbpg9pwRQcWa3hP%2FMt161Evr3Ieqt5ERLLZBCrW6Bhgl7PR6UCihTSCzGA9vWVBfa8EVChW%2BuuYLVoCt6wbXsyJzctX5HMqPcdtrI13Opd2Io%2BzDBNwRGTTh8MJ%2F%2Bhb8GOqUBiNalkEf84kUO9FckyPOTNtGUfK3mT0y2n1oZRCcGNIuu4%2FW%2BNquc1ynpabFlZMQwLfr427Egin5gFYqTFk5jZAfLOLl9E2Bg0ch%2Fnp4SFOLYNN2LhqPyc3K5Hb2FV%2BCzE3L1hFlCokXaYd2XSdB%2FCGTTmZhyMfK9a6eXrPSUAH62lwLeZH4jIqNhNYtXZqs%2FSxuVPq5pMj9xE9NQE6Z7atCD3eo1&X-Amz-Signature=81ee11646f13250bfe145cd2bffb4285c878ef475ab06b8f4356eb4260237e57&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
