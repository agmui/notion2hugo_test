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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW36UDL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOylu0zJCA%2BrWmXZI0bHGtBuZTLWHU0Fxn5KDLichHwIgIMe9A6cWaKmAzbeAIAv8xms%2Bqrbd72KT9Qiwx%2FE3rMUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQNCqaubQconK5znCrcA6WB5ITPcdF%2F7bt%2FNzqPSodZ3djLm4lSYuSNfIfobxaaKRrHXsgx2Em4r1GP1WaqqxlPc05mXoXI5kgDkM6L9q%2B9x0nDuQRd8JXU6sejzW3cfkrqJKs%2BBgaVYZDedgQzvEH3iYY5G1Nuc8aNOfhBNpeqbGrH%2By378boPceOmTmULdl%2F9OHhl8ls06u8cq%2Fnr1HIBMUjFBeTFagILK%2F%2BUthfTpwKnoqB9KVjjK%2F5ebxOVd%2F4cWyLiLXS6S3M2TtmSz3g2rhyai6%2Fw%2BGAzQjzPz9Ln45Jy8uas9Gl6RCHeEA3efJnxF890AXkQ%2FroRdKiDVh%2Fb%2FLlzOqMsbPxdnNnh0Pqd0M2VvVyWCBkIWOOqGYg0Ty9xDuJgav1bMOgdVzM8zdXJKpKqlnvcc6kPgBVEDaliFvAqHvK2FKkegegpKQ%2B49OvASIbEA1wRc%2FBpFO7ubITMnjoP8fegcvVcHEwEhlNWeAuT8%2FO4NNx%2FEVG3gtltCB%2Fa14phvRSsYoz5VKAYLxIo8Bs7RAggbeM%2BZXX53c%2FTQPK7%2F%2Fd%2FvteHr%2BtB0rPvngF8MdEdbHzadesSmD1WWUQtf3zEV%2FpYPUJ1TQPVkwfrdw1jDBMpa%2BOyCuE%2BZVH8PjTU5N4xxwaUX3MyMLPI5b0GOqUBnZDbw6zYISsZdoZvQin08ZBhBtDddd13Htso3m%2Fw8bePF4iaAI3oYozkD9p2AtVoRMkCjlA3x%2Ba1Mdyrmbm5fWO%2FcWir%2BGouYEa9g952wGSpCCZdp93%2Fr6XQ5cPp7nBMzsdjksmkPTMlkW6l%2F6ZbacCcTW9fba7LFavVBHdrO%2B3bJXgfAFSZ4JR37R0pL2pIdC64UtdeWRRLabyO6MTBJyE5gvDl&X-Amz-Signature=6c98abbd21160e74c4fb2c87e0a227e709970584e11d9fa8e3bb330331a1fa65&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW36UDL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOylu0zJCA%2BrWmXZI0bHGtBuZTLWHU0Fxn5KDLichHwIgIMe9A6cWaKmAzbeAIAv8xms%2Bqrbd72KT9Qiwx%2FE3rMUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQNCqaubQconK5znCrcA6WB5ITPcdF%2F7bt%2FNzqPSodZ3djLm4lSYuSNfIfobxaaKRrHXsgx2Em4r1GP1WaqqxlPc05mXoXI5kgDkM6L9q%2B9x0nDuQRd8JXU6sejzW3cfkrqJKs%2BBgaVYZDedgQzvEH3iYY5G1Nuc8aNOfhBNpeqbGrH%2By378boPceOmTmULdl%2F9OHhl8ls06u8cq%2Fnr1HIBMUjFBeTFagILK%2F%2BUthfTpwKnoqB9KVjjK%2F5ebxOVd%2F4cWyLiLXS6S3M2TtmSz3g2rhyai6%2Fw%2BGAzQjzPz9Ln45Jy8uas9Gl6RCHeEA3efJnxF890AXkQ%2FroRdKiDVh%2Fb%2FLlzOqMsbPxdnNnh0Pqd0M2VvVyWCBkIWOOqGYg0Ty9xDuJgav1bMOgdVzM8zdXJKpKqlnvcc6kPgBVEDaliFvAqHvK2FKkegegpKQ%2B49OvASIbEA1wRc%2FBpFO7ubITMnjoP8fegcvVcHEwEhlNWeAuT8%2FO4NNx%2FEVG3gtltCB%2Fa14phvRSsYoz5VKAYLxIo8Bs7RAggbeM%2BZXX53c%2FTQPK7%2F%2Fd%2FvteHr%2BtB0rPvngF8MdEdbHzadesSmD1WWUQtf3zEV%2FpYPUJ1TQPVkwfrdw1jDBMpa%2BOyCuE%2BZVH8PjTU5N4xxwaUX3MyMLPI5b0GOqUBnZDbw6zYISsZdoZvQin08ZBhBtDddd13Htso3m%2Fw8bePF4iaAI3oYozkD9p2AtVoRMkCjlA3x%2Ba1Mdyrmbm5fWO%2FcWir%2BGouYEa9g952wGSpCCZdp93%2Fr6XQ5cPp7nBMzsdjksmkPTMlkW6l%2F6ZbacCcTW9fba7LFavVBHdrO%2B3bJXgfAFSZ4JR37R0pL2pIdC64UtdeWRRLabyO6MTBJyE5gvDl&X-Amz-Signature=52d088eea9cb55a637077cbfb3a96654647ed8fde25d8c4b85c6fa3d2aa5f4f3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW36UDL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOylu0zJCA%2BrWmXZI0bHGtBuZTLWHU0Fxn5KDLichHwIgIMe9A6cWaKmAzbeAIAv8xms%2Bqrbd72KT9Qiwx%2FE3rMUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQNCqaubQconK5znCrcA6WB5ITPcdF%2F7bt%2FNzqPSodZ3djLm4lSYuSNfIfobxaaKRrHXsgx2Em4r1GP1WaqqxlPc05mXoXI5kgDkM6L9q%2B9x0nDuQRd8JXU6sejzW3cfkrqJKs%2BBgaVYZDedgQzvEH3iYY5G1Nuc8aNOfhBNpeqbGrH%2By378boPceOmTmULdl%2F9OHhl8ls06u8cq%2Fnr1HIBMUjFBeTFagILK%2F%2BUthfTpwKnoqB9KVjjK%2F5ebxOVd%2F4cWyLiLXS6S3M2TtmSz3g2rhyai6%2Fw%2BGAzQjzPz9Ln45Jy8uas9Gl6RCHeEA3efJnxF890AXkQ%2FroRdKiDVh%2Fb%2FLlzOqMsbPxdnNnh0Pqd0M2VvVyWCBkIWOOqGYg0Ty9xDuJgav1bMOgdVzM8zdXJKpKqlnvcc6kPgBVEDaliFvAqHvK2FKkegegpKQ%2B49OvASIbEA1wRc%2FBpFO7ubITMnjoP8fegcvVcHEwEhlNWeAuT8%2FO4NNx%2FEVG3gtltCB%2Fa14phvRSsYoz5VKAYLxIo8Bs7RAggbeM%2BZXX53c%2FTQPK7%2F%2Fd%2FvteHr%2BtB0rPvngF8MdEdbHzadesSmD1WWUQtf3zEV%2FpYPUJ1TQPVkwfrdw1jDBMpa%2BOyCuE%2BZVH8PjTU5N4xxwaUX3MyMLPI5b0GOqUBnZDbw6zYISsZdoZvQin08ZBhBtDddd13Htso3m%2Fw8bePF4iaAI3oYozkD9p2AtVoRMkCjlA3x%2Ba1Mdyrmbm5fWO%2FcWir%2BGouYEa9g952wGSpCCZdp93%2Fr6XQ5cPp7nBMzsdjksmkPTMlkW6l%2F6ZbacCcTW9fba7LFavVBHdrO%2B3bJXgfAFSZ4JR37R0pL2pIdC64UtdeWRRLabyO6MTBJyE5gvDl&X-Amz-Signature=e1f3a8974b381501fc7916970af4ac3d033c7cd2cd5476e74e965b66abb0d794&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW36UDL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOylu0zJCA%2BrWmXZI0bHGtBuZTLWHU0Fxn5KDLichHwIgIMe9A6cWaKmAzbeAIAv8xms%2Bqrbd72KT9Qiwx%2FE3rMUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQNCqaubQconK5znCrcA6WB5ITPcdF%2F7bt%2FNzqPSodZ3djLm4lSYuSNfIfobxaaKRrHXsgx2Em4r1GP1WaqqxlPc05mXoXI5kgDkM6L9q%2B9x0nDuQRd8JXU6sejzW3cfkrqJKs%2BBgaVYZDedgQzvEH3iYY5G1Nuc8aNOfhBNpeqbGrH%2By378boPceOmTmULdl%2F9OHhl8ls06u8cq%2Fnr1HIBMUjFBeTFagILK%2F%2BUthfTpwKnoqB9KVjjK%2F5ebxOVd%2F4cWyLiLXS6S3M2TtmSz3g2rhyai6%2Fw%2BGAzQjzPz9Ln45Jy8uas9Gl6RCHeEA3efJnxF890AXkQ%2FroRdKiDVh%2Fb%2FLlzOqMsbPxdnNnh0Pqd0M2VvVyWCBkIWOOqGYg0Ty9xDuJgav1bMOgdVzM8zdXJKpKqlnvcc6kPgBVEDaliFvAqHvK2FKkegegpKQ%2B49OvASIbEA1wRc%2FBpFO7ubITMnjoP8fegcvVcHEwEhlNWeAuT8%2FO4NNx%2FEVG3gtltCB%2Fa14phvRSsYoz5VKAYLxIo8Bs7RAggbeM%2BZXX53c%2FTQPK7%2F%2Fd%2FvteHr%2BtB0rPvngF8MdEdbHzadesSmD1WWUQtf3zEV%2FpYPUJ1TQPVkwfrdw1jDBMpa%2BOyCuE%2BZVH8PjTU5N4xxwaUX3MyMLPI5b0GOqUBnZDbw6zYISsZdoZvQin08ZBhBtDddd13Htso3m%2Fw8bePF4iaAI3oYozkD9p2AtVoRMkCjlA3x%2Ba1Mdyrmbm5fWO%2FcWir%2BGouYEa9g952wGSpCCZdp93%2Fr6XQ5cPp7nBMzsdjksmkPTMlkW6l%2F6ZbacCcTW9fba7LFavVBHdrO%2B3bJXgfAFSZ4JR37R0pL2pIdC64UtdeWRRLabyO6MTBJyE5gvDl&X-Amz-Signature=f19c3c5e6ae4e39e0fd366d49b32c1ab1d896de7816d036be03ae07849b2f6e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW36UDL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOylu0zJCA%2BrWmXZI0bHGtBuZTLWHU0Fxn5KDLichHwIgIMe9A6cWaKmAzbeAIAv8xms%2Bqrbd72KT9Qiwx%2FE3rMUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQNCqaubQconK5znCrcA6WB5ITPcdF%2F7bt%2FNzqPSodZ3djLm4lSYuSNfIfobxaaKRrHXsgx2Em4r1GP1WaqqxlPc05mXoXI5kgDkM6L9q%2B9x0nDuQRd8JXU6sejzW3cfkrqJKs%2BBgaVYZDedgQzvEH3iYY5G1Nuc8aNOfhBNpeqbGrH%2By378boPceOmTmULdl%2F9OHhl8ls06u8cq%2Fnr1HIBMUjFBeTFagILK%2F%2BUthfTpwKnoqB9KVjjK%2F5ebxOVd%2F4cWyLiLXS6S3M2TtmSz3g2rhyai6%2Fw%2BGAzQjzPz9Ln45Jy8uas9Gl6RCHeEA3efJnxF890AXkQ%2FroRdKiDVh%2Fb%2FLlzOqMsbPxdnNnh0Pqd0M2VvVyWCBkIWOOqGYg0Ty9xDuJgav1bMOgdVzM8zdXJKpKqlnvcc6kPgBVEDaliFvAqHvK2FKkegegpKQ%2B49OvASIbEA1wRc%2FBpFO7ubITMnjoP8fegcvVcHEwEhlNWeAuT8%2FO4NNx%2FEVG3gtltCB%2Fa14phvRSsYoz5VKAYLxIo8Bs7RAggbeM%2BZXX53c%2FTQPK7%2F%2Fd%2FvteHr%2BtB0rPvngF8MdEdbHzadesSmD1WWUQtf3zEV%2FpYPUJ1TQPVkwfrdw1jDBMpa%2BOyCuE%2BZVH8PjTU5N4xxwaUX3MyMLPI5b0GOqUBnZDbw6zYISsZdoZvQin08ZBhBtDddd13Htso3m%2Fw8bePF4iaAI3oYozkD9p2AtVoRMkCjlA3x%2Ba1Mdyrmbm5fWO%2FcWir%2BGouYEa9g952wGSpCCZdp93%2Fr6XQ5cPp7nBMzsdjksmkPTMlkW6l%2F6ZbacCcTW9fba7LFavVBHdrO%2B3bJXgfAFSZ4JR37R0pL2pIdC64UtdeWRRLabyO6MTBJyE5gvDl&X-Amz-Signature=d5cb25fa58f368fad58f2efcc3b9c0a4d78e05b04c60313bfb5a109951172878&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW36UDL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOylu0zJCA%2BrWmXZI0bHGtBuZTLWHU0Fxn5KDLichHwIgIMe9A6cWaKmAzbeAIAv8xms%2Bqrbd72KT9Qiwx%2FE3rMUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQNCqaubQconK5znCrcA6WB5ITPcdF%2F7bt%2FNzqPSodZ3djLm4lSYuSNfIfobxaaKRrHXsgx2Em4r1GP1WaqqxlPc05mXoXI5kgDkM6L9q%2B9x0nDuQRd8JXU6sejzW3cfkrqJKs%2BBgaVYZDedgQzvEH3iYY5G1Nuc8aNOfhBNpeqbGrH%2By378boPceOmTmULdl%2F9OHhl8ls06u8cq%2Fnr1HIBMUjFBeTFagILK%2F%2BUthfTpwKnoqB9KVjjK%2F5ebxOVd%2F4cWyLiLXS6S3M2TtmSz3g2rhyai6%2Fw%2BGAzQjzPz9Ln45Jy8uas9Gl6RCHeEA3efJnxF890AXkQ%2FroRdKiDVh%2Fb%2FLlzOqMsbPxdnNnh0Pqd0M2VvVyWCBkIWOOqGYg0Ty9xDuJgav1bMOgdVzM8zdXJKpKqlnvcc6kPgBVEDaliFvAqHvK2FKkegegpKQ%2B49OvASIbEA1wRc%2FBpFO7ubITMnjoP8fegcvVcHEwEhlNWeAuT8%2FO4NNx%2FEVG3gtltCB%2Fa14phvRSsYoz5VKAYLxIo8Bs7RAggbeM%2BZXX53c%2FTQPK7%2F%2Fd%2FvteHr%2BtB0rPvngF8MdEdbHzadesSmD1WWUQtf3zEV%2FpYPUJ1TQPVkwfrdw1jDBMpa%2BOyCuE%2BZVH8PjTU5N4xxwaUX3MyMLPI5b0GOqUBnZDbw6zYISsZdoZvQin08ZBhBtDddd13Htso3m%2Fw8bePF4iaAI3oYozkD9p2AtVoRMkCjlA3x%2Ba1Mdyrmbm5fWO%2FcWir%2BGouYEa9g952wGSpCCZdp93%2Fr6XQ5cPp7nBMzsdjksmkPTMlkW6l%2F6ZbacCcTW9fba7LFavVBHdrO%2B3bJXgfAFSZ4JR37R0pL2pIdC64UtdeWRRLabyO6MTBJyE5gvDl&X-Amz-Signature=d6053a6ffd39e4970ffc6d7b559f17e2219fe116e740684473fb9aa5daa531d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW36UDL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOylu0zJCA%2BrWmXZI0bHGtBuZTLWHU0Fxn5KDLichHwIgIMe9A6cWaKmAzbeAIAv8xms%2Bqrbd72KT9Qiwx%2FE3rMUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQNCqaubQconK5znCrcA6WB5ITPcdF%2F7bt%2FNzqPSodZ3djLm4lSYuSNfIfobxaaKRrHXsgx2Em4r1GP1WaqqxlPc05mXoXI5kgDkM6L9q%2B9x0nDuQRd8JXU6sejzW3cfkrqJKs%2BBgaVYZDedgQzvEH3iYY5G1Nuc8aNOfhBNpeqbGrH%2By378boPceOmTmULdl%2F9OHhl8ls06u8cq%2Fnr1HIBMUjFBeTFagILK%2F%2BUthfTpwKnoqB9KVjjK%2F5ebxOVd%2F4cWyLiLXS6S3M2TtmSz3g2rhyai6%2Fw%2BGAzQjzPz9Ln45Jy8uas9Gl6RCHeEA3efJnxF890AXkQ%2FroRdKiDVh%2Fb%2FLlzOqMsbPxdnNnh0Pqd0M2VvVyWCBkIWOOqGYg0Ty9xDuJgav1bMOgdVzM8zdXJKpKqlnvcc6kPgBVEDaliFvAqHvK2FKkegegpKQ%2B49OvASIbEA1wRc%2FBpFO7ubITMnjoP8fegcvVcHEwEhlNWeAuT8%2FO4NNx%2FEVG3gtltCB%2Fa14phvRSsYoz5VKAYLxIo8Bs7RAggbeM%2BZXX53c%2FTQPK7%2F%2Fd%2FvteHr%2BtB0rPvngF8MdEdbHzadesSmD1WWUQtf3zEV%2FpYPUJ1TQPVkwfrdw1jDBMpa%2BOyCuE%2BZVH8PjTU5N4xxwaUX3MyMLPI5b0GOqUBnZDbw6zYISsZdoZvQin08ZBhBtDddd13Htso3m%2Fw8bePF4iaAI3oYozkD9p2AtVoRMkCjlA3x%2Ba1Mdyrmbm5fWO%2FcWir%2BGouYEa9g952wGSpCCZdp93%2Fr6XQ5cPp7nBMzsdjksmkPTMlkW6l%2F6ZbacCcTW9fba7LFavVBHdrO%2B3bJXgfAFSZ4JR37R0pL2pIdC64UtdeWRRLabyO6MTBJyE5gvDl&X-Amz-Signature=48383313d78865966c0a685587c8a75f9aaac14e800911375d28e00b27b6e407&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNW36UDL%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyOylu0zJCA%2BrWmXZI0bHGtBuZTLWHU0Fxn5KDLichHwIgIMe9A6cWaKmAzbeAIAv8xms%2Bqrbd72KT9Qiwx%2FE3rMUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQNCqaubQconK5znCrcA6WB5ITPcdF%2F7bt%2FNzqPSodZ3djLm4lSYuSNfIfobxaaKRrHXsgx2Em4r1GP1WaqqxlPc05mXoXI5kgDkM6L9q%2B9x0nDuQRd8JXU6sejzW3cfkrqJKs%2BBgaVYZDedgQzvEH3iYY5G1Nuc8aNOfhBNpeqbGrH%2By378boPceOmTmULdl%2F9OHhl8ls06u8cq%2Fnr1HIBMUjFBeTFagILK%2F%2BUthfTpwKnoqB9KVjjK%2F5ebxOVd%2F4cWyLiLXS6S3M2TtmSz3g2rhyai6%2Fw%2BGAzQjzPz9Ln45Jy8uas9Gl6RCHeEA3efJnxF890AXkQ%2FroRdKiDVh%2Fb%2FLlzOqMsbPxdnNnh0Pqd0M2VvVyWCBkIWOOqGYg0Ty9xDuJgav1bMOgdVzM8zdXJKpKqlnvcc6kPgBVEDaliFvAqHvK2FKkegegpKQ%2B49OvASIbEA1wRc%2FBpFO7ubITMnjoP8fegcvVcHEwEhlNWeAuT8%2FO4NNx%2FEVG3gtltCB%2Fa14phvRSsYoz5VKAYLxIo8Bs7RAggbeM%2BZXX53c%2FTQPK7%2F%2Fd%2FvteHr%2BtB0rPvngF8MdEdbHzadesSmD1WWUQtf3zEV%2FpYPUJ1TQPVkwfrdw1jDBMpa%2BOyCuE%2BZVH8PjTU5N4xxwaUX3MyMLPI5b0GOqUBnZDbw6zYISsZdoZvQin08ZBhBtDddd13Htso3m%2Fw8bePF4iaAI3oYozkD9p2AtVoRMkCjlA3x%2Ba1Mdyrmbm5fWO%2FcWir%2BGouYEa9g952wGSpCCZdp93%2Fr6XQ5cPp7nBMzsdjksmkPTMlkW6l%2F6ZbacCcTW9fba7LFavVBHdrO%2B3bJXgfAFSZ4JR37R0pL2pIdC64UtdeWRRLabyO6MTBJyE5gvDl&X-Amz-Signature=c3188be5309114cc95b82fc3a394ed9c3015eeae8f039243c92c3c1e5e77a031&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
