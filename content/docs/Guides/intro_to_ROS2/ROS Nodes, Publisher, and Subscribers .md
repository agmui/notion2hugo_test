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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVKAAZB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDiF08AJsXJC1rrGJfm5Xar8hAR1xJOwld8L9W4rtQtAiEA0bUg6k%2FbF8Q7r4fejtYSRUbN1v6KKFfruzsC00XZtd8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFQLtoz06P990fy3vSrcAz%2B%2BOMZDaFDwEa08DfBkV3bakaII4EspgjxTUt2M7xrYc4GvagzzPmtGU6TXZNQEpf8kh8V9iaNr91zBALy5Ua1iKn8qfNRy%2FbZYSo%2FlTur6Mc9vMNyB2pBv%2BqlJjlGGjLcxlDOI4NUM4SvX67MRr%2FAlzZnL5J24SQhyraZkjwwCv%2BR2D5%2BvDEnMLIKO1IfYfGx0qlv91Y6lVPPEBuxVL%2BIbrIoq%2FzoCA7c4opkO7pUY%2FNHA%2FolFDy2eDSdIUGHaphkS%2B1Hhs3%2FYWTd5ZUAXoTlWWu3FqwSuYgiqIurGkUtI37ucQqIOZ4LAIXsbOhF4%2B94zFu%2BFAP6n%2F2HPphAdA%2BS5f%2Fpvti7hIrrrEUYxxe6uojxgTxg3E7P90NcSkUTelf6x4hVaNH24nSxzMG4KikUgdtLFOSCez85CG0%2B8sw2xe7PUSo8O5gyGSrHoSzPht3vc1lNcTbmmusZ6kbe0Nz1xfa%2FxtZM9M6e%2BJSKsCr8cFqWbnI%2FTODOKACyhukSE2OpHl7r5r7mDJ5h%2FPzRB9lNDOmAt%2FOz9eK12H%2FoszocCKWS8JVERhUsFEaG1p%2BlSREHMmi2uKuZJ%2BJUdAzgnShnpwcMS0sDqOeX7Rv6wMYAwee9wxzJ2DCQ3OqXjMNPY2r4GOqUBxaXwvUavUqkWjEWkQ8q%2BrQY1TFMB%2Bq2AuiwhVmirXGXQ0I5o%2Fn%2B7%2F4pUyGuLOvvbKwHUFksIHMZu%2FA%2FM4nRfNqmf83c%2BRjMOhTjfEp5ZwrKPcZC9uYiN4hK8NftTGfDiNbu9MnF5iaTCTKNeHUAOWkxHn8h7ZimB2vKz3cMrBH0iDCQZbwu%2FCdkQoZsGP7EErdNT%2BJKbSFlFIM7mn29WwMlzIEtX&X-Amz-Signature=992d09d73686e05e15267940ccb3ddc45e49ac944b7bbb56133ccd7c2d3a26fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVKAAZB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDiF08AJsXJC1rrGJfm5Xar8hAR1xJOwld8L9W4rtQtAiEA0bUg6k%2FbF8Q7r4fejtYSRUbN1v6KKFfruzsC00XZtd8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFQLtoz06P990fy3vSrcAz%2B%2BOMZDaFDwEa08DfBkV3bakaII4EspgjxTUt2M7xrYc4GvagzzPmtGU6TXZNQEpf8kh8V9iaNr91zBALy5Ua1iKn8qfNRy%2FbZYSo%2FlTur6Mc9vMNyB2pBv%2BqlJjlGGjLcxlDOI4NUM4SvX67MRr%2FAlzZnL5J24SQhyraZkjwwCv%2BR2D5%2BvDEnMLIKO1IfYfGx0qlv91Y6lVPPEBuxVL%2BIbrIoq%2FzoCA7c4opkO7pUY%2FNHA%2FolFDy2eDSdIUGHaphkS%2B1Hhs3%2FYWTd5ZUAXoTlWWu3FqwSuYgiqIurGkUtI37ucQqIOZ4LAIXsbOhF4%2B94zFu%2BFAP6n%2F2HPphAdA%2BS5f%2Fpvti7hIrrrEUYxxe6uojxgTxg3E7P90NcSkUTelf6x4hVaNH24nSxzMG4KikUgdtLFOSCez85CG0%2B8sw2xe7PUSo8O5gyGSrHoSzPht3vc1lNcTbmmusZ6kbe0Nz1xfa%2FxtZM9M6e%2BJSKsCr8cFqWbnI%2FTODOKACyhukSE2OpHl7r5r7mDJ5h%2FPzRB9lNDOmAt%2FOz9eK12H%2FoszocCKWS8JVERhUsFEaG1p%2BlSREHMmi2uKuZJ%2BJUdAzgnShnpwcMS0sDqOeX7Rv6wMYAwee9wxzJ2DCQ3OqXjMNPY2r4GOqUBxaXwvUavUqkWjEWkQ8q%2BrQY1TFMB%2Bq2AuiwhVmirXGXQ0I5o%2Fn%2B7%2F4pUyGuLOvvbKwHUFksIHMZu%2FA%2FM4nRfNqmf83c%2BRjMOhTjfEp5ZwrKPcZC9uYiN4hK8NftTGfDiNbu9MnF5iaTCTKNeHUAOWkxHn8h7ZimB2vKz3cMrBH0iDCQZbwu%2FCdkQoZsGP7EErdNT%2BJKbSFlFIM7mn29WwMlzIEtX&X-Amz-Signature=8ec7f8e8bd533f43b2e4a17baeb1c06199b6f034f229ae225dadf7aa28e4c333&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVKAAZB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDiF08AJsXJC1rrGJfm5Xar8hAR1xJOwld8L9W4rtQtAiEA0bUg6k%2FbF8Q7r4fejtYSRUbN1v6KKFfruzsC00XZtd8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFQLtoz06P990fy3vSrcAz%2B%2BOMZDaFDwEa08DfBkV3bakaII4EspgjxTUt2M7xrYc4GvagzzPmtGU6TXZNQEpf8kh8V9iaNr91zBALy5Ua1iKn8qfNRy%2FbZYSo%2FlTur6Mc9vMNyB2pBv%2BqlJjlGGjLcxlDOI4NUM4SvX67MRr%2FAlzZnL5J24SQhyraZkjwwCv%2BR2D5%2BvDEnMLIKO1IfYfGx0qlv91Y6lVPPEBuxVL%2BIbrIoq%2FzoCA7c4opkO7pUY%2FNHA%2FolFDy2eDSdIUGHaphkS%2B1Hhs3%2FYWTd5ZUAXoTlWWu3FqwSuYgiqIurGkUtI37ucQqIOZ4LAIXsbOhF4%2B94zFu%2BFAP6n%2F2HPphAdA%2BS5f%2Fpvti7hIrrrEUYxxe6uojxgTxg3E7P90NcSkUTelf6x4hVaNH24nSxzMG4KikUgdtLFOSCez85CG0%2B8sw2xe7PUSo8O5gyGSrHoSzPht3vc1lNcTbmmusZ6kbe0Nz1xfa%2FxtZM9M6e%2BJSKsCr8cFqWbnI%2FTODOKACyhukSE2OpHl7r5r7mDJ5h%2FPzRB9lNDOmAt%2FOz9eK12H%2FoszocCKWS8JVERhUsFEaG1p%2BlSREHMmi2uKuZJ%2BJUdAzgnShnpwcMS0sDqOeX7Rv6wMYAwee9wxzJ2DCQ3OqXjMNPY2r4GOqUBxaXwvUavUqkWjEWkQ8q%2BrQY1TFMB%2Bq2AuiwhVmirXGXQ0I5o%2Fn%2B7%2F4pUyGuLOvvbKwHUFksIHMZu%2FA%2FM4nRfNqmf83c%2BRjMOhTjfEp5ZwrKPcZC9uYiN4hK8NftTGfDiNbu9MnF5iaTCTKNeHUAOWkxHn8h7ZimB2vKz3cMrBH0iDCQZbwu%2FCdkQoZsGP7EErdNT%2BJKbSFlFIM7mn29WwMlzIEtX&X-Amz-Signature=a11eb252b7b1b9d976b5402c0bcdecb95812e67e40a0b4870475c5a1047c57f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVKAAZB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDiF08AJsXJC1rrGJfm5Xar8hAR1xJOwld8L9W4rtQtAiEA0bUg6k%2FbF8Q7r4fejtYSRUbN1v6KKFfruzsC00XZtd8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFQLtoz06P990fy3vSrcAz%2B%2BOMZDaFDwEa08DfBkV3bakaII4EspgjxTUt2M7xrYc4GvagzzPmtGU6TXZNQEpf8kh8V9iaNr91zBALy5Ua1iKn8qfNRy%2FbZYSo%2FlTur6Mc9vMNyB2pBv%2BqlJjlGGjLcxlDOI4NUM4SvX67MRr%2FAlzZnL5J24SQhyraZkjwwCv%2BR2D5%2BvDEnMLIKO1IfYfGx0qlv91Y6lVPPEBuxVL%2BIbrIoq%2FzoCA7c4opkO7pUY%2FNHA%2FolFDy2eDSdIUGHaphkS%2B1Hhs3%2FYWTd5ZUAXoTlWWu3FqwSuYgiqIurGkUtI37ucQqIOZ4LAIXsbOhF4%2B94zFu%2BFAP6n%2F2HPphAdA%2BS5f%2Fpvti7hIrrrEUYxxe6uojxgTxg3E7P90NcSkUTelf6x4hVaNH24nSxzMG4KikUgdtLFOSCez85CG0%2B8sw2xe7PUSo8O5gyGSrHoSzPht3vc1lNcTbmmusZ6kbe0Nz1xfa%2FxtZM9M6e%2BJSKsCr8cFqWbnI%2FTODOKACyhukSE2OpHl7r5r7mDJ5h%2FPzRB9lNDOmAt%2FOz9eK12H%2FoszocCKWS8JVERhUsFEaG1p%2BlSREHMmi2uKuZJ%2BJUdAzgnShnpwcMS0sDqOeX7Rv6wMYAwee9wxzJ2DCQ3OqXjMNPY2r4GOqUBxaXwvUavUqkWjEWkQ8q%2BrQY1TFMB%2Bq2AuiwhVmirXGXQ0I5o%2Fn%2B7%2F4pUyGuLOvvbKwHUFksIHMZu%2FA%2FM4nRfNqmf83c%2BRjMOhTjfEp5ZwrKPcZC9uYiN4hK8NftTGfDiNbu9MnF5iaTCTKNeHUAOWkxHn8h7ZimB2vKz3cMrBH0iDCQZbwu%2FCdkQoZsGP7EErdNT%2BJKbSFlFIM7mn29WwMlzIEtX&X-Amz-Signature=65f427dea548be299b6c508e23e40ecdb163f6f1a9a443a5e31fa3b82c0acba2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVKAAZB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDiF08AJsXJC1rrGJfm5Xar8hAR1xJOwld8L9W4rtQtAiEA0bUg6k%2FbF8Q7r4fejtYSRUbN1v6KKFfruzsC00XZtd8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFQLtoz06P990fy3vSrcAz%2B%2BOMZDaFDwEa08DfBkV3bakaII4EspgjxTUt2M7xrYc4GvagzzPmtGU6TXZNQEpf8kh8V9iaNr91zBALy5Ua1iKn8qfNRy%2FbZYSo%2FlTur6Mc9vMNyB2pBv%2BqlJjlGGjLcxlDOI4NUM4SvX67MRr%2FAlzZnL5J24SQhyraZkjwwCv%2BR2D5%2BvDEnMLIKO1IfYfGx0qlv91Y6lVPPEBuxVL%2BIbrIoq%2FzoCA7c4opkO7pUY%2FNHA%2FolFDy2eDSdIUGHaphkS%2B1Hhs3%2FYWTd5ZUAXoTlWWu3FqwSuYgiqIurGkUtI37ucQqIOZ4LAIXsbOhF4%2B94zFu%2BFAP6n%2F2HPphAdA%2BS5f%2Fpvti7hIrrrEUYxxe6uojxgTxg3E7P90NcSkUTelf6x4hVaNH24nSxzMG4KikUgdtLFOSCez85CG0%2B8sw2xe7PUSo8O5gyGSrHoSzPht3vc1lNcTbmmusZ6kbe0Nz1xfa%2FxtZM9M6e%2BJSKsCr8cFqWbnI%2FTODOKACyhukSE2OpHl7r5r7mDJ5h%2FPzRB9lNDOmAt%2FOz9eK12H%2FoszocCKWS8JVERhUsFEaG1p%2BlSREHMmi2uKuZJ%2BJUdAzgnShnpwcMS0sDqOeX7Rv6wMYAwee9wxzJ2DCQ3OqXjMNPY2r4GOqUBxaXwvUavUqkWjEWkQ8q%2BrQY1TFMB%2Bq2AuiwhVmirXGXQ0I5o%2Fn%2B7%2F4pUyGuLOvvbKwHUFksIHMZu%2FA%2FM4nRfNqmf83c%2BRjMOhTjfEp5ZwrKPcZC9uYiN4hK8NftTGfDiNbu9MnF5iaTCTKNeHUAOWkxHn8h7ZimB2vKz3cMrBH0iDCQZbwu%2FCdkQoZsGP7EErdNT%2BJKbSFlFIM7mn29WwMlzIEtX&X-Amz-Signature=dee85a556388687abea8222f76f9e6c0a56ba772c41d7d7c71d80572c742fbc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVKAAZB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDiF08AJsXJC1rrGJfm5Xar8hAR1xJOwld8L9W4rtQtAiEA0bUg6k%2FbF8Q7r4fejtYSRUbN1v6KKFfruzsC00XZtd8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFQLtoz06P990fy3vSrcAz%2B%2BOMZDaFDwEa08DfBkV3bakaII4EspgjxTUt2M7xrYc4GvagzzPmtGU6TXZNQEpf8kh8V9iaNr91zBALy5Ua1iKn8qfNRy%2FbZYSo%2FlTur6Mc9vMNyB2pBv%2BqlJjlGGjLcxlDOI4NUM4SvX67MRr%2FAlzZnL5J24SQhyraZkjwwCv%2BR2D5%2BvDEnMLIKO1IfYfGx0qlv91Y6lVPPEBuxVL%2BIbrIoq%2FzoCA7c4opkO7pUY%2FNHA%2FolFDy2eDSdIUGHaphkS%2B1Hhs3%2FYWTd5ZUAXoTlWWu3FqwSuYgiqIurGkUtI37ucQqIOZ4LAIXsbOhF4%2B94zFu%2BFAP6n%2F2HPphAdA%2BS5f%2Fpvti7hIrrrEUYxxe6uojxgTxg3E7P90NcSkUTelf6x4hVaNH24nSxzMG4KikUgdtLFOSCez85CG0%2B8sw2xe7PUSo8O5gyGSrHoSzPht3vc1lNcTbmmusZ6kbe0Nz1xfa%2FxtZM9M6e%2BJSKsCr8cFqWbnI%2FTODOKACyhukSE2OpHl7r5r7mDJ5h%2FPzRB9lNDOmAt%2FOz9eK12H%2FoszocCKWS8JVERhUsFEaG1p%2BlSREHMmi2uKuZJ%2BJUdAzgnShnpwcMS0sDqOeX7Rv6wMYAwee9wxzJ2DCQ3OqXjMNPY2r4GOqUBxaXwvUavUqkWjEWkQ8q%2BrQY1TFMB%2Bq2AuiwhVmirXGXQ0I5o%2Fn%2B7%2F4pUyGuLOvvbKwHUFksIHMZu%2FA%2FM4nRfNqmf83c%2BRjMOhTjfEp5ZwrKPcZC9uYiN4hK8NftTGfDiNbu9MnF5iaTCTKNeHUAOWkxHn8h7ZimB2vKz3cMrBH0iDCQZbwu%2FCdkQoZsGP7EErdNT%2BJKbSFlFIM7mn29WwMlzIEtX&X-Amz-Signature=a550b7c93c00bdd771c9f0239235405ba4b5743bc23d38471564da2f6b1d7c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVKAAZB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDiF08AJsXJC1rrGJfm5Xar8hAR1xJOwld8L9W4rtQtAiEA0bUg6k%2FbF8Q7r4fejtYSRUbN1v6KKFfruzsC00XZtd8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFQLtoz06P990fy3vSrcAz%2B%2BOMZDaFDwEa08DfBkV3bakaII4EspgjxTUt2M7xrYc4GvagzzPmtGU6TXZNQEpf8kh8V9iaNr91zBALy5Ua1iKn8qfNRy%2FbZYSo%2FlTur6Mc9vMNyB2pBv%2BqlJjlGGjLcxlDOI4NUM4SvX67MRr%2FAlzZnL5J24SQhyraZkjwwCv%2BR2D5%2BvDEnMLIKO1IfYfGx0qlv91Y6lVPPEBuxVL%2BIbrIoq%2FzoCA7c4opkO7pUY%2FNHA%2FolFDy2eDSdIUGHaphkS%2B1Hhs3%2FYWTd5ZUAXoTlWWu3FqwSuYgiqIurGkUtI37ucQqIOZ4LAIXsbOhF4%2B94zFu%2BFAP6n%2F2HPphAdA%2BS5f%2Fpvti7hIrrrEUYxxe6uojxgTxg3E7P90NcSkUTelf6x4hVaNH24nSxzMG4KikUgdtLFOSCez85CG0%2B8sw2xe7PUSo8O5gyGSrHoSzPht3vc1lNcTbmmusZ6kbe0Nz1xfa%2FxtZM9M6e%2BJSKsCr8cFqWbnI%2FTODOKACyhukSE2OpHl7r5r7mDJ5h%2FPzRB9lNDOmAt%2FOz9eK12H%2FoszocCKWS8JVERhUsFEaG1p%2BlSREHMmi2uKuZJ%2BJUdAzgnShnpwcMS0sDqOeX7Rv6wMYAwee9wxzJ2DCQ3OqXjMNPY2r4GOqUBxaXwvUavUqkWjEWkQ8q%2BrQY1TFMB%2Bq2AuiwhVmirXGXQ0I5o%2Fn%2B7%2F4pUyGuLOvvbKwHUFksIHMZu%2FA%2FM4nRfNqmf83c%2BRjMOhTjfEp5ZwrKPcZC9uYiN4hK8NftTGfDiNbu9MnF5iaTCTKNeHUAOWkxHn8h7ZimB2vKz3cMrBH0iDCQZbwu%2FCdkQoZsGP7EErdNT%2BJKbSFlFIM7mn29WwMlzIEtX&X-Amz-Signature=1f7592002862bb8084dcfee6aa43ac32d7cc0485efe7b7a6ea3681a540d2fd78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVKAAZB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDiF08AJsXJC1rrGJfm5Xar8hAR1xJOwld8L9W4rtQtAiEA0bUg6k%2FbF8Q7r4fejtYSRUbN1v6KKFfruzsC00XZtd8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFQLtoz06P990fy3vSrcAz%2B%2BOMZDaFDwEa08DfBkV3bakaII4EspgjxTUt2M7xrYc4GvagzzPmtGU6TXZNQEpf8kh8V9iaNr91zBALy5Ua1iKn8qfNRy%2FbZYSo%2FlTur6Mc9vMNyB2pBv%2BqlJjlGGjLcxlDOI4NUM4SvX67MRr%2FAlzZnL5J24SQhyraZkjwwCv%2BR2D5%2BvDEnMLIKO1IfYfGx0qlv91Y6lVPPEBuxVL%2BIbrIoq%2FzoCA7c4opkO7pUY%2FNHA%2FolFDy2eDSdIUGHaphkS%2B1Hhs3%2FYWTd5ZUAXoTlWWu3FqwSuYgiqIurGkUtI37ucQqIOZ4LAIXsbOhF4%2B94zFu%2BFAP6n%2F2HPphAdA%2BS5f%2Fpvti7hIrrrEUYxxe6uojxgTxg3E7P90NcSkUTelf6x4hVaNH24nSxzMG4KikUgdtLFOSCez85CG0%2B8sw2xe7PUSo8O5gyGSrHoSzPht3vc1lNcTbmmusZ6kbe0Nz1xfa%2FxtZM9M6e%2BJSKsCr8cFqWbnI%2FTODOKACyhukSE2OpHl7r5r7mDJ5h%2FPzRB9lNDOmAt%2FOz9eK12H%2FoszocCKWS8JVERhUsFEaG1p%2BlSREHMmi2uKuZJ%2BJUdAzgnShnpwcMS0sDqOeX7Rv6wMYAwee9wxzJ2DCQ3OqXjMNPY2r4GOqUBxaXwvUavUqkWjEWkQ8q%2BrQY1TFMB%2Bq2AuiwhVmirXGXQ0I5o%2Fn%2B7%2F4pUyGuLOvvbKwHUFksIHMZu%2FA%2FM4nRfNqmf83c%2BRjMOhTjfEp5ZwrKPcZC9uYiN4hK8NftTGfDiNbu9MnF5iaTCTKNeHUAOWkxHn8h7ZimB2vKz3cMrBH0iDCQZbwu%2FCdkQoZsGP7EErdNT%2BJKbSFlFIM7mn29WwMlzIEtX&X-Amz-Signature=2b051696e9657dac236c2c4e4acf1a94711a22cf901515d20dd9cd565c320dee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
