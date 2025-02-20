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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWMYH3W%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVsNki894yUMsr8Iu1Wo3ZXagtI%2F3lxwIky%2FUBxZ1YEAiA5bC2AWCRcjArDQTbuXv%2BBiEPNhmDHq1q75FvFb5dJmyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaJrxUE0S4F1ezAnXKtwDEsNJmhx9D%2BSXe9rwBgiwYIy7N4WFKlKsv8WtO8e1Z6mAflebfM8DBSBpk1ro6hRI5OU2bpxegqiNJ6hZ3e%2FqVd5o9wmoerRadhq9OM7zbziS3QIVvEMD%2BrSVvhTknJzoWSj9zXJTk2HomKtfQ0QZ0t624O4pzKYJbgxtGb0T9rzJXe85dcBcvR8SytD2w2089XshZkV1TL3UUMni22cYfc%2BHtJ7220m%2B9WEe%2BnkbiL9vgEDlZu993e1NuE%2BV3w%2BwcKV%2Be8Ehljmdiw5G1Meoxsn6P%2Fr0Hn5Xeruv8lU1GyEy1ReZ2DiTbl0tXTmajAgmsUl%2BrmUDS%2B%2BDRN5BTNwUSciMKgpbhkrz9AL2QnCDURNZF7WwpI2owKFe4GOAsYToEA9R2x8UsAvsClcNcKVr1dpZOcFSuutvhFS57aiZOyIy7C6%2FJp%2Bg1e0ipW3aayy%2BnG6wYP1jBVpB22KcVsP2AbLSzeXkk21%2FSZS6bu8SyR%2BxsAQ4ChLXo2r1J4o0r5%2BaPaSCQt5UHHwQJvQFWTSERYI7LNqGr0iA4%2Bd7hsEm5MMXExa5HV8rzkkvPeiwwViTOywLNsrWDo8SZpqsjS57DQ82S3tXZF0yRSWQ81YrhC5o%2Fz9QJf3cNx1VjxEw6efZvQY6pgF40QQAmr0Mf0EzaML596K5pVlq5c8idpWWtDwnO99tsXFLu1rVqasm9ir9jVjJac%2B%2FPPBWPyu%2B%2B7b%2BnSVuCku5pyozQpTaj%2BBOuvnQy6XlLEw3ziYH5VlRIz3U1GV2UHuvvp30uFaq0Z%2Bq4SYch0nFaIG55U4ypFBErFUzk62ZKqxJKj4tsb7FPqP7X%2FnW8aqy%2BF228gGIa0A%2BjK9sVmj5YUDfexlf&X-Amz-Signature=cc46e1cfe5aac3904924b2be835b175ac0ade137cfd7b8b90d43c76af3485bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIWMYH3W%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVsNki894yUMsr8Iu1Wo3ZXagtI%2F3lxwIky%2FUBxZ1YEAiA5bC2AWCRcjArDQTbuXv%2BBiEPNhmDHq1q75FvFb5dJmyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaJrxUE0S4F1ezAnXKtwDEsNJmhx9D%2BSXe9rwBgiwYIy7N4WFKlKsv8WtO8e1Z6mAflebfM8DBSBpk1ro6hRI5OU2bpxegqiNJ6hZ3e%2FqVd5o9wmoerRadhq9OM7zbziS3QIVvEMD%2BrSVvhTknJzoWSj9zXJTk2HomKtfQ0QZ0t624O4pzKYJbgxtGb0T9rzJXe85dcBcvR8SytD2w2089XshZkV1TL3UUMni22cYfc%2BHtJ7220m%2B9WEe%2BnkbiL9vgEDlZu993e1NuE%2BV3w%2BwcKV%2Be8Ehljmdiw5G1Meoxsn6P%2Fr0Hn5Xeruv8lU1GyEy1ReZ2DiTbl0tXTmajAgmsUl%2BrmUDS%2B%2BDRN5BTNwUSciMKgpbhkrz9AL2QnCDURNZF7WwpI2owKFe4GOAsYToEA9R2x8UsAvsClcNcKVr1dpZOcFSuutvhFS57aiZOyIy7C6%2FJp%2Bg1e0ipW3aayy%2BnG6wYP1jBVpB22KcVsP2AbLSzeXkk21%2FSZS6bu8SyR%2BxsAQ4ChLXo2r1J4o0r5%2BaPaSCQt5UHHwQJvQFWTSERYI7LNqGr0iA4%2Bd7hsEm5MMXExa5HV8rzkkvPeiwwViTOywLNsrWDo8SZpqsjS57DQ82S3tXZF0yRSWQ81YrhC5o%2Fz9QJf3cNx1VjxEw6efZvQY6pgF40QQAmr0Mf0EzaML596K5pVlq5c8idpWWtDwnO99tsXFLu1rVqasm9ir9jVjJac%2B%2FPPBWPyu%2B%2B7b%2BnSVuCku5pyozQpTaj%2BBOuvnQy6XlLEw3ziYH5VlRIz3U1GV2UHuvvp30uFaq0Z%2Bq4SYch0nFaIG55U4ypFBErFUzk62ZKqxJKj4tsb7FPqP7X%2FnW8aqy%2BF228gGIa0A%2BjK9sVmj5YUDfexlf&X-Amz-Signature=43bfe3f0972d7e94e0c10ecbfda978e17508ce883d97796b02d2af0734687796&X-Amz-SignedHeaders=host&x-id=GetObject)

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
