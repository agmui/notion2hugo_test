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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMZ76T7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaqpP%2Ble3%2FhhpMwJWtUmRoSHetkJQXlG6u5PYjmDYZjQIgfs2LgH8aDP1EDHYWKiW9p0ZcYSlVadU1HWjUimUU4Wsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCxrNXK%2BLGM2cXqOiCrcAw6uyP9yUmu7b11DaM%2FP%2BGAYgV8mBIChG0a0Gu3N026hCL2P%2FePIooZFsGxGqGspWkUqlTc%2BegKWamIKtWkdsXo8sOtrmNPxW5Rn2U6EV4fO%2FYLOv8PUNlH%2Brqs0JjwYUYepyJUNnaJWj%2Fr25sZn0Y6XCsKtBAhSQhs5riUa10pnZ2f731RvD1DUUSwYFiIK5mP8rkvNSTOnkvSLyg0OmmuwwRRcRsCNxySydesqFXNLZbsonJSge1pTFoJmYHkOhE5sTfq71USVpqR2YVKchvRqz11W0zAygRCyfKv%2FpBAFoY7vV7%2BAq1%2F0ilzGk557%2FW4E8C0h4AAqAlSkuYJGHJiTOg9S74eB%2B7nBAy06EHpEzzMhmtHTiFVBq%2BEN%2F6PEbYKJETymJFgKqHjMK8Ns8dphF%2BXgi06JZOk0ufJsAx6QzWnJL3HHa2FTBnRDaLynQjG7Iw2HRCd6CHjtny4NeXlC88MF4vWOKKmxUr58dpm0qNWJlP%2By7lqKdAvfNDovN8bswKq06FSH25JTiyFWHZe3ZTLYGYkwRUn7MQ4RfSNZok65%2BDkbmge2LKPvR9mtgMnlLlaYe5jbXwrjINr2iMolKnlMuhnxl7xLr7MuLdCvC%2B98syvTzKyyxYO4MMvo3cMGOqUBiUkOfxokRHJOqlKZvG4GrOCxq8kJYjtPv6zHR%2BOSUfQgmkU7VcyGzCmiT%2BF9AmP3Gk5xDS1KskirwbuD2RhiaJDAijZP%2Fpzs3oS0%2FZbN7tMl3BGFf5dQCnRFVmGQ5AHicYvZIVjekxfdr8xzjWkK5t%2F%2BFU0LYjgVa2ztofodYa6ej5MpMpvENhVGkN6Aih%2BYtx9w38%2F7hzb4plrC8Mg8cR8cjRpw&X-Amz-Signature=d4a1717d466b3794966631b7d2593acbc5c80ff713cfd6f21bf229156b9d06aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMZ76T7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaqpP%2Ble3%2FhhpMwJWtUmRoSHetkJQXlG6u5PYjmDYZjQIgfs2LgH8aDP1EDHYWKiW9p0ZcYSlVadU1HWjUimUU4Wsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCxrNXK%2BLGM2cXqOiCrcAw6uyP9yUmu7b11DaM%2FP%2BGAYgV8mBIChG0a0Gu3N026hCL2P%2FePIooZFsGxGqGspWkUqlTc%2BegKWamIKtWkdsXo8sOtrmNPxW5Rn2U6EV4fO%2FYLOv8PUNlH%2Brqs0JjwYUYepyJUNnaJWj%2Fr25sZn0Y6XCsKtBAhSQhs5riUa10pnZ2f731RvD1DUUSwYFiIK5mP8rkvNSTOnkvSLyg0OmmuwwRRcRsCNxySydesqFXNLZbsonJSge1pTFoJmYHkOhE5sTfq71USVpqR2YVKchvRqz11W0zAygRCyfKv%2FpBAFoY7vV7%2BAq1%2F0ilzGk557%2FW4E8C0h4AAqAlSkuYJGHJiTOg9S74eB%2B7nBAy06EHpEzzMhmtHTiFVBq%2BEN%2F6PEbYKJETymJFgKqHjMK8Ns8dphF%2BXgi06JZOk0ufJsAx6QzWnJL3HHa2FTBnRDaLynQjG7Iw2HRCd6CHjtny4NeXlC88MF4vWOKKmxUr58dpm0qNWJlP%2By7lqKdAvfNDovN8bswKq06FSH25JTiyFWHZe3ZTLYGYkwRUn7MQ4RfSNZok65%2BDkbmge2LKPvR9mtgMnlLlaYe5jbXwrjINr2iMolKnlMuhnxl7xLr7MuLdCvC%2B98syvTzKyyxYO4MMvo3cMGOqUBiUkOfxokRHJOqlKZvG4GrOCxq8kJYjtPv6zHR%2BOSUfQgmkU7VcyGzCmiT%2BF9AmP3Gk5xDS1KskirwbuD2RhiaJDAijZP%2Fpzs3oS0%2FZbN7tMl3BGFf5dQCnRFVmGQ5AHicYvZIVjekxfdr8xzjWkK5t%2F%2BFU0LYjgVa2ztofodYa6ej5MpMpvENhVGkN6Aih%2BYtx9w38%2F7hzb4plrC8Mg8cR8cjRpw&X-Amz-Signature=7c4195b825a9e6bcf219e1726a52f361e9138b17350d111355596a4feab73170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMZ76T7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaqpP%2Ble3%2FhhpMwJWtUmRoSHetkJQXlG6u5PYjmDYZjQIgfs2LgH8aDP1EDHYWKiW9p0ZcYSlVadU1HWjUimUU4Wsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCxrNXK%2BLGM2cXqOiCrcAw6uyP9yUmu7b11DaM%2FP%2BGAYgV8mBIChG0a0Gu3N026hCL2P%2FePIooZFsGxGqGspWkUqlTc%2BegKWamIKtWkdsXo8sOtrmNPxW5Rn2U6EV4fO%2FYLOv8PUNlH%2Brqs0JjwYUYepyJUNnaJWj%2Fr25sZn0Y6XCsKtBAhSQhs5riUa10pnZ2f731RvD1DUUSwYFiIK5mP8rkvNSTOnkvSLyg0OmmuwwRRcRsCNxySydesqFXNLZbsonJSge1pTFoJmYHkOhE5sTfq71USVpqR2YVKchvRqz11W0zAygRCyfKv%2FpBAFoY7vV7%2BAq1%2F0ilzGk557%2FW4E8C0h4AAqAlSkuYJGHJiTOg9S74eB%2B7nBAy06EHpEzzMhmtHTiFVBq%2BEN%2F6PEbYKJETymJFgKqHjMK8Ns8dphF%2BXgi06JZOk0ufJsAx6QzWnJL3HHa2FTBnRDaLynQjG7Iw2HRCd6CHjtny4NeXlC88MF4vWOKKmxUr58dpm0qNWJlP%2By7lqKdAvfNDovN8bswKq06FSH25JTiyFWHZe3ZTLYGYkwRUn7MQ4RfSNZok65%2BDkbmge2LKPvR9mtgMnlLlaYe5jbXwrjINr2iMolKnlMuhnxl7xLr7MuLdCvC%2B98syvTzKyyxYO4MMvo3cMGOqUBiUkOfxokRHJOqlKZvG4GrOCxq8kJYjtPv6zHR%2BOSUfQgmkU7VcyGzCmiT%2BF9AmP3Gk5xDS1KskirwbuD2RhiaJDAijZP%2Fpzs3oS0%2FZbN7tMl3BGFf5dQCnRFVmGQ5AHicYvZIVjekxfdr8xzjWkK5t%2F%2BFU0LYjgVa2ztofodYa6ej5MpMpvENhVGkN6Aih%2BYtx9w38%2F7hzb4plrC8Mg8cR8cjRpw&X-Amz-Signature=b5599226da9a59f89df6bc9cb8eaafa3b75894e5e5332837bf2ea3f5a888cf40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMZ76T7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaqpP%2Ble3%2FhhpMwJWtUmRoSHetkJQXlG6u5PYjmDYZjQIgfs2LgH8aDP1EDHYWKiW9p0ZcYSlVadU1HWjUimUU4Wsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCxrNXK%2BLGM2cXqOiCrcAw6uyP9yUmu7b11DaM%2FP%2BGAYgV8mBIChG0a0Gu3N026hCL2P%2FePIooZFsGxGqGspWkUqlTc%2BegKWamIKtWkdsXo8sOtrmNPxW5Rn2U6EV4fO%2FYLOv8PUNlH%2Brqs0JjwYUYepyJUNnaJWj%2Fr25sZn0Y6XCsKtBAhSQhs5riUa10pnZ2f731RvD1DUUSwYFiIK5mP8rkvNSTOnkvSLyg0OmmuwwRRcRsCNxySydesqFXNLZbsonJSge1pTFoJmYHkOhE5sTfq71USVpqR2YVKchvRqz11W0zAygRCyfKv%2FpBAFoY7vV7%2BAq1%2F0ilzGk557%2FW4E8C0h4AAqAlSkuYJGHJiTOg9S74eB%2B7nBAy06EHpEzzMhmtHTiFVBq%2BEN%2F6PEbYKJETymJFgKqHjMK8Ns8dphF%2BXgi06JZOk0ufJsAx6QzWnJL3HHa2FTBnRDaLynQjG7Iw2HRCd6CHjtny4NeXlC88MF4vWOKKmxUr58dpm0qNWJlP%2By7lqKdAvfNDovN8bswKq06FSH25JTiyFWHZe3ZTLYGYkwRUn7MQ4RfSNZok65%2BDkbmge2LKPvR9mtgMnlLlaYe5jbXwrjINr2iMolKnlMuhnxl7xLr7MuLdCvC%2B98syvTzKyyxYO4MMvo3cMGOqUBiUkOfxokRHJOqlKZvG4GrOCxq8kJYjtPv6zHR%2BOSUfQgmkU7VcyGzCmiT%2BF9AmP3Gk5xDS1KskirwbuD2RhiaJDAijZP%2Fpzs3oS0%2FZbN7tMl3BGFf5dQCnRFVmGQ5AHicYvZIVjekxfdr8xzjWkK5t%2F%2BFU0LYjgVa2ztofodYa6ej5MpMpvENhVGkN6Aih%2BYtx9w38%2F7hzb4plrC8Mg8cR8cjRpw&X-Amz-Signature=6ab880edf1f3782f3e9b39ac976cdf15c409c693326fabe4fb903b125bf7d7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMZ76T7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaqpP%2Ble3%2FhhpMwJWtUmRoSHetkJQXlG6u5PYjmDYZjQIgfs2LgH8aDP1EDHYWKiW9p0ZcYSlVadU1HWjUimUU4Wsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCxrNXK%2BLGM2cXqOiCrcAw6uyP9yUmu7b11DaM%2FP%2BGAYgV8mBIChG0a0Gu3N026hCL2P%2FePIooZFsGxGqGspWkUqlTc%2BegKWamIKtWkdsXo8sOtrmNPxW5Rn2U6EV4fO%2FYLOv8PUNlH%2Brqs0JjwYUYepyJUNnaJWj%2Fr25sZn0Y6XCsKtBAhSQhs5riUa10pnZ2f731RvD1DUUSwYFiIK5mP8rkvNSTOnkvSLyg0OmmuwwRRcRsCNxySydesqFXNLZbsonJSge1pTFoJmYHkOhE5sTfq71USVpqR2YVKchvRqz11W0zAygRCyfKv%2FpBAFoY7vV7%2BAq1%2F0ilzGk557%2FW4E8C0h4AAqAlSkuYJGHJiTOg9S74eB%2B7nBAy06EHpEzzMhmtHTiFVBq%2BEN%2F6PEbYKJETymJFgKqHjMK8Ns8dphF%2BXgi06JZOk0ufJsAx6QzWnJL3HHa2FTBnRDaLynQjG7Iw2HRCd6CHjtny4NeXlC88MF4vWOKKmxUr58dpm0qNWJlP%2By7lqKdAvfNDovN8bswKq06FSH25JTiyFWHZe3ZTLYGYkwRUn7MQ4RfSNZok65%2BDkbmge2LKPvR9mtgMnlLlaYe5jbXwrjINr2iMolKnlMuhnxl7xLr7MuLdCvC%2B98syvTzKyyxYO4MMvo3cMGOqUBiUkOfxokRHJOqlKZvG4GrOCxq8kJYjtPv6zHR%2BOSUfQgmkU7VcyGzCmiT%2BF9AmP3Gk5xDS1KskirwbuD2RhiaJDAijZP%2Fpzs3oS0%2FZbN7tMl3BGFf5dQCnRFVmGQ5AHicYvZIVjekxfdr8xzjWkK5t%2F%2BFU0LYjgVa2ztofodYa6ej5MpMpvENhVGkN6Aih%2BYtx9w38%2F7hzb4plrC8Mg8cR8cjRpw&X-Amz-Signature=5235047c2c2799d77017e719973a7fc1e23f8190f8de87eb0b6253efcf73bee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMZ76T7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaqpP%2Ble3%2FhhpMwJWtUmRoSHetkJQXlG6u5PYjmDYZjQIgfs2LgH8aDP1EDHYWKiW9p0ZcYSlVadU1HWjUimUU4Wsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCxrNXK%2BLGM2cXqOiCrcAw6uyP9yUmu7b11DaM%2FP%2BGAYgV8mBIChG0a0Gu3N026hCL2P%2FePIooZFsGxGqGspWkUqlTc%2BegKWamIKtWkdsXo8sOtrmNPxW5Rn2U6EV4fO%2FYLOv8PUNlH%2Brqs0JjwYUYepyJUNnaJWj%2Fr25sZn0Y6XCsKtBAhSQhs5riUa10pnZ2f731RvD1DUUSwYFiIK5mP8rkvNSTOnkvSLyg0OmmuwwRRcRsCNxySydesqFXNLZbsonJSge1pTFoJmYHkOhE5sTfq71USVpqR2YVKchvRqz11W0zAygRCyfKv%2FpBAFoY7vV7%2BAq1%2F0ilzGk557%2FW4E8C0h4AAqAlSkuYJGHJiTOg9S74eB%2B7nBAy06EHpEzzMhmtHTiFVBq%2BEN%2F6PEbYKJETymJFgKqHjMK8Ns8dphF%2BXgi06JZOk0ufJsAx6QzWnJL3HHa2FTBnRDaLynQjG7Iw2HRCd6CHjtny4NeXlC88MF4vWOKKmxUr58dpm0qNWJlP%2By7lqKdAvfNDovN8bswKq06FSH25JTiyFWHZe3ZTLYGYkwRUn7MQ4RfSNZok65%2BDkbmge2LKPvR9mtgMnlLlaYe5jbXwrjINr2iMolKnlMuhnxl7xLr7MuLdCvC%2B98syvTzKyyxYO4MMvo3cMGOqUBiUkOfxokRHJOqlKZvG4GrOCxq8kJYjtPv6zHR%2BOSUfQgmkU7VcyGzCmiT%2BF9AmP3Gk5xDS1KskirwbuD2RhiaJDAijZP%2Fpzs3oS0%2FZbN7tMl3BGFf5dQCnRFVmGQ5AHicYvZIVjekxfdr8xzjWkK5t%2F%2BFU0LYjgVa2ztofodYa6ej5MpMpvENhVGkN6Aih%2BYtx9w38%2F7hzb4plrC8Mg8cR8cjRpw&X-Amz-Signature=965e01a0348d134b778c05bedb4b3c30626003a2b278fa6cf8f7bfed23d6828b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMZ76T7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDaqpP%2Ble3%2FhhpMwJWtUmRoSHetkJQXlG6u5PYjmDYZjQIgfs2LgH8aDP1EDHYWKiW9p0ZcYSlVadU1HWjUimUU4Wsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCxrNXK%2BLGM2cXqOiCrcAw6uyP9yUmu7b11DaM%2FP%2BGAYgV8mBIChG0a0Gu3N026hCL2P%2FePIooZFsGxGqGspWkUqlTc%2BegKWamIKtWkdsXo8sOtrmNPxW5Rn2U6EV4fO%2FYLOv8PUNlH%2Brqs0JjwYUYepyJUNnaJWj%2Fr25sZn0Y6XCsKtBAhSQhs5riUa10pnZ2f731RvD1DUUSwYFiIK5mP8rkvNSTOnkvSLyg0OmmuwwRRcRsCNxySydesqFXNLZbsonJSge1pTFoJmYHkOhE5sTfq71USVpqR2YVKchvRqz11W0zAygRCyfKv%2FpBAFoY7vV7%2BAq1%2F0ilzGk557%2FW4E8C0h4AAqAlSkuYJGHJiTOg9S74eB%2B7nBAy06EHpEzzMhmtHTiFVBq%2BEN%2F6PEbYKJETymJFgKqHjMK8Ns8dphF%2BXgi06JZOk0ufJsAx6QzWnJL3HHa2FTBnRDaLynQjG7Iw2HRCd6CHjtny4NeXlC88MF4vWOKKmxUr58dpm0qNWJlP%2By7lqKdAvfNDovN8bswKq06FSH25JTiyFWHZe3ZTLYGYkwRUn7MQ4RfSNZok65%2BDkbmge2LKPvR9mtgMnlLlaYe5jbXwrjINr2iMolKnlMuhnxl7xLr7MuLdCvC%2B98syvTzKyyxYO4MMvo3cMGOqUBiUkOfxokRHJOqlKZvG4GrOCxq8kJYjtPv6zHR%2BOSUfQgmkU7VcyGzCmiT%2BF9AmP3Gk5xDS1KskirwbuD2RhiaJDAijZP%2Fpzs3oS0%2FZbN7tMl3BGFf5dQCnRFVmGQ5AHicYvZIVjekxfdr8xzjWkK5t%2F%2BFU0LYjgVa2ztofodYa6ej5MpMpvENhVGkN6Aih%2BYtx9w38%2F7hzb4plrC8Mg8cR8cjRpw&X-Amz-Signature=95bb816762bd7b1ae42b2691c3bd1e5449408bf73b9c7ae295f82887e4491041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
