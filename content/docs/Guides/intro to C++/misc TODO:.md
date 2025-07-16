---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TNFFP4K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCd%2FWJvmtoM6SKC4RRZWPTA1KJ2WTGOPQoXc1r6RAjyKAIhAPE4mjPAXRB76JiPc3%2B0dj7I7se4tYmVJCQjRynd3q9EKv8DCFQQABoMNjM3NDIzMTgzODA1IgzCCf2ceM7ENkZcdLMq3AOooLeFeRx7%2BL3XpeY%2BeOCEoo3NhJ1PY%2FsKtfJbffSlzOqX7j72CydPuq4M1n4%2BaG%2B%2BFCNWxrX%2F%2BmlPpLhUReSQxTpL2ChVv8T9db3V1jqtW7cN1fyiHYTtu%2B1QVu0mwRvksHZDtEP2nZR5LbGv0PNWsvdgSPCM1SP%2BzPZo0e67WDswJHCfPkYK1O9W7X3NPmo9Emy%2FgVh4mW8ao4MNCBXtH6HIs%2BkPQP5viOIuywZSKUG%2FZDiZnNY%2BZycL%2BcYCL7zxjeaGg08dhy4UI%2BBtpUjnrjxK4ubv46KED3faI%2FDzxAkj0%2BbvPV7RE1c00De89MP%2BH9RaptbP3%2FUUB1ZXt75rTRSybSsJ%2F9fOH9nNZlg50HpTdx6MvljqYxUpaQHM5krgmYBmExyz6TECSmdw%2F%2BTLMJt7Amsq%2BZCaM77rIfPW3yq7v%2B1Eo6dT9ObgiierwfQ0VLyzXIn6eDEuxdxRJGszpKbzhYfyiNyA0ckZwiF4txJyZxHlWVGGP47TVj9AHCZTOYg%2F%2FZE3rDuAXYiCBx03WNVRz%2FTc%2B9RQdvCFbfzIMu8sx1UXFtgvYz1DizpLGvEGKZmvQq8vM41xXrE0nv6Q2zQ6EpFXx3m8S5cosLiCHk4HdTWkfJvCQtNBYzCSr9zDBjqkATyzMoAVKCiGYAHdoKQSpYx360dgDBc8tCZlQL%2BhgmHsKYCcN%2FR%2BRJQ8u4KvAUYfsmIrX6ikP2nE62ikE9wjGfSJMVlt3%2BwdC8DGhmcqAu2k25Qr1M1ohJIUEcnB7CUJWOrgnJx8tVOKTtIIXOc3a1oUQO6%2BUR96XQ20h29iRcBa2vzsShG7ywUFWuNmo0HYlupwtrkbYlldiXEXwAooQ%2FBATHzw&X-Amz-Signature=6eeb98aeab8e6726f7d530589ad09f6b34e14a0dbfdd6d882d649fc3480ff350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TNFFP4K%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCd%2FWJvmtoM6SKC4RRZWPTA1KJ2WTGOPQoXc1r6RAjyKAIhAPE4mjPAXRB76JiPc3%2B0dj7I7se4tYmVJCQjRynd3q9EKv8DCFQQABoMNjM3NDIzMTgzODA1IgzCCf2ceM7ENkZcdLMq3AOooLeFeRx7%2BL3XpeY%2BeOCEoo3NhJ1PY%2FsKtfJbffSlzOqX7j72CydPuq4M1n4%2BaG%2B%2BFCNWxrX%2F%2BmlPpLhUReSQxTpL2ChVv8T9db3V1jqtW7cN1fyiHYTtu%2B1QVu0mwRvksHZDtEP2nZR5LbGv0PNWsvdgSPCM1SP%2BzPZo0e67WDswJHCfPkYK1O9W7X3NPmo9Emy%2FgVh4mW8ao4MNCBXtH6HIs%2BkPQP5viOIuywZSKUG%2FZDiZnNY%2BZycL%2BcYCL7zxjeaGg08dhy4UI%2BBtpUjnrjxK4ubv46KED3faI%2FDzxAkj0%2BbvPV7RE1c00De89MP%2BH9RaptbP3%2FUUB1ZXt75rTRSybSsJ%2F9fOH9nNZlg50HpTdx6MvljqYxUpaQHM5krgmYBmExyz6TECSmdw%2F%2BTLMJt7Amsq%2BZCaM77rIfPW3yq7v%2B1Eo6dT9ObgiierwfQ0VLyzXIn6eDEuxdxRJGszpKbzhYfyiNyA0ckZwiF4txJyZxHlWVGGP47TVj9AHCZTOYg%2F%2FZE3rDuAXYiCBx03WNVRz%2FTc%2B9RQdvCFbfzIMu8sx1UXFtgvYz1DizpLGvEGKZmvQq8vM41xXrE0nv6Q2zQ6EpFXx3m8S5cosLiCHk4HdTWkfJvCQtNBYzCSr9zDBjqkATyzMoAVKCiGYAHdoKQSpYx360dgDBc8tCZlQL%2BhgmHsKYCcN%2FR%2BRJQ8u4KvAUYfsmIrX6ikP2nE62ikE9wjGfSJMVlt3%2BwdC8DGhmcqAu2k25Qr1M1ohJIUEcnB7CUJWOrgnJx8tVOKTtIIXOc3a1oUQO6%2BUR96XQ20h29iRcBa2vzsShG7ywUFWuNmo0HYlupwtrkbYlldiXEXwAooQ%2FBATHzw&X-Amz-Signature=c5ba398ff249233349c768925b37853cfd4735d1763c56afa9ad6b1c52f7a50c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
