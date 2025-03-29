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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466673HE6BI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDPMMMhWU%2FNpJnOolNmHp0Z1cUzYuKyNfZPH5e4%2Fu4%2FPgIhAL59xZutOFJIZCEDrmw3PT5yIoZrWrvnau%2Fo33KTiDPFKv8DCHMQABoMNjM3NDIzMTgzODA1IgyAoWK6HvSYxGX2g58q3AP2kUa1%2Bw3dAfvkH7c4Q55r5cXnG%2BOyr5sV4%2F0adTy76viTrpmrRpjYhno%2Bu8%2Fdc%2FY%2FTA0zTU35DBiTVlwpqWrr9DRHdu6tIyPXI99dm5SA93ywkwjekTOUgZCsDFfxVKLxJxMOdhXPT90bdC6Aq6EluFsXDgB%2FN5wcdjeuMNtvthVhZrBgKEkAIGNkNQt%2FzmLKxl7G%2FeP1hPN6p4o8kUFu5dVVTAoPtka0CpjMuQkiVJ%2BP11i9MIytY8oXUAcSy%2FZykKOaqnZRXokqd41y%2FcvvjIOeQt%2BLbcFH1jLn1iHMzgjn%2BHU%2F%2B%2FIZVrU0qKfgx3LuQLQsv7wodVn0Q6Q4xQzo5WC0xS2mlr2PNObi4iG9lXgmShJjkUlhCgx3DAvnrG6dg4zO4uuBbUJJJFuDLVzHZ8H9Cup0o64z%2B8NbAEZXX1YUvrf4%2Fj%2F%2B7lGdtojzj%2FyZQnCfi%2FL2rpnh9CvIvMdwaaqpFpjx97Eqoj2Th2hfZIpC8tNxx6arexRZzLPxHn2FOqkuBEZv1JfF5N%2FggU%2FJrA1oNPW2gfq%2BGiwhd4A1Pl0TkSp56JoBmP4yt9NzGRy9MgERqezPj7209dNdTTRQKDL7DxjJq55lai2Z418GxyhZTRhzndNAQZVcxDC%2Bi5%2B%2FBjqkAfe98REqoS6bhIPM1D70YZPtiJt7CAG%2BKi%2BDj378gMDzOvXxEqGJehM31cFudcD9pYF5ey8nhVbM6dO2dotCHmLYNIq9z1Dcixa5jC%2FCvi99Sydb978PCCRDGI4SpBixEMkRdRGclpf5WHqDuZ95rS7S6MTVCcmUcBJz3BSj4ZpQkuTsnCVax%2B9ei60UI5FXqEHdRq5GCT9Cfs3WKOMqSQATZ%2FoF&X-Amz-Signature=211b807df745abf30fd785069243b8629d2ee94e259a15df7c4583c1b777aeaf&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466673HE6BI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDPMMMhWU%2FNpJnOolNmHp0Z1cUzYuKyNfZPH5e4%2Fu4%2FPgIhAL59xZutOFJIZCEDrmw3PT5yIoZrWrvnau%2Fo33KTiDPFKv8DCHMQABoMNjM3NDIzMTgzODA1IgyAoWK6HvSYxGX2g58q3AP2kUa1%2Bw3dAfvkH7c4Q55r5cXnG%2BOyr5sV4%2F0adTy76viTrpmrRpjYhno%2Bu8%2Fdc%2FY%2FTA0zTU35DBiTVlwpqWrr9DRHdu6tIyPXI99dm5SA93ywkwjekTOUgZCsDFfxVKLxJxMOdhXPT90bdC6Aq6EluFsXDgB%2FN5wcdjeuMNtvthVhZrBgKEkAIGNkNQt%2FzmLKxl7G%2FeP1hPN6p4o8kUFu5dVVTAoPtka0CpjMuQkiVJ%2BP11i9MIytY8oXUAcSy%2FZykKOaqnZRXokqd41y%2FcvvjIOeQt%2BLbcFH1jLn1iHMzgjn%2BHU%2F%2B%2FIZVrU0qKfgx3LuQLQsv7wodVn0Q6Q4xQzo5WC0xS2mlr2PNObi4iG9lXgmShJjkUlhCgx3DAvnrG6dg4zO4uuBbUJJJFuDLVzHZ8H9Cup0o64z%2B8NbAEZXX1YUvrf4%2Fj%2F%2B7lGdtojzj%2FyZQnCfi%2FL2rpnh9CvIvMdwaaqpFpjx97Eqoj2Th2hfZIpC8tNxx6arexRZzLPxHn2FOqkuBEZv1JfF5N%2FggU%2FJrA1oNPW2gfq%2BGiwhd4A1Pl0TkSp56JoBmP4yt9NzGRy9MgERqezPj7209dNdTTRQKDL7DxjJq55lai2Z418GxyhZTRhzndNAQZVcxDC%2Bi5%2B%2FBjqkAfe98REqoS6bhIPM1D70YZPtiJt7CAG%2BKi%2BDj378gMDzOvXxEqGJehM31cFudcD9pYF5ey8nhVbM6dO2dotCHmLYNIq9z1Dcixa5jC%2FCvi99Sydb978PCCRDGI4SpBixEMkRdRGclpf5WHqDuZ95rS7S6MTVCcmUcBJz3BSj4ZpQkuTsnCVax%2B9ei60UI5FXqEHdRq5GCT9Cfs3WKOMqSQATZ%2FoF&X-Amz-Signature=f3541295ed963e97943ecc80de52bd386651fec6d6d660b6ef31a762fde20736&X-Amz-SignedHeaders=host&x-id=GetObject)

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
