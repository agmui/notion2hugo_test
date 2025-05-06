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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIVQGOPX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDab001BTpNx8Pq3bPQ2iSrzaAL86wFCnejl7HiLe24%2FQIhAL%2BT5b3mqau4JTnhlDcCPtnXOEtxk6lv7Hyw3uXxdp8FKv8DCEgQABoMNjM3NDIzMTgzODA1IgxTJ9I8GwDHi76ZwWsq3APDLh11gc7dc30aV8s3w%2Bp0DLeiDMnORbBo8R8BG9qzUyoipt7JVJ5dpenA68fKzBHQ1Y5vNxgciQ4EYBDE4FudgOvUfCx7ucnRNFYlEP0BPPFUsoIuShk7l9ZElUNbHB3Cubx2UyC9jMZjMGIJ%2BAsGgitlwUZMeKt2vqUnVwIz7usjQMYU1tMVVVuiRAMHHrb%2BFHeFqUuAuzPVsGdm130mfowZIjGQPyRys%2BUzj%2FsuB9qZV9ZRD0XAvePO04NuBFyL%2BEI8ZjvIopLd1c%2BSzwZNoaWwY6gXdnhgQjmpsao9gI12oMCtOnyy1hkjt%2BStG8dIu30Q6RL%2Fn1jZURcItv2kpi3NokSrsA41gw2bat1EPAyoDNQYZHNAYdPuSm4Uy30vBmyhxdPMI1KhrrNKyiRYS%2BRGNjI9%2FEVUWEyuShOeV8QjWs3Jk57gcG8m39lyWmIzfHtCLM8EYqJAXBNPLbzlrDyRz1J0xpLX83PfX37XtjTjdJSzT7SGCZ%2BRT%2BavyczcVCgyuHeGx%2Bp%2B%2BubLANsQp2%2Fr7vesKKpx5GmiDp0Yntub5HcCYC23%2F2U2e7FDoxP7Z5WexOEgpAG7fruVHv5CJ0oEZz2YNYOr6e%2Fky51Wxt7iegZk3eHkiLZVczDHzOjABjqkAT54%2B%2F1n23XTXhm8CDXN6NBuT341wHEg75nJwXqIGB9NbmaT1rkkALw5L5hRi9ewxo%2BACZtrOsbAEqrEFt%2BSnRLMFJwKoRPavH2WNSCWkBWlkquJmc3JFw5hh4g7bPvocClk6LP%2BIO9cZvCSY0NJJr0GmIn7tewdUByjtGema%2FTnQgwvC156qEOgYykyYWeG4DHkZv%2BbFSuSw1cLz96bSyx69Xir&X-Amz-Signature=b809725cbee5a101672e907c7d3916a4efac8a56e97059248f2b96f9eb7cacbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIVQGOPX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDab001BTpNx8Pq3bPQ2iSrzaAL86wFCnejl7HiLe24%2FQIhAL%2BT5b3mqau4JTnhlDcCPtnXOEtxk6lv7Hyw3uXxdp8FKv8DCEgQABoMNjM3NDIzMTgzODA1IgxTJ9I8GwDHi76ZwWsq3APDLh11gc7dc30aV8s3w%2Bp0DLeiDMnORbBo8R8BG9qzUyoipt7JVJ5dpenA68fKzBHQ1Y5vNxgciQ4EYBDE4FudgOvUfCx7ucnRNFYlEP0BPPFUsoIuShk7l9ZElUNbHB3Cubx2UyC9jMZjMGIJ%2BAsGgitlwUZMeKt2vqUnVwIz7usjQMYU1tMVVVuiRAMHHrb%2BFHeFqUuAuzPVsGdm130mfowZIjGQPyRys%2BUzj%2FsuB9qZV9ZRD0XAvePO04NuBFyL%2BEI8ZjvIopLd1c%2BSzwZNoaWwY6gXdnhgQjmpsao9gI12oMCtOnyy1hkjt%2BStG8dIu30Q6RL%2Fn1jZURcItv2kpi3NokSrsA41gw2bat1EPAyoDNQYZHNAYdPuSm4Uy30vBmyhxdPMI1KhrrNKyiRYS%2BRGNjI9%2FEVUWEyuShOeV8QjWs3Jk57gcG8m39lyWmIzfHtCLM8EYqJAXBNPLbzlrDyRz1J0xpLX83PfX37XtjTjdJSzT7SGCZ%2BRT%2BavyczcVCgyuHeGx%2Bp%2B%2BubLANsQp2%2Fr7vesKKpx5GmiDp0Yntub5HcCYC23%2F2U2e7FDoxP7Z5WexOEgpAG7fruVHv5CJ0oEZz2YNYOr6e%2Fky51Wxt7iegZk3eHkiLZVczDHzOjABjqkAT54%2B%2F1n23XTXhm8CDXN6NBuT341wHEg75nJwXqIGB9NbmaT1rkkALw5L5hRi9ewxo%2BACZtrOsbAEqrEFt%2BSnRLMFJwKoRPavH2WNSCWkBWlkquJmc3JFw5hh4g7bPvocClk6LP%2BIO9cZvCSY0NJJr0GmIn7tewdUByjtGema%2FTnQgwvC156qEOgYykyYWeG4DHkZv%2BbFSuSw1cLz96bSyx69Xir&X-Amz-Signature=6212309e295f0cd40c2d7895d0676c593b00d9a306e6cee743d73c11c7905301&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIVQGOPX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDab001BTpNx8Pq3bPQ2iSrzaAL86wFCnejl7HiLe24%2FQIhAL%2BT5b3mqau4JTnhlDcCPtnXOEtxk6lv7Hyw3uXxdp8FKv8DCEgQABoMNjM3NDIzMTgzODA1IgxTJ9I8GwDHi76ZwWsq3APDLh11gc7dc30aV8s3w%2Bp0DLeiDMnORbBo8R8BG9qzUyoipt7JVJ5dpenA68fKzBHQ1Y5vNxgciQ4EYBDE4FudgOvUfCx7ucnRNFYlEP0BPPFUsoIuShk7l9ZElUNbHB3Cubx2UyC9jMZjMGIJ%2BAsGgitlwUZMeKt2vqUnVwIz7usjQMYU1tMVVVuiRAMHHrb%2BFHeFqUuAuzPVsGdm130mfowZIjGQPyRys%2BUzj%2FsuB9qZV9ZRD0XAvePO04NuBFyL%2BEI8ZjvIopLd1c%2BSzwZNoaWwY6gXdnhgQjmpsao9gI12oMCtOnyy1hkjt%2BStG8dIu30Q6RL%2Fn1jZURcItv2kpi3NokSrsA41gw2bat1EPAyoDNQYZHNAYdPuSm4Uy30vBmyhxdPMI1KhrrNKyiRYS%2BRGNjI9%2FEVUWEyuShOeV8QjWs3Jk57gcG8m39lyWmIzfHtCLM8EYqJAXBNPLbzlrDyRz1J0xpLX83PfX37XtjTjdJSzT7SGCZ%2BRT%2BavyczcVCgyuHeGx%2Bp%2B%2BubLANsQp2%2Fr7vesKKpx5GmiDp0Yntub5HcCYC23%2F2U2e7FDoxP7Z5WexOEgpAG7fruVHv5CJ0oEZz2YNYOr6e%2Fky51Wxt7iegZk3eHkiLZVczDHzOjABjqkAT54%2B%2F1n23XTXhm8CDXN6NBuT341wHEg75nJwXqIGB9NbmaT1rkkALw5L5hRi9ewxo%2BACZtrOsbAEqrEFt%2BSnRLMFJwKoRPavH2WNSCWkBWlkquJmc3JFw5hh4g7bPvocClk6LP%2BIO9cZvCSY0NJJr0GmIn7tewdUByjtGema%2FTnQgwvC156qEOgYykyYWeG4DHkZv%2BbFSuSw1cLz96bSyx69Xir&X-Amz-Signature=29a3d40647092015421f431a6cc323956dd4ba65b3f95e558f3664a1dcdc3f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIVQGOPX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDab001BTpNx8Pq3bPQ2iSrzaAL86wFCnejl7HiLe24%2FQIhAL%2BT5b3mqau4JTnhlDcCPtnXOEtxk6lv7Hyw3uXxdp8FKv8DCEgQABoMNjM3NDIzMTgzODA1IgxTJ9I8GwDHi76ZwWsq3APDLh11gc7dc30aV8s3w%2Bp0DLeiDMnORbBo8R8BG9qzUyoipt7JVJ5dpenA68fKzBHQ1Y5vNxgciQ4EYBDE4FudgOvUfCx7ucnRNFYlEP0BPPFUsoIuShk7l9ZElUNbHB3Cubx2UyC9jMZjMGIJ%2BAsGgitlwUZMeKt2vqUnVwIz7usjQMYU1tMVVVuiRAMHHrb%2BFHeFqUuAuzPVsGdm130mfowZIjGQPyRys%2BUzj%2FsuB9qZV9ZRD0XAvePO04NuBFyL%2BEI8ZjvIopLd1c%2BSzwZNoaWwY6gXdnhgQjmpsao9gI12oMCtOnyy1hkjt%2BStG8dIu30Q6RL%2Fn1jZURcItv2kpi3NokSrsA41gw2bat1EPAyoDNQYZHNAYdPuSm4Uy30vBmyhxdPMI1KhrrNKyiRYS%2BRGNjI9%2FEVUWEyuShOeV8QjWs3Jk57gcG8m39lyWmIzfHtCLM8EYqJAXBNPLbzlrDyRz1J0xpLX83PfX37XtjTjdJSzT7SGCZ%2BRT%2BavyczcVCgyuHeGx%2Bp%2B%2BubLANsQp2%2Fr7vesKKpx5GmiDp0Yntub5HcCYC23%2F2U2e7FDoxP7Z5WexOEgpAG7fruVHv5CJ0oEZz2YNYOr6e%2Fky51Wxt7iegZk3eHkiLZVczDHzOjABjqkAT54%2B%2F1n23XTXhm8CDXN6NBuT341wHEg75nJwXqIGB9NbmaT1rkkALw5L5hRi9ewxo%2BACZtrOsbAEqrEFt%2BSnRLMFJwKoRPavH2WNSCWkBWlkquJmc3JFw5hh4g7bPvocClk6LP%2BIO9cZvCSY0NJJr0GmIn7tewdUByjtGema%2FTnQgwvC156qEOgYykyYWeG4DHkZv%2BbFSuSw1cLz96bSyx69Xir&X-Amz-Signature=88da562bdb6977d3020dea906572450fa7c59aff0b3d1e97fa5078f922a0761f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIVQGOPX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDab001BTpNx8Pq3bPQ2iSrzaAL86wFCnejl7HiLe24%2FQIhAL%2BT5b3mqau4JTnhlDcCPtnXOEtxk6lv7Hyw3uXxdp8FKv8DCEgQABoMNjM3NDIzMTgzODA1IgxTJ9I8GwDHi76ZwWsq3APDLh11gc7dc30aV8s3w%2Bp0DLeiDMnORbBo8R8BG9qzUyoipt7JVJ5dpenA68fKzBHQ1Y5vNxgciQ4EYBDE4FudgOvUfCx7ucnRNFYlEP0BPPFUsoIuShk7l9ZElUNbHB3Cubx2UyC9jMZjMGIJ%2BAsGgitlwUZMeKt2vqUnVwIz7usjQMYU1tMVVVuiRAMHHrb%2BFHeFqUuAuzPVsGdm130mfowZIjGQPyRys%2BUzj%2FsuB9qZV9ZRD0XAvePO04NuBFyL%2BEI8ZjvIopLd1c%2BSzwZNoaWwY6gXdnhgQjmpsao9gI12oMCtOnyy1hkjt%2BStG8dIu30Q6RL%2Fn1jZURcItv2kpi3NokSrsA41gw2bat1EPAyoDNQYZHNAYdPuSm4Uy30vBmyhxdPMI1KhrrNKyiRYS%2BRGNjI9%2FEVUWEyuShOeV8QjWs3Jk57gcG8m39lyWmIzfHtCLM8EYqJAXBNPLbzlrDyRz1J0xpLX83PfX37XtjTjdJSzT7SGCZ%2BRT%2BavyczcVCgyuHeGx%2Bp%2B%2BubLANsQp2%2Fr7vesKKpx5GmiDp0Yntub5HcCYC23%2F2U2e7FDoxP7Z5WexOEgpAG7fruVHv5CJ0oEZz2YNYOr6e%2Fky51Wxt7iegZk3eHkiLZVczDHzOjABjqkAT54%2B%2F1n23XTXhm8CDXN6NBuT341wHEg75nJwXqIGB9NbmaT1rkkALw5L5hRi9ewxo%2BACZtrOsbAEqrEFt%2BSnRLMFJwKoRPavH2WNSCWkBWlkquJmc3JFw5hh4g7bPvocClk6LP%2BIO9cZvCSY0NJJr0GmIn7tewdUByjtGema%2FTnQgwvC156qEOgYykyYWeG4DHkZv%2BbFSuSw1cLz96bSyx69Xir&X-Amz-Signature=94cba2b4e529fc215f7222cd6d0c60f1809f9ec348cc723e4fa0ecf2d27b333e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIVQGOPX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDab001BTpNx8Pq3bPQ2iSrzaAL86wFCnejl7HiLe24%2FQIhAL%2BT5b3mqau4JTnhlDcCPtnXOEtxk6lv7Hyw3uXxdp8FKv8DCEgQABoMNjM3NDIzMTgzODA1IgxTJ9I8GwDHi76ZwWsq3APDLh11gc7dc30aV8s3w%2Bp0DLeiDMnORbBo8R8BG9qzUyoipt7JVJ5dpenA68fKzBHQ1Y5vNxgciQ4EYBDE4FudgOvUfCx7ucnRNFYlEP0BPPFUsoIuShk7l9ZElUNbHB3Cubx2UyC9jMZjMGIJ%2BAsGgitlwUZMeKt2vqUnVwIz7usjQMYU1tMVVVuiRAMHHrb%2BFHeFqUuAuzPVsGdm130mfowZIjGQPyRys%2BUzj%2FsuB9qZV9ZRD0XAvePO04NuBFyL%2BEI8ZjvIopLd1c%2BSzwZNoaWwY6gXdnhgQjmpsao9gI12oMCtOnyy1hkjt%2BStG8dIu30Q6RL%2Fn1jZURcItv2kpi3NokSrsA41gw2bat1EPAyoDNQYZHNAYdPuSm4Uy30vBmyhxdPMI1KhrrNKyiRYS%2BRGNjI9%2FEVUWEyuShOeV8QjWs3Jk57gcG8m39lyWmIzfHtCLM8EYqJAXBNPLbzlrDyRz1J0xpLX83PfX37XtjTjdJSzT7SGCZ%2BRT%2BavyczcVCgyuHeGx%2Bp%2B%2BubLANsQp2%2Fr7vesKKpx5GmiDp0Yntub5HcCYC23%2F2U2e7FDoxP7Z5WexOEgpAG7fruVHv5CJ0oEZz2YNYOr6e%2Fky51Wxt7iegZk3eHkiLZVczDHzOjABjqkAT54%2B%2F1n23XTXhm8CDXN6NBuT341wHEg75nJwXqIGB9NbmaT1rkkALw5L5hRi9ewxo%2BACZtrOsbAEqrEFt%2BSnRLMFJwKoRPavH2WNSCWkBWlkquJmc3JFw5hh4g7bPvocClk6LP%2BIO9cZvCSY0NJJr0GmIn7tewdUByjtGema%2FTnQgwvC156qEOgYykyYWeG4DHkZv%2BbFSuSw1cLz96bSyx69Xir&X-Amz-Signature=dace89057aa1a9e421141d06fec97359e19e7ebb9085d48063d5357a58b46f81&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIVQGOPX%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T151105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDab001BTpNx8Pq3bPQ2iSrzaAL86wFCnejl7HiLe24%2FQIhAL%2BT5b3mqau4JTnhlDcCPtnXOEtxk6lv7Hyw3uXxdp8FKv8DCEgQABoMNjM3NDIzMTgzODA1IgxTJ9I8GwDHi76ZwWsq3APDLh11gc7dc30aV8s3w%2Bp0DLeiDMnORbBo8R8BG9qzUyoipt7JVJ5dpenA68fKzBHQ1Y5vNxgciQ4EYBDE4FudgOvUfCx7ucnRNFYlEP0BPPFUsoIuShk7l9ZElUNbHB3Cubx2UyC9jMZjMGIJ%2BAsGgitlwUZMeKt2vqUnVwIz7usjQMYU1tMVVVuiRAMHHrb%2BFHeFqUuAuzPVsGdm130mfowZIjGQPyRys%2BUzj%2FsuB9qZV9ZRD0XAvePO04NuBFyL%2BEI8ZjvIopLd1c%2BSzwZNoaWwY6gXdnhgQjmpsao9gI12oMCtOnyy1hkjt%2BStG8dIu30Q6RL%2Fn1jZURcItv2kpi3NokSrsA41gw2bat1EPAyoDNQYZHNAYdPuSm4Uy30vBmyhxdPMI1KhrrNKyiRYS%2BRGNjI9%2FEVUWEyuShOeV8QjWs3Jk57gcG8m39lyWmIzfHtCLM8EYqJAXBNPLbzlrDyRz1J0xpLX83PfX37XtjTjdJSzT7SGCZ%2BRT%2BavyczcVCgyuHeGx%2Bp%2B%2BubLANsQp2%2Fr7vesKKpx5GmiDp0Yntub5HcCYC23%2F2U2e7FDoxP7Z5WexOEgpAG7fruVHv5CJ0oEZz2YNYOr6e%2Fky51Wxt7iegZk3eHkiLZVczDHzOjABjqkAT54%2B%2F1n23XTXhm8CDXN6NBuT341wHEg75nJwXqIGB9NbmaT1rkkALw5L5hRi9ewxo%2BACZtrOsbAEqrEFt%2BSnRLMFJwKoRPavH2WNSCWkBWlkquJmc3JFw5hh4g7bPvocClk6LP%2BIO9cZvCSY0NJJr0GmIn7tewdUByjtGema%2FTnQgwvC156qEOgYykyYWeG4DHkZv%2BbFSuSw1cLz96bSyx69Xir&X-Amz-Signature=7237eae761502337af648de5fbb9796fa8963c7db22ddd1f340359d9971a31c4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
