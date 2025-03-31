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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKKHQ2N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC7Tggg91L0ByV27Ge2K%2FFhc0LOrBeIIkCY3l1F9GL93AiEA1KCOduwmMuhwzB5%2Fj9sIFqV7IZ9sxx68i2F7SPYq2bcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLQCzEJjnyEIBCYPSrcA2OIAfXhudzlgLRPdlczLjBbJnhp4i%2B%2FmO1fupKlYwXcS5PYHx8y81JoBtykm2Whek7OXCOtWsH4%2B1T5Rjg1PIlcyjfmA6w0R5Q2JLC9XWPhIAjW%2FDZu90WzToylRbO642ClalOVgpCu7SXnoxj6YRuUYrynI989Pf%2BGhGKWff8VaBwxtGAkFhBW5jvY4d2LPWcBI8bZctV9APCWyEcNiB4e7irnI3vrEB6MNEsFerCMtupcm197tkPLTI1toc0PK5DCZnp1VYzoA29PdMGFVeewJjKA6xIGHj93C5S5wOtYSet%2FJ%2BmyHGTmcYXEcScPY%2BtwEf%2BqwCu7dkwkgYMPD1xIvRV7UAYRYt9%2B3Bkt6cYKBv%2F%2FY2UG5lk%2BAMF7VSY7Jbehn5Aezyo5HLmuknFf8dLa5bH8JM6r2faxBi2VqNPbfGh%2FFAXsYHbpGxiPo2Nkgiffi%2B%2B6qHbgCtzybx9614O6ubaWx%2FsWb79JaC3sTrVzqq4a8BDTf0fXy0XSmwYj6d3jKfRpX2M2O8NqcOI3QIQ%2BEiDGTyJgv7eQjEedxOnzDOlz6caHvdYSPGw1oAyflGNPoAYTnDi%2Bhpw06ftV%2B72A6XsA4JBYu6bE35YWrxHj3c%2F%2BojcPU5CXI8p2MPChqr8GOqUBJqNBvROm0uYAy42abSpWo1TMPkg%2FeiTfNtQEl%2FPVN4oW%2FZIW8qXOBHQmJaH5h%2BNl1BLQVNVP5W4Ukymnj05Hbio4Lfae0A31OMioSPkJR%2FjbsvRMgMi9jHrGr%2F%2FtNSbDLRASHvIEViGYwTPgezOaSzephYuEk%2Bs7nM466XxT9NaZN0aYxxjSsc1WmjMOkjhzAn5GWPqMCUGVNoolLtLhXhOobSo2&X-Amz-Signature=a869fa0195736737c4cf733b410e9ecab8106b634e722752c550601e45f93675&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKKHQ2N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC7Tggg91L0ByV27Ge2K%2FFhc0LOrBeIIkCY3l1F9GL93AiEA1KCOduwmMuhwzB5%2Fj9sIFqV7IZ9sxx68i2F7SPYq2bcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLQCzEJjnyEIBCYPSrcA2OIAfXhudzlgLRPdlczLjBbJnhp4i%2B%2FmO1fupKlYwXcS5PYHx8y81JoBtykm2Whek7OXCOtWsH4%2B1T5Rjg1PIlcyjfmA6w0R5Q2JLC9XWPhIAjW%2FDZu90WzToylRbO642ClalOVgpCu7SXnoxj6YRuUYrynI989Pf%2BGhGKWff8VaBwxtGAkFhBW5jvY4d2LPWcBI8bZctV9APCWyEcNiB4e7irnI3vrEB6MNEsFerCMtupcm197tkPLTI1toc0PK5DCZnp1VYzoA29PdMGFVeewJjKA6xIGHj93C5S5wOtYSet%2FJ%2BmyHGTmcYXEcScPY%2BtwEf%2BqwCu7dkwkgYMPD1xIvRV7UAYRYt9%2B3Bkt6cYKBv%2F%2FY2UG5lk%2BAMF7VSY7Jbehn5Aezyo5HLmuknFf8dLa5bH8JM6r2faxBi2VqNPbfGh%2FFAXsYHbpGxiPo2Nkgiffi%2B%2B6qHbgCtzybx9614O6ubaWx%2FsWb79JaC3sTrVzqq4a8BDTf0fXy0XSmwYj6d3jKfRpX2M2O8NqcOI3QIQ%2BEiDGTyJgv7eQjEedxOnzDOlz6caHvdYSPGw1oAyflGNPoAYTnDi%2Bhpw06ftV%2B72A6XsA4JBYu6bE35YWrxHj3c%2F%2BojcPU5CXI8p2MPChqr8GOqUBJqNBvROm0uYAy42abSpWo1TMPkg%2FeiTfNtQEl%2FPVN4oW%2FZIW8qXOBHQmJaH5h%2BNl1BLQVNVP5W4Ukymnj05Hbio4Lfae0A31OMioSPkJR%2FjbsvRMgMi9jHrGr%2F%2FtNSbDLRASHvIEViGYwTPgezOaSzephYuEk%2Bs7nM466XxT9NaZN0aYxxjSsc1WmjMOkjhzAn5GWPqMCUGVNoolLtLhXhOobSo2&X-Amz-Signature=a8ce0d7004093c2bebdc781ed88588d5284e294842cf6fe3840e0a807af7e3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKKHQ2N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC7Tggg91L0ByV27Ge2K%2FFhc0LOrBeIIkCY3l1F9GL93AiEA1KCOduwmMuhwzB5%2Fj9sIFqV7IZ9sxx68i2F7SPYq2bcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLQCzEJjnyEIBCYPSrcA2OIAfXhudzlgLRPdlczLjBbJnhp4i%2B%2FmO1fupKlYwXcS5PYHx8y81JoBtykm2Whek7OXCOtWsH4%2B1T5Rjg1PIlcyjfmA6w0R5Q2JLC9XWPhIAjW%2FDZu90WzToylRbO642ClalOVgpCu7SXnoxj6YRuUYrynI989Pf%2BGhGKWff8VaBwxtGAkFhBW5jvY4d2LPWcBI8bZctV9APCWyEcNiB4e7irnI3vrEB6MNEsFerCMtupcm197tkPLTI1toc0PK5DCZnp1VYzoA29PdMGFVeewJjKA6xIGHj93C5S5wOtYSet%2FJ%2BmyHGTmcYXEcScPY%2BtwEf%2BqwCu7dkwkgYMPD1xIvRV7UAYRYt9%2B3Bkt6cYKBv%2F%2FY2UG5lk%2BAMF7VSY7Jbehn5Aezyo5HLmuknFf8dLa5bH8JM6r2faxBi2VqNPbfGh%2FFAXsYHbpGxiPo2Nkgiffi%2B%2B6qHbgCtzybx9614O6ubaWx%2FsWb79JaC3sTrVzqq4a8BDTf0fXy0XSmwYj6d3jKfRpX2M2O8NqcOI3QIQ%2BEiDGTyJgv7eQjEedxOnzDOlz6caHvdYSPGw1oAyflGNPoAYTnDi%2Bhpw06ftV%2B72A6XsA4JBYu6bE35YWrxHj3c%2F%2BojcPU5CXI8p2MPChqr8GOqUBJqNBvROm0uYAy42abSpWo1TMPkg%2FeiTfNtQEl%2FPVN4oW%2FZIW8qXOBHQmJaH5h%2BNl1BLQVNVP5W4Ukymnj05Hbio4Lfae0A31OMioSPkJR%2FjbsvRMgMi9jHrGr%2F%2FtNSbDLRASHvIEViGYwTPgezOaSzephYuEk%2Bs7nM466XxT9NaZN0aYxxjSsc1WmjMOkjhzAn5GWPqMCUGVNoolLtLhXhOobSo2&X-Amz-Signature=a345eaffbad0fe694088133eb2755c62bc1490a9ef1fe6ddcbe8ebadcd52aaad&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKKHQ2N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC7Tggg91L0ByV27Ge2K%2FFhc0LOrBeIIkCY3l1F9GL93AiEA1KCOduwmMuhwzB5%2Fj9sIFqV7IZ9sxx68i2F7SPYq2bcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLQCzEJjnyEIBCYPSrcA2OIAfXhudzlgLRPdlczLjBbJnhp4i%2B%2FmO1fupKlYwXcS5PYHx8y81JoBtykm2Whek7OXCOtWsH4%2B1T5Rjg1PIlcyjfmA6w0R5Q2JLC9XWPhIAjW%2FDZu90WzToylRbO642ClalOVgpCu7SXnoxj6YRuUYrynI989Pf%2BGhGKWff8VaBwxtGAkFhBW5jvY4d2LPWcBI8bZctV9APCWyEcNiB4e7irnI3vrEB6MNEsFerCMtupcm197tkPLTI1toc0PK5DCZnp1VYzoA29PdMGFVeewJjKA6xIGHj93C5S5wOtYSet%2FJ%2BmyHGTmcYXEcScPY%2BtwEf%2BqwCu7dkwkgYMPD1xIvRV7UAYRYt9%2B3Bkt6cYKBv%2F%2FY2UG5lk%2BAMF7VSY7Jbehn5Aezyo5HLmuknFf8dLa5bH8JM6r2faxBi2VqNPbfGh%2FFAXsYHbpGxiPo2Nkgiffi%2B%2B6qHbgCtzybx9614O6ubaWx%2FsWb79JaC3sTrVzqq4a8BDTf0fXy0XSmwYj6d3jKfRpX2M2O8NqcOI3QIQ%2BEiDGTyJgv7eQjEedxOnzDOlz6caHvdYSPGw1oAyflGNPoAYTnDi%2Bhpw06ftV%2B72A6XsA4JBYu6bE35YWrxHj3c%2F%2BojcPU5CXI8p2MPChqr8GOqUBJqNBvROm0uYAy42abSpWo1TMPkg%2FeiTfNtQEl%2FPVN4oW%2FZIW8qXOBHQmJaH5h%2BNl1BLQVNVP5W4Ukymnj05Hbio4Lfae0A31OMioSPkJR%2FjbsvRMgMi9jHrGr%2F%2FtNSbDLRASHvIEViGYwTPgezOaSzephYuEk%2Bs7nM466XxT9NaZN0aYxxjSsc1WmjMOkjhzAn5GWPqMCUGVNoolLtLhXhOobSo2&X-Amz-Signature=d533aa48ac1f8c33fe150689d90f86f8369b1f4d24601d01323e523a880ec9ac&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKKHQ2N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC7Tggg91L0ByV27Ge2K%2FFhc0LOrBeIIkCY3l1F9GL93AiEA1KCOduwmMuhwzB5%2Fj9sIFqV7IZ9sxx68i2F7SPYq2bcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLQCzEJjnyEIBCYPSrcA2OIAfXhudzlgLRPdlczLjBbJnhp4i%2B%2FmO1fupKlYwXcS5PYHx8y81JoBtykm2Whek7OXCOtWsH4%2B1T5Rjg1PIlcyjfmA6w0R5Q2JLC9XWPhIAjW%2FDZu90WzToylRbO642ClalOVgpCu7SXnoxj6YRuUYrynI989Pf%2BGhGKWff8VaBwxtGAkFhBW5jvY4d2LPWcBI8bZctV9APCWyEcNiB4e7irnI3vrEB6MNEsFerCMtupcm197tkPLTI1toc0PK5DCZnp1VYzoA29PdMGFVeewJjKA6xIGHj93C5S5wOtYSet%2FJ%2BmyHGTmcYXEcScPY%2BtwEf%2BqwCu7dkwkgYMPD1xIvRV7UAYRYt9%2B3Bkt6cYKBv%2F%2FY2UG5lk%2BAMF7VSY7Jbehn5Aezyo5HLmuknFf8dLa5bH8JM6r2faxBi2VqNPbfGh%2FFAXsYHbpGxiPo2Nkgiffi%2B%2B6qHbgCtzybx9614O6ubaWx%2FsWb79JaC3sTrVzqq4a8BDTf0fXy0XSmwYj6d3jKfRpX2M2O8NqcOI3QIQ%2BEiDGTyJgv7eQjEedxOnzDOlz6caHvdYSPGw1oAyflGNPoAYTnDi%2Bhpw06ftV%2B72A6XsA4JBYu6bE35YWrxHj3c%2F%2BojcPU5CXI8p2MPChqr8GOqUBJqNBvROm0uYAy42abSpWo1TMPkg%2FeiTfNtQEl%2FPVN4oW%2FZIW8qXOBHQmJaH5h%2BNl1BLQVNVP5W4Ukymnj05Hbio4Lfae0A31OMioSPkJR%2FjbsvRMgMi9jHrGr%2F%2FtNSbDLRASHvIEViGYwTPgezOaSzephYuEk%2Bs7nM466XxT9NaZN0aYxxjSsc1WmjMOkjhzAn5GWPqMCUGVNoolLtLhXhOobSo2&X-Amz-Signature=1fcd1c7d31fe43b9fa29ca22e5b779e6260b0de6556aeb592afe2aeb2415857d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKKHQ2N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC7Tggg91L0ByV27Ge2K%2FFhc0LOrBeIIkCY3l1F9GL93AiEA1KCOduwmMuhwzB5%2Fj9sIFqV7IZ9sxx68i2F7SPYq2bcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLQCzEJjnyEIBCYPSrcA2OIAfXhudzlgLRPdlczLjBbJnhp4i%2B%2FmO1fupKlYwXcS5PYHx8y81JoBtykm2Whek7OXCOtWsH4%2B1T5Rjg1PIlcyjfmA6w0R5Q2JLC9XWPhIAjW%2FDZu90WzToylRbO642ClalOVgpCu7SXnoxj6YRuUYrynI989Pf%2BGhGKWff8VaBwxtGAkFhBW5jvY4d2LPWcBI8bZctV9APCWyEcNiB4e7irnI3vrEB6MNEsFerCMtupcm197tkPLTI1toc0PK5DCZnp1VYzoA29PdMGFVeewJjKA6xIGHj93C5S5wOtYSet%2FJ%2BmyHGTmcYXEcScPY%2BtwEf%2BqwCu7dkwkgYMPD1xIvRV7UAYRYt9%2B3Bkt6cYKBv%2F%2FY2UG5lk%2BAMF7VSY7Jbehn5Aezyo5HLmuknFf8dLa5bH8JM6r2faxBi2VqNPbfGh%2FFAXsYHbpGxiPo2Nkgiffi%2B%2B6qHbgCtzybx9614O6ubaWx%2FsWb79JaC3sTrVzqq4a8BDTf0fXy0XSmwYj6d3jKfRpX2M2O8NqcOI3QIQ%2BEiDGTyJgv7eQjEedxOnzDOlz6caHvdYSPGw1oAyflGNPoAYTnDi%2Bhpw06ftV%2B72A6XsA4JBYu6bE35YWrxHj3c%2F%2BojcPU5CXI8p2MPChqr8GOqUBJqNBvROm0uYAy42abSpWo1TMPkg%2FeiTfNtQEl%2FPVN4oW%2FZIW8qXOBHQmJaH5h%2BNl1BLQVNVP5W4Ukymnj05Hbio4Lfae0A31OMioSPkJR%2FjbsvRMgMi9jHrGr%2F%2FtNSbDLRASHvIEViGYwTPgezOaSzephYuEk%2Bs7nM466XxT9NaZN0aYxxjSsc1WmjMOkjhzAn5GWPqMCUGVNoolLtLhXhOobSo2&X-Amz-Signature=b24efd1fddedd78b3234cbe674817e8ae3e56ee3c633d481c684506de6a86966&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGKKHQ2N%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T131952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC7Tggg91L0ByV27Ge2K%2FFhc0LOrBeIIkCY3l1F9GL93AiEA1KCOduwmMuhwzB5%2Fj9sIFqV7IZ9sxx68i2F7SPYq2bcqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLQCzEJjnyEIBCYPSrcA2OIAfXhudzlgLRPdlczLjBbJnhp4i%2B%2FmO1fupKlYwXcS5PYHx8y81JoBtykm2Whek7OXCOtWsH4%2B1T5Rjg1PIlcyjfmA6w0R5Q2JLC9XWPhIAjW%2FDZu90WzToylRbO642ClalOVgpCu7SXnoxj6YRuUYrynI989Pf%2BGhGKWff8VaBwxtGAkFhBW5jvY4d2LPWcBI8bZctV9APCWyEcNiB4e7irnI3vrEB6MNEsFerCMtupcm197tkPLTI1toc0PK5DCZnp1VYzoA29PdMGFVeewJjKA6xIGHj93C5S5wOtYSet%2FJ%2BmyHGTmcYXEcScPY%2BtwEf%2BqwCu7dkwkgYMPD1xIvRV7UAYRYt9%2B3Bkt6cYKBv%2F%2FY2UG5lk%2BAMF7VSY7Jbehn5Aezyo5HLmuknFf8dLa5bH8JM6r2faxBi2VqNPbfGh%2FFAXsYHbpGxiPo2Nkgiffi%2B%2B6qHbgCtzybx9614O6ubaWx%2FsWb79JaC3sTrVzqq4a8BDTf0fXy0XSmwYj6d3jKfRpX2M2O8NqcOI3QIQ%2BEiDGTyJgv7eQjEedxOnzDOlz6caHvdYSPGw1oAyflGNPoAYTnDi%2Bhpw06ftV%2B72A6XsA4JBYu6bE35YWrxHj3c%2F%2BojcPU5CXI8p2MPChqr8GOqUBJqNBvROm0uYAy42abSpWo1TMPkg%2FeiTfNtQEl%2FPVN4oW%2FZIW8qXOBHQmJaH5h%2BNl1BLQVNVP5W4Ukymnj05Hbio4Lfae0A31OMioSPkJR%2FjbsvRMgMi9jHrGr%2F%2FtNSbDLRASHvIEViGYwTPgezOaSzephYuEk%2Bs7nM466XxT9NaZN0aYxxjSsc1WmjMOkjhzAn5GWPqMCUGVNoolLtLhXhOobSo2&X-Amz-Signature=80ebddd8afabc59b53c7a9c20dc9daa3efcd19ca7f48702cb23c142a395f74b4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
