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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMFUZ2L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwbaDRLRwhxrJ9bhifqr03LsnfxzhvllQW%2BsjLi3k1WAIgVBlfLhLbjh6wv5gyP%2Ba1k4zsH1ZRmnS4C4OJ4Y2ZMMcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEiUeEB0vgcPLYf5CrcAyRBoy3rMYITJDIVX3khvwqlrbCtq%2Fk1OLW00sJJ%2BVVCe3JLOIlS%2BgcNd7BKSrYP6krvK2UR7JxLc9f%2F750UCODRV%2FEgH4RnclAX9MkkDkzSNoe2rMVnnQyMlb2PL79cIQEJiEsIvbD9D7J90rvYmFo%2FaZ96yPGTFWp951Kav597c7VbVLpqbxyNOEny29VKuTIxdUS%2BTNxyvC2spGx3QuydtWkbvAtwFYscOaMjuALIpPb0TpG%2BgmXvOKfTIf%2BrknL3bLpSOk%2FAFnIfSaMT0MKXKPn2xttf8JdMtTBeH45qou2Oi6kJHns0LodVrUfxDIzVqn3iybu%2B8pGsuTyqwjButRY6lnw82nSQXHM1C6N9C89Re0hYupPaA7dQSMloJwQZ7UUhhWxFJo7TfC2bBVWIEectqH%2FEau4OVeLOsn4TWNHWeAmew76cCwwGo7tq54ukIZ6CrKf1afB7wlUN1wX5Mw1utZyBhxF4TgpVXw7oY8r54u30GjvK6arugRIl2oLlxFYAMraEzX589fIqK6pI5uYGrSzc0Xh6aIvTiH8fL0QIj5c%2FifaD%2BMSNFVbHoa6EfZuKE0bZwaG%2FbfQp2CkS5cKyqyr7%2B8F4sUFKF%2BZICa8KoKXw5DO%2Fm4FeMIez3sEGOqUBGGXbrqvtbFmUmU3qWirSzZwZZVl7ak9S1OENvcr5eQ4B%2FghbxCoT%2Fvs84Mey4mEjxrJix9O7DLLFMOqYsh%2FrsKaRjCT4eUFD9XfrUYHvg4qNXMiURj1HqzszUxjQDHFkOVAuxY0dr4I416RlMnexO4QTLtmTbr14mQiR8%2Be%2BKRu4iiEMLacSg4IH%2Fv11K1ozwzvRBf4Sw9GLJyONH6XaRR5jl%2FZW&X-Amz-Signature=0b69577d403750d9c3083f1bec01d31a40a4abd49e2e7144a5c6675e398a46e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMFUZ2L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwbaDRLRwhxrJ9bhifqr03LsnfxzhvllQW%2BsjLi3k1WAIgVBlfLhLbjh6wv5gyP%2Ba1k4zsH1ZRmnS4C4OJ4Y2ZMMcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEiUeEB0vgcPLYf5CrcAyRBoy3rMYITJDIVX3khvwqlrbCtq%2Fk1OLW00sJJ%2BVVCe3JLOIlS%2BgcNd7BKSrYP6krvK2UR7JxLc9f%2F750UCODRV%2FEgH4RnclAX9MkkDkzSNoe2rMVnnQyMlb2PL79cIQEJiEsIvbD9D7J90rvYmFo%2FaZ96yPGTFWp951Kav597c7VbVLpqbxyNOEny29VKuTIxdUS%2BTNxyvC2spGx3QuydtWkbvAtwFYscOaMjuALIpPb0TpG%2BgmXvOKfTIf%2BrknL3bLpSOk%2FAFnIfSaMT0MKXKPn2xttf8JdMtTBeH45qou2Oi6kJHns0LodVrUfxDIzVqn3iybu%2B8pGsuTyqwjButRY6lnw82nSQXHM1C6N9C89Re0hYupPaA7dQSMloJwQZ7UUhhWxFJo7TfC2bBVWIEectqH%2FEau4OVeLOsn4TWNHWeAmew76cCwwGo7tq54ukIZ6CrKf1afB7wlUN1wX5Mw1utZyBhxF4TgpVXw7oY8r54u30GjvK6arugRIl2oLlxFYAMraEzX589fIqK6pI5uYGrSzc0Xh6aIvTiH8fL0QIj5c%2FifaD%2BMSNFVbHoa6EfZuKE0bZwaG%2FbfQp2CkS5cKyqyr7%2B8F4sUFKF%2BZICa8KoKXw5DO%2Fm4FeMIez3sEGOqUBGGXbrqvtbFmUmU3qWirSzZwZZVl7ak9S1OENvcr5eQ4B%2FghbxCoT%2Fvs84Mey4mEjxrJix9O7DLLFMOqYsh%2FrsKaRjCT4eUFD9XfrUYHvg4qNXMiURj1HqzszUxjQDHFkOVAuxY0dr4I416RlMnexO4QTLtmTbr14mQiR8%2Be%2BKRu4iiEMLacSg4IH%2Fv11K1ozwzvRBf4Sw9GLJyONH6XaRR5jl%2FZW&X-Amz-Signature=1b2e72115b804573ef628bdc3d6f549ca6b0cfb1aa893e508c48ecfe21db9259&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMFUZ2L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwbaDRLRwhxrJ9bhifqr03LsnfxzhvllQW%2BsjLi3k1WAIgVBlfLhLbjh6wv5gyP%2Ba1k4zsH1ZRmnS4C4OJ4Y2ZMMcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEiUeEB0vgcPLYf5CrcAyRBoy3rMYITJDIVX3khvwqlrbCtq%2Fk1OLW00sJJ%2BVVCe3JLOIlS%2BgcNd7BKSrYP6krvK2UR7JxLc9f%2F750UCODRV%2FEgH4RnclAX9MkkDkzSNoe2rMVnnQyMlb2PL79cIQEJiEsIvbD9D7J90rvYmFo%2FaZ96yPGTFWp951Kav597c7VbVLpqbxyNOEny29VKuTIxdUS%2BTNxyvC2spGx3QuydtWkbvAtwFYscOaMjuALIpPb0TpG%2BgmXvOKfTIf%2BrknL3bLpSOk%2FAFnIfSaMT0MKXKPn2xttf8JdMtTBeH45qou2Oi6kJHns0LodVrUfxDIzVqn3iybu%2B8pGsuTyqwjButRY6lnw82nSQXHM1C6N9C89Re0hYupPaA7dQSMloJwQZ7UUhhWxFJo7TfC2bBVWIEectqH%2FEau4OVeLOsn4TWNHWeAmew76cCwwGo7tq54ukIZ6CrKf1afB7wlUN1wX5Mw1utZyBhxF4TgpVXw7oY8r54u30GjvK6arugRIl2oLlxFYAMraEzX589fIqK6pI5uYGrSzc0Xh6aIvTiH8fL0QIj5c%2FifaD%2BMSNFVbHoa6EfZuKE0bZwaG%2FbfQp2CkS5cKyqyr7%2B8F4sUFKF%2BZICa8KoKXw5DO%2Fm4FeMIez3sEGOqUBGGXbrqvtbFmUmU3qWirSzZwZZVl7ak9S1OENvcr5eQ4B%2FghbxCoT%2Fvs84Mey4mEjxrJix9O7DLLFMOqYsh%2FrsKaRjCT4eUFD9XfrUYHvg4qNXMiURj1HqzszUxjQDHFkOVAuxY0dr4I416RlMnexO4QTLtmTbr14mQiR8%2Be%2BKRu4iiEMLacSg4IH%2Fv11K1ozwzvRBf4Sw9GLJyONH6XaRR5jl%2FZW&X-Amz-Signature=5c7fb30f2b1c8637b5e8a6a49b44782427645058d14483154aa8a3f3c1b124cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMFUZ2L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwbaDRLRwhxrJ9bhifqr03LsnfxzhvllQW%2BsjLi3k1WAIgVBlfLhLbjh6wv5gyP%2Ba1k4zsH1ZRmnS4C4OJ4Y2ZMMcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEiUeEB0vgcPLYf5CrcAyRBoy3rMYITJDIVX3khvwqlrbCtq%2Fk1OLW00sJJ%2BVVCe3JLOIlS%2BgcNd7BKSrYP6krvK2UR7JxLc9f%2F750UCODRV%2FEgH4RnclAX9MkkDkzSNoe2rMVnnQyMlb2PL79cIQEJiEsIvbD9D7J90rvYmFo%2FaZ96yPGTFWp951Kav597c7VbVLpqbxyNOEny29VKuTIxdUS%2BTNxyvC2spGx3QuydtWkbvAtwFYscOaMjuALIpPb0TpG%2BgmXvOKfTIf%2BrknL3bLpSOk%2FAFnIfSaMT0MKXKPn2xttf8JdMtTBeH45qou2Oi6kJHns0LodVrUfxDIzVqn3iybu%2B8pGsuTyqwjButRY6lnw82nSQXHM1C6N9C89Re0hYupPaA7dQSMloJwQZ7UUhhWxFJo7TfC2bBVWIEectqH%2FEau4OVeLOsn4TWNHWeAmew76cCwwGo7tq54ukIZ6CrKf1afB7wlUN1wX5Mw1utZyBhxF4TgpVXw7oY8r54u30GjvK6arugRIl2oLlxFYAMraEzX589fIqK6pI5uYGrSzc0Xh6aIvTiH8fL0QIj5c%2FifaD%2BMSNFVbHoa6EfZuKE0bZwaG%2FbfQp2CkS5cKyqyr7%2B8F4sUFKF%2BZICa8KoKXw5DO%2Fm4FeMIez3sEGOqUBGGXbrqvtbFmUmU3qWirSzZwZZVl7ak9S1OENvcr5eQ4B%2FghbxCoT%2Fvs84Mey4mEjxrJix9O7DLLFMOqYsh%2FrsKaRjCT4eUFD9XfrUYHvg4qNXMiURj1HqzszUxjQDHFkOVAuxY0dr4I416RlMnexO4QTLtmTbr14mQiR8%2Be%2BKRu4iiEMLacSg4IH%2Fv11K1ozwzvRBf4Sw9GLJyONH6XaRR5jl%2FZW&X-Amz-Signature=344b3944f2463dd9fd01606a6bc3c90e35630bdd399e57c10be79f975c7fe711&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMFUZ2L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwbaDRLRwhxrJ9bhifqr03LsnfxzhvllQW%2BsjLi3k1WAIgVBlfLhLbjh6wv5gyP%2Ba1k4zsH1ZRmnS4C4OJ4Y2ZMMcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEiUeEB0vgcPLYf5CrcAyRBoy3rMYITJDIVX3khvwqlrbCtq%2Fk1OLW00sJJ%2BVVCe3JLOIlS%2BgcNd7BKSrYP6krvK2UR7JxLc9f%2F750UCODRV%2FEgH4RnclAX9MkkDkzSNoe2rMVnnQyMlb2PL79cIQEJiEsIvbD9D7J90rvYmFo%2FaZ96yPGTFWp951Kav597c7VbVLpqbxyNOEny29VKuTIxdUS%2BTNxyvC2spGx3QuydtWkbvAtwFYscOaMjuALIpPb0TpG%2BgmXvOKfTIf%2BrknL3bLpSOk%2FAFnIfSaMT0MKXKPn2xttf8JdMtTBeH45qou2Oi6kJHns0LodVrUfxDIzVqn3iybu%2B8pGsuTyqwjButRY6lnw82nSQXHM1C6N9C89Re0hYupPaA7dQSMloJwQZ7UUhhWxFJo7TfC2bBVWIEectqH%2FEau4OVeLOsn4TWNHWeAmew76cCwwGo7tq54ukIZ6CrKf1afB7wlUN1wX5Mw1utZyBhxF4TgpVXw7oY8r54u30GjvK6arugRIl2oLlxFYAMraEzX589fIqK6pI5uYGrSzc0Xh6aIvTiH8fL0QIj5c%2FifaD%2BMSNFVbHoa6EfZuKE0bZwaG%2FbfQp2CkS5cKyqyr7%2B8F4sUFKF%2BZICa8KoKXw5DO%2Fm4FeMIez3sEGOqUBGGXbrqvtbFmUmU3qWirSzZwZZVl7ak9S1OENvcr5eQ4B%2FghbxCoT%2Fvs84Mey4mEjxrJix9O7DLLFMOqYsh%2FrsKaRjCT4eUFD9XfrUYHvg4qNXMiURj1HqzszUxjQDHFkOVAuxY0dr4I416RlMnexO4QTLtmTbr14mQiR8%2Be%2BKRu4iiEMLacSg4IH%2Fv11K1ozwzvRBf4Sw9GLJyONH6XaRR5jl%2FZW&X-Amz-Signature=3212f1e6666bcd6099f0ba91a6e09ca1718447d93029782bd78c5db3b0a2f720&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMFUZ2L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwbaDRLRwhxrJ9bhifqr03LsnfxzhvllQW%2BsjLi3k1WAIgVBlfLhLbjh6wv5gyP%2Ba1k4zsH1ZRmnS4C4OJ4Y2ZMMcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEiUeEB0vgcPLYf5CrcAyRBoy3rMYITJDIVX3khvwqlrbCtq%2Fk1OLW00sJJ%2BVVCe3JLOIlS%2BgcNd7BKSrYP6krvK2UR7JxLc9f%2F750UCODRV%2FEgH4RnclAX9MkkDkzSNoe2rMVnnQyMlb2PL79cIQEJiEsIvbD9D7J90rvYmFo%2FaZ96yPGTFWp951Kav597c7VbVLpqbxyNOEny29VKuTIxdUS%2BTNxyvC2spGx3QuydtWkbvAtwFYscOaMjuALIpPb0TpG%2BgmXvOKfTIf%2BrknL3bLpSOk%2FAFnIfSaMT0MKXKPn2xttf8JdMtTBeH45qou2Oi6kJHns0LodVrUfxDIzVqn3iybu%2B8pGsuTyqwjButRY6lnw82nSQXHM1C6N9C89Re0hYupPaA7dQSMloJwQZ7UUhhWxFJo7TfC2bBVWIEectqH%2FEau4OVeLOsn4TWNHWeAmew76cCwwGo7tq54ukIZ6CrKf1afB7wlUN1wX5Mw1utZyBhxF4TgpVXw7oY8r54u30GjvK6arugRIl2oLlxFYAMraEzX589fIqK6pI5uYGrSzc0Xh6aIvTiH8fL0QIj5c%2FifaD%2BMSNFVbHoa6EfZuKE0bZwaG%2FbfQp2CkS5cKyqyr7%2B8F4sUFKF%2BZICa8KoKXw5DO%2Fm4FeMIez3sEGOqUBGGXbrqvtbFmUmU3qWirSzZwZZVl7ak9S1OENvcr5eQ4B%2FghbxCoT%2Fvs84Mey4mEjxrJix9O7DLLFMOqYsh%2FrsKaRjCT4eUFD9XfrUYHvg4qNXMiURj1HqzszUxjQDHFkOVAuxY0dr4I416RlMnexO4QTLtmTbr14mQiR8%2Be%2BKRu4iiEMLacSg4IH%2Fv11K1ozwzvRBf4Sw9GLJyONH6XaRR5jl%2FZW&X-Amz-Signature=53aa7ed3c96b718dd90c79159c11ea4835dc0f76b1486466fd34484382bbdc70&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMFUZ2L%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwbaDRLRwhxrJ9bhifqr03LsnfxzhvllQW%2BsjLi3k1WAIgVBlfLhLbjh6wv5gyP%2Ba1k4zsH1ZRmnS4C4OJ4Y2ZMMcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEiUeEB0vgcPLYf5CrcAyRBoy3rMYITJDIVX3khvwqlrbCtq%2Fk1OLW00sJJ%2BVVCe3JLOIlS%2BgcNd7BKSrYP6krvK2UR7JxLc9f%2F750UCODRV%2FEgH4RnclAX9MkkDkzSNoe2rMVnnQyMlb2PL79cIQEJiEsIvbD9D7J90rvYmFo%2FaZ96yPGTFWp951Kav597c7VbVLpqbxyNOEny29VKuTIxdUS%2BTNxyvC2spGx3QuydtWkbvAtwFYscOaMjuALIpPb0TpG%2BgmXvOKfTIf%2BrknL3bLpSOk%2FAFnIfSaMT0MKXKPn2xttf8JdMtTBeH45qou2Oi6kJHns0LodVrUfxDIzVqn3iybu%2B8pGsuTyqwjButRY6lnw82nSQXHM1C6N9C89Re0hYupPaA7dQSMloJwQZ7UUhhWxFJo7TfC2bBVWIEectqH%2FEau4OVeLOsn4TWNHWeAmew76cCwwGo7tq54ukIZ6CrKf1afB7wlUN1wX5Mw1utZyBhxF4TgpVXw7oY8r54u30GjvK6arugRIl2oLlxFYAMraEzX589fIqK6pI5uYGrSzc0Xh6aIvTiH8fL0QIj5c%2FifaD%2BMSNFVbHoa6EfZuKE0bZwaG%2FbfQp2CkS5cKyqyr7%2B8F4sUFKF%2BZICa8KoKXw5DO%2Fm4FeMIez3sEGOqUBGGXbrqvtbFmUmU3qWirSzZwZZVl7ak9S1OENvcr5eQ4B%2FghbxCoT%2Fvs84Mey4mEjxrJix9O7DLLFMOqYsh%2FrsKaRjCT4eUFD9XfrUYHvg4qNXMiURj1HqzszUxjQDHFkOVAuxY0dr4I416RlMnexO4QTLtmTbr14mQiR8%2Be%2BKRu4iiEMLacSg4IH%2Fv11K1ozwzvRBf4Sw9GLJyONH6XaRR5jl%2FZW&X-Amz-Signature=f4e733b175de50613b31f90d74cbc72ae669fade6b5064264e5b5a0fd06756d4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
