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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3E6IGY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC%2BTpUSoX5qIwuQ9Aa00Dx6fXaLjmi%2BcT31ciu6QMUuNAIgZcBQ2QKwjcyKR8zeD00dpwBt3cEPUn1n51W5J1nSfc4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP8w4Vfu1wbLZReEeCrcA6iBtnPmNb3iphXcAQrifls1xnP2CckFCvnbw6MXflRapeUM%2BuvzNnI0AUfLkbEC7XoY%2BRs%2FntbnoQkWsy9pk7G7cJIeNXcjYAe3KzA3svEdwqNcd%2Bol9A%2BMXXeqGC315ywvSzgWXnnL4VusRR1dfUNbWyl3tmT6XuFHUHBhuhVSZOVe5q0uxtxi1l7XzEtID%2F%2BN%2B09Hf1kYaoxTx8tMtQL0kb3bzT%2BKq6uc2Yd8NcbRfjeQfw3VuHuE%2FyfQMFp25V8QrzofHBFpnTwxerCZbURfXvqCWLX4rZvcsnDnKH6oRm2sgW%2F5sk0DbZLLkMEnVekm%2B46W0j3qxQOQZlNGJbJcfr15tjWQ5YaNlpG7btCPbJGQsW0gJTEPWeCP%2BHcGI4hV%2B86ejJRvqfwyfje4icrEW3q4n8FDLLdWQTJkDp%2BSB2Glk8xknmbvY0LEJsOz%2BYJf7rFmiAft0poJAZeFAPZvHMf6M31oAkSc0zpM7khqqQhYClnHmV6neq0QUIA%2FKZ83OrbcwsyuRVF3c781Zgiqpf3TwlyQ9vN%2B98VnJUcl0V%2F64xaR%2F8nVOJTapa1iyCzmVXpw%2FkdM0w2bJm2DVZ5DHmjHdt0ggyyaGGUK1R81PWmmzPF7D66pQ7JHMMPIwMIGOqUBj9qyjQSd0Okr2I3MWvTAA0GyL9vPXhKYnTLGf3IZEVKiV16tDUnyAvoXJbFhXSSPLcClhy126wrPTmyAbQkE13uwmyj01IHrE7UIesVi%2FoI9HNAWP3rOhOLl44brDAAFS1xsqoASTZys4po1j1vagGT%2FcB9iU6C3G%2Bf92spa6DK5Dg56rkbJSiLzku44bcE9sdGkgnVHqkEf8Y%2By%2F27PJTfX1rYP&X-Amz-Signature=0426bbd08f9d18c89cd36b200589aa4fb2ade68f1ce6eafcb3e81950604fc430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3E6IGY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC%2BTpUSoX5qIwuQ9Aa00Dx6fXaLjmi%2BcT31ciu6QMUuNAIgZcBQ2QKwjcyKR8zeD00dpwBt3cEPUn1n51W5J1nSfc4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP8w4Vfu1wbLZReEeCrcA6iBtnPmNb3iphXcAQrifls1xnP2CckFCvnbw6MXflRapeUM%2BuvzNnI0AUfLkbEC7XoY%2BRs%2FntbnoQkWsy9pk7G7cJIeNXcjYAe3KzA3svEdwqNcd%2Bol9A%2BMXXeqGC315ywvSzgWXnnL4VusRR1dfUNbWyl3tmT6XuFHUHBhuhVSZOVe5q0uxtxi1l7XzEtID%2F%2BN%2B09Hf1kYaoxTx8tMtQL0kb3bzT%2BKq6uc2Yd8NcbRfjeQfw3VuHuE%2FyfQMFp25V8QrzofHBFpnTwxerCZbURfXvqCWLX4rZvcsnDnKH6oRm2sgW%2F5sk0DbZLLkMEnVekm%2B46W0j3qxQOQZlNGJbJcfr15tjWQ5YaNlpG7btCPbJGQsW0gJTEPWeCP%2BHcGI4hV%2B86ejJRvqfwyfje4icrEW3q4n8FDLLdWQTJkDp%2BSB2Glk8xknmbvY0LEJsOz%2BYJf7rFmiAft0poJAZeFAPZvHMf6M31oAkSc0zpM7khqqQhYClnHmV6neq0QUIA%2FKZ83OrbcwsyuRVF3c781Zgiqpf3TwlyQ9vN%2B98VnJUcl0V%2F64xaR%2F8nVOJTapa1iyCzmVXpw%2FkdM0w2bJm2DVZ5DHmjHdt0ggyyaGGUK1R81PWmmzPF7D66pQ7JHMMPIwMIGOqUBj9qyjQSd0Okr2I3MWvTAA0GyL9vPXhKYnTLGf3IZEVKiV16tDUnyAvoXJbFhXSSPLcClhy126wrPTmyAbQkE13uwmyj01IHrE7UIesVi%2FoI9HNAWP3rOhOLl44brDAAFS1xsqoASTZys4po1j1vagGT%2FcB9iU6C3G%2Bf92spa6DK5Dg56rkbJSiLzku44bcE9sdGkgnVHqkEf8Y%2By%2F27PJTfX1rYP&X-Amz-Signature=a4651c3eda06604d424c06cdd68185ac925ffaa45cb3aba58d457a82046988fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3E6IGY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC%2BTpUSoX5qIwuQ9Aa00Dx6fXaLjmi%2BcT31ciu6QMUuNAIgZcBQ2QKwjcyKR8zeD00dpwBt3cEPUn1n51W5J1nSfc4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP8w4Vfu1wbLZReEeCrcA6iBtnPmNb3iphXcAQrifls1xnP2CckFCvnbw6MXflRapeUM%2BuvzNnI0AUfLkbEC7XoY%2BRs%2FntbnoQkWsy9pk7G7cJIeNXcjYAe3KzA3svEdwqNcd%2Bol9A%2BMXXeqGC315ywvSzgWXnnL4VusRR1dfUNbWyl3tmT6XuFHUHBhuhVSZOVe5q0uxtxi1l7XzEtID%2F%2BN%2B09Hf1kYaoxTx8tMtQL0kb3bzT%2BKq6uc2Yd8NcbRfjeQfw3VuHuE%2FyfQMFp25V8QrzofHBFpnTwxerCZbURfXvqCWLX4rZvcsnDnKH6oRm2sgW%2F5sk0DbZLLkMEnVekm%2B46W0j3qxQOQZlNGJbJcfr15tjWQ5YaNlpG7btCPbJGQsW0gJTEPWeCP%2BHcGI4hV%2B86ejJRvqfwyfje4icrEW3q4n8FDLLdWQTJkDp%2BSB2Glk8xknmbvY0LEJsOz%2BYJf7rFmiAft0poJAZeFAPZvHMf6M31oAkSc0zpM7khqqQhYClnHmV6neq0QUIA%2FKZ83OrbcwsyuRVF3c781Zgiqpf3TwlyQ9vN%2B98VnJUcl0V%2F64xaR%2F8nVOJTapa1iyCzmVXpw%2FkdM0w2bJm2DVZ5DHmjHdt0ggyyaGGUK1R81PWmmzPF7D66pQ7JHMMPIwMIGOqUBj9qyjQSd0Okr2I3MWvTAA0GyL9vPXhKYnTLGf3IZEVKiV16tDUnyAvoXJbFhXSSPLcClhy126wrPTmyAbQkE13uwmyj01IHrE7UIesVi%2FoI9HNAWP3rOhOLl44brDAAFS1xsqoASTZys4po1j1vagGT%2FcB9iU6C3G%2Bf92spa6DK5Dg56rkbJSiLzku44bcE9sdGkgnVHqkEf8Y%2By%2F27PJTfX1rYP&X-Amz-Signature=aa84ab19d6c9b4181f88b9e13fd0019245acec36c5812b9c6c4125e5db14083a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3E6IGY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC%2BTpUSoX5qIwuQ9Aa00Dx6fXaLjmi%2BcT31ciu6QMUuNAIgZcBQ2QKwjcyKR8zeD00dpwBt3cEPUn1n51W5J1nSfc4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP8w4Vfu1wbLZReEeCrcA6iBtnPmNb3iphXcAQrifls1xnP2CckFCvnbw6MXflRapeUM%2BuvzNnI0AUfLkbEC7XoY%2BRs%2FntbnoQkWsy9pk7G7cJIeNXcjYAe3KzA3svEdwqNcd%2Bol9A%2BMXXeqGC315ywvSzgWXnnL4VusRR1dfUNbWyl3tmT6XuFHUHBhuhVSZOVe5q0uxtxi1l7XzEtID%2F%2BN%2B09Hf1kYaoxTx8tMtQL0kb3bzT%2BKq6uc2Yd8NcbRfjeQfw3VuHuE%2FyfQMFp25V8QrzofHBFpnTwxerCZbURfXvqCWLX4rZvcsnDnKH6oRm2sgW%2F5sk0DbZLLkMEnVekm%2B46W0j3qxQOQZlNGJbJcfr15tjWQ5YaNlpG7btCPbJGQsW0gJTEPWeCP%2BHcGI4hV%2B86ejJRvqfwyfje4icrEW3q4n8FDLLdWQTJkDp%2BSB2Glk8xknmbvY0LEJsOz%2BYJf7rFmiAft0poJAZeFAPZvHMf6M31oAkSc0zpM7khqqQhYClnHmV6neq0QUIA%2FKZ83OrbcwsyuRVF3c781Zgiqpf3TwlyQ9vN%2B98VnJUcl0V%2F64xaR%2F8nVOJTapa1iyCzmVXpw%2FkdM0w2bJm2DVZ5DHmjHdt0ggyyaGGUK1R81PWmmzPF7D66pQ7JHMMPIwMIGOqUBj9qyjQSd0Okr2I3MWvTAA0GyL9vPXhKYnTLGf3IZEVKiV16tDUnyAvoXJbFhXSSPLcClhy126wrPTmyAbQkE13uwmyj01IHrE7UIesVi%2FoI9HNAWP3rOhOLl44brDAAFS1xsqoASTZys4po1j1vagGT%2FcB9iU6C3G%2Bf92spa6DK5Dg56rkbJSiLzku44bcE9sdGkgnVHqkEf8Y%2By%2F27PJTfX1rYP&X-Amz-Signature=f042555d501118efb7ffff2b55b0f41b5931ac21b08b37301acb361725523292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3E6IGY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC%2BTpUSoX5qIwuQ9Aa00Dx6fXaLjmi%2BcT31ciu6QMUuNAIgZcBQ2QKwjcyKR8zeD00dpwBt3cEPUn1n51W5J1nSfc4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP8w4Vfu1wbLZReEeCrcA6iBtnPmNb3iphXcAQrifls1xnP2CckFCvnbw6MXflRapeUM%2BuvzNnI0AUfLkbEC7XoY%2BRs%2FntbnoQkWsy9pk7G7cJIeNXcjYAe3KzA3svEdwqNcd%2Bol9A%2BMXXeqGC315ywvSzgWXnnL4VusRR1dfUNbWyl3tmT6XuFHUHBhuhVSZOVe5q0uxtxi1l7XzEtID%2F%2BN%2B09Hf1kYaoxTx8tMtQL0kb3bzT%2BKq6uc2Yd8NcbRfjeQfw3VuHuE%2FyfQMFp25V8QrzofHBFpnTwxerCZbURfXvqCWLX4rZvcsnDnKH6oRm2sgW%2F5sk0DbZLLkMEnVekm%2B46W0j3qxQOQZlNGJbJcfr15tjWQ5YaNlpG7btCPbJGQsW0gJTEPWeCP%2BHcGI4hV%2B86ejJRvqfwyfje4icrEW3q4n8FDLLdWQTJkDp%2BSB2Glk8xknmbvY0LEJsOz%2BYJf7rFmiAft0poJAZeFAPZvHMf6M31oAkSc0zpM7khqqQhYClnHmV6neq0QUIA%2FKZ83OrbcwsyuRVF3c781Zgiqpf3TwlyQ9vN%2B98VnJUcl0V%2F64xaR%2F8nVOJTapa1iyCzmVXpw%2FkdM0w2bJm2DVZ5DHmjHdt0ggyyaGGUK1R81PWmmzPF7D66pQ7JHMMPIwMIGOqUBj9qyjQSd0Okr2I3MWvTAA0GyL9vPXhKYnTLGf3IZEVKiV16tDUnyAvoXJbFhXSSPLcClhy126wrPTmyAbQkE13uwmyj01IHrE7UIesVi%2FoI9HNAWP3rOhOLl44brDAAFS1xsqoASTZys4po1j1vagGT%2FcB9iU6C3G%2Bf92spa6DK5Dg56rkbJSiLzku44bcE9sdGkgnVHqkEf8Y%2By%2F27PJTfX1rYP&X-Amz-Signature=1b07cee4317c09b29b6c0fdbda3d6d68c6be73fa029948e52d40e13a40c4941c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3E6IGY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC%2BTpUSoX5qIwuQ9Aa00Dx6fXaLjmi%2BcT31ciu6QMUuNAIgZcBQ2QKwjcyKR8zeD00dpwBt3cEPUn1n51W5J1nSfc4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP8w4Vfu1wbLZReEeCrcA6iBtnPmNb3iphXcAQrifls1xnP2CckFCvnbw6MXflRapeUM%2BuvzNnI0AUfLkbEC7XoY%2BRs%2FntbnoQkWsy9pk7G7cJIeNXcjYAe3KzA3svEdwqNcd%2Bol9A%2BMXXeqGC315ywvSzgWXnnL4VusRR1dfUNbWyl3tmT6XuFHUHBhuhVSZOVe5q0uxtxi1l7XzEtID%2F%2BN%2B09Hf1kYaoxTx8tMtQL0kb3bzT%2BKq6uc2Yd8NcbRfjeQfw3VuHuE%2FyfQMFp25V8QrzofHBFpnTwxerCZbURfXvqCWLX4rZvcsnDnKH6oRm2sgW%2F5sk0DbZLLkMEnVekm%2B46W0j3qxQOQZlNGJbJcfr15tjWQ5YaNlpG7btCPbJGQsW0gJTEPWeCP%2BHcGI4hV%2B86ejJRvqfwyfje4icrEW3q4n8FDLLdWQTJkDp%2BSB2Glk8xknmbvY0LEJsOz%2BYJf7rFmiAft0poJAZeFAPZvHMf6M31oAkSc0zpM7khqqQhYClnHmV6neq0QUIA%2FKZ83OrbcwsyuRVF3c781Zgiqpf3TwlyQ9vN%2B98VnJUcl0V%2F64xaR%2F8nVOJTapa1iyCzmVXpw%2FkdM0w2bJm2DVZ5DHmjHdt0ggyyaGGUK1R81PWmmzPF7D66pQ7JHMMPIwMIGOqUBj9qyjQSd0Okr2I3MWvTAA0GyL9vPXhKYnTLGf3IZEVKiV16tDUnyAvoXJbFhXSSPLcClhy126wrPTmyAbQkE13uwmyj01IHrE7UIesVi%2FoI9HNAWP3rOhOLl44brDAAFS1xsqoASTZys4po1j1vagGT%2FcB9iU6C3G%2Bf92spa6DK5Dg56rkbJSiLzku44bcE9sdGkgnVHqkEf8Y%2By%2F27PJTfX1rYP&X-Amz-Signature=6df29b1a564f83aad8123134adb4cdf44bf29ff52546d301f6d21c034f3b21ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O3E6IGY%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQC%2BTpUSoX5qIwuQ9Aa00Dx6fXaLjmi%2BcT31ciu6QMUuNAIgZcBQ2QKwjcyKR8zeD00dpwBt3cEPUn1n51W5J1nSfc4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDP8w4Vfu1wbLZReEeCrcA6iBtnPmNb3iphXcAQrifls1xnP2CckFCvnbw6MXflRapeUM%2BuvzNnI0AUfLkbEC7XoY%2BRs%2FntbnoQkWsy9pk7G7cJIeNXcjYAe3KzA3svEdwqNcd%2Bol9A%2BMXXeqGC315ywvSzgWXnnL4VusRR1dfUNbWyl3tmT6XuFHUHBhuhVSZOVe5q0uxtxi1l7XzEtID%2F%2BN%2B09Hf1kYaoxTx8tMtQL0kb3bzT%2BKq6uc2Yd8NcbRfjeQfw3VuHuE%2FyfQMFp25V8QrzofHBFpnTwxerCZbURfXvqCWLX4rZvcsnDnKH6oRm2sgW%2F5sk0DbZLLkMEnVekm%2B46W0j3qxQOQZlNGJbJcfr15tjWQ5YaNlpG7btCPbJGQsW0gJTEPWeCP%2BHcGI4hV%2B86ejJRvqfwyfje4icrEW3q4n8FDLLdWQTJkDp%2BSB2Glk8xknmbvY0LEJsOz%2BYJf7rFmiAft0poJAZeFAPZvHMf6M31oAkSc0zpM7khqqQhYClnHmV6neq0QUIA%2FKZ83OrbcwsyuRVF3c781Zgiqpf3TwlyQ9vN%2B98VnJUcl0V%2F64xaR%2F8nVOJTapa1iyCzmVXpw%2FkdM0w2bJm2DVZ5DHmjHdt0ggyyaGGUK1R81PWmmzPF7D66pQ7JHMMPIwMIGOqUBj9qyjQSd0Okr2I3MWvTAA0GyL9vPXhKYnTLGf3IZEVKiV16tDUnyAvoXJbFhXSSPLcClhy126wrPTmyAbQkE13uwmyj01IHrE7UIesVi%2FoI9HNAWP3rOhOLl44brDAAFS1xsqoASTZys4po1j1vagGT%2FcB9iU6C3G%2Bf92spa6DK5Dg56rkbJSiLzku44bcE9sdGkgnVHqkEf8Y%2By%2F27PJTfX1rYP&X-Amz-Signature=d142c94f9c375448627b9010e39b38045b67ef911318009d1f8f93e59282768d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
