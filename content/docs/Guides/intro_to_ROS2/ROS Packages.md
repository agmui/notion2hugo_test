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
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6FQWMF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDuGFWPY1PTrcpeqzCpiE8vnw1EktvSl%2FybKLz4ONtt5wIgQJEv1%2FXcrEM9zthN%2BXqYa1zRE%2FjAjWbGQkuO%2BsCXFNIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJ7dOXNsjTzZ7LPGtSrcAyk0D7Mw7gcwFnF4WFfm9BmYPNSBFR6Q72pcHrNUABZ1z%2Fmi2kYFfZ4a6M7SEI1rSneU7QaKJ34AaP9OOvVTaaBTynsOvgwYtODppgzcLKXVK9FsV5HwoLTPHGBMud%2FnGfyF7O8NkOJtYMLm75CB8VQ33AGsb91LhS4687nipifY1SxseWgo1WaynvN8l9Ez5f3DiYYY%2FdML%2FIhWOokf%2BYm9q7hrv78Ydw6Gg7WEGdUQ46LAx%2F7HA0udDKF5FVAiehMc4LG%2BifWyuu6xFqkgurYyiWI4PwJqEzDuXw4NaDBqdqTbmizBuJlm7UQpn3U8dKmJ1MUFloQ%2BappVQH0rs7RjagRg8i4y341FCYk%2Bhvqwz9DprvzjIrTLb9g%2B7UG5apgDspJ55ZuBaNgcmOFzZqkw4HssGjBU72HOWNeNel0WyHeR45Iv8GXJddFXrvaAQahob2SnRNNhw02pfPzzeNUDNXse3ZBVxLt7U%2BrK0Ux%2BwsC7LvVCIjwX8Wrwo3ym1rl58vVuFSspFvVrpNgi5f3bnw7OhmkEKPGTCfK%2FCcF6DgQYnrJMzlpWfZbo3CV2pURt9wmTmySwiU6wYJcg3ZvEjd3apKMi8qcHn02cLwk%2BLOLwQfQOw47lhnLtMLvo%2BMQGOqUBVNMKT9%2FOtKqqHkl%2FWkyW16h2bfQVtV5J9DcAANr%2FILKzr44bUAE798CzCtoJYyRRaFNC6RcM47ikIEQp6245PFH6q2t%2BToAe4h%2FFbnSqvdaNkRjTHsFxs43JXVYU1Rny9HlRjC2NzLQ2NaGh9EjSO2WsxK6ljhWKB6YWPj2KBczVPXQtJXuibmYp%2FBAVR6VpTDHwhFWVDf8kEww6kuOjAlbyKp1m&X-Amz-Signature=c4455fad3aef924e83f5c880c4bb6f6dca9fe60b8776bc5002f46f3772a9b6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6FQWMF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDuGFWPY1PTrcpeqzCpiE8vnw1EktvSl%2FybKLz4ONtt5wIgQJEv1%2FXcrEM9zthN%2BXqYa1zRE%2FjAjWbGQkuO%2BsCXFNIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJ7dOXNsjTzZ7LPGtSrcAyk0D7Mw7gcwFnF4WFfm9BmYPNSBFR6Q72pcHrNUABZ1z%2Fmi2kYFfZ4a6M7SEI1rSneU7QaKJ34AaP9OOvVTaaBTynsOvgwYtODppgzcLKXVK9FsV5HwoLTPHGBMud%2FnGfyF7O8NkOJtYMLm75CB8VQ33AGsb91LhS4687nipifY1SxseWgo1WaynvN8l9Ez5f3DiYYY%2FdML%2FIhWOokf%2BYm9q7hrv78Ydw6Gg7WEGdUQ46LAx%2F7HA0udDKF5FVAiehMc4LG%2BifWyuu6xFqkgurYyiWI4PwJqEzDuXw4NaDBqdqTbmizBuJlm7UQpn3U8dKmJ1MUFloQ%2BappVQH0rs7RjagRg8i4y341FCYk%2Bhvqwz9DprvzjIrTLb9g%2B7UG5apgDspJ55ZuBaNgcmOFzZqkw4HssGjBU72HOWNeNel0WyHeR45Iv8GXJddFXrvaAQahob2SnRNNhw02pfPzzeNUDNXse3ZBVxLt7U%2BrK0Ux%2BwsC7LvVCIjwX8Wrwo3ym1rl58vVuFSspFvVrpNgi5f3bnw7OhmkEKPGTCfK%2FCcF6DgQYnrJMzlpWfZbo3CV2pURt9wmTmySwiU6wYJcg3ZvEjd3apKMi8qcHn02cLwk%2BLOLwQfQOw47lhnLtMLvo%2BMQGOqUBVNMKT9%2FOtKqqHkl%2FWkyW16h2bfQVtV5J9DcAANr%2FILKzr44bUAE798CzCtoJYyRRaFNC6RcM47ikIEQp6245PFH6q2t%2BToAe4h%2FFbnSqvdaNkRjTHsFxs43JXVYU1Rny9HlRjC2NzLQ2NaGh9EjSO2WsxK6ljhWKB6YWPj2KBczVPXQtJXuibmYp%2FBAVR6VpTDHwhFWVDf8kEww6kuOjAlbyKp1m&X-Amz-Signature=e11a05d94b931aa46c0190c75a4a37087dc271880908cf70a9cdd84c3826d944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6FQWMF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDuGFWPY1PTrcpeqzCpiE8vnw1EktvSl%2FybKLz4ONtt5wIgQJEv1%2FXcrEM9zthN%2BXqYa1zRE%2FjAjWbGQkuO%2BsCXFNIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJ7dOXNsjTzZ7LPGtSrcAyk0D7Mw7gcwFnF4WFfm9BmYPNSBFR6Q72pcHrNUABZ1z%2Fmi2kYFfZ4a6M7SEI1rSneU7QaKJ34AaP9OOvVTaaBTynsOvgwYtODppgzcLKXVK9FsV5HwoLTPHGBMud%2FnGfyF7O8NkOJtYMLm75CB8VQ33AGsb91LhS4687nipifY1SxseWgo1WaynvN8l9Ez5f3DiYYY%2FdML%2FIhWOokf%2BYm9q7hrv78Ydw6Gg7WEGdUQ46LAx%2F7HA0udDKF5FVAiehMc4LG%2BifWyuu6xFqkgurYyiWI4PwJqEzDuXw4NaDBqdqTbmizBuJlm7UQpn3U8dKmJ1MUFloQ%2BappVQH0rs7RjagRg8i4y341FCYk%2Bhvqwz9DprvzjIrTLb9g%2B7UG5apgDspJ55ZuBaNgcmOFzZqkw4HssGjBU72HOWNeNel0WyHeR45Iv8GXJddFXrvaAQahob2SnRNNhw02pfPzzeNUDNXse3ZBVxLt7U%2BrK0Ux%2BwsC7LvVCIjwX8Wrwo3ym1rl58vVuFSspFvVrpNgi5f3bnw7OhmkEKPGTCfK%2FCcF6DgQYnrJMzlpWfZbo3CV2pURt9wmTmySwiU6wYJcg3ZvEjd3apKMi8qcHn02cLwk%2BLOLwQfQOw47lhnLtMLvo%2BMQGOqUBVNMKT9%2FOtKqqHkl%2FWkyW16h2bfQVtV5J9DcAANr%2FILKzr44bUAE798CzCtoJYyRRaFNC6RcM47ikIEQp6245PFH6q2t%2BToAe4h%2FFbnSqvdaNkRjTHsFxs43JXVYU1Rny9HlRjC2NzLQ2NaGh9EjSO2WsxK6ljhWKB6YWPj2KBczVPXQtJXuibmYp%2FBAVR6VpTDHwhFWVDf8kEww6kuOjAlbyKp1m&X-Amz-Signature=91a499df2f9af740339567aad31ee63d5cf2da8771176459d037ee4763c98185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6FQWMF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDuGFWPY1PTrcpeqzCpiE8vnw1EktvSl%2FybKLz4ONtt5wIgQJEv1%2FXcrEM9zthN%2BXqYa1zRE%2FjAjWbGQkuO%2BsCXFNIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJ7dOXNsjTzZ7LPGtSrcAyk0D7Mw7gcwFnF4WFfm9BmYPNSBFR6Q72pcHrNUABZ1z%2Fmi2kYFfZ4a6M7SEI1rSneU7QaKJ34AaP9OOvVTaaBTynsOvgwYtODppgzcLKXVK9FsV5HwoLTPHGBMud%2FnGfyF7O8NkOJtYMLm75CB8VQ33AGsb91LhS4687nipifY1SxseWgo1WaynvN8l9Ez5f3DiYYY%2FdML%2FIhWOokf%2BYm9q7hrv78Ydw6Gg7WEGdUQ46LAx%2F7HA0udDKF5FVAiehMc4LG%2BifWyuu6xFqkgurYyiWI4PwJqEzDuXw4NaDBqdqTbmizBuJlm7UQpn3U8dKmJ1MUFloQ%2BappVQH0rs7RjagRg8i4y341FCYk%2Bhvqwz9DprvzjIrTLb9g%2B7UG5apgDspJ55ZuBaNgcmOFzZqkw4HssGjBU72HOWNeNel0WyHeR45Iv8GXJddFXrvaAQahob2SnRNNhw02pfPzzeNUDNXse3ZBVxLt7U%2BrK0Ux%2BwsC7LvVCIjwX8Wrwo3ym1rl58vVuFSspFvVrpNgi5f3bnw7OhmkEKPGTCfK%2FCcF6DgQYnrJMzlpWfZbo3CV2pURt9wmTmySwiU6wYJcg3ZvEjd3apKMi8qcHn02cLwk%2BLOLwQfQOw47lhnLtMLvo%2BMQGOqUBVNMKT9%2FOtKqqHkl%2FWkyW16h2bfQVtV5J9DcAANr%2FILKzr44bUAE798CzCtoJYyRRaFNC6RcM47ikIEQp6245PFH6q2t%2BToAe4h%2FFbnSqvdaNkRjTHsFxs43JXVYU1Rny9HlRjC2NzLQ2NaGh9EjSO2WsxK6ljhWKB6YWPj2KBczVPXQtJXuibmYp%2FBAVR6VpTDHwhFWVDf8kEww6kuOjAlbyKp1m&X-Amz-Signature=b857f5ee2d206c8e9175d8b8f953ba65cf0cfa1ab7532f115904ff54d1dce3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6FQWMF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDuGFWPY1PTrcpeqzCpiE8vnw1EktvSl%2FybKLz4ONtt5wIgQJEv1%2FXcrEM9zthN%2BXqYa1zRE%2FjAjWbGQkuO%2BsCXFNIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJ7dOXNsjTzZ7LPGtSrcAyk0D7Mw7gcwFnF4WFfm9BmYPNSBFR6Q72pcHrNUABZ1z%2Fmi2kYFfZ4a6M7SEI1rSneU7QaKJ34AaP9OOvVTaaBTynsOvgwYtODppgzcLKXVK9FsV5HwoLTPHGBMud%2FnGfyF7O8NkOJtYMLm75CB8VQ33AGsb91LhS4687nipifY1SxseWgo1WaynvN8l9Ez5f3DiYYY%2FdML%2FIhWOokf%2BYm9q7hrv78Ydw6Gg7WEGdUQ46LAx%2F7HA0udDKF5FVAiehMc4LG%2BifWyuu6xFqkgurYyiWI4PwJqEzDuXw4NaDBqdqTbmizBuJlm7UQpn3U8dKmJ1MUFloQ%2BappVQH0rs7RjagRg8i4y341FCYk%2Bhvqwz9DprvzjIrTLb9g%2B7UG5apgDspJ55ZuBaNgcmOFzZqkw4HssGjBU72HOWNeNel0WyHeR45Iv8GXJddFXrvaAQahob2SnRNNhw02pfPzzeNUDNXse3ZBVxLt7U%2BrK0Ux%2BwsC7LvVCIjwX8Wrwo3ym1rl58vVuFSspFvVrpNgi5f3bnw7OhmkEKPGTCfK%2FCcF6DgQYnrJMzlpWfZbo3CV2pURt9wmTmySwiU6wYJcg3ZvEjd3apKMi8qcHn02cLwk%2BLOLwQfQOw47lhnLtMLvo%2BMQGOqUBVNMKT9%2FOtKqqHkl%2FWkyW16h2bfQVtV5J9DcAANr%2FILKzr44bUAE798CzCtoJYyRRaFNC6RcM47ikIEQp6245PFH6q2t%2BToAe4h%2FFbnSqvdaNkRjTHsFxs43JXVYU1Rny9HlRjC2NzLQ2NaGh9EjSO2WsxK6ljhWKB6YWPj2KBczVPXQtJXuibmYp%2FBAVR6VpTDHwhFWVDf8kEww6kuOjAlbyKp1m&X-Amz-Signature=ad77732807c1d4406bbae43257fc9c13ab1a7e315d9bac798acd214759ea0223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6FQWMF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDuGFWPY1PTrcpeqzCpiE8vnw1EktvSl%2FybKLz4ONtt5wIgQJEv1%2FXcrEM9zthN%2BXqYa1zRE%2FjAjWbGQkuO%2BsCXFNIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJ7dOXNsjTzZ7LPGtSrcAyk0D7Mw7gcwFnF4WFfm9BmYPNSBFR6Q72pcHrNUABZ1z%2Fmi2kYFfZ4a6M7SEI1rSneU7QaKJ34AaP9OOvVTaaBTynsOvgwYtODppgzcLKXVK9FsV5HwoLTPHGBMud%2FnGfyF7O8NkOJtYMLm75CB8VQ33AGsb91LhS4687nipifY1SxseWgo1WaynvN8l9Ez5f3DiYYY%2FdML%2FIhWOokf%2BYm9q7hrv78Ydw6Gg7WEGdUQ46LAx%2F7HA0udDKF5FVAiehMc4LG%2BifWyuu6xFqkgurYyiWI4PwJqEzDuXw4NaDBqdqTbmizBuJlm7UQpn3U8dKmJ1MUFloQ%2BappVQH0rs7RjagRg8i4y341FCYk%2Bhvqwz9DprvzjIrTLb9g%2B7UG5apgDspJ55ZuBaNgcmOFzZqkw4HssGjBU72HOWNeNel0WyHeR45Iv8GXJddFXrvaAQahob2SnRNNhw02pfPzzeNUDNXse3ZBVxLt7U%2BrK0Ux%2BwsC7LvVCIjwX8Wrwo3ym1rl58vVuFSspFvVrpNgi5f3bnw7OhmkEKPGTCfK%2FCcF6DgQYnrJMzlpWfZbo3CV2pURt9wmTmySwiU6wYJcg3ZvEjd3apKMi8qcHn02cLwk%2BLOLwQfQOw47lhnLtMLvo%2BMQGOqUBVNMKT9%2FOtKqqHkl%2FWkyW16h2bfQVtV5J9DcAANr%2FILKzr44bUAE798CzCtoJYyRRaFNC6RcM47ikIEQp6245PFH6q2t%2BToAe4h%2FFbnSqvdaNkRjTHsFxs43JXVYU1Rny9HlRjC2NzLQ2NaGh9EjSO2WsxK6ljhWKB6YWPj2KBczVPXQtJXuibmYp%2FBAVR6VpTDHwhFWVDf8kEww6kuOjAlbyKp1m&X-Amz-Signature=e4316c7e6fe0d2a7e3e4a515405b6bdf2f0a7b4dffce8ef7401ddb0ea29b8b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6FQWMF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDuGFWPY1PTrcpeqzCpiE8vnw1EktvSl%2FybKLz4ONtt5wIgQJEv1%2FXcrEM9zthN%2BXqYa1zRE%2FjAjWbGQkuO%2BsCXFNIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJ7dOXNsjTzZ7LPGtSrcAyk0D7Mw7gcwFnF4WFfm9BmYPNSBFR6Q72pcHrNUABZ1z%2Fmi2kYFfZ4a6M7SEI1rSneU7QaKJ34AaP9OOvVTaaBTynsOvgwYtODppgzcLKXVK9FsV5HwoLTPHGBMud%2FnGfyF7O8NkOJtYMLm75CB8VQ33AGsb91LhS4687nipifY1SxseWgo1WaynvN8l9Ez5f3DiYYY%2FdML%2FIhWOokf%2BYm9q7hrv78Ydw6Gg7WEGdUQ46LAx%2F7HA0udDKF5FVAiehMc4LG%2BifWyuu6xFqkgurYyiWI4PwJqEzDuXw4NaDBqdqTbmizBuJlm7UQpn3U8dKmJ1MUFloQ%2BappVQH0rs7RjagRg8i4y341FCYk%2Bhvqwz9DprvzjIrTLb9g%2B7UG5apgDspJ55ZuBaNgcmOFzZqkw4HssGjBU72HOWNeNel0WyHeR45Iv8GXJddFXrvaAQahob2SnRNNhw02pfPzzeNUDNXse3ZBVxLt7U%2BrK0Ux%2BwsC7LvVCIjwX8Wrwo3ym1rl58vVuFSspFvVrpNgi5f3bnw7OhmkEKPGTCfK%2FCcF6DgQYnrJMzlpWfZbo3CV2pURt9wmTmySwiU6wYJcg3ZvEjd3apKMi8qcHn02cLwk%2BLOLwQfQOw47lhnLtMLvo%2BMQGOqUBVNMKT9%2FOtKqqHkl%2FWkyW16h2bfQVtV5J9DcAANr%2FILKzr44bUAE798CzCtoJYyRRaFNC6RcM47ikIEQp6245PFH6q2t%2BToAe4h%2FFbnSqvdaNkRjTHsFxs43JXVYU1Rny9HlRjC2NzLQ2NaGh9EjSO2WsxK6ljhWKB6YWPj2KBczVPXQtJXuibmYp%2FBAVR6VpTDHwhFWVDf8kEww6kuOjAlbyKp1m&X-Amz-Signature=25f6181b541472cd367985a798770cfa9081d99c72f07e6a64760c8d498fffa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
