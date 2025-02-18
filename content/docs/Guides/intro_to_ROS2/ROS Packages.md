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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y76VZ6FF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICw5Mev4oNQ8LRc5NTfX6b45SI742uOoYGSJmArBRFY8AiEAnD0UjmIvp7aFqYMBasUoMRPxXkfM4NtczOXG7zsI%2FncqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZJJNr8knmQfVsmJCrcAzo9IclgEmjMn4YFU0nN9nf67GVYB4gQJqZq1UFgvlOHtQpopEx%2FewAEXdn91TCj7BgUnZIM2pk%2BxY04w4FVmieJPy%2BfZO5FYIH6cmICuv3XoeHUG7OlLGZ%2FpelIHfYdMiVkA6cZg86r%2FADvLxyeTltOvzJ6TdA8ulbdH6ykPFah%2FZaGVi%2BxOzyu4z%2FI%2FDVLAmWutMF%2B%2FE6ncjlTRVpDgUu9izL4THLYk%2F3OSdRhUHEo3r%2FpoxxCd4cG2XudU%2FC02ogr2EkY87mBe7cOMoW53MK0abtTOiviUGvk0v14auU%2BqngjslIohIO44DsCyMz2vSvySxHcDqILe2x1KsJ22GsrsCACpgIzQN%2BZaxWGfWhg1uQsRDIqqzUqnM%2BOxd38PiuiXe8OVhWTBne68OJwfy0DILHcO97l%2BLjIMUPAEyL4oxIcUI5Z8KjIcpbL3Etc8CNnDav67kdaBWbliPs6jFJ4drkhy9yBEe4v1Cs5SCov4s3rEB7G9oGD5y7qsbfhAp7W27wKRs7OETru5uurF33HFVIAhjv2aybOVXvNZol5nUS6Sr2IoUpcdnqg%2Byhr2%2B6jZnt7DKDo0E3jHIGGbh7YKs%2F5YzQvpwwqvOdj3TQv6%2B945qAKYsEvS9xqMNWM0L0GOqUBec9Hxy%2BEszxZRcRdOWasFjt2A4yAHR22P3YHDBB1V%2BCyChB6FKmUEqqn%2Bnw7oVNHXGNZUOR4oeAz%2F75prfqKf%2FpPo07ENLCeNd4mD8SMfIbBkw9qt0EDLusL%2Fk%2BxCCJVFfYlR2WtJvM0TfQ1%2BmVA%2BZy9nD07yx16smlw6cIPwH4LvQig61OTsDkaqCfAhA5ONg2td4KQf6uaE%2BQiy7nw8c9FU0nv&X-Amz-Signature=12796143bf0e62ac919849e4a6c45fae607ccea3685dcbe0102f1943865f7318&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y76VZ6FF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICw5Mev4oNQ8LRc5NTfX6b45SI742uOoYGSJmArBRFY8AiEAnD0UjmIvp7aFqYMBasUoMRPxXkfM4NtczOXG7zsI%2FncqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZJJNr8knmQfVsmJCrcAzo9IclgEmjMn4YFU0nN9nf67GVYB4gQJqZq1UFgvlOHtQpopEx%2FewAEXdn91TCj7BgUnZIM2pk%2BxY04w4FVmieJPy%2BfZO5FYIH6cmICuv3XoeHUG7OlLGZ%2FpelIHfYdMiVkA6cZg86r%2FADvLxyeTltOvzJ6TdA8ulbdH6ykPFah%2FZaGVi%2BxOzyu4z%2FI%2FDVLAmWutMF%2B%2FE6ncjlTRVpDgUu9izL4THLYk%2F3OSdRhUHEo3r%2FpoxxCd4cG2XudU%2FC02ogr2EkY87mBe7cOMoW53MK0abtTOiviUGvk0v14auU%2BqngjslIohIO44DsCyMz2vSvySxHcDqILe2x1KsJ22GsrsCACpgIzQN%2BZaxWGfWhg1uQsRDIqqzUqnM%2BOxd38PiuiXe8OVhWTBne68OJwfy0DILHcO97l%2BLjIMUPAEyL4oxIcUI5Z8KjIcpbL3Etc8CNnDav67kdaBWbliPs6jFJ4drkhy9yBEe4v1Cs5SCov4s3rEB7G9oGD5y7qsbfhAp7W27wKRs7OETru5uurF33HFVIAhjv2aybOVXvNZol5nUS6Sr2IoUpcdnqg%2Byhr2%2B6jZnt7DKDo0E3jHIGGbh7YKs%2F5YzQvpwwqvOdj3TQv6%2B945qAKYsEvS9xqMNWM0L0GOqUBec9Hxy%2BEszxZRcRdOWasFjt2A4yAHR22P3YHDBB1V%2BCyChB6FKmUEqqn%2Bnw7oVNHXGNZUOR4oeAz%2F75prfqKf%2FpPo07ENLCeNd4mD8SMfIbBkw9qt0EDLusL%2Fk%2BxCCJVFfYlR2WtJvM0TfQ1%2BmVA%2BZy9nD07yx16smlw6cIPwH4LvQig61OTsDkaqCfAhA5ONg2td4KQf6uaE%2BQiy7nw8c9FU0nv&X-Amz-Signature=e1887dfb90aaa9ecb448e5f9d42a682252b002512ecb7611f18ea1c0674cf8a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y76VZ6FF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICw5Mev4oNQ8LRc5NTfX6b45SI742uOoYGSJmArBRFY8AiEAnD0UjmIvp7aFqYMBasUoMRPxXkfM4NtczOXG7zsI%2FncqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZJJNr8knmQfVsmJCrcAzo9IclgEmjMn4YFU0nN9nf67GVYB4gQJqZq1UFgvlOHtQpopEx%2FewAEXdn91TCj7BgUnZIM2pk%2BxY04w4FVmieJPy%2BfZO5FYIH6cmICuv3XoeHUG7OlLGZ%2FpelIHfYdMiVkA6cZg86r%2FADvLxyeTltOvzJ6TdA8ulbdH6ykPFah%2FZaGVi%2BxOzyu4z%2FI%2FDVLAmWutMF%2B%2FE6ncjlTRVpDgUu9izL4THLYk%2F3OSdRhUHEo3r%2FpoxxCd4cG2XudU%2FC02ogr2EkY87mBe7cOMoW53MK0abtTOiviUGvk0v14auU%2BqngjslIohIO44DsCyMz2vSvySxHcDqILe2x1KsJ22GsrsCACpgIzQN%2BZaxWGfWhg1uQsRDIqqzUqnM%2BOxd38PiuiXe8OVhWTBne68OJwfy0DILHcO97l%2BLjIMUPAEyL4oxIcUI5Z8KjIcpbL3Etc8CNnDav67kdaBWbliPs6jFJ4drkhy9yBEe4v1Cs5SCov4s3rEB7G9oGD5y7qsbfhAp7W27wKRs7OETru5uurF33HFVIAhjv2aybOVXvNZol5nUS6Sr2IoUpcdnqg%2Byhr2%2B6jZnt7DKDo0E3jHIGGbh7YKs%2F5YzQvpwwqvOdj3TQv6%2B945qAKYsEvS9xqMNWM0L0GOqUBec9Hxy%2BEszxZRcRdOWasFjt2A4yAHR22P3YHDBB1V%2BCyChB6FKmUEqqn%2Bnw7oVNHXGNZUOR4oeAz%2F75prfqKf%2FpPo07ENLCeNd4mD8SMfIbBkw9qt0EDLusL%2Fk%2BxCCJVFfYlR2WtJvM0TfQ1%2BmVA%2BZy9nD07yx16smlw6cIPwH4LvQig61OTsDkaqCfAhA5ONg2td4KQf6uaE%2BQiy7nw8c9FU0nv&X-Amz-Signature=874d660c937ae798472979fa0bca1c58373697adc67d9ca8ca6105d679bc63bc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y76VZ6FF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICw5Mev4oNQ8LRc5NTfX6b45SI742uOoYGSJmArBRFY8AiEAnD0UjmIvp7aFqYMBasUoMRPxXkfM4NtczOXG7zsI%2FncqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZJJNr8knmQfVsmJCrcAzo9IclgEmjMn4YFU0nN9nf67GVYB4gQJqZq1UFgvlOHtQpopEx%2FewAEXdn91TCj7BgUnZIM2pk%2BxY04w4FVmieJPy%2BfZO5FYIH6cmICuv3XoeHUG7OlLGZ%2FpelIHfYdMiVkA6cZg86r%2FADvLxyeTltOvzJ6TdA8ulbdH6ykPFah%2FZaGVi%2BxOzyu4z%2FI%2FDVLAmWutMF%2B%2FE6ncjlTRVpDgUu9izL4THLYk%2F3OSdRhUHEo3r%2FpoxxCd4cG2XudU%2FC02ogr2EkY87mBe7cOMoW53MK0abtTOiviUGvk0v14auU%2BqngjslIohIO44DsCyMz2vSvySxHcDqILe2x1KsJ22GsrsCACpgIzQN%2BZaxWGfWhg1uQsRDIqqzUqnM%2BOxd38PiuiXe8OVhWTBne68OJwfy0DILHcO97l%2BLjIMUPAEyL4oxIcUI5Z8KjIcpbL3Etc8CNnDav67kdaBWbliPs6jFJ4drkhy9yBEe4v1Cs5SCov4s3rEB7G9oGD5y7qsbfhAp7W27wKRs7OETru5uurF33HFVIAhjv2aybOVXvNZol5nUS6Sr2IoUpcdnqg%2Byhr2%2B6jZnt7DKDo0E3jHIGGbh7YKs%2F5YzQvpwwqvOdj3TQv6%2B945qAKYsEvS9xqMNWM0L0GOqUBec9Hxy%2BEszxZRcRdOWasFjt2A4yAHR22P3YHDBB1V%2BCyChB6FKmUEqqn%2Bnw7oVNHXGNZUOR4oeAz%2F75prfqKf%2FpPo07ENLCeNd4mD8SMfIbBkw9qt0EDLusL%2Fk%2BxCCJVFfYlR2WtJvM0TfQ1%2BmVA%2BZy9nD07yx16smlw6cIPwH4LvQig61OTsDkaqCfAhA5ONg2td4KQf6uaE%2BQiy7nw8c9FU0nv&X-Amz-Signature=b4486bc3762779fa67716cd6f43554c8ace4d4dc41b2d190fba3e0ab5958b8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y76VZ6FF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICw5Mev4oNQ8LRc5NTfX6b45SI742uOoYGSJmArBRFY8AiEAnD0UjmIvp7aFqYMBasUoMRPxXkfM4NtczOXG7zsI%2FncqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZJJNr8knmQfVsmJCrcAzo9IclgEmjMn4YFU0nN9nf67GVYB4gQJqZq1UFgvlOHtQpopEx%2FewAEXdn91TCj7BgUnZIM2pk%2BxY04w4FVmieJPy%2BfZO5FYIH6cmICuv3XoeHUG7OlLGZ%2FpelIHfYdMiVkA6cZg86r%2FADvLxyeTltOvzJ6TdA8ulbdH6ykPFah%2FZaGVi%2BxOzyu4z%2FI%2FDVLAmWutMF%2B%2FE6ncjlTRVpDgUu9izL4THLYk%2F3OSdRhUHEo3r%2FpoxxCd4cG2XudU%2FC02ogr2EkY87mBe7cOMoW53MK0abtTOiviUGvk0v14auU%2BqngjslIohIO44DsCyMz2vSvySxHcDqILe2x1KsJ22GsrsCACpgIzQN%2BZaxWGfWhg1uQsRDIqqzUqnM%2BOxd38PiuiXe8OVhWTBne68OJwfy0DILHcO97l%2BLjIMUPAEyL4oxIcUI5Z8KjIcpbL3Etc8CNnDav67kdaBWbliPs6jFJ4drkhy9yBEe4v1Cs5SCov4s3rEB7G9oGD5y7qsbfhAp7W27wKRs7OETru5uurF33HFVIAhjv2aybOVXvNZol5nUS6Sr2IoUpcdnqg%2Byhr2%2B6jZnt7DKDo0E3jHIGGbh7YKs%2F5YzQvpwwqvOdj3TQv6%2B945qAKYsEvS9xqMNWM0L0GOqUBec9Hxy%2BEszxZRcRdOWasFjt2A4yAHR22P3YHDBB1V%2BCyChB6FKmUEqqn%2Bnw7oVNHXGNZUOR4oeAz%2F75prfqKf%2FpPo07ENLCeNd4mD8SMfIbBkw9qt0EDLusL%2Fk%2BxCCJVFfYlR2WtJvM0TfQ1%2BmVA%2BZy9nD07yx16smlw6cIPwH4LvQig61OTsDkaqCfAhA5ONg2td4KQf6uaE%2BQiy7nw8c9FU0nv&X-Amz-Signature=0ad5c96584c138f5a4b3782797f64c09029ccafdd3eb9e9fc751d1aec2836673&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y76VZ6FF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICw5Mev4oNQ8LRc5NTfX6b45SI742uOoYGSJmArBRFY8AiEAnD0UjmIvp7aFqYMBasUoMRPxXkfM4NtczOXG7zsI%2FncqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZJJNr8knmQfVsmJCrcAzo9IclgEmjMn4YFU0nN9nf67GVYB4gQJqZq1UFgvlOHtQpopEx%2FewAEXdn91TCj7BgUnZIM2pk%2BxY04w4FVmieJPy%2BfZO5FYIH6cmICuv3XoeHUG7OlLGZ%2FpelIHfYdMiVkA6cZg86r%2FADvLxyeTltOvzJ6TdA8ulbdH6ykPFah%2FZaGVi%2BxOzyu4z%2FI%2FDVLAmWutMF%2B%2FE6ncjlTRVpDgUu9izL4THLYk%2F3OSdRhUHEo3r%2FpoxxCd4cG2XudU%2FC02ogr2EkY87mBe7cOMoW53MK0abtTOiviUGvk0v14auU%2BqngjslIohIO44DsCyMz2vSvySxHcDqILe2x1KsJ22GsrsCACpgIzQN%2BZaxWGfWhg1uQsRDIqqzUqnM%2BOxd38PiuiXe8OVhWTBne68OJwfy0DILHcO97l%2BLjIMUPAEyL4oxIcUI5Z8KjIcpbL3Etc8CNnDav67kdaBWbliPs6jFJ4drkhy9yBEe4v1Cs5SCov4s3rEB7G9oGD5y7qsbfhAp7W27wKRs7OETru5uurF33HFVIAhjv2aybOVXvNZol5nUS6Sr2IoUpcdnqg%2Byhr2%2B6jZnt7DKDo0E3jHIGGbh7YKs%2F5YzQvpwwqvOdj3TQv6%2B945qAKYsEvS9xqMNWM0L0GOqUBec9Hxy%2BEszxZRcRdOWasFjt2A4yAHR22P3YHDBB1V%2BCyChB6FKmUEqqn%2Bnw7oVNHXGNZUOR4oeAz%2F75prfqKf%2FpPo07ENLCeNd4mD8SMfIbBkw9qt0EDLusL%2Fk%2BxCCJVFfYlR2WtJvM0TfQ1%2BmVA%2BZy9nD07yx16smlw6cIPwH4LvQig61OTsDkaqCfAhA5ONg2td4KQf6uaE%2BQiy7nw8c9FU0nv&X-Amz-Signature=da35bcbe2391d9e23d01a7d711d15a07332ea01db60cf661d546e2800855fa6c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y76VZ6FF%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T040955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCICw5Mev4oNQ8LRc5NTfX6b45SI742uOoYGSJmArBRFY8AiEAnD0UjmIvp7aFqYMBasUoMRPxXkfM4NtczOXG7zsI%2FncqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZJJNr8knmQfVsmJCrcAzo9IclgEmjMn4YFU0nN9nf67GVYB4gQJqZq1UFgvlOHtQpopEx%2FewAEXdn91TCj7BgUnZIM2pk%2BxY04w4FVmieJPy%2BfZO5FYIH6cmICuv3XoeHUG7OlLGZ%2FpelIHfYdMiVkA6cZg86r%2FADvLxyeTltOvzJ6TdA8ulbdH6ykPFah%2FZaGVi%2BxOzyu4z%2FI%2FDVLAmWutMF%2B%2FE6ncjlTRVpDgUu9izL4THLYk%2F3OSdRhUHEo3r%2FpoxxCd4cG2XudU%2FC02ogr2EkY87mBe7cOMoW53MK0abtTOiviUGvk0v14auU%2BqngjslIohIO44DsCyMz2vSvySxHcDqILe2x1KsJ22GsrsCACpgIzQN%2BZaxWGfWhg1uQsRDIqqzUqnM%2BOxd38PiuiXe8OVhWTBne68OJwfy0DILHcO97l%2BLjIMUPAEyL4oxIcUI5Z8KjIcpbL3Etc8CNnDav67kdaBWbliPs6jFJ4drkhy9yBEe4v1Cs5SCov4s3rEB7G9oGD5y7qsbfhAp7W27wKRs7OETru5uurF33HFVIAhjv2aybOVXvNZol5nUS6Sr2IoUpcdnqg%2Byhr2%2B6jZnt7DKDo0E3jHIGGbh7YKs%2F5YzQvpwwqvOdj3TQv6%2B945qAKYsEvS9xqMNWM0L0GOqUBec9Hxy%2BEszxZRcRdOWasFjt2A4yAHR22P3YHDBB1V%2BCyChB6FKmUEqqn%2Bnw7oVNHXGNZUOR4oeAz%2F75prfqKf%2FpPo07ENLCeNd4mD8SMfIbBkw9qt0EDLusL%2Fk%2BxCCJVFfYlR2WtJvM0TfQ1%2BmVA%2BZy9nD07yx16smlw6cIPwH4LvQig61OTsDkaqCfAhA5ONg2td4KQf6uaE%2BQiy7nw8c9FU0nv&X-Amz-Signature=49e8c323d5ff6f6f84d3d826d545447280247cbd475da339d0946ee7e4f2dbe5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
