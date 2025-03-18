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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHIOIMI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2NE%2FXiJTjGv14R6cJFCj0CqGJL575%2FPOIwuOqtPX1IAiEA0dUB9ZMypb2BrEZivyF2LBc3EGjNVY0v5olPqayjJ7Yq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAW0wX%2BUVXGvue15WyrcA1Zr%2FjhqnU7f%2FdiZ5NaN6i5RXRJ%2Fp%2F8MFcsbaLBxTzvAkYBGMnGm5eGxxFovNBQ7R%2BqYlufyDJJIMCmmlkVmdnO3Oda8S%2Bwz8VJE0Y0lg6fzthUxL6yIFG4P%2BB1u6l9a7FzeS4UNtBdmscoBim1UupRrm3j7aDku2Z2L9jSNPm2Q8M53mXHOv1jnzgIF5hUkNviP0H7I8g%2BbmSo7uLE%2FRrDqNgJCKab9KFzr2eBp4if85nzeji8ZuNp28UgHimEcuGpH3V9GRBUXSORFO%2FzTPdZQS3vCNmiBogBRRZFMGfGOq3qtsbcGi0mpCKSc45UWoUVOgqWcGZCO7f6LOOc39PnBYGgGBd3U8yfxZFhDcibdXxgjOYCzQ%2BO9X47NnuHKN7JgEU2AZGQUF5lolOnal%2BWC8KBZbMX38delj7nBMUNRSS8ihZqAIlbMoQmWz1g7FIbn2OiJCHOCmDYEKKTK4Ap3uLHdXvDUvYDtq70pjoGF7fl7s%2BNjd9jrl%2FZO4cmZMWACmLUCyfRYB%2BnrkXJpfsv%2FGM8au5Ak%2F2RykPC0x4Q3ulu3mGvcr5%2BpUNcJ79%2Bl%2F7MSh%2BmdujIWXo9OFyP6os2oU651pN7raFTuwxrxlELIfW9jX7g662W3SF3%2FMJDo474GOqUBtZ7S6dVcgN28LDO2YBSZcElTGVcHFtKXL34CQ%2BIyFAnwmPTrmepzrEaciCv5F5%2BIatowwe2s3uXVIgbvbQMXRxLsd3g5hdGFs9o%2BmuH43vLU0HbAbFHQfPuI8YB3QxUAyBw1Y2ZWo3rtBXbDxgC0gYqfnQdO2fGveNfJChOOU4JbU6VYx9aSL8B8KFCq4YrMAMLOGzl3omr6vxJdW9xbmQwVXtk6&X-Amz-Signature=f4fa54c087cbd6433e245a79762bad336856cdde22673910b799fd7c7438e8e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHIOIMI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2NE%2FXiJTjGv14R6cJFCj0CqGJL575%2FPOIwuOqtPX1IAiEA0dUB9ZMypb2BrEZivyF2LBc3EGjNVY0v5olPqayjJ7Yq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAW0wX%2BUVXGvue15WyrcA1Zr%2FjhqnU7f%2FdiZ5NaN6i5RXRJ%2Fp%2F8MFcsbaLBxTzvAkYBGMnGm5eGxxFovNBQ7R%2BqYlufyDJJIMCmmlkVmdnO3Oda8S%2Bwz8VJE0Y0lg6fzthUxL6yIFG4P%2BB1u6l9a7FzeS4UNtBdmscoBim1UupRrm3j7aDku2Z2L9jSNPm2Q8M53mXHOv1jnzgIF5hUkNviP0H7I8g%2BbmSo7uLE%2FRrDqNgJCKab9KFzr2eBp4if85nzeji8ZuNp28UgHimEcuGpH3V9GRBUXSORFO%2FzTPdZQS3vCNmiBogBRRZFMGfGOq3qtsbcGi0mpCKSc45UWoUVOgqWcGZCO7f6LOOc39PnBYGgGBd3U8yfxZFhDcibdXxgjOYCzQ%2BO9X47NnuHKN7JgEU2AZGQUF5lolOnal%2BWC8KBZbMX38delj7nBMUNRSS8ihZqAIlbMoQmWz1g7FIbn2OiJCHOCmDYEKKTK4Ap3uLHdXvDUvYDtq70pjoGF7fl7s%2BNjd9jrl%2FZO4cmZMWACmLUCyfRYB%2BnrkXJpfsv%2FGM8au5Ak%2F2RykPC0x4Q3ulu3mGvcr5%2BpUNcJ79%2Bl%2F7MSh%2BmdujIWXo9OFyP6os2oU651pN7raFTuwxrxlELIfW9jX7g662W3SF3%2FMJDo474GOqUBtZ7S6dVcgN28LDO2YBSZcElTGVcHFtKXL34CQ%2BIyFAnwmPTrmepzrEaciCv5F5%2BIatowwe2s3uXVIgbvbQMXRxLsd3g5hdGFs9o%2BmuH43vLU0HbAbFHQfPuI8YB3QxUAyBw1Y2ZWo3rtBXbDxgC0gYqfnQdO2fGveNfJChOOU4JbU6VYx9aSL8B8KFCq4YrMAMLOGzl3omr6vxJdW9xbmQwVXtk6&X-Amz-Signature=c75d8d6f3f20bc5a43098ea31287fd4d1242510a9327169a961fabd4d352b319&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHIOIMI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2NE%2FXiJTjGv14R6cJFCj0CqGJL575%2FPOIwuOqtPX1IAiEA0dUB9ZMypb2BrEZivyF2LBc3EGjNVY0v5olPqayjJ7Yq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAW0wX%2BUVXGvue15WyrcA1Zr%2FjhqnU7f%2FdiZ5NaN6i5RXRJ%2Fp%2F8MFcsbaLBxTzvAkYBGMnGm5eGxxFovNBQ7R%2BqYlufyDJJIMCmmlkVmdnO3Oda8S%2Bwz8VJE0Y0lg6fzthUxL6yIFG4P%2BB1u6l9a7FzeS4UNtBdmscoBim1UupRrm3j7aDku2Z2L9jSNPm2Q8M53mXHOv1jnzgIF5hUkNviP0H7I8g%2BbmSo7uLE%2FRrDqNgJCKab9KFzr2eBp4if85nzeji8ZuNp28UgHimEcuGpH3V9GRBUXSORFO%2FzTPdZQS3vCNmiBogBRRZFMGfGOq3qtsbcGi0mpCKSc45UWoUVOgqWcGZCO7f6LOOc39PnBYGgGBd3U8yfxZFhDcibdXxgjOYCzQ%2BO9X47NnuHKN7JgEU2AZGQUF5lolOnal%2BWC8KBZbMX38delj7nBMUNRSS8ihZqAIlbMoQmWz1g7FIbn2OiJCHOCmDYEKKTK4Ap3uLHdXvDUvYDtq70pjoGF7fl7s%2BNjd9jrl%2FZO4cmZMWACmLUCyfRYB%2BnrkXJpfsv%2FGM8au5Ak%2F2RykPC0x4Q3ulu3mGvcr5%2BpUNcJ79%2Bl%2F7MSh%2BmdujIWXo9OFyP6os2oU651pN7raFTuwxrxlELIfW9jX7g662W3SF3%2FMJDo474GOqUBtZ7S6dVcgN28LDO2YBSZcElTGVcHFtKXL34CQ%2BIyFAnwmPTrmepzrEaciCv5F5%2BIatowwe2s3uXVIgbvbQMXRxLsd3g5hdGFs9o%2BmuH43vLU0HbAbFHQfPuI8YB3QxUAyBw1Y2ZWo3rtBXbDxgC0gYqfnQdO2fGveNfJChOOU4JbU6VYx9aSL8B8KFCq4YrMAMLOGzl3omr6vxJdW9xbmQwVXtk6&X-Amz-Signature=3e21ad9b8eb5a7c10a3661026ee7932948970a4f4c2a83b780e2d3307ecd2226&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHIOIMI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2NE%2FXiJTjGv14R6cJFCj0CqGJL575%2FPOIwuOqtPX1IAiEA0dUB9ZMypb2BrEZivyF2LBc3EGjNVY0v5olPqayjJ7Yq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAW0wX%2BUVXGvue15WyrcA1Zr%2FjhqnU7f%2FdiZ5NaN6i5RXRJ%2Fp%2F8MFcsbaLBxTzvAkYBGMnGm5eGxxFovNBQ7R%2BqYlufyDJJIMCmmlkVmdnO3Oda8S%2Bwz8VJE0Y0lg6fzthUxL6yIFG4P%2BB1u6l9a7FzeS4UNtBdmscoBim1UupRrm3j7aDku2Z2L9jSNPm2Q8M53mXHOv1jnzgIF5hUkNviP0H7I8g%2BbmSo7uLE%2FRrDqNgJCKab9KFzr2eBp4if85nzeji8ZuNp28UgHimEcuGpH3V9GRBUXSORFO%2FzTPdZQS3vCNmiBogBRRZFMGfGOq3qtsbcGi0mpCKSc45UWoUVOgqWcGZCO7f6LOOc39PnBYGgGBd3U8yfxZFhDcibdXxgjOYCzQ%2BO9X47NnuHKN7JgEU2AZGQUF5lolOnal%2BWC8KBZbMX38delj7nBMUNRSS8ihZqAIlbMoQmWz1g7FIbn2OiJCHOCmDYEKKTK4Ap3uLHdXvDUvYDtq70pjoGF7fl7s%2BNjd9jrl%2FZO4cmZMWACmLUCyfRYB%2BnrkXJpfsv%2FGM8au5Ak%2F2RykPC0x4Q3ulu3mGvcr5%2BpUNcJ79%2Bl%2F7MSh%2BmdujIWXo9OFyP6os2oU651pN7raFTuwxrxlELIfW9jX7g662W3SF3%2FMJDo474GOqUBtZ7S6dVcgN28LDO2YBSZcElTGVcHFtKXL34CQ%2BIyFAnwmPTrmepzrEaciCv5F5%2BIatowwe2s3uXVIgbvbQMXRxLsd3g5hdGFs9o%2BmuH43vLU0HbAbFHQfPuI8YB3QxUAyBw1Y2ZWo3rtBXbDxgC0gYqfnQdO2fGveNfJChOOU4JbU6VYx9aSL8B8KFCq4YrMAMLOGzl3omr6vxJdW9xbmQwVXtk6&X-Amz-Signature=78738964b20ab18f90bd025cb29aa318a419e354df44c8848b63ad114c6fa464&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHIOIMI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2NE%2FXiJTjGv14R6cJFCj0CqGJL575%2FPOIwuOqtPX1IAiEA0dUB9ZMypb2BrEZivyF2LBc3EGjNVY0v5olPqayjJ7Yq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAW0wX%2BUVXGvue15WyrcA1Zr%2FjhqnU7f%2FdiZ5NaN6i5RXRJ%2Fp%2F8MFcsbaLBxTzvAkYBGMnGm5eGxxFovNBQ7R%2BqYlufyDJJIMCmmlkVmdnO3Oda8S%2Bwz8VJE0Y0lg6fzthUxL6yIFG4P%2BB1u6l9a7FzeS4UNtBdmscoBim1UupRrm3j7aDku2Z2L9jSNPm2Q8M53mXHOv1jnzgIF5hUkNviP0H7I8g%2BbmSo7uLE%2FRrDqNgJCKab9KFzr2eBp4if85nzeji8ZuNp28UgHimEcuGpH3V9GRBUXSORFO%2FzTPdZQS3vCNmiBogBRRZFMGfGOq3qtsbcGi0mpCKSc45UWoUVOgqWcGZCO7f6LOOc39PnBYGgGBd3U8yfxZFhDcibdXxgjOYCzQ%2BO9X47NnuHKN7JgEU2AZGQUF5lolOnal%2BWC8KBZbMX38delj7nBMUNRSS8ihZqAIlbMoQmWz1g7FIbn2OiJCHOCmDYEKKTK4Ap3uLHdXvDUvYDtq70pjoGF7fl7s%2BNjd9jrl%2FZO4cmZMWACmLUCyfRYB%2BnrkXJpfsv%2FGM8au5Ak%2F2RykPC0x4Q3ulu3mGvcr5%2BpUNcJ79%2Bl%2F7MSh%2BmdujIWXo9OFyP6os2oU651pN7raFTuwxrxlELIfW9jX7g662W3SF3%2FMJDo474GOqUBtZ7S6dVcgN28LDO2YBSZcElTGVcHFtKXL34CQ%2BIyFAnwmPTrmepzrEaciCv5F5%2BIatowwe2s3uXVIgbvbQMXRxLsd3g5hdGFs9o%2BmuH43vLU0HbAbFHQfPuI8YB3QxUAyBw1Y2ZWo3rtBXbDxgC0gYqfnQdO2fGveNfJChOOU4JbU6VYx9aSL8B8KFCq4YrMAMLOGzl3omr6vxJdW9xbmQwVXtk6&X-Amz-Signature=ece90b295ca157c31bde0b0f1406270f3d498f6b8b15a9a2f6a664204f8ff96f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHIOIMI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2NE%2FXiJTjGv14R6cJFCj0CqGJL575%2FPOIwuOqtPX1IAiEA0dUB9ZMypb2BrEZivyF2LBc3EGjNVY0v5olPqayjJ7Yq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAW0wX%2BUVXGvue15WyrcA1Zr%2FjhqnU7f%2FdiZ5NaN6i5RXRJ%2Fp%2F8MFcsbaLBxTzvAkYBGMnGm5eGxxFovNBQ7R%2BqYlufyDJJIMCmmlkVmdnO3Oda8S%2Bwz8VJE0Y0lg6fzthUxL6yIFG4P%2BB1u6l9a7FzeS4UNtBdmscoBim1UupRrm3j7aDku2Z2L9jSNPm2Q8M53mXHOv1jnzgIF5hUkNviP0H7I8g%2BbmSo7uLE%2FRrDqNgJCKab9KFzr2eBp4if85nzeji8ZuNp28UgHimEcuGpH3V9GRBUXSORFO%2FzTPdZQS3vCNmiBogBRRZFMGfGOq3qtsbcGi0mpCKSc45UWoUVOgqWcGZCO7f6LOOc39PnBYGgGBd3U8yfxZFhDcibdXxgjOYCzQ%2BO9X47NnuHKN7JgEU2AZGQUF5lolOnal%2BWC8KBZbMX38delj7nBMUNRSS8ihZqAIlbMoQmWz1g7FIbn2OiJCHOCmDYEKKTK4Ap3uLHdXvDUvYDtq70pjoGF7fl7s%2BNjd9jrl%2FZO4cmZMWACmLUCyfRYB%2BnrkXJpfsv%2FGM8au5Ak%2F2RykPC0x4Q3ulu3mGvcr5%2BpUNcJ79%2Bl%2F7MSh%2BmdujIWXo9OFyP6os2oU651pN7raFTuwxrxlELIfW9jX7g662W3SF3%2FMJDo474GOqUBtZ7S6dVcgN28LDO2YBSZcElTGVcHFtKXL34CQ%2BIyFAnwmPTrmepzrEaciCv5F5%2BIatowwe2s3uXVIgbvbQMXRxLsd3g5hdGFs9o%2BmuH43vLU0HbAbFHQfPuI8YB3QxUAyBw1Y2ZWo3rtBXbDxgC0gYqfnQdO2fGveNfJChOOU4JbU6VYx9aSL8B8KFCq4YrMAMLOGzl3omr6vxJdW9xbmQwVXtk6&X-Amz-Signature=e9bf0d91b602906f6a9191d1a614156e50f80b7b6d542edec26da7fff96b645c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHIOIMI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2NE%2FXiJTjGv14R6cJFCj0CqGJL575%2FPOIwuOqtPX1IAiEA0dUB9ZMypb2BrEZivyF2LBc3EGjNVY0v5olPqayjJ7Yq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAW0wX%2BUVXGvue15WyrcA1Zr%2FjhqnU7f%2FdiZ5NaN6i5RXRJ%2Fp%2F8MFcsbaLBxTzvAkYBGMnGm5eGxxFovNBQ7R%2BqYlufyDJJIMCmmlkVmdnO3Oda8S%2Bwz8VJE0Y0lg6fzthUxL6yIFG4P%2BB1u6l9a7FzeS4UNtBdmscoBim1UupRrm3j7aDku2Z2L9jSNPm2Q8M53mXHOv1jnzgIF5hUkNviP0H7I8g%2BbmSo7uLE%2FRrDqNgJCKab9KFzr2eBp4if85nzeji8ZuNp28UgHimEcuGpH3V9GRBUXSORFO%2FzTPdZQS3vCNmiBogBRRZFMGfGOq3qtsbcGi0mpCKSc45UWoUVOgqWcGZCO7f6LOOc39PnBYGgGBd3U8yfxZFhDcibdXxgjOYCzQ%2BO9X47NnuHKN7JgEU2AZGQUF5lolOnal%2BWC8KBZbMX38delj7nBMUNRSS8ihZqAIlbMoQmWz1g7FIbn2OiJCHOCmDYEKKTK4Ap3uLHdXvDUvYDtq70pjoGF7fl7s%2BNjd9jrl%2FZO4cmZMWACmLUCyfRYB%2BnrkXJpfsv%2FGM8au5Ak%2F2RykPC0x4Q3ulu3mGvcr5%2BpUNcJ79%2Bl%2F7MSh%2BmdujIWXo9OFyP6os2oU651pN7raFTuwxrxlELIfW9jX7g662W3SF3%2FMJDo474GOqUBtZ7S6dVcgN28LDO2YBSZcElTGVcHFtKXL34CQ%2BIyFAnwmPTrmepzrEaciCv5F5%2BIatowwe2s3uXVIgbvbQMXRxLsd3g5hdGFs9o%2BmuH43vLU0HbAbFHQfPuI8YB3QxUAyBw1Y2ZWo3rtBXbDxgC0gYqfnQdO2fGveNfJChOOU4JbU6VYx9aSL8B8KFCq4YrMAMLOGzl3omr6vxJdW9xbmQwVXtk6&X-Amz-Signature=19e553de6876b1260547d61e47ee4f0b4567e4e61ccd29556269d66ed15a0dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYHIOIMI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2NE%2FXiJTjGv14R6cJFCj0CqGJL575%2FPOIwuOqtPX1IAiEA0dUB9ZMypb2BrEZivyF2LBc3EGjNVY0v5olPqayjJ7Yq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAW0wX%2BUVXGvue15WyrcA1Zr%2FjhqnU7f%2FdiZ5NaN6i5RXRJ%2Fp%2F8MFcsbaLBxTzvAkYBGMnGm5eGxxFovNBQ7R%2BqYlufyDJJIMCmmlkVmdnO3Oda8S%2Bwz8VJE0Y0lg6fzthUxL6yIFG4P%2BB1u6l9a7FzeS4UNtBdmscoBim1UupRrm3j7aDku2Z2L9jSNPm2Q8M53mXHOv1jnzgIF5hUkNviP0H7I8g%2BbmSo7uLE%2FRrDqNgJCKab9KFzr2eBp4if85nzeji8ZuNp28UgHimEcuGpH3V9GRBUXSORFO%2FzTPdZQS3vCNmiBogBRRZFMGfGOq3qtsbcGi0mpCKSc45UWoUVOgqWcGZCO7f6LOOc39PnBYGgGBd3U8yfxZFhDcibdXxgjOYCzQ%2BO9X47NnuHKN7JgEU2AZGQUF5lolOnal%2BWC8KBZbMX38delj7nBMUNRSS8ihZqAIlbMoQmWz1g7FIbn2OiJCHOCmDYEKKTK4Ap3uLHdXvDUvYDtq70pjoGF7fl7s%2BNjd9jrl%2FZO4cmZMWACmLUCyfRYB%2BnrkXJpfsv%2FGM8au5Ak%2F2RykPC0x4Q3ulu3mGvcr5%2BpUNcJ79%2Bl%2F7MSh%2BmdujIWXo9OFyP6os2oU651pN7raFTuwxrxlELIfW9jX7g662W3SF3%2FMJDo474GOqUBtZ7S6dVcgN28LDO2YBSZcElTGVcHFtKXL34CQ%2BIyFAnwmPTrmepzrEaciCv5F5%2BIatowwe2s3uXVIgbvbQMXRxLsd3g5hdGFs9o%2BmuH43vLU0HbAbFHQfPuI8YB3QxUAyBw1Y2ZWo3rtBXbDxgC0gYqfnQdO2fGveNfJChOOU4JbU6VYx9aSL8B8KFCq4YrMAMLOGzl3omr6vxJdW9xbmQwVXtk6&X-Amz-Signature=e007681748a80a059406f82a01683cb7a4b8e128a1027eb9c5f44dcae4a84341&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
