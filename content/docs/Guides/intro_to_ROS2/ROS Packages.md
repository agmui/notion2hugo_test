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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTB4DV5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJbKbEdT32DQQchfDGt8MF4EQTPA%2FdICto5W5bstlzAiA1YbbsnAo4qcpaZdIezN4FgkQQIdDpAzdOpqdaaxZsQir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMAb1V%2BJ5CMAk35WcxKtwDAz9YAnqvrPwPLx7pJQJWixvoBAA%2FXJWb4FDCr9MB7wcbCRODqXIWaCnjd4KHxsHp12PFWrcbSBUM6c%2FTsW2ODvi0DYP2bhVaw4zLd4LDQ8DmvC7dLbqrJH1b7OVAnGKNMYKCCOjNir7Eur4Ql9XjbjXAhJ2ajz2IwZWPFuHbD%2FY%2F4R4o5dHoVeyK%2FmJz2TGvdMipHV91M%2FW4zpgjWiCn9Dk9cO5LLLHgC94nczkJ5duE%2FyJV8CSYLK4j91gCnjwIsATCZTicV0CFgsFi13v7t7MgcYgi7IzuDomkjs5uvjFRU%2B7K%2FaJQRqbUbK9kxOlJpTEfAXDdeOUG%2B3GwrC416k9PsIL4DF9KWq9vNPQFaIWL8y9YQcsweGvG641DFZZZ%2B1vOku7776DoSx8XWR8yVhEaMfpCKSYfq1AqRZ0dpjCPIO9hfiWJVjdH%2BdL7%2BOd9dH2HvbbwRcg9CALzTJknauEmvextit2It9z0kA%2Bbi8d9DEFgBcKtcc%2Ba6AgYWeTfknM8%2Fi8wJhEOdwptvczbb0t6pV02MosVhKc4dsythr8opnWxxgpsTPLpB0iPGzJq2oJTK2BIQF2WeEyPs7mmFdicbTd6WLHdWqEr3YjzJXrkscC%2FThJVGZCE1bIwzMrlwAY6pgFoMYKBFsj7uBiA3iQ3mObuzb8sLueZs1wNrhx%2Bre5GiE2c%2BZUXwwF0dmh7NqRP0%2F1G6lBjCH%2BzYfRyE%2F7BzViQLulIjxqoW1wdp4ih7pVTUyPYiUtW9b3jZQDK%2FJA93sWMsw93RCqeze9HGMXZY5kBKuPNfjWJ1UPVBHiiid6yPh6n7kjPwfEY2A3lNWaI4CQl3EZwWZWDKAfxgL1Ac%2BrEov%2BzgSkV&X-Amz-Signature=e4b213bd1f6ad8955213a8b1da40755e71724a97535f9ae14d7a1fc5b633f72e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTB4DV5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJbKbEdT32DQQchfDGt8MF4EQTPA%2FdICto5W5bstlzAiA1YbbsnAo4qcpaZdIezN4FgkQQIdDpAzdOpqdaaxZsQir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMAb1V%2BJ5CMAk35WcxKtwDAz9YAnqvrPwPLx7pJQJWixvoBAA%2FXJWb4FDCr9MB7wcbCRODqXIWaCnjd4KHxsHp12PFWrcbSBUM6c%2FTsW2ODvi0DYP2bhVaw4zLd4LDQ8DmvC7dLbqrJH1b7OVAnGKNMYKCCOjNir7Eur4Ql9XjbjXAhJ2ajz2IwZWPFuHbD%2FY%2F4R4o5dHoVeyK%2FmJz2TGvdMipHV91M%2FW4zpgjWiCn9Dk9cO5LLLHgC94nczkJ5duE%2FyJV8CSYLK4j91gCnjwIsATCZTicV0CFgsFi13v7t7MgcYgi7IzuDomkjs5uvjFRU%2B7K%2FaJQRqbUbK9kxOlJpTEfAXDdeOUG%2B3GwrC416k9PsIL4DF9KWq9vNPQFaIWL8y9YQcsweGvG641DFZZZ%2B1vOku7776DoSx8XWR8yVhEaMfpCKSYfq1AqRZ0dpjCPIO9hfiWJVjdH%2BdL7%2BOd9dH2HvbbwRcg9CALzTJknauEmvextit2It9z0kA%2Bbi8d9DEFgBcKtcc%2Ba6AgYWeTfknM8%2Fi8wJhEOdwptvczbb0t6pV02MosVhKc4dsythr8opnWxxgpsTPLpB0iPGzJq2oJTK2BIQF2WeEyPs7mmFdicbTd6WLHdWqEr3YjzJXrkscC%2FThJVGZCE1bIwzMrlwAY6pgFoMYKBFsj7uBiA3iQ3mObuzb8sLueZs1wNrhx%2Bre5GiE2c%2BZUXwwF0dmh7NqRP0%2F1G6lBjCH%2BzYfRyE%2F7BzViQLulIjxqoW1wdp4ih7pVTUyPYiUtW9b3jZQDK%2FJA93sWMsw93RCqeze9HGMXZY5kBKuPNfjWJ1UPVBHiiid6yPh6n7kjPwfEY2A3lNWaI4CQl3EZwWZWDKAfxgL1Ac%2BrEov%2BzgSkV&X-Amz-Signature=95f27949da9e7ad544694c68d78bb030c208d23d675e4d152f89cb2c15365a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTB4DV5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJbKbEdT32DQQchfDGt8MF4EQTPA%2FdICto5W5bstlzAiA1YbbsnAo4qcpaZdIezN4FgkQQIdDpAzdOpqdaaxZsQir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMAb1V%2BJ5CMAk35WcxKtwDAz9YAnqvrPwPLx7pJQJWixvoBAA%2FXJWb4FDCr9MB7wcbCRODqXIWaCnjd4KHxsHp12PFWrcbSBUM6c%2FTsW2ODvi0DYP2bhVaw4zLd4LDQ8DmvC7dLbqrJH1b7OVAnGKNMYKCCOjNir7Eur4Ql9XjbjXAhJ2ajz2IwZWPFuHbD%2FY%2F4R4o5dHoVeyK%2FmJz2TGvdMipHV91M%2FW4zpgjWiCn9Dk9cO5LLLHgC94nczkJ5duE%2FyJV8CSYLK4j91gCnjwIsATCZTicV0CFgsFi13v7t7MgcYgi7IzuDomkjs5uvjFRU%2B7K%2FaJQRqbUbK9kxOlJpTEfAXDdeOUG%2B3GwrC416k9PsIL4DF9KWq9vNPQFaIWL8y9YQcsweGvG641DFZZZ%2B1vOku7776DoSx8XWR8yVhEaMfpCKSYfq1AqRZ0dpjCPIO9hfiWJVjdH%2BdL7%2BOd9dH2HvbbwRcg9CALzTJknauEmvextit2It9z0kA%2Bbi8d9DEFgBcKtcc%2Ba6AgYWeTfknM8%2Fi8wJhEOdwptvczbb0t6pV02MosVhKc4dsythr8opnWxxgpsTPLpB0iPGzJq2oJTK2BIQF2WeEyPs7mmFdicbTd6WLHdWqEr3YjzJXrkscC%2FThJVGZCE1bIwzMrlwAY6pgFoMYKBFsj7uBiA3iQ3mObuzb8sLueZs1wNrhx%2Bre5GiE2c%2BZUXwwF0dmh7NqRP0%2F1G6lBjCH%2BzYfRyE%2F7BzViQLulIjxqoW1wdp4ih7pVTUyPYiUtW9b3jZQDK%2FJA93sWMsw93RCqeze9HGMXZY5kBKuPNfjWJ1UPVBHiiid6yPh6n7kjPwfEY2A3lNWaI4CQl3EZwWZWDKAfxgL1Ac%2BrEov%2BzgSkV&X-Amz-Signature=d119648a3895d5d16c354fc398cd097a46c4f289eb8c7b883cf73e2abcaddc65&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTB4DV5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJbKbEdT32DQQchfDGt8MF4EQTPA%2FdICto5W5bstlzAiA1YbbsnAo4qcpaZdIezN4FgkQQIdDpAzdOpqdaaxZsQir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMAb1V%2BJ5CMAk35WcxKtwDAz9YAnqvrPwPLx7pJQJWixvoBAA%2FXJWb4FDCr9MB7wcbCRODqXIWaCnjd4KHxsHp12PFWrcbSBUM6c%2FTsW2ODvi0DYP2bhVaw4zLd4LDQ8DmvC7dLbqrJH1b7OVAnGKNMYKCCOjNir7Eur4Ql9XjbjXAhJ2ajz2IwZWPFuHbD%2FY%2F4R4o5dHoVeyK%2FmJz2TGvdMipHV91M%2FW4zpgjWiCn9Dk9cO5LLLHgC94nczkJ5duE%2FyJV8CSYLK4j91gCnjwIsATCZTicV0CFgsFi13v7t7MgcYgi7IzuDomkjs5uvjFRU%2B7K%2FaJQRqbUbK9kxOlJpTEfAXDdeOUG%2B3GwrC416k9PsIL4DF9KWq9vNPQFaIWL8y9YQcsweGvG641DFZZZ%2B1vOku7776DoSx8XWR8yVhEaMfpCKSYfq1AqRZ0dpjCPIO9hfiWJVjdH%2BdL7%2BOd9dH2HvbbwRcg9CALzTJknauEmvextit2It9z0kA%2Bbi8d9DEFgBcKtcc%2Ba6AgYWeTfknM8%2Fi8wJhEOdwptvczbb0t6pV02MosVhKc4dsythr8opnWxxgpsTPLpB0iPGzJq2oJTK2BIQF2WeEyPs7mmFdicbTd6WLHdWqEr3YjzJXrkscC%2FThJVGZCE1bIwzMrlwAY6pgFoMYKBFsj7uBiA3iQ3mObuzb8sLueZs1wNrhx%2Bre5GiE2c%2BZUXwwF0dmh7NqRP0%2F1G6lBjCH%2BzYfRyE%2F7BzViQLulIjxqoW1wdp4ih7pVTUyPYiUtW9b3jZQDK%2FJA93sWMsw93RCqeze9HGMXZY5kBKuPNfjWJ1UPVBHiiid6yPh6n7kjPwfEY2A3lNWaI4CQl3EZwWZWDKAfxgL1Ac%2BrEov%2BzgSkV&X-Amz-Signature=0b79f78cbc7df2c266a854a51a1538ede5e76826087bc604c9d5f03ecd092071&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTB4DV5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJbKbEdT32DQQchfDGt8MF4EQTPA%2FdICto5W5bstlzAiA1YbbsnAo4qcpaZdIezN4FgkQQIdDpAzdOpqdaaxZsQir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMAb1V%2BJ5CMAk35WcxKtwDAz9YAnqvrPwPLx7pJQJWixvoBAA%2FXJWb4FDCr9MB7wcbCRODqXIWaCnjd4KHxsHp12PFWrcbSBUM6c%2FTsW2ODvi0DYP2bhVaw4zLd4LDQ8DmvC7dLbqrJH1b7OVAnGKNMYKCCOjNir7Eur4Ql9XjbjXAhJ2ajz2IwZWPFuHbD%2FY%2F4R4o5dHoVeyK%2FmJz2TGvdMipHV91M%2FW4zpgjWiCn9Dk9cO5LLLHgC94nczkJ5duE%2FyJV8CSYLK4j91gCnjwIsATCZTicV0CFgsFi13v7t7MgcYgi7IzuDomkjs5uvjFRU%2B7K%2FaJQRqbUbK9kxOlJpTEfAXDdeOUG%2B3GwrC416k9PsIL4DF9KWq9vNPQFaIWL8y9YQcsweGvG641DFZZZ%2B1vOku7776DoSx8XWR8yVhEaMfpCKSYfq1AqRZ0dpjCPIO9hfiWJVjdH%2BdL7%2BOd9dH2HvbbwRcg9CALzTJknauEmvextit2It9z0kA%2Bbi8d9DEFgBcKtcc%2Ba6AgYWeTfknM8%2Fi8wJhEOdwptvczbb0t6pV02MosVhKc4dsythr8opnWxxgpsTPLpB0iPGzJq2oJTK2BIQF2WeEyPs7mmFdicbTd6WLHdWqEr3YjzJXrkscC%2FThJVGZCE1bIwzMrlwAY6pgFoMYKBFsj7uBiA3iQ3mObuzb8sLueZs1wNrhx%2Bre5GiE2c%2BZUXwwF0dmh7NqRP0%2F1G6lBjCH%2BzYfRyE%2F7BzViQLulIjxqoW1wdp4ih7pVTUyPYiUtW9b3jZQDK%2FJA93sWMsw93RCqeze9HGMXZY5kBKuPNfjWJ1UPVBHiiid6yPh6n7kjPwfEY2A3lNWaI4CQl3EZwWZWDKAfxgL1Ac%2BrEov%2BzgSkV&X-Amz-Signature=9e1dba89b5c9e889aeb51e06061a322c6ada3bfd536a8c74e7e6f7dd12741a22&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTB4DV5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJbKbEdT32DQQchfDGt8MF4EQTPA%2FdICto5W5bstlzAiA1YbbsnAo4qcpaZdIezN4FgkQQIdDpAzdOpqdaaxZsQir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMAb1V%2BJ5CMAk35WcxKtwDAz9YAnqvrPwPLx7pJQJWixvoBAA%2FXJWb4FDCr9MB7wcbCRODqXIWaCnjd4KHxsHp12PFWrcbSBUM6c%2FTsW2ODvi0DYP2bhVaw4zLd4LDQ8DmvC7dLbqrJH1b7OVAnGKNMYKCCOjNir7Eur4Ql9XjbjXAhJ2ajz2IwZWPFuHbD%2FY%2F4R4o5dHoVeyK%2FmJz2TGvdMipHV91M%2FW4zpgjWiCn9Dk9cO5LLLHgC94nczkJ5duE%2FyJV8CSYLK4j91gCnjwIsATCZTicV0CFgsFi13v7t7MgcYgi7IzuDomkjs5uvjFRU%2B7K%2FaJQRqbUbK9kxOlJpTEfAXDdeOUG%2B3GwrC416k9PsIL4DF9KWq9vNPQFaIWL8y9YQcsweGvG641DFZZZ%2B1vOku7776DoSx8XWR8yVhEaMfpCKSYfq1AqRZ0dpjCPIO9hfiWJVjdH%2BdL7%2BOd9dH2HvbbwRcg9CALzTJknauEmvextit2It9z0kA%2Bbi8d9DEFgBcKtcc%2Ba6AgYWeTfknM8%2Fi8wJhEOdwptvczbb0t6pV02MosVhKc4dsythr8opnWxxgpsTPLpB0iPGzJq2oJTK2BIQF2WeEyPs7mmFdicbTd6WLHdWqEr3YjzJXrkscC%2FThJVGZCE1bIwzMrlwAY6pgFoMYKBFsj7uBiA3iQ3mObuzb8sLueZs1wNrhx%2Bre5GiE2c%2BZUXwwF0dmh7NqRP0%2F1G6lBjCH%2BzYfRyE%2F7BzViQLulIjxqoW1wdp4ih7pVTUyPYiUtW9b3jZQDK%2FJA93sWMsw93RCqeze9HGMXZY5kBKuPNfjWJ1UPVBHiiid6yPh6n7kjPwfEY2A3lNWaI4CQl3EZwWZWDKAfxgL1Ac%2BrEov%2BzgSkV&X-Amz-Signature=f4d6d63f38903a9fe6ce1c440dcde7db81064dbdde88e60776b0efb2718e148e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBTB4DV5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJbKbEdT32DQQchfDGt8MF4EQTPA%2FdICto5W5bstlzAiA1YbbsnAo4qcpaZdIezN4FgkQQIdDpAzdOpqdaaxZsQir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMAb1V%2BJ5CMAk35WcxKtwDAz9YAnqvrPwPLx7pJQJWixvoBAA%2FXJWb4FDCr9MB7wcbCRODqXIWaCnjd4KHxsHp12PFWrcbSBUM6c%2FTsW2ODvi0DYP2bhVaw4zLd4LDQ8DmvC7dLbqrJH1b7OVAnGKNMYKCCOjNir7Eur4Ql9XjbjXAhJ2ajz2IwZWPFuHbD%2FY%2F4R4o5dHoVeyK%2FmJz2TGvdMipHV91M%2FW4zpgjWiCn9Dk9cO5LLLHgC94nczkJ5duE%2FyJV8CSYLK4j91gCnjwIsATCZTicV0CFgsFi13v7t7MgcYgi7IzuDomkjs5uvjFRU%2B7K%2FaJQRqbUbK9kxOlJpTEfAXDdeOUG%2B3GwrC416k9PsIL4DF9KWq9vNPQFaIWL8y9YQcsweGvG641DFZZZ%2B1vOku7776DoSx8XWR8yVhEaMfpCKSYfq1AqRZ0dpjCPIO9hfiWJVjdH%2BdL7%2BOd9dH2HvbbwRcg9CALzTJknauEmvextit2It9z0kA%2Bbi8d9DEFgBcKtcc%2Ba6AgYWeTfknM8%2Fi8wJhEOdwptvczbb0t6pV02MosVhKc4dsythr8opnWxxgpsTPLpB0iPGzJq2oJTK2BIQF2WeEyPs7mmFdicbTd6WLHdWqEr3YjzJXrkscC%2FThJVGZCE1bIwzMrlwAY6pgFoMYKBFsj7uBiA3iQ3mObuzb8sLueZs1wNrhx%2Bre5GiE2c%2BZUXwwF0dmh7NqRP0%2F1G6lBjCH%2BzYfRyE%2F7BzViQLulIjxqoW1wdp4ih7pVTUyPYiUtW9b3jZQDK%2FJA93sWMsw93RCqeze9HGMXZY5kBKuPNfjWJ1UPVBHiiid6yPh6n7kjPwfEY2A3lNWaI4CQl3EZwWZWDKAfxgL1Ac%2BrEov%2BzgSkV&X-Amz-Signature=221078d286719e51715b88bdb47ce87d58c322c5da905f5c5802c3362142b80a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
