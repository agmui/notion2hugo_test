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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6NEXA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVNiVBaQpEbrQ%2BwJTSfDvdE2x5OMWnxz%2B2Z%2Fg%2F1VVttAiEAtyj5Q5HnM7M%2Bx36hBEauAwL3TsPQHtqPIe113XdL9PgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmkxJOqgUXTF1GRWircA59bh5MvlCspa5dCqq7c9QcJPerJiYEXRj5NgLaPqgY4MK%2BYQgVmOvGWyGhtcxuVq%2FDXGssfbqli27xsGTw0beqtJqTiJMTg%2FGoQ84usq3T7%2Bc3lmjD%2BD1xvbQgsHJIP4OQ1EFWcr9bEv12n9wrQ1HcZKlxG13r%2Bm%2FHTjvQvDCtojYzEMKP0yUXXqhIz0BB2exGU2zGAhamwJ0q4vF6K45IA5qV9cBJ%2BNs9n%2FSMrHbziy4B4CTaG9wWpaLHvt%2B6cmHR3Zxdm5W2mub94YlOWYo%2BLC8WtmanBFLE4UlfX5aayjEB6kNguAQZYxrM6DqhWrbfA3YFbHC8PWwHK0E7THhjlmKiZbw6MBEijVIcggz8UatjDpMjqBan%2FymRUTA8sKMBHs3A28UzN0q972zS61CuCdJRD%2FUYfX3Z0TOf2DnpAKTpxeAlqRQODf2Q7vbKQpZoQZ92o9x%2BudLAu2INJsyH8iTdLiF7nG4ku5UVwd14xIqa2HxPswB2vLad%2FtcM%2F75fir1Lt%2FseD3rDAF6uOTUEdL4jhx4MpSC81XqEugHbRaHRMGzBneBPJR0L2MFqFNt1t5x417RAXfz01pFC%2FyVSqKLrHVHtQj2YAYlDRyFwoTYy2Ip5gKaLcTIhMMOedm8IGOqUBsKLLQM10Xz%2BolrPjWs5S20k6Oaibqd34%2F4N1R2WCbnGHO%2F99b%2F9sMpIAjMxAKgkD5qija%2F%2F2A6XvA%2BYWQ82JnWHEJJQwJso7tXgGfXjV0mLvI6TGPVOladU6QO1tvmltfa8tlOuKooRhM3KByQSG7qbTLD%2Bagi6HLHdoiprWyw38oM%2Ff1kgeWHCVSmlhFHgoIo0rEi6n1JuaPzUJ6M%2BAqU91JOlA&X-Amz-Signature=c7d308b1b77269854fbd1b455f86e55e9f334f1c5e1ad9cd031f9979cce224a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6NEXA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVNiVBaQpEbrQ%2BwJTSfDvdE2x5OMWnxz%2B2Z%2Fg%2F1VVttAiEAtyj5Q5HnM7M%2Bx36hBEauAwL3TsPQHtqPIe113XdL9PgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmkxJOqgUXTF1GRWircA59bh5MvlCspa5dCqq7c9QcJPerJiYEXRj5NgLaPqgY4MK%2BYQgVmOvGWyGhtcxuVq%2FDXGssfbqli27xsGTw0beqtJqTiJMTg%2FGoQ84usq3T7%2Bc3lmjD%2BD1xvbQgsHJIP4OQ1EFWcr9bEv12n9wrQ1HcZKlxG13r%2Bm%2FHTjvQvDCtojYzEMKP0yUXXqhIz0BB2exGU2zGAhamwJ0q4vF6K45IA5qV9cBJ%2BNs9n%2FSMrHbziy4B4CTaG9wWpaLHvt%2B6cmHR3Zxdm5W2mub94YlOWYo%2BLC8WtmanBFLE4UlfX5aayjEB6kNguAQZYxrM6DqhWrbfA3YFbHC8PWwHK0E7THhjlmKiZbw6MBEijVIcggz8UatjDpMjqBan%2FymRUTA8sKMBHs3A28UzN0q972zS61CuCdJRD%2FUYfX3Z0TOf2DnpAKTpxeAlqRQODf2Q7vbKQpZoQZ92o9x%2BudLAu2INJsyH8iTdLiF7nG4ku5UVwd14xIqa2HxPswB2vLad%2FtcM%2F75fir1Lt%2FseD3rDAF6uOTUEdL4jhx4MpSC81XqEugHbRaHRMGzBneBPJR0L2MFqFNt1t5x417RAXfz01pFC%2FyVSqKLrHVHtQj2YAYlDRyFwoTYy2Ip5gKaLcTIhMMOedm8IGOqUBsKLLQM10Xz%2BolrPjWs5S20k6Oaibqd34%2F4N1R2WCbnGHO%2F99b%2F9sMpIAjMxAKgkD5qija%2F%2F2A6XvA%2BYWQ82JnWHEJJQwJso7tXgGfXjV0mLvI6TGPVOladU6QO1tvmltfa8tlOuKooRhM3KByQSG7qbTLD%2Bagi6HLHdoiprWyw38oM%2Ff1kgeWHCVSmlhFHgoIo0rEi6n1JuaPzUJ6M%2BAqU91JOlA&X-Amz-Signature=0c45693b4f69b0db48994734c54a539eee068d439d0f7e6e7ad1d33fb21041f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6NEXA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVNiVBaQpEbrQ%2BwJTSfDvdE2x5OMWnxz%2B2Z%2Fg%2F1VVttAiEAtyj5Q5HnM7M%2Bx36hBEauAwL3TsPQHtqPIe113XdL9PgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmkxJOqgUXTF1GRWircA59bh5MvlCspa5dCqq7c9QcJPerJiYEXRj5NgLaPqgY4MK%2BYQgVmOvGWyGhtcxuVq%2FDXGssfbqli27xsGTw0beqtJqTiJMTg%2FGoQ84usq3T7%2Bc3lmjD%2BD1xvbQgsHJIP4OQ1EFWcr9bEv12n9wrQ1HcZKlxG13r%2Bm%2FHTjvQvDCtojYzEMKP0yUXXqhIz0BB2exGU2zGAhamwJ0q4vF6K45IA5qV9cBJ%2BNs9n%2FSMrHbziy4B4CTaG9wWpaLHvt%2B6cmHR3Zxdm5W2mub94YlOWYo%2BLC8WtmanBFLE4UlfX5aayjEB6kNguAQZYxrM6DqhWrbfA3YFbHC8PWwHK0E7THhjlmKiZbw6MBEijVIcggz8UatjDpMjqBan%2FymRUTA8sKMBHs3A28UzN0q972zS61CuCdJRD%2FUYfX3Z0TOf2DnpAKTpxeAlqRQODf2Q7vbKQpZoQZ92o9x%2BudLAu2INJsyH8iTdLiF7nG4ku5UVwd14xIqa2HxPswB2vLad%2FtcM%2F75fir1Lt%2FseD3rDAF6uOTUEdL4jhx4MpSC81XqEugHbRaHRMGzBneBPJR0L2MFqFNt1t5x417RAXfz01pFC%2FyVSqKLrHVHtQj2YAYlDRyFwoTYy2Ip5gKaLcTIhMMOedm8IGOqUBsKLLQM10Xz%2BolrPjWs5S20k6Oaibqd34%2F4N1R2WCbnGHO%2F99b%2F9sMpIAjMxAKgkD5qija%2F%2F2A6XvA%2BYWQ82JnWHEJJQwJso7tXgGfXjV0mLvI6TGPVOladU6QO1tvmltfa8tlOuKooRhM3KByQSG7qbTLD%2Bagi6HLHdoiprWyw38oM%2Ff1kgeWHCVSmlhFHgoIo0rEi6n1JuaPzUJ6M%2BAqU91JOlA&X-Amz-Signature=79894d67bd6e4b80e6dacb737892a291577fb849e0e34567088391303debb8eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6NEXA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVNiVBaQpEbrQ%2BwJTSfDvdE2x5OMWnxz%2B2Z%2Fg%2F1VVttAiEAtyj5Q5HnM7M%2Bx36hBEauAwL3TsPQHtqPIe113XdL9PgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmkxJOqgUXTF1GRWircA59bh5MvlCspa5dCqq7c9QcJPerJiYEXRj5NgLaPqgY4MK%2BYQgVmOvGWyGhtcxuVq%2FDXGssfbqli27xsGTw0beqtJqTiJMTg%2FGoQ84usq3T7%2Bc3lmjD%2BD1xvbQgsHJIP4OQ1EFWcr9bEv12n9wrQ1HcZKlxG13r%2Bm%2FHTjvQvDCtojYzEMKP0yUXXqhIz0BB2exGU2zGAhamwJ0q4vF6K45IA5qV9cBJ%2BNs9n%2FSMrHbziy4B4CTaG9wWpaLHvt%2B6cmHR3Zxdm5W2mub94YlOWYo%2BLC8WtmanBFLE4UlfX5aayjEB6kNguAQZYxrM6DqhWrbfA3YFbHC8PWwHK0E7THhjlmKiZbw6MBEijVIcggz8UatjDpMjqBan%2FymRUTA8sKMBHs3A28UzN0q972zS61CuCdJRD%2FUYfX3Z0TOf2DnpAKTpxeAlqRQODf2Q7vbKQpZoQZ92o9x%2BudLAu2INJsyH8iTdLiF7nG4ku5UVwd14xIqa2HxPswB2vLad%2FtcM%2F75fir1Lt%2FseD3rDAF6uOTUEdL4jhx4MpSC81XqEugHbRaHRMGzBneBPJR0L2MFqFNt1t5x417RAXfz01pFC%2FyVSqKLrHVHtQj2YAYlDRyFwoTYy2Ip5gKaLcTIhMMOedm8IGOqUBsKLLQM10Xz%2BolrPjWs5S20k6Oaibqd34%2F4N1R2WCbnGHO%2F99b%2F9sMpIAjMxAKgkD5qija%2F%2F2A6XvA%2BYWQ82JnWHEJJQwJso7tXgGfXjV0mLvI6TGPVOladU6QO1tvmltfa8tlOuKooRhM3KByQSG7qbTLD%2Bagi6HLHdoiprWyw38oM%2Ff1kgeWHCVSmlhFHgoIo0rEi6n1JuaPzUJ6M%2BAqU91JOlA&X-Amz-Signature=3b01b75b254f68c06a2f5a31d285cace79e8c36833a6cfcd92c3b62dcee8b75f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6NEXA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVNiVBaQpEbrQ%2BwJTSfDvdE2x5OMWnxz%2B2Z%2Fg%2F1VVttAiEAtyj5Q5HnM7M%2Bx36hBEauAwL3TsPQHtqPIe113XdL9PgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmkxJOqgUXTF1GRWircA59bh5MvlCspa5dCqq7c9QcJPerJiYEXRj5NgLaPqgY4MK%2BYQgVmOvGWyGhtcxuVq%2FDXGssfbqli27xsGTw0beqtJqTiJMTg%2FGoQ84usq3T7%2Bc3lmjD%2BD1xvbQgsHJIP4OQ1EFWcr9bEv12n9wrQ1HcZKlxG13r%2Bm%2FHTjvQvDCtojYzEMKP0yUXXqhIz0BB2exGU2zGAhamwJ0q4vF6K45IA5qV9cBJ%2BNs9n%2FSMrHbziy4B4CTaG9wWpaLHvt%2B6cmHR3Zxdm5W2mub94YlOWYo%2BLC8WtmanBFLE4UlfX5aayjEB6kNguAQZYxrM6DqhWrbfA3YFbHC8PWwHK0E7THhjlmKiZbw6MBEijVIcggz8UatjDpMjqBan%2FymRUTA8sKMBHs3A28UzN0q972zS61CuCdJRD%2FUYfX3Z0TOf2DnpAKTpxeAlqRQODf2Q7vbKQpZoQZ92o9x%2BudLAu2INJsyH8iTdLiF7nG4ku5UVwd14xIqa2HxPswB2vLad%2FtcM%2F75fir1Lt%2FseD3rDAF6uOTUEdL4jhx4MpSC81XqEugHbRaHRMGzBneBPJR0L2MFqFNt1t5x417RAXfz01pFC%2FyVSqKLrHVHtQj2YAYlDRyFwoTYy2Ip5gKaLcTIhMMOedm8IGOqUBsKLLQM10Xz%2BolrPjWs5S20k6Oaibqd34%2F4N1R2WCbnGHO%2F99b%2F9sMpIAjMxAKgkD5qija%2F%2F2A6XvA%2BYWQ82JnWHEJJQwJso7tXgGfXjV0mLvI6TGPVOladU6QO1tvmltfa8tlOuKooRhM3KByQSG7qbTLD%2Bagi6HLHdoiprWyw38oM%2Ff1kgeWHCVSmlhFHgoIo0rEi6n1JuaPzUJ6M%2BAqU91JOlA&X-Amz-Signature=1bfb287d97f27049e484cf2525a03a059fc80a583457f9a3ffb21198456d8b52&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6NEXA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVNiVBaQpEbrQ%2BwJTSfDvdE2x5OMWnxz%2B2Z%2Fg%2F1VVttAiEAtyj5Q5HnM7M%2Bx36hBEauAwL3TsPQHtqPIe113XdL9PgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmkxJOqgUXTF1GRWircA59bh5MvlCspa5dCqq7c9QcJPerJiYEXRj5NgLaPqgY4MK%2BYQgVmOvGWyGhtcxuVq%2FDXGssfbqli27xsGTw0beqtJqTiJMTg%2FGoQ84usq3T7%2Bc3lmjD%2BD1xvbQgsHJIP4OQ1EFWcr9bEv12n9wrQ1HcZKlxG13r%2Bm%2FHTjvQvDCtojYzEMKP0yUXXqhIz0BB2exGU2zGAhamwJ0q4vF6K45IA5qV9cBJ%2BNs9n%2FSMrHbziy4B4CTaG9wWpaLHvt%2B6cmHR3Zxdm5W2mub94YlOWYo%2BLC8WtmanBFLE4UlfX5aayjEB6kNguAQZYxrM6DqhWrbfA3YFbHC8PWwHK0E7THhjlmKiZbw6MBEijVIcggz8UatjDpMjqBan%2FymRUTA8sKMBHs3A28UzN0q972zS61CuCdJRD%2FUYfX3Z0TOf2DnpAKTpxeAlqRQODf2Q7vbKQpZoQZ92o9x%2BudLAu2INJsyH8iTdLiF7nG4ku5UVwd14xIqa2HxPswB2vLad%2FtcM%2F75fir1Lt%2FseD3rDAF6uOTUEdL4jhx4MpSC81XqEugHbRaHRMGzBneBPJR0L2MFqFNt1t5x417RAXfz01pFC%2FyVSqKLrHVHtQj2YAYlDRyFwoTYy2Ip5gKaLcTIhMMOedm8IGOqUBsKLLQM10Xz%2BolrPjWs5S20k6Oaibqd34%2F4N1R2WCbnGHO%2F99b%2F9sMpIAjMxAKgkD5qija%2F%2F2A6XvA%2BYWQ82JnWHEJJQwJso7tXgGfXjV0mLvI6TGPVOladU6QO1tvmltfa8tlOuKooRhM3KByQSG7qbTLD%2Bagi6HLHdoiprWyw38oM%2Ff1kgeWHCVSmlhFHgoIo0rEi6n1JuaPzUJ6M%2BAqU91JOlA&X-Amz-Signature=c0250bab18f926539e764a8f3eaf6b5d25416781a2514c2f699819a335053edf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E6NEXA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVNiVBaQpEbrQ%2BwJTSfDvdE2x5OMWnxz%2B2Z%2Fg%2F1VVttAiEAtyj5Q5HnM7M%2Bx36hBEauAwL3TsPQHtqPIe113XdL9PgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmkxJOqgUXTF1GRWircA59bh5MvlCspa5dCqq7c9QcJPerJiYEXRj5NgLaPqgY4MK%2BYQgVmOvGWyGhtcxuVq%2FDXGssfbqli27xsGTw0beqtJqTiJMTg%2FGoQ84usq3T7%2Bc3lmjD%2BD1xvbQgsHJIP4OQ1EFWcr9bEv12n9wrQ1HcZKlxG13r%2Bm%2FHTjvQvDCtojYzEMKP0yUXXqhIz0BB2exGU2zGAhamwJ0q4vF6K45IA5qV9cBJ%2BNs9n%2FSMrHbziy4B4CTaG9wWpaLHvt%2B6cmHR3Zxdm5W2mub94YlOWYo%2BLC8WtmanBFLE4UlfX5aayjEB6kNguAQZYxrM6DqhWrbfA3YFbHC8PWwHK0E7THhjlmKiZbw6MBEijVIcggz8UatjDpMjqBan%2FymRUTA8sKMBHs3A28UzN0q972zS61CuCdJRD%2FUYfX3Z0TOf2DnpAKTpxeAlqRQODf2Q7vbKQpZoQZ92o9x%2BudLAu2INJsyH8iTdLiF7nG4ku5UVwd14xIqa2HxPswB2vLad%2FtcM%2F75fir1Lt%2FseD3rDAF6uOTUEdL4jhx4MpSC81XqEugHbRaHRMGzBneBPJR0L2MFqFNt1t5x417RAXfz01pFC%2FyVSqKLrHVHtQj2YAYlDRyFwoTYy2Ip5gKaLcTIhMMOedm8IGOqUBsKLLQM10Xz%2BolrPjWs5S20k6Oaibqd34%2F4N1R2WCbnGHO%2F99b%2F9sMpIAjMxAKgkD5qija%2F%2F2A6XvA%2BYWQ82JnWHEJJQwJso7tXgGfXjV0mLvI6TGPVOladU6QO1tvmltfa8tlOuKooRhM3KByQSG7qbTLD%2Bagi6HLHdoiprWyw38oM%2Ff1kgeWHCVSmlhFHgoIo0rEi6n1JuaPzUJ6M%2BAqU91JOlA&X-Amz-Signature=02e9755599b4fc0007c017d0d4d9e96213b06faf6c56af43209b22247e1fbee5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
