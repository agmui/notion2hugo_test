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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKOGMWP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtShtF05eHeUodyXJfjc0Y5%2BllJUYIyNcSBy6hwQeAlAiA0M%2F3%2Bvnwlcg0rnvPpEZ%2FuRuYeAkwE6WIK1wZn%2FnS%2F0SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06vDE%2B4D3FhmfAKAKtwD1UGXhrxIYPKZbpQta9mRfBmHsENEnoMTh%2F5shQbKA1LbvzLR8W2xadgDfoJgBY0i6gxlxy3wzVwlGRspjHif8wFYh2LjVha%2BE0Kq7cGCQJp4SWmhjP6ZYHMQSLO13SRyCNbRf9P18f2NWvR%2BRAQJZx78sZ3AOP4gpu%2B3X0KgsIBryPbB0DujYl68tytUgciTz3wrDTFk5hAC9nckPqrEaM8h7h%2BOpEQb7qA1uytwPSg72%2Ft0U1VPWRgemhcPGl463PmfEdEPmtxFB8ouTnQZzCurB1jeRv1ACO8JAxrt61V%2FqRlbpQ3ToO3Gj3%2F6wyIgRWFtvA0p79IPhZMwebnMjsUGPDkIcvqslPUafLSN62B0TTXEi9K0hMxVbU1ziIZbF3PzaOCIdB0SaEnVzJFWmvOZfOBZF1xuY4F5n7DNRDv7Vn1TJIkh14rpUblQm4MDozoUF3KQiPj13wQe1KGC2ldaewQusKu%2BQ4idhimVc%2BwueI4P46oJUl%2BRMwlL3Chw7jgDXtltxycGY%2BV8oG6pY5wkLTVZORNgmNykuL1ASnNkwKx2bDX1MwmD%2BnjKWutsHtD32C0lRSHofN%2FlbfRKKL8uzgJKGb9cUzfNbolMmrU7lfYpLc5Co3GxatMw6L%2BavgY6pgGydik588UlBVkPQ9dh4hNDYCjY9hJH7sYLIeeuK4W6LKiZ5PS%2FNzygi2f9DTUrdMuFsB0ctqU9b5JFl1fld2zLseuXUOLe3SW1UNbU6ENmRC5R%2FSLv%2FEBAtFcMg9p9AjGipFPdugioM3SYRrrc5zhF%2FpK3MBqboO0%2F5YONpPuKJwL0J058Tmbo%2BA55XvMn%2BKQ%2BUZEGoL%2Bcf6SeAG%2BFLWY4XDyWOUcB&X-Amz-Signature=bd70382c10df647c1f8d1c74a0bcc4a91e727161ee5aa7ee3231860738c5cd22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKOGMWP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtShtF05eHeUodyXJfjc0Y5%2BllJUYIyNcSBy6hwQeAlAiA0M%2F3%2Bvnwlcg0rnvPpEZ%2FuRuYeAkwE6WIK1wZn%2FnS%2F0SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06vDE%2B4D3FhmfAKAKtwD1UGXhrxIYPKZbpQta9mRfBmHsENEnoMTh%2F5shQbKA1LbvzLR8W2xadgDfoJgBY0i6gxlxy3wzVwlGRspjHif8wFYh2LjVha%2BE0Kq7cGCQJp4SWmhjP6ZYHMQSLO13SRyCNbRf9P18f2NWvR%2BRAQJZx78sZ3AOP4gpu%2B3X0KgsIBryPbB0DujYl68tytUgciTz3wrDTFk5hAC9nckPqrEaM8h7h%2BOpEQb7qA1uytwPSg72%2Ft0U1VPWRgemhcPGl463PmfEdEPmtxFB8ouTnQZzCurB1jeRv1ACO8JAxrt61V%2FqRlbpQ3ToO3Gj3%2F6wyIgRWFtvA0p79IPhZMwebnMjsUGPDkIcvqslPUafLSN62B0TTXEi9K0hMxVbU1ziIZbF3PzaOCIdB0SaEnVzJFWmvOZfOBZF1xuY4F5n7DNRDv7Vn1TJIkh14rpUblQm4MDozoUF3KQiPj13wQe1KGC2ldaewQusKu%2BQ4idhimVc%2BwueI4P46oJUl%2BRMwlL3Chw7jgDXtltxycGY%2BV8oG6pY5wkLTVZORNgmNykuL1ASnNkwKx2bDX1MwmD%2BnjKWutsHtD32C0lRSHofN%2FlbfRKKL8uzgJKGb9cUzfNbolMmrU7lfYpLc5Co3GxatMw6L%2BavgY6pgGydik588UlBVkPQ9dh4hNDYCjY9hJH7sYLIeeuK4W6LKiZ5PS%2FNzygi2f9DTUrdMuFsB0ctqU9b5JFl1fld2zLseuXUOLe3SW1UNbU6ENmRC5R%2FSLv%2FEBAtFcMg9p9AjGipFPdugioM3SYRrrc5zhF%2FpK3MBqboO0%2F5YONpPuKJwL0J058Tmbo%2BA55XvMn%2BKQ%2BUZEGoL%2Bcf6SeAG%2BFLWY4XDyWOUcB&X-Amz-Signature=6a14a9acbb385f68f25cf5b973a769e48aee65deaaadfe54dc05654dcefdbf59&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKOGMWP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtShtF05eHeUodyXJfjc0Y5%2BllJUYIyNcSBy6hwQeAlAiA0M%2F3%2Bvnwlcg0rnvPpEZ%2FuRuYeAkwE6WIK1wZn%2FnS%2F0SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06vDE%2B4D3FhmfAKAKtwD1UGXhrxIYPKZbpQta9mRfBmHsENEnoMTh%2F5shQbKA1LbvzLR8W2xadgDfoJgBY0i6gxlxy3wzVwlGRspjHif8wFYh2LjVha%2BE0Kq7cGCQJp4SWmhjP6ZYHMQSLO13SRyCNbRf9P18f2NWvR%2BRAQJZx78sZ3AOP4gpu%2B3X0KgsIBryPbB0DujYl68tytUgciTz3wrDTFk5hAC9nckPqrEaM8h7h%2BOpEQb7qA1uytwPSg72%2Ft0U1VPWRgemhcPGl463PmfEdEPmtxFB8ouTnQZzCurB1jeRv1ACO8JAxrt61V%2FqRlbpQ3ToO3Gj3%2F6wyIgRWFtvA0p79IPhZMwebnMjsUGPDkIcvqslPUafLSN62B0TTXEi9K0hMxVbU1ziIZbF3PzaOCIdB0SaEnVzJFWmvOZfOBZF1xuY4F5n7DNRDv7Vn1TJIkh14rpUblQm4MDozoUF3KQiPj13wQe1KGC2ldaewQusKu%2BQ4idhimVc%2BwueI4P46oJUl%2BRMwlL3Chw7jgDXtltxycGY%2BV8oG6pY5wkLTVZORNgmNykuL1ASnNkwKx2bDX1MwmD%2BnjKWutsHtD32C0lRSHofN%2FlbfRKKL8uzgJKGb9cUzfNbolMmrU7lfYpLc5Co3GxatMw6L%2BavgY6pgGydik588UlBVkPQ9dh4hNDYCjY9hJH7sYLIeeuK4W6LKiZ5PS%2FNzygi2f9DTUrdMuFsB0ctqU9b5JFl1fld2zLseuXUOLe3SW1UNbU6ENmRC5R%2FSLv%2FEBAtFcMg9p9AjGipFPdugioM3SYRrrc5zhF%2FpK3MBqboO0%2F5YONpPuKJwL0J058Tmbo%2BA55XvMn%2BKQ%2BUZEGoL%2Bcf6SeAG%2BFLWY4XDyWOUcB&X-Amz-Signature=314d5ee557f8b96e16bcc2cc93efe9e44d6ce51782965393aa55943240782a52&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKOGMWP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtShtF05eHeUodyXJfjc0Y5%2BllJUYIyNcSBy6hwQeAlAiA0M%2F3%2Bvnwlcg0rnvPpEZ%2FuRuYeAkwE6WIK1wZn%2FnS%2F0SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06vDE%2B4D3FhmfAKAKtwD1UGXhrxIYPKZbpQta9mRfBmHsENEnoMTh%2F5shQbKA1LbvzLR8W2xadgDfoJgBY0i6gxlxy3wzVwlGRspjHif8wFYh2LjVha%2BE0Kq7cGCQJp4SWmhjP6ZYHMQSLO13SRyCNbRf9P18f2NWvR%2BRAQJZx78sZ3AOP4gpu%2B3X0KgsIBryPbB0DujYl68tytUgciTz3wrDTFk5hAC9nckPqrEaM8h7h%2BOpEQb7qA1uytwPSg72%2Ft0U1VPWRgemhcPGl463PmfEdEPmtxFB8ouTnQZzCurB1jeRv1ACO8JAxrt61V%2FqRlbpQ3ToO3Gj3%2F6wyIgRWFtvA0p79IPhZMwebnMjsUGPDkIcvqslPUafLSN62B0TTXEi9K0hMxVbU1ziIZbF3PzaOCIdB0SaEnVzJFWmvOZfOBZF1xuY4F5n7DNRDv7Vn1TJIkh14rpUblQm4MDozoUF3KQiPj13wQe1KGC2ldaewQusKu%2BQ4idhimVc%2BwueI4P46oJUl%2BRMwlL3Chw7jgDXtltxycGY%2BV8oG6pY5wkLTVZORNgmNykuL1ASnNkwKx2bDX1MwmD%2BnjKWutsHtD32C0lRSHofN%2FlbfRKKL8uzgJKGb9cUzfNbolMmrU7lfYpLc5Co3GxatMw6L%2BavgY6pgGydik588UlBVkPQ9dh4hNDYCjY9hJH7sYLIeeuK4W6LKiZ5PS%2FNzygi2f9DTUrdMuFsB0ctqU9b5JFl1fld2zLseuXUOLe3SW1UNbU6ENmRC5R%2FSLv%2FEBAtFcMg9p9AjGipFPdugioM3SYRrrc5zhF%2FpK3MBqboO0%2F5YONpPuKJwL0J058Tmbo%2BA55XvMn%2BKQ%2BUZEGoL%2Bcf6SeAG%2BFLWY4XDyWOUcB&X-Amz-Signature=369dc7fa55d2845b9867b8a872fac8e8f6ccf98cb4c5c0b8267eb04be10d6ed6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKOGMWP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtShtF05eHeUodyXJfjc0Y5%2BllJUYIyNcSBy6hwQeAlAiA0M%2F3%2Bvnwlcg0rnvPpEZ%2FuRuYeAkwE6WIK1wZn%2FnS%2F0SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06vDE%2B4D3FhmfAKAKtwD1UGXhrxIYPKZbpQta9mRfBmHsENEnoMTh%2F5shQbKA1LbvzLR8W2xadgDfoJgBY0i6gxlxy3wzVwlGRspjHif8wFYh2LjVha%2BE0Kq7cGCQJp4SWmhjP6ZYHMQSLO13SRyCNbRf9P18f2NWvR%2BRAQJZx78sZ3AOP4gpu%2B3X0KgsIBryPbB0DujYl68tytUgciTz3wrDTFk5hAC9nckPqrEaM8h7h%2BOpEQb7qA1uytwPSg72%2Ft0U1VPWRgemhcPGl463PmfEdEPmtxFB8ouTnQZzCurB1jeRv1ACO8JAxrt61V%2FqRlbpQ3ToO3Gj3%2F6wyIgRWFtvA0p79IPhZMwebnMjsUGPDkIcvqslPUafLSN62B0TTXEi9K0hMxVbU1ziIZbF3PzaOCIdB0SaEnVzJFWmvOZfOBZF1xuY4F5n7DNRDv7Vn1TJIkh14rpUblQm4MDozoUF3KQiPj13wQe1KGC2ldaewQusKu%2BQ4idhimVc%2BwueI4P46oJUl%2BRMwlL3Chw7jgDXtltxycGY%2BV8oG6pY5wkLTVZORNgmNykuL1ASnNkwKx2bDX1MwmD%2BnjKWutsHtD32C0lRSHofN%2FlbfRKKL8uzgJKGb9cUzfNbolMmrU7lfYpLc5Co3GxatMw6L%2BavgY6pgGydik588UlBVkPQ9dh4hNDYCjY9hJH7sYLIeeuK4W6LKiZ5PS%2FNzygi2f9DTUrdMuFsB0ctqU9b5JFl1fld2zLseuXUOLe3SW1UNbU6ENmRC5R%2FSLv%2FEBAtFcMg9p9AjGipFPdugioM3SYRrrc5zhF%2FpK3MBqboO0%2F5YONpPuKJwL0J058Tmbo%2BA55XvMn%2BKQ%2BUZEGoL%2Bcf6SeAG%2BFLWY4XDyWOUcB&X-Amz-Signature=bfb8221f85247cb82891ad1b355f9e91ac077b1843e710424b4a73e7e95ee8e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKOGMWP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtShtF05eHeUodyXJfjc0Y5%2BllJUYIyNcSBy6hwQeAlAiA0M%2F3%2Bvnwlcg0rnvPpEZ%2FuRuYeAkwE6WIK1wZn%2FnS%2F0SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06vDE%2B4D3FhmfAKAKtwD1UGXhrxIYPKZbpQta9mRfBmHsENEnoMTh%2F5shQbKA1LbvzLR8W2xadgDfoJgBY0i6gxlxy3wzVwlGRspjHif8wFYh2LjVha%2BE0Kq7cGCQJp4SWmhjP6ZYHMQSLO13SRyCNbRf9P18f2NWvR%2BRAQJZx78sZ3AOP4gpu%2B3X0KgsIBryPbB0DujYl68tytUgciTz3wrDTFk5hAC9nckPqrEaM8h7h%2BOpEQb7qA1uytwPSg72%2Ft0U1VPWRgemhcPGl463PmfEdEPmtxFB8ouTnQZzCurB1jeRv1ACO8JAxrt61V%2FqRlbpQ3ToO3Gj3%2F6wyIgRWFtvA0p79IPhZMwebnMjsUGPDkIcvqslPUafLSN62B0TTXEi9K0hMxVbU1ziIZbF3PzaOCIdB0SaEnVzJFWmvOZfOBZF1xuY4F5n7DNRDv7Vn1TJIkh14rpUblQm4MDozoUF3KQiPj13wQe1KGC2ldaewQusKu%2BQ4idhimVc%2BwueI4P46oJUl%2BRMwlL3Chw7jgDXtltxycGY%2BV8oG6pY5wkLTVZORNgmNykuL1ASnNkwKx2bDX1MwmD%2BnjKWutsHtD32C0lRSHofN%2FlbfRKKL8uzgJKGb9cUzfNbolMmrU7lfYpLc5Co3GxatMw6L%2BavgY6pgGydik588UlBVkPQ9dh4hNDYCjY9hJH7sYLIeeuK4W6LKiZ5PS%2FNzygi2f9DTUrdMuFsB0ctqU9b5JFl1fld2zLseuXUOLe3SW1UNbU6ENmRC5R%2FSLv%2FEBAtFcMg9p9AjGipFPdugioM3SYRrrc5zhF%2FpK3MBqboO0%2F5YONpPuKJwL0J058Tmbo%2BA55XvMn%2BKQ%2BUZEGoL%2Bcf6SeAG%2BFLWY4XDyWOUcB&X-Amz-Signature=b4bb011909ae84f9865d7fbcd3e5fc7e07b0f29cadf5d69721bd3f61f38b9a45&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKOGMWP%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtShtF05eHeUodyXJfjc0Y5%2BllJUYIyNcSBy6hwQeAlAiA0M%2F3%2Bvnwlcg0rnvPpEZ%2FuRuYeAkwE6WIK1wZn%2FnS%2F0SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06vDE%2B4D3FhmfAKAKtwD1UGXhrxIYPKZbpQta9mRfBmHsENEnoMTh%2F5shQbKA1LbvzLR8W2xadgDfoJgBY0i6gxlxy3wzVwlGRspjHif8wFYh2LjVha%2BE0Kq7cGCQJp4SWmhjP6ZYHMQSLO13SRyCNbRf9P18f2NWvR%2BRAQJZx78sZ3AOP4gpu%2B3X0KgsIBryPbB0DujYl68tytUgciTz3wrDTFk5hAC9nckPqrEaM8h7h%2BOpEQb7qA1uytwPSg72%2Ft0U1VPWRgemhcPGl463PmfEdEPmtxFB8ouTnQZzCurB1jeRv1ACO8JAxrt61V%2FqRlbpQ3ToO3Gj3%2F6wyIgRWFtvA0p79IPhZMwebnMjsUGPDkIcvqslPUafLSN62B0TTXEi9K0hMxVbU1ziIZbF3PzaOCIdB0SaEnVzJFWmvOZfOBZF1xuY4F5n7DNRDv7Vn1TJIkh14rpUblQm4MDozoUF3KQiPj13wQe1KGC2ldaewQusKu%2BQ4idhimVc%2BwueI4P46oJUl%2BRMwlL3Chw7jgDXtltxycGY%2BV8oG6pY5wkLTVZORNgmNykuL1ASnNkwKx2bDX1MwmD%2BnjKWutsHtD32C0lRSHofN%2FlbfRKKL8uzgJKGb9cUzfNbolMmrU7lfYpLc5Co3GxatMw6L%2BavgY6pgGydik588UlBVkPQ9dh4hNDYCjY9hJH7sYLIeeuK4W6LKiZ5PS%2FNzygi2f9DTUrdMuFsB0ctqU9b5JFl1fld2zLseuXUOLe3SW1UNbU6ENmRC5R%2FSLv%2FEBAtFcMg9p9AjGipFPdugioM3SYRrrc5zhF%2FpK3MBqboO0%2F5YONpPuKJwL0J058Tmbo%2BA55XvMn%2BKQ%2BUZEGoL%2Bcf6SeAG%2BFLWY4XDyWOUcB&X-Amz-Signature=3ddb167804c9baf7ca3d2dc68db2b0f1f0c8bed38c41813ecb7c2bcb8bac89a9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
