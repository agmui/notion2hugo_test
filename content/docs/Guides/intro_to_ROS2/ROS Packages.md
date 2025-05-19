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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJI47JE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkhZLRrQl59YBr10uM5sa9dIE2DcndVsBdL1Shm0YNygIhALNoIs%2Fd2iB7kp5nwU6EUSM%2FDVkQ09ot8yJO3Rnk4G7dKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2BpZLNdhEE%2FNcFVIq3AMNve11CVwZUgS3rflspOr%2BhzNIH%2BoIcVHLz5Nlck%2FiOIsxBYMmmlvEe2%2Bi9h3tfm7UfN3NIadRjrwJYj9iBR8rwnMXtnnq17JxNrHHRTD71lenwqveFy8qmvyY3xI0Tw0pNxtkst1%2Bu3iTVVbDAnS%2FnybAzYTgmB7XmkkeMYeAx0mek8Sp3M6ZAv4iKu6gSMOYrvVLHNTcQXfGEM9Gn4E3g%2BT3f%2Ff%2B8rCuwcztYgax32YqC1gAvZJOQ61Hf7OfScOpHbH%2F4rUYJ0ZoOn3KX5tM6mGQuDRsqamN0TYx3uFMVd6hrfpkMO%2FrmIS%2FRSbGR9J6j4bX8NmTcjo9TAQs1KwzsXOZ6o%2F8Ex7g%2F0c36pJ%2BylD1WQpeJV8WCjBQfjCTlevKLoRm%2F8AtQE9UNXjaun8khRmPIfEtkKJJAotlU%2FN7u6UofhQMpPxazm0y6tH8N0mLYZf53QEnbXkmO4WUzhqSkoO%2FJXLrslPlh%2FAlLJVZ%2BsnM7Gro4%2FaLO1AH658DQGpUpvdRfZ1IfeHN0hB5IP2Qa2pez4giUqW8FddLnvmVQiesI6%2BeQ%2Bxodfk%2BjDYioL1Sf099LO04lv%2FPkPYdjQIMvrG0sYUtIhwwJBvpZ3Lg5a1XeKsPiwkh1UpalDCliKvBBjqkAXCKmzxp5j2tggB4NCOSSqRM4e6KZ27VbvgyKKtOKqmYmuvZVy7pzmO5TrEufUgoZ2jGNaHXKSt%2FNKKPTusIDiNmPEo2G2W%2Bq1SGAMq%2BOf4FJ2iQInYNQCwWj6ciYkZR50Hig%2FYRd9MPE2JG1sircq%2BKMc82NxYPXQldpAfYquljpQXoiYcG7HIaSLsvYj2rPCrgLWl5GuOPw5Ya2kaa03kOep%2FK&X-Amz-Signature=369bfb062e4fcda753bdeff06813cfdb22e4069b18584ad1b5ebfc5ec4a8b104&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJI47JE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkhZLRrQl59YBr10uM5sa9dIE2DcndVsBdL1Shm0YNygIhALNoIs%2Fd2iB7kp5nwU6EUSM%2FDVkQ09ot8yJO3Rnk4G7dKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2BpZLNdhEE%2FNcFVIq3AMNve11CVwZUgS3rflspOr%2BhzNIH%2BoIcVHLz5Nlck%2FiOIsxBYMmmlvEe2%2Bi9h3tfm7UfN3NIadRjrwJYj9iBR8rwnMXtnnq17JxNrHHRTD71lenwqveFy8qmvyY3xI0Tw0pNxtkst1%2Bu3iTVVbDAnS%2FnybAzYTgmB7XmkkeMYeAx0mek8Sp3M6ZAv4iKu6gSMOYrvVLHNTcQXfGEM9Gn4E3g%2BT3f%2Ff%2B8rCuwcztYgax32YqC1gAvZJOQ61Hf7OfScOpHbH%2F4rUYJ0ZoOn3KX5tM6mGQuDRsqamN0TYx3uFMVd6hrfpkMO%2FrmIS%2FRSbGR9J6j4bX8NmTcjo9TAQs1KwzsXOZ6o%2F8Ex7g%2F0c36pJ%2BylD1WQpeJV8WCjBQfjCTlevKLoRm%2F8AtQE9UNXjaun8khRmPIfEtkKJJAotlU%2FN7u6UofhQMpPxazm0y6tH8N0mLYZf53QEnbXkmO4WUzhqSkoO%2FJXLrslPlh%2FAlLJVZ%2BsnM7Gro4%2FaLO1AH658DQGpUpvdRfZ1IfeHN0hB5IP2Qa2pez4giUqW8FddLnvmVQiesI6%2BeQ%2Bxodfk%2BjDYioL1Sf099LO04lv%2FPkPYdjQIMvrG0sYUtIhwwJBvpZ3Lg5a1XeKsPiwkh1UpalDCliKvBBjqkAXCKmzxp5j2tggB4NCOSSqRM4e6KZ27VbvgyKKtOKqmYmuvZVy7pzmO5TrEufUgoZ2jGNaHXKSt%2FNKKPTusIDiNmPEo2G2W%2Bq1SGAMq%2BOf4FJ2iQInYNQCwWj6ciYkZR50Hig%2FYRd9MPE2JG1sircq%2BKMc82NxYPXQldpAfYquljpQXoiYcG7HIaSLsvYj2rPCrgLWl5GuOPw5Ya2kaa03kOep%2FK&X-Amz-Signature=395ddf61718ed3cc4e1b29196243dfa2ec60743da012351d92cff73be5ae3e56&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJI47JE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkhZLRrQl59YBr10uM5sa9dIE2DcndVsBdL1Shm0YNygIhALNoIs%2Fd2iB7kp5nwU6EUSM%2FDVkQ09ot8yJO3Rnk4G7dKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2BpZLNdhEE%2FNcFVIq3AMNve11CVwZUgS3rflspOr%2BhzNIH%2BoIcVHLz5Nlck%2FiOIsxBYMmmlvEe2%2Bi9h3tfm7UfN3NIadRjrwJYj9iBR8rwnMXtnnq17JxNrHHRTD71lenwqveFy8qmvyY3xI0Tw0pNxtkst1%2Bu3iTVVbDAnS%2FnybAzYTgmB7XmkkeMYeAx0mek8Sp3M6ZAv4iKu6gSMOYrvVLHNTcQXfGEM9Gn4E3g%2BT3f%2Ff%2B8rCuwcztYgax32YqC1gAvZJOQ61Hf7OfScOpHbH%2F4rUYJ0ZoOn3KX5tM6mGQuDRsqamN0TYx3uFMVd6hrfpkMO%2FrmIS%2FRSbGR9J6j4bX8NmTcjo9TAQs1KwzsXOZ6o%2F8Ex7g%2F0c36pJ%2BylD1WQpeJV8WCjBQfjCTlevKLoRm%2F8AtQE9UNXjaun8khRmPIfEtkKJJAotlU%2FN7u6UofhQMpPxazm0y6tH8N0mLYZf53QEnbXkmO4WUzhqSkoO%2FJXLrslPlh%2FAlLJVZ%2BsnM7Gro4%2FaLO1AH658DQGpUpvdRfZ1IfeHN0hB5IP2Qa2pez4giUqW8FddLnvmVQiesI6%2BeQ%2Bxodfk%2BjDYioL1Sf099LO04lv%2FPkPYdjQIMvrG0sYUtIhwwJBvpZ3Lg5a1XeKsPiwkh1UpalDCliKvBBjqkAXCKmzxp5j2tggB4NCOSSqRM4e6KZ27VbvgyKKtOKqmYmuvZVy7pzmO5TrEufUgoZ2jGNaHXKSt%2FNKKPTusIDiNmPEo2G2W%2Bq1SGAMq%2BOf4FJ2iQInYNQCwWj6ciYkZR50Hig%2FYRd9MPE2JG1sircq%2BKMc82NxYPXQldpAfYquljpQXoiYcG7HIaSLsvYj2rPCrgLWl5GuOPw5Ya2kaa03kOep%2FK&X-Amz-Signature=f6a2de20589185df11af6e1287529d0389b3db0b2baa43b139e4ba9c9aff3c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJI47JE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkhZLRrQl59YBr10uM5sa9dIE2DcndVsBdL1Shm0YNygIhALNoIs%2Fd2iB7kp5nwU6EUSM%2FDVkQ09ot8yJO3Rnk4G7dKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2BpZLNdhEE%2FNcFVIq3AMNve11CVwZUgS3rflspOr%2BhzNIH%2BoIcVHLz5Nlck%2FiOIsxBYMmmlvEe2%2Bi9h3tfm7UfN3NIadRjrwJYj9iBR8rwnMXtnnq17JxNrHHRTD71lenwqveFy8qmvyY3xI0Tw0pNxtkst1%2Bu3iTVVbDAnS%2FnybAzYTgmB7XmkkeMYeAx0mek8Sp3M6ZAv4iKu6gSMOYrvVLHNTcQXfGEM9Gn4E3g%2BT3f%2Ff%2B8rCuwcztYgax32YqC1gAvZJOQ61Hf7OfScOpHbH%2F4rUYJ0ZoOn3KX5tM6mGQuDRsqamN0TYx3uFMVd6hrfpkMO%2FrmIS%2FRSbGR9J6j4bX8NmTcjo9TAQs1KwzsXOZ6o%2F8Ex7g%2F0c36pJ%2BylD1WQpeJV8WCjBQfjCTlevKLoRm%2F8AtQE9UNXjaun8khRmPIfEtkKJJAotlU%2FN7u6UofhQMpPxazm0y6tH8N0mLYZf53QEnbXkmO4WUzhqSkoO%2FJXLrslPlh%2FAlLJVZ%2BsnM7Gro4%2FaLO1AH658DQGpUpvdRfZ1IfeHN0hB5IP2Qa2pez4giUqW8FddLnvmVQiesI6%2BeQ%2Bxodfk%2BjDYioL1Sf099LO04lv%2FPkPYdjQIMvrG0sYUtIhwwJBvpZ3Lg5a1XeKsPiwkh1UpalDCliKvBBjqkAXCKmzxp5j2tggB4NCOSSqRM4e6KZ27VbvgyKKtOKqmYmuvZVy7pzmO5TrEufUgoZ2jGNaHXKSt%2FNKKPTusIDiNmPEo2G2W%2Bq1SGAMq%2BOf4FJ2iQInYNQCwWj6ciYkZR50Hig%2FYRd9MPE2JG1sircq%2BKMc82NxYPXQldpAfYquljpQXoiYcG7HIaSLsvYj2rPCrgLWl5GuOPw5Ya2kaa03kOep%2FK&X-Amz-Signature=7afb0830c304091abc763835c3aba46d95d1b2a8fef31d003b075d4993453d56&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJI47JE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkhZLRrQl59YBr10uM5sa9dIE2DcndVsBdL1Shm0YNygIhALNoIs%2Fd2iB7kp5nwU6EUSM%2FDVkQ09ot8yJO3Rnk4G7dKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2BpZLNdhEE%2FNcFVIq3AMNve11CVwZUgS3rflspOr%2BhzNIH%2BoIcVHLz5Nlck%2FiOIsxBYMmmlvEe2%2Bi9h3tfm7UfN3NIadRjrwJYj9iBR8rwnMXtnnq17JxNrHHRTD71lenwqveFy8qmvyY3xI0Tw0pNxtkst1%2Bu3iTVVbDAnS%2FnybAzYTgmB7XmkkeMYeAx0mek8Sp3M6ZAv4iKu6gSMOYrvVLHNTcQXfGEM9Gn4E3g%2BT3f%2Ff%2B8rCuwcztYgax32YqC1gAvZJOQ61Hf7OfScOpHbH%2F4rUYJ0ZoOn3KX5tM6mGQuDRsqamN0TYx3uFMVd6hrfpkMO%2FrmIS%2FRSbGR9J6j4bX8NmTcjo9TAQs1KwzsXOZ6o%2F8Ex7g%2F0c36pJ%2BylD1WQpeJV8WCjBQfjCTlevKLoRm%2F8AtQE9UNXjaun8khRmPIfEtkKJJAotlU%2FN7u6UofhQMpPxazm0y6tH8N0mLYZf53QEnbXkmO4WUzhqSkoO%2FJXLrslPlh%2FAlLJVZ%2BsnM7Gro4%2FaLO1AH658DQGpUpvdRfZ1IfeHN0hB5IP2Qa2pez4giUqW8FddLnvmVQiesI6%2BeQ%2Bxodfk%2BjDYioL1Sf099LO04lv%2FPkPYdjQIMvrG0sYUtIhwwJBvpZ3Lg5a1XeKsPiwkh1UpalDCliKvBBjqkAXCKmzxp5j2tggB4NCOSSqRM4e6KZ27VbvgyKKtOKqmYmuvZVy7pzmO5TrEufUgoZ2jGNaHXKSt%2FNKKPTusIDiNmPEo2G2W%2Bq1SGAMq%2BOf4FJ2iQInYNQCwWj6ciYkZR50Hig%2FYRd9MPE2JG1sircq%2BKMc82NxYPXQldpAfYquljpQXoiYcG7HIaSLsvYj2rPCrgLWl5GuOPw5Ya2kaa03kOep%2FK&X-Amz-Signature=605a2d3350a823ea9320a762799b475fec528ac1446b9de0635af6e887e7daab&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJI47JE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkhZLRrQl59YBr10uM5sa9dIE2DcndVsBdL1Shm0YNygIhALNoIs%2Fd2iB7kp5nwU6EUSM%2FDVkQ09ot8yJO3Rnk4G7dKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2BpZLNdhEE%2FNcFVIq3AMNve11CVwZUgS3rflspOr%2BhzNIH%2BoIcVHLz5Nlck%2FiOIsxBYMmmlvEe2%2Bi9h3tfm7UfN3NIadRjrwJYj9iBR8rwnMXtnnq17JxNrHHRTD71lenwqveFy8qmvyY3xI0Tw0pNxtkst1%2Bu3iTVVbDAnS%2FnybAzYTgmB7XmkkeMYeAx0mek8Sp3M6ZAv4iKu6gSMOYrvVLHNTcQXfGEM9Gn4E3g%2BT3f%2Ff%2B8rCuwcztYgax32YqC1gAvZJOQ61Hf7OfScOpHbH%2F4rUYJ0ZoOn3KX5tM6mGQuDRsqamN0TYx3uFMVd6hrfpkMO%2FrmIS%2FRSbGR9J6j4bX8NmTcjo9TAQs1KwzsXOZ6o%2F8Ex7g%2F0c36pJ%2BylD1WQpeJV8WCjBQfjCTlevKLoRm%2F8AtQE9UNXjaun8khRmPIfEtkKJJAotlU%2FN7u6UofhQMpPxazm0y6tH8N0mLYZf53QEnbXkmO4WUzhqSkoO%2FJXLrslPlh%2FAlLJVZ%2BsnM7Gro4%2FaLO1AH658DQGpUpvdRfZ1IfeHN0hB5IP2Qa2pez4giUqW8FddLnvmVQiesI6%2BeQ%2Bxodfk%2BjDYioL1Sf099LO04lv%2FPkPYdjQIMvrG0sYUtIhwwJBvpZ3Lg5a1XeKsPiwkh1UpalDCliKvBBjqkAXCKmzxp5j2tggB4NCOSSqRM4e6KZ27VbvgyKKtOKqmYmuvZVy7pzmO5TrEufUgoZ2jGNaHXKSt%2FNKKPTusIDiNmPEo2G2W%2Bq1SGAMq%2BOf4FJ2iQInYNQCwWj6ciYkZR50Hig%2FYRd9MPE2JG1sircq%2BKMc82NxYPXQldpAfYquljpQXoiYcG7HIaSLsvYj2rPCrgLWl5GuOPw5Ya2kaa03kOep%2FK&X-Amz-Signature=91c2ff91bf0716f917735332fb9567ca1bd57e2cd24d4d232c642b3aeea3f97d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJI47JE%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkhZLRrQl59YBr10uM5sa9dIE2DcndVsBdL1Shm0YNygIhALNoIs%2Fd2iB7kp5nwU6EUSM%2FDVkQ09ot8yJO3Rnk4G7dKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL%2BpZLNdhEE%2FNcFVIq3AMNve11CVwZUgS3rflspOr%2BhzNIH%2BoIcVHLz5Nlck%2FiOIsxBYMmmlvEe2%2Bi9h3tfm7UfN3NIadRjrwJYj9iBR8rwnMXtnnq17JxNrHHRTD71lenwqveFy8qmvyY3xI0Tw0pNxtkst1%2Bu3iTVVbDAnS%2FnybAzYTgmB7XmkkeMYeAx0mek8Sp3M6ZAv4iKu6gSMOYrvVLHNTcQXfGEM9Gn4E3g%2BT3f%2Ff%2B8rCuwcztYgax32YqC1gAvZJOQ61Hf7OfScOpHbH%2F4rUYJ0ZoOn3KX5tM6mGQuDRsqamN0TYx3uFMVd6hrfpkMO%2FrmIS%2FRSbGR9J6j4bX8NmTcjo9TAQs1KwzsXOZ6o%2F8Ex7g%2F0c36pJ%2BylD1WQpeJV8WCjBQfjCTlevKLoRm%2F8AtQE9UNXjaun8khRmPIfEtkKJJAotlU%2FN7u6UofhQMpPxazm0y6tH8N0mLYZf53QEnbXkmO4WUzhqSkoO%2FJXLrslPlh%2FAlLJVZ%2BsnM7Gro4%2FaLO1AH658DQGpUpvdRfZ1IfeHN0hB5IP2Qa2pez4giUqW8FddLnvmVQiesI6%2BeQ%2Bxodfk%2BjDYioL1Sf099LO04lv%2FPkPYdjQIMvrG0sYUtIhwwJBvpZ3Lg5a1XeKsPiwkh1UpalDCliKvBBjqkAXCKmzxp5j2tggB4NCOSSqRM4e6KZ27VbvgyKKtOKqmYmuvZVy7pzmO5TrEufUgoZ2jGNaHXKSt%2FNKKPTusIDiNmPEo2G2W%2Bq1SGAMq%2BOf4FJ2iQInYNQCwWj6ciYkZR50Hig%2FYRd9MPE2JG1sircq%2BKMc82NxYPXQldpAfYquljpQXoiYcG7HIaSLsvYj2rPCrgLWl5GuOPw5Ya2kaa03kOep%2FK&X-Amz-Signature=cf8c6e61568be8ef26880bc3728b7c6b72fa99908dcffe2bff8fe36bf331b7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
