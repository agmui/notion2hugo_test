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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBVAJ4Y%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNipsWdbiBxM9WvCSFMIUO2%2Bneawnsf1e%2Fr82dt3TjJAIhAJ%2FcOEo9afO%2B6Me%2FUPoIR6Yhya4x9uQhjmVI3BzU822yKv8DCBgQABoMNjM3NDIzMTgzODA1Igw%2BZevQMT4uXvYHr9kq3APvLlOye5JOTyKtYVi06i18AIdblJq41st4T0ko3X9d8LA09M6OBTAC18eQdyFTc2BJcmzYhbhLBlsYCsNv1%2F8UGaE1wseRSEqGOPlENg1amEgoswtjOF6mUeGGxOvfuim9Qxb3rctTNpWoFQjFFw%2FkJuEzdaXvFCDYaGv16mVN0kNXhuHOcA5CbAKpvFN%2Bt23elhhWHc0YHaJgnohR7lCIRVOIL%2FMnUK7CikcwQJlCReSEv6bCx9%2F6twIRwKOo7Lhd9eNttWazWggCKSgkgt7vOj1P%2Fo6OsgYlyyJU97Wun0w9wFRUnpTMrF6UmaOqY94rTOXMdy%2Fl5umQDSBgLChct2C7H9BxbaJBgqT1kXLCKlb0SYyZdIhdbN6sIz%2BlHxMfRxgjYlDIcrGMnr3yjCOPsEfy8%2B%2FAdOS%2BXDf5Iw%2FwAfuS%2F5XMJTc39YcCQglzsrKBHwIAcoajF5ZQKZWSFJoWcGtfa%2FmaOcl2bSBVpEJkOcCeu2t8ahIwfpqnNmbZpwLSWgxmKKE%2Fby4hfHyWx4SkpxGlGP1HXjXZyCTyPxTrYD4yd506fetiS70QYoxIfrHugxonb0fa6BWFzLdnXpRWvGBaVQj8eI4Y3TwCjxENq0C3eyW80Vc%2F03N%2FbTDQhYu%2FBjqkAXjwRBmyuatgwRAJMWKQ%2FDiF88j2UZUx%2F%2F2zrA%2BH2Sqry31hp8LkdaiYiw%2FGuFE7sCc842Mfj1YOc3HrRnVEWl%2FbW4FW5zsYPVwuvhThE4Syh1JnYW9eGenQyVn6s9D4WsqjyXc%2ByVi0ebHJJKWWV7JtSvtbpr8ZKSDqJwe6ScY6GrBkTegwSeRMo8mTr1ngR8QMTyhDiBbaDJhk6m8AOE0JdE7w&X-Amz-Signature=cbb75f98cea9d585cab07059588cc0d1e8ef800b2ab7252710ad56ba365ea86c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBVAJ4Y%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNipsWdbiBxM9WvCSFMIUO2%2Bneawnsf1e%2Fr82dt3TjJAIhAJ%2FcOEo9afO%2B6Me%2FUPoIR6Yhya4x9uQhjmVI3BzU822yKv8DCBgQABoMNjM3NDIzMTgzODA1Igw%2BZevQMT4uXvYHr9kq3APvLlOye5JOTyKtYVi06i18AIdblJq41st4T0ko3X9d8LA09M6OBTAC18eQdyFTc2BJcmzYhbhLBlsYCsNv1%2F8UGaE1wseRSEqGOPlENg1amEgoswtjOF6mUeGGxOvfuim9Qxb3rctTNpWoFQjFFw%2FkJuEzdaXvFCDYaGv16mVN0kNXhuHOcA5CbAKpvFN%2Bt23elhhWHc0YHaJgnohR7lCIRVOIL%2FMnUK7CikcwQJlCReSEv6bCx9%2F6twIRwKOo7Lhd9eNttWazWggCKSgkgt7vOj1P%2Fo6OsgYlyyJU97Wun0w9wFRUnpTMrF6UmaOqY94rTOXMdy%2Fl5umQDSBgLChct2C7H9BxbaJBgqT1kXLCKlb0SYyZdIhdbN6sIz%2BlHxMfRxgjYlDIcrGMnr3yjCOPsEfy8%2B%2FAdOS%2BXDf5Iw%2FwAfuS%2F5XMJTc39YcCQglzsrKBHwIAcoajF5ZQKZWSFJoWcGtfa%2FmaOcl2bSBVpEJkOcCeu2t8ahIwfpqnNmbZpwLSWgxmKKE%2Fby4hfHyWx4SkpxGlGP1HXjXZyCTyPxTrYD4yd506fetiS70QYoxIfrHugxonb0fa6BWFzLdnXpRWvGBaVQj8eI4Y3TwCjxENq0C3eyW80Vc%2F03N%2FbTDQhYu%2FBjqkAXjwRBmyuatgwRAJMWKQ%2FDiF88j2UZUx%2F%2F2zrA%2BH2Sqry31hp8LkdaiYiw%2FGuFE7sCc842Mfj1YOc3HrRnVEWl%2FbW4FW5zsYPVwuvhThE4Syh1JnYW9eGenQyVn6s9D4WsqjyXc%2ByVi0ebHJJKWWV7JtSvtbpr8ZKSDqJwe6ScY6GrBkTegwSeRMo8mTr1ngR8QMTyhDiBbaDJhk6m8AOE0JdE7w&X-Amz-Signature=dbe86a39912c2da0e930b3c7e98bac9e59d7c1749c845c8cff75f10acfff4ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBVAJ4Y%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNipsWdbiBxM9WvCSFMIUO2%2Bneawnsf1e%2Fr82dt3TjJAIhAJ%2FcOEo9afO%2B6Me%2FUPoIR6Yhya4x9uQhjmVI3BzU822yKv8DCBgQABoMNjM3NDIzMTgzODA1Igw%2BZevQMT4uXvYHr9kq3APvLlOye5JOTyKtYVi06i18AIdblJq41st4T0ko3X9d8LA09M6OBTAC18eQdyFTc2BJcmzYhbhLBlsYCsNv1%2F8UGaE1wseRSEqGOPlENg1amEgoswtjOF6mUeGGxOvfuim9Qxb3rctTNpWoFQjFFw%2FkJuEzdaXvFCDYaGv16mVN0kNXhuHOcA5CbAKpvFN%2Bt23elhhWHc0YHaJgnohR7lCIRVOIL%2FMnUK7CikcwQJlCReSEv6bCx9%2F6twIRwKOo7Lhd9eNttWazWggCKSgkgt7vOj1P%2Fo6OsgYlyyJU97Wun0w9wFRUnpTMrF6UmaOqY94rTOXMdy%2Fl5umQDSBgLChct2C7H9BxbaJBgqT1kXLCKlb0SYyZdIhdbN6sIz%2BlHxMfRxgjYlDIcrGMnr3yjCOPsEfy8%2B%2FAdOS%2BXDf5Iw%2FwAfuS%2F5XMJTc39YcCQglzsrKBHwIAcoajF5ZQKZWSFJoWcGtfa%2FmaOcl2bSBVpEJkOcCeu2t8ahIwfpqnNmbZpwLSWgxmKKE%2Fby4hfHyWx4SkpxGlGP1HXjXZyCTyPxTrYD4yd506fetiS70QYoxIfrHugxonb0fa6BWFzLdnXpRWvGBaVQj8eI4Y3TwCjxENq0C3eyW80Vc%2F03N%2FbTDQhYu%2FBjqkAXjwRBmyuatgwRAJMWKQ%2FDiF88j2UZUx%2F%2F2zrA%2BH2Sqry31hp8LkdaiYiw%2FGuFE7sCc842Mfj1YOc3HrRnVEWl%2FbW4FW5zsYPVwuvhThE4Syh1JnYW9eGenQyVn6s9D4WsqjyXc%2ByVi0ebHJJKWWV7JtSvtbpr8ZKSDqJwe6ScY6GrBkTegwSeRMo8mTr1ngR8QMTyhDiBbaDJhk6m8AOE0JdE7w&X-Amz-Signature=b0ec2d4353dfb95db4d874d86473bd9560232556d97799ea7aa12d6b22ea5161&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBVAJ4Y%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNipsWdbiBxM9WvCSFMIUO2%2Bneawnsf1e%2Fr82dt3TjJAIhAJ%2FcOEo9afO%2B6Me%2FUPoIR6Yhya4x9uQhjmVI3BzU822yKv8DCBgQABoMNjM3NDIzMTgzODA1Igw%2BZevQMT4uXvYHr9kq3APvLlOye5JOTyKtYVi06i18AIdblJq41st4T0ko3X9d8LA09M6OBTAC18eQdyFTc2BJcmzYhbhLBlsYCsNv1%2F8UGaE1wseRSEqGOPlENg1amEgoswtjOF6mUeGGxOvfuim9Qxb3rctTNpWoFQjFFw%2FkJuEzdaXvFCDYaGv16mVN0kNXhuHOcA5CbAKpvFN%2Bt23elhhWHc0YHaJgnohR7lCIRVOIL%2FMnUK7CikcwQJlCReSEv6bCx9%2F6twIRwKOo7Lhd9eNttWazWggCKSgkgt7vOj1P%2Fo6OsgYlyyJU97Wun0w9wFRUnpTMrF6UmaOqY94rTOXMdy%2Fl5umQDSBgLChct2C7H9BxbaJBgqT1kXLCKlb0SYyZdIhdbN6sIz%2BlHxMfRxgjYlDIcrGMnr3yjCOPsEfy8%2B%2FAdOS%2BXDf5Iw%2FwAfuS%2F5XMJTc39YcCQglzsrKBHwIAcoajF5ZQKZWSFJoWcGtfa%2FmaOcl2bSBVpEJkOcCeu2t8ahIwfpqnNmbZpwLSWgxmKKE%2Fby4hfHyWx4SkpxGlGP1HXjXZyCTyPxTrYD4yd506fetiS70QYoxIfrHugxonb0fa6BWFzLdnXpRWvGBaVQj8eI4Y3TwCjxENq0C3eyW80Vc%2F03N%2FbTDQhYu%2FBjqkAXjwRBmyuatgwRAJMWKQ%2FDiF88j2UZUx%2F%2F2zrA%2BH2Sqry31hp8LkdaiYiw%2FGuFE7sCc842Mfj1YOc3HrRnVEWl%2FbW4FW5zsYPVwuvhThE4Syh1JnYW9eGenQyVn6s9D4WsqjyXc%2ByVi0ebHJJKWWV7JtSvtbpr8ZKSDqJwe6ScY6GrBkTegwSeRMo8mTr1ngR8QMTyhDiBbaDJhk6m8AOE0JdE7w&X-Amz-Signature=3628b396f401a55cbdc3f3048488e1dc07cb78e3e67b27af4d500693d6d3c1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBVAJ4Y%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNipsWdbiBxM9WvCSFMIUO2%2Bneawnsf1e%2Fr82dt3TjJAIhAJ%2FcOEo9afO%2B6Me%2FUPoIR6Yhya4x9uQhjmVI3BzU822yKv8DCBgQABoMNjM3NDIzMTgzODA1Igw%2BZevQMT4uXvYHr9kq3APvLlOye5JOTyKtYVi06i18AIdblJq41st4T0ko3X9d8LA09M6OBTAC18eQdyFTc2BJcmzYhbhLBlsYCsNv1%2F8UGaE1wseRSEqGOPlENg1amEgoswtjOF6mUeGGxOvfuim9Qxb3rctTNpWoFQjFFw%2FkJuEzdaXvFCDYaGv16mVN0kNXhuHOcA5CbAKpvFN%2Bt23elhhWHc0YHaJgnohR7lCIRVOIL%2FMnUK7CikcwQJlCReSEv6bCx9%2F6twIRwKOo7Lhd9eNttWazWggCKSgkgt7vOj1P%2Fo6OsgYlyyJU97Wun0w9wFRUnpTMrF6UmaOqY94rTOXMdy%2Fl5umQDSBgLChct2C7H9BxbaJBgqT1kXLCKlb0SYyZdIhdbN6sIz%2BlHxMfRxgjYlDIcrGMnr3yjCOPsEfy8%2B%2FAdOS%2BXDf5Iw%2FwAfuS%2F5XMJTc39YcCQglzsrKBHwIAcoajF5ZQKZWSFJoWcGtfa%2FmaOcl2bSBVpEJkOcCeu2t8ahIwfpqnNmbZpwLSWgxmKKE%2Fby4hfHyWx4SkpxGlGP1HXjXZyCTyPxTrYD4yd506fetiS70QYoxIfrHugxonb0fa6BWFzLdnXpRWvGBaVQj8eI4Y3TwCjxENq0C3eyW80Vc%2F03N%2FbTDQhYu%2FBjqkAXjwRBmyuatgwRAJMWKQ%2FDiF88j2UZUx%2F%2F2zrA%2BH2Sqry31hp8LkdaiYiw%2FGuFE7sCc842Mfj1YOc3HrRnVEWl%2FbW4FW5zsYPVwuvhThE4Syh1JnYW9eGenQyVn6s9D4WsqjyXc%2ByVi0ebHJJKWWV7JtSvtbpr8ZKSDqJwe6ScY6GrBkTegwSeRMo8mTr1ngR8QMTyhDiBbaDJhk6m8AOE0JdE7w&X-Amz-Signature=ad6fab9968f1d0e98f8c69936e6426d07870c3fa299529ff9ea17fe6f9079b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBVAJ4Y%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNipsWdbiBxM9WvCSFMIUO2%2Bneawnsf1e%2Fr82dt3TjJAIhAJ%2FcOEo9afO%2B6Me%2FUPoIR6Yhya4x9uQhjmVI3BzU822yKv8DCBgQABoMNjM3NDIzMTgzODA1Igw%2BZevQMT4uXvYHr9kq3APvLlOye5JOTyKtYVi06i18AIdblJq41st4T0ko3X9d8LA09M6OBTAC18eQdyFTc2BJcmzYhbhLBlsYCsNv1%2F8UGaE1wseRSEqGOPlENg1amEgoswtjOF6mUeGGxOvfuim9Qxb3rctTNpWoFQjFFw%2FkJuEzdaXvFCDYaGv16mVN0kNXhuHOcA5CbAKpvFN%2Bt23elhhWHc0YHaJgnohR7lCIRVOIL%2FMnUK7CikcwQJlCReSEv6bCx9%2F6twIRwKOo7Lhd9eNttWazWggCKSgkgt7vOj1P%2Fo6OsgYlyyJU97Wun0w9wFRUnpTMrF6UmaOqY94rTOXMdy%2Fl5umQDSBgLChct2C7H9BxbaJBgqT1kXLCKlb0SYyZdIhdbN6sIz%2BlHxMfRxgjYlDIcrGMnr3yjCOPsEfy8%2B%2FAdOS%2BXDf5Iw%2FwAfuS%2F5XMJTc39YcCQglzsrKBHwIAcoajF5ZQKZWSFJoWcGtfa%2FmaOcl2bSBVpEJkOcCeu2t8ahIwfpqnNmbZpwLSWgxmKKE%2Fby4hfHyWx4SkpxGlGP1HXjXZyCTyPxTrYD4yd506fetiS70QYoxIfrHugxonb0fa6BWFzLdnXpRWvGBaVQj8eI4Y3TwCjxENq0C3eyW80Vc%2F03N%2FbTDQhYu%2FBjqkAXjwRBmyuatgwRAJMWKQ%2FDiF88j2UZUx%2F%2F2zrA%2BH2Sqry31hp8LkdaiYiw%2FGuFE7sCc842Mfj1YOc3HrRnVEWl%2FbW4FW5zsYPVwuvhThE4Syh1JnYW9eGenQyVn6s9D4WsqjyXc%2ByVi0ebHJJKWWV7JtSvtbpr8ZKSDqJwe6ScY6GrBkTegwSeRMo8mTr1ngR8QMTyhDiBbaDJhk6m8AOE0JdE7w&X-Amz-Signature=8876a7cfe4c43ef6962fc64847054e31a44c5bb16b95ffeb78c3b011926782ad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THBVAJ4Y%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNipsWdbiBxM9WvCSFMIUO2%2Bneawnsf1e%2Fr82dt3TjJAIhAJ%2FcOEo9afO%2B6Me%2FUPoIR6Yhya4x9uQhjmVI3BzU822yKv8DCBgQABoMNjM3NDIzMTgzODA1Igw%2BZevQMT4uXvYHr9kq3APvLlOye5JOTyKtYVi06i18AIdblJq41st4T0ko3X9d8LA09M6OBTAC18eQdyFTc2BJcmzYhbhLBlsYCsNv1%2F8UGaE1wseRSEqGOPlENg1amEgoswtjOF6mUeGGxOvfuim9Qxb3rctTNpWoFQjFFw%2FkJuEzdaXvFCDYaGv16mVN0kNXhuHOcA5CbAKpvFN%2Bt23elhhWHc0YHaJgnohR7lCIRVOIL%2FMnUK7CikcwQJlCReSEv6bCx9%2F6twIRwKOo7Lhd9eNttWazWggCKSgkgt7vOj1P%2Fo6OsgYlyyJU97Wun0w9wFRUnpTMrF6UmaOqY94rTOXMdy%2Fl5umQDSBgLChct2C7H9BxbaJBgqT1kXLCKlb0SYyZdIhdbN6sIz%2BlHxMfRxgjYlDIcrGMnr3yjCOPsEfy8%2B%2FAdOS%2BXDf5Iw%2FwAfuS%2F5XMJTc39YcCQglzsrKBHwIAcoajF5ZQKZWSFJoWcGtfa%2FmaOcl2bSBVpEJkOcCeu2t8ahIwfpqnNmbZpwLSWgxmKKE%2Fby4hfHyWx4SkpxGlGP1HXjXZyCTyPxTrYD4yd506fetiS70QYoxIfrHugxonb0fa6BWFzLdnXpRWvGBaVQj8eI4Y3TwCjxENq0C3eyW80Vc%2F03N%2FbTDQhYu%2FBjqkAXjwRBmyuatgwRAJMWKQ%2FDiF88j2UZUx%2F%2F2zrA%2BH2Sqry31hp8LkdaiYiw%2FGuFE7sCc842Mfj1YOc3HrRnVEWl%2FbW4FW5zsYPVwuvhThE4Syh1JnYW9eGenQyVn6s9D4WsqjyXc%2ByVi0ebHJJKWWV7JtSvtbpr8ZKSDqJwe6ScY6GrBkTegwSeRMo8mTr1ngR8QMTyhDiBbaDJhk6m8AOE0JdE7w&X-Amz-Signature=d8fad2f4e455b02cb4f95579eb24f3c41fcee8c20af78fb284d233ca0f8b1fd7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
