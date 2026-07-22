---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626C7EYDV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBkonInDpIo623GUG609C3l1tV3ntB%2Fjnbz%2Fz5yr52N%2BAiEAhPlYeTiR9lcEGRFk%2Fvb2q2Cr3VBzzyEUM8QtaDITFJYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi65%2B9IFRPc%2BdM4ryrcA5OxEpcBTX%2BQE9nAghBdYYMbFQ2renm%2Ff3uVb%2FRC7wcqINCJskNbzirdX9Qk2cyp21Rdr7pRSD1h0cTdHtvvLR2UavqckTWn1OvsUodPzZt%2BIvd0hjPQlwA%2BWOxSQOb1TeaPIb0nDADy%2FBZjWrwhXhsP7wQHh9ePvZmIU23eCwmEivBc1h4qK9UamT%2BV8dgu%2B4RUbadUlbiojeH74c%2FQCIC7k%2BosStYiOnRBcdwR3GcccvEMxo23hka7bPYcN5%2BOz5lFCszxh9%2BlHD8AO%2BFnffumocb2DwYZC%2FkgP3j0jzC9ktfXHhmmG%2Fs%2BrT85slRC%2BgQ07HwlWT3LDNYKSG0RZfaJcbSiuZqwoPyHDBWgnT9uER0Rs1VrCO%2BLpbXtRC6EKC9JmQjzUSDYgl66l5%2F9jo2oTeQVX%2B1EeNX7lmKH%2B7b0Kmvb7eigownqxtKj6TjMGf%2F6ZziRra45Wn9okp79SxLaT8nJj1NQ7GURK5xoTTaVg5TYdRMft0NFkCQ3QpQuc%2Fd96SsVwvTq0b4A14LLyjBQItEZ7g0t%2BFBrhsHPwTyZBrnKr16JGGWWL8S2mW2LSrCqWmHYws2yVeVeMFG4DO15i0BcUfGpWbUWGKQsmOgvV8U4yxBEap96U9Y8MMLGgNMGOqUBE5%2B3PVRNKdOclMz6VvPchPw5ilXGBBLsgttv2HNmp3kZgIPWDtCYlHammOGSKO4NGtiKSimDhtWzba1BxA9sytduEF924z7iUB0mCf8y1S7tU%2F%2Fkg7ixNmZvC9vAdn9ZUVsz3oWleyOPUkIIoBzJ279BwNGr%2BUzSaA6cebYklFj0TF1keTmSN4EnfV3iDI%2BNFIbd1M8%2BeePuJrP5UTxbn%2FKRevKo&X-Amz-Signature=6fc1c316023179efec4e15ece449ba83b0a400528af17dc93b3287abcb963b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626C7EYDV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBkonInDpIo623GUG609C3l1tV3ntB%2Fjnbz%2Fz5yr52N%2BAiEAhPlYeTiR9lcEGRFk%2Fvb2q2Cr3VBzzyEUM8QtaDITFJYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi65%2B9IFRPc%2BdM4ryrcA5OxEpcBTX%2BQE9nAghBdYYMbFQ2renm%2Ff3uVb%2FRC7wcqINCJskNbzirdX9Qk2cyp21Rdr7pRSD1h0cTdHtvvLR2UavqckTWn1OvsUodPzZt%2BIvd0hjPQlwA%2BWOxSQOb1TeaPIb0nDADy%2FBZjWrwhXhsP7wQHh9ePvZmIU23eCwmEivBc1h4qK9UamT%2BV8dgu%2B4RUbadUlbiojeH74c%2FQCIC7k%2BosStYiOnRBcdwR3GcccvEMxo23hka7bPYcN5%2BOz5lFCszxh9%2BlHD8AO%2BFnffumocb2DwYZC%2FkgP3j0jzC9ktfXHhmmG%2Fs%2BrT85slRC%2BgQ07HwlWT3LDNYKSG0RZfaJcbSiuZqwoPyHDBWgnT9uER0Rs1VrCO%2BLpbXtRC6EKC9JmQjzUSDYgl66l5%2F9jo2oTeQVX%2B1EeNX7lmKH%2B7b0Kmvb7eigownqxtKj6TjMGf%2F6ZziRra45Wn9okp79SxLaT8nJj1NQ7GURK5xoTTaVg5TYdRMft0NFkCQ3QpQuc%2Fd96SsVwvTq0b4A14LLyjBQItEZ7g0t%2BFBrhsHPwTyZBrnKr16JGGWWL8S2mW2LSrCqWmHYws2yVeVeMFG4DO15i0BcUfGpWbUWGKQsmOgvV8U4yxBEap96U9Y8MMLGgNMGOqUBE5%2B3PVRNKdOclMz6VvPchPw5ilXGBBLsgttv2HNmp3kZgIPWDtCYlHammOGSKO4NGtiKSimDhtWzba1BxA9sytduEF924z7iUB0mCf8y1S7tU%2F%2Fkg7ixNmZvC9vAdn9ZUVsz3oWleyOPUkIIoBzJ279BwNGr%2BUzSaA6cebYklFj0TF1keTmSN4EnfV3iDI%2BNFIbd1M8%2BeePuJrP5UTxbn%2FKRevKo&X-Amz-Signature=5bb76a9c7443c7d27eea609bf0f47cf3312f52e836f751d3760caf45a39d5d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626C7EYDV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBkonInDpIo623GUG609C3l1tV3ntB%2Fjnbz%2Fz5yr52N%2BAiEAhPlYeTiR9lcEGRFk%2Fvb2q2Cr3VBzzyEUM8QtaDITFJYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi65%2B9IFRPc%2BdM4ryrcA5OxEpcBTX%2BQE9nAghBdYYMbFQ2renm%2Ff3uVb%2FRC7wcqINCJskNbzirdX9Qk2cyp21Rdr7pRSD1h0cTdHtvvLR2UavqckTWn1OvsUodPzZt%2BIvd0hjPQlwA%2BWOxSQOb1TeaPIb0nDADy%2FBZjWrwhXhsP7wQHh9ePvZmIU23eCwmEivBc1h4qK9UamT%2BV8dgu%2B4RUbadUlbiojeH74c%2FQCIC7k%2BosStYiOnRBcdwR3GcccvEMxo23hka7bPYcN5%2BOz5lFCszxh9%2BlHD8AO%2BFnffumocb2DwYZC%2FkgP3j0jzC9ktfXHhmmG%2Fs%2BrT85slRC%2BgQ07HwlWT3LDNYKSG0RZfaJcbSiuZqwoPyHDBWgnT9uER0Rs1VrCO%2BLpbXtRC6EKC9JmQjzUSDYgl66l5%2F9jo2oTeQVX%2B1EeNX7lmKH%2B7b0Kmvb7eigownqxtKj6TjMGf%2F6ZziRra45Wn9okp79SxLaT8nJj1NQ7GURK5xoTTaVg5TYdRMft0NFkCQ3QpQuc%2Fd96SsVwvTq0b4A14LLyjBQItEZ7g0t%2BFBrhsHPwTyZBrnKr16JGGWWL8S2mW2LSrCqWmHYws2yVeVeMFG4DO15i0BcUfGpWbUWGKQsmOgvV8U4yxBEap96U9Y8MMLGgNMGOqUBE5%2B3PVRNKdOclMz6VvPchPw5ilXGBBLsgttv2HNmp3kZgIPWDtCYlHammOGSKO4NGtiKSimDhtWzba1BxA9sytduEF924z7iUB0mCf8y1S7tU%2F%2Fkg7ixNmZvC9vAdn9ZUVsz3oWleyOPUkIIoBzJ279BwNGr%2BUzSaA6cebYklFj0TF1keTmSN4EnfV3iDI%2BNFIbd1M8%2BeePuJrP5UTxbn%2FKRevKo&X-Amz-Signature=bd737aa8b76ab453a49ccffdf1f96ff375604143ca9ff917cbf794cfc968529d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626C7EYDV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBkonInDpIo623GUG609C3l1tV3ntB%2Fjnbz%2Fz5yr52N%2BAiEAhPlYeTiR9lcEGRFk%2Fvb2q2Cr3VBzzyEUM8QtaDITFJYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi65%2B9IFRPc%2BdM4ryrcA5OxEpcBTX%2BQE9nAghBdYYMbFQ2renm%2Ff3uVb%2FRC7wcqINCJskNbzirdX9Qk2cyp21Rdr7pRSD1h0cTdHtvvLR2UavqckTWn1OvsUodPzZt%2BIvd0hjPQlwA%2BWOxSQOb1TeaPIb0nDADy%2FBZjWrwhXhsP7wQHh9ePvZmIU23eCwmEivBc1h4qK9UamT%2BV8dgu%2B4RUbadUlbiojeH74c%2FQCIC7k%2BosStYiOnRBcdwR3GcccvEMxo23hka7bPYcN5%2BOz5lFCszxh9%2BlHD8AO%2BFnffumocb2DwYZC%2FkgP3j0jzC9ktfXHhmmG%2Fs%2BrT85slRC%2BgQ07HwlWT3LDNYKSG0RZfaJcbSiuZqwoPyHDBWgnT9uER0Rs1VrCO%2BLpbXtRC6EKC9JmQjzUSDYgl66l5%2F9jo2oTeQVX%2B1EeNX7lmKH%2B7b0Kmvb7eigownqxtKj6TjMGf%2F6ZziRra45Wn9okp79SxLaT8nJj1NQ7GURK5xoTTaVg5TYdRMft0NFkCQ3QpQuc%2Fd96SsVwvTq0b4A14LLyjBQItEZ7g0t%2BFBrhsHPwTyZBrnKr16JGGWWL8S2mW2LSrCqWmHYws2yVeVeMFG4DO15i0BcUfGpWbUWGKQsmOgvV8U4yxBEap96U9Y8MMLGgNMGOqUBE5%2B3PVRNKdOclMz6VvPchPw5ilXGBBLsgttv2HNmp3kZgIPWDtCYlHammOGSKO4NGtiKSimDhtWzba1BxA9sytduEF924z7iUB0mCf8y1S7tU%2F%2Fkg7ixNmZvC9vAdn9ZUVsz3oWleyOPUkIIoBzJ279BwNGr%2BUzSaA6cebYklFj0TF1keTmSN4EnfV3iDI%2BNFIbd1M8%2BeePuJrP5UTxbn%2FKRevKo&X-Amz-Signature=876511b12718f42acccc0f291ca15cc0e274508fe4ba8438e271e11f0417a6ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626C7EYDV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBkonInDpIo623GUG609C3l1tV3ntB%2Fjnbz%2Fz5yr52N%2BAiEAhPlYeTiR9lcEGRFk%2Fvb2q2Cr3VBzzyEUM8QtaDITFJYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi65%2B9IFRPc%2BdM4ryrcA5OxEpcBTX%2BQE9nAghBdYYMbFQ2renm%2Ff3uVb%2FRC7wcqINCJskNbzirdX9Qk2cyp21Rdr7pRSD1h0cTdHtvvLR2UavqckTWn1OvsUodPzZt%2BIvd0hjPQlwA%2BWOxSQOb1TeaPIb0nDADy%2FBZjWrwhXhsP7wQHh9ePvZmIU23eCwmEivBc1h4qK9UamT%2BV8dgu%2B4RUbadUlbiojeH74c%2FQCIC7k%2BosStYiOnRBcdwR3GcccvEMxo23hka7bPYcN5%2BOz5lFCszxh9%2BlHD8AO%2BFnffumocb2DwYZC%2FkgP3j0jzC9ktfXHhmmG%2Fs%2BrT85slRC%2BgQ07HwlWT3LDNYKSG0RZfaJcbSiuZqwoPyHDBWgnT9uER0Rs1VrCO%2BLpbXtRC6EKC9JmQjzUSDYgl66l5%2F9jo2oTeQVX%2B1EeNX7lmKH%2B7b0Kmvb7eigownqxtKj6TjMGf%2F6ZziRra45Wn9okp79SxLaT8nJj1NQ7GURK5xoTTaVg5TYdRMft0NFkCQ3QpQuc%2Fd96SsVwvTq0b4A14LLyjBQItEZ7g0t%2BFBrhsHPwTyZBrnKr16JGGWWL8S2mW2LSrCqWmHYws2yVeVeMFG4DO15i0BcUfGpWbUWGKQsmOgvV8U4yxBEap96U9Y8MMLGgNMGOqUBE5%2B3PVRNKdOclMz6VvPchPw5ilXGBBLsgttv2HNmp3kZgIPWDtCYlHammOGSKO4NGtiKSimDhtWzba1BxA9sytduEF924z7iUB0mCf8y1S7tU%2F%2Fkg7ixNmZvC9vAdn9ZUVsz3oWleyOPUkIIoBzJ279BwNGr%2BUzSaA6cebYklFj0TF1keTmSN4EnfV3iDI%2BNFIbd1M8%2BeePuJrP5UTxbn%2FKRevKo&X-Amz-Signature=1e03f86c8c267f4cb353f6aaa99582cc6fc8e79f71d067d4e82f74e060e1fdbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626C7EYDV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBkonInDpIo623GUG609C3l1tV3ntB%2Fjnbz%2Fz5yr52N%2BAiEAhPlYeTiR9lcEGRFk%2Fvb2q2Cr3VBzzyEUM8QtaDITFJYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi65%2B9IFRPc%2BdM4ryrcA5OxEpcBTX%2BQE9nAghBdYYMbFQ2renm%2Ff3uVb%2FRC7wcqINCJskNbzirdX9Qk2cyp21Rdr7pRSD1h0cTdHtvvLR2UavqckTWn1OvsUodPzZt%2BIvd0hjPQlwA%2BWOxSQOb1TeaPIb0nDADy%2FBZjWrwhXhsP7wQHh9ePvZmIU23eCwmEivBc1h4qK9UamT%2BV8dgu%2B4RUbadUlbiojeH74c%2FQCIC7k%2BosStYiOnRBcdwR3GcccvEMxo23hka7bPYcN5%2BOz5lFCszxh9%2BlHD8AO%2BFnffumocb2DwYZC%2FkgP3j0jzC9ktfXHhmmG%2Fs%2BrT85slRC%2BgQ07HwlWT3LDNYKSG0RZfaJcbSiuZqwoPyHDBWgnT9uER0Rs1VrCO%2BLpbXtRC6EKC9JmQjzUSDYgl66l5%2F9jo2oTeQVX%2B1EeNX7lmKH%2B7b0Kmvb7eigownqxtKj6TjMGf%2F6ZziRra45Wn9okp79SxLaT8nJj1NQ7GURK5xoTTaVg5TYdRMft0NFkCQ3QpQuc%2Fd96SsVwvTq0b4A14LLyjBQItEZ7g0t%2BFBrhsHPwTyZBrnKr16JGGWWL8S2mW2LSrCqWmHYws2yVeVeMFG4DO15i0BcUfGpWbUWGKQsmOgvV8U4yxBEap96U9Y8MMLGgNMGOqUBE5%2B3PVRNKdOclMz6VvPchPw5ilXGBBLsgttv2HNmp3kZgIPWDtCYlHammOGSKO4NGtiKSimDhtWzba1BxA9sytduEF924z7iUB0mCf8y1S7tU%2F%2Fkg7ixNmZvC9vAdn9ZUVsz3oWleyOPUkIIoBzJ279BwNGr%2BUzSaA6cebYklFj0TF1keTmSN4EnfV3iDI%2BNFIbd1M8%2BeePuJrP5UTxbn%2FKRevKo&X-Amz-Signature=9e1757175b8d6f081f6b89baa543a714c8097d237cf0b8cdf078270d90ff120b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626C7EYDV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIBkonInDpIo623GUG609C3l1tV3ntB%2Fjnbz%2Fz5yr52N%2BAiEAhPlYeTiR9lcEGRFk%2Fvb2q2Cr3VBzzyEUM8QtaDITFJYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGi65%2B9IFRPc%2BdM4ryrcA5OxEpcBTX%2BQE9nAghBdYYMbFQ2renm%2Ff3uVb%2FRC7wcqINCJskNbzirdX9Qk2cyp21Rdr7pRSD1h0cTdHtvvLR2UavqckTWn1OvsUodPzZt%2BIvd0hjPQlwA%2BWOxSQOb1TeaPIb0nDADy%2FBZjWrwhXhsP7wQHh9ePvZmIU23eCwmEivBc1h4qK9UamT%2BV8dgu%2B4RUbadUlbiojeH74c%2FQCIC7k%2BosStYiOnRBcdwR3GcccvEMxo23hka7bPYcN5%2BOz5lFCszxh9%2BlHD8AO%2BFnffumocb2DwYZC%2FkgP3j0jzC9ktfXHhmmG%2Fs%2BrT85slRC%2BgQ07HwlWT3LDNYKSG0RZfaJcbSiuZqwoPyHDBWgnT9uER0Rs1VrCO%2BLpbXtRC6EKC9JmQjzUSDYgl66l5%2F9jo2oTeQVX%2B1EeNX7lmKH%2B7b0Kmvb7eigownqxtKj6TjMGf%2F6ZziRra45Wn9okp79SxLaT8nJj1NQ7GURK5xoTTaVg5TYdRMft0NFkCQ3QpQuc%2Fd96SsVwvTq0b4A14LLyjBQItEZ7g0t%2BFBrhsHPwTyZBrnKr16JGGWWL8S2mW2LSrCqWmHYws2yVeVeMFG4DO15i0BcUfGpWbUWGKQsmOgvV8U4yxBEap96U9Y8MMLGgNMGOqUBE5%2B3PVRNKdOclMz6VvPchPw5ilXGBBLsgttv2HNmp3kZgIPWDtCYlHammOGSKO4NGtiKSimDhtWzba1BxA9sytduEF924z7iUB0mCf8y1S7tU%2F%2Fkg7ixNmZvC9vAdn9ZUVsz3oWleyOPUkIIoBzJ279BwNGr%2BUzSaA6cebYklFj0TF1keTmSN4EnfV3iDI%2BNFIbd1M8%2BeePuJrP5UTxbn%2FKRevKo&X-Amz-Signature=7f835b0174a8bdc7dcfe1dac74ac36bd343a1b85d869348e05b69519e265739f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
