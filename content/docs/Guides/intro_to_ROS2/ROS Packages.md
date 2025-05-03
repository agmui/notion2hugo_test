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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4CCPEE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkpx3uPnX5b%2Bpgahl0xcfBdlEePRAQFx5euzzX33U7xgIgHUAqZaAvUSqkq0vM7%2FXIlUy49hUF0v%2BKX2pesn0ZuTcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOTU4O6tKILTJ6TQyrcA73L7zaVpHolQ%2BgpTQzBwL8zxgScQqqemFbBVCWKrdw8Z1LYAkMlNks9g%2B%2FnHgMCxRNBlNN5NN%2BXpxpmdMaD%2BN3O8Bru4NezR%2BuaSYMS5SwEp7bgKaYlwK4WvRDl2kb6iWRInqiaSXrqYCowSHjeIi3Oh5ruba3BRphA1nfVzRD%2BA9TMDM%2FqBumgIviDIlKOKb6ji5AFs0sggqhqwhNX5Ec2071wq%2FyvAab2tix92Ph2UD%2BkSGCdnflfAESGwe%2FPMiOrS2XKiJB0Jr9I4QqRDAhJbkl4kG9QOWS1jdbCwwAmZpQVRuFHqnb8Ou8kEcRa21WjVo1MbJ9MAXpDW388n9kk9e%2BKHVZrYNxQaNNZtSjzxDIRlN9ODasTUVE5FA22iYboomVwb2B6lQlP1iREZoV8g%2Fi4zucCxxek7D3J08qXf%2BScpngop1BvGL36gNHdODb4%2FSJoCSsmbq8x7S9Y6D%2F2FtkplitPn11wGD7p1JVw8EqdpXIqhuh9igak0L3%2BivsXkTzCrxySBGBjVH9SNsGHf2WU0Ob69bg6Oo5%2BTB8kNKGun0zAHbrpVeZNWM8tRKXrD4giOAx1wjIrtS7TLCKBBzNdry8R%2BXAXBDXB%2F%2FT689WUFAqdxbBojgrOMOWG1sAGOqUBOMiMHzLW2cvGz4lErjpiDkuhKV%2FQyOWF%2BuXO%2BfP1663wC0C5M3l00C%2FSoN%2FLKR2cDenhYqm%2Bx7fOtccVq8BGUqzU8ijsSYviD1JBYQhPtMaMSWtBxCLWO60WfqxNXGbjedKuNCVvHdLgHNW9fRPoj%2BxtX66AiOf9A0GR9aTFDnbGceOnhUU3ztEJHx1M063BH5IZeE0PRCOf6964DpqhnrkLGt2K&X-Amz-Signature=dbd838de8f6acbdeda6425afab3975debc9b54a80e9b860980a33236058947b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4CCPEE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkpx3uPnX5b%2Bpgahl0xcfBdlEePRAQFx5euzzX33U7xgIgHUAqZaAvUSqkq0vM7%2FXIlUy49hUF0v%2BKX2pesn0ZuTcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOTU4O6tKILTJ6TQyrcA73L7zaVpHolQ%2BgpTQzBwL8zxgScQqqemFbBVCWKrdw8Z1LYAkMlNks9g%2B%2FnHgMCxRNBlNN5NN%2BXpxpmdMaD%2BN3O8Bru4NezR%2BuaSYMS5SwEp7bgKaYlwK4WvRDl2kb6iWRInqiaSXrqYCowSHjeIi3Oh5ruba3BRphA1nfVzRD%2BA9TMDM%2FqBumgIviDIlKOKb6ji5AFs0sggqhqwhNX5Ec2071wq%2FyvAab2tix92Ph2UD%2BkSGCdnflfAESGwe%2FPMiOrS2XKiJB0Jr9I4QqRDAhJbkl4kG9QOWS1jdbCwwAmZpQVRuFHqnb8Ou8kEcRa21WjVo1MbJ9MAXpDW388n9kk9e%2BKHVZrYNxQaNNZtSjzxDIRlN9ODasTUVE5FA22iYboomVwb2B6lQlP1iREZoV8g%2Fi4zucCxxek7D3J08qXf%2BScpngop1BvGL36gNHdODb4%2FSJoCSsmbq8x7S9Y6D%2F2FtkplitPn11wGD7p1JVw8EqdpXIqhuh9igak0L3%2BivsXkTzCrxySBGBjVH9SNsGHf2WU0Ob69bg6Oo5%2BTB8kNKGun0zAHbrpVeZNWM8tRKXrD4giOAx1wjIrtS7TLCKBBzNdry8R%2BXAXBDXB%2F%2FT689WUFAqdxbBojgrOMOWG1sAGOqUBOMiMHzLW2cvGz4lErjpiDkuhKV%2FQyOWF%2BuXO%2BfP1663wC0C5M3l00C%2FSoN%2FLKR2cDenhYqm%2Bx7fOtccVq8BGUqzU8ijsSYviD1JBYQhPtMaMSWtBxCLWO60WfqxNXGbjedKuNCVvHdLgHNW9fRPoj%2BxtX66AiOf9A0GR9aTFDnbGceOnhUU3ztEJHx1M063BH5IZeE0PRCOf6964DpqhnrkLGt2K&X-Amz-Signature=261139f78878c1386d65314cd2a372b5b602fb0e1d695a68b750e2f908104e11&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4CCPEE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkpx3uPnX5b%2Bpgahl0xcfBdlEePRAQFx5euzzX33U7xgIgHUAqZaAvUSqkq0vM7%2FXIlUy49hUF0v%2BKX2pesn0ZuTcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOTU4O6tKILTJ6TQyrcA73L7zaVpHolQ%2BgpTQzBwL8zxgScQqqemFbBVCWKrdw8Z1LYAkMlNks9g%2B%2FnHgMCxRNBlNN5NN%2BXpxpmdMaD%2BN3O8Bru4NezR%2BuaSYMS5SwEp7bgKaYlwK4WvRDl2kb6iWRInqiaSXrqYCowSHjeIi3Oh5ruba3BRphA1nfVzRD%2BA9TMDM%2FqBumgIviDIlKOKb6ji5AFs0sggqhqwhNX5Ec2071wq%2FyvAab2tix92Ph2UD%2BkSGCdnflfAESGwe%2FPMiOrS2XKiJB0Jr9I4QqRDAhJbkl4kG9QOWS1jdbCwwAmZpQVRuFHqnb8Ou8kEcRa21WjVo1MbJ9MAXpDW388n9kk9e%2BKHVZrYNxQaNNZtSjzxDIRlN9ODasTUVE5FA22iYboomVwb2B6lQlP1iREZoV8g%2Fi4zucCxxek7D3J08qXf%2BScpngop1BvGL36gNHdODb4%2FSJoCSsmbq8x7S9Y6D%2F2FtkplitPn11wGD7p1JVw8EqdpXIqhuh9igak0L3%2BivsXkTzCrxySBGBjVH9SNsGHf2WU0Ob69bg6Oo5%2BTB8kNKGun0zAHbrpVeZNWM8tRKXrD4giOAx1wjIrtS7TLCKBBzNdry8R%2BXAXBDXB%2F%2FT689WUFAqdxbBojgrOMOWG1sAGOqUBOMiMHzLW2cvGz4lErjpiDkuhKV%2FQyOWF%2BuXO%2BfP1663wC0C5M3l00C%2FSoN%2FLKR2cDenhYqm%2Bx7fOtccVq8BGUqzU8ijsSYviD1JBYQhPtMaMSWtBxCLWO60WfqxNXGbjedKuNCVvHdLgHNW9fRPoj%2BxtX66AiOf9A0GR9aTFDnbGceOnhUU3ztEJHx1M063BH5IZeE0PRCOf6964DpqhnrkLGt2K&X-Amz-Signature=b8acd54bbbd06756468568f6a44b82e6a0bd74fe77e5e010194f5784ee36dc3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4CCPEE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkpx3uPnX5b%2Bpgahl0xcfBdlEePRAQFx5euzzX33U7xgIgHUAqZaAvUSqkq0vM7%2FXIlUy49hUF0v%2BKX2pesn0ZuTcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOTU4O6tKILTJ6TQyrcA73L7zaVpHolQ%2BgpTQzBwL8zxgScQqqemFbBVCWKrdw8Z1LYAkMlNks9g%2B%2FnHgMCxRNBlNN5NN%2BXpxpmdMaD%2BN3O8Bru4NezR%2BuaSYMS5SwEp7bgKaYlwK4WvRDl2kb6iWRInqiaSXrqYCowSHjeIi3Oh5ruba3BRphA1nfVzRD%2BA9TMDM%2FqBumgIviDIlKOKb6ji5AFs0sggqhqwhNX5Ec2071wq%2FyvAab2tix92Ph2UD%2BkSGCdnflfAESGwe%2FPMiOrS2XKiJB0Jr9I4QqRDAhJbkl4kG9QOWS1jdbCwwAmZpQVRuFHqnb8Ou8kEcRa21WjVo1MbJ9MAXpDW388n9kk9e%2BKHVZrYNxQaNNZtSjzxDIRlN9ODasTUVE5FA22iYboomVwb2B6lQlP1iREZoV8g%2Fi4zucCxxek7D3J08qXf%2BScpngop1BvGL36gNHdODb4%2FSJoCSsmbq8x7S9Y6D%2F2FtkplitPn11wGD7p1JVw8EqdpXIqhuh9igak0L3%2BivsXkTzCrxySBGBjVH9SNsGHf2WU0Ob69bg6Oo5%2BTB8kNKGun0zAHbrpVeZNWM8tRKXrD4giOAx1wjIrtS7TLCKBBzNdry8R%2BXAXBDXB%2F%2FT689WUFAqdxbBojgrOMOWG1sAGOqUBOMiMHzLW2cvGz4lErjpiDkuhKV%2FQyOWF%2BuXO%2BfP1663wC0C5M3l00C%2FSoN%2FLKR2cDenhYqm%2Bx7fOtccVq8BGUqzU8ijsSYviD1JBYQhPtMaMSWtBxCLWO60WfqxNXGbjedKuNCVvHdLgHNW9fRPoj%2BxtX66AiOf9A0GR9aTFDnbGceOnhUU3ztEJHx1M063BH5IZeE0PRCOf6964DpqhnrkLGt2K&X-Amz-Signature=ac7d7967cdb30f2ea5c64ed61bd1a1b5990c2c18f89dc18ff3ba42113e04828f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4CCPEE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkpx3uPnX5b%2Bpgahl0xcfBdlEePRAQFx5euzzX33U7xgIgHUAqZaAvUSqkq0vM7%2FXIlUy49hUF0v%2BKX2pesn0ZuTcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOTU4O6tKILTJ6TQyrcA73L7zaVpHolQ%2BgpTQzBwL8zxgScQqqemFbBVCWKrdw8Z1LYAkMlNks9g%2B%2FnHgMCxRNBlNN5NN%2BXpxpmdMaD%2BN3O8Bru4NezR%2BuaSYMS5SwEp7bgKaYlwK4WvRDl2kb6iWRInqiaSXrqYCowSHjeIi3Oh5ruba3BRphA1nfVzRD%2BA9TMDM%2FqBumgIviDIlKOKb6ji5AFs0sggqhqwhNX5Ec2071wq%2FyvAab2tix92Ph2UD%2BkSGCdnflfAESGwe%2FPMiOrS2XKiJB0Jr9I4QqRDAhJbkl4kG9QOWS1jdbCwwAmZpQVRuFHqnb8Ou8kEcRa21WjVo1MbJ9MAXpDW388n9kk9e%2BKHVZrYNxQaNNZtSjzxDIRlN9ODasTUVE5FA22iYboomVwb2B6lQlP1iREZoV8g%2Fi4zucCxxek7D3J08qXf%2BScpngop1BvGL36gNHdODb4%2FSJoCSsmbq8x7S9Y6D%2F2FtkplitPn11wGD7p1JVw8EqdpXIqhuh9igak0L3%2BivsXkTzCrxySBGBjVH9SNsGHf2WU0Ob69bg6Oo5%2BTB8kNKGun0zAHbrpVeZNWM8tRKXrD4giOAx1wjIrtS7TLCKBBzNdry8R%2BXAXBDXB%2F%2FT689WUFAqdxbBojgrOMOWG1sAGOqUBOMiMHzLW2cvGz4lErjpiDkuhKV%2FQyOWF%2BuXO%2BfP1663wC0C5M3l00C%2FSoN%2FLKR2cDenhYqm%2Bx7fOtccVq8BGUqzU8ijsSYviD1JBYQhPtMaMSWtBxCLWO60WfqxNXGbjedKuNCVvHdLgHNW9fRPoj%2BxtX66AiOf9A0GR9aTFDnbGceOnhUU3ztEJHx1M063BH5IZeE0PRCOf6964DpqhnrkLGt2K&X-Amz-Signature=c9aa496ad112dd28caae9ed1491645bf0bd887ef952ad0c500341e9ee293e830&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4CCPEE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkpx3uPnX5b%2Bpgahl0xcfBdlEePRAQFx5euzzX33U7xgIgHUAqZaAvUSqkq0vM7%2FXIlUy49hUF0v%2BKX2pesn0ZuTcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOTU4O6tKILTJ6TQyrcA73L7zaVpHolQ%2BgpTQzBwL8zxgScQqqemFbBVCWKrdw8Z1LYAkMlNks9g%2B%2FnHgMCxRNBlNN5NN%2BXpxpmdMaD%2BN3O8Bru4NezR%2BuaSYMS5SwEp7bgKaYlwK4WvRDl2kb6iWRInqiaSXrqYCowSHjeIi3Oh5ruba3BRphA1nfVzRD%2BA9TMDM%2FqBumgIviDIlKOKb6ji5AFs0sggqhqwhNX5Ec2071wq%2FyvAab2tix92Ph2UD%2BkSGCdnflfAESGwe%2FPMiOrS2XKiJB0Jr9I4QqRDAhJbkl4kG9QOWS1jdbCwwAmZpQVRuFHqnb8Ou8kEcRa21WjVo1MbJ9MAXpDW388n9kk9e%2BKHVZrYNxQaNNZtSjzxDIRlN9ODasTUVE5FA22iYboomVwb2B6lQlP1iREZoV8g%2Fi4zucCxxek7D3J08qXf%2BScpngop1BvGL36gNHdODb4%2FSJoCSsmbq8x7S9Y6D%2F2FtkplitPn11wGD7p1JVw8EqdpXIqhuh9igak0L3%2BivsXkTzCrxySBGBjVH9SNsGHf2WU0Ob69bg6Oo5%2BTB8kNKGun0zAHbrpVeZNWM8tRKXrD4giOAx1wjIrtS7TLCKBBzNdry8R%2BXAXBDXB%2F%2FT689WUFAqdxbBojgrOMOWG1sAGOqUBOMiMHzLW2cvGz4lErjpiDkuhKV%2FQyOWF%2BuXO%2BfP1663wC0C5M3l00C%2FSoN%2FLKR2cDenhYqm%2Bx7fOtccVq8BGUqzU8ijsSYviD1JBYQhPtMaMSWtBxCLWO60WfqxNXGbjedKuNCVvHdLgHNW9fRPoj%2BxtX66AiOf9A0GR9aTFDnbGceOnhUU3ztEJHx1M063BH5IZeE0PRCOf6964DpqhnrkLGt2K&X-Amz-Signature=de8905156ac9f9deb72eaae25c411343a2d46577fea71f40df9a1245ea09db7d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4CCPEE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDkpx3uPnX5b%2Bpgahl0xcfBdlEePRAQFx5euzzX33U7xgIgHUAqZaAvUSqkq0vM7%2FXIlUy49hUF0v%2BKX2pesn0ZuTcqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOTU4O6tKILTJ6TQyrcA73L7zaVpHolQ%2BgpTQzBwL8zxgScQqqemFbBVCWKrdw8Z1LYAkMlNks9g%2B%2FnHgMCxRNBlNN5NN%2BXpxpmdMaD%2BN3O8Bru4NezR%2BuaSYMS5SwEp7bgKaYlwK4WvRDl2kb6iWRInqiaSXrqYCowSHjeIi3Oh5ruba3BRphA1nfVzRD%2BA9TMDM%2FqBumgIviDIlKOKb6ji5AFs0sggqhqwhNX5Ec2071wq%2FyvAab2tix92Ph2UD%2BkSGCdnflfAESGwe%2FPMiOrS2XKiJB0Jr9I4QqRDAhJbkl4kG9QOWS1jdbCwwAmZpQVRuFHqnb8Ou8kEcRa21WjVo1MbJ9MAXpDW388n9kk9e%2BKHVZrYNxQaNNZtSjzxDIRlN9ODasTUVE5FA22iYboomVwb2B6lQlP1iREZoV8g%2Fi4zucCxxek7D3J08qXf%2BScpngop1BvGL36gNHdODb4%2FSJoCSsmbq8x7S9Y6D%2F2FtkplitPn11wGD7p1JVw8EqdpXIqhuh9igak0L3%2BivsXkTzCrxySBGBjVH9SNsGHf2WU0Ob69bg6Oo5%2BTB8kNKGun0zAHbrpVeZNWM8tRKXrD4giOAx1wjIrtS7TLCKBBzNdry8R%2BXAXBDXB%2F%2FT689WUFAqdxbBojgrOMOWG1sAGOqUBOMiMHzLW2cvGz4lErjpiDkuhKV%2FQyOWF%2BuXO%2BfP1663wC0C5M3l00C%2FSoN%2FLKR2cDenhYqm%2Bx7fOtccVq8BGUqzU8ijsSYviD1JBYQhPtMaMSWtBxCLWO60WfqxNXGbjedKuNCVvHdLgHNW9fRPoj%2BxtX66AiOf9A0GR9aTFDnbGceOnhUU3ztEJHx1M063BH5IZeE0PRCOf6964DpqhnrkLGt2K&X-Amz-Signature=1587a9b1e40a3d3baddd9411da9b063ddb69e8de84074eb9b920a398c4b580c6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
