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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFV2N6J%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG9zj1v8Pn7P1urYzNorJ%2FwgJpD1JsfTuVkOBSmeLfOyAiAHR4f5KSqnkLu9mKFSg48yP5QAmJlkoAQS98cKuUM%2FWCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8asjnC7usbZUZqwoKtwDEGylfEKmSwfCPiJJjVY0wTljY%2Bc0n4wPWyaD%2Ft%2BjRm4K%2Fmh1ehsSxoS5RywVe5U21UyQNTNhOMLV%2FyzH1l%2FPcqtKZZT4CEBq2uKnNkx2Br66okQP%2BjiZOh81cH6RsoLaVvgsQf3OU3OgLcGyTMPhIhKBjeGe55%2F59AGo%2FE0xu4%2Fp0o4KWGnQrr2Oo7cHBA84rrWVL9%2B23Z64dBT1qvvrxI57V1%2BeUIxFax9C47gu4WdRBRK0CQGzjyUhA0EQykIjZjUuLK6GIX3F4%2BdA6sHsRgU7QKfUeyeydlVEZDFSyg2%2FR9R%2B8%2F0P9P32wNGjE9no9dQ0WS3Cl9d20D9DlnydSEE%2FhXnl5Ul7MZYDFNBHE5cQCfbv2zn%2FB5h7cbxQ45gl2tzS5CD1R0vgFNXJPz3L4O6rjdDYUp3EO7jBedl0gDEDDpQx0%2BYfG2EymeDkjg11xekwMvgTJXtH41eovdb0j1X%2B59W4oymZYi%2FsK5kxtkWVtAcpIhyyLIrWDimHIxV22sJ3VQiy3z205bG7Wq2PHlWNmWa7jD11Enn9XVH5GbgGL6bBRwh%2BTLYLxfPib%2B%2FiYRMHovRjzQpSWzb4zhZGyvOaYWFSFXUSekW64tkhDNkWaTxJjNnY9p8h2GIw%2F%2B%2BcwAY6pgFdJC2E58Y4G5R1MYxmzwF0zad146i7Zdt93IRufrLUIYsHrXyWYbKYks4qQSXbWMs86dRZjTGF%2BKI8QCsxwUv9kKqcXQ%2FkLnae30OOpOyKim1QNkq1oSmwwwXXY5FzPJ%2BtrK3u4QjjDmU9o4XGBk9wpmGTELhoZuqnnvZ3fYhneuzL6S9PStCnn7FYMpAxc%2Bw4fQHs1QljAJlEo9rUy8R4Zj3mpQqF&X-Amz-Signature=dbb0387c57bb4eb3dc495bccf0631597837ee3dae00eee659cd96ed2cce9df40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFV2N6J%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG9zj1v8Pn7P1urYzNorJ%2FwgJpD1JsfTuVkOBSmeLfOyAiAHR4f5KSqnkLu9mKFSg48yP5QAmJlkoAQS98cKuUM%2FWCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8asjnC7usbZUZqwoKtwDEGylfEKmSwfCPiJJjVY0wTljY%2Bc0n4wPWyaD%2Ft%2BjRm4K%2Fmh1ehsSxoS5RywVe5U21UyQNTNhOMLV%2FyzH1l%2FPcqtKZZT4CEBq2uKnNkx2Br66okQP%2BjiZOh81cH6RsoLaVvgsQf3OU3OgLcGyTMPhIhKBjeGe55%2F59AGo%2FE0xu4%2Fp0o4KWGnQrr2Oo7cHBA84rrWVL9%2B23Z64dBT1qvvrxI57V1%2BeUIxFax9C47gu4WdRBRK0CQGzjyUhA0EQykIjZjUuLK6GIX3F4%2BdA6sHsRgU7QKfUeyeydlVEZDFSyg2%2FR9R%2B8%2F0P9P32wNGjE9no9dQ0WS3Cl9d20D9DlnydSEE%2FhXnl5Ul7MZYDFNBHE5cQCfbv2zn%2FB5h7cbxQ45gl2tzS5CD1R0vgFNXJPz3L4O6rjdDYUp3EO7jBedl0gDEDDpQx0%2BYfG2EymeDkjg11xekwMvgTJXtH41eovdb0j1X%2B59W4oymZYi%2FsK5kxtkWVtAcpIhyyLIrWDimHIxV22sJ3VQiy3z205bG7Wq2PHlWNmWa7jD11Enn9XVH5GbgGL6bBRwh%2BTLYLxfPib%2B%2FiYRMHovRjzQpSWzb4zhZGyvOaYWFSFXUSekW64tkhDNkWaTxJjNnY9p8h2GIw%2F%2B%2BcwAY6pgFdJC2E58Y4G5R1MYxmzwF0zad146i7Zdt93IRufrLUIYsHrXyWYbKYks4qQSXbWMs86dRZjTGF%2BKI8QCsxwUv9kKqcXQ%2FkLnae30OOpOyKim1QNkq1oSmwwwXXY5FzPJ%2BtrK3u4QjjDmU9o4XGBk9wpmGTELhoZuqnnvZ3fYhneuzL6S9PStCnn7FYMpAxc%2Bw4fQHs1QljAJlEo9rUy8R4Zj3mpQqF&X-Amz-Signature=bed9b9ab568d70198151ec40eebf3a069fbb369c973fb8d915d27b8ea2a59827&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFV2N6J%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG9zj1v8Pn7P1urYzNorJ%2FwgJpD1JsfTuVkOBSmeLfOyAiAHR4f5KSqnkLu9mKFSg48yP5QAmJlkoAQS98cKuUM%2FWCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8asjnC7usbZUZqwoKtwDEGylfEKmSwfCPiJJjVY0wTljY%2Bc0n4wPWyaD%2Ft%2BjRm4K%2Fmh1ehsSxoS5RywVe5U21UyQNTNhOMLV%2FyzH1l%2FPcqtKZZT4CEBq2uKnNkx2Br66okQP%2BjiZOh81cH6RsoLaVvgsQf3OU3OgLcGyTMPhIhKBjeGe55%2F59AGo%2FE0xu4%2Fp0o4KWGnQrr2Oo7cHBA84rrWVL9%2B23Z64dBT1qvvrxI57V1%2BeUIxFax9C47gu4WdRBRK0CQGzjyUhA0EQykIjZjUuLK6GIX3F4%2BdA6sHsRgU7QKfUeyeydlVEZDFSyg2%2FR9R%2B8%2F0P9P32wNGjE9no9dQ0WS3Cl9d20D9DlnydSEE%2FhXnl5Ul7MZYDFNBHE5cQCfbv2zn%2FB5h7cbxQ45gl2tzS5CD1R0vgFNXJPz3L4O6rjdDYUp3EO7jBedl0gDEDDpQx0%2BYfG2EymeDkjg11xekwMvgTJXtH41eovdb0j1X%2B59W4oymZYi%2FsK5kxtkWVtAcpIhyyLIrWDimHIxV22sJ3VQiy3z205bG7Wq2PHlWNmWa7jD11Enn9XVH5GbgGL6bBRwh%2BTLYLxfPib%2B%2FiYRMHovRjzQpSWzb4zhZGyvOaYWFSFXUSekW64tkhDNkWaTxJjNnY9p8h2GIw%2F%2B%2BcwAY6pgFdJC2E58Y4G5R1MYxmzwF0zad146i7Zdt93IRufrLUIYsHrXyWYbKYks4qQSXbWMs86dRZjTGF%2BKI8QCsxwUv9kKqcXQ%2FkLnae30OOpOyKim1QNkq1oSmwwwXXY5FzPJ%2BtrK3u4QjjDmU9o4XGBk9wpmGTELhoZuqnnvZ3fYhneuzL6S9PStCnn7FYMpAxc%2Bw4fQHs1QljAJlEo9rUy8R4Zj3mpQqF&X-Amz-Signature=4ba2a3e0c6f3a91447f21b7ac40ad8412ffb5ba5ec7f26d45f26e60d19a84ba8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFV2N6J%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG9zj1v8Pn7P1urYzNorJ%2FwgJpD1JsfTuVkOBSmeLfOyAiAHR4f5KSqnkLu9mKFSg48yP5QAmJlkoAQS98cKuUM%2FWCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8asjnC7usbZUZqwoKtwDEGylfEKmSwfCPiJJjVY0wTljY%2Bc0n4wPWyaD%2Ft%2BjRm4K%2Fmh1ehsSxoS5RywVe5U21UyQNTNhOMLV%2FyzH1l%2FPcqtKZZT4CEBq2uKnNkx2Br66okQP%2BjiZOh81cH6RsoLaVvgsQf3OU3OgLcGyTMPhIhKBjeGe55%2F59AGo%2FE0xu4%2Fp0o4KWGnQrr2Oo7cHBA84rrWVL9%2B23Z64dBT1qvvrxI57V1%2BeUIxFax9C47gu4WdRBRK0CQGzjyUhA0EQykIjZjUuLK6GIX3F4%2BdA6sHsRgU7QKfUeyeydlVEZDFSyg2%2FR9R%2B8%2F0P9P32wNGjE9no9dQ0WS3Cl9d20D9DlnydSEE%2FhXnl5Ul7MZYDFNBHE5cQCfbv2zn%2FB5h7cbxQ45gl2tzS5CD1R0vgFNXJPz3L4O6rjdDYUp3EO7jBedl0gDEDDpQx0%2BYfG2EymeDkjg11xekwMvgTJXtH41eovdb0j1X%2B59W4oymZYi%2FsK5kxtkWVtAcpIhyyLIrWDimHIxV22sJ3VQiy3z205bG7Wq2PHlWNmWa7jD11Enn9XVH5GbgGL6bBRwh%2BTLYLxfPib%2B%2FiYRMHovRjzQpSWzb4zhZGyvOaYWFSFXUSekW64tkhDNkWaTxJjNnY9p8h2GIw%2F%2B%2BcwAY6pgFdJC2E58Y4G5R1MYxmzwF0zad146i7Zdt93IRufrLUIYsHrXyWYbKYks4qQSXbWMs86dRZjTGF%2BKI8QCsxwUv9kKqcXQ%2FkLnae30OOpOyKim1QNkq1oSmwwwXXY5FzPJ%2BtrK3u4QjjDmU9o4XGBk9wpmGTELhoZuqnnvZ3fYhneuzL6S9PStCnn7FYMpAxc%2Bw4fQHs1QljAJlEo9rUy8R4Zj3mpQqF&X-Amz-Signature=fb43cb551525526520b0b60ee8a088a57a27c5d935ea749ee07be30ef9d2eb5b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFV2N6J%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG9zj1v8Pn7P1urYzNorJ%2FwgJpD1JsfTuVkOBSmeLfOyAiAHR4f5KSqnkLu9mKFSg48yP5QAmJlkoAQS98cKuUM%2FWCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8asjnC7usbZUZqwoKtwDEGylfEKmSwfCPiJJjVY0wTljY%2Bc0n4wPWyaD%2Ft%2BjRm4K%2Fmh1ehsSxoS5RywVe5U21UyQNTNhOMLV%2FyzH1l%2FPcqtKZZT4CEBq2uKnNkx2Br66okQP%2BjiZOh81cH6RsoLaVvgsQf3OU3OgLcGyTMPhIhKBjeGe55%2F59AGo%2FE0xu4%2Fp0o4KWGnQrr2Oo7cHBA84rrWVL9%2B23Z64dBT1qvvrxI57V1%2BeUIxFax9C47gu4WdRBRK0CQGzjyUhA0EQykIjZjUuLK6GIX3F4%2BdA6sHsRgU7QKfUeyeydlVEZDFSyg2%2FR9R%2B8%2F0P9P32wNGjE9no9dQ0WS3Cl9d20D9DlnydSEE%2FhXnl5Ul7MZYDFNBHE5cQCfbv2zn%2FB5h7cbxQ45gl2tzS5CD1R0vgFNXJPz3L4O6rjdDYUp3EO7jBedl0gDEDDpQx0%2BYfG2EymeDkjg11xekwMvgTJXtH41eovdb0j1X%2B59W4oymZYi%2FsK5kxtkWVtAcpIhyyLIrWDimHIxV22sJ3VQiy3z205bG7Wq2PHlWNmWa7jD11Enn9XVH5GbgGL6bBRwh%2BTLYLxfPib%2B%2FiYRMHovRjzQpSWzb4zhZGyvOaYWFSFXUSekW64tkhDNkWaTxJjNnY9p8h2GIw%2F%2B%2BcwAY6pgFdJC2E58Y4G5R1MYxmzwF0zad146i7Zdt93IRufrLUIYsHrXyWYbKYks4qQSXbWMs86dRZjTGF%2BKI8QCsxwUv9kKqcXQ%2FkLnae30OOpOyKim1QNkq1oSmwwwXXY5FzPJ%2BtrK3u4QjjDmU9o4XGBk9wpmGTELhoZuqnnvZ3fYhneuzL6S9PStCnn7FYMpAxc%2Bw4fQHs1QljAJlEo9rUy8R4Zj3mpQqF&X-Amz-Signature=4b2184956b7d6450730941b2f4aeb23345774d44c4f9dad61fbba91fe447680f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFV2N6J%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG9zj1v8Pn7P1urYzNorJ%2FwgJpD1JsfTuVkOBSmeLfOyAiAHR4f5KSqnkLu9mKFSg48yP5QAmJlkoAQS98cKuUM%2FWCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8asjnC7usbZUZqwoKtwDEGylfEKmSwfCPiJJjVY0wTljY%2Bc0n4wPWyaD%2Ft%2BjRm4K%2Fmh1ehsSxoS5RywVe5U21UyQNTNhOMLV%2FyzH1l%2FPcqtKZZT4CEBq2uKnNkx2Br66okQP%2BjiZOh81cH6RsoLaVvgsQf3OU3OgLcGyTMPhIhKBjeGe55%2F59AGo%2FE0xu4%2Fp0o4KWGnQrr2Oo7cHBA84rrWVL9%2B23Z64dBT1qvvrxI57V1%2BeUIxFax9C47gu4WdRBRK0CQGzjyUhA0EQykIjZjUuLK6GIX3F4%2BdA6sHsRgU7QKfUeyeydlVEZDFSyg2%2FR9R%2B8%2F0P9P32wNGjE9no9dQ0WS3Cl9d20D9DlnydSEE%2FhXnl5Ul7MZYDFNBHE5cQCfbv2zn%2FB5h7cbxQ45gl2tzS5CD1R0vgFNXJPz3L4O6rjdDYUp3EO7jBedl0gDEDDpQx0%2BYfG2EymeDkjg11xekwMvgTJXtH41eovdb0j1X%2B59W4oymZYi%2FsK5kxtkWVtAcpIhyyLIrWDimHIxV22sJ3VQiy3z205bG7Wq2PHlWNmWa7jD11Enn9XVH5GbgGL6bBRwh%2BTLYLxfPib%2B%2FiYRMHovRjzQpSWzb4zhZGyvOaYWFSFXUSekW64tkhDNkWaTxJjNnY9p8h2GIw%2F%2B%2BcwAY6pgFdJC2E58Y4G5R1MYxmzwF0zad146i7Zdt93IRufrLUIYsHrXyWYbKYks4qQSXbWMs86dRZjTGF%2BKI8QCsxwUv9kKqcXQ%2FkLnae30OOpOyKim1QNkq1oSmwwwXXY5FzPJ%2BtrK3u4QjjDmU9o4XGBk9wpmGTELhoZuqnnvZ3fYhneuzL6S9PStCnn7FYMpAxc%2Bw4fQHs1QljAJlEo9rUy8R4Zj3mpQqF&X-Amz-Signature=665b66fa3b3ad62d6789ca78928f16ad165848f6d67ec3ac296510eab584ee98&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFV2N6J%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIG9zj1v8Pn7P1urYzNorJ%2FwgJpD1JsfTuVkOBSmeLfOyAiAHR4f5KSqnkLu9mKFSg48yP5QAmJlkoAQS98cKuUM%2FWCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8asjnC7usbZUZqwoKtwDEGylfEKmSwfCPiJJjVY0wTljY%2Bc0n4wPWyaD%2Ft%2BjRm4K%2Fmh1ehsSxoS5RywVe5U21UyQNTNhOMLV%2FyzH1l%2FPcqtKZZT4CEBq2uKnNkx2Br66okQP%2BjiZOh81cH6RsoLaVvgsQf3OU3OgLcGyTMPhIhKBjeGe55%2F59AGo%2FE0xu4%2Fp0o4KWGnQrr2Oo7cHBA84rrWVL9%2B23Z64dBT1qvvrxI57V1%2BeUIxFax9C47gu4WdRBRK0CQGzjyUhA0EQykIjZjUuLK6GIX3F4%2BdA6sHsRgU7QKfUeyeydlVEZDFSyg2%2FR9R%2B8%2F0P9P32wNGjE9no9dQ0WS3Cl9d20D9DlnydSEE%2FhXnl5Ul7MZYDFNBHE5cQCfbv2zn%2FB5h7cbxQ45gl2tzS5CD1R0vgFNXJPz3L4O6rjdDYUp3EO7jBedl0gDEDDpQx0%2BYfG2EymeDkjg11xekwMvgTJXtH41eovdb0j1X%2B59W4oymZYi%2FsK5kxtkWVtAcpIhyyLIrWDimHIxV22sJ3VQiy3z205bG7Wq2PHlWNmWa7jD11Enn9XVH5GbgGL6bBRwh%2BTLYLxfPib%2B%2FiYRMHovRjzQpSWzb4zhZGyvOaYWFSFXUSekW64tkhDNkWaTxJjNnY9p8h2GIw%2F%2B%2BcwAY6pgFdJC2E58Y4G5R1MYxmzwF0zad146i7Zdt93IRufrLUIYsHrXyWYbKYks4qQSXbWMs86dRZjTGF%2BKI8QCsxwUv9kKqcXQ%2FkLnae30OOpOyKim1QNkq1oSmwwwXXY5FzPJ%2BtrK3u4QjjDmU9o4XGBk9wpmGTELhoZuqnnvZ3fYhneuzL6S9PStCnn7FYMpAxc%2Bw4fQHs1QljAJlEo9rUy8R4Zj3mpQqF&X-Amz-Signature=75d8dd8d08fd046c449ae02bfbb5f7fe154958770c20afd9ad497a8c54302995&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
