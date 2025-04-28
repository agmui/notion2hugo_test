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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAYHA3P%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5APLpWKgC7MzrcL5d11TFRidItodl0ru%2BjIQlJrVpoAiBgFA6gdQL%2BTqFaTZnKOMtoPZyk%2B0YSoLQuXBdabmMkmyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9Y79bT9UOeuxlhIKtwDPO4MY3PrViPOr7oPkXrtOSKBlsiSUbrOQjnpkay1cbJyE7UcQQfMoVZuTbQW3JY4NK2GvophcPuPap2Ca50BjgDeL%2FuS4E8CPbZVnXPlDOc1HVVYgzsVBg4gB8jgMmC3jtdfL1gmGo9Sm2NYCRvhBUCZYYVyRkQpkKnTo9GToZ3n10QcQsEk8lUfXx78IkvkNRsXtUA4I%2F57e2Lj9IoqYwhtB3bEweLGnFS1DeyovzclmsmH68Ub4TUJd9juOIkFgy8CRfl2jk5wdaxUv1qiGlQmzuCAE0JX7vjB7Pz0KAexssEnsFbtLU5DCQRf09zezjOW1JTrzNgNpzeW473EgZEVq1HSN1VFj1X%2F1u056%2FzaIFnVjV80aMAmgZX7XMirikbAjtbgH68Zs8WWpIldutSvhrNx%2BQDBfWG88FxKG5Gt6O%2F1%2FPAZl83qRwh9sQMKdM%2Bs59XdENBjadk%2F2kTzoHoseSVGY8YvWskfyFex%2F9J0b5a06lq6uhmm31YNzWtClSJCvVs%2BEYHKIwHofUkKDDTcptKLTmomQkAAMOOX6LAxfVSj6f6jsRO8tN%2FGsus%2FBsxwKAhbXPEZu%2BC%2FTy8wLsS59kFTbFP%2FGC%2Fx0IMbN8RU%2FMJAlXwvqq3pekMwr4rAwAY6pgH7572qjW3oLK16c%2By4%2BlVE6AurdmtVA9MUQbLC8CANpfHRcP3noOdplsCY9qdfNkkO6o5GL4W%2FdGgE%2BFzTieCUnRUZKU3CLQOaz4OVt8aab6Cp6HttIhjsz5xOyHLfO4gVvnWkHqwBsU34yHoa2dsy8q5Pj0o5f2XudD6GeZ8wT0XSExPMCfV3nxD8j93Dv2yP2wQkhCuz5HSz%2FzK3MAy32sTp1Nxz&X-Amz-Signature=8c6fd5b4b275cbc877e5d2e93f49974c3dcfb0a25998b906369209f5cd00353d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAYHA3P%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5APLpWKgC7MzrcL5d11TFRidItodl0ru%2BjIQlJrVpoAiBgFA6gdQL%2BTqFaTZnKOMtoPZyk%2B0YSoLQuXBdabmMkmyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9Y79bT9UOeuxlhIKtwDPO4MY3PrViPOr7oPkXrtOSKBlsiSUbrOQjnpkay1cbJyE7UcQQfMoVZuTbQW3JY4NK2GvophcPuPap2Ca50BjgDeL%2FuS4E8CPbZVnXPlDOc1HVVYgzsVBg4gB8jgMmC3jtdfL1gmGo9Sm2NYCRvhBUCZYYVyRkQpkKnTo9GToZ3n10QcQsEk8lUfXx78IkvkNRsXtUA4I%2F57e2Lj9IoqYwhtB3bEweLGnFS1DeyovzclmsmH68Ub4TUJd9juOIkFgy8CRfl2jk5wdaxUv1qiGlQmzuCAE0JX7vjB7Pz0KAexssEnsFbtLU5DCQRf09zezjOW1JTrzNgNpzeW473EgZEVq1HSN1VFj1X%2F1u056%2FzaIFnVjV80aMAmgZX7XMirikbAjtbgH68Zs8WWpIldutSvhrNx%2BQDBfWG88FxKG5Gt6O%2F1%2FPAZl83qRwh9sQMKdM%2Bs59XdENBjadk%2F2kTzoHoseSVGY8YvWskfyFex%2F9J0b5a06lq6uhmm31YNzWtClSJCvVs%2BEYHKIwHofUkKDDTcptKLTmomQkAAMOOX6LAxfVSj6f6jsRO8tN%2FGsus%2FBsxwKAhbXPEZu%2BC%2FTy8wLsS59kFTbFP%2FGC%2Fx0IMbN8RU%2FMJAlXwvqq3pekMwr4rAwAY6pgH7572qjW3oLK16c%2By4%2BlVE6AurdmtVA9MUQbLC8CANpfHRcP3noOdplsCY9qdfNkkO6o5GL4W%2FdGgE%2BFzTieCUnRUZKU3CLQOaz4OVt8aab6Cp6HttIhjsz5xOyHLfO4gVvnWkHqwBsU34yHoa2dsy8q5Pj0o5f2XudD6GeZ8wT0XSExPMCfV3nxD8j93Dv2yP2wQkhCuz5HSz%2FzK3MAy32sTp1Nxz&X-Amz-Signature=1f9ba66efb5052b4bd3dd3fa04877cf0e5059af2c90376ac3da5bfa45ca13dbd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAYHA3P%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5APLpWKgC7MzrcL5d11TFRidItodl0ru%2BjIQlJrVpoAiBgFA6gdQL%2BTqFaTZnKOMtoPZyk%2B0YSoLQuXBdabmMkmyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9Y79bT9UOeuxlhIKtwDPO4MY3PrViPOr7oPkXrtOSKBlsiSUbrOQjnpkay1cbJyE7UcQQfMoVZuTbQW3JY4NK2GvophcPuPap2Ca50BjgDeL%2FuS4E8CPbZVnXPlDOc1HVVYgzsVBg4gB8jgMmC3jtdfL1gmGo9Sm2NYCRvhBUCZYYVyRkQpkKnTo9GToZ3n10QcQsEk8lUfXx78IkvkNRsXtUA4I%2F57e2Lj9IoqYwhtB3bEweLGnFS1DeyovzclmsmH68Ub4TUJd9juOIkFgy8CRfl2jk5wdaxUv1qiGlQmzuCAE0JX7vjB7Pz0KAexssEnsFbtLU5DCQRf09zezjOW1JTrzNgNpzeW473EgZEVq1HSN1VFj1X%2F1u056%2FzaIFnVjV80aMAmgZX7XMirikbAjtbgH68Zs8WWpIldutSvhrNx%2BQDBfWG88FxKG5Gt6O%2F1%2FPAZl83qRwh9sQMKdM%2Bs59XdENBjadk%2F2kTzoHoseSVGY8YvWskfyFex%2F9J0b5a06lq6uhmm31YNzWtClSJCvVs%2BEYHKIwHofUkKDDTcptKLTmomQkAAMOOX6LAxfVSj6f6jsRO8tN%2FGsus%2FBsxwKAhbXPEZu%2BC%2FTy8wLsS59kFTbFP%2FGC%2Fx0IMbN8RU%2FMJAlXwvqq3pekMwr4rAwAY6pgH7572qjW3oLK16c%2By4%2BlVE6AurdmtVA9MUQbLC8CANpfHRcP3noOdplsCY9qdfNkkO6o5GL4W%2FdGgE%2BFzTieCUnRUZKU3CLQOaz4OVt8aab6Cp6HttIhjsz5xOyHLfO4gVvnWkHqwBsU34yHoa2dsy8q5Pj0o5f2XudD6GeZ8wT0XSExPMCfV3nxD8j93Dv2yP2wQkhCuz5HSz%2FzK3MAy32sTp1Nxz&X-Amz-Signature=d8b6a6093ffbcd077f1279cce8a466f4cc4a49569db7473a34fdf70fd4b73855&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAYHA3P%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5APLpWKgC7MzrcL5d11TFRidItodl0ru%2BjIQlJrVpoAiBgFA6gdQL%2BTqFaTZnKOMtoPZyk%2B0YSoLQuXBdabmMkmyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9Y79bT9UOeuxlhIKtwDPO4MY3PrViPOr7oPkXrtOSKBlsiSUbrOQjnpkay1cbJyE7UcQQfMoVZuTbQW3JY4NK2GvophcPuPap2Ca50BjgDeL%2FuS4E8CPbZVnXPlDOc1HVVYgzsVBg4gB8jgMmC3jtdfL1gmGo9Sm2NYCRvhBUCZYYVyRkQpkKnTo9GToZ3n10QcQsEk8lUfXx78IkvkNRsXtUA4I%2F57e2Lj9IoqYwhtB3bEweLGnFS1DeyovzclmsmH68Ub4TUJd9juOIkFgy8CRfl2jk5wdaxUv1qiGlQmzuCAE0JX7vjB7Pz0KAexssEnsFbtLU5DCQRf09zezjOW1JTrzNgNpzeW473EgZEVq1HSN1VFj1X%2F1u056%2FzaIFnVjV80aMAmgZX7XMirikbAjtbgH68Zs8WWpIldutSvhrNx%2BQDBfWG88FxKG5Gt6O%2F1%2FPAZl83qRwh9sQMKdM%2Bs59XdENBjadk%2F2kTzoHoseSVGY8YvWskfyFex%2F9J0b5a06lq6uhmm31YNzWtClSJCvVs%2BEYHKIwHofUkKDDTcptKLTmomQkAAMOOX6LAxfVSj6f6jsRO8tN%2FGsus%2FBsxwKAhbXPEZu%2BC%2FTy8wLsS59kFTbFP%2FGC%2Fx0IMbN8RU%2FMJAlXwvqq3pekMwr4rAwAY6pgH7572qjW3oLK16c%2By4%2BlVE6AurdmtVA9MUQbLC8CANpfHRcP3noOdplsCY9qdfNkkO6o5GL4W%2FdGgE%2BFzTieCUnRUZKU3CLQOaz4OVt8aab6Cp6HttIhjsz5xOyHLfO4gVvnWkHqwBsU34yHoa2dsy8q5Pj0o5f2XudD6GeZ8wT0XSExPMCfV3nxD8j93Dv2yP2wQkhCuz5HSz%2FzK3MAy32sTp1Nxz&X-Amz-Signature=51753cb2c8b3b19d58a6ff560ab5cce16d8b513be38b0d3d5e8753e7d312cded&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAYHA3P%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5APLpWKgC7MzrcL5d11TFRidItodl0ru%2BjIQlJrVpoAiBgFA6gdQL%2BTqFaTZnKOMtoPZyk%2B0YSoLQuXBdabmMkmyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9Y79bT9UOeuxlhIKtwDPO4MY3PrViPOr7oPkXrtOSKBlsiSUbrOQjnpkay1cbJyE7UcQQfMoVZuTbQW3JY4NK2GvophcPuPap2Ca50BjgDeL%2FuS4E8CPbZVnXPlDOc1HVVYgzsVBg4gB8jgMmC3jtdfL1gmGo9Sm2NYCRvhBUCZYYVyRkQpkKnTo9GToZ3n10QcQsEk8lUfXx78IkvkNRsXtUA4I%2F57e2Lj9IoqYwhtB3bEweLGnFS1DeyovzclmsmH68Ub4TUJd9juOIkFgy8CRfl2jk5wdaxUv1qiGlQmzuCAE0JX7vjB7Pz0KAexssEnsFbtLU5DCQRf09zezjOW1JTrzNgNpzeW473EgZEVq1HSN1VFj1X%2F1u056%2FzaIFnVjV80aMAmgZX7XMirikbAjtbgH68Zs8WWpIldutSvhrNx%2BQDBfWG88FxKG5Gt6O%2F1%2FPAZl83qRwh9sQMKdM%2Bs59XdENBjadk%2F2kTzoHoseSVGY8YvWskfyFex%2F9J0b5a06lq6uhmm31YNzWtClSJCvVs%2BEYHKIwHofUkKDDTcptKLTmomQkAAMOOX6LAxfVSj6f6jsRO8tN%2FGsus%2FBsxwKAhbXPEZu%2BC%2FTy8wLsS59kFTbFP%2FGC%2Fx0IMbN8RU%2FMJAlXwvqq3pekMwr4rAwAY6pgH7572qjW3oLK16c%2By4%2BlVE6AurdmtVA9MUQbLC8CANpfHRcP3noOdplsCY9qdfNkkO6o5GL4W%2FdGgE%2BFzTieCUnRUZKU3CLQOaz4OVt8aab6Cp6HttIhjsz5xOyHLfO4gVvnWkHqwBsU34yHoa2dsy8q5Pj0o5f2XudD6GeZ8wT0XSExPMCfV3nxD8j93Dv2yP2wQkhCuz5HSz%2FzK3MAy32sTp1Nxz&X-Amz-Signature=ffd3f60e78a9b8d16058a2b9d21f695e4b4ccd335c92e1d7cbe4c436cd68962b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAYHA3P%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5APLpWKgC7MzrcL5d11TFRidItodl0ru%2BjIQlJrVpoAiBgFA6gdQL%2BTqFaTZnKOMtoPZyk%2B0YSoLQuXBdabmMkmyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9Y79bT9UOeuxlhIKtwDPO4MY3PrViPOr7oPkXrtOSKBlsiSUbrOQjnpkay1cbJyE7UcQQfMoVZuTbQW3JY4NK2GvophcPuPap2Ca50BjgDeL%2FuS4E8CPbZVnXPlDOc1HVVYgzsVBg4gB8jgMmC3jtdfL1gmGo9Sm2NYCRvhBUCZYYVyRkQpkKnTo9GToZ3n10QcQsEk8lUfXx78IkvkNRsXtUA4I%2F57e2Lj9IoqYwhtB3bEweLGnFS1DeyovzclmsmH68Ub4TUJd9juOIkFgy8CRfl2jk5wdaxUv1qiGlQmzuCAE0JX7vjB7Pz0KAexssEnsFbtLU5DCQRf09zezjOW1JTrzNgNpzeW473EgZEVq1HSN1VFj1X%2F1u056%2FzaIFnVjV80aMAmgZX7XMirikbAjtbgH68Zs8WWpIldutSvhrNx%2BQDBfWG88FxKG5Gt6O%2F1%2FPAZl83qRwh9sQMKdM%2Bs59XdENBjadk%2F2kTzoHoseSVGY8YvWskfyFex%2F9J0b5a06lq6uhmm31YNzWtClSJCvVs%2BEYHKIwHofUkKDDTcptKLTmomQkAAMOOX6LAxfVSj6f6jsRO8tN%2FGsus%2FBsxwKAhbXPEZu%2BC%2FTy8wLsS59kFTbFP%2FGC%2Fx0IMbN8RU%2FMJAlXwvqq3pekMwr4rAwAY6pgH7572qjW3oLK16c%2By4%2BlVE6AurdmtVA9MUQbLC8CANpfHRcP3noOdplsCY9qdfNkkO6o5GL4W%2FdGgE%2BFzTieCUnRUZKU3CLQOaz4OVt8aab6Cp6HttIhjsz5xOyHLfO4gVvnWkHqwBsU34yHoa2dsy8q5Pj0o5f2XudD6GeZ8wT0XSExPMCfV3nxD8j93Dv2yP2wQkhCuz5HSz%2FzK3MAy32sTp1Nxz&X-Amz-Signature=c0be0302d64e903fe23cbe9e02ee7f05e7afb27b2bb7dfac1fe5bbea6f7b4fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAYHA3P%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5APLpWKgC7MzrcL5d11TFRidItodl0ru%2BjIQlJrVpoAiBgFA6gdQL%2BTqFaTZnKOMtoPZyk%2B0YSoLQuXBdabmMkmyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9Y79bT9UOeuxlhIKtwDPO4MY3PrViPOr7oPkXrtOSKBlsiSUbrOQjnpkay1cbJyE7UcQQfMoVZuTbQW3JY4NK2GvophcPuPap2Ca50BjgDeL%2FuS4E8CPbZVnXPlDOc1HVVYgzsVBg4gB8jgMmC3jtdfL1gmGo9Sm2NYCRvhBUCZYYVyRkQpkKnTo9GToZ3n10QcQsEk8lUfXx78IkvkNRsXtUA4I%2F57e2Lj9IoqYwhtB3bEweLGnFS1DeyovzclmsmH68Ub4TUJd9juOIkFgy8CRfl2jk5wdaxUv1qiGlQmzuCAE0JX7vjB7Pz0KAexssEnsFbtLU5DCQRf09zezjOW1JTrzNgNpzeW473EgZEVq1HSN1VFj1X%2F1u056%2FzaIFnVjV80aMAmgZX7XMirikbAjtbgH68Zs8WWpIldutSvhrNx%2BQDBfWG88FxKG5Gt6O%2F1%2FPAZl83qRwh9sQMKdM%2Bs59XdENBjadk%2F2kTzoHoseSVGY8YvWskfyFex%2F9J0b5a06lq6uhmm31YNzWtClSJCvVs%2BEYHKIwHofUkKDDTcptKLTmomQkAAMOOX6LAxfVSj6f6jsRO8tN%2FGsus%2FBsxwKAhbXPEZu%2BC%2FTy8wLsS59kFTbFP%2FGC%2Fx0IMbN8RU%2FMJAlXwvqq3pekMwr4rAwAY6pgH7572qjW3oLK16c%2By4%2BlVE6AurdmtVA9MUQbLC8CANpfHRcP3noOdplsCY9qdfNkkO6o5GL4W%2FdGgE%2BFzTieCUnRUZKU3CLQOaz4OVt8aab6Cp6HttIhjsz5xOyHLfO4gVvnWkHqwBsU34yHoa2dsy8q5Pj0o5f2XudD6GeZ8wT0XSExPMCfV3nxD8j93Dv2yP2wQkhCuz5HSz%2FzK3MAy32sTp1Nxz&X-Amz-Signature=3b87cb8566fa3865117e4e89d41d2967449599cec86b4ea252ade8842df14cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
