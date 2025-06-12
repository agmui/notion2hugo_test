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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFZZA4J%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICPUvZ63dSeF%2Blf5BrXH38uwuYvL5DeoPoSeetMDCcn6AiBLcAbVyLwKyMErKdl1Yp23iiK%2B0coqAnzSndoXT1IK1iqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjkfiSHIngk5c3RcLKtwDvkp0yj6YckzummEjNZaywUTmnldPofFvrz3ugKnqOyvNw7n%2BRYhxfpSTEdkGcHTqh0TWVJTmH04nauVe6PrCPSVQYePR%2FVIxYxiv3blnByXbhEkiqatE8MF93wP0LQ14UmEWqGimPVaJPCcQ7etVMO85fGZHQXwxY0662HgSCeSPsY3VSbjktaBnGrge%2FFCqSOARWTW1h8dhV1ohhqDJl9WYPtoguxNU%2F7qvUStuVMy1XtGjxF%2F3nDns9BC1gY%2FGyvmQe%2Fuih9qults85oR18H%2B4y5QsL%2FtcrOxuWvxy2dIhhVz6OU7wQqZPXzMt9OIaG0e9VCBKRXOPRmxXABLpcX5mtISkjkrL%2ByaQiH8RnYUYeLkee46ADj0SHY19S4O0bjPY4oP2SpPbaGfbU1I6wwWil6L4fr6cHnUVy72%2BW3lnbwO%2F7aSBos%2BCeueR7Zqt%2FxKp7Ft2D1AOM%2FvcZhlCStzC5oy7UxKE823IdCC9Lq7hIfEvqn3LAZFmD9WlJp%2Fv%2FKdKDqvYeDaRL%2FNyRZp4vv3IPhgdOqT%2BdeNf%2FEBqmQOqIydXzgG%2BNrNCDyPpV6I8q83QGjyAEZNHws9JGwV0kQhBMHoPhXDKhGJI2MrkbMfMs8oXox3RmZJ0Eaow3JOpwgY6pgFxsQFuHttDI%2FpTH%2B4WoTzVsJyA9rf6m7%2BV%2B2Y6DLxsTbxPHt2J%2BBKP2xzQ5m%2F6%2FjNOgYYNQ5%2BgSDn3pkg9rOcxmGReoCP2cSl%2FOZcb5cMVlQtNswDl3MH9dYVhGXJT2E9JVSew6%2By265bH%2B64D3%2B%2BsbgfhvQ3rXIIEm5bVMS%2FFQAXtsyfzo73DlCe2AKbFN8SiPi%2FMnrTMYgw9RbyEUg3AuWK%2FRyW6&X-Amz-Signature=319ff7b8a236480ede15a0e44523e3c82a4947fcaa2b569d582cb59169ae00cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFZZA4J%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICPUvZ63dSeF%2Blf5BrXH38uwuYvL5DeoPoSeetMDCcn6AiBLcAbVyLwKyMErKdl1Yp23iiK%2B0coqAnzSndoXT1IK1iqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjkfiSHIngk5c3RcLKtwDvkp0yj6YckzummEjNZaywUTmnldPofFvrz3ugKnqOyvNw7n%2BRYhxfpSTEdkGcHTqh0TWVJTmH04nauVe6PrCPSVQYePR%2FVIxYxiv3blnByXbhEkiqatE8MF93wP0LQ14UmEWqGimPVaJPCcQ7etVMO85fGZHQXwxY0662HgSCeSPsY3VSbjktaBnGrge%2FFCqSOARWTW1h8dhV1ohhqDJl9WYPtoguxNU%2F7qvUStuVMy1XtGjxF%2F3nDns9BC1gY%2FGyvmQe%2Fuih9qults85oR18H%2B4y5QsL%2FtcrOxuWvxy2dIhhVz6OU7wQqZPXzMt9OIaG0e9VCBKRXOPRmxXABLpcX5mtISkjkrL%2ByaQiH8RnYUYeLkee46ADj0SHY19S4O0bjPY4oP2SpPbaGfbU1I6wwWil6L4fr6cHnUVy72%2BW3lnbwO%2F7aSBos%2BCeueR7Zqt%2FxKp7Ft2D1AOM%2FvcZhlCStzC5oy7UxKE823IdCC9Lq7hIfEvqn3LAZFmD9WlJp%2Fv%2FKdKDqvYeDaRL%2FNyRZp4vv3IPhgdOqT%2BdeNf%2FEBqmQOqIydXzgG%2BNrNCDyPpV6I8q83QGjyAEZNHws9JGwV0kQhBMHoPhXDKhGJI2MrkbMfMs8oXox3RmZJ0Eaow3JOpwgY6pgFxsQFuHttDI%2FpTH%2B4WoTzVsJyA9rf6m7%2BV%2B2Y6DLxsTbxPHt2J%2BBKP2xzQ5m%2F6%2FjNOgYYNQ5%2BgSDn3pkg9rOcxmGReoCP2cSl%2FOZcb5cMVlQtNswDl3MH9dYVhGXJT2E9JVSew6%2By265bH%2B64D3%2B%2BsbgfhvQ3rXIIEm5bVMS%2FFQAXtsyfzo73DlCe2AKbFN8SiPi%2FMnrTMYgw9RbyEUg3AuWK%2FRyW6&X-Amz-Signature=bdf17839ce5f6da77be2d53e8ab2eeac662610c4176d9bfff070aeb6be9877fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFZZA4J%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICPUvZ63dSeF%2Blf5BrXH38uwuYvL5DeoPoSeetMDCcn6AiBLcAbVyLwKyMErKdl1Yp23iiK%2B0coqAnzSndoXT1IK1iqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjkfiSHIngk5c3RcLKtwDvkp0yj6YckzummEjNZaywUTmnldPofFvrz3ugKnqOyvNw7n%2BRYhxfpSTEdkGcHTqh0TWVJTmH04nauVe6PrCPSVQYePR%2FVIxYxiv3blnByXbhEkiqatE8MF93wP0LQ14UmEWqGimPVaJPCcQ7etVMO85fGZHQXwxY0662HgSCeSPsY3VSbjktaBnGrge%2FFCqSOARWTW1h8dhV1ohhqDJl9WYPtoguxNU%2F7qvUStuVMy1XtGjxF%2F3nDns9BC1gY%2FGyvmQe%2Fuih9qults85oR18H%2B4y5QsL%2FtcrOxuWvxy2dIhhVz6OU7wQqZPXzMt9OIaG0e9VCBKRXOPRmxXABLpcX5mtISkjkrL%2ByaQiH8RnYUYeLkee46ADj0SHY19S4O0bjPY4oP2SpPbaGfbU1I6wwWil6L4fr6cHnUVy72%2BW3lnbwO%2F7aSBos%2BCeueR7Zqt%2FxKp7Ft2D1AOM%2FvcZhlCStzC5oy7UxKE823IdCC9Lq7hIfEvqn3LAZFmD9WlJp%2Fv%2FKdKDqvYeDaRL%2FNyRZp4vv3IPhgdOqT%2BdeNf%2FEBqmQOqIydXzgG%2BNrNCDyPpV6I8q83QGjyAEZNHws9JGwV0kQhBMHoPhXDKhGJI2MrkbMfMs8oXox3RmZJ0Eaow3JOpwgY6pgFxsQFuHttDI%2FpTH%2B4WoTzVsJyA9rf6m7%2BV%2B2Y6DLxsTbxPHt2J%2BBKP2xzQ5m%2F6%2FjNOgYYNQ5%2BgSDn3pkg9rOcxmGReoCP2cSl%2FOZcb5cMVlQtNswDl3MH9dYVhGXJT2E9JVSew6%2By265bH%2B64D3%2B%2BsbgfhvQ3rXIIEm5bVMS%2FFQAXtsyfzo73DlCe2AKbFN8SiPi%2FMnrTMYgw9RbyEUg3AuWK%2FRyW6&X-Amz-Signature=fc429284e092b969e0f03a161b5322b87baa8435b49f9d5e9462a5756827ad3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFZZA4J%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICPUvZ63dSeF%2Blf5BrXH38uwuYvL5DeoPoSeetMDCcn6AiBLcAbVyLwKyMErKdl1Yp23iiK%2B0coqAnzSndoXT1IK1iqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjkfiSHIngk5c3RcLKtwDvkp0yj6YckzummEjNZaywUTmnldPofFvrz3ugKnqOyvNw7n%2BRYhxfpSTEdkGcHTqh0TWVJTmH04nauVe6PrCPSVQYePR%2FVIxYxiv3blnByXbhEkiqatE8MF93wP0LQ14UmEWqGimPVaJPCcQ7etVMO85fGZHQXwxY0662HgSCeSPsY3VSbjktaBnGrge%2FFCqSOARWTW1h8dhV1ohhqDJl9WYPtoguxNU%2F7qvUStuVMy1XtGjxF%2F3nDns9BC1gY%2FGyvmQe%2Fuih9qults85oR18H%2B4y5QsL%2FtcrOxuWvxy2dIhhVz6OU7wQqZPXzMt9OIaG0e9VCBKRXOPRmxXABLpcX5mtISkjkrL%2ByaQiH8RnYUYeLkee46ADj0SHY19S4O0bjPY4oP2SpPbaGfbU1I6wwWil6L4fr6cHnUVy72%2BW3lnbwO%2F7aSBos%2BCeueR7Zqt%2FxKp7Ft2D1AOM%2FvcZhlCStzC5oy7UxKE823IdCC9Lq7hIfEvqn3LAZFmD9WlJp%2Fv%2FKdKDqvYeDaRL%2FNyRZp4vv3IPhgdOqT%2BdeNf%2FEBqmQOqIydXzgG%2BNrNCDyPpV6I8q83QGjyAEZNHws9JGwV0kQhBMHoPhXDKhGJI2MrkbMfMs8oXox3RmZJ0Eaow3JOpwgY6pgFxsQFuHttDI%2FpTH%2B4WoTzVsJyA9rf6m7%2BV%2B2Y6DLxsTbxPHt2J%2BBKP2xzQ5m%2F6%2FjNOgYYNQ5%2BgSDn3pkg9rOcxmGReoCP2cSl%2FOZcb5cMVlQtNswDl3MH9dYVhGXJT2E9JVSew6%2By265bH%2B64D3%2B%2BsbgfhvQ3rXIIEm5bVMS%2FFQAXtsyfzo73DlCe2AKbFN8SiPi%2FMnrTMYgw9RbyEUg3AuWK%2FRyW6&X-Amz-Signature=2391b54db9683ae61d9c3700a675f27c0c4f134374e001952065ff1b271e2aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFZZA4J%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICPUvZ63dSeF%2Blf5BrXH38uwuYvL5DeoPoSeetMDCcn6AiBLcAbVyLwKyMErKdl1Yp23iiK%2B0coqAnzSndoXT1IK1iqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjkfiSHIngk5c3RcLKtwDvkp0yj6YckzummEjNZaywUTmnldPofFvrz3ugKnqOyvNw7n%2BRYhxfpSTEdkGcHTqh0TWVJTmH04nauVe6PrCPSVQYePR%2FVIxYxiv3blnByXbhEkiqatE8MF93wP0LQ14UmEWqGimPVaJPCcQ7etVMO85fGZHQXwxY0662HgSCeSPsY3VSbjktaBnGrge%2FFCqSOARWTW1h8dhV1ohhqDJl9WYPtoguxNU%2F7qvUStuVMy1XtGjxF%2F3nDns9BC1gY%2FGyvmQe%2Fuih9qults85oR18H%2B4y5QsL%2FtcrOxuWvxy2dIhhVz6OU7wQqZPXzMt9OIaG0e9VCBKRXOPRmxXABLpcX5mtISkjkrL%2ByaQiH8RnYUYeLkee46ADj0SHY19S4O0bjPY4oP2SpPbaGfbU1I6wwWil6L4fr6cHnUVy72%2BW3lnbwO%2F7aSBos%2BCeueR7Zqt%2FxKp7Ft2D1AOM%2FvcZhlCStzC5oy7UxKE823IdCC9Lq7hIfEvqn3LAZFmD9WlJp%2Fv%2FKdKDqvYeDaRL%2FNyRZp4vv3IPhgdOqT%2BdeNf%2FEBqmQOqIydXzgG%2BNrNCDyPpV6I8q83QGjyAEZNHws9JGwV0kQhBMHoPhXDKhGJI2MrkbMfMs8oXox3RmZJ0Eaow3JOpwgY6pgFxsQFuHttDI%2FpTH%2B4WoTzVsJyA9rf6m7%2BV%2B2Y6DLxsTbxPHt2J%2BBKP2xzQ5m%2F6%2FjNOgYYNQ5%2BgSDn3pkg9rOcxmGReoCP2cSl%2FOZcb5cMVlQtNswDl3MH9dYVhGXJT2E9JVSew6%2By265bH%2B64D3%2B%2BsbgfhvQ3rXIIEm5bVMS%2FFQAXtsyfzo73DlCe2AKbFN8SiPi%2FMnrTMYgw9RbyEUg3AuWK%2FRyW6&X-Amz-Signature=e2adb4f882e01201563558445abd648e8043d58f907fbcacf903d017aeacf71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFZZA4J%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICPUvZ63dSeF%2Blf5BrXH38uwuYvL5DeoPoSeetMDCcn6AiBLcAbVyLwKyMErKdl1Yp23iiK%2B0coqAnzSndoXT1IK1iqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjkfiSHIngk5c3RcLKtwDvkp0yj6YckzummEjNZaywUTmnldPofFvrz3ugKnqOyvNw7n%2BRYhxfpSTEdkGcHTqh0TWVJTmH04nauVe6PrCPSVQYePR%2FVIxYxiv3blnByXbhEkiqatE8MF93wP0LQ14UmEWqGimPVaJPCcQ7etVMO85fGZHQXwxY0662HgSCeSPsY3VSbjktaBnGrge%2FFCqSOARWTW1h8dhV1ohhqDJl9WYPtoguxNU%2F7qvUStuVMy1XtGjxF%2F3nDns9BC1gY%2FGyvmQe%2Fuih9qults85oR18H%2B4y5QsL%2FtcrOxuWvxy2dIhhVz6OU7wQqZPXzMt9OIaG0e9VCBKRXOPRmxXABLpcX5mtISkjkrL%2ByaQiH8RnYUYeLkee46ADj0SHY19S4O0bjPY4oP2SpPbaGfbU1I6wwWil6L4fr6cHnUVy72%2BW3lnbwO%2F7aSBos%2BCeueR7Zqt%2FxKp7Ft2D1AOM%2FvcZhlCStzC5oy7UxKE823IdCC9Lq7hIfEvqn3LAZFmD9WlJp%2Fv%2FKdKDqvYeDaRL%2FNyRZp4vv3IPhgdOqT%2BdeNf%2FEBqmQOqIydXzgG%2BNrNCDyPpV6I8q83QGjyAEZNHws9JGwV0kQhBMHoPhXDKhGJI2MrkbMfMs8oXox3RmZJ0Eaow3JOpwgY6pgFxsQFuHttDI%2FpTH%2B4WoTzVsJyA9rf6m7%2BV%2B2Y6DLxsTbxPHt2J%2BBKP2xzQ5m%2F6%2FjNOgYYNQ5%2BgSDn3pkg9rOcxmGReoCP2cSl%2FOZcb5cMVlQtNswDl3MH9dYVhGXJT2E9JVSew6%2By265bH%2B64D3%2B%2BsbgfhvQ3rXIIEm5bVMS%2FFQAXtsyfzo73DlCe2AKbFN8SiPi%2FMnrTMYgw9RbyEUg3AuWK%2FRyW6&X-Amz-Signature=e0172c363a84b74fb0e19a77382b755dac225c00551e94d5bb725bab75bef36b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFZZA4J%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICPUvZ63dSeF%2Blf5BrXH38uwuYvL5DeoPoSeetMDCcn6AiBLcAbVyLwKyMErKdl1Yp23iiK%2B0coqAnzSndoXT1IK1iqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjkfiSHIngk5c3RcLKtwDvkp0yj6YckzummEjNZaywUTmnldPofFvrz3ugKnqOyvNw7n%2BRYhxfpSTEdkGcHTqh0TWVJTmH04nauVe6PrCPSVQYePR%2FVIxYxiv3blnByXbhEkiqatE8MF93wP0LQ14UmEWqGimPVaJPCcQ7etVMO85fGZHQXwxY0662HgSCeSPsY3VSbjktaBnGrge%2FFCqSOARWTW1h8dhV1ohhqDJl9WYPtoguxNU%2F7qvUStuVMy1XtGjxF%2F3nDns9BC1gY%2FGyvmQe%2Fuih9qults85oR18H%2B4y5QsL%2FtcrOxuWvxy2dIhhVz6OU7wQqZPXzMt9OIaG0e9VCBKRXOPRmxXABLpcX5mtISkjkrL%2ByaQiH8RnYUYeLkee46ADj0SHY19S4O0bjPY4oP2SpPbaGfbU1I6wwWil6L4fr6cHnUVy72%2BW3lnbwO%2F7aSBos%2BCeueR7Zqt%2FxKp7Ft2D1AOM%2FvcZhlCStzC5oy7UxKE823IdCC9Lq7hIfEvqn3LAZFmD9WlJp%2Fv%2FKdKDqvYeDaRL%2FNyRZp4vv3IPhgdOqT%2BdeNf%2FEBqmQOqIydXzgG%2BNrNCDyPpV6I8q83QGjyAEZNHws9JGwV0kQhBMHoPhXDKhGJI2MrkbMfMs8oXox3RmZJ0Eaow3JOpwgY6pgFxsQFuHttDI%2FpTH%2B4WoTzVsJyA9rf6m7%2BV%2B2Y6DLxsTbxPHt2J%2BBKP2xzQ5m%2F6%2FjNOgYYNQ5%2BgSDn3pkg9rOcxmGReoCP2cSl%2FOZcb5cMVlQtNswDl3MH9dYVhGXJT2E9JVSew6%2By265bH%2B64D3%2B%2BsbgfhvQ3rXIIEm5bVMS%2FFQAXtsyfzo73DlCe2AKbFN8SiPi%2FMnrTMYgw9RbyEUg3AuWK%2FRyW6&X-Amz-Signature=5272f9838b51d238bd3481e04cccb8782b78076f6c4a5abfca315a915e70e377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QFZZA4J%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICPUvZ63dSeF%2Blf5BrXH38uwuYvL5DeoPoSeetMDCcn6AiBLcAbVyLwKyMErKdl1Yp23iiK%2B0coqAnzSndoXT1IK1iqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjkfiSHIngk5c3RcLKtwDvkp0yj6YckzummEjNZaywUTmnldPofFvrz3ugKnqOyvNw7n%2BRYhxfpSTEdkGcHTqh0TWVJTmH04nauVe6PrCPSVQYePR%2FVIxYxiv3blnByXbhEkiqatE8MF93wP0LQ14UmEWqGimPVaJPCcQ7etVMO85fGZHQXwxY0662HgSCeSPsY3VSbjktaBnGrge%2FFCqSOARWTW1h8dhV1ohhqDJl9WYPtoguxNU%2F7qvUStuVMy1XtGjxF%2F3nDns9BC1gY%2FGyvmQe%2Fuih9qults85oR18H%2B4y5QsL%2FtcrOxuWvxy2dIhhVz6OU7wQqZPXzMt9OIaG0e9VCBKRXOPRmxXABLpcX5mtISkjkrL%2ByaQiH8RnYUYeLkee46ADj0SHY19S4O0bjPY4oP2SpPbaGfbU1I6wwWil6L4fr6cHnUVy72%2BW3lnbwO%2F7aSBos%2BCeueR7Zqt%2FxKp7Ft2D1AOM%2FvcZhlCStzC5oy7UxKE823IdCC9Lq7hIfEvqn3LAZFmD9WlJp%2Fv%2FKdKDqvYeDaRL%2FNyRZp4vv3IPhgdOqT%2BdeNf%2FEBqmQOqIydXzgG%2BNrNCDyPpV6I8q83QGjyAEZNHws9JGwV0kQhBMHoPhXDKhGJI2MrkbMfMs8oXox3RmZJ0Eaow3JOpwgY6pgFxsQFuHttDI%2FpTH%2B4WoTzVsJyA9rf6m7%2BV%2B2Y6DLxsTbxPHt2J%2BBKP2xzQ5m%2F6%2FjNOgYYNQ5%2BgSDn3pkg9rOcxmGReoCP2cSl%2FOZcb5cMVlQtNswDl3MH9dYVhGXJT2E9JVSew6%2By265bH%2B64D3%2B%2BsbgfhvQ3rXIIEm5bVMS%2FFQAXtsyfzo73DlCe2AKbFN8SiPi%2FMnrTMYgw9RbyEUg3AuWK%2FRyW6&X-Amz-Signature=fae5a7cc144bb5c0a8a5f6ae3b4662172a25a299eb40d6fab01b54e619285ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
