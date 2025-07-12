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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNOQ37R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS26j4fUtwApkXDunlNElOQGZ5CYLmfpk%2Fm2tV4lbPyAiBflhrLkMBr1LZ8N7ELb296EE8PrHAWNdfliDKfF1in8iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy1zWnWcJnEvhd%2FZmKtwDhMiHVLje%2BcHQyHkaAiYEmiPBq3Wk7mrQG1S8o2vQd%2B3DlVEgG3uUM9%2BriOVlNyJMyaZrhXLZDTPBvK5G0QPTvUAtzQrS%2FtEFPddZzvL0aVIhZvVjIstc1JAbB0DlQTFdtNLQBrD7z6n%2F0qL9siyvJWSyDQgTIdtiqxQbNQWsfkGZ55tXM87o%2B%2BI88lJohwe05Oh4ilcgmgDaHAe06YnrSAWtBxjBVqBWAd8FY5b28eL4zK1MzvLZdIchv8zw%2BVaqqezmIDKKsGn9JL1wSjoHnjeI%2F2ieDosDGqlNd62Yj5NSH9Vtk3UPxlTZlKOOVYtCpXOr4bAfFFhhl0sX4CEglDm%2F5%2BuFPkCPgLQeMCFUO1Co0U%2FHjLQZq%2BKGKxUVxzTaj3ThS%2F0%2B71GgAixeDiighf93HwlDrtWQhwqVut3i1ShczbnQJEUmvwxpb2ZJ%2BZh8GwWeJU0nPDwDfeSXhHN6kg4%2BsccNBrNQMWDFBIHrAlNFK9ri6EC0hcBH0EGOS%2B%2BY%2Bqfx4ZxYmmvUQ0QyAw4kZwdTlqbKsBX%2FmE2Tnm73li2F5tghMLmwkAOaI1Z4E66wh8qoz8i%2FJOgnZyubDHlPzMBSzh0554Svu%2BMM96RMKxcoQzss8JcO9bqgXFkwwLXGwwY6pgFApCqjexLVh%2FpZTkOkrwsFK2qRnVI%2BK%2Ff1eBPYRMQUau1PBWDG11WKEbOiS4Aa%2BqX%2Fvfah54uhF9QyFjPFcs4pZASYw%2FYfhxGQMHzqwbuJCOkP%2Fkegtv7C11u%2BqBqgANPI%2BBhxvDKXroATihzHoMYRvRy3eKb7ZYGf1ShH%2FYva4fjlHMYVa%2FUcusryqjZXpI9%2FFaxU2lHIazY%2FF8c3BssOP3Q1aKSc&X-Amz-Signature=bcaebe1acc19bf1c9cadcc2990b5155a6428178f404a213108d52fa1fb134de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNOQ37R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS26j4fUtwApkXDunlNElOQGZ5CYLmfpk%2Fm2tV4lbPyAiBflhrLkMBr1LZ8N7ELb296EE8PrHAWNdfliDKfF1in8iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy1zWnWcJnEvhd%2FZmKtwDhMiHVLje%2BcHQyHkaAiYEmiPBq3Wk7mrQG1S8o2vQd%2B3DlVEgG3uUM9%2BriOVlNyJMyaZrhXLZDTPBvK5G0QPTvUAtzQrS%2FtEFPddZzvL0aVIhZvVjIstc1JAbB0DlQTFdtNLQBrD7z6n%2F0qL9siyvJWSyDQgTIdtiqxQbNQWsfkGZ55tXM87o%2B%2BI88lJohwe05Oh4ilcgmgDaHAe06YnrSAWtBxjBVqBWAd8FY5b28eL4zK1MzvLZdIchv8zw%2BVaqqezmIDKKsGn9JL1wSjoHnjeI%2F2ieDosDGqlNd62Yj5NSH9Vtk3UPxlTZlKOOVYtCpXOr4bAfFFhhl0sX4CEglDm%2F5%2BuFPkCPgLQeMCFUO1Co0U%2FHjLQZq%2BKGKxUVxzTaj3ThS%2F0%2B71GgAixeDiighf93HwlDrtWQhwqVut3i1ShczbnQJEUmvwxpb2ZJ%2BZh8GwWeJU0nPDwDfeSXhHN6kg4%2BsccNBrNQMWDFBIHrAlNFK9ri6EC0hcBH0EGOS%2B%2BY%2Bqfx4ZxYmmvUQ0QyAw4kZwdTlqbKsBX%2FmE2Tnm73li2F5tghMLmwkAOaI1Z4E66wh8qoz8i%2FJOgnZyubDHlPzMBSzh0554Svu%2BMM96RMKxcoQzss8JcO9bqgXFkwwLXGwwY6pgFApCqjexLVh%2FpZTkOkrwsFK2qRnVI%2BK%2Ff1eBPYRMQUau1PBWDG11WKEbOiS4Aa%2BqX%2Fvfah54uhF9QyFjPFcs4pZASYw%2FYfhxGQMHzqwbuJCOkP%2Fkegtv7C11u%2BqBqgANPI%2BBhxvDKXroATihzHoMYRvRy3eKb7ZYGf1ShH%2FYva4fjlHMYVa%2FUcusryqjZXpI9%2FFaxU2lHIazY%2FF8c3BssOP3Q1aKSc&X-Amz-Signature=f61ee8306edd32902c681352c15e5254d1f426c0cb2c17b3c6bead84a3ef6ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNOQ37R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS26j4fUtwApkXDunlNElOQGZ5CYLmfpk%2Fm2tV4lbPyAiBflhrLkMBr1LZ8N7ELb296EE8PrHAWNdfliDKfF1in8iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy1zWnWcJnEvhd%2FZmKtwDhMiHVLje%2BcHQyHkaAiYEmiPBq3Wk7mrQG1S8o2vQd%2B3DlVEgG3uUM9%2BriOVlNyJMyaZrhXLZDTPBvK5G0QPTvUAtzQrS%2FtEFPddZzvL0aVIhZvVjIstc1JAbB0DlQTFdtNLQBrD7z6n%2F0qL9siyvJWSyDQgTIdtiqxQbNQWsfkGZ55tXM87o%2B%2BI88lJohwe05Oh4ilcgmgDaHAe06YnrSAWtBxjBVqBWAd8FY5b28eL4zK1MzvLZdIchv8zw%2BVaqqezmIDKKsGn9JL1wSjoHnjeI%2F2ieDosDGqlNd62Yj5NSH9Vtk3UPxlTZlKOOVYtCpXOr4bAfFFhhl0sX4CEglDm%2F5%2BuFPkCPgLQeMCFUO1Co0U%2FHjLQZq%2BKGKxUVxzTaj3ThS%2F0%2B71GgAixeDiighf93HwlDrtWQhwqVut3i1ShczbnQJEUmvwxpb2ZJ%2BZh8GwWeJU0nPDwDfeSXhHN6kg4%2BsccNBrNQMWDFBIHrAlNFK9ri6EC0hcBH0EGOS%2B%2BY%2Bqfx4ZxYmmvUQ0QyAw4kZwdTlqbKsBX%2FmE2Tnm73li2F5tghMLmwkAOaI1Z4E66wh8qoz8i%2FJOgnZyubDHlPzMBSzh0554Svu%2BMM96RMKxcoQzss8JcO9bqgXFkwwLXGwwY6pgFApCqjexLVh%2FpZTkOkrwsFK2qRnVI%2BK%2Ff1eBPYRMQUau1PBWDG11WKEbOiS4Aa%2BqX%2Fvfah54uhF9QyFjPFcs4pZASYw%2FYfhxGQMHzqwbuJCOkP%2Fkegtv7C11u%2BqBqgANPI%2BBhxvDKXroATihzHoMYRvRy3eKb7ZYGf1ShH%2FYva4fjlHMYVa%2FUcusryqjZXpI9%2FFaxU2lHIazY%2FF8c3BssOP3Q1aKSc&X-Amz-Signature=9f674a5ccdbd2592b97d6ecc0124423597acccd2c63491a978b07114735c2b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNOQ37R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS26j4fUtwApkXDunlNElOQGZ5CYLmfpk%2Fm2tV4lbPyAiBflhrLkMBr1LZ8N7ELb296EE8PrHAWNdfliDKfF1in8iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy1zWnWcJnEvhd%2FZmKtwDhMiHVLje%2BcHQyHkaAiYEmiPBq3Wk7mrQG1S8o2vQd%2B3DlVEgG3uUM9%2BriOVlNyJMyaZrhXLZDTPBvK5G0QPTvUAtzQrS%2FtEFPddZzvL0aVIhZvVjIstc1JAbB0DlQTFdtNLQBrD7z6n%2F0qL9siyvJWSyDQgTIdtiqxQbNQWsfkGZ55tXM87o%2B%2BI88lJohwe05Oh4ilcgmgDaHAe06YnrSAWtBxjBVqBWAd8FY5b28eL4zK1MzvLZdIchv8zw%2BVaqqezmIDKKsGn9JL1wSjoHnjeI%2F2ieDosDGqlNd62Yj5NSH9Vtk3UPxlTZlKOOVYtCpXOr4bAfFFhhl0sX4CEglDm%2F5%2BuFPkCPgLQeMCFUO1Co0U%2FHjLQZq%2BKGKxUVxzTaj3ThS%2F0%2B71GgAixeDiighf93HwlDrtWQhwqVut3i1ShczbnQJEUmvwxpb2ZJ%2BZh8GwWeJU0nPDwDfeSXhHN6kg4%2BsccNBrNQMWDFBIHrAlNFK9ri6EC0hcBH0EGOS%2B%2BY%2Bqfx4ZxYmmvUQ0QyAw4kZwdTlqbKsBX%2FmE2Tnm73li2F5tghMLmwkAOaI1Z4E66wh8qoz8i%2FJOgnZyubDHlPzMBSzh0554Svu%2BMM96RMKxcoQzss8JcO9bqgXFkwwLXGwwY6pgFApCqjexLVh%2FpZTkOkrwsFK2qRnVI%2BK%2Ff1eBPYRMQUau1PBWDG11WKEbOiS4Aa%2BqX%2Fvfah54uhF9QyFjPFcs4pZASYw%2FYfhxGQMHzqwbuJCOkP%2Fkegtv7C11u%2BqBqgANPI%2BBhxvDKXroATihzHoMYRvRy3eKb7ZYGf1ShH%2FYva4fjlHMYVa%2FUcusryqjZXpI9%2FFaxU2lHIazY%2FF8c3BssOP3Q1aKSc&X-Amz-Signature=25f03a425e7cb2b8094b3098e0e7a04442f93727650fd9f95611e5e9df51202c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNOQ37R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS26j4fUtwApkXDunlNElOQGZ5CYLmfpk%2Fm2tV4lbPyAiBflhrLkMBr1LZ8N7ELb296EE8PrHAWNdfliDKfF1in8iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy1zWnWcJnEvhd%2FZmKtwDhMiHVLje%2BcHQyHkaAiYEmiPBq3Wk7mrQG1S8o2vQd%2B3DlVEgG3uUM9%2BriOVlNyJMyaZrhXLZDTPBvK5G0QPTvUAtzQrS%2FtEFPddZzvL0aVIhZvVjIstc1JAbB0DlQTFdtNLQBrD7z6n%2F0qL9siyvJWSyDQgTIdtiqxQbNQWsfkGZ55tXM87o%2B%2BI88lJohwe05Oh4ilcgmgDaHAe06YnrSAWtBxjBVqBWAd8FY5b28eL4zK1MzvLZdIchv8zw%2BVaqqezmIDKKsGn9JL1wSjoHnjeI%2F2ieDosDGqlNd62Yj5NSH9Vtk3UPxlTZlKOOVYtCpXOr4bAfFFhhl0sX4CEglDm%2F5%2BuFPkCPgLQeMCFUO1Co0U%2FHjLQZq%2BKGKxUVxzTaj3ThS%2F0%2B71GgAixeDiighf93HwlDrtWQhwqVut3i1ShczbnQJEUmvwxpb2ZJ%2BZh8GwWeJU0nPDwDfeSXhHN6kg4%2BsccNBrNQMWDFBIHrAlNFK9ri6EC0hcBH0EGOS%2B%2BY%2Bqfx4ZxYmmvUQ0QyAw4kZwdTlqbKsBX%2FmE2Tnm73li2F5tghMLmwkAOaI1Z4E66wh8qoz8i%2FJOgnZyubDHlPzMBSzh0554Svu%2BMM96RMKxcoQzss8JcO9bqgXFkwwLXGwwY6pgFApCqjexLVh%2FpZTkOkrwsFK2qRnVI%2BK%2Ff1eBPYRMQUau1PBWDG11WKEbOiS4Aa%2BqX%2Fvfah54uhF9QyFjPFcs4pZASYw%2FYfhxGQMHzqwbuJCOkP%2Fkegtv7C11u%2BqBqgANPI%2BBhxvDKXroATihzHoMYRvRy3eKb7ZYGf1ShH%2FYva4fjlHMYVa%2FUcusryqjZXpI9%2FFaxU2lHIazY%2FF8c3BssOP3Q1aKSc&X-Amz-Signature=0a425daae5f03f863ddc042119e2269dfa1301a8660b3a93ac875f3106088c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNOQ37R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS26j4fUtwApkXDunlNElOQGZ5CYLmfpk%2Fm2tV4lbPyAiBflhrLkMBr1LZ8N7ELb296EE8PrHAWNdfliDKfF1in8iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy1zWnWcJnEvhd%2FZmKtwDhMiHVLje%2BcHQyHkaAiYEmiPBq3Wk7mrQG1S8o2vQd%2B3DlVEgG3uUM9%2BriOVlNyJMyaZrhXLZDTPBvK5G0QPTvUAtzQrS%2FtEFPddZzvL0aVIhZvVjIstc1JAbB0DlQTFdtNLQBrD7z6n%2F0qL9siyvJWSyDQgTIdtiqxQbNQWsfkGZ55tXM87o%2B%2BI88lJohwe05Oh4ilcgmgDaHAe06YnrSAWtBxjBVqBWAd8FY5b28eL4zK1MzvLZdIchv8zw%2BVaqqezmIDKKsGn9JL1wSjoHnjeI%2F2ieDosDGqlNd62Yj5NSH9Vtk3UPxlTZlKOOVYtCpXOr4bAfFFhhl0sX4CEglDm%2F5%2BuFPkCPgLQeMCFUO1Co0U%2FHjLQZq%2BKGKxUVxzTaj3ThS%2F0%2B71GgAixeDiighf93HwlDrtWQhwqVut3i1ShczbnQJEUmvwxpb2ZJ%2BZh8GwWeJU0nPDwDfeSXhHN6kg4%2BsccNBrNQMWDFBIHrAlNFK9ri6EC0hcBH0EGOS%2B%2BY%2Bqfx4ZxYmmvUQ0QyAw4kZwdTlqbKsBX%2FmE2Tnm73li2F5tghMLmwkAOaI1Z4E66wh8qoz8i%2FJOgnZyubDHlPzMBSzh0554Svu%2BMM96RMKxcoQzss8JcO9bqgXFkwwLXGwwY6pgFApCqjexLVh%2FpZTkOkrwsFK2qRnVI%2BK%2Ff1eBPYRMQUau1PBWDG11WKEbOiS4Aa%2BqX%2Fvfah54uhF9QyFjPFcs4pZASYw%2FYfhxGQMHzqwbuJCOkP%2Fkegtv7C11u%2BqBqgANPI%2BBhxvDKXroATihzHoMYRvRy3eKb7ZYGf1ShH%2FYva4fjlHMYVa%2FUcusryqjZXpI9%2FFaxU2lHIazY%2FF8c3BssOP3Q1aKSc&X-Amz-Signature=6fdf7e0cf10da979c5faac980f016dedd91a5992e837e57476f45cc29e83c629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SNOQ37R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS26j4fUtwApkXDunlNElOQGZ5CYLmfpk%2Fm2tV4lbPyAiBflhrLkMBr1LZ8N7ELb296EE8PrHAWNdfliDKfF1in8iqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy1zWnWcJnEvhd%2FZmKtwDhMiHVLje%2BcHQyHkaAiYEmiPBq3Wk7mrQG1S8o2vQd%2B3DlVEgG3uUM9%2BriOVlNyJMyaZrhXLZDTPBvK5G0QPTvUAtzQrS%2FtEFPddZzvL0aVIhZvVjIstc1JAbB0DlQTFdtNLQBrD7z6n%2F0qL9siyvJWSyDQgTIdtiqxQbNQWsfkGZ55tXM87o%2B%2BI88lJohwe05Oh4ilcgmgDaHAe06YnrSAWtBxjBVqBWAd8FY5b28eL4zK1MzvLZdIchv8zw%2BVaqqezmIDKKsGn9JL1wSjoHnjeI%2F2ieDosDGqlNd62Yj5NSH9Vtk3UPxlTZlKOOVYtCpXOr4bAfFFhhl0sX4CEglDm%2F5%2BuFPkCPgLQeMCFUO1Co0U%2FHjLQZq%2BKGKxUVxzTaj3ThS%2F0%2B71GgAixeDiighf93HwlDrtWQhwqVut3i1ShczbnQJEUmvwxpb2ZJ%2BZh8GwWeJU0nPDwDfeSXhHN6kg4%2BsccNBrNQMWDFBIHrAlNFK9ri6EC0hcBH0EGOS%2B%2BY%2Bqfx4ZxYmmvUQ0QyAw4kZwdTlqbKsBX%2FmE2Tnm73li2F5tghMLmwkAOaI1Z4E66wh8qoz8i%2FJOgnZyubDHlPzMBSzh0554Svu%2BMM96RMKxcoQzss8JcO9bqgXFkwwLXGwwY6pgFApCqjexLVh%2FpZTkOkrwsFK2qRnVI%2BK%2Ff1eBPYRMQUau1PBWDG11WKEbOiS4Aa%2BqX%2Fvfah54uhF9QyFjPFcs4pZASYw%2FYfhxGQMHzqwbuJCOkP%2Fkegtv7C11u%2BqBqgANPI%2BBhxvDKXroATihzHoMYRvRy3eKb7ZYGf1ShH%2FYva4fjlHMYVa%2FUcusryqjZXpI9%2FFaxU2lHIazY%2FF8c3BssOP3Q1aKSc&X-Amz-Signature=bd9b8b582c523527bfae5f5369b9444301c8bc26a63c8faab32352ab8ff9fcc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
