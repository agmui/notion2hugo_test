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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YPOW55O%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCuAr7rRZ7wD5wm61dA7PGeArMHkiC5sm5tHnDeHfg7RwIgKmvv%2FclYVbkY9GT5VPqa92s9xav3yzlSwdIddfJjY3Eq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEs38nZblvI%2Fnf21BSrcA73cE1qJretEP0IL50lGWDxGPSSg7hJvQDdQJC7XNkuI4%2FmLR3cZdvd4XNUR63FMyBvd61B9A8KUFxe6%2F4HBreY6ZvJ22p0uX28ko0jS%2FFMRF0XDypbNchH8CNRhF9mi25tSrUMuxhXG4SLyFUR1Fwdr2DcejnUqgyeXZ5TNGmjx0PjGxSJjzPhorQ7kxeKO%2Ffug0rsdiI5%2BHl8EqWriVLBcBNvTD7XJk%2FXXQUBfBWizYM1OPEha1ukjc4rEPuc33ohsxei0Sp%2BVu9P4UJX99dUk081hsAmYYKkVE%2FtpCzRyNVHfB1JAs7xItMNmi2UsLSqbyNhP84tMlbFGhOGecIPjCjzBoOXZrx0YMCMX3oDrnCgjs50NnQBnk6ATMDFR%2BymN%2BXb80NsFbF%2F9pUrKaCtkcL6susSW5QaUzjVkbPcSHjGcbIfee7JNfzG2XFLwgU8BgIErlapXVaQCaXf%2F7vL77dItTyxdTrKZYnKOAxjIY1XUbJaq2Mx947Dl3WlC29Mi8rVEXxwcsBBm5fomqxUPZJTNpRAmWZWOnniX%2F1%2B3TvxB6eTZ1njH7NEgDZN5W%2FCOzaAq0u1yCOYEIMGEJ9NGdS7dveeLsmrJr6lZiVBaS8FdYD91Wh5Sfl9BMP3%2BuMIGOqUBxPjVbgyBGaOubGjF4dAYfJFQQ%2BWhgu14IP7sJJzxJyIdPbyq1tmWcJZ7HBXxdhVD7SeXNrblJrXAMzDV8cQk%2Bu1m3KJMWw64xEmLqNSo4M%2BFVGzCxPhgBlQtRVA%2BSetzM%2F1AZABgEMNmRHRyl32b%2BFoZKJcwOn48VyNK7UY2b4BoWatH1rb%2BG9F4A0veEWcwPfFszrnSSEm2gQZbl3VzQKgJdbW1&X-Amz-Signature=7b101f7c85b24da54ffa9566965d8c6236170440eb2d6c5b8c32e45dd47f2f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YPOW55O%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCuAr7rRZ7wD5wm61dA7PGeArMHkiC5sm5tHnDeHfg7RwIgKmvv%2FclYVbkY9GT5VPqa92s9xav3yzlSwdIddfJjY3Eq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEs38nZblvI%2Fnf21BSrcA73cE1qJretEP0IL50lGWDxGPSSg7hJvQDdQJC7XNkuI4%2FmLR3cZdvd4XNUR63FMyBvd61B9A8KUFxe6%2F4HBreY6ZvJ22p0uX28ko0jS%2FFMRF0XDypbNchH8CNRhF9mi25tSrUMuxhXG4SLyFUR1Fwdr2DcejnUqgyeXZ5TNGmjx0PjGxSJjzPhorQ7kxeKO%2Ffug0rsdiI5%2BHl8EqWriVLBcBNvTD7XJk%2FXXQUBfBWizYM1OPEha1ukjc4rEPuc33ohsxei0Sp%2BVu9P4UJX99dUk081hsAmYYKkVE%2FtpCzRyNVHfB1JAs7xItMNmi2UsLSqbyNhP84tMlbFGhOGecIPjCjzBoOXZrx0YMCMX3oDrnCgjs50NnQBnk6ATMDFR%2BymN%2BXb80NsFbF%2F9pUrKaCtkcL6susSW5QaUzjVkbPcSHjGcbIfee7JNfzG2XFLwgU8BgIErlapXVaQCaXf%2F7vL77dItTyxdTrKZYnKOAxjIY1XUbJaq2Mx947Dl3WlC29Mi8rVEXxwcsBBm5fomqxUPZJTNpRAmWZWOnniX%2F1%2B3TvxB6eTZ1njH7NEgDZN5W%2FCOzaAq0u1yCOYEIMGEJ9NGdS7dveeLsmrJr6lZiVBaS8FdYD91Wh5Sfl9BMP3%2BuMIGOqUBxPjVbgyBGaOubGjF4dAYfJFQQ%2BWhgu14IP7sJJzxJyIdPbyq1tmWcJZ7HBXxdhVD7SeXNrblJrXAMzDV8cQk%2Bu1m3KJMWw64xEmLqNSo4M%2BFVGzCxPhgBlQtRVA%2BSetzM%2F1AZABgEMNmRHRyl32b%2BFoZKJcwOn48VyNK7UY2b4BoWatH1rb%2BG9F4A0veEWcwPfFszrnSSEm2gQZbl3VzQKgJdbW1&X-Amz-Signature=d802311a7c9f66def9fd5ca7f156b73129786b4b09555af969c4d6ecbaeb1e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
