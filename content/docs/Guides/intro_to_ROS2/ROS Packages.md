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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNG5SMO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHEBjT7X2G7PZgTdMAKr6Kx0zxFbPg4ccjn%2Bb7DbJ4N6AiAz4axHRDzXp1DMu0Iq%2FnqGdjXWggooH%2FiyBsEkobUJ8yr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMIToEwh7oJG8RhFy3KtwDgXCk8T7xOl8qqYbMp76CTS98%2Fn%2FljwAwKWhKzx%2BXfWEzQ2Tbglil%2B4WyYm%2B17oyYlNZW2TgePO6e9mr65Oa%2BWvUcIQRDeoPymSFqo7ksp%2Bi%2FYIhNtU0mpX9T72SqYKUgQRE35smDVOCpSPg0GdogybR484D8UiVkiZu8bRgd1nDK7wwk7bvACevUYkhPD0M9jvIwm00aYWMpWPimp6edGjlR44RLDJE4NY5W1HuydTFuDFpox%2FxOrHyki3nsNqFC85cYrkoZBdiPkcgmrW4D1awoepXS2GMc%2Fd5QUgTY4uR7o%2FG63L7zZ3Ms7OAJR18enrYxphSTopwhBqDSY0MgXTNhi0rSnjq6%2FI1Z7ech4OTrwoMVlqufkoRT9Dx62SajxWlAOKENdzQ6Tc6%2FP3Xafj64Z1vk7WxWHVqBP50ZSA04EGgmeyzi7%2F0eDzc1YKODv7tJ5bHbeBtHrHP2bIq5l2IV%2FE6Ru2Y5KIyoJxryuDgQSjl9D9p%2FfFB964EciDRldNx7Zl4eEmBskNNIeaOVV2wTzer0wPnri3ktxoLVqqVhDPr%2BUjnKWYeyjCe5T5Ppd26%2FmNPQ%2BbwRCoDYQfLWyuhDbdQJiCAUhuk6qpgToaUGuab%2ByViAc%2BTn5agw%2F5zExAY6pgHUyprdBcywcLy%2B3c4NI8WY5M3%2F1a%2Bfr4reaHX5IPPqbvQCDBCn%2BfXrlF3c19t%2FPTNmUF3Wjh2ShP927rWSBJtJB5wgmpJQRQtfPVrDa9iLMFuipJAiyyDWtdL7oFwxQDNTD5f3LlzACI7omw3U%2B0AFI0OATqP8O30bQdZQ1RmvLT4kUkkPbIw9JWhV4QL5SWqnX5nCZHZbOO68n6azp3BrZE37scm4&X-Amz-Signature=dcf9e964ac750af305d545b5209df86687a9e7a892af967f05b0ef7c119ac648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNG5SMO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHEBjT7X2G7PZgTdMAKr6Kx0zxFbPg4ccjn%2Bb7DbJ4N6AiAz4axHRDzXp1DMu0Iq%2FnqGdjXWggooH%2FiyBsEkobUJ8yr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMIToEwh7oJG8RhFy3KtwDgXCk8T7xOl8qqYbMp76CTS98%2Fn%2FljwAwKWhKzx%2BXfWEzQ2Tbglil%2B4WyYm%2B17oyYlNZW2TgePO6e9mr65Oa%2BWvUcIQRDeoPymSFqo7ksp%2Bi%2FYIhNtU0mpX9T72SqYKUgQRE35smDVOCpSPg0GdogybR484D8UiVkiZu8bRgd1nDK7wwk7bvACevUYkhPD0M9jvIwm00aYWMpWPimp6edGjlR44RLDJE4NY5W1HuydTFuDFpox%2FxOrHyki3nsNqFC85cYrkoZBdiPkcgmrW4D1awoepXS2GMc%2Fd5QUgTY4uR7o%2FG63L7zZ3Ms7OAJR18enrYxphSTopwhBqDSY0MgXTNhi0rSnjq6%2FI1Z7ech4OTrwoMVlqufkoRT9Dx62SajxWlAOKENdzQ6Tc6%2FP3Xafj64Z1vk7WxWHVqBP50ZSA04EGgmeyzi7%2F0eDzc1YKODv7tJ5bHbeBtHrHP2bIq5l2IV%2FE6Ru2Y5KIyoJxryuDgQSjl9D9p%2FfFB964EciDRldNx7Zl4eEmBskNNIeaOVV2wTzer0wPnri3ktxoLVqqVhDPr%2BUjnKWYeyjCe5T5Ppd26%2FmNPQ%2BbwRCoDYQfLWyuhDbdQJiCAUhuk6qpgToaUGuab%2ByViAc%2BTn5agw%2F5zExAY6pgHUyprdBcywcLy%2B3c4NI8WY5M3%2F1a%2Bfr4reaHX5IPPqbvQCDBCn%2BfXrlF3c19t%2FPTNmUF3Wjh2ShP927rWSBJtJB5wgmpJQRQtfPVrDa9iLMFuipJAiyyDWtdL7oFwxQDNTD5f3LlzACI7omw3U%2B0AFI0OATqP8O30bQdZQ1RmvLT4kUkkPbIw9JWhV4QL5SWqnX5nCZHZbOO68n6azp3BrZE37scm4&X-Amz-Signature=753dfa4f85ce1fec470ed667d8533168d3657b248f5fbb66dd55dc9cb7e52f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNG5SMO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHEBjT7X2G7PZgTdMAKr6Kx0zxFbPg4ccjn%2Bb7DbJ4N6AiAz4axHRDzXp1DMu0Iq%2FnqGdjXWggooH%2FiyBsEkobUJ8yr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMIToEwh7oJG8RhFy3KtwDgXCk8T7xOl8qqYbMp76CTS98%2Fn%2FljwAwKWhKzx%2BXfWEzQ2Tbglil%2B4WyYm%2B17oyYlNZW2TgePO6e9mr65Oa%2BWvUcIQRDeoPymSFqo7ksp%2Bi%2FYIhNtU0mpX9T72SqYKUgQRE35smDVOCpSPg0GdogybR484D8UiVkiZu8bRgd1nDK7wwk7bvACevUYkhPD0M9jvIwm00aYWMpWPimp6edGjlR44RLDJE4NY5W1HuydTFuDFpox%2FxOrHyki3nsNqFC85cYrkoZBdiPkcgmrW4D1awoepXS2GMc%2Fd5QUgTY4uR7o%2FG63L7zZ3Ms7OAJR18enrYxphSTopwhBqDSY0MgXTNhi0rSnjq6%2FI1Z7ech4OTrwoMVlqufkoRT9Dx62SajxWlAOKENdzQ6Tc6%2FP3Xafj64Z1vk7WxWHVqBP50ZSA04EGgmeyzi7%2F0eDzc1YKODv7tJ5bHbeBtHrHP2bIq5l2IV%2FE6Ru2Y5KIyoJxryuDgQSjl9D9p%2FfFB964EciDRldNx7Zl4eEmBskNNIeaOVV2wTzer0wPnri3ktxoLVqqVhDPr%2BUjnKWYeyjCe5T5Ppd26%2FmNPQ%2BbwRCoDYQfLWyuhDbdQJiCAUhuk6qpgToaUGuab%2ByViAc%2BTn5agw%2F5zExAY6pgHUyprdBcywcLy%2B3c4NI8WY5M3%2F1a%2Bfr4reaHX5IPPqbvQCDBCn%2BfXrlF3c19t%2FPTNmUF3Wjh2ShP927rWSBJtJB5wgmpJQRQtfPVrDa9iLMFuipJAiyyDWtdL7oFwxQDNTD5f3LlzACI7omw3U%2B0AFI0OATqP8O30bQdZQ1RmvLT4kUkkPbIw9JWhV4QL5SWqnX5nCZHZbOO68n6azp3BrZE37scm4&X-Amz-Signature=fce6a0d38c8a8ef6e623d2ba47f1d3188c17faa4d03f9f63c704344458759441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNG5SMO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHEBjT7X2G7PZgTdMAKr6Kx0zxFbPg4ccjn%2Bb7DbJ4N6AiAz4axHRDzXp1DMu0Iq%2FnqGdjXWggooH%2FiyBsEkobUJ8yr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMIToEwh7oJG8RhFy3KtwDgXCk8T7xOl8qqYbMp76CTS98%2Fn%2FljwAwKWhKzx%2BXfWEzQ2Tbglil%2B4WyYm%2B17oyYlNZW2TgePO6e9mr65Oa%2BWvUcIQRDeoPymSFqo7ksp%2Bi%2FYIhNtU0mpX9T72SqYKUgQRE35smDVOCpSPg0GdogybR484D8UiVkiZu8bRgd1nDK7wwk7bvACevUYkhPD0M9jvIwm00aYWMpWPimp6edGjlR44RLDJE4NY5W1HuydTFuDFpox%2FxOrHyki3nsNqFC85cYrkoZBdiPkcgmrW4D1awoepXS2GMc%2Fd5QUgTY4uR7o%2FG63L7zZ3Ms7OAJR18enrYxphSTopwhBqDSY0MgXTNhi0rSnjq6%2FI1Z7ech4OTrwoMVlqufkoRT9Dx62SajxWlAOKENdzQ6Tc6%2FP3Xafj64Z1vk7WxWHVqBP50ZSA04EGgmeyzi7%2F0eDzc1YKODv7tJ5bHbeBtHrHP2bIq5l2IV%2FE6Ru2Y5KIyoJxryuDgQSjl9D9p%2FfFB964EciDRldNx7Zl4eEmBskNNIeaOVV2wTzer0wPnri3ktxoLVqqVhDPr%2BUjnKWYeyjCe5T5Ppd26%2FmNPQ%2BbwRCoDYQfLWyuhDbdQJiCAUhuk6qpgToaUGuab%2ByViAc%2BTn5agw%2F5zExAY6pgHUyprdBcywcLy%2B3c4NI8WY5M3%2F1a%2Bfr4reaHX5IPPqbvQCDBCn%2BfXrlF3c19t%2FPTNmUF3Wjh2ShP927rWSBJtJB5wgmpJQRQtfPVrDa9iLMFuipJAiyyDWtdL7oFwxQDNTD5f3LlzACI7omw3U%2B0AFI0OATqP8O30bQdZQ1RmvLT4kUkkPbIw9JWhV4QL5SWqnX5nCZHZbOO68n6azp3BrZE37scm4&X-Amz-Signature=e3a258db59af3a3d44b283ace1158e2271673315862555bec6edce9c50bc36d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNG5SMO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHEBjT7X2G7PZgTdMAKr6Kx0zxFbPg4ccjn%2Bb7DbJ4N6AiAz4axHRDzXp1DMu0Iq%2FnqGdjXWggooH%2FiyBsEkobUJ8yr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMIToEwh7oJG8RhFy3KtwDgXCk8T7xOl8qqYbMp76CTS98%2Fn%2FljwAwKWhKzx%2BXfWEzQ2Tbglil%2B4WyYm%2B17oyYlNZW2TgePO6e9mr65Oa%2BWvUcIQRDeoPymSFqo7ksp%2Bi%2FYIhNtU0mpX9T72SqYKUgQRE35smDVOCpSPg0GdogybR484D8UiVkiZu8bRgd1nDK7wwk7bvACevUYkhPD0M9jvIwm00aYWMpWPimp6edGjlR44RLDJE4NY5W1HuydTFuDFpox%2FxOrHyki3nsNqFC85cYrkoZBdiPkcgmrW4D1awoepXS2GMc%2Fd5QUgTY4uR7o%2FG63L7zZ3Ms7OAJR18enrYxphSTopwhBqDSY0MgXTNhi0rSnjq6%2FI1Z7ech4OTrwoMVlqufkoRT9Dx62SajxWlAOKENdzQ6Tc6%2FP3Xafj64Z1vk7WxWHVqBP50ZSA04EGgmeyzi7%2F0eDzc1YKODv7tJ5bHbeBtHrHP2bIq5l2IV%2FE6Ru2Y5KIyoJxryuDgQSjl9D9p%2FfFB964EciDRldNx7Zl4eEmBskNNIeaOVV2wTzer0wPnri3ktxoLVqqVhDPr%2BUjnKWYeyjCe5T5Ppd26%2FmNPQ%2BbwRCoDYQfLWyuhDbdQJiCAUhuk6qpgToaUGuab%2ByViAc%2BTn5agw%2F5zExAY6pgHUyprdBcywcLy%2B3c4NI8WY5M3%2F1a%2Bfr4reaHX5IPPqbvQCDBCn%2BfXrlF3c19t%2FPTNmUF3Wjh2ShP927rWSBJtJB5wgmpJQRQtfPVrDa9iLMFuipJAiyyDWtdL7oFwxQDNTD5f3LlzACI7omw3U%2B0AFI0OATqP8O30bQdZQ1RmvLT4kUkkPbIw9JWhV4QL5SWqnX5nCZHZbOO68n6azp3BrZE37scm4&X-Amz-Signature=a40ba67360211349daf5ae7cf24016ad5557c2dfd766193c46d9b1f836aec943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNG5SMO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHEBjT7X2G7PZgTdMAKr6Kx0zxFbPg4ccjn%2Bb7DbJ4N6AiAz4axHRDzXp1DMu0Iq%2FnqGdjXWggooH%2FiyBsEkobUJ8yr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMIToEwh7oJG8RhFy3KtwDgXCk8T7xOl8qqYbMp76CTS98%2Fn%2FljwAwKWhKzx%2BXfWEzQ2Tbglil%2B4WyYm%2B17oyYlNZW2TgePO6e9mr65Oa%2BWvUcIQRDeoPymSFqo7ksp%2Bi%2FYIhNtU0mpX9T72SqYKUgQRE35smDVOCpSPg0GdogybR484D8UiVkiZu8bRgd1nDK7wwk7bvACevUYkhPD0M9jvIwm00aYWMpWPimp6edGjlR44RLDJE4NY5W1HuydTFuDFpox%2FxOrHyki3nsNqFC85cYrkoZBdiPkcgmrW4D1awoepXS2GMc%2Fd5QUgTY4uR7o%2FG63L7zZ3Ms7OAJR18enrYxphSTopwhBqDSY0MgXTNhi0rSnjq6%2FI1Z7ech4OTrwoMVlqufkoRT9Dx62SajxWlAOKENdzQ6Tc6%2FP3Xafj64Z1vk7WxWHVqBP50ZSA04EGgmeyzi7%2F0eDzc1YKODv7tJ5bHbeBtHrHP2bIq5l2IV%2FE6Ru2Y5KIyoJxryuDgQSjl9D9p%2FfFB964EciDRldNx7Zl4eEmBskNNIeaOVV2wTzer0wPnri3ktxoLVqqVhDPr%2BUjnKWYeyjCe5T5Ppd26%2FmNPQ%2BbwRCoDYQfLWyuhDbdQJiCAUhuk6qpgToaUGuab%2ByViAc%2BTn5agw%2F5zExAY6pgHUyprdBcywcLy%2B3c4NI8WY5M3%2F1a%2Bfr4reaHX5IPPqbvQCDBCn%2BfXrlF3c19t%2FPTNmUF3Wjh2ShP927rWSBJtJB5wgmpJQRQtfPVrDa9iLMFuipJAiyyDWtdL7oFwxQDNTD5f3LlzACI7omw3U%2B0AFI0OATqP8O30bQdZQ1RmvLT4kUkkPbIw9JWhV4QL5SWqnX5nCZHZbOO68n6azp3BrZE37scm4&X-Amz-Signature=1158b306ea64ae20db6049629660d8ed21aea7fcf1fb3824b52d08021fa1fa63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNG5SMO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHEBjT7X2G7PZgTdMAKr6Kx0zxFbPg4ccjn%2Bb7DbJ4N6AiAz4axHRDzXp1DMu0Iq%2FnqGdjXWggooH%2FiyBsEkobUJ8yr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMIToEwh7oJG8RhFy3KtwDgXCk8T7xOl8qqYbMp76CTS98%2Fn%2FljwAwKWhKzx%2BXfWEzQ2Tbglil%2B4WyYm%2B17oyYlNZW2TgePO6e9mr65Oa%2BWvUcIQRDeoPymSFqo7ksp%2Bi%2FYIhNtU0mpX9T72SqYKUgQRE35smDVOCpSPg0GdogybR484D8UiVkiZu8bRgd1nDK7wwk7bvACevUYkhPD0M9jvIwm00aYWMpWPimp6edGjlR44RLDJE4NY5W1HuydTFuDFpox%2FxOrHyki3nsNqFC85cYrkoZBdiPkcgmrW4D1awoepXS2GMc%2Fd5QUgTY4uR7o%2FG63L7zZ3Ms7OAJR18enrYxphSTopwhBqDSY0MgXTNhi0rSnjq6%2FI1Z7ech4OTrwoMVlqufkoRT9Dx62SajxWlAOKENdzQ6Tc6%2FP3Xafj64Z1vk7WxWHVqBP50ZSA04EGgmeyzi7%2F0eDzc1YKODv7tJ5bHbeBtHrHP2bIq5l2IV%2FE6Ru2Y5KIyoJxryuDgQSjl9D9p%2FfFB964EciDRldNx7Zl4eEmBskNNIeaOVV2wTzer0wPnri3ktxoLVqqVhDPr%2BUjnKWYeyjCe5T5Ppd26%2FmNPQ%2BbwRCoDYQfLWyuhDbdQJiCAUhuk6qpgToaUGuab%2ByViAc%2BTn5agw%2F5zExAY6pgHUyprdBcywcLy%2B3c4NI8WY5M3%2F1a%2Bfr4reaHX5IPPqbvQCDBCn%2BfXrlF3c19t%2FPTNmUF3Wjh2ShP927rWSBJtJB5wgmpJQRQtfPVrDa9iLMFuipJAiyyDWtdL7oFwxQDNTD5f3LlzACI7omw3U%2B0AFI0OATqP8O30bQdZQ1RmvLT4kUkkPbIw9JWhV4QL5SWqnX5nCZHZbOO68n6azp3BrZE37scm4&X-Amz-Signature=5e2003065320fbe270d4fc13f3ca5119f897f9f75410b40aad89642e87f6dabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
