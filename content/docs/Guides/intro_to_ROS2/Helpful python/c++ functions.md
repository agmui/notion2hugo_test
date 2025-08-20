---
sys:
  pageId: "86e167b7-6fa4-4afe-b85c-44d00721d6ea"
  createdTime: "2024-06-05T17:12:00.000Z"
  lastEditedTime: "2025-08-18T08:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Helpful python/c++ functions.md"
title: "Helpful python/c++ functions"
date: "2025-08-18T08:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 162
toc: false
icon: ""
---

### Log msg:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```python
        self.get_logger().info('I heard: "%s"' % 2)
```

</div>
<div>

```cpp
      RCLCPP_INFO(get_logger(), "Node started!");
```

</div>
</div>

### Sample Node class: 

	<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
	<div>
	
	**Python**
	
	```python
	import rclpy
	from rclpy.node import Node
	
	class MyNode(Node):
	    def __init__(self):
	        super().__init__('my_node')
	        self.get_logger().info("Node started!")
	
	
	def main(args=None):
	    rclpy.init(args=args)
	    node = MyNode()
	    rclpy.spin(node)
	    node.destroy_node()
	    rclpy.shutdown()
	
	if __name__ == '__main__':
	    main()
	
	```
	
	</div>
	<div>
	
	**C++:** [https://husarion.com/tutorials/ros2-tutorials/2-creating-nodes-messages/#code-of-your-first-node](https://husarion.com/tutorials/ros2-tutorials/2-creating-nodes-messages/#code-of-your-first-node)
	
	```cpp
	#include "rclcpp/rclcpp.hpp"
	
	class MyNode : public rclcpp::Node {
	public:
	   MyNode() : Node("my_node") {
	      RCLCPP_INFO(get_logger(), "Node started!");
	   }
	private:
	};
	
	int main(int argc, char **argv)
	{
	   rclcpp::init(argc, argv);
	   auto node = std::make_shared<MyNode>();
	   rclcpp::spin(node);
	   rclcpp::shutdown();
	   return 0;
	}
	```
	
	</div>
	</div>

### Creating a subscriber:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

**Python:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html#write-the-publisher-node](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html#write-the-publisher-node)

```python
import rclpy
import sensor_msgs.msg
from rclpy.node import Node
from sensor_msgs.msg._image import Image

class MyNode(Node):
    def __init__(self):
        super().__init__('my_node')
        self.subscriber_ = self.create_subscription(Image, "/image", self.image_callback, rclpy.qos.qos_profile_sensor_data)
        self.get_logger().info("Node started!")

    def image_callback(self, image: sensor_msgs.msg.Image):
        sum = 0
        for value in image.data:
            sum += value
        avg: int = sum // len(image.data)
        self.get_logger().info("Brightness %d" % avg)
```

</div>
<div>

**C++:** [https://husarion.com/tutorials/ros2-tutorials/2-creating-nodes-messages/#creating-a-subscriber](https://husarion.com/tutorials/ros2-tutorials/2-creating-nodes-messages/#creating-a-subscriber)

```cpp
#include "sensor_msgs/msg/image.hpp"

using namespace std::placeholders;

class MyNode : public rclcpp::Node {
public:
   MyNode() : Node("my_node"){
      subscriber_ = create_subscription<sensor_msgs::msg::Image>(
         "/image", rclcpp::SensorDataQoS(), std::bind(&MyNode::image_callback, this, _1));
   }
private:
   void image_callback(const sensor_msgs::msg::Image::SharedPtr image){
			...
   }

   rclcpp::Subscription<sensor_msgs::msg::Image>::SharedPtr subscriber_;
};
```

</div>
</div>

### Creating a publisher:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

**Python:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html#id1](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Writing-A-Simple-Py-Publisher-And-Subscriber.html#id1)

```python
import rclpy
import sensor_msgs.msg
from rclpy.node import Node
from sensor_msgs.msg._image import Image
from std_msgs.msg._u_int8 import UInt8

class MyNode(Node):
    def __init__(self):
        super().__init__('my_node')
        self.publisher_ = self.create_publisher(UInt8, "/brightness", rclpy.qos.qos_profile_sensor_data)

    def image_callback(self, image: sensor_msgs.msg.Image):
        sum = 0
        for value in image.data:
            sum += value
        avg: int = sum // len(image.data)
        self.get_logger().info("Brightness %d" % avg)

        brightness_msg: UInt8 = UInt8()
        brightness_msg.data = avg
        self.publisher_.publish(brightness_msg)
```

</div>
<div>

**C++:** [https://husarion.com/tutorials/ros2-tutorials/2-creating-nodes-messages/#creating-a-publisher](https://husarion.com/tutorials/ros2-tutorials/2-creating-nodes-messages/#creating-a-publisher)

```cpp
#include "std_msgs/msg/u_int8.hpp"

using namespace std::placeholders;

class MyNode : public rclcpp::Node
{
public:
   MyNode() : Node("my_node"){
        publisher_ = create_publisher<std_msgs::msg::UInt8>("/brightness", rclcpp::SensorDataQoS());
	 }
private:
   void image_callback(const sensor_msgs::msg::Image::SharedPtr image){
				...
			   std_msgs::msg::UInt8 brightness_msg;
			   brightness_msg.data = avg;
			   publisher_->publish(brightness_msg);
   }
   
