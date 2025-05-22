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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KGM54XJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIGc7T7jaDaOWKhD%2Bm1feeL8U0F8hoVhi%2F5X%2F0Snr%2F8RqAiEAyzFoz%2FOFoCssYeBQxIfhXhUcY9aHIC%2FCla9r0sesKgMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQCywujGbIswyXt0ircA1tFfgA4hA5w13cW%2FjsEew20QTLXnAFsr9SSnmXE%2F9yWPiXq6KytnjhQW1mPd7K0YIg609aAgjPKHnC%2BZaqET5JiT%2FeXf5YEtyIqg7Iun8fZIbtR9LmOuWKGZsZ90k2ghjrvQieKOQrBAPunjFQ%2F7Wq2XJ3%2BZjH5YGETHKVUcwvCKHrtJsRHgQ59aFVxvEHGk7HUsiLJB8jPw5P1ua1YVmQ5BhVESO8Iv%2FSdyUOOrP5Xj8Om4O7YHy5L%2FjOfmbMUODpbcmgHquCVzYPXIe7mdvdkLEdJVKssMINjZsERlaThcybWdYNikB7QpScKOLE4RP%2BD3OWQgtqsmblkTAcFsu1J5qFQ4qXQx0tUkaMyZizE6epwevz82PJM3U3c9HtM7Zge1i4JvG389YXfJUk4JKzQLxXErP55D%2Byz5OzNek%2FCYWcQifyVjuiBOnmUKTdDFaB%2FsQOruzpaikTCDItUqvQeRvF5MsDMboPv%2BRx%2F0AFY47oCNREvIS5zcHcQSc8jkEmrrTe%2Fn5jvDXNQ5B1iCa6t6GNgw5roqyrEWvug1wYFsngsxPGyiWA9w6Q2HcrymqsBwFeoVs6JFGINpodhERkBws23iE0NT0w2exeLlHmX6wAlmfgWfB3ZjUhkMKH3usEGOqUB0iXkCjKHaKmn99Sg3yw53bBxe5QjlyvbjipiJXbK4CdcpW%2FyYfIpA0KYYqHMQu9XGAUWskgLYqJGE7OHz01s%2FlexV3vTWaC0lBqLtAqnSP557ERWqAP3SnSNcRwVmTnEzbmlqsBaX9IMRwp4tOvSmdgS5Q6NqMJwdnsgPeZmbSQ7NPBityNtjhvDLc%2FeCc%2FBBy6eAKAF1To6Rt1saJ21%2Fgv69C5N&X-Amz-Signature=be18185afab4da8a31f0d5de378c1ddc0982a214d577debcdc1ef830fc6525f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KGM54XJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIGc7T7jaDaOWKhD%2Bm1feeL8U0F8hoVhi%2F5X%2F0Snr%2F8RqAiEAyzFoz%2FOFoCssYeBQxIfhXhUcY9aHIC%2FCla9r0sesKgMqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQCywujGbIswyXt0ircA1tFfgA4hA5w13cW%2FjsEew20QTLXnAFsr9SSnmXE%2F9yWPiXq6KytnjhQW1mPd7K0YIg609aAgjPKHnC%2BZaqET5JiT%2FeXf5YEtyIqg7Iun8fZIbtR9LmOuWKGZsZ90k2ghjrvQieKOQrBAPunjFQ%2F7Wq2XJ3%2BZjH5YGETHKVUcwvCKHrtJsRHgQ59aFVxvEHGk7HUsiLJB8jPw5P1ua1YVmQ5BhVESO8Iv%2FSdyUOOrP5Xj8Om4O7YHy5L%2FjOfmbMUODpbcmgHquCVzYPXIe7mdvdkLEdJVKssMINjZsERlaThcybWdYNikB7QpScKOLE4RP%2BD3OWQgtqsmblkTAcFsu1J5qFQ4qXQx0tUkaMyZizE6epwevz82PJM3U3c9HtM7Zge1i4JvG389YXfJUk4JKzQLxXErP55D%2Byz5OzNek%2FCYWcQifyVjuiBOnmUKTdDFaB%2FsQOruzpaikTCDItUqvQeRvF5MsDMboPv%2BRx%2F0AFY47oCNREvIS5zcHcQSc8jkEmrrTe%2Fn5jvDXNQ5B1iCa6t6GNgw5roqyrEWvug1wYFsngsxPGyiWA9w6Q2HcrymqsBwFeoVs6JFGINpodhERkBws23iE0NT0w2exeLlHmX6wAlmfgWfB3ZjUhkMKH3usEGOqUB0iXkCjKHaKmn99Sg3yw53bBxe5QjlyvbjipiJXbK4CdcpW%2FyYfIpA0KYYqHMQu9XGAUWskgLYqJGE7OHz01s%2FlexV3vTWaC0lBqLtAqnSP557ERWqAP3SnSNcRwVmTnEzbmlqsBaX9IMRwp4tOvSmdgS5Q6NqMJwdnsgPeZmbSQ7NPBityNtjhvDLc%2FeCc%2FBBy6eAKAF1To6Rt1saJ21%2Fgv69C5N&X-Amz-Signature=f2a1d35e48584807ae5f0638ddde448957dd6f88b29e0a3e84b0de1ebfe45124&X-Amz-SignedHeaders=host&x-id=GetObject)

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
