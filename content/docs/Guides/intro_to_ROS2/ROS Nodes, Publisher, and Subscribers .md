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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWU5XX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGimMSxjdcd8iKLJgh%2FyOqwc3H4rfy7R4QUVuM3G%2BUdEAiAK3yL1Yktsm6dRb2t%2FDaEK6ngwrWXFnwJPIPpLIfdmOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYUFlTM%2BbiE%2Bs0trKtwDRVZLL5mbKiwZywNdULms4GdEowkzfGB8%2BwBjuJ020N2r0Ql0IEQlaPGpUwQH1aA0J9ayJLcbLtxbLMy9NeBHdnweLhLxRpGNAa9afy3v4VGfc3D1pdnlakZJkVK3RtqdaOwPOOnr%2BeawnxCw2%2BBag2TcCAdR3X6cqOMI2DyR%2BpUHsfOMWy8fxDr%2B1ZBX%2F6%2Bk2z6pYADQi0binoB0AWA8Vgtt8eISp9VytQHOYEKw25yo3ZkhGwY5333OHv46FHi5qSFn%2BeJMcxVt6UUASGPnGa8uLECXVPkc8pfqXMdx4z3kXikCw6o1gpFjkF3EyMs8OmOqXvWd8Y%2FAmQlLk6ErCVcyY0IXCr34j5U4hSWDuj5ny%2F%2BydBDVmYx3fXOx06Pbm5RC7jGxoxwe%2FxU4VTHZr95VWcDIu9dmFS7ZfvGhmWZUxzZ1gssSspBp3WEZwmw2kwv%2BySZWRvYJiFasJ0xu4uG016%2BG362aPxTJnK2qZYNPDmY5May%2BflkcDbW%2FtMr4LwhtyZ3hkHcw5ir7BgBVCs%2FCCuNSXuAaK%2FolApK2k8F8DEqBG1TxK3LVW%2FRxzpfsZ981Jka8hrtMYt0QflLQaXsw2drwF4vr2cDws4ef4QKAz9pYDkPEZ5iRAOowrbKWwgY6pgFlxRjx8sNy0par1%2Fivycod6A7HQCrStwLRom2%2Fs7HVo3JX%2FV%2BrxZYqAm7LmcuiHJ15axSjKndTBMILklZYGTNYj8FynzDb8epN%2BZZnL0Oa3FopbMlz36Rw79WKkkGB3oOO%2Bd1la%2F%2BfQSfjHCZbLDLaduIET23FzLNL9hZ8mLIX62zfw8uBXxAX3Iuk7lTo4ShhSfGGyFMYAoV7XZ0uOk5N5nvJ5yLZ&X-Amz-Signature=0121f29a8b00aedfd5337c9715b0c6cfb21a47b6012460b7764474058972a93d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWU5XX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGimMSxjdcd8iKLJgh%2FyOqwc3H4rfy7R4QUVuM3G%2BUdEAiAK3yL1Yktsm6dRb2t%2FDaEK6ngwrWXFnwJPIPpLIfdmOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYUFlTM%2BbiE%2Bs0trKtwDRVZLL5mbKiwZywNdULms4GdEowkzfGB8%2BwBjuJ020N2r0Ql0IEQlaPGpUwQH1aA0J9ayJLcbLtxbLMy9NeBHdnweLhLxRpGNAa9afy3v4VGfc3D1pdnlakZJkVK3RtqdaOwPOOnr%2BeawnxCw2%2BBag2TcCAdR3X6cqOMI2DyR%2BpUHsfOMWy8fxDr%2B1ZBX%2F6%2Bk2z6pYADQi0binoB0AWA8Vgtt8eISp9VytQHOYEKw25yo3ZkhGwY5333OHv46FHi5qSFn%2BeJMcxVt6UUASGPnGa8uLECXVPkc8pfqXMdx4z3kXikCw6o1gpFjkF3EyMs8OmOqXvWd8Y%2FAmQlLk6ErCVcyY0IXCr34j5U4hSWDuj5ny%2F%2BydBDVmYx3fXOx06Pbm5RC7jGxoxwe%2FxU4VTHZr95VWcDIu9dmFS7ZfvGhmWZUxzZ1gssSspBp3WEZwmw2kwv%2BySZWRvYJiFasJ0xu4uG016%2BG362aPxTJnK2qZYNPDmY5May%2BflkcDbW%2FtMr4LwhtyZ3hkHcw5ir7BgBVCs%2FCCuNSXuAaK%2FolApK2k8F8DEqBG1TxK3LVW%2FRxzpfsZ981Jka8hrtMYt0QflLQaXsw2drwF4vr2cDws4ef4QKAz9pYDkPEZ5iRAOowrbKWwgY6pgFlxRjx8sNy0par1%2Fivycod6A7HQCrStwLRom2%2Fs7HVo3JX%2FV%2BrxZYqAm7LmcuiHJ15axSjKndTBMILklZYGTNYj8FynzDb8epN%2BZZnL0Oa3FopbMlz36Rw79WKkkGB3oOO%2Bd1la%2F%2BfQSfjHCZbLDLaduIET23FzLNL9hZ8mLIX62zfw8uBXxAX3Iuk7lTo4ShhSfGGyFMYAoV7XZ0uOk5N5nvJ5yLZ&X-Amz-Signature=9c5dcdeef3b29c270f35bd9237a9fbe11117241a8c6c7eb5740ae3ba8687ff9c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWU5XX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGimMSxjdcd8iKLJgh%2FyOqwc3H4rfy7R4QUVuM3G%2BUdEAiAK3yL1Yktsm6dRb2t%2FDaEK6ngwrWXFnwJPIPpLIfdmOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYUFlTM%2BbiE%2Bs0trKtwDRVZLL5mbKiwZywNdULms4GdEowkzfGB8%2BwBjuJ020N2r0Ql0IEQlaPGpUwQH1aA0J9ayJLcbLtxbLMy9NeBHdnweLhLxRpGNAa9afy3v4VGfc3D1pdnlakZJkVK3RtqdaOwPOOnr%2BeawnxCw2%2BBag2TcCAdR3X6cqOMI2DyR%2BpUHsfOMWy8fxDr%2B1ZBX%2F6%2Bk2z6pYADQi0binoB0AWA8Vgtt8eISp9VytQHOYEKw25yo3ZkhGwY5333OHv46FHi5qSFn%2BeJMcxVt6UUASGPnGa8uLECXVPkc8pfqXMdx4z3kXikCw6o1gpFjkF3EyMs8OmOqXvWd8Y%2FAmQlLk6ErCVcyY0IXCr34j5U4hSWDuj5ny%2F%2BydBDVmYx3fXOx06Pbm5RC7jGxoxwe%2FxU4VTHZr95VWcDIu9dmFS7ZfvGhmWZUxzZ1gssSspBp3WEZwmw2kwv%2BySZWRvYJiFasJ0xu4uG016%2BG362aPxTJnK2qZYNPDmY5May%2BflkcDbW%2FtMr4LwhtyZ3hkHcw5ir7BgBVCs%2FCCuNSXuAaK%2FolApK2k8F8DEqBG1TxK3LVW%2FRxzpfsZ981Jka8hrtMYt0QflLQaXsw2drwF4vr2cDws4ef4QKAz9pYDkPEZ5iRAOowrbKWwgY6pgFlxRjx8sNy0par1%2Fivycod6A7HQCrStwLRom2%2Fs7HVo3JX%2FV%2BrxZYqAm7LmcuiHJ15axSjKndTBMILklZYGTNYj8FynzDb8epN%2BZZnL0Oa3FopbMlz36Rw79WKkkGB3oOO%2Bd1la%2F%2BfQSfjHCZbLDLaduIET23FzLNL9hZ8mLIX62zfw8uBXxAX3Iuk7lTo4ShhSfGGyFMYAoV7XZ0uOk5N5nvJ5yLZ&X-Amz-Signature=7bbb4ee472b1416b1e3887bbf735a204b1c82cf2736960aa0f2d8ac04c41e383&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWU5XX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGimMSxjdcd8iKLJgh%2FyOqwc3H4rfy7R4QUVuM3G%2BUdEAiAK3yL1Yktsm6dRb2t%2FDaEK6ngwrWXFnwJPIPpLIfdmOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYUFlTM%2BbiE%2Bs0trKtwDRVZLL5mbKiwZywNdULms4GdEowkzfGB8%2BwBjuJ020N2r0Ql0IEQlaPGpUwQH1aA0J9ayJLcbLtxbLMy9NeBHdnweLhLxRpGNAa9afy3v4VGfc3D1pdnlakZJkVK3RtqdaOwPOOnr%2BeawnxCw2%2BBag2TcCAdR3X6cqOMI2DyR%2BpUHsfOMWy8fxDr%2B1ZBX%2F6%2Bk2z6pYADQi0binoB0AWA8Vgtt8eISp9VytQHOYEKw25yo3ZkhGwY5333OHv46FHi5qSFn%2BeJMcxVt6UUASGPnGa8uLECXVPkc8pfqXMdx4z3kXikCw6o1gpFjkF3EyMs8OmOqXvWd8Y%2FAmQlLk6ErCVcyY0IXCr34j5U4hSWDuj5ny%2F%2BydBDVmYx3fXOx06Pbm5RC7jGxoxwe%2FxU4VTHZr95VWcDIu9dmFS7ZfvGhmWZUxzZ1gssSspBp3WEZwmw2kwv%2BySZWRvYJiFasJ0xu4uG016%2BG362aPxTJnK2qZYNPDmY5May%2BflkcDbW%2FtMr4LwhtyZ3hkHcw5ir7BgBVCs%2FCCuNSXuAaK%2FolApK2k8F8DEqBG1TxK3LVW%2FRxzpfsZ981Jka8hrtMYt0QflLQaXsw2drwF4vr2cDws4ef4QKAz9pYDkPEZ5iRAOowrbKWwgY6pgFlxRjx8sNy0par1%2Fivycod6A7HQCrStwLRom2%2Fs7HVo3JX%2FV%2BrxZYqAm7LmcuiHJ15axSjKndTBMILklZYGTNYj8FynzDb8epN%2BZZnL0Oa3FopbMlz36Rw79WKkkGB3oOO%2Bd1la%2F%2BfQSfjHCZbLDLaduIET23FzLNL9hZ8mLIX62zfw8uBXxAX3Iuk7lTo4ShhSfGGyFMYAoV7XZ0uOk5N5nvJ5yLZ&X-Amz-Signature=1586e4a1df873be4925322327dd31f9579855d0ae17e34aae09432875a79a976&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWU5XX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGimMSxjdcd8iKLJgh%2FyOqwc3H4rfy7R4QUVuM3G%2BUdEAiAK3yL1Yktsm6dRb2t%2FDaEK6ngwrWXFnwJPIPpLIfdmOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYUFlTM%2BbiE%2Bs0trKtwDRVZLL5mbKiwZywNdULms4GdEowkzfGB8%2BwBjuJ020N2r0Ql0IEQlaPGpUwQH1aA0J9ayJLcbLtxbLMy9NeBHdnweLhLxRpGNAa9afy3v4VGfc3D1pdnlakZJkVK3RtqdaOwPOOnr%2BeawnxCw2%2BBag2TcCAdR3X6cqOMI2DyR%2BpUHsfOMWy8fxDr%2B1ZBX%2F6%2Bk2z6pYADQi0binoB0AWA8Vgtt8eISp9VytQHOYEKw25yo3ZkhGwY5333OHv46FHi5qSFn%2BeJMcxVt6UUASGPnGa8uLECXVPkc8pfqXMdx4z3kXikCw6o1gpFjkF3EyMs8OmOqXvWd8Y%2FAmQlLk6ErCVcyY0IXCr34j5U4hSWDuj5ny%2F%2BydBDVmYx3fXOx06Pbm5RC7jGxoxwe%2FxU4VTHZr95VWcDIu9dmFS7ZfvGhmWZUxzZ1gssSspBp3WEZwmw2kwv%2BySZWRvYJiFasJ0xu4uG016%2BG362aPxTJnK2qZYNPDmY5May%2BflkcDbW%2FtMr4LwhtyZ3hkHcw5ir7BgBVCs%2FCCuNSXuAaK%2FolApK2k8F8DEqBG1TxK3LVW%2FRxzpfsZ981Jka8hrtMYt0QflLQaXsw2drwF4vr2cDws4ef4QKAz9pYDkPEZ5iRAOowrbKWwgY6pgFlxRjx8sNy0par1%2Fivycod6A7HQCrStwLRom2%2Fs7HVo3JX%2FV%2BrxZYqAm7LmcuiHJ15axSjKndTBMILklZYGTNYj8FynzDb8epN%2BZZnL0Oa3FopbMlz36Rw79WKkkGB3oOO%2Bd1la%2F%2BfQSfjHCZbLDLaduIET23FzLNL9hZ8mLIX62zfw8uBXxAX3Iuk7lTo4ShhSfGGyFMYAoV7XZ0uOk5N5nvJ5yLZ&X-Amz-Signature=c941a3704c277a411d6e4b707ea73cb6524626acd7dc2de2bdf584895b3a636f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWU5XX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGimMSxjdcd8iKLJgh%2FyOqwc3H4rfy7R4QUVuM3G%2BUdEAiAK3yL1Yktsm6dRb2t%2FDaEK6ngwrWXFnwJPIPpLIfdmOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYUFlTM%2BbiE%2Bs0trKtwDRVZLL5mbKiwZywNdULms4GdEowkzfGB8%2BwBjuJ020N2r0Ql0IEQlaPGpUwQH1aA0J9ayJLcbLtxbLMy9NeBHdnweLhLxRpGNAa9afy3v4VGfc3D1pdnlakZJkVK3RtqdaOwPOOnr%2BeawnxCw2%2BBag2TcCAdR3X6cqOMI2DyR%2BpUHsfOMWy8fxDr%2B1ZBX%2F6%2Bk2z6pYADQi0binoB0AWA8Vgtt8eISp9VytQHOYEKw25yo3ZkhGwY5333OHv46FHi5qSFn%2BeJMcxVt6UUASGPnGa8uLECXVPkc8pfqXMdx4z3kXikCw6o1gpFjkF3EyMs8OmOqXvWd8Y%2FAmQlLk6ErCVcyY0IXCr34j5U4hSWDuj5ny%2F%2BydBDVmYx3fXOx06Pbm5RC7jGxoxwe%2FxU4VTHZr95VWcDIu9dmFS7ZfvGhmWZUxzZ1gssSspBp3WEZwmw2kwv%2BySZWRvYJiFasJ0xu4uG016%2BG362aPxTJnK2qZYNPDmY5May%2BflkcDbW%2FtMr4LwhtyZ3hkHcw5ir7BgBVCs%2FCCuNSXuAaK%2FolApK2k8F8DEqBG1TxK3LVW%2FRxzpfsZ981Jka8hrtMYt0QflLQaXsw2drwF4vr2cDws4ef4QKAz9pYDkPEZ5iRAOowrbKWwgY6pgFlxRjx8sNy0par1%2Fivycod6A7HQCrStwLRom2%2Fs7HVo3JX%2FV%2BrxZYqAm7LmcuiHJ15axSjKndTBMILklZYGTNYj8FynzDb8epN%2BZZnL0Oa3FopbMlz36Rw79WKkkGB3oOO%2Bd1la%2F%2BfQSfjHCZbLDLaduIET23FzLNL9hZ8mLIX62zfw8uBXxAX3Iuk7lTo4ShhSfGGyFMYAoV7XZ0uOk5N5nvJ5yLZ&X-Amz-Signature=77d7269a23ae48c013cc84d1b4124e82a321f6b97e15d15d4705969181a9385b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWU5XX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGimMSxjdcd8iKLJgh%2FyOqwc3H4rfy7R4QUVuM3G%2BUdEAiAK3yL1Yktsm6dRb2t%2FDaEK6ngwrWXFnwJPIPpLIfdmOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYUFlTM%2BbiE%2Bs0trKtwDRVZLL5mbKiwZywNdULms4GdEowkzfGB8%2BwBjuJ020N2r0Ql0IEQlaPGpUwQH1aA0J9ayJLcbLtxbLMy9NeBHdnweLhLxRpGNAa9afy3v4VGfc3D1pdnlakZJkVK3RtqdaOwPOOnr%2BeawnxCw2%2BBag2TcCAdR3X6cqOMI2DyR%2BpUHsfOMWy8fxDr%2B1ZBX%2F6%2Bk2z6pYADQi0binoB0AWA8Vgtt8eISp9VytQHOYEKw25yo3ZkhGwY5333OHv46FHi5qSFn%2BeJMcxVt6UUASGPnGa8uLECXVPkc8pfqXMdx4z3kXikCw6o1gpFjkF3EyMs8OmOqXvWd8Y%2FAmQlLk6ErCVcyY0IXCr34j5U4hSWDuj5ny%2F%2BydBDVmYx3fXOx06Pbm5RC7jGxoxwe%2FxU4VTHZr95VWcDIu9dmFS7ZfvGhmWZUxzZ1gssSspBp3WEZwmw2kwv%2BySZWRvYJiFasJ0xu4uG016%2BG362aPxTJnK2qZYNPDmY5May%2BflkcDbW%2FtMr4LwhtyZ3hkHcw5ir7BgBVCs%2FCCuNSXuAaK%2FolApK2k8F8DEqBG1TxK3LVW%2FRxzpfsZ981Jka8hrtMYt0QflLQaXsw2drwF4vr2cDws4ef4QKAz9pYDkPEZ5iRAOowrbKWwgY6pgFlxRjx8sNy0par1%2Fivycod6A7HQCrStwLRom2%2Fs7HVo3JX%2FV%2BrxZYqAm7LmcuiHJ15axSjKndTBMILklZYGTNYj8FynzDb8epN%2BZZnL0Oa3FopbMlz36Rw79WKkkGB3oOO%2Bd1la%2F%2BfQSfjHCZbLDLaduIET23FzLNL9hZ8mLIX62zfw8uBXxAX3Iuk7lTo4ShhSfGGyFMYAoV7XZ0uOk5N5nvJ5yLZ&X-Amz-Signature=221ef97b8a1aebf4bbdad1484a87215eeaafdc145df15fb38c5fb886e70e83ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSWU5XX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T170549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGimMSxjdcd8iKLJgh%2FyOqwc3H4rfy7R4QUVuM3G%2BUdEAiAK3yL1Yktsm6dRb2t%2FDaEK6ngwrWXFnwJPIPpLIfdmOCqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYUFlTM%2BbiE%2Bs0trKtwDRVZLL5mbKiwZywNdULms4GdEowkzfGB8%2BwBjuJ020N2r0Ql0IEQlaPGpUwQH1aA0J9ayJLcbLtxbLMy9NeBHdnweLhLxRpGNAa9afy3v4VGfc3D1pdnlakZJkVK3RtqdaOwPOOnr%2BeawnxCw2%2BBag2TcCAdR3X6cqOMI2DyR%2BpUHsfOMWy8fxDr%2B1ZBX%2F6%2Bk2z6pYADQi0binoB0AWA8Vgtt8eISp9VytQHOYEKw25yo3ZkhGwY5333OHv46FHi5qSFn%2BeJMcxVt6UUASGPnGa8uLECXVPkc8pfqXMdx4z3kXikCw6o1gpFjkF3EyMs8OmOqXvWd8Y%2FAmQlLk6ErCVcyY0IXCr34j5U4hSWDuj5ny%2F%2BydBDVmYx3fXOx06Pbm5RC7jGxoxwe%2FxU4VTHZr95VWcDIu9dmFS7ZfvGhmWZUxzZ1gssSspBp3WEZwmw2kwv%2BySZWRvYJiFasJ0xu4uG016%2BG362aPxTJnK2qZYNPDmY5May%2BflkcDbW%2FtMr4LwhtyZ3hkHcw5ir7BgBVCs%2FCCuNSXuAaK%2FolApK2k8F8DEqBG1TxK3LVW%2FRxzpfsZ981Jka8hrtMYt0QflLQaXsw2drwF4vr2cDws4ef4QKAz9pYDkPEZ5iRAOowrbKWwgY6pgFlxRjx8sNy0par1%2Fivycod6A7HQCrStwLRom2%2Fs7HVo3JX%2FV%2BrxZYqAm7LmcuiHJ15axSjKndTBMILklZYGTNYj8FynzDb8epN%2BZZnL0Oa3FopbMlz36Rw79WKkkGB3oOO%2Bd1la%2F%2BfQSfjHCZbLDLaduIET23FzLNL9hZ8mLIX62zfw8uBXxAX3Iuk7lTo4ShhSfGGyFMYAoV7XZ0uOk5N5nvJ5yLZ&X-Amz-Signature=c5e9372ba3320b1e4fa7f189e3583755259e0da9c50096a741a1248e3a43c1b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
