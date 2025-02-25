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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAAC6CX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBMqTL0nV%2BlnZTsnJh%2BzWOumqtXGxzFnDH%2BGi%2FJt2cX%2BAiEA17YwxLdnlWTmug0Ca5ZvE7S0r%2FhiHEpRJHud%2BILJntsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNpQwzofJ17Op1A5QyrcA4jrIf9RS5MlhurDeURamMAqAnHKsKeNJJFCsj1AkOGhERryzfh5THZLTa7wIjYEP0VIgIhLOPd9NP0SrKQVhoq8mjjjIUAPhEAPOuA3C6kf6XSDOLClwhkt%2B9XDWXyLGfQUf5QWypZo9UQ3giiLj5iOC1BwOarjzu19AyeX3blAWGIzfEt04U4%2FQZceGCQ6rQKrNDRzHeS%2BptLCy5ZzFIfPPU97MtNufnXplbsxkC2lC81mdt0YF%2FZfDPmxro7C86G9m9fwP0BMd96obO9dRncLW6PnOhQTne5F0rJ%2F%2BvwULh56q%2FVGMfOuvy2hLCrXFT3WA3HENJs%2BKn3qvRfOFI%2BeRGnliW0YzWu95jl%2BFN2dZaKWVPAwH1BAytb3GHO9EKFfLaHD1FA3RIDrv8ywBjEY2X4K7ug%2BxyvtwFlIZ3%2Fzuw7zF7QZ5lU0udjDzZh64JG495Cp8heyJ%2Fzdcfc87JH%2BFEo5moJmH%2FUvswhZPCBH9dza%2BQbcN%2F2EFss9o285liIGxWqArQbcBNefN%2BxhJF1kKq3RSlSBYwqMl33pDjDn5l21So3N23Bh5l2Qj8LrTpR69AxSdm0MTLLp2%2FPrHKQ1zwrPgO%2BHqwM1TIvxl%2F3OicSBNblk5M5V9YZuMKWN%2BL0GOqUBtzYYlYZ2L8zHclXhkPAPbm7VdOXDCuFYLU7JP3y%2FetxUFWJLp0ZJIzVI%2Bfbc%2FJ9N%2F3rXGISZFqEr2LgVF8z0ixvHGfcrM1yC7VYxsrn4VcoBqe4iwdmoAvXV5clqJ2TkbkQ8I6qqLQvvyRtotAwNk5l6On%2FEPAn5uEYWiWbsukBuWBfAAmhRoRSvYTcczkwprWBlGLVnf0sv7tPOjczM2t0yNBau&X-Amz-Signature=6c7603d88b242734f5057f19e909f68646403984d8c00ba6afbfad18faf0f55a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAAC6CX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBMqTL0nV%2BlnZTsnJh%2BzWOumqtXGxzFnDH%2BGi%2FJt2cX%2BAiEA17YwxLdnlWTmug0Ca5ZvE7S0r%2FhiHEpRJHud%2BILJntsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNpQwzofJ17Op1A5QyrcA4jrIf9RS5MlhurDeURamMAqAnHKsKeNJJFCsj1AkOGhERryzfh5THZLTa7wIjYEP0VIgIhLOPd9NP0SrKQVhoq8mjjjIUAPhEAPOuA3C6kf6XSDOLClwhkt%2B9XDWXyLGfQUf5QWypZo9UQ3giiLj5iOC1BwOarjzu19AyeX3blAWGIzfEt04U4%2FQZceGCQ6rQKrNDRzHeS%2BptLCy5ZzFIfPPU97MtNufnXplbsxkC2lC81mdt0YF%2FZfDPmxro7C86G9m9fwP0BMd96obO9dRncLW6PnOhQTne5F0rJ%2F%2BvwULh56q%2FVGMfOuvy2hLCrXFT3WA3HENJs%2BKn3qvRfOFI%2BeRGnliW0YzWu95jl%2BFN2dZaKWVPAwH1BAytb3GHO9EKFfLaHD1FA3RIDrv8ywBjEY2X4K7ug%2BxyvtwFlIZ3%2Fzuw7zF7QZ5lU0udjDzZh64JG495Cp8heyJ%2Fzdcfc87JH%2BFEo5moJmH%2FUvswhZPCBH9dza%2BQbcN%2F2EFss9o285liIGxWqArQbcBNefN%2BxhJF1kKq3RSlSBYwqMl33pDjDn5l21So3N23Bh5l2Qj8LrTpR69AxSdm0MTLLp2%2FPrHKQ1zwrPgO%2BHqwM1TIvxl%2F3OicSBNblk5M5V9YZuMKWN%2BL0GOqUBtzYYlYZ2L8zHclXhkPAPbm7VdOXDCuFYLU7JP3y%2FetxUFWJLp0ZJIzVI%2Bfbc%2FJ9N%2F3rXGISZFqEr2LgVF8z0ixvHGfcrM1yC7VYxsrn4VcoBqe4iwdmoAvXV5clqJ2TkbkQ8I6qqLQvvyRtotAwNk5l6On%2FEPAn5uEYWiWbsukBuWBfAAmhRoRSvYTcczkwprWBlGLVnf0sv7tPOjczM2t0yNBau&X-Amz-Signature=d0334ee0817dc50d5e6314dbc39983ed73efdcc267e43c7beab9a8fca98a5744&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAAC6CX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBMqTL0nV%2BlnZTsnJh%2BzWOumqtXGxzFnDH%2BGi%2FJt2cX%2BAiEA17YwxLdnlWTmug0Ca5ZvE7S0r%2FhiHEpRJHud%2BILJntsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNpQwzofJ17Op1A5QyrcA4jrIf9RS5MlhurDeURamMAqAnHKsKeNJJFCsj1AkOGhERryzfh5THZLTa7wIjYEP0VIgIhLOPd9NP0SrKQVhoq8mjjjIUAPhEAPOuA3C6kf6XSDOLClwhkt%2B9XDWXyLGfQUf5QWypZo9UQ3giiLj5iOC1BwOarjzu19AyeX3blAWGIzfEt04U4%2FQZceGCQ6rQKrNDRzHeS%2BptLCy5ZzFIfPPU97MtNufnXplbsxkC2lC81mdt0YF%2FZfDPmxro7C86G9m9fwP0BMd96obO9dRncLW6PnOhQTne5F0rJ%2F%2BvwULh56q%2FVGMfOuvy2hLCrXFT3WA3HENJs%2BKn3qvRfOFI%2BeRGnliW0YzWu95jl%2BFN2dZaKWVPAwH1BAytb3GHO9EKFfLaHD1FA3RIDrv8ywBjEY2X4K7ug%2BxyvtwFlIZ3%2Fzuw7zF7QZ5lU0udjDzZh64JG495Cp8heyJ%2Fzdcfc87JH%2BFEo5moJmH%2FUvswhZPCBH9dza%2BQbcN%2F2EFss9o285liIGxWqArQbcBNefN%2BxhJF1kKq3RSlSBYwqMl33pDjDn5l21So3N23Bh5l2Qj8LrTpR69AxSdm0MTLLp2%2FPrHKQ1zwrPgO%2BHqwM1TIvxl%2F3OicSBNblk5M5V9YZuMKWN%2BL0GOqUBtzYYlYZ2L8zHclXhkPAPbm7VdOXDCuFYLU7JP3y%2FetxUFWJLp0ZJIzVI%2Bfbc%2FJ9N%2F3rXGISZFqEr2LgVF8z0ixvHGfcrM1yC7VYxsrn4VcoBqe4iwdmoAvXV5clqJ2TkbkQ8I6qqLQvvyRtotAwNk5l6On%2FEPAn5uEYWiWbsukBuWBfAAmhRoRSvYTcczkwprWBlGLVnf0sv7tPOjczM2t0yNBau&X-Amz-Signature=c4ad900acfd5c71b4ba500ab1a853c3a65776218a0a41ac33e8d444c148aa673&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAAC6CX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBMqTL0nV%2BlnZTsnJh%2BzWOumqtXGxzFnDH%2BGi%2FJt2cX%2BAiEA17YwxLdnlWTmug0Ca5ZvE7S0r%2FhiHEpRJHud%2BILJntsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNpQwzofJ17Op1A5QyrcA4jrIf9RS5MlhurDeURamMAqAnHKsKeNJJFCsj1AkOGhERryzfh5THZLTa7wIjYEP0VIgIhLOPd9NP0SrKQVhoq8mjjjIUAPhEAPOuA3C6kf6XSDOLClwhkt%2B9XDWXyLGfQUf5QWypZo9UQ3giiLj5iOC1BwOarjzu19AyeX3blAWGIzfEt04U4%2FQZceGCQ6rQKrNDRzHeS%2BptLCy5ZzFIfPPU97MtNufnXplbsxkC2lC81mdt0YF%2FZfDPmxro7C86G9m9fwP0BMd96obO9dRncLW6PnOhQTne5F0rJ%2F%2BvwULh56q%2FVGMfOuvy2hLCrXFT3WA3HENJs%2BKn3qvRfOFI%2BeRGnliW0YzWu95jl%2BFN2dZaKWVPAwH1BAytb3GHO9EKFfLaHD1FA3RIDrv8ywBjEY2X4K7ug%2BxyvtwFlIZ3%2Fzuw7zF7QZ5lU0udjDzZh64JG495Cp8heyJ%2Fzdcfc87JH%2BFEo5moJmH%2FUvswhZPCBH9dza%2BQbcN%2F2EFss9o285liIGxWqArQbcBNefN%2BxhJF1kKq3RSlSBYwqMl33pDjDn5l21So3N23Bh5l2Qj8LrTpR69AxSdm0MTLLp2%2FPrHKQ1zwrPgO%2BHqwM1TIvxl%2F3OicSBNblk5M5V9YZuMKWN%2BL0GOqUBtzYYlYZ2L8zHclXhkPAPbm7VdOXDCuFYLU7JP3y%2FetxUFWJLp0ZJIzVI%2Bfbc%2FJ9N%2F3rXGISZFqEr2LgVF8z0ixvHGfcrM1yC7VYxsrn4VcoBqe4iwdmoAvXV5clqJ2TkbkQ8I6qqLQvvyRtotAwNk5l6On%2FEPAn5uEYWiWbsukBuWBfAAmhRoRSvYTcczkwprWBlGLVnf0sv7tPOjczM2t0yNBau&X-Amz-Signature=2934de9ab227b74887e29d89995f962ebf31facc4ab1688224eff9734848a4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAAC6CX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBMqTL0nV%2BlnZTsnJh%2BzWOumqtXGxzFnDH%2BGi%2FJt2cX%2BAiEA17YwxLdnlWTmug0Ca5ZvE7S0r%2FhiHEpRJHud%2BILJntsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNpQwzofJ17Op1A5QyrcA4jrIf9RS5MlhurDeURamMAqAnHKsKeNJJFCsj1AkOGhERryzfh5THZLTa7wIjYEP0VIgIhLOPd9NP0SrKQVhoq8mjjjIUAPhEAPOuA3C6kf6XSDOLClwhkt%2B9XDWXyLGfQUf5QWypZo9UQ3giiLj5iOC1BwOarjzu19AyeX3blAWGIzfEt04U4%2FQZceGCQ6rQKrNDRzHeS%2BptLCy5ZzFIfPPU97MtNufnXplbsxkC2lC81mdt0YF%2FZfDPmxro7C86G9m9fwP0BMd96obO9dRncLW6PnOhQTne5F0rJ%2F%2BvwULh56q%2FVGMfOuvy2hLCrXFT3WA3HENJs%2BKn3qvRfOFI%2BeRGnliW0YzWu95jl%2BFN2dZaKWVPAwH1BAytb3GHO9EKFfLaHD1FA3RIDrv8ywBjEY2X4K7ug%2BxyvtwFlIZ3%2Fzuw7zF7QZ5lU0udjDzZh64JG495Cp8heyJ%2Fzdcfc87JH%2BFEo5moJmH%2FUvswhZPCBH9dza%2BQbcN%2F2EFss9o285liIGxWqArQbcBNefN%2BxhJF1kKq3RSlSBYwqMl33pDjDn5l21So3N23Bh5l2Qj8LrTpR69AxSdm0MTLLp2%2FPrHKQ1zwrPgO%2BHqwM1TIvxl%2F3OicSBNblk5M5V9YZuMKWN%2BL0GOqUBtzYYlYZ2L8zHclXhkPAPbm7VdOXDCuFYLU7JP3y%2FetxUFWJLp0ZJIzVI%2Bfbc%2FJ9N%2F3rXGISZFqEr2LgVF8z0ixvHGfcrM1yC7VYxsrn4VcoBqe4iwdmoAvXV5clqJ2TkbkQ8I6qqLQvvyRtotAwNk5l6On%2FEPAn5uEYWiWbsukBuWBfAAmhRoRSvYTcczkwprWBlGLVnf0sv7tPOjczM2t0yNBau&X-Amz-Signature=d556dd028bce07e7e11f35e9f7669265d2949e8514dd822faa535aaaddf7d4e7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAAC6CX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBMqTL0nV%2BlnZTsnJh%2BzWOumqtXGxzFnDH%2BGi%2FJt2cX%2BAiEA17YwxLdnlWTmug0Ca5ZvE7S0r%2FhiHEpRJHud%2BILJntsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNpQwzofJ17Op1A5QyrcA4jrIf9RS5MlhurDeURamMAqAnHKsKeNJJFCsj1AkOGhERryzfh5THZLTa7wIjYEP0VIgIhLOPd9NP0SrKQVhoq8mjjjIUAPhEAPOuA3C6kf6XSDOLClwhkt%2B9XDWXyLGfQUf5QWypZo9UQ3giiLj5iOC1BwOarjzu19AyeX3blAWGIzfEt04U4%2FQZceGCQ6rQKrNDRzHeS%2BptLCy5ZzFIfPPU97MtNufnXplbsxkC2lC81mdt0YF%2FZfDPmxro7C86G9m9fwP0BMd96obO9dRncLW6PnOhQTne5F0rJ%2F%2BvwULh56q%2FVGMfOuvy2hLCrXFT3WA3HENJs%2BKn3qvRfOFI%2BeRGnliW0YzWu95jl%2BFN2dZaKWVPAwH1BAytb3GHO9EKFfLaHD1FA3RIDrv8ywBjEY2X4K7ug%2BxyvtwFlIZ3%2Fzuw7zF7QZ5lU0udjDzZh64JG495Cp8heyJ%2Fzdcfc87JH%2BFEo5moJmH%2FUvswhZPCBH9dza%2BQbcN%2F2EFss9o285liIGxWqArQbcBNefN%2BxhJF1kKq3RSlSBYwqMl33pDjDn5l21So3N23Bh5l2Qj8LrTpR69AxSdm0MTLLp2%2FPrHKQ1zwrPgO%2BHqwM1TIvxl%2F3OicSBNblk5M5V9YZuMKWN%2BL0GOqUBtzYYlYZ2L8zHclXhkPAPbm7VdOXDCuFYLU7JP3y%2FetxUFWJLp0ZJIzVI%2Bfbc%2FJ9N%2F3rXGISZFqEr2LgVF8z0ixvHGfcrM1yC7VYxsrn4VcoBqe4iwdmoAvXV5clqJ2TkbkQ8I6qqLQvvyRtotAwNk5l6On%2FEPAn5uEYWiWbsukBuWBfAAmhRoRSvYTcczkwprWBlGLVnf0sv7tPOjczM2t0yNBau&X-Amz-Signature=e75923d6c282a495f31ef67a807ff709e770196502a30ec78a68b2e9f8a24cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUAAC6CX%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBMqTL0nV%2BlnZTsnJh%2BzWOumqtXGxzFnDH%2BGi%2FJt2cX%2BAiEA17YwxLdnlWTmug0Ca5ZvE7S0r%2FhiHEpRJHud%2BILJntsq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDNpQwzofJ17Op1A5QyrcA4jrIf9RS5MlhurDeURamMAqAnHKsKeNJJFCsj1AkOGhERryzfh5THZLTa7wIjYEP0VIgIhLOPd9NP0SrKQVhoq8mjjjIUAPhEAPOuA3C6kf6XSDOLClwhkt%2B9XDWXyLGfQUf5QWypZo9UQ3giiLj5iOC1BwOarjzu19AyeX3blAWGIzfEt04U4%2FQZceGCQ6rQKrNDRzHeS%2BptLCy5ZzFIfPPU97MtNufnXplbsxkC2lC81mdt0YF%2FZfDPmxro7C86G9m9fwP0BMd96obO9dRncLW6PnOhQTne5F0rJ%2F%2BvwULh56q%2FVGMfOuvy2hLCrXFT3WA3HENJs%2BKn3qvRfOFI%2BeRGnliW0YzWu95jl%2BFN2dZaKWVPAwH1BAytb3GHO9EKFfLaHD1FA3RIDrv8ywBjEY2X4K7ug%2BxyvtwFlIZ3%2Fzuw7zF7QZ5lU0udjDzZh64JG495Cp8heyJ%2Fzdcfc87JH%2BFEo5moJmH%2FUvswhZPCBH9dza%2BQbcN%2F2EFss9o285liIGxWqArQbcBNefN%2BxhJF1kKq3RSlSBYwqMl33pDjDn5l21So3N23Bh5l2Qj8LrTpR69AxSdm0MTLLp2%2FPrHKQ1zwrPgO%2BHqwM1TIvxl%2F3OicSBNblk5M5V9YZuMKWN%2BL0GOqUBtzYYlYZ2L8zHclXhkPAPbm7VdOXDCuFYLU7JP3y%2FetxUFWJLp0ZJIzVI%2Bfbc%2FJ9N%2F3rXGISZFqEr2LgVF8z0ixvHGfcrM1yC7VYxsrn4VcoBqe4iwdmoAvXV5clqJ2TkbkQ8I6qqLQvvyRtotAwNk5l6On%2FEPAn5uEYWiWbsukBuWBfAAmhRoRSvYTcczkwprWBlGLVnf0sv7tPOjczM2t0yNBau&X-Amz-Signature=b20938d176ae3fd6205483bb83217684693f23bee73d3ed615534da69b7c4632&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
