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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJMYCVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTw8Oqaofh3eNtw3qc5CsFvVzLKBZGI1bH%2BaENQcn6BAiBa9%2BkZNUBY%2B3oXfKWxOo2Vg9LlqU9fDJbHpwymMgdxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEzvCmAO4cZXgMK0FKtwDUQK%2BnkM%2BTa%2Fbq5FaWvDvk6bTxKoV8UBSmRLREc5QOyu4F63fpW3ok2GhVrxLiYjAO49gZyy7369VBsE2WMoNSLopgs6k9rcqxsvhXJea2qy5MTcl5AjH1IobNy%2B59VNJnAg83j59JR8aBVPyF2Qmu8%2FxAXDpPzrIGZis19S0O%2F%2F2s6SvZKSpAMSxgUuOp%2FQ0u7WfPe83MXO7QiubH%2BC0%2FtFOJm9FiwcBmeIEAIonYw%2Bx7ZL5rcmBEOAv6vbf8FOKDW%2BANJbht6l%2BP185ystESyexdgligl9ZcWd%2BV1soB5yNOjAPlBYgYwoS%2BgcSO%2Fks3JZ%2BZx2dN2XgtqpRRMaOKGsEWJgiDBI6U7yQPsk%2FcK3%2F6QCKa5OQy4Q75DW2QOyrD1G8c%2Bg76QWhYVhvSxMIIOUReibzKLuhLvbrLBWuxKCwluo4TOrWDIFUlN5w%2FR%2B%2BHGcKjhT4ZM1t%2FtQGP9A2lU9DWsM0wKt0diIW6sslor0btRZ5oHJXMSIS%2FWfBZTjaiZsgVBEsPuGq%2Fnil1tAusjCPoPlY4R4nmJcAYWst8g8E%2FEJRznsRJpJpeBFJtJyOjdd4dejpiE4mc1ZzZedzU%2BB%2F9eZNh%2FF1iwaXAszll8AZgpHUkYHWas%2F%2BeMQw87b8xAY6pgGWIqf6cVGd8B%2BELX09s%2FPRznfcq9A%2FEblT6%2FXLdAAkjA9U7khYbLwO2nqpMr%2F6HjgbOkEHnv6TcLSw2b22BgeEfz8gXByFwIAdBd%2FxEX8im1N%2BfeOhf%2FbXJ%2B7mN9gz3ZDSudwKC8buwD3zamEZ%2BzuaZM10pu4gX8T39EVAwDSNlZ%2BSACtF3mAdaCdgJ2FmRHqxuvqNCUWCRu7t9HkxKMaJB2UJnK88&X-Amz-Signature=2ed1c8bfb25737ef8c6a5473a3a8f2e5f2af03c1957dd7846c20e4b0ac4eec9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJMYCVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTw8Oqaofh3eNtw3qc5CsFvVzLKBZGI1bH%2BaENQcn6BAiBa9%2BkZNUBY%2B3oXfKWxOo2Vg9LlqU9fDJbHpwymMgdxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEzvCmAO4cZXgMK0FKtwDUQK%2BnkM%2BTa%2Fbq5FaWvDvk6bTxKoV8UBSmRLREc5QOyu4F63fpW3ok2GhVrxLiYjAO49gZyy7369VBsE2WMoNSLopgs6k9rcqxsvhXJea2qy5MTcl5AjH1IobNy%2B59VNJnAg83j59JR8aBVPyF2Qmu8%2FxAXDpPzrIGZis19S0O%2F%2F2s6SvZKSpAMSxgUuOp%2FQ0u7WfPe83MXO7QiubH%2BC0%2FtFOJm9FiwcBmeIEAIonYw%2Bx7ZL5rcmBEOAv6vbf8FOKDW%2BANJbht6l%2BP185ystESyexdgligl9ZcWd%2BV1soB5yNOjAPlBYgYwoS%2BgcSO%2Fks3JZ%2BZx2dN2XgtqpRRMaOKGsEWJgiDBI6U7yQPsk%2FcK3%2F6QCKa5OQy4Q75DW2QOyrD1G8c%2Bg76QWhYVhvSxMIIOUReibzKLuhLvbrLBWuxKCwluo4TOrWDIFUlN5w%2FR%2B%2BHGcKjhT4ZM1t%2FtQGP9A2lU9DWsM0wKt0diIW6sslor0btRZ5oHJXMSIS%2FWfBZTjaiZsgVBEsPuGq%2Fnil1tAusjCPoPlY4R4nmJcAYWst8g8E%2FEJRznsRJpJpeBFJtJyOjdd4dejpiE4mc1ZzZedzU%2BB%2F9eZNh%2FF1iwaXAszll8AZgpHUkYHWas%2F%2BeMQw87b8xAY6pgGWIqf6cVGd8B%2BELX09s%2FPRznfcq9A%2FEblT6%2FXLdAAkjA9U7khYbLwO2nqpMr%2F6HjgbOkEHnv6TcLSw2b22BgeEfz8gXByFwIAdBd%2FxEX8im1N%2BfeOhf%2FbXJ%2B7mN9gz3ZDSudwKC8buwD3zamEZ%2BzuaZM10pu4gX8T39EVAwDSNlZ%2BSACtF3mAdaCdgJ2FmRHqxuvqNCUWCRu7t9HkxKMaJB2UJnK88&X-Amz-Signature=15b62559e58d0177382129f5a1093e96f2472fce25e2324894f525027d41e893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJMYCVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTw8Oqaofh3eNtw3qc5CsFvVzLKBZGI1bH%2BaENQcn6BAiBa9%2BkZNUBY%2B3oXfKWxOo2Vg9LlqU9fDJbHpwymMgdxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEzvCmAO4cZXgMK0FKtwDUQK%2BnkM%2BTa%2Fbq5FaWvDvk6bTxKoV8UBSmRLREc5QOyu4F63fpW3ok2GhVrxLiYjAO49gZyy7369VBsE2WMoNSLopgs6k9rcqxsvhXJea2qy5MTcl5AjH1IobNy%2B59VNJnAg83j59JR8aBVPyF2Qmu8%2FxAXDpPzrIGZis19S0O%2F%2F2s6SvZKSpAMSxgUuOp%2FQ0u7WfPe83MXO7QiubH%2BC0%2FtFOJm9FiwcBmeIEAIonYw%2Bx7ZL5rcmBEOAv6vbf8FOKDW%2BANJbht6l%2BP185ystESyexdgligl9ZcWd%2BV1soB5yNOjAPlBYgYwoS%2BgcSO%2Fks3JZ%2BZx2dN2XgtqpRRMaOKGsEWJgiDBI6U7yQPsk%2FcK3%2F6QCKa5OQy4Q75DW2QOyrD1G8c%2Bg76QWhYVhvSxMIIOUReibzKLuhLvbrLBWuxKCwluo4TOrWDIFUlN5w%2FR%2B%2BHGcKjhT4ZM1t%2FtQGP9A2lU9DWsM0wKt0diIW6sslor0btRZ5oHJXMSIS%2FWfBZTjaiZsgVBEsPuGq%2Fnil1tAusjCPoPlY4R4nmJcAYWst8g8E%2FEJRznsRJpJpeBFJtJyOjdd4dejpiE4mc1ZzZedzU%2BB%2F9eZNh%2FF1iwaXAszll8AZgpHUkYHWas%2F%2BeMQw87b8xAY6pgGWIqf6cVGd8B%2BELX09s%2FPRznfcq9A%2FEblT6%2FXLdAAkjA9U7khYbLwO2nqpMr%2F6HjgbOkEHnv6TcLSw2b22BgeEfz8gXByFwIAdBd%2FxEX8im1N%2BfeOhf%2FbXJ%2B7mN9gz3ZDSudwKC8buwD3zamEZ%2BzuaZM10pu4gX8T39EVAwDSNlZ%2BSACtF3mAdaCdgJ2FmRHqxuvqNCUWCRu7t9HkxKMaJB2UJnK88&X-Amz-Signature=561e330956035b0cbe64669afe95e8b3986c5bd12b4fb22c42f3aaf7a30580b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJMYCVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTw8Oqaofh3eNtw3qc5CsFvVzLKBZGI1bH%2BaENQcn6BAiBa9%2BkZNUBY%2B3oXfKWxOo2Vg9LlqU9fDJbHpwymMgdxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEzvCmAO4cZXgMK0FKtwDUQK%2BnkM%2BTa%2Fbq5FaWvDvk6bTxKoV8UBSmRLREc5QOyu4F63fpW3ok2GhVrxLiYjAO49gZyy7369VBsE2WMoNSLopgs6k9rcqxsvhXJea2qy5MTcl5AjH1IobNy%2B59VNJnAg83j59JR8aBVPyF2Qmu8%2FxAXDpPzrIGZis19S0O%2F%2F2s6SvZKSpAMSxgUuOp%2FQ0u7WfPe83MXO7QiubH%2BC0%2FtFOJm9FiwcBmeIEAIonYw%2Bx7ZL5rcmBEOAv6vbf8FOKDW%2BANJbht6l%2BP185ystESyexdgligl9ZcWd%2BV1soB5yNOjAPlBYgYwoS%2BgcSO%2Fks3JZ%2BZx2dN2XgtqpRRMaOKGsEWJgiDBI6U7yQPsk%2FcK3%2F6QCKa5OQy4Q75DW2QOyrD1G8c%2Bg76QWhYVhvSxMIIOUReibzKLuhLvbrLBWuxKCwluo4TOrWDIFUlN5w%2FR%2B%2BHGcKjhT4ZM1t%2FtQGP9A2lU9DWsM0wKt0diIW6sslor0btRZ5oHJXMSIS%2FWfBZTjaiZsgVBEsPuGq%2Fnil1tAusjCPoPlY4R4nmJcAYWst8g8E%2FEJRznsRJpJpeBFJtJyOjdd4dejpiE4mc1ZzZedzU%2BB%2F9eZNh%2FF1iwaXAszll8AZgpHUkYHWas%2F%2BeMQw87b8xAY6pgGWIqf6cVGd8B%2BELX09s%2FPRznfcq9A%2FEblT6%2FXLdAAkjA9U7khYbLwO2nqpMr%2F6HjgbOkEHnv6TcLSw2b22BgeEfz8gXByFwIAdBd%2FxEX8im1N%2BfeOhf%2FbXJ%2B7mN9gz3ZDSudwKC8buwD3zamEZ%2BzuaZM10pu4gX8T39EVAwDSNlZ%2BSACtF3mAdaCdgJ2FmRHqxuvqNCUWCRu7t9HkxKMaJB2UJnK88&X-Amz-Signature=e42c7e7e030b67463442b076945ca386f4b0b01822637d2306b4b528dea6f62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJMYCVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTw8Oqaofh3eNtw3qc5CsFvVzLKBZGI1bH%2BaENQcn6BAiBa9%2BkZNUBY%2B3oXfKWxOo2Vg9LlqU9fDJbHpwymMgdxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEzvCmAO4cZXgMK0FKtwDUQK%2BnkM%2BTa%2Fbq5FaWvDvk6bTxKoV8UBSmRLREc5QOyu4F63fpW3ok2GhVrxLiYjAO49gZyy7369VBsE2WMoNSLopgs6k9rcqxsvhXJea2qy5MTcl5AjH1IobNy%2B59VNJnAg83j59JR8aBVPyF2Qmu8%2FxAXDpPzrIGZis19S0O%2F%2F2s6SvZKSpAMSxgUuOp%2FQ0u7WfPe83MXO7QiubH%2BC0%2FtFOJm9FiwcBmeIEAIonYw%2Bx7ZL5rcmBEOAv6vbf8FOKDW%2BANJbht6l%2BP185ystESyexdgligl9ZcWd%2BV1soB5yNOjAPlBYgYwoS%2BgcSO%2Fks3JZ%2BZx2dN2XgtqpRRMaOKGsEWJgiDBI6U7yQPsk%2FcK3%2F6QCKa5OQy4Q75DW2QOyrD1G8c%2Bg76QWhYVhvSxMIIOUReibzKLuhLvbrLBWuxKCwluo4TOrWDIFUlN5w%2FR%2B%2BHGcKjhT4ZM1t%2FtQGP9A2lU9DWsM0wKt0diIW6sslor0btRZ5oHJXMSIS%2FWfBZTjaiZsgVBEsPuGq%2Fnil1tAusjCPoPlY4R4nmJcAYWst8g8E%2FEJRznsRJpJpeBFJtJyOjdd4dejpiE4mc1ZzZedzU%2BB%2F9eZNh%2FF1iwaXAszll8AZgpHUkYHWas%2F%2BeMQw87b8xAY6pgGWIqf6cVGd8B%2BELX09s%2FPRznfcq9A%2FEblT6%2FXLdAAkjA9U7khYbLwO2nqpMr%2F6HjgbOkEHnv6TcLSw2b22BgeEfz8gXByFwIAdBd%2FxEX8im1N%2BfeOhf%2FbXJ%2B7mN9gz3ZDSudwKC8buwD3zamEZ%2BzuaZM10pu4gX8T39EVAwDSNlZ%2BSACtF3mAdaCdgJ2FmRHqxuvqNCUWCRu7t9HkxKMaJB2UJnK88&X-Amz-Signature=5472f9fac9bd57dc7636527e4c17dbf8cc47e5dff9eaab5a504eb988f1578830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJMYCVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTw8Oqaofh3eNtw3qc5CsFvVzLKBZGI1bH%2BaENQcn6BAiBa9%2BkZNUBY%2B3oXfKWxOo2Vg9LlqU9fDJbHpwymMgdxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEzvCmAO4cZXgMK0FKtwDUQK%2BnkM%2BTa%2Fbq5FaWvDvk6bTxKoV8UBSmRLREc5QOyu4F63fpW3ok2GhVrxLiYjAO49gZyy7369VBsE2WMoNSLopgs6k9rcqxsvhXJea2qy5MTcl5AjH1IobNy%2B59VNJnAg83j59JR8aBVPyF2Qmu8%2FxAXDpPzrIGZis19S0O%2F%2F2s6SvZKSpAMSxgUuOp%2FQ0u7WfPe83MXO7QiubH%2BC0%2FtFOJm9FiwcBmeIEAIonYw%2Bx7ZL5rcmBEOAv6vbf8FOKDW%2BANJbht6l%2BP185ystESyexdgligl9ZcWd%2BV1soB5yNOjAPlBYgYwoS%2BgcSO%2Fks3JZ%2BZx2dN2XgtqpRRMaOKGsEWJgiDBI6U7yQPsk%2FcK3%2F6QCKa5OQy4Q75DW2QOyrD1G8c%2Bg76QWhYVhvSxMIIOUReibzKLuhLvbrLBWuxKCwluo4TOrWDIFUlN5w%2FR%2B%2BHGcKjhT4ZM1t%2FtQGP9A2lU9DWsM0wKt0diIW6sslor0btRZ5oHJXMSIS%2FWfBZTjaiZsgVBEsPuGq%2Fnil1tAusjCPoPlY4R4nmJcAYWst8g8E%2FEJRznsRJpJpeBFJtJyOjdd4dejpiE4mc1ZzZedzU%2BB%2F9eZNh%2FF1iwaXAszll8AZgpHUkYHWas%2F%2BeMQw87b8xAY6pgGWIqf6cVGd8B%2BELX09s%2FPRznfcq9A%2FEblT6%2FXLdAAkjA9U7khYbLwO2nqpMr%2F6HjgbOkEHnv6TcLSw2b22BgeEfz8gXByFwIAdBd%2FxEX8im1N%2BfeOhf%2FbXJ%2B7mN9gz3ZDSudwKC8buwD3zamEZ%2BzuaZM10pu4gX8T39EVAwDSNlZ%2BSACtF3mAdaCdgJ2FmRHqxuvqNCUWCRu7t9HkxKMaJB2UJnK88&X-Amz-Signature=b4e6c4adcebf416e9a4c65ec97db12a4b654adea00f3edb9eb51d4413460e0d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJMYCVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIHTw8Oqaofh3eNtw3qc5CsFvVzLKBZGI1bH%2BaENQcn6BAiBa9%2BkZNUBY%2B3oXfKWxOo2Vg9LlqU9fDJbHpwymMgdxCyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEzvCmAO4cZXgMK0FKtwDUQK%2BnkM%2BTa%2Fbq5FaWvDvk6bTxKoV8UBSmRLREc5QOyu4F63fpW3ok2GhVrxLiYjAO49gZyy7369VBsE2WMoNSLopgs6k9rcqxsvhXJea2qy5MTcl5AjH1IobNy%2B59VNJnAg83j59JR8aBVPyF2Qmu8%2FxAXDpPzrIGZis19S0O%2F%2F2s6SvZKSpAMSxgUuOp%2FQ0u7WfPe83MXO7QiubH%2BC0%2FtFOJm9FiwcBmeIEAIonYw%2Bx7ZL5rcmBEOAv6vbf8FOKDW%2BANJbht6l%2BP185ystESyexdgligl9ZcWd%2BV1soB5yNOjAPlBYgYwoS%2BgcSO%2Fks3JZ%2BZx2dN2XgtqpRRMaOKGsEWJgiDBI6U7yQPsk%2FcK3%2F6QCKa5OQy4Q75DW2QOyrD1G8c%2Bg76QWhYVhvSxMIIOUReibzKLuhLvbrLBWuxKCwluo4TOrWDIFUlN5w%2FR%2B%2BHGcKjhT4ZM1t%2FtQGP9A2lU9DWsM0wKt0diIW6sslor0btRZ5oHJXMSIS%2FWfBZTjaiZsgVBEsPuGq%2Fnil1tAusjCPoPlY4R4nmJcAYWst8g8E%2FEJRznsRJpJpeBFJtJyOjdd4dejpiE4mc1ZzZedzU%2BB%2F9eZNh%2FF1iwaXAszll8AZgpHUkYHWas%2F%2BeMQw87b8xAY6pgGWIqf6cVGd8B%2BELX09s%2FPRznfcq9A%2FEblT6%2FXLdAAkjA9U7khYbLwO2nqpMr%2F6HjgbOkEHnv6TcLSw2b22BgeEfz8gXByFwIAdBd%2FxEX8im1N%2BfeOhf%2FbXJ%2B7mN9gz3ZDSudwKC8buwD3zamEZ%2BzuaZM10pu4gX8T39EVAwDSNlZ%2BSACtF3mAdaCdgJ2FmRHqxuvqNCUWCRu7t9HkxKMaJB2UJnK88&X-Amz-Signature=bf0a155701e6f47b462e809d47999fa68e6955fdc5f1af276d50014c4539453d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
