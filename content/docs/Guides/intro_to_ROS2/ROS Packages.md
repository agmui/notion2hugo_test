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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTNP63GW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICpjXrNeLYf0r%2BdZDL3puweWQgOVbEMb05pQGcHkzeo4AiEAo6gtc%2FPbrno4TcYlPFSIIQ8plBOn39Ei4DR7Cjyo8AIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIbLeMwZWhrF0Hl6KCrcA6gci7LKXssQ9QXHNHWGpqhWulXoFRw%2BCOdnkG%2FW%2F06cJ9RbRKKNh8uOhbuDSVAEYsR27c%2FS19RV296OFE9u73hTRdB6A5ulFAkOenUq5PbRyclg2O4S69Vb%2FgV7bhO1Kf3tOT8WpqsGgCiexqC%2BOE3EoqIM0wK5D1Ycxtm%2FY%2B3%2B%2BC0AfxqzDhk7Z6rSCyRC2l0AJVGyS04UhNpERVVo9mxV8dC5BvBleFTU9vqEPgni7YE18a8lTwm%2B8b%2FAbBKNa3A%2Fyae92ZAYNKypuYf057dkbFSpNONrsKpEeEHtT76xMazjXMm7gsZWnRtwIUK%2BOicPX6pptlKrcEfI40cCQN%2FOZJGzwhcmK5OW1Z4pV2SykoswUfi6kYtSHT6LuOGTFhUVCTChaIusnreEBqOATvZi%2FDBO%2BCU8i%2FMm6VCwSx1WBdQjgyn6QMynwM5DgADwJ8oR0InNgqx42IUeo%2B0G6BNxVrNjO3O3ocUAxFQ4HzyXctj09fT57%2FpFi1psIizXV9Kuig7JsIv20Bv7A%2BbY3U0JQKuEajpk0DHztQ5KBmcQcf8KJhOR0GIAy2QUBC9N1nuWRe75%2FlUXjpixd6V7mUVh46G6jKJMDA9Fk7zBY5192xzZBhxtlELdyXMfMLfss8IGOqUBrE5LtEUsqDJPAPIeWqUPcqjlqIOGUFg7xQy%2B1dS6NzFJQ7r8W7oEXpzQmPVVmmsjoGtbtZlMEtB5BCsxMfCRzAqeRrvrbWd0s7XMRsESgsZfJujFivCqSjmWYieES1DMYlxtYsvwsGpLgjB4Q%2F9dhK4PfPFZszW%2FfP2J3E1rYe35CzaRlfemaY690Xe4xm2%2BKKZqhOuT372Xpzuyh61bmmTx2njN&X-Amz-Signature=45040c9016685cd77a7bb2819640f2d108809f19c8b63b399a129a98a9b09952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTNP63GW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICpjXrNeLYf0r%2BdZDL3puweWQgOVbEMb05pQGcHkzeo4AiEAo6gtc%2FPbrno4TcYlPFSIIQ8plBOn39Ei4DR7Cjyo8AIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIbLeMwZWhrF0Hl6KCrcA6gci7LKXssQ9QXHNHWGpqhWulXoFRw%2BCOdnkG%2FW%2F06cJ9RbRKKNh8uOhbuDSVAEYsR27c%2FS19RV296OFE9u73hTRdB6A5ulFAkOenUq5PbRyclg2O4S69Vb%2FgV7bhO1Kf3tOT8WpqsGgCiexqC%2BOE3EoqIM0wK5D1Ycxtm%2FY%2B3%2B%2BC0AfxqzDhk7Z6rSCyRC2l0AJVGyS04UhNpERVVo9mxV8dC5BvBleFTU9vqEPgni7YE18a8lTwm%2B8b%2FAbBKNa3A%2Fyae92ZAYNKypuYf057dkbFSpNONrsKpEeEHtT76xMazjXMm7gsZWnRtwIUK%2BOicPX6pptlKrcEfI40cCQN%2FOZJGzwhcmK5OW1Z4pV2SykoswUfi6kYtSHT6LuOGTFhUVCTChaIusnreEBqOATvZi%2FDBO%2BCU8i%2FMm6VCwSx1WBdQjgyn6QMynwM5DgADwJ8oR0InNgqx42IUeo%2B0G6BNxVrNjO3O3ocUAxFQ4HzyXctj09fT57%2FpFi1psIizXV9Kuig7JsIv20Bv7A%2BbY3U0JQKuEajpk0DHztQ5KBmcQcf8KJhOR0GIAy2QUBC9N1nuWRe75%2FlUXjpixd6V7mUVh46G6jKJMDA9Fk7zBY5192xzZBhxtlELdyXMfMLfss8IGOqUBrE5LtEUsqDJPAPIeWqUPcqjlqIOGUFg7xQy%2B1dS6NzFJQ7r8W7oEXpzQmPVVmmsjoGtbtZlMEtB5BCsxMfCRzAqeRrvrbWd0s7XMRsESgsZfJujFivCqSjmWYieES1DMYlxtYsvwsGpLgjB4Q%2F9dhK4PfPFZszW%2FfP2J3E1rYe35CzaRlfemaY690Xe4xm2%2BKKZqhOuT372Xpzuyh61bmmTx2njN&X-Amz-Signature=06b4ab50ae6fee04c672067d0bc70fefa20fb0c929113c4bcf897632f2d4b2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTNP63GW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICpjXrNeLYf0r%2BdZDL3puweWQgOVbEMb05pQGcHkzeo4AiEAo6gtc%2FPbrno4TcYlPFSIIQ8plBOn39Ei4DR7Cjyo8AIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIbLeMwZWhrF0Hl6KCrcA6gci7LKXssQ9QXHNHWGpqhWulXoFRw%2BCOdnkG%2FW%2F06cJ9RbRKKNh8uOhbuDSVAEYsR27c%2FS19RV296OFE9u73hTRdB6A5ulFAkOenUq5PbRyclg2O4S69Vb%2FgV7bhO1Kf3tOT8WpqsGgCiexqC%2BOE3EoqIM0wK5D1Ycxtm%2FY%2B3%2B%2BC0AfxqzDhk7Z6rSCyRC2l0AJVGyS04UhNpERVVo9mxV8dC5BvBleFTU9vqEPgni7YE18a8lTwm%2B8b%2FAbBKNa3A%2Fyae92ZAYNKypuYf057dkbFSpNONrsKpEeEHtT76xMazjXMm7gsZWnRtwIUK%2BOicPX6pptlKrcEfI40cCQN%2FOZJGzwhcmK5OW1Z4pV2SykoswUfi6kYtSHT6LuOGTFhUVCTChaIusnreEBqOATvZi%2FDBO%2BCU8i%2FMm6VCwSx1WBdQjgyn6QMynwM5DgADwJ8oR0InNgqx42IUeo%2B0G6BNxVrNjO3O3ocUAxFQ4HzyXctj09fT57%2FpFi1psIizXV9Kuig7JsIv20Bv7A%2BbY3U0JQKuEajpk0DHztQ5KBmcQcf8KJhOR0GIAy2QUBC9N1nuWRe75%2FlUXjpixd6V7mUVh46G6jKJMDA9Fk7zBY5192xzZBhxtlELdyXMfMLfss8IGOqUBrE5LtEUsqDJPAPIeWqUPcqjlqIOGUFg7xQy%2B1dS6NzFJQ7r8W7oEXpzQmPVVmmsjoGtbtZlMEtB5BCsxMfCRzAqeRrvrbWd0s7XMRsESgsZfJujFivCqSjmWYieES1DMYlxtYsvwsGpLgjB4Q%2F9dhK4PfPFZszW%2FfP2J3E1rYe35CzaRlfemaY690Xe4xm2%2BKKZqhOuT372Xpzuyh61bmmTx2njN&X-Amz-Signature=b9e353ebf2cd0952199259ab37038e34d9010372102e0eb91dc283a52ee0865d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTNP63GW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICpjXrNeLYf0r%2BdZDL3puweWQgOVbEMb05pQGcHkzeo4AiEAo6gtc%2FPbrno4TcYlPFSIIQ8plBOn39Ei4DR7Cjyo8AIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIbLeMwZWhrF0Hl6KCrcA6gci7LKXssQ9QXHNHWGpqhWulXoFRw%2BCOdnkG%2FW%2F06cJ9RbRKKNh8uOhbuDSVAEYsR27c%2FS19RV296OFE9u73hTRdB6A5ulFAkOenUq5PbRyclg2O4S69Vb%2FgV7bhO1Kf3tOT8WpqsGgCiexqC%2BOE3EoqIM0wK5D1Ycxtm%2FY%2B3%2B%2BC0AfxqzDhk7Z6rSCyRC2l0AJVGyS04UhNpERVVo9mxV8dC5BvBleFTU9vqEPgni7YE18a8lTwm%2B8b%2FAbBKNa3A%2Fyae92ZAYNKypuYf057dkbFSpNONrsKpEeEHtT76xMazjXMm7gsZWnRtwIUK%2BOicPX6pptlKrcEfI40cCQN%2FOZJGzwhcmK5OW1Z4pV2SykoswUfi6kYtSHT6LuOGTFhUVCTChaIusnreEBqOATvZi%2FDBO%2BCU8i%2FMm6VCwSx1WBdQjgyn6QMynwM5DgADwJ8oR0InNgqx42IUeo%2B0G6BNxVrNjO3O3ocUAxFQ4HzyXctj09fT57%2FpFi1psIizXV9Kuig7JsIv20Bv7A%2BbY3U0JQKuEajpk0DHztQ5KBmcQcf8KJhOR0GIAy2QUBC9N1nuWRe75%2FlUXjpixd6V7mUVh46G6jKJMDA9Fk7zBY5192xzZBhxtlELdyXMfMLfss8IGOqUBrE5LtEUsqDJPAPIeWqUPcqjlqIOGUFg7xQy%2B1dS6NzFJQ7r8W7oEXpzQmPVVmmsjoGtbtZlMEtB5BCsxMfCRzAqeRrvrbWd0s7XMRsESgsZfJujFivCqSjmWYieES1DMYlxtYsvwsGpLgjB4Q%2F9dhK4PfPFZszW%2FfP2J3E1rYe35CzaRlfemaY690Xe4xm2%2BKKZqhOuT372Xpzuyh61bmmTx2njN&X-Amz-Signature=daf8136914cd8f6c982575d1de3c7ca3a2b4363842b28ed153da702a5852422d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTNP63GW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICpjXrNeLYf0r%2BdZDL3puweWQgOVbEMb05pQGcHkzeo4AiEAo6gtc%2FPbrno4TcYlPFSIIQ8plBOn39Ei4DR7Cjyo8AIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIbLeMwZWhrF0Hl6KCrcA6gci7LKXssQ9QXHNHWGpqhWulXoFRw%2BCOdnkG%2FW%2F06cJ9RbRKKNh8uOhbuDSVAEYsR27c%2FS19RV296OFE9u73hTRdB6A5ulFAkOenUq5PbRyclg2O4S69Vb%2FgV7bhO1Kf3tOT8WpqsGgCiexqC%2BOE3EoqIM0wK5D1Ycxtm%2FY%2B3%2B%2BC0AfxqzDhk7Z6rSCyRC2l0AJVGyS04UhNpERVVo9mxV8dC5BvBleFTU9vqEPgni7YE18a8lTwm%2B8b%2FAbBKNa3A%2Fyae92ZAYNKypuYf057dkbFSpNONrsKpEeEHtT76xMazjXMm7gsZWnRtwIUK%2BOicPX6pptlKrcEfI40cCQN%2FOZJGzwhcmK5OW1Z4pV2SykoswUfi6kYtSHT6LuOGTFhUVCTChaIusnreEBqOATvZi%2FDBO%2BCU8i%2FMm6VCwSx1WBdQjgyn6QMynwM5DgADwJ8oR0InNgqx42IUeo%2B0G6BNxVrNjO3O3ocUAxFQ4HzyXctj09fT57%2FpFi1psIizXV9Kuig7JsIv20Bv7A%2BbY3U0JQKuEajpk0DHztQ5KBmcQcf8KJhOR0GIAy2QUBC9N1nuWRe75%2FlUXjpixd6V7mUVh46G6jKJMDA9Fk7zBY5192xzZBhxtlELdyXMfMLfss8IGOqUBrE5LtEUsqDJPAPIeWqUPcqjlqIOGUFg7xQy%2B1dS6NzFJQ7r8W7oEXpzQmPVVmmsjoGtbtZlMEtB5BCsxMfCRzAqeRrvrbWd0s7XMRsESgsZfJujFivCqSjmWYieES1DMYlxtYsvwsGpLgjB4Q%2F9dhK4PfPFZszW%2FfP2J3E1rYe35CzaRlfemaY690Xe4xm2%2BKKZqhOuT372Xpzuyh61bmmTx2njN&X-Amz-Signature=8b211bb7e9e7a68a5e29aa0c321d26326a434dc60ced04b7a9e86bc3ee49d69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTNP63GW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICpjXrNeLYf0r%2BdZDL3puweWQgOVbEMb05pQGcHkzeo4AiEAo6gtc%2FPbrno4TcYlPFSIIQ8plBOn39Ei4DR7Cjyo8AIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIbLeMwZWhrF0Hl6KCrcA6gci7LKXssQ9QXHNHWGpqhWulXoFRw%2BCOdnkG%2FW%2F06cJ9RbRKKNh8uOhbuDSVAEYsR27c%2FS19RV296OFE9u73hTRdB6A5ulFAkOenUq5PbRyclg2O4S69Vb%2FgV7bhO1Kf3tOT8WpqsGgCiexqC%2BOE3EoqIM0wK5D1Ycxtm%2FY%2B3%2B%2BC0AfxqzDhk7Z6rSCyRC2l0AJVGyS04UhNpERVVo9mxV8dC5BvBleFTU9vqEPgni7YE18a8lTwm%2B8b%2FAbBKNa3A%2Fyae92ZAYNKypuYf057dkbFSpNONrsKpEeEHtT76xMazjXMm7gsZWnRtwIUK%2BOicPX6pptlKrcEfI40cCQN%2FOZJGzwhcmK5OW1Z4pV2SykoswUfi6kYtSHT6LuOGTFhUVCTChaIusnreEBqOATvZi%2FDBO%2BCU8i%2FMm6VCwSx1WBdQjgyn6QMynwM5DgADwJ8oR0InNgqx42IUeo%2B0G6BNxVrNjO3O3ocUAxFQ4HzyXctj09fT57%2FpFi1psIizXV9Kuig7JsIv20Bv7A%2BbY3U0JQKuEajpk0DHztQ5KBmcQcf8KJhOR0GIAy2QUBC9N1nuWRe75%2FlUXjpixd6V7mUVh46G6jKJMDA9Fk7zBY5192xzZBhxtlELdyXMfMLfss8IGOqUBrE5LtEUsqDJPAPIeWqUPcqjlqIOGUFg7xQy%2B1dS6NzFJQ7r8W7oEXpzQmPVVmmsjoGtbtZlMEtB5BCsxMfCRzAqeRrvrbWd0s7XMRsESgsZfJujFivCqSjmWYieES1DMYlxtYsvwsGpLgjB4Q%2F9dhK4PfPFZszW%2FfP2J3E1rYe35CzaRlfemaY690Xe4xm2%2BKKZqhOuT372Xpzuyh61bmmTx2njN&X-Amz-Signature=289b7cf3312d66cef5e199758f340f486a23aacca61bd3f2b4825cc42bf8236d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTNP63GW%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCICpjXrNeLYf0r%2BdZDL3puweWQgOVbEMb05pQGcHkzeo4AiEAo6gtc%2FPbrno4TcYlPFSIIQ8plBOn39Ei4DR7Cjyo8AIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDIbLeMwZWhrF0Hl6KCrcA6gci7LKXssQ9QXHNHWGpqhWulXoFRw%2BCOdnkG%2FW%2F06cJ9RbRKKNh8uOhbuDSVAEYsR27c%2FS19RV296OFE9u73hTRdB6A5ulFAkOenUq5PbRyclg2O4S69Vb%2FgV7bhO1Kf3tOT8WpqsGgCiexqC%2BOE3EoqIM0wK5D1Ycxtm%2FY%2B3%2B%2BC0AfxqzDhk7Z6rSCyRC2l0AJVGyS04UhNpERVVo9mxV8dC5BvBleFTU9vqEPgni7YE18a8lTwm%2B8b%2FAbBKNa3A%2Fyae92ZAYNKypuYf057dkbFSpNONrsKpEeEHtT76xMazjXMm7gsZWnRtwIUK%2BOicPX6pptlKrcEfI40cCQN%2FOZJGzwhcmK5OW1Z4pV2SykoswUfi6kYtSHT6LuOGTFhUVCTChaIusnreEBqOATvZi%2FDBO%2BCU8i%2FMm6VCwSx1WBdQjgyn6QMynwM5DgADwJ8oR0InNgqx42IUeo%2B0G6BNxVrNjO3O3ocUAxFQ4HzyXctj09fT57%2FpFi1psIizXV9Kuig7JsIv20Bv7A%2BbY3U0JQKuEajpk0DHztQ5KBmcQcf8KJhOR0GIAy2QUBC9N1nuWRe75%2FlUXjpixd6V7mUVh46G6jKJMDA9Fk7zBY5192xzZBhxtlELdyXMfMLfss8IGOqUBrE5LtEUsqDJPAPIeWqUPcqjlqIOGUFg7xQy%2B1dS6NzFJQ7r8W7oEXpzQmPVVmmsjoGtbtZlMEtB5BCsxMfCRzAqeRrvrbWd0s7XMRsESgsZfJujFivCqSjmWYieES1DMYlxtYsvwsGpLgjB4Q%2F9dhK4PfPFZszW%2FfP2J3E1rYe35CzaRlfemaY690Xe4xm2%2BKKZqhOuT372Xpzuyh61bmmTx2njN&X-Amz-Signature=a8816c05ce6c0130b8881eba40dd24adbaf66732907ed13e15f40e6e355c98cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
