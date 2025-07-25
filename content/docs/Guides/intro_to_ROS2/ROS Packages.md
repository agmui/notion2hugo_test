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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSANAYV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDFCaheaGXlVCWmGY9vHL1wcM%2BwRPJb49cei27kYbB2JQIgM5zRVyZxTaeglQrqva53a3Bf3NdMN354RPEsHHW0RaUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBnj4EQkfE%2BznZyo0yrcA%2F%2FQ6gygawc%2F9LvJZvfBYP9bUEUIkADr2VRhuE3T3QvIPK58GPM42fkbjhPK3%2B95fYR6U9BOoiCNN%2BuHqncta2bDEaXiy3iCcwRj9Yx6sLL5uGhk36NVr07iN836tz6bFge1OHG4OPkEgPz1trdzpC9VmdVbnqslzm6dLee9UUGFgsUnIvI1f%2B4LtwlzMfCJ95%2Bvfyjsw5A6GXl7ZtcFoxgfF9XFM7wa6KksVHERAn6cEg9J1aAAbNPAJe7xOC%2BwHEWMjQ%2B%2FRV0%2FiLMGKwGIoPhZICQkShlTxMVzrM1IjbAPUthFbF3bQodPjICwxH0jNTK27f9g8bPuxo1wewtJBeI80b9vyOFWPqxP4bspTk7zfcrFyURWmpKocznYI5Y3WrdLsauLeI1K5oy6xsNEvv54HaajOgGJKh3Wtauf14fB8KcPgIJu2DGYqKVlz2BJRw9cePOyafG%2B%2FVZ8iQXUa%2Bz9WQKlGr8oyA%2B57ZApjUtCT7Xe5ptStwbXqdXs4tzYZrCl20Ebb2O4k0mZNq7fPejnxFe5jAGSaOsI2HYRFrJMhm22p1sKggPPK4C5fVN09qGIz%2FaF3WavNxOPLZEHiDojf4uw7cLjMvufaOydrB3UcAD9Ybyp5PDdyM8NMNKGjsQGOqUBXLc0cqoYC3XDBT%2FvrleQwfnMK%2BM1SkprozHzwh9lnbIORMqoY5JPncV3IDpLdRnR2z6BvPHOHHZAdtl%2BQISeT1Ci2QZjGZAjsF3MEVoMOLnni737Q8JkD8HS5zvdMyUj7VYi1URG3MH9CSp9a2XsYg5y6JouhMgS%2FQG2lXxmXUZuhGzMLlXOwgR2YJXSKuXmBd%2FAKE8ssvIjkhQbm0rNvRzA9cqK&X-Amz-Signature=944c5c48a693c10a269903a4109a8d8d3908a466002385a75b66f1761d4cb643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSANAYV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDFCaheaGXlVCWmGY9vHL1wcM%2BwRPJb49cei27kYbB2JQIgM5zRVyZxTaeglQrqva53a3Bf3NdMN354RPEsHHW0RaUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBnj4EQkfE%2BznZyo0yrcA%2F%2FQ6gygawc%2F9LvJZvfBYP9bUEUIkADr2VRhuE3T3QvIPK58GPM42fkbjhPK3%2B95fYR6U9BOoiCNN%2BuHqncta2bDEaXiy3iCcwRj9Yx6sLL5uGhk36NVr07iN836tz6bFge1OHG4OPkEgPz1trdzpC9VmdVbnqslzm6dLee9UUGFgsUnIvI1f%2B4LtwlzMfCJ95%2Bvfyjsw5A6GXl7ZtcFoxgfF9XFM7wa6KksVHERAn6cEg9J1aAAbNPAJe7xOC%2BwHEWMjQ%2B%2FRV0%2FiLMGKwGIoPhZICQkShlTxMVzrM1IjbAPUthFbF3bQodPjICwxH0jNTK27f9g8bPuxo1wewtJBeI80b9vyOFWPqxP4bspTk7zfcrFyURWmpKocznYI5Y3WrdLsauLeI1K5oy6xsNEvv54HaajOgGJKh3Wtauf14fB8KcPgIJu2DGYqKVlz2BJRw9cePOyafG%2B%2FVZ8iQXUa%2Bz9WQKlGr8oyA%2B57ZApjUtCT7Xe5ptStwbXqdXs4tzYZrCl20Ebb2O4k0mZNq7fPejnxFe5jAGSaOsI2HYRFrJMhm22p1sKggPPK4C5fVN09qGIz%2FaF3WavNxOPLZEHiDojf4uw7cLjMvufaOydrB3UcAD9Ybyp5PDdyM8NMNKGjsQGOqUBXLc0cqoYC3XDBT%2FvrleQwfnMK%2BM1SkprozHzwh9lnbIORMqoY5JPncV3IDpLdRnR2z6BvPHOHHZAdtl%2BQISeT1Ci2QZjGZAjsF3MEVoMOLnni737Q8JkD8HS5zvdMyUj7VYi1URG3MH9CSp9a2XsYg5y6JouhMgS%2FQG2lXxmXUZuhGzMLlXOwgR2YJXSKuXmBd%2FAKE8ssvIjkhQbm0rNvRzA9cqK&X-Amz-Signature=66d7feb07080c8f2f1256ce32e47b2e99bef7879d6d3127d8127507ad096c4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSANAYV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDFCaheaGXlVCWmGY9vHL1wcM%2BwRPJb49cei27kYbB2JQIgM5zRVyZxTaeglQrqva53a3Bf3NdMN354RPEsHHW0RaUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBnj4EQkfE%2BznZyo0yrcA%2F%2FQ6gygawc%2F9LvJZvfBYP9bUEUIkADr2VRhuE3T3QvIPK58GPM42fkbjhPK3%2B95fYR6U9BOoiCNN%2BuHqncta2bDEaXiy3iCcwRj9Yx6sLL5uGhk36NVr07iN836tz6bFge1OHG4OPkEgPz1trdzpC9VmdVbnqslzm6dLee9UUGFgsUnIvI1f%2B4LtwlzMfCJ95%2Bvfyjsw5A6GXl7ZtcFoxgfF9XFM7wa6KksVHERAn6cEg9J1aAAbNPAJe7xOC%2BwHEWMjQ%2B%2FRV0%2FiLMGKwGIoPhZICQkShlTxMVzrM1IjbAPUthFbF3bQodPjICwxH0jNTK27f9g8bPuxo1wewtJBeI80b9vyOFWPqxP4bspTk7zfcrFyURWmpKocznYI5Y3WrdLsauLeI1K5oy6xsNEvv54HaajOgGJKh3Wtauf14fB8KcPgIJu2DGYqKVlz2BJRw9cePOyafG%2B%2FVZ8iQXUa%2Bz9WQKlGr8oyA%2B57ZApjUtCT7Xe5ptStwbXqdXs4tzYZrCl20Ebb2O4k0mZNq7fPejnxFe5jAGSaOsI2HYRFrJMhm22p1sKggPPK4C5fVN09qGIz%2FaF3WavNxOPLZEHiDojf4uw7cLjMvufaOydrB3UcAD9Ybyp5PDdyM8NMNKGjsQGOqUBXLc0cqoYC3XDBT%2FvrleQwfnMK%2BM1SkprozHzwh9lnbIORMqoY5JPncV3IDpLdRnR2z6BvPHOHHZAdtl%2BQISeT1Ci2QZjGZAjsF3MEVoMOLnni737Q8JkD8HS5zvdMyUj7VYi1URG3MH9CSp9a2XsYg5y6JouhMgS%2FQG2lXxmXUZuhGzMLlXOwgR2YJXSKuXmBd%2FAKE8ssvIjkhQbm0rNvRzA9cqK&X-Amz-Signature=a174610f0ad6d9b5064dbb788795441ff67e44fad58c0b87227b2f2ca79783fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSANAYV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDFCaheaGXlVCWmGY9vHL1wcM%2BwRPJb49cei27kYbB2JQIgM5zRVyZxTaeglQrqva53a3Bf3NdMN354RPEsHHW0RaUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBnj4EQkfE%2BznZyo0yrcA%2F%2FQ6gygawc%2F9LvJZvfBYP9bUEUIkADr2VRhuE3T3QvIPK58GPM42fkbjhPK3%2B95fYR6U9BOoiCNN%2BuHqncta2bDEaXiy3iCcwRj9Yx6sLL5uGhk36NVr07iN836tz6bFge1OHG4OPkEgPz1trdzpC9VmdVbnqslzm6dLee9UUGFgsUnIvI1f%2B4LtwlzMfCJ95%2Bvfyjsw5A6GXl7ZtcFoxgfF9XFM7wa6KksVHERAn6cEg9J1aAAbNPAJe7xOC%2BwHEWMjQ%2B%2FRV0%2FiLMGKwGIoPhZICQkShlTxMVzrM1IjbAPUthFbF3bQodPjICwxH0jNTK27f9g8bPuxo1wewtJBeI80b9vyOFWPqxP4bspTk7zfcrFyURWmpKocznYI5Y3WrdLsauLeI1K5oy6xsNEvv54HaajOgGJKh3Wtauf14fB8KcPgIJu2DGYqKVlz2BJRw9cePOyafG%2B%2FVZ8iQXUa%2Bz9WQKlGr8oyA%2B57ZApjUtCT7Xe5ptStwbXqdXs4tzYZrCl20Ebb2O4k0mZNq7fPejnxFe5jAGSaOsI2HYRFrJMhm22p1sKggPPK4C5fVN09qGIz%2FaF3WavNxOPLZEHiDojf4uw7cLjMvufaOydrB3UcAD9Ybyp5PDdyM8NMNKGjsQGOqUBXLc0cqoYC3XDBT%2FvrleQwfnMK%2BM1SkprozHzwh9lnbIORMqoY5JPncV3IDpLdRnR2z6BvPHOHHZAdtl%2BQISeT1Ci2QZjGZAjsF3MEVoMOLnni737Q8JkD8HS5zvdMyUj7VYi1URG3MH9CSp9a2XsYg5y6JouhMgS%2FQG2lXxmXUZuhGzMLlXOwgR2YJXSKuXmBd%2FAKE8ssvIjkhQbm0rNvRzA9cqK&X-Amz-Signature=e83c0886654d0d1658d52bbe9ed9ba5ce02d6908fe549e72a99508bde2b37e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSANAYV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDFCaheaGXlVCWmGY9vHL1wcM%2BwRPJb49cei27kYbB2JQIgM5zRVyZxTaeglQrqva53a3Bf3NdMN354RPEsHHW0RaUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBnj4EQkfE%2BznZyo0yrcA%2F%2FQ6gygawc%2F9LvJZvfBYP9bUEUIkADr2VRhuE3T3QvIPK58GPM42fkbjhPK3%2B95fYR6U9BOoiCNN%2BuHqncta2bDEaXiy3iCcwRj9Yx6sLL5uGhk36NVr07iN836tz6bFge1OHG4OPkEgPz1trdzpC9VmdVbnqslzm6dLee9UUGFgsUnIvI1f%2B4LtwlzMfCJ95%2Bvfyjsw5A6GXl7ZtcFoxgfF9XFM7wa6KksVHERAn6cEg9J1aAAbNPAJe7xOC%2BwHEWMjQ%2B%2FRV0%2FiLMGKwGIoPhZICQkShlTxMVzrM1IjbAPUthFbF3bQodPjICwxH0jNTK27f9g8bPuxo1wewtJBeI80b9vyOFWPqxP4bspTk7zfcrFyURWmpKocznYI5Y3WrdLsauLeI1K5oy6xsNEvv54HaajOgGJKh3Wtauf14fB8KcPgIJu2DGYqKVlz2BJRw9cePOyafG%2B%2FVZ8iQXUa%2Bz9WQKlGr8oyA%2B57ZApjUtCT7Xe5ptStwbXqdXs4tzYZrCl20Ebb2O4k0mZNq7fPejnxFe5jAGSaOsI2HYRFrJMhm22p1sKggPPK4C5fVN09qGIz%2FaF3WavNxOPLZEHiDojf4uw7cLjMvufaOydrB3UcAD9Ybyp5PDdyM8NMNKGjsQGOqUBXLc0cqoYC3XDBT%2FvrleQwfnMK%2BM1SkprozHzwh9lnbIORMqoY5JPncV3IDpLdRnR2z6BvPHOHHZAdtl%2BQISeT1Ci2QZjGZAjsF3MEVoMOLnni737Q8JkD8HS5zvdMyUj7VYi1URG3MH9CSp9a2XsYg5y6JouhMgS%2FQG2lXxmXUZuhGzMLlXOwgR2YJXSKuXmBd%2FAKE8ssvIjkhQbm0rNvRzA9cqK&X-Amz-Signature=ef31591f8fb28c7900b87225ee53c63227c7f0c24d507237a9c0f7472492f94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSANAYV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDFCaheaGXlVCWmGY9vHL1wcM%2BwRPJb49cei27kYbB2JQIgM5zRVyZxTaeglQrqva53a3Bf3NdMN354RPEsHHW0RaUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBnj4EQkfE%2BznZyo0yrcA%2F%2FQ6gygawc%2F9LvJZvfBYP9bUEUIkADr2VRhuE3T3QvIPK58GPM42fkbjhPK3%2B95fYR6U9BOoiCNN%2BuHqncta2bDEaXiy3iCcwRj9Yx6sLL5uGhk36NVr07iN836tz6bFge1OHG4OPkEgPz1trdzpC9VmdVbnqslzm6dLee9UUGFgsUnIvI1f%2B4LtwlzMfCJ95%2Bvfyjsw5A6GXl7ZtcFoxgfF9XFM7wa6KksVHERAn6cEg9J1aAAbNPAJe7xOC%2BwHEWMjQ%2B%2FRV0%2FiLMGKwGIoPhZICQkShlTxMVzrM1IjbAPUthFbF3bQodPjICwxH0jNTK27f9g8bPuxo1wewtJBeI80b9vyOFWPqxP4bspTk7zfcrFyURWmpKocznYI5Y3WrdLsauLeI1K5oy6xsNEvv54HaajOgGJKh3Wtauf14fB8KcPgIJu2DGYqKVlz2BJRw9cePOyafG%2B%2FVZ8iQXUa%2Bz9WQKlGr8oyA%2B57ZApjUtCT7Xe5ptStwbXqdXs4tzYZrCl20Ebb2O4k0mZNq7fPejnxFe5jAGSaOsI2HYRFrJMhm22p1sKggPPK4C5fVN09qGIz%2FaF3WavNxOPLZEHiDojf4uw7cLjMvufaOydrB3UcAD9Ybyp5PDdyM8NMNKGjsQGOqUBXLc0cqoYC3XDBT%2FvrleQwfnMK%2BM1SkprozHzwh9lnbIORMqoY5JPncV3IDpLdRnR2z6BvPHOHHZAdtl%2BQISeT1Ci2QZjGZAjsF3MEVoMOLnni737Q8JkD8HS5zvdMyUj7VYi1URG3MH9CSp9a2XsYg5y6JouhMgS%2FQG2lXxmXUZuhGzMLlXOwgR2YJXSKuXmBd%2FAKE8ssvIjkhQbm0rNvRzA9cqK&X-Amz-Signature=fa869552a8b4aea191b20185e9a3f0e66b9eeb71eeb7186cf48762a01935a851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSANAYV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDFCaheaGXlVCWmGY9vHL1wcM%2BwRPJb49cei27kYbB2JQIgM5zRVyZxTaeglQrqva53a3Bf3NdMN354RPEsHHW0RaUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDBnj4EQkfE%2BznZyo0yrcA%2F%2FQ6gygawc%2F9LvJZvfBYP9bUEUIkADr2VRhuE3T3QvIPK58GPM42fkbjhPK3%2B95fYR6U9BOoiCNN%2BuHqncta2bDEaXiy3iCcwRj9Yx6sLL5uGhk36NVr07iN836tz6bFge1OHG4OPkEgPz1trdzpC9VmdVbnqslzm6dLee9UUGFgsUnIvI1f%2B4LtwlzMfCJ95%2Bvfyjsw5A6GXl7ZtcFoxgfF9XFM7wa6KksVHERAn6cEg9J1aAAbNPAJe7xOC%2BwHEWMjQ%2B%2FRV0%2FiLMGKwGIoPhZICQkShlTxMVzrM1IjbAPUthFbF3bQodPjICwxH0jNTK27f9g8bPuxo1wewtJBeI80b9vyOFWPqxP4bspTk7zfcrFyURWmpKocznYI5Y3WrdLsauLeI1K5oy6xsNEvv54HaajOgGJKh3Wtauf14fB8KcPgIJu2DGYqKVlz2BJRw9cePOyafG%2B%2FVZ8iQXUa%2Bz9WQKlGr8oyA%2B57ZApjUtCT7Xe5ptStwbXqdXs4tzYZrCl20Ebb2O4k0mZNq7fPejnxFe5jAGSaOsI2HYRFrJMhm22p1sKggPPK4C5fVN09qGIz%2FaF3WavNxOPLZEHiDojf4uw7cLjMvufaOydrB3UcAD9Ybyp5PDdyM8NMNKGjsQGOqUBXLc0cqoYC3XDBT%2FvrleQwfnMK%2BM1SkprozHzwh9lnbIORMqoY5JPncV3IDpLdRnR2z6BvPHOHHZAdtl%2BQISeT1Ci2QZjGZAjsF3MEVoMOLnni737Q8JkD8HS5zvdMyUj7VYi1URG3MH9CSp9a2XsYg5y6JouhMgS%2FQG2lXxmXUZuhGzMLlXOwgR2YJXSKuXmBd%2FAKE8ssvIjkhQbm0rNvRzA9cqK&X-Amz-Signature=2f25bea71c6d617cc9c54019ff08441101dc6a4aa453edf3cc7000f55da9ab57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
