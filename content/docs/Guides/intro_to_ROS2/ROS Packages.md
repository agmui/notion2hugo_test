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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542BRN6G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhXCyxr1DTZCP7UpmCQurEV0FnX6LNM5L%2F8Kdt9ZzDFAiAUjmzcj3inN%2FINq39%2BGdpZpqSbICkIsaymrIxqTs%2BHBCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkGiiKjCdZB14RefKtwDVQ%2B9Dps3tn8tkF9rg21EufhokFFfMA8tBOywl9hR0U%2BislwG%2FlbSNX5UrLtpPdSKtqkBHdAH9xj7b9%2FvMeagOOZsk%2FjnkM8mu3g5akqd5n7orPk2BWSTu447ZPRjob91x%2BwPnc0rflKxe9mz%2BN%2BCWZsNz%2FsjG7Sa2DBTzCOEXdP%2Bnj7jDZTiXnu3lATgBtgI2CXDAXYicejByHAGzWF1TB8ASlgzGal2AB%2FRnx7gMaE%2BPjCWirlvrAnvfWCGS01Yq5F4OK2X991Oaog6Ub4Mi9IxLnzdc44ZDl1D%2FsRvLjYtJY2VhEOLU0Jrt9kMCMMxEFy%2FK038T0xzgB8NJlNUA0%2BA%2BjxnPOfd2PQor45PtZ2YOEtVNZvL058rXtcjQ5HE7hqT9BpVV9AzidO6p8UbFkcRKVNzuneFHKa%2BApEd7WThoPlCU8V4VKJR1VhoBBVYWu2Ej2Ycaonbz6yC0BN08Nejizo%2F%2FMOj2O%2B4Be1O9H%2Bj0Efv1f0HLukQnEBqz61aRRmABdeLhJ6MZIxDToUpZ4%2BYBP3yTzekylPelghFfoB%2FG7CbxIgT22dIANwSAwB8dZn3DZObPxta4zT%2FFvXoQToDhGur7bdA79A6t7jPP55cP%2Fbiee%2BCe3zF058wmab3vAY6pgG8uCQQ8ogLIPcwxhCaqQiGn6Fu4NCNytILzAEtpoYAAm8AtvvZy81pzL73KhHoROOj%2B9HnilzRdH33RlbPRgZQ6kpRETAH7Qb0GJxDBySKLRw6%2ByoDawDBUDnyeVFA5uX1xwjWVASt5t8UYGstgj5uznScrnuy1i%2BJt2dPjrxOMClVyI674xsA8Xrk%2FTvjXD3TGhKOa53SA43teeU0jPvpJsZy%2B2Fy&X-Amz-Signature=c1486158ed63add4d2a46378cdc086b597faa50666f6084e461498dd7b40ad08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542BRN6G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhXCyxr1DTZCP7UpmCQurEV0FnX6LNM5L%2F8Kdt9ZzDFAiAUjmzcj3inN%2FINq39%2BGdpZpqSbICkIsaymrIxqTs%2BHBCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkGiiKjCdZB14RefKtwDVQ%2B9Dps3tn8tkF9rg21EufhokFFfMA8tBOywl9hR0U%2BislwG%2FlbSNX5UrLtpPdSKtqkBHdAH9xj7b9%2FvMeagOOZsk%2FjnkM8mu3g5akqd5n7orPk2BWSTu447ZPRjob91x%2BwPnc0rflKxe9mz%2BN%2BCWZsNz%2FsjG7Sa2DBTzCOEXdP%2Bnj7jDZTiXnu3lATgBtgI2CXDAXYicejByHAGzWF1TB8ASlgzGal2AB%2FRnx7gMaE%2BPjCWirlvrAnvfWCGS01Yq5F4OK2X991Oaog6Ub4Mi9IxLnzdc44ZDl1D%2FsRvLjYtJY2VhEOLU0Jrt9kMCMMxEFy%2FK038T0xzgB8NJlNUA0%2BA%2BjxnPOfd2PQor45PtZ2YOEtVNZvL058rXtcjQ5HE7hqT9BpVV9AzidO6p8UbFkcRKVNzuneFHKa%2BApEd7WThoPlCU8V4VKJR1VhoBBVYWu2Ej2Ycaonbz6yC0BN08Nejizo%2F%2FMOj2O%2B4Be1O9H%2Bj0Efv1f0HLukQnEBqz61aRRmABdeLhJ6MZIxDToUpZ4%2BYBP3yTzekylPelghFfoB%2FG7CbxIgT22dIANwSAwB8dZn3DZObPxta4zT%2FFvXoQToDhGur7bdA79A6t7jPP55cP%2Fbiee%2BCe3zF058wmab3vAY6pgG8uCQQ8ogLIPcwxhCaqQiGn6Fu4NCNytILzAEtpoYAAm8AtvvZy81pzL73KhHoROOj%2B9HnilzRdH33RlbPRgZQ6kpRETAH7Qb0GJxDBySKLRw6%2ByoDawDBUDnyeVFA5uX1xwjWVASt5t8UYGstgj5uznScrnuy1i%2BJt2dPjrxOMClVyI674xsA8Xrk%2FTvjXD3TGhKOa53SA43teeU0jPvpJsZy%2B2Fy&X-Amz-Signature=215308451eaac49e679ed70ae5952f621ddb2d5c81b9a79d366d2e825bc091f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542BRN6G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhXCyxr1DTZCP7UpmCQurEV0FnX6LNM5L%2F8Kdt9ZzDFAiAUjmzcj3inN%2FINq39%2BGdpZpqSbICkIsaymrIxqTs%2BHBCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkGiiKjCdZB14RefKtwDVQ%2B9Dps3tn8tkF9rg21EufhokFFfMA8tBOywl9hR0U%2BislwG%2FlbSNX5UrLtpPdSKtqkBHdAH9xj7b9%2FvMeagOOZsk%2FjnkM8mu3g5akqd5n7orPk2BWSTu447ZPRjob91x%2BwPnc0rflKxe9mz%2BN%2BCWZsNz%2FsjG7Sa2DBTzCOEXdP%2Bnj7jDZTiXnu3lATgBtgI2CXDAXYicejByHAGzWF1TB8ASlgzGal2AB%2FRnx7gMaE%2BPjCWirlvrAnvfWCGS01Yq5F4OK2X991Oaog6Ub4Mi9IxLnzdc44ZDl1D%2FsRvLjYtJY2VhEOLU0Jrt9kMCMMxEFy%2FK038T0xzgB8NJlNUA0%2BA%2BjxnPOfd2PQor45PtZ2YOEtVNZvL058rXtcjQ5HE7hqT9BpVV9AzidO6p8UbFkcRKVNzuneFHKa%2BApEd7WThoPlCU8V4VKJR1VhoBBVYWu2Ej2Ycaonbz6yC0BN08Nejizo%2F%2FMOj2O%2B4Be1O9H%2Bj0Efv1f0HLukQnEBqz61aRRmABdeLhJ6MZIxDToUpZ4%2BYBP3yTzekylPelghFfoB%2FG7CbxIgT22dIANwSAwB8dZn3DZObPxta4zT%2FFvXoQToDhGur7bdA79A6t7jPP55cP%2Fbiee%2BCe3zF058wmab3vAY6pgG8uCQQ8ogLIPcwxhCaqQiGn6Fu4NCNytILzAEtpoYAAm8AtvvZy81pzL73KhHoROOj%2B9HnilzRdH33RlbPRgZQ6kpRETAH7Qb0GJxDBySKLRw6%2ByoDawDBUDnyeVFA5uX1xwjWVASt5t8UYGstgj5uznScrnuy1i%2BJt2dPjrxOMClVyI674xsA8Xrk%2FTvjXD3TGhKOa53SA43teeU0jPvpJsZy%2B2Fy&X-Amz-Signature=86b388709ee519fa812defd22b83dff7d1857917ba90e295db356f7adcd61376&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542BRN6G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhXCyxr1DTZCP7UpmCQurEV0FnX6LNM5L%2F8Kdt9ZzDFAiAUjmzcj3inN%2FINq39%2BGdpZpqSbICkIsaymrIxqTs%2BHBCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkGiiKjCdZB14RefKtwDVQ%2B9Dps3tn8tkF9rg21EufhokFFfMA8tBOywl9hR0U%2BislwG%2FlbSNX5UrLtpPdSKtqkBHdAH9xj7b9%2FvMeagOOZsk%2FjnkM8mu3g5akqd5n7orPk2BWSTu447ZPRjob91x%2BwPnc0rflKxe9mz%2BN%2BCWZsNz%2FsjG7Sa2DBTzCOEXdP%2Bnj7jDZTiXnu3lATgBtgI2CXDAXYicejByHAGzWF1TB8ASlgzGal2AB%2FRnx7gMaE%2BPjCWirlvrAnvfWCGS01Yq5F4OK2X991Oaog6Ub4Mi9IxLnzdc44ZDl1D%2FsRvLjYtJY2VhEOLU0Jrt9kMCMMxEFy%2FK038T0xzgB8NJlNUA0%2BA%2BjxnPOfd2PQor45PtZ2YOEtVNZvL058rXtcjQ5HE7hqT9BpVV9AzidO6p8UbFkcRKVNzuneFHKa%2BApEd7WThoPlCU8V4VKJR1VhoBBVYWu2Ej2Ycaonbz6yC0BN08Nejizo%2F%2FMOj2O%2B4Be1O9H%2Bj0Efv1f0HLukQnEBqz61aRRmABdeLhJ6MZIxDToUpZ4%2BYBP3yTzekylPelghFfoB%2FG7CbxIgT22dIANwSAwB8dZn3DZObPxta4zT%2FFvXoQToDhGur7bdA79A6t7jPP55cP%2Fbiee%2BCe3zF058wmab3vAY6pgG8uCQQ8ogLIPcwxhCaqQiGn6Fu4NCNytILzAEtpoYAAm8AtvvZy81pzL73KhHoROOj%2B9HnilzRdH33RlbPRgZQ6kpRETAH7Qb0GJxDBySKLRw6%2ByoDawDBUDnyeVFA5uX1xwjWVASt5t8UYGstgj5uznScrnuy1i%2BJt2dPjrxOMClVyI674xsA8Xrk%2FTvjXD3TGhKOa53SA43teeU0jPvpJsZy%2B2Fy&X-Amz-Signature=848450e1eba8b55b8147ddd463bf6b26cd2c1803e99a669f1f6f5cef7fc5b3ff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542BRN6G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhXCyxr1DTZCP7UpmCQurEV0FnX6LNM5L%2F8Kdt9ZzDFAiAUjmzcj3inN%2FINq39%2BGdpZpqSbICkIsaymrIxqTs%2BHBCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkGiiKjCdZB14RefKtwDVQ%2B9Dps3tn8tkF9rg21EufhokFFfMA8tBOywl9hR0U%2BislwG%2FlbSNX5UrLtpPdSKtqkBHdAH9xj7b9%2FvMeagOOZsk%2FjnkM8mu3g5akqd5n7orPk2BWSTu447ZPRjob91x%2BwPnc0rflKxe9mz%2BN%2BCWZsNz%2FsjG7Sa2DBTzCOEXdP%2Bnj7jDZTiXnu3lATgBtgI2CXDAXYicejByHAGzWF1TB8ASlgzGal2AB%2FRnx7gMaE%2BPjCWirlvrAnvfWCGS01Yq5F4OK2X991Oaog6Ub4Mi9IxLnzdc44ZDl1D%2FsRvLjYtJY2VhEOLU0Jrt9kMCMMxEFy%2FK038T0xzgB8NJlNUA0%2BA%2BjxnPOfd2PQor45PtZ2YOEtVNZvL058rXtcjQ5HE7hqT9BpVV9AzidO6p8UbFkcRKVNzuneFHKa%2BApEd7WThoPlCU8V4VKJR1VhoBBVYWu2Ej2Ycaonbz6yC0BN08Nejizo%2F%2FMOj2O%2B4Be1O9H%2Bj0Efv1f0HLukQnEBqz61aRRmABdeLhJ6MZIxDToUpZ4%2BYBP3yTzekylPelghFfoB%2FG7CbxIgT22dIANwSAwB8dZn3DZObPxta4zT%2FFvXoQToDhGur7bdA79A6t7jPP55cP%2Fbiee%2BCe3zF058wmab3vAY6pgG8uCQQ8ogLIPcwxhCaqQiGn6Fu4NCNytILzAEtpoYAAm8AtvvZy81pzL73KhHoROOj%2B9HnilzRdH33RlbPRgZQ6kpRETAH7Qb0GJxDBySKLRw6%2ByoDawDBUDnyeVFA5uX1xwjWVASt5t8UYGstgj5uznScrnuy1i%2BJt2dPjrxOMClVyI674xsA8Xrk%2FTvjXD3TGhKOa53SA43teeU0jPvpJsZy%2B2Fy&X-Amz-Signature=9831ff538833a6f712c165fbd066a0de9dcf0ee3fbf5206a3931082ccdfd9f2a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542BRN6G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhXCyxr1DTZCP7UpmCQurEV0FnX6LNM5L%2F8Kdt9ZzDFAiAUjmzcj3inN%2FINq39%2BGdpZpqSbICkIsaymrIxqTs%2BHBCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkGiiKjCdZB14RefKtwDVQ%2B9Dps3tn8tkF9rg21EufhokFFfMA8tBOywl9hR0U%2BislwG%2FlbSNX5UrLtpPdSKtqkBHdAH9xj7b9%2FvMeagOOZsk%2FjnkM8mu3g5akqd5n7orPk2BWSTu447ZPRjob91x%2BwPnc0rflKxe9mz%2BN%2BCWZsNz%2FsjG7Sa2DBTzCOEXdP%2Bnj7jDZTiXnu3lATgBtgI2CXDAXYicejByHAGzWF1TB8ASlgzGal2AB%2FRnx7gMaE%2BPjCWirlvrAnvfWCGS01Yq5F4OK2X991Oaog6Ub4Mi9IxLnzdc44ZDl1D%2FsRvLjYtJY2VhEOLU0Jrt9kMCMMxEFy%2FK038T0xzgB8NJlNUA0%2BA%2BjxnPOfd2PQor45PtZ2YOEtVNZvL058rXtcjQ5HE7hqT9BpVV9AzidO6p8UbFkcRKVNzuneFHKa%2BApEd7WThoPlCU8V4VKJR1VhoBBVYWu2Ej2Ycaonbz6yC0BN08Nejizo%2F%2FMOj2O%2B4Be1O9H%2Bj0Efv1f0HLukQnEBqz61aRRmABdeLhJ6MZIxDToUpZ4%2BYBP3yTzekylPelghFfoB%2FG7CbxIgT22dIANwSAwB8dZn3DZObPxta4zT%2FFvXoQToDhGur7bdA79A6t7jPP55cP%2Fbiee%2BCe3zF058wmab3vAY6pgG8uCQQ8ogLIPcwxhCaqQiGn6Fu4NCNytILzAEtpoYAAm8AtvvZy81pzL73KhHoROOj%2B9HnilzRdH33RlbPRgZQ6kpRETAH7Qb0GJxDBySKLRw6%2ByoDawDBUDnyeVFA5uX1xwjWVASt5t8UYGstgj5uznScrnuy1i%2BJt2dPjrxOMClVyI674xsA8Xrk%2FTvjXD3TGhKOa53SA43teeU0jPvpJsZy%2B2Fy&X-Amz-Signature=e294b24abafdfbf64a6a4dd5a6d4013be3af783b0781675dd673c2ff735f2962&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542BRN6G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhXCyxr1DTZCP7UpmCQurEV0FnX6LNM5L%2F8Kdt9ZzDFAiAUjmzcj3inN%2FINq39%2BGdpZpqSbICkIsaymrIxqTs%2BHBCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTkGiiKjCdZB14RefKtwDVQ%2B9Dps3tn8tkF9rg21EufhokFFfMA8tBOywl9hR0U%2BislwG%2FlbSNX5UrLtpPdSKtqkBHdAH9xj7b9%2FvMeagOOZsk%2FjnkM8mu3g5akqd5n7orPk2BWSTu447ZPRjob91x%2BwPnc0rflKxe9mz%2BN%2BCWZsNz%2FsjG7Sa2DBTzCOEXdP%2Bnj7jDZTiXnu3lATgBtgI2CXDAXYicejByHAGzWF1TB8ASlgzGal2AB%2FRnx7gMaE%2BPjCWirlvrAnvfWCGS01Yq5F4OK2X991Oaog6Ub4Mi9IxLnzdc44ZDl1D%2FsRvLjYtJY2VhEOLU0Jrt9kMCMMxEFy%2FK038T0xzgB8NJlNUA0%2BA%2BjxnPOfd2PQor45PtZ2YOEtVNZvL058rXtcjQ5HE7hqT9BpVV9AzidO6p8UbFkcRKVNzuneFHKa%2BApEd7WThoPlCU8V4VKJR1VhoBBVYWu2Ej2Ycaonbz6yC0BN08Nejizo%2F%2FMOj2O%2B4Be1O9H%2Bj0Efv1f0HLukQnEBqz61aRRmABdeLhJ6MZIxDToUpZ4%2BYBP3yTzekylPelghFfoB%2FG7CbxIgT22dIANwSAwB8dZn3DZObPxta4zT%2FFvXoQToDhGur7bdA79A6t7jPP55cP%2Fbiee%2BCe3zF058wmab3vAY6pgG8uCQQ8ogLIPcwxhCaqQiGn6Fu4NCNytILzAEtpoYAAm8AtvvZy81pzL73KhHoROOj%2B9HnilzRdH33RlbPRgZQ6kpRETAH7Qb0GJxDBySKLRw6%2ByoDawDBUDnyeVFA5uX1xwjWVASt5t8UYGstgj5uznScrnuy1i%2BJt2dPjrxOMClVyI674xsA8Xrk%2FTvjXD3TGhKOa53SA43teeU0jPvpJsZy%2B2Fy&X-Amz-Signature=5f3ee6aa8d5539b373eb7db4f6cc54890f9dd6c74b6a7e350f1f2ac372c462c5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
