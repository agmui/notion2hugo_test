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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKPNDN2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8%2BsgtUpx5Xi3BgjemOxL71yuL7OPZSiY7knDuPvqokAiEA8ox7hAkYB%2BMAWi5X5tn73W0IWs973%2F%2BGHvKobZMb6lEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVatf7AKaxQqGKqdircAwcwCwsgF%2FPcPovbVwA3EYWlqtA4c1fchuHA4soHSh9TtKz%2B7%2FljUUNVF766XlwFETXzqr1idx8QmzJxkxIRR0LjZE%2BtWrpx5oraJO14BXerU09SZyypat8nh6cIRHWGexc55OhUppdhF3eh2Zn5TJ%2F0ndhAJ0hRj6%2BpJ2tnHTbNFPbLeyDkF50t4NVf65cStIEU7DxrD9T49z2tR0gfhl5WYD%2BzwV3rlk%2FRi301xhvrHJ%2Fr7NZASutvQth%2FYiNZ3CT3LF9C7uFxtZeYqEKaQ0wIssYdcA73x09JKP1%2Fj5GqVMW0jlrSJWsJ6WDC1p102eMFY4I3FIXB9HTtmEdalyG%2FMPKoh%2B%2FHEqeqUgcJlFVNCfbJh2OdUeoSILZJqcQQniv%2FekogY9q5j29FEmlr54BLfAOeOfZNRMfGRMtj%2ByXnWyr7G5Qn8SR3QdNqk7DTNZ6BCXjvzFXchFsEM1qYHi4ijDV2O3f%2BKkSBCtppHY2jPpBXLrRIu%2F3Z4YZsXdBM%2BS9B3XW%2FTHWghc6pytt6mDs0tqajYhBYHz2we4gPMGJCvmYr0liX6%2BykUUJcHBhV8RHfW9K2EQDs2bizDLL6yRNF5%2BP6VDQIqGM1RBM%2BeJFMmLnsOfyHitviAFKOMNOuzr4GOqUBGSG1PmtBM4JB%2Bf0FXRXvZWZFsPLxqS7zMiVWOV300B6zyIOClOv641W%2FCXemEVUUyxI9KNMZAjTfHtI9BDZ9sUPr8k3gXThLaglrYTweoeQE8kXbzxnwFm%2FkBV7XR5Hv1%2BQeqb1AM02WjjYDlcMe8Q3qZcV8PEFNTGxo7cDUt5Dqpm3pZQPIxCJuCVBnOJo92MSjWtXkiOAXBsWjW%2Bghj2mIHesj&X-Amz-Signature=ba61a4dd12d568946757e6da0228ce6953baddc57c2400f633529e07d8c2471a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKPNDN2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8%2BsgtUpx5Xi3BgjemOxL71yuL7OPZSiY7knDuPvqokAiEA8ox7hAkYB%2BMAWi5X5tn73W0IWs973%2F%2BGHvKobZMb6lEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVatf7AKaxQqGKqdircAwcwCwsgF%2FPcPovbVwA3EYWlqtA4c1fchuHA4soHSh9TtKz%2B7%2FljUUNVF766XlwFETXzqr1idx8QmzJxkxIRR0LjZE%2BtWrpx5oraJO14BXerU09SZyypat8nh6cIRHWGexc55OhUppdhF3eh2Zn5TJ%2F0ndhAJ0hRj6%2BpJ2tnHTbNFPbLeyDkF50t4NVf65cStIEU7DxrD9T49z2tR0gfhl5WYD%2BzwV3rlk%2FRi301xhvrHJ%2Fr7NZASutvQth%2FYiNZ3CT3LF9C7uFxtZeYqEKaQ0wIssYdcA73x09JKP1%2Fj5GqVMW0jlrSJWsJ6WDC1p102eMFY4I3FIXB9HTtmEdalyG%2FMPKoh%2B%2FHEqeqUgcJlFVNCfbJh2OdUeoSILZJqcQQniv%2FekogY9q5j29FEmlr54BLfAOeOfZNRMfGRMtj%2ByXnWyr7G5Qn8SR3QdNqk7DTNZ6BCXjvzFXchFsEM1qYHi4ijDV2O3f%2BKkSBCtppHY2jPpBXLrRIu%2F3Z4YZsXdBM%2BS9B3XW%2FTHWghc6pytt6mDs0tqajYhBYHz2we4gPMGJCvmYr0liX6%2BykUUJcHBhV8RHfW9K2EQDs2bizDLL6yRNF5%2BP6VDQIqGM1RBM%2BeJFMmLnsOfyHitviAFKOMNOuzr4GOqUBGSG1PmtBM4JB%2Bf0FXRXvZWZFsPLxqS7zMiVWOV300B6zyIOClOv641W%2FCXemEVUUyxI9KNMZAjTfHtI9BDZ9sUPr8k3gXThLaglrYTweoeQE8kXbzxnwFm%2FkBV7XR5Hv1%2BQeqb1AM02WjjYDlcMe8Q3qZcV8PEFNTGxo7cDUt5Dqpm3pZQPIxCJuCVBnOJo92MSjWtXkiOAXBsWjW%2Bghj2mIHesj&X-Amz-Signature=5ec29805793f0279f09e2a1b6637fa0607f6d60a8850cd02351c9cf63fe12a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKPNDN2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8%2BsgtUpx5Xi3BgjemOxL71yuL7OPZSiY7knDuPvqokAiEA8ox7hAkYB%2BMAWi5X5tn73W0IWs973%2F%2BGHvKobZMb6lEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVatf7AKaxQqGKqdircAwcwCwsgF%2FPcPovbVwA3EYWlqtA4c1fchuHA4soHSh9TtKz%2B7%2FljUUNVF766XlwFETXzqr1idx8QmzJxkxIRR0LjZE%2BtWrpx5oraJO14BXerU09SZyypat8nh6cIRHWGexc55OhUppdhF3eh2Zn5TJ%2F0ndhAJ0hRj6%2BpJ2tnHTbNFPbLeyDkF50t4NVf65cStIEU7DxrD9T49z2tR0gfhl5WYD%2BzwV3rlk%2FRi301xhvrHJ%2Fr7NZASutvQth%2FYiNZ3CT3LF9C7uFxtZeYqEKaQ0wIssYdcA73x09JKP1%2Fj5GqVMW0jlrSJWsJ6WDC1p102eMFY4I3FIXB9HTtmEdalyG%2FMPKoh%2B%2FHEqeqUgcJlFVNCfbJh2OdUeoSILZJqcQQniv%2FekogY9q5j29FEmlr54BLfAOeOfZNRMfGRMtj%2ByXnWyr7G5Qn8SR3QdNqk7DTNZ6BCXjvzFXchFsEM1qYHi4ijDV2O3f%2BKkSBCtppHY2jPpBXLrRIu%2F3Z4YZsXdBM%2BS9B3XW%2FTHWghc6pytt6mDs0tqajYhBYHz2we4gPMGJCvmYr0liX6%2BykUUJcHBhV8RHfW9K2EQDs2bizDLL6yRNF5%2BP6VDQIqGM1RBM%2BeJFMmLnsOfyHitviAFKOMNOuzr4GOqUBGSG1PmtBM4JB%2Bf0FXRXvZWZFsPLxqS7zMiVWOV300B6zyIOClOv641W%2FCXemEVUUyxI9KNMZAjTfHtI9BDZ9sUPr8k3gXThLaglrYTweoeQE8kXbzxnwFm%2FkBV7XR5Hv1%2BQeqb1AM02WjjYDlcMe8Q3qZcV8PEFNTGxo7cDUt5Dqpm3pZQPIxCJuCVBnOJo92MSjWtXkiOAXBsWjW%2Bghj2mIHesj&X-Amz-Signature=a2525f5cd5ce0dbd2f568f7ee19710edf8a9c44e80b9f6c35c3d3f17c3b4deb6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKPNDN2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8%2BsgtUpx5Xi3BgjemOxL71yuL7OPZSiY7knDuPvqokAiEA8ox7hAkYB%2BMAWi5X5tn73W0IWs973%2F%2BGHvKobZMb6lEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVatf7AKaxQqGKqdircAwcwCwsgF%2FPcPovbVwA3EYWlqtA4c1fchuHA4soHSh9TtKz%2B7%2FljUUNVF766XlwFETXzqr1idx8QmzJxkxIRR0LjZE%2BtWrpx5oraJO14BXerU09SZyypat8nh6cIRHWGexc55OhUppdhF3eh2Zn5TJ%2F0ndhAJ0hRj6%2BpJ2tnHTbNFPbLeyDkF50t4NVf65cStIEU7DxrD9T49z2tR0gfhl5WYD%2BzwV3rlk%2FRi301xhvrHJ%2Fr7NZASutvQth%2FYiNZ3CT3LF9C7uFxtZeYqEKaQ0wIssYdcA73x09JKP1%2Fj5GqVMW0jlrSJWsJ6WDC1p102eMFY4I3FIXB9HTtmEdalyG%2FMPKoh%2B%2FHEqeqUgcJlFVNCfbJh2OdUeoSILZJqcQQniv%2FekogY9q5j29FEmlr54BLfAOeOfZNRMfGRMtj%2ByXnWyr7G5Qn8SR3QdNqk7DTNZ6BCXjvzFXchFsEM1qYHi4ijDV2O3f%2BKkSBCtppHY2jPpBXLrRIu%2F3Z4YZsXdBM%2BS9B3XW%2FTHWghc6pytt6mDs0tqajYhBYHz2we4gPMGJCvmYr0liX6%2BykUUJcHBhV8RHfW9K2EQDs2bizDLL6yRNF5%2BP6VDQIqGM1RBM%2BeJFMmLnsOfyHitviAFKOMNOuzr4GOqUBGSG1PmtBM4JB%2Bf0FXRXvZWZFsPLxqS7zMiVWOV300B6zyIOClOv641W%2FCXemEVUUyxI9KNMZAjTfHtI9BDZ9sUPr8k3gXThLaglrYTweoeQE8kXbzxnwFm%2FkBV7XR5Hv1%2BQeqb1AM02WjjYDlcMe8Q3qZcV8PEFNTGxo7cDUt5Dqpm3pZQPIxCJuCVBnOJo92MSjWtXkiOAXBsWjW%2Bghj2mIHesj&X-Amz-Signature=1fa0e6dca6723207254821084f77a7b9cf9083cb67d4b6f6ac1fb856a4dac474&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKPNDN2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8%2BsgtUpx5Xi3BgjemOxL71yuL7OPZSiY7knDuPvqokAiEA8ox7hAkYB%2BMAWi5X5tn73W0IWs973%2F%2BGHvKobZMb6lEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVatf7AKaxQqGKqdircAwcwCwsgF%2FPcPovbVwA3EYWlqtA4c1fchuHA4soHSh9TtKz%2B7%2FljUUNVF766XlwFETXzqr1idx8QmzJxkxIRR0LjZE%2BtWrpx5oraJO14BXerU09SZyypat8nh6cIRHWGexc55OhUppdhF3eh2Zn5TJ%2F0ndhAJ0hRj6%2BpJ2tnHTbNFPbLeyDkF50t4NVf65cStIEU7DxrD9T49z2tR0gfhl5WYD%2BzwV3rlk%2FRi301xhvrHJ%2Fr7NZASutvQth%2FYiNZ3CT3LF9C7uFxtZeYqEKaQ0wIssYdcA73x09JKP1%2Fj5GqVMW0jlrSJWsJ6WDC1p102eMFY4I3FIXB9HTtmEdalyG%2FMPKoh%2B%2FHEqeqUgcJlFVNCfbJh2OdUeoSILZJqcQQniv%2FekogY9q5j29FEmlr54BLfAOeOfZNRMfGRMtj%2ByXnWyr7G5Qn8SR3QdNqk7DTNZ6BCXjvzFXchFsEM1qYHi4ijDV2O3f%2BKkSBCtppHY2jPpBXLrRIu%2F3Z4YZsXdBM%2BS9B3XW%2FTHWghc6pytt6mDs0tqajYhBYHz2we4gPMGJCvmYr0liX6%2BykUUJcHBhV8RHfW9K2EQDs2bizDLL6yRNF5%2BP6VDQIqGM1RBM%2BeJFMmLnsOfyHitviAFKOMNOuzr4GOqUBGSG1PmtBM4JB%2Bf0FXRXvZWZFsPLxqS7zMiVWOV300B6zyIOClOv641W%2FCXemEVUUyxI9KNMZAjTfHtI9BDZ9sUPr8k3gXThLaglrYTweoeQE8kXbzxnwFm%2FkBV7XR5Hv1%2BQeqb1AM02WjjYDlcMe8Q3qZcV8PEFNTGxo7cDUt5Dqpm3pZQPIxCJuCVBnOJo92MSjWtXkiOAXBsWjW%2Bghj2mIHesj&X-Amz-Signature=60d76d3f7be90725af8278cf023aa517a02432054dee8b965b28c7836c140074&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKPNDN2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8%2BsgtUpx5Xi3BgjemOxL71yuL7OPZSiY7knDuPvqokAiEA8ox7hAkYB%2BMAWi5X5tn73W0IWs973%2F%2BGHvKobZMb6lEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVatf7AKaxQqGKqdircAwcwCwsgF%2FPcPovbVwA3EYWlqtA4c1fchuHA4soHSh9TtKz%2B7%2FljUUNVF766XlwFETXzqr1idx8QmzJxkxIRR0LjZE%2BtWrpx5oraJO14BXerU09SZyypat8nh6cIRHWGexc55OhUppdhF3eh2Zn5TJ%2F0ndhAJ0hRj6%2BpJ2tnHTbNFPbLeyDkF50t4NVf65cStIEU7DxrD9T49z2tR0gfhl5WYD%2BzwV3rlk%2FRi301xhvrHJ%2Fr7NZASutvQth%2FYiNZ3CT3LF9C7uFxtZeYqEKaQ0wIssYdcA73x09JKP1%2Fj5GqVMW0jlrSJWsJ6WDC1p102eMFY4I3FIXB9HTtmEdalyG%2FMPKoh%2B%2FHEqeqUgcJlFVNCfbJh2OdUeoSILZJqcQQniv%2FekogY9q5j29FEmlr54BLfAOeOfZNRMfGRMtj%2ByXnWyr7G5Qn8SR3QdNqk7DTNZ6BCXjvzFXchFsEM1qYHi4ijDV2O3f%2BKkSBCtppHY2jPpBXLrRIu%2F3Z4YZsXdBM%2BS9B3XW%2FTHWghc6pytt6mDs0tqajYhBYHz2we4gPMGJCvmYr0liX6%2BykUUJcHBhV8RHfW9K2EQDs2bizDLL6yRNF5%2BP6VDQIqGM1RBM%2BeJFMmLnsOfyHitviAFKOMNOuzr4GOqUBGSG1PmtBM4JB%2Bf0FXRXvZWZFsPLxqS7zMiVWOV300B6zyIOClOv641W%2FCXemEVUUyxI9KNMZAjTfHtI9BDZ9sUPr8k3gXThLaglrYTweoeQE8kXbzxnwFm%2FkBV7XR5Hv1%2BQeqb1AM02WjjYDlcMe8Q3qZcV8PEFNTGxo7cDUt5Dqpm3pZQPIxCJuCVBnOJo92MSjWtXkiOAXBsWjW%2Bghj2mIHesj&X-Amz-Signature=dbf39dd1e1858749bd635eb433e0c8d07902f400db95ce06a51025c41e8ecd72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKPNDN2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8%2BsgtUpx5Xi3BgjemOxL71yuL7OPZSiY7knDuPvqokAiEA8ox7hAkYB%2BMAWi5X5tn73W0IWs973%2F%2BGHvKobZMb6lEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVatf7AKaxQqGKqdircAwcwCwsgF%2FPcPovbVwA3EYWlqtA4c1fchuHA4soHSh9TtKz%2B7%2FljUUNVF766XlwFETXzqr1idx8QmzJxkxIRR0LjZE%2BtWrpx5oraJO14BXerU09SZyypat8nh6cIRHWGexc55OhUppdhF3eh2Zn5TJ%2F0ndhAJ0hRj6%2BpJ2tnHTbNFPbLeyDkF50t4NVf65cStIEU7DxrD9T49z2tR0gfhl5WYD%2BzwV3rlk%2FRi301xhvrHJ%2Fr7NZASutvQth%2FYiNZ3CT3LF9C7uFxtZeYqEKaQ0wIssYdcA73x09JKP1%2Fj5GqVMW0jlrSJWsJ6WDC1p102eMFY4I3FIXB9HTtmEdalyG%2FMPKoh%2B%2FHEqeqUgcJlFVNCfbJh2OdUeoSILZJqcQQniv%2FekogY9q5j29FEmlr54BLfAOeOfZNRMfGRMtj%2ByXnWyr7G5Qn8SR3QdNqk7DTNZ6BCXjvzFXchFsEM1qYHi4ijDV2O3f%2BKkSBCtppHY2jPpBXLrRIu%2F3Z4YZsXdBM%2BS9B3XW%2FTHWghc6pytt6mDs0tqajYhBYHz2we4gPMGJCvmYr0liX6%2BykUUJcHBhV8RHfW9K2EQDs2bizDLL6yRNF5%2BP6VDQIqGM1RBM%2BeJFMmLnsOfyHitviAFKOMNOuzr4GOqUBGSG1PmtBM4JB%2Bf0FXRXvZWZFsPLxqS7zMiVWOV300B6zyIOClOv641W%2FCXemEVUUyxI9KNMZAjTfHtI9BDZ9sUPr8k3gXThLaglrYTweoeQE8kXbzxnwFm%2FkBV7XR5Hv1%2BQeqb1AM02WjjYDlcMe8Q3qZcV8PEFNTGxo7cDUt5Dqpm3pZQPIxCJuCVBnOJo92MSjWtXkiOAXBsWjW%2Bghj2mIHesj&X-Amz-Signature=0f38f9f1b95f07221263264e3abd3abac01fc27dd343a62bfb8e2a3bc6c6129c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTKPNDN2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8%2BsgtUpx5Xi3BgjemOxL71yuL7OPZSiY7knDuPvqokAiEA8ox7hAkYB%2BMAWi5X5tn73W0IWs973%2F%2BGHvKobZMb6lEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVatf7AKaxQqGKqdircAwcwCwsgF%2FPcPovbVwA3EYWlqtA4c1fchuHA4soHSh9TtKz%2B7%2FljUUNVF766XlwFETXzqr1idx8QmzJxkxIRR0LjZE%2BtWrpx5oraJO14BXerU09SZyypat8nh6cIRHWGexc55OhUppdhF3eh2Zn5TJ%2F0ndhAJ0hRj6%2BpJ2tnHTbNFPbLeyDkF50t4NVf65cStIEU7DxrD9T49z2tR0gfhl5WYD%2BzwV3rlk%2FRi301xhvrHJ%2Fr7NZASutvQth%2FYiNZ3CT3LF9C7uFxtZeYqEKaQ0wIssYdcA73x09JKP1%2Fj5GqVMW0jlrSJWsJ6WDC1p102eMFY4I3FIXB9HTtmEdalyG%2FMPKoh%2B%2FHEqeqUgcJlFVNCfbJh2OdUeoSILZJqcQQniv%2FekogY9q5j29FEmlr54BLfAOeOfZNRMfGRMtj%2ByXnWyr7G5Qn8SR3QdNqk7DTNZ6BCXjvzFXchFsEM1qYHi4ijDV2O3f%2BKkSBCtppHY2jPpBXLrRIu%2F3Z4YZsXdBM%2BS9B3XW%2FTHWghc6pytt6mDs0tqajYhBYHz2we4gPMGJCvmYr0liX6%2BykUUJcHBhV8RHfW9K2EQDs2bizDLL6yRNF5%2BP6VDQIqGM1RBM%2BeJFMmLnsOfyHitviAFKOMNOuzr4GOqUBGSG1PmtBM4JB%2Bf0FXRXvZWZFsPLxqS7zMiVWOV300B6zyIOClOv641W%2FCXemEVUUyxI9KNMZAjTfHtI9BDZ9sUPr8k3gXThLaglrYTweoeQE8kXbzxnwFm%2FkBV7XR5Hv1%2BQeqb1AM02WjjYDlcMe8Q3qZcV8PEFNTGxo7cDUt5Dqpm3pZQPIxCJuCVBnOJo92MSjWtXkiOAXBsWjW%2Bghj2mIHesj&X-Amz-Signature=4345d8bf041f3082a8be618729de0bb50df13bd7ccf2dda3c99f64ab9c04e89d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
