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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHKKKHF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBwiUIumy1yRu3sfaGVhDLg9Ew4iXIM%2FYlPwxpldNmpAiEAip9P95i2Oickz%2BbgfZzlrJ9ukQVoWserFBxgcbMqdrkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOK7Ja7FH0SiwiNyNSrcA0KgypdDbEnQfOQbb4nrCaXjKlA12AlsGcnKjJttdSKUJ6xbUr9SW9KuEQcKm49rtaWygjMSO1OuRfbrBqj9rVOw3pwYO%2B5RO0hH3nP6SZX%2FtduGvcF1TY9kHkiUwI%2BNK5YadbB0Pcqvn7x8Gr5fzHDw%2FQERQzdlCTKu4ORPlGkFUCKNfdOYedCvYqqS2BRiOfaijmhbNycFgSfFGpX36hUFC2yZX9ISfT2Vb1nuB%2BJBWOcmoUdLsklKgPhmald3Ev0PR6iPWGQcnMIOmYQCAVVErL8Di%2BOSoRT6tj%2B8VJk68OWBbtNMsbowlueJ6oynzkWFZag%2BLMR0tY3yb1svAop6qnKz60kKsdIwqeI2omR6lgzZxAgrF1sbVDHsDgLzmFX4oNlfVD8T8JPk9mLi26yk8twEY30090tpglO6pZ4Iy8msT4g%2FuqfH%2BKFJjDiYrg0Iu0gKc8WFqF4gtYI46yKNNeP9R%2F5N3v5zRNBL25QJH4rMiuGxpNCaYU9%2F1xlTXO7RITO73OVcqv6hOK3a%2FW7ccAbt5unxnb8mq3aax7NU%2FDN%2FXmnPu0YO6HYhRc8PQabKfyVWH2rtzqwcrOKg204nN8i%2F6m0xZAQI%2F%2FP%2FcukxJSL12eyTSIgwfNxpMInl4sAGOqUBZ87G3yoGo4IlkXySawzVJ4ZZOsDD4Ho009%2Ff83CM8mHKp%2BF1VBHsmPqc3wzTWzRISOjaefgZ5Kvnf3yv4Rr3JnTUKwIVolcGh6H0jg1LyAFCkXsXCCqLobrE%2Faa9%2BHf2WIDPIclyWeljTm8lvpewwB1fF6Nq0SgjrMLbOK9vPToK3FzRMltosaXicXGBNq%2Bt50w%2Fk9r8tg5PimqeBbhjB3KdO5eL&X-Amz-Signature=15e241e3ad36520e402c454b9e190ffcf363041a75120d6b7fd95d3eaadc6554&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHKKKHF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBwiUIumy1yRu3sfaGVhDLg9Ew4iXIM%2FYlPwxpldNmpAiEAip9P95i2Oickz%2BbgfZzlrJ9ukQVoWserFBxgcbMqdrkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOK7Ja7FH0SiwiNyNSrcA0KgypdDbEnQfOQbb4nrCaXjKlA12AlsGcnKjJttdSKUJ6xbUr9SW9KuEQcKm49rtaWygjMSO1OuRfbrBqj9rVOw3pwYO%2B5RO0hH3nP6SZX%2FtduGvcF1TY9kHkiUwI%2BNK5YadbB0Pcqvn7x8Gr5fzHDw%2FQERQzdlCTKu4ORPlGkFUCKNfdOYedCvYqqS2BRiOfaijmhbNycFgSfFGpX36hUFC2yZX9ISfT2Vb1nuB%2BJBWOcmoUdLsklKgPhmald3Ev0PR6iPWGQcnMIOmYQCAVVErL8Di%2BOSoRT6tj%2B8VJk68OWBbtNMsbowlueJ6oynzkWFZag%2BLMR0tY3yb1svAop6qnKz60kKsdIwqeI2omR6lgzZxAgrF1sbVDHsDgLzmFX4oNlfVD8T8JPk9mLi26yk8twEY30090tpglO6pZ4Iy8msT4g%2FuqfH%2BKFJjDiYrg0Iu0gKc8WFqF4gtYI46yKNNeP9R%2F5N3v5zRNBL25QJH4rMiuGxpNCaYU9%2F1xlTXO7RITO73OVcqv6hOK3a%2FW7ccAbt5unxnb8mq3aax7NU%2FDN%2FXmnPu0YO6HYhRc8PQabKfyVWH2rtzqwcrOKg204nN8i%2F6m0xZAQI%2F%2FP%2FcukxJSL12eyTSIgwfNxpMInl4sAGOqUBZ87G3yoGo4IlkXySawzVJ4ZZOsDD4Ho009%2Ff83CM8mHKp%2BF1VBHsmPqc3wzTWzRISOjaefgZ5Kvnf3yv4Rr3JnTUKwIVolcGh6H0jg1LyAFCkXsXCCqLobrE%2Faa9%2BHf2WIDPIclyWeljTm8lvpewwB1fF6Nq0SgjrMLbOK9vPToK3FzRMltosaXicXGBNq%2Bt50w%2Fk9r8tg5PimqeBbhjB3KdO5eL&X-Amz-Signature=5082a24f5ca89d7842dd4bc2aacf880a58701fc1ec8ac7ada566b0eafe20faee&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHKKKHF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBwiUIumy1yRu3sfaGVhDLg9Ew4iXIM%2FYlPwxpldNmpAiEAip9P95i2Oickz%2BbgfZzlrJ9ukQVoWserFBxgcbMqdrkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOK7Ja7FH0SiwiNyNSrcA0KgypdDbEnQfOQbb4nrCaXjKlA12AlsGcnKjJttdSKUJ6xbUr9SW9KuEQcKm49rtaWygjMSO1OuRfbrBqj9rVOw3pwYO%2B5RO0hH3nP6SZX%2FtduGvcF1TY9kHkiUwI%2BNK5YadbB0Pcqvn7x8Gr5fzHDw%2FQERQzdlCTKu4ORPlGkFUCKNfdOYedCvYqqS2BRiOfaijmhbNycFgSfFGpX36hUFC2yZX9ISfT2Vb1nuB%2BJBWOcmoUdLsklKgPhmald3Ev0PR6iPWGQcnMIOmYQCAVVErL8Di%2BOSoRT6tj%2B8VJk68OWBbtNMsbowlueJ6oynzkWFZag%2BLMR0tY3yb1svAop6qnKz60kKsdIwqeI2omR6lgzZxAgrF1sbVDHsDgLzmFX4oNlfVD8T8JPk9mLi26yk8twEY30090tpglO6pZ4Iy8msT4g%2FuqfH%2BKFJjDiYrg0Iu0gKc8WFqF4gtYI46yKNNeP9R%2F5N3v5zRNBL25QJH4rMiuGxpNCaYU9%2F1xlTXO7RITO73OVcqv6hOK3a%2FW7ccAbt5unxnb8mq3aax7NU%2FDN%2FXmnPu0YO6HYhRc8PQabKfyVWH2rtzqwcrOKg204nN8i%2F6m0xZAQI%2F%2FP%2FcukxJSL12eyTSIgwfNxpMInl4sAGOqUBZ87G3yoGo4IlkXySawzVJ4ZZOsDD4Ho009%2Ff83CM8mHKp%2BF1VBHsmPqc3wzTWzRISOjaefgZ5Kvnf3yv4Rr3JnTUKwIVolcGh6H0jg1LyAFCkXsXCCqLobrE%2Faa9%2BHf2WIDPIclyWeljTm8lvpewwB1fF6Nq0SgjrMLbOK9vPToK3FzRMltosaXicXGBNq%2Bt50w%2Fk9r8tg5PimqeBbhjB3KdO5eL&X-Amz-Signature=c6e100fc98fd3711de3128953e92754d1ba3130965888fda8a0198245eced053&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHKKKHF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBwiUIumy1yRu3sfaGVhDLg9Ew4iXIM%2FYlPwxpldNmpAiEAip9P95i2Oickz%2BbgfZzlrJ9ukQVoWserFBxgcbMqdrkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOK7Ja7FH0SiwiNyNSrcA0KgypdDbEnQfOQbb4nrCaXjKlA12AlsGcnKjJttdSKUJ6xbUr9SW9KuEQcKm49rtaWygjMSO1OuRfbrBqj9rVOw3pwYO%2B5RO0hH3nP6SZX%2FtduGvcF1TY9kHkiUwI%2BNK5YadbB0Pcqvn7x8Gr5fzHDw%2FQERQzdlCTKu4ORPlGkFUCKNfdOYedCvYqqS2BRiOfaijmhbNycFgSfFGpX36hUFC2yZX9ISfT2Vb1nuB%2BJBWOcmoUdLsklKgPhmald3Ev0PR6iPWGQcnMIOmYQCAVVErL8Di%2BOSoRT6tj%2B8VJk68OWBbtNMsbowlueJ6oynzkWFZag%2BLMR0tY3yb1svAop6qnKz60kKsdIwqeI2omR6lgzZxAgrF1sbVDHsDgLzmFX4oNlfVD8T8JPk9mLi26yk8twEY30090tpglO6pZ4Iy8msT4g%2FuqfH%2BKFJjDiYrg0Iu0gKc8WFqF4gtYI46yKNNeP9R%2F5N3v5zRNBL25QJH4rMiuGxpNCaYU9%2F1xlTXO7RITO73OVcqv6hOK3a%2FW7ccAbt5unxnb8mq3aax7NU%2FDN%2FXmnPu0YO6HYhRc8PQabKfyVWH2rtzqwcrOKg204nN8i%2F6m0xZAQI%2F%2FP%2FcukxJSL12eyTSIgwfNxpMInl4sAGOqUBZ87G3yoGo4IlkXySawzVJ4ZZOsDD4Ho009%2Ff83CM8mHKp%2BF1VBHsmPqc3wzTWzRISOjaefgZ5Kvnf3yv4Rr3JnTUKwIVolcGh6H0jg1LyAFCkXsXCCqLobrE%2Faa9%2BHf2WIDPIclyWeljTm8lvpewwB1fF6Nq0SgjrMLbOK9vPToK3FzRMltosaXicXGBNq%2Bt50w%2Fk9r8tg5PimqeBbhjB3KdO5eL&X-Amz-Signature=a77bb0c73badc581c6eaf5d38934a9980a6357387fe4243995db18c4b62a168e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHKKKHF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBwiUIumy1yRu3sfaGVhDLg9Ew4iXIM%2FYlPwxpldNmpAiEAip9P95i2Oickz%2BbgfZzlrJ9ukQVoWserFBxgcbMqdrkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOK7Ja7FH0SiwiNyNSrcA0KgypdDbEnQfOQbb4nrCaXjKlA12AlsGcnKjJttdSKUJ6xbUr9SW9KuEQcKm49rtaWygjMSO1OuRfbrBqj9rVOw3pwYO%2B5RO0hH3nP6SZX%2FtduGvcF1TY9kHkiUwI%2BNK5YadbB0Pcqvn7x8Gr5fzHDw%2FQERQzdlCTKu4ORPlGkFUCKNfdOYedCvYqqS2BRiOfaijmhbNycFgSfFGpX36hUFC2yZX9ISfT2Vb1nuB%2BJBWOcmoUdLsklKgPhmald3Ev0PR6iPWGQcnMIOmYQCAVVErL8Di%2BOSoRT6tj%2B8VJk68OWBbtNMsbowlueJ6oynzkWFZag%2BLMR0tY3yb1svAop6qnKz60kKsdIwqeI2omR6lgzZxAgrF1sbVDHsDgLzmFX4oNlfVD8T8JPk9mLi26yk8twEY30090tpglO6pZ4Iy8msT4g%2FuqfH%2BKFJjDiYrg0Iu0gKc8WFqF4gtYI46yKNNeP9R%2F5N3v5zRNBL25QJH4rMiuGxpNCaYU9%2F1xlTXO7RITO73OVcqv6hOK3a%2FW7ccAbt5unxnb8mq3aax7NU%2FDN%2FXmnPu0YO6HYhRc8PQabKfyVWH2rtzqwcrOKg204nN8i%2F6m0xZAQI%2F%2FP%2FcukxJSL12eyTSIgwfNxpMInl4sAGOqUBZ87G3yoGo4IlkXySawzVJ4ZZOsDD4Ho009%2Ff83CM8mHKp%2BF1VBHsmPqc3wzTWzRISOjaefgZ5Kvnf3yv4Rr3JnTUKwIVolcGh6H0jg1LyAFCkXsXCCqLobrE%2Faa9%2BHf2WIDPIclyWeljTm8lvpewwB1fF6Nq0SgjrMLbOK9vPToK3FzRMltosaXicXGBNq%2Bt50w%2Fk9r8tg5PimqeBbhjB3KdO5eL&X-Amz-Signature=9f9cf2f0ee2738dcbfd26837c1e61a1fb65e1ccf645df899a695cebbe297ebd1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHKKKHF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBwiUIumy1yRu3sfaGVhDLg9Ew4iXIM%2FYlPwxpldNmpAiEAip9P95i2Oickz%2BbgfZzlrJ9ukQVoWserFBxgcbMqdrkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOK7Ja7FH0SiwiNyNSrcA0KgypdDbEnQfOQbb4nrCaXjKlA12AlsGcnKjJttdSKUJ6xbUr9SW9KuEQcKm49rtaWygjMSO1OuRfbrBqj9rVOw3pwYO%2B5RO0hH3nP6SZX%2FtduGvcF1TY9kHkiUwI%2BNK5YadbB0Pcqvn7x8Gr5fzHDw%2FQERQzdlCTKu4ORPlGkFUCKNfdOYedCvYqqS2BRiOfaijmhbNycFgSfFGpX36hUFC2yZX9ISfT2Vb1nuB%2BJBWOcmoUdLsklKgPhmald3Ev0PR6iPWGQcnMIOmYQCAVVErL8Di%2BOSoRT6tj%2B8VJk68OWBbtNMsbowlueJ6oynzkWFZag%2BLMR0tY3yb1svAop6qnKz60kKsdIwqeI2omR6lgzZxAgrF1sbVDHsDgLzmFX4oNlfVD8T8JPk9mLi26yk8twEY30090tpglO6pZ4Iy8msT4g%2FuqfH%2BKFJjDiYrg0Iu0gKc8WFqF4gtYI46yKNNeP9R%2F5N3v5zRNBL25QJH4rMiuGxpNCaYU9%2F1xlTXO7RITO73OVcqv6hOK3a%2FW7ccAbt5unxnb8mq3aax7NU%2FDN%2FXmnPu0YO6HYhRc8PQabKfyVWH2rtzqwcrOKg204nN8i%2F6m0xZAQI%2F%2FP%2FcukxJSL12eyTSIgwfNxpMInl4sAGOqUBZ87G3yoGo4IlkXySawzVJ4ZZOsDD4Ho009%2Ff83CM8mHKp%2BF1VBHsmPqc3wzTWzRISOjaefgZ5Kvnf3yv4Rr3JnTUKwIVolcGh6H0jg1LyAFCkXsXCCqLobrE%2Faa9%2BHf2WIDPIclyWeljTm8lvpewwB1fF6Nq0SgjrMLbOK9vPToK3FzRMltosaXicXGBNq%2Bt50w%2Fk9r8tg5PimqeBbhjB3KdO5eL&X-Amz-Signature=4b2e404946440f83ab96b64e8ac52f2109d31400604284532c11ed02be273183&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URHKKKHF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T132146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBwiUIumy1yRu3sfaGVhDLg9Ew4iXIM%2FYlPwxpldNmpAiEAip9P95i2Oickz%2BbgfZzlrJ9ukQVoWserFBxgcbMqdrkq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOK7Ja7FH0SiwiNyNSrcA0KgypdDbEnQfOQbb4nrCaXjKlA12AlsGcnKjJttdSKUJ6xbUr9SW9KuEQcKm49rtaWygjMSO1OuRfbrBqj9rVOw3pwYO%2B5RO0hH3nP6SZX%2FtduGvcF1TY9kHkiUwI%2BNK5YadbB0Pcqvn7x8Gr5fzHDw%2FQERQzdlCTKu4ORPlGkFUCKNfdOYedCvYqqS2BRiOfaijmhbNycFgSfFGpX36hUFC2yZX9ISfT2Vb1nuB%2BJBWOcmoUdLsklKgPhmald3Ev0PR6iPWGQcnMIOmYQCAVVErL8Di%2BOSoRT6tj%2B8VJk68OWBbtNMsbowlueJ6oynzkWFZag%2BLMR0tY3yb1svAop6qnKz60kKsdIwqeI2omR6lgzZxAgrF1sbVDHsDgLzmFX4oNlfVD8T8JPk9mLi26yk8twEY30090tpglO6pZ4Iy8msT4g%2FuqfH%2BKFJjDiYrg0Iu0gKc8WFqF4gtYI46yKNNeP9R%2F5N3v5zRNBL25QJH4rMiuGxpNCaYU9%2F1xlTXO7RITO73OVcqv6hOK3a%2FW7ccAbt5unxnb8mq3aax7NU%2FDN%2FXmnPu0YO6HYhRc8PQabKfyVWH2rtzqwcrOKg204nN8i%2F6m0xZAQI%2F%2FP%2FcukxJSL12eyTSIgwfNxpMInl4sAGOqUBZ87G3yoGo4IlkXySawzVJ4ZZOsDD4Ho009%2Ff83CM8mHKp%2BF1VBHsmPqc3wzTWzRISOjaefgZ5Kvnf3yv4Rr3JnTUKwIVolcGh6H0jg1LyAFCkXsXCCqLobrE%2Faa9%2BHf2WIDPIclyWeljTm8lvpewwB1fF6Nq0SgjrMLbOK9vPToK3FzRMltosaXicXGBNq%2Bt50w%2Fk9r8tg5PimqeBbhjB3KdO5eL&X-Amz-Signature=56d8783e0d71648767e1803aa76b044834a143e1d0a7ae88ffaa75842bad30b9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
