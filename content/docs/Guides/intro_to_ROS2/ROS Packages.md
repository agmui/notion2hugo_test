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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECOWJZ7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCluFxjQrInMK6VbCfwBrqzmeSNwA7zmzzkgutjK91Y4gIhAMe2OoSDphd10Y1dmaLh8CmokwkCu2mwENbs7Qk88Fu5KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FTooIIKp4SMMqJZ4q3APZtkPL0zxbe7oInjJFs7isde%2B8IobQaugGxv9Dia6juIsYUbxgNvbeRwFo17Bptu0CTnAWJdHlUA8qL%2FIRm%2FD%2BIXS%2BX%2FiYTti2uxKjH9YMPf3BPMdaE8Ao23rG6eVDlo4ul8T%2F5%2FlSUaxsnFB75BJUwP9bGM30PM4S5WaHOGbV1S1hphNMzR7Jgs6Wb%2F%2B90XhapfztaNb%2BZbYEdKbqU%2B35Vu9immZc25%2BB%2Buym8mLouygUU%2BCRP4%2BXm1KSji5JO64PP1AFPdMYaXtqu1NsZluSNWcRYEB62PbP%2Buu0zZM4YKJeN4MLAne%2B95%2FG%2Fy8PGxH0%2BRVlqJ9PoT2cZ32jJ%2FQYFkgnqb1CYnxiRjLCbhTac6O8ZX2qsr5%2FXVbZnR4fQ%2BaC82X1dSlHDZ4X62dALJeZES5LFj4LhBEkzz%2FeVW9TgOUEGs0iCnzqiRTdGG6xL%2BePeMUrGZ%2BNITN5qKrl6O4IVZ1cvxLRP%2BvMtdax2jK55Lh3T7JW43t41xitoExZ9kfukHu13aB8u5ZFd%2FPAkU%2FNYPY0Gn%2BSU2M1LlAHvwrEMbW3pPxZiW0rqPrbzxg8PmX1jYJ1SZA%2By12icOVMVHqpHWxWv7ufEYbiHMN2RWxb%2Bw9T8KJGcr1NVMczbDD9rczDBjqkAeal5nRZfkXtc494KXs3pHoi8Nn2cyJw5Dy0W785Qs5GxJkQS0qq4I%2FXrJdhJufHVhodmsbJUhxSCRSBvaCLmzmCbNIDIXfOWGQlRa2x3JScG4%2BIIcetnqnHyDYLSiv2UcHEJi0hCDLwe2dKx6KJefQhUl%2BhBK6usLL0Ks4R3QSxu03bWbYzxgbTAOK9NKKjPQQ1ULHB4Vlti5wGvZv5v8Xxj2RW&X-Amz-Signature=7479bea9eb6235950eb34513e9c3e2a0316b17e2f306b50be5297bdf16eccfdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECOWJZ7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCluFxjQrInMK6VbCfwBrqzmeSNwA7zmzzkgutjK91Y4gIhAMe2OoSDphd10Y1dmaLh8CmokwkCu2mwENbs7Qk88Fu5KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FTooIIKp4SMMqJZ4q3APZtkPL0zxbe7oInjJFs7isde%2B8IobQaugGxv9Dia6juIsYUbxgNvbeRwFo17Bptu0CTnAWJdHlUA8qL%2FIRm%2FD%2BIXS%2BX%2FiYTti2uxKjH9YMPf3BPMdaE8Ao23rG6eVDlo4ul8T%2F5%2FlSUaxsnFB75BJUwP9bGM30PM4S5WaHOGbV1S1hphNMzR7Jgs6Wb%2F%2B90XhapfztaNb%2BZbYEdKbqU%2B35Vu9immZc25%2BB%2Buym8mLouygUU%2BCRP4%2BXm1KSji5JO64PP1AFPdMYaXtqu1NsZluSNWcRYEB62PbP%2Buu0zZM4YKJeN4MLAne%2B95%2FG%2Fy8PGxH0%2BRVlqJ9PoT2cZ32jJ%2FQYFkgnqb1CYnxiRjLCbhTac6O8ZX2qsr5%2FXVbZnR4fQ%2BaC82X1dSlHDZ4X62dALJeZES5LFj4LhBEkzz%2FeVW9TgOUEGs0iCnzqiRTdGG6xL%2BePeMUrGZ%2BNITN5qKrl6O4IVZ1cvxLRP%2BvMtdax2jK55Lh3T7JW43t41xitoExZ9kfukHu13aB8u5ZFd%2FPAkU%2FNYPY0Gn%2BSU2M1LlAHvwrEMbW3pPxZiW0rqPrbzxg8PmX1jYJ1SZA%2By12icOVMVHqpHWxWv7ufEYbiHMN2RWxb%2Bw9T8KJGcr1NVMczbDD9rczDBjqkAeal5nRZfkXtc494KXs3pHoi8Nn2cyJw5Dy0W785Qs5GxJkQS0qq4I%2FXrJdhJufHVhodmsbJUhxSCRSBvaCLmzmCbNIDIXfOWGQlRa2x3JScG4%2BIIcetnqnHyDYLSiv2UcHEJi0hCDLwe2dKx6KJefQhUl%2BhBK6usLL0Ks4R3QSxu03bWbYzxgbTAOK9NKKjPQQ1ULHB4Vlti5wGvZv5v8Xxj2RW&X-Amz-Signature=be256950dd021bd2f14f4b8e3bf9d6d0b79f299b78cbbda4e7b5a41e47d9ba00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECOWJZ7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCluFxjQrInMK6VbCfwBrqzmeSNwA7zmzzkgutjK91Y4gIhAMe2OoSDphd10Y1dmaLh8CmokwkCu2mwENbs7Qk88Fu5KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FTooIIKp4SMMqJZ4q3APZtkPL0zxbe7oInjJFs7isde%2B8IobQaugGxv9Dia6juIsYUbxgNvbeRwFo17Bptu0CTnAWJdHlUA8qL%2FIRm%2FD%2BIXS%2BX%2FiYTti2uxKjH9YMPf3BPMdaE8Ao23rG6eVDlo4ul8T%2F5%2FlSUaxsnFB75BJUwP9bGM30PM4S5WaHOGbV1S1hphNMzR7Jgs6Wb%2F%2B90XhapfztaNb%2BZbYEdKbqU%2B35Vu9immZc25%2BB%2Buym8mLouygUU%2BCRP4%2BXm1KSji5JO64PP1AFPdMYaXtqu1NsZluSNWcRYEB62PbP%2Buu0zZM4YKJeN4MLAne%2B95%2FG%2Fy8PGxH0%2BRVlqJ9PoT2cZ32jJ%2FQYFkgnqb1CYnxiRjLCbhTac6O8ZX2qsr5%2FXVbZnR4fQ%2BaC82X1dSlHDZ4X62dALJeZES5LFj4LhBEkzz%2FeVW9TgOUEGs0iCnzqiRTdGG6xL%2BePeMUrGZ%2BNITN5qKrl6O4IVZ1cvxLRP%2BvMtdax2jK55Lh3T7JW43t41xitoExZ9kfukHu13aB8u5ZFd%2FPAkU%2FNYPY0Gn%2BSU2M1LlAHvwrEMbW3pPxZiW0rqPrbzxg8PmX1jYJ1SZA%2By12icOVMVHqpHWxWv7ufEYbiHMN2RWxb%2Bw9T8KJGcr1NVMczbDD9rczDBjqkAeal5nRZfkXtc494KXs3pHoi8Nn2cyJw5Dy0W785Qs5GxJkQS0qq4I%2FXrJdhJufHVhodmsbJUhxSCRSBvaCLmzmCbNIDIXfOWGQlRa2x3JScG4%2BIIcetnqnHyDYLSiv2UcHEJi0hCDLwe2dKx6KJefQhUl%2BhBK6usLL0Ks4R3QSxu03bWbYzxgbTAOK9NKKjPQQ1ULHB4Vlti5wGvZv5v8Xxj2RW&X-Amz-Signature=37235865b5bf23f1898bdfedb00d602fc0d005b0e277efc50cf8e1639aebcc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECOWJZ7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCluFxjQrInMK6VbCfwBrqzmeSNwA7zmzzkgutjK91Y4gIhAMe2OoSDphd10Y1dmaLh8CmokwkCu2mwENbs7Qk88Fu5KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FTooIIKp4SMMqJZ4q3APZtkPL0zxbe7oInjJFs7isde%2B8IobQaugGxv9Dia6juIsYUbxgNvbeRwFo17Bptu0CTnAWJdHlUA8qL%2FIRm%2FD%2BIXS%2BX%2FiYTti2uxKjH9YMPf3BPMdaE8Ao23rG6eVDlo4ul8T%2F5%2FlSUaxsnFB75BJUwP9bGM30PM4S5WaHOGbV1S1hphNMzR7Jgs6Wb%2F%2B90XhapfztaNb%2BZbYEdKbqU%2B35Vu9immZc25%2BB%2Buym8mLouygUU%2BCRP4%2BXm1KSji5JO64PP1AFPdMYaXtqu1NsZluSNWcRYEB62PbP%2Buu0zZM4YKJeN4MLAne%2B95%2FG%2Fy8PGxH0%2BRVlqJ9PoT2cZ32jJ%2FQYFkgnqb1CYnxiRjLCbhTac6O8ZX2qsr5%2FXVbZnR4fQ%2BaC82X1dSlHDZ4X62dALJeZES5LFj4LhBEkzz%2FeVW9TgOUEGs0iCnzqiRTdGG6xL%2BePeMUrGZ%2BNITN5qKrl6O4IVZ1cvxLRP%2BvMtdax2jK55Lh3T7JW43t41xitoExZ9kfukHu13aB8u5ZFd%2FPAkU%2FNYPY0Gn%2BSU2M1LlAHvwrEMbW3pPxZiW0rqPrbzxg8PmX1jYJ1SZA%2By12icOVMVHqpHWxWv7ufEYbiHMN2RWxb%2Bw9T8KJGcr1NVMczbDD9rczDBjqkAeal5nRZfkXtc494KXs3pHoi8Nn2cyJw5Dy0W785Qs5GxJkQS0qq4I%2FXrJdhJufHVhodmsbJUhxSCRSBvaCLmzmCbNIDIXfOWGQlRa2x3JScG4%2BIIcetnqnHyDYLSiv2UcHEJi0hCDLwe2dKx6KJefQhUl%2BhBK6usLL0Ks4R3QSxu03bWbYzxgbTAOK9NKKjPQQ1ULHB4Vlti5wGvZv5v8Xxj2RW&X-Amz-Signature=a284a43477b3530d26201f28a546faaf5ba690a952ace177aca3707a89197259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECOWJZ7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCluFxjQrInMK6VbCfwBrqzmeSNwA7zmzzkgutjK91Y4gIhAMe2OoSDphd10Y1dmaLh8CmokwkCu2mwENbs7Qk88Fu5KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FTooIIKp4SMMqJZ4q3APZtkPL0zxbe7oInjJFs7isde%2B8IobQaugGxv9Dia6juIsYUbxgNvbeRwFo17Bptu0CTnAWJdHlUA8qL%2FIRm%2FD%2BIXS%2BX%2FiYTti2uxKjH9YMPf3BPMdaE8Ao23rG6eVDlo4ul8T%2F5%2FlSUaxsnFB75BJUwP9bGM30PM4S5WaHOGbV1S1hphNMzR7Jgs6Wb%2F%2B90XhapfztaNb%2BZbYEdKbqU%2B35Vu9immZc25%2BB%2Buym8mLouygUU%2BCRP4%2BXm1KSji5JO64PP1AFPdMYaXtqu1NsZluSNWcRYEB62PbP%2Buu0zZM4YKJeN4MLAne%2B95%2FG%2Fy8PGxH0%2BRVlqJ9PoT2cZ32jJ%2FQYFkgnqb1CYnxiRjLCbhTac6O8ZX2qsr5%2FXVbZnR4fQ%2BaC82X1dSlHDZ4X62dALJeZES5LFj4LhBEkzz%2FeVW9TgOUEGs0iCnzqiRTdGG6xL%2BePeMUrGZ%2BNITN5qKrl6O4IVZ1cvxLRP%2BvMtdax2jK55Lh3T7JW43t41xitoExZ9kfukHu13aB8u5ZFd%2FPAkU%2FNYPY0Gn%2BSU2M1LlAHvwrEMbW3pPxZiW0rqPrbzxg8PmX1jYJ1SZA%2By12icOVMVHqpHWxWv7ufEYbiHMN2RWxb%2Bw9T8KJGcr1NVMczbDD9rczDBjqkAeal5nRZfkXtc494KXs3pHoi8Nn2cyJw5Dy0W785Qs5GxJkQS0qq4I%2FXrJdhJufHVhodmsbJUhxSCRSBvaCLmzmCbNIDIXfOWGQlRa2x3JScG4%2BIIcetnqnHyDYLSiv2UcHEJi0hCDLwe2dKx6KJefQhUl%2BhBK6usLL0Ks4R3QSxu03bWbYzxgbTAOK9NKKjPQQ1ULHB4Vlti5wGvZv5v8Xxj2RW&X-Amz-Signature=0ef79d620611108bbab3345ce3ba98902654d4d31c01893b932a64b73452bc1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECOWJZ7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCluFxjQrInMK6VbCfwBrqzmeSNwA7zmzzkgutjK91Y4gIhAMe2OoSDphd10Y1dmaLh8CmokwkCu2mwENbs7Qk88Fu5KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FTooIIKp4SMMqJZ4q3APZtkPL0zxbe7oInjJFs7isde%2B8IobQaugGxv9Dia6juIsYUbxgNvbeRwFo17Bptu0CTnAWJdHlUA8qL%2FIRm%2FD%2BIXS%2BX%2FiYTti2uxKjH9YMPf3BPMdaE8Ao23rG6eVDlo4ul8T%2F5%2FlSUaxsnFB75BJUwP9bGM30PM4S5WaHOGbV1S1hphNMzR7Jgs6Wb%2F%2B90XhapfztaNb%2BZbYEdKbqU%2B35Vu9immZc25%2BB%2Buym8mLouygUU%2BCRP4%2BXm1KSji5JO64PP1AFPdMYaXtqu1NsZluSNWcRYEB62PbP%2Buu0zZM4YKJeN4MLAne%2B95%2FG%2Fy8PGxH0%2BRVlqJ9PoT2cZ32jJ%2FQYFkgnqb1CYnxiRjLCbhTac6O8ZX2qsr5%2FXVbZnR4fQ%2BaC82X1dSlHDZ4X62dALJeZES5LFj4LhBEkzz%2FeVW9TgOUEGs0iCnzqiRTdGG6xL%2BePeMUrGZ%2BNITN5qKrl6O4IVZ1cvxLRP%2BvMtdax2jK55Lh3T7JW43t41xitoExZ9kfukHu13aB8u5ZFd%2FPAkU%2FNYPY0Gn%2BSU2M1LlAHvwrEMbW3pPxZiW0rqPrbzxg8PmX1jYJ1SZA%2By12icOVMVHqpHWxWv7ufEYbiHMN2RWxb%2Bw9T8KJGcr1NVMczbDD9rczDBjqkAeal5nRZfkXtc494KXs3pHoi8Nn2cyJw5Dy0W785Qs5GxJkQS0qq4I%2FXrJdhJufHVhodmsbJUhxSCRSBvaCLmzmCbNIDIXfOWGQlRa2x3JScG4%2BIIcetnqnHyDYLSiv2UcHEJi0hCDLwe2dKx6KJefQhUl%2BhBK6usLL0Ks4R3QSxu03bWbYzxgbTAOK9NKKjPQQ1ULHB4Vlti5wGvZv5v8Xxj2RW&X-Amz-Signature=7e61e1c30954316a37810b56e0bd8cadbe24f2ef6e654720eb7e3002b1ff7b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECOWJZ7%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCluFxjQrInMK6VbCfwBrqzmeSNwA7zmzzkgutjK91Y4gIhAMe2OoSDphd10Y1dmaLh8CmokwkCu2mwENbs7Qk88Fu5KogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FTooIIKp4SMMqJZ4q3APZtkPL0zxbe7oInjJFs7isde%2B8IobQaugGxv9Dia6juIsYUbxgNvbeRwFo17Bptu0CTnAWJdHlUA8qL%2FIRm%2FD%2BIXS%2BX%2FiYTti2uxKjH9YMPf3BPMdaE8Ao23rG6eVDlo4ul8T%2F5%2FlSUaxsnFB75BJUwP9bGM30PM4S5WaHOGbV1S1hphNMzR7Jgs6Wb%2F%2B90XhapfztaNb%2BZbYEdKbqU%2B35Vu9immZc25%2BB%2Buym8mLouygUU%2BCRP4%2BXm1KSji5JO64PP1AFPdMYaXtqu1NsZluSNWcRYEB62PbP%2Buu0zZM4YKJeN4MLAne%2B95%2FG%2Fy8PGxH0%2BRVlqJ9PoT2cZ32jJ%2FQYFkgnqb1CYnxiRjLCbhTac6O8ZX2qsr5%2FXVbZnR4fQ%2BaC82X1dSlHDZ4X62dALJeZES5LFj4LhBEkzz%2FeVW9TgOUEGs0iCnzqiRTdGG6xL%2BePeMUrGZ%2BNITN5qKrl6O4IVZ1cvxLRP%2BvMtdax2jK55Lh3T7JW43t41xitoExZ9kfukHu13aB8u5ZFd%2FPAkU%2FNYPY0Gn%2BSU2M1LlAHvwrEMbW3pPxZiW0rqPrbzxg8PmX1jYJ1SZA%2By12icOVMVHqpHWxWv7ufEYbiHMN2RWxb%2Bw9T8KJGcr1NVMczbDD9rczDBjqkAeal5nRZfkXtc494KXs3pHoi8Nn2cyJw5Dy0W785Qs5GxJkQS0qq4I%2FXrJdhJufHVhodmsbJUhxSCRSBvaCLmzmCbNIDIXfOWGQlRa2x3JScG4%2BIIcetnqnHyDYLSiv2UcHEJi0hCDLwe2dKx6KJefQhUl%2BhBK6usLL0Ks4R3QSxu03bWbYzxgbTAOK9NKKjPQQ1ULHB4Vlti5wGvZv5v8Xxj2RW&X-Amz-Signature=ae85d9abcd87e48afc17f32a7674c50891c45913095a61d783a82c905810a03c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
