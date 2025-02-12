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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULIRRFR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWQTOFXdncTBszJraGlB7terqitp%2FGqR%2BpUUu8h%2FmdgIgUhXRFgbAszbH2ir3qqEAJMV93kKYZvAUNcy%2BXavJX1sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWOvml4YfquLL4WiyrcA8Aj4a8jlmW4ASXm%2BibInAQ0R6IbCGdK%2FpwKGyBOAVX1rkcJigSpKCdgY0PMS%2B%2BunxuQhmYNMHqSIveS0M1CCbruI2vwlZiOz00V94XrwgrPRqYMhHQLqFerMB8QW3CX%2BF6AfgqDqVGR9%2Fu6A1lQ7mUqruEEY5grZgHZGM41ZPG0hJY123X6%2BtjhFbL8brmyufS92Ysqr7saRwVpy%2FosXT8VuYE5sJWlkxRaxRErYuecGQxQhUzNg6pP1Dh9WZRbRCTV%2BO3VnYJRH%2FBCyfUF0d4myPveqlItwF5hVSNPvhvC0XDz0LTVWqd%2Fc1S8Sqy8Ys7G1fJIKY1TxjQ9ysVW7RA4NdTxqx5XkoVbIgMzY80GogLc4RW0mD8%2BCCJehqtSk6CYZHgrDgC1d5BD8OdEmqTUJTI1CqQ%2Fvm9bw93BO1g4BIZi86ngESRRm1Ed2YMhd%2F1fXP6zoYIMTQ7f%2BaZQy8qph%2BcCr%2BOZOY9rG5q%2FLGBK%2BQk3yiwgiSY6qf%2FiIifAGbIY07sqp0JMlmy2qMukjc0AOdvRxe1c2ubj%2B0tySoEqEKrNyeKDANx%2BKQKr8ukIvglSk9FtOnAKY3P%2FijYaIFxR6uwtKybWWN0Pp4fxMIrgYTlRlmOj8%2BsZxfTTMPSNsb0GOqUBy%2BiU6qeVAXkdhkfi3UbNZleNfMMzYRHdNMhZAMGVCzuSf6yk3zjYLVN1nq%2FRgssZnbg5oIdAJBsnmyDpXdg9%2BvQU91KmRsPKrEUQvqxn9v%2Bjg%2FlPNq%2BQovdgB%2FMuUs777eS5yUWqh9JveYWLIOZE4g8eavYYkHEfRptmgv12iB5Zs3RDefSzN9hO0Wpg3FLiH%2BNatksIjp0F3XrSRt1WQD5KVYri&X-Amz-Signature=9dc4a37b2447e41003d183466f2fe946f5c7cae4420cb47b53fcceaddc969b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULIRRFR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWQTOFXdncTBszJraGlB7terqitp%2FGqR%2BpUUu8h%2FmdgIgUhXRFgbAszbH2ir3qqEAJMV93kKYZvAUNcy%2BXavJX1sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWOvml4YfquLL4WiyrcA8Aj4a8jlmW4ASXm%2BibInAQ0R6IbCGdK%2FpwKGyBOAVX1rkcJigSpKCdgY0PMS%2B%2BunxuQhmYNMHqSIveS0M1CCbruI2vwlZiOz00V94XrwgrPRqYMhHQLqFerMB8QW3CX%2BF6AfgqDqVGR9%2Fu6A1lQ7mUqruEEY5grZgHZGM41ZPG0hJY123X6%2BtjhFbL8brmyufS92Ysqr7saRwVpy%2FosXT8VuYE5sJWlkxRaxRErYuecGQxQhUzNg6pP1Dh9WZRbRCTV%2BO3VnYJRH%2FBCyfUF0d4myPveqlItwF5hVSNPvhvC0XDz0LTVWqd%2Fc1S8Sqy8Ys7G1fJIKY1TxjQ9ysVW7RA4NdTxqx5XkoVbIgMzY80GogLc4RW0mD8%2BCCJehqtSk6CYZHgrDgC1d5BD8OdEmqTUJTI1CqQ%2Fvm9bw93BO1g4BIZi86ngESRRm1Ed2YMhd%2F1fXP6zoYIMTQ7f%2BaZQy8qph%2BcCr%2BOZOY9rG5q%2FLGBK%2BQk3yiwgiSY6qf%2FiIifAGbIY07sqp0JMlmy2qMukjc0AOdvRxe1c2ubj%2B0tySoEqEKrNyeKDANx%2BKQKr8ukIvglSk9FtOnAKY3P%2FijYaIFxR6uwtKybWWN0Pp4fxMIrgYTlRlmOj8%2BsZxfTTMPSNsb0GOqUBy%2BiU6qeVAXkdhkfi3UbNZleNfMMzYRHdNMhZAMGVCzuSf6yk3zjYLVN1nq%2FRgssZnbg5oIdAJBsnmyDpXdg9%2BvQU91KmRsPKrEUQvqxn9v%2Bjg%2FlPNq%2BQovdgB%2FMuUs777eS5yUWqh9JveYWLIOZE4g8eavYYkHEfRptmgv12iB5Zs3RDefSzN9hO0Wpg3FLiH%2BNatksIjp0F3XrSRt1WQD5KVYri&X-Amz-Signature=53a78337704f9dd68649849ee9da3e7dd0c154931383f8179c1b8646eecb0595&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULIRRFR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWQTOFXdncTBszJraGlB7terqitp%2FGqR%2BpUUu8h%2FmdgIgUhXRFgbAszbH2ir3qqEAJMV93kKYZvAUNcy%2BXavJX1sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWOvml4YfquLL4WiyrcA8Aj4a8jlmW4ASXm%2BibInAQ0R6IbCGdK%2FpwKGyBOAVX1rkcJigSpKCdgY0PMS%2B%2BunxuQhmYNMHqSIveS0M1CCbruI2vwlZiOz00V94XrwgrPRqYMhHQLqFerMB8QW3CX%2BF6AfgqDqVGR9%2Fu6A1lQ7mUqruEEY5grZgHZGM41ZPG0hJY123X6%2BtjhFbL8brmyufS92Ysqr7saRwVpy%2FosXT8VuYE5sJWlkxRaxRErYuecGQxQhUzNg6pP1Dh9WZRbRCTV%2BO3VnYJRH%2FBCyfUF0d4myPveqlItwF5hVSNPvhvC0XDz0LTVWqd%2Fc1S8Sqy8Ys7G1fJIKY1TxjQ9ysVW7RA4NdTxqx5XkoVbIgMzY80GogLc4RW0mD8%2BCCJehqtSk6CYZHgrDgC1d5BD8OdEmqTUJTI1CqQ%2Fvm9bw93BO1g4BIZi86ngESRRm1Ed2YMhd%2F1fXP6zoYIMTQ7f%2BaZQy8qph%2BcCr%2BOZOY9rG5q%2FLGBK%2BQk3yiwgiSY6qf%2FiIifAGbIY07sqp0JMlmy2qMukjc0AOdvRxe1c2ubj%2B0tySoEqEKrNyeKDANx%2BKQKr8ukIvglSk9FtOnAKY3P%2FijYaIFxR6uwtKybWWN0Pp4fxMIrgYTlRlmOj8%2BsZxfTTMPSNsb0GOqUBy%2BiU6qeVAXkdhkfi3UbNZleNfMMzYRHdNMhZAMGVCzuSf6yk3zjYLVN1nq%2FRgssZnbg5oIdAJBsnmyDpXdg9%2BvQU91KmRsPKrEUQvqxn9v%2Bjg%2FlPNq%2BQovdgB%2FMuUs777eS5yUWqh9JveYWLIOZE4g8eavYYkHEfRptmgv12iB5Zs3RDefSzN9hO0Wpg3FLiH%2BNatksIjp0F3XrSRt1WQD5KVYri&X-Amz-Signature=b05a8a440a70168cd5a354160fcf2e76abf1ed72ee9f686e055177cc6de98ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULIRRFR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWQTOFXdncTBszJraGlB7terqitp%2FGqR%2BpUUu8h%2FmdgIgUhXRFgbAszbH2ir3qqEAJMV93kKYZvAUNcy%2BXavJX1sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWOvml4YfquLL4WiyrcA8Aj4a8jlmW4ASXm%2BibInAQ0R6IbCGdK%2FpwKGyBOAVX1rkcJigSpKCdgY0PMS%2B%2BunxuQhmYNMHqSIveS0M1CCbruI2vwlZiOz00V94XrwgrPRqYMhHQLqFerMB8QW3CX%2BF6AfgqDqVGR9%2Fu6A1lQ7mUqruEEY5grZgHZGM41ZPG0hJY123X6%2BtjhFbL8brmyufS92Ysqr7saRwVpy%2FosXT8VuYE5sJWlkxRaxRErYuecGQxQhUzNg6pP1Dh9WZRbRCTV%2BO3VnYJRH%2FBCyfUF0d4myPveqlItwF5hVSNPvhvC0XDz0LTVWqd%2Fc1S8Sqy8Ys7G1fJIKY1TxjQ9ysVW7RA4NdTxqx5XkoVbIgMzY80GogLc4RW0mD8%2BCCJehqtSk6CYZHgrDgC1d5BD8OdEmqTUJTI1CqQ%2Fvm9bw93BO1g4BIZi86ngESRRm1Ed2YMhd%2F1fXP6zoYIMTQ7f%2BaZQy8qph%2BcCr%2BOZOY9rG5q%2FLGBK%2BQk3yiwgiSY6qf%2FiIifAGbIY07sqp0JMlmy2qMukjc0AOdvRxe1c2ubj%2B0tySoEqEKrNyeKDANx%2BKQKr8ukIvglSk9FtOnAKY3P%2FijYaIFxR6uwtKybWWN0Pp4fxMIrgYTlRlmOj8%2BsZxfTTMPSNsb0GOqUBy%2BiU6qeVAXkdhkfi3UbNZleNfMMzYRHdNMhZAMGVCzuSf6yk3zjYLVN1nq%2FRgssZnbg5oIdAJBsnmyDpXdg9%2BvQU91KmRsPKrEUQvqxn9v%2Bjg%2FlPNq%2BQovdgB%2FMuUs777eS5yUWqh9JveYWLIOZE4g8eavYYkHEfRptmgv12iB5Zs3RDefSzN9hO0Wpg3FLiH%2BNatksIjp0F3XrSRt1WQD5KVYri&X-Amz-Signature=a710244d5dc0c6e329b0b025fe08e843044d59792608344e9dd900d3b9dc035a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULIRRFR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWQTOFXdncTBszJraGlB7terqitp%2FGqR%2BpUUu8h%2FmdgIgUhXRFgbAszbH2ir3qqEAJMV93kKYZvAUNcy%2BXavJX1sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWOvml4YfquLL4WiyrcA8Aj4a8jlmW4ASXm%2BibInAQ0R6IbCGdK%2FpwKGyBOAVX1rkcJigSpKCdgY0PMS%2B%2BunxuQhmYNMHqSIveS0M1CCbruI2vwlZiOz00V94XrwgrPRqYMhHQLqFerMB8QW3CX%2BF6AfgqDqVGR9%2Fu6A1lQ7mUqruEEY5grZgHZGM41ZPG0hJY123X6%2BtjhFbL8brmyufS92Ysqr7saRwVpy%2FosXT8VuYE5sJWlkxRaxRErYuecGQxQhUzNg6pP1Dh9WZRbRCTV%2BO3VnYJRH%2FBCyfUF0d4myPveqlItwF5hVSNPvhvC0XDz0LTVWqd%2Fc1S8Sqy8Ys7G1fJIKY1TxjQ9ysVW7RA4NdTxqx5XkoVbIgMzY80GogLc4RW0mD8%2BCCJehqtSk6CYZHgrDgC1d5BD8OdEmqTUJTI1CqQ%2Fvm9bw93BO1g4BIZi86ngESRRm1Ed2YMhd%2F1fXP6zoYIMTQ7f%2BaZQy8qph%2BcCr%2BOZOY9rG5q%2FLGBK%2BQk3yiwgiSY6qf%2FiIifAGbIY07sqp0JMlmy2qMukjc0AOdvRxe1c2ubj%2B0tySoEqEKrNyeKDANx%2BKQKr8ukIvglSk9FtOnAKY3P%2FijYaIFxR6uwtKybWWN0Pp4fxMIrgYTlRlmOj8%2BsZxfTTMPSNsb0GOqUBy%2BiU6qeVAXkdhkfi3UbNZleNfMMzYRHdNMhZAMGVCzuSf6yk3zjYLVN1nq%2FRgssZnbg5oIdAJBsnmyDpXdg9%2BvQU91KmRsPKrEUQvqxn9v%2Bjg%2FlPNq%2BQovdgB%2FMuUs777eS5yUWqh9JveYWLIOZE4g8eavYYkHEfRptmgv12iB5Zs3RDefSzN9hO0Wpg3FLiH%2BNatksIjp0F3XrSRt1WQD5KVYri&X-Amz-Signature=3c66c8a05ed3cd6e8f76a959ac3d2e538815965f703618b3c91ae3880d22d347&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULIRRFR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWQTOFXdncTBszJraGlB7terqitp%2FGqR%2BpUUu8h%2FmdgIgUhXRFgbAszbH2ir3qqEAJMV93kKYZvAUNcy%2BXavJX1sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWOvml4YfquLL4WiyrcA8Aj4a8jlmW4ASXm%2BibInAQ0R6IbCGdK%2FpwKGyBOAVX1rkcJigSpKCdgY0PMS%2B%2BunxuQhmYNMHqSIveS0M1CCbruI2vwlZiOz00V94XrwgrPRqYMhHQLqFerMB8QW3CX%2BF6AfgqDqVGR9%2Fu6A1lQ7mUqruEEY5grZgHZGM41ZPG0hJY123X6%2BtjhFbL8brmyufS92Ysqr7saRwVpy%2FosXT8VuYE5sJWlkxRaxRErYuecGQxQhUzNg6pP1Dh9WZRbRCTV%2BO3VnYJRH%2FBCyfUF0d4myPveqlItwF5hVSNPvhvC0XDz0LTVWqd%2Fc1S8Sqy8Ys7G1fJIKY1TxjQ9ysVW7RA4NdTxqx5XkoVbIgMzY80GogLc4RW0mD8%2BCCJehqtSk6CYZHgrDgC1d5BD8OdEmqTUJTI1CqQ%2Fvm9bw93BO1g4BIZi86ngESRRm1Ed2YMhd%2F1fXP6zoYIMTQ7f%2BaZQy8qph%2BcCr%2BOZOY9rG5q%2FLGBK%2BQk3yiwgiSY6qf%2FiIifAGbIY07sqp0JMlmy2qMukjc0AOdvRxe1c2ubj%2B0tySoEqEKrNyeKDANx%2BKQKr8ukIvglSk9FtOnAKY3P%2FijYaIFxR6uwtKybWWN0Pp4fxMIrgYTlRlmOj8%2BsZxfTTMPSNsb0GOqUBy%2BiU6qeVAXkdhkfi3UbNZleNfMMzYRHdNMhZAMGVCzuSf6yk3zjYLVN1nq%2FRgssZnbg5oIdAJBsnmyDpXdg9%2BvQU91KmRsPKrEUQvqxn9v%2Bjg%2FlPNq%2BQovdgB%2FMuUs777eS5yUWqh9JveYWLIOZE4g8eavYYkHEfRptmgv12iB5Zs3RDefSzN9hO0Wpg3FLiH%2BNatksIjp0F3XrSRt1WQD5KVYri&X-Amz-Signature=d75a76c386a6810d4d3a2fb6e05e7ac2e0288d0ec405c7d337eb678a7297778a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULIRRFR%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWQTOFXdncTBszJraGlB7terqitp%2FGqR%2BpUUu8h%2FmdgIgUhXRFgbAszbH2ir3qqEAJMV93kKYZvAUNcy%2BXavJX1sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWOvml4YfquLL4WiyrcA8Aj4a8jlmW4ASXm%2BibInAQ0R6IbCGdK%2FpwKGyBOAVX1rkcJigSpKCdgY0PMS%2B%2BunxuQhmYNMHqSIveS0M1CCbruI2vwlZiOz00V94XrwgrPRqYMhHQLqFerMB8QW3CX%2BF6AfgqDqVGR9%2Fu6A1lQ7mUqruEEY5grZgHZGM41ZPG0hJY123X6%2BtjhFbL8brmyufS92Ysqr7saRwVpy%2FosXT8VuYE5sJWlkxRaxRErYuecGQxQhUzNg6pP1Dh9WZRbRCTV%2BO3VnYJRH%2FBCyfUF0d4myPveqlItwF5hVSNPvhvC0XDz0LTVWqd%2Fc1S8Sqy8Ys7G1fJIKY1TxjQ9ysVW7RA4NdTxqx5XkoVbIgMzY80GogLc4RW0mD8%2BCCJehqtSk6CYZHgrDgC1d5BD8OdEmqTUJTI1CqQ%2Fvm9bw93BO1g4BIZi86ngESRRm1Ed2YMhd%2F1fXP6zoYIMTQ7f%2BaZQy8qph%2BcCr%2BOZOY9rG5q%2FLGBK%2BQk3yiwgiSY6qf%2FiIifAGbIY07sqp0JMlmy2qMukjc0AOdvRxe1c2ubj%2B0tySoEqEKrNyeKDANx%2BKQKr8ukIvglSk9FtOnAKY3P%2FijYaIFxR6uwtKybWWN0Pp4fxMIrgYTlRlmOj8%2BsZxfTTMPSNsb0GOqUBy%2BiU6qeVAXkdhkfi3UbNZleNfMMzYRHdNMhZAMGVCzuSf6yk3zjYLVN1nq%2FRgssZnbg5oIdAJBsnmyDpXdg9%2BvQU91KmRsPKrEUQvqxn9v%2Bjg%2FlPNq%2BQovdgB%2FMuUs777eS5yUWqh9JveYWLIOZE4g8eavYYkHEfRptmgv12iB5Zs3RDefSzN9hO0Wpg3FLiH%2BNatksIjp0F3XrSRt1WQD5KVYri&X-Amz-Signature=0037fcfffd968c3ae05a70b8ee1be97feded00d2a3b1100448cc546b30881059&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
