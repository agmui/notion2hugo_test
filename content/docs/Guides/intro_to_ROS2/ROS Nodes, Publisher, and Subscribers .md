---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOZD2ONU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3mHCLIky855BN7vkGPmws0NGxsXq6irwi3a90DfnJSwIgILAhb6IaF0pnrvdsjK6ZBAOSkdsuwHBAkH%2FKVoDgpCIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFbwXdgfyYq5Wc7MVyrcA5OK7y8NkIOlii48Z1zaNYWMSclKIfS3xH2lJuhzV9nlcYIWkP8RtMEgc9Yzoiz0nijHWAdokEfZqA5BzR%2F68OP38RBiIWiPrvz0B70o0ILXWQluAEyIKkScZXHNet8rHMRWoeVrQ%2F%2BNst2JTx%2B3Uulf0GZUw7KEZ1tzGnjpkHBdlW9syausV6SfVzS5WDMToa3JK9UpeCnjEjVvChoS29Jaj13zNG6a2Gpf6SYfB6e6NYZ2vIUInyibr%2BsgGvEbNXRlVJB0I%2FbbsJgfeYi9f9O%2Bn7ZfY38ItH4viwZRin4Xeo5kXOOAR8BXbiEo2bwhpOGlePPbEPIPfjtWdmjY0exbJnMVIEpa1LnlMS80uzypXAgYjTgqq1MdeMWarFavRa1dJAoH3Mhs83PmkcAkosk7P6jI0pRxJ1P%2FxNe%2Fs1NrFwAj9ZLe8E5A9BUSh%2Fd7IVMCpbg6Q3k6Sktq2n2Ha7k2rmOfE0Yx4qFTAZDCX4rXHuOhon07R41yr6xBGVeR%2F0RCQtIv%2FUvTRH7p%2F7tUXOXRmeEfCXwAlj9JIpGDKssYNCdoJD9UB0lGAiKEf5jHws8qq785fj3cHDGephuhpVYUdmtjrpJgSyzmFfw1%2FsMuB5eE5ucuajnPBdS9MNiAusQGOqUBKbGPlrXhzyY2Fm9HZEULHS2La%2BaeH8WqfJRmf%2FeHRq2XlL%2FpTfNApm9Rg0GC7PEx5b6Cr%2B6kOejQI76MY3E2iApr43Be5O0r5xZ3VojDwKNnp9zRVMkxVyNebIMznDQIKIi38HdXeSvvPkFMZXCkGuIkFtFVAl%2BzS5qxVReHgLyxvZd%2B%2BdanEiriUM4LYttWfDxhtGK%2B24hU2vF2Pfj2TpJIIMl9&X-Amz-Signature=85bd5fbae57afe13c4328896ecde87a76b44f2f811d9ce8d21e9d665530a8e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOZD2ONU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3mHCLIky855BN7vkGPmws0NGxsXq6irwi3a90DfnJSwIgILAhb6IaF0pnrvdsjK6ZBAOSkdsuwHBAkH%2FKVoDgpCIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFbwXdgfyYq5Wc7MVyrcA5OK7y8NkIOlii48Z1zaNYWMSclKIfS3xH2lJuhzV9nlcYIWkP8RtMEgc9Yzoiz0nijHWAdokEfZqA5BzR%2F68OP38RBiIWiPrvz0B70o0ILXWQluAEyIKkScZXHNet8rHMRWoeVrQ%2F%2BNst2JTx%2B3Uulf0GZUw7KEZ1tzGnjpkHBdlW9syausV6SfVzS5WDMToa3JK9UpeCnjEjVvChoS29Jaj13zNG6a2Gpf6SYfB6e6NYZ2vIUInyibr%2BsgGvEbNXRlVJB0I%2FbbsJgfeYi9f9O%2Bn7ZfY38ItH4viwZRin4Xeo5kXOOAR8BXbiEo2bwhpOGlePPbEPIPfjtWdmjY0exbJnMVIEpa1LnlMS80uzypXAgYjTgqq1MdeMWarFavRa1dJAoH3Mhs83PmkcAkosk7P6jI0pRxJ1P%2FxNe%2Fs1NrFwAj9ZLe8E5A9BUSh%2Fd7IVMCpbg6Q3k6Sktq2n2Ha7k2rmOfE0Yx4qFTAZDCX4rXHuOhon07R41yr6xBGVeR%2F0RCQtIv%2FUvTRH7p%2F7tUXOXRmeEfCXwAlj9JIpGDKssYNCdoJD9UB0lGAiKEf5jHws8qq785fj3cHDGephuhpVYUdmtjrpJgSyzmFfw1%2FsMuB5eE5ucuajnPBdS9MNiAusQGOqUBKbGPlrXhzyY2Fm9HZEULHS2La%2BaeH8WqfJRmf%2FeHRq2XlL%2FpTfNApm9Rg0GC7PEx5b6Cr%2B6kOejQI76MY3E2iApr43Be5O0r5xZ3VojDwKNnp9zRVMkxVyNebIMznDQIKIi38HdXeSvvPkFMZXCkGuIkFtFVAl%2BzS5qxVReHgLyxvZd%2B%2BdanEiriUM4LYttWfDxhtGK%2B24hU2vF2Pfj2TpJIIMl9&X-Amz-Signature=9d48f3bc049a2e8c8a3465aed936528d8a219b3036c79da2ef62e2a51c649d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOZD2ONU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3mHCLIky855BN7vkGPmws0NGxsXq6irwi3a90DfnJSwIgILAhb6IaF0pnrvdsjK6ZBAOSkdsuwHBAkH%2FKVoDgpCIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFbwXdgfyYq5Wc7MVyrcA5OK7y8NkIOlii48Z1zaNYWMSclKIfS3xH2lJuhzV9nlcYIWkP8RtMEgc9Yzoiz0nijHWAdokEfZqA5BzR%2F68OP38RBiIWiPrvz0B70o0ILXWQluAEyIKkScZXHNet8rHMRWoeVrQ%2F%2BNst2JTx%2B3Uulf0GZUw7KEZ1tzGnjpkHBdlW9syausV6SfVzS5WDMToa3JK9UpeCnjEjVvChoS29Jaj13zNG6a2Gpf6SYfB6e6NYZ2vIUInyibr%2BsgGvEbNXRlVJB0I%2FbbsJgfeYi9f9O%2Bn7ZfY38ItH4viwZRin4Xeo5kXOOAR8BXbiEo2bwhpOGlePPbEPIPfjtWdmjY0exbJnMVIEpa1LnlMS80uzypXAgYjTgqq1MdeMWarFavRa1dJAoH3Mhs83PmkcAkosk7P6jI0pRxJ1P%2FxNe%2Fs1NrFwAj9ZLe8E5A9BUSh%2Fd7IVMCpbg6Q3k6Sktq2n2Ha7k2rmOfE0Yx4qFTAZDCX4rXHuOhon07R41yr6xBGVeR%2F0RCQtIv%2FUvTRH7p%2F7tUXOXRmeEfCXwAlj9JIpGDKssYNCdoJD9UB0lGAiKEf5jHws8qq785fj3cHDGephuhpVYUdmtjrpJgSyzmFfw1%2FsMuB5eE5ucuajnPBdS9MNiAusQGOqUBKbGPlrXhzyY2Fm9HZEULHS2La%2BaeH8WqfJRmf%2FeHRq2XlL%2FpTfNApm9Rg0GC7PEx5b6Cr%2B6kOejQI76MY3E2iApr43Be5O0r5xZ3VojDwKNnp9zRVMkxVyNebIMznDQIKIi38HdXeSvvPkFMZXCkGuIkFtFVAl%2BzS5qxVReHgLyxvZd%2B%2BdanEiriUM4LYttWfDxhtGK%2B24hU2vF2Pfj2TpJIIMl9&X-Amz-Signature=0c2b880bc4760560dde3f57622de0afd6de8ab3e2ee7ea000a72f5b6784d152c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOZD2ONU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3mHCLIky855BN7vkGPmws0NGxsXq6irwi3a90DfnJSwIgILAhb6IaF0pnrvdsjK6ZBAOSkdsuwHBAkH%2FKVoDgpCIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFbwXdgfyYq5Wc7MVyrcA5OK7y8NkIOlii48Z1zaNYWMSclKIfS3xH2lJuhzV9nlcYIWkP8RtMEgc9Yzoiz0nijHWAdokEfZqA5BzR%2F68OP38RBiIWiPrvz0B70o0ILXWQluAEyIKkScZXHNet8rHMRWoeVrQ%2F%2BNst2JTx%2B3Uulf0GZUw7KEZ1tzGnjpkHBdlW9syausV6SfVzS5WDMToa3JK9UpeCnjEjVvChoS29Jaj13zNG6a2Gpf6SYfB6e6NYZ2vIUInyibr%2BsgGvEbNXRlVJB0I%2FbbsJgfeYi9f9O%2Bn7ZfY38ItH4viwZRin4Xeo5kXOOAR8BXbiEo2bwhpOGlePPbEPIPfjtWdmjY0exbJnMVIEpa1LnlMS80uzypXAgYjTgqq1MdeMWarFavRa1dJAoH3Mhs83PmkcAkosk7P6jI0pRxJ1P%2FxNe%2Fs1NrFwAj9ZLe8E5A9BUSh%2Fd7IVMCpbg6Q3k6Sktq2n2Ha7k2rmOfE0Yx4qFTAZDCX4rXHuOhon07R41yr6xBGVeR%2F0RCQtIv%2FUvTRH7p%2F7tUXOXRmeEfCXwAlj9JIpGDKssYNCdoJD9UB0lGAiKEf5jHws8qq785fj3cHDGephuhpVYUdmtjrpJgSyzmFfw1%2FsMuB5eE5ucuajnPBdS9MNiAusQGOqUBKbGPlrXhzyY2Fm9HZEULHS2La%2BaeH8WqfJRmf%2FeHRq2XlL%2FpTfNApm9Rg0GC7PEx5b6Cr%2B6kOejQI76MY3E2iApr43Be5O0r5xZ3VojDwKNnp9zRVMkxVyNebIMznDQIKIi38HdXeSvvPkFMZXCkGuIkFtFVAl%2BzS5qxVReHgLyxvZd%2B%2BdanEiriUM4LYttWfDxhtGK%2B24hU2vF2Pfj2TpJIIMl9&X-Amz-Signature=c52df75aa88b11fe6737bbcd4a81bf54f85f3aeb2a5deea5e7f806bc8a94cb5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOZD2ONU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3mHCLIky855BN7vkGPmws0NGxsXq6irwi3a90DfnJSwIgILAhb6IaF0pnrvdsjK6ZBAOSkdsuwHBAkH%2FKVoDgpCIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFbwXdgfyYq5Wc7MVyrcA5OK7y8NkIOlii48Z1zaNYWMSclKIfS3xH2lJuhzV9nlcYIWkP8RtMEgc9Yzoiz0nijHWAdokEfZqA5BzR%2F68OP38RBiIWiPrvz0B70o0ILXWQluAEyIKkScZXHNet8rHMRWoeVrQ%2F%2BNst2JTx%2B3Uulf0GZUw7KEZ1tzGnjpkHBdlW9syausV6SfVzS5WDMToa3JK9UpeCnjEjVvChoS29Jaj13zNG6a2Gpf6SYfB6e6NYZ2vIUInyibr%2BsgGvEbNXRlVJB0I%2FbbsJgfeYi9f9O%2Bn7ZfY38ItH4viwZRin4Xeo5kXOOAR8BXbiEo2bwhpOGlePPbEPIPfjtWdmjY0exbJnMVIEpa1LnlMS80uzypXAgYjTgqq1MdeMWarFavRa1dJAoH3Mhs83PmkcAkosk7P6jI0pRxJ1P%2FxNe%2Fs1NrFwAj9ZLe8E5A9BUSh%2Fd7IVMCpbg6Q3k6Sktq2n2Ha7k2rmOfE0Yx4qFTAZDCX4rXHuOhon07R41yr6xBGVeR%2F0RCQtIv%2FUvTRH7p%2F7tUXOXRmeEfCXwAlj9JIpGDKssYNCdoJD9UB0lGAiKEf5jHws8qq785fj3cHDGephuhpVYUdmtjrpJgSyzmFfw1%2FsMuB5eE5ucuajnPBdS9MNiAusQGOqUBKbGPlrXhzyY2Fm9HZEULHS2La%2BaeH8WqfJRmf%2FeHRq2XlL%2FpTfNApm9Rg0GC7PEx5b6Cr%2B6kOejQI76MY3E2iApr43Be5O0r5xZ3VojDwKNnp9zRVMkxVyNebIMznDQIKIi38HdXeSvvPkFMZXCkGuIkFtFVAl%2BzS5qxVReHgLyxvZd%2B%2BdanEiriUM4LYttWfDxhtGK%2B24hU2vF2Pfj2TpJIIMl9&X-Amz-Signature=c562c2f6f5b8331b13eb212d08920fe734180dbe762299ed733eebad607744eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOZD2ONU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3mHCLIky855BN7vkGPmws0NGxsXq6irwi3a90DfnJSwIgILAhb6IaF0pnrvdsjK6ZBAOSkdsuwHBAkH%2FKVoDgpCIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFbwXdgfyYq5Wc7MVyrcA5OK7y8NkIOlii48Z1zaNYWMSclKIfS3xH2lJuhzV9nlcYIWkP8RtMEgc9Yzoiz0nijHWAdokEfZqA5BzR%2F68OP38RBiIWiPrvz0B70o0ILXWQluAEyIKkScZXHNet8rHMRWoeVrQ%2F%2BNst2JTx%2B3Uulf0GZUw7KEZ1tzGnjpkHBdlW9syausV6SfVzS5WDMToa3JK9UpeCnjEjVvChoS29Jaj13zNG6a2Gpf6SYfB6e6NYZ2vIUInyibr%2BsgGvEbNXRlVJB0I%2FbbsJgfeYi9f9O%2Bn7ZfY38ItH4viwZRin4Xeo5kXOOAR8BXbiEo2bwhpOGlePPbEPIPfjtWdmjY0exbJnMVIEpa1LnlMS80uzypXAgYjTgqq1MdeMWarFavRa1dJAoH3Mhs83PmkcAkosk7P6jI0pRxJ1P%2FxNe%2Fs1NrFwAj9ZLe8E5A9BUSh%2Fd7IVMCpbg6Q3k6Sktq2n2Ha7k2rmOfE0Yx4qFTAZDCX4rXHuOhon07R41yr6xBGVeR%2F0RCQtIv%2FUvTRH7p%2F7tUXOXRmeEfCXwAlj9JIpGDKssYNCdoJD9UB0lGAiKEf5jHws8qq785fj3cHDGephuhpVYUdmtjrpJgSyzmFfw1%2FsMuB5eE5ucuajnPBdS9MNiAusQGOqUBKbGPlrXhzyY2Fm9HZEULHS2La%2BaeH8WqfJRmf%2FeHRq2XlL%2FpTfNApm9Rg0GC7PEx5b6Cr%2B6kOejQI76MY3E2iApr43Be5O0r5xZ3VojDwKNnp9zRVMkxVyNebIMznDQIKIi38HdXeSvvPkFMZXCkGuIkFtFVAl%2BzS5qxVReHgLyxvZd%2B%2BdanEiriUM4LYttWfDxhtGK%2B24hU2vF2Pfj2TpJIIMl9&X-Amz-Signature=b22e2b4df82d886481820efc332da05883587fc341a50316677972c846d3d001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOZD2ONU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3mHCLIky855BN7vkGPmws0NGxsXq6irwi3a90DfnJSwIgILAhb6IaF0pnrvdsjK6ZBAOSkdsuwHBAkH%2FKVoDgpCIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFbwXdgfyYq5Wc7MVyrcA5OK7y8NkIOlii48Z1zaNYWMSclKIfS3xH2lJuhzV9nlcYIWkP8RtMEgc9Yzoiz0nijHWAdokEfZqA5BzR%2F68OP38RBiIWiPrvz0B70o0ILXWQluAEyIKkScZXHNet8rHMRWoeVrQ%2F%2BNst2JTx%2B3Uulf0GZUw7KEZ1tzGnjpkHBdlW9syausV6SfVzS5WDMToa3JK9UpeCnjEjVvChoS29Jaj13zNG6a2Gpf6SYfB6e6NYZ2vIUInyibr%2BsgGvEbNXRlVJB0I%2FbbsJgfeYi9f9O%2Bn7ZfY38ItH4viwZRin4Xeo5kXOOAR8BXbiEo2bwhpOGlePPbEPIPfjtWdmjY0exbJnMVIEpa1LnlMS80uzypXAgYjTgqq1MdeMWarFavRa1dJAoH3Mhs83PmkcAkosk7P6jI0pRxJ1P%2FxNe%2Fs1NrFwAj9ZLe8E5A9BUSh%2Fd7IVMCpbg6Q3k6Sktq2n2Ha7k2rmOfE0Yx4qFTAZDCX4rXHuOhon07R41yr6xBGVeR%2F0RCQtIv%2FUvTRH7p%2F7tUXOXRmeEfCXwAlj9JIpGDKssYNCdoJD9UB0lGAiKEf5jHws8qq785fj3cHDGephuhpVYUdmtjrpJgSyzmFfw1%2FsMuB5eE5ucuajnPBdS9MNiAusQGOqUBKbGPlrXhzyY2Fm9HZEULHS2La%2BaeH8WqfJRmf%2FeHRq2XlL%2FpTfNApm9Rg0GC7PEx5b6Cr%2B6kOejQI76MY3E2iApr43Be5O0r5xZ3VojDwKNnp9zRVMkxVyNebIMznDQIKIi38HdXeSvvPkFMZXCkGuIkFtFVAl%2BzS5qxVReHgLyxvZd%2B%2BdanEiriUM4LYttWfDxhtGK%2B24hU2vF2Pfj2TpJIIMl9&X-Amz-Signature=72dc5898c309fa03316c1938b39c2c1c56be0ff711b4a3f481eed2d75061dd83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOZD2ONU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3mHCLIky855BN7vkGPmws0NGxsXq6irwi3a90DfnJSwIgILAhb6IaF0pnrvdsjK6ZBAOSkdsuwHBAkH%2FKVoDgpCIq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFbwXdgfyYq5Wc7MVyrcA5OK7y8NkIOlii48Z1zaNYWMSclKIfS3xH2lJuhzV9nlcYIWkP8RtMEgc9Yzoiz0nijHWAdokEfZqA5BzR%2F68OP38RBiIWiPrvz0B70o0ILXWQluAEyIKkScZXHNet8rHMRWoeVrQ%2F%2BNst2JTx%2B3Uulf0GZUw7KEZ1tzGnjpkHBdlW9syausV6SfVzS5WDMToa3JK9UpeCnjEjVvChoS29Jaj13zNG6a2Gpf6SYfB6e6NYZ2vIUInyibr%2BsgGvEbNXRlVJB0I%2FbbsJgfeYi9f9O%2Bn7ZfY38ItH4viwZRin4Xeo5kXOOAR8BXbiEo2bwhpOGlePPbEPIPfjtWdmjY0exbJnMVIEpa1LnlMS80uzypXAgYjTgqq1MdeMWarFavRa1dJAoH3Mhs83PmkcAkosk7P6jI0pRxJ1P%2FxNe%2Fs1NrFwAj9ZLe8E5A9BUSh%2Fd7IVMCpbg6Q3k6Sktq2n2Ha7k2rmOfE0Yx4qFTAZDCX4rXHuOhon07R41yr6xBGVeR%2F0RCQtIv%2FUvTRH7p%2F7tUXOXRmeEfCXwAlj9JIpGDKssYNCdoJD9UB0lGAiKEf5jHws8qq785fj3cHDGephuhpVYUdmtjrpJgSyzmFfw1%2FsMuB5eE5ucuajnPBdS9MNiAusQGOqUBKbGPlrXhzyY2Fm9HZEULHS2La%2BaeH8WqfJRmf%2FeHRq2XlL%2FpTfNApm9Rg0GC7PEx5b6Cr%2B6kOejQI76MY3E2iApr43Be5O0r5xZ3VojDwKNnp9zRVMkxVyNebIMznDQIKIi38HdXeSvvPkFMZXCkGuIkFtFVAl%2BzS5qxVReHgLyxvZd%2B%2BdanEiriUM4LYttWfDxhtGK%2B24hU2vF2Pfj2TpJIIMl9&X-Amz-Signature=5bc52ddce71e72ea1a2a3ec715036e363db1ccfffc84c74f24dcc105ab50ee67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
