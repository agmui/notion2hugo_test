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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OY3ETW%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIG59fWLyMRpQYMm6GqVSDKOVd%2FdI109OaDuxsTC4RfenAiB7Nn70zcWYQFOvCjP5qonTxfCl66tgnV6JtcTZ2e%2BQqCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMiU9OpUN9jEhm6VONKtwDv9GPhC%2Bkz%2Bi1RvPEgLjD1%2FZ30vKj3xq%2BSumqMGxHZD8DDPAWbwdVi3fuVdC8aOPTk7kkTNvO1avARPniPQl1jCeHg4c5VVjdEF0nCLHJ8z1um%2BGmsmELGN99TkY10CH2atpp1FJk1Hz%2ByD4DjonQrU4nFJ%2FAnih2RcUkY3VX%2FheEbeZDL%2F4jRP3amkXDo82JhUOqihS2u4UfJ4w1mt6PGdoK6L9e86wApRckGszkvZx%2BNlwjNqbFhVTOXeSjLTgQSw5rLHVFJ8JNJJ3mbtAGJfd5afVHrTUAkOcYLH5RBLORPuhiixnWBWrP%2Fe18z6N13aqOcu1WWunbGzAFXPeG5HrbvFpVs7%2Bxh2KzZv%2FNtKBUF8nDgNPcm9YLqY0JbkAs4I6lRDcBCpvjHN9HV0CwxOzPuMEfsh3Ykh9branDzwxvqQg7JrgRaMLrcsoRq1VXd%2BNcV1vNhsWOz0IukrkQI3js9aF20cSwMxyfuTDTJCj4rEkMXbY5I5NyO3Dfm1FDpIcEnxy0%2FB8Pt5ANkATURlP318tlEopV%2FfVPdX58Do%2B2v%2F%2BtcgW4UnA6GfSb9FenYE9ckNMCFmyW9h1wS4Uedq6aAII64qJKuh3QrXHQ%2BOUb%2Ba1RDlv1KMFiis4w%2FJXK0wY6pgFskqSHb%2BHFaaKuYZ22%2FMRcKfDzYR8y7gCcFvpEczkg6cdPLHhWZO0oml6LyCoG0%2BteDqr5CcGNY4btkztvZyPq2i1TOG1STNIaVBzvo%2B8Q7ncXcclPxgud4SDj3LHJFw%2FcRe4lklcVZUqj%2FmZLbAgkkG7btuJIf%2BNZTHvNb3By0oAe%2FAqA%2FtHac0Q5WAQ4CJNlS1WTOYEXnU0mrB7MYJtqX0sjK6J0&X-Amz-Signature=dcf5ba63050221e12b9be72d1ef7169fb637ff40bb297ae3852c43ab024c4e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OY3ETW%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIG59fWLyMRpQYMm6GqVSDKOVd%2FdI109OaDuxsTC4RfenAiB7Nn70zcWYQFOvCjP5qonTxfCl66tgnV6JtcTZ2e%2BQqCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMiU9OpUN9jEhm6VONKtwDv9GPhC%2Bkz%2Bi1RvPEgLjD1%2FZ30vKj3xq%2BSumqMGxHZD8DDPAWbwdVi3fuVdC8aOPTk7kkTNvO1avARPniPQl1jCeHg4c5VVjdEF0nCLHJ8z1um%2BGmsmELGN99TkY10CH2atpp1FJk1Hz%2ByD4DjonQrU4nFJ%2FAnih2RcUkY3VX%2FheEbeZDL%2F4jRP3amkXDo82JhUOqihS2u4UfJ4w1mt6PGdoK6L9e86wApRckGszkvZx%2BNlwjNqbFhVTOXeSjLTgQSw5rLHVFJ8JNJJ3mbtAGJfd5afVHrTUAkOcYLH5RBLORPuhiixnWBWrP%2Fe18z6N13aqOcu1WWunbGzAFXPeG5HrbvFpVs7%2Bxh2KzZv%2FNtKBUF8nDgNPcm9YLqY0JbkAs4I6lRDcBCpvjHN9HV0CwxOzPuMEfsh3Ykh9branDzwxvqQg7JrgRaMLrcsoRq1VXd%2BNcV1vNhsWOz0IukrkQI3js9aF20cSwMxyfuTDTJCj4rEkMXbY5I5NyO3Dfm1FDpIcEnxy0%2FB8Pt5ANkATURlP318tlEopV%2FfVPdX58Do%2B2v%2F%2BtcgW4UnA6GfSb9FenYE9ckNMCFmyW9h1wS4Uedq6aAII64qJKuh3QrXHQ%2BOUb%2Ba1RDlv1KMFiis4w%2FJXK0wY6pgFskqSHb%2BHFaaKuYZ22%2FMRcKfDzYR8y7gCcFvpEczkg6cdPLHhWZO0oml6LyCoG0%2BteDqr5CcGNY4btkztvZyPq2i1TOG1STNIaVBzvo%2B8Q7ncXcclPxgud4SDj3LHJFw%2FcRe4lklcVZUqj%2FmZLbAgkkG7btuJIf%2BNZTHvNb3By0oAe%2FAqA%2FtHac0Q5WAQ4CJNlS1WTOYEXnU0mrB7MYJtqX0sjK6J0&X-Amz-Signature=80a9703d500ce2e95a7ac44cbec67825c622b99cc4eebf61c65a868fdd92d096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OY3ETW%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIG59fWLyMRpQYMm6GqVSDKOVd%2FdI109OaDuxsTC4RfenAiB7Nn70zcWYQFOvCjP5qonTxfCl66tgnV6JtcTZ2e%2BQqCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMiU9OpUN9jEhm6VONKtwDv9GPhC%2Bkz%2Bi1RvPEgLjD1%2FZ30vKj3xq%2BSumqMGxHZD8DDPAWbwdVi3fuVdC8aOPTk7kkTNvO1avARPniPQl1jCeHg4c5VVjdEF0nCLHJ8z1um%2BGmsmELGN99TkY10CH2atpp1FJk1Hz%2ByD4DjonQrU4nFJ%2FAnih2RcUkY3VX%2FheEbeZDL%2F4jRP3amkXDo82JhUOqihS2u4UfJ4w1mt6PGdoK6L9e86wApRckGszkvZx%2BNlwjNqbFhVTOXeSjLTgQSw5rLHVFJ8JNJJ3mbtAGJfd5afVHrTUAkOcYLH5RBLORPuhiixnWBWrP%2Fe18z6N13aqOcu1WWunbGzAFXPeG5HrbvFpVs7%2Bxh2KzZv%2FNtKBUF8nDgNPcm9YLqY0JbkAs4I6lRDcBCpvjHN9HV0CwxOzPuMEfsh3Ykh9branDzwxvqQg7JrgRaMLrcsoRq1VXd%2BNcV1vNhsWOz0IukrkQI3js9aF20cSwMxyfuTDTJCj4rEkMXbY5I5NyO3Dfm1FDpIcEnxy0%2FB8Pt5ANkATURlP318tlEopV%2FfVPdX58Do%2B2v%2F%2BtcgW4UnA6GfSb9FenYE9ckNMCFmyW9h1wS4Uedq6aAII64qJKuh3QrXHQ%2BOUb%2Ba1RDlv1KMFiis4w%2FJXK0wY6pgFskqSHb%2BHFaaKuYZ22%2FMRcKfDzYR8y7gCcFvpEczkg6cdPLHhWZO0oml6LyCoG0%2BteDqr5CcGNY4btkztvZyPq2i1TOG1STNIaVBzvo%2B8Q7ncXcclPxgud4SDj3LHJFw%2FcRe4lklcVZUqj%2FmZLbAgkkG7btuJIf%2BNZTHvNb3By0oAe%2FAqA%2FtHac0Q5WAQ4CJNlS1WTOYEXnU0mrB7MYJtqX0sjK6J0&X-Amz-Signature=bf10e14998fbb7ee92b47b2a2ae7cfab126caafceccd71c4ecc7a67bb065f374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OY3ETW%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIG59fWLyMRpQYMm6GqVSDKOVd%2FdI109OaDuxsTC4RfenAiB7Nn70zcWYQFOvCjP5qonTxfCl66tgnV6JtcTZ2e%2BQqCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMiU9OpUN9jEhm6VONKtwDv9GPhC%2Bkz%2Bi1RvPEgLjD1%2FZ30vKj3xq%2BSumqMGxHZD8DDPAWbwdVi3fuVdC8aOPTk7kkTNvO1avARPniPQl1jCeHg4c5VVjdEF0nCLHJ8z1um%2BGmsmELGN99TkY10CH2atpp1FJk1Hz%2ByD4DjonQrU4nFJ%2FAnih2RcUkY3VX%2FheEbeZDL%2F4jRP3amkXDo82JhUOqihS2u4UfJ4w1mt6PGdoK6L9e86wApRckGszkvZx%2BNlwjNqbFhVTOXeSjLTgQSw5rLHVFJ8JNJJ3mbtAGJfd5afVHrTUAkOcYLH5RBLORPuhiixnWBWrP%2Fe18z6N13aqOcu1WWunbGzAFXPeG5HrbvFpVs7%2Bxh2KzZv%2FNtKBUF8nDgNPcm9YLqY0JbkAs4I6lRDcBCpvjHN9HV0CwxOzPuMEfsh3Ykh9branDzwxvqQg7JrgRaMLrcsoRq1VXd%2BNcV1vNhsWOz0IukrkQI3js9aF20cSwMxyfuTDTJCj4rEkMXbY5I5NyO3Dfm1FDpIcEnxy0%2FB8Pt5ANkATURlP318tlEopV%2FfVPdX58Do%2B2v%2F%2BtcgW4UnA6GfSb9FenYE9ckNMCFmyW9h1wS4Uedq6aAII64qJKuh3QrXHQ%2BOUb%2Ba1RDlv1KMFiis4w%2FJXK0wY6pgFskqSHb%2BHFaaKuYZ22%2FMRcKfDzYR8y7gCcFvpEczkg6cdPLHhWZO0oml6LyCoG0%2BteDqr5CcGNY4btkztvZyPq2i1TOG1STNIaVBzvo%2B8Q7ncXcclPxgud4SDj3LHJFw%2FcRe4lklcVZUqj%2FmZLbAgkkG7btuJIf%2BNZTHvNb3By0oAe%2FAqA%2FtHac0Q5WAQ4CJNlS1WTOYEXnU0mrB7MYJtqX0sjK6J0&X-Amz-Signature=700f232e9c7464cc0f4f895cb233ef117469c717d0307e1014f64012168daf4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OY3ETW%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIG59fWLyMRpQYMm6GqVSDKOVd%2FdI109OaDuxsTC4RfenAiB7Nn70zcWYQFOvCjP5qonTxfCl66tgnV6JtcTZ2e%2BQqCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMiU9OpUN9jEhm6VONKtwDv9GPhC%2Bkz%2Bi1RvPEgLjD1%2FZ30vKj3xq%2BSumqMGxHZD8DDPAWbwdVi3fuVdC8aOPTk7kkTNvO1avARPniPQl1jCeHg4c5VVjdEF0nCLHJ8z1um%2BGmsmELGN99TkY10CH2atpp1FJk1Hz%2ByD4DjonQrU4nFJ%2FAnih2RcUkY3VX%2FheEbeZDL%2F4jRP3amkXDo82JhUOqihS2u4UfJ4w1mt6PGdoK6L9e86wApRckGszkvZx%2BNlwjNqbFhVTOXeSjLTgQSw5rLHVFJ8JNJJ3mbtAGJfd5afVHrTUAkOcYLH5RBLORPuhiixnWBWrP%2Fe18z6N13aqOcu1WWunbGzAFXPeG5HrbvFpVs7%2Bxh2KzZv%2FNtKBUF8nDgNPcm9YLqY0JbkAs4I6lRDcBCpvjHN9HV0CwxOzPuMEfsh3Ykh9branDzwxvqQg7JrgRaMLrcsoRq1VXd%2BNcV1vNhsWOz0IukrkQI3js9aF20cSwMxyfuTDTJCj4rEkMXbY5I5NyO3Dfm1FDpIcEnxy0%2FB8Pt5ANkATURlP318tlEopV%2FfVPdX58Do%2B2v%2F%2BtcgW4UnA6GfSb9FenYE9ckNMCFmyW9h1wS4Uedq6aAII64qJKuh3QrXHQ%2BOUb%2Ba1RDlv1KMFiis4w%2FJXK0wY6pgFskqSHb%2BHFaaKuYZ22%2FMRcKfDzYR8y7gCcFvpEczkg6cdPLHhWZO0oml6LyCoG0%2BteDqr5CcGNY4btkztvZyPq2i1TOG1STNIaVBzvo%2B8Q7ncXcclPxgud4SDj3LHJFw%2FcRe4lklcVZUqj%2FmZLbAgkkG7btuJIf%2BNZTHvNb3By0oAe%2FAqA%2FtHac0Q5WAQ4CJNlS1WTOYEXnU0mrB7MYJtqX0sjK6J0&X-Amz-Signature=474ac8a41561addc75582ec2d07a23d838bfc6976b091c6ea1eef9a943b433f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OY3ETW%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIG59fWLyMRpQYMm6GqVSDKOVd%2FdI109OaDuxsTC4RfenAiB7Nn70zcWYQFOvCjP5qonTxfCl66tgnV6JtcTZ2e%2BQqCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMiU9OpUN9jEhm6VONKtwDv9GPhC%2Bkz%2Bi1RvPEgLjD1%2FZ30vKj3xq%2BSumqMGxHZD8DDPAWbwdVi3fuVdC8aOPTk7kkTNvO1avARPniPQl1jCeHg4c5VVjdEF0nCLHJ8z1um%2BGmsmELGN99TkY10CH2atpp1FJk1Hz%2ByD4DjonQrU4nFJ%2FAnih2RcUkY3VX%2FheEbeZDL%2F4jRP3amkXDo82JhUOqihS2u4UfJ4w1mt6PGdoK6L9e86wApRckGszkvZx%2BNlwjNqbFhVTOXeSjLTgQSw5rLHVFJ8JNJJ3mbtAGJfd5afVHrTUAkOcYLH5RBLORPuhiixnWBWrP%2Fe18z6N13aqOcu1WWunbGzAFXPeG5HrbvFpVs7%2Bxh2KzZv%2FNtKBUF8nDgNPcm9YLqY0JbkAs4I6lRDcBCpvjHN9HV0CwxOzPuMEfsh3Ykh9branDzwxvqQg7JrgRaMLrcsoRq1VXd%2BNcV1vNhsWOz0IukrkQI3js9aF20cSwMxyfuTDTJCj4rEkMXbY5I5NyO3Dfm1FDpIcEnxy0%2FB8Pt5ANkATURlP318tlEopV%2FfVPdX58Do%2B2v%2F%2BtcgW4UnA6GfSb9FenYE9ckNMCFmyW9h1wS4Uedq6aAII64qJKuh3QrXHQ%2BOUb%2Ba1RDlv1KMFiis4w%2FJXK0wY6pgFskqSHb%2BHFaaKuYZ22%2FMRcKfDzYR8y7gCcFvpEczkg6cdPLHhWZO0oml6LyCoG0%2BteDqr5CcGNY4btkztvZyPq2i1TOG1STNIaVBzvo%2B8Q7ncXcclPxgud4SDj3LHJFw%2FcRe4lklcVZUqj%2FmZLbAgkkG7btuJIf%2BNZTHvNb3By0oAe%2FAqA%2FtHac0Q5WAQ4CJNlS1WTOYEXnU0mrB7MYJtqX0sjK6J0&X-Amz-Signature=07e2ccae1bd69b9dc4ae27752a0fc67fc586c04c6688f502d80fdeba9532d6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665OY3ETW%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIG59fWLyMRpQYMm6GqVSDKOVd%2FdI109OaDuxsTC4RfenAiB7Nn70zcWYQFOvCjP5qonTxfCl66tgnV6JtcTZ2e%2BQqCr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMiU9OpUN9jEhm6VONKtwDv9GPhC%2Bkz%2Bi1RvPEgLjD1%2FZ30vKj3xq%2BSumqMGxHZD8DDPAWbwdVi3fuVdC8aOPTk7kkTNvO1avARPniPQl1jCeHg4c5VVjdEF0nCLHJ8z1um%2BGmsmELGN99TkY10CH2atpp1FJk1Hz%2ByD4DjonQrU4nFJ%2FAnih2RcUkY3VX%2FheEbeZDL%2F4jRP3amkXDo82JhUOqihS2u4UfJ4w1mt6PGdoK6L9e86wApRckGszkvZx%2BNlwjNqbFhVTOXeSjLTgQSw5rLHVFJ8JNJJ3mbtAGJfd5afVHrTUAkOcYLH5RBLORPuhiixnWBWrP%2Fe18z6N13aqOcu1WWunbGzAFXPeG5HrbvFpVs7%2Bxh2KzZv%2FNtKBUF8nDgNPcm9YLqY0JbkAs4I6lRDcBCpvjHN9HV0CwxOzPuMEfsh3Ykh9branDzwxvqQg7JrgRaMLrcsoRq1VXd%2BNcV1vNhsWOz0IukrkQI3js9aF20cSwMxyfuTDTJCj4rEkMXbY5I5NyO3Dfm1FDpIcEnxy0%2FB8Pt5ANkATURlP318tlEopV%2FfVPdX58Do%2B2v%2F%2BtcgW4UnA6GfSb9FenYE9ckNMCFmyW9h1wS4Uedq6aAII64qJKuh3QrXHQ%2BOUb%2Ba1RDlv1KMFiis4w%2FJXK0wY6pgFskqSHb%2BHFaaKuYZ22%2FMRcKfDzYR8y7gCcFvpEczkg6cdPLHhWZO0oml6LyCoG0%2BteDqr5CcGNY4btkztvZyPq2i1TOG1STNIaVBzvo%2B8Q7ncXcclPxgud4SDj3LHJFw%2FcRe4lklcVZUqj%2FmZLbAgkkG7btuJIf%2BNZTHvNb3By0oAe%2FAqA%2FtHac0Q5WAQ4CJNlS1WTOYEXnU0mrB7MYJtqX0sjK6J0&X-Amz-Signature=5bdffab94165bf79c647fcc548ab9fc5236dfd2997e26eb4881f31c469cd5f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
