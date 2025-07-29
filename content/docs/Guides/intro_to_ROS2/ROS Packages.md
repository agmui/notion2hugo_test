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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666264O4JI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9tIv8kShR%2B60hjcYaLcy3QdOZysTEXwqlqjrCo80KfAiEAmlRAsa7Jv0XNGNZ%2FRCDYft4Ad2Zc7%2F0pg2Jl9KzK8lkqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdhI%2FXcmSGFtCW7WSrcA8dcV%2B3yPW66AC4T5SnHZXIvxd2NSQGl5xvfEmIyD665j7KbUDkYOidC35cAZhw5OBotD38rheAZBJBEhfXpP37UH7H8EVbrnDJ2BYtiX7Wt6rAOUcIY5LgwZ%2BwW7RkRcBWyBVSTpvQEZwuo7ih2Y%2FZjAvg5inPzn2VMk82u9fBbVpb6kXiqdanJnR3TxhmQrXkyVPaP6fObqH4%2B1PsDi8He4lUYLWG5aTg5tUiNppTGUxc%2BRl3x2OHKQAMoLqCCveInpdgZqx2J8sR1K8DM1dTHVWtVnNplbMrWpXNPQZQuVocwT3oVo9CxycqlpgmCjiD06BUS2R0sh6xTlXoW%2FqchNsgndfy817nlIHj0WX%2Bj2SP619XOGnX6mPWEC1PlsI3bkuJ6ZLYcweiyk20HCpUMovj8sg0C0%2Be86PVH24Qj0EbYJv04SKkxxLRf9IOZtEK8o%2Bqa6b8miSJa763A%2FvAFxbhqGMo6kC8qaI2DjTaNohYvV7YTzzJyE%2Ffu5acZ22SE5Fn%2FuRBCi4igmrj6iSKmlbg72HBk6CucHNw1TwMReV4T%2BnY1zPwhCFZ5vEcAPfAiC%2BkmVLwC8k3fYdWYzYVjPx6w5zsUXnKorDC8brDnBmNUn1fNcesKqjznMPr%2Bo8QGOqUBVV0MR6wMcwrLYy%2F3KBwise2wH7tKGXLgg3vWMVxGTqk0G1nagIn2LhYcgmFyriTdihSGi1mjF1YCaBYC1nfeVIuQMJaEmhg%2BCx%2FPHwm5TqVjpM%2FBnH8pP8JlPkia8sw4JOS4Gx9b1t3Qx9Yxq%2F%2BUhKub2rpyZgpnOYfuMWy%2FkPCFyQM4q4LFCIKBg7MX6rYxhU2LERKBIqwgL%2FcnRj%2Fgq7f4Z6%2Fc&X-Amz-Signature=947a0cee0f46c8531d352ed4e58c0b5095149d38cd301ec84352bb072a277bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666264O4JI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9tIv8kShR%2B60hjcYaLcy3QdOZysTEXwqlqjrCo80KfAiEAmlRAsa7Jv0XNGNZ%2FRCDYft4Ad2Zc7%2F0pg2Jl9KzK8lkqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdhI%2FXcmSGFtCW7WSrcA8dcV%2B3yPW66AC4T5SnHZXIvxd2NSQGl5xvfEmIyD665j7KbUDkYOidC35cAZhw5OBotD38rheAZBJBEhfXpP37UH7H8EVbrnDJ2BYtiX7Wt6rAOUcIY5LgwZ%2BwW7RkRcBWyBVSTpvQEZwuo7ih2Y%2FZjAvg5inPzn2VMk82u9fBbVpb6kXiqdanJnR3TxhmQrXkyVPaP6fObqH4%2B1PsDi8He4lUYLWG5aTg5tUiNppTGUxc%2BRl3x2OHKQAMoLqCCveInpdgZqx2J8sR1K8DM1dTHVWtVnNplbMrWpXNPQZQuVocwT3oVo9CxycqlpgmCjiD06BUS2R0sh6xTlXoW%2FqchNsgndfy817nlIHj0WX%2Bj2SP619XOGnX6mPWEC1PlsI3bkuJ6ZLYcweiyk20HCpUMovj8sg0C0%2Be86PVH24Qj0EbYJv04SKkxxLRf9IOZtEK8o%2Bqa6b8miSJa763A%2FvAFxbhqGMo6kC8qaI2DjTaNohYvV7YTzzJyE%2Ffu5acZ22SE5Fn%2FuRBCi4igmrj6iSKmlbg72HBk6CucHNw1TwMReV4T%2BnY1zPwhCFZ5vEcAPfAiC%2BkmVLwC8k3fYdWYzYVjPx6w5zsUXnKorDC8brDnBmNUn1fNcesKqjznMPr%2Bo8QGOqUBVV0MR6wMcwrLYy%2F3KBwise2wH7tKGXLgg3vWMVxGTqk0G1nagIn2LhYcgmFyriTdihSGi1mjF1YCaBYC1nfeVIuQMJaEmhg%2BCx%2FPHwm5TqVjpM%2FBnH8pP8JlPkia8sw4JOS4Gx9b1t3Qx9Yxq%2F%2BUhKub2rpyZgpnOYfuMWy%2FkPCFyQM4q4LFCIKBg7MX6rYxhU2LERKBIqwgL%2FcnRj%2Fgq7f4Z6%2Fc&X-Amz-Signature=ccbe6981aa9b8ef8300acc8a4b31c856095036305de58dfdcf575819046ca0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666264O4JI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9tIv8kShR%2B60hjcYaLcy3QdOZysTEXwqlqjrCo80KfAiEAmlRAsa7Jv0XNGNZ%2FRCDYft4Ad2Zc7%2F0pg2Jl9KzK8lkqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdhI%2FXcmSGFtCW7WSrcA8dcV%2B3yPW66AC4T5SnHZXIvxd2NSQGl5xvfEmIyD665j7KbUDkYOidC35cAZhw5OBotD38rheAZBJBEhfXpP37UH7H8EVbrnDJ2BYtiX7Wt6rAOUcIY5LgwZ%2BwW7RkRcBWyBVSTpvQEZwuo7ih2Y%2FZjAvg5inPzn2VMk82u9fBbVpb6kXiqdanJnR3TxhmQrXkyVPaP6fObqH4%2B1PsDi8He4lUYLWG5aTg5tUiNppTGUxc%2BRl3x2OHKQAMoLqCCveInpdgZqx2J8sR1K8DM1dTHVWtVnNplbMrWpXNPQZQuVocwT3oVo9CxycqlpgmCjiD06BUS2R0sh6xTlXoW%2FqchNsgndfy817nlIHj0WX%2Bj2SP619XOGnX6mPWEC1PlsI3bkuJ6ZLYcweiyk20HCpUMovj8sg0C0%2Be86PVH24Qj0EbYJv04SKkxxLRf9IOZtEK8o%2Bqa6b8miSJa763A%2FvAFxbhqGMo6kC8qaI2DjTaNohYvV7YTzzJyE%2Ffu5acZ22SE5Fn%2FuRBCi4igmrj6iSKmlbg72HBk6CucHNw1TwMReV4T%2BnY1zPwhCFZ5vEcAPfAiC%2BkmVLwC8k3fYdWYzYVjPx6w5zsUXnKorDC8brDnBmNUn1fNcesKqjznMPr%2Bo8QGOqUBVV0MR6wMcwrLYy%2F3KBwise2wH7tKGXLgg3vWMVxGTqk0G1nagIn2LhYcgmFyriTdihSGi1mjF1YCaBYC1nfeVIuQMJaEmhg%2BCx%2FPHwm5TqVjpM%2FBnH8pP8JlPkia8sw4JOS4Gx9b1t3Qx9Yxq%2F%2BUhKub2rpyZgpnOYfuMWy%2FkPCFyQM4q4LFCIKBg7MX6rYxhU2LERKBIqwgL%2FcnRj%2Fgq7f4Z6%2Fc&X-Amz-Signature=43a02010d1c72b7b1da7bdb5a2696ecf83f26452a5ba36addb4cfe998410328d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666264O4JI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9tIv8kShR%2B60hjcYaLcy3QdOZysTEXwqlqjrCo80KfAiEAmlRAsa7Jv0XNGNZ%2FRCDYft4Ad2Zc7%2F0pg2Jl9KzK8lkqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdhI%2FXcmSGFtCW7WSrcA8dcV%2B3yPW66AC4T5SnHZXIvxd2NSQGl5xvfEmIyD665j7KbUDkYOidC35cAZhw5OBotD38rheAZBJBEhfXpP37UH7H8EVbrnDJ2BYtiX7Wt6rAOUcIY5LgwZ%2BwW7RkRcBWyBVSTpvQEZwuo7ih2Y%2FZjAvg5inPzn2VMk82u9fBbVpb6kXiqdanJnR3TxhmQrXkyVPaP6fObqH4%2B1PsDi8He4lUYLWG5aTg5tUiNppTGUxc%2BRl3x2OHKQAMoLqCCveInpdgZqx2J8sR1K8DM1dTHVWtVnNplbMrWpXNPQZQuVocwT3oVo9CxycqlpgmCjiD06BUS2R0sh6xTlXoW%2FqchNsgndfy817nlIHj0WX%2Bj2SP619XOGnX6mPWEC1PlsI3bkuJ6ZLYcweiyk20HCpUMovj8sg0C0%2Be86PVH24Qj0EbYJv04SKkxxLRf9IOZtEK8o%2Bqa6b8miSJa763A%2FvAFxbhqGMo6kC8qaI2DjTaNohYvV7YTzzJyE%2Ffu5acZ22SE5Fn%2FuRBCi4igmrj6iSKmlbg72HBk6CucHNw1TwMReV4T%2BnY1zPwhCFZ5vEcAPfAiC%2BkmVLwC8k3fYdWYzYVjPx6w5zsUXnKorDC8brDnBmNUn1fNcesKqjznMPr%2Bo8QGOqUBVV0MR6wMcwrLYy%2F3KBwise2wH7tKGXLgg3vWMVxGTqk0G1nagIn2LhYcgmFyriTdihSGi1mjF1YCaBYC1nfeVIuQMJaEmhg%2BCx%2FPHwm5TqVjpM%2FBnH8pP8JlPkia8sw4JOS4Gx9b1t3Qx9Yxq%2F%2BUhKub2rpyZgpnOYfuMWy%2FkPCFyQM4q4LFCIKBg7MX6rYxhU2LERKBIqwgL%2FcnRj%2Fgq7f4Z6%2Fc&X-Amz-Signature=8f7850a1e58c8dc16917aaf8cdf4a5a2a4f71551f32ec4283180d0e783ae1778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666264O4JI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9tIv8kShR%2B60hjcYaLcy3QdOZysTEXwqlqjrCo80KfAiEAmlRAsa7Jv0XNGNZ%2FRCDYft4Ad2Zc7%2F0pg2Jl9KzK8lkqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdhI%2FXcmSGFtCW7WSrcA8dcV%2B3yPW66AC4T5SnHZXIvxd2NSQGl5xvfEmIyD665j7KbUDkYOidC35cAZhw5OBotD38rheAZBJBEhfXpP37UH7H8EVbrnDJ2BYtiX7Wt6rAOUcIY5LgwZ%2BwW7RkRcBWyBVSTpvQEZwuo7ih2Y%2FZjAvg5inPzn2VMk82u9fBbVpb6kXiqdanJnR3TxhmQrXkyVPaP6fObqH4%2B1PsDi8He4lUYLWG5aTg5tUiNppTGUxc%2BRl3x2OHKQAMoLqCCveInpdgZqx2J8sR1K8DM1dTHVWtVnNplbMrWpXNPQZQuVocwT3oVo9CxycqlpgmCjiD06BUS2R0sh6xTlXoW%2FqchNsgndfy817nlIHj0WX%2Bj2SP619XOGnX6mPWEC1PlsI3bkuJ6ZLYcweiyk20HCpUMovj8sg0C0%2Be86PVH24Qj0EbYJv04SKkxxLRf9IOZtEK8o%2Bqa6b8miSJa763A%2FvAFxbhqGMo6kC8qaI2DjTaNohYvV7YTzzJyE%2Ffu5acZ22SE5Fn%2FuRBCi4igmrj6iSKmlbg72HBk6CucHNw1TwMReV4T%2BnY1zPwhCFZ5vEcAPfAiC%2BkmVLwC8k3fYdWYzYVjPx6w5zsUXnKorDC8brDnBmNUn1fNcesKqjznMPr%2Bo8QGOqUBVV0MR6wMcwrLYy%2F3KBwise2wH7tKGXLgg3vWMVxGTqk0G1nagIn2LhYcgmFyriTdihSGi1mjF1YCaBYC1nfeVIuQMJaEmhg%2BCx%2FPHwm5TqVjpM%2FBnH8pP8JlPkia8sw4JOS4Gx9b1t3Qx9Yxq%2F%2BUhKub2rpyZgpnOYfuMWy%2FkPCFyQM4q4LFCIKBg7MX6rYxhU2LERKBIqwgL%2FcnRj%2Fgq7f4Z6%2Fc&X-Amz-Signature=35e63a813a795a8b631ecc98d96965f1a47a03722ad50d78dcc3d49036c1c86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666264O4JI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9tIv8kShR%2B60hjcYaLcy3QdOZysTEXwqlqjrCo80KfAiEAmlRAsa7Jv0XNGNZ%2FRCDYft4Ad2Zc7%2F0pg2Jl9KzK8lkqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdhI%2FXcmSGFtCW7WSrcA8dcV%2B3yPW66AC4T5SnHZXIvxd2NSQGl5xvfEmIyD665j7KbUDkYOidC35cAZhw5OBotD38rheAZBJBEhfXpP37UH7H8EVbrnDJ2BYtiX7Wt6rAOUcIY5LgwZ%2BwW7RkRcBWyBVSTpvQEZwuo7ih2Y%2FZjAvg5inPzn2VMk82u9fBbVpb6kXiqdanJnR3TxhmQrXkyVPaP6fObqH4%2B1PsDi8He4lUYLWG5aTg5tUiNppTGUxc%2BRl3x2OHKQAMoLqCCveInpdgZqx2J8sR1K8DM1dTHVWtVnNplbMrWpXNPQZQuVocwT3oVo9CxycqlpgmCjiD06BUS2R0sh6xTlXoW%2FqchNsgndfy817nlIHj0WX%2Bj2SP619XOGnX6mPWEC1PlsI3bkuJ6ZLYcweiyk20HCpUMovj8sg0C0%2Be86PVH24Qj0EbYJv04SKkxxLRf9IOZtEK8o%2Bqa6b8miSJa763A%2FvAFxbhqGMo6kC8qaI2DjTaNohYvV7YTzzJyE%2Ffu5acZ22SE5Fn%2FuRBCi4igmrj6iSKmlbg72HBk6CucHNw1TwMReV4T%2BnY1zPwhCFZ5vEcAPfAiC%2BkmVLwC8k3fYdWYzYVjPx6w5zsUXnKorDC8brDnBmNUn1fNcesKqjznMPr%2Bo8QGOqUBVV0MR6wMcwrLYy%2F3KBwise2wH7tKGXLgg3vWMVxGTqk0G1nagIn2LhYcgmFyriTdihSGi1mjF1YCaBYC1nfeVIuQMJaEmhg%2BCx%2FPHwm5TqVjpM%2FBnH8pP8JlPkia8sw4JOS4Gx9b1t3Qx9Yxq%2F%2BUhKub2rpyZgpnOYfuMWy%2FkPCFyQM4q4LFCIKBg7MX6rYxhU2LERKBIqwgL%2FcnRj%2Fgq7f4Z6%2Fc&X-Amz-Signature=52278450c98b46c0e669c2e61e4fab871da012c67ab8009adb19ac4034b91ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666264O4JI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9tIv8kShR%2B60hjcYaLcy3QdOZysTEXwqlqjrCo80KfAiEAmlRAsa7Jv0XNGNZ%2FRCDYft4Ad2Zc7%2F0pg2Jl9KzK8lkqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCdhI%2FXcmSGFtCW7WSrcA8dcV%2B3yPW66AC4T5SnHZXIvxd2NSQGl5xvfEmIyD665j7KbUDkYOidC35cAZhw5OBotD38rheAZBJBEhfXpP37UH7H8EVbrnDJ2BYtiX7Wt6rAOUcIY5LgwZ%2BwW7RkRcBWyBVSTpvQEZwuo7ih2Y%2FZjAvg5inPzn2VMk82u9fBbVpb6kXiqdanJnR3TxhmQrXkyVPaP6fObqH4%2B1PsDi8He4lUYLWG5aTg5tUiNppTGUxc%2BRl3x2OHKQAMoLqCCveInpdgZqx2J8sR1K8DM1dTHVWtVnNplbMrWpXNPQZQuVocwT3oVo9CxycqlpgmCjiD06BUS2R0sh6xTlXoW%2FqchNsgndfy817nlIHj0WX%2Bj2SP619XOGnX6mPWEC1PlsI3bkuJ6ZLYcweiyk20HCpUMovj8sg0C0%2Be86PVH24Qj0EbYJv04SKkxxLRf9IOZtEK8o%2Bqa6b8miSJa763A%2FvAFxbhqGMo6kC8qaI2DjTaNohYvV7YTzzJyE%2Ffu5acZ22SE5Fn%2FuRBCi4igmrj6iSKmlbg72HBk6CucHNw1TwMReV4T%2BnY1zPwhCFZ5vEcAPfAiC%2BkmVLwC8k3fYdWYzYVjPx6w5zsUXnKorDC8brDnBmNUn1fNcesKqjznMPr%2Bo8QGOqUBVV0MR6wMcwrLYy%2F3KBwise2wH7tKGXLgg3vWMVxGTqk0G1nagIn2LhYcgmFyriTdihSGi1mjF1YCaBYC1nfeVIuQMJaEmhg%2BCx%2FPHwm5TqVjpM%2FBnH8pP8JlPkia8sw4JOS4Gx9b1t3Qx9Yxq%2F%2BUhKub2rpyZgpnOYfuMWy%2FkPCFyQM4q4LFCIKBg7MX6rYxhU2LERKBIqwgL%2FcnRj%2Fgq7f4Z6%2Fc&X-Amz-Signature=6f362e16a51b06a3c720aca0d8d81b660177e5fcef3211fb6360bed4a36509b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
