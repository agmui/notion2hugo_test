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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUPR62U%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH%2B5%2BYWTc8ev4SYzYcgpHgDQTZPcqFcHs1Kb6XfEDsVCAiA%2FXhbnPAutWf12jk%2BcCsm4aBc3W003dT2%2FmKZWR7ZExyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMhCG92RI%2B%2Bq5xbfNwKtwDTTaoCgnSrkad8F8iD1hxrIlkxRGuLIBt0fsyvGZwKBlPKVpIkpIGRQAuy%2FKIOoxyUSbhr2olUMFLSPPQZ5o4vCPkhLBGxWZPppRc%2FspoxyGBCA%2BYFiYzC8R%2FC0TrziB2taTgRQCVYHbuyUuYIRPfBD9QiarIiiBayv%2BqSZa2ONUMqpPTZZxktHGZuPmMSIBaLhP2cevvxS%2F5uvjfd1AUJbyhJOiFLBTJIXEkYNNF4zKYcvmdCcqjMWilHhvtEyvrx0xIhdJ9spho6D8bmTDR%2BchkrhIQpxjgoEsJr%2BRHSEvl8FtQowNSFcDUcPpIW6e%2BkK%2B8obcVZFJO06br26jwtAtCBylPO%2FqMrP6iN0uLcyPiySdqZ4TLFgqG75mJQUpgMvt8MstYzFLXsFLVUoTl9dpiAnBulaERRwkLfFDciAeCD1RO2n4UQFIr9Ay9WVfy%2BRDN4xsA7EYM02zm8aUN9rrI0AJHhflivac4ag0ZNKrkZXdkp5Te0IKRL07LGTGLWD4O3BP7CANnp7YGkVWmQuUNhwB2%2B7BQeMlnQfdS8F%2FZyATkJGIWSJZ1bKkKjfThK5APtHFJIhdnqlGtJJQadQ5Shfvnv3uTUo221akoG7ckwT7O7agOk8QceiEwtq6FwgY6pgFLc4P1DZT0drjkzfMFAgEaib0WIRgJiCTVZ6RKvmFh6lIaf95mD63F04VgD4fvKBbMDV2V40wjaDwSVRoyHOyAefCJGcO2cnUJg%2BZCECV5no8rO1gigzXf5X8tiBIJ8UC%2BKvgaMQhwDqkWtRGs6%2FQ25rdAX%2FzF3fMLjRsswMQtqiuLmEeE0uIcmv3FEL2yy%2FJBDkxain44tsrxctS%2FHPxoTE84p0Jq&X-Amz-Signature=e36e05fc1234ca9545ae23c3f03622129a948bf277622cd43dd6d0797d8fb068&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUPR62U%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH%2B5%2BYWTc8ev4SYzYcgpHgDQTZPcqFcHs1Kb6XfEDsVCAiA%2FXhbnPAutWf12jk%2BcCsm4aBc3W003dT2%2FmKZWR7ZExyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMhCG92RI%2B%2Bq5xbfNwKtwDTTaoCgnSrkad8F8iD1hxrIlkxRGuLIBt0fsyvGZwKBlPKVpIkpIGRQAuy%2FKIOoxyUSbhr2olUMFLSPPQZ5o4vCPkhLBGxWZPppRc%2FspoxyGBCA%2BYFiYzC8R%2FC0TrziB2taTgRQCVYHbuyUuYIRPfBD9QiarIiiBayv%2BqSZa2ONUMqpPTZZxktHGZuPmMSIBaLhP2cevvxS%2F5uvjfd1AUJbyhJOiFLBTJIXEkYNNF4zKYcvmdCcqjMWilHhvtEyvrx0xIhdJ9spho6D8bmTDR%2BchkrhIQpxjgoEsJr%2BRHSEvl8FtQowNSFcDUcPpIW6e%2BkK%2B8obcVZFJO06br26jwtAtCBylPO%2FqMrP6iN0uLcyPiySdqZ4TLFgqG75mJQUpgMvt8MstYzFLXsFLVUoTl9dpiAnBulaERRwkLfFDciAeCD1RO2n4UQFIr9Ay9WVfy%2BRDN4xsA7EYM02zm8aUN9rrI0AJHhflivac4ag0ZNKrkZXdkp5Te0IKRL07LGTGLWD4O3BP7CANnp7YGkVWmQuUNhwB2%2B7BQeMlnQfdS8F%2FZyATkJGIWSJZ1bKkKjfThK5APtHFJIhdnqlGtJJQadQ5Shfvnv3uTUo221akoG7ckwT7O7agOk8QceiEwtq6FwgY6pgFLc4P1DZT0drjkzfMFAgEaib0WIRgJiCTVZ6RKvmFh6lIaf95mD63F04VgD4fvKBbMDV2V40wjaDwSVRoyHOyAefCJGcO2cnUJg%2BZCECV5no8rO1gigzXf5X8tiBIJ8UC%2BKvgaMQhwDqkWtRGs6%2FQ25rdAX%2FzF3fMLjRsswMQtqiuLmEeE0uIcmv3FEL2yy%2FJBDkxain44tsrxctS%2FHPxoTE84p0Jq&X-Amz-Signature=2842edd4f8ef77ea0aacd54696624353d33ca60241cb9906584f9f298acf89b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUPR62U%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH%2B5%2BYWTc8ev4SYzYcgpHgDQTZPcqFcHs1Kb6XfEDsVCAiA%2FXhbnPAutWf12jk%2BcCsm4aBc3W003dT2%2FmKZWR7ZExyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMhCG92RI%2B%2Bq5xbfNwKtwDTTaoCgnSrkad8F8iD1hxrIlkxRGuLIBt0fsyvGZwKBlPKVpIkpIGRQAuy%2FKIOoxyUSbhr2olUMFLSPPQZ5o4vCPkhLBGxWZPppRc%2FspoxyGBCA%2BYFiYzC8R%2FC0TrziB2taTgRQCVYHbuyUuYIRPfBD9QiarIiiBayv%2BqSZa2ONUMqpPTZZxktHGZuPmMSIBaLhP2cevvxS%2F5uvjfd1AUJbyhJOiFLBTJIXEkYNNF4zKYcvmdCcqjMWilHhvtEyvrx0xIhdJ9spho6D8bmTDR%2BchkrhIQpxjgoEsJr%2BRHSEvl8FtQowNSFcDUcPpIW6e%2BkK%2B8obcVZFJO06br26jwtAtCBylPO%2FqMrP6iN0uLcyPiySdqZ4TLFgqG75mJQUpgMvt8MstYzFLXsFLVUoTl9dpiAnBulaERRwkLfFDciAeCD1RO2n4UQFIr9Ay9WVfy%2BRDN4xsA7EYM02zm8aUN9rrI0AJHhflivac4ag0ZNKrkZXdkp5Te0IKRL07LGTGLWD4O3BP7CANnp7YGkVWmQuUNhwB2%2B7BQeMlnQfdS8F%2FZyATkJGIWSJZ1bKkKjfThK5APtHFJIhdnqlGtJJQadQ5Shfvnv3uTUo221akoG7ckwT7O7agOk8QceiEwtq6FwgY6pgFLc4P1DZT0drjkzfMFAgEaib0WIRgJiCTVZ6RKvmFh6lIaf95mD63F04VgD4fvKBbMDV2V40wjaDwSVRoyHOyAefCJGcO2cnUJg%2BZCECV5no8rO1gigzXf5X8tiBIJ8UC%2BKvgaMQhwDqkWtRGs6%2FQ25rdAX%2FzF3fMLjRsswMQtqiuLmEeE0uIcmv3FEL2yy%2FJBDkxain44tsrxctS%2FHPxoTE84p0Jq&X-Amz-Signature=a9b80a07b7015d97a7e81f65f359ce4e5b035c65a5cd85fdaf9e346a92c6c73e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUPR62U%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH%2B5%2BYWTc8ev4SYzYcgpHgDQTZPcqFcHs1Kb6XfEDsVCAiA%2FXhbnPAutWf12jk%2BcCsm4aBc3W003dT2%2FmKZWR7ZExyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMhCG92RI%2B%2Bq5xbfNwKtwDTTaoCgnSrkad8F8iD1hxrIlkxRGuLIBt0fsyvGZwKBlPKVpIkpIGRQAuy%2FKIOoxyUSbhr2olUMFLSPPQZ5o4vCPkhLBGxWZPppRc%2FspoxyGBCA%2BYFiYzC8R%2FC0TrziB2taTgRQCVYHbuyUuYIRPfBD9QiarIiiBayv%2BqSZa2ONUMqpPTZZxktHGZuPmMSIBaLhP2cevvxS%2F5uvjfd1AUJbyhJOiFLBTJIXEkYNNF4zKYcvmdCcqjMWilHhvtEyvrx0xIhdJ9spho6D8bmTDR%2BchkrhIQpxjgoEsJr%2BRHSEvl8FtQowNSFcDUcPpIW6e%2BkK%2B8obcVZFJO06br26jwtAtCBylPO%2FqMrP6iN0uLcyPiySdqZ4TLFgqG75mJQUpgMvt8MstYzFLXsFLVUoTl9dpiAnBulaERRwkLfFDciAeCD1RO2n4UQFIr9Ay9WVfy%2BRDN4xsA7EYM02zm8aUN9rrI0AJHhflivac4ag0ZNKrkZXdkp5Te0IKRL07LGTGLWD4O3BP7CANnp7YGkVWmQuUNhwB2%2B7BQeMlnQfdS8F%2FZyATkJGIWSJZ1bKkKjfThK5APtHFJIhdnqlGtJJQadQ5Shfvnv3uTUo221akoG7ckwT7O7agOk8QceiEwtq6FwgY6pgFLc4P1DZT0drjkzfMFAgEaib0WIRgJiCTVZ6RKvmFh6lIaf95mD63F04VgD4fvKBbMDV2V40wjaDwSVRoyHOyAefCJGcO2cnUJg%2BZCECV5no8rO1gigzXf5X8tiBIJ8UC%2BKvgaMQhwDqkWtRGs6%2FQ25rdAX%2FzF3fMLjRsswMQtqiuLmEeE0uIcmv3FEL2yy%2FJBDkxain44tsrxctS%2FHPxoTE84p0Jq&X-Amz-Signature=f7d9d7840363f7d4937ad0064caa451763f8fd8229ba69bce9d81eb0b5535ace&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUPR62U%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH%2B5%2BYWTc8ev4SYzYcgpHgDQTZPcqFcHs1Kb6XfEDsVCAiA%2FXhbnPAutWf12jk%2BcCsm4aBc3W003dT2%2FmKZWR7ZExyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMhCG92RI%2B%2Bq5xbfNwKtwDTTaoCgnSrkad8F8iD1hxrIlkxRGuLIBt0fsyvGZwKBlPKVpIkpIGRQAuy%2FKIOoxyUSbhr2olUMFLSPPQZ5o4vCPkhLBGxWZPppRc%2FspoxyGBCA%2BYFiYzC8R%2FC0TrziB2taTgRQCVYHbuyUuYIRPfBD9QiarIiiBayv%2BqSZa2ONUMqpPTZZxktHGZuPmMSIBaLhP2cevvxS%2F5uvjfd1AUJbyhJOiFLBTJIXEkYNNF4zKYcvmdCcqjMWilHhvtEyvrx0xIhdJ9spho6D8bmTDR%2BchkrhIQpxjgoEsJr%2BRHSEvl8FtQowNSFcDUcPpIW6e%2BkK%2B8obcVZFJO06br26jwtAtCBylPO%2FqMrP6iN0uLcyPiySdqZ4TLFgqG75mJQUpgMvt8MstYzFLXsFLVUoTl9dpiAnBulaERRwkLfFDciAeCD1RO2n4UQFIr9Ay9WVfy%2BRDN4xsA7EYM02zm8aUN9rrI0AJHhflivac4ag0ZNKrkZXdkp5Te0IKRL07LGTGLWD4O3BP7CANnp7YGkVWmQuUNhwB2%2B7BQeMlnQfdS8F%2FZyATkJGIWSJZ1bKkKjfThK5APtHFJIhdnqlGtJJQadQ5Shfvnv3uTUo221akoG7ckwT7O7agOk8QceiEwtq6FwgY6pgFLc4P1DZT0drjkzfMFAgEaib0WIRgJiCTVZ6RKvmFh6lIaf95mD63F04VgD4fvKBbMDV2V40wjaDwSVRoyHOyAefCJGcO2cnUJg%2BZCECV5no8rO1gigzXf5X8tiBIJ8UC%2BKvgaMQhwDqkWtRGs6%2FQ25rdAX%2FzF3fMLjRsswMQtqiuLmEeE0uIcmv3FEL2yy%2FJBDkxain44tsrxctS%2FHPxoTE84p0Jq&X-Amz-Signature=c0843bcdacbcb9a753e590118ec5b42e4590322d339052f74729d8e47674cc39&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUPR62U%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH%2B5%2BYWTc8ev4SYzYcgpHgDQTZPcqFcHs1Kb6XfEDsVCAiA%2FXhbnPAutWf12jk%2BcCsm4aBc3W003dT2%2FmKZWR7ZExyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMhCG92RI%2B%2Bq5xbfNwKtwDTTaoCgnSrkad8F8iD1hxrIlkxRGuLIBt0fsyvGZwKBlPKVpIkpIGRQAuy%2FKIOoxyUSbhr2olUMFLSPPQZ5o4vCPkhLBGxWZPppRc%2FspoxyGBCA%2BYFiYzC8R%2FC0TrziB2taTgRQCVYHbuyUuYIRPfBD9QiarIiiBayv%2BqSZa2ONUMqpPTZZxktHGZuPmMSIBaLhP2cevvxS%2F5uvjfd1AUJbyhJOiFLBTJIXEkYNNF4zKYcvmdCcqjMWilHhvtEyvrx0xIhdJ9spho6D8bmTDR%2BchkrhIQpxjgoEsJr%2BRHSEvl8FtQowNSFcDUcPpIW6e%2BkK%2B8obcVZFJO06br26jwtAtCBylPO%2FqMrP6iN0uLcyPiySdqZ4TLFgqG75mJQUpgMvt8MstYzFLXsFLVUoTl9dpiAnBulaERRwkLfFDciAeCD1RO2n4UQFIr9Ay9WVfy%2BRDN4xsA7EYM02zm8aUN9rrI0AJHhflivac4ag0ZNKrkZXdkp5Te0IKRL07LGTGLWD4O3BP7CANnp7YGkVWmQuUNhwB2%2B7BQeMlnQfdS8F%2FZyATkJGIWSJZ1bKkKjfThK5APtHFJIhdnqlGtJJQadQ5Shfvnv3uTUo221akoG7ckwT7O7agOk8QceiEwtq6FwgY6pgFLc4P1DZT0drjkzfMFAgEaib0WIRgJiCTVZ6RKvmFh6lIaf95mD63F04VgD4fvKBbMDV2V40wjaDwSVRoyHOyAefCJGcO2cnUJg%2BZCECV5no8rO1gigzXf5X8tiBIJ8UC%2BKvgaMQhwDqkWtRGs6%2FQ25rdAX%2FzF3fMLjRsswMQtqiuLmEeE0uIcmv3FEL2yy%2FJBDkxain44tsrxctS%2FHPxoTE84p0Jq&X-Amz-Signature=1b66917959d4fc333e8de32561f98ae88c477047e3e3c6e80a57a4ec74215a60&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUUPR62U%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH%2B5%2BYWTc8ev4SYzYcgpHgDQTZPcqFcHs1Kb6XfEDsVCAiA%2FXhbnPAutWf12jk%2BcCsm4aBc3W003dT2%2FmKZWR7ZExyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMhCG92RI%2B%2Bq5xbfNwKtwDTTaoCgnSrkad8F8iD1hxrIlkxRGuLIBt0fsyvGZwKBlPKVpIkpIGRQAuy%2FKIOoxyUSbhr2olUMFLSPPQZ5o4vCPkhLBGxWZPppRc%2FspoxyGBCA%2BYFiYzC8R%2FC0TrziB2taTgRQCVYHbuyUuYIRPfBD9QiarIiiBayv%2BqSZa2ONUMqpPTZZxktHGZuPmMSIBaLhP2cevvxS%2F5uvjfd1AUJbyhJOiFLBTJIXEkYNNF4zKYcvmdCcqjMWilHhvtEyvrx0xIhdJ9spho6D8bmTDR%2BchkrhIQpxjgoEsJr%2BRHSEvl8FtQowNSFcDUcPpIW6e%2BkK%2B8obcVZFJO06br26jwtAtCBylPO%2FqMrP6iN0uLcyPiySdqZ4TLFgqG75mJQUpgMvt8MstYzFLXsFLVUoTl9dpiAnBulaERRwkLfFDciAeCD1RO2n4UQFIr9Ay9WVfy%2BRDN4xsA7EYM02zm8aUN9rrI0AJHhflivac4ag0ZNKrkZXdkp5Te0IKRL07LGTGLWD4O3BP7CANnp7YGkVWmQuUNhwB2%2B7BQeMlnQfdS8F%2FZyATkJGIWSJZ1bKkKjfThK5APtHFJIhdnqlGtJJQadQ5Shfvnv3uTUo221akoG7ckwT7O7agOk8QceiEwtq6FwgY6pgFLc4P1DZT0drjkzfMFAgEaib0WIRgJiCTVZ6RKvmFh6lIaf95mD63F04VgD4fvKBbMDV2V40wjaDwSVRoyHOyAefCJGcO2cnUJg%2BZCECV5no8rO1gigzXf5X8tiBIJ8UC%2BKvgaMQhwDqkWtRGs6%2FQ25rdAX%2FzF3fMLjRsswMQtqiuLmEeE0uIcmv3FEL2yy%2FJBDkxain44tsrxctS%2FHPxoTE84p0Jq&X-Amz-Signature=ae5d47e78c973c08c4d1c8dd5121686408536d0d88f28dcdaeb19d3ca4d17cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
