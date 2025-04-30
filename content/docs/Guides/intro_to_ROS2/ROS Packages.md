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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JS2SZRZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDMQhdgZu8JUWFoiePe%2Fn2rYiyOzPKQr7L7i4r5uh2KSQIgCJ0%2B1HbRyNqjkQtWYA2nc4p0Vvfn7bb9MEdptlXlJ70qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA2E6l%2BFx6nJu1UtCrcA%2BS6Kl67ohdUCRfw%2BYnR%2BxJfOYJpjaDxKECArB1dfIGVcyflYJaDm1R2dk%2Bo2dO5STFyhaD8RCy267tJKGlBNXPCHWg3rPvZkbBqTIpHF2x5ifV8%2BvMkwlK4diCRNxEHphVmfujh1PDOyQ0GTJuXVo99kNLMt%2FMwFbl7eUQRQofgh2xdjdqqbYxXZeeH62YJ2UDeDETZr4%2F1sz908AEtlu7urP8U8SrJKH6FcV67auU7cpPwdzDHRy748iwh75DNe%2FC3rZwH7Glrj8SgvAWXkTgEcvrdsa20Tg9Jq9ktDQ%2F4uMv7nNLZVY%2B9A6uEoag%2FWbHKQRdNRKLC1oRxEx9BkWDgt88y9YUNCbRsHFvVHZdgBimrNO6ScLu3T%2BcaGpRSynPYNb8R9FsG3hsotVfaEQLpvjGH39gBBrgrfufadsoBJv%2FCHjyeLzaIrFQwl%2Fh0aYcy8pDevVmAvS1f98OpZk%2B6lFUgzCiHJHYVPhJaYvaNKmcQagR0BcSUKF7KbOeY4s7KWTKk4C4uwn3%2BdTFlY4I%2BXSwNeGt7U6ixl%2F6jUg9ImJNaNpq3sXGh6cuch%2BGKom5i%2Bjoce7gergvysNn1kHVpNOto9XjbpPAmv2sWz%2BCrzUB%2BIcNmcPFAjqARMK2yx8AGOqUBp1K9l7anjfp1hpimmInwJMp56ZY8CoCd5Q5Nm2S%2FJY9OXBESsQWjgezYYFy3ZkC564xvOHJIsq%2BcrWD6SBqOR58HKJfk%2BjTTDkYwpHBfKMg%2F42DFJOuUSyilN2dlBqM16VkgEZrUCYeetqh1wdhieqs7l1zDSVabluGsTyCih%2BEXL4vfZx1eJLGGigicg1%2FU7IE6prxn2jgVCiVB%2FMhXpJD%2FgoJz&X-Amz-Signature=d2c76ce1aa6cf19be657e38ae28dcbd1d084cd8dde2ee1534b2bd07f5b832295&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JS2SZRZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDMQhdgZu8JUWFoiePe%2Fn2rYiyOzPKQr7L7i4r5uh2KSQIgCJ0%2B1HbRyNqjkQtWYA2nc4p0Vvfn7bb9MEdptlXlJ70qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA2E6l%2BFx6nJu1UtCrcA%2BS6Kl67ohdUCRfw%2BYnR%2BxJfOYJpjaDxKECArB1dfIGVcyflYJaDm1R2dk%2Bo2dO5STFyhaD8RCy267tJKGlBNXPCHWg3rPvZkbBqTIpHF2x5ifV8%2BvMkwlK4diCRNxEHphVmfujh1PDOyQ0GTJuXVo99kNLMt%2FMwFbl7eUQRQofgh2xdjdqqbYxXZeeH62YJ2UDeDETZr4%2F1sz908AEtlu7urP8U8SrJKH6FcV67auU7cpPwdzDHRy748iwh75DNe%2FC3rZwH7Glrj8SgvAWXkTgEcvrdsa20Tg9Jq9ktDQ%2F4uMv7nNLZVY%2B9A6uEoag%2FWbHKQRdNRKLC1oRxEx9BkWDgt88y9YUNCbRsHFvVHZdgBimrNO6ScLu3T%2BcaGpRSynPYNb8R9FsG3hsotVfaEQLpvjGH39gBBrgrfufadsoBJv%2FCHjyeLzaIrFQwl%2Fh0aYcy8pDevVmAvS1f98OpZk%2B6lFUgzCiHJHYVPhJaYvaNKmcQagR0BcSUKF7KbOeY4s7KWTKk4C4uwn3%2BdTFlY4I%2BXSwNeGt7U6ixl%2F6jUg9ImJNaNpq3sXGh6cuch%2BGKom5i%2Bjoce7gergvysNn1kHVpNOto9XjbpPAmv2sWz%2BCrzUB%2BIcNmcPFAjqARMK2yx8AGOqUBp1K9l7anjfp1hpimmInwJMp56ZY8CoCd5Q5Nm2S%2FJY9OXBESsQWjgezYYFy3ZkC564xvOHJIsq%2BcrWD6SBqOR58HKJfk%2BjTTDkYwpHBfKMg%2F42DFJOuUSyilN2dlBqM16VkgEZrUCYeetqh1wdhieqs7l1zDSVabluGsTyCih%2BEXL4vfZx1eJLGGigicg1%2FU7IE6prxn2jgVCiVB%2FMhXpJD%2FgoJz&X-Amz-Signature=39108c65c3bb7fb0cebb608dfaacb493905eddd250343b4042d98ce00651395c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JS2SZRZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDMQhdgZu8JUWFoiePe%2Fn2rYiyOzPKQr7L7i4r5uh2KSQIgCJ0%2B1HbRyNqjkQtWYA2nc4p0Vvfn7bb9MEdptlXlJ70qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA2E6l%2BFx6nJu1UtCrcA%2BS6Kl67ohdUCRfw%2BYnR%2BxJfOYJpjaDxKECArB1dfIGVcyflYJaDm1R2dk%2Bo2dO5STFyhaD8RCy267tJKGlBNXPCHWg3rPvZkbBqTIpHF2x5ifV8%2BvMkwlK4diCRNxEHphVmfujh1PDOyQ0GTJuXVo99kNLMt%2FMwFbl7eUQRQofgh2xdjdqqbYxXZeeH62YJ2UDeDETZr4%2F1sz908AEtlu7urP8U8SrJKH6FcV67auU7cpPwdzDHRy748iwh75DNe%2FC3rZwH7Glrj8SgvAWXkTgEcvrdsa20Tg9Jq9ktDQ%2F4uMv7nNLZVY%2B9A6uEoag%2FWbHKQRdNRKLC1oRxEx9BkWDgt88y9YUNCbRsHFvVHZdgBimrNO6ScLu3T%2BcaGpRSynPYNb8R9FsG3hsotVfaEQLpvjGH39gBBrgrfufadsoBJv%2FCHjyeLzaIrFQwl%2Fh0aYcy8pDevVmAvS1f98OpZk%2B6lFUgzCiHJHYVPhJaYvaNKmcQagR0BcSUKF7KbOeY4s7KWTKk4C4uwn3%2BdTFlY4I%2BXSwNeGt7U6ixl%2F6jUg9ImJNaNpq3sXGh6cuch%2BGKom5i%2Bjoce7gergvysNn1kHVpNOto9XjbpPAmv2sWz%2BCrzUB%2BIcNmcPFAjqARMK2yx8AGOqUBp1K9l7anjfp1hpimmInwJMp56ZY8CoCd5Q5Nm2S%2FJY9OXBESsQWjgezYYFy3ZkC564xvOHJIsq%2BcrWD6SBqOR58HKJfk%2BjTTDkYwpHBfKMg%2F42DFJOuUSyilN2dlBqM16VkgEZrUCYeetqh1wdhieqs7l1zDSVabluGsTyCih%2BEXL4vfZx1eJLGGigicg1%2FU7IE6prxn2jgVCiVB%2FMhXpJD%2FgoJz&X-Amz-Signature=35cebeb9be8933a4e0719be44ca7300f79f98c90dd623b7eb56f7e8edbd70aca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JS2SZRZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDMQhdgZu8JUWFoiePe%2Fn2rYiyOzPKQr7L7i4r5uh2KSQIgCJ0%2B1HbRyNqjkQtWYA2nc4p0Vvfn7bb9MEdptlXlJ70qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA2E6l%2BFx6nJu1UtCrcA%2BS6Kl67ohdUCRfw%2BYnR%2BxJfOYJpjaDxKECArB1dfIGVcyflYJaDm1R2dk%2Bo2dO5STFyhaD8RCy267tJKGlBNXPCHWg3rPvZkbBqTIpHF2x5ifV8%2BvMkwlK4diCRNxEHphVmfujh1PDOyQ0GTJuXVo99kNLMt%2FMwFbl7eUQRQofgh2xdjdqqbYxXZeeH62YJ2UDeDETZr4%2F1sz908AEtlu7urP8U8SrJKH6FcV67auU7cpPwdzDHRy748iwh75DNe%2FC3rZwH7Glrj8SgvAWXkTgEcvrdsa20Tg9Jq9ktDQ%2F4uMv7nNLZVY%2B9A6uEoag%2FWbHKQRdNRKLC1oRxEx9BkWDgt88y9YUNCbRsHFvVHZdgBimrNO6ScLu3T%2BcaGpRSynPYNb8R9FsG3hsotVfaEQLpvjGH39gBBrgrfufadsoBJv%2FCHjyeLzaIrFQwl%2Fh0aYcy8pDevVmAvS1f98OpZk%2B6lFUgzCiHJHYVPhJaYvaNKmcQagR0BcSUKF7KbOeY4s7KWTKk4C4uwn3%2BdTFlY4I%2BXSwNeGt7U6ixl%2F6jUg9ImJNaNpq3sXGh6cuch%2BGKom5i%2Bjoce7gergvysNn1kHVpNOto9XjbpPAmv2sWz%2BCrzUB%2BIcNmcPFAjqARMK2yx8AGOqUBp1K9l7anjfp1hpimmInwJMp56ZY8CoCd5Q5Nm2S%2FJY9OXBESsQWjgezYYFy3ZkC564xvOHJIsq%2BcrWD6SBqOR58HKJfk%2BjTTDkYwpHBfKMg%2F42DFJOuUSyilN2dlBqM16VkgEZrUCYeetqh1wdhieqs7l1zDSVabluGsTyCih%2BEXL4vfZx1eJLGGigicg1%2FU7IE6prxn2jgVCiVB%2FMhXpJD%2FgoJz&X-Amz-Signature=e1732f471a03e355df58bab61608743840c0470d994d92879e8a580e06ef7a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JS2SZRZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDMQhdgZu8JUWFoiePe%2Fn2rYiyOzPKQr7L7i4r5uh2KSQIgCJ0%2B1HbRyNqjkQtWYA2nc4p0Vvfn7bb9MEdptlXlJ70qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA2E6l%2BFx6nJu1UtCrcA%2BS6Kl67ohdUCRfw%2BYnR%2BxJfOYJpjaDxKECArB1dfIGVcyflYJaDm1R2dk%2Bo2dO5STFyhaD8RCy267tJKGlBNXPCHWg3rPvZkbBqTIpHF2x5ifV8%2BvMkwlK4diCRNxEHphVmfujh1PDOyQ0GTJuXVo99kNLMt%2FMwFbl7eUQRQofgh2xdjdqqbYxXZeeH62YJ2UDeDETZr4%2F1sz908AEtlu7urP8U8SrJKH6FcV67auU7cpPwdzDHRy748iwh75DNe%2FC3rZwH7Glrj8SgvAWXkTgEcvrdsa20Tg9Jq9ktDQ%2F4uMv7nNLZVY%2B9A6uEoag%2FWbHKQRdNRKLC1oRxEx9BkWDgt88y9YUNCbRsHFvVHZdgBimrNO6ScLu3T%2BcaGpRSynPYNb8R9FsG3hsotVfaEQLpvjGH39gBBrgrfufadsoBJv%2FCHjyeLzaIrFQwl%2Fh0aYcy8pDevVmAvS1f98OpZk%2B6lFUgzCiHJHYVPhJaYvaNKmcQagR0BcSUKF7KbOeY4s7KWTKk4C4uwn3%2BdTFlY4I%2BXSwNeGt7U6ixl%2F6jUg9ImJNaNpq3sXGh6cuch%2BGKom5i%2Bjoce7gergvysNn1kHVpNOto9XjbpPAmv2sWz%2BCrzUB%2BIcNmcPFAjqARMK2yx8AGOqUBp1K9l7anjfp1hpimmInwJMp56ZY8CoCd5Q5Nm2S%2FJY9OXBESsQWjgezYYFy3ZkC564xvOHJIsq%2BcrWD6SBqOR58HKJfk%2BjTTDkYwpHBfKMg%2F42DFJOuUSyilN2dlBqM16VkgEZrUCYeetqh1wdhieqs7l1zDSVabluGsTyCih%2BEXL4vfZx1eJLGGigicg1%2FU7IE6prxn2jgVCiVB%2FMhXpJD%2FgoJz&X-Amz-Signature=14c8c1378f6c6bd5c5088fb8a5fc24b07a1ba7ed549068776e393bd2308c7faf&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JS2SZRZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDMQhdgZu8JUWFoiePe%2Fn2rYiyOzPKQr7L7i4r5uh2KSQIgCJ0%2B1HbRyNqjkQtWYA2nc4p0Vvfn7bb9MEdptlXlJ70qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA2E6l%2BFx6nJu1UtCrcA%2BS6Kl67ohdUCRfw%2BYnR%2BxJfOYJpjaDxKECArB1dfIGVcyflYJaDm1R2dk%2Bo2dO5STFyhaD8RCy267tJKGlBNXPCHWg3rPvZkbBqTIpHF2x5ifV8%2BvMkwlK4diCRNxEHphVmfujh1PDOyQ0GTJuXVo99kNLMt%2FMwFbl7eUQRQofgh2xdjdqqbYxXZeeH62YJ2UDeDETZr4%2F1sz908AEtlu7urP8U8SrJKH6FcV67auU7cpPwdzDHRy748iwh75DNe%2FC3rZwH7Glrj8SgvAWXkTgEcvrdsa20Tg9Jq9ktDQ%2F4uMv7nNLZVY%2B9A6uEoag%2FWbHKQRdNRKLC1oRxEx9BkWDgt88y9YUNCbRsHFvVHZdgBimrNO6ScLu3T%2BcaGpRSynPYNb8R9FsG3hsotVfaEQLpvjGH39gBBrgrfufadsoBJv%2FCHjyeLzaIrFQwl%2Fh0aYcy8pDevVmAvS1f98OpZk%2B6lFUgzCiHJHYVPhJaYvaNKmcQagR0BcSUKF7KbOeY4s7KWTKk4C4uwn3%2BdTFlY4I%2BXSwNeGt7U6ixl%2F6jUg9ImJNaNpq3sXGh6cuch%2BGKom5i%2Bjoce7gergvysNn1kHVpNOto9XjbpPAmv2sWz%2BCrzUB%2BIcNmcPFAjqARMK2yx8AGOqUBp1K9l7anjfp1hpimmInwJMp56ZY8CoCd5Q5Nm2S%2FJY9OXBESsQWjgezYYFy3ZkC564xvOHJIsq%2BcrWD6SBqOR58HKJfk%2BjTTDkYwpHBfKMg%2F42DFJOuUSyilN2dlBqM16VkgEZrUCYeetqh1wdhieqs7l1zDSVabluGsTyCih%2BEXL4vfZx1eJLGGigicg1%2FU7IE6prxn2jgVCiVB%2FMhXpJD%2FgoJz&X-Amz-Signature=463a586b51e4a1c99fc01bc2d9fe8e9a2e757fc25da70b5bdb2b7a842abbeb90&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JS2SZRZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDMQhdgZu8JUWFoiePe%2Fn2rYiyOzPKQr7L7i4r5uh2KSQIgCJ0%2B1HbRyNqjkQtWYA2nc4p0Vvfn7bb9MEdptlXlJ70qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA2E6l%2BFx6nJu1UtCrcA%2BS6Kl67ohdUCRfw%2BYnR%2BxJfOYJpjaDxKECArB1dfIGVcyflYJaDm1R2dk%2Bo2dO5STFyhaD8RCy267tJKGlBNXPCHWg3rPvZkbBqTIpHF2x5ifV8%2BvMkwlK4diCRNxEHphVmfujh1PDOyQ0GTJuXVo99kNLMt%2FMwFbl7eUQRQofgh2xdjdqqbYxXZeeH62YJ2UDeDETZr4%2F1sz908AEtlu7urP8U8SrJKH6FcV67auU7cpPwdzDHRy748iwh75DNe%2FC3rZwH7Glrj8SgvAWXkTgEcvrdsa20Tg9Jq9ktDQ%2F4uMv7nNLZVY%2B9A6uEoag%2FWbHKQRdNRKLC1oRxEx9BkWDgt88y9YUNCbRsHFvVHZdgBimrNO6ScLu3T%2BcaGpRSynPYNb8R9FsG3hsotVfaEQLpvjGH39gBBrgrfufadsoBJv%2FCHjyeLzaIrFQwl%2Fh0aYcy8pDevVmAvS1f98OpZk%2B6lFUgzCiHJHYVPhJaYvaNKmcQagR0BcSUKF7KbOeY4s7KWTKk4C4uwn3%2BdTFlY4I%2BXSwNeGt7U6ixl%2F6jUg9ImJNaNpq3sXGh6cuch%2BGKom5i%2Bjoce7gergvysNn1kHVpNOto9XjbpPAmv2sWz%2BCrzUB%2BIcNmcPFAjqARMK2yx8AGOqUBp1K9l7anjfp1hpimmInwJMp56ZY8CoCd5Q5Nm2S%2FJY9OXBESsQWjgezYYFy3ZkC564xvOHJIsq%2BcrWD6SBqOR58HKJfk%2BjTTDkYwpHBfKMg%2F42DFJOuUSyilN2dlBqM16VkgEZrUCYeetqh1wdhieqs7l1zDSVabluGsTyCih%2BEXL4vfZx1eJLGGigicg1%2FU7IE6prxn2jgVCiVB%2FMhXpJD%2FgoJz&X-Amz-Signature=c5affd33c6765ecf922f9e41ca2ebe47be8bf1b41343b16830a7a15e89f98641&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
