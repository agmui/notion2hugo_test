---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62SMSCV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozsK8WAnQL1UFiC1Bv5%2BI5rjtpBf9v%2FEyyZoRkVJ5NwIgQuo9WjqbXI%2BIh6eJFKqiimvz1D0POljkP%2BxHyJSgE1gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLklhMn2TZ8gZaI%2FVSrcA0VCo5hu8FpKagz62YySNkpL9%2Bu6sgRfU3%2B4tMggSIwAq8w0prQNRKoODAcn35tohsVu0shGb9Ej8SgbL4vQO7i1huKltG81pedIiBZs79zuqJBeFXB5DG5u9O7RxvtdsONcqCIPkz%2FoZbkeW29a27Q6IQm7I1q944r5QS8kfzW0ZzJUhw9ZpVFkWjWX78MrWRmnAMJYkRjRCAYaW5e%2BNDG%2Bf6CL8KPxoVJ66YjZY5JYTRiZVHyULbs%2B2vxuBRT6AKIByvtevudxA32lQ2QXyZX7hg47lLItbzrg%2B96vDTXx0xJPAQ4%2FYf%2B3EhFoSY3Th3s8EKBc3WOb6nAcn02LhbV%2BEAMQ0zHekQQAlvh5GQPeIwMPhnNl0lXB3cMCIIMA%2B%2FJga8xZir0eZFW%2BEdhOCGqYvSJS7YvnaU2l3lHt1GH4zIgIAIeHxUQhJBt%2BN1946T6HnRUJBKnVjMbEfEt5BXj4NXwOWiri1ZV2rxVAVcHCJA0w%2BPTpcNWX48eouVn4T0NPKh3mQCSL8ShVg0uObGxIndYeHKojx99xBRHRdYtYrQmINjzCp%2Bg%2FMC2vPdDTjQoiQOF0eB3rnrpJqERHLCEfGe%2BN%2B8uNC%2BIJ4FXi678PsC%2Fh%2B0z6aMbUTs3PMI32q8QGOqUBCGR2W33aiTVTmuQqElTMZ326zFmYPtdiDqc1HqNMhRRo%2Bu%2FgjX%2FDnxzf6G%2FJ9QnNS%2BbNrJ2s%2F%2BmUBQYq4fgow0nIQWj2tbl2a1ISTcvvkQqEJlWYUof7wMxwMEOqL5k7DLylxXE4NF6e1DlXXoDEZR7%2BnF9Y3wPTNBIDik46Y25iXCDehdmq7UlKKi1qY9dyvSItlo74qHui8kz8Dnt1Pmv%2FFatO&X-Amz-Signature=d9bee60436cf52ac896d9e70197595cba0a5cd10bdc8bad09779318cf6d110b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62SMSCV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozsK8WAnQL1UFiC1Bv5%2BI5rjtpBf9v%2FEyyZoRkVJ5NwIgQuo9WjqbXI%2BIh6eJFKqiimvz1D0POljkP%2BxHyJSgE1gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLklhMn2TZ8gZaI%2FVSrcA0VCo5hu8FpKagz62YySNkpL9%2Bu6sgRfU3%2B4tMggSIwAq8w0prQNRKoODAcn35tohsVu0shGb9Ej8SgbL4vQO7i1huKltG81pedIiBZs79zuqJBeFXB5DG5u9O7RxvtdsONcqCIPkz%2FoZbkeW29a27Q6IQm7I1q944r5QS8kfzW0ZzJUhw9ZpVFkWjWX78MrWRmnAMJYkRjRCAYaW5e%2BNDG%2Bf6CL8KPxoVJ66YjZY5JYTRiZVHyULbs%2B2vxuBRT6AKIByvtevudxA32lQ2QXyZX7hg47lLItbzrg%2B96vDTXx0xJPAQ4%2FYf%2B3EhFoSY3Th3s8EKBc3WOb6nAcn02LhbV%2BEAMQ0zHekQQAlvh5GQPeIwMPhnNl0lXB3cMCIIMA%2B%2FJga8xZir0eZFW%2BEdhOCGqYvSJS7YvnaU2l3lHt1GH4zIgIAIeHxUQhJBt%2BN1946T6HnRUJBKnVjMbEfEt5BXj4NXwOWiri1ZV2rxVAVcHCJA0w%2BPTpcNWX48eouVn4T0NPKh3mQCSL8ShVg0uObGxIndYeHKojx99xBRHRdYtYrQmINjzCp%2Bg%2FMC2vPdDTjQoiQOF0eB3rnrpJqERHLCEfGe%2BN%2B8uNC%2BIJ4FXi678PsC%2Fh%2B0z6aMbUTs3PMI32q8QGOqUBCGR2W33aiTVTmuQqElTMZ326zFmYPtdiDqc1HqNMhRRo%2Bu%2FgjX%2FDnxzf6G%2FJ9QnNS%2BbNrJ2s%2F%2BmUBQYq4fgow0nIQWj2tbl2a1ISTcvvkQqEJlWYUof7wMxwMEOqL5k7DLylxXE4NF6e1DlXXoDEZR7%2BnF9Y3wPTNBIDik46Y25iXCDehdmq7UlKKi1qY9dyvSItlo74qHui8kz8Dnt1Pmv%2FFatO&X-Amz-Signature=b5612e09e65a88229cf14f54853e620c83a0c58d4a11d169eea953780dc4ad23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62SMSCV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozsK8WAnQL1UFiC1Bv5%2BI5rjtpBf9v%2FEyyZoRkVJ5NwIgQuo9WjqbXI%2BIh6eJFKqiimvz1D0POljkP%2BxHyJSgE1gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLklhMn2TZ8gZaI%2FVSrcA0VCo5hu8FpKagz62YySNkpL9%2Bu6sgRfU3%2B4tMggSIwAq8w0prQNRKoODAcn35tohsVu0shGb9Ej8SgbL4vQO7i1huKltG81pedIiBZs79zuqJBeFXB5DG5u9O7RxvtdsONcqCIPkz%2FoZbkeW29a27Q6IQm7I1q944r5QS8kfzW0ZzJUhw9ZpVFkWjWX78MrWRmnAMJYkRjRCAYaW5e%2BNDG%2Bf6CL8KPxoVJ66YjZY5JYTRiZVHyULbs%2B2vxuBRT6AKIByvtevudxA32lQ2QXyZX7hg47lLItbzrg%2B96vDTXx0xJPAQ4%2FYf%2B3EhFoSY3Th3s8EKBc3WOb6nAcn02LhbV%2BEAMQ0zHekQQAlvh5GQPeIwMPhnNl0lXB3cMCIIMA%2B%2FJga8xZir0eZFW%2BEdhOCGqYvSJS7YvnaU2l3lHt1GH4zIgIAIeHxUQhJBt%2BN1946T6HnRUJBKnVjMbEfEt5BXj4NXwOWiri1ZV2rxVAVcHCJA0w%2BPTpcNWX48eouVn4T0NPKh3mQCSL8ShVg0uObGxIndYeHKojx99xBRHRdYtYrQmINjzCp%2Bg%2FMC2vPdDTjQoiQOF0eB3rnrpJqERHLCEfGe%2BN%2B8uNC%2BIJ4FXi678PsC%2Fh%2B0z6aMbUTs3PMI32q8QGOqUBCGR2W33aiTVTmuQqElTMZ326zFmYPtdiDqc1HqNMhRRo%2Bu%2FgjX%2FDnxzf6G%2FJ9QnNS%2BbNrJ2s%2F%2BmUBQYq4fgow0nIQWj2tbl2a1ISTcvvkQqEJlWYUof7wMxwMEOqL5k7DLylxXE4NF6e1DlXXoDEZR7%2BnF9Y3wPTNBIDik46Y25iXCDehdmq7UlKKi1qY9dyvSItlo74qHui8kz8Dnt1Pmv%2FFatO&X-Amz-Signature=b95eeabb95e654edff9d840981aeb781f518ab6da30f53206ab9be32e35a89e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62SMSCV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozsK8WAnQL1UFiC1Bv5%2BI5rjtpBf9v%2FEyyZoRkVJ5NwIgQuo9WjqbXI%2BIh6eJFKqiimvz1D0POljkP%2BxHyJSgE1gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLklhMn2TZ8gZaI%2FVSrcA0VCo5hu8FpKagz62YySNkpL9%2Bu6sgRfU3%2B4tMggSIwAq8w0prQNRKoODAcn35tohsVu0shGb9Ej8SgbL4vQO7i1huKltG81pedIiBZs79zuqJBeFXB5DG5u9O7RxvtdsONcqCIPkz%2FoZbkeW29a27Q6IQm7I1q944r5QS8kfzW0ZzJUhw9ZpVFkWjWX78MrWRmnAMJYkRjRCAYaW5e%2BNDG%2Bf6CL8KPxoVJ66YjZY5JYTRiZVHyULbs%2B2vxuBRT6AKIByvtevudxA32lQ2QXyZX7hg47lLItbzrg%2B96vDTXx0xJPAQ4%2FYf%2B3EhFoSY3Th3s8EKBc3WOb6nAcn02LhbV%2BEAMQ0zHekQQAlvh5GQPeIwMPhnNl0lXB3cMCIIMA%2B%2FJga8xZir0eZFW%2BEdhOCGqYvSJS7YvnaU2l3lHt1GH4zIgIAIeHxUQhJBt%2BN1946T6HnRUJBKnVjMbEfEt5BXj4NXwOWiri1ZV2rxVAVcHCJA0w%2BPTpcNWX48eouVn4T0NPKh3mQCSL8ShVg0uObGxIndYeHKojx99xBRHRdYtYrQmINjzCp%2Bg%2FMC2vPdDTjQoiQOF0eB3rnrpJqERHLCEfGe%2BN%2B8uNC%2BIJ4FXi678PsC%2Fh%2B0z6aMbUTs3PMI32q8QGOqUBCGR2W33aiTVTmuQqElTMZ326zFmYPtdiDqc1HqNMhRRo%2Bu%2FgjX%2FDnxzf6G%2FJ9QnNS%2BbNrJ2s%2F%2BmUBQYq4fgow0nIQWj2tbl2a1ISTcvvkQqEJlWYUof7wMxwMEOqL5k7DLylxXE4NF6e1DlXXoDEZR7%2BnF9Y3wPTNBIDik46Y25iXCDehdmq7UlKKi1qY9dyvSItlo74qHui8kz8Dnt1Pmv%2FFatO&X-Amz-Signature=4209d94998c3e53349b41fc2f220f9cc8026e4698340c43345eb4a1861c79910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62SMSCV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozsK8WAnQL1UFiC1Bv5%2BI5rjtpBf9v%2FEyyZoRkVJ5NwIgQuo9WjqbXI%2BIh6eJFKqiimvz1D0POljkP%2BxHyJSgE1gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLklhMn2TZ8gZaI%2FVSrcA0VCo5hu8FpKagz62YySNkpL9%2Bu6sgRfU3%2B4tMggSIwAq8w0prQNRKoODAcn35tohsVu0shGb9Ej8SgbL4vQO7i1huKltG81pedIiBZs79zuqJBeFXB5DG5u9O7RxvtdsONcqCIPkz%2FoZbkeW29a27Q6IQm7I1q944r5QS8kfzW0ZzJUhw9ZpVFkWjWX78MrWRmnAMJYkRjRCAYaW5e%2BNDG%2Bf6CL8KPxoVJ66YjZY5JYTRiZVHyULbs%2B2vxuBRT6AKIByvtevudxA32lQ2QXyZX7hg47lLItbzrg%2B96vDTXx0xJPAQ4%2FYf%2B3EhFoSY3Th3s8EKBc3WOb6nAcn02LhbV%2BEAMQ0zHekQQAlvh5GQPeIwMPhnNl0lXB3cMCIIMA%2B%2FJga8xZir0eZFW%2BEdhOCGqYvSJS7YvnaU2l3lHt1GH4zIgIAIeHxUQhJBt%2BN1946T6HnRUJBKnVjMbEfEt5BXj4NXwOWiri1ZV2rxVAVcHCJA0w%2BPTpcNWX48eouVn4T0NPKh3mQCSL8ShVg0uObGxIndYeHKojx99xBRHRdYtYrQmINjzCp%2Bg%2FMC2vPdDTjQoiQOF0eB3rnrpJqERHLCEfGe%2BN%2B8uNC%2BIJ4FXi678PsC%2Fh%2B0z6aMbUTs3PMI32q8QGOqUBCGR2W33aiTVTmuQqElTMZ326zFmYPtdiDqc1HqNMhRRo%2Bu%2FgjX%2FDnxzf6G%2FJ9QnNS%2BbNrJ2s%2F%2BmUBQYq4fgow0nIQWj2tbl2a1ISTcvvkQqEJlWYUof7wMxwMEOqL5k7DLylxXE4NF6e1DlXXoDEZR7%2BnF9Y3wPTNBIDik46Y25iXCDehdmq7UlKKi1qY9dyvSItlo74qHui8kz8Dnt1Pmv%2FFatO&X-Amz-Signature=606c15096186086d942ab1e645763fea09ffe5b77b09801d5ecad2512bdc12b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62SMSCV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozsK8WAnQL1UFiC1Bv5%2BI5rjtpBf9v%2FEyyZoRkVJ5NwIgQuo9WjqbXI%2BIh6eJFKqiimvz1D0POljkP%2BxHyJSgE1gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLklhMn2TZ8gZaI%2FVSrcA0VCo5hu8FpKagz62YySNkpL9%2Bu6sgRfU3%2B4tMggSIwAq8w0prQNRKoODAcn35tohsVu0shGb9Ej8SgbL4vQO7i1huKltG81pedIiBZs79zuqJBeFXB5DG5u9O7RxvtdsONcqCIPkz%2FoZbkeW29a27Q6IQm7I1q944r5QS8kfzW0ZzJUhw9ZpVFkWjWX78MrWRmnAMJYkRjRCAYaW5e%2BNDG%2Bf6CL8KPxoVJ66YjZY5JYTRiZVHyULbs%2B2vxuBRT6AKIByvtevudxA32lQ2QXyZX7hg47lLItbzrg%2B96vDTXx0xJPAQ4%2FYf%2B3EhFoSY3Th3s8EKBc3WOb6nAcn02LhbV%2BEAMQ0zHekQQAlvh5GQPeIwMPhnNl0lXB3cMCIIMA%2B%2FJga8xZir0eZFW%2BEdhOCGqYvSJS7YvnaU2l3lHt1GH4zIgIAIeHxUQhJBt%2BN1946T6HnRUJBKnVjMbEfEt5BXj4NXwOWiri1ZV2rxVAVcHCJA0w%2BPTpcNWX48eouVn4T0NPKh3mQCSL8ShVg0uObGxIndYeHKojx99xBRHRdYtYrQmINjzCp%2Bg%2FMC2vPdDTjQoiQOF0eB3rnrpJqERHLCEfGe%2BN%2B8uNC%2BIJ4FXi678PsC%2Fh%2B0z6aMbUTs3PMI32q8QGOqUBCGR2W33aiTVTmuQqElTMZ326zFmYPtdiDqc1HqNMhRRo%2Bu%2FgjX%2FDnxzf6G%2FJ9QnNS%2BbNrJ2s%2F%2BmUBQYq4fgow0nIQWj2tbl2a1ISTcvvkQqEJlWYUof7wMxwMEOqL5k7DLylxXE4NF6e1DlXXoDEZR7%2BnF9Y3wPTNBIDik46Y25iXCDehdmq7UlKKi1qY9dyvSItlo74qHui8kz8Dnt1Pmv%2FFatO&X-Amz-Signature=2665552a9c69943b20fa3cfc2ffd3e92354e9525547a0f92b122f968a8bb35e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62SMSCV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCozsK8WAnQL1UFiC1Bv5%2BI5rjtpBf9v%2FEyyZoRkVJ5NwIgQuo9WjqbXI%2BIh6eJFKqiimvz1D0POljkP%2BxHyJSgE1gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLklhMn2TZ8gZaI%2FVSrcA0VCo5hu8FpKagz62YySNkpL9%2Bu6sgRfU3%2B4tMggSIwAq8w0prQNRKoODAcn35tohsVu0shGb9Ej8SgbL4vQO7i1huKltG81pedIiBZs79zuqJBeFXB5DG5u9O7RxvtdsONcqCIPkz%2FoZbkeW29a27Q6IQm7I1q944r5QS8kfzW0ZzJUhw9ZpVFkWjWX78MrWRmnAMJYkRjRCAYaW5e%2BNDG%2Bf6CL8KPxoVJ66YjZY5JYTRiZVHyULbs%2B2vxuBRT6AKIByvtevudxA32lQ2QXyZX7hg47lLItbzrg%2B96vDTXx0xJPAQ4%2FYf%2B3EhFoSY3Th3s8EKBc3WOb6nAcn02LhbV%2BEAMQ0zHekQQAlvh5GQPeIwMPhnNl0lXB3cMCIIMA%2B%2FJga8xZir0eZFW%2BEdhOCGqYvSJS7YvnaU2l3lHt1GH4zIgIAIeHxUQhJBt%2BN1946T6HnRUJBKnVjMbEfEt5BXj4NXwOWiri1ZV2rxVAVcHCJA0w%2BPTpcNWX48eouVn4T0NPKh3mQCSL8ShVg0uObGxIndYeHKojx99xBRHRdYtYrQmINjzCp%2Bg%2FMC2vPdDTjQoiQOF0eB3rnrpJqERHLCEfGe%2BN%2B8uNC%2BIJ4FXi678PsC%2Fh%2B0z6aMbUTs3PMI32q8QGOqUBCGR2W33aiTVTmuQqElTMZ326zFmYPtdiDqc1HqNMhRRo%2Bu%2FgjX%2FDnxzf6G%2FJ9QnNS%2BbNrJ2s%2F%2BmUBQYq4fgow0nIQWj2tbl2a1ISTcvvkQqEJlWYUof7wMxwMEOqL5k7DLylxXE4NF6e1DlXXoDEZR7%2BnF9Y3wPTNBIDik46Y25iXCDehdmq7UlKKi1qY9dyvSItlo74qHui8kz8Dnt1Pmv%2FFatO&X-Amz-Signature=35df236936f8acc14aa6e474279b609650933b54abba879fe2591c79d515e40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
