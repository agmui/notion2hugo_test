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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZ7CLZ3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93t0NPCuowLeh4ihD6QLxjFGoEvfMjZkvJhbyvjfPFAIhAPadQbXLIH2mb56%2BsCoyroB1twWS91IUNhQv1Onkk%2BFeKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMYeD7M%2BoC%2Fl1YZvEq3AMrlSly8r13%2BWEyrQue%2B6Pj7JMSj0R%2FLY3%2FPQB6kYtbe%2BY9Fd1pEPRvYXBZPkUFmfzmfrDgmo5cuCUYM9yCyD1vwYvsOTYl8jtLih4%2FATzUbKe9qMfjlirfbGxWZQ2hWltHvLhF1cUixjkbvTvwqZfCEfVtjBwBWqprZgL25RtlPsl2SbuTbVcF%2Bp4vbBr1GrznjppPY5352rGyTLyHksjAOvdPh71v7L3wAXoFr7M360Mmn23EHmNl1LPkkaFRWRxr81QsTSjLz8rUCuNCs68hv3PX%2FudIRVpXhOkBqDiRIxg1XuI9q8mEbSP720qzRy9678WcaSHRG8lNYIsYB17PvXP6UIZC7AdXxqEgCGpiB%2Bh8HvyP3Ogo1%2FFPyDDtQEApagb7rJRAfvZBvA4E4B3XAuZN9SLHCdb4KHO8FwQ9rom7qmonLLNbrFJp6LVhE%2FS1eqm%2ByVlWk24wPeKgp0HL1V36BnpbdNmYkiDKVnPXflvNffsLw5Y4Dm9gEiO9rxBkn8bt8EyGaR3dSMo3AfWPtQX8WmG33ybteQ2lUNTPzabHbzj03L4bTx8MH9DjRlCU%2BbyQrv77W3iENn%2BKs4zRIfXib378wfJjpWlkJULHLQlk7w5yU4sgJ1%2BcGDD4iaXEBjqkAXuSuLMjwXU%2Bxco9hW3i6KTaxjUeuWmynrayylnD6F5byC%2Bk2mzLGtmPLe8KKS%2FLly99XRMbKA614U7KdGatU%2FI%2B8nwTH9zRXyO%2FND3h3y03NoZlT5EFke3ximrbM%2BXTsBRqXmm3kGU6lAmYyuyFGyPw%2FvI5jrIgzS3bDeECSR3WzGpp5msPm06RtEtMwvdPJ2u4uUN9nBpTfNZ%2Bj3N7pvJstcga&X-Amz-Signature=c65e35742bca792f70178c994903c6f4d58f22820c8b6293d62289df14389f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZ7CLZ3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93t0NPCuowLeh4ihD6QLxjFGoEvfMjZkvJhbyvjfPFAIhAPadQbXLIH2mb56%2BsCoyroB1twWS91IUNhQv1Onkk%2BFeKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMYeD7M%2BoC%2Fl1YZvEq3AMrlSly8r13%2BWEyrQue%2B6Pj7JMSj0R%2FLY3%2FPQB6kYtbe%2BY9Fd1pEPRvYXBZPkUFmfzmfrDgmo5cuCUYM9yCyD1vwYvsOTYl8jtLih4%2FATzUbKe9qMfjlirfbGxWZQ2hWltHvLhF1cUixjkbvTvwqZfCEfVtjBwBWqprZgL25RtlPsl2SbuTbVcF%2Bp4vbBr1GrznjppPY5352rGyTLyHksjAOvdPh71v7L3wAXoFr7M360Mmn23EHmNl1LPkkaFRWRxr81QsTSjLz8rUCuNCs68hv3PX%2FudIRVpXhOkBqDiRIxg1XuI9q8mEbSP720qzRy9678WcaSHRG8lNYIsYB17PvXP6UIZC7AdXxqEgCGpiB%2Bh8HvyP3Ogo1%2FFPyDDtQEApagb7rJRAfvZBvA4E4B3XAuZN9SLHCdb4KHO8FwQ9rom7qmonLLNbrFJp6LVhE%2FS1eqm%2ByVlWk24wPeKgp0HL1V36BnpbdNmYkiDKVnPXflvNffsLw5Y4Dm9gEiO9rxBkn8bt8EyGaR3dSMo3AfWPtQX8WmG33ybteQ2lUNTPzabHbzj03L4bTx8MH9DjRlCU%2BbyQrv77W3iENn%2BKs4zRIfXib378wfJjpWlkJULHLQlk7w5yU4sgJ1%2BcGDD4iaXEBjqkAXuSuLMjwXU%2Bxco9hW3i6KTaxjUeuWmynrayylnD6F5byC%2Bk2mzLGtmPLe8KKS%2FLly99XRMbKA614U7KdGatU%2FI%2B8nwTH9zRXyO%2FND3h3y03NoZlT5EFke3ximrbM%2BXTsBRqXmm3kGU6lAmYyuyFGyPw%2FvI5jrIgzS3bDeECSR3WzGpp5msPm06RtEtMwvdPJ2u4uUN9nBpTfNZ%2Bj3N7pvJstcga&X-Amz-Signature=5dc8d56bf2b50e7101b0dabcb67ae88d3ead4c0f42b7cde507a6a52ca8da48df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZ7CLZ3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93t0NPCuowLeh4ihD6QLxjFGoEvfMjZkvJhbyvjfPFAIhAPadQbXLIH2mb56%2BsCoyroB1twWS91IUNhQv1Onkk%2BFeKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMYeD7M%2BoC%2Fl1YZvEq3AMrlSly8r13%2BWEyrQue%2B6Pj7JMSj0R%2FLY3%2FPQB6kYtbe%2BY9Fd1pEPRvYXBZPkUFmfzmfrDgmo5cuCUYM9yCyD1vwYvsOTYl8jtLih4%2FATzUbKe9qMfjlirfbGxWZQ2hWltHvLhF1cUixjkbvTvwqZfCEfVtjBwBWqprZgL25RtlPsl2SbuTbVcF%2Bp4vbBr1GrznjppPY5352rGyTLyHksjAOvdPh71v7L3wAXoFr7M360Mmn23EHmNl1LPkkaFRWRxr81QsTSjLz8rUCuNCs68hv3PX%2FudIRVpXhOkBqDiRIxg1XuI9q8mEbSP720qzRy9678WcaSHRG8lNYIsYB17PvXP6UIZC7AdXxqEgCGpiB%2Bh8HvyP3Ogo1%2FFPyDDtQEApagb7rJRAfvZBvA4E4B3XAuZN9SLHCdb4KHO8FwQ9rom7qmonLLNbrFJp6LVhE%2FS1eqm%2ByVlWk24wPeKgp0HL1V36BnpbdNmYkiDKVnPXflvNffsLw5Y4Dm9gEiO9rxBkn8bt8EyGaR3dSMo3AfWPtQX8WmG33ybteQ2lUNTPzabHbzj03L4bTx8MH9DjRlCU%2BbyQrv77W3iENn%2BKs4zRIfXib378wfJjpWlkJULHLQlk7w5yU4sgJ1%2BcGDD4iaXEBjqkAXuSuLMjwXU%2Bxco9hW3i6KTaxjUeuWmynrayylnD6F5byC%2Bk2mzLGtmPLe8KKS%2FLly99XRMbKA614U7KdGatU%2FI%2B8nwTH9zRXyO%2FND3h3y03NoZlT5EFke3ximrbM%2BXTsBRqXmm3kGU6lAmYyuyFGyPw%2FvI5jrIgzS3bDeECSR3WzGpp5msPm06RtEtMwvdPJ2u4uUN9nBpTfNZ%2Bj3N7pvJstcga&X-Amz-Signature=0e9e259d11e162f22ff73298e203a559aaa51c0ddf7713c0cdbfcffe8cf8e9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZ7CLZ3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93t0NPCuowLeh4ihD6QLxjFGoEvfMjZkvJhbyvjfPFAIhAPadQbXLIH2mb56%2BsCoyroB1twWS91IUNhQv1Onkk%2BFeKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMYeD7M%2BoC%2Fl1YZvEq3AMrlSly8r13%2BWEyrQue%2B6Pj7JMSj0R%2FLY3%2FPQB6kYtbe%2BY9Fd1pEPRvYXBZPkUFmfzmfrDgmo5cuCUYM9yCyD1vwYvsOTYl8jtLih4%2FATzUbKe9qMfjlirfbGxWZQ2hWltHvLhF1cUixjkbvTvwqZfCEfVtjBwBWqprZgL25RtlPsl2SbuTbVcF%2Bp4vbBr1GrznjppPY5352rGyTLyHksjAOvdPh71v7L3wAXoFr7M360Mmn23EHmNl1LPkkaFRWRxr81QsTSjLz8rUCuNCs68hv3PX%2FudIRVpXhOkBqDiRIxg1XuI9q8mEbSP720qzRy9678WcaSHRG8lNYIsYB17PvXP6UIZC7AdXxqEgCGpiB%2Bh8HvyP3Ogo1%2FFPyDDtQEApagb7rJRAfvZBvA4E4B3XAuZN9SLHCdb4KHO8FwQ9rom7qmonLLNbrFJp6LVhE%2FS1eqm%2ByVlWk24wPeKgp0HL1V36BnpbdNmYkiDKVnPXflvNffsLw5Y4Dm9gEiO9rxBkn8bt8EyGaR3dSMo3AfWPtQX8WmG33ybteQ2lUNTPzabHbzj03L4bTx8MH9DjRlCU%2BbyQrv77W3iENn%2BKs4zRIfXib378wfJjpWlkJULHLQlk7w5yU4sgJ1%2BcGDD4iaXEBjqkAXuSuLMjwXU%2Bxco9hW3i6KTaxjUeuWmynrayylnD6F5byC%2Bk2mzLGtmPLe8KKS%2FLly99XRMbKA614U7KdGatU%2FI%2B8nwTH9zRXyO%2FND3h3y03NoZlT5EFke3ximrbM%2BXTsBRqXmm3kGU6lAmYyuyFGyPw%2FvI5jrIgzS3bDeECSR3WzGpp5msPm06RtEtMwvdPJ2u4uUN9nBpTfNZ%2Bj3N7pvJstcga&X-Amz-Signature=f053db9722aec6b9aa36c087f0fb3c5b05ded5ff87cac6cd7b94e51f3b4bcbc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZ7CLZ3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93t0NPCuowLeh4ihD6QLxjFGoEvfMjZkvJhbyvjfPFAIhAPadQbXLIH2mb56%2BsCoyroB1twWS91IUNhQv1Onkk%2BFeKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMYeD7M%2BoC%2Fl1YZvEq3AMrlSly8r13%2BWEyrQue%2B6Pj7JMSj0R%2FLY3%2FPQB6kYtbe%2BY9Fd1pEPRvYXBZPkUFmfzmfrDgmo5cuCUYM9yCyD1vwYvsOTYl8jtLih4%2FATzUbKe9qMfjlirfbGxWZQ2hWltHvLhF1cUixjkbvTvwqZfCEfVtjBwBWqprZgL25RtlPsl2SbuTbVcF%2Bp4vbBr1GrznjppPY5352rGyTLyHksjAOvdPh71v7L3wAXoFr7M360Mmn23EHmNl1LPkkaFRWRxr81QsTSjLz8rUCuNCs68hv3PX%2FudIRVpXhOkBqDiRIxg1XuI9q8mEbSP720qzRy9678WcaSHRG8lNYIsYB17PvXP6UIZC7AdXxqEgCGpiB%2Bh8HvyP3Ogo1%2FFPyDDtQEApagb7rJRAfvZBvA4E4B3XAuZN9SLHCdb4KHO8FwQ9rom7qmonLLNbrFJp6LVhE%2FS1eqm%2ByVlWk24wPeKgp0HL1V36BnpbdNmYkiDKVnPXflvNffsLw5Y4Dm9gEiO9rxBkn8bt8EyGaR3dSMo3AfWPtQX8WmG33ybteQ2lUNTPzabHbzj03L4bTx8MH9DjRlCU%2BbyQrv77W3iENn%2BKs4zRIfXib378wfJjpWlkJULHLQlk7w5yU4sgJ1%2BcGDD4iaXEBjqkAXuSuLMjwXU%2Bxco9hW3i6KTaxjUeuWmynrayylnD6F5byC%2Bk2mzLGtmPLe8KKS%2FLly99XRMbKA614U7KdGatU%2FI%2B8nwTH9zRXyO%2FND3h3y03NoZlT5EFke3ximrbM%2BXTsBRqXmm3kGU6lAmYyuyFGyPw%2FvI5jrIgzS3bDeECSR3WzGpp5msPm06RtEtMwvdPJ2u4uUN9nBpTfNZ%2Bj3N7pvJstcga&X-Amz-Signature=bfaa98a630456c992d2a23ef4f4da8eb81058b5044d2060b605bc027343e3209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZ7CLZ3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93t0NPCuowLeh4ihD6QLxjFGoEvfMjZkvJhbyvjfPFAIhAPadQbXLIH2mb56%2BsCoyroB1twWS91IUNhQv1Onkk%2BFeKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMYeD7M%2BoC%2Fl1YZvEq3AMrlSly8r13%2BWEyrQue%2B6Pj7JMSj0R%2FLY3%2FPQB6kYtbe%2BY9Fd1pEPRvYXBZPkUFmfzmfrDgmo5cuCUYM9yCyD1vwYvsOTYl8jtLih4%2FATzUbKe9qMfjlirfbGxWZQ2hWltHvLhF1cUixjkbvTvwqZfCEfVtjBwBWqprZgL25RtlPsl2SbuTbVcF%2Bp4vbBr1GrznjppPY5352rGyTLyHksjAOvdPh71v7L3wAXoFr7M360Mmn23EHmNl1LPkkaFRWRxr81QsTSjLz8rUCuNCs68hv3PX%2FudIRVpXhOkBqDiRIxg1XuI9q8mEbSP720qzRy9678WcaSHRG8lNYIsYB17PvXP6UIZC7AdXxqEgCGpiB%2Bh8HvyP3Ogo1%2FFPyDDtQEApagb7rJRAfvZBvA4E4B3XAuZN9SLHCdb4KHO8FwQ9rom7qmonLLNbrFJp6LVhE%2FS1eqm%2ByVlWk24wPeKgp0HL1V36BnpbdNmYkiDKVnPXflvNffsLw5Y4Dm9gEiO9rxBkn8bt8EyGaR3dSMo3AfWPtQX8WmG33ybteQ2lUNTPzabHbzj03L4bTx8MH9DjRlCU%2BbyQrv77W3iENn%2BKs4zRIfXib378wfJjpWlkJULHLQlk7w5yU4sgJ1%2BcGDD4iaXEBjqkAXuSuLMjwXU%2Bxco9hW3i6KTaxjUeuWmynrayylnD6F5byC%2Bk2mzLGtmPLe8KKS%2FLly99XRMbKA614U7KdGatU%2FI%2B8nwTH9zRXyO%2FND3h3y03NoZlT5EFke3ximrbM%2BXTsBRqXmm3kGU6lAmYyuyFGyPw%2FvI5jrIgzS3bDeECSR3WzGpp5msPm06RtEtMwvdPJ2u4uUN9nBpTfNZ%2Bj3N7pvJstcga&X-Amz-Signature=9290bb789da5c0d7d0d337414772af33c76e5f5ade05e7b57039a0c2fab50306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGZ7CLZ3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T230925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93t0NPCuowLeh4ihD6QLxjFGoEvfMjZkvJhbyvjfPFAIhAPadQbXLIH2mb56%2BsCoyroB1twWS91IUNhQv1Onkk%2BFeKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMYeD7M%2BoC%2Fl1YZvEq3AMrlSly8r13%2BWEyrQue%2B6Pj7JMSj0R%2FLY3%2FPQB6kYtbe%2BY9Fd1pEPRvYXBZPkUFmfzmfrDgmo5cuCUYM9yCyD1vwYvsOTYl8jtLih4%2FATzUbKe9qMfjlirfbGxWZQ2hWltHvLhF1cUixjkbvTvwqZfCEfVtjBwBWqprZgL25RtlPsl2SbuTbVcF%2Bp4vbBr1GrznjppPY5352rGyTLyHksjAOvdPh71v7L3wAXoFr7M360Mmn23EHmNl1LPkkaFRWRxr81QsTSjLz8rUCuNCs68hv3PX%2FudIRVpXhOkBqDiRIxg1XuI9q8mEbSP720qzRy9678WcaSHRG8lNYIsYB17PvXP6UIZC7AdXxqEgCGpiB%2Bh8HvyP3Ogo1%2FFPyDDtQEApagb7rJRAfvZBvA4E4B3XAuZN9SLHCdb4KHO8FwQ9rom7qmonLLNbrFJp6LVhE%2FS1eqm%2ByVlWk24wPeKgp0HL1V36BnpbdNmYkiDKVnPXflvNffsLw5Y4Dm9gEiO9rxBkn8bt8EyGaR3dSMo3AfWPtQX8WmG33ybteQ2lUNTPzabHbzj03L4bTx8MH9DjRlCU%2BbyQrv77W3iENn%2BKs4zRIfXib378wfJjpWlkJULHLQlk7w5yU4sgJ1%2BcGDD4iaXEBjqkAXuSuLMjwXU%2Bxco9hW3i6KTaxjUeuWmynrayylnD6F5byC%2Bk2mzLGtmPLe8KKS%2FLly99XRMbKA614U7KdGatU%2FI%2B8nwTH9zRXyO%2FND3h3y03NoZlT5EFke3ximrbM%2BXTsBRqXmm3kGU6lAmYyuyFGyPw%2FvI5jrIgzS3bDeECSR3WzGpp5msPm06RtEtMwvdPJ2u4uUN9nBpTfNZ%2Bj3N7pvJstcga&X-Amz-Signature=d108745aa342b73d0110832e96e210bc506d8ac4bf5f1b25f851140495fdcdf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
