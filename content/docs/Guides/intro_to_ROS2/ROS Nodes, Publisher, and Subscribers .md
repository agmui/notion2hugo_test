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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YXOEVM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBjl3ZSsZp66RvRq974hZg4Zi%2BgzqlHSghmuoizbqK4qAiEAoEEf8uHR3rRR5OG0S5iqKgH4Y63SYk9W%2B0gcwhZnR9Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPIE26FefUPQWdTCWSrcAxvOArsGvBmvllNzgJ69uCPgNQE9iDgbtsSp4KMbL0CZc2STmruTr%2FN2m7eSK7619QW1MagGO1uWLoZpmBuzj%2BXnit83%2BQE0689d5juYc5MnB4m1nkyQtPGSRqYEBHchc6FR4pB7Ck8DHER%2BzpDsv5JT63h71HBnHouvgVHmomYIaRYRR5iSHmmfvRvgrNcPGgwU0J594NKg%2BQpjGFLskN39vrmdVaMzsD8%2B4aSHtwjpsrRINjsQ7jVeH3NQtCItp989S5dQ3ZC%2BEi5Ir3dd0wNEnnERoH%2BgD2A5ox19F%2FP7%2BNeTIAbs5ZMHEpsr8ATjzL3ntfbjtJaVMR9qikNCKU741M%2BHErRRuTsPH%2FD1DKIFl2SCgfc2CRFm%2FOV6%2Fh5vTR%2FkWgmhNYHGwUctBqki1aoFKsrqys36%2FmFG9yHksjxq%2FXdCzfKsMQcUzTdj77U%2BUe8juwtvD4oEN5xC%2B6M4vTtxXdUS2%2FwnDe8rNhsdWBrxpXApYs786doqBFt6In2U1e5Qht66McZjHh481N1gLz9VjJO6eIZZdKJa0lLgPgpYwzuh0IaMmoGO445mWBLJze54uPnS%2B2GO28OmpiqNEK0UOzE7E2hfpttGofLtW3AadyiRkpMSYAwHDnVFMOiQ78IGOqUByEDj4r%2ByPdD29QOb%2FN%2FmuTFLmDUhGI1uKAhQM%2BGIqW6NSj0M05EX%2BWDi7DAwZytA25LjevrK8Nk%2B84CQKcBNuHbTRWwEnYMEv%2Ft2H2ghq1s3AQ%2BUIc9WWvFzJsQ8W8YW4VA1Ep%2FWRSiidOOVx4YfEeK9y1UoAI34wtSpTHUPKXRZReoZ%2Bj9GJwsRll5F5IfdUEk%2BEebSnMaQ9NJPe6WNASWdKasE&X-Amz-Signature=2601114395b7f94a5b64c357cbd0f482d89438a64e1e8a92c13dabf9b57246ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YXOEVM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBjl3ZSsZp66RvRq974hZg4Zi%2BgzqlHSghmuoizbqK4qAiEAoEEf8uHR3rRR5OG0S5iqKgH4Y63SYk9W%2B0gcwhZnR9Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPIE26FefUPQWdTCWSrcAxvOArsGvBmvllNzgJ69uCPgNQE9iDgbtsSp4KMbL0CZc2STmruTr%2FN2m7eSK7619QW1MagGO1uWLoZpmBuzj%2BXnit83%2BQE0689d5juYc5MnB4m1nkyQtPGSRqYEBHchc6FR4pB7Ck8DHER%2BzpDsv5JT63h71HBnHouvgVHmomYIaRYRR5iSHmmfvRvgrNcPGgwU0J594NKg%2BQpjGFLskN39vrmdVaMzsD8%2B4aSHtwjpsrRINjsQ7jVeH3NQtCItp989S5dQ3ZC%2BEi5Ir3dd0wNEnnERoH%2BgD2A5ox19F%2FP7%2BNeTIAbs5ZMHEpsr8ATjzL3ntfbjtJaVMR9qikNCKU741M%2BHErRRuTsPH%2FD1DKIFl2SCgfc2CRFm%2FOV6%2Fh5vTR%2FkWgmhNYHGwUctBqki1aoFKsrqys36%2FmFG9yHksjxq%2FXdCzfKsMQcUzTdj77U%2BUe8juwtvD4oEN5xC%2B6M4vTtxXdUS2%2FwnDe8rNhsdWBrxpXApYs786doqBFt6In2U1e5Qht66McZjHh481N1gLz9VjJO6eIZZdKJa0lLgPgpYwzuh0IaMmoGO445mWBLJze54uPnS%2B2GO28OmpiqNEK0UOzE7E2hfpttGofLtW3AadyiRkpMSYAwHDnVFMOiQ78IGOqUByEDj4r%2ByPdD29QOb%2FN%2FmuTFLmDUhGI1uKAhQM%2BGIqW6NSj0M05EX%2BWDi7DAwZytA25LjevrK8Nk%2B84CQKcBNuHbTRWwEnYMEv%2Ft2H2ghq1s3AQ%2BUIc9WWvFzJsQ8W8YW4VA1Ep%2FWRSiidOOVx4YfEeK9y1UoAI34wtSpTHUPKXRZReoZ%2Bj9GJwsRll5F5IfdUEk%2BEebSnMaQ9NJPe6WNASWdKasE&X-Amz-Signature=d912d00259a7881ec08beb34b02eb5d040627216c367fa3a12729b0d0bca5819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YXOEVM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBjl3ZSsZp66RvRq974hZg4Zi%2BgzqlHSghmuoizbqK4qAiEAoEEf8uHR3rRR5OG0S5iqKgH4Y63SYk9W%2B0gcwhZnR9Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPIE26FefUPQWdTCWSrcAxvOArsGvBmvllNzgJ69uCPgNQE9iDgbtsSp4KMbL0CZc2STmruTr%2FN2m7eSK7619QW1MagGO1uWLoZpmBuzj%2BXnit83%2BQE0689d5juYc5MnB4m1nkyQtPGSRqYEBHchc6FR4pB7Ck8DHER%2BzpDsv5JT63h71HBnHouvgVHmomYIaRYRR5iSHmmfvRvgrNcPGgwU0J594NKg%2BQpjGFLskN39vrmdVaMzsD8%2B4aSHtwjpsrRINjsQ7jVeH3NQtCItp989S5dQ3ZC%2BEi5Ir3dd0wNEnnERoH%2BgD2A5ox19F%2FP7%2BNeTIAbs5ZMHEpsr8ATjzL3ntfbjtJaVMR9qikNCKU741M%2BHErRRuTsPH%2FD1DKIFl2SCgfc2CRFm%2FOV6%2Fh5vTR%2FkWgmhNYHGwUctBqki1aoFKsrqys36%2FmFG9yHksjxq%2FXdCzfKsMQcUzTdj77U%2BUe8juwtvD4oEN5xC%2B6M4vTtxXdUS2%2FwnDe8rNhsdWBrxpXApYs786doqBFt6In2U1e5Qht66McZjHh481N1gLz9VjJO6eIZZdKJa0lLgPgpYwzuh0IaMmoGO445mWBLJze54uPnS%2B2GO28OmpiqNEK0UOzE7E2hfpttGofLtW3AadyiRkpMSYAwHDnVFMOiQ78IGOqUByEDj4r%2ByPdD29QOb%2FN%2FmuTFLmDUhGI1uKAhQM%2BGIqW6NSj0M05EX%2BWDi7DAwZytA25LjevrK8Nk%2B84CQKcBNuHbTRWwEnYMEv%2Ft2H2ghq1s3AQ%2BUIc9WWvFzJsQ8W8YW4VA1Ep%2FWRSiidOOVx4YfEeK9y1UoAI34wtSpTHUPKXRZReoZ%2Bj9GJwsRll5F5IfdUEk%2BEebSnMaQ9NJPe6WNASWdKasE&X-Amz-Signature=c0a57c39caf54329128fcffd0b7cce267404a320f8c564ceebe0f4e5b9964303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YXOEVM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBjl3ZSsZp66RvRq974hZg4Zi%2BgzqlHSghmuoizbqK4qAiEAoEEf8uHR3rRR5OG0S5iqKgH4Y63SYk9W%2B0gcwhZnR9Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPIE26FefUPQWdTCWSrcAxvOArsGvBmvllNzgJ69uCPgNQE9iDgbtsSp4KMbL0CZc2STmruTr%2FN2m7eSK7619QW1MagGO1uWLoZpmBuzj%2BXnit83%2BQE0689d5juYc5MnB4m1nkyQtPGSRqYEBHchc6FR4pB7Ck8DHER%2BzpDsv5JT63h71HBnHouvgVHmomYIaRYRR5iSHmmfvRvgrNcPGgwU0J594NKg%2BQpjGFLskN39vrmdVaMzsD8%2B4aSHtwjpsrRINjsQ7jVeH3NQtCItp989S5dQ3ZC%2BEi5Ir3dd0wNEnnERoH%2BgD2A5ox19F%2FP7%2BNeTIAbs5ZMHEpsr8ATjzL3ntfbjtJaVMR9qikNCKU741M%2BHErRRuTsPH%2FD1DKIFl2SCgfc2CRFm%2FOV6%2Fh5vTR%2FkWgmhNYHGwUctBqki1aoFKsrqys36%2FmFG9yHksjxq%2FXdCzfKsMQcUzTdj77U%2BUe8juwtvD4oEN5xC%2B6M4vTtxXdUS2%2FwnDe8rNhsdWBrxpXApYs786doqBFt6In2U1e5Qht66McZjHh481N1gLz9VjJO6eIZZdKJa0lLgPgpYwzuh0IaMmoGO445mWBLJze54uPnS%2B2GO28OmpiqNEK0UOzE7E2hfpttGofLtW3AadyiRkpMSYAwHDnVFMOiQ78IGOqUByEDj4r%2ByPdD29QOb%2FN%2FmuTFLmDUhGI1uKAhQM%2BGIqW6NSj0M05EX%2BWDi7DAwZytA25LjevrK8Nk%2B84CQKcBNuHbTRWwEnYMEv%2Ft2H2ghq1s3AQ%2BUIc9WWvFzJsQ8W8YW4VA1Ep%2FWRSiidOOVx4YfEeK9y1UoAI34wtSpTHUPKXRZReoZ%2Bj9GJwsRll5F5IfdUEk%2BEebSnMaQ9NJPe6WNASWdKasE&X-Amz-Signature=902d63cac4542ad125fc82ff030e9c0a2e5da18cc494cec1a20e60aeadc5ab82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YXOEVM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBjl3ZSsZp66RvRq974hZg4Zi%2BgzqlHSghmuoizbqK4qAiEAoEEf8uHR3rRR5OG0S5iqKgH4Y63SYk9W%2B0gcwhZnR9Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPIE26FefUPQWdTCWSrcAxvOArsGvBmvllNzgJ69uCPgNQE9iDgbtsSp4KMbL0CZc2STmruTr%2FN2m7eSK7619QW1MagGO1uWLoZpmBuzj%2BXnit83%2BQE0689d5juYc5MnB4m1nkyQtPGSRqYEBHchc6FR4pB7Ck8DHER%2BzpDsv5JT63h71HBnHouvgVHmomYIaRYRR5iSHmmfvRvgrNcPGgwU0J594NKg%2BQpjGFLskN39vrmdVaMzsD8%2B4aSHtwjpsrRINjsQ7jVeH3NQtCItp989S5dQ3ZC%2BEi5Ir3dd0wNEnnERoH%2BgD2A5ox19F%2FP7%2BNeTIAbs5ZMHEpsr8ATjzL3ntfbjtJaVMR9qikNCKU741M%2BHErRRuTsPH%2FD1DKIFl2SCgfc2CRFm%2FOV6%2Fh5vTR%2FkWgmhNYHGwUctBqki1aoFKsrqys36%2FmFG9yHksjxq%2FXdCzfKsMQcUzTdj77U%2BUe8juwtvD4oEN5xC%2B6M4vTtxXdUS2%2FwnDe8rNhsdWBrxpXApYs786doqBFt6In2U1e5Qht66McZjHh481N1gLz9VjJO6eIZZdKJa0lLgPgpYwzuh0IaMmoGO445mWBLJze54uPnS%2B2GO28OmpiqNEK0UOzE7E2hfpttGofLtW3AadyiRkpMSYAwHDnVFMOiQ78IGOqUByEDj4r%2ByPdD29QOb%2FN%2FmuTFLmDUhGI1uKAhQM%2BGIqW6NSj0M05EX%2BWDi7DAwZytA25LjevrK8Nk%2B84CQKcBNuHbTRWwEnYMEv%2Ft2H2ghq1s3AQ%2BUIc9WWvFzJsQ8W8YW4VA1Ep%2FWRSiidOOVx4YfEeK9y1UoAI34wtSpTHUPKXRZReoZ%2Bj9GJwsRll5F5IfdUEk%2BEebSnMaQ9NJPe6WNASWdKasE&X-Amz-Signature=3b94f12e6a0a56fd612cced90efe3f4e93882d560bb0b3809af7a5e013418f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YXOEVM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBjl3ZSsZp66RvRq974hZg4Zi%2BgzqlHSghmuoizbqK4qAiEAoEEf8uHR3rRR5OG0S5iqKgH4Y63SYk9W%2B0gcwhZnR9Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPIE26FefUPQWdTCWSrcAxvOArsGvBmvllNzgJ69uCPgNQE9iDgbtsSp4KMbL0CZc2STmruTr%2FN2m7eSK7619QW1MagGO1uWLoZpmBuzj%2BXnit83%2BQE0689d5juYc5MnB4m1nkyQtPGSRqYEBHchc6FR4pB7Ck8DHER%2BzpDsv5JT63h71HBnHouvgVHmomYIaRYRR5iSHmmfvRvgrNcPGgwU0J594NKg%2BQpjGFLskN39vrmdVaMzsD8%2B4aSHtwjpsrRINjsQ7jVeH3NQtCItp989S5dQ3ZC%2BEi5Ir3dd0wNEnnERoH%2BgD2A5ox19F%2FP7%2BNeTIAbs5ZMHEpsr8ATjzL3ntfbjtJaVMR9qikNCKU741M%2BHErRRuTsPH%2FD1DKIFl2SCgfc2CRFm%2FOV6%2Fh5vTR%2FkWgmhNYHGwUctBqki1aoFKsrqys36%2FmFG9yHksjxq%2FXdCzfKsMQcUzTdj77U%2BUe8juwtvD4oEN5xC%2B6M4vTtxXdUS2%2FwnDe8rNhsdWBrxpXApYs786doqBFt6In2U1e5Qht66McZjHh481N1gLz9VjJO6eIZZdKJa0lLgPgpYwzuh0IaMmoGO445mWBLJze54uPnS%2B2GO28OmpiqNEK0UOzE7E2hfpttGofLtW3AadyiRkpMSYAwHDnVFMOiQ78IGOqUByEDj4r%2ByPdD29QOb%2FN%2FmuTFLmDUhGI1uKAhQM%2BGIqW6NSj0M05EX%2BWDi7DAwZytA25LjevrK8Nk%2B84CQKcBNuHbTRWwEnYMEv%2Ft2H2ghq1s3AQ%2BUIc9WWvFzJsQ8W8YW4VA1Ep%2FWRSiidOOVx4YfEeK9y1UoAI34wtSpTHUPKXRZReoZ%2Bj9GJwsRll5F5IfdUEk%2BEebSnMaQ9NJPe6WNASWdKasE&X-Amz-Signature=5b840beb2e6710acd519022f36d5a41a7e45a6310fd60b26dd682b0b2c79759d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YXOEVM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBjl3ZSsZp66RvRq974hZg4Zi%2BgzqlHSghmuoizbqK4qAiEAoEEf8uHR3rRR5OG0S5iqKgH4Y63SYk9W%2B0gcwhZnR9Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPIE26FefUPQWdTCWSrcAxvOArsGvBmvllNzgJ69uCPgNQE9iDgbtsSp4KMbL0CZc2STmruTr%2FN2m7eSK7619QW1MagGO1uWLoZpmBuzj%2BXnit83%2BQE0689d5juYc5MnB4m1nkyQtPGSRqYEBHchc6FR4pB7Ck8DHER%2BzpDsv5JT63h71HBnHouvgVHmomYIaRYRR5iSHmmfvRvgrNcPGgwU0J594NKg%2BQpjGFLskN39vrmdVaMzsD8%2B4aSHtwjpsrRINjsQ7jVeH3NQtCItp989S5dQ3ZC%2BEi5Ir3dd0wNEnnERoH%2BgD2A5ox19F%2FP7%2BNeTIAbs5ZMHEpsr8ATjzL3ntfbjtJaVMR9qikNCKU741M%2BHErRRuTsPH%2FD1DKIFl2SCgfc2CRFm%2FOV6%2Fh5vTR%2FkWgmhNYHGwUctBqki1aoFKsrqys36%2FmFG9yHksjxq%2FXdCzfKsMQcUzTdj77U%2BUe8juwtvD4oEN5xC%2B6M4vTtxXdUS2%2FwnDe8rNhsdWBrxpXApYs786doqBFt6In2U1e5Qht66McZjHh481N1gLz9VjJO6eIZZdKJa0lLgPgpYwzuh0IaMmoGO445mWBLJze54uPnS%2B2GO28OmpiqNEK0UOzE7E2hfpttGofLtW3AadyiRkpMSYAwHDnVFMOiQ78IGOqUByEDj4r%2ByPdD29QOb%2FN%2FmuTFLmDUhGI1uKAhQM%2BGIqW6NSj0M05EX%2BWDi7DAwZytA25LjevrK8Nk%2B84CQKcBNuHbTRWwEnYMEv%2Ft2H2ghq1s3AQ%2BUIc9WWvFzJsQ8W8YW4VA1Ep%2FWRSiidOOVx4YfEeK9y1UoAI34wtSpTHUPKXRZReoZ%2Bj9GJwsRll5F5IfdUEk%2BEebSnMaQ9NJPe6WNASWdKasE&X-Amz-Signature=b92ac8ac1eb1e22e2bca52812e0e746e6b4b05c59b1bf98299c5817f18fae8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5YXOEVM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIBjl3ZSsZp66RvRq974hZg4Zi%2BgzqlHSghmuoizbqK4qAiEAoEEf8uHR3rRR5OG0S5iqKgH4Y63SYk9W%2B0gcwhZnR9Iq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDPIE26FefUPQWdTCWSrcAxvOArsGvBmvllNzgJ69uCPgNQE9iDgbtsSp4KMbL0CZc2STmruTr%2FN2m7eSK7619QW1MagGO1uWLoZpmBuzj%2BXnit83%2BQE0689d5juYc5MnB4m1nkyQtPGSRqYEBHchc6FR4pB7Ck8DHER%2BzpDsv5JT63h71HBnHouvgVHmomYIaRYRR5iSHmmfvRvgrNcPGgwU0J594NKg%2BQpjGFLskN39vrmdVaMzsD8%2B4aSHtwjpsrRINjsQ7jVeH3NQtCItp989S5dQ3ZC%2BEi5Ir3dd0wNEnnERoH%2BgD2A5ox19F%2FP7%2BNeTIAbs5ZMHEpsr8ATjzL3ntfbjtJaVMR9qikNCKU741M%2BHErRRuTsPH%2FD1DKIFl2SCgfc2CRFm%2FOV6%2Fh5vTR%2FkWgmhNYHGwUctBqki1aoFKsrqys36%2FmFG9yHksjxq%2FXdCzfKsMQcUzTdj77U%2BUe8juwtvD4oEN5xC%2B6M4vTtxXdUS2%2FwnDe8rNhsdWBrxpXApYs786doqBFt6In2U1e5Qht66McZjHh481N1gLz9VjJO6eIZZdKJa0lLgPgpYwzuh0IaMmoGO445mWBLJze54uPnS%2B2GO28OmpiqNEK0UOzE7E2hfpttGofLtW3AadyiRkpMSYAwHDnVFMOiQ78IGOqUByEDj4r%2ByPdD29QOb%2FN%2FmuTFLmDUhGI1uKAhQM%2BGIqW6NSj0M05EX%2BWDi7DAwZytA25LjevrK8Nk%2B84CQKcBNuHbTRWwEnYMEv%2Ft2H2ghq1s3AQ%2BUIc9WWvFzJsQ8W8YW4VA1Ep%2FWRSiidOOVx4YfEeK9y1UoAI34wtSpTHUPKXRZReoZ%2Bj9GJwsRll5F5IfdUEk%2BEebSnMaQ9NJPe6WNASWdKasE&X-Amz-Signature=5d65903f8f5df28837f8c307918d3017ed8c327e8835bf9a213f58db7f0e7519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
