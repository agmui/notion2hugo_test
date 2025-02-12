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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZOJ2VQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNY0Obe%2FJW%2BevAhW%2FXlADzHSaRzYJyoD0cQsEHceuGOgIhANYuG7qjA8xk6Zjfk47Z9pKdDKVAnyaFy7xjdNbbHIe%2FKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznbfFiyqwjHdZUe28q3APmJZqAsrmz1icooV54DfWGffWt1n2028FSe1mxE2OF%2B%2BKRw%2Fcz%2Bf0TRgtMVRF6ai0D%2FqWtIUorCoTdMytRXQPNST9p1JS2OG2lVleVk%2BtvojR66o8ZHsV3DbXe9NDT3lU1R2Zbnq2hrnoOMg9g1H%2Bgky1tvIeOzb7ldOzGvQvSh9ZO6%2BQhC5jb9GR2JBjg7PhYnuVzxLM5g%2BYz76SUCbt32281EwmEf4k4g3%2FgJaazECfk7jWqHcZ1RKpn6M3JQ8hIpB%2FtIRWvGEHdx2QWPMP5tjLXuXfvfpz57LMNugqiwAgZYnVKIqSFEbYJatDHQfSLFCKoFbeKH3pJj4TDvAP%2Bup7vbq%2FqtEXRBMkYBVccNzV9JCBTO8liA1ctBExKLrPNrHVqJ4qURhpRJvMj1hEv3bSpOSoB%2BtSLKgiu8AjUQgVx8%2BMMZv%2BGcyfHaHeJgL2DEyH0Zib5RBnqEhiEFapcDZPrERnwerZCNOMrpL1H7IKy2Cfqx6l7RsBy0rBZ%2FYWjOTkTRv9%2BnNYuLWBQ218Ac8NGMKgEYldK8ukxCTj1TNwZrTQ70D0Qb%2FkHVSNMpwfyL8R%2BJMiNyvvTeXSHQDqH4UGo4jSHHVYzbF2R%2BxQqfq3FziYiXGAhLWVKwzCa87O9BjqkAXqZfeH8McXWGwHKCVX2mbiVhanO5B3r3Hb4AaJWCZfW%2Fc1nfgQHshxfUOBc%2FOgbwXm0imbDez6OV22i3KPCQLm6SmqlIXyKKFMheWxdER7pGIhGVVG38U2WVBjQ5ZIf7Z3mSOOoB%2FX40SMZcl%2BeDDlXVBztJh90AjmPPkw41O6TgOiZwdim%2FZ4rL4lbr%2F9mb4nzVeIsOX%2FddB8nLS2Ohoonfa3i&X-Amz-Signature=0409c2bce9c091d888d2aaa360904031a320c7965866ba1873fc4e88f395f5f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZOJ2VQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNY0Obe%2FJW%2BevAhW%2FXlADzHSaRzYJyoD0cQsEHceuGOgIhANYuG7qjA8xk6Zjfk47Z9pKdDKVAnyaFy7xjdNbbHIe%2FKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznbfFiyqwjHdZUe28q3APmJZqAsrmz1icooV54DfWGffWt1n2028FSe1mxE2OF%2B%2BKRw%2Fcz%2Bf0TRgtMVRF6ai0D%2FqWtIUorCoTdMytRXQPNST9p1JS2OG2lVleVk%2BtvojR66o8ZHsV3DbXe9NDT3lU1R2Zbnq2hrnoOMg9g1H%2Bgky1tvIeOzb7ldOzGvQvSh9ZO6%2BQhC5jb9GR2JBjg7PhYnuVzxLM5g%2BYz76SUCbt32281EwmEf4k4g3%2FgJaazECfk7jWqHcZ1RKpn6M3JQ8hIpB%2FtIRWvGEHdx2QWPMP5tjLXuXfvfpz57LMNugqiwAgZYnVKIqSFEbYJatDHQfSLFCKoFbeKH3pJj4TDvAP%2Bup7vbq%2FqtEXRBMkYBVccNzV9JCBTO8liA1ctBExKLrPNrHVqJ4qURhpRJvMj1hEv3bSpOSoB%2BtSLKgiu8AjUQgVx8%2BMMZv%2BGcyfHaHeJgL2DEyH0Zib5RBnqEhiEFapcDZPrERnwerZCNOMrpL1H7IKy2Cfqx6l7RsBy0rBZ%2FYWjOTkTRv9%2BnNYuLWBQ218Ac8NGMKgEYldK8ukxCTj1TNwZrTQ70D0Qb%2FkHVSNMpwfyL8R%2BJMiNyvvTeXSHQDqH4UGo4jSHHVYzbF2R%2BxQqfq3FziYiXGAhLWVKwzCa87O9BjqkAXqZfeH8McXWGwHKCVX2mbiVhanO5B3r3Hb4AaJWCZfW%2Fc1nfgQHshxfUOBc%2FOgbwXm0imbDez6OV22i3KPCQLm6SmqlIXyKKFMheWxdER7pGIhGVVG38U2WVBjQ5ZIf7Z3mSOOoB%2FX40SMZcl%2BeDDlXVBztJh90AjmPPkw41O6TgOiZwdim%2FZ4rL4lbr%2F9mb4nzVeIsOX%2FddB8nLS2Ohoonfa3i&X-Amz-Signature=3d62b85b2cd1da5b69f11cd239b9e8b6a0692f635c310d67182f007548197d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZOJ2VQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNY0Obe%2FJW%2BevAhW%2FXlADzHSaRzYJyoD0cQsEHceuGOgIhANYuG7qjA8xk6Zjfk47Z9pKdDKVAnyaFy7xjdNbbHIe%2FKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznbfFiyqwjHdZUe28q3APmJZqAsrmz1icooV54DfWGffWt1n2028FSe1mxE2OF%2B%2BKRw%2Fcz%2Bf0TRgtMVRF6ai0D%2FqWtIUorCoTdMytRXQPNST9p1JS2OG2lVleVk%2BtvojR66o8ZHsV3DbXe9NDT3lU1R2Zbnq2hrnoOMg9g1H%2Bgky1tvIeOzb7ldOzGvQvSh9ZO6%2BQhC5jb9GR2JBjg7PhYnuVzxLM5g%2BYz76SUCbt32281EwmEf4k4g3%2FgJaazECfk7jWqHcZ1RKpn6M3JQ8hIpB%2FtIRWvGEHdx2QWPMP5tjLXuXfvfpz57LMNugqiwAgZYnVKIqSFEbYJatDHQfSLFCKoFbeKH3pJj4TDvAP%2Bup7vbq%2FqtEXRBMkYBVccNzV9JCBTO8liA1ctBExKLrPNrHVqJ4qURhpRJvMj1hEv3bSpOSoB%2BtSLKgiu8AjUQgVx8%2BMMZv%2BGcyfHaHeJgL2DEyH0Zib5RBnqEhiEFapcDZPrERnwerZCNOMrpL1H7IKy2Cfqx6l7RsBy0rBZ%2FYWjOTkTRv9%2BnNYuLWBQ218Ac8NGMKgEYldK8ukxCTj1TNwZrTQ70D0Qb%2FkHVSNMpwfyL8R%2BJMiNyvvTeXSHQDqH4UGo4jSHHVYzbF2R%2BxQqfq3FziYiXGAhLWVKwzCa87O9BjqkAXqZfeH8McXWGwHKCVX2mbiVhanO5B3r3Hb4AaJWCZfW%2Fc1nfgQHshxfUOBc%2FOgbwXm0imbDez6OV22i3KPCQLm6SmqlIXyKKFMheWxdER7pGIhGVVG38U2WVBjQ5ZIf7Z3mSOOoB%2FX40SMZcl%2BeDDlXVBztJh90AjmPPkw41O6TgOiZwdim%2FZ4rL4lbr%2F9mb4nzVeIsOX%2FddB8nLS2Ohoonfa3i&X-Amz-Signature=4a5c1ee3f1d8e89ccc26fdc5fc23e2c30c7a60f0348ea40a37f747e72f08e3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZOJ2VQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNY0Obe%2FJW%2BevAhW%2FXlADzHSaRzYJyoD0cQsEHceuGOgIhANYuG7qjA8xk6Zjfk47Z9pKdDKVAnyaFy7xjdNbbHIe%2FKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznbfFiyqwjHdZUe28q3APmJZqAsrmz1icooV54DfWGffWt1n2028FSe1mxE2OF%2B%2BKRw%2Fcz%2Bf0TRgtMVRF6ai0D%2FqWtIUorCoTdMytRXQPNST9p1JS2OG2lVleVk%2BtvojR66o8ZHsV3DbXe9NDT3lU1R2Zbnq2hrnoOMg9g1H%2Bgky1tvIeOzb7ldOzGvQvSh9ZO6%2BQhC5jb9GR2JBjg7PhYnuVzxLM5g%2BYz76SUCbt32281EwmEf4k4g3%2FgJaazECfk7jWqHcZ1RKpn6M3JQ8hIpB%2FtIRWvGEHdx2QWPMP5tjLXuXfvfpz57LMNugqiwAgZYnVKIqSFEbYJatDHQfSLFCKoFbeKH3pJj4TDvAP%2Bup7vbq%2FqtEXRBMkYBVccNzV9JCBTO8liA1ctBExKLrPNrHVqJ4qURhpRJvMj1hEv3bSpOSoB%2BtSLKgiu8AjUQgVx8%2BMMZv%2BGcyfHaHeJgL2DEyH0Zib5RBnqEhiEFapcDZPrERnwerZCNOMrpL1H7IKy2Cfqx6l7RsBy0rBZ%2FYWjOTkTRv9%2BnNYuLWBQ218Ac8NGMKgEYldK8ukxCTj1TNwZrTQ70D0Qb%2FkHVSNMpwfyL8R%2BJMiNyvvTeXSHQDqH4UGo4jSHHVYzbF2R%2BxQqfq3FziYiXGAhLWVKwzCa87O9BjqkAXqZfeH8McXWGwHKCVX2mbiVhanO5B3r3Hb4AaJWCZfW%2Fc1nfgQHshxfUOBc%2FOgbwXm0imbDez6OV22i3KPCQLm6SmqlIXyKKFMheWxdER7pGIhGVVG38U2WVBjQ5ZIf7Z3mSOOoB%2FX40SMZcl%2BeDDlXVBztJh90AjmPPkw41O6TgOiZwdim%2FZ4rL4lbr%2F9mb4nzVeIsOX%2FddB8nLS2Ohoonfa3i&X-Amz-Signature=4295df3e91518ab04db2909554ec269090c44669edd56efaf124c8f73962e8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZOJ2VQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNY0Obe%2FJW%2BevAhW%2FXlADzHSaRzYJyoD0cQsEHceuGOgIhANYuG7qjA8xk6Zjfk47Z9pKdDKVAnyaFy7xjdNbbHIe%2FKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznbfFiyqwjHdZUe28q3APmJZqAsrmz1icooV54DfWGffWt1n2028FSe1mxE2OF%2B%2BKRw%2Fcz%2Bf0TRgtMVRF6ai0D%2FqWtIUorCoTdMytRXQPNST9p1JS2OG2lVleVk%2BtvojR66o8ZHsV3DbXe9NDT3lU1R2Zbnq2hrnoOMg9g1H%2Bgky1tvIeOzb7ldOzGvQvSh9ZO6%2BQhC5jb9GR2JBjg7PhYnuVzxLM5g%2BYz76SUCbt32281EwmEf4k4g3%2FgJaazECfk7jWqHcZ1RKpn6M3JQ8hIpB%2FtIRWvGEHdx2QWPMP5tjLXuXfvfpz57LMNugqiwAgZYnVKIqSFEbYJatDHQfSLFCKoFbeKH3pJj4TDvAP%2Bup7vbq%2FqtEXRBMkYBVccNzV9JCBTO8liA1ctBExKLrPNrHVqJ4qURhpRJvMj1hEv3bSpOSoB%2BtSLKgiu8AjUQgVx8%2BMMZv%2BGcyfHaHeJgL2DEyH0Zib5RBnqEhiEFapcDZPrERnwerZCNOMrpL1H7IKy2Cfqx6l7RsBy0rBZ%2FYWjOTkTRv9%2BnNYuLWBQ218Ac8NGMKgEYldK8ukxCTj1TNwZrTQ70D0Qb%2FkHVSNMpwfyL8R%2BJMiNyvvTeXSHQDqH4UGo4jSHHVYzbF2R%2BxQqfq3FziYiXGAhLWVKwzCa87O9BjqkAXqZfeH8McXWGwHKCVX2mbiVhanO5B3r3Hb4AaJWCZfW%2Fc1nfgQHshxfUOBc%2FOgbwXm0imbDez6OV22i3KPCQLm6SmqlIXyKKFMheWxdER7pGIhGVVG38U2WVBjQ5ZIf7Z3mSOOoB%2FX40SMZcl%2BeDDlXVBztJh90AjmPPkw41O6TgOiZwdim%2FZ4rL4lbr%2F9mb4nzVeIsOX%2FddB8nLS2Ohoonfa3i&X-Amz-Signature=773122d9afc8a61685e51535ab65716f2ab9714b8ae13f2738848f54b7688d5e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZOJ2VQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNY0Obe%2FJW%2BevAhW%2FXlADzHSaRzYJyoD0cQsEHceuGOgIhANYuG7qjA8xk6Zjfk47Z9pKdDKVAnyaFy7xjdNbbHIe%2FKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznbfFiyqwjHdZUe28q3APmJZqAsrmz1icooV54DfWGffWt1n2028FSe1mxE2OF%2B%2BKRw%2Fcz%2Bf0TRgtMVRF6ai0D%2FqWtIUorCoTdMytRXQPNST9p1JS2OG2lVleVk%2BtvojR66o8ZHsV3DbXe9NDT3lU1R2Zbnq2hrnoOMg9g1H%2Bgky1tvIeOzb7ldOzGvQvSh9ZO6%2BQhC5jb9GR2JBjg7PhYnuVzxLM5g%2BYz76SUCbt32281EwmEf4k4g3%2FgJaazECfk7jWqHcZ1RKpn6M3JQ8hIpB%2FtIRWvGEHdx2QWPMP5tjLXuXfvfpz57LMNugqiwAgZYnVKIqSFEbYJatDHQfSLFCKoFbeKH3pJj4TDvAP%2Bup7vbq%2FqtEXRBMkYBVccNzV9JCBTO8liA1ctBExKLrPNrHVqJ4qURhpRJvMj1hEv3bSpOSoB%2BtSLKgiu8AjUQgVx8%2BMMZv%2BGcyfHaHeJgL2DEyH0Zib5RBnqEhiEFapcDZPrERnwerZCNOMrpL1H7IKy2Cfqx6l7RsBy0rBZ%2FYWjOTkTRv9%2BnNYuLWBQ218Ac8NGMKgEYldK8ukxCTj1TNwZrTQ70D0Qb%2FkHVSNMpwfyL8R%2BJMiNyvvTeXSHQDqH4UGo4jSHHVYzbF2R%2BxQqfq3FziYiXGAhLWVKwzCa87O9BjqkAXqZfeH8McXWGwHKCVX2mbiVhanO5B3r3Hb4AaJWCZfW%2Fc1nfgQHshxfUOBc%2FOgbwXm0imbDez6OV22i3KPCQLm6SmqlIXyKKFMheWxdER7pGIhGVVG38U2WVBjQ5ZIf7Z3mSOOoB%2FX40SMZcl%2BeDDlXVBztJh90AjmPPkw41O6TgOiZwdim%2FZ4rL4lbr%2F9mb4nzVeIsOX%2FddB8nLS2Ohoonfa3i&X-Amz-Signature=2088618a53eaeadb0cad31e925c1a5f81026389f8fb47c0d34ef835c4d324c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZOJ2VQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNY0Obe%2FJW%2BevAhW%2FXlADzHSaRzYJyoD0cQsEHceuGOgIhANYuG7qjA8xk6Zjfk47Z9pKdDKVAnyaFy7xjdNbbHIe%2FKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgznbfFiyqwjHdZUe28q3APmJZqAsrmz1icooV54DfWGffWt1n2028FSe1mxE2OF%2B%2BKRw%2Fcz%2Bf0TRgtMVRF6ai0D%2FqWtIUorCoTdMytRXQPNST9p1JS2OG2lVleVk%2BtvojR66o8ZHsV3DbXe9NDT3lU1R2Zbnq2hrnoOMg9g1H%2Bgky1tvIeOzb7ldOzGvQvSh9ZO6%2BQhC5jb9GR2JBjg7PhYnuVzxLM5g%2BYz76SUCbt32281EwmEf4k4g3%2FgJaazECfk7jWqHcZ1RKpn6M3JQ8hIpB%2FtIRWvGEHdx2QWPMP5tjLXuXfvfpz57LMNugqiwAgZYnVKIqSFEbYJatDHQfSLFCKoFbeKH3pJj4TDvAP%2Bup7vbq%2FqtEXRBMkYBVccNzV9JCBTO8liA1ctBExKLrPNrHVqJ4qURhpRJvMj1hEv3bSpOSoB%2BtSLKgiu8AjUQgVx8%2BMMZv%2BGcyfHaHeJgL2DEyH0Zib5RBnqEhiEFapcDZPrERnwerZCNOMrpL1H7IKy2Cfqx6l7RsBy0rBZ%2FYWjOTkTRv9%2BnNYuLWBQ218Ac8NGMKgEYldK8ukxCTj1TNwZrTQ70D0Qb%2FkHVSNMpwfyL8R%2BJMiNyvvTeXSHQDqH4UGo4jSHHVYzbF2R%2BxQqfq3FziYiXGAhLWVKwzCa87O9BjqkAXqZfeH8McXWGwHKCVX2mbiVhanO5B3r3Hb4AaJWCZfW%2Fc1nfgQHshxfUOBc%2FOgbwXm0imbDez6OV22i3KPCQLm6SmqlIXyKKFMheWxdER7pGIhGVVG38U2WVBjQ5ZIf7Z3mSOOoB%2FX40SMZcl%2BeDDlXVBztJh90AjmPPkw41O6TgOiZwdim%2FZ4rL4lbr%2F9mb4nzVeIsOX%2FddB8nLS2Ohoonfa3i&X-Amz-Signature=b3e95cba2a834dc2a0bdcc4c75f9d5b39f2227ce446a130a61306a7ef5237c86&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
