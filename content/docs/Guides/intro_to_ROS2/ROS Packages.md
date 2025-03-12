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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2FU25P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIESDu83%2BzP8%2FPB7Ok6gT%2BY8mw1O5P%2Fy%2B1KYHUWZvfw2mAiEAxCns0cIiRb%2B%2BFBDoeVzG25hcDa1wtSVULzzeuuzyLw0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9fZFNoVxTjckVRNircA085ePKXUoYhJtOKjV1m4UVJdAhbXezUHc%2BfaD4YT6RMAs6bovPVgNfYbf%2BskM304H1TrbkVbxVAW5GRZ9RTGPyoUkLY90G2zprUrHz95CQ8OCTwJpT8UDIo6vYVfWs8cUbv%2FMhS2ciefQgmLP4s%2F9JpgyXL0xyMnafyJ6zHYO%2FgCuEmQ%2BnPTL45FmKxCKcj28uFgvdm5%2F7ralqoE5RbbzasZJKjmGR4dLO5Oh%2FK%2FS79v5RUshvCAmSauRR4JX1BWm3vSRLKjw0NBgt6hniwIhY7RA1w2k99SeZ2Q3ApLW49PVvfXFUkJdYHunxYeUSuHk7api0O6ml6W9dI%2BTg44ZMtX5YMLmsJUqwKfRkSZbchXXkyfJQ1Ladr4vDmZ7pIywuEOj0mnNTUu90U3zxw35Gv2X7ItRp0MXJZdWDx8pqYurVGDmInhGZy1M257qtL45LbtRBGqsn8IKrhbZ5EkpUm5fhIciStzbBcMYmPl6kVawOH82UzvXYcWR7FBKZfIP0cgJZwANeEeIV0LbyWcgn9G%2FeUZY11e7WOnPtctt696dPVBvbnidrOwhg9VN%2BgPQZPKHv0jYPuT%2BOuVg8gyswJ9JVgC3AbosiihYwq6iBhs77ASLcv%2FTkIRSSQMOf%2Bxb4GOqUBJ6MhSvsvqY6D66oNvQEhz4SZmsXo65LrzwwqsBVwulkU54D3%2B%2BsND41P634OjZFAObKxv5n2ydOiPTQ2DXZxjSiIWV85hFmRO%2Batyfb3fobDmVdG9S9XofA%2BcaR8pgh9Kc7oGDVAO1%2F2Ms%2BSJMB0Rd2E%2BY4Q6A22gYKXFk6S7iybe6DTs7DG95j5tHVfDyY0NQVuoz9FeKSFeDLDCipvFvMa%2FHeP&X-Amz-Signature=b467abeed6d1e8101fc66f14cf5e858e0e2dfda013e8a38563df5f7b8aeb74e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2FU25P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIESDu83%2BzP8%2FPB7Ok6gT%2BY8mw1O5P%2Fy%2B1KYHUWZvfw2mAiEAxCns0cIiRb%2B%2BFBDoeVzG25hcDa1wtSVULzzeuuzyLw0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9fZFNoVxTjckVRNircA085ePKXUoYhJtOKjV1m4UVJdAhbXezUHc%2BfaD4YT6RMAs6bovPVgNfYbf%2BskM304H1TrbkVbxVAW5GRZ9RTGPyoUkLY90G2zprUrHz95CQ8OCTwJpT8UDIo6vYVfWs8cUbv%2FMhS2ciefQgmLP4s%2F9JpgyXL0xyMnafyJ6zHYO%2FgCuEmQ%2BnPTL45FmKxCKcj28uFgvdm5%2F7ralqoE5RbbzasZJKjmGR4dLO5Oh%2FK%2FS79v5RUshvCAmSauRR4JX1BWm3vSRLKjw0NBgt6hniwIhY7RA1w2k99SeZ2Q3ApLW49PVvfXFUkJdYHunxYeUSuHk7api0O6ml6W9dI%2BTg44ZMtX5YMLmsJUqwKfRkSZbchXXkyfJQ1Ladr4vDmZ7pIywuEOj0mnNTUu90U3zxw35Gv2X7ItRp0MXJZdWDx8pqYurVGDmInhGZy1M257qtL45LbtRBGqsn8IKrhbZ5EkpUm5fhIciStzbBcMYmPl6kVawOH82UzvXYcWR7FBKZfIP0cgJZwANeEeIV0LbyWcgn9G%2FeUZY11e7WOnPtctt696dPVBvbnidrOwhg9VN%2BgPQZPKHv0jYPuT%2BOuVg8gyswJ9JVgC3AbosiihYwq6iBhs77ASLcv%2FTkIRSSQMOf%2Bxb4GOqUBJ6MhSvsvqY6D66oNvQEhz4SZmsXo65LrzwwqsBVwulkU54D3%2B%2BsND41P634OjZFAObKxv5n2ydOiPTQ2DXZxjSiIWV85hFmRO%2Batyfb3fobDmVdG9S9XofA%2BcaR8pgh9Kc7oGDVAO1%2F2Ms%2BSJMB0Rd2E%2BY4Q6A22gYKXFk6S7iybe6DTs7DG95j5tHVfDyY0NQVuoz9FeKSFeDLDCipvFvMa%2FHeP&X-Amz-Signature=edb48318ad0bb2dd042dac38a6a38311daf44137e2ddd55ae9d9bdd9aaa55036&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2FU25P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIESDu83%2BzP8%2FPB7Ok6gT%2BY8mw1O5P%2Fy%2B1KYHUWZvfw2mAiEAxCns0cIiRb%2B%2BFBDoeVzG25hcDa1wtSVULzzeuuzyLw0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9fZFNoVxTjckVRNircA085ePKXUoYhJtOKjV1m4UVJdAhbXezUHc%2BfaD4YT6RMAs6bovPVgNfYbf%2BskM304H1TrbkVbxVAW5GRZ9RTGPyoUkLY90G2zprUrHz95CQ8OCTwJpT8UDIo6vYVfWs8cUbv%2FMhS2ciefQgmLP4s%2F9JpgyXL0xyMnafyJ6zHYO%2FgCuEmQ%2BnPTL45FmKxCKcj28uFgvdm5%2F7ralqoE5RbbzasZJKjmGR4dLO5Oh%2FK%2FS79v5RUshvCAmSauRR4JX1BWm3vSRLKjw0NBgt6hniwIhY7RA1w2k99SeZ2Q3ApLW49PVvfXFUkJdYHunxYeUSuHk7api0O6ml6W9dI%2BTg44ZMtX5YMLmsJUqwKfRkSZbchXXkyfJQ1Ladr4vDmZ7pIywuEOj0mnNTUu90U3zxw35Gv2X7ItRp0MXJZdWDx8pqYurVGDmInhGZy1M257qtL45LbtRBGqsn8IKrhbZ5EkpUm5fhIciStzbBcMYmPl6kVawOH82UzvXYcWR7FBKZfIP0cgJZwANeEeIV0LbyWcgn9G%2FeUZY11e7WOnPtctt696dPVBvbnidrOwhg9VN%2BgPQZPKHv0jYPuT%2BOuVg8gyswJ9JVgC3AbosiihYwq6iBhs77ASLcv%2FTkIRSSQMOf%2Bxb4GOqUBJ6MhSvsvqY6D66oNvQEhz4SZmsXo65LrzwwqsBVwulkU54D3%2B%2BsND41P634OjZFAObKxv5n2ydOiPTQ2DXZxjSiIWV85hFmRO%2Batyfb3fobDmVdG9S9XofA%2BcaR8pgh9Kc7oGDVAO1%2F2Ms%2BSJMB0Rd2E%2BY4Q6A22gYKXFk6S7iybe6DTs7DG95j5tHVfDyY0NQVuoz9FeKSFeDLDCipvFvMa%2FHeP&X-Amz-Signature=91ddf7c5665affc8a3c23d931ac150c66cd1c6d4614e9856c1d3571fe428b08b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2FU25P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIESDu83%2BzP8%2FPB7Ok6gT%2BY8mw1O5P%2Fy%2B1KYHUWZvfw2mAiEAxCns0cIiRb%2B%2BFBDoeVzG25hcDa1wtSVULzzeuuzyLw0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9fZFNoVxTjckVRNircA085ePKXUoYhJtOKjV1m4UVJdAhbXezUHc%2BfaD4YT6RMAs6bovPVgNfYbf%2BskM304H1TrbkVbxVAW5GRZ9RTGPyoUkLY90G2zprUrHz95CQ8OCTwJpT8UDIo6vYVfWs8cUbv%2FMhS2ciefQgmLP4s%2F9JpgyXL0xyMnafyJ6zHYO%2FgCuEmQ%2BnPTL45FmKxCKcj28uFgvdm5%2F7ralqoE5RbbzasZJKjmGR4dLO5Oh%2FK%2FS79v5RUshvCAmSauRR4JX1BWm3vSRLKjw0NBgt6hniwIhY7RA1w2k99SeZ2Q3ApLW49PVvfXFUkJdYHunxYeUSuHk7api0O6ml6W9dI%2BTg44ZMtX5YMLmsJUqwKfRkSZbchXXkyfJQ1Ladr4vDmZ7pIywuEOj0mnNTUu90U3zxw35Gv2X7ItRp0MXJZdWDx8pqYurVGDmInhGZy1M257qtL45LbtRBGqsn8IKrhbZ5EkpUm5fhIciStzbBcMYmPl6kVawOH82UzvXYcWR7FBKZfIP0cgJZwANeEeIV0LbyWcgn9G%2FeUZY11e7WOnPtctt696dPVBvbnidrOwhg9VN%2BgPQZPKHv0jYPuT%2BOuVg8gyswJ9JVgC3AbosiihYwq6iBhs77ASLcv%2FTkIRSSQMOf%2Bxb4GOqUBJ6MhSvsvqY6D66oNvQEhz4SZmsXo65LrzwwqsBVwulkU54D3%2B%2BsND41P634OjZFAObKxv5n2ydOiPTQ2DXZxjSiIWV85hFmRO%2Batyfb3fobDmVdG9S9XofA%2BcaR8pgh9Kc7oGDVAO1%2F2Ms%2BSJMB0Rd2E%2BY4Q6A22gYKXFk6S7iybe6DTs7DG95j5tHVfDyY0NQVuoz9FeKSFeDLDCipvFvMa%2FHeP&X-Amz-Signature=53eb5d71f21eee0b8dd058392f438430240854903d7e3bdfb1bb321500ef109f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2FU25P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIESDu83%2BzP8%2FPB7Ok6gT%2BY8mw1O5P%2Fy%2B1KYHUWZvfw2mAiEAxCns0cIiRb%2B%2BFBDoeVzG25hcDa1wtSVULzzeuuzyLw0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9fZFNoVxTjckVRNircA085ePKXUoYhJtOKjV1m4UVJdAhbXezUHc%2BfaD4YT6RMAs6bovPVgNfYbf%2BskM304H1TrbkVbxVAW5GRZ9RTGPyoUkLY90G2zprUrHz95CQ8OCTwJpT8UDIo6vYVfWs8cUbv%2FMhS2ciefQgmLP4s%2F9JpgyXL0xyMnafyJ6zHYO%2FgCuEmQ%2BnPTL45FmKxCKcj28uFgvdm5%2F7ralqoE5RbbzasZJKjmGR4dLO5Oh%2FK%2FS79v5RUshvCAmSauRR4JX1BWm3vSRLKjw0NBgt6hniwIhY7RA1w2k99SeZ2Q3ApLW49PVvfXFUkJdYHunxYeUSuHk7api0O6ml6W9dI%2BTg44ZMtX5YMLmsJUqwKfRkSZbchXXkyfJQ1Ladr4vDmZ7pIywuEOj0mnNTUu90U3zxw35Gv2X7ItRp0MXJZdWDx8pqYurVGDmInhGZy1M257qtL45LbtRBGqsn8IKrhbZ5EkpUm5fhIciStzbBcMYmPl6kVawOH82UzvXYcWR7FBKZfIP0cgJZwANeEeIV0LbyWcgn9G%2FeUZY11e7WOnPtctt696dPVBvbnidrOwhg9VN%2BgPQZPKHv0jYPuT%2BOuVg8gyswJ9JVgC3AbosiihYwq6iBhs77ASLcv%2FTkIRSSQMOf%2Bxb4GOqUBJ6MhSvsvqY6D66oNvQEhz4SZmsXo65LrzwwqsBVwulkU54D3%2B%2BsND41P634OjZFAObKxv5n2ydOiPTQ2DXZxjSiIWV85hFmRO%2Batyfb3fobDmVdG9S9XofA%2BcaR8pgh9Kc7oGDVAO1%2F2Ms%2BSJMB0Rd2E%2BY4Q6A22gYKXFk6S7iybe6DTs7DG95j5tHVfDyY0NQVuoz9FeKSFeDLDCipvFvMa%2FHeP&X-Amz-Signature=2985d8aa089eaff64fa3b7c94284f1684361f98f3d101a46e9a023ef6395b948&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2FU25P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIESDu83%2BzP8%2FPB7Ok6gT%2BY8mw1O5P%2Fy%2B1KYHUWZvfw2mAiEAxCns0cIiRb%2B%2BFBDoeVzG25hcDa1wtSVULzzeuuzyLw0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9fZFNoVxTjckVRNircA085ePKXUoYhJtOKjV1m4UVJdAhbXezUHc%2BfaD4YT6RMAs6bovPVgNfYbf%2BskM304H1TrbkVbxVAW5GRZ9RTGPyoUkLY90G2zprUrHz95CQ8OCTwJpT8UDIo6vYVfWs8cUbv%2FMhS2ciefQgmLP4s%2F9JpgyXL0xyMnafyJ6zHYO%2FgCuEmQ%2BnPTL45FmKxCKcj28uFgvdm5%2F7ralqoE5RbbzasZJKjmGR4dLO5Oh%2FK%2FS79v5RUshvCAmSauRR4JX1BWm3vSRLKjw0NBgt6hniwIhY7RA1w2k99SeZ2Q3ApLW49PVvfXFUkJdYHunxYeUSuHk7api0O6ml6W9dI%2BTg44ZMtX5YMLmsJUqwKfRkSZbchXXkyfJQ1Ladr4vDmZ7pIywuEOj0mnNTUu90U3zxw35Gv2X7ItRp0MXJZdWDx8pqYurVGDmInhGZy1M257qtL45LbtRBGqsn8IKrhbZ5EkpUm5fhIciStzbBcMYmPl6kVawOH82UzvXYcWR7FBKZfIP0cgJZwANeEeIV0LbyWcgn9G%2FeUZY11e7WOnPtctt696dPVBvbnidrOwhg9VN%2BgPQZPKHv0jYPuT%2BOuVg8gyswJ9JVgC3AbosiihYwq6iBhs77ASLcv%2FTkIRSSQMOf%2Bxb4GOqUBJ6MhSvsvqY6D66oNvQEhz4SZmsXo65LrzwwqsBVwulkU54D3%2B%2BsND41P634OjZFAObKxv5n2ydOiPTQ2DXZxjSiIWV85hFmRO%2Batyfb3fobDmVdG9S9XofA%2BcaR8pgh9Kc7oGDVAO1%2F2Ms%2BSJMB0Rd2E%2BY4Q6A22gYKXFk6S7iybe6DTs7DG95j5tHVfDyY0NQVuoz9FeKSFeDLDCipvFvMa%2FHeP&X-Amz-Signature=00212ff36cbd2dc53d804b5769d45d432b8e13c4069e1b45e24265f35ff09cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2FU25P%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIESDu83%2BzP8%2FPB7Ok6gT%2BY8mw1O5P%2Fy%2B1KYHUWZvfw2mAiEAxCns0cIiRb%2B%2BFBDoeVzG25hcDa1wtSVULzzeuuzyLw0qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9fZFNoVxTjckVRNircA085ePKXUoYhJtOKjV1m4UVJdAhbXezUHc%2BfaD4YT6RMAs6bovPVgNfYbf%2BskM304H1TrbkVbxVAW5GRZ9RTGPyoUkLY90G2zprUrHz95CQ8OCTwJpT8UDIo6vYVfWs8cUbv%2FMhS2ciefQgmLP4s%2F9JpgyXL0xyMnafyJ6zHYO%2FgCuEmQ%2BnPTL45FmKxCKcj28uFgvdm5%2F7ralqoE5RbbzasZJKjmGR4dLO5Oh%2FK%2FS79v5RUshvCAmSauRR4JX1BWm3vSRLKjw0NBgt6hniwIhY7RA1w2k99SeZ2Q3ApLW49PVvfXFUkJdYHunxYeUSuHk7api0O6ml6W9dI%2BTg44ZMtX5YMLmsJUqwKfRkSZbchXXkyfJQ1Ladr4vDmZ7pIywuEOj0mnNTUu90U3zxw35Gv2X7ItRp0MXJZdWDx8pqYurVGDmInhGZy1M257qtL45LbtRBGqsn8IKrhbZ5EkpUm5fhIciStzbBcMYmPl6kVawOH82UzvXYcWR7FBKZfIP0cgJZwANeEeIV0LbyWcgn9G%2FeUZY11e7WOnPtctt696dPVBvbnidrOwhg9VN%2BgPQZPKHv0jYPuT%2BOuVg8gyswJ9JVgC3AbosiihYwq6iBhs77ASLcv%2FTkIRSSQMOf%2Bxb4GOqUBJ6MhSvsvqY6D66oNvQEhz4SZmsXo65LrzwwqsBVwulkU54D3%2B%2BsND41P634OjZFAObKxv5n2ydOiPTQ2DXZxjSiIWV85hFmRO%2Batyfb3fobDmVdG9S9XofA%2BcaR8pgh9Kc7oGDVAO1%2F2Ms%2BSJMB0Rd2E%2BY4Q6A22gYKXFk6S7iybe6DTs7DG95j5tHVfDyY0NQVuoz9FeKSFeDLDCipvFvMa%2FHeP&X-Amz-Signature=e6946def8924de101abf63368aa863cc510df2e86e880a9fbc973e37a74d148d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
