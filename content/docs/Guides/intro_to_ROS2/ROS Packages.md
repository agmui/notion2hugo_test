---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFV4FKM%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDy7iom7qoZNknlLHf7E72CB9bd2cas1od6jrOFpp31uAIgWSuLGwAGApc%2FRJPnqhafFIgDAoGBi%2FeGbmjJsqBBn9gq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLoE9xYa68BXbcppeyrcA82U83M%2BwDlNki%2FNB%2FFpcG7ZIkXSM0fCuWzQMbkpMRIjoVu05GLSGbNOozHIGTh8QGKfXGQDW4olfw7x0oop%2FN3en%2B70z00awjTt6z1%2FW2i7wy24yEAWxAf7JgJSvlJqU98zPRjwZMXSPgLy1OK7%2BvbRROXO6Nu7VUgYbV3At6z%2Bigjo9RVbR6tf4WNdBCrSvhcFj%2F1MrIjk1EQAGqCgHdndldZfOl8W7eQhL4MH%2FYyJtpapyl5RxsdEJhVsd2QMHwfH72ixVTBVhxtbOkOHM08UrNDq%2BgGw9t2lcYrTlMUX7tuqb6Rzx4NitRlkyISQiXMoOakqj%2FEJnlNbws969CLm870sNm6AUnkJSNSjxwqB%2Be0t6ACq8wYd%2B8hSWG7Yp6d3UkLUZ9D2FclgXwwTLuLXfm3hVYTflTsngr3FfsiraPTC12HgENsxukZh60qon4HIEzQucD3SIrMcaW3MpeVQ45EIUd0%2BV8fhA17y7CV%2Ft7L5IQeDpTGunbJ3nzrvDBVMK1uJ7LUE1i3e%2B%2BBYVVEI7rUrlagl%2Bobm6EfhxjB%2BhESMIq35ECQCi2rJy%2FrUKSimqG2RwvLJJYZTD0yHTFeYkEJNdXY5DnpRE8Pe1K60vSzGWQD6LVnu%2B%2BykMLS7rM4GOqUBMfWPO9l6ABsqwd4Q0f9bC4NPXj%2FehoPrSENp8qoaD2jAX4A%2Btz%2FFbidBtFHc6yU75KicW2e%2BM8b7wnCBTAtLorRhZkg%2B3vZ%2BTazIK6e2ed84b%2BbafOICnTzTjoENd%2BLt23JwWkyoMwd2PR3Jmla7vC4ju7vML3GyPhrgpxjsYMgHZa%2FdFMjLj5eqK4jbeYUIlmIMhdqGTXf0WK8xzlCpgfv7hxpj&X-Amz-Signature=cf14e44c49125e3e82b3b5c824af494e219b1e5ed502152b72c43066e2522157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFV4FKM%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDy7iom7qoZNknlLHf7E72CB9bd2cas1od6jrOFpp31uAIgWSuLGwAGApc%2FRJPnqhafFIgDAoGBi%2FeGbmjJsqBBn9gq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLoE9xYa68BXbcppeyrcA82U83M%2BwDlNki%2FNB%2FFpcG7ZIkXSM0fCuWzQMbkpMRIjoVu05GLSGbNOozHIGTh8QGKfXGQDW4olfw7x0oop%2FN3en%2B70z00awjTt6z1%2FW2i7wy24yEAWxAf7JgJSvlJqU98zPRjwZMXSPgLy1OK7%2BvbRROXO6Nu7VUgYbV3At6z%2Bigjo9RVbR6tf4WNdBCrSvhcFj%2F1MrIjk1EQAGqCgHdndldZfOl8W7eQhL4MH%2FYyJtpapyl5RxsdEJhVsd2QMHwfH72ixVTBVhxtbOkOHM08UrNDq%2BgGw9t2lcYrTlMUX7tuqb6Rzx4NitRlkyISQiXMoOakqj%2FEJnlNbws969CLm870sNm6AUnkJSNSjxwqB%2Be0t6ACq8wYd%2B8hSWG7Yp6d3UkLUZ9D2FclgXwwTLuLXfm3hVYTflTsngr3FfsiraPTC12HgENsxukZh60qon4HIEzQucD3SIrMcaW3MpeVQ45EIUd0%2BV8fhA17y7CV%2Ft7L5IQeDpTGunbJ3nzrvDBVMK1uJ7LUE1i3e%2B%2BBYVVEI7rUrlagl%2Bobm6EfhxjB%2BhESMIq35ECQCi2rJy%2FrUKSimqG2RwvLJJYZTD0yHTFeYkEJNdXY5DnpRE8Pe1K60vSzGWQD6LVnu%2B%2BykMLS7rM4GOqUBMfWPO9l6ABsqwd4Q0f9bC4NPXj%2FehoPrSENp8qoaD2jAX4A%2Btz%2FFbidBtFHc6yU75KicW2e%2BM8b7wnCBTAtLorRhZkg%2B3vZ%2BTazIK6e2ed84b%2BbafOICnTzTjoENd%2BLt23JwWkyoMwd2PR3Jmla7vC4ju7vML3GyPhrgpxjsYMgHZa%2FdFMjLj5eqK4jbeYUIlmIMhdqGTXf0WK8xzlCpgfv7hxpj&X-Amz-Signature=1bdd9c1d7908c02eaa5171260bbea87eadfac2a4631e99af16b669b98d2d3dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFV4FKM%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDy7iom7qoZNknlLHf7E72CB9bd2cas1od6jrOFpp31uAIgWSuLGwAGApc%2FRJPnqhafFIgDAoGBi%2FeGbmjJsqBBn9gq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLoE9xYa68BXbcppeyrcA82U83M%2BwDlNki%2FNB%2FFpcG7ZIkXSM0fCuWzQMbkpMRIjoVu05GLSGbNOozHIGTh8QGKfXGQDW4olfw7x0oop%2FN3en%2B70z00awjTt6z1%2FW2i7wy24yEAWxAf7JgJSvlJqU98zPRjwZMXSPgLy1OK7%2BvbRROXO6Nu7VUgYbV3At6z%2Bigjo9RVbR6tf4WNdBCrSvhcFj%2F1MrIjk1EQAGqCgHdndldZfOl8W7eQhL4MH%2FYyJtpapyl5RxsdEJhVsd2QMHwfH72ixVTBVhxtbOkOHM08UrNDq%2BgGw9t2lcYrTlMUX7tuqb6Rzx4NitRlkyISQiXMoOakqj%2FEJnlNbws969CLm870sNm6AUnkJSNSjxwqB%2Be0t6ACq8wYd%2B8hSWG7Yp6d3UkLUZ9D2FclgXwwTLuLXfm3hVYTflTsngr3FfsiraPTC12HgENsxukZh60qon4HIEzQucD3SIrMcaW3MpeVQ45EIUd0%2BV8fhA17y7CV%2Ft7L5IQeDpTGunbJ3nzrvDBVMK1uJ7LUE1i3e%2B%2BBYVVEI7rUrlagl%2Bobm6EfhxjB%2BhESMIq35ECQCi2rJy%2FrUKSimqG2RwvLJJYZTD0yHTFeYkEJNdXY5DnpRE8Pe1K60vSzGWQD6LVnu%2B%2BykMLS7rM4GOqUBMfWPO9l6ABsqwd4Q0f9bC4NPXj%2FehoPrSENp8qoaD2jAX4A%2Btz%2FFbidBtFHc6yU75KicW2e%2BM8b7wnCBTAtLorRhZkg%2B3vZ%2BTazIK6e2ed84b%2BbafOICnTzTjoENd%2BLt23JwWkyoMwd2PR3Jmla7vC4ju7vML3GyPhrgpxjsYMgHZa%2FdFMjLj5eqK4jbeYUIlmIMhdqGTXf0WK8xzlCpgfv7hxpj&X-Amz-Signature=34bdcdd7d09015f1a89279f50414309b88976da717084418c2dad4d740fcdb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFV4FKM%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDy7iom7qoZNknlLHf7E72CB9bd2cas1od6jrOFpp31uAIgWSuLGwAGApc%2FRJPnqhafFIgDAoGBi%2FeGbmjJsqBBn9gq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLoE9xYa68BXbcppeyrcA82U83M%2BwDlNki%2FNB%2FFpcG7ZIkXSM0fCuWzQMbkpMRIjoVu05GLSGbNOozHIGTh8QGKfXGQDW4olfw7x0oop%2FN3en%2B70z00awjTt6z1%2FW2i7wy24yEAWxAf7JgJSvlJqU98zPRjwZMXSPgLy1OK7%2BvbRROXO6Nu7VUgYbV3At6z%2Bigjo9RVbR6tf4WNdBCrSvhcFj%2F1MrIjk1EQAGqCgHdndldZfOl8W7eQhL4MH%2FYyJtpapyl5RxsdEJhVsd2QMHwfH72ixVTBVhxtbOkOHM08UrNDq%2BgGw9t2lcYrTlMUX7tuqb6Rzx4NitRlkyISQiXMoOakqj%2FEJnlNbws969CLm870sNm6AUnkJSNSjxwqB%2Be0t6ACq8wYd%2B8hSWG7Yp6d3UkLUZ9D2FclgXwwTLuLXfm3hVYTflTsngr3FfsiraPTC12HgENsxukZh60qon4HIEzQucD3SIrMcaW3MpeVQ45EIUd0%2BV8fhA17y7CV%2Ft7L5IQeDpTGunbJ3nzrvDBVMK1uJ7LUE1i3e%2B%2BBYVVEI7rUrlagl%2Bobm6EfhxjB%2BhESMIq35ECQCi2rJy%2FrUKSimqG2RwvLJJYZTD0yHTFeYkEJNdXY5DnpRE8Pe1K60vSzGWQD6LVnu%2B%2BykMLS7rM4GOqUBMfWPO9l6ABsqwd4Q0f9bC4NPXj%2FehoPrSENp8qoaD2jAX4A%2Btz%2FFbidBtFHc6yU75KicW2e%2BM8b7wnCBTAtLorRhZkg%2B3vZ%2BTazIK6e2ed84b%2BbafOICnTzTjoENd%2BLt23JwWkyoMwd2PR3Jmla7vC4ju7vML3GyPhrgpxjsYMgHZa%2FdFMjLj5eqK4jbeYUIlmIMhdqGTXf0WK8xzlCpgfv7hxpj&X-Amz-Signature=33c078dbfb0fc0cfa778098b5cebb92ec16735eebb563adbc4832f0e4fe1303f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFV4FKM%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDy7iom7qoZNknlLHf7E72CB9bd2cas1od6jrOFpp31uAIgWSuLGwAGApc%2FRJPnqhafFIgDAoGBi%2FeGbmjJsqBBn9gq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLoE9xYa68BXbcppeyrcA82U83M%2BwDlNki%2FNB%2FFpcG7ZIkXSM0fCuWzQMbkpMRIjoVu05GLSGbNOozHIGTh8QGKfXGQDW4olfw7x0oop%2FN3en%2B70z00awjTt6z1%2FW2i7wy24yEAWxAf7JgJSvlJqU98zPRjwZMXSPgLy1OK7%2BvbRROXO6Nu7VUgYbV3At6z%2Bigjo9RVbR6tf4WNdBCrSvhcFj%2F1MrIjk1EQAGqCgHdndldZfOl8W7eQhL4MH%2FYyJtpapyl5RxsdEJhVsd2QMHwfH72ixVTBVhxtbOkOHM08UrNDq%2BgGw9t2lcYrTlMUX7tuqb6Rzx4NitRlkyISQiXMoOakqj%2FEJnlNbws969CLm870sNm6AUnkJSNSjxwqB%2Be0t6ACq8wYd%2B8hSWG7Yp6d3UkLUZ9D2FclgXwwTLuLXfm3hVYTflTsngr3FfsiraPTC12HgENsxukZh60qon4HIEzQucD3SIrMcaW3MpeVQ45EIUd0%2BV8fhA17y7CV%2Ft7L5IQeDpTGunbJ3nzrvDBVMK1uJ7LUE1i3e%2B%2BBYVVEI7rUrlagl%2Bobm6EfhxjB%2BhESMIq35ECQCi2rJy%2FrUKSimqG2RwvLJJYZTD0yHTFeYkEJNdXY5DnpRE8Pe1K60vSzGWQD6LVnu%2B%2BykMLS7rM4GOqUBMfWPO9l6ABsqwd4Q0f9bC4NPXj%2FehoPrSENp8qoaD2jAX4A%2Btz%2FFbidBtFHc6yU75KicW2e%2BM8b7wnCBTAtLorRhZkg%2B3vZ%2BTazIK6e2ed84b%2BbafOICnTzTjoENd%2BLt23JwWkyoMwd2PR3Jmla7vC4ju7vML3GyPhrgpxjsYMgHZa%2FdFMjLj5eqK4jbeYUIlmIMhdqGTXf0WK8xzlCpgfv7hxpj&X-Amz-Signature=41c5d45a6de28874239302ee4bde43e23cedbf238e52ca4c30766ebc72949fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFV4FKM%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDy7iom7qoZNknlLHf7E72CB9bd2cas1od6jrOFpp31uAIgWSuLGwAGApc%2FRJPnqhafFIgDAoGBi%2FeGbmjJsqBBn9gq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLoE9xYa68BXbcppeyrcA82U83M%2BwDlNki%2FNB%2FFpcG7ZIkXSM0fCuWzQMbkpMRIjoVu05GLSGbNOozHIGTh8QGKfXGQDW4olfw7x0oop%2FN3en%2B70z00awjTt6z1%2FW2i7wy24yEAWxAf7JgJSvlJqU98zPRjwZMXSPgLy1OK7%2BvbRROXO6Nu7VUgYbV3At6z%2Bigjo9RVbR6tf4WNdBCrSvhcFj%2F1MrIjk1EQAGqCgHdndldZfOl8W7eQhL4MH%2FYyJtpapyl5RxsdEJhVsd2QMHwfH72ixVTBVhxtbOkOHM08UrNDq%2BgGw9t2lcYrTlMUX7tuqb6Rzx4NitRlkyISQiXMoOakqj%2FEJnlNbws969CLm870sNm6AUnkJSNSjxwqB%2Be0t6ACq8wYd%2B8hSWG7Yp6d3UkLUZ9D2FclgXwwTLuLXfm3hVYTflTsngr3FfsiraPTC12HgENsxukZh60qon4HIEzQucD3SIrMcaW3MpeVQ45EIUd0%2BV8fhA17y7CV%2Ft7L5IQeDpTGunbJ3nzrvDBVMK1uJ7LUE1i3e%2B%2BBYVVEI7rUrlagl%2Bobm6EfhxjB%2BhESMIq35ECQCi2rJy%2FrUKSimqG2RwvLJJYZTD0yHTFeYkEJNdXY5DnpRE8Pe1K60vSzGWQD6LVnu%2B%2BykMLS7rM4GOqUBMfWPO9l6ABsqwd4Q0f9bC4NPXj%2FehoPrSENp8qoaD2jAX4A%2Btz%2FFbidBtFHc6yU75KicW2e%2BM8b7wnCBTAtLorRhZkg%2B3vZ%2BTazIK6e2ed84b%2BbafOICnTzTjoENd%2BLt23JwWkyoMwd2PR3Jmla7vC4ju7vML3GyPhrgpxjsYMgHZa%2FdFMjLj5eqK4jbeYUIlmIMhdqGTXf0WK8xzlCpgfv7hxpj&X-Amz-Signature=e9393ae208f56f23ffe2b88b5d4e2611a956d39ccf683d3914214969ddc5f0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFV4FKM%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDy7iom7qoZNknlLHf7E72CB9bd2cas1od6jrOFpp31uAIgWSuLGwAGApc%2FRJPnqhafFIgDAoGBi%2FeGbmjJsqBBn9gq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLoE9xYa68BXbcppeyrcA82U83M%2BwDlNki%2FNB%2FFpcG7ZIkXSM0fCuWzQMbkpMRIjoVu05GLSGbNOozHIGTh8QGKfXGQDW4olfw7x0oop%2FN3en%2B70z00awjTt6z1%2FW2i7wy24yEAWxAf7JgJSvlJqU98zPRjwZMXSPgLy1OK7%2BvbRROXO6Nu7VUgYbV3At6z%2Bigjo9RVbR6tf4WNdBCrSvhcFj%2F1MrIjk1EQAGqCgHdndldZfOl8W7eQhL4MH%2FYyJtpapyl5RxsdEJhVsd2QMHwfH72ixVTBVhxtbOkOHM08UrNDq%2BgGw9t2lcYrTlMUX7tuqb6Rzx4NitRlkyISQiXMoOakqj%2FEJnlNbws969CLm870sNm6AUnkJSNSjxwqB%2Be0t6ACq8wYd%2B8hSWG7Yp6d3UkLUZ9D2FclgXwwTLuLXfm3hVYTflTsngr3FfsiraPTC12HgENsxukZh60qon4HIEzQucD3SIrMcaW3MpeVQ45EIUd0%2BV8fhA17y7CV%2Ft7L5IQeDpTGunbJ3nzrvDBVMK1uJ7LUE1i3e%2B%2BBYVVEI7rUrlagl%2Bobm6EfhxjB%2BhESMIq35ECQCi2rJy%2FrUKSimqG2RwvLJJYZTD0yHTFeYkEJNdXY5DnpRE8Pe1K60vSzGWQD6LVnu%2B%2BykMLS7rM4GOqUBMfWPO9l6ABsqwd4Q0f9bC4NPXj%2FehoPrSENp8qoaD2jAX4A%2Btz%2FFbidBtFHc6yU75KicW2e%2BM8b7wnCBTAtLorRhZkg%2B3vZ%2BTazIK6e2ed84b%2BbafOICnTzTjoENd%2BLt23JwWkyoMwd2PR3Jmla7vC4ju7vML3GyPhrgpxjsYMgHZa%2FdFMjLj5eqK4jbeYUIlmIMhdqGTXf0WK8xzlCpgfv7hxpj&X-Amz-Signature=b479595eae7c0cabf3f1510751f1f72b2699d1e5bc1b57b0bc3523224a249d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
