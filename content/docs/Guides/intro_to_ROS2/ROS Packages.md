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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCHSMXP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDfFOJd6s4oFHtnYB%2B%2F8TMrXSCfTDBMecvDBZ5cDkV4RAiB49MwGWjA%2BMJRwkXFVGSrkS82xcj%2BqcZQCNSNsAyPr%2Fyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaILTi%2Fqr9IQAsS8qKtwDmcJOW%2F%2BhjxhDV9fHJPoccOtj7didg3CVibGsFe72fLpPWt0qJS5IXmgUYpns10xzZjZYdr4kM9PI5eokOjS%2Bpggb2FJodTGmfHsWD8t5MIZ2WK7gP%2F1Wz1lGpo2Fvv79SqdY4NuldybysrSDH7XiJKS80%2BEpqtXrbAhxSPc4f%2ByehHyLWHsTLcvgJGFwOhdxBFaRu3yFdrjY5n0ewY7tizTjBSxbb5JPtOHhH2TYCAnVe4EYnF50PqkGowSjb722ReBImUeTg%2FRGAXsB69m60JTdfim8hTXX%2FWBtdwXb7RwtSEFgUDEY0GuCtyKJah%2Fph4XgdRMF2vIc979Rpal7QESF1fwhQXITZn30kdqV9EdVUXMns9zO%2BzQZvigZwMHMB%2FkVqyiXOsrDg3lps8n5QB9BWKCixsq7T09skzdeJVmdtWQJILt571AWNMUUU9dO5THObewthMoYlmiOSMeFFCbf6g9jeBg1X1kQqxA1J1tQtkqfiP6Em1%2F51IiV8%2BqaRu9cR%2BMtMqgcipP3Z5EALdskRHrqoHykq6q0mrz6iedvfOGC6R3ggiVJhx53u2REHvs2geGn40pQlnELF6tAp3C6D5GtWvOfLklNkNftefuXCcTLflmEIdf5mzowvI6nwwY6pgGK08sEVT6MX1sC71RZmay8kdY%2F%2BCQV9Cv6B4YMN5dC%2BMH5E7BnzXJjbKW4HHi1rE6kLI%2FhXeife6n5zEFGCoeFEpqDvpVFjp4zBPxNbf%2FSsSUTqmPIsDMxwS%2FMltSdl8yKNFqWSQ99zf8V%2BXBF%2B1IZCw5QAIe58TG%2F1dFa6EkjMbbnzU6eFAevHz16EO697jBaOhPg7E04Y43DA%2BMqrGsDK4whRvlq&X-Amz-Signature=12ec3896d2e47e29538545d7176e7dc157328b84da6e4e7e266b42891fd187d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCHSMXP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDfFOJd6s4oFHtnYB%2B%2F8TMrXSCfTDBMecvDBZ5cDkV4RAiB49MwGWjA%2BMJRwkXFVGSrkS82xcj%2BqcZQCNSNsAyPr%2Fyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaILTi%2Fqr9IQAsS8qKtwDmcJOW%2F%2BhjxhDV9fHJPoccOtj7didg3CVibGsFe72fLpPWt0qJS5IXmgUYpns10xzZjZYdr4kM9PI5eokOjS%2Bpggb2FJodTGmfHsWD8t5MIZ2WK7gP%2F1Wz1lGpo2Fvv79SqdY4NuldybysrSDH7XiJKS80%2BEpqtXrbAhxSPc4f%2ByehHyLWHsTLcvgJGFwOhdxBFaRu3yFdrjY5n0ewY7tizTjBSxbb5JPtOHhH2TYCAnVe4EYnF50PqkGowSjb722ReBImUeTg%2FRGAXsB69m60JTdfim8hTXX%2FWBtdwXb7RwtSEFgUDEY0GuCtyKJah%2Fph4XgdRMF2vIc979Rpal7QESF1fwhQXITZn30kdqV9EdVUXMns9zO%2BzQZvigZwMHMB%2FkVqyiXOsrDg3lps8n5QB9BWKCixsq7T09skzdeJVmdtWQJILt571AWNMUUU9dO5THObewthMoYlmiOSMeFFCbf6g9jeBg1X1kQqxA1J1tQtkqfiP6Em1%2F51IiV8%2BqaRu9cR%2BMtMqgcipP3Z5EALdskRHrqoHykq6q0mrz6iedvfOGC6R3ggiVJhx53u2REHvs2geGn40pQlnELF6tAp3C6D5GtWvOfLklNkNftefuXCcTLflmEIdf5mzowvI6nwwY6pgGK08sEVT6MX1sC71RZmay8kdY%2F%2BCQV9Cv6B4YMN5dC%2BMH5E7BnzXJjbKW4HHi1rE6kLI%2FhXeife6n5zEFGCoeFEpqDvpVFjp4zBPxNbf%2FSsSUTqmPIsDMxwS%2FMltSdl8yKNFqWSQ99zf8V%2BXBF%2B1IZCw5QAIe58TG%2F1dFa6EkjMbbnzU6eFAevHz16EO697jBaOhPg7E04Y43DA%2BMqrGsDK4whRvlq&X-Amz-Signature=583be77580f98688f5b502d60f037b8d5db9d9bd082aea1932e9a757f577562e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCHSMXP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDfFOJd6s4oFHtnYB%2B%2F8TMrXSCfTDBMecvDBZ5cDkV4RAiB49MwGWjA%2BMJRwkXFVGSrkS82xcj%2BqcZQCNSNsAyPr%2Fyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaILTi%2Fqr9IQAsS8qKtwDmcJOW%2F%2BhjxhDV9fHJPoccOtj7didg3CVibGsFe72fLpPWt0qJS5IXmgUYpns10xzZjZYdr4kM9PI5eokOjS%2Bpggb2FJodTGmfHsWD8t5MIZ2WK7gP%2F1Wz1lGpo2Fvv79SqdY4NuldybysrSDH7XiJKS80%2BEpqtXrbAhxSPc4f%2ByehHyLWHsTLcvgJGFwOhdxBFaRu3yFdrjY5n0ewY7tizTjBSxbb5JPtOHhH2TYCAnVe4EYnF50PqkGowSjb722ReBImUeTg%2FRGAXsB69m60JTdfim8hTXX%2FWBtdwXb7RwtSEFgUDEY0GuCtyKJah%2Fph4XgdRMF2vIc979Rpal7QESF1fwhQXITZn30kdqV9EdVUXMns9zO%2BzQZvigZwMHMB%2FkVqyiXOsrDg3lps8n5QB9BWKCixsq7T09skzdeJVmdtWQJILt571AWNMUUU9dO5THObewthMoYlmiOSMeFFCbf6g9jeBg1X1kQqxA1J1tQtkqfiP6Em1%2F51IiV8%2BqaRu9cR%2BMtMqgcipP3Z5EALdskRHrqoHykq6q0mrz6iedvfOGC6R3ggiVJhx53u2REHvs2geGn40pQlnELF6tAp3C6D5GtWvOfLklNkNftefuXCcTLflmEIdf5mzowvI6nwwY6pgGK08sEVT6MX1sC71RZmay8kdY%2F%2BCQV9Cv6B4YMN5dC%2BMH5E7BnzXJjbKW4HHi1rE6kLI%2FhXeife6n5zEFGCoeFEpqDvpVFjp4zBPxNbf%2FSsSUTqmPIsDMxwS%2FMltSdl8yKNFqWSQ99zf8V%2BXBF%2B1IZCw5QAIe58TG%2F1dFa6EkjMbbnzU6eFAevHz16EO697jBaOhPg7E04Y43DA%2BMqrGsDK4whRvlq&X-Amz-Signature=298285d50e4b5567a92b54538bdfbc8d18d145e354e4f66a33b6aa5dce0b6239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCHSMXP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDfFOJd6s4oFHtnYB%2B%2F8TMrXSCfTDBMecvDBZ5cDkV4RAiB49MwGWjA%2BMJRwkXFVGSrkS82xcj%2BqcZQCNSNsAyPr%2Fyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaILTi%2Fqr9IQAsS8qKtwDmcJOW%2F%2BhjxhDV9fHJPoccOtj7didg3CVibGsFe72fLpPWt0qJS5IXmgUYpns10xzZjZYdr4kM9PI5eokOjS%2Bpggb2FJodTGmfHsWD8t5MIZ2WK7gP%2F1Wz1lGpo2Fvv79SqdY4NuldybysrSDH7XiJKS80%2BEpqtXrbAhxSPc4f%2ByehHyLWHsTLcvgJGFwOhdxBFaRu3yFdrjY5n0ewY7tizTjBSxbb5JPtOHhH2TYCAnVe4EYnF50PqkGowSjb722ReBImUeTg%2FRGAXsB69m60JTdfim8hTXX%2FWBtdwXb7RwtSEFgUDEY0GuCtyKJah%2Fph4XgdRMF2vIc979Rpal7QESF1fwhQXITZn30kdqV9EdVUXMns9zO%2BzQZvigZwMHMB%2FkVqyiXOsrDg3lps8n5QB9BWKCixsq7T09skzdeJVmdtWQJILt571AWNMUUU9dO5THObewthMoYlmiOSMeFFCbf6g9jeBg1X1kQqxA1J1tQtkqfiP6Em1%2F51IiV8%2BqaRu9cR%2BMtMqgcipP3Z5EALdskRHrqoHykq6q0mrz6iedvfOGC6R3ggiVJhx53u2REHvs2geGn40pQlnELF6tAp3C6D5GtWvOfLklNkNftefuXCcTLflmEIdf5mzowvI6nwwY6pgGK08sEVT6MX1sC71RZmay8kdY%2F%2BCQV9Cv6B4YMN5dC%2BMH5E7BnzXJjbKW4HHi1rE6kLI%2FhXeife6n5zEFGCoeFEpqDvpVFjp4zBPxNbf%2FSsSUTqmPIsDMxwS%2FMltSdl8yKNFqWSQ99zf8V%2BXBF%2B1IZCw5QAIe58TG%2F1dFa6EkjMbbnzU6eFAevHz16EO697jBaOhPg7E04Y43DA%2BMqrGsDK4whRvlq&X-Amz-Signature=d2779b30f1a1e06ee2e87270fea254195bd7445f968132f618289113298ed60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCHSMXP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDfFOJd6s4oFHtnYB%2B%2F8TMrXSCfTDBMecvDBZ5cDkV4RAiB49MwGWjA%2BMJRwkXFVGSrkS82xcj%2BqcZQCNSNsAyPr%2Fyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaILTi%2Fqr9IQAsS8qKtwDmcJOW%2F%2BhjxhDV9fHJPoccOtj7didg3CVibGsFe72fLpPWt0qJS5IXmgUYpns10xzZjZYdr4kM9PI5eokOjS%2Bpggb2FJodTGmfHsWD8t5MIZ2WK7gP%2F1Wz1lGpo2Fvv79SqdY4NuldybysrSDH7XiJKS80%2BEpqtXrbAhxSPc4f%2ByehHyLWHsTLcvgJGFwOhdxBFaRu3yFdrjY5n0ewY7tizTjBSxbb5JPtOHhH2TYCAnVe4EYnF50PqkGowSjb722ReBImUeTg%2FRGAXsB69m60JTdfim8hTXX%2FWBtdwXb7RwtSEFgUDEY0GuCtyKJah%2Fph4XgdRMF2vIc979Rpal7QESF1fwhQXITZn30kdqV9EdVUXMns9zO%2BzQZvigZwMHMB%2FkVqyiXOsrDg3lps8n5QB9BWKCixsq7T09skzdeJVmdtWQJILt571AWNMUUU9dO5THObewthMoYlmiOSMeFFCbf6g9jeBg1X1kQqxA1J1tQtkqfiP6Em1%2F51IiV8%2BqaRu9cR%2BMtMqgcipP3Z5EALdskRHrqoHykq6q0mrz6iedvfOGC6R3ggiVJhx53u2REHvs2geGn40pQlnELF6tAp3C6D5GtWvOfLklNkNftefuXCcTLflmEIdf5mzowvI6nwwY6pgGK08sEVT6MX1sC71RZmay8kdY%2F%2BCQV9Cv6B4YMN5dC%2BMH5E7BnzXJjbKW4HHi1rE6kLI%2FhXeife6n5zEFGCoeFEpqDvpVFjp4zBPxNbf%2FSsSUTqmPIsDMxwS%2FMltSdl8yKNFqWSQ99zf8V%2BXBF%2B1IZCw5QAIe58TG%2F1dFa6EkjMbbnzU6eFAevHz16EO697jBaOhPg7E04Y43DA%2BMqrGsDK4whRvlq&X-Amz-Signature=3ba2876979db9b524ff14105f1de4633670304582ae951f5a190d79f141c3b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCHSMXP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDfFOJd6s4oFHtnYB%2B%2F8TMrXSCfTDBMecvDBZ5cDkV4RAiB49MwGWjA%2BMJRwkXFVGSrkS82xcj%2BqcZQCNSNsAyPr%2Fyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaILTi%2Fqr9IQAsS8qKtwDmcJOW%2F%2BhjxhDV9fHJPoccOtj7didg3CVibGsFe72fLpPWt0qJS5IXmgUYpns10xzZjZYdr4kM9PI5eokOjS%2Bpggb2FJodTGmfHsWD8t5MIZ2WK7gP%2F1Wz1lGpo2Fvv79SqdY4NuldybysrSDH7XiJKS80%2BEpqtXrbAhxSPc4f%2ByehHyLWHsTLcvgJGFwOhdxBFaRu3yFdrjY5n0ewY7tizTjBSxbb5JPtOHhH2TYCAnVe4EYnF50PqkGowSjb722ReBImUeTg%2FRGAXsB69m60JTdfim8hTXX%2FWBtdwXb7RwtSEFgUDEY0GuCtyKJah%2Fph4XgdRMF2vIc979Rpal7QESF1fwhQXITZn30kdqV9EdVUXMns9zO%2BzQZvigZwMHMB%2FkVqyiXOsrDg3lps8n5QB9BWKCixsq7T09skzdeJVmdtWQJILt571AWNMUUU9dO5THObewthMoYlmiOSMeFFCbf6g9jeBg1X1kQqxA1J1tQtkqfiP6Em1%2F51IiV8%2BqaRu9cR%2BMtMqgcipP3Z5EALdskRHrqoHykq6q0mrz6iedvfOGC6R3ggiVJhx53u2REHvs2geGn40pQlnELF6tAp3C6D5GtWvOfLklNkNftefuXCcTLflmEIdf5mzowvI6nwwY6pgGK08sEVT6MX1sC71RZmay8kdY%2F%2BCQV9Cv6B4YMN5dC%2BMH5E7BnzXJjbKW4HHi1rE6kLI%2FhXeife6n5zEFGCoeFEpqDvpVFjp4zBPxNbf%2FSsSUTqmPIsDMxwS%2FMltSdl8yKNFqWSQ99zf8V%2BXBF%2B1IZCw5QAIe58TG%2F1dFa6EkjMbbnzU6eFAevHz16EO697jBaOhPg7E04Y43DA%2BMqrGsDK4whRvlq&X-Amz-Signature=ab7bec58297a4c17d597207b637aaae4a0170aee8655768e50e63f6e335f3861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCHSMXP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDfFOJd6s4oFHtnYB%2B%2F8TMrXSCfTDBMecvDBZ5cDkV4RAiB49MwGWjA%2BMJRwkXFVGSrkS82xcj%2BqcZQCNSNsAyPr%2Fyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMaILTi%2Fqr9IQAsS8qKtwDmcJOW%2F%2BhjxhDV9fHJPoccOtj7didg3CVibGsFe72fLpPWt0qJS5IXmgUYpns10xzZjZYdr4kM9PI5eokOjS%2Bpggb2FJodTGmfHsWD8t5MIZ2WK7gP%2F1Wz1lGpo2Fvv79SqdY4NuldybysrSDH7XiJKS80%2BEpqtXrbAhxSPc4f%2ByehHyLWHsTLcvgJGFwOhdxBFaRu3yFdrjY5n0ewY7tizTjBSxbb5JPtOHhH2TYCAnVe4EYnF50PqkGowSjb722ReBImUeTg%2FRGAXsB69m60JTdfim8hTXX%2FWBtdwXb7RwtSEFgUDEY0GuCtyKJah%2Fph4XgdRMF2vIc979Rpal7QESF1fwhQXITZn30kdqV9EdVUXMns9zO%2BzQZvigZwMHMB%2FkVqyiXOsrDg3lps8n5QB9BWKCixsq7T09skzdeJVmdtWQJILt571AWNMUUU9dO5THObewthMoYlmiOSMeFFCbf6g9jeBg1X1kQqxA1J1tQtkqfiP6Em1%2F51IiV8%2BqaRu9cR%2BMtMqgcipP3Z5EALdskRHrqoHykq6q0mrz6iedvfOGC6R3ggiVJhx53u2REHvs2geGn40pQlnELF6tAp3C6D5GtWvOfLklNkNftefuXCcTLflmEIdf5mzowvI6nwwY6pgGK08sEVT6MX1sC71RZmay8kdY%2F%2BCQV9Cv6B4YMN5dC%2BMH5E7BnzXJjbKW4HHi1rE6kLI%2FhXeife6n5zEFGCoeFEpqDvpVFjp4zBPxNbf%2FSsSUTqmPIsDMxwS%2FMltSdl8yKNFqWSQ99zf8V%2BXBF%2B1IZCw5QAIe58TG%2F1dFa6EkjMbbnzU6eFAevHz16EO697jBaOhPg7E04Y43DA%2BMqrGsDK4whRvlq&X-Amz-Signature=781c045d392dd10938949e94bd67d4e15e287974ea49de564e07969b0fa33f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
