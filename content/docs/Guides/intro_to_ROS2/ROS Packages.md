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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=179b6931b917cf4be885a2333947417a54f56259070e707c7e930595eaa73b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=4e43d997c2dcbb9cc223a36d9aea03296dfb0f29a5f47403b208c4710d63f059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=6e57d07ad0032ae1016a8011308dcc04a6b7aa2f592e62d873cc5871e338f3f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=c9248d5bdc368ab7025b9a411b764ba20dfded77cea400f8de3e18461133a68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=93a032471df8fcd03eb72ed3487a6a950690c43eec204908a637f292723a05b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=0967f8a778239610d3056b5e99f7d5206c56f3262dba6ab6c5c078f698222087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDZD4EF%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4NvcsgXR1%2B9eZF7H3BTbtRzvo%2F%2FEakXQdFRfZnStk7AiEApIARlYMu9SFj1%2FT68T7ccRkRN1r4ncTnxxn6VrJ8OgQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHE4wPTpYaW%2FWwWNircA%2FVvvbRks01S0ZM2%2BlMn2QSJT%2FI53RJ2Ku07WYE9c2YMLh7rjGpZlnDZdvko5d8fc6ojAcAqOm3F%2FWC3hABRNzNJ%2FC2TxwwbJWuXSjQQOHglz%2BlJ6SeVzQKjkUD79%2BTcw%2BovEAFUnqbgNderLJJ9em7IcK4i4tQIvOsAUbAZHitnvnx0K6Lif3dlryycI2y3I4yHJNV0cZ0wlSVrEBjiDWWSZqR3IjbQr%2BVV5xzcDfEF8IMpFPAsmgC1f1UkPaEx05Z8NnL0tt7Qv0BENZC6MEZId48dC3s9Kqb7dWa3ewR4K65mgbz4N8erJJnMGKVYcoEmfbt8ZFRKnrxdUlEu1lzma6DUk1taUEox7DtSPTPKgcs3gSekca7jySQ1ZxVrEdiBKDHzrVP2%2FTVZ1qbyzknrze6zmaTeTvEg2wZhT1Rm2XpikGymfP%2BSHja6oAq1P3PWpYYAeh6ccIE%2FJph1N0Jz4nlSHmL8NxAOr2pVEmLlu1CpN91Piv3PpVqmySZHWwl%2FWFALcXILCRPTp8so5Vc1PZu517Kx9NqqVuF43XwqNtEt2UgWN7AP%2B9ZrUlzDI52grYrzrYFwrLZbuWy6etmATWlXVZ7ZIaJQmFuGikdTocP7lCZoUEoD1WelMNTvusMGOqUBvIZksMhs7w8t3vLZoExsr5qK0ESo%2BOYv6Uj8pXM4ABvBC3MIf5j6UhaeOYjM7IP5jRYwry1esVUZbQeQirVDvk2XsHbn%2F55z4XN25XjBzN3L58COute7w90BaU922B7GaiwjQ3kw0EdL4zaoMJs3MDIzJkftmjzCTtwtw3nOmho7n5JgU%2BNUKv0DtgNYliWo%2FSRqL7Fiwg99pvoPbnoCvFVL7c8W&X-Amz-Signature=0a51c828ddf00e4afc3c2a7a1383c40f385dd1d2d98b918a77bc1bfd21b5908f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
