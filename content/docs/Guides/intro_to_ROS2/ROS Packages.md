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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTG4SVP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDNH%2BQ93Lt%2BFL4QseGkJ6ft75LITTZo5uhj1aeBxpJdMAiANbDkPmKsr6m%2FKnHYl%2BMiowaqqjbJqoI6ki3B4RlHJRCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMMvnCvuWBnUiiTYKtwDPgU3tCAaSrGNiY64nbhhXdEsRDsADtRhBu02yvQlQDFUcpHCckw%2BtAEfHY0TcWDaa8briW%2FWdZpWr4U5bxQjnndBy13RQtsFMakHBbrosZhl3fVPpOcL0nxCAUX%2B2iKrDyy2%2F2S2V4Exq1mgfCdDBgvT8Yoc4hmeFaevZp9mBJLI5o93L1KHKe%2FaxYHCZcKBDCwT4SPNqJcHlfV2K87VPAezERtecjcTXMwZMY9vjV2tByn7EO3zht%2FcZXGjow6n0ELZ6kXTbWwddrHNIKXRN%2F3KTm1qY4sKtLvXakrJBXHggYP%2FWMP58aNNUpaxLbjQVTyEIcciVGkElkDPB%2B77LMuPkGXzKHgAdg7G3jn1%2Bj9UzcPt3BPT7tJbuRB5wWRT8NUhohJK5PVIX2zNQ18NJeZIlRWwKkvo3qjKnSeUpLg%2BIyvgkzcrSKLM2IqjW7KfG%2Bz6Quie%2B4Exu7W7qobvvrNbyj%2FjE0KzDVIkAZ%2B1mnvRNXo5E2YraoltOU76fUYIdIJgKCgt3sOYVNw%2BSEIDZQ6UsqXQLreEK6jkT%2FdcrQmJ2pUNhn2%2BewXCWmgGaIRgtYKzxPxDCLJ8b97zBw4wd4E8LSAZN5mCXy3NG9yzySYUOLwAr9EM4dqNQMIwu6G5wQY6pgGM2Sbsh4HsQXa9AdvoJ8WIjIdGI7K7kmZXz4zFkyylhOqNmKaQg6fro4yx4x%2BgqIVs4c0P6pDNonbRJq62sCQBetWLni0g8%2FE96ErUZvpTl6YooTMeNYuL81wy1E1hr%2FZZkqnmtwiuj0f1s0nQJg0p9nKQAw60bV1NB9oyr9%2Bk1wyC3Edv%2B29MWVJR8WDwx8F758S4aqxuTALB%2FqOXK%2BfNEUIjVAPS&X-Amz-Signature=e481925a6f8222154f8c52be8bd8110d05281cd8891924d6d6b961497dab2f63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTG4SVP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDNH%2BQ93Lt%2BFL4QseGkJ6ft75LITTZo5uhj1aeBxpJdMAiANbDkPmKsr6m%2FKnHYl%2BMiowaqqjbJqoI6ki3B4RlHJRCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMMvnCvuWBnUiiTYKtwDPgU3tCAaSrGNiY64nbhhXdEsRDsADtRhBu02yvQlQDFUcpHCckw%2BtAEfHY0TcWDaa8briW%2FWdZpWr4U5bxQjnndBy13RQtsFMakHBbrosZhl3fVPpOcL0nxCAUX%2B2iKrDyy2%2F2S2V4Exq1mgfCdDBgvT8Yoc4hmeFaevZp9mBJLI5o93L1KHKe%2FaxYHCZcKBDCwT4SPNqJcHlfV2K87VPAezERtecjcTXMwZMY9vjV2tByn7EO3zht%2FcZXGjow6n0ELZ6kXTbWwddrHNIKXRN%2F3KTm1qY4sKtLvXakrJBXHggYP%2FWMP58aNNUpaxLbjQVTyEIcciVGkElkDPB%2B77LMuPkGXzKHgAdg7G3jn1%2Bj9UzcPt3BPT7tJbuRB5wWRT8NUhohJK5PVIX2zNQ18NJeZIlRWwKkvo3qjKnSeUpLg%2BIyvgkzcrSKLM2IqjW7KfG%2Bz6Quie%2B4Exu7W7qobvvrNbyj%2FjE0KzDVIkAZ%2B1mnvRNXo5E2YraoltOU76fUYIdIJgKCgt3sOYVNw%2BSEIDZQ6UsqXQLreEK6jkT%2FdcrQmJ2pUNhn2%2BewXCWmgGaIRgtYKzxPxDCLJ8b97zBw4wd4E8LSAZN5mCXy3NG9yzySYUOLwAr9EM4dqNQMIwu6G5wQY6pgGM2Sbsh4HsQXa9AdvoJ8WIjIdGI7K7kmZXz4zFkyylhOqNmKaQg6fro4yx4x%2BgqIVs4c0P6pDNonbRJq62sCQBetWLni0g8%2FE96ErUZvpTl6YooTMeNYuL81wy1E1hr%2FZZkqnmtwiuj0f1s0nQJg0p9nKQAw60bV1NB9oyr9%2Bk1wyC3Edv%2B29MWVJR8WDwx8F758S4aqxuTALB%2FqOXK%2BfNEUIjVAPS&X-Amz-Signature=864e27a5d41dfbdce3ba300f4039009caa54e3933e0a6d01a27ac69de01f7bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTG4SVP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDNH%2BQ93Lt%2BFL4QseGkJ6ft75LITTZo5uhj1aeBxpJdMAiANbDkPmKsr6m%2FKnHYl%2BMiowaqqjbJqoI6ki3B4RlHJRCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMMvnCvuWBnUiiTYKtwDPgU3tCAaSrGNiY64nbhhXdEsRDsADtRhBu02yvQlQDFUcpHCckw%2BtAEfHY0TcWDaa8briW%2FWdZpWr4U5bxQjnndBy13RQtsFMakHBbrosZhl3fVPpOcL0nxCAUX%2B2iKrDyy2%2F2S2V4Exq1mgfCdDBgvT8Yoc4hmeFaevZp9mBJLI5o93L1KHKe%2FaxYHCZcKBDCwT4SPNqJcHlfV2K87VPAezERtecjcTXMwZMY9vjV2tByn7EO3zht%2FcZXGjow6n0ELZ6kXTbWwddrHNIKXRN%2F3KTm1qY4sKtLvXakrJBXHggYP%2FWMP58aNNUpaxLbjQVTyEIcciVGkElkDPB%2B77LMuPkGXzKHgAdg7G3jn1%2Bj9UzcPt3BPT7tJbuRB5wWRT8NUhohJK5PVIX2zNQ18NJeZIlRWwKkvo3qjKnSeUpLg%2BIyvgkzcrSKLM2IqjW7KfG%2Bz6Quie%2B4Exu7W7qobvvrNbyj%2FjE0KzDVIkAZ%2B1mnvRNXo5E2YraoltOU76fUYIdIJgKCgt3sOYVNw%2BSEIDZQ6UsqXQLreEK6jkT%2FdcrQmJ2pUNhn2%2BewXCWmgGaIRgtYKzxPxDCLJ8b97zBw4wd4E8LSAZN5mCXy3NG9yzySYUOLwAr9EM4dqNQMIwu6G5wQY6pgGM2Sbsh4HsQXa9AdvoJ8WIjIdGI7K7kmZXz4zFkyylhOqNmKaQg6fro4yx4x%2BgqIVs4c0P6pDNonbRJq62sCQBetWLni0g8%2FE96ErUZvpTl6YooTMeNYuL81wy1E1hr%2FZZkqnmtwiuj0f1s0nQJg0p9nKQAw60bV1NB9oyr9%2Bk1wyC3Edv%2B29MWVJR8WDwx8F758S4aqxuTALB%2FqOXK%2BfNEUIjVAPS&X-Amz-Signature=78bb8f2140bdc0f810883666ac60bc0da28aee7a5b2dbd0e0a1715a79c4b9ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTG4SVP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDNH%2BQ93Lt%2BFL4QseGkJ6ft75LITTZo5uhj1aeBxpJdMAiANbDkPmKsr6m%2FKnHYl%2BMiowaqqjbJqoI6ki3B4RlHJRCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMMvnCvuWBnUiiTYKtwDPgU3tCAaSrGNiY64nbhhXdEsRDsADtRhBu02yvQlQDFUcpHCckw%2BtAEfHY0TcWDaa8briW%2FWdZpWr4U5bxQjnndBy13RQtsFMakHBbrosZhl3fVPpOcL0nxCAUX%2B2iKrDyy2%2F2S2V4Exq1mgfCdDBgvT8Yoc4hmeFaevZp9mBJLI5o93L1KHKe%2FaxYHCZcKBDCwT4SPNqJcHlfV2K87VPAezERtecjcTXMwZMY9vjV2tByn7EO3zht%2FcZXGjow6n0ELZ6kXTbWwddrHNIKXRN%2F3KTm1qY4sKtLvXakrJBXHggYP%2FWMP58aNNUpaxLbjQVTyEIcciVGkElkDPB%2B77LMuPkGXzKHgAdg7G3jn1%2Bj9UzcPt3BPT7tJbuRB5wWRT8NUhohJK5PVIX2zNQ18NJeZIlRWwKkvo3qjKnSeUpLg%2BIyvgkzcrSKLM2IqjW7KfG%2Bz6Quie%2B4Exu7W7qobvvrNbyj%2FjE0KzDVIkAZ%2B1mnvRNXo5E2YraoltOU76fUYIdIJgKCgt3sOYVNw%2BSEIDZQ6UsqXQLreEK6jkT%2FdcrQmJ2pUNhn2%2BewXCWmgGaIRgtYKzxPxDCLJ8b97zBw4wd4E8LSAZN5mCXy3NG9yzySYUOLwAr9EM4dqNQMIwu6G5wQY6pgGM2Sbsh4HsQXa9AdvoJ8WIjIdGI7K7kmZXz4zFkyylhOqNmKaQg6fro4yx4x%2BgqIVs4c0P6pDNonbRJq62sCQBetWLni0g8%2FE96ErUZvpTl6YooTMeNYuL81wy1E1hr%2FZZkqnmtwiuj0f1s0nQJg0p9nKQAw60bV1NB9oyr9%2Bk1wyC3Edv%2B29MWVJR8WDwx8F758S4aqxuTALB%2FqOXK%2BfNEUIjVAPS&X-Amz-Signature=03c7c47331ef22c10869df842c3fc0da3ae77cd59e54a25d35467933b9fe15c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTG4SVP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDNH%2BQ93Lt%2BFL4QseGkJ6ft75LITTZo5uhj1aeBxpJdMAiANbDkPmKsr6m%2FKnHYl%2BMiowaqqjbJqoI6ki3B4RlHJRCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMMvnCvuWBnUiiTYKtwDPgU3tCAaSrGNiY64nbhhXdEsRDsADtRhBu02yvQlQDFUcpHCckw%2BtAEfHY0TcWDaa8briW%2FWdZpWr4U5bxQjnndBy13RQtsFMakHBbrosZhl3fVPpOcL0nxCAUX%2B2iKrDyy2%2F2S2V4Exq1mgfCdDBgvT8Yoc4hmeFaevZp9mBJLI5o93L1KHKe%2FaxYHCZcKBDCwT4SPNqJcHlfV2K87VPAezERtecjcTXMwZMY9vjV2tByn7EO3zht%2FcZXGjow6n0ELZ6kXTbWwddrHNIKXRN%2F3KTm1qY4sKtLvXakrJBXHggYP%2FWMP58aNNUpaxLbjQVTyEIcciVGkElkDPB%2B77LMuPkGXzKHgAdg7G3jn1%2Bj9UzcPt3BPT7tJbuRB5wWRT8NUhohJK5PVIX2zNQ18NJeZIlRWwKkvo3qjKnSeUpLg%2BIyvgkzcrSKLM2IqjW7KfG%2Bz6Quie%2B4Exu7W7qobvvrNbyj%2FjE0KzDVIkAZ%2B1mnvRNXo5E2YraoltOU76fUYIdIJgKCgt3sOYVNw%2BSEIDZQ6UsqXQLreEK6jkT%2FdcrQmJ2pUNhn2%2BewXCWmgGaIRgtYKzxPxDCLJ8b97zBw4wd4E8LSAZN5mCXy3NG9yzySYUOLwAr9EM4dqNQMIwu6G5wQY6pgGM2Sbsh4HsQXa9AdvoJ8WIjIdGI7K7kmZXz4zFkyylhOqNmKaQg6fro4yx4x%2BgqIVs4c0P6pDNonbRJq62sCQBetWLni0g8%2FE96ErUZvpTl6YooTMeNYuL81wy1E1hr%2FZZkqnmtwiuj0f1s0nQJg0p9nKQAw60bV1NB9oyr9%2Bk1wyC3Edv%2B29MWVJR8WDwx8F758S4aqxuTALB%2FqOXK%2BfNEUIjVAPS&X-Amz-Signature=065ed7b08d2d2cf12dc80890cacc828e48319866f68ab3a34ed9fd5c3087c431&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTG4SVP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDNH%2BQ93Lt%2BFL4QseGkJ6ft75LITTZo5uhj1aeBxpJdMAiANbDkPmKsr6m%2FKnHYl%2BMiowaqqjbJqoI6ki3B4RlHJRCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMMvnCvuWBnUiiTYKtwDPgU3tCAaSrGNiY64nbhhXdEsRDsADtRhBu02yvQlQDFUcpHCckw%2BtAEfHY0TcWDaa8briW%2FWdZpWr4U5bxQjnndBy13RQtsFMakHBbrosZhl3fVPpOcL0nxCAUX%2B2iKrDyy2%2F2S2V4Exq1mgfCdDBgvT8Yoc4hmeFaevZp9mBJLI5o93L1KHKe%2FaxYHCZcKBDCwT4SPNqJcHlfV2K87VPAezERtecjcTXMwZMY9vjV2tByn7EO3zht%2FcZXGjow6n0ELZ6kXTbWwddrHNIKXRN%2F3KTm1qY4sKtLvXakrJBXHggYP%2FWMP58aNNUpaxLbjQVTyEIcciVGkElkDPB%2B77LMuPkGXzKHgAdg7G3jn1%2Bj9UzcPt3BPT7tJbuRB5wWRT8NUhohJK5PVIX2zNQ18NJeZIlRWwKkvo3qjKnSeUpLg%2BIyvgkzcrSKLM2IqjW7KfG%2Bz6Quie%2B4Exu7W7qobvvrNbyj%2FjE0KzDVIkAZ%2B1mnvRNXo5E2YraoltOU76fUYIdIJgKCgt3sOYVNw%2BSEIDZQ6UsqXQLreEK6jkT%2FdcrQmJ2pUNhn2%2BewXCWmgGaIRgtYKzxPxDCLJ8b97zBw4wd4E8LSAZN5mCXy3NG9yzySYUOLwAr9EM4dqNQMIwu6G5wQY6pgGM2Sbsh4HsQXa9AdvoJ8WIjIdGI7K7kmZXz4zFkyylhOqNmKaQg6fro4yx4x%2BgqIVs4c0P6pDNonbRJq62sCQBetWLni0g8%2FE96ErUZvpTl6YooTMeNYuL81wy1E1hr%2FZZkqnmtwiuj0f1s0nQJg0p9nKQAw60bV1NB9oyr9%2Bk1wyC3Edv%2B29MWVJR8WDwx8F758S4aqxuTALB%2FqOXK%2BfNEUIjVAPS&X-Amz-Signature=a09427953e284b0503a6a777e3d241f89a5e245a463250f6accda2603670cf05&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTG4SVP%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIDNH%2BQ93Lt%2BFL4QseGkJ6ft75LITTZo5uhj1aeBxpJdMAiANbDkPmKsr6m%2FKnHYl%2BMiowaqqjbJqoI6ki3B4RlHJRCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMMvnCvuWBnUiiTYKtwDPgU3tCAaSrGNiY64nbhhXdEsRDsADtRhBu02yvQlQDFUcpHCckw%2BtAEfHY0TcWDaa8briW%2FWdZpWr4U5bxQjnndBy13RQtsFMakHBbrosZhl3fVPpOcL0nxCAUX%2B2iKrDyy2%2F2S2V4Exq1mgfCdDBgvT8Yoc4hmeFaevZp9mBJLI5o93L1KHKe%2FaxYHCZcKBDCwT4SPNqJcHlfV2K87VPAezERtecjcTXMwZMY9vjV2tByn7EO3zht%2FcZXGjow6n0ELZ6kXTbWwddrHNIKXRN%2F3KTm1qY4sKtLvXakrJBXHggYP%2FWMP58aNNUpaxLbjQVTyEIcciVGkElkDPB%2B77LMuPkGXzKHgAdg7G3jn1%2Bj9UzcPt3BPT7tJbuRB5wWRT8NUhohJK5PVIX2zNQ18NJeZIlRWwKkvo3qjKnSeUpLg%2BIyvgkzcrSKLM2IqjW7KfG%2Bz6Quie%2B4Exu7W7qobvvrNbyj%2FjE0KzDVIkAZ%2B1mnvRNXo5E2YraoltOU76fUYIdIJgKCgt3sOYVNw%2BSEIDZQ6UsqXQLreEK6jkT%2FdcrQmJ2pUNhn2%2BewXCWmgGaIRgtYKzxPxDCLJ8b97zBw4wd4E8LSAZN5mCXy3NG9yzySYUOLwAr9EM4dqNQMIwu6G5wQY6pgGM2Sbsh4HsQXa9AdvoJ8WIjIdGI7K7kmZXz4zFkyylhOqNmKaQg6fro4yx4x%2BgqIVs4c0P6pDNonbRJq62sCQBetWLni0g8%2FE96ErUZvpTl6YooTMeNYuL81wy1E1hr%2FZZkqnmtwiuj0f1s0nQJg0p9nKQAw60bV1NB9oyr9%2Bk1wyC3Edv%2B29MWVJR8WDwx8F758S4aqxuTALB%2FqOXK%2BfNEUIjVAPS&X-Amz-Signature=9715a41f0ff7a8d02d33898f40f795c634811c33c08703063ee4db2bc6af1f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
