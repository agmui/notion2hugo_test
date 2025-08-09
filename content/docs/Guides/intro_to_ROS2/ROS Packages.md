---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLQZQ5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFQ3hKEQ7zJJvcANPfkhBJgkMPHJnbvx3%2BkmBK2lBPnAIgL39kz34k1ftRZfXxlHHn4YXEu4CJrH52Pm0bxk74mjUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSR8VUqfZROJZy4mCrcA%2BePE4MpOj9X9aET5Bjq3c052aCLj98fIxhc34ODsEqVYdyoqJMuglF11JfZZvERhVPWVF2lWug4JTmIdNf0W%2FnoC0ywu3EKwTG4OuDS3S29xVf19gVjBrTguvSHeaorC4uK4IBAJsj9SpyNaSw07XF99vJpr26sIJQRz5jeIhw1%2FMDM6p47s7Fb6FxW3a1mmc%2FnMqkjzY7LD89KMQlgNwEZgz%2BtRVnuUUSUh4w9fls4BbOdL%2B2F1ogxrVLRhkgdvUz5v26BrzUWpMh8%2BzMfz4mpQLi0KT4VzIAf3I24kHrOOzb6hWk1KycXUHRhY%2FhL%2BqwKs9gZdfZRG2gMxYR67HnoRLdEtTsVdTOFH4OL1%2F%2BsOzXGfO1PIHixGpeJE2ruBkigx%2BA7BSD4T%2BgNmygyWLgYNg0gBQucPO0JAp2Tr%2FWACdLdz7DfKXiGyJx%2Bg%2B4VO95BNkiIjjKv9QASMN3vIjBNO2JgRwmfXnAhcvl32%2BLSJkx7ah357X0llyY0dLAYClcrDt6v7fbrvXW6rioV4YtRWHEbF4Z9oyvU9U%2BDnIAGDl3lid%2FdZf1EP10rA73fApeHaB8TYX5BxKZBNfCfJ0JsaubQQjIUj3NnINAfDjKgt3HGFNlGtX%2ByefshMIDo3MQGOqUBMiWWRNwbAJVX3rIVntYoI9PQEMDS6615aqXy2zEbJlrMnWXBGeY8OXp%2F5jIVejt9xQVbyuhZlu6p%2FvddzRoo09STKlMJkRm%2BRrLBRUtuqruhkJ9hb4rvWslTcg%2FprswNgaFe9VUNOsW3gfXT9Zoaaa%2BXn%2B4%2BAAO50uyIDz%2BrKjSswKaaowPTTjeLMxYs8ZHfJonQnQbSQijbSsBUn1RvWsMwwuAy&X-Amz-Signature=ca848a0e8fde75fcd3105290a7d384e3d3d88d5abea019d1bf08e070c6de6e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLQZQ5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFQ3hKEQ7zJJvcANPfkhBJgkMPHJnbvx3%2BkmBK2lBPnAIgL39kz34k1ftRZfXxlHHn4YXEu4CJrH52Pm0bxk74mjUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSR8VUqfZROJZy4mCrcA%2BePE4MpOj9X9aET5Bjq3c052aCLj98fIxhc34ODsEqVYdyoqJMuglF11JfZZvERhVPWVF2lWug4JTmIdNf0W%2FnoC0ywu3EKwTG4OuDS3S29xVf19gVjBrTguvSHeaorC4uK4IBAJsj9SpyNaSw07XF99vJpr26sIJQRz5jeIhw1%2FMDM6p47s7Fb6FxW3a1mmc%2FnMqkjzY7LD89KMQlgNwEZgz%2BtRVnuUUSUh4w9fls4BbOdL%2B2F1ogxrVLRhkgdvUz5v26BrzUWpMh8%2BzMfz4mpQLi0KT4VzIAf3I24kHrOOzb6hWk1KycXUHRhY%2FhL%2BqwKs9gZdfZRG2gMxYR67HnoRLdEtTsVdTOFH4OL1%2F%2BsOzXGfO1PIHixGpeJE2ruBkigx%2BA7BSD4T%2BgNmygyWLgYNg0gBQucPO0JAp2Tr%2FWACdLdz7DfKXiGyJx%2Bg%2B4VO95BNkiIjjKv9QASMN3vIjBNO2JgRwmfXnAhcvl32%2BLSJkx7ah357X0llyY0dLAYClcrDt6v7fbrvXW6rioV4YtRWHEbF4Z9oyvU9U%2BDnIAGDl3lid%2FdZf1EP10rA73fApeHaB8TYX5BxKZBNfCfJ0JsaubQQjIUj3NnINAfDjKgt3HGFNlGtX%2ByefshMIDo3MQGOqUBMiWWRNwbAJVX3rIVntYoI9PQEMDS6615aqXy2zEbJlrMnWXBGeY8OXp%2F5jIVejt9xQVbyuhZlu6p%2FvddzRoo09STKlMJkRm%2BRrLBRUtuqruhkJ9hb4rvWslTcg%2FprswNgaFe9VUNOsW3gfXT9Zoaaa%2BXn%2B4%2BAAO50uyIDz%2BrKjSswKaaowPTTjeLMxYs8ZHfJonQnQbSQijbSsBUn1RvWsMwwuAy&X-Amz-Signature=d57199573de77a44f9e5bfc8ed6279877c146c2ecf9f6bcd4d99f4f742181a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLQZQ5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFQ3hKEQ7zJJvcANPfkhBJgkMPHJnbvx3%2BkmBK2lBPnAIgL39kz34k1ftRZfXxlHHn4YXEu4CJrH52Pm0bxk74mjUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSR8VUqfZROJZy4mCrcA%2BePE4MpOj9X9aET5Bjq3c052aCLj98fIxhc34ODsEqVYdyoqJMuglF11JfZZvERhVPWVF2lWug4JTmIdNf0W%2FnoC0ywu3EKwTG4OuDS3S29xVf19gVjBrTguvSHeaorC4uK4IBAJsj9SpyNaSw07XF99vJpr26sIJQRz5jeIhw1%2FMDM6p47s7Fb6FxW3a1mmc%2FnMqkjzY7LD89KMQlgNwEZgz%2BtRVnuUUSUh4w9fls4BbOdL%2B2F1ogxrVLRhkgdvUz5v26BrzUWpMh8%2BzMfz4mpQLi0KT4VzIAf3I24kHrOOzb6hWk1KycXUHRhY%2FhL%2BqwKs9gZdfZRG2gMxYR67HnoRLdEtTsVdTOFH4OL1%2F%2BsOzXGfO1PIHixGpeJE2ruBkigx%2BA7BSD4T%2BgNmygyWLgYNg0gBQucPO0JAp2Tr%2FWACdLdz7DfKXiGyJx%2Bg%2B4VO95BNkiIjjKv9QASMN3vIjBNO2JgRwmfXnAhcvl32%2BLSJkx7ah357X0llyY0dLAYClcrDt6v7fbrvXW6rioV4YtRWHEbF4Z9oyvU9U%2BDnIAGDl3lid%2FdZf1EP10rA73fApeHaB8TYX5BxKZBNfCfJ0JsaubQQjIUj3NnINAfDjKgt3HGFNlGtX%2ByefshMIDo3MQGOqUBMiWWRNwbAJVX3rIVntYoI9PQEMDS6615aqXy2zEbJlrMnWXBGeY8OXp%2F5jIVejt9xQVbyuhZlu6p%2FvddzRoo09STKlMJkRm%2BRrLBRUtuqruhkJ9hb4rvWslTcg%2FprswNgaFe9VUNOsW3gfXT9Zoaaa%2BXn%2B4%2BAAO50uyIDz%2BrKjSswKaaowPTTjeLMxYs8ZHfJonQnQbSQijbSsBUn1RvWsMwwuAy&X-Amz-Signature=4c0dd1c220e2e0ad3179ad021b2075d7394efbd70f63c615334de0530586c48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLQZQ5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFQ3hKEQ7zJJvcANPfkhBJgkMPHJnbvx3%2BkmBK2lBPnAIgL39kz34k1ftRZfXxlHHn4YXEu4CJrH52Pm0bxk74mjUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSR8VUqfZROJZy4mCrcA%2BePE4MpOj9X9aET5Bjq3c052aCLj98fIxhc34ODsEqVYdyoqJMuglF11JfZZvERhVPWVF2lWug4JTmIdNf0W%2FnoC0ywu3EKwTG4OuDS3S29xVf19gVjBrTguvSHeaorC4uK4IBAJsj9SpyNaSw07XF99vJpr26sIJQRz5jeIhw1%2FMDM6p47s7Fb6FxW3a1mmc%2FnMqkjzY7LD89KMQlgNwEZgz%2BtRVnuUUSUh4w9fls4BbOdL%2B2F1ogxrVLRhkgdvUz5v26BrzUWpMh8%2BzMfz4mpQLi0KT4VzIAf3I24kHrOOzb6hWk1KycXUHRhY%2FhL%2BqwKs9gZdfZRG2gMxYR67HnoRLdEtTsVdTOFH4OL1%2F%2BsOzXGfO1PIHixGpeJE2ruBkigx%2BA7BSD4T%2BgNmygyWLgYNg0gBQucPO0JAp2Tr%2FWACdLdz7DfKXiGyJx%2Bg%2B4VO95BNkiIjjKv9QASMN3vIjBNO2JgRwmfXnAhcvl32%2BLSJkx7ah357X0llyY0dLAYClcrDt6v7fbrvXW6rioV4YtRWHEbF4Z9oyvU9U%2BDnIAGDl3lid%2FdZf1EP10rA73fApeHaB8TYX5BxKZBNfCfJ0JsaubQQjIUj3NnINAfDjKgt3HGFNlGtX%2ByefshMIDo3MQGOqUBMiWWRNwbAJVX3rIVntYoI9PQEMDS6615aqXy2zEbJlrMnWXBGeY8OXp%2F5jIVejt9xQVbyuhZlu6p%2FvddzRoo09STKlMJkRm%2BRrLBRUtuqruhkJ9hb4rvWslTcg%2FprswNgaFe9VUNOsW3gfXT9Zoaaa%2BXn%2B4%2BAAO50uyIDz%2BrKjSswKaaowPTTjeLMxYs8ZHfJonQnQbSQijbSsBUn1RvWsMwwuAy&X-Amz-Signature=89216ca04a4cad1c5efed669e3c6c11e4dd7e576e2fdfb29f5d02c77c7062728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLQZQ5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFQ3hKEQ7zJJvcANPfkhBJgkMPHJnbvx3%2BkmBK2lBPnAIgL39kz34k1ftRZfXxlHHn4YXEu4CJrH52Pm0bxk74mjUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSR8VUqfZROJZy4mCrcA%2BePE4MpOj9X9aET5Bjq3c052aCLj98fIxhc34ODsEqVYdyoqJMuglF11JfZZvERhVPWVF2lWug4JTmIdNf0W%2FnoC0ywu3EKwTG4OuDS3S29xVf19gVjBrTguvSHeaorC4uK4IBAJsj9SpyNaSw07XF99vJpr26sIJQRz5jeIhw1%2FMDM6p47s7Fb6FxW3a1mmc%2FnMqkjzY7LD89KMQlgNwEZgz%2BtRVnuUUSUh4w9fls4BbOdL%2B2F1ogxrVLRhkgdvUz5v26BrzUWpMh8%2BzMfz4mpQLi0KT4VzIAf3I24kHrOOzb6hWk1KycXUHRhY%2FhL%2BqwKs9gZdfZRG2gMxYR67HnoRLdEtTsVdTOFH4OL1%2F%2BsOzXGfO1PIHixGpeJE2ruBkigx%2BA7BSD4T%2BgNmygyWLgYNg0gBQucPO0JAp2Tr%2FWACdLdz7DfKXiGyJx%2Bg%2B4VO95BNkiIjjKv9QASMN3vIjBNO2JgRwmfXnAhcvl32%2BLSJkx7ah357X0llyY0dLAYClcrDt6v7fbrvXW6rioV4YtRWHEbF4Z9oyvU9U%2BDnIAGDl3lid%2FdZf1EP10rA73fApeHaB8TYX5BxKZBNfCfJ0JsaubQQjIUj3NnINAfDjKgt3HGFNlGtX%2ByefshMIDo3MQGOqUBMiWWRNwbAJVX3rIVntYoI9PQEMDS6615aqXy2zEbJlrMnWXBGeY8OXp%2F5jIVejt9xQVbyuhZlu6p%2FvddzRoo09STKlMJkRm%2BRrLBRUtuqruhkJ9hb4rvWslTcg%2FprswNgaFe9VUNOsW3gfXT9Zoaaa%2BXn%2B4%2BAAO50uyIDz%2BrKjSswKaaowPTTjeLMxYs8ZHfJonQnQbSQijbSsBUn1RvWsMwwuAy&X-Amz-Signature=b553e84e0956ac823d5190abed5b08ee8c1f19f069c5a52180cbc2cf6c4145f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLQZQ5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFQ3hKEQ7zJJvcANPfkhBJgkMPHJnbvx3%2BkmBK2lBPnAIgL39kz34k1ftRZfXxlHHn4YXEu4CJrH52Pm0bxk74mjUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSR8VUqfZROJZy4mCrcA%2BePE4MpOj9X9aET5Bjq3c052aCLj98fIxhc34ODsEqVYdyoqJMuglF11JfZZvERhVPWVF2lWug4JTmIdNf0W%2FnoC0ywu3EKwTG4OuDS3S29xVf19gVjBrTguvSHeaorC4uK4IBAJsj9SpyNaSw07XF99vJpr26sIJQRz5jeIhw1%2FMDM6p47s7Fb6FxW3a1mmc%2FnMqkjzY7LD89KMQlgNwEZgz%2BtRVnuUUSUh4w9fls4BbOdL%2B2F1ogxrVLRhkgdvUz5v26BrzUWpMh8%2BzMfz4mpQLi0KT4VzIAf3I24kHrOOzb6hWk1KycXUHRhY%2FhL%2BqwKs9gZdfZRG2gMxYR67HnoRLdEtTsVdTOFH4OL1%2F%2BsOzXGfO1PIHixGpeJE2ruBkigx%2BA7BSD4T%2BgNmygyWLgYNg0gBQucPO0JAp2Tr%2FWACdLdz7DfKXiGyJx%2Bg%2B4VO95BNkiIjjKv9QASMN3vIjBNO2JgRwmfXnAhcvl32%2BLSJkx7ah357X0llyY0dLAYClcrDt6v7fbrvXW6rioV4YtRWHEbF4Z9oyvU9U%2BDnIAGDl3lid%2FdZf1EP10rA73fApeHaB8TYX5BxKZBNfCfJ0JsaubQQjIUj3NnINAfDjKgt3HGFNlGtX%2ByefshMIDo3MQGOqUBMiWWRNwbAJVX3rIVntYoI9PQEMDS6615aqXy2zEbJlrMnWXBGeY8OXp%2F5jIVejt9xQVbyuhZlu6p%2FvddzRoo09STKlMJkRm%2BRrLBRUtuqruhkJ9hb4rvWslTcg%2FprswNgaFe9VUNOsW3gfXT9Zoaaa%2BXn%2B4%2BAAO50uyIDz%2BrKjSswKaaowPTTjeLMxYs8ZHfJonQnQbSQijbSsBUn1RvWsMwwuAy&X-Amz-Signature=8cbae450c4209d2fcd5a820a9f51db584b50f8fdc4c0f91fb13a5d0cda10bca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBLQZQ5R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFQ3hKEQ7zJJvcANPfkhBJgkMPHJnbvx3%2BkmBK2lBPnAIgL39kz34k1ftRZfXxlHHn4YXEu4CJrH52Pm0bxk74mjUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSR8VUqfZROJZy4mCrcA%2BePE4MpOj9X9aET5Bjq3c052aCLj98fIxhc34ODsEqVYdyoqJMuglF11JfZZvERhVPWVF2lWug4JTmIdNf0W%2FnoC0ywu3EKwTG4OuDS3S29xVf19gVjBrTguvSHeaorC4uK4IBAJsj9SpyNaSw07XF99vJpr26sIJQRz5jeIhw1%2FMDM6p47s7Fb6FxW3a1mmc%2FnMqkjzY7LD89KMQlgNwEZgz%2BtRVnuUUSUh4w9fls4BbOdL%2B2F1ogxrVLRhkgdvUz5v26BrzUWpMh8%2BzMfz4mpQLi0KT4VzIAf3I24kHrOOzb6hWk1KycXUHRhY%2FhL%2BqwKs9gZdfZRG2gMxYR67HnoRLdEtTsVdTOFH4OL1%2F%2BsOzXGfO1PIHixGpeJE2ruBkigx%2BA7BSD4T%2BgNmygyWLgYNg0gBQucPO0JAp2Tr%2FWACdLdz7DfKXiGyJx%2Bg%2B4VO95BNkiIjjKv9QASMN3vIjBNO2JgRwmfXnAhcvl32%2BLSJkx7ah357X0llyY0dLAYClcrDt6v7fbrvXW6rioV4YtRWHEbF4Z9oyvU9U%2BDnIAGDl3lid%2FdZf1EP10rA73fApeHaB8TYX5BxKZBNfCfJ0JsaubQQjIUj3NnINAfDjKgt3HGFNlGtX%2ByefshMIDo3MQGOqUBMiWWRNwbAJVX3rIVntYoI9PQEMDS6615aqXy2zEbJlrMnWXBGeY8OXp%2F5jIVejt9xQVbyuhZlu6p%2FvddzRoo09STKlMJkRm%2BRrLBRUtuqruhkJ9hb4rvWslTcg%2FprswNgaFe9VUNOsW3gfXT9Zoaaa%2BXn%2B4%2BAAO50uyIDz%2BrKjSswKaaowPTTjeLMxYs8ZHfJonQnQbSQijbSsBUn1RvWsMwwuAy&X-Amz-Signature=ea38423e5e80051870dc358c8047178607be2544004b8e6112aa4e8defd62d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
