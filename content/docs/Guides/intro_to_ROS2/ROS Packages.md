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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVU7ZRF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDCQNAw4a9qW%2FLzW0noxrB3wixw39NhO0sX0Otgn9fFiAIgVxdCjELPkO4E3o8eunMO48RBXtRMIhf7kA%2B4I%2BWxIEgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BnQ5VlBjgcyhfw2ircA%2FftrHPD5epKYMAyCqZL9fKSKLxqJUGpt2rkq4%2FFbK3%2BWSBbVAjLan0%2BBoCqEyg2cB5JadT38ot2ZM6NKR2z10YT7tzDFo0cMNDk0Jdf9sc2kASCga0fQB%2Fkz7v7pMQLBgpGhKw%2BsnwmdHrkLTH%2Bq%2FVg7fF35M0jFYTmzede6Oe7DERLBaNJJyIAjsoBDf0Su2tTSz8dSL14%2BFlnvXnRuiFByWcfV6bEr3N%2FEhJMrXi0Taj7YHvFOd%2FRlPUqwE%2FooU%2BCXJp0NZuwtHKHCfI%2FMoiaRJhNIy25NPSa%2FdvuoMW7954err2Cb67OKJms5hUqB3b8VTygYJeUS%2BgRzXMbmfd3QAQG1rIRW8QdC4nkcJwKQflqJ7aBMawQO9m%2BZToDSKuKlO3etcSZwLTauANaDk4lddfXpPgQC78XeGpK9qF0112Fggh2fJaJsvF%2Bv%2BKxDitd6w0TJxVrxVZlwH2954AYFfmaFiD30ntb9EabFy2LLMC3WMxifvkKrP6CLz7pDakGz9dXMX%2BJ%2FQ5Sr50jtzPcBxlBuEmZFkOX4p9E%2BE6CtP9rWtoYribuKG8qj4%2BNSJq6%2FbntDXCVPrK7hVmZ366aEXdIwhpUPhVhPoRVG5fzjJgGKKNbnLO6cNk2MJ3f18AGOqUB2Hcw%2F%2BqdXJKeEI0j9KCVaya3wPqhfF2hj64HjdmXqTjtlCJqW3ygJNkxVf91fXyK7O6TXs9VgAEurMR6pHPHGKPOi1jUaRv2Dj32PQ1cO5lqORwHGNbp2Ktn%2FYkkhe7SRXAf6xQba2TnwEIgDjD7JsCmjANNJsFIS23Oq8jrsEo286W4m8zGKv91KkFCAVIcJWs7%2Bnti51hwMMRE3u2xTlO8rhk%2F&X-Amz-Signature=3026f9922263920fe96c2732c78b6a0d9ec7ce8c04a297ff987617ee8fabe79a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVU7ZRF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDCQNAw4a9qW%2FLzW0noxrB3wixw39NhO0sX0Otgn9fFiAIgVxdCjELPkO4E3o8eunMO48RBXtRMIhf7kA%2B4I%2BWxIEgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BnQ5VlBjgcyhfw2ircA%2FftrHPD5epKYMAyCqZL9fKSKLxqJUGpt2rkq4%2FFbK3%2BWSBbVAjLan0%2BBoCqEyg2cB5JadT38ot2ZM6NKR2z10YT7tzDFo0cMNDk0Jdf9sc2kASCga0fQB%2Fkz7v7pMQLBgpGhKw%2BsnwmdHrkLTH%2Bq%2FVg7fF35M0jFYTmzede6Oe7DERLBaNJJyIAjsoBDf0Su2tTSz8dSL14%2BFlnvXnRuiFByWcfV6bEr3N%2FEhJMrXi0Taj7YHvFOd%2FRlPUqwE%2FooU%2BCXJp0NZuwtHKHCfI%2FMoiaRJhNIy25NPSa%2FdvuoMW7954err2Cb67OKJms5hUqB3b8VTygYJeUS%2BgRzXMbmfd3QAQG1rIRW8QdC4nkcJwKQflqJ7aBMawQO9m%2BZToDSKuKlO3etcSZwLTauANaDk4lddfXpPgQC78XeGpK9qF0112Fggh2fJaJsvF%2Bv%2BKxDitd6w0TJxVrxVZlwH2954AYFfmaFiD30ntb9EabFy2LLMC3WMxifvkKrP6CLz7pDakGz9dXMX%2BJ%2FQ5Sr50jtzPcBxlBuEmZFkOX4p9E%2BE6CtP9rWtoYribuKG8qj4%2BNSJq6%2FbntDXCVPrK7hVmZ366aEXdIwhpUPhVhPoRVG5fzjJgGKKNbnLO6cNk2MJ3f18AGOqUB2Hcw%2F%2BqdXJKeEI0j9KCVaya3wPqhfF2hj64HjdmXqTjtlCJqW3ygJNkxVf91fXyK7O6TXs9VgAEurMR6pHPHGKPOi1jUaRv2Dj32PQ1cO5lqORwHGNbp2Ktn%2FYkkhe7SRXAf6xQba2TnwEIgDjD7JsCmjANNJsFIS23Oq8jrsEo286W4m8zGKv91KkFCAVIcJWs7%2Bnti51hwMMRE3u2xTlO8rhk%2F&X-Amz-Signature=83d083124f253c3221d4d19abfb22017acb29fc01b315d4f362abb7e875b6979&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVU7ZRF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDCQNAw4a9qW%2FLzW0noxrB3wixw39NhO0sX0Otgn9fFiAIgVxdCjELPkO4E3o8eunMO48RBXtRMIhf7kA%2B4I%2BWxIEgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BnQ5VlBjgcyhfw2ircA%2FftrHPD5epKYMAyCqZL9fKSKLxqJUGpt2rkq4%2FFbK3%2BWSBbVAjLan0%2BBoCqEyg2cB5JadT38ot2ZM6NKR2z10YT7tzDFo0cMNDk0Jdf9sc2kASCga0fQB%2Fkz7v7pMQLBgpGhKw%2BsnwmdHrkLTH%2Bq%2FVg7fF35M0jFYTmzede6Oe7DERLBaNJJyIAjsoBDf0Su2tTSz8dSL14%2BFlnvXnRuiFByWcfV6bEr3N%2FEhJMrXi0Taj7YHvFOd%2FRlPUqwE%2FooU%2BCXJp0NZuwtHKHCfI%2FMoiaRJhNIy25NPSa%2FdvuoMW7954err2Cb67OKJms5hUqB3b8VTygYJeUS%2BgRzXMbmfd3QAQG1rIRW8QdC4nkcJwKQflqJ7aBMawQO9m%2BZToDSKuKlO3etcSZwLTauANaDk4lddfXpPgQC78XeGpK9qF0112Fggh2fJaJsvF%2Bv%2BKxDitd6w0TJxVrxVZlwH2954AYFfmaFiD30ntb9EabFy2LLMC3WMxifvkKrP6CLz7pDakGz9dXMX%2BJ%2FQ5Sr50jtzPcBxlBuEmZFkOX4p9E%2BE6CtP9rWtoYribuKG8qj4%2BNSJq6%2FbntDXCVPrK7hVmZ366aEXdIwhpUPhVhPoRVG5fzjJgGKKNbnLO6cNk2MJ3f18AGOqUB2Hcw%2F%2BqdXJKeEI0j9KCVaya3wPqhfF2hj64HjdmXqTjtlCJqW3ygJNkxVf91fXyK7O6TXs9VgAEurMR6pHPHGKPOi1jUaRv2Dj32PQ1cO5lqORwHGNbp2Ktn%2FYkkhe7SRXAf6xQba2TnwEIgDjD7JsCmjANNJsFIS23Oq8jrsEo286W4m8zGKv91KkFCAVIcJWs7%2Bnti51hwMMRE3u2xTlO8rhk%2F&X-Amz-Signature=0b1b86dda946429371236cae50f57abd095eb797ce76e342bd4757469141f736&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVU7ZRF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDCQNAw4a9qW%2FLzW0noxrB3wixw39NhO0sX0Otgn9fFiAIgVxdCjELPkO4E3o8eunMO48RBXtRMIhf7kA%2B4I%2BWxIEgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BnQ5VlBjgcyhfw2ircA%2FftrHPD5epKYMAyCqZL9fKSKLxqJUGpt2rkq4%2FFbK3%2BWSBbVAjLan0%2BBoCqEyg2cB5JadT38ot2ZM6NKR2z10YT7tzDFo0cMNDk0Jdf9sc2kASCga0fQB%2Fkz7v7pMQLBgpGhKw%2BsnwmdHrkLTH%2Bq%2FVg7fF35M0jFYTmzede6Oe7DERLBaNJJyIAjsoBDf0Su2tTSz8dSL14%2BFlnvXnRuiFByWcfV6bEr3N%2FEhJMrXi0Taj7YHvFOd%2FRlPUqwE%2FooU%2BCXJp0NZuwtHKHCfI%2FMoiaRJhNIy25NPSa%2FdvuoMW7954err2Cb67OKJms5hUqB3b8VTygYJeUS%2BgRzXMbmfd3QAQG1rIRW8QdC4nkcJwKQflqJ7aBMawQO9m%2BZToDSKuKlO3etcSZwLTauANaDk4lddfXpPgQC78XeGpK9qF0112Fggh2fJaJsvF%2Bv%2BKxDitd6w0TJxVrxVZlwH2954AYFfmaFiD30ntb9EabFy2LLMC3WMxifvkKrP6CLz7pDakGz9dXMX%2BJ%2FQ5Sr50jtzPcBxlBuEmZFkOX4p9E%2BE6CtP9rWtoYribuKG8qj4%2BNSJq6%2FbntDXCVPrK7hVmZ366aEXdIwhpUPhVhPoRVG5fzjJgGKKNbnLO6cNk2MJ3f18AGOqUB2Hcw%2F%2BqdXJKeEI0j9KCVaya3wPqhfF2hj64HjdmXqTjtlCJqW3ygJNkxVf91fXyK7O6TXs9VgAEurMR6pHPHGKPOi1jUaRv2Dj32PQ1cO5lqORwHGNbp2Ktn%2FYkkhe7SRXAf6xQba2TnwEIgDjD7JsCmjANNJsFIS23Oq8jrsEo286W4m8zGKv91KkFCAVIcJWs7%2Bnti51hwMMRE3u2xTlO8rhk%2F&X-Amz-Signature=39aef9f879c255c065fc218be722a93d20f1f32b61fae6a4cb854c90fe78e227&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVU7ZRF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDCQNAw4a9qW%2FLzW0noxrB3wixw39NhO0sX0Otgn9fFiAIgVxdCjELPkO4E3o8eunMO48RBXtRMIhf7kA%2B4I%2BWxIEgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BnQ5VlBjgcyhfw2ircA%2FftrHPD5epKYMAyCqZL9fKSKLxqJUGpt2rkq4%2FFbK3%2BWSBbVAjLan0%2BBoCqEyg2cB5JadT38ot2ZM6NKR2z10YT7tzDFo0cMNDk0Jdf9sc2kASCga0fQB%2Fkz7v7pMQLBgpGhKw%2BsnwmdHrkLTH%2Bq%2FVg7fF35M0jFYTmzede6Oe7DERLBaNJJyIAjsoBDf0Su2tTSz8dSL14%2BFlnvXnRuiFByWcfV6bEr3N%2FEhJMrXi0Taj7YHvFOd%2FRlPUqwE%2FooU%2BCXJp0NZuwtHKHCfI%2FMoiaRJhNIy25NPSa%2FdvuoMW7954err2Cb67OKJms5hUqB3b8VTygYJeUS%2BgRzXMbmfd3QAQG1rIRW8QdC4nkcJwKQflqJ7aBMawQO9m%2BZToDSKuKlO3etcSZwLTauANaDk4lddfXpPgQC78XeGpK9qF0112Fggh2fJaJsvF%2Bv%2BKxDitd6w0TJxVrxVZlwH2954AYFfmaFiD30ntb9EabFy2LLMC3WMxifvkKrP6CLz7pDakGz9dXMX%2BJ%2FQ5Sr50jtzPcBxlBuEmZFkOX4p9E%2BE6CtP9rWtoYribuKG8qj4%2BNSJq6%2FbntDXCVPrK7hVmZ366aEXdIwhpUPhVhPoRVG5fzjJgGKKNbnLO6cNk2MJ3f18AGOqUB2Hcw%2F%2BqdXJKeEI0j9KCVaya3wPqhfF2hj64HjdmXqTjtlCJqW3ygJNkxVf91fXyK7O6TXs9VgAEurMR6pHPHGKPOi1jUaRv2Dj32PQ1cO5lqORwHGNbp2Ktn%2FYkkhe7SRXAf6xQba2TnwEIgDjD7JsCmjANNJsFIS23Oq8jrsEo286W4m8zGKv91KkFCAVIcJWs7%2Bnti51hwMMRE3u2xTlO8rhk%2F&X-Amz-Signature=84f76740721598d755dffafb744772ff1539259955b63c69a6f57be3660c6126&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVU7ZRF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDCQNAw4a9qW%2FLzW0noxrB3wixw39NhO0sX0Otgn9fFiAIgVxdCjELPkO4E3o8eunMO48RBXtRMIhf7kA%2B4I%2BWxIEgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BnQ5VlBjgcyhfw2ircA%2FftrHPD5epKYMAyCqZL9fKSKLxqJUGpt2rkq4%2FFbK3%2BWSBbVAjLan0%2BBoCqEyg2cB5JadT38ot2ZM6NKR2z10YT7tzDFo0cMNDk0Jdf9sc2kASCga0fQB%2Fkz7v7pMQLBgpGhKw%2BsnwmdHrkLTH%2Bq%2FVg7fF35M0jFYTmzede6Oe7DERLBaNJJyIAjsoBDf0Su2tTSz8dSL14%2BFlnvXnRuiFByWcfV6bEr3N%2FEhJMrXi0Taj7YHvFOd%2FRlPUqwE%2FooU%2BCXJp0NZuwtHKHCfI%2FMoiaRJhNIy25NPSa%2FdvuoMW7954err2Cb67OKJms5hUqB3b8VTygYJeUS%2BgRzXMbmfd3QAQG1rIRW8QdC4nkcJwKQflqJ7aBMawQO9m%2BZToDSKuKlO3etcSZwLTauANaDk4lddfXpPgQC78XeGpK9qF0112Fggh2fJaJsvF%2Bv%2BKxDitd6w0TJxVrxVZlwH2954AYFfmaFiD30ntb9EabFy2LLMC3WMxifvkKrP6CLz7pDakGz9dXMX%2BJ%2FQ5Sr50jtzPcBxlBuEmZFkOX4p9E%2BE6CtP9rWtoYribuKG8qj4%2BNSJq6%2FbntDXCVPrK7hVmZ366aEXdIwhpUPhVhPoRVG5fzjJgGKKNbnLO6cNk2MJ3f18AGOqUB2Hcw%2F%2BqdXJKeEI0j9KCVaya3wPqhfF2hj64HjdmXqTjtlCJqW3ygJNkxVf91fXyK7O6TXs9VgAEurMR6pHPHGKPOi1jUaRv2Dj32PQ1cO5lqORwHGNbp2Ktn%2FYkkhe7SRXAf6xQba2TnwEIgDjD7JsCmjANNJsFIS23Oq8jrsEo286W4m8zGKv91KkFCAVIcJWs7%2Bnti51hwMMRE3u2xTlO8rhk%2F&X-Amz-Signature=d1143816ccc27927ac593289521e0f292b0f45566a71dccd3b6be9efcb1a724c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVU7ZRF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDCQNAw4a9qW%2FLzW0noxrB3wixw39NhO0sX0Otgn9fFiAIgVxdCjELPkO4E3o8eunMO48RBXtRMIhf7kA%2B4I%2BWxIEgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2BnQ5VlBjgcyhfw2ircA%2FftrHPD5epKYMAyCqZL9fKSKLxqJUGpt2rkq4%2FFbK3%2BWSBbVAjLan0%2BBoCqEyg2cB5JadT38ot2ZM6NKR2z10YT7tzDFo0cMNDk0Jdf9sc2kASCga0fQB%2Fkz7v7pMQLBgpGhKw%2BsnwmdHrkLTH%2Bq%2FVg7fF35M0jFYTmzede6Oe7DERLBaNJJyIAjsoBDf0Su2tTSz8dSL14%2BFlnvXnRuiFByWcfV6bEr3N%2FEhJMrXi0Taj7YHvFOd%2FRlPUqwE%2FooU%2BCXJp0NZuwtHKHCfI%2FMoiaRJhNIy25NPSa%2FdvuoMW7954err2Cb67OKJms5hUqB3b8VTygYJeUS%2BgRzXMbmfd3QAQG1rIRW8QdC4nkcJwKQflqJ7aBMawQO9m%2BZToDSKuKlO3etcSZwLTauANaDk4lddfXpPgQC78XeGpK9qF0112Fggh2fJaJsvF%2Bv%2BKxDitd6w0TJxVrxVZlwH2954AYFfmaFiD30ntb9EabFy2LLMC3WMxifvkKrP6CLz7pDakGz9dXMX%2BJ%2FQ5Sr50jtzPcBxlBuEmZFkOX4p9E%2BE6CtP9rWtoYribuKG8qj4%2BNSJq6%2FbntDXCVPrK7hVmZ366aEXdIwhpUPhVhPoRVG5fzjJgGKKNbnLO6cNk2MJ3f18AGOqUB2Hcw%2F%2BqdXJKeEI0j9KCVaya3wPqhfF2hj64HjdmXqTjtlCJqW3ygJNkxVf91fXyK7O6TXs9VgAEurMR6pHPHGKPOi1jUaRv2Dj32PQ1cO5lqORwHGNbp2Ktn%2FYkkhe7SRXAf6xQba2TnwEIgDjD7JsCmjANNJsFIS23Oq8jrsEo286W4m8zGKv91KkFCAVIcJWs7%2Bnti51hwMMRE3u2xTlO8rhk%2F&X-Amz-Signature=84f3423a3da7b5e0aced9a57b03701b8f196f21666c49fc30ff7fde817d69313&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
