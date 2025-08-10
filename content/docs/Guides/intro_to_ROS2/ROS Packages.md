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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCAPJBY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0rXLXjK1U%2Bvvu6kE4KvxLgdlTelA%2FMW8MsA56mLFC1AiEA9y4%2Bzxfmqnty6eW5PUYxYqrHNPPy526sUkXRI%2FtCmEAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBLmhcDhAbDKQO33ircA0lYizeSoTelpiSUqRMLpWxmgeH5Ksit6egldOJ3p1hAONe1ZvGB9OzKTsTDrcjkmbI1SAR0EWzuTLk09pibRSQEMbjSO%2BZtWOe9GTAFuJdBAXcU16bDPMfza3WYuSdj0khoTu722%2BFahB2YwJXcgyPJ8u000t9z%2BhobB6kytD9V0eyOf2MJpRrTRhKPa4TH6uIlUt7m0uTmk6v9rXdJ4nX0VyDh2kKaL7bMHeyRB%2FrcDnRv4EKUHw2Jq7uUR7dKTGtqf39%2BhQyV%2FGo9hPZBeQIn8pdc%2FPTvYXk6Exjsj8YbsyLeagBkd4WkTMnY1sNudZKVtjN79vm9AsYEw3sTb9XRLatubEbo60csG0owxUtoEvEESivvlrTyP3BAUQvQbDXOle8vmwMMyODsZ%2B7MCuADAFd%2FSbd47zOvqawXy9nPNjoZEvj9U50gje2P37NOkf9ZugaH48lkf%2FY7%2FjzXZNbMNm9%2FbRGK3xQuk0DqTLjOp5wOIzgfEVgS46Wa%2Fr8JteTIDdxtCuL%2ByBiwsAijOEHOaWzSHg8K%2FNYSJ%2FtxNqunPBcVWW%2FmE333OZSTPxVLNnI9UtwG52gaHK%2F6oNjWVlR2fspn1Lth8iCktZgSXLJgXX08K6heVWk%2FQ7%2FFMKXv4cQGOqUBqTN05gZc6JKnXJqn2WV8fpd4Va5oThwx2RocDmkFLCY%2BvRUErXAbErhEkbnGla39Jyvmnjkhi4xvg4VNwsoRo701HrCjMaWKhw79SG9MNxmepoz2Mok1hMXN6IMbal9DCUxAlGsnYekbvHTGwCE00iw1v5xAoo0v1fXDUnhA4gwGH8a4LaMs%2BzSnrF7rcinaL5RDnHlPThT10gv0V4u%2BdMuUTZva&X-Amz-Signature=2025af9239500b29a907b323465a6c3ec1942d19c6858c8d1a73b0d40102af94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCAPJBY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0rXLXjK1U%2Bvvu6kE4KvxLgdlTelA%2FMW8MsA56mLFC1AiEA9y4%2Bzxfmqnty6eW5PUYxYqrHNPPy526sUkXRI%2FtCmEAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBLmhcDhAbDKQO33ircA0lYizeSoTelpiSUqRMLpWxmgeH5Ksit6egldOJ3p1hAONe1ZvGB9OzKTsTDrcjkmbI1SAR0EWzuTLk09pibRSQEMbjSO%2BZtWOe9GTAFuJdBAXcU16bDPMfza3WYuSdj0khoTu722%2BFahB2YwJXcgyPJ8u000t9z%2BhobB6kytD9V0eyOf2MJpRrTRhKPa4TH6uIlUt7m0uTmk6v9rXdJ4nX0VyDh2kKaL7bMHeyRB%2FrcDnRv4EKUHw2Jq7uUR7dKTGtqf39%2BhQyV%2FGo9hPZBeQIn8pdc%2FPTvYXk6Exjsj8YbsyLeagBkd4WkTMnY1sNudZKVtjN79vm9AsYEw3sTb9XRLatubEbo60csG0owxUtoEvEESivvlrTyP3BAUQvQbDXOle8vmwMMyODsZ%2B7MCuADAFd%2FSbd47zOvqawXy9nPNjoZEvj9U50gje2P37NOkf9ZugaH48lkf%2FY7%2FjzXZNbMNm9%2FbRGK3xQuk0DqTLjOp5wOIzgfEVgS46Wa%2Fr8JteTIDdxtCuL%2ByBiwsAijOEHOaWzSHg8K%2FNYSJ%2FtxNqunPBcVWW%2FmE333OZSTPxVLNnI9UtwG52gaHK%2F6oNjWVlR2fspn1Lth8iCktZgSXLJgXX08K6heVWk%2FQ7%2FFMKXv4cQGOqUBqTN05gZc6JKnXJqn2WV8fpd4Va5oThwx2RocDmkFLCY%2BvRUErXAbErhEkbnGla39Jyvmnjkhi4xvg4VNwsoRo701HrCjMaWKhw79SG9MNxmepoz2Mok1hMXN6IMbal9DCUxAlGsnYekbvHTGwCE00iw1v5xAoo0v1fXDUnhA4gwGH8a4LaMs%2BzSnrF7rcinaL5RDnHlPThT10gv0V4u%2BdMuUTZva&X-Amz-Signature=7c5ce9fcd4978a4a0fdf9834d237372c36a3eefb3a3d08612ca251d8e246f7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCAPJBY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0rXLXjK1U%2Bvvu6kE4KvxLgdlTelA%2FMW8MsA56mLFC1AiEA9y4%2Bzxfmqnty6eW5PUYxYqrHNPPy526sUkXRI%2FtCmEAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBLmhcDhAbDKQO33ircA0lYizeSoTelpiSUqRMLpWxmgeH5Ksit6egldOJ3p1hAONe1ZvGB9OzKTsTDrcjkmbI1SAR0EWzuTLk09pibRSQEMbjSO%2BZtWOe9GTAFuJdBAXcU16bDPMfza3WYuSdj0khoTu722%2BFahB2YwJXcgyPJ8u000t9z%2BhobB6kytD9V0eyOf2MJpRrTRhKPa4TH6uIlUt7m0uTmk6v9rXdJ4nX0VyDh2kKaL7bMHeyRB%2FrcDnRv4EKUHw2Jq7uUR7dKTGtqf39%2BhQyV%2FGo9hPZBeQIn8pdc%2FPTvYXk6Exjsj8YbsyLeagBkd4WkTMnY1sNudZKVtjN79vm9AsYEw3sTb9XRLatubEbo60csG0owxUtoEvEESivvlrTyP3BAUQvQbDXOle8vmwMMyODsZ%2B7MCuADAFd%2FSbd47zOvqawXy9nPNjoZEvj9U50gje2P37NOkf9ZugaH48lkf%2FY7%2FjzXZNbMNm9%2FbRGK3xQuk0DqTLjOp5wOIzgfEVgS46Wa%2Fr8JteTIDdxtCuL%2ByBiwsAijOEHOaWzSHg8K%2FNYSJ%2FtxNqunPBcVWW%2FmE333OZSTPxVLNnI9UtwG52gaHK%2F6oNjWVlR2fspn1Lth8iCktZgSXLJgXX08K6heVWk%2FQ7%2FFMKXv4cQGOqUBqTN05gZc6JKnXJqn2WV8fpd4Va5oThwx2RocDmkFLCY%2BvRUErXAbErhEkbnGla39Jyvmnjkhi4xvg4VNwsoRo701HrCjMaWKhw79SG9MNxmepoz2Mok1hMXN6IMbal9DCUxAlGsnYekbvHTGwCE00iw1v5xAoo0v1fXDUnhA4gwGH8a4LaMs%2BzSnrF7rcinaL5RDnHlPThT10gv0V4u%2BdMuUTZva&X-Amz-Signature=84006597830d58bef12d6591b238b22b1cb670e2deba10a784f112a75ccaa62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCAPJBY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0rXLXjK1U%2Bvvu6kE4KvxLgdlTelA%2FMW8MsA56mLFC1AiEA9y4%2Bzxfmqnty6eW5PUYxYqrHNPPy526sUkXRI%2FtCmEAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBLmhcDhAbDKQO33ircA0lYizeSoTelpiSUqRMLpWxmgeH5Ksit6egldOJ3p1hAONe1ZvGB9OzKTsTDrcjkmbI1SAR0EWzuTLk09pibRSQEMbjSO%2BZtWOe9GTAFuJdBAXcU16bDPMfza3WYuSdj0khoTu722%2BFahB2YwJXcgyPJ8u000t9z%2BhobB6kytD9V0eyOf2MJpRrTRhKPa4TH6uIlUt7m0uTmk6v9rXdJ4nX0VyDh2kKaL7bMHeyRB%2FrcDnRv4EKUHw2Jq7uUR7dKTGtqf39%2BhQyV%2FGo9hPZBeQIn8pdc%2FPTvYXk6Exjsj8YbsyLeagBkd4WkTMnY1sNudZKVtjN79vm9AsYEw3sTb9XRLatubEbo60csG0owxUtoEvEESivvlrTyP3BAUQvQbDXOle8vmwMMyODsZ%2B7MCuADAFd%2FSbd47zOvqawXy9nPNjoZEvj9U50gje2P37NOkf9ZugaH48lkf%2FY7%2FjzXZNbMNm9%2FbRGK3xQuk0DqTLjOp5wOIzgfEVgS46Wa%2Fr8JteTIDdxtCuL%2ByBiwsAijOEHOaWzSHg8K%2FNYSJ%2FtxNqunPBcVWW%2FmE333OZSTPxVLNnI9UtwG52gaHK%2F6oNjWVlR2fspn1Lth8iCktZgSXLJgXX08K6heVWk%2FQ7%2FFMKXv4cQGOqUBqTN05gZc6JKnXJqn2WV8fpd4Va5oThwx2RocDmkFLCY%2BvRUErXAbErhEkbnGla39Jyvmnjkhi4xvg4VNwsoRo701HrCjMaWKhw79SG9MNxmepoz2Mok1hMXN6IMbal9DCUxAlGsnYekbvHTGwCE00iw1v5xAoo0v1fXDUnhA4gwGH8a4LaMs%2BzSnrF7rcinaL5RDnHlPThT10gv0V4u%2BdMuUTZva&X-Amz-Signature=a0c1815f320a7ffaee0edf62daf8d46305d457d74bea4449f200653fd3226d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCAPJBY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0rXLXjK1U%2Bvvu6kE4KvxLgdlTelA%2FMW8MsA56mLFC1AiEA9y4%2Bzxfmqnty6eW5PUYxYqrHNPPy526sUkXRI%2FtCmEAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBLmhcDhAbDKQO33ircA0lYizeSoTelpiSUqRMLpWxmgeH5Ksit6egldOJ3p1hAONe1ZvGB9OzKTsTDrcjkmbI1SAR0EWzuTLk09pibRSQEMbjSO%2BZtWOe9GTAFuJdBAXcU16bDPMfza3WYuSdj0khoTu722%2BFahB2YwJXcgyPJ8u000t9z%2BhobB6kytD9V0eyOf2MJpRrTRhKPa4TH6uIlUt7m0uTmk6v9rXdJ4nX0VyDh2kKaL7bMHeyRB%2FrcDnRv4EKUHw2Jq7uUR7dKTGtqf39%2BhQyV%2FGo9hPZBeQIn8pdc%2FPTvYXk6Exjsj8YbsyLeagBkd4WkTMnY1sNudZKVtjN79vm9AsYEw3sTb9XRLatubEbo60csG0owxUtoEvEESivvlrTyP3BAUQvQbDXOle8vmwMMyODsZ%2B7MCuADAFd%2FSbd47zOvqawXy9nPNjoZEvj9U50gje2P37NOkf9ZugaH48lkf%2FY7%2FjzXZNbMNm9%2FbRGK3xQuk0DqTLjOp5wOIzgfEVgS46Wa%2Fr8JteTIDdxtCuL%2ByBiwsAijOEHOaWzSHg8K%2FNYSJ%2FtxNqunPBcVWW%2FmE333OZSTPxVLNnI9UtwG52gaHK%2F6oNjWVlR2fspn1Lth8iCktZgSXLJgXX08K6heVWk%2FQ7%2FFMKXv4cQGOqUBqTN05gZc6JKnXJqn2WV8fpd4Va5oThwx2RocDmkFLCY%2BvRUErXAbErhEkbnGla39Jyvmnjkhi4xvg4VNwsoRo701HrCjMaWKhw79SG9MNxmepoz2Mok1hMXN6IMbal9DCUxAlGsnYekbvHTGwCE00iw1v5xAoo0v1fXDUnhA4gwGH8a4LaMs%2BzSnrF7rcinaL5RDnHlPThT10gv0V4u%2BdMuUTZva&X-Amz-Signature=37e7514b41847008919a33c83894e7c175009fbb854798a37cd3b910efd63ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCAPJBY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0rXLXjK1U%2Bvvu6kE4KvxLgdlTelA%2FMW8MsA56mLFC1AiEA9y4%2Bzxfmqnty6eW5PUYxYqrHNPPy526sUkXRI%2FtCmEAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBLmhcDhAbDKQO33ircA0lYizeSoTelpiSUqRMLpWxmgeH5Ksit6egldOJ3p1hAONe1ZvGB9OzKTsTDrcjkmbI1SAR0EWzuTLk09pibRSQEMbjSO%2BZtWOe9GTAFuJdBAXcU16bDPMfza3WYuSdj0khoTu722%2BFahB2YwJXcgyPJ8u000t9z%2BhobB6kytD9V0eyOf2MJpRrTRhKPa4TH6uIlUt7m0uTmk6v9rXdJ4nX0VyDh2kKaL7bMHeyRB%2FrcDnRv4EKUHw2Jq7uUR7dKTGtqf39%2BhQyV%2FGo9hPZBeQIn8pdc%2FPTvYXk6Exjsj8YbsyLeagBkd4WkTMnY1sNudZKVtjN79vm9AsYEw3sTb9XRLatubEbo60csG0owxUtoEvEESivvlrTyP3BAUQvQbDXOle8vmwMMyODsZ%2B7MCuADAFd%2FSbd47zOvqawXy9nPNjoZEvj9U50gje2P37NOkf9ZugaH48lkf%2FY7%2FjzXZNbMNm9%2FbRGK3xQuk0DqTLjOp5wOIzgfEVgS46Wa%2Fr8JteTIDdxtCuL%2ByBiwsAijOEHOaWzSHg8K%2FNYSJ%2FtxNqunPBcVWW%2FmE333OZSTPxVLNnI9UtwG52gaHK%2F6oNjWVlR2fspn1Lth8iCktZgSXLJgXX08K6heVWk%2FQ7%2FFMKXv4cQGOqUBqTN05gZc6JKnXJqn2WV8fpd4Va5oThwx2RocDmkFLCY%2BvRUErXAbErhEkbnGla39Jyvmnjkhi4xvg4VNwsoRo701HrCjMaWKhw79SG9MNxmepoz2Mok1hMXN6IMbal9DCUxAlGsnYekbvHTGwCE00iw1v5xAoo0v1fXDUnhA4gwGH8a4LaMs%2BzSnrF7rcinaL5RDnHlPThT10gv0V4u%2BdMuUTZva&X-Amz-Signature=31820750229113c2c817bd4f0f672ef35df0a2041c22e68f927e62ff4f12b036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCAPJBY%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0rXLXjK1U%2Bvvu6kE4KvxLgdlTelA%2FMW8MsA56mLFC1AiEA9y4%2Bzxfmqnty6eW5PUYxYqrHNPPy526sUkXRI%2FtCmEAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBLmhcDhAbDKQO33ircA0lYizeSoTelpiSUqRMLpWxmgeH5Ksit6egldOJ3p1hAONe1ZvGB9OzKTsTDrcjkmbI1SAR0EWzuTLk09pibRSQEMbjSO%2BZtWOe9GTAFuJdBAXcU16bDPMfza3WYuSdj0khoTu722%2BFahB2YwJXcgyPJ8u000t9z%2BhobB6kytD9V0eyOf2MJpRrTRhKPa4TH6uIlUt7m0uTmk6v9rXdJ4nX0VyDh2kKaL7bMHeyRB%2FrcDnRv4EKUHw2Jq7uUR7dKTGtqf39%2BhQyV%2FGo9hPZBeQIn8pdc%2FPTvYXk6Exjsj8YbsyLeagBkd4WkTMnY1sNudZKVtjN79vm9AsYEw3sTb9XRLatubEbo60csG0owxUtoEvEESivvlrTyP3BAUQvQbDXOle8vmwMMyODsZ%2B7MCuADAFd%2FSbd47zOvqawXy9nPNjoZEvj9U50gje2P37NOkf9ZugaH48lkf%2FY7%2FjzXZNbMNm9%2FbRGK3xQuk0DqTLjOp5wOIzgfEVgS46Wa%2Fr8JteTIDdxtCuL%2ByBiwsAijOEHOaWzSHg8K%2FNYSJ%2FtxNqunPBcVWW%2FmE333OZSTPxVLNnI9UtwG52gaHK%2F6oNjWVlR2fspn1Lth8iCktZgSXLJgXX08K6heVWk%2FQ7%2FFMKXv4cQGOqUBqTN05gZc6JKnXJqn2WV8fpd4Va5oThwx2RocDmkFLCY%2BvRUErXAbErhEkbnGla39Jyvmnjkhi4xvg4VNwsoRo701HrCjMaWKhw79SG9MNxmepoz2Mok1hMXN6IMbal9DCUxAlGsnYekbvHTGwCE00iw1v5xAoo0v1fXDUnhA4gwGH8a4LaMs%2BzSnrF7rcinaL5RDnHlPThT10gv0V4u%2BdMuUTZva&X-Amz-Signature=6bd96a5d7f5e5cb791f7409ce2931e29cdb96e7d0f67072c14061f395188b57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
