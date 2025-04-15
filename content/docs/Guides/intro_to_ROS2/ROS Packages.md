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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSZHONS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz9h0TH57M3FZS5Ntx1%2BerkNlgwJPjAO0xtDGkYt86WAiEA2NeGjOaqOv6N6z1enbh3nrYqM2%2FPc1YjsJWjw59bZLgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJkxPI4hGT8VmDIcOircA00U76iMoXqOCNVAYDV33cezuB26bOd%2F70QC4w9570NVjBmuiCEZgQseZX9yA%2BpGTZ8NsNl00nmCTDYlyobGV7g3JI8byucD9xKV32sFkbicq0q7Ya7U1QAsTDXXFIwAes12F8G0fg%2FOl%2FH7WLDxAfEZyY22gDOmY69uXU1GOkieBnrASFRb5U8XngTykmSQePdfUhq9nRcD%2Fve7dVXl8zna0zBhzV6x9bnI%2BkrNx%2FSLjIThBJOQSxRt8KrGLlAl9QCbrM2K7YzLLg3ofvixgGOSRTVaQSYzso7a1bdx7H8bFiqmZbgaWtqqz0gslirb35rVIlB0UadY7aQLY43SYgwDqfd7eVbNn8f0cjYLWJXLkf%2BxW5CUCc90UBY440t6B2Alop%2FgpGQH%2Fq8AM1%2F%2BM%2B0vaPyKwsPyvb5DxEsX7N8fT8nsJTg7snKYsWPzaUv159IWF2Y%2B3JfXwScXg%2FguNQE751%2BMMBR15v7KY2eFGscpXDXK9x8nkmobG76gKthvtVXEi3rsw8WoRGoeWZIZmz5QsyF1JOtMGHdRC%2FK1eEyGltVwV67PKEkU2FZy9amHqYUmYxUt1pddfEtpkgFG2SP%2BNJCQgjBgm0tX53kEz1x0Nqbv%2BhnuJIGSqHkgMO%2FV%2Br8GOqUBd5U1R3WmRPojHyo5nQeTMn%2BwFJ3Gg0M9S58Y1H3OZzj%2Fnggb%2BHFvBA19htCD2IPeP%2B%2BsR9neGGx8FiuULoqhMF%2BlhY3kyqPXUEtCr8lA7duY23SQWTxHpx3BWq6Up49N5B3ulRp8oK%2BxzgfGErurcrYpG%2FGbUWKxJCRJchxVcueDIyGXqw%2FHAIrxv2KEryUvSHEf3AtzPJIU25k5dU712dkHX8Fk&X-Amz-Signature=be5a823bed4f70a2e3b0716e84cbc6d125f4d268ae3ce0a5312b7b575ce12b29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSZHONS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz9h0TH57M3FZS5Ntx1%2BerkNlgwJPjAO0xtDGkYt86WAiEA2NeGjOaqOv6N6z1enbh3nrYqM2%2FPc1YjsJWjw59bZLgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJkxPI4hGT8VmDIcOircA00U76iMoXqOCNVAYDV33cezuB26bOd%2F70QC4w9570NVjBmuiCEZgQseZX9yA%2BpGTZ8NsNl00nmCTDYlyobGV7g3JI8byucD9xKV32sFkbicq0q7Ya7U1QAsTDXXFIwAes12F8G0fg%2FOl%2FH7WLDxAfEZyY22gDOmY69uXU1GOkieBnrASFRb5U8XngTykmSQePdfUhq9nRcD%2Fve7dVXl8zna0zBhzV6x9bnI%2BkrNx%2FSLjIThBJOQSxRt8KrGLlAl9QCbrM2K7YzLLg3ofvixgGOSRTVaQSYzso7a1bdx7H8bFiqmZbgaWtqqz0gslirb35rVIlB0UadY7aQLY43SYgwDqfd7eVbNn8f0cjYLWJXLkf%2BxW5CUCc90UBY440t6B2Alop%2FgpGQH%2Fq8AM1%2F%2BM%2B0vaPyKwsPyvb5DxEsX7N8fT8nsJTg7snKYsWPzaUv159IWF2Y%2B3JfXwScXg%2FguNQE751%2BMMBR15v7KY2eFGscpXDXK9x8nkmobG76gKthvtVXEi3rsw8WoRGoeWZIZmz5QsyF1JOtMGHdRC%2FK1eEyGltVwV67PKEkU2FZy9amHqYUmYxUt1pddfEtpkgFG2SP%2BNJCQgjBgm0tX53kEz1x0Nqbv%2BhnuJIGSqHkgMO%2FV%2Br8GOqUBd5U1R3WmRPojHyo5nQeTMn%2BwFJ3Gg0M9S58Y1H3OZzj%2Fnggb%2BHFvBA19htCD2IPeP%2B%2BsR9neGGx8FiuULoqhMF%2BlhY3kyqPXUEtCr8lA7duY23SQWTxHpx3BWq6Up49N5B3ulRp8oK%2BxzgfGErurcrYpG%2FGbUWKxJCRJchxVcueDIyGXqw%2FHAIrxv2KEryUvSHEf3AtzPJIU25k5dU712dkHX8Fk&X-Amz-Signature=51781d7ce0b5515f411dd50fc8205221b67d4b107ce8ab272cdca70389570374&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSZHONS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz9h0TH57M3FZS5Ntx1%2BerkNlgwJPjAO0xtDGkYt86WAiEA2NeGjOaqOv6N6z1enbh3nrYqM2%2FPc1YjsJWjw59bZLgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJkxPI4hGT8VmDIcOircA00U76iMoXqOCNVAYDV33cezuB26bOd%2F70QC4w9570NVjBmuiCEZgQseZX9yA%2BpGTZ8NsNl00nmCTDYlyobGV7g3JI8byucD9xKV32sFkbicq0q7Ya7U1QAsTDXXFIwAes12F8G0fg%2FOl%2FH7WLDxAfEZyY22gDOmY69uXU1GOkieBnrASFRb5U8XngTykmSQePdfUhq9nRcD%2Fve7dVXl8zna0zBhzV6x9bnI%2BkrNx%2FSLjIThBJOQSxRt8KrGLlAl9QCbrM2K7YzLLg3ofvixgGOSRTVaQSYzso7a1bdx7H8bFiqmZbgaWtqqz0gslirb35rVIlB0UadY7aQLY43SYgwDqfd7eVbNn8f0cjYLWJXLkf%2BxW5CUCc90UBY440t6B2Alop%2FgpGQH%2Fq8AM1%2F%2BM%2B0vaPyKwsPyvb5DxEsX7N8fT8nsJTg7snKYsWPzaUv159IWF2Y%2B3JfXwScXg%2FguNQE751%2BMMBR15v7KY2eFGscpXDXK9x8nkmobG76gKthvtVXEi3rsw8WoRGoeWZIZmz5QsyF1JOtMGHdRC%2FK1eEyGltVwV67PKEkU2FZy9amHqYUmYxUt1pddfEtpkgFG2SP%2BNJCQgjBgm0tX53kEz1x0Nqbv%2BhnuJIGSqHkgMO%2FV%2Br8GOqUBd5U1R3WmRPojHyo5nQeTMn%2BwFJ3Gg0M9S58Y1H3OZzj%2Fnggb%2BHFvBA19htCD2IPeP%2B%2BsR9neGGx8FiuULoqhMF%2BlhY3kyqPXUEtCr8lA7duY23SQWTxHpx3BWq6Up49N5B3ulRp8oK%2BxzgfGErurcrYpG%2FGbUWKxJCRJchxVcueDIyGXqw%2FHAIrxv2KEryUvSHEf3AtzPJIU25k5dU712dkHX8Fk&X-Amz-Signature=b0e0034bf71ad6fd4895d613dbec742cd2e080782b15ef1272e504f077f3dca7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSZHONS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz9h0TH57M3FZS5Ntx1%2BerkNlgwJPjAO0xtDGkYt86WAiEA2NeGjOaqOv6N6z1enbh3nrYqM2%2FPc1YjsJWjw59bZLgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJkxPI4hGT8VmDIcOircA00U76iMoXqOCNVAYDV33cezuB26bOd%2F70QC4w9570NVjBmuiCEZgQseZX9yA%2BpGTZ8NsNl00nmCTDYlyobGV7g3JI8byucD9xKV32sFkbicq0q7Ya7U1QAsTDXXFIwAes12F8G0fg%2FOl%2FH7WLDxAfEZyY22gDOmY69uXU1GOkieBnrASFRb5U8XngTykmSQePdfUhq9nRcD%2Fve7dVXl8zna0zBhzV6x9bnI%2BkrNx%2FSLjIThBJOQSxRt8KrGLlAl9QCbrM2K7YzLLg3ofvixgGOSRTVaQSYzso7a1bdx7H8bFiqmZbgaWtqqz0gslirb35rVIlB0UadY7aQLY43SYgwDqfd7eVbNn8f0cjYLWJXLkf%2BxW5CUCc90UBY440t6B2Alop%2FgpGQH%2Fq8AM1%2F%2BM%2B0vaPyKwsPyvb5DxEsX7N8fT8nsJTg7snKYsWPzaUv159IWF2Y%2B3JfXwScXg%2FguNQE751%2BMMBR15v7KY2eFGscpXDXK9x8nkmobG76gKthvtVXEi3rsw8WoRGoeWZIZmz5QsyF1JOtMGHdRC%2FK1eEyGltVwV67PKEkU2FZy9amHqYUmYxUt1pddfEtpkgFG2SP%2BNJCQgjBgm0tX53kEz1x0Nqbv%2BhnuJIGSqHkgMO%2FV%2Br8GOqUBd5U1R3WmRPojHyo5nQeTMn%2BwFJ3Gg0M9S58Y1H3OZzj%2Fnggb%2BHFvBA19htCD2IPeP%2B%2BsR9neGGx8FiuULoqhMF%2BlhY3kyqPXUEtCr8lA7duY23SQWTxHpx3BWq6Up49N5B3ulRp8oK%2BxzgfGErurcrYpG%2FGbUWKxJCRJchxVcueDIyGXqw%2FHAIrxv2KEryUvSHEf3AtzPJIU25k5dU712dkHX8Fk&X-Amz-Signature=ec879b0be28e3e2619be137e058a263dd1fd8d4c3c245a58af987b5a0299c720&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSZHONS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz9h0TH57M3FZS5Ntx1%2BerkNlgwJPjAO0xtDGkYt86WAiEA2NeGjOaqOv6N6z1enbh3nrYqM2%2FPc1YjsJWjw59bZLgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJkxPI4hGT8VmDIcOircA00U76iMoXqOCNVAYDV33cezuB26bOd%2F70QC4w9570NVjBmuiCEZgQseZX9yA%2BpGTZ8NsNl00nmCTDYlyobGV7g3JI8byucD9xKV32sFkbicq0q7Ya7U1QAsTDXXFIwAes12F8G0fg%2FOl%2FH7WLDxAfEZyY22gDOmY69uXU1GOkieBnrASFRb5U8XngTykmSQePdfUhq9nRcD%2Fve7dVXl8zna0zBhzV6x9bnI%2BkrNx%2FSLjIThBJOQSxRt8KrGLlAl9QCbrM2K7YzLLg3ofvixgGOSRTVaQSYzso7a1bdx7H8bFiqmZbgaWtqqz0gslirb35rVIlB0UadY7aQLY43SYgwDqfd7eVbNn8f0cjYLWJXLkf%2BxW5CUCc90UBY440t6B2Alop%2FgpGQH%2Fq8AM1%2F%2BM%2B0vaPyKwsPyvb5DxEsX7N8fT8nsJTg7snKYsWPzaUv159IWF2Y%2B3JfXwScXg%2FguNQE751%2BMMBR15v7KY2eFGscpXDXK9x8nkmobG76gKthvtVXEi3rsw8WoRGoeWZIZmz5QsyF1JOtMGHdRC%2FK1eEyGltVwV67PKEkU2FZy9amHqYUmYxUt1pddfEtpkgFG2SP%2BNJCQgjBgm0tX53kEz1x0Nqbv%2BhnuJIGSqHkgMO%2FV%2Br8GOqUBd5U1R3WmRPojHyo5nQeTMn%2BwFJ3Gg0M9S58Y1H3OZzj%2Fnggb%2BHFvBA19htCD2IPeP%2B%2BsR9neGGx8FiuULoqhMF%2BlhY3kyqPXUEtCr8lA7duY23SQWTxHpx3BWq6Up49N5B3ulRp8oK%2BxzgfGErurcrYpG%2FGbUWKxJCRJchxVcueDIyGXqw%2FHAIrxv2KEryUvSHEf3AtzPJIU25k5dU712dkHX8Fk&X-Amz-Signature=f83c5b6487c4eb39402edd62fa17fb8cdf5591fbe50ea7090adebb0c59aad811&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSZHONS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz9h0TH57M3FZS5Ntx1%2BerkNlgwJPjAO0xtDGkYt86WAiEA2NeGjOaqOv6N6z1enbh3nrYqM2%2FPc1YjsJWjw59bZLgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJkxPI4hGT8VmDIcOircA00U76iMoXqOCNVAYDV33cezuB26bOd%2F70QC4w9570NVjBmuiCEZgQseZX9yA%2BpGTZ8NsNl00nmCTDYlyobGV7g3JI8byucD9xKV32sFkbicq0q7Ya7U1QAsTDXXFIwAes12F8G0fg%2FOl%2FH7WLDxAfEZyY22gDOmY69uXU1GOkieBnrASFRb5U8XngTykmSQePdfUhq9nRcD%2Fve7dVXl8zna0zBhzV6x9bnI%2BkrNx%2FSLjIThBJOQSxRt8KrGLlAl9QCbrM2K7YzLLg3ofvixgGOSRTVaQSYzso7a1bdx7H8bFiqmZbgaWtqqz0gslirb35rVIlB0UadY7aQLY43SYgwDqfd7eVbNn8f0cjYLWJXLkf%2BxW5CUCc90UBY440t6B2Alop%2FgpGQH%2Fq8AM1%2F%2BM%2B0vaPyKwsPyvb5DxEsX7N8fT8nsJTg7snKYsWPzaUv159IWF2Y%2B3JfXwScXg%2FguNQE751%2BMMBR15v7KY2eFGscpXDXK9x8nkmobG76gKthvtVXEi3rsw8WoRGoeWZIZmz5QsyF1JOtMGHdRC%2FK1eEyGltVwV67PKEkU2FZy9amHqYUmYxUt1pddfEtpkgFG2SP%2BNJCQgjBgm0tX53kEz1x0Nqbv%2BhnuJIGSqHkgMO%2FV%2Br8GOqUBd5U1R3WmRPojHyo5nQeTMn%2BwFJ3Gg0M9S58Y1H3OZzj%2Fnggb%2BHFvBA19htCD2IPeP%2B%2BsR9neGGx8FiuULoqhMF%2BlhY3kyqPXUEtCr8lA7duY23SQWTxHpx3BWq6Up49N5B3ulRp8oK%2BxzgfGErurcrYpG%2FGbUWKxJCRJchxVcueDIyGXqw%2FHAIrxv2KEryUvSHEf3AtzPJIU25k5dU712dkHX8Fk&X-Amz-Signature=94a8cda06a32a8de7f7d430c72a14f1154db41dcdc70d9cb0184ffd1b5b4d1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSZHONS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz9h0TH57M3FZS5Ntx1%2BerkNlgwJPjAO0xtDGkYt86WAiEA2NeGjOaqOv6N6z1enbh3nrYqM2%2FPc1YjsJWjw59bZLgq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJkxPI4hGT8VmDIcOircA00U76iMoXqOCNVAYDV33cezuB26bOd%2F70QC4w9570NVjBmuiCEZgQseZX9yA%2BpGTZ8NsNl00nmCTDYlyobGV7g3JI8byucD9xKV32sFkbicq0q7Ya7U1QAsTDXXFIwAes12F8G0fg%2FOl%2FH7WLDxAfEZyY22gDOmY69uXU1GOkieBnrASFRb5U8XngTykmSQePdfUhq9nRcD%2Fve7dVXl8zna0zBhzV6x9bnI%2BkrNx%2FSLjIThBJOQSxRt8KrGLlAl9QCbrM2K7YzLLg3ofvixgGOSRTVaQSYzso7a1bdx7H8bFiqmZbgaWtqqz0gslirb35rVIlB0UadY7aQLY43SYgwDqfd7eVbNn8f0cjYLWJXLkf%2BxW5CUCc90UBY440t6B2Alop%2FgpGQH%2Fq8AM1%2F%2BM%2B0vaPyKwsPyvb5DxEsX7N8fT8nsJTg7snKYsWPzaUv159IWF2Y%2B3JfXwScXg%2FguNQE751%2BMMBR15v7KY2eFGscpXDXK9x8nkmobG76gKthvtVXEi3rsw8WoRGoeWZIZmz5QsyF1JOtMGHdRC%2FK1eEyGltVwV67PKEkU2FZy9amHqYUmYxUt1pddfEtpkgFG2SP%2BNJCQgjBgm0tX53kEz1x0Nqbv%2BhnuJIGSqHkgMO%2FV%2Br8GOqUBd5U1R3WmRPojHyo5nQeTMn%2BwFJ3Gg0M9S58Y1H3OZzj%2Fnggb%2BHFvBA19htCD2IPeP%2B%2BsR9neGGx8FiuULoqhMF%2BlhY3kyqPXUEtCr8lA7duY23SQWTxHpx3BWq6Up49N5B3ulRp8oK%2BxzgfGErurcrYpG%2FGbUWKxJCRJchxVcueDIyGXqw%2FHAIrxv2KEryUvSHEf3AtzPJIU25k5dU712dkHX8Fk&X-Amz-Signature=b6de073dc96b7b2cb7cea1cbc8ec91dc62196f8cb9dec96e2db66e83892c8967&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
