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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3PFRSG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgX03N%2BaHI1V3GGM6gINarojgO%2FqSluP75XVYBmmtMrAiBiGbpsrXjsqTHFAb51gduLxqPuxhSj62hTmH9rnF6cfSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2XML0O%2FnFjkXYhawKtwDzLwkAfxOW4me87TAem9fWXRfn3HBtZ689Tj3KEfCMsL4mIkaTcCGiajqn0fsFJTTRLBDshxq%2B1xhNXZoJ6pEK7M6vfBLGtfZ9MAlbppEGLWek%2BSu4U%2Bm1VI9IX6LqSPvy3QMGN7xaqyYAeeD8bNgrPWDReEJT0Ln%2FS3LgebmbPxWjZfU5Mo8vnAowl7dR1VYKUgdvR1BpCP1M82k%2B9%2FnECD50uQeNfwU6qcUM%2FVsK3LvSCXdqrD5T0yIPjyPc88IhvJDTxftGOAaj8yJWm5KyEhXx6rt83k5hos09eiEBA8KIyNotLXS6Zc%2Fv%2BKI7nW2xXQXpSzA5AHzEnhZnHfrD8mzkb0bAvkPNhNPSBaL7syiTRU78yIDD%2Fk4LvcuAhach5k%2FKl0PDT6zt1e432P%2BZ4cT4La93Q2xlyO89otXsg%2FZAxmnqNMRberIA%2BeVe743mR%2F1DRSBsjFWsuy2hIesm5Tupt2t5xN%2BEcoyZGb4wktulpHcJxTCFCle3CZQJb8OnmH%2BaYUNqJdF44O1QJrra9psGnlfrOONXqRRzDb52yBqSFctEYkybdudelhf9GUPZwsE26bGTP7Yu07c8mmg8wYaYJG1wsBIwfwUxP1VA6CiO1gDv4LHBYDlsHwwh8X4vAY6pgFlu4XujkYj2bf0iOcEtcjBWxPIF506OI7D5yWPrEAFmT%2B0au2BYYAIqu%2B%2F6jWhP5S5NplsS%2FTUpg%2BkLLogqFppwpM9tc15h3lGnIHBMQefC2rw2u7J4X5AnB7kERB1VCiDOP0XEI70z84D5RdfOQVKIsVAtE0TzDWT0tcvhvsQxhY3AsjtTAICxY7flSWpB01XBoN5y9NzlhkkBoj0%2F7dQ8dtzL3aX&X-Amz-Signature=8462ed2f93b7fa60a0d2139e961e9f88109b9b65917da76b07c782ff37c4966e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3PFRSG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgX03N%2BaHI1V3GGM6gINarojgO%2FqSluP75XVYBmmtMrAiBiGbpsrXjsqTHFAb51gduLxqPuxhSj62hTmH9rnF6cfSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2XML0O%2FnFjkXYhawKtwDzLwkAfxOW4me87TAem9fWXRfn3HBtZ689Tj3KEfCMsL4mIkaTcCGiajqn0fsFJTTRLBDshxq%2B1xhNXZoJ6pEK7M6vfBLGtfZ9MAlbppEGLWek%2BSu4U%2Bm1VI9IX6LqSPvy3QMGN7xaqyYAeeD8bNgrPWDReEJT0Ln%2FS3LgebmbPxWjZfU5Mo8vnAowl7dR1VYKUgdvR1BpCP1M82k%2B9%2FnECD50uQeNfwU6qcUM%2FVsK3LvSCXdqrD5T0yIPjyPc88IhvJDTxftGOAaj8yJWm5KyEhXx6rt83k5hos09eiEBA8KIyNotLXS6Zc%2Fv%2BKI7nW2xXQXpSzA5AHzEnhZnHfrD8mzkb0bAvkPNhNPSBaL7syiTRU78yIDD%2Fk4LvcuAhach5k%2FKl0PDT6zt1e432P%2BZ4cT4La93Q2xlyO89otXsg%2FZAxmnqNMRberIA%2BeVe743mR%2F1DRSBsjFWsuy2hIesm5Tupt2t5xN%2BEcoyZGb4wktulpHcJxTCFCle3CZQJb8OnmH%2BaYUNqJdF44O1QJrra9psGnlfrOONXqRRzDb52yBqSFctEYkybdudelhf9GUPZwsE26bGTP7Yu07c8mmg8wYaYJG1wsBIwfwUxP1VA6CiO1gDv4LHBYDlsHwwh8X4vAY6pgFlu4XujkYj2bf0iOcEtcjBWxPIF506OI7D5yWPrEAFmT%2B0au2BYYAIqu%2B%2F6jWhP5S5NplsS%2FTUpg%2BkLLogqFppwpM9tc15h3lGnIHBMQefC2rw2u7J4X5AnB7kERB1VCiDOP0XEI70z84D5RdfOQVKIsVAtE0TzDWT0tcvhvsQxhY3AsjtTAICxY7flSWpB01XBoN5y9NzlhkkBoj0%2F7dQ8dtzL3aX&X-Amz-Signature=e14e26fb0e8a0afa922e876de264d35aad8f0c3582a0f6a9a76b0643fe3108ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3PFRSG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgX03N%2BaHI1V3GGM6gINarojgO%2FqSluP75XVYBmmtMrAiBiGbpsrXjsqTHFAb51gduLxqPuxhSj62hTmH9rnF6cfSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2XML0O%2FnFjkXYhawKtwDzLwkAfxOW4me87TAem9fWXRfn3HBtZ689Tj3KEfCMsL4mIkaTcCGiajqn0fsFJTTRLBDshxq%2B1xhNXZoJ6pEK7M6vfBLGtfZ9MAlbppEGLWek%2BSu4U%2Bm1VI9IX6LqSPvy3QMGN7xaqyYAeeD8bNgrPWDReEJT0Ln%2FS3LgebmbPxWjZfU5Mo8vnAowl7dR1VYKUgdvR1BpCP1M82k%2B9%2FnECD50uQeNfwU6qcUM%2FVsK3LvSCXdqrD5T0yIPjyPc88IhvJDTxftGOAaj8yJWm5KyEhXx6rt83k5hos09eiEBA8KIyNotLXS6Zc%2Fv%2BKI7nW2xXQXpSzA5AHzEnhZnHfrD8mzkb0bAvkPNhNPSBaL7syiTRU78yIDD%2Fk4LvcuAhach5k%2FKl0PDT6zt1e432P%2BZ4cT4La93Q2xlyO89otXsg%2FZAxmnqNMRberIA%2BeVe743mR%2F1DRSBsjFWsuy2hIesm5Tupt2t5xN%2BEcoyZGb4wktulpHcJxTCFCle3CZQJb8OnmH%2BaYUNqJdF44O1QJrra9psGnlfrOONXqRRzDb52yBqSFctEYkybdudelhf9GUPZwsE26bGTP7Yu07c8mmg8wYaYJG1wsBIwfwUxP1VA6CiO1gDv4LHBYDlsHwwh8X4vAY6pgFlu4XujkYj2bf0iOcEtcjBWxPIF506OI7D5yWPrEAFmT%2B0au2BYYAIqu%2B%2F6jWhP5S5NplsS%2FTUpg%2BkLLogqFppwpM9tc15h3lGnIHBMQefC2rw2u7J4X5AnB7kERB1VCiDOP0XEI70z84D5RdfOQVKIsVAtE0TzDWT0tcvhvsQxhY3AsjtTAICxY7flSWpB01XBoN5y9NzlhkkBoj0%2F7dQ8dtzL3aX&X-Amz-Signature=97adc1c702369f07769bf4c0f3d910121e038227ca79b86e44cc0670e5a2a16c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3PFRSG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgX03N%2BaHI1V3GGM6gINarojgO%2FqSluP75XVYBmmtMrAiBiGbpsrXjsqTHFAb51gduLxqPuxhSj62hTmH9rnF6cfSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2XML0O%2FnFjkXYhawKtwDzLwkAfxOW4me87TAem9fWXRfn3HBtZ689Tj3KEfCMsL4mIkaTcCGiajqn0fsFJTTRLBDshxq%2B1xhNXZoJ6pEK7M6vfBLGtfZ9MAlbppEGLWek%2BSu4U%2Bm1VI9IX6LqSPvy3QMGN7xaqyYAeeD8bNgrPWDReEJT0Ln%2FS3LgebmbPxWjZfU5Mo8vnAowl7dR1VYKUgdvR1BpCP1M82k%2B9%2FnECD50uQeNfwU6qcUM%2FVsK3LvSCXdqrD5T0yIPjyPc88IhvJDTxftGOAaj8yJWm5KyEhXx6rt83k5hos09eiEBA8KIyNotLXS6Zc%2Fv%2BKI7nW2xXQXpSzA5AHzEnhZnHfrD8mzkb0bAvkPNhNPSBaL7syiTRU78yIDD%2Fk4LvcuAhach5k%2FKl0PDT6zt1e432P%2BZ4cT4La93Q2xlyO89otXsg%2FZAxmnqNMRberIA%2BeVe743mR%2F1DRSBsjFWsuy2hIesm5Tupt2t5xN%2BEcoyZGb4wktulpHcJxTCFCle3CZQJb8OnmH%2BaYUNqJdF44O1QJrra9psGnlfrOONXqRRzDb52yBqSFctEYkybdudelhf9GUPZwsE26bGTP7Yu07c8mmg8wYaYJG1wsBIwfwUxP1VA6CiO1gDv4LHBYDlsHwwh8X4vAY6pgFlu4XujkYj2bf0iOcEtcjBWxPIF506OI7D5yWPrEAFmT%2B0au2BYYAIqu%2B%2F6jWhP5S5NplsS%2FTUpg%2BkLLogqFppwpM9tc15h3lGnIHBMQefC2rw2u7J4X5AnB7kERB1VCiDOP0XEI70z84D5RdfOQVKIsVAtE0TzDWT0tcvhvsQxhY3AsjtTAICxY7flSWpB01XBoN5y9NzlhkkBoj0%2F7dQ8dtzL3aX&X-Amz-Signature=c5df1d5946d92264f37ea2aa125ed8c5d213dbe516d6328d566426843897a914&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3PFRSG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgX03N%2BaHI1V3GGM6gINarojgO%2FqSluP75XVYBmmtMrAiBiGbpsrXjsqTHFAb51gduLxqPuxhSj62hTmH9rnF6cfSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2XML0O%2FnFjkXYhawKtwDzLwkAfxOW4me87TAem9fWXRfn3HBtZ689Tj3KEfCMsL4mIkaTcCGiajqn0fsFJTTRLBDshxq%2B1xhNXZoJ6pEK7M6vfBLGtfZ9MAlbppEGLWek%2BSu4U%2Bm1VI9IX6LqSPvy3QMGN7xaqyYAeeD8bNgrPWDReEJT0Ln%2FS3LgebmbPxWjZfU5Mo8vnAowl7dR1VYKUgdvR1BpCP1M82k%2B9%2FnECD50uQeNfwU6qcUM%2FVsK3LvSCXdqrD5T0yIPjyPc88IhvJDTxftGOAaj8yJWm5KyEhXx6rt83k5hos09eiEBA8KIyNotLXS6Zc%2Fv%2BKI7nW2xXQXpSzA5AHzEnhZnHfrD8mzkb0bAvkPNhNPSBaL7syiTRU78yIDD%2Fk4LvcuAhach5k%2FKl0PDT6zt1e432P%2BZ4cT4La93Q2xlyO89otXsg%2FZAxmnqNMRberIA%2BeVe743mR%2F1DRSBsjFWsuy2hIesm5Tupt2t5xN%2BEcoyZGb4wktulpHcJxTCFCle3CZQJb8OnmH%2BaYUNqJdF44O1QJrra9psGnlfrOONXqRRzDb52yBqSFctEYkybdudelhf9GUPZwsE26bGTP7Yu07c8mmg8wYaYJG1wsBIwfwUxP1VA6CiO1gDv4LHBYDlsHwwh8X4vAY6pgFlu4XujkYj2bf0iOcEtcjBWxPIF506OI7D5yWPrEAFmT%2B0au2BYYAIqu%2B%2F6jWhP5S5NplsS%2FTUpg%2BkLLogqFppwpM9tc15h3lGnIHBMQefC2rw2u7J4X5AnB7kERB1VCiDOP0XEI70z84D5RdfOQVKIsVAtE0TzDWT0tcvhvsQxhY3AsjtTAICxY7flSWpB01XBoN5y9NzlhkkBoj0%2F7dQ8dtzL3aX&X-Amz-Signature=f9618c38634738a01061a03f7f73e5741e3c8ad9d8c3e3cfc36e169a725f4bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3PFRSG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgX03N%2BaHI1V3GGM6gINarojgO%2FqSluP75XVYBmmtMrAiBiGbpsrXjsqTHFAb51gduLxqPuxhSj62hTmH9rnF6cfSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2XML0O%2FnFjkXYhawKtwDzLwkAfxOW4me87TAem9fWXRfn3HBtZ689Tj3KEfCMsL4mIkaTcCGiajqn0fsFJTTRLBDshxq%2B1xhNXZoJ6pEK7M6vfBLGtfZ9MAlbppEGLWek%2BSu4U%2Bm1VI9IX6LqSPvy3QMGN7xaqyYAeeD8bNgrPWDReEJT0Ln%2FS3LgebmbPxWjZfU5Mo8vnAowl7dR1VYKUgdvR1BpCP1M82k%2B9%2FnECD50uQeNfwU6qcUM%2FVsK3LvSCXdqrD5T0yIPjyPc88IhvJDTxftGOAaj8yJWm5KyEhXx6rt83k5hos09eiEBA8KIyNotLXS6Zc%2Fv%2BKI7nW2xXQXpSzA5AHzEnhZnHfrD8mzkb0bAvkPNhNPSBaL7syiTRU78yIDD%2Fk4LvcuAhach5k%2FKl0PDT6zt1e432P%2BZ4cT4La93Q2xlyO89otXsg%2FZAxmnqNMRberIA%2BeVe743mR%2F1DRSBsjFWsuy2hIesm5Tupt2t5xN%2BEcoyZGb4wktulpHcJxTCFCle3CZQJb8OnmH%2BaYUNqJdF44O1QJrra9psGnlfrOONXqRRzDb52yBqSFctEYkybdudelhf9GUPZwsE26bGTP7Yu07c8mmg8wYaYJG1wsBIwfwUxP1VA6CiO1gDv4LHBYDlsHwwh8X4vAY6pgFlu4XujkYj2bf0iOcEtcjBWxPIF506OI7D5yWPrEAFmT%2B0au2BYYAIqu%2B%2F6jWhP5S5NplsS%2FTUpg%2BkLLogqFppwpM9tc15h3lGnIHBMQefC2rw2u7J4X5AnB7kERB1VCiDOP0XEI70z84D5RdfOQVKIsVAtE0TzDWT0tcvhvsQxhY3AsjtTAICxY7flSWpB01XBoN5y9NzlhkkBoj0%2F7dQ8dtzL3aX&X-Amz-Signature=f6acd61f1db9fd9d2dca9cda3b6b4c8edbb0abe4769540e48cad5fb37bc603df&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA3PFRSG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgX03N%2BaHI1V3GGM6gINarojgO%2FqSluP75XVYBmmtMrAiBiGbpsrXjsqTHFAb51gduLxqPuxhSj62hTmH9rnF6cfSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2XML0O%2FnFjkXYhawKtwDzLwkAfxOW4me87TAem9fWXRfn3HBtZ689Tj3KEfCMsL4mIkaTcCGiajqn0fsFJTTRLBDshxq%2B1xhNXZoJ6pEK7M6vfBLGtfZ9MAlbppEGLWek%2BSu4U%2Bm1VI9IX6LqSPvy3QMGN7xaqyYAeeD8bNgrPWDReEJT0Ln%2FS3LgebmbPxWjZfU5Mo8vnAowl7dR1VYKUgdvR1BpCP1M82k%2B9%2FnECD50uQeNfwU6qcUM%2FVsK3LvSCXdqrD5T0yIPjyPc88IhvJDTxftGOAaj8yJWm5KyEhXx6rt83k5hos09eiEBA8KIyNotLXS6Zc%2Fv%2BKI7nW2xXQXpSzA5AHzEnhZnHfrD8mzkb0bAvkPNhNPSBaL7syiTRU78yIDD%2Fk4LvcuAhach5k%2FKl0PDT6zt1e432P%2BZ4cT4La93Q2xlyO89otXsg%2FZAxmnqNMRberIA%2BeVe743mR%2F1DRSBsjFWsuy2hIesm5Tupt2t5xN%2BEcoyZGb4wktulpHcJxTCFCle3CZQJb8OnmH%2BaYUNqJdF44O1QJrra9psGnlfrOONXqRRzDb52yBqSFctEYkybdudelhf9GUPZwsE26bGTP7Yu07c8mmg8wYaYJG1wsBIwfwUxP1VA6CiO1gDv4LHBYDlsHwwh8X4vAY6pgFlu4XujkYj2bf0iOcEtcjBWxPIF506OI7D5yWPrEAFmT%2B0au2BYYAIqu%2B%2F6jWhP5S5NplsS%2FTUpg%2BkLLogqFppwpM9tc15h3lGnIHBMQefC2rw2u7J4X5AnB7kERB1VCiDOP0XEI70z84D5RdfOQVKIsVAtE0TzDWT0tcvhvsQxhY3AsjtTAICxY7flSWpB01XBoN5y9NzlhkkBoj0%2F7dQ8dtzL3aX&X-Amz-Signature=779c0415ffdce1a6e0ed98c3505dbe538635acec0ec813b85c6205858ad032dc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
