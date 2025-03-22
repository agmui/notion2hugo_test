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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGWTBCC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDIZp64kem52yFYmq6gexRDPlZgXdP%2BETmJFxN8KuTz4wIgWrbLD0vt8e2yq401NbWn9A0q3XO3FyGh4llXq4ThNHAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFchYOcthBQSinUo4SrcA%2BHMeakN%2B%2BbrtSny5SCgN86TlIPwSLfdlLDLnn7hYlrqH2eHUyXcCpcu8zVbG88v2%2Bz1zCKRTGp3f6q4SCLLjr0gfDIMnLFk4LdLhdNsMjixDamQpLH%2BmTAdHKqSr8IHXRM8p5AiGsTINJaJlDN1L4MmbkE3PR5c77IcmhazRQo7MXjuoQ0ApKINmAaqsTWGRE349gKBaJOdZFbWb5nuD0ZIZhNUZbcekMrrxYDnkI0vyuHc3pz%2FWKHjVrGbZT6wMEpE2HCoAgPIW1x4z73maNZ5%2B1ZJb%2F6LD4kys2Ch8ajpM%2FxpM0OLJtaungUu4dECtwiFHhs28D6VUZEmEV5%2BP8Vr8Z%2Bqj91mh6YqB%2Fzf1Zwvx2oNB6NxOJvn0BaIwzvj7Xupw9Dll91sN3%2BdDtb1mfSMQVVoz6Ej8MDcdfFzhxMthaGn2dsiEBtjRwrM1gjYaMskuEh5Yg2LaP0XvPBjyiek6zejcZpBa5M02kSXGNtmGooG6UCZgniOFmLd7DXNRAg45pqMH4EytWihDBK4m3ArJ5xMSyqewFN466FvTzLTG7U%2BMMldJPHtvNcmrx0LpiwVMCO5j8wI4STE83%2F8%2FnPkkJHxSbcU%2BLamHqPUBD8TvKIg2wcmyL5j1jS8MM2r%2Bb4GOqUBAAQXHRy7P8NgSAwVzUXuiBEVsUu7B3%2BBFegrDounOioNT4ybsAoJMaLs6D0Ye6BYE9w6%2BQ8aRB5rP3qg3R33IvU4kSPR6U42qbkHEck2Qkyjuv1ODhqo%2FMdYA68egrG9HuSIQVwXe1G%2BJTCwjaf6GzXO8DOosZOaLQE%2FEmCj0wa3AAyFzlXFaPs7dAR290b70v7JmzRKIgcAfJoO5iBmao5oTvXJ&X-Amz-Signature=a0f7d205893a3be273f0d77cbc58cefc5fee51895ca16be4ac65df29c3c6da5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGWTBCC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDIZp64kem52yFYmq6gexRDPlZgXdP%2BETmJFxN8KuTz4wIgWrbLD0vt8e2yq401NbWn9A0q3XO3FyGh4llXq4ThNHAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFchYOcthBQSinUo4SrcA%2BHMeakN%2B%2BbrtSny5SCgN86TlIPwSLfdlLDLnn7hYlrqH2eHUyXcCpcu8zVbG88v2%2Bz1zCKRTGp3f6q4SCLLjr0gfDIMnLFk4LdLhdNsMjixDamQpLH%2BmTAdHKqSr8IHXRM8p5AiGsTINJaJlDN1L4MmbkE3PR5c77IcmhazRQo7MXjuoQ0ApKINmAaqsTWGRE349gKBaJOdZFbWb5nuD0ZIZhNUZbcekMrrxYDnkI0vyuHc3pz%2FWKHjVrGbZT6wMEpE2HCoAgPIW1x4z73maNZ5%2B1ZJb%2F6LD4kys2Ch8ajpM%2FxpM0OLJtaungUu4dECtwiFHhs28D6VUZEmEV5%2BP8Vr8Z%2Bqj91mh6YqB%2Fzf1Zwvx2oNB6NxOJvn0BaIwzvj7Xupw9Dll91sN3%2BdDtb1mfSMQVVoz6Ej8MDcdfFzhxMthaGn2dsiEBtjRwrM1gjYaMskuEh5Yg2LaP0XvPBjyiek6zejcZpBa5M02kSXGNtmGooG6UCZgniOFmLd7DXNRAg45pqMH4EytWihDBK4m3ArJ5xMSyqewFN466FvTzLTG7U%2BMMldJPHtvNcmrx0LpiwVMCO5j8wI4STE83%2F8%2FnPkkJHxSbcU%2BLamHqPUBD8TvKIg2wcmyL5j1jS8MM2r%2Bb4GOqUBAAQXHRy7P8NgSAwVzUXuiBEVsUu7B3%2BBFegrDounOioNT4ybsAoJMaLs6D0Ye6BYE9w6%2BQ8aRB5rP3qg3R33IvU4kSPR6U42qbkHEck2Qkyjuv1ODhqo%2FMdYA68egrG9HuSIQVwXe1G%2BJTCwjaf6GzXO8DOosZOaLQE%2FEmCj0wa3AAyFzlXFaPs7dAR290b70v7JmzRKIgcAfJoO5iBmao5oTvXJ&X-Amz-Signature=cfe1a5fa7d8dcdcbafba81538dfe3c4557ca22c1ef7b5f87cfae79bd172fc195&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGWTBCC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDIZp64kem52yFYmq6gexRDPlZgXdP%2BETmJFxN8KuTz4wIgWrbLD0vt8e2yq401NbWn9A0q3XO3FyGh4llXq4ThNHAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFchYOcthBQSinUo4SrcA%2BHMeakN%2B%2BbrtSny5SCgN86TlIPwSLfdlLDLnn7hYlrqH2eHUyXcCpcu8zVbG88v2%2Bz1zCKRTGp3f6q4SCLLjr0gfDIMnLFk4LdLhdNsMjixDamQpLH%2BmTAdHKqSr8IHXRM8p5AiGsTINJaJlDN1L4MmbkE3PR5c77IcmhazRQo7MXjuoQ0ApKINmAaqsTWGRE349gKBaJOdZFbWb5nuD0ZIZhNUZbcekMrrxYDnkI0vyuHc3pz%2FWKHjVrGbZT6wMEpE2HCoAgPIW1x4z73maNZ5%2B1ZJb%2F6LD4kys2Ch8ajpM%2FxpM0OLJtaungUu4dECtwiFHhs28D6VUZEmEV5%2BP8Vr8Z%2Bqj91mh6YqB%2Fzf1Zwvx2oNB6NxOJvn0BaIwzvj7Xupw9Dll91sN3%2BdDtb1mfSMQVVoz6Ej8MDcdfFzhxMthaGn2dsiEBtjRwrM1gjYaMskuEh5Yg2LaP0XvPBjyiek6zejcZpBa5M02kSXGNtmGooG6UCZgniOFmLd7DXNRAg45pqMH4EytWihDBK4m3ArJ5xMSyqewFN466FvTzLTG7U%2BMMldJPHtvNcmrx0LpiwVMCO5j8wI4STE83%2F8%2FnPkkJHxSbcU%2BLamHqPUBD8TvKIg2wcmyL5j1jS8MM2r%2Bb4GOqUBAAQXHRy7P8NgSAwVzUXuiBEVsUu7B3%2BBFegrDounOioNT4ybsAoJMaLs6D0Ye6BYE9w6%2BQ8aRB5rP3qg3R33IvU4kSPR6U42qbkHEck2Qkyjuv1ODhqo%2FMdYA68egrG9HuSIQVwXe1G%2BJTCwjaf6GzXO8DOosZOaLQE%2FEmCj0wa3AAyFzlXFaPs7dAR290b70v7JmzRKIgcAfJoO5iBmao5oTvXJ&X-Amz-Signature=5961c84db959fe0c92db21a8c5f7ae232ea09b8af7a3854224c3585f00a53b44&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGWTBCC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDIZp64kem52yFYmq6gexRDPlZgXdP%2BETmJFxN8KuTz4wIgWrbLD0vt8e2yq401NbWn9A0q3XO3FyGh4llXq4ThNHAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFchYOcthBQSinUo4SrcA%2BHMeakN%2B%2BbrtSny5SCgN86TlIPwSLfdlLDLnn7hYlrqH2eHUyXcCpcu8zVbG88v2%2Bz1zCKRTGp3f6q4SCLLjr0gfDIMnLFk4LdLhdNsMjixDamQpLH%2BmTAdHKqSr8IHXRM8p5AiGsTINJaJlDN1L4MmbkE3PR5c77IcmhazRQo7MXjuoQ0ApKINmAaqsTWGRE349gKBaJOdZFbWb5nuD0ZIZhNUZbcekMrrxYDnkI0vyuHc3pz%2FWKHjVrGbZT6wMEpE2HCoAgPIW1x4z73maNZ5%2B1ZJb%2F6LD4kys2Ch8ajpM%2FxpM0OLJtaungUu4dECtwiFHhs28D6VUZEmEV5%2BP8Vr8Z%2Bqj91mh6YqB%2Fzf1Zwvx2oNB6NxOJvn0BaIwzvj7Xupw9Dll91sN3%2BdDtb1mfSMQVVoz6Ej8MDcdfFzhxMthaGn2dsiEBtjRwrM1gjYaMskuEh5Yg2LaP0XvPBjyiek6zejcZpBa5M02kSXGNtmGooG6UCZgniOFmLd7DXNRAg45pqMH4EytWihDBK4m3ArJ5xMSyqewFN466FvTzLTG7U%2BMMldJPHtvNcmrx0LpiwVMCO5j8wI4STE83%2F8%2FnPkkJHxSbcU%2BLamHqPUBD8TvKIg2wcmyL5j1jS8MM2r%2Bb4GOqUBAAQXHRy7P8NgSAwVzUXuiBEVsUu7B3%2BBFegrDounOioNT4ybsAoJMaLs6D0Ye6BYE9w6%2BQ8aRB5rP3qg3R33IvU4kSPR6U42qbkHEck2Qkyjuv1ODhqo%2FMdYA68egrG9HuSIQVwXe1G%2BJTCwjaf6GzXO8DOosZOaLQE%2FEmCj0wa3AAyFzlXFaPs7dAR290b70v7JmzRKIgcAfJoO5iBmao5oTvXJ&X-Amz-Signature=ea016c3827113f1b4dc6452cda9c3be647e1e1cc094eb6fb6fc9da7b6fe83df1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGWTBCC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDIZp64kem52yFYmq6gexRDPlZgXdP%2BETmJFxN8KuTz4wIgWrbLD0vt8e2yq401NbWn9A0q3XO3FyGh4llXq4ThNHAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFchYOcthBQSinUo4SrcA%2BHMeakN%2B%2BbrtSny5SCgN86TlIPwSLfdlLDLnn7hYlrqH2eHUyXcCpcu8zVbG88v2%2Bz1zCKRTGp3f6q4SCLLjr0gfDIMnLFk4LdLhdNsMjixDamQpLH%2BmTAdHKqSr8IHXRM8p5AiGsTINJaJlDN1L4MmbkE3PR5c77IcmhazRQo7MXjuoQ0ApKINmAaqsTWGRE349gKBaJOdZFbWb5nuD0ZIZhNUZbcekMrrxYDnkI0vyuHc3pz%2FWKHjVrGbZT6wMEpE2HCoAgPIW1x4z73maNZ5%2B1ZJb%2F6LD4kys2Ch8ajpM%2FxpM0OLJtaungUu4dECtwiFHhs28D6VUZEmEV5%2BP8Vr8Z%2Bqj91mh6YqB%2Fzf1Zwvx2oNB6NxOJvn0BaIwzvj7Xupw9Dll91sN3%2BdDtb1mfSMQVVoz6Ej8MDcdfFzhxMthaGn2dsiEBtjRwrM1gjYaMskuEh5Yg2LaP0XvPBjyiek6zejcZpBa5M02kSXGNtmGooG6UCZgniOFmLd7DXNRAg45pqMH4EytWihDBK4m3ArJ5xMSyqewFN466FvTzLTG7U%2BMMldJPHtvNcmrx0LpiwVMCO5j8wI4STE83%2F8%2FnPkkJHxSbcU%2BLamHqPUBD8TvKIg2wcmyL5j1jS8MM2r%2Bb4GOqUBAAQXHRy7P8NgSAwVzUXuiBEVsUu7B3%2BBFegrDounOioNT4ybsAoJMaLs6D0Ye6BYE9w6%2BQ8aRB5rP3qg3R33IvU4kSPR6U42qbkHEck2Qkyjuv1ODhqo%2FMdYA68egrG9HuSIQVwXe1G%2BJTCwjaf6GzXO8DOosZOaLQE%2FEmCj0wa3AAyFzlXFaPs7dAR290b70v7JmzRKIgcAfJoO5iBmao5oTvXJ&X-Amz-Signature=a62cd0717671851412de629799215e09b6738338020431d41f1e275e2e1b56e2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGWTBCC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDIZp64kem52yFYmq6gexRDPlZgXdP%2BETmJFxN8KuTz4wIgWrbLD0vt8e2yq401NbWn9A0q3XO3FyGh4llXq4ThNHAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFchYOcthBQSinUo4SrcA%2BHMeakN%2B%2BbrtSny5SCgN86TlIPwSLfdlLDLnn7hYlrqH2eHUyXcCpcu8zVbG88v2%2Bz1zCKRTGp3f6q4SCLLjr0gfDIMnLFk4LdLhdNsMjixDamQpLH%2BmTAdHKqSr8IHXRM8p5AiGsTINJaJlDN1L4MmbkE3PR5c77IcmhazRQo7MXjuoQ0ApKINmAaqsTWGRE349gKBaJOdZFbWb5nuD0ZIZhNUZbcekMrrxYDnkI0vyuHc3pz%2FWKHjVrGbZT6wMEpE2HCoAgPIW1x4z73maNZ5%2B1ZJb%2F6LD4kys2Ch8ajpM%2FxpM0OLJtaungUu4dECtwiFHhs28D6VUZEmEV5%2BP8Vr8Z%2Bqj91mh6YqB%2Fzf1Zwvx2oNB6NxOJvn0BaIwzvj7Xupw9Dll91sN3%2BdDtb1mfSMQVVoz6Ej8MDcdfFzhxMthaGn2dsiEBtjRwrM1gjYaMskuEh5Yg2LaP0XvPBjyiek6zejcZpBa5M02kSXGNtmGooG6UCZgniOFmLd7DXNRAg45pqMH4EytWihDBK4m3ArJ5xMSyqewFN466FvTzLTG7U%2BMMldJPHtvNcmrx0LpiwVMCO5j8wI4STE83%2F8%2FnPkkJHxSbcU%2BLamHqPUBD8TvKIg2wcmyL5j1jS8MM2r%2Bb4GOqUBAAQXHRy7P8NgSAwVzUXuiBEVsUu7B3%2BBFegrDounOioNT4ybsAoJMaLs6D0Ye6BYE9w6%2BQ8aRB5rP3qg3R33IvU4kSPR6U42qbkHEck2Qkyjuv1ODhqo%2FMdYA68egrG9HuSIQVwXe1G%2BJTCwjaf6GzXO8DOosZOaLQE%2FEmCj0wa3AAyFzlXFaPs7dAR290b70v7JmzRKIgcAfJoO5iBmao5oTvXJ&X-Amz-Signature=72af7833b5396199d6c2305a220cedf9b2c4f220c73c05fe1812296ee0340cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGWTBCC%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDIZp64kem52yFYmq6gexRDPlZgXdP%2BETmJFxN8KuTz4wIgWrbLD0vt8e2yq401NbWn9A0q3XO3FyGh4llXq4ThNHAqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFchYOcthBQSinUo4SrcA%2BHMeakN%2B%2BbrtSny5SCgN86TlIPwSLfdlLDLnn7hYlrqH2eHUyXcCpcu8zVbG88v2%2Bz1zCKRTGp3f6q4SCLLjr0gfDIMnLFk4LdLhdNsMjixDamQpLH%2BmTAdHKqSr8IHXRM8p5AiGsTINJaJlDN1L4MmbkE3PR5c77IcmhazRQo7MXjuoQ0ApKINmAaqsTWGRE349gKBaJOdZFbWb5nuD0ZIZhNUZbcekMrrxYDnkI0vyuHc3pz%2FWKHjVrGbZT6wMEpE2HCoAgPIW1x4z73maNZ5%2B1ZJb%2F6LD4kys2Ch8ajpM%2FxpM0OLJtaungUu4dECtwiFHhs28D6VUZEmEV5%2BP8Vr8Z%2Bqj91mh6YqB%2Fzf1Zwvx2oNB6NxOJvn0BaIwzvj7Xupw9Dll91sN3%2BdDtb1mfSMQVVoz6Ej8MDcdfFzhxMthaGn2dsiEBtjRwrM1gjYaMskuEh5Yg2LaP0XvPBjyiek6zejcZpBa5M02kSXGNtmGooG6UCZgniOFmLd7DXNRAg45pqMH4EytWihDBK4m3ArJ5xMSyqewFN466FvTzLTG7U%2BMMldJPHtvNcmrx0LpiwVMCO5j8wI4STE83%2F8%2FnPkkJHxSbcU%2BLamHqPUBD8TvKIg2wcmyL5j1jS8MM2r%2Bb4GOqUBAAQXHRy7P8NgSAwVzUXuiBEVsUu7B3%2BBFegrDounOioNT4ybsAoJMaLs6D0Ye6BYE9w6%2BQ8aRB5rP3qg3R33IvU4kSPR6U42qbkHEck2Qkyjuv1ODhqo%2FMdYA68egrG9HuSIQVwXe1G%2BJTCwjaf6GzXO8DOosZOaLQE%2FEmCj0wa3AAyFzlXFaPs7dAR290b70v7JmzRKIgcAfJoO5iBmao5oTvXJ&X-Amz-Signature=fa7059381a14e41aba13e649b47a1e231a7f8e3f2d44cb7c6f8bb12824f5e918&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
