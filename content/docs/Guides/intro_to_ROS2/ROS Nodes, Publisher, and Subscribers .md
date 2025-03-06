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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FG4FMH6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDddWg%2FD1XFBxbCp8CJlfF%2BX1k%2FFFYiI2D0tX7oEGaSwIgJ%2BxUaSAhzGn2VUE13Ga5IJoGIvTK9inZ%2BJqYnIeg%2By8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1iFOaBd5BVtYZptCrcAyZlPE7rZZjXwZQdJkQLHRV0D%2FMEmLe4GhU7OAiPxKWHzFDLQ9xK0Fg1kh8Cv4jvqVrkc%2BZUXttePVRXN1Gwsc%2B6FHfuuTohhF%2FIyzlpegAdJpVwfh4Fz8HwS%2B9nmv3ZgCm%2Bd7NMSouctH9XqL4NFRhqMnz9%2Bd1hgWvxh%2BPHKJS53NUtmnT8rYczPzMIqxnalxX3%2FRFFdDbNaIJbXMKMVdCCXLV2V7wnCwmTlQCKv2HxT12ADoRUfvQcW0yayfInurITYVGJOgiZ3kI5b7%2F2h%2F8v0Blf7APfc76FrNd63U7zaglzWjHOCl%2ByXByGtshmUMG2XPAAVsbT0bmx1RJgp8nYjN%2Ft5O4I6UicJxwQvcgKQZboyAklLQ0vbedP3okkMtVOlgEFbn7UNUkQBmhHE6LF%2F9OTbQHHegG0s5Ab%2Bbsz9UfFsXoOH%2BRO82WyK2Cbsae8BVXkgFpC%2BCmmul4BcvDOLBNrZjaN6YovfcxQwCCjjS2P3WPuZmJbl2kSoKCbINnf7wH8rKt7xR%2FZyz2ZWxFqb7qZ6kICz8Ad2os64FpsihRklvwrR1pIbZ27R%2FvRG33pUDpxSb8P4jOaf0Gd8GLqk8aRozHjAmt44m17%2F2%2Bh9pmxwn%2FV8MfMx5y%2BMO%2BQpr4GOqUBL27oTSb3gu2IuaSYL3IkDW%2Fgn%2BN87Dwp1y6N%2BL%2FcwskKYrntKageGWcOVxoFW3HOdML7nwyeH2x4akXDQGtEHKzLJtNM1zk5VBoAiPUi7czQAhxjOh31iYjsiQuWS091TxO%2ByMytHFyt%2FhHD2znPATl%2FbccDWgZmnrsZ7WRubNvA19V0g3M7DdCqa8ugwE5QZWov1%2BdaMDAcEZwPS5pfRSwP8LxI&X-Amz-Signature=82a254575f62cafa50d0b6aad5d1ed28e2313aadc2c8bc8d8e0c2408114b568b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FG4FMH6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDddWg%2FD1XFBxbCp8CJlfF%2BX1k%2FFFYiI2D0tX7oEGaSwIgJ%2BxUaSAhzGn2VUE13Ga5IJoGIvTK9inZ%2BJqYnIeg%2By8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1iFOaBd5BVtYZptCrcAyZlPE7rZZjXwZQdJkQLHRV0D%2FMEmLe4GhU7OAiPxKWHzFDLQ9xK0Fg1kh8Cv4jvqVrkc%2BZUXttePVRXN1Gwsc%2B6FHfuuTohhF%2FIyzlpegAdJpVwfh4Fz8HwS%2B9nmv3ZgCm%2Bd7NMSouctH9XqL4NFRhqMnz9%2Bd1hgWvxh%2BPHKJS53NUtmnT8rYczPzMIqxnalxX3%2FRFFdDbNaIJbXMKMVdCCXLV2V7wnCwmTlQCKv2HxT12ADoRUfvQcW0yayfInurITYVGJOgiZ3kI5b7%2F2h%2F8v0Blf7APfc76FrNd63U7zaglzWjHOCl%2ByXByGtshmUMG2XPAAVsbT0bmx1RJgp8nYjN%2Ft5O4I6UicJxwQvcgKQZboyAklLQ0vbedP3okkMtVOlgEFbn7UNUkQBmhHE6LF%2F9OTbQHHegG0s5Ab%2Bbsz9UfFsXoOH%2BRO82WyK2Cbsae8BVXkgFpC%2BCmmul4BcvDOLBNrZjaN6YovfcxQwCCjjS2P3WPuZmJbl2kSoKCbINnf7wH8rKt7xR%2FZyz2ZWxFqb7qZ6kICz8Ad2os64FpsihRklvwrR1pIbZ27R%2FvRG33pUDpxSb8P4jOaf0Gd8GLqk8aRozHjAmt44m17%2F2%2Bh9pmxwn%2FV8MfMx5y%2BMO%2BQpr4GOqUBL27oTSb3gu2IuaSYL3IkDW%2Fgn%2BN87Dwp1y6N%2BL%2FcwskKYrntKageGWcOVxoFW3HOdML7nwyeH2x4akXDQGtEHKzLJtNM1zk5VBoAiPUi7czQAhxjOh31iYjsiQuWS091TxO%2ByMytHFyt%2FhHD2znPATl%2FbccDWgZmnrsZ7WRubNvA19V0g3M7DdCqa8ugwE5QZWov1%2BdaMDAcEZwPS5pfRSwP8LxI&X-Amz-Signature=9a924b0ff39aa8200ddb85b2ae5957ce6051048964093cc7a2a5c016705d8333&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FG4FMH6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDddWg%2FD1XFBxbCp8CJlfF%2BX1k%2FFFYiI2D0tX7oEGaSwIgJ%2BxUaSAhzGn2VUE13Ga5IJoGIvTK9inZ%2BJqYnIeg%2By8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1iFOaBd5BVtYZptCrcAyZlPE7rZZjXwZQdJkQLHRV0D%2FMEmLe4GhU7OAiPxKWHzFDLQ9xK0Fg1kh8Cv4jvqVrkc%2BZUXttePVRXN1Gwsc%2B6FHfuuTohhF%2FIyzlpegAdJpVwfh4Fz8HwS%2B9nmv3ZgCm%2Bd7NMSouctH9XqL4NFRhqMnz9%2Bd1hgWvxh%2BPHKJS53NUtmnT8rYczPzMIqxnalxX3%2FRFFdDbNaIJbXMKMVdCCXLV2V7wnCwmTlQCKv2HxT12ADoRUfvQcW0yayfInurITYVGJOgiZ3kI5b7%2F2h%2F8v0Blf7APfc76FrNd63U7zaglzWjHOCl%2ByXByGtshmUMG2XPAAVsbT0bmx1RJgp8nYjN%2Ft5O4I6UicJxwQvcgKQZboyAklLQ0vbedP3okkMtVOlgEFbn7UNUkQBmhHE6LF%2F9OTbQHHegG0s5Ab%2Bbsz9UfFsXoOH%2BRO82WyK2Cbsae8BVXkgFpC%2BCmmul4BcvDOLBNrZjaN6YovfcxQwCCjjS2P3WPuZmJbl2kSoKCbINnf7wH8rKt7xR%2FZyz2ZWxFqb7qZ6kICz8Ad2os64FpsihRklvwrR1pIbZ27R%2FvRG33pUDpxSb8P4jOaf0Gd8GLqk8aRozHjAmt44m17%2F2%2Bh9pmxwn%2FV8MfMx5y%2BMO%2BQpr4GOqUBL27oTSb3gu2IuaSYL3IkDW%2Fgn%2BN87Dwp1y6N%2BL%2FcwskKYrntKageGWcOVxoFW3HOdML7nwyeH2x4akXDQGtEHKzLJtNM1zk5VBoAiPUi7czQAhxjOh31iYjsiQuWS091TxO%2ByMytHFyt%2FhHD2znPATl%2FbccDWgZmnrsZ7WRubNvA19V0g3M7DdCqa8ugwE5QZWov1%2BdaMDAcEZwPS5pfRSwP8LxI&X-Amz-Signature=f8cb76a7b567ac9c373f73b33f381dbc930c017ba20d6ea7a48151e827a36e4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FG4FMH6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDddWg%2FD1XFBxbCp8CJlfF%2BX1k%2FFFYiI2D0tX7oEGaSwIgJ%2BxUaSAhzGn2VUE13Ga5IJoGIvTK9inZ%2BJqYnIeg%2By8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1iFOaBd5BVtYZptCrcAyZlPE7rZZjXwZQdJkQLHRV0D%2FMEmLe4GhU7OAiPxKWHzFDLQ9xK0Fg1kh8Cv4jvqVrkc%2BZUXttePVRXN1Gwsc%2B6FHfuuTohhF%2FIyzlpegAdJpVwfh4Fz8HwS%2B9nmv3ZgCm%2Bd7NMSouctH9XqL4NFRhqMnz9%2Bd1hgWvxh%2BPHKJS53NUtmnT8rYczPzMIqxnalxX3%2FRFFdDbNaIJbXMKMVdCCXLV2V7wnCwmTlQCKv2HxT12ADoRUfvQcW0yayfInurITYVGJOgiZ3kI5b7%2F2h%2F8v0Blf7APfc76FrNd63U7zaglzWjHOCl%2ByXByGtshmUMG2XPAAVsbT0bmx1RJgp8nYjN%2Ft5O4I6UicJxwQvcgKQZboyAklLQ0vbedP3okkMtVOlgEFbn7UNUkQBmhHE6LF%2F9OTbQHHegG0s5Ab%2Bbsz9UfFsXoOH%2BRO82WyK2Cbsae8BVXkgFpC%2BCmmul4BcvDOLBNrZjaN6YovfcxQwCCjjS2P3WPuZmJbl2kSoKCbINnf7wH8rKt7xR%2FZyz2ZWxFqb7qZ6kICz8Ad2os64FpsihRklvwrR1pIbZ27R%2FvRG33pUDpxSb8P4jOaf0Gd8GLqk8aRozHjAmt44m17%2F2%2Bh9pmxwn%2FV8MfMx5y%2BMO%2BQpr4GOqUBL27oTSb3gu2IuaSYL3IkDW%2Fgn%2BN87Dwp1y6N%2BL%2FcwskKYrntKageGWcOVxoFW3HOdML7nwyeH2x4akXDQGtEHKzLJtNM1zk5VBoAiPUi7czQAhxjOh31iYjsiQuWS091TxO%2ByMytHFyt%2FhHD2znPATl%2FbccDWgZmnrsZ7WRubNvA19V0g3M7DdCqa8ugwE5QZWov1%2BdaMDAcEZwPS5pfRSwP8LxI&X-Amz-Signature=c72ec8d77ef4eb5312fa58d23b23e3fd443bead28b8f335ca354ebc55a129003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FG4FMH6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDddWg%2FD1XFBxbCp8CJlfF%2BX1k%2FFFYiI2D0tX7oEGaSwIgJ%2BxUaSAhzGn2VUE13Ga5IJoGIvTK9inZ%2BJqYnIeg%2By8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1iFOaBd5BVtYZptCrcAyZlPE7rZZjXwZQdJkQLHRV0D%2FMEmLe4GhU7OAiPxKWHzFDLQ9xK0Fg1kh8Cv4jvqVrkc%2BZUXttePVRXN1Gwsc%2B6FHfuuTohhF%2FIyzlpegAdJpVwfh4Fz8HwS%2B9nmv3ZgCm%2Bd7NMSouctH9XqL4NFRhqMnz9%2Bd1hgWvxh%2BPHKJS53NUtmnT8rYczPzMIqxnalxX3%2FRFFdDbNaIJbXMKMVdCCXLV2V7wnCwmTlQCKv2HxT12ADoRUfvQcW0yayfInurITYVGJOgiZ3kI5b7%2F2h%2F8v0Blf7APfc76FrNd63U7zaglzWjHOCl%2ByXByGtshmUMG2XPAAVsbT0bmx1RJgp8nYjN%2Ft5O4I6UicJxwQvcgKQZboyAklLQ0vbedP3okkMtVOlgEFbn7UNUkQBmhHE6LF%2F9OTbQHHegG0s5Ab%2Bbsz9UfFsXoOH%2BRO82WyK2Cbsae8BVXkgFpC%2BCmmul4BcvDOLBNrZjaN6YovfcxQwCCjjS2P3WPuZmJbl2kSoKCbINnf7wH8rKt7xR%2FZyz2ZWxFqb7qZ6kICz8Ad2os64FpsihRklvwrR1pIbZ27R%2FvRG33pUDpxSb8P4jOaf0Gd8GLqk8aRozHjAmt44m17%2F2%2Bh9pmxwn%2FV8MfMx5y%2BMO%2BQpr4GOqUBL27oTSb3gu2IuaSYL3IkDW%2Fgn%2BN87Dwp1y6N%2BL%2FcwskKYrntKageGWcOVxoFW3HOdML7nwyeH2x4akXDQGtEHKzLJtNM1zk5VBoAiPUi7czQAhxjOh31iYjsiQuWS091TxO%2ByMytHFyt%2FhHD2znPATl%2FbccDWgZmnrsZ7WRubNvA19V0g3M7DdCqa8ugwE5QZWov1%2BdaMDAcEZwPS5pfRSwP8LxI&X-Amz-Signature=f219e888a4e139abd53407f843979955bbcd0912b7808efabf9571584aecee0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FG4FMH6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDddWg%2FD1XFBxbCp8CJlfF%2BX1k%2FFFYiI2D0tX7oEGaSwIgJ%2BxUaSAhzGn2VUE13Ga5IJoGIvTK9inZ%2BJqYnIeg%2By8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1iFOaBd5BVtYZptCrcAyZlPE7rZZjXwZQdJkQLHRV0D%2FMEmLe4GhU7OAiPxKWHzFDLQ9xK0Fg1kh8Cv4jvqVrkc%2BZUXttePVRXN1Gwsc%2B6FHfuuTohhF%2FIyzlpegAdJpVwfh4Fz8HwS%2B9nmv3ZgCm%2Bd7NMSouctH9XqL4NFRhqMnz9%2Bd1hgWvxh%2BPHKJS53NUtmnT8rYczPzMIqxnalxX3%2FRFFdDbNaIJbXMKMVdCCXLV2V7wnCwmTlQCKv2HxT12ADoRUfvQcW0yayfInurITYVGJOgiZ3kI5b7%2F2h%2F8v0Blf7APfc76FrNd63U7zaglzWjHOCl%2ByXByGtshmUMG2XPAAVsbT0bmx1RJgp8nYjN%2Ft5O4I6UicJxwQvcgKQZboyAklLQ0vbedP3okkMtVOlgEFbn7UNUkQBmhHE6LF%2F9OTbQHHegG0s5Ab%2Bbsz9UfFsXoOH%2BRO82WyK2Cbsae8BVXkgFpC%2BCmmul4BcvDOLBNrZjaN6YovfcxQwCCjjS2P3WPuZmJbl2kSoKCbINnf7wH8rKt7xR%2FZyz2ZWxFqb7qZ6kICz8Ad2os64FpsihRklvwrR1pIbZ27R%2FvRG33pUDpxSb8P4jOaf0Gd8GLqk8aRozHjAmt44m17%2F2%2Bh9pmxwn%2FV8MfMx5y%2BMO%2BQpr4GOqUBL27oTSb3gu2IuaSYL3IkDW%2Fgn%2BN87Dwp1y6N%2BL%2FcwskKYrntKageGWcOVxoFW3HOdML7nwyeH2x4akXDQGtEHKzLJtNM1zk5VBoAiPUi7czQAhxjOh31iYjsiQuWS091TxO%2ByMytHFyt%2FhHD2znPATl%2FbccDWgZmnrsZ7WRubNvA19V0g3M7DdCqa8ugwE5QZWov1%2BdaMDAcEZwPS5pfRSwP8LxI&X-Amz-Signature=21ffdea563d31c484b2c743090e18712f91a41e9232c1e49a6c0201881a1b542&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FG4FMH6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDddWg%2FD1XFBxbCp8CJlfF%2BX1k%2FFFYiI2D0tX7oEGaSwIgJ%2BxUaSAhzGn2VUE13Ga5IJoGIvTK9inZ%2BJqYnIeg%2By8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1iFOaBd5BVtYZptCrcAyZlPE7rZZjXwZQdJkQLHRV0D%2FMEmLe4GhU7OAiPxKWHzFDLQ9xK0Fg1kh8Cv4jvqVrkc%2BZUXttePVRXN1Gwsc%2B6FHfuuTohhF%2FIyzlpegAdJpVwfh4Fz8HwS%2B9nmv3ZgCm%2Bd7NMSouctH9XqL4NFRhqMnz9%2Bd1hgWvxh%2BPHKJS53NUtmnT8rYczPzMIqxnalxX3%2FRFFdDbNaIJbXMKMVdCCXLV2V7wnCwmTlQCKv2HxT12ADoRUfvQcW0yayfInurITYVGJOgiZ3kI5b7%2F2h%2F8v0Blf7APfc76FrNd63U7zaglzWjHOCl%2ByXByGtshmUMG2XPAAVsbT0bmx1RJgp8nYjN%2Ft5O4I6UicJxwQvcgKQZboyAklLQ0vbedP3okkMtVOlgEFbn7UNUkQBmhHE6LF%2F9OTbQHHegG0s5Ab%2Bbsz9UfFsXoOH%2BRO82WyK2Cbsae8BVXkgFpC%2BCmmul4BcvDOLBNrZjaN6YovfcxQwCCjjS2P3WPuZmJbl2kSoKCbINnf7wH8rKt7xR%2FZyz2ZWxFqb7qZ6kICz8Ad2os64FpsihRklvwrR1pIbZ27R%2FvRG33pUDpxSb8P4jOaf0Gd8GLqk8aRozHjAmt44m17%2F2%2Bh9pmxwn%2FV8MfMx5y%2BMO%2BQpr4GOqUBL27oTSb3gu2IuaSYL3IkDW%2Fgn%2BN87Dwp1y6N%2BL%2FcwskKYrntKageGWcOVxoFW3HOdML7nwyeH2x4akXDQGtEHKzLJtNM1zk5VBoAiPUi7czQAhxjOh31iYjsiQuWS091TxO%2ByMytHFyt%2FhHD2znPATl%2FbccDWgZmnrsZ7WRubNvA19V0g3M7DdCqa8ugwE5QZWov1%2BdaMDAcEZwPS5pfRSwP8LxI&X-Amz-Signature=34af1e29827312d4ce36306ed4915a2467ce25f97bb8267059c34fb04d0db59b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FG4FMH6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDddWg%2FD1XFBxbCp8CJlfF%2BX1k%2FFFYiI2D0tX7oEGaSwIgJ%2BxUaSAhzGn2VUE13Ga5IJoGIvTK9inZ%2BJqYnIeg%2By8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDD1iFOaBd5BVtYZptCrcAyZlPE7rZZjXwZQdJkQLHRV0D%2FMEmLe4GhU7OAiPxKWHzFDLQ9xK0Fg1kh8Cv4jvqVrkc%2BZUXttePVRXN1Gwsc%2B6FHfuuTohhF%2FIyzlpegAdJpVwfh4Fz8HwS%2B9nmv3ZgCm%2Bd7NMSouctH9XqL4NFRhqMnz9%2Bd1hgWvxh%2BPHKJS53NUtmnT8rYczPzMIqxnalxX3%2FRFFdDbNaIJbXMKMVdCCXLV2V7wnCwmTlQCKv2HxT12ADoRUfvQcW0yayfInurITYVGJOgiZ3kI5b7%2F2h%2F8v0Blf7APfc76FrNd63U7zaglzWjHOCl%2ByXByGtshmUMG2XPAAVsbT0bmx1RJgp8nYjN%2Ft5O4I6UicJxwQvcgKQZboyAklLQ0vbedP3okkMtVOlgEFbn7UNUkQBmhHE6LF%2F9OTbQHHegG0s5Ab%2Bbsz9UfFsXoOH%2BRO82WyK2Cbsae8BVXkgFpC%2BCmmul4BcvDOLBNrZjaN6YovfcxQwCCjjS2P3WPuZmJbl2kSoKCbINnf7wH8rKt7xR%2FZyz2ZWxFqb7qZ6kICz8Ad2os64FpsihRklvwrR1pIbZ27R%2FvRG33pUDpxSb8P4jOaf0Gd8GLqk8aRozHjAmt44m17%2F2%2Bh9pmxwn%2FV8MfMx5y%2BMO%2BQpr4GOqUBL27oTSb3gu2IuaSYL3IkDW%2Fgn%2BN87Dwp1y6N%2BL%2FcwskKYrntKageGWcOVxoFW3HOdML7nwyeH2x4akXDQGtEHKzLJtNM1zk5VBoAiPUi7czQAhxjOh31iYjsiQuWS091TxO%2ByMytHFyt%2FhHD2znPATl%2FbccDWgZmnrsZ7WRubNvA19V0g3M7DdCqa8ugwE5QZWov1%2BdaMDAcEZwPS5pfRSwP8LxI&X-Amz-Signature=66893bfea3dbdf05a3518e097d4c46f82ab85186d1f3247cb62a82c2029278c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
