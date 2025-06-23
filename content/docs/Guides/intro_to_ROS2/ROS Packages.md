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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSBXLAA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAS0sUyQLsw%2FAsDBtLFcG%2FacXDfCCRcaLAxzYX%2FjZtSZAiEAz3%2FN64kIAyxj4uSI5rr1EX3Itg%2BscjXBNK2Uca56AgIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG4K%2Bf6FJdhkipGPwCrcA6r%2Fl1LZMJNWjCwADXBP%2BA5KSiGq733k3upIqFXoXLjeEWVkQB%2FL6XPefCTctmJkOokS%2FZfCd9PUzNg1R6x%2BL8YOzZCNrefOJvgqRAIGyHik9Ep5IaK4CzyEUr8MAszMIjffDgrIBBWuPB6rSPjJG9kNWJ1WODFNpLc6TxiIOLYqEJQ1ag6Q4B8SSKpXiKsoeiOVTbXbu4C3cPJZ5Hc46v%2BVgkYDA0AfQ%2FZywwyBPGfkevz4nLVk9482kYXE7m1Wl2P1fsN0T%2FJDPvW2jJifc8YwtirYYpNK7Oes4NRSIaX3wKC9%2FJC1EhG8JSTYykZWd1PGRma%2Bh%2B0E%2Flx7DZJyoxt0OySK%2Be0d2853UwxcRqiWi9oFIvl0d%2BiclZNRXkJPV9n8HJ8VdMbxQBEITMbz3vEhvdIoYMqcM8wNlhZTJnORxeBnS7wbb1dWNHM0J0RF2ZEjU1TVUPMeW0t2qu28Liqo5kkx4FrDJqEIqGBPDr8a3Afflghb9jFx4ERWMQrq89kSC5x1F6n5XeTOzEGaDM0OXFkWARISqtVh98J%2FxPH5qPCWi7ebZ567TQvvDfiA65lXLMy2N6IY89NslflIcWu216X%2Bfnx%2BpbN%2BeXGjHm4lc8XXuz14Abc1E9t9ML2I5sIGOqUBneGJG8bxWubVxxx9GCr15SEYDSMkEnC3awZqt9EQ%2FZ6CGV%2Bw7wB1VXucc%2BOOR7V0aR2etkpwZKYtLSsmXTCVhGVYwjC38Cz8vxDMNQHOFchK7lUCIXEDi4KaXSH9sLNht4FSXXfgy1JfKOdi6%2F5YCByUWplkedC1HTzIZGtrV8Q77uwQO8POyMuCKRBPERA9HPsNnge0SDSozn%2FR%2FWqBka%2BJAaWZ&X-Amz-Signature=65e9fae64651c708f89f7e6298f719fa336b69932f18f23c675c3485a12b8b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSBXLAA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAS0sUyQLsw%2FAsDBtLFcG%2FacXDfCCRcaLAxzYX%2FjZtSZAiEAz3%2FN64kIAyxj4uSI5rr1EX3Itg%2BscjXBNK2Uca56AgIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG4K%2Bf6FJdhkipGPwCrcA6r%2Fl1LZMJNWjCwADXBP%2BA5KSiGq733k3upIqFXoXLjeEWVkQB%2FL6XPefCTctmJkOokS%2FZfCd9PUzNg1R6x%2BL8YOzZCNrefOJvgqRAIGyHik9Ep5IaK4CzyEUr8MAszMIjffDgrIBBWuPB6rSPjJG9kNWJ1WODFNpLc6TxiIOLYqEJQ1ag6Q4B8SSKpXiKsoeiOVTbXbu4C3cPJZ5Hc46v%2BVgkYDA0AfQ%2FZywwyBPGfkevz4nLVk9482kYXE7m1Wl2P1fsN0T%2FJDPvW2jJifc8YwtirYYpNK7Oes4NRSIaX3wKC9%2FJC1EhG8JSTYykZWd1PGRma%2Bh%2B0E%2Flx7DZJyoxt0OySK%2Be0d2853UwxcRqiWi9oFIvl0d%2BiclZNRXkJPV9n8HJ8VdMbxQBEITMbz3vEhvdIoYMqcM8wNlhZTJnORxeBnS7wbb1dWNHM0J0RF2ZEjU1TVUPMeW0t2qu28Liqo5kkx4FrDJqEIqGBPDr8a3Afflghb9jFx4ERWMQrq89kSC5x1F6n5XeTOzEGaDM0OXFkWARISqtVh98J%2FxPH5qPCWi7ebZ567TQvvDfiA65lXLMy2N6IY89NslflIcWu216X%2Bfnx%2BpbN%2BeXGjHm4lc8XXuz14Abc1E9t9ML2I5sIGOqUBneGJG8bxWubVxxx9GCr15SEYDSMkEnC3awZqt9EQ%2FZ6CGV%2Bw7wB1VXucc%2BOOR7V0aR2etkpwZKYtLSsmXTCVhGVYwjC38Cz8vxDMNQHOFchK7lUCIXEDi4KaXSH9sLNht4FSXXfgy1JfKOdi6%2F5YCByUWplkedC1HTzIZGtrV8Q77uwQO8POyMuCKRBPERA9HPsNnge0SDSozn%2FR%2FWqBka%2BJAaWZ&X-Amz-Signature=1bb7c244f51348cb357204c1ce88144706efa4d8874f1df28201d696e3c1fd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSBXLAA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAS0sUyQLsw%2FAsDBtLFcG%2FacXDfCCRcaLAxzYX%2FjZtSZAiEAz3%2FN64kIAyxj4uSI5rr1EX3Itg%2BscjXBNK2Uca56AgIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG4K%2Bf6FJdhkipGPwCrcA6r%2Fl1LZMJNWjCwADXBP%2BA5KSiGq733k3upIqFXoXLjeEWVkQB%2FL6XPefCTctmJkOokS%2FZfCd9PUzNg1R6x%2BL8YOzZCNrefOJvgqRAIGyHik9Ep5IaK4CzyEUr8MAszMIjffDgrIBBWuPB6rSPjJG9kNWJ1WODFNpLc6TxiIOLYqEJQ1ag6Q4B8SSKpXiKsoeiOVTbXbu4C3cPJZ5Hc46v%2BVgkYDA0AfQ%2FZywwyBPGfkevz4nLVk9482kYXE7m1Wl2P1fsN0T%2FJDPvW2jJifc8YwtirYYpNK7Oes4NRSIaX3wKC9%2FJC1EhG8JSTYykZWd1PGRma%2Bh%2B0E%2Flx7DZJyoxt0OySK%2Be0d2853UwxcRqiWi9oFIvl0d%2BiclZNRXkJPV9n8HJ8VdMbxQBEITMbz3vEhvdIoYMqcM8wNlhZTJnORxeBnS7wbb1dWNHM0J0RF2ZEjU1TVUPMeW0t2qu28Liqo5kkx4FrDJqEIqGBPDr8a3Afflghb9jFx4ERWMQrq89kSC5x1F6n5XeTOzEGaDM0OXFkWARISqtVh98J%2FxPH5qPCWi7ebZ567TQvvDfiA65lXLMy2N6IY89NslflIcWu216X%2Bfnx%2BpbN%2BeXGjHm4lc8XXuz14Abc1E9t9ML2I5sIGOqUBneGJG8bxWubVxxx9GCr15SEYDSMkEnC3awZqt9EQ%2FZ6CGV%2Bw7wB1VXucc%2BOOR7V0aR2etkpwZKYtLSsmXTCVhGVYwjC38Cz8vxDMNQHOFchK7lUCIXEDi4KaXSH9sLNht4FSXXfgy1JfKOdi6%2F5YCByUWplkedC1HTzIZGtrV8Q77uwQO8POyMuCKRBPERA9HPsNnge0SDSozn%2FR%2FWqBka%2BJAaWZ&X-Amz-Signature=c9a39707ccb1c771880137bf715570478d75741f01233b9cb11801fefc7b6648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSBXLAA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAS0sUyQLsw%2FAsDBtLFcG%2FacXDfCCRcaLAxzYX%2FjZtSZAiEAz3%2FN64kIAyxj4uSI5rr1EX3Itg%2BscjXBNK2Uca56AgIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG4K%2Bf6FJdhkipGPwCrcA6r%2Fl1LZMJNWjCwADXBP%2BA5KSiGq733k3upIqFXoXLjeEWVkQB%2FL6XPefCTctmJkOokS%2FZfCd9PUzNg1R6x%2BL8YOzZCNrefOJvgqRAIGyHik9Ep5IaK4CzyEUr8MAszMIjffDgrIBBWuPB6rSPjJG9kNWJ1WODFNpLc6TxiIOLYqEJQ1ag6Q4B8SSKpXiKsoeiOVTbXbu4C3cPJZ5Hc46v%2BVgkYDA0AfQ%2FZywwyBPGfkevz4nLVk9482kYXE7m1Wl2P1fsN0T%2FJDPvW2jJifc8YwtirYYpNK7Oes4NRSIaX3wKC9%2FJC1EhG8JSTYykZWd1PGRma%2Bh%2B0E%2Flx7DZJyoxt0OySK%2Be0d2853UwxcRqiWi9oFIvl0d%2BiclZNRXkJPV9n8HJ8VdMbxQBEITMbz3vEhvdIoYMqcM8wNlhZTJnORxeBnS7wbb1dWNHM0J0RF2ZEjU1TVUPMeW0t2qu28Liqo5kkx4FrDJqEIqGBPDr8a3Afflghb9jFx4ERWMQrq89kSC5x1F6n5XeTOzEGaDM0OXFkWARISqtVh98J%2FxPH5qPCWi7ebZ567TQvvDfiA65lXLMy2N6IY89NslflIcWu216X%2Bfnx%2BpbN%2BeXGjHm4lc8XXuz14Abc1E9t9ML2I5sIGOqUBneGJG8bxWubVxxx9GCr15SEYDSMkEnC3awZqt9EQ%2FZ6CGV%2Bw7wB1VXucc%2BOOR7V0aR2etkpwZKYtLSsmXTCVhGVYwjC38Cz8vxDMNQHOFchK7lUCIXEDi4KaXSH9sLNht4FSXXfgy1JfKOdi6%2F5YCByUWplkedC1HTzIZGtrV8Q77uwQO8POyMuCKRBPERA9HPsNnge0SDSozn%2FR%2FWqBka%2BJAaWZ&X-Amz-Signature=d8099da2debbd8a92988399e58969edbdc7650cad78670fbf7695cc831c92d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSBXLAA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAS0sUyQLsw%2FAsDBtLFcG%2FacXDfCCRcaLAxzYX%2FjZtSZAiEAz3%2FN64kIAyxj4uSI5rr1EX3Itg%2BscjXBNK2Uca56AgIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG4K%2Bf6FJdhkipGPwCrcA6r%2Fl1LZMJNWjCwADXBP%2BA5KSiGq733k3upIqFXoXLjeEWVkQB%2FL6XPefCTctmJkOokS%2FZfCd9PUzNg1R6x%2BL8YOzZCNrefOJvgqRAIGyHik9Ep5IaK4CzyEUr8MAszMIjffDgrIBBWuPB6rSPjJG9kNWJ1WODFNpLc6TxiIOLYqEJQ1ag6Q4B8SSKpXiKsoeiOVTbXbu4C3cPJZ5Hc46v%2BVgkYDA0AfQ%2FZywwyBPGfkevz4nLVk9482kYXE7m1Wl2P1fsN0T%2FJDPvW2jJifc8YwtirYYpNK7Oes4NRSIaX3wKC9%2FJC1EhG8JSTYykZWd1PGRma%2Bh%2B0E%2Flx7DZJyoxt0OySK%2Be0d2853UwxcRqiWi9oFIvl0d%2BiclZNRXkJPV9n8HJ8VdMbxQBEITMbz3vEhvdIoYMqcM8wNlhZTJnORxeBnS7wbb1dWNHM0J0RF2ZEjU1TVUPMeW0t2qu28Liqo5kkx4FrDJqEIqGBPDr8a3Afflghb9jFx4ERWMQrq89kSC5x1F6n5XeTOzEGaDM0OXFkWARISqtVh98J%2FxPH5qPCWi7ebZ567TQvvDfiA65lXLMy2N6IY89NslflIcWu216X%2Bfnx%2BpbN%2BeXGjHm4lc8XXuz14Abc1E9t9ML2I5sIGOqUBneGJG8bxWubVxxx9GCr15SEYDSMkEnC3awZqt9EQ%2FZ6CGV%2Bw7wB1VXucc%2BOOR7V0aR2etkpwZKYtLSsmXTCVhGVYwjC38Cz8vxDMNQHOFchK7lUCIXEDi4KaXSH9sLNht4FSXXfgy1JfKOdi6%2F5YCByUWplkedC1HTzIZGtrV8Q77uwQO8POyMuCKRBPERA9HPsNnge0SDSozn%2FR%2FWqBka%2BJAaWZ&X-Amz-Signature=db42a891b9e4f37ee0e05d5bf03c673ebc55c54bda7378914a9a3351e09249ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSBXLAA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAS0sUyQLsw%2FAsDBtLFcG%2FacXDfCCRcaLAxzYX%2FjZtSZAiEAz3%2FN64kIAyxj4uSI5rr1EX3Itg%2BscjXBNK2Uca56AgIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG4K%2Bf6FJdhkipGPwCrcA6r%2Fl1LZMJNWjCwADXBP%2BA5KSiGq733k3upIqFXoXLjeEWVkQB%2FL6XPefCTctmJkOokS%2FZfCd9PUzNg1R6x%2BL8YOzZCNrefOJvgqRAIGyHik9Ep5IaK4CzyEUr8MAszMIjffDgrIBBWuPB6rSPjJG9kNWJ1WODFNpLc6TxiIOLYqEJQ1ag6Q4B8SSKpXiKsoeiOVTbXbu4C3cPJZ5Hc46v%2BVgkYDA0AfQ%2FZywwyBPGfkevz4nLVk9482kYXE7m1Wl2P1fsN0T%2FJDPvW2jJifc8YwtirYYpNK7Oes4NRSIaX3wKC9%2FJC1EhG8JSTYykZWd1PGRma%2Bh%2B0E%2Flx7DZJyoxt0OySK%2Be0d2853UwxcRqiWi9oFIvl0d%2BiclZNRXkJPV9n8HJ8VdMbxQBEITMbz3vEhvdIoYMqcM8wNlhZTJnORxeBnS7wbb1dWNHM0J0RF2ZEjU1TVUPMeW0t2qu28Liqo5kkx4FrDJqEIqGBPDr8a3Afflghb9jFx4ERWMQrq89kSC5x1F6n5XeTOzEGaDM0OXFkWARISqtVh98J%2FxPH5qPCWi7ebZ567TQvvDfiA65lXLMy2N6IY89NslflIcWu216X%2Bfnx%2BpbN%2BeXGjHm4lc8XXuz14Abc1E9t9ML2I5sIGOqUBneGJG8bxWubVxxx9GCr15SEYDSMkEnC3awZqt9EQ%2FZ6CGV%2Bw7wB1VXucc%2BOOR7V0aR2etkpwZKYtLSsmXTCVhGVYwjC38Cz8vxDMNQHOFchK7lUCIXEDi4KaXSH9sLNht4FSXXfgy1JfKOdi6%2F5YCByUWplkedC1HTzIZGtrV8Q77uwQO8POyMuCKRBPERA9HPsNnge0SDSozn%2FR%2FWqBka%2BJAaWZ&X-Amz-Signature=78ebecb39ebac496041b2b61e4da3798a5f527e8dfe707504150cbf64f4df697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSBXLAA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAS0sUyQLsw%2FAsDBtLFcG%2FacXDfCCRcaLAxzYX%2FjZtSZAiEAz3%2FN64kIAyxj4uSI5rr1EX3Itg%2BscjXBNK2Uca56AgIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDG4K%2Bf6FJdhkipGPwCrcA6r%2Fl1LZMJNWjCwADXBP%2BA5KSiGq733k3upIqFXoXLjeEWVkQB%2FL6XPefCTctmJkOokS%2FZfCd9PUzNg1R6x%2BL8YOzZCNrefOJvgqRAIGyHik9Ep5IaK4CzyEUr8MAszMIjffDgrIBBWuPB6rSPjJG9kNWJ1WODFNpLc6TxiIOLYqEJQ1ag6Q4B8SSKpXiKsoeiOVTbXbu4C3cPJZ5Hc46v%2BVgkYDA0AfQ%2FZywwyBPGfkevz4nLVk9482kYXE7m1Wl2P1fsN0T%2FJDPvW2jJifc8YwtirYYpNK7Oes4NRSIaX3wKC9%2FJC1EhG8JSTYykZWd1PGRma%2Bh%2B0E%2Flx7DZJyoxt0OySK%2Be0d2853UwxcRqiWi9oFIvl0d%2BiclZNRXkJPV9n8HJ8VdMbxQBEITMbz3vEhvdIoYMqcM8wNlhZTJnORxeBnS7wbb1dWNHM0J0RF2ZEjU1TVUPMeW0t2qu28Liqo5kkx4FrDJqEIqGBPDr8a3Afflghb9jFx4ERWMQrq89kSC5x1F6n5XeTOzEGaDM0OXFkWARISqtVh98J%2FxPH5qPCWi7ebZ567TQvvDfiA65lXLMy2N6IY89NslflIcWu216X%2Bfnx%2BpbN%2BeXGjHm4lc8XXuz14Abc1E9t9ML2I5sIGOqUBneGJG8bxWubVxxx9GCr15SEYDSMkEnC3awZqt9EQ%2FZ6CGV%2Bw7wB1VXucc%2BOOR7V0aR2etkpwZKYtLSsmXTCVhGVYwjC38Cz8vxDMNQHOFchK7lUCIXEDi4KaXSH9sLNht4FSXXfgy1JfKOdi6%2F5YCByUWplkedC1HTzIZGtrV8Q77uwQO8POyMuCKRBPERA9HPsNnge0SDSozn%2FR%2FWqBka%2BJAaWZ&X-Amz-Signature=439262db5d63e49c21308d4a3b0359016124ce01d581e2d913ac98e282d9e796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
