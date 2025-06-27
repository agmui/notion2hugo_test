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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNSN7FV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDHjDjU6%2B3Xrw6L2%2FSLFAN%2Bs7fbLzJa3uCUjQiESEyrXAIgJsNQvsREZd5j6ackLBtqmjiIkuGEhSQyhkOscEbmLREq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNog7rqVxBkhYbBHpyrcAwuNgvgBh3tcHS7NLwlTSjrT9SfrB7Vrw91tJB84xowvWMcRGICRK93dRoUGR3X7Nfq%2FqjNKY0vEBJtvZn1wTr1Jrhbzok2nk2KFgVPNt0pr96EqD%2BAAl5oiO3SUzEt1pSIyQ%2BLwyo2J9KV2XEVQYJdy0FmDrbRzAMY273%2FxbzklcRzXW46TlHVko3szZJLZk%2Bw73Vr07NJlSDPuNkxVkr12G7OjyXWt02ih3nZ6lbUG9uUrjW4S0DzL7wuSUtbyxRgXrUgU4U9Xli8lqgZtFvOosoDv%2FL6jytL6SQtD2hhNsFFtWWG0Hjsvp6RcMDlmrEAhDLZhMLuE98MfeTHzkETYj3FiCcZGEQ4sP%2F%2BnG%2BHK%2FV7nh8wUOIVs8Djcwe4VRDdXfkEphQHbahkQI2U2rNpy426U6eGM5Fc2kxnfmlVqP8F8yx%2BH2KDn5qrpCbprU0lL80utl4WizSrPXUTnM9bNG13yjGtRR5Q38sxS78JRfVNnIrw27DVagNd20ixAqP8IbmMR5U2kQqM9ph9XhxGCSUtBkSMibD1Jw6b6ceEjgm21S13yTpQdIj4JQfSoADFCjPWi0nxVZ2yiCCvAcwOjV8HdgOkUKtEp2VUDraYCVngOF2QtTZPLEqczMNql%2BsIGOqUBYiuN6cEtelWLRTFXv7UZJLP0gcqInVepGNIaG8tgN9dt0%2FmW5O8hl%2BsgzWrIXt16rWIQLUHjTx2%2FtS3SYQiMqgFmNnQJuboWJwT91QWad4tH2r5joU14yaB%2Bg7anC91kzjGBtKLVJ1iJTWa8Nip8dOuRIRez%2FT6sj5wRxH0%2F6XxGC%2BE5jaPqa0i8TIbxOnUQPqCvtNlNsmYNAsICStd8uTo6Ovna&X-Amz-Signature=e97fb60210d5103f43fdffb0043e0fb0fcd9a574ff6321cdf7698bd8dd5518e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNSN7FV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDHjDjU6%2B3Xrw6L2%2FSLFAN%2Bs7fbLzJa3uCUjQiESEyrXAIgJsNQvsREZd5j6ackLBtqmjiIkuGEhSQyhkOscEbmLREq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNog7rqVxBkhYbBHpyrcAwuNgvgBh3tcHS7NLwlTSjrT9SfrB7Vrw91tJB84xowvWMcRGICRK93dRoUGR3X7Nfq%2FqjNKY0vEBJtvZn1wTr1Jrhbzok2nk2KFgVPNt0pr96EqD%2BAAl5oiO3SUzEt1pSIyQ%2BLwyo2J9KV2XEVQYJdy0FmDrbRzAMY273%2FxbzklcRzXW46TlHVko3szZJLZk%2Bw73Vr07NJlSDPuNkxVkr12G7OjyXWt02ih3nZ6lbUG9uUrjW4S0DzL7wuSUtbyxRgXrUgU4U9Xli8lqgZtFvOosoDv%2FL6jytL6SQtD2hhNsFFtWWG0Hjsvp6RcMDlmrEAhDLZhMLuE98MfeTHzkETYj3FiCcZGEQ4sP%2F%2BnG%2BHK%2FV7nh8wUOIVs8Djcwe4VRDdXfkEphQHbahkQI2U2rNpy426U6eGM5Fc2kxnfmlVqP8F8yx%2BH2KDn5qrpCbprU0lL80utl4WizSrPXUTnM9bNG13yjGtRR5Q38sxS78JRfVNnIrw27DVagNd20ixAqP8IbmMR5U2kQqM9ph9XhxGCSUtBkSMibD1Jw6b6ceEjgm21S13yTpQdIj4JQfSoADFCjPWi0nxVZ2yiCCvAcwOjV8HdgOkUKtEp2VUDraYCVngOF2QtTZPLEqczMNql%2BsIGOqUBYiuN6cEtelWLRTFXv7UZJLP0gcqInVepGNIaG8tgN9dt0%2FmW5O8hl%2BsgzWrIXt16rWIQLUHjTx2%2FtS3SYQiMqgFmNnQJuboWJwT91QWad4tH2r5joU14yaB%2Bg7anC91kzjGBtKLVJ1iJTWa8Nip8dOuRIRez%2FT6sj5wRxH0%2F6XxGC%2BE5jaPqa0i8TIbxOnUQPqCvtNlNsmYNAsICStd8uTo6Ovna&X-Amz-Signature=13023e21e37288af35713f695eb2750395722731e8f0f4fe596bff98b671e9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNSN7FV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDHjDjU6%2B3Xrw6L2%2FSLFAN%2Bs7fbLzJa3uCUjQiESEyrXAIgJsNQvsREZd5j6ackLBtqmjiIkuGEhSQyhkOscEbmLREq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNog7rqVxBkhYbBHpyrcAwuNgvgBh3tcHS7NLwlTSjrT9SfrB7Vrw91tJB84xowvWMcRGICRK93dRoUGR3X7Nfq%2FqjNKY0vEBJtvZn1wTr1Jrhbzok2nk2KFgVPNt0pr96EqD%2BAAl5oiO3SUzEt1pSIyQ%2BLwyo2J9KV2XEVQYJdy0FmDrbRzAMY273%2FxbzklcRzXW46TlHVko3szZJLZk%2Bw73Vr07NJlSDPuNkxVkr12G7OjyXWt02ih3nZ6lbUG9uUrjW4S0DzL7wuSUtbyxRgXrUgU4U9Xli8lqgZtFvOosoDv%2FL6jytL6SQtD2hhNsFFtWWG0Hjsvp6RcMDlmrEAhDLZhMLuE98MfeTHzkETYj3FiCcZGEQ4sP%2F%2BnG%2BHK%2FV7nh8wUOIVs8Djcwe4VRDdXfkEphQHbahkQI2U2rNpy426U6eGM5Fc2kxnfmlVqP8F8yx%2BH2KDn5qrpCbprU0lL80utl4WizSrPXUTnM9bNG13yjGtRR5Q38sxS78JRfVNnIrw27DVagNd20ixAqP8IbmMR5U2kQqM9ph9XhxGCSUtBkSMibD1Jw6b6ceEjgm21S13yTpQdIj4JQfSoADFCjPWi0nxVZ2yiCCvAcwOjV8HdgOkUKtEp2VUDraYCVngOF2QtTZPLEqczMNql%2BsIGOqUBYiuN6cEtelWLRTFXv7UZJLP0gcqInVepGNIaG8tgN9dt0%2FmW5O8hl%2BsgzWrIXt16rWIQLUHjTx2%2FtS3SYQiMqgFmNnQJuboWJwT91QWad4tH2r5joU14yaB%2Bg7anC91kzjGBtKLVJ1iJTWa8Nip8dOuRIRez%2FT6sj5wRxH0%2F6XxGC%2BE5jaPqa0i8TIbxOnUQPqCvtNlNsmYNAsICStd8uTo6Ovna&X-Amz-Signature=584ab1d5acab8760c7c3adf1ba5bef261fc73089195a44e13d77de85af3a4abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNSN7FV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDHjDjU6%2B3Xrw6L2%2FSLFAN%2Bs7fbLzJa3uCUjQiESEyrXAIgJsNQvsREZd5j6ackLBtqmjiIkuGEhSQyhkOscEbmLREq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNog7rqVxBkhYbBHpyrcAwuNgvgBh3tcHS7NLwlTSjrT9SfrB7Vrw91tJB84xowvWMcRGICRK93dRoUGR3X7Nfq%2FqjNKY0vEBJtvZn1wTr1Jrhbzok2nk2KFgVPNt0pr96EqD%2BAAl5oiO3SUzEt1pSIyQ%2BLwyo2J9KV2XEVQYJdy0FmDrbRzAMY273%2FxbzklcRzXW46TlHVko3szZJLZk%2Bw73Vr07NJlSDPuNkxVkr12G7OjyXWt02ih3nZ6lbUG9uUrjW4S0DzL7wuSUtbyxRgXrUgU4U9Xli8lqgZtFvOosoDv%2FL6jytL6SQtD2hhNsFFtWWG0Hjsvp6RcMDlmrEAhDLZhMLuE98MfeTHzkETYj3FiCcZGEQ4sP%2F%2BnG%2BHK%2FV7nh8wUOIVs8Djcwe4VRDdXfkEphQHbahkQI2U2rNpy426U6eGM5Fc2kxnfmlVqP8F8yx%2BH2KDn5qrpCbprU0lL80utl4WizSrPXUTnM9bNG13yjGtRR5Q38sxS78JRfVNnIrw27DVagNd20ixAqP8IbmMR5U2kQqM9ph9XhxGCSUtBkSMibD1Jw6b6ceEjgm21S13yTpQdIj4JQfSoADFCjPWi0nxVZ2yiCCvAcwOjV8HdgOkUKtEp2VUDraYCVngOF2QtTZPLEqczMNql%2BsIGOqUBYiuN6cEtelWLRTFXv7UZJLP0gcqInVepGNIaG8tgN9dt0%2FmW5O8hl%2BsgzWrIXt16rWIQLUHjTx2%2FtS3SYQiMqgFmNnQJuboWJwT91QWad4tH2r5joU14yaB%2Bg7anC91kzjGBtKLVJ1iJTWa8Nip8dOuRIRez%2FT6sj5wRxH0%2F6XxGC%2BE5jaPqa0i8TIbxOnUQPqCvtNlNsmYNAsICStd8uTo6Ovna&X-Amz-Signature=70c52300d5694b0a246373662a7f481bfdae94b6a95e500fabbb8886084cd219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNSN7FV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDHjDjU6%2B3Xrw6L2%2FSLFAN%2Bs7fbLzJa3uCUjQiESEyrXAIgJsNQvsREZd5j6ackLBtqmjiIkuGEhSQyhkOscEbmLREq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNog7rqVxBkhYbBHpyrcAwuNgvgBh3tcHS7NLwlTSjrT9SfrB7Vrw91tJB84xowvWMcRGICRK93dRoUGR3X7Nfq%2FqjNKY0vEBJtvZn1wTr1Jrhbzok2nk2KFgVPNt0pr96EqD%2BAAl5oiO3SUzEt1pSIyQ%2BLwyo2J9KV2XEVQYJdy0FmDrbRzAMY273%2FxbzklcRzXW46TlHVko3szZJLZk%2Bw73Vr07NJlSDPuNkxVkr12G7OjyXWt02ih3nZ6lbUG9uUrjW4S0DzL7wuSUtbyxRgXrUgU4U9Xli8lqgZtFvOosoDv%2FL6jytL6SQtD2hhNsFFtWWG0Hjsvp6RcMDlmrEAhDLZhMLuE98MfeTHzkETYj3FiCcZGEQ4sP%2F%2BnG%2BHK%2FV7nh8wUOIVs8Djcwe4VRDdXfkEphQHbahkQI2U2rNpy426U6eGM5Fc2kxnfmlVqP8F8yx%2BH2KDn5qrpCbprU0lL80utl4WizSrPXUTnM9bNG13yjGtRR5Q38sxS78JRfVNnIrw27DVagNd20ixAqP8IbmMR5U2kQqM9ph9XhxGCSUtBkSMibD1Jw6b6ceEjgm21S13yTpQdIj4JQfSoADFCjPWi0nxVZ2yiCCvAcwOjV8HdgOkUKtEp2VUDraYCVngOF2QtTZPLEqczMNql%2BsIGOqUBYiuN6cEtelWLRTFXv7UZJLP0gcqInVepGNIaG8tgN9dt0%2FmW5O8hl%2BsgzWrIXt16rWIQLUHjTx2%2FtS3SYQiMqgFmNnQJuboWJwT91QWad4tH2r5joU14yaB%2Bg7anC91kzjGBtKLVJ1iJTWa8Nip8dOuRIRez%2FT6sj5wRxH0%2F6XxGC%2BE5jaPqa0i8TIbxOnUQPqCvtNlNsmYNAsICStd8uTo6Ovna&X-Amz-Signature=9e7f08b100c85f0d9240e416c0a49a635d21d137118626ec49ec95ff3a044edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNSN7FV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDHjDjU6%2B3Xrw6L2%2FSLFAN%2Bs7fbLzJa3uCUjQiESEyrXAIgJsNQvsREZd5j6ackLBtqmjiIkuGEhSQyhkOscEbmLREq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNog7rqVxBkhYbBHpyrcAwuNgvgBh3tcHS7NLwlTSjrT9SfrB7Vrw91tJB84xowvWMcRGICRK93dRoUGR3X7Nfq%2FqjNKY0vEBJtvZn1wTr1Jrhbzok2nk2KFgVPNt0pr96EqD%2BAAl5oiO3SUzEt1pSIyQ%2BLwyo2J9KV2XEVQYJdy0FmDrbRzAMY273%2FxbzklcRzXW46TlHVko3szZJLZk%2Bw73Vr07NJlSDPuNkxVkr12G7OjyXWt02ih3nZ6lbUG9uUrjW4S0DzL7wuSUtbyxRgXrUgU4U9Xli8lqgZtFvOosoDv%2FL6jytL6SQtD2hhNsFFtWWG0Hjsvp6RcMDlmrEAhDLZhMLuE98MfeTHzkETYj3FiCcZGEQ4sP%2F%2BnG%2BHK%2FV7nh8wUOIVs8Djcwe4VRDdXfkEphQHbahkQI2U2rNpy426U6eGM5Fc2kxnfmlVqP8F8yx%2BH2KDn5qrpCbprU0lL80utl4WizSrPXUTnM9bNG13yjGtRR5Q38sxS78JRfVNnIrw27DVagNd20ixAqP8IbmMR5U2kQqM9ph9XhxGCSUtBkSMibD1Jw6b6ceEjgm21S13yTpQdIj4JQfSoADFCjPWi0nxVZ2yiCCvAcwOjV8HdgOkUKtEp2VUDraYCVngOF2QtTZPLEqczMNql%2BsIGOqUBYiuN6cEtelWLRTFXv7UZJLP0gcqInVepGNIaG8tgN9dt0%2FmW5O8hl%2BsgzWrIXt16rWIQLUHjTx2%2FtS3SYQiMqgFmNnQJuboWJwT91QWad4tH2r5joU14yaB%2Bg7anC91kzjGBtKLVJ1iJTWa8Nip8dOuRIRez%2FT6sj5wRxH0%2F6XxGC%2BE5jaPqa0i8TIbxOnUQPqCvtNlNsmYNAsICStd8uTo6Ovna&X-Amz-Signature=8fecdd11114a8aa180e851aea16c52a98fdd6bdea40f88b7b868fd823ca0c0ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNSN7FV%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDHjDjU6%2B3Xrw6L2%2FSLFAN%2Bs7fbLzJa3uCUjQiESEyrXAIgJsNQvsREZd5j6ackLBtqmjiIkuGEhSQyhkOscEbmLREq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNog7rqVxBkhYbBHpyrcAwuNgvgBh3tcHS7NLwlTSjrT9SfrB7Vrw91tJB84xowvWMcRGICRK93dRoUGR3X7Nfq%2FqjNKY0vEBJtvZn1wTr1Jrhbzok2nk2KFgVPNt0pr96EqD%2BAAl5oiO3SUzEt1pSIyQ%2BLwyo2J9KV2XEVQYJdy0FmDrbRzAMY273%2FxbzklcRzXW46TlHVko3szZJLZk%2Bw73Vr07NJlSDPuNkxVkr12G7OjyXWt02ih3nZ6lbUG9uUrjW4S0DzL7wuSUtbyxRgXrUgU4U9Xli8lqgZtFvOosoDv%2FL6jytL6SQtD2hhNsFFtWWG0Hjsvp6RcMDlmrEAhDLZhMLuE98MfeTHzkETYj3FiCcZGEQ4sP%2F%2BnG%2BHK%2FV7nh8wUOIVs8Djcwe4VRDdXfkEphQHbahkQI2U2rNpy426U6eGM5Fc2kxnfmlVqP8F8yx%2BH2KDn5qrpCbprU0lL80utl4WizSrPXUTnM9bNG13yjGtRR5Q38sxS78JRfVNnIrw27DVagNd20ixAqP8IbmMR5U2kQqM9ph9XhxGCSUtBkSMibD1Jw6b6ceEjgm21S13yTpQdIj4JQfSoADFCjPWi0nxVZ2yiCCvAcwOjV8HdgOkUKtEp2VUDraYCVngOF2QtTZPLEqczMNql%2BsIGOqUBYiuN6cEtelWLRTFXv7UZJLP0gcqInVepGNIaG8tgN9dt0%2FmW5O8hl%2BsgzWrIXt16rWIQLUHjTx2%2FtS3SYQiMqgFmNnQJuboWJwT91QWad4tH2r5joU14yaB%2Bg7anC91kzjGBtKLVJ1iJTWa8Nip8dOuRIRez%2FT6sj5wRxH0%2F6XxGC%2BE5jaPqa0i8TIbxOnUQPqCvtNlNsmYNAsICStd8uTo6Ovna&X-Amz-Signature=edebe983a07f67d54e460dc11f0b6c3ba69bff9a128c8e3dd0423d6d912c9c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
