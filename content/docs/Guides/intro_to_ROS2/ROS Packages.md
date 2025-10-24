---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGWDTLC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS%2BWBu8%2FpBppLi3RTM3UoS4%2FCRdZJNfwUR%2FBawdlY1bAiAsgvCeF7uNDfMlu8JDKE8ne0b%2Fs7aNDs50tl1V9ZOb5ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMu8lB1nzwtZaU8u8WKtwDYIz24yE9SGugpYSYOEIsZrX1LVValrWJ0uDk5pJDVOlcGmPN06SUNx57ms4h2%2BUPjzy5QDcrKi1fg0mbodc%2Fc7ndgJM1eP81D4RV3MzRJkbv5TtkbbwFariTIg2e%2FCXa9SSa%2BCzsEcWhyXixsh6DOwzwtV0s1x3Xbbqy4h3kYlei7jTl3%2FXcjJIru26SI9ZH%2F%2B6AH69JOsnEmtuwqwstrqLKUTYulZywap%2F1ebatmLxUrEm3%2Fs0JWeBpw53ATz2qThRRes9RhX14cuGyFRGH8WaAtmo%2BXekwbQ%2FVE9CeMJUTwoKzoD3fI5jmtahy%2F5R6namj0U6bH%2Fr5uZ06wOoWY4Q1%2BylxrsHlQRAaagQHoT4WsI3zRNGudBK4uTzPTXeKMjhQFVxXdPQHmg70CTFXV1GQqNGyw6h4Li2BZRxtZL3HgavYuA3V%2BsMrVLMVymUGEE%2FzHphUSU4L1DQZaOfXAzpwwBZcWfYtbqV6%2BsH4ooKmJ9YR4rTx2t9PhoFlj77EMyWJt7AdTPSbTeELjupK9j%2FPDwDckGrWKKep3GVQpZQIndMjLK3cWtIUjfjgtg6i0Jn4MAyejQASSGjAaGj%2FkaXcWQ8wHZ9bd8gzZSZq%2B%2F5fIDNOuvQBIfyjba0woZ7rxwY6pgFFogW1fi2zy9PvxMP4mmMAxnQ6%2FI7o3BX3xYelyx11kj6y16yetf4kvJVzcorZGr7g5sga6q7N2yv2p0s7hqQ1liQJy8po8Y9u%2FB8N6Rrvbb7UgYwENzXE9FTsG%2BNHTZrQIaS9JoJSK60XEy6TXpSt3zTNXKwteDIeBfr26fiBS2Nr%2Btofpnox5ZNbSNKaPNgwZwLSUooiAek5EegLFrMzGyDhbOcD&X-Amz-Signature=95d2cebd066bef15050666d4d7b0fe877df9681f96a3c1ebaeeb89f984fbe75c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGWDTLC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS%2BWBu8%2FpBppLi3RTM3UoS4%2FCRdZJNfwUR%2FBawdlY1bAiAsgvCeF7uNDfMlu8JDKE8ne0b%2Fs7aNDs50tl1V9ZOb5ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMu8lB1nzwtZaU8u8WKtwDYIz24yE9SGugpYSYOEIsZrX1LVValrWJ0uDk5pJDVOlcGmPN06SUNx57ms4h2%2BUPjzy5QDcrKi1fg0mbodc%2Fc7ndgJM1eP81D4RV3MzRJkbv5TtkbbwFariTIg2e%2FCXa9SSa%2BCzsEcWhyXixsh6DOwzwtV0s1x3Xbbqy4h3kYlei7jTl3%2FXcjJIru26SI9ZH%2F%2B6AH69JOsnEmtuwqwstrqLKUTYulZywap%2F1ebatmLxUrEm3%2Fs0JWeBpw53ATz2qThRRes9RhX14cuGyFRGH8WaAtmo%2BXekwbQ%2FVE9CeMJUTwoKzoD3fI5jmtahy%2F5R6namj0U6bH%2Fr5uZ06wOoWY4Q1%2BylxrsHlQRAaagQHoT4WsI3zRNGudBK4uTzPTXeKMjhQFVxXdPQHmg70CTFXV1GQqNGyw6h4Li2BZRxtZL3HgavYuA3V%2BsMrVLMVymUGEE%2FzHphUSU4L1DQZaOfXAzpwwBZcWfYtbqV6%2BsH4ooKmJ9YR4rTx2t9PhoFlj77EMyWJt7AdTPSbTeELjupK9j%2FPDwDckGrWKKep3GVQpZQIndMjLK3cWtIUjfjgtg6i0Jn4MAyejQASSGjAaGj%2FkaXcWQ8wHZ9bd8gzZSZq%2B%2F5fIDNOuvQBIfyjba0woZ7rxwY6pgFFogW1fi2zy9PvxMP4mmMAxnQ6%2FI7o3BX3xYelyx11kj6y16yetf4kvJVzcorZGr7g5sga6q7N2yv2p0s7hqQ1liQJy8po8Y9u%2FB8N6Rrvbb7UgYwENzXE9FTsG%2BNHTZrQIaS9JoJSK60XEy6TXpSt3zTNXKwteDIeBfr26fiBS2Nr%2Btofpnox5ZNbSNKaPNgwZwLSUooiAek5EegLFrMzGyDhbOcD&X-Amz-Signature=9dcdf11bedae933d747c9f053c6543c94300d41dd6fed0e9e833357bc8261f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGWDTLC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS%2BWBu8%2FpBppLi3RTM3UoS4%2FCRdZJNfwUR%2FBawdlY1bAiAsgvCeF7uNDfMlu8JDKE8ne0b%2Fs7aNDs50tl1V9ZOb5ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMu8lB1nzwtZaU8u8WKtwDYIz24yE9SGugpYSYOEIsZrX1LVValrWJ0uDk5pJDVOlcGmPN06SUNx57ms4h2%2BUPjzy5QDcrKi1fg0mbodc%2Fc7ndgJM1eP81D4RV3MzRJkbv5TtkbbwFariTIg2e%2FCXa9SSa%2BCzsEcWhyXixsh6DOwzwtV0s1x3Xbbqy4h3kYlei7jTl3%2FXcjJIru26SI9ZH%2F%2B6AH69JOsnEmtuwqwstrqLKUTYulZywap%2F1ebatmLxUrEm3%2Fs0JWeBpw53ATz2qThRRes9RhX14cuGyFRGH8WaAtmo%2BXekwbQ%2FVE9CeMJUTwoKzoD3fI5jmtahy%2F5R6namj0U6bH%2Fr5uZ06wOoWY4Q1%2BylxrsHlQRAaagQHoT4WsI3zRNGudBK4uTzPTXeKMjhQFVxXdPQHmg70CTFXV1GQqNGyw6h4Li2BZRxtZL3HgavYuA3V%2BsMrVLMVymUGEE%2FzHphUSU4L1DQZaOfXAzpwwBZcWfYtbqV6%2BsH4ooKmJ9YR4rTx2t9PhoFlj77EMyWJt7AdTPSbTeELjupK9j%2FPDwDckGrWKKep3GVQpZQIndMjLK3cWtIUjfjgtg6i0Jn4MAyejQASSGjAaGj%2FkaXcWQ8wHZ9bd8gzZSZq%2B%2F5fIDNOuvQBIfyjba0woZ7rxwY6pgFFogW1fi2zy9PvxMP4mmMAxnQ6%2FI7o3BX3xYelyx11kj6y16yetf4kvJVzcorZGr7g5sga6q7N2yv2p0s7hqQ1liQJy8po8Y9u%2FB8N6Rrvbb7UgYwENzXE9FTsG%2BNHTZrQIaS9JoJSK60XEy6TXpSt3zTNXKwteDIeBfr26fiBS2Nr%2Btofpnox5ZNbSNKaPNgwZwLSUooiAek5EegLFrMzGyDhbOcD&X-Amz-Signature=0c56198561bd97d63b7da5017e006402126fdb9a285d80eccdfabe53c9873fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGWDTLC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS%2BWBu8%2FpBppLi3RTM3UoS4%2FCRdZJNfwUR%2FBawdlY1bAiAsgvCeF7uNDfMlu8JDKE8ne0b%2Fs7aNDs50tl1V9ZOb5ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMu8lB1nzwtZaU8u8WKtwDYIz24yE9SGugpYSYOEIsZrX1LVValrWJ0uDk5pJDVOlcGmPN06SUNx57ms4h2%2BUPjzy5QDcrKi1fg0mbodc%2Fc7ndgJM1eP81D4RV3MzRJkbv5TtkbbwFariTIg2e%2FCXa9SSa%2BCzsEcWhyXixsh6DOwzwtV0s1x3Xbbqy4h3kYlei7jTl3%2FXcjJIru26SI9ZH%2F%2B6AH69JOsnEmtuwqwstrqLKUTYulZywap%2F1ebatmLxUrEm3%2Fs0JWeBpw53ATz2qThRRes9RhX14cuGyFRGH8WaAtmo%2BXekwbQ%2FVE9CeMJUTwoKzoD3fI5jmtahy%2F5R6namj0U6bH%2Fr5uZ06wOoWY4Q1%2BylxrsHlQRAaagQHoT4WsI3zRNGudBK4uTzPTXeKMjhQFVxXdPQHmg70CTFXV1GQqNGyw6h4Li2BZRxtZL3HgavYuA3V%2BsMrVLMVymUGEE%2FzHphUSU4L1DQZaOfXAzpwwBZcWfYtbqV6%2BsH4ooKmJ9YR4rTx2t9PhoFlj77EMyWJt7AdTPSbTeELjupK9j%2FPDwDckGrWKKep3GVQpZQIndMjLK3cWtIUjfjgtg6i0Jn4MAyejQASSGjAaGj%2FkaXcWQ8wHZ9bd8gzZSZq%2B%2F5fIDNOuvQBIfyjba0woZ7rxwY6pgFFogW1fi2zy9PvxMP4mmMAxnQ6%2FI7o3BX3xYelyx11kj6y16yetf4kvJVzcorZGr7g5sga6q7N2yv2p0s7hqQ1liQJy8po8Y9u%2FB8N6Rrvbb7UgYwENzXE9FTsG%2BNHTZrQIaS9JoJSK60XEy6TXpSt3zTNXKwteDIeBfr26fiBS2Nr%2Btofpnox5ZNbSNKaPNgwZwLSUooiAek5EegLFrMzGyDhbOcD&X-Amz-Signature=809fc3c5be243c9a3c77974a9b20614180b94e87aaedd08b00c093e67d2911ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGWDTLC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS%2BWBu8%2FpBppLi3RTM3UoS4%2FCRdZJNfwUR%2FBawdlY1bAiAsgvCeF7uNDfMlu8JDKE8ne0b%2Fs7aNDs50tl1V9ZOb5ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMu8lB1nzwtZaU8u8WKtwDYIz24yE9SGugpYSYOEIsZrX1LVValrWJ0uDk5pJDVOlcGmPN06SUNx57ms4h2%2BUPjzy5QDcrKi1fg0mbodc%2Fc7ndgJM1eP81D4RV3MzRJkbv5TtkbbwFariTIg2e%2FCXa9SSa%2BCzsEcWhyXixsh6DOwzwtV0s1x3Xbbqy4h3kYlei7jTl3%2FXcjJIru26SI9ZH%2F%2B6AH69JOsnEmtuwqwstrqLKUTYulZywap%2F1ebatmLxUrEm3%2Fs0JWeBpw53ATz2qThRRes9RhX14cuGyFRGH8WaAtmo%2BXekwbQ%2FVE9CeMJUTwoKzoD3fI5jmtahy%2F5R6namj0U6bH%2Fr5uZ06wOoWY4Q1%2BylxrsHlQRAaagQHoT4WsI3zRNGudBK4uTzPTXeKMjhQFVxXdPQHmg70CTFXV1GQqNGyw6h4Li2BZRxtZL3HgavYuA3V%2BsMrVLMVymUGEE%2FzHphUSU4L1DQZaOfXAzpwwBZcWfYtbqV6%2BsH4ooKmJ9YR4rTx2t9PhoFlj77EMyWJt7AdTPSbTeELjupK9j%2FPDwDckGrWKKep3GVQpZQIndMjLK3cWtIUjfjgtg6i0Jn4MAyejQASSGjAaGj%2FkaXcWQ8wHZ9bd8gzZSZq%2B%2F5fIDNOuvQBIfyjba0woZ7rxwY6pgFFogW1fi2zy9PvxMP4mmMAxnQ6%2FI7o3BX3xYelyx11kj6y16yetf4kvJVzcorZGr7g5sga6q7N2yv2p0s7hqQ1liQJy8po8Y9u%2FB8N6Rrvbb7UgYwENzXE9FTsG%2BNHTZrQIaS9JoJSK60XEy6TXpSt3zTNXKwteDIeBfr26fiBS2Nr%2Btofpnox5ZNbSNKaPNgwZwLSUooiAek5EegLFrMzGyDhbOcD&X-Amz-Signature=1d68c4af8a7f5469dd8d8b144701546c35be5ed51d6728d0b3f991b72423b97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGWDTLC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS%2BWBu8%2FpBppLi3RTM3UoS4%2FCRdZJNfwUR%2FBawdlY1bAiAsgvCeF7uNDfMlu8JDKE8ne0b%2Fs7aNDs50tl1V9ZOb5ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMu8lB1nzwtZaU8u8WKtwDYIz24yE9SGugpYSYOEIsZrX1LVValrWJ0uDk5pJDVOlcGmPN06SUNx57ms4h2%2BUPjzy5QDcrKi1fg0mbodc%2Fc7ndgJM1eP81D4RV3MzRJkbv5TtkbbwFariTIg2e%2FCXa9SSa%2BCzsEcWhyXixsh6DOwzwtV0s1x3Xbbqy4h3kYlei7jTl3%2FXcjJIru26SI9ZH%2F%2B6AH69JOsnEmtuwqwstrqLKUTYulZywap%2F1ebatmLxUrEm3%2Fs0JWeBpw53ATz2qThRRes9RhX14cuGyFRGH8WaAtmo%2BXekwbQ%2FVE9CeMJUTwoKzoD3fI5jmtahy%2F5R6namj0U6bH%2Fr5uZ06wOoWY4Q1%2BylxrsHlQRAaagQHoT4WsI3zRNGudBK4uTzPTXeKMjhQFVxXdPQHmg70CTFXV1GQqNGyw6h4Li2BZRxtZL3HgavYuA3V%2BsMrVLMVymUGEE%2FzHphUSU4L1DQZaOfXAzpwwBZcWfYtbqV6%2BsH4ooKmJ9YR4rTx2t9PhoFlj77EMyWJt7AdTPSbTeELjupK9j%2FPDwDckGrWKKep3GVQpZQIndMjLK3cWtIUjfjgtg6i0Jn4MAyejQASSGjAaGj%2FkaXcWQ8wHZ9bd8gzZSZq%2B%2F5fIDNOuvQBIfyjba0woZ7rxwY6pgFFogW1fi2zy9PvxMP4mmMAxnQ6%2FI7o3BX3xYelyx11kj6y16yetf4kvJVzcorZGr7g5sga6q7N2yv2p0s7hqQ1liQJy8po8Y9u%2FB8N6Rrvbb7UgYwENzXE9FTsG%2BNHTZrQIaS9JoJSK60XEy6TXpSt3zTNXKwteDIeBfr26fiBS2Nr%2Btofpnox5ZNbSNKaPNgwZwLSUooiAek5EegLFrMzGyDhbOcD&X-Amz-Signature=bfc451ff0c7e4c3997949578e581a69a1909266989c9bedbb746b98d71c1ed56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFGWDTLC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICS%2BWBu8%2FpBppLi3RTM3UoS4%2FCRdZJNfwUR%2FBawdlY1bAiAsgvCeF7uNDfMlu8JDKE8ne0b%2Fs7aNDs50tl1V9ZOb5ir%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMu8lB1nzwtZaU8u8WKtwDYIz24yE9SGugpYSYOEIsZrX1LVValrWJ0uDk5pJDVOlcGmPN06SUNx57ms4h2%2BUPjzy5QDcrKi1fg0mbodc%2Fc7ndgJM1eP81D4RV3MzRJkbv5TtkbbwFariTIg2e%2FCXa9SSa%2BCzsEcWhyXixsh6DOwzwtV0s1x3Xbbqy4h3kYlei7jTl3%2FXcjJIru26SI9ZH%2F%2B6AH69JOsnEmtuwqwstrqLKUTYulZywap%2F1ebatmLxUrEm3%2Fs0JWeBpw53ATz2qThRRes9RhX14cuGyFRGH8WaAtmo%2BXekwbQ%2FVE9CeMJUTwoKzoD3fI5jmtahy%2F5R6namj0U6bH%2Fr5uZ06wOoWY4Q1%2BylxrsHlQRAaagQHoT4WsI3zRNGudBK4uTzPTXeKMjhQFVxXdPQHmg70CTFXV1GQqNGyw6h4Li2BZRxtZL3HgavYuA3V%2BsMrVLMVymUGEE%2FzHphUSU4L1DQZaOfXAzpwwBZcWfYtbqV6%2BsH4ooKmJ9YR4rTx2t9PhoFlj77EMyWJt7AdTPSbTeELjupK9j%2FPDwDckGrWKKep3GVQpZQIndMjLK3cWtIUjfjgtg6i0Jn4MAyejQASSGjAaGj%2FkaXcWQ8wHZ9bd8gzZSZq%2B%2F5fIDNOuvQBIfyjba0woZ7rxwY6pgFFogW1fi2zy9PvxMP4mmMAxnQ6%2FI7o3BX3xYelyx11kj6y16yetf4kvJVzcorZGr7g5sga6q7N2yv2p0s7hqQ1liQJy8po8Y9u%2FB8N6Rrvbb7UgYwENzXE9FTsG%2BNHTZrQIaS9JoJSK60XEy6TXpSt3zTNXKwteDIeBfr26fiBS2Nr%2Btofpnox5ZNbSNKaPNgwZwLSUooiAek5EegLFrMzGyDhbOcD&X-Amz-Signature=ec972112b3ef939555beb413fdee9140006c8fb50bbaa8aa6678192c575327df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
