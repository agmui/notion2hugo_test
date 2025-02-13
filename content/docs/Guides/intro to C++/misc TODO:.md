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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S35IKET7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdxBxaNA90xHfIaTJxMGzaK0h530jMnM%2BrqRtbCqIaGQIgFgIAk1o8B6%2FpOhJ6MDQseRpaKcdtw28nIUtVVqiV%2F%2F8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq3NmTrPodw2%2F%2FoISrcA4zv93maVNFFzZ%2FKdE15B9SSoN0dZUmbyxVZuYvf5DTU15rlFeXG5H8SnN%2BgvbPr2psaRBn%2FPNertjLdcSJcCWCDPX1ZAsy8XnZMcrnQrv467a1xxtUtg3BUyy%2FfxoZ0X1ANFTSb%2BW5lQsngXCEh1fcR8DuxObFGfjyTfK8L1HtLZlJR7H4RNlppsJDnMNDGg3jb95Lvr6EIg%2FfFiDtczoCH1JZmVQw%2FnVbnkWMjBx9tfkCTRTFdbhyxd5Wtfdc%2B2qzl%2BvLGz0K6sQWB49z7QXeiwZVMkisRr6zYk2CGa9eKI%2BUyqWi2l1LrtZIwVw8XpmhnLfFn1EEKWcvlDtKWzB216mDXD8leLL3M%2F9rlFk2miJx8bXH9JwimzqDz2apwoU1N%2BeJ1XF3Qj5cxFEKJKNPxwvYb5Z7Ycxy%2FkIwNY0gTX4hFhpd4NRjWUD141qssqXrYEF52v%2BL37K4qCaF62Hm5wMfr67bAA%2F89f%2Fuw%2FemTnGvnHv4ZkRp%2BTAXqyKrwmP030N471OR1tUklwnz1%2F1ZeAPvuE9LCdwb6onRn19%2FT9Qy9JCSPNsGgakFjXjLIVI2JSUsD01Fl%2BIO%2BlM76pCuCVJVfvOCToa%2F6u9g2s0o%2Ff9FbAUTN9pgx85ixMNKYtb0GOqUBxrdaSfTV18UlOdWBP2ij37dUMHGoNpFgMG5oQ1XTeaTsFh7SnR1F7yV1bnOfLn8kAPJ%2FMLg4Xjut9LrQLuiJVAh2WYeeyUjJjLbXa3VbdKaR%2BTCP22g1vomGkdXCZy9C3mddn7A94U1cyRPp3pXDMXUhlqljSEXJCusFBGiP0xksCmlSYwv1RQHn4dIJhxySoX7mtl6jWwbtqs%2FZJGojfMUvoq4H&X-Amz-Signature=f83680e33fa8867b91103a406bc22fcb351e8de74fb051b882e17c8fad34ce3e&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S35IKET7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdxBxaNA90xHfIaTJxMGzaK0h530jMnM%2BrqRtbCqIaGQIgFgIAk1o8B6%2FpOhJ6MDQseRpaKcdtw28nIUtVVqiV%2F%2F8qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq3NmTrPodw2%2F%2FoISrcA4zv93maVNFFzZ%2FKdE15B9SSoN0dZUmbyxVZuYvf5DTU15rlFeXG5H8SnN%2BgvbPr2psaRBn%2FPNertjLdcSJcCWCDPX1ZAsy8XnZMcrnQrv467a1xxtUtg3BUyy%2FfxoZ0X1ANFTSb%2BW5lQsngXCEh1fcR8DuxObFGfjyTfK8L1HtLZlJR7H4RNlppsJDnMNDGg3jb95Lvr6EIg%2FfFiDtczoCH1JZmVQw%2FnVbnkWMjBx9tfkCTRTFdbhyxd5Wtfdc%2B2qzl%2BvLGz0K6sQWB49z7QXeiwZVMkisRr6zYk2CGa9eKI%2BUyqWi2l1LrtZIwVw8XpmhnLfFn1EEKWcvlDtKWzB216mDXD8leLL3M%2F9rlFk2miJx8bXH9JwimzqDz2apwoU1N%2BeJ1XF3Qj5cxFEKJKNPxwvYb5Z7Ycxy%2FkIwNY0gTX4hFhpd4NRjWUD141qssqXrYEF52v%2BL37K4qCaF62Hm5wMfr67bAA%2F89f%2Fuw%2FemTnGvnHv4ZkRp%2BTAXqyKrwmP030N471OR1tUklwnz1%2F1ZeAPvuE9LCdwb6onRn19%2FT9Qy9JCSPNsGgakFjXjLIVI2JSUsD01Fl%2BIO%2BlM76pCuCVJVfvOCToa%2F6u9g2s0o%2Ff9FbAUTN9pgx85ixMNKYtb0GOqUBxrdaSfTV18UlOdWBP2ij37dUMHGoNpFgMG5oQ1XTeaTsFh7SnR1F7yV1bnOfLn8kAPJ%2FMLg4Xjut9LrQLuiJVAh2WYeeyUjJjLbXa3VbdKaR%2BTCP22g1vomGkdXCZy9C3mddn7A94U1cyRPp3pXDMXUhlqljSEXJCusFBGiP0xksCmlSYwv1RQHn4dIJhxySoX7mtl6jWwbtqs%2FZJGojfMUvoq4H&X-Amz-Signature=386f57afa5b23a94c950bf7167074aefa410db9cf91f01a81850ddbc0e6e99be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
