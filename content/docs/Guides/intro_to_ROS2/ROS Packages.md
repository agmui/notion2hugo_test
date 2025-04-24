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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQL7JAZR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC83nTtfAyXERX%2BafrF41okniKJXqgdm5wKkd%2BUN7P6SgIhAJ84KoSPCQgGWKQDBdTrmf%2BXVv6NIicfIZnlhgNPwM58KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydCkZyLvvOyHLJvBEq3APple5eTdFfU7y7svj35xujrvr6s9ewDkCR016MeDhweXsKO%2BquqzA3oeXVnoe9lzM%2FDpEkdlhqwtQPYxehlcvu94AM1CcuzgOJkcn3TG9v67CVS1cOAEdpQVppnleCFaay%2FrNdDBSISrD4zbEyBUnDFGw2Xf1lszqHgvE6zZ6z32M%2BTJE04BqmO%2BGsCtZ0ZhI7f%2B6JTyLYaxJsiLOb64wk4HpTi0H%2BgOgR9A5s2qhAdtx1nLg6pyCWLkxPc4lLluShteyFfyBnoASNdnAqbapSAeQd%2BxEx04f9ZkOA0VWfJsncKFK%2FRC52iH2eZSDbZK57JB%2FBb17Yb%2Fut6O%2F0NUo6LqZ2K6CuyAIpITp7eNFltkimQvRn9TlVzwyyGmZA9uG1LmjtftJ%2FJHG%2BoQ%2FodhRsFD3RX0UyojDLSm%2BF6EoT8NbnGHRXijgreKT6V9oYNMc%2BUrGlxRu6DKP8i4Fz2aQHTflmytiCTaE1tQlz3kHFoRaRkz6G9TMA88cO%2BjAUWfN%2BaXKtnATjC1Aks4Wv0G26s%2Bs6a8nQ5aVBdsJIkBodqLU3modiA2%2BDsAADvW0mtl7VldNZlpSB%2F3%2BAKoVB%2BfaqJIYIEsMYJJaY435DWXFPqvlXM68EcbjKHv6Y4zD0mafABjqkAQ97QDJQp0n72H5yGearFEXD%2B69EhZiXWPyrKy80wnkWJKmInQZUUEFYURTTXgb463FDfyEYO%2F3YMQyI3yZs3wQAGisoKjXv%2F%2FxX%2BvieKEOqjhu0NEtGFnC%2BCHZ%2FjDBp9b3vhNZls%2FKhir3ukb%2B9X4A5gyJmZqNAarDWPZSJzKhpbH6gvzO5bHeQQyiiDlRowSSzR7QUsvNuu%2FGmNURH2VfN4rLJ&X-Amz-Signature=d29fa70fa3beaf151602dbae6c12281892938ae96648db45eb8c3e871d9ba7f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQL7JAZR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC83nTtfAyXERX%2BafrF41okniKJXqgdm5wKkd%2BUN7P6SgIhAJ84KoSPCQgGWKQDBdTrmf%2BXVv6NIicfIZnlhgNPwM58KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydCkZyLvvOyHLJvBEq3APple5eTdFfU7y7svj35xujrvr6s9ewDkCR016MeDhweXsKO%2BquqzA3oeXVnoe9lzM%2FDpEkdlhqwtQPYxehlcvu94AM1CcuzgOJkcn3TG9v67CVS1cOAEdpQVppnleCFaay%2FrNdDBSISrD4zbEyBUnDFGw2Xf1lszqHgvE6zZ6z32M%2BTJE04BqmO%2BGsCtZ0ZhI7f%2B6JTyLYaxJsiLOb64wk4HpTi0H%2BgOgR9A5s2qhAdtx1nLg6pyCWLkxPc4lLluShteyFfyBnoASNdnAqbapSAeQd%2BxEx04f9ZkOA0VWfJsncKFK%2FRC52iH2eZSDbZK57JB%2FBb17Yb%2Fut6O%2F0NUo6LqZ2K6CuyAIpITp7eNFltkimQvRn9TlVzwyyGmZA9uG1LmjtftJ%2FJHG%2BoQ%2FodhRsFD3RX0UyojDLSm%2BF6EoT8NbnGHRXijgreKT6V9oYNMc%2BUrGlxRu6DKP8i4Fz2aQHTflmytiCTaE1tQlz3kHFoRaRkz6G9TMA88cO%2BjAUWfN%2BaXKtnATjC1Aks4Wv0G26s%2Bs6a8nQ5aVBdsJIkBodqLU3modiA2%2BDsAADvW0mtl7VldNZlpSB%2F3%2BAKoVB%2BfaqJIYIEsMYJJaY435DWXFPqvlXM68EcbjKHv6Y4zD0mafABjqkAQ97QDJQp0n72H5yGearFEXD%2B69EhZiXWPyrKy80wnkWJKmInQZUUEFYURTTXgb463FDfyEYO%2F3YMQyI3yZs3wQAGisoKjXv%2F%2FxX%2BvieKEOqjhu0NEtGFnC%2BCHZ%2FjDBp9b3vhNZls%2FKhir3ukb%2B9X4A5gyJmZqNAarDWPZSJzKhpbH6gvzO5bHeQQyiiDlRowSSzR7QUsvNuu%2FGmNURH2VfN4rLJ&X-Amz-Signature=314360f07b4ae821de10af6239138379aae9ef6ef2279a25d9286fe433af0585&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQL7JAZR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC83nTtfAyXERX%2BafrF41okniKJXqgdm5wKkd%2BUN7P6SgIhAJ84KoSPCQgGWKQDBdTrmf%2BXVv6NIicfIZnlhgNPwM58KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydCkZyLvvOyHLJvBEq3APple5eTdFfU7y7svj35xujrvr6s9ewDkCR016MeDhweXsKO%2BquqzA3oeXVnoe9lzM%2FDpEkdlhqwtQPYxehlcvu94AM1CcuzgOJkcn3TG9v67CVS1cOAEdpQVppnleCFaay%2FrNdDBSISrD4zbEyBUnDFGw2Xf1lszqHgvE6zZ6z32M%2BTJE04BqmO%2BGsCtZ0ZhI7f%2B6JTyLYaxJsiLOb64wk4HpTi0H%2BgOgR9A5s2qhAdtx1nLg6pyCWLkxPc4lLluShteyFfyBnoASNdnAqbapSAeQd%2BxEx04f9ZkOA0VWfJsncKFK%2FRC52iH2eZSDbZK57JB%2FBb17Yb%2Fut6O%2F0NUo6LqZ2K6CuyAIpITp7eNFltkimQvRn9TlVzwyyGmZA9uG1LmjtftJ%2FJHG%2BoQ%2FodhRsFD3RX0UyojDLSm%2BF6EoT8NbnGHRXijgreKT6V9oYNMc%2BUrGlxRu6DKP8i4Fz2aQHTflmytiCTaE1tQlz3kHFoRaRkz6G9TMA88cO%2BjAUWfN%2BaXKtnATjC1Aks4Wv0G26s%2Bs6a8nQ5aVBdsJIkBodqLU3modiA2%2BDsAADvW0mtl7VldNZlpSB%2F3%2BAKoVB%2BfaqJIYIEsMYJJaY435DWXFPqvlXM68EcbjKHv6Y4zD0mafABjqkAQ97QDJQp0n72H5yGearFEXD%2B69EhZiXWPyrKy80wnkWJKmInQZUUEFYURTTXgb463FDfyEYO%2F3YMQyI3yZs3wQAGisoKjXv%2F%2FxX%2BvieKEOqjhu0NEtGFnC%2BCHZ%2FjDBp9b3vhNZls%2FKhir3ukb%2B9X4A5gyJmZqNAarDWPZSJzKhpbH6gvzO5bHeQQyiiDlRowSSzR7QUsvNuu%2FGmNURH2VfN4rLJ&X-Amz-Signature=b98259c5a86dcfb3bcf602136e313de8d75d2996d84b10971eaafa178739eeb2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQL7JAZR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC83nTtfAyXERX%2BafrF41okniKJXqgdm5wKkd%2BUN7P6SgIhAJ84KoSPCQgGWKQDBdTrmf%2BXVv6NIicfIZnlhgNPwM58KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydCkZyLvvOyHLJvBEq3APple5eTdFfU7y7svj35xujrvr6s9ewDkCR016MeDhweXsKO%2BquqzA3oeXVnoe9lzM%2FDpEkdlhqwtQPYxehlcvu94AM1CcuzgOJkcn3TG9v67CVS1cOAEdpQVppnleCFaay%2FrNdDBSISrD4zbEyBUnDFGw2Xf1lszqHgvE6zZ6z32M%2BTJE04BqmO%2BGsCtZ0ZhI7f%2B6JTyLYaxJsiLOb64wk4HpTi0H%2BgOgR9A5s2qhAdtx1nLg6pyCWLkxPc4lLluShteyFfyBnoASNdnAqbapSAeQd%2BxEx04f9ZkOA0VWfJsncKFK%2FRC52iH2eZSDbZK57JB%2FBb17Yb%2Fut6O%2F0NUo6LqZ2K6CuyAIpITp7eNFltkimQvRn9TlVzwyyGmZA9uG1LmjtftJ%2FJHG%2BoQ%2FodhRsFD3RX0UyojDLSm%2BF6EoT8NbnGHRXijgreKT6V9oYNMc%2BUrGlxRu6DKP8i4Fz2aQHTflmytiCTaE1tQlz3kHFoRaRkz6G9TMA88cO%2BjAUWfN%2BaXKtnATjC1Aks4Wv0G26s%2Bs6a8nQ5aVBdsJIkBodqLU3modiA2%2BDsAADvW0mtl7VldNZlpSB%2F3%2BAKoVB%2BfaqJIYIEsMYJJaY435DWXFPqvlXM68EcbjKHv6Y4zD0mafABjqkAQ97QDJQp0n72H5yGearFEXD%2B69EhZiXWPyrKy80wnkWJKmInQZUUEFYURTTXgb463FDfyEYO%2F3YMQyI3yZs3wQAGisoKjXv%2F%2FxX%2BvieKEOqjhu0NEtGFnC%2BCHZ%2FjDBp9b3vhNZls%2FKhir3ukb%2B9X4A5gyJmZqNAarDWPZSJzKhpbH6gvzO5bHeQQyiiDlRowSSzR7QUsvNuu%2FGmNURH2VfN4rLJ&X-Amz-Signature=606018ad7f91f800a0eef68d035b0f5bbc9b6ed57b95cfa3463b8369b4898d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQL7JAZR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC83nTtfAyXERX%2BafrF41okniKJXqgdm5wKkd%2BUN7P6SgIhAJ84KoSPCQgGWKQDBdTrmf%2BXVv6NIicfIZnlhgNPwM58KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydCkZyLvvOyHLJvBEq3APple5eTdFfU7y7svj35xujrvr6s9ewDkCR016MeDhweXsKO%2BquqzA3oeXVnoe9lzM%2FDpEkdlhqwtQPYxehlcvu94AM1CcuzgOJkcn3TG9v67CVS1cOAEdpQVppnleCFaay%2FrNdDBSISrD4zbEyBUnDFGw2Xf1lszqHgvE6zZ6z32M%2BTJE04BqmO%2BGsCtZ0ZhI7f%2B6JTyLYaxJsiLOb64wk4HpTi0H%2BgOgR9A5s2qhAdtx1nLg6pyCWLkxPc4lLluShteyFfyBnoASNdnAqbapSAeQd%2BxEx04f9ZkOA0VWfJsncKFK%2FRC52iH2eZSDbZK57JB%2FBb17Yb%2Fut6O%2F0NUo6LqZ2K6CuyAIpITp7eNFltkimQvRn9TlVzwyyGmZA9uG1LmjtftJ%2FJHG%2BoQ%2FodhRsFD3RX0UyojDLSm%2BF6EoT8NbnGHRXijgreKT6V9oYNMc%2BUrGlxRu6DKP8i4Fz2aQHTflmytiCTaE1tQlz3kHFoRaRkz6G9TMA88cO%2BjAUWfN%2BaXKtnATjC1Aks4Wv0G26s%2Bs6a8nQ5aVBdsJIkBodqLU3modiA2%2BDsAADvW0mtl7VldNZlpSB%2F3%2BAKoVB%2BfaqJIYIEsMYJJaY435DWXFPqvlXM68EcbjKHv6Y4zD0mafABjqkAQ97QDJQp0n72H5yGearFEXD%2B69EhZiXWPyrKy80wnkWJKmInQZUUEFYURTTXgb463FDfyEYO%2F3YMQyI3yZs3wQAGisoKjXv%2F%2FxX%2BvieKEOqjhu0NEtGFnC%2BCHZ%2FjDBp9b3vhNZls%2FKhir3ukb%2B9X4A5gyJmZqNAarDWPZSJzKhpbH6gvzO5bHeQQyiiDlRowSSzR7QUsvNuu%2FGmNURH2VfN4rLJ&X-Amz-Signature=1e9c8b9337f678635cb02882b06a382cb703e3fb0a0858c1b5b9163027eebc14&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQL7JAZR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC83nTtfAyXERX%2BafrF41okniKJXqgdm5wKkd%2BUN7P6SgIhAJ84KoSPCQgGWKQDBdTrmf%2BXVv6NIicfIZnlhgNPwM58KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydCkZyLvvOyHLJvBEq3APple5eTdFfU7y7svj35xujrvr6s9ewDkCR016MeDhweXsKO%2BquqzA3oeXVnoe9lzM%2FDpEkdlhqwtQPYxehlcvu94AM1CcuzgOJkcn3TG9v67CVS1cOAEdpQVppnleCFaay%2FrNdDBSISrD4zbEyBUnDFGw2Xf1lszqHgvE6zZ6z32M%2BTJE04BqmO%2BGsCtZ0ZhI7f%2B6JTyLYaxJsiLOb64wk4HpTi0H%2BgOgR9A5s2qhAdtx1nLg6pyCWLkxPc4lLluShteyFfyBnoASNdnAqbapSAeQd%2BxEx04f9ZkOA0VWfJsncKFK%2FRC52iH2eZSDbZK57JB%2FBb17Yb%2Fut6O%2F0NUo6LqZ2K6CuyAIpITp7eNFltkimQvRn9TlVzwyyGmZA9uG1LmjtftJ%2FJHG%2BoQ%2FodhRsFD3RX0UyojDLSm%2BF6EoT8NbnGHRXijgreKT6V9oYNMc%2BUrGlxRu6DKP8i4Fz2aQHTflmytiCTaE1tQlz3kHFoRaRkz6G9TMA88cO%2BjAUWfN%2BaXKtnATjC1Aks4Wv0G26s%2Bs6a8nQ5aVBdsJIkBodqLU3modiA2%2BDsAADvW0mtl7VldNZlpSB%2F3%2BAKoVB%2BfaqJIYIEsMYJJaY435DWXFPqvlXM68EcbjKHv6Y4zD0mafABjqkAQ97QDJQp0n72H5yGearFEXD%2B69EhZiXWPyrKy80wnkWJKmInQZUUEFYURTTXgb463FDfyEYO%2F3YMQyI3yZs3wQAGisoKjXv%2F%2FxX%2BvieKEOqjhu0NEtGFnC%2BCHZ%2FjDBp9b3vhNZls%2FKhir3ukb%2B9X4A5gyJmZqNAarDWPZSJzKhpbH6gvzO5bHeQQyiiDlRowSSzR7QUsvNuu%2FGmNURH2VfN4rLJ&X-Amz-Signature=7a1a91c23f269a16642fd877b58a02c9acd6b1d026200a60e3da932d0695c215&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQL7JAZR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC83nTtfAyXERX%2BafrF41okniKJXqgdm5wKkd%2BUN7P6SgIhAJ84KoSPCQgGWKQDBdTrmf%2BXVv6NIicfIZnlhgNPwM58KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydCkZyLvvOyHLJvBEq3APple5eTdFfU7y7svj35xujrvr6s9ewDkCR016MeDhweXsKO%2BquqzA3oeXVnoe9lzM%2FDpEkdlhqwtQPYxehlcvu94AM1CcuzgOJkcn3TG9v67CVS1cOAEdpQVppnleCFaay%2FrNdDBSISrD4zbEyBUnDFGw2Xf1lszqHgvE6zZ6z32M%2BTJE04BqmO%2BGsCtZ0ZhI7f%2B6JTyLYaxJsiLOb64wk4HpTi0H%2BgOgR9A5s2qhAdtx1nLg6pyCWLkxPc4lLluShteyFfyBnoASNdnAqbapSAeQd%2BxEx04f9ZkOA0VWfJsncKFK%2FRC52iH2eZSDbZK57JB%2FBb17Yb%2Fut6O%2F0NUo6LqZ2K6CuyAIpITp7eNFltkimQvRn9TlVzwyyGmZA9uG1LmjtftJ%2FJHG%2BoQ%2FodhRsFD3RX0UyojDLSm%2BF6EoT8NbnGHRXijgreKT6V9oYNMc%2BUrGlxRu6DKP8i4Fz2aQHTflmytiCTaE1tQlz3kHFoRaRkz6G9TMA88cO%2BjAUWfN%2BaXKtnATjC1Aks4Wv0G26s%2Bs6a8nQ5aVBdsJIkBodqLU3modiA2%2BDsAADvW0mtl7VldNZlpSB%2F3%2BAKoVB%2BfaqJIYIEsMYJJaY435DWXFPqvlXM68EcbjKHv6Y4zD0mafABjqkAQ97QDJQp0n72H5yGearFEXD%2B69EhZiXWPyrKy80wnkWJKmInQZUUEFYURTTXgb463FDfyEYO%2F3YMQyI3yZs3wQAGisoKjXv%2F%2FxX%2BvieKEOqjhu0NEtGFnC%2BCHZ%2FjDBp9b3vhNZls%2FKhir3ukb%2B9X4A5gyJmZqNAarDWPZSJzKhpbH6gvzO5bHeQQyiiDlRowSSzR7QUsvNuu%2FGmNURH2VfN4rLJ&X-Amz-Signature=5ecf600b1289e3533554fdd9252b199a5c1611daac80e806b73904d3045ba692&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
