---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PE33Y5A%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC%2BlGIxXo7KlF3Nbi8GLTtMtPseqZNx8omw6gfp2UMmsAIhAJTqVdtvdTmLRlSqhM6oNJhJbPI9W%2BZwUAQCOQV%2FA44wKv8DCFUQABoMNjM3NDIzMTgzODA1IgytlYixRoMjorBZIhAq3ANx4xSJQgXCffH59GinJ9j7b2EgiSRxllDAyCvLGFEZ1w6lP%2FOu7yUF8yoJGbmTZ0poyF22%2FnBMI6rspsnwEtmsh2XYavhfeQGPLV7EbUI%2FioL3Pt2IJk7BRcGgCPGljAj0oQ1Buc%2Bl67Pcba%2ByV4SHQ%2BOSQ%2BrAYc7uMdzaUyeH9ZfoT6PfItGz5NE3j%2FKU3omO5jm5YhahYDNX6oSA%2BoCrgdgOfuwLv5i0YnGoLEbEYfOdfRVhwmc0IdiszPFM5fl2WXNSC4I6VRKkWKZHBbqTVzbZW9ZXOP8%2BNJ0vjUUwymMa0GkBSkrRZ6Xisd7WNzTLQAcpKX1Mr5OsA2Ny3GLPzIcRbUojTsfJZJfMYd%2F8h7QdYJTHJtzNcBEngRtEaF9jpY2Ahd5nit87%2FmxzHHpS8%2FppE3HKCRg8GogoRnl6apuuP8is5dN8wJNVl4%2B43BXijKOUOOKnbETLZr61GhHe8djGPFuogThqtwYbqPWe9Kwva0rNjj8J%2B1kFVlr9rIa1EbeGquxGiwRXygjRBlab4zWndPkY37%2FzoRUHBCvZyKQBJNuxdZ4o00WPP07cU0vgwid9Dve7uE7FXdwJ6CcXeIuHjYsevkwSPaNA%2BameDMye1gi1NLpgvkUBRzC0ifPCBjqkAXFgn2LN%2FbEEEt2OszmYeAJ4%2Brdf%2BxwmUpESouYzpsStveZa8pHY8ggdu4OLL9rxQk8iAWgmtyngRRTyuiT8S8gEO5sxQLXn%2BOkJA8AJp77kJaHLMQSnSk1D1lmTkr13zmbSGuXq64rgupn%2F6HN2gOxWS%2B2BV2thzoqxp5MqcRcQ%2FSl75%2FIcQHVZ1P92%2BvheTTrNdI0EKEVAkzz3wN7G2gehr2vu&X-Amz-Signature=2abbf9999172f8937e7bc27889b7976d13de71ca7abdef66000958cfc001fe73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PE33Y5A%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC%2BlGIxXo7KlF3Nbi8GLTtMtPseqZNx8omw6gfp2UMmsAIhAJTqVdtvdTmLRlSqhM6oNJhJbPI9W%2BZwUAQCOQV%2FA44wKv8DCFUQABoMNjM3NDIzMTgzODA1IgytlYixRoMjorBZIhAq3ANx4xSJQgXCffH59GinJ9j7b2EgiSRxllDAyCvLGFEZ1w6lP%2FOu7yUF8yoJGbmTZ0poyF22%2FnBMI6rspsnwEtmsh2XYavhfeQGPLV7EbUI%2FioL3Pt2IJk7BRcGgCPGljAj0oQ1Buc%2Bl67Pcba%2ByV4SHQ%2BOSQ%2BrAYc7uMdzaUyeH9ZfoT6PfItGz5NE3j%2FKU3omO5jm5YhahYDNX6oSA%2BoCrgdgOfuwLv5i0YnGoLEbEYfOdfRVhwmc0IdiszPFM5fl2WXNSC4I6VRKkWKZHBbqTVzbZW9ZXOP8%2BNJ0vjUUwymMa0GkBSkrRZ6Xisd7WNzTLQAcpKX1Mr5OsA2Ny3GLPzIcRbUojTsfJZJfMYd%2F8h7QdYJTHJtzNcBEngRtEaF9jpY2Ahd5nit87%2FmxzHHpS8%2FppE3HKCRg8GogoRnl6apuuP8is5dN8wJNVl4%2B43BXijKOUOOKnbETLZr61GhHe8djGPFuogThqtwYbqPWe9Kwva0rNjj8J%2B1kFVlr9rIa1EbeGquxGiwRXygjRBlab4zWndPkY37%2FzoRUHBCvZyKQBJNuxdZ4o00WPP07cU0vgwid9Dve7uE7FXdwJ6CcXeIuHjYsevkwSPaNA%2BameDMye1gi1NLpgvkUBRzC0ifPCBjqkAXFgn2LN%2FbEEEt2OszmYeAJ4%2Brdf%2BxwmUpESouYzpsStveZa8pHY8ggdu4OLL9rxQk8iAWgmtyngRRTyuiT8S8gEO5sxQLXn%2BOkJA8AJp77kJaHLMQSnSk1D1lmTkr13zmbSGuXq64rgupn%2F6HN2gOxWS%2B2BV2thzoqxp5MqcRcQ%2FSl75%2FIcQHVZ1P92%2BvheTTrNdI0EKEVAkzz3wN7G2gehr2vu&X-Amz-Signature=595e936cf0bdc032f0ae799e65bf3104d0dbe144f1ad4106c732c532d0b9977b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PE33Y5A%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC%2BlGIxXo7KlF3Nbi8GLTtMtPseqZNx8omw6gfp2UMmsAIhAJTqVdtvdTmLRlSqhM6oNJhJbPI9W%2BZwUAQCOQV%2FA44wKv8DCFUQABoMNjM3NDIzMTgzODA1IgytlYixRoMjorBZIhAq3ANx4xSJQgXCffH59GinJ9j7b2EgiSRxllDAyCvLGFEZ1w6lP%2FOu7yUF8yoJGbmTZ0poyF22%2FnBMI6rspsnwEtmsh2XYavhfeQGPLV7EbUI%2FioL3Pt2IJk7BRcGgCPGljAj0oQ1Buc%2Bl67Pcba%2ByV4SHQ%2BOSQ%2BrAYc7uMdzaUyeH9ZfoT6PfItGz5NE3j%2FKU3omO5jm5YhahYDNX6oSA%2BoCrgdgOfuwLv5i0YnGoLEbEYfOdfRVhwmc0IdiszPFM5fl2WXNSC4I6VRKkWKZHBbqTVzbZW9ZXOP8%2BNJ0vjUUwymMa0GkBSkrRZ6Xisd7WNzTLQAcpKX1Mr5OsA2Ny3GLPzIcRbUojTsfJZJfMYd%2F8h7QdYJTHJtzNcBEngRtEaF9jpY2Ahd5nit87%2FmxzHHpS8%2FppE3HKCRg8GogoRnl6apuuP8is5dN8wJNVl4%2B43BXijKOUOOKnbETLZr61GhHe8djGPFuogThqtwYbqPWe9Kwva0rNjj8J%2B1kFVlr9rIa1EbeGquxGiwRXygjRBlab4zWndPkY37%2FzoRUHBCvZyKQBJNuxdZ4o00WPP07cU0vgwid9Dve7uE7FXdwJ6CcXeIuHjYsevkwSPaNA%2BameDMye1gi1NLpgvkUBRzC0ifPCBjqkAXFgn2LN%2FbEEEt2OszmYeAJ4%2Brdf%2BxwmUpESouYzpsStveZa8pHY8ggdu4OLL9rxQk8iAWgmtyngRRTyuiT8S8gEO5sxQLXn%2BOkJA8AJp77kJaHLMQSnSk1D1lmTkr13zmbSGuXq64rgupn%2F6HN2gOxWS%2B2BV2thzoqxp5MqcRcQ%2FSl75%2FIcQHVZ1P92%2BvheTTrNdI0EKEVAkzz3wN7G2gehr2vu&X-Amz-Signature=bd0a098434576197e84ea0b5b3ef27a50f0cc44b6bd8ada876c30fe0463dafb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PE33Y5A%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC%2BlGIxXo7KlF3Nbi8GLTtMtPseqZNx8omw6gfp2UMmsAIhAJTqVdtvdTmLRlSqhM6oNJhJbPI9W%2BZwUAQCOQV%2FA44wKv8DCFUQABoMNjM3NDIzMTgzODA1IgytlYixRoMjorBZIhAq3ANx4xSJQgXCffH59GinJ9j7b2EgiSRxllDAyCvLGFEZ1w6lP%2FOu7yUF8yoJGbmTZ0poyF22%2FnBMI6rspsnwEtmsh2XYavhfeQGPLV7EbUI%2FioL3Pt2IJk7BRcGgCPGljAj0oQ1Buc%2Bl67Pcba%2ByV4SHQ%2BOSQ%2BrAYc7uMdzaUyeH9ZfoT6PfItGz5NE3j%2FKU3omO5jm5YhahYDNX6oSA%2BoCrgdgOfuwLv5i0YnGoLEbEYfOdfRVhwmc0IdiszPFM5fl2WXNSC4I6VRKkWKZHBbqTVzbZW9ZXOP8%2BNJ0vjUUwymMa0GkBSkrRZ6Xisd7WNzTLQAcpKX1Mr5OsA2Ny3GLPzIcRbUojTsfJZJfMYd%2F8h7QdYJTHJtzNcBEngRtEaF9jpY2Ahd5nit87%2FmxzHHpS8%2FppE3HKCRg8GogoRnl6apuuP8is5dN8wJNVl4%2B43BXijKOUOOKnbETLZr61GhHe8djGPFuogThqtwYbqPWe9Kwva0rNjj8J%2B1kFVlr9rIa1EbeGquxGiwRXygjRBlab4zWndPkY37%2FzoRUHBCvZyKQBJNuxdZ4o00WPP07cU0vgwid9Dve7uE7FXdwJ6CcXeIuHjYsevkwSPaNA%2BameDMye1gi1NLpgvkUBRzC0ifPCBjqkAXFgn2LN%2FbEEEt2OszmYeAJ4%2Brdf%2BxwmUpESouYzpsStveZa8pHY8ggdu4OLL9rxQk8iAWgmtyngRRTyuiT8S8gEO5sxQLXn%2BOkJA8AJp77kJaHLMQSnSk1D1lmTkr13zmbSGuXq64rgupn%2F6HN2gOxWS%2B2BV2thzoqxp5MqcRcQ%2FSl75%2FIcQHVZ1P92%2BvheTTrNdI0EKEVAkzz3wN7G2gehr2vu&X-Amz-Signature=72a81bd9dea3480167fce79873ff903dcaab4076fc2358e3e578d44ed4152dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PE33Y5A%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC%2BlGIxXo7KlF3Nbi8GLTtMtPseqZNx8omw6gfp2UMmsAIhAJTqVdtvdTmLRlSqhM6oNJhJbPI9W%2BZwUAQCOQV%2FA44wKv8DCFUQABoMNjM3NDIzMTgzODA1IgytlYixRoMjorBZIhAq3ANx4xSJQgXCffH59GinJ9j7b2EgiSRxllDAyCvLGFEZ1w6lP%2FOu7yUF8yoJGbmTZ0poyF22%2FnBMI6rspsnwEtmsh2XYavhfeQGPLV7EbUI%2FioL3Pt2IJk7BRcGgCPGljAj0oQ1Buc%2Bl67Pcba%2ByV4SHQ%2BOSQ%2BrAYc7uMdzaUyeH9ZfoT6PfItGz5NE3j%2FKU3omO5jm5YhahYDNX6oSA%2BoCrgdgOfuwLv5i0YnGoLEbEYfOdfRVhwmc0IdiszPFM5fl2WXNSC4I6VRKkWKZHBbqTVzbZW9ZXOP8%2BNJ0vjUUwymMa0GkBSkrRZ6Xisd7WNzTLQAcpKX1Mr5OsA2Ny3GLPzIcRbUojTsfJZJfMYd%2F8h7QdYJTHJtzNcBEngRtEaF9jpY2Ahd5nit87%2FmxzHHpS8%2FppE3HKCRg8GogoRnl6apuuP8is5dN8wJNVl4%2B43BXijKOUOOKnbETLZr61GhHe8djGPFuogThqtwYbqPWe9Kwva0rNjj8J%2B1kFVlr9rIa1EbeGquxGiwRXygjRBlab4zWndPkY37%2FzoRUHBCvZyKQBJNuxdZ4o00WPP07cU0vgwid9Dve7uE7FXdwJ6CcXeIuHjYsevkwSPaNA%2BameDMye1gi1NLpgvkUBRzC0ifPCBjqkAXFgn2LN%2FbEEEt2OszmYeAJ4%2Brdf%2BxwmUpESouYzpsStveZa8pHY8ggdu4OLL9rxQk8iAWgmtyngRRTyuiT8S8gEO5sxQLXn%2BOkJA8AJp77kJaHLMQSnSk1D1lmTkr13zmbSGuXq64rgupn%2F6HN2gOxWS%2B2BV2thzoqxp5MqcRcQ%2FSl75%2FIcQHVZ1P92%2BvheTTrNdI0EKEVAkzz3wN7G2gehr2vu&X-Amz-Signature=c38709cbc678c5f7d19c5438e08179946af57b27c2b7a4efc0c56e31b05711fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PE33Y5A%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC%2BlGIxXo7KlF3Nbi8GLTtMtPseqZNx8omw6gfp2UMmsAIhAJTqVdtvdTmLRlSqhM6oNJhJbPI9W%2BZwUAQCOQV%2FA44wKv8DCFUQABoMNjM3NDIzMTgzODA1IgytlYixRoMjorBZIhAq3ANx4xSJQgXCffH59GinJ9j7b2EgiSRxllDAyCvLGFEZ1w6lP%2FOu7yUF8yoJGbmTZ0poyF22%2FnBMI6rspsnwEtmsh2XYavhfeQGPLV7EbUI%2FioL3Pt2IJk7BRcGgCPGljAj0oQ1Buc%2Bl67Pcba%2ByV4SHQ%2BOSQ%2BrAYc7uMdzaUyeH9ZfoT6PfItGz5NE3j%2FKU3omO5jm5YhahYDNX6oSA%2BoCrgdgOfuwLv5i0YnGoLEbEYfOdfRVhwmc0IdiszPFM5fl2WXNSC4I6VRKkWKZHBbqTVzbZW9ZXOP8%2BNJ0vjUUwymMa0GkBSkrRZ6Xisd7WNzTLQAcpKX1Mr5OsA2Ny3GLPzIcRbUojTsfJZJfMYd%2F8h7QdYJTHJtzNcBEngRtEaF9jpY2Ahd5nit87%2FmxzHHpS8%2FppE3HKCRg8GogoRnl6apuuP8is5dN8wJNVl4%2B43BXijKOUOOKnbETLZr61GhHe8djGPFuogThqtwYbqPWe9Kwva0rNjj8J%2B1kFVlr9rIa1EbeGquxGiwRXygjRBlab4zWndPkY37%2FzoRUHBCvZyKQBJNuxdZ4o00WPP07cU0vgwid9Dve7uE7FXdwJ6CcXeIuHjYsevkwSPaNA%2BameDMye1gi1NLpgvkUBRzC0ifPCBjqkAXFgn2LN%2FbEEEt2OszmYeAJ4%2Brdf%2BxwmUpESouYzpsStveZa8pHY8ggdu4OLL9rxQk8iAWgmtyngRRTyuiT8S8gEO5sxQLXn%2BOkJA8AJp77kJaHLMQSnSk1D1lmTkr13zmbSGuXq64rgupn%2F6HN2gOxWS%2B2BV2thzoqxp5MqcRcQ%2FSl75%2FIcQHVZ1P92%2BvheTTrNdI0EKEVAkzz3wN7G2gehr2vu&X-Amz-Signature=da928911be181f78665747246041e874d0352294e4f0767ff3d46143e8c3c38e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PE33Y5A%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQC%2BlGIxXo7KlF3Nbi8GLTtMtPseqZNx8omw6gfp2UMmsAIhAJTqVdtvdTmLRlSqhM6oNJhJbPI9W%2BZwUAQCOQV%2FA44wKv8DCFUQABoMNjM3NDIzMTgzODA1IgytlYixRoMjorBZIhAq3ANx4xSJQgXCffH59GinJ9j7b2EgiSRxllDAyCvLGFEZ1w6lP%2FOu7yUF8yoJGbmTZ0poyF22%2FnBMI6rspsnwEtmsh2XYavhfeQGPLV7EbUI%2FioL3Pt2IJk7BRcGgCPGljAj0oQ1Buc%2Bl67Pcba%2ByV4SHQ%2BOSQ%2BrAYc7uMdzaUyeH9ZfoT6PfItGz5NE3j%2FKU3omO5jm5YhahYDNX6oSA%2BoCrgdgOfuwLv5i0YnGoLEbEYfOdfRVhwmc0IdiszPFM5fl2WXNSC4I6VRKkWKZHBbqTVzbZW9ZXOP8%2BNJ0vjUUwymMa0GkBSkrRZ6Xisd7WNzTLQAcpKX1Mr5OsA2Ny3GLPzIcRbUojTsfJZJfMYd%2F8h7QdYJTHJtzNcBEngRtEaF9jpY2Ahd5nit87%2FmxzHHpS8%2FppE3HKCRg8GogoRnl6apuuP8is5dN8wJNVl4%2B43BXijKOUOOKnbETLZr61GhHe8djGPFuogThqtwYbqPWe9Kwva0rNjj8J%2B1kFVlr9rIa1EbeGquxGiwRXygjRBlab4zWndPkY37%2FzoRUHBCvZyKQBJNuxdZ4o00WPP07cU0vgwid9Dve7uE7FXdwJ6CcXeIuHjYsevkwSPaNA%2BameDMye1gi1NLpgvkUBRzC0ifPCBjqkAXFgn2LN%2FbEEEt2OszmYeAJ4%2Brdf%2BxwmUpESouYzpsStveZa8pHY8ggdu4OLL9rxQk8iAWgmtyngRRTyuiT8S8gEO5sxQLXn%2BOkJA8AJp77kJaHLMQSnSk1D1lmTkr13zmbSGuXq64rgupn%2F6HN2gOxWS%2B2BV2thzoqxp5MqcRcQ%2FSl75%2FIcQHVZ1P92%2BvheTTrNdI0EKEVAkzz3wN7G2gehr2vu&X-Amz-Signature=5d5ff25ecc9ac2cbd90d1bdf042ef4e6c7e1298bbf607e0e5c7c9fa343a8cb4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
