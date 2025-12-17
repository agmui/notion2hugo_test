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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAD2MY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq0pgWiDAUqCBxBRg%2BUCuhQpSska0%2FtH4CrcZllMmqsQIgAWLY7kgBUBeXU1h2aXvnt4W6wFJVGOxHdRX3hf90MRkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDB1f1x35PxNRMAL%2FPSrcA%2B963G2uZxdaJ6KyL9Vw4xrVDodG7hgr28rrY%2FrO%2BY4I3qplSuxWEOPXc%2BD%2BzHNt17SKnaXkjXmE9SkmiSWYfdB7wrlQIvSFiwGb9CWvD5Ip%2BI3QduIitLXqv97%2F0URZtpn3BmwSBadWYSD6tTisNtR1%2BDMkomo1QhIPTMkregxewuwYcNrDu5mDHB5IbHv1vcIydqSt4tambQnnpvEEsBTL%2BK659bwnHY3%2FkANiViiDm1dYSKrMi5YmsfZXBq6RPQxN6lIByRPXdC6zet8WxL0U%2Bofo%2Bbn1HTImbQnAwYAUzDYm4BM4OJiCkuNwD1XN8z4B6HQPBk13PzMktvFiT%2FwZuzwF%2Ff8Pb05%2Fj%2BpaAse1VzSiYEO%2Blb20dtXg7JzdzL2gJbCJ9zdHdM0YLa3niiP8FQFFRv8tNedefx7oELUY71mOii4wL0KUx6d0LEuEWklmW3Q0k8wY%2BRTXy3S8M%2BV%2BDE18MfsyQZY1n%2Bmstdv8bnZo4FQqigCnOeDFZiu2sZfePpWQuHsOBuHM5E7u9CEbwwa52b5ElGP3TWwOIdW0c3fNEP1FIx4wfF3Do4AlJ1SqrtZYOz1xbcZaB4SvMZFh8PZVtYBUPZ2ctXNxR9Rb%2FOaQnBh2i%2F3vmjuCMKj6h8oGOqUBi65WGSRRoja0cx8O9Qvw20YKzJCEI0rgwwZDbse6H25Bf3wmuDyOrY3hmdFKQIO6mCqaYlH6tXN7L00Yc7wMSDrX6xGihn%2B1wHfjhVCWQnBckyWrIwk8Q%2FppaQEW9fgkXoIP7RAykG4YKFHjcYk%2Fdi12C1L44R7fJelvNR5M7F2Mcd%2Bzx8IV0cGZb%2FbgfcZ%2BbH79t9Yd%2B%2BfLa4piw0o1nixfAn4n&X-Amz-Signature=212d59bdf76513e8ee717e807ebf6db18e3de81ce9fe7031991dd87fae004d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAD2MY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq0pgWiDAUqCBxBRg%2BUCuhQpSska0%2FtH4CrcZllMmqsQIgAWLY7kgBUBeXU1h2aXvnt4W6wFJVGOxHdRX3hf90MRkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDB1f1x35PxNRMAL%2FPSrcA%2B963G2uZxdaJ6KyL9Vw4xrVDodG7hgr28rrY%2FrO%2BY4I3qplSuxWEOPXc%2BD%2BzHNt17SKnaXkjXmE9SkmiSWYfdB7wrlQIvSFiwGb9CWvD5Ip%2BI3QduIitLXqv97%2F0URZtpn3BmwSBadWYSD6tTisNtR1%2BDMkomo1QhIPTMkregxewuwYcNrDu5mDHB5IbHv1vcIydqSt4tambQnnpvEEsBTL%2BK659bwnHY3%2FkANiViiDm1dYSKrMi5YmsfZXBq6RPQxN6lIByRPXdC6zet8WxL0U%2Bofo%2Bbn1HTImbQnAwYAUzDYm4BM4OJiCkuNwD1XN8z4B6HQPBk13PzMktvFiT%2FwZuzwF%2Ff8Pb05%2Fj%2BpaAse1VzSiYEO%2Blb20dtXg7JzdzL2gJbCJ9zdHdM0YLa3niiP8FQFFRv8tNedefx7oELUY71mOii4wL0KUx6d0LEuEWklmW3Q0k8wY%2BRTXy3S8M%2BV%2BDE18MfsyQZY1n%2Bmstdv8bnZo4FQqigCnOeDFZiu2sZfePpWQuHsOBuHM5E7u9CEbwwa52b5ElGP3TWwOIdW0c3fNEP1FIx4wfF3Do4AlJ1SqrtZYOz1xbcZaB4SvMZFh8PZVtYBUPZ2ctXNxR9Rb%2FOaQnBh2i%2F3vmjuCMKj6h8oGOqUBi65WGSRRoja0cx8O9Qvw20YKzJCEI0rgwwZDbse6H25Bf3wmuDyOrY3hmdFKQIO6mCqaYlH6tXN7L00Yc7wMSDrX6xGihn%2B1wHfjhVCWQnBckyWrIwk8Q%2FppaQEW9fgkXoIP7RAykG4YKFHjcYk%2Fdi12C1L44R7fJelvNR5M7F2Mcd%2Bzx8IV0cGZb%2FbgfcZ%2BbH79t9Yd%2B%2BfLa4piw0o1nixfAn4n&X-Amz-Signature=2a53cca8c7a18cb5e558678b26512f07fd42d56ebf4cd4b0f4e374ecf5ba95c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAD2MY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq0pgWiDAUqCBxBRg%2BUCuhQpSska0%2FtH4CrcZllMmqsQIgAWLY7kgBUBeXU1h2aXvnt4W6wFJVGOxHdRX3hf90MRkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDB1f1x35PxNRMAL%2FPSrcA%2B963G2uZxdaJ6KyL9Vw4xrVDodG7hgr28rrY%2FrO%2BY4I3qplSuxWEOPXc%2BD%2BzHNt17SKnaXkjXmE9SkmiSWYfdB7wrlQIvSFiwGb9CWvD5Ip%2BI3QduIitLXqv97%2F0URZtpn3BmwSBadWYSD6tTisNtR1%2BDMkomo1QhIPTMkregxewuwYcNrDu5mDHB5IbHv1vcIydqSt4tambQnnpvEEsBTL%2BK659bwnHY3%2FkANiViiDm1dYSKrMi5YmsfZXBq6RPQxN6lIByRPXdC6zet8WxL0U%2Bofo%2Bbn1HTImbQnAwYAUzDYm4BM4OJiCkuNwD1XN8z4B6HQPBk13PzMktvFiT%2FwZuzwF%2Ff8Pb05%2Fj%2BpaAse1VzSiYEO%2Blb20dtXg7JzdzL2gJbCJ9zdHdM0YLa3niiP8FQFFRv8tNedefx7oELUY71mOii4wL0KUx6d0LEuEWklmW3Q0k8wY%2BRTXy3S8M%2BV%2BDE18MfsyQZY1n%2Bmstdv8bnZo4FQqigCnOeDFZiu2sZfePpWQuHsOBuHM5E7u9CEbwwa52b5ElGP3TWwOIdW0c3fNEP1FIx4wfF3Do4AlJ1SqrtZYOz1xbcZaB4SvMZFh8PZVtYBUPZ2ctXNxR9Rb%2FOaQnBh2i%2F3vmjuCMKj6h8oGOqUBi65WGSRRoja0cx8O9Qvw20YKzJCEI0rgwwZDbse6H25Bf3wmuDyOrY3hmdFKQIO6mCqaYlH6tXN7L00Yc7wMSDrX6xGihn%2B1wHfjhVCWQnBckyWrIwk8Q%2FppaQEW9fgkXoIP7RAykG4YKFHjcYk%2Fdi12C1L44R7fJelvNR5M7F2Mcd%2Bzx8IV0cGZb%2FbgfcZ%2BbH79t9Yd%2B%2BfLa4piw0o1nixfAn4n&X-Amz-Signature=6eefb268f50321aa512d1ff40006d59df9774cea89ce622c7a06dd63a2dc9ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAD2MY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq0pgWiDAUqCBxBRg%2BUCuhQpSska0%2FtH4CrcZllMmqsQIgAWLY7kgBUBeXU1h2aXvnt4W6wFJVGOxHdRX3hf90MRkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDB1f1x35PxNRMAL%2FPSrcA%2B963G2uZxdaJ6KyL9Vw4xrVDodG7hgr28rrY%2FrO%2BY4I3qplSuxWEOPXc%2BD%2BzHNt17SKnaXkjXmE9SkmiSWYfdB7wrlQIvSFiwGb9CWvD5Ip%2BI3QduIitLXqv97%2F0URZtpn3BmwSBadWYSD6tTisNtR1%2BDMkomo1QhIPTMkregxewuwYcNrDu5mDHB5IbHv1vcIydqSt4tambQnnpvEEsBTL%2BK659bwnHY3%2FkANiViiDm1dYSKrMi5YmsfZXBq6RPQxN6lIByRPXdC6zet8WxL0U%2Bofo%2Bbn1HTImbQnAwYAUzDYm4BM4OJiCkuNwD1XN8z4B6HQPBk13PzMktvFiT%2FwZuzwF%2Ff8Pb05%2Fj%2BpaAse1VzSiYEO%2Blb20dtXg7JzdzL2gJbCJ9zdHdM0YLa3niiP8FQFFRv8tNedefx7oELUY71mOii4wL0KUx6d0LEuEWklmW3Q0k8wY%2BRTXy3S8M%2BV%2BDE18MfsyQZY1n%2Bmstdv8bnZo4FQqigCnOeDFZiu2sZfePpWQuHsOBuHM5E7u9CEbwwa52b5ElGP3TWwOIdW0c3fNEP1FIx4wfF3Do4AlJ1SqrtZYOz1xbcZaB4SvMZFh8PZVtYBUPZ2ctXNxR9Rb%2FOaQnBh2i%2F3vmjuCMKj6h8oGOqUBi65WGSRRoja0cx8O9Qvw20YKzJCEI0rgwwZDbse6H25Bf3wmuDyOrY3hmdFKQIO6mCqaYlH6tXN7L00Yc7wMSDrX6xGihn%2B1wHfjhVCWQnBckyWrIwk8Q%2FppaQEW9fgkXoIP7RAykG4YKFHjcYk%2Fdi12C1L44R7fJelvNR5M7F2Mcd%2Bzx8IV0cGZb%2FbgfcZ%2BbH79t9Yd%2B%2BfLa4piw0o1nixfAn4n&X-Amz-Signature=5c2fb4e964aac4b1d5180c6147639c0139e6b2791fa5f6c9dce9ebcdedacb80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAD2MY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq0pgWiDAUqCBxBRg%2BUCuhQpSska0%2FtH4CrcZllMmqsQIgAWLY7kgBUBeXU1h2aXvnt4W6wFJVGOxHdRX3hf90MRkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDB1f1x35PxNRMAL%2FPSrcA%2B963G2uZxdaJ6KyL9Vw4xrVDodG7hgr28rrY%2FrO%2BY4I3qplSuxWEOPXc%2BD%2BzHNt17SKnaXkjXmE9SkmiSWYfdB7wrlQIvSFiwGb9CWvD5Ip%2BI3QduIitLXqv97%2F0URZtpn3BmwSBadWYSD6tTisNtR1%2BDMkomo1QhIPTMkregxewuwYcNrDu5mDHB5IbHv1vcIydqSt4tambQnnpvEEsBTL%2BK659bwnHY3%2FkANiViiDm1dYSKrMi5YmsfZXBq6RPQxN6lIByRPXdC6zet8WxL0U%2Bofo%2Bbn1HTImbQnAwYAUzDYm4BM4OJiCkuNwD1XN8z4B6HQPBk13PzMktvFiT%2FwZuzwF%2Ff8Pb05%2Fj%2BpaAse1VzSiYEO%2Blb20dtXg7JzdzL2gJbCJ9zdHdM0YLa3niiP8FQFFRv8tNedefx7oELUY71mOii4wL0KUx6d0LEuEWklmW3Q0k8wY%2BRTXy3S8M%2BV%2BDE18MfsyQZY1n%2Bmstdv8bnZo4FQqigCnOeDFZiu2sZfePpWQuHsOBuHM5E7u9CEbwwa52b5ElGP3TWwOIdW0c3fNEP1FIx4wfF3Do4AlJ1SqrtZYOz1xbcZaB4SvMZFh8PZVtYBUPZ2ctXNxR9Rb%2FOaQnBh2i%2F3vmjuCMKj6h8oGOqUBi65WGSRRoja0cx8O9Qvw20YKzJCEI0rgwwZDbse6H25Bf3wmuDyOrY3hmdFKQIO6mCqaYlH6tXN7L00Yc7wMSDrX6xGihn%2B1wHfjhVCWQnBckyWrIwk8Q%2FppaQEW9fgkXoIP7RAykG4YKFHjcYk%2Fdi12C1L44R7fJelvNR5M7F2Mcd%2Bzx8IV0cGZb%2FbgfcZ%2BbH79t9Yd%2B%2BfLa4piw0o1nixfAn4n&X-Amz-Signature=4db4eaaedbd8180e6d60d588d6afb7a01c43f88d5adacff3082fd19b6d689ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAD2MY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq0pgWiDAUqCBxBRg%2BUCuhQpSska0%2FtH4CrcZllMmqsQIgAWLY7kgBUBeXU1h2aXvnt4W6wFJVGOxHdRX3hf90MRkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDB1f1x35PxNRMAL%2FPSrcA%2B963G2uZxdaJ6KyL9Vw4xrVDodG7hgr28rrY%2FrO%2BY4I3qplSuxWEOPXc%2BD%2BzHNt17SKnaXkjXmE9SkmiSWYfdB7wrlQIvSFiwGb9CWvD5Ip%2BI3QduIitLXqv97%2F0URZtpn3BmwSBadWYSD6tTisNtR1%2BDMkomo1QhIPTMkregxewuwYcNrDu5mDHB5IbHv1vcIydqSt4tambQnnpvEEsBTL%2BK659bwnHY3%2FkANiViiDm1dYSKrMi5YmsfZXBq6RPQxN6lIByRPXdC6zet8WxL0U%2Bofo%2Bbn1HTImbQnAwYAUzDYm4BM4OJiCkuNwD1XN8z4B6HQPBk13PzMktvFiT%2FwZuzwF%2Ff8Pb05%2Fj%2BpaAse1VzSiYEO%2Blb20dtXg7JzdzL2gJbCJ9zdHdM0YLa3niiP8FQFFRv8tNedefx7oELUY71mOii4wL0KUx6d0LEuEWklmW3Q0k8wY%2BRTXy3S8M%2BV%2BDE18MfsyQZY1n%2Bmstdv8bnZo4FQqigCnOeDFZiu2sZfePpWQuHsOBuHM5E7u9CEbwwa52b5ElGP3TWwOIdW0c3fNEP1FIx4wfF3Do4AlJ1SqrtZYOz1xbcZaB4SvMZFh8PZVtYBUPZ2ctXNxR9Rb%2FOaQnBh2i%2F3vmjuCMKj6h8oGOqUBi65WGSRRoja0cx8O9Qvw20YKzJCEI0rgwwZDbse6H25Bf3wmuDyOrY3hmdFKQIO6mCqaYlH6tXN7L00Yc7wMSDrX6xGihn%2B1wHfjhVCWQnBckyWrIwk8Q%2FppaQEW9fgkXoIP7RAykG4YKFHjcYk%2Fdi12C1L44R7fJelvNR5M7F2Mcd%2Bzx8IV0cGZb%2FbgfcZ%2BbH79t9Yd%2B%2BfLa4piw0o1nixfAn4n&X-Amz-Signature=1df701876bf55e49fbd49023b526d345b39624d2d6770a10a722b04737a55897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RAD2MY4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq0pgWiDAUqCBxBRg%2BUCuhQpSska0%2FtH4CrcZllMmqsQIgAWLY7kgBUBeXU1h2aXvnt4W6wFJVGOxHdRX3hf90MRkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDB1f1x35PxNRMAL%2FPSrcA%2B963G2uZxdaJ6KyL9Vw4xrVDodG7hgr28rrY%2FrO%2BY4I3qplSuxWEOPXc%2BD%2BzHNt17SKnaXkjXmE9SkmiSWYfdB7wrlQIvSFiwGb9CWvD5Ip%2BI3QduIitLXqv97%2F0URZtpn3BmwSBadWYSD6tTisNtR1%2BDMkomo1QhIPTMkregxewuwYcNrDu5mDHB5IbHv1vcIydqSt4tambQnnpvEEsBTL%2BK659bwnHY3%2FkANiViiDm1dYSKrMi5YmsfZXBq6RPQxN6lIByRPXdC6zet8WxL0U%2Bofo%2Bbn1HTImbQnAwYAUzDYm4BM4OJiCkuNwD1XN8z4B6HQPBk13PzMktvFiT%2FwZuzwF%2Ff8Pb05%2Fj%2BpaAse1VzSiYEO%2Blb20dtXg7JzdzL2gJbCJ9zdHdM0YLa3niiP8FQFFRv8tNedefx7oELUY71mOii4wL0KUx6d0LEuEWklmW3Q0k8wY%2BRTXy3S8M%2BV%2BDE18MfsyQZY1n%2Bmstdv8bnZo4FQqigCnOeDFZiu2sZfePpWQuHsOBuHM5E7u9CEbwwa52b5ElGP3TWwOIdW0c3fNEP1FIx4wfF3Do4AlJ1SqrtZYOz1xbcZaB4SvMZFh8PZVtYBUPZ2ctXNxR9Rb%2FOaQnBh2i%2F3vmjuCMKj6h8oGOqUBi65WGSRRoja0cx8O9Qvw20YKzJCEI0rgwwZDbse6H25Bf3wmuDyOrY3hmdFKQIO6mCqaYlH6tXN7L00Yc7wMSDrX6xGihn%2B1wHfjhVCWQnBckyWrIwk8Q%2FppaQEW9fgkXoIP7RAykG4YKFHjcYk%2Fdi12C1L44R7fJelvNR5M7F2Mcd%2Bzx8IV0cGZb%2FbgfcZ%2BbH79t9Yd%2B%2BfLa4piw0o1nixfAn4n&X-Amz-Signature=7e0e5d95c1f33383aeed6c15720f3915a739b8a858abe844c5398a188ff526d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