   rclcpp::Publisher<std_msgs::msg::UInt8>::SharedPtr publisher_;
};
```

</div>
</div>

### Creating a timer: 

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

**Python**

```python
import rclpy

from rclpy.node import Node


class MyNode(Node):

    def __init__(self):
        super().__init__('my_node')
        self.timer_ = self.create_timer(5, self.timer_callback)

    def timer_callback(self):
        self.get_logger().info("Timer activate")
```

</div>
<div>

**C++:** [https://husarion.com/tutorials/ros2-tutorials/3-creating-nodes-services/#create-timer](https://husarion.com/tutorials/ros2-tutorials/3-creating-nodes-services/#create-timer)

```cpp
#include <chrono>

using namespace std::chrono_literals;

class MyNode : public rclcpp::Node {
public:
   MyNode() : Node("my_node"){
			   timer_ = create_wall_timer(1s, std::bind(&MyNode::timer_callback, this));
	 }
private:
   void timer_callback(){
      RCLCPP_INFO(get_logger(), "Timer activate");
   }
   rclcpp::TimerBase::SharedPtr timer_;
};
```

</div>
</div>

### Adding parameters: 

**To set parameter:** `ros2 run tutorial_pkg my_first_node --ros-args  -p timer_period_s:=1`

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

**Python**

```python
import rclpy
import rclpy.node

class MinimalParam(rclpy.node.Node):
    def __init__(self):
        super().__init__('minimal_param_node')

        self.declare_parameter('my_parameter', 'world')

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter('my_parameter').get_parameter_value().string_value

        self.get_logger().info('Hello %s!' % my_param)

        my_new_param = rclpy.parameter.Parameter(
            'my_parameter',
            rclpy.Parameter.Type.STRING,
            'world'
        )
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

def main():
    rclpy.init()
    node = MinimalParam()
    rclpy.spin(node)

if __name__ == '__main__':
    main()
```

</div>
<div>

**C++:** [https://husarion.com/tutorials/ros2-tutorials/3-creating-nodes-services/#adding-parameters](https://husarion.com/tutorials/ros2-tutorials/3-creating-nodes-services/#adding-parameters)

```cpp
#include <chrono>

#include "std_msgs/msg/u_int8.hpp"
#include "std_msgs/msg/string.hpp"

using namespace std::chrono_literals;

class MyNode : public rclcpp::Node {
public:
   MyNode() : Node("my_node"){
         declare_parameter("timer_period_s", 5);
		     auto timer_period_s = std::chrono::seconds(get_parameter("timer_period_s").as_int());
		     timer_ = create_wall_timer(timer_period_s,
															      std::bind(&MyNode::timer_callback, this));
	 }
private:
   void timer_callback(){
      RCLCPP_INFO(get_logger(), "Timer activate");
   }
   rclcpp::TimerBase::SharedPtr timer_;
};
```

</div>
</div>

### Create Client: [https://husarion.com/tutorials/ros2-tutorials/3-creating-nodes-services/#create-client](https://husarion.com/tutorials/ros2-tutorials/3-creating-nodes-services/#create-client)

i.e. does the same as this: `ros2 service call /save std_srvs/srv/Empty {}`

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

**Python**

```python
from rclpy.node import Node
from sensor_msgs.msg._image import Image
from std_msgs.msg._u_int8 import UInt8

class MyNode(Node):

    def __init__(self):
        super().__init__('my_node')
        self.clients_ = self.create_client(std_srvs.srv.Empty,"/save")

    def timer_callback(self):
        self.get_logger().info("Timer activate")

        if not self.clients_.wait_for_service(1):
            self.get_logger().error("Failed to connect to the image save service")
            return
        request = std_srvs.srv.Empty.Request()
        future = self.clients_.call_async(request)

```

</div>
<div>

**C++**

```cpp
#include <chrono>

#include "std_msgs/msg/u_int8.hpp"
#include "std_msgs/msg/string.hpp"
#include "std_srvs/srv/empty.hpp"

class MyNode : public rclcpp::Node {
public:
   MyNode() : Node("my_node"){
		     client_ = create_client<std_srvs::srv::Empty>("/save");
	 }
private:
   void timer_callback(){
      if (!client_->wait_for_service(1s)){
         RCLCPP_ERROR(get_logger(), "Failed to connect to the image save service");
         return;
      }
      auto request = std::make_shared<std_srvs::srv::Empty::Request>();
      auto future = client_->async_send_request(request);
   }
   rclcpp::Client<std_srvs::srv::Empty>::SharedPtr client_;
};
```

</div>
</div>

### Create service: [https://husarion.com/tutorials/ros2-tutorials/3-creating-nodes-services/#create-service](https://husarion.com/tutorials/ros2-tutorials/3-creating-nodes-services/#create-service)

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

**Python**

```python
import rclpy
import sensor_msgs.msg
import std_srvs.srv
from rclpy.node import Node
from sensor_msgs.msg._image import Image
from std_msgs.msg._u_int8 import UInt8
from std_srvs.srv._trigger import Trigger

class MyNode(Node):

    def __init__(self):
        super().__init__('my_node')
        self.server_ = self.create_service(Trigger,"/image_counter", self.counter_callback)

        self.saved_imgs: int = 0
        self.get_logger().info("Node started!")


    def counter_callback(self,req:Trigger.Request, res: Trigger.Response):
        res.success = True
        res.message = "Saved images:" + str(self.saved_imgs)
        return res


```

</div>
<div>

**C++**

</div>
</div>
