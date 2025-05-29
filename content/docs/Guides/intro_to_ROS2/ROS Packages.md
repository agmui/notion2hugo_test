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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3CPCJQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNp3qbDJ7tQ87ArPS4%2FOwLI5TSh%2BpxSLTnNpT56FL3LAiEAnwi7yhI8OwKIn%2BampaRmioG8l7wVAUz0oF0ZSbRRGFQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1fEbstoAOMbQIyFircAxkSLxNG14BxPf00fYPxV8eDP7bLDBj15aSYQSTaXldDZPV6t%2F8Rki6%2BLJQQbnyYGvXDEMskWNE53%2Fk402VIk7o%2B27sGstfS6WdCSkmkW72Vl41kbYZQPUJ8f8QR60Umech2LSt7QizHG7CfLqAMHzH0S8aC5xXo3Hx04UtW4tSjLFMT8qLzByszkBJyDC7N5K8fhZk2nXaW2L2iAmKEwoCA4AptXpfSeCqYKPC%2BxMezwK%2F1nPolz9BPeFI8oQa8c3eGVrv%2Fyd64JPsLWRFwaQb8713bwsXHam7EevXkcgB0sgcs0oB2Tcm2eKsPlhowuZagbpzK2P%2BEqsHAAcYwcaeYR4e4COI7zbuQ4PUsE%2FwuuMuVXnPYa1qS9JlBXldZAp8PqUfk2HshKuKCApwsIdvcBMzvWj%2FQCeJxAFH73bYfzl9lsxXvDSpNGGanX%2Bam0BGe3URu3IHq06Yg7Aysh0nrRhaulPOCEFOIoG27IbeNevy8YnQQU%2F7vZsGh82rLin6fiCOEyn9cl78bQW2zEBFh86dUzcIY1rjjHQgcm1OpHKm5zU7DP14x9tgacpsRZM7WurfPdGDnlvaNkL1%2BU18XvTRucCUfF7vbqyaf61%2B5BoBfL903kABU9oVzMJrb4MEGOqUB0QtOEIr1yArXhOSfS7OwWPI69lAW5gkYkChD2TKwwQtVdfu6yOTYPYkwGLYFt8o%2B0liZCpe4kFsXhRWdo08iNZ1J4Nn6CN9ZqoUbo3amWiFHxMDit9wenWRyHmVj0GbCWO6iciq7HxxVg0chEeNDCVjGNbsYxhrq%2BSzUHy7BD0Mk0q0%2FmIF279lLTOhG9zIsQ6HpyCQ2K%2Fizm9ZfH6tqDbhiR%2F51&X-Amz-Signature=ddcd896efbc367c6d439457c7770025825082413ac8c5223edd068152a7b18cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3CPCJQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNp3qbDJ7tQ87ArPS4%2FOwLI5TSh%2BpxSLTnNpT56FL3LAiEAnwi7yhI8OwKIn%2BampaRmioG8l7wVAUz0oF0ZSbRRGFQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1fEbstoAOMbQIyFircAxkSLxNG14BxPf00fYPxV8eDP7bLDBj15aSYQSTaXldDZPV6t%2F8Rki6%2BLJQQbnyYGvXDEMskWNE53%2Fk402VIk7o%2B27sGstfS6WdCSkmkW72Vl41kbYZQPUJ8f8QR60Umech2LSt7QizHG7CfLqAMHzH0S8aC5xXo3Hx04UtW4tSjLFMT8qLzByszkBJyDC7N5K8fhZk2nXaW2L2iAmKEwoCA4AptXpfSeCqYKPC%2BxMezwK%2F1nPolz9BPeFI8oQa8c3eGVrv%2Fyd64JPsLWRFwaQb8713bwsXHam7EevXkcgB0sgcs0oB2Tcm2eKsPlhowuZagbpzK2P%2BEqsHAAcYwcaeYR4e4COI7zbuQ4PUsE%2FwuuMuVXnPYa1qS9JlBXldZAp8PqUfk2HshKuKCApwsIdvcBMzvWj%2FQCeJxAFH73bYfzl9lsxXvDSpNGGanX%2Bam0BGe3URu3IHq06Yg7Aysh0nrRhaulPOCEFOIoG27IbeNevy8YnQQU%2F7vZsGh82rLin6fiCOEyn9cl78bQW2zEBFh86dUzcIY1rjjHQgcm1OpHKm5zU7DP14x9tgacpsRZM7WurfPdGDnlvaNkL1%2BU18XvTRucCUfF7vbqyaf61%2B5BoBfL903kABU9oVzMJrb4MEGOqUB0QtOEIr1yArXhOSfS7OwWPI69lAW5gkYkChD2TKwwQtVdfu6yOTYPYkwGLYFt8o%2B0liZCpe4kFsXhRWdo08iNZ1J4Nn6CN9ZqoUbo3amWiFHxMDit9wenWRyHmVj0GbCWO6iciq7HxxVg0chEeNDCVjGNbsYxhrq%2BSzUHy7BD0Mk0q0%2FmIF279lLTOhG9zIsQ6HpyCQ2K%2Fizm9ZfH6tqDbhiR%2F51&X-Amz-Signature=bcafb1d9094efe39b66844c0f50210ba26aae253182f1c53180b992a2622bcc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3CPCJQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNp3qbDJ7tQ87ArPS4%2FOwLI5TSh%2BpxSLTnNpT56FL3LAiEAnwi7yhI8OwKIn%2BampaRmioG8l7wVAUz0oF0ZSbRRGFQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1fEbstoAOMbQIyFircAxkSLxNG14BxPf00fYPxV8eDP7bLDBj15aSYQSTaXldDZPV6t%2F8Rki6%2BLJQQbnyYGvXDEMskWNE53%2Fk402VIk7o%2B27sGstfS6WdCSkmkW72Vl41kbYZQPUJ8f8QR60Umech2LSt7QizHG7CfLqAMHzH0S8aC5xXo3Hx04UtW4tSjLFMT8qLzByszkBJyDC7N5K8fhZk2nXaW2L2iAmKEwoCA4AptXpfSeCqYKPC%2BxMezwK%2F1nPolz9BPeFI8oQa8c3eGVrv%2Fyd64JPsLWRFwaQb8713bwsXHam7EevXkcgB0sgcs0oB2Tcm2eKsPlhowuZagbpzK2P%2BEqsHAAcYwcaeYR4e4COI7zbuQ4PUsE%2FwuuMuVXnPYa1qS9JlBXldZAp8PqUfk2HshKuKCApwsIdvcBMzvWj%2FQCeJxAFH73bYfzl9lsxXvDSpNGGanX%2Bam0BGe3URu3IHq06Yg7Aysh0nrRhaulPOCEFOIoG27IbeNevy8YnQQU%2F7vZsGh82rLin6fiCOEyn9cl78bQW2zEBFh86dUzcIY1rjjHQgcm1OpHKm5zU7DP14x9tgacpsRZM7WurfPdGDnlvaNkL1%2BU18XvTRucCUfF7vbqyaf61%2B5BoBfL903kABU9oVzMJrb4MEGOqUB0QtOEIr1yArXhOSfS7OwWPI69lAW5gkYkChD2TKwwQtVdfu6yOTYPYkwGLYFt8o%2B0liZCpe4kFsXhRWdo08iNZ1J4Nn6CN9ZqoUbo3amWiFHxMDit9wenWRyHmVj0GbCWO6iciq7HxxVg0chEeNDCVjGNbsYxhrq%2BSzUHy7BD0Mk0q0%2FmIF279lLTOhG9zIsQ6HpyCQ2K%2Fizm9ZfH6tqDbhiR%2F51&X-Amz-Signature=2128a0c63908d00d808474cd365f2264537e085246c8f354eee5401537deff3a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3CPCJQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNp3qbDJ7tQ87ArPS4%2FOwLI5TSh%2BpxSLTnNpT56FL3LAiEAnwi7yhI8OwKIn%2BampaRmioG8l7wVAUz0oF0ZSbRRGFQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1fEbstoAOMbQIyFircAxkSLxNG14BxPf00fYPxV8eDP7bLDBj15aSYQSTaXldDZPV6t%2F8Rki6%2BLJQQbnyYGvXDEMskWNE53%2Fk402VIk7o%2B27sGstfS6WdCSkmkW72Vl41kbYZQPUJ8f8QR60Umech2LSt7QizHG7CfLqAMHzH0S8aC5xXo3Hx04UtW4tSjLFMT8qLzByszkBJyDC7N5K8fhZk2nXaW2L2iAmKEwoCA4AptXpfSeCqYKPC%2BxMezwK%2F1nPolz9BPeFI8oQa8c3eGVrv%2Fyd64JPsLWRFwaQb8713bwsXHam7EevXkcgB0sgcs0oB2Tcm2eKsPlhowuZagbpzK2P%2BEqsHAAcYwcaeYR4e4COI7zbuQ4PUsE%2FwuuMuVXnPYa1qS9JlBXldZAp8PqUfk2HshKuKCApwsIdvcBMzvWj%2FQCeJxAFH73bYfzl9lsxXvDSpNGGanX%2Bam0BGe3URu3IHq06Yg7Aysh0nrRhaulPOCEFOIoG27IbeNevy8YnQQU%2F7vZsGh82rLin6fiCOEyn9cl78bQW2zEBFh86dUzcIY1rjjHQgcm1OpHKm5zU7DP14x9tgacpsRZM7WurfPdGDnlvaNkL1%2BU18XvTRucCUfF7vbqyaf61%2B5BoBfL903kABU9oVzMJrb4MEGOqUB0QtOEIr1yArXhOSfS7OwWPI69lAW5gkYkChD2TKwwQtVdfu6yOTYPYkwGLYFt8o%2B0liZCpe4kFsXhRWdo08iNZ1J4Nn6CN9ZqoUbo3amWiFHxMDit9wenWRyHmVj0GbCWO6iciq7HxxVg0chEeNDCVjGNbsYxhrq%2BSzUHy7BD0Mk0q0%2FmIF279lLTOhG9zIsQ6HpyCQ2K%2Fizm9ZfH6tqDbhiR%2F51&X-Amz-Signature=e3dbf40fce908d50522e86caf34b79851b8e9f1b236095ee18733e5379f8964a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3CPCJQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNp3qbDJ7tQ87ArPS4%2FOwLI5TSh%2BpxSLTnNpT56FL3LAiEAnwi7yhI8OwKIn%2BampaRmioG8l7wVAUz0oF0ZSbRRGFQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1fEbstoAOMbQIyFircAxkSLxNG14BxPf00fYPxV8eDP7bLDBj15aSYQSTaXldDZPV6t%2F8Rki6%2BLJQQbnyYGvXDEMskWNE53%2Fk402VIk7o%2B27sGstfS6WdCSkmkW72Vl41kbYZQPUJ8f8QR60Umech2LSt7QizHG7CfLqAMHzH0S8aC5xXo3Hx04UtW4tSjLFMT8qLzByszkBJyDC7N5K8fhZk2nXaW2L2iAmKEwoCA4AptXpfSeCqYKPC%2BxMezwK%2F1nPolz9BPeFI8oQa8c3eGVrv%2Fyd64JPsLWRFwaQb8713bwsXHam7EevXkcgB0sgcs0oB2Tcm2eKsPlhowuZagbpzK2P%2BEqsHAAcYwcaeYR4e4COI7zbuQ4PUsE%2FwuuMuVXnPYa1qS9JlBXldZAp8PqUfk2HshKuKCApwsIdvcBMzvWj%2FQCeJxAFH73bYfzl9lsxXvDSpNGGanX%2Bam0BGe3URu3IHq06Yg7Aysh0nrRhaulPOCEFOIoG27IbeNevy8YnQQU%2F7vZsGh82rLin6fiCOEyn9cl78bQW2zEBFh86dUzcIY1rjjHQgcm1OpHKm5zU7DP14x9tgacpsRZM7WurfPdGDnlvaNkL1%2BU18XvTRucCUfF7vbqyaf61%2B5BoBfL903kABU9oVzMJrb4MEGOqUB0QtOEIr1yArXhOSfS7OwWPI69lAW5gkYkChD2TKwwQtVdfu6yOTYPYkwGLYFt8o%2B0liZCpe4kFsXhRWdo08iNZ1J4Nn6CN9ZqoUbo3amWiFHxMDit9wenWRyHmVj0GbCWO6iciq7HxxVg0chEeNDCVjGNbsYxhrq%2BSzUHy7BD0Mk0q0%2FmIF279lLTOhG9zIsQ6HpyCQ2K%2Fizm9ZfH6tqDbhiR%2F51&X-Amz-Signature=6a05ef8d78e433b4f77ac6590bde7d4e282feafef6931ab29efcd484045e58bd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3CPCJQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNp3qbDJ7tQ87ArPS4%2FOwLI5TSh%2BpxSLTnNpT56FL3LAiEAnwi7yhI8OwKIn%2BampaRmioG8l7wVAUz0oF0ZSbRRGFQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1fEbstoAOMbQIyFircAxkSLxNG14BxPf00fYPxV8eDP7bLDBj15aSYQSTaXldDZPV6t%2F8Rki6%2BLJQQbnyYGvXDEMskWNE53%2Fk402VIk7o%2B27sGstfS6WdCSkmkW72Vl41kbYZQPUJ8f8QR60Umech2LSt7QizHG7CfLqAMHzH0S8aC5xXo3Hx04UtW4tSjLFMT8qLzByszkBJyDC7N5K8fhZk2nXaW2L2iAmKEwoCA4AptXpfSeCqYKPC%2BxMezwK%2F1nPolz9BPeFI8oQa8c3eGVrv%2Fyd64JPsLWRFwaQb8713bwsXHam7EevXkcgB0sgcs0oB2Tcm2eKsPlhowuZagbpzK2P%2BEqsHAAcYwcaeYR4e4COI7zbuQ4PUsE%2FwuuMuVXnPYa1qS9JlBXldZAp8PqUfk2HshKuKCApwsIdvcBMzvWj%2FQCeJxAFH73bYfzl9lsxXvDSpNGGanX%2Bam0BGe3URu3IHq06Yg7Aysh0nrRhaulPOCEFOIoG27IbeNevy8YnQQU%2F7vZsGh82rLin6fiCOEyn9cl78bQW2zEBFh86dUzcIY1rjjHQgcm1OpHKm5zU7DP14x9tgacpsRZM7WurfPdGDnlvaNkL1%2BU18XvTRucCUfF7vbqyaf61%2B5BoBfL903kABU9oVzMJrb4MEGOqUB0QtOEIr1yArXhOSfS7OwWPI69lAW5gkYkChD2TKwwQtVdfu6yOTYPYkwGLYFt8o%2B0liZCpe4kFsXhRWdo08iNZ1J4Nn6CN9ZqoUbo3amWiFHxMDit9wenWRyHmVj0GbCWO6iciq7HxxVg0chEeNDCVjGNbsYxhrq%2BSzUHy7BD0Mk0q0%2FmIF279lLTOhG9zIsQ6HpyCQ2K%2Fizm9ZfH6tqDbhiR%2F51&X-Amz-Signature=a69149068bb8c3f17d191e369ac35177a8b40244df9201a4b6d76877fa96a58a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M3CPCJQ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNp3qbDJ7tQ87ArPS4%2FOwLI5TSh%2BpxSLTnNpT56FL3LAiEAnwi7yhI8OwKIn%2BampaRmioG8l7wVAUz0oF0ZSbRRGFQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1fEbstoAOMbQIyFircAxkSLxNG14BxPf00fYPxV8eDP7bLDBj15aSYQSTaXldDZPV6t%2F8Rki6%2BLJQQbnyYGvXDEMskWNE53%2Fk402VIk7o%2B27sGstfS6WdCSkmkW72Vl41kbYZQPUJ8f8QR60Umech2LSt7QizHG7CfLqAMHzH0S8aC5xXo3Hx04UtW4tSjLFMT8qLzByszkBJyDC7N5K8fhZk2nXaW2L2iAmKEwoCA4AptXpfSeCqYKPC%2BxMezwK%2F1nPolz9BPeFI8oQa8c3eGVrv%2Fyd64JPsLWRFwaQb8713bwsXHam7EevXkcgB0sgcs0oB2Tcm2eKsPlhowuZagbpzK2P%2BEqsHAAcYwcaeYR4e4COI7zbuQ4PUsE%2FwuuMuVXnPYa1qS9JlBXldZAp8PqUfk2HshKuKCApwsIdvcBMzvWj%2FQCeJxAFH73bYfzl9lsxXvDSpNGGanX%2Bam0BGe3URu3IHq06Yg7Aysh0nrRhaulPOCEFOIoG27IbeNevy8YnQQU%2F7vZsGh82rLin6fiCOEyn9cl78bQW2zEBFh86dUzcIY1rjjHQgcm1OpHKm5zU7DP14x9tgacpsRZM7WurfPdGDnlvaNkL1%2BU18XvTRucCUfF7vbqyaf61%2B5BoBfL903kABU9oVzMJrb4MEGOqUB0QtOEIr1yArXhOSfS7OwWPI69lAW5gkYkChD2TKwwQtVdfu6yOTYPYkwGLYFt8o%2B0liZCpe4kFsXhRWdo08iNZ1J4Nn6CN9ZqoUbo3amWiFHxMDit9wenWRyHmVj0GbCWO6iciq7HxxVg0chEeNDCVjGNbsYxhrq%2BSzUHy7BD0Mk0q0%2FmIF279lLTOhG9zIsQ6HpyCQ2K%2Fizm9ZfH6tqDbhiR%2F51&X-Amz-Signature=a807bcd4a10f33a28878f25d2cbd8351c3aed0efba72a754b538b6485eab3eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
