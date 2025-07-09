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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGVVNEA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJIKjpH9Mm%2B9xsOpvOjNVYldSFyw4RZDiXmjnm49yr1wIgC2EPuR5b5IO%2BSfltoJRWUb7ujyXmh1LFEVdGnGc6i2wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPuaz4cwbVMKb1MnircA1RXOfdByqE6VRP6nWr6GdV0%2Bc0OPdhAXiMmZaZwlwnJcnaKuVoqXBHQEtSy6x2%2BqBSvVKkaOdvprta985Kke%2F9%2Fs1aqDlriI0Le4o38lGXCV98wzJEH0dhwbHVpu84a8FCZDEu1TNkqazELWzF8LSD3ue4TzBn1yrgl5HZP%2BYXTF2ckD8mh6wSbeUQpo9RSByR4rpFK098MGXmGqEvrRFupeF5AgZM6Ul6AuDmCVwqEJniL4mbecYnIfFyrEm4%2F0ZVpQ4uTfhU%2FgNgt65xizjAMgmNuxUTzMW82Je38c5RleVb3gDBjOtw2OJ706SDj2jystv%2FxlQPsAIJI3R%2Bp5OSGzuw83TJ07%2FBQfjERbDwEnkyGgOkemMm6n%2Bm7iPMt9sHtAy7FWWwEv0PQbFxaN%2BoFLhgWeUm7Me0LuDWCuI1qzlMW4Y1HD1Q%2FbgsckMM7%2BFHyeUjyyQTg%2FisBEguoy5PC2EOgrJeXBPkXTBq%2FX92pioklklQ5zhChkMQYPsqwhjXoGPwuOhyy3TT9Gf9amvjyvRmEWeVfttD1dQXsnQVxLf1%2Fxnk65sXmAjXU1uZ%2F4Da4CRlOzdECTLqUeASy6NI6bq9YGqey6qrPKHNeH6%2BvXSz392%2FRBkNpqm5qMKikuMMGOqUB4xHNbtO7ezaxpeoForURVVVE2tjopi%2FFik%2FYmdy8sQF%2BzBT5Q7slpwYxUGwqhfB%2BkZVaD3frdPnpxs3HRByAoJ3VErAleiYcXN%2Fe%2BZoJqbnYHG6WwTo4LsIMOgCkitaRc0Zx3hdPZUeJXgnhsgrgLdAXivtEeXERJUJ%2BD%2Byhks7Xe8hQ%2FRDDEgfUg9y7V6EEQ9gkAhIfGUKrWz5GyHdAYikpx3gM&X-Amz-Signature=6fbfa8ca67fb8cfb3bc20950cfbd8fbde6daeb51fed96b96c970bb3b468093fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGVVNEA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJIKjpH9Mm%2B9xsOpvOjNVYldSFyw4RZDiXmjnm49yr1wIgC2EPuR5b5IO%2BSfltoJRWUb7ujyXmh1LFEVdGnGc6i2wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPuaz4cwbVMKb1MnircA1RXOfdByqE6VRP6nWr6GdV0%2Bc0OPdhAXiMmZaZwlwnJcnaKuVoqXBHQEtSy6x2%2BqBSvVKkaOdvprta985Kke%2F9%2Fs1aqDlriI0Le4o38lGXCV98wzJEH0dhwbHVpu84a8FCZDEu1TNkqazELWzF8LSD3ue4TzBn1yrgl5HZP%2BYXTF2ckD8mh6wSbeUQpo9RSByR4rpFK098MGXmGqEvrRFupeF5AgZM6Ul6AuDmCVwqEJniL4mbecYnIfFyrEm4%2F0ZVpQ4uTfhU%2FgNgt65xizjAMgmNuxUTzMW82Je38c5RleVb3gDBjOtw2OJ706SDj2jystv%2FxlQPsAIJI3R%2Bp5OSGzuw83TJ07%2FBQfjERbDwEnkyGgOkemMm6n%2Bm7iPMt9sHtAy7FWWwEv0PQbFxaN%2BoFLhgWeUm7Me0LuDWCuI1qzlMW4Y1HD1Q%2FbgsckMM7%2BFHyeUjyyQTg%2FisBEguoy5PC2EOgrJeXBPkXTBq%2FX92pioklklQ5zhChkMQYPsqwhjXoGPwuOhyy3TT9Gf9amvjyvRmEWeVfttD1dQXsnQVxLf1%2Fxnk65sXmAjXU1uZ%2F4Da4CRlOzdECTLqUeASy6NI6bq9YGqey6qrPKHNeH6%2BvXSz392%2FRBkNpqm5qMKikuMMGOqUB4xHNbtO7ezaxpeoForURVVVE2tjopi%2FFik%2FYmdy8sQF%2BzBT5Q7slpwYxUGwqhfB%2BkZVaD3frdPnpxs3HRByAoJ3VErAleiYcXN%2Fe%2BZoJqbnYHG6WwTo4LsIMOgCkitaRc0Zx3hdPZUeJXgnhsgrgLdAXivtEeXERJUJ%2BD%2Byhks7Xe8hQ%2FRDDEgfUg9y7V6EEQ9gkAhIfGUKrWz5GyHdAYikpx3gM&X-Amz-Signature=0983409823dc2465dc17b88f8dc689d385aca861fd18cf89c70efa30d0ca87ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGVVNEA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJIKjpH9Mm%2B9xsOpvOjNVYldSFyw4RZDiXmjnm49yr1wIgC2EPuR5b5IO%2BSfltoJRWUb7ujyXmh1LFEVdGnGc6i2wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPuaz4cwbVMKb1MnircA1RXOfdByqE6VRP6nWr6GdV0%2Bc0OPdhAXiMmZaZwlwnJcnaKuVoqXBHQEtSy6x2%2BqBSvVKkaOdvprta985Kke%2F9%2Fs1aqDlriI0Le4o38lGXCV98wzJEH0dhwbHVpu84a8FCZDEu1TNkqazELWzF8LSD3ue4TzBn1yrgl5HZP%2BYXTF2ckD8mh6wSbeUQpo9RSByR4rpFK098MGXmGqEvrRFupeF5AgZM6Ul6AuDmCVwqEJniL4mbecYnIfFyrEm4%2F0ZVpQ4uTfhU%2FgNgt65xizjAMgmNuxUTzMW82Je38c5RleVb3gDBjOtw2OJ706SDj2jystv%2FxlQPsAIJI3R%2Bp5OSGzuw83TJ07%2FBQfjERbDwEnkyGgOkemMm6n%2Bm7iPMt9sHtAy7FWWwEv0PQbFxaN%2BoFLhgWeUm7Me0LuDWCuI1qzlMW4Y1HD1Q%2FbgsckMM7%2BFHyeUjyyQTg%2FisBEguoy5PC2EOgrJeXBPkXTBq%2FX92pioklklQ5zhChkMQYPsqwhjXoGPwuOhyy3TT9Gf9amvjyvRmEWeVfttD1dQXsnQVxLf1%2Fxnk65sXmAjXU1uZ%2F4Da4CRlOzdECTLqUeASy6NI6bq9YGqey6qrPKHNeH6%2BvXSz392%2FRBkNpqm5qMKikuMMGOqUB4xHNbtO7ezaxpeoForURVVVE2tjopi%2FFik%2FYmdy8sQF%2BzBT5Q7slpwYxUGwqhfB%2BkZVaD3frdPnpxs3HRByAoJ3VErAleiYcXN%2Fe%2BZoJqbnYHG6WwTo4LsIMOgCkitaRc0Zx3hdPZUeJXgnhsgrgLdAXivtEeXERJUJ%2BD%2Byhks7Xe8hQ%2FRDDEgfUg9y7V6EEQ9gkAhIfGUKrWz5GyHdAYikpx3gM&X-Amz-Signature=a0074ca8442fb1623731676418c0ccf7eccd83ebe0d4a728708b690631625245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGVVNEA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJIKjpH9Mm%2B9xsOpvOjNVYldSFyw4RZDiXmjnm49yr1wIgC2EPuR5b5IO%2BSfltoJRWUb7ujyXmh1LFEVdGnGc6i2wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPuaz4cwbVMKb1MnircA1RXOfdByqE6VRP6nWr6GdV0%2Bc0OPdhAXiMmZaZwlwnJcnaKuVoqXBHQEtSy6x2%2BqBSvVKkaOdvprta985Kke%2F9%2Fs1aqDlriI0Le4o38lGXCV98wzJEH0dhwbHVpu84a8FCZDEu1TNkqazELWzF8LSD3ue4TzBn1yrgl5HZP%2BYXTF2ckD8mh6wSbeUQpo9RSByR4rpFK098MGXmGqEvrRFupeF5AgZM6Ul6AuDmCVwqEJniL4mbecYnIfFyrEm4%2F0ZVpQ4uTfhU%2FgNgt65xizjAMgmNuxUTzMW82Je38c5RleVb3gDBjOtw2OJ706SDj2jystv%2FxlQPsAIJI3R%2Bp5OSGzuw83TJ07%2FBQfjERbDwEnkyGgOkemMm6n%2Bm7iPMt9sHtAy7FWWwEv0PQbFxaN%2BoFLhgWeUm7Me0LuDWCuI1qzlMW4Y1HD1Q%2FbgsckMM7%2BFHyeUjyyQTg%2FisBEguoy5PC2EOgrJeXBPkXTBq%2FX92pioklklQ5zhChkMQYPsqwhjXoGPwuOhyy3TT9Gf9amvjyvRmEWeVfttD1dQXsnQVxLf1%2Fxnk65sXmAjXU1uZ%2F4Da4CRlOzdECTLqUeASy6NI6bq9YGqey6qrPKHNeH6%2BvXSz392%2FRBkNpqm5qMKikuMMGOqUB4xHNbtO7ezaxpeoForURVVVE2tjopi%2FFik%2FYmdy8sQF%2BzBT5Q7slpwYxUGwqhfB%2BkZVaD3frdPnpxs3HRByAoJ3VErAleiYcXN%2Fe%2BZoJqbnYHG6WwTo4LsIMOgCkitaRc0Zx3hdPZUeJXgnhsgrgLdAXivtEeXERJUJ%2BD%2Byhks7Xe8hQ%2FRDDEgfUg9y7V6EEQ9gkAhIfGUKrWz5GyHdAYikpx3gM&X-Amz-Signature=ddee2407a531470e16f7c560824a6276ad1505193a21538a69f183d64044defd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGVVNEA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJIKjpH9Mm%2B9xsOpvOjNVYldSFyw4RZDiXmjnm49yr1wIgC2EPuR5b5IO%2BSfltoJRWUb7ujyXmh1LFEVdGnGc6i2wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPuaz4cwbVMKb1MnircA1RXOfdByqE6VRP6nWr6GdV0%2Bc0OPdhAXiMmZaZwlwnJcnaKuVoqXBHQEtSy6x2%2BqBSvVKkaOdvprta985Kke%2F9%2Fs1aqDlriI0Le4o38lGXCV98wzJEH0dhwbHVpu84a8FCZDEu1TNkqazELWzF8LSD3ue4TzBn1yrgl5HZP%2BYXTF2ckD8mh6wSbeUQpo9RSByR4rpFK098MGXmGqEvrRFupeF5AgZM6Ul6AuDmCVwqEJniL4mbecYnIfFyrEm4%2F0ZVpQ4uTfhU%2FgNgt65xizjAMgmNuxUTzMW82Je38c5RleVb3gDBjOtw2OJ706SDj2jystv%2FxlQPsAIJI3R%2Bp5OSGzuw83TJ07%2FBQfjERbDwEnkyGgOkemMm6n%2Bm7iPMt9sHtAy7FWWwEv0PQbFxaN%2BoFLhgWeUm7Me0LuDWCuI1qzlMW4Y1HD1Q%2FbgsckMM7%2BFHyeUjyyQTg%2FisBEguoy5PC2EOgrJeXBPkXTBq%2FX92pioklklQ5zhChkMQYPsqwhjXoGPwuOhyy3TT9Gf9amvjyvRmEWeVfttD1dQXsnQVxLf1%2Fxnk65sXmAjXU1uZ%2F4Da4CRlOzdECTLqUeASy6NI6bq9YGqey6qrPKHNeH6%2BvXSz392%2FRBkNpqm5qMKikuMMGOqUB4xHNbtO7ezaxpeoForURVVVE2tjopi%2FFik%2FYmdy8sQF%2BzBT5Q7slpwYxUGwqhfB%2BkZVaD3frdPnpxs3HRByAoJ3VErAleiYcXN%2Fe%2BZoJqbnYHG6WwTo4LsIMOgCkitaRc0Zx3hdPZUeJXgnhsgrgLdAXivtEeXERJUJ%2BD%2Byhks7Xe8hQ%2FRDDEgfUg9y7V6EEQ9gkAhIfGUKrWz5GyHdAYikpx3gM&X-Amz-Signature=bfcd8035c44e2260d526df8d3c97e07f7095c1de8034250489b91ffe3c3e07ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGVVNEA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJIKjpH9Mm%2B9xsOpvOjNVYldSFyw4RZDiXmjnm49yr1wIgC2EPuR5b5IO%2BSfltoJRWUb7ujyXmh1LFEVdGnGc6i2wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPuaz4cwbVMKb1MnircA1RXOfdByqE6VRP6nWr6GdV0%2Bc0OPdhAXiMmZaZwlwnJcnaKuVoqXBHQEtSy6x2%2BqBSvVKkaOdvprta985Kke%2F9%2Fs1aqDlriI0Le4o38lGXCV98wzJEH0dhwbHVpu84a8FCZDEu1TNkqazELWzF8LSD3ue4TzBn1yrgl5HZP%2BYXTF2ckD8mh6wSbeUQpo9RSByR4rpFK098MGXmGqEvrRFupeF5AgZM6Ul6AuDmCVwqEJniL4mbecYnIfFyrEm4%2F0ZVpQ4uTfhU%2FgNgt65xizjAMgmNuxUTzMW82Je38c5RleVb3gDBjOtw2OJ706SDj2jystv%2FxlQPsAIJI3R%2Bp5OSGzuw83TJ07%2FBQfjERbDwEnkyGgOkemMm6n%2Bm7iPMt9sHtAy7FWWwEv0PQbFxaN%2BoFLhgWeUm7Me0LuDWCuI1qzlMW4Y1HD1Q%2FbgsckMM7%2BFHyeUjyyQTg%2FisBEguoy5PC2EOgrJeXBPkXTBq%2FX92pioklklQ5zhChkMQYPsqwhjXoGPwuOhyy3TT9Gf9amvjyvRmEWeVfttD1dQXsnQVxLf1%2Fxnk65sXmAjXU1uZ%2F4Da4CRlOzdECTLqUeASy6NI6bq9YGqey6qrPKHNeH6%2BvXSz392%2FRBkNpqm5qMKikuMMGOqUB4xHNbtO7ezaxpeoForURVVVE2tjopi%2FFik%2FYmdy8sQF%2BzBT5Q7slpwYxUGwqhfB%2BkZVaD3frdPnpxs3HRByAoJ3VErAleiYcXN%2Fe%2BZoJqbnYHG6WwTo4LsIMOgCkitaRc0Zx3hdPZUeJXgnhsgrgLdAXivtEeXERJUJ%2BD%2Byhks7Xe8hQ%2FRDDEgfUg9y7V6EEQ9gkAhIfGUKrWz5GyHdAYikpx3gM&X-Amz-Signature=65ddd6743e5baae190b422ff010cde812f9c6f2688094e16a7ba64ee6513a72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YGVVNEA%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJIKjpH9Mm%2B9xsOpvOjNVYldSFyw4RZDiXmjnm49yr1wIgC2EPuR5b5IO%2BSfltoJRWUb7ujyXmh1LFEVdGnGc6i2wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPuaz4cwbVMKb1MnircA1RXOfdByqE6VRP6nWr6GdV0%2Bc0OPdhAXiMmZaZwlwnJcnaKuVoqXBHQEtSy6x2%2BqBSvVKkaOdvprta985Kke%2F9%2Fs1aqDlriI0Le4o38lGXCV98wzJEH0dhwbHVpu84a8FCZDEu1TNkqazELWzF8LSD3ue4TzBn1yrgl5HZP%2BYXTF2ckD8mh6wSbeUQpo9RSByR4rpFK098MGXmGqEvrRFupeF5AgZM6Ul6AuDmCVwqEJniL4mbecYnIfFyrEm4%2F0ZVpQ4uTfhU%2FgNgt65xizjAMgmNuxUTzMW82Je38c5RleVb3gDBjOtw2OJ706SDj2jystv%2FxlQPsAIJI3R%2Bp5OSGzuw83TJ07%2FBQfjERbDwEnkyGgOkemMm6n%2Bm7iPMt9sHtAy7FWWwEv0PQbFxaN%2BoFLhgWeUm7Me0LuDWCuI1qzlMW4Y1HD1Q%2FbgsckMM7%2BFHyeUjyyQTg%2FisBEguoy5PC2EOgrJeXBPkXTBq%2FX92pioklklQ5zhChkMQYPsqwhjXoGPwuOhyy3TT9Gf9amvjyvRmEWeVfttD1dQXsnQVxLf1%2Fxnk65sXmAjXU1uZ%2F4Da4CRlOzdECTLqUeASy6NI6bq9YGqey6qrPKHNeH6%2BvXSz392%2FRBkNpqm5qMKikuMMGOqUB4xHNbtO7ezaxpeoForURVVVE2tjopi%2FFik%2FYmdy8sQF%2BzBT5Q7slpwYxUGwqhfB%2BkZVaD3frdPnpxs3HRByAoJ3VErAleiYcXN%2Fe%2BZoJqbnYHG6WwTo4LsIMOgCkitaRc0Zx3hdPZUeJXgnhsgrgLdAXivtEeXERJUJ%2BD%2Byhks7Xe8hQ%2FRDDEgfUg9y7V6EEQ9gkAhIfGUKrWz5GyHdAYikpx3gM&X-Amz-Signature=74ad62eddbc57760339504ff84c9d42da5c5348117b536b7339b8e20f14b3e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
