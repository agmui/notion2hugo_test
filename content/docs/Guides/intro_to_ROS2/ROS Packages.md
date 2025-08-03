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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA67E3TO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsI5nDND5eDM03xManB3cuj7ngFjAH0Xq628nejVuT7AIgHQ7pcPlpJttX9vtL9IyI4ToNXfontQKPJGitWdEsEN4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLj%2BwbruTI3A9UiGASrcA5NRIY3VraO3Kg7mpWl0g4ncTT9J%2B0N5FHmwkYBy61BSLKwtVqFKg1dwfn9Xna69uJ6U1c8tZ2%2FB%2FlEyZhi7R8IuDTUN0B9jwOUdJKXCr4rwSY6QBqEYr5xVcuNh6il%2FX4S%2FkH8KQPo3Z8x9iB9%2FO%2Fd8nt0pVVRyWZehPGhMHzmCgiW6sq6%2Fqwa9ep%2FtpX0AthwYCst3jFXAKYPD8FEL61vPzRbGJsqvEeN1EzYRpODE5eg%2FcZ8ESzDJ7OaqhYqYpgpUaWBujd8G0l3J%2BCn0PD8lrSVK%2Fwcg7SZIPo5F%2FCuXehBSDO1d3abtC11qoLK6le1fZeGthIbig%2FjGV0P0TLlMem%2FJyFJ6iHa%2F9QlC9xJMCWs0FXhlzFdu9VxV0jraC3MDOh%2F44SzVwqYsPhXAeuFDcgIxREfhF4A0v5U9Yguu90hBejS9tqVQHa9VsQqdbeieFS4BS07ge9%2FC%2Ffx4eXSYb%2Bblxgn1rWAgK243Wjx0blNEygx%2F%2FqZpOYcpQGKlAh1y5mz%2BOvNi1pqh9Kk41QdqtvSju4gkcVHiqQdO4AuoD9wh7a72ty4y%2FT0njcDRJFAVXvmhMNVI1S66SYpXpBZ40xPeyRDv6s1C4gfw%2BovEmDHVoqJph1MtsfPYMPPRvcQGOqUB02dSvonsP3gGpsFucDWPUVooO4iEopy2i5sCOD4EN%2FgAuh3XxSZMg4U1fdFTsC%2BFSZo8bwbQoaa4NhMod2NH4vwwNVxANxhiUQRKfwlX6eQD9epshrjqJOlVi65iPtQu0Ess7ZbvtNEWS2OYJAp5IbQyB9SgENJ4NpNPr5OJ9kXXalIRdttLJEmWZFQ60ZLXVukMAudCnwqzIv6Pm3wvjXreRC81&X-Amz-Signature=259c47712f6927d820b39c7c59e7c90f5370e1df08c546ea4d33563635775d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA67E3TO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsI5nDND5eDM03xManB3cuj7ngFjAH0Xq628nejVuT7AIgHQ7pcPlpJttX9vtL9IyI4ToNXfontQKPJGitWdEsEN4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLj%2BwbruTI3A9UiGASrcA5NRIY3VraO3Kg7mpWl0g4ncTT9J%2B0N5FHmwkYBy61BSLKwtVqFKg1dwfn9Xna69uJ6U1c8tZ2%2FB%2FlEyZhi7R8IuDTUN0B9jwOUdJKXCr4rwSY6QBqEYr5xVcuNh6il%2FX4S%2FkH8KQPo3Z8x9iB9%2FO%2Fd8nt0pVVRyWZehPGhMHzmCgiW6sq6%2Fqwa9ep%2FtpX0AthwYCst3jFXAKYPD8FEL61vPzRbGJsqvEeN1EzYRpODE5eg%2FcZ8ESzDJ7OaqhYqYpgpUaWBujd8G0l3J%2BCn0PD8lrSVK%2Fwcg7SZIPo5F%2FCuXehBSDO1d3abtC11qoLK6le1fZeGthIbig%2FjGV0P0TLlMem%2FJyFJ6iHa%2F9QlC9xJMCWs0FXhlzFdu9VxV0jraC3MDOh%2F44SzVwqYsPhXAeuFDcgIxREfhF4A0v5U9Yguu90hBejS9tqVQHa9VsQqdbeieFS4BS07ge9%2FC%2Ffx4eXSYb%2Bblxgn1rWAgK243Wjx0blNEygx%2F%2FqZpOYcpQGKlAh1y5mz%2BOvNi1pqh9Kk41QdqtvSju4gkcVHiqQdO4AuoD9wh7a72ty4y%2FT0njcDRJFAVXvmhMNVI1S66SYpXpBZ40xPeyRDv6s1C4gfw%2BovEmDHVoqJph1MtsfPYMPPRvcQGOqUB02dSvonsP3gGpsFucDWPUVooO4iEopy2i5sCOD4EN%2FgAuh3XxSZMg4U1fdFTsC%2BFSZo8bwbQoaa4NhMod2NH4vwwNVxANxhiUQRKfwlX6eQD9epshrjqJOlVi65iPtQu0Ess7ZbvtNEWS2OYJAp5IbQyB9SgENJ4NpNPr5OJ9kXXalIRdttLJEmWZFQ60ZLXVukMAudCnwqzIv6Pm3wvjXreRC81&X-Amz-Signature=f37a120e856d40f39e1d95adafbbf7de4fcdf8e61d16cb6c3588e5c16bb6e729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA67E3TO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsI5nDND5eDM03xManB3cuj7ngFjAH0Xq628nejVuT7AIgHQ7pcPlpJttX9vtL9IyI4ToNXfontQKPJGitWdEsEN4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLj%2BwbruTI3A9UiGASrcA5NRIY3VraO3Kg7mpWl0g4ncTT9J%2B0N5FHmwkYBy61BSLKwtVqFKg1dwfn9Xna69uJ6U1c8tZ2%2FB%2FlEyZhi7R8IuDTUN0B9jwOUdJKXCr4rwSY6QBqEYr5xVcuNh6il%2FX4S%2FkH8KQPo3Z8x9iB9%2FO%2Fd8nt0pVVRyWZehPGhMHzmCgiW6sq6%2Fqwa9ep%2FtpX0AthwYCst3jFXAKYPD8FEL61vPzRbGJsqvEeN1EzYRpODE5eg%2FcZ8ESzDJ7OaqhYqYpgpUaWBujd8G0l3J%2BCn0PD8lrSVK%2Fwcg7SZIPo5F%2FCuXehBSDO1d3abtC11qoLK6le1fZeGthIbig%2FjGV0P0TLlMem%2FJyFJ6iHa%2F9QlC9xJMCWs0FXhlzFdu9VxV0jraC3MDOh%2F44SzVwqYsPhXAeuFDcgIxREfhF4A0v5U9Yguu90hBejS9tqVQHa9VsQqdbeieFS4BS07ge9%2FC%2Ffx4eXSYb%2Bblxgn1rWAgK243Wjx0blNEygx%2F%2FqZpOYcpQGKlAh1y5mz%2BOvNi1pqh9Kk41QdqtvSju4gkcVHiqQdO4AuoD9wh7a72ty4y%2FT0njcDRJFAVXvmhMNVI1S66SYpXpBZ40xPeyRDv6s1C4gfw%2BovEmDHVoqJph1MtsfPYMPPRvcQGOqUB02dSvonsP3gGpsFucDWPUVooO4iEopy2i5sCOD4EN%2FgAuh3XxSZMg4U1fdFTsC%2BFSZo8bwbQoaa4NhMod2NH4vwwNVxANxhiUQRKfwlX6eQD9epshrjqJOlVi65iPtQu0Ess7ZbvtNEWS2OYJAp5IbQyB9SgENJ4NpNPr5OJ9kXXalIRdttLJEmWZFQ60ZLXVukMAudCnwqzIv6Pm3wvjXreRC81&X-Amz-Signature=e32f3f1243fa43075135d92bc76e0e4e2f2af172ca10c4b82214a03a79b9e716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA67E3TO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsI5nDND5eDM03xManB3cuj7ngFjAH0Xq628nejVuT7AIgHQ7pcPlpJttX9vtL9IyI4ToNXfontQKPJGitWdEsEN4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLj%2BwbruTI3A9UiGASrcA5NRIY3VraO3Kg7mpWl0g4ncTT9J%2B0N5FHmwkYBy61BSLKwtVqFKg1dwfn9Xna69uJ6U1c8tZ2%2FB%2FlEyZhi7R8IuDTUN0B9jwOUdJKXCr4rwSY6QBqEYr5xVcuNh6il%2FX4S%2FkH8KQPo3Z8x9iB9%2FO%2Fd8nt0pVVRyWZehPGhMHzmCgiW6sq6%2Fqwa9ep%2FtpX0AthwYCst3jFXAKYPD8FEL61vPzRbGJsqvEeN1EzYRpODE5eg%2FcZ8ESzDJ7OaqhYqYpgpUaWBujd8G0l3J%2BCn0PD8lrSVK%2Fwcg7SZIPo5F%2FCuXehBSDO1d3abtC11qoLK6le1fZeGthIbig%2FjGV0P0TLlMem%2FJyFJ6iHa%2F9QlC9xJMCWs0FXhlzFdu9VxV0jraC3MDOh%2F44SzVwqYsPhXAeuFDcgIxREfhF4A0v5U9Yguu90hBejS9tqVQHa9VsQqdbeieFS4BS07ge9%2FC%2Ffx4eXSYb%2Bblxgn1rWAgK243Wjx0blNEygx%2F%2FqZpOYcpQGKlAh1y5mz%2BOvNi1pqh9Kk41QdqtvSju4gkcVHiqQdO4AuoD9wh7a72ty4y%2FT0njcDRJFAVXvmhMNVI1S66SYpXpBZ40xPeyRDv6s1C4gfw%2BovEmDHVoqJph1MtsfPYMPPRvcQGOqUB02dSvonsP3gGpsFucDWPUVooO4iEopy2i5sCOD4EN%2FgAuh3XxSZMg4U1fdFTsC%2BFSZo8bwbQoaa4NhMod2NH4vwwNVxANxhiUQRKfwlX6eQD9epshrjqJOlVi65iPtQu0Ess7ZbvtNEWS2OYJAp5IbQyB9SgENJ4NpNPr5OJ9kXXalIRdttLJEmWZFQ60ZLXVukMAudCnwqzIv6Pm3wvjXreRC81&X-Amz-Signature=3e1e71569ca5a597729178d2887cd33779d136825e4dc4573642dac69e4e76b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA67E3TO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsI5nDND5eDM03xManB3cuj7ngFjAH0Xq628nejVuT7AIgHQ7pcPlpJttX9vtL9IyI4ToNXfontQKPJGitWdEsEN4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLj%2BwbruTI3A9UiGASrcA5NRIY3VraO3Kg7mpWl0g4ncTT9J%2B0N5FHmwkYBy61BSLKwtVqFKg1dwfn9Xna69uJ6U1c8tZ2%2FB%2FlEyZhi7R8IuDTUN0B9jwOUdJKXCr4rwSY6QBqEYr5xVcuNh6il%2FX4S%2FkH8KQPo3Z8x9iB9%2FO%2Fd8nt0pVVRyWZehPGhMHzmCgiW6sq6%2Fqwa9ep%2FtpX0AthwYCst3jFXAKYPD8FEL61vPzRbGJsqvEeN1EzYRpODE5eg%2FcZ8ESzDJ7OaqhYqYpgpUaWBujd8G0l3J%2BCn0PD8lrSVK%2Fwcg7SZIPo5F%2FCuXehBSDO1d3abtC11qoLK6le1fZeGthIbig%2FjGV0P0TLlMem%2FJyFJ6iHa%2F9QlC9xJMCWs0FXhlzFdu9VxV0jraC3MDOh%2F44SzVwqYsPhXAeuFDcgIxREfhF4A0v5U9Yguu90hBejS9tqVQHa9VsQqdbeieFS4BS07ge9%2FC%2Ffx4eXSYb%2Bblxgn1rWAgK243Wjx0blNEygx%2F%2FqZpOYcpQGKlAh1y5mz%2BOvNi1pqh9Kk41QdqtvSju4gkcVHiqQdO4AuoD9wh7a72ty4y%2FT0njcDRJFAVXvmhMNVI1S66SYpXpBZ40xPeyRDv6s1C4gfw%2BovEmDHVoqJph1MtsfPYMPPRvcQGOqUB02dSvonsP3gGpsFucDWPUVooO4iEopy2i5sCOD4EN%2FgAuh3XxSZMg4U1fdFTsC%2BFSZo8bwbQoaa4NhMod2NH4vwwNVxANxhiUQRKfwlX6eQD9epshrjqJOlVi65iPtQu0Ess7ZbvtNEWS2OYJAp5IbQyB9SgENJ4NpNPr5OJ9kXXalIRdttLJEmWZFQ60ZLXVukMAudCnwqzIv6Pm3wvjXreRC81&X-Amz-Signature=dd233bbdc09c7ab326fae440c5b924be1c03384a528762bd79a792028b0819f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA67E3TO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsI5nDND5eDM03xManB3cuj7ngFjAH0Xq628nejVuT7AIgHQ7pcPlpJttX9vtL9IyI4ToNXfontQKPJGitWdEsEN4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLj%2BwbruTI3A9UiGASrcA5NRIY3VraO3Kg7mpWl0g4ncTT9J%2B0N5FHmwkYBy61BSLKwtVqFKg1dwfn9Xna69uJ6U1c8tZ2%2FB%2FlEyZhi7R8IuDTUN0B9jwOUdJKXCr4rwSY6QBqEYr5xVcuNh6il%2FX4S%2FkH8KQPo3Z8x9iB9%2FO%2Fd8nt0pVVRyWZehPGhMHzmCgiW6sq6%2Fqwa9ep%2FtpX0AthwYCst3jFXAKYPD8FEL61vPzRbGJsqvEeN1EzYRpODE5eg%2FcZ8ESzDJ7OaqhYqYpgpUaWBujd8G0l3J%2BCn0PD8lrSVK%2Fwcg7SZIPo5F%2FCuXehBSDO1d3abtC11qoLK6le1fZeGthIbig%2FjGV0P0TLlMem%2FJyFJ6iHa%2F9QlC9xJMCWs0FXhlzFdu9VxV0jraC3MDOh%2F44SzVwqYsPhXAeuFDcgIxREfhF4A0v5U9Yguu90hBejS9tqVQHa9VsQqdbeieFS4BS07ge9%2FC%2Ffx4eXSYb%2Bblxgn1rWAgK243Wjx0blNEygx%2F%2FqZpOYcpQGKlAh1y5mz%2BOvNi1pqh9Kk41QdqtvSju4gkcVHiqQdO4AuoD9wh7a72ty4y%2FT0njcDRJFAVXvmhMNVI1S66SYpXpBZ40xPeyRDv6s1C4gfw%2BovEmDHVoqJph1MtsfPYMPPRvcQGOqUB02dSvonsP3gGpsFucDWPUVooO4iEopy2i5sCOD4EN%2FgAuh3XxSZMg4U1fdFTsC%2BFSZo8bwbQoaa4NhMod2NH4vwwNVxANxhiUQRKfwlX6eQD9epshrjqJOlVi65iPtQu0Ess7ZbvtNEWS2OYJAp5IbQyB9SgENJ4NpNPr5OJ9kXXalIRdttLJEmWZFQ60ZLXVukMAudCnwqzIv6Pm3wvjXreRC81&X-Amz-Signature=c608905f617ec1346c3933bd6190d494098e1dd5f2815e5082ad2354cd5c71e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA67E3TO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsI5nDND5eDM03xManB3cuj7ngFjAH0Xq628nejVuT7AIgHQ7pcPlpJttX9vtL9IyI4ToNXfontQKPJGitWdEsEN4q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLj%2BwbruTI3A9UiGASrcA5NRIY3VraO3Kg7mpWl0g4ncTT9J%2B0N5FHmwkYBy61BSLKwtVqFKg1dwfn9Xna69uJ6U1c8tZ2%2FB%2FlEyZhi7R8IuDTUN0B9jwOUdJKXCr4rwSY6QBqEYr5xVcuNh6il%2FX4S%2FkH8KQPo3Z8x9iB9%2FO%2Fd8nt0pVVRyWZehPGhMHzmCgiW6sq6%2Fqwa9ep%2FtpX0AthwYCst3jFXAKYPD8FEL61vPzRbGJsqvEeN1EzYRpODE5eg%2FcZ8ESzDJ7OaqhYqYpgpUaWBujd8G0l3J%2BCn0PD8lrSVK%2Fwcg7SZIPo5F%2FCuXehBSDO1d3abtC11qoLK6le1fZeGthIbig%2FjGV0P0TLlMem%2FJyFJ6iHa%2F9QlC9xJMCWs0FXhlzFdu9VxV0jraC3MDOh%2F44SzVwqYsPhXAeuFDcgIxREfhF4A0v5U9Yguu90hBejS9tqVQHa9VsQqdbeieFS4BS07ge9%2FC%2Ffx4eXSYb%2Bblxgn1rWAgK243Wjx0blNEygx%2F%2FqZpOYcpQGKlAh1y5mz%2BOvNi1pqh9Kk41QdqtvSju4gkcVHiqQdO4AuoD9wh7a72ty4y%2FT0njcDRJFAVXvmhMNVI1S66SYpXpBZ40xPeyRDv6s1C4gfw%2BovEmDHVoqJph1MtsfPYMPPRvcQGOqUB02dSvonsP3gGpsFucDWPUVooO4iEopy2i5sCOD4EN%2FgAuh3XxSZMg4U1fdFTsC%2BFSZo8bwbQoaa4NhMod2NH4vwwNVxANxhiUQRKfwlX6eQD9epshrjqJOlVi65iPtQu0Ess7ZbvtNEWS2OYJAp5IbQyB9SgENJ4NpNPr5OJ9kXXalIRdttLJEmWZFQ60ZLXVukMAudCnwqzIv6Pm3wvjXreRC81&X-Amz-Signature=96031e7cb12ee3e63f0cd5af5007603efe75414364d0faf3ca30db3f635b91f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
