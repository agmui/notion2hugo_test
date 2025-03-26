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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAHFJ65%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH4pKn30NLV1dEr48BqvUE37zKNMPoNIB2%2FslCSGnglAiEAnCM7AcFzrvaY%2Fn28nsgotn%2F4qPXTROPdFUFWrkNPjZ4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHAXwilh6QGLLgLRoyrcAxyDAfyN%2FoRy2tI7bx%2BWl2wUkuMWvHydbjtteDBwbz1QrbAV5g7vwg49KftOQ60ldD3PnuHqxiXZthQmf4c%2FclKms2g530m%2BlQBmPa6jvK%2FDENg%2BHUNaHz4bcfpEY7qP%2FwfbvYX%2FMFNafOdOO4rh%2FOIG%2FvbZF8KiHXVQTnu%2FHtNP536ucxBWi43QGMFC%2Bh3gGr0B4GjdD5%2BHfoIP7WdYr110W9j8ladSKxVE4couK2XWq7yWKB%2BCh%2FcFG8vJvbYLEQl5zWkNqsiV%2FHUcLqubkR4uHwYbCVrJc7yVgOP%2BbP6hk50Uxjp5YQkhwjaVTi%2FrjgrLoOxqWvbO5H%2BpW9KnmkozaIbGK24MZYSxj2BIP6%2B%2BMaQD4G5510eZsJXN529OPbSKwiR5Bq15rFAdGr7lJU6KG2OFNyrpb0%2FuMEi9jH%2BokBRQ9jqb1szfyb2dzD4XAuY90jMN9l7HUkA2%2FcVKhgIFAf4rMgWj857OgUdSFhPqm5SJRU4k5WdaacdkAlh74IeaEO29M0ND0pqdFz0MWhkR5sjWmPVWw7b1glTKSYtvjrEtfuWXRtSLo38w5TpAPB3Z5rsqGXFRsia%2FaK7pndZQqpQ6x5NPcAb6F8rmuojJdLmdQGByF56tjmb4MPq0kb8GOqUB3Wg%2BxcfHVwN9qeLXqJ07OzXyemMfJXwxUMy9PlLWEzgPhMPJlX60tRRubuUdD%2F5uCcxDU6PMQCEk%2FggDDB53IDpy6eeg4gvf%2F7orsGf6LEJboBr3mZtONCHZUUqZQc3IInLwBZN2HiaaPloDbGZJ%2BvLcmKeS62yM%2Fa2gZ02RLB2KTfHmGBnA28EpxXNH3Z76H3mJFzOGEbovfNFXoiGIvlt470Jl&X-Amz-Signature=0de43ac8cb65ef6df64179aa344f323497dbf70950a75a6c321cad439c5f27ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAHFJ65%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH4pKn30NLV1dEr48BqvUE37zKNMPoNIB2%2FslCSGnglAiEAnCM7AcFzrvaY%2Fn28nsgotn%2F4qPXTROPdFUFWrkNPjZ4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHAXwilh6QGLLgLRoyrcAxyDAfyN%2FoRy2tI7bx%2BWl2wUkuMWvHydbjtteDBwbz1QrbAV5g7vwg49KftOQ60ldD3PnuHqxiXZthQmf4c%2FclKms2g530m%2BlQBmPa6jvK%2FDENg%2BHUNaHz4bcfpEY7qP%2FwfbvYX%2FMFNafOdOO4rh%2FOIG%2FvbZF8KiHXVQTnu%2FHtNP536ucxBWi43QGMFC%2Bh3gGr0B4GjdD5%2BHfoIP7WdYr110W9j8ladSKxVE4couK2XWq7yWKB%2BCh%2FcFG8vJvbYLEQl5zWkNqsiV%2FHUcLqubkR4uHwYbCVrJc7yVgOP%2BbP6hk50Uxjp5YQkhwjaVTi%2FrjgrLoOxqWvbO5H%2BpW9KnmkozaIbGK24MZYSxj2BIP6%2B%2BMaQD4G5510eZsJXN529OPbSKwiR5Bq15rFAdGr7lJU6KG2OFNyrpb0%2FuMEi9jH%2BokBRQ9jqb1szfyb2dzD4XAuY90jMN9l7HUkA2%2FcVKhgIFAf4rMgWj857OgUdSFhPqm5SJRU4k5WdaacdkAlh74IeaEO29M0ND0pqdFz0MWhkR5sjWmPVWw7b1glTKSYtvjrEtfuWXRtSLo38w5TpAPB3Z5rsqGXFRsia%2FaK7pndZQqpQ6x5NPcAb6F8rmuojJdLmdQGByF56tjmb4MPq0kb8GOqUB3Wg%2BxcfHVwN9qeLXqJ07OzXyemMfJXwxUMy9PlLWEzgPhMPJlX60tRRubuUdD%2F5uCcxDU6PMQCEk%2FggDDB53IDpy6eeg4gvf%2F7orsGf6LEJboBr3mZtONCHZUUqZQc3IInLwBZN2HiaaPloDbGZJ%2BvLcmKeS62yM%2Fa2gZ02RLB2KTfHmGBnA28EpxXNH3Z76H3mJFzOGEbovfNFXoiGIvlt470Jl&X-Amz-Signature=9a448afe09b666b2af195203b2ce76be15fa4f64f59b8f4f551ec4c065252a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAHFJ65%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH4pKn30NLV1dEr48BqvUE37zKNMPoNIB2%2FslCSGnglAiEAnCM7AcFzrvaY%2Fn28nsgotn%2F4qPXTROPdFUFWrkNPjZ4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHAXwilh6QGLLgLRoyrcAxyDAfyN%2FoRy2tI7bx%2BWl2wUkuMWvHydbjtteDBwbz1QrbAV5g7vwg49KftOQ60ldD3PnuHqxiXZthQmf4c%2FclKms2g530m%2BlQBmPa6jvK%2FDENg%2BHUNaHz4bcfpEY7qP%2FwfbvYX%2FMFNafOdOO4rh%2FOIG%2FvbZF8KiHXVQTnu%2FHtNP536ucxBWi43QGMFC%2Bh3gGr0B4GjdD5%2BHfoIP7WdYr110W9j8ladSKxVE4couK2XWq7yWKB%2BCh%2FcFG8vJvbYLEQl5zWkNqsiV%2FHUcLqubkR4uHwYbCVrJc7yVgOP%2BbP6hk50Uxjp5YQkhwjaVTi%2FrjgrLoOxqWvbO5H%2BpW9KnmkozaIbGK24MZYSxj2BIP6%2B%2BMaQD4G5510eZsJXN529OPbSKwiR5Bq15rFAdGr7lJU6KG2OFNyrpb0%2FuMEi9jH%2BokBRQ9jqb1szfyb2dzD4XAuY90jMN9l7HUkA2%2FcVKhgIFAf4rMgWj857OgUdSFhPqm5SJRU4k5WdaacdkAlh74IeaEO29M0ND0pqdFz0MWhkR5sjWmPVWw7b1glTKSYtvjrEtfuWXRtSLo38w5TpAPB3Z5rsqGXFRsia%2FaK7pndZQqpQ6x5NPcAb6F8rmuojJdLmdQGByF56tjmb4MPq0kb8GOqUB3Wg%2BxcfHVwN9qeLXqJ07OzXyemMfJXwxUMy9PlLWEzgPhMPJlX60tRRubuUdD%2F5uCcxDU6PMQCEk%2FggDDB53IDpy6eeg4gvf%2F7orsGf6LEJboBr3mZtONCHZUUqZQc3IInLwBZN2HiaaPloDbGZJ%2BvLcmKeS62yM%2Fa2gZ02RLB2KTfHmGBnA28EpxXNH3Z76H3mJFzOGEbovfNFXoiGIvlt470Jl&X-Amz-Signature=bf0dc35b4316b8714b894c743d6983a58b98e21c2bc77aa78df15de52ffb6b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAHFJ65%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH4pKn30NLV1dEr48BqvUE37zKNMPoNIB2%2FslCSGnglAiEAnCM7AcFzrvaY%2Fn28nsgotn%2F4qPXTROPdFUFWrkNPjZ4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHAXwilh6QGLLgLRoyrcAxyDAfyN%2FoRy2tI7bx%2BWl2wUkuMWvHydbjtteDBwbz1QrbAV5g7vwg49KftOQ60ldD3PnuHqxiXZthQmf4c%2FclKms2g530m%2BlQBmPa6jvK%2FDENg%2BHUNaHz4bcfpEY7qP%2FwfbvYX%2FMFNafOdOO4rh%2FOIG%2FvbZF8KiHXVQTnu%2FHtNP536ucxBWi43QGMFC%2Bh3gGr0B4GjdD5%2BHfoIP7WdYr110W9j8ladSKxVE4couK2XWq7yWKB%2BCh%2FcFG8vJvbYLEQl5zWkNqsiV%2FHUcLqubkR4uHwYbCVrJc7yVgOP%2BbP6hk50Uxjp5YQkhwjaVTi%2FrjgrLoOxqWvbO5H%2BpW9KnmkozaIbGK24MZYSxj2BIP6%2B%2BMaQD4G5510eZsJXN529OPbSKwiR5Bq15rFAdGr7lJU6KG2OFNyrpb0%2FuMEi9jH%2BokBRQ9jqb1szfyb2dzD4XAuY90jMN9l7HUkA2%2FcVKhgIFAf4rMgWj857OgUdSFhPqm5SJRU4k5WdaacdkAlh74IeaEO29M0ND0pqdFz0MWhkR5sjWmPVWw7b1glTKSYtvjrEtfuWXRtSLo38w5TpAPB3Z5rsqGXFRsia%2FaK7pndZQqpQ6x5NPcAb6F8rmuojJdLmdQGByF56tjmb4MPq0kb8GOqUB3Wg%2BxcfHVwN9qeLXqJ07OzXyemMfJXwxUMy9PlLWEzgPhMPJlX60tRRubuUdD%2F5uCcxDU6PMQCEk%2FggDDB53IDpy6eeg4gvf%2F7orsGf6LEJboBr3mZtONCHZUUqZQc3IInLwBZN2HiaaPloDbGZJ%2BvLcmKeS62yM%2Fa2gZ02RLB2KTfHmGBnA28EpxXNH3Z76H3mJFzOGEbovfNFXoiGIvlt470Jl&X-Amz-Signature=bec801fcd276c5a94b7a94b4b9cd317676462d4ffd3304e81b8cfe7de7269a5e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAHFJ65%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH4pKn30NLV1dEr48BqvUE37zKNMPoNIB2%2FslCSGnglAiEAnCM7AcFzrvaY%2Fn28nsgotn%2F4qPXTROPdFUFWrkNPjZ4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHAXwilh6QGLLgLRoyrcAxyDAfyN%2FoRy2tI7bx%2BWl2wUkuMWvHydbjtteDBwbz1QrbAV5g7vwg49KftOQ60ldD3PnuHqxiXZthQmf4c%2FclKms2g530m%2BlQBmPa6jvK%2FDENg%2BHUNaHz4bcfpEY7qP%2FwfbvYX%2FMFNafOdOO4rh%2FOIG%2FvbZF8KiHXVQTnu%2FHtNP536ucxBWi43QGMFC%2Bh3gGr0B4GjdD5%2BHfoIP7WdYr110W9j8ladSKxVE4couK2XWq7yWKB%2BCh%2FcFG8vJvbYLEQl5zWkNqsiV%2FHUcLqubkR4uHwYbCVrJc7yVgOP%2BbP6hk50Uxjp5YQkhwjaVTi%2FrjgrLoOxqWvbO5H%2BpW9KnmkozaIbGK24MZYSxj2BIP6%2B%2BMaQD4G5510eZsJXN529OPbSKwiR5Bq15rFAdGr7lJU6KG2OFNyrpb0%2FuMEi9jH%2BokBRQ9jqb1szfyb2dzD4XAuY90jMN9l7HUkA2%2FcVKhgIFAf4rMgWj857OgUdSFhPqm5SJRU4k5WdaacdkAlh74IeaEO29M0ND0pqdFz0MWhkR5sjWmPVWw7b1glTKSYtvjrEtfuWXRtSLo38w5TpAPB3Z5rsqGXFRsia%2FaK7pndZQqpQ6x5NPcAb6F8rmuojJdLmdQGByF56tjmb4MPq0kb8GOqUB3Wg%2BxcfHVwN9qeLXqJ07OzXyemMfJXwxUMy9PlLWEzgPhMPJlX60tRRubuUdD%2F5uCcxDU6PMQCEk%2FggDDB53IDpy6eeg4gvf%2F7orsGf6LEJboBr3mZtONCHZUUqZQc3IInLwBZN2HiaaPloDbGZJ%2BvLcmKeS62yM%2Fa2gZ02RLB2KTfHmGBnA28EpxXNH3Z76H3mJFzOGEbovfNFXoiGIvlt470Jl&X-Amz-Signature=255d8d390a08fd7665bbbdd62088dff6eb6fa224bf754696e21d1ec3999fad63&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAHFJ65%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH4pKn30NLV1dEr48BqvUE37zKNMPoNIB2%2FslCSGnglAiEAnCM7AcFzrvaY%2Fn28nsgotn%2F4qPXTROPdFUFWrkNPjZ4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHAXwilh6QGLLgLRoyrcAxyDAfyN%2FoRy2tI7bx%2BWl2wUkuMWvHydbjtteDBwbz1QrbAV5g7vwg49KftOQ60ldD3PnuHqxiXZthQmf4c%2FclKms2g530m%2BlQBmPa6jvK%2FDENg%2BHUNaHz4bcfpEY7qP%2FwfbvYX%2FMFNafOdOO4rh%2FOIG%2FvbZF8KiHXVQTnu%2FHtNP536ucxBWi43QGMFC%2Bh3gGr0B4GjdD5%2BHfoIP7WdYr110W9j8ladSKxVE4couK2XWq7yWKB%2BCh%2FcFG8vJvbYLEQl5zWkNqsiV%2FHUcLqubkR4uHwYbCVrJc7yVgOP%2BbP6hk50Uxjp5YQkhwjaVTi%2FrjgrLoOxqWvbO5H%2BpW9KnmkozaIbGK24MZYSxj2BIP6%2B%2BMaQD4G5510eZsJXN529OPbSKwiR5Bq15rFAdGr7lJU6KG2OFNyrpb0%2FuMEi9jH%2BokBRQ9jqb1szfyb2dzD4XAuY90jMN9l7HUkA2%2FcVKhgIFAf4rMgWj857OgUdSFhPqm5SJRU4k5WdaacdkAlh74IeaEO29M0ND0pqdFz0MWhkR5sjWmPVWw7b1glTKSYtvjrEtfuWXRtSLo38w5TpAPB3Z5rsqGXFRsia%2FaK7pndZQqpQ6x5NPcAb6F8rmuojJdLmdQGByF56tjmb4MPq0kb8GOqUB3Wg%2BxcfHVwN9qeLXqJ07OzXyemMfJXwxUMy9PlLWEzgPhMPJlX60tRRubuUdD%2F5uCcxDU6PMQCEk%2FggDDB53IDpy6eeg4gvf%2F7orsGf6LEJboBr3mZtONCHZUUqZQc3IInLwBZN2HiaaPloDbGZJ%2BvLcmKeS62yM%2Fa2gZ02RLB2KTfHmGBnA28EpxXNH3Z76H3mJFzOGEbovfNFXoiGIvlt470Jl&X-Amz-Signature=6303106bee102abd37926bb14ae606dc267bef5dbfed2a292a034a587e5785f3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVAHFJ65%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICH4pKn30NLV1dEr48BqvUE37zKNMPoNIB2%2FslCSGnglAiEAnCM7AcFzrvaY%2Fn28nsgotn%2F4qPXTROPdFUFWrkNPjZ4q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDHAXwilh6QGLLgLRoyrcAxyDAfyN%2FoRy2tI7bx%2BWl2wUkuMWvHydbjtteDBwbz1QrbAV5g7vwg49KftOQ60ldD3PnuHqxiXZthQmf4c%2FclKms2g530m%2BlQBmPa6jvK%2FDENg%2BHUNaHz4bcfpEY7qP%2FwfbvYX%2FMFNafOdOO4rh%2FOIG%2FvbZF8KiHXVQTnu%2FHtNP536ucxBWi43QGMFC%2Bh3gGr0B4GjdD5%2BHfoIP7WdYr110W9j8ladSKxVE4couK2XWq7yWKB%2BCh%2FcFG8vJvbYLEQl5zWkNqsiV%2FHUcLqubkR4uHwYbCVrJc7yVgOP%2BbP6hk50Uxjp5YQkhwjaVTi%2FrjgrLoOxqWvbO5H%2BpW9KnmkozaIbGK24MZYSxj2BIP6%2B%2BMaQD4G5510eZsJXN529OPbSKwiR5Bq15rFAdGr7lJU6KG2OFNyrpb0%2FuMEi9jH%2BokBRQ9jqb1szfyb2dzD4XAuY90jMN9l7HUkA2%2FcVKhgIFAf4rMgWj857OgUdSFhPqm5SJRU4k5WdaacdkAlh74IeaEO29M0ND0pqdFz0MWhkR5sjWmPVWw7b1glTKSYtvjrEtfuWXRtSLo38w5TpAPB3Z5rsqGXFRsia%2FaK7pndZQqpQ6x5NPcAb6F8rmuojJdLmdQGByF56tjmb4MPq0kb8GOqUB3Wg%2BxcfHVwN9qeLXqJ07OzXyemMfJXwxUMy9PlLWEzgPhMPJlX60tRRubuUdD%2F5uCcxDU6PMQCEk%2FggDDB53IDpy6eeg4gvf%2F7orsGf6LEJboBr3mZtONCHZUUqZQc3IInLwBZN2HiaaPloDbGZJ%2BvLcmKeS62yM%2Fa2gZ02RLB2KTfHmGBnA28EpxXNH3Z76H3mJFzOGEbovfNFXoiGIvlt470Jl&X-Amz-Signature=1432a82a4d6c7f75f108ea8b6a1c21d35b7920a0c557ece54da6457827458111&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
