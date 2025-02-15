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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMZV5KG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCID5zsANgtV6dmlAci9q6uFyUOiev4t0hgrOS3xzlL9bdAiEAwDMO%2BlxmO82xc0jqac5Y5ZaEEbJxZVsdl3rl41972qoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGVXYDRqhxT%2BZeLRtyrcA60EGiUbMtYHTogpX3pRA5ommKKSrBhLo7yicY46xZuaFJOKrqN4xnBSQ9rnNua%2F%2FSRGvZO32421V83QjtvODtLRe2xTM%2Fef0ceWdGFDEKK%2Bv6piQFUdBPZtny6nPuc%2BIIDZZ6qK0ThGb6%2BgEvC67Uro1d9ybIbHTrKL%2BVDkRspia50Ss53tqLh982eDB11s6HOS7BdZRz0ubPqXHst65fPbdRIOPHlIb2I0Hjs4uGNcbQ80UWi5m5ybwcKFMWVAzjIEg2rsEstB4UbcxstUanot4l8o2DrTtjXLQUsksNc%2BMYNUSQ9esnUcr8i8tG8dRi3FbpBougMIyWVWedBT22UUHH0%2B1qxVig%2FfcWLq8%2FdsqMjxsUjK%2F09yxw77fDn7EAzJYo6QEdCUAArGx0eZmT3BzqIKuS%2Fv6KXIWJ0ixEPHdRwwp6Lp6biFV00jlDqL7nPSYKBTSUUqsb20TNKdyFukARvJ1iFl1zpayeHPVS7CQ6Y45F5G28Lbqx1x9%2FYOocxO%2Foj6RqTmONGSTMHqjuw7PyKBk1cjKS%2FCwYO7FRAKWAnd5tKKieV2zKoLKDy1PuMArhM0kk%2B4Qkl8de9Omm%2FEtt3BWj7hbuX4wjBDmH9tSxb66DZYF9maln76MPOzv70GOqUB6kYdNt6VIwsVrYcs1jWsU0KHw%2Bn4E5HLkMTbzT7rqzL0JJPGfPm2AdeeHSJ3C6o7GuEU14noqHrG4QHYPJb2F0t393Hafnwau6ztXpEv0EsAZa6GX3Xo0Wo7vJB2n0Zi%2BZYJIWpXcofQcwJvAO%2B%2FQH6E2M1FY%2BQ27EWK0L%2F5emTMdFGqByNSddnZfVlAN5gwxEOcu9APqubhW2ke9XCXQRen5PS0&X-Amz-Signature=e377b41807ecee59a0d9de1557fafa95e76ac8b5e1cb922a38c61dfb9274ef49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMZV5KG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCID5zsANgtV6dmlAci9q6uFyUOiev4t0hgrOS3xzlL9bdAiEAwDMO%2BlxmO82xc0jqac5Y5ZaEEbJxZVsdl3rl41972qoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGVXYDRqhxT%2BZeLRtyrcA60EGiUbMtYHTogpX3pRA5ommKKSrBhLo7yicY46xZuaFJOKrqN4xnBSQ9rnNua%2F%2FSRGvZO32421V83QjtvODtLRe2xTM%2Fef0ceWdGFDEKK%2Bv6piQFUdBPZtny6nPuc%2BIIDZZ6qK0ThGb6%2BgEvC67Uro1d9ybIbHTrKL%2BVDkRspia50Ss53tqLh982eDB11s6HOS7BdZRz0ubPqXHst65fPbdRIOPHlIb2I0Hjs4uGNcbQ80UWi5m5ybwcKFMWVAzjIEg2rsEstB4UbcxstUanot4l8o2DrTtjXLQUsksNc%2BMYNUSQ9esnUcr8i8tG8dRi3FbpBougMIyWVWedBT22UUHH0%2B1qxVig%2FfcWLq8%2FdsqMjxsUjK%2F09yxw77fDn7EAzJYo6QEdCUAArGx0eZmT3BzqIKuS%2Fv6KXIWJ0ixEPHdRwwp6Lp6biFV00jlDqL7nPSYKBTSUUqsb20TNKdyFukARvJ1iFl1zpayeHPVS7CQ6Y45F5G28Lbqx1x9%2FYOocxO%2Foj6RqTmONGSTMHqjuw7PyKBk1cjKS%2FCwYO7FRAKWAnd5tKKieV2zKoLKDy1PuMArhM0kk%2B4Qkl8de9Omm%2FEtt3BWj7hbuX4wjBDmH9tSxb66DZYF9maln76MPOzv70GOqUB6kYdNt6VIwsVrYcs1jWsU0KHw%2Bn4E5HLkMTbzT7rqzL0JJPGfPm2AdeeHSJ3C6o7GuEU14noqHrG4QHYPJb2F0t393Hafnwau6ztXpEv0EsAZa6GX3Xo0Wo7vJB2n0Zi%2BZYJIWpXcofQcwJvAO%2B%2FQH6E2M1FY%2BQ27EWK0L%2F5emTMdFGqByNSddnZfVlAN5gwxEOcu9APqubhW2ke9XCXQRen5PS0&X-Amz-Signature=ce5c85c465003ae7b8eb58ea38e4ca505d43a32ed67e172c6bc02e3e419efebd&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMZV5KG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCID5zsANgtV6dmlAci9q6uFyUOiev4t0hgrOS3xzlL9bdAiEAwDMO%2BlxmO82xc0jqac5Y5ZaEEbJxZVsdl3rl41972qoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGVXYDRqhxT%2BZeLRtyrcA60EGiUbMtYHTogpX3pRA5ommKKSrBhLo7yicY46xZuaFJOKrqN4xnBSQ9rnNua%2F%2FSRGvZO32421V83QjtvODtLRe2xTM%2Fef0ceWdGFDEKK%2Bv6piQFUdBPZtny6nPuc%2BIIDZZ6qK0ThGb6%2BgEvC67Uro1d9ybIbHTrKL%2BVDkRspia50Ss53tqLh982eDB11s6HOS7BdZRz0ubPqXHst65fPbdRIOPHlIb2I0Hjs4uGNcbQ80UWi5m5ybwcKFMWVAzjIEg2rsEstB4UbcxstUanot4l8o2DrTtjXLQUsksNc%2BMYNUSQ9esnUcr8i8tG8dRi3FbpBougMIyWVWedBT22UUHH0%2B1qxVig%2FfcWLq8%2FdsqMjxsUjK%2F09yxw77fDn7EAzJYo6QEdCUAArGx0eZmT3BzqIKuS%2Fv6KXIWJ0ixEPHdRwwp6Lp6biFV00jlDqL7nPSYKBTSUUqsb20TNKdyFukARvJ1iFl1zpayeHPVS7CQ6Y45F5G28Lbqx1x9%2FYOocxO%2Foj6RqTmONGSTMHqjuw7PyKBk1cjKS%2FCwYO7FRAKWAnd5tKKieV2zKoLKDy1PuMArhM0kk%2B4Qkl8de9Omm%2FEtt3BWj7hbuX4wjBDmH9tSxb66DZYF9maln76MPOzv70GOqUB6kYdNt6VIwsVrYcs1jWsU0KHw%2Bn4E5HLkMTbzT7rqzL0JJPGfPm2AdeeHSJ3C6o7GuEU14noqHrG4QHYPJb2F0t393Hafnwau6ztXpEv0EsAZa6GX3Xo0Wo7vJB2n0Zi%2BZYJIWpXcofQcwJvAO%2B%2FQH6E2M1FY%2BQ27EWK0L%2F5emTMdFGqByNSddnZfVlAN5gwxEOcu9APqubhW2ke9XCXQRen5PS0&X-Amz-Signature=df32a4afaea6642984141aab14df6cfdb122c28d69452d3fd32ffec95fa3fc0c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMZV5KG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCID5zsANgtV6dmlAci9q6uFyUOiev4t0hgrOS3xzlL9bdAiEAwDMO%2BlxmO82xc0jqac5Y5ZaEEbJxZVsdl3rl41972qoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGVXYDRqhxT%2BZeLRtyrcA60EGiUbMtYHTogpX3pRA5ommKKSrBhLo7yicY46xZuaFJOKrqN4xnBSQ9rnNua%2F%2FSRGvZO32421V83QjtvODtLRe2xTM%2Fef0ceWdGFDEKK%2Bv6piQFUdBPZtny6nPuc%2BIIDZZ6qK0ThGb6%2BgEvC67Uro1d9ybIbHTrKL%2BVDkRspia50Ss53tqLh982eDB11s6HOS7BdZRz0ubPqXHst65fPbdRIOPHlIb2I0Hjs4uGNcbQ80UWi5m5ybwcKFMWVAzjIEg2rsEstB4UbcxstUanot4l8o2DrTtjXLQUsksNc%2BMYNUSQ9esnUcr8i8tG8dRi3FbpBougMIyWVWedBT22UUHH0%2B1qxVig%2FfcWLq8%2FdsqMjxsUjK%2F09yxw77fDn7EAzJYo6QEdCUAArGx0eZmT3BzqIKuS%2Fv6KXIWJ0ixEPHdRwwp6Lp6biFV00jlDqL7nPSYKBTSUUqsb20TNKdyFukARvJ1iFl1zpayeHPVS7CQ6Y45F5G28Lbqx1x9%2FYOocxO%2Foj6RqTmONGSTMHqjuw7PyKBk1cjKS%2FCwYO7FRAKWAnd5tKKieV2zKoLKDy1PuMArhM0kk%2B4Qkl8de9Omm%2FEtt3BWj7hbuX4wjBDmH9tSxb66DZYF9maln76MPOzv70GOqUB6kYdNt6VIwsVrYcs1jWsU0KHw%2Bn4E5HLkMTbzT7rqzL0JJPGfPm2AdeeHSJ3C6o7GuEU14noqHrG4QHYPJb2F0t393Hafnwau6ztXpEv0EsAZa6GX3Xo0Wo7vJB2n0Zi%2BZYJIWpXcofQcwJvAO%2B%2FQH6E2M1FY%2BQ27EWK0L%2F5emTMdFGqByNSddnZfVlAN5gwxEOcu9APqubhW2ke9XCXQRen5PS0&X-Amz-Signature=d82165b1fcc61f086dcbbe596c6d96e1b3929a5220a65da3c67b021c4155468c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMZV5KG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCID5zsANgtV6dmlAci9q6uFyUOiev4t0hgrOS3xzlL9bdAiEAwDMO%2BlxmO82xc0jqac5Y5ZaEEbJxZVsdl3rl41972qoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGVXYDRqhxT%2BZeLRtyrcA60EGiUbMtYHTogpX3pRA5ommKKSrBhLo7yicY46xZuaFJOKrqN4xnBSQ9rnNua%2F%2FSRGvZO32421V83QjtvODtLRe2xTM%2Fef0ceWdGFDEKK%2Bv6piQFUdBPZtny6nPuc%2BIIDZZ6qK0ThGb6%2BgEvC67Uro1d9ybIbHTrKL%2BVDkRspia50Ss53tqLh982eDB11s6HOS7BdZRz0ubPqXHst65fPbdRIOPHlIb2I0Hjs4uGNcbQ80UWi5m5ybwcKFMWVAzjIEg2rsEstB4UbcxstUanot4l8o2DrTtjXLQUsksNc%2BMYNUSQ9esnUcr8i8tG8dRi3FbpBougMIyWVWedBT22UUHH0%2B1qxVig%2FfcWLq8%2FdsqMjxsUjK%2F09yxw77fDn7EAzJYo6QEdCUAArGx0eZmT3BzqIKuS%2Fv6KXIWJ0ixEPHdRwwp6Lp6biFV00jlDqL7nPSYKBTSUUqsb20TNKdyFukARvJ1iFl1zpayeHPVS7CQ6Y45F5G28Lbqx1x9%2FYOocxO%2Foj6RqTmONGSTMHqjuw7PyKBk1cjKS%2FCwYO7FRAKWAnd5tKKieV2zKoLKDy1PuMArhM0kk%2B4Qkl8de9Omm%2FEtt3BWj7hbuX4wjBDmH9tSxb66DZYF9maln76MPOzv70GOqUB6kYdNt6VIwsVrYcs1jWsU0KHw%2Bn4E5HLkMTbzT7rqzL0JJPGfPm2AdeeHSJ3C6o7GuEU14noqHrG4QHYPJb2F0t393Hafnwau6ztXpEv0EsAZa6GX3Xo0Wo7vJB2n0Zi%2BZYJIWpXcofQcwJvAO%2B%2FQH6E2M1FY%2BQ27EWK0L%2F5emTMdFGqByNSddnZfVlAN5gwxEOcu9APqubhW2ke9XCXQRen5PS0&X-Amz-Signature=29da356deef2fd6beb2da437142d3e37c6d1020a82623db78bf1474a2a05661e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMZV5KG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCID5zsANgtV6dmlAci9q6uFyUOiev4t0hgrOS3xzlL9bdAiEAwDMO%2BlxmO82xc0jqac5Y5ZaEEbJxZVsdl3rl41972qoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGVXYDRqhxT%2BZeLRtyrcA60EGiUbMtYHTogpX3pRA5ommKKSrBhLo7yicY46xZuaFJOKrqN4xnBSQ9rnNua%2F%2FSRGvZO32421V83QjtvODtLRe2xTM%2Fef0ceWdGFDEKK%2Bv6piQFUdBPZtny6nPuc%2BIIDZZ6qK0ThGb6%2BgEvC67Uro1d9ybIbHTrKL%2BVDkRspia50Ss53tqLh982eDB11s6HOS7BdZRz0ubPqXHst65fPbdRIOPHlIb2I0Hjs4uGNcbQ80UWi5m5ybwcKFMWVAzjIEg2rsEstB4UbcxstUanot4l8o2DrTtjXLQUsksNc%2BMYNUSQ9esnUcr8i8tG8dRi3FbpBougMIyWVWedBT22UUHH0%2B1qxVig%2FfcWLq8%2FdsqMjxsUjK%2F09yxw77fDn7EAzJYo6QEdCUAArGx0eZmT3BzqIKuS%2Fv6KXIWJ0ixEPHdRwwp6Lp6biFV00jlDqL7nPSYKBTSUUqsb20TNKdyFukARvJ1iFl1zpayeHPVS7CQ6Y45F5G28Lbqx1x9%2FYOocxO%2Foj6RqTmONGSTMHqjuw7PyKBk1cjKS%2FCwYO7FRAKWAnd5tKKieV2zKoLKDy1PuMArhM0kk%2B4Qkl8de9Omm%2FEtt3BWj7hbuX4wjBDmH9tSxb66DZYF9maln76MPOzv70GOqUB6kYdNt6VIwsVrYcs1jWsU0KHw%2Bn4E5HLkMTbzT7rqzL0JJPGfPm2AdeeHSJ3C6o7GuEU14noqHrG4QHYPJb2F0t393Hafnwau6ztXpEv0EsAZa6GX3Xo0Wo7vJB2n0Zi%2BZYJIWpXcofQcwJvAO%2B%2FQH6E2M1FY%2BQ27EWK0L%2F5emTMdFGqByNSddnZfVlAN5gwxEOcu9APqubhW2ke9XCXQRen5PS0&X-Amz-Signature=66654b97239e61e550ecc5765faf6daa2b4df2fb7aef7a8681931bad08419a64&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HMZV5KG%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCID5zsANgtV6dmlAci9q6uFyUOiev4t0hgrOS3xzlL9bdAiEAwDMO%2BlxmO82xc0jqac5Y5ZaEEbJxZVsdl3rl41972qoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGVXYDRqhxT%2BZeLRtyrcA60EGiUbMtYHTogpX3pRA5ommKKSrBhLo7yicY46xZuaFJOKrqN4xnBSQ9rnNua%2F%2FSRGvZO32421V83QjtvODtLRe2xTM%2Fef0ceWdGFDEKK%2Bv6piQFUdBPZtny6nPuc%2BIIDZZ6qK0ThGb6%2BgEvC67Uro1d9ybIbHTrKL%2BVDkRspia50Ss53tqLh982eDB11s6HOS7BdZRz0ubPqXHst65fPbdRIOPHlIb2I0Hjs4uGNcbQ80UWi5m5ybwcKFMWVAzjIEg2rsEstB4UbcxstUanot4l8o2DrTtjXLQUsksNc%2BMYNUSQ9esnUcr8i8tG8dRi3FbpBougMIyWVWedBT22UUHH0%2B1qxVig%2FfcWLq8%2FdsqMjxsUjK%2F09yxw77fDn7EAzJYo6QEdCUAArGx0eZmT3BzqIKuS%2Fv6KXIWJ0ixEPHdRwwp6Lp6biFV00jlDqL7nPSYKBTSUUqsb20TNKdyFukARvJ1iFl1zpayeHPVS7CQ6Y45F5G28Lbqx1x9%2FYOocxO%2Foj6RqTmONGSTMHqjuw7PyKBk1cjKS%2FCwYO7FRAKWAnd5tKKieV2zKoLKDy1PuMArhM0kk%2B4Qkl8de9Omm%2FEtt3BWj7hbuX4wjBDmH9tSxb66DZYF9maln76MPOzv70GOqUB6kYdNt6VIwsVrYcs1jWsU0KHw%2Bn4E5HLkMTbzT7rqzL0JJPGfPm2AdeeHSJ3C6o7GuEU14noqHrG4QHYPJb2F0t393Hafnwau6ztXpEv0EsAZa6GX3Xo0Wo7vJB2n0Zi%2BZYJIWpXcofQcwJvAO%2B%2FQH6E2M1FY%2BQ27EWK0L%2F5emTMdFGqByNSddnZfVlAN5gwxEOcu9APqubhW2ke9XCXQRen5PS0&X-Amz-Signature=905f3db2786c69a77799ef6b265a9b9a7bbc16aa8f3ffda530c6b27d09733c33&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
