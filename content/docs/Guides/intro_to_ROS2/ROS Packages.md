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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHGDRDH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtnQCkyWEHTkqQ0%2FlTgG8DGGck2ATSAoUOZGFz1VgfFAIhAPwSP4joI7k3kZRkgSPNGwisJJVcR%2Bb%2Bd9xMTpTIoPqkKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPOiA9CvYZVQQ5ce4q3AO6UfL5E2HJ5f85FCRJajPKpeftbDkx5RUJ4LSJyNkOocUihLToiZl7AShxPytK%2Bs9ZY6oIzv0svq9vraP%2FuO2A9oSRbGIIdmaKh9anuc7h0fAvFLigW2Dr9bPz%2FmggXb9PEKRShjktSbkEWFxZrnuU3W7VMCV0kE0YgnlzGzAbJJWh%2F79uJNNEZ3OLlAcd9pImS1waIeb80cf1SkOUjIubvCvRTaETQF1h%2BBg4e5bQyguCR22ggwAj86cbPoUd%2BaFXehaPpbpJ0IY7lCIcBVwjmsuyZnAv8w915hMS%2FoOJZ5OsM248nMfRMXQRjjWVJDf8hs4Gg6CT2xYcD5%2BvFK%2BBXBaccmLjihqefkOEZ%2F9tGopl31J1BmzFXJGRAGXXEInePIqTKWrg7sWPzsjzPPt5KYHL%2Fdz52kfOJ6y0oInU%2BctNRPPa73quzDg1NK6dz4YJPSre9DQOtMMVyEi%2B4Os0nYjRBJ3Ksf%2BeTRq9teOpugytA5EjlbGz1cNw6nDdAXdhepeEmYrgLTZOVaRR%2Fd3Rac4n1rKJXltEinn9nyvzg1VIbNVVbd6FT4pZoioOAMQvgqR1w2fySCvtAUkN3Tjuq4Jk0kFqBZUcVcFwKFRwMREYokb33Swh0CTvDTCPx%2FbABjqkAcoxgAdJ4aVzjqBkK8pU0w8%2B3u3XuzoQFFKDy%2B%2B%2B1Lm14dG9JJ09k%2BnXxWevDH4rEe54RyXb4I85GWoUGa75LlI2anOsssIdWBcppWQKmMgkllhD5UU8wi0tBH%2BCt%2FjRIKtz2jyaPtQ8K5V8N6Uehd6dGpnPACOPq2k9fFygl6M8HiGndmnml5g0bOFjYK25lOMdLEhHkphkdCtN9NE7P746mBTj&X-Amz-Signature=f9c3224027c9c33fd8cc07921521a844339ff1b9fe7f524161df75db3c7987dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHGDRDH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtnQCkyWEHTkqQ0%2FlTgG8DGGck2ATSAoUOZGFz1VgfFAIhAPwSP4joI7k3kZRkgSPNGwisJJVcR%2Bb%2Bd9xMTpTIoPqkKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPOiA9CvYZVQQ5ce4q3AO6UfL5E2HJ5f85FCRJajPKpeftbDkx5RUJ4LSJyNkOocUihLToiZl7AShxPytK%2Bs9ZY6oIzv0svq9vraP%2FuO2A9oSRbGIIdmaKh9anuc7h0fAvFLigW2Dr9bPz%2FmggXb9PEKRShjktSbkEWFxZrnuU3W7VMCV0kE0YgnlzGzAbJJWh%2F79uJNNEZ3OLlAcd9pImS1waIeb80cf1SkOUjIubvCvRTaETQF1h%2BBg4e5bQyguCR22ggwAj86cbPoUd%2BaFXehaPpbpJ0IY7lCIcBVwjmsuyZnAv8w915hMS%2FoOJZ5OsM248nMfRMXQRjjWVJDf8hs4Gg6CT2xYcD5%2BvFK%2BBXBaccmLjihqefkOEZ%2F9tGopl31J1BmzFXJGRAGXXEInePIqTKWrg7sWPzsjzPPt5KYHL%2Fdz52kfOJ6y0oInU%2BctNRPPa73quzDg1NK6dz4YJPSre9DQOtMMVyEi%2B4Os0nYjRBJ3Ksf%2BeTRq9teOpugytA5EjlbGz1cNw6nDdAXdhepeEmYrgLTZOVaRR%2Fd3Rac4n1rKJXltEinn9nyvzg1VIbNVVbd6FT4pZoioOAMQvgqR1w2fySCvtAUkN3Tjuq4Jk0kFqBZUcVcFwKFRwMREYokb33Swh0CTvDTCPx%2FbABjqkAcoxgAdJ4aVzjqBkK8pU0w8%2B3u3XuzoQFFKDy%2B%2B%2B1Lm14dG9JJ09k%2BnXxWevDH4rEe54RyXb4I85GWoUGa75LlI2anOsssIdWBcppWQKmMgkllhD5UU8wi0tBH%2BCt%2FjRIKtz2jyaPtQ8K5V8N6Uehd6dGpnPACOPq2k9fFygl6M8HiGndmnml5g0bOFjYK25lOMdLEhHkphkdCtN9NE7P746mBTj&X-Amz-Signature=370e85e917c38bb3a7dfb3d50364b0f28ce5c76931ea881b7ae47351c4854f12&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHGDRDH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtnQCkyWEHTkqQ0%2FlTgG8DGGck2ATSAoUOZGFz1VgfFAIhAPwSP4joI7k3kZRkgSPNGwisJJVcR%2Bb%2Bd9xMTpTIoPqkKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPOiA9CvYZVQQ5ce4q3AO6UfL5E2HJ5f85FCRJajPKpeftbDkx5RUJ4LSJyNkOocUihLToiZl7AShxPytK%2Bs9ZY6oIzv0svq9vraP%2FuO2A9oSRbGIIdmaKh9anuc7h0fAvFLigW2Dr9bPz%2FmggXb9PEKRShjktSbkEWFxZrnuU3W7VMCV0kE0YgnlzGzAbJJWh%2F79uJNNEZ3OLlAcd9pImS1waIeb80cf1SkOUjIubvCvRTaETQF1h%2BBg4e5bQyguCR22ggwAj86cbPoUd%2BaFXehaPpbpJ0IY7lCIcBVwjmsuyZnAv8w915hMS%2FoOJZ5OsM248nMfRMXQRjjWVJDf8hs4Gg6CT2xYcD5%2BvFK%2BBXBaccmLjihqefkOEZ%2F9tGopl31J1BmzFXJGRAGXXEInePIqTKWrg7sWPzsjzPPt5KYHL%2Fdz52kfOJ6y0oInU%2BctNRPPa73quzDg1NK6dz4YJPSre9DQOtMMVyEi%2B4Os0nYjRBJ3Ksf%2BeTRq9teOpugytA5EjlbGz1cNw6nDdAXdhepeEmYrgLTZOVaRR%2Fd3Rac4n1rKJXltEinn9nyvzg1VIbNVVbd6FT4pZoioOAMQvgqR1w2fySCvtAUkN3Tjuq4Jk0kFqBZUcVcFwKFRwMREYokb33Swh0CTvDTCPx%2FbABjqkAcoxgAdJ4aVzjqBkK8pU0w8%2B3u3XuzoQFFKDy%2B%2B%2B1Lm14dG9JJ09k%2BnXxWevDH4rEe54RyXb4I85GWoUGa75LlI2anOsssIdWBcppWQKmMgkllhD5UU8wi0tBH%2BCt%2FjRIKtz2jyaPtQ8K5V8N6Uehd6dGpnPACOPq2k9fFygl6M8HiGndmnml5g0bOFjYK25lOMdLEhHkphkdCtN9NE7P746mBTj&X-Amz-Signature=c411090d48aecb3f17f57ada9ad41634a0f268adbe42ac5db2785a6661ec4850&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHGDRDH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtnQCkyWEHTkqQ0%2FlTgG8DGGck2ATSAoUOZGFz1VgfFAIhAPwSP4joI7k3kZRkgSPNGwisJJVcR%2Bb%2Bd9xMTpTIoPqkKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPOiA9CvYZVQQ5ce4q3AO6UfL5E2HJ5f85FCRJajPKpeftbDkx5RUJ4LSJyNkOocUihLToiZl7AShxPytK%2Bs9ZY6oIzv0svq9vraP%2FuO2A9oSRbGIIdmaKh9anuc7h0fAvFLigW2Dr9bPz%2FmggXb9PEKRShjktSbkEWFxZrnuU3W7VMCV0kE0YgnlzGzAbJJWh%2F79uJNNEZ3OLlAcd9pImS1waIeb80cf1SkOUjIubvCvRTaETQF1h%2BBg4e5bQyguCR22ggwAj86cbPoUd%2BaFXehaPpbpJ0IY7lCIcBVwjmsuyZnAv8w915hMS%2FoOJZ5OsM248nMfRMXQRjjWVJDf8hs4Gg6CT2xYcD5%2BvFK%2BBXBaccmLjihqefkOEZ%2F9tGopl31J1BmzFXJGRAGXXEInePIqTKWrg7sWPzsjzPPt5KYHL%2Fdz52kfOJ6y0oInU%2BctNRPPa73quzDg1NK6dz4YJPSre9DQOtMMVyEi%2B4Os0nYjRBJ3Ksf%2BeTRq9teOpugytA5EjlbGz1cNw6nDdAXdhepeEmYrgLTZOVaRR%2Fd3Rac4n1rKJXltEinn9nyvzg1VIbNVVbd6FT4pZoioOAMQvgqR1w2fySCvtAUkN3Tjuq4Jk0kFqBZUcVcFwKFRwMREYokb33Swh0CTvDTCPx%2FbABjqkAcoxgAdJ4aVzjqBkK8pU0w8%2B3u3XuzoQFFKDy%2B%2B%2B1Lm14dG9JJ09k%2BnXxWevDH4rEe54RyXb4I85GWoUGa75LlI2anOsssIdWBcppWQKmMgkllhD5UU8wi0tBH%2BCt%2FjRIKtz2jyaPtQ8K5V8N6Uehd6dGpnPACOPq2k9fFygl6M8HiGndmnml5g0bOFjYK25lOMdLEhHkphkdCtN9NE7P746mBTj&X-Amz-Signature=7733978341a41005cbc6f8285dd44afd05cf9784654332b5d990875aec1784b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHGDRDH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtnQCkyWEHTkqQ0%2FlTgG8DGGck2ATSAoUOZGFz1VgfFAIhAPwSP4joI7k3kZRkgSPNGwisJJVcR%2Bb%2Bd9xMTpTIoPqkKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPOiA9CvYZVQQ5ce4q3AO6UfL5E2HJ5f85FCRJajPKpeftbDkx5RUJ4LSJyNkOocUihLToiZl7AShxPytK%2Bs9ZY6oIzv0svq9vraP%2FuO2A9oSRbGIIdmaKh9anuc7h0fAvFLigW2Dr9bPz%2FmggXb9PEKRShjktSbkEWFxZrnuU3W7VMCV0kE0YgnlzGzAbJJWh%2F79uJNNEZ3OLlAcd9pImS1waIeb80cf1SkOUjIubvCvRTaETQF1h%2BBg4e5bQyguCR22ggwAj86cbPoUd%2BaFXehaPpbpJ0IY7lCIcBVwjmsuyZnAv8w915hMS%2FoOJZ5OsM248nMfRMXQRjjWVJDf8hs4Gg6CT2xYcD5%2BvFK%2BBXBaccmLjihqefkOEZ%2F9tGopl31J1BmzFXJGRAGXXEInePIqTKWrg7sWPzsjzPPt5KYHL%2Fdz52kfOJ6y0oInU%2BctNRPPa73quzDg1NK6dz4YJPSre9DQOtMMVyEi%2B4Os0nYjRBJ3Ksf%2BeTRq9teOpugytA5EjlbGz1cNw6nDdAXdhepeEmYrgLTZOVaRR%2Fd3Rac4n1rKJXltEinn9nyvzg1VIbNVVbd6FT4pZoioOAMQvgqR1w2fySCvtAUkN3Tjuq4Jk0kFqBZUcVcFwKFRwMREYokb33Swh0CTvDTCPx%2FbABjqkAcoxgAdJ4aVzjqBkK8pU0w8%2B3u3XuzoQFFKDy%2B%2B%2B1Lm14dG9JJ09k%2BnXxWevDH4rEe54RyXb4I85GWoUGa75LlI2anOsssIdWBcppWQKmMgkllhD5UU8wi0tBH%2BCt%2FjRIKtz2jyaPtQ8K5V8N6Uehd6dGpnPACOPq2k9fFygl6M8HiGndmnml5g0bOFjYK25lOMdLEhHkphkdCtN9NE7P746mBTj&X-Amz-Signature=8862953c3b566f575e23d1d6316606b3777e3d8c4b5328b1ab5d0b38215f5718&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHGDRDH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtnQCkyWEHTkqQ0%2FlTgG8DGGck2ATSAoUOZGFz1VgfFAIhAPwSP4joI7k3kZRkgSPNGwisJJVcR%2Bb%2Bd9xMTpTIoPqkKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPOiA9CvYZVQQ5ce4q3AO6UfL5E2HJ5f85FCRJajPKpeftbDkx5RUJ4LSJyNkOocUihLToiZl7AShxPytK%2Bs9ZY6oIzv0svq9vraP%2FuO2A9oSRbGIIdmaKh9anuc7h0fAvFLigW2Dr9bPz%2FmggXb9PEKRShjktSbkEWFxZrnuU3W7VMCV0kE0YgnlzGzAbJJWh%2F79uJNNEZ3OLlAcd9pImS1waIeb80cf1SkOUjIubvCvRTaETQF1h%2BBg4e5bQyguCR22ggwAj86cbPoUd%2BaFXehaPpbpJ0IY7lCIcBVwjmsuyZnAv8w915hMS%2FoOJZ5OsM248nMfRMXQRjjWVJDf8hs4Gg6CT2xYcD5%2BvFK%2BBXBaccmLjihqefkOEZ%2F9tGopl31J1BmzFXJGRAGXXEInePIqTKWrg7sWPzsjzPPt5KYHL%2Fdz52kfOJ6y0oInU%2BctNRPPa73quzDg1NK6dz4YJPSre9DQOtMMVyEi%2B4Os0nYjRBJ3Ksf%2BeTRq9teOpugytA5EjlbGz1cNw6nDdAXdhepeEmYrgLTZOVaRR%2Fd3Rac4n1rKJXltEinn9nyvzg1VIbNVVbd6FT4pZoioOAMQvgqR1w2fySCvtAUkN3Tjuq4Jk0kFqBZUcVcFwKFRwMREYokb33Swh0CTvDTCPx%2FbABjqkAcoxgAdJ4aVzjqBkK8pU0w8%2B3u3XuzoQFFKDy%2B%2B%2B1Lm14dG9JJ09k%2BnXxWevDH4rEe54RyXb4I85GWoUGa75LlI2anOsssIdWBcppWQKmMgkllhD5UU8wi0tBH%2BCt%2FjRIKtz2jyaPtQ8K5V8N6Uehd6dGpnPACOPq2k9fFygl6M8HiGndmnml5g0bOFjYK25lOMdLEhHkphkdCtN9NE7P746mBTj&X-Amz-Signature=ef4779baedcc1481ed256b600659d568159bb16b749a6bd822302e40d5a90d3c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAHGDRDH%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtnQCkyWEHTkqQ0%2FlTgG8DGGck2ATSAoUOZGFz1VgfFAIhAPwSP4joI7k3kZRkgSPNGwisJJVcR%2Bb%2Bd9xMTpTIoPqkKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPOiA9CvYZVQQ5ce4q3AO6UfL5E2HJ5f85FCRJajPKpeftbDkx5RUJ4LSJyNkOocUihLToiZl7AShxPytK%2Bs9ZY6oIzv0svq9vraP%2FuO2A9oSRbGIIdmaKh9anuc7h0fAvFLigW2Dr9bPz%2FmggXb9PEKRShjktSbkEWFxZrnuU3W7VMCV0kE0YgnlzGzAbJJWh%2F79uJNNEZ3OLlAcd9pImS1waIeb80cf1SkOUjIubvCvRTaETQF1h%2BBg4e5bQyguCR22ggwAj86cbPoUd%2BaFXehaPpbpJ0IY7lCIcBVwjmsuyZnAv8w915hMS%2FoOJZ5OsM248nMfRMXQRjjWVJDf8hs4Gg6CT2xYcD5%2BvFK%2BBXBaccmLjihqefkOEZ%2F9tGopl31J1BmzFXJGRAGXXEInePIqTKWrg7sWPzsjzPPt5KYHL%2Fdz52kfOJ6y0oInU%2BctNRPPa73quzDg1NK6dz4YJPSre9DQOtMMVyEi%2B4Os0nYjRBJ3Ksf%2BeTRq9teOpugytA5EjlbGz1cNw6nDdAXdhepeEmYrgLTZOVaRR%2Fd3Rac4n1rKJXltEinn9nyvzg1VIbNVVbd6FT4pZoioOAMQvgqR1w2fySCvtAUkN3Tjuq4Jk0kFqBZUcVcFwKFRwMREYokb33Swh0CTvDTCPx%2FbABjqkAcoxgAdJ4aVzjqBkK8pU0w8%2B3u3XuzoQFFKDy%2B%2B%2B1Lm14dG9JJ09k%2BnXxWevDH4rEe54RyXb4I85GWoUGa75LlI2anOsssIdWBcppWQKmMgkllhD5UU8wi0tBH%2BCt%2FjRIKtz2jyaPtQ8K5V8N6Uehd6dGpnPACOPq2k9fFygl6M8HiGndmnml5g0bOFjYK25lOMdLEhHkphkdCtN9NE7P746mBTj&X-Amz-Signature=61d2e67a55a612cc6a657e0636c7171e26893cf6d385f5b5e208d52cbd005785&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
