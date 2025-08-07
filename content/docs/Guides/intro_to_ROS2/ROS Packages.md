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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAVNV2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHJuUw5cUhQOXNzfwB6H%2BfuK6mJqQnifP6WYQKH%2BaA8%2FAiAFpRXjCLIEiH9o0AXvl%2F5WSsujLeLabtAQGBTCKz3DsCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFyq%2FBcywJXwXfAaKtwDbyIgyHY54lEhgFQ6D6JOizfMMrai97q1s85CJLL1IigzVOM2MMTk4q7TikE5JiGr93c7NTZSHd7NH7FxvViZr1criij%2FvKJcV%2BeigucGdrgDyAuc0A4kwRWXzg55%2FH45JjIJVrRtx4OJsx%2Bxter93IWXCfq2PvTLg3LdCXnVR7A9idLJp1h%2BDmIdN5Rp%2FnRkqSEUjr569%2BPHnj6gmTgWyhPYDXiAXECI%2FxX3SItC6pQFoDqfsED5xZnzxjfkdyrE0WkZhWdNUt%2FaWbVq8U8YKnVx3QK%2FLTGAhLk%2FZyELR1GoSD9%2Fm9Oe8cqCQazYaEJ5fmCIOb2mVssKf4PcTwMvCiiuJI1R7eDYMoGIDZr9Mn4f1Qgayglk9gggwyqdCZTMeBuAygS8YH1ZH%2FNVXfVSqOSRYYMG34Z3dWdywM2xY8HPe4nlRTksJuYMBj4P4aJ8ke0ge3CPkIkd0gbQJg8BtSfywayF6KMxBwwVoeX9J11SVccso9pl%2BBUupqHfiZXodbMv6KGvtZtJSubEWo9U9tSDO6zFTBEQhERc%2BvsL8%2F7kl%2FAqmi6GzcT2662C5tjFP5grZZ400D210wldK0FbI6C%2BVmqGh2Tewqnbw6fxUptfcptgFsxHJc%2Boz%2Fcw6rTRxAY6pgHCVzbRGd3N%2BK6fi3LotlyhNjFkogrbNGYYVkGfQyV5UhzrMQ1CkdILOD0m0hSAOhUffYUsBYAIpe2ihOONRb7WnmlVpW86rXnPv7SAJ9JDiXN90c7JxV1yTju8Tep8BlnSOtNFi61h4vLx6%2Fral8ZBY2utIjusa5MjSNWOsAbCWEK3LlDsd%2FxEvdiI8uzpr%2BRJI3JHjJCZP3F67oR8jE64DpaOBc1W&X-Amz-Signature=10aa5fff56560eea6ca462b1e6ecd42b6b1eaea40ed53e085642beca0682c0af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAVNV2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHJuUw5cUhQOXNzfwB6H%2BfuK6mJqQnifP6WYQKH%2BaA8%2FAiAFpRXjCLIEiH9o0AXvl%2F5WSsujLeLabtAQGBTCKz3DsCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFyq%2FBcywJXwXfAaKtwDbyIgyHY54lEhgFQ6D6JOizfMMrai97q1s85CJLL1IigzVOM2MMTk4q7TikE5JiGr93c7NTZSHd7NH7FxvViZr1criij%2FvKJcV%2BeigucGdrgDyAuc0A4kwRWXzg55%2FH45JjIJVrRtx4OJsx%2Bxter93IWXCfq2PvTLg3LdCXnVR7A9idLJp1h%2BDmIdN5Rp%2FnRkqSEUjr569%2BPHnj6gmTgWyhPYDXiAXECI%2FxX3SItC6pQFoDqfsED5xZnzxjfkdyrE0WkZhWdNUt%2FaWbVq8U8YKnVx3QK%2FLTGAhLk%2FZyELR1GoSD9%2Fm9Oe8cqCQazYaEJ5fmCIOb2mVssKf4PcTwMvCiiuJI1R7eDYMoGIDZr9Mn4f1Qgayglk9gggwyqdCZTMeBuAygS8YH1ZH%2FNVXfVSqOSRYYMG34Z3dWdywM2xY8HPe4nlRTksJuYMBj4P4aJ8ke0ge3CPkIkd0gbQJg8BtSfywayF6KMxBwwVoeX9J11SVccso9pl%2BBUupqHfiZXodbMv6KGvtZtJSubEWo9U9tSDO6zFTBEQhERc%2BvsL8%2F7kl%2FAqmi6GzcT2662C5tjFP5grZZ400D210wldK0FbI6C%2BVmqGh2Tewqnbw6fxUptfcptgFsxHJc%2Boz%2Fcw6rTRxAY6pgHCVzbRGd3N%2BK6fi3LotlyhNjFkogrbNGYYVkGfQyV5UhzrMQ1CkdILOD0m0hSAOhUffYUsBYAIpe2ihOONRb7WnmlVpW86rXnPv7SAJ9JDiXN90c7JxV1yTju8Tep8BlnSOtNFi61h4vLx6%2Fral8ZBY2utIjusa5MjSNWOsAbCWEK3LlDsd%2FxEvdiI8uzpr%2BRJI3JHjJCZP3F67oR8jE64DpaOBc1W&X-Amz-Signature=51bc4d4e689270345552373754176e9a39a135272b0b7a82dd78fcd921400178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAVNV2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHJuUw5cUhQOXNzfwB6H%2BfuK6mJqQnifP6WYQKH%2BaA8%2FAiAFpRXjCLIEiH9o0AXvl%2F5WSsujLeLabtAQGBTCKz3DsCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFyq%2FBcywJXwXfAaKtwDbyIgyHY54lEhgFQ6D6JOizfMMrai97q1s85CJLL1IigzVOM2MMTk4q7TikE5JiGr93c7NTZSHd7NH7FxvViZr1criij%2FvKJcV%2BeigucGdrgDyAuc0A4kwRWXzg55%2FH45JjIJVrRtx4OJsx%2Bxter93IWXCfq2PvTLg3LdCXnVR7A9idLJp1h%2BDmIdN5Rp%2FnRkqSEUjr569%2BPHnj6gmTgWyhPYDXiAXECI%2FxX3SItC6pQFoDqfsED5xZnzxjfkdyrE0WkZhWdNUt%2FaWbVq8U8YKnVx3QK%2FLTGAhLk%2FZyELR1GoSD9%2Fm9Oe8cqCQazYaEJ5fmCIOb2mVssKf4PcTwMvCiiuJI1R7eDYMoGIDZr9Mn4f1Qgayglk9gggwyqdCZTMeBuAygS8YH1ZH%2FNVXfVSqOSRYYMG34Z3dWdywM2xY8HPe4nlRTksJuYMBj4P4aJ8ke0ge3CPkIkd0gbQJg8BtSfywayF6KMxBwwVoeX9J11SVccso9pl%2BBUupqHfiZXodbMv6KGvtZtJSubEWo9U9tSDO6zFTBEQhERc%2BvsL8%2F7kl%2FAqmi6GzcT2662C5tjFP5grZZ400D210wldK0FbI6C%2BVmqGh2Tewqnbw6fxUptfcptgFsxHJc%2Boz%2Fcw6rTRxAY6pgHCVzbRGd3N%2BK6fi3LotlyhNjFkogrbNGYYVkGfQyV5UhzrMQ1CkdILOD0m0hSAOhUffYUsBYAIpe2ihOONRb7WnmlVpW86rXnPv7SAJ9JDiXN90c7JxV1yTju8Tep8BlnSOtNFi61h4vLx6%2Fral8ZBY2utIjusa5MjSNWOsAbCWEK3LlDsd%2FxEvdiI8uzpr%2BRJI3JHjJCZP3F67oR8jE64DpaOBc1W&X-Amz-Signature=cc230af4cc23981b468622b82dbb7d17e79549cc5eb9385d8432b1eb31cd772a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAVNV2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHJuUw5cUhQOXNzfwB6H%2BfuK6mJqQnifP6WYQKH%2BaA8%2FAiAFpRXjCLIEiH9o0AXvl%2F5WSsujLeLabtAQGBTCKz3DsCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFyq%2FBcywJXwXfAaKtwDbyIgyHY54lEhgFQ6D6JOizfMMrai97q1s85CJLL1IigzVOM2MMTk4q7TikE5JiGr93c7NTZSHd7NH7FxvViZr1criij%2FvKJcV%2BeigucGdrgDyAuc0A4kwRWXzg55%2FH45JjIJVrRtx4OJsx%2Bxter93IWXCfq2PvTLg3LdCXnVR7A9idLJp1h%2BDmIdN5Rp%2FnRkqSEUjr569%2BPHnj6gmTgWyhPYDXiAXECI%2FxX3SItC6pQFoDqfsED5xZnzxjfkdyrE0WkZhWdNUt%2FaWbVq8U8YKnVx3QK%2FLTGAhLk%2FZyELR1GoSD9%2Fm9Oe8cqCQazYaEJ5fmCIOb2mVssKf4PcTwMvCiiuJI1R7eDYMoGIDZr9Mn4f1Qgayglk9gggwyqdCZTMeBuAygS8YH1ZH%2FNVXfVSqOSRYYMG34Z3dWdywM2xY8HPe4nlRTksJuYMBj4P4aJ8ke0ge3CPkIkd0gbQJg8BtSfywayF6KMxBwwVoeX9J11SVccso9pl%2BBUupqHfiZXodbMv6KGvtZtJSubEWo9U9tSDO6zFTBEQhERc%2BvsL8%2F7kl%2FAqmi6GzcT2662C5tjFP5grZZ400D210wldK0FbI6C%2BVmqGh2Tewqnbw6fxUptfcptgFsxHJc%2Boz%2Fcw6rTRxAY6pgHCVzbRGd3N%2BK6fi3LotlyhNjFkogrbNGYYVkGfQyV5UhzrMQ1CkdILOD0m0hSAOhUffYUsBYAIpe2ihOONRb7WnmlVpW86rXnPv7SAJ9JDiXN90c7JxV1yTju8Tep8BlnSOtNFi61h4vLx6%2Fral8ZBY2utIjusa5MjSNWOsAbCWEK3LlDsd%2FxEvdiI8uzpr%2BRJI3JHjJCZP3F67oR8jE64DpaOBc1W&X-Amz-Signature=a42fd22bf72f1b0924b5f766937c621b5d75eb0527f7fca5f33789fa8adf8325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAVNV2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHJuUw5cUhQOXNzfwB6H%2BfuK6mJqQnifP6WYQKH%2BaA8%2FAiAFpRXjCLIEiH9o0AXvl%2F5WSsujLeLabtAQGBTCKz3DsCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFyq%2FBcywJXwXfAaKtwDbyIgyHY54lEhgFQ6D6JOizfMMrai97q1s85CJLL1IigzVOM2MMTk4q7TikE5JiGr93c7NTZSHd7NH7FxvViZr1criij%2FvKJcV%2BeigucGdrgDyAuc0A4kwRWXzg55%2FH45JjIJVrRtx4OJsx%2Bxter93IWXCfq2PvTLg3LdCXnVR7A9idLJp1h%2BDmIdN5Rp%2FnRkqSEUjr569%2BPHnj6gmTgWyhPYDXiAXECI%2FxX3SItC6pQFoDqfsED5xZnzxjfkdyrE0WkZhWdNUt%2FaWbVq8U8YKnVx3QK%2FLTGAhLk%2FZyELR1GoSD9%2Fm9Oe8cqCQazYaEJ5fmCIOb2mVssKf4PcTwMvCiiuJI1R7eDYMoGIDZr9Mn4f1Qgayglk9gggwyqdCZTMeBuAygS8YH1ZH%2FNVXfVSqOSRYYMG34Z3dWdywM2xY8HPe4nlRTksJuYMBj4P4aJ8ke0ge3CPkIkd0gbQJg8BtSfywayF6KMxBwwVoeX9J11SVccso9pl%2BBUupqHfiZXodbMv6KGvtZtJSubEWo9U9tSDO6zFTBEQhERc%2BvsL8%2F7kl%2FAqmi6GzcT2662C5tjFP5grZZ400D210wldK0FbI6C%2BVmqGh2Tewqnbw6fxUptfcptgFsxHJc%2Boz%2Fcw6rTRxAY6pgHCVzbRGd3N%2BK6fi3LotlyhNjFkogrbNGYYVkGfQyV5UhzrMQ1CkdILOD0m0hSAOhUffYUsBYAIpe2ihOONRb7WnmlVpW86rXnPv7SAJ9JDiXN90c7JxV1yTju8Tep8BlnSOtNFi61h4vLx6%2Fral8ZBY2utIjusa5MjSNWOsAbCWEK3LlDsd%2FxEvdiI8uzpr%2BRJI3JHjJCZP3F67oR8jE64DpaOBc1W&X-Amz-Signature=814727caddf714576229b69f1b81c44703915020fc1860c398c2408ef10c77b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAVNV2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHJuUw5cUhQOXNzfwB6H%2BfuK6mJqQnifP6WYQKH%2BaA8%2FAiAFpRXjCLIEiH9o0AXvl%2F5WSsujLeLabtAQGBTCKz3DsCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFyq%2FBcywJXwXfAaKtwDbyIgyHY54lEhgFQ6D6JOizfMMrai97q1s85CJLL1IigzVOM2MMTk4q7TikE5JiGr93c7NTZSHd7NH7FxvViZr1criij%2FvKJcV%2BeigucGdrgDyAuc0A4kwRWXzg55%2FH45JjIJVrRtx4OJsx%2Bxter93IWXCfq2PvTLg3LdCXnVR7A9idLJp1h%2BDmIdN5Rp%2FnRkqSEUjr569%2BPHnj6gmTgWyhPYDXiAXECI%2FxX3SItC6pQFoDqfsED5xZnzxjfkdyrE0WkZhWdNUt%2FaWbVq8U8YKnVx3QK%2FLTGAhLk%2FZyELR1GoSD9%2Fm9Oe8cqCQazYaEJ5fmCIOb2mVssKf4PcTwMvCiiuJI1R7eDYMoGIDZr9Mn4f1Qgayglk9gggwyqdCZTMeBuAygS8YH1ZH%2FNVXfVSqOSRYYMG34Z3dWdywM2xY8HPe4nlRTksJuYMBj4P4aJ8ke0ge3CPkIkd0gbQJg8BtSfywayF6KMxBwwVoeX9J11SVccso9pl%2BBUupqHfiZXodbMv6KGvtZtJSubEWo9U9tSDO6zFTBEQhERc%2BvsL8%2F7kl%2FAqmi6GzcT2662C5tjFP5grZZ400D210wldK0FbI6C%2BVmqGh2Tewqnbw6fxUptfcptgFsxHJc%2Boz%2Fcw6rTRxAY6pgHCVzbRGd3N%2BK6fi3LotlyhNjFkogrbNGYYVkGfQyV5UhzrMQ1CkdILOD0m0hSAOhUffYUsBYAIpe2ihOONRb7WnmlVpW86rXnPv7SAJ9JDiXN90c7JxV1yTju8Tep8BlnSOtNFi61h4vLx6%2Fral8ZBY2utIjusa5MjSNWOsAbCWEK3LlDsd%2FxEvdiI8uzpr%2BRJI3JHjJCZP3F67oR8jE64DpaOBc1W&X-Amz-Signature=4767d371eedc1baf4576fb9301e2365af27dfa684857bb58dc3892462d61449c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAVNV2B%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIHJuUw5cUhQOXNzfwB6H%2BfuK6mJqQnifP6WYQKH%2BaA8%2FAiAFpRXjCLIEiH9o0AXvl%2F5WSsujLeLabtAQGBTCKz3DsCqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCFyq%2FBcywJXwXfAaKtwDbyIgyHY54lEhgFQ6D6JOizfMMrai97q1s85CJLL1IigzVOM2MMTk4q7TikE5JiGr93c7NTZSHd7NH7FxvViZr1criij%2FvKJcV%2BeigucGdrgDyAuc0A4kwRWXzg55%2FH45JjIJVrRtx4OJsx%2Bxter93IWXCfq2PvTLg3LdCXnVR7A9idLJp1h%2BDmIdN5Rp%2FnRkqSEUjr569%2BPHnj6gmTgWyhPYDXiAXECI%2FxX3SItC6pQFoDqfsED5xZnzxjfkdyrE0WkZhWdNUt%2FaWbVq8U8YKnVx3QK%2FLTGAhLk%2FZyELR1GoSD9%2Fm9Oe8cqCQazYaEJ5fmCIOb2mVssKf4PcTwMvCiiuJI1R7eDYMoGIDZr9Mn4f1Qgayglk9gggwyqdCZTMeBuAygS8YH1ZH%2FNVXfVSqOSRYYMG34Z3dWdywM2xY8HPe4nlRTksJuYMBj4P4aJ8ke0ge3CPkIkd0gbQJg8BtSfywayF6KMxBwwVoeX9J11SVccso9pl%2BBUupqHfiZXodbMv6KGvtZtJSubEWo9U9tSDO6zFTBEQhERc%2BvsL8%2F7kl%2FAqmi6GzcT2662C5tjFP5grZZ400D210wldK0FbI6C%2BVmqGh2Tewqnbw6fxUptfcptgFsxHJc%2Boz%2Fcw6rTRxAY6pgHCVzbRGd3N%2BK6fi3LotlyhNjFkogrbNGYYVkGfQyV5UhzrMQ1CkdILOD0m0hSAOhUffYUsBYAIpe2ihOONRb7WnmlVpW86rXnPv7SAJ9JDiXN90c7JxV1yTju8Tep8BlnSOtNFi61h4vLx6%2Fral8ZBY2utIjusa5MjSNWOsAbCWEK3LlDsd%2FxEvdiI8uzpr%2BRJI3JHjJCZP3F67oR8jE64DpaOBc1W&X-Amz-Signature=bf9243d062d3a7300a56283851c24098dab7039e647849ef119d26e192503511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
