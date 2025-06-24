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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQT5AIR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGX%2FZNVxtXae71Uu1Ud4HmxlY4R9jDNqmmkTaGhLEwxaAiAvnuxcSI9ABKrgxf%2Bt59ZTqQ4f6rnKHcBOZ52O4sQidir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMwhNzQk6g%2BGHkZMUtKtwDFKuT1UeXfVXvxAzlkPET3hIDtAb3Zvd53IP3QQc3%2FiunRv5AXa9zZHalLQnOTusH7%2BU7zKtaKzBKidr1N3QB2ILjKnpZWs2NPoN3MTiq9YlslkG%2FZSNtCcqiUb37CYMazSJhTo%2BGZbm9kpvZHcam1jt6DhrtazRnSsEDA%2BvbkH536nBy%2FEeGNsvH4PMHfafbAoH17PWfLv%2FmCU7yvsE95pSi%2F0OlIQNrDKhiYA3QN1lWdP0HPOFy%2BdBBnsLeQWSdrD9ORLxfJXW%2FaEw10mJJ1uMV0accyk9Old87LUbryZHjCTyTnMCpOveSLnwiDzJ%2BAfbdkC%2FIVa3xc3wWsxNhmJQjwIi59H5Q3SyCTv07QpNG30vssvkI9TczUUd5yxlkQxy9xHF3%2Fz1hNdQlTFQwakr5I%2FCCYMaJN%2BQSiCOkx6N84mNAXdwgcR2GO2vRtiOY3VtS%2FKlbTAost51kKt3HvMfXOOf%2Fk1L%2BvczBwvVZGx8qNGZazjht1odmYcYt1RGdAThsW6NAbPTGXcVuF0tP923XxxKZAKfW2u%2F8CWaM%2FGNCTRmlUi%2FHhHD0gOZRUkpgMXHYNhe%2F7obQR4q%2BgkBCe8nRLx52PDAObgM0BSofPPJXgK0Njr7L1vQGfecwztrowgY6pgFaLVBTp31y7vXIA%2Bhs%2F1j2gfn4yhFIESGrOb0hrC4uOvLzMuwDan7BNdtpRsogO1WquD8e4gtaWQuQi6k%2BEHSiT7VHOpS8T8V3QQEOU3hpsOAHKPKtejbt5d71zKL3iEU4jnRjvo%2BpzMRihaUz%2FdNy8aGFheb%2F49XtUo5ZksmJ5Y0sj6zRRjQAYVWQzrJ6gBB0z%2BGumVw8JxyRx6apMyE2wVxdhmhZ&X-Amz-Signature=eb25a389277601e89f86a0759fdc8bfdd73eefdbb6a453b697270c187b56a029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQT5AIR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGX%2FZNVxtXae71Uu1Ud4HmxlY4R9jDNqmmkTaGhLEwxaAiAvnuxcSI9ABKrgxf%2Bt59ZTqQ4f6rnKHcBOZ52O4sQidir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMwhNzQk6g%2BGHkZMUtKtwDFKuT1UeXfVXvxAzlkPET3hIDtAb3Zvd53IP3QQc3%2FiunRv5AXa9zZHalLQnOTusH7%2BU7zKtaKzBKidr1N3QB2ILjKnpZWs2NPoN3MTiq9YlslkG%2FZSNtCcqiUb37CYMazSJhTo%2BGZbm9kpvZHcam1jt6DhrtazRnSsEDA%2BvbkH536nBy%2FEeGNsvH4PMHfafbAoH17PWfLv%2FmCU7yvsE95pSi%2F0OlIQNrDKhiYA3QN1lWdP0HPOFy%2BdBBnsLeQWSdrD9ORLxfJXW%2FaEw10mJJ1uMV0accyk9Old87LUbryZHjCTyTnMCpOveSLnwiDzJ%2BAfbdkC%2FIVa3xc3wWsxNhmJQjwIi59H5Q3SyCTv07QpNG30vssvkI9TczUUd5yxlkQxy9xHF3%2Fz1hNdQlTFQwakr5I%2FCCYMaJN%2BQSiCOkx6N84mNAXdwgcR2GO2vRtiOY3VtS%2FKlbTAost51kKt3HvMfXOOf%2Fk1L%2BvczBwvVZGx8qNGZazjht1odmYcYt1RGdAThsW6NAbPTGXcVuF0tP923XxxKZAKfW2u%2F8CWaM%2FGNCTRmlUi%2FHhHD0gOZRUkpgMXHYNhe%2F7obQR4q%2BgkBCe8nRLx52PDAObgM0BSofPPJXgK0Njr7L1vQGfecwztrowgY6pgFaLVBTp31y7vXIA%2Bhs%2F1j2gfn4yhFIESGrOb0hrC4uOvLzMuwDan7BNdtpRsogO1WquD8e4gtaWQuQi6k%2BEHSiT7VHOpS8T8V3QQEOU3hpsOAHKPKtejbt5d71zKL3iEU4jnRjvo%2BpzMRihaUz%2FdNy8aGFheb%2F49XtUo5ZksmJ5Y0sj6zRRjQAYVWQzrJ6gBB0z%2BGumVw8JxyRx6apMyE2wVxdhmhZ&X-Amz-Signature=a842cee10f102aa1733ad2c0c7f7dbffd1c09f1d6270ddbc179c00c2b9b50787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQT5AIR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGX%2FZNVxtXae71Uu1Ud4HmxlY4R9jDNqmmkTaGhLEwxaAiAvnuxcSI9ABKrgxf%2Bt59ZTqQ4f6rnKHcBOZ52O4sQidir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMwhNzQk6g%2BGHkZMUtKtwDFKuT1UeXfVXvxAzlkPET3hIDtAb3Zvd53IP3QQc3%2FiunRv5AXa9zZHalLQnOTusH7%2BU7zKtaKzBKidr1N3QB2ILjKnpZWs2NPoN3MTiq9YlslkG%2FZSNtCcqiUb37CYMazSJhTo%2BGZbm9kpvZHcam1jt6DhrtazRnSsEDA%2BvbkH536nBy%2FEeGNsvH4PMHfafbAoH17PWfLv%2FmCU7yvsE95pSi%2F0OlIQNrDKhiYA3QN1lWdP0HPOFy%2BdBBnsLeQWSdrD9ORLxfJXW%2FaEw10mJJ1uMV0accyk9Old87LUbryZHjCTyTnMCpOveSLnwiDzJ%2BAfbdkC%2FIVa3xc3wWsxNhmJQjwIi59H5Q3SyCTv07QpNG30vssvkI9TczUUd5yxlkQxy9xHF3%2Fz1hNdQlTFQwakr5I%2FCCYMaJN%2BQSiCOkx6N84mNAXdwgcR2GO2vRtiOY3VtS%2FKlbTAost51kKt3HvMfXOOf%2Fk1L%2BvczBwvVZGx8qNGZazjht1odmYcYt1RGdAThsW6NAbPTGXcVuF0tP923XxxKZAKfW2u%2F8CWaM%2FGNCTRmlUi%2FHhHD0gOZRUkpgMXHYNhe%2F7obQR4q%2BgkBCe8nRLx52PDAObgM0BSofPPJXgK0Njr7L1vQGfecwztrowgY6pgFaLVBTp31y7vXIA%2Bhs%2F1j2gfn4yhFIESGrOb0hrC4uOvLzMuwDan7BNdtpRsogO1WquD8e4gtaWQuQi6k%2BEHSiT7VHOpS8T8V3QQEOU3hpsOAHKPKtejbt5d71zKL3iEU4jnRjvo%2BpzMRihaUz%2FdNy8aGFheb%2F49XtUo5ZksmJ5Y0sj6zRRjQAYVWQzrJ6gBB0z%2BGumVw8JxyRx6apMyE2wVxdhmhZ&X-Amz-Signature=f68f02ffe35247752752d2aa614151841460217fe4419a8f2c1bfa78ed88ed0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQT5AIR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGX%2FZNVxtXae71Uu1Ud4HmxlY4R9jDNqmmkTaGhLEwxaAiAvnuxcSI9ABKrgxf%2Bt59ZTqQ4f6rnKHcBOZ52O4sQidir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMwhNzQk6g%2BGHkZMUtKtwDFKuT1UeXfVXvxAzlkPET3hIDtAb3Zvd53IP3QQc3%2FiunRv5AXa9zZHalLQnOTusH7%2BU7zKtaKzBKidr1N3QB2ILjKnpZWs2NPoN3MTiq9YlslkG%2FZSNtCcqiUb37CYMazSJhTo%2BGZbm9kpvZHcam1jt6DhrtazRnSsEDA%2BvbkH536nBy%2FEeGNsvH4PMHfafbAoH17PWfLv%2FmCU7yvsE95pSi%2F0OlIQNrDKhiYA3QN1lWdP0HPOFy%2BdBBnsLeQWSdrD9ORLxfJXW%2FaEw10mJJ1uMV0accyk9Old87LUbryZHjCTyTnMCpOveSLnwiDzJ%2BAfbdkC%2FIVa3xc3wWsxNhmJQjwIi59H5Q3SyCTv07QpNG30vssvkI9TczUUd5yxlkQxy9xHF3%2Fz1hNdQlTFQwakr5I%2FCCYMaJN%2BQSiCOkx6N84mNAXdwgcR2GO2vRtiOY3VtS%2FKlbTAost51kKt3HvMfXOOf%2Fk1L%2BvczBwvVZGx8qNGZazjht1odmYcYt1RGdAThsW6NAbPTGXcVuF0tP923XxxKZAKfW2u%2F8CWaM%2FGNCTRmlUi%2FHhHD0gOZRUkpgMXHYNhe%2F7obQR4q%2BgkBCe8nRLx52PDAObgM0BSofPPJXgK0Njr7L1vQGfecwztrowgY6pgFaLVBTp31y7vXIA%2Bhs%2F1j2gfn4yhFIESGrOb0hrC4uOvLzMuwDan7BNdtpRsogO1WquD8e4gtaWQuQi6k%2BEHSiT7VHOpS8T8V3QQEOU3hpsOAHKPKtejbt5d71zKL3iEU4jnRjvo%2BpzMRihaUz%2FdNy8aGFheb%2F49XtUo5ZksmJ5Y0sj6zRRjQAYVWQzrJ6gBB0z%2BGumVw8JxyRx6apMyE2wVxdhmhZ&X-Amz-Signature=02b7ac50c5e301f629dc01a1186313a3997a0cf405ef0793aa06d26e95406d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQT5AIR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGX%2FZNVxtXae71Uu1Ud4HmxlY4R9jDNqmmkTaGhLEwxaAiAvnuxcSI9ABKrgxf%2Bt59ZTqQ4f6rnKHcBOZ52O4sQidir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMwhNzQk6g%2BGHkZMUtKtwDFKuT1UeXfVXvxAzlkPET3hIDtAb3Zvd53IP3QQc3%2FiunRv5AXa9zZHalLQnOTusH7%2BU7zKtaKzBKidr1N3QB2ILjKnpZWs2NPoN3MTiq9YlslkG%2FZSNtCcqiUb37CYMazSJhTo%2BGZbm9kpvZHcam1jt6DhrtazRnSsEDA%2BvbkH536nBy%2FEeGNsvH4PMHfafbAoH17PWfLv%2FmCU7yvsE95pSi%2F0OlIQNrDKhiYA3QN1lWdP0HPOFy%2BdBBnsLeQWSdrD9ORLxfJXW%2FaEw10mJJ1uMV0accyk9Old87LUbryZHjCTyTnMCpOveSLnwiDzJ%2BAfbdkC%2FIVa3xc3wWsxNhmJQjwIi59H5Q3SyCTv07QpNG30vssvkI9TczUUd5yxlkQxy9xHF3%2Fz1hNdQlTFQwakr5I%2FCCYMaJN%2BQSiCOkx6N84mNAXdwgcR2GO2vRtiOY3VtS%2FKlbTAost51kKt3HvMfXOOf%2Fk1L%2BvczBwvVZGx8qNGZazjht1odmYcYt1RGdAThsW6NAbPTGXcVuF0tP923XxxKZAKfW2u%2F8CWaM%2FGNCTRmlUi%2FHhHD0gOZRUkpgMXHYNhe%2F7obQR4q%2BgkBCe8nRLx52PDAObgM0BSofPPJXgK0Njr7L1vQGfecwztrowgY6pgFaLVBTp31y7vXIA%2Bhs%2F1j2gfn4yhFIESGrOb0hrC4uOvLzMuwDan7BNdtpRsogO1WquD8e4gtaWQuQi6k%2BEHSiT7VHOpS8T8V3QQEOU3hpsOAHKPKtejbt5d71zKL3iEU4jnRjvo%2BpzMRihaUz%2FdNy8aGFheb%2F49XtUo5ZksmJ5Y0sj6zRRjQAYVWQzrJ6gBB0z%2BGumVw8JxyRx6apMyE2wVxdhmhZ&X-Amz-Signature=35258ee3a1ec825ba1ddce0c176f26fa26722753a46af852903858d5a6b1a59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQT5AIR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGX%2FZNVxtXae71Uu1Ud4HmxlY4R9jDNqmmkTaGhLEwxaAiAvnuxcSI9ABKrgxf%2Bt59ZTqQ4f6rnKHcBOZ52O4sQidir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMwhNzQk6g%2BGHkZMUtKtwDFKuT1UeXfVXvxAzlkPET3hIDtAb3Zvd53IP3QQc3%2FiunRv5AXa9zZHalLQnOTusH7%2BU7zKtaKzBKidr1N3QB2ILjKnpZWs2NPoN3MTiq9YlslkG%2FZSNtCcqiUb37CYMazSJhTo%2BGZbm9kpvZHcam1jt6DhrtazRnSsEDA%2BvbkH536nBy%2FEeGNsvH4PMHfafbAoH17PWfLv%2FmCU7yvsE95pSi%2F0OlIQNrDKhiYA3QN1lWdP0HPOFy%2BdBBnsLeQWSdrD9ORLxfJXW%2FaEw10mJJ1uMV0accyk9Old87LUbryZHjCTyTnMCpOveSLnwiDzJ%2BAfbdkC%2FIVa3xc3wWsxNhmJQjwIi59H5Q3SyCTv07QpNG30vssvkI9TczUUd5yxlkQxy9xHF3%2Fz1hNdQlTFQwakr5I%2FCCYMaJN%2BQSiCOkx6N84mNAXdwgcR2GO2vRtiOY3VtS%2FKlbTAost51kKt3HvMfXOOf%2Fk1L%2BvczBwvVZGx8qNGZazjht1odmYcYt1RGdAThsW6NAbPTGXcVuF0tP923XxxKZAKfW2u%2F8CWaM%2FGNCTRmlUi%2FHhHD0gOZRUkpgMXHYNhe%2F7obQR4q%2BgkBCe8nRLx52PDAObgM0BSofPPJXgK0Njr7L1vQGfecwztrowgY6pgFaLVBTp31y7vXIA%2Bhs%2F1j2gfn4yhFIESGrOb0hrC4uOvLzMuwDan7BNdtpRsogO1WquD8e4gtaWQuQi6k%2BEHSiT7VHOpS8T8V3QQEOU3hpsOAHKPKtejbt5d71zKL3iEU4jnRjvo%2BpzMRihaUz%2FdNy8aGFheb%2F49XtUo5ZksmJ5Y0sj6zRRjQAYVWQzrJ6gBB0z%2BGumVw8JxyRx6apMyE2wVxdhmhZ&X-Amz-Signature=5b57e7676d7fedec83742a57e93e77ed6de079dfd444037f9c5651958eb5889c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQT5AIR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGX%2FZNVxtXae71Uu1Ud4HmxlY4R9jDNqmmkTaGhLEwxaAiAvnuxcSI9ABKrgxf%2Bt59ZTqQ4f6rnKHcBOZ52O4sQidir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMwhNzQk6g%2BGHkZMUtKtwDFKuT1UeXfVXvxAzlkPET3hIDtAb3Zvd53IP3QQc3%2FiunRv5AXa9zZHalLQnOTusH7%2BU7zKtaKzBKidr1N3QB2ILjKnpZWs2NPoN3MTiq9YlslkG%2FZSNtCcqiUb37CYMazSJhTo%2BGZbm9kpvZHcam1jt6DhrtazRnSsEDA%2BvbkH536nBy%2FEeGNsvH4PMHfafbAoH17PWfLv%2FmCU7yvsE95pSi%2F0OlIQNrDKhiYA3QN1lWdP0HPOFy%2BdBBnsLeQWSdrD9ORLxfJXW%2FaEw10mJJ1uMV0accyk9Old87LUbryZHjCTyTnMCpOveSLnwiDzJ%2BAfbdkC%2FIVa3xc3wWsxNhmJQjwIi59H5Q3SyCTv07QpNG30vssvkI9TczUUd5yxlkQxy9xHF3%2Fz1hNdQlTFQwakr5I%2FCCYMaJN%2BQSiCOkx6N84mNAXdwgcR2GO2vRtiOY3VtS%2FKlbTAost51kKt3HvMfXOOf%2Fk1L%2BvczBwvVZGx8qNGZazjht1odmYcYt1RGdAThsW6NAbPTGXcVuF0tP923XxxKZAKfW2u%2F8CWaM%2FGNCTRmlUi%2FHhHD0gOZRUkpgMXHYNhe%2F7obQR4q%2BgkBCe8nRLx52PDAObgM0BSofPPJXgK0Njr7L1vQGfecwztrowgY6pgFaLVBTp31y7vXIA%2Bhs%2F1j2gfn4yhFIESGrOb0hrC4uOvLzMuwDan7BNdtpRsogO1WquD8e4gtaWQuQi6k%2BEHSiT7VHOpS8T8V3QQEOU3hpsOAHKPKtejbt5d71zKL3iEU4jnRjvo%2BpzMRihaUz%2FdNy8aGFheb%2F49XtUo5ZksmJ5Y0sj6zRRjQAYVWQzrJ6gBB0z%2BGumVw8JxyRx6apMyE2wVxdhmhZ&X-Amz-Signature=17d2de735b7e7e2c2d24d020a1102265685c4977c9205fc9e706c34154712653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
