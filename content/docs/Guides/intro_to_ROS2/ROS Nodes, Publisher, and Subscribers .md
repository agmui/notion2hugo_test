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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHFI6L7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC7hNppVjw9fBaAE0dgBPNWPSXw8Hp48hSc45oTRupJagIhAM3%2FPiuGxF1miyErfPKYYvXFFJpe1XJOPIg%2FQP8w6MWhKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFGRqz%2BIlAPjRdvMq3AOevmDmfmcjPfWLiEcaFzUIlQXL2LSIeZknD2zmVHZZgGpuT0qomLYKrL5ewdx33HPt8V8NkNBA78w490YcNeN6gUuVtl2WIiv%2Bv9q5LKDduwelJOejQzGVnkLpkV1klVq%2Bqni1DievWghmFE7xUNXHrkEYTUIcyExBeOZbQVqypDgXawElu%2FitPJ6ndjvuEXTPyms8qYf3rg8M6d%2BcQ%2Ba9%2BZI0Sn4UHyyCKaniIVRuOCMx8TT%2Fa2IHQAR0Oa6kOQ9G8moQYcrQegJLlQHRHhiJbTP1g0IHl6vC4ar1hZ9tcwUUmCjHT8NkvM36ST9TVpebb8ZzZuSwZn41doRBROwPa0WSj67rEGM0Mapr%2F2OLHdxRSa3xIlBqxhuQnzRm7uyG%2FFEomRDZKSlUJfJEQAShoy25hUtDJ5hFwNtYfV1dZ%2FL1V8kEeVOBW%2BETCuChVNw9keT6LF1fuUK8eqfpeFODtbAJBtTGdxM%2FztmwbSzpCW9%2FbI0N%2BI7XNfpyTLnFIVekzhIkx6c7zKC9ETkcOYeFnPLZM2BNoTu%2BPY%2Fs5wNlr62evvviDFh2qxE4L9MUI3PzB4SthHEHS5rs0n%2BRXJuhfCTweTIMy803s0O0KNt64Pau6uqqlp7ghw3ITDCXzKbABjqkAd0%2FpjWt0lfEXboMPmdqQmf3Qq7z6mArPjYmiS%2FA08T9DB9VnA5GYNUCw0ilEvoQ72rTv4VCxoasMehE5arXkcoLcAs%2FcXLKVgxgh8f%2FYDBUI2iHkb9ZYhbyGi1eQU2nNcBxOmS6K8yezSDw3kNpphzr%2FGtt5%2FmMQdV8KxqFX3SlbPGmsPV%2FTCtOoB1FaNqsnEhDHoOpIrIp6egWCytCj811c5Fy&X-Amz-Signature=38ffff566a72e1e317ded53f3ca88270e9b2c1fd71c5061fde93dd2b4a44d350&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHFI6L7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC7hNppVjw9fBaAE0dgBPNWPSXw8Hp48hSc45oTRupJagIhAM3%2FPiuGxF1miyErfPKYYvXFFJpe1XJOPIg%2FQP8w6MWhKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFGRqz%2BIlAPjRdvMq3AOevmDmfmcjPfWLiEcaFzUIlQXL2LSIeZknD2zmVHZZgGpuT0qomLYKrL5ewdx33HPt8V8NkNBA78w490YcNeN6gUuVtl2WIiv%2Bv9q5LKDduwelJOejQzGVnkLpkV1klVq%2Bqni1DievWghmFE7xUNXHrkEYTUIcyExBeOZbQVqypDgXawElu%2FitPJ6ndjvuEXTPyms8qYf3rg8M6d%2BcQ%2Ba9%2BZI0Sn4UHyyCKaniIVRuOCMx8TT%2Fa2IHQAR0Oa6kOQ9G8moQYcrQegJLlQHRHhiJbTP1g0IHl6vC4ar1hZ9tcwUUmCjHT8NkvM36ST9TVpebb8ZzZuSwZn41doRBROwPa0WSj67rEGM0Mapr%2F2OLHdxRSa3xIlBqxhuQnzRm7uyG%2FFEomRDZKSlUJfJEQAShoy25hUtDJ5hFwNtYfV1dZ%2FL1V8kEeVOBW%2BETCuChVNw9keT6LF1fuUK8eqfpeFODtbAJBtTGdxM%2FztmwbSzpCW9%2FbI0N%2BI7XNfpyTLnFIVekzhIkx6c7zKC9ETkcOYeFnPLZM2BNoTu%2BPY%2Fs5wNlr62evvviDFh2qxE4L9MUI3PzB4SthHEHS5rs0n%2BRXJuhfCTweTIMy803s0O0KNt64Pau6uqqlp7ghw3ITDCXzKbABjqkAd0%2FpjWt0lfEXboMPmdqQmf3Qq7z6mArPjYmiS%2FA08T9DB9VnA5GYNUCw0ilEvoQ72rTv4VCxoasMehE5arXkcoLcAs%2FcXLKVgxgh8f%2FYDBUI2iHkb9ZYhbyGi1eQU2nNcBxOmS6K8yezSDw3kNpphzr%2FGtt5%2FmMQdV8KxqFX3SlbPGmsPV%2FTCtOoB1FaNqsnEhDHoOpIrIp6egWCytCj811c5Fy&X-Amz-Signature=eaab3212688036f6024db98875f3c00889091838757481b6f15cb33f1aec895c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHFI6L7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC7hNppVjw9fBaAE0dgBPNWPSXw8Hp48hSc45oTRupJagIhAM3%2FPiuGxF1miyErfPKYYvXFFJpe1XJOPIg%2FQP8w6MWhKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFGRqz%2BIlAPjRdvMq3AOevmDmfmcjPfWLiEcaFzUIlQXL2LSIeZknD2zmVHZZgGpuT0qomLYKrL5ewdx33HPt8V8NkNBA78w490YcNeN6gUuVtl2WIiv%2Bv9q5LKDduwelJOejQzGVnkLpkV1klVq%2Bqni1DievWghmFE7xUNXHrkEYTUIcyExBeOZbQVqypDgXawElu%2FitPJ6ndjvuEXTPyms8qYf3rg8M6d%2BcQ%2Ba9%2BZI0Sn4UHyyCKaniIVRuOCMx8TT%2Fa2IHQAR0Oa6kOQ9G8moQYcrQegJLlQHRHhiJbTP1g0IHl6vC4ar1hZ9tcwUUmCjHT8NkvM36ST9TVpebb8ZzZuSwZn41doRBROwPa0WSj67rEGM0Mapr%2F2OLHdxRSa3xIlBqxhuQnzRm7uyG%2FFEomRDZKSlUJfJEQAShoy25hUtDJ5hFwNtYfV1dZ%2FL1V8kEeVOBW%2BETCuChVNw9keT6LF1fuUK8eqfpeFODtbAJBtTGdxM%2FztmwbSzpCW9%2FbI0N%2BI7XNfpyTLnFIVekzhIkx6c7zKC9ETkcOYeFnPLZM2BNoTu%2BPY%2Fs5wNlr62evvviDFh2qxE4L9MUI3PzB4SthHEHS5rs0n%2BRXJuhfCTweTIMy803s0O0KNt64Pau6uqqlp7ghw3ITDCXzKbABjqkAd0%2FpjWt0lfEXboMPmdqQmf3Qq7z6mArPjYmiS%2FA08T9DB9VnA5GYNUCw0ilEvoQ72rTv4VCxoasMehE5arXkcoLcAs%2FcXLKVgxgh8f%2FYDBUI2iHkb9ZYhbyGi1eQU2nNcBxOmS6K8yezSDw3kNpphzr%2FGtt5%2FmMQdV8KxqFX3SlbPGmsPV%2FTCtOoB1FaNqsnEhDHoOpIrIp6egWCytCj811c5Fy&X-Amz-Signature=1a2dd65d884da8b1836b96d570f6429efbf513d9cbcc4872d627073c39357dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHFI6L7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC7hNppVjw9fBaAE0dgBPNWPSXw8Hp48hSc45oTRupJagIhAM3%2FPiuGxF1miyErfPKYYvXFFJpe1XJOPIg%2FQP8w6MWhKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFGRqz%2BIlAPjRdvMq3AOevmDmfmcjPfWLiEcaFzUIlQXL2LSIeZknD2zmVHZZgGpuT0qomLYKrL5ewdx33HPt8V8NkNBA78w490YcNeN6gUuVtl2WIiv%2Bv9q5LKDduwelJOejQzGVnkLpkV1klVq%2Bqni1DievWghmFE7xUNXHrkEYTUIcyExBeOZbQVqypDgXawElu%2FitPJ6ndjvuEXTPyms8qYf3rg8M6d%2BcQ%2Ba9%2BZI0Sn4UHyyCKaniIVRuOCMx8TT%2Fa2IHQAR0Oa6kOQ9G8moQYcrQegJLlQHRHhiJbTP1g0IHl6vC4ar1hZ9tcwUUmCjHT8NkvM36ST9TVpebb8ZzZuSwZn41doRBROwPa0WSj67rEGM0Mapr%2F2OLHdxRSa3xIlBqxhuQnzRm7uyG%2FFEomRDZKSlUJfJEQAShoy25hUtDJ5hFwNtYfV1dZ%2FL1V8kEeVOBW%2BETCuChVNw9keT6LF1fuUK8eqfpeFODtbAJBtTGdxM%2FztmwbSzpCW9%2FbI0N%2BI7XNfpyTLnFIVekzhIkx6c7zKC9ETkcOYeFnPLZM2BNoTu%2BPY%2Fs5wNlr62evvviDFh2qxE4L9MUI3PzB4SthHEHS5rs0n%2BRXJuhfCTweTIMy803s0O0KNt64Pau6uqqlp7ghw3ITDCXzKbABjqkAd0%2FpjWt0lfEXboMPmdqQmf3Qq7z6mArPjYmiS%2FA08T9DB9VnA5GYNUCw0ilEvoQ72rTv4VCxoasMehE5arXkcoLcAs%2FcXLKVgxgh8f%2FYDBUI2iHkb9ZYhbyGi1eQU2nNcBxOmS6K8yezSDw3kNpphzr%2FGtt5%2FmMQdV8KxqFX3SlbPGmsPV%2FTCtOoB1FaNqsnEhDHoOpIrIp6egWCytCj811c5Fy&X-Amz-Signature=9c93204b5b0a0126943b233819f47cd81ebb4ae52a41b564dbb0abbe77c93710&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHFI6L7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC7hNppVjw9fBaAE0dgBPNWPSXw8Hp48hSc45oTRupJagIhAM3%2FPiuGxF1miyErfPKYYvXFFJpe1XJOPIg%2FQP8w6MWhKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFGRqz%2BIlAPjRdvMq3AOevmDmfmcjPfWLiEcaFzUIlQXL2LSIeZknD2zmVHZZgGpuT0qomLYKrL5ewdx33HPt8V8NkNBA78w490YcNeN6gUuVtl2WIiv%2Bv9q5LKDduwelJOejQzGVnkLpkV1klVq%2Bqni1DievWghmFE7xUNXHrkEYTUIcyExBeOZbQVqypDgXawElu%2FitPJ6ndjvuEXTPyms8qYf3rg8M6d%2BcQ%2Ba9%2BZI0Sn4UHyyCKaniIVRuOCMx8TT%2Fa2IHQAR0Oa6kOQ9G8moQYcrQegJLlQHRHhiJbTP1g0IHl6vC4ar1hZ9tcwUUmCjHT8NkvM36ST9TVpebb8ZzZuSwZn41doRBROwPa0WSj67rEGM0Mapr%2F2OLHdxRSa3xIlBqxhuQnzRm7uyG%2FFEomRDZKSlUJfJEQAShoy25hUtDJ5hFwNtYfV1dZ%2FL1V8kEeVOBW%2BETCuChVNw9keT6LF1fuUK8eqfpeFODtbAJBtTGdxM%2FztmwbSzpCW9%2FbI0N%2BI7XNfpyTLnFIVekzhIkx6c7zKC9ETkcOYeFnPLZM2BNoTu%2BPY%2Fs5wNlr62evvviDFh2qxE4L9MUI3PzB4SthHEHS5rs0n%2BRXJuhfCTweTIMy803s0O0KNt64Pau6uqqlp7ghw3ITDCXzKbABjqkAd0%2FpjWt0lfEXboMPmdqQmf3Qq7z6mArPjYmiS%2FA08T9DB9VnA5GYNUCw0ilEvoQ72rTv4VCxoasMehE5arXkcoLcAs%2FcXLKVgxgh8f%2FYDBUI2iHkb9ZYhbyGi1eQU2nNcBxOmS6K8yezSDw3kNpphzr%2FGtt5%2FmMQdV8KxqFX3SlbPGmsPV%2FTCtOoB1FaNqsnEhDHoOpIrIp6egWCytCj811c5Fy&X-Amz-Signature=300295873caea121de52af36a5ceda493db856f435e7ec7c9b159d87418a70dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHFI6L7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC7hNppVjw9fBaAE0dgBPNWPSXw8Hp48hSc45oTRupJagIhAM3%2FPiuGxF1miyErfPKYYvXFFJpe1XJOPIg%2FQP8w6MWhKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFGRqz%2BIlAPjRdvMq3AOevmDmfmcjPfWLiEcaFzUIlQXL2LSIeZknD2zmVHZZgGpuT0qomLYKrL5ewdx33HPt8V8NkNBA78w490YcNeN6gUuVtl2WIiv%2Bv9q5LKDduwelJOejQzGVnkLpkV1klVq%2Bqni1DievWghmFE7xUNXHrkEYTUIcyExBeOZbQVqypDgXawElu%2FitPJ6ndjvuEXTPyms8qYf3rg8M6d%2BcQ%2Ba9%2BZI0Sn4UHyyCKaniIVRuOCMx8TT%2Fa2IHQAR0Oa6kOQ9G8moQYcrQegJLlQHRHhiJbTP1g0IHl6vC4ar1hZ9tcwUUmCjHT8NkvM36ST9TVpebb8ZzZuSwZn41doRBROwPa0WSj67rEGM0Mapr%2F2OLHdxRSa3xIlBqxhuQnzRm7uyG%2FFEomRDZKSlUJfJEQAShoy25hUtDJ5hFwNtYfV1dZ%2FL1V8kEeVOBW%2BETCuChVNw9keT6LF1fuUK8eqfpeFODtbAJBtTGdxM%2FztmwbSzpCW9%2FbI0N%2BI7XNfpyTLnFIVekzhIkx6c7zKC9ETkcOYeFnPLZM2BNoTu%2BPY%2Fs5wNlr62evvviDFh2qxE4L9MUI3PzB4SthHEHS5rs0n%2BRXJuhfCTweTIMy803s0O0KNt64Pau6uqqlp7ghw3ITDCXzKbABjqkAd0%2FpjWt0lfEXboMPmdqQmf3Qq7z6mArPjYmiS%2FA08T9DB9VnA5GYNUCw0ilEvoQ72rTv4VCxoasMehE5arXkcoLcAs%2FcXLKVgxgh8f%2FYDBUI2iHkb9ZYhbyGi1eQU2nNcBxOmS6K8yezSDw3kNpphzr%2FGtt5%2FmMQdV8KxqFX3SlbPGmsPV%2FTCtOoB1FaNqsnEhDHoOpIrIp6egWCytCj811c5Fy&X-Amz-Signature=0defacf39e23538e3497e327ecce2ab76dac01194aeb693e91e8bd3e673dc42e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHFI6L7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC7hNppVjw9fBaAE0dgBPNWPSXw8Hp48hSc45oTRupJagIhAM3%2FPiuGxF1miyErfPKYYvXFFJpe1XJOPIg%2FQP8w6MWhKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFGRqz%2BIlAPjRdvMq3AOevmDmfmcjPfWLiEcaFzUIlQXL2LSIeZknD2zmVHZZgGpuT0qomLYKrL5ewdx33HPt8V8NkNBA78w490YcNeN6gUuVtl2WIiv%2Bv9q5LKDduwelJOejQzGVnkLpkV1klVq%2Bqni1DievWghmFE7xUNXHrkEYTUIcyExBeOZbQVqypDgXawElu%2FitPJ6ndjvuEXTPyms8qYf3rg8M6d%2BcQ%2Ba9%2BZI0Sn4UHyyCKaniIVRuOCMx8TT%2Fa2IHQAR0Oa6kOQ9G8moQYcrQegJLlQHRHhiJbTP1g0IHl6vC4ar1hZ9tcwUUmCjHT8NkvM36ST9TVpebb8ZzZuSwZn41doRBROwPa0WSj67rEGM0Mapr%2F2OLHdxRSa3xIlBqxhuQnzRm7uyG%2FFEomRDZKSlUJfJEQAShoy25hUtDJ5hFwNtYfV1dZ%2FL1V8kEeVOBW%2BETCuChVNw9keT6LF1fuUK8eqfpeFODtbAJBtTGdxM%2FztmwbSzpCW9%2FbI0N%2BI7XNfpyTLnFIVekzhIkx6c7zKC9ETkcOYeFnPLZM2BNoTu%2BPY%2Fs5wNlr62evvviDFh2qxE4L9MUI3PzB4SthHEHS5rs0n%2BRXJuhfCTweTIMy803s0O0KNt64Pau6uqqlp7ghw3ITDCXzKbABjqkAd0%2FpjWt0lfEXboMPmdqQmf3Qq7z6mArPjYmiS%2FA08T9DB9VnA5GYNUCw0ilEvoQ72rTv4VCxoasMehE5arXkcoLcAs%2FcXLKVgxgh8f%2FYDBUI2iHkb9ZYhbyGi1eQU2nNcBxOmS6K8yezSDw3kNpphzr%2FGtt5%2FmMQdV8KxqFX3SlbPGmsPV%2FTCtOoB1FaNqsnEhDHoOpIrIp6egWCytCj811c5Fy&X-Amz-Signature=b75bbbc6b9966328ca3604ede8450dc46281f25fea554ffd8d137af82f3b6229&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHFI6L7%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T033116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQC7hNppVjw9fBaAE0dgBPNWPSXw8Hp48hSc45oTRupJagIhAM3%2FPiuGxF1miyErfPKYYvXFFJpe1XJOPIg%2FQP8w6MWhKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaFGRqz%2BIlAPjRdvMq3AOevmDmfmcjPfWLiEcaFzUIlQXL2LSIeZknD2zmVHZZgGpuT0qomLYKrL5ewdx33HPt8V8NkNBA78w490YcNeN6gUuVtl2WIiv%2Bv9q5LKDduwelJOejQzGVnkLpkV1klVq%2Bqni1DievWghmFE7xUNXHrkEYTUIcyExBeOZbQVqypDgXawElu%2FitPJ6ndjvuEXTPyms8qYf3rg8M6d%2BcQ%2Ba9%2BZI0Sn4UHyyCKaniIVRuOCMx8TT%2Fa2IHQAR0Oa6kOQ9G8moQYcrQegJLlQHRHhiJbTP1g0IHl6vC4ar1hZ9tcwUUmCjHT8NkvM36ST9TVpebb8ZzZuSwZn41doRBROwPa0WSj67rEGM0Mapr%2F2OLHdxRSa3xIlBqxhuQnzRm7uyG%2FFEomRDZKSlUJfJEQAShoy25hUtDJ5hFwNtYfV1dZ%2FL1V8kEeVOBW%2BETCuChVNw9keT6LF1fuUK8eqfpeFODtbAJBtTGdxM%2FztmwbSzpCW9%2FbI0N%2BI7XNfpyTLnFIVekzhIkx6c7zKC9ETkcOYeFnPLZM2BNoTu%2BPY%2Fs5wNlr62evvviDFh2qxE4L9MUI3PzB4SthHEHS5rs0n%2BRXJuhfCTweTIMy803s0O0KNt64Pau6uqqlp7ghw3ITDCXzKbABjqkAd0%2FpjWt0lfEXboMPmdqQmf3Qq7z6mArPjYmiS%2FA08T9DB9VnA5GYNUCw0ilEvoQ72rTv4VCxoasMehE5arXkcoLcAs%2FcXLKVgxgh8f%2FYDBUI2iHkb9ZYhbyGi1eQU2nNcBxOmS6K8yezSDw3kNpphzr%2FGtt5%2FmMQdV8KxqFX3SlbPGmsPV%2FTCtOoB1FaNqsnEhDHoOpIrIp6egWCytCj811c5Fy&X-Amz-Signature=48f1a688c14dbfb46db1749d4bebed67ea977e4279af76391ea8ca43444e3780&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
