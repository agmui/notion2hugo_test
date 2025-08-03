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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZFIYJHY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbL79GBXcTp%2BVdo8sH%2BM5k0RBmRJlvSRc1mzdGOdrlcQIhAKL%2BnziyYj3i7kHV8%2BQ1oz%2BlWXovb45%2B424gsZ5lXPafKv8DCCQQABoMNjM3NDIzMTgzODA1IgxZcQ%2BTOSj8qByItSEq3APq34%2FEzzTIuNWQPaqlujwO2JVEpIUnOW4f4iQw1IbMp9Lm3vQNG0JCDtccSQPXgRw63GYeiEsA8Xbcl5JS1IsQdtHogbVwXF%2FlhdlxadyPzk%2B6tcEjYAuDzELqGBhtS269LnCuY3vxw2wtXkHKG8E5D1mgL%2BOU5yBFeAfCnjAFGrtukqKz7Pje6LbO%2BtHsbJZMAoJ8mamlfy%2FY8bCr20Tf0wc7G93isg4xJd11M6vIj591NcE01YHE9sv7HcgDQU7CQ%2FrCr9wcj%2FO15%2FKHaTkF56rcWvxrdYWpt7mB1LSkVqs9%2BlQepFSr4AyuTZ05YfZKrcKK6m7BYnvgTp5l3Eti5njEDzGbc8v0KyQrajW6P3ci%2B1jkvc51bL23iaUl6fw31tz2Koc7tH079F2Ch2EWzn8mrQqbXdGKnb4UEEeg1jQSMt%2ByjQ6L%2F%2BN2FPj5zd%2Bon%2FZBqeHP3Hm4yAywFKJUbF6XtV9gKFuHVC60jnz3QsnEKxHMjrRQEKRafTcwIQPRjYejhCufl7DNL2fH6Uy99MY9u6jlpyi00qPe5t2p%2BlrizY6KZYCuSiCoyWUGy1sAHfwGFLGiQfSXrzNVKGgtWDevwu5frc%2BvPJIhR%2BuPbIrTmyD9bZk6ffnnTTDvn7vEBjqkAQCCodZLzN%2FXgOQOj7dlM6qEBL1BAsIud%2F6mH3p1N%2F7OHIpEgyLkKIUaDY7QAtUtxc4soPe%2F4Ov3Y2jz%2FMZWizOOV%2FZp2nVXTPTnH3gpVolyIDETpUJ1h0F4ecQXvH3RG2XNETO%2FwSUwFwzMdd8NbHKB9tM9%2BICVzeDDU85EchNK3tFvslaOAJia2oIjwVIExRUro0iPQp0gf%2FP1SqGLNOChTiqo&X-Amz-Signature=aa5db5dc1eb0d76eeb04e80a75fedcaeae9b3014633832076dbb835ba4900676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZFIYJHY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbL79GBXcTp%2BVdo8sH%2BM5k0RBmRJlvSRc1mzdGOdrlcQIhAKL%2BnziyYj3i7kHV8%2BQ1oz%2BlWXovb45%2B424gsZ5lXPafKv8DCCQQABoMNjM3NDIzMTgzODA1IgxZcQ%2BTOSj8qByItSEq3APq34%2FEzzTIuNWQPaqlujwO2JVEpIUnOW4f4iQw1IbMp9Lm3vQNG0JCDtccSQPXgRw63GYeiEsA8Xbcl5JS1IsQdtHogbVwXF%2FlhdlxadyPzk%2B6tcEjYAuDzELqGBhtS269LnCuY3vxw2wtXkHKG8E5D1mgL%2BOU5yBFeAfCnjAFGrtukqKz7Pje6LbO%2BtHsbJZMAoJ8mamlfy%2FY8bCr20Tf0wc7G93isg4xJd11M6vIj591NcE01YHE9sv7HcgDQU7CQ%2FrCr9wcj%2FO15%2FKHaTkF56rcWvxrdYWpt7mB1LSkVqs9%2BlQepFSr4AyuTZ05YfZKrcKK6m7BYnvgTp5l3Eti5njEDzGbc8v0KyQrajW6P3ci%2B1jkvc51bL23iaUl6fw31tz2Koc7tH079F2Ch2EWzn8mrQqbXdGKnb4UEEeg1jQSMt%2ByjQ6L%2F%2BN2FPj5zd%2Bon%2FZBqeHP3Hm4yAywFKJUbF6XtV9gKFuHVC60jnz3QsnEKxHMjrRQEKRafTcwIQPRjYejhCufl7DNL2fH6Uy99MY9u6jlpyi00qPe5t2p%2BlrizY6KZYCuSiCoyWUGy1sAHfwGFLGiQfSXrzNVKGgtWDevwu5frc%2BvPJIhR%2BuPbIrTmyD9bZk6ffnnTTDvn7vEBjqkAQCCodZLzN%2FXgOQOj7dlM6qEBL1BAsIud%2F6mH3p1N%2F7OHIpEgyLkKIUaDY7QAtUtxc4soPe%2F4Ov3Y2jz%2FMZWizOOV%2FZp2nVXTPTnH3gpVolyIDETpUJ1h0F4ecQXvH3RG2XNETO%2FwSUwFwzMdd8NbHKB9tM9%2BICVzeDDU85EchNK3tFvslaOAJia2oIjwVIExRUro0iPQp0gf%2FP1SqGLNOChTiqo&X-Amz-Signature=c2626c4c3c23a3da0d7a47bb3c3af44f5d0fa0f9537102043723b7d6d53e05b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZFIYJHY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbL79GBXcTp%2BVdo8sH%2BM5k0RBmRJlvSRc1mzdGOdrlcQIhAKL%2BnziyYj3i7kHV8%2BQ1oz%2BlWXovb45%2B424gsZ5lXPafKv8DCCQQABoMNjM3NDIzMTgzODA1IgxZcQ%2BTOSj8qByItSEq3APq34%2FEzzTIuNWQPaqlujwO2JVEpIUnOW4f4iQw1IbMp9Lm3vQNG0JCDtccSQPXgRw63GYeiEsA8Xbcl5JS1IsQdtHogbVwXF%2FlhdlxadyPzk%2B6tcEjYAuDzELqGBhtS269LnCuY3vxw2wtXkHKG8E5D1mgL%2BOU5yBFeAfCnjAFGrtukqKz7Pje6LbO%2BtHsbJZMAoJ8mamlfy%2FY8bCr20Tf0wc7G93isg4xJd11M6vIj591NcE01YHE9sv7HcgDQU7CQ%2FrCr9wcj%2FO15%2FKHaTkF56rcWvxrdYWpt7mB1LSkVqs9%2BlQepFSr4AyuTZ05YfZKrcKK6m7BYnvgTp5l3Eti5njEDzGbc8v0KyQrajW6P3ci%2B1jkvc51bL23iaUl6fw31tz2Koc7tH079F2Ch2EWzn8mrQqbXdGKnb4UEEeg1jQSMt%2ByjQ6L%2F%2BN2FPj5zd%2Bon%2FZBqeHP3Hm4yAywFKJUbF6XtV9gKFuHVC60jnz3QsnEKxHMjrRQEKRafTcwIQPRjYejhCufl7DNL2fH6Uy99MY9u6jlpyi00qPe5t2p%2BlrizY6KZYCuSiCoyWUGy1sAHfwGFLGiQfSXrzNVKGgtWDevwu5frc%2BvPJIhR%2BuPbIrTmyD9bZk6ffnnTTDvn7vEBjqkAQCCodZLzN%2FXgOQOj7dlM6qEBL1BAsIud%2F6mH3p1N%2F7OHIpEgyLkKIUaDY7QAtUtxc4soPe%2F4Ov3Y2jz%2FMZWizOOV%2FZp2nVXTPTnH3gpVolyIDETpUJ1h0F4ecQXvH3RG2XNETO%2FwSUwFwzMdd8NbHKB9tM9%2BICVzeDDU85EchNK3tFvslaOAJia2oIjwVIExRUro0iPQp0gf%2FP1SqGLNOChTiqo&X-Amz-Signature=efd0bbd809d41f999323423884c9d551f18a01bc105d41101760338a6aecd777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZFIYJHY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbL79GBXcTp%2BVdo8sH%2BM5k0RBmRJlvSRc1mzdGOdrlcQIhAKL%2BnziyYj3i7kHV8%2BQ1oz%2BlWXovb45%2B424gsZ5lXPafKv8DCCQQABoMNjM3NDIzMTgzODA1IgxZcQ%2BTOSj8qByItSEq3APq34%2FEzzTIuNWQPaqlujwO2JVEpIUnOW4f4iQw1IbMp9Lm3vQNG0JCDtccSQPXgRw63GYeiEsA8Xbcl5JS1IsQdtHogbVwXF%2FlhdlxadyPzk%2B6tcEjYAuDzELqGBhtS269LnCuY3vxw2wtXkHKG8E5D1mgL%2BOU5yBFeAfCnjAFGrtukqKz7Pje6LbO%2BtHsbJZMAoJ8mamlfy%2FY8bCr20Tf0wc7G93isg4xJd11M6vIj591NcE01YHE9sv7HcgDQU7CQ%2FrCr9wcj%2FO15%2FKHaTkF56rcWvxrdYWpt7mB1LSkVqs9%2BlQepFSr4AyuTZ05YfZKrcKK6m7BYnvgTp5l3Eti5njEDzGbc8v0KyQrajW6P3ci%2B1jkvc51bL23iaUl6fw31tz2Koc7tH079F2Ch2EWzn8mrQqbXdGKnb4UEEeg1jQSMt%2ByjQ6L%2F%2BN2FPj5zd%2Bon%2FZBqeHP3Hm4yAywFKJUbF6XtV9gKFuHVC60jnz3QsnEKxHMjrRQEKRafTcwIQPRjYejhCufl7DNL2fH6Uy99MY9u6jlpyi00qPe5t2p%2BlrizY6KZYCuSiCoyWUGy1sAHfwGFLGiQfSXrzNVKGgtWDevwu5frc%2BvPJIhR%2BuPbIrTmyD9bZk6ffnnTTDvn7vEBjqkAQCCodZLzN%2FXgOQOj7dlM6qEBL1BAsIud%2F6mH3p1N%2F7OHIpEgyLkKIUaDY7QAtUtxc4soPe%2F4Ov3Y2jz%2FMZWizOOV%2FZp2nVXTPTnH3gpVolyIDETpUJ1h0F4ecQXvH3RG2XNETO%2FwSUwFwzMdd8NbHKB9tM9%2BICVzeDDU85EchNK3tFvslaOAJia2oIjwVIExRUro0iPQp0gf%2FP1SqGLNOChTiqo&X-Amz-Signature=6576ae69b714e193421462e3a535a89e45b51686320f4f75933bc34c909645bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZFIYJHY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbL79GBXcTp%2BVdo8sH%2BM5k0RBmRJlvSRc1mzdGOdrlcQIhAKL%2BnziyYj3i7kHV8%2BQ1oz%2BlWXovb45%2B424gsZ5lXPafKv8DCCQQABoMNjM3NDIzMTgzODA1IgxZcQ%2BTOSj8qByItSEq3APq34%2FEzzTIuNWQPaqlujwO2JVEpIUnOW4f4iQw1IbMp9Lm3vQNG0JCDtccSQPXgRw63GYeiEsA8Xbcl5JS1IsQdtHogbVwXF%2FlhdlxadyPzk%2B6tcEjYAuDzELqGBhtS269LnCuY3vxw2wtXkHKG8E5D1mgL%2BOU5yBFeAfCnjAFGrtukqKz7Pje6LbO%2BtHsbJZMAoJ8mamlfy%2FY8bCr20Tf0wc7G93isg4xJd11M6vIj591NcE01YHE9sv7HcgDQU7CQ%2FrCr9wcj%2FO15%2FKHaTkF56rcWvxrdYWpt7mB1LSkVqs9%2BlQepFSr4AyuTZ05YfZKrcKK6m7BYnvgTp5l3Eti5njEDzGbc8v0KyQrajW6P3ci%2B1jkvc51bL23iaUl6fw31tz2Koc7tH079F2Ch2EWzn8mrQqbXdGKnb4UEEeg1jQSMt%2ByjQ6L%2F%2BN2FPj5zd%2Bon%2FZBqeHP3Hm4yAywFKJUbF6XtV9gKFuHVC60jnz3QsnEKxHMjrRQEKRafTcwIQPRjYejhCufl7DNL2fH6Uy99MY9u6jlpyi00qPe5t2p%2BlrizY6KZYCuSiCoyWUGy1sAHfwGFLGiQfSXrzNVKGgtWDevwu5frc%2BvPJIhR%2BuPbIrTmyD9bZk6ffnnTTDvn7vEBjqkAQCCodZLzN%2FXgOQOj7dlM6qEBL1BAsIud%2F6mH3p1N%2F7OHIpEgyLkKIUaDY7QAtUtxc4soPe%2F4Ov3Y2jz%2FMZWizOOV%2FZp2nVXTPTnH3gpVolyIDETpUJ1h0F4ecQXvH3RG2XNETO%2FwSUwFwzMdd8NbHKB9tM9%2BICVzeDDU85EchNK3tFvslaOAJia2oIjwVIExRUro0iPQp0gf%2FP1SqGLNOChTiqo&X-Amz-Signature=63660f098042d0bdd6c714afc2805880ed8ef629e6653dd20e2c291db2e1ed9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZFIYJHY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbL79GBXcTp%2BVdo8sH%2BM5k0RBmRJlvSRc1mzdGOdrlcQIhAKL%2BnziyYj3i7kHV8%2BQ1oz%2BlWXovb45%2B424gsZ5lXPafKv8DCCQQABoMNjM3NDIzMTgzODA1IgxZcQ%2BTOSj8qByItSEq3APq34%2FEzzTIuNWQPaqlujwO2JVEpIUnOW4f4iQw1IbMp9Lm3vQNG0JCDtccSQPXgRw63GYeiEsA8Xbcl5JS1IsQdtHogbVwXF%2FlhdlxadyPzk%2B6tcEjYAuDzELqGBhtS269LnCuY3vxw2wtXkHKG8E5D1mgL%2BOU5yBFeAfCnjAFGrtukqKz7Pje6LbO%2BtHsbJZMAoJ8mamlfy%2FY8bCr20Tf0wc7G93isg4xJd11M6vIj591NcE01YHE9sv7HcgDQU7CQ%2FrCr9wcj%2FO15%2FKHaTkF56rcWvxrdYWpt7mB1LSkVqs9%2BlQepFSr4AyuTZ05YfZKrcKK6m7BYnvgTp5l3Eti5njEDzGbc8v0KyQrajW6P3ci%2B1jkvc51bL23iaUl6fw31tz2Koc7tH079F2Ch2EWzn8mrQqbXdGKnb4UEEeg1jQSMt%2ByjQ6L%2F%2BN2FPj5zd%2Bon%2FZBqeHP3Hm4yAywFKJUbF6XtV9gKFuHVC60jnz3QsnEKxHMjrRQEKRafTcwIQPRjYejhCufl7DNL2fH6Uy99MY9u6jlpyi00qPe5t2p%2BlrizY6KZYCuSiCoyWUGy1sAHfwGFLGiQfSXrzNVKGgtWDevwu5frc%2BvPJIhR%2BuPbIrTmyD9bZk6ffnnTTDvn7vEBjqkAQCCodZLzN%2FXgOQOj7dlM6qEBL1BAsIud%2F6mH3p1N%2F7OHIpEgyLkKIUaDY7QAtUtxc4soPe%2F4Ov3Y2jz%2FMZWizOOV%2FZp2nVXTPTnH3gpVolyIDETpUJ1h0F4ecQXvH3RG2XNETO%2FwSUwFwzMdd8NbHKB9tM9%2BICVzeDDU85EchNK3tFvslaOAJia2oIjwVIExRUro0iPQp0gf%2FP1SqGLNOChTiqo&X-Amz-Signature=9f9932adcdbaf86595ea8283375ad86fac7b4554f49c74628a3ae7fd9d5cb52e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZFIYJHY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbL79GBXcTp%2BVdo8sH%2BM5k0RBmRJlvSRc1mzdGOdrlcQIhAKL%2BnziyYj3i7kHV8%2BQ1oz%2BlWXovb45%2B424gsZ5lXPafKv8DCCQQABoMNjM3NDIzMTgzODA1IgxZcQ%2BTOSj8qByItSEq3APq34%2FEzzTIuNWQPaqlujwO2JVEpIUnOW4f4iQw1IbMp9Lm3vQNG0JCDtccSQPXgRw63GYeiEsA8Xbcl5JS1IsQdtHogbVwXF%2FlhdlxadyPzk%2B6tcEjYAuDzELqGBhtS269LnCuY3vxw2wtXkHKG8E5D1mgL%2BOU5yBFeAfCnjAFGrtukqKz7Pje6LbO%2BtHsbJZMAoJ8mamlfy%2FY8bCr20Tf0wc7G93isg4xJd11M6vIj591NcE01YHE9sv7HcgDQU7CQ%2FrCr9wcj%2FO15%2FKHaTkF56rcWvxrdYWpt7mB1LSkVqs9%2BlQepFSr4AyuTZ05YfZKrcKK6m7BYnvgTp5l3Eti5njEDzGbc8v0KyQrajW6P3ci%2B1jkvc51bL23iaUl6fw31tz2Koc7tH079F2Ch2EWzn8mrQqbXdGKnb4UEEeg1jQSMt%2ByjQ6L%2F%2BN2FPj5zd%2Bon%2FZBqeHP3Hm4yAywFKJUbF6XtV9gKFuHVC60jnz3QsnEKxHMjrRQEKRafTcwIQPRjYejhCufl7DNL2fH6Uy99MY9u6jlpyi00qPe5t2p%2BlrizY6KZYCuSiCoyWUGy1sAHfwGFLGiQfSXrzNVKGgtWDevwu5frc%2BvPJIhR%2BuPbIrTmyD9bZk6ffnnTTDvn7vEBjqkAQCCodZLzN%2FXgOQOj7dlM6qEBL1BAsIud%2F6mH3p1N%2F7OHIpEgyLkKIUaDY7QAtUtxc4soPe%2F4Ov3Y2jz%2FMZWizOOV%2FZp2nVXTPTnH3gpVolyIDETpUJ1h0F4ecQXvH3RG2XNETO%2FwSUwFwzMdd8NbHKB9tM9%2BICVzeDDU85EchNK3tFvslaOAJia2oIjwVIExRUro0iPQp0gf%2FP1SqGLNOChTiqo&X-Amz-Signature=6a2b3b59066b96b68d8a9e96a7486198cfd6bb6ba9e3cd75feaf8f93106ee227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
