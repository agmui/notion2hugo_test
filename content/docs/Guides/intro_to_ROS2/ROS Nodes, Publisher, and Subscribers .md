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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKR3VO3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBv9yPly%2B%2FlL0lfJsh0GsVrAPal7gejg9Qs5bLJ14dWSAiEAs%2B5lZtNtLaF5Qy2oNfti3HfCm40mJEnlz%2BBWwN8hBt4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4VLuphOCJG0bGH%2BSrcA2cgw2n0c8B5a7kSO2P4hcA%2BPML6K3UVf2t3xoEW2C4n3ZDG1o%2F32bONyPjkG9%2BZGtoqkmPExoMH8W1HaoedklGs%2BfhfD%2B0HFJDgR3MlElyBos2dPmNolm%2F97H8C%2FBE5%2B8zLex7dXTUb5iK3hbDLeXUCYvrutgtU4XXxoEd3DMItXI%2Br7Tw9Iod6RWor4prHa%2F%2Bxe%2F5NXV921PpKMsk1u2mPuWVF1sORxmASurFccLFYZjav%2Fao4WBrBrcic39uVbW%2Bt04422k25dnIjpjqVVCuMILxrg53Du%2F%2FnMulssRVKxCdsiYcyulZvZdfLIUMQIoUlmVH8hWJhoWwfz9g%2FocbpXZMwaOkkB0riWBo3HfiqXq122hdIXLVv1y74IzaDZjZXe%2F1%2BYch2%2FdnWdbuwZj9SGjlpm2DpVv3YKnasUbzcbkTzz8GU3r69Fbfw06HC0DkTeDv8Eib8omw7yaEBmqb%2BsBlmova1h6FtrPQVhM5Z3SKlUJ%2BYpwf3%2FC4vph6tKwhDTXgfNrklw3GnrdnZLV2UPod9iVG0z8cdzLIkrbkVDKodco4wXV9mTUfk9cm0CIeLX%2F1zXZEyoALgjFme%2BktyIDk6B1lM2cBFdk13cDHWFfoOS0N%2FLiluFnj6MInWnMAGOqUBdBdtqcs6xj2kxL3YN0pRY%2BV%2BQ7xVP2QHvqbbPHocbgjO%2BMeMBlC7hT%2FVRBjTyln1lvfmbzuPbDjOSm%2Bz28oP4BddKvmzh%2FtcnFiNvUMk6%2FGgbcCIvC2WfOKkd16Aa0g6Po52AUIKYw65j9WkXXh6MjYc%2BaaD9joMe4rHgmRTFoUOJofnfOf0DC4QhYKKbnQqzAOJvnBF3Nf2kORQGOHOycTmHzdf&X-Amz-Signature=6c109a32e29844216ecd2e6fbd27801a53fbcfba97ed4ed17dab2887218d994b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKR3VO3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBv9yPly%2B%2FlL0lfJsh0GsVrAPal7gejg9Qs5bLJ14dWSAiEAs%2B5lZtNtLaF5Qy2oNfti3HfCm40mJEnlz%2BBWwN8hBt4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4VLuphOCJG0bGH%2BSrcA2cgw2n0c8B5a7kSO2P4hcA%2BPML6K3UVf2t3xoEW2C4n3ZDG1o%2F32bONyPjkG9%2BZGtoqkmPExoMH8W1HaoedklGs%2BfhfD%2B0HFJDgR3MlElyBos2dPmNolm%2F97H8C%2FBE5%2B8zLex7dXTUb5iK3hbDLeXUCYvrutgtU4XXxoEd3DMItXI%2Br7Tw9Iod6RWor4prHa%2F%2Bxe%2F5NXV921PpKMsk1u2mPuWVF1sORxmASurFccLFYZjav%2Fao4WBrBrcic39uVbW%2Bt04422k25dnIjpjqVVCuMILxrg53Du%2F%2FnMulssRVKxCdsiYcyulZvZdfLIUMQIoUlmVH8hWJhoWwfz9g%2FocbpXZMwaOkkB0riWBo3HfiqXq122hdIXLVv1y74IzaDZjZXe%2F1%2BYch2%2FdnWdbuwZj9SGjlpm2DpVv3YKnasUbzcbkTzz8GU3r69Fbfw06HC0DkTeDv8Eib8omw7yaEBmqb%2BsBlmova1h6FtrPQVhM5Z3SKlUJ%2BYpwf3%2FC4vph6tKwhDTXgfNrklw3GnrdnZLV2UPod9iVG0z8cdzLIkrbkVDKodco4wXV9mTUfk9cm0CIeLX%2F1zXZEyoALgjFme%2BktyIDk6B1lM2cBFdk13cDHWFfoOS0N%2FLiluFnj6MInWnMAGOqUBdBdtqcs6xj2kxL3YN0pRY%2BV%2BQ7xVP2QHvqbbPHocbgjO%2BMeMBlC7hT%2FVRBjTyln1lvfmbzuPbDjOSm%2Bz28oP4BddKvmzh%2FtcnFiNvUMk6%2FGgbcCIvC2WfOKkd16Aa0g6Po52AUIKYw65j9WkXXh6MjYc%2BaaD9joMe4rHgmRTFoUOJofnfOf0DC4QhYKKbnQqzAOJvnBF3Nf2kORQGOHOycTmHzdf&X-Amz-Signature=d0c81ff3e6c782246c95cc7a3378e4c465ac4bcf2f0b606f410a10613908814c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKR3VO3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBv9yPly%2B%2FlL0lfJsh0GsVrAPal7gejg9Qs5bLJ14dWSAiEAs%2B5lZtNtLaF5Qy2oNfti3HfCm40mJEnlz%2BBWwN8hBt4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4VLuphOCJG0bGH%2BSrcA2cgw2n0c8B5a7kSO2P4hcA%2BPML6K3UVf2t3xoEW2C4n3ZDG1o%2F32bONyPjkG9%2BZGtoqkmPExoMH8W1HaoedklGs%2BfhfD%2B0HFJDgR3MlElyBos2dPmNolm%2F97H8C%2FBE5%2B8zLex7dXTUb5iK3hbDLeXUCYvrutgtU4XXxoEd3DMItXI%2Br7Tw9Iod6RWor4prHa%2F%2Bxe%2F5NXV921PpKMsk1u2mPuWVF1sORxmASurFccLFYZjav%2Fao4WBrBrcic39uVbW%2Bt04422k25dnIjpjqVVCuMILxrg53Du%2F%2FnMulssRVKxCdsiYcyulZvZdfLIUMQIoUlmVH8hWJhoWwfz9g%2FocbpXZMwaOkkB0riWBo3HfiqXq122hdIXLVv1y74IzaDZjZXe%2F1%2BYch2%2FdnWdbuwZj9SGjlpm2DpVv3YKnasUbzcbkTzz8GU3r69Fbfw06HC0DkTeDv8Eib8omw7yaEBmqb%2BsBlmova1h6FtrPQVhM5Z3SKlUJ%2BYpwf3%2FC4vph6tKwhDTXgfNrklw3GnrdnZLV2UPod9iVG0z8cdzLIkrbkVDKodco4wXV9mTUfk9cm0CIeLX%2F1zXZEyoALgjFme%2BktyIDk6B1lM2cBFdk13cDHWFfoOS0N%2FLiluFnj6MInWnMAGOqUBdBdtqcs6xj2kxL3YN0pRY%2BV%2BQ7xVP2QHvqbbPHocbgjO%2BMeMBlC7hT%2FVRBjTyln1lvfmbzuPbDjOSm%2Bz28oP4BddKvmzh%2FtcnFiNvUMk6%2FGgbcCIvC2WfOKkd16Aa0g6Po52AUIKYw65j9WkXXh6MjYc%2BaaD9joMe4rHgmRTFoUOJofnfOf0DC4QhYKKbnQqzAOJvnBF3Nf2kORQGOHOycTmHzdf&X-Amz-Signature=f9a9f625ac66a757a42221e4810a14c2665d1ebeb8a40bf5d4a37b3a6eb09176&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKR3VO3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBv9yPly%2B%2FlL0lfJsh0GsVrAPal7gejg9Qs5bLJ14dWSAiEAs%2B5lZtNtLaF5Qy2oNfti3HfCm40mJEnlz%2BBWwN8hBt4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4VLuphOCJG0bGH%2BSrcA2cgw2n0c8B5a7kSO2P4hcA%2BPML6K3UVf2t3xoEW2C4n3ZDG1o%2F32bONyPjkG9%2BZGtoqkmPExoMH8W1HaoedklGs%2BfhfD%2B0HFJDgR3MlElyBos2dPmNolm%2F97H8C%2FBE5%2B8zLex7dXTUb5iK3hbDLeXUCYvrutgtU4XXxoEd3DMItXI%2Br7Tw9Iod6RWor4prHa%2F%2Bxe%2F5NXV921PpKMsk1u2mPuWVF1sORxmASurFccLFYZjav%2Fao4WBrBrcic39uVbW%2Bt04422k25dnIjpjqVVCuMILxrg53Du%2F%2FnMulssRVKxCdsiYcyulZvZdfLIUMQIoUlmVH8hWJhoWwfz9g%2FocbpXZMwaOkkB0riWBo3HfiqXq122hdIXLVv1y74IzaDZjZXe%2F1%2BYch2%2FdnWdbuwZj9SGjlpm2DpVv3YKnasUbzcbkTzz8GU3r69Fbfw06HC0DkTeDv8Eib8omw7yaEBmqb%2BsBlmova1h6FtrPQVhM5Z3SKlUJ%2BYpwf3%2FC4vph6tKwhDTXgfNrklw3GnrdnZLV2UPod9iVG0z8cdzLIkrbkVDKodco4wXV9mTUfk9cm0CIeLX%2F1zXZEyoALgjFme%2BktyIDk6B1lM2cBFdk13cDHWFfoOS0N%2FLiluFnj6MInWnMAGOqUBdBdtqcs6xj2kxL3YN0pRY%2BV%2BQ7xVP2QHvqbbPHocbgjO%2BMeMBlC7hT%2FVRBjTyln1lvfmbzuPbDjOSm%2Bz28oP4BddKvmzh%2FtcnFiNvUMk6%2FGgbcCIvC2WfOKkd16Aa0g6Po52AUIKYw65j9WkXXh6MjYc%2BaaD9joMe4rHgmRTFoUOJofnfOf0DC4QhYKKbnQqzAOJvnBF3Nf2kORQGOHOycTmHzdf&X-Amz-Signature=40bc4903e323cbebc06945c077866d1805841828601c5f05bcbe17332198072c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKR3VO3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBv9yPly%2B%2FlL0lfJsh0GsVrAPal7gejg9Qs5bLJ14dWSAiEAs%2B5lZtNtLaF5Qy2oNfti3HfCm40mJEnlz%2BBWwN8hBt4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4VLuphOCJG0bGH%2BSrcA2cgw2n0c8B5a7kSO2P4hcA%2BPML6K3UVf2t3xoEW2C4n3ZDG1o%2F32bONyPjkG9%2BZGtoqkmPExoMH8W1HaoedklGs%2BfhfD%2B0HFJDgR3MlElyBos2dPmNolm%2F97H8C%2FBE5%2B8zLex7dXTUb5iK3hbDLeXUCYvrutgtU4XXxoEd3DMItXI%2Br7Tw9Iod6RWor4prHa%2F%2Bxe%2F5NXV921PpKMsk1u2mPuWVF1sORxmASurFccLFYZjav%2Fao4WBrBrcic39uVbW%2Bt04422k25dnIjpjqVVCuMILxrg53Du%2F%2FnMulssRVKxCdsiYcyulZvZdfLIUMQIoUlmVH8hWJhoWwfz9g%2FocbpXZMwaOkkB0riWBo3HfiqXq122hdIXLVv1y74IzaDZjZXe%2F1%2BYch2%2FdnWdbuwZj9SGjlpm2DpVv3YKnasUbzcbkTzz8GU3r69Fbfw06HC0DkTeDv8Eib8omw7yaEBmqb%2BsBlmova1h6FtrPQVhM5Z3SKlUJ%2BYpwf3%2FC4vph6tKwhDTXgfNrklw3GnrdnZLV2UPod9iVG0z8cdzLIkrbkVDKodco4wXV9mTUfk9cm0CIeLX%2F1zXZEyoALgjFme%2BktyIDk6B1lM2cBFdk13cDHWFfoOS0N%2FLiluFnj6MInWnMAGOqUBdBdtqcs6xj2kxL3YN0pRY%2BV%2BQ7xVP2QHvqbbPHocbgjO%2BMeMBlC7hT%2FVRBjTyln1lvfmbzuPbDjOSm%2Bz28oP4BddKvmzh%2FtcnFiNvUMk6%2FGgbcCIvC2WfOKkd16Aa0g6Po52AUIKYw65j9WkXXh6MjYc%2BaaD9joMe4rHgmRTFoUOJofnfOf0DC4QhYKKbnQqzAOJvnBF3Nf2kORQGOHOycTmHzdf&X-Amz-Signature=c482df6bc8089dfa11c961c81306e991b830e190661c06dfdfcb6fdc1aedc44c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKR3VO3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBv9yPly%2B%2FlL0lfJsh0GsVrAPal7gejg9Qs5bLJ14dWSAiEAs%2B5lZtNtLaF5Qy2oNfti3HfCm40mJEnlz%2BBWwN8hBt4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4VLuphOCJG0bGH%2BSrcA2cgw2n0c8B5a7kSO2P4hcA%2BPML6K3UVf2t3xoEW2C4n3ZDG1o%2F32bONyPjkG9%2BZGtoqkmPExoMH8W1HaoedklGs%2BfhfD%2B0HFJDgR3MlElyBos2dPmNolm%2F97H8C%2FBE5%2B8zLex7dXTUb5iK3hbDLeXUCYvrutgtU4XXxoEd3DMItXI%2Br7Tw9Iod6RWor4prHa%2F%2Bxe%2F5NXV921PpKMsk1u2mPuWVF1sORxmASurFccLFYZjav%2Fao4WBrBrcic39uVbW%2Bt04422k25dnIjpjqVVCuMILxrg53Du%2F%2FnMulssRVKxCdsiYcyulZvZdfLIUMQIoUlmVH8hWJhoWwfz9g%2FocbpXZMwaOkkB0riWBo3HfiqXq122hdIXLVv1y74IzaDZjZXe%2F1%2BYch2%2FdnWdbuwZj9SGjlpm2DpVv3YKnasUbzcbkTzz8GU3r69Fbfw06HC0DkTeDv8Eib8omw7yaEBmqb%2BsBlmova1h6FtrPQVhM5Z3SKlUJ%2BYpwf3%2FC4vph6tKwhDTXgfNrklw3GnrdnZLV2UPod9iVG0z8cdzLIkrbkVDKodco4wXV9mTUfk9cm0CIeLX%2F1zXZEyoALgjFme%2BktyIDk6B1lM2cBFdk13cDHWFfoOS0N%2FLiluFnj6MInWnMAGOqUBdBdtqcs6xj2kxL3YN0pRY%2BV%2BQ7xVP2QHvqbbPHocbgjO%2BMeMBlC7hT%2FVRBjTyln1lvfmbzuPbDjOSm%2Bz28oP4BddKvmzh%2FtcnFiNvUMk6%2FGgbcCIvC2WfOKkd16Aa0g6Po52AUIKYw65j9WkXXh6MjYc%2BaaD9joMe4rHgmRTFoUOJofnfOf0DC4QhYKKbnQqzAOJvnBF3Nf2kORQGOHOycTmHzdf&X-Amz-Signature=7e728c9ac7633c8642fe74c5ad1d1a2e526a44d4d04c2334f0aee7bc51e9eaf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKR3VO3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBv9yPly%2B%2FlL0lfJsh0GsVrAPal7gejg9Qs5bLJ14dWSAiEAs%2B5lZtNtLaF5Qy2oNfti3HfCm40mJEnlz%2BBWwN8hBt4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4VLuphOCJG0bGH%2BSrcA2cgw2n0c8B5a7kSO2P4hcA%2BPML6K3UVf2t3xoEW2C4n3ZDG1o%2F32bONyPjkG9%2BZGtoqkmPExoMH8W1HaoedklGs%2BfhfD%2B0HFJDgR3MlElyBos2dPmNolm%2F97H8C%2FBE5%2B8zLex7dXTUb5iK3hbDLeXUCYvrutgtU4XXxoEd3DMItXI%2Br7Tw9Iod6RWor4prHa%2F%2Bxe%2F5NXV921PpKMsk1u2mPuWVF1sORxmASurFccLFYZjav%2Fao4WBrBrcic39uVbW%2Bt04422k25dnIjpjqVVCuMILxrg53Du%2F%2FnMulssRVKxCdsiYcyulZvZdfLIUMQIoUlmVH8hWJhoWwfz9g%2FocbpXZMwaOkkB0riWBo3HfiqXq122hdIXLVv1y74IzaDZjZXe%2F1%2BYch2%2FdnWdbuwZj9SGjlpm2DpVv3YKnasUbzcbkTzz8GU3r69Fbfw06HC0DkTeDv8Eib8omw7yaEBmqb%2BsBlmova1h6FtrPQVhM5Z3SKlUJ%2BYpwf3%2FC4vph6tKwhDTXgfNrklw3GnrdnZLV2UPod9iVG0z8cdzLIkrbkVDKodco4wXV9mTUfk9cm0CIeLX%2F1zXZEyoALgjFme%2BktyIDk6B1lM2cBFdk13cDHWFfoOS0N%2FLiluFnj6MInWnMAGOqUBdBdtqcs6xj2kxL3YN0pRY%2BV%2BQ7xVP2QHvqbbPHocbgjO%2BMeMBlC7hT%2FVRBjTyln1lvfmbzuPbDjOSm%2Bz28oP4BddKvmzh%2FtcnFiNvUMk6%2FGgbcCIvC2WfOKkd16Aa0g6Po52AUIKYw65j9WkXXh6MjYc%2BaaD9joMe4rHgmRTFoUOJofnfOf0DC4QhYKKbnQqzAOJvnBF3Nf2kORQGOHOycTmHzdf&X-Amz-Signature=40bc26379dcdbe104b1fe66dad9f350e7769055bebb8a5176422dbc2e35bc2c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKR3VO3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIBv9yPly%2B%2FlL0lfJsh0GsVrAPal7gejg9Qs5bLJ14dWSAiEAs%2B5lZtNtLaF5Qy2oNfti3HfCm40mJEnlz%2BBWwN8hBt4qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4VLuphOCJG0bGH%2BSrcA2cgw2n0c8B5a7kSO2P4hcA%2BPML6K3UVf2t3xoEW2C4n3ZDG1o%2F32bONyPjkG9%2BZGtoqkmPExoMH8W1HaoedklGs%2BfhfD%2B0HFJDgR3MlElyBos2dPmNolm%2F97H8C%2FBE5%2B8zLex7dXTUb5iK3hbDLeXUCYvrutgtU4XXxoEd3DMItXI%2Br7Tw9Iod6RWor4prHa%2F%2Bxe%2F5NXV921PpKMsk1u2mPuWVF1sORxmASurFccLFYZjav%2Fao4WBrBrcic39uVbW%2Bt04422k25dnIjpjqVVCuMILxrg53Du%2F%2FnMulssRVKxCdsiYcyulZvZdfLIUMQIoUlmVH8hWJhoWwfz9g%2FocbpXZMwaOkkB0riWBo3HfiqXq122hdIXLVv1y74IzaDZjZXe%2F1%2BYch2%2FdnWdbuwZj9SGjlpm2DpVv3YKnasUbzcbkTzz8GU3r69Fbfw06HC0DkTeDv8Eib8omw7yaEBmqb%2BsBlmova1h6FtrPQVhM5Z3SKlUJ%2BYpwf3%2FC4vph6tKwhDTXgfNrklw3GnrdnZLV2UPod9iVG0z8cdzLIkrbkVDKodco4wXV9mTUfk9cm0CIeLX%2F1zXZEyoALgjFme%2BktyIDk6B1lM2cBFdk13cDHWFfoOS0N%2FLiluFnj6MInWnMAGOqUBdBdtqcs6xj2kxL3YN0pRY%2BV%2BQ7xVP2QHvqbbPHocbgjO%2BMeMBlC7hT%2FVRBjTyln1lvfmbzuPbDjOSm%2Bz28oP4BddKvmzh%2FtcnFiNvUMk6%2FGgbcCIvC2WfOKkd16Aa0g6Po52AUIKYw65j9WkXXh6MjYc%2BaaD9joMe4rHgmRTFoUOJofnfOf0DC4QhYKKbnQqzAOJvnBF3Nf2kORQGOHOycTmHzdf&X-Amz-Signature=5e152946c30e60be7e0c42ecca07b73848ea622cf4ea9b58d5c2dae646212fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
