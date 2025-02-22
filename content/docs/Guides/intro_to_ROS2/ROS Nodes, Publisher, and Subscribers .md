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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAVBIOZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlNviUVxm%2BEZzLIsXh07p5btyHmelDJUC2z8D5lt%2FL1AiEAvws6EyYpee8DAbwEig9srY3WuLhj5WCLaN%2B8n4tQhpwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwIAD6GncGIWko6IircAyqz6h3FFV2crG1tXeH6Hn0J%2BkzR8T0cYDTm%2BmlxBoPuvIPMoP4GIIhctb%2Fn%2BZ9eRdHoPsOfnMDzvQVhxvlk8RpRMTKapsdkZOA1DsDLESyDzq1r%2F3EkjBw8Bu9N9ShYsGSyOwoOqnUG27OG18dI0fCHH66lTFZr5sfaUq%2FUypYuMNRjKGR7mqpzR35aaHsuihE49qKODYvPyXaQ08dRnIapc8E88t%2Bt9pXF%2FPiPV1JCj3ddUyYNoFBe0vQgAiS59mFv07RYMSVhimx%2B1qHWUDBHAMhh%2FefwZhLLL6ROnV%2F7CLoby6YxsmQ2DDtLRGj358SvVhj38Em8z4ZIfSOjpOsl1McHbzfqeTFLKGX6dG82YuSFL2DAmNTYyja%2B3SfufC1PBR7jsKmrnZ3DhBCHx%2B%2BjpviIAFREmJJJVYxXewgdc%2F17Y126XAWdXGwuPclG54XI6gHvHLXQOIgErbhrJDg3io1DOujQpjCQBF%2FtbQ27yfO%2BoUn%2FpCiVnCH7SvT0NrZItsUrk47MYeDJXMDwGNo%2B5EoY5KiQAU3PELp%2FNVc%2BPcIUVXr7eTRUszecvn243vAM2ey3h6cY2WZzZOMOOF4CjgNoV5PV0AeOhHaquWn%2BnJWQCmkROtPknOlfMJLH5b0GOqUBtSRjgppTdG9fHzKV9Hq%2FyzZ1wTwI%2FJbbh6QO6LHkb47cO%2BKPlo19iP6XEznhnuB5LQv1P6kLV4GbPagFtKF4mfTxJx9fzbAZ4eU8sX%2B15UKERXHe%2Bj6UMIcKXgsfXjRFWaW3Gj%2FM96xyBxCbLWqNcPFaeYONl55BWZR5FGPUkX6%2FJThakfCVe%2Fdr%2FDyahYCu6C4%2FT46h7qqYYilRd7zUMvU%2FB5wR&X-Amz-Signature=3d39ac68986b87f651e9a02e74be99090f70e1aa367cf4a3d4082a008d25ca48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAVBIOZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlNviUVxm%2BEZzLIsXh07p5btyHmelDJUC2z8D5lt%2FL1AiEAvws6EyYpee8DAbwEig9srY3WuLhj5WCLaN%2B8n4tQhpwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwIAD6GncGIWko6IircAyqz6h3FFV2crG1tXeH6Hn0J%2BkzR8T0cYDTm%2BmlxBoPuvIPMoP4GIIhctb%2Fn%2BZ9eRdHoPsOfnMDzvQVhxvlk8RpRMTKapsdkZOA1DsDLESyDzq1r%2F3EkjBw8Bu9N9ShYsGSyOwoOqnUG27OG18dI0fCHH66lTFZr5sfaUq%2FUypYuMNRjKGR7mqpzR35aaHsuihE49qKODYvPyXaQ08dRnIapc8E88t%2Bt9pXF%2FPiPV1JCj3ddUyYNoFBe0vQgAiS59mFv07RYMSVhimx%2B1qHWUDBHAMhh%2FefwZhLLL6ROnV%2F7CLoby6YxsmQ2DDtLRGj358SvVhj38Em8z4ZIfSOjpOsl1McHbzfqeTFLKGX6dG82YuSFL2DAmNTYyja%2B3SfufC1PBR7jsKmrnZ3DhBCHx%2B%2BjpviIAFREmJJJVYxXewgdc%2F17Y126XAWdXGwuPclG54XI6gHvHLXQOIgErbhrJDg3io1DOujQpjCQBF%2FtbQ27yfO%2BoUn%2FpCiVnCH7SvT0NrZItsUrk47MYeDJXMDwGNo%2B5EoY5KiQAU3PELp%2FNVc%2BPcIUVXr7eTRUszecvn243vAM2ey3h6cY2WZzZOMOOF4CjgNoV5PV0AeOhHaquWn%2BnJWQCmkROtPknOlfMJLH5b0GOqUBtSRjgppTdG9fHzKV9Hq%2FyzZ1wTwI%2FJbbh6QO6LHkb47cO%2BKPlo19iP6XEznhnuB5LQv1P6kLV4GbPagFtKF4mfTxJx9fzbAZ4eU8sX%2B15UKERXHe%2Bj6UMIcKXgsfXjRFWaW3Gj%2FM96xyBxCbLWqNcPFaeYONl55BWZR5FGPUkX6%2FJThakfCVe%2Fdr%2FDyahYCu6C4%2FT46h7qqYYilRd7zUMvU%2FB5wR&X-Amz-Signature=646b73d04c718588bf321fcc93d9283afeffa5bf95dd2e432bd1dd0084a577e8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAVBIOZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlNviUVxm%2BEZzLIsXh07p5btyHmelDJUC2z8D5lt%2FL1AiEAvws6EyYpee8DAbwEig9srY3WuLhj5WCLaN%2B8n4tQhpwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwIAD6GncGIWko6IircAyqz6h3FFV2crG1tXeH6Hn0J%2BkzR8T0cYDTm%2BmlxBoPuvIPMoP4GIIhctb%2Fn%2BZ9eRdHoPsOfnMDzvQVhxvlk8RpRMTKapsdkZOA1DsDLESyDzq1r%2F3EkjBw8Bu9N9ShYsGSyOwoOqnUG27OG18dI0fCHH66lTFZr5sfaUq%2FUypYuMNRjKGR7mqpzR35aaHsuihE49qKODYvPyXaQ08dRnIapc8E88t%2Bt9pXF%2FPiPV1JCj3ddUyYNoFBe0vQgAiS59mFv07RYMSVhimx%2B1qHWUDBHAMhh%2FefwZhLLL6ROnV%2F7CLoby6YxsmQ2DDtLRGj358SvVhj38Em8z4ZIfSOjpOsl1McHbzfqeTFLKGX6dG82YuSFL2DAmNTYyja%2B3SfufC1PBR7jsKmrnZ3DhBCHx%2B%2BjpviIAFREmJJJVYxXewgdc%2F17Y126XAWdXGwuPclG54XI6gHvHLXQOIgErbhrJDg3io1DOujQpjCQBF%2FtbQ27yfO%2BoUn%2FpCiVnCH7SvT0NrZItsUrk47MYeDJXMDwGNo%2B5EoY5KiQAU3PELp%2FNVc%2BPcIUVXr7eTRUszecvn243vAM2ey3h6cY2WZzZOMOOF4CjgNoV5PV0AeOhHaquWn%2BnJWQCmkROtPknOlfMJLH5b0GOqUBtSRjgppTdG9fHzKV9Hq%2FyzZ1wTwI%2FJbbh6QO6LHkb47cO%2BKPlo19iP6XEznhnuB5LQv1P6kLV4GbPagFtKF4mfTxJx9fzbAZ4eU8sX%2B15UKERXHe%2Bj6UMIcKXgsfXjRFWaW3Gj%2FM96xyBxCbLWqNcPFaeYONl55BWZR5FGPUkX6%2FJThakfCVe%2Fdr%2FDyahYCu6C4%2FT46h7qqYYilRd7zUMvU%2FB5wR&X-Amz-Signature=6802ae5c5f6521e7061418a6d43a0d8cb06c443932689568da833035626541f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAVBIOZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlNviUVxm%2BEZzLIsXh07p5btyHmelDJUC2z8D5lt%2FL1AiEAvws6EyYpee8DAbwEig9srY3WuLhj5WCLaN%2B8n4tQhpwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwIAD6GncGIWko6IircAyqz6h3FFV2crG1tXeH6Hn0J%2BkzR8T0cYDTm%2BmlxBoPuvIPMoP4GIIhctb%2Fn%2BZ9eRdHoPsOfnMDzvQVhxvlk8RpRMTKapsdkZOA1DsDLESyDzq1r%2F3EkjBw8Bu9N9ShYsGSyOwoOqnUG27OG18dI0fCHH66lTFZr5sfaUq%2FUypYuMNRjKGR7mqpzR35aaHsuihE49qKODYvPyXaQ08dRnIapc8E88t%2Bt9pXF%2FPiPV1JCj3ddUyYNoFBe0vQgAiS59mFv07RYMSVhimx%2B1qHWUDBHAMhh%2FefwZhLLL6ROnV%2F7CLoby6YxsmQ2DDtLRGj358SvVhj38Em8z4ZIfSOjpOsl1McHbzfqeTFLKGX6dG82YuSFL2DAmNTYyja%2B3SfufC1PBR7jsKmrnZ3DhBCHx%2B%2BjpviIAFREmJJJVYxXewgdc%2F17Y126XAWdXGwuPclG54XI6gHvHLXQOIgErbhrJDg3io1DOujQpjCQBF%2FtbQ27yfO%2BoUn%2FpCiVnCH7SvT0NrZItsUrk47MYeDJXMDwGNo%2B5EoY5KiQAU3PELp%2FNVc%2BPcIUVXr7eTRUszecvn243vAM2ey3h6cY2WZzZOMOOF4CjgNoV5PV0AeOhHaquWn%2BnJWQCmkROtPknOlfMJLH5b0GOqUBtSRjgppTdG9fHzKV9Hq%2FyzZ1wTwI%2FJbbh6QO6LHkb47cO%2BKPlo19iP6XEznhnuB5LQv1P6kLV4GbPagFtKF4mfTxJx9fzbAZ4eU8sX%2B15UKERXHe%2Bj6UMIcKXgsfXjRFWaW3Gj%2FM96xyBxCbLWqNcPFaeYONl55BWZR5FGPUkX6%2FJThakfCVe%2Fdr%2FDyahYCu6C4%2FT46h7qqYYilRd7zUMvU%2FB5wR&X-Amz-Signature=96a177c9edc69333fa297b426c20bc7e08d4c0b0ac2665702b39992003df3997&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAVBIOZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlNviUVxm%2BEZzLIsXh07p5btyHmelDJUC2z8D5lt%2FL1AiEAvws6EyYpee8DAbwEig9srY3WuLhj5WCLaN%2B8n4tQhpwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwIAD6GncGIWko6IircAyqz6h3FFV2crG1tXeH6Hn0J%2BkzR8T0cYDTm%2BmlxBoPuvIPMoP4GIIhctb%2Fn%2BZ9eRdHoPsOfnMDzvQVhxvlk8RpRMTKapsdkZOA1DsDLESyDzq1r%2F3EkjBw8Bu9N9ShYsGSyOwoOqnUG27OG18dI0fCHH66lTFZr5sfaUq%2FUypYuMNRjKGR7mqpzR35aaHsuihE49qKODYvPyXaQ08dRnIapc8E88t%2Bt9pXF%2FPiPV1JCj3ddUyYNoFBe0vQgAiS59mFv07RYMSVhimx%2B1qHWUDBHAMhh%2FefwZhLLL6ROnV%2F7CLoby6YxsmQ2DDtLRGj358SvVhj38Em8z4ZIfSOjpOsl1McHbzfqeTFLKGX6dG82YuSFL2DAmNTYyja%2B3SfufC1PBR7jsKmrnZ3DhBCHx%2B%2BjpviIAFREmJJJVYxXewgdc%2F17Y126XAWdXGwuPclG54XI6gHvHLXQOIgErbhrJDg3io1DOujQpjCQBF%2FtbQ27yfO%2BoUn%2FpCiVnCH7SvT0NrZItsUrk47MYeDJXMDwGNo%2B5EoY5KiQAU3PELp%2FNVc%2BPcIUVXr7eTRUszecvn243vAM2ey3h6cY2WZzZOMOOF4CjgNoV5PV0AeOhHaquWn%2BnJWQCmkROtPknOlfMJLH5b0GOqUBtSRjgppTdG9fHzKV9Hq%2FyzZ1wTwI%2FJbbh6QO6LHkb47cO%2BKPlo19iP6XEznhnuB5LQv1P6kLV4GbPagFtKF4mfTxJx9fzbAZ4eU8sX%2B15UKERXHe%2Bj6UMIcKXgsfXjRFWaW3Gj%2FM96xyBxCbLWqNcPFaeYONl55BWZR5FGPUkX6%2FJThakfCVe%2Fdr%2FDyahYCu6C4%2FT46h7qqYYilRd7zUMvU%2FB5wR&X-Amz-Signature=11314f2937fdd64ce358c4471252bdd2725c0a8fef9b29e5abea4f75753e7b72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAVBIOZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlNviUVxm%2BEZzLIsXh07p5btyHmelDJUC2z8D5lt%2FL1AiEAvws6EyYpee8DAbwEig9srY3WuLhj5WCLaN%2B8n4tQhpwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwIAD6GncGIWko6IircAyqz6h3FFV2crG1tXeH6Hn0J%2BkzR8T0cYDTm%2BmlxBoPuvIPMoP4GIIhctb%2Fn%2BZ9eRdHoPsOfnMDzvQVhxvlk8RpRMTKapsdkZOA1DsDLESyDzq1r%2F3EkjBw8Bu9N9ShYsGSyOwoOqnUG27OG18dI0fCHH66lTFZr5sfaUq%2FUypYuMNRjKGR7mqpzR35aaHsuihE49qKODYvPyXaQ08dRnIapc8E88t%2Bt9pXF%2FPiPV1JCj3ddUyYNoFBe0vQgAiS59mFv07RYMSVhimx%2B1qHWUDBHAMhh%2FefwZhLLL6ROnV%2F7CLoby6YxsmQ2DDtLRGj358SvVhj38Em8z4ZIfSOjpOsl1McHbzfqeTFLKGX6dG82YuSFL2DAmNTYyja%2B3SfufC1PBR7jsKmrnZ3DhBCHx%2B%2BjpviIAFREmJJJVYxXewgdc%2F17Y126XAWdXGwuPclG54XI6gHvHLXQOIgErbhrJDg3io1DOujQpjCQBF%2FtbQ27yfO%2BoUn%2FpCiVnCH7SvT0NrZItsUrk47MYeDJXMDwGNo%2B5EoY5KiQAU3PELp%2FNVc%2BPcIUVXr7eTRUszecvn243vAM2ey3h6cY2WZzZOMOOF4CjgNoV5PV0AeOhHaquWn%2BnJWQCmkROtPknOlfMJLH5b0GOqUBtSRjgppTdG9fHzKV9Hq%2FyzZ1wTwI%2FJbbh6QO6LHkb47cO%2BKPlo19iP6XEznhnuB5LQv1P6kLV4GbPagFtKF4mfTxJx9fzbAZ4eU8sX%2B15UKERXHe%2Bj6UMIcKXgsfXjRFWaW3Gj%2FM96xyBxCbLWqNcPFaeYONl55BWZR5FGPUkX6%2FJThakfCVe%2Fdr%2FDyahYCu6C4%2FT46h7qqYYilRd7zUMvU%2FB5wR&X-Amz-Signature=d6c95cd6f890717716b786f498702acdecfb0fc02e3d955469842bd1d76cbdd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAVBIOZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlNviUVxm%2BEZzLIsXh07p5btyHmelDJUC2z8D5lt%2FL1AiEAvws6EyYpee8DAbwEig9srY3WuLhj5WCLaN%2B8n4tQhpwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwIAD6GncGIWko6IircAyqz6h3FFV2crG1tXeH6Hn0J%2BkzR8T0cYDTm%2BmlxBoPuvIPMoP4GIIhctb%2Fn%2BZ9eRdHoPsOfnMDzvQVhxvlk8RpRMTKapsdkZOA1DsDLESyDzq1r%2F3EkjBw8Bu9N9ShYsGSyOwoOqnUG27OG18dI0fCHH66lTFZr5sfaUq%2FUypYuMNRjKGR7mqpzR35aaHsuihE49qKODYvPyXaQ08dRnIapc8E88t%2Bt9pXF%2FPiPV1JCj3ddUyYNoFBe0vQgAiS59mFv07RYMSVhimx%2B1qHWUDBHAMhh%2FefwZhLLL6ROnV%2F7CLoby6YxsmQ2DDtLRGj358SvVhj38Em8z4ZIfSOjpOsl1McHbzfqeTFLKGX6dG82YuSFL2DAmNTYyja%2B3SfufC1PBR7jsKmrnZ3DhBCHx%2B%2BjpviIAFREmJJJVYxXewgdc%2F17Y126XAWdXGwuPclG54XI6gHvHLXQOIgErbhrJDg3io1DOujQpjCQBF%2FtbQ27yfO%2BoUn%2FpCiVnCH7SvT0NrZItsUrk47MYeDJXMDwGNo%2B5EoY5KiQAU3PELp%2FNVc%2BPcIUVXr7eTRUszecvn243vAM2ey3h6cY2WZzZOMOOF4CjgNoV5PV0AeOhHaquWn%2BnJWQCmkROtPknOlfMJLH5b0GOqUBtSRjgppTdG9fHzKV9Hq%2FyzZ1wTwI%2FJbbh6QO6LHkb47cO%2BKPlo19iP6XEznhnuB5LQv1P6kLV4GbPagFtKF4mfTxJx9fzbAZ4eU8sX%2B15UKERXHe%2Bj6UMIcKXgsfXjRFWaW3Gj%2FM96xyBxCbLWqNcPFaeYONl55BWZR5FGPUkX6%2FJThakfCVe%2Fdr%2FDyahYCu6C4%2FT46h7qqYYilRd7zUMvU%2FB5wR&X-Amz-Signature=8f3461bd82f9d490a2c7a918a709b9ed9b29515b2d0725a190903ed1168a04ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAVBIOZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDlNviUVxm%2BEZzLIsXh07p5btyHmelDJUC2z8D5lt%2FL1AiEAvws6EyYpee8DAbwEig9srY3WuLhj5WCLaN%2B8n4tQhpwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwIAD6GncGIWko6IircAyqz6h3FFV2crG1tXeH6Hn0J%2BkzR8T0cYDTm%2BmlxBoPuvIPMoP4GIIhctb%2Fn%2BZ9eRdHoPsOfnMDzvQVhxvlk8RpRMTKapsdkZOA1DsDLESyDzq1r%2F3EkjBw8Bu9N9ShYsGSyOwoOqnUG27OG18dI0fCHH66lTFZr5sfaUq%2FUypYuMNRjKGR7mqpzR35aaHsuihE49qKODYvPyXaQ08dRnIapc8E88t%2Bt9pXF%2FPiPV1JCj3ddUyYNoFBe0vQgAiS59mFv07RYMSVhimx%2B1qHWUDBHAMhh%2FefwZhLLL6ROnV%2F7CLoby6YxsmQ2DDtLRGj358SvVhj38Em8z4ZIfSOjpOsl1McHbzfqeTFLKGX6dG82YuSFL2DAmNTYyja%2B3SfufC1PBR7jsKmrnZ3DhBCHx%2B%2BjpviIAFREmJJJVYxXewgdc%2F17Y126XAWdXGwuPclG54XI6gHvHLXQOIgErbhrJDg3io1DOujQpjCQBF%2FtbQ27yfO%2BoUn%2FpCiVnCH7SvT0NrZItsUrk47MYeDJXMDwGNo%2B5EoY5KiQAU3PELp%2FNVc%2BPcIUVXr7eTRUszecvn243vAM2ey3h6cY2WZzZOMOOF4CjgNoV5PV0AeOhHaquWn%2BnJWQCmkROtPknOlfMJLH5b0GOqUBtSRjgppTdG9fHzKV9Hq%2FyzZ1wTwI%2FJbbh6QO6LHkb47cO%2BKPlo19iP6XEznhnuB5LQv1P6kLV4GbPagFtKF4mfTxJx9fzbAZ4eU8sX%2B15UKERXHe%2Bj6UMIcKXgsfXjRFWaW3Gj%2FM96xyBxCbLWqNcPFaeYONl55BWZR5FGPUkX6%2FJThakfCVe%2Fdr%2FDyahYCu6C4%2FT46h7qqYYilRd7zUMvU%2FB5wR&X-Amz-Signature=e5814f628c2843114f2ca76c2e7d0a80c01f36fba6e9a126006fa7943b218c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
