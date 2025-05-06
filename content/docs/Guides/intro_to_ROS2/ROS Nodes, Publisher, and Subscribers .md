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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKHZML7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCurBqhNGolYNd4jPqYjpCsJsihEUAQLh3tqzuJhM2dTwIhAKgCg9eobCN3mx4VNkIx3sNTaFezL64dqaYH%2B5EXg9C%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgzlyQ631t2l%2FGKlh6Eq3AOOjm%2Fy6RrdPrcsAzMeGFsQADaNYNuRqtxyPTkwQhiB2FxBNclXYSlrbdTXctviAps0976YHa%2Bdp1NR3hpVqs5Y51KVTeW0hspbFE69b1LbJp2kkUucu9OSsWfT0mkPwCharICJYUGlb%2BaIJFOZ1kVbFQ9iqbX7c2oBthRBr9j%2BQn42uYwde7Jae9I8xnqYpqNPWioa9YLI%2BtSW9wN45Y3pLUf5Ia7hYfres54uX93r5zF3Asu%2BXPb5TNoQN6vemax3VbcZI1uWlO5xIUiOoiBz66WAtinD815S9B2zhtyJh2qOybhuY2P1VovRKmE17MJAKrnGg%2FsSrFRW65c%2BI3C39shHU2mj7%2BCSPLDwK9t2IWNguHvjMgEbflBIVP0CUJ6CW2yvPsiUpgKOsCvyp%2FPvM34uWZKXIsnGD7JCUZ3NA6ineAw1DPHWwX8qLUztFwI8vz3lMN8UHqiF%2Fl0NJDAcUjwxEQgQ%2Bn4UuIBKtwF%2FblgMrqmarg7Acy5K%2Fr0mnW01J%2BTIjAhIP6qqxKt61WzuKFKbbUYVTjeLNWcK4bPqOTQXSvvsnr9tqBfdmsTCIhhCob5phJ%2F1tdi7cHsGYiLhwr50zjnrzshzwAV49E34TzdglPBd324tv%2FIKTzChi%2BfABjqkAeZuEH2tCoxs7OEO3UfQxeKrXjPZYfD3NDhM%2FkJPDaQ6L9QtEXVMiQobAz55imXLoSBXs4%2F5S3WZdaH0P%2BepxESIv2CZU39zc9ToobpcuGXQHe7Fh3RFoGOH327mVat17MKkvPan2QomH23IIkzfWBar7dwPX%2BZ14vRqwoG%2FmuJkh6mqny01X9OJLJJVJcy3I%2BbOE9yh4zDkiPYJtOipdSdIkhXJ&X-Amz-Signature=6bb20a112ecb0efdddddd563001391f7ae8bcf76c1a22bfcf4a1fa0015621947&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKHZML7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCurBqhNGolYNd4jPqYjpCsJsihEUAQLh3tqzuJhM2dTwIhAKgCg9eobCN3mx4VNkIx3sNTaFezL64dqaYH%2B5EXg9C%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgzlyQ631t2l%2FGKlh6Eq3AOOjm%2Fy6RrdPrcsAzMeGFsQADaNYNuRqtxyPTkwQhiB2FxBNclXYSlrbdTXctviAps0976YHa%2Bdp1NR3hpVqs5Y51KVTeW0hspbFE69b1LbJp2kkUucu9OSsWfT0mkPwCharICJYUGlb%2BaIJFOZ1kVbFQ9iqbX7c2oBthRBr9j%2BQn42uYwde7Jae9I8xnqYpqNPWioa9YLI%2BtSW9wN45Y3pLUf5Ia7hYfres54uX93r5zF3Asu%2BXPb5TNoQN6vemax3VbcZI1uWlO5xIUiOoiBz66WAtinD815S9B2zhtyJh2qOybhuY2P1VovRKmE17MJAKrnGg%2FsSrFRW65c%2BI3C39shHU2mj7%2BCSPLDwK9t2IWNguHvjMgEbflBIVP0CUJ6CW2yvPsiUpgKOsCvyp%2FPvM34uWZKXIsnGD7JCUZ3NA6ineAw1DPHWwX8qLUztFwI8vz3lMN8UHqiF%2Fl0NJDAcUjwxEQgQ%2Bn4UuIBKtwF%2FblgMrqmarg7Acy5K%2Fr0mnW01J%2BTIjAhIP6qqxKt61WzuKFKbbUYVTjeLNWcK4bPqOTQXSvvsnr9tqBfdmsTCIhhCob5phJ%2F1tdi7cHsGYiLhwr50zjnrzshzwAV49E34TzdglPBd324tv%2FIKTzChi%2BfABjqkAeZuEH2tCoxs7OEO3UfQxeKrXjPZYfD3NDhM%2FkJPDaQ6L9QtEXVMiQobAz55imXLoSBXs4%2F5S3WZdaH0P%2BepxESIv2CZU39zc9ToobpcuGXQHe7Fh3RFoGOH327mVat17MKkvPan2QomH23IIkzfWBar7dwPX%2BZ14vRqwoG%2FmuJkh6mqny01X9OJLJJVJcy3I%2BbOE9yh4zDkiPYJtOipdSdIkhXJ&X-Amz-Signature=51a7b671a5d8f7d2859f9b56c8bdac57e09879c469b1d4b5625e988c5e766929&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKHZML7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCurBqhNGolYNd4jPqYjpCsJsihEUAQLh3tqzuJhM2dTwIhAKgCg9eobCN3mx4VNkIx3sNTaFezL64dqaYH%2B5EXg9C%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgzlyQ631t2l%2FGKlh6Eq3AOOjm%2Fy6RrdPrcsAzMeGFsQADaNYNuRqtxyPTkwQhiB2FxBNclXYSlrbdTXctviAps0976YHa%2Bdp1NR3hpVqs5Y51KVTeW0hspbFE69b1LbJp2kkUucu9OSsWfT0mkPwCharICJYUGlb%2BaIJFOZ1kVbFQ9iqbX7c2oBthRBr9j%2BQn42uYwde7Jae9I8xnqYpqNPWioa9YLI%2BtSW9wN45Y3pLUf5Ia7hYfres54uX93r5zF3Asu%2BXPb5TNoQN6vemax3VbcZI1uWlO5xIUiOoiBz66WAtinD815S9B2zhtyJh2qOybhuY2P1VovRKmE17MJAKrnGg%2FsSrFRW65c%2BI3C39shHU2mj7%2BCSPLDwK9t2IWNguHvjMgEbflBIVP0CUJ6CW2yvPsiUpgKOsCvyp%2FPvM34uWZKXIsnGD7JCUZ3NA6ineAw1DPHWwX8qLUztFwI8vz3lMN8UHqiF%2Fl0NJDAcUjwxEQgQ%2Bn4UuIBKtwF%2FblgMrqmarg7Acy5K%2Fr0mnW01J%2BTIjAhIP6qqxKt61WzuKFKbbUYVTjeLNWcK4bPqOTQXSvvsnr9tqBfdmsTCIhhCob5phJ%2F1tdi7cHsGYiLhwr50zjnrzshzwAV49E34TzdglPBd324tv%2FIKTzChi%2BfABjqkAeZuEH2tCoxs7OEO3UfQxeKrXjPZYfD3NDhM%2FkJPDaQ6L9QtEXVMiQobAz55imXLoSBXs4%2F5S3WZdaH0P%2BepxESIv2CZU39zc9ToobpcuGXQHe7Fh3RFoGOH327mVat17MKkvPan2QomH23IIkzfWBar7dwPX%2BZ14vRqwoG%2FmuJkh6mqny01X9OJLJJVJcy3I%2BbOE9yh4zDkiPYJtOipdSdIkhXJ&X-Amz-Signature=d67c77c5c2280eca2be6b0acbbf338273e92ef785b321985a2970e7cee3251f5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKHZML7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCurBqhNGolYNd4jPqYjpCsJsihEUAQLh3tqzuJhM2dTwIhAKgCg9eobCN3mx4VNkIx3sNTaFezL64dqaYH%2B5EXg9C%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgzlyQ631t2l%2FGKlh6Eq3AOOjm%2Fy6RrdPrcsAzMeGFsQADaNYNuRqtxyPTkwQhiB2FxBNclXYSlrbdTXctviAps0976YHa%2Bdp1NR3hpVqs5Y51KVTeW0hspbFE69b1LbJp2kkUucu9OSsWfT0mkPwCharICJYUGlb%2BaIJFOZ1kVbFQ9iqbX7c2oBthRBr9j%2BQn42uYwde7Jae9I8xnqYpqNPWioa9YLI%2BtSW9wN45Y3pLUf5Ia7hYfres54uX93r5zF3Asu%2BXPb5TNoQN6vemax3VbcZI1uWlO5xIUiOoiBz66WAtinD815S9B2zhtyJh2qOybhuY2P1VovRKmE17MJAKrnGg%2FsSrFRW65c%2BI3C39shHU2mj7%2BCSPLDwK9t2IWNguHvjMgEbflBIVP0CUJ6CW2yvPsiUpgKOsCvyp%2FPvM34uWZKXIsnGD7JCUZ3NA6ineAw1DPHWwX8qLUztFwI8vz3lMN8UHqiF%2Fl0NJDAcUjwxEQgQ%2Bn4UuIBKtwF%2FblgMrqmarg7Acy5K%2Fr0mnW01J%2BTIjAhIP6qqxKt61WzuKFKbbUYVTjeLNWcK4bPqOTQXSvvsnr9tqBfdmsTCIhhCob5phJ%2F1tdi7cHsGYiLhwr50zjnrzshzwAV49E34TzdglPBd324tv%2FIKTzChi%2BfABjqkAeZuEH2tCoxs7OEO3UfQxeKrXjPZYfD3NDhM%2FkJPDaQ6L9QtEXVMiQobAz55imXLoSBXs4%2F5S3WZdaH0P%2BepxESIv2CZU39zc9ToobpcuGXQHe7Fh3RFoGOH327mVat17MKkvPan2QomH23IIkzfWBar7dwPX%2BZ14vRqwoG%2FmuJkh6mqny01X9OJLJJVJcy3I%2BbOE9yh4zDkiPYJtOipdSdIkhXJ&X-Amz-Signature=6aef203aceb72275a96d46074cf4389fcde590ef107c9b51322c160a9bf3bdee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKHZML7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCurBqhNGolYNd4jPqYjpCsJsihEUAQLh3tqzuJhM2dTwIhAKgCg9eobCN3mx4VNkIx3sNTaFezL64dqaYH%2B5EXg9C%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgzlyQ631t2l%2FGKlh6Eq3AOOjm%2Fy6RrdPrcsAzMeGFsQADaNYNuRqtxyPTkwQhiB2FxBNclXYSlrbdTXctviAps0976YHa%2Bdp1NR3hpVqs5Y51KVTeW0hspbFE69b1LbJp2kkUucu9OSsWfT0mkPwCharICJYUGlb%2BaIJFOZ1kVbFQ9iqbX7c2oBthRBr9j%2BQn42uYwde7Jae9I8xnqYpqNPWioa9YLI%2BtSW9wN45Y3pLUf5Ia7hYfres54uX93r5zF3Asu%2BXPb5TNoQN6vemax3VbcZI1uWlO5xIUiOoiBz66WAtinD815S9B2zhtyJh2qOybhuY2P1VovRKmE17MJAKrnGg%2FsSrFRW65c%2BI3C39shHU2mj7%2BCSPLDwK9t2IWNguHvjMgEbflBIVP0CUJ6CW2yvPsiUpgKOsCvyp%2FPvM34uWZKXIsnGD7JCUZ3NA6ineAw1DPHWwX8qLUztFwI8vz3lMN8UHqiF%2Fl0NJDAcUjwxEQgQ%2Bn4UuIBKtwF%2FblgMrqmarg7Acy5K%2Fr0mnW01J%2BTIjAhIP6qqxKt61WzuKFKbbUYVTjeLNWcK4bPqOTQXSvvsnr9tqBfdmsTCIhhCob5phJ%2F1tdi7cHsGYiLhwr50zjnrzshzwAV49E34TzdglPBd324tv%2FIKTzChi%2BfABjqkAeZuEH2tCoxs7OEO3UfQxeKrXjPZYfD3NDhM%2FkJPDaQ6L9QtEXVMiQobAz55imXLoSBXs4%2F5S3WZdaH0P%2BepxESIv2CZU39zc9ToobpcuGXQHe7Fh3RFoGOH327mVat17MKkvPan2QomH23IIkzfWBar7dwPX%2BZ14vRqwoG%2FmuJkh6mqny01X9OJLJJVJcy3I%2BbOE9yh4zDkiPYJtOipdSdIkhXJ&X-Amz-Signature=989970cfe598f58f78751e997ae1bf8a9bd81896cc3b05f5c4b359c6720dddfa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKHZML7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCurBqhNGolYNd4jPqYjpCsJsihEUAQLh3tqzuJhM2dTwIhAKgCg9eobCN3mx4VNkIx3sNTaFezL64dqaYH%2B5EXg9C%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgzlyQ631t2l%2FGKlh6Eq3AOOjm%2Fy6RrdPrcsAzMeGFsQADaNYNuRqtxyPTkwQhiB2FxBNclXYSlrbdTXctviAps0976YHa%2Bdp1NR3hpVqs5Y51KVTeW0hspbFE69b1LbJp2kkUucu9OSsWfT0mkPwCharICJYUGlb%2BaIJFOZ1kVbFQ9iqbX7c2oBthRBr9j%2BQn42uYwde7Jae9I8xnqYpqNPWioa9YLI%2BtSW9wN45Y3pLUf5Ia7hYfres54uX93r5zF3Asu%2BXPb5TNoQN6vemax3VbcZI1uWlO5xIUiOoiBz66WAtinD815S9B2zhtyJh2qOybhuY2P1VovRKmE17MJAKrnGg%2FsSrFRW65c%2BI3C39shHU2mj7%2BCSPLDwK9t2IWNguHvjMgEbflBIVP0CUJ6CW2yvPsiUpgKOsCvyp%2FPvM34uWZKXIsnGD7JCUZ3NA6ineAw1DPHWwX8qLUztFwI8vz3lMN8UHqiF%2Fl0NJDAcUjwxEQgQ%2Bn4UuIBKtwF%2FblgMrqmarg7Acy5K%2Fr0mnW01J%2BTIjAhIP6qqxKt61WzuKFKbbUYVTjeLNWcK4bPqOTQXSvvsnr9tqBfdmsTCIhhCob5phJ%2F1tdi7cHsGYiLhwr50zjnrzshzwAV49E34TzdglPBd324tv%2FIKTzChi%2BfABjqkAeZuEH2tCoxs7OEO3UfQxeKrXjPZYfD3NDhM%2FkJPDaQ6L9QtEXVMiQobAz55imXLoSBXs4%2F5S3WZdaH0P%2BepxESIv2CZU39zc9ToobpcuGXQHe7Fh3RFoGOH327mVat17MKkvPan2QomH23IIkzfWBar7dwPX%2BZ14vRqwoG%2FmuJkh6mqny01X9OJLJJVJcy3I%2BbOE9yh4zDkiPYJtOipdSdIkhXJ&X-Amz-Signature=497d4e8e35b69b3ea2a37c0ad55be466c65ca542e56d44a65aa3ea25c69108dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKHZML7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCurBqhNGolYNd4jPqYjpCsJsihEUAQLh3tqzuJhM2dTwIhAKgCg9eobCN3mx4VNkIx3sNTaFezL64dqaYH%2B5EXg9C%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgzlyQ631t2l%2FGKlh6Eq3AOOjm%2Fy6RrdPrcsAzMeGFsQADaNYNuRqtxyPTkwQhiB2FxBNclXYSlrbdTXctviAps0976YHa%2Bdp1NR3hpVqs5Y51KVTeW0hspbFE69b1LbJp2kkUucu9OSsWfT0mkPwCharICJYUGlb%2BaIJFOZ1kVbFQ9iqbX7c2oBthRBr9j%2BQn42uYwde7Jae9I8xnqYpqNPWioa9YLI%2BtSW9wN45Y3pLUf5Ia7hYfres54uX93r5zF3Asu%2BXPb5TNoQN6vemax3VbcZI1uWlO5xIUiOoiBz66WAtinD815S9B2zhtyJh2qOybhuY2P1VovRKmE17MJAKrnGg%2FsSrFRW65c%2BI3C39shHU2mj7%2BCSPLDwK9t2IWNguHvjMgEbflBIVP0CUJ6CW2yvPsiUpgKOsCvyp%2FPvM34uWZKXIsnGD7JCUZ3NA6ineAw1DPHWwX8qLUztFwI8vz3lMN8UHqiF%2Fl0NJDAcUjwxEQgQ%2Bn4UuIBKtwF%2FblgMrqmarg7Acy5K%2Fr0mnW01J%2BTIjAhIP6qqxKt61WzuKFKbbUYVTjeLNWcK4bPqOTQXSvvsnr9tqBfdmsTCIhhCob5phJ%2F1tdi7cHsGYiLhwr50zjnrzshzwAV49E34TzdglPBd324tv%2FIKTzChi%2BfABjqkAeZuEH2tCoxs7OEO3UfQxeKrXjPZYfD3NDhM%2FkJPDaQ6L9QtEXVMiQobAz55imXLoSBXs4%2F5S3WZdaH0P%2BepxESIv2CZU39zc9ToobpcuGXQHe7Fh3RFoGOH327mVat17MKkvPan2QomH23IIkzfWBar7dwPX%2BZ14vRqwoG%2FmuJkh6mqny01X9OJLJJVJcy3I%2BbOE9yh4zDkiPYJtOipdSdIkhXJ&X-Amz-Signature=b609a9eecc965a663da70c54aa523ec3846e18214c4791d04bc89021d2ddaeb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKHZML7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCurBqhNGolYNd4jPqYjpCsJsihEUAQLh3tqzuJhM2dTwIhAKgCg9eobCN3mx4VNkIx3sNTaFezL64dqaYH%2B5EXg9C%2BKv8DCEEQABoMNjM3NDIzMTgzODA1IgzlyQ631t2l%2FGKlh6Eq3AOOjm%2Fy6RrdPrcsAzMeGFsQADaNYNuRqtxyPTkwQhiB2FxBNclXYSlrbdTXctviAps0976YHa%2Bdp1NR3hpVqs5Y51KVTeW0hspbFE69b1LbJp2kkUucu9OSsWfT0mkPwCharICJYUGlb%2BaIJFOZ1kVbFQ9iqbX7c2oBthRBr9j%2BQn42uYwde7Jae9I8xnqYpqNPWioa9YLI%2BtSW9wN45Y3pLUf5Ia7hYfres54uX93r5zF3Asu%2BXPb5TNoQN6vemax3VbcZI1uWlO5xIUiOoiBz66WAtinD815S9B2zhtyJh2qOybhuY2P1VovRKmE17MJAKrnGg%2FsSrFRW65c%2BI3C39shHU2mj7%2BCSPLDwK9t2IWNguHvjMgEbflBIVP0CUJ6CW2yvPsiUpgKOsCvyp%2FPvM34uWZKXIsnGD7JCUZ3NA6ineAw1DPHWwX8qLUztFwI8vz3lMN8UHqiF%2Fl0NJDAcUjwxEQgQ%2Bn4UuIBKtwF%2FblgMrqmarg7Acy5K%2Fr0mnW01J%2BTIjAhIP6qqxKt61WzuKFKbbUYVTjeLNWcK4bPqOTQXSvvsnr9tqBfdmsTCIhhCob5phJ%2F1tdi7cHsGYiLhwr50zjnrzshzwAV49E34TzdglPBd324tv%2FIKTzChi%2BfABjqkAeZuEH2tCoxs7OEO3UfQxeKrXjPZYfD3NDhM%2FkJPDaQ6L9QtEXVMiQobAz55imXLoSBXs4%2F5S3WZdaH0P%2BepxESIv2CZU39zc9ToobpcuGXQHe7Fh3RFoGOH327mVat17MKkvPan2QomH23IIkzfWBar7dwPX%2BZ14vRqwoG%2FmuJkh6mqny01X9OJLJJVJcy3I%2BbOE9yh4zDkiPYJtOipdSdIkhXJ&X-Amz-Signature=e7ab127a1b01014b668349bdf97f8f6ef3972f63659b1fc7e6c2a9277deec2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
