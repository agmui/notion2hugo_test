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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FNCZ4J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzMoCYg9vMcIE7KUE0j5VaNO6cPaW5KZ3NhVLf93H5PwIhAIeSjk1tx4YGWzlE%2FcyQzFGTN8CHPSsRhE6luyyYRajPKv8DCHAQABoMNjM3NDIzMTgzODA1IgwVWSR2yQ7r9K2Gx68q3AOVCQFyDzmDCM3uID1rLZalOBvpdW9urz8HMjQP6jAfgLV%2Fr%2F%2Fx360wXX3Cyngl6qnmNum5zH9CE3s%2F2iGp5V3z86HMtjVh6MDvkzGVYFjxrj6DY57Em5PGZ8eqc5hJ9noziwM3p1Y2z72J3n8vv6padothEdBNEdsYrRXUixr%2FHkleXylQNafDa5SJEPNh%2FvDZPPdYI6U%2FQAjRr%2FNvkniAvxZxcV%2FdPxdoYTjs7N90MNzJBE9Eescs%2BdBhMfHfsLiPCYUel5%2FDNN5F2aaEG6JCWd6S%2Bft%2BsqwUWZuBAZvj89h6C2F16biYkW8tooavGs5xW4F6zAIvqpYj2V2SvwTjVFudDwARRY1A164IyoGv7CQz5lFaf6clHsk43RdZzYtWQTjpvYAaXHNoXWqDiDq2R%2BGtDPOgndt67xphMxVNQZ8SWMPg8rtbczWyBMlQHsWy2kzqY6wBDhM1O3AYh9KDM5DMzkQQdNaPnmkSd7xrZ%2BkVI2W8GImm3k5l6Ie6fJ%2FolIwX9aT%2F538oC8WWB%2FEhUrUbaIXpJgDs3eBrAEh2MkKhKH%2FCBpzofaLSYanThY%2BP%2FvaQ7KPEBLLwrVA26ywIZcqhzDRcg1hqhlzfryVQzg6BaPqAQ0aa9CVx0jDd%2BqXBBjqkAaAdnlLouqSOVysHq%2FR6jtEkKG%2BjGamSwKIyKpfoj9Mox3Ef3qIr7fu6bOVoY6m8EMyniOChMZduMnI9CwimSdems7mG9tkoyd31LUOttwZPVSkXWGHIG4%2FhWM02oPNc4PNl1X2sau7abhvkGnpLBLsZPHTMwHMeA3YcYOxNaF1AgMNICt%2FX4XneNtz2r8L7iC6Zp%2BWw%2F%2BblZTmV9HpCydXKHonr&X-Amz-Signature=5547cd87fbc7f8c5d514f7d1dc5383abf348876736a661964e41c70e38b1ddda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FNCZ4J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzMoCYg9vMcIE7KUE0j5VaNO6cPaW5KZ3NhVLf93H5PwIhAIeSjk1tx4YGWzlE%2FcyQzFGTN8CHPSsRhE6luyyYRajPKv8DCHAQABoMNjM3NDIzMTgzODA1IgwVWSR2yQ7r9K2Gx68q3AOVCQFyDzmDCM3uID1rLZalOBvpdW9urz8HMjQP6jAfgLV%2Fr%2F%2Fx360wXX3Cyngl6qnmNum5zH9CE3s%2F2iGp5V3z86HMtjVh6MDvkzGVYFjxrj6DY57Em5PGZ8eqc5hJ9noziwM3p1Y2z72J3n8vv6padothEdBNEdsYrRXUixr%2FHkleXylQNafDa5SJEPNh%2FvDZPPdYI6U%2FQAjRr%2FNvkniAvxZxcV%2FdPxdoYTjs7N90MNzJBE9Eescs%2BdBhMfHfsLiPCYUel5%2FDNN5F2aaEG6JCWd6S%2Bft%2BsqwUWZuBAZvj89h6C2F16biYkW8tooavGs5xW4F6zAIvqpYj2V2SvwTjVFudDwARRY1A164IyoGv7CQz5lFaf6clHsk43RdZzYtWQTjpvYAaXHNoXWqDiDq2R%2BGtDPOgndt67xphMxVNQZ8SWMPg8rtbczWyBMlQHsWy2kzqY6wBDhM1O3AYh9KDM5DMzkQQdNaPnmkSd7xrZ%2BkVI2W8GImm3k5l6Ie6fJ%2FolIwX9aT%2F538oC8WWB%2FEhUrUbaIXpJgDs3eBrAEh2MkKhKH%2FCBpzofaLSYanThY%2BP%2FvaQ7KPEBLLwrVA26ywIZcqhzDRcg1hqhlzfryVQzg6BaPqAQ0aa9CVx0jDd%2BqXBBjqkAaAdnlLouqSOVysHq%2FR6jtEkKG%2BjGamSwKIyKpfoj9Mox3Ef3qIr7fu6bOVoY6m8EMyniOChMZduMnI9CwimSdems7mG9tkoyd31LUOttwZPVSkXWGHIG4%2FhWM02oPNc4PNl1X2sau7abhvkGnpLBLsZPHTMwHMeA3YcYOxNaF1AgMNICt%2FX4XneNtz2r8L7iC6Zp%2BWw%2F%2BblZTmV9HpCydXKHonr&X-Amz-Signature=b2789c37c97269b00f1c616fb881baa3f772146c82a571095cd01b7c88dd1410&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FNCZ4J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzMoCYg9vMcIE7KUE0j5VaNO6cPaW5KZ3NhVLf93H5PwIhAIeSjk1tx4YGWzlE%2FcyQzFGTN8CHPSsRhE6luyyYRajPKv8DCHAQABoMNjM3NDIzMTgzODA1IgwVWSR2yQ7r9K2Gx68q3AOVCQFyDzmDCM3uID1rLZalOBvpdW9urz8HMjQP6jAfgLV%2Fr%2F%2Fx360wXX3Cyngl6qnmNum5zH9CE3s%2F2iGp5V3z86HMtjVh6MDvkzGVYFjxrj6DY57Em5PGZ8eqc5hJ9noziwM3p1Y2z72J3n8vv6padothEdBNEdsYrRXUixr%2FHkleXylQNafDa5SJEPNh%2FvDZPPdYI6U%2FQAjRr%2FNvkniAvxZxcV%2FdPxdoYTjs7N90MNzJBE9Eescs%2BdBhMfHfsLiPCYUel5%2FDNN5F2aaEG6JCWd6S%2Bft%2BsqwUWZuBAZvj89h6C2F16biYkW8tooavGs5xW4F6zAIvqpYj2V2SvwTjVFudDwARRY1A164IyoGv7CQz5lFaf6clHsk43RdZzYtWQTjpvYAaXHNoXWqDiDq2R%2BGtDPOgndt67xphMxVNQZ8SWMPg8rtbczWyBMlQHsWy2kzqY6wBDhM1O3AYh9KDM5DMzkQQdNaPnmkSd7xrZ%2BkVI2W8GImm3k5l6Ie6fJ%2FolIwX9aT%2F538oC8WWB%2FEhUrUbaIXpJgDs3eBrAEh2MkKhKH%2FCBpzofaLSYanThY%2BP%2FvaQ7KPEBLLwrVA26ywIZcqhzDRcg1hqhlzfryVQzg6BaPqAQ0aa9CVx0jDd%2BqXBBjqkAaAdnlLouqSOVysHq%2FR6jtEkKG%2BjGamSwKIyKpfoj9Mox3Ef3qIr7fu6bOVoY6m8EMyniOChMZduMnI9CwimSdems7mG9tkoyd31LUOttwZPVSkXWGHIG4%2FhWM02oPNc4PNl1X2sau7abhvkGnpLBLsZPHTMwHMeA3YcYOxNaF1AgMNICt%2FX4XneNtz2r8L7iC6Zp%2BWw%2F%2BblZTmV9HpCydXKHonr&X-Amz-Signature=3af6063a1eed09bbd4bdeefc4959aed3b24b13af8c58ad5d2fa8166427cd8980&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FNCZ4J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzMoCYg9vMcIE7KUE0j5VaNO6cPaW5KZ3NhVLf93H5PwIhAIeSjk1tx4YGWzlE%2FcyQzFGTN8CHPSsRhE6luyyYRajPKv8DCHAQABoMNjM3NDIzMTgzODA1IgwVWSR2yQ7r9K2Gx68q3AOVCQFyDzmDCM3uID1rLZalOBvpdW9urz8HMjQP6jAfgLV%2Fr%2F%2Fx360wXX3Cyngl6qnmNum5zH9CE3s%2F2iGp5V3z86HMtjVh6MDvkzGVYFjxrj6DY57Em5PGZ8eqc5hJ9noziwM3p1Y2z72J3n8vv6padothEdBNEdsYrRXUixr%2FHkleXylQNafDa5SJEPNh%2FvDZPPdYI6U%2FQAjRr%2FNvkniAvxZxcV%2FdPxdoYTjs7N90MNzJBE9Eescs%2BdBhMfHfsLiPCYUel5%2FDNN5F2aaEG6JCWd6S%2Bft%2BsqwUWZuBAZvj89h6C2F16biYkW8tooavGs5xW4F6zAIvqpYj2V2SvwTjVFudDwARRY1A164IyoGv7CQz5lFaf6clHsk43RdZzYtWQTjpvYAaXHNoXWqDiDq2R%2BGtDPOgndt67xphMxVNQZ8SWMPg8rtbczWyBMlQHsWy2kzqY6wBDhM1O3AYh9KDM5DMzkQQdNaPnmkSd7xrZ%2BkVI2W8GImm3k5l6Ie6fJ%2FolIwX9aT%2F538oC8WWB%2FEhUrUbaIXpJgDs3eBrAEh2MkKhKH%2FCBpzofaLSYanThY%2BP%2FvaQ7KPEBLLwrVA26ywIZcqhzDRcg1hqhlzfryVQzg6BaPqAQ0aa9CVx0jDd%2BqXBBjqkAaAdnlLouqSOVysHq%2FR6jtEkKG%2BjGamSwKIyKpfoj9Mox3Ef3qIr7fu6bOVoY6m8EMyniOChMZduMnI9CwimSdems7mG9tkoyd31LUOttwZPVSkXWGHIG4%2FhWM02oPNc4PNl1X2sau7abhvkGnpLBLsZPHTMwHMeA3YcYOxNaF1AgMNICt%2FX4XneNtz2r8L7iC6Zp%2BWw%2F%2BblZTmV9HpCydXKHonr&X-Amz-Signature=c65053f8a4e8914d24c38c2c34088a7f332c96a44d389a9f805e30f070f716e8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FNCZ4J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzMoCYg9vMcIE7KUE0j5VaNO6cPaW5KZ3NhVLf93H5PwIhAIeSjk1tx4YGWzlE%2FcyQzFGTN8CHPSsRhE6luyyYRajPKv8DCHAQABoMNjM3NDIzMTgzODA1IgwVWSR2yQ7r9K2Gx68q3AOVCQFyDzmDCM3uID1rLZalOBvpdW9urz8HMjQP6jAfgLV%2Fr%2F%2Fx360wXX3Cyngl6qnmNum5zH9CE3s%2F2iGp5V3z86HMtjVh6MDvkzGVYFjxrj6DY57Em5PGZ8eqc5hJ9noziwM3p1Y2z72J3n8vv6padothEdBNEdsYrRXUixr%2FHkleXylQNafDa5SJEPNh%2FvDZPPdYI6U%2FQAjRr%2FNvkniAvxZxcV%2FdPxdoYTjs7N90MNzJBE9Eescs%2BdBhMfHfsLiPCYUel5%2FDNN5F2aaEG6JCWd6S%2Bft%2BsqwUWZuBAZvj89h6C2F16biYkW8tooavGs5xW4F6zAIvqpYj2V2SvwTjVFudDwARRY1A164IyoGv7CQz5lFaf6clHsk43RdZzYtWQTjpvYAaXHNoXWqDiDq2R%2BGtDPOgndt67xphMxVNQZ8SWMPg8rtbczWyBMlQHsWy2kzqY6wBDhM1O3AYh9KDM5DMzkQQdNaPnmkSd7xrZ%2BkVI2W8GImm3k5l6Ie6fJ%2FolIwX9aT%2F538oC8WWB%2FEhUrUbaIXpJgDs3eBrAEh2MkKhKH%2FCBpzofaLSYanThY%2BP%2FvaQ7KPEBLLwrVA26ywIZcqhzDRcg1hqhlzfryVQzg6BaPqAQ0aa9CVx0jDd%2BqXBBjqkAaAdnlLouqSOVysHq%2FR6jtEkKG%2BjGamSwKIyKpfoj9Mox3Ef3qIr7fu6bOVoY6m8EMyniOChMZduMnI9CwimSdems7mG9tkoyd31LUOttwZPVSkXWGHIG4%2FhWM02oPNc4PNl1X2sau7abhvkGnpLBLsZPHTMwHMeA3YcYOxNaF1AgMNICt%2FX4XneNtz2r8L7iC6Zp%2BWw%2F%2BblZTmV9HpCydXKHonr&X-Amz-Signature=655b45bbf18d959ba30b1baf184603a3dd95adde6b6f189b5247fe4c7bdbe28a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FNCZ4J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzMoCYg9vMcIE7KUE0j5VaNO6cPaW5KZ3NhVLf93H5PwIhAIeSjk1tx4YGWzlE%2FcyQzFGTN8CHPSsRhE6luyyYRajPKv8DCHAQABoMNjM3NDIzMTgzODA1IgwVWSR2yQ7r9K2Gx68q3AOVCQFyDzmDCM3uID1rLZalOBvpdW9urz8HMjQP6jAfgLV%2Fr%2F%2Fx360wXX3Cyngl6qnmNum5zH9CE3s%2F2iGp5V3z86HMtjVh6MDvkzGVYFjxrj6DY57Em5PGZ8eqc5hJ9noziwM3p1Y2z72J3n8vv6padothEdBNEdsYrRXUixr%2FHkleXylQNafDa5SJEPNh%2FvDZPPdYI6U%2FQAjRr%2FNvkniAvxZxcV%2FdPxdoYTjs7N90MNzJBE9Eescs%2BdBhMfHfsLiPCYUel5%2FDNN5F2aaEG6JCWd6S%2Bft%2BsqwUWZuBAZvj89h6C2F16biYkW8tooavGs5xW4F6zAIvqpYj2V2SvwTjVFudDwARRY1A164IyoGv7CQz5lFaf6clHsk43RdZzYtWQTjpvYAaXHNoXWqDiDq2R%2BGtDPOgndt67xphMxVNQZ8SWMPg8rtbczWyBMlQHsWy2kzqY6wBDhM1O3AYh9KDM5DMzkQQdNaPnmkSd7xrZ%2BkVI2W8GImm3k5l6Ie6fJ%2FolIwX9aT%2F538oC8WWB%2FEhUrUbaIXpJgDs3eBrAEh2MkKhKH%2FCBpzofaLSYanThY%2BP%2FvaQ7KPEBLLwrVA26ywIZcqhzDRcg1hqhlzfryVQzg6BaPqAQ0aa9CVx0jDd%2BqXBBjqkAaAdnlLouqSOVysHq%2FR6jtEkKG%2BjGamSwKIyKpfoj9Mox3Ef3qIr7fu6bOVoY6m8EMyniOChMZduMnI9CwimSdems7mG9tkoyd31LUOttwZPVSkXWGHIG4%2FhWM02oPNc4PNl1X2sau7abhvkGnpLBLsZPHTMwHMeA3YcYOxNaF1AgMNICt%2FX4XneNtz2r8L7iC6Zp%2BWw%2F%2BblZTmV9HpCydXKHonr&X-Amz-Signature=f8afac6cc576861ca7df15d6f57fd39048431dcda08709cf1d4a786e3dd8f758&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FNCZ4J%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzMoCYg9vMcIE7KUE0j5VaNO6cPaW5KZ3NhVLf93H5PwIhAIeSjk1tx4YGWzlE%2FcyQzFGTN8CHPSsRhE6luyyYRajPKv8DCHAQABoMNjM3NDIzMTgzODA1IgwVWSR2yQ7r9K2Gx68q3AOVCQFyDzmDCM3uID1rLZalOBvpdW9urz8HMjQP6jAfgLV%2Fr%2F%2Fx360wXX3Cyngl6qnmNum5zH9CE3s%2F2iGp5V3z86HMtjVh6MDvkzGVYFjxrj6DY57Em5PGZ8eqc5hJ9noziwM3p1Y2z72J3n8vv6padothEdBNEdsYrRXUixr%2FHkleXylQNafDa5SJEPNh%2FvDZPPdYI6U%2FQAjRr%2FNvkniAvxZxcV%2FdPxdoYTjs7N90MNzJBE9Eescs%2BdBhMfHfsLiPCYUel5%2FDNN5F2aaEG6JCWd6S%2Bft%2BsqwUWZuBAZvj89h6C2F16biYkW8tooavGs5xW4F6zAIvqpYj2V2SvwTjVFudDwARRY1A164IyoGv7CQz5lFaf6clHsk43RdZzYtWQTjpvYAaXHNoXWqDiDq2R%2BGtDPOgndt67xphMxVNQZ8SWMPg8rtbczWyBMlQHsWy2kzqY6wBDhM1O3AYh9KDM5DMzkQQdNaPnmkSd7xrZ%2BkVI2W8GImm3k5l6Ie6fJ%2FolIwX9aT%2F538oC8WWB%2FEhUrUbaIXpJgDs3eBrAEh2MkKhKH%2FCBpzofaLSYanThY%2BP%2FvaQ7KPEBLLwrVA26ywIZcqhzDRcg1hqhlzfryVQzg6BaPqAQ0aa9CVx0jDd%2BqXBBjqkAaAdnlLouqSOVysHq%2FR6jtEkKG%2BjGamSwKIyKpfoj9Mox3Ef3qIr7fu6bOVoY6m8EMyniOChMZduMnI9CwimSdems7mG9tkoyd31LUOttwZPVSkXWGHIG4%2FhWM02oPNc4PNl1X2sau7abhvkGnpLBLsZPHTMwHMeA3YcYOxNaF1AgMNICt%2FX4XneNtz2r8L7iC6Zp%2BWw%2F%2BblZTmV9HpCydXKHonr&X-Amz-Signature=5712f4b191d995939525247d856e94c9de4fa6174e78c9e479a5c6db3dee77f4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
