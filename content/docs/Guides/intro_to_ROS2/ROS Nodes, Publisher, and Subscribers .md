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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKZHPMN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCfge02dPcexDxQHv3C0UDnTf9p%2FmRovo62HDkmRYougIgDvXNpYJU3Jgxj1rZvGSOpXWGvOIFE%2F70Qib46IEPaM4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzAglyjccBEYzi6sCrcAx0vL7LZCEZhwSVvwKSpPLFcGyZ8KI7qb6d%2Bo7CXG5T55Lz4e22npIrFBtYKUGoM8yfKTm00dzp0LuS9gFWHNNWgtnqMEUPRRu6i5XScUVen9dfXtFBp%2Bak2uFUTr1023juY9N6hdbn73rCQsQ0LlejCQckcriDeSPrBjcEwYCbguKfg5HlhI7uGjInAdKSBXiiwbqhoNNof0DOjAzc1ptYJsO2h6Md3TXuaPCS2kYm%2FbUV5MxKCLzKCpqTq3EseDVc2t1Uoh3omRzOiv62iEiNarnB4Wjq8dbYLomxUo%2F7cGFqWth4p0W2hRzfi%2BBpcf7drhB8K10y98TEPXDZ7aUAzeLGQA7uXeIMR%2FxKv%2F325nIXotggAIK4ugpHxjtY20Mx%2Bbkf2EGyH8oT3p6FIuAnaGabN6TZZXXt5YE36PWXeJolR5il0%2BkJJ6WWmyQqigk%2BCyUdtQLuRkAinBZI%2FTXDbuz3%2B4F7yDSvogpeRd%2FgcMbQhik88%2Bi691Meu5nopP12gPkQ4yD9%2F7bLDddizrf0ZadmOPfjt9trcc1uyBvWSAYkxu9CuuQnyLV7n%2BS5KQnz2ciXSyGSP4cxSKYq1Y83EMQMh68FaqSGTr68MJBLcgWyCuHCVGClOkEFPMNP99MMGOqUB7pQGnnGtzbISfuN7cZT2%2F72FFcNFMyuGP%2FU9uuFyGGlWMbdpTaLONQlfwyzZVk9CGZMFW8cXOZ7b6E%2FBTUTSD%2Fsh5rSmgO%2BXZsg7Lp3s%2BGyRuU4qc0N1LGgHCfHGExSWNWInL2dmRtpHJJ2bu1QkhhUFT6W8eWE%2FKL4O8737Jpgu7G0BkXpoPmRW8LPnmD5wkYWO3Nl9SB5XN4pjJ4M0w9LOW0%2FV&X-Amz-Signature=3b35531084b5484eb0b21dd4b68cdfb5f1e1f0e7849dc49032ca597633c3b2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKZHPMN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCfge02dPcexDxQHv3C0UDnTf9p%2FmRovo62HDkmRYougIgDvXNpYJU3Jgxj1rZvGSOpXWGvOIFE%2F70Qib46IEPaM4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzAglyjccBEYzi6sCrcAx0vL7LZCEZhwSVvwKSpPLFcGyZ8KI7qb6d%2Bo7CXG5T55Lz4e22npIrFBtYKUGoM8yfKTm00dzp0LuS9gFWHNNWgtnqMEUPRRu6i5XScUVen9dfXtFBp%2Bak2uFUTr1023juY9N6hdbn73rCQsQ0LlejCQckcriDeSPrBjcEwYCbguKfg5HlhI7uGjInAdKSBXiiwbqhoNNof0DOjAzc1ptYJsO2h6Md3TXuaPCS2kYm%2FbUV5MxKCLzKCpqTq3EseDVc2t1Uoh3omRzOiv62iEiNarnB4Wjq8dbYLomxUo%2F7cGFqWth4p0W2hRzfi%2BBpcf7drhB8K10y98TEPXDZ7aUAzeLGQA7uXeIMR%2FxKv%2F325nIXotggAIK4ugpHxjtY20Mx%2Bbkf2EGyH8oT3p6FIuAnaGabN6TZZXXt5YE36PWXeJolR5il0%2BkJJ6WWmyQqigk%2BCyUdtQLuRkAinBZI%2FTXDbuz3%2B4F7yDSvogpeRd%2FgcMbQhik88%2Bi691Meu5nopP12gPkQ4yD9%2F7bLDddizrf0ZadmOPfjt9trcc1uyBvWSAYkxu9CuuQnyLV7n%2BS5KQnz2ciXSyGSP4cxSKYq1Y83EMQMh68FaqSGTr68MJBLcgWyCuHCVGClOkEFPMNP99MMGOqUB7pQGnnGtzbISfuN7cZT2%2F72FFcNFMyuGP%2FU9uuFyGGlWMbdpTaLONQlfwyzZVk9CGZMFW8cXOZ7b6E%2FBTUTSD%2Fsh5rSmgO%2BXZsg7Lp3s%2BGyRuU4qc0N1LGgHCfHGExSWNWInL2dmRtpHJJ2bu1QkhhUFT6W8eWE%2FKL4O8737Jpgu7G0BkXpoPmRW8LPnmD5wkYWO3Nl9SB5XN4pjJ4M0w9LOW0%2FV&X-Amz-Signature=c5c17ae639e4ae78e7168926507a0d08171ac031b8f7db5075111cd1df703b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKZHPMN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCfge02dPcexDxQHv3C0UDnTf9p%2FmRovo62HDkmRYougIgDvXNpYJU3Jgxj1rZvGSOpXWGvOIFE%2F70Qib46IEPaM4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzAglyjccBEYzi6sCrcAx0vL7LZCEZhwSVvwKSpPLFcGyZ8KI7qb6d%2Bo7CXG5T55Lz4e22npIrFBtYKUGoM8yfKTm00dzp0LuS9gFWHNNWgtnqMEUPRRu6i5XScUVen9dfXtFBp%2Bak2uFUTr1023juY9N6hdbn73rCQsQ0LlejCQckcriDeSPrBjcEwYCbguKfg5HlhI7uGjInAdKSBXiiwbqhoNNof0DOjAzc1ptYJsO2h6Md3TXuaPCS2kYm%2FbUV5MxKCLzKCpqTq3EseDVc2t1Uoh3omRzOiv62iEiNarnB4Wjq8dbYLomxUo%2F7cGFqWth4p0W2hRzfi%2BBpcf7drhB8K10y98TEPXDZ7aUAzeLGQA7uXeIMR%2FxKv%2F325nIXotggAIK4ugpHxjtY20Mx%2Bbkf2EGyH8oT3p6FIuAnaGabN6TZZXXt5YE36PWXeJolR5il0%2BkJJ6WWmyQqigk%2BCyUdtQLuRkAinBZI%2FTXDbuz3%2B4F7yDSvogpeRd%2FgcMbQhik88%2Bi691Meu5nopP12gPkQ4yD9%2F7bLDddizrf0ZadmOPfjt9trcc1uyBvWSAYkxu9CuuQnyLV7n%2BS5KQnz2ciXSyGSP4cxSKYq1Y83EMQMh68FaqSGTr68MJBLcgWyCuHCVGClOkEFPMNP99MMGOqUB7pQGnnGtzbISfuN7cZT2%2F72FFcNFMyuGP%2FU9uuFyGGlWMbdpTaLONQlfwyzZVk9CGZMFW8cXOZ7b6E%2FBTUTSD%2Fsh5rSmgO%2BXZsg7Lp3s%2BGyRuU4qc0N1LGgHCfHGExSWNWInL2dmRtpHJJ2bu1QkhhUFT6W8eWE%2FKL4O8737Jpgu7G0BkXpoPmRW8LPnmD5wkYWO3Nl9SB5XN4pjJ4M0w9LOW0%2FV&X-Amz-Signature=76915dca9624200d1c19fadb4663782f4daaf646d3b79b93843db9dbf87d03b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKZHPMN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCfge02dPcexDxQHv3C0UDnTf9p%2FmRovo62HDkmRYougIgDvXNpYJU3Jgxj1rZvGSOpXWGvOIFE%2F70Qib46IEPaM4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzAglyjccBEYzi6sCrcAx0vL7LZCEZhwSVvwKSpPLFcGyZ8KI7qb6d%2Bo7CXG5T55Lz4e22npIrFBtYKUGoM8yfKTm00dzp0LuS9gFWHNNWgtnqMEUPRRu6i5XScUVen9dfXtFBp%2Bak2uFUTr1023juY9N6hdbn73rCQsQ0LlejCQckcriDeSPrBjcEwYCbguKfg5HlhI7uGjInAdKSBXiiwbqhoNNof0DOjAzc1ptYJsO2h6Md3TXuaPCS2kYm%2FbUV5MxKCLzKCpqTq3EseDVc2t1Uoh3omRzOiv62iEiNarnB4Wjq8dbYLomxUo%2F7cGFqWth4p0W2hRzfi%2BBpcf7drhB8K10y98TEPXDZ7aUAzeLGQA7uXeIMR%2FxKv%2F325nIXotggAIK4ugpHxjtY20Mx%2Bbkf2EGyH8oT3p6FIuAnaGabN6TZZXXt5YE36PWXeJolR5il0%2BkJJ6WWmyQqigk%2BCyUdtQLuRkAinBZI%2FTXDbuz3%2B4F7yDSvogpeRd%2FgcMbQhik88%2Bi691Meu5nopP12gPkQ4yD9%2F7bLDddizrf0ZadmOPfjt9trcc1uyBvWSAYkxu9CuuQnyLV7n%2BS5KQnz2ciXSyGSP4cxSKYq1Y83EMQMh68FaqSGTr68MJBLcgWyCuHCVGClOkEFPMNP99MMGOqUB7pQGnnGtzbISfuN7cZT2%2F72FFcNFMyuGP%2FU9uuFyGGlWMbdpTaLONQlfwyzZVk9CGZMFW8cXOZ7b6E%2FBTUTSD%2Fsh5rSmgO%2BXZsg7Lp3s%2BGyRuU4qc0N1LGgHCfHGExSWNWInL2dmRtpHJJ2bu1QkhhUFT6W8eWE%2FKL4O8737Jpgu7G0BkXpoPmRW8LPnmD5wkYWO3Nl9SB5XN4pjJ4M0w9LOW0%2FV&X-Amz-Signature=ca55bd3fdd7b89a439360213a9e2a8029ac44276687934b7ba62c2eba79fc97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKZHPMN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCfge02dPcexDxQHv3C0UDnTf9p%2FmRovo62HDkmRYougIgDvXNpYJU3Jgxj1rZvGSOpXWGvOIFE%2F70Qib46IEPaM4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzAglyjccBEYzi6sCrcAx0vL7LZCEZhwSVvwKSpPLFcGyZ8KI7qb6d%2Bo7CXG5T55Lz4e22npIrFBtYKUGoM8yfKTm00dzp0LuS9gFWHNNWgtnqMEUPRRu6i5XScUVen9dfXtFBp%2Bak2uFUTr1023juY9N6hdbn73rCQsQ0LlejCQckcriDeSPrBjcEwYCbguKfg5HlhI7uGjInAdKSBXiiwbqhoNNof0DOjAzc1ptYJsO2h6Md3TXuaPCS2kYm%2FbUV5MxKCLzKCpqTq3EseDVc2t1Uoh3omRzOiv62iEiNarnB4Wjq8dbYLomxUo%2F7cGFqWth4p0W2hRzfi%2BBpcf7drhB8K10y98TEPXDZ7aUAzeLGQA7uXeIMR%2FxKv%2F325nIXotggAIK4ugpHxjtY20Mx%2Bbkf2EGyH8oT3p6FIuAnaGabN6TZZXXt5YE36PWXeJolR5il0%2BkJJ6WWmyQqigk%2BCyUdtQLuRkAinBZI%2FTXDbuz3%2B4F7yDSvogpeRd%2FgcMbQhik88%2Bi691Meu5nopP12gPkQ4yD9%2F7bLDddizrf0ZadmOPfjt9trcc1uyBvWSAYkxu9CuuQnyLV7n%2BS5KQnz2ciXSyGSP4cxSKYq1Y83EMQMh68FaqSGTr68MJBLcgWyCuHCVGClOkEFPMNP99MMGOqUB7pQGnnGtzbISfuN7cZT2%2F72FFcNFMyuGP%2FU9uuFyGGlWMbdpTaLONQlfwyzZVk9CGZMFW8cXOZ7b6E%2FBTUTSD%2Fsh5rSmgO%2BXZsg7Lp3s%2BGyRuU4qc0N1LGgHCfHGExSWNWInL2dmRtpHJJ2bu1QkhhUFT6W8eWE%2FKL4O8737Jpgu7G0BkXpoPmRW8LPnmD5wkYWO3Nl9SB5XN4pjJ4M0w9LOW0%2FV&X-Amz-Signature=91971d1d4d3a9e10775029f057031f716dc3fbe2f40a22934fd2bbff62a12011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKZHPMN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCfge02dPcexDxQHv3C0UDnTf9p%2FmRovo62HDkmRYougIgDvXNpYJU3Jgxj1rZvGSOpXWGvOIFE%2F70Qib46IEPaM4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzAglyjccBEYzi6sCrcAx0vL7LZCEZhwSVvwKSpPLFcGyZ8KI7qb6d%2Bo7CXG5T55Lz4e22npIrFBtYKUGoM8yfKTm00dzp0LuS9gFWHNNWgtnqMEUPRRu6i5XScUVen9dfXtFBp%2Bak2uFUTr1023juY9N6hdbn73rCQsQ0LlejCQckcriDeSPrBjcEwYCbguKfg5HlhI7uGjInAdKSBXiiwbqhoNNof0DOjAzc1ptYJsO2h6Md3TXuaPCS2kYm%2FbUV5MxKCLzKCpqTq3EseDVc2t1Uoh3omRzOiv62iEiNarnB4Wjq8dbYLomxUo%2F7cGFqWth4p0W2hRzfi%2BBpcf7drhB8K10y98TEPXDZ7aUAzeLGQA7uXeIMR%2FxKv%2F325nIXotggAIK4ugpHxjtY20Mx%2Bbkf2EGyH8oT3p6FIuAnaGabN6TZZXXt5YE36PWXeJolR5il0%2BkJJ6WWmyQqigk%2BCyUdtQLuRkAinBZI%2FTXDbuz3%2B4F7yDSvogpeRd%2FgcMbQhik88%2Bi691Meu5nopP12gPkQ4yD9%2F7bLDddizrf0ZadmOPfjt9trcc1uyBvWSAYkxu9CuuQnyLV7n%2BS5KQnz2ciXSyGSP4cxSKYq1Y83EMQMh68FaqSGTr68MJBLcgWyCuHCVGClOkEFPMNP99MMGOqUB7pQGnnGtzbISfuN7cZT2%2F72FFcNFMyuGP%2FU9uuFyGGlWMbdpTaLONQlfwyzZVk9CGZMFW8cXOZ7b6E%2FBTUTSD%2Fsh5rSmgO%2BXZsg7Lp3s%2BGyRuU4qc0N1LGgHCfHGExSWNWInL2dmRtpHJJ2bu1QkhhUFT6W8eWE%2FKL4O8737Jpgu7G0BkXpoPmRW8LPnmD5wkYWO3Nl9SB5XN4pjJ4M0w9LOW0%2FV&X-Amz-Signature=3a06a0f3ab27fee8ed1e0a9ce162ff395bb248be53c6ec47c9f9f5eff377b767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKZHPMN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCfge02dPcexDxQHv3C0UDnTf9p%2FmRovo62HDkmRYougIgDvXNpYJU3Jgxj1rZvGSOpXWGvOIFE%2F70Qib46IEPaM4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzAglyjccBEYzi6sCrcAx0vL7LZCEZhwSVvwKSpPLFcGyZ8KI7qb6d%2Bo7CXG5T55Lz4e22npIrFBtYKUGoM8yfKTm00dzp0LuS9gFWHNNWgtnqMEUPRRu6i5XScUVen9dfXtFBp%2Bak2uFUTr1023juY9N6hdbn73rCQsQ0LlejCQckcriDeSPrBjcEwYCbguKfg5HlhI7uGjInAdKSBXiiwbqhoNNof0DOjAzc1ptYJsO2h6Md3TXuaPCS2kYm%2FbUV5MxKCLzKCpqTq3EseDVc2t1Uoh3omRzOiv62iEiNarnB4Wjq8dbYLomxUo%2F7cGFqWth4p0W2hRzfi%2BBpcf7drhB8K10y98TEPXDZ7aUAzeLGQA7uXeIMR%2FxKv%2F325nIXotggAIK4ugpHxjtY20Mx%2Bbkf2EGyH8oT3p6FIuAnaGabN6TZZXXt5YE36PWXeJolR5il0%2BkJJ6WWmyQqigk%2BCyUdtQLuRkAinBZI%2FTXDbuz3%2B4F7yDSvogpeRd%2FgcMbQhik88%2Bi691Meu5nopP12gPkQ4yD9%2F7bLDddizrf0ZadmOPfjt9trcc1uyBvWSAYkxu9CuuQnyLV7n%2BS5KQnz2ciXSyGSP4cxSKYq1Y83EMQMh68FaqSGTr68MJBLcgWyCuHCVGClOkEFPMNP99MMGOqUB7pQGnnGtzbISfuN7cZT2%2F72FFcNFMyuGP%2FU9uuFyGGlWMbdpTaLONQlfwyzZVk9CGZMFW8cXOZ7b6E%2FBTUTSD%2Fsh5rSmgO%2BXZsg7Lp3s%2BGyRuU4qc0N1LGgHCfHGExSWNWInL2dmRtpHJJ2bu1QkhhUFT6W8eWE%2FKL4O8737Jpgu7G0BkXpoPmRW8LPnmD5wkYWO3Nl9SB5XN4pjJ4M0w9LOW0%2FV&X-Amz-Signature=2bba8f5db238600bed22a5bb32916e2d49603aa03110ea29362d36967af400a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AKZHPMN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T004958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCfge02dPcexDxQHv3C0UDnTf9p%2FmRovo62HDkmRYougIgDvXNpYJU3Jgxj1rZvGSOpXWGvOIFE%2F70Qib46IEPaM4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHzAglyjccBEYzi6sCrcAx0vL7LZCEZhwSVvwKSpPLFcGyZ8KI7qb6d%2Bo7CXG5T55Lz4e22npIrFBtYKUGoM8yfKTm00dzp0LuS9gFWHNNWgtnqMEUPRRu6i5XScUVen9dfXtFBp%2Bak2uFUTr1023juY9N6hdbn73rCQsQ0LlejCQckcriDeSPrBjcEwYCbguKfg5HlhI7uGjInAdKSBXiiwbqhoNNof0DOjAzc1ptYJsO2h6Md3TXuaPCS2kYm%2FbUV5MxKCLzKCpqTq3EseDVc2t1Uoh3omRzOiv62iEiNarnB4Wjq8dbYLomxUo%2F7cGFqWth4p0W2hRzfi%2BBpcf7drhB8K10y98TEPXDZ7aUAzeLGQA7uXeIMR%2FxKv%2F325nIXotggAIK4ugpHxjtY20Mx%2Bbkf2EGyH8oT3p6FIuAnaGabN6TZZXXt5YE36PWXeJolR5il0%2BkJJ6WWmyQqigk%2BCyUdtQLuRkAinBZI%2FTXDbuz3%2B4F7yDSvogpeRd%2FgcMbQhik88%2Bi691Meu5nopP12gPkQ4yD9%2F7bLDddizrf0ZadmOPfjt9trcc1uyBvWSAYkxu9CuuQnyLV7n%2BS5KQnz2ciXSyGSP4cxSKYq1Y83EMQMh68FaqSGTr68MJBLcgWyCuHCVGClOkEFPMNP99MMGOqUB7pQGnnGtzbISfuN7cZT2%2F72FFcNFMyuGP%2FU9uuFyGGlWMbdpTaLONQlfwyzZVk9CGZMFW8cXOZ7b6E%2FBTUTSD%2Fsh5rSmgO%2BXZsg7Lp3s%2BGyRuU4qc0N1LGgHCfHGExSWNWInL2dmRtpHJJ2bu1QkhhUFT6W8eWE%2FKL4O8737Jpgu7G0BkXpoPmRW8LPnmD5wkYWO3Nl9SB5XN4pjJ4M0w9LOW0%2FV&X-Amz-Signature=5a840692e3aaa93f1e4e79e7a75ae91305acb228c6fd03474662732de728983b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
