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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PH2OVM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKxUtcfR0oHuyrZwviW9QWLmcfX%2F17aP0ZCXNMpV1q7gIhAMy6k6WZqJNlXKPsIJrB6KWTt5HttQcdsCCFQQEVCrWxKv8DCF8QABoMNjM3NDIzMTgzODA1IgzyDWy2hGSGeHGVqYkq3AOBhJKLfk0otdRvSaPlvcLfAngRROHEF2pebG4Ty%2BwZgP1VEOccCVL5r5JHP22I08jfUgz53yUvd0b3vBcWD6lzXEsjfumrgn7iwikVzAGO6r1w8XlHgQSyISDR0VhDQLxCn6gafTOQJOLXcm%2BToqrqZl1VhFNCaVpfbbXA%2FdbBY4Kfv6WEurJkZX0snOxx4WhZJR%2FzYLKBPXFv8RlYnCOt%2B%2FjjT7DE12%2FbP1sgZl8S8NCTAFk5lkI66fMxuC6HgaUG4sY62mbAHVIsVw7xacmXCAPcqHFiOMak5tAHL3e1qpFtL66ranYArhnjwckiD8bsyQdqhPRZbKj471FmRaI7Wyb%2BQYJBuXt0yeUO0c5KOtNII71OqB0IDwqV2SfGg619DvjZOYFCoDL%2Bqh5kFoSCzM7y%2BZi6j9k3X4MHMeYXijLicSPNDA%2BR9Jsy%2FU9XVggT1xh%2BnFiavyus5TPwJtR3GmC55v%2B3B6mQAHEgQcRgY7iTYze9e94eQY1qcWb95cbwOvd7skWFEWgBnNJmniO7M0Kqu97Hq9UUvJtGvtOVcCtlQdUVzuD08iPi9Eynj9UUHDWlyK%2B8Rsh%2Fh9r6G4lJDzefHIFIKgIXzWVOWBBdJsSa8Cqm3TzrMAsF7jCD%2FNbBBjqkAcdUeVyZBiRMEHKT76P%2Flp99JrJLKvRcRbWxuQabZrhCBzZtoTB32mD2l0LpUhHn4SLvF8iSLPD7A5YZYodAiqwfM4loDiPNxIAO%2FwEI%2FCJR%2B%2BZeKeMKhYO3295dQAdsjWVH37hoFqpEx0JlFoBHiu3qwFdWPjlU5Vlv1Qm4sxfWWNnhOtgZT1ZxscYU4%2Bdi2AgAaZJw3mijTIATGMwgoWHoykfe&X-Amz-Signature=2b2eb08d78a7538bc4969ae9ac347329e1847cf09cb87101d01bcf54eae3f011&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PH2OVM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKxUtcfR0oHuyrZwviW9QWLmcfX%2F17aP0ZCXNMpV1q7gIhAMy6k6WZqJNlXKPsIJrB6KWTt5HttQcdsCCFQQEVCrWxKv8DCF8QABoMNjM3NDIzMTgzODA1IgzyDWy2hGSGeHGVqYkq3AOBhJKLfk0otdRvSaPlvcLfAngRROHEF2pebG4Ty%2BwZgP1VEOccCVL5r5JHP22I08jfUgz53yUvd0b3vBcWD6lzXEsjfumrgn7iwikVzAGO6r1w8XlHgQSyISDR0VhDQLxCn6gafTOQJOLXcm%2BToqrqZl1VhFNCaVpfbbXA%2FdbBY4Kfv6WEurJkZX0snOxx4WhZJR%2FzYLKBPXFv8RlYnCOt%2B%2FjjT7DE12%2FbP1sgZl8S8NCTAFk5lkI66fMxuC6HgaUG4sY62mbAHVIsVw7xacmXCAPcqHFiOMak5tAHL3e1qpFtL66ranYArhnjwckiD8bsyQdqhPRZbKj471FmRaI7Wyb%2BQYJBuXt0yeUO0c5KOtNII71OqB0IDwqV2SfGg619DvjZOYFCoDL%2Bqh5kFoSCzM7y%2BZi6j9k3X4MHMeYXijLicSPNDA%2BR9Jsy%2FU9XVggT1xh%2BnFiavyus5TPwJtR3GmC55v%2B3B6mQAHEgQcRgY7iTYze9e94eQY1qcWb95cbwOvd7skWFEWgBnNJmniO7M0Kqu97Hq9UUvJtGvtOVcCtlQdUVzuD08iPi9Eynj9UUHDWlyK%2B8Rsh%2Fh9r6G4lJDzefHIFIKgIXzWVOWBBdJsSa8Cqm3TzrMAsF7jCD%2FNbBBjqkAcdUeVyZBiRMEHKT76P%2Flp99JrJLKvRcRbWxuQabZrhCBzZtoTB32mD2l0LpUhHn4SLvF8iSLPD7A5YZYodAiqwfM4loDiPNxIAO%2FwEI%2FCJR%2B%2BZeKeMKhYO3295dQAdsjWVH37hoFqpEx0JlFoBHiu3qwFdWPjlU5Vlv1Qm4sxfWWNnhOtgZT1ZxscYU4%2Bdi2AgAaZJw3mijTIATGMwgoWHoykfe&X-Amz-Signature=0e52bd9b59a595d62bf3b1c7079ac1f21d271508b2617e2f0f11923771ac4bee&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PH2OVM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKxUtcfR0oHuyrZwviW9QWLmcfX%2F17aP0ZCXNMpV1q7gIhAMy6k6WZqJNlXKPsIJrB6KWTt5HttQcdsCCFQQEVCrWxKv8DCF8QABoMNjM3NDIzMTgzODA1IgzyDWy2hGSGeHGVqYkq3AOBhJKLfk0otdRvSaPlvcLfAngRROHEF2pebG4Ty%2BwZgP1VEOccCVL5r5JHP22I08jfUgz53yUvd0b3vBcWD6lzXEsjfumrgn7iwikVzAGO6r1w8XlHgQSyISDR0VhDQLxCn6gafTOQJOLXcm%2BToqrqZl1VhFNCaVpfbbXA%2FdbBY4Kfv6WEurJkZX0snOxx4WhZJR%2FzYLKBPXFv8RlYnCOt%2B%2FjjT7DE12%2FbP1sgZl8S8NCTAFk5lkI66fMxuC6HgaUG4sY62mbAHVIsVw7xacmXCAPcqHFiOMak5tAHL3e1qpFtL66ranYArhnjwckiD8bsyQdqhPRZbKj471FmRaI7Wyb%2BQYJBuXt0yeUO0c5KOtNII71OqB0IDwqV2SfGg619DvjZOYFCoDL%2Bqh5kFoSCzM7y%2BZi6j9k3X4MHMeYXijLicSPNDA%2BR9Jsy%2FU9XVggT1xh%2BnFiavyus5TPwJtR3GmC55v%2B3B6mQAHEgQcRgY7iTYze9e94eQY1qcWb95cbwOvd7skWFEWgBnNJmniO7M0Kqu97Hq9UUvJtGvtOVcCtlQdUVzuD08iPi9Eynj9UUHDWlyK%2B8Rsh%2Fh9r6G4lJDzefHIFIKgIXzWVOWBBdJsSa8Cqm3TzrMAsF7jCD%2FNbBBjqkAcdUeVyZBiRMEHKT76P%2Flp99JrJLKvRcRbWxuQabZrhCBzZtoTB32mD2l0LpUhHn4SLvF8iSLPD7A5YZYodAiqwfM4loDiPNxIAO%2FwEI%2FCJR%2B%2BZeKeMKhYO3295dQAdsjWVH37hoFqpEx0JlFoBHiu3qwFdWPjlU5Vlv1Qm4sxfWWNnhOtgZT1ZxscYU4%2Bdi2AgAaZJw3mijTIATGMwgoWHoykfe&X-Amz-Signature=830d62d2a213ac393b1797b0f5445011d7ddc247a2f831761dbfbbeb5906b799&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PH2OVM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKxUtcfR0oHuyrZwviW9QWLmcfX%2F17aP0ZCXNMpV1q7gIhAMy6k6WZqJNlXKPsIJrB6KWTt5HttQcdsCCFQQEVCrWxKv8DCF8QABoMNjM3NDIzMTgzODA1IgzyDWy2hGSGeHGVqYkq3AOBhJKLfk0otdRvSaPlvcLfAngRROHEF2pebG4Ty%2BwZgP1VEOccCVL5r5JHP22I08jfUgz53yUvd0b3vBcWD6lzXEsjfumrgn7iwikVzAGO6r1w8XlHgQSyISDR0VhDQLxCn6gafTOQJOLXcm%2BToqrqZl1VhFNCaVpfbbXA%2FdbBY4Kfv6WEurJkZX0snOxx4WhZJR%2FzYLKBPXFv8RlYnCOt%2B%2FjjT7DE12%2FbP1sgZl8S8NCTAFk5lkI66fMxuC6HgaUG4sY62mbAHVIsVw7xacmXCAPcqHFiOMak5tAHL3e1qpFtL66ranYArhnjwckiD8bsyQdqhPRZbKj471FmRaI7Wyb%2BQYJBuXt0yeUO0c5KOtNII71OqB0IDwqV2SfGg619DvjZOYFCoDL%2Bqh5kFoSCzM7y%2BZi6j9k3X4MHMeYXijLicSPNDA%2BR9Jsy%2FU9XVggT1xh%2BnFiavyus5TPwJtR3GmC55v%2B3B6mQAHEgQcRgY7iTYze9e94eQY1qcWb95cbwOvd7skWFEWgBnNJmniO7M0Kqu97Hq9UUvJtGvtOVcCtlQdUVzuD08iPi9Eynj9UUHDWlyK%2B8Rsh%2Fh9r6G4lJDzefHIFIKgIXzWVOWBBdJsSa8Cqm3TzrMAsF7jCD%2FNbBBjqkAcdUeVyZBiRMEHKT76P%2Flp99JrJLKvRcRbWxuQabZrhCBzZtoTB32mD2l0LpUhHn4SLvF8iSLPD7A5YZYodAiqwfM4loDiPNxIAO%2FwEI%2FCJR%2B%2BZeKeMKhYO3295dQAdsjWVH37hoFqpEx0JlFoBHiu3qwFdWPjlU5Vlv1Qm4sxfWWNnhOtgZT1ZxscYU4%2Bdi2AgAaZJw3mijTIATGMwgoWHoykfe&X-Amz-Signature=3c511098f7e3a97330406ebd9bed1a2b518fe855dbcfcefa05f1ec25635ff727&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PH2OVM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKxUtcfR0oHuyrZwviW9QWLmcfX%2F17aP0ZCXNMpV1q7gIhAMy6k6WZqJNlXKPsIJrB6KWTt5HttQcdsCCFQQEVCrWxKv8DCF8QABoMNjM3NDIzMTgzODA1IgzyDWy2hGSGeHGVqYkq3AOBhJKLfk0otdRvSaPlvcLfAngRROHEF2pebG4Ty%2BwZgP1VEOccCVL5r5JHP22I08jfUgz53yUvd0b3vBcWD6lzXEsjfumrgn7iwikVzAGO6r1w8XlHgQSyISDR0VhDQLxCn6gafTOQJOLXcm%2BToqrqZl1VhFNCaVpfbbXA%2FdbBY4Kfv6WEurJkZX0snOxx4WhZJR%2FzYLKBPXFv8RlYnCOt%2B%2FjjT7DE12%2FbP1sgZl8S8NCTAFk5lkI66fMxuC6HgaUG4sY62mbAHVIsVw7xacmXCAPcqHFiOMak5tAHL3e1qpFtL66ranYArhnjwckiD8bsyQdqhPRZbKj471FmRaI7Wyb%2BQYJBuXt0yeUO0c5KOtNII71OqB0IDwqV2SfGg619DvjZOYFCoDL%2Bqh5kFoSCzM7y%2BZi6j9k3X4MHMeYXijLicSPNDA%2BR9Jsy%2FU9XVggT1xh%2BnFiavyus5TPwJtR3GmC55v%2B3B6mQAHEgQcRgY7iTYze9e94eQY1qcWb95cbwOvd7skWFEWgBnNJmniO7M0Kqu97Hq9UUvJtGvtOVcCtlQdUVzuD08iPi9Eynj9UUHDWlyK%2B8Rsh%2Fh9r6G4lJDzefHIFIKgIXzWVOWBBdJsSa8Cqm3TzrMAsF7jCD%2FNbBBjqkAcdUeVyZBiRMEHKT76P%2Flp99JrJLKvRcRbWxuQabZrhCBzZtoTB32mD2l0LpUhHn4SLvF8iSLPD7A5YZYodAiqwfM4loDiPNxIAO%2FwEI%2FCJR%2B%2BZeKeMKhYO3295dQAdsjWVH37hoFqpEx0JlFoBHiu3qwFdWPjlU5Vlv1Qm4sxfWWNnhOtgZT1ZxscYU4%2Bdi2AgAaZJw3mijTIATGMwgoWHoykfe&X-Amz-Signature=b028f193208b3095f05734bdc7de290ad7105641a74e91588d7dc5cc289ebb7a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PH2OVM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKxUtcfR0oHuyrZwviW9QWLmcfX%2F17aP0ZCXNMpV1q7gIhAMy6k6WZqJNlXKPsIJrB6KWTt5HttQcdsCCFQQEVCrWxKv8DCF8QABoMNjM3NDIzMTgzODA1IgzyDWy2hGSGeHGVqYkq3AOBhJKLfk0otdRvSaPlvcLfAngRROHEF2pebG4Ty%2BwZgP1VEOccCVL5r5JHP22I08jfUgz53yUvd0b3vBcWD6lzXEsjfumrgn7iwikVzAGO6r1w8XlHgQSyISDR0VhDQLxCn6gafTOQJOLXcm%2BToqrqZl1VhFNCaVpfbbXA%2FdbBY4Kfv6WEurJkZX0snOxx4WhZJR%2FzYLKBPXFv8RlYnCOt%2B%2FjjT7DE12%2FbP1sgZl8S8NCTAFk5lkI66fMxuC6HgaUG4sY62mbAHVIsVw7xacmXCAPcqHFiOMak5tAHL3e1qpFtL66ranYArhnjwckiD8bsyQdqhPRZbKj471FmRaI7Wyb%2BQYJBuXt0yeUO0c5KOtNII71OqB0IDwqV2SfGg619DvjZOYFCoDL%2Bqh5kFoSCzM7y%2BZi6j9k3X4MHMeYXijLicSPNDA%2BR9Jsy%2FU9XVggT1xh%2BnFiavyus5TPwJtR3GmC55v%2B3B6mQAHEgQcRgY7iTYze9e94eQY1qcWb95cbwOvd7skWFEWgBnNJmniO7M0Kqu97Hq9UUvJtGvtOVcCtlQdUVzuD08iPi9Eynj9UUHDWlyK%2B8Rsh%2Fh9r6G4lJDzefHIFIKgIXzWVOWBBdJsSa8Cqm3TzrMAsF7jCD%2FNbBBjqkAcdUeVyZBiRMEHKT76P%2Flp99JrJLKvRcRbWxuQabZrhCBzZtoTB32mD2l0LpUhHn4SLvF8iSLPD7A5YZYodAiqwfM4loDiPNxIAO%2FwEI%2FCJR%2B%2BZeKeMKhYO3295dQAdsjWVH37hoFqpEx0JlFoBHiu3qwFdWPjlU5Vlv1Qm4sxfWWNnhOtgZT1ZxscYU4%2Bdi2AgAaZJw3mijTIATGMwgoWHoykfe&X-Amz-Signature=d40e809637ced49e6863c8dc69a1270bd985c0d44838cfbfb9ce84e1b09749f8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PH2OVM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T150953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKxUtcfR0oHuyrZwviW9QWLmcfX%2F17aP0ZCXNMpV1q7gIhAMy6k6WZqJNlXKPsIJrB6KWTt5HttQcdsCCFQQEVCrWxKv8DCF8QABoMNjM3NDIzMTgzODA1IgzyDWy2hGSGeHGVqYkq3AOBhJKLfk0otdRvSaPlvcLfAngRROHEF2pebG4Ty%2BwZgP1VEOccCVL5r5JHP22I08jfUgz53yUvd0b3vBcWD6lzXEsjfumrgn7iwikVzAGO6r1w8XlHgQSyISDR0VhDQLxCn6gafTOQJOLXcm%2BToqrqZl1VhFNCaVpfbbXA%2FdbBY4Kfv6WEurJkZX0snOxx4WhZJR%2FzYLKBPXFv8RlYnCOt%2B%2FjjT7DE12%2FbP1sgZl8S8NCTAFk5lkI66fMxuC6HgaUG4sY62mbAHVIsVw7xacmXCAPcqHFiOMak5tAHL3e1qpFtL66ranYArhnjwckiD8bsyQdqhPRZbKj471FmRaI7Wyb%2BQYJBuXt0yeUO0c5KOtNII71OqB0IDwqV2SfGg619DvjZOYFCoDL%2Bqh5kFoSCzM7y%2BZi6j9k3X4MHMeYXijLicSPNDA%2BR9Jsy%2FU9XVggT1xh%2BnFiavyus5TPwJtR3GmC55v%2B3B6mQAHEgQcRgY7iTYze9e94eQY1qcWb95cbwOvd7skWFEWgBnNJmniO7M0Kqu97Hq9UUvJtGvtOVcCtlQdUVzuD08iPi9Eynj9UUHDWlyK%2B8Rsh%2Fh9r6G4lJDzefHIFIKgIXzWVOWBBdJsSa8Cqm3TzrMAsF7jCD%2FNbBBjqkAcdUeVyZBiRMEHKT76P%2Flp99JrJLKvRcRbWxuQabZrhCBzZtoTB32mD2l0LpUhHn4SLvF8iSLPD7A5YZYodAiqwfM4loDiPNxIAO%2FwEI%2FCJR%2B%2BZeKeMKhYO3295dQAdsjWVH37hoFqpEx0JlFoBHiu3qwFdWPjlU5Vlv1Qm4sxfWWNnhOtgZT1ZxscYU4%2Bdi2AgAaZJw3mijTIATGMwgoWHoykfe&X-Amz-Signature=6454b790fad949b2ab257ddabfa1289684babf147f3b06a68fd7573b057b2d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
