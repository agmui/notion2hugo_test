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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMOPVDX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FjsgJFcrKXsK3GtiypS%2Fm%2BctvmfJIP8y%2FIXXTLsTK8wIgHP33rD7E0HoFmlvpM%2BJ230ynT0FXvIDkFMpXsQxjKbMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE4XGAVY4Q6IAbpHyrcA364zNN73ClN7dLu1eOmd%2BN6cT3xB%2FTVVhzaDPhuPfeZ5ZXhU%2FnppTI%2BAXZi76BI%2BM%2Fo4OkNhqXQL5I6X0Ed3HgW4ERaFROw4ljsVDwH4FuVmgZoB0ZfBvBc7jE4Cg26I7t%2BDgWpIoviq8clNIFzElnSbz2KhFwbwS8NVVrEQu2trGE6224CBsNjr%2Fvso%2B%2B4FVixttP%2BnrRWiK4pz95y3vauwp%2FwDf2sQJD89UI6TAk6v1FS3dt8rfwNDYH%2FB2T71JGRoHaNj%2BDdnV8BvgzkVbUyS3k1NijZySBvtckLm1STDF3seqRVepiyyMmfj6q5uDm1WArElcQ87FaMiR913zQgqwcvrHEFJBktzXS6rdRYuH2lbfz0wWBmLmmqjeLNZrCmfJBsih30AtMs8kiyWZ%2BUFuWMxAO6UYBycEYh9MDG6ZHhf%2F%2BWXL2KYGVuwgYBjOLpfb0LwGZoga6KHRwq%2F9Bllex%2BzAG4La7GOA7b%2BVPbHgD8wACcIouBCUJxJ%2B6KCnMsbLFp3Lol953Z1yA7JsZvQ%2FYWW5f4Jy9M52mY4JNrVfX8KFWpxiX%2B3OH9LmGMlqo9fl7g%2FG8muaxFiFKjC6ap4L6XVwIMRDgXbfTsknsI3trNJgZlJfGzXoCNMPySq70GOqUBhWJPT8cBDVbZvhbeWfpO%2B1ijykG6vx2TmACA1HfmrFirVAYbMu0hbr7awUHQ0fCgpo0yOTyDAkLEdZxwzTj0Hb93qO%2B1wj9onutP6VPF7aS4xT6wcyCL2YaLkSwwFjco61CtjcToe1i%2BQnK1Oy7Wb5P%2F0fCJhxmBUHz3xN82kQQPIZ2XkJGOtL9Ulh81JNhMMAN43wPfaXie2kmTVJTAl0iJtN7b&X-Amz-Signature=f277a01661c5a1892dae2c5c8f893e66e681a1311cc34df529886fffc5393531&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMOPVDX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FjsgJFcrKXsK3GtiypS%2Fm%2BctvmfJIP8y%2FIXXTLsTK8wIgHP33rD7E0HoFmlvpM%2BJ230ynT0FXvIDkFMpXsQxjKbMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE4XGAVY4Q6IAbpHyrcA364zNN73ClN7dLu1eOmd%2BN6cT3xB%2FTVVhzaDPhuPfeZ5ZXhU%2FnppTI%2BAXZi76BI%2BM%2Fo4OkNhqXQL5I6X0Ed3HgW4ERaFROw4ljsVDwH4FuVmgZoB0ZfBvBc7jE4Cg26I7t%2BDgWpIoviq8clNIFzElnSbz2KhFwbwS8NVVrEQu2trGE6224CBsNjr%2Fvso%2B%2B4FVixttP%2BnrRWiK4pz95y3vauwp%2FwDf2sQJD89UI6TAk6v1FS3dt8rfwNDYH%2FB2T71JGRoHaNj%2BDdnV8BvgzkVbUyS3k1NijZySBvtckLm1STDF3seqRVepiyyMmfj6q5uDm1WArElcQ87FaMiR913zQgqwcvrHEFJBktzXS6rdRYuH2lbfz0wWBmLmmqjeLNZrCmfJBsih30AtMs8kiyWZ%2BUFuWMxAO6UYBycEYh9MDG6ZHhf%2F%2BWXL2KYGVuwgYBjOLpfb0LwGZoga6KHRwq%2F9Bllex%2BzAG4La7GOA7b%2BVPbHgD8wACcIouBCUJxJ%2B6KCnMsbLFp3Lol953Z1yA7JsZvQ%2FYWW5f4Jy9M52mY4JNrVfX8KFWpxiX%2B3OH9LmGMlqo9fl7g%2FG8muaxFiFKjC6ap4L6XVwIMRDgXbfTsknsI3trNJgZlJfGzXoCNMPySq70GOqUBhWJPT8cBDVbZvhbeWfpO%2B1ijykG6vx2TmACA1HfmrFirVAYbMu0hbr7awUHQ0fCgpo0yOTyDAkLEdZxwzTj0Hb93qO%2B1wj9onutP6VPF7aS4xT6wcyCL2YaLkSwwFjco61CtjcToe1i%2BQnK1Oy7Wb5P%2F0fCJhxmBUHz3xN82kQQPIZ2XkJGOtL9Ulh81JNhMMAN43wPfaXie2kmTVJTAl0iJtN7b&X-Amz-Signature=37e7a9e0c6e1bfbd805c714d31048cc7bb88e1bb0157666f41f98bcdc280dedf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMOPVDX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FjsgJFcrKXsK3GtiypS%2Fm%2BctvmfJIP8y%2FIXXTLsTK8wIgHP33rD7E0HoFmlvpM%2BJ230ynT0FXvIDkFMpXsQxjKbMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE4XGAVY4Q6IAbpHyrcA364zNN73ClN7dLu1eOmd%2BN6cT3xB%2FTVVhzaDPhuPfeZ5ZXhU%2FnppTI%2BAXZi76BI%2BM%2Fo4OkNhqXQL5I6X0Ed3HgW4ERaFROw4ljsVDwH4FuVmgZoB0ZfBvBc7jE4Cg26I7t%2BDgWpIoviq8clNIFzElnSbz2KhFwbwS8NVVrEQu2trGE6224CBsNjr%2Fvso%2B%2B4FVixttP%2BnrRWiK4pz95y3vauwp%2FwDf2sQJD89UI6TAk6v1FS3dt8rfwNDYH%2FB2T71JGRoHaNj%2BDdnV8BvgzkVbUyS3k1NijZySBvtckLm1STDF3seqRVepiyyMmfj6q5uDm1WArElcQ87FaMiR913zQgqwcvrHEFJBktzXS6rdRYuH2lbfz0wWBmLmmqjeLNZrCmfJBsih30AtMs8kiyWZ%2BUFuWMxAO6UYBycEYh9MDG6ZHhf%2F%2BWXL2KYGVuwgYBjOLpfb0LwGZoga6KHRwq%2F9Bllex%2BzAG4La7GOA7b%2BVPbHgD8wACcIouBCUJxJ%2B6KCnMsbLFp3Lol953Z1yA7JsZvQ%2FYWW5f4Jy9M52mY4JNrVfX8KFWpxiX%2B3OH9LmGMlqo9fl7g%2FG8muaxFiFKjC6ap4L6XVwIMRDgXbfTsknsI3trNJgZlJfGzXoCNMPySq70GOqUBhWJPT8cBDVbZvhbeWfpO%2B1ijykG6vx2TmACA1HfmrFirVAYbMu0hbr7awUHQ0fCgpo0yOTyDAkLEdZxwzTj0Hb93qO%2B1wj9onutP6VPF7aS4xT6wcyCL2YaLkSwwFjco61CtjcToe1i%2BQnK1Oy7Wb5P%2F0fCJhxmBUHz3xN82kQQPIZ2XkJGOtL9Ulh81JNhMMAN43wPfaXie2kmTVJTAl0iJtN7b&X-Amz-Signature=a7966a44dd1e9a0c5b1f14f3e0ab7704dd1749dd79b382225378b30789307267&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMOPVDX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FjsgJFcrKXsK3GtiypS%2Fm%2BctvmfJIP8y%2FIXXTLsTK8wIgHP33rD7E0HoFmlvpM%2BJ230ynT0FXvIDkFMpXsQxjKbMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE4XGAVY4Q6IAbpHyrcA364zNN73ClN7dLu1eOmd%2BN6cT3xB%2FTVVhzaDPhuPfeZ5ZXhU%2FnppTI%2BAXZi76BI%2BM%2Fo4OkNhqXQL5I6X0Ed3HgW4ERaFROw4ljsVDwH4FuVmgZoB0ZfBvBc7jE4Cg26I7t%2BDgWpIoviq8clNIFzElnSbz2KhFwbwS8NVVrEQu2trGE6224CBsNjr%2Fvso%2B%2B4FVixttP%2BnrRWiK4pz95y3vauwp%2FwDf2sQJD89UI6TAk6v1FS3dt8rfwNDYH%2FB2T71JGRoHaNj%2BDdnV8BvgzkVbUyS3k1NijZySBvtckLm1STDF3seqRVepiyyMmfj6q5uDm1WArElcQ87FaMiR913zQgqwcvrHEFJBktzXS6rdRYuH2lbfz0wWBmLmmqjeLNZrCmfJBsih30AtMs8kiyWZ%2BUFuWMxAO6UYBycEYh9MDG6ZHhf%2F%2BWXL2KYGVuwgYBjOLpfb0LwGZoga6KHRwq%2F9Bllex%2BzAG4La7GOA7b%2BVPbHgD8wACcIouBCUJxJ%2B6KCnMsbLFp3Lol953Z1yA7JsZvQ%2FYWW5f4Jy9M52mY4JNrVfX8KFWpxiX%2B3OH9LmGMlqo9fl7g%2FG8muaxFiFKjC6ap4L6XVwIMRDgXbfTsknsI3trNJgZlJfGzXoCNMPySq70GOqUBhWJPT8cBDVbZvhbeWfpO%2B1ijykG6vx2TmACA1HfmrFirVAYbMu0hbr7awUHQ0fCgpo0yOTyDAkLEdZxwzTj0Hb93qO%2B1wj9onutP6VPF7aS4xT6wcyCL2YaLkSwwFjco61CtjcToe1i%2BQnK1Oy7Wb5P%2F0fCJhxmBUHz3xN82kQQPIZ2XkJGOtL9Ulh81JNhMMAN43wPfaXie2kmTVJTAl0iJtN7b&X-Amz-Signature=715bb55ad876a666ac458b8408d6fe13beba6b0eb76146bd3356971971b926e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMOPVDX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FjsgJFcrKXsK3GtiypS%2Fm%2BctvmfJIP8y%2FIXXTLsTK8wIgHP33rD7E0HoFmlvpM%2BJ230ynT0FXvIDkFMpXsQxjKbMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE4XGAVY4Q6IAbpHyrcA364zNN73ClN7dLu1eOmd%2BN6cT3xB%2FTVVhzaDPhuPfeZ5ZXhU%2FnppTI%2BAXZi76BI%2BM%2Fo4OkNhqXQL5I6X0Ed3HgW4ERaFROw4ljsVDwH4FuVmgZoB0ZfBvBc7jE4Cg26I7t%2BDgWpIoviq8clNIFzElnSbz2KhFwbwS8NVVrEQu2trGE6224CBsNjr%2Fvso%2B%2B4FVixttP%2BnrRWiK4pz95y3vauwp%2FwDf2sQJD89UI6TAk6v1FS3dt8rfwNDYH%2FB2T71JGRoHaNj%2BDdnV8BvgzkVbUyS3k1NijZySBvtckLm1STDF3seqRVepiyyMmfj6q5uDm1WArElcQ87FaMiR913zQgqwcvrHEFJBktzXS6rdRYuH2lbfz0wWBmLmmqjeLNZrCmfJBsih30AtMs8kiyWZ%2BUFuWMxAO6UYBycEYh9MDG6ZHhf%2F%2BWXL2KYGVuwgYBjOLpfb0LwGZoga6KHRwq%2F9Bllex%2BzAG4La7GOA7b%2BVPbHgD8wACcIouBCUJxJ%2B6KCnMsbLFp3Lol953Z1yA7JsZvQ%2FYWW5f4Jy9M52mY4JNrVfX8KFWpxiX%2B3OH9LmGMlqo9fl7g%2FG8muaxFiFKjC6ap4L6XVwIMRDgXbfTsknsI3trNJgZlJfGzXoCNMPySq70GOqUBhWJPT8cBDVbZvhbeWfpO%2B1ijykG6vx2TmACA1HfmrFirVAYbMu0hbr7awUHQ0fCgpo0yOTyDAkLEdZxwzTj0Hb93qO%2B1wj9onutP6VPF7aS4xT6wcyCL2YaLkSwwFjco61CtjcToe1i%2BQnK1Oy7Wb5P%2F0fCJhxmBUHz3xN82kQQPIZ2XkJGOtL9Ulh81JNhMMAN43wPfaXie2kmTVJTAl0iJtN7b&X-Amz-Signature=2ac6b849191ab479e304bbc2219fdca320ed5e2a759532db4d0c19015bf3d80b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMOPVDX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FjsgJFcrKXsK3GtiypS%2Fm%2BctvmfJIP8y%2FIXXTLsTK8wIgHP33rD7E0HoFmlvpM%2BJ230ynT0FXvIDkFMpXsQxjKbMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE4XGAVY4Q6IAbpHyrcA364zNN73ClN7dLu1eOmd%2BN6cT3xB%2FTVVhzaDPhuPfeZ5ZXhU%2FnppTI%2BAXZi76BI%2BM%2Fo4OkNhqXQL5I6X0Ed3HgW4ERaFROw4ljsVDwH4FuVmgZoB0ZfBvBc7jE4Cg26I7t%2BDgWpIoviq8clNIFzElnSbz2KhFwbwS8NVVrEQu2trGE6224CBsNjr%2Fvso%2B%2B4FVixttP%2BnrRWiK4pz95y3vauwp%2FwDf2sQJD89UI6TAk6v1FS3dt8rfwNDYH%2FB2T71JGRoHaNj%2BDdnV8BvgzkVbUyS3k1NijZySBvtckLm1STDF3seqRVepiyyMmfj6q5uDm1WArElcQ87FaMiR913zQgqwcvrHEFJBktzXS6rdRYuH2lbfz0wWBmLmmqjeLNZrCmfJBsih30AtMs8kiyWZ%2BUFuWMxAO6UYBycEYh9MDG6ZHhf%2F%2BWXL2KYGVuwgYBjOLpfb0LwGZoga6KHRwq%2F9Bllex%2BzAG4La7GOA7b%2BVPbHgD8wACcIouBCUJxJ%2B6KCnMsbLFp3Lol953Z1yA7JsZvQ%2FYWW5f4Jy9M52mY4JNrVfX8KFWpxiX%2B3OH9LmGMlqo9fl7g%2FG8muaxFiFKjC6ap4L6XVwIMRDgXbfTsknsI3trNJgZlJfGzXoCNMPySq70GOqUBhWJPT8cBDVbZvhbeWfpO%2B1ijykG6vx2TmACA1HfmrFirVAYbMu0hbr7awUHQ0fCgpo0yOTyDAkLEdZxwzTj0Hb93qO%2B1wj9onutP6VPF7aS4xT6wcyCL2YaLkSwwFjco61CtjcToe1i%2BQnK1Oy7Wb5P%2F0fCJhxmBUHz3xN82kQQPIZ2XkJGOtL9Ulh81JNhMMAN43wPfaXie2kmTVJTAl0iJtN7b&X-Amz-Signature=2d306f9b26f385b43a177c88c32e783f4877a408d29c15a0d0ccceb95ee88f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMOPVDX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FjsgJFcrKXsK3GtiypS%2Fm%2BctvmfJIP8y%2FIXXTLsTK8wIgHP33rD7E0HoFmlvpM%2BJ230ynT0FXvIDkFMpXsQxjKbMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE4XGAVY4Q6IAbpHyrcA364zNN73ClN7dLu1eOmd%2BN6cT3xB%2FTVVhzaDPhuPfeZ5ZXhU%2FnppTI%2BAXZi76BI%2BM%2Fo4OkNhqXQL5I6X0Ed3HgW4ERaFROw4ljsVDwH4FuVmgZoB0ZfBvBc7jE4Cg26I7t%2BDgWpIoviq8clNIFzElnSbz2KhFwbwS8NVVrEQu2trGE6224CBsNjr%2Fvso%2B%2B4FVixttP%2BnrRWiK4pz95y3vauwp%2FwDf2sQJD89UI6TAk6v1FS3dt8rfwNDYH%2FB2T71JGRoHaNj%2BDdnV8BvgzkVbUyS3k1NijZySBvtckLm1STDF3seqRVepiyyMmfj6q5uDm1WArElcQ87FaMiR913zQgqwcvrHEFJBktzXS6rdRYuH2lbfz0wWBmLmmqjeLNZrCmfJBsih30AtMs8kiyWZ%2BUFuWMxAO6UYBycEYh9MDG6ZHhf%2F%2BWXL2KYGVuwgYBjOLpfb0LwGZoga6KHRwq%2F9Bllex%2BzAG4La7GOA7b%2BVPbHgD8wACcIouBCUJxJ%2B6KCnMsbLFp3Lol953Z1yA7JsZvQ%2FYWW5f4Jy9M52mY4JNrVfX8KFWpxiX%2B3OH9LmGMlqo9fl7g%2FG8muaxFiFKjC6ap4L6XVwIMRDgXbfTsknsI3trNJgZlJfGzXoCNMPySq70GOqUBhWJPT8cBDVbZvhbeWfpO%2B1ijykG6vx2TmACA1HfmrFirVAYbMu0hbr7awUHQ0fCgpo0yOTyDAkLEdZxwzTj0Hb93qO%2B1wj9onutP6VPF7aS4xT6wcyCL2YaLkSwwFjco61CtjcToe1i%2BQnK1Oy7Wb5P%2F0fCJhxmBUHz3xN82kQQPIZ2XkJGOtL9Ulh81JNhMMAN43wPfaXie2kmTVJTAl0iJtN7b&X-Amz-Signature=d07553bb25224e801334f4ea3476862f4af84a4d44f4cad575c8cb64e011eaa3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMOPVDX%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FjsgJFcrKXsK3GtiypS%2Fm%2BctvmfJIP8y%2FIXXTLsTK8wIgHP33rD7E0HoFmlvpM%2BJ230ynT0FXvIDkFMpXsQxjKbMqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFE4XGAVY4Q6IAbpHyrcA364zNN73ClN7dLu1eOmd%2BN6cT3xB%2FTVVhzaDPhuPfeZ5ZXhU%2FnppTI%2BAXZi76BI%2BM%2Fo4OkNhqXQL5I6X0Ed3HgW4ERaFROw4ljsVDwH4FuVmgZoB0ZfBvBc7jE4Cg26I7t%2BDgWpIoviq8clNIFzElnSbz2KhFwbwS8NVVrEQu2trGE6224CBsNjr%2Fvso%2B%2B4FVixttP%2BnrRWiK4pz95y3vauwp%2FwDf2sQJD89UI6TAk6v1FS3dt8rfwNDYH%2FB2T71JGRoHaNj%2BDdnV8BvgzkVbUyS3k1NijZySBvtckLm1STDF3seqRVepiyyMmfj6q5uDm1WArElcQ87FaMiR913zQgqwcvrHEFJBktzXS6rdRYuH2lbfz0wWBmLmmqjeLNZrCmfJBsih30AtMs8kiyWZ%2BUFuWMxAO6UYBycEYh9MDG6ZHhf%2F%2BWXL2KYGVuwgYBjOLpfb0LwGZoga6KHRwq%2F9Bllex%2BzAG4La7GOA7b%2BVPbHgD8wACcIouBCUJxJ%2B6KCnMsbLFp3Lol953Z1yA7JsZvQ%2FYWW5f4Jy9M52mY4JNrVfX8KFWpxiX%2B3OH9LmGMlqo9fl7g%2FG8muaxFiFKjC6ap4L6XVwIMRDgXbfTsknsI3trNJgZlJfGzXoCNMPySq70GOqUBhWJPT8cBDVbZvhbeWfpO%2B1ijykG6vx2TmACA1HfmrFirVAYbMu0hbr7awUHQ0fCgpo0yOTyDAkLEdZxwzTj0Hb93qO%2B1wj9onutP6VPF7aS4xT6wcyCL2YaLkSwwFjco61CtjcToe1i%2BQnK1Oy7Wb5P%2F0fCJhxmBUHz3xN82kQQPIZ2XkJGOtL9Ulh81JNhMMAN43wPfaXie2kmTVJTAl0iJtN7b&X-Amz-Signature=6ea243a668a6d063335af32f84a9b19cb772d3cbab715c6b6be6e2b2f54263cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
