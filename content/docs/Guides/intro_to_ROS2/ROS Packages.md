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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMOHPV3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGiyWZhEc9suUNUtsusUyS2zrX92VQD%2BxlQr%2FJpFif%2FAiEAsAazF%2BMaBuKm%2FaGj8YZYqwCtQqJVUwpFf8wypKI1zh8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPr%2F8xFkNiuGs3V5GSrcA7UkcXwveZ3bHBHsjNoJtrWb1QFi9xq4OGUSTmfpeIzV8sHSJUYZ%2BRFDDFiKrU9%2BiYqYS99J4ZMdXrmokkJcrpVqSfwpQ35b3JjqWxEl4nDFnkbJRC%2Fgjz2ozp6nS05ANzvYqLDVj1gEUR1UKALCLjvayTjwr4Mwx%2FeA6fhdsF57hmPFRnuNpz5bGy%2B2VS4In6GFIKPClvtvfylOrPGalCpFfsItbT6al13okYDdzQm6oNqyHkPnLlLYSPyOySerhcUV2XvvxEBCowPNJYlO6y1mqeWNtJKS2STjow6wjpAjv3%2FyA3oEaSofFSSfbOMUp6MZz83Gkb7Fi0buP2HTM%2B%2FtxqJZKADbSAA2XW18qPN%2BI1lGLynBFOrthuj8Fa3G84UOTzRuXAGqLrCn%2FXF1MyL108XfjUHStp6GHrsAAxrtNvN1m%2B1QCyGoXgcvEofpKGgk8k%2BhTCngbjYosiiz%2FtyJh77HspaJb7g7PNwbe%2BPTK0WKDT7ZHWXnYGSZ3JYCkjHXHA4vg4yF9gfRmzjoedZUu9rIbSyEC04e9Cwl6zFDU85Ys1BjMeo4wQTJ4H6CflB5vGC2gm0G8LHz%2BPBIvAHGQAE99rB0aN9t0Q%2Fc5%2B%2FR1VHc7UTtMb2qbkszMM%2FhrcEGOqUBMyRzTdDRndTRMgTx2n%2F0F%2Flutv8Pv6%2B9GMh8x0Y5V98SsfQadntZTGvMJ0mSVtZVoAxB27nCzQXd8dip%2BUhIRy33w3plxJAE0Q5rxo4YxUhXDad6T5LdyIZ126Ox8ZF97r8uc61eBeWb9ltqqSmI3VZfz9z4btW%2B1PFu%2FyVzFr4DV%2FOmcfzPON7SLksJ8NixcZOibCEo2uvR6klRJvbQuo0U7Tav&X-Amz-Signature=5bcf3ec7282ac9c70da47d32a640669ab238754c0663bcec856d95fd71547a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMOHPV3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGiyWZhEc9suUNUtsusUyS2zrX92VQD%2BxlQr%2FJpFif%2FAiEAsAazF%2BMaBuKm%2FaGj8YZYqwCtQqJVUwpFf8wypKI1zh8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPr%2F8xFkNiuGs3V5GSrcA7UkcXwveZ3bHBHsjNoJtrWb1QFi9xq4OGUSTmfpeIzV8sHSJUYZ%2BRFDDFiKrU9%2BiYqYS99J4ZMdXrmokkJcrpVqSfwpQ35b3JjqWxEl4nDFnkbJRC%2Fgjz2ozp6nS05ANzvYqLDVj1gEUR1UKALCLjvayTjwr4Mwx%2FeA6fhdsF57hmPFRnuNpz5bGy%2B2VS4In6GFIKPClvtvfylOrPGalCpFfsItbT6al13okYDdzQm6oNqyHkPnLlLYSPyOySerhcUV2XvvxEBCowPNJYlO6y1mqeWNtJKS2STjow6wjpAjv3%2FyA3oEaSofFSSfbOMUp6MZz83Gkb7Fi0buP2HTM%2B%2FtxqJZKADbSAA2XW18qPN%2BI1lGLynBFOrthuj8Fa3G84UOTzRuXAGqLrCn%2FXF1MyL108XfjUHStp6GHrsAAxrtNvN1m%2B1QCyGoXgcvEofpKGgk8k%2BhTCngbjYosiiz%2FtyJh77HspaJb7g7PNwbe%2BPTK0WKDT7ZHWXnYGSZ3JYCkjHXHA4vg4yF9gfRmzjoedZUu9rIbSyEC04e9Cwl6zFDU85Ys1BjMeo4wQTJ4H6CflB5vGC2gm0G8LHz%2BPBIvAHGQAE99rB0aN9t0Q%2Fc5%2B%2FR1VHc7UTtMb2qbkszMM%2FhrcEGOqUBMyRzTdDRndTRMgTx2n%2F0F%2Flutv8Pv6%2B9GMh8x0Y5V98SsfQadntZTGvMJ0mSVtZVoAxB27nCzQXd8dip%2BUhIRy33w3plxJAE0Q5rxo4YxUhXDad6T5LdyIZ126Ox8ZF97r8uc61eBeWb9ltqqSmI3VZfz9z4btW%2B1PFu%2FyVzFr4DV%2FOmcfzPON7SLksJ8NixcZOibCEo2uvR6klRJvbQuo0U7Tav&X-Amz-Signature=5a69e56b4dddfbf344c63c85e0e6b5322dcafee8e3e0db089046ccff3dae8937&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMOHPV3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGiyWZhEc9suUNUtsusUyS2zrX92VQD%2BxlQr%2FJpFif%2FAiEAsAazF%2BMaBuKm%2FaGj8YZYqwCtQqJVUwpFf8wypKI1zh8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPr%2F8xFkNiuGs3V5GSrcA7UkcXwveZ3bHBHsjNoJtrWb1QFi9xq4OGUSTmfpeIzV8sHSJUYZ%2BRFDDFiKrU9%2BiYqYS99J4ZMdXrmokkJcrpVqSfwpQ35b3JjqWxEl4nDFnkbJRC%2Fgjz2ozp6nS05ANzvYqLDVj1gEUR1UKALCLjvayTjwr4Mwx%2FeA6fhdsF57hmPFRnuNpz5bGy%2B2VS4In6GFIKPClvtvfylOrPGalCpFfsItbT6al13okYDdzQm6oNqyHkPnLlLYSPyOySerhcUV2XvvxEBCowPNJYlO6y1mqeWNtJKS2STjow6wjpAjv3%2FyA3oEaSofFSSfbOMUp6MZz83Gkb7Fi0buP2HTM%2B%2FtxqJZKADbSAA2XW18qPN%2BI1lGLynBFOrthuj8Fa3G84UOTzRuXAGqLrCn%2FXF1MyL108XfjUHStp6GHrsAAxrtNvN1m%2B1QCyGoXgcvEofpKGgk8k%2BhTCngbjYosiiz%2FtyJh77HspaJb7g7PNwbe%2BPTK0WKDT7ZHWXnYGSZ3JYCkjHXHA4vg4yF9gfRmzjoedZUu9rIbSyEC04e9Cwl6zFDU85Ys1BjMeo4wQTJ4H6CflB5vGC2gm0G8LHz%2BPBIvAHGQAE99rB0aN9t0Q%2Fc5%2B%2FR1VHc7UTtMb2qbkszMM%2FhrcEGOqUBMyRzTdDRndTRMgTx2n%2F0F%2Flutv8Pv6%2B9GMh8x0Y5V98SsfQadntZTGvMJ0mSVtZVoAxB27nCzQXd8dip%2BUhIRy33w3plxJAE0Q5rxo4YxUhXDad6T5LdyIZ126Ox8ZF97r8uc61eBeWb9ltqqSmI3VZfz9z4btW%2B1PFu%2FyVzFr4DV%2FOmcfzPON7SLksJ8NixcZOibCEo2uvR6klRJvbQuo0U7Tav&X-Amz-Signature=822b6d978df9a025d9628fc0b00c8880301f9730d1e4a25ba87c53c93b576c57&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMOHPV3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGiyWZhEc9suUNUtsusUyS2zrX92VQD%2BxlQr%2FJpFif%2FAiEAsAazF%2BMaBuKm%2FaGj8YZYqwCtQqJVUwpFf8wypKI1zh8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPr%2F8xFkNiuGs3V5GSrcA7UkcXwveZ3bHBHsjNoJtrWb1QFi9xq4OGUSTmfpeIzV8sHSJUYZ%2BRFDDFiKrU9%2BiYqYS99J4ZMdXrmokkJcrpVqSfwpQ35b3JjqWxEl4nDFnkbJRC%2Fgjz2ozp6nS05ANzvYqLDVj1gEUR1UKALCLjvayTjwr4Mwx%2FeA6fhdsF57hmPFRnuNpz5bGy%2B2VS4In6GFIKPClvtvfylOrPGalCpFfsItbT6al13okYDdzQm6oNqyHkPnLlLYSPyOySerhcUV2XvvxEBCowPNJYlO6y1mqeWNtJKS2STjow6wjpAjv3%2FyA3oEaSofFSSfbOMUp6MZz83Gkb7Fi0buP2HTM%2B%2FtxqJZKADbSAA2XW18qPN%2BI1lGLynBFOrthuj8Fa3G84UOTzRuXAGqLrCn%2FXF1MyL108XfjUHStp6GHrsAAxrtNvN1m%2B1QCyGoXgcvEofpKGgk8k%2BhTCngbjYosiiz%2FtyJh77HspaJb7g7PNwbe%2BPTK0WKDT7ZHWXnYGSZ3JYCkjHXHA4vg4yF9gfRmzjoedZUu9rIbSyEC04e9Cwl6zFDU85Ys1BjMeo4wQTJ4H6CflB5vGC2gm0G8LHz%2BPBIvAHGQAE99rB0aN9t0Q%2Fc5%2B%2FR1VHc7UTtMb2qbkszMM%2FhrcEGOqUBMyRzTdDRndTRMgTx2n%2F0F%2Flutv8Pv6%2B9GMh8x0Y5V98SsfQadntZTGvMJ0mSVtZVoAxB27nCzQXd8dip%2BUhIRy33w3plxJAE0Q5rxo4YxUhXDad6T5LdyIZ126Ox8ZF97r8uc61eBeWb9ltqqSmI3VZfz9z4btW%2B1PFu%2FyVzFr4DV%2FOmcfzPON7SLksJ8NixcZOibCEo2uvR6klRJvbQuo0U7Tav&X-Amz-Signature=e2c2fa42d64f321f7ab49503a630bbab80e027f3c1adf4b0f3364c972f205ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMOHPV3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGiyWZhEc9suUNUtsusUyS2zrX92VQD%2BxlQr%2FJpFif%2FAiEAsAazF%2BMaBuKm%2FaGj8YZYqwCtQqJVUwpFf8wypKI1zh8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPr%2F8xFkNiuGs3V5GSrcA7UkcXwveZ3bHBHsjNoJtrWb1QFi9xq4OGUSTmfpeIzV8sHSJUYZ%2BRFDDFiKrU9%2BiYqYS99J4ZMdXrmokkJcrpVqSfwpQ35b3JjqWxEl4nDFnkbJRC%2Fgjz2ozp6nS05ANzvYqLDVj1gEUR1UKALCLjvayTjwr4Mwx%2FeA6fhdsF57hmPFRnuNpz5bGy%2B2VS4In6GFIKPClvtvfylOrPGalCpFfsItbT6al13okYDdzQm6oNqyHkPnLlLYSPyOySerhcUV2XvvxEBCowPNJYlO6y1mqeWNtJKS2STjow6wjpAjv3%2FyA3oEaSofFSSfbOMUp6MZz83Gkb7Fi0buP2HTM%2B%2FtxqJZKADbSAA2XW18qPN%2BI1lGLynBFOrthuj8Fa3G84UOTzRuXAGqLrCn%2FXF1MyL108XfjUHStp6GHrsAAxrtNvN1m%2B1QCyGoXgcvEofpKGgk8k%2BhTCngbjYosiiz%2FtyJh77HspaJb7g7PNwbe%2BPTK0WKDT7ZHWXnYGSZ3JYCkjHXHA4vg4yF9gfRmzjoedZUu9rIbSyEC04e9Cwl6zFDU85Ys1BjMeo4wQTJ4H6CflB5vGC2gm0G8LHz%2BPBIvAHGQAE99rB0aN9t0Q%2Fc5%2B%2FR1VHc7UTtMb2qbkszMM%2FhrcEGOqUBMyRzTdDRndTRMgTx2n%2F0F%2Flutv8Pv6%2B9GMh8x0Y5V98SsfQadntZTGvMJ0mSVtZVoAxB27nCzQXd8dip%2BUhIRy33w3plxJAE0Q5rxo4YxUhXDad6T5LdyIZ126Ox8ZF97r8uc61eBeWb9ltqqSmI3VZfz9z4btW%2B1PFu%2FyVzFr4DV%2FOmcfzPON7SLksJ8NixcZOibCEo2uvR6klRJvbQuo0U7Tav&X-Amz-Signature=cf0552458ee3befb20842b6fb21cd58b68d5d374afd9912b90723ec8d394a4c6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMOHPV3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGiyWZhEc9suUNUtsusUyS2zrX92VQD%2BxlQr%2FJpFif%2FAiEAsAazF%2BMaBuKm%2FaGj8YZYqwCtQqJVUwpFf8wypKI1zh8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPr%2F8xFkNiuGs3V5GSrcA7UkcXwveZ3bHBHsjNoJtrWb1QFi9xq4OGUSTmfpeIzV8sHSJUYZ%2BRFDDFiKrU9%2BiYqYS99J4ZMdXrmokkJcrpVqSfwpQ35b3JjqWxEl4nDFnkbJRC%2Fgjz2ozp6nS05ANzvYqLDVj1gEUR1UKALCLjvayTjwr4Mwx%2FeA6fhdsF57hmPFRnuNpz5bGy%2B2VS4In6GFIKPClvtvfylOrPGalCpFfsItbT6al13okYDdzQm6oNqyHkPnLlLYSPyOySerhcUV2XvvxEBCowPNJYlO6y1mqeWNtJKS2STjow6wjpAjv3%2FyA3oEaSofFSSfbOMUp6MZz83Gkb7Fi0buP2HTM%2B%2FtxqJZKADbSAA2XW18qPN%2BI1lGLynBFOrthuj8Fa3G84UOTzRuXAGqLrCn%2FXF1MyL108XfjUHStp6GHrsAAxrtNvN1m%2B1QCyGoXgcvEofpKGgk8k%2BhTCngbjYosiiz%2FtyJh77HspaJb7g7PNwbe%2BPTK0WKDT7ZHWXnYGSZ3JYCkjHXHA4vg4yF9gfRmzjoedZUu9rIbSyEC04e9Cwl6zFDU85Ys1BjMeo4wQTJ4H6CflB5vGC2gm0G8LHz%2BPBIvAHGQAE99rB0aN9t0Q%2Fc5%2B%2FR1VHc7UTtMb2qbkszMM%2FhrcEGOqUBMyRzTdDRndTRMgTx2n%2F0F%2Flutv8Pv6%2B9GMh8x0Y5V98SsfQadntZTGvMJ0mSVtZVoAxB27nCzQXd8dip%2BUhIRy33w3plxJAE0Q5rxo4YxUhXDad6T5LdyIZ126Ox8ZF97r8uc61eBeWb9ltqqSmI3VZfz9z4btW%2B1PFu%2FyVzFr4DV%2FOmcfzPON7SLksJ8NixcZOibCEo2uvR6klRJvbQuo0U7Tav&X-Amz-Signature=c3d45c9d8748ccd4824bd0f9b743f915b9071ee868ad4d545afc7fcde49687da&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYMOHPV3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGiyWZhEc9suUNUtsusUyS2zrX92VQD%2BxlQr%2FJpFif%2FAiEAsAazF%2BMaBuKm%2FaGj8YZYqwCtQqJVUwpFf8wypKI1zh8qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPr%2F8xFkNiuGs3V5GSrcA7UkcXwveZ3bHBHsjNoJtrWb1QFi9xq4OGUSTmfpeIzV8sHSJUYZ%2BRFDDFiKrU9%2BiYqYS99J4ZMdXrmokkJcrpVqSfwpQ35b3JjqWxEl4nDFnkbJRC%2Fgjz2ozp6nS05ANzvYqLDVj1gEUR1UKALCLjvayTjwr4Mwx%2FeA6fhdsF57hmPFRnuNpz5bGy%2B2VS4In6GFIKPClvtvfylOrPGalCpFfsItbT6al13okYDdzQm6oNqyHkPnLlLYSPyOySerhcUV2XvvxEBCowPNJYlO6y1mqeWNtJKS2STjow6wjpAjv3%2FyA3oEaSofFSSfbOMUp6MZz83Gkb7Fi0buP2HTM%2B%2FtxqJZKADbSAA2XW18qPN%2BI1lGLynBFOrthuj8Fa3G84UOTzRuXAGqLrCn%2FXF1MyL108XfjUHStp6GHrsAAxrtNvN1m%2B1QCyGoXgcvEofpKGgk8k%2BhTCngbjYosiiz%2FtyJh77HspaJb7g7PNwbe%2BPTK0WKDT7ZHWXnYGSZ3JYCkjHXHA4vg4yF9gfRmzjoedZUu9rIbSyEC04e9Cwl6zFDU85Ys1BjMeo4wQTJ4H6CflB5vGC2gm0G8LHz%2BPBIvAHGQAE99rB0aN9t0Q%2Fc5%2B%2FR1VHc7UTtMb2qbkszMM%2FhrcEGOqUBMyRzTdDRndTRMgTx2n%2F0F%2Flutv8Pv6%2B9GMh8x0Y5V98SsfQadntZTGvMJ0mSVtZVoAxB27nCzQXd8dip%2BUhIRy33w3plxJAE0Q5rxo4YxUhXDad6T5LdyIZ126Ox8ZF97r8uc61eBeWb9ltqqSmI3VZfz9z4btW%2B1PFu%2FyVzFr4DV%2FOmcfzPON7SLksJ8NixcZOibCEo2uvR6klRJvbQuo0U7Tav&X-Amz-Signature=02f510bd393f295d24eb6a35b216f6c7950be06b09a2c782e6ef7c54b7e9d491&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
