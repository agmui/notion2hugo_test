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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7S6AOUC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANvAkfGThHfj4Xe7pFVBrRZ08Qhf81CBhbfviCon3EiAiAqOPs1HXOPwQE5OaFP5vutw3kJ4iS25yH5t07Deh0GgyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYrbhI0kmEhX3nW0QKtwDBwJlmvaTrKLLR1ueP%2BZ1AfI4hoGRGcC5XE2JFPz5wWIDQ%2BVbYQnirN7qdYWGlZkiTHCGdMZSWQSMkQFOCUsY%2FBC9AdcZ7fC79FTnsqIY%2BLT0KbZAO%2Fp9GppFswktoaPhGUMcrc1HBQh6xwZuDoo5wlqpwnlcO0s%2BxOz3fzSGcTKP2Z5PzIreiqes1WZZIapudyFlp2VaQb3ey0mCrCK8XKb32z7jx2SaRZI1c9RXGux2KaDN9VoLYjwI1I%2Fl3rIvY6oqZRQqYR6VMhVt2%2FQyePG7xpUCjfBtrQp82JXokbtS7Gv34WV8xPkLTfTExYCk%2B4qxeyXx5K5C662qRqoIoCD3b1sOq7GXilRIrHwS%2BI88kaJFK0j2%2BJZWPqVYJivBs2Fs0vzlvbwFSS5z6nS2ZDJzGcQ3jFBnjPRMv73QYRwNRTP9H3Jn8pU%2F2JGoqQyJpoe%2Fw6hsomicPUQyM75C9GxHpbfkYp6bTXF5pIeV8kA9NF7%2BsVcvN7GdBZ0URBkJvqhEUpT6vC74AsMD9K0pi4aBdPTOfpeAwkc46sH%2FhUzvVJkgO7B%2Fis5Kh7C%2BoBK6iX552Ch0qVsmFHwJ%2B%2BKDFm%2BnPoj0VIjAqAXYwZe7RstfrqkbGQMfowQb2eUw7srZwgY6pgE8rrEVCd%2FRj906c0iZjhowr8ALRsrLU2fytBCx%2FO%2BBJeVBakKybm4Gs%2BmRBvkKE3yy9tr%2Bw%2FZMJpGYsvKk9ftUHeU7hUOrvjAgb22ieNmB5vqamfFXrBRpPIamOTWBgibMGeGsbtNygkkNSNCr7arxDdodwn698jTw%2BBNJ24Xm34HksCoFONoip0MhIRjK6rzTDuwZGQbdmZKUWQVKsPCZMKPUuqKz&X-Amz-Signature=552e12d1090f2ac1b844995348f3edf8312d16e03c376cb346f9081c3087ad0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7S6AOUC%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANvAkfGThHfj4Xe7pFVBrRZ08Qhf81CBhbfviCon3EiAiAqOPs1HXOPwQE5OaFP5vutw3kJ4iS25yH5t07Deh0GgyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYrbhI0kmEhX3nW0QKtwDBwJlmvaTrKLLR1ueP%2BZ1AfI4hoGRGcC5XE2JFPz5wWIDQ%2BVbYQnirN7qdYWGlZkiTHCGdMZSWQSMkQFOCUsY%2FBC9AdcZ7fC79FTnsqIY%2BLT0KbZAO%2Fp9GppFswktoaPhGUMcrc1HBQh6xwZuDoo5wlqpwnlcO0s%2BxOz3fzSGcTKP2Z5PzIreiqes1WZZIapudyFlp2VaQb3ey0mCrCK8XKb32z7jx2SaRZI1c9RXGux2KaDN9VoLYjwI1I%2Fl3rIvY6oqZRQqYR6VMhVt2%2FQyePG7xpUCjfBtrQp82JXokbtS7Gv34WV8xPkLTfTExYCk%2B4qxeyXx5K5C662qRqoIoCD3b1sOq7GXilRIrHwS%2BI88kaJFK0j2%2BJZWPqVYJivBs2Fs0vzlvbwFSS5z6nS2ZDJzGcQ3jFBnjPRMv73QYRwNRTP9H3Jn8pU%2F2JGoqQyJpoe%2Fw6hsomicPUQyM75C9GxHpbfkYp6bTXF5pIeV8kA9NF7%2BsVcvN7GdBZ0URBkJvqhEUpT6vC74AsMD9K0pi4aBdPTOfpeAwkc46sH%2FhUzvVJkgO7B%2Fis5Kh7C%2BoBK6iX552Ch0qVsmFHwJ%2B%2BKDFm%2BnPoj0VIjAqAXYwZe7RstfrqkbGQMfowQb2eUw7srZwgY6pgE8rrEVCd%2FRj906c0iZjhowr8ALRsrLU2fytBCx%2FO%2BBJeVBakKybm4Gs%2BmRBvkKE3yy9tr%2Bw%2FZMJpGYsvKk9ftUHeU7hUOrvjAgb22ieNmB5vqamfFXrBRpPIamOTWBgibMGeGsbtNygkkNSNCr7arxDdodwn698jTw%2BBNJ24Xm34HksCoFONoip0MhIRjK6rzTDuwZGQbdmZKUWQVKsPCZMKPUuqKz&X-Amz-Signature=465de30b721fdd5179f5577f573fd52ea3002d207508efeea9fecbbf13d2f5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
